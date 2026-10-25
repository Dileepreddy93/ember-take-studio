// The character library in the browser (IndexedDB), for the online studio. It answers the same requests as the
// desktop server's /api/library and /library/<id>/model, with the same validation, so each visitor's imports and
// saved characters stay private to their own browser.
import {validateCharacter,validateWorld,validateBackdrop,IMPORT_RULES,WORLD_RULES} from './character-import.js';
const STORE='items';let opening=null;
function db(){return opening||=new Promise((ok,no)=>{const r=indexedDB.open('ember-take-library',1);r.onupgradeneeded=()=>r.result.createObjectStore(STORE,{keyPath:'id'});r.onsuccess=()=>ok(r.result);r.onerror=()=>no(r.error);});}
async function run(mode,fn){const d=await db();return new Promise((ok,no)=>{const t=d.transaction(STORE,mode),req=fn(t.objectStore(STORE));t.oncomplete=()=>ok(req?.result);t.onerror=t.onabort=()=>no(t.error||Error('Browser storage is full or blocked.'));});}
const reply=(status,data)=>new Response(JSON.stringify(data),{status,headers:{'content-type':'application/json'}});
const header=(init,k)=>init.headers?.[k]??init.headers?.get?.(k);

export async function libraryFetch(path,init={}){
  const method=(init.method||'GET').toUpperCase();
  try{
    if(path==='/api/library'&&method==='GET')return reply(200,((await run('readonly',s=>s.getAll()))||[]).map(x=>x.meta).sort((a,b)=>b.created-a.created));
    if(path==='/api/library/import'&&method==='POST'){
      // x-kind: character (rigged .glb/.vrm), world (3D scene .glb) or backdrop (360° .jpg/.png/.hdr).
      const kind=['world','backdrop'].includes(header(init,'x-kind'))?header(init,'x-kind'):'character',file=decodeURIComponent(header(init,'x-filename')||'character.glb');
      const name=decodeURIComponent(header(init,'x-name')||'').trim().slice(0,24)||file.replace(/\.[^.]+$/,'').slice(0,24);
      const data=new Uint8Array(await new Response(init.body).arrayBuffer()),limit=kind==='character'?IMPORT_RULES.maxBytes:kind==='world'?WORLD_RULES.maxBytes:WORLD_RULES.maxBackdropBytes;
      if(data.length>limit+1e6)return reply(413,{error:`The file is over ${limit/1e6} MB.`});
      const report=kind==='world'?validateWorld(data,file):kind==='backdrop'?validateBackdrop(data,file):validateCharacter(data,file);if(!report.ok)return reply(422,{error:report.errors[0],report});
      const id=crypto.randomUUID(),model=kind==='world'?'world.glb':kind==='backdrop'?'backdrop.'+(report.format==='jpeg'?'jpg':report.format):'model'+(report.format==='vrm'?'.vrm':'.glb');
      const meta={id,type:kind==='character'?'imported':kind,name,file:model,source:file,created:Date.now(),report:report.face?{...report,face:{...report.face,morphs:report.face.morphs.slice(0,80)}}:report};
      await run('readwrite',s=>s.put({id,meta,data:data.buffer.slice(data.byteOffset,data.byteOffset+data.byteLength)}));return reply(201,meta);
    }
    if(path==='/api/library/preset'&&method==='POST'){
      const m=JSON.parse(init.body||'{}').member;if(!m||!m.look||!['human','robot','creature','bot','mascot'].includes(m.kind))return reply(400,{error:'Send a built-in character to save.'});
      const id=crypto.randomUUID(),meta={id,type:'preset',name:String(m.name||'Character').slice(0,16),created:Date.now(),member:{name:m.name,kind:m.kind,voice:m.voice,look:m.look}};
      await run('readwrite',s=>s.put({id,meta}));return reply(201,meta);
    }
    if(path.startsWith('/api/library/')&&method==='DELETE'){const id=path.split('/').pop();await run('readwrite',s=>s.delete(id));return reply(200,{deleted:id});}
    const m=path.match(/^\/library\/([a-z0-9-]{6,40})\/model$/);
    if(m){const item=await run('readonly',s=>s.get(m[1]));return item?.data?new Response(item.data):reply(404,{error:'Not in the library'});}
    return reply(404,{error:'Not found'});
  }catch(e){return reply(500,{error:e.message});}
}
