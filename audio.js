// Original mathematical score and sound effects, plus voice/music mixing. No recorded assets or model calls.
import {screenSounds} from './screen-apps.js';
import {screenSpan} from './dist/timeline.js';
export const RATE=48000;
// voice and music are AudioBuffer-like objects ({sampleRate,length,numberOfChannels,getChannelData}).
export async function makeSound(project,voice=null,music=null){
  const n=Math.round(project.duration*RATE),ma=new Float32Array(n),mb=new Float32Array(n),sa=new Float32Array(n),sb=new Float32Array(n);
  function note(start,duration,freq,gain=.06,pan=0,type='bell',bus='music'){
    const [a,b]=bus==='music'?[ma,mb]:[sa,sb],begin=Math.round(start*RATE);if(begin<0||begin>=n)return;const len=Math.min(n-begin,Math.round(duration*RATE));
    for(let i=0;i<len;i++){const t=i/RATE;let env=Math.min(1,t/.018)*Math.exp(-t*(type==='pad'?1.1:3.5));env*=Math.min(1,(duration-t)/.08);let v;
      if(type==='noise'){const rnd=Math.sin((i+begin)*12.9898)*43758.5453;v=(rnd-Math.floor(rnd))*2-1;env=Math.exp(-t*35);}
      else if(type==='sweep'){const f=freq*(1+1.6*Math.exp(-t*9));v=Math.sin(2*Math.PI*f*t+6*Math.sin(2*Math.PI*7*t)*Math.exp(-t*4));env=Math.min(1,t/.01)*Math.exp(-t*5);}
      else{v=Math.sin(2*Math.PI*freq*t)+.25*Math.sin(2*Math.PI*freq*2*t)*Math.exp(-t*4);if(type==='bell')v+=.14*Math.sin(2*Math.PI*freq*3.01*t)*Math.exp(-t*6);}
      v*=env*gain;a[begin+i]+=v*Math.sqrt((1-pan)/2);b[begin+i]+=v*Math.sqrt((1+pan)/2);
    }
  }
  const sample=(buf,c,pos)=>{const v=buf.getChannelData(Math.min(c,buf.numberOfChannels-1)),j=Math.floor(pos),f=pos-j;return (v[j]||0)*(1-f)+(v[j+1]||0)*f;};
  if(project.music&&music){
    const g=(project.musicVolume??.6)*.75,len=music.length;
    for(let i=0;i<n;i++){const pos=(i/RATE*music.sampleRate)%len;ma[i]+=sample(music,0,pos)*g;mb[i]+=sample(music,1,pos)*g;}
  }else if(project.music){
    const view=project.world?.view,cozy=['forest','mountains'].includes(view)||['forest','snow'].includes(project.set),space=view==='space',ocean=view==='ocean',minor=project.filmLook==='noir';
    const chords=minor?[[130.81,155.56,196,261.63],[110,130.81,164.81,220],[87.31,130.81,155.56,207.65],[98,146.83,196,233.08]]:[[130.81,164.81,196,261.63],[110,130.81,164.81,220],[87.31,130.81,174.61,220],[98,146.83,196,246.94]],g=(project.musicVolume??.6)/.6,tempo=space?.8:ocean?.65:cozy?.58:.45;
    for(let beat=0;beat<project.duration/tempo;beat++){
      const start=beat*tempo,ch=chords[Math.floor(beat/8)%4];note(start,1.5,ch[beat%4]*2,(space?.022:.046)*g,Math.sin(beat)*.45,space?'pad':'bell');
      if(beat%4===0)note(start,2,ch[0]/2,.075*g,0,'pad');
      if(!space&&!ocean&&beat%2===1)note(start,.14,1,.016*g,.15,'noise');
    }
  }
  if(project.sfx!==false){
    for(const cue of project.cues){
      // Synthetic character blips stand in for speech only when no voice track exists.
      if(!voice&&!project.voiceData){const kind=project.cast?.find(c=>c.id===cue.speaker)?.kind;if(kind==='bot'||kind==='robot'){note(cue.start,.16,660,.055,.3,'bell','sfx');note(cue.start+.11,.2,cue.emotion==='idea'?1320:880,.045,.3,'bell','sfx');}else note(cue.start,.09,1,.028,-.2,'noise','sfx');}
      const s=cue.screen,at=cue.start-.15;
      if(s?.tone==='alert'){note(at,.35,330,.07,-.3,'bell','sfx');note(at+.23,.45,277.18,.06,-.3,'bell','sfx');}
      else if(s?.tone==='success')for(let j=0;j<4;j++)note(at+j*.14,2,[523.25,659.25,783.99,1046.5][j],.07,(j-1.5)*.25,'bell','sfx');
      else if(s?.tone==='calm'){note(at,1.2,587.33,.05,-.2,'bell','sfx');note(at+.16,1.4,880,.045,.2,'bell','sfx');}
      else if(s?.tone==='info')note(at,.25,1174.66,.04,0,'bell','sfx');
      // Performed screens: a key per typed character, a mouse click per press, a buzz or chime for popups.
      if(s?.kind&&s.kind!=='card'){const span=screenSpan(project,cue);
        for(const e of screenSounds(s,span)){const at2=cue.start+e.t;
          if(e.type==='key'){const r=Math.sin(e.n*91.7+cue.start)*43758.5;note(at2,.05,1,.035+.02*(r-Math.floor(r)),.25,'noise','sfx');}
          else if(e.type==='click'){note(at2,.04,1,.06,.2,'noise','sfx');note(at2+.06,.035,1,.04,.2,'noise','sfx');}
          else if(e.type==='error'){note(at2,.3,233.08,.06,0,'bell','sfx');note(at2+.15,.4,220,.06,0,'bell','sfx');}
          else if(e.type==='success')for(let j=0;j<3;j++)note(at2+j*.1,1.2,[659.25,783.99,1046.5][j],.05,(j-1)*.3,'bell','sfx');}}
      if(cue.action==='press')note(cue.start+Math.min((cue.end-cue.start)*.45,1.2)+.12,.08,1,.1,.3,'noise','sfx');
      if(cue.action==='jump')note(cue.start-.1,.5,180,.07,0,'sweep','sfx');
      if(cue.action==='cheer')for(let j=0;j<3;j++)note(cue.start+j*.09,.6,1318.5*(1+j*.26),.03,(j-1)*.4,'bell','sfx');
    }
  }
  if(project.ambience!==false)ambience(project,n,sa,sb);
  const a=new Float32Array(n),b=new Float32Array(n);
  if(voice){
    // Sidechain duck: the music bus dips under speech, effects stay on top.
    let env=0;const up=1-Math.exp(-1/(RATE*.012)),down=1-Math.exp(-1/(RATE*.32));
    for(let i=0;i<n;i++){const pos=i/RATE*voice.sampleRate,vl=pos<voice.length?sample(voice,0,pos):0,vr=pos<voice.length?sample(voice,1,pos):0,lvl=Math.max(Math.abs(vl),Math.abs(vr));env+=(lvl-env)*(lvl>env?up:down);const duck=1-.62*Math.min(1,env*7);a[i]=ma[i]*duck+sa[i]+vl*.95;b[i]=mb[i]*duck+sb[i]+vr*.95;}
  }else for(let i=0;i<n;i++){a[i]=ma[i]+sa[i];b[i]=mb[i]+sb[i];}
  let peak=0;for(let i=0;i<n;i++)peak=Math.max(peak,Math.abs(a[i]),Math.abs(b[i]));const gain=peak>.85?.85/peak:1;
  for(let i=0;i<n;i++){const fade=Math.min(1,i/RATE/.5,(n-i)/RATE/.75);a[i]*=gain*fade;b[i]*=gain*fade;}
  return [a,b];
}
// Ambient bed from the world settings, synthesised from filtered noise and tones (deterministic, so renders match).
function ambience(p,n,L,R){
  const w=p.world||{},parts=new Set(w.particles||[]),desk=p.set==='desk',night=p.timeOfDay==='night',view=desk?(w.view||'city'):null;
  let seed=1234567;const rnd=()=>{seed=(seed*1103515245+12345)&0x7fffffff;return seed/0x7fffffff;};
  const lp=k=>{let y=0;return x=>y+=k*(x-y);},add=(i,v,pan=0)=>{L[i]+=v*(1-pan)*.7;R[i]+=v*(1+pan)*.7;};
  // Room tone: a very quiet low rumble so silence never sounds digital.
  {const f=lp(.004);for(let i=0;i<n;i++)add(i,f(rnd()*2-1)*.05);}
  // Distant traffic (city view): low noise that swells as cars pass.
  if(view==='city'){const f=lp(.01);let car=0,next=RATE*2;for(let i=0;i<n;i++){if(i>next){car=1;next=i+RATE*(3+rnd()*6);}car*=.99997;add(i,f(rnd()*2-1)*(.18+.5*car*Math.sin(Math.PI*Math.min(1,(1-car)*1.2)))*(night?.8:1),Math.sin(i/RATE*.2)*.4);}}
  // Waves (ocean view): noise with slow swells.
  if(view==='ocean'){const f=lp(.03),f2=lp(.002);for(let i=0;i<n;i++){const t=i/RATE,sw=Math.pow(.5+.5*Math.sin(t*.78+Math.sin(t*.13)*2),2.2);add(i,(f(rnd()*2-1)*.5+f2(rnd()*2-1)*2)*sw*.36,Math.sin(t*.1)*.3);}}
  // Space: a low, slowly beating hum.
  if(view==='space')for(let i=0;i<n;i++){const t=i/RATE;add(i,(Math.sin(2*Math.PI*55*t)+.6*Math.sin(2*Math.PI*55.4*t)+.3*Math.sin(2*Math.PI*110.2*t))*.009);}
  // Rain: bright hiss plus random drops on the glass.
  if(parts.has('rain')){const f=lp(.35),hp=lp(.02);for(let i=0;i<n;i++){const x=f(rnd()*2-1),h=x-hp(x);add(i,h*.04,(rnd()-.5)*.6);if(rnd()<.00025){const len=RATE*.012,pan=rnd()*1.6-.8;for(let j=0;j<len&&i+j<n;j++)add(i+j,Math.sin(j*.9)*Math.exp(-j/(len*.25))*.05,pan);}}}
  // Wind: with snow, or outdoors.
  if(parts.has('snow')||(!desk&&p.set!=='custom')){const f=lp(.006);for(let i=0;i<n;i++){const t=i/RATE,gust=.5+.5*Math.sin(t*.31+Math.sin(t*.07)*3);add(i,f(rnd()*2-1)*.2*gust*(w.wind??1)*(desk?2.1:1),Math.sin(t*.05)*.5);}}
  if(!desk&&p.set!=='custom'){
    // Night: crickets and (with a campfire) crackle. Day: short bird chirps.
    if(night){for(let i=0;i<n;i++){const t=i/RATE,on=Math.sin(2*Math.PI*1.9*t)>.6&&Math.sin(2*Math.PI*.23*t)>-.3?1:0;add(i,Math.sin(2*Math.PI*4400*t)*.008*on,.5);}
      if(w.campfire!==false&&p.set!=='meadow')for(let i=0;i<n;i++)if(rnd()<.0006){const len=RATE*.006,pan=rnd()*.6-.5;for(let j=0;j<len&&i+j<n;j++)add(i+j,(rnd()*2-1)*Math.exp(-j/(len*.3))*.12,pan);}}
    else for(let k=0;k<p.duration/2.2;k++){const at=Math.floor((k*2.2+rnd()*1.8)*RATE),notes=2+Math.floor(rnd()*3),f0=2400+rnd()*1600,pan=rnd()*1.6-.8;
      for(let q=0;q<notes;q++){const s0=at+Math.floor(q*.11*RATE),len=Math.floor(.07*RATE);for(let j=0;j<len&&s0+j<n;j++){const t=j/RATE,f=f0*(1+.35*Math.sin(Math.PI*j/len));add(s0+j,Math.sin(2*Math.PI*f*t)*Math.sin(Math.PI*j/len)*.025,pan);}}}
  }
}
// Loudness mastering for browser exports (the studio engine uses ffmpeg): measures integrated loudness per
// ITU-R BS.1770 (K-weighting, 400 ms blocks, absolute and relative gates), gains to the target (−14 LUFS for social
// platforms), then a smooth peak limiter keeps samples under −3.5 dBFS so true peaks stay under −1 dBTP after AAC encoding. Works on 48 kHz stereo channels in place.
export function master(channels,target=-14){
  const n=channels[0].length,kw=x=>{let x1=0,x2=0,y1=0,y2=0,u1=0,u2=0,z1=0,z2=0;const out=new Float32Array(x.length);
    for(let i=0;i<x.length;i++){const v=x[i],y=1.53512485958697*v-2.69169618940638*x1+1.19839281085285*x2+1.69065929318241*y1-.73248077421585*y2;x2=x1;x1=v;y2=y1;y1=y;
      const z=y-2*u1+u2+1.99004745483398*z1-.99007225036621*z2;u2=u1;u1=y;z2=z1;z1=z;out[i]=z;}return out;};
  const k=channels.map(kw),block=Math.round(.4*RATE),hop=Math.round(.1*RATE),powers=[];
  for(let s=0;s+block<=n;s+=hop){let p=0;for(const c of k)for(let i=s;i<s+block;i++)p+=c[i]*c[i];powers.push(p/block);}
  const lufs=ps=>-.691+10*Math.log10(ps.reduce((a,b)=>a+b,0)/ps.length),abs=powers.filter(p=>-.691+10*Math.log10(p)>-70);
  if(!abs.length)return channels;const rel=lufs(abs)-10,gated=abs.filter(p=>-.691+10*Math.log10(p)>rel),gain=10**((target-lufs(gated))/20);
  const ceiling=10**(-3.5/20),release=Math.exp(-1/(RATE*.08));let env=0;
  // Peaks are estimated between samples too (cubic midpoint, read before this sample is scaled), like a true-peak meter.
  const src=channels.map(c=>c.slice()),at=(c,i)=>c[Math.min(n-1,Math.max(0,i))];
  for(let i=0;i<n;i++){let peak=0;for(const c of src){const mid=(-at(c,i-1)+9*at(c,i)+9*at(c,i+1)-at(c,i+2))/16;peak=Math.max(peak,Math.abs(c[i]),Math.abs(mid));}
    peak*=gain;env=Math.max(peak,env*release);const g=gain*(env>ceiling?ceiling/env:1);for(const c of channels)c[i]*=g;}
  return channels;
}
export function wav(channels){const n=channels[0].length,buf=new ArrayBuffer(44+n*4),v=new DataView(buf);function str(p,s){[...s].forEach((c,i)=>v.setUint8(p+i,c.charCodeAt(0)))}str(0,'RIFF');v.setUint32(4,36+n*4,true);str(8,'WAVEfmt ');v.setUint32(16,16,true);v.setUint16(20,1,true);v.setUint16(22,2,true);v.setUint32(24,RATE,true);v.setUint32(28,RATE*4,true);v.setUint16(32,4,true);v.setUint16(34,16,true);str(36,'data');v.setUint32(40,n*4,true);for(let i=0;i<n;i++)for(let c=0;c<2;c++)v.setInt16(44+(i*2+c)*2,Math.max(-32768,Math.min(32767,channels[c][i]*32767)),true);return new Blob([buf],{type:'audio/wav'});}
