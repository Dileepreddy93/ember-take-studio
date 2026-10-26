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
test('delivery tags stay out of captions, answers are timed by feeling, measured stress drives beats',async()=>{
 const {spoken,turnGap,beatAt}=await import('../dist/timeline.js');
 assert.equal(spoken("[sigh] It didn't know me [laugh]. Fine."),"It didn't know me. Fine.");
 const q={speaker:'A',text:'Was it good?',pause:.45};
 assert.ok(turnGap(q,{speaker:'B',text:'No!',emotion:'surprised'})<.2);assert.ok(turnGap(q,{speaker:'B',text:'...It was fast.',emotion:'sad'})>.8);
 assert.equal(turnGap({...q,pause:1.2},{speaker:'B',text:'No!',emotion:'surprised'}),1.2);assert.equal(turnGap(q,undefined),.45);
 const cue={start:0,end:2,text:'it never did',words:[[0,.3,'it',0],[.4,1.2,'never',1],[1.3,1.5,'did',.2]]};
 assert.ok(beatAt(cue,.5)>beatAt(cue,1.4)*2,'the stressed word beats hardest');
});
test('time cards, neon signs and performed screens survive the script round trip',async()=>{
 const {parseScript,applyScript,toScript,validateProject,turnGap,CARD_TIME,planShots}=await import('../dist/timeline.js');
 const {screenPlan,screenSounds,parseRow}=await import('../screen-apps.js');
 const p=clone(DEFAULT_PROJECT),text='# world: neon=Ship_it! neonColor=#ff3366\n>> SCREEN grid info: Verify | Select all squares with | traffic lights | [x] Light | [ ] Sky | [x] Pole | (Verify) | !! Please try again\nRen [worried, screen]: Easy. Traffic lights.\n>> CARD: 2 hours later\nMica [sad]: Still going?';
 const v=validateProject({...applyScript(p,parseScript(text,p)),duration:30}),again=applyScript(p,parseScript(toScript(v),p));
 assert.equal(v.world.neon,'Ship it!');assert.equal(again.world.neon,'Ship it!');assert.equal(again.world.neonColor,'#ff3366');
 assert.equal(v.cues[1].card,'2 hours later');assert.equal(again.cues[1].card,'2 hours later');assert.ok(turnGap(v.cues[0],v.cues[1])>=CARD_TIME);
 assert.deepEqual(again.cues[0].screen.lines,v.cues[0].screen.lines);assert.equal(v.cues[0].screen.kind,'grid');
 assert.equal(parseRow('[x] Light').on,true);assert.equal(parseRow('(Verify)').type,'button');assert.equal(parseRow('> hello').type,'type');assert.equal(parseRow('!! no').type,'error');
 const plan=screenPlan(v.cues[0].screen,4),acts=plan.beats.filter(b=>b.dur>0);
 assert.ok(acts.every((b,i)=>!i||b.start>=acts[i-1].start+acts[i-1].dur-1e-9),'actions happen one after another');assert.ok(plan.end<=4);
 const snd=screenSounds(v.cues[0].screen,4);assert.equal(snd.filter(e=>e.type==='click').length,3);assert.equal(snd.filter(e=>e.type==='error').length,1);
 assert.equal(planShots(v)[0].shot,'screen');
});
test('a screen acts within its own line (and lines held on it), starting fresh before its line',async()=>{
 const {screenAt,screenSpan,parseScript,applyScript,validateProject}=await import('../dist/timeline.js');
 const p=clone(DEFAULT_PROJECT),v=validateProject({...applyScript(p,parseScript('>> SCREEN browser info: site | [x] I am human | (Go) | !! Nope\nRen [neutral, screen]: Easy.\nRen [curious, screen]: Right?\nRen [angry]: WHAT?\nMica [sad]: Oh no.',p)),duration:30});
 const [a,b,c]=v.cues;assert.ok(Math.abs(screenSpan(v,a)-(b.end+(b.pause??.45)*.5-a.start))<1e-9,'held lines extend it');assert.ok(a.start+screenSpan(v,a)<c.end,'but not into the reaction line');
 assert.equal(screenAt(v,0).start,a.start);
});
