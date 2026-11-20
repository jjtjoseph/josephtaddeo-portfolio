import {authenticated,sameOrigin,json} from '@/lib/apartments/auth';
import {allowAttempt} from '@/lib/apartments/store';
export const runtime='nodejs';
export async function POST(request:Request){if(!await authenticated())return json({error:'Please unlock the tracker.'},401);if(!sameOrigin(request))return json({error:'Invalid request origin'},403);try{
 if(!await allowAttempt('geocode',60,3600))return json({error:'Location lookup limit reached. Try later.'},429);
 const raw=await request.text();if(raw.length>1000)return json({error:'Invalid address'},400);const {address}=JSON.parse(raw);if(typeof address!=='string'||address.length>350||!address.trim())return json({error:'Enter an address'},400);
 const url=new URL('https://geocoding.geo.census.gov/geocoder/locations/onelineaddress');url.search=new URLSearchParams({address,benchmark:'Public_AR_Current',format:'json'}).toString();
 const response=await fetch(url,{signal:AbortSignal.timeout(12000),cache:'no-store'});if(!response.ok)throw Error();const matches=(await response.json()).result?.addressMatches;
 if(!Array.isArray(matches)||matches.length!==1)return json({error:'No unique address match. Check the address or enter coordinates manually.'},422);
 const {x:lng,y:lat}=matches[0].coordinates;if(!Number.isFinite(lat)||!Number.isFinite(lng)||lat<40.4||lat>41||lng< -74.3||lng> -73.5)return json({error:'Location falls outside NYC. Check the address.'},422);
 return json({lat,lng,locationSource:'US Census address estimate',matchedAddress:matches[0].matchedAddress});
 }catch{return json({error:'Address lookup is unavailable. Your apartment can still be saved without a pin.'},503);}}
