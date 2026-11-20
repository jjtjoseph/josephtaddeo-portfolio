'use client';
import {Analytics} from '@vercel/analytics/next';
import {usePathname} from 'next/navigation';
export default function SiteAnalytics(){const path=usePathname();return path.startsWith('/apartments')?null:<Analytics/>;}
