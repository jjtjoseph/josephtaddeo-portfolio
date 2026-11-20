import {test} from 'node:test';
import assert from 'node:assert/strict';
import {mkdtemp,rm} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import path from 'node:path';
test('local persistence detects stale concurrent writes and retains acknowledged data',async()=>{
 const cwd=process.cwd(),dir=await mkdtemp(path.join(tmpdir(),'apartment-store-test-'));process.chdir(dir);process.env.APARTMENTS_LOCAL_STORE='1';delete process.env.APARTMENTS_DATABASE_URL;
 try{const {readSnapshot,saveSnapshot,Conflict,allowAttempt}=await import('../src/lib/apartments/store');
 assert.equal((await readSnapshot()).revision,0);
 const result=await Promise.allSettled([saveSnapshot(0,[]),saveSnapshot(0,[])]);
 assert.equal(result.filter(x=>x.status==='fulfilled').length,1);
 assert.ok(result.some(x=>x.status==='rejected'&&x.reason instanceof Conflict));
 assert.equal((await readSnapshot()).revision,1);
 assert.equal(await allowAttempt('test',1),true);assert.equal(await allowAttempt('test',1),false);
 process.env.VERCEL='1';await assert.rejects(readSnapshot());delete process.env.VERCEL;
 }finally{process.chdir(cwd);await rm(dir,{recursive:true,force:true});}
});
