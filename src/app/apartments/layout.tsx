import type {Viewport} from 'next';
import 'maplibre-gl/dist/maplibre-gl.css';

export const viewport: Viewport = {width:'device-width',initialScale:1,viewportFit:'cover',interactiveWidget:'resizes-content'};

// Load map geometry styles with the route, before the lazy map creates markers.
export default function ApartmentLayout({children}:{children:React.ReactNode}) {
 return children;
}
