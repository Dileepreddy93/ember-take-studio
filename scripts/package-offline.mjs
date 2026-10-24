import {build} from 'esbuild';
import {zipSync,strToU8} from 'fflate';
import {readFile,writeFile,mkdir,readdir} from 'node:fs/promises';
import {resolve} from 'node:path';

const built=await build({entryPoints:['app.js'],bundle:true,format:'iife',minify:true,write:false});
const css=await readFile('dist/style.css','utf8');
let html=await readFile('dist/index.html','utf8');
html=html.replace('<link rel="stylesheet" href="./style.css">',()=>'<style>'+css+'</style>')
 .replace('<script type="module" src="./app.bundle.js"></script>',()=>'<script>'+built.outputFiles[0].text.replace(/<\/script/gi,'<\\/script')+'</script>')
 .replace(/<a id="offline-download"[^>]*>.*?<\/a>/,'<span class="offline-label">OFFLINE EDITION</span>');
const files={'Ember_Take_Offline/OPEN_STUDIO.html':strToU8(html)};
await writeFile('dist/offline.html',html);
const excluded=new Set(['.git','.openai','node_modules','renders','downloads','offline.html']);
async function add(dir=''){
 for(const e of await readdir(dir||'.',{withFileTypes:true})){
  if(excluded.has(e.name)||e.name.startsWith('.'))continue;
  const path=dir?dir+'/'+e.name:e.name;
  if(e.isDirectory())await add(path);
  else files['Ember_Take_Offline/'+path]=new Uint8Array(await readFile(path));
 }
}
await add();await mkdir('dist/downloads',{recursive:true});
const path=resolve('dist/downloads/Ember_Take_Offline.zip');
await writeFile(path,zipSync(files,{level:6}));
console.log(JSON.stringify({path,files:Object.keys(files).length}));
