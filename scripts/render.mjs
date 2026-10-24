import {createCanvas,GlobalFonts} from '@napi-rs/canvas';
import {readFile,writeFile,mkdir,stat} from 'node:fs/promises';
import {resolve,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import {spawnSync} from 'node:child_process';
import {DEFAULT_PROJECT,validateProject} from '../dist/timeline.js';
import {makeSound,wav} from '../audio.js';

const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const args=Object.fromEntries(process.argv.slice(2).map(v=>{const [k,...rest]=v.replace(/^--/,'').split('=');return [k,rest.join('=')||true]}));
const project=args.project?validateProject(JSON.parse(await readFile(resolve(args.project),'utf8'))):DEFAULT_PROJECT;
const width=Number(args.width||1080),height=width*16/9;if(![540,720,1080].includes(width))throw Error('Choose width 540, 720 or 1080.');
const out=resolve(args.out||root+'/renders/'+project.title.replace(/[^a-z0-9]+/gi,'_')),frames=resolve(out,'frames');await mkdir(frames,{recursive:true});
// Use installed free font substitutes when the desktop fonts are absent.
// Register both weights under the canvas names used by the browser scene.
const fontBytes=[];
for(const [alias,files] of [['Arial',['DejaVuSans.ttf','DejaVuSans-Bold.ttf']],['Georgia',['DejaVuSerif.ttf','DejaVuSerif-Bold.ttf']],['monospace',['DejaVuSansMono.ttf','DejaVuSansMono-Bold.ttf']]]){
 if(GlobalFonts.has(alias))continue;
 for(const file of files){try{const bytes=await readFile('/usr/share/fonts/truetype/dejavu/'+file);GlobalFonts.register(bytes,alias);fontBytes.push(bytes);}catch{}}
}
const hash=createHash('sha256');hash.update(JSON.stringify(project));hash.update(String(width));for(const f of ['scene.js','software-renderer.js','audio.js','dist/timeline.js','scripts/render.mjs','package-lock.json'])hash.update(await readFile(resolve(root,f)));for(const b of fontBytes)hash.update(b);const fingerprint=hash.digest('hex');
const manifest={fingerprint,width,height,fps:30,frameCount:Math.round(project.duration*30),title:project.title};
try{const old=JSON.parse(await readFile(resolve(out,'render.json'),'utf8'));if(old.fingerprint!==fingerprint)throw Error('This output folder belongs to different source/project settings. Choose another --out folder.');}catch(e){if(e.code!=='ENOENT')throw e;}
await writeFile(resolve(out,'render.json'),JSON.stringify(manifest,null,2));
globalThis.document={createElement(type){if(type!=='canvas')throw Error('Unexpected element '+type);return createCanvas(300,150)}};
const {FilmScene}=await import('../scene.js');const canvas=createCanvas(width,height),scene=new FilmScene(canvas,project,{software:true,headless:true});scene.setSize(width,height);
const started=performance.now(),start=Number(args.start||0),end=Math.min(manifest.frameCount,Number(args.end||manifest.frameCount));
if(!Number.isInteger(start)||!Number.isInteger(end)||start<0||end<=start)throw Error('Frame bounds must be nonnegative integers with end after start.');
for(let i=start;i<end;i++){
 const path=resolve(frames,'frame_'+String(i).padStart(5,'0')+'.jpg');try{if((await stat(path)).size>0)continue;}catch{}
 scene.seek(i/30);await writeFile(path,canvas.toBuffer('image/jpeg',96));
 if(i%30===0||i===end-1)console.log(JSON.stringify({frame:i+1,total:manifest.frameCount,seconds:Math.round((performance.now()-started)/1000)}));
}
if(args['frames-only'])process.exit(0);
for(let i=0;i<manifest.frameCount;i++){try{await stat(resolve(frames,'frame_'+String(i).padStart(5,'0')+'.jpg'));}catch{throw Error('Frame '+i+' is missing. Complete the frame range before encoding.');}}
const sound=await makeSound(project);await writeFile(resolve(out,'soundtrack.wav'),new Uint8Array(await wav(sound).arrayBuffer()));
let voicePath=args.voice?resolve(args.voice):null;
if(!voicePath&&project.voiceData){voicePath=resolve(out,'imported-voice.audio');await writeFile(voicePath,Buffer.from(project.voiceData.slice(project.voiceData.indexOf(',')+1),'base64'));}
const ffmpeg=['-y','-framerate','30','-i',resolve(frames,'frame_%05d.jpg'),'-i',resolve(out,'soundtrack.wav')];
if(voicePath){ffmpeg.push('-i',voicePath,'-filter_complex','[1:a]volume=0.48[m];[m][2:a]amix=inputs=2:duration=first,loudnorm=I=-16:TP=-1.5:LRA=11[a]','-map','0:v','-map','[a]');}else ffmpeg.push('-af','loudnorm=I=-16:TP=-1.5:LRA=11');
ffmpeg.push('-c:v','libx264','-preset','medium','-crf','17','-pix_fmt','yuv420p','-c:a','aac','-b:a','192k','-ar','48000','-t',String(project.duration),'-movflags','+faststart',resolve(out,'film.mp4'));
const done=spawnSync('ffmpeg',ffmpeg,{stdio:'inherit'});if(done.error)throw done.error;if(done.status!==0)throw Error('FFmpeg could not finish encoding. Frames are preserved.');console.log('READY '+resolve(out,'film.mp4'));
