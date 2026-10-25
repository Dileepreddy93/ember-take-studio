// Draw script-authored applications on the set monitor (no external assets).
export function drawAppScreen(x,s,elapsed,title){
  const W=1600,H=900,kind=s.kind,lines=s.lines||[],visible=Math.max(0,Math.floor(elapsed*32));
  x.fillStyle='#101923';x.fillRect(0,0,W,H);x.fillStyle='#202c39';x.fillRect(0,0,W,92);
  for(let i=0;i<3;i++){x.fillStyle=['#d97770','#d7b56d','#85ad84'][i];x.beginPath();x.arc(40+i*32,45,9,0,Math.PI*2);x.fill();}
  x.textAlign='left';x.font='28px monospace';x.fillStyle='#d2dce4';x.fillText((s.title||title).slice(0,65),170,55,1360);
  const idle=kind==='idle',content=idle?['// '+title,'','function makeStory(idea) {','  const cast = imagine(idea);','  return bringToLife(cast);','}','', '// Your next scene starts here.']:lines;
  let remaining=idle?Infinity:visible;
  x.save();x.beginPath();x.rect(35,112,1530,720);x.clip();
  for(const [i,line] of content.entries()){
    const shown=line.slice(0,Math.max(0,remaining));remaining-=line.length+4;const y=170+i*85;
    if(kind==='chat'){x.fillStyle=i%2?'#243b46':'#28334b';x.fillRect(65+(i%2)*100,y-42,1340,68);}
    if(kind==='inbox'){x.fillStyle=i===0?'#263d51':'#172532';x.fillRect(60,y-43,1480,72);}
    x.font='32px monospace';x.fillStyle=kind==='code'?(line.startsWith('+')?'#a8d9ac':line.startsWith('-')?'#edaba1':'#b7c7d5'):idle?'#708a9a':kind==='terminal'?'#b6dfb2':'#d8e2eb';
    if(kind==='code'||idle){x.fillStyle='#526574';x.fillText(String(i+1).padStart(2,' '),55,y);x.fillStyle=idle?'#708a9a':line.startsWith('+')?'#a8d9ac':line.startsWith('-')?'#edaba1':'#b7c7d5';}
    x.fillText(shown,kind==='code'||idle?135:90,y,kind==='code'||idle?1390:1430);
  }
  x.restore();x.fillStyle='#738b9c';x.font='22px monospace';x.fillText(idle?'READY TO CREATE':kind.toUpperCase(),45,865);
}
