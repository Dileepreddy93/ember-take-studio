// Full-quality render: headless Chrome draws every frame with WebGL, ffmpeg mixes and encodes.
//   node scripts/render-chrome.mjs --project=film.ember.json --out=renders/film [--width=1080]
// Frames are kept, so re-running the same command resumes. Voice is ducked over the score
// and the mix is mastered to -14 LUFS for social platforms.
import {chromium} from 'playwright-core';
import {build} from 'esbuild';
import {readFile,writeFile,mkdir,access} from 'node:fs/promises';
import {resolve,dirname} from 'node:path';
import {fileURLToPath,pathToFileURL} from 'node:url';
import {spawnSync} from 'node:child_process';
import {DEFAULT_PROJECT,validateProject} from '../dist/timeline.js';
import {makeSound,wav} from '../audio.js';

const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const args=Object.fromEntries(process.argv.slice(2).map(v=>{const [k,...rest]=v.replace(/^--/,'').split('=');return [k,rest.join('=')||true]}));
const raw=args.project?JSON.parse(await readFile(resolve(args.project),'utf8')):DEFAULT_PROJECT;
const project=validateProject(raw),width=Number(args.width||1080),height=Math.round(width*16/9);
const out=resolve(args.out||root+'/renders/'+project.title.replace(/[^a-z0-9]+/gi,'_')),frames=resolve(out,'frames');
await mkdir(frames,{recursive:true});

await build({entryPoints:[resolve(root,'render-entry.js')],bundle:true,format:'iife',minify:true,outfile:resolve(root,'dist/render.bundle.js'),logLevel:'error'});
await writeFile(resolve(root,'dist/render.html'),'<!doctype html><meta charset="utf-8"><body style="margin:0;background:#000"><script src="./render.bundle.js"></script>');

const browser=await chromium.launch({executablePath:args.chrome||'/usr/bin/google-chrome',args:['--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist']});
const page=await browser.newPage();
page.on('pageerror',e=>console.error('page error:',e.message));
await page.goto(pathToFileURL(resolve(root,'dist/render.html')).href);
const info=await page.evaluate(([p,w])=>window.emberRender.init(p,w),[project,width]);
if(info.software)console.warn('WebGL unavailable: using the software rasterizer (simpler lighting).');
const exists=p=>access(p).then(()=>true,()=>false),started=Date.now();
for(let i=0;i<info.frames;i++){
  const file=resolve(frames,`frame_${String(i).padStart(5,'0')}.jpg`);
  if(await exists(file))continue;
  const url=await page.evaluate(i=>window.emberRender.frame(i),i);
  await writeFile(file,Buffer.from(url.slice(url.indexOf(',')+1),'base64'));
  if(i%30===0)process.stdout.write(`\rframe ${i+1}/${info.frames}  ${((Date.now()-started)/1000).toFixed(0)}s`);
}
await browser.close();console.log('\nframes done');

// Score without the voice (the voice is mixed by ffmpeg so it can duck the music).
const score=resolve(out,'score.wav');await writeFile(score,Buffer.from(await wav(await makeSound(project,null)).arrayBuffer()));
const inputs=['-framerate','30','-i',resolve(frames,'frame_%05d.jpg'),'-i',score];
let filter='[1:a]anull[mix]';
if(project.voiceData){
  const voice=resolve(out,'voice.wav');await writeFile(voice,Buffer.from(project.voiceData.slice(project.voiceData.indexOf(',')+1),'base64'));
  inputs.push('-i',voice);
  filter='[2:a]aresample=48000,pan=stereo|c0=c0|c1=c0,asplit=2[v][key];[1:a]volume=0.8[m];[m][key]sidechaincompress=threshold=0.02:ratio=10:attack=15:release=350[duck];[duck][v]amix=inputs=2:duration=first:normalize=0[mix]';
}
filter+=';[mix]loudnorm=I=-14:TP=-1.5:LRA=11,aresample=48000[a]';
const film=resolve(out,'film.mp4');
const r=spawnSync('ffmpeg',['-y','-v','error',...inputs,'-filter_complex',filter,'-map','0:v','-map','[a]','-c:v','libx264','-preset','slow','-crf','17','-pix_fmt','yuv420p','-r','30','-c:a','aac','-b:a','192k','-t',String(project.duration),'-movflags','+faststart',film],{stdio:'inherit'});
if(r.status!==0)throw Error('ffmpeg failed');
console.log('Ready:',film);
