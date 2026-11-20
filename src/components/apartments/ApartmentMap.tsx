'use client';
import {useEffect,useRef,useState} from 'react';
import type {Map as VectorMap,Marker} from 'maplibre-gl';
import {version} from 'maplibre-gl/package.json';
import {Apartment,activity,wasVisited} from '@/lib/apartments/model';
import styles from './tracker.module.css';
import UnavailableBadge from './UnavailableBadge';
import {showNeighborhoods} from './neighborhoodOverlay';
import {showSubway} from './subwayOverlay';
// Adapted from Velocity's vector-map.ts: MapLibre + OpenFreeMap Positron.
type LocatedApartment = Apartment & {lat:number; lng:number};
type PinGroup = {x:number; y:number; members:LocatedApartment[]};
const rentLabel = (apartment: Apartment) => apartment.rent === null ? 'Rent TBD' : '$' + apartment.rent.toLocaleString();
const addressLabel = (apartment: Apartment) => apartment.address + (apartment.unit ? ' #' + apartment.unit : '');
const MAP_STYLE='https://tiles.openfreemap.org/styles/positron';
function shadeOutsideSearch(view: VectorMap) {
 const source = 'outside-search';
 view.addSource(source, {
   type: 'geojson', data: '/geography/outside-search.geojson',
   attribution: '<a href="https://github.com/chriswhong/nyc-neighborhood-boundaries">Neighborhood outlines © NYC Neighborhood Boundaries contributors / Zillow</a> · <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA</a>',
 });
 const firstLabel = view.getStyle().layers.find(layer => layer.type === 'symbol');
 view.addLayer({
   id: source, type: 'fill', source,
   paint: {'fill-color': '#68727a', 'fill-opacity': 0.42},
 }, firstLabel?.id);
}
export default function ApartmentMap({apartments,selected,onSelect,fit}:{apartments:Apartment[];selected:string|null;onSelect:(id:string)=>void;fit:number}){
 const host=useRef<HTMLDivElement>(null),map=useRef<VectorMap|null>(null),markers=useRef<Marker[]>([]),select=useRef(onSelect);const [ready,setReady]=useState(false),[error,setError]=useState('');
 const [subway, setSubway] = useState(true);
 const [neighborhoods,setNeighborhoods] = useState(false);
 useEffect(() => {
   if (ready && map.current) showNeighborhoods(map.current,neighborhoods);
 }, [ready,neighborhoods]);
 useEffect(() => {
   if (ready && map.current) showSubway(map.current,subway);
 }, [ready,subway]);
 const picker = useRef<HTMLDialogElement>(null);
 const [choices, setChoices] = useState<Apartment[]>([]);
 useEffect(() => {
   if (choices.length) picker.current?.showModal();
 }, [choices]);
 useEffect(()=>{select.current=onSelect;},[onSelect]);
 useEffect(()=>{let cancelled=false;let observer:ResizeObserver|undefined;import('maplibre-gl').then(lib=>{if(cancelled||!host.current)return;lib.setWorkerUrl(`/maps/${version}/maplibre-gl-worker.mjs`);const m=new lib.Map({container:host.current,style:MAP_STYLE,center:[-73.985,40.725],zoom:11.6,attributionControl:{compact:true}});map.current=m;m.addControl(new lib.NavigationControl({showCompass:false}),'bottom-right');m.once('load',()=>{shadeOutsideSearch(m);setReady(true);setError('');});m.on('error',()=>setError('Map tiles are unavailable. You can still use the apartment list.'));observer=new ResizeObserver(()=>m.resize());observer.observe(host.current);}).catch(()=>setError('Map could not load. Use the apartment list.'));return()=>{cancelled=true;observer?.disconnect();map.current?.remove();map.current=null;};},[]);
 useEffect(() => {
   const view = map.current;
   if (!ready || !view) return;
   let cancelled = false;
   let cleanup = () => {};
   const located = apartments.filter((a): a is LocatedApartment => a.lat !== null && a.lng !== null);
   const priority = (a: Apartment) => a.id === selected ? 4 : activity(a).label === 'Visited' ? 3 : activity(a).label === 'Ongoing contact' ? 2 : 1;
   located.sort((a,b) => priority(b) - priority(a));
   import('maplibre-gl').then(lib => {
     if (cancelled) return;
     const clear = () => { markers.current.forEach(marker => marker.remove()); markers.current = []; };
     function draw() {
       if (!view) return;
       clear();
       const groups: PinGroup[] = [];
       const {clientWidth: width, clientHeight: height} = view.getContainer();
       for (const apartment of located) {
         const point = view.project([apartment.lng, apartment.lat]);
         if (point.x < 0 || point.x > width || point.y < 0 || point.y > height) continue;
         // Reserve the largest label footprint, including the badge and focus ring.
         const neighbors = groups.filter(g => Math.abs(g.x-point.x)<122 && Math.abs(g.y-point.y)<44);
         const nearest = neighbors.sort((a,b) => Math.hypot(a.x-point.x,a.y-point.y)-Math.hypot(b.x-point.x,b.y-point.y))[0];
         if (nearest) nearest.members.push(apartment);
         else groups.push({x:point.x,y:point.y,members:[apartment]});
       }
       for (const {members} of groups) {
         const first = members[0];
         const grouped = members.length > 1;
         const button = document.createElement('button');
         button.className = styles.pin + (first.id === selected ? ' '+styles.pinSelected : '');
         const state = activity(members.find(wasVisited) ?? first);
         Object.assign(button.style, {borderColor:state.color, background:state.background, color:state.color});
         button.textContent = grouped ? members.length+' places' : rentLabel(first);
         if (members.some(a => a.fromKarina)) {
           const badge = document.createElement('span');
           badge.className = styles.kBadge;
           badge.textContent = 'K';
           badge.title = 'Shared by Karina';
           button.appendChild(badge);
         }
         if (members.every(a => a.status === 'Unavailable')) {
           const badge = document.createElement('span');
           badge.className = styles.unavailableBadge;
           badge.textContent = '×';
           badge.title = 'Unavailable';
           button.appendChild(badge);
         }
         button.title = members.map(a => addressLabel(a)+(wasVisited(a)?' · Visited':'')+' · '+a.status+(a.fromKarina?' · Shared by Karina':'')).join('\n');
         button.setAttribute('aria-label', grouped ? 'Choose from '+members.length+' apartments' : button.title);
         if (grouped) button.setAttribute('aria-haspopup','dialog');
         button.onclick = () => grouped ? setChoices(members) : select.current(first.id);
         const anchor = document.createElement('div');
         Object.assign(anchor.style, {position:'absolute',top:'0',left:'0',margin:'0',padding:'0'});
         anchor.dataset.apartmentId = first.id;
         anchor.appendChild(button);
         markers.current.push(new lib.Marker({element:anchor,anchor:'bottom'}).setLngLat([first.lng,first.lat]).addTo(view));
       }
       const park = view.project([-73.9973,40.7308]);
       if (!groups.some(g => Math.abs(g.x-park.x)<120 && Math.abs(g.y-18-park.y)<46)) {
         const landmark = document.createElement('div');
         landmark.className = styles.landmark;
         Object.assign(landmark.style,{position:'absolute',top:'0',left:'0'});
         landmark.textContent = 'Washington Square Park';
         markers.current.push(new lib.Marker({element:landmark}).setLngLat([-73.9973,40.7308]).addTo(view));
       }
     }
     let frame = 0;
     const schedule = () => {
       if (!frame) frame = requestAnimationFrame(() => { frame=0; draw(); });
     };
     view.on('move', schedule);
     view.on('resize', schedule);
     draw();
     cleanup = () => {
       cancelAnimationFrame(frame);
       view.off('move',schedule);
       view.off('resize',schedule);
       clear();
     };
   });
   return () => { cancelled=true; cleanup(); };
 }, [apartments,selected,ready]);
 useEffect(()=>{if(!ready||!map.current||!selected)return;const a=apartments.find(x=>x.id===selected);if(a?.lat!=null&&a.lng!=null)map.current.easeTo({center:[a.lng,a.lat],zoom:Math.max(map.current.getZoom(),13),duration:matchMedia('(prefers-reduced-motion: reduce)').matches?0:450});},[selected,ready,apartments]);
 useEffect(() => {
   const view = map.current;
   if (!view || !ready) return;
   const points = apartments.filter((a): a is LocatedApartment => a.lat !== null && a.lng !== null);
   if (!points.length) return;
   function fitVisibleMap() {
     if (!view) return false;
     const {clientWidth: width, clientHeight: height} = view.getContainer();
     if (!width || !height) return false;
     view.resize();
     view.fitBounds([
       [Math.min(...points.map(a=>a.lng)),Math.min(...points.map(a=>a.lat))],
       [Math.max(...points.map(a=>a.lng)),Math.max(...points.map(a=>a.lat))],
     ], {padding:Math.min(65,width/5,height/5),maxZoom:14,duration:0});
     return true;
   }
   if (fitVisibleMap()) return;
   // Filters can change from list view while the map has no layout dimensions.
   const observer = new ResizeObserver(() => { if (fitVisibleMap()) observer.disconnect(); });
   observer.observe(view.getContainer());
   return () => observer.disconnect();
   // Preserve the current camera unless the user filters, fits or first opens the map.
   // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [fit,ready]);
 return <div className={styles.mapHost}><div ref={host} className={styles.canvas} aria-label="Apartment locations"/><div className={styles.mapLayers}><button type="button" className={styles.subwayToggle} disabled={!ready} aria-pressed={subway} onClick={()=>setSubway(!subway)}>Subway</button>
   <button type="button" className={styles.subwayToggle} disabled={!ready} aria-pressed={neighborhoods} onClick={()=>setNeighborhoods(!neighborhoods)}>Neighborhoods</button></div><dialog ref={picker} className={styles.mapPicker} aria-label="Choose an apartment" onClose={()=>setChoices([])}>
   <header><strong>{choices.length} apartments</strong><button type="button" className={styles.secondary} onClick={()=>picker.current?.close()}>Close</button></header>
   <ul>{choices.map(a=><li key={a.id}><button type="button" onClick={()=>{picker.current?.close();select.current(a.id);}}>
     <span>{a.status==='Unavailable'&&<UnavailableBadge/>}{addressLabel(a)} {a.fromKarina&&<b className={styles.kBadge} aria-label="Shared by Karina">K</b>}</span>
     <small>{rentLabel(a)} · {a.visited&&a.status!=='Toured'?'Visited · ':''}{a.status}</small>
   </button></li>)}</ul>
 </dialog>{(!ready||error)&&<div className={styles.mapNotice}>{error||'Loading map…'}</div>}</div>;
}
