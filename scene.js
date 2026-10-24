import * as THREE from 'three';
import {RoundedBoxGeometry} from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import {EffectComposer} from 'three/examples/jsm/postprocessing/EffectComposer.js';
import {RenderPass} from 'three/examples/jsm/postprocessing/RenderPass.js';
import {UnrealBloomPass} from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import {OutputPass} from 'three/examples/jsm/postprocessing/OutputPass.js';
import {poseAt,mouthAt,clamp,smooth} from './dist/timeline.js';
import {SoftwareRenderer} from './software-renderer.js';

const PI=Math.PI;
function material(color,options={}){return new THREE.MeshStandardMaterial({color,roughness:.7,metalness:.05,...options})}
function box(parent,w,h,d,mat,x=0,y=0,z=0,r=.05){const o=new THREE.Mesh(new RoundedBoxGeometry(w,h,d,1,r),mat);o.position.set(x,y,z);o.castShadow=true;o.receiveShadow=true;parent.add(o);return o;}
function sphere(parent,r,mat,x,y,z,segments=12){const o=new THREE.Mesh(new THREE.SphereGeometry(r,segments,8),mat);o.position.set(x,y,z);o.castShadow=true;parent.add(o);return o;}
function group(parent,x=0,y=0,z=0){const o=new THREE.Group();o.position.set(x,y,z);parent.add(o);return o;}
function cyl(parent,a,b,h,mat,x,y,z,n=10){const o=new THREE.Mesh(new THREE.CylinderGeometry(a,b,h,n),mat);o.position.set(x,y,z);o.castShadow=true;o.receiveShadow=true;parent.add(o);return o;}
function line(parent,points,color,r=.018){const c=new THREE.CatmullRomCurve3(points.map(p=>new THREE.Vector3(...p)));const o=new THREE.Mesh(new THREE.TubeGeometry(c,14,r,6,false),material(color));parent.add(o);return o;}
function label(text,size=128,color='#ddd8ca',bg=null){const c=document.createElement('canvas');c.width=512;c.height=256;const x=c.getContext('2d');if(bg){x.fillStyle=bg;x.fillRect(0,0,512,256)}x.fillStyle=color;x.font=`600 ${size}px Arial`;x.textAlign='center';x.textBaseline='middle';x.fillText(text,256,130);const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;return t;}

function makeRen(parent){
  const root=group(parent,-1.32,.1,.35),body=group(root),skin=material('#c78a65',{flatShading:true}),hood=material('#8364c5',{flatShading:true}),dark=material('#19222d'),hairMat=material('#292026',{flatShading:true}),shoe=material('#d6cbb5'),detail=material('#b59ad8');
  const hips=group(body,0,1.1,0);box(hips,.72,.4,.51,dark,0,0,0,.12);
  const legs=[];for(const s of [-1,1]){const l=group(root,s*.235,1.12,0);cyl(l,.19,.17,.74,dark,0,-.34,0);box(l,.38,.22,.61,shoe,0,-.84,.1,.09);box(l,.39,.065,.62,material('#8e8e85'),0,-.935,.1,.02);for(let k=0;k<3;k++)box(l,.21,.02,.025,material('#f0e6d1'),0,-.72,.26+k*.065,.008);legs.push(l);}
  const torso=group(body,0,1.24,0);cyl(torso,.52,.43,1.16,hood,0,.54,0,8);box(torso,.7,.35,.14,detail,0,.24,.43,.09);line(torso,[[-.27,.28,.51],[0,.17,.53],[.27,.28,.51]],'#6f539f',.014);
  const hoodBack=sphere(torso,.49,hood,0,1.05,-.06);hoodBack.scale.set(1,.6,1);
  cyl(torso,.2,.21,.25,skin,0,1.21,0);
  for(const s of [-1,1]){line(torso,[[s*.18,1.1,.35],[s*.19,.78,.48],[s*.21,.56,.48]],'#d7c3ed',.017);box(torso,.04,.1,.04,detail,s*.21,.55,.48,.008);}
  const arms=[];for(const s of [-1,1]){const arm=group(torso,s*.47,1.02,0);const upper=cyl(arm,.23,.19,.62,hood,s*.08,-.25,0);upper.rotation.z=s*.16;const elbow=group(arm,s*.15,-.56,0);cyl(elbow,.19,.16,.5,hood,0,-.23,0);cyl(elbow,.165,.165,.12,detail,0,-.49,0);const hand=sphere(elbow,.18,skin,0,-.66,.01);hand.scale.set(.86,1.15,.9);sphere(elbow,.085,skin,-s*.12,-.61,.07);arms.push({arm,elbow});}
  const head=group(torso,0,1.62,0);
  const points=[new THREE.Vector2(.05,-.52),new THREE.Vector2(.34,-.48),new THREE.Vector2(.48,-.27),new THREE.Vector2(.54,.05),new THREE.Vector2(.51,.36),new THREE.Vector2(.35,.54),new THREE.Vector2(.05,.59)];
  const headMesh=new THREE.Mesh(new THREE.LatheGeometry(points,12),skin);headMesh.scale.set(1,1.05,.92);headMesh.castShadow=true;head.add(headMesh);
  for(const s of [-1,1]){sphere(head,.13,skin,s*.52,-.02,0);sphere(head,.065,material('#a7664f'),s*.55,-.02,.085);}
  const nose=sphere(head,.12,skin,0,-.08,.48,6);nose.scale.set(.75,1,1.2);
  const eyes=[],brows=[];for(const s of [-1,1]){
    const white=sphere(head,.117,material('#ede6d9'),s*.21,.07,.427);white.scale.set(1,1.12,.55);
    const eye=sphere(head,.065,material('#211b23',{roughness:.25}),s*.21,.06,.49);eye.scale.z=.5;eyes.push(eye);
    sphere(head,.017,material('#fff4e6'),s*.21-.016,.082,.523,8);
    const brow=box(head,.23,.065,.06,hairMat,s*.22,.25,.46,.025);brows.push(brow);
  }
  const mouth=group(head,0,-.28,.443);const mouthShape=box(mouth,.16,.045,.035,material('#633627'),0,0,0,.02);const teeth=box(mouth,.12,.023,.038,material('#f0dfce'),0,.006,.019,.01);
  const haircap=sphere(head,.53,hairMat,0,.26,-.04,10);haircap.scale.set(1,1,.87);
  for(let i=0;i<9;i++){const h=new THREE.Mesh(new THREE.DodecahedronGeometry(.22+(i%3)*.035,0),hairMat);h.position.set(-.4+(i%5)*.2,.52+Math.sin(i*1.7)*.09,.25-Math.floor(i/5)*.32);h.rotation.set(i*.4,i*.8,i*.6);h.scale.set(1.05,1.25,.85);h.castShadow=true;head.add(h);}
  const quiff=new THREE.Mesh(new THREE.ConeGeometry(.27,.53,4),hairMat);quiff.position.set(-.19,.7,.23);quiff.rotation.z=-.43;head.add(quiff);
  const glasses=group(head);for(const s of [-1,1]){const ring=new THREE.Mesh(new THREE.TorusGeometry(.17,.022,6,20),material('#c4a373',{metalness:.7,roughness:.3}));ring.position.set(s*.21,.07,.54);glasses.add(ring);line(glasses,[[s*.37,.09,.51],[s*.51,.09,.25],[s*.52,.08,0]],'#c4a373',.018);}line(glasses,[[-.05,.1,.55],[0,.13,.57],[.05,.1,.55]],'#c4a373',.017);
  return {root,body,torso,head,arms,legs,eyes,brows,mouthShape,teeth,glasses,hood};
}
function makeMica(parent){
  const root=group(parent,1.25,.235,.65),body=group(root),shell=material('#ee704e',{roughness:.42,metalness:.18}),trim=material('#493d39',{metalness:.65,roughness:.35}),cream=material('#ead8ad'),screen=material('#102322',{metalness:.2,roughness:.24}),glow=material('#94f3d4',{emissive:'#48b992',emissiveIntensity:1.1,roughness:.25});
  box(body,1.12,.78,.72,shell,0,1.0,0,.14);box(body,.8,.41,.08,trim,0,1.01,.385,.05);cyl(body,.11,.11,.02,cream,-.23,1.01,.45).rotation.x=PI/2;for(let i=0;i<3;i++)box(body,.22,.025,.03,cream,.17,.93+i*.08,.443,.008);
  const head=group(body,0,1.85,0);box(head,1.36,.94,.87,shell,0,0,0,.14);box(head,1.15,.7,.085,trim,0,.02,.455,.10);box(head,1.04,.58,.035,screen,0,.02,.51,.08);
  const eyes=[];for(const s of [-1,1])eyes.push(box(head,.19,.23,.025,glow,s*.255,.06,.539,.06));
  const mouth=box(head,.23,.025,.022,glow,0,-.14,.54,.01);
  for(const s of [-1,1]){cyl(head,.18,.18,.12,trim,s*.73,0,0).rotation.z=PI/2;cyl(head,.12,.12,.13,cream,s*.79,0,0).rotation.z=PI/2;for(const y of [-.32,.34])sphere(head,.032,trim,s*.52,y,.444,6);}
  cyl(head,.023,.023,.32,trim,.32,.61,0);const antenna=sphere(head,.09,glow,.32,.81,0);const light=new THREE.PointLight('#86e6c4',1,2);light.position.copy(antenna.position);head.add(light);
  const arms=[];for(const s of [-1,1]){const a=group(body,s*.65,1.28,0);sphere(a,.14,trim,0,0,0);cyl(a,.09,.09,.37,cream,0,-.22,0);const fore=group(a,0,-.41,0);sphere(fore,.12,trim,0,0,0);cyl(fore,.1,.1,.32,shell,0,-.19,0);const hand=group(fore,0,-.4,0);box(hand,.27,.2,.2,trim,0,0,0,.04);for(const f of [-1,1])box(hand,.065,.18,.1,cream,f*.1,-.13,.02,.025);arms.push({arm:a,elbow:fore});}
  const legs=[];for(const s of [-1,1]){const l=group(root,s*.32,.68,0);cyl(l,.1,.1,.35,trim,0,-.19,0);box(l,.43,.25,.6,shell,0,-.49,.1,.07);box(l,.45,.065,.63,trim,0,-.62,.1,.025);legs.push(l);}
  return {root,body,head,eyes,mouth,arms,legs,shell,antenna,glow};
}

export class FilmScene{
  constructor(canvas,project,options={}){
    this.canvas=canvas;this.project=project;this.w=540;this.h=960;this.time=0;this.manual=false;
    if(options.software){this.renderer=new SoftwareRenderer();}else{try{this.renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,preserveDrawingBuffer:true,powerPreference:'high-performance'});}catch{this.renderer=new SoftwareRenderer();}}this.renderer.setPixelRatio(1);this.renderer.setSize(540,960);this.renderer.shadowMap.enabled=true;this.renderer.shadowMap.type=THREE.PCFSoftShadowMap;this.renderer.toneMapping=THREE.ACESFilmicToneMapping;this.renderer.toneMappingExposure=1.13;
    this.out=canvas.getContext('2d',{alpha:false});this.scene=new THREE.Scene();this.scene.background=new THREE.Color('#101c23');this.scene.fog=new THREE.FogExp2('#111d24',.023);
    this.camera=new THREE.PerspectiveCamera(36,9/16,.1,100);this.controls=options.headless?{target:new THREE.Vector3(),update(){},dispose(){}}:new OrbitControls(this.camera,canvas);this.controls.enabled=false;this.controls.enableDamping=false;this.controls.target.set(0,2,0);this.controls.minDistance=3;this.controls.maxDistance=22;this.controls.maxPolarAngle=PI*.49;
    const hemi=new THREE.HemisphereLight('#bfdaed','#77533d',2.1);this.scene.add(hemi);
    this.key=new THREE.DirectionalLight('#ffdbad',4.5);this.key.position.set(-4,8,5);this.key.castShadow=true;this.key.shadow.mapSize.set(2048,2048);Object.assign(this.key.shadow.camera,{left:-9,right:9,top:10,bottom:-7,near:.5,far:30});this.key.shadow.normalBias=.035;this.key.shadow.bias=-.00025;this.key.shadow.radius=3;this.scene.add(this.key);
    const rim=new THREE.DirectionalLight('#ff914d',3);rim.position.set(5,5,-3);this.scene.add(rim);const fill=new THREE.DirectionalLight('#82bbd4',1.5);fill.position.set(4,3,5);this.scene.add(fill);
    const screenLight=new THREE.PointLight('#8bcecf',20,12,2);screenLight.position.set(0,4.5,-2.5);this.scene.add(screenLight);
    this.set=group(this.scene);this.makeSet();this.set.traverse(o=>o.userData.staticLayer=true);this.renderKey.userData.staticLayer=false;this.renderKeyLabel.userData.staticLayer=false;this.ren=makeRen(this.scene);this.mica=makeMica(this.scene);
    const sc=document.createElement('canvas');sc.width=sc.height=128;const sx=sc.getContext('2d'),sg=sx.createRadialGradient(64,64,8,64,64,64);sg.addColorStop(0,'rgba(12,14,20,.64)');sg.addColorStop(.4,'rgba(12,14,20,.35)');sg.addColorStop(1,'rgba(12,14,20,0)');sx.fillStyle=sg;sx.fillRect(0,0,128,128);const stx=new THREE.CanvasTexture(sc);for(const [px,pz] of [[-1.32,.4],[1.25,.7]]){const sh=new THREE.Mesh(new THREE.PlaneGeometry(2.1,1.6),new THREE.MeshBasicMaterial({map:stx,transparent:true,depthWrite:false}));sh.rotation.x=-PI/2;sh.position.set(px,.275,pz);sh.userData.staticLayer=true;this.scene.add(sh);}
    if(this.renderer.isSoftware){this.composer={render:()=>this.renderer.render(this.scene,this.camera),setSize:()=>{},dispose:()=>{}};}else{this.composer=new EffectComposer(this.renderer);this.composer.addPass(new RenderPass(this.scene,this.camera));this.bloom=new UnrealBloomPass(new THREE.Vector2(540,960),.24,.5,1.12);this.composer.addPass(this.bloom);this.composer.addPass(new OutputPass());}
    this.setProject(project);this.seek(0);
  }
  makeSet(){
    const wood=material('#594237',{roughness:.9}),edge=material('#292e31',{metalness:.35}),key=material('#b9b3a1',{roughness:.7}),keyDark=material('#58686b');
    box(this.set,16,.55,10,wood,0,-.55,-.4,.18);box(this.set,13,.25,6.1,edge,0,-.12,-.1,.18);
    for(let row=0;row<5;row++)for(let col=0;col<13;col++){
      const x=(col-6)*.89+(row%2)*.14,z=(row-2)*.89;
      const k=box(this.set,.79,.28,.74,(col===0||col===12)?keyDark:key,x,.12,z,.075);
      if(row<2||col<4||col>8){const tx=label('QWERTYUIOPASDFGHJKLZXCVBNM'[(row*13+col)%26],90,'#494e4d');const t=new THREE.Mesh(new THREE.PlaneGeometry(.25,.125),new THREE.MeshBasicMaterial({map:tx,transparent:true,depthWrite:false}));t.rotation.x=-PI/2;t.position.set(x,.266,z-.06);this.set.add(t);}
    }
    box(this.set,3.8,.25,.69,material('#a9957a'),0,.12,2.67,.06);
    // Large tactile render key, operated by Mica in the last act.
    this.renderKey=box(this.set,1.2,.33,1.1,material('#e79d58'),2.65,.16,1.85,.09);const keyText=new THREE.Mesh(new THREE.PlaneGeometry(.92,.46),new THREE.MeshBasicMaterial({map:label('GO',95,'#4b3222'),transparent:true}));keyText.rotation.x=-PI/2;keyText.position.set(2.65,.334,1.85);this.set.add(keyText);this.renderKeyLabel=keyText;
    const monitor=group(this.set,0,4.3,-4.4);box(monitor,11.8,6.9,.38,material('#262e35'),0,0,0,.23);box(monitor,11.5,6.6,.1,material('#0a1119'),0,0,.21,.14);
    this.screenCanvas=document.createElement('canvas');this.screenCanvas.width=1600;this.screenCanvas.height=900;this.screenCtx=this.screenCanvas.getContext('2d');this.screenTexture=new THREE.CanvasTexture(this.screenCanvas);this.screenTexture.colorSpace=THREE.SRGBColorSpace;const sm=new THREE.MeshBasicMaterial({map:this.screenTexture});const sp=new THREE.Mesh(new THREE.PlaneGeometry(11.13,6.22),sm);sp.position.set(0,.06,.278);monitor.add(sp);sphere(monitor,.045,material('#d3bd81',{emissive:'#a68955',emissiveIntensity:1}),0,-3.28,.25,8);box(this.set,.8,1.5,.45,edge,0,.3,-4.7,.08);
    // A desk lamp and physical props create scale and depth.
    const lamp=group(this.set,-6.5,0,-3);cyl(lamp,.65,.8,.15,edge,0,0,0,24);line(lamp,[[0,0,0],[0,3,0],[.8,5,0],[1.5,5.1,0]],'#94795b',.08);const shade=new THREE.Mesh(new THREE.ConeGeometry(.75,.65,20,1,true),material('#bd9870',{side:THREE.DoubleSide}));shade.position.set(1.5,4.8,0);lamp.add(shade);sphere(lamp,.22,material('#ffe4ba',{emissive:'#ffca86',emissiveIntensity:3}),1.5,4.5,0);const ll=new THREE.PointLight('#ffb971',32,14,2);ll.position.set(1.5,4.4,0);lamp.add(ll);
    const mug=group(this.set,6.5,0,0);cyl(mug,.7,.6,1.2,material('#417578'),0,.58,0,24);cyl(mug,.62,.62,.03,material('#251d16'),0,1.19,0,24);const handle=new THREE.Mesh(new THREE.TorusGeometry(.38,.13,8,20),material('#417578'));handle.position.set(.72,.7,0);mug.add(handle);
    // Soft, deliberately out-of-focus practical lights in the distance.
    const gc=document.createElement('canvas');gc.width=64;gc.height=64;const gx=gc.getContext('2d'),gr=gx.createRadialGradient(32,32,1,32,32,32);gr.addColorStop(0,'rgba(255,220,166,.8)');gr.addColorStop(.22,'rgba(255,175,92,.24)');gr.addColorStop(1,'rgba(255,175,92,0)');gx.fillStyle=gr;gx.fillRect(0,0,64,64);const gt=new THREE.CanvasTexture(gc);
    for(let i=0;i<26;i++){const s=new THREE.Sprite(new THREE.SpriteMaterial({map:gt,color:i%3?'#d79a62':'#86a7b3',transparent:true,depthWrite:false,opacity:.45,blending:THREE.AdditiveBlending}));s.position.set(Math.sin(i*13.1)*16,2+((i*7)%15),-9-Math.abs(Math.cos(i*8))*15);s.scale.setScalar(.4+(i%4)*.4);this.scene.add(s);}
    const geo=new THREE.BufferGeometry(),pos=[];for(let i=0;i<100;i++)pos.push(Math.sin(i*37)*13,1+(i%39)*.25,Math.cos(i*17)*10);geo.setAttribute('position',new THREE.Float32BufferAttribute(pos,3));this.dust=new THREE.Points(geo,new THREE.PointsMaterial({size:.025,color:'#e6c998',transparent:true,opacity:.45,depthWrite:false}));this.scene.add(this.dust);
  }
  setProject(p){this.project=p;this.ren.hood.color.set(p.humanColor);this.mica.shell.color.set(p.robotColor);this.ren.glasses.visible=p.glasses;this.key.intensity=3.7+p.warmth*.8;this.renderer.warmth=p.warmth;}
  setSize(w,h){this.w=w;this.h=h;this.canvas.width=w;this.canvas.height=h;this.renderer.setSize(w,h);this.composer.setSize(w,h);this.camera.aspect=w/h;this.camera.updateProjectionMatrix();}
  setManual(v){this.manual=v;this.controls.enabled=v;if(v){this.controls.target.copy(this.target||new THREE.Vector3(0,2,0));this.controls.update();}}
  drawScreen(st){const x=this.screenCtx,w=1600,h=900;x.fillStyle='#0c1824';x.fillRect(0,0,w,h);x.fillStyle='#142737';x.fillRect(0,0,w,75);x.fillStyle='#4f6877';for(let i=0;i<3;i++){x.beginPath();x.arc(38+i*29,37,7,0,PI*2);x.fill();}x.fillStyle='#88a0ab';x.font='22px monospace';x.fillText('STUDIO / THE LAST CONNECTION',160,45);x.strokeStyle='#203849';x.lineWidth=1;for(let i=0;i<12;i++){x.beginPath();x.moveTo(0,150+i*65);x.lineTo(w,150+i*65);x.stroke();}for(let i=0;i<20;i++){x.beginPath();x.moveTo(i*90,75);x.lineTo(i*90,h);x.stroke();}
    x.fillStyle='#112330';x.fillRect(270,180,1060,550);x.strokeStyle=st.t<14?'#80564c':'#547e77';x.lineWidth=2;x.strokeRect(270,180,1060,550);
    const local=st.t>=14,complete=st.t>=25;x.textAlign='center';x.fillStyle=local?'#b6e7d0':'#e7b09a';x.font='bold 28px monospace';x.fillText(complete?'TAKE 01 / READY':local?'LOCAL STUDIO':'CONNECTION LOST',800,265);
    x.font='bold 88px Arial';x.fillStyle=local?'#e2e9df':'#c8c6b8';x.fillText(complete?'Made. Together.':local?'Make it here.':'OFFLINE',800,400);
    x.fillStyle='#64808c';x.font='26px monospace';x.fillText(complete?'YOUR STORY IS READY TO LEAVE THE DESK':local?'A LITTLE IMAGINATION. ALL YOU NEED.':'THE CLOUD HAS LEFT THE CHAT.',800,468);
    x.fillStyle='#253c48';x.fillRect(420,550,760,14);x.fillStyle=local?'#a6d8b8':'#bc8264';x.fillRect(420,550,760*(local?st.progress:.04),14);x.font='20px monospace';x.fillText(local?`${Math.round(st.progress*100)}% RENDERED`:'WAITING FOR A MIRACLE…',800,615);x.textAlign='left';x.fillStyle='#42606d';x.font='18px monospace';x.fillText('REN + MICA',40,855);this.screenTexture.needsUpdate=true;
  }
  seek(t,{overlay=true}={}){
    this.time=t;const st=poseAt(this.project,t),r=this.ren,m=this.mica;const screenRevision=t<14?0:t<18?1:t<25?2+Math.floor((t-18)*4):31;if(!this.renderer.isSoftware||this.lastScreenRevision!==screenRevision){this.drawScreen(st);this.lastScreenRevision=screenRevision;}this.renderer.sceneRevision=screenRevision;this.dust.rotation.y=t*.006;
    r.body.position.y=Math.sin(t*2)*.018;r.torso.rotation.set(0,Math.sin(t*.65)*.028,Math.sin(t*.9)*.015);
    const mood=st.cue?.emotion||'curious',rt=st.renTalk,mt=st.micaTalk;
    r.head.rotation.set(Math.sin(t*1.2)*.035 + (mood==='worried'?-.035:0),.17+Math.sin(t*.7)*.055,-.035+Math.sin(t*.8)*.035);
    const blink=(Math.sin(t*1.91+1.3)>.991||Math.sin(t*1.3+4)>.997)?.1:1;
    for(let i=0;i<2;i++){r.eyes[i].scale.y=blink;r.brows[i].rotation.z=(i===0?1:-1)*(mood==='worried'?.21:mood==='idea'?-.1:0);r.brows[i].position.y=.25+(mood==='curious'&&i===0?.05:0);}
    const rm=mouthAt(this.project,t,'Ren');
    if(rm){r.mouthShape.scale.y=1+rm.open*3.8;r.mouthShape.scale.x=rm.wide+(mood==='happy'?.15:0);r.teeth.visible=Boolean(rm.teeth)||mood==='happy';}
    else{r.mouthShape.scale.y=1+rt*(2+Math.sin(t*18)*1.7);r.mouthShape.scale.x=1+rt*.2;r.teeth.visible=mood==='happy'||rt>.3;}
    r.arms.forEach(({arm,elbow},i)=>{const s=i===0?-1:1;arm.rotation.set(-.06-rt*(.28+Math.sin(t*4+i)*.14),0,s*(.08+rt*.2));elbow.rotation.set(-.13-rt*(.38+Math.sin(t*3+i)*.16),0,0);});
    if(mood==='worried'&&rt>.1){r.arms[0].arm.rotation.z=-.55*rt;r.arms[0].elbow.rotation.x=-1.8*rt;r.arms[0].arm.rotation.x=-.42*rt;}
    if(st.t>26){r.arms[1].arm.rotation.z=-.2*st.final;r.arms[1].arm.rotation.x=-.2;r.head.rotation.z=-.07;r.head.rotation.y=.2;}
    r.legs.forEach((l,i)=>{l.rotation.x=Math.sin(t*1.4+i)*.008});
    m.body.position.y=Math.sin(t*2.8)*.025;m.body.rotation.set(0,-.14+Math.sin(t*.8)*.035,Math.sin(t*1.7)*.025);
    m.head.rotation.set(Math.sin(t*1.8)*.035,-.12+Math.sin(t*.7)*.05,mood==='curious'?.13:Math.sin(t)*.035);
    m.eyes.forEach((e,i)=>{e.scale.y=blink*(mood==='happy'?.55:1)+(mood==='idea'?.25:0);e.rotation.z=mood==='worried'?(i?-.2:.2):0;});const mm=mouthAt(this.project,t,'Mica');
    if(mm){m.mouth.scale.x=mm.wide;m.mouth.scale.y=1+mm.open*5;}else{m.mouth.scale.x=1+mt*Math.sin(t*20)*.45;m.mouth.scale.y=1+mt*(1+Math.sin(t*16));}
    m.arms.forEach(({arm,elbow},i)=>{const s=i?1:-1;arm.rotation.set(-.15-mt*(.4+Math.sin(t*4+i)*.2),0,s*(.12+mt*.36));elbow.rotation.x=-.2-mt*.7;});
    if(st.t>14&&st.t<18.3){const e=st.energy;m.arms[1].arm.rotation.z=2.15*e;m.arms[1].elbow.rotation.x=-.6*e;m.head.rotation.z=-.07*e;}
    const tap=smooth((t-23.5)/.4)*(1-smooth((t-24.3)/.4));m.arms[1].arm.rotation.x-=tap*.9;m.arms[1].arm.rotation.z+=tap*.8;this.renderKey.position.y=.16-.08*tap;this.renderKeyLabel.position.y=.334-.08*tap;
    m.glow.emissiveIntensity=1.05+Math.sin(t*3)*.15+st.final*.4;
    if(!this.manual){
      const shots={wide:{p:[4.4,4.8,12.3],at:[0,2.05,.1],f:37},two:{p:[.1,4.1,11.6],at:[0,2.23,.4],f:37},ren:{p:[-.8,4.1,6.7],at:[-1.29,3.0,.25],f:33},mica:{p:[3.3,2.9,5.8],at:[1.3,1.9,.58],f:36}};
      const shot=shots[st.shot],drift=this.renderer.isSoftware?0:Math.sin(t*.23)*.1;this.camera.position.set(shot.p[0]+drift,shot.p[1],shot.p[2]-(this.renderer.isSoftware?0:.12*Math.sin(t*.3)));this.target=new THREE.Vector3(...shot.at);this.camera.lookAt(this.target);this.camera.fov=shot.f;this.camera.updateProjectionMatrix();
    }
    this.renderer.focusDistance=this.camera.position.distanceTo(this.manual?this.controls.target:this.target);this.composer.render();const x=this.out,w=this.w,h=this.h;x.drawImage(this.renderer.domElement,0,0,w,h);
    if(overlay)this.overlay(st);return st;
  }
  overlay(st){const x=this.out,w=this.w,h=this.h,s=w/540;
    const vignette=x.createRadialGradient(w*.5,h*.47,w*.25,w*.5,h*.48,h*.7);vignette.addColorStop(0,'#0000');vignette.addColorStop(1,'#05070c70');x.fillStyle=vignette;x.fillRect(0,0,w,h);
    // Small editorial opening and ending cards stay inside vertical safe margins.
    if(st.t<3.2){const a=smooth(st.t/.65)*smooth((3.2-st.t)/.65);x.save();x.globalAlpha=a;x.fillStyle='#e6c9aa';x.textAlign='center';x.font=`500 ${11*s}px Arial`;x.letterSpacing=`${2*s}px`;x.fillText('AN EMBER TAKE ORIGINAL',w/2,h*.09);x.letterSpacing='0px';x.font=`${35*s}px Georgia`;x.fillStyle='#f4e9d6';const words=this.project.title.split(' '),lines=[];let row='';for(const word of words){if(x.measureText(row+' '+word).width>w*.8&&row){lines.push(row);row=word;}else row+=(row?' ':'')+word;}lines.push(row);lines.slice(0,3).forEach((l,i)=>x.fillText(l,w/2,h*(.14+i*.045)));x.restore();}
    if(this.project.captions&&st.cue){const max=w*.79,words=st.cue.text.split(' '),lines=[];x.font=`600 ${20*s}px Arial`;let line='';for(const word of words){const test=line?line+' '+word:word;if(x.measureText(test).width>max&&line){lines.push(line);line=word}else line=test;}if(line)lines.push(line);const bh=(43+lines.length*27)*s,y=h*.83-bh*.5;x.fillStyle='rgba(10,18,23,.87)';x.beginPath();x.roundRect(w*.075,y,w*.85,bh,9*s);x.fill();x.textAlign='center';x.font=`bold ${10*s}px Arial`;x.fillStyle=st.cue.speaker==='Ren'?'#d0b7ef':'#eeb48d';x.fillText(st.cue.speaker.toUpperCase(),w/2,y+22*s);x.font=`600 ${20*s}px Arial`;x.fillStyle='#eee9dc';lines.forEach((l,i)=>x.fillText(l,w/2,y+(48+i*27)*s));}
    if(st.t>29){const a=smooth((st.t-29)/.7);x.save();x.globalAlpha=a;x.fillStyle='#122125';x.fillRect(0,0,w,h);x.textAlign='center';x.fillStyle='#d6b088';x.font=`${12*s}px Arial`;x.fillText('REN + MICA',w/2,h*.39);x.fillStyle='#ece5d5';x.font=`${38*s}px Georgia`;x.fillText('Made. Together.',w/2,h*.47);x.font=`${13*s}px Arial`;x.fillStyle='#9aafaa';x.fillText('A little imagination goes a long way.',w/2,h*.525);x.restore();}
  }
  dispose(){this.controls.dispose();this.scene.traverse(o=>{o.geometry?.dispose();if(o.material){for(const m of Array.isArray(o.material)?o.material:[o.material])m.dispose();}});this.composer.dispose();this.renderer.dispose();}
}
