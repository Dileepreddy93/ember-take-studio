import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {createCanvas} from '@napi-rs/canvas';
globalThis.document={createElement:()=>createCanvas(16,16)};
const {buildCharacter,animateCharacter,solveLimb,effector,headWorld}=await import('../characters.js');
const {DEFAULT_PROJECT,CAST_TEMPLATES,ACTIONS,FACES,SPECIES,LOOK_OPTIONS,newCastMember,validateProject,clone}=await import('../dist/timeline.js');

function chain(){
  const root=new THREE.Group(),shoulder=new THREE.Group(),upper=new THREE.Group(),fore=new THREE.Group(),hand=new THREE.Group();
  root.add(shoulder);shoulder.add(upper);upper.add(fore);fore.add(hand);fore.position.y=-.5;hand.position.y=-.44;
  return {root,limb:{shoulder,upper,fore,hand,lenU:.5,lenF:.44,handOff:.16}};
}
test('two-bone IK reaches any target inside its reach, under any parent rotation',()=>{
  const {root,limb}=chain();
  for(let i=0;i<200;i++){
    root.rotation.set(Math.sin(i)*2,Math.cos(i*1.3)*2,Math.sin(i*.7));root.position.set(Math.sin(i*3),1,0);root.updateMatrixWorld(true);
    const dir=new THREE.Vector3(Math.sin(i*2.1),Math.cos(i*1.7),Math.sin(i*.9)).normalize(),dist=.2+.85*((i*.618)%1),target=root.localToWorld(dir.multiplyScalar(dist));
    solveLimb(limb,target,root.localToWorld(new THREE.Vector3(0,-1,-1)));
    assert.ok(effector(limb).distanceTo(target)<1e-3,`target ${i} missed by ${effector(limb).distanceTo(target)}`);
  }
});
test('IK stretches toward targets out of reach without flipping',()=>{
  const {root,limb}=chain();root.updateMatrixWorld(true);const target=new THREE.Vector3(0,0,5);
  solveLimb(limb,target,new THREE.Vector3(0,-1,-1));const e=effector(limb);
  assert.ok(Math.abs(e.length()-1.1)<.01);assert.ok(e.z>1.09);
});

const scene=new THREE.Scene(),world={screen:new THREE.Vector3(0,4.3,-4.4),key:new THREE.Vector3(2.65,.33,1.85),camera:new THREE.Vector3(0,4,12)};
function pose(rig,name,local=1.2,dur=2.5){
  return animateCharacter(rig,{t:3+local,talk:.8,beat:.5,face:{...FACES.neutral,emotion:'neutral'},action:{name,k:1,local,dur},baseY:.26,cueIndex:0,
    look:world.camera,partner:new THREE.Vector3(2,2.5,.5),...world});
}
const members=[...validateProject(clone(DEFAULT_PROJECT)).cast];
for(const t of Object.keys(CAST_TEMPLATES))members.push(newCastMember({cast:members},t));
for(const sp of SPECIES)members.push({...newCastMember({cast:members},'creature'),look:{...newCastMember({cast:[]},'creature').look,species:sp}});

test('every character type builds and performs every action with finite, planted poses',()=>{
  for(const member of members){
    const rig=buildCharacter(member);scene.add(rig.root);rig.root.position.set(-1.3,.26,.4);rig.root.updateMatrixWorld(true);
    const feet=rig.feet.map(f=>f.getWorldPosition(new THREE.Vector3()));
    for(const name of ACTIONS){
      for(const local of [.1,.6,1.4]){pose(rig,name,local);rig.root.updateMatrixWorld(true);
        rig.root.traverse(o=>{for(const v of o.matrixWorld.elements)assert.ok(Number.isFinite(v),`${member.kind}/${name} produced NaN`);});}
      if(name!=='jump'&&name!=='cheer'&&name!=='handsup')rig.feet.forEach((f,i)=>assert.ok(f.getWorldPosition(new THREE.Vector3()).distanceTo(feet[i])<1e-6,`${member.kind}/${name} moved a foot`));
    }
    scene.remove(rig.root);
  }
});
test('facepalm and think put the hand on the face',()=>{
  for(const member of members){
    const rig=buildCharacter(member);scene.add(rig.root);rig.root.position.set(0,.26,0);rig.root.scale.setScalar(member.look.height);
    pose(rig,'facepalm');rig.root.updateMatrixWorld(true);
    const brow=rig.head.localToWorld(rig.anchors.forehead.clone()),hand=effector(rig.arms[0]);
    assert.ok(hand.distanceTo(brow)<.16*member.look.height*member.look.head+.05,`${member.kind}: facepalm hand ${hand.distanceTo(brow).toFixed(2)} from forehead`);
    pose(rig,'think');rig.root.updateMatrixWorld(true);
    const chin=rig.head.localToWorld(rig.anchors.chin.clone()),fist=effector(rig.arms[1]);
    assert.ok(fist.distanceTo(chin)<.16*member.look.height*member.look.head+.05,`${member.kind}: think hand ${fist.distanceTo(chin).toFixed(2)} from chin`);
    scene.remove(rig.root);
  }
});
test('pointing at the monitor aims the arm at it',()=>{
  const rig=buildCharacter(members[0]);scene.add(rig.root);rig.root.position.set(-1.3,.26,.4);pose(rig,'point-screen');rig.root.updateMatrixWorld(true);
  const s=rig.arms[1].shoulder.getWorldPosition(new THREE.Vector3()),h=effector(rig.arms[1]);
  const along=h.clone().sub(s).normalize().dot(world.screen.clone().sub(s).normalize());assert.ok(along>.97,`arm aims ${along.toFixed(3)} at the screen`);
  scene.remove(rig.root);
});
test('head height follows proportions',()=>{
  const m=members[0],tall={...m,look:{...m.look,height:1.2}},short={...m,look:{...m.look,height:.8}};
  const a=buildCharacter(tall),b=buildCharacter(short);assert.ok(headWorld(a).y>headWorld(b).y+.4);
  for(const k of Object.keys(LOOK_OPTIONS))assert.ok(LOOK_OPTIONS[k].length>=2);
});
