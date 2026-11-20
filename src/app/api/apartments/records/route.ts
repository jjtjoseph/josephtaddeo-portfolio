import {authenticated,sameOrigin,json} from '@/lib/apartments/auth';
import {readSnapshot,saveSnapshot,Conflict} from '@/lib/apartments/store';
import {validateApartment} from '@/lib/apartments/model';
export const runtime='nodejs';
export async function GET(){if(!await authenticated())return json({error:'Please unlock the tracker.'},401);try{return json(await readSnapshot());}catch{return json({error:'Private storage is not configured or unavailable.'},503);}}
export async function PUT(request:Request){if(!await authenticated())return json({error:'Please unlock the tracker.'},401);if(!sameOrigin(request))return json({error:'Invalid request origin'},403);
 try{const raw=await request.text();if(raw.length>2000000)return json({error:'Too much data'},413);const {revision,apartments}=JSON.parse(raw);if(!Number.isInteger(revision)||revision<0||!Array.isArray(apartments)||apartments.length>1000)return json({error:'Invalid records'},400);const valid=apartments.map(validateApartment);if(new Set(valid.map(a=>a.id)).size!==valid.length)return json({error:'Duplicate apartment IDs'},400);return json(await saveSnapshot(revision,valid));}catch(e){if(e instanceof Conflict)return json({error:e.message},409);return json({error:'Could not save. Check your entries and connection; your changes remain on screen.'},400);}}
