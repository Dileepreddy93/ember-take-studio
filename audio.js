// Original mathematical score and sound effects, plus voice/music mixing. No recorded assets or model calls.
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
    const chords=[[130.81,164.81,196,261.63],[110,130.81,164.81,220],[87.31,130.81,174.61,220],[98,146.83,196,246.94]],g=(project.musicVolume??.6)/.6;
    for(let beat=0;beat<project.duration/.45;beat++){
      const start=beat*.45,ch=chords[Math.floor(beat/8)%4];note(start,1.5,ch[beat%4]*2,.046*g,Math.sin(beat)*.45);
      if(beat%4===0)note(start,2,ch[0]/2,.075*g,0,'pad');
      if(beat%2===1)note(start,.14,1,.016*g,.15,'noise');
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
      if(cue.action==='press')note(cue.start+Math.min((cue.end-cue.start)*.45,1.2)+.12,.08,1,.1,.3,'noise','sfx');
      if(cue.action==='jump')note(cue.start-.1,.5,180,.07,0,'sweep','sfx');
      if(cue.action==='cheer')for(let j=0;j<3;j++)note(cue.start+j*.09,.6,1318.5*(1+j*.26),.03,(j-1)*.4,'bell','sfx');
    }
  }
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
export function wav(channels){const n=channels[0].length,buf=new ArrayBuffer(44+n*4),v=new DataView(buf);function str(p,s){[...s].forEach((c,i)=>v.setUint8(p+i,c.charCodeAt(0)))}str(0,'RIFF');v.setUint32(4,36+n*4,true);str(8,'WAVEfmt ');v.setUint32(16,16,true);v.setUint16(20,1,true);v.setUint16(22,2,true);v.setUint32(24,RATE,true);v.setUint32(28,RATE*4,true);v.setUint16(32,4,true);v.setUint16(34,16,true);str(36,'data');v.setUint32(40,n*4,true);for(let i=0;i<n;i++)for(let c=0;c<2;c++)v.setInt16(44+(i*2+c)*2,Math.max(-32768,Math.min(32767,channels[c][i]*32767)),true);return new Blob([buf],{type:'audio/wav'});}
