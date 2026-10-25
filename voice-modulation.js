// Deterministic expressive pitch contours. Keep ACTING in sync with pipeline/voice.py.
export const ACTING={neutral:[0,0,0,1],happy:[1.5,.8,0,1],sad:[-1.6,-1.2,0,.74],angry:[-.6,-.8,0,1],surprised:[2.6,1.6,0,1],worried:[.9,.4,.35,.86],curious:[1,1.4,0,.92],idea:[1.8,.9,0,1]};
export function acting(emotion,text,strength=1){
  const s=Number.isFinite(Number(strength))?Math.min(1.6,Math.max(0,Number(strength))):1,[pitch,glide,wobble,energy]=ACTING[emotion]||ACTING.neutral,end=text.trim().replace(/[ "']+$/g,''),lift=end.endsWith('?')?1.4:0,bang=end.endsWith('!')?.5:0;
  const contour=(u,t)=>{const rise=Math.min(1,Math.max(0,(u-.7)/.3));return s*(pitch+bang+glide*(u-.5)+lift*rise*rise*(3-2*rise)+wobble*Math.sin(2*Math.PI*5.5*t));};
  let mean=0;for(let i=0;i<64;i++)mean+=2**(contour(i/63,0)/12)/64;
  return {contour,mean,energy:1+(energy-1)*s,strength:s};
}
export function modulate(audio,contour,rate=24000){
  const n=audio.length;if(n<2)return {audio:audio.slice(),at:t=>t};
  const pos=new Float64Array(n);for(let i=1;i<n;i++)pos[i]=pos[i-1]+1/2**(contour((i-1)/(n-1),(i-1)/rate)/12);
  const out=new Float32Array(Math.max(1,Math.floor(pos[n-1])));let i=0;
  for(let j=0;j<out.length;j++){while(i<n-2&&pos[i+1]<j)i++;const f=(j-pos[i])/(pos[i+1]-pos[i]),a=audio[Math.max(0,i-1)],b=audio[i],c=audio[i+1],d=audio[Math.min(n-1,i+2)];out[j]=b+.5*f*(c-a+f*(2*a-5*b+4*c-d+f*(3*(b-c)+d-a)));}
  return {audio:out,at:sec=>{const q=Math.min(n-1,Math.max(0,sec*rate)),i=Math.floor(q);return (pos[i]+(pos[Math.min(n-1,i+1)]-pos[i])*(q-i))/rate;}};
}
