// Voices and lip sync on the viewer's own device: the same Kokoro voices as the desktop engine, run in the browser by
// HeadTTS (WebGPU, or WASM where WebGPU is missing), laid out exactly like pipeline/voice.py so the online studio
// produces the same voiced project: trimmed takes, word timings, mouth shapes and one WAV voice track.
const RATE=24000;
// Emotion steers pace, as on the desktop (pipeline/voice.py KOKORO_SPEED).
const SPEED={neutral:1,happy:1.04,sad:.9,angry:1.08,surprised:1.1,worried:1.08,curious:.97,idea:1.04};
// HeadTTS gives Oculus visemes; the studio's mouths use Rhubarb's shapes (A closed … X rest).
const MOUTH={sil:'X',PP:'A',FF:'G',TH:'H',DD:'B',kk:'B',CH:'B',SS:'B',nn:'B',RR:'E',aa:'D',E:'C',I:'B',O:'E',U:'F'};
let tts=null,connecting=null;const takes=new Map();

// WebGPU only on a real graphics adapter: a software or fallback adapter emulates the GPU on the CPU and is far
// slower than the WASM path, so those devices use WASM.
async function endpoints(){
  try{const a=await navigator.gpu?.requestAdapter();const info=a?.info||{};
    if(a&&!a.isFallbackAdapter&&!info.isFallbackAdapter&&!/swiftshader|llvmpipe|software|basic render/i.test(`${info.vendor} ${info.architecture} ${info.description} ${info.device}`))return ['webgpu','wasm'];}catch{}
  return ['wasm'];
}
// Loads the engine once (the first time also downloads the voice model, which the browser then keeps).
export function connectVoices(onProgress){
  if(tts)return Promise.resolve(tts);
  connecting||=(async()=>{
    const base=new URL('vendor/headtts/',document.baseURI).href,url=base+'modules/headtts.mjs';
    const {HeadTTS}=await import(/* bundler: load at runtime */ url);
    const engine=new HeadTTS({endpoints:await endpoints(),languages:['en-us'],dictionaryURL:base+'dictionaries',audioCtx:new AudioContext({sampleRate:RATE}),defaultAudioEncoding:'wav'});
    await engine.connect(null,ev=>{if(ev?.total)onProgress?.(ev.loaded/ev.total);});
    return tts=engine;
  })().catch(e=>{connecting=null;throw Error('The voice engine could not start in this browser ('+(e?.message||e)+'). Try the latest Chrome or Edge.');});
  return connecting;
}

// One line: synthesise (split sentences are joined end to end), then trim and level like the desktop pipeline.
async function take(text,voice,speed,synth){
  const key=JSON.stringify([text,voice,speed]);if(!synth&&takes.has(key))return takes.get(key);
  const msgs=await (synth?synth(text,voice,speed):tts.synthesize({input:text,voice,language:'en-us',speed}));
  const parts=[],words=[],marks=[];let offset=0;
  for(const m of msgs||[]){
    if(m?.type==='error')throw Error(m.data?.error||'Speech synthesis failed.');
    const d=m?.data;if(!d?.audio)continue;const pcm=d.audio.getChannelData(0);parts.push(pcm);
    (d.words||[]).forEach((w,i)=>{if(String(w).replace(/[\s.,!?…"'-]/g,''))words.push([offset+d.wtimes[i]/1000,offset+(d.wtimes[i]+d.wdurations[i])/1000,w]);});
    (d.visemes||[]).forEach((v,i)=>marks.push([offset+d.vtimes[i]/1000,offset+(d.vtimes[i]+d.vdurations[i])/1000,MOUTH[v]||'B']));
    offset+=pcm.length/RATE;
  }
  if(!parts.length)throw Error('No audio was produced for: '+text);
  let audio=new Float32Array(parts.reduce((n,p)=>n+p.length,0));{let o=0;for(const p of parts){audio.set(p,o);o+=p.length;}}
  // Trim leading/trailing silence (2% of peak, 60 ms pad) and shift timings to match.
  let peak=0;for(const v of audio)peak=Math.max(peak,Math.abs(v));const gate=Math.max(1e-4,peak*.02);
  let a=0,b=audio.length-1;while(a<b&&Math.abs(audio[a])<=gate)a++;while(b>a&&Math.abs(audio[b])<=gate)b--;
  a=Math.max(0,a-Math.round(.06*RATE));b=Math.min(audio.length,b+Math.round(.06*RATE));audio=audio.slice(a,b);const shift=a/RATE,len=audio.length/RATE;
  if(peak>0){const g=.89/peak;for(let i=0;i<audio.length;i++)audio[i]*=g;}
  const r3=n=>Math.round(n*1000)/1000,clampT=t=>Math.min(len,Math.max(0,t-shift));
  // Mouth cues: each viseme where it starts, rest between words and at the end.
  const visemes=[];let lastEnd=0;
  for(const [s,e,m] of marks){const t=clampT(s);if(visemes.length&&t-lastEnd>.04)visemes.push([r3(lastEnd),'X']);if(!visemes.length||visemes.at(-1)[1]!==m)visemes.push([r3(t),m]);lastEnd=clampT(e);}
  if(visemes.at(-1)?.[1]!=='X')visemes.push([r3(Math.min(len,lastEnd)),'X']);
  const out={audio,words:words.map(([s,e,w])=>[r3(clampT(s)),r3(clampT(e)),w]),visemes:visemes.length>1?visemes:[[0,'B'],[r3(len),'X']]};
  if(!synth)takes.set(key,out);return out;
}

// Voices a whole project. layout 'flow' lays lines end to end with each line's pause and fits the duration;
// 'keep' keeps authored start times. Returns the voiced project (voiceData is a 24 kHz mono WAV data URL).
// `synth` replaces HeadTTS (tests): (text, voice, speed) => HeadTTS-style audio messages.
export async function voiceProject(project,layout,onProgress,synth=null){
  onProgress?.(0,'Starting the voice engine…');
  if(!synth)await connectVoices(f=>onProgress?.(f*.3,`Downloading the voice model (first time only) · ${Math.round(f*100)}%`));
  const p=JSON.parse(JSON.stringify(project)),voices=Object.fromEntries(p.cast.map(c=>[c.id,c.voice])),cues=[...p.cues].sort((x,y)=>x.start-y.start),got=[];
  for(const [i,cue] of cues.entries()){
    const name=p.cast.find(c=>c.id===cue.speaker)?.name||cue.speaker;onProgress?.(.3+.65*i/cues.length,`Voicing ${name}: ${cue.text}`);
    got.push(await take(cue.text,voices[cue.speaker]||'af_bella',SPEED[cue.emotion]||1,synth));
  }
  let cursor=layout==='flow'?(p.intro!==false?1.4:.4):0;
  cues.forEach((cue,i)=>{const len=got[i].audio.length/RATE,start=layout==='flow'?cursor:Math.max(cue.start,cursor);
    cue.start=Math.round(start*1000)/1000;cue.end=Math.round((start+len+.1)*1000)/1000;cue.visemes=got[i].visemes;cue.words=got[i].words;
    cursor=cue.end+(layout==='flow'?(cue.pause??.45):.3);});
  const end=cues.at(-1).end;
  if(layout==='flow'){p.duration=Math.ceil(end+1.6+(p.endTitle?1.1:0));if(p.duration>90)throw Error(`The voiced film runs ${p.duration}s; the limit is 90s. Shorten the script.`);}
  else if(end>p.duration)throw Error(`Voiced lines run to ${end.toFixed(1)}s, past the ${p.duration}s film. Shorten text or choose “Fit the film to the voices”.`);
  const track=new Float32Array(Math.round(p.duration*RATE));
  cues.forEach((cue,i)=>{const at=Math.round(cue.start*RATE),a=got[i].audio;for(let j=0;j<a.length&&at+j<track.length;j++)track[at+j]+=a[j];});
  p.voiceData='data:audio/wav;base64,'+base64(wav16(track));p.cues=cues;p.voiceEngine='kokoro';onProgress?.(1,'Done');
  return p;
}

function wav16(samples){
  const buf=new ArrayBuffer(44+samples.length*2),v=new DataView(buf),str=(o,s)=>{for(let i=0;i<s.length;i++)v.setUint8(o+i,s.charCodeAt(i));};
  str(0,'RIFF');v.setUint32(4,36+samples.length*2,true);str(8,'WAVEfmt ');v.setUint32(16,16,true);v.setUint16(20,1,true);v.setUint16(22,1,true);
  v.setUint32(24,RATE,true);v.setUint32(28,RATE*2,true);v.setUint16(32,2,true);v.setUint16(34,16,true);str(36,'data');v.setUint32(40,samples.length*2,true);
  for(let i=0;i<samples.length;i++)v.setInt16(44+i*2,Math.max(-1,Math.min(1,samples[i]))*32767,true);
  return new Uint8Array(buf);
}
function base64(bytes){let s='';for(let i=0;i<bytes.length;i+=32768)s+=String.fromCharCode(...bytes.subarray(i,i+32768));return btoa(s);}
