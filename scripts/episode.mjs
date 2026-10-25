// One command from script to finished reel:
//   npm run episode -- ../episodes/reply_all.script.txt [--look=project.ember.json] [--engine=chatterbox] [--width=1080]
// Parses the screenplay, voices and lip-syncs every line, then renders and masters the MP4.
// --look copies cast, colours, voices, handle and settings from an existing project.
import {readFile,writeFile,mkdir} from 'node:fs/promises';
import {resolve,dirname,basename} from 'node:path';
import {fileURLToPath} from 'node:url';
import {spawnSync} from 'node:child_process';
import {DEFAULT_PROJECT,clone,validateProject,parseScript,applyScript} from '../dist/timeline.js';

const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const argv=process.argv.slice(2),args=Object.fromEntries(argv.filter(a=>a.startsWith('--')).map(v=>{const [k,...r]=v.slice(2).split('=');return [k,r.join('=')||true]}));
const scriptPath=argv.find(a=>!a.startsWith('--'));if(!scriptPath)throw Error('Usage: npm run episode -- path/to/script.txt');
const look=args.look?validateProject(JSON.parse(await readFile(resolve(args.look),'utf8'))):validateProject(clone(DEFAULT_PROJECT));
const parsed=parseScript(await readFile(resolve(scriptPath),'utf8'),look),{meta,cues}=parsed;
const name=basename(scriptPath).replace(/\.script\.txt$|\.txt$/,''),out=resolve(args.out||resolve(root,'renders',name));await mkdir(out,{recursive:true});
// The script's theme, set, time, camera, look, world and cast lines all apply (they used to be ignored here).
const project=validateProject({...applyScript(look,parsed),voiceEngine:args.engine||look.voiceEngine,duration:90,
  endTitle:args['end-title']??(meta.title||look.endTitle),endSub:args['end-sub']??look.endSub});
const draft=resolve(out,'draft.ember.json'),voiced=resolve(out,'project.ember.json');await writeFile(draft,JSON.stringify(project));
const run=(cmd,a)=>{const r=spawnSync(cmd,a,{cwd:root,stdio:'inherit'});if(r.status!==0)process.exit(r.status||1);};
console.log(`\n▸ Voicing ${cues.length} lines (${project.voiceEngine})`);
run(resolve(root,'../.venv/bin/python'),['-I','pipeline/voice.py',draft,voiced]);
console.log(`\n▸ Rendering ${args.width||1080}p`);
run(process.execPath,['scripts/render-chrome.mjs',`--project=${voiced}`,`--out=${out}`,`--width=${args.width||1080}`]);
console.log(`\n✓ ${resolve(out,'film.mp4')}\n  Open ${voiced} in the studio to keep editing.`);
