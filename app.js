import {FilmScene} from './scene.js';
import {DEFAULT_PROJECT,EMOTIONS,ACTIONS,SHOTS,clone,validateProject,planShots,parseScript,toScript} from './dist/timeline.js';
import {makeSound,RATE} from './audio.js';
import {exportFilm} from './exporter.js';
const $=id=>document.getElementById(id),storageKey='ember-take-project-v2';
let project=clone(DEFAULT_PROJECT),selected=1,time=0,playing=false,last=0,exporting=false,scene,audioCtx,audioSource,soundBuffer,voiceBuffer,musicBuffer,aborter,server=null;
const history=[],future=[];let audioGeneration=0,resultURL;
const EMO={neutral:'😐 Neutral',happy:'😄 Happy',sad:'😢 Sad',angry:'😠 Angry',surprised:'😲 Surprised',worried:'😟 Worried',curious:'🤔 Curious',idea:'💡 Bright idea'};
const ACT={none:'Natural talk',wave:'Wave',point:'Point',shrug:'Shrug',facepalm:'Facepalm',think:'Think',cheer:'Cheer',nod:'Nod',headshake:'Shake head',lean:'Lean in',jump:'Jump',type:'Type on the keys',press:'Press the big key',raise:'Raise a hand'};
const shotName=(s,p=project)=>({auto:'Auto · the director picks',wide:'Wide · the whole world',two:'Two shot · together',ren:`Medium · ${p.names.Ren}`,mica:`Medium · ${p.names.Mica}`,'ren-cu':`Close-up · ${p.names.Ren}`,'mica-cu':`Close-up · ${p.names.Mica}`,'ren-ots':`Over the shoulder · onto ${p.names.Ren}`,'mica-ots':`Over the shoulder · onto ${p.names.Mica}`,screen:'Insert · the monitor'})[s];
const FALLBACK_VOICES={'American female':['af_heart','af_bella','af_nicole','af_sarah','af_sky'],'American male':['am_michael','am_puck','am_fenrir','am_echo','am_adam'],'British female':['bf_emma','bf_isabella'],'British male':['bm_george','bm_lewis']};
function toast(s){$('toast').textContent=s;$('toast').classList.add('show');clearTimeout(toast.timer);toast.timer=setTimeout(()=>$('toast').classList.remove('show'),4200)}
function options(select,entries){select.replaceChildren(...entries.map(([v,t])=>{const o=document.createElement('option');o.value=v;o.textContent=t;return o;}));}
try{const old=localStorage.getItem(storageKey)||localStorage.getItem('ember-take-project-v1');if(old)project=validateProject(JSON.parse(old));}catch{toast('The saved project could not be opened. Loaded the sample film.');}
const timer=t=>`${String(Math.floor(t/60)).padStart(2,'0')}:${String(Math.floor(t%60)).padStart(2,'0')}`;
function persist(){try{localStorage.setItem(storageKey,JSON.stringify(project));$('save-status').textContent='Saved on this device';}catch{$('save-status').textContent='Use Save project to keep your changes';}}
function stop(){audioGeneration++;playing=false;$('play').textContent='▶';$('play').setAttribute('aria-label','Play film');if(audioSource){try{audioSource.stop()}catch{}audioSource=null;}}
function commit(next,{keepAudio=false}={}){const valid=validateProject(next);history.push(clone(project));if(history.length>30)history.shift();future.length=0;if(!keepAudio&&valid.voiceData!==project.voiceData)voiceBuffer=null;if(valid.musicData!==project.musicData)musicBuffer=null;project=valid;stop();time=Math.min(time,project.duration);scene.setProject(project);soundBuffer=null;persist();refresh();render();}
function render(){if(!scene||exporting)return;const st=scene.seek(time);$('scrub').value=time;$('timecode').innerHTML=`${timer(time)}.${String(Math.floor(time%1*100)).padStart(2,'0')} <b>/ ${timer(project.duration)}</b>`;$('shot-label').textContent='CAM · '+(shotName(st.shot)||st.shot).toUpperCase();}
function chip(text,cls=''){const s=document.createElement('span');s.className='chip '+cls;s.textContent=text;return s;}
function renderCards(){
  const list=$('cue-list');list.replaceChildren();const track=$('timeline');track.replaceChildren();
  project.cues.forEach((c,i)=>{
    const b=document.createElement('button');b.className='cue'+(c.id===selected?' selected':'')+(c.speaker==='Mica'?' mica':'');b.setAttribute('aria-label',`Edit line ${i+1}: ${c.text}`);
    const num=document.createElement('span');num.className='cue-number';num.textContent=String(i+1).padStart(2,'0');
    const content=document.createElement('div'),top=document.createElement('div');top.className='cue-top';const name=document.createElement('span');name.textContent=project.names[c.speaker];const stamp=document.createElement('small');stamp.textContent=timer(c.start);top.append(name,stamp);
    const p=document.createElement('p');p.textContent=c.text;const chips=document.createElement('div');chips.className='chips';chips.append(chip(EMO[c.emotion].split(' ')[0]+' '+c.emotion));if(c.action!=='none')chips.append(chip(ACT[c.action]));if(c.shot!=='auto')chips.append(chip('🎥 '+c.shot));if(c.screen)chips.append(chip('🖥 '+c.screen.title,'screen'));if(c.visemes)chips.append(chip('● voiced','voiced'));
    content.append(top,p,chips);b.append(num,content);b.onclick=()=>{selected=c.id;stop();time=c.start+.15;fillLine();renderCards();render();};list.append(b);
    const seg=document.createElement('div');seg.className='timeline-block'+(c.speaker==='Mica'?' mica':'');seg.style.left=`${c.start/project.duration*100}%`;seg.style.width=`${(c.end-c.start)/project.duration*100}%`;seg.textContent=String(i+1).padStart(2,'0');track.append(seg);
  });
  const shots=$('shot-track');shots.replaceChildren();const segs=planShots(project);
  segs.forEach((s,i)=>{const end=segs[i+1]?.start??project.duration,d=document.createElement('div');d.className='shot-block shot-'+s.shot.split('-')[0];d.style.left=`${s.start/project.duration*100}%`;d.style.width=`${(end-s.start)/project.duration*100}%`;d.title=shotName(s.shot);d.textContent=s.shot.toUpperCase();shots.append(d);});
  $('line-count').textContent=`${String(project.cues.length).padStart(2,'0')} LINES`;
}
function fillLine(){
  const c=project.cues.find(x=>x.id===selected)||project.cues[0];
  if(c){selected=c.id;$('selected-label').textContent=`LINE ${String(project.cues.indexOf(c)+1).padStart(2,'0')} · ${project.names[c.speaker].toUpperCase()}`;for(const k of ['speaker','start','end','emotion','action','shot','pause'])$(k).value=c[k];$('dialogue').value=c.text;
    const s=c.screen;$('screen-on').checked=Boolean(s);$('screen-box').open=Boolean(s);$('screen-tone').value=s?.tone||'calm';$('screen-kicker').value=s?.kicker||'';$('screen-title').value=s?.title||'';$('screen-sub').value=s?.sub||'';$('screen-progress').checked=Boolean(s?.progress);}
  else{$('dialogue').value='';$('selected-label').textContent='ADD A LINE TO BEGIN';}
  for(const k of ['apply-line','delete-line','duplicate-line'])$(k).disabled=!c;
}
function refresh(){
  renderCards();options($('speaker'),[['Ren',project.names.Ren],['Mica',project.names.Mica]]);options($('shot'),SHOTS.map(s=>[s,shotName(s)]));fillLine();
  $('title').value=project.title;$('scrub').max=project.duration;$('duration-label').textContent=timer(project.duration);$('mid-label').textContent=timer(project.duration/2);
  $('story-intro').textContent=`Direct ${project.names.Ren} & ${project.names.Mica}’s next adventure.`;
  for(const [id,k] of [['human-color','humanColor'],['hair-color','hairColor'],['skin-color','skinColor'],['robot-color','robotColor'],['face-color','faceColor'],['warmth','warmth'],['duration','duration'],['handle','handle'],['caption-style','captionStyle'],['end-title','endTitle'],['end-sub','endSub'],['music-volume','musicVolume']])$(id).value=project[k];
  for(const [id,k] of [['glasses','glasses'],['captions','captions'],['dof','dof'],['intro','intro'],['music','music'],['sfx','sfx']])$(id).checked=project[k];
  $('ren-name').value=project.names.Ren;$('mica-name').value=project.names.Mica;$('ren-heading').textContent=project.names.Ren;$('mica-heading').textContent=project.names.Mica;$('ren-avatar').textContent=project.names.Ren[0];$('mica-avatar').textContent=project.names.Mica[0];
  $('ren-voice').value=project.voices.Ren;$('mica-voice').value=project.voices.Mica;document.querySelectorAll('input[name=engine]').forEach(r=>r.checked=r.value===project.voiceEngine);
  $('sound').textContent=project.music?'♫ Sound on':'♫ Score off';$('sound').setAttribute('aria-pressed',String(project.music));$('undo').disabled=!history.length;$('redo').disabled=!future.length;
  const voiced=project.cues.filter(c=>c.visemes).length;
  $('voice-status').textContent=project.voiceData?(voiced?`Voiced and lip-synced: ${voiced} of ${project.cues.length} lines.`:'Your recording is loaded and plays with the film.'):'No voice yet. Captions carry the story.';
  $('music-status').textContent=project.musicData?'Your music track is loaded. It loops and ducks under the voices.':'Original generated score. Use royalty-free music you have the rights to.';
  $('audio-label').textContent=[project.voiceData&&'VOICES',project.music&&(project.musicData?'YOUR MUSIC':'ORIGINAL SCORE'),project.sfx&&'SOUND DESIGN'].filter(Boolean).join(' + ')||'SILENT';
}
async function decode(dataURL){return audioCtx.decodeAudioData(await(await fetch(dataURL)).arrayBuffer());}
async function ensureAudio(){if(!audioCtx)audioCtx=new AudioContext({sampleRate:RATE});await audioCtx.resume();if(!soundBuffer){if(project.voiceData&&!voiceBuffer)voiceBuffer=await decode(project.voiceData);if(project.musicData&&!musicBuffer)musicBuffer=await decode(project.musicData);const channels=await makeSound(project,project.voiceData?voiceBuffer:null,project.musicData?musicBuffer:null);soundBuffer=audioCtx.createBuffer(2,channels[0].length,RATE);channels.forEach((a,c)=>soundBuffer.copyToChannel(a,c));}return soundBuffer;}
async function play(){if(exporting)return;if(playing){stop();return;}if(time>=project.duration-.04)time=0;scene.setManual(false);$('orbit').setAttribute('aria-pressed','false');const gen=++audioGeneration;try{$('status').textContent='Mixing sound…';const buf=await ensureAudio();if(gen!==audioGeneration)return;audioSource=audioCtx.createBufferSource();audioSource.buffer=buf;audioSource.connect(audioCtx.destination);audioSource.start(0,time);$('status').textContent='Playing.';}catch(e){toast('Audio is unavailable: '+e.message);}playing=true;last=performance.now();$('play').textContent='Ⅱ';$('play').setAttribute('aria-label','Pause film');}
function tick(now){requestAnimationFrame(tick);if(exporting)return;if(playing){time+=(now-last)/1000;last=now;if(time>=project.duration){time=project.duration;stop();}render();}else if(scene?.manual)render();}
options($('emotion'),EMOTIONS.map(e=>[e,EMO[e]]));options($('action'),ACTIONS.map(a=>[a,ACT[a]]));
$('help-emotions').textContent=EMOTIONS.join(', ');$('help-actions').textContent=ACTIONS.join(', ');$('help-shots').textContent=SHOTS.join(', ');
function fillVoices(groups){for(const sel of document.querySelectorAll('.voice-select')){sel.replaceChildren(...Object.entries(groups).map(([label,ids])=>{const g=document.createElement('optgroup');g.label=label;g.append(...ids.map(id=>{const o=document.createElement('option');o.value=id;o.textContent=id.slice(3).replace(/^./,c=>c.toUpperCase());return o;}));return g;}));}}
fillVoices(FALLBACK_VOICES);
try{scene=new FilmScene($('film'),project);scene.setSize(540,960);$('loading').hidden=true;refresh();render();requestAnimationFrame(tick);}catch(e){$('loading').textContent='3D could not start: '+e.message;$('status').textContent='WebGL is required. Try a current browser with graphics enabled.';console.error(e);}

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
    const keepSelected=selected;voiceBuffer=null;commit({...result,voiceEngine:engine});selected=keepSelected;time=0;fillLine();render();$('voice-job').textContent=`Done. ${project.cues.length} lines voiced, film is ${project.duration} seconds. Press play.`;toast('Voices and lip sync are ready.');
  }catch(e){$('voice-job').textContent='Could not generate voices: '+e.message;}finally{btn.disabled=false;$('voice-progress').hidden=true;}
};
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
  Object.assign(c,{text,speaker,start:Number($('start').value),end:Number($('end').value),emotion:$('emotion').value,action:$('action').value,shot:$('shot').value,pause:Number($('pause').value),screen:readScreen()});if(!c.screen)delete c.screen;
  commit(p,{keepAudio:true});toast(c.visemes?'Scene updated.':'Scene updated. Generate voices to re-voice this line.');}catch(e){toast(e.message)}};
function freeSlot(p,len=2){let start=.5;for(const c of p.cues){if(c.start-start>=len+.2)break;start=c.end+.2;}if(p.duration-start<len)p.duration=Math.min(90,Math.ceil(start+len+1));if(p.duration-start<len)throw Error('The film is full. Shorten a line or remove one.');return Math.round(start*10)/10;}
$('add-line').onclick=()=>{try{const p=clone(project),start=freeSlot(p),c={id:Math.max(0,...p.cues.map(c=>c.id))+1,start,end:start+2,speaker:'Ren',text:'Your next line…',emotion:'neutral',action:'none',shot:'auto',pause:.45};p.cues.push(c);selected=c.id;commit(p,{keepAudio:true});}catch(e){toast(e.message)}};
$('duplicate-line').onclick=()=>{try{const p=clone(project),src=p.cues.find(c=>c.id===selected),len=src.end-src.start,start=freeSlot(p,len),c={...clone(src),id:Math.max(...p.cues.map(c=>c.id))+1,start,end:start+len};delete c.visemes;delete c.words;delete c.screen;p.cues.push(c);selected=c.id;commit(p,{keepAudio:true});toast('Line duplicated at the next free moment.');}catch(e){toast(e.message)}};
$('delete-line').onclick=()=>{commit({...project,cues:project.cues.filter(c=>c.id!==selected)},{keepAudio:true});};
$('apply-cast').onclick=()=>{try{commit({...project,names:{Ren:$('ren-name').value.trim()||'Ren',Mica:$('mica-name').value.trim()||'Mica'},humanColor:$('human-color').value,hairColor:$('hair-color').value,skinColor:$('skin-color').value,robotColor:$('robot-color').value,faceColor:$('face-color').value,glasses:$('glasses').checked,voices:{Ren:$('ren-voice').value,Mica:$('mica-voice').value}},{keepAudio:true});toast('Cast updated.');}catch(e){toast(e.message)}};
document.querySelectorAll('input[name=engine]').forEach(r=>r.onchange=()=>{try{commit({...project,voiceEngine:r.value},{keepAudio:true});}catch(e){toast(e.message)}});
$('apply-film').onclick=()=>{try{commit({...project,handle:$('handle').value.trim(),captionStyle:$('caption-style').value,warmth:Number($('warmth').value),captions:$('captions').checked,dof:$('dof').checked,intro:$('intro').checked,endTitle:$('end-title').value.trim(),endSub:$('end-sub').value.trim(),duration:Number($('duration').value),music:$('music').checked,musicVolume:Number($('music-volume').value),sfx:$('sfx').checked},{keepAudio:true});toast('Film settings applied.');}catch(e){toast(e.message)}};
document.querySelectorAll('[data-tab]').forEach(b=>b.onclick=()=>{document.querySelectorAll('[data-tab]').forEach(x=>x.classList.toggle('active',x===b));for(const t of ['line','cast','voice','film'])$('tab-'+t).hidden=t!==b.dataset.tab;});
$('orbit').onclick=()=>{stop();scene.setManual(!scene.manual);$('orbit').setAttribute('aria-pressed',String(scene.manual));$('status').textContent=scene.manual?'Drag to orbit. Scroll or pinch to zoom.':'Story camera active.';render();};$('frame').onclick=()=>{scene.setManual(false);$('orbit').setAttribute('aria-pressed','false');render();};
function restore(next){project=next;stop();voiceBuffer=null;musicBuffer=null;soundBuffer=null;scene.setProject(project);persist();refresh();render();}
$('undo').onclick=()=>{if(!history.length)return;future.push(clone(project));restore(history.pop());};$('redo').onclick=()=>{if(!future.length)return;history.push(clone(project));restore(future.pop());};
$('reset').onclick=()=>{selected=1;time=0;commit(clone(DEFAULT_PROJECT));toast('Sample restored. Undo brings back your edits.');};
function download(blob,name){const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),30000);}
const fileBase=()=>project.title.replace(/[^a-z0-9]+/gi,'_');
$('save').onclick=()=>download(new Blob([JSON.stringify(project,null,2)],{type:'application/json'}),fileBase()+'.ember.json');$('open').onclick=()=>$('project-file').click();$('project-file').onchange=async e=>{try{const f=e.target.files[0];if(!f)return;if(f.size>32000000)throw Error('Project is too large.');const p=validateProject(JSON.parse(await f.text()));selected=p.cues[0]?.id||0;time=0;commit(p);toast('Project opened.');}catch(e){toast(e.message)}finally{$('project-file').value='';}};
$('sound').onclick=()=>commit({...project,music:!project.music},{keepAudio:true});
async function readAudio(input,limit){const f=input.files[0];if(!f)return null;if(f.size>limit)throw Error(`Choose audio smaller than ${limit/1e6} MB.`);if(!audioCtx)audioCtx=new AudioContext({sampleRate:RATE});const buf=await audioCtx.decodeAudioData(await f.arrayBuffer());const data=await new Promise((ok,no)=>{const r=new FileReader();r.onload=()=>ok(r.result);r.onerror=no;r.readAsDataURL(f)});return {buf,data};}
$('upload-voice').onclick=()=>$('audio-file').click();$('audio-file').onchange=async e=>{try{const a=await readAudio(e.target,1e7);if(!a)return;const p=clone(project);p.cues.forEach(c=>{delete c.visemes;delete c.words;});p.voiceData=a.data;commit(p);voiceBuffer=a.buf;toast('Voice imported.');}catch(e){toast('Could not import audio: '+e.message)}finally{$('audio-file').value='';}};
$('remove-voice').onclick=()=>{const p=clone(project);p.voiceData=null;p.cues.forEach(c=>{delete c.visemes;delete c.words;});commit(p);};
$('upload-music').onclick=()=>$('music-file').click();$('music-file').onchange=async e=>{try{const a=await readAudio(e.target,1e7);if(!a)return;commit({...project,musicData:a.data,music:true},{keepAudio:true});musicBuffer=a.buf;toast('Music track added.');}catch(e){toast('Could not import music: '+e.message)}finally{$('music-file').value='';}};
$('remove-music').onclick=()=>commit({...project,musicData:null},{keepAudio:true});

// Script editor and AI writer prompt.
const openScript=()=>{stop();$('script-text').value=toScript(project);$('script-error').textContent='';$('script-dialog').showModal();};
$('script-open').onclick=openScript;$('script-open-2').onclick=openScript;
document.querySelectorAll('[data-close]').forEach(b=>b.onclick=()=>$(b.dataset.close).close());
$('import-script').onclick=()=>{try{const {meta,cues}=parseScript($('script-text').value,project),last=cues.at(-1).end,duration=Math.min(90,Math.max(project.duration,Math.ceil(last+2.5)));
  const p={...clone(project),cues,duration,voiceData:null,title:meta.title||project.title,handle:meta.handle??project.handle};selected=cues[0].id;time=0;commit(p);$('script-dialog').close();toast('Script loaded. Open the Voice tab to give it voices.');document.querySelector('[data-tab=voice]').click();}catch(e){$('script-error').textContent=e.message;}};
$('download-script').onclick=()=>download(new Blob([$('script-text').value],{type:'text/plain'}),fileBase()+'.script.txt');
$('copy-prompt').onclick=async()=>{const topic=$('ai-topic').value.trim()||'something funny that happens at their desk today',n=project.names,prompt=`You write short comedy scripts for a 3D animated vertical reel (9:16, 30 to 55 seconds).
Characters:
- ${n.Ren}: a human creator in a hoodie. Optimistic, easily stressed, talks to the camera.
- ${n.Mica}: a small orange desk robot with an LED face. Dry, clever, literal.
Setting: the two stand on a giant keyboard in front of a huge monitor whose screen can change.
Write an episode about: ${topic}

Structure: a hook in the first line, escalation, one silent beat, and a callback punchline at the end. 8 to 14 lines, about 100 spoken words in total, each line under 160 characters.
Reply with the script only, in exactly this format, one line each:
# title: <short episode title>
${n.Ren.toUpperCase()} [emotion, action]: spoken line
${n.Mica.toUpperCase()} [emotion, action, pause=0.8]: spoken line
>> SCREEN tone: KICKER | Title | Subtitle   (optional; put it before a line to change the monitor; tone is alert, calm, info or success; add +progress after the tone for a progress bar)

Emotions: ${EMOTIONS.join(', ')}
Actions: ${ACTIONS.join(', ')}
Optional camera tag (default is automatic): ${SHOTS.filter(s=>s!=='auto').join(', ')}
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
