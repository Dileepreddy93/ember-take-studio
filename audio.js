// Original mathematical score and effects. No recorded assets, TTS or model calls.
export const RATE=48000;
export async function makeSound(project,voice=null){
  const n=Math.round(project.duration*RATE),a=new Float32Array(n),b=new Float32Array(n);
  function note(start,duration,freq,gain=.06,pan=0,type='bell'){
    const begin=Math.round(start*RATE),len=Math.min(n-begin,Math.round(duration*RATE));
    for(let i=0;i<len;i++){const t=i/RATE,u=t/duration;let env=Math.min(1,t/.018)*Math.exp(-t*(type==='pad'?1.1:3.5));env*=Math.min(1,(duration-t)/.08);let v;
      if(type==='noise'){const rnd=Math.sin((i+begin)*12.9898)*43758.5453;v=(rnd-Math.floor(rnd))*2-1;env=Math.exp(-t*35);}
      else{v=Math.sin(2*Math.PI*freq*t)+.25*Math.sin(2*Math.PI*freq*2*t)*Math.exp(-t*4);if(type==='bell')v+=.14*Math.sin(2*Math.PI*freq*3.01*t)*Math.exp(-t*6);}
      v*=env*gain;a[begin+i]+=v*Math.sqrt((1-pan)/2);b[begin+i]+=v*Math.sqrt((1+pan)/2);
    }
  }
  if(project.music){
    const chords=[[130.81,164.81,196,261.63],[110,130.81,164.81,220],[87.31,130.81,174.61,220],[98,146.83,196,246.94]];
    for(let beat=0;beat<project.duration/.45;beat++){
      const start=beat*.45,ch=chords[Math.floor(beat/8)%4];note(start,1.5,ch[beat%4]*2,.046,Math.sin(beat)*.45);
      if(beat%4===0)note(start,2,ch[0]/2,.075,0,'pad');
      if(beat%2===1)note(start,.14,1,.016,.15,'noise');
    }
    for(const cue of project.cues){if(cue.speaker==='Mica'){note(cue.start,.16,660,.055,.3);note(cue.start+.11,.2,cue.emotion==='idea'?1320:880,.045,.3);}else note(cue.start,.09,1,.028,-.2,'noise');}
    // A glassy error, tactile switch and rising completion chime.
    note(4.25,.35,330,.07,-.3);note(4.48,.45,277.18,.06,-.3);note(23.8,.08,1,.1,.3,'noise');
    for(let j=0;j<4;j++)note(25.15+j*.14,2,[523.25,659.25,783.99,1046.5][j],.075,(j-1.5)*.25);
  }
  if(voice){for(let i=0;i<n;i++){const t=i/RATE*voice.sampleRate,j=Math.floor(t);if(j>=voice.length)break;const p=t-j;for(let c=0;c<2;c++){const v=voice.getChannelData(Math.min(c,voice.numberOfChannels-1));const val=(v[j]||0)*(1-p)+(v[j+1]||0)*p;const dst=c?b:a;dst[i]=dst[i]*.48+val*.85;}}}
  let peak=0;for(let i=0;i<n;i++)peak=Math.max(peak,Math.abs(a[i]),Math.abs(b[i]));const gain=peak>.85?.85/peak:1;
  for(let i=0;i<n;i++){const fade=Math.min(1,i/RATE/.5,(n-i)/RATE/.75);a[i]*=gain*fade;b[i]*=gain*fade;}
  return [a,b];
}
export function wav(channels){const n=channels[0].length,buf=new ArrayBuffer(44+n*4),v=new DataView(buf);function str(p,s){[...s].forEach((c,i)=>v.setUint8(p+i,c.charCodeAt(0)))}str(0,'RIFF');v.setUint32(4,36+n*4,true);str(8,'WAVEfmt ');v.setUint32(16,16,true);v.setUint16(20,1,true);v.setUint16(22,2,true);v.setUint32(24,RATE,true);v.setUint32(28,RATE*4,true);v.setUint16(32,4,true);v.setUint16(34,16,true);str(36,'data');v.setUint32(40,n*4,true);for(let i=0;i<n;i++)for(let c=0;c<2;c++)v.setInt16(44+(i*2+c)*2,Math.max(-32768,Math.min(32767,channels[c][i]*32767)),true);return new Blob([buf],{type:'audio/wav'});}
