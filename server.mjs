// Ember Take studio server: serves the studio UI and runs the local voice and render pipelines.
//   node server.mjs            then open http://localhost:8765
// Jobs run one at a time (they all want the CPU) and report progress for the UI to poll.
import http from 'node:http';
import {spawn,spawnSync} from 'node:child_process';
import {readFile,writeFile,mkdir,readdir,stat,rm} from 'node:fs/promises';
import {existsSync,createReadStream,readdirSync} from 'node:fs';
import {resolve,dirname,extname,relative} from 'node:path';
import {fileURLToPath} from 'node:url';
import {randomUUID} from 'node:crypto';
import {build} from 'esbuild';
import {validateCharacter,validateWorld,validateBackdrop,IMPORT_RULES,WORLD_RULES} from './character-import.js';

const root=dirname(fileURLToPath(import.meta.url)),forge=resolve(root,'..'),PORT=Number(process.env.PORT||8765);
const PY=resolve(forge,'.venv/bin/python'),CB=resolve(forge,'.venv-cb/bin/python'),RHUBARB=resolve(forge,'tools/Rhubarb-Lip-Sync-1.14.0-Linux/rhubarb');
const jobsDir=resolve(root,'.jobs'),rendersDir=resolve(root,'renders'),libraryDir=resolve(root,'library');for(const d of [jobsDir,rendersDir,libraryDir])await mkdir(d,{recursive:true});
await build({entryPoints:[resolve(root,'app.js')],bundle:true,format:'esm',minify:true,outfile:resolve(root,'dist/app.bundle.js'),logLevel:'error'});

const VOICES={
  'American female':['af_heart','af_bella','af_nicole','af_sarah','af_sky','af_nova','af_river','af_jessica','af_aoede','af_kore','af_alloy'],
  'American male':['am_michael','am_puck','am_fenrir','am_echo','am_eric','am_liam','am_onyx','am_adam','am_santa'],
  'British female':['bf_emma','bf_isabella','bf_alice','bf_lily'],'British male':['bm_george','bm_fable','bm_lewis','bm_daniel']
};
// Chatterbox may still be installing or downloading its model: a negative check is retried after a minute.
const hfModel=resolve(process.env.HF_HOME||resolve(process.env.HOME,'.cache/huggingface'),'hub/models--ResembleAI--chatterbox/snapshots');
const modelCached=()=>{try{return readdirSync(hfModel).some(d=>existsSync(resolve(hfModel,d,'t3_cfg.safetensors'))&&existsSync(resolve(hfModel,d,'s3gen.safetensors')));}catch{return false;}};
let chatterboxReady=false,chatterboxChecked=0;
function engines(){
  if(!chatterboxReady&&existsSync(CB)&&Date.now()-chatterboxChecked>60000){chatterboxChecked=Date.now();chatterboxReady=modelCached()&&spawnSync(CB,['-c','import chatterbox.tts'],{timeout:90000}).status===0;}
  return {kokoro:existsSync(PY),chatterbox:Boolean(chatterboxReady),rhubarb:existsSync(RHUBARB),ffmpeg:spawnSync('ffmpeg',['-version']).status===0};
}

const jobs=new Map();let queue=Promise.resolve();
function startJob(type,run){
  const job={id:randomUUID().slice(0,8),type,status:'queued',progress:0,message:'Waiting for the studio…',log:[],result:null,created:Date.now()};
  jobs.set(job.id,job);queue=queue.then(()=>{job.status='running';return run(job);}).then(r=>{job.status='done';job.progress=1;job.result=r;}).catch(e=>{job.status='error';job.message=e.message;});
  return job;
}
function runProcess(job,cmd,args,onLine){
  return new Promise((ok,no)=>{
    const p=spawn(cmd,args,{cwd:root});let tail='';
    const feed=chunk=>{tail+=chunk;const parts=tail.split(/[\r\n]+/);tail=parts.pop();for(const l of parts){if(!l.trim())continue;job.log.push(l);if(job.log.length>200)job.log.shift();onLine(l);}};
    p.stdout.on('data',feed);p.stderr.on('data',feed);
    p.on('close',code=>code===0?ok():no(Error(job.log.filter(l=>!/warn/i.test(l)).slice(-3).join(' ')||`${cmd} exited with ${code}`)));
  });
}
const slug=s=>s.replace(/[^a-z0-9]+/gi,'_').replace(/^_|_$/g,'').slice(0,40)||'film';

async function voiceJob(project,layout){
  return startJob('voice',async job=>{
    const dir=resolve(jobsDir,job.id);await mkdir(dir);const src=resolve(dir,'in.json'),dst=resolve(dir,'out.json');
    await writeFile(src,JSON.stringify(project));job.message='Starting voices…';
    await runProcess(job,PY,['-I','pipeline/voice.py',src,dst,'--layout',layout],l=>{const m=l.match(/^PROGRESS (\d+)\/(\d+) (.*)$/);if(m){job.progress=Number(m[1])/Number(m[2])*.97;job.message=m[3];}});
    return JSON.parse(await readFile(dst,'utf8'));
  });
}
async function renderJob(project,width){
  return startJob('render',async job=>{
    const name=`${slug(project.title)}_${new Date().toISOString().slice(0,16).replace(/[-:T]/g,'')}_${job.id.slice(0,4)}`,dir=resolve(rendersDir,name);
    await mkdir(dir,{recursive:true});await writeFile(resolve(dir,'project.ember.json'),JSON.stringify(project));job.message='Opening the render stage…';
    await runProcess(job,process.execPath,['scripts/render-chrome.mjs',`--project=${resolve(dir,'project.ember.json')}`,`--out=${dir}`,`--width=${width}`],l=>{
      const m=l.match(/frame (\d+)\/(\d+)/);if(m){job.progress=Number(m[1])/Number(m[2])*.92;job.message=`Rendering frame ${m[1]} of ${m[2]}`;}
      else if(/mixing|mastering|encoding/i.test(l)){job.progress=Math.max(job.progress,.93);job.message=l.trim();}
    });
    return {url:`/renders/${name}/film.mp4`,name};
  });
}

const TYPES={'.html':'text/html; charset=utf-8','.js':'text/javascript','.css':'text/css','.json':'application/json','.mp4':'video/mp4','.jpg':'image/jpeg','.png':'image/png','.svg':'image/svg+xml','.wav':'audio/wav','.zip':'application/zip','.glb':'model/gltf-binary','.vrm':'model/gltf-binary','.wasm':'application/wasm','.hdr':'application/octet-stream'};
async function rawBody(req,limit){const chunks=[];let size=0;for await(const c of req){size+=c.length;if(size>limit)throw Object.assign(Error(`The file is over ${limit/1e6} MB.`),{status:413});chunks.push(c);}return Buffer.concat(chunks);}
// Character library: imported GLB/VRM models (validated on upload) and saved built-in characters (presets).
async function listLibrary(){
  const out=[];for(const id of await readdir(libraryDir).catch(()=>[])){try{const meta=JSON.parse(await readFile(resolve(libraryDir,id,'meta.json'),'utf8'));out.push(meta);}catch{}}
  return out.sort((a,b)=>b.created-a.created);
}
async function body(req,limit=60e6){const chunks=[];let size=0;for await(const c of req){size+=c.length;if(size>limit)throw Error('Request too large.');chunks.push(c);}return JSON.parse(Buffer.concat(chunks).toString('utf8'));}
const send=(res,code,data)=>{res.writeHead(code,{'content-type':'application/json','cache-control':'no-store'});res.end(JSON.stringify(data));};
async function serveFile(req,res,file){
  const info=await stat(file).catch(()=>null);if(!info?.isFile())return send(res,404,{error:'Not found'});
  const type=TYPES[extname(file)]||'application/octet-stream',range=req.headers.range?.match(/bytes=(\d*)-(\d*)/);
  if(range){const start=Number(range[1]||0),end=range[2]?Number(range[2]):info.size-1;res.writeHead(206,{'content-type':type,'content-range':`bytes ${start}-${end}/${info.size}`,'accept-ranges':'bytes','content-length':end-start+1});return createReadStream(file,{start,end}).pipe(res);}
  res.writeHead(200,{'content-type':type,'content-length':info.size,'accept-ranges':'bytes','cache-control':'no-cache'});createReadStream(file).pipe(res);
}
const inside=(base,file)=>{const r=relative(base,file);return r&&!r.startsWith('..')&&!r.startsWith('/');};

http.createServer(async(req,res)=>{
  try{
    const url=new URL(req.url,'http://localhost'),path=decodeURIComponent(url.pathname);
    if(path==='/api/status')return send(res,200,{engines:engines(),voices:VOICES,importRules:IMPORT_RULES});
    if(path==='/api/library'&&req.method==='GET')return send(res,200,await listLibrary());
    if(path==='/api/library/import'&&req.method==='POST'){
      // x-kind: character (rigged .glb/.vrm), world (3D scene .glb) or backdrop (360° .jpg/.png/.hdr).
      const kind=['world','backdrop'].includes(req.headers['x-kind'])?req.headers['x-kind']:'character',file=decodeURIComponent(req.headers['x-filename']||'character.glb'),name=decodeURIComponent(req.headers['x-name']||'').trim().slice(0,24)||file.replace(/\.[^.]+$/,'').slice(0,24);
      const data=await rawBody(req,(kind==='character'?IMPORT_RULES.maxBytes:kind==='world'?WORLD_RULES.maxBytes:WORLD_RULES.maxBackdropBytes)+1e6);
      const report=kind==='world'?validateWorld(data,file):kind==='backdrop'?validateBackdrop(data,file):validateCharacter(data,file);if(!report.ok)return send(res,422,{error:report.errors[0],report});
      const id=randomUUID(),dir=resolve(libraryDir,id),model=kind==='world'?'world.glb':kind==='backdrop'?'backdrop.'+(report.format==='jpeg'?'jpg':report.format):'model'+(report.format==='vrm'?'.vrm':'.glb');await mkdir(dir);await writeFile(resolve(dir,model),data);
      const meta={id,type:kind==='character'?'imported':kind,name,file:model,source:file,created:Date.now(),report:report.face?{...report,face:{...report.face,morphs:report.face.morphs.slice(0,80)}}:report};await writeFile(resolve(dir,'meta.json'),JSON.stringify(meta));
      return send(res,201,meta);
    }
    if(path==='/api/library/preset'&&req.method==='POST'){
      const b=await body(req,1e6),m=b.member;if(!m||!m.look||!['human','robot','creature','bot','mascot'].includes(m.kind))return send(res,400,{error:'Send a built-in character to save.'});
      const id=randomUUID();await mkdir(resolve(libraryDir,id));const meta={id,type:'preset',name:String(m.name||'Character').slice(0,16),created:Date.now(),member:{name:m.name,kind:m.kind,voice:m.voice,look:m.look}};
      await writeFile(resolve(libraryDir,id,'meta.json'),JSON.stringify(meta));return send(res,201,meta);
    }
    if(path.startsWith('/api/library/')&&req.method==='DELETE'){const id=path.split('/').pop();if(!/^[a-z0-9-]{6,40}$/.test(id))return send(res,400,{error:'Bad id'});await rm(resolve(libraryDir,id),{recursive:true,force:true});return send(res,200,{deleted:id});}
    if(/^\/library\/[a-z0-9-]{6,40}\/model$/.test(path)){const id=path.split('/')[2];const meta=JSON.parse(await readFile(resolve(libraryDir,id,'meta.json'),'utf8').catch(()=>'{}'));if(!meta.file)return send(res,404,{error:'Not in the library'});return serveFile(req,res,resolve(libraryDir,id,meta.file));}
    if(path==='/api/voice'&&req.method==='POST'){const b=await body(req);const job=await voiceJob(b.project,b.layout==='keep'?'keep':'flow');return send(res,202,{id:job.id});}
    if(path==='/api/render'&&req.method==='POST'){const b=await body(req);const width=[540,720,1080].includes(Number(b.width))?Number(b.width):1080;const job=await renderJob(b.project,width);return send(res,202,{id:job.id});}
    if(path.startsWith('/api/jobs/')){const job=jobs.get(path.split('/').pop());if(!job)return send(res,404,{error:'Unknown job'});const {log,...rest}=job;return send(res,200,{...rest,log:log.slice(-6)});}
    if(path==='/api/renders'){
      const list=[];for(const name of await readdir(rendersDir).catch(()=>[])){const f=resolve(rendersDir,name,'film.mp4');const s=await stat(f).catch(()=>null);if(!s)continue;let title=name;const proj=existsSync(resolve(rendersDir,name,'project.ember.json'));if(proj){try{title=JSON.parse(await readFile(resolve(rendersDir,name,'project.ember.json'),'utf8')).title||name;}catch{}}list.push({name,title,url:`/renders/${name}/film.mp4`,project:proj?`/renders/${name}/project.ember.json`:null,size:s.size,created:s.mtimeMs});}
      return send(res,200,list.sort((a,b)=>b.created-a.created).slice(0,30));
    }
    // Decoders for compressed models (Draco, KTX2/Basis), served from three.js.
    if(/^\/vendor\/(draco|basis)\/[\w.]+$/.test(path)){const [, ,dir,file]=path.split('/');return serveFile(req,res,resolve(root,'node_modules/three/examples/jsm/libs',dir,file));}
    if(path.startsWith('/renders/')){const file=resolve(rendersDir,path.slice(9));if(!inside(rendersDir,file))return send(res,403,{error:'Forbidden'});return serveFile(req,res,file);}
    const dist=resolve(root,'dist'),file=resolve(dist,path==='/'?'index.html':path.slice(1));
    if(!inside(dist,file))return send(res,403,{error:'Forbidden'});return serveFile(req,res,file);
  }catch(e){send(res,e.status||500,{error:e.message});}
}).listen(PORT,'127.0.0.1',()=>console.log(`Ember Take studio ready: http://localhost:${PORT}`));
