import {drawAppScreen} from './screen-apps.js';
import * as THREE from 'three';
import {RoundedBoxGeometry} from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import {EffectComposer} from 'three/examples/jsm/postprocessing/EffectComposer.js';
import {RenderPass} from 'three/examples/jsm/postprocessing/RenderPass.js';
import {UnrealBloomPass} from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import {BokehPass} from 'three/examples/jsm/postprocessing/BokehPass.js';
import {GTAOPass} from 'three/examples/jsm/postprocessing/GTAOPass.js';
import {ShaderPass} from 'three/examples/jsm/postprocessing/ShaderPass.js';
import {OutputPass} from 'three/examples/jsm/postprocessing/OutputPass.js';
import {poseAt,planShots,stanceAt,presenceAt,sitAt,sitsInFilm,mouthAt,faceAt,actionAt,screenAt,wordAt,beatAt,blinkAt,glanceAt,spoken,CARD_TIME,clamp,smooth,lerp} from './dist/timeline.js';
import {buildCharacter,animateCharacter,drawFace,headWorld,disposeCharacter} from './characters.js';
import {SoftwareRenderer} from './software-renderer.js';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import {MeshoptDecoder} from 'three/examples/jsm/libs/meshopt_decoder.module.js';
import {buildNature,buildCustomWorld,deskAtmosphere} from './worlds.js';
import {DRACOLoader} from 'three/examples/jsm/loaders/DRACOLoader.js';
import {KTX2Loader} from 'three/examples/jsm/loaders/KTX2Loader.js';
import {HDRLoader} from 'three/examples/jsm/loaders/HDRLoader.js';
import {imageSize} from './character-import.js';
import {buildImportedRig,animateImported,drawImportedFace,importedHeadWorld,disposeImported} from './imported.js';

const PI=Math.PI,DEG=PI/180;
function material(color,options={}){return new THREE.MeshStandardMaterial({color,roughness:.7,metalness:.05,...options})}
function box(parent,w,h,d,mat,x=0,y=0,z=0,r=.05){const o=new THREE.Mesh(new RoundedBoxGeometry(w,h,d,1,r),mat);o.position.set(x,y,z);o.castShadow=true;o.receiveShadow=true;parent.add(o);return o;}
function sphere(parent,r,mat,x,y,z,segments=12){const o=new THREE.Mesh(new THREE.SphereGeometry(r,segments,8),mat);o.position.set(x,y,z);o.castShadow=true;parent.add(o);return o;}
function group(parent,x=0,y=0,z=0){const o=new THREE.Group();o.position.set(x,y,z);parent.add(o);return o;}
function cyl(parent,a,b,h,mat,x,y,z,n=10){const o=new THREE.Mesh(new THREE.CylinderGeometry(a,b,h,n),mat);o.position.set(x,y,z);o.castShadow=true;o.receiveShadow=true;parent.add(o);return o;}
function line(parent,points,color,r=.018){const c=new THREE.CatmullRomCurve3(points.map(p=>new THREE.Vector3(...p)));const o=new THREE.Mesh(new THREE.TubeGeometry(c,14,r,6,false),material(color));parent.add(o);return o;}
// Text textures are cached (the keyboard alone needs dozens) and survive set rebuilds.
const LABELS=new Map();
function label(text,size=128,color='#ddd8ca',bg=null){const key=[text,size,color,bg].join('|');if(LABELS.has(key))return LABELS.get(key);const c=document.createElement('canvas');c.width=512;c.height=256;const x=c.getContext('2d');if(bg){x.fillStyle=bg;x.fillRect(0,0,512,256)}x.fillStyle=color;x.font=`600 ${size}px Arial`;x.textAlign='center';x.textBaseline='middle';x.fillText(text,256,130);const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;t.userData.cached=true;LABELS.set(key,t);return t;}

// Film looks: a colour grade per look (contrast, saturation, lift/gain tint, fade, mono, chromatic split, scanlines, grain).
export const FILM_LOOKS={
  studio:{label:'Studio (default)',contrast:1.06,sat:1.08,fade:0,mono:0,aberr:0,scan:0,lift:[0,0,0],gain:[1.03,1,.965],grain:.032,bloom:.24},
  cinematic:{label:'Cinematic teal & orange',contrast:1.14,sat:1.12,lift:[-.01,.012,.03],gain:[1.08,1,.9],grain:.035,bloom:.3},
  golden:{label:'Golden hour',contrast:1.05,sat:1.15,lift:[.03,.015,-.01],gain:[1.1,1.02,.86],grain:.03,bloom:.42},
  pastel:{label:'Soft pastel',contrast:.9,sat:.88,fade:.08,lift:[.04,.035,.05],gain:[1,1,1.02],grain:.015,bloom:.35},
  neon:{label:'Neon night',contrast:1.18,sat:1.4,lift:[.02,-.01,.05],gain:[1.05,.94,1.1],grain:.03,bloom:.7},
  vintage:{label:'Vintage film',contrast:.96,sat:.78,fade:.1,lift:[.05,.035,.01],gain:[1.04,.98,.86],grain:.07,bloom:.25},
  noir:{label:'Noir (black & white)',contrast:1.3,sat:0,mono:1,grain:.06,bloom:.2},
  documentary:{label:'Documentary (natural)',contrast:1,sat:.92,gain:[1,1,1],grain:.02,bloom:.12},
  dream:{label:'Dreamy glow',contrast:.94,sat:1.05,fade:.05,lift:[.03,.02,.05],gain:[1.04,1,1.04],grain:.02,bloom:.95},
  vhs:{label:'Retro VHS',contrast:1.05,sat:1.25,fade:.06,aberr:1,scan:1,lift:[.02,0,.03],gain:[1.02,1,1.05],grain:.06,bloom:.4}
};
const GRADE={uniforms:{tDiffuse:{value:null},time:{value:0},grain:{value:.032},warmth:{value:1},contrast:{value:1.06},sat:{value:1.08},fade:{value:0},mono:{value:0},aberr:{value:0},scan:{value:0},lift:{value:new THREE.Vector3()},gain:{value:new THREE.Vector3(1,1,1)}},
  vertexShader:'varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
  fragmentShader:'uniform sampler2D tDiffuse;uniform float time,grain,warmth,contrast,sat,fade,mono,aberr,scan;uniform vec3 lift,gain;varying vec2 vUv;float h(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);}void main(){vec2 o=(vUv-.5)*aberr*.006;vec3 c=vec3(texture2D(tDiffuse,vUv+o).r,texture2D(tDiffuse,vUv).g,texture2D(tDiffuse,vUv-o).b);c=(c-.5)*contrast+.5;c=c*gain*vec3(1.+.03*(warmth-1.),1.,1.-.035*(warmth-1.))+lift;float l=dot(c,vec3(.299,.587,.114));c=mix(vec3(l),c,sat);c=mix(c,vec3(l),mono);c=mix(c,vec3(.5)+(c-.5)*.8,fade);c*=1.-scan*.12*step(.5,fract(vUv.y*480.));c+=(h(vUv*vec2(1080.,1920.)+fract(time*7.13)*91.7)-.5)*grain;gl_FragColor=vec4(clamp(c,0.,1.),1.);}'};
const TONES={alert:{edge:'#80564c',kick:'#e7b09a',title:'#d8cbbd',bar:'#bc8264'},calm:{edge:'#547e77',kick:'#b6e7d0',title:'#e2e9df',bar:'#a6d8b8'},success:{edge:'#5d8a5a',kick:'#c4ebaa',title:'#eef6e4',bar:'#9fd88a'},info:{edge:'#4f6f8f',kick:'#a9c8ee',title:'#e1e8f2',bar:'#8fb7e6'}};
const ACCENTS=['#ffd27a','#ffb48a','#9fd8ff','#c6f08a'],NAME_COLORS=['#d0b7ef','#eeb48d','#9fd8ff','#c6f08a'];
// Stage layout by cast size: x positions along the keyboard, slight depth stagger.
const LAYOUT={1:[[0,.45]],2:[[-1.32,.35],[1.25,.65]],3:[[-2.1,.45],[0,.25],[2.1,.55]],4:[[-2.6,.4],[-.88,.6],[.88,.35],[2.6,.55]]};
// Lens (mm, full-frame, portrait) to vertical field of view.
export const lensToFov=mm=>2*Math.atan(18/mm)/DEG;
// Camera presets in spherical terms around a framing centre: yaw is relative to the subject's facing (0 = front,
// +90 = their left side), so the same preset works for any character anywhere on the stage.
export const PRESETS={
  wide:{yaw:20,pitch:12,dist:13.3,lens:54,ap:.0007},two:{yaw:0,pitch:9.5,dist:11.3,lens:54,ap:.0012},
  single:{yaw:12,pitch:9,dist:6.4,lens:60,ap:.0025},cu:{yaw:8,pitch:5,dist:3.5,lens:66,ap:.0045},
  ots:{yaw:48,pitch:5,dist:5,lens:64,ap:.0042},custom:{yaw:0,pitch:8,dist:4,lens:50,ap:.0035}
};
const DESK_MONITOR={x:3.1,y:3.6,z:-5.4,yaw:-.2,s:.76};
// Desk top: warm wood with long grain and a few darker boards.
let WOOD=null;
function woodGrain(){if(WOOD)return WOOD;const c=document.createElement('canvas');c.width=512;c.height=512;const x=c.getContext('2d');x.fillStyle='#4e3a2f';x.fillRect(0,0,512,512);for(let b=0;b<8;b++){x.fillStyle=`rgba(${b%3?40:20},${b%3?26:14},${b%3?18:10},${.12+(b*.37%1)*.18})`;x.fillRect(0,b*64,512,64);x.fillStyle='rgba(0,0,0,.35)';x.fillRect(0,b*64,512,1.5);}
  for(let i=0;i<260;i++){const y=(i*97.3)%512,a=Math.sin(i*12.9)*6;x.strokeStyle=i%2?'rgba(30,18,12,.22)':'rgba(120,88,62,.14)';x.lineWidth=.6+(i%5)*.35;x.beginPath();x.moveTo(0,y);x.bezierCurveTo(170,y+a,340,y-a,512,y+a*.4);x.stroke();}
  const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;t.wrapS=t.wrapT=THREE.RepeatWrapping;t.repeat.set(7,4);t.anisotropy=8;t.userData.cached=true;return WOOD=t;}
const softShadow=(()=>{let tex=null;return ()=>{if(tex)return tex;const sc=document.createElement('canvas');sc.width=sc.height=128;const sx=sc.getContext('2d'),sg=sx.createRadialGradient(64,64,8,64,64,64);sg.addColorStop(0,'rgba(12,14,20,.64)');sg.addColorStop(.4,'rgba(12,14,20,.35)');sg.addColorStop(1,'rgba(12,14,20,0)');sx.fillStyle=sg;sx.fillRect(0,0,128,128);return tex=new THREE.CanvasTexture(sc);};})();

export class FilmScene{
  constructor(canvas,project,options={}){
    this.loadAsset=options.loadAsset||(id=>fetch(`/library/${id}/model`).then(r=>{if(!r.ok)throw Error(`Character file ${id} is not in the library.`);return r.arrayBuffer();}));this.onUpdate=options.onUpdate||null;this.vendorPath=options.vendorPath||'./vendor/';this.assets=new Map();this.ready=Promise.resolve();this.worldReady=Promise.resolve();
    this.canvas=canvas;this.project=project;this.w=540;this.h=960;this.time=0;this.manual=false;this.screenRevision=0;this.focus=null;this.previewCam=null;this.rigs=[];this.castKey='';this.trash=[];
    if(options.software){this.renderer=new SoftwareRenderer();}else{try{this.renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,preserveDrawingBuffer:true,powerPreference:'high-performance'});}catch{this.renderer=new SoftwareRenderer();}}this.renderer.setPixelRatio(1);this.renderer.setSize(540,960);
    // Skip the synchronous shader error check after each compile: it stalls the page for seconds whenever a set or cast
    // is rebuilt (three.js recommends it off in production).
    if(this.renderer.debug)this.renderer.debug.checkShaderErrors=false;this.renderer.shadowMap.enabled=true;this.renderer.shadowMap.type=THREE.PCFSoftShadowMap;this.renderer.toneMapping=THREE.ACESFilmicToneMapping;this.renderer.toneMappingExposure=1.13;
    this.out=canvas.getContext('2d',{alpha:false});this.scene=new THREE.Scene();this.world=null;this.worldKey='';
    this.camera=new THREE.PerspectiveCamera(36,9/16,.1,100);this.controls=options.headless?{target:new THREE.Vector3(),update(){},dispose(){}}:new OrbitControls(this.camera,canvas);this.controls.enabled=false;this.controls.enableDamping=false;this.controls.target.set(0,2,0);this.controls.minDistance=2;this.controls.maxDistance=22;this.controls.maxPolarAngle=PI*.49;
    this.cast=group(this.scene);
    if(this.renderer.isSoftware){this.composer={render:()=>this.renderer.render(this.scene,this.camera),setSize:()=>{},dispose:()=>{}};}
    // Multisampled HDR buffers keep edges clean through post-processing; GTAO adds soft contact shadows.
    else{this.composer=new EffectComposer(this.renderer,new THREE.WebGLRenderTarget(540,960,{type:THREE.HalfFloatType,samples:4}));this.composer.addPass(new RenderPass(this.scene,this.camera));
      this.ao=new GTAOPass(this.scene,this.camera,540,960);this.ao.updateGtaoMaterial({radius:.45,distanceExponent:1.4,thickness:1.2,scale:1.1,samples:12});this.ao.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:12});this.ao.blendIntensity=.85;this.composer.addPass(this.ao);
      this.bokeh=new BokehPass(this.scene,this.camera,{focus:6,aperture:.002,maxblur:.008});this.composer.addPass(this.bokeh);
      this.bloom=new UnrealBloomPass(new THREE.Vector2(540,960),.24,.5,1.12);this.composer.addPass(this.bloom);this.composer.addPass(new OutputPass());
      this.grade=new ShaderPass(GRADE);this.composer.addPass(this.grade);}
    this.setProject(project);this.seek(0);
  }
  // The desk set from world settings: a keyboard or a plain table top, an optional monitor, and chosen props.
  makeSet(w,T){
    const MONITOR=w.surface==='laptop'?{x:0,y:3.7,z:-4.3,yaw:0,s:1.1}:DESK_MONITOR;
    const wood=material(T.desk,{roughness:.82,map:woodGrain()}),edge=material('#292e31',{metalness:.35}),key=material(T.keys||'#b9b3a1',{roughness:.7}),keyDark=material('#58686b'),top=-.275;
    box(this.set,90,.55,58,wood,0,-.55,4,.18);
    if(w.surface==='laptop'){box(this.set,14.2,.23,10.2,material('#747b83',{metalness:.65,roughness:.32}),0,-.1,.6,.22);box(this.set,4.2,.02,1.9,material('#626971',{metalness:.45}),0,.027,4.15,.1);}
    if(w.surface==='keyboard'||w.surface==='laptop'){box(this.set,13,.25,6.1,edge,0,-.12,-.1,.18);
      for(let row=0;row<5;row++)for(let col=0;col<13;col++){
        const x=(col-6)*.89+(row%2)*.14,z=(row-2)*.89;
        box(this.set,.79,.28,.74,(col===0||col===12)?keyDark:key,x,.12,z,.075);
        if(row<2||col<4||col>8){const tx=label('QWERTYUIOPASDFGHJKLZXCVBNM'[(row*13+col)%26],90,'#494e4d');const t=new THREE.Mesh(new THREE.PlaneGeometry(.25,.125),new THREE.MeshBasicMaterial({map:tx,transparent:true,depthWrite:false}));t.rotation.x=-PI/2;t.position.set(x,.266,z-.06);this.set.add(t);}
      }
      box(this.set,3.8,.25,.69,material('#a9957a'),0,.12,2.67,.06);}
    // Large tactile key (the `press` action's target); on a table it is a big desk button.
    const ky=w.surface==='table'?top+.16:.16;this.keyRest=[ky,ky+.174];
    this.renderKey=box(this.set,1.2,.33,1.1,material('#e79d58'),2.65,ky,1.85,.09);const keyText=new THREE.Mesh(new THREE.PlaneGeometry(.92,.46),new THREE.MeshBasicMaterial({map:label('GO',95,'#4b3222'),transparent:true}));keyText.rotation.x=-PI/2;keyText.position.set(2.65,ky+.174,1.85);this.set.add(keyText);this.renderKeyLabel=keyText;
    // The monitor stands off to one side, angled toward the cast, so the window stays open behind them.
    const monitor=group(this.set,MONITOR.x,MONITOR.y,MONITOR.z);monitor.rotation.y=MONITOR.yaw;monitor.scale.setScalar(MONITOR.s);this.monitor=monitor;monitor.visible=w.monitor;box(monitor,11.8,6.9,.38,material('#262e35'),0,0,0,.23);box(monitor,11.5,6.6,.1,material('#0a1119'),0,0,.21,.14);
    this.screenCanvas=document.createElement('canvas');this.screenCanvas.width=1600;this.screenCanvas.height=900;this.screenCtx=this.screenCanvas.getContext('2d');this.screenTexture=new THREE.CanvasTexture(this.screenCanvas);this.screenTexture.colorSpace=THREE.SRGBColorSpace;const sm=new THREE.MeshBasicMaterial({map:this.screenTexture});const sp=new THREE.Mesh(new THREE.PlaneGeometry(11.13,6.22),sm);sp.position.set(0,.06,.278);monitor.add(sp);sphere(monitor,.045,material('#d3bd81',{emissive:'#a68955',emissiveIntensity:1}),0,-3.28,.25,8);
    if(w.monitor&&w.surface!=='laptop')box(this.set,.8,1.5,.45,edge,MONITOR.x+.05,.3,MONITOR.z-.3,.08);
    // Props stand on the desk top and give the tiny cast a sense of scale.
    const has=k=>w.props.includes(k),prop=(x,z)=>group(this.set,x,top,z);
    if(has('lamp')){const lamp=prop(-8.6,-4.6);cyl(lamp,.65,.8,.15,edge,0,.075,0,24);line(lamp,[[0,0,0],[0,3,0],[.8,5,0],[1.5,5.1,0]],'#94795b',.08);const shade=new THREE.Mesh(new THREE.ConeGeometry(.75,.65,20,1,true),material('#bd9870',{side:THREE.DoubleSide}));shade.position.set(1.5,4.8,0);lamp.add(shade);sphere(lamp,.22,material('#ffe4ba',{emissive:'#ffca86',emissiveIntensity:3}),1.5,4.5,0);}
    // The lamp's light exists with or without the lamp (dark without it): a constant light count means toggling props
    // never forces every material's shader to recompile.
    const ll=new THREE.PointLight('#ffb971',has('lamp')?T.lamp:0,14,2);ll.position.set(-7.1,top+4.4,-4.6);this.set.add(ll);
    if(has('mug')){const mug=prop(6.5,0);cyl(mug,.7,.6,1.2,material('#417578'),0,.6,0,24);cyl(mug,.62,.62,.03,material('#251d16'),0,1.21,0,24);const handle=new THREE.Mesh(new THREE.TorusGeometry(.38,.13,8,20),material('#417578'));handle.position.set(.72,.72,0);mug.add(handle);}
    if(has('plant')){const pl=prop(-6.2,1.4);cyl(pl,.62,.48,1,material('#c46f4a',{roughness:.8}),0,.5,0,20);cyl(pl,.58,.58,.04,material('#3a2a1e'),0,.98,0,20);const leaf=material('#4f8a4a',{roughness:.6});
      for(let i=0;i<9;i++){const a=i*2.4,l=new THREE.Mesh(new THREE.SphereGeometry(.42,10,6),leaf);l.scale.set(.32,1,.12);l.position.set(Math.cos(a)*.3,1.6+(i%3)*.25,Math.sin(a)*.3);l.rotation.set(Math.sin(a)*.5,a,Math.cos(a)*.5);l.castShadow=true;pl.add(l);}}
    if(has('books')){const bk=prop(-4.4,-3.2),cols=['#7a3b3b','#33506e','#c9a66b','#3f5f4a'];for(let i=0;i<4;i++){const b2=box(bk,2.2-i*.12,.32,1.5-i*.06,material(cols[i],{roughness:.85}),i*.05,.16+i*.32,0,.03);b2.rotation.y=(i%2?.08:-.06);}}
    if(has('clock')){const ck=prop(8.6,-2.6);cyl(ck,.75,.75,.3,material('#d9cbb2'),0,.75,0,28).rotation.x=PI/2;const face=new THREE.Mesh(new THREE.CircleGeometry(.62,28),new THREE.MeshBasicMaterial({map:label('',10,'#000','#f6efe2')}));face.position.set(0,.75,.16);ck.add(face);
      for(const [len,ang] of [[.4,.9],[.52,-1.1]]){const h=box(ck,.05,len,.02,material('#2a2420'),0,0,0,.01);h.position.set(Math.sin(ang)*len/2,.75+Math.cos(ang)*len/2,.18);h.rotation.z=-ang;}box(ck,.9,.12,.4,material('#b8a688'),0,.06,0,.03);}
  }
  // A neon sign hanging in front of the window, above the cast: glass tubes that bloom, a coloured spill of light and
  // the odd flicker. Returns its animation (or null when the world has none).
  neonSign(g,w){
    const text=w.neon==='on'?(this.project.handle||'@embertake'):w.neon;if(!text)return null;
    const c=document.createElement('canvas');c.width=1024;c.height=256;const x=c.getContext('2d'),col=w.neonColor||'#ff7a59';
    let size=150;x.font=`bold ${size}px "Brush Script MT","Segoe Script",cursive`;while(x.measureText(text).width>900&&size>40){size-=6;x.font=`bold ${size}px "Brush Script MT","Segoe Script",cursive`;}
    x.fillStyle='rgba(18,10,14,.82)';x.beginPath();x.roundRect(12,24,1000,208,36);x.fill();x.textAlign='center';x.textBaseline='middle';x.lineJoin='round';
    for(const [blur,width,alpha] of [[40,14,.9],[18,9,1]]){x.shadowColor=col;x.shadowBlur=blur;x.strokeStyle=col;x.globalAlpha=alpha;x.lineWidth=width;x.strokeText(text,512,132);}
    x.shadowBlur=0;x.globalAlpha=1;x.strokeStyle='#fff3ea';x.lineWidth=3.5;x.strokeText(text,512,132);
    const tex=new THREE.CanvasTexture(c);tex.colorSpace=THREE.SRGBColorSpace;const m=new THREE.MeshBasicMaterial({map:tex,transparent:true,toneMapped:false,depthWrite:false});
    // Centred over the cast just above head height: close-ups catch it peeking out behind the hair, wider shots show it whole.
    const L=LAYOUT[Math.min(4,Math.max(1,this.project.cast.length))],cx=L.reduce((a,[x0])=>a+x0,0)/L.length;
    const sign=new THREE.Mesh(new THREE.PlaneGeometry(3.4,.85),m);sign.position.set(cx-.4,5.05,-4.6);g.add(sign);
    for(const sx of [-1.3,1.3]){const wire=new THREE.Mesh(new THREE.CylinderGeometry(.008,.008,8,4),new THREE.MeshBasicMaterial({color:'#1a1410'}));wire.position.set(sx,4.4,-.01);sign.add(wire);}// hung on two wires
    const spill=new THREE.PointLight(col,5,9,2);spill.position.set(cx-.4,5,-3.9);g.add(spill);
    return t=>{const n=Math.floor(t*9),r=Math.sin(n*12.9898)*43758.5453,flick=(r-Math.floor(r))>.985?.35:1,k=(1.35+.08*Math.sin(t*3.1))*flick;m.color.setScalar(k);spill.intensity=7*flick;sign.rotation.z=Math.sin(t*.5)*.012;};
  }
  // Frees replaced sets and characters after the next frame has rendered (see buildWorld).
  later(f){(this.trash||=[]).push(f);}
  // Worlds: the desk (built here) or another set from worlds.js. Rebuilt only when the set or time of day changes.
  // glTF loader with every decoder the import rules allow (Draco, KTX2/Basis, meshopt).
  makeLoader(){
    if(!this.dracoLoader){this.dracoLoader=new DRACOLoader().setDecoderPath(this.vendorPath+'draco/');if(this.renderer.isWebGLRenderer)this.ktx2Loader=new KTX2Loader().setTranscoderPath(this.vendorPath+'basis/').detectSupport(this.renderer);}
    const l=new GLTFLoader();l.setDRACOLoader(this.dracoLoader);if(this.ktx2Loader)l.setKTX2Loader(this.ktx2Loader);l.setMeshoptDecoder(MeshoptDecoder);return l;
  }
  asset(id){return this.assets.has(id)?Promise.resolve(this.assets.get(id)):this.loadAsset(id).then(buf=>{this.assets.set(id,buf);return buf;});}
  buildWorld(p){
    const key=JSON.stringify([p.set,p.timeOfDay,p.world]);if(key===this.worldKey)return;this.worldKey=key;
    if(this.world){const old=this.world;this.scene.remove(old.group);this.later(()=>old.dispose?.());}
    const nature=['forest','meadow','snow'].includes(p.set)&&!this.renderer.isSoftware;this.worldReady=Promise.resolve();
    if(p.set==='custom'&&!this.renderer.isSoftware&&(p.world.backdrop||p.world.scene)){
      const load=async(id,kind)=>{if(!id)return null;const buf=await this.asset(id),sz=kind==='backdrop'?imageSize(buf):null;return {buf,file:sz?.type==='hdr'?'bg.hdr':'bg.img'};};
      const loaders={loadGLTF:buf=>this.makeLoader().parseAsync(buf.slice(0),''),
        loadImage:buf=>new Promise((ok,no)=>{const url=URL.createObjectURL(new Blob([buf]));new THREE.TextureLoader().load(url,t=>{URL.revokeObjectURL(url);t.colorSpace=THREE.SRGBColorSpace;ok(t);},undefined,no);}),
        loadHDR:async buf=>{const d=new HDRLoader().parse(buf),t=new THREE.DataTexture(d.data,d.width,d.height,THREE.RGBAFormat,d.type);t.flipY=true;t.minFilter=t.magFilter=THREE.LinearFilter;t.generateMipmaps=false;t.needsUpdate=true;return t;}};
      const placeholder=buildCustomWorld(this.renderer,{...p.world,time:p.timeOfDay},{},loaders);this.world=placeholder;
      this.worldReady=Promise.all([load(p.world.backdrop,'backdrop'),load(p.world.scene,'scene')]).then(([backdrop,scene])=>{
        if(this.worldKey!==key)return;const w=buildCustomWorld(this.renderer,{...p.world,time:p.timeOfDay},{backdrop,scene},loaders,y=>this.regroundCast(y));
        w.onEnvironment=()=>{if(this.world===w){this.scene.environment=w.environment;this.scene.background=w.background;this.scene.environmentIntensity=w.environmentIntensity;}};
        this.scene.remove(placeholder.group);placeholder.dispose();this.installWorld(w);return w.ready.then(()=>{w.onEnvironment();this.onUpdate?.();});
      }).catch(e=>{console.error('World failed to load:',e);this.worldError='World: '+e.message;this.onUpdate?.(Error('The imported world could not load: '+e.message));});
    }else this.world=nature?buildNature(this.renderer,{preset:p.set,time:p.timeOfDay,...p.world}):this.deskWorld(p.timeOfDay,p.world);
    this.installWorld(this.world);
  }
  installWorld(w){
    this.world=w;
    this.scene.add(w.group);this.scene.background=w.background;this.scene.fog=w.fog;this.scene.environment=w.environment||null;this.scene.environmentIntensity=w.environmentIntensity??1;
    this.renderer.toneMappingExposure=w.exposure;this.key=w.key;this.screenLight=w.screenLight;this.renderKey=w.renderKey;this.renderKeyLabel=w.renderKeyLabel;
    this.screenCanvas=w.screen.canvas;this.screenCtx=w.screen.ctx;this.screenTexture=w.screen.texture;this.lastScreenKey=null;this.castKey='';
  }
  // An imported scene's floor was found: stand everyone on it.
  regroundCast(y){for(const r of this.rigs){r.root.position.y=y;r.baseY=y;if(r.shadow)r.shadow.position.y=y+.015;}this.updateHeads();this.onUpdate?.();}
  deskWorld(time,w){
    const air=deskAtmosphere(time,w),T=air.T,g=new THREE.Group(),hemi=new THREE.HemisphereLight(T.hemi[0],T.hemi[1],T.hemi[2]);g.add(hemi);g.add(air.group);
    // Night: the warm key comes from the lamp side and the window throws cool rim light, as in a lit room after dark.
    const key=new THREE.DirectionalLight(T.key[0],T.key[1]);key.position.set(time==='night'?5:-4,8,5);key.userData.base=T.key[1];key.castShadow=true;key.shadow.mapSize.set(2048,2048);Object.assign(key.shadow.camera,{left:-9,right:9,top:10,bottom:-7,near:.5,far:30});key.shadow.normalBias=.035;key.shadow.bias=-.00025;key.shadow.radius=3;g.add(key);
    // Warm rim from behind-left, as in the reference: it separates the characters from the dark set.
    const rim=new THREE.DirectionalLight(T.rim[0],T.rim[1]);rim.position.set(5,5,-4);g.add(rim);const rim2=new THREE.DirectionalLight(T.rim2[0],T.rim2[1]);rim2.position.set(-6,4,-5);g.add(rim2);const fill=new THREE.DirectionalLight(T.fill[0],T.fill[1]);fill.position.set(4,3,5);g.add(fill);
    this.set=group(g);this.makeSet(w,T);this.set.updateMatrixWorld(true);const neon=this.neonSign(g,w);const mon=(x,y,z)=>this.monitor.localToWorld(new THREE.Vector3(x,y,z));
    const screenLight=new THREE.PointLight('#8bcecf',w.monitor?T.screen:0,12,2);screenLight.position.copy(mon(0,.26,2.4));g.add(screenLight);this.set.traverse(o=>o.userData.staticLayer=true);this.renderKey.userData.staticLayer=false;this.renderKeyLabel.userData.staticLayer=false;
    return {group:g,key,screenLight,screen:{canvas:this.screenCanvas,ctx:this.screenCtx,texture:this.screenTexture,style:'monitor'},renderKey:this.renderKey,renderKeyLabel:this.renderKeyLabel,keyRest:this.keyRest,
      screenPoint:mon(0,0,.32),keyPoint:new THREE.Vector3(2.65,this.keyRest[1],1.85),screenPose:w.monitor?{pos:mon(.38,.77,14.9),at:mon(0,-.19,0),fov:44,ap:.0018}:null,groundY:w.surface==='table'?-.275:.26,
      background:new THREE.Color(T.bg),fog:new THREE.FogExp2(T.fog[0],T.fog[1]),environment:null,environmentIntensity:1,exposure:T.exposure,animate:t=>{air.animate(t);neon?.(t);},
      dispose:()=>g.traverse(o=>{o.geometry?.dispose();if(o.material)for(const m of [].concat(o.material)){if(!m.map?.userData.cached)m.map?.dispose();m.dispose();}})};
  }
  // Rebuilds only the characters whose look changed, then lays the cast out along the keyboard.
  buildCast(p){
    const key=JSON.stringify([p.characterStyle,this.worldKey,p.cast.map(c=>[c.id,c.kind,c.look,c.asset,sitsInFilm(p,c.id)])]);if(key===this.castKey)return;this.castKey=key;
    for(const r of this.rigs){this.cast.remove(r.root);this.cast.remove(r.shadow);this.later(()=>{if(r.imported)disposeImported(r);else if(!r.loading)disposeCharacter(r);});}
    const pending=[];
    const slots=LAYOUT[p.cast.length]||LAYOUT[4];
    this.rigs=p.cast.map((m,i)=>{const rig=m.kind==='imported'?this.importedPlaceholder(m,pending,key):buildCharacter(m,p.characterStyle),[x,z]=slots[i];const gy=this.world.groundY;rig.root.position.set(x,gy,z);rig.root.rotation.y=-x*.07;rig.baseYaw=rig.root.rotation.y;rig.baseY=gy;rig.baseX=x;rig.baseZ=z;this.cast.add(rig.root);
      const sh=new THREE.Mesh(new THREE.PlaneGeometry(2.1,1.6),new THREE.MeshBasicMaterial({map:softShadow(),transparent:true,depthWrite:false}));sh.rotation.x=-PI/2;sh.position.set(x,gy+.015,z+.05);sh.scale.setScalar(m.look.height*(m.kind==='bot'?1:m.look.build*(m.kind==='mascot'?1.3:.95)));this.cast.add(sh);rig.shadow=sh;
      if(!rig.imported&&!rig.loading&&sitsInFilm(p,m.id))rig.seatMesh=this.makeSeat(rig,p.set);return rig;});
    this.updateHeads();this.ready=Promise.all([...pending,this.worldReady]);
  }
  updateHeads(){this.heads={};for(const r of this.rigs){r.root.updateMatrixWorld(true);this.heads[r.member.id]=r.imported?importedHeadWorld(r):r.loading?new THREE.Vector3(r.root.position.x,3,r.root.position.z):headWorld(r);}this.marks={};for(const r of this.rigs)this.marks[r.member.id]=this.landmarks(r);this.baseHeads=this.heads;this.baseMarks=this.marks;}
  // Seated characters are lower: shift their framing landmarks and eyeline points by how far the hips have dropped.
  applySit(p,t){
    this.heads={};this.marks={};
    for(const r of this.rigs){const id=r.member.id;r.sit=r.loading?0:sitAt(p,t,id);const drop=r.sit?(r.imported?r.sit*r.sitDrop:r.sit*(r.plan.leg-r.seat.hip)*r.root.scale.y):0,b=this.baseMarks[id],h=this.baseHeads[id];
      if(!b||!h)continue;this.heads[id]=drop?h.clone().setY(h.y-drop):h;this.marks[id]=drop?{...b,crown:b.crown-drop,eye:b.eye-drop,chin:b.chin-drop,shoulder:b.shoulder-drop,waist:b.waist-drop*.7}:b;}
  }
  // A seat behind the character's standing spot, sized to their legs: a stack of books on the desk, a stump outdoors.
  makeSeat(rig,set){
    const S=rig.seat,g=new THREE.Group(),w=rig.kind==='mascot'?1.3:rig.kind==='bot'?1:.95*rig.member.look.build;g.position.set(0,0,-S.back);rig.root.add(g);
    if(set==='desk'){const cols=['#6e3b3b','#2f4c6a','#b89a62','#3e5b47'],n=3;for(let i=0;i<n;i++){const b2=box(g,w*(1.15-i*.06),S.top/n,.85-i*.04,material(cols[(i+rig.seed)%4],{roughness:.85}),i%2?.03:-.03,S.top/n*(i+.5),0,.02);b2.rotation.y=(i%2?.06:-.05);}}
    else if(set==='custom')box(g,w*1.1,S.top,.85,material('#6b625a',{roughness:.9}),0,S.top/2,0,.04);
    else{cyl(g,w*.6,w*.66,S.top,material('#6b4a33',{roughness:1}),0,S.top/2,0,14);cyl(g,w*.58,w*.58,.02,material('#c9a578',{roughness:.9}),0,S.top+.005,0,14);}
    return g;
  }
  // Imported characters load asynchronously: a translucent stand-in holds their place until the model arrives.
  importedPlaceholder(member,pending,key){
    const root=new THREE.Group(),ghost=new THREE.Mesh(new THREE.CapsuleGeometry(.55,2.2,6,16),new THREE.MeshStandardMaterial({color:'#9aa4ad',transparent:true,opacity:.25,depthWrite:false}));ghost.position.y=1.7*member.look.height;root.add(ghost);
    const rig={member,kind:'imported',loading:true,root,seed:1,face:null};
    const job=this.asset(member.asset.id)
      .then(buf=>this.makeLoader().parseAsync(buf.slice(0),''))
      .then(gltf=>{if(this.castKey!==key)return;const real=buildImportedRig(member,gltf),i=this.rigs.indexOf(rig);if(i<0)return;
        real.root.position.copy(rig.root.position);real.root.rotation.y=rig.root.rotation.y;real.baseYaw=rig.baseYaw;real.baseY=rig.baseY;real.baseX=rig.baseX;real.baseZ=rig.baseZ;real.shadow=rig.shadow;
        this.cast.remove(rig.root);this.cast.add(real.root);this.rigs[i]=real;if(sitsInFilm(this.project,member.id))real.seatMesh=this.makeSeat(real,this.project.set);this.updateHeads();this.onUpdate?.();})
      .catch(e=>{rig.error=e.message;ghost.material.color.set('#c0503c');console.error('Imported character failed to load:',e);this.onUpdate?.(e);});
    pending.push(job);return rig;
  }
  setProject(p){
    this.project=p;this.lastScreenKey=null;this.buildWorld(p);this.buildCast(p);
    for(const r of this.rigs)if(r.face)r.face.last='';
    if(p.set==='desk')this.key.intensity=this.key.userData.base*(3.7+p.warmth*.8)/4.5;this.renderer.warmth=p.warmth;if(this.grade)this.grade.uniforms.warmth.value=p.warmth;
  }
  castIndex(id){return Math.max(0,this.project.cast.findIndex(c=>c.id===id));}
  nameOf(id){return this.project.cast.find(c=>c.id===id)?.name||id;}
  castNames(){return this.project.cast.map(c=>c.name).join(' + ');}
  rigOf(id){return this.rigs.find(r=>r.member.id===id)||this.rigs[0];}
  setSize(w,h){this.w=w;this.h=h;this.canvas.width=w;this.canvas.height=h;this.renderer.setSize(w,h);this.composer.setSize(w,h);this.ao?.setSize(w,h);this.camera.aspect=w/h;this.camera.updateProjectionMatrix();}
  // Preview quality on slower devices: 2 full, 1 without ambient occlusion (exports always render at 2).
  setPreviewQuality(q){this.quality=q;if(this.ao)this.ao.enabled=q>=2;}
  setManual(v){this.manual=v;this.controls.enabled=v;if(v){this.controls.target.copy(this.target||new THREE.Vector3(0,2,0));this.controls.update();}}
  // Character creator turntable (id) or null for the story camera.
  setFocus(id){this.focus=id;}
  // Camera geometry for one shot segment: centre, spherical angles relative to the subject's facing, lens.
  // Body landmarks (rest pose, world space) used for framing: crown, eyes, chin, shoulders, waist, feet, width.
  landmarks(rig){
    const m=rig.member,h=m.look.height,base=rig.root.position,head=this.heads[m.id];
    if(rig.imported){const B=rig.B,y=o=>o?o.getWorldPosition(new THREE.Vector3()).y:null,hs=rig.headSize;return {x:head.x,z:head.z,crown:head.y+hs*.6,eye:head.y+hs*.05,chin:head.y-hs*.45,shoulder:y(B.leftUpperArm)??head.y-hs*1.3,waist:y(B.hips)??base.y+1.6,feet:base.y,width:1.1,scale:1};}
    if(rig.loading)return {x:base.x,z:base.z,crown:base.y+3.4*h,eye:base.y+3*h,chin:base.y+2.5*h,shoulder:base.y+2.1*h,waist:base.y+1.1*h,feet:base.y,width:1.1,scale:h};
    const p=rig.plan,hr=(rig.kind==='bot'?.47:rig.kind==='mascot'?.66:.55)*m.look.head*h,hair=rig.kind==='human'&&m.look.hairStyle!=='bald'?.12*h:0;
    // A mascot is all head: its "shoulders" are the bottom of the body and its "waist" is down on the legs.
    const chin=head.y-hr*.92,mascot=rig.kind==='mascot';
    return {x:head.x,z:head.z,crown:head.y+hr+hair,eye:head.y+.07*m.look.head*h,chin,shoulder:mascot?chin-.02*h:base.y+h*(p.leg+p.chestY+p.shoulderY),waist:base.y+h*p.leg*(mascot?.45:1),feet:base.y,width:(rig.kind==='bot'?1.4:rig.kind==='mascot'?1.6*m.look.build:1.1*m.look.build)*h,scale:h};
  }
  // Framing for one segment. Each size fixes where the frame top/bottom fall on the body (portrait safe zones:
  // faces stay between ~13% and 60% from the top, clear of captions and app UI), then the lens sets the distance.
  shotFrame(seg){
    const marks=this.marks,S=marks[seg.subject]||Object.values(marks)[0],O=marks[seg.other]||S,rig=this.rigOf(seg.subject),facing=rig.root.rotation.y;
    const all=Object.values(marks),minX=Math.min(...all.map(m=>m.x-m.width/2)),maxX=Math.max(...all.map(m=>m.x+m.width/2)),aspect=9/16,move=seg.cam?.move||'auto';
    const fit=(top,bottom,ft,fb,lens,width=0)=>{const v=lensToFov(lens)*DEG,need=(top-bottom)/(fb-ft);let H=need;if(width)H=Math.max(H,width/(aspect*.84));const ft2=ft+(1-need/H)*(fb-ft)*.6;return {H,yC:top+(ft2-.5)*H,dist:(H/2)/Math.tan(v/2)};};
    const sideOf=(a,b)=>Math.sign(b.x-a.x)||1,head=(m,y)=>new THREE.Vector3(m.x,y,m.z);
    // Lead room: shift the frame so the subject sits off-centre, away from the side their partner is on.
    const lead=(center,ay,W,toward,amt)=>{const right=new THREE.Vector3(Math.cos(ay),0,-Math.sin(ay)),sgn=Math.sign(new THREE.Vector3(toward.x-S.x,0,toward.z-S.z).dot(right))||0;return center.addScaledVector(right,amt*sgn*W);};
    const single=(size)=>{
            const hr=(S.crown-S.chin)/1.9,T={ecu:[S.eye+.55*hr,S.chin-.12*hr,.1,.6,85,8,0,.006],cu:[S.crown,S.chin-.3*hr,.09,.6,75,12,-3,.0058],single:[S.crown,S.shoulder-.42*(S.shoulder-S.waist),.14,.6,60,18,-1,.0042],ms:[S.crown,S.waist-.15*S.scale,.15,.64,50,15,1,.003],fs:[S.crown,S.feet,.16,.8,40,10,3,.0016]}[size];
      // A mascot is one block: close sizes keep its whole body and turn three-quarters, so two faces of the
      // block (and its volume) show, from slightly below like a hero shot.
      if(rig.kind==='mascot'){const mt={ecu:[S.crown,S.waist,.16,.66,70,30,-4,.006],cu:[S.crown,S.waist,.16,.66,70,30,-4,.006],single:[S.crown,S.feet,.17,.74,55,28,-2,.0042]}[size];if(mt)T.splice(0,8,...mt);}
      const [top,bottom,ft,fb,lens,yaw0,pitch,ap]=T,fr=fit(top,bottom,ft,fb,lens,rig.kind==='mascot'?S.width*1.45:0),yaw=yaw0*(seg.subject===seg.other?0:sideOf(S,O));
      const ay=facing+yaw*DEG,center=lead(head(S,fr.yC),ay,fr.H*aspect,O,seg.subject===seg.other?0:.07);
      return {center,yaw,pitch,dist:fr.dist,lens,ap,facing,move};
    };
    switch(seg.shot){
      case 'ecu':case 'cu':case 'single':case 'ms':case 'fs':return single(seg.shot);
      case 'two':{const top=Math.max(S.crown,O.crown),bottom=Math.min(S.waist,O.waist)-.2*S.scale,fr=fit(top,bottom,.12,.74,45,(Math.abs(S.x-O.x)+Math.max(S.width,O.width)*1.03)*1.04);
        return {center:new THREE.Vector3((S.x+O.x)/2,fr.yC,(S.z+O.z)/2),yaw:0,pitch:6,dist:fr.dist,lens:45,ap:.002,facing:0,move};}
      case 'wide':{const top=Math.max(...all.map(m=>m.crown)),bottom=Math.min(...all.map(m=>m.feet)),fr=fit(top,bottom,.2,.8,35,maxX-minX+.6);
        return {center:new THREE.Vector3((minX+maxX)/2,fr.yC,all.reduce((a,m)=>a+m.z,0)/all.length),yaw:12,pitch:9,dist:fr.dist,lens:35,ap:.0007,facing:0,move};}
      case 'ots':{
        if(seg.subject===seg.other||rig.kind==='mascot'||this.rigOf(seg.other).kind==='mascot')return single('single');// a block is too big to be a foreground shoulder
        // Camera behind the partner's outer shoulder: their head softly fills a frame edge, the speaker is framed chest-up.
        const axis=new THREE.Vector3(O.x-S.x,0,O.z-S.z).normalize(),front=new THREE.Vector3(axis.z,0,-axis.x);if(front.z<0)front.negate();
        // Far enough behind the partner, with a small sideways offset, that their head lands on the frame edge.
        const cam=head(O,lerp(O.shoulder,Math.max(O.eye,S.eye),.65)).addScaledVector(axis,3*O.scale).addScaledVector(front,1.15*O.scale),hr=(S.crown-S.chin)/1.9;
        const top=S.crown,bottom=S.shoulder-.42*(S.shoulder-S.waist),ft=.14,fb=.6,target0=head(S,0),d=cam.clone().setY(0).distanceTo(target0.setY(0)),H=(top-bottom)/(fb-ft),yC=top+(ft-.5)*H;
        const fov=2*Math.atan((H/2)/d),lens=clamp(18/Math.tan(fov/2),35,110),center=head(S,yC),v=cam.clone().sub(center),dist=v.length(),pitch=Math.asin(v.y/dist)/DEG;
        const yaw=Math.atan2(v.x,v.z)/DEG-facing/DEG,ay=facing+yaw*DEG;lead(center,ay,H*aspect,O,-.1);
        return {center,yaw,pitch,dist,lens:18/Math.tan(Math.atan((H/2)/dist)),ap:.0045,facing,move};
      }
      case 'custom':{const c=seg.cam,center=seg.subject==='all'?new THREE.Vector3((minX+maxX)/2,(Math.max(...all.map(m=>m.crown))+Math.min(...all.map(m=>m.waist)))/2,.4):head(S,(S.crown+S.shoulder)/2);
        return {center,yaw:c.yaw,pitch:c.pitch,dist:c.dist,lens:c.lens,ap:clamp(.012/c.dist,.0006,.005),facing,move};}
      default:return single('single');
    }
  }
  // Values the 360° camera panel shows when a preset is turned into a custom angle.
  describeShot(seg){const f=this.shotFrame(seg);return {yaw:Math.round(f.yaw),pitch:Math.round(f.pitch),dist:Math.round(f.dist*10)/10,lens:Math.round(f.lens),move:'auto'};}
  // Pose of one shot segment at time t (centre, angles, lens, move, emotion punch-in and handheld drift).
  shotPose(seg,t,start,end,cue){
    if(seg.shot==='screen'){const sp=this.world.screenPose;if(!sp)return this.shotPose({...seg,shot:'two'},t,start,end,cue);const u=smooth((t-start)/Math.max(1,end-start));// a slow push toward the monitor
      return {pos:sp.pos.clone().lerp(sp.at,.07*u),at:sp.at.clone(),fov:sp.fov,ap:sp.ap};}
    const f=this.shotFrame(seg),u=smooth((t-start)/Math.max(1,end-start)),move=f.move==='auto'?(seg.shot==='wide'?'orbit':'push'):f.move;
    let yaw=f.yaw,pitch=f.pitch,dist=f.dist,shakeAmp=0;
    if(move==='push')dist*=1-.08*u;else if(move==='pull')dist*=1+.1*u;else if(move==='orbit')yaw+=(seg.shot==='wide'?6:22)*(u-.5);else if(move==='rise')pitch+=14*u;else if(move==='handheld')shakeAmp=.035;
    pitch=clamp(pitch,-15,70);const ay=(f.facing/DEG+yaw)*DEG,ap2=pitch*DEG,at=f.center.clone();
    const pos=at.clone().add(new THREE.Vector3(Math.sin(ay)*Math.cos(ap2)*dist,Math.sin(ap2)*dist,Math.cos(ay)*Math.cos(ap2)*dist));
    let fov=lensToFov(f.lens);
    if(cue&&(cue.emotion==='angry'||cue.emotion==='surprised')&&cue.start>=start-.2&&move!=='static'){const e=t-cue.start;fov-=3.5*smooth(e/.18);shakeAmp+=.05*Math.exp(-Math.max(0,e)*5)*(e>0?1:0);}
    // Operator float: two slow octaves, scaled to the shot so wides drift as visibly as close-ups.
    if(move!=='static'){const fl=.011*dist;pos.x+=(Math.sin(t*.23)+.45*Math.sin(t*.61+2))*fl+Math.sin(t*41)*shakeAmp;pos.y+=(Math.sin(t*.37+1)+.4*Math.sin(t*.83))*fl*.5+Math.cos(t*37)*shakeAmp;}
    pos.y=Math.max(pos.y,this.world.groundY+.5);return {pos,at,fov,ap:f.ap};
  }
  placeCamera(st,t){
    const p=this.project;let pose;
    // Creator turntable: the camera holds a full-body front view while the character itself spins.
    if(this.focus){const rig=this.rigOf(this.focus),h=rig.member.look.height,base=rig.root.position,tall=rig.kind==='bot'||rig.kind==='mascot'?2.2*h:3.5*h,at=new THREE.Vector3(base.x,base.y+tall*.5,base.z);pose={pos:at.clone().add(new THREE.Vector3(0,.6,tall*1.75+1.2)),at,fov:38,ap:.0008};}
    else if(this.previewCam){const seg={shot:'custom',subject:this.previewCam.subject||st.subject,other:st.other,cam:this.previewCam};pose=this.shotPose(seg,t,st.shotStart,st.shotEnd,st.cue);}
    else{
      const segs=planShots(p),seg=segs[st.shotIndex];pose=this.shotPose(seg,t,st.shotStart,st.shotEnd,st.cue);
      // One take: instead of cutting, glide from where the previous shot ended into this one.
      if(p.cameraFlow==='one-take'&&st.shotIndex>0){
        const prev=segs[st.shotIndex-1],glide=Math.min(1.4,(st.shotEnd-st.shotStart)*.6),k=smooth((t-st.shotStart)/glide);
        if(k<1){const from=this.shotPose(prev,st.shotStart,prev.start,st.shotStart,null),e=k*k*(3-2*k);pose.pos.lerpVectors(from.pos,pose.pos,e);pose.at=from.at.clone().lerp(pose.at,e);pose.fov=lerp(from.fov,pose.fov,e);pose.ap=lerp(from.ap,pose.ap,e);}
      }
    }
    if(!this.focus&&!this.previewCam&&p.set==='desk'&&p.world.surface==='laptop'){
      const last=p.cues.at(-1),reveal=last?smooth((t-last.end+.25)/1.8):0;
      pose.pos.lerp(new THREE.Vector3(11,10,30),reveal);pose.at.lerp(new THREE.Vector3(0,2,-.5),reveal);pose.ap=lerp(pose.ap,.0004,reveal);
    }
    this.camera.position.copy(pose.pos);this.target=pose.at;this.camera.lookAt(pose.at);this.camera.fov=pose.fov;this.camera.updateProjectionMatrix();
    if(this.bokeh){const u2=this.bokeh.uniforms;u2.focus.value=pose.pos.distanceTo(pose.at);u2.aperture.value=p.dof?pose.ap:0;u2.maxblur.value=p.dof?clamp(pose.ap*4,.009,.022):0;}
    const look=FILM_LOOKS[p.filmLook]||FILM_LOOKS.studio;if(this.grade){const g=this.grade.uniforms;for(const k of ['contrast','sat','fade','mono','aberr','scan'])g[k].value=look[k]??FILM_LOOKS.studio[k];g.lift.value.set(...(look.lift||[0,0,0]));g.gain.value.set(...(look.gain||[1,1,1]));g.grain.value=look.grain??.032;}
    if(this.bloom)this.bloom.strength=look.bloom??.24;
  }
  seek(t,{overlay=true}={}){
    this.time=t;const p=this.project,st=poseAt(p,t),cue=st.cue;
    this.drawScreen(screenAt(p,t),t);this.renderer.sceneRevision=this.screenRevision;this.world.animate(t);this.applySit(p,t);
    if(!this.manual)this.placeCamera(st,this.focus?performance.now()/1000:t);else if(this.bokeh)this.bokeh.uniforms.aperture.value=0;
    const cam=this.camera.position.clone();
    if(!this.faceFill){this.faceFill=new THREE.PointLight('#ffe0bb',12,22,2);this.scene.add(this.faceFill);}
    const fillTarget=this.heads[st.speaker||st.subject]||new THREE.Vector3(0,3,0);
    this.faceFill.intensity=this.rigOf(st.speaker||st.subject).kind==='mascot'?2.5:5.5;
    this.faceFill.position.copy(fillTarget).lerp(cam,.35);this.faceFill.position.y+=this.rigOf(st.speaker||st.subject).kind==='mascot'?.65:.1;// level with a face, so the chin isn't left in shadow
    // Warm kicker on the side of the subject the camera can see: one bright side and a softer front give the
    // light-and-shadow modelling that makes a simple block or face read as solid.
    if(!this.kicker){this.kicker=new THREE.PointLight('#ffb36b',0,16,2);this.scene.add(this.kicker);}
    {const sr=this.rigOf(st.speaker||st.subject),ry=sr.root.rotation.y,side=new THREE.Vector3(Math.cos(ry),0,-Math.sin(ry)),fwd=new THREE.Vector3(Math.sin(ry),0,Math.cos(ry)),sc=sr.root.scale.y||1;
      if(side.dot(cam.clone().sub(fillTarget))<0)side.negate();
      this.kicker.position.copy(fillTarget).addScaledVector(side,3*sc).addScaledVector(fwd,.4*sc);this.kicker.position.y+=1.1*sc;this.kicker.intensity=this.focus?0:sr.kind==='mascot'?16:13;}let press=0;const cueIndex=cue?p.cues.indexOf(cue):0;
    for(const rig of this.rigs){
      const id=rig.member.id,focused=this.focus===id;rig.root.visible=!this.focus||focused;if(rig.shadow)rig.shadow.visible=rig.root.visible;rig.root.rotation.y=rig.baseYaw+(focused?(performance.now()/1000*.6)%(PI*2):0);
      const presence=this.focus?{off:0,moving:0,dir:0}:presenceAt(p,t,id),side=rig.baseX<0?-1:1;
      rig.root.position.x=rig.baseX+side*presence.off*11;rig.root.position.z=rig.baseZ;
      rig.root.visible=rig.root.visible&&presence.off<.999;
      if(rig.shadow){rig.shadow.visible=rig.root.visible;rig.shadow.position.x=rig.root.position.x;}
      if(rig.loading)continue;
      // Conversation stance: bodies turn about a quarter toward whoever they are talking with.
      if(!focused){const sa=stanceAt(p,t,id),ang=to=>{const m=this.marks[to];if(!m||to===id)return 0;return clamp(Math.atan2(m.x-rig.root.position.x,m.z-rig.root.position.z),-1.6,1.6)*.28;};rig.root.rotation.y=rig.baseYaw+lerp(ang(sa.from),ang(sa.to),sa.k);}
      const speaking=st.speaker===id,talk=speaking?st.energy:0,beat=speaking?beatAt(cue,t):0,
        // Listeners acknowledge the speaker's stressed words with small nods; each character on some lines only, so it never looks synced.
        nod=!speaking&&cue&&st.speaker&&(cueIndex+Math.round(rig.seed*7))%3!==0?beatAt(cue,t)*(.05+.03*Math.sin(rig.seed*5)):0,face=faceAt(p,t,id),act=actionAt(p,t,id);
      const partnerId=speaking?st.other:(st.speaker||st.other),partner=this.heads[partnerId!==id?partnerId:st.subject]||cam;
      // Eyelines: speakers address their partner, turning to the audience for the hook and the closing line.
      // Actors cheat toward the lens: the further away the partner, the more the face stays open to camera.
      // Limit how far the face turns from the lens: speakers ≤30° (hook and closing line ≤12°), listeners ≤55°.
      const me=this.heads[id],toward=speaking?partner:cue?this.heads[st.speaker]:partner,limit=(speaking?(cueIndex===0||cueIndex===p.cues.length-1?12:30):55)*DEG;
      const aCam=Math.atan2(cam.x-me.x,cam.z-me.z),aTo=Math.atan2(toward.x-me.x,toward.z-me.z),dA=Math.atan2(Math.sin(aTo-aCam),Math.cos(aTo-aCam)),glance=this.focus?{yaw:0,pitch:0}:glanceAt(p,t,id,rig.seed),aim=aCam+clamp(dA,-limit,limit)+glance.yaw,reach=Math.max(2,toward.distanceTo(me));
      const look=new THREE.Vector3(me.x+Math.sin(aim)*reach,lerp(toward.y,cam.y,.3)-glance.pitch*reach,me.z+Math.cos(aim)*reach);
      // Brows flash up on stressed words (an angry speaker knits them instead).
      if(speaking&&beat){face.raise+=beat*.05;if(face.emotion==='angry')face.brow-=beat*.12;}
      const perf={t,talk,beat,nod,walk:presence.moving,walkDir:presence.dir,sit:rig.sit,face,action:act,baseY:rig.baseY,cueIndex,look,partner,screen:this.world.screenPoint,key:this.world.keyPoint,camera:cam},res=rig.imported?animateImported(rig,perf):animateCharacter(rig,perf);press=Math.max(press,res.press);if(rig.seatMesh)rig.seatMesh.position.y=-(rig.root.position.y-rig.baseY)/rig.root.scale.y;
      const blink=blinkAt(p,t,id,rig.seed),gaze=clamp((speaking?0:clamp((this.heads[st.speaker]?.x??cam.x)-rig.root.position.x,-1,1)*.8)+glance.yaw*1.6,-1,1);
      const mouth=mouthAt(p,t,id)||{open:talk*(.45+.4*Math.abs(Math.sin(t*11+rig.seed))),wide:1,round:0,teeth:talk>.3?1:0,tongue:0};
      if(rig.imported)drawImportedFace(rig,mouth,face,blink);else drawFace(rig,mouth,face,blink,gaze,t);
    }
    const [ky,kl]=this.world.keyRest;this.renderKey.position.y=ky-.08*press;if(this.world.screen.style==='monitor')this.renderKeyLabel.position.y=kl-.08*press;
    if(this.grade)this.grade.uniforms.time.value=t;
    this.renderer.focusDistance=this.camera.position.distanceTo(this.manual?this.controls.target:this.target);this.composer.render();if(this.trash.length)for(const f of this.trash.splice(0))f();const x=this.out,w=this.w,h=this.h;x.drawImage(this.renderer.domElement,0,0,w,h);
    if(overlay&&!this.focus)this.overlay(st);return st;
  }
  // Forest: screen events are painted on a wooden sign (same text, progress and tone as the monitor).
  drawSign(s,tone,pct,flash,t,ss){
    const x=this.screenCtx,w=1600,h=900,ink={alert:'#ffb39a',calm:'#e4f3cf',success:'#d6f7a8',info:'#d3e6ff'}[s.tone]||'#f3e2c2';
    const g=x.createLinearGradient(0,0,0,h);g.addColorStop(0,'#7a5434');g.addColorStop(1,'#5d3f26');x.fillStyle=g;x.fillRect(0,0,w,h);
    for(let i=0;i<6;i++){x.fillStyle='rgba(0,0,0,.22)';x.fillRect(0,i*150+146,w,6);}
    x.strokeStyle='rgba(40,24,12,.35)';x.lineWidth=2;for(let i=0;i<70;i++){const y=(i*37.3)%h,a=(i*53)%w;x.beginPath();x.moveTo(0,y);x.bezierCurveTo(a,y+18,w-a,y-18,w,y+6);x.stroke();}
    x.strokeStyle='#3a2414';x.lineWidth=26;x.strokeRect(13,13,w-26,h-26);for(const [cx,cy] of [[60,60],[w-60,60],[60,h-60],[w-60,h-60]]){x.fillStyle='#2a2a2a';x.beginPath();x.arc(cx,cy,12,0,PI*2);x.fill();}
    const jitter=flash>0?Math.sin(t*90)*10*flash:0;x.save();x.translate(jitter,0);x.textAlign='center';x.shadowColor='rgba(20,10,4,.7)';x.shadowBlur=6;x.shadowOffsetY=4;
    x.fillStyle=ink;x.font='bold 40px Georgia';x.fillText(s.kicker,800,245);
    let size=118;x.font=`bold ${size}px Georgia`;while(x.measureText(s.title).width>1300&&size>44){size-=6;x.font=`bold ${size}px Georgia`;}x.fillStyle='#f6e7c8';x.fillText(s.title,800,450);
    let sub=40;x.font=`italic ${sub}px Georgia`;while(x.measureText(s.sub).width>1300&&sub>20){sub-=2;x.font=`italic ${sub}px Georgia`;}x.fillStyle='#e8d2a8';x.fillText(s.sub,800,545);
    if(pct!=null){x.shadowBlur=0;x.fillStyle='#3a2414';x.fillRect(400,620,800,26);x.fillStyle=ink;x.fillRect(404,624,792*ss.progress,18);x.font='34px Georgia';x.fillStyle='#f6e7c8';x.fillText(`${pct}%`,800,705);}
    x.restore();if(flash>0){x.fillStyle=`rgba(255,240,210,${.25*flash})`;x.fillRect(0,0,w,h);}
    this.screenTexture.needsUpdate=true;
  }
  drawScreen(ss,t){
    const s=ss.screen,tone=TONES[s.tone]||TONES.calm,pct=ss.progress==null?null:Math.round(ss.progress*100),flash=clamp(1-(t-ss.since)/.35,0,1);
    const typed=s.kind&&s.kind!=='card'?Math.min(3000,Math.max(0,Math.floor((t-(ss.start??ss.since))*30))):0;// apps are performed: redraw every frame
    const key=`${ss.index}|${typed}|${pct}|${Math.round(flash*8)}|${this.project.title}`;if(key===this.lastScreenKey)return;this.lastScreenKey=key;this.screenRevision++;
    if(s.kind&&s.kind!=='card'){drawAppScreen(this.screenCtx,s,Math.max(0,t-(ss.start??ss.since)),this.project.title,ss.span);/* before its line, an app shows its starting state */this.screenTexture.needsUpdate=true;return;}
    if(this.world.screen.style==='sign')return this.drawSign(s,tone,pct,flash,t,ss);
    const x=this.screenCtx,w=1600,h=900;x.fillStyle='#0c1824';x.fillRect(0,0,w,h);x.fillStyle='#142737';x.fillRect(0,0,w,75);x.fillStyle='#4f6877';for(let i=0;i<3;i++){x.beginPath();x.arc(38+i*29,37,7,0,PI*2);x.fill();}x.fillStyle='#88a0ab';x.font='22px monospace';x.textAlign='left';x.fillText('STUDIO / '+this.project.title.toUpperCase().slice(0,48),160,45);x.strokeStyle='#203849';x.lineWidth=1;for(let i=0;i<12;i++){x.beginPath();x.moveTo(0,150+i*65);x.lineTo(w,150+i*65);x.stroke();}for(let i=0;i<20;i++){x.beginPath();x.moveTo(i*90,75);x.lineTo(i*90,h);x.stroke();}
    const jitter=flash>0?Math.sin(t*90)*14*flash:0;x.save();x.translate(jitter,0);
    x.fillStyle='#112330';x.fillRect(450,170,700,580);x.strokeStyle=tone.edge;x.lineWidth=3;x.strokeRect(450,170,700,580);
    x.textAlign='center';x.fillStyle=tone.kick;x.font='bold 28px monospace';x.fillText(s.kicker,800,262);
    let size=96;x.font=`bold ${size}px Arial`;while(x.measureText(s.title).width>630&&size>36){size-=4;x.font=`bold ${size}px Arial`;}x.fillStyle=tone.title;x.fillText(s.title,800,400);
    let sub=24;x.font=`${sub}px monospace`;while(x.measureText(s.sub).width>640&&sub>14){sub-=2;x.font=`${sub}px monospace`;}x.fillStyle='#7590a0';x.fillText(s.sub,800,470);
    if(pct!=null){x.fillStyle='#253c48';x.fillRect(520,560,560,16);x.fillStyle=tone.bar;x.fillRect(520,560,560*ss.progress,16);x.font='20px monospace';x.fillStyle='#8fa6b0';x.fillText(`${pct}%`,800,615);}
    x.restore();if(flash>0){x.fillStyle=`rgba(220,240,255,${.22*flash})`;x.fillRect(0,0,w,h);for(let i=0;i<6;i++){x.fillStyle=`rgba(160,220,255,${.12*flash})`;x.fillRect(0,(i*157+t*900)%h,w,6);}}
    x.textAlign='left';x.fillStyle='#42606d';x.font='18px monospace';x.fillText(this.castNames().toUpperCase(),40,855);this.screenTexture.needsUpdate=true;
    this.screenLight.color.set(s.tone==='alert'?'#cf9c8c':s.tone==='success'?'#a8dca0':'#8bcecf');
  }
  overlay(st){const x=this.out,w=this.w,h=this.h,s=w/540,p=this.project;
    const vignette=x.createRadialGradient(w*.5,h*.47,w*.25,w*.5,h*.48,h*.7);vignette.addColorStop(0,'#0000');vignette.addColorStop(1,'#05070c70');x.fillStyle=vignette;x.fillRect(0,0,w,h);
    if(p.handle){x.save();x.globalAlpha=.78;x.fillStyle='#f1ece2';x.font=`700 ${15*s}px Arial`;x.textAlign='left';x.shadowColor='#000a';x.shadowBlur=6*s;x.fillText(p.handle,w*.06,h*.085);x.restore();}
    if(p.intro&&st.t<2.6){const a=smooth(st.t/.5)*smooth((2.6-st.t)/.6);x.save();x.globalAlpha=a;const band=x.createLinearGradient(0,0,0,h*.36);band.addColorStop(0,'#05080bf2');band.addColorStop(.7,'#05080bcc');band.addColorStop(1,'#05080b00');x.fillStyle=band;x.fillRect(0,0,w,h*.36);x.fillStyle='#e6c9aa';x.textAlign='center';x.font=`500 ${11*s}px Arial`;x.letterSpacing=`${2*s}px`;x.fillText((p.handle||'AN ORIGINAL').toUpperCase()+' PRESENTS',w/2,h*.13);x.letterSpacing='0px';x.font=`${35*s}px Georgia`;x.fillStyle='#f4e9d6';x.shadowColor='#000c';x.shadowBlur=10*s;const words=p.title.split(' '),lines=[];let row='';for(const word of words){if(x.measureText(row+' '+word).width>w*.8&&row){lines.push(row);row=word;}else row+=(row?' ':'')+word;}lines.push(row);lines.slice(0,3).forEach((l,i)=>x.fillText(l,w/2,h*(.18+i*.045)));x.restore();}
    if(p.captions&&st.cue)(p.captionStyle==='box'?this.boxCaption:this.boldCaption).call(this,st);
    // Time card ("2 HOURS LATER"): black with bold gold type, in the silence before its line.
    const card=p.cues.find(c=>c.card&&st.t>=c.start-CARD_TIME-.05&&st.t<c.start-.05);
    if(card){const a=smooth((st.t-(card.start-CARD_TIME-.05))/.3)*smooth((card.start-.05-st.t)/.3);x.save();x.globalAlpha=a;x.fillStyle='#05070b';x.fillRect(0,0,w,h);x.textAlign='center';x.fillStyle='#d9a441';
      let size=34*s;x.font=`800 ${size}px Arial`;while(x.measureText(card.card.toUpperCase()).width>w*.82&&size>14*s){size-=2*s;x.font=`800 ${size}px Arial`;}x.letterSpacing=`${1.5*s}px`;x.fillText(card.card.toUpperCase(),w/2,h*.5);x.restore();}
    if(p.endTitle&&st.final>0){const a=st.final;x.save();x.globalAlpha=a;x.fillStyle='#122125';x.fillRect(0,0,w,h);x.textAlign='center';x.fillStyle='#d6b088';x.font=`${12*s}px Arial`;x.fillText(this.castNames().toUpperCase(),w/2,h*.39);x.fillStyle='#ece5d5';x.font=`${38*s}px Georgia`;x.fillText(p.endTitle,w/2,h*.47);x.font=`${13*s}px Arial`;x.fillStyle='#9aafaa';x.fillText(p.endSub,w/2,h*.525);if(p.handle){x.fillStyle='#d6b088';x.font=`600 ${14*s}px Arial`;x.fillText(p.handle,w/2,h*.6);}x.restore();}
  }
  wrap(words,max){const x=this.out,lines=[];let row=[];for(const [i,word] of words.entries()){const test=[...row.map(r=>r.word),word].join(' ');if(x.measureText(test).width>max&&row.length){lines.push(row);row=[];}row.push({word,i});}if(row.length)lines.push(row);return lines;}
  boldCaption(st){
    const x=this.out,w=this.w,h=this.h,s=w/540,c=st.cue,words=spoken(c.text).split(/\s+/),cur=c.words?.length?Math.min(words.length-1,Math.round(wordAt(c,st.t)*words.length/c.words.length)):-1;
    const pop=smooth((st.t-c.start)/.14),fade=smooth((c.end-st.t)/.12),accent=ACCENTS[this.castIndex(c.speaker)%4];
    x.save();x.globalAlpha=fade;x.font=`800 ${29*s}px "Arial Black", Arial, sans-serif`;x.textAlign='left';x.textBaseline='middle';x.lineJoin='round';
    const lines=this.wrap(words,w*.84),lh=37*s,y0=h*.63-(lines.length-1)*lh/2,space=x.measureText(' ').width;
    x.translate(w/2,y0);x.scale(.94+.06*pop,.94+.06*pop);x.translate(-w/2,-y0);
    lines.forEach((row,li)=>{const width=row.reduce((a,r)=>a+x.measureText(r.word).width,0)+space*(row.length-1);let px=(w-width)/2;const py=y0+li*lh;
      for(const r of row){const ww=x.measureText(r.word).width,on=r.i===cur;x.shadowColor='rgba(0,0,0,.7)';x.shadowBlur=10*s;x.lineWidth=5*s;x.strokeStyle='rgba(8,8,10,.92)';x.strokeText(r.word,px,py);x.shadowBlur=0;x.fillStyle=on?accent:'#fbf7ef';x.fillText(r.word,px,py);px+=ww+space;}});
    x.restore();
  }
  boxCaption(st){const x=this.out,w=this.w,h=this.h,s=w/540,c=st.cue,max=w*.79;x.font=`600 ${20*s}px Arial`;const lines=this.wrap(spoken(c.text).split(' '),max).map(r=>r.map(q=>q.word).join(' '));const bh=(43+lines.length*27)*s,y=h*.83-bh*.5;x.fillStyle='rgba(10,18,23,.87)';x.beginPath();x.roundRect(w*.075,y,w*.85,bh,9*s);x.fill();x.textAlign='center';x.font=`bold ${10*s}px Arial`;x.fillStyle=NAME_COLORS[this.castIndex(c.speaker)%4];x.fillText(this.nameOf(c.speaker).toUpperCase(),w/2,y+22*s);x.font=`600 ${20*s}px Arial`;x.fillStyle='#eee9dc';lines.forEach((l,i)=>x.fillText(l,w/2,y+(48+i*27)*s));}
  dispose(){this.controls.dispose();for(const f of this.trash.splice(0))f();this.world?.dispose?.();for(const r of this.rigs){if(r.imported)disposeImported(r);else if(!r.loading)disposeCharacter(r);}this.scene.traverse(o=>{o.geometry?.dispose();if(o.material){for(const m of Array.isArray(o.material)?o.material:[o.material])m.dispose();}});this.composer.dispose();this.renderer.dispose();}
}
