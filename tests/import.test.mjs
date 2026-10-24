import test from 'node:test';
import assert from 'node:assert/strict';
import {existsSync,readFileSync} from 'node:fs';
import * as THREE from 'three';
import {mapHumanoid,analyzeFace,validateCharacter,IMPORT_RULES} from '../character-import.js';

const fixtures=new URL('../../test-assets/',import.meta.url).pathname,fixture=f=>existsSync(fixtures+f)?readFileSync(fixtures+f):null;
const rig=names=>({nodes:names.map((name,i)=>({name,children:[]})),skins:[{joints:names.map((_,i)=>i)}]});

test('maps humanoid bones from the common rig naming families',()=>{
  for(const names of [
    ['J_Bip_C_Hips','J_Bip_C_Spine','J_Bip_C_Chest','J_Bip_C_Neck','J_Bip_C_Head','J_Bip_L_UpperArm','J_Bip_L_LowerArm','J_Bip_L_Hand','J_Bip_R_UpperArm','J_Bip_R_LowerArm','J_Bip_R_Hand','J_Bip_L_UpperLeg','J_Bip_L_LowerLeg','J_Bip_L_Foot'],
    ['CC_Base_Hip','CC_Base_Spine01','CC_Base_Spine02','CC_Base_NeckTwist01','CC_Base_Neck','CC_Base_Head','CC_Base_L_Upperarm','CC_Base_L_Forearm','CC_Base_L_Hand','CC_Base_R_Upperarm','CC_Base_R_Forearm','CC_Base_R_Hand'],
    ['Bip01 Pelvis','Bip01 Spine','Bip01 Spine2','Bip01 Neck','Bip01 Head','Bip01 L UpperArm','Bip01 L Forearm','Bip01 L Hand','Bip01 R UpperArm','Bip01 R Forearm','Bip01 R Hand','Bip01 L Thigh','Bip01 L Calf','Bip01 L Foot'],
    ['hips','spine','chest','neck','head','upper_arm.L','forearm.L','hand.L','upper_arm.R','forearm.R','hand.R','thigh.L','shin.L','foot.L']
  ]){
    const m=mapHumanoid(rig(names));
    for(const b of IMPORT_RULES.required)assert.ok(m[b],`${names[0]}…: missing ${b} (got ${Object.keys(m).join(',')})`);
    assert.notEqual(m.leftUpperArm.name,m.rightUpperArm.name);assert.ok(!/twist/i.test(m.neck.name));
  }
});
test('VRM humanoid declarations win over name guessing',()=>{
  const json=rig(['a','b','c','d','e','f','g','h','i','j']);json.extensions={VRMC_vrm:{humanoid:{humanBones:{hips:{node:0},spine:{node:1},neck:{node:2},head:{node:3},leftUpperArm:{node:4},leftLowerArm:{node:5},leftHand:{node:6},rightUpperArm:{node:7},rightLowerArm:{node:8},rightHand:{node:9}}}}};
  const m=mapHumanoid(json);assert.equal(m.head.name,'d');assert.equal(m.rightHand.name,'j');
});
test('detects lip-sync families from face shape names',()=>{
  const face=names=>analyzeFace({meshes:[{extras:{targetNames:names}}]});
  assert.equal(face(['viseme_sil','viseme_aa','viseme_O']).lipSync,'oculus');assert.equal(face(['jawOpen','eyeBlinkLeft']).lipSync,'arkit');assert.ok(face(['jawOpen','eyeBlinkLeft']).blink);
  assert.equal(face(['Fcl_MTH_A','Fcl_EYE_Close']).lipSync,'vroid');assert.equal(face(['MouthOpen']).lipSync,'generic');assert.equal(face(['Angry']).lipSync,'none');
  assert.deepEqual(face(['Angry','Sad','Surprised']).emotions,['angry','sad','surprised']);
});
test('rejects files that are not usable characters, with reasons',()=>{
  let r=validateCharacter(new TextEncoder().encode('hello').buffer,'x.fbx');assert.equal(r.ok,false);assert.ok(r.errors.some(e=>/\.glb or \.vrm/.test(e)));assert.ok(r.errors.some(e=>/binary glTF/.test(e)));
  const json=JSON.stringify({asset:{version:'2.0'},meshes:[{primitives:[{attributes:{POSITION:0}}]}],accessors:[{count:3}],nodes:[{name:'m',mesh:0}]}),pad=(4-json.length%4)%4,len=json.length+pad;
  const buf=new ArrayBuffer(20+len),v=new DataView(buf);v.setUint32(0,0x46546C67,true);v.setUint32(4,2,true);v.setUint32(8,20+len,true);v.setUint32(12,len,true);v.setUint32(16,0x4E4F534A,true);new Uint8Array(buf,20).set(new TextEncoder().encode(json+' '.repeat(pad)));
  r=validateCharacter(buf,'statue.glb');assert.equal(r.ok,false);assert.ok(r.errors.some(e=>/no skeleton/.test(e)));
});

const xbot=fixture('Xbot.glb'),robot=fixture('RobotExpressive.glb'),facecap=fixture('facecap.glb');
test('real models: Mixamo and custom rigs pass, a face scan without skeleton fails',{skip:!xbot&&'test-assets not downloaded'},()=>{
  const a=validateCharacter(xbot,'Xbot.glb');assert.ok(a.ok,a.errors.join());assert.equal(Object.keys(a.bones).length>=17,true);
  if(robot){const b=validateCharacter(robot,'RobotExpressive.glb');assert.ok(b.ok,b.errors.join());assert.equal(b.bones.leftHand.name.startsWith('Palm'),true);assert.ok(b.face.emotions.includes('angry'));}
  if(facecap){const c=validateCharacter(facecap,'facecap.glb');assert.equal(c.ok,false);assert.equal(c.face.lipSync,'arkit');}
});
test('an imported Mixamo character stands at studio height and its hand reaches its face',{skip:!xbot&&'test-assets not downloaded'},async()=>{
  const {createCanvas}=await import('@napi-rs/canvas');globalThis.document??={createElement:()=>createCanvas(16,16)};
  const {GLTFLoader}=await import('three/examples/jsm/loaders/GLTFLoader.js'),{buildImportedRig,animateImported,importedHandPos}=await import('../imported.js'),{FACES}=await import('../dist/timeline.js');
  const gltf=await new GLTFLoader().parseAsync(xbot.buffer.slice(xbot.byteOffset,xbot.byteOffset+xbot.byteLength),'');
  const r=buildImportedRig({id:'x1',name:'X',kind:'imported',look:{height:1},asset:{id:'abcdef1'}},gltf),scene=new THREE.Scene();scene.add(r.root);r.root.position.set(0,.26,0);r.root.updateMatrixWorld(true);
  const box=new THREE.Box3().setFromObject(r.model);assert.ok(Math.abs(box.max.y-box.min.y-3.4)<.05,`height ${box.max.y-box.min.y}`);
  const pose=(name,local=1.2)=>{animateImported(r,{t:3,talk:0,beat:0,face:{...FACES.neutral,emotion:'neutral'},action:{name,k:1,local,dur:2.5},baseY:.26,cueIndex:0,look:new THREE.Vector3(0,4,12),partner:new THREE.Vector3(2,3,0),screen:new THREE.Vector3(0,4.3,-4),key:new THREE.Vector3(2.6,.3,1.8),camera:new THREE.Vector3(0,4,12)});r.root.updateMatrixWorld(true);};
  pose('none');const rest=importedHandPos(r.arms[1]),shoulder=r.arms[1].upper.getWorldPosition(new THREE.Vector3());assert.ok(rest.y<shoulder.y-.6,'arms hang down from the T-pose');
  pose('facepalm');const brow=r.B.head.localToWorld(r.anchors.forehead.clone()).add(new THREE.Vector3(-.05,0,.06));assert.ok(importedHandPos(r.arms[0]).distanceTo(brow)<.2,`facepalm hand ${importedHandPos(r.arms[0]).distanceTo(brow).toFixed(2)} from face`);
  pose('raise');assert.ok(importedHandPos(r.arms[1]).y>r.B.head.getWorldPosition(new THREE.Vector3()).y,'raised hand above the head');
  for(const v of r.B.leftLowerArm.matrixWorld.elements)assert.ok(Number.isFinite(v));
});

const {validateWorld,validateBackdrop,imageSize}=await import('../character-import.js');
test('360° backgrounds must be 2:1 equirectangular images; size is read from the header',()=>{
  const png=(w,h)=>{const b=new Uint8Array(32);b.set([0x89,0x50,0x4E,0x47,0x0D,0x0A,0x1A,0x0A]);const v=new DataView(b.buffer);v.setUint32(16,w);v.setUint32(20,h);return b;};
  assert.deepEqual(imageSize(png(4096,2048)),{type:'png',width:4096,height:2048});
  assert.ok(validateBackdrop(png(4096,2048).buffer,'sky.png').ok);
  const flat=validateBackdrop(png(1920,1080).buffer,'photo.png');assert.equal(flat.ok,false);assert.ok(flat.errors[0].includes('2:1'));
  assert.equal(validateBackdrop(png(4096,2048).buffer,'sky.gif').ok,false);
  const hdr=new TextEncoder().encode('#?RADIANCE\nFORMAT=32-bit_rle_rgbe\n\n-Y 1024 +X 2048\n');assert.deepEqual(imageSize(hdr),{type:'hdr',width:2048,height:1024});
});
const tokyo=fixture('LittlestTokyo.glb'),hdri=fixture('forest_slope_2k.hdr');
test('real worlds: an animated Draco scene and a Poly Haven HDRI pass',{skip:!tokyo&&'test-assets not downloaded'},()=>{
  const w=validateWorld(tokyo,'LittlestTokyo.glb');assert.ok(w.ok,w.errors.join());assert.equal(w.animations,1);
  if(hdri){const b=validateBackdrop(hdri,'forest_slope_2k.hdr');assert.ok(b.ok,b.errors.join());assert.equal(b.width,2048);}
  if(xbot)assert.ok(validateWorld(xbot,'Xbot.glb').warnings.some(m=>/character/.test(m)));
});
test('world settings normalise and scripts can choose the world and camera style',async()=>{
  const {validateProject,DEFAULT_PROJECT,clone,parseScript}=await import('../dist/timeline.js');
  const p=validateProject({...clone(DEFAULT_PROJECT),set:'snow',world:{foliage:9,particles:['snow','bogus'],backdrop:'not an id',offsetX:500}});
  assert.equal(p.world.foliage,1.6);assert.deepEqual(p.world.particles,['snow']);assert.equal(p.world.backdrop,null);assert.equal(p.world.offsetX,100);
  assert.equal(validateProject({...clone(DEFAULT_PROJECT),set:'moon'}).set,'desk');
  const {meta}=parseScript('# set: Forest\n# time: night\n# camera: calm\nREN: hi',p);assert.deepEqual([meta.set,meta.time,meta.camera],['forest','night','calm']);
});
