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

// GPU through ANGLE/OpenGL by default (about 10x faster); --cpu forces the SwiftShader software path.
const gpuFlags=args.cpu?['--use-angle=swiftshader','--enable-unsafe-swiftshader']:['--use-gl=angle','--use-angle=gl','--ignore-gpu-blocklist','--enable-gpu-rasterization'];
const browser=await chromium.launch({executablePath:args.chrome||'/usr/bin/google-chrome',args:gpuFlags});
const page=await browser.newPage();
page.on('pageerror',e=>console.error('page error:',e.message));
await page.goto(pathToFileURL(resolve(root,'dist/render.html')).href);
const info=await page.evaluate(([p,w])=>window.emberRender.init(p,w),[project,width]);
if(info.software)console.warn('WebGL unavailable: using the software rasterizer (simpler lighting).');
if(args.stills){
  for(const t of String(args.stills).split(',').map(Number)){const url=await page.evaluate(i=>window.emberRender.frame(i),Math.round(t*30));await writeFile(resolve(out,`still_${t.toFixed(2)}.jpg`),Buffer.from(url.slice(url.indexOf(',')+1),'base64'));}
  await browser.close();console.log('stills done');process.exit(0);
}
const exists=p=>access(p).then(()=>true,()=>false),started=Date.now();
for(let i=0;i<info.frames;i++){
  const file=resolve(frames,`frame_${String(i).padStart(5,'0')}.jpg`);
  if(await exists(file))continue;
  const url=await page.evaluate(i=>window.emberRender.frame(i),i);
  await writeFile(file,Buffer.from(url.slice(url.indexOf(',')+1),'base64'));
  if(i%30===0)process.stdout.write(`\rframe ${i+1}/${info.frames}  ${((Date.now()-started)/1000).toFixed(0)}s`);
}
await browser.close();console.log('\nframes done');

// Score and effects without the voice (ffmpeg mixes the voice so it can duck the music).
console.log('Mixing soundtrack');
let music=null;
if(project.music&&project.musicData){
  const file=resolve(out,'music.src');await writeFile(file,Buffer.from(project.musicData.slice(project.musicData.indexOf(',')+1),'base64'));
  const pcm=spawnSync('ffmpeg',['-v','error','-i',file,'-f','f32le','-ac','2','-ar','48000','-'],{maxBuffer:400e6});
  if(pcm.status!==0)throw Error('Could not decode the music track.');
  const all=new Float32Array(pcm.stdout.buffer,pcm.stdout.byteOffset,pcm.stdout.length/4),len=all.length/2,ch=[new Float32Array(len),new Float32Array(len)];
  for(let i=0;i<len;i++){ch[0][i]=all[i*2];ch[1][i]=all[i*2+1];}
  music={sampleRate:48000,length:len,numberOfChannels:2,getChannelData:c=>ch[c]};
}
const score=resolve(out,'score.wav');await writeFile(score,Buffer.from(await wav(await makeSound(project,null,music)).arrayBuffer()));
const ff=args=>{const r=spawnSync('ffmpeg',['-y','-v','error',...args],{encoding:'utf8',maxBuffer:50e6});if(r.status!==0)throw Error('ffmpeg failed: '+r.stderr);return r.stderr;};
const mix=resolve(out,'mix.wav');
if(project.voiceData){
  const voice=resolve(out,'voice.wav');await writeFile(voice,Buffer.from(project.voiceData.slice(project.voiceData.indexOf(',')+1),'base64'));
  ff(['-i',score,'-i',voice,'-filter_complex','[1:a]aresample=48000,pan=stereo|c0=c0|c1=c0,asplit=2[v][key];[0:a]volume=0.85[m];[m][key]sidechaincompress=threshold=0.02:ratio=8:attack=15:release=350[duck];[duck][v]amix=inputs=2:duration=first:normalize=0[a]','-map','[a]','-t',String(project.duration),mix]);
}else ff(['-i',score,'-t',String(project.duration),mix]);
// Two-pass loudness: measure, then normalise linearly to -14 LUFS / -1.5 dBTP.
console.log('Mastering to -14 LUFS');
const measured=JSON.parse(spawnSync('ffmpeg',['-hide_banner','-i',mix,'-af','loudnorm=I=-14:TP=-1.5:LRA=11:print_format=json','-f','null','-'],{encoding:'utf8'}).stderr.match(/\{[\s\S]*\}/)[0]);
const norm=`loudnorm=I=-14:TP=-1.5:LRA=11:measured_I=${measured.input_i}:measured_TP=${measured.input_tp}:measured_LRA=${measured.input_lra}:measured_thresh=${measured.input_thresh}:offset=${measured.target_offset}:linear=true,aresample=48000`;
console.log('Encoding film');
const film=resolve(out,'film.mp4');
ff(['-framerate','30','-i',resolve(frames,'frame_%05d.jpg'),'-i',mix,'-af',norm,'-map','0:v','-map','1:a','-c:v','libx264','-preset','slow','-crf','18','-maxrate','14M','-bufsize','28M','-pix_fmt','yuv420p','-r','30','-c:a','aac','-b:a','192k','-t',String(project.duration),'-movflags','+faststart',film]);
console.log('Ready:',film);
