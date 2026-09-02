"use strict";var q=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var s=q(function(j,p){
var T=require('@stdlib/math-base-special-exp/dist'),_=require('@stdlib/math-base-special-abs2/dist'),f=require('@stdlib/math-base-assert-is-nan/dist'),d=require('@stdlib/stats-base-dists-normal-cdf/dist').factory,F=require('@stdlib/constants-float64-sqrt-two-pi/dist'),c=d(0,1);function O(e,r,t,n,a){var u,v;return f(e)||f(r)||f(t)||a<=0||r>=t?NaN:e<r||e>t?0:(u=1/(a*F),v=c((t-n)/a)-c((r-n)/a),u*T(-.5*_((e-n)/a))/v)}p.exports=O
});var l=q(function(k,N){
var R=require('@stdlib/utils-constant-function/dist'),A=require('@stdlib/math-base-special-exp/dist'),D=require('@stdlib/math-base-special-abs2/dist'),i=require('@stdlib/math-base-assert-is-nan/dist'),I=require('@stdlib/stats-base-dists-normal-cdf/dist').factory,P=require('@stdlib/constants-float64-sqrt-two-pi/dist'),y=I(0,1);function Q(e,r,t,n){var a,u;if(i(e)||i(r)||i(t)||i(n)||n<=0||e>=r)return R(NaN);return a=1/(n*P),u=y((r-t)/n)-y((e-t)/n),v;function v(o){return i(o)?NaN:o<e||o>r?0:a*A(-.5*D((o-t)/n))/u}}N.exports=Q
});var S=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),C=s(),W=l();S(C,"factory",W);module.exports=C;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
