import type {Map} from 'maplibre-gl';

export function showNeighborhoods(map: Map, enabled: boolean) {
  const source = 'nyc-neighborhoods';
  const layers = ['neighborhood-borders','neighborhood-names','sub-neighborhood-borders','sub-neighborhood-names'];
  if (!map.getSource(source)) {
    if (!enabled) return;
    map.addSource(source,{type:'geojson',data:'/geography/neighborhoods.geojson'});
    const before = map.getStyle().layers.find(layer => layer.type === 'symbol')?.id;
    for (const sub of [false,true]) {
      const prefix = sub ? 'sub-neighborhood' : 'neighborhood';
      const minzoom = sub ? 13 : 9;
      map.addLayer({
        id:prefix+'-borders', type:'line', source, minzoom,
        filter:['==',['get','sub'],sub],
        paint:{'line-color':'#576968','line-opacity':sub?0.55:0.8,'line-width':sub?1:1.5,'line-dasharray':sub?[2,3]:[5,2]},
      },before);
      map.addLayer({
        id:prefix+'-names', type:'symbol', source, minzoom:minzoom+0.5,
        filter:['==',['get','sub'],sub],
        layout:{'text-field':['get','name'],'text-font':['Noto Sans Regular'],'text-size':sub?11:13,'text-max-width':12},
        paint:{'text-color':'#213d39','text-halo-color':'#fff','text-halo-width':2},
      },before);
    }
  }
  for (const id of layers) map.setLayoutProperty(id,'visibility',enabled?'visible':'none');
}
