// Headless entry for scripts/render-chrome.mjs: real WebGL frames, stepped deterministically.
import {FilmScene} from './scene.js';
import {validateProject} from './dist/timeline.js';
window.emberRender={
  init(json,width){
    const p=validateProject(json),c=document.createElement('canvas');document.body.appendChild(c);
    this.scene=new FilmScene(c,p,{headless:true});this.scene.setSize(width,Math.round(width*16/9));
    return {software:Boolean(this.scene.renderer.isSoftware),frames:Math.round(p.duration*30)};
  },
  frame(i,quality=.95){this.scene.seek(i/30);return this.scene.canvas.toDataURL('image/jpeg',quality);}
};
