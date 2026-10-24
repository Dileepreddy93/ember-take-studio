export const DEFAULT_PROJECT = {
  version: 1, title: 'The Last Connection', duration: 30, fps: 30,
  humanColor: '#8364c5', robotColor: '#ee704e', glasses: true,
  warmth: 1, music: true, captions: true, voiceData: null,
  cues: [
    {id:1,start:1.2,end:4.1,speaker:'Ren',text:'The deadline is in thirty seconds.',emotion:'worried',shot:'wide'},
    {id:2,start:4.4,end:7.3,speaker:'Ren',text:'And the internet just disappeared.',emotion:'worried',shot:'ren'},
    {id:3,start:7.6,end:10.4,speaker:'Mica',text:'Have you tried asking it politely?',emotion:'curious',shot:'mica'},
    {id:4,start:10.9,end:13.8,speaker:'Ren',text:'Please. Come. Back.',emotion:'worried',shot:'ren'},
    {id:5,start:14.4,end:18.0,speaker:'Mica',text:'Or… we could make it right here.',emotion:'idea',shot:'mica'},
    {id:6,start:18.7,end:22.0,speaker:'Ren',text:'No cloud. Just us?',emotion:'curious',shot:'two'},
    {id:7,start:22.6,end:25.5,speaker:'Mica',text:'Just us. And one very big button.',emotion:'happy',shot:'mica'},
    {id:8,start:26.1,end:29.0,speaker:'Ren',text:'Turns out, we were already connected.',emotion:'happy',shot:'wide'}
  ]
};
export const clone = p => JSON.parse(JSON.stringify(p));
export const clamp = (n,a,b) => Math.max(a,Math.min(b,n));
export const smooth = t => {t=clamp(t,0,1);return t*t*(3-2*t)};
export function cueAt(p,t){ return p.cues.find(c=>t>=c.start && t<c.end)||null; }
export function poseAt(p,t){
  t=clamp(t,0,p.duration);const cue=cueAt(p,t);
  const e=cue ? smooth((t-cue.start)/.3)*smooth((cue.end-t)/.25) : 0;
  return {t,cue,energy:e,progress:smooth((t-18)/7),final:smooth((t-25)/2),
    renTalk:cue?.speaker==='Ren'?e:0,micaTalk:cue?.speaker==='Mica'?e:0,
    shot:cue?.shot||[...p.cues].reverse().find(c=>t>=c.start)?.shot||'wide'};
}
// Rhubarb Lip Sync mouth shapes: A closed (M/B/P) … H tongue (L), X rest.
export const VISEMES={X:{open:0,wide:1,teeth:0},A:{open:.05,wide:.95,teeth:0},B:{open:.35,wide:1.12,teeth:1},C:{open:.62,wide:1.15,teeth:1},D:{open:1,wide:1.22,teeth:1},E:{open:.6,wide:.82,teeth:0},F:{open:.38,wide:.58,teeth:0},G:{open:.22,wide:1.04,teeth:1},H:{open:.5,wide:1.05,teeth:1}};
const REST=VISEMES.X;
// Returns the blended mouth for a speaker at time t, or null when the line has no lip-sync data.
export function mouthAt(p,t,speaker){
  const cue=cueAt(p,t);
  if(!cue||cue.speaker!==speaker)return REST;
  const v=cue.visemes;if(!v||!v.length)return null;
  const local=t-cue.start;let i=-1;
  for(let lo=0,hi=v.length-1;lo<=hi;){const mid=(lo+hi)>>1;if(v[mid][0]<=local){i=mid;lo=mid+1}else hi=mid-1;}
  const cur=VISEMES[i<0?'X':v[i][1]],prev=VISEMES[i<1?'X':v[i-1][1]],k=i<0?1:smooth((local-v[i][0])/.07);
  return {open:prev.open+(cur.open-prev.open)*k,wide:prev.wide+(cur.wide-prev.wide)*k,teeth:k>.5?cur.teeth:prev.teeth};
}
export function validateProject(raw){
  if(!raw||raw.version!==1)throw Error('This is not an Ember Take v1 project.');
  if(!Number.isFinite(raw.duration)||raw.duration<5||raw.duration>60)throw Error('Duration must be 5–60 seconds.');
  if(!Array.isArray(raw.cues)||raw.cues.length>40)throw Error('Use at most 40 dialogue lines.');
  const p={...clone(DEFAULT_PROJECT),...raw,fps:30};
  p.title=String(p.title||'Untitled film').slice(0,70);
  for(const k of ['humanColor','robotColor'])if(!/^#[a-f\d]{6}$/i.test(p[k]))throw Error('Invalid character color.');
  p.warmth=clamp(Number(p.warmth)||1,.5,1.5);
  p.glasses=Boolean(p.glasses);p.music=Boolean(p.music);p.captions=Boolean(p.captions);
  if(p.voiceData!==null && (typeof p.voiceData!=='string'||!/^data:audio\//.test(p.voiceData)||p.voiceData.length>16000000))throw Error('Invalid or oversized voice recording.');
  const ids=new Set();
  p.cues=p.cues.map((c,i)=>{
    if(!Number.isFinite(c.start)||!Number.isFinite(c.end)||c.start<0||c.end>p.duration||c.end-c.start<.3)throw Error(`Line ${i+1}: check the start and end times.`);
    if(!['Ren','Mica'].includes(c.speaker))throw Error('Unknown character.');
    if(!['wide','two','ren','mica'].includes(c.shot))throw Error('Unknown camera.');
    if(!['happy','worried','curious','idea'].includes(c.emotion))throw Error('Unknown expression.');
    if(typeof c.text!=='string'||c.text.length>160)throw Error('Keep each caption under 160 characters.');
    const id=Number(c.id)||i+1;if(ids.has(id))throw Error('Duplicate line identifiers.');ids.add(id);
    if(c.visemes!==undefined&&(!Array.isArray(c.visemes)||c.visemes.length>2000||!c.visemes.every(v=>Array.isArray(v)&&Number.isFinite(v[0])&&v[1] in VISEMES)))throw Error(`Line ${i+1}: invalid lip-sync data.`);
    return {...c,id,text:c.text.trim()};
  }).sort((a,b)=>a.start-b.start);
  for(let i=1;i<p.cues.length;i++)if(p.cues[i].start<p.cues[i-1].end)throw Error('Dialogue lines must not overlap.');
  return p;
}
