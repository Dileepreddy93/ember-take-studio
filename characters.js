// Procedural characters in the studio's faceted low-poly style, all built on one rig:
// root → hips → chest → neck → head, chest → shoulder → upper → fore → hand, hips → leg chains with planted feet.
// Arms and legs are solved with two-bone IK, so gestures reach real targets (face, chin, monitor, partner)
// on any body shape. Everything is a pure function of time, so scrubbing and rendering agree frame for frame.
import * as THREE from 'three';
import {RoundedBoxGeometry} from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import {clamp,smooth,lerp} from './dist/timeline.js';

const PI=Math.PI,V=(x=0,y=0,z=0)=>new THREE.Vector3(x,y,z);
function mat(color,{flat=true,rough=.78,metal=0,emissive=null,glow=1}={}){return new THREE.MeshStandardMaterial({color,roughness:rough,metalness:metal,flatShading:flat,...(emissive&&{emissive,emissiveIntensity:glow})});}
function add(parent,geo,material,x=0,y=0,z=0){const o=new THREE.Mesh(geo,material);o.position.set(x,y,z);o.castShadow=true;o.receiveShadow=true;parent.add(o);return o;}
const box=(p,w,h,d,m,x,y,z,r=.05)=>add(p,new RoundedBoxGeometry(w,h,d,1,r),m,x,y,z);
const ball=(p,r,m,x,y,z,ws=8,hs=6)=>add(p,new THREE.SphereGeometry(r,ws,hs),m,x,y,z);
const cyl=(p,a,b,h,m,x,y,z,n=8)=>add(p,new THREE.CylinderGeometry(a,b,h,n),m,x,y,z);
const capsule=(p,r,len,m,x,y,z,n=7)=>add(p,new THREE.CapsuleGeometry(r,len,2,n),m,x,y,z);
const cone=(p,r,h,m,x,y,z,n=6)=>add(p,new THREE.ConeGeometry(r,h,n),m,x,y,z);
const grp=(p,x=0,y=0,z=0)=>{const g=new THREE.Group();g.position.set(x,y,z);p.add(g);return g;};
function tube(p,points,m,r=.015){const c=new THREE.CatmullRomCurve3(points.map(q=>V(...q)));return add(p,new THREE.TubeGeometry(c,10,r,5,false),m);}
function canvasTexture(w,h){const c=document.createElement('canvas');c.width=w;c.height=h;const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;return {canvas:c,ctx:c.getContext('2d'),texture:t};}
// Deterministic vertex jitter gives the hand-cut facets of the reference look; shared corners move together.
function facet(geo,amount,seed){
  const pos=geo.attributes.position,seen=new Map();
  for(let i=0;i<pos.count;i++){const x=pos.getX(i),y=pos.getY(i),z=pos.getZ(i),key=`${x.toFixed(3)},${y.toFixed(3)},${z.toFixed(3)}`;
    let f=seen.get(key);if(f===undefined){const h=Math.sin(x*12.9898+y*78.233+z*37.719+seed)*43758.5453;f=1+((h-Math.floor(h))-.5)*amount;seen.set(key,f);}pos.setXYZ(i,x*f,y*f,z*f);}
  geo.computeVertexNormals();return geo;
}
const hash=n=>{const h=Math.sin(n*127.1+311.7)*43758.5453;return h-Math.floor(h);};

// Body plans: joint offsets (chest space unless noted), limb lengths and face anchors (head space).
const PLANS={
  humanoid:{leg:1.05,hipX:.2,thigh:.52,shin:.48,chestY:.1,shoulderX:.47,shoulderY:.95,neckY:1.04,headY:.06,headC:.58,upper:.54,fore:.5,hand:.16,
    anchors:{forehead:[0,.76,.5],chin:[.04,.2,.4],face:[0,.6,.62],ear:[.56,.6,0]}},
  bot:{leg:.52,hipX:.3,thigh:.27,shin:.27,chestY:.05,shoulderX:.62,shoulderY:.7,neckY:.86,headY:.04,headC:.43,upper:.38,fore:.36,hand:.1,
    anchors:{forehead:[.12,.18,.5],chin:[.08,.02,.5],face:[0,.45,.62],ear:[.7,.43,0]}}
};

export function buildCharacter(member){
  const a=member.look,kind=member.kind,plan=kind==='bot'?PLANS.bot:PLANS.humanoid,b=a.build,seed=[...member.id].reduce((s,c)=>s+c.charCodeAt(0),0);
  const M={skin:mat(a.skin,{rough:kind==='creature'?1:.82}),hair:mat(a.hair,{rough:.95}),top:mat(a.top,{rough:kind==='robot'||kind==='bot'?.42:.9,metal:kind==='robot'?.55:kind==='bot'?.18:0}),
    accent:mat(a.accent,{rough:.6,metal:kind==='robot'||kind==='bot'?.6:0}),bottom:mat(a.bottom,{rough:.92}),shoes:mat(a.shoes,{rough:.7}),eye:mat(a.eyes,{rough:.18,flat:false}),
    white:mat('#efe8dc',{rough:.35,flat:false}),shine:mat('#ffffff',{emissive:'#ffffff',glow:.9,flat:false}),dark:mat('#1b1716',{rough:.5}),screen:mat('#0f2221',{rough:.25,metal:.2})};
  const root=new THREE.Group(),hips=grp(root,0,plan.leg,0),chest=grp(hips,0,plan.chestY,0),neck=grp(chest,0,plan.neckY,0),head=grp(neck,0,plan.headY,0);
  root.scale.setScalar(a.height);head.scale.setScalar(a.head);
  const rig={member,kind,plan,root,hips,chest,neck,head,arms:[],legs:[],feet:[],M,seed,face:null,anchors:{}};
  const robotic=kind==='robot'||kind==='bot';

  // Torso and hips.
  if(kind==='bot'){box(chest,1.12,.78,.72,M.top,0,.43,0,.14);box(chest,.8,.41,.08,M.accent,0,.44,.385,.05);cyl(chest,.11,.11,.02,M.white,-.23,.44,.45,12).rotation.x=PI/2;for(let i=0;i<3;i++)box(chest,.22,.025,.03,M.white,.17,.36+i*.08,.443,.008);box(hips,.7,.16,.5,M.accent,0,.02,0,.05);}
  else if(kind==='robot'){box(chest,.98*b,1.0,.62,M.top,0,.5,0,.12);box(chest,.62*b,.42,.06,M.screen,0,.62,.32,.05);cyl(chest,.08,.08,.02,M.accent,0,.62,.36,10).rotation.x=PI/2;box(hips,.72*b,.36,.5,M.accent,0,0,0,.08);cyl(chest,.16,.18,.18,M.accent,0,1.02,0,10);}
  else{
    const torso=cyl(chest,.5*b,.42*b,1.05,M.top,0,.52,0,8);torso.scale.z=.92;box(hips,.72*b,.38,.5,M.bottom,0,0,0,.12);cyl(chest,.17,.19,.2,M.skin,0,1.04,0,8);
    if(a.topStyle==='hoodie'){const hood=ball(chest,.47*b,M.top,0,1.0,-.1,9,6);hood.scale.set(1,.55,.9);box(chest,.6*b,.3,.12,mat(shade(a.top,-.12)),0,.24,.42,.06);for(const s of [-1,1])tube(chest,[[s*.13,1.0,.36],[s*.15,.72,.47],[s*.16,.5,.47]],M.accent,.016);tube(chest,[[-.25,.36,.46],[0,.3,.48],[.25,.36,.46]],mat(shade(a.top,-.2)),.012);}
    else if(a.topStyle==='tshirt'){cyl(chest,.21,.23,.06,M.top,0,1.01,0,10);box(chest,.24,.07,.03,M.accent,.2*b,.75,.44,.01);}
    else if(a.topStyle==='jacket'){box(chest,.3,.98,.04,M.accent,0,.52,.42,.02);for(const s of [-1,1]){const lap=box(chest,.12,.42,.04,mat(shade(a.top,.1)),s*.17,.8,.43,.015);lap.rotation.z=s*.25;}box(chest,.86*b,.06,.5,mat(shade(a.top,-.2)),0,.03,0,.02);}
    else{box(chest,.26,.5,.04,mat('#f0ece4'),0,.78,.42,.02);box(chest,.07,.42,.03,M.accent,0,.72,.45,.015);for(const s of [-1,1]){const lap=box(chest,.13,.5,.04,mat(shade(a.top,.12)),s*.15,.78,.43,.015);lap.rotation.z=s*.32;}}
  }

  // Arms: shoulder → upper → fore → hand, each bone hanging along −Y from its joint.
  for(const s of [-1,1]){
    const shoulder=grp(chest,s*(kind==='bot'?plan.shoulderX:plan.shoulderX*b),plan.shoulderY,0),upper=grp(shoulder),fore=grp(upper,0,-plan.upper,0),hand=grp(fore,0,-plan.fore,0);
    const sleeve=a.topStyle==='tshirt'&&kind!=='robot'&&kind!=='bot';
    if(kind==='bot'){ball(shoulder,.14,M.accent,0,0,0,10,8);cyl(upper,.09,.09,plan.upper-.06,M.white,0,-plan.upper/2,0,8);ball(fore,.12,M.accent,0,0,0,10,8);cyl(fore,.1,.1,plan.fore-.08,M.top,0,-plan.fore/2,0,8);}
    else if(kind==='robot'){ball(shoulder,.19*b,M.accent,0,0,0,10,8);cyl(upper,.12*b,.11*b,plan.upper-.08,M.top,0,-plan.upper/2,0,8);ball(fore,.13*b,M.accent,0,0,0,10,8);cyl(fore,.11*b,.1*b,plan.fore-.06,M.top,0,-plan.fore/2,0,8);}
    else{ball(shoulder,.2*b,M.top,0,0,0,8,6);capsule(upper,.165*b,plan.upper-.2,sleeve?M.skin:M.top,0,-plan.upper/2,0);if(sleeve)cyl(upper,.19*b,.18*b,.2,M.top,0,-.08,0,8);capsule(fore,.15*b,plan.fore-.18,sleeve?M.skin:M.top,0,-plan.fore/2,0);if(!sleeve)cyl(fore,.155*b,.155*b,.1,mat(shade(a.top,-.15)),0,-plan.fore+.06,0,8);}
    // Hand: palm, a three-finger mitten, a separate index finger and thumb (palm faces the body at rest).
    const palmMat=robotic?M.accent:M.skin,size=kind==='bot'?.8:1;
    const palm=ball(hand,.13*size,palmMat,0,-.08*size,0,7,5);palm.scale.set(.72,1,.92);
    const fingers=grp(hand,0,-.16*size,-.015),index=grp(hand,0,-.16*size,.075*size),thumb=grp(hand,0,-.06*size,.1*size);
    box(fingers,.1*size,.15*size,.13*size,palmMat,0,-.07*size,-.01,.04*size);capsule(index,.035*size,.09*size,palmMat,0,-.07*size,0,5);
    capsule(thumb,.036*size,.08*size,palmMat,0,-.05*size,.02,5).rotation.x=-.5;
    rig.arms.push({s,shoulder,upper,fore,hand,fingers,index,thumb,lenU:plan.upper,lenF:plan.fore,handOff:plan.hand});
  }

  // Legs end at the ankle; feet are root children so they stay planted while the hips move.
  for(const s of [-1,1]){
    const hip=grp(hips,s*plan.hipX*(kind==='bot'?1:b),kind==='bot'?0:-.08,0),upper=grp(hip),fore=grp(upper,0,-plan.thigh,0),ankleY=.07,foot=grp(root,s*plan.hipX*(kind==='bot'?1:b),ankleY,.04);
    if(kind==='bot'){cyl(upper,.1,.1,plan.thigh,M.accent,0,-plan.thigh/2,0,8);cyl(fore,.1,.1,plan.shin,M.accent,0,-plan.shin/2,0,8);box(foot,.43,.25,.6,M.top,0,.06,.08,.07);box(foot,.45,.065,.63,M.accent,0,-.05,.08,.025);}
    else{capsule(upper,.17*b,plan.thigh-.2,robotic?M.top:M.bottom,0,-plan.thigh/2,0);capsule(fore,.15*b,plan.shin-.16,robotic?M.top:M.bottom,0,-plan.shin/2,0);if(robotic)ball(fore,.14*b,M.accent,0,0,0,8,6);
      box(foot,.36*b,.2,.58,M.shoes,0,.02,.1,.08);box(foot,.37*b,.06,.59,mat(shade(a.shoes,-.35)),0,-.07,.1,.02);}
    rig.legs.push({s,shoulder:hip,upper,fore,lenU:plan.thigh,lenF:plan.shin-(kind==='bot'?0:.05),handOff:0});
    rig.feet.push(foot);
  }

  buildHead(rig,a,M,seed);
  for(const [k,v] of Object.entries(plan.anchors))rig.anchors[k]=V(...v);
  if(kind==='creature')buildTail(rig,a,M);
  root.traverse(o=>{if(o.isMesh)o.userData.character=member.id;});
  return rig;
}

function shade(hex,amount){const c=new THREE.Color(hex);const hsl={};c.getHSL(hsl);c.setHSL(hsl.h,hsl.s,clamp(hsl.l+amount,0,1));return '#'+c.getHexString();}

function buildHead(rig,a,M,seed){
  const {head,kind,plan}=rig,C=plan.headC;
  if(kind==='bot'){
    box(head,1.36,.94,.87,M.top,0,C,0,.14);box(head,1.15,.7,.085,M.accent,0,C+.02,.455,.1);box(head,1.04,.58,.035,M.screen,0,C+.02,.51,.08);
    for(const s of [-1,1]){cyl(head,.18,.18,.12,M.accent,s*.73,C,0,12).rotation.z=PI/2;cyl(head,.12,.12,.13,M.white,s*.79,C,0,12).rotation.z=PI/2;}
    cyl(head,.023,.023,.32,M.accent,.32,C+.61,0,6);rig.glow=mat(a.screen,{emissive:a.screen,glow:1.1,flat:false});ball(head,.09,rig.glow,.32,C+.81,0,10,8);
    ledFace(rig,a,.98,.54,V(0,C+.02,.531));return;
  }
  if(kind==='robot'){
    box(head,1.0,.95,.85,M.top,0,C,0,.16);box(head,.84,.56,.05,M.screen,0,C+.02,.43,.07);for(const s of [-1,1]){cyl(head,.13,.13,.12,M.accent,s*.53,C,0,10).rotation.z=PI/2;}
    cyl(head,.02,.02,.28,M.accent,.25,C+.6,0,6);rig.glow=mat(a.screen,{emissive:a.screen,glow:1.1,flat:false});ball(head,.07,rig.glow,.25,C+.76,0,10,8);
    ledFace(rig,a,.8,.5,V(0,C+.02,.46));hatAndGlasses(rig,a,M,C,.5);return;
  }
  // Human and creature: faceted icosphere head, glossy or classic eyes, block brows, drawn mouth decal.
  const geo=facet(new THREE.IcosahedronGeometry(.55,2),.045,seed);const skull=add(head,geo,M.skin,0,C,0);skull.scale.set(1,1.02,.94);
  const muzzle=kind==='creature'&&a.species!=='dragon';
  rig.eyes=[];rig.pupils=[];rig.brows=[];
  for(const s of [-1,1]){
    const eye=grp(head,s*.2,C+.07,.43);rig.eyes.push(eye);const pupil=grp(eye);rig.pupils.push(pupil);
    if(a.eyeStyle==='glossy'){const e=ball(pupil,.095,M.eye,0,0,.03,12,10);e.scale.set(.9,1.18,.5);ball(pupil,.028,M.shine,-.03,.045,.08,8,6);ball(pupil,.012,M.shine,.025,-.03,.08,6,4);}
    else{const w=ball(eye,.112,M.white,0,0,0,12,10);w.scale.set(1,1.12,.55);const iris=ball(pupil,.065,M.eye,0,-.01,.055,12,10);iris.scale.z=.5;ball(pupil,.03,M.dark,0,-.01,.075,8,6).scale.z=.4;ball(pupil,.016,M.shine,-.018,.015,.088,6,4);}
    rig.brows.push(box(head,.22,.06,.06,M.hair,s*.21,C+.27,.45,.025));
  }
  if(!muzzle){const nose=cone(head,.075,.16,M.skin,0,C-.04,.52,3);nose.rotation.x=PI/2;nose.rotation.y=PI;for(const s of [-1,1]){ball(head,.12,M.skin,s*.54,C-.02,-.02,6,5).scale.set(.6,1,.9);}}
  // Mouth decal on a curved strip that follows the jaw (or the front of a muzzle).
  const tex=canvasTexture(256,128),R=.5,arc=.8,mg=new THREE.CylinderGeometry(R,R,.2,12,1,true,-arc/2,arc);mg.translate(0,0,-R);
  const mouth=new THREE.Mesh(mg,new THREE.MeshStandardMaterial({map:tex.texture,transparent:true,alphaTest:.04,roughness:.55,depthWrite:false,polygonOffset:true,polygonOffsetFactor:-2}));
  mouth.position.set(0,C-.27,muzzle?.66:.47);mouth.rotation.x=muzzle?.05:.25;mouth.renderOrder=2;if(muzzle)mouth.scale.set(.8,.8,.8);head.add(mouth);
  rig.face={type:'drawn',tex,last:''};
  if(kind==='creature')creatureHead(rig,a,M,C);
  else{hair(rig,a,M,C,seed);facialHair(rig,a,M,C);}
  hatAndGlasses(rig,a,M,C,.52);
}

function hair(rig,a,M,C,seed){
  const {head}=rig,st=a.hairStyle;if(st==='bald')return;
  const cap=add(head,facet(new THREE.IcosahedronGeometry(.585,1),.06,seed+3),M.hair,0,C+.1,-.07);cap.scale.set(1,st==='short'||st==='mohawk'?.72:.88,.97);
  if(st==='mohawk'){cap.scale.set(.98,.6,.95);for(let i=0;i<6;i++){const c=cone(head,.1,.32,M.hair,0,C+.55+Math.sin(i/5*PI)*.06,.32-i*.14,4);c.rotation.x=-.3-i*.18;}return;}
  if(st==='shaggy'){
    // Reference look: a faceted mop. Each shard lies on the scalp (long axis along the surface, thin along the
    // normal), layered from the crown down to a fringe over the brow and over the tops of the ears.
    cap.scale.set(1.02,.92,1);
    const R=.6,place=(theta,phi,len,wid,seedN)=>{
      const d=V(Math.sin(theta)*Math.cos(phi),Math.sin(phi),Math.cos(theta)*Math.cos(phi)),up=V(-Math.sin(theta)*Math.sin(phi),Math.cos(phi),-Math.cos(theta)*Math.sin(phi));
      const x=V().crossVectors(up,d),m=new THREE.Matrix4().makeBasis(x,up,d),shard=add(head,new THREE.OctahedronGeometry(.17,0),M.hair,d.x*R,C+.08+d.y*R*.95,d.z*R*.96-.03);
      shard.quaternion.setFromRotationMatrix(m);shard.rotateZ((hash(seedN)-.5)*.5);shard.scale.set(wid*(.85+hash(seedN+1)*.3),len*(.85+hash(seedN+2)*.3),.42);};
    let n=seed;
    for(let i=0;i<9;i++)place((-.85+i*.21),.62+hash(n+i)*.12,2.1,1.25,n+=3);           // fringe over the forehead
    for(const s of [-1,1])for(let i=0;i<5;i++)place(s*(1.05+i*.32),.38+hash(n+i)*.2,2.3,1.3,n+=3);  // sides over the ears
    for(let i=0;i<7;i++)place(PI-.9+i*.3,.3+hash(n+i)*.25,2.4,1.35,n+=3);              // back
    for(let i=0;i<10;i++)place(i*.63,1.05+hash(n+i)*.25,1.8,1.5,n+=3);                 // crown
  }else if(st==='chunky'){
    for(let i=0;i<9;i++){const h=add(head,new THREE.DodecahedronGeometry(.22+(i%3)*.035,0),M.hair,-.4+(i%5)*.2,C+.5+Math.sin(i*1.7)*.09,.25-Math.floor(i/5)*.32);h.rotation.set(i*.4,i*.8,i*.6);h.scale.set(1.05,1.25,.85);}
    const quiff=cone(head,.27,.53,M.hair,-.19,C+.68,.23,4);quiff.rotation.z=-.43;
  }else if(st==='curly'){for(let i=0;i<34;i++){const ang=i*2.39996,r=.12+.42*Math.sqrt(i/34);add(head,new THREE.IcosahedronGeometry(.12,0),M.hair,Math.cos(ang)*r,C+.5+.12*Math.cos(r*2.5),Math.sin(ang)*r*.9-.04);}}
  else if(st==='long'){for(let i=0;i<13;i++){const ang=PI*.5+i/12*PI,lock=add(head,new THREE.OctahedronGeometry(.17,0),M.hair,Math.cos(ang)*.5,C-.25,Math.sin(ang)*.4-.12);lock.scale.set(.8,2.8,.7);}for(let i=0;i<6;i++){const f=add(head,new THREE.OctahedronGeometry(.13,0),M.hair,-.32+i*.13,C+.42,.4);f.scale.set(1,1.8,.5);f.rotation.x=.5;}}
  else if(st==='bun'){add(head,new THREE.IcosahedronGeometry(.2,1),M.hair,0,C+.62,-.22);}
}
function facialHair(rig,a,M,C){
  const {head}=rig;if(a.facialHair==='none')return;
  if(a.facialHair==='beard'){const chin=add(head,facet(new THREE.IcosahedronGeometry(.3,1),.08,9),M.hair,0,C-.36,.24);chin.scale.set(1.15,.75,.75);for(const s of [-1,1]){const side=ball(head,.15,M.hair,s*.36,C-.2,.26,6,5);side.scale.set(.8,1.5,.7);}}
  else if(a.facialHair==='mustache'){for(const s of [-1,1]){const m=box(head,.17,.05,.05,M.hair,s*.08,C-.16,.5,.02);m.rotation.z=s*-.22;}}
  else{const stub=mat(shade(a.skin,-.18),{rough:1});const g=facet(new THREE.IcosahedronGeometry(.31,1),.03,4);const s=add(head,g,stub,0,C-.3,.2);s.scale.set(1.18,.7,.8);}
}
function hatAndGlasses(rig,a,M,C,front){
  const {head}=rig;
  if(a.glasses!=='none'){const frame=mat('#c4a373',{rough:.3,metal:.7,flat:false});
    for(const s of [-1,1]){if(a.glasses==='round'){const ring=add(head,new THREE.TorusGeometry(.16,.02,6,20),frame,s*.2,C+.07,front);}
      else{for(const [w,h,x,y] of [[.32,.03,0,.11],[.32,.03,0,-.1],[.03,.22,-.155,0],[.03,.22,.155,0]])box(head,w,h,.03,frame,s*.2+x,C+.07+y,front,.01);}
      tube(head,[[s*.36,C+.09,front-.03],[s*.5,C+.09,.25],[s*.52,C+.08,0]],frame,.016);}
    tube(head,[[-.05,C+.1,front+.01],[0,C+.13,front+.03],[.05,C+.1,front+.01]],frame,.015);}
  if(a.hat==='cap'){const dome=ball(head,.6,M.accent,0,C+.22,-.03,10,6);dome.scale.set(1,.62,1);const brim=box(head,.7,.05,.42,M.accent,0,C+.3,.5,.02);brim.rotation.x=-.12;}
  else if(a.hat==='beanie'){const b=add(head,facet(new THREE.IcosahedronGeometry(.6,1),.03,5),M.accent,0,C+.25,-.03);b.scale.set(1,.72,1);add(head,new THREE.TorusGeometry(.56,.07,6,16),mat(shade(a.accent,-.12)),0,C+.12,-.03).rotation.x=PI/2;ball(head,.1,mat(shade(a.accent,.1)),0,C+.72,-.03,6,5);}
  else if(a.hat==='headphones'){const band=add(head,new THREE.TorusGeometry(.6,.04,6,20,PI),M.dark,0,C+.05,0);for(const s of [-1,1]){const cup=cyl(head,.17,.17,.12,M.accent,s*.6,C,0,12);cup.rotation.z=PI/2;}band.rotation.z=0;}
}
function creatureHead(rig,a,M,C){
  const {head}=rig,inner=M.accent,sp=a.species;
  if(sp!=='dragon'){const m=add(head,facet(new THREE.IcosahedronGeometry(.25,1),.05,2),M.skin,0,C-.2,.45);m.scale.set(1.35,.7,.82);
    const tip=ball(head,.065,M.dark,0,C-.08,.67,8,6);tip.scale.set(1.3,.8,.7);
    if(sp==='cat')for(const s of [-1,1])for(let i=-1;i<=1;i++)tube(head,[[s*.18,C-.18+i*.035,.62],[s*.5,C-.2+i*.08,.6]],mat('#efe2d2',{flat:false}),.005);}
  else{const snout=add(head,facet(new THREE.IcosahedronGeometry(.26,1),.06,6),M.skin,0,C-.18,.44);snout.scale.set(1.15,.72,1);for(const s of [-1,1])ball(head,.03,M.dark,s*.09,C-.08,.69,6,4);}
  for(const s of [-1,1]){
    if(sp==='fox'||sp==='cat'){const ear=cone(head,sp==='cat'?.19:.22,sp==='cat'?.36:.5,M.skin,s*.36,C+.62,-.05,4);ear.rotation.z=-s*.3;const e2=cone(head,.11,sp==='cat'?.22:.32,inner,s*.36,C+.6,.04,4);e2.rotation.z=-s*.3;}
    else if(sp==='bunny'){const ear=capsule(head,.1,.55,M.skin,s*.2,C+.92,-.05,6);ear.rotation.z=-s*.18;ear.scale.z=.55;const e2=capsule(head,.05,.45,inner,s*.2,C+.92,.0,5);e2.rotation.z=-s*.18;e2.scale.z=.4;}
    else if(sp==='bear'){ball(head,.17,M.skin,s*.4,C+.48,-.02,8,6);ball(head,.09,inner,s*.4,C+.48,.08,6,5);}
    else{const horn=cone(head,.08,.38,M.accent,s*.27,C+.6,-.1,5);horn.rotation.set(-.5,0,-s*.35);}
  }
}
function buildTail(rig,a,M){
  const {hips}=rig,sp=a.species,tail=grp(hips,0,.05,-.3);tail.rotation.x=-.5;rig.tail=tail;
  if(sp==='fox'){const t=add(tail,facet(new THREE.IcosahedronGeometry(.3,1),.08,3),M.skin,0,-.02,-.45);t.scale.set(.7,.7,1.7);const tipM=add(tail,new THREE.IcosahedronGeometry(.17,1),M.accent,0,.02,-.9);tipM.scale.set(.9,.9,1.1);}
  else if(sp==='cat'){tube(tail,[[0,0,0],[0,.05,-.4],[.1,.35,-.62],[.12,.58,-.52]],M.skin,.06);}
  else if(sp==='bunny'){ball(tail,.16,M.accent,0,0,-.08,8,6);}
  else if(sp==='bear'){ball(tail,.11,M.skin,0,0,-.05,6,5);}
  else{const t=cone(tail,.2,1.1,M.skin,0,0,-.55,6);t.rotation.x=-PI/2;for(let i=0;i<4;i++){const sp2=cone(tail,.07,.18,M.accent,0,.14-i*.02,-.15-i*.25,4);sp2.rotation.x=-.4;}}
}
function ledFace(rig,a,w,h,at){
  const tex=canvasTexture(512,288),plane=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({map:tex.texture,transparent:true,toneMapped:false}));
  plane.position.copy(at);rig.head.add(plane);rig.face={type:'led',tex,last:'',color:a.screen};
}

// ---------- Face drawing ----------
const q2=v=>Math.round(v*100)/100;
export function drawFace(rig,m,f,blink,gaze,t){
  const face=rig.face;
  if(face.type==='led')return drawLed(face,m,f,blink,gaze,t);
  for(let i=0;i<2;i++){const side=i===0?1:-1;rig.eyes[i].scale.y=Math.max(.08,f.eye*blink);rig.brows[i].rotation.z=side*f.brow;rig.brows[i].position.y=rig.plan.headC+.27+f.raise+(f.asym&&i===0?.05*f.asym:0)-Math.max(0,-f.brow)*.03;rig.pupils[i].position.set(gaze*.022,0,0);}
  const open=clamp(m.open+f.open*(1-m.open),0,1),key=[open,m.wide,m.round,m.teeth,m.tongue,f.smile].map(q2).join();if(key===face.last)return;face.last=key;
  const x=face.tex.ctx,cx=128,cy=50,w=52*m.wide*(1-m.round*.38)*(1+Math.max(0,f.smile)*.12),hgt=open*85,curve=f.smile*12*(1-open*.5);
  x.clearRect(0,0,256,128);x.lineCap='round';x.lineJoin='round';
  if(hgt<5){x.strokeStyle='#5c2721';x.lineWidth=6;x.beginPath();x.moveTo(cx-w,cy-curve);x.quadraticCurveTo(cx,cy+curve*1.1,cx+w,cy-curve);x.stroke();x.strokeStyle='rgba(140,62,52,.55)';x.lineWidth=4;x.beginPath();x.moveTo(cx-w*.55,cy+7-curve*.2);x.quadraticCurveTo(cx,cy+11+curve*.6,cx+w*.55,cy+7-curve*.2);x.stroke();}
  else{
    const r=m.round,top=cy-hgt*(.42+r*.08),bot=cy+hgt*(.62+r*.1),lx=cx-w,rx=cx+w,ly=cy-curve*.8;
    const outline=()=>{x.beginPath();x.moveTo(lx,ly);x.bezierCurveTo(cx-w*(.55-r*.25),top,cx+w*(.55-r*.25),top,rx,ly);x.bezierCurveTo(cx+w*(.6+r*.2),bot+curve*.4,cx-w*(.6+r*.2),bot+curve*.4,lx,ly);x.closePath();};
    outline();x.fillStyle='#2a0c0b';x.fill();x.save();x.clip();
    if(m.tongue>.05){x.fillStyle='#9c4643';x.beginPath();x.ellipse(cx,bot+hgt*.12,w*.5,hgt*(.18+m.tongue*.16),0,0,PI*2);x.fill();}
    if(m.teeth){x.fillStyle='#f4ebdf';x.fillRect(lx,top-4,w*2,Math.min(16,hgt*.26)+4);}
    x.restore();outline();x.strokeStyle='#6d2c25';x.lineWidth=4.5;x.stroke();
    x.strokeStyle='rgba(160,76,64,.75)';x.lineWidth=5;x.beginPath();x.moveTo(cx-w*.7,bot-hgt*.05);x.quadraticCurveTo(cx,bot+6,cx+w*.7,bot-hgt*.05);x.stroke();
  }
  face.tex.texture.needsUpdate=true;
}
function rr(x,cx,cy,w,h,r){x.beginPath();x.roundRect(cx-w/2,cy-h/2,w,h,Math.min(r,w/2,h/2));}
function drawLed(face,m,f,blink,gaze,t){
  const k=[m.open,m.wide,m.round,f.eye*blink,f.smile,f.brow,f.asym,gaze].map(q2).join()+f.emotion+(f.emotion==='idea'?Math.floor(t*6):0);if(k===face.last)return;face.last=k;
  const x=face.tex.ctx,col=face.color,W=512,H=288;x.clearRect(0,0,W,H);x.fillStyle=col;x.strokeStyle=col;x.lineCap='round';x.shadowColor=col;x.shadowBlur=14;
  const ey=118,eh=74*f.eye*blink,gx=gaze*16;
  for(const s of [-1,1]){
    const cx=256+s*104+gx,big=f.asym&&s===1?1.18:1,w=50*big,h=Math.max(6,eh*big);
    if(f.emotion==='happy'&&blink>.5){x.lineWidth=13;x.beginPath();x.arc(cx,ey+16,30,PI*1.1,PI*1.9);x.stroke();continue;}
    if(f.emotion==='surprised'){x.beginPath();x.ellipse(cx,ey,32*Math.min(1.2,blink*1.2),Math.max(5,40*blink),0,0,PI*2);x.fill();continue;}
    rr(x,cx,ey,w,h,14);x.fill();
    if(Math.abs(f.brow)>.05){x.save();x.globalCompositeOperation='destination-out';x.shadowBlur=0;const cut=Math.abs(f.brow)*80,inner=cx-s*w/2,outer=cx+s*w/2,topY=ey-h/2-2;x.beginPath();
      if(f.brow<0){x.moveTo(inner-s*4,topY);x.lineTo(inner-s*4,topY+cut);x.lineTo(outer+s*4,topY-2);}else{x.moveTo(outer+s*4,topY);x.lineTo(outer+s*4,topY+cut);x.lineTo(inner-s*4,topY-2);}x.closePath();x.fill();x.restore();}
    if(f.emotion==='idea'){const tw=.6+.4*Math.sin(t*9+s);x.lineWidth=5;x.beginPath();x.moveTo(cx+s*36,ey-58-8*tw);x.lineTo(cx+s*36,ey-38+8*tw);x.moveTo(cx+s*26-8*tw,ey-48);x.lineTo(cx+s*46+8*tw,ey-48);x.stroke();}
  }
  const my=214,open=clamp(m.open+f.open*(1-m.open),0,1);
  if(open<.08){x.lineWidth=10;const c=f.smile*20;x.beginPath();x.moveTo(256-40,my-c);x.quadraticCurveTo(256,my+c*1.3,256+40,my-c);x.stroke();}
  else if(m.round>.5){x.beginPath();x.ellipse(256,my,18+22*(1-m.round*.4),8+open*26,0,0,PI*2);x.fill();}
  else{rr(x,256,my,46+50*m.wide*(1-m.round*.3),8+open*38,12);x.fill();}
  x.shadowBlur=0;x.fillStyle='rgba(0,0,0,.16)';for(let y=0;y<H;y+=6)x.fillRect(0,y,W,2);
  face.tex.texture.needsUpdate=true;
}

// ---------- Two-bone IK ----------
const _t=V(),_p=V(),_d=V(),_q=V(),_u=V(),_e=V(),_h=V(),_f=V(),_w=V(),_x=V(),_y=V(),_m=new THREE.Matrix4();
// Aims shoulder→upper→fore so the effector (wrist + handOff along the forearm) reaches targetW, elbow toward poleW.
export function solveLimb(limb,targetW,poleW){
  const parent=limb.shoulder;parent.updateWorldMatrix(true,false);
  const T=parent.worldToLocal(_t.copy(targetW)),P=parent.worldToLocal(_p.copy(poleW)),S=limb.upper.position,a=limb.lenU,b=limb.lenF+limb.handOff;
  const dir=_d.copy(T).sub(S);let dist=dir.length();dir.normalize();dist=clamp(dist,Math.abs(a-b)+.02,a+b-.002);
  const cosA=clamp((a*a+dist*dist-b*b)/(2*a*dist),-1,1),sinA=Math.sqrt(1-cosA*cosA);
  const pole=_q.copy(P).sub(S);pole.addScaledVector(dir,-pole.dot(dir));if(pole.lengthSq()<1e-8){pole.set(0,0,-1).addScaledVector(dir,dir.z);}pole.normalize();
  const u=_u.copy(dir).multiplyScalar(cosA).addScaledVector(pole,sinA),E=_e.copy(S).addScaledVector(u,a),H=_h.copy(S).addScaledVector(dir,dist),f=_f.copy(H).sub(E).normalize();
  const w=_w.copy(f).addScaledVector(u,-f.dot(u));if(w.lengthSq()<1e-8)w.copy(pole).negate();w.normalize();
  const y=_y.copy(u).negate(),x=_x.crossVectors(y,w);_m.makeBasis(x,y,w);limb.upper.quaternion.setFromRotationMatrix(_m);
  limb.fore.rotation.set(-Math.acos(clamp(u.dot(f),-1,1)),0,0);
}
export function effector(limb,out=V()){limb.hand?limb.hand.updateWorldMatrix(true,false):limb.fore.updateWorldMatrix(true,false);return (limb.hand||limb.fore).localToWorld(out.set(0,limb.hand?-limb.handOff:-limb.lenF,0));}

// ---------- Gestures ----------
// Hand shapes: finger curl, index curl, thumb (negative extends it).
const SHAPES={relaxed:[.55,.45,.2],fist:[1.6,1.6,.9],point:[1.6,0,.7],open:[.05,0,-.35],thumbsup:[1.6,1.6,-1.4],cup:[.35,.25,.1]};
const backOut=k=>{const c=1.4;return 1+(c+1)*Math.pow(k-1,3)+c*Math.pow(k-1,2);};
// Each gesture returns arm targets in chest space ('c'), head space ('h') or world ('w'),
// with optional elbow pole (chest space), hand shape and wrist rotation, plus body offsets.
function gesture(name,l,d,g){
  const m=g.m,L=m.reach,beat=g.beat,dom=1,osc=(f,a=1)=>Math.sin(l*f)*a;
  switch(name){
    case 'explain':return {arms:[{c:[-m.sx*.7,m.sy-L*.62+beat*.1,L*.62+beat*.06],shape:'open',wrist:[-.5,0,.9]},{c:[m.sx*.7,m.sy-L*.6+beat*.12,L*.62+beat*.05],shape:'open',wrist:[-.5,0,-.9]}],head:{x:-beat*.06}};
    case 'wave':return {arms:[null,{c:[Math.max(m.sx*1.55,m.hw+.3),Math.min(m.sy+L*.85,m.ht-.15),L*.22],pole:[m.sx*2,m.sy-.4,-.4],shape:'open',wrist:[0,osc(10,.45),-.2]}],head:{z:-.07}};
    case 'point':return {arms:[null,{w:g.toCamera(L*1.05,.15),pole:[m.sx*1.5,m.sy-.7,-.6],shape:'point',wrist:[0,0,0]}],head:{x:-.03}};
    case 'point-screen':return {arms:[null,{w:g.toward(g.screen,L*1.02),pole:[m.sx*1.6,m.sy-.9,.5],shape:'point'}],look:'screen',chest:{y:.25}};
    case 'point-other':return {arms:[{w:g.toward(g.partner,L*1.02,0),pole:[-m.sx*1.6,m.sy-.9,-.4],shape:'point'},null],look:'partner'};
    case 'shrug':return {arms:[{c:[-m.sx*1.65,m.sy-L*.5,L*.45],pole:[-m.sx*2.4,m.sy-.8,-.4],shape:'open',wrist:[-.9,0,1.1]},{c:[m.sx*1.65,m.sy-L*.5,L*.45],pole:[m.sx*2,m.sy-.8,-.4],shape:'open',wrist:[-.9,0,-1.1]}],shoulders:.09,head:{z:.13,x:-.04}};
    case 'facepalm':return {arms:[{h:g.anchor('forehead',-.05,0,.06),pole:[-m.sx*1.8,m.sy-.6,.3],shape:'open',wrist:[.2,-.5,.4]},null],head:{x:.3,z:.06},chest:{x:.14},shoulders:.05};
    case 'think':return {arms:[{c:[m.sx*.25,m.sy-L*.62,L*.5],pole:[-m.sx*1.6,m.sy-.9,0],shape:'relaxed',wrist:[-.4,0,1.2]},{h:g.anchor('chin',.02,-.08,.06),pole:[m.sx*1.4,m.sy-1,.2],shape:'fist',wrist:[.3,0,-.6]}],head:{z:.12,y:-.1,x:.04},chest:{x:.06},eyesUp:1};
    case 'cheer':return {arms:[{c:[-Math.max(m.sx*1.1,m.hw+.2),m.sy+L*.95+osc(9,.06),L*.12],pole:[-m.sx*3,m.sy,-.3],shape:'fist'},{c:[Math.max(m.sx*1.1,m.hw+.2),m.sy+L*.95+osc(9+.5,.06),L*.12],pole:[m.sx*3,m.sy,-.3],shape:'fist'}],root:{y:Math.abs(Math.sin(l*6))*.12},head:{x:-.1}};
    case 'clap':{const gap=.05+.16*(.5+.5*Math.cos(l*13));return {arms:[{c:[-gap,m.sy-L*.35,L*.66],pole:[-m.sx*2,m.sy-.8,-.3],shape:'open',wrist:[0,-1.3,0]},{c:[gap,m.sy-L*.35,L*.66],pole:[m.sx*2,m.sy-.8,-.3],shape:'open',wrist:[0,1.3,0]}]};}
    case 'thumbsup':return {arms:[null,{c:[m.sx*.85,m.sy-L*.25,L*.62],pole:[m.sx*1.8,m.sy-1,-.3],shape:'thumbsup',wrist:[0,-.25,-.15]}],head:{z:-.08}};
    case 'crossarms':return {arms:[{c:[m.sx*.55,m.sy-L*.52,L*.42],pole:[-m.sx*1.6,m.sy-.9,.6],shape:'fist',wrist:[0,0,1.4]},{c:[-m.sx*.55,m.sy-L*.47,L*.5],pole:[m.sx*1.6,m.sy-.9,.6],shape:'fist',wrist:[0,0,-1.4]}],chest:{x:-.05},head:{x:-.06}};
    case 'handsup':return {arms:[{c:[-Math.max(m.sx*1.35,m.hw+.25),m.sy+L*.62,L*.35],pole:[-m.sx*3,m.sy-.4,-.3],shape:'open',wrist:[-1.2,0,.3]},{c:[Math.max(m.sx*1.35,m.hw+.25),m.sy+L*.62,L*.35],pole:[m.sx*3,m.sy-.4,-.3],shape:'open',wrist:[-1.2,0,-.3]}],chest:{x:-.1},root:{y:.06*Math.max(0,Math.sin(Math.min(l,.4)/.4*PI))}};
    case 'raise':return {arms:[null,{c:[Math.max(m.sx*.85,m.hw+.18),m.sy+L*.95,L*.2],pole:[m.sx*2.5,m.sy,-.3],shape:'point'}],head:{z:-.08,x:-.06}};
    case 'type':return {arms:[{c:[-m.sx*.55,m.sy-L*.72,L*.78],shape:'cup',wrist:[.9+osc(23,.25),0,0]},{c:[m.sx*.55,m.sy-L*.72,L*.78],shape:'cup',wrist:[.9+Math.sin(l*23+2)*.25,0,0]}],head:{x:.16},chest:{x:.08}};
    case 'press':{const at=Math.min(d*.45,1.2),tap=smooth((l-at)/.22)*(1-smooth((l-at-.4)/.3));return {arms:[null,{w:g.toward(g.key,L*(1.0-.12*(1-tap))),pole:[m.sx*1.8,m.sy-.6,-.4],shape:'point'}],chest:{x:.05+.07*tap,y:-.2},head:{x:.08},press:tap,look:'key'};}
    case 'nod':return {head:{x:osc(8,.14)}};
    case 'headshake':return {head:{y:osc(9,.3)}};
    case 'lean':return {chest:{x:.2},head:{x:.06},arms:[{c:[-m.sx*1.05,m.sy-L*.82,-.05],shape:'fist'},{c:[m.sx*1.05,m.sy-L*.82,-.05],shape:'fist'}]};
    case 'jump':{const squat=smooth(l/.22)*(1-smooth((l-.22)/.08)),air=Math.max(0,Math.sin(clamp((l-.28)/.55,0,1)*PI)),land=smooth((l-.83)/.08)*(1-smooth((l-.95)/.2));
      return {hips:{y:-.22*(squat+land*.8)},root:{y:.75*air},arms:[{c:[-m.sx*1.2,m.sy+L*.5*air-L*.4*squat,L*.2],pole:[-m.sx*3,m.sy,-.3],shape:'open'},{c:[m.sx*1.2,m.sy+L*.5*air-L*.4*squat,L*.2],pole:[m.sx*3,m.sy,-.3],shape:'open'}],head:{x:-.12*air}};}
    default:return {};
  }
}

const _fk=V(),_tg=V(),_pl=V(),_eu=new THREE.Euler(),_qa=new THREE.Quaternion(),_v1=V(),_v2=V();
// One animation frame for a character. ctx: {t, talk, beat, face, mouth, action, blink, look (world point), world points}.
export function animateCharacter(rig,ctx){
  const {t,talk,beat,face,action}=ctx,ph=rig.seed*.37,m=metrics(rig),k=action.k,ease=k<=0?0:k>=1?1:clamp(backOut(k),0,1.08);
  const g=gesture(action.name,action.local,action.dur,{m,beat,screen:ctx.screen,key:ctx.key,partner:ctx.partner,
    // Targets resolve lazily, after this frame's body and head pose, so hands land on where the face is now.
    anchor:(name,dx=0,dy=0,dz=0)=>()=>rig.head.localToWorld(V(rig.anchors[name].x+dx,rig.anchors[name].y+dy,rig.anchors[name].z+dz)),
    toward:(p,len,arm=1)=>()=>{const s=rig.arms[arm].shoulder.getWorldPosition(V());return s.add(p.clone().sub(s).normalize().multiplyScalar(len*rig.root.scale.y));},
    toCamera:(len,up)=>()=>{const s=rig.arms[1].shoulder.getWorldPosition(V());const d=ctx.camera.clone().sub(s);d.y=0;d.normalize();d.y=up;return s.add(d.normalize().multiplyScalar(len*rig.root.scale.y));}});
  // Body: breathing, weight shift, emotion posture, gesture offsets.
  const sad=face.emotion==='sad'?1:0,angry=face.emotion==='angry'?1:0;
  rig.root.position.y=ctx.baseY+(g.root?.y||0)*k*rig.root.scale.y;
  rig.hips.position.set(Math.sin(t*.55+ph)*.025,rig.plan.leg+(g.hips?.y||0)*k-sad*.03+Math.sin(t*1.7+ph)*.006,0);rig.hips.rotation.set(0,Math.sin(t*.4+ph)*.03,Math.sin(t*.55+ph)*.02);
  rig.chest.rotation.set((g.chest?.x||0)*k+angry*.06+sad*.08+talk*beat*.04,Math.sin(t*.65+ph)*.03+(g.chest?.y||0)*k,-Math.sin(t*.55+ph)*.015);
  rig.chest.scale.set(1,1+Math.sin(t*1.7+ph)*.012,1+Math.sin(t*1.7+ph)*.008);
  for(const arm of rig.arms)arm.shoulder.position.y=rig.plan.shoulderY+(g.shoulders||0)*k+sad*-.03;
  // Head: look target, emotion pose, speech nods, gesture offsets.
  rig.neck.updateWorldMatrix(true,false);const hp=rig.neck.getWorldPosition(_v1),look=(g.look&&ctx[g.look])?ctx[g.look]:ctx.look,lookW=look?_v2.copy(look).sub(hp):null;
  let yaw=0,pitch=0;if(lookW){const inv=_qa.copy(rig.chest.getWorldQuaternion(new THREE.Quaternion())).invert();lookW.applyQuaternion(inv);yaw=clamp(Math.atan2(lookW.x,lookW.z),-.9,.9);pitch=clamp(-Math.atan2(lookW.y,Math.hypot(lookW.x,lookW.z)),-.4,.4);}
  const hx=pitch*.6+face.down+(g.head?.x||0)*k+talk*(beat*.07+Math.sin(t*5.3+ph)*.015)+Math.sin(t*1.2+ph)*.02,hy=yaw*.75+(g.head?.y||0)*k+Math.sin(t*.7+ph)*.04,hz=face.tilt+(g.head?.z||0)*k+Math.sin(t*.8+ph)*.02;
  rig.neck.rotation.set(hx*.35,hy*.35,hz*.3);rig.head.rotation.set(hx*.65,hy*.65,hz*.7);
  // Arms: an FK base (relaxed, plus speech beats on the dominant hand), then IK toward the gesture target.
  rig.root.updateMatrixWorld(true);
  const domI=(rig.seed+Math.floor(ctx.cueIndex||0))%2;
  rig.arms.forEach((arm,i)=>{
    const s=arm.s,dom=i===domI?1:.45,lift=talk*dom*(.25+beat*.55);
    _eu.set(-.1-lift*.5-sad*-.04,0,s*(.12+.04*Math.sin(t*.9+ph+i)+angry*.05));arm.upper.quaternion.setFromEuler(_eu);arm.fore.rotation.set(-.28-lift*1.1-angry*.2,0,0);
    const spec=g.arms?.[i];let shape=SHAPES[talk>.2&&dom===1?'open':'relaxed'],wrist=[0,0,0];
    if(spec&&k>0){
      effector(arm,_fk);
      if(spec.c)rig.chest.localToWorld(_tg.set(...spec.c));else _tg.copy((spec.h||spec.w)());
      _tg.lerpVectors(_fk,_tg,ease);_tg.y+=Math.sin(PI*clamp(k,0,1))*.12*rig.root.scale.y*(1-ease);
      rig.chest.localToWorld(_pl.set(...(spec.pole||[s*1.4,rig.plan.shoulderY-1,-.7])));
      solveLimb(arm,_tg,_pl);shape=SHAPES[spec.shape||'relaxed'].map((v,j)=>lerp(shape[j],v,ease));wrist=(spec.wrist||[0,0,0]).map(v=>v*ease);
    }
    arm.hand.rotation.set(wrist[0],wrist[1],wrist[2]);
    arm.fingers.rotation.set(shape[0],0,0);arm.index.rotation.set(shape[1],0,0);arm.thumb.rotation.set(0,0,-s*shape[2]);
  });
  // Legs: planted feet, knees bend when the hips drop.
  rig.legs.forEach((leg,i)=>{const foot=rig.feet[i];foot.updateWorldMatrix(true,false);const ft=foot.getWorldPosition(_tg);rig.hips.updateWorldMatrix(true,false);rig.root.localToWorld(_pl.set(leg.s*.1,rig.plan.leg*.6,2));solveLimb(leg,ft,_pl);});
  if(rig.tail)rig.tail.rotation.set(-.5+Math.sin(t*2.2+ph)*.12,Math.sin(t*1.6+ph)*.35,0);
  if(rig.glow)rig.glow.emissiveIntensity=1.05+Math.sin(t*3+ph)*.15;
  return {press:(g.press||0)*k};
}
export function metrics(rig){
  const p=rig.plan,b=rig.kind==='bot'?1:rig.member.look.build,hs=rig.member.look.head,half=rig.kind==='bot'?.68:rig.kind==='robot'?.5:.56;
  // hw: head half-width and ht: head top, in chest space, so raised hands always clear the head.
  return {sx:p.shoulderX*b,sy:p.shoulderY,reach:p.upper+p.fore+p.hand,hw:half*hs,ht:p.neckY+p.headY+(p.headC+(rig.kind==='bot'?.47:.55))*hs};
}
// Rest head centre in world space (for cameras and look-at), independent of animation.
export function headWorld(rig,out=V()){rig.root.updateWorldMatrix(true,true);const p=rig.plan;return rig.root.localToWorld(out.set(0,p.leg+p.chestY+p.neckY+p.headY+p.headC*rig.member.look.head,0));}
export function disposeCharacter(rig){rig.root.traverse(o=>{o.geometry?.dispose();if(o.material){for(const mm of (Array.isArray(o.material)?o.material:[o.material])){mm.map?.dispose();mm.dispose();}}});rig.face?.tex.texture.dispose();}
