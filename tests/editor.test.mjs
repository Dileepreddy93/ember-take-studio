import test from 'node:test';
import assert from 'node:assert/strict';
import {DEFAULT_PROJECT,clone} from '../dist/timeline.js';
import {reconcileVoice} from '../project-edit.js';
import {exportFrames} from '../frame-export.js';
const voiced=()=>{const p=clone(DEFAULT_PROJECT);p.voiceData='data:audio/wav;base64,AAAA';p.cues[0].visemes=[[0,'X']];p.cues[0].words=[[0,.1,'Hello']];return p;};
test('script and timing edits remove stale generated speech; visual edits preserve it',()=>{
 const before=voiced();
 for(const change of [p=>p.cues[0].text='Changed',p=>p.cues[0].pause=1.4,p=>p.cues[0].start+=.2,p=>p.cast[0].voice='af_heart',p=>p.voiceModulation=.3,p=>p.cues.splice(0,1)]){const next=clone(before);change(next);const out=reconcileVoice(before,next);assert.equal(out.voiceData,null);assert.ok(out.cues.every(c=>!c.visemes&&!c.words));}
 const visual=clone(before);visual.cues[0].action='wave';visual.cast[0].look.top='#123456';assert.equal(reconcileVoice(before,visual).voiceData,before.voiceData);
 const fresh={...clone(before),voiceData:'data:audio/wav;base64,BBBB'};fresh.cues[0].start+=.3;assert.equal(reconcileVoice(before,fresh).voiceData,fresh.voiceData);
});
test('imported recordings are retained when editing their scene',()=>{const before=voiced();delete before.cues[0].visemes;const next=clone(before);next.cues[0].text='Changed';assert.equal(reconcileVoice(before,next).voiceData,before.voiceData);});
test('frame export uses story camera and restores cast inspection after success or cancellation',async()=>{
 for(const cancel of [false,true]){
 const captured=[],scene={w:540,h:960,time:2,manual:true,focus:'Ren',previewCam:{yaw:45},setManual(v){this.manual=v;},setFocus(v){this.focus=v;},setSize(w,h){this.w=w;this.h=h;},seek(t){this.time=t;},canvas:{toBlob(cb){captured.push(scene.focus);cb(new Blob(['jpeg']));}}};
 const controller=new AbortController();if(cancel)controller.abort();
 const work=exportFrames(scene,{duration:.1},[new Float32Array(4800),new Float32Array(4800)],540,()=>{},controller.signal);
 if(cancel)await assert.rejects(work,/cancelled/);else{const result=await work;assert.equal(result.kind,'frames');assert.ok(captured.every(f=>f===null));}
 assert.deepEqual([scene.w,scene.h,scene.time,scene.manual,scene.focus,scene.previewCam],[540,960,2,true,'Ren',{yaw:45}]);
 }
});
