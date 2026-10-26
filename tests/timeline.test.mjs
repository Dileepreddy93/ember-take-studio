import test from 'node:test';
import assert from 'node:assert/strict';
import {blinkAt,glanceAt,DEFAULT_PROJECT,clone,validateProject,poseAt,mouthAt,faceAt,actionAt,screenAt,planShots,parseScript,toScript,newCastMember,beatAt,stanceAt,VISEMES,FACES,MAX_CAST,applyScript,sitAt,sitsInFilm,THEMES,applyTheme,castLine,LOOK_DEFAULTS} from '../dist/timeline.js';
import {makeSound,RATE} from '../audio.js';

test('character looks survive validation and reject unsupported styles',()=>{
  const p=clone(DEFAULT_PROJECT);p.cast[0].look={...p.cast[0].look,hairStyle:'curly',height:1.12,eyes:'#4b6a89'};
  const v=validateProject(p);assert.equal(v.cast[0].look.hairStyle,'curly');assert.equal(v.cast[0].look.height,1.12);
  p.cast[0].look.hairStyle='unknown';assert.throws(()=>validateProject(p),/hair style/);
  p.cast[0].look.hairStyle='curly';p.cast[0].kind='creature';p.cast[0].look.species='dragon';assert.equal(validateProject(p).cast[0].look.species,'dragon');
  p.cast[0].kind='invalid';assert.throws(()=>validateProject(p),/unknown type/);
  p.cast[0].kind='human';p.cast[0].look.height=9;assert.equal(validateProject(p).cast[0].look.height,1.2);
});
test('cast grows to four new characters with unique ids, and lines must use cast members',()=>{
  const p=validateProject(clone(DEFAULT_PROJECT));p.cast.push(newCastMember(p,'creature'));p.cast.push(newCastMember(p,'robot'));
  const v=validateProject(p);assert.equal(v.cast.length,MAX_CAST);assert.equal(new Set(v.cast.map(c=>c.id)).size,4);
  p.cast.push(newCastMember(p,'bot'));assert.throws(()=>validateProject(p),/1 to 4/);p.cast.pop();
  p.cues[0].speaker=p.cast[2].id;validateProject(p);p.cues[0].speaker='Nobody';assert.throws(()=>validateProject(p),/not in the cast/);
});
test('custom 360° camera values are normalised and survive the script round trip',()=>{
  const p=clone(DEFAULT_PROJECT);p.cues[0].shot='custom';p.cues[0].cam={yaw:270,pitch:99,dist:.1,lens:200,move:'orbit'};p.cues[0].subject='Mica';
  const v=validateProject(p);assert.deepEqual(v.cues[0].cam,{yaw:-90,pitch:70,dist:1.2,lens:85,move:'orbit'});assert.equal(v.cues[0].subject,'Mica');
  const {cues}=parseScript(toScript(v),v);assert.equal(cues[0].shot,'custom');assert.equal(cues[0].cam.yaw,-90);assert.equal(cues[0].cam.move,'orbit');
  const seg=planShots(v)[0];assert.equal(seg.shot,'custom');assert.equal(seg.subject,'Mica');
  p.cues[0].subject='all';assert.equal(validateProject(p).cues[0].subject,'all');
});
test('speech beats peak just after stressed words',()=>{
  const cue={start:1,end:3,text:'This is AMAZING!',words:[[0,.2,'This'],[.25,.4,'is'],[.5,1,'AMAZING!']]};
  assert.ok(beatAt(cue,1.58)>beatAt(cue,1.3));assert.ok(beatAt(cue,1.58)>.6);assert.equal(beatAt(null,1),0);
});

test('sample project survives portable JSON save and reopen',()=>{
 const p=validateProject(JSON.parse(JSON.stringify(DEFAULT_PROJECT)));
 assert.deepEqual(p,DEFAULT_PROJECT);
});
test('seek backwards and direct seek produce identical performance',()=>{
 const p=validateProject(clone(DEFAULT_PROJECT)),expected=poseAt(p,15.25);
 for(let i=0;i<900;i++)poseAt(p,i/30);
 assert.deepEqual(poseAt(p,15.25),expected);
 assert.equal(expected.cue.speaker,'Mica');
});
test('director: establishing two-shot, gesture-aware sizes, monitor inserts, valid subjects',()=>{
 const p=validateProject(clone(DEFAULT_PROJECT)),segs=planShots(p);
 assert.equal(segs[0].shot,'two');assert.equal(segs[0].start,0);
 const s=poseAt(p,5.5);assert.equal(s.shot,'ms','pointing at the monitor needs a waist-up shot');assert.equal(s.subject,'Ren');
 assert.equal(poseAt(p,14.6).shot,'screen');assert.equal(poseAt(p,16).subject,'Mica');
 for(let i=1;i<segs.length;i++){assert.ok(segs[i].start>=segs[i-1].start);assert.ok(!(segs[i].shot===segs[i-1].shot&&segs[i].subject===segs[i-1].subject),'no jump cut between identical shots');}
 for(const seg of segs)assert.ok(p.cast.some(c=>c.id===seg.subject)&&p.cast.some(c=>c.id===seg.other));
});
test('director styles: calm holds singles, dynamic adds reaction shots, groups open wide',()=>{
 const base=clone(DEFAULT_PROJECT);base.cues.forEach(c=>{c.action='none';c.emotion='neutral';delete c.screen;});
 const calm=planShots(validateProject({...base,cameraStyle:'calm'})),cine=planShots(validateProject({...base,cameraStyle:'cinematic'}));
 assert.ok(!calm.some(s=>s.shot==='ots'));assert.ok(cine.some(s=>s.shot==='ots'));
 const long=clone(base);long.cues[2].end=long.cues[2].start+5;long.cues=long.cues.filter((c,i)=>i<3||c.start>=long.cues[2].end);
 assert.ok(planShots(validateProject({...long,cameraStyle:'dynamic'})).some(s=>s.reaction));
 const g=validateProject(clone(DEFAULT_PROJECT));g.cast.push(newCastMember(g,'creature'));assert.equal(planShots(validateProject(g))[0].shot,'wide');
 const jump=clone(base);jump.cues[1].action='jump';assert.equal(poseAt(validateProject(jump),5.5).shot,'fs');
});
test('characters turn toward their conversation partner',()=>{
 const p=validateProject(clone(DEFAULT_PROJECT)),a=stanceAt(p,8.5,'Ren'),b=stanceAt(p,8.5,'Mica');
 assert.equal(a.to,'Mica');assert.equal(b.to,'Ren');assert.ok(a.k>0&&a.k<=1);
});
test('explicit camera choice wins over the planner',()=>{
 const p=clone(DEFAULT_PROJECT);p.cues[1].shot='cu';assert.equal(poseAt(validateProject(p),5.5).shot,'cu');
});
test('corrupt times, overlapping lines, unknown tags and oversized captions rejected',()=>{
 for(const mutate of [p=>p.cues[1].start=3,p=>p.duration=0,p=>p.cues[0].end=31,p=>p.cues[0].text='a'.repeat(161),p=>p.cast[0].look.top='javascript:bad',p=>p.cues[0].action='moonwalk',p=>p.cues[0].screen.tone='loud',p=>p.cues[0].words=[[0,'x']]]){
 const p=clone(DEFAULT_PROJECT);mutate(p);assert.throws(()=>validateProject(p));
 }
});
test('version 1 and 2 projects migrate into a cast',()=>{
 const v1={version:1,title:'Old',duration:20,fps:30,humanColor:'#123456',robotColor:'#ee704e',glasses:false,warmth:1,music:true,captions:true,voiceData:null,cues:[{id:1,start:1,end:3,speaker:'Ren',text:'Hi',emotion:'happy',shot:'mica-cu'}]};
 const p=validateProject(v1);assert.equal(p.version,3);assert.equal(p.cues[0].action,'none');assert.deepEqual(p.cast.map(c=>c.kind),['human','bot']);
 assert.equal(p.cast[0].look.top,'#123456');assert.equal(p.cast[0].look.glasses,'none');assert.equal(p.cues[0].shot,'cu');assert.equal(p.cues[0].subject,'Mica');
 const v2={...v1,version:2,names:{Ren:'Ana',Mica:'Zed'},voices:{Ren:'af_bella',Mica:'am_echo'},humanAppearance:{kind:'creature',species:'cat',hairStyle:'textured',outfit:'shirt'}};
 const q=validateProject(v2);assert.equal(q.cast[0].name,'Ana');assert.equal(q.cast[0].voice,'af_bella');assert.equal(q.cast[0].kind,'creature');assert.equal(q.cast[0].look.topStyle,'tshirt');assert.equal(q.names,undefined);
});
test('soundtrack is finite, stereo, bounded and matches frame duration',async()=>{
 const a=await makeSound(DEFAULT_PROJECT);assert.equal(a.length,2);
 assert.equal(a[0].length,30*RATE);let peak=0,energy=0;
 for(let i=0;i<a[0].length;i++){assert.ok(Number.isFinite(a[0][i]));peak=Math.max(peak,Math.abs(a[0][i]));energy+=a[0][i]**2;}
 assert.ok(peak<=.851&&peak>.1);assert.ok(energy>100);assert.equal(a[0][0],0);
});
test('sound disabled produces silence without imported voice',async()=>{
 const a=await makeSound({...DEFAULT_PROJECT,duration:5,music:false,sfx:false,ambience:false});assert.ok(a[0].every(x=>x===0));
 // The world's ambient bed is its own switch.
 const amb=await makeSound({...DEFAULT_PROJECT,duration:5,music:false,sfx:false});assert.ok(amb[0].some(x=>x!==0));
});
test('voice ducks the music bus',async()=>{
 const n=5*RATE,data=new Float32Array(n).map((_,i)=>i>RATE&&i<3*RATE?.5*Math.sin(i/9):0),voice={sampleRate:RATE,length:n,numberOfChannels:1,getChannelData:()=>data};
 const p={...DEFAULT_PROJECT,duration:5,sfx:false,cues:[]},[dry]=await makeSound(p),[wet]=await makeSound(p,voice);
 const rms=(a,from,to)=>Math.sqrt(a.slice(from,to).reduce((s,x)=>s+x*x,0)/(to-from));
 assert.ok(rms(wet,3.6*RATE,4.2*RATE)<rms(dry,3.6*RATE,4.2*RATE)*1.05);assert.ok(rms(wet,1.5*RATE,2.5*RATE)>rms(dry,1.5*RATE,2.5*RATE));
});
test('lip sync follows the speaking line and rests the listener',()=>{
 const p=clone(DEFAULT_PROJECT);p.cues[0].visemes=[[0,'X'],[.2,'D'],[.6,'A']];const v=validateProject(p);
 assert.ok(Math.abs(mouthAt(v,1.2+.5,'Ren').open-VISEMES.D.open)<1e-9);
 assert.ok(Math.abs(mouthAt(v,1.2+.9,'Ren').open-VISEMES.A.open)<1e-9);
 assert.deepEqual(mouthAt(v,1.7,'Mica'),VISEMES.X);
 assert.equal(mouthAt(v,4.6,'Ren'),null);
 p.cues[0].visemes=[[0,'Q']];assert.throws(()=>validateProject(p));
});
test('each character keeps the feeling of their own last line',()=>{
 const p=validateProject(clone(DEFAULT_PROJECT));
 assert.equal(faceAt(p,9,'Ren').emotion,'surprised');assert.equal(faceAt(p,9,'Mica').emotion,'curious');
 assert.ok(Math.abs(faceAt(p,9,'Mica').smile-FACES.curious.smile)<1e-9);
});
test('listeners react to the line they hear, blink unevenly and glance away to think',()=>{
 const p=validateProject({...clone(DEFAULT_PROJECT),cues:[{id:'a',speaker:'Ren',text:'You deleted it?',emotion:'surprised',action:'none',shot:'auto',start:1,end:2.4},{id:'b',speaker:'Mica',text:'...Maybe. I was trying to help, honestly.',emotion:'worried',action:'none',shot:'auto',start:3,end:6}]});
 assert.ok(faceAt(p,1.1,'Mica').eye<FACES.surprised.eye);assert.equal(faceAt(p,1.9,'Mica').emotion,'surprised');assert.ok(faceAt(p,1.9,'Mica').eye>1.1);
 assert.ok(faceAt(p,5,'Ren').brow>.05,'a worried line worries the listener');assert.equal(faceAt(p,5,'Mica').emotion,'worried');
 const closes=[];for(let t=0;t<p.duration;t+=1/30)if(blinkAt(p,t,'Ren',.3)<.2&&(!closes.length||t-closes.at(-1)>.3))closes.push(t);
 assert.ok(closes.length>=3);const gaps=closes.slice(1).map((t,i)=>t-closes[i]);assert.ok(Math.max(...gaps)-Math.min(...gaps)>.5,'blinks are not on a clock');
 assert.ok(closes.some(t=>Math.abs(t-.88)<.1),'blinks just before speaking');assert.equal(blinkAt(p,4.5,'Ren',.3),blinkAt(p,4.5,'Ren',.3));
 assert.ok(Math.abs(glanceAt(p,3.4,'Mica',.3).yaw)>.2&&Math.abs(glanceAt(p,5.8,'Mica',.3).yaw)<.08,'looks away, then back to finish the line');
});
test('actions ease in and out around their line',()=>{
 const p=validateProject(clone(DEFAULT_PROJECT));
 assert.equal(actionAt(p,12,'Ren').name,'facepalm');assert.equal(actionAt(p,12,'Ren').k,1);
 assert.equal(actionAt(p,12,'Mica').k,0);assert.ok(actionAt(p,10.8,'Ren').k<1);
});
test('monitor follows screen changes and fills progress bars',()=>{
 const p=validateProject(clone(DEFAULT_PROJECT));
 assert.equal(screenAt(p,0).screen.title,'OFFLINE');assert.equal(screenAt(p,15).screen.title,'Make it here.');
 const a=screenAt(p,19.5).progress,b=screenAt(p,24).progress;assert.ok(a>0&&b>a&&b<=1);
});
test('script text round-trips and reports mistakes by line',()=>{
 const p=validateProject(clone(DEFAULT_PROJECT)),{meta,cues}=parseScript(toScript(p),p);
 assert.equal(meta.title,p.title);assert.equal(cues.length,p.cues.length);
 cues.forEach((c,i)=>{for(const k of ['speaker','text','emotion','action','shot'])assert.equal(c[k],p.cues[i][k]);assert.deepEqual(c.screen,p.cues[i].screen);});
 assert.equal(parseScript('REN [cu:mica]: hi\nMICA [ren-ots]: yo',p).cues.map(c=>c.subject).join(),'Mica,Ren');
 validateProject({...p,cues,duration:60});
 assert.throws(()=>parseScript('REN [moonwalk]: hi',p),/Line 1/);assert.throws(()=>parseScript('BOB: hi',p),/unknown character/);
});

test('a script defines its own cast, world and theme, and round-trips through toScript',()=>{
  const base=validateProject(clone(DEFAULT_PROJECT));
  const text=`# title: Test
# theme: ocean-sunset
# style: lowpoly
# world: view=mountains lights=off props=plant,books particles=snow sky=#112233,#334455,#556677
# cast: KAI = creator sit prop=phone hairStyle=shaggy top=#2b3a8c voice=am_puck
# cast: BLOCK = mascot shape=round top=#e8743c
KAI [neutral]: Claude. I tried Codex.
BLOCK [curious, stand]: Was it good?
KAI [sad, stand, pause=0.9]: No.`;
  const parsed=parseScript(text,base),p=validateProject({...applyScript(base,parsed),duration:30});
  assert.equal(p.set,'desk');assert.equal(p.timeOfDay,'golden');assert.equal(p.filmLook,'golden');assert.equal(p.characterStyle,'lowpoly');
  assert.equal(p.world.view,'mountains');assert.equal(p.world.lights,false);assert.deepEqual(p.world.props,['plant','books']);assert.deepEqual(p.world.particles,['snow']);assert.deepEqual(p.world.sky,['#112233','#334455','#556677']);
  assert.deepEqual(p.cast.map(c=>[c.id,c.kind]),[['KAI','human'],['BLOCK','mascot']]);
  assert.equal(p.cast[0].look.stance,'sit');assert.equal(p.cast[0].look.prop,'phone');assert.equal(p.cast[0].voice,'am_puck');assert.equal(p.cast[1].look.shape,'round');
  assert.equal(p.cues[2].stance,'stand');assert.equal(p.cues[1].stance,'stand');
  // Everything survives a write and re-read.
  const again=validateProject({...applyScript(base,parseScript(toScript(p),base)),duration:30});
  assert.deepEqual(again.cast,p.cast);assert.deepEqual(again.world,p.world);
  for(const k of ['set','timeOfDay','filmLook','characterStyle'])assert.equal(again[k],p[k]);
  assert.deepEqual(again.cues.map(c=>c.stance),p.cues.map(c=>c.stance));
});
test('script errors name the line and the allowed values',()=>{
  const base=validateProject(clone(DEFAULT_PROJECT));
  assert.throws(()=>parseScript('# cast: X = wizard\nX: hi',base),/Line 1: unknown cast setting "wizard"/);
  assert.throws(()=>parseScript('# world: weather=sunny\nREN: hi',base),/unknown world setting "weather"/);
  assert.throws(()=>applyScript(base,parseScript('# theme: mars\nREN: hi',base)),/Unknown theme "mars"/);
  assert.throws(()=>parseScript('# cast: A = mascot\nREN: hi',base),/unknown character "REN"/);
  // Ambiguous bare words must be spelled out (round is both a glasses and a body shape).
  assert.throws(()=>parseScript('# cast: A = mascot round\nA: hi',base),/unknown cast setting "round"/);
});
test('sitting eases in and out at the speaker\'s own sit/stand lines',()=>{
  const p=validateProject(clone(DEFAULT_PROJECT));p.cast[0].look.stance='sit';
  const ren=p.cues.find(c=>c.speaker==='Ren'&&c.start>5);ren.stance='stand';
  assert.equal(sitAt(p,0,'Ren'),1);assert.equal(sitAt(p,ren.start+1,'Ren'),0);
  const mid=sitAt(p,ren.start+.35,'Ren');assert.ok(mid>0&&mid<1);
  assert.equal(sitAt(p,ren.start+1,'Mica'),0);assert.ok(sitsInFilm(p,'Ren'));assert.ok(!sitsInFilm(p,'Mica'));
});
test('every theme produces a valid project',()=>{
  const base=validateProject(clone(DEFAULT_PROJECT));
  for(const id of Object.keys(THEMES)){const p=validateProject(applyTheme(base,id));assert.equal(p.set,THEMES[id].set);}
  assert.match(castLine(base.cast[1]),/^# cast: Mica = kind=bot voice=af_heart/);
});

test('browser voices lay out a project like the desktop pipeline (fake synthesiser)',async()=>{
  globalThis.btoa??=s=>Buffer.from(s,'binary').toString('base64');
  const {voiceProject}=await import('../browser-voice.js'),RATE=24000;
  // Each line: 0.2 s of silence, then 1 s of tone with two words and a closed-open-closed mouth.
  const synth=async(text,voice,speed)=>{const n=Math.round(1.4*RATE),pcm=new Float32Array(n);for(let i=Math.round(.2*RATE);i<Math.round(1.2*RATE);i++)pcm[i]=.5*Math.sin(i/9);
    return [{type:'audio',data:{audio:{getChannelData:()=>pcm},words:['Hello','world.'],wtimes:[200,700],wdurations:[450,450],visemes:['PP','aa','sil'],vtimes:[200,300,1150],vdurations:[100,800,50]}}];};
  const p=validateProject({...clone(DEFAULT_PROJECT),voiceModulation:0}),seen=[];
  const out=await voiceProject(p,'flow',(f,msg)=>seen.push(f),synth);
  assert.match(out.voiceData,/^data:audio\/wav;base64,/);assert.equal(out.voiceEngine,'kokoro');
  const c0=out.cues[0];assert.equal(c0.start,1.4);// intro lead, as in pipeline/voice.py
  assert.ok(Math.abs((c0.end-c0.start)-(1.12+.1))<.02,`take trimmed to ~1.12 s, got ${c0.end-c0.start}`);
  assert.deepEqual(c0.visemes.map(v=>v[1]),['A','D','X']);assert.ok(c0.visemes[0][0]<.1);
  assert.deepEqual(c0.words.map(w=>w[2]),['Hello','world.']);
  for(let i=1;i<out.cues.length;i++)assert.ok(Math.abs(out.cues[i].start-(out.cues[i-1].end+(out.cues[i-1].pause??.45)))<.002);
  assert.ok(out.duration>=out.cues.at(-1).end+1.6);assert.equal(seen.at(-1),1);validateProject(out);
});
test('browser export mastering reaches the loudness target with peak headroom',async()=>{
  const {master}=await import('../audio.js'),n=48000*6,ch=[new Float32Array(n),new Float32Array(n)];
  for(let i=0;i<n;i++){const v=.03*Math.sin(2*Math.PI*440*i/48000)*(1+.5*Math.sin(i/20000));ch[0][i]=v;ch[1][i]=v*.8;}
  master(ch);const peak=ch.reduce((m,c)=>c.reduce((a,v)=>Math.max(a,Math.abs(v)),m),0);assert.ok(peak<=10**(-3.5/20)+1e-6,`peak ${peak}`);
  const rms=a=>Math.sqrt(a.reduce((s,v)=>s+v*v,0)/a.length),before=rms(ch[0]);master(ch);assert.ok(Math.abs(20*Math.log10(rms(ch[0])/before))<.6,'mastering again changes little');
});
