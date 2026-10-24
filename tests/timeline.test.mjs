import test from 'node:test';
import assert from 'node:assert/strict';
import {DEFAULT_PROJECT,clone,validateProject,poseAt,mouthAt,VISEMES} from '../dist/timeline.js';
import {makeSound,RATE} from '../audio.js';

test('sample project survives portable JSON save and reopen',()=>{
 const p=validateProject(JSON.parse(JSON.stringify(DEFAULT_PROJECT)));
 assert.deepEqual(p,DEFAULT_PROJECT);
});
test('seek backwards and direct seek produce identical performance',()=>{
 const p=DEFAULT_PROJECT,expected=poseAt(p,15.25);
 for(let i=0;i<900;i++)poseAt(p,i/30);
 assert.deepEqual(poseAt(p,15.25),expected);
 assert.equal(expected.cue.speaker,'Mica');assert.equal(expected.shot,'mica');
});
test('camera holds through gaps between lines',()=>{
 assert.equal(poseAt(DEFAULT_PROJECT,7.45).shot,'ren');
 assert.equal(poseAt(DEFAULT_PROJECT,10.5).shot,'mica');
});
test('corrupt times, overlapping lines and oversized captions rejected',()=>{
 for(const mutate of [p=>p.cues[1].start=3,p=>p.duration=0,p=>p.cues[0].end=31,p=>p.cues[0].text='a'.repeat(161),p=>p.humanColor='javascript:bad']){
 const p=clone(DEFAULT_PROJECT);mutate(p);assert.throws(()=>validateProject(p));
 }
});
test('soundtrack is finite, stereo, bounded and matches frame duration',async()=>{
 const a=await makeSound(DEFAULT_PROJECT);assert.equal(a.length,2);
 assert.equal(a[0].length,30*RATE);let peak=0,energy=0;
 for(let i=0;i<a[0].length;i++){assert.ok(Number.isFinite(a[0][i]));peak=Math.max(peak,Math.abs(a[0][i]));energy+=a[0][i]**2;}
 assert.ok(peak<=.851&&peak>.1);assert.ok(energy>100);assert.equal(a[0][0],0);
});
test('sound disabled produces silence without imported voice',async()=>{
 const a=await makeSound({...DEFAULT_PROJECT,duration:5,music:false});assert.ok(a[0].every(x=>x===0));
});
test('lip sync follows the speaking line and rests the listener',()=>{
 const p=clone(DEFAULT_PROJECT);p.cues[0].visemes=[[0,'X'],[.2,'D'],[.6,'A']];const v=validateProject(p);
 assert.ok(Math.abs(mouthAt(v,1.2+.5,'Ren').open-VISEMES.D.open)<1e-9);
 assert.ok(Math.abs(mouthAt(v,1.2+.9,'Ren').open-VISEMES.A.open)<1e-9);
 assert.deepEqual(mouthAt(v,1.7,'Mica'),VISEMES.X);
 assert.equal(mouthAt(v,4.6,'Ren'),null);
 p.cues[0].visemes=[[0,'Q']];assert.throws(()=>validateProject(p));
});
