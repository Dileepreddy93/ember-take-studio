// Imported 3D characters: GLB/VRM reading, humanoid bone mapping, face-shape detection and the import rules.
// Pure (no three.js, no DOM), so the server validates uploads with exactly the code the tests run.

export const IMPORT_RULES={
  formats:['.glb','.vrm'],maxBytes:40e6,maxTriangles:300000,warnTriangles:120000,maxImages:24,
  // Extensions three.js decodes here without extra decoders.
  supportedExtensions:['KHR_materials_unlit','KHR_materials_emissive_strength','KHR_materials_clearcoat','KHR_materials_sheen','KHR_materials_transmission','KHR_materials_ior','KHR_materials_specular','KHR_materials_volume','KHR_materials_iridescence','KHR_materials_anisotropy','KHR_texture_transform','KHR_mesh_quantization','KHR_lights_punctual','EXT_meshopt_compression','VRM','VRMC_vrm','VRMC_springBone','VRMC_materials_mtoon','VRMC_node_constraint','KHR_materials_variants'],
  required:['hips','spine','neck','head','leftUpperArm','leftLowerArm','leftHand','rightUpperArm','rightLowerArm','rightHand'],
  recommended:['chest','leftUpperLeg','leftLowerLeg','leftFoot','rightUpperLeg','rightLowerLeg','rightFoot']
};
export const HUMANOID=['hips','spine','chest','neck','head','jaw','leftShoulder','leftUpperArm','leftLowerArm','leftHand','rightShoulder','rightUpperArm','rightLowerArm','rightHand','leftUpperLeg','leftLowerLeg','leftFoot','rightUpperLeg','rightLowerLeg','rightFoot'];

export function readGlb(input){
  const bytes=input instanceof Uint8Array?input:new Uint8Array(input),view=new DataView(bytes.buffer,bytes.byteOffset,bytes.byteLength);
  if(bytes.byteLength<20||view.getUint32(0,true)!==0x46546C67)throw Error('Not a binary glTF file. Export as .glb (glTF Binary) or .vrm.');
  if(view.getUint32(4,true)!==2)throw Error('Only glTF 2.0 files are supported.');
  const len=view.getUint32(12,true);if(view.getUint32(16,true)!==0x4E4F534A)throw Error('The file has no glTF JSON chunk.');
  return JSON.parse(new TextDecoder().decode(bytes.subarray(20,20+len)));
}

// Bone names from Mixamo, VRoid/VRM, Blender/Rigify, Character Creator, 3ds Max Biped and common hand-made rigs.
const STRIP=/mixamorig\d*|j_bip_[clr]_|cc_base_|bip0?1|def[-_]|armature|^.*[|:]/g;
function sideOf(raw){const n=raw.toLowerCase();if(/left|(^|[^a-z])l([^a-z]|$)|[._]l$|_l_/.test(n))return 'left';if(/right|(^|[^a-z])r([^a-z]|$)|[._]r$|_r_/.test(n))return 'right';return '';}
function coreOf(raw){return raw.toLowerCase().replace(/^mixamorig\d*[:_]?/,'').replace(STRIP,'').replace(/left|right/g,'').replace(/(^|[^a-z])[lr](?=[^a-z]|$)/g,'$1').replace(/[^a-z0-9]/g,'');}
const CORE={hips:/^(hips?|pelvis)$/,spine:/^(spine0?1?|abdomen|waist)$/,chest:/^(spine0?[23]|chest|upperchest|torso|spine03)$/,neck:/^neck0?1?$/,head:/^head$/,jaw:/^jaw$/,
  shoulder:/^(shoulder|clavicle)$/,upperArm:/^(upperarm|arm|uparm)$/,lowerArm:/^(forearm|lowerarm|elbow)$/,hand:/^(hand|wrist)$/,
  upperLeg:/^(upleg|upperleg|thigh)$/,lowerLeg:/^(leg|lowerleg|calf|shin|knee)$/,foot:/^(foot|ankle)$/};
export function mapHumanoid(json){
  const nodes=json.nodes||[],joints=new Set((json.skins||[]).flatMap(s=>s.joints||[]));
  const map={},parent=new Map();nodes.forEach((n,i)=>(n.children||[]).forEach(c=>parent.set(c,i)));
  // VRM files declare their humanoid map; trust it first.
  const v1=json.extensions?.VRMC_vrm?.humanoid?.humanBones,v0=json.extensions?.VRM?.humanoid?.humanBones;
  if(v1)for(const [bone,{node}] of Object.entries(v1))if(HUMANOID.includes(bone))map[bone]=node;
  if(v0)for(const {bone,node} of v0)if(HUMANOID.includes(bone))map[bone]=node;
  const candidates=(joints.size?[...joints]:nodes.map((_,i)=>i)).filter(i=>nodes[i]?.name);
  const spines=[];
  for(const i of candidates){
    const raw=nodes[i].name,core=coreOf(raw),side=sideOf(raw);if(/end$|twist|roll|toe|index|middle|ring|pinky|thumb|eye|finger/.test(core))continue;
    for(const [kind,re] of Object.entries(CORE)){
      if(!re.test(core))continue;
      if(['shoulder','upperArm','lowerArm','hand','upperLeg','lowerLeg','foot'].includes(kind)){if(!side)continue;const key=side+kind[0].toUpperCase()+kind.slice(1);if(map[key]===undefined)map[key]=i;}
      else if(kind==='spine'||kind==='chest')spines.push([kind,i]);
      else if(map[kind]===undefined)map[kind]=i;
      break;
    }
  }
  for(const [kind,i] of spines)if(map[kind]===undefined)map[kind]=i;
  // Rigs without a "hand" bone (palm/finger roots only): use the forearm's first child joint.
  for(const s of ['left','right'])if(map[s+'Hand']===undefined&&map[s+'LowerArm']!==undefined){const kids=(nodes[map[s+'LowerArm']].children||[]).filter(c=>!joints.size||joints.has(c));if(kids.length)map[s+'Hand']=kids[Math.floor(kids.length/2)];}
  if(map.chest===undefined&&map.spine!==undefined){const up=(nodes[map.spine].children||[]).find(c=>joints.has(c)&&c!==map.neck);if(up!==undefined)map.chest=up;}
  if(map.chest===undefined&&map.spine!==undefined)map.chest=map.spine;
  return Object.fromEntries(Object.entries(map).map(([k,i])=>[k,{index:i,name:nodes[i].name}]));
}

// Face shapes (morph targets) and VRM expressions → which lip-sync, blink and emotion drivers are available.
export function analyzeFace(json){
  const names=new Set();for(const m of json.meshes||[]){for(const n of m.extras?.targetNames||[])names.add(n);for(const p of m.primitives||[])for(const n of p.extras?.targetNames||[])names.add(n);}
  const has=re=>[...names].some(n=>re.test(n)),vrm1=json.extensions?.VRMC_vrm?.expressions?.preset||{},vrm0=(json.extensions?.VRM?.blendShapeMaster?.blendShapeGroups||[]).map(g=>(g.presetName||g.name||'').toLowerCase());
  const vrmHas=k=>Boolean(vrm1[k])||vrm0.includes(k);
  let lipSync='none';
  if(has(/^viseme_(aa|o)$/i))lipSync='oculus';else if(has(/^jawopen$/i))lipSync='arkit';else if(has(/^fcl_mth_a$/i))lipSync='vroid';
  else if(vrmHas('aa')||vrmHas('a'))lipSync='vrm';else if(has(/mouth.?open|open.?mouth|^(a|aa|ah|vowel_?a)$/i))lipSync='generic';
  const blink=has(/blink|eye.?close|fcl_eye_close|eyesclosed/i)||vrmHas('blink');
  const emotions=['happy','angry','sad','surprised'].filter(e=>has({happy:/smile|happy|joy/i,angry:/angry|browdown|mad/i,sad:/sad|sorrow|frown/i,surprised:/surpris|wide/i}[e])||vrmHas({happy:'happy',angry:'angry',sad:'sad',surprised:'surprised'}[e])||vrmHas({happy:'joy',angry:'angry',sad:'sorrow',surprised:'surprised'}[e]));
  return {morphs:[...names],lipSync,blink,emotions};
}

export function validateCharacter(buffer,filename=''){
  const errors=[],warnings=[],ext=(filename.match(/\.[a-z0-9]+$/i)?.[0]||'').toLowerCase(),size=buffer.byteLength;
  const report={ok:false,errors,warnings,format:ext==='.vrm'?'vrm':'glb',sizeMB:Math.round(size/1e5)/10,triangles:0,meshes:0,skins:0,bones:{},face:{morphs:[],lipSync:'none',blink:false,emotions:[]},vrm:null};
  if(!IMPORT_RULES.formats.includes(ext))errors.push(`Use a .glb or .vrm file (got "${ext||'no extension'}"). Export from Blender with File → Export → glTF 2.0 (.glb).`);
  if(size>IMPORT_RULES.maxBytes)errors.push(`The file is ${report.sizeMB} MB; the limit is ${IMPORT_RULES.maxBytes/1e6} MB. Reduce texture sizes (2048 px is plenty) and re-export.`);
  let json;try{json=readGlb(buffer);}catch(e){errors.push(e.message);return report;}
  report.vrm=json.extensions?.VRMC_vrm?'1.0':json.extensions?.VRM?'0.x':null;if(report.vrm)report.format='vrm';
  const unsupported=(json.extensionsRequired||json.extensionsUsed||[]).filter(e=>!IMPORT_RULES.supportedExtensions.includes(e));
  if(unsupported.length)(json.extensionsRequired||[]).some(e=>unsupported.includes(e))?errors.push(`Uses compression this studio cannot decode: ${unsupported.join(', ')}. Re-export without Draco/Basis (KTX2) compression.`):warnings.push(`Ignores these optional extensions: ${unsupported.join(', ')}.`);
  for(const m of json.meshes||[]){report.meshes++;for(const p of m.primitives||[]){const acc=json.accessors?.[p.indices??p.attributes?.POSITION];if(acc)report.triangles+=Math.round(p.indices!==undefined?acc.count/3:acc.count/3);}}
  report.skins=(json.skins||[]).length;
  if(!report.meshes)errors.push('The file has no meshes.');
  if(!report.skins)errors.push('The model has no skeleton (skin). Rig it first: free auto-rigging at mixamo.com, or VRoid Studio exports rigged .vrm files.');
  if(report.triangles>IMPORT_RULES.maxTriangles)errors.push(`${report.triangles.toLocaleString()} triangles is too heavy (limit ${IMPORT_RULES.maxTriangles.toLocaleString()}). Decimate the mesh in Blender.`);
  else if(report.triangles>IMPORT_RULES.warnTriangles)warnings.push(`${report.triangles.toLocaleString()} triangles: renders more slowly. Under ${IMPORT_RULES.warnTriangles.toLocaleString()} is ideal.`);
  if((json.images||[]).length>IMPORT_RULES.maxImages)warnings.push(`${json.images.length} textures: consider merging them for faster loading.`);
  if(report.skins){
    const bones=mapHumanoid(json);report.bones=bones;
    const missing=IMPORT_RULES.required.filter(b=>!bones[b]);
    if(missing.length)errors.push(`Missing humanoid bones: ${missing.join(', ')}. Use a standard humanoid rig (Mixamo, VRoid/VRM, Rigify, Character Creator).`);
    const soft=IMPORT_RULES.recommended.filter(b=>!bones[b]);if(soft.length)warnings.push(`Missing ${soft.join(', ')}: the body still animates, but legs will not bend.`);
  }
  report.face=analyzeFace(json);
  if(report.face.lipSync==='none'){if(report.bones.jaw){report.face.lipSync='jaw';warnings.push('No mouth shapes found: lip sync will move the jaw bone only.');}else warnings.push('No mouth shapes (visemes, ARKit jawOpen or VRM aa/oh) and no jaw bone: the mouth will not move. Add shape keys in Blender for lip sync.');}
  if(!report.face.blink)warnings.push('No blink shape (eyeBlink / Fcl_EYE_Close / VRM blink): the eyes will not blink.');
  if(!report.face.emotions.length)warnings.push('No expression shapes: feelings show through body language and head pose only.');
  report.ok=!errors.length;return report;
}
