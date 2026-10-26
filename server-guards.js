import {validateProject} from './dist/timeline.js';

// Keep HTTP input validation outside the job runner so invalid work never enters the queue.
export function jobProject(input){
  try{
    const project=validateProject(input);
    if(!project.cues.length)throw Error('Add at least one dialogue line.');
    return project;
  }catch(error){throw Object.assign(error,{status:400});}
}
export function byteRange(header,size){
  const match=/^bytes=(\d*)-(\d*)$/.exec(header);
  if(!match||(!match[1]&&!match[2])||size===0)return null;
  let start,end;
  if(!match[1]){const suffix=Number(match[2]);if(!Number.isSafeInteger(suffix)||suffix<=0)return null;start=Math.max(0,size-suffix);end=size-1;}
  else{start=Number(match[1]);end=match[2]?Math.min(Number(match[2]),size-1):size-1;}
  return Number.isSafeInteger(start)&&Number.isSafeInteger(end)&&start>=0&&start<size&&end>=start?{start,end}:null;
}
export function allowLocalRequest(headers,port){
  const allowed=new Set([`localhost:${port}`,`127.0.0.1:${port}`,`[::1]:${port}`]);
  if(!allowed.has(headers.host))return false;
  if(headers['sec-fetch-site']==='cross-site')return false;
  if(headers.origin){try{const origin=new URL(headers.origin);return origin.protocol==='http:'&&allowed.has(origin.host);}catch{return false;}}
  return true;
}
