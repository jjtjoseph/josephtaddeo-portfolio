// Serve version-matched MapLibre workers locally, without a third-party script CDN.
import {mkdir,copyFile,readdir} from 'node:fs/promises';
import {createRequire} from 'node:module';
import {dirname,join} from 'node:path';
const require=createRequire(import.meta.url);
const source=dirname(require.resolve('maplibre-gl/package.json'));
const {version}=require('maplibre-gl/package.json');
const target=new URL(`../public/maps/${version}/`,import.meta.url);
await mkdir(target,{recursive:true});
for(const name of await readdir(join(source,'dist'))){
 if(name.endsWith('.mjs')&&!name.includes('-dev'))await copyFile(join(source,'dist',name),new URL(name,target));
}
