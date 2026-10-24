import * as THREE from 'three';
import {RoundedBoxGeometry} from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import {EffectComposer} from 'three/examples/jsm/postprocessing/EffectComposer.js';
import {RenderPass} from 'three/examples/jsm/postprocessing/RenderPass.js';
import {UnrealBloomPass} from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import {BokehPass} from 'three/examples/jsm/postprocessing/BokehPass.js';
import {ShaderPass} from 'three/examples/jsm/postprocessing/ShaderPass.js';
import {OutputPass} from 'three/examples/jsm/postprocessing/OutputPass.js';
import {poseAt,mouthAt,faceAt,actionAt,screenAt,wordAt,beatAt,clamp,smooth,lerp} from './dist/timeline.js';
import {buildCharacter,animateCharacter,drawFace,headWorld,disposeCharacter} from './characters.js';
import {SoftwareRenderer} from './software-renderer.js';

const PI=Math.PI,DEG=PI/180;
function material(color,options={}){return new THREE.MeshStandardMaterial({color,roughness:.7,metalness:.05,...options})}
function box(parent,w,h,d,mat,x=0,y=0,z=0,r=.05){const o=new THREE.Mesh(new RoundedBoxGeometry(w,h,d,1,r),mat);o.position.set(x,y,z);o.castShadow=true;o.receiveShadow=true;parent.add(o);return o;}
function sphere(parent,r,mat,x,y,z,segments=12){const o=new THREE.Mesh(new THREE.SphereGeometry(r,segments,8),mat);o.position.set(x,y,z);o.castShadow=true;parent.add(o);return o;}
function group(parent,x=0,y=0,z=0){const o=new THREE.Group();o.position.set(x,y,z);parent.add(o);return o;}
function cyl(parent,a,b,h,mat,x,y,z,n=10){const o=new THREE.Mesh(new THREE.CylinderGeometry(a,b,h,n),mat);o.position.set(x,y,z);o.castShadow=true;o.receiveShadow=true;parent.add(o);return o;}
function line(parent,points,color,r=.018){const c=new THREE.CatmullRomCurve3(points.map(p=>new THREE.Vector3(...p)));const o=new THREE.Mesh(new THREE.TubeGeometry(c,14,r,6,false),material(color));parent.add(o);return o;}
function label(text,size=128,color='#ddd8ca',bg=null){const c=document.createElement('canvas');c.width=512;c.height=256;const x=c.getContext('2d');if(bg){x.fillStyle=bg;x.fillRect(0,0,512,256)}x.fillStyle=color;x.font=`600 ${size}px Arial`;x.textAlign='center';x.textBaseline='middle';x.fillText(text,256,130);const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;return t;}

const GRADE={uniforms:{tDiffuse:{value:null},time:{value:0},grain:{value:.032},warmth:{value:1}},
  vertexShader:'varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
  fragmentShader:'uniform sampler2D tDiffuse;uniform float time,grain,warmth;varying vec2 vUv;float h(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);}void main(){vec3 c=texture2D(tDiffuse,vUv).rgb;c=(c-.5)*1.06+.5;c*=vec3(1.+.03*warmth,1.,1.-.035*warmth);float l=dot(c,vec3(.299,.587,.114));c=mix(vec3(l),c,1.08);c+=(h(vUv*vec2(1080.,1920.)+fract(time*7.13)*91.7)-.5)*grain;gl_FragColor=vec4(clamp(c,0.,1.),1.);}'};
const TONES={alert:{edge:'#80564c',kick:'#e7b09a',title:'#d8cbbd',bar:'#bc8264'},calm:{edge:'#547e77',kick:'#b6e7d0',title:'#e2e9df',bar:'#a6d8b8'},success:{edge:'#5d8a5a',kick:'#c4ebaa',title:'#eef6e4',bar:'#9fd88a'},info:{edge:'#4f6f8f',kick:'#a9c8ee',title:'#e1e8f2',bar:'#8fb7e6'}};
const ACCENTS=['#ffd27a','#ffb48a','#9fd8ff','#c6f08a'],NAME_COLORS=['#d0b7ef','#eeb48d','#9fd8ff','#c6f08a'];
// Stage layout by cast size: x positions along the keyboard, slight depth stagger.
const LAYOUT={1:[[0,.45]],2:[[-1.32,.35],[1.25,.65]],3:[[-2.1,.45],[0,.25],[2.1,.55]],4:[[-2.6,.4],[-.88,.6],[.88,.35],[2.6,.55]]};
const SCREEN=new THREE.Vector3(0,4.3,-4.15),KEY=new THREE.Vector3(2.65,.33,1.85);
// Lens (mm, full-frame, portrait) to vertical field of view.
export const lensToFov=mm=>2*Math.atan(18/mm)/DEG;
// Camera presets in spherical terms around a framing centre: yaw is relative to the subject's facing (0 = front,
// +90 = their left side), so the same preset works for any character anywhere on the stage.
export const PRESETS={
  wide:{yaw:20,pitch:12,dist:13.3,lens:54,ap:.0007},two:{yaw:0,pitch:9.5,dist:11.3,lens:54,ap:.0012},
  single:{yaw:12,pitch:9,dist:6.4,lens:60,ap:.0025},cu:{yaw:8,pitch:5,dist:3.5,lens:66,ap:.0045},
  ots:{yaw:48,pitch:5,dist:5,lens:64,ap:.0042},custom:{yaw:0,pitch:8,dist:4,lens:50,ap:.0035}
};
const softShadow=(()=>{let tex=null;return ()=>{if(tex)return tex;const sc=document.createElement('canvas');sc.width=sc.height=128;const sx=sc.getContext('2d'),sg=sx.createRadialGradient(64,64,8,64,64,64);sg.addColorStop(0,'rgba(12,14,20,.64)');sg.addColorStop(.4,'rgba(12,14,20,.35)');sg.addColorStop(1,'rgba(12,14,20,0)');sx.fillStyle=sg;sx.fillRect(0,0,128,128);return tex=new THREE.CanvasTexture(sc);};})();

export class FilmScene{
  constructor(canvas,project,options={}){
    this.canvas=canvas;this.project=project;this.w=540;this.h=960;this.time=0;this.manual=false;this.screenRevision=0;this.focus=null;this.previewCam=null;this.rigs=[];this.castKey='';
    if(options.software){this.renderer=new SoftwareRenderer();}else{try{this.renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,preserveDrawingBuffer:true,powerPreference:'high-performance'});}catch{this.renderer=new SoftwareRenderer();}}this.renderer.setPixelRatio(1);this.renderer.setSize(540,960);this.renderer.shadowMap.enabled=true;this.renderer.shadowMap.type=THREE.PCFSoftShadowMap;this.renderer.toneMapping=THREE.ACESFilmicToneMapping;this.renderer.toneMappingExposure=1.13;
    this.out=canvas.getContext('2d',{alpha:false});this.scene=new THREE.Scene();this.scene.background=new THREE.Color('#101c23');this.scene.fog=new THREE.FogExp2('#111d24',.023);
    this.camera=new THREE.PerspectiveCamera(36,9/16,.1,100);this.controls=options.headless?{target:new THREE.Vector3(),update(){},dispose(){}}:new OrbitControls(this.camera,canvas);this.controls.enabled=false;this.controls.enableDamping=false;this.controls.target.set(0,2,0);this.controls.minDistance=2;this.controls.maxDistance=22;this.controls.maxPolarAngle=PI*.49;
    const hemi=new THREE.HemisphereLight('#bfdaed','#77533d',2.1);this.scene.add(hemi);
    this.key=new THREE.DirectionalLight('#ffdbad',4.5);this.key.position.set(-4,8,5);this.key.castShadow=true;this.key.shadow.mapSize.set(2048,2048);Object.assign(this.key.shadow.camera,{left:-9,right:9,top:10,bottom:-7,near:.5,far:30});this.key.shadow.normalBias=.035;this.key.shadow.bias=-.00025;this.key.shadow.radius=3;this.scene.add(this.key);
    // Warm rim from behind-left, as in the reference: it separates faceted characters from the dark set.
    const rim=new THREE.DirectionalLight('#ff914d',3.4);rim.position.set(5,5,-4);this.scene.add(rim);const rim2=new THREE.DirectionalLight('#ffb070',1.6);rim2.position.set(-6,4,-5);this.scene.add(rim2);const fill=new THREE.DirectionalLight('#82bbd4',1.5);fill.position.set(4,3,5);this.scene.add(fill);
    this.screenLight=new THREE.PointLight('#8bcecf',20,12,2);this.screenLight.position.set(0,4.5,-2.5);this.scene.add(this.screenLight);
    this.set=group(this.scene);this.makeSet();this.set.traverse(o=>o.userData.staticLayer=true);this.renderKey.userData.staticLayer=false;this.renderKeyLabel.userData.staticLayer=false;
    this.cast=group(this.scene);
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
  // Rebuilds only the characters whose look changed, then lays the cast out along the keyboard.
  buildCast(p){
    const key=JSON.stringify(p.cast.map(c=>[c.id,c.kind,c.look]));if(key===this.castKey)return;this.castKey=key;
    for(const r of this.rigs){this.cast.remove(r.root);this.cast.remove(r.shadow);disposeCharacter(r);}
    const slots=LAYOUT[p.cast.length]||LAYOUT[4];
    this.rigs=p.cast.map((m,i)=>{const rig=buildCharacter(m),[x,z]=slots[i];rig.root.position.set(x,.26,z);rig.root.rotation.y=-x*.07;rig.baseYaw=rig.root.rotation.y;rig.baseY=.26;this.cast.add(rig.root);
      const sh=new THREE.Mesh(new THREE.PlaneGeometry(2.1,1.6),new THREE.MeshBasicMaterial({map:softShadow(),transparent:true,depthWrite:false}));sh.rotation.x=-PI/2;sh.position.set(x,.275,z+.05);sh.scale.setScalar(m.look.height*(m.kind==='bot'?1:m.look.build*.95));this.cast.add(sh);rig.shadow=sh;return rig;});
    this.heads={};for(const r of this.rigs){r.root.updateMatrixWorld(true);this.heads[r.member.id]=headWorld(r);}
  }
  setProject(p){
    this.project=p;this.lastScreenKey=null;this.buildCast(p);
    for(const r of this.rigs)if(r.face)r.face.last='';
    this.key.intensity=3.7+p.warmth*.8;this.renderer.warmth=p.warmth;if(this.grade)this.grade.uniforms.warmth.value=p.warmth;
  }
  castIndex(id){return Math.max(0,this.project.cast.findIndex(c=>c.id===id));}
  nameOf(id){return this.project.cast.find(c=>c.id===id)?.name||id;}
  castNames(){return this.project.cast.map(c=>c.name).join(' + ');}
  rigOf(id){return this.rigs.find(r=>r.member.id===id)||this.rigs[0];}
  setSize(w,h){this.w=w;this.h=h;this.canvas.width=w;this.canvas.height=h;this.renderer.setSize(w,h);this.composer.setSize(w,h);this.camera.aspect=w/h;this.camera.updateProjectionMatrix();}
  setManual(v){this.manual=v;this.controls.enabled=v;if(v){this.controls.target.copy(this.target||new THREE.Vector3(0,2,0));this.controls.update();}}
  // Character creator turntable (id) or null for the story camera.
  setFocus(id){this.focus=id;}
  // Camera geometry for one shot segment: centre, spherical angles relative to the subject's facing, lens.
  shotFrame(seg){
    const heads=this.heads,S=heads[seg.subject]||Object.values(heads)[0],O=heads[seg.other]||S,rig=this.rigOf(seg.subject),facing=rig.root.rotation.y,side=Math.sign(O.x-S.x)||1;
    const all=Object.values(heads),minX=Math.min(...all.map(h=>h.x)),maxX=Math.max(...all.map(h=>h.x)),spread=maxX-minX;
    const f={...PRESETS[seg.shot==='screen'?'two':seg.shot]||PRESETS.single,facing,move:seg.cam?.move||'auto'};
    switch(seg.shot){
      case 'wide':f.center=new THREE.Vector3((minX+maxX)/2,2.05,.1);f.facing=0;f.dist=13.3*Math.max(1,(spread+2.4)/5);break;
      case 'two':f.center=S.clone().add(O).multiplyScalar(.5).add(new THREE.Vector3(0,-.75,0));f.facing=0;f.dist=Math.max(7.5,S.distanceTo(O)*3+3.6);break;
      case 'single':f.center=S.clone().add(new THREE.Vector3(0,-.4*rig.member.look.height,0));f.yaw*=side;break;
      case 'cu':f.center=S.clone().add(new THREE.Vector3(0,-.05,0));f.yaw*=side;f.dist*=rig.member.look.head*rig.member.look.height;break;
      case 'ots':f.center=S.clone().add(new THREE.Vector3(0,-.12,0));f.yaw=clamp(Math.atan2(O.x-S.x,O.z-S.z)/DEG*.55,-70,70);break;
      case 'custom':{const c=seg.cam;f.center=seg.subject==='all'?new THREE.Vector3((minX+maxX)/2,2.2,.4):S.clone().add(new THREE.Vector3(0,-.15,0));Object.assign(f,{yaw:c.yaw,pitch:c.pitch,dist:c.dist,lens:c.lens,ap:clamp(.012/c.dist,.0006,.005)});break;}
    }
    return f;
  }
  // Values the 360° camera panel shows when a preset is turned into a custom angle.
  describeShot(seg){const f=this.shotFrame(seg);return {yaw:Math.round(f.yaw),pitch:Math.round(f.pitch),dist:Math.round(f.dist*10)/10,lens:Math.round(f.lens),move:'auto'};}
  placeCamera(st,t){
    const p=this.project;let pos,at,fov,ap;
    // Creator turntable: the camera holds a full-body front view while the character itself spins.
    if(this.focus){const rig=this.rigOf(this.focus),h=rig.member.look.height,base=rig.root.position,tall=rig.kind==='bot'?2.2:3.5*h;at=new THREE.Vector3(base.x,base.y+tall*.5,base.z);pos=at.clone().add(new THREE.Vector3(0,.6,tall*1.75+1.2));fov=38;ap=.0008;}
    else if(st.shot==='screen'){pos=new THREE.Vector3(.3,4.9,7.2);at=new THREE.Vector3(0,4.15,-4.4);fov=44;ap=.0018;}
    else{
      const seg=this.previewCam?{shot:'custom',subject:this.previewCam.subject||st.subject,other:st.other,cam:this.previewCam}:{shot:st.shot,subject:st.subject,other:st.other,cam:st.cam},f=this.shotFrame(seg);
      const u=smooth((t-st.shotStart)/Math.max(1,st.shotEnd-st.shotStart)),move=f.move==='auto'?(seg.shot==='wide'?'orbit':'push'):f.move;
      let yaw=f.yaw,pitch=f.pitch,dist=f.dist,shakeAmp=0;
      if(move==='push')dist*=1-.08*u;else if(move==='pull')dist*=1+.1*u;else if(move==='orbit')yaw+=(seg.shot==='wide'?6:22)*(u-.5);else if(move==='rise')pitch+=14*u;else if(move==='handheld')shakeAmp=.035;
      pitch=clamp(pitch,-15,70);const ay=(f.facing/DEG+yaw)*DEG,ap2=pitch*DEG;
      at=f.center;pos=at.clone().add(new THREE.Vector3(Math.sin(ay)*Math.cos(ap2)*dist,Math.sin(ap2)*dist,Math.cos(ay)*Math.cos(ap2)*dist));
      fov=lensToFov(f.lens);ap=f.ap;
      const cue=st.cue;if(cue&&(cue.emotion==='angry'||cue.emotion==='surprised')&&cue.start>=st.shotStart-.2&&move!=='static'){const e=t-cue.start;fov-=3.5*smooth(e/.18);shakeAmp+=.05*Math.exp(-Math.max(0,e)*5)*(e>0?1:0);}
      if(move!=='static'){pos.x+=Math.sin(t*.23)*.06+Math.sin(t*41)*shakeAmp;pos.y+=Math.sin(t*.37+1)*.025+Math.cos(t*37)*shakeAmp;}
      pos.y=Math.max(pos.y,.75);
    }
    this.camera.position.copy(pos);this.target=at;this.camera.lookAt(at);this.camera.fov=fov;this.camera.updateProjectionMatrix();
    if(this.bokeh){const u2=this.bokeh.uniforms;u2.focus.value=pos.distanceTo(at);u2.aperture.value=p.dof?ap:0;u2.maxblur.value=p.dof?.008:0;}
  }
  seek(t,{overlay=true}={}){
    this.time=t;const p=this.project,st=poseAt(p,t),cue=st.cue;
    this.drawScreen(screenAt(p,t),t);this.renderer.sceneRevision=this.screenRevision;this.dust.rotation.y=t*.006;
    if(!this.manual)this.placeCamera(st,this.focus?performance.now()/1000:t);else if(this.bokeh)this.bokeh.uniforms.aperture.value=0;
    const cam=this.camera.position.clone();let press=0;const cueIndex=cue?p.cues.indexOf(cue):0;
    for(const rig of this.rigs){
      const id=rig.member.id,focused=this.focus===id;rig.root.visible=rig.shadow.visible=!this.focus||focused;rig.root.rotation.y=rig.baseYaw+(focused?(performance.now()/1000*.6)%(PI*2):0);
      const speaking=st.speaker===id,talk=speaking?st.energy:0,beat=speaking?beatAt(cue,t):0,face=faceAt(p,t,id),act=actionAt(p,t,id);
      const partnerId=speaking?st.other:(st.speaker||st.other),partner=this.heads[partnerId!==id?partnerId:st.subject]||cam;
      const look=speaking?cam.clone().lerp(partner,.25):cue?this.heads[st.speaker]:cam.clone().lerp(partner,.5);
      const res=animateCharacter(rig,{t,talk,beat,face,action:act,baseY:rig.baseY,cueIndex,look,partner,screen:SCREEN,key:KEY,camera:cam});press=Math.max(press,res.press);
      const u=(t*.31+rig.seed*.173)%1,blink=(u<.03?.1:1)*(Math.sin(t*1.3+rig.seed)>.997?.1:1),gaze=speaking?0:clamp((this.heads[st.speaker]?.x??cam.x)-rig.root.position.x,-1,1)*.8;
      const mouth=mouthAt(p,t,id)||{open:talk*(.45+.4*Math.abs(Math.sin(t*11+rig.seed))),wide:1,round:0,teeth:talk>.3?1:0,tongue:0};
      drawFace(rig,mouth,face,blink,gaze,t);
    }
    this.renderKey.position.y=.16-.08*press;this.renderKeyLabel.position.y=.334-.08*press;
    if(this.grade)this.grade.uniforms.time.value=t;
    this.renderer.focusDistance=this.camera.position.distanceTo(this.manual?this.controls.target:this.target);this.composer.render();const x=this.out,w=this.w,h=this.h;x.drawImage(this.renderer.domElement,0,0,w,h);
    if(overlay&&!this.focus)this.overlay(st);return st;
  }
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
    x.textAlign='left';x.fillStyle='#42606d';x.font='18px monospace';x.fillText(this.castNames().toUpperCase(),40,855);this.screenTexture.needsUpdate=true;
    this.screenLight.color.set(s.tone==='alert'?'#cf9c8c':s.tone==='success'?'#a8dca0':'#8bcecf');
  }
  overlay(st){const x=this.out,w=this.w,h=this.h,s=w/540,p=this.project;
    const vignette=x.createRadialGradient(w*.5,h*.47,w*.25,w*.5,h*.48,h*.7);vignette.addColorStop(0,'#0000');vignette.addColorStop(1,'#05070c70');x.fillStyle=vignette;x.fillRect(0,0,w,h);
    if(p.handle){x.save();x.globalAlpha=.78;x.fillStyle='#f1ece2';x.font=`700 ${15*s}px Arial`;x.textAlign='left';x.shadowColor='#000a';x.shadowBlur=6*s;x.fillText(p.handle,w*.06,h*.085);x.restore();}
    if(p.intro&&st.t<2.6){const a=smooth(st.t/.5)*smooth((2.6-st.t)/.6);x.save();x.globalAlpha=a;const band=x.createLinearGradient(0,0,0,h*.36);band.addColorStop(0,'#05080bf2');band.addColorStop(.7,'#05080bcc');band.addColorStop(1,'#05080b00');x.fillStyle=band;x.fillRect(0,0,w,h*.36);x.fillStyle='#e6c9aa';x.textAlign='center';x.font=`500 ${11*s}px Arial`;x.letterSpacing=`${2*s}px`;x.fillText((p.handle||'AN ORIGINAL').toUpperCase()+' PRESENTS',w/2,h*.13);x.letterSpacing='0px';x.font=`${35*s}px Georgia`;x.fillStyle='#f4e9d6';x.shadowColor='#000c';x.shadowBlur=10*s;const words=p.title.split(' '),lines=[];let row='';for(const word of words){if(x.measureText(row+' '+word).width>w*.8&&row){lines.push(row);row=word;}else row+=(row?' ':'')+word;}lines.push(row);lines.slice(0,3).forEach((l,i)=>x.fillText(l,w/2,h*(.18+i*.045)));x.restore();}
    if(p.captions&&st.cue)(p.captionStyle==='box'?this.boxCaption:this.boldCaption).call(this,st);
    if(p.endTitle&&st.final>0){const a=st.final;x.save();x.globalAlpha=a;x.fillStyle='#122125';x.fillRect(0,0,w,h);x.textAlign='center';x.fillStyle='#d6b088';x.font=`${12*s}px Arial`;x.fillText(this.castNames().toUpperCase(),w/2,h*.39);x.fillStyle='#ece5d5';x.font=`${38*s}px Georgia`;x.fillText(p.endTitle,w/2,h*.47);x.font=`${13*s}px Arial`;x.fillStyle='#9aafaa';x.fillText(p.endSub,w/2,h*.525);if(p.handle){x.fillStyle='#d6b088';x.font=`600 ${14*s}px Arial`;x.fillText(p.handle,w/2,h*.6);}x.restore();}
  }
  wrap(words,max){const x=this.out,lines=[];let row=[];for(const [i,word] of words.entries()){const test=[...row.map(r=>r.word),word].join(' ');if(x.measureText(test).width>max&&row.length){lines.push(row);row=[];}row.push({word,i});}if(row.length)lines.push(row);return lines;}
  boldCaption(st){
    const x=this.out,w=this.w,h=this.h,s=w/540,c=st.cue,words=c.text.split(/\s+/),cur=c.words?.length?Math.min(words.length-1,Math.round(wordAt(c,st.t)*words.length/c.words.length)):-1;
    const pop=smooth((st.t-c.start)/.14),fade=smooth((c.end-st.t)/.12),accent=ACCENTS[this.castIndex(c.speaker)%4];
    x.save();x.globalAlpha=fade;x.font=`800 ${29*s}px "Arial Black", Arial, sans-serif`;x.textAlign='left';x.textBaseline='middle';x.lineJoin='round';
    const lines=this.wrap(words,w*.84),lh=37*s,y0=h*.66-(lines.length-1)*lh/2,space=x.measureText(' ').width;
    x.translate(w/2,y0);x.scale(.94+.06*pop,.94+.06*pop);x.translate(-w/2,-y0);
    lines.forEach((row,li)=>{const width=row.reduce((a,r)=>a+x.measureText(r.word).width,0)+space*(row.length-1);let px=(w-width)/2;const py=y0+li*lh;
      for(const r of row){const ww=x.measureText(r.word).width,on=r.i===cur;x.shadowColor='rgba(0,0,0,.7)';x.shadowBlur=10*s;x.lineWidth=5*s;x.strokeStyle='rgba(8,8,10,.92)';x.strokeText(r.word,px,py);x.shadowBlur=0;x.fillStyle=on?accent:'#fbf7ef';x.fillText(r.word,px,py);px+=ww+space;}});
    x.restore();
  }
  boxCaption(st){const x=this.out,w=this.w,h=this.h,s=w/540,c=st.cue,max=w*.79;x.font=`600 ${20*s}px Arial`;const lines=this.wrap(c.text.split(' '),max).map(r=>r.map(q=>q.word).join(' '));const bh=(43+lines.length*27)*s,y=h*.83-bh*.5;x.fillStyle='rgba(10,18,23,.87)';x.beginPath();x.roundRect(w*.075,y,w*.85,bh,9*s);x.fill();x.textAlign='center';x.font=`bold ${10*s}px Arial`;x.fillStyle=NAME_COLORS[this.castIndex(c.speaker)%4];x.fillText(this.nameOf(c.speaker).toUpperCase(),w/2,y+22*s);x.font=`600 ${20*s}px Arial`;x.fillStyle='#eee9dc';lines.forEach((l,i)=>x.fillText(l,w/2,y+(48+i*27)*s));}
  dispose(){this.controls.dispose();for(const r of this.rigs)disposeCharacter(r);this.scene.traverse(o=>{o.geometry?.dispose();if(o.material){for(const m of Array.isArray(o.material)?o.material:[o.material])m.dispose();}});this.composer.dispose();this.renderer.dispose();}
}
