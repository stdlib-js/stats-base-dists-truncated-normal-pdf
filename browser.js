// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(r){"use strict";var n="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,e=Object.prototype,u=e.toString,o=e.__defineGetter__,i=e.__defineSetter__,f=e.__lookupGetter__,a=e.__lookupSetter__,c=function(){try{return n({},"x",{}),!0}catch(r){return!1}}()?t:function(r,n,t){var c,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(f.call(r,n)||a.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=t.value,r.__proto__=c):r[n]=t.value),y="get"in t,p="set"in t,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(r,n,t.get),p&&i&&i.call(r,n,t.set),r};function l(r,n,t){c(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function y(r){return r!=r}var p=Math.floor,v=Math.ceil;function b(r){return r<0?v(r):p(r)}var d=Number.NEGATIVE_INFINITY,s=Number.POSITIVE_INFINITY,w=1023;function _(r){return r===s||r===d}var A,N="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),m=Object.prototype.toString,h=Object.prototype.hasOwnProperty,U="function"==typeof Symbol?Symbol.toStringTag:"",j=N&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,u,o;if(null==r)return m.call(r);t=r[U],o=U,n=null!=(u=r)&&h.call(u,o);try{r[U]=void 0}catch(n){return m.call(r)}return e=m.call(r),n?r[U]=t:delete r[U],e}:function(r){return m.call(r)},g="function"==typeof Uint32Array,I="function"==typeof Uint32Array?Uint32Array:null,O="function"==typeof Uint32Array?Uint32Array:void 0;A=function(){var r,n,t;if("function"!=typeof I)return!1;try{n=new I(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(g&&t instanceof Uint32Array||"[object Uint32Array]"===j(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?O:function(){throw new Error("not implemented")};var S,E=A,F="function"==typeof Float64Array,T="function"==typeof Float64Array?Float64Array:null,H="function"==typeof Float64Array?Float64Array:void 0;S=function(){var r,n,t;if("function"!=typeof T)return!1;try{n=new T([1,3.14,-3.14,NaN]),t=n,r=(F&&t instanceof Float64Array||"[object Float64Array]"===j(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?H:function(){throw new Error("not implemented")};var G,P=S,M="function"==typeof Uint8Array,x="function"==typeof Uint8Array?Uint8Array:null,L="function"==typeof Uint8Array?Uint8Array:void 0;G=function(){var r,n,t;if("function"!=typeof x)return!1;try{n=new x(n=[1,3.14,-3.14,256,257]),t=n,r=(M&&t instanceof Uint8Array||"[object Uint8Array]"===j(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?L:function(){throw new Error("not implemented")};var V,W=G,k="function"==typeof Uint16Array,Y="function"==typeof Uint16Array?Uint16Array:null,q="function"==typeof Uint16Array?Uint16Array:void 0;V=function(){var r,n,t;if("function"!=typeof Y)return!1;try{n=new Y(n=[1,3.14,-3.14,65536,65537]),t=n,r=(k&&t instanceof Uint16Array||"[object Uint16Array]"===j(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?q:function(){throw new Error("not implemented")};var C,z={uint16:V,uint8:W};(C=new z.uint16(1))[0]=4660;var B,D,J=52===new z.uint8(C.buffer)[0];!0===J?(B=1,D=0):(B=0,D=1);var K={HIGH:B,LOW:D},Q=new P(1),R=new E(Q.buffer),X=K.HIGH,Z=K.LOW;function $(r,n){return Q[0]=n,r[0]=R[X],r[1]=R[Z],r}function rr(r,n){return 1===arguments.length?$([0,0],r):$(r,n)}var nr,tr,er=!0===J?1:0,ur=new P(1),or=new E(ur.buffer);function ir(r){return ur[0]=r,or[er]}!0===J?(nr=1,tr=0):(nr=0,tr=1);var fr={HIGH:nr,LOW:tr},ar=new P(1),cr=new E(ar.buffer),lr=fr.HIGH,yr=fr.LOW;function pr(r,n){return cr[lr]=r,cr[yr]=n,ar[0]}var vr=[0,0];function br(r,n){var t,e;return rr(vr,r),t=vr[0],t&=2147483647,e=ir(n),pr(t|=e&=2147483648,vr[1])}function dr(r){return Math.abs(r)}function sr(r,n){return y(n)||_(n)?(r[0]=n,r[1]=0,r):0!==n&&dr(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)}var wr=[0,0],_r=[0,0];function Ar(r,n){var t,e;return 0===n||0===r||y(r)||_(r)?r:(function(r,n){1===arguments.length?sr([0,0],r):sr(r,n)}(wr,r),n+=wr[1],n+=function(r){var n=ir(r);return(n=(2146435072&n)>>>20)-w|0}(r=wr[0]),n<-1074?br(0,r):n>1023?r<0?d:s:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,rr(_r,r),t=_r[0],t&=2148532223,e*pr(t|=n+w<<20,_r[1])))}var Nr=1.4426950408889634,mr=1/(1<<28);function hr(r){var n;return y(r)||r===s?r:r===d?0:r>709.782712893384?s:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<mr?1+r:function(r,n,t){var e,u,o,i;return Ar(1-(n-(e=r-n)*(o=e-(u=e*e)*(0===(i=u)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-o)-r),t)}(r-.6931471803691238*(n=b(r<0?Nr*r-.5:Nr*r+.5)),1.9082149292705877e-10*n,n)}function Ur(r){return p(r)===r}function jr(r){return Ur(r/2)}function gr(r){return jr(r>0?r-1:r+1)}var Ir=Math.sqrt,Or=!0===J?0:1,Sr=new P(1),Er=new E(Sr.buffer);function Fr(r,n){return Sr[0]=r,Er[Or]=n>>>0,Sr[0]}function Tr(r){return 0|r}var Hr=!0===J?1:0,Gr=new P(1),Pr=new E(Gr.buffer);function Mr(r,n){return Gr[0]=r,Pr[Hr]=n>>>0,Gr[0]}var xr=1048576,Lr=[1,1.5],Vr=[0,.5849624872207642],Wr=[0,1.350039202129749e-8],kr=2147483647,Yr=1048575,qr=1048576,Cr=2147483647,zr=1083179008,Br=1e300,Dr=1e-300,Jr=[0,0],Kr=[0,0];function Qr(r,n){var t,e,u,o,i,f,a,c,l,p,v,b,A,N;if(y(r)||y(n))return NaN;if(rr(Jr,n),i=Jr[0],0===Jr[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return Ir(r);if(-.5===n)return 1/Ir(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(_(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:dr(r)<1==(n===s)?0:s}(r,n)}if(rr(Jr,r),o=Jr[0],0===Jr[1]){if(0===o)return function(r,n){return n===d?s:n===s?0:n>0?gr(n)?r:0:gr(n)?br(s,r):s}(r,n);if(1===r)return 1;if(-1===r&&gr(n))return-1;if(_(r))return r===d?Qr(-0,-n):n<0?0:s}if(r<0&&!1===Ur(n))return(r-r)/(r-r);if(u=dr(r),t=o&Cr|0,e=i&Cr|0,a=i>>>31|0,f=(f=o>>>31|0)&&gr(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(2147483647&ir(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===a?f*Br*Br:f*Dr*Dr;if(t>1072693248)return 0===a?f*Br*Br:f*Dr*Dr;v=function(r,n){var t,e,u,o,i,f;return t=(i=1.9259629911266175e-8*(u=n-1)-u*u*(0===(f=u)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=Fr(e=(o=1.4426950216293335*u)+i,0))-o),r[0]=e,r[1]=t,r}(Kr,u)}else v=function(r,n,t){var e,u,o,i,f,a,c,l,y,p,v,b,d,s,_,A,N,m,h,U,j;return m=0,t<xr&&(m-=53,t=ir(n*=9007199254740992)),m+=(t>>20)-w|0,t=1072693248|(h=1048575&t|0),h<=235662?U=0:h<767610?U=1:(U=0,m+=1,t-=xr),i=Fr(u=(A=(n=Mr(n,t))-(c=Lr[U]))*(N=1/(n+c)),0),e=524288+(t>>1|536870912),a=Mr(0,e+=U<<18),_=(o=u*u)*o*(0===(j=o)?.5999999999999946:.5999999999999946+j*(.4285714285785502+j*(.33333332981837743+j*(.272728123808534+j*(.23066074577556175+.20697501780033842*j))))),a=Fr(a=3+(o=i*i)+(_+=(f=N*(A-i*a-i*(n-(a-c))))*(i+u)),0),d=(v=-7.028461650952758e-9*(y=Fr(y=(A=i*a)+(N=f*a+(_-(a-3-o))*u),0))+.9617966939259756*(N-(y-A))+Wr[U])-((b=Fr(b=(p=.9617967009544373*y)+v+(l=Vr[U])+(s=m),0))-s-l-p),r[0]=b,r[1]=d,r}(Kr,u,t);if(p=(n-(c=Fr(n,0)))*v[0]+n*v[1],l=c*v[0],rr(Jr,b=p+l),A=Tr(Jr[0]),N=Tr(Jr[1]),A>=zr){if(0!=(A-zr|N))return f*Br*Br;if(p+8008566259537294e-32>b-l)return f*Br*Br}else if((A&Cr)>=1083231232){if(0!=(A-3230714880|N))return f*Dr*Dr;if(p<=b-l)return f*Dr*Dr}return b=function(r,n,t){var e,u,o,i,f,a,c,l,y,p;return y=((l=r&kr|0)>>20)-w|0,c=0,l>1071644672&&(u=Mr(0,((c=r+(qr>>y+1)>>>0)&~(Yr>>(y=((c&kr)>>20)-w|0)))>>>0),c=(c&Yr|qr)>>20-y>>>0,r<0&&(c=-c),n-=u),r=Tr(r=ir(a=1-((a=(o=.6931471824645996*(u=Fr(u=t+n,0)))+(i=.6931471805599453*(t-(u-n))+-1.904654299957768e-9*u))*(e=a-(u=a*a)*(0===(p=u)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((f=i-(a-o))+a*f)-a))),(r+=c<<20>>>0)>>20<=0?Ar(a,c):Mr(a,r)}(A,l,p),f*b}var Rr=.8450629115104675;function Xr(r){var n,t,e,u,o,i,f,a;if(y(r))return NaN;if(r===s)return 0;if(r===d)return 2;if(0===r)return 1;if(r<0?(n=!0,t=-r):(n=!1,t=r),t<.84375)return t<13877787807814457e-33?1-r:(u=.12837916709551256+(e=r*r)*function(r){return 0===r?-.3250421072470015:r*(r*(-23763016656650163e-21*r-.005770270296489442)-.02848174957559851)-.3250421072470015}(e),o=1+e*function(r){return 0===r?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+-3960228278775368e-21*r)))}(e),i=u/o,r<.25?1-(r+r*i):(u=r*i,.5-(u+=r-.5)));if(t<1.25)return f=(o=t-1)*function(r){return 0===r?.41485611868374833:.41485611868374833+r*(r*(.31834661990116175+r*(r*(.035478304325618236+-.002166375594868791*r)-.11089469428239668))-.3722078760357013)}(o)-.0023621185607526594,a=1+o*function(r){return 0===r?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+.011984499846799107*r))))}(o),n?1+Rr+f/a:1-Rr-f/a;if(t<28){if(o=1/(t*t),t<2.857142857142857)u=o*function(r){return 0===r?-.6938585727071818:r*(r*(r*(r*(r*(-9.814329344169145*r-81.2874355063066)-184.60509290671104)-162.39666946257347)-62.375332450326006)-10.558626225323291)-.6938585727071818}(o)-.009864944034847148,o=1+o*function(r){return 0===r?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+-.0604244152148581*r))))))}(o);else{if(r<-6)return 2;u=o*function(r){return 0===r?-.799283237680523:r*(r*(r*(r*(-483.5191916086514*r-1025.0951316110772)-637.5664433683896)-160.63638485582192)-17.757954917754752)-.799283237680523}(o)-.0098649429247001,o=1+o*function(r){return 0===r?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+-22.44095244658582*r)))))}(o)}return u=hr(-(e=Fr(t,0))*e-.5625)*hr((e-t)*(e+t)+u/o),n?2-u/t:u/t}return n?2:0}function Zr(r){return function(){return r}}function $r(r){return y(r)?Zr(NaN):function(n){return y(n)?NaN:n<r?0:1}}function rn(r,n){var t;return y(r)||y(n)||n<0?Zr(NaN):0===n?$r(r):(t=n*Ir(2),function(n){return y(n)?NaN:.5*Xr(-(n-r)/t)})}l((function(r,n){return y(r)||y(n)?NaN:r<n?0:1}),"factory",$r),l((function(r,n,t){return y(r)||y(n)||y(t)||t<0?NaN:0===t?r<n?0:1:.5*Xr(-(r-n)/(t*Ir(2)))}),"factory",rn);var nn=3.141592653589793,tn=rn(0,1);function en(r,n,t,e,u){var o,i,f,a;return y(r)||y(n)||y(t)||u<=0||n>=t?NaN:r<n||r>t?0:(o=2*Qr(u,2),i=1/Ir(o*nn),f=-1/o,a=tn((t-e)/u)-tn((n-e)/u),i*hr(f*Qr(r-e,2))/a)}var un=rn(0,1);function on(r,n,t,e){var u,o,i,f;return y(r)||y(n)||y(t)||y(e)||e<=0||r>=n?Zr(NaN):(u=2*Qr(e,2),o=1/Ir(u*nn),i=-1/u,f=un((n-t)/e)-un((r-t)/e),function(e){return y(e)?NaN:e<r||e>n?0:o*hr(i*Qr(e-t,2))/f})}l(en,"factory",on),r.default=en,r.factory=on,Object.defineProperty(r,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((r="undefined"!=typeof globalThis?globalThis:r||self).pdf={});
//# sourceMappingURL=browser.js.map
