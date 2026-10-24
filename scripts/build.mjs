import {build} from 'esbuild';
await build({entryPoints:['app.js'],bundle:true,format:'esm',minify:true,outfile:'dist/app.bundle.js'});
