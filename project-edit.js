// Generated speech is one mixed track. Any speech/timing edit invalidates that entire track.
const speechKey=p=>JSON.stringify({cues:p.cues.map(c=>[c.id,c.speaker,c.text,c.start,c.end,c.pause,c.emotion]),voices:p.cast.filter(c=>p.cues.some(q=>q.speaker===c.id)).map(c=>[c.id,c.voice]),engine:p.voiceEngine,modulation:p.voiceModulation??1});
export function reconcileVoice(before,next){
  if(!before.voiceData||next.voiceData!==before.voiceData||!before.cues.some(c=>c.visemes)||speechKey(before)===speechKey(next))return next;
  return {...next,voiceData:null,cues:next.cues.map(c=>{const out={...c};delete out.visemes;delete out.words;return out;})};
}
