import test from 'node:test';
import assert from 'node:assert/strict';
import {DEFAULT_PROJECT,clone,validateProject,poseAt,mouthAt,faceAt,actionAt,screenAt,planShots,parseScript,toScript,VISEMES,FACES} from '../dist/timeline.js';
import {makeSound,RATE} from '../audio.js';

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
test('auto camera opens wide, cuts to the speaker and inserts the monitor on screen changes',()=>{
 const p=validateProject(clone(DEFAULT_PROJECT)),segs=planShots(p);
 assert.equal(segs[0].shot,'wide');assert.equal(segs[0].start,0);
 assert.equal(poseAt(p,5.5).shot,'ren-cu');
 assert.equal(poseAt(p,14.6).shot,'screen');assert.ok(poseAt(p,16).shot.startsWith('mica'));
 for(let i=1;i<segs.length;i++)assert.ok(segs[i].start>=segs[i-1].start);
});
test('explicit camera choice wins over the planner',()=>{
 const p=clone(DEFAULT_PROJECT);p.cues[1].shot='two';assert.equal(poseAt(validateProject(p),5.5).shot,'two');
});
test('corrupt times, overlapping lines, unknown tags and oversized captions rejected',()=>{
 for(const mutate of [p=>p.cues[1].start=3,p=>p.duration=0,p=>p.cues[0].end=31,p=>p.cues[0].text='a'.repeat(161),p=>p.humanColor='javascript:bad',p=>p.cues[0].action='moonwalk',p=>p.cues[0].screen.tone='loud',p=>p.cues[0].words=[[0,'x']]]){
 const p=clone(DEFAULT_PROJECT);mutate(p);assert.throws(()=>validateProject(p));
 }
});
test('version 1 projects open with defaults for new fields',()=>{
 const v1={version:1,title:'Old',duration:20,fps:30,humanColor:'#8364c5',robotColor:'#ee704e',glasses:true,warmth:1,music:true,captions:true,voiceData:null,cues:[{id:1,start:1,end:3,speaker:'Ren',text:'Hi',emotion:'happy',shot:'ren'}]};
 const p=validateProject(v1);assert.equal(p.version,2);assert.equal(p.cues[0].action,'none');assert.equal(p.names.Mica,'Mica');
});
test('soundtrack is finite, stereo, bounded and matches frame duration',async()=>{
 const a=await makeSound(DEFAULT_PROJECT);assert.equal(a.length,2);
 assert.equal(a[0].length,30*RATE);let peak=0,energy=0;
 for(let i=0;i<a[0].length;i++){assert.ok(Number.isFinite(a[0][i]));peak=Math.max(peak,Math.abs(a[0][i]));energy+=a[0][i]**2;}
 assert.ok(peak<=.851&&peak>.1);assert.ok(energy>100);assert.equal(a[0][0],0);
});
test('sound disabled produces silence without imported voice',async()=>{
 const a=await makeSound({...DEFAULT_PROJECT,duration:5,music:false,sfx:false});assert.ok(a[0].every(x=>x===0));
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
 validateProject({...p,cues,duration:60});
 assert.throws(()=>parseScript('REN [moonwalk]: hi',p),/Line 1/);assert.throws(()=>parseScript('BOB: hi',p),/unknown character/);
});
