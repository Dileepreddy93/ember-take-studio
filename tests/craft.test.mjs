import test from 'node:test';
import assert from 'node:assert/strict';
import {DEFAULT_PROJECT,clone,validateProject,parseScript,applyScript,toScript,presenceAt,planShots} from '../dist/timeline.js';
import {acting,modulate} from '../voice-modulation.js';

test('app screens and movement survive script save/reopen',()=>{
 const p=clone(DEFAULT_PROJECT),parsed=parseScript('>> SCREEN terminal alert: Build | $ npm test | + PASS\nRen [happy, enter]: We made it!\nMica [curious, hop]: Did we?\nRen [neutral, exit]: Absolutely.',p);
 const v=validateProject({...applyScript(p,parsed),duration:30}),again=applyScript(p,parseScript(toScript(v),p));
 assert.deepEqual(again.cues.map(c=>c.screen),v.cues.map(c=>c.screen));assert.deepEqual(again.cues.map(c=>c.action),['enter','hop','exit']);
 assert.equal(presenceAt(v,-3,'Ren').off,1);assert.equal(presenceAt(v,v.cues[0].start+1,'Ren').off,0);assert.equal(presenceAt(v,30,'Ren').off,1);
 const walking=presenceAt(v,v.cues[0].start-.55,'Ren');assert.ok(walking.off>0&&walking.off<1&&walking.moving>0);assert.equal(walking.dir,1);
});
test('emotions change pitch and energy while timestamps follow audio',()=>{
 const rate=24000,a=Float32Array.from({length:rate},(_,i)=>Math.sin(2*Math.PI*220*i/rate)*.4);
 for(const emotion of ['happy','sad','surprised','worried']){const perf=acting(emotion,'Hello?',1),out=modulate(a,perf.contour);assert.ok(out.audio.every(Number.isFinite));assert.ok(out.at(.8)>out.at(.2));assert.ok(out.at(1)<=out.audio.length/rate+.001);}
 assert.ok(acting('sad','Hello',1).energy<acting('happy','Hello',1).energy);
 assert.ok(acting('surprised','Hello!',1).mean>acting('neutral','Hello',1).mean);
 assert.equal(acting('sad','Hello',0).mean,1);assert.equal(acting('sad','Hello',0).energy,1);
 assert.ok(modulate(new Float32Array(),()=>0).audio.length===0);
});
test('silent pauses get listener reactions with valid shot subjects',()=>{
 const p=validateProject({...clone(DEFAULT_PROJECT),cameraStyle:'cinematic'});p.cues[1].start=p.cues[0].end+1;
 const shots=planShots(p);assert.ok(shots.some(s=>s.reaction));assert.ok(shots.every(s=>p.cast.some(c=>c.id===s.subject)));
});

test('explicit silent beats and modulation headers survive save/reopen',()=>{
 const base=clone(DEFAULT_PROJECT),parsed=parseScript('# modulation: 1.4\nRen: Really?\n>> BEAT: 1.2\nMica: Really.',base),p=validateProject({...applyScript(base,parsed),duration:30});
 assert.equal(p.voiceModulation,1.4);assert.equal(p.cues[0].pause,1.2);assert.ok(p.cues[1].start-p.cues[0].end>1.19);
 assert.equal(applyScript(base,parseScript(toScript(p),base)).voiceModulation,1.4);
 assert.throws(()=>applyScript(base,parseScript('# modulation: 9\nRen: Hello',base)),/modulation/);
});

test('browser modulation lays out remapped words and mouth cues inside each take',async()=>{
 const {voiceProject}=await import('../browser-voice.js');
 const p=validateProject({...clone(DEFAULT_PROJECT),intro:false,endTitle:'',cues:[{...DEFAULT_PROJECT.cues[0],text:'Ready?',emotion:'surprised',start:0,end:2}],voiceModulation:1.4});
 const out=await voiceProject(p,'flow',null,async(text,voice,speed)=>{const n=Math.round(24000/speed),pcm=Float32Array.from({length:n},(_,i)=>Math.sin(i/12)*.4),ms=n/24;return [{data:{audio:{getChannelData:()=>pcm},words:['Ready?'],wtimes:[0],wdurations:[ms],visemes:['aa','sil'],vtimes:[0,ms-20],vdurations:[ms-20,20]}}];});
 const c=out.cues[0],length=c.end-c.start;assert.ok(length>.8&&length<1.3);assert.ok(c.words.every(([a,b])=>0<=a&&a<=b&&b<=length));assert.ok(c.visemes.every(([t])=>t>=0&&t<=length));validateProject(out);
});
