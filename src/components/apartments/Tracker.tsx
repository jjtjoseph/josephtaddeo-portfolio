'use client';
import {useEffect,useMemo,useRef,useState} from 'react';
import dynamic from 'next/dynamic';
import ApartmentBrief from './ApartmentBrief';
import ListingCard from './ListingCard';
import {Apartment,Snapshot,Status,statuses,availabilityGroup,safeUrl,wasVisited,visitDate,visibleInMainSearch} from '@/lib/apartments/model';
import styles from './tracker.module.css';
import UnavailableBadge from './UnavailableBadge';
const ApartmentMap=dynamic(()=>import('./ApartmentMap'),{ssr:false,loading:()=> <div className={styles.mapHost}>Loading map…</div>});
const money=(n:number|null)=>n===null?'Rent unconfirmed':`$${n.toLocaleString()}`;
const directions=(a:Apartment,destination:string)=>'https://www.google.com/maps/dir/?'+new URLSearchParams({api:'1',origin:`${a.address}, ${a.borough}, NY`,destination,travelmode:'transit'});
async function api(url:string,options?:RequestInit){const r=await fetch(url,{...options,cache:'no-store'});const d=await r.json();if(!r.ok)throw Error(d.error??'Request failed');return d;}
function Link({url,children}:{url:string;children:React.ReactNode}){return safeUrl(url)?<a href={url} target="_blank" rel="noreferrer">{children}</a>:null;}
export default function Tracker({commuteAddress}: {commuteAddress?: string}){
 const [filtersOpen,setFiltersOpen] = useState(false);
 const [hideUnavailable,setHideUnavailable] = useState(false);
 const dialog=useRef<HTMLElement>(null);
 const [data,setData]=useState<Snapshot|null>(null),[selected,setSelected]=useState<string|null>(null),[query,setQuery]=useState(''),[status,setStatus]=useState('All'),[favorites,setFavorites]=useState(false),[scope,setScope]=useState('Current search'),[karina,setKarina]=useState(false),[error,setError]=useState(''),[busy,setBusy]=useState(false),[fit,setFit]=useState(0),[editor,setEditor]=useState<Apartment|null>(null),[mobileView,setMobileView]=useState('list');
 const reload=async()=>{setError('');try{setData(await api('/api/apartments/records'));}catch(e){setError((e as Error).message);}};
 useEffect(()=>{const search=new URLSearchParams(window.location.search).get('q');if(search)setQuery(search);let alive=true;api('/api/apartments/records').then(d=>{if(alive)setData(d);}).catch(e=>{if(alive)setError(e.message);});return()=>{alive=false;};},[]);
 useEffect(()=>{if(!editor)return;const warn=(e:BeforeUnloadEvent)=>{e.preventDefault();};window.addEventListener('beforeunload',warn);return()=>window.removeEventListener('beforeunload',warn);},[editor]);
 useEffect(()=>{if(!editor)return;const previous=document.activeElement as HTMLElement|null;const el=dialog.current;el?.querySelector<HTMLElement>('input')?.focus();const trap=(e:KeyboardEvent)=>{if(e.key!=='Tab'||!el)return;const focusable=Array.from(el.querySelectorAll<HTMLElement>('input:not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),a[href]'));const first=focusable[0],last=focusable[focusable.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last?.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first?.focus();}};document.addEventListener('keydown',trap);return()=>{document.removeEventListener('keydown',trap);previous?.focus();};
 // The same dialog stays mounted while fields change.
 // eslint-disable-next-line react-hooks/exhaustive-deps
 },[!!editor]);
 const filtered = useMemo(() => {
   const term = query.trim().toLowerCase();
   return (data?.apartments ?? []).filter(a => {
     if (hideUnavailable && availabilityGroup(a) === 'Unavailable') return false;
     if (scope === 'Current search' && !visibleInMainSearch(a)) return false;
     if (!['Current search','All tracked'].includes(scope) && availabilityGroup(a) !== scope) return false;
     if (status === 'Visited' && !wasVisited(a)) return false;
     if (status === 'Ongoing contact' && !['Contacted','Replied','Tour scheduled','Applying'].includes(a.status)) return false;
     if (!['All','Visited','Ongoing contact'].includes(status) && a.status !== status) return false;
     if ((favorites && !a.favorite) || (karina && !a.fromKarina)) return false;
     return [a.address,a.unit,a.borough,a.neighborhood,a.contact,a.notes,a.availability].join(' ').toLowerCase().includes(term);
   }).sort((a,b)=>Number(b.favorite)-Number(a.favorite)||(a.rent??Infinity)-(b.rent??Infinity));
 }, [data,query,scope,status,favorites,karina,hideUnavailable]);
 const current = filtered.find(a=>a.id===selected);
 const filterChanged = () => { setSelected(null); setFit(n=>n+1); };
 const hasFilters = scope!=='Current search'||status!=='All'||favorites||karina||hideUnavailable||Boolean(query);
 const resetFilters = () => {
   setQuery(''); setScope('Current search'); setStatus('All'); setFavorites(false); setKarina(false); setHideUnavailable(false); filterChanged();
 };
 const save=async(a:Apartment)=>{if(!data)return;setBusy(true);setError('');try{const apartments=data.apartments.some(x=>x.id===a.id)?data.apartments.map(x=>x.id===a.id?a:x):[...data.apartments,a];const next=await api('/api/apartments/records',{method:'PUT',headers:{'Content-Type':'application/json'},body:JSON.stringify({revision:data.revision,apartments})});setData(next);setEditor(null);setSelected(a.id);}catch(e){setError((e as Error).message);}finally{setBusy(false);}};
 const create=()=>setEditor({id:crypto.randomUUID(),address:'',unit:'',borough:'Brooklyn',neighborhood:'',rent:null,status:'New',favorite:false,notes:'',research:'',contact:'',email:'',listingUrl:'',threadUrl:'',sourceUrl:'',availability:'',observedAt:new Date().toISOString().slice(0,10),tourAt:'',lat:null,lng:null,locationSource:''});
 return <main className={styles.workspace}>
 <header className={styles.header}><div><h1>Finding home<span>.</span></h1></div><div className={styles.headerActions}><span>1 bedroom · $2,800–$3,600</span><button onClick={create} disabled={!data}>Add apartment</button><button className={styles.secondary} onClick={async()=>{if(editor&&!confirm('Discard unsaved changes and lock?'))return;try{await api('/api/apartments/session',{method:'DELETE'});window.location.reload();}catch(e){setError((e as Error).message);}}}>Lock</button></div></header>
 <div className={styles.toolbar}>
   <label className={styles.search}>
     <span className={styles.srOnly}>Search apartments</span>
     <input type="search" placeholder="Search apartments" value={query} onChange={e=>{setQuery(e.target.value);filterChanged();}}/>
   </label>
   <button className={styles.filterChip} aria-pressed={hideUnavailable} onClick={()=>{
     if (scope === 'Unavailable') setScope('All tracked');
     setHideUnavailable(!hideUnavailable);
     filterChanged();
   }}>Hide unavailable</button>
   <button className={styles.filterTrigger} aria-expanded={filtersOpen} aria-controls="tracker-filters" onClick={()=>setFiltersOpen(open=>!open)}>
     Filters{[scope!=='Current search',status!=='All',karina,favorites].filter(Boolean).length>0?' •':''}
   </button>
   <div id="tracker-filters" className={styles.filterControls} data-open={filtersOpen}>
     <label><span className={styles.srOnly}>Availability</span><select aria-label="Availability" value={scope} onChange={e=>{
       setScope(e.target.value);
       if (e.target.value === 'Unavailable') setHideUnavailable(false);
       filterChanged();
     }}>
       {['Current search','All tracked','Advertised','Unverified','Unavailable'].map(value=><option key={value}>{value}</option>)}
     </select></label>
     <label><span className={styles.srOnly}>Status</span><select aria-label="Status" value={status} onChange={e=>{setStatus(e.target.value);filterChanged();}}>
       {['All','Visited','Ongoing contact',...statuses.filter(s=>s!=='Toured'&&s!=='Unavailable')].map(value=><option key={value} value={value}>{value==='All'?'All activity':value}</option>)}
     </select></label>
     <button className={styles.filterChip} aria-pressed={karina} onClick={()=>{setKarina(!karina);filterChanged();}}>From Karina</button>
     <button className={styles.filterChip} aria-pressed={favorites} onClick={()=>{setFavorites(!favorites);filterChanged();}}>Favorites</button>
     {hasFilters&&<button className={styles.resetFilter} onClick={resetFilters}>Reset</button>}
   </div>
 </div>
 {error&&<div role="alert" className={styles.error}>{error}</div>}
 <div className={styles.legend} data-open={filtersOpen}><span><i style={{background:"#287747"}}/>Visited</span><span><i style={{background:"#2463ae"}}/>Ongoing contact</span><span><i style={{background:"#74808b"}}/>Other</span><span><UnavailableBadge/>Unavailable</span><span><b className={styles.kBadge}>K</b>Shared by Karina</span><span><i style={{background:"#b9bec0",borderRadius:2}}/>Outside search area</span>
   <div className={styles.mapTools}><span className={styles.count}>{filtered.length} places · {filtered.filter(a=>a.lat!==null).length} mapped</span>
     <button onClick={()=>setFit(f=>f+1)}>Fit map</button><button disabled={busy} onClick={reload}>Refresh</button>
   </div>
 </div><div className={styles.mobileTabs}><button aria-pressed={mobileView==='list'} onClick={()=>{setMobileView('list');setSelected(null);}}>List</button><button aria-pressed={mobileView==='map'} onClick={()=>{setMobileView('map');setSelected(null);}}>Map</button></div>
 <div className={styles.content}><section className={styles.list+' '+(mobileView!=='list'?styles.mobileHidden:'')} aria-label="Apartments">
   {data && <p className={styles.listCount} role="status">{filtered.length} {filtered.length === 1 ? 'listing' : 'listings'} shown</p>}
   {!data&&!error&&<p>Loading your search…</p>}
   {data&&!filtered.length&&<p className={styles.empty}>No apartments match these filters.</p>}
   {filtered.map(a=><ListingCard key={a.id} apartment={a} selected={current?.id===a.id} onSelect={()=>setSelected(a.id)}/>)}
 </section>
 <section className={styles.mapSection+' '+(mobileView!=='map'?styles.mobileHidden:'')}><ApartmentMap apartments={filtered} selected={selected} onSelect={setSelected} fit={fit}/><div className={styles.mapCaption}>Address estimates · verify the entrance before a visit</div></section>
 {current&&<aside className={styles.detail} aria-label="Apartment details"><div className={styles.detailTop}><span className={styles.eyebrow}>APARTMENT DETAILS</span><button className={styles.secondary} aria-label="Close details" onClick={()=>setSelected(null)}>Close</button></div><h2>{current.status==='Unavailable'&&<UnavailableBadge/>}{current.fromKarina&&<span className={styles.kBadge} title="Shared by Karina" aria-label="Shared by Karina">K</span>}{current.address}{current.unit?` #${current.unit}`:''}</h2><p>{current.neighborhood} · {current.borough}</p><div className={styles.price}>{money(current.rent)}<small> base / month</small></div><div className={styles.detailActions}><button onClick={()=>setEditor({...current})}>Edit details</button><button className={styles.secondary} disabled={busy} onClick={()=>save({...current,favorite:!current.favorite})}>{current.favorite?'★ Saved':'☆ Favorite'}</button></div><dl>{wasVisited(current)&&<><dt>Date visited</dt><dd className={styles.visitStamp}>{visitDate(current)}</dd></>}<dt>Status</dt><dd>{current.visited&&current.status!=='Toured'?'Visited · ':''}{current.status}</dd><dt>Availability</dt><dd>{current.availability||'Unconfirmed'}</dd>{current.tourAt&&<><dt>Showing</dt><dd>{current.tourAt.replace('T',' ')} · New York time</dd></>}<dt>Contact</dt><dd>{current.contact||'Not recorded'}{current.email&&<><br/>{current.email}</>}</dd><dt>Last researched</dt><dd>{current.observedAt||'Unknown'}</dd></dl><div className={styles.links}><Link url={current.listingUrl}>Listing</Link><Link url={current.threadUrl}>Email thread</Link><Link url={current.sourceUrl}>Research source</Link></div><ApartmentBrief apartment={current}/><h3>Location checks</h3><div className={styles.links}>{[['Washington Square Park','Washington Square Arch, Manhattan, NY'],...(commuteAddress ? [[commuteAddress.split(',')[0],commuteAddress]] : []),['Atlantic Terminal','Atlantic Terminal, Brooklyn, NY'],['Union Square','Union Square, Manhattan, NY'],['Fulton Center','Fulton Center, Manhattan, NY']].map(([label,dest])=><Link key={label} url={directions(current,dest)}>{label}</Link>)}{['grocery store','laundromat','hospital emergency department','LIRR station'].map(q=><Link key={q} url={'https://www.google.com/maps/search/?'+new URLSearchParams({api:'1',query:`${q} near ${current.address}, ${current.borough}, NY`})}>{q}</Link>)}</div><p className={styles.muted}>Directions open in Google Maps. These links are not measured commute times or verified nearby services.</p></aside>}
 </div><footer className={styles.footer}>{data?.updatedAt?`Saved ${new Date(data.updatedAt).toLocaleString()}`:'Private search workspace'} · Changes save to this workspace. No emails are sent here.</footer>
 {editor&&<div className={styles.overlay}><section ref={dialog} role="dialog" aria-modal="true" aria-labelledby="edit-title" className={styles.editor}><h2 id="edit-title">{data?.apartments.some(x=>x.id===editor.id)?'Edit apartment':'Add apartment'}</h2><form onSubmit={e=>{e.preventDefault();save(editor);}}><fieldset disabled={busy} className={styles.fields}>{(['address','unit','borough','neighborhood','contact','email','listingUrl','threadUrl','sourceUrl','availability'] as const).map(key=><label key={key}>{({listingUrl:'Listing link',threadUrl:'Email thread link',sourceUrl:'Research source',address:'Street address',unit:'Unit',borough:'Borough',neighborhood:'Neighborhood',contact:'Contact',email:'Contact email',availability:'Availability'}[key])}<input required={key==='address'} type={key.endsWith('Url')?'url':key==='email'?'email':'text'} value={editor[key]} onChange={e=>setEditor({...editor,[key]:e.target.value})}/></label>)}<label>Monthly base rent ($)<input type="number" min="0" max="100000" value={editor.rent??''} onChange={e=>setEditor({...editor,rent:e.target.value===''?null:Number(e.target.value)})}/></label><label>Status<select value={editor.status} onChange={e=>setEditor({...editor,status:e.target.value as Status,visited:wasVisited(editor)||e.target.value==='Toured'})}>{statuses.map(s=><option key={s}>{s}</option>)}</select></label><label className={styles.check}><input type="checkbox" checked={wasVisited(editor)} disabled={editor.status==='Toured'} onChange={e=>setEditor({...editor,visited:e.target.checked,visitedOn:e.target.checked?editor.visitedOn:''})}/>Visited in person</label>{wasVisited(editor)&&<label>Date visited<input type="date" value={editor.visitedOn??''} onChange={e=>setEditor({...editor,visitedOn:e.target.value})}/></label>}<label className={styles.check}><input type="checkbox" checked={!!editor.fromKarina} onChange={e=>setEditor({...editor,fromKarina:e.target.checked})}/>Shared by Karina</label><label>Showing (New York time)<input type="datetime-local" value={editor.tourAt} onChange={e=>setEditor({...editor,tourAt:e.target.value})}/></label><label>Research date<input type="date" value={editor.observedAt.slice(0,10)} onChange={e=>setEditor({...editor,observedAt:e.target.value})}/></label><label className={styles.full}>Our notes<textarea rows={3} value={editor.notes} onChange={e=>setEditor({...editor,notes:e.target.value})}/></label><label className={styles.full}>Property research<textarea rows={5} value={editor.research} onChange={e=>setEditor({...editor,research:e.target.value})}/></label><label>Latitude<input type="number" step="any" min="-90" max="90" value={editor.lat??''} onChange={e=>setEditor({...editor,lat:e.target.value===''?null:Number(e.target.value),locationSource:'Manually entered; verify location'})}/></label><label>Longitude<input type="number" step="any" min="-180" max="180" value={editor.lng??''} onChange={e=>setEditor({...editor,lng:e.target.value===''?null:Number(e.target.value),locationSource:'Manually entered; verify location'})}/></label><div className={styles.full}><button type="button" className={styles.secondary} disabled={!editor.address} onClick={async()=>{setBusy(true);setError('');try{const d=await api('/api/apartments/locate',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({address:`${editor.address}, ${editor.borough}, NY`})});setEditor({...editor,lat:d.lat,lng:d.lng,locationSource:d.locationSource});}catch(e){setError((e as Error).message);}finally{setBusy(false);}}}>Locate address</button><small> {editor.locationSource||'No location yet'}</small></div></fieldset>{error&&<p role="alert" className={styles.error}>{error}</p>}<div className={styles.formActions}><button disabled={busy}>{busy?'Saving…':'Save apartment'}</button><button type="button" className={styles.secondary} disabled={busy} onClick={()=>{if(confirm('Discard changes to this apartment?'))setEditor(null);}}>Cancel</button></div></form></section></div>}
 </main>;
}
