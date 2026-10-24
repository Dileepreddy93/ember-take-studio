import * as THREE from 'three';
// Geometry-based Canvas renderer for devices without WebGL. Uses the same scene,
// joints, materials, cameras and absolute timeline as the accelerated renderer.
export class SoftwareRenderer {
  constructor(){this.domElement=document.createElement('canvas');this.ctx=this.domElement.getContext('2d',{alpha:false});this.shadowMap={};this.isSoftware=true;this.cache=new WeakMap();this.textures=new WeakMap();this.setSize(540,960);}
  setPixelRatio(){}
  setSize(w,h){this.domElement.width=w;this.domElement.height=h;this.w=w;this.h=h;this.depth=new Float32Array(w*h);this.blurCanvas=document.createElement('canvas');this.blurCanvas.width=w;this.blurCanvas.height=h;this.staticKey=null;}
  dispose(){}
  render(scene,camera){
    const x=this.ctx,w=this.w,h=this.h;const bg=x.createLinearGradient(0,0,w,h);bg.addColorStop(0,'#192b36');bg.addColorStop(.5,'#17252d');bg.addColorStop(1,'#342b28');x.fillStyle=bg;x.fillRect(0,0,w,h);
    scene.updateMatrixWorld(true);camera.updateMatrixWorld(true);const pv=new THREE.Matrix4().multiplyMatrices(camera.projectionMatrix,camera.matrixWorldInverse),triangles=[],p=new THREE.Vector3(),n=new THREE.Vector3();
    const cacheKey=pv.elements.join(',')+'|'+this.sceneRevision+'|'+this.warmth,hasCache=this.staticKey===cacheKey;
    const key=new THREE.Vector3(-.5,.8,.65).normalize(),rim=new THREE.Vector3(.7,.5,-.5).normalize(),view=new THREE.Vector3();
    scene.traverseVisible(o=>{
      if(o.isSprite){p.setFromMatrixPosition(o.matrixWorld).applyMatrix4(pv);if(p.z<1){const size=o.scale.x*40*w/540;x.globalAlpha=.25;x.drawImage(o.material.map.image,(p.x+1)*w/2-size/2,(1-p.y)*h/2-size/2,size,size);x.globalAlpha=1;}return;}
      if(!o.isMesh)return;
      if(hasCache&&o.userData.staticLayer)return;
      const geo=o.geometry,pa=geo.attributes.position,na=geo.attributes.normal,ua=geo.attributes.uv,ix=geo.index;const count=ix?ix.count:pa.count;
      let simplified=this.cache.get(geo);
      if(!simplified){
        simplified={geometry:geo};
        // Bevels are retained but tessellated more economically in CPU mode.
        this.cache.set(geo,simplified);
      }
      const mat=Array.isArray(o.material)?o.material[0]:o.material;if(!mat||mat.opacity===0)return;
      const mvp=new THREE.Matrix4().multiplyMatrices(pv,o.matrixWorld),normalMatrix=new THREE.Matrix3().getNormalMatrix(o.matrixWorld),verts=new Float32Array(pa.count*4);
      for(let j=0;j<pa.count;j++){p.fromBufferAttribute(pa,j);const me=mvp.elements,iw=1/(me[3]*p.x+me[7]*p.y+me[11]*p.z+me[15]);p.applyMatrix4(mvp);verts[j*4]=(p.x+1)*w*.5;verts[j*4+1]=(1-p.y)*h*.5;verts[j*4+2]=p.z;verts[j*4+3]=iw;}
      const rgb=mat.color||new THREE.Color('#ffffff'),em=mat.emissive||new THREE.Color(0),ei=mat.emissiveIntensity||0;
      for(let i=0;i<count;i+=3){
        const a=ix?ix.getX(i):i,b=ix?ix.getX(i+1):i+1,c=ix?ix.getX(i+2):i+2;
        const ax=verts[a*4],ay=verts[a*4+1],az=verts[a*4+2],bx=verts[b*4],by=verts[b*4+1],bz=verts[b*4+2],cx=verts[c*4],cy=verts[c*4+1],cz=verts[c*4+2];
        if(az>1||bz>1||cz>1||az< -1||bz< -1||cz< -1)continue;
        if(Math.max(ax,bx,cx)<-1||Math.min(ax,bx,cx)>w+1||Math.max(ay,by,cy)<-1||Math.min(ay,by,cy)>h+1)continue;
        const area=(bx-ax)*(cy-ay)-(by-ay)*(cx-ax);if(Math.abs(area)<.015||(area>=0&&mat.side!==THREE.DoubleSide))continue;
        if(na){n.set(na.getX(a)+na.getX(b)+na.getX(c),na.getY(a)+na.getY(b)+na.getY(c),na.getZ(a)+na.getZ(b)+na.getZ(c)).applyMatrix3(normalMatrix).normalize();}else n.set(0,1,0);
        const diffuse=Math.max(0,n.dot(key)),back=Math.max(0,n.dot(rim)),ambient=.29+Math.max(n.y,0)*.12;
        const warmth=this.warmth||1,rr=rgb.r*(ambient+diffuse*(.8+warmth*.1)+back*.3)+em.r*ei,gg=rgb.g*(ambient+diffuse*.77+back*.22)+em.g*ei,bb=rgb.b*(ambient+diffuse*(.76-warmth*.15)+back*.18)+em.b*ei;
        const sr=v=>Math.round(Math.min(1,v<=.0031308?v*12.92:1.055*Math.pow(v,1/2.4)-.055)*255);
        const color=mat.isMeshBasicMaterial?[sr(rgb.r),sr(rgb.g),sr(rgb.b)]:[sr(rr),sr(gg),sr(bb)];
        const t={ax,ay,az,bx,by,bz,cx,cy,cz,z:(az+bz+cz)/3,color,opacity:mat.opacity,iw:[verts[a*4+3],verts[b*4+3],verts[c*4+3]],transparent:mat.transparent,staticLayer:o.userData.staticLayer};
        if(mat.map?.image&&ua){let cached=this.textures.get(mat.map);if(!cached||cached.version!==mat.map.version){const im=mat.map.image;let ctx=im.getContext?.('2d');if(!ctx){const cc=document.createElement('canvas');cc.width=im.width;cc.height=im.height;ctx=cc.getContext('2d');ctx.drawImage(im,0,0);}cached={pixels:ctx.getImageData(0,0,im.width,im.height).data,width:im.width,height:im.height,version:mat.map.version};this.textures.set(mat.map,cached);}t.texture=cached;t.uv=[ua.getX(a),1-ua.getY(a),ua.getX(b),1-ua.getY(b),ua.getX(c),1-ua.getY(c)];}
        triangles.push(t);
      }
    });
    // Per-pixel depth resolves intersecting limbs, keyboard caps and large planes.
    // Transparent decals are composited after opaque geometry, with depth testing.
    triangles.sort((a,b)=>Number(a.transparent)-Number(b.transparent)||(a.transparent?b.z-a.z:a.z-b.z));
    const image=x.getImageData(0,0,w,h),pixels=image.data,depth=this.depth;
    if(hasCache){pixels.set(this.staticPixels);depth.set(this.staticDepth);}else depth.fill(Infinity);
    const passes=hasCache?[triangles]:[triangles.filter(t=>t.staticLayer),triangles.filter(t=>!t.staticLayer)];
    for(let pass=0;pass<passes.length;pass++){
    for(const t of passes[pass]){
      const minX=Math.max(0,Math.floor(Math.min(t.ax,t.bx,t.cx))),maxX=Math.min(w-1,Math.ceil(Math.max(t.ax,t.bx,t.cx))),minY=Math.max(0,Math.floor(Math.min(t.ay,t.by,t.cy))),maxY=Math.min(h-1,Math.ceil(Math.max(t.ay,t.by,t.cy)));
      const den=(t.by-t.cy)*(t.ax-t.cx)+(t.cx-t.bx)*(t.ay-t.cy);if(Math.abs(den)<1e-8)continue;
      const d0x=(t.by-t.cy)/den,d0y=(t.cx-t.bx)/den,d1x=(t.cy-t.ay)/den,d1y=(t.ax-t.cx)/den;
      const tex=t.texture,uv=t.uv,iw=t.iw;
      for(let yy=minY;yy<=maxY;yy++){
        let l0=((t.by-t.cy)*(minX+.5-t.cx)+(t.cx-t.bx)*(yy+.5-t.cy))/den,l1=((t.cy-t.ay)*(minX+.5-t.cx)+(t.ax-t.cx)*(yy+.5-t.cy))/den;
        for(let xx=minX;xx<=maxX;xx++,l0+=d0x,l1+=d1x){const l2=1-l0-l1;if(l0<-.00001||l1<-.00001||l2<-.00001)continue;const z=l0*t.az+l1*t.bz+l2*t.cz,idx=yy*w+xx;if(z>depth[idx]+.000001)continue;
          let r=t.color[0],g=t.color[1],b=t.color[2],alpha=t.opacity??1;
          if(tex){const q=1/(l0*iw[0]+l1*iw[1]+l2*iw[2]),u=(l0*uv[0]*iw[0]+l1*uv[2]*iw[1]+l2*uv[4]*iw[2])*q,v=(l0*uv[1]*iw[0]+l1*uv[3]*iw[1]+l2*uv[5]*iw[2])*q,tx=Math.max(0,Math.min(tex.width-1,Math.floor(u*tex.width))),ty=Math.max(0,Math.min(tex.height-1,Math.floor(v*tex.height))),ti=(ty*tex.width+tx)*4;r=tex.pixels[ti];g=tex.pixels[ti+1];b=tex.pixels[ti+2];alpha*=tex.pixels[ti+3]/255;}
          if(alpha<.01)continue;const di=idx*4;if(alpha>.99){pixels[di]=r;pixels[di+1]=g;pixels[di+2]=b;}else{pixels[di]=pixels[di]*(1-alpha)+r*alpha;pixels[di+1]=pixels[di+1]*(1-alpha)+g*alpha;pixels[di+2]=pixels[di+2]*(1-alpha)+b*alpha;}if(!t.transparent)depth[idx]=z;
        }
      }
    }
    if(!hasCache&&pass===0){
    x.putImageData(image,0,0);
    if(this.focusDistance){
      const bx=this.blurCanvas.getContext('2d');bx.clearRect(0,0,w,h);bx.filter=`blur(${4*w/540}px)`;bx.drawImage(this.domElement,0,0);bx.filter='none';const blurred=bx.getImageData(0,0,w,h).data;
      const nf=2*camera.near*camera.far,sum=camera.far+camera.near,diff=camera.far-camera.near;
      for(let i=0;i<depth.length;i++){const distance=nf/(sum-depth[i]*diff),k=Math.min(.9,Math.max(0,(Math.abs(distance-this.focusDistance)-1.1)/5));if(k<=0||!Number.isFinite(k))continue;const p=i*4;pixels[p]+=k*(blurred[p]-pixels[p]);pixels[p+1]+=k*(blurred[p+1]-pixels[p+1]);pixels[p+2]+=k*(blurred[p+2]-pixels[p+2]);}
      x.putImageData(image,0,0);
    }
    this.staticPixels=new Uint8ClampedArray(pixels);this.staticDepth=new Float32Array(depth);this.staticKey=cacheKey;
    }
    }
    x.putImageData(image,0,0);
  }
}
