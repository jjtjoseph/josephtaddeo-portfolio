import type {Map} from 'maplibre-gl';

const layers = ['subway-routes','subway-stops','subway-names'];

export function showSubway(map: Map, enabled: boolean) {
  if (!map.getSource('subway-lines')) {
    if (!enabled) return;
    map.addSource('subway-lines', {
      type:'geojson', data:'/transit/lines.geojson',
      attribution:'<a href="https://data.ny.gov/d/s692-irgq">MTA routes</a>',
    });
    map.addSource('subway-stations', {
      type:'geojson', data:'/transit/stations.geojson',
      attribution:'<a href="https://data.ny.gov/d/39hk-dx4f">MTA stations</a>',
    });
    map.addLayer({id:'subway-routes',type:'line',source:'subway-lines',
      paint:{'line-color':['get','color'],'line-width':['interpolate',['linear'],['zoom'],9,1,15,4],'line-opacity':0.85}});
    map.addLayer({id:'subway-stops',type:'circle',source:'subway-stations',minzoom:10,
      paint:{'circle-radius':['interpolate',['linear'],['zoom'],10,2,15,5],'circle-color':'#fff','circle-stroke-color':'#343e50','circle-stroke-width':1.3}});
    map.addLayer({id:'subway-names',type:'symbol',source:'subway-stations',minzoom:13,
      layout:{'text-field':['concat',['get','name'],' · ',['get','routes']],'text-font':['Noto Sans Regular'],'text-anchor':'top','text-offset':[0,0.65],'text-size':12},
      paint:{'text-color':'#233045','text-halo-color':'#fff','text-halo-width':1.7}});
  }
  for (const id of layers) map.setLayoutProperty(id,'visibility',enabled?'visible':'none');
}
