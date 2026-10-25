// Static build of the studio for GitHub Pages (or any static host): editing, live preview and in-browser export.
// Voices and studio renders need the local engine (`npm run studio`), so the page runs in browser-only mode.
//   node scripts/build-pages.mjs [--out=site]
import {build} from 'esbuild';
import {cp,mkdir,rm,writeFile,readFile} from 'node:fs/promises';
import {resolve,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';

const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const arg=process.argv.find(a=>a.startsWith('--out='));const out=resolve(root,arg?arg.slice(6):'site');
await rm(out,{recursive:true,force:true});await mkdir(out,{recursive:true});
await build({entryPoints:[resolve(root,'app.js')],bundle:true,format:'esm',minify:true,outfile:resolve(out,'app.bundle.js'),logLevel:'error'});
await cp(resolve(root,'dist/style.css'),resolve(out,'style.css'));
// Marks the page as engine-less so it starts in browser-only mode without probing for a server.
await writeFile(resolve(out,'index.html'),(await readFile(resolve(root,'dist/index.html'),'utf8')).replace('<head>','<head><script>window.EMBER_STATIC=true</script>'));
// glTF decoders for imported worlds and characters (Draco, KTX2/Basis), served next to the page.
for(const d of ['draco','basis'])await cp(resolve(root,'node_modules/three/examples/jsm/libs',d),resolve(out,'vendor',d),{recursive:true});
await writeFile(resolve(out,'.nojekyll'),'');
console.log('Static studio built in '+out);
