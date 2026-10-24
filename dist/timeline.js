// Portable film document: validation, script format and absolute-time evaluation.
// Everything here is pure, so the browser, the headless renderer and tests agree frame for frame.
export const KINDS=['human','robot','creature','bot'];
export const SPECIES=['fox','cat','dragon','bear','bunny'];
export const EMOTIONS=['neutral','happy','sad','angry','surprised','worried','curious','idea'];
export const ACTIONS=['none','explain','wave','point','point-screen','point-other','shrug','facepalm','think','cheer','clap','thumbsup','crossarms','handsup','nod','headshake','lean','jump','type','press','raise'];
export const SHOTS=['auto','wide','two','single','cu','ots','screen','custom'];
export const MOVES=['auto','static','push','pull','orbit','rise','handheld'];
export const TONES=['alert','calm','success','info'];
export const CAPTION_STYLES=['bold','box'];
export const MAX_CAST=4;
// Character look: enumerated styles, numeric proportions and colours. Every kind reads the fields it uses.
export const LOOK_OPTIONS={species:SPECIES,hairStyle:['shaggy','chunky','short','curly','long','bun','mohawk','bald'],facialHair:['none','stubble','beard','mustache'],eyeStyle:['glossy','classic'],topStyle:['hoodie','tshirt','jacket','suit'],glasses:['none','round','square'],hat:['none','cap','beanie','headphones']};
export const LOOK_RANGES={height:[.8,1.2],build:[.75,1.35],head:[.85,1.3]};
export const LOOK_COLORS=['skin','hair','eyes','top','accent','bottom','shoes','screen'];
export const LOOK_DEFAULTS={height:1,build:1,head:1,species:'fox',hairStyle:'shaggy',facialHair:'none',eyeStyle:'glossy',topStyle:'hoodie',glasses:'none',hat:'none',skin:'#c78a65',hair:'#2a211e',eyes:'#1b1514',top:'#2e3a55',accent:'#c9b8a4',bottom:'#1b222c',shoes:'#d6cbb5',screen:'#94f3d4'};
// Starting points for new characters; "creator" is the reference low-poly look (navy hoodie, shaggy hair, glossy eyes).
export const CAST_TEMPLATES={
  creator:{kind:'human',voice:'am_puck',look:{head:1.22,build:.95,height:1}},
  human:{kind:'human',voice:'af_bella',look:{hairStyle:'long',top:'#b5543f',accent:'#f0d9b5',skin:'#e0a57f',hair:'#5a3422',eyeStyle:'glossy',topStyle:'jacket',bottom:'#2b3346'}},
  robot:{kind:'robot',voice:'am_echo',look:{top:'#8aa1ad',accent:'#3d4650',screen:'#7fd6ff',bottom:'#3d4650',shoes:'#2b3036'}},
  creature:{kind:'creature',voice:'af_sky',look:{species:'fox',skin:'#d9793d',hair:'#2a1e1a',top:'#3f6b58',accent:'#f2e2c9',bottom:'#2d3a33',eyeStyle:'glossy'}},
  bot:{kind:'bot',voice:'af_nova',look:{top:'#4f8fd6',accent:'#2e3440',screen:'#ffd27a'}}
};
// Face rig targets per emotion: inner-brow lift, brow height, eye openness, mouth curve, head tilt/nod.
export const FACES={
  neutral:{brow:0,raise:0,eye:1,smile:.05,tilt:0,down:0,open:0},
  happy:{brow:-.05,raise:.03,eye:.62,smile:.9,tilt:.05,down:-.03,open:0},
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
  warmth:1,dof:true,music:true,sfx:true,musicVolume:.6,captions:true,captionStyle:'bold',intro:true,
  endTitle:'Made. Together.',endSub:'A little imagination goes a long way.',
  voiceEngine:'kokoro',voiceData:null,musicData:null,
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
export function planShots(p){
  if(plans.has(p))return plans.get(p);
  const segs=[],turns={};let prev=null,prevSeg=null;
  p.cues.forEach((c,i)=>{
    const other=partnerOf(p,i);
    if(prev&&c.start-prev.end>1.2)segs.push({start:prev.end+.2,shot:'two',subject:prev.speaker,other:c.speaker,cue:null});
    let shot=c.shot,subject=c.subject||c.speaker;
    if(shot==='auto'){
      subject=c.speaker;
      if(i===0)shot='wide';
      else if(c.emotion==='angry'||c.emotion==='surprised')shot='cu';
      else if(prev&&c.speaker!==prev.speaker){turns[c.speaker]=(turns[c.speaker]||0)+1;shot=turns[c.speaker]%2?'ots':'single';}
      else shot=prevSeg?.shot==='single'&&prevSeg.subject===subject?'cu':'single';
    }
    const cut=i===0?0:Math.max(prev.end,c.start-.12),seg={start:cut,shot,subject,other,cam:c.shot==='custom'?c.cam:undefined,cue:c.id};
    if(c.screen&&c.shot==='auto'&&i>0&&c.end-c.start>1.5){segs.push({start:cut,shot:'screen',subject,other,cue:c.id});segs.push({...seg,start:c.start+Math.min(1.1,(c.end-c.start)*.45)});}
    else segs.push(seg);
    prev=c;prevSeg=segs.at(-1);
  });
  if(!segs.length)segs.push({start:0,shot:'wide',subject:p.cast[0].id,other:p.cast[1]?.id||p.cast[0].id,cue:null});
  segs[0].start=0;plans.set(p,segs);return segs;
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
  const list=p.cues.filter(c=>c.screen);if(!list.length)return {screen:{...DEFAULT_SCREEN,title:p.title},since:-9,progress:null,index:0};
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
export function parseScript(text,p){
  const names=castLookup(p),cues=[];let screen=null;const meta={};
  text.split(/\r?\n/).forEach((raw,n)=>{
    const line=raw.trim();if(!line)return;
    let m;
    if((m=line.match(/^#\s*(title|handle)\s*:\s*(.+)$/i))){meta[m[1].toLowerCase()]=m[2].trim();return;}
    if(line.startsWith('#'))return;
    if((m=line.match(/^>>\s*screen\s*(\w+)?\s*(\+progress)?\s*:\s*(.*)$/i))){
      const [kicker='',title='',sub='']=m[3].split('|').map(s=>s.trim());
      const tone=TONES.includes((m[1]||'').toLowerCase())?m[1].toLowerCase():'calm';
      screen={kicker:kicker.slice(0,40),title:title.slice(0,40),sub:sub.slice(0,60),tone,progress:Boolean(m[2])};return;
    }
    if(!(m=line.match(/^([^\[:]+?)\s*(?:\[([^\]]*)\])?\s*:\s*(.+)$/)))throw Error(`Line ${n+1}: use NAME [emotion, action]: text`);
    const speaker=names[m[1].trim().toLowerCase()];if(!speaker)throw Error(`Line ${n+1}: unknown character "${m[1].trim()}". Add them in the Cast tab first.`);
    const cue={id:cues.length+1,speaker,text:m[3].trim().slice(0,160),emotion:'neutral',action:'none',shot:'auto',pause:.45};
    for(const tag of (m[2]||'').split(',').map(s=>s.trim().toLowerCase()).filter(Boolean)){
      let t;
      if(EMOTIONS.includes(tag))cue.emotion=tag;else if(ACTIONS.includes(tag))cue.action=tag;
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
  let t=lead;
  return cues.map(c=>{const words=c.text.split(/\s+/).length,len=Math.max(1.1,words*.37+.35),out={...c,start:round(t),end:round(t+len)};delete out.visemes;delete out.words;t+=len+(c.pause??.45);return out;});
}
export function toScript(p){
  const out=[`# title: ${p.title}`,`# handle: ${p.handle}`,''],name=id=>p.cast.find(c=>c.id===id)?.name||id;
  for(const c of p.cues){
    if(c.screen)out.push(`>> SCREEN ${c.screen.tone}${c.screen.progress?' +progress':''}: ${c.screen.kicker} | ${c.screen.title} | ${c.screen.sub}`);
    const cam=c.shot==='custom'?[`cam=${c.cam.yaw}/${c.cam.pitch}/${c.cam.dist}/${c.cam.lens}`,c.cam.move!=='auto'&&`move=${c.cam.move}`]:[c.shot!=='auto'&&(c.subject&&c.subject!==c.speaker?`${c.shot}:${name(c.subject).toLowerCase()}`:c.shot)];
    const tags=[c.emotion,c.action!=='none'&&c.action,...cam,Math.abs((c.pause??.45)-.45)>.01&&`pause=${c.pause}`].filter(Boolean);
    out.push(`${name(c.speaker).toUpperCase()} [${tags.join(', ')}]: ${c.text}`);
  }
  return out.join('\n');
}
const round=n=>Math.round(n*1000)/1000;

const COLOR=/^#[a-f\d]{6}$/i,VOICE=/^[a-z]{2}_[a-z]+$/,ID=/^[A-Za-z][A-Za-z0-9_]{0,15}$/;
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
  const names={creator:'Kai',human:'Maya',robot:'Bolt',creature:'Pip',bot:'Dot'};let name=names[template]||'New';if(p.cast.some(c=>c.name===name))name+=' '+n;
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
    return {id:c.id,name:String(c.name||c.id).trim().slice(0,16)||c.id,kind:c.kind,voice:VOICE.test(c.voice)?c.voice:'am_michael',look:normalizeLook(c.look)};
  });
  p.warmth=clamp(Number(p.warmth)||1,.5,1.5);p.musicVolume=clamp(Number(p.musicVolume??.6),0,1);
  for(const k of ['music','sfx','captions','dof','intro'])p[k]=Boolean(p[k]);
  if(!CAPTION_STYLES.includes(p.captionStyle))p.captionStyle='bold';
  p.endTitle=String(p.endTitle||'').slice(0,40);p.endSub=String(p.endSub||'').slice(0,80);
  if(!['kokoro','chatterbox'].includes(p.voiceEngine))p.voiceEngine='kokoro';
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
    if(cue.screen==null)delete cue.screen;
    else{const s=cue.screen;if(!TONES.includes(s.tone))throw Error(`Line ${i+1}: unknown screen tone.`);cue.screen={kicker:String(s.kicker||'').slice(0,40),title:String(s.title||'').slice(0,40),sub:String(s.sub||'').slice(0,60),tone:s.tone,progress:Boolean(s.progress)};}
    return {...cue,id,text:cue.text.trim()};
  }).sort((a,b)=>a.start-b.start);
  for(let i=1;i<p.cues.length;i++)if(p.cues[i].start<p.cues[i-1].end)throw Error('Dialogue lines must not overlap.');
  return p;
}
