var Rs={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ps={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Lm=0,vd=1,Um=2;var xd=1,Nc=2,Ui=3,Yn=0,Nn=1,Cn=2,$t=0,Zs=1,ur=2,_d=3,yd=4,Fc=5,Kn=100,km=101,Nm=102,Fm=103,Om=104,dr=200,Bm=201,zm=202,Hm=203,uc=204,dc=205,Vo=206,Vm=207,Go=208,Gm=209,Wm=210,jm=211,Xm=212,qm=213,Ym=214,Oc=0,Bc=1,zc=2,Js=3,Hc=4,Vc=5,Gc=6,Wc=7,Sd=0,Km=1,$m=2,ls=0,jc=1,Xc=2,qc=3,_a=4,Yc=5,Kc=6,$c=7,od="attached",Zm="detached",Md=300,fr=301,pr=302,Zc=303,Jc=304,Wo=306,zn=1e3,Ti=1001,sa=1002,jt=1003,Qc=1004;var mr=1005;var Un=1006,ya=1007;var Si=1008;var Zn=1009,wd=1010,Td=1011,Sa=1012,eh=1013,Is=1014,li=1015,on=1016,th=1017,nh=1018,Ds=1020,Ed=35902,Ad=35899,Cd=1021,Rd=1022,Fn=1023,ra=1026,Ls=1027,ih=1028,sh=1029,Pd=1030,rh=1031;var ah=1033,jo=33776,Xo=33777,qo=33778,Yo=33779,oh=35840,lh=35841,ch=35842,hh=35843,uh=36196,dh=37492,fh=37496,ph=37808,mh=37809,gh=37810,bh=37811,vh=37812,xh=37813,_h=37814,yh=37815,Sh=37816,Mh=37817,wh=37818,Th=37819,Eh=37820,Ah=37821,Ch=36492,Rh=36494,Ph=36495,Ih=36283,Dh=36284,Lh=36285,Uh=36286;var Qs=2300,er=2301,hc=2302,ld=2400,cd=2401,hd=2402,Jm=2500;var Id=0,Ko=1,Ma=2,Qm=3200,kh=3201;var Nh=0,eg=1,cs="",Ht="srgb",bn="srgb-linear",ho="linear",mt="srgb";var $s=7680;var ud=519,tg=512,ng=513,ig=514,Dd=515,sg=516,rg=517,ag=518,og=519,fc=35044;var Ld="300 es",_i=2e3,uo=2001;var Ai=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yp=1234567,ao=Math.PI/180,tr=180/Math.PI;function yi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(wn[i&255]+wn[i>>8&255]+wn[i>>16&255]+wn[i>>24&255]+"-"+wn[e&255]+wn[e>>8&255]+"-"+wn[e>>16&15|64]+wn[e>>24&255]+"-"+wn[t&63|128]+wn[t>>8&255]+"-"+wn[t>>16&255]+wn[t>>24&255]+wn[n&255]+wn[n>>8&255]+wn[n>>16&255]+wn[n>>24&255]).toLowerCase()}function Ze(i,e,t){return Math.max(e,Math.min(t,i))}function Ud(i,e){return(i%e+e)%e}function av(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function ov(i,e,t){return i!==e?(t-i)/(e-i):0}function oo(i,e,t){return(1-t)*i+t*e}function lv(i,e,t,n){return oo(i,e,1-Math.exp(-t*n))}function cv(i,e=1){return e-Math.abs(Ud(i,e*2)-e)}function hv(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function uv(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function dv(i,e){return i+Math.floor(Math.random()*(e-i+1))}function fv(i,e){return i+Math.random()*(e-i)}function pv(i){return i*(.5-Math.random())}function mv(i){i!==void 0&&(Yp=i);let e=Yp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function gv(i){return i*ao}function bv(i){return i*tr}function vv(i){return(i&i-1)===0&&i!==0}function xv(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function _v(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function yv(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),u=a((e+n)/2),h=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*u,c*h,c*d,o*l);break;case"YZY":i.set(c*d,o*u,c*h,o*l);break;case"ZXZ":i.set(c*h,c*d,o*u,o*l);break;case"XZX":i.set(o*u,c*g,c*f,o*l);break;case"YXY":i.set(c*f,o*u,c*g,o*l);break;case"ZYZ":i.set(c*g,c*f,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function xi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function St(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var $o={DEG2RAD:ao,RAD2DEG:tr,generateUUID:yi,clamp:Ze,euclideanModulo:Ud,mapLinear:av,inverseLerp:ov,lerp:oo,damp:lv,pingpong:cv,smoothstep:hv,smootherstep:uv,randInt:dv,randFloat:fv,randFloatSpread:pv,seededRandom:mv,degToRad:gv,radToDeg:bv,isPowerOfTwo:vv,ceilPowerOfTwo:xv,floorPowerOfTwo:_v,setQuaternionFromProperEuler:yv,normalize:St,denormalize:xi},ne=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ut=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3],d=r[a+0],f=r[a+1],g=r[a+2],b=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=b;return}if(h!==b||c!==d||l!==f||u!==g){let m=1-o,p=c*d+l*f+u*g+h*b,x=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let y=Math.sqrt(_),T=Math.atan2(y,p*x);m=Math.sin(m*T)/y,o=Math.sin(o*T)/y}let v=o*x;if(c=c*m+d*v,l=l*m+f*v,u=u*m+g*v,h=h*m+b*v,m===1-o){let y=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=y,l*=y,u*=y,h*=y}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+u*h+c*f-l*d,e[t+1]=c*g+u*d+l*h-o*f,e[t+2]=l*g+u*f+o*d-c*h,e[t+3]=u*g-o*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(s/2),h=o(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"YZX":this._x=d*u*h+l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h-d*f*g;break;case"XZY":this._x=d*u*h-l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>h){let f=2*Math.sqrt(1+n-o-h);this._w=(u-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>h){let f=2*Math.sqrt(1+o-n-h);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+u)/f}else{let f=2*Math.sqrt(1+h-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-s*o,this._w=a*u-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Kp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Kp.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),u=2*(o*t-r*s),h=2*(r*n-a*t);return this.x=t+c*l+a*h-o*u,this.y=n+c*u+o*l-r*h,this.z=s+c*h+r*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Pu.copy(this).projectOnVector(e),this.sub(Pu)}reflect(e){return this.sub(Pu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Pu=new P,Kp=new Ut,Ye=class i{constructor(e,t,n,s,r,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],b=s[0],m=s[3],p=s[6],x=s[1],_=s[4],v=s[7],y=s[2],T=s[5],w=s[8];return r[0]=a*b+o*x+c*y,r[3]=a*m+o*_+c*T,r[6]=a*p+o*v+c*w,r[1]=l*b+u*x+h*y,r[4]=l*m+u*_+h*T,r[7]=l*p+u*v+h*w,r[2]=d*b+f*x+g*y,r[5]=d*m+f*_+g*T,r[8]=d*p+f*v+g*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*r*u+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,d=o*c-u*r,f=l*r-a*c,g=t*h+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/g;return e[0]=h*b,e[1]=(s*l-u*n)*b,e[2]=(o*n-s*a)*b,e[3]=d*b,e[4]=(u*t-s*c)*b,e[5]=(s*r-o*t)*b,e[6]=f*b,e[7]=(n*c-l*t)*b,e[8]=(a*t-n*r)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Iu.makeScale(e,t)),this}rotate(e){return this.premultiply(Iu.makeRotation(-e)),this}translate(e,t){return this.premultiply(Iu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Iu=new Ye;function kd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function aa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function lg(){let i=aa("canvas");return i.style.display="block",i}var $p={};function oa(i){i in $p||($p[i]=!0,console.warn(i))}function cg(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Zp=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jp=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Sv(){let i={enabled:!0,workingColorSpace:bn,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===mt&&(s.r=Ji(s.r),s.g=Ji(s.g),s.b=Ji(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===mt&&(s.r=ia(s.r),s.g=ia(s.g),s.b=ia(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===cs?ho:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return oa("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return oa("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[bn]:{primaries:e,whitePoint:n,transfer:ho,toXYZ:Zp,fromXYZ:Jp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ht},outputColorSpaceConfig:{drawingBufferColorSpace:Ht}},[Ht]:{primaries:e,whitePoint:n,transfer:mt,toXYZ:Zp,fromXYZ:Jp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ht}}}),i}var st=Sv();function Ji(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ia(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Br,pc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Br===void 0&&(Br=aa("canvas")),Br.width=e.width,Br.height=e.height;let s=Br.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Br}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=aa("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ji(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ji(t[n]/255)*255):t[n]=Ji(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Mv=0,la=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Mv++}),this.uuid=yi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Du(s[a].image)):r.push(Du(s[a]))}else r=Du(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Du(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?pc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var wv=0,Lu=new P,an=class i extends Ai{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Ti,s=Ti,r=Un,a=Si,o=Fn,c=Zn,l=i.DEFAULT_ANISOTROPY,u=cs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wv++}),this.uuid=yi(),this.name="",this.source=new la(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Lu).x}get height(){return this.source.getSize(Lu).y}get depth(){return this.source.getSize(Lu).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Md)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zn:e.x=e.x-Math.floor(e.x);break;case Ti:e.x=e.x<0?0:1;break;case sa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zn:e.y=e.y-Math.floor(e.y);break;case Ti:e.y=e.y<0?0:1;break;case sa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=Md;an.DEFAULT_ANISOTROPY=1;var pt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],g=c[9],b=c[2],m=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-b)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+b)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(l+1)/2,v=(f+1)/2,y=(p+1)/2,T=(u+d)/4,w=(h+b)/4,C=(g+m)/4;return _>v&&_>y?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=T/n,r=w/n):v>y?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=T/s,r=C/s):y<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(y),n=w/r,s=C/r),this.set(n,s,r,t),this}let x=Math.sqrt((m-g)*(m-g)+(h-b)*(h-b)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(h-b)/x,this.z=(d-u)/x,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},mc=class extends Ai{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);let s={width:e,height:t,depth:n.depth},r=new an(s);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:Un,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new la(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xt=class extends mc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},fo=class extends an{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var gc=class extends an{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var En=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(gi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(gi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=gi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,gi):gi.fromBufferAttribute(r,a),gi.applyMatrix4(e.matrixWorld),this.expandByPoint(gi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Nl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Nl.copy(n.boundingBox)),Nl.applyMatrix4(e.matrixWorld),this.union(Nl)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gi),gi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ka),Fl.subVectors(this.max,Ka),zr.subVectors(e.a,Ka),Hr.subVectors(e.b,Ka),Vr.subVectors(e.c,Ka),bs.subVectors(Hr,zr),vs.subVectors(Vr,Hr),Xs.subVectors(zr,Vr);let t=[0,-bs.z,bs.y,0,-vs.z,vs.y,0,-Xs.z,Xs.y,bs.z,0,-bs.x,vs.z,0,-vs.x,Xs.z,0,-Xs.x,-bs.y,bs.x,0,-vs.y,vs.x,0,-Xs.y,Xs.x,0];return!Uu(t,zr,Hr,Vr,Fl)||(t=[1,0,0,0,1,0,0,0,1],!Uu(t,zr,Hr,Vr,Fl))?!1:(Ol.crossVectors(bs,vs),t=[Ol.x,Ol.y,Ol.z],Uu(t,zr,Hr,Vr,Fl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ji),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ji=[new P,new P,new P,new P,new P,new P,new P,new P],gi=new P,Nl=new En,zr=new P,Hr=new P,Vr=new P,bs=new P,vs=new P,Xs=new P,Ka=new P,Fl=new P,Ol=new P,qs=new P;function Uu(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){qs.fromArray(i,r);let o=s.x*Math.abs(qs.x)+s.y*Math.abs(qs.y)+s.z*Math.abs(qs.z),c=e.dot(qs),l=t.dot(qs),u=n.dot(qs);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}var Tv=new En,$a=new P,ku=new P,Hn=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Tv.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$a.subVectors(e,this.center);let t=$a.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector($a,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ku.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($a.copy(e.center).add(ku)),this.expandByPoint($a.copy(e.center).sub(ku))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Xi=new P,Nu=new P,Bl=new P,xs=new P,Fu=new P,zl=new P,Ou=new P,Qi=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Xi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xi.copy(this.origin).addScaledVector(this.direction,t),Xi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Nu.copy(e).add(t).multiplyScalar(.5),Bl.copy(t).sub(e).normalize(),xs.copy(this.origin).sub(Nu);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Bl),o=xs.dot(this.direction),c=-xs.dot(Bl),l=xs.lengthSq(),u=Math.abs(1-a*a),h,d,f,g;if(u>0)if(h=a*c-o,d=a*o-c,g=r*u,h>=0)if(d>=-g)if(d<=g){let b=1/u;h*=b,d*=b,f=h*(h+a*d+2*o)+d*(a*h+d+2*c)+l}else d=r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Nu).addScaledVector(Bl,d),f}intersectSphere(e,t){Xi.subVectors(e.center,this.origin);let n=Xi.dot(this.direction),s=Xi.dot(Xi)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Xi)!==null}intersectTriangle(e,t,n,s,r){Fu.subVectors(t,e),zl.subVectors(n,e),Ou.crossVectors(Fu,zl);let a=this.direction.dot(Ou),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;xs.subVectors(this.origin,e);let c=o*this.direction.dot(zl.crossVectors(xs,zl));if(c<0)return null;let l=o*this.direction.dot(Fu.cross(xs));if(l<0||c+l>a)return null;let u=-o*xs.dot(Ou);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Le=class i{constructor(e,t,n,s,r,a,o,c,l,u,h,d,f,g,b,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,u,h,d,f,g,b,m)}set(e,t,n,s,r,a,o,c,l,u,h,d,f,g,b,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=b,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Gr.setFromMatrixColumn(e,0).length(),r=1/Gr.setFromMatrixColumn(e,1).length(),a=1/Gr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=a*u,f=a*h,g=o*u,b=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+g*l,t[5]=d-b*l,t[9]=-o*c,t[2]=b-d*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*u,f=c*h,g=l*u,b=l*h;t[0]=d+b*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-g,t[6]=b+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*u,f=c*h,g=l*u,b=l*h;t[0]=d-b*o,t[4]=-a*h,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*u,t[9]=b-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*u,f=a*h,g=o*u,b=o*h;t[0]=c*u,t[4]=g*l-f,t[8]=d*l+b,t[1]=c*h,t[5]=b*l+d,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,f=a*l,g=o*c,b=o*l;t[0]=c*u,t[4]=b-d*h,t[8]=g*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=f*h+g,t[10]=d-b*h}else if(e.order==="XZY"){let d=a*c,f=a*l,g=o*c,b=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+b,t[5]=a*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=o*u,t[10]=b*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ev,e,Av)}lookAt(e,t,n){let s=this.elements;return Xn.subVectors(e,t),Xn.lengthSq()===0&&(Xn.z=1),Xn.normalize(),_s.crossVectors(n,Xn),_s.lengthSq()===0&&(Math.abs(n.z)===1?Xn.x+=1e-4:Xn.z+=1e-4,Xn.normalize(),_s.crossVectors(n,Xn)),_s.normalize(),Hl.crossVectors(Xn,_s),s[0]=_s.x,s[4]=Hl.x,s[8]=Xn.x,s[1]=_s.y,s[5]=Hl.y,s[9]=Xn.y,s[2]=_s.z,s[6]=Hl.z,s[10]=Xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],b=n[6],m=n[10],p=n[14],x=n[3],_=n[7],v=n[11],y=n[15],T=s[0],w=s[4],C=s[8],M=s[12],S=s[1],I=s[5],D=s[9],k=s[13],W=s[2],B=s[6],G=s[10],Z=s[14],O=s[3],j=s[7],Q=s[11],re=s[15];return r[0]=a*T+o*S+c*W+l*O,r[4]=a*w+o*I+c*B+l*j,r[8]=a*C+o*D+c*G+l*Q,r[12]=a*M+o*k+c*Z+l*re,r[1]=u*T+h*S+d*W+f*O,r[5]=u*w+h*I+d*B+f*j,r[9]=u*C+h*D+d*G+f*Q,r[13]=u*M+h*k+d*Z+f*re,r[2]=g*T+b*S+m*W+p*O,r[6]=g*w+b*I+m*B+p*j,r[10]=g*C+b*D+m*G+p*Q,r[14]=g*M+b*k+m*Z+p*re,r[3]=x*T+_*S+v*W+y*O,r[7]=x*w+_*I+v*B+y*j,r[11]=x*C+_*D+v*G+y*Q,r[15]=x*M+_*k+v*Z+y*re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],b=e[7],m=e[11],p=e[15];return g*(+r*c*h-s*l*h-r*o*d+n*l*d+s*o*f-n*c*f)+b*(+t*c*f-t*l*d+r*a*d-s*a*f+s*l*u-r*c*u)+m*(+t*l*h-t*o*f-r*a*h+n*a*f+r*o*u-n*l*u)+p*(-s*o*u-t*c*h+t*o*d+s*a*h-n*a*d+n*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],b=e[13],m=e[14],p=e[15],x=h*m*l-b*d*l+b*c*f-o*m*f-h*c*p+o*d*p,_=g*d*l-u*m*l-g*c*f+a*m*f+u*c*p-a*d*p,v=u*b*l-g*h*l+g*o*f-a*b*f-u*o*p+a*h*p,y=g*h*c-u*b*c-g*o*d+a*b*d+u*o*m-a*h*m,T=t*x+n*_+s*v+r*y;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/T;return e[0]=x*w,e[1]=(b*d*r-h*m*r-b*s*f+n*m*f+h*s*p-n*d*p)*w,e[2]=(o*m*r-b*c*r+b*s*l-n*m*l-o*s*p+n*c*p)*w,e[3]=(h*c*r-o*d*r-h*s*l+n*d*l+o*s*f-n*c*f)*w,e[4]=_*w,e[5]=(u*m*r-g*d*r+g*s*f-t*m*f-u*s*p+t*d*p)*w,e[6]=(g*c*r-a*m*r-g*s*l+t*m*l+a*s*p-t*c*p)*w,e[7]=(a*d*r-u*c*r+u*s*l-t*d*l-a*s*f+t*c*f)*w,e[8]=v*w,e[9]=(g*h*r-u*b*r-g*n*f+t*b*f+u*n*p-t*h*p)*w,e[10]=(a*b*r-g*o*r+g*n*l-t*b*l-a*n*p+t*o*p)*w,e[11]=(u*o*r-a*h*r-u*n*l+t*h*l+a*n*f-t*o*f)*w,e[12]=y*w,e[13]=(u*b*s-g*h*s+g*n*d-t*b*d-u*n*m+t*h*m)*w,e[14]=(g*o*s-a*b*s-g*n*c+t*b*c+a*n*m-t*o*m)*w,e[15]=(a*h*s-u*o*s+u*n*c-t*h*c-a*n*d+t*o*d)*w,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+n,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,u=a+a,h=o+o,d=r*l,f=r*u,g=r*h,b=a*u,m=a*h,p=o*h,x=c*l,_=c*u,v=c*h,y=n.x,T=n.y,w=n.z;return s[0]=(1-(b+p))*y,s[1]=(f+v)*y,s[2]=(g-_)*y,s[3]=0,s[4]=(f-v)*T,s[5]=(1-(d+p))*T,s[6]=(m+x)*T,s[7]=0,s[8]=(g+_)*w,s[9]=(m-x)*w,s[10]=(1-(d+b))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Gr.set(s[0],s[1],s[2]).length(),a=Gr.set(s[4],s[5],s[6]).length(),o=Gr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],bi.copy(this);let l=1/r,u=1/a,h=1/o;return bi.elements[0]*=l,bi.elements[1]*=l,bi.elements[2]*=l,bi.elements[4]*=u,bi.elements[5]*=u,bi.elements[6]*=u,bi.elements[8]*=h,bi.elements[9]*=h,bi.elements[10]*=h,t.setFromRotationMatrix(bi),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=_i,c=!1){let l=this.elements,u=2*r/(t-e),h=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),g,b;if(c)g=r/(a-r),b=a*r/(a-r);else if(o===_i)g=-(a+r)/(a-r),b=-2*a*r/(a-r);else if(o===uo)g=-a/(a-r),b=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=b,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=_i,c=!1){let l=this.elements,u=2/(t-e),h=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),g,b;if(c)g=1/(a-r),b=a/(a-r);else if(o===_i)g=-2/(a-r),b=-(a+r)/(a-r);else if(o===uo)g=-1/(a-r),b=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=h,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=b,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Gr=new P,bi=new Le,Ev=new P(0,0,0),Av=new P(1,1,1),_s=new P,Hl=new P,Xn=new P,Qp=new Le,em=new Ut,kn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ze(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ze(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Qp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return em.setFromEuler(this),this.setFromQuaternion(em,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};kn.DEFAULT_ORDER="XYZ";var po=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Cv=0,tm=new P,Wr=new Ut,qi=new Le,Vl=new P,Za=new P,Rv=new P,Pv=new Ut,nm=new P(1,0,0),im=new P(0,1,0),sm=new P(0,0,1),rm={type:"added"},Iv={type:"removed"},jr={type:"childadded",child:null},Bu={type:"childremoved",child:null},kt=class i extends Ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cv++}),this.uuid=yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new P,t=new kn,n=new Ut,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Le},normalMatrix:{value:new Ye}}),this.matrix=new Le,this.matrixWorld=new Le,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new po,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Wr.setFromAxisAngle(e,t),this.quaternion.multiply(Wr),this}rotateOnWorldAxis(e,t){return Wr.setFromAxisAngle(e,t),this.quaternion.premultiply(Wr),this}rotateX(e){return this.rotateOnAxis(nm,e)}rotateY(e){return this.rotateOnAxis(im,e)}rotateZ(e){return this.rotateOnAxis(sm,e)}translateOnAxis(e,t){return tm.copy(e).applyQuaternion(this.quaternion),this.position.add(tm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(nm,e)}translateY(e){return this.translateOnAxis(im,e)}translateZ(e){return this.translateOnAxis(sm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Vl.copy(e):Vl.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Za.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qi.lookAt(Za,Vl,this.up):qi.lookAt(Vl,Za,this.up),this.quaternion.setFromRotationMatrix(qi),s&&(qi.extractRotation(s.matrixWorld),Wr.setFromRotationMatrix(qi),this.quaternion.premultiply(Wr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(rm),jr.child=e,this.dispatchEvent(jr),jr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Iv),Bu.child=e,this.dispatchEvent(Bu),Bu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qi.multiply(e.parent.matrixWorld)),e.applyMatrix4(qi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(rm),jr.child=e,this.dispatchEvent(jr),jr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Za,e,Rv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Za,Pv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let c=[];for(let l in o){let u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};kt.DEFAULT_UP=new P(0,1,0);kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var vi=new P,Yi=new P,zu=new P,Ki=new P,Xr=new P,qr=new P,am=new P,Hu=new P,Vu=new P,Gu=new P,Wu=new pt,ju=new pt,Xu=new pt,Zi=class i{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),vi.subVectors(e,t),s.cross(vi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){vi.subVectors(s,t),Yi.subVectors(n,t),zu.subVectors(e,t);let a=vi.dot(vi),o=vi.dot(Yi),c=vi.dot(zu),l=Yi.dot(Yi),u=Yi.dot(zu),h=a*l-o*o;if(h===0)return r.set(0,0,0),null;let d=1/h,f=(l*c-o*u)*d,g=(a*u-o*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ki)===null?!1:Ki.x>=0&&Ki.y>=0&&Ki.x+Ki.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,Ki)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ki.x),c.addScaledVector(a,Ki.y),c.addScaledVector(o,Ki.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return Wu.setScalar(0),ju.setScalar(0),Xu.setScalar(0),Wu.fromBufferAttribute(e,t),ju.fromBufferAttribute(e,n),Xu.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Wu,r.x),a.addScaledVector(ju,r.y),a.addScaledVector(Xu,r.z),a}static isFrontFacing(e,t,n,s){return vi.subVectors(n,t),Yi.subVectors(e,t),vi.cross(Yi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vi.subVectors(this.c,this.b),Yi.subVectors(this.a,this.b),vi.cross(Yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Xr.subVectors(s,n),qr.subVectors(r,n),Hu.subVectors(e,n);let c=Xr.dot(Hu),l=qr.dot(Hu);if(c<=0&&l<=0)return t.copy(n);Vu.subVectors(e,s);let u=Xr.dot(Vu),h=qr.dot(Vu);if(u>=0&&h<=u)return t.copy(s);let d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(Xr,a);Gu.subVectors(e,r);let f=Xr.dot(Gu),g=qr.dot(Gu);if(g>=0&&f<=g)return t.copy(r);let b=f*l-c*g;if(b<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(qr,o);let m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return am.subVectors(r,s),o=(h-u)/(h-u+(f-g)),t.copy(s).addScaledVector(am,o);let p=1/(m+b+d);return a=b*p,o=d*p,t.copy(n).addScaledVector(Xr,a).addScaledVector(qr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},hg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ys={h:0,s:0,l:0},Gl={h:0,s:0,l:0};function qu(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var xe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=st.workingColorSpace){return this.r=e,this.g=t,this.b=n,st.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=st.workingColorSpace){if(e=Ud(e,1),t=Ze(t,0,1),n=Ze(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=qu(a,r,e+1/3),this.g=qu(a,r,e),this.b=qu(a,r,e-1/3)}return st.colorSpaceToWorking(this,s),this}setStyle(e,t=Ht){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ht){let n=hg[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ji(e.r),this.g=Ji(e.g),this.b=Ji(e.b),this}copyLinearToSRGB(e){return this.r=ia(e.r),this.g=ia(e.g),this.b=ia(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ht){return st.workingToColorSpace(Tn.copy(this),e),Math.round(Ze(Tn.r*255,0,255))*65536+Math.round(Ze(Tn.g*255,0,255))*256+Math.round(Ze(Tn.b*255,0,255))}getHexString(e=Ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.workingToColorSpace(Tn.copy(this),t);let n=Tn.r,s=Tn.g,r=Tn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,u=(o+a)/2;if(o===a)c=0,l=0;else{let h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=st.workingColorSpace){return st.workingToColorSpace(Tn.copy(this),t),e.r=Tn.r,e.g=Tn.g,e.b=Tn.b,e}getStyle(e=Ht){st.workingToColorSpace(Tn.copy(this),e);let t=Tn.r,n=Tn.g,s=Tn.b;return e!==Ht?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ys),this.setHSL(ys.h+e,ys.s+t,ys.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ys),e.getHSL(Gl);let n=oo(ys.h,Gl.h,t),s=oo(ys.s,Gl.s,t),r=oo(ys.l,Gl.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Tn=new xe;xe.NAMES=hg;var Dv=0,An=class extends Ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dv++}),this.uuid=yi(),this.name="",this.type="Material",this.blending=Zs,this.side=Yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uc,this.blendDst=dc,this.blendEquation=Kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xe(0,0,0),this.blendAlpha=0,this.depthFunc=Js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ud,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$s,this.stencilZFail=$s,this.stencilZPass=$s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Zs&&(n.blending=this.blending),this.side!==Yn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==uc&&(n.blendSrc=this.blendSrc),this.blendDst!==dc&&(n.blendDst=this.blendDst),this.blendEquation!==Kn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Js&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ud&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$s&&(n.stencilFail=this.stencilFail),this.stencilZFail!==$s&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==$s&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},tn=class extends An{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=Sd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Jt=new P,Wl=new ne,Lv=0,en=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Lv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=fc,this.updateRanges=[],this.gpuType=li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Wl.fromBufferAttribute(this,t),Wl.applyMatrix3(e),this.setXY(t,Wl.x,Wl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=xi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=St(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=xi(t,this.array)),t}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=xi(t,this.array)),t}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=xi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=xi(t,this.array)),t}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array),s=St(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array),s=St(s,this.array),r=St(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fc&&(e.usage=this.usage),e}};var mo=class extends en{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var go=class extends en{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var nt=class extends en{constructor(e,t,n){super(new Float32Array(e),t,n)}},Uv=0,ii=new Le,Yu=new kt,Yr=new P,qn=new En,Ja=new En,dn=new P,Nt=class i extends Ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Uv++}),this.uuid=yi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(kd(e)?go:mo)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ye().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ii.makeRotationFromQuaternion(e),this.applyMatrix4(ii),this}rotateX(e){return ii.makeRotationX(e),this.applyMatrix4(ii),this}rotateY(e){return ii.makeRotationY(e),this.applyMatrix4(ii),this}rotateZ(e){return ii.makeRotationZ(e),this.applyMatrix4(ii),this}translate(e,t,n){return ii.makeTranslation(e,t,n),this.applyMatrix4(ii),this}scale(e,t,n){return ii.makeScale(e,t,n),this.applyMatrix4(ii),this}lookAt(e){return Yu.lookAt(e),Yu.updateMatrix(),this.applyMatrix4(Yu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yr).negate(),this.translate(Yr.x,Yr.y,Yr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new nt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new En);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];qn.setFromBufferAttribute(r),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,qn.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,qn.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint(qn.min),this.boundingBox.expandByPoint(qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let n=this.boundingSphere.center;if(qn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Ja.setFromBufferAttribute(o),this.morphTargetsRelative?(dn.addVectors(qn.min,Ja.min),qn.expandByPoint(dn),dn.addVectors(qn.max,Ja.max),qn.expandByPoint(dn)):(qn.expandByPoint(Ja.min),qn.expandByPoint(Ja.max))}qn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)dn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(dn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)dn.fromBufferAttribute(o,l),c&&(Yr.fromBufferAttribute(e,l),dn.add(Yr)),s=Math.max(s,n.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new en(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let C=0;C<n.count;C++)o[C]=new P,c[C]=new P;let l=new P,u=new P,h=new P,d=new ne,f=new ne,g=new ne,b=new P,m=new P;function p(C,M,S){l.fromBufferAttribute(n,C),u.fromBufferAttribute(n,M),h.fromBufferAttribute(n,S),d.fromBufferAttribute(r,C),f.fromBufferAttribute(r,M),g.fromBufferAttribute(r,S),u.sub(l),h.sub(l),f.sub(d),g.sub(d);let I=1/(f.x*g.y-g.x*f.y);isFinite(I)&&(b.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(I),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(I),o[C].add(b),o[M].add(b),o[S].add(b),c[C].add(m),c[M].add(m),c[S].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let C=0,M=x.length;C<M;++C){let S=x[C],I=S.start,D=S.count;for(let k=I,W=I+D;k<W;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let _=new P,v=new P,y=new P,T=new P;function w(C){y.fromBufferAttribute(s,C),T.copy(y);let M=o[C];_.copy(M),_.sub(y.multiplyScalar(y.dot(M))).normalize(),v.crossVectors(T,M);let I=v.dot(c[C])<0?-1:1;a.setXYZW(C,_.x,_.y,_.z,I)}for(let C=0,M=x.length;C<M;++C){let S=x[C],I=S.start,D=S.count;for(let k=I,W=I+D;k<W;k+=3)w(e.getX(k+0)),w(e.getX(k+1)),w(e.getX(k+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new en(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new P,r=new P,a=new P,o=new P,c=new P,l=new P,u=new P,h=new P;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),b=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,b),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,b),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(b,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)dn.fromBufferAttribute(e,t),dn.normalize(),e.setXYZ(t,dn.x,dn.y,dn.z)}toNonIndexed(){function e(o,c){let l=o.array,u=o.itemSize,h=o.normalized,d=new l.constructor(c.length*u),f=0,g=0;for(let b=0,m=c.length;b<m;b++){o.isInterleavedBufferAttribute?f=c[b]*o.data.stride+o.offset:f=c[b]*u;for(let p=0;p<u;p++)d[g++]=l[f++]}return new en(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let u=0,h=l.length;u<h;u++){let d=l[u],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){let f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(t))}let r=e.morphAttributes;for(let l in r){let u=[],h=r[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,u=a.length;l<u;l++){let h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},om=new Le,Ys=new Qi,jl=new Hn,lm=new P,Xl=new P,ql=new P,Yl=new P,Ku=new P,Kl=new P,cm=new P,$l=new P,ct=class extends kt{constructor(e=new Nt,t=new tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Kl.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=o[c],h=r[c];u!==0&&(Ku.fromBufferAttribute(h,e),a?Kl.addScaledVector(Ku,u):Kl.addScaledVector(Ku.sub(t),u))}t.add(Kl)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),jl.copy(n.boundingSphere),jl.applyMatrix4(r),Ys.copy(e.ray).recast(e.near),!(jl.containsPoint(Ys.origin)===!1&&(Ys.intersectSphere(jl,lm)===null||Ys.origin.distanceToSquared(lm)>(e.far-e.near)**2))&&(om.copy(r).invert(),Ys.copy(e.ray).applyMatrix4(om),!(n.boundingBox!==null&&Ys.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ys)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,b=d.length;g<b;g++){let m=d[g],p=a[m.materialIndex],x=Math.max(m.start,f.start),_=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=x,y=_;v<y;v+=3){let T=o.getX(v),w=o.getX(v+1),C=o.getX(v+2);s=Zl(this,p,e,n,l,u,h,T,w,C),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),b=Math.min(o.count,f.start+f.count);for(let m=g,p=b;m<p;m+=3){let x=o.getX(m),_=o.getX(m+1),v=o.getX(m+2);s=Zl(this,a,e,n,l,u,h,x,_,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,b=d.length;g<b;g++){let m=d[g],p=a[m.materialIndex],x=Math.max(m.start,f.start),_=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let v=x,y=_;v<y;v+=3){let T=v,w=v+1,C=v+2;s=Zl(this,p,e,n,l,u,h,T,w,C),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),b=Math.min(c.count,f.start+f.count);for(let m=g,p=b;m<p;m+=3){let x=m,_=m+1,v=m+2;s=Zl(this,a,e,n,l,u,h,x,_,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function kv(i,e,t,n,s,r,a,o){let c;if(e.side===Nn?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===Yn,o),c===null)return null;$l.copy(o),$l.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo($l);return l<t.near||l>t.far?null:{distance:l,point:$l.clone(),object:i}}function Zl(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,Xl),i.getVertexPosition(c,ql),i.getVertexPosition(l,Yl);let u=kv(i,e,t,n,Xl,ql,Yl,cm);if(u){let h=new P;Zi.getBarycoord(cm,Xl,ql,Yl,h),s&&(u.uv=Zi.getInterpolatedAttribute(s,o,c,l,h,new ne)),r&&(u.uv1=Zi.getInterpolatedAttribute(r,o,c,l,h,new ne)),a&&(u.normal=Zi.getInterpolatedAttribute(a,o,c,l,h,new P),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new P,materialIndex:0};Zi.getNormal(Xl,ql,Yl,d.normal),u.face=d,u.barycoord=h}return u}var Ms=class i extends Nt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],u=[],h=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new nt(l,3)),this.setAttribute("normal",new nt(u,3)),this.setAttribute("uv",new nt(h,2));function g(b,m,p,x,_,v,y,T,w,C,M){let S=v/w,I=y/C,D=v/2,k=y/2,W=T/2,B=w+1,G=C+1,Z=0,O=0,j=new P;for(let Q=0;Q<G;Q++){let re=Q*I-k;for(let ge=0;ge<B;ge++){let He=ge*S-D;j[b]=He*x,j[m]=re*_,j[p]=W,l.push(j.x,j.y,j.z),j[b]=0,j[m]=0,j[p]=T>0?1:-1,u.push(j.x,j.y,j.z),h.push(ge/w),h.push(1-Q/C),Z+=1}}for(let Q=0;Q<C;Q++)for(let re=0;re<w;re++){let ge=d+re+B*Q,He=d+re+B*(Q+1),ke=d+(re+1)+B*(Q+1),we=d+(re+1)+B*Q;c.push(ge,He,we),c.push(He,ke,we),O+=6}o.addGroup(f,O,M),f+=O,d+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function gr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Rn(i){let e={};for(let t=0;t<i.length;t++){let n=gr(i[t]);for(let s in n)e[s]=n[s]}return e}function Nv(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Nd(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}var xn={clone:gr,merge:Rn},Fv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ov=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Et=class extends An{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fv,this.fragmentShader=Ov,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gr(e.uniforms),this.uniformsGroups=Nv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},bo=class extends kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Le,this.projectionMatrix=new Le,this.projectionMatrixInverse=new Le,this.coordinateSystem=_i,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ss=new P,hm=new ne,um=new ne,Qt=class extends bo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=tr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ao*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return tr*2*Math.atan(Math.tan(ao*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ss.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ss.x,Ss.y).multiplyScalar(-e/Ss.z),Ss.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ss.x,Ss.y).multiplyScalar(-e/Ss.z)}getViewSize(e,t){return this.getViewBounds(e,hm,um),t.subVectors(um,hm)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ao*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Kr=-90,$r=1,bc=class extends kt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Qt(Kr,$r,e,t);s.layers=this.layers,this.add(s);let r=new Qt(Kr,$r,e,t);r.layers=this.layers,this.add(r);let a=new Qt(Kr,$r,e,t);a.layers=this.layers,this.add(a);let o=new Qt(Kr,$r,e,t);o.layers=this.layers,this.add(o);let c=new Qt(Kr,$r,e,t);c.layers=this.layers,this.add(c);let l=new Qt(Kr,$r,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===_i)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===uo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},vo=class extends an{constructor(e=[],t=fr,n,s,r,a,o,c,l,u){super(e,t,n,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},vc=class extends Xt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new vo(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ms(5,5,5),r=new Et({name:"CubemapFromEquirect",uniforms:gr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Nn,blending:$t});r.uniforms.tEquirect.value=t;let a=new ct(s,r),o=t.minFilter;return t.minFilter===Si&&(t.minFilter=Un),new bc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Kt=class extends kt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Bv={type:"move"},ca=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let b of e.hand.values()){let m=t.getJointPose(b,n),p=this._getHandJoint(l,b);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Bv)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Kt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},xo=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new xe(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var _o=class extends kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kn,this.environmentIntensity=1,this.environmentRotation=new kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},nr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=fc,this.updateRanges=[],this.version=0,this.uuid=yi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ln=new P,ws=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ln.fromBufferAttribute(this,t),Ln.applyMatrix4(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ln.fromBufferAttribute(this,t),Ln.applyNormalMatrix(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ln.fromBufferAttribute(this,t),Ln.transformDirection(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=xi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=St(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=xi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=xi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=xi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=xi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),n=St(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),n=St(n,this.array),s=St(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),n=St(n,this.array),s=St(s,this.array),r=St(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new en(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ha=class extends An{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Zr,Qa=new P,Jr=new P,Qr=new P,ea=new ne,eo=new ne,ug=new Le,Jl=new P,to=new P,Ql=new P,dm=new ne,$u=new ne,fm=new ne,yo=class extends kt{constructor(e=new ha){if(super(),this.isSprite=!0,this.type="Sprite",Zr===void 0){Zr=new Nt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new nr(t,5);Zr.setIndex([0,1,2,0,2,3]),Zr.setAttribute("position",new ws(n,3,0,!1)),Zr.setAttribute("uv",new ws(n,2,3,!1))}this.geometry=Zr,this.material=e,this.center=new ne(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Jr.setFromMatrixScale(this.matrixWorld),ug.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Qr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Jr.multiplyScalar(-Qr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;ec(Jl.set(-.5,-.5,0),Qr,a,Jr,s,r),ec(to.set(.5,-.5,0),Qr,a,Jr,s,r),ec(Ql.set(.5,.5,0),Qr,a,Jr,s,r),dm.set(0,0),$u.set(1,0),fm.set(1,1);let o=e.ray.intersectTriangle(Jl,to,Ql,!1,Qa);if(o===null&&(ec(to.set(-.5,.5,0),Qr,a,Jr,s,r),$u.set(0,1),o=e.ray.intersectTriangle(Jl,Ql,to,!1,Qa),o===null))return;let c=e.ray.origin.distanceTo(Qa);c<e.near||c>e.far||t.push({distance:c,point:Qa.clone(),uv:Zi.getInterpolation(Qa,Jl,to,Ql,dm,$u,fm,new ne),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function ec(i,e,t,n,s,r){ea.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(eo.x=r*ea.x-s*ea.y,eo.y=s*ea.x+r*ea.y):eo.copy(ea),i.copy(e),i.x+=eo.x,i.y+=eo.y,i.applyMatrix4(ug)}var pm=new P,mm=new pt,gm=new pt,zv=new P,bm=new Le,tc=new P,Zu=new Hn,vm=new Le,Ju=new Qi,So=class extends ct{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=od,this.bindMatrix=new Le,this.bindMatrixInverse=new Le,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new En),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,tc),this.boundingBox.expandByPoint(tc)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Hn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,tc),this.boundingSphere.expandByPoint(tc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Zu.copy(this.boundingSphere),Zu.applyMatrix4(s),e.ray.intersectsSphere(Zu)!==!1&&(vm.copy(s).invert(),Ju.copy(e.ray).applyMatrix4(vm),!(this.boundingBox!==null&&Ju.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ju)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new pt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===od?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Zm?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;mm.fromBufferAttribute(s.attributes.skinIndex,e),gm.fromBufferAttribute(s.attributes.skinWeight,e),pm.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=gm.getComponent(r);if(a!==0){let o=mm.getComponent(r);bm.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(zv.copy(pm).applyMatrix4(bm),a)}}return t.applyMatrix4(this.bindMatrixInverse)}},ua=class extends kt{constructor(){super(),this.isBone=!0,this.type="Bone"}},es=class extends an{constructor(e=null,t=1,n=1,s,r,a,o,c,l=jt,u=jt,h,d){super(null,a,o,c,l,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},xm=new Le,Hv=new Le,Mo=class i{constructor(e=[],t=[]){this.uuid=yi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Le)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Le;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:Hv;xm.multiplyMatrices(o,t[r]),xm.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new es(t,e,e,Fn,li);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new ua),this.bones.push(a),this.boneInverses.push(new Le().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},Ts=class extends en{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ta=new Le,_m=new Le,nc=[],ym=new En,Vv=new Le,no=new ct,io=new Hn,wo=class extends ct{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ts(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Vv)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new En),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ta),ym.copy(e.boundingBox).applyMatrix4(ta),this.boundingBox.union(ym)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Hn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ta),io.copy(e.boundingSphere).applyMatrix4(ta),this.boundingSphere.union(io)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(no.geometry=this.geometry,no.material=this.material,no.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),io.copy(this.boundingSphere),io.applyMatrix4(n),e.ray.intersectsSphere(io)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ta),_m.multiplyMatrices(n,ta),no.matrixWorld=_m,no.raycast(e,nc);for(let a=0,o=nc.length;a<o;a++){let c=nc[a];c.instanceId=r,c.object=this,t.push(c)}nc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ts(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new es(new Float32Array(s*this.count),s,this.count,ih,li));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Qu=new P,Gv=new P,Wv=new Ye,si=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Qu.subVectors(n,t).cross(Gv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Qu),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Wv.getNormalMatrix(e),s=this.coplanarPoint(Qu).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ks=new Hn,jv=new ne(.5,.5),ic=new P,da=class{constructor(e=new si,t=new si,n=new si,s=new si,r=new si,a=new si){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=_i,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],u=r[4],h=r[5],d=r[6],f=r[7],g=r[8],b=r[9],m=r[10],p=r[11],x=r[12],_=r[13],v=r[14],y=r[15];if(s[0].setComponents(l-a,f-u,p-g,y-x).normalize(),s[1].setComponents(l+a,f+u,p+g,y+x).normalize(),s[2].setComponents(l+o,f+h,p+b,y+_).normalize(),s[3].setComponents(l-o,f-h,p-b,y-_).normalize(),n)s[4].setComponents(c,d,m,v).normalize(),s[5].setComponents(l-c,f-d,p-m,y-v).normalize();else if(s[4].setComponents(l-c,f-d,p-m,y-v).normalize(),t===_i)s[5].setComponents(l+c,f+d,p+m,y+v).normalize();else if(t===uo)s[5].setComponents(c,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ks.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ks.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ks)}intersectsSprite(e){Ks.center.set(0,0,0);let t=jv.distanceTo(e.center);return Ks.radius=.7071067811865476+t,Ks.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ks)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ic.x=s.normal.x>0?e.max.x:e.min.x,ic.y=s.normal.y>0?e.max.y:e.min.y,ic.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ic)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var fa=class extends An{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},xc=new P,_c=new P,Sm=new Le,so=new Qi,sc=new Hn,ed=new P,Mm=new P,ir=class extends kt{constructor(e=new Nt,t=new fa){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)xc.fromBufferAttribute(t,s-1),_c.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=xc.distanceTo(_c);e.setAttribute("lineDistance",new nt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),sc.copy(n.boundingSphere),sc.applyMatrix4(s),sc.radius+=r,e.ray.intersectsSphere(sc)===!1)return;Sm.copy(s).invert(),so.copy(e.ray).applyMatrix4(Sm);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let b=f,m=g-1;b<m;b+=l){let p=u.getX(b),x=u.getX(b+1),_=rc(this,e,so,c,p,x,b);_&&t.push(_)}if(this.isLineLoop){let b=u.getX(g-1),m=u.getX(f),p=rc(this,e,so,c,b,m,g-1);p&&t.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let b=f,m=g-1;b<m;b+=l){let p=rc(this,e,so,c,b,b+1,b);p&&t.push(p)}if(this.isLineLoop){let b=rc(this,e,so,c,g-1,f,g-1);b&&t.push(b)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function rc(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(xc.fromBufferAttribute(o,s),_c.fromBufferAttribute(o,r),t.distanceSqToSegment(xc,_c,ed,Mm)>n)return;ed.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(ed);if(!(l<e.near||l>e.far))return{distance:l,point:Mm.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var wm=new P,Tm=new P,To=class extends ir{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)wm.fromBufferAttribute(t,s),Tm.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+wm.distanceTo(Tm);e.setAttribute("lineDistance",new nt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Eo=class extends ir{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Es=class extends An{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Em=new Le,dd=new Qi,ac=new Hn,oc=new P,sr=class extends kt{constructor(e=new Nt,t=new Es){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ac.copy(n.boundingSphere),ac.applyMatrix4(s),ac.radius+=r,e.ray.intersectsSphere(ac)===!1)return;Em.copy(s).invert(),dd.copy(e.ray).applyMatrix4(Em);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null){let d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=d,b=f;g<b;g++){let m=l.getX(g);oc.fromBufferAttribute(h,m),Am(oc,m,c,s,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let g=d,b=f;g<b;g++)oc.fromBufferAttribute(h,g),Am(oc,g,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Am(i,e,t,n,s,r,a){let o=dd.distanceSqToPoint(i);if(o<t){let c=new P;dd.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Ci=class extends an{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},rr=class extends an{constructor(e,t,n=Is,s,r,a,o=jt,c=jt,l,u=ra,h=1){if(u!==ra&&u!==Ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:h};super(d,s,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new la(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ao=class extends an{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ar=class i extends Nt{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],c=[],l=[],u=t/2,h=Math.PI/2*e,d=t,f=2*h+d,g=n*2+r,b=s+1,m=new P,p=new P;for(let x=0;x<=g;x++){let _=0,v=0,y=0,T=0;if(x<=n){let M=x/n,S=M*Math.PI/2;v=-u-e*Math.cos(S),y=e*Math.sin(S),T=-e*Math.cos(S),_=M*h}else if(x<=n+r){let M=(x-n)/r;v=-u+M*t,y=e,T=0,_=h+M*d}else{let M=(x-n-r)/n,S=M*Math.PI/2;v=u+e*Math.sin(S),y=e*Math.cos(S),T=e*Math.sin(S),_=h+d+M*h}let w=Math.max(0,Math.min(1,_/f)),C=0;x===0?C=.5/s:x===g&&(C=-.5/s);for(let M=0;M<=s;M++){let S=M/s,I=S*Math.PI*2,D=Math.sin(I),k=Math.cos(I);p.x=-y*k,p.y=v,p.z=y*D,o.push(p.x,p.y,p.z),m.set(-y*k,T,y*D),m.normalize(),c.push(m.x,m.y,m.z),l.push(S+C,w)}if(x>0){let M=(x-1)*b;for(let S=0;S<s;S++){let I=M+S,D=M+S+1,k=x*b+S,W=x*b+S+1;a.push(I,D,k),a.push(D,W,k)}}}this.setIndex(a),this.setAttribute("position",new nt(o,3)),this.setAttribute("normal",new nt(c,3)),this.setAttribute("uv",new nt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}};var ts=class i extends Nt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],d=[],f=[],g=0,b=[],m=n/2,p=0;x(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new nt(h,3)),this.setAttribute("normal",new nt(d,3)),this.setAttribute("uv",new nt(f,2));function x(){let v=new P,y=new P,T=0,w=(t-e)/n;for(let C=0;C<=r;C++){let M=[],S=C/r,I=S*(t-e)+e;for(let D=0;D<=s;D++){let k=D/s,W=k*c+o,B=Math.sin(W),G=Math.cos(W);y.x=I*B,y.y=-S*n+m,y.z=I*G,h.push(y.x,y.y,y.z),v.set(B,w,G).normalize(),d.push(v.x,v.y,v.z),f.push(k,1-S),M.push(g++)}b.push(M)}for(let C=0;C<s;C++)for(let M=0;M<r;M++){let S=b[M][C],I=b[M+1][C],D=b[M+1][C+1],k=b[M][C+1];(e>0||M!==0)&&(u.push(S,I,k),T+=3),(t>0||M!==r-1)&&(u.push(I,D,k),T+=3)}l.addGroup(p,T,0),p+=T}function _(v){let y=g,T=new ne,w=new P,C=0,M=v===!0?e:t,S=v===!0?1:-1;for(let D=1;D<=s;D++)h.push(0,m*S,0),d.push(0,S,0),f.push(.5,.5),g++;let I=g;for(let D=0;D<=s;D++){let W=D/s*c+o,B=Math.cos(W),G=Math.sin(W);w.x=M*G,w.y=m*S,w.z=M*B,h.push(w.x,w.y,w.z),d.push(0,S,0),T.x=B*.5+.5,T.y=G*.5*S+.5,f.push(T.x,T.y),g++}for(let D=0;D<s;D++){let k=y+D,W=I+D;v===!0?u.push(W,W+1,k):u.push(W+1,W,k),C+=3}l.addGroup(p,C,v===!0?1:2),p+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},or=class i extends ts{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},pa=class i extends Nt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),l(n),u(),this.setAttribute("position",new nt(r,3)),this.setAttribute("normal",new nt(r.slice(),3)),this.setAttribute("uv",new nt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(x){let _=new P,v=new P,y=new P;for(let T=0;T<t.length;T+=3)f(t[T+0],_),f(t[T+1],v),f(t[T+2],y),c(_,v,y,x)}function c(x,_,v,y){let T=y+1,w=[];for(let C=0;C<=T;C++){w[C]=[];let M=x.clone().lerp(v,C/T),S=_.clone().lerp(v,C/T),I=T-C;for(let D=0;D<=I;D++)D===0&&C===T?w[C][D]=M:w[C][D]=M.clone().lerp(S,D/I)}for(let C=0;C<T;C++)for(let M=0;M<2*(T-C)-1;M++){let S=Math.floor(M/2);M%2===0?(d(w[C][S+1]),d(w[C+1][S]),d(w[C][S])):(d(w[C][S+1]),d(w[C+1][S+1]),d(w[C+1][S]))}}function l(x){let _=new P;for(let v=0;v<r.length;v+=3)_.x=r[v+0],_.y=r[v+1],_.z=r[v+2],_.normalize().multiplyScalar(x),r[v+0]=_.x,r[v+1]=_.y,r[v+2]=_.z}function u(){let x=new P;for(let _=0;_<r.length;_+=3){x.x=r[_+0],x.y=r[_+1],x.z=r[_+2];let v=m(x)/2/Math.PI+.5,y=p(x)/Math.PI+.5;a.push(v,1-y)}g(),h()}function h(){for(let x=0;x<a.length;x+=6){let _=a[x+0],v=a[x+2],y=a[x+4],T=Math.max(_,v,y),w=Math.min(_,v,y);T>.9&&w<.1&&(_<.2&&(a[x+0]+=1),v<.2&&(a[x+2]+=1),y<.2&&(a[x+4]+=1))}}function d(x){r.push(x.x,x.y,x.z)}function f(x,_){let v=x*3;_.x=e[v+0],_.y=e[v+1],_.z=e[v+2]}function g(){let x=new P,_=new P,v=new P,y=new P,T=new ne,w=new ne,C=new ne;for(let M=0,S=0;M<r.length;M+=9,S+=6){x.set(r[M+0],r[M+1],r[M+2]),_.set(r[M+3],r[M+4],r[M+5]),v.set(r[M+6],r[M+7],r[M+8]),T.set(a[S+0],a[S+1]),w.set(a[S+2],a[S+3]),C.set(a[S+4],a[S+5]),y.copy(x).add(_).add(v).divideScalar(3);let I=m(y);b(T,S+0,x,I),b(w,S+2,_,I),b(C,S+4,v,I)}}function b(x,_,v,y){y<0&&x.x===1&&(a[_]=x.x-1),v.x===0&&v.z===0&&(a[_]=y/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},Co=class i extends pa{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var ri=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let u=n[s],d=n[s+1]-u,f=(a-u)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new ne:new P);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new P,s=[],r=[],a=[],o=new P,c=new Le;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new P)}r[0]=new P,a[0]=new P;let l=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Ze(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Ze(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ro=class extends ri{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new ne){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*u-f*h+this.aX,l=d*h+f*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},yc=class extends Ro{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Fd(){let i=0,e=0,t=0,n=0;function s(r,a,o,c){i=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,u,h){let d=(a-r)/l-(o-r)/(l+u)+(o-a)/u,f=(o-a)/u-(c-a)/(u+h)+(c-o)/h;d*=u,f*=u,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var lc=new P,td=new Fd,nd=new Fd,id=new Fd,As=class extends ri{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new P){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,u;this.closed||o>0?l=s[(o-1)%r]:(lc.subVectors(s[0],s[1]).add(s[0]),l=lc);let h=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(lc.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=lc),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(h),f),b=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);b<1e-4&&(b=1),g<1e-4&&(g=b),m<1e-4&&(m=b),td.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,g,b,m),nd.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,g,b,m),id.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,g,b,m)}else this.curveType==="catmullrom"&&(td.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),nd.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),id.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return n.set(td.calc(c),nd.calc(c),id.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Cm(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,c=i*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*i+t}function Xv(i,e){let t=1-i;return t*t*e}function qv(i,e){return 2*(1-i)*i*e}function Yv(i,e){return i*i*e}function lo(i,e,t,n){return Xv(i,e)+qv(i,t)+Yv(i,n)}function Kv(i,e){let t=1-i;return t*t*t*e}function $v(i,e){let t=1-i;return 3*t*t*i*e}function Zv(i,e){return 3*(1-i)*i*i*e}function Jv(i,e){return i*i*i*e}function co(i,e,t,n,s){return Kv(i,e)+$v(i,t)+Zv(i,n)+Jv(i,s)}var Sc=class extends ri{constructor(e=new ne,t=new ne,n=new ne,s=new ne){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ne){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(co(e,s.x,r.x,a.x,o.x),co(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Mc=class extends ri{constructor(e=new P,t=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new P){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(co(e,s.x,r.x,a.x,o.x),co(e,s.y,r.y,a.y,o.y),co(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},wc=class extends ri{constructor(e=new ne,t=new ne){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ne){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ne){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Tc=class extends ri{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ec=class extends ri{constructor(e=new ne,t=new ne,n=new ne){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ne){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(lo(e,s.x,r.x,a.x),lo(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Po=class extends ri{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(lo(e,s.x,r.x,a.x),lo(e,s.y,r.y,a.y),lo(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ac=class extends ri{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ne){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],u=s[a>s.length-2?s.length-1:a+1],h=s[a>s.length-3?s.length-1:a+2];return n.set(Cm(o,c.x,l.x,u.x,h.x),Cm(o,c.y,l.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ne().fromArray(s))}return this}},Qv=Object.freeze({__proto__:null,ArcCurve:yc,CatmullRomCurve3:As,CubicBezierCurve:Sc,CubicBezierCurve3:Mc,EllipseCurve:Ro,LineCurve:wc,LineCurve3:Tc,QuadraticBezierCurve:Ec,QuadraticBezierCurve3:Po,SplineCurve:Ac});var lr=class i extends pa{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},ma=class i extends Nt{constructor(e=[new ne(0,-.5),new ne(.5,0),new ne(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Ze(s,0,Math.PI*2);let r=[],a=[],o=[],c=[],l=[],u=1/t,h=new P,d=new ne,f=new P,g=new P,b=new P,m=0,p=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:m=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,f.x=p*1,f.y=-m,f.z=p*0,b.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(b.x,b.y,b.z);break;default:m=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=b.x,f.y+=b.y,f.z+=b.z,f.normalize(),c.push(f.x,f.y,f.z),b.copy(g)}for(let x=0;x<=t;x++){let _=n+x*u*s,v=Math.sin(_),y=Math.cos(_);for(let T=0;T<=e.length-1;T++){h.x=e[T].x*v,h.y=e[T].y,h.z=e[T].x*y,a.push(h.x,h.y,h.z),d.x=x/t,d.y=T/(e.length-1),o.push(d.x,d.y);let w=c[3*T+0]*v,C=c[3*T+1],M=c[3*T+0]*y;l.push(w,C,M)}}for(let x=0;x<t;x++)for(let _=0;_<e.length-1;_++){let v=_+x*e.length,y=v,T=v+e.length,w=v+e.length+1,C=v+1;r.push(y,T,C),r.push(w,C,T)}this.setIndex(r),this.setAttribute("position",new nt(a,3)),this.setAttribute("uv",new nt(o,2)),this.setAttribute("normal",new nt(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},ga=class i extends pa{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},ai=class i extends Nt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,u=c+1,h=e/o,d=t/c,f=[],g=[],b=[],m=[];for(let p=0;p<u;p++){let x=p*d-a;for(let _=0;_<l;_++){let v=_*h-r;g.push(v,-x,0),b.push(0,0,1),m.push(_/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<o;x++){let _=x+l*p,v=x+l*(p+1),y=x+1+l*(p+1),T=x+1+l*p;f.push(_,v,T),f.push(v,y,T)}this.setIndex(f),this.setAttribute("position",new nt(g,3)),this.setAttribute("normal",new nt(b,3)),this.setAttribute("uv",new nt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var oi=class i extends Nt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,u=[],h=new P,d=new P,f=[],g=[],b=[],m=[];for(let p=0;p<=n;p++){let x=[],_=p/n,v=0;p===0&&a===0?v=.5/t:p===n&&c===Math.PI&&(v=-.5/t);for(let y=0;y<=t;y++){let T=y/t;h.x=-e*Math.cos(s+T*r)*Math.sin(a+_*o),h.y=e*Math.cos(a+_*o),h.z=e*Math.sin(s+T*r)*Math.sin(a+_*o),g.push(h.x,h.y,h.z),d.copy(h).normalize(),b.push(d.x,d.y,d.z),m.push(T+v,1-_),x.push(l++)}u.push(x)}for(let p=0;p<n;p++)for(let x=0;x<t;x++){let _=u[p][x+1],v=u[p][x],y=u[p+1][x],T=u[p+1][x+1];(p!==0||a>0)&&f.push(_,v,T),(p!==n-1||c<Math.PI)&&f.push(v,y,T)}this.setIndex(f),this.setAttribute("position",new nt(g,3)),this.setAttribute("normal",new nt(b,3)),this.setAttribute("uv",new nt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ns=class i extends Nt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],c=[],l=[],u=new P,h=new P,d=new P;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){let b=g/s*r,m=f/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(b),h.y=(e+t*Math.cos(m))*Math.sin(b),h.z=t*Math.sin(m),o.push(h.x,h.y,h.z),u.x=e*Math.cos(b),u.y=e*Math.sin(b),d.subVectors(h,u).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){let b=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,x=(s+1)*f+g;a.push(b,m,x),a.push(m,p,x)}this.setIndex(a),this.setAttribute("position",new nt(o,3)),this.setAttribute("normal",new nt(c,3)),this.setAttribute("uv",new nt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var cr=class i extends Nt{constructor(e=new Po(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new P,c=new P,l=new ne,u=new P,h=[],d=[],f=[],g=[];b(),this.setIndex(g),this.setAttribute("position",new nt(h,3)),this.setAttribute("normal",new nt(d,3)),this.setAttribute("uv",new nt(f,2));function b(){for(let _=0;_<t;_++)m(_);m(r===!1?t:0),x(),p()}function m(_){u=e.getPointAt(_/t,u);let v=a.normals[_],y=a.binormals[_];for(let T=0;T<=s;T++){let w=T/s*Math.PI*2,C=Math.sin(w),M=-Math.cos(w);c.x=M*v.x+C*y.x,c.y=M*v.y+C*y.y,c.z=M*v.z+C*y.z,c.normalize(),d.push(c.x,c.y,c.z),o.x=u.x+n*c.x,o.y=u.y+n*c.y,o.z=u.z+n*c.z,h.push(o.x,o.y,o.z)}}function p(){for(let _=1;_<=t;_++)for(let v=1;v<=s;v++){let y=(s+1)*(_-1)+(v-1),T=(s+1)*_+(v-1),w=(s+1)*_+v,C=(s+1)*(_-1)+v;g.push(y,T,C),g.push(T,w,C)}}function x(){for(let _=0;_<=t;_++)for(let v=0;v<=s;v++)l.x=_/t,l.y=v/s,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Qv[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var Io=class extends Et{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},$n=class extends An{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nh,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},vn=class extends $n{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ne(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ze(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new xe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new xe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new xe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Do=class extends An{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nh,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};var ba=class extends An{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Cc=class extends An{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function cc(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function ex(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function tx(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Rm(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let c=0;c!==e;++c)s[a++]=i[o+c]}return s}function dg(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}var is=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Rc=class extends is{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ld,endingEnd:ld}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case cd:r=e,o=2*t-n;break;case hd:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case cd:a=e,c=2*n-t;break;case hd:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),b=g*g,m=b*g,p=-d*m+2*d*b-d*g,x=(1+d)*m+(-1.5-2*d)*b+(-.5+d)*g+1,_=(-1-f)*m+(1.5+f)*b+.5*g,v=f*m-f*b;for(let y=0;y!==o;++y)r[y]=p*a[u+y]+x*a[l+y]+_*a[c+y]+v*a[h+y];return r}},Pc=class extends is{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(n-t)/(s-t),h=1-u;for(let d=0;d!==o;++d)r[d]=a[l+d]*h+a[c+d]*u;return r}},Ic=class extends is{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Vn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=cc(t,this.TimeBufferType),this.values=cc(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:cc(e.times,Array),values:cc(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ic(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Pc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Rc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Qs:t=this.InterpolantFactoryMethodDiscrete;break;case er:t=this.InterpolantFactoryMethodLinear;break;case hc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qs;case this.InterpolantFactoryMethodLinear:return er;case this.InterpolantFactoryMethodSmooth:return hc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&ex(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===hc,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(s)c=!0;else{let h=o*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){let b=t[h+g];if(b!==t[d+g]||b!==t[f+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let h=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Vn.prototype.ValueTypeName="";Vn.prototype.TimeBufferType=Float32Array;Vn.prototype.ValueBufferType=Float32Array;Vn.prototype.DefaultInterpolation=er;var ss=class extends Vn{constructor(e,t,n){super(e,t,n)}};ss.prototype.ValueTypeName="bool";ss.prototype.ValueBufferType=Array;ss.prototype.DefaultInterpolation=Qs;ss.prototype.InterpolantFactoryMethodLinear=void 0;ss.prototype.InterpolantFactoryMethodSmooth=void 0;var Lo=class extends Vn{constructor(e,t,n,s){super(e,t,n,s)}};Lo.prototype.ValueTypeName="color";var Ri=class extends Vn{constructor(e,t,n,s){super(e,t,n,s)}};Ri.prototype.ValueTypeName="number";var Dc=class extends is{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let u=l+o;l!==u;l+=4)Ut.slerpFlat(r,0,a,l-o,a,l,c);return r}},Pi=class extends Vn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Dc(this.times,this.values,this.getValueSize(),e)}};Pi.prototype.ValueTypeName="quaternion";Pi.prototype.InterpolantFactoryMethodSmooth=void 0;var rs=class extends Vn{constructor(e,t,n){super(e,t,n)}};rs.prototype.ValueTypeName="string";rs.prototype.ValueBufferType=Array;rs.prototype.DefaultInterpolation=Qs;rs.prototype.InterpolantFactoryMethodLinear=void 0;rs.prototype.InterpolantFactoryMethodSmooth=void 0;var Ii=class extends Vn{constructor(e,t,n,s){super(e,t,n,s)}};Ii.prototype.ValueTypeName="vector";var Uo=class{constructor(e="",t=-1,n=[],s=Jm){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=yi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(ix(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(Vn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let u=tx(c);c=Rm(c,1,u),l=Rm(l,1,u),!s&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new Ri(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],u=l.name.match(r);if(u&&u.length>1){let h=u[1],d=s[h];d||(s[h]=d=[]),d.push(l)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,d,f,g,b){if(f.length!==0){let m=[],p=[];dg(f,m,p,g),m.length!==0&&b.push(new h(d,m,p))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let h=0;h<l.length;h++){let d=l[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let b=0;b<d[g].morphTargets.length;b++)f[d[g].morphTargets[b]]=-1;for(let b in f){let m=[],p=[];for(let x=0;x!==d[g].morphTargets.length;++x){let _=d[g];m.push(_.time),p.push(_.morphTarget===b?1:0)}s.push(new Ri(".morphTargetInfluence["+b+"]",m,p))}c=f.length*a}else{let f=".bones["+t[h].name+"]";n(Ii,f+".position",d,"pos",s),n(Pi,f+".quaternion",d,"rot",s),n(Ii,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,c,s,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function nx(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ri;case"vector":case"vector2":case"vector3":case"vector4":return Ii;case"color":return Lo;case"quaternion":return Pi;case"bool":case"boolean":return ss;case"string":return rs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function ix(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=nx(i.type);if(i.times===void 0){let t=[],n=[];dg(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var Ei={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Lc=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){let f=l[h],g=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},fg=new Lc,Di=class{constructor(e){this.manager=e!==void 0?e:fg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Di.DEFAULT_MATERIAL_NAME="__DEFAULT";var $i={},fd=class extends Error{constructor(e,t){super(e),this.response=t}},va=class extends Di{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Ei.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if($i[e]!==void 0){$i[e].push({onLoad:t,onProgress:n,onError:s});return}$i[e]=[],$i[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let u=$i[e],h=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0,b=0,m=new ReadableStream({start(p){x();function x(){h.read().then(({done:_,value:v})=>{if(_)p.close();else{b+=v.byteLength;let y=new ProgressEvent("progress",{lengthComputable:g,loaded:b,total:f});for(let T=0,w=u.length;T<w;T++){let C=u[T];C.onProgress&&C.onProgress(y)}p.enqueue(v),x()}},_=>{p.error(_)})}}});return new Response(m)}else throw new fd(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o==="")return l.text();{let h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{Ei.add(`file:${e}`,l);let u=$i[e];delete $i[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onLoad&&f.onLoad(l)}}).catch(l=>{let u=$i[e];if(u===void 0)throw this.manager.itemError(e),l;delete $i[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var na=new WeakMap,Uc=class extends Di{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Ei.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let h=na.get(a);h===void 0&&(h=[],na.set(a,h)),h.push({onLoad:t,onError:s})}return a}let o=aa("img");function c(){u(),t&&t(this);let h=na.get(this)||[];for(let d=0;d<h.length;d++){let f=h[d];f.onLoad&&f.onLoad(this)}na.delete(this),r.manager.itemEnd(e)}function l(h){u(),s&&s(h),Ei.remove(`image:${e}`);let d=na.get(this)||[];for(let f=0;f<d.length;f++){let g=d[f];g.onError&&g.onError(h)}na.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ei.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var ko=class extends Di{constructor(e){super(e)}load(e,t,n,s){let r=new an,a=new Uc(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},hr=class extends kt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},No=class extends hr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new xe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},sd=new Le,Pm=new P,Im=new P,Fo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ne(512,512),this.mapType=Zn,this.map=null,this.mapPass=null,this.matrix=new Le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new da,this._frameExtents=new ne(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Pm.setFromMatrixPosition(e.matrixWorld),t.position.copy(Pm),Im.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Im),t.updateMatrixWorld(),sd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sd,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(sd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},pd=class extends Fo{constructor(){super(new Qt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=tr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Oo=class extends hr{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new pd}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Dm=new Le,ro=new P,rd=new P,md=class extends Fo{constructor(){super(new Qt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ne(4,2),this._viewportCount=6,this._viewports=[new pt(2,1,1,1),new pt(0,1,1,1),new pt(3,1,1,1),new pt(1,1,1,1),new pt(3,0,1,1),new pt(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ro.setFromMatrixPosition(e.matrixWorld),n.position.copy(ro),rd.copy(n.position),rd.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(rd),n.updateMatrixWorld(),s.makeTranslation(-ro.x,-ro.y,-ro.z),Dm.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dm,n.coordinateSystem,n.reversedDepth)}},Cs=class extends hr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new md}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},as=class extends bo{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},gd=class extends Fo{constructor(){super(new as(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Li=class extends hr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.shadow=new gd}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var os=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var ad=new WeakMap,Bo=class extends Di{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Ei.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{if(ad.has(a)===!0)s&&s(ad.get(a)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(l),r.manager.itemEnd(e),l});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Ei.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),ad.set(c,l),Ei.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Ei.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var kc=class extends Qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},zo=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var Od="\\[\\]\\.:\\/",sx=new RegExp("["+Od+"]","g"),Bd="[^"+Od+"]",rx="[^"+Od.replace("\\.","")+"]",ax=/((?:WC+[\/:])*)/.source.replace("WC",Bd),ox=/(WCOD+)?/.source.replace("WCOD",rx),lx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Bd),cx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Bd),hx=new RegExp("^"+ax+ox+lx+cx+"$"),ux=["material","materials","bones","map"],bd=class{constructor(e,t,n){let s=n||Pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Pt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(sx,"")}static parseTrackName(e){let t=hx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);ux.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Pt.Composite=bd;Pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pt.prototype.GetterByBindingType=[Pt.prototype._getValue_direct,Pt.prototype._getValue_array,Pt.prototype._getValue_arrayElement,Pt.prototype._getValue_toArray];Pt.prototype.SetterByBindingTypeAndVersioning=[[Pt.prototype._setValue_direct,Pt.prototype._setValue_direct_setNeedsUpdate,Pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_array,Pt.prototype._setValue_array_setNeedsUpdate,Pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_arrayElement,Pt.prototype._setValue_arrayElement_setNeedsUpdate,Pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_fromArray,Pt.prototype._setValue_fromArray_setNeedsUpdate,Pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var qT=new Float32Array(1);var xa=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ze(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ze(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Ho=class extends Ai{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function zd(i,e,t,n){let s=dx(n);switch(t){case Cd:return i*e;case ih:return i*e/s.components*s.byteLength;case sh:return i*e/s.components*s.byteLength;case Pd:return i*e*2/s.components*s.byteLength;case rh:return i*e*2/s.components*s.byteLength;case Rd:return i*e*3/s.components*s.byteLength;case Fn:return i*e*4/s.components*s.byteLength;case ah:return i*e*4/s.components*s.byteLength;case jo:case Xo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case qo:case Yo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case lh:case hh:return Math.max(i,16)*Math.max(e,8)/4;case oh:case ch:return Math.max(i,8)*Math.max(e,8)/2;case uh:case dh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case fh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ph:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case mh:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case gh:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case bh:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case vh:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case xh:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case _h:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case yh:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Sh:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Mh:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case wh:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Th:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Eh:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ah:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ch:case Rh:case Ph:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ih:case Dh:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Lh:case Uh:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function dx(i){switch(i){case Zn:case wd:return{byteLength:1,components:1};case Sa:case Td:case on:return{byteLength:2,components:1};case th:case nh:return{byteLength:2,components:4};case Is:case eh:case li:return{byteLength:4,components:1};case Ed:case Ad:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Fg(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function px(i){let e=new WeakMap;function t(o,c){let l=o.array,u=o.usage,h=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){let u=c.array,h=c.updateRanges;if(i.bindBuffer(l,o),h.length===0)i.bufferSubData(l,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){let g=h[d],b=h[f];b.start<=g.start+g.count+1?g.count=Math.max(g.count,b.start+b.count-g.start):(++d,h[d]=b)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){let b=h[f];i.bufferSubData(l,b.start*u.BYTES_PER_ELEMENT,u,b.start,b.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var mx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gx=`#ifdef USE_ALPHAHASH
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
#endif`,bx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_x=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yx=`#ifdef USE_AOMAP
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
#endif`,Sx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mx=`#ifdef USE_BATCHING
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
#endif`,wx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Tx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ex=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ax=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Cx=`#ifdef USE_IRIDESCENCE
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
#endif`,Rx=`#ifdef USE_BUMPMAP
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
#endif`,Px=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ix=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Dx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ux=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Nx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Fx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ox=`#define PI 3.141592653589793
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
} // validated`,Bx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zx=`vec3 transformedNormal = objectNormal;
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
#endif`,Hx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qx=`#ifdef USE_ENVMAP
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
#endif`,Yx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Kx=`#ifdef USE_ENVMAP
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
#endif`,$x=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zx=`#ifdef USE_ENVMAP
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
#endif`,Jx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,e_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,t_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,n_=`#ifdef USE_GRADIENTMAP
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
}`,i_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,s_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,r_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,a_=`uniform bool receiveShadow;
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
#endif`,o_=`#ifdef USE_ENVMAP
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
#endif`,l_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,c_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,h_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,u_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,d_=`PhysicalMaterial material;
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
#endif`,f_=`struct PhysicalMaterial {
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
}`,p_=`
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
#endif`,m_=`#if defined( RE_IndirectDiffuse )
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
#endif`,g_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,b_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,v_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,x_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,__=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,y_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,S_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,M_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,w_=`#if defined( USE_POINTS_UV )
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
#endif`,T_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,E_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,A_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,C_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,R_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,P_=`#ifdef USE_MORPHTARGETS
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
#endif`,I_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,D_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,L_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,U_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,k_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,N_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,F_=`#ifdef USE_NORMALMAP
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
#endif`,O_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,B_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,z_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,H_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,V_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,G_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,W_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,j_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,X_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,q_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Y_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,K_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Z_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,J_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Q_=`float getShadowMask() {
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
}`,ey=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ty=`#ifdef USE_SKINNING
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
#endif`,ny=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,iy=`#ifdef USE_SKINNING
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
#endif`,sy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ry=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ay=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,oy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ly=`#ifdef USE_TRANSMISSION
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
#endif`,cy=`#ifdef USE_TRANSMISSION
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
#endif`,hy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,py=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,my=`uniform sampler2D t2D;
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
}`,gy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,by=`#ifdef ENVMAP_TYPE_CUBE
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
}`,vy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_y=`#include <common>
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
}`,yy=`#if DEPTH_PACKING == 3200
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
}`,Sy=`#define DISTANCE
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
}`,My=`#define DISTANCE
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
}`,wy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ty=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ey=`uniform float scale;
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
}`,Ay=`uniform vec3 diffuse;
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
}`,Cy=`#include <common>
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
}`,Ry=`uniform vec3 diffuse;
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
}`,Py=`#define LAMBERT
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
}`,Iy=`#define LAMBERT
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
}`,Dy=`#define MATCAP
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
}`,Ly=`#define MATCAP
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
}`,Uy=`#define NORMAL
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
}`,ky=`#define NORMAL
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
}`,Ny=`#define PHONG
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
}`,Fy=`#define PHONG
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
}`,Oy=`#define STANDARD
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
}`,By=`#define STANDARD
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
}`,zy=`#define TOON
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
}`,Hy=`#define TOON
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
}`,Vy=`uniform float size;
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
}`,Gy=`uniform vec3 diffuse;
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
}`,Wy=`#include <common>
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
}`,jy=`uniform vec3 color;
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
}`,Xy=`uniform float rotation;
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
}`,qy=`uniform vec3 diffuse;
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
}`,Qe={alphahash_fragment:mx,alphahash_pars_fragment:gx,alphamap_fragment:bx,alphamap_pars_fragment:vx,alphatest_fragment:xx,alphatest_pars_fragment:_x,aomap_fragment:yx,aomap_pars_fragment:Sx,batching_pars_vertex:Mx,batching_vertex:wx,begin_vertex:Tx,beginnormal_vertex:Ex,bsdfs:Ax,iridescence_fragment:Cx,bumpmap_pars_fragment:Rx,clipping_planes_fragment:Px,clipping_planes_pars_fragment:Ix,clipping_planes_pars_vertex:Dx,clipping_planes_vertex:Lx,color_fragment:Ux,color_pars_fragment:kx,color_pars_vertex:Nx,color_vertex:Fx,common:Ox,cube_uv_reflection_fragment:Bx,defaultnormal_vertex:zx,displacementmap_pars_vertex:Hx,displacementmap_vertex:Vx,emissivemap_fragment:Gx,emissivemap_pars_fragment:Wx,colorspace_fragment:jx,colorspace_pars_fragment:Xx,envmap_fragment:qx,envmap_common_pars_fragment:Yx,envmap_pars_fragment:Kx,envmap_pars_vertex:$x,envmap_physical_pars_fragment:o_,envmap_vertex:Zx,fog_vertex:Jx,fog_pars_vertex:Qx,fog_fragment:e_,fog_pars_fragment:t_,gradientmap_pars_fragment:n_,lightmap_pars_fragment:i_,lights_lambert_fragment:s_,lights_lambert_pars_fragment:r_,lights_pars_begin:a_,lights_toon_fragment:l_,lights_toon_pars_fragment:c_,lights_phong_fragment:h_,lights_phong_pars_fragment:u_,lights_physical_fragment:d_,lights_physical_pars_fragment:f_,lights_fragment_begin:p_,lights_fragment_maps:m_,lights_fragment_end:g_,logdepthbuf_fragment:b_,logdepthbuf_pars_fragment:v_,logdepthbuf_pars_vertex:x_,logdepthbuf_vertex:__,map_fragment:y_,map_pars_fragment:S_,map_particle_fragment:M_,map_particle_pars_fragment:w_,metalnessmap_fragment:T_,metalnessmap_pars_fragment:E_,morphinstance_vertex:A_,morphcolor_vertex:C_,morphnormal_vertex:R_,morphtarget_pars_vertex:P_,morphtarget_vertex:I_,normal_fragment_begin:D_,normal_fragment_maps:L_,normal_pars_fragment:U_,normal_pars_vertex:k_,normal_vertex:N_,normalmap_pars_fragment:F_,clearcoat_normal_fragment_begin:O_,clearcoat_normal_fragment_maps:B_,clearcoat_pars_fragment:z_,iridescence_pars_fragment:H_,opaque_fragment:V_,packing:G_,premultiplied_alpha_fragment:W_,project_vertex:j_,dithering_fragment:X_,dithering_pars_fragment:q_,roughnessmap_fragment:Y_,roughnessmap_pars_fragment:K_,shadowmap_pars_fragment:$_,shadowmap_pars_vertex:Z_,shadowmap_vertex:J_,shadowmask_pars_fragment:Q_,skinbase_vertex:ey,skinning_pars_vertex:ty,skinning_vertex:ny,skinnormal_vertex:iy,specularmap_fragment:sy,specularmap_pars_fragment:ry,tonemapping_fragment:ay,tonemapping_pars_fragment:oy,transmission_fragment:ly,transmission_pars_fragment:cy,uv_pars_fragment:hy,uv_pars_vertex:uy,uv_vertex:dy,worldpos_vertex:fy,background_vert:py,background_frag:my,backgroundCube_vert:gy,backgroundCube_frag:by,cube_vert:vy,cube_frag:xy,depth_vert:_y,depth_frag:yy,distanceRGBA_vert:Sy,distanceRGBA_frag:My,equirect_vert:wy,equirect_frag:Ty,linedashed_vert:Ey,linedashed_frag:Ay,meshbasic_vert:Cy,meshbasic_frag:Ry,meshlambert_vert:Py,meshlambert_frag:Iy,meshmatcap_vert:Dy,meshmatcap_frag:Ly,meshnormal_vert:Uy,meshnormal_frag:ky,meshphong_vert:Ny,meshphong_frag:Fy,meshphysical_vert:Oy,meshphysical_frag:By,meshtoon_vert:zy,meshtoon_frag:Hy,points_vert:Vy,points_frag:Gy,shadow_vert:Wy,shadow_frag:jy,sprite_vert:Xy,sprite_frag:qy},pe={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},ki={basic:{uniforms:Rn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:Rn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new xe(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:Rn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:Rn([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:Rn([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new xe(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:Rn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:Rn([pe.points,pe.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:Rn([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:Rn([pe.common,pe.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:Rn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:Rn([pe.sprite,pe.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:Rn([pe.common,pe.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:Rn([pe.lights,pe.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};ki.physical={uniforms:Rn([ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};var Fh={r:0,b:0,g:0},br=new kn,Yy=new Le;function Ky(i,e,t,n,s,r,a){let o=new xe(0),c=r===!0?0:1,l,u,h=null,d=0,f=null;function g(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?t:e).get(v)),v}function b(_){let v=!1,y=g(_);y===null?p(o,c):y&&y.isColor&&(p(y,1),v=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(_,v){let y=g(v);y&&(y.isCubeTexture||y.mapping===Wo)?(u===void 0&&(u=new ct(new Ms(1,1,1),new Et({name:"BackgroundCubeMaterial",uniforms:gr(ki.backgroundCube.uniforms),vertexShader:ki.backgroundCube.vertexShader,fragmentShader:ki.backgroundCube.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),br.copy(v.backgroundRotation),br.x*=-1,br.y*=-1,br.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(br.y*=-1,br.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Yy.makeRotationFromEuler(br)),u.material.toneMapped=st.getTransfer(y.colorSpace)!==mt,(h!==y||d!==y.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=y,d=y.version,f=i.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new ct(new ai(2,2),new Et({name:"BackgroundMaterial",uniforms:gr(ki.background.uniforms),vertexShader:ki.background.vertexShader,fragmentShader:ki.background.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=st.getTransfer(y.colorSpace)!==mt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,f=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function p(_,v){_.getRGB(Fh,Nd(i)),n.buffers.color.setClear(Fh.r,Fh.g,Fh.b,v,a)}function x(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,v=1){o.set(_),c=v,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,p(o,c)},render:b,addToRenderList:m,dispose:x}}function $y(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(S,I,D,k,W){let B=!1,G=h(k,D,I);r!==G&&(r=G,l(r.object)),B=f(S,k,D,W),B&&g(S,k,D,W),W!==null&&e.update(W,i.ELEMENT_ARRAY_BUFFER),(B||a)&&(a=!1,v(S,I,D,k),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function c(){return i.createVertexArray()}function l(S){return i.bindVertexArray(S)}function u(S){return i.deleteVertexArray(S)}function h(S,I,D){let k=D.wireframe===!0,W=n[S.id];W===void 0&&(W={},n[S.id]=W);let B=W[I.id];B===void 0&&(B={},W[I.id]=B);let G=B[k];return G===void 0&&(G=d(c()),B[k]=G),G}function d(S){let I=[],D=[],k=[];for(let W=0;W<t;W++)I[W]=0,D[W]=0,k[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:D,attributeDivisors:k,object:S,attributes:{},index:null}}function f(S,I,D,k){let W=r.attributes,B=I.attributes,G=0,Z=D.getAttributes();for(let O in Z)if(Z[O].location>=0){let Q=W[O],re=B[O];if(re===void 0&&(O==="instanceMatrix"&&S.instanceMatrix&&(re=S.instanceMatrix),O==="instanceColor"&&S.instanceColor&&(re=S.instanceColor)),Q===void 0||Q.attribute!==re||re&&Q.data!==re.data)return!0;G++}return r.attributesNum!==G||r.index!==k}function g(S,I,D,k){let W={},B=I.attributes,G=0,Z=D.getAttributes();for(let O in Z)if(Z[O].location>=0){let Q=B[O];Q===void 0&&(O==="instanceMatrix"&&S.instanceMatrix&&(Q=S.instanceMatrix),O==="instanceColor"&&S.instanceColor&&(Q=S.instanceColor));let re={};re.attribute=Q,Q&&Q.data&&(re.data=Q.data),W[O]=re,G++}r.attributes=W,r.attributesNum=G,r.index=k}function b(){let S=r.newAttributes;for(let I=0,D=S.length;I<D;I++)S[I]=0}function m(S){p(S,0)}function p(S,I){let D=r.newAttributes,k=r.enabledAttributes,W=r.attributeDivisors;D[S]=1,k[S]===0&&(i.enableVertexAttribArray(S),k[S]=1),W[S]!==I&&(i.vertexAttribDivisor(S,I),W[S]=I)}function x(){let S=r.newAttributes,I=r.enabledAttributes;for(let D=0,k=I.length;D<k;D++)I[D]!==S[D]&&(i.disableVertexAttribArray(D),I[D]=0)}function _(S,I,D,k,W,B,G){G===!0?i.vertexAttribIPointer(S,I,D,W,B):i.vertexAttribPointer(S,I,D,k,W,B)}function v(S,I,D,k){b();let W=k.attributes,B=D.getAttributes(),G=I.defaultAttributeValues;for(let Z in B){let O=B[Z];if(O.location>=0){let j=W[Z];if(j===void 0&&(Z==="instanceMatrix"&&S.instanceMatrix&&(j=S.instanceMatrix),Z==="instanceColor"&&S.instanceColor&&(j=S.instanceColor)),j!==void 0){let Q=j.normalized,re=j.itemSize,ge=e.get(j);if(ge===void 0)continue;let He=ge.buffer,ke=ge.type,we=ge.bytesPerElement,Y=ke===i.INT||ke===i.UNSIGNED_INT||j.gpuType===eh;if(j.isInterleavedBufferAttribute){let J=j.data,ce=J.stride,ve=j.offset;if(J.isInstancedInterleavedBuffer){for(let fe=0;fe<O.locationSize;fe++)p(O.location+fe,J.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let fe=0;fe<O.locationSize;fe++)m(O.location+fe);i.bindBuffer(i.ARRAY_BUFFER,He);for(let fe=0;fe<O.locationSize;fe++)_(O.location+fe,re/O.locationSize,ke,Q,ce*we,(ve+re/O.locationSize*fe)*we,Y)}else{if(j.isInstancedBufferAttribute){for(let J=0;J<O.locationSize;J++)p(O.location+J,j.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let J=0;J<O.locationSize;J++)m(O.location+J);i.bindBuffer(i.ARRAY_BUFFER,He);for(let J=0;J<O.locationSize;J++)_(O.location+J,re/O.locationSize,ke,Q,re*we,re/O.locationSize*J*we,Y)}}else if(G!==void 0){let Q=G[Z];if(Q!==void 0)switch(Q.length){case 2:i.vertexAttrib2fv(O.location,Q);break;case 3:i.vertexAttrib3fv(O.location,Q);break;case 4:i.vertexAttrib4fv(O.location,Q);break;default:i.vertexAttrib1fv(O.location,Q)}}}}x()}function y(){C();for(let S in n){let I=n[S];for(let D in I){let k=I[D];for(let W in k)u(k[W].object),delete k[W];delete I[D]}delete n[S]}}function T(S){if(n[S.id]===void 0)return;let I=n[S.id];for(let D in I){let k=I[D];for(let W in k)u(k[W].object),delete k[W];delete I[D]}delete n[S.id]}function w(S){for(let I in n){let D=n[I];if(D[S.id]===void 0)continue;let k=D[S.id];for(let W in k)u(k[W].object),delete k[W];delete D[S.id]}}function C(){M(),a=!0,r!==s&&(r=s,l(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:C,resetDefaultState:M,dispose:y,releaseStatesOfGeometry:T,releaseStatesOfProgram:w,initAttributes:b,enableAttribute:m,disableUnusedAttributes:x}}function Zy(i,e,t){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function a(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function o(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,n,1)}function c(l,u,h,d){if(h===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)a(l[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,h);let g=0;for(let b=0;b<h;b++)g+=u[b]*d[b];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Jy(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==Fn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){let C=w===on&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Zn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==li&&!C)}function c(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:b,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:y,maxSamples:T}}function Qy(i){let e=this,t=null,n=0,s=!1,r=!1,a=new si,o=new Ye,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){let g=h.clippingPlanes,b=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{let x=r?0:n,_=x*4,v=p.clippingState||null;c.value=v,v=u(g,d,_,f);for(let y=0;y!==_;++y)v[y]=t[y];p.clippingState=v,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){let b=h!==null?h.length:0,m=null;if(b!==0){if(m=c.value,g!==!0||m===null){let p=f+b*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,v=f;_!==b;++_,v+=4)a.copy(h[_]).applyMatrix4(x,o),a.normal.toArray(m,v),m[v+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,m}}function e1(i){let e=new WeakMap;function t(a,o){return o===Zc?a.mapping=fr:o===Jc&&(a.mapping=pr),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Zc||o===Jc)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new vc(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Ta=4,pg=[.125,.215,.35,.446,.526,.582],_r=20,Hd=new as,mg=new xe,Vd=null,Gd=0,Wd=0,jd=!1,xr=(1+Math.sqrt(5))/2,wa=1/xr,gg=[new P(-xr,wa,0),new P(xr,wa,0),new P(-wa,0,xr),new P(wa,0,xr),new P(0,xr,-wa),new P(0,xr,wa),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],t1=new P,zh=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=t1}=r;Vd=this._renderer.getRenderTarget(),Gd=this._renderer.getActiveCubeFace(),Wd=this._renderer.getActiveMipmapLevel(),jd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Vd,Gd,Wd),this._renderer.xr.enabled=jd,e.scissorTest=!1,Oh(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fr||e.mapping===pr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vd=this._renderer.getRenderTarget(),Gd=this._renderer.getActiveCubeFace(),Wd=this._renderer.getActiveMipmapLevel(),jd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:on,format:Fn,colorSpace:bn,depthBuffer:!1},s=bg(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bg(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=n1(r)),this._blurMaterial=i1(r,e,t)}return s}_compileMaterial(e){let t=new ct(this._lodPlanes[0],e);this._renderer.compile(t,Hd)}_sceneToCubeUV(e,t,n,s,r){let c=new Qt(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(mg),h.toneMapping=ls,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null));let b=new tn({name:"PMREM.Background",side:Nn,depthWrite:!1,depthTest:!1}),m=new ct(new Ms,b),p=!1,x=e.background;x?x.isColor&&(b.color.copy(x),e.background=null,p=!0):(b.color.copy(mg),p=!0);for(let _=0;_<6;_++){let v=_%3;v===0?(c.up.set(0,l[_],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[_],r.y,r.z)):v===1?(c.up.set(0,0,l[_]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[_],r.z)):(c.up.set(0,l[_],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[_]));let y=this._cubeSize;Oh(s,v*y,_>2?y:0,y,y),h.setRenderTarget(s),p&&h.render(m,c),h.render(e,c)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=x}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===fr||e.mapping===pr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=xg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vg());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new ct(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;Oh(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Hd)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=gg[(s-r-1)%gg.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new ct(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*_r-1),b=r/g,m=isFinite(r)?1+Math.floor(u*b):_r;m>_r&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${_r}`);let p=[],x=0;for(let w=0;w<_r;++w){let C=w/b,M=Math.exp(-C*C/2);p.push(M),w===0?x+=M:w<m&&(x+=2*M)}for(let w=0;w<p.length;w++)p[w]=p[w]/x;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-n;let v=this._sizeLods[s],y=3*v*(s>_-Ta?s-_+Ta:0),T=4*(this._cubeSize-v);Oh(t,y,T,3*v,2*v),c.setRenderTarget(t),c.render(h,Hd)}};function n1(i){let e=[],t=[],n=[],s=i,r=i-Ta+1+pg.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let c=1/o;a>i-Ta?c=pg[a-i+Ta-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,b=3,m=2,p=1,x=new Float32Array(b*g*f),_=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let T=0;T<f;T++){let w=T%3*2/3-1,C=T>2?0:-1,M=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];x.set(M,b*g*T),_.set(d,m*g*T);let S=[T,T,T,T,T,T];v.set(S,p*g*T)}let y=new Nt;y.setAttribute("position",new en(x,b)),y.setAttribute("uv",new en(_,m)),y.setAttribute("faceIndex",new en(v,p)),e.push(y),s>Ta&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function bg(i,e,t){let n=new Xt(i,e,t);return n.texture.mapping=Wo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Oh(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function i1(i,e,t){let n=new Float32Array(_r),s=new P(0,1,0);return new Et({name:"SphericalGaussianBlur",defines:{n:_r,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:tf(),fragmentShader:`

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
		`,blending:$t,depthTest:!1,depthWrite:!1})}function vg(){return new Et({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tf(),fragmentShader:`

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
		`,blending:$t,depthTest:!1,depthWrite:!1})}function xg(){return new Et({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$t,depthTest:!1,depthWrite:!1})}function tf(){return`

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
	`}function s1(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===Zc||c===Jc,u=c===fr||c===pr;if(l||u){let h=e.get(o),d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new zh(i)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{let f=o.image;return l&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new zh(i)),h=l?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let c=0,l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function r1(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&oa("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function a1(i,e,t,n){let s={},r=new WeakMap;function a(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function c(h){let d=h.attributes;for(let f in d)e.update(d[f],i.ARRAY_BUFFER)}function l(h){let d=[],f=h.index,g=h.attributes.position,b=0;if(f!==null){let x=f.array;b=f.version;for(let _=0,v=x.length;_<v;_+=3){let y=x[_+0],T=x[_+1],w=x[_+2];d.push(y,T,T,w,w,y)}}else if(g!==void 0){let x=g.array;b=g.version;for(let _=0,v=x.length/3-1;_<v;_+=3){let y=_+0,T=_+1,w=_+2;d.push(y,T,T,w,w,y)}}else return;let m=new(kd(d)?go:mo)(d,1);m.version=b;let p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){let d=r.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function o1(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*a),t.update(f,n,1)}function l(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*a,g),t.update(f,n,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function h(d,f,g,b){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/a,f[p],b[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,b,0,g);let p=0;for(let x=0;x<g;x++)p+=f[x]*b[x];t.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function l1(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function c1(i,e,t){let n=new WeakMap,s=new pt;function r(a,o,c){let l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(o);if(d===void 0||d.count!==h){let M=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],x=o.morphAttributes.color||[],_=0;f===!0&&(_=1),g===!0&&(_=2),b===!0&&(_=3);let v=o.attributes.position.count*_,y=1;v>e.maxTextureSize&&(y=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let T=new Float32Array(v*y*4*h),w=new fo(T,v,y,h);w.type=li,w.needsUpdate=!0;let C=_*4;for(let S=0;S<h;S++){let I=m[S],D=p[S],k=x[S],W=v*y*4*S;for(let B=0;B<I.count;B++){let G=B*C;f===!0&&(s.fromBufferAttribute(I,B),T[W+G+0]=s.x,T[W+G+1]=s.y,T[W+G+2]=s.z,T[W+G+3]=0),g===!0&&(s.fromBufferAttribute(D,B),T[W+G+4]=s.x,T[W+G+5]=s.y,T[W+G+6]=s.z,T[W+G+7]=0),b===!0&&(s.fromBufferAttribute(k,B),T[W+G+8]=s.x,T[W+G+9]=s.y,T[W+G+10]=s.z,T[W+G+11]=k.itemSize===4?s.w:1)}}d={count:h,texture:w,size:new ne(v,y)},n.set(o,d),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let b=0;b<l.length;b++)f+=l[b];let g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function h1(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,u=c.geometry,h=e.get(c,u);if(s.get(h)!==l&&(e.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return h}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}var Og=new an,_g=new rr(1,1),Bg=new fo,zg=new gc,Hg=new vo,yg=[],Sg=[],Mg=new Float32Array(16),wg=new Float32Array(9),Tg=new Float32Array(4);function Aa(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=yg[s];if(r===void 0&&(r=new Float32Array(s),yg[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function ln(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function cn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Vh(i,e){let t=Sg[e];t===void 0&&(t=new Int32Array(e),Sg[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function u1(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function d1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;i.uniform2fv(this.addr,e),cn(t,e)}}function f1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ln(t,e))return;i.uniform3fv(this.addr,e),cn(t,e)}}function p1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;i.uniform4fv(this.addr,e),cn(t,e)}}function m1(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(ln(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),cn(t,e)}else{if(ln(t,n))return;Tg.set(n),i.uniformMatrix2fv(this.addr,!1,Tg),cn(t,n)}}function g1(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(ln(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),cn(t,e)}else{if(ln(t,n))return;wg.set(n),i.uniformMatrix3fv(this.addr,!1,wg),cn(t,n)}}function b1(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(ln(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),cn(t,e)}else{if(ln(t,n))return;Mg.set(n),i.uniformMatrix4fv(this.addr,!1,Mg),cn(t,n)}}function v1(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function x1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;i.uniform2iv(this.addr,e),cn(t,e)}}function _1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ln(t,e))return;i.uniform3iv(this.addr,e),cn(t,e)}}function y1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;i.uniform4iv(this.addr,e),cn(t,e)}}function S1(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function M1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;i.uniform2uiv(this.addr,e),cn(t,e)}}function w1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ln(t,e))return;i.uniform3uiv(this.addr,e),cn(t,e)}}function T1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;i.uniform4uiv(this.addr,e),cn(t,e)}}function E1(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(_g.compareFunction=Dd,r=_g):r=Og,t.setTexture2D(e||r,s)}function A1(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||zg,s)}function C1(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Hg,s)}function R1(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Bg,s)}function P1(i){switch(i){case 5126:return u1;case 35664:return d1;case 35665:return f1;case 35666:return p1;case 35674:return m1;case 35675:return g1;case 35676:return b1;case 5124:case 35670:return v1;case 35667:case 35671:return x1;case 35668:case 35672:return _1;case 35669:case 35673:return y1;case 5125:return S1;case 36294:return M1;case 36295:return w1;case 36296:return T1;case 35678:case 36198:case 36298:case 36306:case 35682:return E1;case 35679:case 36299:case 36307:return A1;case 35680:case 36300:case 36308:case 36293:return C1;case 36289:case 36303:case 36311:case 36292:return R1}}function I1(i,e){i.uniform1fv(this.addr,e)}function D1(i,e){let t=Aa(e,this.size,2);i.uniform2fv(this.addr,t)}function L1(i,e){let t=Aa(e,this.size,3);i.uniform3fv(this.addr,t)}function U1(i,e){let t=Aa(e,this.size,4);i.uniform4fv(this.addr,t)}function k1(i,e){let t=Aa(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function N1(i,e){let t=Aa(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function F1(i,e){let t=Aa(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function O1(i,e){i.uniform1iv(this.addr,e)}function B1(i,e){i.uniform2iv(this.addr,e)}function z1(i,e){i.uniform3iv(this.addr,e)}function H1(i,e){i.uniform4iv(this.addr,e)}function V1(i,e){i.uniform1uiv(this.addr,e)}function G1(i,e){i.uniform2uiv(this.addr,e)}function W1(i,e){i.uniform3uiv(this.addr,e)}function j1(i,e){i.uniform4uiv(this.addr,e)}function X1(i,e,t){let n=this.cache,s=e.length,r=Vh(t,s);ln(n,r)||(i.uniform1iv(this.addr,r),cn(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Og,r[a])}function q1(i,e,t){let n=this.cache,s=e.length,r=Vh(t,s);ln(n,r)||(i.uniform1iv(this.addr,r),cn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||zg,r[a])}function Y1(i,e,t){let n=this.cache,s=e.length,r=Vh(t,s);ln(n,r)||(i.uniform1iv(this.addr,r),cn(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Hg,r[a])}function K1(i,e,t){let n=this.cache,s=e.length,r=Vh(t,s);ln(n,r)||(i.uniform1iv(this.addr,r),cn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Bg,r[a])}function $1(i){switch(i){case 5126:return I1;case 35664:return D1;case 35665:return L1;case 35666:return U1;case 35674:return k1;case 35675:return N1;case 35676:return F1;case 5124:case 35670:return O1;case 35667:case 35671:return B1;case 35668:case 35672:return z1;case 35669:case 35673:return H1;case 5125:return V1;case 36294:return G1;case 36295:return W1;case 36296:return j1;case 35678:case 36198:case 36298:case 36306:case 35682:return X1;case 35679:case 36299:case 36307:return q1;case 35680:case 36300:case 36308:case 36293:return Y1;case 36289:case 36303:case 36311:case 36292:return K1}}var qd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=P1(t.type)}},Yd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=$1(t.type)}},Kd=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Xd=/(\w+)(\])?(\[|\.)?/g;function Eg(i,e){i.seq.push(e),i.map[e.id]=e}function Z1(i,e,t){let n=i.name,s=n.length;for(Xd.lastIndex=0;;){let r=Xd.exec(n),a=Xd.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Eg(t,l===void 0?new qd(o,i,e):new Yd(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new Kd(o),Eg(t,h)),t=h}}}var Ea=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Z1(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Ag(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var J1=37297,Q1=0;function eS(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Cg=new Ye;function tS(i){st._getMatrix(Cg,st.workingColorSpace,i);let e=`mat3( ${Cg.elements.map(t=>t.toFixed(4))} )`;switch(st.getTransfer(i)){case ho:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Rg(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+eS(i.getShaderSource(e),o)}else return r}function nS(i,e){let t=tS(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function iS(i,e){let t;switch(e){case jc:t="Linear";break;case Xc:t="Reinhard";break;case qc:t="Cineon";break;case _a:t="ACESFilmic";break;case Kc:t="AgX";break;case $c:t="Neutral";break;case Yc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Bh=new P;function sS(){st.getLuminanceCoefficients(Bh);let i=Bh.x.toFixed(4),e=Bh.y.toFixed(4),t=Bh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rS(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zo).join(`
`)}function aS(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function oS(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Zo(i){return i!==""}function Pg(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ig(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var lS=/^[ \t]*#include +<([\w\d./]+)>/gm;function $d(i){return i.replace(lS,hS)}var cS=new Map;function hS(i,e){let t=Qe[e];if(t===void 0){let n=cS.get(e);if(n!==void 0)t=Qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return $d(t)}var uS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dg(i){return i.replace(uS,dS)}function dS(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Lg(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function fS(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===xd?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Nc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ui&&(e="SHADOWMAP_TYPE_VSM"),e}function pS(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case fr:case pr:e="ENVMAP_TYPE_CUBE";break;case Wo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function mS(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case pr:e="ENVMAP_MODE_REFRACTION";break}return e}function gS(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Sd:e="ENVMAP_BLENDING_MULTIPLY";break;case Km:e="ENVMAP_BLENDING_MIX";break;case $m:e="ENVMAP_BLENDING_ADD";break}return e}function bS(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function vS(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=fS(t),l=pS(t),u=mS(t),h=gS(t),d=bS(t),f=rS(t),g=aS(r),b=s.createProgram(),m,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Zo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Zo).join(`
`),p.length>0&&(p+=`
`)):(m=[Lg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zo).join(`
`),p=[Lg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ls?"#define TONE_MAPPING":"",t.toneMapping!==ls?Qe.tonemapping_pars_fragment:"",t.toneMapping!==ls?iS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,nS("linearToOutputTexel",t.outputColorSpace),sS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Zo).join(`
`)),a=$d(a),a=Pg(a,t),a=Ig(a,t),o=$d(o),o=Pg(o,t),o=Ig(o,t),a=Dg(a),o=Dg(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Ld?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ld?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=x+m+a,v=x+p+o,y=Ag(s,s.VERTEX_SHADER,_),T=Ag(s,s.FRAGMENT_SHADER,v);s.attachShader(b,y),s.attachShader(b,T),t.index0AttributeName!==void 0?s.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function w(I){if(i.debug.checkShaderErrors){let D=s.getProgramInfoLog(b)||"",k=s.getShaderInfoLog(y)||"",W=s.getShaderInfoLog(T)||"",B=D.trim(),G=k.trim(),Z=W.trim(),O=!0,j=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(O=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,b,y,T);else{let Q=Rg(s,y,"vertex"),re=Rg(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+B+`
`+Q+`
`+re)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(G===""||Z==="")&&(j=!1);j&&(I.diagnostics={runnable:O,programLog:B,vertexShader:{log:G,prefix:m},fragmentShader:{log:Z,prefix:p}})}s.deleteShader(y),s.deleteShader(T),C=new Ea(s,b),M=oS(s,b)}let C;this.getUniforms=function(){return C===void 0&&w(this),C};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(b,J1)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Q1++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=y,this.fragmentShader=T,this}var xS=0,Zd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Jd(e),t.set(e,n)),n}},Jd=class{constructor(e){this.id=xS++,this.code=e,this.usedTimes=0}};function _S(i,e,t,n,s,r,a){let o=new po,c=new Zd,l=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,S,I,D,k){let W=D.fog,B=k.geometry,G=M.isMeshStandardMaterial?D.environment:null,Z=(M.isMeshStandardMaterial?t:e).get(M.envMap||G),O=Z&&Z.mapping===Wo?Z.image.height:null,j=g[M.type];M.precision!==null&&(f=s.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));let Q=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,re=Q!==void 0?Q.length:0,ge=0;B.morphAttributes.position!==void 0&&(ge=1),B.morphAttributes.normal!==void 0&&(ge=2),B.morphAttributes.color!==void 0&&(ge=3);let He,ke,we,Y;if(j){let xt=ki[j];He=xt.vertexShader,ke=xt.fragmentShader}else He=M.vertexShader,ke=M.fragmentShader,c.update(M),we=c.getVertexShaderID(M),Y=c.getFragmentShaderID(M);let J=i.getRenderTarget(),ce=i.state.buffers.depth.getReversed(),ve=k.isInstancedMesh===!0,fe=k.isBatchedMesh===!0,We=!!M.map,wt=!!M.matcap,U=!!Z,it=!!M.aoMap,De=!!M.lightMap,Ne=!!M.bumpMap,ye=!!M.normalMap,vt=!!M.displacementMap,Se=!!M.emissiveMap,Oe=!!M.metalnessMap,zt=!!M.roughnessMap,yt=M.anisotropy>0,L=M.clearcoat>0,E=M.dispersion>0,V=M.iridescence>0,$=M.sheen>0,ie=M.transmission>0,K=yt&&!!M.anisotropyMap,Ae=L&&!!M.clearcoatMap,he=L&&!!M.clearcoatNormalMap,Te=L&&!!M.clearcoatRoughnessMap,Pe=V&&!!M.iridescenceMap,oe=V&&!!M.iridescenceThicknessMap,me=$&&!!M.sheenColorMap,ze=$&&!!M.sheenRoughnessMap,Ie=!!M.specularMap,de=!!M.specularColorMap,je=!!M.specularIntensityMap,F=ie&&!!M.transmissionMap,se=ie&&!!M.thicknessMap,ue=!!M.gradientMap,Ee=!!M.alphaMap,ae=M.alphaTest>0,ee=!!M.alphaHash,Re=!!M.extensions,Ke=ls;M.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Ke=i.toneMapping);let It={shaderID:j,shaderType:M.type,shaderName:M.name,vertexShader:He,fragmentShader:ke,defines:M.defines,customVertexShaderID:we,customFragmentShaderID:Y,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:fe,batchingColor:fe&&k._colorsTexture!==null,instancing:ve,instancingColor:ve&&k.instanceColor!==null,instancingMorph:ve&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:J===null?i.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:bn,alphaToCoverage:!!M.alphaToCoverage,map:We,matcap:wt,envMap:U,envMapMode:U&&Z.mapping,envMapCubeUVHeight:O,aoMap:it,lightMap:De,bumpMap:Ne,normalMap:ye,displacementMap:d&&vt,emissiveMap:Se,normalMapObjectSpace:ye&&M.normalMapType===eg,normalMapTangentSpace:ye&&M.normalMapType===Nh,metalnessMap:Oe,roughnessMap:zt,anisotropy:yt,anisotropyMap:K,clearcoat:L,clearcoatMap:Ae,clearcoatNormalMap:he,clearcoatRoughnessMap:Te,dispersion:E,iridescence:V,iridescenceMap:Pe,iridescenceThicknessMap:oe,sheen:$,sheenColorMap:me,sheenRoughnessMap:ze,specularMap:Ie,specularColorMap:de,specularIntensityMap:je,transmission:ie,transmissionMap:F,thicknessMap:se,gradientMap:ue,opaque:M.transparent===!1&&M.blending===Zs&&M.alphaToCoverage===!1,alphaMap:Ee,alphaTest:ae,alphaHash:ee,combine:M.combine,mapUv:We&&b(M.map.channel),aoMapUv:it&&b(M.aoMap.channel),lightMapUv:De&&b(M.lightMap.channel),bumpMapUv:Ne&&b(M.bumpMap.channel),normalMapUv:ye&&b(M.normalMap.channel),displacementMapUv:vt&&b(M.displacementMap.channel),emissiveMapUv:Se&&b(M.emissiveMap.channel),metalnessMapUv:Oe&&b(M.metalnessMap.channel),roughnessMapUv:zt&&b(M.roughnessMap.channel),anisotropyMapUv:K&&b(M.anisotropyMap.channel),clearcoatMapUv:Ae&&b(M.clearcoatMap.channel),clearcoatNormalMapUv:he&&b(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&b(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Pe&&b(M.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&b(M.iridescenceThicknessMap.channel),sheenColorMapUv:me&&b(M.sheenColorMap.channel),sheenRoughnessMapUv:ze&&b(M.sheenRoughnessMap.channel),specularMapUv:Ie&&b(M.specularMap.channel),specularColorMapUv:de&&b(M.specularColorMap.channel),specularIntensityMapUv:je&&b(M.specularIntensityMap.channel),transmissionMapUv:F&&b(M.transmissionMap.channel),thicknessMapUv:se&&b(M.thicknessMap.channel),alphaMapUv:Ee&&b(M.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(ye||yt),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!B.attributes.uv&&(We||Ee),fog:!!W,useFog:M.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ce,skinning:k.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:ge,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ke,decodeVideoTexture:We&&M.map.isVideoTexture===!0&&st.getTransfer(M.map.colorSpace)===mt,decodeVideoTextureEmissive:Se&&M.emissiveMap.isVideoTexture===!0&&st.getTransfer(M.emissiveMap.colorSpace)===mt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Cn,flipSided:M.side===Nn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Re&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&M.extensions.multiDraw===!0||fe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return It.vertexUv1s=l.has(1),It.vertexUv2s=l.has(2),It.vertexUv3s=l.has(3),l.clear(),It}function p(M){let S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(let I in M.defines)S.push(I),S.push(M.defines[I]);return M.isRawShaderMaterial===!1&&(x(S,M),_(S,M),S.push(i.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function x(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function _(M,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),S.gradientMap&&o.enable(22),M.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),M.push(o.mask)}function v(M){let S=g[M.type],I;if(S){let D=ki[S];I=xn.clone(D.uniforms)}else I=M.uniforms;return I}function y(M,S){let I;for(let D=0,k=u.length;D<k;D++){let W=u[D];if(W.cacheKey===S){I=W,++I.usedTimes;break}}return I===void 0&&(I=new vS(i,S,M,r),u.push(I)),I}function T(M){if(--M.usedTimes===0){let S=u.indexOf(M);u[S]=u[u.length-1],u.pop(),M.destroy()}}function w(M){c.remove(M)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:y,releaseProgram:T,releaseShaderCache:w,programs:u,dispose:C}}function yS(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function SS(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Ug(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function kg(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h,d,f,g,b,m){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:b,group:m},i[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=b,p.group=m),e++,p}function o(h,d,f,g,b,m){let p=a(h,d,f,g,b,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function c(h,d,f,g,b,m){let p=a(h,d,f,g,b,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function l(h,d){t.length>1&&t.sort(h||SS),n.length>1&&n.sort(d||Ug),s.length>1&&s.sort(d||Ug)}function u(){for(let h=e,d=i.length;h<d;h++){let f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:u,sort:l}}function MS(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new kg,i.set(n,[a])):s>=r.length?(a=new kg,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function wS(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new xe};break;case"SpotLight":t={position:new P,direction:new P,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":t={color:new xe,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function TS(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var ES=0;function AS(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function CS(i){let e=new wS,t=TS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new P);let s=new P,r=new Le,a=new Le;function o(l){let u=0,h=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,g=0,b=0,m=0,p=0,x=0,_=0,v=0,y=0,T=0,w=0;l.sort(AS);for(let M=0,S=l.length;M<S;M++){let I=l[M],D=I.color,k=I.intensity,W=I.distance,B=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=D.r*k,h+=D.g*k,d+=D.b*k;else if(I.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(I.sh.coefficients[G],k);w++}else if(I.isDirectionalLight){let G=e.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let Z=I.shadow,O=t.get(I);O.shadowIntensity=Z.intensity,O.shadowBias=Z.bias,O.shadowNormalBias=Z.normalBias,O.shadowRadius=Z.radius,O.shadowMapSize=Z.mapSize,n.directionalShadow[f]=O,n.directionalShadowMap[f]=B,n.directionalShadowMatrix[f]=I.shadow.matrix,x++}n.directional[f]=G,f++}else if(I.isSpotLight){let G=e.get(I);G.position.setFromMatrixPosition(I.matrixWorld),G.color.copy(D).multiplyScalar(k),G.distance=W,G.coneCos=Math.cos(I.angle),G.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),G.decay=I.decay,n.spot[b]=G;let Z=I.shadow;if(I.map&&(n.spotLightMap[y]=I.map,y++,Z.updateMatrices(I),I.castShadow&&T++),n.spotLightMatrix[b]=Z.matrix,I.castShadow){let O=t.get(I);O.shadowIntensity=Z.intensity,O.shadowBias=Z.bias,O.shadowNormalBias=Z.normalBias,O.shadowRadius=Z.radius,O.shadowMapSize=Z.mapSize,n.spotShadow[b]=O,n.spotShadowMap[b]=B,v++}b++}else if(I.isRectAreaLight){let G=e.get(I);G.color.copy(D).multiplyScalar(k),G.halfWidth.set(I.width*.5,0,0),G.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=G,m++}else if(I.isPointLight){let G=e.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity),G.distance=I.distance,G.decay=I.decay,I.castShadow){let Z=I.shadow,O=t.get(I);O.shadowIntensity=Z.intensity,O.shadowBias=Z.bias,O.shadowNormalBias=Z.normalBias,O.shadowRadius=Z.radius,O.shadowMapSize=Z.mapSize,O.shadowCameraNear=Z.camera.near,O.shadowCameraFar=Z.camera.far,n.pointShadow[g]=O,n.pointShadowMap[g]=B,n.pointShadowMatrix[g]=I.shadow.matrix,_++}n.point[g]=G,g++}else if(I.isHemisphereLight){let G=e.get(I);G.skyColor.copy(I.color).multiplyScalar(k),G.groundColor.copy(I.groundColor).multiplyScalar(k),n.hemi[p]=G,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pe.LTC_FLOAT_1,n.rectAreaLTC2=pe.LTC_FLOAT_2):(n.rectAreaLTC1=pe.LTC_HALF_1,n.rectAreaLTC2=pe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let C=n.hash;(C.directionalLength!==f||C.pointLength!==g||C.spotLength!==b||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==x||C.numPointShadows!==_||C.numSpotShadows!==v||C.numSpotMaps!==y||C.numLightProbes!==w)&&(n.directional.length=f,n.spot.length=b,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=v+y-T,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=w,C.directionalLength=f,C.pointLength=g,C.spotLength=b,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=x,C.numPointShadows=_,C.numSpotShadows=v,C.numSpotMaps=y,C.numLightProbes=w,n.version=ES++)}function c(l,u){let h=0,d=0,f=0,g=0,b=0,m=u.matrixWorldInverse;for(let p=0,x=l.length;p<x;p++){let _=l[p];if(_.isDirectionalLight){let v=n.directional[h];v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),h++}else if(_.isSpotLight){let v=n.spot[f];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),f++}else if(_.isRectAreaLight){let v=n.rectArea[g];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),a.identity(),r.copy(_.matrixWorld),r.premultiply(m),a.extractRotation(r),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(_.isPointLight){let v=n.point[d];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){let v=n.hemi[b];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(m),b++}}}return{setup:o,setupView:c,state:n}}function Ng(i){let e=new CS(i),t=[],n=[];function s(u){l.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function RS(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Ng(i),e.set(s,[o])):r>=a.length?(o=new Ng(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var PS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,IS=`uniform sampler2D shadow_pass;
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
}`;function DS(i,e,t){let n=new da,s=new ne,r=new ne,a=new pt,o=new ba({depthPacking:kh}),c=new Cc,l={},u=t.maxTextureSize,h={[Yn]:Nn,[Nn]:Yn,[Cn]:Cn},d=new Et({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:PS,fragmentShader:IS}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Nt;g.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new ct(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xd;let p=this.type;this.render=function(T,w,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let M=i.getRenderTarget(),S=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),D=i.state;D.setBlending($t),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let k=p!==Ui&&this.type===Ui,W=p===Ui&&this.type!==Ui;for(let B=0,G=T.length;B<G;B++){let Z=T[B],O=Z.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);let j=O.getFrameExtents();if(s.multiply(j),r.copy(O.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/j.x),s.x=r.x*j.x,O.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/j.y),s.y=r.y*j.y,O.mapSize.y=r.y)),O.map===null||k===!0||W===!0){let re=this.type!==Ui?{minFilter:jt,magFilter:jt}:{};O.map!==null&&O.map.dispose(),O.map=new Xt(s.x,s.y,re),O.map.texture.name=Z.name+".shadowMap",O.camera.updateProjectionMatrix()}i.setRenderTarget(O.map),i.clear();let Q=O.getViewportCount();for(let re=0;re<Q;re++){let ge=O.getViewport(re);a.set(r.x*ge.x,r.y*ge.y,r.x*ge.z,r.y*ge.w),D.viewport(a),O.updateMatrices(Z,re),n=O.getFrustum(),v(w,C,O.camera,Z,this.type)}O.isPointLightShadow!==!0&&this.type===Ui&&x(O,C),O.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(M,S,I)};function x(T,w){let C=e.update(b);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Xt(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(w,null,C,d,b,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(w,null,C,f,b,null)}function _(T,w,C,M){let S=null,I=C.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)S=I;else if(S=C.isPointLight===!0?c:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let D=S.uuid,k=w.uuid,W=l[D];W===void 0&&(W={},l[D]=W);let B=W[k];B===void 0&&(B=S.clone(),W[k]=B,w.addEventListener("dispose",y)),S=B}if(S.visible=w.visible,S.wireframe=w.wireframe,M===Ui?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:h[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,C.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let D=i.properties.get(S);D.light=C}return S}function v(T,w,C,M,S){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===Ui)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,T.matrixWorld);let k=e.update(T),W=T.material;if(Array.isArray(W)){let B=k.groups;for(let G=0,Z=B.length;G<Z;G++){let O=B[G],j=W[O.materialIndex];if(j&&j.visible){let Q=_(T,j,M,S);T.onBeforeShadow(i,T,w,C,k,Q,O),i.renderBufferDirect(C,null,k,Q,T,O),T.onAfterShadow(i,T,w,C,k,Q,O)}}}else if(W.visible){let B=_(T,W,M,S);T.onBeforeShadow(i,T,w,C,k,B,null),i.renderBufferDirect(C,null,k,B,T,null),T.onAfterShadow(i,T,w,C,k,B,null)}}let D=T.children;for(let k=0,W=D.length;k<W;k++)v(D[k],w,C,M,S)}function y(T){T.target.removeEventListener("dispose",y);for(let C in l){let M=l[C],S=T.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}var LS={[Oc]:Bc,[zc]:Gc,[Hc]:Wc,[Js]:Vc,[Bc]:Oc,[Gc]:zc,[Wc]:Hc,[Vc]:Js};function US(i,e){function t(){let F=!1,se=new pt,ue=null,Ee=new pt(0,0,0,0);return{setMask:function(ae){ue!==ae&&!F&&(i.colorMask(ae,ae,ae,ae),ue=ae)},setLocked:function(ae){F=ae},setClear:function(ae,ee,Re,Ke,It){It===!0&&(ae*=Ke,ee*=Ke,Re*=Ke),se.set(ae,ee,Re,Ke),Ee.equals(se)===!1&&(i.clearColor(ae,ee,Re,Ke),Ee.copy(se))},reset:function(){F=!1,ue=null,Ee.set(-1,0,0,0)}}}function n(){let F=!1,se=!1,ue=null,Ee=null,ae=null;return{setReversed:function(ee){if(se!==ee){let Re=e.get("EXT_clip_control");ee?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),se=ee;let Ke=ae;ae=null,this.setClear(Ke)}},getReversed:function(){return se},setTest:function(ee){ee?J(i.DEPTH_TEST):ce(i.DEPTH_TEST)},setMask:function(ee){ue!==ee&&!F&&(i.depthMask(ee),ue=ee)},setFunc:function(ee){if(se&&(ee=LS[ee]),Ee!==ee){switch(ee){case Oc:i.depthFunc(i.NEVER);break;case Bc:i.depthFunc(i.ALWAYS);break;case zc:i.depthFunc(i.LESS);break;case Js:i.depthFunc(i.LEQUAL);break;case Hc:i.depthFunc(i.EQUAL);break;case Vc:i.depthFunc(i.GEQUAL);break;case Gc:i.depthFunc(i.GREATER);break;case Wc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ee=ee}},setLocked:function(ee){F=ee},setClear:function(ee){ae!==ee&&(se&&(ee=1-ee),i.clearDepth(ee),ae=ee)},reset:function(){F=!1,ue=null,Ee=null,ae=null,se=!1}}}function s(){let F=!1,se=null,ue=null,Ee=null,ae=null,ee=null,Re=null,Ke=null,It=null;return{setTest:function(xt){F||(xt?J(i.STENCIL_TEST):ce(i.STENCIL_TEST))},setMask:function(xt){se!==xt&&!F&&(i.stencilMask(xt),se=xt)},setFunc:function(xt,Wi,wi){(ue!==xt||Ee!==Wi||ae!==wi)&&(i.stencilFunc(xt,Wi,wi),ue=xt,Ee=Wi,ae=wi)},setOp:function(xt,Wi,wi){(ee!==xt||Re!==Wi||Ke!==wi)&&(i.stencilOp(xt,Wi,wi),ee=xt,Re=Wi,Ke=wi)},setLocked:function(xt){F=xt},setClear:function(xt){It!==xt&&(i.clearStencil(xt),It=xt)},reset:function(){F=!1,se=null,ue=null,Ee=null,ae=null,ee=null,Re=null,Ke=null,It=null}}}let r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap,u={},h={},d=new WeakMap,f=[],g=null,b=!1,m=null,p=null,x=null,_=null,v=null,y=null,T=null,w=new xe(0,0,0),C=0,M=!1,S=null,I=null,D=null,k=null,W=null,B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,Z=0,O=i.getParameter(i.VERSION);O.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(O)[1]),G=Z>=1):O.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),G=Z>=2);let j=null,Q={},re=i.getParameter(i.SCISSOR_BOX),ge=i.getParameter(i.VIEWPORT),He=new pt().fromArray(re),ke=new pt().fromArray(ge);function we(F,se,ue,Ee){let ae=new Uint8Array(4),ee=i.createTexture();i.bindTexture(F,ee),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Re=0;Re<ue;Re++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(se,0,i.RGBA,1,1,Ee,0,i.RGBA,i.UNSIGNED_BYTE,ae):i.texImage2D(se+Re,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ae);return ee}let Y={};Y[i.TEXTURE_2D]=we(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=we(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=we(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=we(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),J(i.DEPTH_TEST),a.setFunc(Js),Ne(!1),ye(vd),J(i.CULL_FACE),it($t);function J(F){u[F]!==!0&&(i.enable(F),u[F]=!0)}function ce(F){u[F]!==!1&&(i.disable(F),u[F]=!1)}function ve(F,se){return h[F]!==se?(i.bindFramebuffer(F,se),h[F]=se,F===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=se),F===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=se),!0):!1}function fe(F,se){let ue=f,Ee=!1;if(F){ue=d.get(se),ue===void 0&&(ue=[],d.set(se,ue));let ae=F.textures;if(ue.length!==ae.length||ue[0]!==i.COLOR_ATTACHMENT0){for(let ee=0,Re=ae.length;ee<Re;ee++)ue[ee]=i.COLOR_ATTACHMENT0+ee;ue.length=ae.length,Ee=!0}}else ue[0]!==i.BACK&&(ue[0]=i.BACK,Ee=!0);Ee&&i.drawBuffers(ue)}function We(F){return g!==F?(i.useProgram(F),g=F,!0):!1}let wt={[Kn]:i.FUNC_ADD,[km]:i.FUNC_SUBTRACT,[Nm]:i.FUNC_REVERSE_SUBTRACT};wt[Fm]=i.MIN,wt[Om]=i.MAX;let U={[dr]:i.ZERO,[Bm]:i.ONE,[zm]:i.SRC_COLOR,[uc]:i.SRC_ALPHA,[Wm]:i.SRC_ALPHA_SATURATE,[Go]:i.DST_COLOR,[Vo]:i.DST_ALPHA,[Hm]:i.ONE_MINUS_SRC_COLOR,[dc]:i.ONE_MINUS_SRC_ALPHA,[Gm]:i.ONE_MINUS_DST_COLOR,[Vm]:i.ONE_MINUS_DST_ALPHA,[jm]:i.CONSTANT_COLOR,[Xm]:i.ONE_MINUS_CONSTANT_COLOR,[qm]:i.CONSTANT_ALPHA,[Ym]:i.ONE_MINUS_CONSTANT_ALPHA};function it(F,se,ue,Ee,ae,ee,Re,Ke,It,xt){if(F===$t){b===!0&&(ce(i.BLEND),b=!1);return}if(b===!1&&(J(i.BLEND),b=!0),F!==Fc){if(F!==m||xt!==M){if((p!==Kn||v!==Kn)&&(i.blendEquation(i.FUNC_ADD),p=Kn,v=Kn),xt)switch(F){case Zs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ur:i.blendFunc(i.ONE,i.ONE);break;case _d:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case yd:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Zs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ur:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case _d:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case yd:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}x=null,_=null,y=null,T=null,w.set(0,0,0),C=0,m=F,M=xt}return}ae=ae||se,ee=ee||ue,Re=Re||Ee,(se!==p||ae!==v)&&(i.blendEquationSeparate(wt[se],wt[ae]),p=se,v=ae),(ue!==x||Ee!==_||ee!==y||Re!==T)&&(i.blendFuncSeparate(U[ue],U[Ee],U[ee],U[Re]),x=ue,_=Ee,y=ee,T=Re),(Ke.equals(w)===!1||It!==C)&&(i.blendColor(Ke.r,Ke.g,Ke.b,It),w.copy(Ke),C=It),m=F,M=!1}function De(F,se){F.side===Cn?ce(i.CULL_FACE):J(i.CULL_FACE);let ue=F.side===Nn;se&&(ue=!ue),Ne(ue),F.blending===Zs&&F.transparent===!1?it($t):it(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);let Ee=F.stencilWrite;o.setTest(Ee),Ee&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Se(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?J(i.SAMPLE_ALPHA_TO_COVERAGE):ce(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(F){S!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),S=F)}function ye(F){F!==Lm?(J(i.CULL_FACE),F!==I&&(F===vd?i.cullFace(i.BACK):F===Um?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ce(i.CULL_FACE),I=F}function vt(F){F!==D&&(G&&i.lineWidth(F),D=F)}function Se(F,se,ue){F?(J(i.POLYGON_OFFSET_FILL),(k!==se||W!==ue)&&(i.polygonOffset(se,ue),k=se,W=ue)):ce(i.POLYGON_OFFSET_FILL)}function Oe(F){F?J(i.SCISSOR_TEST):ce(i.SCISSOR_TEST)}function zt(F){F===void 0&&(F=i.TEXTURE0+B-1),j!==F&&(i.activeTexture(F),j=F)}function yt(F,se,ue){ue===void 0&&(j===null?ue=i.TEXTURE0+B-1:ue=j);let Ee=Q[ue];Ee===void 0&&(Ee={type:void 0,texture:void 0},Q[ue]=Ee),(Ee.type!==F||Ee.texture!==se)&&(j!==ue&&(i.activeTexture(ue),j=ue),i.bindTexture(F,se||Y[F]),Ee.type=F,Ee.texture=se)}function L(){let F=Q[j];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function E(){try{i.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function V(){try{i.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function $(){try{i.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ie(){try{i.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function K(){try{i.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ae(){try{i.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function he(){try{i.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Te(){try{i.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Pe(){try{i.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function oe(){try{i.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function me(F){He.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),He.copy(F))}function ze(F){ke.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),ke.copy(F))}function Ie(F,se){let ue=l.get(se);ue===void 0&&(ue=new WeakMap,l.set(se,ue));let Ee=ue.get(F);Ee===void 0&&(Ee=i.getUniformBlockIndex(se,F.name),ue.set(F,Ee))}function de(F,se){let Ee=l.get(se).get(F);c.get(se)!==Ee&&(i.uniformBlockBinding(se,Ee,F.__bindingPointIndex),c.set(se,Ee))}function je(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},j=null,Q={},h={},d=new WeakMap,f=[],g=null,b=!1,m=null,p=null,x=null,_=null,v=null,y=null,T=null,w=new xe(0,0,0),C=0,M=!1,S=null,I=null,D=null,k=null,W=null,He.set(0,0,i.canvas.width,i.canvas.height),ke.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:J,disable:ce,bindFramebuffer:ve,drawBuffers:fe,useProgram:We,setBlending:it,setMaterial:De,setFlipSided:Ne,setCullFace:ye,setLineWidth:vt,setPolygonOffset:Se,setScissorTest:Oe,activeTexture:zt,bindTexture:yt,unbindTexture:L,compressedTexImage2D:E,compressedTexImage3D:V,texImage2D:Pe,texImage3D:oe,updateUBOMapping:Ie,uniformBlockBinding:de,texStorage2D:he,texStorage3D:Te,texSubImage2D:$,texSubImage3D:ie,compressedTexSubImage2D:K,compressedTexSubImage3D:Ae,scissor:me,viewport:ze,reset:je}}function kS(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ne,u=new WeakMap,h,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,E){return f?new OffscreenCanvas(L,E):aa("canvas")}function b(L,E,V){let $=1,ie=yt(L);if((ie.width>V||ie.height>V)&&($=V/Math.max(ie.width,ie.height)),$<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){let K=Math.floor($*ie.width),Ae=Math.floor($*ie.height);h===void 0&&(h=g(K,Ae));let he=E?g(K,Ae):h;return he.width=K,he.height=Ae,he.getContext("2d").drawImage(L,0,0,K,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+K+"x"+Ae+")."),he}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),L;return L}function m(L){return L.generateMipmaps}function p(L){i.generateMipmap(L)}function x(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(L,E,V,$,ie=!1){if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let K=E;if(E===i.RED&&(V===i.FLOAT&&(K=i.R32F),V===i.HALF_FLOAT&&(K=i.R16F),V===i.UNSIGNED_BYTE&&(K=i.R8)),E===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(K=i.R8UI),V===i.UNSIGNED_SHORT&&(K=i.R16UI),V===i.UNSIGNED_INT&&(K=i.R32UI),V===i.BYTE&&(K=i.R8I),V===i.SHORT&&(K=i.R16I),V===i.INT&&(K=i.R32I)),E===i.RG&&(V===i.FLOAT&&(K=i.RG32F),V===i.HALF_FLOAT&&(K=i.RG16F),V===i.UNSIGNED_BYTE&&(K=i.RG8)),E===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(K=i.RG8UI),V===i.UNSIGNED_SHORT&&(K=i.RG16UI),V===i.UNSIGNED_INT&&(K=i.RG32UI),V===i.BYTE&&(K=i.RG8I),V===i.SHORT&&(K=i.RG16I),V===i.INT&&(K=i.RG32I)),E===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(K=i.RGB8UI),V===i.UNSIGNED_SHORT&&(K=i.RGB16UI),V===i.UNSIGNED_INT&&(K=i.RGB32UI),V===i.BYTE&&(K=i.RGB8I),V===i.SHORT&&(K=i.RGB16I),V===i.INT&&(K=i.RGB32I)),E===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),V===i.UNSIGNED_INT&&(K=i.RGBA32UI),V===i.BYTE&&(K=i.RGBA8I),V===i.SHORT&&(K=i.RGBA16I),V===i.INT&&(K=i.RGBA32I)),E===i.RGB&&(V===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),V===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),E===i.RGBA){let Ae=ie?ho:st.getTransfer($);V===i.FLOAT&&(K=i.RGBA32F),V===i.HALF_FLOAT&&(K=i.RGBA16F),V===i.UNSIGNED_BYTE&&(K=Ae===mt?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function v(L,E){let V;return L?E===null||E===Is||E===Ds?V=i.DEPTH24_STENCIL8:E===li?V=i.DEPTH32F_STENCIL8:E===Sa&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Is||E===Ds?V=i.DEPTH_COMPONENT24:E===li?V=i.DEPTH_COMPONENT32F:E===Sa&&(V=i.DEPTH_COMPONENT16),V}function y(L,E){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==jt&&L.minFilter!==Un?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function T(L){let E=L.target;E.removeEventListener("dispose",T),C(E),E.isVideoTexture&&u.delete(E)}function w(L){let E=L.target;E.removeEventListener("dispose",w),S(E)}function C(L){let E=n.get(L);if(E.__webglInit===void 0)return;let V=L.source,$=d.get(V);if($){let ie=$[E.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&M(L),Object.keys($).length===0&&d.delete(V)}n.remove(L)}function M(L){let E=n.get(L);i.deleteTexture(E.__webglTexture);let V=L.source,$=d.get(V);delete $[E.__cacheKey],a.memory.textures--}function S(L){let E=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(E.__webglFramebuffer[$]))for(let ie=0;ie<E.__webglFramebuffer[$].length;ie++)i.deleteFramebuffer(E.__webglFramebuffer[$][ie]);else i.deleteFramebuffer(E.__webglFramebuffer[$]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[$])}else{if(Array.isArray(E.__webglFramebuffer))for(let $=0;$<E.__webglFramebuffer.length;$++)i.deleteFramebuffer(E.__webglFramebuffer[$]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let $=0;$<E.__webglColorRenderbuffer.length;$++)E.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[$]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let V=L.textures;for(let $=0,ie=V.length;$<ie;$++){let K=n.get(V[$]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),a.memory.textures--),n.remove(V[$])}n.remove(L)}let I=0;function D(){I=0}function k(){let L=I;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),I+=1,L}function W(L){let E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function B(L,E){let V=n.get(L);if(L.isVideoTexture&&Oe(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&V.__version!==L.version){let $=L.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(V,L,E);return}}else L.isExternalTexture&&(V.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+E)}function G(L,E){let V=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&V.__version!==L.version){Y(V,L,E);return}t.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+E)}function Z(L,E){let V=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&V.__version!==L.version){Y(V,L,E);return}t.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+E)}function O(L,E){let V=n.get(L);if(L.version>0&&V.__version!==L.version){J(V,L,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+E)}let j={[zn]:i.REPEAT,[Ti]:i.CLAMP_TO_EDGE,[sa]:i.MIRRORED_REPEAT},Q={[jt]:i.NEAREST,[Qc]:i.NEAREST_MIPMAP_NEAREST,[mr]:i.NEAREST_MIPMAP_LINEAR,[Un]:i.LINEAR,[ya]:i.LINEAR_MIPMAP_NEAREST,[Si]:i.LINEAR_MIPMAP_LINEAR},re={[tg]:i.NEVER,[og]:i.ALWAYS,[ng]:i.LESS,[Dd]:i.LEQUAL,[ig]:i.EQUAL,[ag]:i.GEQUAL,[sg]:i.GREATER,[rg]:i.NOTEQUAL};function ge(L,E){if(E.type===li&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Un||E.magFilter===ya||E.magFilter===mr||E.magFilter===Si||E.minFilter===Un||E.minFilter===ya||E.minFilter===mr||E.minFilter===Si)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,j[E.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,j[E.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,j[E.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,Q[E.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,Q[E.minFilter]),E.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,re[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===jt||E.minFilter!==mr&&E.minFilter!==Si||E.type===li&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let V=e.get("EXT_texture_filter_anisotropic");i.texParameterf(L,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function He(L,E){let V=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",T));let $=E.source,ie=d.get($);ie===void 0&&(ie={},d.set($,ie));let K=W(E);if(K!==L.__cacheKey){ie[K]===void 0&&(ie[K]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,V=!0),ie[K].usedTimes++;let Ae=ie[L.__cacheKey];Ae!==void 0&&(ie[L.__cacheKey].usedTimes--,Ae.usedTimes===0&&M(E)),L.__cacheKey=K,L.__webglTexture=ie[K].texture}return V}function ke(L,E,V){return Math.floor(Math.floor(L/V)/E)}function we(L,E,V,$){let K=L.updateRanges;if(K.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,V,$,E.data);else{K.sort((oe,me)=>oe.start-me.start);let Ae=0;for(let oe=1;oe<K.length;oe++){let me=K[Ae],ze=K[oe],Ie=me.start+me.count,de=ke(ze.start,E.width,4),je=ke(me.start,E.width,4);ze.start<=Ie+1&&de===je&&ke(ze.start+ze.count-1,E.width,4)===de?me.count=Math.max(me.count,ze.start+ze.count-me.start):(++Ae,K[Ae]=ze)}K.length=Ae+1;let he=i.getParameter(i.UNPACK_ROW_LENGTH),Te=i.getParameter(i.UNPACK_SKIP_PIXELS),Pe=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let oe=0,me=K.length;oe<me;oe++){let ze=K[oe],Ie=Math.floor(ze.start/4),de=Math.ceil(ze.count/4),je=Ie%E.width,F=Math.floor(Ie/E.width),se=de,ue=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,je),i.pixelStorei(i.UNPACK_SKIP_ROWS,F),t.texSubImage2D(i.TEXTURE_2D,0,je,F,se,ue,V,$,E.data)}L.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,he),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Te),i.pixelStorei(i.UNPACK_SKIP_ROWS,Pe)}}function Y(L,E,V){let $=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&($=i.TEXTURE_3D);let ie=He(L,E),K=E.source;t.bindTexture($,L.__webglTexture,i.TEXTURE0+V);let Ae=n.get(K);if(K.version!==Ae.__version||ie===!0){t.activeTexture(i.TEXTURE0+V);let he=st.getPrimaries(st.workingColorSpace),Te=E.colorSpace===cs?null:st.getPrimaries(E.colorSpace),Pe=E.colorSpace===cs||he===Te?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let oe=b(E.image,!1,s.maxTextureSize);oe=zt(E,oe);let me=r.convert(E.format,E.colorSpace),ze=r.convert(E.type),Ie=_(E.internalFormat,me,ze,E.colorSpace,E.isVideoTexture);ge($,E);let de,je=E.mipmaps,F=E.isVideoTexture!==!0,se=Ae.__version===void 0||ie===!0,ue=K.dataReady,Ee=y(E,oe);if(E.isDepthTexture)Ie=v(E.format===Ls,E.type),se&&(F?t.texStorage2D(i.TEXTURE_2D,1,Ie,oe.width,oe.height):t.texImage2D(i.TEXTURE_2D,0,Ie,oe.width,oe.height,0,me,ze,null));else if(E.isDataTexture)if(je.length>0){F&&se&&t.texStorage2D(i.TEXTURE_2D,Ee,Ie,je[0].width,je[0].height);for(let ae=0,ee=je.length;ae<ee;ae++)de=je[ae],F?ue&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,de.width,de.height,me,ze,de.data):t.texImage2D(i.TEXTURE_2D,ae,Ie,de.width,de.height,0,me,ze,de.data);E.generateMipmaps=!1}else F?(se&&t.texStorage2D(i.TEXTURE_2D,Ee,Ie,oe.width,oe.height),ue&&we(E,oe,me,ze)):t.texImage2D(i.TEXTURE_2D,0,Ie,oe.width,oe.height,0,me,ze,oe.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){F&&se&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ee,Ie,je[0].width,je[0].height,oe.depth);for(let ae=0,ee=je.length;ae<ee;ae++)if(de=je[ae],E.format!==Fn)if(me!==null)if(F){if(ue)if(E.layerUpdates.size>0){let Re=zd(de.width,de.height,E.format,E.type);for(let Ke of E.layerUpdates){let It=de.data.subarray(Ke*Re/de.data.BYTES_PER_ELEMENT,(Ke+1)*Re/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,Ke,de.width,de.height,1,me,It)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,de.width,de.height,oe.depth,me,de.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ae,Ie,de.width,de.height,oe.depth,0,de.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?ue&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,de.width,de.height,oe.depth,me,ze,de.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ae,Ie,de.width,de.height,oe.depth,0,me,ze,de.data)}else{F&&se&&t.texStorage2D(i.TEXTURE_2D,Ee,Ie,je[0].width,je[0].height);for(let ae=0,ee=je.length;ae<ee;ae++)de=je[ae],E.format!==Fn?me!==null?F?ue&&t.compressedTexSubImage2D(i.TEXTURE_2D,ae,0,0,de.width,de.height,me,de.data):t.compressedTexImage2D(i.TEXTURE_2D,ae,Ie,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?ue&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,de.width,de.height,me,ze,de.data):t.texImage2D(i.TEXTURE_2D,ae,Ie,de.width,de.height,0,me,ze,de.data)}else if(E.isDataArrayTexture)if(F){if(se&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ee,Ie,oe.width,oe.height,oe.depth),ue)if(E.layerUpdates.size>0){let ae=zd(oe.width,oe.height,E.format,E.type);for(let ee of E.layerUpdates){let Re=oe.data.subarray(ee*ae/oe.data.BYTES_PER_ELEMENT,(ee+1)*ae/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ee,oe.width,oe.height,1,me,ze,Re)}E.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,me,ze,oe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ie,oe.width,oe.height,oe.depth,0,me,ze,oe.data);else if(E.isData3DTexture)F?(se&&t.texStorage3D(i.TEXTURE_3D,Ee,Ie,oe.width,oe.height,oe.depth),ue&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,me,ze,oe.data)):t.texImage3D(i.TEXTURE_3D,0,Ie,oe.width,oe.height,oe.depth,0,me,ze,oe.data);else if(E.isFramebufferTexture){if(se)if(F)t.texStorage2D(i.TEXTURE_2D,Ee,Ie,oe.width,oe.height);else{let ae=oe.width,ee=oe.height;for(let Re=0;Re<Ee;Re++)t.texImage2D(i.TEXTURE_2D,Re,Ie,ae,ee,0,me,ze,null),ae>>=1,ee>>=1}}else if(je.length>0){if(F&&se){let ae=yt(je[0]);t.texStorage2D(i.TEXTURE_2D,Ee,Ie,ae.width,ae.height)}for(let ae=0,ee=je.length;ae<ee;ae++)de=je[ae],F?ue&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,me,ze,de):t.texImage2D(i.TEXTURE_2D,ae,Ie,me,ze,de);E.generateMipmaps=!1}else if(F){if(se){let ae=yt(oe);t.texStorage2D(i.TEXTURE_2D,Ee,Ie,ae.width,ae.height)}ue&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,me,ze,oe)}else t.texImage2D(i.TEXTURE_2D,0,Ie,me,ze,oe);m(E)&&p($),Ae.__version=K.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function J(L,E,V){if(E.image.length!==6)return;let $=He(L,E),ie=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+V);let K=n.get(ie);if(ie.version!==K.__version||$===!0){t.activeTexture(i.TEXTURE0+V);let Ae=st.getPrimaries(st.workingColorSpace),he=E.colorSpace===cs?null:st.getPrimaries(E.colorSpace),Te=E.colorSpace===cs||Ae===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let Pe=E.isCompressedTexture||E.image[0].isCompressedTexture,oe=E.image[0]&&E.image[0].isDataTexture,me=[];for(let ee=0;ee<6;ee++)!Pe&&!oe?me[ee]=b(E.image[ee],!0,s.maxCubemapSize):me[ee]=oe?E.image[ee].image:E.image[ee],me[ee]=zt(E,me[ee]);let ze=me[0],Ie=r.convert(E.format,E.colorSpace),de=r.convert(E.type),je=_(E.internalFormat,Ie,de,E.colorSpace),F=E.isVideoTexture!==!0,se=K.__version===void 0||$===!0,ue=ie.dataReady,Ee=y(E,ze);ge(i.TEXTURE_CUBE_MAP,E);let ae;if(Pe){F&&se&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ee,je,ze.width,ze.height);for(let ee=0;ee<6;ee++){ae=me[ee].mipmaps;for(let Re=0;Re<ae.length;Re++){let Ke=ae[Re];E.format!==Fn?Ie!==null?F?ue&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Re,0,0,Ke.width,Ke.height,Ie,Ke.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Re,je,Ke.width,Ke.height,0,Ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Re,0,0,Ke.width,Ke.height,Ie,de,Ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Re,je,Ke.width,Ke.height,0,Ie,de,Ke.data)}}}else{if(ae=E.mipmaps,F&&se){ae.length>0&&Ee++;let ee=yt(me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ee,je,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(oe){F?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,me[ee].width,me[ee].height,Ie,de,me[ee].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,je,me[ee].width,me[ee].height,0,Ie,de,me[ee].data);for(let Re=0;Re<ae.length;Re++){let It=ae[Re].image[ee].image;F?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Re+1,0,0,It.width,It.height,Ie,de,It.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Re+1,je,It.width,It.height,0,Ie,de,It.data)}}else{F?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Ie,de,me[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,je,Ie,de,me[ee]);for(let Re=0;Re<ae.length;Re++){let Ke=ae[Re];F?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Re+1,0,0,Ie,de,Ke.image[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Re+1,je,Ie,de,Ke.image[ee])}}}m(E)&&p(i.TEXTURE_CUBE_MAP),K.__version=ie.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function ce(L,E,V,$,ie,K){let Ae=r.convert(V.format,V.colorSpace),he=r.convert(V.type),Te=_(V.internalFormat,Ae,he,V.colorSpace),Pe=n.get(E),oe=n.get(V);if(oe.__renderTarget=E,!Pe.__hasExternalTextures){let me=Math.max(1,E.width>>K),ze=Math.max(1,E.height>>K);ie===i.TEXTURE_3D||ie===i.TEXTURE_2D_ARRAY?t.texImage3D(ie,K,Te,me,ze,E.depth,0,Ae,he,null):t.texImage2D(ie,K,Te,me,ze,0,Ae,he,null)}t.bindFramebuffer(i.FRAMEBUFFER,L),Se(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,ie,oe.__webglTexture,0,vt(E)):(ie===i.TEXTURE_2D||ie>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,ie,oe.__webglTexture,K),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ve(L,E,V){if(i.bindRenderbuffer(i.RENDERBUFFER,L),E.depthBuffer){let $=E.depthTexture,ie=$&&$.isDepthTexture?$.type:null,K=v(E.stencilBuffer,ie),Ae=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=vt(E);Se(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,he,K,E.width,E.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,he,K,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,K,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ae,i.RENDERBUFFER,L)}else{let $=E.textures;for(let ie=0;ie<$.length;ie++){let K=$[ie],Ae=r.convert(K.format,K.colorSpace),he=r.convert(K.type),Te=_(K.internalFormat,Ae,he,K.colorSpace),Pe=vt(E);V&&Se(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Pe,Te,E.width,E.height):Se(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Pe,Te,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Te,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function fe(L,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let $=n.get(E.depthTexture);$.__renderTarget=E,(!$.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),B(E.depthTexture,0);let ie=$.__webglTexture,K=vt(E);if(E.depthTexture.format===ra)Se(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0);else if(E.depthTexture.format===Ls)Se(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function We(L){let E=n.get(L),V=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){let $=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),$){let ie=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,$.removeEventListener("dispose",ie)};$.addEventListener("dispose",ie),E.__depthDisposeCallback=ie}E.__boundDepthTexture=$}if(L.depthTexture&&!E.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");let $=L.texture.mipmaps;$&&$.length>0?fe(E.__webglFramebuffer[0],L):fe(E.__webglFramebuffer,L)}else if(V){E.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[$]),E.__webglDepthbuffer[$]===void 0)E.__webglDepthbuffer[$]=i.createRenderbuffer(),ve(E.__webglDepthbuffer[$],L,!1);else{let ie=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=E.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,K)}}else{let $=L.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),ve(E.__webglDepthbuffer,L,!1);else{let ie=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,K)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function wt(L,E,V){let $=n.get(L);E!==void 0&&ce($.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&We(L)}function U(L){let E=L.texture,V=n.get(L),$=n.get(E);L.addEventListener("dispose",w);let ie=L.textures,K=L.isWebGLCubeRenderTarget===!0,Ae=ie.length>1;if(Ae||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=E.version,a.memory.textures++),K){V.__webglFramebuffer=[];for(let he=0;he<6;he++)if(E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer[he]=[];for(let Te=0;Te<E.mipmaps.length;Te++)V.__webglFramebuffer[he][Te]=i.createFramebuffer()}else V.__webglFramebuffer[he]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer=[];for(let he=0;he<E.mipmaps.length;he++)V.__webglFramebuffer[he]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(Ae)for(let he=0,Te=ie.length;he<Te;he++){let Pe=n.get(ie[he]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=i.createTexture(),a.memory.textures++)}if(L.samples>0&&Se(L)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let he=0;he<ie.length;he++){let Te=ie[he];V.__webglColorRenderbuffer[he]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[he]);let Pe=r.convert(Te.format,Te.colorSpace),oe=r.convert(Te.type),me=_(Te.internalFormat,Pe,oe,Te.colorSpace,L.isXRRenderTarget===!0),ze=vt(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,ze,me,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,V.__webglColorRenderbuffer[he])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),ve(V.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),ge(i.TEXTURE_CUBE_MAP,E);for(let he=0;he<6;he++)if(E.mipmaps&&E.mipmaps.length>0)for(let Te=0;Te<E.mipmaps.length;Te++)ce(V.__webglFramebuffer[he][Te],L,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Te);else ce(V.__webglFramebuffer[he],L,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(E)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let he=0,Te=ie.length;he<Te;he++){let Pe=ie[he],oe=n.get(Pe),me=i.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(me=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(me,oe.__webglTexture),ge(me,Pe),ce(V.__webglFramebuffer,L,Pe,i.COLOR_ATTACHMENT0+he,me,0),m(Pe)&&p(me)}t.unbindTexture()}else{let he=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(he=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(he,$.__webglTexture),ge(he,E),E.mipmaps&&E.mipmaps.length>0)for(let Te=0;Te<E.mipmaps.length;Te++)ce(V.__webglFramebuffer[Te],L,E,i.COLOR_ATTACHMENT0,he,Te);else ce(V.__webglFramebuffer,L,E,i.COLOR_ATTACHMENT0,he,0);m(E)&&p(he),t.unbindTexture()}L.depthBuffer&&We(L)}function it(L){let E=L.textures;for(let V=0,$=E.length;V<$;V++){let ie=E[V];if(m(ie)){let K=x(L),Ae=n.get(ie).__webglTexture;t.bindTexture(K,Ae),p(K),t.unbindTexture()}}}let De=[],Ne=[];function ye(L){if(L.samples>0){if(Se(L)===!1){let E=L.textures,V=L.width,$=L.height,ie=i.COLOR_BUFFER_BIT,K=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ae=n.get(L),he=E.length>1;if(he)for(let Pe=0;Pe<E.length;Pe++)t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer);let Te=L.texture.mipmaps;Te&&Te.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let Pe=0;Pe<E.length;Pe++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ie|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ie|=i.STENCIL_BUFFER_BIT)),he){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[Pe]);let oe=n.get(E[Pe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,oe,0)}i.blitFramebuffer(0,0,V,$,0,0,V,$,ie,i.NEAREST),c===!0&&(De.length=0,Ne.length=0,De.push(i.COLOR_ATTACHMENT0+Pe),L.depthBuffer&&L.resolveDepthBuffer===!1&&(De.push(K),Ne.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ne)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,De))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),he)for(let Pe=0;Pe<E.length;Pe++){t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[Pe]);let oe=n.get(E[Pe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.TEXTURE_2D,oe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&c){let E=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function vt(L){return Math.min(s.maxSamples,L.samples)}function Se(L){let E=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Oe(L){let E=a.render.frame;u.get(L)!==E&&(u.set(L,E),L.update())}function zt(L,E){let V=L.colorSpace,$=L.format,ie=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||V!==bn&&V!==cs&&(st.getTransfer(V)===mt?($!==Fn||ie!==Zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),E}function yt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(l.width=L.naturalWidth||L.width,l.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(l.width=L.displayWidth,l.height=L.displayHeight):(l.width=L.width,l.height=L.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=D,this.setTexture2D=B,this.setTexture2DArray=G,this.setTexture3D=Z,this.setTextureCube=O,this.rebindTextures=wt,this.setupRenderTarget=U,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=Se}function NS(i,e){function t(n,s=cs){let r,a=st.getTransfer(s);if(n===Zn)return i.UNSIGNED_BYTE;if(n===th)return i.UNSIGNED_SHORT_4_4_4_4;if(n===nh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ed)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ad)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===wd)return i.BYTE;if(n===Td)return i.SHORT;if(n===Sa)return i.UNSIGNED_SHORT;if(n===eh)return i.INT;if(n===Is)return i.UNSIGNED_INT;if(n===li)return i.FLOAT;if(n===on)return i.HALF_FLOAT;if(n===Cd)return i.ALPHA;if(n===Rd)return i.RGB;if(n===Fn)return i.RGBA;if(n===ra)return i.DEPTH_COMPONENT;if(n===Ls)return i.DEPTH_STENCIL;if(n===ih)return i.RED;if(n===sh)return i.RED_INTEGER;if(n===Pd)return i.RG;if(n===rh)return i.RG_INTEGER;if(n===ah)return i.RGBA_INTEGER;if(n===jo||n===Xo||n===qo||n===Yo)if(a===mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===jo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===qo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===jo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Xo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===qo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Yo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===oh||n===lh||n===ch||n===hh)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===oh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===lh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ch)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===hh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===uh||n===dh||n===fh)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===uh||n===dh)return a===mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===fh)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ph||n===mh||n===gh||n===bh||n===vh||n===xh||n===_h||n===yh||n===Sh||n===Mh||n===wh||n===Th||n===Eh||n===Ah)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ph)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===mh)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===gh)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===bh)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===vh)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===xh)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===_h)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===yh)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Sh)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Mh)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===wh)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Th)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Eh)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ah)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ch||n===Rh||n===Ph)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ch)return a===mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Rh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ph)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ih||n===Dh||n===Lh||n===Uh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ih)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Dh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Lh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Uh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ds?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var FS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,OS=`
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

}`,Qd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ao(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Et({vertexShader:FS,fragmentShader:OS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ct(new ai(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ef=class extends Ai{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,g=null,b=typeof XRWebGLBinding<"u",m=new Qd,p={},x=t.getContextAttributes(),_=null,v=null,y=[],T=[],w=new ne,C=null,M=new Qt;M.viewport=new pt;let S=new Qt;S.viewport=new pt;let I=[M,S],D=new kc,k=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let J=y[Y];return J===void 0&&(J=new ca,y[Y]=J),J.getTargetRaySpace()},this.getControllerGrip=function(Y){let J=y[Y];return J===void 0&&(J=new ca,y[Y]=J),J.getGripSpace()},this.getHand=function(Y){let J=y[Y];return J===void 0&&(J=new ca,y[Y]=J),J.getHandSpace()};function B(Y){let J=T.indexOf(Y.inputSource);if(J===-1)return;let ce=y[J];ce!==void 0&&(ce.update(Y.inputSource,Y.frame,l||a),ce.dispatchEvent({type:Y.type,data:Y.inputSource}))}function G(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",Z);for(let Y=0;Y<y.length;Y++){let J=T[Y];J!==null&&(T[Y]=null,y[Y].disconnect(J))}k=null,W=null,m.reset();for(let Y in p)delete p[Y];e.setRenderTarget(_),f=null,d=null,h=null,s=null,v=null,we.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&b&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(_=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",G),s.addEventListener("inputsourceschange",Z),x.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(w),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let ce=null,ve=null,fe=null;x.depth&&(fe=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=x.stencil?Ls:ra,ve=x.stencil?Ds:Is);let We={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(We),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new Xt(d.textureWidth,d.textureHeight,{format:Fn,type:Zn,depthTexture:new rr(d.textureWidth,d.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let ce={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ce),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Xt(f.framebufferWidth,f.framebufferHeight,{format:Fn,type:Zn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),we.setContext(s),we.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Z(Y){for(let J=0;J<Y.removed.length;J++){let ce=Y.removed[J],ve=T.indexOf(ce);ve>=0&&(T[ve]=null,y[ve].disconnect(ce))}for(let J=0;J<Y.added.length;J++){let ce=Y.added[J],ve=T.indexOf(ce);if(ve===-1){for(let We=0;We<y.length;We++)if(We>=T.length){T.push(ce),ve=We;break}else if(T[We]===null){T[We]=ce,ve=We;break}if(ve===-1)break}let fe=y[ve];fe&&fe.connect(ce)}}let O=new P,j=new P;function Q(Y,J,ce){O.setFromMatrixPosition(J.matrixWorld),j.setFromMatrixPosition(ce.matrixWorld);let ve=O.distanceTo(j),fe=J.projectionMatrix.elements,We=ce.projectionMatrix.elements,wt=fe[14]/(fe[10]-1),U=fe[14]/(fe[10]+1),it=(fe[9]+1)/fe[5],De=(fe[9]-1)/fe[5],Ne=(fe[8]-1)/fe[0],ye=(We[8]+1)/We[0],vt=wt*Ne,Se=wt*ye,Oe=ve/(-Ne+ye),zt=Oe*-Ne;if(J.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(zt),Y.translateZ(Oe),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),fe[10]===-1)Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{let yt=wt+Oe,L=U+Oe,E=vt-zt,V=Se+(ve-zt),$=it*U/L*yt,ie=De*U/L*yt;Y.projectionMatrix.makePerspective(E,V,$,ie,yt,L),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function re(Y,J){J===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(J.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let J=Y.near,ce=Y.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(ce=m.depthFar)),D.near=S.near=M.near=J,D.far=S.far=M.far=ce,(k!==D.near||W!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),k=D.near,W=D.far),D.layers.mask=Y.layers.mask|6,M.layers.mask=D.layers.mask&3,S.layers.mask=D.layers.mask&5;let ve=Y.parent,fe=D.cameras;re(D,ve);for(let We=0;We<fe.length;We++)re(fe[We],ve);fe.length===2?Q(D,M,S):D.projectionMatrix.copy(M.projectionMatrix),ge(Y,D,ve)};function ge(Y,J,ce){ce===null?Y.matrix.copy(J.matrixWorld):(Y.matrix.copy(ce.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(J.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=tr*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Y){c=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function(Y){return p[Y]};let He=null;function ke(Y,J){if(u=J.getViewerPose(l||a),g=J,u!==null){let ce=u.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let ve=!1;ce.length!==D.cameras.length&&(D.cameras.length=0,ve=!0);for(let U=0;U<ce.length;U++){let it=ce[U],De=null;if(f!==null)De=f.getViewport(it);else{let ye=h.getViewSubImage(d,it);De=ye.viewport,U===0&&(e.setRenderTargetTextures(v,ye.colorTexture,ye.depthStencilTexture),e.setRenderTarget(v))}let Ne=I[U];Ne===void 0&&(Ne=new Qt,Ne.layers.enable(U),Ne.viewport=new pt,I[U]=Ne),Ne.matrix.fromArray(it.transform.matrix),Ne.matrix.decompose(Ne.position,Ne.quaternion,Ne.scale),Ne.projectionMatrix.fromArray(it.projectionMatrix),Ne.projectionMatrixInverse.copy(Ne.projectionMatrix).invert(),Ne.viewport.set(De.x,De.y,De.width,De.height),U===0&&(D.matrix.copy(Ne.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),ve===!0&&D.cameras.push(Ne)}let fe=s.enabledFeatures;if(fe&&fe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){h=n.getBinding();let U=h.getDepthInformation(ce[0]);U&&U.isValid&&U.texture&&m.init(U,s.renderState)}if(fe&&fe.includes("camera-access")&&b){e.state.unbindTexture(),h=n.getBinding();for(let U=0;U<ce.length;U++){let it=ce[U].camera;if(it){let De=p[it];De||(De=new Ao,p[it]=De);let Ne=h.getCameraImage(it);De.sourceTexture=Ne}}}}for(let ce=0;ce<y.length;ce++){let ve=T[ce],fe=y[ce];ve!==null&&fe!==void 0&&fe.update(ve,J,l||a)}He&&He(Y,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}let we=new Fg;we.setAnimationLoop(ke),this.setAnimationLoop=function(Y){He=Y},this.dispose=function(){}}},vr=new kn,BS=new Le;function zS(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Nd(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,x,_,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),b(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,x,_):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Nn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Nn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let x=e.get(p),_=x.envMap,v=x.envMapRotation;_&&(m.envMap.value=_,vr.copy(v),vr.x*=-1,vr.y*=-1,vr.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(vr.y*=-1,vr.z*=-1),m.envMapRotation.value.setFromMatrix4(BS.makeRotationFromEuler(vr)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,x,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=_*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Nn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function b(m,p){let x=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function HS(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,_){let v=_.program;n.uniformBlockBinding(x,v)}function l(x,_){let v=s[x.id];v===void 0&&(g(x),v=u(x),s[x.id]=v,x.addEventListener("dispose",m));let y=_.program;n.updateUBOMapping(x,y);let T=e.render.frame;r[x.id]!==T&&(d(x),r[x.id]=T)}function u(x){let _=h();x.__bindingPointIndex=_;let v=i.createBuffer(),y=x.__size,T=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,y,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,v),v}function h(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){let _=s[x.id],v=x.uniforms,y=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let T=0,w=v.length;T<w;T++){let C=Array.isArray(v[T])?v[T]:[v[T]];for(let M=0,S=C.length;M<S;M++){let I=C[M];if(f(I,T,M,y)===!0){let D=I.__offset,k=Array.isArray(I.value)?I.value:[I.value],W=0;for(let B=0;B<k.length;B++){let G=k[B],Z=b(G);typeof G=="number"||typeof G=="boolean"?(I.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,D+W,I.__data)):G.isMatrix3?(I.__data[0]=G.elements[0],I.__data[1]=G.elements[1],I.__data[2]=G.elements[2],I.__data[3]=0,I.__data[4]=G.elements[3],I.__data[5]=G.elements[4],I.__data[6]=G.elements[5],I.__data[7]=0,I.__data[8]=G.elements[6],I.__data[9]=G.elements[7],I.__data[10]=G.elements[8],I.__data[11]=0):(G.toArray(I.__data,W),W+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,D,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(x,_,v,y){let T=x.value,w=_+"_"+v;if(y[w]===void 0)return typeof T=="number"||typeof T=="boolean"?y[w]=T:y[w]=T.clone(),!0;{let C=y[w];if(typeof T=="number"||typeof T=="boolean"){if(C!==T)return y[w]=T,!0}else if(C.equals(T)===!1)return C.copy(T),!0}return!1}function g(x){let _=x.uniforms,v=0,y=16;for(let w=0,C=_.length;w<C;w++){let M=Array.isArray(_[w])?_[w]:[_[w]];for(let S=0,I=M.length;S<I;S++){let D=M[S],k=Array.isArray(D.value)?D.value:[D.value];for(let W=0,B=k.length;W<B;W++){let G=k[W],Z=b(G),O=v%y,j=O%Z.boundary,Q=O+j;v+=j,Q!==0&&y-Q<Z.storage&&(v+=y-Q),D.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=v,v+=Z.storage}}}let T=v%y;return T>0&&(v+=y-T),x.__size=v,x.__cache={},this}function b(x){let _={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),_}function m(x){let _=x.target;_.removeEventListener("dispose",m);let v=a.indexOf(_.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(let x in s)i.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}var Hh=class{constructor(e={}){let{canvas:t=lg(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let g=new Uint32Array(4),b=new Int32Array(4),m=null,p=null,x=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ls,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let v=this,y=!1;this._outputColorSpace=Ht;let T=0,w=0,C=null,M=-1,S=null,I=new pt,D=new pt,k=null,W=new xe(0),B=0,G=t.width,Z=t.height,O=1,j=null,Q=null,re=new pt(0,0,G,Z),ge=new pt(0,0,G,Z),He=!1,ke=new da,we=!1,Y=!1,J=new Le,ce=new P,ve=new pt,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},We=!1;function wt(){return C===null?O:1}let U=n;function it(A,z){return t.getContext(A,z)}try{let A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",ue,!1),t.addEventListener("webglcontextrestored",Ee,!1),t.addEventListener("webglcontextcreationerror",ae,!1),U===null){let z="webgl2";if(U=it(z,A),U===null)throw it(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let De,Ne,ye,vt,Se,Oe,zt,yt,L,E,V,$,ie,K,Ae,he,Te,Pe,oe,me,ze,Ie,de,je;function F(){De=new r1(U),De.init(),Ie=new NS(U,De),Ne=new Jy(U,De,e,Ie),ye=new US(U,De),Ne.reversedDepthBuffer&&d&&ye.buffers.depth.setReversed(!0),vt=new l1(U),Se=new yS,Oe=new kS(U,De,ye,Se,Ne,Ie,vt),zt=new e1(v),yt=new s1(v),L=new px(U),de=new $y(U,L),E=new a1(U,L,vt,de),V=new h1(U,E,L,vt),oe=new c1(U,Ne,Oe),he=new Qy(Se),$=new _S(v,zt,yt,De,Ne,de,he),ie=new zS(v,Se),K=new MS,Ae=new RS(De),Pe=new Ky(v,zt,yt,ye,V,f,c),Te=new DS(v,V,Ne),je=new HS(U,vt,Ne,ye),me=new Zy(U,De,vt),ze=new o1(U,De,vt),vt.programs=$.programs,v.capabilities=Ne,v.extensions=De,v.properties=Se,v.renderLists=K,v.shadowMap=Te,v.state=ye,v.info=vt}F();let se=new ef(v,U);this.xr=se,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let A=De.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=De.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(A){A!==void 0&&(O=A,this.setSize(G,Z,!1))},this.getSize=function(A){return A.set(G,Z)},this.setSize=function(A,z,X=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=A,Z=z,t.width=Math.floor(A*O),t.height=Math.floor(z*O),X===!0&&(t.style.width=A+"px",t.style.height=z+"px"),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(G*O,Z*O).floor()},this.setDrawingBufferSize=function(A,z,X){G=A,Z=z,O=X,t.width=Math.floor(A*X),t.height=Math.floor(z*X),this.setViewport(0,0,A,z)},this.getCurrentViewport=function(A){return A.copy(I)},this.getViewport=function(A){return A.copy(re)},this.setViewport=function(A,z,X,q){A.isVector4?re.set(A.x,A.y,A.z,A.w):re.set(A,z,X,q),ye.viewport(I.copy(re).multiplyScalar(O).round())},this.getScissor=function(A){return A.copy(ge)},this.setScissor=function(A,z,X,q){A.isVector4?ge.set(A.x,A.y,A.z,A.w):ge.set(A,z,X,q),ye.scissor(D.copy(ge).multiplyScalar(O).round())},this.getScissorTest=function(){return He},this.setScissorTest=function(A){ye.setScissorTest(He=A)},this.setOpaqueSort=function(A){j=A},this.setTransparentSort=function(A){Q=A},this.getClearColor=function(A){return A.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor(...arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha(...arguments)},this.clear=function(A=!0,z=!0,X=!0){let q=0;if(A){let H=!1;if(C!==null){let le=C.texture.format;H=le===ah||le===rh||le===sh}if(H){let le=C.texture.type,be=le===Zn||le===Is||le===Sa||le===Ds||le===th||le===nh,Ce=Pe.getClearColor(),Me=Pe.getClearAlpha(),Ve=Ce.r,Xe=Ce.g,Fe=Ce.b;be?(g[0]=Ve,g[1]=Xe,g[2]=Fe,g[3]=Me,U.clearBufferuiv(U.COLOR,0,g)):(b[0]=Ve,b[1]=Xe,b[2]=Fe,b[3]=Me,U.clearBufferiv(U.COLOR,0,b))}else q|=U.COLOR_BUFFER_BIT}z&&(q|=U.DEPTH_BUFFER_BIT),X&&(q|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ue,!1),t.removeEventListener("webglcontextrestored",Ee,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),Pe.dispose(),K.dispose(),Ae.dispose(),Se.dispose(),zt.dispose(),yt.dispose(),V.dispose(),de.dispose(),je.dispose(),$.dispose(),se.dispose(),se.removeEventListener("sessionstart",wi),se.removeEventListener("sessionend",Vp),Ws.stop()};function ue(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function Ee(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;let A=vt.autoReset,z=Te.enabled,X=Te.autoUpdate,q=Te.needsUpdate,H=Te.type;F(),vt.autoReset=A,Te.enabled=z,Te.autoUpdate=X,Te.needsUpdate=q,Te.type=H}function ae(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ee(A){let z=A.target;z.removeEventListener("dispose",ee),Re(z)}function Re(A){Ke(A),Se.remove(A)}function Ke(A){let z=Se.get(A).programs;z!==void 0&&(z.forEach(function(X){$.releaseProgram(X)}),A.isShaderMaterial&&$.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,X,q,H,le){z===null&&(z=fe);let be=H.isMesh&&H.matrixWorld.determinant()<0,Ce=ev(A,z,X,q,H);ye.setMaterial(q,be);let Me=X.index,Ve=1;if(q.wireframe===!0){if(Me=E.getWireframeAttribute(X),Me===void 0)return;Ve=2}let Xe=X.drawRange,Fe=X.attributes.position,at=Xe.start*Ve,Tt=(Xe.start+Xe.count)*Ve;le!==null&&(at=Math.max(at,le.start*Ve),Tt=Math.min(Tt,(le.start+le.count)*Ve)),Me!==null?(at=Math.max(at,0),Tt=Math.min(Tt,Me.count)):Fe!=null&&(at=Math.max(at,0),Tt=Math.min(Tt,Fe.count));let Yt=Tt-at;if(Yt<0||Yt===1/0)return;de.setup(H,q,Ce,X,Me);let Lt,Rt=me;if(Me!==null&&(Lt=L.get(Me),Rt=ze,Rt.setIndex(Lt)),H.isMesh)q.wireframe===!0?(ye.setLineWidth(q.wireframeLinewidth*wt()),Rt.setMode(U.LINES)):Rt.setMode(U.TRIANGLES);else if(H.isLine){let Be=q.linewidth;Be===void 0&&(Be=1),ye.setLineWidth(Be*wt()),H.isLineSegments?Rt.setMode(U.LINES):H.isLineLoop?Rt.setMode(U.LINE_LOOP):Rt.setMode(U.LINE_STRIP)}else H.isPoints?Rt.setMode(U.POINTS):H.isSprite&&Rt.setMode(U.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)oa("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Rt.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(De.get("WEBGL_multi_draw"))Rt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let Be=H._multiDrawStarts,Gt=H._multiDrawCounts,ft=H._multiDrawCount,Wn=Me?L.get(Me).bytesPerElement:1,Or=Se.get(q).currentProgram.getUniforms();for(let jn=0;jn<ft;jn++)Or.setValue(U,"_gl_DrawID",jn),Rt.render(Be[jn]/Wn,Gt[jn])}else if(H.isInstancedMesh)Rt.renderInstances(at,Yt,H.count);else if(X.isInstancedBufferGeometry){let Be=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Gt=Math.min(X.instanceCount,Be);Rt.renderInstances(at,Yt,Gt)}else Rt.render(at,Yt)};function It(A,z,X){A.transparent===!0&&A.side===Cn&&A.forceSinglePass===!1?(A.side=Nn,A.needsUpdate=!0,kl(A,z,X),A.side=Yn,A.needsUpdate=!0,kl(A,z,X),A.side=Cn):kl(A,z,X)}this.compile=function(A,z,X=null){X===null&&(X=A),p=Ae.get(X),p.init(z),_.push(p),X.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),A!==X&&A.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights();let q=new Set;return A.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let le=H.material;if(le)if(Array.isArray(le))for(let be=0;be<le.length;be++){let Ce=le[be];It(Ce,X,H),q.add(Ce)}else It(le,X,H),q.add(le)}),p=_.pop(),q},this.compileAsync=function(A,z,X=null){let q=this.compile(A,z,X);return new Promise(H=>{function le(){if(q.forEach(function(be){Se.get(be).currentProgram.isReady()&&q.delete(be)}),q.size===0){H(A);return}setTimeout(le,10)}De.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let xt=null;function Wi(A){xt&&xt(A)}function wi(){Ws.stop()}function Vp(){Ws.start()}let Ws=new Fg;Ws.setAnimationLoop(Wi),typeof self<"u"&&Ws.setContext(self),this.setAnimationLoop=function(A){xt=A,se.setAnimationLoop(A),A===null?Ws.stop():Ws.start()},se.addEventListener("sessionstart",wi),se.addEventListener("sessionend",Vp),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(z),z=se.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,z,C),p=Ae.get(A,_.length),p.init(z),_.push(p),J.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),ke.setFromProjectionMatrix(J,_i,z.reversedDepth),Y=this.localClippingEnabled,we=he.init(this.clippingPlanes,Y),m=K.get(A,x.length),m.init(),x.push(m),se.enabled===!0&&se.isPresenting===!0){let le=v.xr.getDepthSensingMesh();le!==null&&Cu(le,z,-1/0,v.sortObjects)}Cu(A,z,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(j,Q),We=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,We&&Pe.addToRenderList(m,A),this.info.render.frame++,we===!0&&he.beginShadows();let X=p.state.shadowsArray;Te.render(X,A,z),we===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset();let q=m.opaque,H=m.transmissive;if(p.setupLights(),z.isArrayCamera){let le=z.cameras;if(H.length>0)for(let be=0,Ce=le.length;be<Ce;be++){let Me=le[be];Wp(q,H,A,Me)}We&&Pe.render(A);for(let be=0,Ce=le.length;be<Ce;be++){let Me=le[be];Gp(m,A,Me,Me.viewport)}}else H.length>0&&Wp(q,H,A,z),We&&Pe.render(A),Gp(m,A,z);C!==null&&w===0&&(Oe.updateMultisampleRenderTarget(C),Oe.updateRenderTargetMipmap(C)),A.isScene===!0&&A.onAfterRender(v,A,z),de.resetDefaultState(),M=-1,S=null,_.pop(),_.length>0?(p=_[_.length-1],we===!0&&he.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function Cu(A,z,X,q){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)X=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ke.intersectsSprite(A)){q&&ve.setFromMatrixPosition(A.matrixWorld).applyMatrix4(J);let be=V.update(A),Ce=A.material;Ce.visible&&m.push(A,be,Ce,X,ve.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ke.intersectsObject(A))){let be=V.update(A),Ce=A.material;if(q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ve.copy(A.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),ve.copy(be.boundingSphere.center)),ve.applyMatrix4(A.matrixWorld).applyMatrix4(J)),Array.isArray(Ce)){let Me=be.groups;for(let Ve=0,Xe=Me.length;Ve<Xe;Ve++){let Fe=Me[Ve],at=Ce[Fe.materialIndex];at&&at.visible&&m.push(A,be,at,X,ve.z,Fe)}}else Ce.visible&&m.push(A,be,Ce,X,ve.z,null)}}let le=A.children;for(let be=0,Ce=le.length;be<Ce;be++)Cu(le[be],z,X,q)}function Gp(A,z,X,q){let H=A.opaque,le=A.transmissive,be=A.transparent;p.setupLightsView(X),we===!0&&he.setGlobalState(v.clippingPlanes,X),q&&ye.viewport(I.copy(q)),H.length>0&&Ul(H,z,X),le.length>0&&Ul(le,z,X),be.length>0&&Ul(be,z,X),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function Wp(A,z,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new Xt(1,1,{generateMipmaps:!0,type:De.has("EXT_color_buffer_half_float")||De.has("EXT_color_buffer_float")?on:Zn,minFilter:Si,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace}));let le=p.state.transmissionRenderTarget[q.id],be=q.viewport||I;le.setSize(be.z*v.transmissionResolutionScale,be.w*v.transmissionResolutionScale);let Ce=v.getRenderTarget(),Me=v.getActiveCubeFace(),Ve=v.getActiveMipmapLevel();v.setRenderTarget(le),v.getClearColor(W),B=v.getClearAlpha(),B<1&&v.setClearColor(16777215,.5),v.clear(),We&&Pe.render(X);let Xe=v.toneMapping;v.toneMapping=ls;let Fe=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),we===!0&&he.setGlobalState(v.clippingPlanes,q),Ul(A,X,q),Oe.updateMultisampleRenderTarget(le),Oe.updateRenderTargetMipmap(le),De.has("WEBGL_multisampled_render_to_texture")===!1){let at=!1;for(let Tt=0,Yt=z.length;Tt<Yt;Tt++){let Lt=z[Tt],Rt=Lt.object,Be=Lt.geometry,Gt=Lt.material,ft=Lt.group;if(Gt.side===Cn&&Rt.layers.test(q.layers)){let Wn=Gt.side;Gt.side=Nn,Gt.needsUpdate=!0,jp(Rt,X,q,Be,Gt,ft),Gt.side=Wn,Gt.needsUpdate=!0,at=!0}}at===!0&&(Oe.updateMultisampleRenderTarget(le),Oe.updateRenderTargetMipmap(le))}v.setRenderTarget(Ce,Me,Ve),v.setClearColor(W,B),Fe!==void 0&&(q.viewport=Fe),v.toneMapping=Xe}function Ul(A,z,X){let q=z.isScene===!0?z.overrideMaterial:null;for(let H=0,le=A.length;H<le;H++){let be=A[H],Ce=be.object,Me=be.geometry,Ve=be.group,Xe=be.material;Xe.allowOverride===!0&&q!==null&&(Xe=q),Ce.layers.test(X.layers)&&jp(Ce,z,X,Me,Xe,Ve)}}function jp(A,z,X,q,H,le){A.onBeforeRender(v,z,X,q,H,le),A.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),H.onBeforeRender(v,z,X,q,A,le),H.transparent===!0&&H.side===Cn&&H.forceSinglePass===!1?(H.side=Nn,H.needsUpdate=!0,v.renderBufferDirect(X,z,q,H,A,le),H.side=Yn,H.needsUpdate=!0,v.renderBufferDirect(X,z,q,H,A,le),H.side=Cn):v.renderBufferDirect(X,z,q,H,A,le),A.onAfterRender(v,z,X,q,H,le)}function kl(A,z,X){z.isScene!==!0&&(z=fe);let q=Se.get(A),H=p.state.lights,le=p.state.shadowsArray,be=H.state.version,Ce=$.getParameters(A,H.state,le,z,X),Me=$.getProgramCacheKey(Ce),Ve=q.programs;q.environment=A.isMeshStandardMaterial?z.environment:null,q.fog=z.fog,q.envMap=(A.isMeshStandardMaterial?yt:zt).get(A.envMap||q.environment),q.envMapRotation=q.environment!==null&&A.envMap===null?z.environmentRotation:A.envMapRotation,Ve===void 0&&(A.addEventListener("dispose",ee),Ve=new Map,q.programs=Ve);let Xe=Ve.get(Me);if(Xe!==void 0){if(q.currentProgram===Xe&&q.lightsStateVersion===be)return qp(A,Ce),Xe}else Ce.uniforms=$.getUniforms(A),A.onBeforeCompile(Ce,v),Xe=$.acquireProgram(Ce,Me),Ve.set(Me,Xe),q.uniforms=Ce.uniforms;let Fe=q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Fe.clippingPlanes=he.uniform),qp(A,Ce),q.needsLights=nv(A),q.lightsStateVersion=be,q.needsLights&&(Fe.ambientLightColor.value=H.state.ambient,Fe.lightProbe.value=H.state.probe,Fe.directionalLights.value=H.state.directional,Fe.directionalLightShadows.value=H.state.directionalShadow,Fe.spotLights.value=H.state.spot,Fe.spotLightShadows.value=H.state.spotShadow,Fe.rectAreaLights.value=H.state.rectArea,Fe.ltc_1.value=H.state.rectAreaLTC1,Fe.ltc_2.value=H.state.rectAreaLTC2,Fe.pointLights.value=H.state.point,Fe.pointLightShadows.value=H.state.pointShadow,Fe.hemisphereLights.value=H.state.hemi,Fe.directionalShadowMap.value=H.state.directionalShadowMap,Fe.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Fe.spotShadowMap.value=H.state.spotShadowMap,Fe.spotLightMatrix.value=H.state.spotLightMatrix,Fe.spotLightMap.value=H.state.spotLightMap,Fe.pointShadowMap.value=H.state.pointShadowMap,Fe.pointShadowMatrix.value=H.state.pointShadowMatrix),q.currentProgram=Xe,q.uniformsList=null,Xe}function Xp(A){if(A.uniformsList===null){let z=A.currentProgram.getUniforms();A.uniformsList=Ea.seqWithValue(z.seq,A.uniforms)}return A.uniformsList}function qp(A,z){let X=Se.get(A);X.outputColorSpace=z.outputColorSpace,X.batching=z.batching,X.batchingColor=z.batchingColor,X.instancing=z.instancing,X.instancingColor=z.instancingColor,X.instancingMorph=z.instancingMorph,X.skinning=z.skinning,X.morphTargets=z.morphTargets,X.morphNormals=z.morphNormals,X.morphColors=z.morphColors,X.morphTargetsCount=z.morphTargetsCount,X.numClippingPlanes=z.numClippingPlanes,X.numIntersection=z.numClipIntersection,X.vertexAlphas=z.vertexAlphas,X.vertexTangents=z.vertexTangents,X.toneMapping=z.toneMapping}function ev(A,z,X,q,H){z.isScene!==!0&&(z=fe),Oe.resetTextureUnits();let le=z.fog,be=q.isMeshStandardMaterial?z.environment:null,Ce=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:bn,Me=(q.isMeshStandardMaterial?yt:zt).get(q.envMap||be),Ve=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Xe=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Fe=!!X.morphAttributes.position,at=!!X.morphAttributes.normal,Tt=!!X.morphAttributes.color,Yt=ls;q.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Yt=v.toneMapping);let Lt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Rt=Lt!==void 0?Lt.length:0,Be=Se.get(q),Gt=p.state.lights;if(we===!0&&(Y===!0||A!==S)){let Dn=A===S&&q.id===M;he.setState(q,A,Dn)}let ft=!1;q.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==Gt.state.version||Be.outputColorSpace!==Ce||H.isBatchedMesh&&Be.batching===!1||!H.isBatchedMesh&&Be.batching===!0||H.isBatchedMesh&&Be.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Be.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Be.instancing===!1||!H.isInstancedMesh&&Be.instancing===!0||H.isSkinnedMesh&&Be.skinning===!1||!H.isSkinnedMesh&&Be.skinning===!0||H.isInstancedMesh&&Be.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Be.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Be.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Be.instancingMorph===!1&&H.morphTexture!==null||Be.envMap!==Me||q.fog===!0&&Be.fog!==le||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==he.numPlanes||Be.numIntersection!==he.numIntersection)||Be.vertexAlphas!==Ve||Be.vertexTangents!==Xe||Be.morphTargets!==Fe||Be.morphNormals!==at||Be.morphColors!==Tt||Be.toneMapping!==Yt||Be.morphTargetsCount!==Rt)&&(ft=!0):(ft=!0,Be.__version=q.version);let Wn=Be.currentProgram;ft===!0&&(Wn=kl(q,z,H));let Or=!1,jn=!1,Ya=!1,Wt=Wn.getUniforms(),ti=Be.uniforms;if(ye.useProgram(Wn.program)&&(Or=!0,jn=!0,Ya=!0),q.id!==M&&(M=q.id,jn=!0),Or||S!==A){ye.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Wt.setValue(U,"projectionMatrix",A.projectionMatrix),Wt.setValue(U,"viewMatrix",A.matrixWorldInverse);let Bn=Wt.map.cameraPosition;Bn!==void 0&&Bn.setValue(U,ce.setFromMatrixPosition(A.matrixWorld)),Ne.logarithmicDepthBuffer&&Wt.setValue(U,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Wt.setValue(U,"isOrthographic",A.isOrthographicCamera===!0),S!==A&&(S=A,jn=!0,Ya=!0)}if(H.isSkinnedMesh){Wt.setOptional(U,H,"bindMatrix"),Wt.setOptional(U,H,"bindMatrixInverse");let Dn=H.skeleton;Dn&&(Dn.boneTexture===null&&Dn.computeBoneTexture(),Wt.setValue(U,"boneTexture",Dn.boneTexture,Oe))}H.isBatchedMesh&&(Wt.setOptional(U,H,"batchingTexture"),Wt.setValue(U,"batchingTexture",H._matricesTexture,Oe),Wt.setOptional(U,H,"batchingIdTexture"),Wt.setValue(U,"batchingIdTexture",H._indirectTexture,Oe),Wt.setOptional(U,H,"batchingColorTexture"),H._colorsTexture!==null&&Wt.setValue(U,"batchingColorTexture",H._colorsTexture,Oe));let ni=X.morphAttributes;if((ni.position!==void 0||ni.normal!==void 0||ni.color!==void 0)&&oe.update(H,X,Wn),(jn||Be.receiveShadow!==H.receiveShadow)&&(Be.receiveShadow=H.receiveShadow,Wt.setValue(U,"receiveShadow",H.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(ti.envMap.value=Me,ti.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&z.environment!==null&&(ti.envMapIntensity.value=z.environmentIntensity),jn&&(Wt.setValue(U,"toneMappingExposure",v.toneMappingExposure),Be.needsLights&&tv(ti,Ya),le&&q.fog===!0&&ie.refreshFogUniforms(ti,le),ie.refreshMaterialUniforms(ti,q,O,Z,p.state.transmissionRenderTarget[A.id]),Ea.upload(U,Xp(Be),ti,Oe)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Ea.upload(U,Xp(Be),ti,Oe),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Wt.setValue(U,"center",H.center),Wt.setValue(U,"modelViewMatrix",H.modelViewMatrix),Wt.setValue(U,"normalMatrix",H.normalMatrix),Wt.setValue(U,"modelMatrix",H.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){let Dn=q.uniformsGroups;for(let Bn=0,Ru=Dn.length;Bn<Ru;Bn++){let js=Dn[Bn];je.update(js,Wn),je.bind(js,Wn)}}return Wn}function tv(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function nv(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(A,z,X){let q=Se.get(A);q.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),Se.get(A.texture).__webglTexture=z,Se.get(A.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:X,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,z){let X=Se.get(A);X.__webglFramebuffer=z,X.__useDefaultFramebuffer=z===void 0};let iv=U.createFramebuffer();this.setRenderTarget=function(A,z=0,X=0){C=A,T=z,w=X;let q=!0,H=null,le=!1,be=!1;if(A){let Me=Se.get(A);if(Me.__useDefaultFramebuffer!==void 0)ye.bindFramebuffer(U.FRAMEBUFFER,null),q=!1;else if(Me.__webglFramebuffer===void 0)Oe.setupRenderTarget(A);else if(Me.__hasExternalTextures)Oe.rebindTextures(A,Se.get(A.texture).__webglTexture,Se.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Fe=A.depthTexture;if(Me.__boundDepthTexture!==Fe){if(Fe!==null&&Se.has(Fe)&&(A.width!==Fe.image.width||A.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Oe.setupDepthRenderbuffer(A)}}let Ve=A.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(be=!0);let Xe=Se.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Xe[z])?H=Xe[z][X]:H=Xe[z],le=!0):A.samples>0&&Oe.useMultisampledRTT(A)===!1?H=Se.get(A).__webglMultisampledFramebuffer:Array.isArray(Xe)?H=Xe[X]:H=Xe,I.copy(A.viewport),D.copy(A.scissor),k=A.scissorTest}else I.copy(re).multiplyScalar(O).floor(),D.copy(ge).multiplyScalar(O).floor(),k=He;if(X!==0&&(H=iv),ye.bindFramebuffer(U.FRAMEBUFFER,H)&&q&&ye.drawBuffers(A,H),ye.viewport(I),ye.scissor(D),ye.setScissorTest(k),le){let Me=Se.get(A.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+z,Me.__webglTexture,X)}else if(be){let Me=z;for(let Ve=0;Ve<A.textures.length;Ve++){let Xe=Se.get(A.textures[Ve]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Ve,Xe.__webglTexture,X,Me)}}else if(A!==null&&X!==0){let Me=Se.get(A.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Me.__webglTexture,X)}M=-1},this.readRenderTargetPixels=function(A,z,X,q,H,le,be,Ce=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Se.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&be!==void 0&&(Me=Me[be]),Me){ye.bindFramebuffer(U.FRAMEBUFFER,Me);try{let Ve=A.textures[Ce],Xe=Ve.format,Fe=Ve.type;if(!Ne.textureFormatReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ne.textureTypeReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-q&&X>=0&&X<=A.height-H&&(A.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ce),U.readPixels(z,X,q,H,Ie.convert(Xe),Ie.convert(Fe),le))}finally{let Ve=C!==null?Se.get(C).__webglFramebuffer:null;ye.bindFramebuffer(U.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(A,z,X,q,H,le,be,Ce=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=Se.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&be!==void 0&&(Me=Me[be]),Me)if(z>=0&&z<=A.width-q&&X>=0&&X<=A.height-H){ye.bindFramebuffer(U.FRAMEBUFFER,Me);let Ve=A.textures[Ce],Xe=Ve.format,Fe=Ve.type;if(!Ne.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ne.textureTypeReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let at=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,at),U.bufferData(U.PIXEL_PACK_BUFFER,le.byteLength,U.STREAM_READ),A.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ce),U.readPixels(z,X,q,H,Ie.convert(Xe),Ie.convert(Fe),0);let Tt=C!==null?Se.get(C).__webglFramebuffer:null;ye.bindFramebuffer(U.FRAMEBUFFER,Tt);let Yt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await cg(U,Yt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,at),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,le),U.deleteBuffer(at),U.deleteSync(Yt),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,z=null,X=0){let q=Math.pow(2,-X),H=Math.floor(A.image.width*q),le=Math.floor(A.image.height*q),be=z!==null?z.x:0,Ce=z!==null?z.y:0;Oe.setTexture2D(A,0),U.copyTexSubImage2D(U.TEXTURE_2D,X,0,0,be,Ce,H,le),ye.unbindTexture()};let sv=U.createFramebuffer(),rv=U.createFramebuffer();this.copyTextureToTexture=function(A,z,X=null,q=null,H=0,le=null){le===null&&(H!==0?(oa("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),le=H,H=0):le=0);let be,Ce,Me,Ve,Xe,Fe,at,Tt,Yt,Lt=A.isCompressedTexture?A.mipmaps[le]:A.image;if(X!==null)be=X.max.x-X.min.x,Ce=X.max.y-X.min.y,Me=X.isBox3?X.max.z-X.min.z:1,Ve=X.min.x,Xe=X.min.y,Fe=X.isBox3?X.min.z:0;else{let ni=Math.pow(2,-H);be=Math.floor(Lt.width*ni),Ce=Math.floor(Lt.height*ni),A.isDataArrayTexture?Me=Lt.depth:A.isData3DTexture?Me=Math.floor(Lt.depth*ni):Me=1,Ve=0,Xe=0,Fe=0}q!==null?(at=q.x,Tt=q.y,Yt=q.z):(at=0,Tt=0,Yt=0);let Rt=Ie.convert(z.format),Be=Ie.convert(z.type),Gt;z.isData3DTexture?(Oe.setTexture3D(z,0),Gt=U.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(Oe.setTexture2DArray(z,0),Gt=U.TEXTURE_2D_ARRAY):(Oe.setTexture2D(z,0),Gt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,z.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,z.unpackAlignment);let ft=U.getParameter(U.UNPACK_ROW_LENGTH),Wn=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Or=U.getParameter(U.UNPACK_SKIP_PIXELS),jn=U.getParameter(U.UNPACK_SKIP_ROWS),Ya=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,Lt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Lt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ve),U.pixelStorei(U.UNPACK_SKIP_ROWS,Xe),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Fe);let Wt=A.isDataArrayTexture||A.isData3DTexture,ti=z.isDataArrayTexture||z.isData3DTexture;if(A.isDepthTexture){let ni=Se.get(A),Dn=Se.get(z),Bn=Se.get(ni.__renderTarget),Ru=Se.get(Dn.__renderTarget);ye.bindFramebuffer(U.READ_FRAMEBUFFER,Bn.__webglFramebuffer),ye.bindFramebuffer(U.DRAW_FRAMEBUFFER,Ru.__webglFramebuffer);for(let js=0;js<Me;js++)Wt&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Se.get(A).__webglTexture,H,Fe+js),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Se.get(z).__webglTexture,le,Yt+js)),U.blitFramebuffer(Ve,Xe,be,Ce,at,Tt,be,Ce,U.DEPTH_BUFFER_BIT,U.NEAREST);ye.bindFramebuffer(U.READ_FRAMEBUFFER,null),ye.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(H!==0||A.isRenderTargetTexture||Se.has(A)){let ni=Se.get(A),Dn=Se.get(z);ye.bindFramebuffer(U.READ_FRAMEBUFFER,sv),ye.bindFramebuffer(U.DRAW_FRAMEBUFFER,rv);for(let Bn=0;Bn<Me;Bn++)Wt?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ni.__webglTexture,H,Fe+Bn):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ni.__webglTexture,H),ti?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Dn.__webglTexture,le,Yt+Bn):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Dn.__webglTexture,le),H!==0?U.blitFramebuffer(Ve,Xe,be,Ce,at,Tt,be,Ce,U.COLOR_BUFFER_BIT,U.NEAREST):ti?U.copyTexSubImage3D(Gt,le,at,Tt,Yt+Bn,Ve,Xe,be,Ce):U.copyTexSubImage2D(Gt,le,at,Tt,Ve,Xe,be,Ce);ye.bindFramebuffer(U.READ_FRAMEBUFFER,null),ye.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else ti?A.isDataTexture||A.isData3DTexture?U.texSubImage3D(Gt,le,at,Tt,Yt,be,Ce,Me,Rt,Be,Lt.data):z.isCompressedArrayTexture?U.compressedTexSubImage3D(Gt,le,at,Tt,Yt,be,Ce,Me,Rt,Lt.data):U.texSubImage3D(Gt,le,at,Tt,Yt,be,Ce,Me,Rt,Be,Lt):A.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,le,at,Tt,be,Ce,Rt,Be,Lt.data):A.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,le,at,Tt,Lt.width,Lt.height,Rt,Lt.data):U.texSubImage2D(U.TEXTURE_2D,le,at,Tt,be,Ce,Rt,Be,Lt);U.pixelStorei(U.UNPACK_ROW_LENGTH,ft),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Wn),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Or),U.pixelStorei(U.UNPACK_SKIP_ROWS,jn),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ya),le===0&&z.generateMipmaps&&U.generateMipmap(Gt),ye.unbindTexture()},this.initRenderTarget=function(A){Se.get(A).__webglFramebuffer===void 0&&Oe.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Oe.setTextureCube(A,0):A.isData3DTexture?Oe.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Oe.setTexture2DArray(A,0):Oe.setTexture2D(A,0),ye.unbindTexture()},this.resetState=function(){T=0,w=0,C=null,ye.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=st._getDrawingBufferColorSpace(e),t.unpackColorSpace=st._getUnpackColorSpace()}};var Jo=new P;function ci(i,e,t,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;Jo.copy(e),Jo[n]=0,Jo.normalize();let l=.5*a/(a+o),u=1-Jo.angleTo(i)/c;return Math.sign(Jo[t])===1?u*l:o/(a+o)+l+l*(1-u)}var Ca=class i extends Ms{constructor(e=1,t=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let c=new P,l=new P,u=new P(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,g=h.length/6,b=new P,m=.5/a;for(let p=0,x=0;p<h.length;p+=3,x+=2)switch(c.fromArray(h,p),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),h[p+0]=u.x*Math.sign(c.x)+l.x*r,h[p+1]=u.y*Math.sign(c.y)+l.y*r,h[p+2]=u.z*Math.sign(c.z)+l.z*r,d[p+0]=l.x,d[p+1]=l.y,d[p+2]=l.z,Math.floor(p/g)){case 0:b.set(1,0,0),f[x+0]=ci(b,l,"z","y",r,n),f[x+1]=1-ci(b,l,"y","z",r,t);break;case 1:b.set(-1,0,0),f[x+0]=1-ci(b,l,"z","y",r,n),f[x+1]=1-ci(b,l,"y","z",r,t);break;case 2:b.set(0,1,0),f[x+0]=1-ci(b,l,"x","z",r,e),f[x+1]=ci(b,l,"z","x",r,n);break;case 3:b.set(0,-1,0),f[x+0]=1-ci(b,l,"x","z",r,e),f[x+1]=1-ci(b,l,"z","x",r,n);break;case 4:b.set(0,0,1),f[x+0]=1-ci(b,l,"x","y",r,e),f[x+1]=1-ci(b,l,"y","x",r,t);break;case 5:b.set(0,0,-1),f[x+0]=ci(b,l,"x","y",r,e),f[x+1]=1-ci(b,l,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var Vg={type:"change"},sf={type:"start"},Wg={type:"end"},Wh=new Qi,Gg=new si,VS=Math.cos(70*$o.DEG2RAD),hn=new P,Gn=2*Math.PI,At={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},nf=1e-6,jh=class extends Ho{constructor(e,t=null){super(e,t),this.state=At.NONE,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Rs.ROTATE,MIDDLE:Rs.DOLLY,RIGHT:Rs.PAN},this.touches={ONE:Ps.ROTATE,TWO:Ps.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new Ut,this._lastTargetPosition=new P,this._quat=new Ut().setFromUnitVectors(e.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new xa,this._sphericalDelta=new xa,this._scale=1,this._panOffset=new P,this._rotateStart=new ne,this._rotateEnd=new ne,this._rotateDelta=new ne,this._panStart=new ne,this._panEnd=new ne,this._panDelta=new ne,this._dollyStart=new ne,this._dollyEnd=new ne,this._dollyDelta=new ne,this._dollyDirection=new P,this._mouse=new ne,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=WS.bind(this),this._onPointerDown=GS.bind(this),this._onPointerUp=jS.bind(this),this._onContextMenu=JS.bind(this),this._onMouseWheel=YS.bind(this),this._onKeyDown=KS.bind(this),this._onTouchStart=$S.bind(this),this._onTouchMove=ZS.bind(this),this._onMouseDown=XS.bind(this),this._onMouseMove=qS.bind(this),this._interceptControlDown=QS.bind(this),this._interceptControlUp=eM.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Vg),this.update(),this.state=At.NONE}update(e=null){let t=this.object.position;hn.copy(t).sub(this.target),hn.applyQuaternion(this._quat),this._spherical.setFromVector3(hn),this.autoRotate&&this.state===At.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Gn:n>Math.PI&&(n-=Gn),s<-Math.PI?s+=Gn:s>Math.PI&&(s-=Gn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(hn.setFromSpherical(this._spherical),hn.applyQuaternion(this._quatInverse),t.copy(this.target).add(hn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=hn.length();a=this._clampDistance(o*this._scale);let c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let o=new P(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new P(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=hn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Wh.origin.copy(this.object.position),Wh.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Wh.direction))<VS?this.object.lookAt(this.target):(Gg.setFromNormalAndCoplanarPoint(this.object.up,this.target),Wh.intersectPlane(Gg,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>nf||8*(1-this._lastQuaternion.dot(this.object.quaternion))>nf||this._lastTargetPosition.distanceToSquared(this.target)>nf?(this.dispatchEvent(Vg),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Gn/60*this.autoRotateSpeed*e:Gn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){hn.setFromMatrixColumn(t,0),hn.multiplyScalar(-e),this._panOffset.add(hn)}_panUp(e,t){this.screenSpacePanning===!0?hn.setFromMatrixColumn(t,1):(hn.setFromMatrixColumn(t,0),hn.crossVectors(this.object.up,hn)),hn.multiplyScalar(e),this._panOffset.add(hn)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;hn.copy(s).sub(this.target);let r=hn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Gn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Gn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Gn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Gn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ne,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function GS(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function WS(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function jS(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Wg),this.state=At.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function XS(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Rs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=At.DOLLY;break;case Rs.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=At.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=At.ROTATE}break;case Rs.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=At.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=At.PAN}break;default:this.state=At.NONE}this.state!==At.NONE&&this.dispatchEvent(sf)}function qS(i){switch(this.state){case At.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case At.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case At.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function YS(i){this.enabled===!1||this.enableZoom===!1||this.state!==At.NONE||(i.preventDefault(),this.dispatchEvent(sf),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Wg))}function KS(i){this.enabled!==!1&&this._handleKeyDown(i)}function $S(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Ps.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=At.TOUCH_ROTATE;break;case Ps.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=At.TOUCH_PAN;break;default:this.state=At.NONE}break;case 2:switch(this.touches.TWO){case Ps.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=At.TOUCH_DOLLY_PAN;break;case Ps.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=At.TOUCH_DOLLY_ROTATE;break;default:this.state=At.NONE}break;default:this.state=At.NONE}this.state!==At.NONE&&this.dispatchEvent(sf)}function ZS(i){switch(this._trackPointer(i),this.state){case At.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case At.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case At.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case At.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=At.NONE}}function JS(i){this.enabled!==!1&&i.preventDefault()}function QS(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function eM(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Ni={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var _n=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},tM=new as(-1,1,1,-1,0,1),rf=class extends Nt{constructor(){super(),this.setAttribute("position",new nt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new nt([0,2,0,0,2,0],2))}},nM=new rf,hi=class{constructor(e){this._mesh=new ct(nM,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,tM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Ra=class extends _n{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Et?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=xn.clone(e.uniforms),this.material=new Et({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new hi(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Qo=class extends _n{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Xh=class extends _n{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var qh=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ne);this._width=n.width,this._height=n.height,t=new Xt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:on}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ra(Ni),this.copyPass.material.blending=$t,this.clock=new zo}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Qo!==void 0&&(a instanceof Qo?n=!0:a instanceof Xh&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ne);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Yh=class extends _n{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new xe}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var jg={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new xe(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Pa=class i extends _n{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new ne(e.x,e.y):new ne(256,256),this.clearColor=new xe(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Xt(r,a,{type:on}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let h=new Xt(r,a,{type:on});h.texture.name="UnrealBloomPass.h"+u,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);let d=new Xt(r,a,{type:on});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}let o=jg;this.highPassUniforms=xn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Et({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ne(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=xn.clone(Ni.uniforms),this.blendMaterial=new Et({uniforms:this.copyUniforms,vertexShader:Ni.vertexShader,fragmentShader:Ni.fragmentShader,blending:ur,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new xe,this._oldClearAlpha=1,this._basic=new tn,this._fsQuad=new hi(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ne(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Et({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ne(.5,.5)},direction:{value:new ne(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}_getCompositeMaterial(e){return new Et({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Pa.BlurDirectionX=new ne(1,0);Pa.BlurDirectionY=new ne(0,1);var el={name:"BokehShader",defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tColor:{value:null},tDepth:{value:null},focus:{value:1},aspect:{value:1},aperture:{value:.025},maxblur:{value:.01},nearClip:{value:1},farClip:{value:1e3}},vertexShader:`

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

		}`};var Kh=class extends _n{constructor(e,t,n){super(),this.scene=e,this.camera=t;let s=n.focus!==void 0?n.focus:1,r=n.aperture!==void 0?n.aperture:.025,a=n.maxblur!==void 0?n.maxblur:1;this._renderTargetDepth=new Xt(1,1,{minFilter:jt,magFilter:jt,type:on}),this._renderTargetDepth.texture.name="BokehPass.depth",this._materialDepth=new ba,this._materialDepth.depthPacking=kh,this._materialDepth.blending=$t;let o=xn.clone(el.uniforms);o.tDepth.value=this._renderTargetDepth.texture,o.focus.value=s,o.aspect.value=t.aspect,o.aperture.value=r,o.maxblur.value=a,o.nearClip.value=t.near,o.farClip.value=t.far,this.materialBokeh=new Et({defines:Object.assign({},el.defines),uniforms:o,vertexShader:el.vertexShader,fragmentShader:el.fragmentShader}),this.uniforms=o,this._fsQuad=new hi(this.materialBokeh),this._oldClearColor=new xe}render(e,t,n){this.scene.overrideMaterial=this._materialDepth,e.getClearColor(this._oldClearColor);let s=e.getClearAlpha(),r=e.autoClear;e.autoClear=!1,e.setClearColor(16777215),e.setClearAlpha(1),e.setRenderTarget(this._renderTargetDepth),e.clear(),e.render(this.scene,this.camera),this.uniforms.tColor.value=n.texture,this.uniforms.nearClip.value=this.camera.near,this.uniforms.farClip.value=this.camera.far,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),e.clear(),this._fsQuad.render(e)),this.scene.overrideMaterial=null,e.setClearColor(this._oldClearColor),e.setClearAlpha(s),e.autoClear=r}setSize(e,t){this.materialBokeh.uniforms.aspect.value=e/t,this._renderTargetDepth.setSize(e,t)}dispose(){this._renderTargetDepth.dispose(),this._materialDepth.dispose(),this.materialBokeh.dispose(),this._fsQuad.dispose()}};var tl={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ne},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Le},cameraProjectionMatrixInverse:{value:new Le},cameraWorldMatrix:{value:new Le},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new P(-1,-1,-1)},sceneBoxMax:{value:new P(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif

		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}

		void main() {
			float depth = getDepth(vUv.xy);
			if (depth >= 1.0) {
				discard;
				return;
			}
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {

				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w);
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));

				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));

				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},nl={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},$h={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function Xg(i=5){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=iM(e),n=t.length,s=new Uint8Array(n*4);for(let a=0;a<n;++a){let o=t[a],c=2*Math.PI*o/n,l=new P(Math.cos(c),Math.sin(c),0).normalize();s[a*4]=(l.x*.5+.5)*255,s[a*4+1]=(l.y*.5+.5)*255,s[a*4+2]=127,s[a*4+3]=255}let r=new es(s,e,e);return r.wrapS=zn,r.wrapT=zn,r.needsUpdate=!0,r}function iM(i){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let a=1;a<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=a++;r++,s--}return n}var il={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:af(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ne},cameraProjectionMatrixInverse:{value:new Le},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;

		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);

			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;

			denoised += w * neighborColor;
			totalWeight += w;
		}

		void main() {
			float depth = getDepth(vUv.xy);
			vec3 viewNormal = getViewNormal(vUv);
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);

			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}

			if (totalWeight > 0.) {
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function af(i,e,t){let n=sM(i,e,t),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let a=n[r];s+=`vec3(${a.x}, ${a.y}, ${a.z})${r<i-1?",":")"}`}return s}function sM(i,e,t){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*e*s/i,a=Math.pow(s/(i-1),t);n.push(new P(Math.cos(r),Math.sin(r),a))}return n}var Zh=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,s,r,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,c=Math.floor(e+o),l=Math.floor(t+o),u=(3-Math.sqrt(3))/6,h=(c+l)*u,d=c-h,f=l-h,g=e-d,b=t-f,m,p;g>b?(m=1,p=0):(m=0,p=1);let x=g-m+u,_=b-p+u,v=g-1+2*u,y=b-1+2*u,T=c&255,w=l&255,C=this.perm[T+this.perm[w]]%12,M=this.perm[T+m+this.perm[w+p]]%12,S=this.perm[T+1+this.perm[w+1]]%12,I=.5-g*g-b*b;I<0?n=0:(I*=I,n=I*I*this._dot(this.grad3[C],g,b));let D=.5-x*x-_*_;D<0?s=0:(D*=D,s=D*D*this._dot(this.grad3[M],x,_));let k=.5-v*v-y*y;return k<0?r=0:(k*=k,r=k*k*this._dot(this.grad3[S],v,y)),70*(n+s+r)}noise3d(e,t,n){let s,r,a,o,l=(e+t+n)*.3333333333333333,u=Math.floor(e+l),h=Math.floor(t+l),d=Math.floor(n+l),f=1/6,g=(u+h+d)*f,b=u-g,m=h-g,p=d-g,x=e-b,_=t-m,v=n-p,y,T,w,C,M,S;x>=_?_>=v?(y=1,T=0,w=0,C=1,M=1,S=0):x>=v?(y=1,T=0,w=0,C=1,M=0,S=1):(y=0,T=0,w=1,C=1,M=0,S=1):_<v?(y=0,T=0,w=1,C=0,M=1,S=1):x<v?(y=0,T=1,w=0,C=0,M=1,S=1):(y=0,T=1,w=0,C=1,M=1,S=0);let I=x-y+f,D=_-T+f,k=v-w+f,W=x-C+2*f,B=_-M+2*f,G=v-S+2*f,Z=x-1+3*f,O=_-1+3*f,j=v-1+3*f,Q=u&255,re=h&255,ge=d&255,He=this.perm[Q+this.perm[re+this.perm[ge]]]%12,ke=this.perm[Q+y+this.perm[re+T+this.perm[ge+w]]]%12,we=this.perm[Q+C+this.perm[re+M+this.perm[ge+S]]]%12,Y=this.perm[Q+1+this.perm[re+1+this.perm[ge+1]]]%12,J=.6-x*x-_*_-v*v;J<0?s=0:(J*=J,s=J*J*this._dot3(this.grad3[He],x,_,v));let ce=.6-I*I-D*D-k*k;ce<0?r=0:(ce*=ce,r=ce*ce*this._dot3(this.grad3[ke],I,D,k));let ve=.6-W*W-B*B-G*G;ve<0?a=0:(ve*=ve,a=ve*ve*this._dot3(this.grad3[we],W,B,G));let fe=.6-Z*Z-O*O-j*j;return fe<0?o=0:(fe*=fe,o=fe*fe*this._dot3(this.grad3[Y],Z,O,j)),32*(s+r+a+o)}noise4d(e,t,n,s){let r=this.grad4,a=this.simplex,o=this.perm,c=(Math.sqrt(5)-1)/4,l=(5-Math.sqrt(5))/20,u,h,d,f,g,b=(e+t+n+s)*c,m=Math.floor(e+b),p=Math.floor(t+b),x=Math.floor(n+b),_=Math.floor(s+b),v=(m+p+x+_)*l,y=m-v,T=p-v,w=x-v,C=_-v,M=e-y,S=t-T,I=n-w,D=s-C,k=M>S?32:0,W=M>I?16:0,B=S>I?8:0,G=M>D?4:0,Z=S>D?2:0,O=I>D?1:0,j=k+W+B+G+Z+O,Q=a[j][0]>=3?1:0,re=a[j][1]>=3?1:0,ge=a[j][2]>=3?1:0,He=a[j][3]>=3?1:0,ke=a[j][0]>=2?1:0,we=a[j][1]>=2?1:0,Y=a[j][2]>=2?1:0,J=a[j][3]>=2?1:0,ce=a[j][0]>=1?1:0,ve=a[j][1]>=1?1:0,fe=a[j][2]>=1?1:0,We=a[j][3]>=1?1:0,wt=M-Q+l,U=S-re+l,it=I-ge+l,De=D-He+l,Ne=M-ke+2*l,ye=S-we+2*l,vt=I-Y+2*l,Se=D-J+2*l,Oe=M-ce+3*l,zt=S-ve+3*l,yt=I-fe+3*l,L=D-We+3*l,E=M-1+4*l,V=S-1+4*l,$=I-1+4*l,ie=D-1+4*l,K=m&255,Ae=p&255,he=x&255,Te=_&255,Pe=o[K+o[Ae+o[he+o[Te]]]]%32,oe=o[K+Q+o[Ae+re+o[he+ge+o[Te+He]]]]%32,me=o[K+ke+o[Ae+we+o[he+Y+o[Te+J]]]]%32,ze=o[K+ce+o[Ae+ve+o[he+fe+o[Te+We]]]]%32,Ie=o[K+1+o[Ae+1+o[he+1+o[Te+1]]]]%32,de=.6-M*M-S*S-I*I-D*D;de<0?u=0:(de*=de,u=de*de*this._dot4(r[Pe],M,S,I,D));let je=.6-wt*wt-U*U-it*it-De*De;je<0?h=0:(je*=je,h=je*je*this._dot4(r[oe],wt,U,it,De));let F=.6-Ne*Ne-ye*ye-vt*vt-Se*Se;F<0?d=0:(F*=F,d=F*F*this._dot4(r[me],Ne,ye,vt,Se));let se=.6-Oe*Oe-zt*zt-yt*yt-L*L;se<0?f=0:(se*=se,f=se*se*this._dot4(r[ze],Oe,zt,yt,L));let ue=.6-E*E-V*V-$*$-ie*ie;return ue<0?g=0:(ue*=ue,g=ue*ue*this._dot4(r[Ie],E,V,$,ie)),27*(u+h+d+f+g)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}_dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}};var sl=class i extends _n{constructor(e,t,n=512,s=512,r,a,o){super(),this.width=n,this.height=s,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Xg(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Xt(this.width,this.height,{type:on}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Et({defines:Object.assign({},tl.defines),uniforms:xn.clone(tl.uniforms),vertexShader:tl.vertexShader,fragmentShader:tl.fragmentShader,blending:$t,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Do,this.normalMaterial.blending=$t,this.pdMaterial=new Et({defines:Object.assign({},il.defines),uniforms:xn.clone(il.uniforms),vertexShader:il.vertexShader,fragmentShader:il.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Et({defines:Object.assign({},nl.defines),uniforms:xn.clone(nl.uniforms),vertexShader:nl.vertexShader,fragmentShader:nl.fragmentShader,blending:$t}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Et({uniforms:xn.clone(Ni.uniforms),vertexShader:Ni.vertexShader,fragmentShader:Ni.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Go,blendDst:dr,blendEquation:Kn,blendSrcAlpha:Vo,blendDstAlpha:dr,blendEquationAlpha:Kn}),this.blendMaterial=new Et({uniforms:xn.clone($h.uniforms),vertexShader:$h.vertexShader,fragmentShader:$h.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Fc,blendSrc:Go,blendDst:dr,blendEquation:Kn,blendSrcAlpha:Vo,blendDstAlpha:dr,blendEquationAlpha:Kn}),this._fsQuad=new hi(null),this._originalClearColor=new xe,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new rr,this.depthTexture.format=Ls,this.depthTexture.type=Ds,this.normalRenderTarget=new Xt(this.width,this.height,{minFilter:jt,magFilter:jt,type:on,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=af(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=$t,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=$t,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=$t,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=$t,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=$t,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,n,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,n,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new Zh,n=e*e*4,s=new Uint8Array(n);for(let a=0;a<e;a++)for(let o=0;o<e;o++){let c=a,l=o;s[(a*e+o)*4]=(t.noise(c,l)*.5+.5)*255,s[(a*e+o)*4+1]=(t.noise(c+e,l)*.5+.5)*255,s[(a*e+o)*4+2]=(t.noise(c,l+e)*.5+.5)*255,s[(a*e+o)*4+3]=(t.noise(c+e,l+e)*.5+.5)*255}let r=new es(s,e,e,Fn,Zn);return r.wrapS=zn,r.wrapT=zn,r.needsUpdate=!0,r}};sl.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var rl={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Jh=class extends _n{constructor(){super(),this.uniforms=xn.clone(rl.uniforms),this.material=new Io({name:rl.name,uniforms:this.uniforms,vertexShader:rl.vertexShader,fragmentShader:rl.fragmentShader}),this._fsQuad=new hi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},st.getTransfer(this._outputColorSpace)===mt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===jc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Xc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===qc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===_a?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Kc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===$c?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Yc&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var rM=["human","robot","creature","bot","imported"],aM=["fox","cat","dragon","bear","bunny"],Da=["neutral","happy","sad","angry","surprised","worried","curious","idea"],La=["none","explain","wave","point","point-screen","point-other","shrug","facepalm","think","cheer","clap","thumbsup","crossarms","handsup","nod","headshake","lean","jump","type","press","raise"],Ua=["auto","wide","two","single","cu","ots","screen","custom"],Zg=["auto","static","push","pull","orbit","rise","handheld"],Jg=["alert","calm","success","info"],oM=["bold","box"],lM=["smooth","lowpoly"],cM=["studio","cinematic","golden","pastel","neon","vintage","noir","documentary","dream","vhs"];var yr={species:aM,hairStyle:["shaggy","chunky","short","curly","long","bun","mohawk","bald"],facialHair:["none","stubble","beard","mustache"],eyeStyle:["glossy","classic"],topStyle:["hoodie","tshirt","jacket","suit"],glasses:["none","round","square"],hat:["none","cap","beanie","headphones"]},tu={height:[.8,1.2],build:[.75,1.35],head:[.85,1.3]},hM=["skin","hair","eyes","top","accent","bottom","shoes","screen"],Qh={height:1,build:1,head:1,species:"fox",hairStyle:"shaggy",facialHair:"none",eyeStyle:"glossy",topStyle:"hoodie",glasses:"none",hat:"none",skin:"#c78a65",hair:"#2a211e",eyes:"#1b1514",top:"#2e3a55",accent:"#c9b8a4",bottom:"#1b222c",shoes:"#d6cbb5",screen:"#94f3d4"},qg={creator:{kind:"human",voice:"am_puck",look:{head:1.22,build:.95,height:1}},human:{kind:"human",voice:"af_bella",look:{hairStyle:"long",top:"#b5543f",accent:"#f0d9b5",skin:"#e0a57f",hair:"#5a3422",eyeStyle:"glossy",topStyle:"jacket",bottom:"#2b3346"}},robot:{kind:"robot",voice:"am_echo",look:{top:"#8aa1ad",accent:"#3d4650",screen:"#7fd6ff",bottom:"#3d4650",shoes:"#2b3036"}},creature:{kind:"creature",voice:"af_sky",look:{species:"fox",skin:"#d9793d",hair:"#2a1e1a",top:"#3f6b58",accent:"#f2e2c9",bottom:"#2d3a33",eyeStyle:"glossy"}},bot:{kind:"bot",voice:"af_nova",look:{top:"#4f8fd6",accent:"#2e3440",screen:"#ffd27a"}}},Yg={neutral:{brow:0,raise:0,eye:1,smile:.05,tilt:0,down:0,open:0},happy:{brow:-.05,raise:.03,eye:.74,smile:.9,tilt:.05,down:-.03,open:0},sad:{brow:.32,raise:-.01,eye:.72,smile:-.7,tilt:.06,down:.12,open:0},angry:{brow:-.4,raise:-.04,eye:.78,smile:-.45,tilt:0,down:.06,open:0},surprised:{brow:0,raise:.09,eye:1.28,smile:0,tilt:0,down:-.06,open:.3},worried:{brow:.24,raise:.02,eye:1.05,smile:-.35,tilt:.03,down:.04,open:0},curious:{brow:.1,raise:.05,eye:1.05,smile:.15,tilt:.13,down:0,open:0,asym:1},idea:{brow:-.08,raise:.07,eye:1.12,smile:.55,tilt:-.04,down:-.05,open:0}},Ia={version:3,title:"The Last Connection",duration:30,fps:30,handle:"@embertake",cast:[{id:"Ren",name:"Ren",kind:"human",voice:"am_michael",look:{...Qh,hairStyle:"chunky",eyeStyle:"classic",glasses:"round",skin:"#c78a65",hair:"#292026",eyes:"#211b23",top:"#8364c5",accent:"#b59ad8",bottom:"#19222d"}},{id:"Mica",name:"Mica",kind:"bot",voice:"af_heart",look:{...Qh,top:"#ee704e",accent:"#493d39",screen:"#94f3d4"}}],characterStyle:"smooth",filmLook:"studio",cameraFlow:"cuts",warmth:1,dof:!0,music:!0,sfx:!0,musicVolume:.6,captions:!0,captionStyle:"bold",intro:!0,endTitle:"Made. Together.",endSub:"A little imagination goes a long way.",voiceEngine:"kokoro",voiceData:null,musicData:null,cues:[{id:1,start:1.2,end:4.1,speaker:"Ren",text:"The deadline is in thirty seconds.",emotion:"worried",action:"explain",shot:"auto",pause:.3,screen:{kicker:"CONNECTION LOST",title:"OFFLINE",sub:"THE CLOUD HAS LEFT THE CHAT.",tone:"alert",progress:!1}},{id:2,start:4.4,end:7.3,speaker:"Ren",text:"And the internet just disappeared.",emotion:"surprised",action:"point-screen",shot:"auto",pause:.3},{id:3,start:7.6,end:10.4,speaker:"Mica",text:"Have you tried asking it politely?",emotion:"curious",action:"think",shot:"auto",pause:.5},{id:4,start:10.9,end:13.8,speaker:"Ren",text:"Please. Come. Back.",emotion:"sad",action:"facepalm",shot:"auto",pause:.6},{id:5,start:14.4,end:18,speaker:"Mica",text:"Or\u2026 we could make it right here.",emotion:"idea",action:"raise",shot:"auto",pause:.7,screen:{kicker:"LOCAL STUDIO",title:"Make it here.",sub:"A LITTLE IMAGINATION. ALL YOU NEED.",tone:"calm",progress:!1}},{id:6,start:18.7,end:22,speaker:"Ren",text:"No cloud. Just us?",emotion:"curious",action:"shrug",shot:"auto",pause:.6,screen:{kicker:"LOCAL STUDIO",title:"Rendering\u2026",sub:"NO CLOUD REQUIRED",tone:"info",progress:!0}},{id:7,start:22.6,end:25.5,speaker:"Mica",text:"Just us. And one very big button.",emotion:"happy",action:"press",shot:"auto",pause:.6},{id:8,start:26.1,end:29,speaker:"Ren",text:"Turns out, we were already connected.",emotion:"happy",action:"wave",shot:"auto",pause:.4,screen:{kicker:"TAKE 01 / READY",title:"Made. Together.",sub:"YOUR STORY IS READY TO LEAVE THE DESK",tone:"success",progress:!1}}]},Ft=i=>JSON.parse(JSON.stringify(i)),Je=(i,e,t)=>Math.max(e,Math.min(t,i)),qt=i=>(i=Je(i,0,1),i*i*(3-2*i)),Us=(i,e,t)=>i+(e-i)*t;function Qg(i,e){return i.cues.find(t=>e>=t.start&&e<t.end)||null}var of=new WeakMap;function uM(i){return i.cast.map(e=>e.id)}function dM(i,e){let t=i.cues[e],n=uM(i);for(let s=e-1;s>=0;s--)if(i.cues[s].speaker!==t.speaker)return i.cues[s].speaker;for(let s=e+1;s<i.cues.length;s++)if(i.cues[s].speaker!==t.speaker)return i.cues[s].speaker;return n.find(s=>s!==t.speaker)||t.speaker}function ka(i){if(of.has(i))return of.get(i);let e=[],t={},n=null,s=null;return i.cues.forEach((r,a)=>{let o=dM(i,a);n&&r.start-n.end>1.2&&e.push({start:n.end+.2,shot:"two",subject:n.speaker,other:r.speaker,cue:null});let c=r.shot,l=r.subject||r.speaker;c==="auto"&&(l=r.speaker,a===0?c="wide":r.emotion==="angry"||r.emotion==="surprised"?c="cu":n&&r.speaker!==n.speaker?(t[r.speaker]=(t[r.speaker]||0)+1,c=t[r.speaker]%2?"ots":"single"):c=s?.shot==="single"&&s.subject===l?"cu":"single");let u=a===0?0:Math.max(n.end,r.start-.12),h={start:u,shot:c,subject:l,other:o,cam:r.shot==="custom"?r.cam:void 0,cue:r.id};r.screen&&r.shot==="auto"&&a>0&&r.end-r.start>1.5?(e.push({start:u,shot:"screen",subject:l,other:o,cue:r.id}),e.push({...h,start:r.start+Math.min(1.1,(r.end-r.start)*.45)})):e.push(h),n=r,s=e.at(-1)}),e.length||e.push({start:0,shot:"wide",subject:i.cast[0].id,other:i.cast[1]?.id||i.cast[0].id,cue:null}),e[0].start=0,of.set(i,e),e}function fM(i,e){let t=ka(i),n=0;for(;n+1<t.length&&t[n+1].start<=e;)n++;return{...t[n],index:n,end:t[n+1]?.start??i.duration}}function e0(i,e,t){for(let n of i.cues){if(n.speaker!==t||n.action==="none"||e<n.start-.3||e>n.end+.7)continue;let s=qt((e-n.start+.3)/.45)*(1-qt((e-n.end-.15)/.55));return{name:n.action,k:s,local:e-n.start,dur:n.end-n.start,cue:n}}return{name:"none",k:0,local:0,dur:0,cue:null}}function t0(i,e){if(!i)return 0;let t=e-i.start,n=0,s=i.words?.length?i.words:i.text.split(/\s+/).map((r,a,o)=>[a*(i.end-i.start)/o.length,0,r]);for(let[r,,a]of s){let o=t-r;if(o<0||o>.6)continue;let c=/[!?]$|^[A-Z]{3,}/.test(a)?1:a.replace(/\W/g,"").length>5?.75:.4;n=Math.max(n,c*Math.exp(-o*6)*Math.min(1,o*25))}return n}function n0(i,e,t){let n=null,s=null;for(let l of i.cues)if(l.speaker===t)if(l.start-.15<=e)s=n,n=l;else break;let r=Yg[s?.emotion||"neutral"],a=Yg[n?.emotion||"neutral"],o=n?qt((e-n.start+.15)/.35):1,c={};for(let l of["brow","raise","eye","smile","tilt","down","open"])c[l]=Us(r[l],a[l],o);return c.asym=Us(r.asym||0,a.asym||0,o),c.emotion=n?.emotion||"neutral",c}var pM={kicker:"",title:"",sub:"",tone:"calm",progress:!1};function i0(i,e){let t=i.cues.filter(o=>o.screen);if(!t.length)return{screen:{...pM,title:i.title},since:-9,progress:null,index:0};let n=0;for(;n+1<t.length&&t[n+1].start<=e;)n++;let s=t[n],r=n===0&&e<s.start?-9:s.start,a=t[n+1]?.start??i.duration;return{screen:s.screen,since:r,progress:s.screen.progress?qt((e-s.start)/Math.max(.5,a-s.start-.4)):null,index:n}}function s0(i,e){e=Je(e,0,i.duration);let t=Qg(i,e),n=t?qt((e-t.start)/.3)*qt((t.end-e)/.25):0,s=fM(i,e);return{t:e,cue:t,energy:n,speaker:t?.speaker||null,shot:s.shot,subject:s.subject,other:s.other,cam:s.cam,shotStart:s.start,shotEnd:s.end,shotIndex:s.index,final:i.endTitle?qt((e-(i.duration-1.1))/.7):0}}var eu={X:{open:0,wide:1,round:0,teeth:0,tongue:0},A:{open:.04,wide:.95,round:0,teeth:0,tongue:0},B:{open:.32,wide:1.1,round:0,teeth:1,tongue:0},C:{open:.6,wide:1.12,round:0,teeth:1,tongue:0},D:{open:1,wide:1.18,round:0,teeth:1,tongue:.4},E:{open:.62,wide:.8,round:.6,teeth:0,tongue:0},F:{open:.36,wide:.55,round:1,teeth:0,tongue:0},G:{open:.2,wide:1.02,round:0,teeth:1,tongue:0},H:{open:.5,wide:1.04,round:0,teeth:1,tongue:1}},mM=eu.X;function r0(i,e,t){let n=Qg(i,e);if(!n||n.speaker!==t)return mM;let s=n.visemes;if(!s||!s.length)return null;let r=e-n.start,a=-1;for(let h=0,d=s.length-1;h<=d;){let f=h+d>>1;s[f][0]<=r?(a=f,h=f+1):d=f-1}let o=eu[a<0?"X":s[a][1]],c=eu[a<1?"X":s[a-1][1]],l=a<0?1:qt((r-s[a][0])/.06),u={};for(let h of["open","wide","round","tongue"])u[h]=c[h]+(o[h]-c[h])*l;return u.teeth=l>.5?o.teeth:c.teeth,u}function a0(i,e){if(!i?.words?.length)return-1;let t=e-i.start,n=-1;return i.words.forEach((s,r)=>{s[0]<=t+.03&&(n=r)}),n}var gM=/^(\w+)-(cu|ots)$/;function bM(i){let e={};for(let t of i.cast)e[t.id.toLowerCase()]=t.id,e[t.name.toLowerCase()]=t.id;return e}function o0(i,e){let t=bM(e),n=[],s=null,r={};if(i.split(/\r?\n/).forEach((a,o)=>{let c=a.trim();if(!c)return;let l;if(l=c.match(/^#\s*(title|handle)\s*:\s*(.+)$/i)){r[l[1].toLowerCase()]=l[2].trim();return}if(c.startsWith("#"))return;if(l=c.match(/^>>\s*screen\s*(\w+)?\s*(\+progress)?\s*:\s*(.*)$/i)){let[d="",f="",g=""]=l[3].split("|").map(m=>m.trim()),b=Jg.includes((l[1]||"").toLowerCase())?l[1].toLowerCase():"calm";s={kicker:d.slice(0,40),title:f.slice(0,40),sub:g.slice(0,60),tone:b,progress:!!l[2]};return}if(!(l=c.match(/^([^\[:]+?)\s*(?:\[([^\]]*)\])?\s*:\s*(.+)$/)))throw Error(`Line ${o+1}: use NAME [emotion, action]: text`);let u=t[l[1].trim().toLowerCase()];if(!u)throw Error(`Line ${o+1}: unknown character "${l[1].trim()}". Add them in the Cast tab first.`);let h={id:n.length+1,speaker:u,text:l[3].trim().slice(0,160),emotion:"neutral",action:"none",shot:"auto",pause:.45};for(let d of(l[2]||"").split(",").map(f=>f.trim().toLowerCase()).filter(Boolean)){let f;if(Da.includes(d))h.emotion=d;else if(La.includes(d))h.action=d;else if(d.startsWith("pause"))h.pause=Je(Number(d.split(/[=\s]/).pop())||.45,0,3);else if(f=d.match(/^cam\s*=\s*(-?[\d.]+)\/(-?[\d.]+)\/([\d.]+)(?:\/([\d.]+))?$/))h.shot="custom",h.cam={...h.cam||{},yaw:Number(f[1]),pitch:Number(f[2]),dist:Number(f[3]),lens:Number(f[4]||50)};else if((f=d.match(/^move\s*=\s*(\w+)$/))&&Zg.includes(f[1]))h.cam={yaw:0,pitch:8,dist:4,lens:50,...h.cam||{},move:f[1]};else if((f=d.match(/^(\w+)(?::(.+))?$/))&&Ua.includes(f[1])&&f[1]!=="custom"){if(h.shot=f[1],f[2]){let g=t[f[2]];if(!g)throw Error(`Line ${o+1}: unknown character "${f[2]}" in camera tag.`);h.subject=g}}else if((f=d.match(gM))&&t[f[1]])h.shot=f[2],h.subject=t[f[1]];else if(t[d])h.shot="single",h.subject=t[d];else throw Error(`Line ${o+1}: unknown tag "${d}".`)}h.cam&&h.shot!=="custom"&&(h.shot="custom"),s&&(h.screen=s,s=null),n.push(h)}),!n.length)throw Error("The script has no dialogue lines.");return{meta:r,cues:vM(n)}}function vM(i,e=.8){let t=e;return i.map(n=>{let s=n.text.split(/\s+/).length,r=Math.max(1.1,s*.37+.35),a={...n,start:Kg(t),end:Kg(t+r)};return delete a.visemes,delete a.words,t+=r+(n.pause??.45),a})}function l0(i){let e=[`# title: ${i.title}`,`# handle: ${i.handle}`,""],t=n=>i.cast.find(s=>s.id===n)?.name||n;for(let n of i.cues){n.screen&&e.push(`>> SCREEN ${n.screen.tone}${n.screen.progress?" +progress":""}: ${n.screen.kicker} | ${n.screen.title} | ${n.screen.sub}`);let s=n.shot==="custom"?[`cam=${n.cam.yaw}/${n.cam.pitch}/${n.cam.dist}/${n.cam.lens}`,n.cam.move!=="auto"&&`move=${n.cam.move}`]:[n.shot!=="auto"&&(n.subject&&n.subject!==n.speaker?`${n.shot}:${t(n.subject).toLowerCase()}`:n.shot)],r=[n.emotion,n.action!=="none"&&n.action,...s,Math.abs((n.pause??.45)-.45)>.01&&`pause=${n.pause}`].filter(Boolean);e.push(`${t(n.speaker).toUpperCase()} [${r.join(", ")}]: ${n.text}`)}return e.join(`
`)}var Kg=i=>Math.round(i*1e3)/1e3,xM=/^#[a-f\d]{6}$/i,_M=/^[a-z]{2}_[a-z]+$/,yM=/^[A-Za-z][A-Za-z0-9_]{0,15}$/;function al(i={}){let e={...Qh,...i};for(let[n,[s,r]]of Object.entries(tu)){let a=Number(e[n]);if(!Number.isFinite(a))throw Error(`Invalid character ${n}.`);e[n]=Math.round(Je(a,s,r)*100)/100}for(let[n,s]of Object.entries(yr))if(!s.includes(e[n]))throw Error(`Unknown ${n.replace(/[A-Z]/g,r=>" "+r.toLowerCase())} "${e[n]}".`);for(let n of hM)if(!xM.test(e[n]))throw Error(`Invalid character colour (${n}).`);let t={};for(let n of Object.keys(Qh))t[n]=e[n];return t}function lf(i,e="creator"){let t=qg[e]||qg.creator,n=new Set(i.cast.map(o=>o.id)),s=i.cast.length+1;for(;n.has("char"+s);)s++;let a={creator:"Kai",human:"Maya",robot:"Bolt",creature:"Pip",bot:"Dot"}[e]||"New";return i.cast.some(o=>o.name===a)&&(a+=" "+s),{id:"char"+s,name:a,kind:t.kind,voice:t.voice,look:al(t.look)}}function SM(i){let e=i.humanAppearance||{},t={textured:"chunky"}[e.hairStyle]||e.hairStyle||"chunky",n={shirt:"tshirt"}[e.outfit]||e.outfit||"hoodie";return[{id:"Ren",name:i.names?.Ren||"Ren",kind:["human","robot","creature"].includes(e.kind)?e.kind:"human",voice:i.voices?.Ren||"am_michael",look:{...Ia.cast[0].look,...e.species&&{species:e.species},height:e.height??1,build:e.build??1,head:e.headWidth??1,hairStyle:yr.hairStyle.includes(t)?t:"chunky",topStyle:yr.topStyle.includes(n)?n:"hoodie",facialHair:yr.facialHair.includes(e.facialHair)?e.facialHair:"none",glasses:i.glasses===!1?"none":"round",skin:i.skinColor||"#c78a65",hair:i.hairColor||"#292026",eyes:e.eyeColor||"#211b23",top:i.humanColor||"#8364c5",bottom:e.pantsColor||"#19222d",shoes:e.shoeColor||"#d6cbb5"}},{id:"Mica",name:i.names?.Mica||"Mica",kind:"bot",voice:i.voices?.Mica||"af_heart",look:{...Ia.cast[1].look,top:i.robotColor||"#ee704e",screen:i.faceColor||"#94f3d4"}}]}var $g={ren:["single","Ren"],mica:["single","Mica"],"ren-cu":["cu","Ren"],"mica-cu":["cu","Mica"],"ren-ots":["ots","Ren"],"mica-ots":["ots","Mica"]};function Na(i){if(!i||![1,2,3].includes(i.version))throw Error("This is not an Ember Take project.");if(!Number.isFinite(i.duration)||i.duration<5||i.duration>90)throw Error("Duration must be 5\u201390 seconds.");if(!Array.isArray(i.cues)||i.cues.length>60)throw Error("Use at most 60 dialogue lines.");let e=Ft({...Ia,cues:[]}),t=Ft(i),n={...e,...t,version:3,fps:30};for(let o of["names","voices","humanColor","robotColor","hairColor","skinColor","faceColor","glasses","humanAppearance"])delete n[o];n.title=String(n.title||"Untitled film").slice(0,70),n.handle=String(n.handle??"").slice(0,24);let s=Array.isArray(t.cast)?t.cast:SM(t);if(!s.length||s.length>4)throw Error("A film needs 1 to 4 characters.");let r=new Set;n.cast=s.map((o,c)=>{if(!yM.test(o.id||"")||r.has(o.id))throw Error(`Character ${c+1}: invalid or duplicate id.`);if(r.add(o.id),!rM.includes(o.kind))throw Error(`Character ${c+1}: unknown type "${o.kind}".`);let l={id:o.id,name:String(o.name||o.id).trim().slice(0,16)||o.id,kind:o.kind,voice:_M.test(o.voice)?o.voice:"am_michael",look:al(o.look)};if(o.kind==="imported"){if(!/^[a-z0-9-]{6,40}$/.test(o.asset?.id||""))throw Error(`Character ${c+1}: imported model is missing its library id.`);l.asset={id:o.asset.id,flip:!!o.asset.flip}}return l}),n.warmth=Je(Number(n.warmth)||1,.5,1.5),n.musicVolume=Je(Number(n.musicVolume??.6),0,1);for(let o of["music","sfx","captions","dof","intro"])n[o]=!!n[o];oM.includes(n.captionStyle)||(n.captionStyle="bold"),lM.includes(n.characterStyle)||(n.characterStyle="smooth"),cM.includes(n.filmLook)||(n.filmLook="studio"),["cuts","one-take"].includes(n.cameraFlow)||(n.cameraFlow="cuts"),n.endTitle=String(n.endTitle||"").slice(0,40),n.endSub=String(n.endSub||"").slice(0,80),["kokoro","chatterbox"].includes(n.voiceEngine)||(n.voiceEngine="kokoro");for(let[o,c]of[["voiceData",16e6],["musicData",14e6]])if(n[o]!==null&&(typeof n[o]!="string"||!/^data:audio\//.test(n[o])||n[o].length>c))throw Error(`Invalid or oversized ${o==="voiceData"?"voice recording":"music track"}.`);let a=new Set;n.cues=n.cues.map((o,c)=>{if(!Number.isFinite(o.start)||!Number.isFinite(o.end)||o.start<0||o.end>n.duration||o.end-o.start<.3)throw Error(`Line ${c+1}: check the start and end times.`);if(!r.has(o.speaker))throw Error(`Line ${c+1}: "${o.speaker}" is not in the cast.`);let l={...o,action:o.action??"none",pause:Je(Number(o.pause??.45),0,3)};if($g[l.shot]){let[h,d]=$g[l.shot];l.shot=h,l.subject=d}if(!Ua.includes(l.shot))throw Error(`Line ${c+1}: unknown camera "${l.shot}".`);if(l.subject!==void 0&&!r.has(l.subject)&&!(l.subject==="all"&&l.shot==="custom")&&delete l.subject,l.shot==="custom"){let h=l.cam||{};l.cam={yaw:Math.round(((Number(h.yaw)||0)+540)%360-180),pitch:Je(Number(h.pitch??8),-15,70),dist:Je(Number(h.dist??4),1.2,16),lens:Je(Number(h.lens??50),18,85),move:Zg.includes(h.move)?h.move:"auto"}}else delete l.cam;if(!Da.includes(l.emotion))throw Error(`Line ${c+1}: unknown expression.`);if(!La.includes(l.action))throw Error(`Line ${c+1}: unknown action.`);if(typeof l.text!="string"||l.text.length>160)throw Error("Keep each caption under 160 characters.");let u=Number(o.id)||c+1;if(a.has(u))throw Error("Duplicate line identifiers.");if(a.add(u),l.visemes!==void 0&&(!Array.isArray(l.visemes)||l.visemes.length>2e3||!l.visemes.every(h=>Array.isArray(h)&&Number.isFinite(h[0])&&h[1]in eu)))throw Error(`Line ${c+1}: invalid lip-sync data.`);if(l.words!==void 0&&(!Array.isArray(l.words)||l.words.length>200||!l.words.every(h=>Array.isArray(h)&&Number.isFinite(h[0])&&Number.isFinite(h[1])&&typeof h[2]=="string")))throw Error(`Line ${c+1}: invalid word timings.`);if(l.screen==null)delete l.screen;else{let h=l.screen;if(!Jg.includes(h.tone))throw Error(`Line ${c+1}: unknown screen tone.`);l.screen={kicker:String(h.kicker||"").slice(0,40),title:String(h.title||"").slice(0,40),sub:String(h.sub||"").slice(0,60),tone:h.tone,progress:!!h.progress}}return{...l,id:u,text:l.text.trim()}}).sort((o,c)=>o.start-c.start);for(let o=1;o<n.cues.length;o++)if(n.cues[o].start<n.cues[o-1].end)throw Error("Dialogue lines must not overlap.");return n}var ot=Math.PI,Ct=(i=0,e=0,t=0)=>new P(i,e,t),x0=(i,e)=>new ne(i,e),$e={smooth:!0},Fa=i=>$e.smooth?Math.max(i,Math.round(i*3)):i;function ut(i,{flat:e=!0,rough:t=.78,metal:n=0,emissive:s=null,glow:r=1,sheen:a=0,sheenColor:o=null,coat:c=0,opacity:l=1}={}){let u={color:i,roughness:t,metalness:n,flatShading:!$e.smooth&&e,...s&&{emissive:s,emissiveIntensity:r},...l<1&&{transparent:!0,opacity:l,depthWrite:!1}};return $e.smooth&&(a||c)?new vn({...u,sheen:a,sheenColor:o||i,sheenRoughness:.55,clearcoat:c,clearcoatRoughness:.22}):new $n(u)}function Dt(i,e,t,n=0,s=0,r=0){let a=new ct(e,t);return a.position.set(n,s,r),a.castShadow=!0,a.receiveShadow=!0,i.add(a),a}var ht=(i,e,t,n,s,r,a,o,c=.05)=>Dt(i,new Ca(e,t,n,$e.smooth?4:1,c),s,r,a,o),et=(i,e,t,n,s,r,a=8,o=6)=>Dt(i,new oi(e,Fa(a),Fa(o)),t,n,s,r),nn=(i,e,t,n,s,r,a,o,c=8)=>Dt(i,new ts(e,t,n,Fa(c)),s,r,a,o),Mi=(i,e,t,n,s,r,a,o=7)=>Dt(i,new ar(e,t,$e.smooth?6:2,Fa(o)),n,s,r,a),wr=(i,e,t,n,s,r,a,o=6)=>Dt(i,new or(e,t,$e.smooth?Math.max(o,16):o),n,s,r,a),Mr=(i,e,t,n,s,r,a,o=ot*2)=>Dt(i,new ns(e,t,Fa(6),Fa(16),o),n,s,r,a),Zt=(i,e=0,t=0,n=0)=>{let s=new Kt;return s.position.set(e,t,n),i.add(s),s};function Ns(i,e,t,n=.015){let s=new As(e.map(r=>Ct(...r)));return Dt(i,new cr(s,$e.smooth?24:10,n,$e.smooth?10:5,!1),t)}function hf(i,e){let t=document.createElement("canvas");t.width=i,t.height=e;let n=new Ci(t);return n.colorSpace=Ht,n.anisotropy=4,{canvas:t,ctx:t.getContext("2d"),texture:n}}function Fs(i,e,t){if($e.smooth)return i;let n=i.attributes.position,s=new Map;for(let r=0;r<n.count;r++){let a=n.getX(r),o=n.getY(r),c=n.getZ(r),l=`${a.toFixed(3)},${o.toFixed(3)},${c.toFixed(3)}`,u=s.get(l);if(u===void 0){let h=Math.sin(a*12.9898+o*78.233+c*37.719+t)*43758.5453;u=1+(h-Math.floor(h)-.5)*e,s.set(l,u)}n.setXYZ(r,a*u,o*u,c*u)}return i.computeVertexNormals(),i}var hs=(i,e)=>$e.smooth?new oi(i,48,32):new lr(i,e),ks=i=>{let e=Math.sin(i*127.1+311.7)*43758.5453;return e-Math.floor(e)};function MM(i){let e=new oi(i,72,54),t=e.attributes.position;for(let n=0;n<t.count;n++){let s=t.getX(n),r=t.getY(n),a=t.getZ(n),o=r/i;if(o<0){let c=1-.17*Math.pow(-o,1.7);s*=c,a*=c}o<.15&&o>-.55&&a>0&&(s*=1+.04*Math.cos((o+.2)*4)),a<0&&(a*=.95),t.setXYZ(n,s,r,a)}return e.computeVertexNormals(),e}var cf=null;function c0(){if(cf)return cf;let i=[];for(let e=0;e<=16;e++){let t=e/16;i.push(x0(Math.max(5e-4,.5*Math.pow(Math.sin(ot*t),.7)*(.3+.7*t)),t-.5))}return cf=new ma(i,24)}function wM(i){let{canvas:e,ctx:t,texture:n}=hf(256,256),s=new xe(i),r="#"+s.clone().multiplyScalar(.45).getHexString(),a="#"+s.clone().lerp(new xe("#ffffff"),.35).getHexString(),o=t.createRadialGradient(128,128,10,128,128,128);o.addColorStop(0,"#050505"),o.addColorStop(.3,"#050505"),o.addColorStop(.33,r),o.addColorStop(.62,a),o.addColorStop(.86,"#"+s.getHexString()),o.addColorStop(.95,"#140d0b"),o.addColorStop(1,"#140d0b"),t.fillStyle=o,t.fillRect(0,0,256,256),t.globalAlpha=.18,t.strokeStyle="#000",t.lineWidth=2;for(let c=0;c<48;c++){let l=c/48*ot*2;t.beginPath(),t.moveTo(128+Math.cos(l)*44,128+Math.sin(l)*44),t.lineTo(128+Math.cos(l)*108,128+Math.sin(l)*108),t.stroke()}return n.needsUpdate=!0,n}var h0={humanoid:{leg:1.05,hipX:.2,thigh:.52,shin:.48,chestY:.1,shoulderX:.47,shoulderY:.95,neckY:1.04,headY:.06,headC:.58,upper:.54,fore:.5,hand:.16,anchors:{forehead:[0,.76,.5],chin:[.04,.2,.4],face:[0,.6,.62],ear:[.56,.6,0]}},bot:{leg:.52,hipX:.3,thigh:.27,shin:.27,chestY:.05,shoulderX:.62,shoulderY:.7,neckY:.86,headY:.04,headC:.43,upper:.38,fore:.36,hand:.1,anchors:{forehead:[.12,.18,.5],chin:[.08,.02,.5],face:[0,.45,.62],ear:[.7,.43,0]}}};function _0(i,e="smooth"){$e={smooth:e!=="lowpoly"};let t=i.look,n=i.kind,s=n==="bot"?h0.bot:h0.humanoid,r=t.build,a=[...i.id].reduce((m,p)=>m+p.charCodeAt(0),0),o=n==="robot"||n==="bot",c=(m,p={})=>ut(m,{rough:.88,sheen:.8,sheenColor:fn(m,.25),...p}),l={skin:ut(t.skin,{rough:n==="creature"?.9:.6,sheen:n==="creature"?.9:.45,sheenColor:fn(t.skin,.22)}),hair:ut(t.hair,{rough:.5,sheen:1,sheenColor:fn(t.hair,.35)}),top:o?ut(t.top,{rough:n==="bot"?.36:.3,metal:n==="robot"?.45:.05,coat:.8}):c(t.top),accent:o?ut(t.accent,{rough:.32,metal:.65,coat:.4}):c(t.accent,{sheen:.5}),bottom:c(t.bottom),shoes:ut(t.shoes,{rough:.6,coat:.2}),eye:ut(t.eyes,{rough:.12,flat:!1,coat:1}),white:ut("#f3ede4",{rough:.25,flat:!1,coat:.6}),shine:ut("#ffffff",{emissive:"#ffffff",glow:.9,flat:!1}),dark:ut("#1b1716",{rough:.5}),screen:ut("#0f2221",{rough:.2,metal:.2,coat:1}),sole:ut(fn(t.shoes,-.35),{rough:.8}),blush:ut("#ff8f87",{rough:1,opacity:.28,flat:!1})},u=new Kt,h=Zt(u,0,s.leg,0),d=Zt(h,0,s.chestY,0),f=Zt(d,0,s.neckY,0),g=Zt(f,0,s.headY,0);u.scale.setScalar(t.height),g.scale.setScalar(t.head);let b={member:i,kind:n,plan:s,root:u,hips:h,chest:d,neck:f,head:g,arms:[],legs:[],feet:[],M:l,seed:a,face:null,anchors:{},smooth:$e.smooth};if(n==="bot"){ht(d,1.12,.78,.72,l.top,0,.43,0,.14),ht(d,.8,.41,.08,l.accent,0,.44,.385,.05),nn(d,.11,.11,.02,l.white,-.23,.44,.45,12).rotation.x=ot/2;for(let m=0;m<3;m++)ht(d,.22,.025,.03,l.white,.17,.36+m*.08,.443,.008);ht(h,.7,.16,.5,l.accent,0,.02,0,.05)}else if(n==="robot")ht(d,.98*r,1,.62,l.top,0,.5,0,.12),ht(d,.62*r,.42,.06,l.screen,0,.62,.32,.05),nn(d,.08,.08,.02,l.accent,0,.62,.36,10).rotation.x=ot/2,ht(h,.72*r,.36,.5,l.accent,0,0,0,.08),nn(d,.16,.18,.18,l.accent,0,1.02,0,10);else{let m;if($e.smooth){let _=[[.4,0],[.43,.2],[.47,.55],[.5,.8],[.48,.93],[.37,1.02],[.2,1.06],[.001,1.07]].map(([y,T])=>x0(y*r,T));m=Dt(d,new ma(_,48),l.top),m.scale.z=.82;let v=Mr(h,.4*r,.055,ut(fn(t.top,-.1),{rough:.9,sheen:.6}),0,.12,0);v.rotation.x=ot/2,v.scale.y=.82}else m=nn(d,.5*r,.42*r,1.05,l.top,0,.52,0,8),m.scale.z=.92;$e.smooth?et(h,.4*r,l.bottom,0,-.02,0,16,10).scale.set(1,.55,.72):ht(h,.72*r,.38,.5,l.bottom,0,0,0,.12),nn(d,.17,.19,.2,l.skin,0,1.04,0,8);let p=$e.smooth?.82:.92,x=(_,v)=>v*r*p;if(t.topStyle==="hoodie")if($e.smooth){let _=Mr(d,.27,.1,l.top,0,1,-.04);_.rotation.x=ot/2,_.scale.set(1.15*r,.85,1),et(d,.36*r,l.top,0,1.08,-.2,16,12).scale.set(1.05,.62,.7),ht(d,.58*r,.3,.07,ut(fn(t.top,-.08),{rough:.9,sheen:.6}),0,.3,x(.3,.45)+.01,.04);for(let y of[-1,1])Ns(d,[[y*.1,.99,.3],[y*.12,.8,x(.8,.5)+.02],[y*.13,.62,x(.62,.48)+.03]],l.accent,.014),nn(d,.02,.02,.06,ut("#d9d4c8",{rough:.4,coat:.5}),y*.13,.58,x(.6,.48)+.03,8)}else{et(d,.47*r,l.top,0,1,-.1,9,6).scale.set(1,.55,.9),ht(d,.6*r,.3,.12,ut(fn(t.top,-.12)),0,.24,.42,.06);for(let v of[-1,1])Ns(d,[[v*.13,1,.36],[v*.15,.72,.47],[v*.16,.5,.47]],l.accent,.016);Ns(d,[[-.25,.36,.46],[0,.3,.48],[.25,.36,.46]],ut(fn(t.top,-.2)),.012)}else if(t.topStyle==="tshirt"){let _=Mr(d,.19,.03,l.top,0,1.02,0);_.rotation.x=ot/2,ht(d,.24,.07,.03,l.accent,.2*r,.75,x(.75,.5),.01)}else if(t.topStyle==="jacket"){ht(d,.3,.98,.04,l.accent,0,.52,x(.5,.48),.02);for(let _ of[-1,1]){let v=ht(d,.12,.42,.04,ut(fn(t.top,.1),{sheen:.6}),_*.17,.8,x(.8,.5)-.01,.015);v.rotation.z=_*.25}$e.smooth||ht(d,.86*r,.06,.5,ut(fn(t.top,-.2)),0,.03,0,.02)}else{ht(d,.26,.5,.04,ut("#f0ece4",{sheen:.3}),0,.78,x(.78,.5),.02),ht(d,.07,.42,.03,l.accent,0,.72,x(.72,.5)+.02,.015);for(let _ of[-1,1]){let v=ht(d,.13,.5,.04,ut(fn(t.top,.12),{sheen:.5}),_*.15,.78,x(.78,.5)-.005,.015);v.rotation.z=_*.32}}}for(let m of[-1,1]){let p=Zt(d,m*(n==="bot"?s.shoulderX:s.shoulderX*r),s.shoulderY,0),x=Zt(p),_=Zt(x,0,-s.upper,0),v=Zt(_,0,-s.fore,0),y=t.topStyle==="tshirt"&&!o;if(n==="bot")et(p,.14,l.accent,0,0,0,10,8),nn(x,.09,.09,s.upper-.06,l.white,0,-s.upper/2,0,8),et(_,.12,l.accent,0,0,0,10,8),nn(_,.1,.1,s.fore-.08,l.top,0,-s.fore/2,0,8);else if(n==="robot")et(p,.19*r,l.accent,0,0,0,10,8),nn(x,.12*r,.11*r,s.upper-.08,l.top,0,-s.upper/2,0,8),et(_,.13*r,l.accent,0,0,0,10,8),nn(_,.11*r,.1*r,s.fore-.06,l.top,0,-s.fore/2,0,8);else if(et(p,.2*r,l.top,0,0,0,8,6),Mi(x,.165*r,s.upper-.2,y?l.skin:l.top,0,-s.upper/2,0),y&&nn(x,.19*r,.18*r,.2,l.top,0,-.08,0,8),$e.smooth&&et(_,.152*r,y?l.skin:l.top,0,0,0,10,8),Mi(_,.15*r,s.fore-.18,y?l.skin:l.top,0,-s.fore/2,0),!y)if($e.smooth){let I=Mr(_,.135*r,.035,ut(fn(t.top,-.15),{rough:.9,sheen:.6}),0,-s.fore+.07,0);I.rotation.x=ot/2}else nn(_,.155*r,.155*r,.1,ut(fn(t.top,-.15)),0,-s.fore+.06,0,8);let T=o?l.accent:l.skin,w=n==="bot"?.8:1,C=[],M,S;if($e.smooth){let I=ht(v,.1*w,.17*w,.17*w,T,0,-.085*w,0,.045*w);for(let D=0;D<4;D++){let k=Zt(v,0,-.165*w,(.058-D*.037)*w);Mi(k,.026*w*(D===3?.85:1),(D===3?.05:.07)*w,T,0,-.045*w,0,6),D===0?M=k:C.push(k)}S=Zt(v,-m*.02*w,-.05*w,.085*w),Mi(S,.03*w,.06*w,T,0,-.045*w,.012,6).rotation.x=-.45}else{et(v,.13*w,T,0,-.08*w,0,7,5).scale.set(.72,1,.92);let D=Zt(v,0,-.16*w,-.015);M=Zt(v,0,-.16*w,.075*w),S=Zt(v,0,-.06*w,.1*w),ht(D,.1*w,.15*w,.13*w,T,0,-.07*w,-.01,.04*w),Mi(M,.035*w,.09*w,T,0,-.07*w,0,5),Mi(S,.036*w,.08*w,T,0,-.05*w,.02,5).rotation.x=-.5,C.push(D)}b.arms.push({s:m,shoulder:p,upper:x,fore:_,hand:v,fingers:C,index:M,thumb:S,lenU:s.upper,lenF:s.fore,handOff:s.hand})}for(let m of[-1,1]){let p=Zt(h,m*s.hipX*(n==="bot"?1:r),n==="bot"?0:-.08,0),x=Zt(p),_=Zt(x,0,-s.thigh,0),v=.07,y=Zt(u,m*s.hipX*(n==="bot"?1:r),v,.04);if(n==="bot")nn(x,.1,.1,s.thigh,l.accent,0,-s.thigh/2,0,8),nn(_,.1,.1,s.shin,l.accent,0,-s.shin/2,0,8),ht(y,.43,.25,.6,l.top,0,.06,.08,.07),ht(y,.45,.065,.63,l.accent,0,-.05,.08,.025);else if(Mi(x,.17*r,s.thigh-.2,o?l.top:l.bottom,0,-s.thigh/2,0),$e.smooth&&et(_,.155*r,o?l.accent:l.bottom,0,0,0,10,8),Mi(_,.15*r,s.shin-.16,o?l.top:l.bottom,0,-s.shin/2,0),o&&!$e.smooth&&et(_,.14*r,l.accent,0,0,0,8,6),$e.smooth&&!o){ht(y,.34*r,.17,.56,l.shoes,0,.035,.1,.08),ht(y,.36*r,.055,.6,l.sole,0,-.06,.1,.025),et(y,.16*r,l.shoes,0,0,.27,12,8).scale.set(1.05,.62,.8);for(let w=0;w<3;w++)ht(y,.17*r,.015,.022,ut("#f2ede4",{rough:.5}),0,.13,.08+w*.07,.006)}else ht(y,.36*r,.2,.58,l.shoes,0,.02,.1,.08),ht(y,.37*r,.06,.59,l.sole,0,-.07,.1,.02);b.legs.push({s:m,shoulder:p,upper:x,fore:_,lenU:s.thigh,lenF:s.shin-(n==="bot"?0:.05),handOff:0}),b.feet.push(y)}TM(b,t,l,a);for(let[m,p]of Object.entries(s.anchors))b.anchors[m]=Ct(...p);return n==="creature"&&RM(b,t,l),u.traverse(m=>{m.isMesh&&(m.userData.character=i.id)}),b}function fn(i,e){let t=new xe(i),n={};return t.getHSL(n),t.setHSL(n.h,n.s,Je(n.l+e,0,1)),"#"+t.getHexString()}function TM(i,e,t,n){let{head:s,kind:r,plan:a}=i,o=a.headC;if(r==="bot"){ht(s,1.36,.94,.87,t.top,0,o,0,.14),ht(s,1.15,.7,.085,t.accent,0,o+.02,.455,.1),ht(s,1.04,.58,.035,t.screen,0,o+.02,.51,.08);for(let b of[-1,1])nn(s,.18,.18,.12,t.accent,b*.73,o,0,12).rotation.z=ot/2,nn(s,.12,.12,.13,t.white,b*.79,o,0,12).rotation.z=ot/2;nn(s,.023,.023,.32,t.accent,.32,o+.61,0,6),i.glow=ut(e.screen,{emissive:e.screen,glow:1.1,flat:!1}),et(s,.09,i.glow,.32,o+.81,0,10,8),d0(i,e,.98,.54,Ct(0,o+.02,.531));return}if(r==="robot"){ht(s,1,.95,.85,t.top,0,o,0,.16),ht(s,.84,.56,.05,t.screen,0,o+.02,.43,.07);for(let b of[-1,1])nn(s,.13,.13,.12,t.accent,b*.53,o,0,10).rotation.z=ot/2;nn(s,.02,.02,.28,t.accent,.25,o+.6,0,6),i.glow=ut(e.screen,{emissive:e.screen,glow:1.1,flat:!1}),et(s,.07,i.glow,.25,o+.76,0,10,8),d0(i,e,.8,.5,Ct(0,o+.02,.46)),u0(i,e,t,o,.5);return}Dt(s,$e.smooth?MM(.55):Fs(new lr(.55,2),.045,n),t.skin,0,o,0).scale.set(1,1.02,.94);let l=r==="creature"&&e.species!=="dragon";i.eyes=[],i.pupils=[],i.brows=[],i.lids=[];for(let b of[-1,1]){let m=Zt(s,b*.2,o+.07,.43);i.eyes.push(m);let p=Zt(m);if(i.pupils.push(p),e.eyeStyle==="glossy")et(p,.095,t.eye,0,0,.03,12,10).scale.set(.9,1.18,.5),et(p,.028,t.shine,-.03,.045,.08,8,6),et(p,.012,t.shine,.025,-.03,.08,6,4),$e.smooth&&Dt(p,new ns(.062,.012,8,36),ut(fn(e.eyes,.18),{rough:.2,coat:1,flat:!1}),0,-.01,.072).scale.set(.9,1.15,1);else if($e.smooth)et(m,.112,t.white,0,0,0,12,10).scale.set(1,1.08,.62),Dt(p,new oi(.07,40,20),new vn({map:wM(e.eyes),roughness:.25,clearcoat:1,clearcoatRoughness:.05}),0,0,.055).scale.set(1,1,.35),et(p,.017,t.shine,-.022,.022,.085,8,6),et(p,.008,t.shine,.02,-.018,.085,6,4);else{et(m,.112,t.white,0,0,0,12,10).scale.set(1,1.12,.55);let _=et(p,.065,t.eye,0,-.01,.055,12,10);_.scale.z=.5,et(p,.03,t.dark,0,-.01,.075,8,6).scale.z=.4,et(p,.016,t.shine,-.018,.015,.088,6,4)}if($e.smooth){let x=e.eyeStyle==="glossy",_=Zt(m,0,0,x?.03:0);Dt(_,new oi(x?.104:.122,40,14,0,ot*2,0,ot*.5),t.skin).scale.set(x?.92:1,x?1.2:1.1,x?.62:.68);let y=Dt(_,new ns(x?.096:.116,.009,6,40,ot),t.dark);y.rotation.x=ot/2,y.rotation.z=ot,y.scale.set(x?.92:1,x?.62:.68,1),i.lids.push(_);let T=Zt(s,b*.21,o+.27,.47);Ns(T,[[-.11*b,-.02,-.01],[0,.022,.01],[.11*b,-.008,-.02]],t.hair,.03),i.brows.push(T);let w=et(s,.1,t.blush,b*.33,o-.13,.4,12,8);w.scale.set(1,.6,.35),w.castShadow=!1}else i.brows.push(ht(s,.22,.06,.06,t.hair,b*.21,o+.27,.45,.025))}if(!l)if($e.smooth){et(s,.072,t.skin,0,o-.05,.52,12,10).scale.set(.85,.78,1);for(let m of[-1,1])et(s,.13,t.skin,m*.545,o-.02,-.02,10,8).scale.set(.42,1,.8),et(s,.075,ut(fn(e.skin,-.1),{rough:.8}),m*.575,o-.02,-0,8,6).scale.set(.3,.75,.6)}else{let b=wr(s,.075,.16,t.skin,0,o-.04,.52,3);b.rotation.x=ot/2,b.rotation.y=ot;for(let m of[-1,1])et(s,.12,t.skin,m*.54,o-.02,-.02,6,5).scale.set(.6,1,.9)}let u=hf(512,256),h=.5,d=.8,f=new ts(h,h,.2,24,1,!0,-d/2,d);f.translate(0,0,-h);let g=new ct(f,new $n({map:u.texture,transparent:!0,alphaTest:.04,roughness:.45,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}));g.position.set(0,o-.27,l?.66:$e.smooth?.468:.47),g.rotation.x=l?.05:.25,g.renderOrder=2,l&&g.scale.set(.8,.8,.8),s.add(g),i.face={type:"drawn",tex:u,last:""},r==="creature"?CM(i,e,t,o):(EM(i,e,t,o,n),AM(i,e,t,o)),u0(i,e,t,o,.52)}function EM(i,e,t,n,s){let{head:r}=i,a=e.hairStyle;if(a==="bald")return;let o=Dt(r,Fs(hs(.585,1),.06,s+3),t.hair,0,n+.1,-.07);o.scale.set(1,a==="short"||a==="mohawk"?.72:.88,.97);let c=.6,l=(h,d,f,g,b,m=.42)=>{let p=Ct(Math.sin(h)*Math.cos(d),Math.sin(d),Math.cos(h)*Math.cos(d)),x=Ct(-Math.sin(h)*Math.sin(d),Math.cos(d),-Math.cos(h)*Math.sin(d)),_=Ct().crossVectors(x,p),v=new Le().makeBasis(_,x,p),y=$e.smooth?c0():new ga(.17,0),T=$e.smooth?.34:1,w=Dt(r,y,t.hair,p.x*c,n+.08+p.y*c*.95,p.z*c*.96-.03);return w.quaternion.setFromRotationMatrix(v),w.rotateZ((ks(b)-.5)*.5),w.scale.set(g*(.85+ks(b+1)*.3)*T,f*(.85+ks(b+2)*.3)*T,m*T),w},u=s;if(a==="mohawk"){o.scale.set(.98,.6,.95);for(let h=0;h<7;h++){let d=l(ot,.35+h*.2,2.2,1.3,u+=3,.7);d.position.x=0}return}if(a==="shaggy"){o.scale.set(1.02,.92,1);for(let h=0;h<9;h++)l(-.85+h*.21,.62+ks(u+h)*.12,2.1,1.25,u+=3);for(let h of[-1,1])for(let d=0;d<5;d++)l(h*(1.05+d*.32),.38+ks(u+d)*.2,2.3,1.3,u+=3);for(let h=0;h<7;h++)l(ot-.9+h*.3,.3+ks(u+h)*.25,2.4,1.35,u+=3);for(let h=0;h<10;h++)l(h*.63,1.05+ks(u+h)*.25,1.8,1.5,u+=3)}else if(a==="chunky")if($e.smooth){for(let h=0;h<14;h++)l(-1.2+h*.55%(ot*2),.75+ks(u+h)*.4,1.5,1.8,u+=3,.8);l(-.35,.95,1.6,1.4,u+=3,.9)}else{for(let d=0;d<9;d++){let f=Dt(r,new Co(.22+d%3*.035,0),t.hair,-.4+d%5*.2,n+.5+Math.sin(d*1.7)*.09,.25-Math.floor(d/5)*.32);f.rotation.set(d*.4,d*.8,d*.6),f.scale.set(1.05,1.25,.85)}let h=wr(r,.27,.53,t.hair,-.19,n+.68,.23,4);h.rotation.z=-.43}else if(a==="curly")for(let h=0;h<34;h++){let d=h*2.39996,f=.12+.42*Math.sqrt(h/34);Dt(r,$e.smooth?new oi(.12,20,14):new lr(.12,0),t.hair,Math.cos(d)*f,n+.5+.12*Math.cos(f*2.5),Math.sin(d)*f*.9-.04)}else if(a==="long"){for(let h=0;h<13;h++){let d=ot*.5+h/12*ot;Dt(r,$e.smooth?c0():new ga(.17,0),t.hair,Math.cos(d)*.5,n-.25,Math.sin(d)*.4-.12).scale.set($e.smooth?.27:.8,$e.smooth?.95:2.8,$e.smooth?.24:.7)}for(let h=0;h<6;h++)l(-.75+h*.3,.66,1.9,1.2,u+=3)}else if(a==="bun"){if(Dt(r,hs(.2,1),t.hair,0,n+.62,-.22),$e.smooth)for(let h=0;h<8;h++)l(-1.1+h*.31,.7,1.7,1.4,u+=3)}else if(a==="short"&&$e.smooth)for(let h=0;h<8;h++)l(-.85+h*.24,.72,1.3,1.4,u+=3,.5)}function AM(i,e,t,n){let{head:s}=i;if(e.facialHair!=="none")if(e.facialHair==="beard"){Dt(s,Fs(hs(.3,1),.08,9),t.hair,0,n-.36,.24).scale.set(1.15,.75,.75);for(let a of[-1,1])et(s,.15,t.hair,a*.36,n-.2,.26,6,5).scale.set(.8,1.5,.7)}else if(e.facialHair==="mustache")for(let r of[-1,1]){let a=$e.smooth?Mi(s,.035,.12,t.hair,r*.08,n-.16,.5,8):ht(s,.17,.05,.05,t.hair,r*.08,n-.16,.5,.02);a.rotation.z=$e.smooth?r*1.25:r*-.22}else{let r=ut(fn(e.skin,-.18),{rough:1,opacity:$e.smooth?.55:1});Dt(s,Fs(hs(.31,1),.03,4),r,0,n-.3,.2).scale.set(1.18,.7,.8)}}function u0(i,e,t,n,s){let{head:r}=i;if(e.glasses!=="none"){let a=ut("#c4a373",{rough:.25,metal:.8,flat:!1,coat:.6});for(let o of[-1,1]){if(e.glasses==="round"){if(Mr(r,.16,.02,a,o*.2,n+.07,s),$e.smooth){let c=et(r,.155,ut("#cfe3ea",{rough:.05,opacity:.12,flat:!1}),o*.2,n+.07,s,16,12);c.scale.z=.12,c.castShadow=!1}}else for(let[c,l,u,h]of[[.32,.03,0,.11],[.32,.03,0,-.1],[.03,.22,-.155,0],[.03,.22,.155,0]])ht(r,c,l,.03,a,o*.2+u,n+.07+h,s,.01);Ns(r,[[o*.36,n+.09,s-.03],[o*.5,n+.09,.25],[o*.52,n+.08,0]],a,.016)}Ns(r,[[-.05,n+.1,s+.01],[0,n+.13,s+.03],[.05,n+.1,s+.01]],a,.015)}if(e.hat==="cap"){et(r,.6,t.accent,0,n+.22,-.03,10,6).scale.set(1,.62,1);let o=ht(r,.7,.05,.42,t.accent,0,n+.3,.5,.02);o.rotation.x=-.12}else if(e.hat==="beanie")Dt(r,Fs(hs(.6,1),.03,5),t.accent,0,n+.25,-.03).scale.set(1,.72,1),Mr(r,.56,.07,ut(fn(e.accent,-.12),{sheen:.6}),0,n+.12,-.03).rotation.x=ot/2,et(r,.1,ut(fn(e.accent,.1),{sheen:.8}),0,n+.72,-.03,6,5);else if(e.hat==="headphones"){Mr(r,.6,.04,t.dark,0,n+.05,0,ot);for(let a of[-1,1]){let o=nn(r,.17,.17,.12,t.accent,a*.6,n,0,12);o.rotation.z=ot/2}}}function CM(i,e,t,n){let{head:s}=i,r=t.accent,a=e.species;if(a!=="dragon"){if(Dt(s,Fs(hs(.25,1),.05,2),t.skin,0,n-.2,.45).scale.set(1.35,.7,.82),et(s,.065,t.dark,0,n-.08,.67,8,6).scale.set(1.3,.8,.7),a==="cat")for(let l of[-1,1])for(let u=-1;u<=1;u++)Ns(s,[[l*.18,n-.18+u*.035,.62],[l*.5,n-.2+u*.08,.6]],ut("#efe2d2",{flat:!1}),.005)}else{Dt(s,Fs(hs(.26,1),.06,6),t.skin,0,n-.18,.44).scale.set(1.15,.72,1);for(let c of[-1,1])et(s,.03,t.dark,c*.09,n-.08,.69,6,4)}for(let o of[-1,1])if(a==="fox"||a==="cat"){let c=wr(s,a==="cat"?.19:.22,a==="cat"?.36:.5,t.skin,o*.36,n+.62,-.05,4);c.rotation.z=-o*.3;let l=wr(s,.11,a==="cat"?.22:.32,r,o*.36,n+.6,.04,4);l.rotation.z=-o*.3}else if(a==="bunny"){let c=Mi(s,.1,.55,t.skin,o*.2,n+.92,-.05,6);c.rotation.z=-o*.18,c.scale.z=.55;let l=Mi(s,.05,.45,r,o*.2,n+.92,0,5);l.rotation.z=-o*.18,l.scale.z=.4}else a==="bear"?(et(s,.17,t.skin,o*.4,n+.48,-.02,8,6),et(s,.09,r,o*.4,n+.48,.08,6,5)):wr(s,.08,.38,t.accent,o*.27,n+.6,-.1,5).rotation.set(-.5,0,-o*.35)}function RM(i,e,t){let{hips:n}=i,s=e.species,r=Zt(n,0,.05,-.3);if(r.rotation.x=-.5,i.tail=r,s==="fox")Dt(r,Fs(hs(.3,1),.08,3),t.skin,0,-.02,-.45).scale.set(.7,.7,1.7),Dt(r,hs(.17,1),t.accent,0,.02,-.9).scale.set(.9,.9,1.1);else if(s==="cat")Ns(r,[[0,0,0],[0,.05,-.4],[.1,.35,-.62],[.12,.58,-.52]],t.skin,.06);else if(s==="bunny")et(r,.16,t.accent,0,0,-.08,8,6);else if(s==="bear")et(r,.11,t.skin,0,0,-.05,6,5);else{let a=wr(r,.2,1.1,t.skin,0,0,-.55,6);a.rotation.x=-ot/2;for(let o=0;o<4;o++){let c=wr(r,.07,.18,t.accent,0,.14-o*.02,-.15-o*.25,4);c.rotation.x=-.4}}}function d0(i,e,t,n,s){let r=hf(512,288),a=new ct(new ai(t,n),new tn({map:r.texture,transparent:!0,toneMapped:!1}));a.position.copy(s),i.head.add(a),i.face={type:"led",tex:r,last:"",color:e.screen}}var y0=i=>Math.round(i*100)/100;function S0(i,e,t,n,s,r){let a=i.face;if(a.type==="led")return PM(a,e,t,n,s,r);for(let b=0;b<2;b++){let m=b===0?1:-1,p=t.eye*n;i.lids.length?i.lids[b].rotation.x=Us(1.5,-.62,Je(p,0,1.35)/1):i.eyes[b].scale.y=Math.max(.08,p),i.brows[b].rotation.z=m*t.brow,i.brows[b].position.y=i.plan.headC+.27+t.raise+(t.asym&&b===0?.05*t.asym:0)-Math.max(0,-t.brow)*.03,i.pupils[b].position.set(s*.022,0,0)}let o=Je(e.open+t.open*(1-e.open),0,1),c=[o,e.wide,e.round,e.teeth,e.tongue,t.smile].map(y0).join();if(c===a.last)return;a.last=c;let l=a.tex.ctx;l.setTransform(2,0,0,2,0,0);let u=128,h=50,d=52*e.wide*(1-e.round*.38)*(1+Math.max(0,t.smile)*.12),f=o*85,g=t.smile*12*(1-o*.5);if(l.clearRect(0,0,256,128),l.lineCap="round",l.lineJoin="round",f<5)l.strokeStyle="#5c2721",l.lineWidth=6,l.beginPath(),l.moveTo(u-d,h-g),l.quadraticCurveTo(u,h+g*1.1,u+d,h-g),l.stroke(),l.strokeStyle="rgba(140,62,52,.55)",l.lineWidth=4,l.beginPath(),l.moveTo(u-d*.55,h+7-g*.2),l.quadraticCurveTo(u,h+11+g*.6,u+d*.55,h+7-g*.2),l.stroke();else{let b=e.round,m=h-f*(.42+b*.08),p=h+f*(.62+b*.1),x=u-d,_=u+d,v=h-g*.8,y=()=>{l.beginPath(),l.moveTo(x,v),l.bezierCurveTo(u-d*(.55-b*.25),m,u+d*(.55-b*.25),m,_,v),l.bezierCurveTo(u+d*(.6+b*.2),p+g*.4,u-d*(.6+b*.2),p+g*.4,x,v),l.closePath()};y(),l.fillStyle="#2a0c0b",l.fill(),l.save(),l.clip(),e.tongue>.05&&(l.fillStyle="#9c4643",l.beginPath(),l.ellipse(u,p+f*.12,d*.5,f*(.18+e.tongue*.16),0,0,ot*2),l.fill()),e.teeth&&(l.fillStyle="#f4ebdf",l.fillRect(x,m-4,d*2,Math.min(16,f*.26)+4)),l.restore(),y(),l.strokeStyle="#6d2c25",l.lineWidth=4.5,l.stroke(),l.strokeStyle="rgba(160,76,64,.75)",l.lineWidth=5,l.beginPath(),l.moveTo(u-d*.7,p-f*.05),l.quadraticCurveTo(u,p+6,u+d*.7,p-f*.05),l.stroke()}a.tex.texture.needsUpdate=!0}function f0(i,e,t,n,s,r){i.beginPath(),i.roundRect(e-n/2,t-s/2,n,s,Math.min(r,n/2,s/2))}function PM(i,e,t,n,s,r){let a=[e.open,e.wide,e.round,t.eye*n,t.smile,t.brow,t.asym,s].map(y0).join()+t.emotion+(t.emotion==="idea"?Math.floor(r*6):0);if(a===i.last)return;i.last=a;let o=i.tex.ctx,c=i.color,l=512,u=288;o.clearRect(0,0,l,u),o.fillStyle=c,o.strokeStyle=c,o.lineCap="round",o.shadowColor=c,o.shadowBlur=14;let h=118,d=74*t.eye*n,f=s*16;for(let m of[-1,1]){let p=256+m*104+f,x=t.asym&&m===1?1.18:1,_=50*x,v=Math.max(6,d*x);if(t.emotion==="happy"&&n>.5){o.lineWidth=13,o.beginPath(),o.arc(p,h+16,30,ot*1.1,ot*1.9),o.stroke();continue}if(t.emotion==="surprised"){o.beginPath(),o.ellipse(p,h,32*Math.min(1.2,n*1.2),Math.max(5,40*n),0,0,ot*2),o.fill();continue}if(f0(o,p,h,_,v,14),o.fill(),Math.abs(t.brow)>.05){o.save(),o.globalCompositeOperation="destination-out",o.shadowBlur=0;let y=Math.abs(t.brow)*80,T=p-m*_/2,w=p+m*_/2,C=h-v/2-2;o.beginPath(),t.brow<0?(o.moveTo(T-m*4,C),o.lineTo(T-m*4,C+y),o.lineTo(w+m*4,C-2)):(o.moveTo(w+m*4,C),o.lineTo(w+m*4,C+y),o.lineTo(T-m*4,C-2)),o.closePath(),o.fill(),o.restore()}if(t.emotion==="idea"){let y=.6+.4*Math.sin(r*9+m);o.lineWidth=5,o.beginPath(),o.moveTo(p+m*36,h-58-8*y),o.lineTo(p+m*36,h-38+8*y),o.moveTo(p+m*26-8*y,h-48),o.lineTo(p+m*46+8*y,h-48),o.stroke()}}let g=214,b=Je(e.open+t.open*(1-e.open),0,1);if(b<.08){o.lineWidth=10;let m=t.smile*20;o.beginPath(),o.moveTo(216,g-m),o.quadraticCurveTo(256,g+m*1.3,296,g-m),o.stroke()}else e.round>.5?(o.beginPath(),o.ellipse(256,g,18+22*(1-e.round*.4),8+b*26,0,0,ot*2),o.fill()):(f0(o,256,g,46+50*e.wide*(1-e.round*.3),8+b*38,12),o.fill());o.shadowBlur=0,o.fillStyle="rgba(0,0,0,.16)";for(let m=0;m<u;m+=6)o.fillRect(0,m,l,2);i.tex.texture.needsUpdate=!0}var IM=Ct(),DM=Ct(),LM=Ct(),UM=Ct(),kM=Ct(),NM=Ct(),FM=Ct(),OM=Ct(),BM=Ct(),zM=Ct(),HM=Ct(),p0=new Le;function m0(i,e,t){let n=i.shoulder;n.updateWorldMatrix(!0,!1);let s=n.worldToLocal(IM.copy(e)),r=n.worldToLocal(DM.copy(t)),a=i.upper.position,o=i.lenU,c=i.lenF+i.handOff,l=LM.copy(s).sub(a),u=l.length();l.normalize(),u=Je(u,Math.abs(o-c)+.02,o+c-.002);let h=Je((o*o+u*u-c*c)/(2*o*u),-1,1),d=Math.sqrt(1-h*h),f=UM.copy(r).sub(a);f.addScaledVector(l,-f.dot(l)),f.lengthSq()<1e-8&&f.set(0,0,-1).addScaledVector(l,l.z),f.normalize();let g=kM.copy(l).multiplyScalar(h).addScaledVector(f,d),b=NM.copy(a).addScaledVector(g,o),m=FM.copy(a).addScaledVector(l,u),p=OM.copy(m).sub(b).normalize(),x=BM.copy(p).addScaledVector(g,-p.dot(g));x.lengthSq()<1e-8&&x.copy(f).negate(),x.normalize();let _=HM.copy(g).negate(),v=zM.crossVectors(_,x);p0.makeBasis(v,_,x),i.upper.quaternion.setFromRotationMatrix(p0),i.fore.rotation.set(-Math.acos(Je(g.dot(p),-1,1)),0,0)}function VM(i,e=Ct()){return i.hand?i.hand.updateWorldMatrix(!0,!1):i.fore.updateWorldMatrix(!0,!1),(i.hand||i.fore).localToWorld(e.set(0,i.hand?-i.handOff:-i.lenF,0))}var g0={relaxed:[.55,.45,.2],fist:[1.6,1.6,.9],point:[1.6,0,.7],open:[.05,0,-.35],thumbsup:[1.6,1.6,-1.4],cup:[.35,.25,.1]},uf=i=>1+(1.4+1)*Math.pow(i-1,3)+1.4*Math.pow(i-1,2);function df(i,e,t,n){let s=n.m,r=s.reach,a=n.beat,o=1,c=(l,u=1)=>Math.sin(e*l)*u;switch(i){case"explain":return{arms:[{c:[-s.sx*.7,s.sy-r*.62+a*.1,r*.62+a*.06],shape:"open",wrist:[-.5,0,.9]},{c:[s.sx*.7,s.sy-r*.6+a*.12,r*.62+a*.05],shape:"open",wrist:[-.5,0,-.9]}],head:{x:-a*.06}};case"wave":return{arms:[null,{c:[Math.max(s.sx*1.55,s.hw+.3),Math.min(s.sy+r*.85,s.ht-.15),r*.22],pole:[s.sx*2,s.sy-.4,-.4],shape:"open",wrist:[0,c(10,.45),-.2]}],head:{z:-.07}};case"point":return{arms:[null,{w:n.toCamera(r*1.05,.15),pole:[s.sx*1.5,s.sy-.7,-.6],shape:"point",wrist:[0,0,0]}],head:{x:-.03}};case"point-screen":return{arms:[null,{w:n.toward(n.screen,r*1.02),pole:[s.sx*1.6,s.sy-.9,.5],shape:"point"}],look:"screen",chest:{y:.25}};case"point-other":return{arms:[{w:n.toward(n.partner,r*1.02,0),pole:[-s.sx*1.6,s.sy-.9,-.4],shape:"point"},null],look:"partner"};case"shrug":return{arms:[{c:[-s.sx*1.65,s.sy-r*.5,r*.45],pole:[-s.sx*2.4,s.sy-.8,-.4],shape:"open",wrist:[-.9,0,1.1]},{c:[s.sx*1.65,s.sy-r*.5,r*.45],pole:[s.sx*2,s.sy-.8,-.4],shape:"open",wrist:[-.9,0,-1.1]}],shoulders:.09,head:{z:.13,x:-.04}};case"facepalm":return{arms:[{h:n.anchor("forehead",-.05,0,.06),pole:[-s.sx*1.8,s.sy-.6,.3],shape:"open",wrist:[.2,-.5,.4]},null],head:{x:.3,z:.06},chest:{x:.14},shoulders:.05};case"think":return{arms:[{c:[s.sx*.25,s.sy-r*.62,r*.5],pole:[-s.sx*1.6,s.sy-.9,0],shape:"relaxed",wrist:[-.4,0,1.2]},{h:n.anchor("chin",.02,-.08,.06),pole:[s.sx*1.4,s.sy-1,.2],shape:"fist",wrist:[.3,0,-.6]}],head:{z:.12,y:-.1,x:.04},chest:{x:.06},eyesUp:1};case"cheer":return{arms:[{c:[-Math.max(s.sx*1.1,s.hw+.2),s.sy+r*.95+c(9,.06),r*.12],pole:[-s.sx*3,s.sy,-.3],shape:"fist"},{c:[Math.max(s.sx*1.1,s.hw+.2),s.sy+r*.95+c(9+.5,.06),r*.12],pole:[s.sx*3,s.sy,-.3],shape:"fist"}],root:{y:Math.abs(Math.sin(e*6))*.12},head:{x:-.1}};case"clap":{let l=.05+.16*(.5+.5*Math.cos(e*13));return{arms:[{c:[-l,s.sy-r*.35,r*.66],pole:[-s.sx*2,s.sy-.8,-.3],shape:"open",wrist:[0,-1.3,0]},{c:[l,s.sy-r*.35,r*.66],pole:[s.sx*2,s.sy-.8,-.3],shape:"open",wrist:[0,1.3,0]}]}}case"thumbsup":return{arms:[null,{c:[s.sx*.85,s.sy-r*.25,r*.62],pole:[s.sx*1.8,s.sy-1,-.3],shape:"thumbsup",wrist:[0,-.25,-.15]}],head:{z:-.08}};case"crossarms":return{arms:[{c:[s.sx*.55,s.sy-r*.52,r*.42],pole:[-s.sx*1.6,s.sy-.9,.6],shape:"fist",wrist:[0,0,1.4]},{c:[-s.sx*.55,s.sy-r*.47,r*.5],pole:[s.sx*1.6,s.sy-.9,.6],shape:"fist",wrist:[0,0,-1.4]}],chest:{x:-.05},head:{x:-.06}};case"handsup":return{arms:[{c:[-Math.max(s.sx*1.35,s.hw+.25),s.sy+r*.62,r*.35],pole:[-s.sx*3,s.sy-.4,-.3],shape:"open",wrist:[-1.2,0,.3]},{c:[Math.max(s.sx*1.35,s.hw+.25),s.sy+r*.62,r*.35],pole:[s.sx*3,s.sy-.4,-.3],shape:"open",wrist:[-1.2,0,-.3]}],chest:{x:-.1},root:{y:.06*Math.max(0,Math.sin(Math.min(e,.4)/.4*ot))}};case"raise":return{arms:[null,{c:[Math.max(s.sx*.85,s.hw+.18),s.sy+r*.95,r*.2],pole:[s.sx*2.5,s.sy,-.3],shape:"point"}],head:{z:-.08,x:-.06}};case"type":return{arms:[{c:[-s.sx*.55,s.sy-r*.72,r*.78],shape:"cup",wrist:[.9+c(23,.25),0,0]},{c:[s.sx*.55,s.sy-r*.72,r*.78],shape:"cup",wrist:[.9+Math.sin(e*23+2)*.25,0,0]}],head:{x:.16},chest:{x:.08}};case"press":{let l=Math.min(t*.45,1.2),u=qt((e-l)/.22)*(1-qt((e-l-.4)/.3));return{arms:[null,{w:n.toward(n.key,r*(1-.12*(1-u))),pole:[s.sx*1.8,s.sy-.6,-.4],shape:"point"}],chest:{x:.05+.07*u,y:-.2},head:{x:.08},press:u,look:"key"}}case"nod":return{head:{x:c(8,.14)}};case"headshake":return{head:{y:c(9,.3)}};case"lean":return{chest:{x:.2},head:{x:.06},arms:[{c:[-s.sx*1.05,s.sy-r*.82,-.05],shape:"fist"},{c:[s.sx*1.05,s.sy-r*.82,-.05],shape:"fist"}]};case"jump":{let l=qt(e/.22)*(1-qt((e-.22)/.08)),u=Math.max(0,Math.sin(Je((e-.28)/.55,0,1)*ot)),h=qt((e-.83)/.08)*(1-qt((e-.95)/.2));return{hips:{y:-.22*(l+h*.8)},root:{y:.75*u},arms:[{c:[-s.sx*1.2,s.sy+r*.5*u-r*.4*l,r*.2],pole:[-s.sx*3,s.sy,-.3],shape:"open"},{c:[s.sx*1.2,s.sy+r*.5*u-r*.4*l,r*.2],pole:[s.sx*3,s.sy,-.3],shape:"open"}],head:{x:-.12*u}}}default:return{}}}var b0=Ct(),Sr=Ct(),nu=Ct(),v0=new kn,GM=new Ut,WM=Ct(),jM=Ct();function M0(i,e){let{t,talk:n,beat:s,face:r,action:a}=e,o=i.seed*.37,c=XM(i),l=a.k,u=l<=0?0:l>=1?1:Je(uf(l),0,1.08),h=df(a.name,a.local,a.dur,{m:c,beat:s,screen:e.screen,key:e.key,partner:e.partner,anchor:(w,C=0,M=0,S=0)=>()=>i.head.localToWorld(Ct(i.anchors[w].x+C,i.anchors[w].y+M,i.anchors[w].z+S)),toward:(w,C,M=1)=>()=>{let S=i.arms[M].shoulder.getWorldPosition(Ct());return S.add(w.clone().sub(S).normalize().multiplyScalar(C*i.root.scale.y))},toCamera:(w,C)=>()=>{let M=i.arms[1].shoulder.getWorldPosition(Ct()),S=e.camera.clone().sub(M);return S.y=0,S.normalize(),S.y=C,M.add(S.normalize().multiplyScalar(w*i.root.scale.y))}}),d=r.emotion==="sad"?1:0,f=r.emotion==="angry"?1:0;i.root.position.y=e.baseY+(h.root?.y||0)*l*i.root.scale.y,i.hips.position.set(Math.sin(t*.55+o)*.025,i.plan.leg+(h.hips?.y||0)*l-d*.03+Math.sin(t*1.7+o)*.006,0),i.hips.rotation.set(0,Math.sin(t*.4+o)*.03,Math.sin(t*.55+o)*.02),i.chest.rotation.set((h.chest?.x||0)*l+f*.06+d*.08+n*s*.04,Math.sin(t*.65+o)*.03+(h.chest?.y||0)*l,-Math.sin(t*.55+o)*.015),i.chest.scale.set(1,1+Math.sin(t*1.7+o)*.012,1+Math.sin(t*1.7+o)*.008);for(let w of i.arms)w.shoulder.position.y=i.plan.shoulderY+(h.shoulders||0)*l+d*-.03;i.neck.updateWorldMatrix(!0,!1);let g=i.neck.getWorldPosition(WM),b=h.look&&e[h.look]?e[h.look]:e.look,m=b?jM.copy(b).sub(g):null,p=0,x=0;if(m){let w=GM.copy(i.chest.getWorldQuaternion(new Ut)).invert();m.applyQuaternion(w),p=Je(Math.atan2(m.x,m.z),-.9,.9),x=Je(-Math.atan2(m.y,Math.hypot(m.x,m.z)),-.4,.4)}let _=x*.6+r.down+(h.head?.x||0)*l+n*(s*.07+Math.sin(t*5.3+o)*.015)+Math.sin(t*1.2+o)*.02,v=p*.75+(h.head?.y||0)*l+Math.sin(t*.7+o)*.04,y=r.tilt+(h.head?.z||0)*l+Math.sin(t*.8+o)*.02;i.neck.rotation.set(_*.35,v*.35,y*.3),i.head.rotation.set(_*.65,v*.65,y*.7),i.root.updateMatrixWorld(!0);let T=(i.seed+Math.floor(e.cueIndex||0))%2;return i.arms.forEach((w,C)=>{let M=w.s,S=C===T?1:.45,I=n*S*(.25+s*.55);v0.set(-.1-I*.5-d*-.04,0,M*(.12+.04*Math.sin(t*.9+o+C)+f*.05)),w.upper.quaternion.setFromEuler(v0),w.fore.rotation.set(-.28-I*1.1-f*.2,0,0);let D=h.arms?.[C],k=g0[n>.2&&S===1?"open":"relaxed"],W=[0,0,0];D&&l>0&&(VM(w,b0),D.c?i.chest.localToWorld(Sr.set(...D.c)):Sr.copy((D.h||D.w)()),Sr.lerpVectors(b0,Sr,u),Sr.y+=Math.sin(ot*Je(l,0,1))*.12*i.root.scale.y*(1-u),i.chest.localToWorld(nu.set(...D.pole||[M*1.4,i.plan.shoulderY-1,-.7])),m0(w,Sr,nu),k=g0[D.shape||"relaxed"].map((B,G)=>Us(k[G],B,u)),W=(D.wrist||[0,0,0]).map(B=>B*u)),w.hand.rotation.set(W[0],W[1],W[2]),w.fingers.forEach((B,G)=>B.rotation.set(0,0,-M*k[0]*(1+G*.08))),w.index.rotation.set(0,0,-M*k[1]),w.thumb.rotation.set(0,0,-M*k[2])}),i.legs.forEach((w,C)=>{let M=i.feet[C];M.updateWorldMatrix(!0,!1);let S=M.getWorldPosition(Sr);i.hips.updateWorldMatrix(!0,!1),i.root.localToWorld(nu.set(w.s*.1,i.plan.leg*.6,2)),m0(w,S,nu)}),i.tail&&i.tail.rotation.set(-.5+Math.sin(t*2.2+o)*.12,Math.sin(t*1.6+o)*.35,0),i.glow&&(i.glow.emissiveIntensity=1.05+Math.sin(t*3+o)*.15),{press:(h.press||0)*l}}function XM(i){let e=i.plan,t=i.kind==="bot"?1:i.member.look.build,n=i.member.look.head,s=i.kind==="bot"?.68:i.kind==="robot"?.5:.56;return{sx:e.shoulderX*t,sy:e.shoulderY,reach:e.upper+e.fore+e.hand,hw:s*n,ht:e.neckY+e.headY+(e.headC+(i.kind==="bot"?.47:.55))*n}}function w0(i,e=Ct()){i.root.updateWorldMatrix(!0,!0);let t=i.plan;return i.root.localToWorld(e.set(0,t.leg+t.chestY+t.neckY+t.headY+t.headC*i.member.look.head,0))}function ff(i){i.root.traverse(e=>{if(e.geometry?.dispose(),e.material)for(let t of Array.isArray(e.material)?e.material:[e.material])t.map?.dispose(),t.dispose()}),i.face?.tex.texture.dispose()}var ol=class{constructor(){this.domElement=document.createElement("canvas"),this.ctx=this.domElement.getContext("2d",{alpha:!1}),this.shadowMap={},this.isSoftware=!0,this.cache=new WeakMap,this.textures=new WeakMap,this.setSize(540,960)}setPixelRatio(){}setSize(e,t){this.domElement.width=e,this.domElement.height=t,this.w=e,this.h=t,this.depth=new Float32Array(e*t),this.blurCanvas=document.createElement("canvas"),this.blurCanvas.width=e,this.blurCanvas.height=t,this.staticKey=null}dispose(){}render(e,t){let n=this.ctx,s=this.w,r=this.h,a=n.createLinearGradient(0,0,s,r);a.addColorStop(0,"#192b36"),a.addColorStop(.5,"#17252d"),a.addColorStop(1,"#342b28"),n.fillStyle=a,n.fillRect(0,0,s,r),e.updateMatrixWorld(!0),t.updateMatrixWorld(!0);let o=new Le().multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),c=[],l=new P,u=new P,h=o.elements.join(",")+"|"+this.sceneRevision+"|"+this.warmth,d=this.staticKey===h,f=new P(-.5,.8,.65).normalize(),g=new P(.7,.5,-.5).normalize(),b=new P;e.traverseVisible(v=>{if(v.isSprite){if(l.setFromMatrixPosition(v.matrixWorld).applyMatrix4(o),l.z<1){let j=v.scale.x*40*s/540;n.globalAlpha=.25,n.drawImage(v.material.map.image,(l.x+1)*s/2-j/2,(1-l.y)*r/2-j/2,j,j),n.globalAlpha=1}return}if(!v.isMesh||d&&v.userData.staticLayer)return;let y=v.geometry,T=y.attributes.position,w=y.attributes.normal,C=y.attributes.uv,M=y.index,S=M?M.count:T.count,I=this.cache.get(y);I||(I={geometry:y},this.cache.set(y,I));let D=Array.isArray(v.material)?v.material[0]:v.material;if(!D||D.opacity===0)return;let k=new Le().multiplyMatrices(o,v.matrixWorld),W=new Ye().getNormalMatrix(v.matrixWorld),B=new Float32Array(T.count*4);for(let j=0;j<T.count;j++){l.fromBufferAttribute(T,j);let Q=k.elements,re=1/(Q[3]*l.x+Q[7]*l.y+Q[11]*l.z+Q[15]);l.applyMatrix4(k),B[j*4]=(l.x+1)*s*.5,B[j*4+1]=(1-l.y)*r*.5,B[j*4+2]=l.z,B[j*4+3]=re}let G=D.color||new xe("#ffffff"),Z=D.emissive||new xe(0),O=D.emissiveIntensity||0;for(let j=0;j<S;j+=3){let Q=M?M.getX(j):j,re=M?M.getX(j+1):j+1,ge=M?M.getX(j+2):j+2,He=B[Q*4],ke=B[Q*4+1],we=B[Q*4+2],Y=B[re*4],J=B[re*4+1],ce=B[re*4+2],ve=B[ge*4],fe=B[ge*4+1],We=B[ge*4+2];if(we>1||ce>1||We>1||we<-1||ce<-1||We<-1||Math.max(He,Y,ve)<-1||Math.min(He,Y,ve)>s+1||Math.max(ke,J,fe)<-1||Math.min(ke,J,fe)>r+1)continue;let wt=(Y-He)*(fe-ke)-(J-ke)*(ve-He);if(Math.abs(wt)<.015||wt>=0&&D.side!==Cn)continue;w?u.set(w.getX(Q)+w.getX(re)+w.getX(ge),w.getY(Q)+w.getY(re)+w.getY(ge),w.getZ(Q)+w.getZ(re)+w.getZ(ge)).applyMatrix3(W).normalize():u.set(0,1,0);let U=Math.max(0,u.dot(f)),it=Math.max(0,u.dot(g)),De=.29+Math.max(u.y,0)*.12,Ne=this.warmth||1,ye=G.r*(De+U*(.8+Ne*.1)+it*.3)+Z.r*O,vt=G.g*(De+U*.77+it*.22)+Z.g*O,Se=G.b*(De+U*(.76-Ne*.15)+it*.18)+Z.b*O,Oe=L=>Math.round(Math.min(1,L<=.0031308?L*12.92:1.055*Math.pow(L,1/2.4)-.055)*255),zt=D.isMeshBasicMaterial?[Oe(G.r),Oe(G.g),Oe(G.b)]:[Oe(ye),Oe(vt),Oe(Se)],yt={ax:He,ay:ke,az:we,bx:Y,by:J,bz:ce,cx:ve,cy:fe,cz:We,z:(we+ce+We)/3,color:zt,opacity:D.opacity,iw:[B[Q*4+3],B[re*4+3],B[ge*4+3]],transparent:D.transparent,staticLayer:v.userData.staticLayer};if(D.map?.image&&C){let L=this.textures.get(D.map);if(!L||L.version!==D.map.version){let E=D.map.image,V=E.getContext?.("2d");if(!V){let $=document.createElement("canvas");$.width=E.width,$.height=E.height,V=$.getContext("2d"),V.drawImage(E,0,0)}L={pixels:V.getImageData(0,0,E.width,E.height).data,width:E.width,height:E.height,version:D.map.version},this.textures.set(D.map,L)}yt.texture=L,yt.uv=[C.getX(Q),1-C.getY(Q),C.getX(re),1-C.getY(re),C.getX(ge),1-C.getY(ge)]}c.push(yt)}}),c.sort((v,y)=>Number(v.transparent)-Number(y.transparent)||(v.transparent?y.z-v.z:v.z-y.z));let m=n.getImageData(0,0,s,r),p=m.data,x=this.depth;d?(p.set(this.staticPixels),x.set(this.staticDepth)):x.fill(1/0);let _=d?[c]:[c.filter(v=>v.staticLayer),c.filter(v=>!v.staticLayer)];for(let v=0;v<_.length;v++){for(let y of _[v]){let T=Math.max(0,Math.floor(Math.min(y.ax,y.bx,y.cx))),w=Math.min(s-1,Math.ceil(Math.max(y.ax,y.bx,y.cx))),C=Math.max(0,Math.floor(Math.min(y.ay,y.by,y.cy))),M=Math.min(r-1,Math.ceil(Math.max(y.ay,y.by,y.cy))),S=(y.by-y.cy)*(y.ax-y.cx)+(y.cx-y.bx)*(y.ay-y.cy);if(Math.abs(S)<1e-8)continue;let I=(y.by-y.cy)/S,D=(y.cx-y.bx)/S,k=(y.cy-y.ay)/S,W=(y.ax-y.cx)/S,B=y.texture,G=y.uv,Z=y.iw;for(let O=C;O<=M;O++){let j=((y.by-y.cy)*(T+.5-y.cx)+(y.cx-y.bx)*(O+.5-y.cy))/S,Q=((y.cy-y.ay)*(T+.5-y.cx)+(y.ax-y.cx)*(O+.5-y.cy))/S;for(let re=T;re<=w;re++,j+=I,Q+=k){let ge=1-j-Q;if(j<-1e-5||Q<-1e-5||ge<-1e-5)continue;let He=j*y.az+Q*y.bz+ge*y.cz,ke=O*s+re;if(He>x[ke]+1e-6)continue;let we=y.color[0],Y=y.color[1],J=y.color[2],ce=y.opacity??1;if(B){let fe=1/(j*Z[0]+Q*Z[1]+ge*Z[2]),We=(j*G[0]*Z[0]+Q*G[2]*Z[1]+ge*G[4]*Z[2])*fe,wt=(j*G[1]*Z[0]+Q*G[3]*Z[1]+ge*G[5]*Z[2])*fe,U=Math.max(0,Math.min(B.width-1,Math.floor(We*B.width))),it=Math.max(0,Math.min(B.height-1,Math.floor(wt*B.height))),De=(it*B.width+U)*4;we=B.pixels[De],Y=B.pixels[De+1],J=B.pixels[De+2],ce*=B.pixels[De+3]/255}if(ce<.01)continue;let ve=ke*4;ce>.99?(p[ve]=we,p[ve+1]=Y,p[ve+2]=J):(p[ve]=p[ve]*(1-ce)+we*ce,p[ve+1]=p[ve+1]*(1-ce)+Y*ce,p[ve+2]=p[ve+2]*(1-ce)+J*ce),y.transparent||(x[ke]=He)}}}if(!d&&v===0){if(n.putImageData(m,0,0),this.focusDistance){let y=this.blurCanvas.getContext("2d");y.clearRect(0,0,s,r),y.filter=`blur(${4*s/540}px)`,y.drawImage(this.domElement,0,0),y.filter="none";let T=y.getImageData(0,0,s,r).data,w=2*t.near*t.far,C=t.far+t.near,M=t.far-t.near;for(let S=0;S<x.length;S++){let I=w/(C-x[S]*M),D=Math.min(.9,Math.max(0,(Math.abs(I-this.focusDistance)-1.1)/5));if(D<=0||!Number.isFinite(D))continue;let k=S*4;p[k]+=D*(T[k]-p[k]),p[k+1]+=D*(T[k+1]-p[k+1]),p[k+2]+=D*(T[k+2]-p[k+2])}n.putImageData(m,0,0)}this.staticPixels=new Uint8ClampedArray(p),this.staticDepth=new Float32Array(x),this.staticKey=h}}n.putImageData(m,0,0)}};function pf(i,e){if(e===Id)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Ma||e===Ko){let t=i.getIndex();if(t===null){let a=[],o=i.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Ma)for(let a=1;a<=n;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var iu=class extends Di{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new yf(t)}),this.register(function(t){return new Sf(t)}),this.register(function(t){return new If(t)}),this.register(function(t){return new Df(t)}),this.register(function(t){return new Lf(t)}),this.register(function(t){return new wf(t)}),this.register(function(t){return new Tf(t)}),this.register(function(t){return new Ef(t)}),this.register(function(t){return new Af(t)}),this.register(function(t){return new _f(t)}),this.register(function(t){return new Cf(t)}),this.register(function(t){return new Mf(t)}),this.register(function(t){return new Pf(t)}),this.register(function(t){return new Rf(t)}),this.register(function(t){return new vf(t)}),this.register(function(t){return new Uf(t)}),this.register(function(t){return new kf(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=os.extractUrlBase(e);a=os.resolveURL(l,this.path)}else a=os.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new va(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===R0){try{a[rt.KHR_BINARY_GLTF]=new Nf(e)}catch(h){s&&s(h);return}r=JSON.parse(a[rt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Gf(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case rt.KHR_MATERIALS_UNLIT:a[h]=new xf;break;case rt.KHR_DRACO_MESH_COMPRESSION:a[h]=new Ff(r,this.dracoLoader);break;case rt.KHR_TEXTURE_TRANSFORM:a[h]=new Of;break;case rt.KHR_MESH_QUANTIZATION:a[h]=new Bf;break;default:d.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function qM(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var rt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},vf=class{constructor(e){this.parser=e,this.name=rt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,u=new xe(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],bn);let h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Li(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Cs(u),l.distance=h;break;case"spot":l=new Oo(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Fi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},xf=class{constructor(){this.name=rt.KHR_MATERIALS_UNLIT}getMaterialType(){return tn}extendParams(e,t,n){let s=[];e.color=new xe(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],bn),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Ht))}return Promise.all(s)}},_f=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},yf=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ne(o,o)}return Promise.all(r)}},Sf=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},Mf=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}},wf=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new xe(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=s.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],bn)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Ht)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}},Tf=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}},Ef=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new xe().setRGB(o[0],o[1],o[2],bn),Promise.all(r)}},Af=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Cf=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new xe().setRGB(o[0],o[1],o[2],bn),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Ht)),Promise.all(r)}},Rf=class{constructor(e){this.parser=e,this.name=rt.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}},Pf=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}},If=class{constructor(e){this.parser=e,this.name=rt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},Df=class{constructor(e){this.parser=e,this.name=rt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},Lf=class{constructor(e){this.parser=e,this.name=rt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},Uf=class{constructor(e){this.name=rt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let c=s.byteOffset||0,l=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(f),u,h,d,s.mode,s.filter),f})})}else return null}},kf=class{constructor(e){this.name=rt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==ui.TRIANGLES&&l.mode!==ui.TRIANGLE_STRIP&&l.mode!==ui.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(u=>(c[l]=u,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let u=l.pop(),h=u.isGroup?u.children:[u],d=l[0].count,f=[];for(let g of h){let b=new Le,m=new P,p=new Ut,x=new P(1,1,1),_=new wo(g.geometry,g.material,d);for(let v=0;v<d;v++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,v),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,v),c.SCALE&&x.fromBufferAttribute(c.SCALE,v),_.setMatrixAt(v,b.compose(m,p,x));for(let v in c)if(v==="_COLOR_0"){let y=c[v];_.instanceColor=new Ts(y.array,y.itemSize,y.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,c[v]);kt.prototype.copy.call(_,g),this.parser.assignFinalMaterial(_),f.push(_)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}},R0="glTF",ll=12,T0={JSON:1313821514,BIN:5130562},Nf=class{constructor(e){this.name=rt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,ll),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==R0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-ll,r=new DataView(e,ll),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let c=r.getUint32(a,!0);if(a+=4,c===T0.JSON){let l=new Uint8Array(e,ll+a,o);this.content=n.decode(l)}else if(c===T0.BIN){let l=ll+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Ff=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=rt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let u in a){let h=Hf[u]||u.toLowerCase();o[h]=a[u]}for(let u in e.attributes){let h=Hf[u]||u.toLowerCase();if(a[u]!==void 0){let d=n.accessors[e.attributes[u]],f=Oa[d.componentType];l[h]=f.name,c[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){s.decodeDracoFile(u,function(f){for(let g in f.attributes){let b=f.attributes[g],m=c[g];m!==void 0&&(b.normalized=m)}h(f)},o,l,bn,d)})})}},Of=class{constructor(){this.name=rt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Bf=class{constructor(){this.name=rt.KHR_MESH_QUANTIZATION}},su=class extends is{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,u=s-t,h=(n-t)/u,d=h*h,f=d*h,g=e*l,b=g-l,m=-2*f+3*d,p=f-d,x=1-m,_=p-d+h;for(let v=0;v!==o;v++){let y=a[b+v+o],T=a[b+v+c]*u,w=a[g+v+o],C=a[g+v]*u;r[v]=x*y+_*T+m*w+p*C}return r}},YM=new Ut,zf=class extends su{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return YM.fromArray(r).normalize().toArray(r),r}},ui={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Oa={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},E0={9728:jt,9729:Un,9984:Qc,9985:ya,9986:mr,9987:Si},A0={33071:Ti,33648:sa,10497:zn},mf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Hf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Os={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},KM={CUBICSPLINE:void 0,LINEAR:er,STEP:Qs},gf={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function $M(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new $n({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Yn})),i.DefaultMaterial}function Tr(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Fi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function ZM(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,u=e.length;l<u;l++){let h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],c=[];for(let l=0,u=e.length;l<u;l++){let h=e[l];if(n){let d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;a.push(d)}if(s){let d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;o.push(d)}if(r){let d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let u=l[0],h=l[1],d=l[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function JM(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function QM(i){let e,t=i.extensions&&i.extensions[rt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+bf(t.attributes):e=i.indices+":"+bf(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+bf(i.targets[n]);return e}function bf(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Vf(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function ew(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var tw=new Le,Gf=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new qM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new ko(this.options.manager):this.textureLoader=new Bo(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new va(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return Tr(r,o,s),Fi(o,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,u]of a.children.entries())r(u,o.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[rt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(os.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=mf[s.type],o=Oa[s.componentType],c=s.normalized===!0,l=new o(s.count*a);return Promise.resolve(new en(l,a,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],c=mf[s.type],l=Oa[s.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,b,m;if(f&&f!==h){let p=Math.floor(d/f),x="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,_=t.cache.get(x);_||(b=new l(o,p*f,s.count*f/u),_=new nr(b,f/u),t.cache.add(x,_)),m=new ws(_,c,d%f/u,g)}else o===null?b=new l(s.count*c):b=new l(o,d,s.count*c),m=new en(b,c,g);if(s.sparse!==void 0){let p=mf.SCALAR,x=Oa[s.sparse.indices.componentType],_=s.sparse.indices.byteOffset||0,v=s.sparse.values.byteOffset||0,y=new x(a[1],_,s.sparse.count*p),T=new l(a[2],v,s.sparse.count*c);o!==null&&(m=new en(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let w=0,C=y.length;w<C;w++){let M=y[w];if(m.setX(M,T[w*c]),c>=2&&m.setY(M,T[w*c+1]),c>=3&&m.setZ(M,T[w*c+2]),c>=4&&m.setW(M,T[w*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return u.magFilter=E0[d.magFilter]||Un,u.minFilter=E0[d.minFilter]||Si,u.wrapS=A0[d.wrapS]||zn,u.wrapT=A0[d.wrapT]||zn,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==jt&&u.minFilter!==Un,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let a=s.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(h){l=!0;let d=new Blob([h],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(c).then(function(h){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(b){let m=new an(b);m.needsUpdate=!0,d(m)}),t.load(os.resolveURL(h,r.path),g,void 0,f)})}).then(function(h){return l===!0&&o.revokeObjectURL(c),Fi(h,a),h.userData.mimeType=a.mimeType||ew(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[rt.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[rt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=r.associations.get(a);a=r.extensions[rt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Es,An.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new fa,An.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return $n}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},c=r.extensions||{},l=[];if(c[rt.KHR_MATERIALS_UNLIT]){let h=s[rt.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),l.push(h.extendParams(o,r,t))}else{let h=r.pbrMetallicRoughness||{};if(o.color=new xe(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){let d=h.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],bn),o.opacity=d[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",h.baseColorTexture,Ht)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Cn);let u=r.alphaMode||gf.OPAQUE;if(u===gf.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===gf.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==tn&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new ne(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&a!==tn&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==tn){let h=r.emissiveFactor;o.emissive=new xe().setRGB(h[0],h[1],h[2],bn)}return r.emissiveTexture!==void 0&&a!==tn&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Ht)),Promise.all(l).then(function(){let h=new a(o);return r.name&&(h.name=r.name),Fi(h,r),t.associations.set(h,{materials:e}),r.extensions&&Tr(s,h,r),h})}createUniqueName(e){let t=Pt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[rt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return C0(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],u=QM(l),h=s[u];if(h)a.push(h.promise);else{let d;l.extensions&&l.extensions[rt.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=C0(new Nt,l,t),s[u]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let u=a[c].material===void 0?$M(this.cache):this.getDependency("material",a[c].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){let l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let f=0,g=u.length;f<g;f++){let b=u[f],m=a[f],p,x=l[f];if(m.mode===ui.TRIANGLES||m.mode===ui.TRIANGLE_STRIP||m.mode===ui.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new So(b,x):new ct(b,x),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===ui.TRIANGLE_STRIP?p.geometry=pf(p.geometry,Ko):m.mode===ui.TRIANGLE_FAN&&(p.geometry=pf(p.geometry,Ma));else if(m.mode===ui.LINES)p=new To(b,x);else if(m.mode===ui.LINE_STRIP)p=new ir(b,x);else if(m.mode===ui.LINE_LOOP)p=new Eo(b,x);else if(m.mode===ui.POINTS)p=new sr(b,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&JM(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Fi(p,r),m.extensions&&Tr(s,p,m),t.assignFinalMaterial(p),h.push(p)}for(let f=0,g=h.length;f<g;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&Tr(s,h[0],r),h[0];let d=new Kt;r.extensions&&Tr(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Qt($o.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new as(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Fi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],c=[];for(let l=0,u=a.length;l<u;l++){let h=a[l];if(h){o.push(h);let d=new Le;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Mo(o,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],c=[],l=[],u=[];for(let h=0,d=s.channels.length;h<d;h++){let f=s.channels[h],g=s.samplers[f.sampler],b=f.target,m=b.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,x=s.parameters!==void 0?s.parameters[g.output]:g.output;b.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",x)),l.push(g),u.push(b))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){let d=h[0],f=h[1],g=h[2],b=h[3],m=h[4],p=[];for(let _=0,v=d.length;_<v;_++){let y=d[_],T=f[_],w=g[_],C=b[_],M=m[_];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();let S=n._createAnimationTracks(y,T,w,C,M);if(S)for(let I=0;I<S.length;I++)p.push(S[I])}let x=new Uo(r,void 0,p);return Fi(x,s),x})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=s.weights.length;c<l;c++)o.morphTargetInfluences[c]=s.weights[c]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let l=0,u=o.length;l<u;l++)a.push(n.getDependency("node",o[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){let u=l[0],h=l[1],d=l[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,tw)});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let u;if(r.isBone===!0?u=new ua:l.length>1?u=new Kt:l.length===1?u=l[0]:u=new kt,u!==l[0])for(let h=0,d=l.length;h<d;h++)u.add(l[h]);if(r.name&&(u.userData.name=r.name,u.name=a),Fi(u,r),r.extensions&&Tr(n,u,r),r.matrix!==void 0){let h=new Le;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!s.associations.has(u))s.associations.set(u,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let h=s.associations.get(u);s.associations.set(u,{...h})}return s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new Kt;n.name&&(r.name=s.createUniqueName(n.name)),Fi(r,n),n.extensions&&Tr(t,r,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(s.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let u=0,h=c.length;u<h;u++)r.add(c[u]);let l=u=>{let h=new Map;for(let[d,f]of s.associations)(d instanceof An||d instanceof an)&&h.set(d,f);return u.traverse(d=>{let f=s.associations.get(d);f!=null&&h.set(d,f)}),h};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,c=[];Os[r.path]===Os.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(o);let l;switch(Os[r.path]){case Os.weights:l=Ri;break;case Os.rotation:l=Pi;break;case Os.translation:case Os.scale:l=Ii;break;default:switch(n.itemSize){case 1:l=Ri;break;case 2:case 3:default:l=Ii;break}break}let u=s.interpolation!==void 0?KM[s.interpolation]:er,h=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){let g=new l(c[d]+"."+Os[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Vf(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Pi?zf:su;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function nw(i,e,t){let n=e.attributes,s=new En;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(s.set(new P(c[0],c[1],c[2]),new P(l[0],l[1],l[2])),o.normalized){let u=Vf(Oa[o.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new P,c=new P;for(let l=0,u=r.length;l<u;l++){let h=r[l];if(h.POSITION!==void 0){let d=t.json.accessors[h.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let b=Vf(Oa[d.componentType]);c.multiplyScalar(b)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new Hn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function C0(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){i.setAttribute(o,c)})}for(let a in n){let o=Hf[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return st.workingColorSpace!==bn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${st.workingColorSpace}" not supported.`),Fi(i,e),nw(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?ZM(i,e.targets,t):i})}var P0=(function(){var i="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q:Odkr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq;w8Wqdbk;esezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9Uc;WFbGgocjdaocjd6EhDaicefhocbhqdnindndndnaeaq9nmbaDaeaq9RaqaDfae6Egkcsfglcl4cifcd4hxalc9WGgmTmecbhPawcjdfhsaohzinaraz9Rax6mvarazaxfgo9RcK6mvczhlcbhHinalgic9WfgOawcj;cbffhldndndndndnazaOco4fRbbaHcoG4ciGPlbedibkal9cb83ibalcwf9cb83ibxikalaoRblaoRbbgOco4gAaAciSgAE86bbawcj;cbfaifglcGfaoclfaAfgARbbaOcl4ciGgCaCciSgCE86bbalcVfaAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc7faAaCfgARbbaOciGgOaOciSgOE86bbalctfaAaOfgARbbaoRbegOco4gCaCciSgCE86bbalc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbalc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc93faAaCfgARbbaOciGgOaOciSgOE86bbalc94faAaOfgARbbaoRbdgOco4gCaCciSgCE86bbalc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbalc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc97faAaCfgARbbaOciGgOaOciSgOE86bbalc98faAaOfgORbbaoRbigoco4gAaAciSgAE86bbalc99faOaAfgORbbaocl4ciGgAaAciSgAE86bbalc9:faOaAfgORbbaocd4ciGgAaAciSgAE86bbalcufaOaAfglRbbaociGgoaociSgoE86bbalaofhoxdkalaoRbwaoRbbgOcl4gAaAcsSgAE86bbawcj;cbfaifglcGfaocwfaAfgARbbaOcsGgOaOcsSgOE86bbalcVfaAaOfgORbbaoRbegAcl4gCaCcsSgCE86bbalc7faOaCfgORbbaAcsGgAaAcsSgAE86bbalctfaOaAfgORbbaoRbdgAcl4gCaCcsSgCE86bbalc91faOaCfgORbbaAcsGgAaAcsSgAE86bbalc4faOaAfgORbbaoRbigAcl4gCaCcsSgCE86bbalc93faOaCfgORbbaAcsGgAaAcsSgAE86bbalc94faOaAfgORbbaoRblgAcl4gCaCcsSgCE86bbalc95faOaCfgORbbaAcsGgAaAcsSgAE86bbalc96faOaAfgORbbaoRbvgAcl4gCaCcsSgCE86bbalc97faOaCfgORbbaAcsGgAaAcsSgAE86bbalc98faOaAfgORbbaoRbogAcl4gCaCcsSgCE86bbalc99faOaCfgORbbaAcsGgAaAcsSgAE86bbalc9:faOaAfgORbbaoRbrgocl4gAaAcsSgAE86bbalcufaOaAfglRbbaocsGgoaocsSgoE86bbalaofhoxekalao8Pbb83bbalcwfaocwf8Pbb83bbaoczfhokdnaiam9pmbaHcdfhHaiczfhlarao9RcL0mekkaiam6mvaoTmvdnakTmbawaPfRbbhHawcj;cbfhlashiakhOinaialRbbgzce4cbazceG9R7aHfgH86bbaiadfhialcefhlaOcufgOmbkkascefhsaohzaPcefgPad9hmbxikkcbc99arao9Radcaadca0ESEhoxlkaoaxad2fhCdnakmbadhlinaoTmlarao9Rax6mlaoaxfhoalcufglmbkaChoxekcbhmawcjdfhAinarao9Rax6miawamfRbbhHawcj;cbfhlaAhiakhOinaialRbbgzce4cbazceG9R7aHfgH86bbaiadfhialcefhlaOcufgOmbkaAcefhAaoaxfhoamcefgmad9hmbkaChokabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqaombkc9:hoxekc9:hokavcj;ebf8Kjjjjbaok;cseHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgwce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhDaicefgqarfhidnaeTmbcmcsawceSEhkcbhxcbhmcbhPcbhwcbhlindnaiaD9nmbc9:hoxikdndnaqRbbgoc;Ve0mbavc;abfalaocu7gscl4fcsGcitfgzydlhrazydbhzdnaocsGgHak9pmbavawasfcsGcdtfydbaxaHEhoaHThsdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkaxasfhxcdhHavawcdtfaoBdbawasfhwcehsalhOxdkdndnaHcsSmbaHc987aHamffcefhoxekaicefhoai8SbbgHcFeGhsdndnaHcu9mmbaohixekaicvfhiascFbGhscrhHdninao8SbbgOcFbGaHtasVhsaOcu9kmeaocefhoaHcrfgHc8J9hmbxdkkaocefhikasce4cbasceG9R7amfhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhHavawcdtfaoBdbcehsawcefhwalhOaohmxekdnaocpe0mbaxcefgHavawaDaocsGfRbbgocl49RcsGcdtfydbaocz6gzEhravawao9RcsGcdtfydbaHazfgAaocsGgHEhoaHThCdndnadcd9hmbabaPcetfgHax87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHaxBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfaxBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgOaxBdlaOarBdbavawazfgwcsGcdtfaoBdbalcefcsGhOawaCfhwaxhzaAaCfhxxekaxcbaiRbbgOEgzaoc;:eSgHfhraOcsGhCaOcl4hAdndnaOcs0mbarcefhoxekarhoavawaA9RcsGcdtfydbhrkdndnaCmbaocefhxxekaohxavawaO9RcsGcdtfydbhokdndnaHTmbaicefhHxekaicdfhHai8SbegscFeGhzdnascu9kmbaicofhXazcFbGhzcrhidninaH8SbbgscFbGaitazVhzascu9kmeaHcefhHaicrfgic8J9hmbkaXhHxekaHcefhHkazce4cbazceG9R7amfgmhzkdndnaAcsSmbaHhsxekaHcefhsaH8SbbgicFeGhrdnaicu9kmbaHcvfhXarcFbGhrcrhidninas8SbbgHcFbGaitarVhraHcu9kmeascefhsaicrfgic8J9hmbkaXhsxekascefhskarce4cbarceG9R7amfgmhrkdndnaCcsSmbashixekascefhias8SbbgocFeGhHdnaocu9kmbascvfhXaHcFbGhHcrhodninai8SbbgscFbGaotaHVhHascu9kmeaicefhiaocrfgoc8J9hmbkaXhixekaicefhikaHce4cbaHceG9R7amfgmhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfazBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgXazBdlaXarBdbavawaOcz6aAcsSVfgwcsGcdtfaoBdbawaCTaCcsSVfhwalcefcsGhOkaqcefhqavc;abfaOcitfgOarBdlaOaoBdbavc;abfalasfcsGcitfgraoBdlarazBdbawcsGhwalaHfcsGhlaPcifgPae6mbkkcbc99aiaDSEhokavc;aef8Kjjjjbaok:flevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;oiliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabaiavcefciGfcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:OhDxekcjjjj94hDkabaiavciGfgkcd7cetfaD87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:OhDxekcjjjj94hDkabaiavcufciGfcetfaD87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohvxekcjjjj94hvkabakcetfav87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklzNbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q:6dkr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq:p9sqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk:N8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhlaicefhodnaeTmbadTmbalc;WFbGglcjdalcjd6EhwcbhDinawaeaD9RaDawfae6Egqcsfglc9WGgkci2hxakcethmalcl4cifcd4hPabaDad2fhsakc;ab6hzcbhHincbhOaohAdndninaraA9RaP6meavcj;cbfaOak2fhCaAaPfhocbhidnazmbarao9Rc;Gb6mbcbhlinaCalfhidndndndndnaAalco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklbaoczfhokdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklzaoczfhokdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklaaoczfhokdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WaoclfaYpQbfaXc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WaocwfaYpQbfaXc:q:yjjbfRbbfhoxekaiaopbbbpkl8Waoczfhokalc;abfhialcjefak0meaihlarao9Rc;Fb0mbkkdnaiak9pmbaici4hlinarao9RcK6miaCaifhXdndndndndnaAaico4fRbbalcoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpkbbxikaXaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkbbaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaXaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkbbaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaXaopbbbpkbbaoczfhokalcdfhlaiczfgiak6mbkkaoTmeaohAaOcefgOclSmdxbkkc9:hoxlkdnakTmbavcjdfaHfhiavaHfpbdbhYcbhXinaiavcj;cbfaXfglpblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLalakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEalamfpblbg3cep9Ta3aQp9op9Hp9rg3alaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfhiaXczfgXak6mbkkaHclfgHad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfgDae6mbkkcbc99arao9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk::seHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgwce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhDaicefgqarfhidnaeTmbcmcsawceSEhkcbhxcbhmcbhPcbhwcbhlindnaiaD9nmbc9:hoxikdndnaqRbbgoc;Ve0mbavc;abfalaocu7gscl4fcsGcitfgzydlhrazydbhzdnaocsGgHak9pmbavawasfcsGcdtfydbaxaHEhoaHThsdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkaxasfhxcdhHavawcdtfaoBdbawasfhwcehsalhOxdkdndnaHcsSmbaHc987aHamffcefhoxekaicefhoai8SbbgHcFeGhsdndnaHcu9mmbaohixekaicvfhiascFbGhscrhHdninao8SbbgOcFbGaHtasVhsaOcu9kmeaocefhoaHcrfgHc8J9hmbxdkkaocefhikasce4cbasceG9R7amfhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhHavawcdtfaoBdbcehsawcefhwalhOaohmxekdnaocpe0mbaxcefgHavawaDaocsGfRbbgocl49RcsGcdtfydbaocz6gzEhravawao9RcsGcdtfydbaHazfgAaocsGgHEhoaHThCdndnadcd9hmbabaPcetfgHax87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHaxBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfaxBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgOaxBdlaOarBdbavawazfgwcsGcdtfaoBdbalcefcsGhOawaCfhwaxhzaAaCfhxxekaxcbaiRbbgOEgzaoc;:eSgHfhraOcsGhCaOcl4hAdndnaOcs0mbarcefhoxekarhoavawaA9RcsGcdtfydbhrkdndnaCmbaocefhxxekaohxavawaO9RcsGcdtfydbhokdndnaHTmbaicefhHxekaicdfhHai8SbegscFeGhzdnascu9kmbaicofhXazcFbGhzcrhidninaH8SbbgscFbGaitazVhzascu9kmeaHcefhHaicrfgic8J9hmbkaXhHxekaHcefhHkazce4cbazceG9R7amfgmhzkdndnaAcsSmbaHhsxekaHcefhsaH8SbbgicFeGhrdnaicu9kmbaHcvfhXarcFbGhrcrhidninas8SbbgHcFbGaitarVhraHcu9kmeascefhsaicrfgic8J9hmbkaXhsxekascefhskarce4cbarceG9R7amfgmhrkdndnaCcsSmbashixekascefhias8SbbgocFeGhHdnaocu9kmbascvfhXaHcFbGhHcrhodninai8SbbgscFbGaotaHVhHascu9kmeaicefhiaocrfgoc8J9hmbkaXhixekaicefhikaHce4cbaHceG9R7amfgmhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfazBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgXazBdlaXarBdbavawaOcz6aAcsSVfgwcsGcdtfaoBdbawaCTaCcsSVfhwalcefcsGhOkaqcefhqavc;abfaOcitfgOarBdlaOaoBdbavc;abfalasfcsGcitfgraoBdlarazBdbawcsGhwalaHfcsGhlaPcifgPae6mbkkcbc99aiaDSEhokavc;aef8Kjjjjbaok:flevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:wPliuo97eue978Jjjjjbca9Rhiaec98Ghldndnadcl9hmbdnalTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalaeSmeaipxbbbbbbbbbbbbbbbbgqpklbaiabalcdtfgdaeciGglcdtgv;8qbbdnalTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDaqp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkadaiav;8qbbskdnalTmbcbhvabhdinadczfgxaxpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmbediwDqkzHOAKY8AEgwczp:Reczp:Sep;6egraDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eawczp:Sep;6egwp;Gearp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegrpxb;:FSb;:FSb;:FSb;:FSararp;Meaoaop;Meawaqawamp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFFbbFFbbFFbbFFbbp9oaoawp;Meaqp;Keczp:Rep9qgoarawp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogrpmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oaoarpmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgval6mbkkalaeSmbaiaeciGgvcitgdfcbcaad9R;8kbaiabalcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmbediwDqkzHOAKY8AEgwczp:Reczp:Sep;6egraDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eawczp:Sep;6egwp;Gearp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegrpxb;:FSb;:FSb;:FSb;:FSararp;Meaoaop;Meawaqawamp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFFbbFFbbFFbbFFbbp9oaoawp;Meaqp;Keczp:Rep9qgoarawp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogrpmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oaoarpmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaDakp;Mearp;Keamp9oaqakp;Mearp;Keczp:Rep9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalaeSmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaDakp;Mearp;Keamp9oaqakp;Mearp;Keczp:Rep9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbheabhdinadadpbbbgocwp:Recwp:Sep;6eaocep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbadczfhdaeclfgeav6mbkkdnavalSmbaialciGgecdtgdVcbc;abad9R;8kbaiabavcdtfgvad;8qbbdnaeTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepklbkavaiad;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz:Dbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var s=WebAssembly.validate(t)?o(e):o(i),r,a=WebAssembly.instantiate(s,{}).then(function(p){r=p.instance,r.exports.__wasm_call_ctors()});function o(p){for(var x=new Uint8Array(p.length),_=0;_<p.length;++_){var v=p.charCodeAt(_);x[_]=v>96?v-97:v>64?v-39:v+4}for(var y=0,_=0;_<p.length;++_)x[y++]=x[_]<60?n[x[_]]:(x[_]-60)*64+x[++_];return x.buffer.slice(0,y)}function c(p,x,_,v,y,T,w){var C=p.exports.sbrk,M=v+3&-4,S=C(M*y),I=C(T.length),D=new Uint8Array(p.exports.memory.buffer);D.set(T,I);var k=x(S,v,y,I,T.length);if(k==0&&w&&w(S,M,y),_.set(D.subarray(S,S+v*y)),C(S-C(0)),k!=0)throw new Error("Malformed buffer data: "+k)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},u={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},h=[],d=0;function f(p){var x={object:new Worker(p),pending:0,requests:{}};return x.object.onmessage=function(_){var v=_.data;x.pending-=v.count,x.requests[v.id][v.action](v.value),delete x.requests[v.id]},x}function g(p){for(var x="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(s)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+m.name+";"+c.toString()+m.toString(),_=new Blob([x],{type:"text/javascript"}),v=URL.createObjectURL(_),y=h.length;y<p;++y)h[y]=f(v);for(var y=p;y<h.length;++y)h[y].object.postMessage({});h.length=p,URL.revokeObjectURL(v)}function b(p,x,_,v,y){for(var T=h[0],w=1;w<h.length;++w)h[w].pending<T.pending&&(T=h[w]);return new Promise(function(C,M){var S=new Uint8Array(_),I=++d;T.pending+=p,T.requests[I]={resolve:C,reject:M},T.object.postMessage({id:I,count:p,size:x,source:S,mode:v,filter:y},[S.buffer])})}function m(p){var x=p.data;if(!x.id)return self.close();self.ready.then(function(_){try{var v=new Uint8Array(x.count*x.size);c(_,_.exports[x.mode],v,x.count,x.size,x.source,_.exports[x.filter]),self.postMessage({id:x.id,count:x.count,action:"resolve",value:v},[v.buffer])}catch(y){self.postMessage({id:x.id,count:x.count,action:"reject",value:y})}})}return{ready:a,supported:!0,useWorkers:function(p){g(p)},decodeVertexBuffer:function(p,x,_,v,y){c(r,r.exports.meshopt_decodeVertexBuffer,p,x,_,v,r.exports[l[y]])},decodeIndexBuffer:function(p,x,_,v){c(r,r.exports.meshopt_decodeIndexBuffer,p,x,_,v)},decodeIndexSequence:function(p,x,_,v){c(r,r.exports.meshopt_decodeIndexSequence,p,x,_,v)},decodeGltfBuffer:function(p,x,_,v,y,T){c(r,r.exports[u[y]],p,x,_,v,r.exports[l[T]])},decodeGltfBufferAsync:function(p,x,_,v,y){return h.length>0?b(p,x,_,u[v],l[y]):a.then(function(){var T=new Uint8Array(p*x);return c(r,r.exports[u[v]],T,p,x,_,r.exports[l[y]]),T})}}})();var I0=["hips","spine","chest","neck","head","jaw","leftShoulder","leftUpperArm","leftLowerArm","leftHand","rightShoulder","rightUpperArm","rightLowerArm","rightHand","leftUpperLeg","leftLowerLeg","leftFoot","rightUpperLeg","rightLowerLeg","rightFoot"];var iw=/mixamorig\d*|j_bip_[clr]_|cc_base_|bip0?1|def[-_]|armature|^.*[|:]/g;function sw(i){let e=i.toLowerCase();return/left|(^|[^a-z])l([^a-z]|$)|[._]l$|_l_/.test(e)?"left":/right|(^|[^a-z])r([^a-z]|$)|[._]r$|_r_/.test(e)?"right":""}function rw(i){return i.toLowerCase().replace(/^mixamorig\d*[:_]?/,"").replace(iw,"").replace(/left|right/g,"").replace(/(^|[^a-z])[lr](?=[^a-z]|$)/g,"$1").replace(/[^a-z0-9]/g,"")}var aw={hips:/^(hips?|pelvis)$/,spine:/^(spine0?1?|abdomen|waist)$/,chest:/^(spine0?[23]|chest|upperchest|torso|spine03)$/,neck:/^neck0?1?$/,head:/^head$/,jaw:/^jaw$/,shoulder:/^(shoulder|clavicle)$/,upperArm:/^(upperarm|arm|uparm)$/,lowerArm:/^(forearm|lowerarm|elbow)$/,hand:/^(hand|wrist)$/,upperLeg:/^(upleg|upperleg|thigh)$/,lowerLeg:/^(leg|lowerleg|calf|shin|knee)$/,foot:/^(foot|ankle)$/};function D0(i){let e=i.nodes||[],t=new Set((i.skins||[]).flatMap(l=>l.joints||[])),n={},s=new Map;e.forEach((l,u)=>(l.children||[]).forEach(h=>s.set(h,u)));let r=i.extensions?.VRMC_vrm?.humanoid?.humanBones,a=i.extensions?.VRM?.humanoid?.humanBones;if(r)for(let[l,{node:u}]of Object.entries(r))I0.includes(l)&&(n[l]=u);if(a)for(let{bone:l,node:u}of a)I0.includes(l)&&(n[l]=u);let o=(t.size?[...t]:e.map((l,u)=>u)).filter(l=>e[l]?.name),c=[];for(let l of o){let u=e[l].name,h=rw(u),d=sw(u);if(!/end$|twist|roll|toe|index|middle|ring|pinky|thumb|eye|finger/.test(h)){for(let[f,g]of Object.entries(aw))if(g.test(h)){if(["shoulder","upperArm","lowerArm","hand","upperLeg","lowerLeg","foot"].includes(f)){if(!d)continue;let b=d+f[0].toUpperCase()+f.slice(1);n[b]===void 0&&(n[b]=l)}else f==="spine"||f==="chest"?c.push([f,l]):n[f]===void 0&&(n[f]=l);break}}}for(let[l,u]of c)n[l]===void 0&&(n[l]=u);for(let l of["left","right"])if(n[l+"Hand"]===void 0&&n[l+"LowerArm"]!==void 0){let u=(e[n[l+"LowerArm"]].children||[]).filter(h=>!t.size||t.has(h));u.length&&(n[l+"Hand"]=u[Math.floor(u.length/2)])}if(n.chest===void 0&&n.spine!==void 0){let l=(e[n.spine].children||[]).find(u=>t.has(u)&&u!==n.neck);l!==void 0&&(n.chest=l)}return n.chest===void 0&&n.spine!==void 0&&(n.chest=n.spine),Object.fromEntries(Object.entries(n).map(([l,u])=>[l,{index:u,name:e[u].name}]))}function L0(i){let e=new Set;for(let l of i.meshes||[]){for(let u of l.extras?.targetNames||[])e.add(u);for(let u of l.primitives||[])for(let h of u.extras?.targetNames||[])e.add(h)}let t=l=>[...e].some(u=>l.test(u)),n=i.extensions?.VRMC_vrm?.expressions?.preset||{},s=(i.extensions?.VRM?.blendShapeMaster?.blendShapeGroups||[]).map(l=>(l.presetName||l.name||"").toLowerCase()),r=l=>!!n[l]||s.includes(l),a="none";t(/^viseme_(aa|o)$/i)?a="oculus":t(/^jawopen$/i)?a="arkit":t(/^fcl_mth_a$/i)?a="vroid":r("aa")||r("a")?a="vrm":t(/mouth.?open|open.?mouth|^(a|aa|ah|vowel_?a)$/i)&&(a="generic");let o=t(/blink|eye.?close|fcl_eye_close|eyesclosed/i)||r("blink"),c=["happy","angry","sad","surprised"].filter(l=>t({happy:/smile|happy|joy/i,angry:/angry|browdown|mad/i,sad:/sad|sorrow|frown/i,surprised:/surpris|wide/i}[l])||r({happy:"happy",angry:"angry",sad:"sad",surprised:"surprised"}[l])||r({happy:"joy",angry:"angry",sad:"sorrow",surprised:"surprised"}[l]));return{morphs:[...e],lipSync:a,blink:o,emotions:c}}var Vt=(i=0,e=0,t=0)=>new P(i,e,t),au=Math.PI,N0=3.4;function F0(i,e){let t=e.parser.json,n=D0(t),s=O=>e.parser.associations&&[...e.parser.associations].find(([j,Q])=>Q.nodes===O&&j.isBone)?.[0],r=new Map;for(let[O,j]of e.parser.associations)j.nodes!==void 0&&(O.isBone||!r.has(j.nodes))&&r.set(j.nodes,O);let a={};for(let[O,{index:j}]of Object.entries(n)){let Q=r.get(j)||s(j);Q&&(a[O]=Q)}let o=e.scene,c=new Kt,l=new Kt,u=new Kt;c.add(l),l.add(u),u.add(o),o.traverse(O=>{if(O.isMesh&&(O.castShadow=O.receiveShadow=!0,O.frustumCulled=!1,O.material))for(let j of[].concat(O.material))j.side=Yn,j.map&&(j.map.anisotropy=4)}),o.updateMatrixWorld(!0);let h=(t.extensions?.VRM,0),d=!!t.extensions?.VRM,f=a.leftFoot?.children.find(O=>O.isBone);if(f&&a.leftFoot){let O=a.leftFoot.getWorldPosition(Vt()),j=f.getWorldPosition(Vt());Math.abs(j.z-O.z)>1e-4&&(h=j.z<O.z?au:0)}else d&&(h=au);i.asset?.flip&&(h+=au),u.rotation.y=h,u.updateMatrixWorld(!0);let g=new En().setFromObject(o),b=Math.max(.001,g.max.y-g.min.y),m=N0*i.look.height/b;o.scale.multiplyScalar(m),u.updateMatrixWorld(!0);let p=new En().setFromObject(o),x=p.getCenter(Vt());o.position.x-=x.x,o.position.z-=x.z,o.position.y-=p.min.y,c.updateMatrixWorld(!0);let _=Object.values(a),v=new Map(_.map(O=>[O,O.quaternion.clone()])),y=O=>c.worldToLocal(O.getWorldPosition(Vt())),T=(O,j)=>O&&j?O.getWorldPosition(Vt()).distanceTo(j.getWorldPosition(Vt())):0,w=a.chest||a.spine,C=new Kt;c.add(C),C.position.copy(y(w));let M=[["right",-1],["left",1]].map(([O,j])=>{let Q=a[O+"UpperArm"],re=a[O+"LowerArm"],ge=a[O+"Hand"],He=T(Q,re),ke=T(re,ge),we=ge?.children.find(J=>J.isBone),Y=we?Math.max(T(ge,we)*1.4,ke*.18):ke*.22;return{s:j,upper:Q,lower:re,hand:ge,lenU:He,lenF:ke,handOff:Y,shoulder:Q}}),S=p.max.y,I=y(a.head),D=Math.max(.2,S-I.y),k=M[1].upper?y(M[1].upper).y-C.position.y:.9,W=M[1].upper?Math.abs(y(M[1].upper).x-C.position.x):.45;c.updateMatrixWorld(!0);let B=O=>a.head.worldToLocal(c.localToWorld(O.clone())),G={forehead:B(I.clone().add(Vt(0,D*.62,D*.42))),chin:B(I.clone().add(Vt(0,D*.08,D*.4))),face:B(I.clone().add(Vt(0,D*.4,D*.55)))};return{member:i,kind:"imported",imported:!0,root:c,body:l,model:o,B:a,rest:v,arms:M,chestFrame:C,anchors:G,seed:[...i.id].reduce((O,j)=>O+j.charCodeAt(0),0),m:{sx:W,sy:k,reach:M[1].lenU+M[1].lenF+M[1].handOff||1.1,hw:D*.55,ht:S-C.position.y},headSize:D,restHead:I,face:ow(e,t,a),glow:null}}function ow(i,e,t){let n=[];i.scene.traverse(u=>{u.morphTargetDictionary&&u.morphTargetInfluences&&n.push(u)});let s=u=>{let h=[];for(let d of n)for(let[f,g]of Object.entries(d.morphTargetDictionary))u.test(f)&&h.push([d,g]);return h},r=L0(e),a={},o=(u,h)=>{let d=s(h);d.length&&(a[u]=d)};r.lipSync==="oculus"?(o("aa",/^viseme_aa$/i),o("O",/^viseme_O$/i),o("U",/^viseme_U$/i),o("E",/^viseme_E$/i),o("I",/^viseme_I$/i),o("PP",/^viseme_PP$/i),o("FF",/^viseme_FF$/i)):r.lipSync==="arkit"?(o("jaw",/^jawOpen$/i),o("funnel",/^mouthFunnel$/i),o("pucker",/^mouthPucker$/i),o("stretch",/^mouthStretch(_?L|Left|_?R|Right)$/i),o("close",/^mouthClose$/i)):r.lipSync==="vroid"?(o("aa",/^Fcl_MTH_A$/i),o("O",/^Fcl_MTH_O$/i),o("U",/^Fcl_MTH_U$/i),o("E",/^Fcl_MTH_E$/i),o("I",/^Fcl_MTH_I$/i)):r.lipSync==="generic"&&o("jaw",/mouth.?open|open.?mouth|^(a|aa|ah|vowel_?a)$/i),o("blink",/^(eyeBlink(_?L|Left|_?R|Right)?|blink|Fcl_EYE_Close|eyesClosed|eye.?close)$/i),o("smile",/^(mouthSmile(_?L|Left|_?R|Right)?|smile|happy|joy|Fcl_ALL_Joy|Fcl_MTH_Joy)$/i),o("frown",/^(mouthFrown(_?L|Left|_?R|Right)?|frown)$/i),o("browUp",/^browInnerUp$/i),o("browDown",/^browDown(_?L|Left|_?R|Right)?$/i),o("wide",/^eyeWide(_?L|Left|_?R|Right)?$/i),o("happy",/^(happy|joy|Fcl_ALL_Joy)$/i),o("angry",/^(angry|mad|Fcl_ALL_Angry)$/i),o("sad",/^(sad|sorrow|Fcl_ALL_Sorrow)$/i),o("surprised",/^(surprised|surprise|Fcl_ALL_Surprised)$/i);let c=(u,h)=>{let d=[];for(let f of h||[])for(let[g,b]of i.parser.associations)g.morphTargetInfluences&&(f.node!==void 0&&b.nodes===f.node||f.mesh!==void 0&&b.meshes===f.mesh)&&d.push([g,f.index,(f.weight??1)>1?f.weight/100:f.weight??1]);d.length&&!a[u]&&(a[u]=d)},l=e.extensions?.VRMC_vrm?.expressions?.preset;if(l)for(let[u,h]of Object.entries(l))c({aa:"aa",oh:"O",ou:"U",ee:"E",ih:"I",blink:"blink",happy:"happy",angry:"angry",sad:"sad",surprised:"surprised"}[u]||u,h.morphTargetBinds);for(let u of e.extensions?.VRM?.blendShapeMaster?.blendShapeGroups||[])c({a:"aa",o:"O",u:"U",e:"E",i:"I",blink:"blink",joy:"happy",angry:"angry",sorrow:"sad",fun:"happy"}[(u.presetName||"").toLowerCase()]||u.presetName,u.binds);return{channels:a,jaw:t.jaw||null,lipSync:r.lipSync}}function Pn(i,e,t){let n=i[e];if(n)for(let[s,r,a=1]of n)s.morphTargetInfluences[r]=Je(t*a,0,1)}function O0(i,e,t,n){let{channels:s,jaw:r}=i.face,a=Je(e.open+t.open*(1-e.open),0,1),o=e.round||0,c=Je(((e.wide||1)-1)*5,0,1);Pn(s,"aa",a*(1-o)*.95),Pn(s,"O",a*o),Pn(s,"U",(1-a)*o*.85),Pn(s,"E",c*a*.7),Pn(s,"I",c*(1-a)*.4),Pn(s,"jaw",a*.8),Pn(s,"funnel",o*a*.6),Pn(s,"pucker",o*(1-a)*.7),Pn(s,"stretch",c*.4),Pn(s,"blink",1-Je(t.eye*n,0,1)),Pn(s,"wide",Je((t.eye-1)*2.5,0,1)),Pn(s,"smile",Math.max(0,t.smile)*.8),Pn(s,"frown",Math.max(0,-t.smile)*.7),Pn(s,"browUp",Math.max(0,t.brow)*2),Pn(s,"browDown",Math.max(0,-t.brow)*2);for(let l of["happy","angry","sad","surprised"])Pn(s,l,t.emotion===l?.85:0);r&&!s.jaw&&!s.aa&&hl(i,r,cl.set(a*.32,0,0))}var ul=new Ut,B0=new Ut,Wf=new Ut,cl=new kn,AC=Vt(),U0=Vt(),jf=Vt(),ru=Vt();function hl(i,e,t){i.root.getWorldQuaternion(Wf),ul.setFromEuler(t),ul.premultiply(Wf).multiply(Wf.clone().invert()),e.updateWorldMatrix(!0,!1);let n=e.getWorldQuaternion(new Ut).premultiply(ul),s=e.parent.getWorldQuaternion(B0);e.quaternion.copy(s.invert().multiply(n)),e.updateWorldMatrix(!1,!0)}function k0(i,e,t){i.updateWorldMatrix(!0,!0);let n=i.getWorldPosition(Vt()),s=e.getWorldPosition(Vt()),r=s.sub(n).normalize(),a=t.clone().sub(n).normalize();ul.setFromUnitVectors(r,a);let o=i.getWorldQuaternion(new Ut).premultiply(ul),c=i.parent.getWorldQuaternion(B0);i.quaternion.copy(c.invert().multiply(o)),i.updateWorldMatrix(!1,!0)}function lw(i,e,t){let n=i.upper.getWorldPosition(Vt()),s=i.lenU,r=i.lenF+i.handOff,a=e.clone().sub(n),o=a.length();a.normalize(),o=Je(o,Math.abs(s-r)+.02,s+r-.002);let c=Je((s*s+o*o-r*r)/(2*s*o),-1,1),l=t.clone().sub(n);l.addScaledVector(a,-l.dot(a)),l.lengthSq()<1e-8&&l.set(0,-1,0),l.normalize();let u=n.clone().addScaledVector(a.clone().multiplyScalar(c).addScaledVector(l,Math.sqrt(1-c*c)),s);k0(i.upper,i.lower,u),k0(i.lower,i.hand,n.clone().addScaledVector(a,o))}function z0(i,e){let{t,talk:n,beat:s,face:r,action:a}=e,o=i.seed*.37,c=a.k,l=c<=0?0:c>=1?1:Je(uf(c),0,1.08),u=i.m,h=i.B;for(let[S,I]of i.rest)S.quaternion.copy(I);let d=df(a.name,a.local,a.dur,{m:u,beat:s,screen:e.screen,key:e.key,partner:e.partner,anchor:(S,I=0,D=0,k=0)=>()=>h.head.localToWorld(i.anchors[S].clone()).add(Vt(I,D,k).multiplyScalar(i.root.scale.y)),toward:(S,I,D=1)=>()=>{let k=i.arms[D].upper.getWorldPosition(Vt());return k.add(S.clone().sub(k).normalize().multiplyScalar(I))},toCamera:(S,I)=>()=>{let D=i.arms[1].upper.getWorldPosition(Vt()),k=e.camera.clone().sub(D);return k.y=0,k.normalize(),k.y=I,D.add(k.normalize().multiplyScalar(S))}}),f=r.emotion==="sad"?1:0,g=r.emotion==="angry"?1:0;i.root.position.y=e.baseY+(d.root?.y||0)*c,i.body.position.y=Math.sin(t*1.7+o)*.006*N0+(d.hips?.y||0)*c*.5,i.root.updateMatrixWorld(!0);let b=(d.chest?.x||0)*c+g*.06+f*.08+n*s*.04+Math.sin(t*1.7+o)*.01,m=Math.sin(t*.65+o)*.03+(d.chest?.y||0)*c,p=-Math.sin(t*.55+o)*.015;h.spine&&hl(i,h.spine,cl.set(b*.4,m*.4,p*.5)),h.chest&&h.chest!==h.spine&&hl(i,h.chest,cl.set(b*.6,m*.6,p*.5)),i.chestFrame.rotation.set(b,m,p);let x=h.neck?h.neck.getWorldPosition(Vt()):h.head.getWorldPosition(Vt()),_=d.look&&e[d.look]?e[d.look]:e.look,v=0,y=0;if(_){let S=_.clone().sub(x).applyQuaternion(i.root.getWorldQuaternion(new Ut).invert());v=Je(Math.atan2(S.x,S.z)-m,-.9,.9),y=Je(-Math.atan2(S.y,Math.hypot(S.x,S.z)),-.4,.4)}let T=y*.6+r.down+(d.head?.x||0)*c+n*(s*.07+Math.sin(t*5.3+o)*.015)+Math.sin(t*1.2+o)*.02,w=v*.75+(d.head?.y||0)*c+Math.sin(t*.7+o)*.04,C=r.tilt+(d.head?.z||0)*c+Math.sin(t*.8+o)*.02;h.neck&&hl(i,h.neck,cl.set(T*.35,w*.35,C*.3)),hl(i,h.head,cl.set(T*(h.neck?.65:1),w*(h.neck?.65:1),C*.7));let M=(i.seed+Math.floor(e.cueIndex||0))%2;return i.root.updateMatrixWorld(!0),i.arms.forEach((S,I)=>{if(!S.upper||!S.lower||!S.hand)return;let D=S.s,k=I===M?1:.45,W=n*k*(.25+s*.55);i.chestFrame.localToWorld(jf.set(D*u.sx*1.18,u.sy-u.reach*(.93-W*.35),u.reach*(.1+W*.4)));let B=d.arms?.[I];if(ru.copy(jf),B&&c>0){let G=B.c?i.chestFrame.localToWorld(Vt(...B.c)):(B.h||B.w)();ru.lerpVectors(jf,G,l),ru.y+=Math.sin(au*Je(c,0,1))*.12*(1-l)}i.chestFrame.localToWorld(U0.set(...B&&c>0&&B.pole?B.pole:[D*1.4,u.sy-1,-.7])),lw(S,ru,U0)}),{press:(d.press||0)*c}}function H0(i,e=Vt()){return i.root.updateMatrixWorld(!0),i.root.localToWorld(e.copy(i.restHead).add(Vt(0,i.headSize*.4,0)))}function Xf(i){i.root.traverse(e=>{if(e.geometry?.dispose(),e.material)for(let t of[].concat(e.material)){for(let n of["map","normalMap","roughnessMap","metalnessMap","emissiveMap","aoMap"])t[n]?.dispose();t.dispose()}})}var Er=Math.PI,fl=Er/180;function On(i,e={}){return new $n({color:i,roughness:.7,metalness:.05,...e})}function Bs(i,e,t,n,s,r=0,a=0,o=0,c=.05){let l=new ct(new Ca(e,t,n,1,c),s);return l.position.set(r,a,o),l.castShadow=!0,l.receiveShadow=!0,i.add(l),l}function V0(i,e,t,n,s,r,a=12){let o=new ct(new oi(e,a,8),t);return o.position.set(n,s,r),o.castShadow=!0,i.add(o),o}function dl(i,e=0,t=0,n=0){let s=new Kt;return s.position.set(e,t,n),i.add(s),s}function qf(i,e,t,n,s,r,a,o,c=10){let l=new ct(new ts(e,t,n,c),s);return l.position.set(r,a,o),l.castShadow=!0,l.receiveShadow=!0,i.add(l),l}function cw(i,e,t,n=.018){let s=new As(e.map(a=>new P(...a))),r=new ct(new cr(s,14,n,6,!1),On(t));return i.add(r),r}function G0(i,e=128,t="#ddd8ca",n=null){let s=document.createElement("canvas");s.width=512,s.height=256;let r=s.getContext("2d");n&&(r.fillStyle=n,r.fillRect(0,0,512,256)),r.fillStyle=t,r.font=`600 ${e}px Arial`,r.textAlign="center",r.textBaseline="middle",r.fillText(i,256,130);let a=new Ci(s);return a.colorSpace=Ht,a}var pl={studio:{label:"Studio (default)",contrast:1.06,sat:1.08,fade:0,mono:0,aberr:0,scan:0,lift:[0,0,0],gain:[1.03,1,.965],grain:.032,bloom:.24},cinematic:{label:"Cinematic teal & orange",contrast:1.14,sat:1.12,lift:[-.01,.012,.03],gain:[1.08,1,.9],grain:.035,bloom:.3},golden:{label:"Golden hour",contrast:1.05,sat:1.15,lift:[.03,.015,-.01],gain:[1.1,1.02,.86],grain:.03,bloom:.42},pastel:{label:"Soft pastel",contrast:.9,sat:.88,fade:.08,lift:[.04,.035,.05],gain:[1,1,1.02],grain:.015,bloom:.35},neon:{label:"Neon night",contrast:1.18,sat:1.4,lift:[.02,-.01,.05],gain:[1.05,.94,1.1],grain:.03,bloom:.7},vintage:{label:"Vintage film",contrast:.96,sat:.78,fade:.1,lift:[.05,.035,.01],gain:[1.04,.98,.86],grain:.07,bloom:.25},noir:{label:"Noir (black & white)",contrast:1.3,sat:0,mono:1,grain:.06,bloom:.2},documentary:{label:"Documentary (natural)",contrast:1,sat:.92,gain:[1,1,1],grain:.02,bloom:.12},dream:{label:"Dreamy glow",contrast:.94,sat:1.05,fade:.05,lift:[.03,.02,.05],gain:[1.04,1,1.04],grain:.02,bloom:.95},vhs:{label:"Retro VHS",contrast:1.05,sat:1.25,fade:.06,aberr:1,scan:1,lift:[.02,0,.03],gain:[1.02,1,1.05],grain:.06,bloom:.4}},hw={uniforms:{tDiffuse:{value:null},time:{value:0},grain:{value:.032},warmth:{value:1},contrast:{value:1.06},sat:{value:1.08},fade:{value:0},mono:{value:0},aberr:{value:0},scan:{value:0},lift:{value:new P},gain:{value:new P(1,1,1)}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"uniform sampler2D tDiffuse;uniform float time,grain,warmth,contrast,sat,fade,mono,aberr,scan;uniform vec3 lift,gain;varying vec2 vUv;float h(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);}void main(){vec2 o=(vUv-.5)*aberr*.006;vec3 c=vec3(texture2D(tDiffuse,vUv+o).r,texture2D(tDiffuse,vUv).g,texture2D(tDiffuse,vUv-o).b);c=(c-.5)*contrast+.5;c=c*gain*vec3(1.+.03*(warmth-1.),1.,1.-.035*(warmth-1.))+lift;float l=dot(c,vec3(.299,.587,.114));c=mix(vec3(l),c,sat);c=mix(c,vec3(l),mono);c=mix(c,vec3(.5)+(c-.5)*.8,fade);c*=1.-scan*.12*step(.5,fract(vUv.y*480.));c+=(h(vUv*vec2(1080.,1920.)+fract(time*7.13)*91.7)-.5)*grain;gl_FragColor=vec4(clamp(c,0.,1.),1.);}"},W0={alert:{edge:"#80564c",kick:"#e7b09a",title:"#d8cbbd",bar:"#bc8264"},calm:{edge:"#547e77",kick:"#b6e7d0",title:"#e2e9df",bar:"#a6d8b8"},success:{edge:"#5d8a5a",kick:"#c4ebaa",title:"#eef6e4",bar:"#9fd88a"},info:{edge:"#4f6f8f",kick:"#a9c8ee",title:"#e1e8f2",bar:"#8fb7e6"}},uw=["#ffd27a","#ffb48a","#9fd8ff","#c6f08a"],dw=["#d0b7ef","#eeb48d","#9fd8ff","#c6f08a"],j0={1:[[0,.45]],2:[[-1.32,.35],[1.25,.65]],3:[[-2.1,.45],[0,.25],[2.1,.55]],4:[[-2.6,.4],[-.88,.6],[.88,.35],[2.6,.55]]},fw=new P(0,4.3,-4.15),pw=new P(2.65,.33,1.85),mw=i=>2*Math.atan(18/i)/fl,X0={wide:{yaw:20,pitch:12,dist:13.3,lens:54,ap:7e-4},two:{yaw:0,pitch:9.5,dist:11.3,lens:54,ap:.0012},single:{yaw:12,pitch:9,dist:6.4,lens:60,ap:.0025},cu:{yaw:8,pitch:5,dist:3.5,lens:66,ap:.0045},ots:{yaw:48,pitch:5,dist:5,lens:64,ap:.0042},custom:{yaw:0,pitch:8,dist:4,lens:50,ap:.0035}},gw=(()=>{let i=null;return()=>{if(i)return i;let e=document.createElement("canvas");e.width=e.height=128;let t=e.getContext("2d"),n=t.createRadialGradient(64,64,8,64,64,64);return n.addColorStop(0,"rgba(12,14,20,.64)"),n.addColorStop(.4,"rgba(12,14,20,.35)"),n.addColorStop(1,"rgba(12,14,20,0)"),t.fillStyle=n,t.fillRect(0,0,128,128),i=new Ci(e)}})(),ou=class{constructor(e,t,n={}){if(this.loadAsset=n.loadAsset||(c=>fetch(`/library/${c}/model`).then(l=>{if(!l.ok)throw Error(`Character file ${c} is not in the library.`);return l.arrayBuffer()})),this.onUpdate=n.onUpdate||null,this.assets=new Map,this.ready=Promise.resolve(),this.canvas=e,this.project=t,this.w=540,this.h=960,this.time=0,this.manual=!1,this.screenRevision=0,this.focus=null,this.previewCam=null,this.rigs=[],this.castKey="",n.software)this.renderer=new ol;else try{this.renderer=new Hh({antialias:!0,alpha:!1,preserveDrawingBuffer:!0,powerPreference:"high-performance"})}catch{this.renderer=new ol}this.renderer.setPixelRatio(1),this.renderer.setSize(540,960),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Nc,this.renderer.toneMapping=_a,this.renderer.toneMappingExposure=1.13,this.out=e.getContext("2d",{alpha:!1}),this.scene=new _o,this.scene.background=new xe("#101c23"),this.scene.fog=new xo("#111d24",.023),this.camera=new Qt(36,9/16,.1,100),this.controls=n.headless?{target:new P,update(){},dispose(){}}:new jh(this.camera,e),this.controls.enabled=!1,this.controls.enableDamping=!1,this.controls.target.set(0,2,0),this.controls.minDistance=2,this.controls.maxDistance=22,this.controls.maxPolarAngle=Er*.49;let s=new No("#bfdaed","#77533d",2.1);this.scene.add(s),this.key=new Li("#ffdbad",4.5),this.key.position.set(-4,8,5),this.key.castShadow=!0,this.key.shadow.mapSize.set(2048,2048),Object.assign(this.key.shadow.camera,{left:-9,right:9,top:10,bottom:-7,near:.5,far:30}),this.key.shadow.normalBias=.035,this.key.shadow.bias=-25e-5,this.key.shadow.radius=3,this.scene.add(this.key);let r=new Li("#ff914d",3.4);r.position.set(5,5,-4),this.scene.add(r);let a=new Li("#ffb070",1.6);a.position.set(-6,4,-5),this.scene.add(a);let o=new Li("#82bbd4",1.5);o.position.set(4,3,5),this.scene.add(o),this.screenLight=new Cs("#8bcecf",20,12,2),this.screenLight.position.set(0,4.5,-2.5),this.scene.add(this.screenLight),this.set=dl(this.scene),this.makeSet(),this.set.traverse(c=>c.userData.staticLayer=!0),this.renderKey.userData.staticLayer=!1,this.renderKeyLabel.userData.staticLayer=!1,this.cast=dl(this.scene),this.renderer.isSoftware?this.composer={render:()=>this.renderer.render(this.scene,this.camera),setSize:()=>{},dispose:()=>{}}:(this.composer=new qh(this.renderer,new Xt(540,960,{type:on,samples:4})),this.composer.addPass(new Yh(this.scene,this.camera)),this.ao=new sl(this.scene,this.camera,540,960),this.ao.updateGtaoMaterial({radius:.45,distanceExponent:1.4,thickness:1.2,scale:1.1,samples:12}),this.ao.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:12}),this.ao.blendIntensity=.85,this.composer.addPass(this.ao),this.bokeh=new Kh(this.scene,this.camera,{focus:6,aperture:.002,maxblur:.008}),this.composer.addPass(this.bokeh),this.bloom=new Pa(new ne(540,960),.24,.5,1.12),this.composer.addPass(this.bloom),this.composer.addPass(new Jh),this.grade=new Ra(hw),this.composer.addPass(this.grade)),this.setProject(t),this.seek(0)}makeSet(){let e=On("#594237",{roughness:.9}),t=On("#292e31",{metalness:.35}),n=On("#b9b3a1",{roughness:.7}),s=On("#58686b");Bs(this.set,16,.55,10,e,0,-.55,-.4,.18),Bs(this.set,13,.25,6.1,t,0,-.12,-.1,.18);for(let v=0;v<5;v++)for(let y=0;y<13;y++){let T=(y-6)*.89+v%2*.14,w=(v-2)*.89,C=Bs(this.set,.79,.28,.74,y===0||y===12?s:n,T,.12,w,.075);if(v<2||y<4||y>8){let M=G0("QWERTYUIOPASDFGHJKLZXCVBNM"[(v*13+y)%26],90,"#494e4d"),S=new ct(new ai(.25,.125),new tn({map:M,transparent:!0,depthWrite:!1}));S.rotation.x=-Er/2,S.position.set(T,.266,w-.06),this.set.add(S)}}Bs(this.set,3.8,.25,.69,On("#a9957a"),0,.12,2.67,.06),this.renderKey=Bs(this.set,1.2,.33,1.1,On("#e79d58"),2.65,.16,1.85,.09);let r=new ct(new ai(.92,.46),new tn({map:G0("GO",95,"#4b3222"),transparent:!0}));r.rotation.x=-Er/2,r.position.set(2.65,.334,1.85),this.set.add(r),this.renderKeyLabel=r;let a=dl(this.set,0,4.3,-4.4);Bs(a,11.8,6.9,.38,On("#262e35"),0,0,0,.23),Bs(a,11.5,6.6,.1,On("#0a1119"),0,0,.21,.14),this.screenCanvas=document.createElement("canvas"),this.screenCanvas.width=1600,this.screenCanvas.height=900,this.screenCtx=this.screenCanvas.getContext("2d"),this.screenTexture=new Ci(this.screenCanvas),this.screenTexture.colorSpace=Ht;let o=new tn({map:this.screenTexture}),c=new ct(new ai(11.13,6.22),o);c.position.set(0,.06,.278),a.add(c),V0(a,.045,On("#d3bd81",{emissive:"#a68955",emissiveIntensity:1}),0,-3.28,.25,8),Bs(this.set,.8,1.5,.45,t,0,.3,-4.7,.08);let l=dl(this.set,-8.6,0,-4.6);qf(l,.65,.8,.15,t,0,0,0,24),cw(l,[[0,0,0],[0,3,0],[.8,5,0],[1.5,5.1,0]],"#94795b",.08);let u=new ct(new or(.75,.65,20,1,!0),On("#bd9870",{side:Cn}));u.position.set(1.5,4.8,0),l.add(u),V0(l,.22,On("#ffe4ba",{emissive:"#ffca86",emissiveIntensity:3}),1.5,4.5,0);let h=new Cs("#ffb971",32,14,2);h.position.set(1.5,4.4,0),l.add(h);let d=dl(this.set,6.5,0,0);qf(d,.7,.6,1.2,On("#417578"),0,.58,0,24),qf(d,.62,.62,.03,On("#251d16"),0,1.19,0,24);let f=new ct(new ns(.38,.13,8,20),On("#417578"));f.position.set(.72,.7,0),d.add(f);let g=document.createElement("canvas");g.width=64,g.height=64;let b=g.getContext("2d"),m=b.createRadialGradient(32,32,1,32,32,32);m.addColorStop(0,"rgba(255,220,166,.8)"),m.addColorStop(.22,"rgba(255,175,92,.24)"),m.addColorStop(1,"rgba(255,175,92,0)"),b.fillStyle=m,b.fillRect(0,0,64,64);let p=new Ci(g);for(let v=0;v<26;v++){let y=new yo(new ha({map:p,color:v%3?"#d79a62":"#86a7b3",transparent:!0,depthWrite:!1,opacity:.45,blending:ur}));y.position.set(Math.sin(v*13.1)*16,2+v*7%15,-9-Math.abs(Math.cos(v*8))*15),y.scale.setScalar(.4+v%4*.4),this.scene.add(y)}let x=new Nt,_=[];for(let v=0;v<100;v++)_.push(Math.sin(v*37)*13,1+v%39*.25,Math.cos(v*17)*10);x.setAttribute("position",new nt(_,3)),this.dust=new sr(x,new Es({size:.025,color:"#e6c998",transparent:!0,opacity:.45,depthWrite:!1})),this.scene.add(this.dust)}buildCast(e){let t=JSON.stringify([e.characterStyle,e.cast.map(r=>[r.id,r.kind,r.look,r.asset])]);if(t===this.castKey)return;this.castKey=t;for(let r of this.rigs)this.cast.remove(r.root),this.cast.remove(r.shadow),r.imported?Xf(r):r.loading||ff(r);let n=[],s=j0[e.cast.length]||j0[4];this.rigs=e.cast.map((r,a)=>{let o=r.kind==="imported"?this.importedPlaceholder(r,n,t):_0(r,e.characterStyle),[c,l]=s[a];o.root.position.set(c,.26,l),o.root.rotation.y=-c*.07,o.baseYaw=o.root.rotation.y,o.baseY=.26,this.cast.add(o.root);let u=new ct(new ai(2.1,1.6),new tn({map:gw(),transparent:!0,depthWrite:!1}));return u.rotation.x=-Er/2,u.position.set(c,.275,l+.05),u.scale.setScalar(r.look.height*(r.kind==="bot"?1:r.look.build*.95)),this.cast.add(u),o.shadow=u,o}),this.updateHeads(),this.ready=Promise.all(n)}updateHeads(){this.heads={};for(let e of this.rigs)e.root.updateMatrixWorld(!0),this.heads[e.member.id]=e.imported?H0(e):e.loading?new P(e.root.position.x,3,e.root.position.z):w0(e)}importedPlaceholder(e,t,n){let s=new Kt,r=new ct(new ar(.55,2.2,6,16),new $n({color:"#9aa4ad",transparent:!0,opacity:.25,depthWrite:!1}));r.position.y=1.7*e.look.height,s.add(r);let a={member:e,kind:"imported",loading:!0,root:s,seed:1,face:null},o=(this.assets.has(e.asset.id)?Promise.resolve(this.assets.get(e.asset.id)):this.loadAsset(e.asset.id).then(c=>(this.assets.set(e.asset.id,c),c))).then(c=>{let l=new iu;return l.setMeshoptDecoder(P0),l.parseAsync(c.slice(0),"")}).then(c=>{if(this.castKey!==n)return;let l=F0(e,c),u=this.rigs.indexOf(a);u<0||(l.root.position.copy(a.root.position),l.root.rotation.y=a.root.rotation.y,l.baseYaw=a.baseYaw,l.baseY=a.baseY,l.shadow=a.shadow,this.cast.remove(a.root),this.cast.add(l.root),this.rigs[u]=l,this.updateHeads(),this.onUpdate?.())}).catch(c=>{a.error=c.message,r.material.color.set("#c0503c"),console.error("Imported character failed to load:",c),this.onUpdate?.(c)});return t.push(o),a}setProject(e){this.project=e,this.lastScreenKey=null,this.buildCast(e);for(let t of this.rigs)t.face&&(t.face.last="");this.key.intensity=3.7+e.warmth*.8,this.renderer.warmth=e.warmth,this.grade&&(this.grade.uniforms.warmth.value=e.warmth)}castIndex(e){return Math.max(0,this.project.cast.findIndex(t=>t.id===e))}nameOf(e){return this.project.cast.find(t=>t.id===e)?.name||e}castNames(){return this.project.cast.map(e=>e.name).join(" + ")}rigOf(e){return this.rigs.find(t=>t.member.id===e)||this.rigs[0]}setSize(e,t){this.w=e,this.h=t,this.canvas.width=e,this.canvas.height=t,this.renderer.setSize(e,t),this.composer.setSize(e,t),this.ao?.setSize(e,t),this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}setManual(e){this.manual=e,this.controls.enabled=e,e&&(this.controls.target.copy(this.target||new P(0,2,0)),this.controls.update())}setFocus(e){this.focus=e}shotFrame(e){let t=this.heads,n=t[e.subject]||Object.values(t)[0],s=t[e.other]||n,r=this.rigOf(e.subject),a=r.root.rotation.y,o=Math.sign(s.x-n.x)||1,c=Object.values(t),l=Math.min(...c.map(f=>f.x)),u=Math.max(...c.map(f=>f.x)),h=u-l,d={...X0[e.shot==="screen"?"two":e.shot]||X0.single,facing:a,move:e.cam?.move||"auto"};switch(e.shot){case"wide":d.center=new P((l+u)/2,2.05,.1),d.facing=0,d.dist=13.3*Math.max(1,(h+2.4)/5);break;case"two":d.center=n.clone().add(s).multiplyScalar(.5).add(new P(0,-.75,0)),d.facing=0,d.dist=Math.max(7.5,n.distanceTo(s)*3+3.6);break;case"single":d.center=n.clone().add(new P(0,-.4*r.member.look.height,0)),d.yaw*=o;break;case"cu":d.center=n.clone().add(new P(0,-.05,0)),d.yaw*=o,d.dist*=r.member.look.head*r.member.look.height;break;case"ots":d.center=n.clone().add(new P(0,-.12,0)),d.yaw=Je(Math.atan2(s.x-n.x,s.z-n.z)/fl*.55,-70,70);break;case"custom":{let f=e.cam;d.center=e.subject==="all"?new P((l+u)/2,2.2,.4):n.clone().add(new P(0,-.15,0)),Object.assign(d,{yaw:f.yaw,pitch:f.pitch,dist:f.dist,lens:f.lens,ap:Je(.012/f.dist,6e-4,.005)});break}}return d}describeShot(e){let t=this.shotFrame(e);return{yaw:Math.round(t.yaw),pitch:Math.round(t.pitch),dist:Math.round(t.dist*10)/10,lens:Math.round(t.lens),move:"auto"}}shotPose(e,t,n,s,r){if(e.shot==="screen")return{pos:new P(.3,4.9,7.2),at:new P(0,4.15,-4.4),fov:44,ap:.0018};let a=this.shotFrame(e),o=qt((t-n)/Math.max(1,s-n)),c=a.move==="auto"?e.shot==="wide"?"orbit":"push":a.move,l=a.yaw,u=a.pitch,h=a.dist,d=0;c==="push"?h*=1-.08*o:c==="pull"?h*=1+.1*o:c==="orbit"?l+=(e.shot==="wide"?6:22)*(o-.5):c==="rise"?u+=14*o:c==="handheld"&&(d=.035),u=Je(u,-15,70);let f=(a.facing/fl+l)*fl,g=u*fl,b=a.center.clone(),m=b.clone().add(new P(Math.sin(f)*Math.cos(g)*h,Math.sin(g)*h,Math.cos(f)*Math.cos(g)*h)),p=mw(a.lens);if(r&&(r.emotion==="angry"||r.emotion==="surprised")&&r.start>=n-.2&&c!=="static"){let x=t-r.start;p-=3.5*qt(x/.18),d+=.05*Math.exp(-Math.max(0,x)*5)*(x>0?1:0)}return c!=="static"&&(m.x+=Math.sin(t*.23)*.06+Math.sin(t*41)*d,m.y+=Math.sin(t*.37+1)*.025+Math.cos(t*37)*d),m.y=Math.max(m.y,.75),{pos:m,at:b,fov:p,ap:a.ap}}placeCamera(e,t){let n=this.project,s;if(this.focus){let a=this.rigOf(this.focus),o=a.member.look.height,c=a.root.position,l=a.kind==="bot"?2.2:3.5*o,u=new P(c.x,c.y+l*.5,c.z);s={pos:u.clone().add(new P(0,.6,l*1.75+1.2)),at:u,fov:38,ap:8e-4}}else if(this.previewCam){let a={shot:"custom",subject:this.previewCam.subject||e.subject,other:e.other,cam:this.previewCam};s=this.shotPose(a,t,e.shotStart,e.shotEnd,e.cue)}else{let a=ka(n),o=a[e.shotIndex];if(s=this.shotPose(o,t,e.shotStart,e.shotEnd,e.cue),n.cameraFlow==="one-take"&&e.shotIndex>0){let c=a[e.shotIndex-1],l=Math.min(1.4,(e.shotEnd-e.shotStart)*.6),u=qt((t-e.shotStart)/l);if(u<1){let h=this.shotPose(c,e.shotStart,c.start,e.shotStart,null),d=u*u*(3-2*u);s.pos.lerpVectors(h.pos,s.pos,d),s.at=h.at.clone().lerp(s.at,d),s.fov=Us(h.fov,s.fov,d),s.ap=Us(h.ap,s.ap,d)}}}if(this.camera.position.copy(s.pos),this.target=s.at,this.camera.lookAt(s.at),this.camera.fov=s.fov,this.camera.updateProjectionMatrix(),this.bokeh){let a=this.bokeh.uniforms;a.focus.value=s.pos.distanceTo(s.at),a.aperture.value=n.dof?s.ap:0,a.maxblur.value=n.dof?.008:0}let r=pl[n.filmLook]||pl.studio;if(this.grade){let a=this.grade.uniforms;for(let o of["contrast","sat","fade","mono","aberr","scan"])a[o].value=r[o]??pl.studio[o];a.lift.value.set(...r.lift||[0,0,0]),a.gain.value.set(...r.gain||[1,1,1]),a.grain.value=r.grain??.032}this.bloom&&(this.bloom.strength=r.bloom??.24)}seek(e,{overlay:t=!0}={}){this.time=e;let n=this.project,s=s0(n,e),r=s.cue;this.drawScreen(i0(n,e),e),this.renderer.sceneRevision=this.screenRevision,this.dust.rotation.y=e*.006,this.manual?this.bokeh&&(this.bokeh.uniforms.aperture.value=0):this.placeCamera(s,this.focus?performance.now()/1e3:e);let a=this.camera.position.clone(),o=0,c=r?n.cues.indexOf(r):0;for(let d of this.rigs){let f=d.member.id,g=this.focus===f;if(d.root.visible=!this.focus||g,d.shadow&&(d.shadow.visible=d.root.visible),d.root.rotation.y=d.baseYaw+(g?performance.now()/1e3*.6%(Er*2):0),d.loading)continue;let b=s.speaker===f,m=b?s.energy:0,p=b?t0(r,e):0,x=n0(n,e,f),_=e0(n,e,f),v=b?s.other:s.speaker||s.other,y=this.heads[v!==f?v:s.subject]||a,T=b?a.clone().lerp(y,.25):r?this.heads[s.speaker]:a.clone().lerp(y,.5),w={t:e,talk:m,beat:p,face:x,action:_,baseY:d.baseY,cueIndex:c,look:T,partner:y,screen:fw,key:pw,camera:a},C=d.imported?z0(d,w):M0(d,w);o=Math.max(o,C.press);let M=(e*.31+d.seed*.173)%1,S=(M<.03?.1:1)*(Math.sin(e*1.3+d.seed)>.997?.1:1),I=b?0:Je((this.heads[s.speaker]?.x??a.x)-d.root.position.x,-1,1)*.8,D=r0(n,e,f)||{open:m*(.45+.4*Math.abs(Math.sin(e*11+d.seed))),wide:1,round:0,teeth:m>.3?1:0,tongue:0};d.imported?O0(d,D,x,S):S0(d,D,x,S,I,e)}this.renderKey.position.y=.16-.08*o,this.renderKeyLabel.position.y=.334-.08*o,this.grade&&(this.grade.uniforms.time.value=e),this.renderer.focusDistance=this.camera.position.distanceTo(this.manual?this.controls.target:this.target),this.composer.render();let l=this.out,u=this.w,h=this.h;return l.drawImage(this.renderer.domElement,0,0,u,h),t&&!this.focus&&this.overlay(s),s}drawScreen(e,t){let n=e.screen,s=W0[n.tone]||W0.calm,r=e.progress==null?null:Math.round(e.progress*100),a=Je(1-(t-e.since)/.35,0,1),o=`${e.index}|${r}|${Math.round(a*8)}|${this.project.title}`;if(o===this.lastScreenKey)return;this.lastScreenKey=o,this.screenRevision++;let c=this.screenCtx,l=1600,u=900;c.fillStyle="#0c1824",c.fillRect(0,0,l,u),c.fillStyle="#142737",c.fillRect(0,0,l,75),c.fillStyle="#4f6877";for(let g=0;g<3;g++)c.beginPath(),c.arc(38+g*29,37,7,0,Er*2),c.fill();c.fillStyle="#88a0ab",c.font="22px monospace",c.textAlign="left",c.fillText("STUDIO / "+this.project.title.toUpperCase().slice(0,48),160,45),c.strokeStyle="#203849",c.lineWidth=1;for(let g=0;g<12;g++)c.beginPath(),c.moveTo(0,150+g*65),c.lineTo(l,150+g*65),c.stroke();for(let g=0;g<20;g++)c.beginPath(),c.moveTo(g*90,75),c.lineTo(g*90,u),c.stroke();let h=a>0?Math.sin(t*90)*14*a:0;c.save(),c.translate(h,0),c.fillStyle="#112330",c.fillRect(450,170,700,580),c.strokeStyle=s.edge,c.lineWidth=3,c.strokeRect(450,170,700,580),c.textAlign="center",c.fillStyle=s.kick,c.font="bold 28px monospace",c.fillText(n.kicker,800,262);let d=96;for(c.font=`bold ${d}px Arial`;c.measureText(n.title).width>630&&d>36;)d-=4,c.font=`bold ${d}px Arial`;c.fillStyle=s.title,c.fillText(n.title,800,400);let f=24;for(c.font=`${f}px monospace`;c.measureText(n.sub).width>640&&f>14;)f-=2,c.font=`${f}px monospace`;if(c.fillStyle="#7590a0",c.fillText(n.sub,800,470),r!=null&&(c.fillStyle="#253c48",c.fillRect(520,560,560,16),c.fillStyle=s.bar,c.fillRect(520,560,560*e.progress,16),c.font="20px monospace",c.fillStyle="#8fa6b0",c.fillText(`${r}%`,800,615)),c.restore(),a>0){c.fillStyle=`rgba(220,240,255,${.22*a})`,c.fillRect(0,0,l,u);for(let g=0;g<6;g++)c.fillStyle=`rgba(160,220,255,${.12*a})`,c.fillRect(0,(g*157+t*900)%u,l,6)}c.textAlign="left",c.fillStyle="#42606d",c.font="18px monospace",c.fillText(this.castNames().toUpperCase(),40,855),this.screenTexture.needsUpdate=!0,this.screenLight.color.set(n.tone==="alert"?"#cf9c8c":n.tone==="success"?"#a8dca0":"#8bcecf")}overlay(e){let t=this.out,n=this.w,s=this.h,r=n/540,a=this.project,o=t.createRadialGradient(n*.5,s*.47,n*.25,n*.5,s*.48,s*.7);if(o.addColorStop(0,"#0000"),o.addColorStop(1,"#05070c70"),t.fillStyle=o,t.fillRect(0,0,n,s),a.handle&&(t.save(),t.globalAlpha=.78,t.fillStyle="#f1ece2",t.font=`700 ${15*r}px Arial`,t.textAlign="left",t.shadowColor="#000a",t.shadowBlur=6*r,t.fillText(a.handle,n*.06,s*.085),t.restore()),a.intro&&e.t<2.6){let c=qt(e.t/.5)*qt((2.6-e.t)/.6);t.save(),t.globalAlpha=c;let l=t.createLinearGradient(0,0,0,s*.36);l.addColorStop(0,"#05080bf2"),l.addColorStop(.7,"#05080bcc"),l.addColorStop(1,"#05080b00"),t.fillStyle=l,t.fillRect(0,0,n,s*.36),t.fillStyle="#e6c9aa",t.textAlign="center",t.font=`500 ${11*r}px Arial`,t.letterSpacing=`${2*r}px`,t.fillText((a.handle||"AN ORIGINAL").toUpperCase()+" PRESENTS",n/2,s*.13),t.letterSpacing="0px",t.font=`${35*r}px Georgia`,t.fillStyle="#f4e9d6",t.shadowColor="#000c",t.shadowBlur=10*r;let u=a.title.split(" "),h=[],d="";for(let f of u)t.measureText(d+" "+f).width>n*.8&&d?(h.push(d),d=f):d+=(d?" ":"")+f;h.push(d),h.slice(0,3).forEach((f,g)=>t.fillText(f,n/2,s*(.18+g*.045))),t.restore()}if(a.captions&&e.cue&&(a.captionStyle==="box"?this.boxCaption:this.boldCaption).call(this,e),a.endTitle&&e.final>0){let c=e.final;t.save(),t.globalAlpha=c,t.fillStyle="#122125",t.fillRect(0,0,n,s),t.textAlign="center",t.fillStyle="#d6b088",t.font=`${12*r}px Arial`,t.fillText(this.castNames().toUpperCase(),n/2,s*.39),t.fillStyle="#ece5d5",t.font=`${38*r}px Georgia`,t.fillText(a.endTitle,n/2,s*.47),t.font=`${13*r}px Arial`,t.fillStyle="#9aafaa",t.fillText(a.endSub,n/2,s*.525),a.handle&&(t.fillStyle="#d6b088",t.font=`600 ${14*r}px Arial`,t.fillText(a.handle,n/2,s*.6)),t.restore()}}wrap(e,t){let n=this.out,s=[],r=[];for(let[a,o]of e.entries()){let c=[...r.map(l=>l.word),o].join(" ");n.measureText(c).width>t&&r.length&&(s.push(r),r=[]),r.push({word:o,i:a})}return r.length&&s.push(r),s}boldCaption(e){let t=this.out,n=this.w,s=this.h,r=n/540,a=e.cue,o=a.text.split(/\s+/),c=a.words?.length?Math.min(o.length-1,Math.round(a0(a,e.t)*o.length/a.words.length)):-1,l=qt((e.t-a.start)/.14),u=qt((a.end-e.t)/.12),h=uw[this.castIndex(a.speaker)%4];t.save(),t.globalAlpha=u,t.font=`800 ${29*r}px "Arial Black", Arial, sans-serif`,t.textAlign="left",t.textBaseline="middle",t.lineJoin="round";let d=this.wrap(o,n*.84),f=37*r,g=s*.66-(d.length-1)*f/2,b=t.measureText(" ").width;t.translate(n/2,g),t.scale(.94+.06*l,.94+.06*l),t.translate(-n/2,-g),d.forEach((m,p)=>{let x=m.reduce((y,T)=>y+t.measureText(T.word).width,0)+b*(m.length-1),_=(n-x)/2,v=g+p*f;for(let y of m){let T=t.measureText(y.word).width,w=y.i===c;t.shadowColor="rgba(0,0,0,.7)",t.shadowBlur=10*r,t.lineWidth=5*r,t.strokeStyle="rgba(8,8,10,.92)",t.strokeText(y.word,_,v),t.shadowBlur=0,t.fillStyle=w?h:"#fbf7ef",t.fillText(y.word,_,v),_+=T+b}}),t.restore()}boxCaption(e){let t=this.out,n=this.w,s=this.h,r=n/540,a=e.cue,o=n*.79;t.font=`600 ${20*r}px Arial`;let c=this.wrap(a.text.split(" "),o).map(h=>h.map(d=>d.word).join(" ")),l=(43+c.length*27)*r,u=s*.83-l*.5;t.fillStyle="rgba(10,18,23,.87)",t.beginPath(),t.roundRect(n*.075,u,n*.85,l,9*r),t.fill(),t.textAlign="center",t.font=`bold ${10*r}px Arial`,t.fillStyle=dw[this.castIndex(a.speaker)%4],t.fillText(this.nameOf(a.speaker).toUpperCase(),n/2,u+22*r),t.font=`600 ${20*r}px Arial`,t.fillStyle="#eee9dc",c.forEach((h,d)=>t.fillText(h,n/2,u+(48+d*27)*r))}dispose(){this.controls.dispose();for(let e of this.rigs)e.imported?Xf(e):e.loading||ff(e);this.scene.traverse(e=>{if(e.geometry?.dispose(),e.material)for(let t of Array.isArray(e.material)?e.material:[e.material])t.dispose()}),this.composer.dispose(),this.renderer.dispose()}};async function q0(i,e=null,t=null){let n=Math.round(i.duration*48e3),s=new Float32Array(n),r=new Float32Array(n),a=new Float32Array(n),o=new Float32Array(n);function c(g,b,m,p=.06,x=0,_="bell",v="music"){let[y,T]=v==="music"?[s,r]:[a,o],w=Math.round(g*48e3);if(w<0||w>=n)return;let C=Math.min(n-w,Math.round(b*48e3));for(let M=0;M<C;M++){let S=M/48e3,I=Math.min(1,S/.018)*Math.exp(-S*(_==="pad"?1.1:3.5));I*=Math.min(1,(b-S)/.08);let D;if(_==="noise"){let k=Math.sin((M+w)*12.9898)*43758.5453;D=(k-Math.floor(k))*2-1,I=Math.exp(-S*35)}else if(_==="sweep"){let k=m*(1+1.6*Math.exp(-S*9));D=Math.sin(2*Math.PI*k*S+6*Math.sin(2*Math.PI*7*S)*Math.exp(-S*4)),I=Math.min(1,S/.01)*Math.exp(-S*5)}else D=Math.sin(2*Math.PI*m*S)+.25*Math.sin(2*Math.PI*m*2*S)*Math.exp(-S*4),_==="bell"&&(D+=.14*Math.sin(2*Math.PI*m*3.01*S)*Math.exp(-S*6));D*=I*p,y[w+M]+=D*Math.sqrt((1-x)/2),T[w+M]+=D*Math.sqrt((1+x)/2)}}let l=(g,b,m)=>{let p=g.getChannelData(Math.min(b,g.numberOfChannels-1)),x=Math.floor(m),_=m-x;return(p[x]||0)*(1-_)+(p[x+1]||0)*_};if(i.music&&t){let g=(i.musicVolume??.6)*.75,b=t.length;for(let m=0;m<n;m++){let p=m/48e3*t.sampleRate%b;s[m]+=l(t,0,p)*g,r[m]+=l(t,1,p)*g}}else if(i.music){let g=[[130.81,164.81,196,261.63],[110,130.81,164.81,220],[87.31,130.81,174.61,220],[98,146.83,196,246.94]],b=(i.musicVolume??.6)/.6;for(let m=0;m<i.duration/.45;m++){let p=m*.45,x=g[Math.floor(m/8)%4];c(p,1.5,x[m%4]*2,.046*b,Math.sin(m)*.45),m%4===0&&c(p,2,x[0]/2,.075*b,0,"pad"),m%2===1&&c(p,.14,1,.016*b,.15,"noise")}}if(i.sfx!==!1)for(let g of i.cues){if(!e&&!i.voiceData){let p=i.cast?.find(x=>x.id===g.speaker)?.kind;p==="bot"||p==="robot"?(c(g.start,.16,660,.055,.3,"bell","sfx"),c(g.start+.11,.2,g.emotion==="idea"?1320:880,.045,.3,"bell","sfx")):c(g.start,.09,1,.028,-.2,"noise","sfx")}let b=g.screen,m=g.start-.15;if(b?.tone==="alert")c(m,.35,330,.07,-.3,"bell","sfx"),c(m+.23,.45,277.18,.06,-.3,"bell","sfx");else if(b?.tone==="success")for(let p=0;p<4;p++)c(m+p*.14,2,[523.25,659.25,783.99,1046.5][p],.07,(p-1.5)*.25,"bell","sfx");else b?.tone==="calm"?(c(m,1.2,587.33,.05,-.2,"bell","sfx"),c(m+.16,1.4,880,.045,.2,"bell","sfx")):b?.tone==="info"&&c(m,.25,1174.66,.04,0,"bell","sfx");if(g.action==="press"&&c(g.start+Math.min((g.end-g.start)*.45,1.2)+.12,.08,1,.1,.3,"noise","sfx"),g.action==="jump"&&c(g.start-.1,.5,180,.07,0,"sweep","sfx"),g.action==="cheer")for(let p=0;p<3;p++)c(g.start+p*.09,.6,1318.5*(1+p*.26),.03,(p-1)*.4,"bell","sfx")}let u=new Float32Array(n),h=new Float32Array(n);if(e){let g=0,b=1-Math.exp(-1/(48e3*.012)),m=1-Math.exp(-1/(48e3*.32));for(let p=0;p<n;p++){let x=p/48e3*e.sampleRate,_=x<e.length?l(e,0,x):0,v=x<e.length?l(e,1,x):0,y=Math.max(Math.abs(_),Math.abs(v));g+=(y-g)*(y>g?b:m);let T=1-.62*Math.min(1,g*7);u[p]=s[p]*T+a[p]+_*.95,h[p]=r[p]*T+o[p]+v*.95}}else for(let g=0;g<n;g++)u[g]=s[g]+a[g],h[g]=r[g]+o[g];let d=0;for(let g=0;g<n;g++)d=Math.max(d,Math.abs(u[g]),Math.abs(h[g]));let f=d>.85?.85/d:1;for(let g=0;g<n;g++){let b=Math.min(1,g/48e3/.5,(n-g)/48e3/.75);u[g]*=f*b,h[g]*=f*b}return[u,h]}function Y0(i){let e=i[0].length,t=new ArrayBuffer(44+e*4),n=new DataView(t);function s(r,a){[...a].forEach((o,c)=>n.setUint8(r+c,o.charCodeAt(0)))}s(0,"RIFF"),n.setUint32(4,36+e*4,!0),s(8,"WAVEfmt "),n.setUint32(16,16,!0),n.setUint16(20,1,!0),n.setUint16(22,2,!0),n.setUint32(24,48e3,!0),n.setUint32(28,48e3*4,!0),n.setUint16(32,4,!0),n.setUint16(34,16,!0),s(36,"data"),n.setUint32(40,e*4,!0);for(let r=0;r<e;r++)for(let a=0;a<2;a++)n.setInt16(44+(r*2+a)*2,Math.max(-32768,Math.min(32767,i[a][r]*32767)),!0);return new Blob([t],{type:"audio/wav"})}var sp=(i,e,t)=>{if(!e.has(i))throw TypeError("Cannot "+t)},N=(i,e,t)=>(sp(i,e,"read from private field"),t?t.call(i):e.get(i)),tt=(i,e,t)=>{if(e.has(i))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(i):e.set(i,t)},mn=(i,e,t,n)=>(sp(i,e,"write to private field"),n?n.call(i,t):e.set(i,t),t),bw=(i,e,t,n)=>({set _(s){mn(i,e,s,t)},get _(){return N(i,e,n)}}),lt=(i,e,t)=>(sp(i,e,"access private method"),t),dt=new Uint8Array(8),Hi=new DataView(dt.buffer),un=i=>[(i%256+256)%256],gt=i=>(Hi.setUint16(0,i,!1),[dt[0],dt[1]]),vw=i=>(Hi.setInt16(0,i,!1),[dt[0],dt[1]]),$0=i=>(Hi.setUint32(0,i,!1),[dt[1],dt[2],dt[3]]),_e=i=>(Hi.setUint32(0,i,!1),[dt[0],dt[1],dt[2],dt[3]]),xw=i=>(Hi.setInt32(0,i,!1),[dt[0],dt[1],dt[2],dt[3]]),Dr=i=>(Hi.setUint32(0,Math.floor(i/2**32),!1),Hi.setUint32(4,i,!1),[dt[0],dt[1],dt[2],dt[3],dt[4],dt[5],dt[6],dt[7]]),rp=i=>(Hi.setInt16(0,2**8*i,!1),[dt[0],dt[1]]),Bi=i=>(Hi.setInt32(0,2**16*i,!1),[dt[0],dt[1],dt[2],dt[3]]),Yf=i=>(Hi.setInt32(0,2**30*i,!1),[dt[0],dt[1],dt[2],dt[3]]),di=(i,e=!1)=>{let t=Array(i.length).fill(null).map((n,s)=>i.charCodeAt(s));return e&&t.push(0),t},fu=i=>i&&i[i.length-1],ap=i=>{let e;for(let t of i)(!e||t.presentationTimestamp>e.presentationTimestamp)&&(e=t);return e},zi=(i,e,t=!0)=>{let n=i*e;return t?Math.round(n):n},Z0=i=>{let e=i*(Math.PI/180),t=Math.cos(e),n=Math.sin(e);return[t,n,0,-n,t,0,0,0,1]},J0=Z0(0),Q0=i=>[Bi(i[0]),Bi(i[1]),Yf(i[2]),Bi(i[3]),Bi(i[4]),Yf(i[5]),Bi(i[6]),Bi(i[7]),Yf(i[8])],bl=i=>!i||typeof i!="object"?i:Array.isArray(i)?i.map(bl):Object.fromEntries(Object.entries(i).map(([e,t])=>[e,bl(t)])),Va=i=>i>=0&&i<2**32,sn=(i,e,t)=>({type:i,contents:e&&new Uint8Array(e.flat(10)),children:t}),Ot=(i,e,t,n,s)=>sn(i,[un(e),$0(t),n??[]],s),_w=i=>{let e=512;return i.fragmented?sn("ftyp",[di("iso5"),_e(e),di("iso5"),di("iso6"),di("mp41")]):sn("ftyp",[di("isom"),_e(e),di("isom"),i.holdsAvc?di("avc1"):[],di("mp41")])},Kf=i=>({type:"mdat",largeSize:i}),yw=i=>({type:"free",size:i}),lu=(i,e,t=!1)=>sn("moov",null,[Sw(e,i),...i.map(n=>Mw(n,e)),t?eT(i):null]),Sw=(i,e)=>{let t=zi(Math.max(0,...e.filter(a=>a.samples.length>0).map(a=>{let o=ap(a.samples);return o.presentationTimestamp+o.duration})),Jf),n=Math.max(...e.map(a=>a.id))+1,s=!Va(i)||!Va(t),r=s?Dr:_e;return Ot("mvhd",+s,0,[r(i),r(i),_e(Jf),r(t),Bi(1),rp(1),Array(10).fill(0),Q0(J0),Array(24).fill(0),_e(n)])},Mw=(i,e)=>sn("trak",null,[ww(i,e),Tw(i,e)]),ww=(i,e)=>{let t=ap(i.samples),n=zi(t?t.presentationTimestamp+t.duration:0,Jf),s=!Va(e)||!Va(n),r=s?Dr:_e,a;return i.info.type==="video"?a=typeof i.info.rotation=="number"?Z0(i.info.rotation):i.info.rotation:a=J0,Ot("tkhd",+s,3,[r(e),r(e),_e(i.id),_e(0),r(n),Array(8).fill(0),gt(0),gt(0),rp(i.info.type==="audio"?1:0),gt(0),Q0(a),Bi(i.info.type==="video"?i.info.width:0),Bi(i.info.type==="video"?i.info.height:0)])},Tw=(i,e)=>sn("mdia",null,[Ew(i,e),Aw(i.info.type==="video"?"vide":"soun"),Cw(i)]),Ew=(i,e)=>{let t=ap(i.samples),n=zi(t?t.presentationTimestamp+t.duration:0,i.timescale),s=!Va(e)||!Va(n),r=s?Dr:_e;return Ot("mdhd",+s,0,[r(e),r(e),_e(i.timescale),r(n),gt(21956),gt(0)])},Aw=i=>Ot("hdlr",0,0,[di("mhlr"),di(i),_e(0),_e(0),_e(0),di("mp4-muxer-hdlr",!0)]),Cw=i=>sn("minf",null,[i.info.type==="video"?Rw():Pw(),Iw(),Uw(i)]),Rw=()=>Ot("vmhd",0,1,[gt(0),gt(0),gt(0),gt(0)]),Pw=()=>Ot("smhd",0,0,[gt(0),gt(0)]),Iw=()=>sn("dinf",null,[Dw()]),Dw=()=>Ot("dref",0,0,[_e(1)],[Lw()]),Lw=()=>Ot("url ",0,1),Uw=i=>{let e=i.compositionTimeOffsetTable.length>1||i.compositionTimeOffsetTable.some(t=>t.sampleCompositionTimeOffset!==0);return sn("stbl",null,[kw(i),Yw(i),Kw(i),$w(i),Zw(i),Jw(i),e?Qw(i):null])},kw=i=>Ot("stsd",0,0,[_e(1)],[i.info.type==="video"?Nw(hT[i.info.codec],i):jw(dT[i.info.codec],i)]),Nw=(i,e)=>sn(i,[Array(6).fill(0),gt(1),gt(0),gt(0),Array(12).fill(0),gt(e.info.width),gt(e.info.height),_e(4718592),_e(4718592),_e(0),gt(1),Array(32).fill(0),gt(24),vw(65535)],[uT[e.info.codec](e),e.info.decoderConfig.colorSpace?zw(e):null]),Fw={bt709:1,bt470bg:5,smpte170m:6},Ow={bt709:1,smpte170m:6,"iec61966-2-1":13},Bw={rgb:0,bt709:1,bt470bg:5,smpte170m:6},zw=i=>sn("colr",[di("nclx"),gt(Fw[i.info.decoderConfig.colorSpace.primaries]),gt(Ow[i.info.decoderConfig.colorSpace.transfer]),gt(Bw[i.info.decoderConfig.colorSpace.matrix]),un((i.info.decoderConfig.colorSpace.fullRange?1:0)<<7)]),Hw=i=>i.info.decoderConfig&&sn("avcC",[...new Uint8Array(i.info.decoderConfig.description)]),Vw=i=>i.info.decoderConfig&&sn("hvcC",[...new Uint8Array(i.info.decoderConfig.description)]),Gw=i=>{if(!i.info.decoderConfig)return null;let e=i.info.decoderConfig;if(!e.colorSpace)throw new Error("'colorSpace' is required in the decoder config for VP9.");let t=e.codec.split("."),n=Number(t[1]),s=Number(t[2]),o=(Number(t[3])<<4)+(0<<1)+Number(e.colorSpace.fullRange);return Ot("vpcC",1,0,[un(n),un(s),un(o),un(2),un(2),un(2),gt(0)])},Ww=()=>{let t=(1<<7)+1;return sn("av1C",[t,0,0,0])},jw=(i,e)=>sn(i,[Array(6).fill(0),gt(1),gt(0),gt(0),_e(0),gt(e.info.numberOfChannels),gt(16),gt(0),gt(0),Bi(e.info.sampleRate)],[fT[e.info.codec](e)]),Xw=i=>{let e=new Uint8Array(i.info.decoderConfig.description);return Ot("esds",0,0,[_e(58753152),un(32+e.byteLength),gt(1),un(0),_e(75530368),un(18+e.byteLength),un(64),un(21),$0(0),_e(130071),_e(130071),_e(92307584),un(e.byteLength),...e,_e(109084800),un(1),un(2)])},qw=i=>{let e=3840,t=0,n=i.info.decoderConfig?.description;if(n){if(n.byteLength<18)throw new TypeError("Invalid decoder description provided for Opus; must be at least 18 bytes long.");let s=ArrayBuffer.isView(n)?new DataView(n.buffer,n.byteOffset,n.byteLength):new DataView(n);e=s.getUint16(10,!0),t=s.getInt16(14,!0)}return sn("dOps",[un(0),un(i.info.numberOfChannels),gt(e),_e(i.info.sampleRate),rp(t),un(0)])},Yw=i=>Ot("stts",0,0,[_e(i.timeToSampleTable.length),i.timeToSampleTable.map(e=>[_e(e.sampleCount),_e(e.sampleDelta)])]),Kw=i=>{if(i.samples.every(t=>t.type==="key"))return null;let e=[...i.samples.entries()].filter(([,t])=>t.type==="key");return Ot("stss",0,0,[_e(e.length),e.map(([t])=>_e(t+1))])},$w=i=>Ot("stsc",0,0,[_e(i.compactlyCodedChunkTable.length),i.compactlyCodedChunkTable.map(e=>[_e(e.firstChunk),_e(e.samplesPerChunk),_e(1)])]),Zw=i=>Ot("stsz",0,0,[_e(0),_e(i.samples.length),i.samples.map(e=>_e(e.size))]),Jw=i=>i.finalizedChunks.length>0&&fu(i.finalizedChunks).offset>=2**32?Ot("co64",0,0,[_e(i.finalizedChunks.length),i.finalizedChunks.map(e=>Dr(e.offset))]):Ot("stco",0,0,[_e(i.finalizedChunks.length),i.finalizedChunks.map(e=>_e(e.offset))]),Qw=i=>Ot("ctts",0,0,[_e(i.compositionTimeOffsetTable.length),i.compositionTimeOffsetTable.map(e=>[_e(e.sampleCount),_e(e.sampleCompositionTimeOffset)])]),eT=i=>sn("mvex",null,i.map(tT)),tT=i=>Ot("trex",0,0,[_e(i.id),_e(1),_e(0),_e(0),_e(0)]),K0=(i,e)=>sn("moof",null,[nT(i),...e.map(iT)]),nT=i=>Ot("mfhd",0,0,[_e(i)]),eb=i=>{let e=0,t=0,n=0,s=0,r=i.type==="delta";return t|=+r,r?e|=1:e|=2,e<<24|t<<16|n<<8|s},iT=i=>sn("traf",null,[sT(i),rT(i),aT(i)]),sT=i=>{let e=0;e|=8,e|=16,e|=32,e|=131072;let t=i.currentChunk.samples[1]??i.currentChunk.samples[0],n={duration:t.timescaleUnitsToNextSample,size:t.size,flags:eb(t)};return Ot("tfhd",0,e,[_e(i.id),_e(n.duration),_e(n.size),_e(n.flags)])},rT=i=>Ot("tfdt",1,0,[Dr(zi(i.currentChunk.startTimestamp,i.timescale))]),aT=i=>{let e=i.currentChunk.samples.map(b=>b.timescaleUnitsToNextSample),t=i.currentChunk.samples.map(b=>b.size),n=i.currentChunk.samples.map(eb),s=i.currentChunk.samples.map(b=>zi(b.presentationTimestamp-b.decodeTimestamp,i.timescale)),r=new Set(e),a=new Set(t),o=new Set(n),c=new Set(s),l=o.size===2&&n[0]!==n[1],u=r.size>1,h=a.size>1,d=!l&&o.size>1,f=c.size>1||[...c].some(b=>b!==0),g=0;return g|=1,g|=4*+l,g|=256*+u,g|=512*+h,g|=1024*+d,g|=2048*+f,Ot("trun",1,g,[_e(i.currentChunk.samples.length),_e(i.currentChunk.offset-i.currentChunk.moofOffset||0),l?_e(n[0]):[],i.currentChunk.samples.map((b,m)=>[u?_e(e[m]):[],h?_e(t[m]):[],d?_e(n[m]):[],f?xw(s[m]):[]])])},oT=i=>sn("mfra",null,[...i.map(lT),cT()]),lT=(i,e)=>Ot("tfra",1,0,[_e(i.id),_e(63),_e(i.finalizedChunks.length),i.finalizedChunks.map(n=>[Dr(zi(n.startTimestamp,i.timescale)),Dr(n.moofOffset),_e(e+1),_e(1),_e(1)])]),cT=()=>Ot("mfro",0,0,[_e(0)]),hT={avc:"avc1",hevc:"hvc1",vp9:"vp09",av1:"av01"},uT={avc:Hw,hevc:Vw,vp9:Gw,av1:Ww},dT={aac:"mp4a",opus:"Opus"},fT={aac:Xw,opus:qw},XC=Symbol("isTarget"),xu=class{},op=class extends xu{constructor(){super(...arguments),this.buffer=null}},tb=class extends xu{constructor(i){if(super(),this.options=i,typeof i!="object")throw new TypeError("StreamTarget requires an options object to be passed to its constructor.");if(i.onData){if(typeof i.onData!="function")throw new TypeError("options.onData, when provided, must be a function.");if(i.onData.length<2)throw new TypeError("options.onData, when provided, must be a function that takes in at least two arguments (data and position). Ignoring the position argument, which specifies the byte offset at which the data is to be written, can lead to broken outputs.")}if(i.chunked!==void 0&&typeof i.chunked!="boolean")throw new TypeError("options.chunked, when provided, must be a boolean.");if(i.chunkSize!==void 0&&(!Number.isInteger(i.chunkSize)||i.chunkSize<1024))throw new TypeError("options.chunkSize, when provided, must be an integer and not smaller than 1024.")}},pT=class extends xu{constructor(i,e){if(super(),this.stream=i,this.options=e,!(i instanceof FileSystemWritableFileStream))throw new TypeError("FileSystemWritableFileStreamTarget requires a FileSystemWritableFileStream instance.");if(e!==void 0&&typeof e!="object")throw new TypeError("FileSystemWritableFileStreamTarget's options, when provided, must be an object.");if(e&&e.chunkSize!==void 0&&(!Number.isInteger(e.chunkSize)||e.chunkSize<=0))throw new TypeError("options.chunkSize, when provided, must be a positive integer")}},Ar,Ba,nb=class{constructor(){this.pos=0,tt(this,Ar,new Uint8Array(8)),tt(this,Ba,new DataView(N(this,Ar).buffer)),this.offsets=new WeakMap}seek(i){this.pos=i}writeU32(i){N(this,Ba).setUint32(0,i,!1),this.write(N(this,Ar).subarray(0,4))}writeU64(i){N(this,Ba).setUint32(0,Math.floor(i/2**32),!1),N(this,Ba).setUint32(4,i,!1),this.write(N(this,Ar).subarray(0,8))}writeAscii(i){for(let e=0;e<i.length;e++)N(this,Ba).setUint8(e%8,i.charCodeAt(e)),e%8===7&&this.write(N(this,Ar));i.length%8!==0&&this.write(N(this,Ar).subarray(0,i.length%8))}writeBox(i){if(this.offsets.set(i,this.pos),i.contents&&!i.children)this.writeBoxHeader(i,i.size??i.contents.byteLength+8),this.write(i.contents);else{let e=this.pos;if(this.writeBoxHeader(i,0),i.contents&&this.write(i.contents),i.children)for(let s of i.children)s&&this.writeBox(s);let t=this.pos,n=i.size??t-e;this.seek(e),this.writeBoxHeader(i,n),this.seek(t)}}writeBoxHeader(i,e){this.writeU32(i.largeSize?1:e),this.writeAscii(i.type),i.largeSize&&this.writeU64(e)}measureBoxHeader(i){return 8+(i.largeSize?8:0)}patchBox(i){let e=this.pos;this.seek(this.offsets.get(i)),this.writeBox(i),this.seek(e)}measureBox(i){if(i.contents&&!i.children)return this.measureBoxHeader(i)+i.contents.byteLength;{let e=this.measureBoxHeader(i);if(i.contents&&(e+=i.contents.byteLength),i.children)for(let t of i.children)t&&(e+=this.measureBox(t));return e}}};Ar=new WeakMap;Ba=new WeakMap;var cu,Ir,Sl,ml,hu,$f,mT=class extends nb{constructor(i){super(),tt(this,hu),tt(this,cu,void 0),tt(this,Ir,new ArrayBuffer(2**16)),tt(this,Sl,new Uint8Array(N(this,Ir))),tt(this,ml,0),mn(this,cu,i)}write(i){lt(this,hu,$f).call(this,this.pos+i.byteLength),N(this,Sl).set(i,this.pos),this.pos+=i.byteLength,mn(this,ml,Math.max(N(this,ml),this.pos))}finalize(){lt(this,hu,$f).call(this,this.pos),N(this,cu).buffer=N(this,Ir).slice(0,Math.max(N(this,ml),this.pos))}};cu=new WeakMap;Ir=new WeakMap;Sl=new WeakMap;ml=new WeakMap;hu=new WeakSet;$f=function(i){let e=N(this,Ir).byteLength;for(;e<i;)e*=2;if(e===N(this,Ir).byteLength)return;let t=new ArrayBuffer(e),n=new Uint8Array(t);n.set(N(this,Sl),0),mn(this,Ir,t),mn(this,Sl,n)};var gT=2**24,bT=2,vl,Cr,gl,ds,Qn,pu,Zf,lp,ib,cp,sb,xl,mu,hp=class extends nb{constructor(i){super(),tt(this,pu),tt(this,lp),tt(this,cp),tt(this,xl),tt(this,vl,void 0),tt(this,Cr,[]),tt(this,gl,void 0),tt(this,ds,void 0),tt(this,Qn,[]),mn(this,vl,i),mn(this,gl,i.options?.chunked??!1),mn(this,ds,i.options?.chunkSize??gT)}write(i){N(this,Cr).push({data:i.slice(),start:this.pos}),this.pos+=i.byteLength}flush(){if(N(this,Cr).length===0)return;let i=[],e=[...N(this,Cr)].sort((t,n)=>t.start-n.start);i.push({start:e[0].start,size:e[0].data.byteLength});for(let t=1;t<e.length;t++){let n=i[i.length-1],s=e[t];s.start<=n.start+n.size?n.size=Math.max(n.size,s.start+s.data.byteLength-n.start):i.push({start:s.start,size:s.data.byteLength})}for(let t of i){t.data=new Uint8Array(t.size);for(let n of N(this,Cr))t.start<=n.start&&n.start<t.start+t.size&&t.data.set(n.data,n.start-t.start);N(this,gl)?(lt(this,pu,Zf).call(this,t.data,t.start),lt(this,xl,mu).call(this)):N(this,vl).options.onData?.(t.data,t.start)}N(this,Cr).length=0}finalize(){N(this,gl)&&lt(this,xl,mu).call(this,!0)}};vl=new WeakMap;Cr=new WeakMap;gl=new WeakMap;ds=new WeakMap;Qn=new WeakMap;pu=new WeakSet;Zf=function(i,e){let t=N(this,Qn).findIndex(o=>o.start<=e&&e<o.start+N(this,ds));t===-1&&(t=lt(this,cp,sb).call(this,e));let n=N(this,Qn)[t],s=e-n.start,r=i.subarray(0,Math.min(N(this,ds)-s,i.byteLength));n.data.set(r,s);let a={start:s,end:s+r.byteLength};if(lt(this,lp,ib).call(this,n,a),n.written[0].start===0&&n.written[0].end===N(this,ds)&&(n.shouldFlush=!0),N(this,Qn).length>bT){for(let o=0;o<N(this,Qn).length-1;o++)N(this,Qn)[o].shouldFlush=!0;lt(this,xl,mu).call(this)}r.byteLength<i.byteLength&&lt(this,pu,Zf).call(this,i.subarray(r.byteLength),e+r.byteLength)};lp=new WeakSet;ib=function(i,e){let t=0,n=i.written.length-1,s=-1;for(;t<=n;){let r=Math.floor(t+(n-t+1)/2);i.written[r].start<=e.start?(t=r+1,s=r):n=r-1}for(i.written.splice(s+1,0,e),(s===-1||i.written[s].end<e.start)&&s++;s<i.written.length-1&&i.written[s].end>=i.written[s+1].start;)i.written[s].end=Math.max(i.written[s].end,i.written[s+1].end),i.written.splice(s+1,1)};cp=new WeakSet;sb=function(i){let t={start:Math.floor(i/N(this,ds))*N(this,ds),data:new Uint8Array(N(this,ds)),written:[],shouldFlush:!1};return N(this,Qn).push(t),N(this,Qn).sort((n,s)=>n.start-s.start),N(this,Qn).indexOf(t)};xl=new WeakSet;mu=function(i=!1){for(let e=0;e<N(this,Qn).length;e++){let t=N(this,Qn)[e];if(!(!t.shouldFlush&&!i)){for(let n of t.written)N(this,vl).options.onData?.(t.data.subarray(n.start,n.end),t.start+n.start);N(this,Qn).splice(e--,1)}}};var vT=class extends hp{constructor(i){super(new tb({onData:(e,t)=>i.stream.write({type:"write",data:e,position:t}),chunked:!0,chunkSize:i.options?.chunkSize}))}},Jf=1e3,xT=["avc","hevc","vp9","av1"],_T=["aac","opus"],yT=2082844800,ST=["strict","offset","cross-track-offset"],Ue,Ge,gu,Jn,yn,pn,za,Ha,up,Rr,Pr,_l,Qf,rb,ep,ab,dp,ob,tp,lb,fp,cb,uu,np,Oi,us,pp,hb,yl,bu,vu,mp,Ga,Ml,du,ip,ub=class{constructor(i){if(tt(this,Qf),tt(this,ep),tt(this,dp),tt(this,tp),tt(this,fp),tt(this,uu),tt(this,Oi),tt(this,pp),tt(this,yl),tt(this,vu),tt(this,Ga),tt(this,du),tt(this,Ue,void 0),tt(this,Ge,void 0),tt(this,gu,void 0),tt(this,Jn,void 0),tt(this,yn,null),tt(this,pn,null),tt(this,za,Math.floor(Date.now()/1e3)+yT),tt(this,Ha,[]),tt(this,up,1),tt(this,Rr,[]),tt(this,Pr,[]),tt(this,_l,!1),lt(this,Qf,rb).call(this,i),i.video=bl(i.video),i.audio=bl(i.audio),i.fastStart=bl(i.fastStart),this.target=i.target,mn(this,Ue,{firstTimestampBehavior:"strict",...i}),i.target instanceof op)mn(this,Ge,new mT(i.target));else if(i.target instanceof tb)mn(this,Ge,new hp(i.target));else if(i.target instanceof pT)mn(this,Ge,new vT(i.target));else throw new Error(`Invalid target: ${i.target}`);lt(this,tp,lb).call(this),lt(this,ep,ab).call(this)}addVideoChunk(i,e,t,n){if(!(i instanceof EncodedVideoChunk))throw new TypeError("addVideoChunk's first argument (sample) must be of type EncodedVideoChunk.");if(e&&typeof e!="object")throw new TypeError("addVideoChunk's second argument (meta), when provided, must be an object.");if(t!==void 0&&(!Number.isFinite(t)||t<0))throw new TypeError("addVideoChunk's third argument (timestamp), when provided, must be a non-negative real number.");if(n!==void 0&&!Number.isFinite(n))throw new TypeError("addVideoChunk's fourth argument (compositionTimeOffset), when provided, must be a real number.");let s=new Uint8Array(i.byteLength);i.copyTo(s),this.addVideoChunkRaw(s,i.type,t??i.timestamp,i.duration,e,n)}addVideoChunkRaw(i,e,t,n,s,r){if(!(i instanceof Uint8Array))throw new TypeError("addVideoChunkRaw's first argument (data) must be an instance of Uint8Array.");if(e!=="key"&&e!=="delta")throw new TypeError("addVideoChunkRaw's second argument (type) must be either 'key' or 'delta'.");if(!Number.isFinite(t)||t<0)throw new TypeError("addVideoChunkRaw's third argument (timestamp) must be a non-negative real number.");if(!Number.isFinite(n)||n<0)throw new TypeError("addVideoChunkRaw's fourth argument (duration) must be a non-negative real number.");if(s&&typeof s!="object")throw new TypeError("addVideoChunkRaw's fifth argument (meta), when provided, must be an object.");if(r!==void 0&&!Number.isFinite(r))throw new TypeError("addVideoChunkRaw's sixth argument (compositionTimeOffset), when provided, must be a real number.");if(lt(this,du,ip).call(this),!N(this,Ue).video)throw new Error("No video track declared.");if(typeof N(this,Ue).fastStart=="object"&&N(this,yn).samples.length===N(this,Ue).fastStart.expectedVideoChunks)throw new Error(`Cannot add more video chunks than specified in 'fastStart' (${N(this,Ue).fastStart.expectedVideoChunks}).`);let a=lt(this,uu,np).call(this,N(this,yn),i,e,t,n,s,r);if(N(this,Ue).fastStart==="fragmented"&&N(this,pn)){for(;N(this,Pr).length>0&&N(this,Pr)[0].decodeTimestamp<=a.decodeTimestamp;){let o=N(this,Pr).shift();lt(this,Oi,us).call(this,N(this,pn),o)}a.decodeTimestamp<=N(this,pn).lastDecodeTimestamp?lt(this,Oi,us).call(this,N(this,yn),a):N(this,Rr).push(a)}else lt(this,Oi,us).call(this,N(this,yn),a)}addAudioChunk(i,e,t){if(!(i instanceof EncodedAudioChunk))throw new TypeError("addAudioChunk's first argument (sample) must be of type EncodedAudioChunk.");if(e&&typeof e!="object")throw new TypeError("addAudioChunk's second argument (meta), when provided, must be an object.");if(t!==void 0&&(!Number.isFinite(t)||t<0))throw new TypeError("addAudioChunk's third argument (timestamp), when provided, must be a non-negative real number.");let n=new Uint8Array(i.byteLength);i.copyTo(n),this.addAudioChunkRaw(n,i.type,t??i.timestamp,i.duration,e)}addAudioChunkRaw(i,e,t,n,s){if(!(i instanceof Uint8Array))throw new TypeError("addAudioChunkRaw's first argument (data) must be an instance of Uint8Array.");if(e!=="key"&&e!=="delta")throw new TypeError("addAudioChunkRaw's second argument (type) must be either 'key' or 'delta'.");if(!Number.isFinite(t)||t<0)throw new TypeError("addAudioChunkRaw's third argument (timestamp) must be a non-negative real number.");if(!Number.isFinite(n)||n<0)throw new TypeError("addAudioChunkRaw's fourth argument (duration) must be a non-negative real number.");if(s&&typeof s!="object")throw new TypeError("addAudioChunkRaw's fifth argument (meta), when provided, must be an object.");if(lt(this,du,ip).call(this),!N(this,Ue).audio)throw new Error("No audio track declared.");if(typeof N(this,Ue).fastStart=="object"&&N(this,pn).samples.length===N(this,Ue).fastStart.expectedAudioChunks)throw new Error(`Cannot add more audio chunks than specified in 'fastStart' (${N(this,Ue).fastStart.expectedAudioChunks}).`);let r=lt(this,uu,np).call(this,N(this,pn),i,e,t,n,s);if(N(this,Ue).fastStart==="fragmented"&&N(this,yn)){for(;N(this,Rr).length>0&&N(this,Rr)[0].decodeTimestamp<=r.decodeTimestamp;){let a=N(this,Rr).shift();lt(this,Oi,us).call(this,N(this,yn),a)}r.decodeTimestamp<=N(this,yn).lastDecodeTimestamp?lt(this,Oi,us).call(this,N(this,pn),r):N(this,Pr).push(r)}else lt(this,Oi,us).call(this,N(this,pn),r)}finalize(){if(N(this,_l))throw new Error("Cannot finalize a muxer more than once.");if(N(this,Ue).fastStart==="fragmented"){for(let e of N(this,Rr))lt(this,Oi,us).call(this,N(this,yn),e);for(let e of N(this,Pr))lt(this,Oi,us).call(this,N(this,pn),e);lt(this,vu,mp).call(this,!1)}else N(this,yn)&&lt(this,yl,bu).call(this,N(this,yn)),N(this,pn)&&lt(this,yl,bu).call(this,N(this,pn));let i=[N(this,yn),N(this,pn)].filter(Boolean);if(N(this,Ue).fastStart==="in-memory"){let e;for(let n=0;n<2;n++){let s=lu(i,N(this,za)),r=N(this,Ge).measureBox(s);e=N(this,Ge).measureBox(N(this,Jn));let a=N(this,Ge).pos+r+e;for(let o of N(this,Ha)){o.offset=a;for(let{data:c}of o.samples)a+=c.byteLength,e+=c.byteLength}if(a<2**32)break;e>=2**32&&(N(this,Jn).largeSize=!0)}let t=lu(i,N(this,za));N(this,Ge).writeBox(t),N(this,Jn).size=e,N(this,Ge).writeBox(N(this,Jn));for(let n of N(this,Ha))for(let s of n.samples)N(this,Ge).write(s.data),s.data=null}else if(N(this,Ue).fastStart==="fragmented"){let e=N(this,Ge).pos,t=oT(i);N(this,Ge).writeBox(t);let n=N(this,Ge).pos-e;N(this,Ge).seek(N(this,Ge).pos-4),N(this,Ge).writeU32(n)}else{let e=N(this,Ge).offsets.get(N(this,Jn)),t=N(this,Ge).pos-e;N(this,Jn).size=t,N(this,Jn).largeSize=t>=2**32,N(this,Ge).patchBox(N(this,Jn));let n=lu(i,N(this,za));if(typeof N(this,Ue).fastStart=="object"){N(this,Ge).seek(N(this,gu)),N(this,Ge).writeBox(n);let s=e-N(this,Ge).pos;N(this,Ge).writeBox(yw(s))}else N(this,Ge).writeBox(n)}lt(this,Ga,Ml).call(this),N(this,Ge).finalize(),mn(this,_l,!0)}};Ue=new WeakMap;Ge=new WeakMap;gu=new WeakMap;Jn=new WeakMap;yn=new WeakMap;pn=new WeakMap;za=new WeakMap;Ha=new WeakMap;up=new WeakMap;Rr=new WeakMap;Pr=new WeakMap;_l=new WeakMap;Qf=new WeakSet;rb=function(i){if(typeof i!="object")throw new TypeError("The muxer requires an options object to be passed to its constructor.");if(!(i.target instanceof xu))throw new TypeError("The target must be provided and an instance of Target.");if(i.video){if(!xT.includes(i.video.codec))throw new TypeError(`Unsupported video codec: ${i.video.codec}`);if(!Number.isInteger(i.video.width)||i.video.width<=0)throw new TypeError(`Invalid video width: ${i.video.width}. Must be a positive integer.`);if(!Number.isInteger(i.video.height)||i.video.height<=0)throw new TypeError(`Invalid video height: ${i.video.height}. Must be a positive integer.`);let e=i.video.rotation;if(typeof e=="number"&&![0,90,180,270].includes(e))throw new TypeError(`Invalid video rotation: ${e}. Has to be 0, 90, 180 or 270.`);if(Array.isArray(e)&&(e.length!==9||e.some(t=>typeof t!="number")))throw new TypeError(`Invalid video transformation matrix: ${e.join()}`);if(i.video.frameRate!==void 0&&(!Number.isInteger(i.video.frameRate)||i.video.frameRate<=0))throw new TypeError(`Invalid video frame rate: ${i.video.frameRate}. Must be a positive integer.`)}if(i.audio){if(!_T.includes(i.audio.codec))throw new TypeError(`Unsupported audio codec: ${i.audio.codec}`);if(!Number.isInteger(i.audio.numberOfChannels)||i.audio.numberOfChannels<=0)throw new TypeError(`Invalid number of audio channels: ${i.audio.numberOfChannels}. Must be a positive integer.`);if(!Number.isInteger(i.audio.sampleRate)||i.audio.sampleRate<=0)throw new TypeError(`Invalid audio sample rate: ${i.audio.sampleRate}. Must be a positive integer.`)}if(i.firstTimestampBehavior&&!ST.includes(i.firstTimestampBehavior))throw new TypeError(`Invalid first timestamp behavior: ${i.firstTimestampBehavior}`);if(typeof i.fastStart=="object"){if(i.video){if(i.fastStart.expectedVideoChunks===void 0)throw new TypeError("'fastStart' is an object but is missing property 'expectedVideoChunks'.");if(!Number.isInteger(i.fastStart.expectedVideoChunks)||i.fastStart.expectedVideoChunks<0)throw new TypeError("'expectedVideoChunks' must be a non-negative integer.")}if(i.audio){if(i.fastStart.expectedAudioChunks===void 0)throw new TypeError("'fastStart' is an object but is missing property 'expectedAudioChunks'.");if(!Number.isInteger(i.fastStart.expectedAudioChunks)||i.fastStart.expectedAudioChunks<0)throw new TypeError("'expectedAudioChunks' must be a non-negative integer.")}}else if(![!1,"in-memory","fragmented"].includes(i.fastStart))throw new TypeError("'fastStart' option must be false, 'in-memory', 'fragmented' or an object.");if(i.minFragmentDuration!==void 0&&(!Number.isFinite(i.minFragmentDuration)||i.minFragmentDuration<0))throw new TypeError("'minFragmentDuration' must be a non-negative number.")};ep=new WeakSet;ab=function(){if(N(this,Ge).writeBox(_w({holdsAvc:N(this,Ue).video?.codec==="avc",fragmented:N(this,Ue).fastStart==="fragmented"})),mn(this,gu,N(this,Ge).pos),N(this,Ue).fastStart==="in-memory")mn(this,Jn,Kf(!1));else if(N(this,Ue).fastStart!=="fragmented"){if(typeof N(this,Ue).fastStart=="object"){let i=lt(this,dp,ob).call(this);N(this,Ge).seek(N(this,Ge).pos+i)}mn(this,Jn,Kf(!0)),N(this,Ge).writeBox(N(this,Jn))}lt(this,Ga,Ml).call(this)};dp=new WeakSet;ob=function(){if(typeof N(this,Ue).fastStart!="object")return;let i=0,e=[N(this,Ue).fastStart.expectedVideoChunks,N(this,Ue).fastStart.expectedAudioChunks];for(let t of e)t&&(i+=8*Math.ceil(2/3*t),i+=4*t,i+=12*Math.ceil(2/3*t),i+=4*t,i+=8*t);return i+=4096,i};tp=new WeakSet;lb=function(){if(N(this,Ue).video&&mn(this,yn,{id:1,info:{type:"video",codec:N(this,Ue).video.codec,width:N(this,Ue).video.width,height:N(this,Ue).video.height,rotation:N(this,Ue).video.rotation??0,decoderConfig:null},timescale:N(this,Ue).video.frameRate??57600,samples:[],finalizedChunks:[],currentChunk:null,firstDecodeTimestamp:void 0,lastDecodeTimestamp:-1,timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,compactlyCodedChunkTable:[]}),N(this,Ue).audio&&(mn(this,pn,{id:N(this,Ue).video?2:1,info:{type:"audio",codec:N(this,Ue).audio.codec,numberOfChannels:N(this,Ue).audio.numberOfChannels,sampleRate:N(this,Ue).audio.sampleRate,decoderConfig:null},timescale:N(this,Ue).audio.sampleRate,samples:[],finalizedChunks:[],currentChunk:null,firstDecodeTimestamp:void 0,lastDecodeTimestamp:-1,timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,compactlyCodedChunkTable:[]}),N(this,Ue).audio.codec==="aac")){let i=lt(this,fp,cb).call(this,2,N(this,Ue).audio.sampleRate,N(this,Ue).audio.numberOfChannels);N(this,pn).info.decoderConfig={codec:N(this,Ue).audio.codec,description:i,numberOfChannels:N(this,Ue).audio.numberOfChannels,sampleRate:N(this,Ue).audio.sampleRate}}};fp=new WeakSet;cb=function(i,e,t){let s=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350].indexOf(e),r=t,a="";a+=i.toString(2).padStart(5,"0"),a+=s.toString(2).padStart(4,"0"),s===15&&(a+=e.toString(2).padStart(24,"0")),a+=r.toString(2).padStart(4,"0");let o=Math.ceil(a.length/8)*8;a=a.padEnd(o,"0");let c=new Uint8Array(a.length/8);for(let l=0;l<a.length;l+=8)c[l/8]=parseInt(a.slice(l,l+8),2);return c};uu=new WeakSet;np=function(i,e,t,n,s,r,a){let o=n/1e6,c=(n-(a??0))/1e6,l=s/1e6,u=lt(this,pp,hb).call(this,o,c,i);return o=u.presentationTimestamp,c=u.decodeTimestamp,r?.decoderConfig&&(i.info.decoderConfig===null?i.info.decoderConfig=r.decoderConfig:Object.assign(i.info.decoderConfig,r.decoderConfig)),{presentationTimestamp:o,decodeTimestamp:c,duration:l,data:e,size:e.byteLength,type:t,timescaleUnitsToNextSample:zi(l,i.timescale)}};Oi=new WeakSet;us=function(i,e){N(this,Ue).fastStart!=="fragmented"&&i.samples.push(e);let t=zi(e.presentationTimestamp-e.decodeTimestamp,i.timescale);if(i.lastTimescaleUnits!==null){let s=zi(e.decodeTimestamp,i.timescale,!1),r=Math.round(s-i.lastTimescaleUnits);if(i.lastTimescaleUnits+=r,i.lastSample.timescaleUnitsToNextSample=r,N(this,Ue).fastStart!=="fragmented"){let a=fu(i.timeToSampleTable);a.sampleCount===1?(a.sampleDelta=r,a.sampleCount++):a.sampleDelta===r?a.sampleCount++:(a.sampleCount--,i.timeToSampleTable.push({sampleCount:2,sampleDelta:r}));let o=fu(i.compositionTimeOffsetTable);o.sampleCompositionTimeOffset===t?o.sampleCount++:i.compositionTimeOffsetTable.push({sampleCount:1,sampleCompositionTimeOffset:t})}}else i.lastTimescaleUnits=0,N(this,Ue).fastStart!=="fragmented"&&(i.timeToSampleTable.push({sampleCount:1,sampleDelta:zi(e.duration,i.timescale)}),i.compositionTimeOffsetTable.push({sampleCount:1,sampleCompositionTimeOffset:t}));i.lastSample=e;let n=!1;if(!i.currentChunk)n=!0;else{let s=e.presentationTimestamp-i.currentChunk.startTimestamp;if(N(this,Ue).fastStart==="fragmented"){let r=N(this,yn)??N(this,pn),a=N(this,Ue).minFragmentDuration??1;i===r&&e.type==="key"&&s>=a&&(n=!0,lt(this,vu,mp).call(this))}else n=s>=.5}n&&(i.currentChunk&&lt(this,yl,bu).call(this,i),i.currentChunk={startTimestamp:e.presentationTimestamp,samples:[]}),i.currentChunk.samples.push(e)};pp=new WeakSet;hb=function(i,e,t){let n=N(this,Ue).firstTimestampBehavior==="strict",s=t.lastDecodeTimestamp===-1;if(n&&s&&e!==0)throw new Error(`The first chunk for your media track must have a timestamp of 0 (received DTS=${e}).Non-zero first timestamps are often caused by directly piping frames or audio data from a MediaStreamTrack into the encoder. Their timestamps are typically relative to the age of thedocument, which is probably what you want.

If you want to offset all timestamps of a track such that the first one is zero, set firstTimestampBehavior: 'offset' in the options.
`);if(N(this,Ue).firstTimestampBehavior==="offset"||N(this,Ue).firstTimestampBehavior==="cross-track-offset"){t.firstDecodeTimestamp===void 0&&(t.firstDecodeTimestamp=e);let a;N(this,Ue).firstTimestampBehavior==="offset"?a=t.firstDecodeTimestamp:a=Math.min(N(this,yn)?.firstDecodeTimestamp??1/0,N(this,pn)?.firstDecodeTimestamp??1/0),e-=a,i-=a}if(e<t.lastDecodeTimestamp)throw new Error(`Timestamps must be monotonically increasing (DTS went from ${t.lastDecodeTimestamp*1e6} to ${e*1e6}).`);return t.lastDecodeTimestamp=e,{presentationTimestamp:i,decodeTimestamp:e}};yl=new WeakSet;bu=function(i){if(N(this,Ue).fastStart==="fragmented")throw new Error("Can't finalize individual chunks if 'fastStart' is set to 'fragmented'.");if(i.currentChunk){if(i.finalizedChunks.push(i.currentChunk),N(this,Ha).push(i.currentChunk),(i.compactlyCodedChunkTable.length===0||fu(i.compactlyCodedChunkTable).samplesPerChunk!==i.currentChunk.samples.length)&&i.compactlyCodedChunkTable.push({firstChunk:i.finalizedChunks.length,samplesPerChunk:i.currentChunk.samples.length}),N(this,Ue).fastStart==="in-memory"){i.currentChunk.offset=0;return}i.currentChunk.offset=N(this,Ge).pos;for(let e of i.currentChunk.samples)N(this,Ge).write(e.data),e.data=null;lt(this,Ga,Ml).call(this)}};vu=new WeakSet;mp=function(i=!0){if(N(this,Ue).fastStart!=="fragmented")throw new Error("Can't finalize a fragment unless 'fastStart' is set to 'fragmented'.");let e=[N(this,yn),N(this,pn)].filter(o=>o&&o.currentChunk);if(e.length===0)return;let t=bw(this,up)._++;if(t===1){let o=lu(e,N(this,za),!0);N(this,Ge).writeBox(o)}let n=N(this,Ge).pos,s=K0(t,e);N(this,Ge).writeBox(s);{let o=Kf(!1),c=0;for(let u of e)for(let h of u.currentChunk.samples)c+=h.size;let l=N(this,Ge).measureBox(o)+c;l>=2**32&&(o.largeSize=!0,l=N(this,Ge).measureBox(o)+c),o.size=l,N(this,Ge).writeBox(o)}for(let o of e){o.currentChunk.offset=N(this,Ge).pos,o.currentChunk.moofOffset=n;for(let c of o.currentChunk.samples)N(this,Ge).write(c.data),c.data=null}let r=N(this,Ge).pos;N(this,Ge).seek(N(this,Ge).offsets.get(s));let a=K0(t,e);N(this,Ge).writeBox(a),N(this,Ge).seek(r);for(let o of e)o.finalizedChunks.push(o.currentChunk),N(this,Ha).push(o.currentChunk),o.currentChunk=null;i&&lt(this,Ga,Ml).call(this)};Ga=new WeakSet;Ml=function(){N(this,Ge)instanceof hp&&N(this,Ge).flush()};du=new WeakSet;ip=function(){if(N(this,_l))throw new Error("Cannot add new video or audio chunks after the file has been finalized.")};var Mn=Uint8Array,ei=Uint16Array,yp=Int32Array,Sp=new Mn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Mp=new Mn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),db=new Mn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),vb=function(i,e){for(var t=new ei(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var s=new yp(t[30]),n=1;n<30;++n)for(var r=t[n];r<t[n+1];++r)s[r]=r-t[n]<<5|n;return{b:t,r:s}},xb=vb(Sp,2),MT=xb.b,bp=xb.r;MT[28]=258,bp[258]=28;var _b=vb(Mp,0),iR=_b.b,fb=_b.r,vp=new ei(32768);for(bt=0;bt<32768;++bt)fs=(bt&43690)>>1|(bt&21845)<<1,fs=(fs&52428)>>2|(fs&13107)<<2,fs=(fs&61680)>>4|(fs&3855)<<4,vp[bt]=((fs&65280)>>8|(fs&255)<<8)>>1;var fs,bt,El=(function(i,e,t){for(var n=i.length,s=0,r=new ei(e);s<n;++s)i[s]&&++r[i[s]-1];var a=new ei(e);for(s=1;s<e;++s)a[s]=a[s-1]+r[s-1]<<1;var o;if(t){o=new ei(1<<e);var c=15-e;for(s=0;s<n;++s)if(i[s])for(var l=s<<4|i[s],u=e-i[s],h=a[i[s]-1]++<<u,d=h|(1<<u)-1;h<=d;++h)o[vp[h]>>c]=l}else for(o=new ei(n),s=0;s<n;++s)i[s]&&(o[s]=vp[a[i[s]-1]++]>>15-i[s]);return o}),Lr=new Mn(288);for(bt=0;bt<144;++bt)Lr[bt]=8;var bt;for(bt=144;bt<256;++bt)Lr[bt]=9;var bt;for(bt=256;bt<280;++bt)Lr[bt]=7;var bt;for(bt=280;bt<288;++bt)Lr[bt]=8;var bt,_u=new Mn(32);for(bt=0;bt<32;++bt)_u[bt]=5;var bt,wT=El(Lr,9,0);var TT=El(_u,5,0);var yb=function(i){return(i+7)/8|0},Sb=function(i,e,t){return(e==null||e<0)&&(e=0),(t==null||t>i.length)&&(t=i.length),new Mn(i.subarray(e,t))};var ET=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],yu=function(i,e,t){var n=new Error(e||ET[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,yu),!t)throw n;return n};var ps=function(i,e,t){t<<=e&7;var n=e/8|0;i[n]|=t,i[n+1]|=t>>8},wl=function(i,e,t){t<<=e&7;var n=e/8|0;i[n]|=t,i[n+1]|=t>>8,i[n+2]|=t>>16},gp=function(i,e){for(var t=[],n=0;n<i.length;++n)i[n]&&t.push({s:n,f:i[n]});var s=t.length,r=t.slice();if(!s)return{t:wb,l:0};if(s==1){var a=new Mn(t[0].s+1);return a[t[0].s]=1,{t:a,l:1}}t.sort(function(y,T){return y.f-T.f}),t.push({s:-1,f:25001});var o=t[0],c=t[1],l=0,u=1,h=2;for(t[0]={s:-1,f:o.f+c.f,l:o,r:c};u!=s-1;)o=t[t[l].f<t[h].f?l++:h++],c=t[l!=u&&t[l].f<t[h].f?l++:h++],t[u++]={s:-1,f:o.f+c.f,l:o,r:c};for(var d=r[0].s,n=1;n<s;++n)r[n].s>d&&(d=r[n].s);var f=new ei(d+1),g=xp(t[u-1],f,0);if(g>e){var n=0,b=0,m=g-e,p=1<<m;for(r.sort(function(T,w){return f[w.s]-f[T.s]||T.f-w.f});n<s;++n){var x=r[n].s;if(f[x]>e)b+=p-(1<<g-f[x]),f[x]=e;else break}for(b>>=m;b>0;){var _=r[n].s;f[_]<e?b-=1<<e-f[_]++-1:++n}for(;n>=0&&b;--n){var v=r[n].s;f[v]==e&&(--f[v],++b)}g=e}return{t:new Mn(f),l:g}},xp=function(i,e,t){return i.s==-1?Math.max(xp(i.l,e,t+1),xp(i.r,e,t+1)):e[i.s]=t},pb=function(i){for(var e=i.length;e&&!i[--e];);for(var t=new ei(++e),n=0,s=i[0],r=1,a=function(c){t[n++]=c},o=1;o<=e;++o)if(i[o]==s&&o!=e)++r;else{if(!s&&r>2){for(;r>138;r-=138)a(32754);r>2&&(a(r>10?r-11<<5|28690:r-3<<5|12305),r=0)}else if(r>3){for(a(s),--r;r>6;r-=6)a(8304);r>2&&(a(r-3<<5|8208),r=0)}for(;r--;)a(s);r=1,s=i[o]}return{c:t.subarray(0,n),n:e}},Tl=function(i,e){for(var t=0,n=0;n<e.length;++n)t+=i[n]*e[n];return t},Mb=function(i,e,t){var n=t.length,s=yb(e+2);i[s]=n&255,i[s+1]=n>>8,i[s+2]=i[s]^255,i[s+3]=i[s+1]^255;for(var r=0;r<n;++r)i[s+r+4]=t[r];return(s+4+n)*8},mb=function(i,e,t,n,s,r,a,o,c,l,u){ps(e,u++,t),++s[256];for(var h=gp(s,15),d=h.t,f=h.l,g=gp(r,15),b=g.t,m=g.l,p=pb(d),x=p.c,_=p.n,v=pb(b),y=v.c,T=v.n,w=new ei(19),C=0;C<x.length;++C)++w[x[C]&31];for(var C=0;C<y.length;++C)++w[y[C]&31];for(var M=gp(w,7),S=M.t,I=M.l,D=19;D>4&&!S[db[D-1]];--D);var k=l+5<<3,W=Tl(s,Lr)+Tl(r,_u)+a,B=Tl(s,d)+Tl(r,b)+a+14+3*D+Tl(w,S)+2*w[16]+3*w[17]+7*w[18];if(c>=0&&k<=W&&k<=B)return Mb(e,u,i.subarray(c,c+l));var G,Z,O,j;if(ps(e,u,1+(B<W)),u+=2,B<W){G=El(d,f,0),Z=d,O=El(b,m,0),j=b;var Q=El(S,I,0);ps(e,u,_-257),ps(e,u+5,T-1),ps(e,u+10,D-4),u+=14;for(var C=0;C<D;++C)ps(e,u+3*C,S[db[C]]);u+=3*D;for(var re=[x,y],ge=0;ge<2;++ge)for(var He=re[ge],C=0;C<He.length;++C){var ke=He[C]&31;ps(e,u,Q[ke]),u+=S[ke],ke>15&&(ps(e,u,He[C]>>5&127),u+=He[C]>>12)}}else G=wT,Z=Lr,O=TT,j=_u;for(var C=0;C<o;++C){var we=n[C];if(we>255){var ke=we>>18&31;wl(e,u,G[ke+257]),u+=Z[ke+257],ke>7&&(ps(e,u,we>>23&31),u+=Sp[ke]);var Y=we&31;wl(e,u,O[Y]),u+=j[Y],Y>3&&(wl(e,u,we>>5&8191),u+=Mp[Y])}else wl(e,u,G[we]),u+=Z[we]}return wl(e,u,G[256]),u+Z[256]},AT=new yp([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),wb=new Mn(0),CT=function(i,e,t,n,s,r){var a=r.z||i.length,o=new Mn(n+a+5*(1+Math.ceil(a/7e3))+s),c=o.subarray(n,o.length-s),l=r.l,u=(r.r||0)&7;if(e){u&&(c[0]=r.r>>3);for(var h=AT[e-1],d=h>>13,f=h&8191,g=(1<<t)-1,b=r.p||new ei(32768),m=r.h||new ei(g+1),p=Math.ceil(t/3),x=2*p,_=function(it){return(i[it]^i[it+1]<<p^i[it+2]<<x)&g},v=new yp(25e3),y=new ei(288),T=new ei(32),w=0,C=0,M=r.i||0,S=0,I=r.w||0,D=0;M+2<a;++M){var k=_(M),W=M&32767,B=m[k];if(b[W]=B,m[k]=W,I<=M){var G=a-M;if((w>7e3||S>24576)&&(G>423||!l)){u=mb(i,c,0,v,y,T,C,S,D,M-D,u),S=w=C=0,D=M;for(var Z=0;Z<286;++Z)y[Z]=0;for(var Z=0;Z<30;++Z)T[Z]=0}var O=2,j=0,Q=f,re=W-B&32767;if(G>2&&k==_(M-re))for(var ge=Math.min(d,G)-1,He=Math.min(32767,M),ke=Math.min(258,G);re<=He&&--Q&&W!=B;){if(i[M+O]==i[M+O-re]){for(var we=0;we<ke&&i[M+we]==i[M+we-re];++we);if(we>O){if(O=we,j=re,we>ge)break;for(var Y=Math.min(re,we-2),J=0,Z=0;Z<Y;++Z){var ce=M-re+Z&32767,ve=b[ce],fe=ce-ve&32767;fe>J&&(J=fe,B=ce)}}}W=B,B=b[W],re+=W-B&32767}if(j){v[S++]=268435456|bp[O]<<18|fb[j];var We=bp[O]&31,wt=fb[j]&31;C+=Sp[We]+Mp[wt],++y[257+We],++T[wt],I=M+O,++w}else v[S++]=i[M],++y[i[M]]}}for(M=Math.max(M,I);M<a;++M)v[S++]=i[M],++y[i[M]];u=mb(i,c,l,v,y,T,C,S,D,M-D,u),l||(r.r=u&7|c[u/8|0]<<3,u-=7,r.h=m,r.p=b,r.i=M,r.w=I)}else{for(var M=r.w||0;M<a+l;M+=65535){var U=M+65535;U>=a&&(c[u/8|0]=l,U=a),u=Mb(c,u+1,i.subarray(M,U))}r.i=a}return Sb(o,0,n+yb(u)+s)},RT=(function(){for(var i=new Int32Array(256),e=0;e<256;++e){for(var t=e,n=9;--n;)t=(t&1&&-306674912)^t>>>1;i[e]=t}return i})(),PT=function(){var i=-1;return{p:function(e){for(var t=i,n=0;n<e.length;++n)t=RT[t&255^e[n]]^t>>>8;i=t},d:function(){return~i}}};var IT=function(i,e,t,n,s){if(!s&&(s={l:1},e.dictionary)){var r=e.dictionary.subarray(-32768),a=new Mn(r.length+i.length);a.set(r),a.set(i,r.length),i=a,s.w=r.length}return CT(i,e.level==null?6:e.level,e.mem==null?s.l?Math.ceil(Math.max(8,Math.min(13,Math.log(i.length)))*1.5):20:12+e.mem,t,n,s)},Tb=function(i,e){var t={};for(var n in i)t[n]=i[n];for(var n in e)t[n]=e[n];return t};var Sn=function(i,e,t){for(;t;++e)i[e]=t,t>>>=8};function DT(i,e){return IT(i,e||{},0,0)}var Eb=function(i,e,t,n){for(var s in i){var r=i[s],a=e+s,o=n;Array.isArray(r)&&(o=Tb(n,r[1]),r=r[0]),r instanceof Mn?t[a]=[r,o]:(t[a+="/"]=[new Mn(0),o],Eb(r,a,t,n))}},gb=typeof TextEncoder<"u"&&new TextEncoder,LT=typeof TextDecoder<"u"&&new TextDecoder,UT=0;try{LT.decode(wb,{stream:!0}),UT=1}catch{}function Wa(i,e){if(e){for(var t=new Mn(i.length),n=0;n<i.length;++n)t[n]=i.charCodeAt(n);return t}if(gb)return gb.encode(i);for(var s=i.length,r=new Mn(i.length+(i.length>>1)),a=0,o=function(u){r[a++]=u},n=0;n<s;++n){if(a+5>r.length){var c=new Mn(a+8+(s-n<<1));c.set(r),r=c}var l=i.charCodeAt(n);l<128||e?o(l):l<2048?(o(192|l>>6),o(128|l&63)):l>55295&&l<57344?(l=65536+(l&1047552)|i.charCodeAt(++n)&1023,o(240|l>>18),o(128|l>>12&63),o(128|l>>6&63),o(128|l&63)):(o(224|l>>12),o(128|l>>6&63),o(128|l&63))}return Sb(r,0,a)}var _p=function(i){var e=0;if(i)for(var t in i){var n=i[t].length;n>65535&&yu(9),e+=n+4}return e},bb=function(i,e,t,n,s,r,a,o){var c=n.length,l=t.extra,u=o&&o.length,h=_p(l);Sn(i,e,a!=null?33639248:67324752),e+=4,a!=null&&(i[e++]=20,i[e++]=t.os),i[e]=20,e+=2,i[e++]=t.flag<<1|(r<0&&8),i[e++]=s&&8,i[e++]=t.compression&255,i[e++]=t.compression>>8;var d=new Date(t.mtime==null?Date.now():t.mtime),f=d.getFullYear()-1980;if((f<0||f>119)&&yu(10),Sn(i,e,f<<25|d.getMonth()+1<<21|d.getDate()<<16|d.getHours()<<11|d.getMinutes()<<5|d.getSeconds()>>1),e+=4,r!=-1&&(Sn(i,e,t.crc),Sn(i,e+4,r<0?-r-2:r),Sn(i,e+8,t.size)),Sn(i,e+12,c),Sn(i,e+14,h),e+=16,a!=null&&(Sn(i,e,u),Sn(i,e+6,t.attrs),Sn(i,e+10,a),e+=14),i.set(n,e),e+=c,h)for(var g in l){var b=l[g],m=b.length;Sn(i,e,+g),Sn(i,e+2,m),i.set(b,e+4),e+=4+m}return u&&(i.set(o,e),e+=u),e},kT=function(i,e,t,n,s){Sn(i,e,101010256),Sn(i,e+8,t),Sn(i,e+10,t),Sn(i,e+12,n),Sn(i,e+16,s)};function Ab(i,e){e||(e={});var t={},n=[];Eb(i,"",t,e);var s=0,r=0;for(var a in t){var o=t[a],c=o[0],l=o[1],u=l.level==0?0:8,h=Wa(a),d=h.length,f=l.comment,g=f&&Wa(f),b=g&&g.length,m=_p(l.extra);d>65535&&yu(11);var p=u?DT(c,l):c,x=p.length,_=PT();_.p(c),n.push(Tb(l,{size:c.length,crc:_.d(),c:p,f:h,m:g,u:d!=a.length||g&&f.length!=b,o:s,compression:u})),s+=30+d+m+x,r+=76+2*(d+m)+(b||0)+x}for(var v=new Mn(r+22),y=s,T=r-s,w=0;w<n.length;++w){var h=n[w];bb(v,h.o,h,h.f,h.u,h.c.length);var C=30+h.f.length+_p(h.extra);v.set(h.c,h.o+C),bb(v,s,h,h.f,h.u,h.c.length,h.o,h.m),s+=16+C+(h.m?h.m.length:0)}return kT(v,s,n.length,T,y),v}async function Su(i,e,t,n,s,r){let a=n*16/9,o=Math.round(e.duration*30),c={},l={w:i.w,h:i.h,t:i.time,manual:i.manual},u=performance.now();i.setManual(!1),i.setSize(n,a);try{for(let d=0;d<o;d++){if(r.aborted)throw Error("Render cancelled. Your project is unchanged.");i.seek(d/30);let f=await new Promise(g=>i.canvas.toBlob(g,"image/jpeg",.96));if(!f)throw Error("Could not capture a frame.");c[`frames/frame_${String(d).padStart(5,"0")}.jpg`]=new Uint8Array(await f.arrayBuffer()),s(d/o*.97,`Rendering frame ${d+1} of ${o} \xB7 ${Math.round((performance.now()-u)/1e3)} seconds elapsed`),d%3===0&&await new Promise(g=>setTimeout(g,0))}c["soundtrack.wav"]=new Uint8Array(await Y0(t).arrayBuffer()),c["project.ember.json"]=Wa(JSON.stringify(e,null,2)),c["convert_video.py"]=Wa(`#!/usr/bin/env python3
import subprocess,pathlib,shutil
root=pathlib.Path(__file__).resolve().parent
if not shutil.which('ffmpeg'): raise SystemExit('Install the free FFmpeg program, then run this script again.')
subprocess.run(['ffmpeg','-y','-framerate','30','-i',str(root/'frames/frame_%05d.jpg'),'-i',str(root/'soundtrack.wav'),'-c:v','libx264','-preset','medium','-crf','17','-pix_fmt','yuv420p','-c:a','aac','-b:a','192k','-af','loudnorm=I=-16:TP=-1.5:LRA=11','-t','${e.duration}','-movflags','+faststart',str(root/'film.mp4')],check=True)
print('Ready:',root/'film.mp4')
`),c["README.txt"]=Wa(`Every frame in this package was rendered at the selected native resolution.
Install the free FFmpeg and Python 3 programs. Extract this ZIP, then run:
python3 convert_video.py
The result is film.mp4 with the supplied soundtrack.
No account, AI service or paid software is required.
`),s(.98,"Packing rendered frames and soundtrack\u2026"),await new Promise(d=>setTimeout(d,10));let h=Ab(c,{level:0});return s(1,"Your render package is ready."),{blob:new Blob([h],{type:"application/zip"}),kind:"frames",frames:o,width:n,height:a}}finally{i.setSize(l.w,l.h),i.setManual(l.manual),i.seek(l.t)}}async function Cb(i,e,t,n,s,r){if(!globalThis.VideoEncoder)return Su(i,e,t,n,s,r);let a=n*16/9,o=30,c=Math.round(e.duration*o),l=null,u=null,h=null;for(let x of["avc1.640033","avc1.420033","vp09.00.40.08"]){let _={codec:x,width:n,height:a,bitrate:n>=1080?1e7:5e6,framerate:o,hardwareAcceleration:"prefer-software",latencyMode:"quality"};try{if((await VideoEncoder.isConfigSupported(_)).supported){l=_;break}}catch{}}if(!l)return Su(i,e,t,n,s,r);if(globalThis.AudioEncoder)for(let x of["mp4a.40.2","opus"]){let _={codec:x,sampleRate:48e3,numberOfChannels:2,bitrate:16e4};try{if((await AudioEncoder.isConfigSupported(_)).supported){u=_;break}}catch{}}if(!u)return Su(i,e,t,n,s,r);let d=new op,f=new ub({target:d,video:{codec:l.codec.startsWith("avc")?"avc":"vp9",width:n,height:a,frameRate:o},audio:{codec:u.codec==="opus"?"opus":"aac",numberOfChannels:2,sampleRate:48e3},fastStart:"in-memory",firstTimestampBehavior:"offset"}),g=new VideoEncoder({output:(x,_)=>f.addVideoChunk(x,_),error:x=>h=x});g.configure(l);let b=new AudioEncoder({output:(x,_)=>f.addAudioChunk(x,_),error:x=>h=x});b.configure(u);let m={w:i.w,h:i.h,t:i.time,manual:i.manual};i.setManual(!1),i.setSize(n,a);let p=()=>new Promise(x=>setTimeout(x,0));try{for(let v=0;v<c;v++){if(r.aborted)throw Error("Render cancelled. Your project is unchanged.");if(h)throw h;for(;g.encodeQueueSize>5;){if(await p(),h)throw h;if(r.aborted)throw Error("Render cancelled.")}i.seek(v/o);let y=new VideoFrame(i.canvas,{timestamp:Math.round(v*1e6/o),duration:Math.round(1e6/o)});g.encode(y,{keyFrame:v%60===0}),y.close(),v%3===0&&(s(v/c*.94,`Rendering frame ${v+1} of ${c}`),await p())}if(await g.flush(),h)throw h;s(.95,"Mixing your soundtrack\u2026");let x=t[0].length,_=1024;for(let v=0;v<x;v+=_){let y=Math.min(_,x-v),T=new Float32Array(y*2);T.set(t[0].subarray(v,v+y)),T.set(t[1].subarray(v,v+y),y);let w=new AudioData({format:"f32-planar",sampleRate:48e3,numberOfFrames:y,numberOfChannels:2,timestamp:Math.round(v/48e3*1e6),data:T});if(b.encode(w),w.close(),v%(_*30)===0){if(await p(),h)throw h;if(r.aborted)throw Error("Render cancelled.")}}if(await b.flush(),h)throw h;return f.finalize(),s(1,"Your film is ready."),{blob:new Blob([d.buffer],{type:"video/mp4"}),videoCodec:l.codec,audioCodec:u.codec,frames:c,width:n,height:a}}finally{g.state!=="closed"&&g.close(),b.state!=="closed"&&b.close(),i.setSize(m.w,m.h),i.setManual(m.manual),i.seek(m.t)}}var R=i=>document.getElementById(i),Db="ember-take-project-v3",te=Ft(Ia),In=1,gs=null,Bt=0,wu=!1,Cp=0,Gi=!1,_t,Vi,Ur,ja,Hs,Xa,Rp,fi=null,kr=[],Rl=[],Tu=0,Al,Lb={neutral:"\u{1F610} Neutral",happy:"\u{1F604} Happy",sad:"\u{1F622} Sad",angry:"\u{1F620} Angry",surprised:"\u{1F632} Surprised",worried:"\u{1F61F} Worried",curious:"\u{1F914} Curious",idea:"\u{1F4A1} Bright idea"},Ub={none:"Natural talk (hands follow speech)",explain:"Explain with both hands",wave:"Wave",point:"Point at the camera","point-screen":"Point at the monitor","point-other":"Point at the other character",shrug:"Shrug",facepalm:"Facepalm",think:"Think (hand on chin)",cheer:"Cheer",clap:"Clap",thumbsup:"Thumbs up",crossarms:"Cross arms",handsup:"Hands up (shock)",nod:"Nod",headshake:"Shake head",lean:"Lean in, hands on hips",jump:"Jump",type:"Type",press:"Press the big key",raise:"Raise a hand (idea!)"},Lp=i=>({auto:"Auto \xB7 the director picks",wide:"Wide \xB7 the whole cast",two:"Two shot",single:"Single \xB7 medium",cu:"Close-up",ots:"Over the shoulder",screen:"Monitor insert",custom:"Custom 360\xB0 angle"})[i]||i,Nr=i=>i==="all"?"whole cast":te.cast.find(e=>e.id===i)?.name||i,wp=i=>Math.max(0,te.cast.findIndex(e=>e.id===i)),NT={"American female":["af_heart","af_bella","af_nicole","af_sarah","af_sky"],"American male":["am_michael","am_puck","am_fenrir","am_echo","am_adam"],"British female":["bf_emma","bf_isabella"],"British male":["bm_george","bm_lewis"]};function qe(i){R("toast").textContent=i,R("toast").classList.add("show"),clearTimeout(qe.timer),qe.timer=setTimeout(()=>R("toast").classList.remove("show"),4200)}function qa(i,e){i.replaceChildren(...e.map(([t,n])=>{let s=document.createElement("option");return s.value=t,s.textContent=n,s}))}try{let i=localStorage.getItem(Db)||localStorage.getItem("ember-take-project-v2")||localStorage.getItem("ember-take-project-v1");i&&(te=Na(JSON.parse(i)))}catch{qe("The saved project could not be opened. Loaded the sample film.")}var Pl=i=>`${String(Math.floor(i/60)).padStart(2,"0")}:${String(Math.floor(i%60)).padStart(2,"0")}`;function kb(){try{localStorage.setItem(Db,JSON.stringify(te)),R("save-status").textContent="Saved on this device"}catch{R("save-status").textContent="Use Save project to keep your changes"}}function gn(){if(Tu++,wu=!1,R("play").textContent="\u25B6",R("play").setAttribute("aria-label","Play film"),Ur){try{Ur.stop()}catch{}Ur=null}}function Mt(i,{keepAudio:e=!1}={}){let t=Na(i);kr.push(Ft(te)),kr.length>30&&kr.shift(),Rl.length=0,!e&&t.voiceData!==te.voiceData&&(Hs=null),t.musicData!==te.musicData&&(Xa=null),te=t,gn(),Bt=Math.min(Bt,te.duration),_t.setProject(te),ja=null,kb(),Eu(),rn()}function rn(){if(!_t||Gi)return;let i=_t.seek(Bt);R("scrub").value=Bt,R("timecode").innerHTML=`${Pl(Bt)}.${String(Math.floor(Bt%1*100)).padStart(2,"0")} <b>/ ${Pl(te.duration)}</b>`,R("shot-label").textContent=_t.focus?`TURNTABLE \xB7 ${Nr(_t.focus).toUpperCase()}`:"CAM \xB7 "+Lp(i.shot).toUpperCase()+(["wide","screen","two"].includes(i.shot)?"":" \xB7 "+Nr(i.subject).toUpperCase())}function Cl(i,e=""){let t=document.createElement("span");return t.className="chip "+e,t.textContent=i,t}function Nb(){let i=R("cue-list");i.replaceChildren();let e=R("timeline");e.replaceChildren(),te.cues.forEach((s,r)=>{let a=document.createElement("button");a.className="cue c"+wp(s.speaker)+(s.id===In?" selected":""),a.setAttribute("aria-label",`Edit line ${r+1}: ${s.text}`);let o=document.createElement("span");o.className="cue-number",o.textContent=String(r+1).padStart(2,"0");let c=document.createElement("div"),l=document.createElement("div");l.className="cue-top";let u=document.createElement("span");u.textContent=Nr(s.speaker);let h=document.createElement("small");h.textContent=Pl(s.start),l.append(u,h);let d=document.createElement("p");d.textContent=s.text;let f=document.createElement("div");f.className="chips",f.append(Cl(Lb[s.emotion].split(" ")[0]+" "+s.emotion)),s.action!=="none"&&f.append(Cl(Ub[s.action])),s.shot!=="auto"&&f.append(Cl("\u{1F3A5} "+(s.shot==="custom"?`${s.cam.yaw}\xB0 \xB7 ${s.cam.lens}mm`:s.shot)+(s.subject&&s.subject!==s.speaker?" \xB7 "+Nr(s.subject):""))),s.screen&&f.append(Cl("\u{1F5A5} "+s.screen.title,"screen")),s.visemes&&f.append(Cl("\u25CF voiced","voiced")),c.append(l,d,f),a.append(o,c),a.onclick=()=>{In=s.id,gn(),Bt=s.start+.15,Up(),Nb(),rn()},i.append(a);let g=document.createElement("div");g.className="timeline-block c"+wp(s.speaker),g.style.left=`${s.start/te.duration*100}%`,g.style.width=`${(s.end-s.start)/te.duration*100}%`,g.textContent=String(r+1).padStart(2,"0"),e.append(g)});let t=R("shot-track");t.replaceChildren();let n=ka(te);n.forEach((s,r)=>{let a=n[r+1]?.start??te.duration,o=document.createElement("div");o.className="shot-block "+(["wide","two","screen"].includes(s.shot)?"shot-"+s.shot:"shot-c"+wp(s.subject)),o.style.left=`${s.start/te.duration*100}%`,o.style.width=`${(a-s.start)/te.duration*100}%`,o.title=Lp(s.shot)+(["wide","two","screen"].includes(s.shot)?"":" \xB7 "+Nr(s.subject)),o.textContent=s.shot.toUpperCase(),t.append(o)}),R("line-count").textContent=`${String(te.cues.length).padStart(2,"0")} LINES`}function Up(){let i=te.cues.find(e=>e.id===In)||te.cues[0];if(i){In=i.id,R("selected-label").textContent=`LINE ${String(te.cues.indexOf(i)+1).padStart(2,"0")} \xB7 ${Nr(i.speaker).toUpperCase()}`;for(let t of["speaker","start","end","emotion","action","shot","pause"])R(t).value=i[t];R("dialogue").value=i.text,qa(R("subject"),[["",`Speaker (${Nr(i.speaker)})`],...te.cast.map(t=>[t.id,t.name]),...i.shot==="custom"?[["all","Whole cast"]]:[]]),R("subject").value=i.subject&&i.subject!==i.speaker?i.subject:"",R("custom-cam").hidden=i.shot!=="custom",R("customize-cam").hidden=i.shot==="custom",i.cam&&Bp(i.cam);let e=i.screen;R("screen-on").checked=!!e,R("screen-box").open=!!e,R("screen-tone").value=e?.tone||"calm",R("screen-kicker").value=e?.kicker||"",R("screen-title").value=e?.title||"",R("screen-sub").value=e?.sub||"",R("screen-progress").checked=!!e?.progress}else R("dialogue").value="",R("selected-label").textContent="ADD A LINE TO BEGIN";for(let e of["apply-line","delete-line","duplicate-line"])R(e).disabled=!i}function Eu(){Nb(),qa(R("speaker"),te.cast.map(t=>[t.id,t.name])),qa(R("shot"),Ua.map(t=>[t,Lp(t)])),Up(),Fp(),R("title").value=te.title,R("scrub").max=te.duration,R("duration-label").textContent=Pl(te.duration),R("mid-label").textContent=Pl(te.duration/2);let i=te.cast.map(t=>t.name);R("story-intro").textContent=`Direct ${i.length>1?i.slice(0,-1).join(", ")+" & "+i.at(-1):i[0]}\u2019s next adventure.`;for(let[t,n]of[["character-style","characterStyle"],["film-look","filmLook"],["camera-flow","cameraFlow"],["warmth","warmth"],["duration","duration"],["handle","handle"],["caption-style","captionStyle"],["end-title","endTitle"],["end-sub","endSub"],["music-volume","musicVolume"]])R(t).value=te[n];for(let[t,n]of[["captions","captions"],["dof","dof"],["intro","intro"],["music","music"],["sfx","sfx"]])R(t).checked=te[n];document.querySelectorAll("input[name=engine]").forEach(t=>t.checked=t.value===te.voiceEngine),R("sound").textContent=te.music?"\u266B Sound on":"\u266B Score off",R("sound").setAttribute("aria-pressed",String(te.music)),R("undo").disabled=!kr.length,R("redo").disabled=!Rl.length;let e=te.cues.filter(t=>t.visemes).length;R("voice-status").textContent=te.voiceData?e?`Voiced and lip-synced: ${e} of ${te.cues.length} lines.`:"Your recording is loaded and plays with the film.":"No voice yet. Captions carry the story.",R("music-status").textContent=te.musicData?"Your music track is loaded. It loops and ducks under the voices.":"Original generated score. Use royalty-free music you have the rights to.",R("audio-label").textContent=[te.voiceData&&"VOICES",te.music&&(te.musicData?"YOUR MUSIC":"ORIGINAL SCORE"),te.sfx&&"SOUND DESIGN"].filter(Boolean).join(" + ")||"SILENT"}async function Rb(i){return Vi.decodeAudioData(await(await fetch(i)).arrayBuffer())}async function Fb(){if(Vi||(Vi=new AudioContext({sampleRate:48e3})),await Vi.resume(),!ja){te.voiceData&&!Hs&&(Hs=await Rb(te.voiceData)),te.musicData&&!Xa&&(Xa=await Rb(te.musicData));let i=await q0(te,te.voiceData?Hs:null,te.musicData?Xa:null);ja=Vi.createBuffer(2,i[0].length,48e3),i.forEach((e,t)=>ja.copyToChannel(e,t))}return ja}async function Ob(){if(Gi)return;if(wu){gn();return}Bt>=te.duration-.04&&(Bt=0),_t.setManual(!1),R("orbit").setAttribute("aria-pressed","false");let i=++Tu;try{R("status").textContent="Mixing sound\u2026";let e=await Fb();if(i!==Tu)return;Ur=Vi.createBufferSource(),Ur.buffer=e,Ur.connect(Vi.destination),Ur.start(0,Bt),R("status").textContent="Playing."}catch(e){qe("Audio is unavailable: "+e.message)}wu=!0,Cp=performance.now(),R("play").textContent="\u2161",R("play").setAttribute("aria-label","Pause film")}function Bb(i){requestAnimationFrame(Bb),!Gi&&(wu?(Bt+=(i-Cp)/1e3,Cp=i,Bt>=te.duration&&(Bt=te.duration,gn()),rn()):(_t?.manual||_t?.focus)&&rn())}qa(R("emotion"),Da.map(i=>[i,Lb[i]]));qa(R("film-look"),Object.entries(pl).map(([i,e])=>[i,e.label]));qa(R("action"),La.map(i=>[i,Ub[i]]));R("help-emotions").textContent=Da.join(", ");R("help-actions").textContent=La.join(", ");R("help-shots").textContent=Ua.filter(i=>i!=="custom").join(", ");function zb(i){for(let e of document.querySelectorAll(".voice-select"))e.replaceChildren(...Object.entries(i).map(([t,n])=>{let s=document.createElement("optgroup");return s.label=t,s.append(...n.map(r=>{let a=document.createElement("option");return a.value=r,a.textContent=r.slice(3).replace(/^./,o=>o.toUpperCase()),a})),s}))}zb(NT);async function Vs(i,e){let t=await fetch(i,e?{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}:{}),n=await t.json().catch(()=>({}));if(!t.ok)throw Error(n.error||`Studio engine error ${t.status}`);return n}async function Hb(i,e){for(;;){let t=await Vs("/api/jobs/"+i);if(e(t),t.status==="done")return t.result;if(t.status==="error")throw Error(t.message);await new Promise(n=>setTimeout(n,800))}}(async()=>{try{fi=await Vs("/api/status"),zb(fi.voices),Eu();let i=fi.engines,e=i.kokoro&&i.rhubarb&&i.ffmpeg;R("engine-pill").textContent=e?`\u25CF Studio engine ready${i.chatterbox?" \xB7 expressive voices":""}`:"\u25CF Studio engine incomplete",R("engine-pill").classList.add(e?"ok":"warn");let t=document.querySelector("input[value=chatterbox]");t.disabled=!i.chatterbox,i.chatterbox||(t.closest("label").title="Expressive voices are still installing or unavailable."),kp(),Au()}catch{fi=null,Yb(),R("engine-pill").textContent="\u25CB Browser only \xB7 run node server.mjs for voices",R("engine-pill").classList.add("off");for(let i of["generate-voices","studio-render"])R(i).disabled=!0;R("voice-job").textContent="Start the studio engine (node server.mjs) to generate voices.",R("studio-status").textContent="Start the studio engine (node server.mjs) for best-quality renders.",R("browser-export-open")?.click(),document.querySelector(".browser-export").open=!0}})();R("generate-voices").onclick=async()=>{if(!fi)return;gn();let i=R("generate-voices");i.disabled=!0,R("voice-progress").hidden=!1,R("voice-progress").value=0;try{let e=document.querySelector("input[name=engine]:checked")?.value||"kokoro",t={...Ft(te),voiceEngine:e},{id:n}=await Vs("/api/voice",{project:t,layout:R("voice-layout").value}),s=await Hb(n,a=>{R("voice-progress").value=a.progress,R("voice-job").textContent=a.status==="queued"?"Waiting for the studio\u2026":a.message}),r=In;Hs=null,Mt({...s,cast:te.cast,voiceEngine:e}),In=r,Bt=0,Up(),rn(),R("voice-job").textContent=`Done. ${te.cues.length} lines voiced, film is ${te.duration} seconds. Press play.`,qe("Voices and lip sync are ready.")}catch(e){R("voice-job").textContent="Could not generate voices: "+e.message}finally{i.disabled=!1,R("voice-progress").hidden=!0}};async function FT(){gn();let i=R("open-list");i.replaceChildren();let e=[];if(fi)try{e=(await Vs("/api/renders")).filter(t=>t.project)}catch{}R("open-empty").hidden=!!e.length,R("open-empty").textContent=fi?"No rendered films yet. Films appear here after a studio render.":"Start the studio engine (npm run studio) to see your rendered films here.",i.append(...e.map(t=>{let n=document.createElement("li"),s=document.createElement("div"),r=document.createElement("div"),a=document.createElement("button"),o=document.createElement("a");return r.innerHTML="<b></b><small></small>",r.querySelector("b").textContent=t.title,r.querySelector("small").textContent=`${new Date(t.created).toLocaleString()} \xB7 ${t.name}`,a.className="primary",a.textContent="Open",a.onclick=()=>OT(t),o.href=t.url,o.target="_blank",o.textContent="Watch",o.className="quiet-link",s.className="open-row",s.append(r,o,a),n.append(s),n})),R("open-dialog").showModal()}async function OT(i){try{let e=await fetch(i.project);if(!e.ok)throw Error("The project file is missing.");let t=Na(await e.json());In=t.cues[0]?.id||0,gs=t.cast[0].id,Bt=0,Hs=null,Mt(t),R("open-dialog").close(),document.querySelector("[data-tab=line]").click(),qe(`Opened "${t.title}". Press play.`)}catch(e){qe("Could not open this film: "+e.message)}}async function kp(){if(fi)try{let i=await Vs("/api/renders");R("renders-box").hidden=!i.length,R("renders-list").replaceChildren(...i.slice(0,8).map(e=>{let t=document.createElement("li"),n=document.createElement("a");n.href=e.url,n.target="_blank",n.textContent=e.name.replace(/_/g," ");let s=document.createElement("small");return s.textContent=`${new Date(e.created).toLocaleString()} \xB7 ${(e.size/1e6).toFixed(1)} MB`,t.append(n,s),t}))}catch{}}R("studio-render").onclick=async()=>{if(!fi||Gi)return;gn();let i=R("studio-render");i.disabled=!0,R("studio-progress").hidden=!1,R("export-result").hidden=!0;try{let{id:e}=await Vs("/api/render",{project:Ft(te),width:Number(R("export-size").value)}),t=await Hb(e,n=>{R("studio-progress").value=n.progress,R("studio-status").textContent=n.status==="queued"?"Waiting for the studio\u2026":n.message});R("result-video").hidden=!1,R("result-video").src=t.url,R("download-film").href=t.url,R("download-film").download=te.title.replace(/[^a-z0-9]+/gi,"_")+".mp4",R("download-film").textContent="Download film \u2193",R("export-result").hidden=!1,R("studio-status").textContent="Your film is ready. It is also saved in the studio renders folder.",kp()}catch(e){R("studio-status").textContent="Render failed: "+e.message}finally{i.disabled=!1,R("studio-progress").hidden=!0}};R("play").onclick=Ob;R("back").onclick=()=>{gn(),Bt=0,rn()};R("scrub").oninput=()=>{Tu++,gn(),Bt=Number(R("scrub").value),rn()};R("title").onchange=()=>{try{Mt({...te,title:R("title").value},{keepAudio:!0})}catch(i){qe(i.message)}};function BT(){if(R("screen-on").checked)return{tone:R("screen-tone").value,kicker:R("screen-kicker").value,title:R("screen-title").value,sub:R("screen-sub").value,progress:R("screen-progress").checked}}R("screen-on").onchange=()=>{R("screen-box").open=R("screen-on").checked};R("apply-line").onclick=()=>{try{let i=Ft(te),e=i.cues.find(s=>s.id===In),t=R("dialogue").value.trim(),n=R("speaker").value;(t!==e.text||n!==e.speaker||R("emotion").value!==e.emotion)&&(delete e.visemes,delete e.words),Object.assign(e,{text:t,speaker:n,start:Number(R("start").value),end:Number(R("end").value),emotion:R("emotion").value,action:R("action").value,shot:R("shot").value,pause:Number(R("pause").value),screen:BT(),subject:R("subject").value||void 0}),e.screen||delete e.screen,e.subject||delete e.subject,e.shot==="custom"&&(e.cam=zp()),Mt(i,{keepAudio:!0}),qe(e.visemes?"Scene updated.":"Scene updated. Generate voices to re-voice this line.")}catch(i){qe(i.message)}};function Vb(i,e=2){let t=.5;for(let n of i.cues){if(n.start-t>=e+.2)break;t=n.end+.2}if(i.duration-t<e&&(i.duration=Math.min(90,Math.ceil(t+e+1))),i.duration-t<e)throw Error("The film is full. Shorten a line or remove one.");return Math.round(t*10)/10}R("add-line").onclick=()=>{try{let i=Ft(te),e=Vb(i),t={id:Math.max(0,...i.cues.map(n=>n.id))+1,start:e,end:e+2,speaker:i.cast[0].id,text:"Your next line\u2026",emotion:"neutral",action:"none",shot:"auto",pause:.45};i.cues.push(t),In=t.id,Mt(i,{keepAudio:!0})}catch(i){qe(i.message)}};R("duplicate-line").onclick=()=>{try{let i=Ft(te),e=i.cues.find(r=>r.id===In),t=e.end-e.start,n=Vb(i,t),s={...Ft(e),id:Math.max(...i.cues.map(r=>r.id))+1,start:n,end:n+t};delete s.visemes,delete s.words,delete s.screen,i.cues.push(s),In=s.id,Mt(i,{keepAudio:!0}),qe("Line duplicated at the next free moment.")}catch(i){qe(i.message)}};R("delete-line").onclick=()=>{Mt({...te,cues:te.cues.filter(i=>i.id!==In)},{keepAudio:!0})};document.querySelectorAll("input[name=engine]").forEach(i=>i.onchange=()=>{try{Mt({...te,voiceEngine:i.value},{keepAudio:!0})}catch(e){qe(e.message)}});R("apply-film").onclick=()=>{try{Mt({...te,characterStyle:R("character-style").value,filmLook:R("film-look").value,cameraFlow:R("camera-flow").value,handle:R("handle").value.trim(),captionStyle:R("caption-style").value,warmth:Number(R("warmth").value),captions:R("captions").checked,dof:R("dof").checked,intro:R("intro").checked,endTitle:R("end-title").value.trim(),endSub:R("end-sub").value.trim(),duration:Number(R("duration").value),music:R("music").checked,musicVolume:Number(R("music-volume").value),sfx:R("sfx").checked},{keepAudio:!0}),qe("Film settings applied.")}catch(i){qe(i.message)}};document.querySelectorAll("[data-tab]").forEach(i=>i.onclick=()=>{document.querySelectorAll("[data-tab]").forEach(e=>e.classList.toggle("active",e===i));for(let e of["line","cast","voice","film"])R("tab-"+e).hidden=e!==i.dataset.tab;gn(),_t.setFocus(i.dataset.tab==="cast"?mi().id:null),rn()});R("orbit").onclick=()=>{gn(),_t.setManual(!_t.manual),R("orbit").setAttribute("aria-pressed",String(_t.manual)),R("status").textContent=_t.manual?"Drag to orbit. Scroll or pinch to zoom.":"Story camera active.",rn()};R("frame").onclick=()=>{_t.setManual(!1),R("orbit").setAttribute("aria-pressed","false"),rn()};function Gb(i){te=i,gn(),Hs=null,Xa=null,ja=null,_t.setProject(te),kb(),Eu(),rn()}R("undo").onclick=()=>{kr.length&&(Rl.push(Ft(te)),Gb(kr.pop()))};R("redo").onclick=()=>{Rl.length&&(kr.push(Ft(te)),Gb(Rl.pop()))};R("reset").onclick=()=>{In=1,Bt=0,Mt(Ft(Ia)),qe("Sample restored. Undo brings back your edits.")};function Wb(i,e){let t=URL.createObjectURL(i),n=document.createElement("a");n.href=t,n.download=e,n.click(),setTimeout(()=>URL.revokeObjectURL(t),3e4)}var Np=()=>te.title.replace(/[^a-z0-9]+/gi,"_");R("save").onclick=()=>Wb(new Blob([JSON.stringify(te,null,2)],{type:"application/json"}),Np()+".ember.json");R("open").onclick=FT;R("open-file").onclick=()=>R("project-file").click();R("project-file").onchange=async i=>{try{let e=i.target.files[0];if(!e)return;if(/^(video|audio|image)\//.test(e.type)||!/\.json$/i.test(e.name))throw Error(`"${e.name}" is not a project. Open the project.ember.json saved next to the film, or pick the film from the Open list.`);if(e.size>32e6)throw Error("This project is over 32 MB. Remove the imported music or voice recording and try again.");R("open-dialog").close();let t=Na(JSON.parse(await e.text()));In=t.cues[0]?.id||0,Bt=0,Mt(t),qe("Project opened.")}catch(e){qe(e.message)}finally{R("project-file").value=""}};R("sound").onclick=()=>Mt({...te,music:!te.music},{keepAudio:!0});async function jb(i,e){let t=i.files[0];if(!t)return null;if(t.size>e)throw Error(`Choose audio smaller than ${e/1e6} MB.`);Vi||(Vi=new AudioContext({sampleRate:48e3}));let n=await Vi.decodeAudioData(await t.arrayBuffer()),s=await new Promise((r,a)=>{let o=new FileReader;o.onload=()=>r(o.result),o.onerror=a,o.readAsDataURL(t)});return{buf:n,data:s}}R("upload-voice").onclick=()=>R("audio-file").click();R("audio-file").onchange=async i=>{try{let e=await jb(i.target,1e7);if(!e)return;let t=Ft(te);t.cues.forEach(n=>{delete n.visemes,delete n.words}),t.voiceData=e.data,Mt(t),Hs=e.buf,qe("Voice imported.")}catch(e){qe("Could not import audio: "+e.message)}finally{R("audio-file").value=""}};R("remove-voice").onclick=()=>{let i=Ft(te);i.voiceData=null,i.cues.forEach(e=>{delete e.visemes,delete e.words}),Mt(i)};R("upload-music").onclick=()=>R("music-file").click();R("music-file").onchange=async i=>{try{let e=await jb(i.target,1e7);if(!e)return;Mt({...te,musicData:e.data,music:!0},{keepAudio:!0}),Xa=e.buf,qe("Music track added.")}catch(e){qe("Could not import music: "+e.message)}finally{R("music-file").value=""}};R("remove-music").onclick=()=>Mt({...te,musicData:null},{keepAudio:!0});var Xb={human:"Human",robot:"Robot",creature:"Creature",bot:"Desk bot",imported:"Imported 3D"},Pp={human:{ranges:["height","build","head"],options:["hairStyle","facialHair","eyeStyle","topStyle","glasses","hat"],colors:["skin","hair","eyes","top","accent","bottom","shoes"]},creature:{ranges:["height","build","head"],options:["species","eyeStyle","topStyle","glasses","hat"],colors:["skin","accent","hair","eyes","top","bottom","shoes"]},robot:{ranges:["height","build","head"],options:["glasses","hat"],colors:["top","accent","screen","bottom","shoes"]},bot:{ranges:["height"],options:[],colors:["top","accent","screen"]},imported:{ranges:["height"],options:[],colors:[]}},zT={height:"Height",build:"Build",head:"Head size",species:"Creature",hairStyle:"Hair",facialHair:"Facial hair",eyeStyle:"Eyes",topStyle:"Outfit",glasses:"Glasses",hat:"Headwear",skin:"Skin",hair:"Hair",eyes:"Eyes",top:"Outfit",accent:"Details",bottom:"Trousers",shoes:"Shoes",screen:"Face light"},HT={creature:{skin:"Fur",accent:"Belly & ears",hair:"Nose & brows"},robot:{top:"Shell",accent:"Joints"},bot:{top:"Shell",accent:"Trim"}},VT={shaggy:"Shaggy (reference)",chunky:"Chunky",short:"Short",curly:"Curly",long:"Long",bun:"Bun",mohawk:"Mohawk",bald:"Bald",none:"None",stubble:"Stubble",beard:"Beard",mustache:"Mustache",glossy:"Glossy (reference)",classic:"Classic",hoodie:"Hoodie",tshirt:"T-shirt",jacket:"Jacket",suit:"Suit & tie",round:"Round",square:"Square",cap:"Cap",beanie:"Beanie",headphones:"Headphones",fox:"Fox",cat:"Cat",dragon:"Dragon",bear:"Bear",bunny:"Bunny"},mi=()=>te.cast.find(i=>i.id===gs)||te.cast[0];function Tp(i,e){let t=document.createElement("label");return t.append(i,e),t}function Fp(){te.cast.some(o=>o.id===gs)||(gs=te.cast[0].id);let i=mi();R("cast-list").replaceChildren(...te.cast.map((o,c)=>{let l=document.createElement("button");l.className="cast-chip"+(o.id===i.id?" selected":"");let u=document.createElement("span");u.className="cast-dot",u.style.background=(o.kind==="bot"||o.kind==="robot",o.look.top),u.textContent=o.name[0];let h=document.createElement("span");return h.innerHTML=`<b></b><small>${Xb[o.kind]}</small>`,h.querySelector("b").textContent=o.name,l.append(u,h),l.onclick=()=>{gs=o.id,_t.setFocus(o.id),Fp(),rn()},l})),R("add-character").disabled=te.cast.length>=4,R("remove-character").disabled=te.cast.length<=1,R("char-name").value=i.name,R("char-kind").value=i.kind,R("char-kind").disabled=i.kind==="imported",R("char-voice").value=i.voice,R("randomize").disabled=i.kind==="imported",R("save-to-library").disabled=i.kind==="imported";let t=Pp[i.kind],n=R("look-fields"),s=o=>HT[i.kind]?.[o]||zT[o];n.replaceChildren();let r=o=>{let c=document.createElement("div");c.className="look-section",c.textContent=o,n.append(c)};r("Body");for(let o of t.ranges){let[c,l]=tu[o],u=document.createElement("input");Object.assign(u,{type:"range",min:c,max:l,step:.01,value:i.look[o]}),u.dataset.key=o;let h=document.createElement("output");h.value=`${Math.round(i.look[o]*100)}%`,u.oninput=()=>{h.value=`${Math.round(u.value*100)}%`,Pb()},u.onchange=Ep;let d=Tp(s(o)+" ",u);d.querySelector("input").before(h),n.append(d)}if(t.options.length){r("Style");let o=document.createElement("div");o.className="look-grid";for(let c of t.options){let l=document.createElement("select");l.dataset.key=c;for(let u of yr[c]){let h=document.createElement("option");h.value=u,h.textContent=VT[u]||u,l.append(h)}l.value=i.look[c],l.onchange=Ep,o.append(Tp(s(c),l))}n.append(o)}if(i.kind==="imported"){let o=Il.find(h=>h.id===i.asset.id),c=document.createElement("p");c.className="note",c.textContent=o?`From your library: ${o.source||o.name} \xB7 ${o.report.triangles.toLocaleString()} triangles \xB7 lip sync: ${Op[o.report.face.lipSync]}`:"This model is not in your library on this computer.",n.append(c);let l=document.createElement("input");l.type="checkbox",l.checked=i.asset.flip,l.onchange=()=>{try{Mt(Fr({asset:{...i.asset,flip:l.checked}}),{keepAudio:!0}),_t.setFocus(i.id)}catch(h){qe(h.message)}};let u=document.createElement("label");u.className="check-label",u.append(l," Turn around (if the model faces away)"),n.append(u);return}r("Colours");let a=document.createElement("div");a.className="look-grid colors";for(let o of t.colors){let c=document.createElement("input");Object.assign(c,{type:"color",value:i.look[o]}),c.dataset.key=o,c.oninput=Pb,c.onchange=Ep,a.append(Tp(s(o),c))}n.append(a)}function qb(){let i={...mi().look};for(let e of R("look-fields").querySelectorAll("[data-key]"))i[e.dataset.key]=e.type==="range"?Number(e.value):e.value;return i}function Fr(i){let e=Ft(te),t=e.cast.findIndex(n=>n.id===mi().id);return e.cast[t]={...e.cast[t],...i},e}var Ip;function Pb(){clearTimeout(Ip),Ip=setTimeout(()=>{try{_t.setProject(Na(Fr({look:qb()}))),rn()}catch{}},40)}function Ep(){clearTimeout(Ip);try{Mt(Fr({look:qb()}),{keepAudio:!0}),_t.setFocus(mi().id)}catch(i){qe(i.message)}}R("char-name").onchange=()=>{try{Mt(Fr({name:R("char-name").value.trim()||mi().name}),{keepAudio:!0})}catch(i){qe(i.message)}};R("char-voice").onchange=()=>{try{let i=mi().id,e=Fr({voice:R("char-voice").value});e.cues.forEach(t=>{t.speaker===i&&(delete t.visemes,delete t.words)}),Mt(e,{keepAudio:!0}),qe("Voice changed. Generate voices to hear it.")}catch(i){qe(i.message)}};R("char-kind").onchange=()=>{try{Mt(Fr({kind:R("char-kind").value}),{keepAudio:!0}),_t.setFocus(mi().id)}catch(i){qe(i.message)}};R("add-character").onclick=()=>{try{let i=Ft(te),e=lf(i,R("new-template").value);i.cast.push(e),gs=e.id,Mt(i,{keepAudio:!0}),_t.setFocus(e.id),rn(),qe(`${e.name} joined the cast. Give them lines in the Scene tab or the script.`)}catch(i){qe(i.message)}};R("remove-character").onclick=()=>{let i=mi(),e=te.cues.filter(t=>t.speaker===i.id).length;if(e){qe(`${i.name} speaks ${e} line${e>1?"s":""}. Give those lines to someone else or delete them first.`);return}try{let t=Ft(te);t.cast=t.cast.filter(n=>n.id!==i.id),t.cues.forEach(n=>{n.subject===i.id&&delete n.subject}),gs=t.cast[0].id,Mt(t,{keepAudio:!0}),_t.setFocus(gs)}catch(t){qe(t.message)}};var ms=i=>i[Math.floor(Math.random()*i.length)],GT=["#f1c7a5","#e0a57f","#c78a65","#a8714f","#7d5137","#5a3a28"],WT=["#1d1715","#2a211e","#5a3422","#8a5a2b","#c9a15a","#d8d0c4","#7a2f2f","#3e4f7a"],Ib=["#2e3a55","#8364c5","#b5543f","#3f6b58","#d9a441","#4f8fd6","#c24d6b","#2b2b2b","#e8e2d6","#6b4f3a"];R("randomize").onclick=()=>{let i=mi(),e={...i.look};for(let t of Pp[i.kind].options)e[t]=ms(yr[t]);for(let t of Pp[i.kind].ranges){let[n,s]=tu[t];e[t]=Math.round((n+(s-n)*(.25+Math.random()*.5))*100)/100}Object.assign(e,{skin:i.kind==="creature"?ms(["#d9793d","#b9b2a6","#6b4a35","#e8dccb","#4d8a54"]):ms(GT),hair:ms(WT),top:ms(Ib),accent:ms(Ib),bottom:ms(["#1b222c","#2b3346","#3d3328","#4a4a4a","#1f3a33"]),shoes:ms(["#d6cbb5","#2b2b2b","#b5543f","#e8e2d6"]),screen:ms(["#94f3d4","#7fd6ff","#ffd27a","#ff8fa3","#b9f27a"])}),Math.random()<.6&&(e.glasses="none"),Math.random()<.6&&(e.hat="none"),Math.random()<.6&&(e.facialHair="none");try{Mt(Fr({look:e}),{keepAudio:!0}),_t.setFocus(i.id)}catch(t){qe(t.message)}};var Op={oculus:"visemes",arkit:"ARKit face",vroid:"VRoid mouth",vrm:"VRM expressions",generic:"mouth shape",jaw:"jaw bone",none:"none"},Il=[];async function Au(){if(fi){try{Il=await Vs("/api/library")}catch{Il=[]}Yb(),Fp()}}function Yb(){R("library-list").replaceChildren(...Il.map(e=>{let t=document.createElement("div"),n=document.createElement("div"),s=document.createElement("button"),r=document.createElement("button");t.className="library-item";let a=e.report;return n.innerHTML=`<b></b><small><span class="badge ${e.type}">${e.type==="imported"?"3D IMPORT":"PRESET"}</span></small>`,n.querySelector("b").textContent=e.name,n.querySelector("small").append(e.type==="imported"?`${a.triangles.toLocaleString()} tris \xB7 lip sync: ${Op[a.face.lipSync]}`:Xb[e.member.kind]),s.className="secondary",s.textContent="Add",s.onclick=()=>Kb(e),r.className="quiet",r.textContent="\u2715",r.title="Delete from library",r.onclick=async()=>{if(confirm(`Delete "${e.name}" from the library? Episodes that use it will show a placeholder.`))try{await fetch("/api/library/"+e.id,{method:"DELETE"}),await Au()}catch(o){qe(o.message)}},t.append(n,s,r),t})),R("library-empty").hidden=!!Il.length,R("library-empty").textContent=fi?"Saved and imported characters appear here, ready for any episode.":"Start the studio engine (npm run studio) to use the character library.";for(let e of["import-character","save-to-library"])R(e).disabled=!fi||e==="save-to-library"&&mi().kind==="imported"}function Kb(i){try{let e=Ft(te);if(e.cast.length>=4)throw Error(`A film holds ${4} characters. Remove one first.`);let t=lf(e,(i.type==="preset","creator")),n=i.type==="preset"?{...t,name:i.member.name||t.name,kind:i.member.kind,voice:i.member.voice||t.voice,look:al(i.member.look)}:{...t,name:i.name,kind:"imported",voice:"am_michael",look:al({height:1}),asset:{id:i.id,flip:!1}};return e.cast.push(n),gs=n.id,Mt(e,{keepAudio:!0}),_t.setFocus(n.id),rn(),qe(`${n.name} joined the cast.`),n}catch(e){qe(e.message)}}R("save-to-library").onclick=async()=>{try{let i=mi();await Vs("/api/library/preset",{member:i}),await Au(),qe(`${i.name} saved to your library.`)}catch(i){qe(i.message)}};R("import-character").onclick=()=>R("character-file").click();function Mu(i,e){let t=R("import-report");if(t.replaceChildren(),R("import-title").textContent=e,i){let n=document.createElement("div");n.className="stats";for(let[s,r]of[[`${i.sizeMB} MB`,i.format.toUpperCase()+(i.vrm?" "+i.vrm:"")],[i.triangles.toLocaleString(),"triangles"],[Object.keys(i.bones).length,"bones mapped"],[Op[i.face.lipSync],"lip sync"],[i.face.blink?"yes":"no","blink"],[i.face.emotions.join(", ")||"none","expressions"]]){let a=document.createElement("div");a.className="stat",a.innerHTML="<b></b><small></small>",a.querySelector("b").textContent=s,a.querySelector("small").textContent=r,n.append(a)}t.append(n);for(let[s,r,a]of[[i.errors,"err","\u2715"],[i.warnings,"warn","!"]])for(let o of s){let c=document.createElement("div");c.className="check "+r,c.innerHTML=`<i>${a}</i><span></span>`,c.querySelector("span").textContent=o,t.append(c)}if(i.ok&&!i.warnings.length){let s=document.createElement("div");s.className="check ok",s.innerHTML="<i>\u2713</i><span>Everything this studio uses is present.</span>",t.append(s)}}}R("character-file").onchange=async i=>{let e=i.target.files[0];if(R("character-file").value="",!!e){R("import-add").hidden=!0,Mu(null,`Checking ${e.name}\u2026`),R("import-dialog").showModal();try{let t=await fetch("/api/library/import",{method:"POST",headers:{"content-type":"application/octet-stream","x-filename":encodeURIComponent(e.name),"x-name":encodeURIComponent(e.name.replace(/\.[^.]+$/,"").replace(/[_-]+/g," ").slice(0,16))},body:e}),n=await t.json().catch(()=>({error:`Upload failed (${t.status})`}));if(!t.ok){Mu(n.report,n.report?"This character can\u2019t be used yet":"Import failed"),n.report||(R("import-report").textContent=n.error);return}Mu(n.report,`${n.name} is in your library`),await Au(),R("import-add").hidden=!1,R("import-add").onclick=()=>{R("import-dialog").close(),Kb(n)}}catch(t){Mu(null,"Import failed"),R("import-report").textContent=t.message}}};var Dp=Math.PI/180,pi=R("cam-dial");function jT(i){let e=Math.abs(i);return e<20?"Front":e<70?`Three-quarter ${i>0?"left":"right"}`:e<110?`Profile ${i>0?"left":"right"}`:e<160?`Over the ${i>0?"left":"right"} shoulder`:"From behind"}function Dl(i){i=Math.round((i%360+540)%360-180),pi.dataset.yaw=i;let e=Math.sin(i*Dp)*50,t=Math.cos(i*Dp)*50;R("dial-handle").setAttribute("cx",e.toFixed(1)),R("dial-handle").setAttribute("cy",t.toFixed(1)),R("dial-ray").setAttribute("x2",e.toFixed(1)),R("dial-ray").setAttribute("y2",t.toFixed(1)),R("yaw-out").innerHTML=`${i}\xB0<small>${jT(i)}</small>`}function Bp(i){Dl(i.yaw),R("cam-pitch").value=i.pitch,R("cam-dist").value=i.dist,R("cam-lens").value=i.lens,R("cam-move").value=i.move,$b()}function $b(){R("pitch-out").value=`${R("cam-pitch").value}\xB0${Number(R("cam-pitch").value)<0?" low angle":Number(R("cam-pitch").value)>40?" high angle":""}`,R("dist-out").value=`${Number(R("cam-dist").value).toFixed(1)} m`,R("lens-out").value=`${R("cam-lens").value} mm`}function zp(){return{yaw:Number(pi.dataset.yaw||0),pitch:Number(R("cam-pitch").value),dist:Number(R("cam-dist").value),lens:Number(R("cam-lens").value),move:R("cam-move").value}}var Ll=()=>te.cues.find(i=>i.id===In);function Hp(){let i=Ll();i&&((Bt<i.start||Bt>=i.end)&&(gn(),Bt=i.start+Math.min(.5,(i.end-i.start)/2)),_t.previewCam={...zp(),subject:R("subject").value||i.speaker},rn())}function Gs(i={}){let e=Ll();if(e){_t.previewCam=null;try{let t=Ft(te),n=t.cues.find(r=>r.id===e.id);Object.assign(n,{shot:"custom",cam:zp(),...i});let s=R("subject").value;s?n.subject=s:delete n.subject,Mt(t,{keepAudio:!0})}catch(t){qe(t.message)}}}function Zb(i){let e=pi.getBoundingClientRect(),t=(i.clientX-e.left)/e.width*128-64,n=(i.clientY-e.top)/e.height*128-64;return Math.atan2(t,n)/Dp}pi.addEventListener("pointerdown",i=>{pi.setPointerCapture(i.pointerId),Dl(Zb(i)),Hp()});pi.addEventListener("pointermove",i=>{pi.hasPointerCapture(i.pointerId)&&(Dl(Zb(i)),Hp())});pi.addEventListener("pointerup",i=>{pi.hasPointerCapture(i.pointerId)&&(pi.releasePointerCapture(i.pointerId),Gs())});pi.addEventListener("keydown",i=>{["ArrowLeft","ArrowRight"].includes(i.key)&&(i.preventDefault(),Dl(Number(pi.dataset.yaw||0)+(i.key==="ArrowLeft"?-5:5)*(i.shiftKey?3:1)),Gs())});for(let i of["cam-pitch","cam-dist","cam-lens"])R(i).oninput=()=>{$b(),Hp()},R(i).onchange=()=>Gs();R("cam-move").onchange=()=>Gs();document.querySelectorAll("[data-yaw]").forEach(i=>i.onclick=()=>{Dl(Number(i.dataset.yaw)),Gs()});function Jb(i){let e=ka(te).find(t=>t.cue===i.id&&t.shot!=="screen")||{shot:"single",subject:i.speaker,other:i.speaker};return{seg:e,cam:e.shot==="custom"?e.cam:_t.describeShot(e)}}R("customize-cam").onclick=()=>{let i=Ll();if(!i)return;let{seg:e,cam:t}=Jb(i);Bp(t),e.subject!==i.speaker&&(R("subject").value=e.subject),Gs(),qe("Drag the dial to move the camera around the character.")};R("shot").onchange=()=>{let i=Ll();if(i)if(R("shot").value==="custom"){let{cam:e}=Jb(i);Bp(i.cam||e),Gs()}else try{let e=Ft(te),t=e.cues.find(n=>n.id===i.id);t.shot=R("shot").value,delete t.cam,Mt(e,{keepAudio:!0})}catch(e){qe(e.message)}};R("subject").onchange=()=>{let i=Ll();if(i){if(i.shot==="custom"){Gs();return}try{let e=Ft(te),t=e.cues.find(n=>n.id===i.id);R("subject").value?t.subject=R("subject").value:delete t.subject,t.shot==="auto"&&(t.shot="single"),Mt(e,{keepAudio:!0})}catch(e){qe(e.message)}}};var Qb=()=>{gn(),R("script-text").value=l0(te),R("script-error").textContent="",R("script-dialog").showModal()};R("script-open").onclick=Qb;R("script-open-2").onclick=Qb;document.querySelectorAll("[data-close]").forEach(i=>i.onclick=()=>R(i.dataset.close).close());R("import-script").onclick=()=>{try{let{meta:i,cues:e}=o0(R("script-text").value,te),t=e.at(-1).end,n=Math.min(90,Math.max(te.duration,Math.ceil(t+2.5))),s={...Ft(te),cues:e,duration:n,voiceData:null,title:i.title||te.title,handle:i.handle??te.handle};In=e[0].id,Bt=0,Mt(s),R("script-dialog").close(),qe("Script loaded. Open the Voice tab to give it voices."),document.querySelector("[data-tab=voice]").click()}catch(i){R("script-error").textContent=i.message}};R("download-script").onclick=()=>Wb(new Blob([R("script-text").value],{type:"text/plain"}),Np()+".script.txt");var XT={human:"a human",robot:"a humanoid robot",creature:"a cartoon creature",bot:"a small desk robot with an LED face"};R("copy-prompt").onclick=async()=>{let i=R("ai-topic").value.trim()||"something funny that happens at their desk today",e=te.cast,t=e[0].name.toUpperCase(),n=(e[1]||e[0]).name.toUpperCase(),s=`You write short comedy scripts for a 3D animated vertical reel (9:16, 30 to 55 seconds).
Characters:
${e.map(r=>`- ${r.name}: ${XT[r.kind]}${r.kind==="creature"?` (${r.look.species})`:""}. Give them a clear, consistent personality.`).join(`
`)}
Setting: they stand on a giant keyboard in front of a huge monitor whose screen can change.
Write an episode about: ${i}

Structure: a hook in the first line, escalation, one silent beat, and a callback punchline at the end. 8 to 14 lines, about 100 spoken words in total, each line under 160 characters.
Reply with the script only, in exactly this format, one line each:
# title: <short episode title>
${t} [emotion, action]: spoken line
${n} [emotion, action, pause=0.8]: spoken line
>> SCREEN tone: KICKER | Title | Subtitle   (optional; put it before a line to change the monitor; tone is alert, calm, info or success; add +progress after the tone for a progress bar)

Emotions: ${Da.join(", ")}
Actions: ${La.join(", ")}
Optional camera tag (default is automatic): ${Ua.filter(r=>!["auto","custom"].includes(r)).join(", ")}; add :name to frame someone else (cu:${e[0].name.toLowerCase()}), or a free angle cam=<degrees around>/<height degrees>/<distance>/<lens mm>
Optional pause tag: pause=<seconds of silence after the line, 0 to 3>`;try{await navigator.clipboard.writeText(s),qe("Prompt copied. Paste it into Claude, ChatGPT or Gemini.")}catch{R("script-text").value=s,qe("Clipboard blocked: the prompt is in the editor. Copy it from there.")}};R("export-open").onclick=()=>{gn(),globalThis.VideoEncoder||(R("export-status").textContent="This browser exports a frame package with soundtrack; its included converter creates the MP4."),kp(),R("export-dialog").showModal()};R("close-export").onclick=()=>{Gi||R("export-dialog").close()};R("export-dialog").addEventListener("cancel",i=>{Gi&&i.preventDefault()});R("render").onclick=async()=>{if(!Gi){gn(),Gi=!0,Rp=new AbortController,R("render").disabled=!0,R("export-size").disabled=!0,R("close-export").disabled=!0,R("export-progress").hidden=!1,R("cancel-export").hidden=!1,R("export-result").hidden=!0,R("export-status").textContent="Preparing soundtrack\u2026";try{let i=await Fb(),e=[i.getChannelData(0),i.getChannelData(1)],t=await Cb(_t,Ft(te),e,Number(R("export-size").value),(s,r)=>{R("export-progress").value=s,R("export-status").textContent=r},Rp.signal);Al&&URL.revokeObjectURL(Al),Al=URL.createObjectURL(t.blob);let n=t.kind==="frames";R("result-video").hidden=n,n||(R("result-video").src=Al),R("download-film").href=Al,R("download-film").download=Np()+(n?"_render.zip":".mp4"),R("download-film").textContent=n?"Download render package \u2193":"Download film \u2193",R("export-result").hidden=!1,R("export-status").textContent=`Ready \xB7 ${t.width} \xD7 ${t.height} \xB7 ${t.frames} frames \xB7 ${(t.blob.size/1e6).toFixed(1)} MB`+(n?" \xB7 Extract and run convert_video.py to create your MP4.":""),R("status").textContent="Final film rendered successfully."}catch(i){R("export-status").textContent=i.message,console.error(i)}finally{Gi=!1,R("render").disabled=!1,R("export-size").disabled=!1,R("close-export").disabled=!1,R("cancel-export").hidden=!0,rn()}}};R("cancel-export").onclick=()=>Rp?.abort();document.addEventListener("keydown",i=>{["INPUT","TEXTAREA","SELECT"].includes(i.target.tagName)||document.querySelector("dialog[open]")||(i.code==="Space"&&(i.preventDefault(),Ob()),(i.key==="ArrowLeft"||i.key==="ArrowRight")&&(i.preventDefault(),gn(),Bt=Math.max(0,Math.min(te.duration,Bt+(i.key==="ArrowLeft"?-1:1)*(i.shiftKey?1:1/30))),rn()),(i.ctrlKey||i.metaKey)&&i.key==="z"&&(i.preventDefault(),R(i.shiftKey?"redo":"undo").click()))});document.addEventListener("visibilitychange",()=>{document.hidden&&!Gi&&gn()});try{_t=new ou(R("film"),te,{onUpdate:i=>{rn(),i&&qe("A 3D character could not load: "+i.message)}}),_t.setSize(540,960),R("loading").hidden=!0,Eu(),rn(),requestAnimationFrame(Bb)}catch(i){R("loading").textContent="3D could not start: "+i.message,R("status").textContent="WebGL is required. Try a current browser with graphics enabled.",console.error(i)}
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
