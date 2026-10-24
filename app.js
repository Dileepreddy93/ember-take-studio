import {FilmScene} from './scene.js';
import {DEFAULT_PROJECT,EMOTIONS,ACTIONS,SHOTS,LOOK_OPTIONS,LOOK_RANGES,MAX_CAST,clone,validateProject,planShots,parseScript,toScript,newCastMember} from './dist/timeline.js';
import {makeSound,RATE} from './audio.js';
import {exportFilm} from './exporter.js';
const $=id=>document.getElementById(id),storageKey='ember-take-project-v3';
let project=clone(DEFAULT_PROJECT),selected=1,castSel=null,time=0,playing=false,last=0,exporting=false,scene,audioCtx,audioSource,soundBuffer,voiceBuffer,musicBuffer,aborter,server=null;
const history=[],future=[];let audioGeneration=0,resultURL;
const EMO={neutral:'😐 Neutral',happy:'😄 Happy',sad:'😢 Sad',angry:'😠 Angry',surprised:'😲 Surprised',worried:'😟 Worried',curious:'🤔 Curious',idea:'💡 Bright idea'};
const ACT={none:'Natural talk (hands follow speech)',explain:'Explain with both hands',wave:'Wave',point:'Point at the camera','point-screen':'Point at the monitor','point-other':'Point at the other character',shrug:'Shrug',facepalm:'Facepalm',think:'Think (hand on chin)',cheer:'Cheer',clap:'Clap',thumbsup:'Thumbs up',crossarms:'Cross arms',handsup:'Hands up (shock)',nod:'Nod',headshake:'Shake head',lean:'Lean in, hands on hips',jump:'Jump',type:'Type',press:'Press the big key',raise:'Raise a hand (idea!)'};
const shotName=s=>({auto:'Auto · the director picks',wide:'Wide · the whole cast',two:'Two shot',single:'Single · medium',cu:'Close-up',ots:'Over the shoulder',screen:'Monitor insert',custom:'Custom 360° angle'})[s]||s;
const nameOf=id=>id==='all'?'whole cast':project.cast.find(c=>c.id===id)?.name||id,castIdx=id=>Math.max(0,project.cast.findIndex(c=>c.id===id));
const FALLBACK_VOICES={'American female':['af_heart','af_bella','af_nicole','af_sarah','af_sky'],'American male':['am_michael','am_puck','am_fenrir','am_echo','am_adam'],'British female':['bf_emma','bf_isabella'],'British male':['bm_george','bm_lewis']};
function toast(s){$('toast').textContent=s;$('toast').classList.add('show');clearTimeout(toast.timer);toast.timer=setTimeout(()=>$('toast').classList.remove('show'),4200)}
function options(select,entries){select.replaceChildren(...entries.map(([v,t])=>{const o=document.createElement('option');o.value=v;o.textContent=t;return o;}));}
try{const old=localStorage.getItem(storageKey)||localStorage.getItem('ember-take-project-v2')||localStorage.getItem('ember-take-project-v1');if(old)project=validateProject(JSON.parse(old));}catch{toast('The saved project could not be opened. Loaded the sample film.');}
const timer=t=>`${String(Math.floor(t/60)).padStart(2,'0')}:${String(Math.floor(t%60)).padStart(2,'0')}`;
function persist(){try{localStorage.setItem(storageKey,JSON.stringify(project));$('save-status').textContent='Saved on this device';}catch{$('save-status').textContent='Use Save project to keep your changes';}}
function stop(){audioGeneration++;playing=false;$('play').textContent='▶';$('play').setAttribute('aria-label','Play film');if(audioSource){try{audioSource.stop()}catch{}audioSource=null;}}
function commit(next,{keepAudio=false}={}){const valid=validateProject(next);history.push(clone(project));if(history.length>30)history.shift();future.length=0;if(!keepAudio&&valid.voiceData!==project.voiceData)voiceBuffer=null;if(valid.musicData!==project.musicData)musicBuffer=null;project=valid;stop();time=Math.min(time,project.duration);scene.setProject(project);soundBuffer=null;persist();refresh();render();}
function render(){if(!scene||exporting)return;const st=scene.seek(time);$('scrub').value=time;$('timecode').innerHTML=`${timer(time)}.${String(Math.floor(time%1*100)).padStart(2,'0')} <b>/ ${timer(project.duration)}</b>`;$('shot-label').textContent=scene.focus?`TURNTABLE · ${nameOf(scene.focus).toUpperCase()}`:'CAM · '+shotName(st.shot).toUpperCase()+(['wide','screen','two'].includes(st.shot)?'':' · '+nameOf(st.subject).toUpperCase());}
function chip(text,cls=''){const s=document.createElement('span');s.className='chip '+cls;s.textContent=text;return s;}
function renderCards(){
  const list=$('cue-list');list.replaceChildren();const track=$('timeline');track.replaceChildren();
  project.cues.forEach((c,i)=>{
    const b=document.createElement('button');b.className='cue c'+castIdx(c.speaker)+(c.id===selected?' selected':'');b.setAttribute('aria-label',`Edit line ${i+1}: ${c.text}`);
    const num=document.createElement('span');num.className='cue-number';num.textContent=String(i+1).padStart(2,'0');
    const content=document.createElement('div'),top=document.createElement('div');top.className='cue-top';const name=document.createElement('span');name.textContent=nameOf(c.speaker);const stamp=document.createElement('small');stamp.textContent=timer(c.start);top.append(name,stamp);
    const p=document.createElement('p');p.textContent=c.text;const chips=document.createElement('div');chips.className='chips';chips.append(chip(EMO[c.emotion].split(' ')[0]+' '+c.emotion));if(c.action!=='none')chips.append(chip(ACT[c.action]));if(c.shot!=='auto')chips.append(chip('🎥 '+(c.shot==='custom'?`${c.cam.yaw}° · ${c.cam.lens}mm`:c.shot)+(c.subject&&c.subject!==c.speaker?' · '+nameOf(c.subject):'')));if(c.screen)chips.append(chip('🖥 '+c.screen.title,'screen'));if(c.visemes)chips.append(chip('● voiced','voiced'));
    content.append(top,p,chips);b.append(num,content);b.onclick=()=>{selected=c.id;stop();time=c.start+.15;fillLine();renderCards();render();};list.append(b);
    const seg=document.createElement('div');seg.className='timeline-block c'+castIdx(c.speaker);seg.style.left=`${c.start/project.duration*100}%`;seg.style.width=`${(c.end-c.start)/project.duration*100}%`;seg.textContent=String(i+1).padStart(2,'0');track.append(seg);
  });
  const shots=$('shot-track');shots.replaceChildren();const segs=planShots(project);
  segs.forEach((s,i)=>{const end=segs[i+1]?.start??project.duration,d=document.createElement('div');d.className='shot-block '+(['wide','two','screen'].includes(s.shot)?'shot-'+s.shot:'shot-c'+castIdx(s.subject));d.style.left=`${s.start/project.duration*100}%`;d.style.width=`${(end-s.start)/project.duration*100}%`;d.title=shotName(s.shot)+(['wide','two','screen'].includes(s.shot)?'':' · '+nameOf(s.subject));d.textContent=s.shot.toUpperCase();shots.append(d);});
  $('line-count').textContent=`${String(project.cues.length).padStart(2,'0')} LINES`;
}
function fillLine(){
  const c=project.cues.find(x=>x.id===selected)||project.cues[0];
  if(c){selected=c.id;$('selected-label').textContent=`LINE ${String(project.cues.indexOf(c)+1).padStart(2,'0')} · ${nameOf(c.speaker).toUpperCase()}`;for(const k of ['speaker','start','end','emotion','action','shot','pause'])$(k).value=c[k];$('dialogue').value=c.text;
    options($('subject'),[['',`Speaker (${nameOf(c.speaker)})`],...project.cast.map(m=>[m.id,m.name]),...(c.shot==='custom'?[['all','Whole cast']]:[])]);$('subject').value=c.subject&&c.subject!==c.speaker?c.subject:'';
    $('custom-cam').hidden=c.shot!=='custom';$('customize-cam').hidden=c.shot==='custom';if(c.cam)showCam(c.cam);
    const s=c.screen;$('screen-on').checked=Boolean(s);$('screen-box').open=Boolean(s);$('screen-tone').value=s?.tone||'calm';$('screen-kicker').value=s?.kicker||'';$('screen-title').value=s?.title||'';$('screen-sub').value=s?.sub||'';$('screen-progress').checked=Boolean(s?.progress);}
  else{$('dialogue').value='';$('selected-label').textContent='ADD A LINE TO BEGIN';}
  for(const k of ['apply-line','delete-line','duplicate-line'])$(k).disabled=!c;
}
function refresh(){
  renderCards();options($('speaker'),project.cast.map(m=>[m.id,m.name]));options($('shot'),SHOTS.map(s=>[s,shotName(s)]));fillLine();renderCast();
  $('title').value=project.title;$('scrub').max=project.duration;$('duration-label').textContent=timer(project.duration);$('mid-label').textContent=timer(project.duration/2);
  const names=project.cast.map(c=>c.name);$('story-intro').textContent=`Direct ${names.length>1?names.slice(0,-1).join(', ')+' & '+names.at(-1):names[0]}’s next adventure.`;
  for(const [id,k] of [['warmth','warmth'],['duration','duration'],['handle','handle'],['caption-style','captionStyle'],['end-title','endTitle'],['end-sub','endSub'],['music-volume','musicVolume']])$(id).value=project[k];
  for(const [id,k] of [['captions','captions'],['dof','dof'],['intro','intro'],['music','music'],['sfx','sfx']])$(id).checked=project[k];
  document.querySelectorAll('input[name=engine]').forEach(r=>r.checked=r.value===project.voiceEngine);
  $('sound').textContent=project.music?'♫ Sound on':'♫ Score off';$('sound').setAttribute('aria-pressed',String(project.music));$('undo').disabled=!history.length;$('redo').disabled=!future.length;
  const voiced=project.cues.filter(c=>c.visemes).length;
  $('voice-status').textContent=project.voiceData?(voiced?`Voiced and lip-synced: ${voiced} of ${project.cues.length} lines.`:'Your recording is loaded and plays with the film.'):'No voice yet. Captions carry the story.';
  $('music-status').textContent=project.musicData?'Your music track is loaded. It loops and ducks under the voices.':'Original generated score. Use royalty-free music you have the rights to.';
  $('audio-label').textContent=[project.voiceData&&'VOICES',project.music&&(project.musicData?'YOUR MUSIC':'ORIGINAL SCORE'),project.sfx&&'SOUND DESIGN'].filter(Boolean).join(' + ')||'SILENT';
}
async function decode(dataURL){return audioCtx.decodeAudioData(await(await fetch(dataURL)).arrayBuffer());}
async function ensureAudio(){if(!audioCtx)audioCtx=new AudioContext({sampleRate:RATE});await audioCtx.resume();if(!soundBuffer){if(project.voiceData&&!voiceBuffer)voiceBuffer=await decode(project.voiceData);if(project.musicData&&!musicBuffer)musicBuffer=await decode(project.musicData);const channels=await makeSound(project,project.voiceData?voiceBuffer:null,project.musicData?musicBuffer:null);soundBuffer=audioCtx.createBuffer(2,channels[0].length,RATE);channels.forEach((a,c)=>soundBuffer.copyToChannel(a,c));}return soundBuffer;}
async function play(){if(exporting)return;if(playing){stop();return;}if(time>=project.duration-.04)time=0;scene.setManual(false);$('orbit').setAttribute('aria-pressed','false');const gen=++audioGeneration;try{$('status').textContent='Mixing sound…';const buf=await ensureAudio();if(gen!==audioGeneration)return;audioSource=audioCtx.createBufferSource();audioSource.buffer=buf;audioSource.connect(audioCtx.destination);audioSource.start(0,time);$('status').textContent='Playing.';}catch(e){toast('Audio is unavailable: '+e.message);}playing=true;last=performance.now();$('play').textContent='Ⅱ';$('play').setAttribute('aria-label','Pause film');}
function tick(now){requestAnimationFrame(tick);if(exporting)return;if(playing){time+=(now-last)/1000;last=now;if(time>=project.duration){time=project.duration;stop();}render();}else if(scene?.manual||scene?.focus)render();}
options($('emotion'),EMOTIONS.map(e=>[e,EMO[e]]));options($('action'),ACTIONS.map(a=>[a,ACT[a]]));
$('help-emotions').textContent=EMOTIONS.join(', ');$('help-actions').textContent=ACTIONS.join(', ');$('help-shots').textContent=SHOTS.filter(s=>s!=='custom').join(', ');
function fillVoices(groups){for(const sel of document.querySelectorAll('.voice-select')){sel.replaceChildren(...Object.entries(groups).map(([label,ids])=>{const g=document.createElement('optgroup');g.label=label;g.append(...ids.map(id=>{const o=document.createElement('option');o.value=id;o.textContent=id.slice(3).replace(/^./,c=>c.toUpperCase());return o;}));return g;}));}}
fillVoices(FALLBACK_VOICES);

// Studio engine (server.mjs): voices, lip sync and best-quality renders.
async function api(path,body){const r=await fetch(path,body?{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(body)}:{});const data=await r.json().catch(()=>({}));if(!r.ok)throw Error(data.error||`Studio engine error ${r.status}`);return data;}
async function watch(id,onUpdate){for(;;){const job=await api('/api/jobs/'+id);onUpdate(job);if(job.status==='done')return job.result;if(job.status==='error')throw Error(job.message);await new Promise(r=>setTimeout(r,800));}}
(async()=>{
  try{server=await api('/api/status');fillVoices(server.voices);refresh();
    const e=server.engines,ok=e.kokoro&&e.rhubarb&&e.ffmpeg;$('engine-pill').textContent=ok?`● Studio engine ready${e.chatterbox?' · expressive voices':''}`:'● Studio engine incomplete';$('engine-pill').classList.add(ok?'ok':'warn');
    const cb=document.querySelector('input[value=chatterbox]');cb.disabled=!e.chatterbox;if(!e.chatterbox)cb.closest('label').title='Expressive voices are still installing or unavailable.';loadRenders();
  }catch{server=null;$('engine-pill').textContent='○ Browser only · run node server.mjs for voices';$('engine-pill').classList.add('off');for(const id of ['generate-voices','studio-render'])$(id).disabled=true;$('voice-job').textContent='Start the studio engine (node server.mjs) to generate voices.';$('studio-status').textContent='Start the studio engine (node server.mjs) for best-quality renders.';$('browser-export-open')?.click();document.querySelector('.browser-export').open=true;}
})();
$('generate-voices').onclick=async()=>{
  if(!server)return;stop();const btn=$('generate-voices');btn.disabled=true;$('voice-progress').hidden=false;$('voice-progress').value=0;
  try{
    const engine=document.querySelector('input[name=engine]:checked')?.value||'kokoro',sent={...clone(project),voiceEngine:engine};
    const {id}=await api('/api/voice',{project:sent,layout:$('voice-layout').value});
    const result=await watch(id,j=>{$('voice-progress').value=j.progress;$('voice-job').textContent=j.status==='queued'?'Waiting for the studio…':j.message;});
    const keepSelected=selected;voiceBuffer=null;commit({...result,cast:project.cast,voiceEngine:engine});selected=keepSelected;time=0;fillLine();render();$('voice-job').textContent=`Done. ${project.cues.length} lines voiced, film is ${project.duration} seconds. Press play.`;toast('Voices and lip sync are ready.');
  }catch(e){$('voice-job').textContent='Could not generate voices: '+e.message;}finally{btn.disabled=false;$('voice-progress').hidden=true;}
};
// Open dialog: recent studio renders with their projects, plus a file picker.
async function openProjects(){
  stop();const list=$('open-list');list.replaceChildren();let films=[];
  if(server){try{films=(await api('/api/renders')).filter(r=>r.project);}catch{}}
  $('open-empty').hidden=Boolean(films.length);$('open-empty').textContent=server?'No rendered films yet. Films appear here after a studio render.':'Start the studio engine (npm run studio) to see your rendered films here.';
  list.append(...films.map(r=>{const li=document.createElement('li'),row=document.createElement('div'),info=document.createElement('div'),b=document.createElement('button'),w=document.createElement('a');
    info.innerHTML='<b></b><small></small>';info.querySelector('b').textContent=r.title;info.querySelector('small').textContent=`${new Date(r.created).toLocaleString()} · ${r.name}`;
    b.className='primary';b.textContent='Open';b.onclick=()=>openRender(r);w.href=r.url;w.target='_blank';w.textContent='Watch';w.className='quiet-link';row.className='open-row';row.append(info,w,b);li.append(row);return li;}));
  $('open-dialog').showModal();
}
async function openRender(r){
  try{const res=await fetch(r.project);if(!res.ok)throw Error('The project file is missing.');const p=validateProject(await res.json());selected=p.cues[0]?.id||0;castSel=p.cast[0].id;time=0;voiceBuffer=null;commit(p);$('open-dialog').close();document.querySelector('[data-tab=line]').click();toast(`Opened "${p.title}". Press play.`);}
  catch(e){toast('Could not open this film: '+e.message);}
}
async function loadRenders(){
  if(!server)return;try{const list=await api('/api/renders');$('renders-box').hidden=!list.length;$('renders-list').replaceChildren(...list.slice(0,8).map(r=>{const li=document.createElement('li'),a=document.createElement('a');a.href=r.url;a.target='_blank';a.textContent=r.name.replace(/_/g,' ');const s=document.createElement('small');s.textContent=`${new Date(r.created).toLocaleString()} · ${(r.size/1e6).toFixed(1)} MB`;li.append(a,s);return li;}));}catch{}
}
$('studio-render').onclick=async()=>{
  if(!server||exporting)return;stop();const btn=$('studio-render');btn.disabled=true;$('studio-progress').hidden=false;$('export-result').hidden=true;
  try{
    const {id}=await api('/api/render',{project:clone(project),width:Number($('export-size').value)});
    const result=await watch(id,j=>{$('studio-progress').value=j.progress;$('studio-status').textContent=j.status==='queued'?'Waiting for the studio…':j.message;});
    $('result-video').hidden=false;$('result-video').src=result.url;$('download-film').href=result.url;$('download-film').download=project.title.replace(/[^a-z0-9]+/gi,'_')+'.mp4';$('download-film').textContent='Download film ↓';$('export-result').hidden=false;$('studio-status').textContent='Your film is ready. It is also saved in the studio renders folder.';loadRenders();
  }catch(e){$('studio-status').textContent='Render failed: '+e.message;}finally{btn.disabled=false;$('studio-progress').hidden=true;}
};

$('play').onclick=play;$('back').onclick=()=>{stop();time=0;render();};$('scrub').oninput=()=>{audioGeneration++;stop();time=Number($('scrub').value);render();};
$('title').onchange=()=>{try{commit({...project,title:$('title').value},{keepAudio:true})}catch(e){toast(e.message)}};
function readScreen(){if(!$('screen-on').checked)return undefined;return {tone:$('screen-tone').value,kicker:$('screen-kicker').value,title:$('screen-title').value,sub:$('screen-sub').value,progress:$('screen-progress').checked};}
$('screen-on').onchange=()=>{$('screen-box').open=$('screen-on').checked;};
$('apply-line').onclick=()=>{try{const p=clone(project),c=p.cues.find(c=>c.id===selected),text=$('dialogue').value.trim(),speaker=$('speaker').value;
  if(text!==c.text||speaker!==c.speaker||$('emotion').value!==c.emotion){delete c.visemes;delete c.words;}
  Object.assign(c,{text,speaker,start:Number($('start').value),end:Number($('end').value),emotion:$('emotion').value,action:$('action').value,shot:$('shot').value,pause:Number($('pause').value),screen:readScreen(),subject:$('subject').value||undefined});if(!c.screen)delete c.screen;if(!c.subject)delete c.subject;if(c.shot==='custom')c.cam=camValues();
  commit(p,{keepAudio:true});toast(c.visemes?'Scene updated.':'Scene updated. Generate voices to re-voice this line.');}catch(e){toast(e.message)}};
function freeSlot(p,len=2){let start=.5;for(const c of p.cues){if(c.start-start>=len+.2)break;start=c.end+.2;}if(p.duration-start<len)p.duration=Math.min(90,Math.ceil(start+len+1));if(p.duration-start<len)throw Error('The film is full. Shorten a line or remove one.');return Math.round(start*10)/10;}
$('add-line').onclick=()=>{try{const p=clone(project),start=freeSlot(p),c={id:Math.max(0,...p.cues.map(c=>c.id))+1,start,end:start+2,speaker:p.cast[0].id,text:'Your next line…',emotion:'neutral',action:'none',shot:'auto',pause:.45};p.cues.push(c);selected=c.id;commit(p,{keepAudio:true});}catch(e){toast(e.message)}};
$('duplicate-line').onclick=()=>{try{const p=clone(project),src=p.cues.find(c=>c.id===selected),len=src.end-src.start,start=freeSlot(p,len),c={...clone(src),id:Math.max(...p.cues.map(c=>c.id))+1,start,end:start+len};delete c.visemes;delete c.words;delete c.screen;p.cues.push(c);selected=c.id;commit(p,{keepAudio:true});toast('Line duplicated at the next free moment.');}catch(e){toast(e.message)}};
$('delete-line').onclick=()=>{commit({...project,cues:project.cues.filter(c=>c.id!==selected)},{keepAudio:true});};
document.querySelectorAll('input[name=engine]').forEach(r=>r.onchange=()=>{try{commit({...project,voiceEngine:r.value},{keepAudio:true});}catch(e){toast(e.message)}});
$('apply-film').onclick=()=>{try{commit({...project,handle:$('handle').value.trim(),captionStyle:$('caption-style').value,warmth:Number($('warmth').value),captions:$('captions').checked,dof:$('dof').checked,intro:$('intro').checked,endTitle:$('end-title').value.trim(),endSub:$('end-sub').value.trim(),duration:Number($('duration').value),music:$('music').checked,musicVolume:Number($('music-volume').value),sfx:$('sfx').checked},{keepAudio:true});toast('Film settings applied.');}catch(e){toast(e.message)}};
document.querySelectorAll('[data-tab]').forEach(b=>b.onclick=()=>{document.querySelectorAll('[data-tab]').forEach(x=>x.classList.toggle('active',x===b));for(const t of ['line','cast','voice','film'])$('tab-'+t).hidden=t!==b.dataset.tab;stop();scene.setFocus(b.dataset.tab==='cast'?member().id:null);render();});
$('orbit').onclick=()=>{stop();scene.setManual(!scene.manual);$('orbit').setAttribute('aria-pressed',String(scene.manual));$('status').textContent=scene.manual?'Drag to orbit. Scroll or pinch to zoom.':'Story camera active.';render();};$('frame').onclick=()=>{scene.setManual(false);$('orbit').setAttribute('aria-pressed','false');render();};
function restore(next){project=next;stop();voiceBuffer=null;musicBuffer=null;soundBuffer=null;scene.setProject(project);persist();refresh();render();}
$('undo').onclick=()=>{if(!history.length)return;future.push(clone(project));restore(history.pop());};$('redo').onclick=()=>{if(!future.length)return;history.push(clone(project));restore(future.pop());};
$('reset').onclick=()=>{selected=1;time=0;commit(clone(DEFAULT_PROJECT));toast('Sample restored. Undo brings back your edits.');};
function download(blob,name){const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),30000);}
const fileBase=()=>project.title.replace(/[^a-z0-9]+/gi,'_');
$('save').onclick=()=>download(new Blob([JSON.stringify(project,null,2)],{type:'application/json'}),fileBase()+'.ember.json');$('open').onclick=openProjects;$('open-file').onclick=()=>$('project-file').click();$('project-file').onchange=async e=>{try{const f=e.target.files[0];if(!f)return;
  if(/^(video|audio|image)\//.test(f.type)||!/\.json$/i.test(f.name))throw Error(`"${f.name}" is not a project. Open the project.ember.json saved next to the film, or pick the film from the Open list.`);
  if(f.size>32000000)throw Error('This project is over 32 MB. Remove the imported music or voice recording and try again.');$('open-dialog').close();const p=validateProject(JSON.parse(await f.text()));selected=p.cues[0]?.id||0;time=0;commit(p);toast('Project opened.');}catch(e){toast(e.message)}finally{$('project-file').value='';}};
$('sound').onclick=()=>commit({...project,music:!project.music},{keepAudio:true});
async function readAudio(input,limit){const f=input.files[0];if(!f)return null;if(f.size>limit)throw Error(`Choose audio smaller than ${limit/1e6} MB.`);if(!audioCtx)audioCtx=new AudioContext({sampleRate:RATE});const buf=await audioCtx.decodeAudioData(await f.arrayBuffer());const data=await new Promise((ok,no)=>{const r=new FileReader();r.onload=()=>ok(r.result);r.onerror=no;r.readAsDataURL(f)});return {buf,data};}
$('upload-voice').onclick=()=>$('audio-file').click();$('audio-file').onchange=async e=>{try{const a=await readAudio(e.target,1e7);if(!a)return;const p=clone(project);p.cues.forEach(c=>{delete c.visemes;delete c.words;});p.voiceData=a.data;commit(p);voiceBuffer=a.buf;toast('Voice imported.');}catch(e){toast('Could not import audio: '+e.message)}finally{$('audio-file').value='';}};
$('remove-voice').onclick=()=>{const p=clone(project);p.voiceData=null;p.cues.forEach(c=>{delete c.visemes;delete c.words;});commit(p);};
$('upload-music').onclick=()=>$('music-file').click();$('music-file').onchange=async e=>{try{const a=await readAudio(e.target,1e7);if(!a)return;commit({...project,musicData:a.data,music:true},{keepAudio:true});musicBuffer=a.buf;toast('Music track added.');}catch(e){toast('Could not import music: '+e.message)}finally{$('music-file').value='';}};
$('remove-music').onclick=()=>commit({...project,musicData:null},{keepAudio:true});

// Character creator: one editor for every kind; fields appear only where the kind uses them.
const KIND_NAMES={human:'Human',robot:'Robot',creature:'Creature',bot:'Desk bot'};
const FIELDS={
  human:{ranges:['height','build','head'],options:['hairStyle','facialHair','eyeStyle','topStyle','glasses','hat'],colors:['skin','hair','eyes','top','accent','bottom','shoes']},
  creature:{ranges:['height','build','head'],options:['species','eyeStyle','topStyle','glasses','hat'],colors:['skin','accent','hair','eyes','top','bottom','shoes']},
  robot:{ranges:['height','build','head'],options:['glasses','hat'],colors:['top','accent','screen','bottom','shoes']},
  bot:{ranges:['height'],options:[],colors:['top','accent','screen']}
};
const LABELS={height:'Height',build:'Build',head:'Head size',species:'Creature',hairStyle:'Hair',facialHair:'Facial hair',eyeStyle:'Eyes',topStyle:'Outfit',glasses:'Glasses',hat:'Headwear',
  skin:'Skin',hair:'Hair',eyes:'Eyes',top:'Outfit',accent:'Details',bottom:'Trousers',shoes:'Shoes',screen:'Face light'};
const KIND_LABELS={creature:{skin:'Fur',accent:'Belly & ears',hair:'Nose & brows'},robot:{top:'Shell',accent:'Joints'},bot:{top:'Shell',accent:'Trim'}};
const OPTION_NAMES={shaggy:'Shaggy (reference)',chunky:'Chunky',short:'Short',curly:'Curly',long:'Long',bun:'Bun',mohawk:'Mohawk',bald:'Bald',none:'None',stubble:'Stubble',beard:'Beard',mustache:'Mustache',
  glossy:'Glossy (reference)',classic:'Classic',hoodie:'Hoodie',tshirt:'T-shirt',jacket:'Jacket',suit:'Suit & tie',round:'Round',square:'Square',cap:'Cap',beanie:'Beanie',headphones:'Headphones',fox:'Fox',cat:'Cat',dragon:'Dragon',bear:'Bear',bunny:'Bunny'};
const member=()=>project.cast.find(c=>c.id===castSel)||project.cast[0];
function field(label,control){const l=document.createElement('label');l.append(label,control);return l;}
function renderCast(){
  if(!project.cast.some(c=>c.id===castSel))castSel=project.cast[0].id;const m=member(),list=$('cast-list');
  list.replaceChildren(...project.cast.map((c,i)=>{const b=document.createElement('button');b.className='cast-chip'+(c.id===m.id?' selected':'');const dot=document.createElement('span');dot.className='cast-dot';dot.style.background=c.kind==='bot'||c.kind==='robot'?c.look.top:c.look.top;dot.textContent=c.name[0];const t=document.createElement('span');t.innerHTML=`<b></b><small>${KIND_NAMES[c.kind]}</small>`;t.querySelector('b').textContent=c.name;b.append(dot,t);b.onclick=()=>{castSel=c.id;scene.setFocus(c.id);renderCast();render();};return b;}));
  $('add-character').disabled=project.cast.length>=MAX_CAST;$('remove-character').disabled=project.cast.length<=1;
  $('char-name').value=m.name;$('char-kind').value=m.kind;$('char-voice').value=m.voice;
  const f=FIELDS[m.kind],box=$('look-fields'),label=k=>KIND_LABELS[m.kind]?.[k]||LABELS[k];box.replaceChildren();
  const section=title=>{const h=document.createElement('div');h.className='look-section';h.textContent=title;box.append(h);};
  section('Body');for(const k of f.ranges){const [lo,hi]=LOOK_RANGES[k],r=document.createElement('input');Object.assign(r,{type:'range',min:lo,max:hi,step:.01,value:m.look[k]});r.dataset.key=k;const out=document.createElement('output');out.value=`${Math.round(m.look[k]*100)}%`;r.oninput=()=>{out.value=`${Math.round(r.value*100)}%`;previewLook();};r.onchange=commitLook;const l=field(label(k)+' ',r);l.querySelector('input').before(out);box.append(l);}
  if(f.options.length){section('Style');const grid=document.createElement('div');grid.className='look-grid';for(const k of f.options){const sel=document.createElement('select');sel.dataset.key=k;for(const o of LOOK_OPTIONS[k]){const op=document.createElement('option');op.value=o;op.textContent=OPTION_NAMES[o]||o;sel.append(op);}sel.value=m.look[k];sel.onchange=commitLook;grid.append(field(label(k),sel));}box.append(grid);}
  section('Colours');const colors=document.createElement('div');colors.className='look-grid colors';for(const k of f.colors){const c=document.createElement('input');Object.assign(c,{type:'color',value:m.look[k]});c.dataset.key=k;c.oninput=previewLook;c.onchange=commitLook;colors.append(field(label(k),c));}box.append(colors);
}
function readLook(){const look={...member().look};for(const el of $('look-fields').querySelectorAll('[data-key]'))look[el.dataset.key]=el.type==='range'?Number(el.value):el.value;return look;}
function castWith(changes){const p=clone(project),i=p.cast.findIndex(c=>c.id===member().id);p.cast[i]={...p.cast[i],...changes};return p;}
let previewTimer;
// Live preview while dragging sliders or colour pickers; the edit is committed (undoable) on release.
function previewLook(){clearTimeout(previewTimer);previewTimer=setTimeout(()=>{try{scene.setProject(validateProject(castWith({look:readLook()})));render();}catch{}},40);}
function commitLook(){clearTimeout(previewTimer);try{commit(castWith({look:readLook()}),{keepAudio:true});scene.setFocus(member().id);}catch(e){toast(e.message)}}
$('char-name').onchange=()=>{try{commit(castWith({name:$('char-name').value.trim()||member().name}),{keepAudio:true});}catch(e){toast(e.message)}};
$('char-voice').onchange=()=>{try{const id=member().id,p=castWith({voice:$('char-voice').value});p.cues.forEach(c=>{if(c.speaker===id){delete c.visemes;delete c.words;}});commit(p,{keepAudio:true});toast('Voice changed. Generate voices to hear it.');}catch(e){toast(e.message)}};
$('char-kind').onchange=()=>{try{commit(castWith({kind:$('char-kind').value}),{keepAudio:true});scene.setFocus(member().id);}catch(e){toast(e.message)}};
$('add-character').onclick=()=>{try{const p=clone(project),m=newCastMember(p,$('new-template').value);p.cast.push(m);castSel=m.id;commit(p,{keepAudio:true});scene.setFocus(m.id);render();toast(`${m.name} joined the cast. Give them lines in the Scene tab or the script.`);}catch(e){toast(e.message)}};
$('remove-character').onclick=()=>{const m=member(),used=project.cues.filter(c=>c.speaker===m.id).length;if(used){toast(`${m.name} speaks ${used} line${used>1?'s':''}. Give those lines to someone else or delete them first.`);return;}
  try{const p=clone(project);p.cast=p.cast.filter(c=>c.id!==m.id);p.cues.forEach(c=>{if(c.subject===m.id)delete c.subject;});castSel=p.cast[0].id;commit(p,{keepAudio:true});scene.setFocus(castSel);}catch(e){toast(e.message)}};
const pick=a=>a[Math.floor(Math.random()*a.length)],SKIN=['#f1c7a5','#e0a57f','#c78a65','#a8714f','#7d5137','#5a3a28'],HAIR=['#1d1715','#2a211e','#5a3422','#8a5a2b','#c9a15a','#d8d0c4','#7a2f2f','#3e4f7a'],CLOTH=['#2e3a55','#8364c5','#b5543f','#3f6b58','#d9a441','#4f8fd6','#c24d6b','#2b2b2b','#e8e2d6','#6b4f3a'];
$('randomize').onclick=()=>{const m=member(),look={...m.look};
  for(const k of FIELDS[m.kind].options)look[k]=pick(LOOK_OPTIONS[k]);for(const k of FIELDS[m.kind].ranges){const [lo,hi]=LOOK_RANGES[k];look[k]=Math.round((lo+(hi-lo)*(.25+Math.random()*.5))*100)/100;}
  Object.assign(look,{skin:m.kind==='creature'?pick(['#d9793d','#b9b2a6','#6b4a35','#e8dccb','#4d8a54']):pick(SKIN),hair:pick(HAIR),top:pick(CLOTH),accent:pick(CLOTH),bottom:pick(['#1b222c','#2b3346','#3d3328','#4a4a4a','#1f3a33']),shoes:pick(['#d6cbb5','#2b2b2b','#b5543f','#e8e2d6']),screen:pick(['#94f3d4','#7fd6ff','#ffd27a','#ff8fa3','#b9f27a'])});
  if(Math.random()<.6)look.glasses='none';if(Math.random()<.6)look.hat='none';if(Math.random()<.6)look.facialHair='none';
  try{commit(castWith({look}),{keepAudio:true});scene.setFocus(m.id);}catch(e){toast(e.message)}};

// 360° camera: dial for the angle around the subject (0° = in front of them), height, distance, lens, move.
const DEG=Math.PI/180,dial=$('cam-dial');
function angleName(y){const a=Math.abs(y);return a<20?'Front':a<70?`Three-quarter ${y>0?'left':'right'}`:a<110?`Profile ${y>0?'left':'right'}`:a<160?`Over the ${y>0?'left':'right'} shoulder`:'From behind';}
function setDial(yaw){yaw=Math.round(((yaw%360)+540)%360-180);dial.dataset.yaw=yaw;const x=Math.sin(yaw*DEG)*50,y=Math.cos(yaw*DEG)*50;$('dial-handle').setAttribute('cx',x.toFixed(1));$('dial-handle').setAttribute('cy',y.toFixed(1));$('dial-ray').setAttribute('x2',x.toFixed(1));$('dial-ray').setAttribute('y2',y.toFixed(1));$('yaw-out').innerHTML=`${yaw}°<small>${angleName(yaw)}</small>`;}
function showCam(c){setDial(c.yaw);$('cam-pitch').value=c.pitch;$('cam-dist').value=c.dist;$('cam-lens').value=c.lens;$('cam-move').value=c.move;camOutputs();}
function camOutputs(){$('pitch-out').value=`${$('cam-pitch').value}°${Number($('cam-pitch').value)<0?' low angle':Number($('cam-pitch').value)>40?' high angle':''}`;$('dist-out').value=`${Number($('cam-dist').value).toFixed(1)} m`;$('lens-out').value=`${$('cam-lens').value} mm`;}
function camValues(){return {yaw:Number(dial.dataset.yaw||0),pitch:Number($('cam-pitch').value),dist:Number($('cam-dist').value),lens:Number($('cam-lens').value),move:$('cam-move').value};}
const selectedCue=()=>project.cues.find(c=>c.id===selected);
function previewCam(){const c=selectedCue();if(!c)return;if(time<c.start||time>=c.end){stop();time=c.start+Math.min(.5,(c.end-c.start)/2);}scene.previewCam={...camValues(),subject:$('subject').value||c.speaker};render();}
function commitCam(changes={}){const c=selectedCue();if(!c)return;scene.previewCam=null;try{const p=clone(project),q=p.cues.find(x=>x.id===c.id);Object.assign(q,{shot:'custom',cam:camValues(),...changes});const sub=$('subject').value;if(sub)q.subject=sub;else delete q.subject;commit(p,{keepAudio:true});}catch(e){toast(e.message)}}
function dialAngle(e){const r=dial.getBoundingClientRect(),x=(e.clientX-r.left)/r.width*128-64,y=(e.clientY-r.top)/r.height*128-64;return Math.atan2(x,y)/DEG;}
dial.addEventListener('pointerdown',e=>{dial.setPointerCapture(e.pointerId);setDial(dialAngle(e));previewCam();});
dial.addEventListener('pointermove',e=>{if(dial.hasPointerCapture(e.pointerId)){setDial(dialAngle(e));previewCam();}});
dial.addEventListener('pointerup',e=>{if(dial.hasPointerCapture(e.pointerId)){dial.releasePointerCapture(e.pointerId);commitCam();}});
dial.addEventListener('keydown',e=>{if(!['ArrowLeft','ArrowRight'].includes(e.key))return;e.preventDefault();setDial(Number(dial.dataset.yaw||0)+(e.key==='ArrowLeft'?-5:5)*(e.shiftKey?3:1));commitCam();});
for(const id of ['cam-pitch','cam-dist','cam-lens']){$(id).oninput=()=>{camOutputs();previewCam();};$(id).onchange=()=>commitCam();}
$('cam-move').onchange=()=>commitCam();
document.querySelectorAll('[data-yaw]').forEach(b=>b.onclick=()=>{setDial(Number(b.dataset.yaw));commitCam();});
// Turn whatever the director planned for this line into an editable 360° angle.
function plannedCam(c){const seg=planShots(project).find(s=>s.cue===c.id&&s.shot!=='screen')||{shot:'single',subject:c.speaker,other:c.speaker};return {seg,cam:seg.shot==='custom'?seg.cam:scene.describeShot(seg)};}
$('customize-cam').onclick=()=>{const c=selectedCue();if(!c)return;const {seg,cam}=plannedCam(c);showCam(cam);if(seg.subject!==c.speaker)$('subject').value=seg.subject;commitCam();toast('Drag the dial to move the camera around the character.');};
$('shot').onchange=()=>{const c=selectedCue();if(!c)return;if($('shot').value==='custom'){const {cam}=plannedCam(c);showCam(c.cam||cam);commitCam();}else{try{const p=clone(project),q=p.cues.find(x=>x.id===c.id);q.shot=$('shot').value;delete q.cam;commit(p,{keepAudio:true});}catch(e){toast(e.message)}}};
$('subject').onchange=()=>{const c=selectedCue();if(!c)return;if(c.shot==='custom'){commitCam();return;}try{const p=clone(project),q=p.cues.find(x=>x.id===c.id);if($('subject').value)q.subject=$('subject').value;else delete q.subject;if(q.shot==='auto')q.shot='single';commit(p,{keepAudio:true});}catch(e){toast(e.message)}};

// Script editor and AI writer prompt.
const openScript=()=>{stop();$('script-text').value=toScript(project);$('script-error').textContent='';$('script-dialog').showModal();};
$('script-open').onclick=openScript;$('script-open-2').onclick=openScript;
document.querySelectorAll('[data-close]').forEach(b=>b.onclick=()=>$(b.dataset.close).close());
$('import-script').onclick=()=>{try{const {meta,cues}=parseScript($('script-text').value,project),last=cues.at(-1).end,duration=Math.min(90,Math.max(project.duration,Math.ceil(last+2.5)));
  const p={...clone(project),cues,duration,voiceData:null,title:meta.title||project.title,handle:meta.handle??project.handle};selected=cues[0].id;time=0;commit(p);$('script-dialog').close();toast('Script loaded. Open the Voice tab to give it voices.');document.querySelector('[data-tab=voice]').click();}catch(e){$('script-error').textContent=e.message;}};
$('download-script').onclick=()=>download(new Blob([$('script-text').value],{type:'text/plain'}),fileBase()+'.script.txt');
const KIND_TEXT={human:'a human',robot:'a humanoid robot',creature:'a cartoon creature',bot:'a small desk robot with an LED face'};
$('copy-prompt').onclick=async()=>{const topic=$('ai-topic').value.trim()||'something funny that happens at their desk today',cast=project.cast,first=cast[0].name.toUpperCase(),second=(cast[1]||cast[0]).name.toUpperCase(),prompt=`You write short comedy scripts for a 3D animated vertical reel (9:16, 30 to 55 seconds).
Characters:
${cast.map(c=>`- ${c.name}: ${KIND_TEXT[c.kind]}${c.kind==='creature'?` (${c.look.species})`:''}. Give them a clear, consistent personality.`).join('\n')}
Setting: they stand on a giant keyboard in front of a huge monitor whose screen can change.
Write an episode about: ${topic}

Structure: a hook in the first line, escalation, one silent beat, and a callback punchline at the end. 8 to 14 lines, about 100 spoken words in total, each line under 160 characters.
Reply with the script only, in exactly this format, one line each:
# title: <short episode title>
${first} [emotion, action]: spoken line
${second} [emotion, action, pause=0.8]: spoken line
>> SCREEN tone: KICKER | Title | Subtitle   (optional; put it before a line to change the monitor; tone is alert, calm, info or success; add +progress after the tone for a progress bar)

Emotions: ${EMOTIONS.join(', ')}
Actions: ${ACTIONS.join(', ')}
Optional camera tag (default is automatic): ${SHOTS.filter(s=>!['auto','custom'].includes(s)).join(', ')}; add :name to frame someone else (cu:${cast[0].name.toLowerCase()}), or a free angle cam=<degrees around>/<height degrees>/<distance>/<lens mm>
Optional pause tag: pause=<seconds of silence after the line, 0 to 3>`;
  try{await navigator.clipboard.writeText(prompt);toast('Prompt copied. Paste it into Claude, ChatGPT or Gemini.');}catch{$('script-text').value=prompt;toast('Clipboard blocked: the prompt is in the editor. Copy it from there.');}};

$('export-open').onclick=()=>{stop();if(!globalThis.VideoEncoder)$('export-status').textContent='This browser exports a frame package with soundtrack; its included converter creates the MP4.';loadRenders();$('export-dialog').showModal();};$('close-export').onclick=()=>{if(!exporting)$('export-dialog').close();};$('export-dialog').addEventListener('cancel',e=>{if(exporting)e.preventDefault()});
$('render').onclick=async()=>{if(exporting)return;stop();exporting=true;aborter=new AbortController();$('render').disabled=true;$('export-size').disabled=true;$('close-export').disabled=true;$('export-progress').hidden=false;$('cancel-export').hidden=false;$('export-result').hidden=true;$('export-status').textContent='Preparing soundtrack…';
  try{const buf=await ensureAudio(),audio=[buf.getChannelData(0),buf.getChannelData(1)];const result=await exportFilm(scene,clone(project),audio,Number($('export-size').value),(n,text)=>{$('export-progress').value=n;$('export-status').textContent=text;},aborter.signal);if(resultURL)URL.revokeObjectURL(resultURL);resultURL=URL.createObjectURL(result.blob);const archive=result.kind==='frames';$('result-video').hidden=archive;if(!archive)$('result-video').src=resultURL;$('download-film').href=resultURL;$('download-film').download=fileBase()+(archive?'_render.zip':'.mp4');$('download-film').textContent=archive?'Download render package ↓':'Download film ↓';$('export-result').hidden=false;$('export-status').textContent=`Ready · ${result.width} × ${result.height} · ${result.frames} frames · ${(result.blob.size/1e6).toFixed(1)} MB`+(archive?' · Extract and run convert_video.py to create your MP4.':'');$('status').textContent='Final film rendered successfully.';
  }catch(e){$('export-status').textContent=e.message;console.error(e);}finally{exporting=false;$('render').disabled=false;$('export-size').disabled=false;$('close-export').disabled=false;$('cancel-export').hidden=true;render();}};
$('cancel-export').onclick=()=>aborter?.abort();
document.addEventListener('keydown',e=>{if(['INPUT','TEXTAREA','SELECT'].includes(e.target.tagName)||document.querySelector('dialog[open]'))return;
  if(e.code==='Space'){e.preventDefault();play();}
  if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();stop();time=Math.max(0,Math.min(project.duration,time+(e.key==='ArrowLeft'?-1:1)*(e.shiftKey?1:1/30)));render();}
  if((e.ctrlKey||e.metaKey)&&e.key==='z'){e.preventDefault();$(e.shiftKey?'redo':'undo').click();}});
document.addEventListener('visibilitychange',()=>{if(document.hidden&&!exporting)stop();});
// Start once every handler above exists.
try{scene=new FilmScene($('film'),project);scene.setSize(540,960);$('loading').hidden=true;refresh();render();requestAnimationFrame(tick);}catch(e){$('loading').textContent='3D could not start: '+e.message;$('status').textContent='WebGL is required. Try a current browser with graphics enabled.';console.error(e);}
