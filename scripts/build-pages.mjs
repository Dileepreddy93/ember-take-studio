// Static build of the studio for GitHub Pages (or any static host). With no server, each visitor's browser is the
// engine: Kokoro voices and lip sync (browser-voice.js), the character library (local-library.js), and MP4 export
// mastered to −14 LUFS. Expressive Chatterbox voices and headless studio renders stay on the desktop engine.
//   node scripts/build-pages.mjs [--out=site]
import {build} from 'esbuild';
import {cp,mkdir,rm,writeFile,readFile} from 'node:fs/promises';
import {resolve,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';

const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
// The cloud voice engine (backend/engine_api.py); empty means voices are made on each visitor's device.
const API=process.env.EMBER_API??'';
const arg=process.argv.find(a=>a.startsWith('--out='));const out=resolve(root,arg?arg.slice(6):'site');
await rm(out,{recursive:true,force:true});await mkdir(out,{recursive:true});
await build({entryPoints:[resolve(root,'app.js')],bundle:true,format:'esm',minify:true,outfile:resolve(out,'app.bundle.js'),logLevel:'error'});
await cp(resolve(root,'dist/style.css'),resolve(out,'style.css'));
await cp(resolve(root,'dist/workspace.css'),resolve(out,'workspace.css'));
// Marks the page as engine-less so it starts in browser-only mode without probing for a server.
await writeFile(resolve(out,'index.html'),(await readFile(resolve(root,'dist/index.html'),'utf8')).replace('<head>',`<head><script>window.EMBER_STATIC=true;window.EMBER_API=${JSON.stringify(API)}</script>`));
// glTF decoders for imported worlds and characters (Draco, KTX2/Basis), served next to the page.
for(const d of ['draco','basis'])await cp(resolve(root,'node_modules/three/examples/jsm/libs',d),resolve(out,'vendor',d),{recursive:true});
// The in-browser voice engine (HeadTTS: Kokoro voices with word timings and visemes), loaded at runtime by browser-voice.js.
await cp(resolve(root,'vendor/headtts'),resolve(out,'vendor/headtts'),{recursive:true});
// First-visit demo: a finished, voiced reel (desktop Kokoro voices and Rhubarb lip sync).
await cp(resolve(root,'examples/missed-being-asked.ember.json'),resolve(out,'demo.ember.json'));
await cp(resolve(root,'showcase'),resolve(out,'showcase'),{recursive:true});
await writeFile(resolve(out,'.nojekyll'),'');
console.log('Static studio built in '+out);
