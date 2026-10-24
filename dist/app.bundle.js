var Ji={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Qi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},of=0,Wh=1,lf=2;var Xh=1,Tl=2,ai=3,Ai=0,gn=1,wn=2,Ln=0,ms=1,Es=2,qh=3,Yh=4,cf=5,Wi=100,hf=101,uf=102,df=103,ff=104,pf=200,mf=201,gf=202,vf=203,$o=204,Zo=205,_f=206,xf=207,yf=208,bf=209,Mf=210,Sf=211,wf=212,Tf=213,Ef=214,El=0,Al=1,Cl=2,gs=3,Rl=4,Il=5,Pl=6,Dl=7,$h=0,Af=1,Cf=2,Ii=0,Ll=1,Ul=2,Nl=3,Ar=4,Fl=5,Ol=6,kl=7;var Zh=300,As=301,Cs=302,Bl=303,zl=304,za=306,jo=1e3,Gi=1001,Ko=1002,fn=1003,Rf=1004;var Va=1005;var Qn=1006,Vl=1007;var es=1008;var ei=1009,jh=1010,Kh=1011,Cr=1012,Hl=1013,ts=1014,oi=1015,Tn=1016,Gl=1017,Wl=1018,Rr=1020,Jh=35902,Qh=35899,eu=1021,tu=1022,Wn=1023,pr=1026,Ir=1027,nu=1028,Xl=1029,iu=1030,ql=1031;var Yl=1033,Ha=33776,Ga=33777,Wa=33778,Xa=33779,$l=35840,Zl=35841,jl=35842,Kl=35843,Jl=36196,Ql=37492,ec=37496,tc=37808,nc=37809,ic=37810,sc=37811,rc=37812,ac=37813,oc=37814,lc=37815,cc=37816,hc=37817,uc=37818,dc=37819,fc=37820,pc=37821,mc=36492,gc=36494,vc=36495,_c=36283,xc=36284,yc=36285,bc=36286;var pa=2300,Jo=2301,Yo=2302,Fh=2400,Oh=2401,kh=2402;var If=3200,Mc=3201;var su=0,Pf=1,Pi="",Zt="srgb",vs="srgb-linear",ma="linear",rt="srgb";var ps=7680;var Bh=519,Df=512,Lf=513,Uf=514,ru=515,Nf=516,Ff=517,Of=518,kf=519,Qo=35044;var au="300 es",Jn=2e3,ga=2001;var ii=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ud=1234567,ha=Math.PI/180,mr=180/Math.PI;function Ti(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ln[n&255]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]+"-"+ln[e&255]+ln[e>>8&255]+"-"+ln[e>>16&15|64]+ln[e>>24&255]+"-"+ln[t&63|128]+ln[t>>8&255]+"-"+ln[t>>16&255]+ln[t>>24&255]+ln[i&255]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]).toLowerCase()}function $e(n,e,t){return Math.max(e,Math.min(t,n))}function ou(n,e){return(n%e+e)%e}function vg(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function _g(n,e,t){return n!==e?(t-n)/(e-n):0}function ua(n,e,t){return(1-t)*n+t*e}function xg(n,e,t,i){return ua(n,e,1-Math.exp(-t*i))}function yg(n,e=1){return e-Math.abs(ou(n,e*2)-e)}function bg(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Mg(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Sg(n,e){return n+Math.floor(Math.random()*(e-n+1))}function wg(n,e){return n+Math.random()*(e-n)}function Tg(n){return n*(.5-Math.random())}function Eg(n){n!==void 0&&(Ud=n);let e=Ud+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ag(n){return n*ha}function Cg(n){return n*mr}function Rg(n){return(n&n-1)===0&&n!==0}function Ig(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Pg(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Dg(n,e,t,i,s){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+i)/2),h=a((e+i)/2),u=r((e-i)/2),d=a((e-i)/2),p=r((i-e)/2),g=a((i-e)/2);switch(s){case"XYX":n.set(o*h,c*u,c*d,o*l);break;case"YZY":n.set(c*d,o*h,c*u,o*l);break;case"ZXZ":n.set(c*u,c*d,o*h,o*l);break;case"XZX":n.set(o*h,c*g,c*p,o*l);break;case"YXY":n.set(c*p,o*h,c*g,o*l);break;case"ZYZ":n.set(c*g,c*p,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Kn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ut(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var lu={DEG2RAD:ha,RAD2DEG:mr,generateUUID:Ti,clamp:$e,euclideanModulo:ou,mapLinear:vg,inverseLerp:_g,lerp:ua,damp:xg,pingpong:yg,smoothstep:bg,smootherstep:Mg,randInt:Sg,randFloat:wg,randFloatSpread:Tg,seededRandom:Eg,degToRad:Ag,radToDeg:Cg,isPowerOfTwo:Rg,ceilPowerOfTwo:Ig,floorPowerOfTwo:Pg,setQuaternionFromProperEuler:Dg,normalize:ut,denormalize:Kn},oe=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},pn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3],d=r[a+0],p=r[a+1],g=r[a+2],v=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(u!==v||c!==d||l!==p||h!==g){let m=1-o,f=c*d+l*p+h*g+u*v,b=f>=0?1:-1,S=1-f*f;if(S>Number.EPSILON){let M=Math.sqrt(S),E=Math.atan2(M,f*b);m=Math.sin(m*E)/M,o=Math.sin(o*E)/M}let _=o*b;if(c=c*m+d*_,l=l*m+p*_,h=h*m+g*_,u=u*m+v*_,m===1-o){let M=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=M,l*=M,h*=M,u*=M}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+h*u+c*p-l*d,e[t+1]=c*g+h*d+l*u-o*p,e[t+2]=l*g+h*p+o*d-c*u,e[t+3]=h*g-o*u-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(s/2),u=o(r/2),d=c(i/2),p=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"YZX":this._x=d*h*u+l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u-d*p*g;break;case"XZY":this._x=d*h*u-l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(i>o&&i>u){let p=2*Math.sqrt(1+i-o-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>u){let p=2*Math.sqrt(1+o-i-u);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-i-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-i*l,this._z=r*h+a*l+i*c-s*o,this._w=a*h-i*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Nd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Nd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*i),h=2*(o*t-r*s),u=2*(r*i-a*t);return this.x=t+c*l+a*u-o*h,this.y=i+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ch.copy(this).projectOnVector(e),this.sub(ch)}reflect(e){return this.sub(ch.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ch=new P,Nd=new pn,We=class n{constructor(e,t,i,s,r,a,o,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l)}set(e,t,i,s,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],p=i[5],g=i[8],v=s[0],m=s[3],f=s[6],b=s[1],S=s[4],_=s[7],M=s[2],E=s[5],A=s[8];return r[0]=a*v+o*b+c*M,r[3]=a*m+o*S+c*E,r[6]=a*f+o*_+c*A,r[1]=l*v+h*b+u*M,r[4]=l*m+h*S+u*E,r[7]=l*f+h*_+u*A,r[2]=d*v+p*b+g*M,r[5]=d*m+p*S+g*E,r[8]=d*f+p*_+g*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-i*r*h+i*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*r,p=l*r-a*c,g=t*u+i*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=u*v,e[1]=(s*l-h*i)*v,e[2]=(o*i-s*a)*v,e[3]=d*v,e[4]=(h*t-s*c)*v,e[5]=(s*r-o*t)*v,e[6]=p*v,e[7]=(i*c-l*t)*v,e[8]=(a*t-i*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(hh.makeScale(e,t)),this}rotate(e){return this.premultiply(hh.makeRotation(-e)),this}translate(e,t){return this.premultiply(hh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},hh=new We;function cu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function va(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Bf(){let n=va("canvas");return n.style.display="block",n}var Fd={};function gr(n){n in Fd||(Fd[n]=!0,console.warn(n))}function zf(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var Od=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),kd=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Lg(){let n={enabled:!0,workingColorSpace:vs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===rt&&(s.r=Ei(s.r),s.g=Ei(s.g),s.b=Ei(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===rt&&(s.r=fr(s.r),s.g=fr(s.g),s.b=fr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Pi?ma:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return gr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return gr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[vs]:{primaries:e,whitePoint:i,transfer:ma,toXYZ:Od,fromXYZ:kd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Zt},outputColorSpaceConfig:{drawingBufferColorSpace:Zt}},[Zt]:{primaries:e,whitePoint:i,transfer:rt,toXYZ:Od,fromXYZ:kd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Zt}}}),n}var et=Lg();function Ei(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function fr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Ks,el=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ks===void 0&&(Ks=va("canvas")),Ks.width=e.width,Ks.height=e.height;let s=Ks.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Ks}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=va("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ei(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ei(t[i]/255)*255):t[i]=Ei(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Ug=0,vr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ug++}),this.uuid=Ti(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(uh(s[a].image)):r.push(uh(s[a]))}else r=uh(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function uh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?el.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Ng=0,dh=new P,Mn=class n extends ii{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Gi,s=Gi,r=Qn,a=es,o=Wn,c=ei,l=n.DEFAULT_ANISOTROPY,h=Pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ng++}),this.uuid=Ti(),this.name="",this.source=new vr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(dh).x}get height(){return this.source.getSize(dh).y}get depth(){return this.source.getSize(dh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jo:e.x=e.x-Math.floor(e.x);break;case Gi:e.x=e.x<0?0:1;break;case Ko:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jo:e.y=e.y-Math.floor(e.y);break;case Gi:e.y=e.y<0?0:1;break;case Ko:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Mn.DEFAULT_IMAGE=null;Mn.DEFAULT_MAPPING=Zh;Mn.DEFAULT_ANISOTROPY=1;var dt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],g=c[9],v=c[2],m=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(l+1)/2,_=(p+1)/2,M=(f+1)/2,E=(h+d)/4,A=(u+v)/4,R=(g+m)/4;return S>_&&S>M?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=E/i,r=A/i):_>M?_<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),i=E/s,r=R/s):M<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),i=A/r,s=R/r),this.set(i,s,r,t),this}let b=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(u-v)/b,this.z=(d-h)/b,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},tl=class extends ii{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);let s={width:e,height:t,depth:i.depth},r=new Mn(s);this.textures=[];let a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:Qn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new vr(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},jt=class extends tl{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},_a=class extends Mn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var nl=class extends Mn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Xi=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint($n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint($n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=$n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,$n):$n.fromBufferAttribute(r,a),$n.applyMatrix4(e.matrixWorld),this.expandByPoint($n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),So.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),So.copy(i.boundingBox)),So.applyMatrix4(e.matrixWorld),this.union(So)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$n),$n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(na),wo.subVectors(this.max,na),Js.subVectors(e.a,na),Qs.subVectors(e.b,na),er.subVectors(e.c,na),Oi.subVectors(Qs,Js),ki.subVectors(er,Qs),hs.subVectors(Js,er);let t=[0,-Oi.z,Oi.y,0,-ki.z,ki.y,0,-hs.z,hs.y,Oi.z,0,-Oi.x,ki.z,0,-ki.x,hs.z,0,-hs.x,-Oi.y,Oi.x,0,-ki.y,ki.x,0,-hs.y,hs.x,0];return!fh(t,Js,Qs,er,wo)||(t=[1,0,0,0,1,0,0,0,1],!fh(t,Js,Qs,er,wo))?!1:(To.crossVectors(Oi,ki),t=[To.x,To.y,To.z],fh(t,Js,Qs,er,wo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},xi=[new P,new P,new P,new P,new P,new P,new P,new P],$n=new P,So=new Xi,Js=new P,Qs=new P,er=new P,Oi=new P,ki=new P,hs=new P,na=new P,wo=new P,To=new P,us=new P;function fh(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){us.fromArray(n,r);let o=s.x*Math.abs(us.x)+s.y*Math.abs(us.y)+s.z*Math.abs(us.z),c=e.dot(us),l=t.dot(us),h=i.dot(us);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Fg=new Xi,ia=new P,ph=new P,_s=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Fg.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ia.subVectors(e,this.center);let t=ia.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(ia,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ph.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ia.copy(e.center).add(ph)),this.expandByPoint(ia.copy(e.center).sub(ph))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},yi=new P,mh=new P,Eo=new P,Bi=new P,gh=new P,Ao=new P,vh=new P,xs=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=yi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yi.copy(this.origin).addScaledVector(this.direction,t),yi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){mh.copy(e).add(t).multiplyScalar(.5),Eo.copy(t).sub(e).normalize(),Bi.copy(this.origin).sub(mh);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Eo),o=Bi.dot(this.direction),c=-Bi.dot(Eo),l=Bi.lengthSq(),h=Math.abs(1-a*a),u,d,p,g;if(h>0)if(u=a*c-o,d=a*o-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let v=1/h;u*=v,d*=v,p=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(mh).addScaledVector(Eo,d),p}intersectSphere(e,t){yi.subVectors(e.center,this.origin);let i=yi.dot(this.direction),s=yi.dot(yi)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,yi)!==null}intersectTriangle(e,t,i,s,r){gh.subVectors(t,e),Ao.subVectors(i,e),vh.crossVectors(gh,Ao);let a=this.direction.dot(vh),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Bi.subVectors(this.origin,e);let c=o*this.direction.dot(Ao.crossVectors(Bi,Ao));if(c<0)return null;let l=o*this.direction.dot(gh.cross(Bi));if(l<0||c+l>a)return null;let h=-o*Bi.dot(vh);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},at=class n{constructor(e,t,i,s,r,a,o,c,l,h,u,d,p,g,v,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l,h,u,d,p,g,v,m)}set(e,t,i,s,r,a,o,c,l,h,u,d,p,g,v,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/tr.setFromMatrixColumn(e,0).length(),r=1/tr.setFromMatrixColumn(e,1).length(),a=1/tr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,p=a*u,g=o*h,v=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=p+g*l,t[5]=d-v*l,t[9]=-o*c,t[2]=v-d*l,t[6]=g+p*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,p=c*u,g=l*h,v=l*u;t[0]=d+v*o,t[4]=g*o-p,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=v+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,p=c*u,g=l*h,v=l*u;t[0]=d-v*o,t[4]=-a*u,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=v-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,p=a*u,g=o*h,v=o*u;t[0]=c*h,t[4]=g*l-p,t[8]=d*l+v,t[1]=c*u,t[5]=v*l+d,t[9]=p*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,p=a*l,g=o*c,v=o*l;t[0]=c*h,t[4]=v-d*u,t[8]=g*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=p*u+g,t[10]=d-v*u}else if(e.order==="XZY"){let d=a*c,p=a*l,g=o*c,v=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+v,t[5]=a*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=o*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Og,e,kg)}lookAt(e,t,i){let s=this.elements;return Rn.subVectors(e,t),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),zi.crossVectors(i,Rn),zi.lengthSq()===0&&(Math.abs(i.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),zi.crossVectors(i,Rn)),zi.normalize(),Co.crossVectors(Rn,zi),s[0]=zi.x,s[4]=Co.x,s[8]=Rn.x,s[1]=zi.y,s[5]=Co.y,s[9]=Rn.y,s[2]=zi.z,s[6]=Co.z,s[10]=Rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],p=i[13],g=i[2],v=i[6],m=i[10],f=i[14],b=i[3],S=i[7],_=i[11],M=i[15],E=s[0],A=s[4],R=s[8],x=s[12],y=s[1],L=s[5],U=s[9],k=s[13],W=s[2],V=s[6],G=s[10],j=s[14],H=s[3],K=s[7],ne=s[11],ce=s[15];return r[0]=a*E+o*y+c*W+l*H,r[4]=a*A+o*L+c*V+l*K,r[8]=a*R+o*U+c*G+l*ne,r[12]=a*x+o*k+c*j+l*ce,r[1]=h*E+u*y+d*W+p*H,r[5]=h*A+u*L+d*V+p*K,r[9]=h*R+u*U+d*G+p*ne,r[13]=h*x+u*k+d*j+p*ce,r[2]=g*E+v*y+m*W+f*H,r[6]=g*A+v*L+m*V+f*K,r[10]=g*R+v*U+m*G+f*ne,r[14]=g*x+v*k+m*j+f*ce,r[3]=b*E+S*y+_*W+M*H,r[7]=b*A+S*L+_*V+M*K,r[11]=b*R+S*U+_*G+M*ne,r[15]=b*x+S*k+_*j+M*ce,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],p=e[14],g=e[3],v=e[7],m=e[11],f=e[15];return g*(+r*c*u-s*l*u-r*o*d+i*l*d+s*o*p-i*c*p)+v*(+t*c*p-t*l*d+r*a*d-s*a*p+s*l*h-r*c*h)+m*(+t*l*u-t*o*p-r*a*u+i*a*p+r*o*h-i*l*h)+f*(-s*o*h-t*c*u+t*o*d+s*a*u-i*a*d+i*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],p=e[11],g=e[12],v=e[13],m=e[14],f=e[15],b=u*m*l-v*d*l+v*c*p-o*m*p-u*c*f+o*d*f,S=g*d*l-h*m*l-g*c*p+a*m*p+h*c*f-a*d*f,_=h*v*l-g*u*l+g*o*p-a*v*p-h*o*f+a*u*f,M=g*u*c-h*v*c-g*o*d+a*v*d+h*o*m-a*u*m,E=t*b+i*S+s*_+r*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/E;return e[0]=b*A,e[1]=(v*d*r-u*m*r-v*s*p+i*m*p+u*s*f-i*d*f)*A,e[2]=(o*m*r-v*c*r+v*s*l-i*m*l-o*s*f+i*c*f)*A,e[3]=(u*c*r-o*d*r-u*s*l+i*d*l+o*s*p-i*c*p)*A,e[4]=S*A,e[5]=(h*m*r-g*d*r+g*s*p-t*m*p-h*s*f+t*d*f)*A,e[6]=(g*c*r-a*m*r-g*s*l+t*m*l+a*s*f-t*c*f)*A,e[7]=(a*d*r-h*c*r+h*s*l-t*d*l-a*s*p+t*c*p)*A,e[8]=_*A,e[9]=(g*u*r-h*v*r-g*i*p+t*v*p+h*i*f-t*u*f)*A,e[10]=(a*v*r-g*o*r+g*i*l-t*v*l-a*i*f+t*o*f)*A,e[11]=(h*o*r-a*u*r-h*i*l+t*u*l+a*i*p-t*o*p)*A,e[12]=M*A,e[13]=(h*v*s-g*u*s+g*i*d-t*v*d-h*i*m+t*u*m)*A,e[14]=(g*o*s-a*v*s-g*i*c+t*v*c+a*i*m-t*o*m)*A,e[15]=(a*u*s-h*o*s+h*i*c-t*u*c-a*i*d+t*o*d)*A,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+i,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+i,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,d=r*l,p=r*h,g=r*u,v=a*h,m=a*u,f=o*u,b=c*l,S=c*h,_=c*u,M=i.x,E=i.y,A=i.z;return s[0]=(1-(v+f))*M,s[1]=(p+_)*M,s[2]=(g-S)*M,s[3]=0,s[4]=(p-_)*E,s[5]=(1-(d+f))*E,s[6]=(m+b)*E,s[7]=0,s[8]=(g+S)*A,s[9]=(m-b)*A,s[10]=(1-(d+v))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=tr.set(s[0],s[1],s[2]).length(),a=tr.set(s[4],s[5],s[6]).length(),o=tr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Zn.copy(this);let l=1/r,h=1/a,u=1/o;return Zn.elements[0]*=l,Zn.elements[1]*=l,Zn.elements[2]*=l,Zn.elements[4]*=h,Zn.elements[5]*=h,Zn.elements[6]*=h,Zn.elements[8]*=u,Zn.elements[9]*=u,Zn.elements[10]*=u,t.setFromRotationMatrix(Zn),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=Jn,c=!1){let l=this.elements,h=2*r/(t-e),u=2*r/(i-s),d=(t+e)/(t-e),p=(i+s)/(i-s),g,v;if(c)g=r/(a-r),v=a*r/(a-r);else if(o===Jn)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===ga)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Jn,c=!1){let l=this.elements,h=2/(t-e),u=2/(i-s),d=-(t+e)/(t-e),p=-(i+s)/(i-s),g,v;if(c)g=1/(a-r),v=a/(a-r);else if(o===Jn)g=-2/(a-r),v=-(a+r)/(a-r);else if(o===ga)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},tr=new P,Zn=new at,Og=new P(0,0,0),kg=new P(1,1,1),zi=new P,Co=new P,Rn=new P,Bd=new at,zd=new pn,Pn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin($e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin($e(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-$e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Bd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return zd.setFromEuler(this),this.setFromQuaternion(zd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Pn.DEFAULT_ORDER="XYZ";var xa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Bg=0,Vd=new P,nr=new pn,bi=new at,Ro=new P,sa=new P,zg=new P,Vg=new pn,Hd=new P(1,0,0),Gd=new P(0,1,0),Wd=new P(0,0,1),Xd={type:"added"},Hg={type:"removed"},ir={type:"childadded",child:null},_h={type:"childremoved",child:null},Kt=class n extends ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bg++}),this.uuid=Ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new P,t=new Pn,i=new pn,s=new P(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new at},normalMatrix:{value:new We}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return nr.setFromAxisAngle(e,t),this.quaternion.multiply(nr),this}rotateOnWorldAxis(e,t){return nr.setFromAxisAngle(e,t),this.quaternion.premultiply(nr),this}rotateX(e){return this.rotateOnAxis(Hd,e)}rotateY(e){return this.rotateOnAxis(Gd,e)}rotateZ(e){return this.rotateOnAxis(Wd,e)}translateOnAxis(e,t){return Vd.copy(e).applyQuaternion(this.quaternion),this.position.add(Vd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Hd,e)}translateY(e){return this.translateOnAxis(Gd,e)}translateZ(e){return this.translateOnAxis(Wd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ro.copy(e):Ro.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),sa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(sa,Ro,this.up):bi.lookAt(Ro,sa,this.up),this.quaternion.setFromRotationMatrix(bi),s&&(bi.extractRotation(s.matrixWorld),nr.setFromRotationMatrix(bi),this.quaternion.premultiply(nr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Xd),ir.child=e,this.dispatchEvent(ir),ir.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Hg),_h.child=e,this.dispatchEvent(_h),_h.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Xd),ir.child=e,this.dispatchEvent(ir),ir.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sa,e,zg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sa,Vg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Kt.DEFAULT_UP=new P(0,1,0);Kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var jn=new P,Mi=new P,xh=new P,Si=new P,sr=new P,rr=new P,qd=new P,yh=new P,bh=new P,Mh=new P,Sh=new dt,wh=new dt,Th=new dt,wi=class n{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),jn.subVectors(e,t),s.cross(jn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){jn.subVectors(s,t),Mi.subVectors(i,t),xh.subVectors(e,t);let a=jn.dot(jn),o=jn.dot(Mi),c=jn.dot(xh),l=Mi.dot(Mi),h=Mi.dot(xh),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(l*c-o*h)*d,g=(a*h-o*c)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Si)===null?!1:Si.x>=0&&Si.y>=0&&Si.x+Si.y<=1}static getInterpolation(e,t,i,s,r,a,o,c){return this.getBarycoord(e,t,i,s,Si)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Si.x),c.addScaledVector(a,Si.y),c.addScaledVector(o,Si.z),c)}static getInterpolatedAttribute(e,t,i,s,r,a){return Sh.setScalar(0),wh.setScalar(0),Th.setScalar(0),Sh.fromBufferAttribute(e,t),wh.fromBufferAttribute(e,i),Th.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Sh,r.x),a.addScaledVector(wh,r.y),a.addScaledVector(Th,r.z),a}static isFrontFacing(e,t,i,s){return jn.subVectors(i,t),Mi.subVectors(e,t),jn.cross(Mi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jn.subVectors(this.c,this.b),Mi.subVectors(this.a,this.b),jn.cross(Mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;sr.subVectors(s,i),rr.subVectors(r,i),yh.subVectors(e,i);let c=sr.dot(yh),l=rr.dot(yh);if(c<=0&&l<=0)return t.copy(i);bh.subVectors(e,s);let h=sr.dot(bh),u=rr.dot(bh);if(h>=0&&u<=h)return t.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(i).addScaledVector(sr,a);Mh.subVectors(e,r);let p=sr.dot(Mh),g=rr.dot(Mh);if(g>=0&&p<=g)return t.copy(r);let v=p*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(i).addScaledVector(rr,o);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return qd.subVectors(r,s),o=(u-h)/(u-h+(p-g)),t.copy(s).addScaledVector(qd,o);let f=1/(m+v+d);return a=v*f,o=d*f,t.copy(i).addScaledVector(sr,a).addScaledVector(rr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Vf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},Io={h:0,s:0,l:0};function Eh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var De=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=et.workingColorSpace){return this.r=e,this.g=t,this.b=i,et.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=et.workingColorSpace){if(e=ou(e,1),t=$e(t,0,1),i=$e(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Eh(a,r,e+1/3),this.g=Eh(a,r,e),this.b=Eh(a,r,e-1/3)}return et.colorSpaceToWorking(this,s),this}setStyle(e,t=Zt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Zt){let i=Vf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ei(e.r),this.g=Ei(e.g),this.b=Ei(e.b),this}copyLinearToSRGB(e){return this.r=fr(e.r),this.g=fr(e.g),this.b=fr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zt){return et.workingToColorSpace(cn.copy(this),e),Math.round($e(cn.r*255,0,255))*65536+Math.round($e(cn.g*255,0,255))*256+Math.round($e(cn.b*255,0,255))}getHexString(e=Zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.workingToColorSpace(cn.copy(this),t);let i=cn.r,s=cn.g,r=cn.b,a=Math.max(i,s,r),o=Math.min(i,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=et.workingColorSpace){return et.workingToColorSpace(cn.copy(this),t),e.r=cn.r,e.g=cn.g,e.b=cn.b,e}getStyle(e=Zt){et.workingToColorSpace(cn.copy(this),e);let t=cn.r,i=cn.g,s=cn.b;return e!==Zt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Vi),this.setHSL(Vi.h+e,Vi.s+t,Vi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Vi),e.getHSL(Io);let i=ua(Vi.h,Io.h,t),s=ua(Vi.s,Io.s,t),r=ua(Vi.l,Io.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},cn=new De;De.NAMES=Vf;var Gg=0,si=class extends ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gg++}),this.uuid=Ti(),this.name="",this.type="Material",this.blending=ms,this.side=Ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$o,this.blendDst=Zo,this.blendEquation=Wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ps,this.stencilZFail=ps,this.stencilZPass=ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ms&&(i.blending=this.blending),this.side!==Ai&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==$o&&(i.blendSrc=this.blendSrc),this.blendDst!==Zo&&(i.blendDst=this.blendDst),this.blendEquation!==Wi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==gs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ps&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ps&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ps&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Sn=class extends si{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=$h,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var zt=new P,Po=new oe,Wg=0,bn=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Wg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Qo,this.updateRanges=[],this.gpuType=oi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Po.fromBufferAttribute(this,t),Po.applyMatrix3(e),this.setXY(t,Po.x,Po.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix3(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Kn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ut(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Kn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Kn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Kn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Kn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),s=ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),s=ut(s,this.array),r=ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qo&&(e.usage=this.usage),e}};var ya=class extends bn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var ba=class extends bn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var it=class extends bn{constructor(e,t,i){super(new Float32Array(e),t,i)}},Xg=0,Bn=new at,Ah=new Kt,ar=new P,In=new Xi,ra=new Xi,$t=new P,Vt=class n extends ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xg++}),this.uuid=Ti(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cu(e)?ba:ya)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new We().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bn.makeRotationFromQuaternion(e),this.applyMatrix4(Bn),this}rotateX(e){return Bn.makeRotationX(e),this.applyMatrix4(Bn),this}rotateY(e){return Bn.makeRotationY(e),this.applyMatrix4(Bn),this}rotateZ(e){return Bn.makeRotationZ(e),this.applyMatrix4(Bn),this}translate(e,t,i){return Bn.makeTranslation(e,t,i),this.applyMatrix4(Bn),this}scale(e,t,i){return Bn.makeScale(e,t,i),this.applyMatrix4(Bn),this}lookAt(e){return Ah.lookAt(e),Ah.updateMatrix(),this.applyMatrix4(Ah.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ar).negate(),this.translate(ar.x,ar.y,ar.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new it(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];In.setFromBufferAttribute(r),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _s);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let i=this.boundingSphere.center;if(In.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];ra.setFromBufferAttribute(o),this.morphTargetsRelative?($t.addVectors(In.min,ra.min),In.expandByPoint($t),$t.addVectors(In.max,ra.max),In.expandByPoint($t)):(In.expandByPoint(ra.min),In.expandByPoint(ra.max))}In.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)$t.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared($t));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)$t.fromBufferAttribute(o,l),c&&(ar.fromBufferAttribute(e,l),$t.add(ar)),s=Math.max(s,i.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bn(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let R=0;R<i.count;R++)o[R]=new P,c[R]=new P;let l=new P,h=new P,u=new P,d=new oe,p=new oe,g=new oe,v=new P,m=new P;function f(R,x,y){l.fromBufferAttribute(i,R),h.fromBufferAttribute(i,x),u.fromBufferAttribute(i,y),d.fromBufferAttribute(r,R),p.fromBufferAttribute(r,x),g.fromBufferAttribute(r,y),h.sub(l),u.sub(l),p.sub(d),g.sub(d);let L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(L),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(L),o[R].add(v),o[x].add(v),o[y].add(v),c[R].add(m),c[x].add(m),c[y].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let R=0,x=b.length;R<x;++R){let y=b[R],L=y.start,U=y.count;for(let k=L,W=L+U;k<W;k+=3)f(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let S=new P,_=new P,M=new P,E=new P;function A(R){M.fromBufferAttribute(s,R),E.copy(M);let x=o[R];S.copy(x),S.sub(M.multiplyScalar(M.dot(x))).normalize(),_.crossVectors(E,x);let L=_.dot(c[R])<0?-1:1;a.setXYZW(R,S.x,S.y,S.z,L)}for(let R=0,x=b.length;R<x;++R){let y=b[R],L=y.start,U=y.count;for(let k=L,W=L+U;k<W;k+=3)A(e.getX(k+0)),A(e.getX(k+1)),A(e.getX(k+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new bn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);let s=new P,r=new P,a=new P,o=new P,c=new P,l=new P,h=new P,u=new P;if(e)for(let d=0,p=e.count;d<p;d+=3){let g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,m),o.add(h),c.add(h),l.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)$t.fromBufferAttribute(e,t),$t.normalize(),e.setXYZ(t,$t.x,$t.y,$t.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),p=0,g=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?p=c[v]*o.data.stride+o.offset:p=c[v]*h;for(let f=0;f<h;f++)d[g++]=l[p++]}return new bn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,i);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],p=e(d,i);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let p=l[u];h.push(p.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Yd=new at,ds=new xs,Do=new _s,$d=new P,Lo=new P,Uo=new P,No=new P,Ch=new P,Fo=new P,Zd=new P,Oo=new P,ft=class extends Kt{constructor(e=new Vt,t=new Sn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Fo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(Ch.fromBufferAttribute(u,e),a?Fo.addScaledVector(Ch,h):Fo.addScaledVector(Ch.sub(t),h))}t.add(Fo)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Do.copy(i.boundingSphere),Do.applyMatrix4(r),ds.copy(e.ray).recast(e.near),!(Do.containsPoint(ds.origin)===!1&&(ds.intersectSphere(Do,$d)===null||ds.origin.distanceToSquared($d)>(e.far-e.near)**2))&&(Yd.copy(r).invert(),ds.copy(e.ray).applyMatrix4(Yd),!(i.boundingBox!==null&&ds.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ds)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){let m=d[g],f=a[m.materialIndex],b=Math.max(m.start,p.start),S=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let _=b,M=S;_<M;_+=3){let E=o.getX(_),A=o.getX(_+1),R=o.getX(_+2);s=ko(this,f,e,i,l,h,u,E,A,R),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){let b=o.getX(m),S=o.getX(m+1),_=o.getX(m+2);s=ko(this,a,e,i,l,h,u,b,S,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){let m=d[g],f=a[m.materialIndex],b=Math.max(m.start,p.start),S=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let _=b,M=S;_<M;_+=3){let E=_,A=_+1,R=_+2;s=ko(this,f,e,i,l,h,u,E,A,R),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){let b=m,S=m+1,_=m+2;s=ko(this,a,e,i,l,h,u,b,S,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function qg(n,e,t,i,s,r,a,o){let c;if(e.side===gn?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,e.side===Ai,o),c===null)return null;Oo.copy(o),Oo.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Oo);return l<t.near||l>t.far?null:{distance:l,point:Oo.clone(),object:n}}function ko(n,e,t,i,s,r,a,o,c,l){n.getVertexPosition(o,Lo),n.getVertexPosition(c,Uo),n.getVertexPosition(l,No);let h=qg(n,e,t,i,Lo,Uo,No,Zd);if(h){let u=new P;wi.getBarycoord(Zd,Lo,Uo,No,u),s&&(h.uv=wi.getInterpolatedAttribute(s,o,c,l,u,new oe)),r&&(h.uv1=wi.getInterpolatedAttribute(r,o,c,l,u,new oe)),a&&(h.normal=wi.getInterpolatedAttribute(a,o,c,l,u,new P),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new P,materialIndex:0};wi.getNormal(Lo,Uo,No,d.normal),h.face=d,h.barycoord=u}return h}var qi=class n extends Vt{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,p=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new it(l,3)),this.setAttribute("normal",new it(h,3)),this.setAttribute("uv",new it(u,2));function g(v,m,f,b,S,_,M,E,A,R,x){let y=_/A,L=M/R,U=_/2,k=M/2,W=E/2,V=A+1,G=R+1,j=0,H=0,K=new P;for(let ne=0;ne<G;ne++){let ce=ne*L-k;for(let Te=0;Te<V;Te++){let qe=Te*y-U;K[v]=qe*b,K[m]=ce*S,K[f]=W,l.push(K.x,K.y,K.z),K[v]=0,K[m]=0,K[f]=E>0?1:-1,h.push(K.x,K.y,K.z),u.push(Te/A),u.push(1-ne/R),j+=1}}for(let ne=0;ne<R;ne++)for(let ce=0;ce<A;ce++){let Te=d+ce+V*ne,qe=d+ce+V*(ne+1),He=d+(ce+1)+V*(ne+1),Re=d+(ce+1)+V*ne;c.push(Te,qe,Re),c.push(qe,He,Re),H+=6}o.addGroup(p,H,x),p+=H,d+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Rs(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function hn(n){let e={};for(let t=0;t<n.length;t++){let i=Rs(n[t]);for(let s in i)e[s]=i[s]}return e}function Yg(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function hu(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}var ti={clone:Rs,merge:hn},$g=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ot=class extends si{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$g,this.fragmentShader=Zg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rs(e.uniforms),this.uniformsGroups=Yg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Ma=class extends Kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=Jn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Hi=new P,jd=new oe,Kd=new oe,nn=class extends Ma{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=mr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ha*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return mr*2*Math.atan(Math.tan(ha*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z),Hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z)}getViewSize(e,t){return this.getViewBounds(e,jd,Kd),t.subVectors(Kd,jd)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ha*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*i/l,s*=a.width/c,i*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},or=-90,lr=1,il=class extends Kt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new nn(or,lr,e,t);s.layers=this.layers,this.add(s);let r=new nn(or,lr,e,t);r.layers=this.layers,this.add(r);let a=new nn(or,lr,e,t);a.layers=this.layers,this.add(a);let o=new nn(or,lr,e,t);o.layers=this.layers,this.add(o);let c=new nn(or,lr,e,t);c.layers=this.layers,this.add(c);let l=new nn(or,lr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===Jn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ga)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,c),e.setRenderTarget(i,4,s),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Sa=class extends Mn{constructor(e=[],t=As,i,s,r,a,o,c,l,h){super(e,t,i,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},sl=class extends jt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Sa(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new qi(5,5,5),r=new Ot({name:"CubemapFromEquirect",uniforms:Rs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:gn,blending:Ln});r.uniforms.tEquirect.value=t;let a=new ft(s,r),o=t.minFilter;return t.minFilter===es&&(t.minFilter=Qn),new il(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}},Vn=class extends Kt{constructor(){super(),this.isGroup=!0,this.type="Group"}},jg={type:"move"},_r=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,i),f=this._getHandJoint(l,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(jg)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Vn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},wa=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new De(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Ta=class extends Kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pn,this.environmentIntensity=1,this.environmentRotation=new Pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},rl=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Qo,this.updateRanges=[],this.version=0,this.uuid=Ti()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},dn=new P,Ea=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix4(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)dn.fromBufferAttribute(this,t),dn.applyNormalMatrix(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)dn.fromBufferAttribute(this,t),dn.transformDirection(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Kn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ut(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Kn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Kn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Kn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Kn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),s=ut(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),s=ut(s,this.array),r=ut(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new bn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},xr=class extends si{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},cr,aa=new P,hr=new P,ur=new P,dr=new oe,oa=new oe,Hf=new at,Bo=new P,la=new P,zo=new P,Jd=new oe,Rh=new oe,Qd=new oe,Aa=class extends Kt{constructor(e=new xr){if(super(),this.isSprite=!0,this.type="Sprite",cr===void 0){cr=new Vt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new rl(t,5);cr.setIndex([0,1,2,0,2,3]),cr.setAttribute("position",new Ea(i,3,0,!1)),cr.setAttribute("uv",new Ea(i,2,3,!1))}this.geometry=cr,this.material=e,this.center=new oe(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),hr.setFromMatrixScale(this.matrixWorld),Hf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ur.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&hr.multiplyScalar(-ur.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;Vo(Bo.set(-.5,-.5,0),ur,a,hr,s,r),Vo(la.set(.5,-.5,0),ur,a,hr,s,r),Vo(zo.set(.5,.5,0),ur,a,hr,s,r),Jd.set(0,0),Rh.set(1,0),Qd.set(1,1);let o=e.ray.intersectTriangle(Bo,la,zo,!1,aa);if(o===null&&(Vo(la.set(-.5,.5,0),ur,a,hr,s,r),Rh.set(0,1),o=e.ray.intersectTriangle(Bo,zo,la,!1,aa),o===null))return;let c=e.ray.origin.distanceTo(aa);c<e.near||c>e.far||t.push({distance:c,point:aa.clone(),uv:wi.getInterpolation(aa,Bo,la,zo,Jd,Rh,Qd,new oe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Vo(n,e,t,i,s,r){dr.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(oa.x=r*dr.x-s*dr.y,oa.y=s*dr.x+r*dr.y):oa.copy(dr),n.copy(e),n.x+=oa.x,n.y+=oa.y,n.applyMatrix4(Hf)}var Ih=new P,Kg=new P,Jg=new We,zn=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Ih.subVectors(i,t).cross(Kg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Ih),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Jg.getNormalMatrix(e),s=this.coplanarPoint(Ih).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},fs=new _s,Qg=new oe(.5,.5),Ho=new P,yr=class{constructor(e=new zn,t=new zn,i=new zn,s=new zn,r=new zn,a=new zn){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Jn,i=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],p=r[7],g=r[8],v=r[9],m=r[10],f=r[11],b=r[12],S=r[13],_=r[14],M=r[15];if(s[0].setComponents(l-a,p-h,f-g,M-b).normalize(),s[1].setComponents(l+a,p+h,f+g,M+b).normalize(),s[2].setComponents(l+o,p+u,f+v,M+S).normalize(),s[3].setComponents(l-o,p-u,f-v,M-S).normalize(),i)s[4].setComponents(c,d,m,_).normalize(),s[5].setComponents(l-c,p-d,f-m,M-_).normalize();else if(s[4].setComponents(l-c,p-d,f-m,M-_).normalize(),t===Jn)s[5].setComponents(l+c,p+d,f+m,M+_).normalize();else if(t===ga)s[5].setComponents(c,d,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fs)}intersectsSprite(e){fs.center.set(0,0,0);let t=Qg.distanceTo(e.center);return fs.radius=.7071067811865476+t,fs.applyMatrix4(e.matrixWorld),this.intersectsSphere(fs)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Ho.x=s.normal.x>0?e.max.x:e.min.x,Ho.y=s.normal.y>0?e.max.y:e.min.y,Ho.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ho)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var br=class extends si{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ef=new at,zh=new xs,Go=new _s,Wo=new P,Ca=class extends Kt{constructor(e=new Vt,t=new br){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Go.copy(i.boundingSphere),Go.applyMatrix4(s),Go.radius+=r,e.ray.intersectsSphere(Go)===!1)return;ef.copy(s).invert(),zh.copy(e.ray).applyMatrix4(ef);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,u=i.attributes.position;if(l!==null){let d=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let g=d,v=p;g<v;g++){let m=l.getX(g);Wo.fromBufferAttribute(u,m),tf(Wo,m,c,s,e,t,this)}}else{let d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=d,v=p;g<v;g++)Wo.fromBufferAttribute(u,g),tf(Wo,g,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function tf(n,e,t,i,s,r,a){let o=zh.distanceSqToPoint(n);if(o<t){let c=new P;zh.closestPointToPoint(n,c),c.applyMatrix4(i);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var ri=class extends Mn{constructor(e,t,i,s,r,a,o,c,l){super(e,t,i,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ra=class extends Mn{constructor(e,t,i=ts,s,r,a,o=fn,c=fn,l,h=pr,u=1){if(h!==pr&&h!==Ir)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,a,o,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new vr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ia=class extends Mn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Pa=class n extends Vt{constructor(e=1,t=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:s,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],c=[],l=[],h=t/2,u=Math.PI/2*e,d=t,p=2*u+d,g=i*2+r,v=s+1,m=new P,f=new P;for(let b=0;b<=g;b++){let S=0,_=0,M=0,E=0;if(b<=i){let x=b/i,y=x*Math.PI/2;_=-h-e*Math.cos(y),M=e*Math.sin(y),E=-e*Math.cos(y),S=x*u}else if(b<=i+r){let x=(b-i)/r;_=-h+x*t,M=e,E=0,S=u+x*d}else{let x=(b-i-r)/i,y=x*Math.PI/2;_=h+e*Math.sin(y),M=e*Math.cos(y),E=e*Math.sin(y),S=u+d+x*u}let A=Math.max(0,Math.min(1,S/p)),R=0;b===0?R=.5/s:b===g&&(R=-.5/s);for(let x=0;x<=s;x++){let y=x/s,L=y*Math.PI*2,U=Math.sin(L),k=Math.cos(L);f.x=-M*k,f.y=_,f.z=M*U,o.push(f.x,f.y,f.z),m.set(-M*k,E,M*U),m.normalize(),c.push(m.x,m.y,m.z),l.push(y+R,A)}if(b>0){let x=(b-1)*v;for(let y=0;y<s;y++){let L=x+y,U=x+y+1,k=b*v+y,W=b*v+y+1;a.push(L,U,k),a.push(U,W,k)}}}this.setIndex(a),this.setAttribute("position",new it(o,3)),this.setAttribute("normal",new it(c,3)),this.setAttribute("uv",new it(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}};var Ci=class n extends Vt{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],p=[],g=0,v=[],m=i/2,f=0;b(),a===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new it(u,3)),this.setAttribute("normal",new it(d,3)),this.setAttribute("uv",new it(p,2));function b(){let _=new P,M=new P,E=0,A=(t-e)/i;for(let R=0;R<=r;R++){let x=[],y=R/r,L=y*(t-e)+e;for(let U=0;U<=s;U++){let k=U/s,W=k*c+o,V=Math.sin(W),G=Math.cos(W);M.x=L*V,M.y=-y*i+m,M.z=L*G,u.push(M.x,M.y,M.z),_.set(V,A,G).normalize(),d.push(_.x,_.y,_.z),p.push(k,1-y),x.push(g++)}v.push(x)}for(let R=0;R<s;R++)for(let x=0;x<r;x++){let y=v[x][R],L=v[x+1][R],U=v[x+1][R+1],k=v[x][R+1];(e>0||x!==0)&&(h.push(y,L,k),E+=3),(t>0||x!==r-1)&&(h.push(L,U,k),E+=3)}l.addGroup(f,E,0),f+=E}function S(_){let M=g,E=new oe,A=new P,R=0,x=_===!0?e:t,y=_===!0?1:-1;for(let U=1;U<=s;U++)u.push(0,m*y,0),d.push(0,y,0),p.push(.5,.5),g++;let L=g;for(let U=0;U<=s;U++){let W=U/s*c+o,V=Math.cos(W),G=Math.sin(W);A.x=x*G,A.y=m*y,A.z=x*V,u.push(A.x,A.y,A.z),d.push(0,y,0),E.x=V*.5+.5,E.y=G*.5*y+.5,p.push(E.x,E.y),g++}for(let U=0;U<s;U++){let k=M+U,W=L+U;_===!0?h.push(W,W+1,k):h.push(W+1,W,k),R+=3}l.addGroup(f,R,_===!0?1:2),f+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ys=class n extends Ci{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Mr=class n extends Vt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],a=[];o(s),l(i),h(),this.setAttribute("position",new it(r,3)),this.setAttribute("normal",new it(r.slice(),3)),this.setAttribute("uv",new it(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(b){let S=new P,_=new P,M=new P;for(let E=0;E<t.length;E+=3)p(t[E+0],S),p(t[E+1],_),p(t[E+2],M),c(S,_,M,b)}function c(b,S,_,M){let E=M+1,A=[];for(let R=0;R<=E;R++){A[R]=[];let x=b.clone().lerp(_,R/E),y=S.clone().lerp(_,R/E),L=E-R;for(let U=0;U<=L;U++)U===0&&R===E?A[R][U]=x:A[R][U]=x.clone().lerp(y,U/L)}for(let R=0;R<E;R++)for(let x=0;x<2*(E-R)-1;x++){let y=Math.floor(x/2);x%2===0?(d(A[R][y+1]),d(A[R+1][y]),d(A[R][y])):(d(A[R][y+1]),d(A[R+1][y+1]),d(A[R+1][y]))}}function l(b){let S=new P;for(let _=0;_<r.length;_+=3)S.x=r[_+0],S.y=r[_+1],S.z=r[_+2],S.normalize().multiplyScalar(b),r[_+0]=S.x,r[_+1]=S.y,r[_+2]=S.z}function h(){let b=new P;for(let S=0;S<r.length;S+=3){b.x=r[S+0],b.y=r[S+1],b.z=r[S+2];let _=m(b)/2/Math.PI+.5,M=f(b)/Math.PI+.5;a.push(_,1-M)}g(),u()}function u(){for(let b=0;b<a.length;b+=6){let S=a[b+0],_=a[b+2],M=a[b+4],E=Math.max(S,_,M),A=Math.min(S,_,M);E>.9&&A<.1&&(S<.2&&(a[b+0]+=1),_<.2&&(a[b+2]+=1),M<.2&&(a[b+4]+=1))}}function d(b){r.push(b.x,b.y,b.z)}function p(b,S){let _=b*3;S.x=e[_+0],S.y=e[_+1],S.z=e[_+2]}function g(){let b=new P,S=new P,_=new P,M=new P,E=new oe,A=new oe,R=new oe;for(let x=0,y=0;x<r.length;x+=9,y+=6){b.set(r[x+0],r[x+1],r[x+2]),S.set(r[x+3],r[x+4],r[x+5]),_.set(r[x+6],r[x+7],r[x+8]),E.set(a[y+0],a[y+1]),A.set(a[y+2],a[y+3]),R.set(a[y+4],a[y+5]),M.copy(b).add(S).add(_).divideScalar(3);let L=m(M);v(E,y+0,b,L),v(A,y+2,S,L),v(R,y+4,_,L)}}function v(b,S,_,M){M<0&&b.x===1&&(a[S]=b.x-1),_.x===0&&_.z===0&&(a[S]=M/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function f(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}},Da=class n extends Mr{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var Hn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,a;t?a=t:a=e*i[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=i[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===a)return s/(r-1);let h=i[s],d=i[s+1]-h,p=(a-h)/d;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new oe:new P);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new P,s=[],r=[],a=[],o=new P,c=new at;for(let p=0;p<=e;p++){let g=p/e;s[p]=this.getTangentAt(g,new P)}r[0]=new P,a[0]=new P;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),d<=l&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos($e(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(o,g))}a[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos($e(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],p*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},La=class extends Hn{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new oe){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*h-p*u+this.aX,l=d*u+p*h+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},al=class extends La{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function uu(){let n=0,e=0,t=0,i=0;function s(r,a,o,c){n=r,e=o,t=-3*r+3*a-2*o-c,i=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let d=(a-r)/l-(o-r)/(l+h)+(o-a)/h,p=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,p*=h,s(a,o,d,p)},calc:function(r){let a=r*r,o=a*r;return n+e*r+t*a+i*o}}}var Xo=new P,Ph=new uu,Dh=new uu,Lh=new uu,Yi=class extends Hn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new P){let i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(Xo.subVectors(s[0],s[1]).add(s[0]),l=Xo);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Xo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Xo),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),p),v=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Ph.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,v,m),Dh.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,v,m),Lh.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(Ph.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Dh.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Lh.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return i.set(Ph.calc(c),Dh.calc(c),Lh.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function nf(n,e,t,i,s){let r=(i-e)*.5,a=(s-t)*.5,o=n*n,c=n*o;return(2*t-2*i+r+a)*c+(-3*t+3*i-2*r-a)*o+r*n+t}function e0(n,e){let t=1-n;return t*t*e}function t0(n,e){return 2*(1-n)*n*e}function n0(n,e){return n*n*e}function da(n,e,t,i){return e0(n,e)+t0(n,t)+n0(n,i)}function i0(n,e){let t=1-n;return t*t*t*e}function s0(n,e){let t=1-n;return 3*t*t*n*e}function r0(n,e){return 3*(1-n)*n*n*e}function a0(n,e){return n*n*n*e}function fa(n,e,t,i,s){return i0(n,e)+s0(n,t)+r0(n,i)+a0(n,s)}var ol=class extends Hn{constructor(e=new oe,t=new oe,i=new oe,s=new oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new oe){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(fa(e,s.x,r.x,a.x,o.x),fa(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ll=class extends Hn{constructor(e=new P,t=new P,i=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new P){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(fa(e,s.x,r.x,a.x,o.x),fa(e,s.y,r.y,a.y,o.y),fa(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},cl=class extends Hn{constructor(e=new oe,t=new oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new oe){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new oe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},hl=class extends Hn{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ul=class extends Hn{constructor(e=new oe,t=new oe,i=new oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new oe){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(da(e,s.x,r.x,a.x),da(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ua=class extends Hn{constructor(e=new P,t=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new P){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(da(e,s.x,r.x,a.x),da(e,s.y,r.y,a.y),da(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},dl=class extends Hn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new oe){let i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return i.set(nf(o,c.x,l.x,h.x,u.x),nf(o,c.y,l.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new oe().fromArray(s))}return this}},o0=Object.freeze({__proto__:null,ArcCurve:al,CatmullRomCurve3:Yi,CubicBezierCurve:ol,CubicBezierCurve3:ll,EllipseCurve:La,LineCurve:cl,LineCurve3:hl,QuadraticBezierCurve:ul,QuadraticBezierCurve3:Ua,SplineCurve:dl});var mn=class n extends Mr{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var bs=class n extends Mr{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Gn=class n extends Vt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),c=Math.floor(s),l=o+1,h=c+1,u=e/o,d=t/c,p=[],g=[],v=[],m=[];for(let f=0;f<h;f++){let b=f*d-a;for(let S=0;S<l;S++){let _=S*u-r;g.push(_,-b,0),v.push(0,0,1),m.push(S/o),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let b=0;b<o;b++){let S=b+l*f,_=b+l*(f+1),M=b+1+l*(f+1),E=b+1+l*f;p.push(S,_,E),p.push(_,M,E)}this.setIndex(p),this.setAttribute("position",new it(g,3)),this.setAttribute("normal",new it(v,3)),this.setAttribute("uv",new it(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var Ms=class n extends Vt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new P,d=new P,p=[],g=[],v=[],m=[];for(let f=0;f<=i;f++){let b=[],S=f/i,_=0;f===0&&a===0?_=.5/t:f===i&&c===Math.PI&&(_=-.5/t);for(let M=0;M<=t;M++){let E=M/t;u.x=-e*Math.cos(s+E*r)*Math.sin(a+S*o),u.y=e*Math.cos(a+S*o),u.z=e*Math.sin(s+E*r)*Math.sin(a+S*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(E+_,1-S),b.push(l++)}h.push(b)}for(let f=0;f<i;f++)for(let b=0;b<t;b++){let S=h[f][b+1],_=h[f][b],M=h[f+1][b],E=h[f+1][b+1];(f!==0||a>0)&&p.push(S,_,E),(f!==i-1||c<Math.PI)&&p.push(_,M,E)}this.setIndex(p),this.setAttribute("position",new it(g,3)),this.setAttribute("normal",new it(v,3)),this.setAttribute("uv",new it(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ri=class n extends Vt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let a=[],o=[],c=[],l=[],h=new P,u=new P,d=new P;for(let p=0;p<=i;p++)for(let g=0;g<=s;g++){let v=g/s*r,m=p/i*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(v),u.y=(e+t*Math.cos(m))*Math.sin(v),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=s;g++){let v=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,f=(s+1)*(p-1)+g,b=(s+1)*p+g;a.push(v,m,b),a.push(m,f,b)}this.setIndex(a),this.setAttribute("position",new it(o,3)),this.setAttribute("normal",new it(c,3)),this.setAttribute("uv",new it(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Ss=class n extends Vt{constructor(e=new Ua(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new P,c=new P,l=new oe,h=new P,u=[],d=[],p=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new it(u,3)),this.setAttribute("normal",new it(d,3)),this.setAttribute("uv",new it(p,2));function v(){for(let S=0;S<t;S++)m(S);m(r===!1?t:0),b(),f()}function m(S){h=e.getPointAt(S/t,h);let _=a.normals[S],M=a.binormals[S];for(let E=0;E<=s;E++){let A=E/s*Math.PI*2,R=Math.sin(A),x=-Math.cos(A);c.x=x*_.x+R*M.x,c.y=x*_.y+R*M.y,c.z=x*_.z+R*M.z,c.normalize(),d.push(c.x,c.y,c.z),o.x=h.x+i*c.x,o.y=h.y+i*c.y,o.z=h.z+i*c.z,u.push(o.x,o.y,o.z)}}function f(){for(let S=1;S<=t;S++)for(let _=1;_<=s;_++){let M=(s+1)*(S-1)+(_-1),E=(s+1)*S+(_-1),A=(s+1)*S+_,R=(s+1)*(S-1)+_;g.push(M,E,R),g.push(E,A,R)}}function b(){for(let S=0;S<=t;S++)for(let _=0;_<=s;_++)l.x=S/t,l.y=_/s,p.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new o0[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var Na=class extends Ot{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},$i=class extends si{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=su,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Sr=class extends si{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=If,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},fl=class extends si{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function qo(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function l0(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var ws=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},pl=class extends ws{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Fh,endingEnd:Fh}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Oh:r=e,o=2*t-i;break;case kh:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Oh:a=e,c=2*i-t;break;case kh:a=1,c=i+s[1]-s[0];break;default:a=e-1,c=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(i-t)/(s-t),v=g*g,m=v*g,f=-d*m+2*d*v-d*g,b=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*g+1,S=(-1-p)*m+(1.5+p)*v+.5*g,_=p*m-p*v;for(let M=0;M!==o;++M)r[M]=f*a[h+M]+b*a[l+M]+S*a[c+M]+_*a[u+M];return r}},ml=class extends ws{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(i-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}},gl=class extends ws{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Dn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=qo(t,this.TimeBufferType),this.values=qo(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:qo(e.times,Array),values:qo(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new gl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ml(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new pl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case pa:t=this.InterpolantFactoryMethodDiscrete;break;case Jo:t=this.InterpolantFactoryMethodLinear;break;case Yo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return pa;case this.InterpolantFactoryMethodLinear:return Jo;case this.InterpolantFactoryMethodSmooth:return Yo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=i[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&l0(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Yo,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{let u=o*i,d=u-i,p=u+i;for(let g=0;g!==i;++g){let v=t[u+g];if(v!==t[d+g]||v!==t[p+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let u=o*i,d=a*i;for(let p=0;p!==i;++p)t[d+p]=t[u+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,c=a*i,l=0;l!==i;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Dn.prototype.ValueTypeName="";Dn.prototype.TimeBufferType=Float32Array;Dn.prototype.ValueBufferType=Float32Array;Dn.prototype.DefaultInterpolation=Jo;var Zi=class extends Dn{constructor(e,t,i){super(e,t,i)}};Zi.prototype.ValueTypeName="bool";Zi.prototype.ValueBufferType=Array;Zi.prototype.DefaultInterpolation=pa;Zi.prototype.InterpolantFactoryMethodLinear=void 0;Zi.prototype.InterpolantFactoryMethodSmooth=void 0;var vl=class extends Dn{constructor(e,t,i,s){super(e,t,i,s)}};vl.prototype.ValueTypeName="color";var _l=class extends Dn{constructor(e,t,i,s){super(e,t,i,s)}};_l.prototype.ValueTypeName="number";var xl=class extends ws{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-t)/(s-t),l=e*o;for(let h=l+o;l!==h;l+=4)pn.slerpFlat(r,0,a,l-o,a,l,c);return r}},Fa=class extends Dn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new xl(this.times,this.values,this.getValueSize(),e)}};Fa.prototype.ValueTypeName="quaternion";Fa.prototype.InterpolantFactoryMethodSmooth=void 0;var ji=class extends Dn{constructor(e,t,i){super(e,t,i)}};ji.prototype.ValueTypeName="string";ji.prototype.ValueBufferType=Array;ji.prototype.DefaultInterpolation=pa;ji.prototype.InterpolantFactoryMethodLinear=void 0;ji.prototype.InterpolantFactoryMethodSmooth=void 0;var yl=class extends Dn{constructor(e,t,i,s){super(e,t,i,s)}};yl.prototype.ValueTypeName="vector";var bl=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let p=l[u],g=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Gf=new bl,Ml=class{constructor(e){this.manager=e!==void 0?e:Gf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Ml.DEFAULT_MATERIAL_NAME="__DEFAULT";var wr=class extends Kt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Oa=class extends wr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new De(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Uh=new at,sf=new P,rf=new P,Sl=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.mapType=ei,this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yr,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;sf.setFromMatrixPosition(e.matrixWorld),t.position.copy(sf),rf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(rf),t.updateMatrixWorld(),Uh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uh,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Uh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var af=new at,ca=new P,Nh=new P,Vh=class extends Sl{constructor(){super(new nn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new oe(4,2),this._viewportCount=6,this._viewports=[new dt(2,1,1,1),new dt(0,1,1,1),new dt(3,1,1,1),new dt(1,1,1,1),new dt(3,0,1,1),new dt(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),ca.setFromMatrixPosition(e.matrixWorld),i.position.copy(ca),Nh.copy(i.position),Nh.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Nh),i.updateMatrixWorld(),s.makeTranslation(-ca.x,-ca.y,-ca.z),af.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(af,i.coordinateSystem,i.reversedDepth)}},Tr=class extends wr{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Vh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Ts=class extends Ma{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Hh=class extends Sl{constructor(){super(new Ts(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ki=class extends wr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.target=new Kt,this.shadow=new Hh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var wl=class extends nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},ka=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var du="\\[\\]\\.:\\/",c0=new RegExp("["+du+"]","g"),fu="[^"+du+"]",h0="[^"+du.replace("\\.","")+"]",u0=/((?:WC+[\/:])*)/.source.replace("WC",fu),d0=/(WCOD+)?/.source.replace("WCOD",h0),f0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fu),p0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fu),m0=new RegExp("^"+u0+d0+f0+p0+"$"),g0=["material","materials","bones","map"],Gh=class{constructor(e,t,i){let s=i||At.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},At=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(c0,"")}static parseTrackName(e){let t=m0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);g0.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=i(o.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};At.Composite=Gh;At.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};At.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};At.prototype.GetterByBindingType=[At.prototype._getValue_direct,At.prototype._getValue_array,At.prototype._getValue_arrayElement,At.prototype._getValue_toArray];At.prototype.SetterByBindingTypeAndVersioning=[[At.prototype._setValue_direct,At.prototype._setValue_direct_setNeedsUpdate,At.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[At.prototype._setValue_array,At.prototype._setValue_array_setNeedsUpdate,At.prototype._setValue_array_setMatrixWorldNeedsUpdate],[At.prototype._setValue_arrayElement,At.prototype._setValue_arrayElement_setNeedsUpdate,At.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[At.prototype._setValue_fromArray,At.prototype._setValue_fromArray_setNeedsUpdate,At.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var DS=new Float32Array(1);var Er=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=$e(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos($e(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Ba=class extends ii{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function pu(n,e,t,i){let s=v0(i);switch(t){case eu:return n*e;case nu:return n*e/s.components*s.byteLength;case Xl:return n*e/s.components*s.byteLength;case iu:return n*e*2/s.components*s.byteLength;case ql:return n*e*2/s.components*s.byteLength;case tu:return n*e*3/s.components*s.byteLength;case Wn:return n*e*4/s.components*s.byteLength;case Yl:return n*e*4/s.components*s.byteLength;case Ha:case Ga:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Wa:case Xa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Zl:case Kl:return Math.max(n,16)*Math.max(e,8)/4;case $l:case jl:return Math.max(n,8)*Math.max(e,8)/2;case Jl:case Ql:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ec:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case tc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case nc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case ic:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case sc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case rc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ac:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case oc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case lc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case cc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case hc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case uc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case dc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case fc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case pc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case mc:case gc:case vc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case _c:case xc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case yc:case bc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function v0(n){switch(n){case ei:case jh:return{byteLength:1,components:1};case Cr:case Kh:case Tn:return{byteLength:2,components:1};case Gl:case Wl:return{byteLength:2,components:4};case ts:case Hl:case oi:return{byteLength:4,components:1};case Jh:case Qh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function fp(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function x0(n){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,u=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,h),o.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,c,l){let h=c.array,u=c.updateRanges;if(n.bindBuffer(l,o),u.length===0)n.bufferSubData(l,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){let g=u[d],v=u[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){let v=u[p];n.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var y0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,b0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,M0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,S0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,w0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,T0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,E0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,A0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,C0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,R0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,I0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,P0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,D0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,L0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,U0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,N0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,F0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,O0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,k0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,B0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,z0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,V0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,H0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,G0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,W0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,X0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,q0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Y0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Z0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,j0="gl_FragColor = linearToOutputTexel( gl_FragColor );",K0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,J0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Q0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ev=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,tv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,iv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,av=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ov=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,uv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,dv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,fv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,_v=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,xv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,yv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,bv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Mv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ev=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Av=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Rv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Iv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Pv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Dv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Lv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Uv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Fv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ov=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,kv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Bv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Hv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Gv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$v=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Zv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,e_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,t_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,n_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,i_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,s_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,r_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,a_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,o_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,l_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,c_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,h_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,u_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,d_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,f_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,p_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,m_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,g_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,v_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,__=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,x_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,y_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,M_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,w_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,E_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,A_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,C_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,R_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,I_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,D_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,L_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,U_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,N_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,F_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,O_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,k_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,B_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,z_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,V_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,H_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,G_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,W_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,X_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,q_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Y_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,$_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Z_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,j_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,K_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,J_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ze={alphahash_fragment:y0,alphahash_pars_fragment:b0,alphamap_fragment:M0,alphamap_pars_fragment:S0,alphatest_fragment:w0,alphatest_pars_fragment:T0,aomap_fragment:E0,aomap_pars_fragment:A0,batching_pars_vertex:C0,batching_vertex:R0,begin_vertex:I0,beginnormal_vertex:P0,bsdfs:D0,iridescence_fragment:L0,bumpmap_pars_fragment:U0,clipping_planes_fragment:N0,clipping_planes_pars_fragment:F0,clipping_planes_pars_vertex:O0,clipping_planes_vertex:k0,color_fragment:B0,color_pars_fragment:z0,color_pars_vertex:V0,color_vertex:H0,common:G0,cube_uv_reflection_fragment:W0,defaultnormal_vertex:X0,displacementmap_pars_vertex:q0,displacementmap_vertex:Y0,emissivemap_fragment:$0,emissivemap_pars_fragment:Z0,colorspace_fragment:j0,colorspace_pars_fragment:K0,envmap_fragment:J0,envmap_common_pars_fragment:Q0,envmap_pars_fragment:ev,envmap_pars_vertex:tv,envmap_physical_pars_fragment:dv,envmap_vertex:nv,fog_vertex:iv,fog_pars_vertex:sv,fog_fragment:rv,fog_pars_fragment:av,gradientmap_pars_fragment:ov,lightmap_pars_fragment:lv,lights_lambert_fragment:cv,lights_lambert_pars_fragment:hv,lights_pars_begin:uv,lights_toon_fragment:fv,lights_toon_pars_fragment:pv,lights_phong_fragment:mv,lights_phong_pars_fragment:gv,lights_physical_fragment:vv,lights_physical_pars_fragment:_v,lights_fragment_begin:xv,lights_fragment_maps:yv,lights_fragment_end:bv,logdepthbuf_fragment:Mv,logdepthbuf_pars_fragment:Sv,logdepthbuf_pars_vertex:wv,logdepthbuf_vertex:Tv,map_fragment:Ev,map_pars_fragment:Av,map_particle_fragment:Cv,map_particle_pars_fragment:Rv,metalnessmap_fragment:Iv,metalnessmap_pars_fragment:Pv,morphinstance_vertex:Dv,morphcolor_vertex:Lv,morphnormal_vertex:Uv,morphtarget_pars_vertex:Nv,morphtarget_vertex:Fv,normal_fragment_begin:Ov,normal_fragment_maps:kv,normal_pars_fragment:Bv,normal_pars_vertex:zv,normal_vertex:Vv,normalmap_pars_fragment:Hv,clearcoat_normal_fragment_begin:Gv,clearcoat_normal_fragment_maps:Wv,clearcoat_pars_fragment:Xv,iridescence_pars_fragment:qv,opaque_fragment:Yv,packing:$v,premultiplied_alpha_fragment:Zv,project_vertex:jv,dithering_fragment:Kv,dithering_pars_fragment:Jv,roughnessmap_fragment:Qv,roughnessmap_pars_fragment:e_,shadowmap_pars_fragment:t_,shadowmap_pars_vertex:n_,shadowmap_vertex:i_,shadowmask_pars_fragment:s_,skinbase_vertex:r_,skinning_pars_vertex:a_,skinning_vertex:o_,skinnormal_vertex:l_,specularmap_fragment:c_,specularmap_pars_fragment:h_,tonemapping_fragment:u_,tonemapping_pars_fragment:d_,transmission_fragment:f_,transmission_pars_fragment:p_,uv_pars_fragment:m_,uv_pars_vertex:g_,uv_vertex:v_,worldpos_vertex:__,background_vert:x_,background_frag:y_,backgroundCube_vert:b_,backgroundCube_frag:M_,cube_vert:S_,cube_frag:w_,depth_vert:T_,depth_frag:E_,distanceRGBA_vert:A_,distanceRGBA_frag:C_,equirect_vert:R_,equirect_frag:I_,linedashed_vert:P_,linedashed_frag:D_,meshbasic_vert:L_,meshbasic_frag:U_,meshlambert_vert:N_,meshlambert_frag:F_,meshmatcap_vert:O_,meshmatcap_frag:k_,meshnormal_vert:B_,meshnormal_frag:z_,meshphong_vert:V_,meshphong_frag:H_,meshphysical_vert:G_,meshphysical_frag:W_,meshtoon_vert:X_,meshtoon_frag:q_,points_vert:Y_,points_frag:$_,shadow_vert:Z_,shadow_frag:j_,sprite_vert:K_,sprite_frag:J_},de={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},li={basic:{uniforms:hn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:hn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new De(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:hn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:hn([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:hn([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new De(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:hn([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:hn([de.points,de.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:hn([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:hn([de.common,de.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:hn([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:hn([de.sprite,de.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:hn([de.common,de.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:hn([de.lights,de.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};li.physical={uniforms:hn([li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};var Sc={r:0,b:0,g:0},Is=new Pn,Q_=new at;function ex(n,e,t,i,s,r,a){let o=new De(0),c=r===!0?0:1,l,h,u=null,d=0,p=null;function g(S){let _=S.isScene===!0?S.background:null;return _&&_.isTexture&&(_=(S.backgroundBlurriness>0?t:e).get(_)),_}function v(S){let _=!1,M=g(S);M===null?f(o,c):M&&M.isColor&&(f(M,1),_=!0);let E=n.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(S,_){let M=g(_);M&&(M.isCubeTexture||M.mapping===za)?(h===void 0&&(h=new ft(new qi(1,1,1),new Ot({name:"BackgroundCubeMaterial",uniforms:Rs(li.backgroundCube.uniforms),vertexShader:li.backgroundCube.vertexShader,fragmentShader:li.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Is.copy(_.backgroundRotation),Is.x*=-1,Is.y*=-1,Is.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Is.y*=-1,Is.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Q_.makeRotationFromEuler(Is)),h.material.toneMapped=et.getTransfer(M.colorSpace)!==rt,(u!==M||d!==M.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,u=M,d=M.version,p=n.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new ft(new Gn(2,2),new Ot({name:"BackgroundMaterial",uniforms:Rs(li.background.uniforms),vertexShader:li.background.vertexShader,fragmentShader:li.background.fragmentShader,side:Ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=et.getTransfer(M.colorSpace)!==rt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,u=M,d=M.version,p=n.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function f(S,_){S.getRGB(Sc,hu(n)),i.buffers.color.setClear(Sc.r,Sc.g,Sc.b,_,a)}function b(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,_=1){o.set(S),c=_,f(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,f(o,c)},render:v,addToRenderList:m,dispose:b}}function tx(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,a=!1;function o(y,L,U,k,W){let V=!1,G=u(k,U,L);r!==G&&(r=G,l(r.object)),V=p(y,k,U,W),V&&g(y,k,U,W),W!==null&&e.update(W,n.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,_(y,L,U,k),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function c(){return n.createVertexArray()}function l(y){return n.bindVertexArray(y)}function h(y){return n.deleteVertexArray(y)}function u(y,L,U){let k=U.wireframe===!0,W=i[y.id];W===void 0&&(W={},i[y.id]=W);let V=W[L.id];V===void 0&&(V={},W[L.id]=V);let G=V[k];return G===void 0&&(G=d(c()),V[k]=G),G}function d(y){let L=[],U=[],k=[];for(let W=0;W<t;W++)L[W]=0,U[W]=0,k[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:U,attributeDivisors:k,object:y,attributes:{},index:null}}function p(y,L,U,k){let W=r.attributes,V=L.attributes,G=0,j=U.getAttributes();for(let H in j)if(j[H].location>=0){let ne=W[H],ce=V[H];if(ce===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(ce=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(ce=y.instanceColor)),ne===void 0||ne.attribute!==ce||ce&&ne.data!==ce.data)return!0;G++}return r.attributesNum!==G||r.index!==k}function g(y,L,U,k){let W={},V=L.attributes,G=0,j=U.getAttributes();for(let H in j)if(j[H].location>=0){let ne=V[H];ne===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(ne=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(ne=y.instanceColor));let ce={};ce.attribute=ne,ne&&ne.data&&(ce.data=ne.data),W[H]=ce,G++}r.attributes=W,r.attributesNum=G,r.index=k}function v(){let y=r.newAttributes;for(let L=0,U=y.length;L<U;L++)y[L]=0}function m(y){f(y,0)}function f(y,L){let U=r.newAttributes,k=r.enabledAttributes,W=r.attributeDivisors;U[y]=1,k[y]===0&&(n.enableVertexAttribArray(y),k[y]=1),W[y]!==L&&(n.vertexAttribDivisor(y,L),W[y]=L)}function b(){let y=r.newAttributes,L=r.enabledAttributes;for(let U=0,k=L.length;U<k;U++)L[U]!==y[U]&&(n.disableVertexAttribArray(U),L[U]=0)}function S(y,L,U,k,W,V,G){G===!0?n.vertexAttribIPointer(y,L,U,W,V):n.vertexAttribPointer(y,L,U,k,W,V)}function _(y,L,U,k){v();let W=k.attributes,V=U.getAttributes(),G=L.defaultAttributeValues;for(let j in V){let H=V[j];if(H.location>=0){let K=W[j];if(K===void 0&&(j==="instanceMatrix"&&y.instanceMatrix&&(K=y.instanceMatrix),j==="instanceColor"&&y.instanceColor&&(K=y.instanceColor)),K!==void 0){let ne=K.normalized,ce=K.itemSize,Te=e.get(K);if(Te===void 0)continue;let qe=Te.buffer,He=Te.type,Re=Te.bytesPerElement,Y=He===n.INT||He===n.UNSIGNED_INT||K.gpuType===Hl;if(K.isInterleavedBufferAttribute){let J=K.data,he=J.stride,ye=K.offset;if(J.isInstancedInterleavedBuffer){for(let ve=0;ve<H.locationSize;ve++)f(H.location+ve,J.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ve=0;ve<H.locationSize;ve++)m(H.location+ve);n.bindBuffer(n.ARRAY_BUFFER,qe);for(let ve=0;ve<H.locationSize;ve++)S(H.location+ve,ce/H.locationSize,He,ne,he*Re,(ye+ce/H.locationSize*ve)*Re,Y)}else{if(K.isInstancedBufferAttribute){for(let J=0;J<H.locationSize;J++)f(H.location+J,K.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let J=0;J<H.locationSize;J++)m(H.location+J);n.bindBuffer(n.ARRAY_BUFFER,qe);for(let J=0;J<H.locationSize;J++)S(H.location+J,ce/H.locationSize,He,ne,ce*Re,ce/H.locationSize*J*Re,Y)}}else if(G!==void 0){let ne=G[j];if(ne!==void 0)switch(ne.length){case 2:n.vertexAttrib2fv(H.location,ne);break;case 3:n.vertexAttrib3fv(H.location,ne);break;case 4:n.vertexAttrib4fv(H.location,ne);break;default:n.vertexAttrib1fv(H.location,ne)}}}}b()}function M(){R();for(let y in i){let L=i[y];for(let U in L){let k=L[U];for(let W in k)h(k[W].object),delete k[W];delete L[U]}delete i[y]}}function E(y){if(i[y.id]===void 0)return;let L=i[y.id];for(let U in L){let k=L[U];for(let W in k)h(k[W].object),delete k[W];delete L[U]}delete i[y.id]}function A(y){for(let L in i){let U=i[L];if(U[y.id]===void 0)continue;let k=U[y.id];for(let W in k)h(k[W].object),delete k[W];delete U[y.id]}}function R(){x(),a=!0,r!==s&&(r=s,l(r.object))}function x(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:R,resetDefaultState:x,dispose:M,releaseStatesOfGeometry:E,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:m,disableUnusedAttributes:b}}function nx(n,e,t){let i;function s(l){i=l}function r(l,h){n.drawArrays(i,l,h),t.update(h,i,1)}function a(l,h,u){u!==0&&(n.drawArraysInstanced(i,l,h,u),t.update(h,i,u))}function o(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];t.update(p,i,1)}function c(l,h,u,d){if(u===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)a(l[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,h,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*d[v];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function ix(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==Wn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let R=A===Tn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==ei&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==oi&&!R)}function c(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),M=g>0,E=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:b,maxVaryings:S,maxFragmentUniforms:_,vertexTextures:M,maxSamples:E}}function sx(n){let e=this,t=null,i=0,s=!1,r=!1,a=new zn,o=new We,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||i!==0||s;return s=d,i=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){let g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,f=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let b=r?0:i,S=b*4,_=f.clippingState||null;c.value=_,_=h(g,d,S,p);for(let M=0;M!==S;++M)_[M]=t[M];f.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,p,g){let v=u!==null?u.length:0,m=null;if(v!==0){if(m=c.value,g!==!0||m===null){let f=p+v*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<f)&&(m=new Float32Array(f));for(let S=0,_=p;S!==v;++S,_+=4)a.copy(u[S]).applyMatrix4(b,o),a.normal.toArray(m,_),m[_+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function rx(n){let e=new WeakMap;function t(a,o){return o===Bl?a.mapping=As:o===zl&&(a.mapping=Cs),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===Bl||o===zl)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new sl(c.height);return l.fromEquirectangularTexture(n,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var Dr=4,Wf=[.125,.215,.35,.446,.526,.582],Ls=20,mu=new Ts,Xf=new De,gu=null,vu=0,_u=0,xu=!1,Ds=(1+Math.sqrt(5))/2,Pr=1/Ds,qf=[new P(-Ds,Pr,0),new P(Ds,Pr,0),new P(-Pr,0,Ds),new P(Pr,0,Ds),new P(0,Ds,-Pr),new P(0,Ds,Pr),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],ax=new P,Ec=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){let{size:a=256,position:o=ax}=r;gu=this._renderer.getRenderTarget(),vu=this._renderer.getActiveCubeFace(),_u=this._renderer.getActiveMipmapLevel(),xu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$f(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(gu,vu,_u),this._renderer.xr.enabled=xu,e.scissorTest=!1,wc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===As||e.mapping===Cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),gu=this._renderer.getRenderTarget(),vu=this._renderer.getActiveCubeFace(),_u=this._renderer.getActiveMipmapLevel(),xu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Qn,minFilter:Qn,generateMipmaps:!1,type:Tn,format:Wn,colorSpace:vs,depthBuffer:!1},s=Yf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yf(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ox(r)),this._blurMaterial=lx(r,e,t)}return s}_compileMaterial(e){let t=new ft(this._lodPlanes[0],e);this._renderer.compile(t,mu)}_sceneToCubeUV(e,t,i,s,r){let c=new nn(90,1,t,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(Xf),u.toneMapping=Ii,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let v=new Sn({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1}),m=new ft(new qi,v),f=!1,b=e.background;b?b.isColor&&(v.color.copy(b),e.background=null,f=!0):(v.color.copy(Xf),f=!0);for(let S=0;S<6;S++){let _=S%3;_===0?(c.up.set(0,l[S],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[S],r.y,r.z)):_===1?(c.up.set(0,0,l[S]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[S],r.z)):(c.up.set(0,l[S],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[S]));let M=this._cubeSize;wc(s,_*M,S>2?M:0,M,M),u.setRenderTarget(s),f&&u.render(m,c),u.render(e,c)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=p,u.autoClear=d,e.background=b}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===As||e.mapping===Cs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$f());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new ft(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;wc(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,mu)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=qf[(s-r-1)%qf.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ft(this._lodPlanes[s],l),d=l.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ls-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):Ls;m>Ls&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ls}`);let f=[],b=0;for(let A=0;A<Ls;++A){let R=A/v,x=Math.exp(-R*R/2);f.push(x),A===0?b+=x:A<m&&(b+=2*x)}for(let A=0;A<f.length;A++)f[A]=f[A]/b;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:S}=this;d.dTheta.value=g,d.mipInt.value=S-i;let _=this._sizeLods[s],M=3*_*(s>S-Dr?s-S+Dr:0),E=4*(this._cubeSize-_);wc(t,M,E,3*_,2*_),c.setRenderTarget(t),c.render(u,mu)}};function ox(n){let e=[],t=[],i=[],s=n,r=n-Dr+1+Wf.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let c=1/o;a>n-Dr?c=Wf[a-n+Dr-1]:a===0&&(c=0),i.push(c);let l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,v=3,m=2,f=1,b=new Float32Array(v*g*p),S=new Float32Array(m*g*p),_=new Float32Array(f*g*p);for(let E=0;E<p;E++){let A=E%3*2/3-1,R=E>2?0:-1,x=[A,R,0,A+2/3,R,0,A+2/3,R+1,0,A,R,0,A+2/3,R+1,0,A,R+1,0];b.set(x,v*g*E),S.set(d,m*g*E);let y=[E,E,E,E,E,E];_.set(y,f*g*E)}let M=new Vt;M.setAttribute("position",new bn(b,v)),M.setAttribute("uv",new bn(S,m)),M.setAttribute("faceIndex",new bn(_,f)),e.push(M),s>Dr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Yf(n,e,t){let i=new jt(n,e,t);return i.texture.mapping=za,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function wc(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function lx(n,e,t){let i=new Float32Array(Ls),s=new P(0,1,0);return new Ot({name:"SphericalGaussianBlur",defines:{n:Ls,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function $f(){return new Ot({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Zf(){return new Ot({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Ru(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function cx(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){let c=o.mapping,l=c===Bl||c===zl,h=c===As||c===Cs;if(l||h){let u=e.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Ec(n)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let p=o.image;return l&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new Ec(n)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function hx(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&gr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function ux(n,e,t,i){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete s[d.id];let p=r.get(d);p&&(e.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let p in d)e.update(d[p],n.ARRAY_BUFFER)}function l(u){let d=[],p=u.index,g=u.attributes.position,v=0;if(p!==null){let b=p.array;v=p.version;for(let S=0,_=b.length;S<_;S+=3){let M=b[S+0],E=b[S+1],A=b[S+2];d.push(M,E,E,A,A,M)}}else if(g!==void 0){let b=g.array;v=g.version;for(let S=0,_=b.length/3-1;S<_;S+=3){let M=S+0,E=S+1,A=S+2;d.push(M,E,E,A,A,M)}}else return;let m=new(cu(d)?ba:ya)(d,1);m.version=v;let f=r.get(u);f&&e.remove(f),r.set(u,m)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function dx(n,e,t){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,p){n.drawElements(i,p,r,d*a),t.update(p,i,1)}function l(d,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,d*a,g),t.update(p,i,g))}function h(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,i,1)}function u(d,p,g,v){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)l(d[f]/a,p[f],v[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,d,0,v,0,g);let f=0;for(let b=0;b<g;b++)f+=p[b]*v[b];t.update(f,i,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function fx(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function px(n,e,t){let i=new WeakMap,s=new dt;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(o);if(d===void 0||d.count!==u){let x=function(){A.dispose(),i.delete(o),o.removeEventListener("dispose",x)};d!==void 0&&d.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],S=0;p===!0&&(S=1),g===!0&&(S=2),v===!0&&(S=3);let _=o.attributes.position.count*S,M=1;_>e.maxTextureSize&&(M=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let E=new Float32Array(_*M*4*u),A=new _a(E,_,M,u);A.type=oi,A.needsUpdate=!0;let R=S*4;for(let y=0;y<u;y++){let L=m[y],U=f[y],k=b[y],W=_*M*4*y;for(let V=0;V<L.count;V++){let G=V*R;p===!0&&(s.fromBufferAttribute(L,V),E[W+G+0]=s.x,E[W+G+1]=s.y,E[W+G+2]=s.z,E[W+G+3]=0),g===!0&&(s.fromBufferAttribute(U,V),E[W+G+4]=s.x,E[W+G+5]=s.y,E[W+G+6]=s.z,E[W+G+7]=0),v===!0&&(s.fromBufferAttribute(k,V),E[W+G+8]=s.x,E[W+G+9]=s.y,E[W+G+10]=s.z,E[W+G+11]=k.itemSize===4?s.w:1)}}d={count:u,texture:A,size:new oe(_,M)},i.set(o,d),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let p=0;for(let v=0;v<l.length;v++)p+=l[v];let g=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function mx(n,e,t,i){let s=new WeakMap;function r(c){let l=i.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}var pp=new Mn,jf=new Ra(1,1),mp=new _a,gp=new nl,vp=new Sa,Kf=[],Jf=[],Qf=new Float32Array(16),ep=new Float32Array(9),tp=new Float32Array(4);function Ur(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Kf[s];if(r===void 0&&(r=new Float32Array(s),Kf[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Wt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Xt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Cc(n,e){let t=Jf[e];t===void 0&&(t=new Int32Array(e),Jf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function gx(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function vx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;n.uniform2fv(this.addr,e),Xt(t,e)}}function _x(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Wt(t,e))return;n.uniform3fv(this.addr,e),Xt(t,e)}}function xx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;n.uniform4fv(this.addr,e),Xt(t,e)}}function yx(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Wt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,i))return;tp.set(i),n.uniformMatrix2fv(this.addr,!1,tp),Xt(t,i)}}function bx(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Wt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,i))return;ep.set(i),n.uniformMatrix3fv(this.addr,!1,ep),Xt(t,i)}}function Mx(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Wt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,i))return;Qf.set(i),n.uniformMatrix4fv(this.addr,!1,Qf),Xt(t,i)}}function Sx(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function wx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;n.uniform2iv(this.addr,e),Xt(t,e)}}function Tx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;n.uniform3iv(this.addr,e),Xt(t,e)}}function Ex(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;n.uniform4iv(this.addr,e),Xt(t,e)}}function Ax(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Cx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;n.uniform2uiv(this.addr,e),Xt(t,e)}}function Rx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;n.uniform3uiv(this.addr,e),Xt(t,e)}}function Ix(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;n.uniform4uiv(this.addr,e),Xt(t,e)}}function Px(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(jf.compareFunction=ru,r=jf):r=pp,t.setTexture2D(e||r,s)}function Dx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||gp,s)}function Lx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||vp,s)}function Ux(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||mp,s)}function Nx(n){switch(n){case 5126:return gx;case 35664:return vx;case 35665:return _x;case 35666:return xx;case 35674:return yx;case 35675:return bx;case 35676:return Mx;case 5124:case 35670:return Sx;case 35667:case 35671:return wx;case 35668:case 35672:return Tx;case 35669:case 35673:return Ex;case 5125:return Ax;case 36294:return Cx;case 36295:return Rx;case 36296:return Ix;case 35678:case 36198:case 36298:case 36306:case 35682:return Px;case 35679:case 36299:case 36307:return Dx;case 35680:case 36300:case 36308:case 36293:return Lx;case 36289:case 36303:case 36311:case 36292:return Ux}}function Fx(n,e){n.uniform1fv(this.addr,e)}function Ox(n,e){let t=Ur(e,this.size,2);n.uniform2fv(this.addr,t)}function kx(n,e){let t=Ur(e,this.size,3);n.uniform3fv(this.addr,t)}function Bx(n,e){let t=Ur(e,this.size,4);n.uniform4fv(this.addr,t)}function zx(n,e){let t=Ur(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Vx(n,e){let t=Ur(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Hx(n,e){let t=Ur(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Gx(n,e){n.uniform1iv(this.addr,e)}function Wx(n,e){n.uniform2iv(this.addr,e)}function Xx(n,e){n.uniform3iv(this.addr,e)}function qx(n,e){n.uniform4iv(this.addr,e)}function Yx(n,e){n.uniform1uiv(this.addr,e)}function $x(n,e){n.uniform2uiv(this.addr,e)}function Zx(n,e){n.uniform3uiv(this.addr,e)}function jx(n,e){n.uniform4uiv(this.addr,e)}function Kx(n,e,t){let i=this.cache,s=e.length,r=Cc(t,s);Wt(i,r)||(n.uniform1iv(this.addr,r),Xt(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||pp,r[a])}function Jx(n,e,t){let i=this.cache,s=e.length,r=Cc(t,s);Wt(i,r)||(n.uniform1iv(this.addr,r),Xt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||gp,r[a])}function Qx(n,e,t){let i=this.cache,s=e.length,r=Cc(t,s);Wt(i,r)||(n.uniform1iv(this.addr,r),Xt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||vp,r[a])}function ey(n,e,t){let i=this.cache,s=e.length,r=Cc(t,s);Wt(i,r)||(n.uniform1iv(this.addr,r),Xt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||mp,r[a])}function ty(n){switch(n){case 5126:return Fx;case 35664:return Ox;case 35665:return kx;case 35666:return Bx;case 35674:return zx;case 35675:return Vx;case 35676:return Hx;case 5124:case 35670:return Gx;case 35667:case 35671:return Wx;case 35668:case 35672:return Xx;case 35669:case 35673:return qx;case 5125:return Yx;case 36294:return $x;case 36295:return Zx;case 36296:return jx;case 35678:case 36198:case 36298:case 36306:case 35682:return Kx;case 35679:case 36299:case 36307:return Jx;case 35680:case 36300:case 36308:case 36293:return Qx;case 36289:case 36303:case 36311:case 36292:return ey}}var bu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Nx(t.type)}},Mu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ty(t.type)}},Su=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},yu=/(\w+)(\])?(\[|\.)?/g;function np(n,e){n.seq.push(e),n.map[e.id]=e}function ny(n,e,t){let i=n.name,s=i.length;for(yu.lastIndex=0;;){let r=yu.exec(i),a=yu.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){np(t,l===void 0?new bu(o,n,e):new Mu(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new Su(o),np(t,u)),t=u}}}var Lr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);ny(r,a,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function ip(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var iy=37297,sy=0;function ry(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var sp=new We;function ay(n){et._getMatrix(sp,et.workingColorSpace,n);let e=`mat3( ${sp.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(n)){case ma:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function rp(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+ry(n.getShaderSource(e),o)}else return r}function oy(n,e){let t=ay(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function ly(n,e){let t;switch(e){case Ll:t="Linear";break;case Ul:t="Reinhard";break;case Nl:t="Cineon";break;case Ar:t="ACESFilmic";break;case Ol:t="AgX";break;case kl:t="Neutral";break;case Fl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Tc=new P;function cy(){et.getLuminanceCoefficients(Tc);let n=Tc.x.toFixed(4),e=Tc.y.toFixed(4),t=Tc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hy(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qa).join(`
`)}function uy(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function dy(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function qa(n){return n!==""}function ap(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function op(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var fy=/^[ \t]*#include +<([\w\d./]+)>/gm;function wu(n){return n.replace(fy,my)}var py=new Map;function my(n,e){let t=Ze[e];if(t===void 0){let i=py.get(e);if(i!==void 0)t=Ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return wu(t)}var gy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lp(n){return n.replace(gy,vy)}function vy(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function cp(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function _y(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Xh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Tl?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ai&&(e="SHADOWMAP_TYPE_VSM"),e}function xy(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case As:case Cs:e="ENVMAP_TYPE_CUBE";break;case za:e="ENVMAP_TYPE_CUBE_UV";break}return e}function yy(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Cs:e="ENVMAP_MODE_REFRACTION";break}return e}function by(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case $h:e="ENVMAP_BLENDING_MULTIPLY";break;case Af:e="ENVMAP_BLENDING_MIX";break;case Cf:e="ENVMAP_BLENDING_ADD";break}return e}function My(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Sy(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=_y(t),l=xy(t),h=yy(t),u=by(t),d=My(t),p=hy(t),g=uy(r),v=s.createProgram(),m,f,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(qa).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(qa).join(`
`),f.length>0&&(f+=`
`)):(m=[cp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qa).join(`
`),f=[cp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ii?"#define TONE_MAPPING":"",t.toneMapping!==Ii?Ze.tonemapping_pars_fragment:"",t.toneMapping!==Ii?ly("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,oy("linearToOutputTexel",t.outputColorSpace),cy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qa).join(`
`)),a=wu(a),a=ap(a,t),a=op(a,t),o=wu(o),o=ap(o,t),o=op(o,t),a=lp(a),o=lp(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===au?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===au?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let S=b+m+a,_=b+f+o,M=ip(s,s.VERTEX_SHADER,S),E=ip(s,s.FRAGMENT_SHADER,_);s.attachShader(v,M),s.attachShader(v,E),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function A(L){if(n.debug.checkShaderErrors){let U=s.getProgramInfoLog(v)||"",k=s.getShaderInfoLog(M)||"",W=s.getShaderInfoLog(E)||"",V=U.trim(),G=k.trim(),j=W.trim(),H=!0,K=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,M,E);else{let ne=rp(s,M,"vertex"),ce=rp(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+V+`
`+ne+`
`+ce)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(G===""||j==="")&&(K=!1);K&&(L.diagnostics={runnable:H,programLog:V,vertexShader:{log:G,prefix:m},fragmentShader:{log:j,prefix:f}})}s.deleteShader(M),s.deleteShader(E),R=new Lr(s,v),x=dy(s,v)}let R;this.getUniforms=function(){return R===void 0&&A(this),R};let x;this.getAttributes=function(){return x===void 0&&A(this),x};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(v,iy)),y},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=sy++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=M,this.fragmentShader=E,this}var wy=0,Tu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Eu(e),t.set(e,i)),i}},Eu=class{constructor(e){this.id=wy++,this.code=e,this.usedTimes=0}};function Ty(n,e,t,i,s,r,a){let o=new xa,c=new Tu,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,y,L,U,k){let W=U.fog,V=k.geometry,G=x.isMeshStandardMaterial?U.environment:null,j=(x.isMeshStandardMaterial?t:e).get(x.envMap||G),H=j&&j.mapping===za?j.image.height:null,K=g[x.type];x.precision!==null&&(p=s.getMaxPrecision(x.precision),p!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));let ne=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ce=ne!==void 0?ne.length:0,Te=0;V.morphAttributes.position!==void 0&&(Te=1),V.morphAttributes.normal!==void 0&&(Te=2),V.morphAttributes.color!==void 0&&(Te=3);let qe,He,Re,Y;if(K){let ct=li[K];qe=ct.vertexShader,He=ct.fragmentShader}else qe=x.vertexShader,He=x.fragmentShader,c.update(x),Re=c.getVertexShaderID(x),Y=c.getFragmentShaderID(x);let J=n.getRenderTarget(),he=n.state.buffers.depth.getReversed(),ye=k.isInstancedMesh===!0,ve=k.isBatchedMesh===!0,Ge=!!x.map,Rt=!!x.matcap,D=!!j,tt=!!x.aoMap,Ue=!!x.lightMap,Fe=!!x.bumpMap,be=!!x.normalMap,bt=!!x.displacementMap,Me=!!x.emissiveMap,ze=!!x.metalnessMap,Bt=!!x.roughnessMap,Tt=x.anisotropy>0,C=x.clearcoat>0,w=x.dispersion>0,z=x.iridescence>0,Z=x.sheen>0,te=x.transmission>0,$=Tt&&!!x.anisotropyMap,Ie=C&&!!x.clearcoatMap,le=C&&!!x.clearcoatNormalMap,Ee=C&&!!x.clearcoatRoughnessMap,Ae=z&&!!x.iridescenceMap,re=z&&!!x.iridescenceThicknessMap,me=Z&&!!x.sheenColorMap,ke=Z&&!!x.sheenRoughnessMap,Ce=!!x.specularMap,fe=!!x.specularColorMap,Ye=!!x.specularIntensityMap,F=te&&!!x.transmissionMap,ae=te&&!!x.thicknessMap,ue=!!x.gradientMap,xe=!!x.alphaMap,ie=x.alphaTest>0,Q=!!x.alphaHash,we=!!x.extensions,Xe=Ii;x.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Xe=n.toneMapping);let Mt={shaderID:K,shaderType:x.type,shaderName:x.name,vertexShader:qe,fragmentShader:He,defines:x.defines,customVertexShaderID:Re,customFragmentShaderID:Y,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,batching:ve,batchingColor:ve&&k._colorsTexture!==null,instancing:ye,instancingColor:ye&&k.instanceColor!==null,instancingMorph:ye&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:J===null?n.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:vs,alphaToCoverage:!!x.alphaToCoverage,map:Ge,matcap:Rt,envMap:D,envMapMode:D&&j.mapping,envMapCubeUVHeight:H,aoMap:tt,lightMap:Ue,bumpMap:Fe,normalMap:be,displacementMap:d&&bt,emissiveMap:Me,normalMapObjectSpace:be&&x.normalMapType===Pf,normalMapTangentSpace:be&&x.normalMapType===su,metalnessMap:ze,roughnessMap:Bt,anisotropy:Tt,anisotropyMap:$,clearcoat:C,clearcoatMap:Ie,clearcoatNormalMap:le,clearcoatRoughnessMap:Ee,dispersion:w,iridescence:z,iridescenceMap:Ae,iridescenceThicknessMap:re,sheen:Z,sheenColorMap:me,sheenRoughnessMap:ke,specularMap:Ce,specularColorMap:fe,specularIntensityMap:Ye,transmission:te,transmissionMap:F,thicknessMap:ae,gradientMap:ue,opaque:x.transparent===!1&&x.blending===ms&&x.alphaToCoverage===!1,alphaMap:xe,alphaTest:ie,alphaHash:Q,combine:x.combine,mapUv:Ge&&v(x.map.channel),aoMapUv:tt&&v(x.aoMap.channel),lightMapUv:Ue&&v(x.lightMap.channel),bumpMapUv:Fe&&v(x.bumpMap.channel),normalMapUv:be&&v(x.normalMap.channel),displacementMapUv:bt&&v(x.displacementMap.channel),emissiveMapUv:Me&&v(x.emissiveMap.channel),metalnessMapUv:ze&&v(x.metalnessMap.channel),roughnessMapUv:Bt&&v(x.roughnessMap.channel),anisotropyMapUv:$&&v(x.anisotropyMap.channel),clearcoatMapUv:Ie&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:le&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:re&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:me&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:ke&&v(x.sheenRoughnessMap.channel),specularMapUv:Ce&&v(x.specularMap.channel),specularColorMapUv:fe&&v(x.specularColorMap.channel),specularIntensityMapUv:Ye&&v(x.specularIntensityMap.channel),transmissionMapUv:F&&v(x.transmissionMap.channel),thicknessMapUv:ae&&v(x.thicknessMap.channel),alphaMapUv:xe&&v(x.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(be||Tt),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!V.attributes.uv&&(Ge||xe),fog:!!W,useFog:x.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:x.flatShading===!0&&x.wireframe===!1,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:he,skinning:k.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:Te,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:Xe,decodeVideoTexture:Ge&&x.map.isVideoTexture===!0&&et.getTransfer(x.map.colorSpace)===rt,decodeVideoTextureEmissive:Me&&x.emissiveMap.isVideoTexture===!0&&et.getTransfer(x.emissiveMap.colorSpace)===rt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===wn,flipSided:x.side===gn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:we&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(we&&x.extensions.multiDraw===!0||ve)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Mt.vertexUv1s=l.has(1),Mt.vertexUv2s=l.has(2),Mt.vertexUv3s=l.has(3),l.clear(),Mt}function f(x){let y=[];if(x.shaderID?y.push(x.shaderID):(y.push(x.customVertexShaderID),y.push(x.customFragmentShaderID)),x.defines!==void 0)for(let L in x.defines)y.push(L),y.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(b(y,x),S(y,x),y.push(n.outputColorSpace)),y.push(x.customProgramCacheKey),y.join()}function b(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapCubeUVHeight),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.morphAttributeCount),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.numLightProbes),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)}function S(x,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),y.gradientMap&&o.enable(22),x.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),x.push(o.mask)}function _(x){let y=g[x.type],L;if(y){let U=li[y];L=ti.clone(U.uniforms)}else L=x.uniforms;return L}function M(x,y){let L;for(let U=0,k=h.length;U<k;U++){let W=h[U];if(W.cacheKey===y){L=W,++L.usedTimes;break}}return L===void 0&&(L=new Sy(n,y,x,r),h.push(L)),L}function E(x){if(--x.usedTimes===0){let y=h.indexOf(x);h[y]=h[h.length-1],h.pop(),x.destroy()}}function A(x){c.remove(x)}function R(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:_,acquireProgram:M,releaseProgram:E,releaseShaderCache:A,programs:h,dispose:R}}function Ey(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,c){n.get(a)[o]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Ay(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function hp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function up(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(u,d,p,g,v,m){let f=n[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},n[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=v,f.group=m),e++,f}function o(u,d,p,g,v,m){let f=a(u,d,p,g,v,m);p.transmission>0?i.push(f):p.transparent===!0?s.push(f):t.push(f)}function c(u,d,p,g,v,m){let f=a(u,d,p,g,v,m);p.transmission>0?i.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function l(u,d){t.length>1&&t.sort(u||Ay),i.length>1&&i.sort(d||hp),s.length>1&&s.sort(d||hp)}function h(){for(let u=e,d=n.length;u<d;u++){let p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function Cy(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new up,n.set(i,[a])):s>=r.length?(a=new up,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Ry(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new De};break;case"SpotLight":t={position:new P,direction:new P,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new De,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new De,groundColor:new De};break;case"RectAreaLight":t={color:new De,position:new P,halfWidth:new P,halfHeight:new P};break}return n[e.id]=t,t}}}function Iy(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Py=0;function Dy(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Ly(n){let e=new Ry,t=Iy(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new P);let s=new P,r=new at,a=new at;function o(l){let h=0,u=0,d=0;for(let x=0;x<9;x++)i.probe[x].set(0,0,0);let p=0,g=0,v=0,m=0,f=0,b=0,S=0,_=0,M=0,E=0,A=0;l.sort(Dy);for(let x=0,y=l.length;x<y;x++){let L=l[x],U=L.color,k=L.intensity,W=L.distance,V=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=U.r*k,u+=U.g*k,d+=U.b*k;else if(L.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(L.sh.coefficients[G],k);A++}else if(L.isDirectionalLight){let G=e.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let j=L.shadow,H=t.get(L);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,i.directionalShadow[p]=H,i.directionalShadowMap[p]=V,i.directionalShadowMatrix[p]=L.shadow.matrix,b++}i.directional[p]=G,p++}else if(L.isSpotLight){let G=e.get(L);G.position.setFromMatrixPosition(L.matrixWorld),G.color.copy(U).multiplyScalar(k),G.distance=W,G.coneCos=Math.cos(L.angle),G.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),G.decay=L.decay,i.spot[v]=G;let j=L.shadow;if(L.map&&(i.spotLightMap[M]=L.map,M++,j.updateMatrices(L),L.castShadow&&E++),i.spotLightMatrix[v]=j.matrix,L.castShadow){let H=t.get(L);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,i.spotShadow[v]=H,i.spotShadowMap[v]=V,_++}v++}else if(L.isRectAreaLight){let G=e.get(L);G.color.copy(U).multiplyScalar(k),G.halfWidth.set(L.width*.5,0,0),G.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=G,m++}else if(L.isPointLight){let G=e.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),G.distance=L.distance,G.decay=L.decay,L.castShadow){let j=L.shadow,H=t.get(L);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,H.shadowCameraNear=j.camera.near,H.shadowCameraFar=j.camera.far,i.pointShadow[g]=H,i.pointShadowMap[g]=V,i.pointShadowMatrix[g]=L.shadow.matrix,S++}i.point[g]=G,g++}else if(L.isHemisphereLight){let G=e.get(L);G.skyColor.copy(L.color).multiplyScalar(k),G.groundColor.copy(L.groundColor).multiplyScalar(k),i.hemi[f]=G,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let R=i.hash;(R.directionalLength!==p||R.pointLength!==g||R.spotLength!==v||R.rectAreaLength!==m||R.hemiLength!==f||R.numDirectionalShadows!==b||R.numPointShadows!==S||R.numSpotShadows!==_||R.numSpotMaps!==M||R.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=_+M-E,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=A,R.directionalLength=p,R.pointLength=g,R.spotLength=v,R.rectAreaLength=m,R.hemiLength=f,R.numDirectionalShadows=b,R.numPointShadows=S,R.numSpotShadows=_,R.numSpotMaps=M,R.numLightProbes=A,i.version=Py++)}function c(l,h){let u=0,d=0,p=0,g=0,v=0,m=h.matrixWorldInverse;for(let f=0,b=l.length;f<b;f++){let S=l[f];if(S.isDirectionalLight){let _=i.directional[u];_.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),u++}else if(S.isSpotLight){let _=i.spot[p];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),p++}else if(S.isRectAreaLight){let _=i.rectArea[g];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(m),a.identity(),r.copy(S.matrixWorld),r.premultiply(m),a.extractRotation(r),_.halfWidth.set(S.width*.5,0,0),_.halfHeight.set(0,S.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){let _=i.point[d];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){let _=i.hemi[v];_.direction.setFromMatrixPosition(S.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:o,setupView:c,state:i}}function dp(n){let e=new Ly(n),t=[],i=[];function s(h){l.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function a(h){i.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function Uy(n){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new dp(n),e.set(s,[o])):r>=a.length?(o=new dp(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var Ny=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Oy(n,e,t){let i=new yr,s=new oe,r=new oe,a=new dt,o=new Sr({depthPacking:Mc}),c=new fl,l={},h=t.maxTextureSize,u={[Ai]:gn,[gn]:Ai,[wn]:wn},d=new Ot({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:Ny,fragmentShader:Fy}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new Vt;g.setAttribute("position",new bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new ft(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xh;let f=this.type;this.render=function(E,A,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;let x=n.getRenderTarget(),y=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),U=n.state;U.setBlending(Ln),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let k=f!==ai&&this.type===ai,W=f===ai&&this.type!==ai;for(let V=0,G=E.length;V<G;V++){let j=E[V],H=j.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let K=H.getFrameExtents();if(s.multiply(K),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/K.x),s.x=r.x*K.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/K.y),s.y=r.y*K.y,H.mapSize.y=r.y)),H.map===null||k===!0||W===!0){let ce=this.type!==ai?{minFilter:fn,magFilter:fn}:{};H.map!==null&&H.map.dispose(),H.map=new jt(s.x,s.y,ce),H.map.texture.name=j.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();let ne=H.getViewportCount();for(let ce=0;ce<ne;ce++){let Te=H.getViewport(ce);a.set(r.x*Te.x,r.y*Te.y,r.x*Te.z,r.y*Te.w),U.viewport(a),H.updateMatrices(j,ce),i=H.getFrustum(),_(A,R,H.camera,j,this.type)}H.isPointLightShadow!==!0&&this.type===ai&&b(H,R),H.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(x,y,L)};function b(E,A){let R=e.update(v);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new jt(s.x,s.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(A,null,R,d,v,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(A,null,R,p,v,null)}function S(E,A,R,x){let y=null,L=R.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)y=L;else if(y=R.isPointLight===!0?c:o,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let U=y.uuid,k=A.uuid,W=l[U];W===void 0&&(W={},l[U]=W);let V=W[k];V===void 0&&(V=y.clone(),W[k]=V,A.addEventListener("dispose",M)),y=V}if(y.visible=A.visible,y.wireframe=A.wireframe,x===ai?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:u[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,R.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let U=n.properties.get(y);U.light=R}return y}function _(E,A,R,x,y){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&y===ai)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,E.matrixWorld);let k=e.update(E),W=E.material;if(Array.isArray(W)){let V=k.groups;for(let G=0,j=V.length;G<j;G++){let H=V[G],K=W[H.materialIndex];if(K&&K.visible){let ne=S(E,K,x,y);E.onBeforeShadow(n,E,A,R,k,ne,H),n.renderBufferDirect(R,null,k,ne,E,H),E.onAfterShadow(n,E,A,R,k,ne,H)}}}else if(W.visible){let V=S(E,W,x,y);E.onBeforeShadow(n,E,A,R,k,V,null),n.renderBufferDirect(R,null,k,V,E,null),E.onAfterShadow(n,E,A,R,k,V,null)}}let U=E.children;for(let k=0,W=U.length;k<W;k++)_(U[k],A,R,x,y)}function M(E){E.target.removeEventListener("dispose",M);for(let R in l){let x=l[R],y=E.target.uuid;y in x&&(x[y].dispose(),delete x[y])}}}var ky={[El]:Al,[Cl]:Pl,[Rl]:Dl,[gs]:Il,[Al]:El,[Pl]:Cl,[Dl]:Rl,[Il]:gs};function By(n,e){function t(){let F=!1,ae=new dt,ue=null,xe=new dt(0,0,0,0);return{setMask:function(ie){ue!==ie&&!F&&(n.colorMask(ie,ie,ie,ie),ue=ie)},setLocked:function(ie){F=ie},setClear:function(ie,Q,we,Xe,Mt){Mt===!0&&(ie*=Xe,Q*=Xe,we*=Xe),ae.set(ie,Q,we,Xe),xe.equals(ae)===!1&&(n.clearColor(ie,Q,we,Xe),xe.copy(ae))},reset:function(){F=!1,ue=null,xe.set(-1,0,0,0)}}}function i(){let F=!1,ae=!1,ue=null,xe=null,ie=null;return{setReversed:function(Q){if(ae!==Q){let we=e.get("EXT_clip_control");Q?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),ae=Q;let Xe=ie;ie=null,this.setClear(Xe)}},getReversed:function(){return ae},setTest:function(Q){Q?J(n.DEPTH_TEST):he(n.DEPTH_TEST)},setMask:function(Q){ue!==Q&&!F&&(n.depthMask(Q),ue=Q)},setFunc:function(Q){if(ae&&(Q=ky[Q]),xe!==Q){switch(Q){case El:n.depthFunc(n.NEVER);break;case Al:n.depthFunc(n.ALWAYS);break;case Cl:n.depthFunc(n.LESS);break;case gs:n.depthFunc(n.LEQUAL);break;case Rl:n.depthFunc(n.EQUAL);break;case Il:n.depthFunc(n.GEQUAL);break;case Pl:n.depthFunc(n.GREATER);break;case Dl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}xe=Q}},setLocked:function(Q){F=Q},setClear:function(Q){ie!==Q&&(ae&&(Q=1-Q),n.clearDepth(Q),ie=Q)},reset:function(){F=!1,ue=null,xe=null,ie=null,ae=!1}}}function s(){let F=!1,ae=null,ue=null,xe=null,ie=null,Q=null,we=null,Xe=null,Mt=null;return{setTest:function(ct){F||(ct?J(n.STENCIL_TEST):he(n.STENCIL_TEST))},setMask:function(ct){ae!==ct&&!F&&(n.stencilMask(ct),ae=ct)},setFunc:function(ct,_i,ni){(ue!==ct||xe!==_i||ie!==ni)&&(n.stencilFunc(ct,_i,ni),ue=ct,xe=_i,ie=ni)},setOp:function(ct,_i,ni){(Q!==ct||we!==_i||Xe!==ni)&&(n.stencilOp(ct,_i,ni),Q=ct,we=_i,Xe=ni)},setLocked:function(ct){F=ct},setClear:function(ct){Mt!==ct&&(n.clearStencil(ct),Mt=ct)},reset:function(){F=!1,ae=null,ue=null,xe=null,ie=null,Q=null,we=null,Xe=null,Mt=null}}}let r=new t,a=new i,o=new s,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,p=[],g=null,v=!1,m=null,f=null,b=null,S=null,_=null,M=null,E=null,A=new De(0,0,0),R=0,x=!1,y=null,L=null,U=null,k=null,W=null,V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,j=0,H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(H)[1]),G=j>=1):H.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),G=j>=2);let K=null,ne={},ce=n.getParameter(n.SCISSOR_BOX),Te=n.getParameter(n.VIEWPORT),qe=new dt().fromArray(ce),He=new dt().fromArray(Te);function Re(F,ae,ue,xe){let ie=new Uint8Array(4),Q=n.createTexture();n.bindTexture(F,Q),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let we=0;we<ue;we++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(ae,0,n.RGBA,1,1,xe,0,n.RGBA,n.UNSIGNED_BYTE,ie):n.texImage2D(ae+we,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ie);return Q}let Y={};Y[n.TEXTURE_2D]=Re(n.TEXTURE_2D,n.TEXTURE_2D,1),Y[n.TEXTURE_CUBE_MAP]=Re(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[n.TEXTURE_2D_ARRAY]=Re(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Y[n.TEXTURE_3D]=Re(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),J(n.DEPTH_TEST),a.setFunc(gs),Fe(!1),be(Wh),J(n.CULL_FACE),tt(Ln);function J(F){h[F]!==!0&&(n.enable(F),h[F]=!0)}function he(F){h[F]!==!1&&(n.disable(F),h[F]=!1)}function ye(F,ae){return u[F]!==ae?(n.bindFramebuffer(F,ae),u[F]=ae,F===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ae),F===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ae),!0):!1}function ve(F,ae){let ue=p,xe=!1;if(F){ue=d.get(ae),ue===void 0&&(ue=[],d.set(ae,ue));let ie=F.textures;if(ue.length!==ie.length||ue[0]!==n.COLOR_ATTACHMENT0){for(let Q=0,we=ie.length;Q<we;Q++)ue[Q]=n.COLOR_ATTACHMENT0+Q;ue.length=ie.length,xe=!0}}else ue[0]!==n.BACK&&(ue[0]=n.BACK,xe=!0);xe&&n.drawBuffers(ue)}function Ge(F){return g!==F?(n.useProgram(F),g=F,!0):!1}let Rt={[Wi]:n.FUNC_ADD,[hf]:n.FUNC_SUBTRACT,[uf]:n.FUNC_REVERSE_SUBTRACT};Rt[df]=n.MIN,Rt[ff]=n.MAX;let D={[pf]:n.ZERO,[mf]:n.ONE,[gf]:n.SRC_COLOR,[$o]:n.SRC_ALPHA,[Mf]:n.SRC_ALPHA_SATURATE,[yf]:n.DST_COLOR,[_f]:n.DST_ALPHA,[vf]:n.ONE_MINUS_SRC_COLOR,[Zo]:n.ONE_MINUS_SRC_ALPHA,[bf]:n.ONE_MINUS_DST_COLOR,[xf]:n.ONE_MINUS_DST_ALPHA,[Sf]:n.CONSTANT_COLOR,[wf]:n.ONE_MINUS_CONSTANT_COLOR,[Tf]:n.CONSTANT_ALPHA,[Ef]:n.ONE_MINUS_CONSTANT_ALPHA};function tt(F,ae,ue,xe,ie,Q,we,Xe,Mt,ct){if(F===Ln){v===!0&&(he(n.BLEND),v=!1);return}if(v===!1&&(J(n.BLEND),v=!0),F!==cf){if(F!==m||ct!==x){if((f!==Wi||_!==Wi)&&(n.blendEquation(n.FUNC_ADD),f=Wi,_=Wi),ct)switch(F){case ms:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Es:n.blendFunc(n.ONE,n.ONE);break;case qh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Yh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case ms:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Es:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case qh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Yh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}b=null,S=null,M=null,E=null,A.set(0,0,0),R=0,m=F,x=ct}return}ie=ie||ae,Q=Q||ue,we=we||xe,(ae!==f||ie!==_)&&(n.blendEquationSeparate(Rt[ae],Rt[ie]),f=ae,_=ie),(ue!==b||xe!==S||Q!==M||we!==E)&&(n.blendFuncSeparate(D[ue],D[xe],D[Q],D[we]),b=ue,S=xe,M=Q,E=we),(Xe.equals(A)===!1||Mt!==R)&&(n.blendColor(Xe.r,Xe.g,Xe.b,Mt),A.copy(Xe),R=Mt),m=F,x=!1}function Ue(F,ae){F.side===wn?he(n.CULL_FACE):J(n.CULL_FACE);let ue=F.side===gn;ae&&(ue=!ue),Fe(ue),F.blending===ms&&F.transparent===!1?tt(Ln):tt(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);let xe=F.stencilWrite;o.setTest(xe),xe&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Me(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?J(n.SAMPLE_ALPHA_TO_COVERAGE):he(n.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(F){y!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),y=F)}function be(F){F!==of?(J(n.CULL_FACE),F!==L&&(F===Wh?n.cullFace(n.BACK):F===lf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):he(n.CULL_FACE),L=F}function bt(F){F!==U&&(G&&n.lineWidth(F),U=F)}function Me(F,ae,ue){F?(J(n.POLYGON_OFFSET_FILL),(k!==ae||W!==ue)&&(n.polygonOffset(ae,ue),k=ae,W=ue)):he(n.POLYGON_OFFSET_FILL)}function ze(F){F?J(n.SCISSOR_TEST):he(n.SCISSOR_TEST)}function Bt(F){F===void 0&&(F=n.TEXTURE0+V-1),K!==F&&(n.activeTexture(F),K=F)}function Tt(F,ae,ue){ue===void 0&&(K===null?ue=n.TEXTURE0+V-1:ue=K);let xe=ne[ue];xe===void 0&&(xe={type:void 0,texture:void 0},ne[ue]=xe),(xe.type!==F||xe.texture!==ae)&&(K!==ue&&(n.activeTexture(ue),K=ue),n.bindTexture(F,ae||Y[F]),xe.type=F,xe.texture=ae)}function C(){let F=ne[K];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function w(){try{n.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function z(){try{n.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Z(){try{n.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function te(){try{n.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function $(){try{n.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ie(){try{n.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function le(){try{n.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ee(){try{n.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ae(){try{n.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function re(){try{n.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function me(F){qe.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),qe.copy(F))}function ke(F){He.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),He.copy(F))}function Ce(F,ae){let ue=l.get(ae);ue===void 0&&(ue=new WeakMap,l.set(ae,ue));let xe=ue.get(F);xe===void 0&&(xe=n.getUniformBlockIndex(ae,F.name),ue.set(F,xe))}function fe(F,ae){let xe=l.get(ae).get(F);c.get(ae)!==xe&&(n.uniformBlockBinding(ae,xe,F.__bindingPointIndex),c.set(ae,xe))}function Ye(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},K=null,ne={},u={},d=new WeakMap,p=[],g=null,v=!1,m=null,f=null,b=null,S=null,_=null,M=null,E=null,A=new De(0,0,0),R=0,x=!1,y=null,L=null,U=null,k=null,W=null,qe.set(0,0,n.canvas.width,n.canvas.height),He.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:J,disable:he,bindFramebuffer:ye,drawBuffers:ve,useProgram:Ge,setBlending:tt,setMaterial:Ue,setFlipSided:Fe,setCullFace:be,setLineWidth:bt,setPolygonOffset:Me,setScissorTest:ze,activeTexture:Bt,bindTexture:Tt,unbindTexture:C,compressedTexImage2D:w,compressedTexImage3D:z,texImage2D:Ae,texImage3D:re,updateUBOMapping:Ce,uniformBlockBinding:fe,texStorage2D:le,texStorage3D:Ee,texSubImage2D:Z,texSubImage3D:te,compressedTexSubImage2D:$,compressedTexSubImage3D:Ie,scissor:me,viewport:ke,reset:Ye}}function zy(n,e,t,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new oe,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,w){return p?new OffscreenCanvas(C,w):va("canvas")}function v(C,w,z){let Z=1,te=Tt(C);if((te.width>z||te.height>z)&&(Z=z/Math.max(te.width,te.height)),Z<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let $=Math.floor(Z*te.width),Ie=Math.floor(Z*te.height);u===void 0&&(u=g($,Ie));let le=w?g($,Ie):u;return le.width=$,le.height=Ie,le.getContext("2d").drawImage(C,0,0,$,Ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+$+"x"+Ie+")."),le}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),C;return C}function m(C){return C.generateMipmaps}function f(C){n.generateMipmap(C)}function b(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(C,w,z,Z,te=!1){if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let $=w;if(w===n.RED&&(z===n.FLOAT&&($=n.R32F),z===n.HALF_FLOAT&&($=n.R16F),z===n.UNSIGNED_BYTE&&($=n.R8)),w===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&($=n.R8UI),z===n.UNSIGNED_SHORT&&($=n.R16UI),z===n.UNSIGNED_INT&&($=n.R32UI),z===n.BYTE&&($=n.R8I),z===n.SHORT&&($=n.R16I),z===n.INT&&($=n.R32I)),w===n.RG&&(z===n.FLOAT&&($=n.RG32F),z===n.HALF_FLOAT&&($=n.RG16F),z===n.UNSIGNED_BYTE&&($=n.RG8)),w===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&($=n.RG8UI),z===n.UNSIGNED_SHORT&&($=n.RG16UI),z===n.UNSIGNED_INT&&($=n.RG32UI),z===n.BYTE&&($=n.RG8I),z===n.SHORT&&($=n.RG16I),z===n.INT&&($=n.RG32I)),w===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&($=n.RGB8UI),z===n.UNSIGNED_SHORT&&($=n.RGB16UI),z===n.UNSIGNED_INT&&($=n.RGB32UI),z===n.BYTE&&($=n.RGB8I),z===n.SHORT&&($=n.RGB16I),z===n.INT&&($=n.RGB32I)),w===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&($=n.RGBA8UI),z===n.UNSIGNED_SHORT&&($=n.RGBA16UI),z===n.UNSIGNED_INT&&($=n.RGBA32UI),z===n.BYTE&&($=n.RGBA8I),z===n.SHORT&&($=n.RGBA16I),z===n.INT&&($=n.RGBA32I)),w===n.RGB&&(z===n.UNSIGNED_INT_5_9_9_9_REV&&($=n.RGB9_E5),z===n.UNSIGNED_INT_10F_11F_11F_REV&&($=n.R11F_G11F_B10F)),w===n.RGBA){let Ie=te?ma:et.getTransfer(Z);z===n.FLOAT&&($=n.RGBA32F),z===n.HALF_FLOAT&&($=n.RGBA16F),z===n.UNSIGNED_BYTE&&($=Ie===rt?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function _(C,w){let z;return C?w===null||w===ts||w===Rr?z=n.DEPTH24_STENCIL8:w===oi?z=n.DEPTH32F_STENCIL8:w===Cr&&(z=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===ts||w===Rr?z=n.DEPTH_COMPONENT24:w===oi?z=n.DEPTH_COMPONENT32F:w===Cr&&(z=n.DEPTH_COMPONENT16),z}function M(C,w){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==fn&&C.minFilter!==Qn?Math.log2(Math.max(w.width,w.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?w.mipmaps.length:1}function E(C){let w=C.target;w.removeEventListener("dispose",E),R(w),w.isVideoTexture&&h.delete(w)}function A(C){let w=C.target;w.removeEventListener("dispose",A),y(w)}function R(C){let w=i.get(C);if(w.__webglInit===void 0)return;let z=C.source,Z=d.get(z);if(Z){let te=Z[w.__cacheKey];te.usedTimes--,te.usedTimes===0&&x(C),Object.keys(Z).length===0&&d.delete(z)}i.remove(C)}function x(C){let w=i.get(C);n.deleteTexture(w.__webglTexture);let z=C.source,Z=d.get(z);delete Z[w.__cacheKey],a.memory.textures--}function y(C){let w=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(w.__webglFramebuffer[Z]))for(let te=0;te<w.__webglFramebuffer[Z].length;te++)n.deleteFramebuffer(w.__webglFramebuffer[Z][te]);else n.deleteFramebuffer(w.__webglFramebuffer[Z]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[Z])}else{if(Array.isArray(w.__webglFramebuffer))for(let Z=0;Z<w.__webglFramebuffer.length;Z++)n.deleteFramebuffer(w.__webglFramebuffer[Z]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let Z=0;Z<w.__webglColorRenderbuffer.length;Z++)w.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[Z]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let z=C.textures;for(let Z=0,te=z.length;Z<te;Z++){let $=i.get(z[Z]);$.__webglTexture&&(n.deleteTexture($.__webglTexture),a.memory.textures--),i.remove(z[Z])}i.remove(C)}let L=0;function U(){L=0}function k(){let C=L;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),L+=1,C}function W(C){let w=[];return w.push(C.wrapS),w.push(C.wrapT),w.push(C.wrapR||0),w.push(C.magFilter),w.push(C.minFilter),w.push(C.anisotropy),w.push(C.internalFormat),w.push(C.format),w.push(C.type),w.push(C.generateMipmaps),w.push(C.premultiplyAlpha),w.push(C.flipY),w.push(C.unpackAlignment),w.push(C.colorSpace),w.join()}function V(C,w){let z=i.get(C);if(C.isVideoTexture&&ze(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&z.__version!==C.version){let Z=C.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(z,C,w);return}}else C.isExternalTexture&&(z.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+w)}function G(C,w){let z=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){Y(z,C,w);return}t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+w)}function j(C,w){let z=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){Y(z,C,w);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+w)}function H(C,w){let z=i.get(C);if(C.version>0&&z.__version!==C.version){J(z,C,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+w)}let K={[jo]:n.REPEAT,[Gi]:n.CLAMP_TO_EDGE,[Ko]:n.MIRRORED_REPEAT},ne={[fn]:n.NEAREST,[Rf]:n.NEAREST_MIPMAP_NEAREST,[Va]:n.NEAREST_MIPMAP_LINEAR,[Qn]:n.LINEAR,[Vl]:n.LINEAR_MIPMAP_NEAREST,[es]:n.LINEAR_MIPMAP_LINEAR},ce={[Df]:n.NEVER,[kf]:n.ALWAYS,[Lf]:n.LESS,[ru]:n.LEQUAL,[Uf]:n.EQUAL,[Of]:n.GEQUAL,[Nf]:n.GREATER,[Ff]:n.NOTEQUAL};function Te(C,w){if(w.type===oi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Qn||w.magFilter===Vl||w.magFilter===Va||w.magFilter===es||w.minFilter===Qn||w.minFilter===Vl||w.minFilter===Va||w.minFilter===es)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,K[w.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,K[w.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,K[w.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,ne[w.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,ne[w.minFilter]),w.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,ce[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===fn||w.minFilter!==Va&&w.minFilter!==es||w.type===oi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function qe(C,w){let z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,w.addEventListener("dispose",E));let Z=w.source,te=d.get(Z);te===void 0&&(te={},d.set(Z,te));let $=W(w);if($!==C.__cacheKey){te[$]===void 0&&(te[$]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,z=!0),te[$].usedTimes++;let Ie=te[C.__cacheKey];Ie!==void 0&&(te[C.__cacheKey].usedTimes--,Ie.usedTimes===0&&x(w)),C.__cacheKey=$,C.__webglTexture=te[$].texture}return z}function He(C,w,z){return Math.floor(Math.floor(C/z)/w)}function Re(C,w,z,Z){let $=C.updateRanges;if($.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,w.width,w.height,z,Z,w.data);else{$.sort((re,me)=>re.start-me.start);let Ie=0;for(let re=1;re<$.length;re++){let me=$[Ie],ke=$[re],Ce=me.start+me.count,fe=He(ke.start,w.width,4),Ye=He(me.start,w.width,4);ke.start<=Ce+1&&fe===Ye&&He(ke.start+ke.count-1,w.width,4)===fe?me.count=Math.max(me.count,ke.start+ke.count-me.start):(++Ie,$[Ie]=ke)}$.length=Ie+1;let le=n.getParameter(n.UNPACK_ROW_LENGTH),Ee=n.getParameter(n.UNPACK_SKIP_PIXELS),Ae=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,w.width);for(let re=0,me=$.length;re<me;re++){let ke=$[re],Ce=Math.floor(ke.start/4),fe=Math.ceil(ke.count/4),Ye=Ce%w.width,F=Math.floor(Ce/w.width),ae=fe,ue=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ye),n.pixelStorei(n.UNPACK_SKIP_ROWS,F),t.texSubImage2D(n.TEXTURE_2D,0,Ye,F,ae,ue,z,Z,w.data)}C.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,le),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ee),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ae)}}function Y(C,w,z){let Z=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Z=n.TEXTURE_3D);let te=qe(C,w),$=w.source;t.bindTexture(Z,C.__webglTexture,n.TEXTURE0+z);let Ie=i.get($);if($.version!==Ie.__version||te===!0){t.activeTexture(n.TEXTURE0+z);let le=et.getPrimaries(et.workingColorSpace),Ee=w.colorSpace===Pi?null:et.getPrimaries(w.colorSpace),Ae=w.colorSpace===Pi||le===Ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let re=v(w.image,!1,s.maxTextureSize);re=Bt(w,re);let me=r.convert(w.format,w.colorSpace),ke=r.convert(w.type),Ce=S(w.internalFormat,me,ke,w.colorSpace,w.isVideoTexture);Te(Z,w);let fe,Ye=w.mipmaps,F=w.isVideoTexture!==!0,ae=Ie.__version===void 0||te===!0,ue=$.dataReady,xe=M(w,re);if(w.isDepthTexture)Ce=_(w.format===Ir,w.type),ae&&(F?t.texStorage2D(n.TEXTURE_2D,1,Ce,re.width,re.height):t.texImage2D(n.TEXTURE_2D,0,Ce,re.width,re.height,0,me,ke,null));else if(w.isDataTexture)if(Ye.length>0){F&&ae&&t.texStorage2D(n.TEXTURE_2D,xe,Ce,Ye[0].width,Ye[0].height);for(let ie=0,Q=Ye.length;ie<Q;ie++)fe=Ye[ie],F?ue&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,fe.width,fe.height,me,ke,fe.data):t.texImage2D(n.TEXTURE_2D,ie,Ce,fe.width,fe.height,0,me,ke,fe.data);w.generateMipmaps=!1}else F?(ae&&t.texStorage2D(n.TEXTURE_2D,xe,Ce,re.width,re.height),ue&&Re(w,re,me,ke)):t.texImage2D(n.TEXTURE_2D,0,Ce,re.width,re.height,0,me,ke,re.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){F&&ae&&t.texStorage3D(n.TEXTURE_2D_ARRAY,xe,Ce,Ye[0].width,Ye[0].height,re.depth);for(let ie=0,Q=Ye.length;ie<Q;ie++)if(fe=Ye[ie],w.format!==Wn)if(me!==null)if(F){if(ue)if(w.layerUpdates.size>0){let we=pu(fe.width,fe.height,w.format,w.type);for(let Xe of w.layerUpdates){let Mt=fe.data.subarray(Xe*we/fe.data.BYTES_PER_ELEMENT,(Xe+1)*we/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,Xe,fe.width,fe.height,1,me,Mt)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,fe.width,fe.height,re.depth,me,fe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ie,Ce,fe.width,fe.height,re.depth,0,fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?ue&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,fe.width,fe.height,re.depth,me,ke,fe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ie,Ce,fe.width,fe.height,re.depth,0,me,ke,fe.data)}else{F&&ae&&t.texStorage2D(n.TEXTURE_2D,xe,Ce,Ye[0].width,Ye[0].height);for(let ie=0,Q=Ye.length;ie<Q;ie++)fe=Ye[ie],w.format!==Wn?me!==null?F?ue&&t.compressedTexSubImage2D(n.TEXTURE_2D,ie,0,0,fe.width,fe.height,me,fe.data):t.compressedTexImage2D(n.TEXTURE_2D,ie,Ce,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?ue&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,fe.width,fe.height,me,ke,fe.data):t.texImage2D(n.TEXTURE_2D,ie,Ce,fe.width,fe.height,0,me,ke,fe.data)}else if(w.isDataArrayTexture)if(F){if(ae&&t.texStorage3D(n.TEXTURE_2D_ARRAY,xe,Ce,re.width,re.height,re.depth),ue)if(w.layerUpdates.size>0){let ie=pu(re.width,re.height,w.format,w.type);for(let Q of w.layerUpdates){let we=re.data.subarray(Q*ie/re.data.BYTES_PER_ELEMENT,(Q+1)*ie/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Q,re.width,re.height,1,me,ke,we)}w.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,me,ke,re.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ce,re.width,re.height,re.depth,0,me,ke,re.data);else if(w.isData3DTexture)F?(ae&&t.texStorage3D(n.TEXTURE_3D,xe,Ce,re.width,re.height,re.depth),ue&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,me,ke,re.data)):t.texImage3D(n.TEXTURE_3D,0,Ce,re.width,re.height,re.depth,0,me,ke,re.data);else if(w.isFramebufferTexture){if(ae)if(F)t.texStorage2D(n.TEXTURE_2D,xe,Ce,re.width,re.height);else{let ie=re.width,Q=re.height;for(let we=0;we<xe;we++)t.texImage2D(n.TEXTURE_2D,we,Ce,ie,Q,0,me,ke,null),ie>>=1,Q>>=1}}else if(Ye.length>0){if(F&&ae){let ie=Tt(Ye[0]);t.texStorage2D(n.TEXTURE_2D,xe,Ce,ie.width,ie.height)}for(let ie=0,Q=Ye.length;ie<Q;ie++)fe=Ye[ie],F?ue&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,me,ke,fe):t.texImage2D(n.TEXTURE_2D,ie,Ce,me,ke,fe);w.generateMipmaps=!1}else if(F){if(ae){let ie=Tt(re);t.texStorage2D(n.TEXTURE_2D,xe,Ce,ie.width,ie.height)}ue&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,me,ke,re)}else t.texImage2D(n.TEXTURE_2D,0,Ce,me,ke,re);m(w)&&f(Z),Ie.__version=$.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function J(C,w,z){if(w.image.length!==6)return;let Z=qe(C,w),te=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+z);let $=i.get(te);if(te.version!==$.__version||Z===!0){t.activeTexture(n.TEXTURE0+z);let Ie=et.getPrimaries(et.workingColorSpace),le=w.colorSpace===Pi?null:et.getPrimaries(w.colorSpace),Ee=w.colorSpace===Pi||Ie===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let Ae=w.isCompressedTexture||w.image[0].isCompressedTexture,re=w.image[0]&&w.image[0].isDataTexture,me=[];for(let Q=0;Q<6;Q++)!Ae&&!re?me[Q]=v(w.image[Q],!0,s.maxCubemapSize):me[Q]=re?w.image[Q].image:w.image[Q],me[Q]=Bt(w,me[Q]);let ke=me[0],Ce=r.convert(w.format,w.colorSpace),fe=r.convert(w.type),Ye=S(w.internalFormat,Ce,fe,w.colorSpace),F=w.isVideoTexture!==!0,ae=$.__version===void 0||Z===!0,ue=te.dataReady,xe=M(w,ke);Te(n.TEXTURE_CUBE_MAP,w);let ie;if(Ae){F&&ae&&t.texStorage2D(n.TEXTURE_CUBE_MAP,xe,Ye,ke.width,ke.height);for(let Q=0;Q<6;Q++){ie=me[Q].mipmaps;for(let we=0;we<ie.length;we++){let Xe=ie[we];w.format!==Wn?Ce!==null?F?ue&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,we,0,0,Xe.width,Xe.height,Ce,Xe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,we,Ye,Xe.width,Xe.height,0,Xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,we,0,0,Xe.width,Xe.height,Ce,fe,Xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,we,Ye,Xe.width,Xe.height,0,Ce,fe,Xe.data)}}}else{if(ie=w.mipmaps,F&&ae){ie.length>0&&xe++;let Q=Tt(me[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,xe,Ye,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(re){F?ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,me[Q].width,me[Q].height,Ce,fe,me[Q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ye,me[Q].width,me[Q].height,0,Ce,fe,me[Q].data);for(let we=0;we<ie.length;we++){let Mt=ie[we].image[Q].image;F?ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,we+1,0,0,Mt.width,Mt.height,Ce,fe,Mt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,we+1,Ye,Mt.width,Mt.height,0,Ce,fe,Mt.data)}}else{F?ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ce,fe,me[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ye,Ce,fe,me[Q]);for(let we=0;we<ie.length;we++){let Xe=ie[we];F?ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,we+1,0,0,Ce,fe,Xe.image[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,we+1,Ye,Ce,fe,Xe.image[Q])}}}m(w)&&f(n.TEXTURE_CUBE_MAP),$.__version=te.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function he(C,w,z,Z,te,$){let Ie=r.convert(z.format,z.colorSpace),le=r.convert(z.type),Ee=S(z.internalFormat,Ie,le,z.colorSpace),Ae=i.get(w),re=i.get(z);if(re.__renderTarget=w,!Ae.__hasExternalTextures){let me=Math.max(1,w.width>>$),ke=Math.max(1,w.height>>$);te===n.TEXTURE_3D||te===n.TEXTURE_2D_ARRAY?t.texImage3D(te,$,Ee,me,ke,w.depth,0,Ie,le,null):t.texImage2D(te,$,Ee,me,ke,0,Ie,le,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),Me(w)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,te,re.__webglTexture,0,bt(w)):(te===n.TEXTURE_2D||te>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,te,re.__webglTexture,$),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ye(C,w,z){if(n.bindRenderbuffer(n.RENDERBUFFER,C),w.depthBuffer){let Z=w.depthTexture,te=Z&&Z.isDepthTexture?Z.type:null,$=_(w.stencilBuffer,te),Ie=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=bt(w);Me(w)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,le,$,w.width,w.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,le,$,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,$,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ie,n.RENDERBUFFER,C)}else{let Z=w.textures;for(let te=0;te<Z.length;te++){let $=Z[te],Ie=r.convert($.format,$.colorSpace),le=r.convert($.type),Ee=S($.internalFormat,Ie,le,$.colorSpace),Ae=bt(w);z&&Me(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ae,Ee,w.width,w.height):Me(w)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ae,Ee,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,Ee,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ve(C,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Z=i.get(w.depthTexture);Z.__renderTarget=w,(!Z.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),V(w.depthTexture,0);let te=Z.__webglTexture,$=bt(w);if(w.depthTexture.format===pr)Me(w)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0);else if(w.depthTexture.format===Ir)Me(w)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Ge(C){let w=i.get(C),z=C.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==C.depthTexture){let Z=C.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),Z){let te=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,Z.removeEventListener("dispose",te)};Z.addEventListener("dispose",te),w.__depthDisposeCallback=te}w.__boundDepthTexture=Z}if(C.depthTexture&&!w.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");let Z=C.texture.mipmaps;Z&&Z.length>0?ve(w.__webglFramebuffer[0],C):ve(w.__webglFramebuffer,C)}else if(z){w.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[Z]),w.__webglDepthbuffer[Z]===void 0)w.__webglDepthbuffer[Z]=n.createRenderbuffer(),ye(w.__webglDepthbuffer[Z],C,!1);else{let te=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=w.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,$)}}else{let Z=C.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),ye(w.__webglDepthbuffer,C,!1);else{let te=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,$)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Rt(C,w,z){let Z=i.get(C);w!==void 0&&he(Z.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&Ge(C)}function D(C){let w=C.texture,z=i.get(C),Z=i.get(w);C.addEventListener("dispose",A);let te=C.textures,$=C.isWebGLCubeRenderTarget===!0,Ie=te.length>1;if(Ie||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=w.version,a.memory.textures++),$){z.__webglFramebuffer=[];for(let le=0;le<6;le++)if(w.mipmaps&&w.mipmaps.length>0){z.__webglFramebuffer[le]=[];for(let Ee=0;Ee<w.mipmaps.length;Ee++)z.__webglFramebuffer[le][Ee]=n.createFramebuffer()}else z.__webglFramebuffer[le]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){z.__webglFramebuffer=[];for(let le=0;le<w.mipmaps.length;le++)z.__webglFramebuffer[le]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(Ie)for(let le=0,Ee=te.length;le<Ee;le++){let Ae=i.get(te[le]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=n.createTexture(),a.memory.textures++)}if(C.samples>0&&Me(C)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let le=0;le<te.length;le++){let Ee=te[le];z.__webglColorRenderbuffer[le]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[le]);let Ae=r.convert(Ee.format,Ee.colorSpace),re=r.convert(Ee.type),me=S(Ee.internalFormat,Ae,re,Ee.colorSpace,C.isXRRenderTarget===!0),ke=bt(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,ke,me,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,z.__webglColorRenderbuffer[le])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),ye(z.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if($){t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),Te(n.TEXTURE_CUBE_MAP,w);for(let le=0;le<6;le++)if(w.mipmaps&&w.mipmaps.length>0)for(let Ee=0;Ee<w.mipmaps.length;Ee++)he(z.__webglFramebuffer[le][Ee],C,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ee);else he(z.__webglFramebuffer[le],C,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(w)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ie){for(let le=0,Ee=te.length;le<Ee;le++){let Ae=te[le],re=i.get(Ae),me=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(me=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(me,re.__webglTexture),Te(me,Ae),he(z.__webglFramebuffer,C,Ae,n.COLOR_ATTACHMENT0+le,me,0),m(Ae)&&f(me)}t.unbindTexture()}else{let le=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(le=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(le,Z.__webglTexture),Te(le,w),w.mipmaps&&w.mipmaps.length>0)for(let Ee=0;Ee<w.mipmaps.length;Ee++)he(z.__webglFramebuffer[Ee],C,w,n.COLOR_ATTACHMENT0,le,Ee);else he(z.__webglFramebuffer,C,w,n.COLOR_ATTACHMENT0,le,0);m(w)&&f(le),t.unbindTexture()}C.depthBuffer&&Ge(C)}function tt(C){let w=C.textures;for(let z=0,Z=w.length;z<Z;z++){let te=w[z];if(m(te)){let $=b(C),Ie=i.get(te).__webglTexture;t.bindTexture($,Ie),f($),t.unbindTexture()}}}let Ue=[],Fe=[];function be(C){if(C.samples>0){if(Me(C)===!1){let w=C.textures,z=C.width,Z=C.height,te=n.COLOR_BUFFER_BIT,$=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ie=i.get(C),le=w.length>1;if(le)for(let Ae=0;Ae<w.length;Ae++)t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer);let Ee=C.texture.mipmaps;Ee&&Ee.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let Ae=0;Ae<w.length;Ae++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(te|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(te|=n.STENCIL_BUFFER_BIT)),le){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ie.__webglColorRenderbuffer[Ae]);let re=i.get(w[Ae]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,re,0)}n.blitFramebuffer(0,0,z,Z,0,0,z,Z,te,n.NEAREST),c===!0&&(Ue.length=0,Fe.length=0,Ue.push(n.COLOR_ATTACHMENT0+Ae),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Ue.push($),Fe.push($),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Fe)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ue))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),le)for(let Ae=0;Ae<w.length;Ae++){t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,Ie.__webglColorRenderbuffer[Ae]);let re=i.get(w[Ae]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,re,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){let w=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function bt(C){return Math.min(s.maxSamples,C.samples)}function Me(C){let w=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ze(C){let w=a.render.frame;h.get(C)!==w&&(h.set(C,w),C.update())}function Bt(C,w){let z=C.colorSpace,Z=C.format,te=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||z!==vs&&z!==Pi&&(et.getTransfer(z)===rt?(Z!==Wn||te!==ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),w}function Tt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=U,this.setTexture2D=V,this.setTexture2DArray=G,this.setTexture3D=j,this.setTextureCube=H,this.rebindTextures=Rt,this.setupRenderTarget=D,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=he,this.useMultisampledRTT=Me}function Vy(n,e){function t(i,s=Pi){let r,a=et.getTransfer(s);if(i===ei)return n.UNSIGNED_BYTE;if(i===Gl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Wl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Jh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Qh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===jh)return n.BYTE;if(i===Kh)return n.SHORT;if(i===Cr)return n.UNSIGNED_SHORT;if(i===Hl)return n.INT;if(i===ts)return n.UNSIGNED_INT;if(i===oi)return n.FLOAT;if(i===Tn)return n.HALF_FLOAT;if(i===eu)return n.ALPHA;if(i===tu)return n.RGB;if(i===Wn)return n.RGBA;if(i===pr)return n.DEPTH_COMPONENT;if(i===Ir)return n.DEPTH_STENCIL;if(i===nu)return n.RED;if(i===Xl)return n.RED_INTEGER;if(i===iu)return n.RG;if(i===ql)return n.RG_INTEGER;if(i===Yl)return n.RGBA_INTEGER;if(i===Ha||i===Ga||i===Wa||i===Xa)if(a===rt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ha)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ga)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ha)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ga)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Wa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Xa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===$l||i===Zl||i===jl||i===Kl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===$l)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Zl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===jl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Kl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Jl||i===Ql||i===ec)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Jl||i===Ql)return a===rt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ec)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===tc||i===nc||i===ic||i===sc||i===rc||i===ac||i===oc||i===lc||i===cc||i===hc||i===uc||i===dc||i===fc||i===pc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===tc)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===nc)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ic)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===sc)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===rc)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ac)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===oc)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===lc)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===cc)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===hc)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===uc)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===dc)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===fc)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===pc)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===mc||i===gc||i===vc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===mc)return a===rt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===gc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===vc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===_c||i===xc||i===yc||i===bc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===_c)return r.COMPRESSED_RED_RGTC1_EXT;if(i===xc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===yc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===bc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Rr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var Hy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Gy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Au=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Ia(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Ot({vertexShader:Hy,fragmentShader:Gy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ft(new Gn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Cu=class extends ii{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,g=null,v=typeof XRWebGLBinding<"u",m=new Au,f={},b=t.getContextAttributes(),S=null,_=null,M=[],E=[],A=new oe,R=null,x=new nn;x.viewport=new dt;let y=new nn;y.viewport=new dt;let L=[x,y],U=new wl,k=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let J=M[Y];return J===void 0&&(J=new _r,M[Y]=J),J.getTargetRaySpace()},this.getControllerGrip=function(Y){let J=M[Y];return J===void 0&&(J=new _r,M[Y]=J),J.getGripSpace()},this.getHand=function(Y){let J=M[Y];return J===void 0&&(J=new _r,M[Y]=J),J.getHandSpace()};function V(Y){let J=E.indexOf(Y.inputSource);if(J===-1)return;let he=M[J];he!==void 0&&(he.update(Y.inputSource,Y.frame,l||a),he.dispatchEvent({type:Y.type,data:Y.inputSource}))}function G(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",j);for(let Y=0;Y<M.length;Y++){let J=E[Y];J!==null&&(E[Y]=null,M[Y].disconnect(J))}k=null,W=null,m.reset();for(let Y in f)delete f[Y];e.setRenderTarget(S),p=null,d=null,u=null,s=null,_=null,Re.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",G),s.addEventListener("inputsourceschange",j),b.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(A),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,ye=null,ve=null;b.depth&&(ve=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=b.stencil?Ir:pr,ye=b.stencil?Rr:ts);let Ge={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Ge),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new jt(d.textureWidth,d.textureHeight,{format:Wn,type:ei,depthTexture:new Ra(d.textureWidth,d.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let he={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,he),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new jt(p.framebufferWidth,p.framebufferHeight,{format:Wn,type:ei,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Re.setContext(s),Re.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function j(Y){for(let J=0;J<Y.removed.length;J++){let he=Y.removed[J],ye=E.indexOf(he);ye>=0&&(E[ye]=null,M[ye].disconnect(he))}for(let J=0;J<Y.added.length;J++){let he=Y.added[J],ye=E.indexOf(he);if(ye===-1){for(let Ge=0;Ge<M.length;Ge++)if(Ge>=E.length){E.push(he),ye=Ge;break}else if(E[Ge]===null){E[Ge]=he,ye=Ge;break}if(ye===-1)break}let ve=M[ye];ve&&ve.connect(he)}}let H=new P,K=new P;function ne(Y,J,he){H.setFromMatrixPosition(J.matrixWorld),K.setFromMatrixPosition(he.matrixWorld);let ye=H.distanceTo(K),ve=J.projectionMatrix.elements,Ge=he.projectionMatrix.elements,Rt=ve[14]/(ve[10]-1),D=ve[14]/(ve[10]+1),tt=(ve[9]+1)/ve[5],Ue=(ve[9]-1)/ve[5],Fe=(ve[8]-1)/ve[0],be=(Ge[8]+1)/Ge[0],bt=Rt*Fe,Me=Rt*be,ze=ye/(-Fe+be),Bt=ze*-Fe;if(J.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Bt),Y.translateZ(ze),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),ve[10]===-1)Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{let Tt=Rt+ze,C=D+ze,w=bt-Bt,z=Me+(ye-Bt),Z=tt*D/C*Tt,te=Ue*D/C*Tt;Y.projectionMatrix.makePerspective(w,z,Z,te,Tt,C),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ce(Y,J){J===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(J.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let J=Y.near,he=Y.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(he=m.depthFar)),U.near=y.near=x.near=J,U.far=y.far=x.far=he,(k!==U.near||W!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),k=U.near,W=U.far),U.layers.mask=Y.layers.mask|6,x.layers.mask=U.layers.mask&3,y.layers.mask=U.layers.mask&5;let ye=Y.parent,ve=U.cameras;ce(U,ye);for(let Ge=0;Ge<ve.length;Ge++)ce(ve[Ge],ye);ve.length===2?ne(U,x,y):U.projectionMatrix.copy(x.projectionMatrix),Te(Y,U,ye)};function Te(Y,J,he){he===null?Y.matrix.copy(J.matrixWorld):(Y.matrix.copy(he.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(J.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=mr*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(Y){c=Y,d!==null&&(d.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(Y){return f[Y]};let qe=null;function He(Y,J){if(h=J.getViewerPose(l||a),g=J,h!==null){let he=h.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let ye=!1;he.length!==U.cameras.length&&(U.cameras.length=0,ye=!0);for(let D=0;D<he.length;D++){let tt=he[D],Ue=null;if(p!==null)Ue=p.getViewport(tt);else{let be=u.getViewSubImage(d,tt);Ue=be.viewport,D===0&&(e.setRenderTargetTextures(_,be.colorTexture,be.depthStencilTexture),e.setRenderTarget(_))}let Fe=L[D];Fe===void 0&&(Fe=new nn,Fe.layers.enable(D),Fe.viewport=new dt,L[D]=Fe),Fe.matrix.fromArray(tt.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(tt.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),D===0&&(U.matrix.copy(Fe.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),ye===!0&&U.cameras.push(Fe)}let ve=s.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){u=i.getBinding();let D=u.getDepthInformation(he[0]);D&&D.isValid&&D.texture&&m.init(D,s.renderState)}if(ve&&ve.includes("camera-access")&&v){e.state.unbindTexture(),u=i.getBinding();for(let D=0;D<he.length;D++){let tt=he[D].camera;if(tt){let Ue=f[tt];Ue||(Ue=new Ia,f[tt]=Ue);let Fe=u.getCameraImage(tt);Ue.sourceTexture=Fe}}}}for(let he=0;he<M.length;he++){let ye=E[he],ve=M[he];ye!==null&&ve!==void 0&&ve.update(ye,J,l||a)}qe&&qe(Y,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),g=null}let Re=new fp;Re.setAnimationLoop(He),this.setAnimationLoop=function(Y){qe=Y},this.dispose=function(){}}},Ps=new Pn,Wy=new at;function Xy(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,hu(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,b,S,_){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,_)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),v(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?c(m,f,b,S):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===gn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===gn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let b=e.get(f),S=b.envMap,_=b.envMapRotation;S&&(m.envMap.value=S,Ps.copy(_),Ps.x*=-1,Ps.y*=-1,Ps.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Ps.y*=-1,Ps.z*=-1),m.envMapRotation.value.setFromMatrix4(Wy.makeRotationFromEuler(Ps)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,b,S){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*b,m.scale.value=S*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,b){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===gn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){let b=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function qy(n,e,t,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,S){let _=S.program;i.uniformBlockBinding(b,_)}function l(b,S){let _=s[b.id];_===void 0&&(g(b),_=h(b),s[b.id]=_,b.addEventListener("dispose",m));let M=S.program;i.updateUBOMapping(b,M);let E=e.render.frame;r[b.id]!==E&&(d(b),r[b.id]=E)}function h(b){let S=u();b.__bindingPointIndex=S;let _=n.createBuffer(),M=b.__size,E=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,M,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,_),_}function u(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){let S=s[b.id],_=b.uniforms,M=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let E=0,A=_.length;E<A;E++){let R=Array.isArray(_[E])?_[E]:[_[E]];for(let x=0,y=R.length;x<y;x++){let L=R[x];if(p(L,E,x,M)===!0){let U=L.__offset,k=Array.isArray(L.value)?L.value:[L.value],W=0;for(let V=0;V<k.length;V++){let G=k[V],j=v(G);typeof G=="number"||typeof G=="boolean"?(L.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,U+W,L.__data)):G.isMatrix3?(L.__data[0]=G.elements[0],L.__data[1]=G.elements[1],L.__data[2]=G.elements[2],L.__data[3]=0,L.__data[4]=G.elements[3],L.__data[5]=G.elements[4],L.__data[6]=G.elements[5],L.__data[7]=0,L.__data[8]=G.elements[6],L.__data[9]=G.elements[7],L.__data[10]=G.elements[8],L.__data[11]=0):(G.toArray(L.__data,W),W+=j.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(b,S,_,M){let E=b.value,A=S+"_"+_;if(M[A]===void 0)return typeof E=="number"||typeof E=="boolean"?M[A]=E:M[A]=E.clone(),!0;{let R=M[A];if(typeof E=="number"||typeof E=="boolean"){if(R!==E)return M[A]=E,!0}else if(R.equals(E)===!1)return R.copy(E),!0}return!1}function g(b){let S=b.uniforms,_=0,M=16;for(let A=0,R=S.length;A<R;A++){let x=Array.isArray(S[A])?S[A]:[S[A]];for(let y=0,L=x.length;y<L;y++){let U=x[y],k=Array.isArray(U.value)?U.value:[U.value];for(let W=0,V=k.length;W<V;W++){let G=k[W],j=v(G),H=_%M,K=H%j.boundary,ne=H+K;_+=K,ne!==0&&M-ne<j.storage&&(_+=M-ne),U.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=_,_+=j.storage}}}let E=_%M;return E>0&&(_+=M-E),b.__size=_,b.__cache={},this}function v(b){let S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),S}function m(b){let S=b.target;S.removeEventListener("dispose",m);let _=a.indexOf(S.__bindingPointIndex);a.splice(_,1),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function f(){for(let b in s)n.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:c,update:l,dispose:f}}var Ac=class{constructor(e={}){let{canvas:t=Bf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;let g=new Uint32Array(4),v=new Int32Array(4),m=null,f=null,b=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let _=this,M=!1;this._outputColorSpace=Zt;let E=0,A=0,R=null,x=-1,y=null,L=new dt,U=new dt,k=null,W=new De(0),V=0,G=t.width,j=t.height,H=1,K=null,ne=null,ce=new dt(0,0,G,j),Te=new dt(0,0,G,j),qe=!1,He=new yr,Re=!1,Y=!1,J=new at,he=new P,ye=new dt,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ge=!1;function Rt(){return R===null?H:1}let D=i;function tt(T,O){return t.getContext(T,O)}try{let T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",ue,!1),t.addEventListener("webglcontextrestored",xe,!1),t.addEventListener("webglcontextcreationerror",ie,!1),D===null){let O="webgl2";if(D=tt(O,T),D===null)throw tt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ue,Fe,be,bt,Me,ze,Bt,Tt,C,w,z,Z,te,$,Ie,le,Ee,Ae,re,me,ke,Ce,fe,Ye;function F(){Ue=new hx(D),Ue.init(),Ce=new Vy(D,Ue),Fe=new ix(D,Ue,e,Ce),be=new By(D,Ue),Fe.reversedDepthBuffer&&d&&be.buffers.depth.setReversed(!0),bt=new fx(D),Me=new Ey,ze=new zy(D,Ue,be,Me,Fe,Ce,bt),Bt=new rx(_),Tt=new cx(_),C=new x0(D),fe=new tx(D,C),w=new ux(D,C,bt,fe),z=new mx(D,w,C,bt),re=new px(D,Fe,ze),le=new sx(Me),Z=new Ty(_,Bt,Tt,Ue,Fe,fe,le),te=new Xy(_,Me),$=new Cy,Ie=new Uy(Ue),Ae=new ex(_,Bt,Tt,be,z,p,c),Ee=new Oy(_,z,Fe),Ye=new qy(D,bt,Fe,be),me=new nx(D,Ue,bt),ke=new dx(D,Ue,bt),bt.programs=Z.programs,_.capabilities=Fe,_.extensions=Ue,_.properties=Me,_.renderLists=$,_.shadowMap=Ee,_.state=be,_.info=bt}F();let ae=new Cu(_,D);this.xr=ae,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let T=Ue.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=Ue.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(T){T!==void 0&&(H=T,this.setSize(G,j,!1))},this.getSize=function(T){return T.set(G,j)},this.setSize=function(T,O,X=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=T,j=O,t.width=Math.floor(T*H),t.height=Math.floor(O*H),X===!0&&(t.style.width=T+"px",t.style.height=O+"px"),this.setViewport(0,0,T,O)},this.getDrawingBufferSize=function(T){return T.set(G*H,j*H).floor()},this.setDrawingBufferSize=function(T,O,X){G=T,j=O,H=X,t.width=Math.floor(T*X),t.height=Math.floor(O*X),this.setViewport(0,0,T,O)},this.getCurrentViewport=function(T){return T.copy(L)},this.getViewport=function(T){return T.copy(ce)},this.setViewport=function(T,O,X,q){T.isVector4?ce.set(T.x,T.y,T.z,T.w):ce.set(T,O,X,q),be.viewport(L.copy(ce).multiplyScalar(H).round())},this.getScissor=function(T){return T.copy(Te)},this.setScissor=function(T,O,X,q){T.isVector4?Te.set(T.x,T.y,T.z,T.w):Te.set(T,O,X,q),be.scissor(U.copy(Te).multiplyScalar(H).round())},this.getScissorTest=function(){return qe},this.setScissorTest=function(T){be.setScissorTest(qe=T)},this.setOpaqueSort=function(T){K=T},this.setTransparentSort=function(T){ne=T},this.getClearColor=function(T){return T.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor(...arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha(...arguments)},this.clear=function(T=!0,O=!0,X=!0){let q=0;if(T){let B=!1;if(R!==null){let se=R.texture.format;B=se===Yl||se===ql||se===Xl}if(B){let se=R.texture.type,pe=se===ei||se===ts||se===Cr||se===Rr||se===Gl||se===Wl,Se=Ae.getClearColor(),_e=Ae.getClearAlpha(),Oe=Se.r,Ve=Se.g,Le=Se.b;pe?(g[0]=Oe,g[1]=Ve,g[2]=Le,g[3]=_e,D.clearBufferuiv(D.COLOR,0,g)):(v[0]=Oe,v[1]=Ve,v[2]=Le,v[3]=_e,D.clearBufferiv(D.COLOR,0,v))}else q|=D.COLOR_BUFFER_BIT}O&&(q|=D.DEPTH_BUFFER_BIT),X&&(q|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ue,!1),t.removeEventListener("webglcontextrestored",xe,!1),t.removeEventListener("webglcontextcreationerror",ie,!1),Ae.dispose(),$.dispose(),Ie.dispose(),Me.dispose(),Bt.dispose(),Tt.dispose(),z.dispose(),fe.dispose(),Ye.dispose(),Z.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",ni),ae.removeEventListener("sessionend",Cd),ls.stop()};function ue(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function xe(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let T=bt.autoReset,O=Ee.enabled,X=Ee.autoUpdate,q=Ee.needsUpdate,B=Ee.type;F(),bt.autoReset=T,Ee.enabled=O,Ee.autoUpdate=X,Ee.needsUpdate=q,Ee.type=B}function ie(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Q(T){let O=T.target;O.removeEventListener("dispose",Q),we(O)}function we(T){Xe(T),Me.remove(T)}function Xe(T){let O=Me.get(T).programs;O!==void 0&&(O.forEach(function(X){Z.releaseProgram(X)}),T.isShaderMaterial&&Z.releaseShaderCache(T))}this.renderBufferDirect=function(T,O,X,q,B,se){O===null&&(O=ve);let pe=B.isMesh&&B.matrixWorld.determinant()<0,Se=ug(T,O,X,q,B);be.setMaterial(q,pe);let _e=X.index,Oe=1;if(q.wireframe===!0){if(_e=w.getWireframeAttribute(X),_e===void 0)return;Oe=2}let Ve=X.drawRange,Le=X.attributes.position,Je=Ve.start*Oe,pt=(Ve.start+Ve.count)*Oe;se!==null&&(Je=Math.max(Je,se.start*Oe),pt=Math.min(pt,(se.start+se.count)*Oe)),_e!==null?(Je=Math.max(Je,0),pt=Math.min(pt,_e.count)):Le!=null&&(Je=Math.max(Je,0),pt=Math.min(pt,Le.count));let Ft=pt-Je;if(Ft<0||Ft===1/0)return;fe.setup(B,q,Se,X,_e);let Et,xt=me;if(_e!==null&&(Et=C.get(_e),xt=ke,xt.setIndex(Et)),B.isMesh)q.wireframe===!0?(be.setLineWidth(q.wireframeLinewidth*Rt()),xt.setMode(D.LINES)):xt.setMode(D.TRIANGLES);else if(B.isLine){let Ne=q.linewidth;Ne===void 0&&(Ne=1),be.setLineWidth(Ne*Rt()),B.isLineSegments?xt.setMode(D.LINES):B.isLineLoop?xt.setMode(D.LINE_LOOP):xt.setMode(D.LINE_STRIP)}else B.isPoints?xt.setMode(D.POINTS):B.isSprite&&xt.setMode(D.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)gr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),xt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Ue.get("WEBGL_multi_draw"))xt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let Ne=B._multiDrawStarts,Lt=B._multiDrawCounts,st=B._multiDrawCount,An=_e?C.get(_e).bytesPerElement:1,js=Me.get(q).currentProgram.getUniforms();for(let Cn=0;Cn<st;Cn++)js.setValue(D,"_gl_DrawID",Cn),xt.render(Ne[Cn]/An,Lt[Cn])}else if(B.isInstancedMesh)xt.renderInstances(Je,Ft,B.count);else if(X.isInstancedBufferGeometry){let Ne=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Lt=Math.min(X.instanceCount,Ne);xt.renderInstances(Je,Ft,Lt)}else xt.render(Je,Ft)};function Mt(T,O,X){T.transparent===!0&&T.side===wn&&T.forceSinglePass===!1?(T.side=gn,T.needsUpdate=!0,Mo(T,O,X),T.side=Ai,T.needsUpdate=!0,Mo(T,O,X),T.side=wn):Mo(T,O,X)}this.compile=function(T,O,X=null){X===null&&(X=T),f=Ie.get(X),f.init(O),S.push(f),X.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),T!==X&&T.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),f.setupLights();let q=new Set;return T.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let se=B.material;if(se)if(Array.isArray(se))for(let pe=0;pe<se.length;pe++){let Se=se[pe];Mt(Se,X,B),q.add(Se)}else Mt(se,X,B),q.add(se)}),f=S.pop(),q},this.compileAsync=function(T,O,X=null){let q=this.compile(T,O,X);return new Promise(B=>{function se(){if(q.forEach(function(pe){Me.get(pe).currentProgram.isReady()&&q.delete(pe)}),q.size===0){B(T);return}setTimeout(se,10)}Ue.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let ct=null;function _i(T){ct&&ct(T)}function ni(){ls.stop()}function Cd(){ls.start()}let ls=new fp;ls.setAnimationLoop(_i),typeof self<"u"&&ls.setContext(self),this.setAnimationLoop=function(T){ct=T,ae.setAnimationLoop(T),T===null?ls.stop():ls.start()},ae.addEventListener("sessionstart",ni),ae.addEventListener("sessionend",Cd),this.render=function(T,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(O),O=ae.getCamera()),T.isScene===!0&&T.onBeforeRender(_,T,O,R),f=Ie.get(T,S.length),f.init(O),S.push(f),J.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),He.setFromProjectionMatrix(J,Jn,O.reversedDepth),Y=this.localClippingEnabled,Re=le.init(this.clippingPlanes,Y),m=$.get(T,b.length),m.init(),b.push(m),ae.enabled===!0&&ae.isPresenting===!0){let se=_.xr.getDepthSensingMesh();se!==null&&oh(se,O,-1/0,_.sortObjects)}oh(T,O,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(K,ne),Ge=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,Ge&&Ae.addToRenderList(m,T),this.info.render.frame++,Re===!0&&le.beginShadows();let X=f.state.shadowsArray;Ee.render(X,T,O),Re===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();let q=m.opaque,B=m.transmissive;if(f.setupLights(),O.isArrayCamera){let se=O.cameras;if(B.length>0)for(let pe=0,Se=se.length;pe<Se;pe++){let _e=se[pe];Id(q,B,T,_e)}Ge&&Ae.render(T);for(let pe=0,Se=se.length;pe<Se;pe++){let _e=se[pe];Rd(m,T,_e,_e.viewport)}}else B.length>0&&Id(q,B,T,O),Ge&&Ae.render(T),Rd(m,T,O);R!==null&&A===0&&(ze.updateMultisampleRenderTarget(R),ze.updateRenderTargetMipmap(R)),T.isScene===!0&&T.onAfterRender(_,T,O),fe.resetDefaultState(),x=-1,y=null,S.pop(),S.length>0?(f=S[S.length-1],Re===!0&&le.setGlobalState(_.clippingPlanes,f.state.camera)):f=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function oh(T,O,X,q){if(T.visible===!1)return;if(T.layers.test(O.layers)){if(T.isGroup)X=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(O);else if(T.isLight)f.pushLight(T),T.castShadow&&f.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||He.intersectsSprite(T)){q&&ye.setFromMatrixPosition(T.matrixWorld).applyMatrix4(J);let pe=z.update(T),Se=T.material;Se.visible&&m.push(T,pe,Se,X,ye.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||He.intersectsObject(T))){let pe=z.update(T),Se=T.material;if(q&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ye.copy(T.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),ye.copy(pe.boundingSphere.center)),ye.applyMatrix4(T.matrixWorld).applyMatrix4(J)),Array.isArray(Se)){let _e=pe.groups;for(let Oe=0,Ve=_e.length;Oe<Ve;Oe++){let Le=_e[Oe],Je=Se[Le.materialIndex];Je&&Je.visible&&m.push(T,pe,Je,X,ye.z,Le)}}else Se.visible&&m.push(T,pe,Se,X,ye.z,null)}}let se=T.children;for(let pe=0,Se=se.length;pe<Se;pe++)oh(se[pe],O,X,q)}function Rd(T,O,X,q){let B=T.opaque,se=T.transmissive,pe=T.transparent;f.setupLightsView(X),Re===!0&&le.setGlobalState(_.clippingPlanes,X),q&&be.viewport(L.copy(q)),B.length>0&&bo(B,O,X),se.length>0&&bo(se,O,X),pe.length>0&&bo(pe,O,X),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function Id(T,O,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[q.id]===void 0&&(f.state.transmissionRenderTarget[q.id]=new jt(1,1,{generateMipmaps:!0,type:Ue.has("EXT_color_buffer_half_float")||Ue.has("EXT_color_buffer_float")?Tn:ei,minFilter:es,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));let se=f.state.transmissionRenderTarget[q.id],pe=q.viewport||L;se.setSize(pe.z*_.transmissionResolutionScale,pe.w*_.transmissionResolutionScale);let Se=_.getRenderTarget(),_e=_.getActiveCubeFace(),Oe=_.getActiveMipmapLevel();_.setRenderTarget(se),_.getClearColor(W),V=_.getClearAlpha(),V<1&&_.setClearColor(16777215,.5),_.clear(),Ge&&Ae.render(X);let Ve=_.toneMapping;_.toneMapping=Ii;let Le=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),f.setupLightsView(q),Re===!0&&le.setGlobalState(_.clippingPlanes,q),bo(T,X,q),ze.updateMultisampleRenderTarget(se),ze.updateRenderTargetMipmap(se),Ue.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let pt=0,Ft=O.length;pt<Ft;pt++){let Et=O[pt],xt=Et.object,Ne=Et.geometry,Lt=Et.material,st=Et.group;if(Lt.side===wn&&xt.layers.test(q.layers)){let An=Lt.side;Lt.side=gn,Lt.needsUpdate=!0,Pd(xt,X,q,Ne,Lt,st),Lt.side=An,Lt.needsUpdate=!0,Je=!0}}Je===!0&&(ze.updateMultisampleRenderTarget(se),ze.updateRenderTargetMipmap(se))}_.setRenderTarget(Se,_e,Oe),_.setClearColor(W,V),Le!==void 0&&(q.viewport=Le),_.toneMapping=Ve}function bo(T,O,X){let q=O.isScene===!0?O.overrideMaterial:null;for(let B=0,se=T.length;B<se;B++){let pe=T[B],Se=pe.object,_e=pe.geometry,Oe=pe.group,Ve=pe.material;Ve.allowOverride===!0&&q!==null&&(Ve=q),Se.layers.test(X.layers)&&Pd(Se,O,X,_e,Ve,Oe)}}function Pd(T,O,X,q,B,se){T.onBeforeRender(_,O,X,q,B,se),T.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),B.onBeforeRender(_,O,X,q,T,se),B.transparent===!0&&B.side===wn&&B.forceSinglePass===!1?(B.side=gn,B.needsUpdate=!0,_.renderBufferDirect(X,O,q,B,T,se),B.side=Ai,B.needsUpdate=!0,_.renderBufferDirect(X,O,q,B,T,se),B.side=wn):_.renderBufferDirect(X,O,q,B,T,se),T.onAfterRender(_,O,X,q,B,se)}function Mo(T,O,X){O.isScene!==!0&&(O=ve);let q=Me.get(T),B=f.state.lights,se=f.state.shadowsArray,pe=B.state.version,Se=Z.getParameters(T,B.state,se,O,X),_e=Z.getProgramCacheKey(Se),Oe=q.programs;q.environment=T.isMeshStandardMaterial?O.environment:null,q.fog=O.fog,q.envMap=(T.isMeshStandardMaterial?Tt:Bt).get(T.envMap||q.environment),q.envMapRotation=q.environment!==null&&T.envMap===null?O.environmentRotation:T.envMapRotation,Oe===void 0&&(T.addEventListener("dispose",Q),Oe=new Map,q.programs=Oe);let Ve=Oe.get(_e);if(Ve!==void 0){if(q.currentProgram===Ve&&q.lightsStateVersion===pe)return Ld(T,Se),Ve}else Se.uniforms=Z.getUniforms(T),T.onBeforeCompile(Se,_),Ve=Z.acquireProgram(Se,_e),Oe.set(_e,Ve),q.uniforms=Se.uniforms;let Le=q.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Le.clippingPlanes=le.uniform),Ld(T,Se),q.needsLights=fg(T),q.lightsStateVersion=pe,q.needsLights&&(Le.ambientLightColor.value=B.state.ambient,Le.lightProbe.value=B.state.probe,Le.directionalLights.value=B.state.directional,Le.directionalLightShadows.value=B.state.directionalShadow,Le.spotLights.value=B.state.spot,Le.spotLightShadows.value=B.state.spotShadow,Le.rectAreaLights.value=B.state.rectArea,Le.ltc_1.value=B.state.rectAreaLTC1,Le.ltc_2.value=B.state.rectAreaLTC2,Le.pointLights.value=B.state.point,Le.pointLightShadows.value=B.state.pointShadow,Le.hemisphereLights.value=B.state.hemi,Le.directionalShadowMap.value=B.state.directionalShadowMap,Le.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Le.spotShadowMap.value=B.state.spotShadowMap,Le.spotLightMatrix.value=B.state.spotLightMatrix,Le.spotLightMap.value=B.state.spotLightMap,Le.pointShadowMap.value=B.state.pointShadowMap,Le.pointShadowMatrix.value=B.state.pointShadowMatrix),q.currentProgram=Ve,q.uniformsList=null,Ve}function Dd(T){if(T.uniformsList===null){let O=T.currentProgram.getUniforms();T.uniformsList=Lr.seqWithValue(O.seq,T.uniforms)}return T.uniformsList}function Ld(T,O){let X=Me.get(T);X.outputColorSpace=O.outputColorSpace,X.batching=O.batching,X.batchingColor=O.batchingColor,X.instancing=O.instancing,X.instancingColor=O.instancingColor,X.instancingMorph=O.instancingMorph,X.skinning=O.skinning,X.morphTargets=O.morphTargets,X.morphNormals=O.morphNormals,X.morphColors=O.morphColors,X.morphTargetsCount=O.morphTargetsCount,X.numClippingPlanes=O.numClippingPlanes,X.numIntersection=O.numClipIntersection,X.vertexAlphas=O.vertexAlphas,X.vertexTangents=O.vertexTangents,X.toneMapping=O.toneMapping}function ug(T,O,X,q,B){O.isScene!==!0&&(O=ve),ze.resetTextureUnits();let se=O.fog,pe=q.isMeshStandardMaterial?O.environment:null,Se=R===null?_.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:vs,_e=(q.isMeshStandardMaterial?Tt:Bt).get(q.envMap||pe),Oe=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ve=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Le=!!X.morphAttributes.position,Je=!!X.morphAttributes.normal,pt=!!X.morphAttributes.color,Ft=Ii;q.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Ft=_.toneMapping);let Et=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,xt=Et!==void 0?Et.length:0,Ne=Me.get(q),Lt=f.state.lights;if(Re===!0&&(Y===!0||T!==y)){let un=T===y&&q.id===x;le.setState(q,T,un)}let st=!1;q.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==Lt.state.version||Ne.outputColorSpace!==Se||B.isBatchedMesh&&Ne.batching===!1||!B.isBatchedMesh&&Ne.batching===!0||B.isBatchedMesh&&Ne.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Ne.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Ne.instancing===!1||!B.isInstancedMesh&&Ne.instancing===!0||B.isSkinnedMesh&&Ne.skinning===!1||!B.isSkinnedMesh&&Ne.skinning===!0||B.isInstancedMesh&&Ne.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ne.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ne.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ne.instancingMorph===!1&&B.morphTexture!==null||Ne.envMap!==_e||q.fog===!0&&Ne.fog!==se||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==le.numPlanes||Ne.numIntersection!==le.numIntersection)||Ne.vertexAlphas!==Oe||Ne.vertexTangents!==Ve||Ne.morphTargets!==Le||Ne.morphNormals!==Je||Ne.morphColors!==pt||Ne.toneMapping!==Ft||Ne.morphTargetsCount!==xt)&&(st=!0):(st=!0,Ne.__version=q.version);let An=Ne.currentProgram;st===!0&&(An=Mo(q,O,B));let js=!1,Cn=!1,ta=!1,Ut=An.getUniforms(),On=Ne.uniforms;if(be.useProgram(An.program)&&(js=!0,Cn=!0,ta=!0),q.id!==x&&(x=q.id,Cn=!0),js||y!==T){be.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Ut.setValue(D,"projectionMatrix",T.projectionMatrix),Ut.setValue(D,"viewMatrix",T.matrixWorldInverse);let yn=Ut.map.cameraPosition;yn!==void 0&&yn.setValue(D,he.setFromMatrixPosition(T.matrixWorld)),Fe.logarithmicDepthBuffer&&Ut.setValue(D,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Ut.setValue(D,"isOrthographic",T.isOrthographicCamera===!0),y!==T&&(y=T,Cn=!0,ta=!0)}if(B.isSkinnedMesh){Ut.setOptional(D,B,"bindMatrix"),Ut.setOptional(D,B,"bindMatrixInverse");let un=B.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),Ut.setValue(D,"boneTexture",un.boneTexture,ze))}B.isBatchedMesh&&(Ut.setOptional(D,B,"batchingTexture"),Ut.setValue(D,"batchingTexture",B._matricesTexture,ze),Ut.setOptional(D,B,"batchingIdTexture"),Ut.setValue(D,"batchingIdTexture",B._indirectTexture,ze),Ut.setOptional(D,B,"batchingColorTexture"),B._colorsTexture!==null&&Ut.setValue(D,"batchingColorTexture",B._colorsTexture,ze));let kn=X.morphAttributes;if((kn.position!==void 0||kn.normal!==void 0||kn.color!==void 0)&&re.update(B,X,An),(Cn||Ne.receiveShadow!==B.receiveShadow)&&(Ne.receiveShadow=B.receiveShadow,Ut.setValue(D,"receiveShadow",B.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(On.envMap.value=_e,On.flipEnvMap.value=_e.isCubeTexture&&_e.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&O.environment!==null&&(On.envMapIntensity.value=O.environmentIntensity),Cn&&(Ut.setValue(D,"toneMappingExposure",_.toneMappingExposure),Ne.needsLights&&dg(On,ta),se&&q.fog===!0&&te.refreshFogUniforms(On,se),te.refreshMaterialUniforms(On,q,H,j,f.state.transmissionRenderTarget[T.id]),Lr.upload(D,Dd(Ne),On,ze)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Lr.upload(D,Dd(Ne),On,ze),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Ut.setValue(D,"center",B.center),Ut.setValue(D,"modelViewMatrix",B.modelViewMatrix),Ut.setValue(D,"normalMatrix",B.normalMatrix),Ut.setValue(D,"modelMatrix",B.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){let un=q.uniformsGroups;for(let yn=0,lh=un.length;yn<lh;yn++){let cs=un[yn];Ye.update(cs,An),Ye.bind(cs,An)}}return An}function dg(T,O){T.ambientLightColor.needsUpdate=O,T.lightProbe.needsUpdate=O,T.directionalLights.needsUpdate=O,T.directionalLightShadows.needsUpdate=O,T.pointLights.needsUpdate=O,T.pointLightShadows.needsUpdate=O,T.spotLights.needsUpdate=O,T.spotLightShadows.needsUpdate=O,T.rectAreaLights.needsUpdate=O,T.hemisphereLights.needsUpdate=O}function fg(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(T,O,X){let q=Me.get(T);q.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),Me.get(T.texture).__webglTexture=O,Me.get(T.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:X,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,O){let X=Me.get(T);X.__webglFramebuffer=O,X.__useDefaultFramebuffer=O===void 0};let pg=D.createFramebuffer();this.setRenderTarget=function(T,O=0,X=0){R=T,E=O,A=X;let q=!0,B=null,se=!1,pe=!1;if(T){let _e=Me.get(T);if(_e.__useDefaultFramebuffer!==void 0)be.bindFramebuffer(D.FRAMEBUFFER,null),q=!1;else if(_e.__webglFramebuffer===void 0)ze.setupRenderTarget(T);else if(_e.__hasExternalTextures)ze.rebindTextures(T,Me.get(T.texture).__webglTexture,Me.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Le=T.depthTexture;if(_e.__boundDepthTexture!==Le){if(Le!==null&&Me.has(Le)&&(T.width!==Le.image.width||T.height!==Le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ze.setupDepthRenderbuffer(T)}}let Oe=T.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(pe=!0);let Ve=Me.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ve[O])?B=Ve[O][X]:B=Ve[O],se=!0):T.samples>0&&ze.useMultisampledRTT(T)===!1?B=Me.get(T).__webglMultisampledFramebuffer:Array.isArray(Ve)?B=Ve[X]:B=Ve,L.copy(T.viewport),U.copy(T.scissor),k=T.scissorTest}else L.copy(ce).multiplyScalar(H).floor(),U.copy(Te).multiplyScalar(H).floor(),k=qe;if(X!==0&&(B=pg),be.bindFramebuffer(D.FRAMEBUFFER,B)&&q&&be.drawBuffers(T,B),be.viewport(L),be.scissor(U),be.setScissorTest(k),se){let _e=Me.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+O,_e.__webglTexture,X)}else if(pe){let _e=O;for(let Oe=0;Oe<T.textures.length;Oe++){let Ve=Me.get(T.textures[Oe]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Oe,Ve.__webglTexture,X,_e)}}else if(T!==null&&X!==0){let _e=Me.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,_e.__webglTexture,X)}x=-1},this.readRenderTargetPixels=function(T,O,X,q,B,se,pe,Se=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=Me.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&pe!==void 0&&(_e=_e[pe]),_e){be.bindFramebuffer(D.FRAMEBUFFER,_e);try{let Oe=T.textures[Se],Ve=Oe.format,Le=Oe.type;if(!Fe.textureFormatReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Fe.textureTypeReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=T.width-q&&X>=0&&X<=T.height-B&&(T.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Se),D.readPixels(O,X,q,B,Ce.convert(Ve),Ce.convert(Le),se))}finally{let Oe=R!==null?Me.get(R).__webglFramebuffer:null;be.bindFramebuffer(D.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(T,O,X,q,B,se,pe,Se=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=Me.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&pe!==void 0&&(_e=_e[pe]),_e)if(O>=0&&O<=T.width-q&&X>=0&&X<=T.height-B){be.bindFramebuffer(D.FRAMEBUFFER,_e);let Oe=T.textures[Se],Ve=Oe.format,Le=Oe.type;if(!Fe.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Fe.textureTypeReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Je=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Je),D.bufferData(D.PIXEL_PACK_BUFFER,se.byteLength,D.STREAM_READ),T.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Se),D.readPixels(O,X,q,B,Ce.convert(Ve),Ce.convert(Le),0);let pt=R!==null?Me.get(R).__webglFramebuffer:null;be.bindFramebuffer(D.FRAMEBUFFER,pt);let Ft=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await zf(D,Ft,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Je),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,se),D.deleteBuffer(Je),D.deleteSync(Ft),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,O=null,X=0){let q=Math.pow(2,-X),B=Math.floor(T.image.width*q),se=Math.floor(T.image.height*q),pe=O!==null?O.x:0,Se=O!==null?O.y:0;ze.setTexture2D(T,0),D.copyTexSubImage2D(D.TEXTURE_2D,X,0,0,pe,Se,B,se),be.unbindTexture()};let mg=D.createFramebuffer(),gg=D.createFramebuffer();this.copyTextureToTexture=function(T,O,X=null,q=null,B=0,se=null){se===null&&(B!==0?(gr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),se=B,B=0):se=0);let pe,Se,_e,Oe,Ve,Le,Je,pt,Ft,Et=T.isCompressedTexture?T.mipmaps[se]:T.image;if(X!==null)pe=X.max.x-X.min.x,Se=X.max.y-X.min.y,_e=X.isBox3?X.max.z-X.min.z:1,Oe=X.min.x,Ve=X.min.y,Le=X.isBox3?X.min.z:0;else{let kn=Math.pow(2,-B);pe=Math.floor(Et.width*kn),Se=Math.floor(Et.height*kn),T.isDataArrayTexture?_e=Et.depth:T.isData3DTexture?_e=Math.floor(Et.depth*kn):_e=1,Oe=0,Ve=0,Le=0}q!==null?(Je=q.x,pt=q.y,Ft=q.z):(Je=0,pt=0,Ft=0);let xt=Ce.convert(O.format),Ne=Ce.convert(O.type),Lt;O.isData3DTexture?(ze.setTexture3D(O,0),Lt=D.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(ze.setTexture2DArray(O,0),Lt=D.TEXTURE_2D_ARRAY):(ze.setTexture2D(O,0),Lt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,O.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,O.unpackAlignment);let st=D.getParameter(D.UNPACK_ROW_LENGTH),An=D.getParameter(D.UNPACK_IMAGE_HEIGHT),js=D.getParameter(D.UNPACK_SKIP_PIXELS),Cn=D.getParameter(D.UNPACK_SKIP_ROWS),ta=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Et.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Et.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Oe),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ve),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Le);let Ut=T.isDataArrayTexture||T.isData3DTexture,On=O.isDataArrayTexture||O.isData3DTexture;if(T.isDepthTexture){let kn=Me.get(T),un=Me.get(O),yn=Me.get(kn.__renderTarget),lh=Me.get(un.__renderTarget);be.bindFramebuffer(D.READ_FRAMEBUFFER,yn.__webglFramebuffer),be.bindFramebuffer(D.DRAW_FRAMEBUFFER,lh.__webglFramebuffer);for(let cs=0;cs<_e;cs++)Ut&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Me.get(T).__webglTexture,B,Le+cs),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Me.get(O).__webglTexture,se,Ft+cs)),D.blitFramebuffer(Oe,Ve,pe,Se,Je,pt,pe,Se,D.DEPTH_BUFFER_BIT,D.NEAREST);be.bindFramebuffer(D.READ_FRAMEBUFFER,null),be.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(B!==0||T.isRenderTargetTexture||Me.has(T)){let kn=Me.get(T),un=Me.get(O);be.bindFramebuffer(D.READ_FRAMEBUFFER,mg),be.bindFramebuffer(D.DRAW_FRAMEBUFFER,gg);for(let yn=0;yn<_e;yn++)Ut?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,kn.__webglTexture,B,Le+yn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,kn.__webglTexture,B),On?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,un.__webglTexture,se,Ft+yn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,un.__webglTexture,se),B!==0?D.blitFramebuffer(Oe,Ve,pe,Se,Je,pt,pe,Se,D.COLOR_BUFFER_BIT,D.NEAREST):On?D.copyTexSubImage3D(Lt,se,Je,pt,Ft+yn,Oe,Ve,pe,Se):D.copyTexSubImage2D(Lt,se,Je,pt,Oe,Ve,pe,Se);be.bindFramebuffer(D.READ_FRAMEBUFFER,null),be.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else On?T.isDataTexture||T.isData3DTexture?D.texSubImage3D(Lt,se,Je,pt,Ft,pe,Se,_e,xt,Ne,Et.data):O.isCompressedArrayTexture?D.compressedTexSubImage3D(Lt,se,Je,pt,Ft,pe,Se,_e,xt,Et.data):D.texSubImage3D(Lt,se,Je,pt,Ft,pe,Se,_e,xt,Ne,Et):T.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,se,Je,pt,pe,Se,xt,Ne,Et.data):T.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,se,Je,pt,Et.width,Et.height,xt,Et.data):D.texSubImage2D(D.TEXTURE_2D,se,Je,pt,pe,Se,xt,Ne,Et);D.pixelStorei(D.UNPACK_ROW_LENGTH,st),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,An),D.pixelStorei(D.UNPACK_SKIP_PIXELS,js),D.pixelStorei(D.UNPACK_SKIP_ROWS,Cn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ta),se===0&&O.generateMipmaps&&D.generateMipmap(Lt),be.unbindTexture()},this.initRenderTarget=function(T){Me.get(T).__webglFramebuffer===void 0&&ze.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?ze.setTextureCube(T,0):T.isData3DTexture?ze.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?ze.setTexture2DArray(T,0):ze.setTexture2D(T,0),be.unbindTexture()},this.resetState=function(){E=0,A=0,R=null,be.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}};var Ya=new P;function Xn(n,e,t,i,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;Ya.copy(e),Ya[i]=0,Ya.normalize();let l=.5*a/(a+o),h=1-Ya.angleTo(n)/c;return Math.sign(Ya[t])===1?h*l:o/(a+o)+l+l*(1-h)}var Nr=class n extends qi{constructor(e=1,t=1,i=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(e/2,t/2,i/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let c=new P,l=new P,h=new P(e,t,i).divideScalar(2).subScalar(r),u=this.attributes.position.array,d=this.attributes.normal.array,p=this.attributes.uv.array,g=u.length/6,v=new P,m=.5/a;for(let f=0,b=0;f<u.length;f+=3,b+=2)switch(c.fromArray(u,f),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),u[f+0]=h.x*Math.sign(c.x)+l.x*r,u[f+1]=h.y*Math.sign(c.y)+l.y*r,u[f+2]=h.z*Math.sign(c.z)+l.z*r,d[f+0]=l.x,d[f+1]=l.y,d[f+2]=l.z,Math.floor(f/g)){case 0:v.set(1,0,0),p[b+0]=Xn(v,l,"z","y",r,i),p[b+1]=1-Xn(v,l,"y","z",r,t);break;case 1:v.set(-1,0,0),p[b+0]=1-Xn(v,l,"z","y",r,i),p[b+1]=1-Xn(v,l,"y","z",r,t);break;case 2:v.set(0,1,0),p[b+0]=1-Xn(v,l,"x","z",r,e),p[b+1]=Xn(v,l,"z","x",r,i);break;case 3:v.set(0,-1,0),p[b+0]=1-Xn(v,l,"x","z",r,e),p[b+1]=1-Xn(v,l,"z","x",r,i);break;case 4:v.set(0,0,1),p[b+0]=1-Xn(v,l,"x","y",r,e),p[b+1]=1-Xn(v,l,"y","x",r,t);break;case 5:v.set(0,0,-1),p[b+0]=Xn(v,l,"x","y",r,e),p[b+1]=1-Xn(v,l,"y","x",r,t);break}}static fromJSON(e){return new n(e.width,e.height,e.depth,e.segments,e.radius)}};var _p={type:"change"},Du={type:"start"},yp={type:"end"},Rc=new xs,xp=new zn,Yy=Math.cos(70*lu.DEG2RAD),qt=new P,En=2*Math.PI,mt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Pu=1e-6,Ic=class extends Ba{constructor(e,t=null){super(e,t),this.state=mt.NONE,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ji.ROTATE,MIDDLE:Ji.DOLLY,RIGHT:Ji.PAN},this.touches={ONE:Qi.ROTATE,TWO:Qi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new pn,this._lastTargetPosition=new P,this._quat=new pn().setFromUnitVectors(e.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Er,this._sphericalDelta=new Er,this._scale=1,this._panOffset=new P,this._rotateStart=new oe,this._rotateEnd=new oe,this._rotateDelta=new oe,this._panStart=new oe,this._panEnd=new oe,this._panDelta=new oe,this._dollyStart=new oe,this._dollyEnd=new oe,this._dollyDelta=new oe,this._dollyDirection=new P,this._mouse=new oe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Zy.bind(this),this._onPointerDown=$y.bind(this),this._onPointerUp=jy.bind(this),this._onContextMenu=ib.bind(this),this._onMouseWheel=Qy.bind(this),this._onKeyDown=eb.bind(this),this._onTouchStart=tb.bind(this),this._onTouchMove=nb.bind(this),this._onMouseDown=Ky.bind(this),this._onMouseMove=Jy.bind(this),this._interceptControlDown=sb.bind(this),this._interceptControlUp=rb.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(_p),this.update(),this.state=mt.NONE}update(e=null){let t=this.object.position;qt.copy(t).sub(this.target),qt.applyQuaternion(this._quat),this._spherical.setFromVector3(qt),this.autoRotate&&this.state===mt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=En:i>Math.PI&&(i-=En),s<-Math.PI?s+=En:s>Math.PI&&(s-=En),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(qt.setFromSpherical(this._spherical),qt.applyQuaternion(this._quatInverse),t.copy(this.target).add(qt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=qt.length();a=this._clampDistance(o*this._scale);let c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let o=new P(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new P(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=qt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Rc.origin.copy(this.object.position),Rc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Rc.direction))<Yy?this.object.lookAt(this.target):(xp.setFromNormalAndCoplanarPoint(this.object.up,this.target),Rc.intersectPlane(xp,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Pu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Pu||this._lastTargetPosition.distanceToSquared(this.target)>Pu?(this.dispatchEvent(_p),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?En/60*this.autoRotateSpeed*e:En/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){qt.setFromMatrixColumn(t,0),qt.multiplyScalar(-e),this._panOffset.add(qt)}_panUp(e,t){this.screenSpacePanning===!0?qt.setFromMatrixColumn(t,1):(qt.setFromMatrixColumn(t,0),qt.crossVectors(this.object.up,qt)),qt.multiplyScalar(e),this._panOffset.add(qt)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;qt.copy(s).sub(this.target);let r=qt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(En*this._rotateDelta.x/t.clientHeight),this._rotateUp(En*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(En*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-En*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(En*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-En*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(En*this._rotateDelta.x/t.clientHeight),this._rotateUp(En*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new oe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function $y(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function Zy(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function jy(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(yp),this.state=mt.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Ky(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ji.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=mt.DOLLY;break;case Ji.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=mt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=mt.ROTATE}break;case Ji.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=mt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=mt.PAN}break;default:this.state=mt.NONE}this.state!==mt.NONE&&this.dispatchEvent(Du)}function Jy(n){switch(this.state){case mt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case mt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case mt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Qy(n){this.enabled===!1||this.enableZoom===!1||this.state!==mt.NONE||(n.preventDefault(),this.dispatchEvent(Du),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(yp))}function eb(n){this.enabled!==!1&&this._handleKeyDown(n)}function tb(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Qi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=mt.TOUCH_ROTATE;break;case Qi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=mt.TOUCH_PAN;break;default:this.state=mt.NONE}break;case 2:switch(this.touches.TWO){case Qi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=mt.TOUCH_DOLLY_PAN;break;case Qi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=mt.TOUCH_DOLLY_ROTATE;break;default:this.state=mt.NONE}break;default:this.state=mt.NONE}this.state!==mt.NONE&&this.dispatchEvent(Du)}function nb(n){switch(this._trackPointer(n),this.state){case mt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case mt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case mt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case mt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=mt.NONE}}function ib(n){this.enabled!==!1&&n.preventDefault()}function sb(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function rb(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Fr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var vn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},ab=new Ts(-1,1,1,-1,0,1),Lu=class extends Vt{constructor(){super(),this.setAttribute("position",new it([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new it([0,2,0,0,2,0],2))}},ob=new Lu,ci=class{constructor(e){this._mesh=new ft(ob,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,ab)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Or=class extends vn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Ot?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ti.clone(e.uniforms),this.material=new Ot({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new ci(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var $a=class extends vn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Pc=class extends vn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Dc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new oe);this._width=i.width,this._height=i.height,t=new jt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Tn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Or(Fr),this.copyPass.material.blending=Ln,this.clock=new ka}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){let o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}$a!==void 0&&(a instanceof $a?i=!0:a instanceof Pc&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new oe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Lc=class extends vn{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new De}render(e,t,i){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var bp={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new De(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var kr=class n extends vn{constructor(e,t=1,i,s){super(),this.strength=t,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new oe(e.x,e.y):new oe(256,256),this.clearColor=new De(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new jt(r,a,{type:Tn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new jt(r,a,{type:Tn});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let d=new jt(r,a,{type:Tn});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}let o=bp;this.highPassUniforms=ti.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ot({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new oe(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=ti.clone(Fr.uniforms),this.blendMaterial=new Ot({uniforms:this.copyUniforms,vertexShader:Fr.vertexShader,fragmentShader:Fr.fragmentShader,blending:Es,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new De,this._oldClearAlpha=1,this._basic=new Sn,this._fsQuad=new ci(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new oe(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new Ot({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new oe(.5,.5)},direction:{value:new oe(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(e){return new Ot({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};kr.BlurDirectionX=new oe(1,0);kr.BlurDirectionY=new oe(0,1);var Za={name:"BokehShader",defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tColor:{value:null},tDepth:{value:null},focus:{value:1},aspect:{value:1},aperture:{value:.025},maxblur:{value:.01},nearClip:{value:1},farClip:{value:1e3}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#include <common>

		varying vec2 vUv;

		uniform sampler2D tColor;
		uniform sampler2D tDepth;

		uniform float maxblur; // max blur amount
		uniform float aperture; // aperture - bigger values for shallower depth of field

		uniform float nearClip;
		uniform float farClip;

		uniform float focus;
		uniform float aspect;

		#include <packing>

		float getDepth( const in vec2 screenPosition ) {
			#if DEPTH_PACKING == 1
			return unpackRGBAToDepth( texture2D( tDepth, screenPosition ) );
			#else
			return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		float getViewZ( const in float depth ) {
			#if PERSPECTIVE_CAMERA == 1
			return perspectiveDepthToViewZ( depth, nearClip, farClip );
			#else
			return orthographicDepthToViewZ( depth, nearClip, farClip );
			#endif
		}


		void main() {

			vec2 aspectcorrect = vec2( 1.0, aspect );

			float viewZ = getViewZ( getDepth( vUv ) );

			float factor = ( focus + viewZ ); // viewZ is <= 0, so this is a difference equation

			vec2 dofblur = vec2 ( clamp( factor * aperture, -maxblur, maxblur ) );

			vec2 dofblur9 = dofblur * 0.9;
			vec2 dofblur7 = dofblur * 0.7;
			vec2 dofblur4 = dofblur * 0.4;

			vec4 col = vec4( 0.0 );

			col += texture2D( tColor, vUv.xy );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur9 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur7 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur4 );

			gl_FragColor = col / 41.0;
			gl_FragColor.a = 1.0;

		}`};var Uc=class extends vn{constructor(e,t,i){super(),this.scene=e,this.camera=t;let s=i.focus!==void 0?i.focus:1,r=i.aperture!==void 0?i.aperture:.025,a=i.maxblur!==void 0?i.maxblur:1;this._renderTargetDepth=new jt(1,1,{minFilter:fn,magFilter:fn,type:Tn}),this._renderTargetDepth.texture.name="BokehPass.depth",this._materialDepth=new Sr,this._materialDepth.depthPacking=Mc,this._materialDepth.blending=Ln;let o=ti.clone(Za.uniforms);o.tDepth.value=this._renderTargetDepth.texture,o.focus.value=s,o.aspect.value=t.aspect,o.aperture.value=r,o.maxblur.value=a,o.nearClip.value=t.near,o.farClip.value=t.far,this.materialBokeh=new Ot({defines:Object.assign({},Za.defines),uniforms:o,vertexShader:Za.vertexShader,fragmentShader:Za.fragmentShader}),this.uniforms=o,this._fsQuad=new ci(this.materialBokeh),this._oldClearColor=new De}render(e,t,i){this.scene.overrideMaterial=this._materialDepth,e.getClearColor(this._oldClearColor);let s=e.getClearAlpha(),r=e.autoClear;e.autoClear=!1,e.setClearColor(16777215),e.setClearAlpha(1),e.setRenderTarget(this._renderTargetDepth),e.clear(),e.render(this.scene,this.camera),this.uniforms.tColor.value=i.texture,this.uniforms.nearClip.value=this.camera.near,this.uniforms.farClip.value=this.camera.far,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),e.clear(),this._fsQuad.render(e)),this.scene.overrideMaterial=null,e.setClearColor(this._oldClearColor),e.setClearAlpha(s),e.autoClear=r}setSize(e,t){this.materialBokeh.uniforms.aspect.value=e/t,this._renderTargetDepth.setSize(e,t)}dispose(){this._renderTargetDepth.dispose(),this._materialDepth.dispose(),this.materialBokeh.dispose(),this._fsQuad.dispose()}};var ja={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Nc=class extends vn{constructor(){super(),this.uniforms=ti.clone(ja.uniforms),this.material=new Na({name:ja.name,uniforms:this.uniforms,vertexShader:ja.vertexShader,fragmentShader:ja.fragmentShader}),this._fsQuad=new ci(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},et.getTransfer(this._outputColorSpace)===rt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ll?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ul?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Nl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ar?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ol?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===kl?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Fl&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var lb=["human","robot","creature","bot"],cb=["fox","cat","dragon","bear","bunny"],zr=["neutral","happy","sad","angry","surprised","worried","curious","idea"],Vr=["none","explain","wave","point","point-screen","point-other","shrug","facepalm","think","cheer","clap","thumbsup","crossarms","handsup","nod","headshake","lean","jump","type","press","raise"],Hr=["auto","wide","two","single","cu","ots","screen","custom"],Ep=["auto","static","push","pull","orbit","rise","handheld"],Ap=["alert","calm","success","info"],hb=["bold","box"];var Us={species:cb,hairStyle:["shaggy","chunky","short","curly","long","bun","mohawk","bald"],facialHair:["none","stubble","beard","mustache"],eyeStyle:["glossy","classic"],topStyle:["hoodie","tshirt","jacket","suit"],glasses:["none","round","square"],hat:["none","cap","beanie","headphones"]},Bc={height:[.8,1.2],build:[.75,1.35],head:[.85,1.3]},ub=["skin","hair","eyes","top","accent","bottom","shoes","screen"],Fc={height:1,build:1,head:1,species:"fox",hairStyle:"shaggy",facialHair:"none",eyeStyle:"glossy",topStyle:"hoodie",glasses:"none",hat:"none",skin:"#c78a65",hair:"#2a211e",eyes:"#1b1514",top:"#2e3a55",accent:"#c9b8a4",bottom:"#1b222c",shoes:"#d6cbb5",screen:"#94f3d4"},Mp={creator:{kind:"human",voice:"am_puck",look:{head:1.22,build:.95,height:1}},human:{kind:"human",voice:"af_bella",look:{hairStyle:"long",top:"#b5543f",accent:"#f0d9b5",skin:"#e0a57f",hair:"#5a3422",eyeStyle:"glossy",topStyle:"jacket",bottom:"#2b3346"}},robot:{kind:"robot",voice:"am_echo",look:{top:"#8aa1ad",accent:"#3d4650",screen:"#7fd6ff",bottom:"#3d4650",shoes:"#2b3036"}},creature:{kind:"creature",voice:"af_sky",look:{species:"fox",skin:"#d9793d",hair:"#2a1e1a",top:"#3f6b58",accent:"#f2e2c9",bottom:"#2d3a33",eyeStyle:"glossy"}},bot:{kind:"bot",voice:"af_nova",look:{top:"#4f8fd6",accent:"#2e3440",screen:"#ffd27a"}}},Sp={neutral:{brow:0,raise:0,eye:1,smile:.05,tilt:0,down:0,open:0},happy:{brow:-.05,raise:.03,eye:.62,smile:.9,tilt:.05,down:-.03,open:0},sad:{brow:.32,raise:-.01,eye:.72,smile:-.7,tilt:.06,down:.12,open:0},angry:{brow:-.4,raise:-.04,eye:.78,smile:-.45,tilt:0,down:.06,open:0},surprised:{brow:0,raise:.09,eye:1.28,smile:0,tilt:0,down:-.06,open:.3},worried:{brow:.24,raise:.02,eye:1.05,smile:-.35,tilt:.03,down:.04,open:0},curious:{brow:.1,raise:.05,eye:1.05,smile:.15,tilt:.13,down:0,open:0,asym:1},idea:{brow:-.08,raise:.07,eye:1.12,smile:.55,tilt:-.04,down:-.05,open:0}},Br={version:3,title:"The Last Connection",duration:30,fps:30,handle:"@embertake",cast:[{id:"Ren",name:"Ren",kind:"human",voice:"am_michael",look:{...Fc,hairStyle:"chunky",eyeStyle:"classic",glasses:"round",skin:"#c78a65",hair:"#292026",eyes:"#211b23",top:"#8364c5",accent:"#b59ad8",bottom:"#19222d"}},{id:"Mica",name:"Mica",kind:"bot",voice:"af_heart",look:{...Fc,top:"#ee704e",accent:"#493d39",screen:"#94f3d4"}}],warmth:1,dof:!0,music:!0,sfx:!0,musicVolume:.6,captions:!0,captionStyle:"bold",intro:!0,endTitle:"Made. Together.",endSub:"A little imagination goes a long way.",voiceEngine:"kokoro",voiceData:null,musicData:null,cues:[{id:1,start:1.2,end:4.1,speaker:"Ren",text:"The deadline is in thirty seconds.",emotion:"worried",action:"explain",shot:"auto",pause:.3,screen:{kicker:"CONNECTION LOST",title:"OFFLINE",sub:"THE CLOUD HAS LEFT THE CHAT.",tone:"alert",progress:!1}},{id:2,start:4.4,end:7.3,speaker:"Ren",text:"And the internet just disappeared.",emotion:"surprised",action:"point-screen",shot:"auto",pause:.3},{id:3,start:7.6,end:10.4,speaker:"Mica",text:"Have you tried asking it politely?",emotion:"curious",action:"think",shot:"auto",pause:.5},{id:4,start:10.9,end:13.8,speaker:"Ren",text:"Please. Come. Back.",emotion:"sad",action:"facepalm",shot:"auto",pause:.6},{id:5,start:14.4,end:18,speaker:"Mica",text:"Or\u2026 we could make it right here.",emotion:"idea",action:"raise",shot:"auto",pause:.7,screen:{kicker:"LOCAL STUDIO",title:"Make it here.",sub:"A LITTLE IMAGINATION. ALL YOU NEED.",tone:"calm",progress:!1}},{id:6,start:18.7,end:22,speaker:"Ren",text:"No cloud. Just us?",emotion:"curious",action:"shrug",shot:"auto",pause:.6,screen:{kicker:"LOCAL STUDIO",title:"Rendering\u2026",sub:"NO CLOUD REQUIRED",tone:"info",progress:!0}},{id:7,start:22.6,end:25.5,speaker:"Mica",text:"Just us. And one very big button.",emotion:"happy",action:"press",shot:"auto",pause:.6},{id:8,start:26.1,end:29,speaker:"Ren",text:"Turns out, we were already connected.",emotion:"happy",action:"wave",shot:"auto",pause:.4,screen:{kicker:"TAKE 01 / READY",title:"Made. Together.",sub:"YOUR STORY IS READY TO LEAVE THE DESK",tone:"success",progress:!1}}]},It=n=>JSON.parse(JSON.stringify(n)),gt=(n,e,t)=>Math.max(e,Math.min(t,n)),kt=n=>(n=gt(n,0,1),n*n*(3-2*n)),Oc=(n,e,t)=>n+(e-n)*t;function Cp(n,e){return n.cues.find(t=>e>=t.start&&e<t.end)||null}var Uu=new WeakMap;function db(n){return n.cast.map(e=>e.id)}function fb(n,e){let t=n.cues[e],i=db(n);for(let s=e-1;s>=0;s--)if(n.cues[s].speaker!==t.speaker)return n.cues[s].speaker;for(let s=e+1;s<n.cues.length;s++)if(n.cues[s].speaker!==t.speaker)return n.cues[s].speaker;return i.find(s=>s!==t.speaker)||t.speaker}function zc(n){if(Uu.has(n))return Uu.get(n);let e=[],t={},i=null,s=null;return n.cues.forEach((r,a)=>{let o=fb(n,a);i&&r.start-i.end>1.2&&e.push({start:i.end+.2,shot:"two",subject:i.speaker,other:r.speaker,cue:null});let c=r.shot,l=r.subject||r.speaker;c==="auto"&&(l=r.speaker,a===0?c="wide":r.emotion==="angry"||r.emotion==="surprised"?c="cu":i&&r.speaker!==i.speaker?(t[r.speaker]=(t[r.speaker]||0)+1,c=t[r.speaker]%2?"ots":"single"):c=s?.shot==="single"&&s.subject===l?"cu":"single");let h=a===0?0:Math.max(i.end,r.start-.12),u={start:h,shot:c,subject:l,other:o,cam:r.shot==="custom"?r.cam:void 0,cue:r.id};r.screen&&r.shot==="auto"&&a>0&&r.end-r.start>1.5?(e.push({start:h,shot:"screen",subject:l,other:o,cue:r.id}),e.push({...u,start:r.start+Math.min(1.1,(r.end-r.start)*.45)})):e.push(u),i=r,s=e.at(-1)}),e.length||e.push({start:0,shot:"wide",subject:n.cast[0].id,other:n.cast[1]?.id||n.cast[0].id,cue:null}),e[0].start=0,Uu.set(n,e),e}function pb(n,e){let t=zc(n),i=0;for(;i+1<t.length&&t[i+1].start<=e;)i++;return{...t[i],index:i,end:t[i+1]?.start??n.duration}}function Rp(n,e,t){for(let i of n.cues){if(i.speaker!==t||i.action==="none"||e<i.start-.3||e>i.end+.7)continue;let s=kt((e-i.start+.3)/.45)*(1-kt((e-i.end-.15)/.55));return{name:i.action,k:s,local:e-i.start,dur:i.end-i.start,cue:i}}return{name:"none",k:0,local:0,dur:0,cue:null}}function Ip(n,e){if(!n)return 0;let t=e-n.start,i=0,s=n.words?.length?n.words:n.text.split(/\s+/).map((r,a,o)=>[a*(n.end-n.start)/o.length,0,r]);for(let[r,,a]of s){let o=t-r;if(o<0||o>.6)continue;let c=/[!?]$|^[A-Z]{3,}/.test(a)?1:a.replace(/\W/g,"").length>5?.75:.4;i=Math.max(i,c*Math.exp(-o*6)*Math.min(1,o*25))}return i}function Pp(n,e,t){let i=null,s=null;for(let l of n.cues)if(l.speaker===t)if(l.start-.15<=e)s=i,i=l;else break;let r=Sp[s?.emotion||"neutral"],a=Sp[i?.emotion||"neutral"],o=i?kt((e-i.start+.15)/.35):1,c={};for(let l of["brow","raise","eye","smile","tilt","down","open"])c[l]=Oc(r[l],a[l],o);return c.asym=Oc(r.asym||0,a.asym||0,o),c.emotion=i?.emotion||"neutral",c}var mb={kicker:"",title:"",sub:"",tone:"calm",progress:!1};function Dp(n,e){let t=n.cues.filter(o=>o.screen);if(!t.length)return{screen:{...mb,title:n.title},since:-9,progress:null,index:0};let i=0;for(;i+1<t.length&&t[i+1].start<=e;)i++;let s=t[i],r=i===0&&e<s.start?-9:s.start,a=t[i+1]?.start??n.duration;return{screen:s.screen,since:r,progress:s.screen.progress?kt((e-s.start)/Math.max(.5,a-s.start-.4)):null,index:i}}function Lp(n,e){e=gt(e,0,n.duration);let t=Cp(n,e),i=t?kt((e-t.start)/.3)*kt((t.end-e)/.25):0,s=pb(n,e);return{t:e,cue:t,energy:i,speaker:t?.speaker||null,shot:s.shot,subject:s.subject,other:s.other,cam:s.cam,shotStart:s.start,shotEnd:s.end,shotIndex:s.index,final:n.endTitle?kt((e-(n.duration-1.1))/.7):0}}var kc={X:{open:0,wide:1,round:0,teeth:0,tongue:0},A:{open:.04,wide:.95,round:0,teeth:0,tongue:0},B:{open:.32,wide:1.1,round:0,teeth:1,tongue:0},C:{open:.6,wide:1.12,round:0,teeth:1,tongue:0},D:{open:1,wide:1.18,round:0,teeth:1,tongue:.4},E:{open:.62,wide:.8,round:.6,teeth:0,tongue:0},F:{open:.36,wide:.55,round:1,teeth:0,tongue:0},G:{open:.2,wide:1.02,round:0,teeth:1,tongue:0},H:{open:.5,wide:1.04,round:0,teeth:1,tongue:1}},gb=kc.X;function Up(n,e,t){let i=Cp(n,e);if(!i||i.speaker!==t)return gb;let s=i.visemes;if(!s||!s.length)return null;let r=e-i.start,a=-1;for(let u=0,d=s.length-1;u<=d;){let p=u+d>>1;s[p][0]<=r?(a=p,u=p+1):d=p-1}let o=kc[a<0?"X":s[a][1]],c=kc[a<1?"X":s[a-1][1]],l=a<0?1:kt((r-s[a][0])/.06),h={};for(let u of["open","wide","round","tongue"])h[u]=c[u]+(o[u]-c[u])*l;return h.teeth=l>.5?o.teeth:c.teeth,h}function Np(n,e){if(!n?.words?.length)return-1;let t=e-n.start,i=-1;return n.words.forEach((s,r)=>{s[0]<=t+.03&&(i=r)}),i}var vb=/^(\w+)-(cu|ots)$/;function _b(n){let e={};for(let t of n.cast)e[t.id.toLowerCase()]=t.id,e[t.name.toLowerCase()]=t.id;return e}function Fp(n,e){let t=_b(e),i=[],s=null,r={};if(n.split(/\r?\n/).forEach((a,o)=>{let c=a.trim();if(!c)return;let l;if(l=c.match(/^#\s*(title|handle)\s*:\s*(.+)$/i)){r[l[1].toLowerCase()]=l[2].trim();return}if(c.startsWith("#"))return;if(l=c.match(/^>>\s*screen\s*(\w+)?\s*(\+progress)?\s*:\s*(.*)$/i)){let[d="",p="",g=""]=l[3].split("|").map(m=>m.trim()),v=Ap.includes((l[1]||"").toLowerCase())?l[1].toLowerCase():"calm";s={kicker:d.slice(0,40),title:p.slice(0,40),sub:g.slice(0,60),tone:v,progress:!!l[2]};return}if(!(l=c.match(/^([^\[:]+?)\s*(?:\[([^\]]*)\])?\s*:\s*(.+)$/)))throw Error(`Line ${o+1}: use NAME [emotion, action]: text`);let h=t[l[1].trim().toLowerCase()];if(!h)throw Error(`Line ${o+1}: unknown character "${l[1].trim()}". Add them in the Cast tab first.`);let u={id:i.length+1,speaker:h,text:l[3].trim().slice(0,160),emotion:"neutral",action:"none",shot:"auto",pause:.45};for(let d of(l[2]||"").split(",").map(p=>p.trim().toLowerCase()).filter(Boolean)){let p;if(zr.includes(d))u.emotion=d;else if(Vr.includes(d))u.action=d;else if(d.startsWith("pause"))u.pause=gt(Number(d.split(/[=\s]/).pop())||.45,0,3);else if(p=d.match(/^cam\s*=\s*(-?[\d.]+)\/(-?[\d.]+)\/([\d.]+)(?:\/([\d.]+))?$/))u.shot="custom",u.cam={...u.cam||{},yaw:Number(p[1]),pitch:Number(p[2]),dist:Number(p[3]),lens:Number(p[4]||50)};else if((p=d.match(/^move\s*=\s*(\w+)$/))&&Ep.includes(p[1]))u.cam={yaw:0,pitch:8,dist:4,lens:50,...u.cam||{},move:p[1]};else if((p=d.match(/^(\w+)(?::(.+))?$/))&&Hr.includes(p[1])&&p[1]!=="custom"){if(u.shot=p[1],p[2]){let g=t[p[2]];if(!g)throw Error(`Line ${o+1}: unknown character "${p[2]}" in camera tag.`);u.subject=g}}else if((p=d.match(vb))&&t[p[1]])u.shot=p[2],u.subject=t[p[1]];else if(t[d])u.shot="single",u.subject=t[d];else throw Error(`Line ${o+1}: unknown tag "${d}".`)}u.cam&&u.shot!=="custom"&&(u.shot="custom"),s&&(u.screen=s,s=null),i.push(u)}),!i.length)throw Error("The script has no dialogue lines.");return{meta:r,cues:xb(i)}}function xb(n,e=.8){let t=e;return n.map(i=>{let s=i.text.split(/\s+/).length,r=Math.max(1.1,s*.37+.35),a={...i,start:wp(t),end:wp(t+r)};return delete a.visemes,delete a.words,t+=r+(i.pause??.45),a})}function Op(n){let e=[`# title: ${n.title}`,`# handle: ${n.handle}`,""],t=i=>n.cast.find(s=>s.id===i)?.name||i;for(let i of n.cues){i.screen&&e.push(`>> SCREEN ${i.screen.tone}${i.screen.progress?" +progress":""}: ${i.screen.kicker} | ${i.screen.title} | ${i.screen.sub}`);let s=i.shot==="custom"?[`cam=${i.cam.yaw}/${i.cam.pitch}/${i.cam.dist}/${i.cam.lens}`,i.cam.move!=="auto"&&`move=${i.cam.move}`]:[i.shot!=="auto"&&(i.subject&&i.subject!==i.speaker?`${i.shot}:${t(i.subject).toLowerCase()}`:i.shot)],r=[i.emotion,i.action!=="none"&&i.action,...s,Math.abs((i.pause??.45)-.45)>.01&&`pause=${i.pause}`].filter(Boolean);e.push(`${t(i.speaker).toUpperCase()} [${r.join(", ")}]: ${i.text}`)}return e.join(`
`)}var wp=n=>Math.round(n*1e3)/1e3,yb=/^#[a-f\d]{6}$/i,bb=/^[a-z]{2}_[a-z]+$/,Mb=/^[A-Za-z][A-Za-z0-9_]{0,15}$/;function kp(n={}){let e={...Fc,...n};for(let[i,[s,r]]of Object.entries(Bc)){let a=Number(e[i]);if(!Number.isFinite(a))throw Error(`Invalid character ${i}.`);e[i]=Math.round(gt(a,s,r)*100)/100}for(let[i,s]of Object.entries(Us))if(!s.includes(e[i]))throw Error(`Unknown ${i.replace(/[A-Z]/g,r=>" "+r.toLowerCase())} "${e[i]}".`);for(let i of ub)if(!yb.test(e[i]))throw Error(`Invalid character colour (${i}).`);let t={};for(let i of Object.keys(Fc))t[i]=e[i];return t}function Bp(n,e="creator"){let t=Mp[e]||Mp.creator,i=new Set(n.cast.map(o=>o.id)),s=n.cast.length+1;for(;i.has("char"+s);)s++;let a={creator:"Kai",human:"Maya",robot:"Bolt",creature:"Pip",bot:"Dot"}[e]||"New";return n.cast.some(o=>o.name===a)&&(a+=" "+s),{id:"char"+s,name:a,kind:t.kind,voice:t.voice,look:kp(t.look)}}function Sb(n){let e=n.humanAppearance||{},t={textured:"chunky"}[e.hairStyle]||e.hairStyle||"chunky",i={shirt:"tshirt"}[e.outfit]||e.outfit||"hoodie";return[{id:"Ren",name:n.names?.Ren||"Ren",kind:["human","robot","creature"].includes(e.kind)?e.kind:"human",voice:n.voices?.Ren||"am_michael",look:{...Br.cast[0].look,...e.species&&{species:e.species},height:e.height??1,build:e.build??1,head:e.headWidth??1,hairStyle:Us.hairStyle.includes(t)?t:"chunky",topStyle:Us.topStyle.includes(i)?i:"hoodie",facialHair:Us.facialHair.includes(e.facialHair)?e.facialHair:"none",glasses:n.glasses===!1?"none":"round",skin:n.skinColor||"#c78a65",hair:n.hairColor||"#292026",eyes:e.eyeColor||"#211b23",top:n.humanColor||"#8364c5",bottom:e.pantsColor||"#19222d",shoes:e.shoeColor||"#d6cbb5"}},{id:"Mica",name:n.names?.Mica||"Mica",kind:"bot",voice:n.voices?.Mica||"af_heart",look:{...Br.cast[1].look,top:n.robotColor||"#ee704e",screen:n.faceColor||"#94f3d4"}}]}var Tp={ren:["single","Ren"],mica:["single","Mica"],"ren-cu":["cu","Ren"],"mica-cu":["cu","Mica"],"ren-ots":["ots","Ren"],"mica-ots":["ots","Mica"]};function Ka(n){if(!n||![1,2,3].includes(n.version))throw Error("This is not an Ember Take project.");if(!Number.isFinite(n.duration)||n.duration<5||n.duration>90)throw Error("Duration must be 5\u201390 seconds.");if(!Array.isArray(n.cues)||n.cues.length>60)throw Error("Use at most 60 dialogue lines.");let e=It({...Br,cues:[]}),t=It(n),i={...e,...t,version:3,fps:30};for(let o of["names","voices","humanColor","robotColor","hairColor","skinColor","faceColor","glasses","humanAppearance"])delete i[o];i.title=String(i.title||"Untitled film").slice(0,70),i.handle=String(i.handle??"").slice(0,24);let s=Array.isArray(t.cast)?t.cast:Sb(t);if(!s.length||s.length>4)throw Error("A film needs 1 to 4 characters.");let r=new Set;i.cast=s.map((o,c)=>{if(!Mb.test(o.id||"")||r.has(o.id))throw Error(`Character ${c+1}: invalid or duplicate id.`);if(r.add(o.id),!lb.includes(o.kind))throw Error(`Character ${c+1}: unknown type "${o.kind}".`);return{id:o.id,name:String(o.name||o.id).trim().slice(0,16)||o.id,kind:o.kind,voice:bb.test(o.voice)?o.voice:"am_michael",look:kp(o.look)}}),i.warmth=gt(Number(i.warmth)||1,.5,1.5),i.musicVolume=gt(Number(i.musicVolume??.6),0,1);for(let o of["music","sfx","captions","dof","intro"])i[o]=!!i[o];hb.includes(i.captionStyle)||(i.captionStyle="bold"),i.endTitle=String(i.endTitle||"").slice(0,40),i.endSub=String(i.endSub||"").slice(0,80),["kokoro","chatterbox"].includes(i.voiceEngine)||(i.voiceEngine="kokoro");for(let[o,c]of[["voiceData",16e6],["musicData",14e6]])if(i[o]!==null&&(typeof i[o]!="string"||!/^data:audio\//.test(i[o])||i[o].length>c))throw Error(`Invalid or oversized ${o==="voiceData"?"voice recording":"music track"}.`);let a=new Set;i.cues=i.cues.map((o,c)=>{if(!Number.isFinite(o.start)||!Number.isFinite(o.end)||o.start<0||o.end>i.duration||o.end-o.start<.3)throw Error(`Line ${c+1}: check the start and end times.`);if(!r.has(o.speaker))throw Error(`Line ${c+1}: "${o.speaker}" is not in the cast.`);let l={...o,action:o.action??"none",pause:gt(Number(o.pause??.45),0,3)};if(Tp[l.shot]){let[u,d]=Tp[l.shot];l.shot=u,l.subject=d}if(!Hr.includes(l.shot))throw Error(`Line ${c+1}: unknown camera "${l.shot}".`);if(l.subject!==void 0&&!r.has(l.subject)&&!(l.subject==="all"&&l.shot==="custom")&&delete l.subject,l.shot==="custom"){let u=l.cam||{};l.cam={yaw:Math.round(((Number(u.yaw)||0)+540)%360-180),pitch:gt(Number(u.pitch??8),-15,70),dist:gt(Number(u.dist??4),1.2,16),lens:gt(Number(u.lens??50),18,85),move:Ep.includes(u.move)?u.move:"auto"}}else delete l.cam;if(!zr.includes(l.emotion))throw Error(`Line ${c+1}: unknown expression.`);if(!Vr.includes(l.action))throw Error(`Line ${c+1}: unknown action.`);if(typeof l.text!="string"||l.text.length>160)throw Error("Keep each caption under 160 characters.");let h=Number(o.id)||c+1;if(a.has(h))throw Error("Duplicate line identifiers.");if(a.add(h),l.visemes!==void 0&&(!Array.isArray(l.visemes)||l.visemes.length>2e3||!l.visemes.every(u=>Array.isArray(u)&&Number.isFinite(u[0])&&u[1]in kc)))throw Error(`Line ${c+1}: invalid lip-sync data.`);if(l.words!==void 0&&(!Array.isArray(l.words)||l.words.length>200||!l.words.every(u=>Array.isArray(u)&&Number.isFinite(u[0])&&Number.isFinite(u[1])&&typeof u[2]=="string")))throw Error(`Line ${c+1}: invalid word timings.`);if(l.screen==null)delete l.screen;else{let u=l.screen;if(!Ap.includes(u.tone))throw Error(`Line ${c+1}: unknown screen tone.`);l.screen={kicker:String(u.kicker||"").slice(0,40),title:String(u.title||"").slice(0,40),sub:String(u.sub||"").slice(0,60),tone:u.tone,progress:!!u.progress}}return{...l,id:h,text:l.text.trim()}}).sort((o,c)=>o.start-c.start);for(let o=1;o<i.cues.length;o++)if(i.cues[o].start<i.cues[o-1].end)throw Error("Dialogue lines must not overlap.");return i}var Nt=Math.PI,vt=(n=0,e=0,t=0)=>new P(n,e,t);function St(n,{flat:e=!0,rough:t=.78,metal:i=0,emissive:s=null,glow:r=1}={}){return new $i({color:n,roughness:t,metalness:i,flatShading:e,...s&&{emissive:s,emissiveIntensity:r}})}function Pt(n,e,t,i=0,s=0,r=0){let a=new ft(e,t);return a.position.set(i,s,r),a.castShadow=!0,a.receiveShadow=!0,n.add(a),a}var ht=(n,e,t,i,s,r,a,o,c=.05)=>Pt(n,new Nr(e,t,i,1,c),s,r,a,o),yt=(n,e,t,i,s,r,a=8,o=6)=>Pt(n,new Ms(e,a,o),t,i,s,r),Ht=(n,e,t,i,s,r,a,o,c=8)=>Pt(n,new Ci(e,t,i,c),s,r,a,o),ns=(n,e,t,i,s,r,a,o=7)=>Pt(n,new Pa(e,t,2,o),i,s,r,a),is=(n,e,t,i,s,r,a,o=6)=>Pt(n,new ys(e,t,o),i,s,r,a),Jt=(n,e=0,t=0,i=0)=>{let s=new Vn;return s.position.set(e,t,i),n.add(s),s};function Gr(n,e,t,i=.015){let s=new Yi(e.map(r=>vt(...r)));return Pt(n,new Ss(s,10,i,5,!1),t)}function Zp(n,e){let t=document.createElement("canvas");t.width=n,t.height=e;let i=new ri(t);return i.colorSpace=Zt,{canvas:t,ctx:t.getContext("2d"),texture:i}}function ss(n,e,t){let i=n.attributes.position,s=new Map;for(let r=0;r<i.count;r++){let a=i.getX(r),o=i.getY(r),c=i.getZ(r),l=`${a.toFixed(3)},${o.toFixed(3)},${c.toFixed(3)}`,h=s.get(l);if(h===void 0){let u=Math.sin(a*12.9898+o*78.233+c*37.719+t)*43758.5453;h=1+(u-Math.floor(u)-.5)*e,s.set(l,h)}i.setXYZ(r,a*h,o*h,c*h)}return n.computeVertexNormals(),n}var Ns=n=>{let e=Math.sin(n*127.1+311.7)*43758.5453;return e-Math.floor(e)},zp={humanoid:{leg:1.05,hipX:.2,thigh:.52,shin:.48,chestY:.1,shoulderX:.47,shoulderY:.95,neckY:1.04,headY:.06,headC:.58,upper:.54,fore:.5,hand:.16,anchors:{forehead:[0,.76,.5],chin:[.04,.2,.4],face:[0,.6,.62],ear:[.56,.6,0]}},bot:{leg:.52,hipX:.3,thigh:.27,shin:.27,chestY:.05,shoulderX:.62,shoulderY:.7,neckY:.86,headY:.04,headC:.43,upper:.38,fore:.36,hand:.1,anchors:{forehead:[.12,.18,.5],chin:[.08,.02,.5],face:[0,.45,.62],ear:[.7,.43,0]}}};function jp(n){let e=n.look,t=n.kind,i=t==="bot"?zp.bot:zp.humanoid,s=e.build,r=[...n.id].reduce((g,v)=>g+v.charCodeAt(0),0),a={skin:St(e.skin,{rough:t==="creature"?1:.82}),hair:St(e.hair,{rough:.95}),top:St(e.top,{rough:t==="robot"||t==="bot"?.42:.9,metal:t==="robot"?.55:t==="bot"?.18:0}),accent:St(e.accent,{rough:.6,metal:t==="robot"||t==="bot"?.6:0}),bottom:St(e.bottom,{rough:.92}),shoes:St(e.shoes,{rough:.7}),eye:St(e.eyes,{rough:.18,flat:!1}),white:St("#efe8dc",{rough:.35,flat:!1}),shine:St("#ffffff",{emissive:"#ffffff",glow:.9,flat:!1}),dark:St("#1b1716",{rough:.5}),screen:St("#0f2221",{rough:.25,metal:.2})},o=new Vn,c=Jt(o,0,i.leg,0),l=Jt(c,0,i.chestY,0),h=Jt(l,0,i.neckY,0),u=Jt(h,0,i.headY,0);o.scale.setScalar(e.height),u.scale.setScalar(e.head);let d={member:n,kind:t,plan:i,root:o,hips:c,chest:l,neck:h,head:u,arms:[],legs:[],feet:[],M:a,seed:r,face:null,anchors:{}},p=t==="robot"||t==="bot";if(t==="bot"){ht(l,1.12,.78,.72,a.top,0,.43,0,.14),ht(l,.8,.41,.08,a.accent,0,.44,.385,.05),Ht(l,.11,.11,.02,a.white,-.23,.44,.45,12).rotation.x=Nt/2;for(let g=0;g<3;g++)ht(l,.22,.025,.03,a.white,.17,.36+g*.08,.443,.008);ht(c,.7,.16,.5,a.accent,0,.02,0,.05)}else if(t==="robot")ht(l,.98*s,1,.62,a.top,0,.5,0,.12),ht(l,.62*s,.42,.06,a.screen,0,.62,.32,.05),Ht(l,.08,.08,.02,a.accent,0,.62,.36,10).rotation.x=Nt/2,ht(c,.72*s,.36,.5,a.accent,0,0,0,.08),Ht(l,.16,.18,.18,a.accent,0,1.02,0,10);else{let g=Ht(l,.5*s,.42*s,1.05,a.top,0,.52,0,8);if(g.scale.z=.92,ht(c,.72*s,.38,.5,a.bottom,0,0,0,.12),Ht(l,.17,.19,.2,a.skin,0,1.04,0,8),e.topStyle==="hoodie"){yt(l,.47*s,a.top,0,1,-.1,9,6).scale.set(1,.55,.9),ht(l,.6*s,.3,.12,St(hi(e.top,-.12)),0,.24,.42,.06);for(let m of[-1,1])Gr(l,[[m*.13,1,.36],[m*.15,.72,.47],[m*.16,.5,.47]],a.accent,.016);Gr(l,[[-.25,.36,.46],[0,.3,.48],[.25,.36,.46]],St(hi(e.top,-.2)),.012)}else if(e.topStyle==="tshirt")Ht(l,.21,.23,.06,a.top,0,1.01,0,10),ht(l,.24,.07,.03,a.accent,.2*s,.75,.44,.01);else if(e.topStyle==="jacket"){ht(l,.3,.98,.04,a.accent,0,.52,.42,.02);for(let v of[-1,1]){let m=ht(l,.12,.42,.04,St(hi(e.top,.1)),v*.17,.8,.43,.015);m.rotation.z=v*.25}ht(l,.86*s,.06,.5,St(hi(e.top,-.2)),0,.03,0,.02)}else{ht(l,.26,.5,.04,St("#f0ece4"),0,.78,.42,.02),ht(l,.07,.42,.03,a.accent,0,.72,.45,.015);for(let v of[-1,1]){let m=ht(l,.13,.5,.04,St(hi(e.top,.12)),v*.15,.78,.43,.015);m.rotation.z=v*.32}}}for(let g of[-1,1]){let v=Jt(l,g*(t==="bot"?i.shoulderX:i.shoulderX*s),i.shoulderY,0),m=Jt(v),f=Jt(m,0,-i.upper,0),b=Jt(f,0,-i.fore,0),S=e.topStyle==="tshirt"&&t!=="robot"&&t!=="bot";t==="bot"?(yt(v,.14,a.accent,0,0,0,10,8),Ht(m,.09,.09,i.upper-.06,a.white,0,-i.upper/2,0,8),yt(f,.12,a.accent,0,0,0,10,8),Ht(f,.1,.1,i.fore-.08,a.top,0,-i.fore/2,0,8)):t==="robot"?(yt(v,.19*s,a.accent,0,0,0,10,8),Ht(m,.12*s,.11*s,i.upper-.08,a.top,0,-i.upper/2,0,8),yt(f,.13*s,a.accent,0,0,0,10,8),Ht(f,.11*s,.1*s,i.fore-.06,a.top,0,-i.fore/2,0,8)):(yt(v,.2*s,a.top,0,0,0,8,6),ns(m,.165*s,i.upper-.2,S?a.skin:a.top,0,-i.upper/2,0),S&&Ht(m,.19*s,.18*s,.2,a.top,0,-.08,0,8),ns(f,.15*s,i.fore-.18,S?a.skin:a.top,0,-i.fore/2,0),S||Ht(f,.155*s,.155*s,.1,St(hi(e.top,-.15)),0,-i.fore+.06,0,8));let _=p?a.accent:a.skin,M=t==="bot"?.8:1;yt(b,.13*M,_,0,-.08*M,0,7,5).scale.set(.72,1,.92);let A=Jt(b,0,-.16*M,-.015),R=Jt(b,0,-.16*M,.075*M),x=Jt(b,0,-.06*M,.1*M);ht(A,.1*M,.15*M,.13*M,_,0,-.07*M,-.01,.04*M),ns(R,.035*M,.09*M,_,0,-.07*M,0,5),ns(x,.036*M,.08*M,_,0,-.05*M,.02,5).rotation.x=-.5,d.arms.push({s:g,shoulder:v,upper:m,fore:f,hand:b,fingers:A,index:R,thumb:x,lenU:i.upper,lenF:i.fore,handOff:i.hand})}for(let g of[-1,1]){let v=Jt(c,g*i.hipX*(t==="bot"?1:s),t==="bot"?0:-.08,0),m=Jt(v),f=Jt(m,0,-i.thigh,0),b=.07,S=Jt(o,g*i.hipX*(t==="bot"?1:s),b,.04);t==="bot"?(Ht(m,.1,.1,i.thigh,a.accent,0,-i.thigh/2,0,8),Ht(f,.1,.1,i.shin,a.accent,0,-i.shin/2,0,8),ht(S,.43,.25,.6,a.top,0,.06,.08,.07),ht(S,.45,.065,.63,a.accent,0,-.05,.08,.025)):(ns(m,.17*s,i.thigh-.2,p?a.top:a.bottom,0,-i.thigh/2,0),ns(f,.15*s,i.shin-.16,p?a.top:a.bottom,0,-i.shin/2,0),p&&yt(f,.14*s,a.accent,0,0,0,8,6),ht(S,.36*s,.2,.58,a.shoes,0,.02,.1,.08),ht(S,.37*s,.06,.59,St(hi(e.shoes,-.35)),0,-.07,.1,.02)),d.legs.push({s:g,shoulder:v,upper:m,fore:f,lenU:i.thigh,lenF:i.shin-(t==="bot"?0:.05),handOff:0}),d.feet.push(S)}wb(d,e,a,r);for(let[g,v]of Object.entries(i.anchors))d.anchors[g]=vt(...v);return t==="creature"&&Cb(d,e,a),o.traverse(g=>{g.isMesh&&(g.userData.character=n.id)}),d}function hi(n,e){let t=new De(n),i={};return t.getHSL(i),t.setHSL(i.h,i.s,gt(i.l+e,0,1)),"#"+t.getHexString()}function wb(n,e,t,i){let{head:s,kind:r,plan:a}=n,o=a.headC;if(r==="bot"){ht(s,1.36,.94,.87,t.top,0,o,0,.14),ht(s,1.15,.7,.085,t.accent,0,o+.02,.455,.1),ht(s,1.04,.58,.035,t.screen,0,o+.02,.51,.08);for(let m of[-1,1])Ht(s,.18,.18,.12,t.accent,m*.73,o,0,12).rotation.z=Nt/2,Ht(s,.12,.12,.13,t.white,m*.79,o,0,12).rotation.z=Nt/2;Ht(s,.023,.023,.32,t.accent,.32,o+.61,0,6),n.glow=St(e.screen,{emissive:e.screen,glow:1.1,flat:!1}),yt(s,.09,n.glow,.32,o+.81,0,10,8),Hp(n,e,.98,.54,vt(0,o+.02,.531));return}if(r==="robot"){ht(s,1,.95,.85,t.top,0,o,0,.16),ht(s,.84,.56,.05,t.screen,0,o+.02,.43,.07);for(let m of[-1,1])Ht(s,.13,.13,.12,t.accent,m*.53,o,0,10).rotation.z=Nt/2;Ht(s,.02,.02,.28,t.accent,.25,o+.6,0,6),n.glow=St(e.screen,{emissive:e.screen,glow:1.1,flat:!1}),yt(s,.07,n.glow,.25,o+.76,0,10,8),Hp(n,e,.8,.5,vt(0,o+.02,.46)),Vp(n,e,t,o,.5);return}let c=ss(new mn(.55,2),.045,i);Pt(s,c,t.skin,0,o,0).scale.set(1,1.02,.94);let h=r==="creature"&&e.species!=="dragon";n.eyes=[],n.pupils=[],n.brows=[];for(let m of[-1,1]){let f=Jt(s,m*.2,o+.07,.43);n.eyes.push(f);let b=Jt(f);if(n.pupils.push(b),e.eyeStyle==="glossy")yt(b,.095,t.eye,0,0,.03,12,10).scale.set(.9,1.18,.5),yt(b,.028,t.shine,-.03,.045,.08,8,6),yt(b,.012,t.shine,.025,-.03,.08,6,4);else{yt(f,.112,t.white,0,0,0,12,10).scale.set(1,1.12,.55);let _=yt(b,.065,t.eye,0,-.01,.055,12,10);_.scale.z=.5,yt(b,.03,t.dark,0,-.01,.075,8,6).scale.z=.4,yt(b,.016,t.shine,-.018,.015,.088,6,4)}n.brows.push(ht(s,.22,.06,.06,t.hair,m*.21,o+.27,.45,.025))}if(!h){let m=is(s,.075,.16,t.skin,0,o-.04,.52,3);m.rotation.x=Nt/2,m.rotation.y=Nt;for(let f of[-1,1])yt(s,.12,t.skin,f*.54,o-.02,-.02,6,5).scale.set(.6,1,.9)}let u=Zp(256,128),d=.5,p=.8,g=new Ci(d,d,.2,12,1,!0,-p/2,p);g.translate(0,0,-d);let v=new ft(g,new $i({map:u.texture,transparent:!0,alphaTest:.04,roughness:.55,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}));v.position.set(0,o-.27,h?.66:.47),v.rotation.x=h?.05:.25,v.renderOrder=2,h&&v.scale.set(.8,.8,.8),s.add(v),n.face={type:"drawn",tex:u,last:""},r==="creature"?Ab(n,e,t,o):(Tb(n,e,t,o,i),Eb(n,e,t,o)),Vp(n,e,t,o,.52)}function Tb(n,e,t,i,s){let{head:r}=n,a=e.hairStyle;if(a==="bald")return;let o=Pt(r,ss(new mn(.585,1),.06,s+3),t.hair,0,i+.1,-.07);if(o.scale.set(1,a==="short"||a==="mohawk"?.72:.88,.97),a==="mohawk"){o.scale.set(.98,.6,.95);for(let c=0;c<6;c++){let l=is(r,.1,.32,t.hair,0,i+.55+Math.sin(c/5*Nt)*.06,.32-c*.14,4);l.rotation.x=-.3-c*.18}return}if(a==="shaggy"){o.scale.set(1.02,.92,1);let c=.6,l=(u,d,p,g,v)=>{let m=vt(Math.sin(u)*Math.cos(d),Math.sin(d),Math.cos(u)*Math.cos(d)),f=vt(-Math.sin(u)*Math.sin(d),Math.cos(d),-Math.cos(u)*Math.sin(d)),b=vt().crossVectors(f,m),S=new at().makeBasis(b,f,m),_=Pt(r,new bs(.17,0),t.hair,m.x*c,i+.08+m.y*c*.95,m.z*c*.96-.03);_.quaternion.setFromRotationMatrix(S),_.rotateZ((Ns(v)-.5)*.5),_.scale.set(g*(.85+Ns(v+1)*.3),p*(.85+Ns(v+2)*.3),.42)},h=s;for(let u=0;u<9;u++)l(-.85+u*.21,.62+Ns(h+u)*.12,2.1,1.25,h+=3);for(let u of[-1,1])for(let d=0;d<5;d++)l(u*(1.05+d*.32),.38+Ns(h+d)*.2,2.3,1.3,h+=3);for(let u=0;u<7;u++)l(Nt-.9+u*.3,.3+Ns(h+u)*.25,2.4,1.35,h+=3);for(let u=0;u<10;u++)l(u*.63,1.05+Ns(h+u)*.25,1.8,1.5,h+=3)}else if(a==="chunky"){for(let l=0;l<9;l++){let h=Pt(r,new Da(.22+l%3*.035,0),t.hair,-.4+l%5*.2,i+.5+Math.sin(l*1.7)*.09,.25-Math.floor(l/5)*.32);h.rotation.set(l*.4,l*.8,l*.6),h.scale.set(1.05,1.25,.85)}let c=is(r,.27,.53,t.hair,-.19,i+.68,.23,4);c.rotation.z=-.43}else if(a==="curly")for(let c=0;c<34;c++){let l=c*2.39996,h=.12+.42*Math.sqrt(c/34);Pt(r,new mn(.12,0),t.hair,Math.cos(l)*h,i+.5+.12*Math.cos(h*2.5),Math.sin(l)*h*.9-.04)}else if(a==="long"){for(let c=0;c<13;c++){let l=Nt*.5+c/12*Nt;Pt(r,new bs(.17,0),t.hair,Math.cos(l)*.5,i-.25,Math.sin(l)*.4-.12).scale.set(.8,2.8,.7)}for(let c=0;c<6;c++){let l=Pt(r,new bs(.13,0),t.hair,-.32+c*.13,i+.42,.4);l.scale.set(1,1.8,.5),l.rotation.x=.5}}else a==="bun"&&Pt(r,new mn(.2,1),t.hair,0,i+.62,-.22)}function Eb(n,e,t,i){let{head:s}=n;if(e.facialHair!=="none")if(e.facialHair==="beard"){Pt(s,ss(new mn(.3,1),.08,9),t.hair,0,i-.36,.24).scale.set(1.15,.75,.75);for(let a of[-1,1])yt(s,.15,t.hair,a*.36,i-.2,.26,6,5).scale.set(.8,1.5,.7)}else if(e.facialHair==="mustache")for(let r of[-1,1]){let a=ht(s,.17,.05,.05,t.hair,r*.08,i-.16,.5,.02);a.rotation.z=r*-.22}else{let r=St(hi(e.skin,-.18),{rough:1}),a=ss(new mn(.31,1),.03,4);Pt(s,a,r,0,i-.3,.2).scale.set(1.18,.7,.8)}}function Vp(n,e,t,i,s){let{head:r}=n;if(e.glasses!=="none"){let a=St("#c4a373",{rough:.3,metal:.7,flat:!1});for(let o of[-1,1]){if(e.glasses==="round"){let c=Pt(r,new Ri(.16,.02,6,20),a,o*.2,i+.07,s)}else for(let[c,l,h,u]of[[.32,.03,0,.11],[.32,.03,0,-.1],[.03,.22,-.155,0],[.03,.22,.155,0]])ht(r,c,l,.03,a,o*.2+h,i+.07+u,s,.01);Gr(r,[[o*.36,i+.09,s-.03],[o*.5,i+.09,.25],[o*.52,i+.08,0]],a,.016)}Gr(r,[[-.05,i+.1,s+.01],[0,i+.13,s+.03],[.05,i+.1,s+.01]],a,.015)}if(e.hat==="cap"){yt(r,.6,t.accent,0,i+.22,-.03,10,6).scale.set(1,.62,1);let o=ht(r,.7,.05,.42,t.accent,0,i+.3,.5,.02);o.rotation.x=-.12}else if(e.hat==="beanie")Pt(r,ss(new mn(.6,1),.03,5),t.accent,0,i+.25,-.03).scale.set(1,.72,1),Pt(r,new Ri(.56,.07,6,16),St(hi(e.accent,-.12)),0,i+.12,-.03).rotation.x=Nt/2,yt(r,.1,St(hi(e.accent,.1)),0,i+.72,-.03,6,5);else if(e.hat==="headphones"){let a=Pt(r,new Ri(.6,.04,6,20,Nt),t.dark,0,i+.05,0);for(let o of[-1,1]){let c=Ht(r,.17,.17,.12,t.accent,o*.6,i,0,12);c.rotation.z=Nt/2}a.rotation.z=0}}function Ab(n,e,t,i){let{head:s}=n,r=t.accent,a=e.species;if(a!=="dragon"){if(Pt(s,ss(new mn(.25,1),.05,2),t.skin,0,i-.2,.45).scale.set(1.35,.7,.82),yt(s,.065,t.dark,0,i-.08,.67,8,6).scale.set(1.3,.8,.7),a==="cat")for(let l of[-1,1])for(let h=-1;h<=1;h++)Gr(s,[[l*.18,i-.18+h*.035,.62],[l*.5,i-.2+h*.08,.6]],St("#efe2d2",{flat:!1}),.005)}else{Pt(s,ss(new mn(.26,1),.06,6),t.skin,0,i-.18,.44).scale.set(1.15,.72,1);for(let c of[-1,1])yt(s,.03,t.dark,c*.09,i-.08,.69,6,4)}for(let o of[-1,1])if(a==="fox"||a==="cat"){let c=is(s,a==="cat"?.19:.22,a==="cat"?.36:.5,t.skin,o*.36,i+.62,-.05,4);c.rotation.z=-o*.3;let l=is(s,.11,a==="cat"?.22:.32,r,o*.36,i+.6,.04,4);l.rotation.z=-o*.3}else if(a==="bunny"){let c=ns(s,.1,.55,t.skin,o*.2,i+.92,-.05,6);c.rotation.z=-o*.18,c.scale.z=.55;let l=ns(s,.05,.45,r,o*.2,i+.92,0,5);l.rotation.z=-o*.18,l.scale.z=.4}else a==="bear"?(yt(s,.17,t.skin,o*.4,i+.48,-.02,8,6),yt(s,.09,r,o*.4,i+.48,.08,6,5)):is(s,.08,.38,t.accent,o*.27,i+.6,-.1,5).rotation.set(-.5,0,-o*.35)}function Cb(n,e,t){let{hips:i}=n,s=e.species,r=Jt(i,0,.05,-.3);if(r.rotation.x=-.5,n.tail=r,s==="fox")Pt(r,ss(new mn(.3,1),.08,3),t.skin,0,-.02,-.45).scale.set(.7,.7,1.7),Pt(r,new mn(.17,1),t.accent,0,.02,-.9).scale.set(.9,.9,1.1);else if(s==="cat")Gr(r,[[0,0,0],[0,.05,-.4],[.1,.35,-.62],[.12,.58,-.52]],t.skin,.06);else if(s==="bunny")yt(r,.16,t.accent,0,0,-.08,8,6);else if(s==="bear")yt(r,.11,t.skin,0,0,-.05,6,5);else{let a=is(r,.2,1.1,t.skin,0,0,-.55,6);a.rotation.x=-Nt/2;for(let o=0;o<4;o++){let c=is(r,.07,.18,t.accent,0,.14-o*.02,-.15-o*.25,4);c.rotation.x=-.4}}}function Hp(n,e,t,i,s){let r=Zp(512,288),a=new ft(new Gn(t,i),new Sn({map:r.texture,transparent:!0,toneMapped:!1}));a.position.copy(s),n.head.add(a),n.face={type:"led",tex:r,last:"",color:e.screen}}var Kp=n=>Math.round(n*100)/100;function Jp(n,e,t,i,s,r){let a=n.face;if(a.type==="led")return Rb(a,e,t,i,s,r);for(let v=0;v<2;v++){let m=v===0?1:-1;n.eyes[v].scale.y=Math.max(.08,t.eye*i),n.brows[v].rotation.z=m*t.brow,n.brows[v].position.y=n.plan.headC+.27+t.raise+(t.asym&&v===0?.05*t.asym:0)-Math.max(0,-t.brow)*.03,n.pupils[v].position.set(s*.022,0,0)}let o=gt(e.open+t.open*(1-e.open),0,1),c=[o,e.wide,e.round,e.teeth,e.tongue,t.smile].map(Kp).join();if(c===a.last)return;a.last=c;let l=a.tex.ctx,h=128,u=50,d=52*e.wide*(1-e.round*.38)*(1+Math.max(0,t.smile)*.12),p=o*85,g=t.smile*12*(1-o*.5);if(l.clearRect(0,0,256,128),l.lineCap="round",l.lineJoin="round",p<5)l.strokeStyle="#5c2721",l.lineWidth=6,l.beginPath(),l.moveTo(h-d,u-g),l.quadraticCurveTo(h,u+g*1.1,h+d,u-g),l.stroke(),l.strokeStyle="rgba(140,62,52,.55)",l.lineWidth=4,l.beginPath(),l.moveTo(h-d*.55,u+7-g*.2),l.quadraticCurveTo(h,u+11+g*.6,h+d*.55,u+7-g*.2),l.stroke();else{let v=e.round,m=u-p*(.42+v*.08),f=u+p*(.62+v*.1),b=h-d,S=h+d,_=u-g*.8,M=()=>{l.beginPath(),l.moveTo(b,_),l.bezierCurveTo(h-d*(.55-v*.25),m,h+d*(.55-v*.25),m,S,_),l.bezierCurveTo(h+d*(.6+v*.2),f+g*.4,h-d*(.6+v*.2),f+g*.4,b,_),l.closePath()};M(),l.fillStyle="#2a0c0b",l.fill(),l.save(),l.clip(),e.tongue>.05&&(l.fillStyle="#9c4643",l.beginPath(),l.ellipse(h,f+p*.12,d*.5,p*(.18+e.tongue*.16),0,0,Nt*2),l.fill()),e.teeth&&(l.fillStyle="#f4ebdf",l.fillRect(b,m-4,d*2,Math.min(16,p*.26)+4)),l.restore(),M(),l.strokeStyle="#6d2c25",l.lineWidth=4.5,l.stroke(),l.strokeStyle="rgba(160,76,64,.75)",l.lineWidth=5,l.beginPath(),l.moveTo(h-d*.7,f-p*.05),l.quadraticCurveTo(h,f+6,h+d*.7,f-p*.05),l.stroke()}a.tex.texture.needsUpdate=!0}function Gp(n,e,t,i,s,r){n.beginPath(),n.roundRect(e-i/2,t-s/2,i,s,Math.min(r,i/2,s/2))}function Rb(n,e,t,i,s,r){let a=[e.open,e.wide,e.round,t.eye*i,t.smile,t.brow,t.asym,s].map(Kp).join()+t.emotion+(t.emotion==="idea"?Math.floor(r*6):0);if(a===n.last)return;n.last=a;let o=n.tex.ctx,c=n.color,l=512,h=288;o.clearRect(0,0,l,h),o.fillStyle=c,o.strokeStyle=c,o.lineCap="round",o.shadowColor=c,o.shadowBlur=14;let u=118,d=74*t.eye*i,p=s*16;for(let m of[-1,1]){let f=256+m*104+p,b=t.asym&&m===1?1.18:1,S=50*b,_=Math.max(6,d*b);if(t.emotion==="happy"&&i>.5){o.lineWidth=13,o.beginPath(),o.arc(f,u+16,30,Nt*1.1,Nt*1.9),o.stroke();continue}if(t.emotion==="surprised"){o.beginPath(),o.ellipse(f,u,32*Math.min(1.2,i*1.2),Math.max(5,40*i),0,0,Nt*2),o.fill();continue}if(Gp(o,f,u,S,_,14),o.fill(),Math.abs(t.brow)>.05){o.save(),o.globalCompositeOperation="destination-out",o.shadowBlur=0;let M=Math.abs(t.brow)*80,E=f-m*S/2,A=f+m*S/2,R=u-_/2-2;o.beginPath(),t.brow<0?(o.moveTo(E-m*4,R),o.lineTo(E-m*4,R+M),o.lineTo(A+m*4,R-2)):(o.moveTo(A+m*4,R),o.lineTo(A+m*4,R+M),o.lineTo(E-m*4,R-2)),o.closePath(),o.fill(),o.restore()}if(t.emotion==="idea"){let M=.6+.4*Math.sin(r*9+m);o.lineWidth=5,o.beginPath(),o.moveTo(f+m*36,u-58-8*M),o.lineTo(f+m*36,u-38+8*M),o.moveTo(f+m*26-8*M,u-48),o.lineTo(f+m*46+8*M,u-48),o.stroke()}}let g=214,v=gt(e.open+t.open*(1-e.open),0,1);if(v<.08){o.lineWidth=10;let m=t.smile*20;o.beginPath(),o.moveTo(216,g-m),o.quadraticCurveTo(256,g+m*1.3,296,g-m),o.stroke()}else e.round>.5?(o.beginPath(),o.ellipse(256,g,18+22*(1-e.round*.4),8+v*26,0,0,Nt*2),o.fill()):(Gp(o,256,g,46+50*e.wide*(1-e.round*.3),8+v*38,12),o.fill());o.shadowBlur=0,o.fillStyle="rgba(0,0,0,.16)";for(let m=0;m<h;m+=6)o.fillRect(0,m,l,2);n.tex.texture.needsUpdate=!0}var Ib=vt(),Pb=vt(),Db=vt(),Lb=vt(),Ub=vt(),Nb=vt(),Fb=vt(),Ob=vt(),kb=vt(),Bb=vt(),zb=vt(),Wp=new at;function Xp(n,e,t){let i=n.shoulder;i.updateWorldMatrix(!0,!1);let s=i.worldToLocal(Ib.copy(e)),r=i.worldToLocal(Pb.copy(t)),a=n.upper.position,o=n.lenU,c=n.lenF+n.handOff,l=Db.copy(s).sub(a),h=l.length();l.normalize(),h=gt(h,Math.abs(o-c)+.02,o+c-.002);let u=gt((o*o+h*h-c*c)/(2*o*h),-1,1),d=Math.sqrt(1-u*u),p=Lb.copy(r).sub(a);p.addScaledVector(l,-p.dot(l)),p.lengthSq()<1e-8&&p.set(0,0,-1).addScaledVector(l,l.z),p.normalize();let g=Ub.copy(l).multiplyScalar(u).addScaledVector(p,d),v=Nb.copy(a).addScaledVector(g,o),m=Fb.copy(a).addScaledVector(l,h),f=Ob.copy(m).sub(v).normalize(),b=kb.copy(f).addScaledVector(g,-f.dot(g));b.lengthSq()<1e-8&&b.copy(p).negate(),b.normalize();let S=zb.copy(g).negate(),_=Bb.crossVectors(S,b);Wp.makeBasis(_,S,b),n.upper.quaternion.setFromRotationMatrix(Wp),n.fore.rotation.set(-Math.acos(gt(g.dot(f),-1,1)),0,0)}function Vb(n,e=vt()){return n.hand?n.hand.updateWorldMatrix(!0,!1):n.fore.updateWorldMatrix(!0,!1),(n.hand||n.fore).localToWorld(e.set(0,n.hand?-n.handOff:-n.lenF,0))}var qp={relaxed:[.55,.45,.2],fist:[1.6,1.6,.9],point:[1.6,0,.7],open:[.05,0,-.35],thumbsup:[1.6,1.6,-1.4],cup:[.35,.25,.1]},Hb=n=>1+(1.4+1)*Math.pow(n-1,3)+1.4*Math.pow(n-1,2);function Gb(n,e,t,i){let s=i.m,r=s.reach,a=i.beat,o=1,c=(l,h=1)=>Math.sin(e*l)*h;switch(n){case"explain":return{arms:[{c:[-s.sx*.7,s.sy-r*.62+a*.1,r*.62+a*.06],shape:"open",wrist:[-.5,0,.9]},{c:[s.sx*.7,s.sy-r*.6+a*.12,r*.62+a*.05],shape:"open",wrist:[-.5,0,-.9]}],head:{x:-a*.06}};case"wave":return{arms:[null,{c:[Math.max(s.sx*1.55,s.hw+.3),Math.min(s.sy+r*.85,s.ht-.15),r*.22],pole:[s.sx*2,s.sy-.4,-.4],shape:"open",wrist:[0,c(10,.45),-.2]}],head:{z:-.07}};case"point":return{arms:[null,{w:i.toCamera(r*1.05,.15),pole:[s.sx*1.5,s.sy-.7,-.6],shape:"point",wrist:[0,0,0]}],head:{x:-.03}};case"point-screen":return{arms:[null,{w:i.toward(i.screen,r*1.02),pole:[s.sx*1.6,s.sy-.9,.5],shape:"point"}],look:"screen",chest:{y:.25}};case"point-other":return{arms:[{w:i.toward(i.partner,r*1.02,0),pole:[-s.sx*1.6,s.sy-.9,-.4],shape:"point"},null],look:"partner"};case"shrug":return{arms:[{c:[-s.sx*1.65,s.sy-r*.5,r*.45],pole:[-s.sx*2.4,s.sy-.8,-.4],shape:"open",wrist:[-.9,0,1.1]},{c:[s.sx*1.65,s.sy-r*.5,r*.45],pole:[s.sx*2,s.sy-.8,-.4],shape:"open",wrist:[-.9,0,-1.1]}],shoulders:.09,head:{z:.13,x:-.04}};case"facepalm":return{arms:[{h:i.anchor("forehead",-.05,0,.06),pole:[-s.sx*1.8,s.sy-.6,.3],shape:"open",wrist:[.2,-.5,.4]},null],head:{x:.3,z:.06},chest:{x:.14},shoulders:.05};case"think":return{arms:[{c:[s.sx*.25,s.sy-r*.62,r*.5],pole:[-s.sx*1.6,s.sy-.9,0],shape:"relaxed",wrist:[-.4,0,1.2]},{h:i.anchor("chin",.02,-.08,.06),pole:[s.sx*1.4,s.sy-1,.2],shape:"fist",wrist:[.3,0,-.6]}],head:{z:.12,y:-.1,x:.04},chest:{x:.06},eyesUp:1};case"cheer":return{arms:[{c:[-Math.max(s.sx*1.1,s.hw+.2),s.sy+r*.95+c(9,.06),r*.12],pole:[-s.sx*3,s.sy,-.3],shape:"fist"},{c:[Math.max(s.sx*1.1,s.hw+.2),s.sy+r*.95+c(9+.5,.06),r*.12],pole:[s.sx*3,s.sy,-.3],shape:"fist"}],root:{y:Math.abs(Math.sin(e*6))*.12},head:{x:-.1}};case"clap":{let l=.05+.16*(.5+.5*Math.cos(e*13));return{arms:[{c:[-l,s.sy-r*.35,r*.66],pole:[-s.sx*2,s.sy-.8,-.3],shape:"open",wrist:[0,-1.3,0]},{c:[l,s.sy-r*.35,r*.66],pole:[s.sx*2,s.sy-.8,-.3],shape:"open",wrist:[0,1.3,0]}]}}case"thumbsup":return{arms:[null,{c:[s.sx*.85,s.sy-r*.25,r*.62],pole:[s.sx*1.8,s.sy-1,-.3],shape:"thumbsup",wrist:[0,-.25,-.15]}],head:{z:-.08}};case"crossarms":return{arms:[{c:[s.sx*.55,s.sy-r*.52,r*.42],pole:[-s.sx*1.6,s.sy-.9,.6],shape:"fist",wrist:[0,0,1.4]},{c:[-s.sx*.55,s.sy-r*.47,r*.5],pole:[s.sx*1.6,s.sy-.9,.6],shape:"fist",wrist:[0,0,-1.4]}],chest:{x:-.05},head:{x:-.06}};case"handsup":return{arms:[{c:[-Math.max(s.sx*1.35,s.hw+.25),s.sy+r*.62,r*.35],pole:[-s.sx*3,s.sy-.4,-.3],shape:"open",wrist:[-1.2,0,.3]},{c:[Math.max(s.sx*1.35,s.hw+.25),s.sy+r*.62,r*.35],pole:[s.sx*3,s.sy-.4,-.3],shape:"open",wrist:[-1.2,0,-.3]}],chest:{x:-.1},root:{y:.06*Math.max(0,Math.sin(Math.min(e,.4)/.4*Nt))}};case"raise":return{arms:[null,{c:[Math.max(s.sx*.85,s.hw+.18),s.sy+r*.95,r*.2],pole:[s.sx*2.5,s.sy,-.3],shape:"point"}],head:{z:-.08,x:-.06}};case"type":return{arms:[{c:[-s.sx*.55,s.sy-r*.72,r*.78],shape:"cup",wrist:[.9+c(23,.25),0,0]},{c:[s.sx*.55,s.sy-r*.72,r*.78],shape:"cup",wrist:[.9+Math.sin(e*23+2)*.25,0,0]}],head:{x:.16},chest:{x:.08}};case"press":{let l=Math.min(t*.45,1.2),h=kt((e-l)/.22)*(1-kt((e-l-.4)/.3));return{arms:[null,{w:i.toward(i.key,r*(1-.12*(1-h))),pole:[s.sx*1.8,s.sy-.6,-.4],shape:"point"}],chest:{x:.05+.07*h,y:-.2},head:{x:.08},press:h,look:"key"}}case"nod":return{head:{x:c(8,.14)}};case"headshake":return{head:{y:c(9,.3)}};case"lean":return{chest:{x:.2},head:{x:.06},arms:[{c:[-s.sx*1.05,s.sy-r*.82,-.05],shape:"fist"},{c:[s.sx*1.05,s.sy-r*.82,-.05],shape:"fist"}]};case"jump":{let l=kt(e/.22)*(1-kt((e-.22)/.08)),h=Math.max(0,Math.sin(gt((e-.28)/.55,0,1)*Nt)),u=kt((e-.83)/.08)*(1-kt((e-.95)/.2));return{hips:{y:-.22*(l+u*.8)},root:{y:.75*h},arms:[{c:[-s.sx*1.2,s.sy+r*.5*h-r*.4*l,r*.2],pole:[-s.sx*3,s.sy,-.3],shape:"open"},{c:[s.sx*1.2,s.sy+r*.5*h-r*.4*l,r*.2],pole:[s.sx*3,s.sy,-.3],shape:"open"}],head:{x:-.12*h}}}default:return{}}}var Yp=vt(),Fs=vt(),Vc=vt(),$p=new Pn,Wb=new pn,Xb=vt(),qb=vt();function Qp(n,e){let{t,talk:i,beat:s,face:r,action:a}=e,o=n.seed*.37,c=Yb(n),l=a.k,h=l<=0?0:l>=1?1:gt(Hb(l),0,1.08),u=Gb(a.name,a.local,a.dur,{m:c,beat:s,screen:e.screen,key:e.key,partner:e.partner,anchor:(A,R=0,x=0,y=0)=>()=>n.head.localToWorld(vt(n.anchors[A].x+R,n.anchors[A].y+x,n.anchors[A].z+y)),toward:(A,R,x=1)=>()=>{let y=n.arms[x].shoulder.getWorldPosition(vt());return y.add(A.clone().sub(y).normalize().multiplyScalar(R*n.root.scale.y))},toCamera:(A,R)=>()=>{let x=n.arms[1].shoulder.getWorldPosition(vt()),y=e.camera.clone().sub(x);return y.y=0,y.normalize(),y.y=R,x.add(y.normalize().multiplyScalar(A*n.root.scale.y))}}),d=r.emotion==="sad"?1:0,p=r.emotion==="angry"?1:0;n.root.position.y=e.baseY+(u.root?.y||0)*l*n.root.scale.y,n.hips.position.set(Math.sin(t*.55+o)*.025,n.plan.leg+(u.hips?.y||0)*l-d*.03+Math.sin(t*1.7+o)*.006,0),n.hips.rotation.set(0,Math.sin(t*.4+o)*.03,Math.sin(t*.55+o)*.02),n.chest.rotation.set((u.chest?.x||0)*l+p*.06+d*.08+i*s*.04,Math.sin(t*.65+o)*.03+(u.chest?.y||0)*l,-Math.sin(t*.55+o)*.015),n.chest.scale.set(1,1+Math.sin(t*1.7+o)*.012,1+Math.sin(t*1.7+o)*.008);for(let A of n.arms)A.shoulder.position.y=n.plan.shoulderY+(u.shoulders||0)*l+d*-.03;n.neck.updateWorldMatrix(!0,!1);let g=n.neck.getWorldPosition(Xb),v=u.look&&e[u.look]?e[u.look]:e.look,m=v?qb.copy(v).sub(g):null,f=0,b=0;if(m){let A=Wb.copy(n.chest.getWorldQuaternion(new pn)).invert();m.applyQuaternion(A),f=gt(Math.atan2(m.x,m.z),-.9,.9),b=gt(-Math.atan2(m.y,Math.hypot(m.x,m.z)),-.4,.4)}let S=b*.6+r.down+(u.head?.x||0)*l+i*(s*.07+Math.sin(t*5.3+o)*.015)+Math.sin(t*1.2+o)*.02,_=f*.75+(u.head?.y||0)*l+Math.sin(t*.7+o)*.04,M=r.tilt+(u.head?.z||0)*l+Math.sin(t*.8+o)*.02;n.neck.rotation.set(S*.35,_*.35,M*.3),n.head.rotation.set(S*.65,_*.65,M*.7),n.root.updateMatrixWorld(!0);let E=(n.seed+Math.floor(e.cueIndex||0))%2;return n.arms.forEach((A,R)=>{let x=A.s,y=R===E?1:.45,L=i*y*(.25+s*.55);$p.set(-.1-L*.5-d*-.04,0,x*(.12+.04*Math.sin(t*.9+o+R)+p*.05)),A.upper.quaternion.setFromEuler($p),A.fore.rotation.set(-.28-L*1.1-p*.2,0,0);let U=u.arms?.[R],k=qp[i>.2&&y===1?"open":"relaxed"],W=[0,0,0];U&&l>0&&(Vb(A,Yp),U.c?n.chest.localToWorld(Fs.set(...U.c)):Fs.copy((U.h||U.w)()),Fs.lerpVectors(Yp,Fs,h),Fs.y+=Math.sin(Nt*gt(l,0,1))*.12*n.root.scale.y*(1-h),n.chest.localToWorld(Vc.set(...U.pole||[x*1.4,n.plan.shoulderY-1,-.7])),Xp(A,Fs,Vc),k=qp[U.shape||"relaxed"].map((V,G)=>Oc(k[G],V,h)),W=(U.wrist||[0,0,0]).map(V=>V*h)),A.hand.rotation.set(W[0],W[1],W[2]),A.fingers.rotation.set(k[0],0,0),A.index.rotation.set(k[1],0,0),A.thumb.rotation.set(0,0,-x*k[2])}),n.legs.forEach((A,R)=>{let x=n.feet[R];x.updateWorldMatrix(!0,!1);let y=x.getWorldPosition(Fs);n.hips.updateWorldMatrix(!0,!1),n.root.localToWorld(Vc.set(A.s*.1,n.plan.leg*.6,2)),Xp(A,y,Vc)}),n.tail&&n.tail.rotation.set(-.5+Math.sin(t*2.2+o)*.12,Math.sin(t*1.6+o)*.35,0),n.glow&&(n.glow.emissiveIntensity=1.05+Math.sin(t*3+o)*.15),{press:(u.press||0)*l}}function Yb(n){let e=n.plan,t=n.kind==="bot"?1:n.member.look.build,i=n.member.look.head,s=n.kind==="bot"?.68:n.kind==="robot"?.5:.56;return{sx:e.shoulderX*t,sy:e.shoulderY,reach:e.upper+e.fore+e.hand,hw:s*i,ht:e.neckY+e.headY+(e.headC+(n.kind==="bot"?.47:.55))*i}}function em(n,e=vt()){n.root.updateWorldMatrix(!0,!0);let t=n.plan;return n.root.localToWorld(e.set(0,t.leg+t.chestY+t.neckY+t.headY+t.headC*n.member.look.head,0))}function Nu(n){n.root.traverse(e=>{if(e.geometry?.dispose(),e.material)for(let t of Array.isArray(e.material)?e.material:[e.material])t.map?.dispose(),t.dispose()}),n.face?.tex.texture.dispose()}var Ja=class{constructor(){this.domElement=document.createElement("canvas"),this.ctx=this.domElement.getContext("2d",{alpha:!1}),this.shadowMap={},this.isSoftware=!0,this.cache=new WeakMap,this.textures=new WeakMap,this.setSize(540,960)}setPixelRatio(){}setSize(e,t){this.domElement.width=e,this.domElement.height=t,this.w=e,this.h=t,this.depth=new Float32Array(e*t),this.blurCanvas=document.createElement("canvas"),this.blurCanvas.width=e,this.blurCanvas.height=t,this.staticKey=null}dispose(){}render(e,t){let i=this.ctx,s=this.w,r=this.h,a=i.createLinearGradient(0,0,s,r);a.addColorStop(0,"#192b36"),a.addColorStop(.5,"#17252d"),a.addColorStop(1,"#342b28"),i.fillStyle=a,i.fillRect(0,0,s,r),e.updateMatrixWorld(!0),t.updateMatrixWorld(!0);let o=new at().multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),c=[],l=new P,h=new P,u=o.elements.join(",")+"|"+this.sceneRevision+"|"+this.warmth,d=this.staticKey===u,p=new P(-.5,.8,.65).normalize(),g=new P(.7,.5,-.5).normalize(),v=new P;e.traverseVisible(_=>{if(_.isSprite){if(l.setFromMatrixPosition(_.matrixWorld).applyMatrix4(o),l.z<1){let K=_.scale.x*40*s/540;i.globalAlpha=.25,i.drawImage(_.material.map.image,(l.x+1)*s/2-K/2,(1-l.y)*r/2-K/2,K,K),i.globalAlpha=1}return}if(!_.isMesh||d&&_.userData.staticLayer)return;let M=_.geometry,E=M.attributes.position,A=M.attributes.normal,R=M.attributes.uv,x=M.index,y=x?x.count:E.count,L=this.cache.get(M);L||(L={geometry:M},this.cache.set(M,L));let U=Array.isArray(_.material)?_.material[0]:_.material;if(!U||U.opacity===0)return;let k=new at().multiplyMatrices(o,_.matrixWorld),W=new We().getNormalMatrix(_.matrixWorld),V=new Float32Array(E.count*4);for(let K=0;K<E.count;K++){l.fromBufferAttribute(E,K);let ne=k.elements,ce=1/(ne[3]*l.x+ne[7]*l.y+ne[11]*l.z+ne[15]);l.applyMatrix4(k),V[K*4]=(l.x+1)*s*.5,V[K*4+1]=(1-l.y)*r*.5,V[K*4+2]=l.z,V[K*4+3]=ce}let G=U.color||new De("#ffffff"),j=U.emissive||new De(0),H=U.emissiveIntensity||0;for(let K=0;K<y;K+=3){let ne=x?x.getX(K):K,ce=x?x.getX(K+1):K+1,Te=x?x.getX(K+2):K+2,qe=V[ne*4],He=V[ne*4+1],Re=V[ne*4+2],Y=V[ce*4],J=V[ce*4+1],he=V[ce*4+2],ye=V[Te*4],ve=V[Te*4+1],Ge=V[Te*4+2];if(Re>1||he>1||Ge>1||Re<-1||he<-1||Ge<-1||Math.max(qe,Y,ye)<-1||Math.min(qe,Y,ye)>s+1||Math.max(He,J,ve)<-1||Math.min(He,J,ve)>r+1)continue;let Rt=(Y-qe)*(ve-He)-(J-He)*(ye-qe);if(Math.abs(Rt)<.015||Rt>=0&&U.side!==wn)continue;A?h.set(A.getX(ne)+A.getX(ce)+A.getX(Te),A.getY(ne)+A.getY(ce)+A.getY(Te),A.getZ(ne)+A.getZ(ce)+A.getZ(Te)).applyMatrix3(W).normalize():h.set(0,1,0);let D=Math.max(0,h.dot(p)),tt=Math.max(0,h.dot(g)),Ue=.29+Math.max(h.y,0)*.12,Fe=this.warmth||1,be=G.r*(Ue+D*(.8+Fe*.1)+tt*.3)+j.r*H,bt=G.g*(Ue+D*.77+tt*.22)+j.g*H,Me=G.b*(Ue+D*(.76-Fe*.15)+tt*.18)+j.b*H,ze=C=>Math.round(Math.min(1,C<=.0031308?C*12.92:1.055*Math.pow(C,1/2.4)-.055)*255),Bt=U.isMeshBasicMaterial?[ze(G.r),ze(G.g),ze(G.b)]:[ze(be),ze(bt),ze(Me)],Tt={ax:qe,ay:He,az:Re,bx:Y,by:J,bz:he,cx:ye,cy:ve,cz:Ge,z:(Re+he+Ge)/3,color:Bt,opacity:U.opacity,iw:[V[ne*4+3],V[ce*4+3],V[Te*4+3]],transparent:U.transparent,staticLayer:_.userData.staticLayer};if(U.map?.image&&R){let C=this.textures.get(U.map);if(!C||C.version!==U.map.version){let w=U.map.image,z=w.getContext?.("2d");if(!z){let Z=document.createElement("canvas");Z.width=w.width,Z.height=w.height,z=Z.getContext("2d"),z.drawImage(w,0,0)}C={pixels:z.getImageData(0,0,w.width,w.height).data,width:w.width,height:w.height,version:U.map.version},this.textures.set(U.map,C)}Tt.texture=C,Tt.uv=[R.getX(ne),1-R.getY(ne),R.getX(ce),1-R.getY(ce),R.getX(Te),1-R.getY(Te)]}c.push(Tt)}}),c.sort((_,M)=>Number(_.transparent)-Number(M.transparent)||(_.transparent?M.z-_.z:_.z-M.z));let m=i.getImageData(0,0,s,r),f=m.data,b=this.depth;d?(f.set(this.staticPixels),b.set(this.staticDepth)):b.fill(1/0);let S=d?[c]:[c.filter(_=>_.staticLayer),c.filter(_=>!_.staticLayer)];for(let _=0;_<S.length;_++){for(let M of S[_]){let E=Math.max(0,Math.floor(Math.min(M.ax,M.bx,M.cx))),A=Math.min(s-1,Math.ceil(Math.max(M.ax,M.bx,M.cx))),R=Math.max(0,Math.floor(Math.min(M.ay,M.by,M.cy))),x=Math.min(r-1,Math.ceil(Math.max(M.ay,M.by,M.cy))),y=(M.by-M.cy)*(M.ax-M.cx)+(M.cx-M.bx)*(M.ay-M.cy);if(Math.abs(y)<1e-8)continue;let L=(M.by-M.cy)/y,U=(M.cx-M.bx)/y,k=(M.cy-M.ay)/y,W=(M.ax-M.cx)/y,V=M.texture,G=M.uv,j=M.iw;for(let H=R;H<=x;H++){let K=((M.by-M.cy)*(E+.5-M.cx)+(M.cx-M.bx)*(H+.5-M.cy))/y,ne=((M.cy-M.ay)*(E+.5-M.cx)+(M.ax-M.cx)*(H+.5-M.cy))/y;for(let ce=E;ce<=A;ce++,K+=L,ne+=k){let Te=1-K-ne;if(K<-1e-5||ne<-1e-5||Te<-1e-5)continue;let qe=K*M.az+ne*M.bz+Te*M.cz,He=H*s+ce;if(qe>b[He]+1e-6)continue;let Re=M.color[0],Y=M.color[1],J=M.color[2],he=M.opacity??1;if(V){let ve=1/(K*j[0]+ne*j[1]+Te*j[2]),Ge=(K*G[0]*j[0]+ne*G[2]*j[1]+Te*G[4]*j[2])*ve,Rt=(K*G[1]*j[0]+ne*G[3]*j[1]+Te*G[5]*j[2])*ve,D=Math.max(0,Math.min(V.width-1,Math.floor(Ge*V.width))),tt=Math.max(0,Math.min(V.height-1,Math.floor(Rt*V.height))),Ue=(tt*V.width+D)*4;Re=V.pixels[Ue],Y=V.pixels[Ue+1],J=V.pixels[Ue+2],he*=V.pixels[Ue+3]/255}if(he<.01)continue;let ye=He*4;he>.99?(f[ye]=Re,f[ye+1]=Y,f[ye+2]=J):(f[ye]=f[ye]*(1-he)+Re*he,f[ye+1]=f[ye+1]*(1-he)+Y*he,f[ye+2]=f[ye+2]*(1-he)+J*he),M.transparent||(b[He]=qe)}}}if(!d&&_===0){if(i.putImageData(m,0,0),this.focusDistance){let M=this.blurCanvas.getContext("2d");M.clearRect(0,0,s,r),M.filter=`blur(${4*s/540}px)`,M.drawImage(this.domElement,0,0),M.filter="none";let E=M.getImageData(0,0,s,r).data,A=2*t.near*t.far,R=t.far+t.near,x=t.far-t.near;for(let y=0;y<b.length;y++){let L=A/(R-b[y]*x),U=Math.min(.9,Math.max(0,(Math.abs(L-this.focusDistance)-1.1)/5));if(U<=0||!Number.isFinite(U))continue;let k=y*4;f[k]+=U*(E[k]-f[k]),f[k+1]+=U*(E[k+1]-f[k+1]),f[k+2]+=U*(E[k+2]-f[k+2])}i.putImageData(m,0,0)}this.staticPixels=new Uint8ClampedArray(f),this.staticDepth=new Float32Array(b),this.staticKey=u}}i.putImageData(m,0,0)}};var Wr=Math.PI,Xr=Wr/180;function _n(n,e={}){return new $i({color:n,roughness:.7,metalness:.05,...e})}function rs(n,e,t,i,s,r=0,a=0,o=0,c=.05){let l=new ft(new Nr(e,t,i,1,c),s);return l.position.set(r,a,o),l.castShadow=!0,l.receiveShadow=!0,n.add(l),l}function tm(n,e,t,i,s,r,a=12){let o=new ft(new Ms(e,a,8),t);return o.position.set(i,s,r),o.castShadow=!0,n.add(o),o}function Qa(n,e=0,t=0,i=0){let s=new Vn;return s.position.set(e,t,i),n.add(s),s}function Fu(n,e,t,i,s,r,a,o,c=10){let l=new ft(new Ci(e,t,i,c),s);return l.position.set(r,a,o),l.castShadow=!0,l.receiveShadow=!0,n.add(l),l}function $b(n,e,t,i=.018){let s=new Yi(e.map(a=>new P(...a))),r=new ft(new Ss(s,14,i,6,!1),_n(t));return n.add(r),r}function nm(n,e=128,t="#ddd8ca",i=null){let s=document.createElement("canvas");s.width=512,s.height=256;let r=s.getContext("2d");i&&(r.fillStyle=i,r.fillRect(0,0,512,256)),r.fillStyle=t,r.font=`600 ${e}px Arial`,r.textAlign="center",r.textBaseline="middle",r.fillText(n,256,130);let a=new ri(s);return a.colorSpace=Zt,a}var Zb={uniforms:{tDiffuse:{value:null},time:{value:0},grain:{value:.032},warmth:{value:1}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"uniform sampler2D tDiffuse;uniform float time,grain,warmth;varying vec2 vUv;float h(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);}void main(){vec3 c=texture2D(tDiffuse,vUv).rgb;c=(c-.5)*1.06+.5;c*=vec3(1.+.03*warmth,1.,1.-.035*warmth);float l=dot(c,vec3(.299,.587,.114));c=mix(vec3(l),c,1.08);c+=(h(vUv*vec2(1080.,1920.)+fract(time*7.13)*91.7)-.5)*grain;gl_FragColor=vec4(clamp(c,0.,1.),1.);}"},im={alert:{edge:"#80564c",kick:"#e7b09a",title:"#d8cbbd",bar:"#bc8264"},calm:{edge:"#547e77",kick:"#b6e7d0",title:"#e2e9df",bar:"#a6d8b8"},success:{edge:"#5d8a5a",kick:"#c4ebaa",title:"#eef6e4",bar:"#9fd88a"},info:{edge:"#4f6f8f",kick:"#a9c8ee",title:"#e1e8f2",bar:"#8fb7e6"}},jb=["#ffd27a","#ffb48a","#9fd8ff","#c6f08a"],Kb=["#d0b7ef","#eeb48d","#9fd8ff","#c6f08a"],sm={1:[[0,.45]],2:[[-1.32,.35],[1.25,.65]],3:[[-2.1,.45],[0,.25],[2.1,.55]],4:[[-2.6,.4],[-.88,.6],[.88,.35],[2.6,.55]]},Jb=new P(0,4.3,-4.15),Qb=new P(2.65,.33,1.85),eM=n=>2*Math.atan(18/n)/Xr,rm={wide:{yaw:20,pitch:12,dist:13.3,lens:54,ap:7e-4},two:{yaw:0,pitch:9.5,dist:11.3,lens:54,ap:.0012},single:{yaw:12,pitch:9,dist:6.4,lens:60,ap:.0025},cu:{yaw:8,pitch:5,dist:3.5,lens:66,ap:.0045},ots:{yaw:48,pitch:5,dist:5,lens:64,ap:.0042},custom:{yaw:0,pitch:8,dist:4,lens:50,ap:.0035}},tM=(()=>{let n=null;return()=>{if(n)return n;let e=document.createElement("canvas");e.width=e.height=128;let t=e.getContext("2d"),i=t.createRadialGradient(64,64,8,64,64,64);return i.addColorStop(0,"rgba(12,14,20,.64)"),i.addColorStop(.4,"rgba(12,14,20,.35)"),i.addColorStop(1,"rgba(12,14,20,0)"),t.fillStyle=i,t.fillRect(0,0,128,128),n=new ri(e)}})(),Hc=class{constructor(e,t,i={}){if(this.canvas=e,this.project=t,this.w=540,this.h=960,this.time=0,this.manual=!1,this.screenRevision=0,this.focus=null,this.previewCam=null,this.rigs=[],this.castKey="",i.software)this.renderer=new Ja;else try{this.renderer=new Ac({antialias:!0,alpha:!1,preserveDrawingBuffer:!0,powerPreference:"high-performance"})}catch{this.renderer=new Ja}this.renderer.setPixelRatio(1),this.renderer.setSize(540,960),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Tl,this.renderer.toneMapping=Ar,this.renderer.toneMappingExposure=1.13,this.out=e.getContext("2d",{alpha:!1}),this.scene=new Ta,this.scene.background=new De("#101c23"),this.scene.fog=new wa("#111d24",.023),this.camera=new nn(36,9/16,.1,100),this.controls=i.headless?{target:new P,update(){},dispose(){}}:new Ic(this.camera,e),this.controls.enabled=!1,this.controls.enableDamping=!1,this.controls.target.set(0,2,0),this.controls.minDistance=2,this.controls.maxDistance=22,this.controls.maxPolarAngle=Wr*.49;let s=new Oa("#bfdaed","#77533d",2.1);this.scene.add(s),this.key=new Ki("#ffdbad",4.5),this.key.position.set(-4,8,5),this.key.castShadow=!0,this.key.shadow.mapSize.set(2048,2048),Object.assign(this.key.shadow.camera,{left:-9,right:9,top:10,bottom:-7,near:.5,far:30}),this.key.shadow.normalBias=.035,this.key.shadow.bias=-25e-5,this.key.shadow.radius=3,this.scene.add(this.key);let r=new Ki("#ff914d",3.4);r.position.set(5,5,-4),this.scene.add(r);let a=new Ki("#ffb070",1.6);a.position.set(-6,4,-5),this.scene.add(a);let o=new Ki("#82bbd4",1.5);o.position.set(4,3,5),this.scene.add(o),this.screenLight=new Tr("#8bcecf",20,12,2),this.screenLight.position.set(0,4.5,-2.5),this.scene.add(this.screenLight),this.set=Qa(this.scene),this.makeSet(),this.set.traverse(c=>c.userData.staticLayer=!0),this.renderKey.userData.staticLayer=!1,this.renderKeyLabel.userData.staticLayer=!1,this.cast=Qa(this.scene),this.renderer.isSoftware?this.composer={render:()=>this.renderer.render(this.scene,this.camera),setSize:()=>{},dispose:()=>{}}:(this.composer=new Dc(this.renderer),this.composer.addPass(new Lc(this.scene,this.camera)),this.bokeh=new Uc(this.scene,this.camera,{focus:6,aperture:.002,maxblur:.008}),this.composer.addPass(this.bokeh),this.bloom=new kr(new oe(540,960),.24,.5,1.12),this.composer.addPass(this.bloom),this.composer.addPass(new Nc),this.grade=new Or(Zb),this.composer.addPass(this.grade)),this.setProject(t),this.seek(0)}makeSet(){let e=_n("#594237",{roughness:.9}),t=_n("#292e31",{metalness:.35}),i=_n("#b9b3a1",{roughness:.7}),s=_n("#58686b");rs(this.set,16,.55,10,e,0,-.55,-.4,.18),rs(this.set,13,.25,6.1,t,0,-.12,-.1,.18);for(let _=0;_<5;_++)for(let M=0;M<13;M++){let E=(M-6)*.89+_%2*.14,A=(_-2)*.89,R=rs(this.set,.79,.28,.74,M===0||M===12?s:i,E,.12,A,.075);if(_<2||M<4||M>8){let x=nm("QWERTYUIOPASDFGHJKLZXCVBNM"[(_*13+M)%26],90,"#494e4d"),y=new ft(new Gn(.25,.125),new Sn({map:x,transparent:!0,depthWrite:!1}));y.rotation.x=-Wr/2,y.position.set(E,.266,A-.06),this.set.add(y)}}rs(this.set,3.8,.25,.69,_n("#a9957a"),0,.12,2.67,.06),this.renderKey=rs(this.set,1.2,.33,1.1,_n("#e79d58"),2.65,.16,1.85,.09);let r=new ft(new Gn(.92,.46),new Sn({map:nm("GO",95,"#4b3222"),transparent:!0}));r.rotation.x=-Wr/2,r.position.set(2.65,.334,1.85),this.set.add(r),this.renderKeyLabel=r;let a=Qa(this.set,0,4.3,-4.4);rs(a,11.8,6.9,.38,_n("#262e35"),0,0,0,.23),rs(a,11.5,6.6,.1,_n("#0a1119"),0,0,.21,.14),this.screenCanvas=document.createElement("canvas"),this.screenCanvas.width=1600,this.screenCanvas.height=900,this.screenCtx=this.screenCanvas.getContext("2d"),this.screenTexture=new ri(this.screenCanvas),this.screenTexture.colorSpace=Zt;let o=new Sn({map:this.screenTexture}),c=new ft(new Gn(11.13,6.22),o);c.position.set(0,.06,.278),a.add(c),tm(a,.045,_n("#d3bd81",{emissive:"#a68955",emissiveIntensity:1}),0,-3.28,.25,8),rs(this.set,.8,1.5,.45,t,0,.3,-4.7,.08);let l=Qa(this.set,-8.6,0,-4.6);Fu(l,.65,.8,.15,t,0,0,0,24),$b(l,[[0,0,0],[0,3,0],[.8,5,0],[1.5,5.1,0]],"#94795b",.08);let h=new ft(new ys(.75,.65,20,1,!0),_n("#bd9870",{side:wn}));h.position.set(1.5,4.8,0),l.add(h),tm(l,.22,_n("#ffe4ba",{emissive:"#ffca86",emissiveIntensity:3}),1.5,4.5,0);let u=new Tr("#ffb971",32,14,2);u.position.set(1.5,4.4,0),l.add(u);let d=Qa(this.set,6.5,0,0);Fu(d,.7,.6,1.2,_n("#417578"),0,.58,0,24),Fu(d,.62,.62,.03,_n("#251d16"),0,1.19,0,24);let p=new ft(new Ri(.38,.13,8,20),_n("#417578"));p.position.set(.72,.7,0),d.add(p);let g=document.createElement("canvas");g.width=64,g.height=64;let v=g.getContext("2d"),m=v.createRadialGradient(32,32,1,32,32,32);m.addColorStop(0,"rgba(255,220,166,.8)"),m.addColorStop(.22,"rgba(255,175,92,.24)"),m.addColorStop(1,"rgba(255,175,92,0)"),v.fillStyle=m,v.fillRect(0,0,64,64);let f=new ri(g);for(let _=0;_<26;_++){let M=new Aa(new xr({map:f,color:_%3?"#d79a62":"#86a7b3",transparent:!0,depthWrite:!1,opacity:.45,blending:Es}));M.position.set(Math.sin(_*13.1)*16,2+_*7%15,-9-Math.abs(Math.cos(_*8))*15),M.scale.setScalar(.4+_%4*.4),this.scene.add(M)}let b=new Vt,S=[];for(let _=0;_<100;_++)S.push(Math.sin(_*37)*13,1+_%39*.25,Math.cos(_*17)*10);b.setAttribute("position",new it(S,3)),this.dust=new Ca(b,new br({size:.025,color:"#e6c998",transparent:!0,opacity:.45,depthWrite:!1})),this.scene.add(this.dust)}buildCast(e){let t=JSON.stringify(e.cast.map(s=>[s.id,s.kind,s.look]));if(t===this.castKey)return;this.castKey=t;for(let s of this.rigs)this.cast.remove(s.root),this.cast.remove(s.shadow),Nu(s);let i=sm[e.cast.length]||sm[4];this.rigs=e.cast.map((s,r)=>{let a=jp(s),[o,c]=i[r];a.root.position.set(o,.26,c),a.root.rotation.y=-o*.07,a.baseY=.26,this.cast.add(a.root);let l=new ft(new Gn(2.1,1.6),new Sn({map:tM(),transparent:!0,depthWrite:!1}));return l.rotation.x=-Wr/2,l.position.set(o,.275,c+.05),l.scale.setScalar(s.look.height*(s.kind==="bot"?1:s.look.build*.95)),this.cast.add(l),a.shadow=l,a}),this.heads={};for(let s of this.rigs)s.root.updateMatrixWorld(!0),this.heads[s.member.id]=em(s)}setProject(e){this.project=e,this.lastScreenKey=null,this.buildCast(e);for(let t of this.rigs)t.face&&(t.face.last="");this.key.intensity=3.7+e.warmth*.8,this.renderer.warmth=e.warmth,this.grade&&(this.grade.uniforms.warmth.value=e.warmth)}castIndex(e){return Math.max(0,this.project.cast.findIndex(t=>t.id===e))}nameOf(e){return this.project.cast.find(t=>t.id===e)?.name||e}castNames(){return this.project.cast.map(e=>e.name).join(" + ")}rigOf(e){return this.rigs.find(t=>t.member.id===e)||this.rigs[0]}setSize(e,t){this.w=e,this.h=t,this.canvas.width=e,this.canvas.height=t,this.renderer.setSize(e,t),this.composer.setSize(e,t),this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}setManual(e){this.manual=e,this.controls.enabled=e,e&&(this.controls.target.copy(this.target||new P(0,2,0)),this.controls.update())}setFocus(e){this.focus=e}shotFrame(e){let t=this.heads,i=t[e.subject]||Object.values(t)[0],s=t[e.other]||i,r=this.rigOf(e.subject),a=r.root.rotation.y,o=Math.sign(s.x-i.x)||1,c=Object.values(t),l=Math.min(...c.map(p=>p.x)),h=Math.max(...c.map(p=>p.x)),u=h-l,d={...rm[e.shot==="screen"?"two":e.shot]||rm.single,facing:a,move:e.cam?.move||"auto"};switch(e.shot){case"wide":d.center=new P((l+h)/2,2.05,.1),d.facing=0,d.dist=13.3*Math.max(1,(u+2.4)/5);break;case"two":d.center=i.clone().add(s).multiplyScalar(.5).add(new P(0,-.75,0)),d.facing=0,d.dist=Math.max(7.5,i.distanceTo(s)*3+3.6);break;case"single":d.center=i.clone().add(new P(0,-.4*r.member.look.height,0)),d.yaw*=o;break;case"cu":d.center=i.clone().add(new P(0,-.05,0)),d.yaw*=o,d.dist*=r.member.look.head*r.member.look.height;break;case"ots":d.center=i.clone().add(new P(0,-.12,0)),d.yaw=gt(Math.atan2(s.x-i.x,s.z-i.z)/Xr*.55,-70,70);break;case"custom":{let p=e.cam;d.center=e.subject==="all"?new P((l+h)/2,2.2,.4):i.clone().add(new P(0,-.15,0)),Object.assign(d,{yaw:p.yaw,pitch:p.pitch,dist:p.dist,lens:p.lens,ap:gt(.012/p.dist,6e-4,.005)});break}}return d}describeShot(e){let t=this.shotFrame(e);return{yaw:Math.round(t.yaw),pitch:Math.round(t.pitch),dist:Math.round(t.dist*10)/10,lens:Math.round(t.lens),move:"auto"}}placeCamera(e,t){let i=this.project,s,r,a,o;if(this.focus){let c=this.rigOf(this.focus),l=c.member.look.height,h=c.root.position;r=new P(h.x,h.y+1.75*l,h.z);let u=(-25+t*24)*Xr;s=r.clone().add(new P(Math.sin(u)*6.4*l,1.2,Math.cos(u)*6.4*l)),a=36,o=.0012}else if(e.shot==="screen")s=new P(.3,4.9,7.2),r=new P(0,4.15,-4.4),a=44,o=.0018;else{let c=this.previewCam?{shot:"custom",subject:this.previewCam.subject||e.subject,other:e.other,cam:this.previewCam}:{shot:e.shot,subject:e.subject,other:e.other,cam:e.cam},l=this.shotFrame(c),h=kt((t-e.shotStart)/Math.max(1,e.shotEnd-e.shotStart)),u=l.move==="auto"?c.shot==="wide"?"orbit":"push":l.move,d=l.yaw,p=l.pitch,g=l.dist,v=0;u==="push"?g*=1-.08*h:u==="pull"?g*=1+.1*h:u==="orbit"?d+=(c.shot==="wide"?6:22)*(h-.5):u==="rise"?p+=14*h:u==="handheld"&&(v=.035),p=gt(p,-15,70);let m=(l.facing/Xr+d)*Xr,f=p*Xr;r=l.center,s=r.clone().add(new P(Math.sin(m)*Math.cos(f)*g,Math.sin(f)*g,Math.cos(m)*Math.cos(f)*g)),a=eM(l.lens),o=l.ap;let b=e.cue;if(b&&(b.emotion==="angry"||b.emotion==="surprised")&&b.start>=e.shotStart-.2&&u!=="static"){let S=t-b.start;a-=3.5*kt(S/.18),v+=.05*Math.exp(-Math.max(0,S)*5)*(S>0?1:0)}u!=="static"&&(s.x+=Math.sin(t*.23)*.06+Math.sin(t*41)*v,s.y+=Math.sin(t*.37+1)*.025+Math.cos(t*37)*v),s.y=Math.max(s.y,.75)}if(this.camera.position.copy(s),this.target=r,this.camera.lookAt(r),this.camera.fov=a,this.camera.updateProjectionMatrix(),this.bokeh){let c=this.bokeh.uniforms;c.focus.value=s.distanceTo(r),c.aperture.value=i.dof?o:0,c.maxblur.value=i.dof?.008:0}}seek(e,{overlay:t=!0}={}){this.time=e;let i=this.project,s=Lp(i,e),r=s.cue;this.drawScreen(Dp(i,e),e),this.renderer.sceneRevision=this.screenRevision,this.dust.rotation.y=e*.006,this.manual?this.bokeh&&(this.bokeh.uniforms.aperture.value=0):this.placeCamera(s,this.focus?performance.now()/1e3:e);let a=this.camera.position.clone(),o=0,c=r?i.cues.indexOf(r):0;for(let d of this.rigs){let p=d.member.id,g=s.speaker===p,v=g?s.energy:0,m=g?Ip(r,e):0,f=Pp(i,e,p),b=Rp(i,e,p),S=g?s.other:s.speaker||s.other,_=this.heads[S!==p?S:s.subject]||a,M=g?a.clone().lerp(_,.25):r?this.heads[s.speaker]:a.clone().lerp(_,.5),E=Qp(d,{t:e,talk:v,beat:m,face:f,action:b,baseY:d.baseY,cueIndex:c,look:M,partner:_,screen:Jb,key:Qb,camera:a});o=Math.max(o,E.press);let A=(e*.31+d.seed*.173)%1,R=(A<.03?.1:1)*(Math.sin(e*1.3+d.seed)>.997?.1:1),x=g?0:gt((this.heads[s.speaker]?.x??a.x)-d.root.position.x,-1,1)*.8,y=Up(i,e,p)||{open:v*(.45+.4*Math.abs(Math.sin(e*11+d.seed))),wide:1,round:0,teeth:v>.3?1:0,tongue:0};Jp(d,y,f,R,x,e)}this.renderKey.position.y=.16-.08*o,this.renderKeyLabel.position.y=.334-.08*o,this.grade&&(this.grade.uniforms.time.value=e),this.renderer.focusDistance=this.camera.position.distanceTo(this.manual?this.controls.target:this.target),this.composer.render();let l=this.out,h=this.w,u=this.h;return l.drawImage(this.renderer.domElement,0,0,h,u),t&&!this.focus&&this.overlay(s),s}drawScreen(e,t){let i=e.screen,s=im[i.tone]||im.calm,r=e.progress==null?null:Math.round(e.progress*100),a=gt(1-(t-e.since)/.35,0,1),o=`${e.index}|${r}|${Math.round(a*8)}|${this.project.title}`;if(o===this.lastScreenKey)return;this.lastScreenKey=o,this.screenRevision++;let c=this.screenCtx,l=1600,h=900;c.fillStyle="#0c1824",c.fillRect(0,0,l,h),c.fillStyle="#142737",c.fillRect(0,0,l,75),c.fillStyle="#4f6877";for(let g=0;g<3;g++)c.beginPath(),c.arc(38+g*29,37,7,0,Wr*2),c.fill();c.fillStyle="#88a0ab",c.font="22px monospace",c.textAlign="left",c.fillText("STUDIO / "+this.project.title.toUpperCase().slice(0,48),160,45),c.strokeStyle="#203849",c.lineWidth=1;for(let g=0;g<12;g++)c.beginPath(),c.moveTo(0,150+g*65),c.lineTo(l,150+g*65),c.stroke();for(let g=0;g<20;g++)c.beginPath(),c.moveTo(g*90,75),c.lineTo(g*90,h),c.stroke();let u=a>0?Math.sin(t*90)*14*a:0;c.save(),c.translate(u,0),c.fillStyle="#112330",c.fillRect(450,170,700,580),c.strokeStyle=s.edge,c.lineWidth=3,c.strokeRect(450,170,700,580),c.textAlign="center",c.fillStyle=s.kick,c.font="bold 28px monospace",c.fillText(i.kicker,800,262);let d=96;for(c.font=`bold ${d}px Arial`;c.measureText(i.title).width>630&&d>36;)d-=4,c.font=`bold ${d}px Arial`;c.fillStyle=s.title,c.fillText(i.title,800,400);let p=24;for(c.font=`${p}px monospace`;c.measureText(i.sub).width>640&&p>14;)p-=2,c.font=`${p}px monospace`;if(c.fillStyle="#7590a0",c.fillText(i.sub,800,470),r!=null&&(c.fillStyle="#253c48",c.fillRect(520,560,560,16),c.fillStyle=s.bar,c.fillRect(520,560,560*e.progress,16),c.font="20px monospace",c.fillStyle="#8fa6b0",c.fillText(`${r}%`,800,615)),c.restore(),a>0){c.fillStyle=`rgba(220,240,255,${.22*a})`,c.fillRect(0,0,l,h);for(let g=0;g<6;g++)c.fillStyle=`rgba(160,220,255,${.12*a})`,c.fillRect(0,(g*157+t*900)%h,l,6)}c.textAlign="left",c.fillStyle="#42606d",c.font="18px monospace",c.fillText(this.castNames().toUpperCase(),40,855),this.screenTexture.needsUpdate=!0,this.screenLight.color.set(i.tone==="alert"?"#cf9c8c":i.tone==="success"?"#a8dca0":"#8bcecf")}overlay(e){let t=this.out,i=this.w,s=this.h,r=i/540,a=this.project,o=t.createRadialGradient(i*.5,s*.47,i*.25,i*.5,s*.48,s*.7);if(o.addColorStop(0,"#0000"),o.addColorStop(1,"#05070c70"),t.fillStyle=o,t.fillRect(0,0,i,s),a.handle&&(t.save(),t.globalAlpha=.78,t.fillStyle="#f1ece2",t.font=`700 ${15*r}px Arial`,t.textAlign="left",t.shadowColor="#000a",t.shadowBlur=6*r,t.fillText(a.handle,i*.06,s*.085),t.restore()),a.intro&&e.t<2.6){let c=kt(e.t/.5)*kt((2.6-e.t)/.6);t.save(),t.globalAlpha=c;let l=t.createLinearGradient(0,0,0,s*.36);l.addColorStop(0,"#05080bf2"),l.addColorStop(.7,"#05080bcc"),l.addColorStop(1,"#05080b00"),t.fillStyle=l,t.fillRect(0,0,i,s*.36),t.fillStyle="#e6c9aa",t.textAlign="center",t.font=`500 ${11*r}px Arial`,t.letterSpacing=`${2*r}px`,t.fillText((a.handle||"AN ORIGINAL").toUpperCase()+" PRESENTS",i/2,s*.13),t.letterSpacing="0px",t.font=`${35*r}px Georgia`,t.fillStyle="#f4e9d6",t.shadowColor="#000c",t.shadowBlur=10*r;let h=a.title.split(" "),u=[],d="";for(let p of h)t.measureText(d+" "+p).width>i*.8&&d?(u.push(d),d=p):d+=(d?" ":"")+p;u.push(d),u.slice(0,3).forEach((p,g)=>t.fillText(p,i/2,s*(.18+g*.045))),t.restore()}if(a.captions&&e.cue&&(a.captionStyle==="box"?this.boxCaption:this.boldCaption).call(this,e),a.endTitle&&e.final>0){let c=e.final;t.save(),t.globalAlpha=c,t.fillStyle="#122125",t.fillRect(0,0,i,s),t.textAlign="center",t.fillStyle="#d6b088",t.font=`${12*r}px Arial`,t.fillText(this.castNames().toUpperCase(),i/2,s*.39),t.fillStyle="#ece5d5",t.font=`${38*r}px Georgia`,t.fillText(a.endTitle,i/2,s*.47),t.font=`${13*r}px Arial`,t.fillStyle="#9aafaa",t.fillText(a.endSub,i/2,s*.525),a.handle&&(t.fillStyle="#d6b088",t.font=`600 ${14*r}px Arial`,t.fillText(a.handle,i/2,s*.6)),t.restore()}}wrap(e,t){let i=this.out,s=[],r=[];for(let[a,o]of e.entries()){let c=[...r.map(l=>l.word),o].join(" ");i.measureText(c).width>t&&r.length&&(s.push(r),r=[]),r.push({word:o,i:a})}return r.length&&s.push(r),s}boldCaption(e){let t=this.out,i=this.w,s=this.h,r=i/540,a=e.cue,o=a.text.split(/\s+/),c=a.words?.length?Math.min(o.length-1,Math.round(Np(a,e.t)*o.length/a.words.length)):-1,l=kt((e.t-a.start)/.14),h=kt((a.end-e.t)/.12),u=jb[this.castIndex(a.speaker)%4];t.save(),t.globalAlpha=h,t.font=`800 ${29*r}px "Arial Black", Arial, sans-serif`,t.textAlign="left",t.textBaseline="middle",t.lineJoin="round";let d=this.wrap(o,i*.84),p=37*r,g=s*.66-(d.length-1)*p/2,v=t.measureText(" ").width;t.translate(i/2,g),t.scale(.94+.06*l,.94+.06*l),t.translate(-i/2,-g),d.forEach((m,f)=>{let b=m.reduce((M,E)=>M+t.measureText(E.word).width,0)+v*(m.length-1),S=(i-b)/2,_=g+f*p;for(let M of m){let E=t.measureText(M.word).width,A=M.i===c;t.shadowColor="rgba(0,0,0,.7)",t.shadowBlur=10*r,t.lineWidth=5*r,t.strokeStyle="rgba(8,8,10,.92)",t.strokeText(M.word,S,_),t.shadowBlur=0,t.fillStyle=A?u:"#fbf7ef",t.fillText(M.word,S,_),S+=E+v}}),t.restore()}boxCaption(e){let t=this.out,i=this.w,s=this.h,r=i/540,a=e.cue,o=i*.79;t.font=`600 ${20*r}px Arial`;let c=this.wrap(a.text.split(" "),o).map(u=>u.map(d=>d.word).join(" ")),l=(43+c.length*27)*r,h=s*.83-l*.5;t.fillStyle="rgba(10,18,23,.87)",t.beginPath(),t.roundRect(i*.075,h,i*.85,l,9*r),t.fill(),t.textAlign="center",t.font=`bold ${10*r}px Arial`,t.fillStyle=Kb[this.castIndex(a.speaker)%4],t.fillText(this.nameOf(a.speaker).toUpperCase(),i/2,h+22*r),t.font=`600 ${20*r}px Arial`,t.fillStyle="#eee9dc",c.forEach((u,d)=>t.fillText(u,i/2,h+(48+d*27)*r))}dispose(){this.controls.dispose();for(let e of this.rigs)Nu(e);this.scene.traverse(e=>{if(e.geometry?.dispose(),e.material)for(let t of Array.isArray(e.material)?e.material:[e.material])t.dispose()}),this.composer.dispose(),this.renderer.dispose()}};async function am(n,e=null,t=null){let i=Math.round(n.duration*48e3),s=new Float32Array(i),r=new Float32Array(i),a=new Float32Array(i),o=new Float32Array(i);function c(g,v,m,f=.06,b=0,S="bell",_="music"){let[M,E]=_==="music"?[s,r]:[a,o],A=Math.round(g*48e3);if(A<0||A>=i)return;let R=Math.min(i-A,Math.round(v*48e3));for(let x=0;x<R;x++){let y=x/48e3,L=Math.min(1,y/.018)*Math.exp(-y*(S==="pad"?1.1:3.5));L*=Math.min(1,(v-y)/.08);let U;if(S==="noise"){let k=Math.sin((x+A)*12.9898)*43758.5453;U=(k-Math.floor(k))*2-1,L=Math.exp(-y*35)}else if(S==="sweep"){let k=m*(1+1.6*Math.exp(-y*9));U=Math.sin(2*Math.PI*k*y+6*Math.sin(2*Math.PI*7*y)*Math.exp(-y*4)),L=Math.min(1,y/.01)*Math.exp(-y*5)}else U=Math.sin(2*Math.PI*m*y)+.25*Math.sin(2*Math.PI*m*2*y)*Math.exp(-y*4),S==="bell"&&(U+=.14*Math.sin(2*Math.PI*m*3.01*y)*Math.exp(-y*6));U*=L*f,M[A+x]+=U*Math.sqrt((1-b)/2),E[A+x]+=U*Math.sqrt((1+b)/2)}}let l=(g,v,m)=>{let f=g.getChannelData(Math.min(v,g.numberOfChannels-1)),b=Math.floor(m),S=m-b;return(f[b]||0)*(1-S)+(f[b+1]||0)*S};if(n.music&&t){let g=(n.musicVolume??.6)*.75,v=t.length;for(let m=0;m<i;m++){let f=m/48e3*t.sampleRate%v;s[m]+=l(t,0,f)*g,r[m]+=l(t,1,f)*g}}else if(n.music){let g=[[130.81,164.81,196,261.63],[110,130.81,164.81,220],[87.31,130.81,174.61,220],[98,146.83,196,246.94]],v=(n.musicVolume??.6)/.6;for(let m=0;m<n.duration/.45;m++){let f=m*.45,b=g[Math.floor(m/8)%4];c(f,1.5,b[m%4]*2,.046*v,Math.sin(m)*.45),m%4===0&&c(f,2,b[0]/2,.075*v,0,"pad"),m%2===1&&c(f,.14,1,.016*v,.15,"noise")}}if(n.sfx!==!1)for(let g of n.cues){if(!e&&!n.voiceData){let f=n.cast?.find(b=>b.id===g.speaker)?.kind;f==="bot"||f==="robot"?(c(g.start,.16,660,.055,.3,"bell","sfx"),c(g.start+.11,.2,g.emotion==="idea"?1320:880,.045,.3,"bell","sfx")):c(g.start,.09,1,.028,-.2,"noise","sfx")}let v=g.screen,m=g.start-.15;if(v?.tone==="alert")c(m,.35,330,.07,-.3,"bell","sfx"),c(m+.23,.45,277.18,.06,-.3,"bell","sfx");else if(v?.tone==="success")for(let f=0;f<4;f++)c(m+f*.14,2,[523.25,659.25,783.99,1046.5][f],.07,(f-1.5)*.25,"bell","sfx");else v?.tone==="calm"?(c(m,1.2,587.33,.05,-.2,"bell","sfx"),c(m+.16,1.4,880,.045,.2,"bell","sfx")):v?.tone==="info"&&c(m,.25,1174.66,.04,0,"bell","sfx");if(g.action==="press"&&c(g.start+Math.min((g.end-g.start)*.45,1.2)+.12,.08,1,.1,.3,"noise","sfx"),g.action==="jump"&&c(g.start-.1,.5,180,.07,0,"sweep","sfx"),g.action==="cheer")for(let f=0;f<3;f++)c(g.start+f*.09,.6,1318.5*(1+f*.26),.03,(f-1)*.4,"bell","sfx")}let h=new Float32Array(i),u=new Float32Array(i);if(e){let g=0,v=1-Math.exp(-1/(48e3*.012)),m=1-Math.exp(-1/(48e3*.32));for(let f=0;f<i;f++){let b=f/48e3*e.sampleRate,S=b<e.length?l(e,0,b):0,_=b<e.length?l(e,1,b):0,M=Math.max(Math.abs(S),Math.abs(_));g+=(M-g)*(M>g?v:m);let E=1-.62*Math.min(1,g*7);h[f]=s[f]*E+a[f]+S*.95,u[f]=r[f]*E+o[f]+_*.95}}else for(let g=0;g<i;g++)h[g]=s[g]+a[g],u[g]=r[g]+o[g];let d=0;for(let g=0;g<i;g++)d=Math.max(d,Math.abs(h[g]),Math.abs(u[g]));let p=d>.85?.85/d:1;for(let g=0;g<i;g++){let v=Math.min(1,g/48e3/.5,(i-g)/48e3/.75);h[g]*=p*v,u[g]*=p*v}return[h,u]}function om(n){let e=n[0].length,t=new ArrayBuffer(44+e*4),i=new DataView(t);function s(r,a){[...a].forEach((o,c)=>i.setUint8(r+c,o.charCodeAt(0)))}s(0,"RIFF"),i.setUint32(4,36+e*4,!0),s(8,"WAVEfmt "),i.setUint32(16,16,!0),i.setUint16(20,1,!0),i.setUint16(22,2,!0),i.setUint32(24,48e3,!0),i.setUint32(28,48e3*4,!0),i.setUint16(32,4,!0),i.setUint16(34,16,!0),s(36,"data"),i.setUint32(40,e*4,!0);for(let r=0;r<e;r++)for(let a=0;a<2;a++)i.setInt16(44+(r*2+a)*2,Math.max(-32768,Math.min(32767,n[a][r]*32767)),!0);return new Blob([t],{type:"audio/wav"})}var Yu=(n,e,t)=>{if(!e.has(n))throw TypeError("Cannot "+t)},N=(n,e,t)=>(Yu(n,e,"read from private field"),t?t.call(n):e.get(n)),je=(n,e,t)=>{if(e.has(n))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(n):e.set(n,t)},en=(n,e,t,i)=>(Yu(n,e,"write to private field"),i?i.call(n,t):e.set(n,t),t),nM=(n,e,t,i)=>({set _(s){en(n,e,s,t)},get _(){return N(n,e,i)}}),Qe=(n,e,t)=>(Yu(n,e,"access private method"),t),nt=new Uint8Array(8),pi=new DataView(nt.buffer),Yt=n=>[(n%256+256)%256],ot=n=>(pi.setUint16(0,n,!1),[nt[0],nt[1]]),iM=n=>(pi.setInt16(0,n,!1),[nt[0],nt[1]]),cm=n=>(pi.setUint32(0,n,!1),[nt[1],nt[2],nt[3]]),ge=n=>(pi.setUint32(0,n,!1),[nt[0],nt[1],nt[2],nt[3]]),sM=n=>(pi.setInt32(0,n,!1),[nt[0],nt[1],nt[2],nt[3]]),Hs=n=>(pi.setUint32(0,Math.floor(n/2**32),!1),pi.setUint32(4,n,!1),[nt[0],nt[1],nt[2],nt[3],nt[4],nt[5],nt[6],nt[7]]),$u=n=>(pi.setInt16(0,2**8*n,!1),[nt[0],nt[1]]),di=n=>(pi.setInt32(0,2**16*n,!1),[nt[0],nt[1],nt[2],nt[3]]),Ou=n=>(pi.setInt32(0,2**30*n,!1),[nt[0],nt[1],nt[2],nt[3]]),qn=(n,e=!1)=>{let t=Array(n.length).fill(null).map((i,s)=>n.charCodeAt(s));return e&&t.push(0),t},$c=n=>n&&n[n.length-1],Zu=n=>{let e;for(let t of n)(!e||t.presentationTimestamp>e.presentationTimestamp)&&(e=t);return e},fi=(n,e,t=!0)=>{let i=n*e;return t?Math.round(i):i},hm=n=>{let e=n*(Math.PI/180),t=Math.cos(e),i=Math.sin(e);return[t,i,0,-i,t,0,0,0,1]},um=hm(0),dm=n=>[di(n[0]),di(n[1]),Ou(n[2]),di(n[3]),di(n[4]),Ou(n[5]),di(n[6]),di(n[7]),Ou(n[8])],no=n=>!n||typeof n!="object"?n:Array.isArray(n)?n.map(no):Object.fromEntries(Object.entries(n).map(([e,t])=>[e,no(t)])),Zr=n=>n>=0&&n<2**32,Gt=(n,e,t)=>({type:n,contents:e&&new Uint8Array(e.flat(10)),children:t}),Ct=(n,e,t,i,s)=>Gt(n,[Yt(e),cm(t),i??[]],s),rM=n=>{let e=512;return n.fragmented?Gt("ftyp",[qn("iso5"),ge(e),qn("iso5"),qn("iso6"),qn("mp41")]):Gt("ftyp",[qn("isom"),ge(e),qn("isom"),n.holdsAvc?qn("avc1"):[],qn("mp41")])},ku=n=>({type:"mdat",largeSize:n}),aM=n=>({type:"free",size:n}),Gc=(n,e,t=!1)=>Gt("moov",null,[oM(e,n),...n.map(i=>lM(i,e)),t?BM(n):null]),oM=(n,e)=>{let t=fi(Math.max(0,...e.filter(a=>a.samples.length>0).map(a=>{let o=Zu(a.samples);return o.presentationTimestamp+o.duration})),Vu),i=Math.max(...e.map(a=>a.id))+1,s=!Zr(n)||!Zr(t),r=s?Hs:ge;return Ct("mvhd",+s,0,[r(n),r(n),ge(Vu),r(t),di(1),$u(1),Array(10).fill(0),dm(um),Array(24).fill(0),ge(i)])},lM=(n,e)=>Gt("trak",null,[cM(n,e),hM(n,e)]),cM=(n,e)=>{let t=Zu(n.samples),i=fi(t?t.presentationTimestamp+t.duration:0,Vu),s=!Zr(e)||!Zr(i),r=s?Hs:ge,a;return n.info.type==="video"?a=typeof n.info.rotation=="number"?hm(n.info.rotation):n.info.rotation:a=um,Ct("tkhd",+s,3,[r(e),r(e),ge(n.id),ge(0),r(i),Array(8).fill(0),ot(0),ot(0),$u(n.info.type==="audio"?1:0),ot(0),dm(a),di(n.info.type==="video"?n.info.width:0),di(n.info.type==="video"?n.info.height:0)])},hM=(n,e)=>Gt("mdia",null,[uM(n,e),dM(n.info.type==="video"?"vide":"soun"),fM(n)]),uM=(n,e)=>{let t=Zu(n.samples),i=fi(t?t.presentationTimestamp+t.duration:0,n.timescale),s=!Zr(e)||!Zr(i),r=s?Hs:ge;return Ct("mdhd",+s,0,[r(e),r(e),ge(n.timescale),r(i),ot(21956),ot(0)])},dM=n=>Ct("hdlr",0,0,[qn("mhlr"),qn(n),ge(0),ge(0),ge(0),qn("mp4-muxer-hdlr",!0)]),fM=n=>Gt("minf",null,[n.info.type==="video"?pM():mM(),gM(),xM(n)]),pM=()=>Ct("vmhd",0,1,[ot(0),ot(0),ot(0),ot(0)]),mM=()=>Ct("smhd",0,0,[ot(0),ot(0)]),gM=()=>Gt("dinf",null,[vM()]),vM=()=>Ct("dref",0,0,[ge(1)],[_M()]),_M=()=>Ct("url ",0,1),xM=n=>{let e=n.compositionTimeOffsetTable.length>1||n.compositionTimeOffsetTable.some(t=>t.sampleCompositionTimeOffset!==0);return Gt("stbl",null,[yM(n),LM(n),UM(n),NM(n),FM(n),OM(n),e?kM(n):null])},yM=n=>Ct("stsd",0,0,[ge(1)],[n.info.type==="video"?bM(ZM[n.info.codec],n):IM(KM[n.info.codec],n)]),bM=(n,e)=>Gt(n,[Array(6).fill(0),ot(1),ot(0),ot(0),Array(12).fill(0),ot(e.info.width),ot(e.info.height),ge(4718592),ge(4718592),ge(0),ot(1),Array(32).fill(0),ot(24),iM(65535)],[jM[e.info.codec](e),e.info.decoderConfig.colorSpace?TM(e):null]),MM={bt709:1,bt470bg:5,smpte170m:6},SM={bt709:1,smpte170m:6,"iec61966-2-1":13},wM={rgb:0,bt709:1,bt470bg:5,smpte170m:6},TM=n=>Gt("colr",[qn("nclx"),ot(MM[n.info.decoderConfig.colorSpace.primaries]),ot(SM[n.info.decoderConfig.colorSpace.transfer]),ot(wM[n.info.decoderConfig.colorSpace.matrix]),Yt((n.info.decoderConfig.colorSpace.fullRange?1:0)<<7)]),EM=n=>n.info.decoderConfig&&Gt("avcC",[...new Uint8Array(n.info.decoderConfig.description)]),AM=n=>n.info.decoderConfig&&Gt("hvcC",[...new Uint8Array(n.info.decoderConfig.description)]),CM=n=>{if(!n.info.decoderConfig)return null;let e=n.info.decoderConfig;if(!e.colorSpace)throw new Error("'colorSpace' is required in the decoder config for VP9.");let t=e.codec.split("."),i=Number(t[1]),s=Number(t[2]),o=(Number(t[3])<<4)+(0<<1)+Number(e.colorSpace.fullRange);return Ct("vpcC",1,0,[Yt(i),Yt(s),Yt(o),Yt(2),Yt(2),Yt(2),ot(0)])},RM=()=>{let t=(1<<7)+1;return Gt("av1C",[t,0,0,0])},IM=(n,e)=>Gt(n,[Array(6).fill(0),ot(1),ot(0),ot(0),ge(0),ot(e.info.numberOfChannels),ot(16),ot(0),ot(0),di(e.info.sampleRate)],[JM[e.info.codec](e)]),PM=n=>{let e=new Uint8Array(n.info.decoderConfig.description);return Ct("esds",0,0,[ge(58753152),Yt(32+e.byteLength),ot(1),Yt(0),ge(75530368),Yt(18+e.byteLength),Yt(64),Yt(21),cm(0),ge(130071),ge(130071),ge(92307584),Yt(e.byteLength),...e,ge(109084800),Yt(1),Yt(2)])},DM=n=>{let e=3840,t=0,i=n.info.decoderConfig?.description;if(i){if(i.byteLength<18)throw new TypeError("Invalid decoder description provided for Opus; must be at least 18 bytes long.");let s=ArrayBuffer.isView(i)?new DataView(i.buffer,i.byteOffset,i.byteLength):new DataView(i);e=s.getUint16(10,!0),t=s.getInt16(14,!0)}return Gt("dOps",[Yt(0),Yt(n.info.numberOfChannels),ot(e),ge(n.info.sampleRate),$u(t),Yt(0)])},LM=n=>Ct("stts",0,0,[ge(n.timeToSampleTable.length),n.timeToSampleTable.map(e=>[ge(e.sampleCount),ge(e.sampleDelta)])]),UM=n=>{if(n.samples.every(t=>t.type==="key"))return null;let e=[...n.samples.entries()].filter(([,t])=>t.type==="key");return Ct("stss",0,0,[ge(e.length),e.map(([t])=>ge(t+1))])},NM=n=>Ct("stsc",0,0,[ge(n.compactlyCodedChunkTable.length),n.compactlyCodedChunkTable.map(e=>[ge(e.firstChunk),ge(e.samplesPerChunk),ge(1)])]),FM=n=>Ct("stsz",0,0,[ge(0),ge(n.samples.length),n.samples.map(e=>ge(e.size))]),OM=n=>n.finalizedChunks.length>0&&$c(n.finalizedChunks).offset>=2**32?Ct("co64",0,0,[ge(n.finalizedChunks.length),n.finalizedChunks.map(e=>Hs(e.offset))]):Ct("stco",0,0,[ge(n.finalizedChunks.length),n.finalizedChunks.map(e=>ge(e.offset))]),kM=n=>Ct("ctts",0,0,[ge(n.compositionTimeOffsetTable.length),n.compositionTimeOffsetTable.map(e=>[ge(e.sampleCount),ge(e.sampleCompositionTimeOffset)])]),BM=n=>Gt("mvex",null,n.map(zM)),zM=n=>Ct("trex",0,0,[ge(n.id),ge(1),ge(0),ge(0),ge(0)]),lm=(n,e)=>Gt("moof",null,[VM(n),...e.map(HM)]),VM=n=>Ct("mfhd",0,0,[ge(n)]),fm=n=>{let e=0,t=0,i=0,s=0,r=n.type==="delta";return t|=+r,r?e|=1:e|=2,e<<24|t<<16|i<<8|s},HM=n=>Gt("traf",null,[GM(n),WM(n),XM(n)]),GM=n=>{let e=0;e|=8,e|=16,e|=32,e|=131072;let t=n.currentChunk.samples[1]??n.currentChunk.samples[0],i={duration:t.timescaleUnitsToNextSample,size:t.size,flags:fm(t)};return Ct("tfhd",0,e,[ge(n.id),ge(i.duration),ge(i.size),ge(i.flags)])},WM=n=>Ct("tfdt",1,0,[Hs(fi(n.currentChunk.startTimestamp,n.timescale))]),XM=n=>{let e=n.currentChunk.samples.map(v=>v.timescaleUnitsToNextSample),t=n.currentChunk.samples.map(v=>v.size),i=n.currentChunk.samples.map(fm),s=n.currentChunk.samples.map(v=>fi(v.presentationTimestamp-v.decodeTimestamp,n.timescale)),r=new Set(e),a=new Set(t),o=new Set(i),c=new Set(s),l=o.size===2&&i[0]!==i[1],h=r.size>1,u=a.size>1,d=!l&&o.size>1,p=c.size>1||[...c].some(v=>v!==0),g=0;return g|=1,g|=4*+l,g|=256*+h,g|=512*+u,g|=1024*+d,g|=2048*+p,Ct("trun",1,g,[ge(n.currentChunk.samples.length),ge(n.currentChunk.offset-n.currentChunk.moofOffset||0),l?ge(i[0]):[],n.currentChunk.samples.map((v,m)=>[h?ge(e[m]):[],u?ge(t[m]):[],d?ge(i[m]):[],p?sM(s[m]):[]])])},qM=n=>Gt("mfra",null,[...n.map(YM),$M()]),YM=(n,e)=>Ct("tfra",1,0,[ge(n.id),ge(63),ge(n.finalizedChunks.length),n.finalizedChunks.map(i=>[Hs(fi(i.startTimestamp,n.timescale)),Hs(i.moofOffset),ge(e+1),ge(1),ge(1)])]),$M=()=>Ct("mfro",0,0,[ge(0)]),ZM={avc:"avc1",hevc:"hvc1",vp9:"vp09",av1:"av01"},jM={avc:EM,hevc:AM,vp9:CM,av1:RM},KM={aac:"mp4a",opus:"Opus"},JM={aac:PM,opus:DM},RE=Symbol("isTarget"),eh=class{},ju=class extends eh{constructor(){super(...arguments),this.buffer=null}},pm=class extends eh{constructor(n){if(super(),this.options=n,typeof n!="object")throw new TypeError("StreamTarget requires an options object to be passed to its constructor.");if(n.onData){if(typeof n.onData!="function")throw new TypeError("options.onData, when provided, must be a function.");if(n.onData.length<2)throw new TypeError("options.onData, when provided, must be a function that takes in at least two arguments (data and position). Ignoring the position argument, which specifies the byte offset at which the data is to be written, can lead to broken outputs.")}if(n.chunked!==void 0&&typeof n.chunked!="boolean")throw new TypeError("options.chunked, when provided, must be a boolean.");if(n.chunkSize!==void 0&&(!Number.isInteger(n.chunkSize)||n.chunkSize<1024))throw new TypeError("options.chunkSize, when provided, must be an integer and not smaller than 1024.")}},QM=class extends eh{constructor(n,e){if(super(),this.stream=n,this.options=e,!(n instanceof FileSystemWritableFileStream))throw new TypeError("FileSystemWritableFileStreamTarget requires a FileSystemWritableFileStream instance.");if(e!==void 0&&typeof e!="object")throw new TypeError("FileSystemWritableFileStreamTarget's options, when provided, must be an object.");if(e&&e.chunkSize!==void 0&&(!Number.isInteger(e.chunkSize)||e.chunkSize<=0))throw new TypeError("options.chunkSize, when provided, must be a positive integer")}},Os,qr,mm=class{constructor(){this.pos=0,je(this,Os,new Uint8Array(8)),je(this,qr,new DataView(N(this,Os).buffer)),this.offsets=new WeakMap}seek(n){this.pos=n}writeU32(n){N(this,qr).setUint32(0,n,!1),this.write(N(this,Os).subarray(0,4))}writeU64(n){N(this,qr).setUint32(0,Math.floor(n/2**32),!1),N(this,qr).setUint32(4,n,!1),this.write(N(this,Os).subarray(0,8))}writeAscii(n){for(let e=0;e<n.length;e++)N(this,qr).setUint8(e%8,n.charCodeAt(e)),e%8===7&&this.write(N(this,Os));n.length%8!==0&&this.write(N(this,Os).subarray(0,n.length%8))}writeBox(n){if(this.offsets.set(n,this.pos),n.contents&&!n.children)this.writeBoxHeader(n,n.size??n.contents.byteLength+8),this.write(n.contents);else{let e=this.pos;if(this.writeBoxHeader(n,0),n.contents&&this.write(n.contents),n.children)for(let s of n.children)s&&this.writeBox(s);let t=this.pos,i=n.size??t-e;this.seek(e),this.writeBoxHeader(n,i),this.seek(t)}}writeBoxHeader(n,e){this.writeU32(n.largeSize?1:e),this.writeAscii(n.type),n.largeSize&&this.writeU64(e)}measureBoxHeader(n){return 8+(n.largeSize?8:0)}patchBox(n){let e=this.pos;this.seek(this.offsets.get(n)),this.writeBox(n),this.seek(e)}measureBox(n){if(n.contents&&!n.children)return this.measureBoxHeader(n)+n.contents.byteLength;{let e=this.measureBoxHeader(n);if(n.contents&&(e+=n.contents.byteLength),n.children)for(let t of n.children)t&&(e+=this.measureBox(t));return e}}};Os=new WeakMap;qr=new WeakMap;var Wc,Vs,oo,eo,Xc,Bu,eS=class extends mm{constructor(n){super(),je(this,Xc),je(this,Wc,void 0),je(this,Vs,new ArrayBuffer(2**16)),je(this,oo,new Uint8Array(N(this,Vs))),je(this,eo,0),en(this,Wc,n)}write(n){Qe(this,Xc,Bu).call(this,this.pos+n.byteLength),N(this,oo).set(n,this.pos),this.pos+=n.byteLength,en(this,eo,Math.max(N(this,eo),this.pos))}finalize(){Qe(this,Xc,Bu).call(this,this.pos),N(this,Wc).buffer=N(this,Vs).slice(0,Math.max(N(this,eo),this.pos))}};Wc=new WeakMap;Vs=new WeakMap;oo=new WeakMap;eo=new WeakMap;Xc=new WeakSet;Bu=function(n){let e=N(this,Vs).byteLength;for(;e<n;)e*=2;if(e===N(this,Vs).byteLength)return;let t=new ArrayBuffer(e),i=new Uint8Array(t);i.set(N(this,oo),0),en(this,Vs,t),en(this,oo,i)};var tS=2**24,nS=2,io,ks,to,Li,Nn,Zc,zu,Ku,gm,Ju,vm,so,jc,Qu=class extends mm{constructor(n){super(),je(this,Zc),je(this,Ku),je(this,Ju),je(this,so),je(this,io,void 0),je(this,ks,[]),je(this,to,void 0),je(this,Li,void 0),je(this,Nn,[]),en(this,io,n),en(this,to,n.options?.chunked??!1),en(this,Li,n.options?.chunkSize??tS)}write(n){N(this,ks).push({data:n.slice(),start:this.pos}),this.pos+=n.byteLength}flush(){if(N(this,ks).length===0)return;let n=[],e=[...N(this,ks)].sort((t,i)=>t.start-i.start);n.push({start:e[0].start,size:e[0].data.byteLength});for(let t=1;t<e.length;t++){let i=n[n.length-1],s=e[t];s.start<=i.start+i.size?i.size=Math.max(i.size,s.start+s.data.byteLength-i.start):n.push({start:s.start,size:s.data.byteLength})}for(let t of n){t.data=new Uint8Array(t.size);for(let i of N(this,ks))t.start<=i.start&&i.start<t.start+t.size&&t.data.set(i.data,i.start-t.start);N(this,to)?(Qe(this,Zc,zu).call(this,t.data,t.start),Qe(this,so,jc).call(this)):N(this,io).options.onData?.(t.data,t.start)}N(this,ks).length=0}finalize(){N(this,to)&&Qe(this,so,jc).call(this,!0)}};io=new WeakMap;ks=new WeakMap;to=new WeakMap;Li=new WeakMap;Nn=new WeakMap;Zc=new WeakSet;zu=function(n,e){let t=N(this,Nn).findIndex(o=>o.start<=e&&e<o.start+N(this,Li));t===-1&&(t=Qe(this,Ju,vm).call(this,e));let i=N(this,Nn)[t],s=e-i.start,r=n.subarray(0,Math.min(N(this,Li)-s,n.byteLength));i.data.set(r,s);let a={start:s,end:s+r.byteLength};if(Qe(this,Ku,gm).call(this,i,a),i.written[0].start===0&&i.written[0].end===N(this,Li)&&(i.shouldFlush=!0),N(this,Nn).length>nS){for(let o=0;o<N(this,Nn).length-1;o++)N(this,Nn)[o].shouldFlush=!0;Qe(this,so,jc).call(this)}r.byteLength<n.byteLength&&Qe(this,Zc,zu).call(this,n.subarray(r.byteLength),e+r.byteLength)};Ku=new WeakSet;gm=function(n,e){let t=0,i=n.written.length-1,s=-1;for(;t<=i;){let r=Math.floor(t+(i-t+1)/2);n.written[r].start<=e.start?(t=r+1,s=r):i=r-1}for(n.written.splice(s+1,0,e),(s===-1||n.written[s].end<e.start)&&s++;s<n.written.length-1&&n.written[s].end>=n.written[s+1].start;)n.written[s].end=Math.max(n.written[s].end,n.written[s+1].end),n.written.splice(s+1,1)};Ju=new WeakSet;vm=function(n){let t={start:Math.floor(n/N(this,Li))*N(this,Li),data:new Uint8Array(N(this,Li)),written:[],shouldFlush:!1};return N(this,Nn).push(t),N(this,Nn).sort((i,s)=>i.start-s.start),N(this,Nn).indexOf(t)};so=new WeakSet;jc=function(n=!1){for(let e=0;e<N(this,Nn).length;e++){let t=N(this,Nn)[e];if(!(!t.shouldFlush&&!n)){for(let i of t.written)N(this,io).options.onData?.(t.data.subarray(i.start,i.end),t.start+i.start);N(this,Nn).splice(e--,1)}}};var iS=class extends Qu{constructor(n){super(new pm({onData:(e,t)=>n.stream.write({type:"write",data:e,position:t}),chunked:!0,chunkSize:n.options?.chunkSize}))}},Vu=1e3,sS=["avc","hevc","vp9","av1"],rS=["aac","opus"],aS=2082844800,oS=["strict","offset","cross-track-offset"],Pe,Be,Kc,Un,sn,Qt,Yr,$r,ed,Bs,zs,ro,Hu,_m,Gu,xm,td,ym,Wu,bm,nd,Mm,qc,Xu,ui,Di,id,Sm,ao,Jc,Qc,sd,jr,lo,Yc,qu,wm=class{constructor(n){if(je(this,Hu),je(this,Gu),je(this,td),je(this,Wu),je(this,nd),je(this,qc),je(this,ui),je(this,id),je(this,ao),je(this,Qc),je(this,jr),je(this,Yc),je(this,Pe,void 0),je(this,Be,void 0),je(this,Kc,void 0),je(this,Un,void 0),je(this,sn,null),je(this,Qt,null),je(this,Yr,Math.floor(Date.now()/1e3)+aS),je(this,$r,[]),je(this,ed,1),je(this,Bs,[]),je(this,zs,[]),je(this,ro,!1),Qe(this,Hu,_m).call(this,n),n.video=no(n.video),n.audio=no(n.audio),n.fastStart=no(n.fastStart),this.target=n.target,en(this,Pe,{firstTimestampBehavior:"strict",...n}),n.target instanceof ju)en(this,Be,new eS(n.target));else if(n.target instanceof pm)en(this,Be,new Qu(n.target));else if(n.target instanceof QM)en(this,Be,new iS(n.target));else throw new Error(`Invalid target: ${n.target}`);Qe(this,Wu,bm).call(this),Qe(this,Gu,xm).call(this)}addVideoChunk(n,e,t,i){if(!(n instanceof EncodedVideoChunk))throw new TypeError("addVideoChunk's first argument (sample) must be of type EncodedVideoChunk.");if(e&&typeof e!="object")throw new TypeError("addVideoChunk's second argument (meta), when provided, must be an object.");if(t!==void 0&&(!Number.isFinite(t)||t<0))throw new TypeError("addVideoChunk's third argument (timestamp), when provided, must be a non-negative real number.");if(i!==void 0&&!Number.isFinite(i))throw new TypeError("addVideoChunk's fourth argument (compositionTimeOffset), when provided, must be a real number.");let s=new Uint8Array(n.byteLength);n.copyTo(s),this.addVideoChunkRaw(s,n.type,t??n.timestamp,n.duration,e,i)}addVideoChunkRaw(n,e,t,i,s,r){if(!(n instanceof Uint8Array))throw new TypeError("addVideoChunkRaw's first argument (data) must be an instance of Uint8Array.");if(e!=="key"&&e!=="delta")throw new TypeError("addVideoChunkRaw's second argument (type) must be either 'key' or 'delta'.");if(!Number.isFinite(t)||t<0)throw new TypeError("addVideoChunkRaw's third argument (timestamp) must be a non-negative real number.");if(!Number.isFinite(i)||i<0)throw new TypeError("addVideoChunkRaw's fourth argument (duration) must be a non-negative real number.");if(s&&typeof s!="object")throw new TypeError("addVideoChunkRaw's fifth argument (meta), when provided, must be an object.");if(r!==void 0&&!Number.isFinite(r))throw new TypeError("addVideoChunkRaw's sixth argument (compositionTimeOffset), when provided, must be a real number.");if(Qe(this,Yc,qu).call(this),!N(this,Pe).video)throw new Error("No video track declared.");if(typeof N(this,Pe).fastStart=="object"&&N(this,sn).samples.length===N(this,Pe).fastStart.expectedVideoChunks)throw new Error(`Cannot add more video chunks than specified in 'fastStart' (${N(this,Pe).fastStart.expectedVideoChunks}).`);let a=Qe(this,qc,Xu).call(this,N(this,sn),n,e,t,i,s,r);if(N(this,Pe).fastStart==="fragmented"&&N(this,Qt)){for(;N(this,zs).length>0&&N(this,zs)[0].decodeTimestamp<=a.decodeTimestamp;){let o=N(this,zs).shift();Qe(this,ui,Di).call(this,N(this,Qt),o)}a.decodeTimestamp<=N(this,Qt).lastDecodeTimestamp?Qe(this,ui,Di).call(this,N(this,sn),a):N(this,Bs).push(a)}else Qe(this,ui,Di).call(this,N(this,sn),a)}addAudioChunk(n,e,t){if(!(n instanceof EncodedAudioChunk))throw new TypeError("addAudioChunk's first argument (sample) must be of type EncodedAudioChunk.");if(e&&typeof e!="object")throw new TypeError("addAudioChunk's second argument (meta), when provided, must be an object.");if(t!==void 0&&(!Number.isFinite(t)||t<0))throw new TypeError("addAudioChunk's third argument (timestamp), when provided, must be a non-negative real number.");let i=new Uint8Array(n.byteLength);n.copyTo(i),this.addAudioChunkRaw(i,n.type,t??n.timestamp,n.duration,e)}addAudioChunkRaw(n,e,t,i,s){if(!(n instanceof Uint8Array))throw new TypeError("addAudioChunkRaw's first argument (data) must be an instance of Uint8Array.");if(e!=="key"&&e!=="delta")throw new TypeError("addAudioChunkRaw's second argument (type) must be either 'key' or 'delta'.");if(!Number.isFinite(t)||t<0)throw new TypeError("addAudioChunkRaw's third argument (timestamp) must be a non-negative real number.");if(!Number.isFinite(i)||i<0)throw new TypeError("addAudioChunkRaw's fourth argument (duration) must be a non-negative real number.");if(s&&typeof s!="object")throw new TypeError("addAudioChunkRaw's fifth argument (meta), when provided, must be an object.");if(Qe(this,Yc,qu).call(this),!N(this,Pe).audio)throw new Error("No audio track declared.");if(typeof N(this,Pe).fastStart=="object"&&N(this,Qt).samples.length===N(this,Pe).fastStart.expectedAudioChunks)throw new Error(`Cannot add more audio chunks than specified in 'fastStart' (${N(this,Pe).fastStart.expectedAudioChunks}).`);let r=Qe(this,qc,Xu).call(this,N(this,Qt),n,e,t,i,s);if(N(this,Pe).fastStart==="fragmented"&&N(this,sn)){for(;N(this,Bs).length>0&&N(this,Bs)[0].decodeTimestamp<=r.decodeTimestamp;){let a=N(this,Bs).shift();Qe(this,ui,Di).call(this,N(this,sn),a)}r.decodeTimestamp<=N(this,sn).lastDecodeTimestamp?Qe(this,ui,Di).call(this,N(this,Qt),r):N(this,zs).push(r)}else Qe(this,ui,Di).call(this,N(this,Qt),r)}finalize(){if(N(this,ro))throw new Error("Cannot finalize a muxer more than once.");if(N(this,Pe).fastStart==="fragmented"){for(let e of N(this,Bs))Qe(this,ui,Di).call(this,N(this,sn),e);for(let e of N(this,zs))Qe(this,ui,Di).call(this,N(this,Qt),e);Qe(this,Qc,sd).call(this,!1)}else N(this,sn)&&Qe(this,ao,Jc).call(this,N(this,sn)),N(this,Qt)&&Qe(this,ao,Jc).call(this,N(this,Qt));let n=[N(this,sn),N(this,Qt)].filter(Boolean);if(N(this,Pe).fastStart==="in-memory"){let e;for(let i=0;i<2;i++){let s=Gc(n,N(this,Yr)),r=N(this,Be).measureBox(s);e=N(this,Be).measureBox(N(this,Un));let a=N(this,Be).pos+r+e;for(let o of N(this,$r)){o.offset=a;for(let{data:c}of o.samples)a+=c.byteLength,e+=c.byteLength}if(a<2**32)break;e>=2**32&&(N(this,Un).largeSize=!0)}let t=Gc(n,N(this,Yr));N(this,Be).writeBox(t),N(this,Un).size=e,N(this,Be).writeBox(N(this,Un));for(let i of N(this,$r))for(let s of i.samples)N(this,Be).write(s.data),s.data=null}else if(N(this,Pe).fastStart==="fragmented"){let e=N(this,Be).pos,t=qM(n);N(this,Be).writeBox(t);let i=N(this,Be).pos-e;N(this,Be).seek(N(this,Be).pos-4),N(this,Be).writeU32(i)}else{let e=N(this,Be).offsets.get(N(this,Un)),t=N(this,Be).pos-e;N(this,Un).size=t,N(this,Un).largeSize=t>=2**32,N(this,Be).patchBox(N(this,Un));let i=Gc(n,N(this,Yr));if(typeof N(this,Pe).fastStart=="object"){N(this,Be).seek(N(this,Kc)),N(this,Be).writeBox(i);let s=e-N(this,Be).pos;N(this,Be).writeBox(aM(s))}else N(this,Be).writeBox(i)}Qe(this,jr,lo).call(this),N(this,Be).finalize(),en(this,ro,!0)}};Pe=new WeakMap;Be=new WeakMap;Kc=new WeakMap;Un=new WeakMap;sn=new WeakMap;Qt=new WeakMap;Yr=new WeakMap;$r=new WeakMap;ed=new WeakMap;Bs=new WeakMap;zs=new WeakMap;ro=new WeakMap;Hu=new WeakSet;_m=function(n){if(typeof n!="object")throw new TypeError("The muxer requires an options object to be passed to its constructor.");if(!(n.target instanceof eh))throw new TypeError("The target must be provided and an instance of Target.");if(n.video){if(!sS.includes(n.video.codec))throw new TypeError(`Unsupported video codec: ${n.video.codec}`);if(!Number.isInteger(n.video.width)||n.video.width<=0)throw new TypeError(`Invalid video width: ${n.video.width}. Must be a positive integer.`);if(!Number.isInteger(n.video.height)||n.video.height<=0)throw new TypeError(`Invalid video height: ${n.video.height}. Must be a positive integer.`);let e=n.video.rotation;if(typeof e=="number"&&![0,90,180,270].includes(e))throw new TypeError(`Invalid video rotation: ${e}. Has to be 0, 90, 180 or 270.`);if(Array.isArray(e)&&(e.length!==9||e.some(t=>typeof t!="number")))throw new TypeError(`Invalid video transformation matrix: ${e.join()}`);if(n.video.frameRate!==void 0&&(!Number.isInteger(n.video.frameRate)||n.video.frameRate<=0))throw new TypeError(`Invalid video frame rate: ${n.video.frameRate}. Must be a positive integer.`)}if(n.audio){if(!rS.includes(n.audio.codec))throw new TypeError(`Unsupported audio codec: ${n.audio.codec}`);if(!Number.isInteger(n.audio.numberOfChannels)||n.audio.numberOfChannels<=0)throw new TypeError(`Invalid number of audio channels: ${n.audio.numberOfChannels}. Must be a positive integer.`);if(!Number.isInteger(n.audio.sampleRate)||n.audio.sampleRate<=0)throw new TypeError(`Invalid audio sample rate: ${n.audio.sampleRate}. Must be a positive integer.`)}if(n.firstTimestampBehavior&&!oS.includes(n.firstTimestampBehavior))throw new TypeError(`Invalid first timestamp behavior: ${n.firstTimestampBehavior}`);if(typeof n.fastStart=="object"){if(n.video){if(n.fastStart.expectedVideoChunks===void 0)throw new TypeError("'fastStart' is an object but is missing property 'expectedVideoChunks'.");if(!Number.isInteger(n.fastStart.expectedVideoChunks)||n.fastStart.expectedVideoChunks<0)throw new TypeError("'expectedVideoChunks' must be a non-negative integer.")}if(n.audio){if(n.fastStart.expectedAudioChunks===void 0)throw new TypeError("'fastStart' is an object but is missing property 'expectedAudioChunks'.");if(!Number.isInteger(n.fastStart.expectedAudioChunks)||n.fastStart.expectedAudioChunks<0)throw new TypeError("'expectedAudioChunks' must be a non-negative integer.")}}else if(![!1,"in-memory","fragmented"].includes(n.fastStart))throw new TypeError("'fastStart' option must be false, 'in-memory', 'fragmented' or an object.");if(n.minFragmentDuration!==void 0&&(!Number.isFinite(n.minFragmentDuration)||n.minFragmentDuration<0))throw new TypeError("'minFragmentDuration' must be a non-negative number.")};Gu=new WeakSet;xm=function(){if(N(this,Be).writeBox(rM({holdsAvc:N(this,Pe).video?.codec==="avc",fragmented:N(this,Pe).fastStart==="fragmented"})),en(this,Kc,N(this,Be).pos),N(this,Pe).fastStart==="in-memory")en(this,Un,ku(!1));else if(N(this,Pe).fastStart!=="fragmented"){if(typeof N(this,Pe).fastStart=="object"){let n=Qe(this,td,ym).call(this);N(this,Be).seek(N(this,Be).pos+n)}en(this,Un,ku(!0)),N(this,Be).writeBox(N(this,Un))}Qe(this,jr,lo).call(this)};td=new WeakSet;ym=function(){if(typeof N(this,Pe).fastStart!="object")return;let n=0,e=[N(this,Pe).fastStart.expectedVideoChunks,N(this,Pe).fastStart.expectedAudioChunks];for(let t of e)t&&(n+=8*Math.ceil(2/3*t),n+=4*t,n+=12*Math.ceil(2/3*t),n+=4*t,n+=8*t);return n+=4096,n};Wu=new WeakSet;bm=function(){if(N(this,Pe).video&&en(this,sn,{id:1,info:{type:"video",codec:N(this,Pe).video.codec,width:N(this,Pe).video.width,height:N(this,Pe).video.height,rotation:N(this,Pe).video.rotation??0,decoderConfig:null},timescale:N(this,Pe).video.frameRate??57600,samples:[],finalizedChunks:[],currentChunk:null,firstDecodeTimestamp:void 0,lastDecodeTimestamp:-1,timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,compactlyCodedChunkTable:[]}),N(this,Pe).audio&&(en(this,Qt,{id:N(this,Pe).video?2:1,info:{type:"audio",codec:N(this,Pe).audio.codec,numberOfChannels:N(this,Pe).audio.numberOfChannels,sampleRate:N(this,Pe).audio.sampleRate,decoderConfig:null},timescale:N(this,Pe).audio.sampleRate,samples:[],finalizedChunks:[],currentChunk:null,firstDecodeTimestamp:void 0,lastDecodeTimestamp:-1,timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,compactlyCodedChunkTable:[]}),N(this,Pe).audio.codec==="aac")){let n=Qe(this,nd,Mm).call(this,2,N(this,Pe).audio.sampleRate,N(this,Pe).audio.numberOfChannels);N(this,Qt).info.decoderConfig={codec:N(this,Pe).audio.codec,description:n,numberOfChannels:N(this,Pe).audio.numberOfChannels,sampleRate:N(this,Pe).audio.sampleRate}}};nd=new WeakSet;Mm=function(n,e,t){let s=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350].indexOf(e),r=t,a="";a+=n.toString(2).padStart(5,"0"),a+=s.toString(2).padStart(4,"0"),s===15&&(a+=e.toString(2).padStart(24,"0")),a+=r.toString(2).padStart(4,"0");let o=Math.ceil(a.length/8)*8;a=a.padEnd(o,"0");let c=new Uint8Array(a.length/8);for(let l=0;l<a.length;l+=8)c[l/8]=parseInt(a.slice(l,l+8),2);return c};qc=new WeakSet;Xu=function(n,e,t,i,s,r,a){let o=i/1e6,c=(i-(a??0))/1e6,l=s/1e6,h=Qe(this,id,Sm).call(this,o,c,n);return o=h.presentationTimestamp,c=h.decodeTimestamp,r?.decoderConfig&&(n.info.decoderConfig===null?n.info.decoderConfig=r.decoderConfig:Object.assign(n.info.decoderConfig,r.decoderConfig)),{presentationTimestamp:o,decodeTimestamp:c,duration:l,data:e,size:e.byteLength,type:t,timescaleUnitsToNextSample:fi(l,n.timescale)}};ui=new WeakSet;Di=function(n,e){N(this,Pe).fastStart!=="fragmented"&&n.samples.push(e);let t=fi(e.presentationTimestamp-e.decodeTimestamp,n.timescale);if(n.lastTimescaleUnits!==null){let s=fi(e.decodeTimestamp,n.timescale,!1),r=Math.round(s-n.lastTimescaleUnits);if(n.lastTimescaleUnits+=r,n.lastSample.timescaleUnitsToNextSample=r,N(this,Pe).fastStart!=="fragmented"){let a=$c(n.timeToSampleTable);a.sampleCount===1?(a.sampleDelta=r,a.sampleCount++):a.sampleDelta===r?a.sampleCount++:(a.sampleCount--,n.timeToSampleTable.push({sampleCount:2,sampleDelta:r}));let o=$c(n.compositionTimeOffsetTable);o.sampleCompositionTimeOffset===t?o.sampleCount++:n.compositionTimeOffsetTable.push({sampleCount:1,sampleCompositionTimeOffset:t})}}else n.lastTimescaleUnits=0,N(this,Pe).fastStart!=="fragmented"&&(n.timeToSampleTable.push({sampleCount:1,sampleDelta:fi(e.duration,n.timescale)}),n.compositionTimeOffsetTable.push({sampleCount:1,sampleCompositionTimeOffset:t}));n.lastSample=e;let i=!1;if(!n.currentChunk)i=!0;else{let s=e.presentationTimestamp-n.currentChunk.startTimestamp;if(N(this,Pe).fastStart==="fragmented"){let r=N(this,sn)??N(this,Qt),a=N(this,Pe).minFragmentDuration??1;n===r&&e.type==="key"&&s>=a&&(i=!0,Qe(this,Qc,sd).call(this))}else i=s>=.5}i&&(n.currentChunk&&Qe(this,ao,Jc).call(this,n),n.currentChunk={startTimestamp:e.presentationTimestamp,samples:[]}),n.currentChunk.samples.push(e)};id=new WeakSet;Sm=function(n,e,t){let i=N(this,Pe).firstTimestampBehavior==="strict",s=t.lastDecodeTimestamp===-1;if(i&&s&&e!==0)throw new Error(`The first chunk for your media track must have a timestamp of 0 (received DTS=${e}).Non-zero first timestamps are often caused by directly piping frames or audio data from a MediaStreamTrack into the encoder. Their timestamps are typically relative to the age of thedocument, which is probably what you want.

If you want to offset all timestamps of a track such that the first one is zero, set firstTimestampBehavior: 'offset' in the options.
`);if(N(this,Pe).firstTimestampBehavior==="offset"||N(this,Pe).firstTimestampBehavior==="cross-track-offset"){t.firstDecodeTimestamp===void 0&&(t.firstDecodeTimestamp=e);let a;N(this,Pe).firstTimestampBehavior==="offset"?a=t.firstDecodeTimestamp:a=Math.min(N(this,sn)?.firstDecodeTimestamp??1/0,N(this,Qt)?.firstDecodeTimestamp??1/0),e-=a,n-=a}if(e<t.lastDecodeTimestamp)throw new Error(`Timestamps must be monotonically increasing (DTS went from ${t.lastDecodeTimestamp*1e6} to ${e*1e6}).`);return t.lastDecodeTimestamp=e,{presentationTimestamp:n,decodeTimestamp:e}};ao=new WeakSet;Jc=function(n){if(N(this,Pe).fastStart==="fragmented")throw new Error("Can't finalize individual chunks if 'fastStart' is set to 'fragmented'.");if(n.currentChunk){if(n.finalizedChunks.push(n.currentChunk),N(this,$r).push(n.currentChunk),(n.compactlyCodedChunkTable.length===0||$c(n.compactlyCodedChunkTable).samplesPerChunk!==n.currentChunk.samples.length)&&n.compactlyCodedChunkTable.push({firstChunk:n.finalizedChunks.length,samplesPerChunk:n.currentChunk.samples.length}),N(this,Pe).fastStart==="in-memory"){n.currentChunk.offset=0;return}n.currentChunk.offset=N(this,Be).pos;for(let e of n.currentChunk.samples)N(this,Be).write(e.data),e.data=null;Qe(this,jr,lo).call(this)}};Qc=new WeakSet;sd=function(n=!0){if(N(this,Pe).fastStart!=="fragmented")throw new Error("Can't finalize a fragment unless 'fastStart' is set to 'fragmented'.");let e=[N(this,sn),N(this,Qt)].filter(o=>o&&o.currentChunk);if(e.length===0)return;let t=nM(this,ed)._++;if(t===1){let o=Gc(e,N(this,Yr),!0);N(this,Be).writeBox(o)}let i=N(this,Be).pos,s=lm(t,e);N(this,Be).writeBox(s);{let o=ku(!1),c=0;for(let h of e)for(let u of h.currentChunk.samples)c+=u.size;let l=N(this,Be).measureBox(o)+c;l>=2**32&&(o.largeSize=!0,l=N(this,Be).measureBox(o)+c),o.size=l,N(this,Be).writeBox(o)}for(let o of e){o.currentChunk.offset=N(this,Be).pos,o.currentChunk.moofOffset=i;for(let c of o.currentChunk.samples)N(this,Be).write(c.data),c.data=null}let r=N(this,Be).pos;N(this,Be).seek(N(this,Be).offsets.get(s));let a=lm(t,e);N(this,Be).writeBox(a),N(this,Be).seek(r);for(let o of e)o.finalizedChunks.push(o.currentChunk),N(this,$r).push(o.currentChunk),o.currentChunk=null;n&&Qe(this,jr,lo).call(this)};jr=new WeakSet;lo=function(){N(this,Be)instanceof Qu&&N(this,Be).flush()};Yc=new WeakSet;qu=function(){if(N(this,ro))throw new Error("Cannot add new video or audio chunks after the file has been finalized.")};var an=Uint8Array,Fn=Uint16Array,hd=Int32Array,ud=new an([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),dd=new an([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Tm=new an([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Pm=function(n,e){for(var t=new Fn(31),i=0;i<31;++i)t[i]=e+=1<<n[i-1];for(var s=new hd(t[30]),i=1;i<30;++i)for(var r=t[i];r<t[i+1];++r)s[r]=r-t[i]<<5|i;return{b:t,r:s}},Dm=Pm(ud,2),lS=Dm.b,ad=Dm.r;lS[28]=258,ad[258]=28;var Lm=Pm(dd,0),zE=Lm.b,Em=Lm.r,od=new Fn(32768);for(lt=0;lt<32768;++lt)Ui=(lt&43690)>>1|(lt&21845)<<1,Ui=(Ui&52428)>>2|(Ui&13107)<<2,Ui=(Ui&61680)>>4|(Ui&3855)<<4,od[lt]=((Ui&65280)>>8|(Ui&255)<<8)>>1;var Ui,lt,uo=(function(n,e,t){for(var i=n.length,s=0,r=new Fn(e);s<i;++s)n[s]&&++r[n[s]-1];var a=new Fn(e);for(s=1;s<e;++s)a[s]=a[s-1]+r[s-1]<<1;var o;if(t){o=new Fn(1<<e);var c=15-e;for(s=0;s<i;++s)if(n[s])for(var l=s<<4|n[s],h=e-n[s],u=a[n[s]-1]++<<h,d=u|(1<<h)-1;u<=d;++u)o[od[u]>>c]=l}else for(o=new Fn(i),s=0;s<i;++s)n[s]&&(o[s]=od[a[n[s]-1]++]>>15-n[s]);return o}),Gs=new an(288);for(lt=0;lt<144;++lt)Gs[lt]=8;var lt;for(lt=144;lt<256;++lt)Gs[lt]=9;var lt;for(lt=256;lt<280;++lt)Gs[lt]=7;var lt;for(lt=280;lt<288;++lt)Gs[lt]=8;var lt,th=new an(32);for(lt=0;lt<32;++lt)th[lt]=5;var lt,cS=uo(Gs,9,0);var hS=uo(th,5,0);var Um=function(n){return(n+7)/8|0},Nm=function(n,e,t){return(e==null||e<0)&&(e=0),(t==null||t>n.length)&&(t=n.length),new an(n.subarray(e,t))};var uS=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],nh=function(n,e,t){var i=new Error(e||uS[n]);if(i.code=n,Error.captureStackTrace&&Error.captureStackTrace(i,nh),!t)throw i;return i};var Ni=function(n,e,t){t<<=e&7;var i=e/8|0;n[i]|=t,n[i+1]|=t>>8},co=function(n,e,t){t<<=e&7;var i=e/8|0;n[i]|=t,n[i+1]|=t>>8,n[i+2]|=t>>16},rd=function(n,e){for(var t=[],i=0;i<n.length;++i)n[i]&&t.push({s:i,f:n[i]});var s=t.length,r=t.slice();if(!s)return{t:Om,l:0};if(s==1){var a=new an(t[0].s+1);return a[t[0].s]=1,{t:a,l:1}}t.sort(function(M,E){return M.f-E.f}),t.push({s:-1,f:25001});var o=t[0],c=t[1],l=0,h=1,u=2;for(t[0]={s:-1,f:o.f+c.f,l:o,r:c};h!=s-1;)o=t[t[l].f<t[u].f?l++:u++],c=t[l!=h&&t[l].f<t[u].f?l++:u++],t[h++]={s:-1,f:o.f+c.f,l:o,r:c};for(var d=r[0].s,i=1;i<s;++i)r[i].s>d&&(d=r[i].s);var p=new Fn(d+1),g=ld(t[h-1],p,0);if(g>e){var i=0,v=0,m=g-e,f=1<<m;for(r.sort(function(E,A){return p[A.s]-p[E.s]||E.f-A.f});i<s;++i){var b=r[i].s;if(p[b]>e)v+=f-(1<<g-p[b]),p[b]=e;else break}for(v>>=m;v>0;){var S=r[i].s;p[S]<e?v-=1<<e-p[S]++-1:++i}for(;i>=0&&v;--i){var _=r[i].s;p[_]==e&&(--p[_],++v)}g=e}return{t:new an(p),l:g}},ld=function(n,e,t){return n.s==-1?Math.max(ld(n.l,e,t+1),ld(n.r,e,t+1)):e[n.s]=t},Am=function(n){for(var e=n.length;e&&!n[--e];);for(var t=new Fn(++e),i=0,s=n[0],r=1,a=function(c){t[i++]=c},o=1;o<=e;++o)if(n[o]==s&&o!=e)++r;else{if(!s&&r>2){for(;r>138;r-=138)a(32754);r>2&&(a(r>10?r-11<<5|28690:r-3<<5|12305),r=0)}else if(r>3){for(a(s),--r;r>6;r-=6)a(8304);r>2&&(a(r-3<<5|8208),r=0)}for(;r--;)a(s);r=1,s=n[o]}return{c:t.subarray(0,i),n:e}},ho=function(n,e){for(var t=0,i=0;i<e.length;++i)t+=n[i]*e[i];return t},Fm=function(n,e,t){var i=t.length,s=Um(e+2);n[s]=i&255,n[s+1]=i>>8,n[s+2]=n[s]^255,n[s+3]=n[s+1]^255;for(var r=0;r<i;++r)n[s+r+4]=t[r];return(s+4+i)*8},Cm=function(n,e,t,i,s,r,a,o,c,l,h){Ni(e,h++,t),++s[256];for(var u=rd(s,15),d=u.t,p=u.l,g=rd(r,15),v=g.t,m=g.l,f=Am(d),b=f.c,S=f.n,_=Am(v),M=_.c,E=_.n,A=new Fn(19),R=0;R<b.length;++R)++A[b[R]&31];for(var R=0;R<M.length;++R)++A[M[R]&31];for(var x=rd(A,7),y=x.t,L=x.l,U=19;U>4&&!y[Tm[U-1]];--U);var k=l+5<<3,W=ho(s,Gs)+ho(r,th)+a,V=ho(s,d)+ho(r,v)+a+14+3*U+ho(A,y)+2*A[16]+3*A[17]+7*A[18];if(c>=0&&k<=W&&k<=V)return Fm(e,h,n.subarray(c,c+l));var G,j,H,K;if(Ni(e,h,1+(V<W)),h+=2,V<W){G=uo(d,p,0),j=d,H=uo(v,m,0),K=v;var ne=uo(y,L,0);Ni(e,h,S-257),Ni(e,h+5,E-1),Ni(e,h+10,U-4),h+=14;for(var R=0;R<U;++R)Ni(e,h+3*R,y[Tm[R]]);h+=3*U;for(var ce=[b,M],Te=0;Te<2;++Te)for(var qe=ce[Te],R=0;R<qe.length;++R){var He=qe[R]&31;Ni(e,h,ne[He]),h+=y[He],He>15&&(Ni(e,h,qe[R]>>5&127),h+=qe[R]>>12)}}else G=cS,j=Gs,H=hS,K=th;for(var R=0;R<o;++R){var Re=i[R];if(Re>255){var He=Re>>18&31;co(e,h,G[He+257]),h+=j[He+257],He>7&&(Ni(e,h,Re>>23&31),h+=ud[He]);var Y=Re&31;co(e,h,H[Y]),h+=K[Y],Y>3&&(co(e,h,Re>>5&8191),h+=dd[Y])}else co(e,h,G[Re]),h+=j[Re]}return co(e,h,G[256]),h+j[256]},dS=new hd([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Om=new an(0),fS=function(n,e,t,i,s,r){var a=r.z||n.length,o=new an(i+a+5*(1+Math.ceil(a/7e3))+s),c=o.subarray(i,o.length-s),l=r.l,h=(r.r||0)&7;if(e){h&&(c[0]=r.r>>3);for(var u=dS[e-1],d=u>>13,p=u&8191,g=(1<<t)-1,v=r.p||new Fn(32768),m=r.h||new Fn(g+1),f=Math.ceil(t/3),b=2*f,S=function(tt){return(n[tt]^n[tt+1]<<f^n[tt+2]<<b)&g},_=new hd(25e3),M=new Fn(288),E=new Fn(32),A=0,R=0,x=r.i||0,y=0,L=r.w||0,U=0;x+2<a;++x){var k=S(x),W=x&32767,V=m[k];if(v[W]=V,m[k]=W,L<=x){var G=a-x;if((A>7e3||y>24576)&&(G>423||!l)){h=Cm(n,c,0,_,M,E,R,y,U,x-U,h),y=A=R=0,U=x;for(var j=0;j<286;++j)M[j]=0;for(var j=0;j<30;++j)E[j]=0}var H=2,K=0,ne=p,ce=W-V&32767;if(G>2&&k==S(x-ce))for(var Te=Math.min(d,G)-1,qe=Math.min(32767,x),He=Math.min(258,G);ce<=qe&&--ne&&W!=V;){if(n[x+H]==n[x+H-ce]){for(var Re=0;Re<He&&n[x+Re]==n[x+Re-ce];++Re);if(Re>H){if(H=Re,K=ce,Re>Te)break;for(var Y=Math.min(ce,Re-2),J=0,j=0;j<Y;++j){var he=x-ce+j&32767,ye=v[he],ve=he-ye&32767;ve>J&&(J=ve,V=he)}}}W=V,V=v[W],ce+=W-V&32767}if(K){_[y++]=268435456|ad[H]<<18|Em[K];var Ge=ad[H]&31,Rt=Em[K]&31;R+=ud[Ge]+dd[Rt],++M[257+Ge],++E[Rt],L=x+H,++A}else _[y++]=n[x],++M[n[x]]}}for(x=Math.max(x,L);x<a;++x)_[y++]=n[x],++M[n[x]];h=Cm(n,c,l,_,M,E,R,y,U,x-U,h),l||(r.r=h&7|c[h/8|0]<<3,h-=7,r.h=m,r.p=v,r.i=x,r.w=L)}else{for(var x=r.w||0;x<a+l;x+=65535){var D=x+65535;D>=a&&(c[h/8|0]=l,D=a),h=Fm(c,h+1,n.subarray(x,D))}r.i=a}return Nm(o,0,i+Um(h)+s)},pS=(function(){for(var n=new Int32Array(256),e=0;e<256;++e){for(var t=e,i=9;--i;)t=(t&1&&-306674912)^t>>>1;n[e]=t}return n})(),mS=function(){var n=-1;return{p:function(e){for(var t=n,i=0;i<e.length;++i)t=pS[t&255^e[i]]^t>>>8;n=t},d:function(){return~n}}};var gS=function(n,e,t,i,s){if(!s&&(s={l:1},e.dictionary)){var r=e.dictionary.subarray(-32768),a=new an(r.length+n.length);a.set(r),a.set(n,r.length),n=a,s.w=r.length}return fS(n,e.level==null?6:e.level,e.mem==null?s.l?Math.ceil(Math.max(8,Math.min(13,Math.log(n.length)))*1.5):20:12+e.mem,t,i,s)},km=function(n,e){var t={};for(var i in n)t[i]=n[i];for(var i in e)t[i]=e[i];return t};var rn=function(n,e,t){for(;t;++e)n[e]=t,t>>>=8};function vS(n,e){return gS(n,e||{},0,0)}var Bm=function(n,e,t,i){for(var s in n){var r=n[s],a=e+s,o=i;Array.isArray(r)&&(o=km(i,r[1]),r=r[0]),r instanceof an?t[a]=[r,o]:(t[a+="/"]=[new an(0),o],Bm(r,a,t,i))}},Rm=typeof TextEncoder<"u"&&new TextEncoder,_S=typeof TextDecoder<"u"&&new TextDecoder,xS=0;try{_S.decode(Om,{stream:!0}),xS=1}catch{}function Kr(n,e){if(e){for(var t=new an(n.length),i=0;i<n.length;++i)t[i]=n.charCodeAt(i);return t}if(Rm)return Rm.encode(n);for(var s=n.length,r=new an(n.length+(n.length>>1)),a=0,o=function(h){r[a++]=h},i=0;i<s;++i){if(a+5>r.length){var c=new an(a+8+(s-i<<1));c.set(r),r=c}var l=n.charCodeAt(i);l<128||e?o(l):l<2048?(o(192|l>>6),o(128|l&63)):l>55295&&l<57344?(l=65536+(l&1047552)|n.charCodeAt(++i)&1023,o(240|l>>18),o(128|l>>12&63),o(128|l>>6&63),o(128|l&63)):(o(224|l>>12),o(128|l>>6&63),o(128|l&63))}return Nm(r,0,a)}var cd=function(n){var e=0;if(n)for(var t in n){var i=n[t].length;i>65535&&nh(9),e+=i+4}return e},Im=function(n,e,t,i,s,r,a,o){var c=i.length,l=t.extra,h=o&&o.length,u=cd(l);rn(n,e,a!=null?33639248:67324752),e+=4,a!=null&&(n[e++]=20,n[e++]=t.os),n[e]=20,e+=2,n[e++]=t.flag<<1|(r<0&&8),n[e++]=s&&8,n[e++]=t.compression&255,n[e++]=t.compression>>8;var d=new Date(t.mtime==null?Date.now():t.mtime),p=d.getFullYear()-1980;if((p<0||p>119)&&nh(10),rn(n,e,p<<25|d.getMonth()+1<<21|d.getDate()<<16|d.getHours()<<11|d.getMinutes()<<5|d.getSeconds()>>1),e+=4,r!=-1&&(rn(n,e,t.crc),rn(n,e+4,r<0?-r-2:r),rn(n,e+8,t.size)),rn(n,e+12,c),rn(n,e+14,u),e+=16,a!=null&&(rn(n,e,h),rn(n,e+6,t.attrs),rn(n,e+10,a),e+=14),n.set(i,e),e+=c,u)for(var g in l){var v=l[g],m=v.length;rn(n,e,+g),rn(n,e+2,m),n.set(v,e+4),e+=4+m}return h&&(n.set(o,e),e+=h),e},yS=function(n,e,t,i,s){rn(n,e,101010256),rn(n,e+8,t),rn(n,e+10,t),rn(n,e+12,i),rn(n,e+16,s)};function zm(n,e){e||(e={});var t={},i=[];Bm(n,"",t,e);var s=0,r=0;for(var a in t){var o=t[a],c=o[0],l=o[1],h=l.level==0?0:8,u=Kr(a),d=u.length,p=l.comment,g=p&&Kr(p),v=g&&g.length,m=cd(l.extra);d>65535&&nh(11);var f=h?vS(c,l):c,b=f.length,S=mS();S.p(c),i.push(km(l,{size:c.length,crc:S.d(),c:f,f:u,m:g,u:d!=a.length||g&&p.length!=v,o:s,compression:h})),s+=30+d+m+b,r+=76+2*(d+m)+(v||0)+b}for(var _=new an(r+22),M=s,E=r-s,A=0;A<i.length;++A){var u=i[A];Im(_,u.o,u,u.f,u.u,u.c.length);var R=30+u.f.length+cd(u.extra);_.set(u.c,u.o+R),Im(_,s,u,u.f,u.u,u.c.length,u.o,u.m),s+=16+R+(u.m?u.m.length:0)}return yS(_,s,i.length,E,M),_}async function ih(n,e,t,i,s,r){let a=i*16/9,o=Math.round(e.duration*30),c={},l={w:n.w,h:n.h,t:n.time,manual:n.manual},h=performance.now();n.setManual(!1),n.setSize(i,a);try{for(let d=0;d<o;d++){if(r.aborted)throw Error("Render cancelled. Your project is unchanged.");n.seek(d/30);let p=await new Promise(g=>n.canvas.toBlob(g,"image/jpeg",.96));if(!p)throw Error("Could not capture a frame.");c[`frames/frame_${String(d).padStart(5,"0")}.jpg`]=new Uint8Array(await p.arrayBuffer()),s(d/o*.97,`Rendering frame ${d+1} of ${o} \xB7 ${Math.round((performance.now()-h)/1e3)} seconds elapsed`),d%3===0&&await new Promise(g=>setTimeout(g,0))}c["soundtrack.wav"]=new Uint8Array(await om(t).arrayBuffer()),c["project.ember.json"]=Kr(JSON.stringify(e,null,2)),c["convert_video.py"]=Kr(`#!/usr/bin/env python3
import subprocess,pathlib,shutil
root=pathlib.Path(__file__).resolve().parent
if not shutil.which('ffmpeg'): raise SystemExit('Install the free FFmpeg program, then run this script again.')
subprocess.run(['ffmpeg','-y','-framerate','30','-i',str(root/'frames/frame_%05d.jpg'),'-i',str(root/'soundtrack.wav'),'-c:v','libx264','-preset','medium','-crf','17','-pix_fmt','yuv420p','-c:a','aac','-b:a','192k','-af','loudnorm=I=-16:TP=-1.5:LRA=11','-t','${e.duration}','-movflags','+faststart',str(root/'film.mp4')],check=True)
print('Ready:',root/'film.mp4')
`),c["README.txt"]=Kr(`Every frame in this package was rendered at the selected native resolution.
Install the free FFmpeg and Python 3 programs. Extract this ZIP, then run:
python3 convert_video.py
The result is film.mp4 with the supplied soundtrack.
No account, AI service or paid software is required.
`),s(.98,"Packing rendered frames and soundtrack\u2026"),await new Promise(d=>setTimeout(d,10));let u=zm(c,{level:0});return s(1,"Your render package is ready."),{blob:new Blob([u],{type:"application/zip"}),kind:"frames",frames:o,width:i,height:a}}finally{n.setSize(l.w,l.h),n.setManual(l.manual),n.seek(l.t)}}async function Vm(n,e,t,i,s,r){if(!globalThis.VideoEncoder)return ih(n,e,t,i,s,r);let a=i*16/9,o=30,c=Math.round(e.duration*o),l=null,h=null,u=null;for(let b of["avc1.640033","avc1.420033","vp09.00.40.08"]){let S={codec:b,width:i,height:a,bitrate:i>=1080?1e7:5e6,framerate:o,hardwareAcceleration:"prefer-software",latencyMode:"quality"};try{if((await VideoEncoder.isConfigSupported(S)).supported){l=S;break}}catch{}}if(!l)return ih(n,e,t,i,s,r);if(globalThis.AudioEncoder)for(let b of["mp4a.40.2","opus"]){let S={codec:b,sampleRate:48e3,numberOfChannels:2,bitrate:16e4};try{if((await AudioEncoder.isConfigSupported(S)).supported){h=S;break}}catch{}}if(!h)return ih(n,e,t,i,s,r);let d=new ju,p=new wm({target:d,video:{codec:l.codec.startsWith("avc")?"avc":"vp9",width:i,height:a,frameRate:o},audio:{codec:h.codec==="opus"?"opus":"aac",numberOfChannels:2,sampleRate:48e3},fastStart:"in-memory",firstTimestampBehavior:"offset"}),g=new VideoEncoder({output:(b,S)=>p.addVideoChunk(b,S),error:b=>u=b});g.configure(l);let v=new AudioEncoder({output:(b,S)=>p.addAudioChunk(b,S),error:b=>u=b});v.configure(h);let m={w:n.w,h:n.h,t:n.time,manual:n.manual};n.setManual(!1),n.setSize(i,a);let f=()=>new Promise(b=>setTimeout(b,0));try{for(let _=0;_<c;_++){if(r.aborted)throw Error("Render cancelled. Your project is unchanged.");if(u)throw u;for(;g.encodeQueueSize>5;){if(await f(),u)throw u;if(r.aborted)throw Error("Render cancelled.")}n.seek(_/o);let M=new VideoFrame(n.canvas,{timestamp:Math.round(_*1e6/o),duration:Math.round(1e6/o)});g.encode(M,{keyFrame:_%60===0}),M.close(),_%3===0&&(s(_/c*.94,`Rendering frame ${_+1} of ${c}`),await f())}if(await g.flush(),u)throw u;s(.95,"Mixing your soundtrack\u2026");let b=t[0].length,S=1024;for(let _=0;_<b;_+=S){let M=Math.min(S,b-_),E=new Float32Array(M*2);E.set(t[0].subarray(_,_+M)),E.set(t[1].subarray(_,_+M),M);let A=new AudioData({format:"f32-planar",sampleRate:48e3,numberOfFrames:M,numberOfChannels:2,timestamp:Math.round(_/48e3*1e6),data:E});if(v.encode(A),A.close(),_%(S*30)===0){if(await f(),u)throw u;if(r.aborted)throw Error("Render cancelled.")}}if(await v.flush(),u)throw u;return p.finalize(),s(1,"Your film is ready."),{blob:new Blob([d.buffer],{type:"video/mp4"}),videoCodec:l.codec,audioCodec:h.codec,frames:c,width:i,height:a}}finally{g.state!=="closed"&&g.close(),v.state!=="closed"&&v.close(),n.setSize(m.w,m.h),n.setManual(m.manual),n.seek(m.t)}}var I=n=>document.getElementById(n),Xm="ember-take-project-v3",ee=It(Br),xn=1,qs=null,Dt=0,sh=!1,gd=0,gi=!1,_t,mi,Ws,Jr,Ys,Qr,vd,Xs=null,$s=[],mo=[],rh=0,fo,qm={neutral:"\u{1F610} Neutral",happy:"\u{1F604} Happy",sad:"\u{1F622} Sad",angry:"\u{1F620} Angry",surprised:"\u{1F632} Surprised",worried:"\u{1F61F} Worried",curious:"\u{1F914} Curious",idea:"\u{1F4A1} Bright idea"},Ym={none:"Natural talk (hands follow speech)",explain:"Explain with both hands",wave:"Wave",point:"Point at the camera","point-screen":"Point at the monitor","point-other":"Point at the other character",shrug:"Shrug",facepalm:"Facepalm",think:"Think (hand on chin)",cheer:"Cheer",clap:"Clap",thumbsup:"Thumbs up",crossarms:"Cross arms",handsup:"Hands up (shock)",nod:"Nod",headshake:"Shake head",lean:"Lean in, hands on hips",jump:"Jump",type:"Type",press:"Press the big key",raise:"Raise a hand (idea!)"},bd=n=>({auto:"Auto \xB7 the director picks",wide:"Wide \xB7 the whole cast",two:"Two shot",single:"Single \xB7 medium",cu:"Close-up",ots:"Over the shoulder",screen:"Monitor insert",custom:"Custom 360\xB0 angle"})[n]||n,Zs=n=>n==="all"?"whole cast":ee.cast.find(e=>e.id===n)?.name||n,fd=n=>Math.max(0,ee.cast.findIndex(e=>e.id===n)),MS={"American female":["af_heart","af_bella","af_nicole","af_sarah","af_sky"],"American male":["am_michael","am_puck","am_fenrir","am_echo","am_adam"],"British female":["bf_emma","bf_isabella"],"British male":["bm_george","bm_lewis"]};function Ke(n){I("toast").textContent=n,I("toast").classList.add("show"),clearTimeout(Ke.timer),Ke.timer=setTimeout(()=>I("toast").classList.remove("show"),4200)}function go(n,e){n.replaceChildren(...e.map(([t,i])=>{let s=document.createElement("option");return s.value=t,s.textContent=i,s}))}try{let n=localStorage.getItem(Xm)||localStorage.getItem("ember-take-project-v2")||localStorage.getItem("ember-take-project-v1");n&&(ee=Ka(JSON.parse(n)))}catch{Ke("The saved project could not be opened. Loaded the sample film.")}var vo=n=>`${String(Math.floor(n/60)).padStart(2,"0")}:${String(Math.floor(n%60)).padStart(2,"0")}`;function $m(){try{localStorage.setItem(Xm,JSON.stringify(ee)),I("save-status").textContent="Saved on this device"}catch{I("save-status").textContent="Use Save project to keep your changes"}}function on(){if(rh++,sh=!1,I("play").textContent="\u25B6",I("play").setAttribute("aria-label","Play film"),Ws){try{Ws.stop()}catch{}Ws=null}}function wt(n,{keepAudio:e=!1}={}){let t=Ka(n);$s.push(It(ee)),$s.length>30&&$s.shift(),mo.length=0,!e&&t.voiceData!==ee.voiceData&&(Ys=null),t.musicData!==ee.musicData&&(Qr=null),ee=t,on(),Dt=Math.min(Dt,ee.duration),_t.setProject(ee),Jr=null,$m(),ah(),tn()}function tn(){if(!_t||gi)return;let n=_t.seek(Dt);I("scrub").value=Dt,I("timecode").innerHTML=`${vo(Dt)}.${String(Math.floor(Dt%1*100)).padStart(2,"0")} <b>/ ${vo(ee.duration)}</b>`,I("shot-label").textContent=_t.focus?`TURNTABLE \xB7 ${Zs(_t.focus).toUpperCase()}`:"CAM \xB7 "+bd(n.shot).toUpperCase()+(["wide","screen","two"].includes(n.shot)?"":" \xB7 "+Zs(n.subject).toUpperCase())}function po(n,e=""){let t=document.createElement("span");return t.className="chip "+e,t.textContent=n,t}function Zm(){let n=I("cue-list");n.replaceChildren();let e=I("timeline");e.replaceChildren(),ee.cues.forEach((s,r)=>{let a=document.createElement("button");a.className="cue c"+fd(s.speaker)+(s.id===xn?" selected":""),a.setAttribute("aria-label",`Edit line ${r+1}: ${s.text}`);let o=document.createElement("span");o.className="cue-number",o.textContent=String(r+1).padStart(2,"0");let c=document.createElement("div"),l=document.createElement("div");l.className="cue-top";let h=document.createElement("span");h.textContent=Zs(s.speaker);let u=document.createElement("small");u.textContent=vo(s.start),l.append(h,u);let d=document.createElement("p");d.textContent=s.text;let p=document.createElement("div");p.className="chips",p.append(po(qm[s.emotion].split(" ")[0]+" "+s.emotion)),s.action!=="none"&&p.append(po(Ym[s.action])),s.shot!=="auto"&&p.append(po("\u{1F3A5} "+(s.shot==="custom"?`${s.cam.yaw}\xB0 \xB7 ${s.cam.lens}mm`:s.shot)+(s.subject&&s.subject!==s.speaker?" \xB7 "+Zs(s.subject):""))),s.screen&&p.append(po("\u{1F5A5} "+s.screen.title,"screen")),s.visemes&&p.append(po("\u25CF voiced","voiced")),c.append(l,d,p),a.append(o,c),a.onclick=()=>{xn=s.id,on(),Dt=s.start+.15,Md(),Zm(),tn()},n.append(a);let g=document.createElement("div");g.className="timeline-block c"+fd(s.speaker),g.style.left=`${s.start/ee.duration*100}%`,g.style.width=`${(s.end-s.start)/ee.duration*100}%`,g.textContent=String(r+1).padStart(2,"0"),e.append(g)});let t=I("shot-track");t.replaceChildren();let i=zc(ee);i.forEach((s,r)=>{let a=i[r+1]?.start??ee.duration,o=document.createElement("div");o.className="shot-block "+(["wide","two","screen"].includes(s.shot)?"shot-"+s.shot:"shot-c"+fd(s.subject)),o.style.left=`${s.start/ee.duration*100}%`,o.style.width=`${(a-s.start)/ee.duration*100}%`,o.title=bd(s.shot)+(["wide","two","screen"].includes(s.shot)?"":" \xB7 "+Zs(s.subject)),o.textContent=s.shot.toUpperCase(),t.append(o)}),I("line-count").textContent=`${String(ee.cues.length).padStart(2,"0")} LINES`}function Md(){let n=ee.cues.find(e=>e.id===xn)||ee.cues[0];if(n){xn=n.id,I("selected-label").textContent=`LINE ${String(ee.cues.indexOf(n)+1).padStart(2,"0")} \xB7 ${Zs(n.speaker).toUpperCase()}`;for(let t of["speaker","start","end","emotion","action","shot","pause"])I(t).value=n[t];I("dialogue").value=n.text,go(I("subject"),[["",`Speaker (${Zs(n.speaker)})`],...ee.cast.map(t=>[t.id,t.name]),...n.shot==="custom"?[["all","Whole cast"]]:[]]),I("subject").value=n.subject&&n.subject!==n.speaker?n.subject:"",I("custom-cam").hidden=n.shot!=="custom",I("customize-cam").hidden=n.shot==="custom",n.cam&&Td(n.cam);let e=n.screen;I("screen-on").checked=!!e,I("screen-box").open=!!e,I("screen-tone").value=e?.tone||"calm",I("screen-kicker").value=e?.kicker||"",I("screen-title").value=e?.title||"",I("screen-sub").value=e?.sub||"",I("screen-progress").checked=!!e?.progress}else I("dialogue").value="",I("selected-label").textContent="ADD A LINE TO BEGIN";for(let e of["apply-line","delete-line","duplicate-line"])I(e).disabled=!n}function ah(){Zm(),go(I("speaker"),ee.cast.map(t=>[t.id,t.name])),go(I("shot"),Hr.map(t=>[t,bd(t)])),Md(),rg(),I("title").value=ee.title,I("scrub").max=ee.duration,I("duration-label").textContent=vo(ee.duration),I("mid-label").textContent=vo(ee.duration/2);let n=ee.cast.map(t=>t.name);I("story-intro").textContent=`Direct ${n.length>1?n.slice(0,-1).join(", ")+" & "+n.at(-1):n[0]}\u2019s next adventure.`;for(let[t,i]of[["warmth","warmth"],["duration","duration"],["handle","handle"],["caption-style","captionStyle"],["end-title","endTitle"],["end-sub","endSub"],["music-volume","musicVolume"]])I(t).value=ee[i];for(let[t,i]of[["captions","captions"],["dof","dof"],["intro","intro"],["music","music"],["sfx","sfx"]])I(t).checked=ee[i];document.querySelectorAll("input[name=engine]").forEach(t=>t.checked=t.value===ee.voiceEngine),I("sound").textContent=ee.music?"\u266B Sound on":"\u266B Score off",I("sound").setAttribute("aria-pressed",String(ee.music)),I("undo").disabled=!$s.length,I("redo").disabled=!mo.length;let e=ee.cues.filter(t=>t.visemes).length;I("voice-status").textContent=ee.voiceData?e?`Voiced and lip-synced: ${e} of ${ee.cues.length} lines.`:"Your recording is loaded and plays with the film.":"No voice yet. Captions carry the story.",I("music-status").textContent=ee.musicData?"Your music track is loaded. It loops and ducks under the voices.":"Original generated score. Use royalty-free music you have the rights to.",I("audio-label").textContent=[ee.voiceData&&"VOICES",ee.music&&(ee.musicData?"YOUR MUSIC":"ORIGINAL SCORE"),ee.sfx&&"SOUND DESIGN"].filter(Boolean).join(" + ")||"SILENT"}async function Hm(n){return mi.decodeAudioData(await(await fetch(n)).arrayBuffer())}async function jm(){if(mi||(mi=new AudioContext({sampleRate:48e3})),await mi.resume(),!Jr){ee.voiceData&&!Ys&&(Ys=await Hm(ee.voiceData)),ee.musicData&&!Qr&&(Qr=await Hm(ee.musicData));let n=await am(ee,ee.voiceData?Ys:null,ee.musicData?Qr:null);Jr=mi.createBuffer(2,n[0].length,48e3),n.forEach((e,t)=>Jr.copyToChannel(e,t))}return Jr}async function Km(){if(gi)return;if(sh){on();return}Dt>=ee.duration-.04&&(Dt=0),_t.setManual(!1),I("orbit").setAttribute("aria-pressed","false");let n=++rh;try{I("status").textContent="Mixing sound\u2026";let e=await jm();if(n!==rh)return;Ws=mi.createBufferSource(),Ws.buffer=e,Ws.connect(mi.destination),Ws.start(0,Dt),I("status").textContent="Playing."}catch(e){Ke("Audio is unavailable: "+e.message)}sh=!0,gd=performance.now(),I("play").textContent="\u2161",I("play").setAttribute("aria-label","Pause film")}function Jm(n){requestAnimationFrame(Jm),!gi&&(sh?(Dt+=(n-gd)/1e3,gd=n,Dt>=ee.duration&&(Dt=ee.duration,on()),tn()):(_t?.manual||_t?.focus)&&tn())}go(I("emotion"),zr.map(n=>[n,qm[n]]));go(I("action"),Vr.map(n=>[n,Ym[n]]));I("help-emotions").textContent=zr.join(", ");I("help-actions").textContent=Vr.join(", ");I("help-shots").textContent=Hr.filter(n=>n!=="custom").join(", ");function Qm(n){for(let e of document.querySelectorAll(".voice-select"))e.replaceChildren(...Object.entries(n).map(([t,i])=>{let s=document.createElement("optgroup");return s.label=t,s.append(...i.map(r=>{let a=document.createElement("option");return a.value=r,a.textContent=r.slice(3).replace(/^./,o=>o.toUpperCase()),a})),s}))}Qm(MS);async function _o(n,e){let t=await fetch(n,e?{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}:{}),i=await t.json().catch(()=>({}));if(!t.ok)throw Error(i.error||`Studio engine error ${t.status}`);return i}async function eg(n,e){for(;;){let t=await _o("/api/jobs/"+n);if(e(t),t.status==="done")return t.result;if(t.status==="error")throw Error(t.message);await new Promise(i=>setTimeout(i,800))}}(async()=>{try{Xs=await _o("/api/status"),Qm(Xs.voices),ah();let n=Xs.engines,e=n.kokoro&&n.rhubarb&&n.ffmpeg;I("engine-pill").textContent=e?`\u25CF Studio engine ready${n.chatterbox?" \xB7 expressive voices":""}`:"\u25CF Studio engine incomplete",I("engine-pill").classList.add(e?"ok":"warn");let t=document.querySelector("input[value=chatterbox]");t.disabled=!n.chatterbox,n.chatterbox||(t.closest("label").title="Expressive voices are still installing or unavailable."),Sd()}catch{Xs=null,I("engine-pill").textContent="\u25CB Browser only \xB7 run node server.mjs for voices",I("engine-pill").classList.add("off");for(let n of["generate-voices","studio-render"])I(n).disabled=!0;I("voice-job").textContent="Start the studio engine (node server.mjs) to generate voices.",I("studio-status").textContent="Start the studio engine (node server.mjs) for best-quality renders.",I("browser-export-open")?.click(),document.querySelector(".browser-export").open=!0}})();I("generate-voices").onclick=async()=>{if(!Xs)return;on();let n=I("generate-voices");n.disabled=!0,I("voice-progress").hidden=!1,I("voice-progress").value=0;try{let e=document.querySelector("input[name=engine]:checked")?.value||"kokoro",t={...It(ee),voiceEngine:e},{id:i}=await _o("/api/voice",{project:t,layout:I("voice-layout").value}),s=await eg(i,a=>{I("voice-progress").value=a.progress,I("voice-job").textContent=a.status==="queued"?"Waiting for the studio\u2026":a.message}),r=xn;Ys=null,wt({...s,cast:ee.cast,voiceEngine:e}),xn=r,Dt=0,Md(),tn(),I("voice-job").textContent=`Done. ${ee.cues.length} lines voiced, film is ${ee.duration} seconds. Press play.`,Ke("Voices and lip sync are ready.")}catch(e){I("voice-job").textContent="Could not generate voices: "+e.message}finally{n.disabled=!1,I("voice-progress").hidden=!0}};async function Sd(){if(Xs)try{let n=await _o("/api/renders");I("renders-box").hidden=!n.length,I("renders-list").replaceChildren(...n.slice(0,8).map(e=>{let t=document.createElement("li"),i=document.createElement("a");i.href=e.url,i.target="_blank",i.textContent=e.name.replace(/_/g," ");let s=document.createElement("small");return s.textContent=`${new Date(e.created).toLocaleString()} \xB7 ${(e.size/1e6).toFixed(1)} MB`,t.append(i,s),t}))}catch{}}I("studio-render").onclick=async()=>{if(!Xs||gi)return;on();let n=I("studio-render");n.disabled=!0,I("studio-progress").hidden=!1,I("export-result").hidden=!0;try{let{id:e}=await _o("/api/render",{project:It(ee),width:Number(I("export-size").value)}),t=await eg(e,i=>{I("studio-progress").value=i.progress,I("studio-status").textContent=i.status==="queued"?"Waiting for the studio\u2026":i.message});I("result-video").hidden=!1,I("result-video").src=t.url,I("download-film").href=t.url,I("download-film").download=ee.title.replace(/[^a-z0-9]+/gi,"_")+".mp4",I("download-film").textContent="Download film \u2193",I("export-result").hidden=!1,I("studio-status").textContent="Your film is ready. It is also saved in the studio renders folder.",Sd()}catch(e){I("studio-status").textContent="Render failed: "+e.message}finally{n.disabled=!1,I("studio-progress").hidden=!0}};I("play").onclick=Km;I("back").onclick=()=>{on(),Dt=0,tn()};I("scrub").oninput=()=>{rh++,on(),Dt=Number(I("scrub").value),tn()};I("title").onchange=()=>{try{wt({...ee,title:I("title").value},{keepAudio:!0})}catch(n){Ke(n.message)}};function SS(){if(I("screen-on").checked)return{tone:I("screen-tone").value,kicker:I("screen-kicker").value,title:I("screen-title").value,sub:I("screen-sub").value,progress:I("screen-progress").checked}}I("screen-on").onchange=()=>{I("screen-box").open=I("screen-on").checked};I("apply-line").onclick=()=>{try{let n=It(ee),e=n.cues.find(s=>s.id===xn),t=I("dialogue").value.trim(),i=I("speaker").value;(t!==e.text||i!==e.speaker||I("emotion").value!==e.emotion)&&(delete e.visemes,delete e.words),Object.assign(e,{text:t,speaker:i,start:Number(I("start").value),end:Number(I("end").value),emotion:I("emotion").value,action:I("action").value,shot:I("shot").value,pause:Number(I("pause").value),screen:SS(),subject:I("subject").value||void 0}),e.screen||delete e.screen,e.subject||delete e.subject,e.shot==="custom"&&(e.cam=Ed()),wt(n,{keepAudio:!0}),Ke(e.visemes?"Scene updated.":"Scene updated. Generate voices to re-voice this line.")}catch(n){Ke(n.message)}};function tg(n,e=2){let t=.5;for(let i of n.cues){if(i.start-t>=e+.2)break;t=i.end+.2}if(n.duration-t<e&&(n.duration=Math.min(90,Math.ceil(t+e+1))),n.duration-t<e)throw Error("The film is full. Shorten a line or remove one.");return Math.round(t*10)/10}I("add-line").onclick=()=>{try{let n=It(ee),e=tg(n),t={id:Math.max(0,...n.cues.map(i=>i.id))+1,start:e,end:e+2,speaker:n.cast[0].id,text:"Your next line\u2026",emotion:"neutral",action:"none",shot:"auto",pause:.45};n.cues.push(t),xn=t.id,wt(n,{keepAudio:!0})}catch(n){Ke(n.message)}};I("duplicate-line").onclick=()=>{try{let n=It(ee),e=n.cues.find(r=>r.id===xn),t=e.end-e.start,i=tg(n,t),s={...It(e),id:Math.max(...n.cues.map(r=>r.id))+1,start:i,end:i+t};delete s.visemes,delete s.words,delete s.screen,n.cues.push(s),xn=s.id,wt(n,{keepAudio:!0}),Ke("Line duplicated at the next free moment.")}catch(n){Ke(n.message)}};I("delete-line").onclick=()=>{wt({...ee,cues:ee.cues.filter(n=>n.id!==xn)},{keepAudio:!0})};document.querySelectorAll("input[name=engine]").forEach(n=>n.onchange=()=>{try{wt({...ee,voiceEngine:n.value},{keepAudio:!0})}catch(e){Ke(e.message)}});I("apply-film").onclick=()=>{try{wt({...ee,handle:I("handle").value.trim(),captionStyle:I("caption-style").value,warmth:Number(I("warmth").value),captions:I("captions").checked,dof:I("dof").checked,intro:I("intro").checked,endTitle:I("end-title").value.trim(),endSub:I("end-sub").value.trim(),duration:Number(I("duration").value),music:I("music").checked,musicVolume:Number(I("music-volume").value),sfx:I("sfx").checked},{keepAudio:!0}),Ke("Film settings applied.")}catch(n){Ke(n.message)}};document.querySelectorAll("[data-tab]").forEach(n=>n.onclick=()=>{document.querySelectorAll("[data-tab]").forEach(e=>e.classList.toggle("active",e===n));for(let e of["line","cast","voice","film"])I("tab-"+e).hidden=e!==n.dataset.tab;on(),_t.setFocus(n.dataset.tab==="cast"?vi().id:null),tn()});I("orbit").onclick=()=>{on(),_t.setManual(!_t.manual),I("orbit").setAttribute("aria-pressed",String(_t.manual)),I("status").textContent=_t.manual?"Drag to orbit. Scroll or pinch to zoom.":"Story camera active.",tn()};I("frame").onclick=()=>{_t.setManual(!1),I("orbit").setAttribute("aria-pressed","false"),tn()};function ng(n){ee=n,on(),Ys=null,Qr=null,Jr=null,_t.setProject(ee),$m(),ah(),tn()}I("undo").onclick=()=>{$s.length&&(mo.push(It(ee)),ng($s.pop()))};I("redo").onclick=()=>{mo.length&&($s.push(It(ee)),ng(mo.pop()))};I("reset").onclick=()=>{xn=1,Dt=0,wt(It(Br)),Ke("Sample restored. Undo brings back your edits.")};function ig(n,e){let t=URL.createObjectURL(n),i=document.createElement("a");i.href=t,i.download=e,i.click(),setTimeout(()=>URL.revokeObjectURL(t),3e4)}var wd=()=>ee.title.replace(/[^a-z0-9]+/gi,"_");I("save").onclick=()=>ig(new Blob([JSON.stringify(ee,null,2)],{type:"application/json"}),wd()+".ember.json");I("open").onclick=()=>I("project-file").click();I("project-file").onchange=async n=>{try{let e=n.target.files[0];if(!e)return;if(e.size>32e6)throw Error("Project is too large.");let t=Ka(JSON.parse(await e.text()));xn=t.cues[0]?.id||0,Dt=0,wt(t),Ke("Project opened.")}catch(e){Ke(e.message)}finally{I("project-file").value=""}};I("sound").onclick=()=>wt({...ee,music:!ee.music},{keepAudio:!0});async function sg(n,e){let t=n.files[0];if(!t)return null;if(t.size>e)throw Error(`Choose audio smaller than ${e/1e6} MB.`);mi||(mi=new AudioContext({sampleRate:48e3}));let i=await mi.decodeAudioData(await t.arrayBuffer()),s=await new Promise((r,a)=>{let o=new FileReader;o.onload=()=>r(o.result),o.onerror=a,o.readAsDataURL(t)});return{buf:i,data:s}}I("upload-voice").onclick=()=>I("audio-file").click();I("audio-file").onchange=async n=>{try{let e=await sg(n.target,1e7);if(!e)return;let t=It(ee);t.cues.forEach(i=>{delete i.visemes,delete i.words}),t.voiceData=e.data,wt(t),Ys=e.buf,Ke("Voice imported.")}catch(e){Ke("Could not import audio: "+e.message)}finally{I("audio-file").value=""}};I("remove-voice").onclick=()=>{let n=It(ee);n.voiceData=null,n.cues.forEach(e=>{delete e.visemes,delete e.words}),wt(n)};I("upload-music").onclick=()=>I("music-file").click();I("music-file").onchange=async n=>{try{let e=await sg(n.target,1e7);if(!e)return;wt({...ee,musicData:e.data,music:!0},{keepAudio:!0}),Qr=e.buf,Ke("Music track added.")}catch(e){Ke("Could not import music: "+e.message)}finally{I("music-file").value=""}};I("remove-music").onclick=()=>wt({...ee,musicData:null},{keepAudio:!0});var wS={human:"Human",robot:"Robot",creature:"Creature",bot:"Desk bot"},_d={human:{ranges:["height","build","head"],options:["hairStyle","facialHair","eyeStyle","topStyle","glasses","hat"],colors:["skin","hair","eyes","top","accent","bottom","shoes"]},creature:{ranges:["height","build","head"],options:["species","eyeStyle","topStyle","glasses","hat"],colors:["skin","accent","hair","eyes","top","bottom","shoes"]},robot:{ranges:["height","build","head"],options:["glasses","hat"],colors:["top","accent","screen","bottom","shoes"]},bot:{ranges:["height"],options:[],colors:["top","accent","screen"]}},TS={height:"Height",build:"Build",head:"Head size",species:"Creature",hairStyle:"Hair",facialHair:"Facial hair",eyeStyle:"Eyes",topStyle:"Outfit",glasses:"Glasses",hat:"Headwear",skin:"Skin",hair:"Hair",eyes:"Eyes",top:"Outfit",accent:"Details",bottom:"Trousers",shoes:"Shoes",screen:"Face light"},ES={creature:{skin:"Fur",accent:"Belly & ears",hair:"Nose & brows"},robot:{top:"Shell",accent:"Joints"},bot:{top:"Shell",accent:"Trim"}},AS={shaggy:"Shaggy (reference)",chunky:"Chunky",short:"Short",curly:"Curly",long:"Long",bun:"Bun",mohawk:"Mohawk",bald:"Bald",none:"None",stubble:"Stubble",beard:"Beard",mustache:"Mustache",glossy:"Glossy (reference)",classic:"Classic",hoodie:"Hoodie",tshirt:"T-shirt",jacket:"Jacket",suit:"Suit & tie",round:"Round",square:"Square",cap:"Cap",beanie:"Beanie",headphones:"Headphones",fox:"Fox",cat:"Cat",dragon:"Dragon",bear:"Bear",bunny:"Bunny"},vi=()=>ee.cast.find(n=>n.id===qs)||ee.cast[0];function pd(n,e){let t=document.createElement("label");return t.append(n,e),t}function rg(){ee.cast.some(o=>o.id===qs)||(qs=ee.cast[0].id);let n=vi();I("cast-list").replaceChildren(...ee.cast.map((o,c)=>{let l=document.createElement("button");l.className="cast-chip"+(o.id===n.id?" selected":"");let h=document.createElement("span");h.className="cast-dot",h.style.background=(o.kind==="bot"||o.kind==="robot",o.look.top),h.textContent=o.name[0];let u=document.createElement("span");return u.innerHTML=`<b></b><small>${wS[o.kind]}</small>`,u.querySelector("b").textContent=o.name,l.append(h,u),l.onclick=()=>{qs=o.id,_t.setFocus(o.id),rg(),tn()},l})),I("add-character").disabled=ee.cast.length>=4,I("remove-character").disabled=ee.cast.length<=1,I("char-name").value=n.name,I("char-kind").value=n.kind,I("char-voice").value=n.voice;let t=_d[n.kind],i=I("look-fields"),s=o=>ES[n.kind]?.[o]||TS[o];i.replaceChildren();let r=o=>{let c=document.createElement("div");c.className="look-section",c.textContent=o,i.append(c)};r("Body");for(let o of t.ranges){let[c,l]=Bc[o],h=document.createElement("input");Object.assign(h,{type:"range",min:c,max:l,step:.01,value:n.look[o]}),h.dataset.key=o;let u=document.createElement("output");u.value=`${Math.round(n.look[o]*100)}%`,h.oninput=()=>{u.value=`${Math.round(h.value*100)}%`,Gm()},h.onchange=md;let d=pd(s(o)+" ",h);d.querySelector("input").before(u),i.append(d)}if(t.options.length){r("Style");let o=document.createElement("div");o.className="look-grid";for(let c of t.options){let l=document.createElement("select");l.dataset.key=c;for(let h of Us[c]){let u=document.createElement("option");u.value=h,u.textContent=AS[h]||h,l.append(u)}l.value=n.look[c],l.onchange=md,o.append(pd(s(c),l))}i.append(o)}r("Colours");let a=document.createElement("div");a.className="look-grid colors";for(let o of t.colors){let c=document.createElement("input");Object.assign(c,{type:"color",value:n.look[o]}),c.dataset.key=o,c.oninput=Gm,c.onchange=md,a.append(pd(s(o),c))}i.append(a)}function ag(){let n={...vi().look};for(let e of I("look-fields").querySelectorAll("[data-key]"))n[e.dataset.key]=e.type==="range"?Number(e.value):e.value;return n}function ea(n){let e=It(ee),t=e.cast.findIndex(i=>i.id===vi().id);return e.cast[t]={...e.cast[t],...n},e}var xd;function Gm(){clearTimeout(xd),xd=setTimeout(()=>{try{_t.setProject(Ka(ea({look:ag()}))),tn()}catch{}},40)}function md(){clearTimeout(xd);try{wt(ea({look:ag()}),{keepAudio:!0}),_t.setFocus(vi().id)}catch(n){Ke(n.message)}}I("char-name").onchange=()=>{try{wt(ea({name:I("char-name").value.trim()||vi().name}),{keepAudio:!0})}catch(n){Ke(n.message)}};I("char-voice").onchange=()=>{try{let n=vi().id,e=ea({voice:I("char-voice").value});e.cues.forEach(t=>{t.speaker===n&&(delete t.visemes,delete t.words)}),wt(e,{keepAudio:!0}),Ke("Voice changed. Generate voices to hear it.")}catch(n){Ke(n.message)}};I("char-kind").onchange=()=>{try{wt(ea({kind:I("char-kind").value}),{keepAudio:!0}),_t.setFocus(vi().id)}catch(n){Ke(n.message)}};I("add-character").onclick=()=>{try{let n=It(ee),e=Bp(n,I("new-template").value);n.cast.push(e),qs=e.id,wt(n,{keepAudio:!0}),_t.setFocus(e.id),tn(),Ke(`${e.name} joined the cast. Give them lines in the Scene tab or the script.`)}catch(n){Ke(n.message)}};I("remove-character").onclick=()=>{let n=vi(),e=ee.cues.filter(t=>t.speaker===n.id).length;if(e){Ke(`${n.name} speaks ${e} line${e>1?"s":""}. Give those lines to someone else or delete them first.`);return}try{let t=It(ee);t.cast=t.cast.filter(i=>i.id!==n.id),t.cues.forEach(i=>{i.subject===n.id&&delete i.subject}),qs=t.cast[0].id,wt(t,{keepAudio:!0}),_t.setFocus(qs)}catch(t){Ke(t.message)}};var Fi=n=>n[Math.floor(Math.random()*n.length)],CS=["#f1c7a5","#e0a57f","#c78a65","#a8714f","#7d5137","#5a3a28"],RS=["#1d1715","#2a211e","#5a3422","#8a5a2b","#c9a15a","#d8d0c4","#7a2f2f","#3e4f7a"],Wm=["#2e3a55","#8364c5","#b5543f","#3f6b58","#d9a441","#4f8fd6","#c24d6b","#2b2b2b","#e8e2d6","#6b4f3a"];I("randomize").onclick=()=>{let n=vi(),e={...n.look};for(let t of _d[n.kind].options)e[t]=Fi(Us[t]);for(let t of _d[n.kind].ranges){let[i,s]=Bc[t];e[t]=Math.round((i+(s-i)*(.25+Math.random()*.5))*100)/100}Object.assign(e,{skin:n.kind==="creature"?Fi(["#d9793d","#b9b2a6","#6b4a35","#e8dccb","#4d8a54"]):Fi(CS),hair:Fi(RS),top:Fi(Wm),accent:Fi(Wm),bottom:Fi(["#1b222c","#2b3346","#3d3328","#4a4a4a","#1f3a33"]),shoes:Fi(["#d6cbb5","#2b2b2b","#b5543f","#e8e2d6"]),screen:Fi(["#94f3d4","#7fd6ff","#ffd27a","#ff8fa3","#b9f27a"])}),Math.random()<.6&&(e.glasses="none"),Math.random()<.6&&(e.hat="none"),Math.random()<.6&&(e.facialHair="none");try{wt(ea({look:e}),{keepAudio:!0}),_t.setFocus(n.id)}catch(t){Ke(t.message)}};var yd=Math.PI/180,Yn=I("cam-dial");function IS(n){let e=Math.abs(n);return e<20?"Front":e<70?`Three-quarter ${n>0?"left":"right"}`:e<110?`Profile ${n>0?"left":"right"}`:e<160?`Over the ${n>0?"left":"right"} shoulder`:"From behind"}function xo(n){n=Math.round((n%360+540)%360-180),Yn.dataset.yaw=n;let e=Math.sin(n*yd)*50,t=Math.cos(n*yd)*50;I("dial-handle").setAttribute("cx",e.toFixed(1)),I("dial-handle").setAttribute("cy",t.toFixed(1)),I("dial-ray").setAttribute("x2",e.toFixed(1)),I("dial-ray").setAttribute("y2",t.toFixed(1)),I("yaw-out").innerHTML=`${n}\xB0<small>${IS(n)}</small>`}function Td(n){xo(n.yaw),I("cam-pitch").value=n.pitch,I("cam-dist").value=n.dist,I("cam-lens").value=n.lens,I("cam-move").value=n.move,og()}function og(){I("pitch-out").value=`${I("cam-pitch").value}\xB0${Number(I("cam-pitch").value)<0?" low angle":Number(I("cam-pitch").value)>40?" high angle":""}`,I("dist-out").value=`${Number(I("cam-dist").value).toFixed(1)} m`,I("lens-out").value=`${I("cam-lens").value} mm`}function Ed(){return{yaw:Number(Yn.dataset.yaw||0),pitch:Number(I("cam-pitch").value),dist:Number(I("cam-dist").value),lens:Number(I("cam-lens").value),move:I("cam-move").value}}var yo=()=>ee.cues.find(n=>n.id===xn);function Ad(){let n=yo();n&&((Dt<n.start||Dt>=n.end)&&(on(),Dt=n.start+Math.min(.5,(n.end-n.start)/2)),_t.previewCam={...Ed(),subject:I("subject").value||n.speaker},tn())}function os(n={}){let e=yo();if(e){_t.previewCam=null;try{let t=It(ee),i=t.cues.find(r=>r.id===e.id);Object.assign(i,{shot:"custom",cam:Ed(),...n});let s=I("subject").value;s?i.subject=s:delete i.subject,wt(t,{keepAudio:!0})}catch(t){Ke(t.message)}}}function lg(n){let e=Yn.getBoundingClientRect(),t=(n.clientX-e.left)/e.width*128-64,i=(n.clientY-e.top)/e.height*128-64;return Math.atan2(t,i)/yd}Yn.addEventListener("pointerdown",n=>{Yn.setPointerCapture(n.pointerId),xo(lg(n)),Ad()});Yn.addEventListener("pointermove",n=>{Yn.hasPointerCapture(n.pointerId)&&(xo(lg(n)),Ad())});Yn.addEventListener("pointerup",n=>{Yn.hasPointerCapture(n.pointerId)&&(Yn.releasePointerCapture(n.pointerId),os())});Yn.addEventListener("keydown",n=>{["ArrowLeft","ArrowRight"].includes(n.key)&&(n.preventDefault(),xo(Number(Yn.dataset.yaw||0)+(n.key==="ArrowLeft"?-5:5)*(n.shiftKey?3:1)),os())});for(let n of["cam-pitch","cam-dist","cam-lens"])I(n).oninput=()=>{og(),Ad()},I(n).onchange=()=>os();I("cam-move").onchange=()=>os();document.querySelectorAll("[data-yaw]").forEach(n=>n.onclick=()=>{xo(Number(n.dataset.yaw)),os()});function cg(n){let e=zc(ee).find(t=>t.cue===n.id&&t.shot!=="screen")||{shot:"single",subject:n.speaker,other:n.speaker};return{seg:e,cam:e.shot==="custom"?e.cam:_t.describeShot(e)}}I("customize-cam").onclick=()=>{let n=yo();if(!n)return;let{seg:e,cam:t}=cg(n);Td(t),e.subject!==n.speaker&&(I("subject").value=e.subject),os(),Ke("Drag the dial to move the camera around the character.")};I("shot").onchange=()=>{let n=yo();if(n)if(I("shot").value==="custom"){let{cam:e}=cg(n);Td(n.cam||e),os()}else try{let e=It(ee),t=e.cues.find(i=>i.id===n.id);t.shot=I("shot").value,delete t.cam,wt(e,{keepAudio:!0})}catch(e){Ke(e.message)}};I("subject").onchange=()=>{let n=yo();if(n){if(n.shot==="custom"){os();return}try{let e=It(ee),t=e.cues.find(i=>i.id===n.id);I("subject").value?t.subject=I("subject").value:delete t.subject,t.shot==="auto"&&(t.shot="single"),wt(e,{keepAudio:!0})}catch(e){Ke(e.message)}}};var hg=()=>{on(),I("script-text").value=Op(ee),I("script-error").textContent="",I("script-dialog").showModal()};I("script-open").onclick=hg;I("script-open-2").onclick=hg;document.querySelectorAll("[data-close]").forEach(n=>n.onclick=()=>I(n.dataset.close).close());I("import-script").onclick=()=>{try{let{meta:n,cues:e}=Fp(I("script-text").value,ee),t=e.at(-1).end,i=Math.min(90,Math.max(ee.duration,Math.ceil(t+2.5))),s={...It(ee),cues:e,duration:i,voiceData:null,title:n.title||ee.title,handle:n.handle??ee.handle};xn=e[0].id,Dt=0,wt(s),I("script-dialog").close(),Ke("Script loaded. Open the Voice tab to give it voices."),document.querySelector("[data-tab=voice]").click()}catch(n){I("script-error").textContent=n.message}};I("download-script").onclick=()=>ig(new Blob([I("script-text").value],{type:"text/plain"}),wd()+".script.txt");var PS={human:"a human",robot:"a humanoid robot",creature:"a cartoon creature",bot:"a small desk robot with an LED face"};I("copy-prompt").onclick=async()=>{let n=I("ai-topic").value.trim()||"something funny that happens at their desk today",e=ee.cast,t=e[0].name.toUpperCase(),i=(e[1]||e[0]).name.toUpperCase(),s=`You write short comedy scripts for a 3D animated vertical reel (9:16, 30 to 55 seconds).
Characters:
${e.map(r=>`- ${r.name}: ${PS[r.kind]}${r.kind==="creature"?` (${r.look.species})`:""}. Give them a clear, consistent personality.`).join(`
`)}
Setting: they stand on a giant keyboard in front of a huge monitor whose screen can change.
Write an episode about: ${n}

Structure: a hook in the first line, escalation, one silent beat, and a callback punchline at the end. 8 to 14 lines, about 100 spoken words in total, each line under 160 characters.
Reply with the script only, in exactly this format, one line each:
# title: <short episode title>
${t} [emotion, action]: spoken line
${i} [emotion, action, pause=0.8]: spoken line
>> SCREEN tone: KICKER | Title | Subtitle   (optional; put it before a line to change the monitor; tone is alert, calm, info or success; add +progress after the tone for a progress bar)

Emotions: ${zr.join(", ")}
Actions: ${Vr.join(", ")}
Optional camera tag (default is automatic): ${Hr.filter(r=>!["auto","custom"].includes(r)).join(", ")}; add :name to frame someone else (cu:${e[0].name.toLowerCase()}), or a free angle cam=<degrees around>/<height degrees>/<distance>/<lens mm>
Optional pause tag: pause=<seconds of silence after the line, 0 to 3>`;try{await navigator.clipboard.writeText(s),Ke("Prompt copied. Paste it into Claude, ChatGPT or Gemini.")}catch{I("script-text").value=s,Ke("Clipboard blocked: the prompt is in the editor. Copy it from there.")}};I("export-open").onclick=()=>{on(),globalThis.VideoEncoder||(I("export-status").textContent="This browser exports a frame package with soundtrack; its included converter creates the MP4."),Sd(),I("export-dialog").showModal()};I("close-export").onclick=()=>{gi||I("export-dialog").close()};I("export-dialog").addEventListener("cancel",n=>{gi&&n.preventDefault()});I("render").onclick=async()=>{if(!gi){on(),gi=!0,vd=new AbortController,I("render").disabled=!0,I("export-size").disabled=!0,I("close-export").disabled=!0,I("export-progress").hidden=!1,I("cancel-export").hidden=!1,I("export-result").hidden=!0,I("export-status").textContent="Preparing soundtrack\u2026";try{let n=await jm(),e=[n.getChannelData(0),n.getChannelData(1)],t=await Vm(_t,It(ee),e,Number(I("export-size").value),(s,r)=>{I("export-progress").value=s,I("export-status").textContent=r},vd.signal);fo&&URL.revokeObjectURL(fo),fo=URL.createObjectURL(t.blob);let i=t.kind==="frames";I("result-video").hidden=i,i||(I("result-video").src=fo),I("download-film").href=fo,I("download-film").download=wd()+(i?"_render.zip":".mp4"),I("download-film").textContent=i?"Download render package \u2193":"Download film \u2193",I("export-result").hidden=!1,I("export-status").textContent=`Ready \xB7 ${t.width} \xD7 ${t.height} \xB7 ${t.frames} frames \xB7 ${(t.blob.size/1e6).toFixed(1)} MB`+(i?" \xB7 Extract and run convert_video.py to create your MP4.":""),I("status").textContent="Final film rendered successfully."}catch(n){I("export-status").textContent=n.message,console.error(n)}finally{gi=!1,I("render").disabled=!1,I("export-size").disabled=!1,I("close-export").disabled=!1,I("cancel-export").hidden=!0,tn()}}};I("cancel-export").onclick=()=>vd?.abort();document.addEventListener("keydown",n=>{["INPUT","TEXTAREA","SELECT"].includes(n.target.tagName)||document.querySelector("dialog[open]")||(n.code==="Space"&&(n.preventDefault(),Km()),(n.key==="ArrowLeft"||n.key==="ArrowRight")&&(n.preventDefault(),on(),Dt=Math.max(0,Math.min(ee.duration,Dt+(n.key==="ArrowLeft"?-1:1)*(n.shiftKey?1:1/30))),tn()),(n.ctrlKey||n.metaKey)&&n.key==="z"&&(n.preventDefault(),I(n.shiftKey?"redo":"undo").click()))});document.addEventListener("visibilitychange",()=>{document.hidden&&!gi&&on()});try{_t=new Hc(I("film"),ee),_t.setSize(540,960),I("loading").hidden=!0,ah(),tn(),requestAnimationFrame(Jm)}catch(n){I("loading").textContent="3D could not start: "+n.message,I("status").textContent="WebGL is required. Try a current browser with graphics enabled.",console.error(n)}
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
