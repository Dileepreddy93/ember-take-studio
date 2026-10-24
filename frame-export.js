import {wav} from './audio.js';
import {zipSync,strToU8} from 'fflate';
export async function exportFrames(scene,project,audio,width,onProgress,signal){
  const height=width*16/9,frames=Math.round(project.duration*30),files={},before={w:scene.w,h:scene.h,t:scene.time,manual:scene.manual},started=performance.now();
  scene.setManual(false);scene.setSize(width,height);
  try{
    for(let i=0;i<frames;i++){
      if(signal.aborted)throw Error('Render cancelled. Your project is unchanged.');
      scene.seek(i/30);const blob=await new Promise(ok=>scene.canvas.toBlob(ok,'image/jpeg',.96));if(!blob)throw Error('Could not capture a frame.');
      files[`frames/frame_${String(i).padStart(5,'0')}.jpg`]=new Uint8Array(await blob.arrayBuffer());
      onProgress(i/frames*.97,`Rendering frame ${i+1} of ${frames} · ${Math.round((performance.now()-started)/1000)} seconds elapsed`);if(i%3===0)await new Promise(r=>setTimeout(r,0));
    }
    files['soundtrack.wav']=new Uint8Array(await wav(audio).arrayBuffer());files['project.ember.json']=strToU8(JSON.stringify(project,null,2));
    files['convert_video.py']=strToU8(`#!/usr/bin/env python3\nimport subprocess,pathlib,shutil\nroot=pathlib.Path(__file__).resolve().parent\nif not shutil.which('ffmpeg'): raise SystemExit('Install the free FFmpeg program, then run this script again.')\nsubprocess.run(['ffmpeg','-y','-framerate','30','-i',str(root/'frames/frame_%05d.jpg'),'-i',str(root/'soundtrack.wav'),'-c:v','libx264','-preset','medium','-crf','17','-pix_fmt','yuv420p','-c:a','aac','-b:a','192k','-af','loudnorm=I=-16:TP=-1.5:LRA=11','-t','${project.duration}','-movflags','+faststart',str(root/'film.mp4')],check=True)\nprint('Ready:',root/'film.mp4')\n`);
    files['README.txt']=strToU8('Every frame in this package was rendered at the selected native resolution.\nInstall the free FFmpeg and Python 3 programs. Extract this ZIP, then run:\npython3 convert_video.py\nThe result is film.mp4 with the supplied soundtrack.\nNo account, AI service or paid software is required.\n');
    onProgress(.98,'Packing rendered frames and soundtrack…');await new Promise(r=>setTimeout(r,10));
    const zip=zipSync(files,{level:0});onProgress(1,'Your render package is ready.');return {blob:new Blob([zip],{type:'application/zip'}),kind:'frames',frames,width,height};
  }finally{scene.setSize(before.w,before.h);scene.setManual(before.manual);scene.seek(before.t);}
}
