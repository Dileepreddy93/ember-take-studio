// Headless entry for scripts/render-chrome.mjs: real WebGL frames, stepped deterministically.
import {FilmScene} from './scene.js';
import {validateProject} from './dist/timeline.js';
window.emberRender={
  // assets: {libraryId: base64 GLB/VRM} for imported characters; resolves once every model is loaded.
  async init(json,width,assets={},vendorPath){
    const p=validateProject(json),c=document.createElement('canvas');document.body.appendChild(c);
    const loadAsset=async id=>{if(!assets[id])throw Error(`Missing library model ${id}`);const bin=atob(assets[id]),buf=new Uint8Array(bin.length);for(let i=0;i<bin.length;i++)buf[i]=bin.charCodeAt(i);return buf.buffer;};
    this.scene=new FilmScene(c,p,{headless:true,loadAsset,vendorPath});this.scene.setSize(width,Math.round(width*16/9));
    await this.scene.ready;const failed=this.scene.rigs.filter(r=>r.error).map(r=>r.member.name+': '+r.error);if(this.scene.worldError)failed.push(this.scene.worldError);if(failed.length)throw Error(failed.join('; '));
    return {software:Boolean(this.scene.renderer.isSoftware),frames:Math.round(p.duration*30)};
  },
  frame(i,quality=.95){this.scene.seek(i/30);return this.scene.canvas.toDataURL('image/jpeg',quality);}
};
