export const statuses = ['New', 'Contacted', 'Replied', 'Tour scheduled', 'Toured', 'Applying', 'Unavailable', 'Passed'] as const;
export type Status = typeof statuses[number];
export type Apartment = {
 id: string; address: string; unit: string; borough: string; neighborhood: string;
 visited?: boolean; visitedOn?: string; fromKarina?: boolean;
 rent: number | null; status: Status; favorite: boolean; notes: string; research: string;
 contact: string; email: string; listingUrl: string; threadUrl: string; sourceUrl: string;
 review?: { outcome:string; checked:string; url:string };
 availability: string; observedAt: string; tourAt: string;
 lat: number | null; lng: number | null; locationSource: string;
};
export type Snapshot = { revision: number; updatedAt: string; apartments: Apartment[] };
export const colors: Record<Status,string> = {New:'#587c99',Contacted:'#7464ad',Replied:'#167c85','Tour scheduled':'#c47716',Toured:'#367b51',Applying:'#b34c85',Unavailable:'#8a939b',Passed:'#818991'};
export function safeUrl(value: unknown) { if(typeof value!=='string'||value.length>2000)return '';try {const u=new URL(value);return ['https:','http:'].includes(u.protocol)?u.href:'';} catch{return '';} }
export function validateApartment(value: unknown): Apartment {
 if(!value||typeof value!=='object')throw Error('Invalid apartment');
 const v=value as Record<string,unknown>;
 const str=(key:string,max=500)=>{if(typeof v[key]!=='string'||(v[key] as string).length>max)throw Error(`Invalid ${key}`);return (v[key] as string).trim();};
 const id=str('id',120),address=str('address',250);
 if(!id||!address||!statuses.includes(v.status as Status))throw Error('Address and valid status are required');
 const coordinate=(key:string,max:number)=>{const x=v[key];if(x===null)return null;if(typeof x!=='number'||!Number.isFinite(x)||Math.abs(x)>max)throw Error('Invalid coordinates');return x;};
 const lat=coordinate('lat',90),lng=coordinate('lng',180);
 if((lat===null)!==(lng===null))throw Error('Both coordinates required');
 if(v.rent!==null&&(typeof v.rent!=='number'||!Number.isFinite(v.rent)||v.rent<0||v.rent>100000))throw Error('Invalid rent');
 const url=(key:string)=>{const raw=str(key,2000);if(raw&&!safeUrl(raw))throw Error('Links must use http or https');return raw;};
 const visitedOn = v.visitedOn ?? '';
 if (typeof visitedOn !== 'string' || (visitedOn && (!/^\d{4}-\d{2}-\d{2}$/.test(visitedOn) || new Date(visitedOn + 'T12:00:00Z').toJSON()?.slice(0,10) !== visitedOn))) throw Error('Invalid visit date');
 let review: Apartment['review'];
 if (v.review != null) {
   const entry = v.review as Record<string,unknown>;
   if (typeof entry.outcome !== 'string' || entry.outcome.length > 80 ||
       typeof entry.checked !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(entry.checked) ||
       typeof entry.url !== 'string' || (entry.url && !safeUrl(entry.url))) throw Error('Invalid availability review');
   review = {outcome:entry.outcome, checked:entry.checked, url:entry.url};
 }
 return {id,address,review,unit:str('unit',50),borough:str('borough',80),neighborhood:str('neighborhood',120),rent:v.rent as number|null,status:v.status as Status,favorite:v.favorite===true,visited:v.visited===true || !!visitedOn || v.status==='Toured',visitedOn,fromKarina:v.fromKarina===true,notes:str('notes',10000),research:str('research',20000),contact:str('contact'),email:str('email',254),listingUrl:url('listingUrl'),threadUrl:url('threadUrl'),sourceUrl:url('sourceUrl'),availability:str('availability',2000),observedAt:str('observedAt',100),tourAt:str('tourAt',100),lat,lng,locationSource:str('locationSource',500)};
}

// Search scope is distinct from outreach history: a reply is not a suitable match.
export const targetNeighborhoods = new Set([
 'Battery Park City','Chelsea','East Village','Gramercy Park','Greenwich Village','Hudson Square','Hudson Yards','Kips Bay','Lenox Hill','Lincoln Square','Little Italy','Lower East Side','Murray Hill','NoHo','Nolita','SoHo','Tribeca','Two Bridges','West Chelsea','West Village',
 'Boerum Hill','Brooklyn Heights','Carroll Gardens','Clinton Hill','Cobble Hill','Columbia Street Waterfront District','Downtown Brooklyn','DUMBO','East Williamsburg','Fort Greene','Gowanus','Greenpoint','Park Slope','Prospect Heights','Red Hook','Vinegar Hill','Williamsburg','Long Island City','Hunters Point','Upper East Side'
]);
export function scopeReasons(a:Apartment):string[]{
 const reasons:string[]=[];
 if(!a.neighborhood)reasons.push('Neighborhood unverified');else if(!targetNeighborhoods.has(a.neighborhood))reasons.push('Outside requested neighborhoods');
 if(a.rent===null)reasons.push('Rent unconfirmed');else if(a.rent<2800||a.rent>3600)reasons.push('Outside $2,800–$3,600');
 if(a.status==='Passed'||a.status==='Unavailable')reasons.push(a.status);
 return reasons;
}

export function wasVisited(a: Apartment) {
 return Boolean(a.visited || a.visitedOn || a.status === 'Toured');
}
export function visitDate(a: Apartment) {
 return a.visitedOn ? new Intl.DateTimeFormat('en-US',{month:'short',day:'numeric',year:'numeric',timeZone:'UTC'}).format(new Date(a.visitedOn+'T12:00:00Z')) : 'Date unknown';
}
export function activity(a: Apartment) {
 if(wasVisited(a))return {label:'Visited',color:'#287747',background:'#e2f3e7'};
 if(['Contacted','Replied','Tour scheduled','Applying'].includes(a.status))return {label:'Ongoing contact',color:'#2463ae',background:'#e5effc'};
 return {label:'Other',color:'#74808b',background:'#f5f6f7'};
}

// Keep an active viewing on the map while its asking rent is being confirmed.
export function visibleInMainSearch(apartment: Apartment): boolean {
 if (wasVisited(apartment)) return true;
 const reasons = scopeReasons(apartment);
 if (reasons.length === 0) return true;
 const hasViewing = apartment.visited || ['Toured', 'Applying', 'Tour scheduled'].includes(apartment.status);
 return Boolean(hasViewing && reasons.length === 1 && reasons[0] === 'Rent unconfirmed');
}

export function availabilityGroup(a: Apartment) {
 if (a.status === 'Unavailable') return 'Unavailable';
 return a.review?.outcome === 'Advertised' ? 'Advertised' : 'Unverified';
}
