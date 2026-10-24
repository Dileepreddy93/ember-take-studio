import * as THREE from 'three';
import {RoundedBoxGeometry} from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import {EffectComposer} from 'three/examples/jsm/postprocessing/EffectComposer.js';
import {RenderPass} from 'three/examples/jsm/postprocessing/RenderPass.js';
import {UnrealBloomPass} from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import {BokehPass} from 'three/examples/jsm/postprocessing/BokehPass.js';
import {ShaderPass} from 'three/examples/jsm/postprocessing/ShaderPass.js';
import {OutputPass} from 'three/examples/jsm/postprocessing/OutputPass.js';
import {poseAt,mouthAt,faceAt,actionAt,screenAt,wordAt,clamp,smooth,lerp} from './dist/timeline.js';
import {SoftwareRenderer} from './software-renderer.js';

const PI=Math.PI;
function material(color,options={}){return new THREE.MeshStandardMaterial({color,roughness:.7,metalness:.05,...options})}
function box(parent,w,h,d,mat,x=0,y=0,z=0,r=.05){const o=new THREE.Mesh(new RoundedBoxGeometry(w,h,d,1,r),mat);o.position.set(x,y,z);o.castShadow=true;o.receiveShadow=true;parent.add(o);return o;}
function sphere(parent,r,mat,x,y,z,segments=12){const o=new THREE.Mesh(new THREE.SphereGeometry(r,segments,8),mat);o.position.set(x,y,z);o.castShadow=true;parent.add(o);return o;}
function group(parent,x=0,y=0,z=0){const o=new THREE.Group();o.position.set(x,y,z);parent.add(o);return o;}
function cyl(parent,a,b,h,mat,x,y,z,n=10){const o=new THREE.Mesh(new THREE.CylinderGeometry(a,b,h,n),mat);o.position.set(x,y,z);o.castShadow=true;o.receiveShadow=true;parent.add(o);return o;}
function line(parent,points,color,r=.018){const c=new THREE.CatmullRomCurve3(points.map(p=>new THREE.Vector3(...p)));const o=new THREE.Mesh(new THREE.TubeGeometry(c,14,r,6,false),material(color));parent.add(o);return o;}
function label(text,size=128,color='#ddd8ca',bg=null){const c=document.createElement('canvas');c.width=512;c.height=256;const x=c.getContext('2d');if(bg){x.fillStyle=bg;x.fillRect(0,0,512,256)}x.fillStyle=color;x.font=`600 ${size}px Arial`;x.textAlign='center';x.textBaseline='middle';x.fillText(text,256,130);const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;return t;}
function canvasTexture(w,h){const c=document.createElement('canvas');c.width=w;c.height=h;const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;return {canvas:c,ctx:c.getContext('2d'),texture:t};}

// Body actions as arm/head/body targets. Arm z is mirrored per side; x swings forward, e bends the elbow.
const ACT={
  wave:l=>({arms:[null,{x:-.25,z:2.5+.28*Math.sin(l*11),e:-.9}],head:{z:-.06}}),
  point:()=>({arms:[null,{x:-1.45,z:.22,e:-.12}],head:{x:-.03}}),
  shrug:l=>({arms:[{x:-.35,z:.55,e:-1.45},{x:-.35,z:.55,e:-1.45}],head:{z:.12},body:{y:.05*Math.sin(Math.min(l,1)*PI)}}),
  facepalm:()=>({arms:[{x:-.55,z:.62,e:-2.15},null],head:{x:.2,z:.05}}),
  think:()=>({arms:[null,{x:-.45,z:.32,e:-2.25}],head:{z:.1,y:-.12,x:-.05}}),
  cheer:l=>({arms:[{x:-.15,z:2.55,e:-.35},{x:-.15,z:2.55,e:-.35}],body:{y:.14*Math.abs(Math.sin(l*7))}}),
  nod:l=>({head:{x:.14*Math.sin(l*8)}}),
  headshake:l=>({head:{y:.28*Math.sin(l*9)}}),
  lean:()=>({body:{lean:.16},head:{x:.08}}),
  jump:l=>{const h=Math.max(0,Math.sin(clamp(l/.6,0,1)*PI));return {body:{y:.55*h},arms:[{x:-.2,z:1.4*h+.2,e:-.4},{x:-.2,z:1.4*h+.2,e:-.4}]};},
  type:l=>({arms:[{x:-1.15,z:.12,e:-.55+.18*Math.sin(l*22)},{x:-1.15,z:.12,e:-.55+.18*Math.sin(l*22+2)}],head:{x:.12}}),
  press:(l,d)=>{const at=Math.min(d*.45,1.2),tap=smooth((l-at)/.22)*(1-smooth((l-at-.4)/.3));return {arms:[null,{x:-1-tap*.5,z:.35+tap*.4,e:-.5+tap*.3}],head:{x:.1*tap},press:tap};},
  raise:()=>({arms:[null,{x:-.1,z:2.15,e:-.6}],head:{z:-.07}})
};
// Camera shots: position, look-at, field of view, depth-of-field aperture.
const SHOTS={
  wide:{p:[4.4,4.8,12.3],at:[0,2.05,.1],f:37,ap:.0007},two:{p:[.1,4.1,11.6],at:[0,2.23,.4],f:37,ap:.0012},
  ren:{p:[-.8,4.1,6.7],at:[-1.29,3.0,.25],f:33,ap:.0025},mica:{p:[3.3,2.9,5.8],at:[1.3,1.9,.58],f:36,ap:.0025},
  'ren-cu':{p:[-1.0,3.3,3.9],at:[-1.3,3.0,.35],f:30,ap:.0045},'mica-cu':{p:[1.85,2.4,3.6],at:[1.25,2.1,.65],f:32,ap:.0045},
  'ren-ots':{p:[2.6,3.3,3.7],at:[-1.3,2.95,.35],f:31,ap:.0042},'mica-ots':{p:[-2.9,3.9,3.7],at:[1.25,2.05,.6],f:31,ap:.0042},
  screen:{p:[.3,4.9,7.2],at:[0,4.15,-4.4],f:44,ap:.0018}
};
const GRADE={uniforms:{tDiffuse:{value:null},time:{value:0},grain:{value:.032},warmth:{value:1}},
  vertexShader:'varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
  fragmentShader:'uniform sampler2D tDiffuse;uniform float time,grain,warmth;varying vec2 vUv;float h(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);}void main(){vec3 c=texture2D(tDiffuse,vUv).rgb;c=(c-.5)*1.06+.5;c*=vec3(1.+.03*warmth,1.,1.-.035*warmth);float l=dot(c,vec3(.299,.587,.114));c=mix(vec3(l),c,1.08);c+=(h(vUv*vec2(1080.,1920.)+fract(time*7.13)*91.7)-.5)*grain;gl_FragColor=vec4(clamp(c,0.,1.),1.);}'};
const TONES={alert:{edge:'#80564c',kick:'#e7b09a',title:'#d8cbbd',bar:'#bc8264'},calm:{edge:'#547e77',kick:'#b6e7d0',title:'#e2e9df',bar:'#a6d8b8'},success:{edge:'#5d8a5a',kick:'#c4ebaa',title:'#eef6e4',bar:'#9fd88a'},info:{edge:'#4f6f8f',kick:'#a9c8ee',title:'#e1e8f2',bar:'#8fb7e6'}};

function makeRen(parent,appearance={}){
  const a={kind:'human',species:'fox',height:1,build:1,headWidth:1,hairStyle:'textured',eyeColor:'#3b2b24',outfit:'hoodie',pantsColor:'#19222d',shoeColor:'#d6cbb5',facialHair:'none',...appearance};
  const root=group(parent,-1.32,.1,.35),body=group(root),skin=material('#c78a65',{roughness:a.kind==='robot'?.35:a.kind==='creature'?1:.82,metalness:a.kind==='robot'?.62:0}),hood=material('#8364c5',{roughness:.89}),dark=material(a.pantsColor,{roughness:.9}),hairMat=material('#292026',{roughness:.96}),shoe=material(a.shoeColor,{roughness:.75}),detail=material('#b59ad8');
  root.scale.y=a.height;body.scale.x=a.build;
  const hips=group(body,0,1.1,0);box(hips,.72,.4,.51,dark,0,0,0,.12);
  const legs=[];for(const s of [-1,1]){const l=group(root,s*.235,1.12,0);cyl(l,.19,.17,.74,dark,0,-.34,0);box(l,.38,.22,.61,shoe,0,-.84,.1,.09);box(l,.39,.065,.62,material('#8e8e85'),0,-.935,.1,.02);for(let k=0;k<3;k++)box(l,.21,.02,.025,material('#f0e6d1'),0,-.72,.26+k*.065,.008);legs.push(l);}
  const torso=group(body,0,1.24,0);cyl(torso,.52,.43,1.16,hood,0,.54,0,24);
  if(a.outfit==='hoodie'){
    box(torso,.7,.35,.14,detail,0,.24,.43,.09);line(torso,[[-.27,.28,.51],[0,.17,.53],[.27,.28,.51]],'#6f539f',.014);
    const hoodBack=sphere(torso,.49,hood,0,1.05,-.06,24);hoodBack.scale.set(1,.6,1);
    for(const s of [-1,1]){line(torso,[[s*.18,1.1,.35],[s*.19,.78,.48],[s*.21,.56,.48]],'#d7c3ed',.017);box(torso,.04,.1,.04,detail,s*.21,.55,.48,.008);}
  }else if(a.outfit==='jacket'){
    const trim=material('#d8c8b3');box(torso,.11,.99,.055,trim,0,.54,.46,.018);
    for(const s of [-1,1]){box(torso,.28,.36,.055,detail,s*.29,.34,.43,.025);box(torso,.12,.42,.045,trim,s*.13,.83,.44,.018);}
  }else{const seam=material('#d4c7b6');line(torso,[[-.22,1.08,.28],[0,1.01,.43],[.22,1.08,.28]],'#d4c7b6',.012);box(torso,.19,.025,.025,seam,0,.45,.44,.008);}
  cyl(torso,.2,.21,.25,skin,0,1.21,0);
  const arms=[];for(const s of [-1,1]){const arm=group(torso,s*.47,1.02,0);const upper=cyl(arm,.23,.19,.62,hood,s*.08,-.25,0);upper.rotation.z=s*.16;const elbow=group(arm,s*.15,-.56,0);cyl(elbow,.19,.16,.5,hood,0,-.23,0);cyl(elbow,.165,.165,.12,detail,0,-.49,0);const hand=sphere(elbow,.18,skin,0,-.66,.01);hand.scale.set(.86,1.15,.9);sphere(elbow,.085,skin,-s*.12,-.61,.07);arms.push({arm,elbow});}
  const head=group(torso,0,1.62,0);head.scale.x=a.headWidth;
  const points=[new THREE.Vector2(.05,-.52),new THREE.Vector2(.34,-.48),new THREE.Vector2(.48,-.27),new THREE.Vector2(.54,.05),new THREE.Vector2(.51,.36),new THREE.Vector2(.35,.54),new THREE.Vector2(.05,.59)];
  const headMesh=a.kind==='robot'?box(head,1.08,1.12,.91,skin,0,.03,-.02,.17):new THREE.Mesh(new THREE.LatheGeometry(points,32),skin);if(a.kind!=='robot'){headMesh.scale.set(1,1.05,.92);headMesh.castShadow=true;head.add(headMesh);}
  if(a.kind!=='robot'){const cheek=material('#a7664f');for(const s of [-1,1]){sphere(head,.13,skin,s*.52,-.02,0);sphere(head,.065,cheek,s*.55,-.02,.085);}}
  if(a.kind!=='robot'){const nose=sphere(head,.12,skin,0,-.08,.48,12);nose.scale.set(.75,1,1.2);}
  const eyes=[],pupils=[],brows=[];for(const s of [-1,1]){
    const eye=group(head,s*.21,.07,a.kind==='robot'?.14:0);eyes.push(eye);
    const white=sphere(eye,.117,material(a.kind==='robot'?a.eyeColor:'#ede6d9',a.kind==='robot'?{emissive:a.eyeColor,emissiveIntensity:1.2,roughness:.2}:{}),0,0,.427);white.scale.set(1,1.12,.55);
    const pupil=group(eye);pupils.push(pupil);const iris=sphere(pupil,.065,material(a.kind==='robot'?'#15302e':a.eyeColor,{roughness:.25}),0,-.01,.49,20);iris.scale.z=.5;
    sphere(pupil,.017,material('#fff4e6',{emissive:'#fff4e6',emissiveIntensity:.4}),-.016,.012,.523,8);
    const brow=box(head,.23,.065,.06,hairMat,s*.22,.25,.46,.025);brow.visible=a.kind!=='robot';brows.push(brow);
  }
  // Drawn mouth on a curved decal that follows the jaw: lips, teeth, tongue and expression curve.
  const mouthTex=canvasTexture(256,128),R=.5,arc=.8,geo=new THREE.CylinderGeometry(R,R,.2,12,1,true,-arc/2,arc);geo.translate(0,0,-R);
  const mouth=new THREE.Mesh(geo,new THREE.MeshStandardMaterial({map:mouthTex.texture,transparent:true,alphaTest:.04,roughness:.55,depthWrite:false,polygonOffset:true,polygonOffsetFactor:-2}));
  mouth.position.set(0,-.27,a.kind==='robot'?.61:.458);mouth.rotation.x=.2;mouth.renderOrder=2;head.add(mouth);
  if(a.kind==='human'&&a.hairStyle!=='bald'){
    const haircap=sphere(head,.54,hairMat,0,.29,-.055,32);haircap.scale.set(1,a.hairStyle==='short'?.61:.87,.9);
    if(a.hairStyle==='textured'||a.hairStyle==='curly'){
      const count=a.hairStyle==='curly'?28:13;
      for(let i=0;i<count;i++){const angle=i*2.39996,r=.1+.38*Math.sqrt(i/count),h=sphere(head,a.hairStyle==='curly'?.13:.17,hairMat,Math.cos(angle)*r,.51+.08*Math.sin(i*1.7),Math.sin(angle)*r+.05,12);h.scale.set(1,.9,1);}
    }
    if(a.hairStyle==='long'){
      for(let i=0;i<15;i++){const angle=PI+i*PI/14,s=Math.sin(angle),c=Math.cos(angle);const lock=sphere(head,.19,hairMat,c*.42,-.02+s*.1,s*.34-.06,16);lock.scale.set(.7,2.7,.8);}
      for(let i=0;i<7;i++){const lock=sphere(head,.12,hairMat,-.36+i*.12,.45,.36,14);lock.scale.set(.8,1.6,.8);}
    }
    if(a.hairStyle==='textured'){const quiff=sphere(head,.22,hairMat,-.18,.67,.23,16);quiff.scale.set(1.1,1.3,.9);}
  }
  let beardMat;
  if(a.kind==='human'&&a.facialHair!=='none'){
    const beard=beardMat=material('#292026',{roughness:1});
    if(a.facialHair==='beard'){const chin=sphere(head,.29,beard,0,-.37,.29,24);chin.scale.set(1,.68,.65);for(const s of [-1,1]){const side=sphere(head,.16,beard,s*.33,-.28,.32,20);side.scale.set(.85,1.6,.6);}}
    else for(let i=0;i<20;i++){const x=(i%5-2)*.085,y=-.28-Math.floor(i/5)*.055;const dot=sphere(head,.012,beard,x,y,.465-Math.abs(x)*.12,6);dot.scale.z=.35;}
  }
  if(a.kind==='robot'){
    const metal=material('#424950',{metalness:.82,roughness:.27}),lit=material(a.eyeColor,{emissive:a.eyeColor,emissiveIntensity:.7,roughness:.2});
    box(head,.93,.43,.08,material('#172629',{metalness:.35,roughness:.22}),0,.06,.48,.1);
    box(head,.85,.07,.035,metal,0,.38,.47,.02);for(const s of [-1,1]){cyl(head,.14,.14,.12,metal,s*.57,.09,0,16).rotation.z=PI/2;sphere(head,.055,lit,s*.6,.09,.01,12);}
    cyl(head,.025,.025,.3,metal,.28,.68,-.03,12);sphere(head,.085,lit,.28,.86,-.03,16);
    for(const s of [-1,1]){sphere(torso,.16,metal,s*.49,1.02,0,16);sphere(torso,.13,metal,s*.6,.46,0,16);}
  }
  if(a.kind==='creature'){
    const inner=material(a.species==='dragon'?'#ad7658':'#d99a93',{roughness:1});
    for(const s of [-1,1]){
      const ear=new THREE.Mesh(new THREE.ConeGeometry(a.species==='dragon'?.18:.22,a.species==='cat'?.42:.54,20),skin);ear.position.set(s*.38,.77,-.08);ear.rotation.z=-s*.2;ear.castShadow=true;head.add(ear);
      if(a.species!=='dragon'){const inset=new THREE.Mesh(new THREE.ConeGeometry(.105,.31,16),inner);inset.position.set(s*.38,.77,.06);inset.rotation.z=-s*.2;head.add(inset);}
    }
    if(a.species==='fox'||a.species==='cat'){
      const muzzle=sphere(head,.22,skin,0,-.17,.48,24);muzzle.scale.set(1.3,.63,.8);
      const tip=sphere(head,.07,hairMat,0,-.09,.655,16);tip.scale.set(1.2,.75,.7);
      if(a.species==='cat')for(const s of [-1,1])for(let i=-1;i<=1;i++)line(head,[[s*.14,-.18+i*.04,.59],[s*.49,-.2+i*.08,.61]],'#e7cfb9',.006);
    }
    const tail=group(root,0,1.18,-.38);tail.rotation.x=-.6;
    if(a.species==='cat'){line(tail,[[0,0,0],[0,.04,-.4],[.11,.35,-.65],[.15,.55,-.57]],'#292026',.065);}
    else{const t=sphere(tail,a.species==='dragon'?.24:.36,a.species==='dragon'?skin:hairMat,0,.03,-.54,20);t.scale.set(.55,.6,a.species==='dragon'?2.2:1.6);t.rotation.x=.35;}
    if(a.species==='dragon')for(let i=0;i<5;i++){const spike=new THREE.Mesh(new THREE.ConeGeometry(.12,.28,12),hairMat);spike.position.set(0,1.42+i*.3,-.45);spike.rotation.x=.7;root.add(spike);}
  }
  const glasses=group(head);for(const s of [-1,1]){const ring=new THREE.Mesh(new THREE.TorusGeometry(.17,.022,6,20),material('#c4a373',{metalness:.7,roughness:.3}));ring.position.set(s*.21,.07,.54);glasses.add(ring);line(glasses,[[s*.37,.09,.51],[s*.51,.09,.25],[s*.52,.08,0]],'#c4a373',.018);}line(glasses,[[-.05,.1,.55],[0,.13,.57],[.05,.1,.55]],'#c4a373',.017);
  return {root,body,torso,head,arms,legs,eyes,pupils,brows,mouthTex,glasses,hood,skin,hairMat,beardMat};
}
function makeMica(parent){
  const root=group(parent,1.25,.235,.65),body=group(root),shell=material('#ee704e',{roughness:.42,metalness:.18}),trim=material('#493d39',{metalness:.65,roughness:.35}),cream=material('#ead8ad'),screen=material('#102322',{metalness:.2,roughness:.24}),glow=material('#94f3d4',{emissive:'#48b992',emissiveIntensity:1.1,roughness:.25});
  box(body,1.12,.78,.72,shell,0,1.0,0,.14);box(body,.8,.41,.08,trim,0,1.01,.385,.05);cyl(body,.11,.11,.02,cream,-.23,1.01,.45).rotation.x=PI/2;for(let i=0;i<3;i++)box(body,.22,.025,.03,cream,.17,.93+i*.08,.443,.008);
  const head=group(body,0,1.85,0);box(head,1.36,.94,.87,shell,0,0,0,.14);box(head,1.15,.7,.085,trim,0,.02,.455,.10);box(head,1.04,.58,.035,screen,0,.02,.51,.08);
  // LED face: eyes and mouth are drawn every frame, so every emotion and mouth shape is available.
  const faceTex=canvasTexture(512,288),face=new THREE.Mesh(new THREE.PlaneGeometry(.98,.54),new THREE.MeshBasicMaterial({map:faceTex.texture,transparent:true,toneMapped:false}));face.position.set(0,.02,.531);head.add(face);
  for(const s of [-1,1]){cyl(head,.18,.18,.12,trim,s*.73,0,0).rotation.z=PI/2;cyl(head,.12,.12,.13,cream,s*.79,0,0).rotation.z=PI/2;for(const y of [-.32,.34])sphere(head,.032,trim,s*.52,y,.444,6);}
  cyl(head,.023,.023,.32,trim,.32,.61,0);const antenna=sphere(head,.09,glow,.32,.81,0);const light=new THREE.PointLight('#86e6c4',1,2);light.position.copy(antenna.position);head.add(light);
  const arms=[];for(const s of [-1,1]){const a=group(body,s*.65,1.28,0);sphere(a,.14,trim,0,0,0);cyl(a,.09,.09,.37,cream,0,-.22,0);const fore=group(a,0,-.41,0);sphere(fore,.12,trim,0,0,0);cyl(fore,.1,.1,.32,shell,0,-.19,0);const hand=group(fore,0,-.4,0);box(hand,.27,.2,.2,trim,0,0,0,.04);for(const f of [-1,1])box(hand,.065,.18,.1,cream,f*.1,-.13,.02,.025);arms.push({arm:a,elbow:fore});}
  const legs=[];for(const s of [-1,1]){const l=group(root,s*.32,.68,0);cyl(l,.1,.1,.35,trim,0,-.19,0);box(l,.43,.25,.6,shell,0,-.49,.1,.07);box(l,.45,.065,.63,trim,0,-.62,.1,.025);legs.push(l);}
  return {root,body,head,faceTex,arms,legs,shell,antenna,glow,light};
}
function roundRect(x,cx,cy,w,h,r){x.beginPath();x.roundRect(cx-w/2,cy-h/2,w,h,Math.min(r,w/2,h/2));}
const q=v=>Math.round(v*100)/100;

export class FilmScene{
  constructor(canvas,project,options={}){
    this.canvas=canvas;this.project=project;this.w=540;this.h=960;this.time=0;this.manual=false;this.screenRevision=0;
    if(options.software){this.renderer=new SoftwareRenderer();}else{try{this.renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,preserveDrawingBuffer:true,powerPreference:'high-performance'});}catch{this.renderer=new SoftwareRenderer();}}this.renderer.setPixelRatio(1);this.renderer.setSize(540,960);this.renderer.shadowMap.enabled=true;this.renderer.shadowMap.type=THREE.PCFSoftShadowMap;this.renderer.toneMapping=THREE.ACESFilmicToneMapping;this.renderer.toneMappingExposure=1.13;
    this.out=canvas.getContext('2d',{alpha:false});this.scene=new THREE.Scene();this.scene.background=new THREE.Color('#101c23');this.scene.fog=new THREE.FogExp2('#111d24',.023);
    this.camera=new THREE.PerspectiveCamera(36,9/16,.1,100);this.controls=options.headless?{target:new THREE.Vector3(),update(){},dispose(){}}:new OrbitControls(this.camera,canvas);this.controls.enabled=false;this.controls.enableDamping=false;this.controls.target.set(0,2,0);this.controls.minDistance=3;this.controls.maxDistance=22;this.controls.maxPolarAngle=PI*.49;
    const hemi=new THREE.HemisphereLight('#bfdaed','#77533d',2.1);this.scene.add(hemi);
    this.key=new THREE.DirectionalLight('#ffdbad',4.5);this.key.position.set(-4,8,5);this.key.castShadow=true;this.key.shadow.mapSize.set(2048,2048);Object.assign(this.key.shadow.camera,{left:-9,right:9,top:10,bottom:-7,near:.5,far:30});this.key.shadow.normalBias=.035;this.key.shadow.bias=-.00025;this.key.shadow.radius=3;this.scene.add(this.key);
    const rim=new THREE.DirectionalLight('#ff914d',3);rim.position.set(5,5,-3);this.scene.add(rim);const fill=new THREE.DirectionalLight('#82bbd4',1.5);fill.position.set(4,3,5);this.scene.add(fill);
    this.screenLight=new THREE.PointLight('#8bcecf',20,12,2);this.screenLight.position.set(0,4.5,-2.5);this.scene.add(this.screenLight);
    this.set=group(this.scene);this.makeSet();this.set.traverse(o=>o.userData.staticLayer=true);this.renderKey.userData.staticLayer=false;this.renderKeyLabel.userData.staticLayer=false;this.ren=makeRen(this.scene,project.humanAppearance);this.appearanceKey=JSON.stringify(project.humanAppearance);this.mica=makeMica(this.scene);
    const sc=document.createElement('canvas');sc.width=sc.height=128;const sx=sc.getContext('2d'),sg=sx.createRadialGradient(64,64,8,64,64,64);sg.addColorStop(0,'rgba(12,14,20,.64)');sg.addColorStop(.4,'rgba(12,14,20,.35)');sg.addColorStop(1,'rgba(12,14,20,0)');sx.fillStyle=sg;sx.fillRect(0,0,128,128);const stx=new THREE.CanvasTexture(sc);for(const [px,pz] of [[-1.32,.4],[1.25,.7]]){const sh=new THREE.Mesh(new THREE.PlaneGeometry(2.1,1.6),new THREE.MeshBasicMaterial({map:stx,transparent:true,depthWrite:false}));sh.rotation.x=-PI/2;sh.position.set(px,.275,pz);sh.userData.staticLayer=true;this.scene.add(sh);}
    if(this.renderer.isSoftware){this.composer={render:()=>this.renderer.render(this.scene,this.camera),setSize:()=>{},dispose:()=>{}};}
    else{this.composer=new EffectComposer(this.renderer);this.composer.addPass(new RenderPass(this.scene,this.camera));
      this.bokeh=new BokehPass(this.scene,this.camera,{focus:6,aperture:.002,maxblur:.008});this.composer.addPass(this.bokeh);
      this.bloom=new UnrealBloomPass(new THREE.Vector2(540,960),.24,.5,1.12);this.composer.addPass(this.bloom);this.composer.addPass(new OutputPass());
      this.grade=new ShaderPass(GRADE);this.composer.addPass(this.grade);}
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
    const lamp=group(this.set,-8.6,0,-4.6);cyl(lamp,.65,.8,.15,edge,0,0,0,24);line(lamp,[[0,0,0],[0,3,0],[.8,5,0],[1.5,5.1,0]],'#94795b',.08);const shade=new THREE.Mesh(new THREE.ConeGeometry(.75,.65,20,1,true),material('#bd9870',{side:THREE.DoubleSide}));shade.position.set(1.5,4.8,0);lamp.add(shade);sphere(lamp,.22,material('#ffe4ba',{emissive:'#ffca86',emissiveIntensity:3}),1.5,4.5,0);const ll=new THREE.PointLight('#ffb971',32,14,2);ll.position.set(1.5,4.4,0);lamp.add(ll);
    const mug=group(this.set,6.5,0,0);cyl(mug,.7,.6,1.2,material('#417578'),0,.58,0,24);cyl(mug,.62,.62,.03,material('#251d16'),0,1.19,0,24);const handle=new THREE.Mesh(new THREE.TorusGeometry(.38,.13,8,20),material('#417578'));handle.position.set(.72,.7,0);mug.add(handle);
    // Soft, deliberately out-of-focus practical lights in the distance.
    const gc=document.createElement('canvas');gc.width=64;gc.height=64;const gx=gc.getContext('2d'),gr=gx.createRadialGradient(32,32,1,32,32,32);gr.addColorStop(0,'rgba(255,220,166,.8)');gr.addColorStop(.22,'rgba(255,175,92,.24)');gr.addColorStop(1,'rgba(255,175,92,0)');gx.fillStyle=gr;gx.fillRect(0,0,64,64);const gt=new THREE.CanvasTexture(gc);
    for(let i=0;i<26;i++){const s=new THREE.Sprite(new THREE.SpriteMaterial({map:gt,color:i%3?'#d79a62':'#86a7b3',transparent:true,depthWrite:false,opacity:.45,blending:THREE.AdditiveBlending}));s.position.set(Math.sin(i*13.1)*16,2+((i*7)%15),-9-Math.abs(Math.cos(i*8))*15);s.scale.setScalar(.4+(i%4)*.4);this.scene.add(s);}
    const geo=new THREE.BufferGeometry(),pos=[];for(let i=0;i<100;i++)pos.push(Math.sin(i*37)*13,1+(i%39)*.25,Math.cos(i*17)*10);geo.setAttribute('position',new THREE.Float32BufferAttribute(pos,3));this.dust=new THREE.Points(geo,new THREE.PointsMaterial({size:.025,color:'#e6c998',transparent:true,opacity:.45,depthWrite:false}));this.scene.add(this.dust);
  }
  setProject(p){
    this.project=p;this.lastScreenKey=null;this.lastMouthKey=null;this.lastFaceKey=null;
    const appearanceKey=JSON.stringify(p.humanAppearance);
    if(appearanceKey!==this.appearanceKey){const old=this.ren;this.scene.remove(old.root);old.root.traverse(o=>{o.geometry?.dispose();if(o.material){for(const mat of (Array.isArray(o.material)?o.material:[o.material])){mat.map?.dispose();mat.dispose();}}});old.mouthTex.texture.dispose();this.ren=makeRen(this.scene,p.humanAppearance);this.appearanceKey=appearanceKey;}
    this.ren.hood.color.set(p.humanColor);this.ren.hairMat.color.set(p.hairColor);this.ren.beardMat?.color.set(p.hairColor);this.ren.skin.color.set(p.skinColor);this.mica.shell.color.set(p.robotColor);
    this.mica.glow.color.set(p.faceColor);this.mica.glow.emissive.set(p.faceColor).multiplyScalar(.55);this.mica.light.color.set(p.faceColor);
    this.ren.glasses.visible=p.glasses;this.key.intensity=3.7+p.warmth*.8;this.renderer.warmth=p.warmth;if(this.grade)this.grade.uniforms.warmth.value=p.warmth;
  }
  setSize(w,h){this.w=w;this.h=h;this.canvas.width=w;this.canvas.height=h;this.renderer.setSize(w,h);this.composer.setSize(w,h);this.camera.aspect=w/h;this.camera.updateProjectionMatrix();}
  setManual(v){this.manual=v;this.controls.enabled=v;if(v){this.controls.target.copy(this.target||new THREE.Vector3(0,2,0));this.controls.update();}}
  drawScreen(ss,t){
    const s=ss.screen,tone=TONES[s.tone]||TONES.calm,pct=ss.progress==null?null:Math.round(ss.progress*100),flash=clamp(1-(t-ss.since)/.35,0,1);
    const key=`${ss.index}|${pct}|${Math.round(flash*8)}|${this.project.title}`;if(key===this.lastScreenKey)return;this.lastScreenKey=key;this.screenRevision++;
    const x=this.screenCtx,w=1600,h=900;x.fillStyle='#0c1824';x.fillRect(0,0,w,h);x.fillStyle='#142737';x.fillRect(0,0,w,75);x.fillStyle='#4f6877';for(let i=0;i<3;i++){x.beginPath();x.arc(38+i*29,37,7,0,PI*2);x.fill();}x.fillStyle='#88a0ab';x.font='22px monospace';x.textAlign='left';x.fillText('STUDIO / '+this.project.title.toUpperCase().slice(0,48),160,45);x.strokeStyle='#203849';x.lineWidth=1;for(let i=0;i<12;i++){x.beginPath();x.moveTo(0,150+i*65);x.lineTo(w,150+i*65);x.stroke();}for(let i=0;i<20;i++){x.beginPath();x.moveTo(i*90,75);x.lineTo(i*90,h);x.stroke();}
    const jitter=flash>0?Math.sin(t*90)*14*flash:0;x.save();x.translate(jitter,0);
    x.fillStyle='#112330';x.fillRect(450,170,700,580);x.strokeStyle=tone.edge;x.lineWidth=3;x.strokeRect(450,170,700,580);
    x.textAlign='center';x.fillStyle=tone.kick;x.font='bold 28px monospace';x.fillText(s.kicker,800,262);
    let size=96;x.font=`bold ${size}px Arial`;while(x.measureText(s.title).width>630&&size>36){size-=4;x.font=`bold ${size}px Arial`;}x.fillStyle=tone.title;x.fillText(s.title,800,400);
    let sub=24;x.font=`${sub}px monospace`;while(x.measureText(s.sub).width>640&&sub>14){sub-=2;x.font=`${sub}px monospace`;}x.fillStyle='#7590a0';x.fillText(s.sub,800,470);
    if(pct!=null){x.fillStyle='#253c48';x.fillRect(520,560,560,16);x.fillStyle=tone.bar;x.fillRect(520,560,560*ss.progress,16);x.font='20px monospace';x.fillStyle='#8fa6b0';x.fillText(`${pct}%`,800,615);}
    x.restore();if(flash>0){x.fillStyle=`rgba(220,240,255,${.22*flash})`;x.fillRect(0,0,w,h);for(let i=0;i<6;i++){x.fillStyle=`rgba(160,220,255,${.12*flash})`;x.fillRect(0,(i*157+t*900)%h,w,6);}}
    x.textAlign='left';x.fillStyle='#42606d';x.font='18px monospace';x.fillText(`${this.project.names.Ren} + ${this.project.names.Mica}`.toUpperCase(),40,855);this.screenTexture.needsUpdate=true;
    this.screenLight.color.set(s.tone==='alert'?'#cf9c8c':s.tone==='success'?'#a8dca0':'#8bcecf');
  }
  drawRenMouth(m,f){
    const open=clamp(m.open+f.open*(1-m.open),0,1),key=[open,m.wide,m.round,m.teeth,m.tongue,f.smile].map(q).join();if(key===this.lastMouthKey)return;this.lastMouthKey=key;
    const {ctx:x,texture}=this.ren.mouthTex,cx=128,cy=50,w=52*m.wide*(1-m.round*.38)*(1+Math.max(0,f.smile)*.12),hgt=open*85,curve=f.smile*12*(1-open*.5);
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
    texture.needsUpdate=true;
  }
  drawMicaFace(m,f,blink,gaze,t){
    const k=[m.open,m.wide,m.round,f.eye*blink,f.smile,f.brow,f.asym,gaze].map(q).join()+f.emotion+(f.emotion==='idea'?Math.floor(t*6):0);if(k===this.lastFaceKey)return;this.lastFaceKey=k;
    const {ctx:x,texture}=this.mica.faceTex,col=this.project.faceColor,W=512,H=288;x.clearRect(0,0,W,H);x.fillStyle=col;x.strokeStyle=col;x.lineCap='round';x.shadowColor=col;x.shadowBlur=14;
    const ey=118,eh=74*f.eye*blink,gx=gaze*16;
    for(const s of [-1,1]){
      const cx=256+s*104+gx,big=f.asym&&s===1?1.18:1,w=50*big,h=Math.max(6,eh*big);
      if(f.emotion==='happy'&&blink>.5){x.lineWidth=13;x.beginPath();x.arc(cx,ey+16,30,PI*1.1,PI*1.9);x.stroke();continue;}
      if(f.emotion==='surprised'){x.beginPath();x.ellipse(cx,ey,32*Math.min(1.2,blink*1.2),Math.max(5,40*blink),0,0,PI*2);x.fill();continue;}
      roundRect(x,cx,ey,w,h,14);x.fill();
      // Brow cut: angry slants inward, worried/sad lift the inner corner.
      if(Math.abs(f.brow)>.05){x.save();x.globalCompositeOperation='destination-out';x.shadowBlur=0;const cut=Math.abs(f.brow)*80,inner=cx-s*w/2,outer=cx+s*w/2,topY=ey-h/2-2;x.beginPath();
        if(f.brow<0){x.moveTo(inner-s*4,topY);x.lineTo(inner-s*4,topY+cut);x.lineTo(outer+s*4,topY-2);}else{x.moveTo(outer+s*4,topY);x.lineTo(outer+s*4,topY+cut);x.lineTo(inner-s*4,topY-2);}x.closePath();x.fill();x.restore();}
      if(f.emotion==='idea'){const tw=.6+.4*Math.sin(t*9+s);x.lineWidth=5;x.beginPath();x.moveTo(cx+s*36,ey-58-8*tw);x.lineTo(cx+s*36,ey-38+8*tw);x.moveTo(cx+s*26-8*tw,ey-48);x.lineTo(cx+s*46+8*tw,ey-48);x.stroke();}
    }
    const my=214,open=clamp(m.open+f.open*(1-m.open),0,1);
    if(open<.08){x.lineWidth=10;const c=f.smile*20;x.beginPath();x.moveTo(256-40,my-c);x.quadraticCurveTo(256,my+c*1.3,256+40,my-c);x.stroke();}
    else if(m.round>.5){x.beginPath();x.ellipse(256,my,18+22*(1-m.round*.4),8+open*26,0,0,PI*2);x.fill();}
    else{roundRect(x,256,my,46+50*m.wide*(1-m.round*.3),8+open*38,12);x.fill();}
    x.shadowBlur=0;x.fillStyle='rgba(0,0,0,.16)';for(let y=0;y<H;y+=6)x.fillRect(0,y,W,2);
    texture.needsUpdate=true;
  }
  pose(rig,act,talk,f,t,phase){
    const a=act.k>0&&ACT[act.name]?ACT[act.name](act.local,act.dur):{},k=act.k;
    rig.arms.forEach(({arm,elbow},i)=>{
      const s=i===0?-1:1,sad=f.emotion==='sad'?.6:1;
      const base={x:-.08-talk*(.28+Math.sin(t*4+i+phase)*.14),z:(.08+talk*.2)*sad,e:-.15-talk*(.38+Math.sin(t*3+i+phase)*.16)},tgt=a.arms?.[i];
      const x=tgt?lerp(base.x,tgt.x,k):base.x,z=tgt?lerp(base.z,tgt.z,k):base.z,e=tgt?lerp(base.e,tgt.e,k):base.e;
      arm.rotation.set(x,0,s*z);elbow.rotation.set(e,0,0);
    });
    return {hx:(a.head?.x||0)*k,hy:(a.head?.y||0)*k,hz:(a.head?.z||0)*k,by:(a.body?.y||0)*k,lean:(a.body?.lean||0)*k,press:(a.press||0)*k};
  }
  seek(t,{overlay=true}={}){
    this.time=t;const p=this.project,st=poseAt(p,t),r=this.ren,m=this.mica,cue=st.cue;
    this.drawScreen(screenAt(p,t),t);this.renderer.sceneRevision=this.screenRevision;this.dust.rotation.y=t*.006;
    const blinkAt=(o)=>{const u=(t*.31+o)%1;return u<.03?.1:1;},rBlink=blinkAt(.13)*(Math.sin(t*1.3+4)>.997?.1:1),mBlink=blinkAt(.61);
    // Ren
    const rf=faceAt(p,t,'Ren'),ra=actionAt(p,t,'Ren'),rp=this.pose(r,ra,st.renTalk,rf,t,0),renSpeaks=cue?.speaker==='Ren';
    r.root.position.y=.1+rp.by;r.body.position.y=Math.sin(t*2)*.018;r.body.rotation.x=rp.lean+(rf.emotion==='angry'?.05:0);r.torso.rotation.set(0,Math.sin(t*.65)*.028,Math.sin(t*.9)*.015);
    const rLook=renSpeaks?.06:cue?.speaker==='Mica'?.32:.17;
    r.head.rotation.set(Math.sin(t*1.2)*.035+rf.down+rp.hx+st.renTalk*Math.sin(t*5.3)*.03,rLook+Math.sin(t*.7)*.05+rp.hy,-.035+Math.sin(t*.8)*.035+rf.tilt+rp.hz);
    for(let i=0;i<2;i++){const side=i===0?1:-1;r.eyes[i].scale.y=Math.max(.08,rf.eye*rBlink);r.brows[i].rotation.z=side*rf.brow;r.brows[i].position.y=.25+rf.raise+(rf.asym&&i===0?.05*rf.asym:0)+Math.max(0,-rf.brow)*-.03;r.pupils[i].position.set(renSpeaks?0:.025,0,0);}
    this.drawRenMouth(mouthAt(p,t,'Ren')||{open:st.renTalk*(.45+.4*Math.abs(Math.sin(t*11))),wide:1,round:0,teeth:st.renTalk>.3?1:0,tongue:0},rf);
    r.legs.forEach((l,i)=>{l.rotation.x=Math.sin(t*1.4+i)*.008});
    // Mica
    const mf=faceAt(p,t,'Mica'),ma=actionAt(p,t,'Mica'),mp=this.pose(m,ma,st.micaTalk,mf,t,1.7),micaSpeaks=cue?.speaker==='Mica';
    m.root.position.y=.235+mp.by;m.body.position.y=Math.sin(t*2.8)*.025;m.body.rotation.set(mp.lean,-.14+Math.sin(t*.8)*.035,Math.sin(t*1.7)*.025);
    m.head.rotation.set(Math.sin(t*1.8)*.035+mf.down+mp.hx+st.micaTalk*Math.sin(t*6.1)*.025,(micaSpeaks?-.05:cue?.speaker==='Ren'?-.3:-.12)+Math.sin(t*.7)*.05+mp.hy,mf.tilt+Math.sin(t)*.03+mp.hz);
    this.drawMicaFace(mouthAt(p,t,'Mica')||{open:st.micaTalk*(.4+.4*Math.abs(Math.sin(t*12))),wide:1,round:0},mf,mBlink,micaSpeaks?0:cue?.speaker==='Ren'?-1:-.3,t);
    const tap=Math.max(rp.press,mp.press);this.renderKey.position.y=.16-.08*tap;this.renderKeyLabel.position.y=.334-.08*tap;
    m.glow.emissiveIntensity=1.05+Math.sin(t*3)*.15+st.final*.4;
    if(!this.manual){
      const shot=SHOTS[st.shot]||SHOTS.wide,u=smooth((t-st.shotStart)/Math.max(1,st.shotEnd-st.shotStart)),push=st.shot==='wide'?.03:.07;
      const pos=new THREE.Vector3(...shot.p),at=new THREE.Vector3(...shot.at);pos.lerp(at,push*u);
      let fov=shot.f,shake=0;
      if(cue&&(cue.emotion==='angry'||cue.emotion==='surprised')&&cue.start>=st.shotStart-.2){const e=t-cue.start;fov-=3.5*smooth(e/.18);shake=.05*Math.exp(-Math.max(0,e)*5)*(e>0?1:0);}
      pos.x+=Math.sin(t*.23)*.08+Math.sin(t*41)*shake;pos.y+=Math.sin(t*.37+1)*.03+Math.cos(t*37)*shake;pos.z+=-.1*Math.sin(t*.3);
      this.camera.position.copy(pos);this.target=at;this.camera.lookAt(at);this.camera.fov=fov;this.camera.updateProjectionMatrix();
      if(this.bokeh){const u2=this.bokeh.uniforms;u2.focus.value=pos.distanceTo(at);u2.aperture.value=p.dof?shot.ap:0;u2.maxblur.value=p.dof?.008:0;}
    }else if(this.bokeh)this.bokeh.uniforms.aperture.value=0;
    if(this.grade)this.grade.uniforms.time.value=t;
    this.renderer.focusDistance=this.camera.position.distanceTo(this.manual?this.controls.target:this.target);this.composer.render();const x=this.out,w=this.w,h=this.h;x.drawImage(this.renderer.domElement,0,0,w,h);
    if(overlay)this.overlay(st);return st;
  }
  overlay(st){const x=this.out,w=this.w,h=this.h,s=w/540,p=this.project;
    const vignette=x.createRadialGradient(w*.5,h*.47,w*.25,w*.5,h*.48,h*.7);vignette.addColorStop(0,'#0000');vignette.addColorStop(1,'#05070c70');x.fillStyle=vignette;x.fillRect(0,0,w,h);
    if(p.handle){x.save();x.globalAlpha=.78;x.fillStyle='#f1ece2';x.font=`700 ${15*s}px Arial`;x.textAlign='left';x.shadowColor='#000a';x.shadowBlur=6*s;x.fillText(p.handle,w*.06,h*.085);x.restore();}
    if(p.intro&&st.t<2.6){const a=smooth(st.t/.5)*smooth((2.6-st.t)/.6);x.save();x.globalAlpha=a;const band=x.createLinearGradient(0,0,0,h*.36);band.addColorStop(0,'#05080bf2');band.addColorStop(.7,'#05080bcc');band.addColorStop(1,'#05080b00');x.fillStyle=band;x.fillRect(0,0,w,h*.36);x.fillStyle='#e6c9aa';x.textAlign='center';x.font=`500 ${11*s}px Arial`;x.letterSpacing=`${2*s}px`;x.fillText((p.handle||'AN ORIGINAL').toUpperCase()+' PRESENTS',w/2,h*.13);x.letterSpacing='0px';x.font=`${35*s}px Georgia`;x.fillStyle='#f4e9d6';x.shadowColor='#000c';x.shadowBlur=10*s;const words=p.title.split(' '),lines=[];let row='';for(const word of words){if(x.measureText(row+' '+word).width>w*.8&&row){lines.push(row);row=word;}else row+=(row?' ':'')+word;}lines.push(row);lines.slice(0,3).forEach((l,i)=>x.fillText(l,w/2,h*(.18+i*.045)));x.restore();}
    if(p.captions&&st.cue)(p.captionStyle==='box'?this.boxCaption:this.boldCaption).call(this,st);
    if(p.endTitle&&st.final>0){const a=st.final;x.save();x.globalAlpha=a;x.fillStyle='#122125';x.fillRect(0,0,w,h);x.textAlign='center';x.fillStyle='#d6b088';x.font=`${12*s}px Arial`;x.fillText(`${p.names.Ren} + ${p.names.Mica}`.toUpperCase(),w/2,h*.39);x.fillStyle='#ece5d5';x.font=`${38*s}px Georgia`;x.fillText(p.endTitle,w/2,h*.47);x.font=`${13*s}px Arial`;x.fillStyle='#9aafaa';x.fillText(p.endSub,w/2,h*.525);if(p.handle){x.fillStyle='#d6b088';x.font=`600 ${14*s}px Arial`;x.fillText(p.handle,w/2,h*.6);}x.restore();}
  }
  wrap(words,max){const x=this.out,lines=[];let row=[];for(const [i,word] of words.entries()){const test=[...row.map(r=>r.word),word].join(' ');if(x.measureText(test).width>max&&row.length){lines.push(row);row=[];}row.push({word,i});}if(row.length)lines.push(row);return lines;}
  boldCaption(st){
    const x=this.out,w=this.w,h=this.h,s=w/540,c=st.cue,words=c.text.split(/\s+/),cur=c.words?.length?Math.min(words.length-1,Math.round(wordAt(c,st.t)*words.length/c.words.length)):-1;
    const pop=smooth((st.t-c.start)/.14),fade=smooth((c.end-st.t)/.12),accent=c.speaker==='Ren'?'#ffd27a':'#ffb48a';
    x.save();x.globalAlpha=fade;x.font=`800 ${29*s}px "Arial Black", Arial, sans-serif`;x.textAlign='left';x.textBaseline='middle';x.lineJoin='round';
    const lines=this.wrap(words,w*.84),lh=37*s,y0=h*.66-(lines.length-1)*lh/2,space=x.measureText(' ').width;
    x.translate(w/2,y0);x.scale(.94+.06*pop,.94+.06*pop);x.translate(-w/2,-y0);
    lines.forEach((row,li)=>{const width=row.reduce((a,r)=>a+x.measureText(r.word).width,0)+space*(row.length-1);let px=(w-width)/2;const py=y0+li*lh;
      for(const r of row){const ww=x.measureText(r.word).width,on=r.i===cur;x.shadowColor='rgba(0,0,0,.7)';x.shadowBlur=10*s;x.lineWidth=5*s;x.strokeStyle='rgba(8,8,10,.92)';x.strokeText(r.word,px,py);x.shadowBlur=0;x.fillStyle=on?accent:'#fbf7ef';x.fillText(r.word,px,py);px+=ww+space;}});
    x.restore();
  }
  boxCaption(st){const x=this.out,w=this.w,h=this.h,s=w/540,c=st.cue,max=w*.79;x.font=`600 ${20*s}px Arial`;const lines=this.wrap(c.text.split(' '),max).map(r=>r.map(q=>q.word).join(' '));const bh=(43+lines.length*27)*s,y=h*.83-bh*.5;x.fillStyle='rgba(10,18,23,.87)';x.beginPath();x.roundRect(w*.075,y,w*.85,bh,9*s);x.fill();x.textAlign='center';x.font=`bold ${10*s}px Arial`;x.fillStyle=c.speaker==='Ren'?'#d0b7ef':'#eeb48d';x.fillText(this.project.names[c.speaker].toUpperCase(),w/2,y+22*s);x.font=`600 ${20*s}px Arial`;x.fillStyle='#eee9dc';lines.forEach((l,i)=>x.fillText(l,w/2,y+(48+i*27)*s));}
  dispose(){this.controls.dispose();this.scene.traverse(o=>{o.geometry?.dispose();if(o.material){for(const m of Array.isArray(o.material)?o.material:[o.material])m.dispose();}});this.composer.dispose();this.renderer.dispose();}
}
