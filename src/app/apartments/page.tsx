import type {Metadata} from 'next';
import {authenticated} from '@/lib/apartments/auth';
import Tracker from '@/components/apartments/Tracker';
import Unlock from '@/components/apartments/Unlock';
export const dynamic='force-dynamic';
export const metadata:Metadata={title:'Private workspace',description:'Private workspace',robots:{index:false,follow:false,noarchive:true},referrer:'no-referrer'};
export default async function Apartments(){return await authenticated()?<Tracker commuteAddress={process.env.APARTMENTS_COMMUTE_ADDRESS}/>:<Unlock/>;}
