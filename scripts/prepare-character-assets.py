"""Compile CC0 MakeHuman data into a portable, browser-only character kit.

Usage: python3 scripts/prepare-character-assets.py /path/to/extracted/data
The source directory contains 3dobjs, targets, rigs, and selected system assets.
Only data is read; no upstream Python or add-on code is used.
"""
import base64, json, re, subprocess, sys, tempfile
from pathlib import Path

source = Path(sys.argv[1])
output = Path(__file__).resolve().parents[1] / 'assets' / 'character'
output.mkdir(parents=True, exist_ok=True)

def obj(path, body=False):
    vertices, uvs, corners, faces, groups = [], [], [], [], []
    lookup = {}; group = ''
    for line in path.read_text().splitlines():
        p = line.split()
        if not p: continue
        if p[0] == 'v': vertices.extend(float(x) for x in p[1:4])
        elif p[0] == 'vt': uvs.append([float(x) for x in p[1:3]])
        elif p[0] == 'g': group = p[1]
        elif p[0] == 'f' and (not body or group == 'body'):
            face = []
            for token in p[1:]:
                v, t, *_ = (token + '//').split('/')
                key = (int(v)-1, int(t)-1 if t else 0)
                if key not in lookup:
                    lookup[key] = len(corners); corners.append(key)
                face.append(lookup[key])
            for i in range(1, len(face)-1): faces.extend([face[0], face[i], face[i+1]])
    return dict(positions=vertices, source=[v for v,t in corners], uv=[x for v,t in corners for x in uvs[t]], indices=faces)

def proxy(path):
    result = obj(path.with_suffix('.obj')); fit=[]; delete=[]; scale={}; mode=''
    for line in path.read_text().splitlines():
        p=line.split()
        if not p or p[0].startswith('#'):continue
        if p[0] in ['verts','delete_verts']:mode=p[0];continue
        if p[0] in ['x_scale','y_scale','z_scale']:scale[p[0][0]]=[int(p[1]),int(p[2]),float(p[3])]
        if mode=='verts':
            if not p[0].isdigit():mode='';continue
            fit.append([int(p[0]),int(p[0]),int(p[0]),1,0,0,0,0,0] if len(p)==1 else [int(x) for x in p[:3]]+[float(x) for x in p[3:9]])
        elif mode=='delete_verts':
            for token in re.findall(r'\d+\s*-\s*\d+|\d+',line):
                if '-' in token:
                    a,b=map(int,token.split('-'));delete.extend(range(a,b+1))
                else:delete.append(int(token))
    assert len(fit)*3==len(result['positions']),path
    result.update(fit=fit,delete=delete,scale=scale)
    return result

data={'body':obj(source/'3dobjs/base.obj',True),'targets':{},'parts':{}}
for p in sorted((source/'targets').rglob('*.target')):
    values=[]
    for line in p.read_text().splitlines():
        v=line.split()
        if v and not v[0].startswith('#'):values.extend([int(v[0])]+[float(x) for x in v[1:4]])
    data['targets'][p.stem]=values

parts={'short':'hair/short01/short01','bob':'hair/bob01/bob01','long':'hair/long01/long01',
       'casual':'clothes/male_casualsuit01/male_casualsuit01','jacket':'clothes/male_casualsuit02/male_casualsuit02',
       'relaxed':'clothes/female_casualsuit01/female_casualsuit01','shoes':'clothes/shoes01/shoes01',
       'brows':'eyebrows/eyebrow001/eyebrow001','eyes':'eyes/high-poly/high-poly','teeth':'teeth/teeth_base/teeth_base'}
for name,path in parts.items():data['parts'][name]=proxy(source/(path+'.mhclo'))
rig=json.loads((source/'rigs/default.mhskel').read_text());weights=json.loads((source/'rigs/default_weights.mhw').read_text())['weights']
names=list(rig['bones']);data['bones']=[{'name':name,'parent':names.index(b['parent']) if b['parent'] else -1,'head':rig['joints'][b['head']]} for name,b in rig['bones'].items()]
byvertex=[[] for _ in range(len(data['body']['positions'])//3)]
for name,items in weights.items():
    if name not in names:continue
    for v,w in items:byvertex[v].append((names.index(name),w))
data['weights']=[]
for items in byvertex:
    items=sorted(items,key=lambda x:-x[1])[:4] or [(names.index('root'),1)]
    total=sum(x[1] for x in items);items += [(0,0)]*(4-len(items))
    data['weights'].append([x[0] for x in items]+[round(x[1]/total,6) for x in items])
(output/'geometry.json').write_text(json.dumps(data,separators=(',',':')))

texturefiles={'skin':'skins/young_caucasian_male/young_lightskinned_male_diffuse.png',
 'skinSoft':'skins/young_caucasian_female/young_lightskinned_female_diffuse.png',
 'short':'hair/short01/short01_diffuse.png','bob':'hair/bob01/bob01_diffuse.png','long':'hair/long01/long01_diffuse.png',
 'casual':'clothes/male_casualsuit01/male_casualsuit01_diffuse.png','jacket':'clothes/male_casualsuit02/male_casualsuit02_diffuse.png',
 'relaxed':'clothes/female_casualsuit01/female_casualsuit01_diffuse.png','shoes':'clothes/shoes01/shoes01_diffuse.png',
 'brows':'eyebrows/eyebrow001/eyebrow001.png','eyes':'eyes/materials/brown_eye.png','teeth':'teeth/teeth_base/teeth.png'}
textures={}
with tempfile.TemporaryDirectory() as tmp:
    for name,path in texturefiles.items():
        f=Path(tmp)/(name+'.webp');size=2048 if name.startswith('skin') else 1024
        subprocess.run(['ffmpeg','-v','error','-y','-i',str(source/path),'-vf',f'scale={size}:{size}:force_original_aspect_ratio=decrease','-quality','88',str(f)],check=True)
        textures[name]='data:image/webp;base64,'+base64.b64encode(f.read_bytes()).decode()
(output/'textures.json').write_text(json.dumps(textures,separators=(',',':')))
print('Prepared geometry, morph targets, rig, fitted components and textures:',output)
