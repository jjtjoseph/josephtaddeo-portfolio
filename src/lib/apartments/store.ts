import 'server-only';
import {Pool} from 'pg';
import {mkdir,readFile,writeFile,rename} from 'node:fs/promises';
import path from 'node:path';
import type {Snapshot} from './model';
import {checkLogin, type LoginAttempt} from './login-limit';
const root=path.join(process.cwd(),'.private');
const globalStore=globalThis as typeof globalThis & {apartmentPool?:Pool;apartmentQueue?:Promise<unknown>};
export class Conflict extends Error {}
function pool(){if(!process.env.APARTMENTS_DATABASE_URL)return null;return globalStore.apartmentPool??=new Pool({connectionString:process.env.APARTMENTS_DATABASE_URL,max:3});}
function localAllowed(){if(process.env.APARTMENTS_LOCAL_STORE!=='1'||process.env.VERCEL)throw Error('Private storage is not configured');}
async function localRead():Promise<Snapshot>{localAllowed();try{return JSON.parse(await readFile(path.join(root,'apartments.json'),'utf8'));}catch(e){if((e as NodeJS.ErrnoException).code!=='ENOENT')throw e;return {revision:0,updatedAt:'',apartments:[]};}}
async function prepare(){const p=pool();if(p)await p.query(`CREATE TABLE IF NOT EXISTS private_apartments (id integer PRIMARY KEY CHECK(id=1), data jsonb NOT NULL); CREATE TABLE IF NOT EXISTS private_apartment_limits (key text PRIMARY KEY, count integer NOT NULL, expires_at timestamptz NOT NULL)`);return p;}
export async function readSnapshot():Promise<Snapshot>{const p=await prepare();if(!p)return localRead();const r=await p.query('SELECT data FROM private_apartments WHERE id=1');return r.rows[0]?.data??{revision:0,updatedAt:'',apartments:[]};}
export async function saveSnapshot(expected:number,apartments:Snapshot['apartments']){
 const p=await prepare();const next={revision:expected+1,updatedAt:new Date().toISOString(),apartments};
 if(p){const r=expected===0?await p.query('INSERT INTO private_apartments(id,data) VALUES(1,$1) ON CONFLICT DO NOTHING RETURNING id',[next]):await p.query("UPDATE private_apartments SET data=$1 WHERE id=1 AND (data->>'revision')::integer=$2 RETURNING id",[next,expected]);if(!r.rowCount)throw new Conflict('Updated elsewhere. Refresh before saving.');return next;}
 const task=(globalStore.apartmentQueue??Promise.resolve()).catch(()=>{}).then(async()=>{const current=await localRead();if(current.revision!==expected)throw new Conflict('Updated elsewhere. Refresh before saving.');await mkdir(root,{recursive:true,mode:0o700});const tmp=path.join(root,'apartments.tmp');await writeFile(tmp,JSON.stringify(next),{mode:0o600});await rename(tmp,path.join(root,'apartments.json'));return next;});globalStore.apartmentQueue=task;return task;
}
// Shared production rate limit: survives serverless replicas and cold starts.
const localLimits=new Map<string,{count:number;expires:number}>();
export async function allowAttempt(key:string,max=8,seconds=900){const p=await prepare();if(p){const r=await p.query(`INSERT INTO private_apartment_limits(key,count,expires_at) VALUES($1,1,now()+($2 * interval '1 second')) ON CONFLICT(key) DO UPDATE SET count=CASE WHEN private_apartment_limits.expires_at<now() THEN 1 ELSE private_apartment_limits.count+1 END,expires_at=CASE WHEN private_apartment_limits.expires_at<now() THEN now()+($2 * interval '1 second') ELSE private_apartment_limits.expires_at END RETURNING count`,[key,seconds]);return r.rows[0].count<=max;}
 localAllowed();const now=Date.now();for(const [k,v] of localLimits)if(v.expires<now)localLimits.delete(k);const v=localLimits.get(key)??{count:0,expires:now+seconds*1000};v.count++;localLimits.set(key,v);return v.count<=max;}

const localLogins: LoginAttempt[] = [];
export async function checkLoginAttempt(client: string, verify: () => boolean) {
 const db = pool();
 if (!db) {
   localAllowed();
   return checkLogin(localLogins, client, Date.now(), verify);
 }
 const connection = await db.connect();
 try {
   await connection.query('BEGIN');
   // Serialize admission and password checks even across serverless instances.
   await connection.query('SELECT pg_advisory_xact_lock(1407932402)');
   await connection.query('CREATE TABLE IF NOT EXISTS private_apartment_logins (id integer PRIMARY KEY CHECK(id=1), attempts jsonb NOT NULL)');
   const {rows} = await connection.query('SELECT attempts FROM private_apartment_logins WHERE id=1');
   const attempts: LoginAttempt[] = rows[0]?.attempts ?? [];
   const time = await connection.query('SELECT clock_timestamp() AS now');
   const result = checkLogin(attempts, client, time.rows[0].now.getTime(), verify);
   if (result.status === 'accepted' || result.status === 'incorrect') {
     await connection.query('INSERT INTO private_apartment_logins VALUES(1,$1::jsonb) ON CONFLICT(id) DO UPDATE SET attempts=excluded.attempts', [JSON.stringify(attempts)]);
   }
   await connection.query('COMMIT');
   return result;
 } catch (error) {
   await connection.query('ROLLBACK');
   throw error;
 } finally {
   connection.release();
 }
}
