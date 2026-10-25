import {Muxer,ArrayBufferTarget} from 'mp4-muxer';
import {RATE} from './audio.js';
import {exportFrames} from './frame-export.js';
export async function exportFilm(scene,project,audio,width,onProgress,signal){
  if(!globalThis.VideoEncoder)return exportFrames(scene,project,audio,width,onProgress,signal);
  const height=width*16/9,fps=30,frames=Math.round(project.duration*fps);let vc=null,ac=null,err=null;
  for(const codec of ['avc1.640033','avc1.420033','vp09.00.40.08']){const c={codec,width,height,bitrate:width>=1080?10000000:5000000,framerate:fps,hardwareAcceleration:'prefer-software',latencyMode:'quality'};try{if((await VideoEncoder.isConfigSupported(c)).supported){vc=c;break;}}catch{}}
  if(!vc)return exportFrames(scene,project,audio,width,onProgress,signal);
  if(globalThis.AudioEncoder){for(const codec of ['mp4a.40.2','opus']){const c={codec,sampleRate:RATE,numberOfChannels:2,bitrate:160000};try{if((await AudioEncoder.isConfigSupported(c)).supported){ac=c;break;}}catch{}}}
  if(!ac)return exportFrames(scene,project,audio,width,onProgress,signal);
  const target=new ArrayBufferTarget(),muxer=new Muxer({target,video:{codec:vc.codec.startsWith('avc')?'avc':'vp9',width,height,frameRate:fps},audio:{codec:ac.codec==='opus'?'opus':'aac',numberOfChannels:2,sampleRate:RATE},fastStart:'in-memory',firstTimestampBehavior:'offset'});
  const ve=new VideoEncoder({output:(c,m)=>muxer.addVideoChunk(c,m),error:e=>err=e});ve.configure(vc);
  const ae=new AudioEncoder({output:(c,m)=>muxer.addAudioChunk(c,m),error:e=>err=e});ae.configure(ac);
  const before={w:scene.w,h:scene.h,t:scene.time,manual:scene.manual,focus:scene.focus,previewCam:scene.previewCam};scene.setManual(false);scene.setFocus(null);scene.previewCam=null;scene.setSize(width,height);
  const yieldUI=()=>new Promise(r=>setTimeout(r,0));
  try{
    for(let i=0;i<frames;i++){
      if(signal.aborted)throw Error('Render cancelled. Your project is unchanged.');if(err)throw err;
      while(ve.encodeQueueSize>5){await yieldUI();if(err)throw err;if(signal.aborted)throw Error('Render cancelled.');}
      scene.seek(i/fps);const f=new VideoFrame(scene.canvas,{timestamp:Math.round(i*1000000/fps),duration:Math.round(1000000/fps)});ve.encode(f,{keyFrame:i%60===0});f.close();
      if(i%3===0){onProgress(i/frames*.94,`Rendering frame ${i+1} of ${frames}`);await yieldUI();}
    }
    await ve.flush();if(err)throw err;onProgress(.95,'Mixing your soundtrack…');
    const count=audio[0].length,step=1024;for(let off=0;off<count;off+=step){const len=Math.min(step,count-off),data=new Float32Array(len*2);data.set(audio[0].subarray(off,off+len));data.set(audio[1].subarray(off,off+len),len);const ad=new AudioData({format:'f32-planar',sampleRate:RATE,numberOfFrames:len,numberOfChannels:2,timestamp:Math.round(off/RATE*1e6),data});ae.encode(ad);ad.close();if(off%(step*30)===0){await yieldUI();if(err)throw err;if(signal.aborted)throw Error('Render cancelled.');}}
    await ae.flush();if(err)throw err;muxer.finalize();onProgress(1,'Your film is ready.');
    return {blob:new Blob([target.buffer],{type:'video/mp4'}),videoCodec:vc.codec,audioCodec:ac.codec,frames,width,height};
  }finally{if(ve.state!=='closed')ve.close();if(ae.state!=='closed')ae.close();scene.setSize(before.w,before.h);scene.setManual(before.manual);scene.setFocus(before.focus);scene.previewCam=before.previewCam;scene.seek(before.t);}
}
