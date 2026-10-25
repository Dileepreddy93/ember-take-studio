// Portable film document: validation, script format and absolute-time evaluation.
// Everything here is pure, so the browser, the headless renderer and tests agree frame for frame.
export const KINDS=['human','robot','creature','bot','mascot','imported'];
export const SPECIES=['fox','cat','dragon','bear','bunny'];
export const EMOTIONS=['neutral','happy','sad','angry','surprised','worried','curious','idea'];
export const ACTIONS=['none','explain','wave','point','point-screen','point-other','shrug','facepalm','think','cheer','clap','thumbsup','crossarms','handsup','nod','headshake','lean','jump','type','press','raise','hop','enter','exit'];
export const SHOTS=['auto','wide','two','fs','ms','single','cu','ecu','ots','screen','custom'];
// Shot sizes from widest to tightest; the director never frames a gesture tighter than it needs.
export const SHOT_SIZE={wide:6,two:5,fs:4,ms:3,single:2,ots:2,cu:1,ecu:0};
export const CAMERA_STYLES=['cinematic','calm','dynamic'];
export const SETS=['desk','forest','meadow','snow','custom'];export const TIMES_OF_DAY=['morning','golden','night'];
export const WORLD_PARTICLES=['motes','leaves','fireflies','dust','pollen','snow','rain'];
// Desk room: what the window looks out on, what the cast stands on, and what decorates the set.
export const VIEWS=['city','mountains','ocean','forest','space','none'];export const SURFACES=['keyboard','laptop','table'];export const DESK_PROPS=['lamp','mug','plant','books','clock'];
// World settings: density/wind/effects for nature sets; the desk room's view, lights, props and sky; library ids and placement for custom worlds.
export const WORLD_DEFAULTS={foliage:1,wind:1,particles:null,sign:true,campfire:true,view:'city',surface:'keyboard',lights:true,lightColor:'#ffc070',monitor:true,props:['lamp','mug'],sky:null,glow:null,backdrop:null,scene:null,scale:2,turn:0,panoHeight:4,offsetX:0,offsetY:0,offsetZ:0};
const ACTION_FRAMING={jump:'fs',hop:'fs',enter:'two',exit:'two',cheer:'ms',handsup:'ms',wave:'ms',raise:'ms',shrug:'ms',clap:'ms',crossarms:'ms','point-screen':'ms','point-other':'two',lean:'ms',type:'ms',press:'ms',explain:'single',thumbsup:'single',facepalm:'single',think:'single'};
export const MOVES=['auto','static','push','pull','orbit','rise','handheld'];
export const TONES=['alert','calm','success','info'];
// What the monitor shows: a title card, or an app whose lines type themselves out (the screen tells the joke).
export const SCREEN_KINDS=['card','terminal','chat','code','inbox'];
export const SCREEN_LINES=8;
export const CAPTION_STYLES=['bold','box'];
export const CHARACTER_STYLES=['smooth','lowpoly'];
export const FILM_LOOK_IDS=['studio','cinematic','golden','pastel','neon','vintage','noir','documentary','dream','vhs'];
export const MAX_CAST=4;
// Character look: enumerated styles, numeric proportions and colours. Every kind reads the fields it uses.
export const LOOK_OPTIONS={species:SPECIES,hairStyle:['shaggy','chunky','short','curly','long','bun','mohawk','bald'],facialHair:['none','stubble','beard','mustache'],eyeStyle:['glossy','classic'],topStyle:['hoodie','tshirt','jacket','suit'],glasses:['none','round','square'],hat:['none','cap','beanie','headphones'],shape:['block','round','bean'],prop:['none','phone','mug','book','tablet','coffee'],stance:['stand','sit']};
export const LOOK_RANGES={height:[.8,1.2],build:[.75,1.35],head:[.85,1.3]};
export const LOOK_COLORS=['skin','hair','eyes','top','accent','bottom','shoes','screen'];
export const LOOK_DEFAULTS={height:1,build:1,head:1,species:'fox',hairStyle:'shaggy',facialHair:'none',eyeStyle:'glossy',topStyle:'hoodie',glasses:'none',hat:'none',shape:'block',prop:'none',stance:'stand',skin:'#c78a65',hair:'#2a211e',eyes:'#1b1514',top:'#2e3a55',accent:'#c9b8a4',bottom:'#1b222c',shoes:'#d6cbb5',screen:'#94f3d4'};
// Starting points for new characters; "creator" is the reference low-poly look (navy hoodie, shaggy hair, glossy eyes).
export const CAST_TEMPLATES={
  creator:{kind:'human',voice:'am_puck',look:{head:1.22,build:.95,height:1}},
  human:{kind:'human',voice:'af_bella',look:{hairStyle:'long',top:'#b5543f',accent:'#f0d9b5',skin:'#e0a57f',hair:'#5a3422',eyeStyle:'glossy',topStyle:'jacket',bottom:'#2b3346'}},
  robot:{kind:'robot',voice:'am_echo',look:{top:'#8aa1ad',accent:'#3d4650',screen:'#7fd6ff',bottom:'#3d4650',shoes:'#2b3036'}},
  creature:{kind:'creature',voice:'af_sky',look:{species:'fox',skin:'#d9793d',hair:'#2a1e1a',top:'#3f6b58',accent:'#f2e2c9',bottom:'#2d3a33',eyeStyle:'glossy'}},
  bot:{kind:'bot',voice:'af_nova',look:{top:'#4f8fd6',accent:'#2e3440',screen:'#ffd27a'}},
  // A blocky companion like the reference's orange creature: one body, stubby limbs, a painted face.
  mascot:{kind:'mascot',voice:'af_sky',look:{shape:'block',top:'#e8743c',accent:'#c9572e',eyes:'#1c1310'}}
};
// Themes: one-click starting points that set the world, time and film look together. Everything stays editable afterwards.
export const THEMES={
  'night-city':{label:'Night city desk',set:'desk',timeOfDay:'night',filmLook:'cinematic',world:{view:'city',lights:true,lightColor:'#ffc070',particles:['motes'],props:['lamp','mug']}},
  'rainy-window':{label:'Rainy evening',set:'desk',timeOfDay:'night',filmLook:'documentary',world:{view:'city',lights:true,lightColor:'#ffb36b',particles:['rain','motes'],props:['lamp','mug','plant','books']}},
  'snow-cabin':{label:'Snowy cabin',set:'desk',timeOfDay:'night',filmLook:'golden',world:{view:'forest',lights:true,lightColor:'#ffcf8a',particles:['snow'],props:['lamp','mug','books'],surface:'table'}},
  'ocean-sunset':{label:'Ocean sunset',set:'desk',timeOfDay:'golden',filmLook:'golden',world:{view:'ocean',lights:true,lightColor:'#ffd49a',particles:['motes'],props:['plant','mug']}},
  'mountain-morning':{label:'Mountain morning',set:'desk',timeOfDay:'morning',filmLook:'pastel',world:{view:'mountains',lights:false,particles:['dust'],props:['plant','books','clock'],surface:'table'}},
  'space-station':{label:'Space station',set:'desk',timeOfDay:'night',filmLook:'neon',world:{view:'space',lights:true,lightColor:'#8fd8ff',particles:['motes'],props:['clock']}},
  'campfire-forest':{label:'Forest campfire',set:'forest',timeOfDay:'night',filmLook:'cinematic',world:{}},
  'sunny-meadow':{label:'Sunny meadow',set:'meadow',timeOfDay:'morning',filmLook:'pastel',world:{}},
  'winter-woods':{label:'Winter woods',set:'snow',timeOfDay:'golden',filmLook:'cinematic',world:{}}
};
// Applies a theme on top of a project (world settings merge, so a script's own `# world:` keys still win when applied after).
export function applyTheme(p,id){const th=THEMES[id];if(!th)throw Error(`Unknown theme "${id}". Themes: ${Object.keys(THEMES).join(', ')}.`);return {...p,set:th.set,timeOfDay:th.timeOfDay,filmLook:th.filmLook,world:normalizeWorld({...WORLD_DEFAULTS,...th.world})};}
// Face rig targets per emotion: inner-brow lift, brow height, eye openness, mouth curve, head tilt/nod.
export const FACES={
  neutral:{brow:0,raise:0,eye:1,smile:.05,tilt:0,down:0,open:0},
  happy:{brow:-.05,raise:.03,eye:.74,smile:.9,tilt:.05,down:-.03,open:0},
  sad:{brow:.32,raise:-.01,eye:.72,smile:-.7,tilt:.06,down:.12,open:0},
  angry:{brow:-.4,raise:-.04,eye:.78,smile:-.45,tilt:0,down:.06,open:0},
  surprised:{brow:0,raise:.09,eye:1.28,smile:0,tilt:0,down:-.06,open:.3},
  worried:{brow:.24,raise:.02,eye:1.05,smile:-.35,tilt:.03,down:.04,open:0},
  curious:{brow:.1,raise:.05,eye:1.05,smile:.15,tilt:.13,down:0,open:0,asym:1},
  idea:{brow:-.08,raise:.07,eye:1.12,smile:.55,tilt:-.04,down:-.05,open:0}
};
export const DEFAULT_PROJECT={
  version:3,title:'The Last Connection',duration:30,fps:30,handle:'@embertake',
  cast:[
    {id:'Ren',name:'Ren',kind:'human',voice:'am_michael',look:{...LOOK_DEFAULTS,hairStyle:'chunky',eyeStyle:'classic',glasses:'round',skin:'#c78a65',hair:'#292026',eyes:'#211b23',top:'#8364c5',accent:'#b59ad8',bottom:'#19222d'}},
    {id:'Mica',name:'Mica',kind:'bot',voice:'af_heart',look:{...LOOK_DEFAULTS,top:'#ee704e',accent:'#493d39',screen:'#94f3d4'}}
  ],
  characterStyle:'smooth',filmLook:'studio',cameraFlow:'cuts',cameraStyle:'cinematic',set:'desk',timeOfDay:'golden',world:{...WORLD_DEFAULTS},warmth:1,dof:true,music:true,sfx:true,ambience:true,musicVolume:.6,captions:true,captionStyle:'bold',intro:true,
  endTitle:'Made. Together.',endSub:'A little imagination goes a long way.',
  voiceEngine:'kokoro',voiceModulation:1,voiceData:null,musicData:null,
  cues:[
    {id:1,start:1.2,end:4.1,speaker:'Ren',text:'The deadline is in thirty seconds.',emotion:'worried',action:'explain',shot:'auto',pause:.3,screen:{kicker:'CONNECTION LOST',title:'OFFLINE',sub:'THE CLOUD HAS LEFT THE CHAT.',tone:'alert',progress:false}},
    {id:2,start:4.4,end:7.3,speaker:'Ren',text:'And the internet just disappeared.',emotion:'surprised',action:'point-screen',shot:'auto',pause:.3},
    {id:3,start:7.6,end:10.4,speaker:'Mica',text:'Have you tried asking it politely?',emotion:'curious',action:'think',shot:'auto',pause:.5},
    {id:4,start:10.9,end:13.8,speaker:'Ren',text:'Please. Come. Back.',emotion:'sad',action:'facepalm',shot:'auto',pause:.6},
    {id:5,start:14.4,end:18.0,speaker:'Mica',text:'Or… we could make it right here.',emotion:'idea',action:'raise',shot:'auto',pause:.7,screen:{kicker:'LOCAL STUDIO',title:'Make it here.',sub:'A LITTLE IMAGINATION. ALL YOU NEED.',tone:'calm',progress:false}},
    {id:6,start:18.7,end:22.0,speaker:'Ren',text:'No cloud. Just us?',emotion:'curious',action:'shrug',shot:'auto',pause:.6,screen:{kicker:'LOCAL STUDIO',title:'Rendering…',sub:'NO CLOUD REQUIRED',tone:'info',progress:true}},
    {id:7,start:22.6,end:25.5,speaker:'Mica',text:'Just us. And one very big button.',emotion:'happy',action:'press',shot:'auto',pause:.6},
    {id:8,start:26.1,end:29.0,speaker:'Ren',text:'Turns out, we were already connected.',emotion:'happy',action:'wave',shot:'auto',pause:.4,screen:{kicker:'TAKE 01 / READY',title:'Made. Together.',sub:'YOUR STORY IS READY TO LEAVE THE DESK',tone:'success',progress:false}}
  ]
};
export const clone=p=>JSON.parse(JSON.stringify(p));
export const clamp=(n,a,b)=>Math.max(a,Math.min(b,n));
export const smooth=t=>{t=clamp(t,0,1);return t*t*(3-2*t)};
export const lerp=(a,b,k)=>a+(b-a)*k;
export function cueAt(p,t){return p.cues.find(c=>t>=c.start&&t<c.end)||null;}

// Auto camera: establishing wide, singles on speaker changes, over-the-shoulder replies,
// close-ups for big emotions, a screen insert when the monitor changes, a two-shot on silences.
// Each segment names its subject (who is framed) and other (the scene partner, for OTS and two-shots).
const plans=new WeakMap();
export function castIds(p){return p.cast.map(c=>c.id);}
export function partnerOf(p,i){
  const c=p.cues[i],ids=castIds(p);
  for(let j=i-1;j>=0;j--)if(p.cues[j].speaker!==c.speaker)return p.cues[j].speaker;
  for(let j=i+1;j<p.cues.length;j++)if(p.cues[j].speaker!==c.speaker)return p.cues[j].speaker;
  return ids.find(id=>id!==c.speaker)||c.speaker;
}
// Director: shot/reverse-shot coverage on one side of the line, close-ups on emotional peaks, gesture-aware
// sizes, a held shot instead of a jump cut, two-shots on silences, reaction shots in the dynamic style.
export function planShots(p){
  if(plans.has(p))return plans.get(p);
  const style=p.cameraStyle||'cinematic',segs=[],turns={},n=p.cues.length,group=p.cast.length>=3;let prev=null;
  const widen=(shot,need)=>need&&SHOT_SIZE[need]>SHOT_SIZE[shot]?need:shot;
  const push=seg=>{const last=segs.at(-1);
    if(last&&last.shot===seg.shot&&last.subject===seg.subject&&seg.shot!=='custom'&&seg.shot!=='screen')return;     // hold: no jump cut
    if(last&&seg.start-last.start<(last.reaction?.45:.8)&&segs.length>1){segs[segs.length-1]={...seg,start:last.start};return;}           // too short: replace
    segs.push(seg);};
  p.cues.forEach((c,i)=>{
    const other=partnerOf(p,i),dur=c.end-c.start,gap=prev?c.start-prev.end:0;
    // Silent beats: the listener's reaction in close-up (the laugh lands on their face), or a two-shot for calm
    // films, groups and long silences.
    if(prev&&gap>(style==='calm'?.8:.65)){
      const listener=partnerOf(p,i-1);
      if(style!=='calm'&&!group&&gap<1.8&&listener!==prev.speaker)push({start:prev.end+.15,shot:'cu',subject:listener,other:prev.speaker,cue:null,reaction:true});
      else push({start:prev.end+.2,shot:group?'wide':'two',subject:prev.speaker,other:c.speaker,cue:null});
    }
    let shot=c.shot,subject=c.subject||c.speaker;
    if(shot==='auto'){
      subject=c.speaker;const changed=prev&&c.speaker!==prev.speaker,last=segs.at(-1);
      if(i===0)shot=group?'wide':'two';
      else if(c.emotion==='angry'||c.emotion==='surprised')shot=style==='dynamic'&&c.emotion==='surprised'?'ecu':'cu';
      else if(changed){turns[c.speaker]=(turns[c.speaker]||0)+1;shot=style==='calm'?'single':style==='dynamic'?(turns[c.speaker]%2?'ots':'cu'):(turns[c.speaker]%2?'ots':'single');}
      else if(style==='calm')shot=last?.subject===subject?last.shot:'single';
      else shot=last?.subject===subject&&last.shot==='single'?'cu':'single';
      if(i===n-1&&i>0&&['happy','idea'].includes(c.emotion)&&style!=='calm')shot='cu';
      shot=widen(shot,ACTION_FRAMING[c.action]);
      if(shot==='ots'&&SHOT_SIZE[ACTION_FRAMING[c.action]]>SHOT_SIZE.single)shot='ms';
    }
    const cut=i===0?0:Math.max(prev.end,c.start-.12),seg={start:cut,shot,subject,other,cam:c.shot==='custom'?c.cam:undefined,cue:c.id};
    if(c.screen&&c.shot==='auto'&&i>0&&dur>1.5){push({start:cut,shot:'screen',subject,other,cue:c.id});push({...seg,start:c.start+Math.min(1.1,dur*.45)});}
    else push(seg);
    // A reaction shot of the listener in the middle of long lines (cinematic from 3.4 s, dynamic from 2.6 s), so a
    // shot rarely runs past about 2.5 s, as in fast social shorts.
    const reactAfter={cinematic:3.4,dynamic:2.6}[style];
    if(reactAfter&&c.shot==='auto'&&dur>reactAfter&&other!==c.speaker){
      const at=Math.max(c.start+dur*.5,segs.at(-1).start+1),back=at+Math.min(1.2,dur*.25);
      if(back<c.end-.8){push({start:at,shot:'cu',subject:other,other:c.speaker,cue:c.id,reaction:true});push({...seg,start:back});}
    }
    prev=c;
  });
  if(!segs.length)segs.push({start:0,shot:'two',subject:p.cast[0].id,other:p.cast[1]?.id||p.cast[0].id,cue:null});
  segs[0].start=0;plans.set(p,segs);return segs;
}
// Who each character turns toward: speakers face their partner, listeners face the speaker; blended across lines.
// Sitting amount (0 standing … 1 seated) for one character at t: the cast default, changed by `sit`/`stand` tags on
// that character's own lines; each change eases in over 0.7 s from the line's start.
export function sitAt(p,t,id){
  const m=p.cast.find(c=>c.id===id);let from=m?.look?.stance==='sit'?1:0,to=from,at=-1;
  for(const c of p.cues){if(c.start>t)break;if(c.speaker!==id||!c.stance)continue;const v=c.stance==='sit'?1:0;if(v!==to){from=to;to=v;at=c.start;}}
  return at<0?to:lerp(from,to,smooth((t-at)/.7));
}
// True when the character sits at any point, so the set gives them a seat.
export const sitsInFilm=(p,id)=>p.cast.find(c=>c.id===id)?.look?.stance==='sit'||p.cues.some(c=>c.speaker===id&&c.stance==='sit');
export function stanceAt(p,t,id){
  const at=i=>{const c=p.cues[i];if(!c)return null;return c.speaker===id?partnerOf(p,i):c.speaker;};
  let i=-1;for(let j=0;j<p.cues.length;j++){if(p.cues[j].start-.3<=t)i=j;else break;}
  if(i<0)return {to:at(0),from:at(0),k:1};
  return {to:at(i),from:at(i-1)??at(i),k:smooth((t-p.cues[i].start+.3)/.7)};
}
// Entrances and exits. `enter` on a line walks the character in from off-stage so they reach their mark as the line
// starts (they are off-stage until then); `exit` walks them off after the line. off: 0 on the mark … 1 off-stage;
// moving: 0 … 1 while walking (drives the step cycle); dir: +1 walking in, −1 walking out.
export const WALK_TIME=1.6;
export function presenceAt(p,t,id){
  const moves=p.cues.filter(c=>c.speaker===id&&(c.action==='enter'||c.action==='exit'));
  let off=moves[0]?.action==='enter'?1:0;
  for(const c of moves){
    const [a,dir]=c.action==='enter'?[c.start-WALK_TIME+.25,1]:[c.end+.2,-1],k=(t-a)/WALK_TIME;
    if(k<0)break;
    // Walkers ease out of their stride as they arrive and into it as they leave.
    if(k<1)return {off:dir>0?(1-k)*(1-k):k*k,moving:Math.min(1,Math.min(k,1-k)*8),dir};
    off=dir>0?0:1;
  }
  return {off,moving:0,dir:0};
}
export function shotAt(p,t){const segs=planShots(p);let i=0;while(i+1<segs.length&&segs[i+1].start<=t)i++;return {...segs[i],index:i,end:segs[i+1]?.start??p.duration};}

// Envelope for a speaker's body action: eases in before the line, out after it.
export function actionAt(p,t,speaker){
  for(const c of p.cues){
    if(c.speaker!==speaker||c.action==='none')continue;
    if(t<c.start-.3||t>c.end+.7)continue;
    const k=smooth((t-c.start+.3)/.45)*(1-smooth((t-c.end-.15)/.55));
    return {name:c.action,k,local:t-c.start,dur:c.end-c.start,cue:c};
  }
  return {name:'none',k:0,local:0,dur:0,cue:null};
}
// Speech beats: a decaying pulse on each stressed word drives hand and head emphasis while talking.
export function beatAt(cue,t){
  if(!cue)return 0;const local=t-cue.start;let b=0;
  const words=cue.words?.length?cue.words:cue.text.split(/\s+/).map((w,i,a)=>[i*(cue.end-cue.start)/a.length,0,w]);
  for(const [s,,w] of words){const d=local-s;if(d<0||d>.6)continue;const stress=/[!?]$|^[A-Z]{3,}/.test(w)?1:w.replace(/\W/g,'').length>5?.75:.4;b=Math.max(b,stress*Math.exp(-d*6)*Math.min(1,d*25));}
  return b;
}
// Each character keeps the feeling of their own last line; transitions blend over 0.35 s.
export function faceAt(p,t,speaker){
  let cur=null,prev=null;
  for(const c of p.cues){if(c.speaker!==speaker)continue;if(c.start-.15<=t){prev=cur;cur=c;}else break;}
  const a=FACES[prev?.emotion||'neutral'],b=FACES[cur?.emotion||'neutral'],k=cur?smooth((t-cur.start+.15)/.35):1,out={};
  for(const key of ['brow','raise','eye','smile','tilt','down','open'])out[key]=lerp(a[key],b[key],k);
  out.asym=lerp(a.asym||0,b.asym||0,k);out.emotion=cur?.emotion||'neutral';return out;
}
const DEFAULT_SCREEN={kicker:'',title:'',sub:'',tone:'calm',progress:false};
export function screenAt(p,t){
  // No screen events: the monitor runs a quiet editor with the film's title in its tab (never a cropped title card).
  const list=p.cues.filter(c=>c.screen);if(!list.length)return {screen:{...DEFAULT_SCREEN,kind:'idle',title:p.title},since:-9,progress:null,index:0};
  let i=0;while(i+1<list.length&&list[i+1].start<=t)i++;
  const c=list[i],since=i===0&&t<c.start?-9:c.start,next=list[i+1]?.start??p.duration;
  return {screen:c.screen,since,progress:c.screen.progress?smooth((t-c.start)/Math.max(.5,next-c.start-.4)):null,index:i};
}
export function poseAt(p,t){
  t=clamp(t,0,p.duration);const cue=cueAt(p,t);
  const e=cue?smooth((t-cue.start)/.3)*smooth((cue.end-t)/.25):0,shot=shotAt(p,t);
  return {t,cue,energy:e,speaker:cue?.speaker||null,shot:shot.shot,subject:shot.subject,other:shot.other,cam:shot.cam,
    shotStart:shot.start,shotEnd:shot.end,shotIndex:shot.index,final:p.endTitle?smooth((t-(p.duration-1.1))/.7):0};
}

// Rhubarb Lip Sync mouth shapes: A closed (M/B/P) … H tongue (L), X rest.
export const VISEMES={X:{open:0,wide:1,round:0,teeth:0,tongue:0},A:{open:.04,wide:.95,round:0,teeth:0,tongue:0},B:{open:.32,wide:1.1,round:0,teeth:1,tongue:0},C:{open:.6,wide:1.12,round:0,teeth:1,tongue:0},D:{open:1,wide:1.18,round:0,teeth:1,tongue:.4},E:{open:.62,wide:.8,round:.6,teeth:0,tongue:0},F:{open:.36,wide:.55,round:1,teeth:0,tongue:0},G:{open:.2,wide:1.02,round:0,teeth:1,tongue:0},H:{open:.5,wide:1.04,round:0,teeth:1,tongue:1}};
const REST=VISEMES.X;
// Returns the blended mouth for a speaker at time t, or null when the line has no lip-sync data.
export function mouthAt(p,t,speaker){
  const cue=cueAt(p,t);
  if(!cue||cue.speaker!==speaker)return REST;
  const v=cue.visemes;if(!v||!v.length)return null;
  const local=t-cue.start;let i=-1;
  for(let lo=0,hi=v.length-1;lo<=hi;){const mid=(lo+hi)>>1;if(v[mid][0]<=local){i=mid;lo=mid+1}else hi=mid-1;}
  const cur=VISEMES[i<0?'X':v[i][1]],prev=VISEMES[i<1?'X':v[i-1][1]],k=i<0?1:smooth((local-v[i][0])/.06),out={};
  for(const key of ['open','wide','round','tongue'])out[key]=prev[key]+(cur[key]-prev[key])*k;
  out.teeth=k>.5?cur.teeth:prev.teeth;return out;
}
// Index of the spoken word at t within the current line (for highlighted captions), or -1.
export function wordAt(cue,t){if(!cue?.words?.length)return -1;const local=t-cue.start;let i=-1;cue.words.forEach((w,j)=>{if(w[0]<=local+.03)i=j;});return i;}

// Screenplay text: `REN [worried, facepalm, cu, pause=0.6]: line`
// Camera tags: wide, two, single, cu, ots, screen (add :name to frame someone else, e.g. cu:mica),
// or a free 360° angle: cam=<yaw>/<pitch>/<distance>[/<lens mm>] with optional move=push|pull|orbit|rise|handheld|static.
// A `>> SCREEN tone: KICKER | Title | Subtitle` line (add `+progress`) changes the monitor on the next line.
const LEGACY_SHOT=/^(\w+)-(cu|ots)$/;
function castLookup(p){const map={};for(const c of p.cast){map[c.id.toLowerCase()]=c.id;map[c.name.toLowerCase()]=c.id;}return map;}
// Bare words in a `# cast:` line that name exactly one look option (e.g. "hoodie", "sit", "phone", "block").
const BARE_LOOK=(()=>{const seen={};for(const [k,list] of Object.entries(LOOK_OPTIONS))for(const v of list)seen[v]=seen[v]?null:k;return seen;})();
const onOff=v=>!/^(off|no|false|0|none)$/i.test(v);
// `# cast: NAME = [template] [key=value …] [bare option …]`. A template word starts from that template; `kind=` starts
// from plain defaults; otherwise a cast member with the same name keeps their current look and voice.
export function parseCastLine(spec,p,n=0){
  const m=spec.match(/^([^=]+?)\s*=\s*(.*)$/);if(!m)throw Error(`Line ${n}: write a cast line as  # cast: NAME = template key=value …`);
  const name=m[1].trim().slice(0,16),old=p.cast.find(c=>c.name.toLowerCase()===name.toLowerCase());
  let id=name.replace(/[^A-Za-z0-9_]/g,'');if(!/^[A-Za-z]/.test(id))id='c'+id;id=id.slice(0,16);
  let out=old?clone({...old,name}):{...newCastMember({cast:[]},'creator'),name};out.id=id;
  for(const tok of m[2].split(/[\s,]+/).filter(Boolean)){
    const [k,v]=tok.includes('=')?[tok.slice(0,tok.indexOf('=')),tok.slice(tok.indexOf('=')+1)]:[tok,null],key=k.toLowerCase();
    if(v===null&&CAST_TEMPLATES[key]){const t=CAST_TEMPLATES[key];out={...out,kind:t.kind,voice:t.voice,look:normalizeLook(t.look)};continue;}
    if(v===null&&BARE_LOOK[key]){out.look={...out.look,[BARE_LOOK[key]]:key};continue;}
    if(v===null&&key==='flip'&&out.asset){out.asset.flip=true;continue;}
    if(key==='kind'){if(!KINDS.includes(v))throw Error(`Line ${n}: unknown character type "${v}". Types: ${KINDS.join(', ')}.`);out={...out,kind:v,look:{...LOOK_DEFAULTS}};continue;}
    if(key==='voice'){if(!VOICE.test(v))throw Error(`Line ${n}: voices look like am_puck or af_bella.`);out.voice=v;continue;}
    if(key==='asset'){out.asset={id:v,flip:Boolean(out.asset?.flip)};continue;}
    const lk=Object.keys(LOOK_DEFAULTS).find(x=>x.toLowerCase()===key);
    if(lk&&v!==null){out.look={...out.look,[lk]:LOOK_RANGES[lk]?Number(v):v};continue;}
    throw Error(`Line ${n}: unknown cast setting "${tok}".`);
  }
  out.look=normalizeLook(out.look);if(out.kind!=='imported')delete out.asset;return out;
}
// `# world: view=ocean lights=on props=lamp,plant particles=snow sky=#112233,#334455,#556677 foliage=1.2`
export function parseWorldLine(spec,n=0){
  const w={};
  for(const tok of spec.split(/\s+/).filter(Boolean)){
    const i=tok.indexOf('=');if(i<1)throw Error(`Line ${n}: world settings look like key=value (got "${tok}").`);
    const k=tok.slice(0,i),v=tok.slice(i+1),key=Object.keys(WORLD_DEFAULTS).find(x=>x.toLowerCase()===k.toLowerCase());
    if(!key)throw Error(`Line ${n}: unknown world setting "${k}". Settings: ${Object.keys(WORLD_DEFAULTS).join(', ')}.`);
    const def=WORLD_DEFAULTS[key];
    w[key]=['particles','props','sky'].includes(key)?(/^none$/i.test(v)?[]:v.split(',').map(x=>x.trim().toLowerCase()).filter(Boolean)):typeof def==='boolean'?onOff(v):typeof def==='number'?Number(v):v.toLowerCase();
  }
  return w;
}
export function parseScript(text,p){
  const lines=text.split(/\r?\n/),meta={},castLines=[];
  lines.forEach((raw,n)=>{const m=raw.trim().match(/^#\s*cast\s*:\s*(.+)$/i);if(m)castLines.push(parseCastLine(m[1],p,n+1));});
  if(castLines.length>MAX_CAST)throw Error(`A film has at most ${MAX_CAST} characters.`);
  if(castLines.length){const ids=new Set();for(const c of castLines){if(ids.has(c.id))throw Error(`Two cast lines are both called "${c.name}".`);ids.add(c.id);}meta.cast=castLines;}
  const names=castLookup(castLines.length?{cast:castLines}:p),cues=[];let screen=null;
  lines.forEach((raw,n)=>{
    const line=raw.trim();if(!line)return;
    let m;
    if((m=line.match(/^#\s*(title|handle|set|time|camera|theme|look|style|modulation)\s*:\s*(.+)$/i))){const k=m[1].toLowerCase();meta[k]=['title','handle'].includes(k)?m[2].trim():m[2].trim().toLowerCase();return;}
    if((m=line.match(/^#\s*world\s*:\s*(.+)$/i))){meta.world={...meta.world,...parseWorldLine(m[1],n+1)};return;}
    if(line.startsWith('#'))return;
    if((m=line.match(/^>>\s*beat\s*:\s*([\d.]+)$/i))){const pause=Number(m[1]);if(!cues.length||!Number.isFinite(pause)||pause<.1||pause>3)throw Error(`Line ${n+1}: put BEAT: 0.1 to 3 seconds after dialogue.`);cues.at(-1).pause=pause;return;}
    if((m=line.match(/^>>\s*screen\b([^:]*):\s*(.*)$/i))){
      // Words before the colon, any order: a tone, a screen type and +progress.
      const words=m[1].toLowerCase().split(/\s+/).filter(Boolean),parts=m[2].split('|').map(s=>s.trim());
      for(const w of words)if(!TONES.includes(w)&&!SCREEN_KINDS.includes(w)&&w!=='+progress')throw Error(`Line ${n+1}: unknown screen word "${w}". Use a tone (${TONES.join(', ')}), a type (${SCREEN_KINDS.join(', ')}) or +progress.`);
      const tone=words.find(w=>TONES.includes(w))||'calm',kind=words.find(w=>SCREEN_KINDS.includes(w))||'card',progress=words.includes('+progress');
      if(kind==='card'){const [kicker='',title='',sub='']=parts;screen={kicker:kicker.slice(0,40),title:title.slice(0,40),sub:sub.slice(0,60),tone,progress};}
      else{const [title='',...rest]=parts;screen={kind,kicker:'',title:title.slice(0,40),sub:'',tone,progress,lines:rest.filter(Boolean).slice(0,SCREEN_LINES).map(l=>l.slice(0,80))};}
      return;
    }
    if(!(m=line.match(/^([^\[:]+?)\s*(?:\[([^\]]*)\])?\s*:\s*(.+)$/)))throw Error(`Line ${n+1}: use NAME [emotion, action]: text`);
    const speaker=names[m[1].trim().toLowerCase()];if(!speaker)throw Error(`Line ${n+1}: unknown character "${m[1].trim()}". Add them in the Cast tab or with a  # cast:  line.`);
    const cue={id:cues.length+1,speaker,text:m[3].trim().slice(0,160),emotion:'neutral',action:'none',shot:'auto',pause:.45};
    for(const tag of (m[2]||'').split(',').map(s=>s.trim().toLowerCase()).filter(Boolean)){
      let t;
      if(EMOTIONS.includes(tag))cue.emotion=tag;else if(ACTIONS.includes(tag))cue.action=tag;else if(tag==='sit'||tag==='stand')cue.stance=tag;
      else if(tag.startsWith('pause'))cue.pause=clamp(Number(tag.split(/[=\s]/).pop())||.45,0,3);
      else if((t=tag.match(/^cam\s*=\s*(-?[\d.]+)\/(-?[\d.]+)\/([\d.]+)(?:\/([\d.]+))?$/))){cue.shot='custom';cue.cam={...(cue.cam||{}),yaw:Number(t[1]),pitch:Number(t[2]),dist:Number(t[3]),lens:Number(t[4]||50)};}
      else if((t=tag.match(/^move\s*=\s*(\w+)$/))&&MOVES.includes(t[1])){cue.cam={yaw:0,pitch:8,dist:4,lens:50,...(cue.cam||{}),move:t[1]};}
      else if((t=tag.match(/^(\w+)(?::(.+))?$/))&&SHOTS.includes(t[1])&&t[1]!=='custom'){cue.shot=t[1];if(t[2]){const who=names[t[2]];if(!who)throw Error(`Line ${n+1}: unknown character "${t[2]}" in camera tag.`);cue.subject=who;}}
      else if((t=tag.match(LEGACY_SHOT))&&names[t[1]]){cue.shot=t[2];cue.subject=names[t[1]];}
      else if(names[tag]){cue.shot='single';cue.subject=names[tag];}
      else throw Error(`Line ${n+1}: unknown tag "${tag}".`);
    }
    if(cue.cam&&cue.shot!=='custom')cue.shot='custom';
    if(screen){cue.screen=screen;screen=null;}
    cues.push(cue);
  });
  if(!cues.length)throw Error('The script has no dialogue lines.');
  return {meta,cues:estimateTimes(cues)};
}
// Rough timing before voices exist: about 2.7 words a second.
export function estimateTimes(cues,lead=.8){
  let t=cues[0]?.action==='enter'?Math.max(lead,WALK_TIME):lead;
  return cues.map(c=>{const words=c.text.split(/\s+/).length,len=Math.max(1.1,words*.37+.35),out={...c,start:round(t),end:round(t+len)};delete out.visemes;delete out.words;t+=len+(c.pause??.45);return out;});
}
// One cast member as a `# cast:` line: kind, voice, and every look value that differs from the defaults.
export function castLine(c){
  const look=Object.entries(c.look).filter(([k,v])=>v!==LOOK_DEFAULTS[k]).map(([k,v])=>`${k}=${v}`);
  return `# cast: ${c.name} = kind=${c.kind} voice=${c.voice}${c.asset?` asset=${c.asset.id}${c.asset.flip?' flip':''}`:''}${look.length?' '+look.join(' '):''}`;
}
export function worldLine(w){
  const v=(k,x)=>Array.isArray(x)?(x.length?x.join(','):'none'):typeof x==='boolean'?(x?'on':'off'):x;
  const keys=['view','surface','lights','lightColor','monitor','props','particles','sky','glow','foliage','wind','campfire','sign'];
  return '# world: '+keys.filter(k=>w[k]!=null&&JSON.stringify(w[k])!==JSON.stringify(WORLD_DEFAULTS[k])).map(k=>`${k}=${v(k,w[k])}`).join(' ');
}
export function toScript(p){
  const wl=worldLine(p.world),out=[`# title: ${p.title}`,`# handle: ${p.handle}`,`# set: ${p.set}`,...(p.set!=='custom'?[`# time: ${p.timeOfDay}`]:[]),`# camera: ${p.cameraStyle}`,`# modulation: ${p.voiceModulation??1}`,`# look: ${p.filmLook}`,`# style: ${p.characterStyle}`,...(wl.length>9?[wl]:[]),...p.cast.map(castLine),''],name=id=>p.cast.find(c=>c.id===id)?.name||id;
  for(const c of p.cues){
    if(c.screen){const s=c.screen,app=s.kind&&s.kind!=='card';out.push(`>> SCREEN ${app?s.kind+' ':''}${s.tone}${s.progress?' +progress':''}: ${app?[s.title,...s.lines].join(' | '):`${s.kicker} | ${s.title} | ${s.sub}`}`);}
    const cam=c.shot==='custom'?[`cam=${c.cam.yaw}/${c.cam.pitch}/${c.cam.dist}/${c.cam.lens}`,c.cam.move!=='auto'&&`move=${c.cam.move}`]:[c.shot!=='auto'&&(c.subject&&c.subject!==c.speaker?`${c.shot}:${name(c.subject).toLowerCase()}`:c.shot)];
    const tags=[c.emotion,c.action!=='none'&&c.action,c.stance,...cam,Math.abs((c.pause??.45)-.45)>.01&&`pause=${c.pause}`].filter(Boolean);
    out.push(`${name(c.speaker).toUpperCase()} [${tags.join(', ')}]: ${c.text}`);
  }
  return out.join('\n');
}
const round=n=>Math.round(n*1000)/1000;
// Prompt for any chat AI (Claude, ChatGPT, Gemini) to turn an idea into a complete reel concept: its own characters,
// world and story, in the script format above. The current cast is offered as cast lines to keep or replace.
export function writerPrompt(p,topic){
  const opts=k=>LOOK_OPTIONS[k].join(', ');
  return `You write and design short animated reels: 3D characters in a living set, vertical 9:16 video, 40 to 60 seconds, like a polished social-media comedy short.
Idea: ${topic||'something funny or touching that happens to them today'}

Design the whole concept for this idea: who the characters are, where it happens and how they move. Then write the script.

How the best reels are written:
- Line 1 is the hook: a question or a problem the viewer instantly understands, said to the other character by name ("Claude. Who broke production?").
- Escalate in 3 to 5 steps. Each line makes it worse, funnier or more specific. One idea per line, 4 to 12 words. Short lines are funnier.
- One silent beat before the turn: end that line with pause=1.0 so the camera holds on the listener's reaction. Silence is where the laugh lands.
- End on a callback: the last line twists something said earlier, or admits the truth. No moral, no explanation.
- Use the screen to tell the joke: before a line, put the exact thing on the monitor that the line reacts to (a terminal command, a chat message, a code diff, an email). Two to four screens per reel.
- 10 to 16 lines, about 110 spoken words. Feelings change often (that is what makes faces and voices move); give most lines an action.

Reply with the script only, in exactly this format:
# title: <short title>
# theme: <optional starting point: ${Object.keys(THEMES).join(', ')}>
# set: <${SETS.filter(x=>x!=='custom').join(', ')}>   (desk = a room with a desk by a big window)
# time: <${TIMES_OF_DAY.join(', ')}>
# look: <film grade: ${FILM_LOOK_IDS.join(', ')}>
# style: <smooth or lowpoly>
# world: key=value ...   (optional, see below)
# cast: NAME = <template> key=value ... bare-option ...   (1 to ${MAX_CAST} lines, one per character)
NAME [emotion, action]: spoken line
NAME [emotion, action, sit, pause=0.8]: spoken line
>> SCREEN tone: KICKER | Title | Subtitle   (optional, before a line: a title card on the monitor; tone is ${TONES.join(', ')})
>> SCREEN terminal alert: window title | $ git blame auth.js | 3f2a1c  Gary  2:04 AM  "fix later"   (an app that types itself out)
   Screen types: card (title card), terminal (commands and output), chat (lines like "Kai: are you sure?"), code (a code diff: lines starting + or -), inbox (lines like "Boss — Re: the demo — now"). Up to ${SCREEN_LINES} lines, under 60 characters each; no emoji.

Characters (# cast lines). Start from a template: ${Object.keys(CAST_TEMPLATES).join(', ')} (creator = low-poly guy in a hoodie, mascot = a block/round/bean creature with a painted face, bot = small desk robot with an LED face, creature = animal person).
Then any of: height, build, head (0.8 to 1.3); colours as #rrggbb: skin, hair, eyes, top, accent, bottom, shoes, screen; voice=<one of am_puck, am_michael, am_echo, am_fenrir, am_adam, af_heart, af_bella, af_nicole, af_sarah, af_sky, bf_emma, bf_isabella, bm_george, bm_lewis>;
shape=${opts('shape')}; species=${opts('species')}; hairStyle=${opts('hairStyle')}; facialHair=${opts('facialHair')}; topStyle=${opts('topStyle')}; glasses=${opts('glasses')}; hat=${opts('hat')}; prop=${opts('prop')} (something held in the hand); stance=sit or stand (pose at the start).
Example: # cast: KAI = creator sit prop=phone hairStyle=shaggy top=#2b3a8c voice=am_puck
Example: # cast: BLIP = mascot shape=block top=#e8743c accent=#c9572e
Current cast you may keep (copy their lines) or replace:
${p.cast.filter(c=>c.kind!=='imported').map(castLine).join('\n')}

World (# world line, for the desk room): view=${VIEWS.join('|')}; surface=${SURFACES.join('|')}; lights=on|off (string lights); lightColor=#rrggbb; monitor=on|off; props=${DESK_PROPS.join(',')} (any, comma separated, or none); particles=${WORLD_PARTICLES.join(',')} (snow, rain and leaves fall outside the window); sky=#top,#middle,#horizon; glow=#rrggbb (city window lights).
Outdoor sets (forest, meadow, snow) use: foliage=0..1.6 wind=0..2.5 particles=... campfire=on|off.

Line tags (in brackets, any order):
Emotions: ${EMOTIONS.join(', ')}
Actions: ${ACTIONS.join(', ')}
Pose: sit or stand (that character sits down or stands up from this line on)
Movement: enter (walks in from off-stage, arriving as the line starts; they are off-stage before it), exit (walks off after the line), hop (a happy little double hop)
Camera (optional, default is automatic): ${SHOTS.filter(x=>!['auto','custom'].includes(x)).join(', ')}; add :name to frame someone else; or cam=<degrees around>/<height degrees>/<distance>/<lens mm> with move=${MOVES.filter(x=>x!=='auto').join('|')}
Voice modulation: # modulation: 0 to 1.6 (1 is normal, 0 keeps the original voice).
Silent beat: >> BEAT: 1.0 after a dialogue line holds the listener reaction without speaking.
Pause: pause=<seconds of silence after the line, 0 to 3>`;
}
// A parsed script applied to a project: theme first, then the script's own set/time/camera/look/style/world and cast.
export function applyScript(p,{meta,cues}){
  let out={...clone(p),cues,voiceData:null,title:meta.title||p.title,handle:meta.handle??p.handle};
  if(meta.theme)out=applyTheme(out,meta.theme);
  if(meta.set){if(!SETS.includes(meta.set))throw Error(`Unknown set "${meta.set}". Sets: ${SETS.join(', ')}.`);out.set=meta.set;}
  if(meta.time){if(!TIMES_OF_DAY.includes(meta.time))throw Error(`Unknown time "${meta.time}". Times: ${TIMES_OF_DAY.join(', ')}.`);out.timeOfDay=meta.time;}
  if(meta.modulation!==undefined){const v=Number(meta.modulation);if(!Number.isFinite(v)||v<0||v>1.6)throw Error('Voice modulation must be between 0 and 1.6.');out.voiceModulation=v;}
  if(meta.camera&&CAMERA_STYLES.includes(meta.camera))out.cameraStyle=meta.camera;
  if(meta.look){if(!FILM_LOOK_IDS.includes(meta.look))throw Error(`Unknown film look "${meta.look}". Looks: ${FILM_LOOK_IDS.join(', ')}.`);out.filmLook=meta.look;}
  if(meta.style){const st=meta.style.replace(/[^a-z]/g,'');if(!CHARACTER_STYLES.includes(st))throw Error(`Unknown character style "${meta.style}". Styles: smooth, lowpoly.`);out.characterStyle=st;}
  if(meta.world)out.world=normalizeWorld({...out.world,...meta.world});
  if(meta.cast)out.cast=meta.cast;
  return out;
}

const COLOR=/^#[a-f\d]{6}$/i,VOICE=/^[a-z]{2}_[a-z]+$/,ID=/^[A-Za-z][A-Za-z0-9_]{0,15}$/;
export function normalizeWorld(raw={}){
  const w={...WORLD_DEFAULTS,...(raw||{})},id=v=>typeof v==='string'&&/^[a-z0-9-]{6,40}$/.test(v)?v:null,num=(v,lo,hi,d)=>Number.isFinite(Number(v))?clamp(Number(v),lo,hi):d;
  const color=v=>typeof v==='string'&&COLOR.test(v)?v.toLowerCase():null,list=(v,ok)=>Array.isArray(v)?[...new Set(v.filter(x=>ok.includes(x)))]:null;
  const sky=Array.isArray(w.sky)&&w.sky.length===3&&w.sky.every(color)?w.sky.map(color):null;
  return {foliage:num(w.foliage,0,1.6,1),wind:num(w.wind,0,2.5,1),particles:list(w.particles,WORLD_PARTICLES),sign:w.sign!==false,campfire:w.campfire!==false,
    view:VIEWS.includes(w.view)?w.view:'city',surface:SURFACES.includes(w.surface)?w.surface:'keyboard',lights:w.lights!==false,lightColor:color(w.lightColor)||'#ffc070',monitor:w.monitor!==false,props:list(w.props,DESK_PROPS)??['lamp','mug'],sky,glow:color(w.glow),
    backdrop:id(w.backdrop),scene:id(w.scene),scale:num(w.scale,.05,50,2),turn:num(w.turn,-180,180,0),panoHeight:num(w.panoHeight,.5,40,4),offsetX:num(w.offsetX,-100,100,0),offsetY:num(w.offsetY,-50,50,0),offsetZ:num(w.offsetZ,-100,100,0)};
}
export function normalizeLook(raw={}){
  const a={...LOOK_DEFAULTS,...raw};
  for(const [k,[lo,hi]] of Object.entries(LOOK_RANGES)){const v=Number(a[k]);if(!Number.isFinite(v))throw Error(`Invalid character ${k}.`);a[k]=Math.round(clamp(v,lo,hi)*100)/100;}
  for(const [k,list] of Object.entries(LOOK_OPTIONS))if(!list.includes(a[k]))throw Error(`Unknown ${k.replace(/[A-Z]/g,c=>' '+c.toLowerCase())} "${a[k]}".`);
  for(const k of LOOK_COLORS)if(!COLOR.test(a[k]))throw Error(`Invalid character colour (${k}).`);
  const out={};for(const k of Object.keys(LOOK_DEFAULTS))out[k]=a[k];return out;
}
export function newCastMember(p,template='creator'){
  const t=CAST_TEMPLATES[template]||CAST_TEMPLATES.creator,taken=new Set(p.cast.map(c=>c.id));
  let n=p.cast.length+1;while(taken.has('char'+n))n++;
  const names={creator:'Kai',human:'Maya',robot:'Bolt',creature:'Pip',bot:'Dot',mascot:'Blip'};let name=names[template]||'New';if(p.cast.some(c=>c.name===name))name+=' '+n;
  return {id:'char'+n,name,kind:t.kind,voice:t.voice,look:normalizeLook(t.look)};
}
// Projects from v1/v2 had exactly Ren (human) and Mica (desk bot) with flat colour fields.
function migrateCast(raw){
  const h=raw.humanAppearance||{},hair={textured:'chunky'}[h.hairStyle]||h.hairStyle||'chunky',top={shirt:'tshirt'}[h.outfit]||h.outfit||'hoodie';
  return [
    {id:'Ren',name:raw.names?.Ren||'Ren',kind:['human','robot','creature'].includes(h.kind)?h.kind:'human',voice:raw.voices?.Ren||'am_michael',look:{...DEFAULT_PROJECT.cast[0].look,
      ...(h.species&&{species:h.species}),height:h.height??1,build:h.build??1,head:h.headWidth??1,hairStyle:LOOK_OPTIONS.hairStyle.includes(hair)?hair:'chunky',topStyle:LOOK_OPTIONS.topStyle.includes(top)?top:'hoodie',
      facialHair:LOOK_OPTIONS.facialHair.includes(h.facialHair)?h.facialHair:'none',glasses:raw.glasses===false?'none':'round',
      skin:raw.skinColor||'#c78a65',hair:raw.hairColor||'#292026',eyes:h.eyeColor||'#211b23',top:raw.humanColor||'#8364c5',bottom:h.pantsColor||'#19222d',shoes:h.shoeColor||'#d6cbb5'}},
    {id:'Mica',name:raw.names?.Mica||'Mica',kind:'bot',voice:raw.voices?.Mica||'af_heart',look:{...DEFAULT_PROJECT.cast[1].look,top:raw.robotColor||'#ee704e',screen:raw.faceColor||'#94f3d4'}}
  ];
}
const LEGACY_CUE_SHOT={ren:['single','Ren'],mica:['single','Mica'],'ren-cu':['cu','Ren'],'mica-cu':['cu','Mica'],'ren-ots':['ots','Ren'],'mica-ots':['ots','Mica']};
export function validateProject(raw){
  if(!raw||![1,2,3].includes(raw.version))throw Error('This is not an Ember Take project.');
  if(!Number.isFinite(raw.duration)||raw.duration<5||raw.duration>90)throw Error('Duration must be 5–90 seconds.');
  if(!Array.isArray(raw.cues)||raw.cues.length>60)throw Error('Use at most 60 dialogue lines.');
  const base=clone({...DEFAULT_PROJECT,cues:[]}),src=clone(raw),p={...base,...src,version:3,fps:30};
  for(const k of ['names','voices','humanColor','robotColor','hairColor','skinColor','faceColor','glasses','humanAppearance'])delete p[k];
  p.title=String(p.title||'Untitled film').slice(0,70);p.handle=String(p.handle??'').slice(0,24);
  const castIn=Array.isArray(src.cast)?src.cast:migrateCast(src);
  if(!castIn.length||castIn.length>MAX_CAST)throw Error(`A film needs 1 to ${MAX_CAST} characters.`);
  const seen=new Set();
  p.cast=castIn.map((c,i)=>{
    if(!ID.test(c.id||'')||seen.has(c.id))throw Error(`Character ${i+1}: invalid or duplicate id.`);seen.add(c.id);
    if(!KINDS.includes(c.kind))throw Error(`Character ${i+1}: unknown type "${c.kind}".`);
    const out={id:c.id,name:String(c.name||c.id).trim().slice(0,16)||c.id,kind:c.kind,voice:VOICE.test(c.voice)?c.voice:'am_michael',look:normalizeLook(c.look)};
    if(c.kind==='imported'){if(!/^[a-z0-9-]{6,40}$/.test(c.asset?.id||''))throw Error(`Character ${i+1}: imported model is missing its library id.`);out.asset={id:c.asset.id,flip:Boolean(c.asset.flip)};}
    return out;
  });
  p.warmth=clamp(Number(p.warmth)||1,.5,1.5);p.musicVolume=clamp(Number(p.musicVolume??.6),0,1);
  for(const k of ['music','sfx','ambience','captions','dof','intro'])p[k]=Boolean(p[k]);
  if(!CAPTION_STYLES.includes(p.captionStyle))p.captionStyle='bold';
  if(!CHARACTER_STYLES.includes(p.characterStyle))p.characterStyle='smooth';
  if(!FILM_LOOK_IDS.includes(p.filmLook))p.filmLook='studio';if(!['cuts','one-take'].includes(p.cameraFlow))p.cameraFlow='cuts';if(!CAMERA_STYLES.includes(p.cameraStyle))p.cameraStyle='cinematic';if(!SETS.includes(p.set))p.set='desk';p.world=normalizeWorld(p.world);if(!TIMES_OF_DAY.includes(p.timeOfDay))p.timeOfDay='golden';
  p.endTitle=String(p.endTitle||'').slice(0,40);p.endSub=String(p.endSub||'').slice(0,80);
  if(!['kokoro','chatterbox'].includes(p.voiceEngine))p.voiceEngine='kokoro';
  p.voiceModulation=clamp(Number(p.voiceModulation??1)||0,0,1.6);
  for(const [k,limit] of [['voiceData',16e6],['musicData',14e6]])
    if(p[k]!==null&&(typeof p[k]!=='string'||!/^data:audio\//.test(p[k])||p[k].length>limit))throw Error(`Invalid or oversized ${k==='voiceData'?'voice recording':'music track'}.`);
  const ids=new Set();
  p.cues=p.cues.map((c,i)=>{
    if(!Number.isFinite(c.start)||!Number.isFinite(c.end)||c.start<0||c.end>p.duration||c.end-c.start<.3)throw Error(`Line ${i+1}: check the start and end times.`);
    if(!seen.has(c.speaker))throw Error(`Line ${i+1}: "${c.speaker}" is not in the cast.`);
    const cue={...c,action:c.action??'none',pause:clamp(Number(c.pause??.45),0,3)};
    if(LEGACY_CUE_SHOT[cue.shot]){const [shot,who]=LEGACY_CUE_SHOT[cue.shot];cue.shot=shot;cue.subject=who;}
    if(!SHOTS.includes(cue.shot))throw Error(`Line ${i+1}: unknown camera "${cue.shot}".`);
    if(cue.subject!==undefined&&!seen.has(cue.subject)&&!(cue.subject==='all'&&cue.shot==='custom'))delete cue.subject;
    if(cue.shot==='custom'){const m=cue.cam||{};cue.cam={yaw:Math.round(((Number(m.yaw)||0)+540)%360-180),pitch:clamp(Number(m.pitch??8),-15,70),dist:clamp(Number(m.dist??4),1.2,16),lens:clamp(Number(m.lens??50),18,85),move:MOVES.includes(m.move)?m.move:'auto'};}
    else delete cue.cam;
    if(!EMOTIONS.includes(cue.emotion))throw Error(`Line ${i+1}: unknown expression.`);
    if(!ACTIONS.includes(cue.action))throw Error(`Line ${i+1}: unknown action.`);
    if(typeof cue.text!=='string'||cue.text.length>160)throw Error('Keep each caption under 160 characters.');
    const id=Number(c.id)||i+1;if(ids.has(id))throw Error('Duplicate line identifiers.');ids.add(id);
    if(cue.visemes!==undefined&&(!Array.isArray(cue.visemes)||cue.visemes.length>2000||!cue.visemes.every(v=>Array.isArray(v)&&Number.isFinite(v[0])&&v[1] in VISEMES)))throw Error(`Line ${i+1}: invalid lip-sync data.`);
    if(cue.words!==undefined&&(!Array.isArray(cue.words)||cue.words.length>200||!cue.words.every(w=>Array.isArray(w)&&Number.isFinite(w[0])&&Number.isFinite(w[1])&&typeof w[2]==='string')))throw Error(`Line ${i+1}: invalid word timings.`);
    if(!['sit','stand'].includes(cue.stance))delete cue.stance;
    if(cue.screen==null)delete cue.screen;
    else{const s=cue.screen;if(!TONES.includes(s.tone))throw Error(`Line ${i+1}: unknown screen tone.`);const kind=s.kind??'card';if(!SCREEN_KINDS.includes(kind))throw Error(`Line ${i+1}: unknown screen type "${kind}".`);
      cue.screen={kicker:String(s.kicker||'').slice(0,40),title:String(s.title||'').slice(0,40),sub:String(s.sub||'').slice(0,60),tone:s.tone,progress:Boolean(s.progress)};
      if(kind!=='card')Object.assign(cue.screen,{kind,lines:(Array.isArray(s.lines)?s.lines:[]).slice(0,SCREEN_LINES).map(l=>String(l).slice(0,80))});}
    return {...cue,id,text:cue.text.trim()};
  }).sort((a,b)=>a.start-b.start);
  for(let i=1;i<p.cues.length;i++)if(p.cues[i].start<p.cues[i-1].end)throw Error('Dialogue lines must not overlap.');
  return p;
}
