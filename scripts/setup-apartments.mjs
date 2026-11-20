import {randomBytes,scryptSync} from 'node:crypto';
import {mkdir,readFile,writeFile} from 'node:fs/promises';
// Local-only bootstrap; passwords never enter source control or the browser bundle.
await mkdir('.private',{recursive:true,mode:0o700});
let env='';try{env=await readFile('.env.local','utf8');}catch{}
if(env.includes('APARTMENTS_PASSWORD_HASH='))throw Error('Already configured; refusing to overwrite access credentials.');
const password=randomBytes(18).toString('base64url'),salt=randomBytes(16).toString('hex');
await writeFile('.env.local',env+'\nAPARTMENTS_PASSWORD_HASH='+salt+':'+scryptSync(password,salt,64).toString('hex')+'\nAPARTMENTS_SESSION_SECRET='+randomBytes(48).toString('hex')+'\nAPARTMENTS_LOCAL_STORE=1\nAPARTMENTS_ORIGIN=http://127.0.0.1:3106\n',{mode:0o600});
await writeFile('.private/access.txt','Local tracker: http://localhost:3106/apartments\nPassword: '+password+'\n',{mode:0o600});
console.log('Configured local access. Password saved in .private/access.txt. Do not commit or upload this file.');
