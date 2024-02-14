// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty;function e(r){return"number"==typeof r}function t(r){var n,e="";for(n=0;n<r;n++)e+="0";return e}function i(r,n,e){var i=!1,a=n-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=e?r+t(a):t(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var n,t,u;switch(r.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(t=r.arg,u=parseInt(t,10),!isFinite(u)){if(!e(t))throw new Error("invalid integer. Value: "+t);u=0}return u<0&&("u"===r.specifier||10!==n)&&(u=4294967295+u+1),u<0?(t=(-u).toString(n),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=u.toString(n),u||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===n&&(r.alternate&&(t="0x"+t),t=r.specifier===o.call(r.specifier)?o.call(t):a.call(t)),8===n&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function f(r){return"string"==typeof r}var c=Math.abs,s=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,v=/^(\d+)e/,h=/\.0$/,w=/\.0*e/,b=/(\..*[^0])0*e/;function m(r){var n,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((n=r.precision)>0&&(n-=1),t=i.toExponential(n)):t=i.toPrecision(r.precision),r.alternate||(t=p.call(t,b,"$1e"),t=p.call(t,w,"e"),t=p.call(t,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=p.call(t,y,"e+0$1"),t=p.call(t,g,"e-0$1"),r.alternate&&(t=p.call(t,d,"$1."),t=p.call(t,v,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===l.call(r.specifier)?l.call(t):s.call(t)}function A(r){var n,e="";for(n=0;n<r;n++)e+=" ";return e}function N(r,n,e){var t=n-r.length;return t<0?r:r=e?r+A(t):A(t)+r}var _=String.fromCharCode,E=isNaN,U=Array.isArray;function I(r){var n={};return n.specifier=r.specifier,n.precision=void 0===r.precision?1:r.precision,n.width=r.width,n.flags=r.flags||"",n.mapping=r.mapping,n}function S(r){var n,e,t,a,o,c,s,l,p;if(!U(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",s=1,l=0;l<r.length;l++)if(f(t=r[l]))c+=t;else{if(n=void 0!==t.precision,!(t=I(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),e=t.flags,p=0;p<e.length;p++)switch(a=e.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=e.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,E(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(n&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,E(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,n=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(t.padZeros=!1),t.arg=u(t);break;case"s":t.maxWidth=n?t.precision:-1;break;case"c":if(!E(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=E(o)?String(t.arg):_(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(t.precision=6),t.arg=m(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=N(t.arg,t.width,t.padRight)),c+=t.arg||"",s+=1}return c}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(r){var n={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(n.precision="1"),n}function F(r){var n,e,t,i;for(e=[],i=0,t=x.exec(r);t;)(n=r.slice(i,x.lastIndex-t[0].length)).length&&e.push(n),e.push(k(t)),i=x.lastIndex,t=x.exec(r);return(n=r.slice(i)).length&&e.push(n),e}function j(r){return"string"==typeof r}function T(r){var n,e;if(!j(r))throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",r));for(n=[F(r)],e=1;e<arguments.length;e++)n.push(arguments[e]);return S.apply(null,n)}var O=Object.prototype,V=O.toString,$=O.__defineGetter__,G=O.__defineSetter__,H=O.__lookupGetter__,W=O.__lookupSetter__,C=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,e){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===V.call(e))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((i="value"in e)&&(H.call(r,n)||W.call(r,n)?(t=r.__proto__,r.__proto__=O,delete r[n],r[n]=e.value,r.__proto__=t):r[n]=e.value),a="get"in e,o="set"in e,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&$&&$.call(r,n,e.get),o&&G&&G.call(r,n,e.set),r};function L(r,n,e){C(r,n,{configurable:!1,enumerable:!1,writable:!1,value:e})}function P(r){return r!=r}var R=Math.floor,M=Math.ceil;function Z(r){return r<0?M(r):R(r)}var X=Number.NEGATIVE_INFINITY,Y=Number.POSITIVE_INFINITY,q=1023;function z(r){return r===Y||r===X}var B,D=2147483647,J="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),K=Object.prototype.toString,Q=Object.prototype.hasOwnProperty,rr="function"==typeof Symbol?Symbol:void 0,nr="function"==typeof rr?rr.toStringTag:"",er=J&&"symbol"==typeof Symbol.toStringTag?function(r){var n,e,t,i,a;if(null==r)return K.call(r);e=r[nr],a=nr,n=null!=(i=r)&&Q.call(i,a);try{r[nr]=void 0}catch(n){return K.call(r)}return t=K.call(r),n?r[nr]=e:delete r[nr],t}:function(r){return K.call(r)},tr="function"==typeof Uint32Array,ir="function"==typeof Uint32Array?Uint32Array:null,ar="function"==typeof Uint32Array?Uint32Array:void 0;B=function(){var r,n,e;if("function"!=typeof ir)return!1;try{n=new ir(n=[1,3.14,-3.14,4294967296,4294967297]),e=n,r=(tr&&e instanceof Uint32Array||"[object Uint32Array]"===er(e))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?ar:function(){throw new Error("not implemented")};var or,ur=B,fr="function"==typeof Float64Array,cr="function"==typeof Float64Array?Float64Array:null,sr="function"==typeof Float64Array?Float64Array:void 0;or=function(){var r,n,e;if("function"!=typeof cr)return!1;try{n=new cr([1,3.14,-3.14,NaN]),e=n,r=(fr&&e instanceof Float64Array||"[object Float64Array]"===er(e))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?sr:function(){throw new Error("not implemented")};var lr,pr=or,yr="function"==typeof Uint8Array,gr="function"==typeof Uint8Array?Uint8Array:null,dr="function"==typeof Uint8Array?Uint8Array:void 0;lr=function(){var r,n,e;if("function"!=typeof gr)return!1;try{n=new gr(n=[1,3.14,-3.14,256,257]),e=n,r=(yr&&e instanceof Uint8Array||"[object Uint8Array]"===er(e))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?dr:function(){throw new Error("not implemented")};var vr,hr=lr,wr="function"==typeof Uint16Array,br="function"==typeof Uint16Array?Uint16Array:null,mr="function"==typeof Uint16Array?Uint16Array:void 0;vr=function(){var r,n,e;if("function"!=typeof br)return!1;try{n=new br(n=[1,3.14,-3.14,65536,65537]),e=n,r=(wr&&e instanceof Uint16Array||"[object Uint16Array]"===er(e))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?mr:function(){throw new Error("not implemented")};var Ar,Nr={uint16:vr,uint8:hr};(Ar=new Nr.uint16(1))[0]=4660;var _r,Er,Ur=52===new Nr.uint8(Ar.buffer)[0];!0===Ur?(_r=1,Er=0):(_r=0,Er=1);var Ir={HIGH:_r,LOW:Er},Sr=new pr(1),xr=new ur(Sr.buffer),kr=Ir.HIGH,Fr=Ir.LOW;function jr(r,n,e,t){return Sr[0]=r,n[t]=xr[kr],n[t+e]=xr[Fr],n}function Tr(r){return jr(r,[0,0],1,0)}L(Tr,"assign",jr);var Or,Vr,$r=!0===Ur?1:0,Gr=new pr(1),Hr=new ur(Gr.buffer);function Wr(r){return Gr[0]=r,Hr[$r]}!0===Ur?(Or=1,Vr=0):(Or=0,Vr=1);var Cr={HIGH:Or,LOW:Vr},Lr=new pr(1),Pr=new ur(Lr.buffer),Rr=Cr.HIGH,Mr=Cr.LOW;function Zr(r,n){return Pr[Rr]=r,Pr[Mr]=n,Lr[0]}var Xr=[0,0];function Yr(r,n){var e,t;return Tr.assign(r,Xr,1,0),e=Xr[0],e&=D,t=Wr(n),Zr(e|=t&=2147483648,Xr[1])}function qr(r){return Math.abs(r)}function zr(r,n,e,t){return P(r)||z(r)?(n[t]=r,n[t+e]=0,n):0!==r&&qr(r)<22250738585072014e-324?(n[t]=4503599627370496*r,n[t+e]=-52,n):(n[t]=r,n[t+e]=0,n)}L((function(r){return zr(r,[0,0],1,0)}),"assign",zr);var Br=[0,0],Dr=[0,0];function Jr(r,n){var e,t;return 0===n||0===r||P(r)||z(r)?r:(zr(r,Br,1,0),n+=Br[1],n+=function(r){var n=Wr(r);return(n=(2146435072&n)>>>20)-q|0}(r=Br[0]),n<-1074?Yr(0,r):n>1023?r<0?X:Y:(n<=-1023?(n+=52,t=2220446049250313e-31):t=1,Tr.assign(r,Dr,1,0),e=Dr[0],e&=2148532223,t*Zr(e|=n+q<<20,Dr[1])))}var Kr=1.4426950408889634,Qr=1/(1<<28);function rn(r){var n;return P(r)||r===Y?r:r===X?0:r>709.782712893384?Y:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<Qr?1+r:function(r,n,e){var t,i,a,o;return Jr(1-(n-(t=r-n)*(a=t-(i=t*t)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),e)}(r-.6931471803691238*(n=Z(r<0?Kr*r-.5:Kr*r+.5)),1.9082149292705877e-10*n,n)}function nn(r){return R(r)===r}function en(r){return nn(r/2)}function tn(r){return en(r>0?r-1:r+1)}var an=Math.sqrt,on=!0===Ur?0:1,un=new pr(1),fn=new ur(un.buffer);function cn(r,n){return un[0]=r,fn[on]=n>>>0,un[0]}function sn(r){return 0|r}var ln=!0===Ur?1:0,pn=new pr(1),yn=new ur(pn.buffer);function gn(r,n){return pn[0]=r,yn[ln]=n>>>0,pn[0]}var dn=1048576,vn=[1,1.5],hn=[0,.5849624872207642],wn=[0,1.350039202129749e-8],bn=1048575,mn=1048576,An=1083179008,Nn=1e300,_n=1e-300,En=[0,0],Un=[0,0];function In(r,n){var e,t,i,a,o,u,f,c,s,l,p,y,g,d;if(P(r)||P(n))return NaN;if(Tr.assign(n,En,1,0),o=En[0],0===En[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return an(r);if(-.5===n)return 1/an(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(z(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:qr(r)<1==(n===Y)?0:Y}(r,n)}if(Tr.assign(r,En,1,0),a=En[0],0===En[1]){if(0===a)return function(r,n){return n===X?Y:n===Y?0:n>0?tn(n)?r:0:tn(n)?Yr(Y,r):Y}(r,n);if(1===r)return 1;if(-1===r&&tn(n))return-1;if(z(r))return r===X?In(-0,-n):n<0?0:Y}if(r<0&&!1===nn(n))return(r-r)/(r-r);if(i=qr(r),e=a&D|0,t=o&D|0,f=o>>>31|0,u=(u=a>>>31|0)&&tn(n)?-1:1,t>1105199104){if(t>1139802112)return function(r,n){return(Wr(r)&D)<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(e<1072693247)return 1===f?u*Nn*Nn:u*_n*_n;if(e>1072693248)return 0===f?u*Nn*Nn:u*_n*_n;p=function(r,n){var e,t,i,a,o,u;return e=(o=1.9259629911266175e-8*(i=n-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((t=cn(t=(a=1.4426950216293335*i)+o,0))-a),r[0]=t,r[1]=e,r}(Un,i)}else p=function(r,n,e){var t,i,a,o,u,f,c,s,l,p,y,g,d,v,h,w,b,m,A,N,_;return m=0,e<dn&&(m-=53,e=Wr(n*=9007199254740992)),m+=(e>>20)-q|0,e=1072693248|(A=1048575&e|0),A<=235662?N=0:A<767610?N=1:(N=0,m+=1,e-=dn),o=cn(i=(w=(n=gn(n,e))-(c=vn[N]))*(b=1/(n+c)),0),t=524288+(e>>1|536870912),f=gn(0,t+=N<<18),h=(a=i*i)*a*(0===(_=a)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),f=cn(f=3+(a=o*o)+(h+=(u=b*(w-o*f-o*(n-(f-c))))*(o+i)),0),d=(y=-7.028461650952758e-9*(l=cn(l=(w=o*f)+(b=u*f+(h-(f-3-a))*i),0))+.9617966939259756*(b-(l-w))+wn[N])-((g=cn(g=(p=.9617967009544373*l)+y+(s=hn[N])+(v=m),0))-v-s-p),r[0]=g,r[1]=d,r}(Un,i,e);if(y=(l=(n-(c=cn(n,0)))*p[0]+n*p[1])+(s=c*p[0]),Tr.assign(y,En,1,0),g=sn(En[0]),d=sn(En[1]),g>=An){if(0!=(g-An|d))return u*Nn*Nn;if(l+8008566259537294e-32>y-s)return u*Nn*Nn}else if((g&D)>=1083231232){if(0!=(g-3230714880|d))return u*_n*_n;if(l<=y-s)return u*_n*_n}return y=function(r,n,e){var t,i,a,o,u,f,c,s,l,p;return l=((s=r&D|0)>>20)-q|0,c=0,s>1071644672&&(i=gn(0,((c=r+(mn>>l+1)>>>0)&~(bn>>(l=((c&D)>>20)-q|0)))>>>0),c=(c&bn|mn)>>20-l>>>0,r<0&&(c=-c),n-=i),r=sn(r=Wr(f=1-((f=(a=.6931471824645996*(i=cn(i=e+n,0)))+(o=.6931471805599453*(e-(i-n))+-1.904654299957768e-9*i))*(t=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=o-(f-a))+f*u)-f))),(r+=c<<20>>>0)>>20<=0?Jr(f,c):gn(f,r)}(g,s,l),u*y}var Sn=.8450629115104675;function xn(r){var n,e,t,i,a,o,u,f;if(P(r))return NaN;if(r===Y)return 0;if(r===X)return 2;if(0===r)return 1;if(r<0?(n=!0,e=-r):(n=!1,e=r),e<.84375)return e<13877787807814457e-33?1-r:(i=.12837916709551256+(t=r*r)*function(r){return 0===r?-.3250421072470015:r*(r*(-23763016656650163e-21*r-.005770270296489442)-.02848174957559851)-.3250421072470015}(t),a=1+t*function(r){return 0===r?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+-3960228278775368e-21*r)))}(t),o=i/a,r<.25?1-(r+r*o):(i=r*o,.5-(i+=r-.5)));if(e<1.25)return u=(a=e-1)*function(r){return 0===r?.41485611868374833:.41485611868374833+r*(r*(.31834661990116175+r*(r*(.035478304325618236+-.002166375594868791*r)-.11089469428239668))-.3722078760357013)}(a)-.0023621185607526594,f=1+a*function(r){return 0===r?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+.011984499846799107*r))))}(a),n?1+Sn+u/f:1-Sn-u/f;if(e<28){if(a=1/(e*e),e<2.857142857142857)i=a*function(r){return 0===r?-.6938585727071818:r*(r*(r*(r*(r*(-9.814329344169145*r-81.2874355063066)-184.60509290671104)-162.39666946257347)-62.375332450326006)-10.558626225323291)-.6938585727071818}(a)-.009864944034847148,a=1+a*function(r){return 0===r?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+-.0604244152148581*r))))))}(a);else{if(r<-6)return 2;i=a*function(r){return 0===r?-.799283237680523:r*(r*(r*(r*(-483.5191916086514*r-1025.0951316110772)-637.5664433683896)-160.63638485582192)-17.757954917754752)-.799283237680523}(a)-.0098649429247001,a=1+a*function(r){return 0===r?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+-22.44095244658582*r)))))}(a)}return i=rn(-(t=cn(e,0))*t-.5625)*rn((t-e)*(t+e)+i/a),n?2-i/e:i/e}return n?2:0}function kn(r){return function(){return r}}function Fn(r){return P(r)?kn(NaN):function(n){return P(n)?NaN:n<r?0:1}}function jn(r,n){var e;return P(r)||P(n)||n<0?kn(NaN):0===n?Fn(r):(e=n*an(2),function(n){return P(n)?NaN:.5*xn(-(n-r)/e)})}L((function(r,n){return P(r)||P(n)?NaN:r<n?0:1}),"factory",Fn),L((function(r,n,e){return P(r)||P(n)||P(e)||e<0?NaN:0===e?r<n?0:1:.5*xn(-(r-n)/(e*an(2)))}),"factory",jn);var Tn=3.141592653589793,On=jn(0,1);function Vn(r,n,e,t,i){var a,o,u,f;return P(r)||P(n)||P(e)||i<=0||n>=e?NaN:r<n||r>e?0:(a=2*In(i,2),o=1/an(a*Tn),u=-1/a,f=On((e-t)/i)-On((n-t)/i),o*rn(u*In(r-t,2))/f)}var $n=jn(0,1);return L(Vn,"factory",(function(r,n,e,t){var i,a,o,u;return P(r)||P(n)||P(e)||P(t)||t<=0||r>=n?kn(NaN):(i=2*In(t,2),a=1/an(i*Tn),o=-1/i,u=$n((n-e)/t)-$n((r-e)/t),function(t){return P(t)?NaN:t<r||t>n?0:a*rn(o*In(t-e,2))/u})})),Vn},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).pdf=n();
//# sourceMappingURL=index.js.map
