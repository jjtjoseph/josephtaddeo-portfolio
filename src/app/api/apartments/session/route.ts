import {cookies} from 'next/headers';
import {configured,sameOrigin,json} from '@/lib/apartments/auth';
import {cookieName,passwordMatches,issueToken} from '@/lib/apartments/crypto';
import {createHmac} from 'node:crypto';
import {checkLoginAttempt} from '@/lib/apartments/store';
export const runtime='nodejs';
export async function POST(request:Request){
 if(!sameOrigin(request))return json({error:'Invalid request origin'},403);
 if(!configured())return json({error:'Private access is not configured yet.'},503);
 try{
 const text=await request.text();if(text.length>1024)return json({error:'Invalid request'},400);
 const {password}=JSON.parse(text);
 if(typeof password!=='string')return json({error:'Invalid request'},400);
 const ip = process.env.VERCEL ? request.headers.get('x-vercel-forwarded-for') : 'local';
 const client = createHmac('sha256',process.env.APARTMENTS_SESSION_SECRET!).update(ip || 'unknown').digest('hex');
 const result = await checkLoginAttempt(client, () => passwordMatches(password,process.env.APARTMENTS_PASSWORD_HASH!));
 if ('retryAfter' in result) {
   const message = result.status === 'daily-limit' ? 'Daily login limit reached.' : 'Too many incorrect passwords.';
   const response = json({error:message+' Try again in '+Math.ceil(result.retryAfter/60)+' min.'},429);
   response.headers.set('Retry-After',String(result.retryAfter));
   return response;
 }
 if(result.status==='incorrect')return json({error:'Incorrect password'},401);
 (await cookies()).set(cookieName,issueToken(process.env.APARTMENTS_SESSION_SECRET!,process.env.APARTMENTS_PASSWORD_HASH!),{httpOnly:true,secure:process.env.NODE_ENV==='production',sameSite:'strict',path:'/',maxAge:7*86400});
 return json({ok:true});
 }catch{return json({error:'Private access is temporarily unavailable.'},503);}
}
export async function DELETE(request:Request){if(!sameOrigin(request))return json({error:'Invalid request origin'},403);(await cookies()).delete(cookieName);return json({ok:true});}
