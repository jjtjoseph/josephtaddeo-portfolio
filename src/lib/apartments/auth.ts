import 'server-only';
import {cookies} from 'next/headers';
import {cookieName,validToken} from './crypto';
export function configured(){return (process.env.APARTMENTS_SESSION_SECRET?.length??0)>=32&&!!process.env.APARTMENTS_PASSWORD_HASH;}
export async function authenticated(){return configured()&&validToken((await cookies()).get(cookieName)?.value??'',process.env.APARTMENTS_SESSION_SECRET!,process.env.APARTMENTS_PASSWORD_HASH!);}
export function sameOrigin(request:Request){const expected=process.env.APARTMENTS_ORIGIN;if(!expected&&process.env.NODE_ENV==='production')return false;return request.headers.get('origin')===(expected??new URL(request.url).origin);}
export function json(data:unknown,status=200){return Response.json(data,{status,headers:{'Cache-Control':'private, no-store','X-Robots-Tag':'noindex, nofollow','Referrer-Policy':'no-referrer'}});}
