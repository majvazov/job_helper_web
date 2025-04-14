(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();function Wb(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var im={exports:{}},lu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V0;function j1(){if(V0)return lu;V0=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(s,o,u){var h=null;if(u!==void 0&&(h=""+u),o.key!==void 0&&(h=""+o.key),"key"in o){u={};for(var p in o)p!=="key"&&(u[p]=o[p])}else u=o;return o=u.ref,{$$typeof:r,type:s,key:h,ref:o!==void 0?o:null,props:u}}return lu.Fragment=e,lu.jsx=t,lu.jsxs=t,lu}var L0;function z1(){return L0||(L0=1,im.exports=j1()),im.exports}var S=z1(),sm={exports:{}},De={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U0;function q1(){if(U0)return De;U0=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),b=Symbol.iterator;function w(P){return P===null||typeof P!="object"?null:(P=b&&P[b]||P["@@iterator"],typeof P=="function"?P:null)}var I={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,z={};function U(P,ie,le){this.props=P,this.context=ie,this.refs=z,this.updater=le||I}U.prototype.isReactComponent={},U.prototype.setState=function(P,ie){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,ie,"setState")},U.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function $(){}$.prototype=U.prototype;function Z(P,ie,le){this.props=P,this.context=ie,this.refs=z,this.updater=le||I}var Y=Z.prototype=new $;Y.constructor=Z,C(Y,U.prototype),Y.isPureReactComponent=!0;var H=Array.isArray,ee={H:null,A:null,T:null,S:null,V:null},ue=Object.prototype.hasOwnProperty;function N(P,ie,le,oe,ge,Re){return le=Re.ref,{$$typeof:r,type:P,key:ie,ref:le!==void 0?le:null,props:Re}}function x(P,ie){return N(P.type,ie,void 0,void 0,void 0,P.props)}function D(P){return typeof P=="object"&&P!==null&&P.$$typeof===r}function k(P){var ie={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(le){return ie[le]})}var M=/\/+/g;function V(P,ie){return typeof P=="object"&&P!==null&&P.key!=null?k(""+P.key):ie.toString(36)}function R(){}function Ce(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(R,R):(P.status="pending",P.then(function(ie){P.status==="pending"&&(P.status="fulfilled",P.value=ie)},function(ie){P.status==="pending"&&(P.status="rejected",P.reason=ie)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function je(P,ie,le,oe,ge){var Re=typeof P;(Re==="undefined"||Re==="boolean")&&(P=null);var ye=!1;if(P===null)ye=!0;else switch(Re){case"bigint":case"string":case"number":ye=!0;break;case"object":switch(P.$$typeof){case r:case e:ye=!0;break;case v:return ye=P._init,je(ye(P._payload),ie,le,oe,ge)}}if(ye)return ge=ge(P),ye=oe===""?"."+V(P,0):oe,H(ge)?(le="",ye!=null&&(le=ye.replace(M,"$&/")+"/"),je(ge,ie,le,"",function(Vt){return Vt})):ge!=null&&(D(ge)&&(ge=x(ge,le+(ge.key==null||P&&P.key===ge.key?"":(""+ge.key).replace(M,"$&/")+"/")+ye)),ie.push(ge)),1;ye=0;var et=oe===""?".":oe+":";if(H(P))for(var Fe=0;Fe<P.length;Fe++)oe=P[Fe],Re=et+V(oe,Fe),ye+=je(oe,ie,le,Re,ge);else if(Fe=w(P),typeof Fe=="function")for(P=Fe.call(P),Fe=0;!(oe=P.next()).done;)oe=oe.value,Re=et+V(oe,Fe++),ye+=je(oe,ie,le,Re,ge);else if(Re==="object"){if(typeof P.then=="function")return je(Ce(P),ie,le,oe,ge);throw ie=String(P),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.")}return ye}function J(P,ie,le){if(P==null)return P;var oe=[],ge=0;return je(P,oe,"","",function(Re){return ie.call(le,Re,ge++)}),oe}function ce(P){if(P._status===-1){var ie=P._result;ie=ie(),ie.then(function(le){(P._status===0||P._status===-1)&&(P._status=1,P._result=le)},function(le){(P._status===0||P._status===-1)&&(P._status=2,P._result=le)}),P._status===-1&&(P._status=0,P._result=ie)}if(P._status===1)return P._result.default;throw P._result}var me=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ie=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(ie))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)};function Te(){}return De.Children={map:J,forEach:function(P,ie,le){J(P,function(){ie.apply(this,arguments)},le)},count:function(P){var ie=0;return J(P,function(){ie++}),ie},toArray:function(P){return J(P,function(ie){return ie})||[]},only:function(P){if(!D(P))throw Error("React.Children.only expected to receive a single React element child.");return P}},De.Component=U,De.Fragment=t,De.Profiler=o,De.PureComponent=Z,De.StrictMode=s,De.Suspense=m,De.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ee,De.__COMPILER_RUNTIME={__proto__:null,c:function(P){return ee.H.useMemoCache(P)}},De.cache=function(P){return function(){return P.apply(null,arguments)}},De.cloneElement=function(P,ie,le){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var oe=C({},P.props),ge=P.key,Re=void 0;if(ie!=null)for(ye in ie.ref!==void 0&&(Re=void 0),ie.key!==void 0&&(ge=""+ie.key),ie)!ue.call(ie,ye)||ye==="key"||ye==="__self"||ye==="__source"||ye==="ref"&&ie.ref===void 0||(oe[ye]=ie[ye]);var ye=arguments.length-2;if(ye===1)oe.children=le;else if(1<ye){for(var et=Array(ye),Fe=0;Fe<ye;Fe++)et[Fe]=arguments[Fe+2];oe.children=et}return N(P.type,ge,void 0,void 0,Re,oe)},De.createContext=function(P){return P={$$typeof:h,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:u,_context:P},P},De.createElement=function(P,ie,le){var oe,ge={},Re=null;if(ie!=null)for(oe in ie.key!==void 0&&(Re=""+ie.key),ie)ue.call(ie,oe)&&oe!=="key"&&oe!=="__self"&&oe!=="__source"&&(ge[oe]=ie[oe]);var ye=arguments.length-2;if(ye===1)ge.children=le;else if(1<ye){for(var et=Array(ye),Fe=0;Fe<ye;Fe++)et[Fe]=arguments[Fe+2];ge.children=et}if(P&&P.defaultProps)for(oe in ye=P.defaultProps,ye)ge[oe]===void 0&&(ge[oe]=ye[oe]);return N(P,Re,void 0,void 0,null,ge)},De.createRef=function(){return{current:null}},De.forwardRef=function(P){return{$$typeof:p,render:P}},De.isValidElement=D,De.lazy=function(P){return{$$typeof:v,_payload:{_status:-1,_result:P},_init:ce}},De.memo=function(P,ie){return{$$typeof:g,type:P,compare:ie===void 0?null:ie}},De.startTransition=function(P){var ie=ee.T,le={};ee.T=le;try{var oe=P(),ge=ee.S;ge!==null&&ge(le,oe),typeof oe=="object"&&oe!==null&&typeof oe.then=="function"&&oe.then(Te,me)}catch(Re){me(Re)}finally{ee.T=ie}},De.unstable_useCacheRefresh=function(){return ee.H.useCacheRefresh()},De.use=function(P){return ee.H.use(P)},De.useActionState=function(P,ie,le){return ee.H.useActionState(P,ie,le)},De.useCallback=function(P,ie){return ee.H.useCallback(P,ie)},De.useContext=function(P){return ee.H.useContext(P)},De.useDebugValue=function(){},De.useDeferredValue=function(P,ie){return ee.H.useDeferredValue(P,ie)},De.useEffect=function(P,ie,le){var oe=ee.H;if(typeof le=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return oe.useEffect(P,ie)},De.useId=function(){return ee.H.useId()},De.useImperativeHandle=function(P,ie,le){return ee.H.useImperativeHandle(P,ie,le)},De.useInsertionEffect=function(P,ie){return ee.H.useInsertionEffect(P,ie)},De.useLayoutEffect=function(P,ie){return ee.H.useLayoutEffect(P,ie)},De.useMemo=function(P,ie){return ee.H.useMemo(P,ie)},De.useOptimistic=function(P,ie){return ee.H.useOptimistic(P,ie)},De.useReducer=function(P,ie,le){return ee.H.useReducer(P,ie,le)},De.useRef=function(P){return ee.H.useRef(P)},De.useState=function(P){return ee.H.useState(P)},De.useSyncExternalStore=function(P,ie,le){return ee.H.useSyncExternalStore(P,ie,le)},De.useTransition=function(){return ee.H.useTransition()},De.version="19.1.0",De}var j0;function yg(){return j0||(j0=1,sm.exports=q1()),sm.exports}var j=yg();const Ro=Wb(j);var am={exports:{}},uu={},om={exports:{}},lm={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z0;function B1(){return z0||(z0=1,function(r){function e(J,ce){var me=J.length;J.push(ce);e:for(;0<me;){var Te=me-1>>>1,P=J[Te];if(0<o(P,ce))J[Te]=ce,J[me]=P,me=Te;else break e}}function t(J){return J.length===0?null:J[0]}function s(J){if(J.length===0)return null;var ce=J[0],me=J.pop();if(me!==ce){J[0]=me;e:for(var Te=0,P=J.length,ie=P>>>1;Te<ie;){var le=2*(Te+1)-1,oe=J[le],ge=le+1,Re=J[ge];if(0>o(oe,me))ge<P&&0>o(Re,oe)?(J[Te]=Re,J[ge]=me,Te=ge):(J[Te]=oe,J[le]=me,Te=le);else if(ge<P&&0>o(Re,me))J[Te]=Re,J[ge]=me,Te=ge;else break e}}return ce}function o(J,ce){var me=J.sortIndex-ce.sortIndex;return me!==0?me:J.id-ce.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var h=Date,p=h.now();r.unstable_now=function(){return h.now()-p}}var m=[],g=[],v=1,b=null,w=3,I=!1,C=!1,z=!1,U=!1,$=typeof setTimeout=="function"?setTimeout:null,Z=typeof clearTimeout=="function"?clearTimeout:null,Y=typeof setImmediate<"u"?setImmediate:null;function H(J){for(var ce=t(g);ce!==null;){if(ce.callback===null)s(g);else if(ce.startTime<=J)s(g),ce.sortIndex=ce.expirationTime,e(m,ce);else break;ce=t(g)}}function ee(J){if(z=!1,H(J),!C)if(t(m)!==null)C=!0,ue||(ue=!0,V());else{var ce=t(g);ce!==null&&je(ee,ce.startTime-J)}}var ue=!1,N=-1,x=5,D=-1;function k(){return U?!0:!(r.unstable_now()-D<x)}function M(){if(U=!1,ue){var J=r.unstable_now();D=J;var ce=!0;try{e:{C=!1,z&&(z=!1,Z(N),N=-1),I=!0;var me=w;try{t:{for(H(J),b=t(m);b!==null&&!(b.expirationTime>J&&k());){var Te=b.callback;if(typeof Te=="function"){b.callback=null,w=b.priorityLevel;var P=Te(b.expirationTime<=J);if(J=r.unstable_now(),typeof P=="function"){b.callback=P,H(J),ce=!0;break t}b===t(m)&&s(m),H(J)}else s(m);b=t(m)}if(b!==null)ce=!0;else{var ie=t(g);ie!==null&&je(ee,ie.startTime-J),ce=!1}}break e}finally{b=null,w=me,I=!1}ce=void 0}}finally{ce?V():ue=!1}}}var V;if(typeof Y=="function")V=function(){Y(M)};else if(typeof MessageChannel<"u"){var R=new MessageChannel,Ce=R.port2;R.port1.onmessage=M,V=function(){Ce.postMessage(null)}}else V=function(){$(M,0)};function je(J,ce){N=$(function(){J(r.unstable_now())},ce)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(J){J.callback=null},r.unstable_forceFrameRate=function(J){0>J||125<J?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):x=0<J?Math.floor(1e3/J):5},r.unstable_getCurrentPriorityLevel=function(){return w},r.unstable_next=function(J){switch(w){case 1:case 2:case 3:var ce=3;break;default:ce=w}var me=w;w=ce;try{return J()}finally{w=me}},r.unstable_requestPaint=function(){U=!0},r.unstable_runWithPriority=function(J,ce){switch(J){case 1:case 2:case 3:case 4:case 5:break;default:J=3}var me=w;w=J;try{return ce()}finally{w=me}},r.unstable_scheduleCallback=function(J,ce,me){var Te=r.unstable_now();switch(typeof me=="object"&&me!==null?(me=me.delay,me=typeof me=="number"&&0<me?Te+me:Te):me=Te,J){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=me+P,J={id:v++,callback:ce,priorityLevel:J,startTime:me,expirationTime:P,sortIndex:-1},me>Te?(J.sortIndex=me,e(g,J),t(m)===null&&J===t(g)&&(z?(Z(N),N=-1):z=!0,je(ee,me-Te))):(J.sortIndex=P,e(m,J),C||I||(C=!0,ue||(ue=!0,V()))),J},r.unstable_shouldYield=k,r.unstable_wrapCallback=function(J){var ce=w;return function(){var me=w;w=ce;try{return J.apply(this,arguments)}finally{w=me}}}}(lm)),lm}var q0;function H1(){return q0||(q0=1,om.exports=B1()),om.exports}var um={exports:{}},nn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B0;function F1(){if(B0)return nn;B0=1;var r=yg();function e(m){var g="https://react.dev/errors/"+m;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)g+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var s={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(m,g,v){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:b==null?null:""+b,children:m,containerInfo:g,implementation:v}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,g){if(m==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,nn.createPortal=function(m,g){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return u(m,g,null,v)},nn.flushSync=function(m){var g=h.T,v=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=g,s.p=v,s.d.f()}},nn.preconnect=function(m,g){typeof m=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(m,g))},nn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},nn.preinit=function(m,g){if(typeof m=="string"&&g&&typeof g.as=="string"){var v=g.as,b=p(v,g.crossOrigin),w=typeof g.integrity=="string"?g.integrity:void 0,I=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;v==="style"?s.d.S(m,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:b,integrity:w,fetchPriority:I}):v==="script"&&s.d.X(m,{crossOrigin:b,integrity:w,fetchPriority:I,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},nn.preinitModule=function(m,g){if(typeof m=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var v=p(g.as,g.crossOrigin);s.d.M(m,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&s.d.M(m)},nn.preload=function(m,g){if(typeof m=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var v=g.as,b=p(v,g.crossOrigin);s.d.L(m,v,{crossOrigin:b,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},nn.preloadModule=function(m,g){if(typeof m=="string")if(g){var v=p(g.as,g.crossOrigin);s.d.m(m,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else s.d.m(m)},nn.requestFormReset=function(m){s.d.r(m)},nn.unstable_batchedUpdates=function(m,g){return m(g)},nn.useFormState=function(m,g,v){return h.H.useFormState(m,g,v)},nn.useFormStatus=function(){return h.H.useHostTransitionStatus()},nn.version="19.1.0",nn}var H0;function $1(){if(H0)return um.exports;H0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),um.exports=F1(),um.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F0;function G1(){if(F0)return uu;F0=1;var r=H1(),e=yg(),t=$1();function s(n){var i="https://react.dev/errors/"+n;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function u(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function h(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function p(n){if(u(n)!==n)throw Error(s(188))}function m(n){var i=n.alternate;if(!i){if(i=u(n),i===null)throw Error(s(188));return i!==n?null:n}for(var a=n,l=i;;){var f=a.return;if(f===null)break;var d=f.alternate;if(d===null){if(l=f.return,l!==null){a=l;continue}break}if(f.child===d.child){for(d=f.child;d;){if(d===a)return p(f),n;if(d===l)return p(f),i;d=d.sibling}throw Error(s(188))}if(a.return!==l.return)a=f,l=d;else{for(var E=!1,T=f.child;T;){if(T===a){E=!0,a=f,l=d;break}if(T===l){E=!0,l=f,a=d;break}T=T.sibling}if(!E){for(T=d.child;T;){if(T===a){E=!0,a=d,l=f;break}if(T===l){E=!0,l=d,a=f;break}T=T.sibling}if(!E)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?n:i}function g(n){var i=n.tag;if(i===5||i===26||i===27||i===6)return n;for(n=n.child;n!==null;){if(i=g(n),i!==null)return i;n=n.sibling}return null}var v=Object.assign,b=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),I=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),z=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),$=Symbol.for("react.provider"),Z=Symbol.for("react.consumer"),Y=Symbol.for("react.context"),H=Symbol.for("react.forward_ref"),ee=Symbol.for("react.suspense"),ue=Symbol.for("react.suspense_list"),N=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),k=Symbol.for("react.memo_cache_sentinel"),M=Symbol.iterator;function V(n){return n===null||typeof n!="object"?null:(n=M&&n[M]||n["@@iterator"],typeof n=="function"?n:null)}var R=Symbol.for("react.client.reference");function Ce(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===R?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case C:return"Fragment";case U:return"Profiler";case z:return"StrictMode";case ee:return"Suspense";case ue:return"SuspenseList";case D:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case I:return"Portal";case Y:return(n.displayName||"Context")+".Provider";case Z:return(n._context.displayName||"Context")+".Consumer";case H:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case N:return i=n.displayName||null,i!==null?i:Ce(n.type)||"Memo";case x:i=n._payload,n=n._init;try{return Ce(n(i))}catch{}}return null}var je=Array.isArray,J=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ce=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,me={pending:!1,data:null,method:null,action:null},Te=[],P=-1;function ie(n){return{current:n}}function le(n){0>P||(n.current=Te[P],Te[P]=null,P--)}function oe(n,i){P++,Te[P]=n.current,n.current=i}var ge=ie(null),Re=ie(null),ye=ie(null),et=ie(null);function Fe(n,i){switch(oe(ye,i),oe(Re,n),oe(ge,null),i.nodeType){case 9:case 11:n=(n=i.documentElement)&&(n=n.namespaceURI)?c0(n):0;break;default:if(n=i.tagName,i=i.namespaceURI)i=c0(i),n=h0(i,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}le(ge),oe(ge,n)}function Vt(){le(ge),le(Re),le(ye)}function Mn(n){n.memoizedState!==null&&oe(et,n);var i=ge.current,a=h0(i,n.type);i!==a&&(oe(Re,n),oe(ge,a))}function mn(n){Re.current===n&&(le(ge),le(Re)),et.current===n&&(le(et),ru._currentValue=me)}var Zt=Object.prototype.hasOwnProperty,As=r.unstable_scheduleCallback,Rs=r.unstable_cancelCallback,el=r.unstable_shouldYield,Xu=r.unstable_requestPaint,Pn=r.unstable_now,id=r.unstable_getCurrentPriorityLevel,tl=r.unstable_ImmediatePriority,Ta=r.unstable_UserBlockingPriority,Is=r.unstable_NormalPriority,sd=r.unstable_LowPriority,wa=r.unstable_IdlePriority,nl=r.log,Wu=r.unstable_setDisableYieldValue,mt=null,We=null;function wn(n){if(typeof nl=="function"&&Wu(n),We&&typeof We.setStrictMode=="function")try{We.setStrictMode(mt,n)}catch{}}var en=Math.clz32?Math.clz32:xs,Ju=Math.log,ad=Math.LN2;function xs(n){return n>>>=0,n===0?32:31-(Ju(n)/ad|0)|0}var Cs=256,Ds=4194304;function Jn(n){var i=n&42;if(i!==0)return i;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function Sa(n,i,a){var l=n.pendingLanes;if(l===0)return 0;var f=0,d=n.suspendedLanes,E=n.pingedLanes;n=n.warmLanes;var T=l&134217727;return T!==0?(l=T&~d,l!==0?f=Jn(l):(E&=T,E!==0?f=Jn(E):a||(a=T&~n,a!==0&&(f=Jn(a))))):(T=l&~d,T!==0?f=Jn(T):E!==0?f=Jn(E):a||(a=l&~n,a!==0&&(f=Jn(a)))),f===0?0:i!==0&&i!==f&&(i&d)===0&&(d=f&-f,a=i&-i,d>=a||d===32&&(a&4194048)!==0)?i:f}function Ns(n,i){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&i)===0}function rl(n,i){switch(n){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function il(){var n=Cs;return Cs<<=1,(Cs&4194048)===0&&(Cs=256),n}function sl(){var n=Ds;return Ds<<=1,(Ds&62914560)===0&&(Ds=4194304),n}function Vr(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function Lr(n,i){n.pendingLanes|=i,i!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function al(n,i,a,l,f,d){var E=n.pendingLanes;n.pendingLanes=a,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=a,n.entangledLanes&=a,n.errorRecoveryDisabledLanes&=a,n.shellSuspendCounter=0;var T=n.entanglements,O=n.expirationTimes,G=n.hiddenUpdates;for(a=E&~a;0<a;){var te=31-en(a),se=1<<te;T[te]=0,O[te]=-1;var K=G[te];if(K!==null)for(G[te]=null,te=0;te<K.length;te++){var Q=K[te];Q!==null&&(Q.lane&=-536870913)}a&=~se}l!==0&&fr(n,l,0),d!==0&&f===0&&n.tag!==0&&(n.suspendedLanes|=d&~(E&~i))}function fr(n,i,a){n.pendingLanes|=i,n.suspendedLanes&=~i;var l=31-en(i);n.entangledLanes|=i,n.entanglements[l]=n.entanglements[l]|1073741824|a&4194090}function ol(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var l=31-en(a),f=1<<l;f&i|n[l]&i&&(n[l]|=i),a&=~f}}function wi(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function Aa(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function Si(){var n=ce.p;return n!==0?n:(n=window.event,n===void 0?32:D0(n.type))}function Zu(n,i){var a=ce.p;try{return ce.p=n,i()}finally{ce.p=a}}var ut=Math.random().toString(36).slice(2),Dt="__reactFiber$"+ut,Tt="__reactProps$"+ut,Vn="__reactContainer$"+ut,ll="__reactEvents$"+ut,od="__reactListeners$"+ut,Ai="__reactHandles$"+ut,ec="__reactResources$"+ut,ks="__reactMarker$"+ut;function Ri(n){delete n[Dt],delete n[Tt],delete n[ll],delete n[od],delete n[Ai]}function Ur(n){var i=n[Dt];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Vn]||a[Dt]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=m0(n);n!==null;){if(a=n[Dt])return a;n=m0(n)}return i}n=a,a=n.parentNode}return null}function dr(n){if(n=n[Dt]||n[Vn]){var i=n.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return n}return null}function pr(n){var i=n.tag;if(i===5||i===26||i===27||i===6)return n.stateNode;throw Error(s(33))}function un(n){var i=n[ec];return i||(i=n[ec]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function vt(n){n[ks]=!0}var ul=new Set,Ra={};function Zn(n,i){jr(n,i),jr(n+"Capture",i)}function jr(n,i){for(Ra[n]=i,n=0;n<i.length;n++)ul.add(i[n])}var tc=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),nc={},Os={};function rc(n){return Zt.call(Os,n)?!0:Zt.call(nc,n)?!1:tc.test(n)?Os[n]=!0:(nc[n]=!0,!1)}function Ii(n,i,a){if(rc(i))if(a===null)n.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":n.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){n.removeAttribute(i);return}}n.setAttribute(i,""+a)}}function mr(n,i,a){if(a===null)n.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(i);return}n.setAttribute(i,""+a)}}function $t(n,i,a,l){if(l===null)n.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(a);return}n.setAttributeNS(i,a,""+l)}}var Ms,ic;function zr(n){if(Ms===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);Ms=i&&i[1]||"",ic=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ms+n+ic}var Ia=!1;function xa(n,i){if(!n||Ia)return"";Ia=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var se=function(){throw Error()};if(Object.defineProperty(se.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(se,[])}catch(Q){var K=Q}Reflect.construct(n,[],se)}else{try{se.call()}catch(Q){K=Q}n.call(se.prototype)}}else{try{throw Error()}catch(Q){K=Q}(se=n())&&typeof se.catch=="function"&&se.catch(function(){})}}catch(Q){if(Q&&K&&typeof Q.stack=="string")return[Q.stack,K.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),E=d[0],T=d[1];if(E&&T){var O=E.split(`
`),G=T.split(`
`);for(f=l=0;l<O.length&&!O[l].includes("DetermineComponentFrameRoot");)l++;for(;f<G.length&&!G[f].includes("DetermineComponentFrameRoot");)f++;if(l===O.length||f===G.length)for(l=O.length-1,f=G.length-1;1<=l&&0<=f&&O[l]!==G[f];)f--;for(;1<=l&&0<=f;l--,f--)if(O[l]!==G[f]){if(l!==1||f!==1)do if(l--,f--,0>f||O[l]!==G[f]){var te=`
`+O[l].replace(" at new "," at ");return n.displayName&&te.includes("<anonymous>")&&(te=te.replace("<anonymous>",n.displayName)),te}while(1<=l&&0<=f);break}}}finally{Ia=!1,Error.prepareStackTrace=a}return(a=n?n.displayName||n.name:"")?zr(a):""}function cl(n){switch(n.tag){case 26:case 27:case 5:return zr(n.type);case 16:return zr("Lazy");case 13:return zr("Suspense");case 19:return zr("SuspenseList");case 0:case 15:return xa(n.type,!1);case 11:return xa(n.type.render,!1);case 1:return xa(n.type,!0);case 31:return zr("Activity");default:return""}}function Ca(n){try{var i="";do i+=cl(n),n=n.return;while(n);return i}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function cn(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function hl(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function ld(n){var i=hl(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),l=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,d=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return f.call(this)},set:function(E){l=""+E,d.call(this,E)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(E){l=""+E},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Da(n){n._valueTracker||(n._valueTracker=ld(n))}function fl(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return n&&(l=hl(n)?n.checked?"true":"false":n.value),n=l,n!==a?(i.setValue(n),!0):!1}function Ps(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var ud=/[\n"\\]/g;function wt(n){return n.replace(ud,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Sn(n,i,a,l,f,d,E,T){n.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?n.type=E:n.removeAttribute("type"),i!=null?E==="number"?(i===0&&n.value===""||n.value!=i)&&(n.value=""+cn(i)):n.value!==""+cn(i)&&(n.value=""+cn(i)):E!=="submit"&&E!=="reset"||n.removeAttribute("value"),i!=null?xi(n,E,cn(i)):a!=null?xi(n,E,cn(a)):l!=null&&n.removeAttribute("value"),f==null&&d!=null&&(n.defaultChecked=!!d),f!=null&&(n.checked=f&&typeof f!="function"&&typeof f!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?n.name=""+cn(T):n.removeAttribute("name")}function Vs(n,i,a,l,f,d,E,T){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(n.type=d),i!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||i!=null))return;a=a!=null?""+cn(a):"",i=i!=null?""+cn(i):a,T||i===n.value||(n.value=i),n.defaultValue=i}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,n.checked=T?n.checked:!!l,n.defaultChecked=!!l,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(n.name=E)}function xi(n,i,a){i==="number"&&Ps(n.ownerDocument)===n||n.defaultValue===""+a||(n.defaultValue=""+a)}function qr(n,i,a,l){if(n=n.options,i){i={};for(var f=0;f<a.length;f++)i["$"+a[f]]=!0;for(a=0;a<n.length;a++)f=i.hasOwnProperty("$"+n[a].value),n[a].selected!==f&&(n[a].selected=f),f&&l&&(n[a].defaultSelected=!0)}else{for(a=""+cn(a),i=null,f=0;f<n.length;f++){if(n[f].value===a){n[f].selected=!0,l&&(n[f].defaultSelected=!0);return}i!==null||n[f].disabled||(i=n[f])}i!==null&&(i.selected=!0)}}function tt(n,i,a){if(i!=null&&(i=""+cn(i),i!==n.value&&(n.value=i),a==null)){n.defaultValue!==i&&(n.defaultValue=i);return}n.defaultValue=a!=null?""+cn(a):""}function Ls(n,i,a,l){if(i==null){if(l!=null){if(a!=null)throw Error(s(92));if(je(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),i=a}a=cn(i),n.defaultValue=a,l=n.textContent,l===a&&l!==""&&l!==null&&(n.value=l)}function Ln(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Us=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function sc(n,i,a){var l=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?n.setProperty(i,""):i==="float"?n.cssFloat="":n[i]="":l?n.setProperty(i,a):typeof a!="number"||a===0||Us.has(i)?i==="float"?n.cssFloat=a:n[i]=(""+a).trim():n[i]=a+"px"}function dl(n,i,a){if(i!=null&&typeof i!="object")throw Error(s(62));if(n=n.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?n.setProperty(l,""):l==="float"?n.cssFloat="":n[l]="");for(var f in i)l=i[f],i.hasOwnProperty(f)&&a[f]!==l&&sc(n,f,l)}else for(var d in i)i.hasOwnProperty(d)&&sc(n,d,i[d])}function pl(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),hd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Na(n){return hd.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var Br=null;function Un(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Hr=null,Fr=null;function ml(n){var i=dr(n);if(i&&(n=i.stateNode)){var a=n[Tt]||null;e:switch(n=i.stateNode,i.type){case"input":if(Sn(n,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+wt(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==n&&l.form===n.form){var f=l[Tt]||null;if(!f)throw Error(s(90));Sn(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<a.length;i++)l=a[i],l.form===n.form&&fl(l)}break e;case"textarea":tt(n,a.value,a.defaultValue);break e;case"select":i=a.value,i!=null&&qr(n,!!a.multiple,i,!1)}}}var gr=!1;function ac(n,i,a){if(gr)return n(i,a);gr=!0;try{var l=n(i);return l}finally{if(gr=!1,(Hr!==null||Fr!==null)&&(Zc(),Hr&&(i=Hr,n=Fr,Fr=Hr=null,ml(i),n)))for(i=0;i<n.length;i++)ml(n[i])}}function js(n,i){var a=n.stateNode;if(a===null)return null;var l=a[Tt]||null;if(l===null)return null;a=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(n=n.type,l=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!l;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(s(231,i,typeof a));return a}var er=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),jn=!1;if(er)try{var zs={};Object.defineProperty(zs,"passive",{get:function(){jn=!0}}),window.addEventListener("test",zs,zs),window.removeEventListener("test",zs,zs)}catch{jn=!1}var yr=null,Ci=null,$r=null;function gl(){if($r)return $r;var n,i=Ci,a=i.length,l,f="value"in yr?yr.value:yr.textContent,d=f.length;for(n=0;n<a&&i[n]===f[n];n++);var E=a-n;for(l=1;l<=E&&i[a-l]===f[d-l];l++);return $r=f.slice(n,1<l?1-l:void 0)}function vr(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function _r(){return!0}function yl(){return!1}function Lt(n){function i(a,l,f,d,E){this._reactName=a,this._targetInst=f,this.type=l,this.nativeEvent=d,this.target=E,this.currentTarget=null;for(var T in n)n.hasOwnProperty(T)&&(a=n[T],this[T]=a?a(d):d[T]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?_r:yl,this.isPropagationStopped=yl,this}return v(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=_r)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=_r)},persist:function(){},isPersistent:_r}),i}var Ke={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ka=Lt(Ke),qs=v({},Ke,{view:0,detail:0}),oc=Lt(qs),Oa,Ma,Er,Bs=v({},qs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$s,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Er&&(Er&&n.type==="mousemove"?(Oa=n.screenX-Er.screenX,Ma=n.screenY-Er.screenY):Ma=Oa=0,Er=n),Oa)},movementY:function(n){return"movementY"in n?n.movementY:Ma}}),zn=Lt(Bs),lc=v({},Bs,{dataTransfer:0}),fd=Lt(lc),Hs=v({},qs,{relatedTarget:0}),Pa=Lt(Hs),vl=v({},Ke,{animationName:0,elapsedTime:0,pseudoElement:0}),Va=Lt(vl),uc=v({},Ke,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),La=Lt(uc),dd=v({},Ke,{data:0}),_l=Lt(dd),Fs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function El(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=hc[n])?!!i[n]:!1}function $s(){return El}var fc=v({},qs,{key:function(n){if(n.key){var i=Fs[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=vr(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?cc[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$s,charCode:function(n){return n.type==="keypress"?vr(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?vr(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Ua=Lt(fc),dc=v({},Bs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bl=Lt(dc),Gr=v({},qs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$s}),pc=Lt(Gr),mc=v({},Ke,{propertyName:0,elapsedTime:0,pseudoElement:0}),gc=Lt(mc),yc=v({},Bs,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),ja=Lt(yc),hn=v({},Ke,{newState:0,oldState:0}),vc=Lt(hn),_c=[9,13,27,32],br=er&&"CompositionEvent"in window,c=null;er&&"documentMode"in document&&(c=document.documentMode);var y=er&&"TextEvent"in window&&!c,_=er&&(!br||c&&8<c&&11>=c),A=" ",B=!1;function W(n,i){switch(n){case"keyup":return _c.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function he(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ze=!1;function Nt(n,i){switch(n){case"compositionend":return he(i);case"keypress":return i.which!==32?null:(B=!0,A);case"textInput":return n=i.data,n===A&&B?null:n;default:return null}}function qe(n,i){if(ze)return n==="compositionend"||!br&&W(n,i)?(n=gl(),$r=Ci=yr=null,ze=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return _&&i.locale!=="ko"?null:i.data;default:return null}}var Ut={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kt(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Ut[n.type]:i==="textarea"}function Kr(n,i,a,l){Hr?Fr?Fr.push(l):Fr=[l]:Hr=l,i=sh(i,"onChange"),0<i.length&&(a=new ka("onChange","change",null,a,l),n.push({event:a,listeners:i}))}var Gt=null,Tr=null;function Tl(n){s0(n,0)}function Ec(n){var i=pr(n);if(fl(i))return n}function Ry(n,i){if(n==="change")return i}var Iy=!1;if(er){var pd;if(er){var md="oninput"in document;if(!md){var xy=document.createElement("div");xy.setAttribute("oninput","return;"),md=typeof xy.oninput=="function"}pd=md}else pd=!1;Iy=pd&&(!document.documentMode||9<document.documentMode)}function Cy(){Gt&&(Gt.detachEvent("onpropertychange",Dy),Tr=Gt=null)}function Dy(n){if(n.propertyName==="value"&&Ec(Tr)){var i=[];Kr(i,Tr,n,Un(n)),ac(Tl,i)}}function mA(n,i,a){n==="focusin"?(Cy(),Gt=i,Tr=a,Gt.attachEvent("onpropertychange",Dy)):n==="focusout"&&Cy()}function gA(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ec(Tr)}function yA(n,i){if(n==="click")return Ec(i)}function vA(n,i){if(n==="input"||n==="change")return Ec(i)}function _A(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var An=typeof Object.is=="function"?Object.is:_A;function wl(n,i){if(An(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var f=a[l];if(!Zt.call(i,f)||!An(n[f],i[f]))return!1}return!0}function Ny(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function ky(n,i){var a=Ny(n);n=0;for(var l;a;){if(a.nodeType===3){if(l=n+a.textContent.length,n<=i&&l>=i)return{node:a,offset:i-n};n=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Ny(a)}}function Oy(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Oy(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function My(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var i=Ps(n.document);i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Ps(n.document)}return i}function gd(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}var EA=er&&"documentMode"in document&&11>=document.documentMode,za=null,yd=null,Sl=null,vd=!1;function Py(n,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;vd||za==null||za!==Ps(l)||(l=za,"selectionStart"in l&&gd(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Sl&&wl(Sl,l)||(Sl=l,l=sh(yd,"onSelect"),0<l.length&&(i=new ka("onSelect","select",null,i,a),n.push({event:i,listeners:l}),i.target=za)))}function Gs(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var qa={animationend:Gs("Animation","AnimationEnd"),animationiteration:Gs("Animation","AnimationIteration"),animationstart:Gs("Animation","AnimationStart"),transitionrun:Gs("Transition","TransitionRun"),transitionstart:Gs("Transition","TransitionStart"),transitioncancel:Gs("Transition","TransitionCancel"),transitionend:Gs("Transition","TransitionEnd")},_d={},Vy={};er&&(Vy=document.createElement("div").style,"AnimationEvent"in window||(delete qa.animationend.animation,delete qa.animationiteration.animation,delete qa.animationstart.animation),"TransitionEvent"in window||delete qa.transitionend.transition);function Ks(n){if(_d[n])return _d[n];if(!qa[n])return n;var i=qa[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Vy)return _d[n]=i[a];return n}var Ly=Ks("animationend"),Uy=Ks("animationiteration"),jy=Ks("animationstart"),bA=Ks("transitionrun"),TA=Ks("transitionstart"),wA=Ks("transitioncancel"),zy=Ks("transitionend"),qy=new Map,Ed="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ed.push("scrollEnd");function tr(n,i){qy.set(n,i),Zn(i,[n])}var By=new WeakMap;function qn(n,i){if(typeof n=="object"&&n!==null){var a=By.get(n);return a!==void 0?a:(i={value:n,source:i,stack:Ca(i)},By.set(n,i),i)}return{value:n,source:i,stack:Ca(i)}}var Bn=[],Ba=0,bd=0;function bc(){for(var n=Ba,i=bd=Ba=0;i<n;){var a=Bn[i];Bn[i++]=null;var l=Bn[i];Bn[i++]=null;var f=Bn[i];Bn[i++]=null;var d=Bn[i];if(Bn[i++]=null,l!==null&&f!==null){var E=l.pending;E===null?f.next=f:(f.next=E.next,E.next=f),l.pending=f}d!==0&&Hy(a,f,d)}}function Tc(n,i,a,l){Bn[Ba++]=n,Bn[Ba++]=i,Bn[Ba++]=a,Bn[Ba++]=l,bd|=l,n.lanes|=l,n=n.alternate,n!==null&&(n.lanes|=l)}function Td(n,i,a,l){return Tc(n,i,a,l),wc(n)}function Ha(n,i){return Tc(n,null,null,i),wc(n)}function Hy(n,i,a){n.lanes|=a;var l=n.alternate;l!==null&&(l.lanes|=a);for(var f=!1,d=n.return;d!==null;)d.childLanes|=a,l=d.alternate,l!==null&&(l.childLanes|=a),d.tag===22&&(n=d.stateNode,n===null||n._visibility&1||(f=!0)),n=d,d=d.return;return n.tag===3?(d=n.stateNode,f&&i!==null&&(f=31-en(a),n=d.hiddenUpdates,l=n[f],l===null?n[f]=[i]:l.push(i),i.lane=a|536870912),d):null}function wc(n){if(50<Yl)throw Yl=0,xp=null,Error(s(185));for(var i=n.return;i!==null;)n=i,i=n.return;return n.tag===3?n.stateNode:null}var Fa={};function SA(n,i,a,l){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rn(n,i,a,l){return new SA(n,i,a,l)}function wd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Qr(n,i){var a=n.alternate;return a===null?(a=Rn(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&65011712,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a.refCleanup=n.refCleanup,a}function Fy(n,i){n.flags&=65011714;var a=n.alternate;return a===null?(n.childLanes=0,n.lanes=i,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=a.childLanes,n.lanes=a.lanes,n.child=a.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=a.memoizedProps,n.memoizedState=a.memoizedState,n.updateQueue=a.updateQueue,n.type=a.type,i=a.dependencies,n.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),n}function Sc(n,i,a,l,f,d){var E=0;if(l=n,typeof n=="function")wd(n)&&(E=1);else if(typeof n=="string")E=R1(n,a,ge.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case D:return n=Rn(31,a,i,f),n.elementType=D,n.lanes=d,n;case C:return Qs(a.children,f,d,i);case z:E=8,f|=24;break;case U:return n=Rn(12,a,i,f|2),n.elementType=U,n.lanes=d,n;case ee:return n=Rn(13,a,i,f),n.elementType=ee,n.lanes=d,n;case ue:return n=Rn(19,a,i,f),n.elementType=ue,n.lanes=d,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case $:case Y:E=10;break e;case Z:E=9;break e;case H:E=11;break e;case N:E=14;break e;case x:E=16,l=null;break e}E=29,a=Error(s(130,n===null?"null":typeof n,"")),l=null}return i=Rn(E,a,i,f),i.elementType=n,i.type=l,i.lanes=d,i}function Qs(n,i,a,l){return n=Rn(7,n,l,i),n.lanes=a,n}function Sd(n,i,a){return n=Rn(6,n,null,i),n.lanes=a,n}function Ad(n,i,a){return i=Rn(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}var $a=[],Ga=0,Ac=null,Rc=0,Hn=[],Fn=0,Ys=null,Yr=1,Xr="";function Xs(n,i){$a[Ga++]=Rc,$a[Ga++]=Ac,Ac=n,Rc=i}function $y(n,i,a){Hn[Fn++]=Yr,Hn[Fn++]=Xr,Hn[Fn++]=Ys,Ys=n;var l=Yr;n=Xr;var f=32-en(l)-1;l&=~(1<<f),a+=1;var d=32-en(i)+f;if(30<d){var E=f-f%5;d=(l&(1<<E)-1).toString(32),l>>=E,f-=E,Yr=1<<32-en(i)+f|a<<f|l,Xr=d+n}else Yr=1<<d|a<<f|l,Xr=n}function Rd(n){n.return!==null&&(Xs(n,1),$y(n,1,0))}function Id(n){for(;n===Ac;)Ac=$a[--Ga],$a[Ga]=null,Rc=$a[--Ga],$a[Ga]=null;for(;n===Ys;)Ys=Hn[--Fn],Hn[Fn]=null,Xr=Hn[--Fn],Hn[Fn]=null,Yr=Hn[--Fn],Hn[Fn]=null}var fn=null,gt=null,Ge=!1,Ws=null,wr=!1,xd=Error(s(519));function Js(n){var i=Error(s(418,""));throw Il(qn(i,n)),xd}function Gy(n){var i=n.stateNode,a=n.type,l=n.memoizedProps;switch(i[Dt]=n,i[Tt]=l,a){case"dialog":Ve("cancel",i),Ve("close",i);break;case"iframe":case"object":case"embed":Ve("load",i);break;case"video":case"audio":for(a=0;a<Wl.length;a++)Ve(Wl[a],i);break;case"source":Ve("error",i);break;case"img":case"image":case"link":Ve("error",i),Ve("load",i);break;case"details":Ve("toggle",i);break;case"input":Ve("invalid",i),Vs(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),Da(i);break;case"select":Ve("invalid",i);break;case"textarea":Ve("invalid",i),Ls(i,l.value,l.defaultValue,l.children),Da(i)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||l.suppressHydrationWarning===!0||u0(i.textContent,a)?(l.popover!=null&&(Ve("beforetoggle",i),Ve("toggle",i)),l.onScroll!=null&&Ve("scroll",i),l.onScrollEnd!=null&&Ve("scrollend",i),l.onClick!=null&&(i.onclick=ah),i=!0):i=!1,i||Js(n)}function Ky(n){for(fn=n.return;fn;)switch(fn.tag){case 5:case 13:wr=!1;return;case 27:case 3:wr=!0;return;default:fn=fn.return}}function Al(n){if(n!==fn)return!1;if(!Ge)return Ky(n),Ge=!0,!1;var i=n.tag,a;if((a=i!==3&&i!==27)&&((a=i===5)&&(a=n.type,a=!(a!=="form"&&a!=="button")||Fp(n.type,n.memoizedProps)),a=!a),a&&gt&&Js(n),Ky(n),i===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(s(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8)if(a=n.data,a==="/$"){if(i===0){gt=rr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++;n=n.nextSibling}gt=null}}else i===27?(i=gt,$i(n.type)?(n=Qp,Qp=null,gt=n):gt=i):gt=fn?rr(n.stateNode.nextSibling):null;return!0}function Rl(){gt=fn=null,Ge=!1}function Qy(){var n=Ws;return n!==null&&(vn===null?vn=n:vn.push.apply(vn,n),Ws=null),n}function Il(n){Ws===null?Ws=[n]:Ws.push(n)}var Cd=ie(null),Zs=null,Wr=null;function Di(n,i,a){oe(Cd,i._currentValue),i._currentValue=a}function Jr(n){n._currentValue=Cd.current,le(Cd)}function Dd(n,i,a){for(;n!==null;){var l=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),n===a)break;n=n.return}}function Nd(n,i,a,l){var f=n.child;for(f!==null&&(f.return=n);f!==null;){var d=f.dependencies;if(d!==null){var E=f.child;d=d.firstContext;e:for(;d!==null;){var T=d;d=f;for(var O=0;O<i.length;O++)if(T.context===i[O]){d.lanes|=a,T=d.alternate,T!==null&&(T.lanes|=a),Dd(d.return,a,n),l||(E=null);break e}d=T.next}}else if(f.tag===18){if(E=f.return,E===null)throw Error(s(341));E.lanes|=a,d=E.alternate,d!==null&&(d.lanes|=a),Dd(E,a,n),E=null}else E=f.child;if(E!==null)E.return=f;else for(E=f;E!==null;){if(E===n){E=null;break}if(f=E.sibling,f!==null){f.return=E.return,E=f;break}E=E.return}f=E}}function xl(n,i,a,l){n=null;for(var f=i,d=!1;f!==null;){if(!d){if((f.flags&524288)!==0)d=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var E=f.alternate;if(E===null)throw Error(s(387));if(E=E.memoizedProps,E!==null){var T=f.type;An(f.pendingProps.value,E.value)||(n!==null?n.push(T):n=[T])}}else if(f===et.current){if(E=f.alternate,E===null)throw Error(s(387));E.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(n!==null?n.push(ru):n=[ru])}f=f.return}n!==null&&Nd(i,n,a,l),i.flags|=262144}function Ic(n){for(n=n.firstContext;n!==null;){if(!An(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function ea(n){Zs=n,Wr=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function tn(n){return Yy(Zs,n)}function xc(n,i){return Zs===null&&ea(n),Yy(n,i)}function Yy(n,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},Wr===null){if(n===null)throw Error(s(308));Wr=i,n.dependencies={lanes:0,firstContext:i},n.flags|=524288}else Wr=Wr.next=i;return a}var AA=typeof AbortController<"u"?AbortController:function(){var n=[],i=this.signal={aborted:!1,addEventListener:function(a,l){n.push(l)}};this.abort=function(){i.aborted=!0,n.forEach(function(a){return a()})}},RA=r.unstable_scheduleCallback,IA=r.unstable_NormalPriority,Ot={$$typeof:Y,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function kd(){return{controller:new AA,data:new Map,refCount:0}}function Cl(n){n.refCount--,n.refCount===0&&RA(IA,function(){n.controller.abort()})}var Dl=null,Od=0,Ka=0,Qa=null;function xA(n,i){if(Dl===null){var a=Dl=[];Od=0,Ka=Pp(),Qa={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Od++,i.then(Xy,Xy),i}function Xy(){if(--Od===0&&Dl!==null){Qa!==null&&(Qa.status="fulfilled");var n=Dl;Dl=null,Ka=0,Qa=null;for(var i=0;i<n.length;i++)(0,n[i])()}}function CA(n,i){var a=[],l={status:"pending",value:null,reason:null,then:function(f){a.push(f)}};return n.then(function(){l.status="fulfilled",l.value=i;for(var f=0;f<a.length;f++)(0,a[f])(i)},function(f){for(l.status="rejected",l.reason=f,f=0;f<a.length;f++)(0,a[f])(void 0)}),l}var Wy=J.S;J.S=function(n,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&xA(n,i),Wy!==null&&Wy(n,i)};var ta=ie(null);function Md(){var n=ta.current;return n!==null?n:at.pooledCache}function Cc(n,i){i===null?oe(ta,ta.current):oe(ta,i.pool)}function Jy(){var n=Md();return n===null?null:{parent:Ot._currentValue,pool:n}}var Nl=Error(s(460)),Zy=Error(s(474)),Dc=Error(s(542)),Pd={then:function(){}};function ev(n){return n=n.status,n==="fulfilled"||n==="rejected"}function Nc(){}function tv(n,i,a){switch(a=n[a],a===void 0?n.push(i):a!==i&&(i.then(Nc,Nc),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw n=i.reason,rv(n),n;default:if(typeof i.status=="string")i.then(Nc,Nc);else{if(n=at,n!==null&&100<n.shellSuspendCounter)throw Error(s(482));n=i,n.status="pending",n.then(function(l){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=l}},function(l){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw n=i.reason,rv(n),n}throw kl=i,Nl}}var kl=null;function nv(){if(kl===null)throw Error(s(459));var n=kl;return kl=null,n}function rv(n){if(n===Nl||n===Dc)throw Error(s(483))}var Ni=!1;function Vd(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ld(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function ki(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function Oi(n,i,a){var l=n.updateQueue;if(l===null)return null;if(l=l.shared,(Je&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,i=wc(n),Hy(n,null,a),i}return Tc(n,l,i,a),wc(n)}function Ol(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194048)!==0)){var l=i.lanes;l&=n.pendingLanes,a|=l,i.lanes=a,ol(n,a)}}function Ud(n,i){var a=n.updateQueue,l=n.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var f=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var E={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?f=d=E:d=d.next=E,a=a.next}while(a!==null);d===null?f=d=i:d=d.next=i}else f=d=i;a={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}var jd=!1;function Ml(){if(jd){var n=Qa;if(n!==null)throw n}}function Pl(n,i,a,l){jd=!1;var f=n.updateQueue;Ni=!1;var d=f.firstBaseUpdate,E=f.lastBaseUpdate,T=f.shared.pending;if(T!==null){f.shared.pending=null;var O=T,G=O.next;O.next=null,E===null?d=G:E.next=G,E=O;var te=n.alternate;te!==null&&(te=te.updateQueue,T=te.lastBaseUpdate,T!==E&&(T===null?te.firstBaseUpdate=G:T.next=G,te.lastBaseUpdate=O))}if(d!==null){var se=f.baseState;E=0,te=G=O=null,T=d;do{var K=T.lane&-536870913,Q=K!==T.lane;if(Q?(Be&K)===K:(l&K)===K){K!==0&&K===Ka&&(jd=!0),te!==null&&(te=te.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var Se=n,Ee=T;K=i;var it=a;switch(Ee.tag){case 1:if(Se=Ee.payload,typeof Se=="function"){se=Se.call(it,se,K);break e}se=Se;break e;case 3:Se.flags=Se.flags&-65537|128;case 0:if(Se=Ee.payload,K=typeof Se=="function"?Se.call(it,se,K):Se,K==null)break e;se=v({},se,K);break e;case 2:Ni=!0}}K=T.callback,K!==null&&(n.flags|=64,Q&&(n.flags|=8192),Q=f.callbacks,Q===null?f.callbacks=[K]:Q.push(K))}else Q={lane:K,tag:T.tag,payload:T.payload,callback:T.callback,next:null},te===null?(G=te=Q,O=se):te=te.next=Q,E|=K;if(T=T.next,T===null){if(T=f.shared.pending,T===null)break;Q=T,T=Q.next,Q.next=null,f.lastBaseUpdate=Q,f.shared.pending=null}}while(!0);te===null&&(O=se),f.baseState=O,f.firstBaseUpdate=G,f.lastBaseUpdate=te,d===null&&(f.shared.lanes=0),qi|=E,n.lanes=E,n.memoizedState=se}}function iv(n,i){if(typeof n!="function")throw Error(s(191,n));n.call(i)}function sv(n,i){var a=n.callbacks;if(a!==null)for(n.callbacks=null,n=0;n<a.length;n++)iv(a[n],i)}var Ya=ie(null),kc=ie(0);function av(n,i){n=si,oe(kc,n),oe(Ya,i),si=n|i.baseLanes}function zd(){oe(kc,si),oe(Ya,Ya.current)}function qd(){si=kc.current,le(Ya),le(kc)}var Mi=0,ke=null,nt=null,St=null,Oc=!1,Xa=!1,na=!1,Mc=0,Vl=0,Wa=null,DA=0;function _t(){throw Error(s(321))}function Bd(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!An(n[a],i[a]))return!1;return!0}function Hd(n,i,a,l,f,d){return Mi=d,ke=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,J.H=n===null||n.memoizedState===null?Hv:Fv,na=!1,d=a(l,f),na=!1,Xa&&(d=lv(i,a,l,f)),ov(n),d}function ov(n){J.H=zc;var i=nt!==null&&nt.next!==null;if(Mi=0,St=nt=ke=null,Oc=!1,Vl=0,Wa=null,i)throw Error(s(300));n===null||jt||(n=n.dependencies,n!==null&&Ic(n)&&(jt=!0))}function lv(n,i,a,l){ke=n;var f=0;do{if(Xa&&(Wa=null),Vl=0,Xa=!1,25<=f)throw Error(s(301));if(f+=1,St=nt=null,n.updateQueue!=null){var d=n.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}J.H=LA,d=i(a,l)}while(Xa);return d}function NA(){var n=J.H,i=n.useState()[0];return i=typeof i.then=="function"?Ll(i):i,n=n.useState()[0],(nt!==null?nt.memoizedState:null)!==n&&(ke.flags|=1024),i}function Fd(){var n=Mc!==0;return Mc=0,n}function $d(n,i,a){i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~a}function Gd(n){if(Oc){for(n=n.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}Oc=!1}Mi=0,St=nt=ke=null,Xa=!1,Vl=Mc=0,Wa=null}function gn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return St===null?ke.memoizedState=St=n:St=St.next=n,St}function At(){if(nt===null){var n=ke.alternate;n=n!==null?n.memoizedState:null}else n=nt.next;var i=St===null?ke.memoizedState:St.next;if(i!==null)St=i,nt=n;else{if(n===null)throw ke.alternate===null?Error(s(467)):Error(s(310));nt=n,n={memoizedState:nt.memoizedState,baseState:nt.baseState,baseQueue:nt.baseQueue,queue:nt.queue,next:null},St===null?ke.memoizedState=St=n:St=St.next=n}return St}function Kd(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ll(n){var i=Vl;return Vl+=1,Wa===null&&(Wa=[]),n=tv(Wa,n,i),i=ke,(St===null?i.memoizedState:St.next)===null&&(i=i.alternate,J.H=i===null||i.memoizedState===null?Hv:Fv),n}function Pc(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return Ll(n);if(n.$$typeof===Y)return tn(n)}throw Error(s(438,String(n)))}function Qd(n){var i=null,a=ke.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var l=ke.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=Kd(),ke.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(n),l=0;l<n;l++)a[l]=k;return i.index++,a}function Zr(n,i){return typeof i=="function"?i(n):i}function Vc(n){var i=At();return Yd(i,nt,n)}function Yd(n,i,a){var l=n.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var f=n.baseQueue,d=l.pending;if(d!==null){if(f!==null){var E=f.next;f.next=d.next,d.next=E}i.baseQueue=f=d,l.pending=null}if(d=n.baseState,f===null)n.memoizedState=d;else{i=f.next;var T=E=null,O=null,G=i,te=!1;do{var se=G.lane&-536870913;if(se!==G.lane?(Be&se)===se:(Mi&se)===se){var K=G.revertLane;if(K===0)O!==null&&(O=O.next={lane:0,revertLane:0,action:G.action,hasEagerState:G.hasEagerState,eagerState:G.eagerState,next:null}),se===Ka&&(te=!0);else if((Mi&K)===K){G=G.next,K===Ka&&(te=!0);continue}else se={lane:0,revertLane:G.revertLane,action:G.action,hasEagerState:G.hasEagerState,eagerState:G.eagerState,next:null},O===null?(T=O=se,E=d):O=O.next=se,ke.lanes|=K,qi|=K;se=G.action,na&&a(d,se),d=G.hasEagerState?G.eagerState:a(d,se)}else K={lane:se,revertLane:G.revertLane,action:G.action,hasEagerState:G.hasEagerState,eagerState:G.eagerState,next:null},O===null?(T=O=K,E=d):O=O.next=K,ke.lanes|=se,qi|=se;G=G.next}while(G!==null&&G!==i);if(O===null?E=d:O.next=T,!An(d,n.memoizedState)&&(jt=!0,te&&(a=Qa,a!==null)))throw a;n.memoizedState=d,n.baseState=E,n.baseQueue=O,l.lastRenderedState=d}return f===null&&(l.lanes=0),[n.memoizedState,l.dispatch]}function Xd(n){var i=At(),a=i.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=n;var l=a.dispatch,f=a.pending,d=i.memoizedState;if(f!==null){a.pending=null;var E=f=f.next;do d=n(d,E.action),E=E.next;while(E!==f);An(d,i.memoizedState)||(jt=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),a.lastRenderedState=d}return[d,l]}function uv(n,i,a){var l=ke,f=At(),d=Ge;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=i();var E=!An((nt||f).memoizedState,a);E&&(f.memoizedState=a,jt=!0),f=f.queue;var T=fv.bind(null,l,f,n);if(Ul(2048,8,T,[n]),f.getSnapshot!==i||E||St!==null&&St.memoizedState.tag&1){if(l.flags|=2048,Ja(9,Lc(),hv.bind(null,l,f,a,i),null),at===null)throw Error(s(349));d||(Mi&124)!==0||cv(l,i,a)}return a}function cv(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=ke.updateQueue,i===null?(i=Kd(),ke.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function hv(n,i,a,l){i.value=a,i.getSnapshot=l,dv(i)&&pv(n)}function fv(n,i,a){return a(function(){dv(i)&&pv(n)})}function dv(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!An(n,a)}catch{return!0}}function pv(n){var i=Ha(n,2);i!==null&&Nn(i,n,2)}function Wd(n){var i=gn();if(typeof n=="function"){var a=n;if(n=a(),na){wn(!0);try{a()}finally{wn(!1)}}}return i.memoizedState=i.baseState=n,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zr,lastRenderedState:n},i}function mv(n,i,a,l){return n.baseState=a,Yd(n,nt,typeof l=="function"?l:Zr)}function kA(n,i,a,l,f){if(jc(n))throw Error(s(485));if(n=i.action,n!==null){var d={payload:f,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){d.listeners.push(E)}};J.T!==null?a(!0):d.isTransition=!1,l(d),a=i.pending,a===null?(d.next=i.pending=d,gv(i,d)):(d.next=a.next,i.pending=a.next=d)}}function gv(n,i){var a=i.action,l=i.payload,f=n.state;if(i.isTransition){var d=J.T,E={};J.T=E;try{var T=a(f,l),O=J.S;O!==null&&O(E,T),yv(n,i,T)}catch(G){Jd(n,i,G)}finally{J.T=d}}else try{d=a(f,l),yv(n,i,d)}catch(G){Jd(n,i,G)}}function yv(n,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){vv(n,i,l)},function(l){return Jd(n,i,l)}):vv(n,i,a)}function vv(n,i,a){i.status="fulfilled",i.value=a,_v(i),n.state=a,i=n.pending,i!==null&&(a=i.next,a===i?n.pending=null:(a=a.next,i.next=a,gv(n,a)))}function Jd(n,i,a){var l=n.pending;if(n.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=a,_v(i),i=i.next;while(i!==l)}n.action=null}function _v(n){n=n.listeners;for(var i=0;i<n.length;i++)(0,n[i])()}function Ev(n,i){return i}function bv(n,i){if(Ge){var a=at.formState;if(a!==null){e:{var l=ke;if(Ge){if(gt){t:{for(var f=gt,d=wr;f.nodeType!==8;){if(!d){f=null;break t}if(f=rr(f.nextSibling),f===null){f=null;break t}}d=f.data,f=d==="F!"||d==="F"?f:null}if(f){gt=rr(f.nextSibling),l=f.data==="F!";break e}}Js(l)}l=!1}l&&(i=a[0])}}return a=gn(),a.memoizedState=a.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ev,lastRenderedState:i},a.queue=l,a=zv.bind(null,ke,l),l.dispatch=a,l=Wd(!1),d=rp.bind(null,ke,!1,l.queue),l=gn(),f={state:i,dispatch:null,action:n,pending:null},l.queue=f,a=kA.bind(null,ke,f,d,a),f.dispatch=a,l.memoizedState=n,[i,a,!1]}function Tv(n){var i=At();return wv(i,nt,n)}function wv(n,i,a){if(i=Yd(n,i,Ev)[0],n=Vc(Zr)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=Ll(i)}catch(E){throw E===Nl?Dc:E}else l=i;i=At();var f=i.queue,d=f.dispatch;return a!==i.memoizedState&&(ke.flags|=2048,Ja(9,Lc(),OA.bind(null,f,a),null)),[l,d,n]}function OA(n,i){n.action=i}function Sv(n){var i=At(),a=nt;if(a!==null)return wv(i,a,n);At(),i=i.memoizedState,a=At();var l=a.queue.dispatch;return a.memoizedState=n,[i,l,!1]}function Ja(n,i,a,l){return n={tag:n,create:a,deps:l,inst:i,next:null},i=ke.updateQueue,i===null&&(i=Kd(),ke.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=n.next=n:(l=a.next,a.next=n,n.next=l,i.lastEffect=n),n}function Lc(){return{destroy:void 0,resource:void 0}}function Av(){return At().memoizedState}function Uc(n,i,a,l){var f=gn();l=l===void 0?null:l,ke.flags|=n,f.memoizedState=Ja(1|i,Lc(),a,l)}function Ul(n,i,a,l){var f=At();l=l===void 0?null:l;var d=f.memoizedState.inst;nt!==null&&l!==null&&Bd(l,nt.memoizedState.deps)?f.memoizedState=Ja(i,d,a,l):(ke.flags|=n,f.memoizedState=Ja(1|i,d,a,l))}function Rv(n,i){Uc(8390656,8,n,i)}function Iv(n,i){Ul(2048,8,n,i)}function xv(n,i){return Ul(4,2,n,i)}function Cv(n,i){return Ul(4,4,n,i)}function Dv(n,i){if(typeof i=="function"){n=n();var a=i(n);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Nv(n,i,a){a=a!=null?a.concat([n]):null,Ul(4,4,Dv.bind(null,i,n),a)}function Zd(){}function kv(n,i){var a=At();i=i===void 0?null:i;var l=a.memoizedState;return i!==null&&Bd(i,l[1])?l[0]:(a.memoizedState=[n,i],n)}function Ov(n,i){var a=At();i=i===void 0?null:i;var l=a.memoizedState;if(i!==null&&Bd(i,l[1]))return l[0];if(l=n(),na){wn(!0);try{n()}finally{wn(!1)}}return a.memoizedState=[l,i],l}function ep(n,i,a){return a===void 0||(Mi&1073741824)!==0?n.memoizedState=i:(n.memoizedState=a,n=V_(),ke.lanes|=n,qi|=n,a)}function Mv(n,i,a,l){return An(a,i)?a:Ya.current!==null?(n=ep(n,a,l),An(n,i)||(jt=!0),n):(Mi&42)===0?(jt=!0,n.memoizedState=a):(n=V_(),ke.lanes|=n,qi|=n,i)}function Pv(n,i,a,l,f){var d=ce.p;ce.p=d!==0&&8>d?d:8;var E=J.T,T={};J.T=T,rp(n,!1,i,a);try{var O=f(),G=J.S;if(G!==null&&G(T,O),O!==null&&typeof O=="object"&&typeof O.then=="function"){var te=CA(O,l);jl(n,i,te,Dn(n))}else jl(n,i,l,Dn(n))}catch(se){jl(n,i,{then:function(){},status:"rejected",reason:se},Dn())}finally{ce.p=d,J.T=E}}function MA(){}function tp(n,i,a,l){if(n.tag!==5)throw Error(s(476));var f=Vv(n).queue;Pv(n,f,i,me,a===null?MA:function(){return Lv(n),a(l)})}function Vv(n){var i=n.memoizedState;if(i!==null)return i;i={memoizedState:me,baseState:me,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zr,lastRenderedState:me},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zr,lastRenderedState:a},next:null},n.memoizedState=i,n=n.alternate,n!==null&&(n.memoizedState=i),i}function Lv(n){var i=Vv(n).next.queue;jl(n,i,{},Dn())}function np(){return tn(ru)}function Uv(){return At().memoizedState}function jv(){return At().memoizedState}function PA(n){for(var i=n.return;i!==null;){switch(i.tag){case 24:case 3:var a=Dn();n=ki(a);var l=Oi(i,n,a);l!==null&&(Nn(l,i,a),Ol(l,i,a)),i={cache:kd()},n.payload=i;return}i=i.return}}function VA(n,i,a){var l=Dn();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},jc(n)?qv(i,a):(a=Td(n,i,a,l),a!==null&&(Nn(a,n,l),Bv(a,i,l)))}function zv(n,i,a){var l=Dn();jl(n,i,a,l)}function jl(n,i,a,l){var f={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(jc(n))qv(i,f);else{var d=n.alternate;if(n.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var E=i.lastRenderedState,T=d(E,a);if(f.hasEagerState=!0,f.eagerState=T,An(T,E))return Tc(n,i,f,0),at===null&&bc(),!1}catch{}finally{}if(a=Td(n,i,f,l),a!==null)return Nn(a,n,l),Bv(a,i,l),!0}return!1}function rp(n,i,a,l){if(l={lane:2,revertLane:Pp(),action:l,hasEagerState:!1,eagerState:null,next:null},jc(n)){if(i)throw Error(s(479))}else i=Td(n,a,l,2),i!==null&&Nn(i,n,2)}function jc(n){var i=n.alternate;return n===ke||i!==null&&i===ke}function qv(n,i){Xa=Oc=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Bv(n,i,a){if((a&4194048)!==0){var l=i.lanes;l&=n.pendingLanes,a|=l,i.lanes=a,ol(n,a)}}var zc={readContext:tn,use:Pc,useCallback:_t,useContext:_t,useEffect:_t,useImperativeHandle:_t,useLayoutEffect:_t,useInsertionEffect:_t,useMemo:_t,useReducer:_t,useRef:_t,useState:_t,useDebugValue:_t,useDeferredValue:_t,useTransition:_t,useSyncExternalStore:_t,useId:_t,useHostTransitionStatus:_t,useFormState:_t,useActionState:_t,useOptimistic:_t,useMemoCache:_t,useCacheRefresh:_t},Hv={readContext:tn,use:Pc,useCallback:function(n,i){return gn().memoizedState=[n,i===void 0?null:i],n},useContext:tn,useEffect:Rv,useImperativeHandle:function(n,i,a){a=a!=null?a.concat([n]):null,Uc(4194308,4,Dv.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Uc(4194308,4,n,i)},useInsertionEffect:function(n,i){Uc(4,2,n,i)},useMemo:function(n,i){var a=gn();i=i===void 0?null:i;var l=n();if(na){wn(!0);try{n()}finally{wn(!1)}}return a.memoizedState=[l,i],l},useReducer:function(n,i,a){var l=gn();if(a!==void 0){var f=a(i);if(na){wn(!0);try{a(i)}finally{wn(!1)}}}else f=i;return l.memoizedState=l.baseState=f,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:f},l.queue=n,n=n.dispatch=VA.bind(null,ke,n),[l.memoizedState,n]},useRef:function(n){var i=gn();return n={current:n},i.memoizedState=n},useState:function(n){n=Wd(n);var i=n.queue,a=zv.bind(null,ke,i);return i.dispatch=a,[n.memoizedState,a]},useDebugValue:Zd,useDeferredValue:function(n,i){var a=gn();return ep(a,n,i)},useTransition:function(){var n=Wd(!1);return n=Pv.bind(null,ke,n.queue,!0,!1),gn().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,i,a){var l=ke,f=gn();if(Ge){if(a===void 0)throw Error(s(407));a=a()}else{if(a=i(),at===null)throw Error(s(349));(Be&124)!==0||cv(l,i,a)}f.memoizedState=a;var d={value:a,getSnapshot:i};return f.queue=d,Rv(fv.bind(null,l,d,n),[n]),l.flags|=2048,Ja(9,Lc(),hv.bind(null,l,d,a,i),null),a},useId:function(){var n=gn(),i=at.identifierPrefix;if(Ge){var a=Xr,l=Yr;a=(l&~(1<<32-en(l)-1)).toString(32)+a,i="«"+i+"R"+a,a=Mc++,0<a&&(i+="H"+a.toString(32)),i+="»"}else a=DA++,i="«"+i+"r"+a.toString(32)+"»";return n.memoizedState=i},useHostTransitionStatus:np,useFormState:bv,useActionState:bv,useOptimistic:function(n){var i=gn();i.memoizedState=i.baseState=n;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=rp.bind(null,ke,!0,a),a.dispatch=i,[n,i]},useMemoCache:Qd,useCacheRefresh:function(){return gn().memoizedState=PA.bind(null,ke)}},Fv={readContext:tn,use:Pc,useCallback:kv,useContext:tn,useEffect:Iv,useImperativeHandle:Nv,useInsertionEffect:xv,useLayoutEffect:Cv,useMemo:Ov,useReducer:Vc,useRef:Av,useState:function(){return Vc(Zr)},useDebugValue:Zd,useDeferredValue:function(n,i){var a=At();return Mv(a,nt.memoizedState,n,i)},useTransition:function(){var n=Vc(Zr)[0],i=At().memoizedState;return[typeof n=="boolean"?n:Ll(n),i]},useSyncExternalStore:uv,useId:Uv,useHostTransitionStatus:np,useFormState:Tv,useActionState:Tv,useOptimistic:function(n,i){var a=At();return mv(a,nt,n,i)},useMemoCache:Qd,useCacheRefresh:jv},LA={readContext:tn,use:Pc,useCallback:kv,useContext:tn,useEffect:Iv,useImperativeHandle:Nv,useInsertionEffect:xv,useLayoutEffect:Cv,useMemo:Ov,useReducer:Xd,useRef:Av,useState:function(){return Xd(Zr)},useDebugValue:Zd,useDeferredValue:function(n,i){var a=At();return nt===null?ep(a,n,i):Mv(a,nt.memoizedState,n,i)},useTransition:function(){var n=Xd(Zr)[0],i=At().memoizedState;return[typeof n=="boolean"?n:Ll(n),i]},useSyncExternalStore:uv,useId:Uv,useHostTransitionStatus:np,useFormState:Sv,useActionState:Sv,useOptimistic:function(n,i){var a=At();return nt!==null?mv(a,nt,n,i):(a.baseState=n,[n,a.queue.dispatch])},useMemoCache:Qd,useCacheRefresh:jv},Za=null,zl=0;function qc(n){var i=zl;return zl+=1,Za===null&&(Za=[]),tv(Za,n,i)}function ql(n,i){i=i.props.ref,n.ref=i!==void 0?i:null}function Bc(n,i){throw i.$$typeof===b?Error(s(525)):(n=Object.prototype.toString.call(i),Error(s(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n)))}function $v(n){var i=n._init;return i(n._payload)}function Gv(n){function i(q,L){if(n){var F=q.deletions;F===null?(q.deletions=[L],q.flags|=16):F.push(L)}}function a(q,L){if(!n)return null;for(;L!==null;)i(q,L),L=L.sibling;return null}function l(q){for(var L=new Map;q!==null;)q.key!==null?L.set(q.key,q):L.set(q.index,q),q=q.sibling;return L}function f(q,L){return q=Qr(q,L),q.index=0,q.sibling=null,q}function d(q,L,F){return q.index=F,n?(F=q.alternate,F!==null?(F=F.index,F<L?(q.flags|=67108866,L):F):(q.flags|=67108866,L)):(q.flags|=1048576,L)}function E(q){return n&&q.alternate===null&&(q.flags|=67108866),q}function T(q,L,F,ne){return L===null||L.tag!==6?(L=Sd(F,q.mode,ne),L.return=q,L):(L=f(L,F),L.return=q,L)}function O(q,L,F,ne){var pe=F.type;return pe===C?te(q,L,F.props.children,ne,F.key):L!==null&&(L.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===x&&$v(pe)===L.type)?(L=f(L,F.props),ql(L,F),L.return=q,L):(L=Sc(F.type,F.key,F.props,null,q.mode,ne),ql(L,F),L.return=q,L)}function G(q,L,F,ne){return L===null||L.tag!==4||L.stateNode.containerInfo!==F.containerInfo||L.stateNode.implementation!==F.implementation?(L=Ad(F,q.mode,ne),L.return=q,L):(L=f(L,F.children||[]),L.return=q,L)}function te(q,L,F,ne,pe){return L===null||L.tag!==7?(L=Qs(F,q.mode,ne,pe),L.return=q,L):(L=f(L,F),L.return=q,L)}function se(q,L,F){if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return L=Sd(""+L,q.mode,F),L.return=q,L;if(typeof L=="object"&&L!==null){switch(L.$$typeof){case w:return F=Sc(L.type,L.key,L.props,null,q.mode,F),ql(F,L),F.return=q,F;case I:return L=Ad(L,q.mode,F),L.return=q,L;case x:var ne=L._init;return L=ne(L._payload),se(q,L,F)}if(je(L)||V(L))return L=Qs(L,q.mode,F,null),L.return=q,L;if(typeof L.then=="function")return se(q,qc(L),F);if(L.$$typeof===Y)return se(q,xc(q,L),F);Bc(q,L)}return null}function K(q,L,F,ne){var pe=L!==null?L.key:null;if(typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint")return pe!==null?null:T(q,L,""+F,ne);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case w:return F.key===pe?O(q,L,F,ne):null;case I:return F.key===pe?G(q,L,F,ne):null;case x:return pe=F._init,F=pe(F._payload),K(q,L,F,ne)}if(je(F)||V(F))return pe!==null?null:te(q,L,F,ne,null);if(typeof F.then=="function")return K(q,L,qc(F),ne);if(F.$$typeof===Y)return K(q,L,xc(q,F),ne);Bc(q,F)}return null}function Q(q,L,F,ne,pe){if(typeof ne=="string"&&ne!==""||typeof ne=="number"||typeof ne=="bigint")return q=q.get(F)||null,T(L,q,""+ne,pe);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case w:return q=q.get(ne.key===null?F:ne.key)||null,O(L,q,ne,pe);case I:return q=q.get(ne.key===null?F:ne.key)||null,G(L,q,ne,pe);case x:var Me=ne._init;return ne=Me(ne._payload),Q(q,L,F,ne,pe)}if(je(ne)||V(ne))return q=q.get(F)||null,te(L,q,ne,pe,null);if(typeof ne.then=="function")return Q(q,L,F,qc(ne),pe);if(ne.$$typeof===Y)return Q(q,L,F,xc(L,ne),pe);Bc(L,ne)}return null}function Se(q,L,F,ne){for(var pe=null,Me=null,ve=L,be=L=0,qt=null;ve!==null&&be<F.length;be++){ve.index>be?(qt=ve,ve=null):qt=ve.sibling;var $e=K(q,ve,F[be],ne);if($e===null){ve===null&&(ve=qt);break}n&&ve&&$e.alternate===null&&i(q,ve),L=d($e,L,be),Me===null?pe=$e:Me.sibling=$e,Me=$e,ve=qt}if(be===F.length)return a(q,ve),Ge&&Xs(q,be),pe;if(ve===null){for(;be<F.length;be++)ve=se(q,F[be],ne),ve!==null&&(L=d(ve,L,be),Me===null?pe=ve:Me.sibling=ve,Me=ve);return Ge&&Xs(q,be),pe}for(ve=l(ve);be<F.length;be++)qt=Q(ve,q,be,F[be],ne),qt!==null&&(n&&qt.alternate!==null&&ve.delete(qt.key===null?be:qt.key),L=d(qt,L,be),Me===null?pe=qt:Me.sibling=qt,Me=qt);return n&&ve.forEach(function(Xi){return i(q,Xi)}),Ge&&Xs(q,be),pe}function Ee(q,L,F,ne){if(F==null)throw Error(s(151));for(var pe=null,Me=null,ve=L,be=L=0,qt=null,$e=F.next();ve!==null&&!$e.done;be++,$e=F.next()){ve.index>be?(qt=ve,ve=null):qt=ve.sibling;var Xi=K(q,ve,$e.value,ne);if(Xi===null){ve===null&&(ve=qt);break}n&&ve&&Xi.alternate===null&&i(q,ve),L=d(Xi,L,be),Me===null?pe=Xi:Me.sibling=Xi,Me=Xi,ve=qt}if($e.done)return a(q,ve),Ge&&Xs(q,be),pe;if(ve===null){for(;!$e.done;be++,$e=F.next())$e=se(q,$e.value,ne),$e!==null&&(L=d($e,L,be),Me===null?pe=$e:Me.sibling=$e,Me=$e);return Ge&&Xs(q,be),pe}for(ve=l(ve);!$e.done;be++,$e=F.next())$e=Q(ve,q,be,$e.value,ne),$e!==null&&(n&&$e.alternate!==null&&ve.delete($e.key===null?be:$e.key),L=d($e,L,be),Me===null?pe=$e:Me.sibling=$e,Me=$e);return n&&ve.forEach(function(U1){return i(q,U1)}),Ge&&Xs(q,be),pe}function it(q,L,F,ne){if(typeof F=="object"&&F!==null&&F.type===C&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case w:e:{for(var pe=F.key;L!==null;){if(L.key===pe){if(pe=F.type,pe===C){if(L.tag===7){a(q,L.sibling),ne=f(L,F.props.children),ne.return=q,q=ne;break e}}else if(L.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===x&&$v(pe)===L.type){a(q,L.sibling),ne=f(L,F.props),ql(ne,F),ne.return=q,q=ne;break e}a(q,L);break}else i(q,L);L=L.sibling}F.type===C?(ne=Qs(F.props.children,q.mode,ne,F.key),ne.return=q,q=ne):(ne=Sc(F.type,F.key,F.props,null,q.mode,ne),ql(ne,F),ne.return=q,q=ne)}return E(q);case I:e:{for(pe=F.key;L!==null;){if(L.key===pe)if(L.tag===4&&L.stateNode.containerInfo===F.containerInfo&&L.stateNode.implementation===F.implementation){a(q,L.sibling),ne=f(L,F.children||[]),ne.return=q,q=ne;break e}else{a(q,L);break}else i(q,L);L=L.sibling}ne=Ad(F,q.mode,ne),ne.return=q,q=ne}return E(q);case x:return pe=F._init,F=pe(F._payload),it(q,L,F,ne)}if(je(F))return Se(q,L,F,ne);if(V(F)){if(pe=V(F),typeof pe!="function")throw Error(s(150));return F=pe.call(F),Ee(q,L,F,ne)}if(typeof F.then=="function")return it(q,L,qc(F),ne);if(F.$$typeof===Y)return it(q,L,xc(q,F),ne);Bc(q,F)}return typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint"?(F=""+F,L!==null&&L.tag===6?(a(q,L.sibling),ne=f(L,F),ne.return=q,q=ne):(a(q,L),ne=Sd(F,q.mode,ne),ne.return=q,q=ne),E(q)):a(q,L)}return function(q,L,F,ne){try{zl=0;var pe=it(q,L,F,ne);return Za=null,pe}catch(ve){if(ve===Nl||ve===Dc)throw ve;var Me=Rn(29,ve,null,q.mode);return Me.lanes=ne,Me.return=q,Me}finally{}}}var eo=Gv(!0),Kv=Gv(!1),$n=ie(null),Sr=null;function Pi(n){var i=n.alternate;oe(Mt,Mt.current&1),oe($n,n),Sr===null&&(i===null||Ya.current!==null||i.memoizedState!==null)&&(Sr=n)}function Qv(n){if(n.tag===22){if(oe(Mt,Mt.current),oe($n,n),Sr===null){var i=n.alternate;i!==null&&i.memoizedState!==null&&(Sr=n)}}else Vi()}function Vi(){oe(Mt,Mt.current),oe($n,$n.current)}function ei(n){le($n),Sr===n&&(Sr=null),le(Mt)}var Mt=ie(0);function Hc(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Kp(a)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function ip(n,i,a,l){i=n.memoizedState,a=a(l,i),a=a==null?i:v({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var sp={enqueueSetState:function(n,i,a){n=n._reactInternals;var l=Dn(),f=ki(l);f.payload=i,a!=null&&(f.callback=a),i=Oi(n,f,l),i!==null&&(Nn(i,n,l),Ol(i,n,l))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var l=Dn(),f=ki(l);f.tag=1,f.payload=i,a!=null&&(f.callback=a),i=Oi(n,f,l),i!==null&&(Nn(i,n,l),Ol(i,n,l))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Dn(),l=ki(a);l.tag=2,i!=null&&(l.callback=i),i=Oi(n,l,a),i!==null&&(Nn(i,n,a),Ol(i,n,a))}};function Yv(n,i,a,l,f,d,E){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(l,d,E):i.prototype&&i.prototype.isPureReactComponent?!wl(a,l)||!wl(f,d):!0}function Xv(n,i,a,l){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==n&&sp.enqueueReplaceState(i,i.state,null)}function ra(n,i){var a=i;if("ref"in i){a={};for(var l in i)l!=="ref"&&(a[l]=i[l])}if(n=n.defaultProps){a===i&&(a=v({},a));for(var f in n)a[f]===void 0&&(a[f]=n[f])}return a}var Fc=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function Wv(n){Fc(n)}function Jv(n){console.error(n)}function Zv(n){Fc(n)}function $c(n,i){try{var a=n.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function e_(n,i,a){try{var l=n.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function ap(n,i,a){return a=ki(a),a.tag=3,a.payload={element:null},a.callback=function(){$c(n,i)},a}function t_(n){return n=ki(n),n.tag=3,n}function n_(n,i,a,l){var f=a.type.getDerivedStateFromError;if(typeof f=="function"){var d=l.value;n.payload=function(){return f(d)},n.callback=function(){e_(i,a,l)}}var E=a.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(n.callback=function(){e_(i,a,l),typeof f!="function"&&(Bi===null?Bi=new Set([this]):Bi.add(this));var T=l.stack;this.componentDidCatch(l.value,{componentStack:T!==null?T:""})})}function UA(n,i,a,l,f){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=a.alternate,i!==null&&xl(i,a,f,!0),a=$n.current,a!==null){switch(a.tag){case 13:return Sr===null?Dp():a.alternate===null&&yt===0&&(yt=3),a.flags&=-257,a.flags|=65536,a.lanes=f,l===Pd?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([l]):i.add(l),kp(n,l,f)),!1;case 22:return a.flags|=65536,l===Pd?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([l]):a.add(l)),kp(n,l,f)),!1}throw Error(s(435,a.tag))}return kp(n,l,f),Dp(),!1}if(Ge)return i=$n.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,l!==xd&&(n=Error(s(422),{cause:l}),Il(qn(n,a)))):(l!==xd&&(i=Error(s(423),{cause:l}),Il(qn(i,a))),n=n.current.alternate,n.flags|=65536,f&=-f,n.lanes|=f,l=qn(l,a),f=ap(n.stateNode,l,f),Ud(n,f),yt!==4&&(yt=2)),!1;var d=Error(s(520),{cause:l});if(d=qn(d,a),Ql===null?Ql=[d]:Ql.push(d),yt!==4&&(yt=2),i===null)return!0;l=qn(l,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,n=f&-f,a.lanes|=n,n=ap(a.stateNode,l,n),Ud(a,n),!1;case 1:if(i=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Bi===null||!Bi.has(d))))return a.flags|=65536,f&=-f,a.lanes|=f,f=t_(f),n_(f,n,a,l),Ud(a,f),!1}a=a.return}while(a!==null);return!1}var r_=Error(s(461)),jt=!1;function Kt(n,i,a,l){i.child=n===null?Kv(i,null,a,l):eo(i,n.child,a,l)}function i_(n,i,a,l,f){a=a.render;var d=i.ref;if("ref"in l){var E={};for(var T in l)T!=="ref"&&(E[T]=l[T])}else E=l;return ea(i),l=Hd(n,i,a,E,d,f),T=Fd(),n!==null&&!jt?($d(n,i,f),ti(n,i,f)):(Ge&&T&&Rd(i),i.flags|=1,Kt(n,i,l,f),i.child)}function s_(n,i,a,l,f){if(n===null){var d=a.type;return typeof d=="function"&&!wd(d)&&d.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=d,a_(n,i,d,l,f)):(n=Sc(a.type,null,l,i,i.mode,f),n.ref=i.ref,n.return=i,i.child=n)}if(d=n.child,!pp(n,f)){var E=d.memoizedProps;if(a=a.compare,a=a!==null?a:wl,a(E,l)&&n.ref===i.ref)return ti(n,i,f)}return i.flags|=1,n=Qr(d,l),n.ref=i.ref,n.return=i,i.child=n}function a_(n,i,a,l,f){if(n!==null){var d=n.memoizedProps;if(wl(d,l)&&n.ref===i.ref)if(jt=!1,i.pendingProps=l=d,pp(n,f))(n.flags&131072)!==0&&(jt=!0);else return i.lanes=n.lanes,ti(n,i,f)}return op(n,i,a,l,f)}function o_(n,i,a){var l=i.pendingProps,f=l.children,d=n!==null?n.memoizedState:null;if(l.mode==="hidden"){if((i.flags&128)!==0){if(l=d!==null?d.baseLanes|a:a,n!==null){for(f=i.child=n.child,d=0;f!==null;)d=d|f.lanes|f.childLanes,f=f.sibling;i.childLanes=d&~l}else i.childLanes=0,i.child=null;return l_(n,i,l,a)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},n!==null&&Cc(i,d!==null?d.cachePool:null),d!==null?av(i,d):zd(),Qv(i);else return i.lanes=i.childLanes=536870912,l_(n,i,d!==null?d.baseLanes|a:a,a)}else d!==null?(Cc(i,d.cachePool),av(i,d),Vi(),i.memoizedState=null):(n!==null&&Cc(i,null),zd(),Vi());return Kt(n,i,f,a),i.child}function l_(n,i,a,l){var f=Md();return f=f===null?null:{parent:Ot._currentValue,pool:f},i.memoizedState={baseLanes:a,cachePool:f},n!==null&&Cc(i,null),zd(),Qv(i),n!==null&&xl(n,i,l,!0),null}function Gc(n,i){var a=i.ref;if(a===null)n!==null&&n.ref!==null&&(i.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(n===null||n.ref!==a)&&(i.flags|=4194816)}}function op(n,i,a,l,f){return ea(i),a=Hd(n,i,a,l,void 0,f),l=Fd(),n!==null&&!jt?($d(n,i,f),ti(n,i,f)):(Ge&&l&&Rd(i),i.flags|=1,Kt(n,i,a,f),i.child)}function u_(n,i,a,l,f,d){return ea(i),i.updateQueue=null,a=lv(i,l,a,f),ov(n),l=Fd(),n!==null&&!jt?($d(n,i,d),ti(n,i,d)):(Ge&&l&&Rd(i),i.flags|=1,Kt(n,i,a,d),i.child)}function c_(n,i,a,l,f){if(ea(i),i.stateNode===null){var d=Fa,E=a.contextType;typeof E=="object"&&E!==null&&(d=tn(E)),d=new a(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=sp,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},Vd(i),E=a.contextType,d.context=typeof E=="object"&&E!==null?tn(E):Fa,d.state=i.memoizedState,E=a.getDerivedStateFromProps,typeof E=="function"&&(ip(i,a,E,l),d.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(E=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),E!==d.state&&sp.enqueueReplaceState(d,d.state,null),Pl(i,l,d,f),Ml(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(n===null){d=i.stateNode;var T=i.memoizedProps,O=ra(a,T);d.props=O;var G=d.context,te=a.contextType;E=Fa,typeof te=="object"&&te!==null&&(E=tn(te));var se=a.getDerivedStateFromProps;te=typeof se=="function"||typeof d.getSnapshotBeforeUpdate=="function",T=i.pendingProps!==T,te||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(T||G!==E)&&Xv(i,d,l,E),Ni=!1;var K=i.memoizedState;d.state=K,Pl(i,l,d,f),Ml(),G=i.memoizedState,T||K!==G||Ni?(typeof se=="function"&&(ip(i,a,se,l),G=i.memoizedState),(O=Ni||Yv(i,a,O,l,K,G,E))?(te||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=G),d.props=l,d.state=G,d.context=E,l=O):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,Ld(n,i),E=i.memoizedProps,te=ra(a,E),d.props=te,se=i.pendingProps,K=d.context,G=a.contextType,O=Fa,typeof G=="object"&&G!==null&&(O=tn(G)),T=a.getDerivedStateFromProps,(G=typeof T=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(E!==se||K!==O)&&Xv(i,d,l,O),Ni=!1,K=i.memoizedState,d.state=K,Pl(i,l,d,f),Ml();var Q=i.memoizedState;E!==se||K!==Q||Ni||n!==null&&n.dependencies!==null&&Ic(n.dependencies)?(typeof T=="function"&&(ip(i,a,T,l),Q=i.memoizedState),(te=Ni||Yv(i,a,te,l,K,Q,O)||n!==null&&n.dependencies!==null&&Ic(n.dependencies))?(G||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,Q,O),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,Q,O)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||E===n.memoizedProps&&K===n.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||E===n.memoizedProps&&K===n.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=Q),d.props=l,d.state=Q,d.context=O,l=te):(typeof d.componentDidUpdate!="function"||E===n.memoizedProps&&K===n.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||E===n.memoizedProps&&K===n.memoizedState||(i.flags|=1024),l=!1)}return d=l,Gc(n,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,n!==null&&l?(i.child=eo(i,n.child,null,f),i.child=eo(i,null,a,f)):Kt(n,i,a,f),i.memoizedState=d.state,n=i.child):n=ti(n,i,f),n}function h_(n,i,a,l){return Rl(),i.flags|=256,Kt(n,i,a,l),i.child}var lp={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function up(n){return{baseLanes:n,cachePool:Jy()}}function cp(n,i,a){return n=n!==null?n.childLanes&~a:0,i&&(n|=Gn),n}function f_(n,i,a){var l=i.pendingProps,f=!1,d=(i.flags&128)!==0,E;if((E=d)||(E=n!==null&&n.memoizedState===null?!1:(Mt.current&2)!==0),E&&(f=!0,i.flags&=-129),E=(i.flags&32)!==0,i.flags&=-33,n===null){if(Ge){if(f?Pi(i):Vi(),Ge){var T=gt,O;if(O=T){e:{for(O=T,T=wr;O.nodeType!==8;){if(!T){T=null;break e}if(O=rr(O.nextSibling),O===null){T=null;break e}}T=O}T!==null?(i.memoizedState={dehydrated:T,treeContext:Ys!==null?{id:Yr,overflow:Xr}:null,retryLane:536870912,hydrationErrors:null},O=Rn(18,null,null,0),O.stateNode=T,O.return=i,i.child=O,fn=i,gt=null,O=!0):O=!1}O||Js(i)}if(T=i.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return Kp(T)?i.lanes=32:i.lanes=536870912,null;ei(i)}return T=l.children,l=l.fallback,f?(Vi(),f=i.mode,T=Kc({mode:"hidden",children:T},f),l=Qs(l,f,a,null),T.return=i,l.return=i,T.sibling=l,i.child=T,f=i.child,f.memoizedState=up(a),f.childLanes=cp(n,E,a),i.memoizedState=lp,l):(Pi(i),hp(i,T))}if(O=n.memoizedState,O!==null&&(T=O.dehydrated,T!==null)){if(d)i.flags&256?(Pi(i),i.flags&=-257,i=fp(n,i,a)):i.memoizedState!==null?(Vi(),i.child=n.child,i.flags|=128,i=null):(Vi(),f=l.fallback,T=i.mode,l=Kc({mode:"visible",children:l.children},T),f=Qs(f,T,a,null),f.flags|=2,l.return=i,f.return=i,l.sibling=f,i.child=l,eo(i,n.child,null,a),l=i.child,l.memoizedState=up(a),l.childLanes=cp(n,E,a),i.memoizedState=lp,i=f);else if(Pi(i),Kp(T)){if(E=T.nextSibling&&T.nextSibling.dataset,E)var G=E.dgst;E=G,l=Error(s(419)),l.stack="",l.digest=E,Il({value:l,source:null,stack:null}),i=fp(n,i,a)}else if(jt||xl(n,i,a,!1),E=(a&n.childLanes)!==0,jt||E){if(E=at,E!==null&&(l=a&-a,l=(l&42)!==0?1:wi(l),l=(l&(E.suspendedLanes|a))!==0?0:l,l!==0&&l!==O.retryLane))throw O.retryLane=l,Ha(n,l),Nn(E,n,l),r_;T.data==="$?"||Dp(),i=fp(n,i,a)}else T.data==="$?"?(i.flags|=192,i.child=n.child,i=null):(n=O.treeContext,gt=rr(T.nextSibling),fn=i,Ge=!0,Ws=null,wr=!1,n!==null&&(Hn[Fn++]=Yr,Hn[Fn++]=Xr,Hn[Fn++]=Ys,Yr=n.id,Xr=n.overflow,Ys=i),i=hp(i,l.children),i.flags|=4096);return i}return f?(Vi(),f=l.fallback,T=i.mode,O=n.child,G=O.sibling,l=Qr(O,{mode:"hidden",children:l.children}),l.subtreeFlags=O.subtreeFlags&65011712,G!==null?f=Qr(G,f):(f=Qs(f,T,a,null),f.flags|=2),f.return=i,l.return=i,l.sibling=f,i.child=l,l=f,f=i.child,T=n.child.memoizedState,T===null?T=up(a):(O=T.cachePool,O!==null?(G=Ot._currentValue,O=O.parent!==G?{parent:G,pool:G}:O):O=Jy(),T={baseLanes:T.baseLanes|a,cachePool:O}),f.memoizedState=T,f.childLanes=cp(n,E,a),i.memoizedState=lp,l):(Pi(i),a=n.child,n=a.sibling,a=Qr(a,{mode:"visible",children:l.children}),a.return=i,a.sibling=null,n!==null&&(E=i.deletions,E===null?(i.deletions=[n],i.flags|=16):E.push(n)),i.child=a,i.memoizedState=null,a)}function hp(n,i){return i=Kc({mode:"visible",children:i},n.mode),i.return=n,n.child=i}function Kc(n,i){return n=Rn(22,n,null,i),n.lanes=0,n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},n}function fp(n,i,a){return eo(i,n.child,null,a),n=hp(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function d_(n,i,a){n.lanes|=i;var l=n.alternate;l!==null&&(l.lanes|=i),Dd(n.return,i,a)}function dp(n,i,a,l,f){var d=n.memoizedState;d===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:f}:(d.isBackwards=i,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=a,d.tailMode=f)}function p_(n,i,a){var l=i.pendingProps,f=l.revealOrder,d=l.tail;if(Kt(n,i,l.children,a),l=Mt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&d_(n,a,i);else if(n.tag===19)d_(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}l&=1}switch(oe(Mt,l),f){case"forwards":for(a=i.child,f=null;a!==null;)n=a.alternate,n!==null&&Hc(n)===null&&(f=a),a=a.sibling;a=f,a===null?(f=i.child,i.child=null):(f=a.sibling,a.sibling=null),dp(i,!1,f,a,d);break;case"backwards":for(a=null,f=i.child,i.child=null;f!==null;){if(n=f.alternate,n!==null&&Hc(n)===null){i.child=f;break}n=f.sibling,f.sibling=a,a=f,f=n}dp(i,!0,a,null,d);break;case"together":dp(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ti(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),qi|=i.lanes,(a&i.childLanes)===0)if(n!==null){if(xl(n,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(n!==null&&i.child!==n.child)throw Error(s(153));if(i.child!==null){for(n=i.child,a=Qr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Qr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function pp(n,i){return(n.lanes&i)!==0?!0:(n=n.dependencies,!!(n!==null&&Ic(n)))}function jA(n,i,a){switch(i.tag){case 3:Fe(i,i.stateNode.containerInfo),Di(i,Ot,n.memoizedState.cache),Rl();break;case 27:case 5:Mn(i);break;case 4:Fe(i,i.stateNode.containerInfo);break;case 10:Di(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(Pi(i),i.flags|=128,null):(a&i.child.childLanes)!==0?f_(n,i,a):(Pi(i),n=ti(n,i,a),n!==null?n.sibling:null);Pi(i);break;case 19:var f=(n.flags&128)!==0;if(l=(a&i.childLanes)!==0,l||(xl(n,i,a,!1),l=(a&i.childLanes)!==0),f){if(l)return p_(n,i,a);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),oe(Mt,Mt.current),l)break;return null;case 22:case 23:return i.lanes=0,o_(n,i,a);case 24:Di(i,Ot,n.memoizedState.cache)}return ti(n,i,a)}function m_(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps)jt=!0;else{if(!pp(n,a)&&(i.flags&128)===0)return jt=!1,jA(n,i,a);jt=(n.flags&131072)!==0}else jt=!1,Ge&&(i.flags&1048576)!==0&&$y(i,Rc,i.index);switch(i.lanes=0,i.tag){case 16:e:{n=i.pendingProps;var l=i.elementType,f=l._init;if(l=f(l._payload),i.type=l,typeof l=="function")wd(l)?(n=ra(l,n),i.tag=1,i=c_(null,i,l,n,a)):(i.tag=0,i=op(null,i,l,n,a));else{if(l!=null){if(f=l.$$typeof,f===H){i.tag=11,i=i_(null,i,l,n,a);break e}else if(f===N){i.tag=14,i=s_(null,i,l,n,a);break e}}throw i=Ce(l)||l,Error(s(306,i,""))}}return i;case 0:return op(n,i,i.type,i.pendingProps,a);case 1:return l=i.type,f=ra(l,i.pendingProps),c_(n,i,l,f,a);case 3:e:{if(Fe(i,i.stateNode.containerInfo),n===null)throw Error(s(387));l=i.pendingProps;var d=i.memoizedState;f=d.element,Ld(n,i),Pl(i,l,null,a);var E=i.memoizedState;if(l=E.cache,Di(i,Ot,l),l!==d.cache&&Nd(i,[Ot],a,!0),Ml(),l=E.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:E.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=h_(n,i,l,a);break e}else if(l!==f){f=qn(Error(s(424)),i),Il(f),i=h_(n,i,l,a);break e}else{switch(n=i.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(gt=rr(n.firstChild),fn=i,Ge=!0,Ws=null,wr=!0,a=Kv(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Rl(),l===f){i=ti(n,i,a);break e}Kt(n,i,l,a)}i=i.child}return i;case 26:return Gc(n,i),n===null?(a=_0(i.type,null,i.pendingProps,null))?i.memoizedState=a:Ge||(a=i.type,n=i.pendingProps,l=oh(ye.current).createElement(a),l[Dt]=i,l[Tt]=n,Yt(l,a,n),vt(l),i.stateNode=l):i.memoizedState=_0(i.type,n.memoizedProps,i.pendingProps,n.memoizedState),null;case 27:return Mn(i),n===null&&Ge&&(l=i.stateNode=g0(i.type,i.pendingProps,ye.current),fn=i,wr=!0,f=gt,$i(i.type)?(Qp=f,gt=rr(l.firstChild)):gt=f),Kt(n,i,i.pendingProps.children,a),Gc(n,i),n===null&&(i.flags|=4194304),i.child;case 5:return n===null&&Ge&&((f=l=gt)&&(l=d1(l,i.type,i.pendingProps,wr),l!==null?(i.stateNode=l,fn=i,gt=rr(l.firstChild),wr=!1,f=!0):f=!1),f||Js(i)),Mn(i),f=i.type,d=i.pendingProps,E=n!==null?n.memoizedProps:null,l=d.children,Fp(f,d)?l=null:E!==null&&Fp(f,E)&&(i.flags|=32),i.memoizedState!==null&&(f=Hd(n,i,NA,null,null,a),ru._currentValue=f),Gc(n,i),Kt(n,i,l,a),i.child;case 6:return n===null&&Ge&&((n=a=gt)&&(a=p1(a,i.pendingProps,wr),a!==null?(i.stateNode=a,fn=i,gt=null,n=!0):n=!1),n||Js(i)),null;case 13:return f_(n,i,a);case 4:return Fe(i,i.stateNode.containerInfo),l=i.pendingProps,n===null?i.child=eo(i,null,l,a):Kt(n,i,l,a),i.child;case 11:return i_(n,i,i.type,i.pendingProps,a);case 7:return Kt(n,i,i.pendingProps,a),i.child;case 8:return Kt(n,i,i.pendingProps.children,a),i.child;case 12:return Kt(n,i,i.pendingProps.children,a),i.child;case 10:return l=i.pendingProps,Di(i,i.type,l.value),Kt(n,i,l.children,a),i.child;case 9:return f=i.type._context,l=i.pendingProps.children,ea(i),f=tn(f),l=l(f),i.flags|=1,Kt(n,i,l,a),i.child;case 14:return s_(n,i,i.type,i.pendingProps,a);case 15:return a_(n,i,i.type,i.pendingProps,a);case 19:return p_(n,i,a);case 31:return l=i.pendingProps,a=i.mode,l={mode:l.mode,children:l.children},n===null?(a=Kc(l,a),a.ref=i.ref,i.child=a,a.return=i,i=a):(a=Qr(n.child,l),a.ref=i.ref,i.child=a,a.return=i,i=a),i;case 22:return o_(n,i,a);case 24:return ea(i),l=tn(Ot),n===null?(f=Md(),f===null&&(f=at,d=kd(),f.pooledCache=d,d.refCount++,d!==null&&(f.pooledCacheLanes|=a),f=d),i.memoizedState={parent:l,cache:f},Vd(i),Di(i,Ot,f)):((n.lanes&a)!==0&&(Ld(n,i),Pl(i,null,null,a),Ml()),f=n.memoizedState,d=i.memoizedState,f.parent!==l?(f={parent:l,cache:l},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),Di(i,Ot,l)):(l=d.cache,Di(i,Ot,l),l!==f.cache&&Nd(i,[Ot],a,!0))),Kt(n,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}function ni(n){n.flags|=4}function g_(n,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!S0(i)){if(i=$n.current,i!==null&&((Be&4194048)===Be?Sr!==null:(Be&62914560)!==Be&&(Be&536870912)===0||i!==Sr))throw kl=Pd,Zy;n.flags|=8192}}function Qc(n,i){i!==null&&(n.flags|=4),n.flags&16384&&(i=n.tag!==22?sl():536870912,n.lanes|=i,io|=i)}function Bl(n,i){if(!Ge)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:l.sibling=null}}function ft(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,l=0;if(i)for(var f=n.child;f!==null;)a|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)a|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=l,n.childLanes=a,i}function zA(n,i,a){var l=i.pendingProps;switch(Id(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ft(i),null;case 1:return ft(i),null;case 3:return a=i.stateNode,l=null,n!==null&&(l=n.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),Jr(Ot),Vt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(n===null||n.child===null)&&(Al(i)?ni(i):n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Qy())),ft(i),null;case 26:return a=i.memoizedState,n===null?(ni(i),a!==null?(ft(i),g_(i,a)):(ft(i),i.flags&=-16777217)):a?a!==n.memoizedState?(ni(i),ft(i),g_(i,a)):(ft(i),i.flags&=-16777217):(n.memoizedProps!==l&&ni(i),ft(i),i.flags&=-16777217),null;case 27:mn(i),a=ye.current;var f=i.type;if(n!==null&&i.stateNode!=null)n.memoizedProps!==l&&ni(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return ft(i),null}n=ge.current,Al(i)?Gy(i):(n=g0(f,l,a),i.stateNode=n,ni(i))}return ft(i),null;case 5:if(mn(i),a=i.type,n!==null&&i.stateNode!=null)n.memoizedProps!==l&&ni(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return ft(i),null}if(n=ge.current,Al(i))Gy(i);else{switch(f=oh(ye.current),n){case 1:n=f.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:n=f.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":n=f.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":n=f.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":n=f.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof l.is=="string"?f.createElement("select",{is:l.is}):f.createElement("select"),l.multiple?n.multiple=!0:l.size&&(n.size=l.size);break;default:n=typeof l.is=="string"?f.createElement(a,{is:l.is}):f.createElement(a)}}n[Dt]=i,n[Tt]=l;e:for(f=i.child;f!==null;){if(f.tag===5||f.tag===6)n.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===i)break e;for(;f.sibling===null;){if(f.return===null||f.return===i)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}i.stateNode=n;e:switch(Yt(n,a,l),a){case"button":case"input":case"select":case"textarea":n=!!l.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&ni(i)}}return ft(i),i.flags&=-16777217,null;case 6:if(n&&i.stateNode!=null)n.memoizedProps!==l&&ni(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(s(166));if(n=ye.current,Al(i)){if(n=i.stateNode,a=i.memoizedProps,l=null,f=fn,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}n[Dt]=i,n=!!(n.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||u0(n.nodeValue,a)),n||Js(i)}else n=oh(n).createTextNode(l),n[Dt]=i,i.stateNode=n}return ft(i),null;case 13:if(l=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(f=Al(i),l!==null&&l.dehydrated!==null){if(n===null){if(!f)throw Error(s(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(s(317));f[Dt]=i}else Rl(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;ft(i),f=!1}else f=Qy(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(ei(i),i):(ei(i),null)}if(ei(i),(i.flags&128)!==0)return i.lanes=a,i;if(a=l!==null,n=n!==null&&n.memoizedState!==null,a){l=i.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool);var d=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==f&&(l.flags|=2048)}return a!==n&&a&&(i.child.flags|=8192),Qc(i,i.updateQueue),ft(i),null;case 4:return Vt(),n===null&&jp(i.stateNode.containerInfo),ft(i),null;case 10:return Jr(i.type),ft(i),null;case 19:if(le(Mt),f=i.memoizedState,f===null)return ft(i),null;if(l=(i.flags&128)!==0,d=f.rendering,d===null)if(l)Bl(f,!1);else{if(yt!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(d=Hc(n),d!==null){for(i.flags|=128,Bl(f,!1),n=d.updateQueue,i.updateQueue=n,Qc(i,n),i.subtreeFlags=0,n=a,a=i.child;a!==null;)Fy(a,n),a=a.sibling;return oe(Mt,Mt.current&1|2),i.child}n=n.sibling}f.tail!==null&&Pn()>Wc&&(i.flags|=128,l=!0,Bl(f,!1),i.lanes=4194304)}else{if(!l)if(n=Hc(d),n!==null){if(i.flags|=128,l=!0,n=n.updateQueue,i.updateQueue=n,Qc(i,n),Bl(f,!0),f.tail===null&&f.tailMode==="hidden"&&!d.alternate&&!Ge)return ft(i),null}else 2*Pn()-f.renderingStartTime>Wc&&a!==536870912&&(i.flags|=128,l=!0,Bl(f,!1),i.lanes=4194304);f.isBackwards?(d.sibling=i.child,i.child=d):(n=f.last,n!==null?n.sibling=d:i.child=d,f.last=d)}return f.tail!==null?(i=f.tail,f.rendering=i,f.tail=i.sibling,f.renderingStartTime=Pn(),i.sibling=null,n=Mt.current,oe(Mt,l?n&1|2:n&1),i):(ft(i),null);case 22:case 23:return ei(i),qd(),l=i.memoizedState!==null,n!==null?n.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(a&536870912)!==0&&(i.flags&128)===0&&(ft(i),i.subtreeFlags&6&&(i.flags|=8192)):ft(i),a=i.updateQueue,a!==null&&Qc(i,a.retryQueue),a=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==a&&(i.flags|=2048),n!==null&&le(ta),null;case 24:return a=null,n!==null&&(a=n.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),Jr(Ot),ft(i),null;case 25:return null;case 30:return null}throw Error(s(156,i.tag))}function qA(n,i){switch(Id(i),i.tag){case 1:return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Jr(Ot),Vt(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 26:case 27:case 5:return mn(i),null;case 13:if(ei(i),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(s(340));Rl()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return le(Mt),null;case 4:return Vt(),null;case 10:return Jr(i.type),null;case 22:case 23:return ei(i),qd(),n!==null&&le(ta),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 24:return Jr(Ot),null;case 25:return null;default:return null}}function y_(n,i){switch(Id(i),i.tag){case 3:Jr(Ot),Vt();break;case 26:case 27:case 5:mn(i);break;case 4:Vt();break;case 13:ei(i);break;case 19:le(Mt);break;case 10:Jr(i.type);break;case 22:case 23:ei(i),qd(),n!==null&&le(ta);break;case 24:Jr(Ot)}}function Hl(n,i){try{var a=i.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var f=l.next;a=f;do{if((a.tag&n)===n){l=void 0;var d=a.create,E=a.inst;l=d(),E.destroy=l}a=a.next}while(a!==f)}}catch(T){st(i,i.return,T)}}function Li(n,i,a){try{var l=i.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var d=f.next;l=d;do{if((l.tag&n)===n){var E=l.inst,T=E.destroy;if(T!==void 0){E.destroy=void 0,f=i;var O=a,G=T;try{G()}catch(te){st(f,O,te)}}}l=l.next}while(l!==d)}}catch(te){st(i,i.return,te)}}function v_(n){var i=n.updateQueue;if(i!==null){var a=n.stateNode;try{sv(i,a)}catch(l){st(n,n.return,l)}}}function __(n,i,a){a.props=ra(n.type,n.memoizedProps),a.state=n.memoizedState;try{a.componentWillUnmount()}catch(l){st(n,i,l)}}function Fl(n,i){try{var a=n.ref;if(a!==null){switch(n.tag){case 26:case 27:case 5:var l=n.stateNode;break;case 30:l=n.stateNode;break;default:l=n.stateNode}typeof a=="function"?n.refCleanup=a(l):a.current=l}}catch(f){st(n,i,f)}}function Ar(n,i){var a=n.ref,l=n.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(f){st(n,i,f)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(f){st(n,i,f)}else a.current=null}function E_(n){var i=n.type,a=n.memoizedProps,l=n.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(f){st(n,n.return,f)}}function mp(n,i,a){try{var l=n.stateNode;l1(l,n.type,a,i),l[Tt]=i}catch(f){st(n,n.return,f)}}function b_(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&$i(n.type)||n.tag===4}function gp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||b_(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&$i(n.type)||n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function yp(n,i,a){var l=n.tag;if(l===5||l===6)n=n.stateNode,i?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(n,i):(i=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,i.appendChild(n),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=ah));else if(l!==4&&(l===27&&$i(n.type)&&(a=n.stateNode,i=null),n=n.child,n!==null))for(yp(n,i,a),n=n.sibling;n!==null;)yp(n,i,a),n=n.sibling}function Yc(n,i,a){var l=n.tag;if(l===5||l===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(l!==4&&(l===27&&$i(n.type)&&(a=n.stateNode),n=n.child,n!==null))for(Yc(n,i,a),n=n.sibling;n!==null;)Yc(n,i,a),n=n.sibling}function T_(n){var i=n.stateNode,a=n.memoizedProps;try{for(var l=n.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);Yt(i,l,a),i[Dt]=n,i[Tt]=a}catch(d){st(n,n.return,d)}}var ri=!1,Et=!1,vp=!1,w_=typeof WeakSet=="function"?WeakSet:Set,zt=null;function BA(n,i){if(n=n.containerInfo,Bp=dh,n=My(n),gd(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var f=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var E=0,T=-1,O=-1,G=0,te=0,se=n,K=null;t:for(;;){for(var Q;se!==a||f!==0&&se.nodeType!==3||(T=E+f),se!==d||l!==0&&se.nodeType!==3||(O=E+l),se.nodeType===3&&(E+=se.nodeValue.length),(Q=se.firstChild)!==null;)K=se,se=Q;for(;;){if(se===n)break t;if(K===a&&++G===f&&(T=E),K===d&&++te===l&&(O=E),(Q=se.nextSibling)!==null)break;se=K,K=se.parentNode}se=Q}a=T===-1||O===-1?null:{start:T,end:O}}else a=null}a=a||{start:0,end:0}}else a=null;for(Hp={focusedElem:n,selectionRange:a},dh=!1,zt=i;zt!==null;)if(i=zt,n=i.child,(i.subtreeFlags&1024)!==0&&n!==null)n.return=i,zt=n;else for(;zt!==null;){switch(i=zt,d=i.alternate,n=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&d!==null){n=void 0,a=i,f=d.memoizedProps,d=d.memoizedState,l=a.stateNode;try{var Se=ra(a.type,f,a.elementType===a.type);n=l.getSnapshotBeforeUpdate(Se,d),l.__reactInternalSnapshotBeforeUpdate=n}catch(Ee){st(a,a.return,Ee)}}break;case 3:if((n&1024)!==0){if(n=i.stateNode.containerInfo,a=n.nodeType,a===9)Gp(n);else if(a===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":Gp(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(s(163))}if(n=i.sibling,n!==null){n.return=i.return,zt=n;break}zt=i.return}}function S_(n,i,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Ui(n,a),l&4&&Hl(5,a);break;case 1:if(Ui(n,a),l&4)if(n=a.stateNode,i===null)try{n.componentDidMount()}catch(E){st(a,a.return,E)}else{var f=ra(a.type,i.memoizedProps);i=i.memoizedState;try{n.componentDidUpdate(f,i,n.__reactInternalSnapshotBeforeUpdate)}catch(E){st(a,a.return,E)}}l&64&&v_(a),l&512&&Fl(a,a.return);break;case 3:if(Ui(n,a),l&64&&(n=a.updateQueue,n!==null)){if(i=null,a.child!==null)switch(a.child.tag){case 27:case 5:i=a.child.stateNode;break;case 1:i=a.child.stateNode}try{sv(n,i)}catch(E){st(a,a.return,E)}}break;case 27:i===null&&l&4&&T_(a);case 26:case 5:Ui(n,a),i===null&&l&4&&E_(a),l&512&&Fl(a,a.return);break;case 12:Ui(n,a);break;case 13:Ui(n,a),l&4&&I_(n,a),l&64&&(n=a.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(a=WA.bind(null,a),m1(n,a))));break;case 22:if(l=a.memoizedState!==null||ri,!l){i=i!==null&&i.memoizedState!==null||Et,f=ri;var d=Et;ri=l,(Et=i)&&!d?ji(n,a,(a.subtreeFlags&8772)!==0):Ui(n,a),ri=f,Et=d}break;case 30:break;default:Ui(n,a)}}function A_(n){var i=n.alternate;i!==null&&(n.alternate=null,A_(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&Ri(i)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var ct=null,yn=!1;function ii(n,i,a){for(a=a.child;a!==null;)R_(n,i,a),a=a.sibling}function R_(n,i,a){if(We&&typeof We.onCommitFiberUnmount=="function")try{We.onCommitFiberUnmount(mt,a)}catch{}switch(a.tag){case 26:Et||Ar(a,i),ii(n,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Et||Ar(a,i);var l=ct,f=yn;$i(a.type)&&(ct=a.stateNode,yn=!1),ii(n,i,a),Zl(a.stateNode),ct=l,yn=f;break;case 5:Et||Ar(a,i);case 6:if(l=ct,f=yn,ct=null,ii(n,i,a),ct=l,yn=f,ct!==null)if(yn)try{(ct.nodeType===9?ct.body:ct.nodeName==="HTML"?ct.ownerDocument.body:ct).removeChild(a.stateNode)}catch(d){st(a,i,d)}else try{ct.removeChild(a.stateNode)}catch(d){st(a,i,d)}break;case 18:ct!==null&&(yn?(n=ct,p0(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,a.stateNode),ou(n)):p0(ct,a.stateNode));break;case 4:l=ct,f=yn,ct=a.stateNode.containerInfo,yn=!0,ii(n,i,a),ct=l,yn=f;break;case 0:case 11:case 14:case 15:Et||Li(2,a,i),Et||Li(4,a,i),ii(n,i,a);break;case 1:Et||(Ar(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"&&__(a,i,l)),ii(n,i,a);break;case 21:ii(n,i,a);break;case 22:Et=(l=Et)||a.memoizedState!==null,ii(n,i,a),Et=l;break;default:ii(n,i,a)}}function I_(n,i){if(i.memoizedState===null&&(n=i.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{ou(n)}catch(a){st(i,i.return,a)}}function HA(n){switch(n.tag){case 13:case 19:var i=n.stateNode;return i===null&&(i=n.stateNode=new w_),i;case 22:return n=n.stateNode,i=n._retryCache,i===null&&(i=n._retryCache=new w_),i;default:throw Error(s(435,n.tag))}}function _p(n,i){var a=HA(n);i.forEach(function(l){var f=JA.bind(null,n,l);a.has(l)||(a.add(l),l.then(f,f))})}function In(n,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var f=a[l],d=n,E=i,T=E;e:for(;T!==null;){switch(T.tag){case 27:if($i(T.type)){ct=T.stateNode,yn=!1;break e}break;case 5:ct=T.stateNode,yn=!1;break e;case 3:case 4:ct=T.stateNode.containerInfo,yn=!0;break e}T=T.return}if(ct===null)throw Error(s(160));R_(d,E,f),ct=null,yn=!1,d=f.alternate,d!==null&&(d.return=null),f.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)x_(i,n),i=i.sibling}var nr=null;function x_(n,i){var a=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:In(i,n),xn(n),l&4&&(Li(3,n,n.return),Hl(3,n),Li(5,n,n.return));break;case 1:In(i,n),xn(n),l&512&&(Et||a===null||Ar(a,a.return)),l&64&&ri&&(n=n.updateQueue,n!==null&&(l=n.callbacks,l!==null&&(a=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var f=nr;if(In(i,n),xn(n),l&512&&(Et||a===null||Ar(a,a.return)),l&4){var d=a!==null?a.memoizedState:null;if(l=n.memoizedState,a===null)if(l===null)if(n.stateNode===null){e:{l=n.type,a=n.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":d=f.getElementsByTagName("title")[0],(!d||d[ks]||d[Dt]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=f.createElement(l),f.head.insertBefore(d,f.querySelector("head > title"))),Yt(d,l,a),d[Dt]=n,vt(d),l=d;break e;case"link":var E=T0("link","href",f).get(l+(a.href||""));if(E){for(var T=0;T<E.length;T++)if(d=E[T],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){E.splice(T,1);break t}}d=f.createElement(l),Yt(d,l,a),f.head.appendChild(d);break;case"meta":if(E=T0("meta","content",f).get(l+(a.content||""))){for(T=0;T<E.length;T++)if(d=E[T],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){E.splice(T,1);break t}}d=f.createElement(l),Yt(d,l,a),f.head.appendChild(d);break;default:throw Error(s(468,l))}d[Dt]=n,vt(d),l=d}n.stateNode=l}else w0(f,n.type,n.stateNode);else n.stateNode=b0(f,l,n.memoizedProps);else d!==l?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,l===null?w0(f,n.type,n.stateNode):b0(f,l,n.memoizedProps)):l===null&&n.stateNode!==null&&mp(n,n.memoizedProps,a.memoizedProps)}break;case 27:In(i,n),xn(n),l&512&&(Et||a===null||Ar(a,a.return)),a!==null&&l&4&&mp(n,n.memoizedProps,a.memoizedProps);break;case 5:if(In(i,n),xn(n),l&512&&(Et||a===null||Ar(a,a.return)),n.flags&32){f=n.stateNode;try{Ln(f,"")}catch(Q){st(n,n.return,Q)}}l&4&&n.stateNode!=null&&(f=n.memoizedProps,mp(n,f,a!==null?a.memoizedProps:f)),l&1024&&(vp=!0);break;case 6:if(In(i,n),xn(n),l&4){if(n.stateNode===null)throw Error(s(162));l=n.memoizedProps,a=n.stateNode;try{a.nodeValue=l}catch(Q){st(n,n.return,Q)}}break;case 3:if(ch=null,f=nr,nr=lh(i.containerInfo),In(i,n),nr=f,xn(n),l&4&&a!==null&&a.memoizedState.isDehydrated)try{ou(i.containerInfo)}catch(Q){st(n,n.return,Q)}vp&&(vp=!1,C_(n));break;case 4:l=nr,nr=lh(n.stateNode.containerInfo),In(i,n),xn(n),nr=l;break;case 12:In(i,n),xn(n);break;case 13:In(i,n),xn(n),n.child.flags&8192&&n.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ap=Pn()),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,_p(n,l)));break;case 22:f=n.memoizedState!==null;var O=a!==null&&a.memoizedState!==null,G=ri,te=Et;if(ri=G||f,Et=te||O,In(i,n),Et=te,ri=G,xn(n),l&8192)e:for(i=n.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(a===null||O||ri||Et||ia(n)),a=null,i=n;;){if(i.tag===5||i.tag===26){if(a===null){O=a=i;try{if(d=O.stateNode,f)E=d.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{T=O.stateNode;var se=O.memoizedProps.style,K=se!=null&&se.hasOwnProperty("display")?se.display:null;T.style.display=K==null||typeof K=="boolean"?"":(""+K).trim()}}catch(Q){st(O,O.return,Q)}}}else if(i.tag===6){if(a===null){O=i;try{O.stateNode.nodeValue=f?"":O.memoizedProps}catch(Q){st(O,O.return,Q)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===n)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break e;for(;i.sibling===null;){if(i.return===null||i.return===n)break e;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=n.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,_p(n,a))));break;case 19:In(i,n),xn(n),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,_p(n,l)));break;case 30:break;case 21:break;default:In(i,n),xn(n)}}function xn(n){var i=n.flags;if(i&2){try{for(var a,l=n.return;l!==null;){if(b_(l)){a=l;break}l=l.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var f=a.stateNode,d=gp(n);Yc(n,d,f);break;case 5:var E=a.stateNode;a.flags&32&&(Ln(E,""),a.flags&=-33);var T=gp(n);Yc(n,T,E);break;case 3:case 4:var O=a.stateNode.containerInfo,G=gp(n);yp(n,G,O);break;default:throw Error(s(161))}}catch(te){st(n,n.return,te)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function C_(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var i=n;C_(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),n=n.sibling}}function Ui(n,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)S_(n,i.alternate,i),i=i.sibling}function ia(n){for(n=n.child;n!==null;){var i=n;switch(i.tag){case 0:case 11:case 14:case 15:Li(4,i,i.return),ia(i);break;case 1:Ar(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&__(i,i.return,a),ia(i);break;case 27:Zl(i.stateNode);case 26:case 5:Ar(i,i.return),ia(i);break;case 22:i.memoizedState===null&&ia(i);break;case 30:ia(i);break;default:ia(i)}n=n.sibling}}function ji(n,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,f=n,d=i,E=d.flags;switch(d.tag){case 0:case 11:case 15:ji(f,d,a),Hl(4,d);break;case 1:if(ji(f,d,a),l=d,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(G){st(l,l.return,G)}if(l=d,f=l.updateQueue,f!==null){var T=l.stateNode;try{var O=f.shared.hiddenCallbacks;if(O!==null)for(f.shared.hiddenCallbacks=null,f=0;f<O.length;f++)iv(O[f],T)}catch(G){st(l,l.return,G)}}a&&E&64&&v_(d),Fl(d,d.return);break;case 27:T_(d);case 26:case 5:ji(f,d,a),a&&l===null&&E&4&&E_(d),Fl(d,d.return);break;case 12:ji(f,d,a);break;case 13:ji(f,d,a),a&&E&4&&I_(f,d);break;case 22:d.memoizedState===null&&ji(f,d,a),Fl(d,d.return);break;case 30:break;default:ji(f,d,a)}i=i.sibling}}function Ep(n,i){var a=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),n=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(n=i.memoizedState.cachePool.pool),n!==a&&(n!=null&&n.refCount++,a!=null&&Cl(a))}function bp(n,i){n=null,i.alternate!==null&&(n=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==n&&(i.refCount++,n!=null&&Cl(n))}function Rr(n,i,a,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)D_(n,i,a,l),i=i.sibling}function D_(n,i,a,l){var f=i.flags;switch(i.tag){case 0:case 11:case 15:Rr(n,i,a,l),f&2048&&Hl(9,i);break;case 1:Rr(n,i,a,l);break;case 3:Rr(n,i,a,l),f&2048&&(n=null,i.alternate!==null&&(n=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==n&&(i.refCount++,n!=null&&Cl(n)));break;case 12:if(f&2048){Rr(n,i,a,l),n=i.stateNode;try{var d=i.memoizedProps,E=d.id,T=d.onPostCommit;typeof T=="function"&&T(E,i.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(O){st(i,i.return,O)}}else Rr(n,i,a,l);break;case 13:Rr(n,i,a,l);break;case 23:break;case 22:d=i.stateNode,E=i.alternate,i.memoizedState!==null?d._visibility&2?Rr(n,i,a,l):$l(n,i):d._visibility&2?Rr(n,i,a,l):(d._visibility|=2,to(n,i,a,l,(i.subtreeFlags&10256)!==0)),f&2048&&Ep(E,i);break;case 24:Rr(n,i,a,l),f&2048&&bp(i.alternate,i);break;default:Rr(n,i,a,l)}}function to(n,i,a,l,f){for(f=f&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var d=n,E=i,T=a,O=l,G=E.flags;switch(E.tag){case 0:case 11:case 15:to(d,E,T,O,f),Hl(8,E);break;case 23:break;case 22:var te=E.stateNode;E.memoizedState!==null?te._visibility&2?to(d,E,T,O,f):$l(d,E):(te._visibility|=2,to(d,E,T,O,f)),f&&G&2048&&Ep(E.alternate,E);break;case 24:to(d,E,T,O,f),f&&G&2048&&bp(E.alternate,E);break;default:to(d,E,T,O,f)}i=i.sibling}}function $l(n,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=n,l=i,f=l.flags;switch(l.tag){case 22:$l(a,l),f&2048&&Ep(l.alternate,l);break;case 24:$l(a,l),f&2048&&bp(l.alternate,l);break;default:$l(a,l)}i=i.sibling}}var Gl=8192;function no(n){if(n.subtreeFlags&Gl)for(n=n.child;n!==null;)N_(n),n=n.sibling}function N_(n){switch(n.tag){case 26:no(n),n.flags&Gl&&n.memoizedState!==null&&x1(nr,n.memoizedState,n.memoizedProps);break;case 5:no(n);break;case 3:case 4:var i=nr;nr=lh(n.stateNode.containerInfo),no(n),nr=i;break;case 22:n.memoizedState===null&&(i=n.alternate,i!==null&&i.memoizedState!==null?(i=Gl,Gl=16777216,no(n),Gl=i):no(n));break;default:no(n)}}function k_(n){var i=n.alternate;if(i!==null&&(n=i.child,n!==null)){i.child=null;do i=n.sibling,n.sibling=null,n=i;while(n!==null)}}function Kl(n){var i=n.deletions;if((n.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];zt=l,M_(l,n)}k_(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)O_(n),n=n.sibling}function O_(n){switch(n.tag){case 0:case 11:case 15:Kl(n),n.flags&2048&&Li(9,n,n.return);break;case 3:Kl(n);break;case 12:Kl(n);break;case 22:var i=n.stateNode;n.memoizedState!==null&&i._visibility&2&&(n.return===null||n.return.tag!==13)?(i._visibility&=-3,Xc(n)):Kl(n);break;default:Kl(n)}}function Xc(n){var i=n.deletions;if((n.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];zt=l,M_(l,n)}k_(n)}for(n=n.child;n!==null;){switch(i=n,i.tag){case 0:case 11:case 15:Li(8,i,i.return),Xc(i);break;case 22:a=i.stateNode,a._visibility&2&&(a._visibility&=-3,Xc(i));break;default:Xc(i)}n=n.sibling}}function M_(n,i){for(;zt!==null;){var a=zt;switch(a.tag){case 0:case 11:case 15:Li(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Cl(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,zt=l;else e:for(a=n;zt!==null;){l=zt;var f=l.sibling,d=l.return;if(A_(l),l===a){zt=null;break e}if(f!==null){f.return=d,zt=f;break e}zt=d}}}var FA={getCacheForType:function(n){var i=tn(Ot),a=i.data.get(n);return a===void 0&&(a=n(),i.data.set(n,a)),a}},$A=typeof WeakMap=="function"?WeakMap:Map,Je=0,at=null,Pe=null,Be=0,Ze=0,Cn=null,zi=!1,ro=!1,Tp=!1,si=0,yt=0,qi=0,sa=0,wp=0,Gn=0,io=0,Ql=null,vn=null,Sp=!1,Ap=0,Wc=1/0,Jc=null,Bi=null,Qt=0,Hi=null,so=null,ao=0,Rp=0,Ip=null,P_=null,Yl=0,xp=null;function Dn(){if((Je&2)!==0&&Be!==0)return Be&-Be;if(J.T!==null){var n=Ka;return n!==0?n:Pp()}return Si()}function V_(){Gn===0&&(Gn=(Be&536870912)===0||Ge?il():536870912);var n=$n.current;return n!==null&&(n.flags|=32),Gn}function Nn(n,i,a){(n===at&&(Ze===2||Ze===9)||n.cancelPendingCommit!==null)&&(oo(n,0),Fi(n,Be,Gn,!1)),Lr(n,a),((Je&2)===0||n!==at)&&(n===at&&((Je&2)===0&&(sa|=a),yt===4&&Fi(n,Be,Gn,!1)),Ir(n))}function L_(n,i,a){if((Je&6)!==0)throw Error(s(327));var l=!a&&(i&124)===0&&(i&n.expiredLanes)===0||Ns(n,i),f=l?QA(n,i):Np(n,i,!0),d=l;do{if(f===0){ro&&!l&&Fi(n,i,0,!1);break}else{if(a=n.current.alternate,d&&!GA(a)){f=Np(n,i,!1),d=!1;continue}if(f===2){if(d=i,n.errorRecoveryDisabledLanes&d)var E=0;else E=n.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){i=E;e:{var T=n;f=Ql;var O=T.current.memoizedState.isDehydrated;if(O&&(oo(T,E).flags|=256),E=Np(T,E,!1),E!==2){if(Tp&&!O){T.errorRecoveryDisabledLanes|=d,sa|=d,f=4;break e}d=vn,vn=f,d!==null&&(vn===null?vn=d:vn.push.apply(vn,d))}f=E}if(d=!1,f!==2)continue}}if(f===1){oo(n,0),Fi(n,i,0,!0);break}e:{switch(l=n,d=f,d){case 0:case 1:throw Error(s(345));case 4:if((i&4194048)!==i)break;case 6:Fi(l,i,Gn,!zi);break e;case 2:vn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((i&62914560)===i&&(f=Ap+300-Pn(),10<f)){if(Fi(l,i,Gn,!zi),Sa(l,0,!0)!==0)break e;l.timeoutHandle=f0(U_.bind(null,l,a,vn,Jc,Sp,i,Gn,sa,io,zi,d,2,-0,0),f);break e}U_(l,a,vn,Jc,Sp,i,Gn,sa,io,zi,d,0,-0,0)}}break}while(!0);Ir(n)}function U_(n,i,a,l,f,d,E,T,O,G,te,se,K,Q){if(n.timeoutHandle=-1,se=i.subtreeFlags,(se&8192||(se&16785408)===16785408)&&(nu={stylesheets:null,count:0,unsuspend:I1},N_(i),se=C1(),se!==null)){n.cancelPendingCommit=se($_.bind(null,n,i,d,a,l,f,E,T,O,te,1,K,Q)),Fi(n,d,E,!G);return}$_(n,i,d,a,l,f,E,T,O)}function GA(n){for(var i=n;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var f=a[l],d=f.getSnapshot;f=f.value;try{if(!An(d(),f))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Fi(n,i,a,l){i&=~wp,i&=~sa,n.suspendedLanes|=i,n.pingedLanes&=~i,l&&(n.warmLanes|=i),l=n.expirationTimes;for(var f=i;0<f;){var d=31-en(f),E=1<<d;l[d]=-1,f&=~E}a!==0&&fr(n,a,i)}function Zc(){return(Je&6)===0?(Xl(0),!1):!0}function Cp(){if(Pe!==null){if(Ze===0)var n=Pe.return;else n=Pe,Wr=Zs=null,Gd(n),Za=null,zl=0,n=Pe;for(;n!==null;)y_(n.alternate,n),n=n.return;Pe=null}}function oo(n,i){var a=n.timeoutHandle;a!==-1&&(n.timeoutHandle=-1,c1(a)),a=n.cancelPendingCommit,a!==null&&(n.cancelPendingCommit=null,a()),Cp(),at=n,Pe=a=Qr(n.current,null),Be=i,Ze=0,Cn=null,zi=!1,ro=Ns(n,i),Tp=!1,io=Gn=wp=sa=qi=yt=0,vn=Ql=null,Sp=!1,(i&8)!==0&&(i|=i&32);var l=n.entangledLanes;if(l!==0)for(n=n.entanglements,l&=i;0<l;){var f=31-en(l),d=1<<f;i|=n[f],l&=~d}return si=i,bc(),a}function j_(n,i){ke=null,J.H=zc,i===Nl||i===Dc?(i=nv(),Ze=3):i===Zy?(i=nv(),Ze=4):Ze=i===r_?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,Cn=i,Pe===null&&(yt=1,$c(n,qn(i,n.current)))}function z_(){var n=J.H;return J.H=zc,n===null?zc:n}function q_(){var n=J.A;return J.A=FA,n}function Dp(){yt=4,zi||(Be&4194048)!==Be&&$n.current!==null||(ro=!0),(qi&134217727)===0&&(sa&134217727)===0||at===null||Fi(at,Be,Gn,!1)}function Np(n,i,a){var l=Je;Je|=2;var f=z_(),d=q_();(at!==n||Be!==i)&&(Jc=null,oo(n,i)),i=!1;var E=yt;e:do try{if(Ze!==0&&Pe!==null){var T=Pe,O=Cn;switch(Ze){case 8:Cp(),E=6;break e;case 3:case 2:case 9:case 6:$n.current===null&&(i=!0);var G=Ze;if(Ze=0,Cn=null,lo(n,T,O,G),a&&ro){E=0;break e}break;default:G=Ze,Ze=0,Cn=null,lo(n,T,O,G)}}KA(),E=yt;break}catch(te){j_(n,te)}while(!0);return i&&n.shellSuspendCounter++,Wr=Zs=null,Je=l,J.H=f,J.A=d,Pe===null&&(at=null,Be=0,bc()),E}function KA(){for(;Pe!==null;)B_(Pe)}function QA(n,i){var a=Je;Je|=2;var l=z_(),f=q_();at!==n||Be!==i?(Jc=null,Wc=Pn()+500,oo(n,i)):ro=Ns(n,i);e:do try{if(Ze!==0&&Pe!==null){i=Pe;var d=Cn;t:switch(Ze){case 1:Ze=0,Cn=null,lo(n,i,d,1);break;case 2:case 9:if(ev(d)){Ze=0,Cn=null,H_(i);break}i=function(){Ze!==2&&Ze!==9||at!==n||(Ze=7),Ir(n)},d.then(i,i);break e;case 3:Ze=7;break e;case 4:Ze=5;break e;case 7:ev(d)?(Ze=0,Cn=null,H_(i)):(Ze=0,Cn=null,lo(n,i,d,7));break;case 5:var E=null;switch(Pe.tag){case 26:E=Pe.memoizedState;case 5:case 27:var T=Pe;if(!E||S0(E)){Ze=0,Cn=null;var O=T.sibling;if(O!==null)Pe=O;else{var G=T.return;G!==null?(Pe=G,eh(G)):Pe=null}break t}}Ze=0,Cn=null,lo(n,i,d,5);break;case 6:Ze=0,Cn=null,lo(n,i,d,6);break;case 8:Cp(),yt=6;break e;default:throw Error(s(462))}}YA();break}catch(te){j_(n,te)}while(!0);return Wr=Zs=null,J.H=l,J.A=f,Je=a,Pe!==null?0:(at=null,Be=0,bc(),yt)}function YA(){for(;Pe!==null&&!el();)B_(Pe)}function B_(n){var i=m_(n.alternate,n,si);n.memoizedProps=n.pendingProps,i===null?eh(n):Pe=i}function H_(n){var i=n,a=i.alternate;switch(i.tag){case 15:case 0:i=u_(a,i,i.pendingProps,i.type,void 0,Be);break;case 11:i=u_(a,i,i.pendingProps,i.type.render,i.ref,Be);break;case 5:Gd(i);default:y_(a,i),i=Pe=Fy(i,si),i=m_(a,i,si)}n.memoizedProps=n.pendingProps,i===null?eh(n):Pe=i}function lo(n,i,a,l){Wr=Zs=null,Gd(i),Za=null,zl=0;var f=i.return;try{if(UA(n,f,i,a,Be)){yt=1,$c(n,qn(a,n.current)),Pe=null;return}}catch(d){if(f!==null)throw Pe=f,d;yt=1,$c(n,qn(a,n.current)),Pe=null;return}i.flags&32768?(Ge||l===1?n=!0:ro||(Be&536870912)!==0?n=!1:(zi=n=!0,(l===2||l===9||l===3||l===6)&&(l=$n.current,l!==null&&l.tag===13&&(l.flags|=16384))),F_(i,n)):eh(i)}function eh(n){var i=n;do{if((i.flags&32768)!==0){F_(i,zi);return}n=i.return;var a=zA(i.alternate,i,si);if(a!==null){Pe=a;return}if(i=i.sibling,i!==null){Pe=i;return}Pe=i=n}while(i!==null);yt===0&&(yt=5)}function F_(n,i){do{var a=qA(n.alternate,n);if(a!==null){a.flags&=32767,Pe=a;return}if(a=n.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(n=n.sibling,n!==null)){Pe=n;return}Pe=n=a}while(n!==null);yt=6,Pe=null}function $_(n,i,a,l,f,d,E,T,O){n.cancelPendingCommit=null;do th();while(Qt!==0);if((Je&6)!==0)throw Error(s(327));if(i!==null){if(i===n.current)throw Error(s(177));if(d=i.lanes|i.childLanes,d|=bd,al(n,a,d,E,T,O),n===at&&(Pe=at=null,Be=0),so=i,Hi=n,ao=a,Rp=d,Ip=f,P_=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,ZA(Is,function(){return X_(),null})):(n.callbackNode=null,n.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=J.T,J.T=null,f=ce.p,ce.p=2,E=Je,Je|=4;try{BA(n,i,a)}finally{Je=E,ce.p=f,J.T=l}}Qt=1,G_(),K_(),Q_()}}function G_(){if(Qt===1){Qt=0;var n=Hi,i=so,a=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||a){a=J.T,J.T=null;var l=ce.p;ce.p=2;var f=Je;Je|=4;try{x_(i,n);var d=Hp,E=My(n.containerInfo),T=d.focusedElem,O=d.selectionRange;if(E!==T&&T&&T.ownerDocument&&Oy(T.ownerDocument.documentElement,T)){if(O!==null&&gd(T)){var G=O.start,te=O.end;if(te===void 0&&(te=G),"selectionStart"in T)T.selectionStart=G,T.selectionEnd=Math.min(te,T.value.length);else{var se=T.ownerDocument||document,K=se&&se.defaultView||window;if(K.getSelection){var Q=K.getSelection(),Se=T.textContent.length,Ee=Math.min(O.start,Se),it=O.end===void 0?Ee:Math.min(O.end,Se);!Q.extend&&Ee>it&&(E=it,it=Ee,Ee=E);var q=ky(T,Ee),L=ky(T,it);if(q&&L&&(Q.rangeCount!==1||Q.anchorNode!==q.node||Q.anchorOffset!==q.offset||Q.focusNode!==L.node||Q.focusOffset!==L.offset)){var F=se.createRange();F.setStart(q.node,q.offset),Q.removeAllRanges(),Ee>it?(Q.addRange(F),Q.extend(L.node,L.offset)):(F.setEnd(L.node,L.offset),Q.addRange(F))}}}}for(se=[],Q=T;Q=Q.parentNode;)Q.nodeType===1&&se.push({element:Q,left:Q.scrollLeft,top:Q.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<se.length;T++){var ne=se[T];ne.element.scrollLeft=ne.left,ne.element.scrollTop=ne.top}}dh=!!Bp,Hp=Bp=null}finally{Je=f,ce.p=l,J.T=a}}n.current=i,Qt=2}}function K_(){if(Qt===2){Qt=0;var n=Hi,i=so,a=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||a){a=J.T,J.T=null;var l=ce.p;ce.p=2;var f=Je;Je|=4;try{S_(n,i.alternate,i)}finally{Je=f,ce.p=l,J.T=a}}Qt=3}}function Q_(){if(Qt===4||Qt===3){Qt=0,Xu();var n=Hi,i=so,a=ao,l=P_;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Qt=5:(Qt=0,so=Hi=null,Y_(n,n.pendingLanes));var f=n.pendingLanes;if(f===0&&(Bi=null),Aa(a),i=i.stateNode,We&&typeof We.onCommitFiberRoot=="function")try{We.onCommitFiberRoot(mt,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=J.T,f=ce.p,ce.p=2,J.T=null;try{for(var d=n.onRecoverableError,E=0;E<l.length;E++){var T=l[E];d(T.value,{componentStack:T.stack})}}finally{J.T=i,ce.p=f}}(ao&3)!==0&&th(),Ir(n),f=n.pendingLanes,(a&4194090)!==0&&(f&42)!==0?n===xp?Yl++:(Yl=0,xp=n):Yl=0,Xl(0)}}function Y_(n,i){(n.pooledCacheLanes&=i)===0&&(i=n.pooledCache,i!=null&&(n.pooledCache=null,Cl(i)))}function th(n){return G_(),K_(),Q_(),X_()}function X_(){if(Qt!==5)return!1;var n=Hi,i=Rp;Rp=0;var a=Aa(ao),l=J.T,f=ce.p;try{ce.p=32>a?32:a,J.T=null,a=Ip,Ip=null;var d=Hi,E=ao;if(Qt=0,so=Hi=null,ao=0,(Je&6)!==0)throw Error(s(331));var T=Je;if(Je|=4,O_(d.current),D_(d,d.current,E,a),Je=T,Xl(0,!1),We&&typeof We.onPostCommitFiberRoot=="function")try{We.onPostCommitFiberRoot(mt,d)}catch{}return!0}finally{ce.p=f,J.T=l,Y_(n,i)}}function W_(n,i,a){i=qn(a,i),i=ap(n.stateNode,i,2),n=Oi(n,i,2),n!==null&&(Lr(n,2),Ir(n))}function st(n,i,a){if(n.tag===3)W_(n,n,a);else for(;i!==null;){if(i.tag===3){W_(i,n,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Bi===null||!Bi.has(l))){n=qn(a,n),a=t_(2),l=Oi(i,a,2),l!==null&&(n_(a,l,i,n),Lr(l,2),Ir(l));break}}i=i.return}}function kp(n,i,a){var l=n.pingCache;if(l===null){l=n.pingCache=new $A;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(a)||(Tp=!0,f.add(a),n=XA.bind(null,n,i,a),i.then(n,n))}function XA(n,i,a){var l=n.pingCache;l!==null&&l.delete(i),n.pingedLanes|=n.suspendedLanes&a,n.warmLanes&=~a,at===n&&(Be&a)===a&&(yt===4||yt===3&&(Be&62914560)===Be&&300>Pn()-Ap?(Je&2)===0&&oo(n,0):wp|=a,io===Be&&(io=0)),Ir(n)}function J_(n,i){i===0&&(i=sl()),n=Ha(n,i),n!==null&&(Lr(n,i),Ir(n))}function WA(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),J_(n,a)}function JA(n,i){var a=0;switch(n.tag){case 13:var l=n.stateNode,f=n.memoizedState;f!==null&&(a=f.retryLane);break;case 19:l=n.stateNode;break;case 22:l=n.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(i),J_(n,a)}function ZA(n,i){return As(n,i)}var nh=null,uo=null,Op=!1,rh=!1,Mp=!1,aa=0;function Ir(n){n!==uo&&n.next===null&&(uo===null?nh=uo=n:uo=uo.next=n),rh=!0,Op||(Op=!0,t1())}function Xl(n,i){if(!Mp&&rh){Mp=!0;do for(var a=!1,l=nh;l!==null;){if(n!==0){var f=l.pendingLanes;if(f===0)var d=0;else{var E=l.suspendedLanes,T=l.pingedLanes;d=(1<<31-en(42|n)+1)-1,d&=f&~(E&~T),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,n0(l,d))}else d=Be,d=Sa(l,l===at?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||Ns(l,d)||(a=!0,n0(l,d));l=l.next}while(a);Mp=!1}}function e1(){Z_()}function Z_(){rh=Op=!1;var n=0;aa!==0&&(u1()&&(n=aa),aa=0);for(var i=Pn(),a=null,l=nh;l!==null;){var f=l.next,d=e0(l,i);d===0?(l.next=null,a===null?nh=f:a.next=f,f===null&&(uo=a)):(a=l,(n!==0||(d&3)!==0)&&(rh=!0)),l=f}Xl(n)}function e0(n,i){for(var a=n.suspendedLanes,l=n.pingedLanes,f=n.expirationTimes,d=n.pendingLanes&-62914561;0<d;){var E=31-en(d),T=1<<E,O=f[E];O===-1?((T&a)===0||(T&l)!==0)&&(f[E]=rl(T,i)):O<=i&&(n.expiredLanes|=T),d&=~T}if(i=at,a=Be,a=Sa(n,n===i?a:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),l=n.callbackNode,a===0||n===i&&(Ze===2||Ze===9)||n.cancelPendingCommit!==null)return l!==null&&l!==null&&Rs(l),n.callbackNode=null,n.callbackPriority=0;if((a&3)===0||Ns(n,a)){if(i=a&-a,i===n.callbackPriority)return i;switch(l!==null&&Rs(l),Aa(a)){case 2:case 8:a=Ta;break;case 32:a=Is;break;case 268435456:a=wa;break;default:a=Is}return l=t0.bind(null,n),a=As(a,l),n.callbackPriority=i,n.callbackNode=a,i}return l!==null&&l!==null&&Rs(l),n.callbackPriority=2,n.callbackNode=null,2}function t0(n,i){if(Qt!==0&&Qt!==5)return n.callbackNode=null,n.callbackPriority=0,null;var a=n.callbackNode;if(th()&&n.callbackNode!==a)return null;var l=Be;return l=Sa(n,n===at?l:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),l===0?null:(L_(n,l,i),e0(n,Pn()),n.callbackNode!=null&&n.callbackNode===a?t0.bind(null,n):null)}function n0(n,i){if(th())return null;L_(n,i,!0)}function t1(){h1(function(){(Je&6)!==0?As(tl,e1):Z_()})}function Pp(){return aa===0&&(aa=il()),aa}function r0(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Na(""+n)}function i0(n,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,n.id&&a.setAttribute("form",n.id),i.parentNode.insertBefore(a,i),n=new FormData(n),a.parentNode.removeChild(a),n}function n1(n,i,a,l,f){if(i==="submit"&&a&&a.stateNode===f){var d=r0((f[Tt]||null).action),E=l.submitter;E&&(i=(i=E[Tt]||null)?r0(i.formAction):E.getAttribute("formAction"),i!==null&&(d=i,E=null));var T=new ka("action","action",null,l,f);n.push({event:T,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(aa!==0){var O=E?i0(f,E):new FormData(f);tp(a,{pending:!0,data:O,method:f.method,action:d},null,O)}}else typeof d=="function"&&(T.preventDefault(),O=E?i0(f,E):new FormData(f),tp(a,{pending:!0,data:O,method:f.method,action:d},d,O))},currentTarget:f}]})}}for(var Vp=0;Vp<Ed.length;Vp++){var Lp=Ed[Vp],r1=Lp.toLowerCase(),i1=Lp[0].toUpperCase()+Lp.slice(1);tr(r1,"on"+i1)}tr(Ly,"onAnimationEnd"),tr(Uy,"onAnimationIteration"),tr(jy,"onAnimationStart"),tr("dblclick","onDoubleClick"),tr("focusin","onFocus"),tr("focusout","onBlur"),tr(bA,"onTransitionRun"),tr(TA,"onTransitionStart"),tr(wA,"onTransitionCancel"),tr(zy,"onTransitionEnd"),jr("onMouseEnter",["mouseout","mouseover"]),jr("onMouseLeave",["mouseout","mouseover"]),jr("onPointerEnter",["pointerout","pointerover"]),jr("onPointerLeave",["pointerout","pointerover"]),Zn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Zn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Zn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Zn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Zn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Zn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),s1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Wl));function s0(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var l=n[a],f=l.event;l=l.listeners;e:{var d=void 0;if(i)for(var E=l.length-1;0<=E;E--){var T=l[E],O=T.instance,G=T.currentTarget;if(T=T.listener,O!==d&&f.isPropagationStopped())break e;d=T,f.currentTarget=G;try{d(f)}catch(te){Fc(te)}f.currentTarget=null,d=O}else for(E=0;E<l.length;E++){if(T=l[E],O=T.instance,G=T.currentTarget,T=T.listener,O!==d&&f.isPropagationStopped())break e;d=T,f.currentTarget=G;try{d(f)}catch(te){Fc(te)}f.currentTarget=null,d=O}}}}function Ve(n,i){var a=i[ll];a===void 0&&(a=i[ll]=new Set);var l=n+"__bubble";a.has(l)||(a0(i,n,2,!1),a.add(l))}function Up(n,i,a){var l=0;i&&(l|=4),a0(a,n,l,i)}var ih="_reactListening"+Math.random().toString(36).slice(2);function jp(n){if(!n[ih]){n[ih]=!0,ul.forEach(function(a){a!=="selectionchange"&&(s1.has(a)||Up(a,!1,n),Up(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[ih]||(i[ih]=!0,Up("selectionchange",!1,i))}}function a0(n,i,a,l){switch(D0(i)){case 2:var f=k1;break;case 8:f=O1;break;default:f=Zp}a=f.bind(null,i,a,n),f=void 0,!jn||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?n.addEventListener(i,a,{capture:!0,passive:f}):n.addEventListener(i,a,!0):f!==void 0?n.addEventListener(i,a,{passive:f}):n.addEventListener(i,a,!1)}function zp(n,i,a,l,f){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var E=l.tag;if(E===3||E===4){var T=l.stateNode.containerInfo;if(T===f)break;if(E===4)for(E=l.return;E!==null;){var O=E.tag;if((O===3||O===4)&&E.stateNode.containerInfo===f)return;E=E.return}for(;T!==null;){if(E=Ur(T),E===null)return;if(O=E.tag,O===5||O===6||O===26||O===27){l=d=E;continue e}T=T.parentNode}}l=l.return}ac(function(){var G=d,te=Un(a),se=[];e:{var K=qy.get(n);if(K!==void 0){var Q=ka,Se=n;switch(n){case"keypress":if(vr(a)===0)break e;case"keydown":case"keyup":Q=Ua;break;case"focusin":Se="focus",Q=Pa;break;case"focusout":Se="blur",Q=Pa;break;case"beforeblur":case"afterblur":Q=Pa;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Q=zn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Q=fd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Q=pc;break;case Ly:case Uy:case jy:Q=Va;break;case zy:Q=gc;break;case"scroll":case"scrollend":Q=oc;break;case"wheel":Q=ja;break;case"copy":case"cut":case"paste":Q=La;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Q=bl;break;case"toggle":case"beforetoggle":Q=vc}var Ee=(i&4)!==0,it=!Ee&&(n==="scroll"||n==="scrollend"),q=Ee?K!==null?K+"Capture":null:K;Ee=[];for(var L=G,F;L!==null;){var ne=L;if(F=ne.stateNode,ne=ne.tag,ne!==5&&ne!==26&&ne!==27||F===null||q===null||(ne=js(L,q),ne!=null&&Ee.push(Jl(L,ne,F))),it)break;L=L.return}0<Ee.length&&(K=new Q(K,Se,null,a,te),se.push({event:K,listeners:Ee}))}}if((i&7)===0){e:{if(K=n==="mouseover"||n==="pointerover",Q=n==="mouseout"||n==="pointerout",K&&a!==Br&&(Se=a.relatedTarget||a.fromElement)&&(Ur(Se)||Se[Vn]))break e;if((Q||K)&&(K=te.window===te?te:(K=te.ownerDocument)?K.defaultView||K.parentWindow:window,Q?(Se=a.relatedTarget||a.toElement,Q=G,Se=Se?Ur(Se):null,Se!==null&&(it=u(Se),Ee=Se.tag,Se!==it||Ee!==5&&Ee!==27&&Ee!==6)&&(Se=null)):(Q=null,Se=G),Q!==Se)){if(Ee=zn,ne="onMouseLeave",q="onMouseEnter",L="mouse",(n==="pointerout"||n==="pointerover")&&(Ee=bl,ne="onPointerLeave",q="onPointerEnter",L="pointer"),it=Q==null?K:pr(Q),F=Se==null?K:pr(Se),K=new Ee(ne,L+"leave",Q,a,te),K.target=it,K.relatedTarget=F,ne=null,Ur(te)===G&&(Ee=new Ee(q,L+"enter",Se,a,te),Ee.target=F,Ee.relatedTarget=it,ne=Ee),it=ne,Q&&Se)t:{for(Ee=Q,q=Se,L=0,F=Ee;F;F=co(F))L++;for(F=0,ne=q;ne;ne=co(ne))F++;for(;0<L-F;)Ee=co(Ee),L--;for(;0<F-L;)q=co(q),F--;for(;L--;){if(Ee===q||q!==null&&Ee===q.alternate)break t;Ee=co(Ee),q=co(q)}Ee=null}else Ee=null;Q!==null&&o0(se,K,Q,Ee,!1),Se!==null&&it!==null&&o0(se,it,Se,Ee,!0)}}e:{if(K=G?pr(G):window,Q=K.nodeName&&K.nodeName.toLowerCase(),Q==="select"||Q==="input"&&K.type==="file")var pe=Ry;else if(kt(K))if(Iy)pe=vA;else{pe=gA;var Me=mA}else Q=K.nodeName,!Q||Q.toLowerCase()!=="input"||K.type!=="checkbox"&&K.type!=="radio"?G&&pl(G.elementType)&&(pe=Ry):pe=yA;if(pe&&(pe=pe(n,G))){Kr(se,pe,a,te);break e}Me&&Me(n,K,G),n==="focusout"&&G&&K.type==="number"&&G.memoizedProps.value!=null&&xi(K,"number",K.value)}switch(Me=G?pr(G):window,n){case"focusin":(kt(Me)||Me.contentEditable==="true")&&(za=Me,yd=G,Sl=null);break;case"focusout":Sl=yd=za=null;break;case"mousedown":vd=!0;break;case"contextmenu":case"mouseup":case"dragend":vd=!1,Py(se,a,te);break;case"selectionchange":if(EA)break;case"keydown":case"keyup":Py(se,a,te)}var ve;if(br)e:{switch(n){case"compositionstart":var be="onCompositionStart";break e;case"compositionend":be="onCompositionEnd";break e;case"compositionupdate":be="onCompositionUpdate";break e}be=void 0}else ze?W(n,a)&&(be="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(be="onCompositionStart");be&&(_&&a.locale!=="ko"&&(ze||be!=="onCompositionStart"?be==="onCompositionEnd"&&ze&&(ve=gl()):(yr=te,Ci="value"in yr?yr.value:yr.textContent,ze=!0)),Me=sh(G,be),0<Me.length&&(be=new _l(be,n,null,a,te),se.push({event:be,listeners:Me}),ve?be.data=ve:(ve=he(a),ve!==null&&(be.data=ve)))),(ve=y?Nt(n,a):qe(n,a))&&(be=sh(G,"onBeforeInput"),0<be.length&&(Me=new _l("onBeforeInput","beforeinput",null,a,te),se.push({event:Me,listeners:be}),Me.data=ve)),n1(se,n,G,a,te)}s0(se,i)})}function Jl(n,i,a){return{instance:n,listener:i,currentTarget:a}}function sh(n,i){for(var a=i+"Capture",l=[];n!==null;){var f=n,d=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||d===null||(f=js(n,a),f!=null&&l.unshift(Jl(n,f,d)),f=js(n,i),f!=null&&l.push(Jl(n,f,d))),n.tag===3)return l;n=n.return}return[]}function co(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function o0(n,i,a,l,f){for(var d=i._reactName,E=[];a!==null&&a!==l;){var T=a,O=T.alternate,G=T.stateNode;if(T=T.tag,O!==null&&O===l)break;T!==5&&T!==26&&T!==27||G===null||(O=G,f?(G=js(a,d),G!=null&&E.unshift(Jl(a,G,O))):f||(G=js(a,d),G!=null&&E.push(Jl(a,G,O)))),a=a.return}E.length!==0&&n.push({event:i,listeners:E})}var a1=/\r\n?/g,o1=/\u0000|\uFFFD/g;function l0(n){return(typeof n=="string"?n:""+n).replace(a1,`
`).replace(o1,"")}function u0(n,i){return i=l0(i),l0(n)===i}function ah(){}function rt(n,i,a,l,f,d){switch(a){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||Ln(n,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&Ln(n,""+l);break;case"className":mr(n,"class",l);break;case"tabIndex":mr(n,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":mr(n,a,l);break;case"style":dl(n,l,d);break;case"data":if(i!=="object"){mr(n,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||a!=="href")){n.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(a);break}l=Na(""+l),n.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){n.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(i!=="input"&&rt(n,i,"name",f.name,f,null),rt(n,i,"formEncType",f.formEncType,f,null),rt(n,i,"formMethod",f.formMethod,f,null),rt(n,i,"formTarget",f.formTarget,f,null)):(rt(n,i,"encType",f.encType,f,null),rt(n,i,"method",f.method,f,null),rt(n,i,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(a);break}l=Na(""+l),n.setAttribute(a,l);break;case"onClick":l!=null&&(n.onclick=ah);break;case"onScroll":l!=null&&Ve("scroll",n);break;case"onScrollEnd":l!=null&&Ve("scrollend",n);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(f.children!=null)throw Error(s(60));n.innerHTML=a}}break;case"multiple":n.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":n.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){n.removeAttribute("xlink:href");break}a=Na(""+l),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(a,""+l):n.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(a,""):n.removeAttribute(a);break;case"capture":case"download":l===!0?n.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(a,l):n.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?n.setAttribute(a,l):n.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?n.removeAttribute(a):n.setAttribute(a,l);break;case"popover":Ve("beforetoggle",n),Ve("toggle",n),Ii(n,"popover",l);break;case"xlinkActuate":$t(n,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":$t(n,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":$t(n,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":$t(n,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":$t(n,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":$t(n,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":$t(n,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":$t(n,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":$t(n,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Ii(n,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=cd.get(a)||a,Ii(n,a,l))}}function qp(n,i,a,l,f,d){switch(a){case"style":dl(n,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(f.children!=null)throw Error(s(60));n.innerHTML=a}}break;case"children":typeof l=="string"?Ln(n,l):(typeof l=="number"||typeof l=="bigint")&&Ln(n,""+l);break;case"onScroll":l!=null&&Ve("scroll",n);break;case"onScrollEnd":l!=null&&Ve("scrollend",n);break;case"onClick":l!=null&&(n.onclick=ah);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ra.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(f=a.endsWith("Capture"),i=a.slice(2,f?a.length-7:void 0),d=n[Tt]||null,d=d!=null?d[a]:null,typeof d=="function"&&n.removeEventListener(i,d,f),typeof l=="function")){typeof d!="function"&&d!==null&&(a in n?n[a]=null:n.hasAttribute(a)&&n.removeAttribute(a)),n.addEventListener(i,l,f);break e}a in n?n[a]=l:l===!0?n.setAttribute(a,""):Ii(n,a,l)}}}function Yt(n,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ve("error",n),Ve("load",n);var l=!1,f=!1,d;for(d in a)if(a.hasOwnProperty(d)){var E=a[d];if(E!=null)switch(d){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:rt(n,i,d,E,a,null)}}f&&rt(n,i,"srcSet",a.srcSet,a,null),l&&rt(n,i,"src",a.src,a,null);return;case"input":Ve("invalid",n);var T=d=E=f=null,O=null,G=null;for(l in a)if(a.hasOwnProperty(l)){var te=a[l];if(te!=null)switch(l){case"name":f=te;break;case"type":E=te;break;case"checked":O=te;break;case"defaultChecked":G=te;break;case"value":d=te;break;case"defaultValue":T=te;break;case"children":case"dangerouslySetInnerHTML":if(te!=null)throw Error(s(137,i));break;default:rt(n,i,l,te,a,null)}}Vs(n,d,T,O,G,E,f,!1),Da(n);return;case"select":Ve("invalid",n),l=E=d=null;for(f in a)if(a.hasOwnProperty(f)&&(T=a[f],T!=null))switch(f){case"value":d=T;break;case"defaultValue":E=T;break;case"multiple":l=T;default:rt(n,i,f,T,a,null)}i=d,a=E,n.multiple=!!l,i!=null?qr(n,!!l,i,!1):a!=null&&qr(n,!!l,a,!0);return;case"textarea":Ve("invalid",n),d=f=l=null;for(E in a)if(a.hasOwnProperty(E)&&(T=a[E],T!=null))switch(E){case"value":l=T;break;case"defaultValue":f=T;break;case"children":d=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:rt(n,i,E,T,a,null)}Ls(n,l,f,d),Da(n);return;case"option":for(O in a)if(a.hasOwnProperty(O)&&(l=a[O],l!=null))switch(O){case"selected":n.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:rt(n,i,O,l,a,null)}return;case"dialog":Ve("beforetoggle",n),Ve("toggle",n),Ve("cancel",n),Ve("close",n);break;case"iframe":case"object":Ve("load",n);break;case"video":case"audio":for(l=0;l<Wl.length;l++)Ve(Wl[l],n);break;case"image":Ve("error",n),Ve("load",n);break;case"details":Ve("toggle",n);break;case"embed":case"source":case"link":Ve("error",n),Ve("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(G in a)if(a.hasOwnProperty(G)&&(l=a[G],l!=null))switch(G){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:rt(n,i,G,l,a,null)}return;default:if(pl(i)){for(te in a)a.hasOwnProperty(te)&&(l=a[te],l!==void 0&&qp(n,i,te,l,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(l=a[T],l!=null&&rt(n,i,T,l,a,null))}function l1(n,i,a,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,d=null,E=null,T=null,O=null,G=null,te=null;for(Q in a){var se=a[Q];if(a.hasOwnProperty(Q)&&se!=null)switch(Q){case"checked":break;case"value":break;case"defaultValue":O=se;default:l.hasOwnProperty(Q)||rt(n,i,Q,null,l,se)}}for(var K in l){var Q=l[K];if(se=a[K],l.hasOwnProperty(K)&&(Q!=null||se!=null))switch(K){case"type":d=Q;break;case"name":f=Q;break;case"checked":G=Q;break;case"defaultChecked":te=Q;break;case"value":E=Q;break;case"defaultValue":T=Q;break;case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(s(137,i));break;default:Q!==se&&rt(n,i,K,Q,l,se)}}Sn(n,E,T,O,G,te,d,f);return;case"select":Q=E=T=K=null;for(d in a)if(O=a[d],a.hasOwnProperty(d)&&O!=null)switch(d){case"value":break;case"multiple":Q=O;default:l.hasOwnProperty(d)||rt(n,i,d,null,l,O)}for(f in l)if(d=l[f],O=a[f],l.hasOwnProperty(f)&&(d!=null||O!=null))switch(f){case"value":K=d;break;case"defaultValue":T=d;break;case"multiple":E=d;default:d!==O&&rt(n,i,f,d,l,O)}i=T,a=E,l=Q,K!=null?qr(n,!!a,K,!1):!!l!=!!a&&(i!=null?qr(n,!!a,i,!0):qr(n,!!a,a?[]:"",!1));return;case"textarea":Q=K=null;for(T in a)if(f=a[T],a.hasOwnProperty(T)&&f!=null&&!l.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:rt(n,i,T,null,l,f)}for(E in l)if(f=l[E],d=a[E],l.hasOwnProperty(E)&&(f!=null||d!=null))switch(E){case"value":K=f;break;case"defaultValue":Q=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(s(91));break;default:f!==d&&rt(n,i,E,f,l,d)}tt(n,K,Q);return;case"option":for(var Se in a)if(K=a[Se],a.hasOwnProperty(Se)&&K!=null&&!l.hasOwnProperty(Se))switch(Se){case"selected":n.selected=!1;break;default:rt(n,i,Se,null,l,K)}for(O in l)if(K=l[O],Q=a[O],l.hasOwnProperty(O)&&K!==Q&&(K!=null||Q!=null))switch(O){case"selected":n.selected=K&&typeof K!="function"&&typeof K!="symbol";break;default:rt(n,i,O,K,l,Q)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Ee in a)K=a[Ee],a.hasOwnProperty(Ee)&&K!=null&&!l.hasOwnProperty(Ee)&&rt(n,i,Ee,null,l,K);for(G in l)if(K=l[G],Q=a[G],l.hasOwnProperty(G)&&K!==Q&&(K!=null||Q!=null))switch(G){case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(s(137,i));break;default:rt(n,i,G,K,l,Q)}return;default:if(pl(i)){for(var it in a)K=a[it],a.hasOwnProperty(it)&&K!==void 0&&!l.hasOwnProperty(it)&&qp(n,i,it,void 0,l,K);for(te in l)K=l[te],Q=a[te],!l.hasOwnProperty(te)||K===Q||K===void 0&&Q===void 0||qp(n,i,te,K,l,Q);return}}for(var q in a)K=a[q],a.hasOwnProperty(q)&&K!=null&&!l.hasOwnProperty(q)&&rt(n,i,q,null,l,K);for(se in l)K=l[se],Q=a[se],!l.hasOwnProperty(se)||K===Q||K==null&&Q==null||rt(n,i,se,K,l,Q)}var Bp=null,Hp=null;function oh(n){return n.nodeType===9?n:n.ownerDocument}function c0(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function h0(n,i){if(n===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&i==="foreignObject"?0:n}function Fp(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var $p=null;function u1(){var n=window.event;return n&&n.type==="popstate"?n===$p?!1:($p=n,!0):($p=null,!1)}var f0=typeof setTimeout=="function"?setTimeout:void 0,c1=typeof clearTimeout=="function"?clearTimeout:void 0,d0=typeof Promise=="function"?Promise:void 0,h1=typeof queueMicrotask=="function"?queueMicrotask:typeof d0<"u"?function(n){return d0.resolve(null).then(n).catch(f1)}:f0;function f1(n){setTimeout(function(){throw n})}function $i(n){return n==="head"}function p0(n,i){var a=i,l=0,f=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(0<l&&8>l){a=l;var E=n.ownerDocument;if(a&1&&Zl(E.documentElement),a&2&&Zl(E.body),a&4)for(a=E.head,Zl(a),E=a.firstChild;E;){var T=E.nextSibling,O=E.nodeName;E[ks]||O==="SCRIPT"||O==="STYLE"||O==="LINK"&&E.rel.toLowerCase()==="stylesheet"||a.removeChild(E),E=T}}if(f===0){n.removeChild(d),ou(i);return}f--}else a==="$"||a==="$?"||a==="$!"?f++:l=a.charCodeAt(0)-48;else l=0;a=d}while(a);ou(i)}function Gp(n){var i=n.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Gp(a),Ri(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}n.removeChild(a)}}function d1(n,i,a,l){for(;n.nodeType===1;){var f=a;if(n.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(l){if(!n[ks])switch(i){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(d=n.getAttribute("rel"),d==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(d!==f.rel||n.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||n.getAttribute("title")!==(f.title==null?null:f.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(d=n.getAttribute("src"),(d!==(f.src==null?null:f.src)||n.getAttribute("type")!==(f.type==null?null:f.type)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&d&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(i==="input"&&n.type==="hidden"){var d=f.name==null?null:""+f.name;if(f.type==="hidden"&&n.getAttribute("name")===d)return n}else return n;if(n=rr(n.nextSibling),n===null)break}return null}function p1(n,i,a){if(i==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!a||(n=rr(n.nextSibling),n===null))return null;return n}function Kp(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState==="complete"}function m1(n,i){var a=n.ownerDocument;if(n.data!=="$?"||a.readyState==="complete")i();else{var l=function(){i(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),n._reactRetry=l}}function rr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return n}var Qp=null;function m0(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}function g0(n,i,a){switch(i=oh(a),n){case"html":if(n=i.documentElement,!n)throw Error(s(452));return n;case"head":if(n=i.head,!n)throw Error(s(453));return n;case"body":if(n=i.body,!n)throw Error(s(454));return n;default:throw Error(s(451))}}function Zl(n){for(var i=n.attributes;i.length;)n.removeAttributeNode(i[0]);Ri(n)}var Kn=new Map,y0=new Set;function lh(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var ai=ce.d;ce.d={f:g1,r:y1,D:v1,C:_1,L:E1,m:b1,X:w1,S:T1,M:S1};function g1(){var n=ai.f(),i=Zc();return n||i}function y1(n){var i=dr(n);i!==null&&i.tag===5&&i.type==="form"?Lv(i):ai.r(n)}var ho=typeof document>"u"?null:document;function v0(n,i,a){var l=ho;if(l&&typeof i=="string"&&i){var f=wt(i);f='link[rel="'+n+'"][href="'+f+'"]',typeof a=="string"&&(f+='[crossorigin="'+a+'"]'),y0.has(f)||(y0.add(f),n={rel:n,crossOrigin:a,href:i},l.querySelector(f)===null&&(i=l.createElement("link"),Yt(i,"link",n),vt(i),l.head.appendChild(i)))}}function v1(n){ai.D(n),v0("dns-prefetch",n,null)}function _1(n,i){ai.C(n,i),v0("preconnect",n,i)}function E1(n,i,a){ai.L(n,i,a);var l=ho;if(l&&n&&i){var f='link[rel="preload"][as="'+wt(i)+'"]';i==="image"&&a&&a.imageSrcSet?(f+='[imagesrcset="'+wt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(f+='[imagesizes="'+wt(a.imageSizes)+'"]')):f+='[href="'+wt(n)+'"]';var d=f;switch(i){case"style":d=fo(n);break;case"script":d=po(n)}Kn.has(d)||(n=v({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:n,as:i},a),Kn.set(d,n),l.querySelector(f)!==null||i==="style"&&l.querySelector(eu(d))||i==="script"&&l.querySelector(tu(d))||(i=l.createElement("link"),Yt(i,"link",n),vt(i),l.head.appendChild(i)))}}function b1(n,i){ai.m(n,i);var a=ho;if(a&&n){var l=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+wt(l)+'"][href="'+wt(n)+'"]',d=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=po(n)}if(!Kn.has(d)&&(n=v({rel:"modulepreload",href:n},i),Kn.set(d,n),a.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(tu(d)))return}l=a.createElement("link"),Yt(l,"link",n),vt(l),a.head.appendChild(l)}}}function T1(n,i,a){ai.S(n,i,a);var l=ho;if(l&&n){var f=un(l).hoistableStyles,d=fo(n);i=i||"default";var E=f.get(d);if(!E){var T={loading:0,preload:null};if(E=l.querySelector(eu(d)))T.loading=5;else{n=v({rel:"stylesheet",href:n,"data-precedence":i},a),(a=Kn.get(d))&&Yp(n,a);var O=E=l.createElement("link");vt(O),Yt(O,"link",n),O._p=new Promise(function(G,te){O.onload=G,O.onerror=te}),O.addEventListener("load",function(){T.loading|=1}),O.addEventListener("error",function(){T.loading|=2}),T.loading|=4,uh(E,i,l)}E={type:"stylesheet",instance:E,count:1,state:T},f.set(d,E)}}}function w1(n,i){ai.X(n,i);var a=ho;if(a&&n){var l=un(a).hoistableScripts,f=po(n),d=l.get(f);d||(d=a.querySelector(tu(f)),d||(n=v({src:n,async:!0},i),(i=Kn.get(f))&&Xp(n,i),d=a.createElement("script"),vt(d),Yt(d,"link",n),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(f,d))}}function S1(n,i){ai.M(n,i);var a=ho;if(a&&n){var l=un(a).hoistableScripts,f=po(n),d=l.get(f);d||(d=a.querySelector(tu(f)),d||(n=v({src:n,async:!0,type:"module"},i),(i=Kn.get(f))&&Xp(n,i),d=a.createElement("script"),vt(d),Yt(d,"link",n),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(f,d))}}function _0(n,i,a,l){var f=(f=ye.current)?lh(f):null;if(!f)throw Error(s(446));switch(n){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=fo(a.href),a=un(f).hoistableStyles,l=a.get(i),l||(l={type:"style",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){n=fo(a.href);var d=un(f).hoistableStyles,E=d.get(n);if(E||(f=f.ownerDocument||f,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(n,E),(d=f.querySelector(eu(n)))&&!d._p&&(E.instance=d,E.state.loading=5),Kn.has(n)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Kn.set(n,a),d||A1(f,n,a,E.state))),i&&l===null)throw Error(s(528,""));return E}if(i&&l!==null)throw Error(s(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=po(a),a=un(f).hoistableScripts,l=a.get(i),l||(l={type:"script",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,n))}}function fo(n){return'href="'+wt(n)+'"'}function eu(n){return'link[rel="stylesheet"]['+n+"]"}function E0(n){return v({},n,{"data-precedence":n.precedence,precedence:null})}function A1(n,i,a,l){n.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=n.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Yt(i,"link",a),vt(i),n.head.appendChild(i))}function po(n){return'[src="'+wt(n)+'"]'}function tu(n){return"script[async]"+n}function b0(n,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var l=n.querySelector('style[data-href~="'+wt(a.href)+'"]');if(l)return i.instance=l,vt(l),l;var f=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(n.ownerDocument||n).createElement("style"),vt(l),Yt(l,"style",f),uh(l,a.precedence,n),i.instance=l;case"stylesheet":f=fo(a.href);var d=n.querySelector(eu(f));if(d)return i.state.loading|=4,i.instance=d,vt(d),d;l=E0(a),(f=Kn.get(f))&&Yp(l,f),d=(n.ownerDocument||n).createElement("link"),vt(d);var E=d;return E._p=new Promise(function(T,O){E.onload=T,E.onerror=O}),Yt(d,"link",l),i.state.loading|=4,uh(d,a.precedence,n),i.instance=d;case"script":return d=po(a.src),(f=n.querySelector(tu(d)))?(i.instance=f,vt(f),f):(l=a,(f=Kn.get(d))&&(l=v({},a),Xp(l,f)),n=n.ownerDocument||n,f=n.createElement("script"),vt(f),Yt(f,"link",l),n.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,uh(l,a.precedence,n));return i.instance}function uh(n,i,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,d=f,E=0;E<l.length;E++){var T=l[E];if(T.dataset.precedence===i)d=T;else if(d!==f)break}d?d.parentNode.insertBefore(n,d.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(n,i.firstChild))}function Yp(n,i){n.crossOrigin==null&&(n.crossOrigin=i.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=i.referrerPolicy),n.title==null&&(n.title=i.title)}function Xp(n,i){n.crossOrigin==null&&(n.crossOrigin=i.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=i.referrerPolicy),n.integrity==null&&(n.integrity=i.integrity)}var ch=null;function T0(n,i,a){if(ch===null){var l=new Map,f=ch=new Map;f.set(a,l)}else f=ch,l=f.get(a),l||(l=new Map,f.set(a,l));if(l.has(n))return l;for(l.set(n,null),a=a.getElementsByTagName(n),f=0;f<a.length;f++){var d=a[f];if(!(d[ks]||d[Dt]||n==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var E=d.getAttribute(i)||"";E=n+E;var T=l.get(E);T?T.push(d):l.set(E,[d])}}return l}function w0(n,i,a){n=n.ownerDocument||n,n.head.insertBefore(a,i==="title"?n.querySelector("head > title"):null)}function R1(n,i,a){if(a===1||i.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return n=i.disabled,typeof i.precedence=="string"&&n==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function S0(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var nu=null;function I1(){}function x1(n,i,a){if(nu===null)throw Error(s(475));var l=nu;if(i.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var f=fo(a.href),d=n.querySelector(eu(f));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(l.count++,l=hh.bind(l),n.then(l,l)),i.state.loading|=4,i.instance=d,vt(d);return}d=n.ownerDocument||n,a=E0(a),(f=Kn.get(f))&&Yp(a,f),d=d.createElement("link"),vt(d);var E=d;E._p=new Promise(function(T,O){E.onload=T,E.onerror=O}),Yt(d,"link",a),i.instance=d}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,n),(n=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=hh.bind(l),n.addEventListener("load",i),n.addEventListener("error",i))}}function C1(){if(nu===null)throw Error(s(475));var n=nu;return n.stylesheets&&n.count===0&&Wp(n,n.stylesheets),0<n.count?function(i){var a=setTimeout(function(){if(n.stylesheets&&Wp(n,n.stylesheets),n.unsuspend){var l=n.unsuspend;n.unsuspend=null,l()}},6e4);return n.unsuspend=i,function(){n.unsuspend=null,clearTimeout(a)}}:null}function hh(){if(this.count--,this.count===0){if(this.stylesheets)Wp(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var fh=null;function Wp(n,i){n.stylesheets=null,n.unsuspend!==null&&(n.count++,fh=new Map,i.forEach(D1,n),fh=null,hh.call(n))}function D1(n,i){if(!(i.state.loading&4)){var a=fh.get(n);if(a)var l=a.get(null);else{a=new Map,fh.set(n,a);for(var f=n.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<f.length;d++){var E=f[d];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(a.set(E.dataset.precedence,E),l=E)}l&&a.set(null,l)}f=i.instance,E=f.getAttribute("data-precedence"),d=a.get(E)||l,d===l&&a.set(null,f),a.set(E,f),this.count++,l=hh.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),d?d.parentNode.insertBefore(f,d.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(f,n.firstChild)),i.state.loading|=4}}var ru={$$typeof:Y,Provider:null,Consumer:null,_currentValue:me,_currentValue2:me,_threadCount:0};function N1(n,i,a,l,f,d,E,T){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Vr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vr(0),this.hiddenUpdates=Vr(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=d,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function A0(n,i,a,l,f,d,E,T,O,G,te,se){return n=new N1(n,i,a,E,T,O,G,se),i=1,d===!0&&(i|=24),d=Rn(3,null,null,i),n.current=d,d.stateNode=n,i=kd(),i.refCount++,n.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:a,cache:i},Vd(d),n}function R0(n){return n?(n=Fa,n):Fa}function I0(n,i,a,l,f,d){f=R0(f),l.context===null?l.context=f:l.pendingContext=f,l=ki(i),l.payload={element:a},d=d===void 0?null:d,d!==null&&(l.callback=d),a=Oi(n,l,i),a!==null&&(Nn(a,n,i),Ol(a,n,i))}function x0(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Jp(n,i){x0(n,i),(n=n.alternate)&&x0(n,i)}function C0(n){if(n.tag===13){var i=Ha(n,67108864);i!==null&&Nn(i,n,67108864),Jp(n,67108864)}}var dh=!0;function k1(n,i,a,l){var f=J.T;J.T=null;var d=ce.p;try{ce.p=2,Zp(n,i,a,l)}finally{ce.p=d,J.T=f}}function O1(n,i,a,l){var f=J.T;J.T=null;var d=ce.p;try{ce.p=8,Zp(n,i,a,l)}finally{ce.p=d,J.T=f}}function Zp(n,i,a,l){if(dh){var f=em(l);if(f===null)zp(n,i,l,ph,a),N0(n,l);else if(P1(f,n,i,a,l))l.stopPropagation();else if(N0(n,l),i&4&&-1<M1.indexOf(n)){for(;f!==null;){var d=dr(f);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var E=Jn(d.pendingLanes);if(E!==0){var T=d;for(T.pendingLanes|=2,T.entangledLanes|=2;E;){var O=1<<31-en(E);T.entanglements[1]|=O,E&=~O}Ir(d),(Je&6)===0&&(Wc=Pn()+500,Xl(0))}}break;case 13:T=Ha(d,2),T!==null&&Nn(T,d,2),Zc(),Jp(d,2)}if(d=em(l),d===null&&zp(n,i,l,ph,a),d===f)break;f=d}f!==null&&l.stopPropagation()}else zp(n,i,l,null,a)}}function em(n){return n=Un(n),tm(n)}var ph=null;function tm(n){if(ph=null,n=Ur(n),n!==null){var i=u(n);if(i===null)n=null;else{var a=i.tag;if(a===13){if(n=h(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null)}}return ph=n,null}function D0(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(id()){case tl:return 2;case Ta:return 8;case Is:case sd:return 32;case wa:return 268435456;default:return 32}default:return 32}}var nm=!1,Gi=null,Ki=null,Qi=null,iu=new Map,su=new Map,Yi=[],M1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function N0(n,i){switch(n){case"focusin":case"focusout":Gi=null;break;case"dragenter":case"dragleave":Ki=null;break;case"mouseover":case"mouseout":Qi=null;break;case"pointerover":case"pointerout":iu.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":su.delete(i.pointerId)}}function au(n,i,a,l,f,d){return n===null||n.nativeEvent!==d?(n={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:d,targetContainers:[f]},i!==null&&(i=dr(i),i!==null&&C0(i)),n):(n.eventSystemFlags|=l,i=n.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),n)}function P1(n,i,a,l,f){switch(i){case"focusin":return Gi=au(Gi,n,i,a,l,f),!0;case"dragenter":return Ki=au(Ki,n,i,a,l,f),!0;case"mouseover":return Qi=au(Qi,n,i,a,l,f),!0;case"pointerover":var d=f.pointerId;return iu.set(d,au(iu.get(d)||null,n,i,a,l,f)),!0;case"gotpointercapture":return d=f.pointerId,su.set(d,au(su.get(d)||null,n,i,a,l,f)),!0}return!1}function k0(n){var i=Ur(n.target);if(i!==null){var a=u(i);if(a!==null){if(i=a.tag,i===13){if(i=h(a),i!==null){n.blockedOn=i,Zu(n.priority,function(){if(a.tag===13){var l=Dn();l=wi(l);var f=Ha(a,l);f!==null&&Nn(f,a,l),Jp(a,l)}});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function mh(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=em(n.nativeEvent);if(a===null){a=n.nativeEvent;var l=new a.constructor(a.type,a);Br=l,a.target.dispatchEvent(l),Br=null}else return i=dr(a),i!==null&&C0(i),n.blockedOn=a,!1;i.shift()}return!0}function O0(n,i,a){mh(n)&&a.delete(i)}function V1(){nm=!1,Gi!==null&&mh(Gi)&&(Gi=null),Ki!==null&&mh(Ki)&&(Ki=null),Qi!==null&&mh(Qi)&&(Qi=null),iu.forEach(O0),su.forEach(O0)}function gh(n,i){n.blockedOn===i&&(n.blockedOn=null,nm||(nm=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,V1)))}var yh=null;function M0(n){yh!==n&&(yh=n,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){yh===n&&(yh=null);for(var i=0;i<n.length;i+=3){var a=n[i],l=n[i+1],f=n[i+2];if(typeof l!="function"){if(tm(l||a)===null)continue;break}var d=dr(a);d!==null&&(n.splice(i,3),i-=3,tp(d,{pending:!0,data:f,method:a.method,action:l},l,f))}}))}function ou(n){function i(O){return gh(O,n)}Gi!==null&&gh(Gi,n),Ki!==null&&gh(Ki,n),Qi!==null&&gh(Qi,n),iu.forEach(i),su.forEach(i);for(var a=0;a<Yi.length;a++){var l=Yi[a];l.blockedOn===n&&(l.blockedOn=null)}for(;0<Yi.length&&(a=Yi[0],a.blockedOn===null);)k0(a),a.blockedOn===null&&Yi.shift();if(a=(n.ownerDocument||n).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var f=a[l],d=a[l+1],E=f[Tt]||null;if(typeof d=="function")E||M0(a);else if(E){var T=null;if(d&&d.hasAttribute("formAction")){if(f=d,E=d[Tt]||null)T=E.formAction;else if(tm(f)!==null)continue}else T=E.action;typeof T=="function"?a[l+1]=T:(a.splice(l,3),l-=3),M0(a)}}}function rm(n){this._internalRoot=n}vh.prototype.render=rm.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(s(409));var a=i.current,l=Dn();I0(a,l,n,i,null,null)},vh.prototype.unmount=rm.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;I0(n.current,2,null,n,null,null),Zc(),i[Vn]=null}};function vh(n){this._internalRoot=n}vh.prototype.unstable_scheduleHydration=function(n){if(n){var i=Si();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Yi.length&&i!==0&&i<Yi[a].priority;a++);Yi.splice(a,0,n),a===0&&k0(n)}};var P0=e.version;if(P0!=="19.1.0")throw Error(s(527,P0,"19.1.0"));ce.findDOMNode=function(n){var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(s(188)):(n=Object.keys(n).join(","),Error(s(268,n)));return n=m(i),n=n!==null?g(n):null,n=n===null?null:n.stateNode,n};var L1={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:J,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _h=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_h.isDisabled&&_h.supportsFiber)try{mt=_h.inject(L1),We=_h}catch{}}return uu.createRoot=function(n,i){if(!o(n))throw Error(s(299));var a=!1,l="",f=Wv,d=Jv,E=Zv,T=null;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(E=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(T=i.unstable_transitionCallbacks)),i=A0(n,1,!1,null,null,a,l,f,d,E,T,null),n[Vn]=i.current,jp(n),new rm(i)},uu.hydrateRoot=function(n,i,a){if(!o(n))throw Error(s(299));var l=!1,f="",d=Wv,E=Jv,T=Zv,O=null,G=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(f=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(E=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(O=a.unstable_transitionCallbacks),a.formState!==void 0&&(G=a.formState)),i=A0(n,1,!0,i,a??null,l,f,d,E,T,O,G),i.context=R0(null),a=i.current,l=Dn(),l=wi(l),f=ki(l),f.callback=null,Oi(a,f,l),a=l,i.current.lanes=a,Lr(i,a),Ir(i),n[Vn]=i.current,jp(n),new vh(i)},uu.version="19.1.0",uu}var $0;function K1(){if($0)return am.exports;$0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),am.exports=G1(),am.exports}var Q1=K1();const Y1=Wb(Q1);var cu={},G0;function X1(){if(G0)return cu;G0=1,Object.defineProperty(cu,"__esModule",{value:!0}),cu.parse=h,cu.serialize=g;const r=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,s=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,u=(()=>{const w=function(){};return w.prototype=Object.create(null),w})();function h(w,I){const C=new u,z=w.length;if(z<2)return C;const U=(I==null?void 0:I.decode)||v;let $=0;do{const Z=w.indexOf("=",$);if(Z===-1)break;const Y=w.indexOf(";",$),H=Y===-1?z:Y;if(Z>H){$=w.lastIndexOf(";",Z-1)+1;continue}const ee=p(w,$,Z),ue=m(w,Z,ee),N=w.slice(ee,ue);if(C[N]===void 0){let x=p(w,Z+1,H),D=m(w,H,x);const k=U(w.slice(x,D));C[N]=k}$=H+1}while($<z);return C}function p(w,I,C){do{const z=w.charCodeAt(I);if(z!==32&&z!==9)return I}while(++I<C);return C}function m(w,I,C){for(;I>C;){const z=w.charCodeAt(--I);if(z!==32&&z!==9)return I+1}return C}function g(w,I,C){const z=(C==null?void 0:C.encode)||encodeURIComponent;if(!r.test(w))throw new TypeError(`argument name is invalid: ${w}`);const U=z(I);if(!e.test(U))throw new TypeError(`argument val is invalid: ${I}`);let $=w+"="+U;if(!C)return $;if(C.maxAge!==void 0){if(!Number.isInteger(C.maxAge))throw new TypeError(`option maxAge is invalid: ${C.maxAge}`);$+="; Max-Age="+C.maxAge}if(C.domain){if(!t.test(C.domain))throw new TypeError(`option domain is invalid: ${C.domain}`);$+="; Domain="+C.domain}if(C.path){if(!s.test(C.path))throw new TypeError(`option path is invalid: ${C.path}`);$+="; Path="+C.path}if(C.expires){if(!b(C.expires)||!Number.isFinite(C.expires.valueOf()))throw new TypeError(`option expires is invalid: ${C.expires}`);$+="; Expires="+C.expires.toUTCString()}if(C.httpOnly&&($+="; HttpOnly"),C.secure&&($+="; Secure"),C.partitioned&&($+="; Partitioned"),C.priority)switch(typeof C.priority=="string"?C.priority.toLowerCase():void 0){case"low":$+="; Priority=Low";break;case"medium":$+="; Priority=Medium";break;case"high":$+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${C.priority}`)}if(C.sameSite)switch(typeof C.sameSite=="string"?C.sameSite.toLowerCase():C.sameSite){case!0:case"strict":$+="; SameSite=Strict";break;case"lax":$+="; SameSite=Lax";break;case"none":$+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${C.sameSite}`)}return $}function v(w){if(w.indexOf("%")===-1)return w;try{return decodeURIComponent(w)}catch{return w}}function b(w){return o.call(w)==="[object Date]"}return cu}X1();/**
 * react-router v7.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var K0="popstate";function W1(r={}){function e(o,u){let{pathname:h="/",search:p="",hash:m=""}=ya(o.location.hash.substring(1));return!h.startsWith("/")&&!h.startsWith(".")&&(h="/"+h),Mm("",{pathname:h,search:p,hash:m},u.state&&u.state.usr||null,u.state&&u.state.key||"default")}function t(o,u){let h=o.document.querySelector("base"),p="";if(h&&h.getAttribute("href")){let m=o.location.href,g=m.indexOf("#");p=g===-1?m:m.slice(0,g)}return p+"#"+(typeof u=="string"?u:Au(u))}function s(o,u){Xn(o.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(u)})`)}return Z1(e,t,s,r)}function ht(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function Xn(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function J1(){return Math.random().toString(36).substring(2,10)}function Q0(r,e){return{usr:r.state,key:r.key,idx:e}}function Mm(r,e,t=null,s){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?ya(e):e,state:t,key:e&&e.key||s||J1()}}function Au({pathname:r="/",search:e="",hash:t=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(r+=t.charAt(0)==="#"?t:"#"+t),r}function ya(r){let e={};if(r){let t=r.indexOf("#");t>=0&&(e.hash=r.substring(t),r=r.substring(0,t));let s=r.indexOf("?");s>=0&&(e.search=r.substring(s),r=r.substring(0,s)),r&&(e.pathname=r)}return e}function Z1(r,e,t,s={}){let{window:o=document.defaultView,v5Compat:u=!1}=s,h=o.history,p="POP",m=null,g=v();g==null&&(g=0,h.replaceState({...h.state,idx:g},""));function v(){return(h.state||{idx:null}).idx}function b(){p="POP";let U=v(),$=U==null?null:U-g;g=U,m&&m({action:p,location:z.location,delta:$})}function w(U,$){p="PUSH";let Z=Mm(z.location,U,$);t&&t(Z,U),g=v()+1;let Y=Q0(Z,g),H=z.createHref(Z);try{h.pushState(Y,"",H)}catch(ee){if(ee instanceof DOMException&&ee.name==="DataCloneError")throw ee;o.location.assign(H)}u&&m&&m({action:p,location:z.location,delta:1})}function I(U,$){p="REPLACE";let Z=Mm(z.location,U,$);t&&t(Z,U),g=v();let Y=Q0(Z,g),H=z.createHref(Z);h.replaceState(Y,"",H),u&&m&&m({action:p,location:z.location,delta:0})}function C(U){let $=o.location.origin!=="null"?o.location.origin:o.location.href,Z=typeof U=="string"?U:Au(U);return Z=Z.replace(/ $/,"%20"),ht($,`No window.location.(origin|href) available to create URL for href: ${Z}`),new URL(Z,$)}let z={get action(){return p},get location(){return r(o,h)},listen(U){if(m)throw new Error("A history only accepts one active listener");return o.addEventListener(K0,b),m=U,()=>{o.removeEventListener(K0,b),m=null}},createHref(U){return e(o,U)},createURL:C,encodeLocation(U){let $=C(U);return{pathname:$.pathname,search:$.search,hash:$.hash}},push:w,replace:I,go(U){return h.go(U)}};return z}function Jb(r,e,t="/"){return eR(r,e,t,!1)}function eR(r,e,t,s){let o=typeof e=="string"?ya(e):e,u=pi(o.pathname||"/",t);if(u==null)return null;let h=Zb(r);tR(h);let p=null;for(let m=0;p==null&&m<h.length;++m){let g=fR(u);p=cR(h[m],g,s)}return p}function Zb(r,e=[],t=[],s=""){let o=(u,h,p)=>{let m={relativePath:p===void 0?u.path||"":p,caseSensitive:u.caseSensitive===!0,childrenIndex:h,route:u};m.relativePath.startsWith("/")&&(ht(m.relativePath.startsWith(s),`Absolute route path "${m.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(s.length));let g=hi([s,m.relativePath]),v=t.concat(m);u.children&&u.children.length>0&&(ht(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),Zb(u.children,e,v,g)),!(u.path==null&&!u.index)&&e.push({path:g,score:lR(g,u.index),routesMeta:v})};return r.forEach((u,h)=>{var p;if(u.path===""||!((p=u.path)!=null&&p.includes("?")))o(u,h);else for(let m of eT(u.path))o(u,h,m)}),e}function eT(r){let e=r.split("/");if(e.length===0)return[];let[t,...s]=e,o=t.endsWith("?"),u=t.replace(/\?$/,"");if(s.length===0)return o?[u,""]:[u];let h=eT(s.join("/")),p=[];return p.push(...h.map(m=>m===""?u:[u,m].join("/"))),o&&p.push(...h),p.map(m=>r.startsWith("/")&&m===""?"/":m)}function tR(r){r.sort((e,t)=>e.score!==t.score?t.score-e.score:uR(e.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}var nR=/^:[\w-]+$/,rR=3,iR=2,sR=1,aR=10,oR=-2,Y0=r=>r==="*";function lR(r,e){let t=r.split("/"),s=t.length;return t.some(Y0)&&(s+=oR),e&&(s+=iR),t.filter(o=>!Y0(o)).reduce((o,u)=>o+(nR.test(u)?rR:u===""?sR:aR),s)}function uR(r,e){return r.length===e.length&&r.slice(0,-1).every((s,o)=>s===e[o])?r[r.length-1]-e[e.length-1]:0}function cR(r,e,t=!1){let{routesMeta:s}=r,o={},u="/",h=[];for(let p=0;p<s.length;++p){let m=s[p],g=p===s.length-1,v=u==="/"?e:e.slice(u.length)||"/",b=Xh({path:m.relativePath,caseSensitive:m.caseSensitive,end:g},v),w=m.route;if(!b&&g&&t&&!s[s.length-1].route.index&&(b=Xh({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},v)),!b)return null;Object.assign(o,b.params),h.push({params:o,pathname:hi([u,b.pathname]),pathnameBase:gR(hi([u,b.pathnameBase])),route:w}),b.pathnameBase!=="/"&&(u=hi([u,b.pathnameBase]))}return h}function Xh(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[t,s]=hR(r.path,r.caseSensitive,r.end),o=e.match(t);if(!o)return null;let u=o[0],h=u.replace(/(.)\/+$/,"$1"),p=o.slice(1);return{params:s.reduce((g,{paramName:v,isOptional:b},w)=>{if(v==="*"){let C=p[w]||"";h=u.slice(0,u.length-C.length).replace(/(.)\/+$/,"$1")}const I=p[w];return b&&!I?g[v]=void 0:g[v]=(I||"").replace(/%2F/g,"/"),g},{}),pathname:u,pathnameBase:h,pattern:r}}function hR(r,e=!1,t=!0){Xn(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],o="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,p,m)=>(s.push({paramName:p,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(s.push({paramName:"*"}),o+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":r!==""&&r!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),s]}function fR(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Xn(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function pi(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,s=r.charAt(t);return s&&s!=="/"?null:r.slice(t)||"/"}function dR(r,e="/"){let{pathname:t,search:s="",hash:o=""}=typeof r=="string"?ya(r):r;return{pathname:t?t.startsWith("/")?t:pR(t,e):e,search:yR(s),hash:vR(o)}}function pR(r,e){let t=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function cm(r,e,t,s){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function mR(r){return r.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function vg(r){let e=mR(r);return e.map((t,s)=>s===e.length-1?t.pathname:t.pathnameBase)}function _g(r,e,t,s=!1){let o;typeof r=="string"?o=ya(r):(o={...r},ht(!o.pathname||!o.pathname.includes("?"),cm("?","pathname","search",o)),ht(!o.pathname||!o.pathname.includes("#"),cm("#","pathname","hash",o)),ht(!o.search||!o.search.includes("#"),cm("#","search","hash",o)));let u=r===""||o.pathname==="",h=u?"/":o.pathname,p;if(h==null)p=t;else{let b=e.length-1;if(!s&&h.startsWith("..")){let w=h.split("/");for(;w[0]==="..";)w.shift(),b-=1;o.pathname=w.join("/")}p=b>=0?e[b]:"/"}let m=dR(o,p),g=h&&h!=="/"&&h.endsWith("/"),v=(u||h===".")&&t.endsWith("/");return!m.pathname.endsWith("/")&&(g||v)&&(m.pathname+="/"),m}var hi=r=>r.join("/").replace(/\/\/+/g,"/"),gR=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),yR=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,vR=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function _R(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var tT=["POST","PUT","PATCH","DELETE"];new Set(tT);var ER=["GET",...tT];new Set(ER);var Ho=j.createContext(null);Ho.displayName="DataRouter";var Tf=j.createContext(null);Tf.displayName="DataRouterState";var nT=j.createContext({isTransitioning:!1});nT.displayName="ViewTransition";var bR=j.createContext(new Map);bR.displayName="Fetchers";var TR=j.createContext(null);TR.displayName="Await";var cr=j.createContext(null);cr.displayName="Navigation";var Mu=j.createContext(null);Mu.displayName="Location";var hr=j.createContext({outlet:null,matches:[],isDataRoute:!1});hr.displayName="Route";var Eg=j.createContext(null);Eg.displayName="RouteError";function wR(r,{relative:e}={}){ht(Fo(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:s}=j.useContext(cr),{hash:o,pathname:u,search:h}=Pu(r,{relative:e}),p=u;return t!=="/"&&(p=u==="/"?t:hi([t,u])),s.createHref({pathname:p,search:h,hash:o})}function Fo(){return j.useContext(Mu)!=null}function _s(){return ht(Fo(),"useLocation() may be used only in the context of a <Router> component."),j.useContext(Mu).location}var rT="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function iT(r){j.useContext(cr).static||j.useLayoutEffect(r)}function $o(){let{isDataRoute:r}=j.useContext(hr);return r?LR():SR()}function SR(){ht(Fo(),"useNavigate() may be used only in the context of a <Router> component.");let r=j.useContext(Ho),{basename:e,navigator:t}=j.useContext(cr),{matches:s}=j.useContext(hr),{pathname:o}=_s(),u=JSON.stringify(vg(s)),h=j.useRef(!1);return iT(()=>{h.current=!0}),j.useCallback((m,g={})=>{if(Xn(h.current,rT),!h.current)return;if(typeof m=="number"){t.go(m);return}let v=_g(m,JSON.parse(u),o,g.relative==="path");r==null&&e!=="/"&&(v.pathname=v.pathname==="/"?e:hi([e,v.pathname])),(g.replace?t.replace:t.push)(v,g.state,g)},[e,t,u,o,r])}j.createContext(null);function AR(){let{matches:r}=j.useContext(hr),e=r[r.length-1];return e?e.params:{}}function Pu(r,{relative:e}={}){let{matches:t}=j.useContext(hr),{pathname:s}=_s(),o=JSON.stringify(vg(t));return j.useMemo(()=>_g(r,JSON.parse(o),s,e==="path"),[r,o,s,e])}function RR(r,e){return sT(r,e)}function sT(r,e,t,s){var Z;ht(Fo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o,static:u}=j.useContext(cr),{matches:h}=j.useContext(hr),p=h[h.length-1],m=p?p.params:{},g=p?p.pathname:"/",v=p?p.pathnameBase:"/",b=p&&p.route;{let Y=b&&b.path||"";aT(g,!b||Y.endsWith("*")||Y.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${Y}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Y}"> to <Route path="${Y==="/"?"*":`${Y}/*`}">.`)}let w=_s(),I;if(e){let Y=typeof e=="string"?ya(e):e;ht(v==="/"||((Z=Y.pathname)==null?void 0:Z.startsWith(v)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${v}" but pathname "${Y.pathname}" was given in the \`location\` prop.`),I=Y}else I=w;let C=I.pathname||"/",z=C;if(v!=="/"){let Y=v.replace(/^\//,"").split("/");z="/"+C.replace(/^\//,"").split("/").slice(Y.length).join("/")}let U=!u&&t&&t.matches&&t.matches.length>0?t.matches:Jb(r,{pathname:z});Xn(b||U!=null,`No routes matched location "${I.pathname}${I.search}${I.hash}" `),Xn(U==null||U[U.length-1].route.element!==void 0||U[U.length-1].route.Component!==void 0||U[U.length-1].route.lazy!==void 0,`Matched leaf route at location "${I.pathname}${I.search}${I.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let $=NR(U&&U.map(Y=>Object.assign({},Y,{params:Object.assign({},m,Y.params),pathname:hi([v,o.encodeLocation?o.encodeLocation(Y.pathname).pathname:Y.pathname]),pathnameBase:Y.pathnameBase==="/"?v:hi([v,o.encodeLocation?o.encodeLocation(Y.pathnameBase).pathname:Y.pathnameBase])})),h,t,s);return e&&$?j.createElement(Mu.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...I},navigationType:"POP"}},$):$}function IR(){let r=VR(),e=_R(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),t=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:s},u={padding:"2px 4px",backgroundColor:s},h=null;return console.error("Error handled by React Router default ErrorBoundary:",r),h=j.createElement(j.Fragment,null,j.createElement("p",null,"💿 Hey developer 👋"),j.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",j.createElement("code",{style:u},"ErrorBoundary")," or"," ",j.createElement("code",{style:u},"errorElement")," prop on your route.")),j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},e),t?j.createElement("pre",{style:o},t):null,h)}var xR=j.createElement(IR,null),CR=class extends j.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){console.error("React Router caught the following error during render",r,e)}render(){return this.state.error!==void 0?j.createElement(hr.Provider,{value:this.props.routeContext},j.createElement(Eg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function DR({routeContext:r,match:e,children:t}){let s=j.useContext(Ho);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),j.createElement(hr.Provider,{value:r},t)}function NR(r,e=[],t=null,s=null){if(r==null){if(!t)return null;if(t.errors)r=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)r=t.matches;else return null}let o=r,u=t==null?void 0:t.errors;if(u!=null){let m=o.findIndex(g=>g.route.id&&(u==null?void 0:u[g.route.id])!==void 0);ht(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),o=o.slice(0,Math.min(o.length,m+1))}let h=!1,p=-1;if(t)for(let m=0;m<o.length;m++){let g=o[m];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(p=m),g.route.id){let{loaderData:v,errors:b}=t,w=g.route.loader&&!v.hasOwnProperty(g.route.id)&&(!b||b[g.route.id]===void 0);if(g.route.lazy||w){h=!0,p>=0?o=o.slice(0,p+1):o=[o[0]];break}}}return o.reduceRight((m,g,v)=>{let b,w=!1,I=null,C=null;t&&(b=u&&g.route.id?u[g.route.id]:void 0,I=g.route.errorElement||xR,h&&(p<0&&v===0?(aT("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),w=!0,C=null):p===v&&(w=!0,C=g.route.hydrateFallbackElement||null)));let z=e.concat(o.slice(0,v+1)),U=()=>{let $;return b?$=I:w?$=C:g.route.Component?$=j.createElement(g.route.Component,null):g.route.element?$=g.route.element:$=m,j.createElement(DR,{match:g,routeContext:{outlet:m,matches:z,isDataRoute:t!=null},children:$})};return t&&(g.route.ErrorBoundary||g.route.errorElement||v===0)?j.createElement(CR,{location:t.location,revalidation:t.revalidation,component:I,error:b,children:U(),routeContext:{outlet:null,matches:z,isDataRoute:!0}}):U()},null)}function bg(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function kR(r){let e=j.useContext(Ho);return ht(e,bg(r)),e}function OR(r){let e=j.useContext(Tf);return ht(e,bg(r)),e}function MR(r){let e=j.useContext(hr);return ht(e,bg(r)),e}function Tg(r){let e=MR(r),t=e.matches[e.matches.length-1];return ht(t.route.id,`${r} can only be used on routes that contain a unique "id"`),t.route.id}function PR(){return Tg("useRouteId")}function VR(){var s;let r=j.useContext(Eg),e=OR("useRouteError"),t=Tg("useRouteError");return r!==void 0?r:(s=e.errors)==null?void 0:s[t]}function LR(){let{router:r}=kR("useNavigate"),e=Tg("useNavigate"),t=j.useRef(!1);return iT(()=>{t.current=!0}),j.useCallback(async(o,u={})=>{Xn(t.current,rT),t.current&&(typeof o=="number"?r.navigate(o):await r.navigate(o,{fromRouteId:e,...u}))},[r,e])}var X0={};function aT(r,e,t){!e&&!X0[r]&&(X0[r]=!0,Xn(!1,t))}j.memo(UR);function UR({routes:r,future:e,state:t}){return sT(r,void 0,t,e)}function jR({to:r,replace:e,state:t,relative:s}){ht(Fo(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=j.useContext(cr);Xn(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:u}=j.useContext(hr),{pathname:h}=_s(),p=$o(),m=_g(r,vg(u),h,s==="path"),g=JSON.stringify(m);return j.useEffect(()=>{p(JSON.parse(g),{replace:e,state:t,relative:s})},[p,g,s,e,t]),null}function es(r){ht(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function zR({basename:r="/",children:e=null,location:t,navigationType:s="POP",navigator:o,static:u=!1}){ht(!Fo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=r.replace(/^\/*/,"/"),p=j.useMemo(()=>({basename:h,navigator:o,static:u,future:{}}),[h,o,u]);typeof t=="string"&&(t=ya(t));let{pathname:m="/",search:g="",hash:v="",state:b=null,key:w="default"}=t,I=j.useMemo(()=>{let C=pi(m,h);return C==null?null:{location:{pathname:C,search:g,hash:v,state:b,key:w},navigationType:s}},[h,m,g,v,b,w,s]);return Xn(I!=null,`<Router basename="${h}"> is not able to match the URL "${m}${g}${v}" because it does not start with the basename, so the <Router> won't render anything.`),I==null?null:j.createElement(cr.Provider,{value:p},j.createElement(Mu.Provider,{children:e,value:I}))}function qR({children:r,location:e}){return RR(Pm(r),e)}function Pm(r,e=[]){let t=[];return j.Children.forEach(r,(s,o)=>{if(!j.isValidElement(s))return;let u=[...e,o];if(s.type===j.Fragment){t.push.apply(t,Pm(s.props.children,u));return}ht(s.type===es,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ht(!s.props.index||!s.props.children,"An index route cannot have child routes.");let h={id:s.props.id||u.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(h.children=Pm(s.props.children,u)),t.push(h)}),t}var Nh="get",kh="application/x-www-form-urlencoded";function wf(r){return r!=null&&typeof r.tagName=="string"}function BR(r){return wf(r)&&r.tagName.toLowerCase()==="button"}function HR(r){return wf(r)&&r.tagName.toLowerCase()==="form"}function FR(r){return wf(r)&&r.tagName.toLowerCase()==="input"}function $R(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function GR(r,e){return r.button===0&&(!e||e==="_self")&&!$R(r)}var Eh=null;function KR(){if(Eh===null)try{new FormData(document.createElement("form"),0),Eh=!1}catch{Eh=!0}return Eh}var QR=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function hm(r){return r!=null&&!QR.has(r)?(Xn(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${kh}"`),null):r}function YR(r,e){let t,s,o,u,h;if(HR(r)){let p=r.getAttribute("action");s=p?pi(p,e):null,t=r.getAttribute("method")||Nh,o=hm(r.getAttribute("enctype"))||kh,u=new FormData(r)}else if(BR(r)||FR(r)&&(r.type==="submit"||r.type==="image")){let p=r.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=r.getAttribute("formaction")||p.getAttribute("action");if(s=m?pi(m,e):null,t=r.getAttribute("formmethod")||p.getAttribute("method")||Nh,o=hm(r.getAttribute("formenctype"))||hm(p.getAttribute("enctype"))||kh,u=new FormData(p,r),!KR()){let{name:g,type:v,value:b}=r;if(v==="image"){let w=g?`${g}.`:"";u.append(`${w}x`,"0"),u.append(`${w}y`,"0")}else g&&u.append(g,b)}}else{if(wf(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Nh,s=null,o=kh,h=r}return u&&o==="text/plain"&&(h=u,u=void 0),{action:s,method:t.toLowerCase(),encType:o,formData:u,body:h}}function wg(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}async function XR(r,e){if(r.id in e)return e[r.id];try{let t=await import(r.module);return e[r.id]=t,t}catch(t){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function WR(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function JR(r,e,t){let s=await Promise.all(r.map(async o=>{let u=e.routes[o.route.id];if(u){let h=await XR(u,t);return h.links?h.links():[]}return[]}));return nI(s.flat(1).filter(WR).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function W0(r,e,t,s,o,u){let h=(m,g)=>t[g]?m.route.id!==t[g].route.id:!0,p=(m,g)=>{var v;return t[g].pathname!==m.pathname||((v=t[g].route.path)==null?void 0:v.endsWith("*"))&&t[g].params["*"]!==m.params["*"]};return u==="assets"?e.filter((m,g)=>h(m,g)||p(m,g)):u==="data"?e.filter((m,g)=>{var b;let v=s.routes[m.route.id];if(!v||!v.hasLoader)return!1;if(h(m,g)||p(m,g))return!0;if(m.route.shouldRevalidate){let w=m.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((b=t[0])==null?void 0:b.params)||{},nextUrl:new URL(r,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function ZR(r,e,{includeHydrateFallback:t}={}){return eI(r.map(s=>{let o=e.routes[s.route.id];if(!o)return[];let u=[o.module];return o.clientActionModule&&(u=u.concat(o.clientActionModule)),o.clientLoaderModule&&(u=u.concat(o.clientLoaderModule)),t&&o.hydrateFallbackModule&&(u=u.concat(o.hydrateFallbackModule)),o.imports&&(u=u.concat(o.imports)),u}).flat(1))}function eI(r){return[...new Set(r)]}function tI(r){let e={},t=Object.keys(r).sort();for(let s of t)e[s]=r[s];return e}function nI(r,e){let t=new Set;return new Set(e),r.reduce((s,o)=>{let u=JSON.stringify(tI(o));return t.has(u)||(t.add(u),s.push({key:u,link:o})),s},[])}function rI(r,e){let t=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return t.pathname==="/"?t.pathname="_root.data":e&&pi(t.pathname,e)==="/"?t.pathname=`${e.replace(/\/$/,"")}/_root.data`:t.pathname=`${t.pathname.replace(/\/$/,"")}.data`,t}function oT(){let r=j.useContext(Ho);return wg(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function iI(){let r=j.useContext(Tf);return wg(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var Sg=j.createContext(void 0);Sg.displayName="FrameworkContext";function lT(){let r=j.useContext(Sg);return wg(r,"You must render this element inside a <HydratedRouter> element"),r}function sI(r,e){let t=j.useContext(Sg),[s,o]=j.useState(!1),[u,h]=j.useState(!1),{onFocus:p,onBlur:m,onMouseEnter:g,onMouseLeave:v,onTouchStart:b}=e,w=j.useRef(null);j.useEffect(()=>{if(r==="render"&&h(!0),r==="viewport"){let z=$=>{$.forEach(Z=>{h(Z.isIntersecting)})},U=new IntersectionObserver(z,{threshold:.5});return w.current&&U.observe(w.current),()=>{U.disconnect()}}},[r]),j.useEffect(()=>{if(s){let z=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(z)}}},[s]);let I=()=>{o(!0)},C=()=>{o(!1),h(!1)};return t?r!=="intent"?[u,w,{}]:[u,w,{onFocus:hu(p,I),onBlur:hu(m,C),onMouseEnter:hu(g,I),onMouseLeave:hu(v,C),onTouchStart:hu(b,I)}]:[!1,w,{}]}function hu(r,e){return t=>{r&&r(t),t.defaultPrevented||e(t)}}function aI({page:r,...e}){let{router:t}=oT(),s=j.useMemo(()=>Jb(t.routes,r,t.basename),[t.routes,r,t.basename]);return s?j.createElement(lI,{page:r,matches:s,...e}):null}function oI(r){let{manifest:e,routeModules:t}=lT(),[s,o]=j.useState([]);return j.useEffect(()=>{let u=!1;return JR(r,e,t).then(h=>{u||o(h)}),()=>{u=!0}},[r,e,t]),s}function lI({page:r,matches:e,...t}){let s=_s(),{manifest:o,routeModules:u}=lT(),{basename:h}=oT(),{loaderData:p,matches:m}=iI(),g=j.useMemo(()=>W0(r,e,m,o,s,"data"),[r,e,m,o,s]),v=j.useMemo(()=>W0(r,e,m,o,s,"assets"),[r,e,m,o,s]),b=j.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let C=new Set,z=!1;if(e.forEach($=>{var Y;let Z=o.routes[$.route.id];!Z||!Z.hasLoader||(!g.some(H=>H.route.id===$.route.id)&&$.route.id in p&&((Y=u[$.route.id])!=null&&Y.shouldRevalidate)||Z.hasClientLoader?z=!0:C.add($.route.id))}),C.size===0)return[];let U=rI(r,h);return z&&C.size>0&&U.searchParams.set("_routes",e.filter($=>C.has($.route.id)).map($=>$.route.id).join(",")),[U.pathname+U.search]},[h,p,s,o,g,e,r,u]),w=j.useMemo(()=>ZR(v,o),[v,o]),I=oI(v);return j.createElement(j.Fragment,null,b.map(C=>j.createElement("link",{key:C,rel:"prefetch",as:"fetch",href:C,...t})),w.map(C=>j.createElement("link",{key:C,rel:"modulepreload",href:C,...t})),I.map(({key:C,link:z})=>j.createElement("link",{key:C,...z})))}function uI(...r){return e=>{r.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var uT=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{uT&&(window.__reactRouterVersion="7.5.0")}catch{}function cI({basename:r,children:e,window:t}){let s=j.useRef();s.current==null&&(s.current=W1({window:t,v5Compat:!0}));let o=s.current,[u,h]=j.useState({action:o.action,location:o.location}),p=j.useCallback(m=>{j.startTransition(()=>h(m))},[h]);return j.useLayoutEffect(()=>o.listen(p),[o,p]),j.createElement(zR,{basename:r,children:e,location:u.location,navigationType:u.action,navigator:o})}var cT=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Es=j.forwardRef(function({onClick:e,discover:t="render",prefetch:s="none",relative:o,reloadDocument:u,replace:h,state:p,target:m,to:g,preventScrollReset:v,viewTransition:b,...w},I){let{basename:C}=j.useContext(cr),z=typeof g=="string"&&cT.test(g),U,$=!1;if(typeof g=="string"&&z&&(U=g,uT))try{let D=new URL(window.location.href),k=g.startsWith("//")?new URL(D.protocol+g):new URL(g),M=pi(k.pathname,C);k.origin===D.origin&&M!=null?g=M+k.search+k.hash:$=!0}catch{Xn(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let Z=wR(g,{relative:o}),[Y,H,ee]=sI(s,w),ue=pI(g,{replace:h,state:p,target:m,preventScrollReset:v,relative:o,viewTransition:b});function N(D){e&&e(D),D.defaultPrevented||ue(D)}let x=j.createElement("a",{...w,...ee,href:U||Z,onClick:$||u?e:N,ref:uI(I,H),target:m,"data-discover":!z&&t==="render"?"true":void 0});return Y&&!z?j.createElement(j.Fragment,null,x,j.createElement(aI,{page:Z})):x});Es.displayName="Link";var hI=j.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:s="",end:o=!1,style:u,to:h,viewTransition:p,children:m,...g},v){let b=Pu(h,{relative:g.relative}),w=_s(),I=j.useContext(Tf),{navigator:C,basename:z}=j.useContext(cr),U=I!=null&&_I(b)&&p===!0,$=C.encodeLocation?C.encodeLocation(b).pathname:b.pathname,Z=w.pathname,Y=I&&I.navigation&&I.navigation.location?I.navigation.location.pathname:null;t||(Z=Z.toLowerCase(),Y=Y?Y.toLowerCase():null,$=$.toLowerCase()),Y&&z&&(Y=pi(Y,z)||Y);const H=$!=="/"&&$.endsWith("/")?$.length-1:$.length;let ee=Z===$||!o&&Z.startsWith($)&&Z.charAt(H)==="/",ue=Y!=null&&(Y===$||!o&&Y.startsWith($)&&Y.charAt($.length)==="/"),N={isActive:ee,isPending:ue,isTransitioning:U},x=ee?e:void 0,D;typeof s=="function"?D=s(N):D=[s,ee?"active":null,ue?"pending":null,U?"transitioning":null].filter(Boolean).join(" ");let k=typeof u=="function"?u(N):u;return j.createElement(Es,{...g,"aria-current":x,className:D,ref:v,style:k,to:h,viewTransition:p},typeof m=="function"?m(N):m)});hI.displayName="NavLink";var fI=j.forwardRef(({discover:r="render",fetcherKey:e,navigate:t,reloadDocument:s,replace:o,state:u,method:h=Nh,action:p,onSubmit:m,relative:g,preventScrollReset:v,viewTransition:b,...w},I)=>{let C=yI(),z=vI(p,{relative:g}),U=h.toLowerCase()==="get"?"get":"post",$=typeof p=="string"&&cT.test(p),Z=Y=>{if(m&&m(Y),Y.defaultPrevented)return;Y.preventDefault();let H=Y.nativeEvent.submitter,ee=(H==null?void 0:H.getAttribute("formmethod"))||h;C(H||Y.currentTarget,{fetcherKey:e,method:ee,navigate:t,replace:o,state:u,relative:g,preventScrollReset:v,viewTransition:b})};return j.createElement("form",{ref:I,method:U,action:z,onSubmit:s?m:Z,...w,"data-discover":!$&&r==="render"?"true":void 0})});fI.displayName="Form";function dI(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function hT(r){let e=j.useContext(Ho);return ht(e,dI(r)),e}function pI(r,{target:e,replace:t,state:s,preventScrollReset:o,relative:u,viewTransition:h}={}){let p=$o(),m=_s(),g=Pu(r,{relative:u});return j.useCallback(v=>{if(GR(v,e)){v.preventDefault();let b=t!==void 0?t:Au(m)===Au(g);p(r,{replace:b,state:s,preventScrollReset:o,relative:u,viewTransition:h})}},[m,p,g,t,s,e,r,o,u,h])}var mI=0,gI=()=>`__${String(++mI)}__`;function yI(){let{router:r}=hT("useSubmit"),{basename:e}=j.useContext(cr),t=PR();return j.useCallback(async(s,o={})=>{let{action:u,method:h,encType:p,formData:m,body:g}=YR(s,e);if(o.navigate===!1){let v=o.fetcherKey||gI();await r.fetch(v,t,o.action||u,{preventScrollReset:o.preventScrollReset,formData:m,body:g,formMethod:o.method||h,formEncType:o.encType||p,flushSync:o.flushSync})}else await r.navigate(o.action||u,{preventScrollReset:o.preventScrollReset,formData:m,body:g,formMethod:o.method||h,formEncType:o.encType||p,replace:o.replace,state:o.state,fromRouteId:t,flushSync:o.flushSync,viewTransition:o.viewTransition})},[r,e,t])}function vI(r,{relative:e}={}){let{basename:t}=j.useContext(cr),s=j.useContext(hr);ht(s,"useFormAction must be used inside a RouteContext");let[o]=s.matches.slice(-1),u={...Pu(r||".",{relative:e})},h=_s();if(r==null){u.search=h.search;let p=new URLSearchParams(u.search),m=p.getAll("index");if(m.some(v=>v==="")){p.delete("index"),m.filter(b=>b).forEach(b=>p.append("index",b));let v=p.toString();u.search=v?`?${v}`:""}}return(!r||r===".")&&o.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(u.pathname=u.pathname==="/"?t:hi([t,u.pathname])),Au(u)}function _I(r,e={}){let t=j.useContext(nT);ht(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=hT("useViewTransitionState"),o=Pu(r,{relative:e.relative});if(!t.isTransitioning)return!1;let u=pi(t.currentLocation.pathname,s)||t.currentLocation.pathname,h=pi(t.nextLocation.pathname,s)||t.nextLocation.pathname;return Xh(o.pathname,h)!=null||Xh(o.pathname,u)!=null}new TextEncoder;const EI=()=>{};var J0={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fT=function(r){const e=[];let t=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},bI=function(r){const e=[];let t=0,s=0;for(;t<r.length;){const o=r[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=r[t++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=r[t++],h=r[t++],p=r[t++],m=((o&7)<<18|(u&63)<<12|(h&63)<<6|p&63)-65536;e[s++]=String.fromCharCode(55296+(m>>10)),e[s++]=String.fromCharCode(56320+(m&1023))}else{const u=r[t++],h=r[t++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},dT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const u=r[o],h=o+1<r.length,p=h?r[o+1]:0,m=o+2<r.length,g=m?r[o+2]:0,v=u>>2,b=(u&3)<<4|p>>4;let w=(p&15)<<2|g>>6,I=g&63;m||(I=64,h||(w=64)),s.push(t[v],t[b],t[w],t[I])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(fT(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):bI(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const u=t[r.charAt(o++)],p=o<r.length?t[r.charAt(o)]:0;++o;const g=o<r.length?t[r.charAt(o)]:64;++o;const b=o<r.length?t[r.charAt(o)]:64;if(++o,u==null||p==null||g==null||b==null)throw new TI;const w=u<<2|p>>4;if(s.push(w),g!==64){const I=p<<4&240|g>>2;if(s.push(I),b!==64){const C=g<<6&192|b;s.push(C)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class TI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const wI=function(r){const e=fT(r);return dT.encodeByteArray(e,!0)},Wh=function(r){return wI(r).replace(/\./g,"")},pT=function(r){try{return dT.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AI=()=>SI().__FIREBASE_DEFAULTS__,RI=()=>{if(typeof process>"u"||typeof J0>"u")return;const r=J0.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},II=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&pT(r[1]);return e&&JSON.parse(e)},Sf=()=>{try{return EI()||AI()||RI()||II()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},mT=r=>{var e,t;return(t=(e=Sf())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},xI=r=>{const e=mT(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},gT=()=>{var r;return(r=Sf())===null||r===void 0?void 0:r.config},yT=r=>{var e;return(e=Sf())===null||e===void 0?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DI(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=r.iat||0,u=r.sub||r.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Wh(JSON.stringify(t)),Wh(JSON.stringify(h)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function NI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ln())}function kI(){var r;const e=(r=Sf())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function OI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function MI(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function PI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function VI(){const r=ln();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function LI(){return!kI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function UI(){try{return typeof indexedDB=="object"}catch{return!1}}function jI(){return new Promise((r,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var u;e(((u=o.error)===null||u===void 0?void 0:u.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zI="FirebaseError";class bi extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=zI,Object.setPrototypeOf(this,bi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Vu.prototype.create)}}class Vu{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?qI(u,s):"Error",p=`${this.serviceName}: ${h} (${o}).`;return new bi(o,p,s)}}function qI(r,e){return r.replace(BI,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const BI=/\{\$([^}]+)}/g;function HI(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function mi(r,e){if(r===e)return!0;const t=Object.keys(r),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const u=r[o],h=e[o];if(Z0(u)&&Z0(h)){if(!mi(u,h))return!1}else if(u!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function Z0(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lu(r){const e=[];for(const[t,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function fu(r){const e={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,u]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(u)}}),e}function du(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function FI(r,e){const t=new $I(r,e);return t.subscribe.bind(t)}class $I{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");GI(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=fm),o.error===void 0&&(o.error=fm),o.complete===void 0&&(o.complete=fm);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function GI(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function fm(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(r){return r&&r._delegate?r._delegate:r}class fa{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oa="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new CI;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(o)return null;throw u}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(YI(e))try{this.getOrInitializeService({instanceIdentifier:oa})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=oa){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=oa){return this.instances.has(e)}getOptions(e=oa){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(u);s===p&&h.resolve(o)}return o}onInit(e,t){var s;const o=this.normalizeInstanceIdentifier(t),u=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(o,u);const h=this.instances.get(o);return h&&e(h,o),()=>{u.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:QI(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=oa){return this.component?this.component.multipleInstances?e:oa:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function QI(r){return r===oa?void 0:r}function YI(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new KI(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Le;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Le||(Le={}));const WI={debug:Le.DEBUG,verbose:Le.VERBOSE,info:Le.INFO,warn:Le.WARN,error:Le.ERROR,silent:Le.SILENT},JI=Le.INFO,ZI={[Le.DEBUG]:"log",[Le.VERBOSE]:"log",[Le.INFO]:"info",[Le.WARN]:"warn",[Le.ERROR]:"error"},ex=(r,e,...t)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),o=ZI[e];if(o)console[o](`[${s}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ag{constructor(e){this.name=e,this._logLevel=JI,this._logHandler=ex,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Le))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?WI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Le.DEBUG,...e),this._logHandler(this,Le.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Le.VERBOSE,...e),this._logHandler(this,Le.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Le.INFO,...e),this._logHandler(this,Le.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Le.WARN,...e),this._logHandler(this,Le.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Le.ERROR,...e),this._logHandler(this,Le.ERROR,...e)}}const tx=(r,e)=>e.some(t=>r instanceof t);let eE,tE;function nx(){return eE||(eE=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function rx(){return tE||(tE=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const vT=new WeakMap,Vm=new WeakMap,_T=new WeakMap,dm=new WeakMap,Rg=new WeakMap;function ix(r){const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("success",u),r.removeEventListener("error",h)},u=()=>{t(os(r.result)),o()},h=()=>{s(r.error),o()};r.addEventListener("success",u),r.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&vT.set(t,r)}).catch(()=>{}),Rg.set(e,r),e}function sx(r){if(Vm.has(r))return;const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",h),r.removeEventListener("abort",h)},u=()=>{t(),o()},h=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",u),r.addEventListener("error",h),r.addEventListener("abort",h)});Vm.set(r,e)}let Lm={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return Vm.get(r);if(e==="objectStoreNames")return r.objectStoreNames||_T.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return os(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function ax(r){Lm=r(Lm)}function ox(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=r.call(pm(this),e,...t);return _T.set(s,e.sort?e.sort():[e]),os(s)}:rx().includes(r)?function(...e){return r.apply(pm(this),e),os(vT.get(this))}:function(...e){return os(r.apply(pm(this),e))}}function lx(r){return typeof r=="function"?ox(r):(r instanceof IDBTransaction&&sx(r),tx(r,nx())?new Proxy(r,Lm):r)}function os(r){if(r instanceof IDBRequest)return ix(r);if(dm.has(r))return dm.get(r);const e=lx(r);return e!==r&&(dm.set(r,e),Rg.set(e,r)),e}const pm=r=>Rg.get(r);function ux(r,e,{blocked:t,upgrade:s,blocking:o,terminated:u}={}){const h=indexedDB.open(r,e),p=os(h);return s&&h.addEventListener("upgradeneeded",m=>{s(os(h.result),m.oldVersion,m.newVersion,os(h.transaction),m)}),t&&h.addEventListener("blocked",m=>t(m.oldVersion,m.newVersion,m)),p.then(m=>{u&&m.addEventListener("close",()=>u()),o&&m.addEventListener("versionchange",g=>o(g.oldVersion,g.newVersion,g))}).catch(()=>{}),p}const cx=["get","getKey","getAll","getAllKeys","count"],hx=["put","add","delete","clear"],mm=new Map;function nE(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(mm.get(e))return mm.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=hx.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||cx.includes(t)))return;const u=async function(h,...p){const m=this.transaction(h,o?"readwrite":"readonly");let g=m.store;return s&&(g=g.index(p.shift())),(await Promise.all([g[t](...p),o&&m.done]))[0]};return mm.set(e,u),u}ax(r=>({...r,get:(e,t,s)=>nE(e,t)||r.get(e,t,s),has:(e,t)=>!!nE(e,t)||r.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fx{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(dx(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function dx(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Um="@firebase/app",rE="0.11.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gi=new Ag("@firebase/app"),px="@firebase/app-compat",mx="@firebase/analytics-compat",gx="@firebase/analytics",yx="@firebase/app-check-compat",vx="@firebase/app-check",_x="@firebase/auth",Ex="@firebase/auth-compat",bx="@firebase/database",Tx="@firebase/data-connect",wx="@firebase/database-compat",Sx="@firebase/functions",Ax="@firebase/functions-compat",Rx="@firebase/installations",Ix="@firebase/installations-compat",xx="@firebase/messaging",Cx="@firebase/messaging-compat",Dx="@firebase/performance",Nx="@firebase/performance-compat",kx="@firebase/remote-config",Ox="@firebase/remote-config-compat",Mx="@firebase/storage",Px="@firebase/storage-compat",Vx="@firebase/firestore",Lx="@firebase/vertexai",Ux="@firebase/firestore-compat",jx="firebase",zx="11.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jm="[DEFAULT]",qx={[Um]:"fire-core",[px]:"fire-core-compat",[gx]:"fire-analytics",[mx]:"fire-analytics-compat",[vx]:"fire-app-check",[yx]:"fire-app-check-compat",[_x]:"fire-auth",[Ex]:"fire-auth-compat",[bx]:"fire-rtdb",[Tx]:"fire-data-connect",[wx]:"fire-rtdb-compat",[Sx]:"fire-fn",[Ax]:"fire-fn-compat",[Rx]:"fire-iid",[Ix]:"fire-iid-compat",[xx]:"fire-fcm",[Cx]:"fire-fcm-compat",[Dx]:"fire-perf",[Nx]:"fire-perf-compat",[kx]:"fire-rc",[Ox]:"fire-rc-compat",[Mx]:"fire-gcs",[Px]:"fire-gcs-compat",[Vx]:"fire-fst",[Ux]:"fire-fst-compat",[Lx]:"fire-vertex","fire-js":"fire-js",[jx]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jh=new Map,Bx=new Map,zm=new Map;function iE(r,e){try{r.container.addComponent(e)}catch(t){gi.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function Io(r){const e=r.name;if(zm.has(e))return gi.debug(`There were multiple attempts to register component ${e}.`),!1;zm.set(e,r);for(const t of Jh.values())iE(t,r);for(const t of Bx.values())iE(t,r);return!0}function Ig(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function Qn(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hx={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ls=new Vu("app","Firebase",Hx);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fx{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new fa("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ls.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Go=zx;function ET(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const s=Object.assign({name:jm,automaticDataCollectionEnabled:!1},e),o=s.name;if(typeof o!="string"||!o)throw ls.create("bad-app-name",{appName:String(o)});if(t||(t=gT()),!t)throw ls.create("no-options");const u=Jh.get(o);if(u){if(mi(t,u.options)&&mi(s,u.config))return u;throw ls.create("duplicate-app",{appName:o})}const h=new XI(o);for(const m of zm.values())h.addComponent(m);const p=new Fx(t,s,h);return Jh.set(o,p),p}function bT(r=jm){const e=Jh.get(r);if(!e&&r===jm&&gT())return ET();if(!e)throw ls.create("no-app",{appName:r});return e}function us(r,e,t){var s;let o=(s=qx[r])!==null&&s!==void 0?s:r;t&&(o+=`-${t}`);const u=o.match(/\s|\//),h=e.match(/\s|\//);if(u||h){const p=[`Unable to register library "${o}" with version "${e}":`];u&&p.push(`library name "${o}" contains illegal characters (whitespace or "/")`),u&&h&&p.push("and"),h&&p.push(`version name "${e}" contains illegal characters (whitespace or "/")`),gi.warn(p.join(" "));return}Io(new fa(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $x="firebase-heartbeat-database",Gx=1,Ru="firebase-heartbeat-store";let gm=null;function TT(){return gm||(gm=ux($x,Gx,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Ru)}catch(t){console.warn(t)}}}}).catch(r=>{throw ls.create("idb-open",{originalErrorMessage:r.message})})),gm}async function Kx(r){try{const t=(await TT()).transaction(Ru),s=await t.objectStore(Ru).get(wT(r));return await t.done,s}catch(e){if(e instanceof bi)gi.warn(e.message);else{const t=ls.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});gi.warn(t.message)}}}async function sE(r,e){try{const s=(await TT()).transaction(Ru,"readwrite");await s.objectStore(Ru).put(e,wT(r)),await s.done}catch(t){if(t instanceof bi)gi.warn(t.message);else{const s=ls.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});gi.warn(s.message)}}}function wT(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qx=1024,Yx=30;class Xx{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Jx(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=aE();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>Yx){const h=Zx(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){gi.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=aE(),{heartbeatsToSend:s,unsentEntries:o}=Wx(this._heartbeatsCache.heartbeats),u=Wh(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return gi.warn(t),""}}}function aE(){return new Date().toISOString().substring(0,10)}function Wx(r,e=Qx){const t=[];let s=r.slice();for(const o of r){const u=t.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),oE(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),oE(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class Jx{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return UI()?jI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Kx(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return sE(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return sE(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function oE(r){return Wh(JSON.stringify({version:2,heartbeats:r})).length}function Zx(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let s=1;s<r.length;s++)r[s].date<t&&(t=r[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eC(r){Io(new fa("platform-logger",e=>new fx(e),"PRIVATE")),Io(new fa("heartbeat",e=>new Xx(e),"PRIVATE")),us(Um,rE,r),us(Um,rE,"esm2017"),us("fire-js","")}eC("");var bn=function(){return bn=Object.assign||function(e){for(var t,s=1,o=arguments.length;s<o;s++){t=arguments[s];for(var u in t)Object.prototype.hasOwnProperty.call(t,u)&&(e[u]=t[u])}return e},bn.apply(this,arguments)};function xg(r,e){var t={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&e.indexOf(s)<0&&(t[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(r);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(r,s[o])&&(t[s[o]]=r[s[o]]);return t}function Zh(r,e,t){if(t||arguments.length===2)for(var s=0,o=e.length,u;s<o;s++)(u||!(s in e))&&(u||(u=Array.prototype.slice.call(e,0,s)),u[s]=e[s]);return r.concat(u||Array.prototype.slice.call(e))}function ST(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const tC=ST,AT=new Vu("auth","Firebase",ST());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ef=new Ag("@firebase/auth");function nC(r,...e){ef.logLevel<=Le.WARN&&ef.warn(`Auth (${Go}): ${r}`,...e)}function Oh(r,...e){ef.logLevel<=Le.ERROR&&ef.error(`Auth (${Go}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(r,...e){throw Cg(r,...e)}function Dr(r,...e){return Cg(r,...e)}function RT(r,e,t){const s=Object.assign(Object.assign({},tC()),{[e]:t});return new Vu("auth","Firebase",s).create(e,{appName:r.name})}function fi(r){return RT(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Cg(r,...e){if(typeof r!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(t,...s)}return AT.create(r,...e)}function we(r,e,...t){if(!r)throw Cg(e,...t)}function ui(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Oh(e),new Error(e)}function yi(r,e){r||ui(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qm(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function rC(){return lE()==="http:"||lE()==="https:"}function lE(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(rC()||MI()||"connection"in navigator)?navigator.onLine:!0}function sC(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(e,t){this.shortDelay=e,this.longDelay=t,yi(t>e,"Short delay should be less than long delay!"),this.isMobile=NI()||PI()}get(){return iC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dg(r,e){yi(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IT{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ui("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ui("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ui("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oC=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],lC=new Uu(3e4,6e4);function bs(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function Ti(r,e,t,s,o={}){return xT(r,o,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const p=Lu(Object.assign({key:r.config.apiKey},h)).slice(1),m=await r._getAdditionalHeaders();m["Content-Type"]="application/json",r.languageCode&&(m["X-Firebase-Locale"]=r.languageCode);const g=Object.assign({method:e,headers:m},u);return OI()||(g.referrerPolicy="no-referrer"),IT.fetch()(await CT(r,r.config.apiHost,t,p),g)})}async function xT(r,e,t){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},aC),e);try{const o=new cC(r),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw bh(r,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const p=u.ok?h.errorMessage:h.error.message,[m,g]=p.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw bh(r,"credential-already-in-use",h);if(m==="EMAIL_EXISTS")throw bh(r,"email-already-in-use",h);if(m==="USER_DISABLED")throw bh(r,"user-disabled",h);const v=s[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw RT(r,v,g);or(r,v)}}catch(o){if(o instanceof bi)throw o;or(r,"network-request-failed",{message:String(o)})}}async function ju(r,e,t,s,o={}){const u=await Ti(r,e,t,s,o);return"mfaPendingCredential"in u&&or(r,"multi-factor-auth-required",{_serverResponse:u}),u}async function CT(r,e,t,s){const o=`${e}${t}?${s}`,u=r,h=u.config.emulator?Dg(r.config,o):`${r.config.apiScheme}://${o}`;return oC.includes(t)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(h).toString():h}function uC(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class cC{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Dr(this.auth,"network-request-failed")),lC.get())})}}function bh(r,e,t){const s={appName:r.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=Dr(r,e,s);return o.customData._tokenResponse=t,o}function uE(r){return r!==void 0&&r.enterprise!==void 0}class hC{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return uC(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function fC(r,e){return Ti(r,"GET","/v2/recaptchaConfig",bs(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dC(r,e){return Ti(r,"POST","/v1/accounts:delete",e)}async function tf(r,e){return Ti(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _u(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function pC(r,e=!1){const t=Ct(r),s=await t.getIdToken(e),o=Ng(s);we(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:_u(ym(o.auth_time)),issuedAtTime:_u(ym(o.iat)),expirationTime:_u(ym(o.exp)),signInProvider:h||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function ym(r){return Number(r)*1e3}function Ng(r){const[e,t,s]=r.split(".");if(e===void 0||t===void 0||s===void 0)return Oh("JWT malformed, contained fewer than 3 sections"),null;try{const o=pT(t);return o?JSON.parse(o):(Oh("Failed to decode base64 JWT payload"),null)}catch(o){return Oh("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function cE(r){const e=Ng(r);return we(e,"internal-error"),we(typeof e.exp<"u","internal-error"),we(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xo(r,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof bi&&mC(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function mC({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=_u(this.lastLoginAt),this.creationTime=_u(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nf(r){var e;const t=r.auth,s=await r.getIdToken(),o=await xo(r,tf(t,{idToken:s}));we(o==null?void 0:o.users.length,t,"internal-error");const u=o.users[0];r._notifyReloadListener(u);const h=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?DT(u.providerUserInfo):[],p=vC(r.providerData,h),m=r.isAnonymous,g=!(r.email&&u.passwordHash)&&!(p!=null&&p.length),v=m?g:!1,b={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:p,metadata:new Bm(u.createdAt,u.lastLoginAt),isAnonymous:v};Object.assign(r,b)}async function yC(r){const e=Ct(r);await nf(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function vC(r,e){return[...r.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function DT(r){return r.map(e=>{var{providerId:t}=e,s=xg(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _C(r,e){const t=await xT(r,{},async()=>{const s=Lu({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=r.config,h=await CT(r,o,"/v1/token",`key=${u}`),p=await r._getAdditionalHeaders();return p["Content-Type"]="application/x-www-form-urlencoded",IT.fetch()(h,{method:"POST",headers:p,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function EC(r,e){return Ti(r,"POST","/v2/accounts:revokeToken",bs(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){we(e.idToken,"internal-error"),we(typeof e.idToken<"u","internal-error"),we(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):cE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){we(e.length!==0,"internal-error");const t=cE(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(we(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:u}=await _C(e,t);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:u}=t,h=new To;return s&&(we(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(we(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(we(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new To,this.toJSON())}_performRefresh(){return ui("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wi(r,e){we(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class ir{constructor(e){var{uid:t,auth:s,stsTokenManager:o}=e,u=xg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new gC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new Bm(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const t=await xo(this,this.stsTokenManager.getToken(this.auth,e));return we(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return pC(this,e)}reload(){return yC(this)}_assign(e){this!==e&&(we(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ir(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){we(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await nf(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Qn(this.auth.app))return Promise.reject(fi(this.auth));const e=await this.getIdToken();return await xo(this,dC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,o,u,h,p,m,g,v;const b=(s=t.displayName)!==null&&s!==void 0?s:void 0,w=(o=t.email)!==null&&o!==void 0?o:void 0,I=(u=t.phoneNumber)!==null&&u!==void 0?u:void 0,C=(h=t.photoURL)!==null&&h!==void 0?h:void 0,z=(p=t.tenantId)!==null&&p!==void 0?p:void 0,U=(m=t._redirectEventId)!==null&&m!==void 0?m:void 0,$=(g=t.createdAt)!==null&&g!==void 0?g:void 0,Z=(v=t.lastLoginAt)!==null&&v!==void 0?v:void 0,{uid:Y,emailVerified:H,isAnonymous:ee,providerData:ue,stsTokenManager:N}=t;we(Y&&N,e,"internal-error");const x=To.fromJSON(this.name,N);we(typeof Y=="string",e,"internal-error"),Wi(b,e.name),Wi(w,e.name),we(typeof H=="boolean",e,"internal-error"),we(typeof ee=="boolean",e,"internal-error"),Wi(I,e.name),Wi(C,e.name),Wi(z,e.name),Wi(U,e.name),Wi($,e.name),Wi(Z,e.name);const D=new ir({uid:Y,auth:e,email:w,emailVerified:H,displayName:b,isAnonymous:ee,photoURL:C,phoneNumber:I,tenantId:z,stsTokenManager:x,createdAt:$,lastLoginAt:Z});return ue&&Array.isArray(ue)&&(D.providerData=ue.map(k=>Object.assign({},k))),U&&(D._redirectEventId=U),D}static async _fromIdTokenResponse(e,t,s=!1){const o=new To;o.updateFromServerResponse(t);const u=new ir({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await nf(u),u}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];we(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?DT(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),p=new To;p.updateFromIdToken(s);const m=new ir({uid:o.localId,auth:e,stsTokenManager:p,isAnonymous:h}),g={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new Bm(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(m,g),m}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hE=new Map;function ci(r){yi(r instanceof Function,"Expected a class definition");let e=hE.get(r);return e?(yi(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,hE.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}NT.type="NONE";const fE=NT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mh(r,e,t){return`firebase:${r}:${e}:${t}`}class wo{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=Mh(this.userKey,o.apiKey,u),this.fullPersistenceKey=Mh("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await tf(this.auth,{idToken:e}).catch(()=>{});return t?ir._fromGetAccountInfoResponse(this.auth,t,e):null}return ir._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new wo(ci(fE),e,s);const o=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let u=o[0]||ci(fE);const h=Mh(s,e.config.apiKey,e.name);let p=null;for(const g of t)try{const v=await g._get(h);if(v){let b;if(typeof v=="string"){const w=await tf(e,{idToken:v}).catch(()=>{});if(!w)break;b=await ir._fromGetAccountInfoResponse(e,w,v)}else b=ir._fromJSON(e,v);g!==u&&(p=b),u=g;break}}catch{}const m=o.filter(g=>g._shouldAllowMigration);return!u._shouldAllowMigration||!m.length?new wo(u,e,s):(u=m[0],p&&await u._set(h,p.toJSON()),await Promise.all(t.map(async g=>{if(g!==u)try{await g._remove(h)}catch{}})),new wo(u,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dE(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(PT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(kT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(LT(e))return"Blackberry";if(UT(e))return"Webos";if(OT(e))return"Safari";if((e.includes("chrome/")||MT(e))&&!e.includes("edge/"))return"Chrome";if(VT(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function kT(r=ln()){return/firefox\//i.test(r)}function OT(r=ln()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function MT(r=ln()){return/crios\//i.test(r)}function PT(r=ln()){return/iemobile/i.test(r)}function VT(r=ln()){return/android/i.test(r)}function LT(r=ln()){return/blackberry/i.test(r)}function UT(r=ln()){return/webos/i.test(r)}function kg(r=ln()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function bC(r=ln()){var e;return kg(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function TC(){return VI()&&document.documentMode===10}function jT(r=ln()){return kg(r)||VT(r)||UT(r)||LT(r)||/windows phone/i.test(r)||PT(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zT(r,e=[]){let t;switch(r){case"Browser":t=dE(ln());break;case"Worker":t=`${dE(ln())}-${r}`;break;default:t=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Go}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((h,p)=>{try{const m=e(u);h(m)}catch(m){p(m)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SC(r,e={}){return Ti(r,"GET","/v2/passwordPolicy",bs(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AC=6;class RC{constructor(e){var t,s,o,u;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:AC,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,o,u,h,p;const m={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,m),this.validatePasswordCharacterOptions(e,m),m.isValid&&(m.isValid=(t=m.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),m.isValid&&(m.isValid=(s=m.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),m.isValid&&(m.isValid=(o=m.containsLowercaseLetter)!==null&&o!==void 0?o:!0),m.isValid&&(m.isValid=(u=m.containsUppercaseLetter)!==null&&u!==void 0?u:!0),m.isValid&&(m.isValid=(h=m.containsNumericCharacter)!==null&&h!==void 0?h:!0),m.isValid&&(m.isValid=(p=m.containsNonAlphanumericCharacter)!==null&&p!==void 0?p:!0),m}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IC{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new pE(this),this.idTokenSubscription=new pE(this),this.beforeStateQueue=new wC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=AT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ci(t)),this._initializationPromise=this.queue(async()=>{var s,o,u;if(!this._deleted&&(this.persistenceManager=await wo.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((u=this.currentUser)===null||u===void 0?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await tf(this,{idToken:e}),s=await ir._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Qn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(p=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(p,p))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,p=o==null?void 0:o._redirectEventId,m=await this.tryRedirectSignIn(e);(!h||h===p)&&(m!=null&&m.user)&&(o=m.user,u=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return we(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await nf(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=sC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Qn(this.app))return Promise.reject(fi(this));const t=e?Ct(e):null;return t&&we(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&we(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Qn(this.app)?Promise.reject(fi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Qn(this.app)?Promise.reject(fi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ci(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await SC(this),t=new RC(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Vu("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await EC(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ci(e)||this._popupRedirectResolver;we(t,this,"argument-error"),this.redirectPersistenceManager=await wo.create(this,[ci(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(we(p,this,"internal-error"),p.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const m=e.addObserver(t,s,o);return()=>{h=!0,m()}}else{const m=e.addObserver(t);return()=>{h=!0,m()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return we(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=zT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;if(Qn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&nC(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function va(r){return Ct(r)}class pE{constructor(e){this.auth=e,this.observer=null,this.addObserver=FI(t=>this.observer=t)}get next(){return we(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Af={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function xC(r){Af=r}function qT(r){return Af.loadJS(r)}function CC(){return Af.recaptchaEnterpriseScript}function DC(){return Af.gapiScript}function NC(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class kC{constructor(){this.enterprise=new OC}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class OC{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const MC="recaptcha-enterprise",BT="NO_RECAPTCHA";class PC{constructor(e){this.type=MC,this.auth=va(e)}async verify(e="verify",t=!1){async function s(u){if(!t){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(h,p)=>{fC(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(m=>{if(m.recaptchaKey===void 0)p(new Error("recaptcha Enterprise site key undefined"));else{const g=new hC(m);return u.tenantId==null?u._agentRecaptchaConfig=g:u._tenantRecaptchaConfigs[u.tenantId]=g,h(g.siteKey)}}).catch(m=>{p(m)})})}function o(u,h,p){const m=window.grecaptcha;uE(m)?m.enterprise.ready(()=>{m.enterprise.execute(u,{action:e}).then(g=>{h(g)}).catch(()=>{h(BT)})}):p(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new kC().execute("siteKey",{action:"verify"}):new Promise((u,h)=>{s(this.auth).then(p=>{if(!t&&uE(window.grecaptcha))o(p,u,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let m=CC();m.length!==0&&(m+=p),qT(m).then(()=>{o(p,u,h)}).catch(g=>{h(g)})}}).catch(p=>{h(p)})})}}async function mE(r,e,t,s=!1,o=!1){const u=new PC(r);let h;if(o)h=BT;else try{h=await u.verify(t)}catch{h=await u.verify(t,!0)}const p=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in p){const m=p.phoneEnrollmentInfo.phoneNumber,g=p.phoneEnrollmentInfo.recaptchaToken;Object.assign(p,{phoneEnrollmentInfo:{phoneNumber:m,recaptchaToken:g,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in p){const m=p.phoneSignInInfo.recaptchaToken;Object.assign(p,{phoneSignInInfo:{recaptchaToken:m,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return p}return s?Object.assign(p,{captchaResp:h}):Object.assign(p,{captchaResponse:h}),Object.assign(p,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(p,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),p}async function Hm(r,e,t,s,o){var u;if(!((u=r._getRecaptchaConfig())===null||u===void 0)&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await mE(r,e,t,t==="getOobCode");return s(r,h)}else return s(r,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const p=await mE(r,e,t,t==="getOobCode");return s(r,p)}else return Promise.reject(h)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VC(r,e){const t=Ig(r,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(mi(u,e??{}))return o;or(o,"already-initialized")}return t.initialize({options:e})}function LC(r,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(ci);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function UC(r,e,t){const s=va(r);we(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=HT(e),{host:h,port:p}=jC(e),m=p===null?"":`:${p}`,g={url:`${u}//${h}${m}/`},v=Object.freeze({host:h,port:p,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){we(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),we(mi(g,s.config.emulator)&&mi(v,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=g,s.emulatorConfig=v,s.settings.appVerificationDisabledForTesting=!0,zC()}function HT(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function jC(r){const e=HT(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:gE(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:gE(h)}}}function gE(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function zC(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ui("not implemented")}_getIdTokenResponse(e){return ui("not implemented")}_linkToIdToken(e,t){return ui("not implemented")}_getReauthenticationResolver(e){return ui("not implemented")}}async function qC(r,e){return Ti(r,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BC(r,e){return ju(r,"POST","/v1/accounts:signInWithPassword",bs(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HC(r,e){return ju(r,"POST","/v1/accounts:signInWithEmailLink",bs(r,e))}async function FC(r,e){return ju(r,"POST","/v1/accounts:signInWithEmailLink",bs(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu extends Og{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new Iu(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Iu(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Hm(e,t,"signInWithPassword",BC);case"emailLink":return HC(e,{email:this._email,oobCode:this._password});default:or(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Hm(e,s,"signUpPassword",qC);case"emailLink":return FC(e,{idToken:t,email:this._email,oobCode:this._password});default:or(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function So(r,e){return ju(r,"POST","/v1/accounts:signInWithIdp",bs(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $C="http://localhost";class da extends Og{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new da(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):or("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=t,u=xg(t,["providerId","signInMethod"]);if(!s||!o)return null;const h=new da(s,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return So(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,So(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,So(e,t)}buildRequest(){const e={requestUri:$C,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Lu(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GC(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function KC(r){const e=fu(du(r)).link,t=e?fu(du(e)).deep_link_id:null,s=fu(du(r)).deep_link_id;return(s?fu(du(s)).link:null)||s||t||e||r}class Mg{constructor(e){var t,s,o,u,h,p;const m=fu(du(e)),g=(t=m.apiKey)!==null&&t!==void 0?t:null,v=(s=m.oobCode)!==null&&s!==void 0?s:null,b=GC((o=m.mode)!==null&&o!==void 0?o:null);we(g&&v&&b,"argument-error"),this.apiKey=g,this.operation=b,this.code=v,this.continueUrl=(u=m.continueUrl)!==null&&u!==void 0?u:null,this.languageCode=(h=m.languageCode)!==null&&h!==void 0?h:null,this.tenantId=(p=m.tenantId)!==null&&p!==void 0?p:null}static parseLink(e){const t=KC(e);try{return new Mg(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(){this.providerId=Ko.PROVIDER_ID}static credential(e,t){return Iu._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=Mg.parseLink(t);return we(s,"argument-error"),Iu._fromEmailAndCode(e,s.code,s.tenantId)}}Ko.PROVIDER_ID="password";Ko.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ko.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FT{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu extends FT{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns extends zu{constructor(){super("facebook.com")}static credential(e){return da._fromParams({providerId:ns.PROVIDER_ID,signInMethod:ns.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ns.credentialFromTaggedObject(e)}static credentialFromError(e){return ns.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ns.credential(e.oauthAccessToken)}catch{return null}}}ns.FACEBOOK_SIGN_IN_METHOD="facebook.com";ns.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs extends zu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return da._fromParams({providerId:rs.PROVIDER_ID,signInMethod:rs.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return rs.credentialFromTaggedObject(e)}static credentialFromError(e){return rs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return rs.credential(t,s)}catch{return null}}}rs.GOOGLE_SIGN_IN_METHOD="google.com";rs.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is extends zu{constructor(){super("github.com")}static credential(e){return da._fromParams({providerId:is.PROVIDER_ID,signInMethod:is.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return is.credentialFromTaggedObject(e)}static credentialFromError(e){return is.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return is.credential(e.oauthAccessToken)}catch{return null}}}is.GITHUB_SIGN_IN_METHOD="github.com";is.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss extends zu{constructor(){super("twitter.com")}static credential(e,t){return da._fromParams({providerId:ss.PROVIDER_ID,signInMethod:ss.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ss.credentialFromTaggedObject(e)}static credentialFromError(e){return ss.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return ss.credential(t,s)}catch{return null}}}ss.TWITTER_SIGN_IN_METHOD="twitter.com";ss.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QC(r,e){return ju(r,"POST","/v1/accounts:signUp",bs(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const u=await ir._fromIdTokenResponse(e,s,o),h=yE(s);return new pa({user:u,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=yE(s);return new pa({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function yE(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf extends bi{constructor(e,t,s,o){var u;super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,rf.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new rf(e,t,s,o)}}function $T(r,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?rf._fromErrorAndOperation(r,u,e,s):u})}async function YC(r,e,t=!1){const s=await xo(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return pa._forOperation(r,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XC(r,e,t=!1){const{auth:s}=r;if(Qn(s.app))return Promise.reject(fi(s));const o="reauthenticate";try{const u=await xo(r,$T(s,o,e,r),t);we(u.idToken,s,"internal-error");const h=Ng(u.idToken);we(h,s,"internal-error");const{sub:p}=h;return we(r.uid===p,s,"user-mismatch"),pa._forOperation(r,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&or(s,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GT(r,e,t=!1){if(Qn(r.app))return Promise.reject(fi(r));const s="signIn",o=await $T(r,s,e),u=await pa._fromIdTokenResponse(r,s,o);return t||await r._updateCurrentUser(u.user),u}async function WC(r,e){return GT(va(r),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KT(r){const e=va(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function JC(r,e,t){if(Qn(r.app))return Promise.reject(fi(r));const s=va(r),h=await Hm(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",QC).catch(m=>{throw m.code==="auth/password-does-not-meet-requirements"&&KT(r),m}),p=await pa._fromIdTokenResponse(s,"signIn",h);return await s._updateCurrentUser(p.user),p}function ZC(r,e,t){return Qn(r.app)?Promise.reject(fi(r)):WC(Ct(r),Ko.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&KT(r),s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eD(r,e){return Ti(r,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tD(r,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const s=Ct(r),u={idToken:await s.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},h=await xo(s,eD(s.auth,u));s.displayName=h.displayName||null,s.photoURL=h.photoUrl||null;const p=s.providerData.find(({providerId:m})=>m==="password");p&&(p.displayName=s.displayName,p.photoURL=s.photoURL),await s._updateTokensIfNecessary(h)}function nD(r,e,t,s){return Ct(r).onIdTokenChanged(e,t,s)}function rD(r,e,t){return Ct(r).beforeAuthStateChanged(e,t)}function iD(r,e,t,s){return Ct(r).onAuthStateChanged(e,t,s)}function sD(r){return Ct(r).signOut()}const sf="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QT{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(sf,"1"),this.storage.removeItem(sf),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aD=1e3,oD=10;class YT extends QT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=jT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,p,m)=>{this.notifyListeners(h,m)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);TC()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,oD):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},aD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}YT.type="LOCAL";const lD=YT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XT extends QT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}XT.type="SESSION";const WT=XT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uD(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new Rf(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:u}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const p=Array.from(h).map(async g=>g(t.origin,u)),m=await uD(p);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:m})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Rf.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pg(r="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return r+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cD{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((p,m)=>{const g=Pg("",20);o.port1.start();const v=setTimeout(()=>{m(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(b){const w=b;if(w.data.eventId===g)switch(w.data.status){case"ack":clearTimeout(v),u=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),p(w.data.response);break;default:clearTimeout(v),clearTimeout(u),m(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nr(){return window}function hD(r){Nr().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JT(){return typeof Nr().WorkerGlobalScope<"u"&&typeof Nr().importScripts=="function"}async function fD(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function dD(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function pD(){return JT()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZT="firebaseLocalStorageDb",mD=1,af="firebaseLocalStorage",ew="fbase_key";class qu{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function If(r,e){return r.transaction([af],e?"readwrite":"readonly").objectStore(af)}function gD(){const r=indexedDB.deleteDatabase(ZT);return new qu(r).toPromise()}function Fm(){const r=indexedDB.open(ZT,mD);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(af,{keyPath:ew})}catch(o){t(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(af)?e(s):(s.close(),await gD(),e(await Fm()))})})}async function vE(r,e,t){const s=If(r,!0).put({[ew]:e,value:t});return new qu(s).toPromise()}async function yD(r,e){const t=If(r,!1).get(e),s=await new qu(t).toPromise();return s===void 0?null:s.value}function _E(r,e){const t=If(r,!0).delete(e);return new qu(t).toPromise()}const vD=800,_D=3;class tw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Fm(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>_D)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return JT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Rf._getInstance(pD()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await fD(),!this.activeServiceWorker)return;this.sender=new cD(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||dD()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Fm();return await vE(e,sf,"1"),await _E(e,sf),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>vE(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>yD(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>_E(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=If(o,!1).getAll();return new qu(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),vD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}tw.type="LOCAL";const ED=tw;new Uu(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bD(r,e){return e?ci(e):(we(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg extends Og{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return So(e,this._buildIdpRequest())}_linkToIdToken(e,t){return So(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return So(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function TD(r){return GT(r.auth,new Vg(r),r.bypassAuthState)}function wD(r){const{auth:e,user:t}=r;return we(t,e,"internal-error"),XC(t,new Vg(r),r.bypassAuthState)}async function SD(r){const{auth:e,user:t}=r;return we(t,e,"internal-error"),YC(t,new Vg(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw{constructor(e,t,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:u,error:h,type:p}=e;if(h){this.reject(h);return}const m={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(m))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return TD;case"linkViaPopup":case"linkViaRedirect":return SD;case"reauthViaPopup":case"reauthViaRedirect":return wD;default:or(this.auth,"internal-error")}}resolve(e){yi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){yi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AD=new Uu(2e3,1e4);class Eo extends nw{constructor(e,t,s,o,u){super(e,t,o,u),this.provider=s,this.authWindow=null,this.pollId=null,Eo.currentPopupAction&&Eo.currentPopupAction.cancel(),Eo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return we(e,this.auth,"internal-error"),e}async onExecution(){yi(this.filter.length===1,"Popup operations only handle one event");const e=Pg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Dr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Dr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Eo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Dr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,AD.get())};e()}}Eo.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RD="pendingRedirect",Ph=new Map;class ID extends nw{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Ph.get(this.auth._key());if(!e){try{const s=await xD(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Ph.set(this.auth._key(),e)}return this.bypassAuthState||Ph.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function xD(r,e){const t=ND(e),s=DD(r);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function CD(r,e){Ph.set(r._key(),e)}function DD(r){return ci(r._redirectPersistence)}function ND(r){return Mh(RD,r.config.apiKey,r.name)}async function kD(r,e,t=!1){if(Qn(r.app))return Promise.reject(fi(r));const s=va(r),o=bD(s,e),h=await new ID(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OD=10*60*1e3;class MD{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!PD(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!rw(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(Dr(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=OD&&this.cachedEventUids.clear(),this.cachedEventUids.has(EE(e))}saveEventToCache(e){this.cachedEventUids.add(EE(e)),this.lastProcessedEventTime=Date.now()}}function EE(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function rw({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function PD(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return rw(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VD(r,e={}){return Ti(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,UD=/^https?/;async function jD(r){if(r.config.emulator)return;const{authorizedDomains:e}=await VD(r);for(const t of e)try{if(zD(t))return}catch{}or(r,"unauthorized-domain")}function zD(r){const e=qm(),{protocol:t,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const h=new URL(r);return h.hostname===""&&s===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!UD.test(t))return!1;if(LD.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qD=new Uu(3e4,6e4);function bE(){const r=Nr().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function BD(r){return new Promise((e,t)=>{var s,o,u;function h(){bE(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{bE(),t(Dr(r,"network-request-failed"))},timeout:qD.get()})}if(!((o=(s=Nr().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((u=Nr().gapi)===null||u===void 0)&&u.load)h();else{const p=NC("iframefcb");return Nr()[p]=()=>{gapi.load?h():t(Dr(r,"network-request-failed"))},qT(`${DC()}?onload=${p}`).catch(m=>t(m))}}).catch(e=>{throw Vh=null,e})}let Vh=null;function HD(r){return Vh=Vh||BD(r),Vh}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FD=new Uu(5e3,15e3),$D="__/auth/iframe",GD="emulator/auth/iframe",KD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},QD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function YD(r){const e=r.config;we(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?Dg(e,GD):`https://${r.config.authDomain}/${$D}`,s={apiKey:e.apiKey,appName:r.name,v:Go},o=QD.get(r.config.apiHost);o&&(s.eid=o);const u=r._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${Lu(s).slice(1)}`}async function XD(r){const e=await HD(r),t=Nr().gapi;return we(t,r,"internal-error"),e.open({where:document.body,url:YD(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:KD,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const h=Dr(r,"network-request-failed"),p=Nr().setTimeout(()=>{u(h)},FD.get());function m(){Nr().clearTimeout(p),o(s)}s.ping(m).then(m,()=>{u(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},JD=500,ZD=600,eN="_blank",tN="http://localhost";class TE{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function nN(r,e,t,s=JD,o=ZD){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let p="";const m=Object.assign(Object.assign({},WD),{width:s.toString(),height:o.toString(),top:u,left:h}),g=ln().toLowerCase();t&&(p=MT(g)?eN:t),kT(g)&&(e=e||tN,m.scrollbars="yes");const v=Object.entries(m).reduce((w,[I,C])=>`${w}${I}=${C},`,"");if(bC(g)&&p!=="_self")return rN(e||"",p),new TE(null);const b=window.open(e||"",p,v);we(b,r,"popup-blocked");try{b.focus()}catch{}return new TE(b)}function rN(r,e){const t=document.createElement("a");t.href=r,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iN="__/auth/handler",sN="emulator/auth/handler",aN=encodeURIComponent("fac");async function wE(r,e,t,s,o,u){we(r.config.authDomain,r,"auth-domain-config-required"),we(r.config.apiKey,r,"invalid-api-key");const h={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:s,v:Go,eventId:o};if(e instanceof FT){e.setDefaultLanguage(r.languageCode),h.providerId=e.providerId||"",HI(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,b]of Object.entries({}))h[v]=b}if(e instanceof zu){const v=e.getScopes().filter(b=>b!=="");v.length>0&&(h.scopes=v.join(","))}r.tenantId&&(h.tid=r.tenantId);const p=h;for(const v of Object.keys(p))p[v]===void 0&&delete p[v];const m=await r._getAppCheckToken(),g=m?`#${aN}=${encodeURIComponent(m)}`:"";return`${oN(r)}?${Lu(p).slice(1)}${g}`}function oN({config:r}){return r.emulator?Dg(r,sN):`https://${r.authDomain}/${iN}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vm="webStorageSupport";class lN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=WT,this._completeRedirectFn=kD,this._overrideRedirectResult=CD}async _openPopup(e,t,s,o){var u;yi((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const h=await wE(e,t,s,qm(),o);return nN(e,h,Pg())}async _openRedirect(e,t,s,o){await this._originValidation(e);const u=await wE(e,t,s,qm(),o);return hD(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(yi(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await XD(e),s=new MD(e);return t.register("authEvent",o=>(we(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(vm,{type:vm},o=>{var u;const h=(u=o==null?void 0:o[0])===null||u===void 0?void 0:u[vm];h!==void 0&&t(!!h),or(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=jD(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return jT()||OT()||kg()}}const uN=lN;var SE="@firebase/auth",AE="1.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){we(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hN(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function fN(r){Io(new fa("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:p}=s.options;we(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const m={apiKey:h,authDomain:p,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:zT(r)},g=new IC(s,o,u,m);return LC(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Io(new fa("auth-internal",e=>{const t=va(e.getProvider("auth").getImmediate());return(s=>new cN(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),us(SE,AE,hN(r)),us(SE,AE,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dN=5*60,pN=yT("authIdTokenMaxAge")||dN;let RE=null;const mN=r=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>pN)return;const o=t==null?void 0:t.token;RE!==o&&(RE=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function gN(r=bT()){const e=Ig(r,"auth");if(e.isInitialized())return e.getImmediate();const t=VC(r,{popupRedirectResolver:uN,persistence:[ED,lD,WT]}),s=yT("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=mN(u.toString());rD(t,h,()=>h(t.currentUser)),nD(t,p=>h(p))}}const o=mT("auth");return o&&UC(t,`http://${o}`),t}function yN(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}xC({loadJS(r){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=o=>{const u=Dr("internal-error");u.customData=o,t(u)},s.type="text/javascript",s.charset="UTF-8",yN().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});fN("Browser");var IE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var cs,iw;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(N,x){function D(){}D.prototype=x.prototype,N.D=x.prototype,N.prototype=new D,N.prototype.constructor=N,N.C=function(k,M,V){for(var R=Array(arguments.length-2),Ce=2;Ce<arguments.length;Ce++)R[Ce-2]=arguments[Ce];return x.prototype[M].apply(k,R)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(N,x,D){D||(D=0);var k=Array(16);if(typeof x=="string")for(var M=0;16>M;++M)k[M]=x.charCodeAt(D++)|x.charCodeAt(D++)<<8|x.charCodeAt(D++)<<16|x.charCodeAt(D++)<<24;else for(M=0;16>M;++M)k[M]=x[D++]|x[D++]<<8|x[D++]<<16|x[D++]<<24;x=N.g[0],D=N.g[1],M=N.g[2];var V=N.g[3],R=x+(V^D&(M^V))+k[0]+3614090360&4294967295;x=D+(R<<7&4294967295|R>>>25),R=V+(M^x&(D^M))+k[1]+3905402710&4294967295,V=x+(R<<12&4294967295|R>>>20),R=M+(D^V&(x^D))+k[2]+606105819&4294967295,M=V+(R<<17&4294967295|R>>>15),R=D+(x^M&(V^x))+k[3]+3250441966&4294967295,D=M+(R<<22&4294967295|R>>>10),R=x+(V^D&(M^V))+k[4]+4118548399&4294967295,x=D+(R<<7&4294967295|R>>>25),R=V+(M^x&(D^M))+k[5]+1200080426&4294967295,V=x+(R<<12&4294967295|R>>>20),R=M+(D^V&(x^D))+k[6]+2821735955&4294967295,M=V+(R<<17&4294967295|R>>>15),R=D+(x^M&(V^x))+k[7]+4249261313&4294967295,D=M+(R<<22&4294967295|R>>>10),R=x+(V^D&(M^V))+k[8]+1770035416&4294967295,x=D+(R<<7&4294967295|R>>>25),R=V+(M^x&(D^M))+k[9]+2336552879&4294967295,V=x+(R<<12&4294967295|R>>>20),R=M+(D^V&(x^D))+k[10]+4294925233&4294967295,M=V+(R<<17&4294967295|R>>>15),R=D+(x^M&(V^x))+k[11]+2304563134&4294967295,D=M+(R<<22&4294967295|R>>>10),R=x+(V^D&(M^V))+k[12]+1804603682&4294967295,x=D+(R<<7&4294967295|R>>>25),R=V+(M^x&(D^M))+k[13]+4254626195&4294967295,V=x+(R<<12&4294967295|R>>>20),R=M+(D^V&(x^D))+k[14]+2792965006&4294967295,M=V+(R<<17&4294967295|R>>>15),R=D+(x^M&(V^x))+k[15]+1236535329&4294967295,D=M+(R<<22&4294967295|R>>>10),R=x+(M^V&(D^M))+k[1]+4129170786&4294967295,x=D+(R<<5&4294967295|R>>>27),R=V+(D^M&(x^D))+k[6]+3225465664&4294967295,V=x+(R<<9&4294967295|R>>>23),R=M+(x^D&(V^x))+k[11]+643717713&4294967295,M=V+(R<<14&4294967295|R>>>18),R=D+(V^x&(M^V))+k[0]+3921069994&4294967295,D=M+(R<<20&4294967295|R>>>12),R=x+(M^V&(D^M))+k[5]+3593408605&4294967295,x=D+(R<<5&4294967295|R>>>27),R=V+(D^M&(x^D))+k[10]+38016083&4294967295,V=x+(R<<9&4294967295|R>>>23),R=M+(x^D&(V^x))+k[15]+3634488961&4294967295,M=V+(R<<14&4294967295|R>>>18),R=D+(V^x&(M^V))+k[4]+3889429448&4294967295,D=M+(R<<20&4294967295|R>>>12),R=x+(M^V&(D^M))+k[9]+568446438&4294967295,x=D+(R<<5&4294967295|R>>>27),R=V+(D^M&(x^D))+k[14]+3275163606&4294967295,V=x+(R<<9&4294967295|R>>>23),R=M+(x^D&(V^x))+k[3]+4107603335&4294967295,M=V+(R<<14&4294967295|R>>>18),R=D+(V^x&(M^V))+k[8]+1163531501&4294967295,D=M+(R<<20&4294967295|R>>>12),R=x+(M^V&(D^M))+k[13]+2850285829&4294967295,x=D+(R<<5&4294967295|R>>>27),R=V+(D^M&(x^D))+k[2]+4243563512&4294967295,V=x+(R<<9&4294967295|R>>>23),R=M+(x^D&(V^x))+k[7]+1735328473&4294967295,M=V+(R<<14&4294967295|R>>>18),R=D+(V^x&(M^V))+k[12]+2368359562&4294967295,D=M+(R<<20&4294967295|R>>>12),R=x+(D^M^V)+k[5]+4294588738&4294967295,x=D+(R<<4&4294967295|R>>>28),R=V+(x^D^M)+k[8]+2272392833&4294967295,V=x+(R<<11&4294967295|R>>>21),R=M+(V^x^D)+k[11]+1839030562&4294967295,M=V+(R<<16&4294967295|R>>>16),R=D+(M^V^x)+k[14]+4259657740&4294967295,D=M+(R<<23&4294967295|R>>>9),R=x+(D^M^V)+k[1]+2763975236&4294967295,x=D+(R<<4&4294967295|R>>>28),R=V+(x^D^M)+k[4]+1272893353&4294967295,V=x+(R<<11&4294967295|R>>>21),R=M+(V^x^D)+k[7]+4139469664&4294967295,M=V+(R<<16&4294967295|R>>>16),R=D+(M^V^x)+k[10]+3200236656&4294967295,D=M+(R<<23&4294967295|R>>>9),R=x+(D^M^V)+k[13]+681279174&4294967295,x=D+(R<<4&4294967295|R>>>28),R=V+(x^D^M)+k[0]+3936430074&4294967295,V=x+(R<<11&4294967295|R>>>21),R=M+(V^x^D)+k[3]+3572445317&4294967295,M=V+(R<<16&4294967295|R>>>16),R=D+(M^V^x)+k[6]+76029189&4294967295,D=M+(R<<23&4294967295|R>>>9),R=x+(D^M^V)+k[9]+3654602809&4294967295,x=D+(R<<4&4294967295|R>>>28),R=V+(x^D^M)+k[12]+3873151461&4294967295,V=x+(R<<11&4294967295|R>>>21),R=M+(V^x^D)+k[15]+530742520&4294967295,M=V+(R<<16&4294967295|R>>>16),R=D+(M^V^x)+k[2]+3299628645&4294967295,D=M+(R<<23&4294967295|R>>>9),R=x+(M^(D|~V))+k[0]+4096336452&4294967295,x=D+(R<<6&4294967295|R>>>26),R=V+(D^(x|~M))+k[7]+1126891415&4294967295,V=x+(R<<10&4294967295|R>>>22),R=M+(x^(V|~D))+k[14]+2878612391&4294967295,M=V+(R<<15&4294967295|R>>>17),R=D+(V^(M|~x))+k[5]+4237533241&4294967295,D=M+(R<<21&4294967295|R>>>11),R=x+(M^(D|~V))+k[12]+1700485571&4294967295,x=D+(R<<6&4294967295|R>>>26),R=V+(D^(x|~M))+k[3]+2399980690&4294967295,V=x+(R<<10&4294967295|R>>>22),R=M+(x^(V|~D))+k[10]+4293915773&4294967295,M=V+(R<<15&4294967295|R>>>17),R=D+(V^(M|~x))+k[1]+2240044497&4294967295,D=M+(R<<21&4294967295|R>>>11),R=x+(M^(D|~V))+k[8]+1873313359&4294967295,x=D+(R<<6&4294967295|R>>>26),R=V+(D^(x|~M))+k[15]+4264355552&4294967295,V=x+(R<<10&4294967295|R>>>22),R=M+(x^(V|~D))+k[6]+2734768916&4294967295,M=V+(R<<15&4294967295|R>>>17),R=D+(V^(M|~x))+k[13]+1309151649&4294967295,D=M+(R<<21&4294967295|R>>>11),R=x+(M^(D|~V))+k[4]+4149444226&4294967295,x=D+(R<<6&4294967295|R>>>26),R=V+(D^(x|~M))+k[11]+3174756917&4294967295,V=x+(R<<10&4294967295|R>>>22),R=M+(x^(V|~D))+k[2]+718787259&4294967295,M=V+(R<<15&4294967295|R>>>17),R=D+(V^(M|~x))+k[9]+3951481745&4294967295,N.g[0]=N.g[0]+x&4294967295,N.g[1]=N.g[1]+(M+(R<<21&4294967295|R>>>11))&4294967295,N.g[2]=N.g[2]+M&4294967295,N.g[3]=N.g[3]+V&4294967295}s.prototype.u=function(N,x){x===void 0&&(x=N.length);for(var D=x-this.blockSize,k=this.B,M=this.h,V=0;V<x;){if(M==0)for(;V<=D;)o(this,N,V),V+=this.blockSize;if(typeof N=="string"){for(;V<x;)if(k[M++]=N.charCodeAt(V++),M==this.blockSize){o(this,k),M=0;break}}else for(;V<x;)if(k[M++]=N[V++],M==this.blockSize){o(this,k),M=0;break}}this.h=M,this.o+=x},s.prototype.v=function(){var N=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);N[0]=128;for(var x=1;x<N.length-8;++x)N[x]=0;var D=8*this.o;for(x=N.length-8;x<N.length;++x)N[x]=D&255,D/=256;for(this.u(N),N=Array(16),x=D=0;4>x;++x)for(var k=0;32>k;k+=8)N[D++]=this.g[x]>>>k&255;return N};function u(N,x){var D=p;return Object.prototype.hasOwnProperty.call(D,N)?D[N]:D[N]=x(N)}function h(N,x){this.h=x;for(var D=[],k=!0,M=N.length-1;0<=M;M--){var V=N[M]|0;k&&V==x||(D[M]=V,k=!1)}this.g=D}var p={};function m(N){return-128<=N&&128>N?u(N,function(x){return new h([x|0],0>x?-1:0)}):new h([N|0],0>N?-1:0)}function g(N){if(isNaN(N)||!isFinite(N))return b;if(0>N)return U(g(-N));for(var x=[],D=1,k=0;N>=D;k++)x[k]=N/D|0,D*=4294967296;return new h(x,0)}function v(N,x){if(N.length==0)throw Error("number format error: empty string");if(x=x||10,2>x||36<x)throw Error("radix out of range: "+x);if(N.charAt(0)=="-")return U(v(N.substring(1),x));if(0<=N.indexOf("-"))throw Error('number format error: interior "-" character');for(var D=g(Math.pow(x,8)),k=b,M=0;M<N.length;M+=8){var V=Math.min(8,N.length-M),R=parseInt(N.substring(M,M+V),x);8>V?(V=g(Math.pow(x,V)),k=k.j(V).add(g(R))):(k=k.j(D),k=k.add(g(R)))}return k}var b=m(0),w=m(1),I=m(16777216);r=h.prototype,r.m=function(){if(z(this))return-U(this).m();for(var N=0,x=1,D=0;D<this.g.length;D++){var k=this.i(D);N+=(0<=k?k:4294967296+k)*x,x*=4294967296}return N},r.toString=function(N){if(N=N||10,2>N||36<N)throw Error("radix out of range: "+N);if(C(this))return"0";if(z(this))return"-"+U(this).toString(N);for(var x=g(Math.pow(N,6)),D=this,k="";;){var M=H(D,x).g;D=$(D,M.j(x));var V=((0<D.g.length?D.g[0]:D.h)>>>0).toString(N);if(D=M,C(D))return V+k;for(;6>V.length;)V="0"+V;k=V+k}},r.i=function(N){return 0>N?0:N<this.g.length?this.g[N]:this.h};function C(N){if(N.h!=0)return!1;for(var x=0;x<N.g.length;x++)if(N.g[x]!=0)return!1;return!0}function z(N){return N.h==-1}r.l=function(N){return N=$(this,N),z(N)?-1:C(N)?0:1};function U(N){for(var x=N.g.length,D=[],k=0;k<x;k++)D[k]=~N.g[k];return new h(D,~N.h).add(w)}r.abs=function(){return z(this)?U(this):this},r.add=function(N){for(var x=Math.max(this.g.length,N.g.length),D=[],k=0,M=0;M<=x;M++){var V=k+(this.i(M)&65535)+(N.i(M)&65535),R=(V>>>16)+(this.i(M)>>>16)+(N.i(M)>>>16);k=R>>>16,V&=65535,R&=65535,D[M]=R<<16|V}return new h(D,D[D.length-1]&-2147483648?-1:0)};function $(N,x){return N.add(U(x))}r.j=function(N){if(C(this)||C(N))return b;if(z(this))return z(N)?U(this).j(U(N)):U(U(this).j(N));if(z(N))return U(this.j(U(N)));if(0>this.l(I)&&0>N.l(I))return g(this.m()*N.m());for(var x=this.g.length+N.g.length,D=[],k=0;k<2*x;k++)D[k]=0;for(k=0;k<this.g.length;k++)for(var M=0;M<N.g.length;M++){var V=this.i(k)>>>16,R=this.i(k)&65535,Ce=N.i(M)>>>16,je=N.i(M)&65535;D[2*k+2*M]+=R*je,Z(D,2*k+2*M),D[2*k+2*M+1]+=V*je,Z(D,2*k+2*M+1),D[2*k+2*M+1]+=R*Ce,Z(D,2*k+2*M+1),D[2*k+2*M+2]+=V*Ce,Z(D,2*k+2*M+2)}for(k=0;k<x;k++)D[k]=D[2*k+1]<<16|D[2*k];for(k=x;k<2*x;k++)D[k]=0;return new h(D,0)};function Z(N,x){for(;(N[x]&65535)!=N[x];)N[x+1]+=N[x]>>>16,N[x]&=65535,x++}function Y(N,x){this.g=N,this.h=x}function H(N,x){if(C(x))throw Error("division by zero");if(C(N))return new Y(b,b);if(z(N))return x=H(U(N),x),new Y(U(x.g),U(x.h));if(z(x))return x=H(N,U(x)),new Y(U(x.g),x.h);if(30<N.g.length){if(z(N)||z(x))throw Error("slowDivide_ only works with positive integers.");for(var D=w,k=x;0>=k.l(N);)D=ee(D),k=ee(k);var M=ue(D,1),V=ue(k,1);for(k=ue(k,2),D=ue(D,2);!C(k);){var R=V.add(k);0>=R.l(N)&&(M=M.add(D),V=R),k=ue(k,1),D=ue(D,1)}return x=$(N,M.j(x)),new Y(M,x)}for(M=b;0<=N.l(x);){for(D=Math.max(1,Math.floor(N.m()/x.m())),k=Math.ceil(Math.log(D)/Math.LN2),k=48>=k?1:Math.pow(2,k-48),V=g(D),R=V.j(x);z(R)||0<R.l(N);)D-=k,V=g(D),R=V.j(x);C(V)&&(V=w),M=M.add(V),N=$(N,R)}return new Y(M,N)}r.A=function(N){return H(this,N).h},r.and=function(N){for(var x=Math.max(this.g.length,N.g.length),D=[],k=0;k<x;k++)D[k]=this.i(k)&N.i(k);return new h(D,this.h&N.h)},r.or=function(N){for(var x=Math.max(this.g.length,N.g.length),D=[],k=0;k<x;k++)D[k]=this.i(k)|N.i(k);return new h(D,this.h|N.h)},r.xor=function(N){for(var x=Math.max(this.g.length,N.g.length),D=[],k=0;k<x;k++)D[k]=this.i(k)^N.i(k);return new h(D,this.h^N.h)};function ee(N){for(var x=N.g.length+1,D=[],k=0;k<x;k++)D[k]=N.i(k)<<1|N.i(k-1)>>>31;return new h(D,N.h)}function ue(N,x){var D=x>>5;x%=32;for(var k=N.g.length-D,M=[],V=0;V<k;V++)M[V]=0<x?N.i(V+D)>>>x|N.i(V+D+1)<<32-x:N.i(V+D);return new h(M,N.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,iw=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=g,h.fromString=v,cs=h}).apply(typeof IE<"u"?IE:typeof self<"u"?self:typeof window<"u"?window:{});var Th=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var sw,pu,aw,Lh,$m,ow,lw,uw;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,y,_){return c==Array.prototype||c==Object.prototype||(c[y]=_.value),c};function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Th=="object"&&Th];for(var y=0;y<c.length;++y){var _=c[y];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var s=t(this);function o(c,y){if(y)e:{var _=s;c=c.split(".");for(var A=0;A<c.length-1;A++){var B=c[A];if(!(B in _))break e;_=_[B]}c=c[c.length-1],A=_[c],y=y(A),y!=A&&y!=null&&e(_,c,{configurable:!0,writable:!0,value:y})}}function u(c,y){c instanceof String&&(c+="");var _=0,A=!1,B={next:function(){if(!A&&_<c.length){var W=_++;return{value:y(W,c[W]),done:!1}}return A=!0,{done:!0,value:void 0}}};return B[Symbol.iterator]=function(){return B},B}o("Array.prototype.values",function(c){return c||function(){return u(this,function(y,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},p=this||self;function m(c){var y=typeof c;return y=y!="object"?y:c?Array.isArray(c)?"array":y:"null",y=="array"||y=="object"&&typeof c.length=="number"}function g(c){var y=typeof c;return y=="object"&&c!=null||y=="function"}function v(c,y,_){return c.call.apply(c.bind,arguments)}function b(c,y,_){if(!c)throw Error();if(2<arguments.length){var A=Array.prototype.slice.call(arguments,2);return function(){var B=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(B,A),c.apply(y,B)}}return function(){return c.apply(y,arguments)}}function w(c,y,_){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?v:b,w.apply(null,arguments)}function I(c,y){var _=Array.prototype.slice.call(arguments,1);return function(){var A=_.slice();return A.push.apply(A,arguments),c.apply(this,A)}}function C(c,y){function _(){}_.prototype=y.prototype,c.aa=y.prototype,c.prototype=new _,c.prototype.constructor=c,c.Qb=function(A,B,W){for(var he=Array(arguments.length-2),ze=2;ze<arguments.length;ze++)he[ze-2]=arguments[ze];return y.prototype[B].apply(A,he)}}function z(c){const y=c.length;if(0<y){const _=Array(y);for(let A=0;A<y;A++)_[A]=c[A];return _}return[]}function U(c,y){for(let _=1;_<arguments.length;_++){const A=arguments[_];if(m(A)){const B=c.length||0,W=A.length||0;c.length=B+W;for(let he=0;he<W;he++)c[B+he]=A[he]}else c.push(A)}}class ${constructor(y,_){this.i=y,this.j=_,this.h=0,this.g=null}get(){let y;return 0<this.h?(this.h--,y=this.g,this.g=y.next,y.next=null):y=this.i(),y}}function Z(c){return/^[\s\xa0]*$/.test(c)}function Y(){var c=p.navigator;return c&&(c=c.userAgent)?c:""}function H(c){return H[" "](c),c}H[" "]=function(){};var ee=Y().indexOf("Gecko")!=-1&&!(Y().toLowerCase().indexOf("webkit")!=-1&&Y().indexOf("Edge")==-1)&&!(Y().indexOf("Trident")!=-1||Y().indexOf("MSIE")!=-1)&&Y().indexOf("Edge")==-1;function ue(c,y,_){for(const A in c)y.call(_,c[A],A,c)}function N(c,y){for(const _ in c)y.call(void 0,c[_],_,c)}function x(c){const y={};for(const _ in c)y[_]=c[_];return y}const D="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k(c,y){let _,A;for(let B=1;B<arguments.length;B++){A=arguments[B];for(_ in A)c[_]=A[_];for(let W=0;W<D.length;W++)_=D[W],Object.prototype.hasOwnProperty.call(A,_)&&(c[_]=A[_])}}function M(c){var y=1;c=c.split(":");const _=[];for(;0<y&&c.length;)_.push(c.shift()),y--;return c.length&&_.push(c.join(":")),_}function V(c){p.setTimeout(()=>{throw c},0)}function R(){var c=Te;let y=null;return c.g&&(y=c.g,c.g=c.g.next,c.g||(c.h=null),y.next=null),y}class Ce{constructor(){this.h=this.g=null}add(y,_){const A=je.get();A.set(y,_),this.h?this.h.next=A:this.g=A,this.h=A}}var je=new $(()=>new J,c=>c.reset());class J{constructor(){this.next=this.g=this.h=null}set(y,_){this.h=y,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let ce,me=!1,Te=new Ce,P=()=>{const c=p.Promise.resolve(void 0);ce=()=>{c.then(ie)}};var ie=()=>{for(var c;c=R();){try{c.h.call(c.g)}catch(_){V(_)}var y=je;y.j(c),100>y.h&&(y.h++,c.next=y.g,y.g=c)}me=!1};function le(){this.s=this.s,this.C=this.C}le.prototype.s=!1,le.prototype.ma=function(){this.s||(this.s=!0,this.N())},le.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function oe(c,y){this.type=c,this.g=this.target=y,this.defaultPrevented=!1}oe.prototype.h=function(){this.defaultPrevented=!0};var ge=function(){if(!p.addEventListener||!Object.defineProperty)return!1;var c=!1,y=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const _=()=>{};p.addEventListener("test",_,y),p.removeEventListener("test",_,y)}catch{}return c}();function Re(c,y){if(oe.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var _=this.type=c.type,A=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=y,y=c.relatedTarget){if(ee){e:{try{H(y.nodeName);var B=!0;break e}catch{}B=!1}B||(y=null)}}else _=="mouseover"?y=c.fromElement:_=="mouseout"&&(y=c.toElement);this.relatedTarget=y,A?(this.clientX=A.clientX!==void 0?A.clientX:A.pageX,this.clientY=A.clientY!==void 0?A.clientY:A.pageY,this.screenX=A.screenX||0,this.screenY=A.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:ye[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&Re.aa.h.call(this)}}C(Re,oe);var ye={2:"touch",3:"pen",4:"mouse"};Re.prototype.h=function(){Re.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var et="closure_listenable_"+(1e6*Math.random()|0),Fe=0;function Vt(c,y,_,A,B){this.listener=c,this.proxy=null,this.src=y,this.type=_,this.capture=!!A,this.ha=B,this.key=++Fe,this.da=this.fa=!1}function Mn(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function mn(c){this.src=c,this.g={},this.h=0}mn.prototype.add=function(c,y,_,A,B){var W=c.toString();c=this.g[W],c||(c=this.g[W]=[],this.h++);var he=As(c,y,A,B);return-1<he?(y=c[he],_||(y.fa=!1)):(y=new Vt(y,this.src,W,!!A,B),y.fa=_,c.push(y)),y};function Zt(c,y){var _=y.type;if(_ in c.g){var A=c.g[_],B=Array.prototype.indexOf.call(A,y,void 0),W;(W=0<=B)&&Array.prototype.splice.call(A,B,1),W&&(Mn(y),c.g[_].length==0&&(delete c.g[_],c.h--))}}function As(c,y,_,A){for(var B=0;B<c.length;++B){var W=c[B];if(!W.da&&W.listener==y&&W.capture==!!_&&W.ha==A)return B}return-1}var Rs="closure_lm_"+(1e6*Math.random()|0),el={};function Xu(c,y,_,A,B){if(Array.isArray(y)){for(var W=0;W<y.length;W++)Xu(c,y[W],_,A,B);return null}return _=Wu(_),c&&c[et]?c.K(y,_,g(A)?!!A.capture:!1,B):Pn(c,y,_,!1,A,B)}function Pn(c,y,_,A,B,W){if(!y)throw Error("Invalid event type");var he=g(B)?!!B.capture:!!B,ze=wa(c);if(ze||(c[Rs]=ze=new mn(c)),_=ze.add(y,_,A,he,W),_.proxy)return _;if(A=id(),_.proxy=A,A.src=c,A.listener=_,c.addEventListener)ge||(B=he),B===void 0&&(B=!1),c.addEventListener(y.toString(),A,B);else if(c.attachEvent)c.attachEvent(Is(y.toString()),A);else if(c.addListener&&c.removeListener)c.addListener(A);else throw Error("addEventListener and attachEvent are unavailable.");return _}function id(){function c(_){return y.call(c.src,c.listener,_)}const y=sd;return c}function tl(c,y,_,A,B){if(Array.isArray(y))for(var W=0;W<y.length;W++)tl(c,y[W],_,A,B);else A=g(A)?!!A.capture:!!A,_=Wu(_),c&&c[et]?(c=c.i,y=String(y).toString(),y in c.g&&(W=c.g[y],_=As(W,_,A,B),-1<_&&(Mn(W[_]),Array.prototype.splice.call(W,_,1),W.length==0&&(delete c.g[y],c.h--)))):c&&(c=wa(c))&&(y=c.g[y.toString()],c=-1,y&&(c=As(y,_,A,B)),(_=-1<c?y[c]:null)&&Ta(_))}function Ta(c){if(typeof c!="number"&&c&&!c.da){var y=c.src;if(y&&y[et])Zt(y.i,c);else{var _=c.type,A=c.proxy;y.removeEventListener?y.removeEventListener(_,A,c.capture):y.detachEvent?y.detachEvent(Is(_),A):y.addListener&&y.removeListener&&y.removeListener(A),(_=wa(y))?(Zt(_,c),_.h==0&&(_.src=null,y[Rs]=null)):Mn(c)}}}function Is(c){return c in el?el[c]:el[c]="on"+c}function sd(c,y){if(c.da)c=!0;else{y=new Re(y,this);var _=c.listener,A=c.ha||c.src;c.fa&&Ta(c),c=_.call(A,y)}return c}function wa(c){return c=c[Rs],c instanceof mn?c:null}var nl="__closure_events_fn_"+(1e9*Math.random()>>>0);function Wu(c){return typeof c=="function"?c:(c[nl]||(c[nl]=function(y){return c.handleEvent(y)}),c[nl])}function mt(){le.call(this),this.i=new mn(this),this.M=this,this.F=null}C(mt,le),mt.prototype[et]=!0,mt.prototype.removeEventListener=function(c,y,_,A){tl(this,c,y,_,A)};function We(c,y){var _,A=c.F;if(A)for(_=[];A;A=A.F)_.push(A);if(c=c.M,A=y.type||y,typeof y=="string")y=new oe(y,c);else if(y instanceof oe)y.target=y.target||c;else{var B=y;y=new oe(A,c),k(y,B)}if(B=!0,_)for(var W=_.length-1;0<=W;W--){var he=y.g=_[W];B=wn(he,A,!0,y)&&B}if(he=y.g=c,B=wn(he,A,!0,y)&&B,B=wn(he,A,!1,y)&&B,_)for(W=0;W<_.length;W++)he=y.g=_[W],B=wn(he,A,!1,y)&&B}mt.prototype.N=function(){if(mt.aa.N.call(this),this.i){var c=this.i,y;for(y in c.g){for(var _=c.g[y],A=0;A<_.length;A++)Mn(_[A]);delete c.g[y],c.h--}}this.F=null},mt.prototype.K=function(c,y,_,A){return this.i.add(String(c),y,!1,_,A)},mt.prototype.L=function(c,y,_,A){return this.i.add(String(c),y,!0,_,A)};function wn(c,y,_,A){if(y=c.i.g[String(y)],!y)return!0;y=y.concat();for(var B=!0,W=0;W<y.length;++W){var he=y[W];if(he&&!he.da&&he.capture==_){var ze=he.listener,Nt=he.ha||he.src;he.fa&&Zt(c.i,he),B=ze.call(Nt,A)!==!1&&B}}return B&&!A.defaultPrevented}function en(c,y,_){if(typeof c=="function")_&&(c=w(c,_));else if(c&&typeof c.handleEvent=="function")c=w(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(y)?-1:p.setTimeout(c,y||0)}function Ju(c){c.g=en(()=>{c.g=null,c.i&&(c.i=!1,Ju(c))},c.l);const y=c.h;c.h=null,c.m.apply(null,y)}class ad extends le{constructor(y,_){super(),this.m=y,this.l=_,this.h=null,this.i=!1,this.g=null}j(y){this.h=arguments,this.g?this.i=!0:Ju(this)}N(){super.N(),this.g&&(p.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function xs(c){le.call(this),this.h=c,this.g={}}C(xs,le);var Cs=[];function Ds(c){ue(c.g,function(y,_){this.g.hasOwnProperty(_)&&Ta(y)},c),c.g={}}xs.prototype.N=function(){xs.aa.N.call(this),Ds(this)},xs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Jn=p.JSON.stringify,Sa=p.JSON.parse,Ns=class{stringify(c){return p.JSON.stringify(c,void 0)}parse(c){return p.JSON.parse(c,void 0)}};function rl(){}rl.prototype.h=null;function il(c){return c.h||(c.h=c.i())}function sl(){}var Vr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Lr(){oe.call(this,"d")}C(Lr,oe);function al(){oe.call(this,"c")}C(al,oe);var fr={},ol=null;function wi(){return ol=ol||new mt}fr.La="serverreachability";function Aa(c){oe.call(this,fr.La,c)}C(Aa,oe);function Si(c){const y=wi();We(y,new Aa(y))}fr.STAT_EVENT="statevent";function Zu(c,y){oe.call(this,fr.STAT_EVENT,c),this.stat=y}C(Zu,oe);function ut(c){const y=wi();We(y,new Zu(y,c))}fr.Ma="timingevent";function Dt(c,y){oe.call(this,fr.Ma,c),this.size=y}C(Dt,oe);function Tt(c,y){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return p.setTimeout(function(){c()},y)}function Vn(){this.g=!0}Vn.prototype.xa=function(){this.g=!1};function ll(c,y,_,A,B,W){c.info(function(){if(c.g)if(W)for(var he="",ze=W.split("&"),Nt=0;Nt<ze.length;Nt++){var qe=ze[Nt].split("=");if(1<qe.length){var Ut=qe[0];qe=qe[1];var kt=Ut.split("_");he=2<=kt.length&&kt[1]=="type"?he+(Ut+"="+qe+"&"):he+(Ut+"=redacted&")}}else he=null;else he=W;return"XMLHTTP REQ ("+A+") [attempt "+B+"]: "+y+`
`+_+`
`+he})}function od(c,y,_,A,B,W,he){c.info(function(){return"XMLHTTP RESP ("+A+") [ attempt "+B+"]: "+y+`
`+_+`
`+W+" "+he})}function Ai(c,y,_,A){c.info(function(){return"XMLHTTP TEXT ("+y+"): "+ks(c,_)+(A?" "+A:"")})}function ec(c,y){c.info(function(){return"TIMEOUT: "+y})}Vn.prototype.info=function(){};function ks(c,y){if(!c.g)return y;if(!y)return null;try{var _=JSON.parse(y);if(_){for(c=0;c<_.length;c++)if(Array.isArray(_[c])){var A=_[c];if(!(2>A.length)){var B=A[1];if(Array.isArray(B)&&!(1>B.length)){var W=B[0];if(W!="noop"&&W!="stop"&&W!="close")for(var he=1;he<B.length;he++)B[he]=""}}}}return Jn(_)}catch{return y}}var Ri={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ur={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},dr;function pr(){}C(pr,rl),pr.prototype.g=function(){return new XMLHttpRequest},pr.prototype.i=function(){return{}},dr=new pr;function un(c,y,_,A){this.j=c,this.i=y,this.l=_,this.R=A||1,this.U=new xs(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new vt}function vt(){this.i=null,this.g="",this.h=!1}var ul={},Ra={};function Zn(c,y,_){c.L=1,c.v=Ls(Sn(y)),c.m=_,c.P=!0,jr(c,null)}function jr(c,y){c.F=Date.now(),Os(c),c.A=Sn(c.v);var _=c.A,A=c.R;Array.isArray(A)||(A=[String(A)]),ml(_.i,"t",A),c.C=0,_=c.j.J,c.h=new vt,c.g=gc(c.j,_?y:null,!c.m),0<c.O&&(c.M=new ad(w(c.Y,c,c.g),c.O)),y=c.U,_=c.g,A=c.ca;var B="readystatechange";Array.isArray(B)||(B&&(Cs[0]=B.toString()),B=Cs);for(var W=0;W<B.length;W++){var he=Xu(_,B[W],A||y.handleEvent,!1,y.h||y);if(!he)break;y.g[he.key]=he}y=c.H?x(c.H):{},c.m?(c.u||(c.u="POST"),y["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,y)):(c.u="GET",c.g.ea(c.A,c.u,null,y)),Si(),ll(c.i,c.u,c.A,c.l,c.R,c.m)}un.prototype.ca=function(c){c=c.target;const y=this.M;y&&zn(c)==3?y.j():this.Y(c)},un.prototype.Y=function(c){try{if(c==this.g)e:{const kt=zn(this.g);var y=this.g.Ba();const Kr=this.g.Z();if(!(3>kt)&&(kt!=3||this.g&&(this.h.h||this.g.oa()||lc(this.g)))){this.J||kt!=4||y==7||(y==8||0>=Kr?Si(3):Si(2)),Ii(this);var _=this.g.Z();this.X=_;t:if(tc(this)){var A=lc(this.g);c="";var B=A.length,W=zn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){$t(this),mr(this);var he="";break t}this.h.i=new p.TextDecoder}for(y=0;y<B;y++)this.h.h=!0,c+=this.h.i.decode(A[y],{stream:!(W&&y==B-1)});A.length=0,this.h.g+=c,this.C=0,he=this.h.g}else he=this.g.oa();if(this.o=_==200,od(this.i,this.u,this.A,this.l,this.R,kt,_),this.o){if(this.T&&!this.K){t:{if(this.g){var ze,Nt=this.g;if((ze=Nt.g?Nt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Z(ze)){var qe=ze;break t}}qe=null}if(_=qe)Ai(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ms(this,_);else{this.o=!1,this.s=3,ut(12),$t(this),mr(this);break e}}if(this.P){_=!0;let Gt;for(;!this.J&&this.C<he.length;)if(Gt=nc(this,he),Gt==Ra){kt==4&&(this.s=4,ut(14),_=!1),Ai(this.i,this.l,null,"[Incomplete Response]");break}else if(Gt==ul){this.s=4,ut(15),Ai(this.i,this.l,he,"[Invalid Chunk]"),_=!1;break}else Ai(this.i,this.l,Gt,null),Ms(this,Gt);if(tc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),kt!=4||he.length!=0||this.h.h||(this.s=1,ut(16),_=!1),this.o=this.o&&_,!_)Ai(this.i,this.l,he,"[Invalid Chunked Response]"),$t(this),mr(this);else if(0<he.length&&!this.W){this.W=!0;var Ut=this.j;Ut.g==this&&Ut.ba&&!Ut.M&&(Ut.j.info("Great, no buffering proxy detected. Bytes received: "+he.length),$s(Ut),Ut.M=!0,ut(11))}}else Ai(this.i,this.l,he,null),Ms(this,he);kt==4&&$t(this),this.o&&!this.J&&(kt==4?dc(this.j,this):(this.o=!1,Os(this)))}else fd(this.g),_==400&&0<he.indexOf("Unknown SID")?(this.s=3,ut(12)):(this.s=0,ut(13)),$t(this),mr(this)}}}catch{}finally{}};function tc(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function nc(c,y){var _=c.C,A=y.indexOf(`
`,_);return A==-1?Ra:(_=Number(y.substring(_,A)),isNaN(_)?ul:(A+=1,A+_>y.length?Ra:(y=y.slice(A,A+_),c.C=A+_,y)))}un.prototype.cancel=function(){this.J=!0,$t(this)};function Os(c){c.S=Date.now()+c.I,rc(c,c.I)}function rc(c,y){if(c.B!=null)throw Error("WatchDog timer not null");c.B=Tt(w(c.ba,c),y)}function Ii(c){c.B&&(p.clearTimeout(c.B),c.B=null)}un.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(ec(this.i,this.A),this.L!=2&&(Si(),ut(17)),$t(this),this.s=2,mr(this)):rc(this,this.S-c)};function mr(c){c.j.G==0||c.J||dc(c.j,c)}function $t(c){Ii(c);var y=c.M;y&&typeof y.ma=="function"&&y.ma(),c.M=null,Ds(c.U),c.g&&(y=c.g,c.g=null,y.abort(),y.ma())}function Ms(c,y){try{var _=c.j;if(_.G!=0&&(_.g==c||cl(_.h,c))){if(!c.K&&cl(_.h,c)&&_.G==3){try{var A=_.Da.g.parse(y)}catch{A=null}if(Array.isArray(A)&&A.length==3){var B=A;if(B[0]==0){e:if(!_.u){if(_.g)if(_.g.F+3e3<c.F)Ua(_),Va(_);else break e;El(_),ut(18)}}else _.za=B[1],0<_.za-_.T&&37500>B[2]&&_.F&&_.v==0&&!_.C&&(_.C=Tt(w(_.Za,_),6e3));if(1>=xa(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else Gr(_,11)}else if((c.K||_.g==c)&&Ua(_),!Z(y))for(B=_.Da.g.parse(y),y=0;y<B.length;y++){let qe=B[y];if(_.T=qe[0],qe=qe[1],_.G==2)if(qe[0]=="c"){_.K=qe[1],_.ia=qe[2];const Ut=qe[3];Ut!=null&&(_.la=Ut,_.j.info("VER="+_.la));const kt=qe[4];kt!=null&&(_.Aa=kt,_.j.info("SVER="+_.Aa));const Kr=qe[5];Kr!=null&&typeof Kr=="number"&&0<Kr&&(A=1.5*Kr,_.L=A,_.j.info("backChannelRequestTimeoutMs_="+A)),A=_;const Gt=c.g;if(Gt){const Tr=Gt.g?Gt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Tr){var W=A.h;W.g||Tr.indexOf("spdy")==-1&&Tr.indexOf("quic")==-1&&Tr.indexOf("h2")==-1||(W.j=W.l,W.g=new Set,W.h&&(Ca(W,W.h),W.h=null))}if(A.D){const Tl=Gt.g?Gt.g.getResponseHeader("X-HTTP-Session-Id"):null;Tl&&(A.ya=Tl,tt(A.I,A.D,Tl))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-c.F,_.j.info("Handshake RTT: "+_.R+"ms")),A=_;var he=c;if(A.qa=mc(A,A.J?A.ia:null,A.W),he.K){cn(A.h,he);var ze=he,Nt=A.L;Nt&&(ze.I=Nt),ze.B&&(Ii(ze),Os(ze)),A.g=he}else hc(A);0<_.i.length&&La(_)}else qe[0]!="stop"&&qe[0]!="close"||Gr(_,7);else _.G==3&&(qe[0]=="stop"||qe[0]=="close"?qe[0]=="stop"?Gr(_,7):vl(_):qe[0]!="noop"&&_.l&&_.l.ta(qe),_.v=0)}}Si(4)}catch{}}var ic=class{constructor(c,y){this.g=c,this.map=y}};function zr(c){this.l=c||10,p.PerformanceNavigationTiming?(c=p.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(p.chrome&&p.chrome.loadTimes&&p.chrome.loadTimes()&&p.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ia(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function xa(c){return c.h?1:c.g?c.g.size:0}function cl(c,y){return c.h?c.h==y:c.g?c.g.has(y):!1}function Ca(c,y){c.g?c.g.add(y):c.h=y}function cn(c,y){c.h&&c.h==y?c.h=null:c.g&&c.g.has(y)&&c.g.delete(y)}zr.prototype.cancel=function(){if(this.i=hl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function hl(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let y=c.i;for(const _ of c.g.values())y=y.concat(_.D);return y}return z(c.i)}function ld(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(m(c)){for(var y=[],_=c.length,A=0;A<_;A++)y.push(c[A]);return y}y=[],_=0;for(A in c)y[_++]=c[A];return y}function Da(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(m(c)||typeof c=="string"){var y=[];c=c.length;for(var _=0;_<c;_++)y.push(_);return y}y=[],_=0;for(const A in c)y[_++]=A;return y}}}function fl(c,y){if(c.forEach&&typeof c.forEach=="function")c.forEach(y,void 0);else if(m(c)||typeof c=="string")Array.prototype.forEach.call(c,y,void 0);else for(var _=Da(c),A=ld(c),B=A.length,W=0;W<B;W++)y.call(void 0,A[W],_&&_[W],c)}var Ps=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ud(c,y){if(c){c=c.split("&");for(var _=0;_<c.length;_++){var A=c[_].indexOf("="),B=null;if(0<=A){var W=c[_].substring(0,A);B=c[_].substring(A+1)}else W=c[_];y(W,B?decodeURIComponent(B.replace(/\+/g," ")):"")}}}function wt(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof wt){this.h=c.h,Vs(this,c.j),this.o=c.o,this.g=c.g,xi(this,c.s),this.l=c.l;var y=c.i,_=new Br;_.i=y.i,y.g&&(_.g=new Map(y.g),_.h=y.h),qr(this,_),this.m=c.m}else c&&(y=String(c).match(Ps))?(this.h=!1,Vs(this,y[1]||"",!0),this.o=Ln(y[2]||""),this.g=Ln(y[3]||"",!0),xi(this,y[4]),this.l=Ln(y[5]||"",!0),qr(this,y[6]||"",!0),this.m=Ln(y[7]||"")):(this.h=!1,this.i=new Br(null,this.h))}wt.prototype.toString=function(){var c=[],y=this.j;y&&c.push(Us(y,dl,!0),":");var _=this.g;return(_||y=="file")&&(c.push("//"),(y=this.o)&&c.push(Us(y,dl,!0),"@"),c.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&c.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&c.push("/"),c.push(Us(_,_.charAt(0)=="/"?cd:pl,!0))),(_=this.i.toString())&&c.push("?",_),(_=this.m)&&c.push("#",Us(_,Na)),c.join("")};function Sn(c){return new wt(c)}function Vs(c,y,_){c.j=_?Ln(y,!0):y,c.j&&(c.j=c.j.replace(/:$/,""))}function xi(c,y){if(y){if(y=Number(y),isNaN(y)||0>y)throw Error("Bad port number "+y);c.s=y}else c.s=null}function qr(c,y,_){y instanceof Br?(c.i=y,ac(c.i,c.h)):(_||(y=Us(y,hd)),c.i=new Br(y,c.h))}function tt(c,y,_){c.i.set(y,_)}function Ls(c){return tt(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function Ln(c,y){return c?y?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Us(c,y,_){return typeof c=="string"?(c=encodeURI(c).replace(y,sc),_&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function sc(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var dl=/[#\/\?@]/g,pl=/[#\?:]/g,cd=/[#\?]/g,hd=/[#\?@]/g,Na=/#/g;function Br(c,y){this.h=this.g=null,this.i=c||null,this.j=!!y}function Un(c){c.g||(c.g=new Map,c.h=0,c.i&&ud(c.i,function(y,_){c.add(decodeURIComponent(y.replace(/\+/g," ")),_)}))}r=Br.prototype,r.add=function(c,y){Un(this),this.i=null,c=gr(this,c);var _=this.g.get(c);return _||this.g.set(c,_=[]),_.push(y),this.h+=1,this};function Hr(c,y){Un(c),y=gr(c,y),c.g.has(y)&&(c.i=null,c.h-=c.g.get(y).length,c.g.delete(y))}function Fr(c,y){return Un(c),y=gr(c,y),c.g.has(y)}r.forEach=function(c,y){Un(this),this.g.forEach(function(_,A){_.forEach(function(B){c.call(y,B,A,this)},this)},this)},r.na=function(){Un(this);const c=Array.from(this.g.values()),y=Array.from(this.g.keys()),_=[];for(let A=0;A<y.length;A++){const B=c[A];for(let W=0;W<B.length;W++)_.push(y[A])}return _},r.V=function(c){Un(this);let y=[];if(typeof c=="string")Fr(this,c)&&(y=y.concat(this.g.get(gr(this,c))));else{c=Array.from(this.g.values());for(let _=0;_<c.length;_++)y=y.concat(c[_])}return y},r.set=function(c,y){return Un(this),this.i=null,c=gr(this,c),Fr(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[y]),this.h+=1,this},r.get=function(c,y){return c?(c=this.V(c),0<c.length?String(c[0]):y):y};function ml(c,y,_){Hr(c,y),0<_.length&&(c.i=null,c.g.set(gr(c,y),z(_)),c.h+=_.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],y=Array.from(this.g.keys());for(var _=0;_<y.length;_++){var A=y[_];const W=encodeURIComponent(String(A)),he=this.V(A);for(A=0;A<he.length;A++){var B=W;he[A]!==""&&(B+="="+encodeURIComponent(String(he[A]))),c.push(B)}}return this.i=c.join("&")};function gr(c,y){return y=String(y),c.j&&(y=y.toLowerCase()),y}function ac(c,y){y&&!c.j&&(Un(c),c.i=null,c.g.forEach(function(_,A){var B=A.toLowerCase();A!=B&&(Hr(this,A),ml(this,B,_))},c)),c.j=y}function js(c,y){const _=new Vn;if(p.Image){const A=new Image;A.onload=I(jn,_,"TestLoadImage: loaded",!0,y,A),A.onerror=I(jn,_,"TestLoadImage: error",!1,y,A),A.onabort=I(jn,_,"TestLoadImage: abort",!1,y,A),A.ontimeout=I(jn,_,"TestLoadImage: timeout",!1,y,A),p.setTimeout(function(){A.ontimeout&&A.ontimeout()},1e4),A.src=c}else y(!1)}function er(c,y){const _=new Vn,A=new AbortController,B=setTimeout(()=>{A.abort(),jn(_,"TestPingServer: timeout",!1,y)},1e4);fetch(c,{signal:A.signal}).then(W=>{clearTimeout(B),W.ok?jn(_,"TestPingServer: ok",!0,y):jn(_,"TestPingServer: server error",!1,y)}).catch(()=>{clearTimeout(B),jn(_,"TestPingServer: error",!1,y)})}function jn(c,y,_,A,B){try{B&&(B.onload=null,B.onerror=null,B.onabort=null,B.ontimeout=null),A(_)}catch{}}function zs(){this.g=new Ns}function yr(c,y,_){const A=_||"";try{fl(c,function(B,W){let he=B;g(B)&&(he=Jn(B)),y.push(A+W+"="+encodeURIComponent(he))})}catch(B){throw y.push(A+"type="+encodeURIComponent("_badmap")),B}}function Ci(c){this.l=c.Ub||null,this.j=c.eb||!1}C(Ci,rl),Ci.prototype.g=function(){return new $r(this.l,this.j)},Ci.prototype.i=function(c){return function(){return c}}({});function $r(c,y){mt.call(this),this.D=c,this.o=y,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C($r,mt),r=$r.prototype,r.open=function(c,y){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=y,this.readyState=1,_r(this)},r.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const y={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(y.body=c),(this.D||p).fetch(new Request(this.A,y)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,vr(this)),this.readyState=0},r.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,_r(this)),this.g&&(this.readyState=3,_r(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof p.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;gl(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function gl(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}r.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var y=c.value?c.value:new Uint8Array(0);(y=this.v.decode(y,{stream:!c.done}))&&(this.response=this.responseText+=y)}c.done?vr(this):_r(this),this.readyState==3&&gl(this)}},r.Ra=function(c){this.g&&(this.response=this.responseText=c,vr(this))},r.Qa=function(c){this.g&&(this.response=c,vr(this))},r.ga=function(){this.g&&vr(this)};function vr(c){c.readyState=4,c.l=null,c.j=null,c.v=null,_r(c)}r.setRequestHeader=function(c,y){this.u.append(c,y)},r.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],y=this.h.entries();for(var _=y.next();!_.done;)_=_.value,c.push(_[0]+": "+_[1]),_=y.next();return c.join(`\r
`)};function _r(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty($r.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function yl(c){let y="";return ue(c,function(_,A){y+=A,y+=":",y+=_,y+=`\r
`}),y}function Lt(c,y,_){e:{for(A in _){var A=!1;break e}A=!0}A||(_=yl(_),typeof c=="string"?_!=null&&encodeURIComponent(String(_)):tt(c,y,_))}function Ke(c){mt.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(Ke,mt);var ka=/^https?$/i,qs=["POST","PUT"];r=Ke.prototype,r.Ha=function(c){this.J=c},r.ea=function(c,y,_,A){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);y=y?y.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():dr.g(),this.v=this.o?il(this.o):il(dr),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(y,String(c),!0),this.B=!1}catch(W){oc(this,W);return}if(c=_||"",_=new Map(this.headers),A)if(Object.getPrototypeOf(A)===Object.prototype)for(var B in A)_.set(B,A[B]);else if(typeof A.keys=="function"&&typeof A.get=="function")for(const W of A.keys())_.set(W,A.get(W));else throw Error("Unknown input type for opt_headers: "+String(A));A=Array.from(_.keys()).find(W=>W.toLowerCase()=="content-type"),B=p.FormData&&c instanceof p.FormData,!(0<=Array.prototype.indexOf.call(qs,y,void 0))||A||B||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[W,he]of _)this.g.setRequestHeader(W,he);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Bs(this),this.u=!0,this.g.send(c),this.u=!1}catch(W){oc(this,W)}};function oc(c,y){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=y,c.m=5,Oa(c),Er(c)}function Oa(c){c.A||(c.A=!0,We(c,"complete"),We(c,"error"))}r.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,We(this,"complete"),We(this,"abort"),Er(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Er(this,!0)),Ke.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Ma(this):this.bb())},r.bb=function(){Ma(this)};function Ma(c){if(c.h&&typeof h<"u"&&(!c.v[1]||zn(c)!=4||c.Z()!=2)){if(c.u&&zn(c)==4)en(c.Ea,0,c);else if(We(c,"readystatechange"),zn(c)==4){c.h=!1;try{const he=c.Z();e:switch(he){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var y=!0;break e;default:y=!1}var _;if(!(_=y)){var A;if(A=he===0){var B=String(c.D).match(Ps)[1]||null;!B&&p.self&&p.self.location&&(B=p.self.location.protocol.slice(0,-1)),A=!ka.test(B?B.toLowerCase():"")}_=A}if(_)We(c,"complete"),We(c,"success");else{c.m=6;try{var W=2<zn(c)?c.g.statusText:""}catch{W=""}c.l=W+" ["+c.Z()+"]",Oa(c)}}finally{Er(c)}}}}function Er(c,y){if(c.g){Bs(c);const _=c.g,A=c.v[0]?()=>{}:null;c.g=null,c.v=null,y||We(c,"ready");try{_.onreadystatechange=A}catch{}}}function Bs(c){c.I&&(p.clearTimeout(c.I),c.I=null)}r.isActive=function(){return!!this.g};function zn(c){return c.g?c.g.readyState:0}r.Z=function(){try{return 2<zn(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(c){if(this.g){var y=this.g.responseText;return c&&y.indexOf(c)==0&&(y=y.substring(c.length)),Sa(y)}};function lc(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function fd(c){const y={};c=(c.g&&2<=zn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let A=0;A<c.length;A++){if(Z(c[A]))continue;var _=M(c[A]);const B=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const W=y[B]||[];y[B]=W,W.push(_)}N(y,function(A){return A.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Hs(c,y,_){return _&&_.internalChannelParams&&_.internalChannelParams[c]||y}function Pa(c){this.Aa=0,this.i=[],this.j=new Vn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Hs("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Hs("baseRetryDelayMs",5e3,c),this.cb=Hs("retryDelaySeedMs",1e4,c),this.Wa=Hs("forwardChannelMaxRetries",2,c),this.wa=Hs("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new zr(c&&c.concurrentRequestLimit),this.Da=new zs,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Pa.prototype,r.la=8,r.G=1,r.connect=function(c,y,_,A){ut(0),this.W=c,this.H=y||{},_&&A!==void 0&&(this.H.OSID=_,this.H.OAID=A),this.F=this.X,this.I=mc(this,null,this.W),La(this)};function vl(c){if(uc(c),c.G==3){var y=c.U++,_=Sn(c.I);if(tt(_,"SID",c.K),tt(_,"RID",y),tt(_,"TYPE","terminate"),Fs(c,_),y=new un(c,c.j,y),y.L=2,y.v=Ls(Sn(_)),_=!1,p.navigator&&p.navigator.sendBeacon)try{_=p.navigator.sendBeacon(y.v.toString(),"")}catch{}!_&&p.Image&&(new Image().src=y.v,_=!0),_||(y.g=gc(y.j,null),y.g.ea(y.v)),y.F=Date.now(),Os(y)}pc(c)}function Va(c){c.g&&($s(c),c.g.cancel(),c.g=null)}function uc(c){Va(c),c.u&&(p.clearTimeout(c.u),c.u=null),Ua(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&p.clearTimeout(c.s),c.s=null)}function La(c){if(!Ia(c.h)&&!c.s){c.s=!0;var y=c.Ga;ce||P(),me||(ce(),me=!0),Te.add(y,c),c.B=0}}function dd(c,y){return xa(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=y.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=Tt(w(c.Ga,c,y),bl(c,c.B)),c.B++,!0)}r.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const B=new un(this,this.j,c);let W=this.o;if(this.S&&(W?(W=x(W),k(W,this.S)):W=this.S),this.m!==null||this.O||(B.H=W,W=null),this.P)e:{for(var y=0,_=0;_<this.i.length;_++){t:{var A=this.i[_];if("__data__"in A.map&&(A=A.map.__data__,typeof A=="string")){A=A.length;break t}A=void 0}if(A===void 0)break;if(y+=A,4096<y){y=_;break e}if(y===4096||_===this.i.length-1){y=_+1;break e}}y=1e3}else y=1e3;y=cc(this,B,y),_=Sn(this.I),tt(_,"RID",c),tt(_,"CVER",22),this.D&&tt(_,"X-HTTP-Session-Id",this.D),Fs(this,_),W&&(this.O?y="headers="+encodeURIComponent(String(yl(W)))+"&"+y:this.m&&Lt(_,this.m,W)),Ca(this.h,B),this.Ua&&tt(_,"TYPE","init"),this.P?(tt(_,"$req",y),tt(_,"SID","null"),B.T=!0,Zn(B,_,null)):Zn(B,_,y),this.G=2}}else this.G==3&&(c?_l(this,c):this.i.length==0||Ia(this.h)||_l(this))};function _l(c,y){var _;y?_=y.l:_=c.U++;const A=Sn(c.I);tt(A,"SID",c.K),tt(A,"RID",_),tt(A,"AID",c.T),Fs(c,A),c.m&&c.o&&Lt(A,c.m,c.o),_=new un(c,c.j,_,c.B+1),c.m===null&&(_.H=c.o),y&&(c.i=y.D.concat(c.i)),y=cc(c,_,1e3),_.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),Ca(c.h,_),Zn(_,A,y)}function Fs(c,y){c.H&&ue(c.H,function(_,A){tt(y,A,_)}),c.l&&fl({},function(_,A){tt(y,A,_)})}function cc(c,y,_){_=Math.min(c.i.length,_);var A=c.l?w(c.l.Na,c.l,c):null;e:{var B=c.i;let W=-1;for(;;){const he=["count="+_];W==-1?0<_?(W=B[0].g,he.push("ofs="+W)):W=0:he.push("ofs="+W);let ze=!0;for(let Nt=0;Nt<_;Nt++){let qe=B[Nt].g;const Ut=B[Nt].map;if(qe-=W,0>qe)W=Math.max(0,B[Nt].g-100),ze=!1;else try{yr(Ut,he,"req"+qe+"_")}catch{A&&A(Ut)}}if(ze){A=he.join("&");break e}}}return c=c.i.splice(0,_),y.D=c,A}function hc(c){if(!c.g&&!c.u){c.Y=1;var y=c.Fa;ce||P(),me||(ce(),me=!0),Te.add(y,c),c.v=0}}function El(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=Tt(w(c.Fa,c),bl(c,c.v)),c.v++,!0)}r.Fa=function(){if(this.u=null,fc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=Tt(w(this.ab,this),c)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ut(10),Va(this),fc(this))};function $s(c){c.A!=null&&(p.clearTimeout(c.A),c.A=null)}function fc(c){c.g=new un(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var y=Sn(c.qa);tt(y,"RID","rpc"),tt(y,"SID",c.K),tt(y,"AID",c.T),tt(y,"CI",c.F?"0":"1"),!c.F&&c.ja&&tt(y,"TO",c.ja),tt(y,"TYPE","xmlhttp"),Fs(c,y),c.m&&c.o&&Lt(y,c.m,c.o),c.L&&(c.g.I=c.L);var _=c.g;c=c.ia,_.L=1,_.v=Ls(Sn(y)),_.m=null,_.P=!0,jr(_,c)}r.Za=function(){this.C!=null&&(this.C=null,Va(this),El(this),ut(19))};function Ua(c){c.C!=null&&(p.clearTimeout(c.C),c.C=null)}function dc(c,y){var _=null;if(c.g==y){Ua(c),$s(c),c.g=null;var A=2}else if(cl(c.h,y))_=y.D,cn(c.h,y),A=1;else return;if(c.G!=0){if(y.o)if(A==1){_=y.m?y.m.length:0,y=Date.now()-y.F;var B=c.B;A=wi(),We(A,new Dt(A,_)),La(c)}else hc(c);else if(B=y.s,B==3||B==0&&0<y.X||!(A==1&&dd(c,y)||A==2&&El(c)))switch(_&&0<_.length&&(y=c.h,y.i=y.i.concat(_)),B){case 1:Gr(c,5);break;case 4:Gr(c,10);break;case 3:Gr(c,6);break;default:Gr(c,2)}}}function bl(c,y){let _=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(_*=2),_*y}function Gr(c,y){if(c.j.info("Error code "+y),y==2){var _=w(c.fb,c),A=c.Xa;const B=!A;A=new wt(A||"//www.google.com/images/cleardot.gif"),p.location&&p.location.protocol=="http"||Vs(A,"https"),Ls(A),B?js(A.toString(),_):er(A.toString(),_)}else ut(2);c.G=0,c.l&&c.l.sa(y),pc(c),uc(c)}r.fb=function(c){c?(this.j.info("Successfully pinged google.com"),ut(2)):(this.j.info("Failed to ping google.com"),ut(1))};function pc(c){if(c.G=0,c.ka=[],c.l){const y=hl(c.h);(y.length!=0||c.i.length!=0)&&(U(c.ka,y),U(c.ka,c.i),c.h.i.length=0,z(c.i),c.i.length=0),c.l.ra()}}function mc(c,y,_){var A=_ instanceof wt?Sn(_):new wt(_);if(A.g!="")y&&(A.g=y+"."+A.g),xi(A,A.s);else{var B=p.location;A=B.protocol,y=y?y+"."+B.hostname:B.hostname,B=+B.port;var W=new wt(null);A&&Vs(W,A),y&&(W.g=y),B&&xi(W,B),_&&(W.l=_),A=W}return _=c.D,y=c.ya,_&&y&&tt(A,_,y),tt(A,"VER",c.la),Fs(c,A),A}function gc(c,y,_){if(y&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return y=c.Ca&&!c.pa?new Ke(new Ci({eb:_})):new Ke(c.pa),y.Ha(c.J),y}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function yc(){}r=yc.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function ja(){}ja.prototype.g=function(c,y){return new hn(c,y)};function hn(c,y){mt.call(this),this.g=new Pa(y),this.l=c,this.h=y&&y.messageUrlParams||null,c=y&&y.messageHeaders||null,y&&y.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=y&&y.initMessageHeaders||null,y&&y.messageContentType&&(c?c["X-WebChannel-Content-Type"]=y.messageContentType:c={"X-WebChannel-Content-Type":y.messageContentType}),y&&y.va&&(c?c["X-WebChannel-Client-Profile"]=y.va:c={"X-WebChannel-Client-Profile":y.va}),this.g.S=c,(c=y&&y.Sb)&&!Z(c)&&(this.g.m=c),this.v=y&&y.supportsCrossDomainXhr||!1,this.u=y&&y.sendRawJson||!1,(y=y&&y.httpSessionIdParam)&&!Z(y)&&(this.g.D=y,c=this.h,c!==null&&y in c&&(c=this.h,y in c&&delete c[y])),this.j=new br(this)}C(hn,mt),hn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},hn.prototype.close=function(){vl(this.g)},hn.prototype.o=function(c){var y=this.g;if(typeof c=="string"){var _={};_.__data__=c,c=_}else this.u&&(_={},_.__data__=Jn(c),c=_);y.i.push(new ic(y.Ya++,c)),y.G==3&&La(y)},hn.prototype.N=function(){this.g.l=null,delete this.j,vl(this.g),delete this.g,hn.aa.N.call(this)};function vc(c){Lr.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var y=c.__sm__;if(y){e:{for(const _ in y){c=_;break e}c=void 0}(this.i=c)&&(c=this.i,y=y!==null&&c in y?y[c]:void 0),this.data=y}else this.data=c}C(vc,Lr);function _c(){al.call(this),this.status=1}C(_c,al);function br(c){this.g=c}C(br,yc),br.prototype.ua=function(){We(this.g,"a")},br.prototype.ta=function(c){We(this.g,new vc(c))},br.prototype.sa=function(c){We(this.g,new _c)},br.prototype.ra=function(){We(this.g,"b")},ja.prototype.createWebChannel=ja.prototype.g,hn.prototype.send=hn.prototype.o,hn.prototype.open=hn.prototype.m,hn.prototype.close=hn.prototype.close,uw=function(){return new ja},lw=function(){return wi()},ow=fr,$m={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ri.NO_ERROR=0,Ri.TIMEOUT=8,Ri.HTTP_ERROR=6,Lh=Ri,Ur.COMPLETE="complete",aw=Ur,sl.EventType=Vr,Vr.OPEN="a",Vr.CLOSE="b",Vr.ERROR="c",Vr.MESSAGE="d",mt.prototype.listen=mt.prototype.K,pu=sl,Ke.prototype.listenOnce=Ke.prototype.L,Ke.prototype.getLastError=Ke.prototype.Ka,Ke.prototype.getLastErrorCode=Ke.prototype.Ba,Ke.prototype.getStatus=Ke.prototype.Z,Ke.prototype.getResponseJson=Ke.prototype.Oa,Ke.prototype.getResponseText=Ke.prototype.oa,Ke.prototype.send=Ke.prototype.ea,Ke.prototype.setWithCredentials=Ke.prototype.Ha,sw=Ke}).apply(typeof Th<"u"?Th:typeof self<"u"?self:typeof window<"u"?window:{});const xE="@firebase/firestore",CE="4.7.10";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}sn.UNAUTHENTICATED=new sn(null),sn.GOOGLE_CREDENTIALS=new sn("google-credentials-uid"),sn.FIRST_PARTY=new sn("first-party-uid"),sn.MOCK_USER=new sn("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qo="11.5.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ma=new Ag("@firebase/firestore");function go(){return ma.logLevel}function de(r,...e){if(ma.logLevel<=Le.DEBUG){const t=e.map(Lg);ma.debug(`Firestore (${Qo}): ${r}`,...t)}}function vi(r,...e){if(ma.logLevel<=Le.ERROR){const t=e.map(Lg);ma.error(`Firestore (${Qo}): ${r}`,...t)}}function Co(r,...e){if(ma.logLevel<=Le.WARN){const t=e.map(Lg);ma.warn(`Firestore (${Qo}): ${r}`,...t)}}function Lg(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(r="Unexpected state"){const e=`FIRESTORE (${Qo}) INTERNAL ASSERTION FAILED: `+r;throw vi(e),new Error(e)}function Xe(r,e){r||Ae()}function xe(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const re={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class fe extends bi{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class vN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(sn.UNAUTHENTICATED))}shutdown(){}}class _N{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class EN{constructor(e){this.t=e,this.currentUser=sn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Xe(this.o===void 0);let s=this.i;const o=m=>this.i!==s?(s=this.i,t(m)):Promise.resolve();let u=new di;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new di,e.enqueueRetryable(()=>o(this.currentUser))};const h=()=>{const m=u;e.enqueueRetryable(async()=>{await m.promise,await o(this.currentUser)})},p=m=>{de("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=m,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(m=>p(m)),setTimeout(()=>{if(!this.auth){const m=this.t.getImmediate({optional:!0});m?p(m):(de("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new di)}},0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(de("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Xe(typeof s.accessToken=="string"),new cw(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Xe(e===null||typeof e=="string"),new sn(e)}}class bN{constructor(e,t,s){this.l=e,this.h=t,this.P=s,this.type="FirstParty",this.user=sn.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class TN{constructor(e,t,s){this.l=e,this.h=t,this.P=s}getToken(){return Promise.resolve(new bN(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(sn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class DE{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class wN{constructor(e,t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,Qn(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,t){Xe(this.o===void 0);const s=u=>{u.error!=null&&de("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.R;return this.R=u.token,de("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable(()=>s(u))};const o=u=>{de("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(u=>o(u)),setTimeout(()=>{if(!this.appCheck){const u=this.A.getImmediate({optional:!0});u?o(u):de("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new DE(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Xe(typeof t.token=="string"),this.R=t.token,new DE(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SN(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<r;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hw(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=SN(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<t&&(s+=e.charAt(o[u]%62))}return s}}function Oe(r,e){return r<e?-1:r>e?1:0}function Gm(r,e){let t=0;for(;t<r.length&&t<e.length;){const s=r.codePointAt(t),o=e.codePointAt(t);if(s!==o){if(s<128&&o<128)return Oe(s,o);{const u=hw(),h=AN(u.encode(NE(r,t)),u.encode(NE(e,t)));return h!==0?h:Oe(s,o)}}t+=s>65535?2:1}return Oe(r.length,e.length)}function NE(r,e){return r.codePointAt(e)>65535?r.substring(e,e+2):r.substring(e,e+1)}function AN(r,e){for(let t=0;t<r.length&&t<e.length;++t)if(r[t]!==e[t])return Oe(r[t],e[t]);return Oe(r.length,e.length)}function Do(r,e,t){return r.length===e.length&&r.every((s,o)=>t(s,e[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kE=-62135596800,OE=1e6;let dt=class Uh{static now(){return Uh.fromMillis(Date.now())}static fromDate(e){return Uh.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*OE);return new Uh(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new fe(re.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new fe(re.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<kE)throw new fe(re.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new fe(re.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/OE}_compareTo(e){return this.seconds===e.seconds?Oe(this.nanoseconds,e.nanoseconds):Oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-kE;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{static fromTimestamp(e){return new Ie(e)}static min(){return new Ie(new dt(0,0))}static max(){return new Ie(new dt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ME="__name__";class xr{constructor(e,t,s){t===void 0?t=0:t>e.length&&Ae(),s===void 0?s=e.length-t:s>e.length-t&&Ae(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return xr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof xr?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const u=xr.compareSegments(e.get(o),t.get(o));if(u!==0)return u}return Oe(e.length,t.length)}static compareSegments(e,t){const s=xr.isNumericId(e),o=xr.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?xr.extractNumericId(e).compare(xr.extractNumericId(t)):Gm(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return cs.fromString(e.substring(4,e.length-2))}}class lt extends xr{construct(e,t,s){return new lt(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new fe(re.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(o=>o.length>0))}return new lt(t)}static emptyPath(){return new lt([])}}const RN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Wt extends xr{construct(e,t,s){return new Wt(e,t,s)}static isValidIdentifier(e){return RN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Wt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ME}static keyField(){return new Wt([ME])}static fromServerFormat(e){const t=[];let s="",o=0;const u=()=>{if(s.length===0)throw new fe(re.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const p=e[o];if(p==="\\"){if(o+1===e.length)throw new fe(re.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const m=e[o+1];if(m!=="\\"&&m!=="."&&m!=="`")throw new fe(re.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=m,o+=2}else p==="`"?(h=!h,o++):p!=="."||h?(s+=p,o++):(u(),o++)}if(u(),h)throw new fe(re.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Wt(t)}static emptyPath(){return new Wt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e){this.path=e}static fromPath(e){return new _e(lt.fromString(e))}static fromName(e){return new _e(lt.fromString(e).popFirst(5))}static empty(){return new _e(lt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&lt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return lt.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new _e(new lt(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xu=-1;function IN(r,e){const t=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=Ie.fromTimestamp(s===1e9?new dt(t+1,0):new dt(t,s));return new fs(o,_e.empty(),e)}function xN(r){return new fs(r.readTime,r.key,xu)}class fs{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new fs(Ie.min(),_e.empty(),xu)}static max(){return new fs(Ie.max(),_e.empty(),xu)}}function CN(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=_e.comparator(r.documentKey,e.documentKey),t!==0?t:Oe(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class NN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yo(r){if(r.code!==re.FAILED_PRECONDITION||r.message!==DN)throw r;de("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ae(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new ae((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof ae?t:ae.resolve(t)}catch(t){return ae.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):ae.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):ae.reject(t)}static resolve(e){return new ae((t,s)=>{t(e)})}static reject(e){return new ae((t,s)=>{s(e)})}static waitFor(e){return new ae((t,s)=>{let o=0,u=0,h=!1;e.forEach(p=>{++o,p.next(()=>{++u,h&&u===o&&t()},m=>s(m))}),h=!0,u===o&&t()})}static or(e){let t=ae.resolve(!1);for(const s of e)t=t.next(o=>o?ae.resolve(o):s());return t}static forEach(e,t){const s=[];return e.forEach((o,u)=>{s.push(t.call(this,o,u))}),this.waitFor(s)}static mapArray(e,t){return new ae((s,o)=>{const u=e.length,h=new Array(u);let p=0;for(let m=0;m<u;m++){const g=m;t(e[g]).next(v=>{h[g]=v,++p,p===u&&s(h)},v=>o(v))}})}static doWhile(e,t){return new ae((s,o)=>{const u=()=>{e()===!0?t().next(()=>{u()},o):s()};u()})}}function kN(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Xo(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.oe(s),this._e=s=>t.writeSequenceNumber(s))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}xf.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ug=-1;function Cf(r){return r==null}function of(r){return r===0&&1/r==-1/0}function ON(r){return typeof r=="number"&&Number.isInteger(r)&&!of(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dw="";function MN(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=PE(e)),e=PN(r.get(t),e);return PE(e)}function PN(r,e){let t=e;const s=r.length;for(let o=0;o<s;o++){const u=r.charAt(o);switch(u){case"\0":t+="";break;case dw:t+="";break;default:t+=u}}return t}function PE(r){return r+dw+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VE(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function Ts(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function pw(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e,t){this.comparator=e,this.root=t||Xt.EMPTY}insert(e,t){return new pt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Xt.BLACK,null,null))}remove(e){return new pt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Xt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new wh(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new wh(this.root,e,this.comparator,!1)}getReverseIterator(){return new wh(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new wh(this.root,e,this.comparator,!0)}}class wh{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Xt{constructor(e,t,s,o,u){this.key=e,this.value=t,this.color=s??Xt.RED,this.left=o??Xt.EMPTY,this.right=u??Xt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,u){return new Xt(e??this.key,t??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,s),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Xt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Xt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Xt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Xt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Ae();const e=this.left.check();if(e!==this.right.check())throw Ae();return e+(this.isRed()?0:1)}}Xt.EMPTY=null,Xt.RED=!0,Xt.BLACK=!1;Xt.EMPTY=new class{constructor(){this.size=0}get key(){throw Ae()}get value(){throw Ae()}get color(){throw Ae()}get left(){throw Ae()}get right(){throw Ae()}copy(e,t,s,o,u){return this}insert(e,t,s){return new Xt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this.comparator=e,this.data=new pt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new LE(this.data.getIterator())}getIteratorFrom(e){return new LE(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof Pt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Pt(this.comparator);return t.data=e,t}}class LE{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e){this.fields=e,e.sort(Wt.comparator)}static empty(){return new On([])}unionWith(e){let t=new Pt(Wt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new On(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Do(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new mw("Invalid base64 string: "+u):u}}(e);return new Jt(t)}static fromUint8Array(e){const t=function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u}(e);return new Jt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Jt.EMPTY_BYTE_STRING=new Jt("");const VN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ds(r){if(Xe(!!r),typeof r=="string"){let e=0;const t=VN.exec(r);if(Xe(!!t),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:bt(r.seconds),nanos:bt(r.nanos)}}function bt(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function ps(r){return typeof r=="string"?Jt.fromBase64String(r):Jt.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gw="server_timestamp",yw="__type__",vw="__previous_value__",_w="__local_write_time__";function jg(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[yw])===null||t===void 0?void 0:t.stringValue)===gw}function Df(r){const e=r.mapValue.fields[vw];return jg(e)?Df(e):e}function Cu(r){const e=ds(r.mapValue.fields[_w].timestampValue);return new dt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LN{constructor(e,t,s,o,u,h,p,m,g){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=p,this.longPollingOptions=m,this.useFetchStreams=g}}const lf="(default)";class Du{constructor(e,t){this.projectId=e,this.database=t||lf}static empty(){return new Du("","")}get isDefaultDatabase(){return this.database===lf}isEqual(e){return e instanceof Du&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ew="__type__",UN="__max__",Sh={mapValue:{}},bw="__vector__",uf="value";function ms(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?jg(r)?4:zN(r)?9007199254740991:jN(r)?10:11:Ae()}function Mr(r,e){if(r===e)return!0;const t=ms(r);if(t!==ms(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return Cu(r).isEqual(Cu(e));case 3:return function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=ds(o.timestampValue),p=ds(u.timestampValue);return h.seconds===p.seconds&&h.nanos===p.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(o,u){return ps(o.bytesValue).isEqual(ps(u.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(o,u){return bt(o.geoPointValue.latitude)===bt(u.geoPointValue.latitude)&&bt(o.geoPointValue.longitude)===bt(u.geoPointValue.longitude)}(r,e);case 2:return function(o,u){if("integerValue"in o&&"integerValue"in u)return bt(o.integerValue)===bt(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=bt(o.doubleValue),p=bt(u.doubleValue);return h===p?of(h)===of(p):isNaN(h)&&isNaN(p)}return!1}(r,e);case 9:return Do(r.arrayValue.values||[],e.arrayValue.values||[],Mr);case 10:case 11:return function(o,u){const h=o.mapValue.fields||{},p=u.mapValue.fields||{};if(VE(h)!==VE(p))return!1;for(const m in h)if(h.hasOwnProperty(m)&&(p[m]===void 0||!Mr(h[m],p[m])))return!1;return!0}(r,e);default:return Ae()}}function Nu(r,e){return(r.values||[]).find(t=>Mr(t,e))!==void 0}function No(r,e){if(r===e)return 0;const t=ms(r),s=ms(e);if(t!==s)return Oe(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Oe(r.booleanValue,e.booleanValue);case 2:return function(u,h){const p=bt(u.integerValue||u.doubleValue),m=bt(h.integerValue||h.doubleValue);return p<m?-1:p>m?1:p===m?0:isNaN(p)?isNaN(m)?0:-1:1}(r,e);case 3:return UE(r.timestampValue,e.timestampValue);case 4:return UE(Cu(r),Cu(e));case 5:return Gm(r.stringValue,e.stringValue);case 6:return function(u,h){const p=ps(u),m=ps(h);return p.compareTo(m)}(r.bytesValue,e.bytesValue);case 7:return function(u,h){const p=u.split("/"),m=h.split("/");for(let g=0;g<p.length&&g<m.length;g++){const v=Oe(p[g],m[g]);if(v!==0)return v}return Oe(p.length,m.length)}(r.referenceValue,e.referenceValue);case 8:return function(u,h){const p=Oe(bt(u.latitude),bt(h.latitude));return p!==0?p:Oe(bt(u.longitude),bt(h.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return jE(r.arrayValue,e.arrayValue);case 10:return function(u,h){var p,m,g,v;const b=u.fields||{},w=h.fields||{},I=(p=b[uf])===null||p===void 0?void 0:p.arrayValue,C=(m=w[uf])===null||m===void 0?void 0:m.arrayValue,z=Oe(((g=I==null?void 0:I.values)===null||g===void 0?void 0:g.length)||0,((v=C==null?void 0:C.values)===null||v===void 0?void 0:v.length)||0);return z!==0?z:jE(I,C)}(r.mapValue,e.mapValue);case 11:return function(u,h){if(u===Sh.mapValue&&h===Sh.mapValue)return 0;if(u===Sh.mapValue)return 1;if(h===Sh.mapValue)return-1;const p=u.fields||{},m=Object.keys(p),g=h.fields||{},v=Object.keys(g);m.sort(),v.sort();for(let b=0;b<m.length&&b<v.length;++b){const w=Gm(m[b],v[b]);if(w!==0)return w;const I=No(p[m[b]],g[v[b]]);if(I!==0)return I}return Oe(m.length,v.length)}(r.mapValue,e.mapValue);default:throw Ae()}}function UE(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return Oe(r,e);const t=ds(r),s=ds(e),o=Oe(t.seconds,s.seconds);return o!==0?o:Oe(t.nanos,s.nanos)}function jE(r,e){const t=r.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const u=No(t[o],s[o]);if(u)return u}return Oe(t.length,s.length)}function ko(r){return Km(r)}function Km(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(t){const s=ds(t);return`time(${s.seconds},${s.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(t){return ps(t).toBase64()}(r.bytesValue):"referenceValue"in r?function(t){return _e.fromName(t).toString()}(r.referenceValue):"geoPointValue"in r?function(t){return`geo(${t.latitude},${t.longitude})`}(r.geoPointValue):"arrayValue"in r?function(t){let s="[",o=!0;for(const u of t.values||[])o?o=!1:s+=",",s+=Km(u);return s+"]"}(r.arrayValue):"mapValue"in r?function(t){const s=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const h of s)u?u=!1:o+=",",o+=`${h}:${Km(t.fields[h])}`;return o+"}"}(r.mapValue):Ae()}function jh(r){switch(ms(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Df(r);return e?16+jh(e):16;case 5:return 2*r.stringValue.length;case 6:return ps(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((o,u)=>o+jh(u),0)}(r.arrayValue);case 10:case 11:return function(s){let o=0;return Ts(s.fields,(u,h)=>{o+=u.length+jh(h)}),o}(r.mapValue);default:throw Ae()}}function zE(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function Qm(r){return!!r&&"integerValue"in r}function zg(r){return!!r&&"arrayValue"in r}function qE(r){return!!r&&"nullValue"in r}function BE(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function zh(r){return!!r&&"mapValue"in r}function jN(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[Ew])===null||t===void 0?void 0:t.stringValue)===bw}function Eu(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return Ts(r.mapValue.fields,(t,s)=>e.mapValue.fields[t]=Eu(s)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Eu(r.arrayValue.values[t]);return e}return Object.assign({},r)}function zN(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===UN}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e){this.value=e}static empty(){return new En({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!zh(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Eu(t)}setAll(e){let t=Wt.emptyPath(),s={},o=[];e.forEach((h,p)=>{if(!t.isImmediateParentOf(p)){const m=this.getFieldsMap(t);this.applyChanges(m,s,o),s={},o=[],t=p.popLast()}h?s[p.lastSegment()]=Eu(h):o.push(p.lastSegment())});const u=this.getFieldsMap(t);this.applyChanges(u,s,o)}delete(e){const t=this.field(e.popLast());zh(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Mr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];zh(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){Ts(t,(o,u)=>e[o]=u);for(const o of s)delete e[o]}clone(){return new En(Eu(this.value))}}function Tw(r){const e=[];return Ts(r.fields,(t,s)=>{const o=new Wt([t]);if(zh(s)){const u=Tw(s.mapValue).fields;if(u.length===0)e.push(o);else for(const h of u)e.push(o.child(h))}else e.push(o)}),new On(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e,t,s,o,u,h,p){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=u,this.data=h,this.documentState=p}static newInvalidDocument(e){return new an(e,0,Ie.min(),Ie.min(),Ie.min(),En.empty(),0)}static newFoundDocument(e,t,s,o){return new an(e,1,t,Ie.min(),s,o,0)}static newNoDocument(e,t){return new an(e,2,t,Ie.min(),Ie.min(),En.empty(),0)}static newUnknownDocument(e,t){return new an(e,3,t,Ie.min(),Ie.min(),En.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ie.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=En.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=En.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ie.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof an&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new an(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(e,t){this.position=e,this.inclusive=t}}function HE(r,e,t){let s=0;for(let o=0;o<r.position.length;o++){const u=e[o],h=r.position[o];if(u.field.isKeyField()?s=_e.comparator(_e.fromName(h.referenceValue),t.key):s=No(h,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function FE(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!Mr(r.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(e,t="asc"){this.field=e,this.dir=t}}function qN(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ww{}class xt extends ww{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new HN(e,t,s):t==="array-contains"?new GN(e,s):t==="in"?new KN(e,s):t==="not-in"?new QN(e,s):t==="array-contains-any"?new YN(e,s):new xt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new FN(e,s):new $N(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(No(t,this.value)):t!==null&&ms(this.value)===ms(t)&&this.matchesComparison(No(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ae()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class lr extends ww{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new lr(e,t)}matches(e){return Sw(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function Sw(r){return r.op==="and"}function Aw(r){return BN(r)&&Sw(r)}function BN(r){for(const e of r.filters)if(e instanceof lr)return!1;return!0}function Ym(r){if(r instanceof xt)return r.field.canonicalString()+r.op.toString()+ko(r.value);if(Aw(r))return r.filters.map(e=>Ym(e)).join(",");{const e=r.filters.map(t=>Ym(t)).join(",");return`${r.op}(${e})`}}function Rw(r,e){return r instanceof xt?function(s,o){return o instanceof xt&&s.op===o.op&&s.field.isEqual(o.field)&&Mr(s.value,o.value)}(r,e):r instanceof lr?function(s,o){return o instanceof lr&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((u,h,p)=>u&&Rw(h,o.filters[p]),!0):!1}(r,e):void Ae()}function Iw(r){return r instanceof xt?function(t){return`${t.field.canonicalString()} ${t.op} ${ko(t.value)}`}(r):r instanceof lr?function(t){return t.op.toString()+" {"+t.getFilters().map(Iw).join(" ,")+"}"}(r):"Filter"}class HN extends xt{constructor(e,t,s){super(e,t,s),this.key=_e.fromName(s.referenceValue)}matches(e){const t=_e.comparator(e.key,this.key);return this.matchesComparison(t)}}class FN extends xt{constructor(e,t){super(e,"in",t),this.keys=xw("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class $N extends xt{constructor(e,t){super(e,"not-in",t),this.keys=xw("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function xw(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>_e.fromName(s.referenceValue))}class GN extends xt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return zg(t)&&Nu(t.arrayValue,this.value)}}class KN extends xt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Nu(this.value.arrayValue,t)}}class QN extends xt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Nu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Nu(this.value.arrayValue,t)}}class YN extends xt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!zg(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>Nu(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XN{constructor(e,t=null,s=[],o=[],u=null,h=null,p=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=h,this.endAt=p,this.le=null}}function $E(r,e=null,t=[],s=[],o=null,u=null,h=null){return new XN(r,e,t,s,o,u,h)}function qg(r){const e=xe(r);if(e.le===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>Ym(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(u){return u.field.canonicalString()+u.dir}(s)).join(","),Cf(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>ko(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>ko(s)).join(",")),e.le=t}return e.le}function Bg(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!qN(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!Rw(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!FE(r.startAt,e.startAt)&&FE(r.endAt,e.endAt)}function Xm(r){return _e.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(e,t=null,s=[],o=[],u=null,h="F",p=null,m=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=h,this.startAt=p,this.endAt=m,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function WN(r,e,t,s,o,u,h,p){return new Wo(r,e,t,s,o,u,h,p)}function Nf(r){return new Wo(r)}function GE(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function Cw(r){return r.collectionGroup!==null}function bu(r){const e=xe(r);if(e.he===null){e.he=[];const t=new Set;for(const u of e.explicitOrderBy)e.he.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let p=new Pt(Wt.comparator);return h.filters.forEach(m=>{m.getFlattenedFilters().forEach(g=>{g.isInequality()&&(p=p.add(g.field))})}),p})(e).forEach(u=>{t.has(u.canonicalString())||u.isKeyField()||e.he.push(new ku(u,s))}),t.has(Wt.keyField().canonicalString())||e.he.push(new ku(Wt.keyField(),s))}return e.he}function kr(r){const e=xe(r);return e.Pe||(e.Pe=JN(e,bu(r))),e.Pe}function JN(r,e){if(r.limitType==="F")return $E(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(o=>{const u=o.dir==="desc"?"asc":"desc";return new ku(o.field,u)});const t=r.endAt?new cf(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new cf(r.startAt.position,r.startAt.inclusive):null;return $E(r.path,r.collectionGroup,e,r.filters,r.limit,t,s)}}function Wm(r,e){const t=r.filters.concat([e]);return new Wo(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function Jm(r,e,t){return new Wo(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function kf(r,e){return Bg(kr(r),kr(e))&&r.limitType===e.limitType}function Dw(r){return`${qg(kr(r))}|lt:${r.limitType}`}function yo(r){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(o=>Iw(o)).join(", ")}]`),Cf(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(o=>function(h){return`${h.field.canonicalString()} (${h.dir})`}(o)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(o=>ko(o)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(o=>ko(o)).join(",")),`Target(${s})`}(kr(r))}; limitType=${r.limitType})`}function Of(r,e){return e.isFoundDocument()&&function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):_e.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)}(r,e)&&function(s,o){for(const u of bu(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0}(r,e)&&function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0}(r,e)&&function(s,o){return!(s.startAt&&!function(h,p,m){const g=HE(h,p,m);return h.inclusive?g<=0:g<0}(s.startAt,bu(s),o)||s.endAt&&!function(h,p,m){const g=HE(h,p,m);return h.inclusive?g>=0:g>0}(s.endAt,bu(s),o))}(r,e)}function ZN(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Nw(r){return(e,t)=>{let s=!1;for(const o of bu(r)){const u=ek(o,e,t);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function ek(r,e,t){const s=r.field.isKeyField()?_e.comparator(e.key,t.key):function(u,h,p){const m=h.data.field(u),g=p.data.field(u);return m!==null&&g!==null?No(m,g):Ae()}(r.field,e,t);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return Ae()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Ts(this.inner,(t,s)=>{for(const[o,u]of s)e(o,u)})}isEmpty(){return pw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tk=new pt(_e.comparator);function _i(){return tk}const kw=new pt(_e.comparator);function mu(...r){let e=kw;for(const t of r)e=e.insert(t.key,t);return e}function Ow(r){let e=kw;return r.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function la(){return Tu()}function Mw(){return Tu()}function Tu(){return new _a(r=>r.toString(),(r,e)=>r.isEqual(e))}const nk=new pt(_e.comparator),rk=new Pt(_e.comparator);function Ue(...r){let e=rk;for(const t of r)e=e.add(t);return e}const ik=new Pt(Oe);function sk(){return ik}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hg(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:of(e)?"-0":e}}function Pw(r){return{integerValue:""+r}}function ak(r,e){return ON(e)?Pw(e):Hg(r,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(){this._=void 0}}function ok(r,e,t){return r instanceof hf?function(o,u){const h={fields:{[yw]:{stringValue:gw},[_w]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&jg(u)&&(u=Df(u)),u&&(h.fields[vw]=u),{mapValue:h}}(t,e):r instanceof Oo?Lw(r,e):r instanceof Mo?Uw(r,e):function(o,u){const h=Vw(o,u),p=KE(h)+KE(o.Ie);return Qm(h)&&Qm(o.Ie)?Pw(p):Hg(o.serializer,p)}(r,e)}function lk(r,e,t){return r instanceof Oo?Lw(r,e):r instanceof Mo?Uw(r,e):t}function Vw(r,e){return r instanceof ff?function(s){return Qm(s)||function(u){return!!u&&"doubleValue"in u}(s)}(e)?e:{integerValue:0}:null}class hf extends Mf{}class Oo extends Mf{constructor(e){super(),this.elements=e}}function Lw(r,e){const t=jw(e);for(const s of r.elements)t.some(o=>Mr(o,s))||t.push(s);return{arrayValue:{values:t}}}class Mo extends Mf{constructor(e){super(),this.elements=e}}function Uw(r,e){let t=jw(e);for(const s of r.elements)t=t.filter(o=>!Mr(o,s));return{arrayValue:{values:t}}}class ff extends Mf{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function KE(r){return bt(r.integerValue||r.doubleValue)}function jw(r){return zg(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zw{constructor(e,t){this.field=e,this.transform=t}}function uk(r,e){return r.field.isEqual(e.field)&&function(s,o){return s instanceof Oo&&o instanceof Oo||s instanceof Mo&&o instanceof Mo?Do(s.elements,o.elements,Mr):s instanceof ff&&o instanceof ff?Mr(s.Ie,o.Ie):s instanceof hf&&o instanceof hf}(r.transform,e.transform)}class ck{constructor(e,t){this.version=e,this.transformResults=t}}class Yn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Yn}static exists(e){return new Yn(void 0,e)}static updateTime(e){return new Yn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function qh(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Pf{}function qw(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new Fg(r.key,Yn.none()):new Bu(r.key,r.data,Yn.none());{const t=r.data,s=En.empty();let o=new Pt(Wt.comparator);for(let u of e.fields)if(!o.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?s.delete(u):s.set(u,h),o=o.add(u)}return new ws(r.key,s,new On(o.toArray()),Yn.none())}}function hk(r,e,t){r instanceof Bu?function(o,u,h){const p=o.value.clone(),m=YE(o.fieldTransforms,u,h.transformResults);p.setAll(m),u.convertToFoundDocument(h.version,p).setHasCommittedMutations()}(r,e,t):r instanceof ws?function(o,u,h){if(!qh(o.precondition,u))return void u.convertToUnknownDocument(h.version);const p=YE(o.fieldTransforms,u,h.transformResults),m=u.data;m.setAll(Bw(o)),m.setAll(p),u.convertToFoundDocument(h.version,m).setHasCommittedMutations()}(r,e,t):function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()}(0,e,t)}function wu(r,e,t,s){return r instanceof Bu?function(u,h,p,m){if(!qh(u.precondition,h))return p;const g=u.value.clone(),v=XE(u.fieldTransforms,m,h);return g.setAll(v),h.convertToFoundDocument(h.version,g).setHasLocalMutations(),null}(r,e,t,s):r instanceof ws?function(u,h,p,m){if(!qh(u.precondition,h))return p;const g=XE(u.fieldTransforms,m,h),v=h.data;return v.setAll(Bw(u)),v.setAll(g),h.convertToFoundDocument(h.version,v).setHasLocalMutations(),p===null?null:p.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map(b=>b.field))}(r,e,t,s):function(u,h,p){return qh(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):p}(r,e,t)}function fk(r,e){let t=null;for(const s of r.fieldTransforms){const o=e.data.field(s.field),u=Vw(s.transform,o||null);u!=null&&(t===null&&(t=En.empty()),t.set(s.field,u))}return t||null}function QE(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&Do(s,o,(u,h)=>uk(u,h))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class Bu extends Pf{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class ws extends Pf{constructor(e,t,s,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function Bw(r){const e=new Map;return r.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=r.data.field(t);e.set(t,s)}}),e}function YE(r,e,t){const s=new Map;Xe(r.length===t.length);for(let o=0;o<t.length;o++){const u=r[o],h=u.transform,p=e.data.field(u.field);s.set(u.field,lk(h,p,t[o]))}return s}function XE(r,e,t){const s=new Map;for(const o of r){const u=o.transform,h=t.data.field(o.field);s.set(o.field,ok(u,h,e))}return s}class Fg extends Pf{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class dk extends Pf{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pk{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&hk(u,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=wu(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=wu(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=Mw();return this.mutations.forEach(o=>{const u=e.get(o.key),h=u.overlayedDocument;let p=this.applyToLocalView(h,u.mutatedFields);p=t.has(o.key)?null:p;const m=qw(h,p);m!==null&&s.set(o.key,m),h.isValidDocument()||h.convertToNoDocument(Ie.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Ue())}isEqual(e){return this.batchId===e.batchId&&Do(this.mutations,e.mutations,(t,s)=>QE(t,s))&&Do(this.baseMutations,e.baseMutations,(t,s)=>QE(t,s))}}class $g{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){Xe(e.mutations.length===s.length);let o=function(){return nk}();const u=e.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,s[h].version);return new $g(e,t,s,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mk{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gk{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Rt,He;function yk(r){switch(r){case re.OK:return Ae();case re.CANCELLED:case re.UNKNOWN:case re.DEADLINE_EXCEEDED:case re.RESOURCE_EXHAUSTED:case re.INTERNAL:case re.UNAVAILABLE:case re.UNAUTHENTICATED:return!1;case re.INVALID_ARGUMENT:case re.NOT_FOUND:case re.ALREADY_EXISTS:case re.PERMISSION_DENIED:case re.FAILED_PRECONDITION:case re.ABORTED:case re.OUT_OF_RANGE:case re.UNIMPLEMENTED:case re.DATA_LOSS:return!0;default:return Ae()}}function Hw(r){if(r===void 0)return vi("GRPC error has no .code"),re.UNKNOWN;switch(r){case Rt.OK:return re.OK;case Rt.CANCELLED:return re.CANCELLED;case Rt.UNKNOWN:return re.UNKNOWN;case Rt.DEADLINE_EXCEEDED:return re.DEADLINE_EXCEEDED;case Rt.RESOURCE_EXHAUSTED:return re.RESOURCE_EXHAUSTED;case Rt.INTERNAL:return re.INTERNAL;case Rt.UNAVAILABLE:return re.UNAVAILABLE;case Rt.UNAUTHENTICATED:return re.UNAUTHENTICATED;case Rt.INVALID_ARGUMENT:return re.INVALID_ARGUMENT;case Rt.NOT_FOUND:return re.NOT_FOUND;case Rt.ALREADY_EXISTS:return re.ALREADY_EXISTS;case Rt.PERMISSION_DENIED:return re.PERMISSION_DENIED;case Rt.FAILED_PRECONDITION:return re.FAILED_PRECONDITION;case Rt.ABORTED:return re.ABORTED;case Rt.OUT_OF_RANGE:return re.OUT_OF_RANGE;case Rt.UNIMPLEMENTED:return re.UNIMPLEMENTED;case Rt.DATA_LOSS:return re.DATA_LOSS;default:return Ae()}}(He=Rt||(Rt={}))[He.OK=0]="OK",He[He.CANCELLED=1]="CANCELLED",He[He.UNKNOWN=2]="UNKNOWN",He[He.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",He[He.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",He[He.NOT_FOUND=5]="NOT_FOUND",He[He.ALREADY_EXISTS=6]="ALREADY_EXISTS",He[He.PERMISSION_DENIED=7]="PERMISSION_DENIED",He[He.UNAUTHENTICATED=16]="UNAUTHENTICATED",He[He.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",He[He.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",He[He.ABORTED=10]="ABORTED",He[He.OUT_OF_RANGE=11]="OUT_OF_RANGE",He[He.UNIMPLEMENTED=12]="UNIMPLEMENTED",He[He.INTERNAL=13]="INTERNAL",He[He.UNAVAILABLE=14]="UNAVAILABLE",He[He.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vk=new cs([4294967295,4294967295],0);function WE(r){const e=hw().encode(r),t=new iw;return t.update(e),new Uint8Array(t.digest())}function JE(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new cs([t,s],0),new cs([o,u],0)]}class Gg{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new gu(`Invalid padding: ${t}`);if(s<0)throw new gu(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new gu(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new gu(`Invalid padding when bitmap length is 0: ${t}`);this.Ee=8*e.length-t,this.de=cs.fromNumber(this.Ee)}Ae(e,t,s){let o=e.add(t.multiply(cs.fromNumber(s)));return o.compare(vk)===1&&(o=new cs([o.getBits(0),o.getBits(1)],0)),o.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const t=WE(e),[s,o]=JE(t);for(let u=0;u<this.hashCount;u++){const h=this.Ae(s,o,u);if(!this.Re(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new Gg(u,o,t);return s.forEach(p=>h.insert(p)),h}insert(e){if(this.Ee===0)return;const t=WE(e),[s,o]=JE(t);for(let u=0;u<this.hashCount;u++){const h=this.Ae(s,o,u);this.Ve(h)}}Ve(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class gu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(e,t,s,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,Hu.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Vf(Ie.min(),o,new pt(Oe),_i(),Ue())}}class Hu{constructor(e,t,s,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Hu(s,t,Ue(),Ue(),Ue())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(e,t,s,o){this.me=e,this.removedTargetIds=t,this.key=s,this.fe=o}}class Fw{constructor(e,t){this.targetId=e,this.ge=t}}class $w{constructor(e,t,s=Jt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class ZE{constructor(){this.pe=0,this.ye=eb(),this.we=Jt.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=Ue(),t=Ue(),s=Ue();return this.ye.forEach((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:Ae()}}),new Hu(this.we,this.Se,e,t,s)}Me(){this.be=!1,this.ye=eb()}xe(e,t){this.be=!0,this.ye=this.ye.insert(e,t)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,Xe(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class _k{constructor(e){this.ke=e,this.qe=new Map,this.Qe=_i(),this.$e=Ah(),this.Ue=Ah(),this.Ke=new pt(Oe)}We(e){for(const t of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(t,e.fe):this.ze(t,e.key,e.fe);for(const t of e.removedTargetIds)this.ze(t,e.key,e.fe)}je(e){this.forEachTarget(e,t=>{const s=this.He(t);switch(e.state){case 0:this.Je(t)&&s.Ce(e.resumeToken);break;case 1:s.Be(),s.De||s.Me(),s.Ce(e.resumeToken);break;case 2:s.Be(),s.De||this.removeTarget(t);break;case 3:this.Je(t)&&(s.Le(),s.Ce(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),s.Ce(e.resumeToken));break;default:Ae()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.qe.forEach((s,o)=>{this.Je(o)&&t(o)})}Ze(e){const t=e.targetId,s=e.ge.count,o=this.Xe(t);if(o){const u=o.target;if(Xm(u))if(s===0){const h=new _e(u.path);this.ze(t,h,an.newNoDocument(h,Ie.min()))}else Xe(s===1);else{const h=this.et(t);if(h!==s){const p=this.tt(e),m=p?this.nt(p,e,h):1;if(m!==0){this.Ye(t);const g=m===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,g)}}}}}tt(e){const t=e.ge.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=t;let h,p;try{h=ps(s).toUint8Array()}catch(m){if(m instanceof mw)return Co("Decoding the base64 bloom filter in existence filter failed ("+m.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw m}try{p=new Gg(h,o,u)}catch(m){return Co(m instanceof gu?"BloomFilter error: ":"Applying bloom filter failed: ",m),null}return p.Ee===0?null:p}nt(e,t,s){return t.ge.count===s-this.st(e,t.targetId)?0:2}st(e,t){const s=this.ke.getRemoteKeysForTarget(t);let o=0;return s.forEach(u=>{const h=this.ke.it(),p=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(p)||(this.ze(t,u,null),o++)}),o}ot(e){const t=new Map;this.qe.forEach((u,h)=>{const p=this.Xe(h);if(p){if(u.current&&Xm(p.target)){const m=new _e(p.target.path);this._t(m).has(h)||this.ut(h,m)||this.ze(h,m,an.newNoDocument(m,e))}u.ve&&(t.set(h,u.Fe()),u.Me())}});let s=Ue();this.Ue.forEach((u,h)=>{let p=!0;h.forEachWhile(m=>{const g=this.Xe(m);return!g||g.purpose==="TargetPurposeLimboResolution"||(p=!1,!1)}),p&&(s=s.add(u))}),this.Qe.forEach((u,h)=>h.setReadTime(e));const o=new Vf(e,t,this.Ke,this.Qe,s);return this.Qe=_i(),this.$e=Ah(),this.Ue=Ah(),this.Ke=new pt(Oe),o}Ge(e,t){if(!this.Je(e))return;const s=this.ut(e,t.key)?2:0;this.He(e).xe(t.key,s),this.Qe=this.Qe.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e)),this.Ue=this.Ue.insert(t.key,this.ct(t.key).add(e))}ze(e,t,s){if(!this.Je(e))return;const o=this.He(e);this.ut(e,t)?o.xe(t,1):o.Oe(t),this.Ue=this.Ue.insert(t,this.ct(t).delete(e)),this.Ue=this.Ue.insert(t,this.ct(t).add(e)),s&&(this.Qe=this.Qe.insert(t,s))}removeTarget(e){this.qe.delete(e)}et(e){const t=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let t=this.qe.get(e);return t||(t=new ZE,this.qe.set(e,t)),t}ct(e){let t=this.Ue.get(e);return t||(t=new Pt(Oe),this.Ue=this.Ue.insert(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new Pt(Oe),this.$e=this.$e.insert(e,t)),t}Je(e){const t=this.Xe(e)!==null;return t||de("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){const t=this.qe.get(e);return t&&t.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new ZE),this.ke.getRemoteKeysForTarget(e).forEach(t=>{this.ze(e,t,null)})}ut(e,t){return this.ke.getRemoteKeysForTarget(e).has(t)}}function Ah(){return new pt(_e.comparator)}function eb(){return new pt(_e.comparator)}const Ek={asc:"ASCENDING",desc:"DESCENDING"},bk={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Tk={and:"AND",or:"OR"};class wk{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Zm(r,e){return r.useProto3Json||Cf(e)?e:{value:e}}function df(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Gw(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function Sk(r,e){return df(r,e.toTimestamp())}function Or(r){return Xe(!!r),Ie.fromTimestamp(function(t){const s=ds(t);return new dt(s.seconds,s.nanos)}(r))}function Kg(r,e){return eg(r,e).canonicalString()}function eg(r,e){const t=function(o){return new lt(["projects",o.projectId,"databases",o.database])}(r).child("documents");return e===void 0?t:t.child(e)}function Kw(r){const e=lt.fromString(r);return Xe(Jw(e)),e}function tg(r,e){return Kg(r.databaseId,e.path)}function _m(r,e){const t=Kw(e);if(t.get(1)!==r.databaseId.projectId)throw new fe(re.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new fe(re.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new _e(Yw(t))}function Qw(r,e){return Kg(r.databaseId,e)}function Ak(r){const e=Kw(r);return e.length===4?lt.emptyPath():Yw(e)}function ng(r){return new lt(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Yw(r){return Xe(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function tb(r,e,t){return{name:tg(r,e),fields:t.value.mapValue.fields}}function Rk(r,e){let t;if("targetChange"in e){e.targetChange;const s=function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:Ae()}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=function(g,v){return g.useProto3Json?(Xe(v===void 0||typeof v=="string"),Jt.fromBase64String(v||"")):(Xe(v===void 0||v instanceof Buffer||v instanceof Uint8Array),Jt.fromUint8Array(v||new Uint8Array))}(r,e.targetChange.resumeToken),h=e.targetChange.cause,p=h&&function(g){const v=g.code===void 0?re.UNKNOWN:Hw(g.code);return new fe(v,g.message||"")}(h);t=new $w(s,o,u,p||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=_m(r,s.document.name),u=Or(s.document.updateTime),h=s.document.createTime?Or(s.document.createTime):Ie.min(),p=new En({mapValue:{fields:s.document.fields}}),m=an.newFoundDocument(o,u,h,p),g=s.targetIds||[],v=s.removedTargetIds||[];t=new Bh(g,v,m.key,m)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=_m(r,s.document),u=s.readTime?Or(s.readTime):Ie.min(),h=an.newNoDocument(o,u),p=s.removedTargetIds||[];t=new Bh([],p,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=_m(r,s.document),u=s.removedTargetIds||[];t=new Bh([],u,o,null)}else{if(!("filter"in e))return Ae();{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,h=new gk(o,u),p=s.targetId;t=new Fw(p,h)}}return t}function Ik(r,e){let t;if(e instanceof Bu)t={update:tb(r,e.key,e.value)};else if(e instanceof Fg)t={delete:tg(r,e.key)};else if(e instanceof ws)t={update:tb(r,e.key,e.data),updateMask:Vk(e.fieldMask)};else{if(!(e instanceof dk))return Ae();t={verify:tg(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(u,h){const p=h.transform;if(p instanceof hf)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(p instanceof Oo)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:p.elements}};if(p instanceof Mo)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:p.elements}};if(p instanceof ff)return{fieldPath:h.field.canonicalString(),increment:p.Ie};throw Ae()}(0,s))),e.precondition.isNone||(t.currentDocument=function(o,u){return u.updateTime!==void 0?{updateTime:Sk(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:Ae()}(r,e.precondition)),t}function xk(r,e){return r&&r.length>0?(Xe(e!==void 0),r.map(t=>function(o,u){let h=o.updateTime?Or(o.updateTime):Or(u);return h.isEqual(Ie.min())&&(h=Or(u)),new ck(h,o.transformResults||[])}(t,e))):[]}function Ck(r,e){return{documents:[Qw(r,e.path)]}}function Dk(r,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=Qw(r,o);const u=function(g){if(g.length!==0)return Ww(lr.create(g,"and"))}(e.filters);u&&(t.structuredQuery.where=u);const h=function(g){if(g.length!==0)return g.map(v=>function(w){return{field:vo(w.field),direction:Ok(w.dir)}}(v))}(e.orderBy);h&&(t.structuredQuery.orderBy=h);const p=Zm(r,e.limit);return p!==null&&(t.structuredQuery.limit=p),e.startAt&&(t.structuredQuery.startAt=function(g){return{before:g.inclusive,values:g.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(g){return{before:!g.inclusive,values:g.position}}(e.endAt)),{ht:t,parent:o}}function Nk(r){let e=Ak(r.parent);const t=r.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){Xe(s===1);const v=t.from[0];v.allDescendants?o=v.collectionId:e=e.child(v.collectionId)}let u=[];t.where&&(u=function(b){const w=Xw(b);return w instanceof lr&&Aw(w)?w.getFilters():[w]}(t.where));let h=[];t.orderBy&&(h=function(b){return b.map(w=>function(C){return new ku(_o(C.field),function(U){switch(U){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(w))}(t.orderBy));let p=null;t.limit&&(p=function(b){let w;return w=typeof b=="object"?b.value:b,Cf(w)?null:w}(t.limit));let m=null;t.startAt&&(m=function(b){const w=!!b.before,I=b.values||[];return new cf(I,w)}(t.startAt));let g=null;return t.endAt&&(g=function(b){const w=!b.before,I=b.values||[];return new cf(I,w)}(t.endAt)),WN(e,o,h,u,p,"F",m,g)}function kk(r,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ae()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Xw(r){return r.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=_o(t.unaryFilter.field);return xt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=_o(t.unaryFilter.field);return xt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=_o(t.unaryFilter.field);return xt.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=_o(t.unaryFilter.field);return xt.create(h,"!=",{nullValue:"NULL_VALUE"});default:return Ae()}}(r):r.fieldFilter!==void 0?function(t){return xt.create(_o(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ae()}}(t.fieldFilter.op),t.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(t){return lr.create(t.compositeFilter.filters.map(s=>Xw(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Ae()}}(t.compositeFilter.op))}(r):Ae()}function Ok(r){return Ek[r]}function Mk(r){return bk[r]}function Pk(r){return Tk[r]}function vo(r){return{fieldPath:r.canonicalString()}}function _o(r){return Wt.fromServerFormat(r.fieldPath)}function Ww(r){return r instanceof xt?function(t){if(t.op==="=="){if(BE(t.value))return{unaryFilter:{field:vo(t.field),op:"IS_NAN"}};if(qE(t.value))return{unaryFilter:{field:vo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(BE(t.value))return{unaryFilter:{field:vo(t.field),op:"IS_NOT_NAN"}};if(qE(t.value))return{unaryFilter:{field:vo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:vo(t.field),op:Mk(t.op),value:t.value}}}(r):r instanceof lr?function(t){const s=t.getFilters().map(o=>Ww(o));return s.length===1?s[0]:{compositeFilter:{op:Pk(t.op),filters:s}}}(r):Ae()}function Vk(r){const e=[];return r.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Jw(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e,t,s,o,u=Ie.min(),h=Ie.min(),p=Jt.EMPTY_BYTE_STRING,m=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=p,this.expectedCount=m}withSequenceNumber(e){return new as(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new as(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new as(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new as(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lk{constructor(e){this.Tt=e}}function Uk(r){const e=Nk({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Jm(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jk{constructor(){this.Tn=new zk}addToCollectionParentIndex(e,t){return this.Tn.add(t),ae.resolve()}getCollectionParents(e,t){return ae.resolve(this.Tn.getEntries(t))}addFieldIndex(e,t){return ae.resolve()}deleteFieldIndex(e,t){return ae.resolve()}deleteAllFieldIndexes(e){return ae.resolve()}createTargetIndexes(e,t){return ae.resolve()}getDocumentsMatchingTarget(e,t){return ae.resolve(null)}getIndexType(e,t){return ae.resolve(0)}getFieldIndexes(e,t){return ae.resolve([])}getNextCollectionGroupToUpdate(e){return ae.resolve(null)}getMinOffset(e,t){return ae.resolve(fs.min())}getMinOffsetFromCollectionGroup(e,t){return ae.resolve(fs.min())}updateCollectionGroup(e,t,s){return ae.resolve()}updateIndexEntries(e,t){return ae.resolve()}}class zk{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new Pt(lt.comparator),u=!o.has(s);return this.index[t]=o.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new Pt(lt.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nb={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Zw=41943040;class _n{static withCacheSize(e){return new _n(e,_n.DEFAULT_COLLECTION_PERCENTILE,_n.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_n.DEFAULT_COLLECTION_PERCENTILE=10,_n.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,_n.DEFAULT=new _n(Zw,_n.DEFAULT_COLLECTION_PERCENTILE,_n.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),_n.DISABLED=new _n(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Un(){return new Po(0)}static Kn(){return new Po(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rb="LruGarbageCollector",qk=1048576;function ib([r,e],[t,s]){const o=Oe(r,t);return o===0?Oe(e,s):o}class Bk{constructor(e){this.Hn=e,this.buffer=new Pt(ib),this.Jn=0}Yn(){return++this.Jn}Zn(e){const t=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();ib(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Hk{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){de(rb,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Xo(t)?de(rb,"Ignoring IndexedDB error during garbage collection: ",t):await Yo(t)}await this.er(3e5)})}}class Fk{constructor(e,t){this.tr=e,this.params=t}calculateTargetCount(e,t){return this.tr.nr(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return ae.resolve(xf.ae);const s=new Bk(t);return this.tr.forEachTarget(e,o=>s.Zn(o.sequenceNumber)).next(()=>this.tr.rr(e,o=>s.Zn(o))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.tr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.tr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(de("LruGarbageCollector","Garbage collection skipped; disabled"),ae.resolve(nb)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(de("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),nb):this.ir(e,t))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,t){let s,o,u,h,p,m,g;const v=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(b=>(b>this.params.maximumSequenceNumbersToCollect?(de("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${b}`),o=this.params.maximumSequenceNumbersToCollect):o=b,h=Date.now(),this.nthSequenceNumber(e,o))).next(b=>(s=b,p=Date.now(),this.removeTargets(e,s,t))).next(b=>(u=b,m=Date.now(),this.removeOrphanedDocuments(e,s))).next(b=>(g=Date.now(),go()<=Le.DEBUG&&de("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-v}ms
	Determined least recently used ${o} in `+(p-h)+`ms
	Removed ${u} targets in `+(m-p)+`ms
	Removed ${b} documents in `+(g-m)+`ms
Total Duration: ${g-v}ms`),ae.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:b})))}}function $k(r,e){return new Fk(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gk{constructor(){this.changes=new _a(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,an.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?ae.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kk{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qk{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(s=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(s!==null&&wu(s.mutation,o,On.empty(),dt.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,Ue()).next(()=>s))}getLocalViewOfDocuments(e,t,s=Ue()){const o=la();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,s).next(u=>{let h=mu();return u.forEach((p,m)=>{h=h.insert(p,m.overlayedDocument)}),h}))}getOverlayedDocuments(e,t){const s=la();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,Ue()))}populateOverlays(e,t,s){const o=[];return s.forEach(u=>{t.has(u)||o.push(u)}),this.documentOverlayCache.getOverlays(e,o).next(u=>{u.forEach((h,p)=>{t.set(h,p)})})}computeViews(e,t,s,o){let u=_i();const h=Tu(),p=function(){return Tu()}();return t.forEach((m,g)=>{const v=s.get(g.key);o.has(g.key)&&(v===void 0||v.mutation instanceof ws)?u=u.insert(g.key,g):v!==void 0?(h.set(g.key,v.mutation.getFieldMask()),wu(v.mutation,g,v.mutation.getFieldMask(),dt.now())):h.set(g.key,On.empty())}),this.recalculateAndSaveOverlays(e,u).next(m=>(m.forEach((g,v)=>h.set(g,v)),t.forEach((g,v)=>{var b;return p.set(g,new Kk(v,(b=h.get(g))!==null&&b!==void 0?b:null))}),p))}recalculateAndSaveOverlays(e,t){const s=Tu();let o=new pt((h,p)=>h-p),u=Ue();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(h=>{for(const p of h)p.keys().forEach(m=>{const g=t.get(m);if(g===null)return;let v=s.get(m)||On.empty();v=p.applyToLocalView(g,v),s.set(m,v);const b=(o.get(p.batchId)||Ue()).add(m);o=o.insert(p.batchId,b)})}).next(()=>{const h=[],p=o.getReverseIterator();for(;p.hasNext();){const m=p.getNext(),g=m.key,v=m.value,b=Mw();v.forEach(w=>{if(!u.has(w)){const I=qw(t.get(w),s.get(w));I!==null&&b.set(w,I),u=u.add(w)}}),h.push(this.documentOverlayCache.saveOverlays(e,g,b))}return ae.waitFor(h)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,o){return function(h){return _e.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Cw(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next(u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-u.size):ae.resolve(la());let p=xu,m=u;return h.next(g=>ae.forEach(g,(v,b)=>(p<b.largestBatchId&&(p=b.largestBatchId),u.get(v)?ae.resolve():this.remoteDocumentCache.getEntry(e,v).next(w=>{m=m.insert(v,w)}))).next(()=>this.populateOverlays(e,g,u)).next(()=>this.computeViews(e,m,g,Ue())).next(v=>({batchId:p,changes:Ow(v)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new _e(t)).next(s=>{let o=mu();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const u=t.collectionGroup;let h=mu();return this.indexManager.getCollectionParents(e,u).next(p=>ae.forEach(p,m=>{const g=function(b,w){return new Wo(w,null,b.explicitOrderBy.slice(),b.filters.slice(),b.limit,b.limitType,b.startAt,b.endAt)}(t,m.child(u));return this.getDocumentsMatchingCollectionQuery(e,g,s,o).next(v=>{v.forEach((b,w)=>{h=h.insert(b,w)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(e,t,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,o))).next(h=>{u.forEach((m,g)=>{const v=g.getKey();h.get(v)===null&&(h=h.insert(v,an.newInvalidDocument(v)))});let p=mu();return h.forEach((m,g)=>{const v=u.get(m);v!==void 0&&wu(v.mutation,g,On.empty(),dt.now()),Of(t,g)&&(p=p.insert(m,g))}),p})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yk{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,t){return ae.resolve(this.dr.get(t))}saveBundleMetadata(e,t){return this.dr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:Or(o.createTime)}}(t)),ae.resolve()}getNamedQuery(e,t){return ae.resolve(this.Ar.get(t))}saveNamedQuery(e,t){return this.Ar.set(t.name,function(o){return{name:o.name,query:Uk(o.bundledQuery),readTime:Or(o.readTime)}}(t)),ae.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xk{constructor(){this.overlays=new pt(_e.comparator),this.Rr=new Map}getOverlay(e,t){return ae.resolve(this.overlays.get(t))}getOverlays(e,t){const s=la();return ae.forEach(t,o=>this.getOverlay(e,o).next(u=>{u!==null&&s.set(o,u)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((o,u)=>{this.Et(e,t,u)}),ae.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.Rr.get(s);return o!==void 0&&(o.forEach(u=>this.overlays=this.overlays.remove(u)),this.Rr.delete(s)),ae.resolve()}getOverlaysForCollection(e,t,s){const o=la(),u=t.length+1,h=new _e(t.child("")),p=this.overlays.getIteratorFrom(h);for(;p.hasNext();){const m=p.getNext().value,g=m.getKey();if(!t.isPrefixOf(g.path))break;g.path.length===u&&m.largestBatchId>s&&o.set(m.getKey(),m)}return ae.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let u=new pt((g,v)=>g-v);const h=this.overlays.getIterator();for(;h.hasNext();){const g=h.getNext().value;if(g.getKey().getCollectionGroup()===t&&g.largestBatchId>s){let v=u.get(g.largestBatchId);v===null&&(v=la(),u=u.insert(g.largestBatchId,v)),v.set(g.getKey(),g)}}const p=la(),m=u.getIterator();for(;m.hasNext()&&(m.getNext().value.forEach((g,v)=>p.set(g,v)),!(p.size()>=o)););return ae.resolve(p)}Et(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.Rr.get(o.largestBatchId).delete(s.key);this.Rr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new mk(t,s));let u=this.Rr.get(t);u===void 0&&(u=Ue(),this.Rr.set(t,u)),this.Rr.set(t,u.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wk{constructor(){this.sessionToken=Jt.EMPTY_BYTE_STRING}getSessionToken(e){return ae.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,ae.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(){this.Vr=new Pt(Bt.mr),this.gr=new Pt(Bt.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,t){const s=new Bt(e,t);this.Vr=this.Vr.add(s),this.gr=this.gr.add(s)}yr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.wr(new Bt(e,t))}Sr(e,t){e.forEach(s=>this.removeReference(s,t))}br(e){const t=new _e(new lt([])),s=new Bt(t,e),o=new Bt(t,e+1),u=[];return this.gr.forEachInRange([s,o],h=>{this.wr(h),u.push(h.key)}),u}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const t=new _e(new lt([])),s=new Bt(t,e),o=new Bt(t,e+1);let u=Ue();return this.gr.forEachInRange([s,o],h=>{u=u.add(h.key)}),u}containsKey(e){const t=new Bt(e,0),s=this.Vr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Bt{constructor(e,t){this.key=e,this.Cr=t}static mr(e,t){return _e.comparator(e.key,t.key)||Oe(e.Cr,t.Cr)}static pr(e,t){return Oe(e.Cr,t.Cr)||_e.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jk{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Fr=1,this.Mr=new Pt(Bt.mr)}checkEmpty(e){return ae.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const u=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new pk(u,t,s,o);this.mutationQueue.push(h);for(const p of o)this.Mr=this.Mr.add(new Bt(p.key,u)),this.indexManager.addToCollectionParentIndex(e,p.key.path.popLast());return ae.resolve(h)}lookupMutationBatch(e,t){return ae.resolve(this.Or(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.Nr(s),u=o<0?0:o;return ae.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return ae.resolve(this.mutationQueue.length===0?Ug:this.Fr-1)}getAllMutationBatches(e){return ae.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Bt(t,0),o=new Bt(t,Number.POSITIVE_INFINITY),u=[];return this.Mr.forEachInRange([s,o],h=>{const p=this.Or(h.Cr);u.push(p)}),ae.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Pt(Oe);return t.forEach(o=>{const u=new Bt(o,0),h=new Bt(o,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([u,h],p=>{s=s.add(p.Cr)})}),ae.resolve(this.Br(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let u=s;_e.isDocumentKey(u)||(u=u.child(""));const h=new Bt(new _e(u),0);let p=new Pt(Oe);return this.Mr.forEachWhile(m=>{const g=m.key.path;return!!s.isPrefixOf(g)&&(g.length===o&&(p=p.add(m.Cr)),!0)},h),ae.resolve(this.Br(p))}Br(e){const t=[];return e.forEach(s=>{const o=this.Or(s);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){Xe(this.Lr(t.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Mr;return ae.forEach(t.mutations,o=>{const u=new Bt(o.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.Mr=s})}qn(e){}containsKey(e,t){const s=new Bt(t,0),o=this.Mr.firstAfterOrEqual(s);return ae.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,ae.resolve()}Lr(e,t){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const t=this.Nr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zk{constructor(e){this.kr=e,this.docs=function(){return new pt(_e.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),u=o?o.size:0,h=this.kr(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return ae.resolve(s?s.document.mutableCopy():an.newInvalidDocument(t))}getEntries(e,t){let s=_i();return t.forEach(o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():an.newInvalidDocument(o))}),ae.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let u=_i();const h=t.path,p=new _e(h.child("__id-9223372036854775808__")),m=this.docs.getIteratorFrom(p);for(;m.hasNext();){const{key:g,value:{document:v}}=m.getNext();if(!h.isPrefixOf(g.path))break;g.path.length>h.length+1||CN(xN(v),s)<=0||(o.has(v.key)||Of(t,v))&&(u=u.insert(v.key,v.mutableCopy()))}return ae.resolve(u)}getAllFromCollectionGroup(e,t,s,o){Ae()}qr(e,t){return ae.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new e2(this)}getSize(e){return ae.resolve(this.size)}}class e2 extends Gk{constructor(e){super(),this.Ir=e}applyChanges(e){const t=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?t.push(this.Ir.addEntry(e,o)):this.Ir.removeEntry(s)}),ae.waitFor(t)}getFromCache(e,t){return this.Ir.getEntry(e,t)}getAllFromCache(e,t){return this.Ir.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t2{constructor(e){this.persistence=e,this.Qr=new _a(t=>qg(t),Bg),this.lastRemoteSnapshotVersion=Ie.min(),this.highestTargetId=0,this.$r=0,this.Ur=new Qg,this.targetCount=0,this.Kr=Po.Un()}forEachTarget(e,t){return this.Qr.forEach((s,o)=>t(o)),ae.resolve()}getLastRemoteSnapshotVersion(e){return ae.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ae.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Kr.next(),ae.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.$r&&(this.$r=t),ae.resolve()}zn(e){this.Qr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Kr=new Po(t),this.highestTargetId=t),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,t){return this.zn(t),this.targetCount+=1,ae.resolve()}updateTargetData(e,t){return this.zn(t),ae.resolve()}removeTargetData(e,t){return this.Qr.delete(t.target),this.Ur.br(t.targetId),this.targetCount-=1,ae.resolve()}removeTargets(e,t,s){let o=0;const u=[];return this.Qr.forEach((h,p)=>{p.sequenceNumber<=t&&s.get(p.targetId)===null&&(this.Qr.delete(h),u.push(this.removeMatchingKeysForTargetId(e,p.targetId)),o++)}),ae.waitFor(u).next(()=>o)}getTargetCount(e){return ae.resolve(this.targetCount)}getTargetData(e,t){const s=this.Qr.get(t)||null;return ae.resolve(s)}addMatchingKeys(e,t,s){return this.Ur.yr(t,s),ae.resolve()}removeMatchingKeys(e,t,s){this.Ur.Sr(t,s);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach(h=>{u.push(o.markPotentiallyOrphaned(e,h))}),ae.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this.Ur.br(t),ae.resolve()}getMatchingKeysForTargetId(e,t){const s=this.Ur.vr(t);return ae.resolve(s)}containsKey(e,t){return ae.resolve(this.Ur.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{constructor(e,t){this.Wr={},this.overlays={},this.Gr=new xf(0),this.zr=!1,this.zr=!0,this.jr=new Wk,this.referenceDelegate=e(this),this.Hr=new t2(this),this.indexManager=new jk,this.remoteDocumentCache=function(o){return new Zk(o)}(s=>this.referenceDelegate.Jr(s)),this.serializer=new Lk(t),this.Yr=new Yk(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Xk,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.Wr[e.toKey()];return s||(s=new Jk(t,this.referenceDelegate),this.Wr[e.toKey()]=s),s}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,t,s){de("MemoryPersistence","Starting transaction:",e);const o=new n2(this.Gr.next());return this.referenceDelegate.Zr(),s(o).next(u=>this.referenceDelegate.Xr(o).next(()=>u)).toPromise().then(u=>(o.raiseOnCommittedEvent(),u))}ei(e,t){return ae.or(Object.values(this.Wr).map(s=>()=>s.containsKey(e,t)))}}class n2 extends NN{constructor(e){super(),this.currentSequenceNumber=e}}class Yg{constructor(e){this.persistence=e,this.ti=new Qg,this.ni=null}static ri(e){return new Yg(e)}get ii(){if(this.ni)return this.ni;throw Ae()}addReference(e,t,s){return this.ti.addReference(s,t),this.ii.delete(s.toString()),ae.resolve()}removeReference(e,t,s){return this.ti.removeReference(s,t),this.ii.add(s.toString()),ae.resolve()}markPotentiallyOrphaned(e,t){return this.ii.add(t.toString()),ae.resolve()}removeTarget(e,t){this.ti.br(t.targetId).forEach(o=>this.ii.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(u=>this.ii.add(u.toString()))}).next(()=>s.removeTargetData(e,t))}Zr(){this.ni=new Set}Xr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ae.forEach(this.ii,s=>{const o=_e.fromPath(s);return this.si(e,o).next(u=>{u||t.removeEntry(o,Ie.min())})}).next(()=>(this.ni=null,t.apply(e)))}updateLimboDocument(e,t){return this.si(e,t).next(s=>{s?this.ii.delete(t.toString()):this.ii.add(t.toString())})}Jr(e){return 0}si(e,t){return ae.or([()=>ae.resolve(this.ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.ei(e,t)])}}class pf{constructor(e,t){this.persistence=e,this.oi=new _a(s=>MN(s.path),(s,o)=>s.isEqual(o)),this.garbageCollector=$k(this,t)}static ri(e,t){return new pf(e,t)}Zr(){}Xr(e){return ae.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}nr(e){const t=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(o=>s+o))}sr(e){let t=0;return this.rr(e,s=>{t++}).next(()=>t)}rr(e,t){return ae.forEach(this.oi,(s,o)=>this.ar(e,s,o).next(u=>u?ae.resolve():t(o)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.qr(e,h=>this.ar(e,h,t).next(p=>{p||(s++,u.removeEntry(h,Ie.min()))})).next(()=>u.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.oi.set(t,e.currentSequenceNumber),ae.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.oi.set(s,e.currentSequenceNumber),ae.resolve()}removeReference(e,t,s){return this.oi.set(s,e.currentSequenceNumber),ae.resolve()}updateLimboDocument(e,t){return this.oi.set(t,e.currentSequenceNumber),ae.resolve()}Jr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=jh(e.data.value)),t}ar(e,t,s){return ae.or([()=>this.persistence.ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.oi.get(t);return ae.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Hi=s,this.Ji=o}static Yi(e,t){let s=Ue(),o=Ue();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new Xg(e,t.fromCache,s,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i2{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return LI()?8:kN(ln())>0?6:4}()}initialize(e,t){this.ns=e,this.indexManager=t,this.Zi=!0}getDocumentsMatchingQuery(e,t,s,o){const u={result:null};return this.rs(e,t).next(h=>{u.result=h}).next(()=>{if(!u.result)return this.ss(e,t,o,s).next(h=>{u.result=h})}).next(()=>{if(u.result)return;const h=new r2;return this._s(e,t,h).next(p=>{if(u.result=p,this.Xi)return this.us(e,t,h,p.size)})}).next(()=>u.result)}us(e,t,s,o){return s.documentReadCount<this.es?(go()<=Le.DEBUG&&de("QueryEngine","SDK will not create cache indexes for query:",yo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),ae.resolve()):(go()<=Le.DEBUG&&de("QueryEngine","Query:",yo(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.ts*o?(go()<=Le.DEBUG&&de("QueryEngine","The SDK decides to create cache indexes for query:",yo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,kr(t))):ae.resolve())}rs(e,t){if(GE(t))return ae.resolve(null);let s=kr(t);return this.indexManager.getIndexType(e,s).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=Jm(t,null,"F"),s=kr(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(u=>{const h=Ue(...u);return this.ns.getDocuments(e,h).next(p=>this.indexManager.getMinOffset(e,s).next(m=>{const g=this.cs(t,p);return this.ls(t,g,h,m.readTime)?this.rs(e,Jm(t,null,"F")):this.hs(e,g,t,m)}))})))}ss(e,t,s,o){return GE(t)||o.isEqual(Ie.min())?ae.resolve(null):this.ns.getDocuments(e,s).next(u=>{const h=this.cs(t,u);return this.ls(t,h,s,o)?ae.resolve(null):(go()<=Le.DEBUG&&de("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),yo(t)),this.hs(e,h,t,IN(o,xu)).next(p=>p))})}cs(e,t){let s=new Pt(Nw(e));return t.forEach((o,u)=>{Of(e,u)&&(s=s.add(u))}),s}ls(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}_s(e,t,s){return go()<=Le.DEBUG&&de("QueryEngine","Using full collection scan to execute query:",yo(t)),this.ns.getDocumentsMatchingQuery(e,t,fs.min(),s)}hs(e,t,s,o){return this.ns.getDocumentsMatchingQuery(e,s,o).next(u=>(t.forEach(h=>{u=u.insert(h.key,h)}),u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wg="LocalStore",s2=3e8;class a2{constructor(e,t,s,o){this.persistence=e,this.Ps=t,this.serializer=o,this.Ts=new pt(Oe),this.Is=new _a(u=>qg(u),Bg),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(s)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Qk(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ts))}}function o2(r,e,t,s){return new a2(r,e,t,s)}async function tS(r,e){const t=xe(r);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next(u=>(o=u,t.As(e),t.mutationQueue.getAllMutationBatches(s))).next(u=>{const h=[],p=[];let m=Ue();for(const g of o){h.push(g.batchId);for(const v of g.mutations)m=m.add(v.key)}for(const g of u){p.push(g.batchId);for(const v of g.mutations)m=m.add(v.key)}return t.localDocuments.getDocuments(s,m).next(g=>({Rs:g,removedBatchIds:h,addedBatchIds:p}))})})}function l2(r,e){const t=xe(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const o=e.batch.keys(),u=t.ds.newChangeBuffer({trackRemovals:!0});return function(p,m,g,v){const b=g.batch,w=b.keys();let I=ae.resolve();return w.forEach(C=>{I=I.next(()=>v.getEntry(m,C)).next(z=>{const U=g.docVersions.get(C);Xe(U!==null),z.version.compareTo(U)<0&&(b.applyToRemoteDocument(z,g),z.isValidDocument()&&(z.setReadTime(g.commitVersion),v.addEntry(z)))})}),I.next(()=>p.mutationQueue.removeMutationBatch(m,b))}(t,s,e,u).next(()=>u.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(p){let m=Ue();for(let g=0;g<p.mutationResults.length;++g)p.mutationResults[g].transformResults.length>0&&(m=m.add(p.batch.mutations[g].key));return m}(e))).next(()=>t.localDocuments.getDocuments(s,o))})}function nS(r){const e=xe(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Hr.getLastRemoteSnapshotVersion(t))}function u2(r,e){const t=xe(r),s=e.snapshotVersion;let o=t.Ts;return t.persistence.runTransaction("Apply remote event","readwrite-primary",u=>{const h=t.ds.newChangeBuffer({trackRemovals:!0});o=t.Ts;const p=[];e.targetChanges.forEach((v,b)=>{const w=o.get(b);if(!w)return;p.push(t.Hr.removeMatchingKeys(u,v.removedDocuments,b).next(()=>t.Hr.addMatchingKeys(u,v.addedDocuments,b)));let I=w.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(b)!==null?I=I.withResumeToken(Jt.EMPTY_BYTE_STRING,Ie.min()).withLastLimboFreeSnapshotVersion(Ie.min()):v.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(v.resumeToken,s)),o=o.insert(b,I),function(z,U,$){return z.resumeToken.approximateByteSize()===0||U.snapshotVersion.toMicroseconds()-z.snapshotVersion.toMicroseconds()>=s2?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0}(w,I,v)&&p.push(t.Hr.updateTargetData(u,I))});let m=_i(),g=Ue();if(e.documentUpdates.forEach(v=>{e.resolvedLimboDocuments.has(v)&&p.push(t.persistence.referenceDelegate.updateLimboDocument(u,v))}),p.push(c2(u,h,e.documentUpdates).next(v=>{m=v.Vs,g=v.fs})),!s.isEqual(Ie.min())){const v=t.Hr.getLastRemoteSnapshotVersion(u).next(b=>t.Hr.setTargetsMetadata(u,u.currentSequenceNumber,s));p.push(v)}return ae.waitFor(p).next(()=>h.apply(u)).next(()=>t.localDocuments.getLocalViewOfDocuments(u,m,g)).next(()=>m)}).then(u=>(t.Ts=o,u))}function c2(r,e,t){let s=Ue(),o=Ue();return t.forEach(u=>s=s.add(u)),e.getEntries(r,s).next(u=>{let h=_i();return t.forEach((p,m)=>{const g=u.get(p);m.isFoundDocument()!==g.isFoundDocument()&&(o=o.add(p)),m.isNoDocument()&&m.version.isEqual(Ie.min())?(e.removeEntry(p,m.readTime),h=h.insert(p,m)):!g.isValidDocument()||m.version.compareTo(g.version)>0||m.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(m),h=h.insert(p,m)):de(Wg,"Ignoring outdated watch update for ",p,". Current version:",g.version," Watch version:",m.version)}),{Vs:h,fs:o}})}function h2(r,e){const t=xe(r);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=Ug),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function f2(r,e){const t=xe(r);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let o;return t.Hr.getTargetData(s,e).next(u=>u?(o=u,ae.resolve(o)):t.Hr.allocateTargetId(s).next(h=>(o=new as(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.Hr.addTargetData(s,o).next(()=>o))))}).then(s=>{const o=t.Ts.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Ts=t.Ts.insert(s.targetId,s),t.Is.set(e,s.targetId)),s})}async function rg(r,e,t){const s=xe(r),o=s.Ts.get(e),u=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",u,h=>s.persistence.referenceDelegate.removeTarget(h,o))}catch(h){if(!Xo(h))throw h;de(Wg,`Failed to update sequence numbers for target ${e}: ${h}`)}s.Ts=s.Ts.remove(e),s.Is.delete(o.target)}function sb(r,e,t){const s=xe(r);let o=Ie.min(),u=Ue();return s.persistence.runTransaction("Execute query","readwrite",h=>function(m,g,v){const b=xe(m),w=b.Is.get(v);return w!==void 0?ae.resolve(b.Ts.get(w)):b.Hr.getTargetData(g,v)}(s,h,kr(e)).next(p=>{if(p)return o=p.lastLimboFreeSnapshotVersion,s.Hr.getMatchingKeysForTargetId(h,p.targetId).next(m=>{u=m})}).next(()=>s.Ps.getDocumentsMatchingQuery(h,e,t?o:Ie.min(),t?u:Ue())).next(p=>(d2(s,ZN(e),p),{documents:p,gs:u})))}function d2(r,e,t){let s=r.Es.get(e)||Ie.min();t.forEach((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)}),r.Es.set(e,s)}class ab{constructor(){this.activeTargetIds=sk()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}bs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class p2{constructor(){this.ho=new ab,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,t,s){this.Po[e]=t}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new ab,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m2{To(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ob="ConnectivityMonitor";class lb{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){de(ob,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){de(ob,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rh=null;function ig(){return Rh===null?Rh=function(){return 268435456+Math.round(2147483648*Math.random())}():Rh++,"0x"+Rh.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Em="RestConnection",g2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class y2{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${s}/databases/${o}`,this.wo=this.databaseId.database===lf?`project_id=${s}`:`project_id=${s}&database_id=${o}`}So(e,t,s,o,u){const h=ig(),p=this.bo(e,t.toUriEncodedString());de(Em,`Sending RPC '${e}' ${h}:`,p,s);const m={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(m,o,u),this.vo(e,p,m,s).then(g=>(de(Em,`Received RPC '${e}' ${h}: `,g),g),g=>{throw Co(Em,`RPC '${e}' ${h} failed with error: `,g,"url: ",p,"request:",s),g})}Co(e,t,s,o,u,h){return this.So(e,t,s,o,u)}Do(e,t,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Qo}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((o,u)=>e[u]=o),s&&s.headers.forEach((o,u)=>e[u]=o)}bo(e,t){const s=g2[e];return`${this.po}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v2{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Uo(e){this.ko(e)}Ko(e){this.qo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rn="WebChannelConnection";class _2 extends y2{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,s,o){const u=ig();return new Promise((h,p)=>{const m=new sw;m.setWithCredentials(!0),m.listenOnce(aw.COMPLETE,()=>{try{switch(m.getLastErrorCode()){case Lh.NO_ERROR:const v=m.getResponseJson();de(rn,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(v)),h(v);break;case Lh.TIMEOUT:de(rn,`RPC '${e}' ${u} timed out`),p(new fe(re.DEADLINE_EXCEEDED,"Request time out"));break;case Lh.HTTP_ERROR:const b=m.getStatus();if(de(rn,`RPC '${e}' ${u} failed with status:`,b,"response text:",m.getResponseText()),b>0){let w=m.getResponseJson();Array.isArray(w)&&(w=w[0]);const I=w==null?void 0:w.error;if(I&&I.status&&I.message){const C=function(U){const $=U.toLowerCase().replace(/_/g,"-");return Object.values(re).indexOf($)>=0?$:re.UNKNOWN}(I.status);p(new fe(C,I.message))}else p(new fe(re.UNKNOWN,"Server responded with status "+m.getStatus()))}else p(new fe(re.UNAVAILABLE,"Connection failed."));break;default:Ae()}}finally{de(rn,`RPC '${e}' ${u} completed.`)}});const g=JSON.stringify(o);de(rn,`RPC '${e}' ${u} sending request:`,o),m.send(t,"POST",g,s,15)})}Wo(e,t,s){const o=ig(),u=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=uw(),p=lw(),m={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(m.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(m.useFetchStreams=!0),this.Do(m.initMessageHeaders,t,s),m.encodeInitMessageHeaders=!0;const v=u.join("");de(rn,`Creating RPC '${e}' stream ${o}: ${v}`,m);const b=h.createWebChannel(v,m);let w=!1,I=!1;const C=new v2({Fo:U=>{I?de(rn,`Not sending because RPC '${e}' stream ${o} is closed:`,U):(w||(de(rn,`Opening RPC '${e}' stream ${o} transport.`),b.open(),w=!0),de(rn,`RPC '${e}' stream ${o} sending:`,U),b.send(U))},Mo:()=>b.close()}),z=(U,$,Z)=>{U.listen($,Y=>{try{Z(Y)}catch(H){setTimeout(()=>{throw H},0)}})};return z(b,pu.EventType.OPEN,()=>{I||(de(rn,`RPC '${e}' stream ${o} transport opened.`),C.Qo())}),z(b,pu.EventType.CLOSE,()=>{I||(I=!0,de(rn,`RPC '${e}' stream ${o} transport closed`),C.Uo())}),z(b,pu.EventType.ERROR,U=>{I||(I=!0,Co(rn,`RPC '${e}' stream ${o} transport errored:`,U),C.Uo(new fe(re.UNAVAILABLE,"The operation could not be completed")))}),z(b,pu.EventType.MESSAGE,U=>{var $;if(!I){const Z=U.data[0];Xe(!!Z);const Y=Z,H=(Y==null?void 0:Y.error)||(($=Y[0])===null||$===void 0?void 0:$.error);if(H){de(rn,`RPC '${e}' stream ${o} received error:`,H);const ee=H.status;let ue=function(D){const k=Rt[D];if(k!==void 0)return Hw(k)}(ee),N=H.message;ue===void 0&&(ue=re.INTERNAL,N="Unknown error status: "+ee+" with message "+H.message),I=!0,C.Uo(new fe(ue,N)),b.close()}else de(rn,`RPC '${e}' stream ${o} received:`,Z),C.Ko(Z)}}),z(p,ow.STAT_EVENT,U=>{U.stat===$m.PROXY?de(rn,`RPC '${e}' stream ${o} detected buffering proxy`):U.stat===$m.NOPROXY&&de(rn,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{C.$o()},0),C}}function bm(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lf(r){return new wk(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{constructor(e,t,s=1e3,o=1.5,u=6e4){this.Ti=e,this.timerId=t,this.Go=s,this.zo=o,this.jo=u,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const t=Math.floor(this.Ho+this.e_()),s=Math.max(0,Date.now()-this.Yo),o=Math.max(0,t-s);o>0&&de("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Ho} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,o,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ub="PersistentStream";class iS{constructor(e,t,s,o,u,h,p,m){this.Ti=e,this.n_=s,this.r_=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=p,this.listener=m,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new rS(e,t)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,t){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():t&&t.code===re.RESOURCE_EXHAUSTED?(vi(t.toString()),vi("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):t&&t.code===re.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(t)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),t=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.i_===t&&this.V_(s,o)},s=>{e(()=>{const o=new fe(re.UNKNOWN,"Fetching auth token failed: "+s.message);return this.m_(o)})})}V_(e,t){const s=this.R_(this.i_);this.stream=this.f_(e,t),this.stream.xo(()=>{s(()=>this.listener.xo())}),this.stream.No(()=>{s(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(o=>{s(()=>this.m_(o))}),this.stream.onMessage(o=>{s(()=>++this.__==1?this.g_(o):this.onNext(o))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return de(ub,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return t=>{this.Ti.enqueueAndForget(()=>this.i_===e?t():(de(ub,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class E2 extends iS{constructor(e,t,s,o,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}f_(e,t){return this.connection.Wo("Listen",e,t)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const t=Rk(this.serializer,e),s=function(u){if(!("targetChange"in u))return Ie.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?Ie.min():h.readTime?Or(h.readTime):Ie.min()}(e);return this.listener.p_(t,s)}y_(e){const t={};t.database=ng(this.serializer),t.addTarget=function(u,h){let p;const m=h.target;if(p=Xm(m)?{documents:Ck(u,m)}:{query:Dk(u,m).ht},p.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){p.resumeToken=Gw(u,h.resumeToken);const g=Zm(u,h.expectedCount);g!==null&&(p.expectedCount=g)}else if(h.snapshotVersion.compareTo(Ie.min())>0){p.readTime=df(u,h.snapshotVersion.toTimestamp());const g=Zm(u,h.expectedCount);g!==null&&(p.expectedCount=g)}return p}(this.serializer,e);const s=kk(this.serializer,e);s&&(t.labels=s),this.I_(t)}w_(e){const t={};t.database=ng(this.serializer),t.removeTarget=e,this.I_(t)}}class b2 extends iS{constructor(e,t,s,o,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(e,t){return this.connection.Wo("Write",e,t)}g_(e){return Xe(!!e.streamToken),this.lastStreamToken=e.streamToken,Xe(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){Xe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const t=xk(e.writeResults,e.commitTime),s=Or(e.commitTime);return this.listener.v_(s,t)}C_(){const e={};e.database=ng(this.serializer),this.I_(e)}b_(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>Ik(this.serializer,s))};this.I_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T2{}class w2 extends T2{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.F_=!1}M_(){if(this.F_)throw new fe(re.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,t,s,o){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,h])=>this.connection.So(e,eg(t,s),o,u,h)).catch(u=>{throw u.name==="FirebaseError"?(u.code===re.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new fe(re.UNKNOWN,u.toString())})}Co(e,t,s,o,u){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,p])=>this.connection.Co(e,eg(t,s),o,h,p,u)).catch(h=>{throw h.name==="FirebaseError"?(h.code===re.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new fe(re.UNKNOWN,h.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class S2{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(vi(t),this.N_=!1):de("OnlineStateTracker",t)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ga="RemoteStore";class A2{constructor(e,t,s,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=u,this.z_.To(h=>{s.enqueueAndForget(async()=>{Ea(this)&&(de(ga,"Restarting streams for network reachability change."),await async function(m){const g=xe(m);g.W_.add(4),await Fu(g),g.j_.set("Unknown"),g.W_.delete(4),await Uf(g)}(this))})}),this.j_=new S2(s,o)}}async function Uf(r){if(Ea(r))for(const e of r.G_)await e(!0)}async function Fu(r){for(const e of r.G_)await e(!1)}function sS(r,e){const t=xe(r);t.K_.has(e.targetId)||(t.K_.set(e.targetId,e),ty(t)?ey(t):Jo(t).c_()&&Zg(t,e))}function Jg(r,e){const t=xe(r),s=Jo(t);t.K_.delete(e),s.c_()&&aS(t,e),t.K_.size===0&&(s.c_()?s.P_():Ea(t)&&t.j_.set("Unknown"))}function Zg(r,e){if(r.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ie.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Jo(r).y_(e)}function aS(r,e){r.H_.Ne(e),Jo(r).w_(e)}function ey(r){r.H_=new _k({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>r.K_.get(e)||null,it:()=>r.datastore.serializer.databaseId}),Jo(r).start(),r.j_.B_()}function ty(r){return Ea(r)&&!Jo(r).u_()&&r.K_.size>0}function Ea(r){return xe(r).W_.size===0}function oS(r){r.H_=void 0}async function R2(r){r.j_.set("Online")}async function I2(r){r.K_.forEach((e,t)=>{Zg(r,e)})}async function x2(r,e){oS(r),ty(r)?(r.j_.q_(e),ey(r)):r.j_.set("Unknown")}async function C2(r,e,t){if(r.j_.set("Online"),e instanceof $w&&e.state===2&&e.cause)try{await async function(o,u){const h=u.cause;for(const p of u.targetIds)o.K_.has(p)&&(await o.remoteSyncer.rejectListen(p,h),o.K_.delete(p),o.H_.removeTarget(p))}(r,e)}catch(s){de(ga,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await mf(r,s)}else if(e instanceof Bh?r.H_.We(e):e instanceof Fw?r.H_.Ze(e):r.H_.je(e),!t.isEqual(Ie.min()))try{const s=await nS(r.localStore);t.compareTo(s)>=0&&await function(u,h){const p=u.H_.ot(h);return p.targetChanges.forEach((m,g)=>{if(m.resumeToken.approximateByteSize()>0){const v=u.K_.get(g);v&&u.K_.set(g,v.withResumeToken(m.resumeToken,h))}}),p.targetMismatches.forEach((m,g)=>{const v=u.K_.get(m);if(!v)return;u.K_.set(m,v.withResumeToken(Jt.EMPTY_BYTE_STRING,v.snapshotVersion)),aS(u,m);const b=new as(v.target,m,g,v.sequenceNumber);Zg(u,b)}),u.remoteSyncer.applyRemoteEvent(p)}(r,t)}catch(s){de(ga,"Failed to raise snapshot:",s),await mf(r,s)}}async function mf(r,e,t){if(!Xo(e))throw e;r.W_.add(1),await Fu(r),r.j_.set("Offline"),t||(t=()=>nS(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{de(ga,"Retrying IndexedDB access"),await t(),r.W_.delete(1),await Uf(r)})}function lS(r,e){return e().catch(t=>mf(r,t,e))}async function jf(r){const e=xe(r),t=gs(e);let s=e.U_.length>0?e.U_[e.U_.length-1].batchId:Ug;for(;D2(e);)try{const o=await h2(e.localStore,s);if(o===null){e.U_.length===0&&t.P_();break}s=o.batchId,N2(e,o)}catch(o){await mf(e,o)}uS(e)&&cS(e)}function D2(r){return Ea(r)&&r.U_.length<10}function N2(r,e){r.U_.push(e);const t=gs(r);t.c_()&&t.S_&&t.b_(e.mutations)}function uS(r){return Ea(r)&&!gs(r).u_()&&r.U_.length>0}function cS(r){gs(r).start()}async function k2(r){gs(r).C_()}async function O2(r){const e=gs(r);for(const t of r.U_)e.b_(t.mutations)}async function M2(r,e,t){const s=r.U_.shift(),o=$g.from(s,e,t);await lS(r,()=>r.remoteSyncer.applySuccessfulWrite(o)),await jf(r)}async function P2(r,e){e&&gs(r).S_&&await async function(s,o){if(function(h){return yk(h)&&h!==re.ABORTED}(o.code)){const u=s.U_.shift();gs(s).h_(),await lS(s,()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o)),await jf(s)}}(r,e),uS(r)&&cS(r)}async function cb(r,e){const t=xe(r);t.asyncQueue.verifyOperationInProgress(),de(ga,"RemoteStore received new credentials");const s=Ea(t);t.W_.add(3),await Fu(t),s&&t.j_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.W_.delete(3),await Uf(t)}async function V2(r,e){const t=xe(r);e?(t.W_.delete(2),await Uf(t)):e||(t.W_.add(2),await Fu(t),t.j_.set("Unknown"))}function Jo(r){return r.J_||(r.J_=function(t,s,o){const u=xe(t);return u.M_(),new E2(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(r.datastore,r.asyncQueue,{xo:R2.bind(null,r),No:I2.bind(null,r),Lo:x2.bind(null,r),p_:C2.bind(null,r)}),r.G_.push(async e=>{e?(r.J_.h_(),ty(r)?ey(r):r.j_.set("Unknown")):(await r.J_.stop(),oS(r))})),r.J_}function gs(r){return r.Y_||(r.Y_=function(t,s,o){const u=xe(t);return u.M_(),new b2(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(r.datastore,r.asyncQueue,{xo:()=>Promise.resolve(),No:k2.bind(null,r),Lo:P2.bind(null,r),D_:O2.bind(null,r),v_:M2.bind(null,r)}),r.G_.push(async e=>{e?(r.Y_.h_(),await jf(r)):(await r.Y_.stop(),r.U_.length>0&&(de(ga,`Stopping write stream with ${r.U_.length} pending writes`),r.U_=[]))})),r.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(e,t,s,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new di,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,u){const h=Date.now()+s,p=new ny(e,t,h,o,u);return p.start(s),p}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new fe(re.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ry(r,e){if(vi("AsyncQueue",`${e}: ${r}`),Xo(r))return new fe(re.UNAVAILABLE,`${e}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{static emptySet(e){return new Ao(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||_e.comparator(t.key,s.key):(t,s)=>_e.comparator(t.key,s.key),this.keyedMap=mu(),this.sortedSet=new pt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ao)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Ao;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hb{constructor(){this.Z_=new pt(_e.comparator)}track(e){const t=e.doc.key,s=this.Z_.get(t);s?e.type!==0&&s.type===3?this.Z_=this.Z_.insert(t,e):e.type===3&&s.type!==1?this.Z_=this.Z_.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Z_=this.Z_.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Z_=this.Z_.remove(t):e.type===1&&s.type===2?this.Z_=this.Z_.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):Ae():this.Z_=this.Z_.insert(t,e)}X_(){const e=[];return this.Z_.inorderTraversal((t,s)=>{e.push(s)}),e}}class Vo{constructor(e,t,s,o,u,h,p,m,g){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=p,this.excludesMetadataChanges=m,this.hasCachedResults=g}static fromInitialDocuments(e,t,s,o,u){const h=[];return t.forEach(p=>{h.push({type:0,doc:p})}),new Vo(e,t,Ao.emptySet(t),h,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&kf(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L2{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class U2{constructor(){this.queries=fb(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(t,s){const o=xe(t),u=o.queries;o.queries=fb(),u.forEach((h,p)=>{for(const m of p.ta)m.onError(s)})})(this,new fe(re.ABORTED,"Firestore shutting down"))}}function fb(){return new _a(r=>Dw(r),kf)}async function iy(r,e){const t=xe(r);let s=3;const o=e.query;let u=t.queries.get(o);u?!u.na()&&e.ra()&&(s=2):(u=new L2,s=e.ra()?0:1);try{switch(s){case 0:u.ea=await t.onListen(o,!0);break;case 1:u.ea=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const p=ry(h,`Initialization of query '${yo(e.query)}' failed`);return void e.onError(p)}t.queries.set(o,u),u.ta.push(e),e.sa(t.onlineState),u.ea&&e.oa(u.ea)&&ay(t)}async function sy(r,e){const t=xe(r),s=e.query;let o=3;const u=t.queries.get(s);if(u){const h=u.ta.indexOf(e);h>=0&&(u.ta.splice(h,1),u.ta.length===0?o=e.ra()?0:1:!u.na()&&e.ra()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function j2(r,e){const t=xe(r);let s=!1;for(const o of e){const u=o.query,h=t.queries.get(u);if(h){for(const p of h.ta)p.oa(o)&&(s=!0);h.ea=o}}s&&ay(t)}function z2(r,e,t){const s=xe(r),o=s.queries.get(e);if(o)for(const u of o.ta)u.onError(t);s.queries.delete(e)}function ay(r){r.ia.forEach(e=>{e.next()})}var sg,db;(db=sg||(sg={}))._a="default",db.Cache="cache";class oy{constructor(e,t,s){this.query=e,this.aa=t,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=s||{}}oa(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new Vo(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ua?this.la(e)&&(this.aa.next(e),t=!0):this.ha(e,this.onlineState)&&(this.Pa(e),t=!0),this.ca=e,t}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let t=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),t=!0),t}ha(e,t){if(!e.fromCache||!this.ra())return!0;const s=t!=="Offline";return(!this.options.Ta||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}la(e){if(e.docChanges.length>0)return!0;const t=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Pa(e){e=Vo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==sg.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hS{constructor(e){this.key=e}}class fS{constructor(e){this.key=e}}class q2{constructor(e,t){this.query=e,this.fa=t,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=Ue(),this.mutatedKeys=Ue(),this.ya=Nw(e),this.wa=new Ao(this.ya)}get Sa(){return this.fa}ba(e,t){const s=t?t.Da:new hb,o=t?t.wa:this.wa;let u=t?t.mutatedKeys:this.mutatedKeys,h=o,p=!1;const m=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,g=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((v,b)=>{const w=o.get(v),I=Of(this.query,b)?b:null,C=!!w&&this.mutatedKeys.has(w.key),z=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let U=!1;w&&I?w.data.isEqual(I.data)?C!==z&&(s.track({type:3,doc:I}),U=!0):this.va(w,I)||(s.track({type:2,doc:I}),U=!0,(m&&this.ya(I,m)>0||g&&this.ya(I,g)<0)&&(p=!0)):!w&&I?(s.track({type:0,doc:I}),U=!0):w&&!I&&(s.track({type:1,doc:w}),U=!0,(m||g)&&(p=!0)),U&&(I?(h=h.add(I),u=z?u.add(v):u.delete(v)):(h=h.delete(v),u=u.delete(v)))}),this.query.limit!==null)for(;h.size>this.query.limit;){const v=this.query.limitType==="F"?h.last():h.first();h=h.delete(v.key),u=u.delete(v.key),s.track({type:1,doc:v})}return{wa:h,Da:s,ls:p,mutatedKeys:u}}va(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const u=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const h=e.Da.X_();h.sort((v,b)=>function(I,C){const z=U=>{switch(U){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ae()}};return z(I)-z(C)}(v.type,b.type)||this.ya(v.doc,b.doc)),this.Ca(s),o=o!=null&&o;const p=t&&!o?this.Fa():[],m=this.pa.size===0&&this.current&&!o?1:0,g=m!==this.ga;return this.ga=m,h.length!==0||g?{snapshot:new Vo(this.query,e.wa,u,h,e.mutatedKeys,m===0,g,!1,!!s&&s.resumeToken.approximateByteSize()>0),Ma:p}:{Ma:p}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new hb,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(t=>this.fa=this.fa.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.fa=this.fa.delete(t)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=Ue(),this.wa.forEach(s=>{this.xa(s.key)&&(this.pa=this.pa.add(s.key))});const t=[];return e.forEach(s=>{this.pa.has(s)||t.push(new fS(s))}),this.pa.forEach(s=>{e.has(s)||t.push(new hS(s))}),t}Oa(e){this.fa=e.gs,this.pa=Ue();const t=this.ba(e.documents);return this.applyChanges(t,!0)}Na(){return Vo.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const ly="SyncEngine";class B2{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class H2{constructor(e){this.key=e,this.Ba=!1}}class F2{constructor(e,t,s,o,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.La={},this.ka=new _a(p=>Dw(p),kf),this.qa=new Map,this.Qa=new Set,this.$a=new pt(_e.comparator),this.Ua=new Map,this.Ka=new Qg,this.Wa={},this.Ga=new Map,this.za=Po.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function $2(r,e,t=!0){const s=vS(r);let o;const u=s.ka.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.Na()):o=await dS(s,e,t,!0),o}async function G2(r,e){const t=vS(r);await dS(t,e,!0,!1)}async function dS(r,e,t,s){const o=await f2(r.localStore,kr(e)),u=o.targetId,h=r.sharedClientState.addLocalQueryTarget(u,t);let p;return s&&(p=await K2(r,e,u,h==="current",o.resumeToken)),r.isPrimaryClient&&t&&sS(r.remoteStore,o),p}async function K2(r,e,t,s,o){r.Ha=(b,w,I)=>async function(z,U,$,Z){let Y=U.view.ba($);Y.ls&&(Y=await sb(z.localStore,U.query,!1).then(({documents:N})=>U.view.ba(N,Y)));const H=Z&&Z.targetChanges.get(U.targetId),ee=Z&&Z.targetMismatches.get(U.targetId)!=null,ue=U.view.applyChanges(Y,z.isPrimaryClient,H,ee);return mb(z,U.targetId,ue.Ma),ue.snapshot}(r,b,w,I);const u=await sb(r.localStore,e,!0),h=new q2(e,u.gs),p=h.ba(u.documents),m=Hu.createSynthesizedTargetChangeForCurrentChange(t,s&&r.onlineState!=="Offline",o),g=h.applyChanges(p,r.isPrimaryClient,m);mb(r,t,g.Ma);const v=new B2(e,t,h);return r.ka.set(e,v),r.qa.has(t)?r.qa.get(t).push(e):r.qa.set(t,[e]),g.snapshot}async function Q2(r,e,t){const s=xe(r),o=s.ka.get(e),u=s.qa.get(o.targetId);if(u.length>1)return s.qa.set(o.targetId,u.filter(h=>!kf(h,e))),void s.ka.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await rg(s.localStore,o.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(o.targetId),t&&Jg(s.remoteStore,o.targetId),ag(s,o.targetId)}).catch(Yo)):(ag(s,o.targetId),await rg(s.localStore,o.targetId,!0))}async function Y2(r,e){const t=xe(r),s=t.ka.get(e),o=t.qa.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Jg(t.remoteStore,s.targetId))}async function X2(r,e,t){const s=rO(r);try{const o=await function(h,p){const m=xe(h),g=dt.now(),v=p.reduce((I,C)=>I.add(C.key),Ue());let b,w;return m.persistence.runTransaction("Locally write mutations","readwrite",I=>{let C=_i(),z=Ue();return m.ds.getEntries(I,v).next(U=>{C=U,C.forEach(($,Z)=>{Z.isValidDocument()||(z=z.add($))})}).next(()=>m.localDocuments.getOverlayedDocuments(I,C)).next(U=>{b=U;const $=[];for(const Z of p){const Y=fk(Z,b.get(Z.key).overlayedDocument);Y!=null&&$.push(new ws(Z.key,Y,Tw(Y.value.mapValue),Yn.exists(!0)))}return m.mutationQueue.addMutationBatch(I,g,$,p)}).next(U=>{w=U;const $=U.applyToLocalDocumentSet(b,z);return m.documentOverlayCache.saveOverlays(I,U.batchId,$)})}).then(()=>({batchId:w.batchId,changes:Ow(b)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),function(h,p,m){let g=h.Wa[h.currentUser.toKey()];g||(g=new pt(Oe)),g=g.insert(p,m),h.Wa[h.currentUser.toKey()]=g}(s,o.batchId,t),await $u(s,o.changes),await jf(s.remoteStore)}catch(o){const u=ry(o,"Failed to persist write");t.reject(u)}}async function pS(r,e){const t=xe(r);try{const s=await u2(t.localStore,e);e.targetChanges.forEach((o,u)=>{const h=t.Ua.get(u);h&&(Xe(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?h.Ba=!0:o.modifiedDocuments.size>0?Xe(h.Ba):o.removedDocuments.size>0&&(Xe(h.Ba),h.Ba=!1))}),await $u(t,s,e)}catch(s){await Yo(s)}}function pb(r,e,t){const s=xe(r);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.ka.forEach((u,h)=>{const p=h.view.sa(e);p.snapshot&&o.push(p.snapshot)}),function(h,p){const m=xe(h);m.onlineState=p;let g=!1;m.queries.forEach((v,b)=>{for(const w of b.ta)w.sa(p)&&(g=!0)}),g&&ay(m)}(s.eventManager,e),o.length&&s.La.p_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function W2(r,e,t){const s=xe(r);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Ua.get(e),u=o&&o.key;if(u){let h=new pt(_e.comparator);h=h.insert(u,an.newNoDocument(u,Ie.min()));const p=Ue().add(u),m=new Vf(Ie.min(),new Map,new pt(Oe),h,p);await pS(s,m),s.$a=s.$a.remove(u),s.Ua.delete(e),uy(s)}else await rg(s.localStore,e,!1).then(()=>ag(s,e,t)).catch(Yo)}async function J2(r,e){const t=xe(r),s=e.batch.batchId;try{const o=await l2(t.localStore,e);gS(t,s,null),mS(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await $u(t,o)}catch(o){await Yo(o)}}async function Z2(r,e,t){const s=xe(r);try{const o=await function(h,p){const m=xe(h);return m.persistence.runTransaction("Reject batch","readwrite-primary",g=>{let v;return m.mutationQueue.lookupMutationBatch(g,p).next(b=>(Xe(b!==null),v=b.keys(),m.mutationQueue.removeMutationBatch(g,b))).next(()=>m.mutationQueue.performConsistencyCheck(g)).next(()=>m.documentOverlayCache.removeOverlaysForBatchId(g,v,p)).next(()=>m.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,v)).next(()=>m.localDocuments.getDocuments(g,v))})}(s.localStore,e);gS(s,e,t),mS(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await $u(s,o)}catch(o){await Yo(o)}}function mS(r,e){(r.Ga.get(e)||[]).forEach(t=>{t.resolve()}),r.Ga.delete(e)}function gS(r,e,t){const s=xe(r);let o=s.Wa[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),s.Wa[s.currentUser.toKey()]=o}}function ag(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const s of r.qa.get(e))r.ka.delete(s),t&&r.La.Ja(s,t);r.qa.delete(e),r.isPrimaryClient&&r.Ka.br(e).forEach(s=>{r.Ka.containsKey(s)||yS(r,s)})}function yS(r,e){r.Qa.delete(e.path.canonicalString());const t=r.$a.get(e);t!==null&&(Jg(r.remoteStore,t),r.$a=r.$a.remove(e),r.Ua.delete(t),uy(r))}function mb(r,e,t){for(const s of t)s instanceof hS?(r.Ka.addReference(s.key,e),eO(r,s)):s instanceof fS?(de(ly,"Document no longer in limbo: "+s.key),r.Ka.removeReference(s.key,e),r.Ka.containsKey(s.key)||yS(r,s.key)):Ae()}function eO(r,e){const t=e.key,s=t.path.canonicalString();r.$a.get(t)||r.Qa.has(s)||(de(ly,"New document in limbo: "+t),r.Qa.add(s),uy(r))}function uy(r){for(;r.Qa.size>0&&r.$a.size<r.maxConcurrentLimboResolutions;){const e=r.Qa.values().next().value;r.Qa.delete(e);const t=new _e(lt.fromString(e)),s=r.za.next();r.Ua.set(s,new H2(t)),r.$a=r.$a.insert(t,s),sS(r.remoteStore,new as(kr(Nf(t.path)),s,"TargetPurposeLimboResolution",xf.ae))}}async function $u(r,e,t){const s=xe(r),o=[],u=[],h=[];s.ka.isEmpty()||(s.ka.forEach((p,m)=>{h.push(s.Ha(m,e,t).then(g=>{var v;if((g||t)&&s.isPrimaryClient){const b=g?!g.fromCache:(v=t==null?void 0:t.targetChanges.get(m.targetId))===null||v===void 0?void 0:v.current;s.sharedClientState.updateQueryState(m.targetId,b?"current":"not-current")}if(g){o.push(g);const b=Xg.Yi(m.targetId,g);u.push(b)}}))}),await Promise.all(h),s.La.p_(o),await async function(m,g){const v=xe(m);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",b=>ae.forEach(g,w=>ae.forEach(w.Hi,I=>v.persistence.referenceDelegate.addReference(b,w.targetId,I)).next(()=>ae.forEach(w.Ji,I=>v.persistence.referenceDelegate.removeReference(b,w.targetId,I)))))}catch(b){if(!Xo(b))throw b;de(Wg,"Failed to update sequence numbers: "+b)}for(const b of g){const w=b.targetId;if(!b.fromCache){const I=v.Ts.get(w),C=I.snapshotVersion,z=I.withLastLimboFreeSnapshotVersion(C);v.Ts=v.Ts.insert(w,z)}}}(s.localStore,u))}async function tO(r,e){const t=xe(r);if(!t.currentUser.isEqual(e)){de(ly,"User change. New user:",e.toKey());const s=await tS(t.localStore,e);t.currentUser=e,function(u,h){u.Ga.forEach(p=>{p.forEach(m=>{m.reject(new fe(re.CANCELLED,h))})}),u.Ga.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await $u(t,s.Rs)}}function nO(r,e){const t=xe(r),s=t.Ua.get(e);if(s&&s.Ba)return Ue().add(s.key);{let o=Ue();const u=t.qa.get(e);if(!u)return o;for(const h of u){const p=t.ka.get(h);o=o.unionWith(p.view.Sa)}return o}}function vS(r){const e=xe(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=pS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=nO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=W2.bind(null,e),e.La.p_=j2.bind(null,e.eventManager),e.La.Ja=z2.bind(null,e.eventManager),e}function rO(r){const e=xe(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=J2.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Z2.bind(null,e),e}class gf{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Lf(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,t){return null}nu(e,t){return null}eu(e){return o2(this.persistence,new i2,e.initialUser,this.serializer)}Xa(e){return new eS(Yg.ri,this.serializer)}Za(e){return new p2}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}gf.provider={build:()=>new gf};class iO extends gf{constructor(e){super(),this.cacheSizeBytes=e}tu(e,t){Xe(this.persistence.referenceDelegate instanceof pf);const s=this.persistence.referenceDelegate.garbageCollector;return new Hk(s,e.asyncQueue,t)}Xa(e){const t=this.cacheSizeBytes!==void 0?_n.withCacheSize(this.cacheSizeBytes):_n.DEFAULT;return new eS(s=>pf.ri(s,t),this.serializer)}}class og{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>pb(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=tO.bind(null,this.syncEngine),await V2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new U2}()}createDatastore(e){const t=Lf(e.databaseInfo.databaseId),s=function(u){return new _2(u)}(e.databaseInfo);return function(u,h,p,m){return new w2(u,h,p,m)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,o,u,h,p){return new A2(s,o,u,h,p)}(this.localStore,this.datastore,e.asyncQueue,t=>pb(this.syncEngine,t,0),function(){return lb.D()?new lb:new m2}())}createSyncEngine(e,t){return function(o,u,h,p,m,g,v){const b=new F2(o,u,h,p,m,g);return v&&(b.ja=!0),b}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const u=xe(o);de(ga,"RemoteStore shutting down."),u.W_.add(5),await Fu(u),u.z_.shutdown(),u.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}og.provider={build:()=>new og};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cy{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):vi("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ys="FirestoreClient";class sO{constructor(e,t,s,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=sn.UNAUTHENTICATED,this.clientId=fw.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,async h=>{de(ys,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(s,h=>(de(ys,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new di;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=ry(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Tm(r,e){r.asyncQueue.verifyOperationInProgress(),de(ys,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let s=t.initialUser;r.setCredentialChangeListener(async o=>{s.isEqual(o)||(await tS(e.localStore,o),s=o)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function gb(r,e){r.asyncQueue.verifyOperationInProgress();const t=await aO(r);de(ys,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener(s=>cb(e.remoteStore,s)),r.setAppCheckTokenChangeListener((s,o)=>cb(e.remoteStore,o)),r._onlineComponents=e}async function aO(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){de(ys,"Using user provided OfflineComponentProvider");try{await Tm(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===re.FAILED_PRECONDITION||o.code===re.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;Co("Error using user provided cache. Falling back to memory cache: "+t),await Tm(r,new gf)}}else de(ys,"Using default OfflineComponentProvider"),await Tm(r,new iO(void 0));return r._offlineComponents}async function _S(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(de(ys,"Using user provided OnlineComponentProvider"),await gb(r,r._uninitializedComponentsProvider._online)):(de(ys,"Using default OnlineComponentProvider"),await gb(r,new og))),r._onlineComponents}function oO(r){return _S(r).then(e=>e.syncEngine)}async function yf(r){const e=await _S(r),t=e.eventManager;return t.onListen=$2.bind(null,e.syncEngine),t.onUnlisten=Q2.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=G2.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Y2.bind(null,e.syncEngine),t}function lO(r,e,t={}){const s=new di;return r.asyncQueue.enqueueAndForget(async()=>function(u,h,p,m,g){const v=new cy({next:w=>{v.su(),h.enqueueAndForget(()=>sy(u,b));const I=w.docs.has(p);!I&&w.fromCache?g.reject(new fe(re.UNAVAILABLE,"Failed to get document because the client is offline.")):I&&w.fromCache&&m&&m.source==="server"?g.reject(new fe(re.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(w)},error:w=>g.reject(w)}),b=new oy(Nf(p.path),v,{includeMetadataChanges:!0,Ta:!0});return iy(u,b)}(await yf(r),r.asyncQueue,e,t,s)),s.promise}function uO(r,e,t={}){const s=new di;return r.asyncQueue.enqueueAndForget(async()=>function(u,h,p,m,g){const v=new cy({next:w=>{v.su(),h.enqueueAndForget(()=>sy(u,b)),w.fromCache&&m.source==="server"?g.reject(new fe(re.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(w)},error:w=>g.reject(w)}),b=new oy(p,v,{includeMetadataChanges:!0,Ta:!0});return iy(u,b)}(await yf(r),r.asyncQueue,e,t,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ES(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yb=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bS(r,e,t){if(!t)throw new fe(re.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function cO(r,e,t,s){if(e===!0&&s===!0)throw new fe(re.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function vb(r){if(!_e.isDocumentKey(r))throw new fe(re.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function _b(r){if(_e.isDocumentKey(r))throw new fe(re.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function zf(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":Ae()}function Tn(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new fe(re.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=zf(r);throw new fe(re.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TS="firestore.googleapis.com",Eb=!0;class bb{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new fe(re.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=TS,this.ssl=Eb}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Eb;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Zw;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<qk)throw new fe(re.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}cO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ES((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new fe(re.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new fe(re.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new fe(re.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class qf{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new bb({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new fe(re.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new fe(re.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new bb(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new vN;switch(s.type){case"firstParty":return new TN(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new fe(re.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=yb.get(t);s&&(de("ComponentProvider","Removing Datastore"),yb.delete(t),s.terminate())}(this),Promise.resolve()}}function hO(r,e,t,s={}){var o;const u=(r=Tn(r,qf))._getSettings(),h=Object.assign(Object.assign({},u),{emulatorOptions:r._getEmulatorOptions()}),p=`${e}:${t}`;u.host!==TS&&u.host!==p&&Co("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const m=Object.assign(Object.assign({},u),{host:p,ssl:!1,emulatorOptions:s});if(!mi(m,h)&&(r._setSettings(m),s.mockUserToken)){let g,v;if(typeof s.mockUserToken=="string")g=s.mockUserToken,v=sn.MOCK_USER;else{g=DI(s.mockUserToken,(o=r._app)===null||o===void 0?void 0:o.options.projectId);const b=s.mockUserToken.sub||s.mockUserToken.user_id;if(!b)throw new fe(re.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");v=new sn(b)}r._authCredentials=new _N(new cw(g,v))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Ss(this.firestore,e,this._query)}}class on{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new hs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new on(this.firestore,e,this._key)}}class hs extends Ss{constructor(e,t,s){super(e,t,Nf(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new on(this.firestore,null,new _e(e))}withConverter(e){return new hs(this.firestore,e,this._path)}}function dn(r,e,...t){if(r=Ct(r),bS("collection","path",e),r instanceof qf){const s=lt.fromString(e,...t);return _b(s),new hs(r,null,s)}{if(!(r instanceof on||r instanceof hs))throw new fe(re.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(lt.fromString(e,...t));return _b(s),new hs(r.firestore,null,s)}}function pn(r,e,...t){if(r=Ct(r),arguments.length===1&&(e=fw.newId()),bS("doc","path",e),r instanceof qf){const s=lt.fromString(e,...t);return vb(s),new on(r,null,new _e(s))}{if(!(r instanceof on||r instanceof hs))throw new fe(re.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(lt.fromString(e,...t));return vb(s),new on(r.firestore,r instanceof hs?r.converter:null,new _e(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tb="AsyncQueue";class wb{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new rS(this,"async_queue_retry"),this.Su=()=>{const s=bm();s&&de(Tb,"Visibility state changed to "+s.visibilityState),this.a_.t_()},this.bu=e;const t=bm();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const t=bm();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const t=new di;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!Xo(e))throw e;de(Tb,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const t=this.bu.then(()=>(this.pu=!0,e().catch(s=>{this.gu=s,this.pu=!1;const o=function(h){let p=h.message||"";return h.stack&&(p=h.stack.includes(h.message)?h.stack:h.message+`
`+h.stack),p}(s);throw vi("INTERNAL UNHANDLED ERROR: ",o),s}).then(s=>(this.pu=!1,s))));return this.bu=t,t}enqueueAfterDelay(e,t,s){this.Du(),this.wu.indexOf(e)>-1&&(t=0);const o=ny.createAndSchedule(this,e,t,s,u=>this.Fu(u));return this.fu.push(o),o}Du(){this.gu&&Ae()}verifyOperationInProgress(){}async Mu(){let e;do e=this.bu,await e;while(e!==this.bu)}xu(e){for(const t of this.fu)if(t.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.fu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const t=this.fu.indexOf(e);this.fu.splice(t,1)}}function Sb(r){return function(t,s){if(typeof t!="object"||t===null)return!1;const o=t;for(const u of s)if(u in o&&typeof o[u]=="function")return!0;return!1}(r,["next","error","complete"])}class Ei extends qf{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new wb,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new wb(e),this._firestoreClient=void 0,await e}}}function fO(r,e){const t=typeof r=="object"?r:bT(),s=typeof r=="string"?r:lf,o=Ig(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=xI("firestore");u&&hO(o,...u)}return o}function Bf(r){if(r._terminated)throw new fe(re.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||dO(r),r._firestoreClient}function dO(r){var e,t,s;const o=r._freezeSettings(),u=function(p,m,g,v){return new LN(p,m,g,v.host,v.ssl,v.experimentalForceLongPolling,v.experimentalAutoDetectLongPolling,ES(v.experimentalLongPollingOptions),v.useFetchStreams)}(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,o);r._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(r._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),r._firestoreClient=new sO(r._authCredentials,r._appCheckCredentials,r._queue,u,r._componentsProvider&&function(p){const m=p==null?void 0:p._online.build();return{_offline:p==null?void 0:p._offline.build(m),_online:m}}(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Lo(Jt.fromBase64String(e))}catch(t){throw new fe(re.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Lo(Jt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new fe(re.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Wt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new fe(re.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new fe(re.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Oe(this._lat,e._lat)||Oe(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pO=/^__.*__$/;class mO{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new ws(e,this.data,this.fieldMask,t,this.fieldTransforms):new Bu(e,this.data,t,this.fieldTransforms)}}class wS{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new ws(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function SS(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ae()}}class Ff{constructor(e,t,s,o,u,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Bu(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new Ff(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.ku({path:s,Qu:!1});return o.$u(e),o}Uu(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.ku({path:s,Qu:!1});return o.Bu(),o}Ku(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return vf(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(SS(this.Lu)&&pO.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class gO{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Lf(e)}ju(e,t,s,o=!1){return new Ff({Lu:e,methodName:t,zu:s,path:Wt.emptyPath(),Qu:!1,Gu:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function $f(r){const e=r._freezeSettings(),t=Lf(r._databaseId);return new gO(r._databaseId,!!e.ignoreUndefinedProperties,t)}function AS(r,e,t,s,o,u={}){const h=r.ju(u.merge||u.mergeFields?2:0,e,t,o);my("Data must be an object, but it was:",h,s);const p=IS(s,h);let m,g;if(u.merge)m=new On(h.fieldMask),g=h.fieldTransforms;else if(u.mergeFields){const v=[];for(const b of u.mergeFields){const w=lg(e,b,t);if(!h.contains(w))throw new fe(re.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);CS(v,w)||v.push(w)}m=new On(v),g=h.fieldTransforms.filter(b=>m.covers(b.field))}else m=null,g=h.fieldTransforms;return new mO(new En(p),m,g)}class Gf extends Gu{_toFieldTransform(e){if(e.Lu!==2)throw e.Lu===1?e.Wu(`${this._methodName}() can only appear at the top level of your update data`):e.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Gf}}function RS(r,e,t){return new Ff({Lu:3,zu:e.settings.zu,methodName:r._methodName,Qu:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class dy extends Gu{constructor(e,t){super(e),this.Hu=t}_toFieldTransform(e){const t=RS(this,e,!0),s=this.Hu.map(u=>ba(u,t)),o=new Oo(s);return new zw(e.path,o)}isEqual(e){return e instanceof dy&&mi(this.Hu,e.Hu)}}class py extends Gu{constructor(e,t){super(e),this.Hu=t}_toFieldTransform(e){const t=RS(this,e,!0),s=this.Hu.map(u=>ba(u,t)),o=new Mo(s);return new zw(e.path,o)}isEqual(e){return e instanceof py&&mi(this.Hu,e.Hu)}}function yO(r,e,t,s){const o=r.ju(1,e,t);my("Data must be an object, but it was:",o,s);const u=[],h=En.empty();Ts(s,(m,g)=>{const v=gy(e,m,t);g=Ct(g);const b=o.Uu(v);if(g instanceof Gf)u.push(v);else{const w=ba(g,b);w!=null&&(u.push(v),h.set(v,w))}});const p=new On(u);return new wS(h,p,o.fieldTransforms)}function vO(r,e,t,s,o,u){const h=r.ju(1,e,t),p=[lg(e,s,t)],m=[o];if(u.length%2!=0)throw new fe(re.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<u.length;w+=2)p.push(lg(e,u[w])),m.push(u[w+1]);const g=[],v=En.empty();for(let w=p.length-1;w>=0;--w)if(!CS(g,p[w])){const I=p[w];let C=m[w];C=Ct(C);const z=h.Uu(I);if(C instanceof Gf)g.push(I);else{const U=ba(C,z);U!=null&&(g.push(I),v.set(I,U))}}const b=new On(g);return new wS(v,b,h.fieldTransforms)}function _O(r,e,t,s=!1){return ba(t,r.ju(s?4:3,e))}function ba(r,e){if(xS(r=Ct(r)))return my("Unsupported field value:",e,r),IS(r,e);if(r instanceof Gu)return function(s,o){if(!SS(o.Lu))throw o.Wu(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Wu(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(s,o){const u=[];let h=0;for(const p of s){let m=ba(p,o.Ku(h));m==null&&(m={nullValue:"NULL_VALUE"}),u.push(m),h++}return{arrayValue:{values:u}}}(r,e)}return function(s,o){if((s=Ct(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return ak(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=dt.fromDate(s);return{timestampValue:df(o.serializer,u)}}if(s instanceof dt){const u=new dt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:df(o.serializer,u)}}if(s instanceof hy)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Lo)return{bytesValue:Gw(o.serializer,s._byteString)};if(s instanceof on){const u=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw o.Wu(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:Kg(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof fy)return function(h,p){return{mapValue:{fields:{[Ew]:{stringValue:bw},[uf]:{arrayValue:{values:h.toArray().map(g=>{if(typeof g!="number")throw p.Wu("VectorValues must only contain numeric values.");return Hg(p.serializer,g)})}}}}}}(s,o);throw o.Wu(`Unsupported field value: ${zf(s)}`)}(r,e)}function IS(r,e){const t={};return pw(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ts(r,(s,o)=>{const u=ba(o,e.qu(s));u!=null&&(t[s]=u)}),{mapValue:{fields:t}}}function xS(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof dt||r instanceof hy||r instanceof Lo||r instanceof on||r instanceof Gu||r instanceof fy)}function my(r,e,t){if(!xS(t)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(t)){const s=zf(t);throw s==="an object"?e.Wu(r+" a custom object"):e.Wu(r+" "+s)}}function lg(r,e,t){if((e=Ct(e))instanceof Hf)return e._internalPath;if(typeof e=="string")return gy(r,e);throw vf("Field path arguments must be of type string or ",r,!1,void 0,t)}const EO=new RegExp("[~\\*/\\[\\]]");function gy(r,e,t){if(e.search(EO)>=0)throw vf(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new Hf(...e.split("."))._internalPath}catch{throw vf(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function vf(r,e,t,s,o){const u=s&&!s.isEmpty(),h=o!==void 0;let p=`Function ${e}() called with invalid data`;t&&(p+=" (via `toFirestore()`)"),p+=". ";let m="";return(u||h)&&(m+=" (found",u&&(m+=` in field ${s}`),h&&(m+=` in document ${o}`),m+=")"),new fe(re.INVALID_ARGUMENT,p+r+m)}function CS(r,e){return r.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DS{constructor(e,t,s,o,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new on(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new bO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Kf("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class bO extends DS{data(){return super.data()}}function Kf(r,e){return typeof e=="string"?gy(r,e):e instanceof Hf?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NS(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new fe(re.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class yy{}class kS extends yy{}function sr(r,e,...t){let s=[];e instanceof yy&&s.push(e),s=s.concat(t),function(u){const h=u.filter(m=>m instanceof Qu).length,p=u.filter(m=>m instanceof Ku).length;if(h>1||h>0&&p>0)throw new fe(re.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const o of s)r=o._apply(r);return r}class Ku extends kS{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new Ku(e,t,s)}_apply(e){const t=this._parse(e);return OS(e._query,t),new Ss(e.firestore,e.converter,Wm(e._query,t))}_parse(e){const t=$f(e.firestore);return function(u,h,p,m,g,v,b){let w;if(g.isKeyField()){if(v==="array-contains"||v==="array-contains-any")throw new fe(re.INVALID_ARGUMENT,`Invalid Query. You can't perform '${v}' queries on documentId().`);if(v==="in"||v==="not-in"){Ib(b,v);const C=[];for(const z of b)C.push(Rb(m,u,z));w={arrayValue:{values:C}}}else w=Rb(m,u,b)}else v!=="in"&&v!=="not-in"&&v!=="array-contains-any"||Ib(b,v),w=_O(p,h,b,v==="in"||v==="not-in");return xt.create(g,v,w)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Ft(r,e,t){const s=e,o=Kf("where",r);return Ku._create(o,s,t)}class Qu extends yy{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Qu(e,t)}_parse(e){const t=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return t.length===1?t[0]:lr.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(o,u){let h=o;const p=u.getFlattenedFilters();for(const m of p)OS(h,m),h=Wm(h,m)}(e._query,t),new Ss(e.firestore,e.converter,Wm(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Ab(...r){return r.forEach(e=>TO("or",e)),Qu._create("or",r)}class vy extends kS{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new vy(e,t)}_apply(e){const t=function(o,u,h){if(o.startAt!==null)throw new fe(re.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new fe(re.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ku(u,h)}(e._query,this._field,this._direction);return new Ss(e.firestore,e.converter,function(o,u){const h=o.explicitOrderBy.concat([u]);return new Wo(o.path,o.collectionGroup,h,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)}(e._query,t))}}function ug(r,e="asc"){const t=e,s=Kf("orderBy",r);return vy._create(s,t)}function Rb(r,e,t){if(typeof(t=Ct(t))=="string"){if(t==="")throw new fe(re.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Cw(e)&&t.indexOf("/")!==-1)throw new fe(re.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(lt.fromString(t));if(!_e.isDocumentKey(s))throw new fe(re.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return zE(r,new _e(s))}if(t instanceof on)return zE(r,t._key);throw new fe(re.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${zf(t)}.`)}function Ib(r,e){if(!Array.isArray(r)||r.length===0)throw new fe(re.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function OS(r,e){const t=function(o,u){for(const h of o)for(const p of h.getFlattenedFilters())if(u.indexOf(p.op)>=0)return p.op;return null}(r.filters,function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new fe(re.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new fe(re.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function TO(r,e){if(!(e instanceof Ku||e instanceof Qu))throw new fe(re.INVALID_ARGUMENT,`Function ${r}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`)}class wO{convertValue(e,t="none"){switch(ms(e)){case 0:return null;case 1:return e.booleanValue;case 2:return bt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ps(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Ae()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Ts(e,(o,u)=>{s[o]=this.convertValue(u,t)}),s}convertVectorValue(e){var t,s,o;const u=(o=(s=(t=e.fields)===null||t===void 0?void 0:t[uf].arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map(h=>bt(h.doubleValue));return new fy(u)}convertGeoPoint(e){return new hy(bt(e.latitude),bt(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Df(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Cu(e));default:return null}}convertTimestamp(e){const t=ds(e);return new dt(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=lt.fromString(e);Xe(Jw(s));const o=new Du(s.get(1),s.get(3)),u=new _e(s.popFirst(5));return o.isEqual(t)||vi(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MS(r,e,t){let s;return s=r?r.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class PS extends DS{constructor(e,t,s,o,u,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Hh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Kf("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class Hh extends PS{data(e={}){return super.data(e)}}class VS{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new yu(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new Hh(this._firestore,this._userDataWriter,s.key,s,new yu(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new fe(re.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,u){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map(p=>{const m=new Hh(o._firestore,o._userDataWriter,p.doc.key,p.doc,new yu(o._snapshot.mutatedKeys.has(p.doc.key),o._snapshot.fromCache),o.query.converter);return p.doc,{type:"added",doc:m,oldIndex:-1,newIndex:h++}})}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(p=>u||p.type!==3).map(p=>{const m=new Hh(o._firestore,o._userDataWriter,p.doc.key,p.doc,new yu(o._snapshot.mutatedKeys.has(p.doc.key),o._snapshot.fromCache),o.query.converter);let g=-1,v=-1;return p.type!==0&&(g=h.indexOf(p.doc.key),h=h.delete(p.doc.key)),p.type!==1&&(h=h.add(p.doc),v=h.indexOf(p.doc.key)),{type:SO(p.type),doc:m,oldIndex:g,newIndex:v}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function SO(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ae()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vs(r){r=Tn(r,on);const e=Tn(r.firestore,Ei);return lO(Bf(e),r._key).then(t=>US(e,r,t))}class _y extends wO{constructor(e){super(),this.firestore=e}convertBytes(e){return new Lo(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new on(this.firestore,null,t)}}function ur(r){r=Tn(r,Ss);const e=Tn(r.firestore,Ei),t=Bf(e),s=new _y(e);return NS(r._query),uO(t,r._query).then(o=>new VS(e,s,r,o))}function LS(r,e,t){r=Tn(r,on);const s=Tn(r.firestore,Ei),o=MS(r.converter,e);return Xf(s,[AS($f(s),"setDoc",r._key,o,r.converter!==null,t).toMutation(r._key,Yn.none())])}function Qf(r,e,t,...s){r=Tn(r,on);const o=Tn(r.firestore,Ei),u=$f(o);let h;return h=typeof(e=Ct(e))=="string"||e instanceof Hf?vO(u,"updateDoc",r._key,e,t,s):yO(u,"updateDoc",r._key,e),Xf(o,[h.toMutation(r._key,Yn.exists(!0))])}function AO(r){return Xf(Tn(r.firestore,Ei),[new Fg(r._key,Yn.none())])}function Yf(r,e){const t=Tn(r.firestore,Ei),s=pn(r),o=MS(r.converter,e);return Xf(t,[AS($f(r.firestore),"addDoc",s._key,o,r.converter!==null,{}).toMutation(s._key,Yn.exists(!1))]).then(()=>s)}function RO(r,...e){var t,s,o;r=Ct(r);let u={includeMetadataChanges:!1,source:"default"},h=0;typeof e[h]!="object"||Sb(e[h])||(u=e[h],h++);const p={includeMetadataChanges:u.includeMetadataChanges,source:u.source};if(Sb(e[h])){const b=e[h];e[h]=(t=b.next)===null||t===void 0?void 0:t.bind(b),e[h+1]=(s=b.error)===null||s===void 0?void 0:s.bind(b),e[h+2]=(o=b.complete)===null||o===void 0?void 0:o.bind(b)}let m,g,v;if(r instanceof on)g=Tn(r.firestore,Ei),v=Nf(r._key.path),m={next:b=>{e[h]&&e[h](US(g,r,b))},error:e[h+1],complete:e[h+2]};else{const b=Tn(r,Ss);g=Tn(b.firestore,Ei),v=b._query;const w=new _y(g);m={next:I=>{e[h]&&e[h](new VS(g,w,b,I))},error:e[h+1],complete:e[h+2]},NS(r._query)}return function(w,I,C,z){const U=new cy(z),$=new oy(I,U,C);return w.asyncQueue.enqueueAndForget(async()=>iy(await yf(w),$)),()=>{U.su(),w.asyncQueue.enqueueAndForget(async()=>sy(await yf(w),$))}}(Bf(g),v,p,m)}function Xf(r,e){return function(s,o){const u=new di;return s.asyncQueue.enqueueAndForget(async()=>X2(await oO(s),o,u)),u.promise}(Bf(r),e)}function US(r,e,t){const s=t.docs.get(e._key),o=new _y(r);return new PS(r,o,e._key,s,new yu(t.hasPendingWrites,t.fromCache),e.converter)}function IO(...r){return new dy("arrayUnion",r)}function xO(...r){return new py("arrayRemove",r)}(function(e,t=!0){(function(o){Qo=o})(Go),Io(new fa("firestore",(s,{instanceIdentifier:o,options:u})=>{const h=s.getProvider("app").getImmediate(),p=new Ei(new EN(s.getProvider("auth-internal")),new wN(h,s.getProvider("app-check-internal")),function(g,v){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new fe(re.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Du(g.options.projectId,v)}(h,o),h);return u=Object.assign({useFetchStreams:t},u),p._setSettings(u),p},"PUBLIC").setMultipleInstances(!0)),us(xE,CE,e),us(xE,CE,"esm2017")})();var CO="firebase",DO="11.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */us(CO,DO,"app");const NO={apiKey:"",authDomain:"",projectId:"",storageBucket:"",messagingSenderId:"",appId:"",measurementId:""},jS=ET(NO),Ih=gN(jS),Ye=fO(jS),zS=async(r,e)=>{try{const t=pn(Ye,"employers",r);return await LS(t,{...e,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()}),{id:r,...e}}catch(t){throw console.error("Error creating employer profile:",t),t}},kO=async r=>{try{const e=pn(Ye,"employers",r),t=await vs(e);return t.exists()?{id:t.id,...t.data()}:null}catch(e){return console.error("Error getting employer profile:",e),null}},qS=j.createContext(),Pr=()=>j.useContext(qS),OO=({children:r})=>{const[e,t]=j.useState(null),[s,o]=j.useState(null),[u,h]=j.useState(!0),p=async(w,I,C,z="jobseeker")=>{try{const U=await JC(Ih,w,I),$=U.user;await tD($,{displayName:z==="employer"?C.companyName:`${C.firstName} ${C.lastName}`});const Z=pn(Ye,"users",$.uid);return await LS(Z,{email:w,userType:z,...C,createdAt:new Date().toISOString()}),z==="employer"&&await zS($.uid,{companyName:C.companyName,email:w,phone:C.phone||"",address:C.address||"",website:C.website||"",description:C.description||""}),U}catch(U){throw console.error("Error in registration:",U),U}},m=(w,I)=>ZC(Ih,w,I),g=()=>sD(Ih),v=async w=>{try{const I=pn(Ye,"users",w),C=await vs(I);return C.exists()?C.data().userType:null}catch(I){return console.error("Error getting user type:",I),null}};j.useEffect(()=>iD(Ih,async I=>{if(I){const C=await v(I.uid);o(C)}else o(null);t(I),h(!1)}),[]);const b={currentUser:e,userType:s,register:p,login:m,logout:g};return S.jsx(qS.Provider,{value:b,children:!u&&r})},BS=async r=>{try{console.log(`Getting conversations for user: ${r}`);try{const p=dn(Ye,"messages"),m=sr(p,Ab(Ft("senderId","==",r),Ft("receiverId","==",r))),v=(await ur(m)).docs.map(I=>{var U;const C=I.data(),z=C.timestamp instanceof dt?C.timestamp:(U=C.timestamp)!=null&&U.seconds?new dt(C.timestamp.seconds,C.timestamp.nanoseconds||0):null;return{id:I.id,...C,timestamp:z}});console.log(`Found ${v.length} messages for user ${r} (without ordering)`),v.sort((I,C)=>{var $,Z;const z=($=I.timestamp)!=null&&$.toMillis?I.timestamp.toMillis():0;return((Z=C.timestamp)!=null&&Z.toMillis?C.timestamp.toMillis():0)-z});const b={};v.forEach(I=>{var Z,Y,H;const C=I.senderId===r?I.receiverId:I.senderId,z=`${I.applicationId||"default"}-${C}`,U=(Z=I.timestamp)!=null&&Z.toMillis?I.timestamp.toMillis():0,$=(H=(Y=b[z])==null?void 0:Y.timestamp)!=null&&H.toMillis?b[z].timestamp.toMillis():0;(!b[z]||U>$)&&(b[z]={...I,otherUserId:C,unread:0})}),v.forEach(I=>{if(I.receiverId===r&&!I.read){const C=I.senderId,z=`${I.applicationId||"default"}-${C}`;b[z]&&(b[z].unread=(b[z].unread||0)+1)}});const w=Object.values(b);return console.log(`Processed into ${w.length} conversations`),w.forEach((I,C)=>{console.log(`Conversation ${C+1}: ${I.otherUserId}, unread: ${I.unread}, read status: ${I.read}`)}),w}catch(p){console.error("Error getting conversations (trying without orderBy):",p)}const e=dn(Ye,"messages"),t=sr(e,Ab(Ft("senderId","==",r),Ft("receiverId","==",r)),ug("timestamp","desc")),o=(await ur(t)).docs.map(p=>{var v;const m=p.data(),g=m.timestamp instanceof dt?m.timestamp:(v=m.timestamp)!=null&&v.seconds?new dt(m.timestamp.seconds,m.timestamp.nanoseconds||0):null;return{id:p.id,...m,timestamp:g}});console.log("Raw messages from Firestore:",o.length);const u={};o.forEach(p=>{var w,I,C;const m=p.senderId===r?p.receiverId:p.senderId,g=`${p.applicationId||"default"}-${m}`,v=(w=p.timestamp)!=null&&w.toMillis?p.timestamp.toMillis():0,b=(C=(I=u[g])==null?void 0:I.timestamp)!=null&&C.toMillis?u[g].timestamp.toMillis():0;(!u[g]||v>b)&&(u[g]={...p,otherUserId:m,unread:0})}),o.forEach(p=>{if(p.receiverId===r&&!p.read){const m=p.senderId,g=`${p.applicationId||"default"}-${m}`;u[g]&&(u[g].unread=(u[g].unread||0)+1)}});const h=Object.values(u);return console.log("Processed conversations:",h.length),h}catch(e){return console.error("Error getting user conversations:",e),[]}},MO=async(r,e,t)=>{try{console.log(`Marking messages as read - userId: ${r}, otherUserId: ${e}, applicationId: ${t}`);const s=dn(Ye,"messages"),o=sr(s,Ft("senderId","==",e),Ft("receiverId","==",r),Ft("applicationId","==",t),Ft("read","==",!1)),u=await ur(o);if(console.log(`Found ${u.size} unread messages to mark as read`),u.size===0)return!0;const h=u.docs.map(async p=>{const m=pn(Ye,"messages",p.id);return Qf(m,{read:!0})});return await Promise.all(h),console.log("Successfully marked messages as read"),!0}catch(s){return console.error("Error marking messages as read:",s),!1}},HS=j.createContext(),Ey=()=>j.useContext(HS),PO=({children:r})=>{const[e,t]=j.useState(0),[s,o]=j.useState(Date.now()),[u,h]=j.useState([]),g={unreadCount:e,refreshUnreadCount:async v=>{if(v)try{console.log("Refreshing unread message count for user:",v);const b=await BS(v),w=b.map(C=>{var z;return{from:C.otherUserId,applicationId:C.applicationId||"default",unreadCount:C.unread||0,lastMessage:((z=C.content)==null?void 0:z.substring(0,20))+"...",read:!!C.read}}),I=b.reduce((C,z)=>C+(z.unread||0),0);return console.log(`Total unread count: ${I} from ${b.length} conversations`),h([{timestamp:new Date().toLocaleTimeString(),userId:v,count:I,details:w},...u.slice(0,4)]),t(I),o(Date.now()),I}catch(b){return console.error("Error refreshing unread count:",b),e}},forceRefreshAllCounts:()=>{console.log("Force refreshing all unread counts"),o(Date.now())},lastRefresh:s,debugInfo:u};return S.jsx(HS.Provider,{value:g,children:r})};var ot="-ms-",Su="-moz-",Qe="-webkit-",FS="comm",Wf="rule",by="decl",VO="@import",$S="@keyframes",LO="@layer",GS=Math.abs,Ty=String.fromCharCode,cg=Object.assign;function UO(r,e){return Ht(r,0)^45?(((e<<2^Ht(r,0))<<2^Ht(r,1))<<2^Ht(r,2))<<2^Ht(r,3):0}function KS(r){return r.trim()}function li(r,e){return(r=e.exec(r))?r[0]:r}function Ne(r,e,t){return r.replace(e,t)}function Fh(r,e,t){return r.indexOf(e,t)}function Ht(r,e){return r.charCodeAt(e)|0}function Uo(r,e,t){return r.slice(e,t)}function Cr(r){return r.length}function QS(r){return r.length}function vu(r,e){return e.push(r),r}function jO(r,e){return r.map(e).join("")}function xb(r,e){return r.filter(function(t){return!li(t,e)})}var Jf=1,jo=1,YS=0,Wn=0,It=0,Zo="";function Zf(r,e,t,s,o,u,h,p){return{value:r,root:e,parent:t,type:s,props:o,children:u,line:Jf,column:jo,length:h,return:"",siblings:p}}function ts(r,e){return cg(Zf("",null,null,"",null,null,0,r.siblings),r,{length:-r.length},e)}function mo(r){for(;r.root;)r=ts(r.root,{children:[r]});vu(r,r.siblings)}function zO(){return It}function qO(){return It=Wn>0?Ht(Zo,--Wn):0,jo--,It===10&&(jo=1,Jf--),It}function ar(){return It=Wn<YS?Ht(Zo,Wn++):0,jo++,It===10&&(jo=1,Jf++),It}function ca(){return Ht(Zo,Wn)}function $h(){return Wn}function ed(r,e){return Uo(Zo,r,e)}function hg(r){switch(r){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function BO(r){return Jf=jo=1,YS=Cr(Zo=r),Wn=0,[]}function HO(r){return Zo="",r}function wm(r){return KS(ed(Wn-1,fg(r===91?r+2:r===40?r+1:r)))}function FO(r){for(;(It=ca())&&It<33;)ar();return hg(r)>2||hg(It)>3?"":" "}function $O(r,e){for(;--e&&ar()&&!(It<48||It>102||It>57&&It<65||It>70&&It<97););return ed(r,$h()+(e<6&&ca()==32&&ar()==32))}function fg(r){for(;ar();)switch(It){case r:return Wn;case 34:case 39:r!==34&&r!==39&&fg(It);break;case 40:r===41&&fg(r);break;case 92:ar();break}return Wn}function GO(r,e){for(;ar()&&r+It!==57;)if(r+It===84&&ca()===47)break;return"/*"+ed(e,Wn-1)+"*"+Ty(r===47?r:ar())}function KO(r){for(;!hg(ca());)ar();return ed(r,Wn)}function QO(r){return HO(Gh("",null,null,null,[""],r=BO(r),0,[0],r))}function Gh(r,e,t,s,o,u,h,p,m){for(var g=0,v=0,b=h,w=0,I=0,C=0,z=1,U=1,$=1,Z=0,Y="",H=o,ee=u,ue=s,N=Y;U;)switch(C=Z,Z=ar()){case 40:if(C!=108&&Ht(N,b-1)==58){Fh(N+=Ne(wm(Z),"&","&\f"),"&\f",GS(g?p[g-1]:0))!=-1&&($=-1);break}case 34:case 39:case 91:N+=wm(Z);break;case 9:case 10:case 13:case 32:N+=FO(C);break;case 92:N+=$O($h()-1,7);continue;case 47:switch(ca()){case 42:case 47:vu(YO(GO(ar(),$h()),e,t,m),m);break;default:N+="/"}break;case 123*z:p[g++]=Cr(N)*$;case 125*z:case 59:case 0:switch(Z){case 0:case 125:U=0;case 59+v:$==-1&&(N=Ne(N,/\f/g,"")),I>0&&Cr(N)-b&&vu(I>32?Db(N+";",s,t,b-1,m):Db(Ne(N," ","")+";",s,t,b-2,m),m);break;case 59:N+=";";default:if(vu(ue=Cb(N,e,t,g,v,o,p,Y,H=[],ee=[],b,u),u),Z===123)if(v===0)Gh(N,e,ue,ue,H,u,b,p,ee);else switch(w===99&&Ht(N,3)===110?100:w){case 100:case 108:case 109:case 115:Gh(r,ue,ue,s&&vu(Cb(r,ue,ue,0,0,o,p,Y,o,H=[],b,ee),ee),o,ee,b,p,s?H:ee);break;default:Gh(N,ue,ue,ue,[""],ee,0,p,ee)}}g=v=I=0,z=$=1,Y=N="",b=h;break;case 58:b=1+Cr(N),I=C;default:if(z<1){if(Z==123)--z;else if(Z==125&&z++==0&&qO()==125)continue}switch(N+=Ty(Z),Z*z){case 38:$=v>0?1:(N+="\f",-1);break;case 44:p[g++]=(Cr(N)-1)*$,$=1;break;case 64:ca()===45&&(N+=wm(ar())),w=ca(),v=b=Cr(Y=N+=KO($h())),Z++;break;case 45:C===45&&Cr(N)==2&&(z=0)}}return u}function Cb(r,e,t,s,o,u,h,p,m,g,v,b){for(var w=o-1,I=o===0?u:[""],C=QS(I),z=0,U=0,$=0;z<s;++z)for(var Z=0,Y=Uo(r,w+1,w=GS(U=h[z])),H=r;Z<C;++Z)(H=KS(U>0?I[Z]+" "+Y:Ne(Y,/&\f/g,I[Z])))&&(m[$++]=H);return Zf(r,e,t,o===0?Wf:p,m,g,v,b)}function YO(r,e,t,s){return Zf(r,e,t,FS,Ty(zO()),Uo(r,2,-2),0,s)}function Db(r,e,t,s,o){return Zf(r,e,t,by,Uo(r,0,s),Uo(r,s+1,-1),s,o)}function XS(r,e,t){switch(UO(r,e)){case 5103:return Qe+"print-"+r+r;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Qe+r+r;case 4789:return Su+r+r;case 5349:case 4246:case 4810:case 6968:case 2756:return Qe+r+Su+r+ot+r+r;case 5936:switch(Ht(r,e+11)){case 114:return Qe+r+ot+Ne(r,/[svh]\w+-[tblr]{2}/,"tb")+r;case 108:return Qe+r+ot+Ne(r,/[svh]\w+-[tblr]{2}/,"tb-rl")+r;case 45:return Qe+r+ot+Ne(r,/[svh]\w+-[tblr]{2}/,"lr")+r}case 6828:case 4268:case 2903:return Qe+r+ot+r+r;case 6165:return Qe+r+ot+"flex-"+r+r;case 5187:return Qe+r+Ne(r,/(\w+).+(:[^]+)/,Qe+"box-$1$2"+ot+"flex-$1$2")+r;case 5443:return Qe+r+ot+"flex-item-"+Ne(r,/flex-|-self/g,"")+(li(r,/flex-|baseline/)?"":ot+"grid-row-"+Ne(r,/flex-|-self/g,""))+r;case 4675:return Qe+r+ot+"flex-line-pack"+Ne(r,/align-content|flex-|-self/g,"")+r;case 5548:return Qe+r+ot+Ne(r,"shrink","negative")+r;case 5292:return Qe+r+ot+Ne(r,"basis","preferred-size")+r;case 6060:return Qe+"box-"+Ne(r,"-grow","")+Qe+r+ot+Ne(r,"grow","positive")+r;case 4554:return Qe+Ne(r,/([^-])(transform)/g,"$1"+Qe+"$2")+r;case 6187:return Ne(Ne(Ne(r,/(zoom-|grab)/,Qe+"$1"),/(image-set)/,Qe+"$1"),r,"")+r;case 5495:case 3959:return Ne(r,/(image-set\([^]*)/,Qe+"$1$`$1");case 4968:return Ne(Ne(r,/(.+:)(flex-)?(.*)/,Qe+"box-pack:$3"+ot+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Qe+r+r;case 4200:if(!li(r,/flex-|baseline/))return ot+"grid-column-align"+Uo(r,e)+r;break;case 2592:case 3360:return ot+Ne(r,"template-","")+r;case 4384:case 3616:return t&&t.some(function(s,o){return e=o,li(s.props,/grid-\w+-end/)})?~Fh(r+(t=t[e].value),"span",0)?r:ot+Ne(r,"-start","")+r+ot+"grid-row-span:"+(~Fh(t,"span",0)?li(t,/\d+/):+li(t,/\d+/)-+li(r,/\d+/))+";":ot+Ne(r,"-start","")+r;case 4896:case 4128:return t&&t.some(function(s){return li(s.props,/grid-\w+-start/)})?r:ot+Ne(Ne(r,"-end","-span"),"span ","")+r;case 4095:case 3583:case 4068:case 2532:return Ne(r,/(.+)-inline(.+)/,Qe+"$1$2")+r;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Cr(r)-1-e>6)switch(Ht(r,e+1)){case 109:if(Ht(r,e+4)!==45)break;case 102:return Ne(r,/(.+:)(.+)-([^]+)/,"$1"+Qe+"$2-$3$1"+Su+(Ht(r,e+3)==108?"$3":"$2-$3"))+r;case 115:return~Fh(r,"stretch",0)?XS(Ne(r,"stretch","fill-available"),e,t)+r:r}break;case 5152:case 5920:return Ne(r,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,o,u,h,p,m,g){return ot+o+":"+u+g+(h?ot+o+"-span:"+(p?m:+m-+u)+g:"")+r});case 4949:if(Ht(r,e+6)===121)return Ne(r,":",":"+Qe)+r;break;case 6444:switch(Ht(r,Ht(r,14)===45?18:11)){case 120:return Ne(r,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Qe+(Ht(r,14)===45?"inline-":"")+"box$3$1"+Qe+"$2$3$1"+ot+"$2box$3")+r;case 100:return Ne(r,":",":"+ot)+r}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Ne(r,"scroll-","scroll-snap-")+r}return r}function _f(r,e){for(var t="",s=0;s<r.length;s++)t+=e(r[s],s,r,e)||"";return t}function XO(r,e,t,s){switch(r.type){case LO:if(r.children.length)break;case VO:case by:return r.return=r.return||r.value;case FS:return"";case $S:return r.return=r.value+"{"+_f(r.children,s)+"}";case Wf:if(!Cr(r.value=r.props.join(",")))return""}return Cr(t=_f(r.children,s))?r.return=r.value+"{"+t+"}":""}function WO(r){var e=QS(r);return function(t,s,o,u){for(var h="",p=0;p<e;p++)h+=r[p](t,s,o,u)||"";return h}}function JO(r){return function(e){e.root||(e=e.return)&&r(e)}}function ZO(r,e,t,s){if(r.length>-1&&!r.return)switch(r.type){case by:r.return=XS(r.value,r.length,t);return;case $S:return _f([ts(r,{value:Ne(r.value,"@","@"+Qe)})],s);case Wf:if(r.length)return jO(t=r.props,function(o){switch(li(o,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":mo(ts(r,{props:[Ne(o,/:(read-\w+)/,":"+Su+"$1")]})),mo(ts(r,{props:[o]})),cg(r,{props:xb(t,s)});break;case"::placeholder":mo(ts(r,{props:[Ne(o,/:(plac\w+)/,":"+Qe+"input-$1")]})),mo(ts(r,{props:[Ne(o,/:(plac\w+)/,":"+Su+"$1")]})),mo(ts(r,{props:[Ne(o,/:(plac\w+)/,ot+"input-$1")]})),mo(ts(r,{props:[o]})),cg(r,{props:xb(t,s)});break}return""})}}var eM={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},kn={},zo=typeof process<"u"&&kn!==void 0&&(kn.REACT_APP_SC_ATTR||kn.SC_ATTR)||"data-styled",WS="active",JS="data-styled-version",td="6.1.17",wy=`/*!sc*/
`,Ef=typeof window<"u"&&"HTMLElement"in window,tM=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&kn!==void 0&&kn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&kn.REACT_APP_SC_DISABLE_SPEEDY!==""?kn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&kn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&kn!==void 0&&kn.SC_DISABLE_SPEEDY!==void 0&&kn.SC_DISABLE_SPEEDY!==""&&kn.SC_DISABLE_SPEEDY!=="false"&&kn.SC_DISABLE_SPEEDY),nd=Object.freeze([]),qo=Object.freeze({});function nM(r,e,t){return t===void 0&&(t=qo),r.theme!==t.theme&&r.theme||e||t.theme}var ZS=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),rM=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,iM=/(^-|-$)/g;function Nb(r){return r.replace(rM,"-").replace(iM,"")}var sM=/(a)(d)/gi,xh=52,kb=function(r){return String.fromCharCode(r+(r>25?39:97))};function dg(r){var e,t="";for(e=Math.abs(r);e>xh;e=e/xh|0)t=kb(e%xh)+t;return(kb(e%xh)+t).replace(sM,"$1-$2")}var Sm,eA=5381,bo=function(r,e){for(var t=e.length;t;)r=33*r^e.charCodeAt(--t);return r},tA=function(r){return bo(eA,r)};function aM(r){return dg(tA(r)>>>0)}function oM(r){return r.displayName||r.name||"Component"}function Am(r){return typeof r=="string"&&!0}var nA=typeof Symbol=="function"&&Symbol.for,rA=nA?Symbol.for("react.memo"):60115,lM=nA?Symbol.for("react.forward_ref"):60112,uM={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},cM={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},iA={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},hM=((Sm={})[lM]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Sm[rA]=iA,Sm);function Ob(r){return("type"in(e=r)&&e.type.$$typeof)===rA?iA:"$$typeof"in r?hM[r.$$typeof]:uM;var e}var fM=Object.defineProperty,dM=Object.getOwnPropertyNames,Mb=Object.getOwnPropertySymbols,pM=Object.getOwnPropertyDescriptor,mM=Object.getPrototypeOf,Pb=Object.prototype;function sA(r,e,t){if(typeof e!="string"){if(Pb){var s=mM(e);s&&s!==Pb&&sA(r,s,t)}var o=dM(e);Mb&&(o=o.concat(Mb(e)));for(var u=Ob(r),h=Ob(e),p=0;p<o.length;++p){var m=o[p];if(!(m in cM||t&&t[m]||h&&m in h||u&&m in u)){var g=pM(e,m);try{fM(r,m,g)}catch{}}}}return r}function Bo(r){return typeof r=="function"}function Sy(r){return typeof r=="object"&&"styledComponentId"in r}function ua(r,e){return r&&e?"".concat(r," ").concat(e):r||e||""}function Vb(r,e){if(r.length===0)return"";for(var t=r[0],s=1;s<r.length;s++)t+=r[s];return t}function Ou(r){return r!==null&&typeof r=="object"&&r.constructor.name===Object.name&&!("props"in r&&r.$$typeof)}function pg(r,e,t){if(t===void 0&&(t=!1),!t&&!Ou(r)&&!Array.isArray(r))return e;if(Array.isArray(e))for(var s=0;s<e.length;s++)r[s]=pg(r[s],e[s]);else if(Ou(e))for(var s in e)r[s]=pg(r[s],e[s]);return r}function Ay(r,e){Object.defineProperty(r,"toString",{value:e})}function Yu(r){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(r," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var gM=function(){function r(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return r.prototype.indexOfGroup=function(e){for(var t=0,s=0;s<e;s++)t+=this.groupSizes[s];return t},r.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var s=this.groupSizes,o=s.length,u=o;e>=u;)if((u<<=1)<0)throw Yu(16,"".concat(e));this.groupSizes=new Uint32Array(u),this.groupSizes.set(s),this.length=u;for(var h=o;h<u;h++)this.groupSizes[h]=0}for(var p=this.indexOfGroup(e+1),m=(h=0,t.length);h<m;h++)this.tag.insertRule(p,t[h])&&(this.groupSizes[e]++,p++)},r.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],s=this.indexOfGroup(e),o=s+t;this.groupSizes[e]=0;for(var u=s;u<o;u++)this.tag.deleteRule(s)}},r.prototype.getGroup=function(e){var t="";if(e>=this.length||this.groupSizes[e]===0)return t;for(var s=this.groupSizes[e],o=this.indexOfGroup(e),u=o+s,h=o;h<u;h++)t+="".concat(this.tag.getRule(h)).concat(wy);return t},r}(),Kh=new Map,bf=new Map,Qh=1,Ch=function(r){if(Kh.has(r))return Kh.get(r);for(;bf.has(Qh);)Qh++;var e=Qh++;return Kh.set(r,e),bf.set(e,r),e},yM=function(r,e){Qh=e+1,Kh.set(r,e),bf.set(e,r)},vM="style[".concat(zo,"][").concat(JS,'="').concat(td,'"]'),_M=new RegExp("^".concat(zo,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),EM=function(r,e,t){for(var s,o=t.split(","),u=0,h=o.length;u<h;u++)(s=o[u])&&r.registerName(e,s)},bM=function(r,e){for(var t,s=((t=e.textContent)!==null&&t!==void 0?t:"").split(wy),o=[],u=0,h=s.length;u<h;u++){var p=s[u].trim();if(p){var m=p.match(_M);if(m){var g=0|parseInt(m[1],10),v=m[2];g!==0&&(yM(v,g),EM(r,v,m[3]),r.getTag().insertRules(g,o)),o.length=0}else o.push(p)}}},Lb=function(r){for(var e=document.querySelectorAll(vM),t=0,s=e.length;t<s;t++){var o=e[t];o&&o.getAttribute(zo)!==WS&&(bM(r,o),o.parentNode&&o.parentNode.removeChild(o))}};function TM(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var aA=function(r){var e=document.head,t=r||e,s=document.createElement("style"),o=function(p){var m=Array.from(p.querySelectorAll("style[".concat(zo,"]")));return m[m.length-1]}(t),u=o!==void 0?o.nextSibling:null;s.setAttribute(zo,WS),s.setAttribute(JS,td);var h=TM();return h&&s.setAttribute("nonce",h),t.insertBefore(s,u),s},wM=function(){function r(e){this.element=aA(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(t){if(t.sheet)return t.sheet;for(var s=document.styleSheets,o=0,u=s.length;o<u;o++){var h=s[o];if(h.ownerNode===t)return h}throw Yu(17)}(this.element),this.length=0}return r.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}},r.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},r.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},r}(),SM=function(){function r(e){this.element=aA(e),this.nodes=this.element.childNodes,this.length=0}return r.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var s=document.createTextNode(t);return this.element.insertBefore(s,this.nodes[e]||null),this.length++,!0}return!1},r.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},r.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},r}(),AM=function(){function r(e){this.rules=[],this.length=0}return r.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},r.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},r.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},r}(),Ub=Ef,RM={isServer:!Ef,useCSSOMInjection:!tM},oA=function(){function r(e,t,s){e===void 0&&(e=qo),t===void 0&&(t={});var o=this;this.options=bn(bn({},RM),e),this.gs=t,this.names=new Map(s),this.server=!!e.isServer,!this.server&&Ef&&Ub&&(Ub=!1,Lb(this)),Ay(this,function(){return function(u){for(var h=u.getTag(),p=h.length,m="",g=function(b){var w=function($){return bf.get($)}(b);if(w===void 0)return"continue";var I=u.names.get(w),C=h.getGroup(b);if(I===void 0||!I.size||C.length===0)return"continue";var z="".concat(zo,".g").concat(b,'[id="').concat(w,'"]'),U="";I!==void 0&&I.forEach(function($){$.length>0&&(U+="".concat($,","))}),m+="".concat(C).concat(z,'{content:"').concat(U,'"}').concat(wy)},v=0;v<p;v++)g(v);return m}(o)})}return r.registerId=function(e){return Ch(e)},r.prototype.rehydrate=function(){!this.server&&Ef&&Lb(this)},r.prototype.reconstructWithOptions=function(e,t){return t===void 0&&(t=!0),new r(bn(bn({},this.options),e),this.gs,t&&this.names||void 0)},r.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},r.prototype.getTag=function(){return this.tag||(this.tag=(e=function(t){var s=t.useCSSOMInjection,o=t.target;return t.isServer?new AM(o):s?new wM(o):new SM(o)}(this.options),new gM(e)));var e},r.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},r.prototype.registerName=function(e,t){if(Ch(e),this.names.has(e))this.names.get(e).add(t);else{var s=new Set;s.add(t),this.names.set(e,s)}},r.prototype.insertRules=function(e,t,s){this.registerName(e,t),this.getTag().insertRules(Ch(e),s)},r.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},r.prototype.clearRules=function(e){this.getTag().clearGroup(Ch(e)),this.clearNames(e)},r.prototype.clearTag=function(){this.tag=void 0},r}(),IM=/&/g,xM=/^\s*\/\/.*$/gm;function lA(r,e){return r.map(function(t){return t.type==="rule"&&(t.value="".concat(e," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(e," ")),t.props=t.props.map(function(s){return"".concat(e," ").concat(s)})),Array.isArray(t.children)&&t.type!=="@keyframes"&&(t.children=lA(t.children,e)),t})}function CM(r){var e,t,s,o=qo,u=o.options,h=u===void 0?qo:u,p=o.plugins,m=p===void 0?nd:p,g=function(w,I,C){return C.startsWith(t)&&C.endsWith(t)&&C.replaceAll(t,"").length>0?".".concat(e):w},v=m.slice();v.push(function(w){w.type===Wf&&w.value.includes("&")&&(w.props[0]=w.props[0].replace(IM,t).replace(s,g))}),h.prefix&&v.push(ZO),v.push(XO);var b=function(w,I,C,z){I===void 0&&(I=""),C===void 0&&(C=""),z===void 0&&(z="&"),e=z,t=I,s=new RegExp("\\".concat(t,"\\b"),"g");var U=w.replace(xM,""),$=QO(C||I?"".concat(C," ").concat(I," { ").concat(U," }"):U);h.namespace&&($=lA($,h.namespace));var Z=[];return _f($,WO(v.concat(JO(function(Y){return Z.push(Y)})))),Z};return b.hash=m.length?m.reduce(function(w,I){return I.name||Yu(15),bo(w,I.name)},eA).toString():"",b}var DM=new oA,mg=CM(),uA=Ro.createContext({shouldForwardProp:void 0,styleSheet:DM,stylis:mg});uA.Consumer;Ro.createContext(void 0);function jb(){return j.useContext(uA)}var NM=function(){function r(e,t){var s=this;this.inject=function(o,u){u===void 0&&(u=mg);var h=s.name+u.hash;o.hasNameForId(s.id,h)||o.insertRules(s.id,h,u(s.rules,h,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Ay(this,function(){throw Yu(12,String(s.name))})}return r.prototype.getName=function(e){return e===void 0&&(e=mg),this.name+e.hash},r}(),kM=function(r){return r>="A"&&r<="Z"};function zb(r){for(var e="",t=0;t<r.length;t++){var s=r[t];if(t===1&&s==="-"&&r[0]==="-")return r;kM(s)?e+="-"+s.toLowerCase():e+=s}return e.startsWith("ms-")?"-"+e:e}var cA=function(r){return r==null||r===!1||r===""},hA=function(r){var e,t,s=[];for(var o in r){var u=r[o];r.hasOwnProperty(o)&&!cA(u)&&(Array.isArray(u)&&u.isCss||Bo(u)?s.push("".concat(zb(o),":"),u,";"):Ou(u)?s.push.apply(s,Zh(Zh(["".concat(o," {")],hA(u),!1),["}"],!1)):s.push("".concat(zb(o),": ").concat((e=o,(t=u)==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in eM||e.startsWith("--")?String(t).trim():"".concat(t,"px")),";")))}return s};function ha(r,e,t,s){if(cA(r))return[];if(Sy(r))return[".".concat(r.styledComponentId)];if(Bo(r)){if(!Bo(u=r)||u.prototype&&u.prototype.isReactComponent||!e)return[r];var o=r(e);return ha(o,e,t,s)}var u;return r instanceof NM?t?(r.inject(t,s),[r.getName(s)]):[r]:Ou(r)?hA(r):Array.isArray(r)?Array.prototype.concat.apply(nd,r.map(function(h){return ha(h,e,t,s)})):[r.toString()]}function OM(r){for(var e=0;e<r.length;e+=1){var t=r[e];if(Bo(t)&&!Sy(t))return!1}return!0}var MM=tA(td),PM=function(){function r(e,t,s){this.rules=e,this.staticRulesId="",this.isStatic=(s===void 0||s.isStatic)&&OM(e),this.componentId=t,this.baseHash=bo(MM,t),this.baseStyle=s,oA.registerId(t)}return r.prototype.generateAndInjectStyles=function(e,t,s){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,s):"";if(this.isStatic&&!s.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))o=ua(o,this.staticRulesId);else{var u=Vb(ha(this.rules,e,t,s)),h=dg(bo(this.baseHash,u)>>>0);if(!t.hasNameForId(this.componentId,h)){var p=s(u,".".concat(h),void 0,this.componentId);t.insertRules(this.componentId,h,p)}o=ua(o,h),this.staticRulesId=h}else{for(var m=bo(this.baseHash,s.hash),g="",v=0;v<this.rules.length;v++){var b=this.rules[v];if(typeof b=="string")g+=b;else if(b){var w=Vb(ha(b,e,t,s));m=bo(m,w+v),g+=w}}if(g){var I=dg(m>>>0);t.hasNameForId(this.componentId,I)||t.insertRules(this.componentId,I,s(g,".".concat(I),void 0,this.componentId)),o=ua(o,I)}}return o},r}(),fA=Ro.createContext(void 0);fA.Consumer;var Rm={};function VM(r,e,t){var s=Sy(r),o=r,u=!Am(r),h=e.attrs,p=h===void 0?nd:h,m=e.componentId,g=m===void 0?function(H,ee){var ue=typeof H!="string"?"sc":Nb(H);Rm[ue]=(Rm[ue]||0)+1;var N="".concat(ue,"-").concat(aM(td+ue+Rm[ue]));return ee?"".concat(ee,"-").concat(N):N}(e.displayName,e.parentComponentId):m,v=e.displayName,b=v===void 0?function(H){return Am(H)?"styled.".concat(H):"Styled(".concat(oM(H),")")}(r):v,w=e.displayName&&e.componentId?"".concat(Nb(e.displayName),"-").concat(e.componentId):e.componentId||g,I=s&&o.attrs?o.attrs.concat(p).filter(Boolean):p,C=e.shouldForwardProp;if(s&&o.shouldForwardProp){var z=o.shouldForwardProp;if(e.shouldForwardProp){var U=e.shouldForwardProp;C=function(H,ee){return z(H,ee)&&U(H,ee)}}else C=z}var $=new PM(t,w,s?o.componentStyle:void 0);function Z(H,ee){return function(ue,N,x){var D=ue.attrs,k=ue.componentStyle,M=ue.defaultProps,V=ue.foldedComponentIds,R=ue.styledComponentId,Ce=ue.target,je=Ro.useContext(fA),J=jb(),ce=ue.shouldForwardProp||J.shouldForwardProp,me=nM(N,je,M)||qo,Te=function(Re,ye,et){for(var Fe,Vt=bn(bn({},ye),{className:void 0,theme:et}),Mn=0;Mn<Re.length;Mn+=1){var mn=Bo(Fe=Re[Mn])?Fe(Vt):Fe;for(var Zt in mn)Vt[Zt]=Zt==="className"?ua(Vt[Zt],mn[Zt]):Zt==="style"?bn(bn({},Vt[Zt]),mn[Zt]):mn[Zt]}return ye.className&&(Vt.className=ua(Vt.className,ye.className)),Vt}(D,N,me),P=Te.as||Ce,ie={};for(var le in Te)Te[le]===void 0||le[0]==="$"||le==="as"||le==="theme"&&Te.theme===me||(le==="forwardedAs"?ie.as=Te.forwardedAs:ce&&!ce(le,P)||(ie[le]=Te[le]));var oe=function(Re,ye){var et=jb(),Fe=Re.generateAndInjectStyles(ye,et.styleSheet,et.stylis);return Fe}(k,Te),ge=ua(V,R);return oe&&(ge+=" "+oe),Te.className&&(ge+=" "+Te.className),ie[Am(P)&&!ZS.has(P)?"class":"className"]=ge,x&&(ie.ref=x),j.createElement(P,ie)}(Y,H,ee)}Z.displayName=b;var Y=Ro.forwardRef(Z);return Y.attrs=I,Y.componentStyle=$,Y.displayName=b,Y.shouldForwardProp=C,Y.foldedComponentIds=s?ua(o.foldedComponentIds,o.styledComponentId):"",Y.styledComponentId=w,Y.target=s?o.target:r,Object.defineProperty(Y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(H){this._foldedDefaultProps=s?function(ee){for(var ue=[],N=1;N<arguments.length;N++)ue[N-1]=arguments[N];for(var x=0,D=ue;x<D.length;x++)pg(ee,D[x],!0);return ee}({},o.defaultProps,H):H}}),Ay(Y,function(){return".".concat(Y.styledComponentId)}),u&&sA(Y,r,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),Y}function qb(r,e){for(var t=[r[0]],s=0,o=e.length;s<o;s+=1)t.push(e[s],r[s+1]);return t}var Bb=function(r){return Object.assign(r,{isCss:!0})};function LM(r){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];if(Bo(r)||Ou(r))return Bb(ha(qb(nd,Zh([r],e,!0))));var s=r;return e.length===0&&s.length===1&&typeof s[0]=="string"?ha(s):Bb(ha(qb(s,e)))}function gg(r,e,t){if(t===void 0&&(t=qo),!e)throw Yu(1,e);var s=function(o){for(var u=[],h=1;h<arguments.length;h++)u[h-1]=arguments[h];return r(e,t,LM.apply(void 0,Zh([o],u,!1)))};return s.attrs=function(o){return gg(r,e,bn(bn({},t),{attrs:Array.prototype.concat(t.attrs,o).filter(Boolean)}))},s.withConfig=function(o){return gg(r,e,bn(bn({},t),o))},s}var dA=function(r){return gg(VM,r)},X=dA;ZS.forEach(function(r){X[r]=dA(r)});const UM=X.header`
  background-color: #2b5a1d;
  color: white;
  padding: 0 1rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow-x: hidden; /* Prevent horizontal scrolling */
  width: 100%;
`,jM=X.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    flex-wrap: nowrap;
    padding: 0.5rem 0;
  }
`,zM=X(Es)`
  text-decoration: none;
  color: white;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: -1.5rem 0;
  flex-shrink: 1;
  min-width: 0; /* Allow flex item to shrink below content size */
  
  @media (max-width: 768px) {
    margin: -1rem 0;
  }
`,qM=X.img`
  height: 120px;
  width: auto;
  transition: transform 0.2s ease;
  
  @media (max-width: 768px) {
    height: 80px;
  }
  
  &:hover {
    transform: scale(1.05);
  }
`,BM=X.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`,HM=X.p`
  @media (max-width: 768px) {
    display: none;
  }
`,FM=X.nav`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`,$M=X.ul`
  display: flex;
  gap: 1rem;
  list-style: none;
  margin: 0;
  padding: 0;
  
  @media (max-width: 768px) {
    gap: 0.5rem;
    display: none; /* Hide on smallest screens */
  }
`,Hb=X.li`
  padding: 0;
`,Fb=X(Es)`
  text-decoration: none;
  color: white;
  font-weight: 500;
  font-size: 0.95rem;
  transition: opacity 0.2s;
  padding: 0.3rem 0.7rem;
  border-radius: 4px;

  &:hover {
    opacity: 0.9;
    background-color: rgba(255, 255, 255, 0.1);
  }
`,GM=X.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  
  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`,Dh=X(Es)`
  text-decoration: none;
  color: white;
  font-weight: 500;
  font-size: 0.95rem;
  padding: 0.3rem 0.8rem;
  border-radius: 4px;
  transition: all 0.2s;
  background-color: ${r=>r.$primary?"rgba(255, 255, 255, 0.2)":"transparent"};
  border: 1px solid ${r=>r.$primary?"transparent":"rgba(255, 255, 255, 0.5)"};
  white-space: nowrap;

  &:hover {
    background-color: ${r=>r.$primary?"rgba(255, 255, 255, 0.3)":"rgba(255, 255, 255, 0.1)"};
  }

  @media (max-width: 768px) {
    padding: 0.3rem 0.5rem;
    font-size: 0.85rem;
    
    &[data-mobile-text]:before {
      content: attr(data-mobile-text);
    }
    &[data-mobile-text] > span {
      display: none;
    }
  }
`,KM=X(Es)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.25rem;
  position: relative;
  padding: 0.5rem;
  
  &:hover {
    opacity: 0.9;
    background-color: rgba(255, 255, 255, 0.1);
  }
`,QM=X.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: #ec4a4a;
  color: white;
  border-radius: 50%;
  min-width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: bold;
`,YM=()=>{const{currentUser:r}=Pr(),[e,t]=j.useState(null),{unreadCount:s,refreshUnreadCount:o}=Ey();return j.useEffect(()=>{(async()=>{if(r){const h=await vs(pn(Ye,"users",r.uid));h.exists()&&t(h.data().userType)}})()},[r]),j.useEffect(()=>{if(r!=null&&r.uid){o(r.uid);const u=setInterval(()=>{o(r.uid)},6e4);return()=>clearInterval(u)}},[r,o]),S.jsx(UM,{children:S.jsxs(jM,{children:[S.jsxs(zM,{to:"/",children:[S.jsx(qM,{src:"/logo.png",alt:"FirstJob Logo"}),S.jsx(BM,{children:S.jsx(HM,{children:"Find your first job - No experience required"})})]}),S.jsxs(FM,{children:[S.jsxs($M,{children:[S.jsx(Hb,{children:S.jsx(Fb,{to:"/",children:"Home"})}),(!r||e==="jobseeker")&&S.jsx(Hb,{children:S.jsx(Fb,{to:"/interview/customer-service",children:"Practice Interviews"})})]}),S.jsx(GM,{children:r?S.jsxs(S.Fragment,{children:[r&&S.jsxs(KM,{to:"/messages",title:"Messages",children:[S.jsx("span",{role:"img","aria-label":"Messages",children:"✉️"}),s>0&&S.jsx(QM,{children:s})]}),e==="employer"?S.jsx(Dh,{to:"/employer/dashboard",$primary:!0,"data-mobile-text":"Dashboard",children:S.jsx("span",{children:"Employer Dashboard"})}):S.jsx(Dh,{to:"/profile",$primary:!0,children:"My Profile"})]}):S.jsxs(S.Fragment,{children:[S.jsx(Dh,{to:"/login",children:"Login"}),S.jsx(Dh,{to:"/register",$primary:!0,children:"Register"})]})})]})]})})},XM=X.footer`
  background-color: #f8f9fa;
  color: #212529;
  text-align: center;
  padding: 1.5rem;
  margin-top: 1.5rem;
  border-top: 1px solid #dee2e6;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`,WM=X.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
`,JM=X.div`
  display: flex;
  gap: 1.5rem;
  margin: 0.5rem 0;
  
  @media (max-width: 768px) {
    display: none;
  }
`,Im=X.a`
  color: #212529;
  font-size: 1.5rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--primary);
  }
`,ZM=X.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 0.5rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`,$b=X.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,eP=X.p`
  font-size: 0.8rem;
  color: #6c757d;
  margin-top: 0.75rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`,tP=X.p`
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`,nP=()=>{const r="1.0.0",e=new Date().getFullYear();return S.jsx(XM,{children:S.jsxs(WM,{children:[S.jsxs(tP,{children:["© ",e," FirstJob - Helping beginners start their careers"]}),S.jsxs(ZM,{children:[S.jsxs($b,{children:[S.jsx("span",{role:"img","aria-label":"email",children:"📧"}),S.jsx("a",{href:"mailto:info@firstjob.example.com",style:{color:"#212529"},children:"info@firstjob.example.com"})]}),S.jsxs($b,{children:[S.jsx("span",{role:"img","aria-label":"phone",children:"📞"}),S.jsx("a",{href:"tel:+1234567890",style:{color:"#212529"},children:"+1 (234) 567-890"})]})]}),S.jsxs(JM,{children:[S.jsxs(Im,{href:"https://facebook.com/firstjob",target:"_blank",rel:"noopener noreferrer",children:[S.jsx("span",{role:"img","aria-label":"facebook",children:"📘"})," Facebook"]}),S.jsxs(Im,{href:"https://instagram.com/firstjob",target:"_blank",rel:"noopener noreferrer",children:[S.jsx("span",{role:"img","aria-label":"instagram",children:"📷"})," Instagram"]}),S.jsxs(Im,{href:"https://linkedin.com/company/firstjob",target:"_blank",rel:"noopener noreferrer",children:[S.jsx("span",{role:"img","aria-label":"linkedin",children:"💼"})," LinkedIn"]})]}),S.jsxs(eP,{children:["Version ",r]})]})})},rP=async()=>{try{const r=dn(Ye,"jobs");return(await ur(r)).docs.map(t=>({id:t.id,...t.data()}))}catch(r){return console.error("Error getting jobs:",r),[]}},iP=async r=>{try{const e=dn(Ye,"jobs"),t=sr(e,Ft("employerId","==",r));return(await ur(t)).docs.map(o=>({id:o.id,...o.data()}))}catch(e){return console.error("Error getting employer jobs:",e),[]}},sP=async r=>{try{const e=dn(Ye,"jobs");return{id:(await Yf(e,{...r,createdAt:new Date().toISOString(),status:"active"})).id,...r}}catch(e){throw console.error("Error posting job:",e),e}},aP=async r=>{try{const e=pn(Ye,"jobs",r);return await AO(e),!0}catch(e){throw console.error("Error deleting job:",e),e}},oP=async r=>{try{const e=pn(Ye,"users",r),t=await vs(e);return t.exists()?{id:t.id,...t.data()}:(console.log("No such user!"),null)}catch(e){return console.error("Error getting user profile:",e),null}},lP=async r=>{try{if(console.log("Fetching user data for:",r),!r)return console.error("No userId provided to getUserById"),null;const e=pn(Ye,"users",r),t=await vs(e);if(t.exists()){const s=t.data();let o=null;return s.userType==="employer"&&s.companyName?o=s.companyName:s.firstName||s.lastName?o=`${s.firstName||""} ${s.lastName||""}`.trim():s.displayName?o=s.displayName:s.email&&(o=`${s.email.split("@")[0]}@...`),console.log(`Found user ${r} with display name: ${o||"Unknown"}`),{id:t.id,displayName:o||"Unknown User",email:s.email,userType:s.userType,...s}}else return console.log(`No user found with ID: ${r}`),{id:r,displayName:"Unknown User"}}catch(e){return console.error("Error getting user by ID:",e),{id:r,displayName:"Unknown User (Error)"}}},uP=async(r,e)=>{try{const t=pn(Ye,"users",r);return await Qf(t,{savedJobs:IO(e)}),!0}catch(t){return console.error("Error saving job:",t),!1}},cP=async(r,e)=>{try{const t=pn(Ye,"users",r);return await Qf(t,{savedJobs:xO(e)}),!0}catch(t){return console.error("Error removing job:",t),!1}},hP=async r=>{try{const e=dn(Ye,"applications"),t=sr(e,Ft("jobId","==",r));return(await ur(t)).docs.map(o=>({id:o.id,...o.data()}))}catch(e){return console.error("Error getting job applications:",e),[]}},fP=async r=>{try{const e=pn(Ye,"applications",r),t=await vs(e);return t.exists()?{id:t.id,...t.data()}:(console.log(`No application found with ID: ${r}`),null)}catch(e){return console.error("Error getting application by ID:",e),null}},dP=X.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #f8f9fa;
  width: 100%; /* Ensure full width */
  overflow-x: hidden; /* Prevent horizontal scrolling */
  
  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%; /* Prevent overflow */
  }
`,pP=X.div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden; /* Prevent horizontal scrolling */
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  
  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: #aaa;
  }
`,mP=X.div`
  max-width: 75%;
  padding: 0.8rem 1rem;
  border-radius: 18px;
  position: relative;
  margin: 0.25rem 0;
  word-break: break-word;
  
  ${r=>r.$isSender?`
    align-self: flex-end;
    background: linear-gradient(135deg, var(--primary), var(--primary-dark, #005a87));
    color: white;
    border-bottom-right-radius: 4px;
  `:`
    align-self: flex-start;
    background-color: white;
    color: black;
    border: 1px solid #e0e0e0;
    border-bottom-left-radius: 4px;
    box-shadow: 0 1px 2px rgba(0,0,0,0.05);
  `}
  
  @media (max-width: 768px) {
    max-width: 85%;
  }
`,gP=X.div`
  font-size: 0.7rem;
  margin-top: 0.25rem;
  text-align: ${r=>r.$isSender?"right":"left"};
  color: ${r=>r.$isSender?"rgba(255,255,255,0.8)":"#aaa"};
`,yP=X.div`
  display: flex;
  padding: 1rem;
  background-color: white;
  border-top: 1px solid #eee;
  align-items: center;
  position: relative;
`,vP=X.textarea`
  flex: 1;
  padding: 0.8rem 1rem;
  border: 1px solid #ddd;
  border-radius: 24px;
  font-size: 1rem;
  resize: none;
  min-height: 20px;
  max-height: 120px;
  line-height: 1.4;
  outline: none;
  font-family: inherit;
  
  &:focus {
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(var(--primary-rgb), 0.2);
  }
  
  &::placeholder {
    color: #aaa;
  }
`,_P=X.button`
  background-color: var(--primary);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-left: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background-color: var(--primary-dark, #005a87);
  }
  
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  
  svg {
    width: 18px;
    height: 18px;
  }
`;X.div`
  text-align: center;
  color: #888;
  font-size: 0.8rem;
  margin: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:before, &:after {
    content: '';
    flex: 1;
    border-bottom: 1px solid #ddd;
  }
  
  &:before {
    margin-right: 10px;
  }
  
  &:after {
    margin-left: 10px;
  }
`;X.div`
  background-color: rgba(var(--primary-rgb), 0.1);
  border: 1px solid rgba(var(--primary-rgb), 0.2);
  padding: 0.8rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  font-size: 0.9rem;
`;X.div`
  font-weight: bold;
  margin-bottom: 0.3rem;
`;X.div`
  color: #666;
`;X.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;const rd=({applicationId:r,senderId:e,receiverId:t})=>{const{currentUser:s}=Pr(),{refreshUnreadCount:o}=Ey(),[u,h]=j.useState([]),[p,m]=j.useState(""),[g,v]=j.useState(!1),b=j.useRef(null),[w,I]=j.useState(!1),[C,z]=j.useState(!1),U=()=>{var H;(!C||!w)&&((H=b.current)==null||H.scrollIntoView({behavior:"smooth"}),I(!0))},$=H=>{H.target.scrollTop<H.target.scrollHeight-H.target.clientHeight-10&&z(!0),H.target.scrollTop>=H.target.scrollHeight-H.target.clientHeight-10&&z(!1)};j.useEffect(()=>{U()},[u.length]),j.useEffect(()=>{if(!r||!(s!=null&&s.uid)){console.error("Missing required parameters for MessageBox");return}console.log(`MessageBox initialized with: appId=${r}, sender=${e}, receiver=${t}`);const H=async()=>{try{const D=dn(Ye,"messages"),k=sr(D,Ft("applicationId","==",r),Ft("receiverId","==",s.uid),Ft("read","==",!1)),M=await ur(k);if(console.log(`Found ${M.docs.length} unread messages to mark as read`),M.docs.length===0)return;const V=M.docs.map(R=>Qf(pn(Ye,"messages",R.id),{read:!0}));await Promise.all(V),console.log("Successfully marked messages as read directly"),o&&o(s.uid)}catch(D){console.error("Error marking messages as read directly:",D)}};(async()=>{try{console.log("Fetching messages for application:",r);const D=dn(Ye,"messages"),k=sr(D,Ft("applicationId","==",r),ug("timestamp","asc")),V=(await ur(k)).docs.map(R=>({id:R.id,...R.data()}));console.log(`Fetched ${V.length} messages, marking as read now...`),h(V),await H()}catch(D){console.error("Error fetching messages:",D)}})();const ue=dn(Ye,"messages"),N=sr(ue,Ft("applicationId","==",r),ug("timestamp","asc")),x=RO(N,D=>{console.log("Real-time message update received");const k=D.docs.map(V=>({id:V.id,...V.data()}));h(k.sort((V,R)=>V.timestamp.seconds-R.timestamp.seconds)),k.some(V=>V.receiverId===s.uid&&!V.read)&&(console.log("New unread messages detected, marking as read..."),H())},D=>{console.error("Error in messages listener:",D)});return()=>x()},[r,s,o,e,t]);const Z=async H=>{if(H.preventDefault(),!!p.trim()){v(!0);try{const ee={applicationId:r,senderId:e,receiverId:t,content:p.trim(),timestamp:dt.now(),read:!1};await Yf(dn(Ye,"messages"),ee),m("")}catch(ee){console.error("Error sending message:",ee)}finally{v(!1)}}},Y=H=>{if(!H)return"";let ee;return H instanceof dt?ee=H.toDate():H.seconds?ee=new Date(H.seconds*1e3):H instanceof Date?ee=H:ee=new Date(H),ee.toLocaleString()};return S.jsxs(dP,{children:[S.jsxs(pP,{onScroll:$,children:[u.map(H=>S.jsxs(mP,{$isSender:H.senderId===e,children:[H.content,S.jsx(gP,{$isSender:H.senderId===e,children:Y(H.timestamp)})]},H.id)),S.jsx("div",{ref:b})]}),S.jsxs(yP,{children:[S.jsx(vP,{value:p,onChange:H=>m(H.target.value),placeholder:"Type a message...",disabled:g}),S.jsx(_P,{onClick:Z,disabled:g||!p.trim(),children:g?"Sending...":"Send"})]})]})},EP=X.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`,bP=X.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  width: 90%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
`,TP=X.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,wP=X.textarea`
  width: 100%;
  min-height: 200px;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  resize: vertical;
`,Gb=X.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
`,xm=X.button`
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &.primary {
    background-color: var(--primary);
    color: white;

    &:hover {
      background-color: #1a4314;
    }
  }

  &.secondary {
    background-color: #6c757d;
    color: white;

    &:hover {
      background-color: #5a6268;
    }
  }
`,SP=({job:r,onClose:e})=>{const{currentUser:t}=Pr(),[s,o]=j.useState(""),[u,h]=j.useState(!1),[p,m]=j.useState(null),[g,v]=j.useState(!1),[b,w]=j.useState(""),I=async C=>{var z;C.preventDefault(),h(!0);try{const U=dn(Ye,"users"),$=sr(U,Ft("uid","==",t.uid)),Y=((z=(await ur($)).docs[0])==null?void 0:z.data())||{},H={jobId:r.id,applicantId:t.uid,employerId:r.employerId,motivationLetter:s,timestamp:dt.now(),status:"pending",applicantName:Y.name||t.displayName||"Anonymous User",applicantEmail:Y.email||t.email||"No email provided"},ee=await Yf(dn(Ye,"applications"),H);m(ee.id),v(!0),e()}catch(U){console.error("Error submitting application:",U),w("Failed to submit application. Please try again.")}finally{h(!1)}};return S.jsx(EP,{onClick:e,children:S.jsxs(bP,{onClick:C=>C.stopPropagation(),children:[S.jsxs("h2",{children:["Apply for ",r.title]}),S.jsxs("p",{children:[S.jsx("strong",{children:"Company:"})," ",r.company]}),g?S.jsxs(S.Fragment,{children:[S.jsx("p",{children:"Your application has been submitted successfully!"}),S.jsx(rd,{applicationId:p,senderId:t.uid,receiverId:r.employerId}),S.jsx(Gb,{children:S.jsx(xm,{type:"button",className:"secondary",onClick:e,children:"Close"})})]}):S.jsxs(TP,{onSubmit:I,children:[S.jsxs("div",{children:[S.jsx("label",{htmlFor:"motivationLetter",children:"Motivation Letter"}),S.jsx(wP,{id:"motivationLetter",value:s,onChange:C=>o(C.target.value),placeholder:"Write your motivation letter here...",required:!0})]}),S.jsxs(Gb,{children:[S.jsx(xm,{type:"button",className:"secondary",onClick:e,children:"Cancel"}),S.jsx(xm,{type:"submit",className:"primary",disabled:u,children:u?"Submitting...":"Submit Application"})]})]})]})})},AP=X.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
`,RP=X.div`
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  display: flex;
  flex-direction: column;
  height: 100%;
  
  &:hover {
    transform: translateY(-5px);
  }
`,IP=X.h3`
  margin-top: 0;
  margin-bottom: 0.5rem;
  color: var(--primary);
  font-weight: bold;
  font-size: 1.25rem;
`,xP=X.h4`
  margin-top: 0;
  margin-bottom: 1rem;
  color: var(--text-secondary);
`,CP=X.p`
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  flex-grow: 1;
`,DP=X.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`,NP=X.span`
  background-color: var(--background-secondary);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  color: var(--text-secondary);
`,kP=X.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: auto;
`,OP=X(Es)`
  background-color: #F28C28;
  color: white;
  text-decoration: none;
  padding: 0.8rem 1rem;
  border-radius: 4px;
  font-weight: 500;
  text-align: center;
  flex: 1;
  transition: background-color 0.2s, color 0.2s, border 0.2s;
  border: 1px solid transparent;
  
  &:hover {
    background-color: white;
    color: #F28C28;
    border: 1px solid #F28C28;
  }
`,MP=X.button`
  background-color: white;
  color: var(--primary);
  border: 1px solid var(--primary);
  padding: 0.8rem 1rem;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  flex: 1;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #f0f0f0;
  }
`,PP=X.button`
  background-color: var(--primary);
  color: white;
  border: none;
  padding: 0.8rem 1rem;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  flex: 1;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #1a4314;
  }
`,VP=X.div`
  display: flex;
  gap: 1rem;
  width: 100%;
`,LP=()=>{const[r,e]=j.useState([]),[t,s]=j.useState(!0),[o,u]=j.useState(null),{currentUser:h}=Pr(),[p,m]=j.useState(null);j.useEffect(()=>{(async()=>{try{s(!0);const w=await rP();e(w),u(null)}catch(w){console.error("Error fetching jobs:",w),u("Failed to load jobs. Please try again later.")}finally{s(!1)}})()},[]);const g=async b=>{if(!h){alert("Please login to save jobs");return}try{const w=await uP(h.uid,b);alert(w?"Job saved successfully":"Failed to save job")}catch(w){console.error("Error saving job:",w),alert("Failed to save job")}},v=b=>{if(!h){alert("Please login to apply for jobs");return}m(b)};return t?S.jsx("div",{children:"Loading jobs..."}):o?S.jsx("div",{children:o}):S.jsxs(S.Fragment,{children:[S.jsx(AP,{children:r.length>0?r.map(b=>S.jsxs(RP,{children:[S.jsx(IP,{children:b.title}),S.jsx(xP,{children:b.company}),S.jsx(CP,{children:b.description}),S.jsx(DP,{children:b.tags&&b.tags.map((w,I)=>S.jsx(NP,{children:w},I))}),S.jsxs(kP,{children:[S.jsx(PP,{onClick:()=>v(b),children:"Apply Now"}),S.jsxs(VP,{children:[S.jsx(OP,{to:`/interview/${b.jobType}`,children:"Practice Interview"}),S.jsx(MP,{onClick:()=>g(b),children:"Save Job"})]})]})]},b.id)):S.jsx("p",{children:"No jobs found. Please check back later."})}),p&&S.jsx(SP,{job:p,onClose:()=>m(null)})]})},UP=X.div`
  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`,jP=X.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,Kb=X.input`
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
`,zP=X.button`
  padding: 0.8rem;
  background-color: var(--primary);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`,qP=X.div`
  color: red;
  margin-top: 1rem;
`,BP=()=>{const[r,e]=j.useState(""),[t,s]=j.useState(""),[o,u]=j.useState(""),{login:h}=Pr(),p=$o(),m=async g=>{g.preventDefault(),u("");try{await h(r,t),p("/")}catch(v){u("Failed to sign in. Please check your credentials."),console.error(v)}};return S.jsxs(UP,{children:[S.jsx("h2",{children:"Login"}),o&&S.jsx(qP,{children:o}),S.jsxs(jP,{onSubmit:m,children:[S.jsx(Kb,{type:"email",placeholder:"Email",value:r,onChange:g=>e(g.target.value),required:!0}),S.jsx(Kb,{type:"password",placeholder:"Password",value:t,onChange:g=>s(g.target.value),required:!0}),S.jsx(zP,{type:"submit",children:"Login"})]}),S.jsxs("p",{style:{marginTop:"1rem",textAlign:"center"},children:["Don't have an account? ",S.jsx("a",{href:"/register",children:"Register"})]})]})},HP=X.div`
  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`,FP=X.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,oi=X.input`
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
`,$P=X.select`
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
`,GP=X.button`
  padding: 0.8rem;
  background-color: var(--primary);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #1a4314;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`,KP=X.div`
  color: red;
  margin-top: 1rem;
`,QP=()=>{const{register:r}=Pr(),e=$o(),[t,s]=j.useState(""),[o,u]=j.useState(!1),[h,p]=j.useState("jobseeker"),[m,g]=j.useState({email:"",password:"",confirmPassword:"",firstName:"",lastName:"",companyName:"",phone:"",website:"",description:""}),v=w=>{const{name:I,value:C}=w.target;g(z=>({...z,[I]:C}))},b=async w=>{if(w.preventDefault(),m.password!==m.confirmPassword)return s("Passwords do not match");try{s(""),u(!0);const I=h==="employer"?{companyName:m.companyName,phone:m.phone,website:m.website,description:m.description}:{firstName:m.firstName,lastName:m.lastName};await r(m.email,m.password,I,h),e("/")}catch(I){s("Failed to create an account: "+I.message)}finally{u(!1)}};return S.jsxs(HP,{children:[S.jsx("h2",{children:"Register"}),t&&S.jsx(KP,{children:t}),S.jsxs(FP,{onSubmit:b,children:[S.jsxs($P,{value:h,onChange:w=>p(w.target.value),children:[S.jsx("option",{value:"jobseeker",children:"Job Seeker"}),S.jsx("option",{value:"employer",children:"Employer"})]}),S.jsx(oi,{type:"email",name:"email",placeholder:"Email",value:m.email,onChange:v,required:!0}),S.jsx(oi,{type:"password",name:"password",placeholder:"Password",value:m.password,onChange:v,required:!0}),S.jsx(oi,{type:"password",name:"confirmPassword",placeholder:"Confirm Password",value:m.confirmPassword,onChange:v,required:!0}),h==="jobseeker"?S.jsxs(S.Fragment,{children:[S.jsx(oi,{type:"text",name:"firstName",placeholder:"First Name",value:m.firstName,onChange:v,required:!0}),S.jsx(oi,{type:"text",name:"lastName",placeholder:"Last Name",value:m.lastName,onChange:v,required:!0})]}):S.jsxs(S.Fragment,{children:[S.jsx(oi,{type:"text",name:"companyName",placeholder:"Company Name",value:m.companyName,onChange:v,required:!0}),S.jsx(oi,{type:"tel",name:"phone",placeholder:"Phone Number",value:m.phone,onChange:v}),S.jsx(oi,{type:"url",name:"website",placeholder:"Company Website",value:m.website,onChange:v}),S.jsx(oi,{type:"text",name:"description",placeholder:"Company Description",value:m.description,onChange:v})]}),S.jsx(GP,{type:"submit",disabled:o,children:o?"Registering...":"Register"})]})]})},YP={"customer-service":{title:"Customer Service Representative Interview",description:"Practice answering common questions for a customer service position.",questions:[{question:"Tell me about a time you had to deal with a difficult situation and how you handled it.",tips:["Use the STAR method (Situation, Task, Action, Result) to structure your answer","Focus on your problem-solving skills and how you remained calm","Emphasize what you learned from the experience","Show how you maintained professionalism throughout the situation"],keyWords:["situation","problem","solution","customer","resolved","professional","calm","learned","experience","handled"],goodFeedback:"Great answer! You showed problem-solving skills and empathy in your response. Customer service is about finding solutions while maintaining a positive attitude.",badFeedback:"Try to include specific examples of how you've handled conflicts or difficult situations. Even if you don't have work experience, you can draw from school, volunteer work, or personal interactions."},{question:"How would you handle an angry customer?",tips:["Start by actively listening to the customer's concerns","Stay calm and maintain a professional tone","Acknowledge their frustration and show empathy","Focus on finding a solution rather than placing blame","Follow up to ensure their issue was resolved"],keyWords:["listen","understand","empathy","solution","calm","professional","resolve","patience","apologize","assist"],goodFeedback:"Excellent! You demonstrated patience and a focus on resolution. Listening to the customer and maintaining a calm demeanor are key skills for this role.",badFeedback:"Consider emphasizing active listening skills and empathy more in your answer. Remember the goal is to de-escalate the situation and find a solution for the customer."},{question:"What does good customer service mean to you?",tips:["Define what customer service means in your own words","Include specific examples of good customer service you've experienced","Mention the importance of active listening and empathy","Highlight the value of going above and beyond for customers","Connect your definition to the company's values"],keyWords:["satisfaction","experience","quality","helpful","listening","empathy","service","support","communication","excellence"],goodFeedback:"Well done! Your definition of customer service aligns with what we're looking for - going above and beyond to ensure customer satisfaction.",badFeedback:"Try to be more specific about what actions constitute good customer service. Examples can help illustrate your understanding of customer needs."}]},"web-developer":{title:"Junior Web Developer Interview",description:"Practice answering technical and situational questions for a web development role.",questions:[{question:"What interests you about web development?",tips:["Share your passion for technology and problem-solving","Mention any personal projects or coding exercises you've done","Talk about specific aspects of web development that excite you","Connect your interests to the company's tech stack or projects","Show enthusiasm for continuous learning in the field"],keyWords:["passionate","projects","learning","technology","coding","development","problem-solving","creative","innovation","challenges"],goodFeedback:"Great answer! Your enthusiasm for technology and problem-solving comes through clearly. This shows us you have the right motivation for the role.",badFeedback:"Try to be more specific about what aspects of web development excite you. Mentioning any personal projects or coding exercises you've done would strengthen your answer."},{question:"How comfortable are you with HTML, CSS, and JavaScript?",tips:["Be honest about your current skill level","Mention any courses, tutorials, or projects you've completed","Highlight your willingness to learn and improve","Share specific examples of what you've built or learned","Express confidence in your ability to pick up new skills"],keyWords:["experience","projects","learning","practice","skills","knowledge","understanding","development","programming","coding"],goodFeedback:"Good response! You've honestly assessed your knowledge level and shown a willingness to learn, which is exactly what we look for in entry-level positions.",badFeedback:"It's okay to be a beginner, but try to highlight any specific exposure you have had to these technologies, even if it's just from online courses or self-learning."},{question:"How do you approach learning new technologies?",tips:["Describe your learning process and resources you use","Mention specific online platforms or communities you engage with","Share how you practice and apply what you learn","Talk about how you stay updated with industry trends","Highlight your ability to learn independently"],keyWords:["research","practice","documentation","tutorials","learning","resources","community","projects","hands-on","understanding"],goodFeedback:"Excellent answer! Your structured approach to learning shows us you can quickly adapt to new technologies, which is essential in this field.",badFeedback:"Consider mentioning specific strategies you use to learn, such as online courses, practice projects, or coding challenges. This shows your commitment to growth."}]},sales:{title:"Sales Associate Interview",description:"Practice answering sales-focused questions for a retail position.",questions:[{question:"Why do you want to work in sales?",tips:["Share your passion for helping customers","Mention your interest in product knowledge","Highlight your communication and interpersonal skills","Talk about your enthusiasm for meeting new people","Connect your answer to the company's products or services"],keyWords:["passion","customers","communication","people","products","sales","helping","skills","enthusiasm","service"],goodFeedback:"Great answer! Your enthusiasm for customer interaction and helping people find solutions aligns perfectly with sales work.",badFeedback:"Try to emphasize your interest in the customer experience more. Sales is about understanding customer needs and connecting them with the right solutions."},{question:"How would you approach a customer who seems undecided?",tips:["Start by asking open-ended questions to understand their needs","Listen actively to their responses","Suggest products based on their specific requirements","Be patient and avoid being pushy","Offer to show them different options"],keyWords:["questions","listen","understand","needs","patient","options","suggest","requirements","help","solutions"],goodFeedback:"Excellent! Your approach of asking open-ended questions and identifying needs shows you understand the consultative sales process.",badFeedback:"Consider focusing more on asking questions to understand the customer's needs rather than immediately pitching products. The best sales approach starts with listening."},{question:"How do you handle rejection?",tips:["Show resilience and a positive attitude","Mention how you learn from each rejection","Talk about maintaining professionalism","Share how you stay motivated","Highlight your ability to move on quickly"],keyWords:["resilience","positive","learn","professional","motivated","improve","attitude","opportunity","experience","growth"],goodFeedback:"Well done! Your positive attitude toward rejection and seeing it as a learning opportunity is exactly what we look for in sales associates.",badFeedback:"Remember that rejection is a normal part of sales. Try to emphasize resilience and how you would learn from each rejection to improve your approach."}]},admin:{title:"Administrative Assistant Interview",description:"Practice answering questions related to organizational and support skills.",questions:[{question:"How do you prioritize multiple tasks when everything seems urgent?",tips:["Describe your method for assessing task urgency and importance","Mention tools or systems you use for organization","Talk about how you communicate with stakeholders","Share how you handle unexpected urgent tasks","Highlight your ability to stay calm under pressure"],keyWords:["prioritize","organize","urgent","important","system","method","communicate","manage","deadline","efficiency"],goodFeedback:"Great answer! Your systematic approach to prioritization shows strong organizational skills essential for administrative work.",badFeedback:"Try to include more specific methods for prioritizing tasks, such as urgency/importance matrices or communication with stakeholders to clarify deadlines."},{question:"What experience do you have with Microsoft Office or Google Workspace?",tips:["List the specific applications you're familiar with","Mention any advanced features you know","Share examples of how you've used these tools","Talk about your willingness to learn new features","Highlight your ability to adapt to different software"],keyWords:["microsoft","google","excel","word","powerpoint","sheets","docs","experience","software","skills"],goodFeedback:"Excellent! Your familiarity with these tools, even from academic or personal use, transfers well to professional settings.",badFeedback:"Even without professional experience, you can highlight your comfort level with these tools from school or personal projects. Be specific about which applications you know best."},{question:"How do you maintain confidentiality when handling sensitive information?",tips:["Emphasize the importance of trust and discretion","Mention specific security practices you follow","Talk about your understanding of data protection","Share how you handle sensitive documents","Highlight your commitment to privacy"],keyWords:["confidential","security","privacy","trust","discretion","protection","sensitive","professional","responsibility","careful"],goodFeedback:"Well done! Your understanding of confidentiality principles shows maturity and professionalism needed for this role.",badFeedback:"Consider emphasizing the importance of trust and discretion more in your answer. Administrative roles often require handling confidential information."}]},"data-entry":{title:"Data Entry Specialist Interview",description:"Practice answering questions about accuracy, attention to detail, and efficiency.",questions:[{question:"How do you ensure accuracy in repetitive tasks?",tips:["Describe your quality control process","Mention specific techniques for double-checking work","Talk about how you maintain focus","Share how you handle distractions","Highlight your attention to detail"],keyWords:["accuracy","quality","check","detail","focus","process","attention","careful","review","precise"],goodFeedback:"Great answer! Your methods for maintaining focus and checking your work demonstrate the attention to detail needed for data entry.",badFeedback:"Try to mention specific techniques you use to maintain accuracy, such as double-checking entries, taking breaks to stay fresh, or creating a distraction-free environment."},{question:"How comfortable are you with typing and data entry speed?",tips:["Mention your typing speed if you know it","Talk about your accuracy rate"],keyWords:["typing","speed","accuracy","efficient","practice","skills","comfortable","experience","keyboard","productivity"],goodFeedback:"Good response! Your focus on balancing speed with accuracy shows you understand the key requirements of data entry work.",badFeedback:"It's helpful to mention any typing speed you know (in WPM) or your comfort level with keyboard use. Also emphasize your willingness to improve speed while maintaining accuracy."},{question:"How do you handle monotonous or repetitive tasks?",tips:["Share strategies for maintaining focus","Mention how you break up the work into manageable chunks","Talk about setting personal goals","Highlight your ability to find satisfaction in detail-oriented work","Describe how you maintain quality over time"],keyWords:["focus","strategy","goals","quality","consistent","organized","efficient","routine","satisfaction","methodical"],goodFeedback:"Excellent! Your strategies for maintaining focus and finding satisfaction in detail-oriented work align perfectly with data entry roles.",badFeedback:"Consider sharing specific techniques you use to stay engaged during repetitive tasks, such as setting small goals or finding satisfaction in maintaining quality work."}]},"social-media":{title:"Social Media Assistant Interview",description:"Practice answering questions about social media knowledge, content creation, and online trends.",questions:[{question:"Which social media platforms are you most familiar with?",tips:["List the platforms you use regularly","Mention specific features you're familiar with","Share your understanding of each platform's audience","Talk about any content creation experience","Highlight your ability to adapt to new platforms"],keyWords:["platforms","content","experience","audience","features","instagram","facebook","twitter","linkedin","creation"],goodFeedback:"Great answer! Your knowledge of multiple platforms and their different strengths shows you're ready to adapt to various social media strategies.",badFeedback:"Try to be more specific about how you use each platform and what types of content work best on each. Personal experience with social media can translate to professional skills."},{question:"How do you stay updated on social media trends?",tips:["Mention specific industry resources you follow","Talk about social media news sources","Share how you analyze trends","Highlight your ability to predict trends","Describe how you apply trends to content"],keyWords:["trends","research","industry","analytics","updates","follow","monitor","analyze","insights","strategy"],goodFeedback:"Excellent! Your proactive approach to following industry trends shows initiative and genuine interest in the field.",badFeedback:"Consider mentioning specific resources you follow to stay updated, such as industry blogs, thought leaders, or competitor accounts. This demonstrates your commitment to the field."},{question:"What makes content engaging on social media?",tips:["Talk about the importance of visuals","Mention the role of storytelling","Share your understanding of audience engagement","Highlight the value of authenticity","Describe how you measure engagement"],keyWords:["engaging","visuals","storytelling","authentic","audience","content","interaction","creative","value","strategy"],goodFeedback:"Well done! Your understanding of engagement factors shows you have insight into what resonates with audiences online.",badFeedback:"Try to include more specific elements that make content engaging, such as visuals, storytelling, or emotional connections. Examples from your personal experience can strengthen your answer."}]}},XP=async r=>{try{const e=dn(Ye,"interviews"),t=sr(e,Ft("jobType","==",r)),s=await ur(t);if(s.empty){console.log("Creating interview data in Firebase for:",r);const h=YP[r];if(!h)return console.error(`No predefined data found for job type: ${r}`),null;const p={jobType:r,title:h.title,description:h.description,questions:h.questions.map(m=>({question:m.question,tips:m.tips||[],goodFeedback:m.goodFeedback,badFeedback:m.badFeedback}))};try{const m=await Yf(e,p);return console.log("Interview data created with ID:",m.id),{id:m.id,...p}}catch(m){return console.error("Error storing interview data:",m),null}}const o=s.docs[0],u=o.data();return console.log("Retrieved interview data:",u),{id:o.id,...u}}catch(e){return console.error(`Error getting interview questions for ${r}:`,e),null}},WP=X.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2.5rem;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`,JP=X.div`
  margin-bottom: 2.5rem;
  text-align: center;
  
  h2 {
    color: var(--primary);
    margin-bottom: 0.75rem;
    font-size: 2rem;
    font-weight: 600;
    letter-spacing: -0.5px;
  }
  
  p {
    color: #666;
    font-size: 1.1rem;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.5;
  }
`,ZP=X.div`
  width: 100%;
  height: 8px;
  background-color: #f0f0f0;
  border-radius: 4px;
  margin: 1.5rem 0;
  overflow: hidden;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
`,eV=X.div`
  width: ${r=>r.$progress}%;
  height: 100%;
  background: linear-gradient(90deg, var(--primary) 0%, #4CAF50 100%);
  transition: width 0.5s ease;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`,tV=X.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  
  h3 {
    margin: 0;
    color: #2c3e50;
    font-size: 1.4rem;
    font-weight: 600;
  }
  
  span {
    background: linear-gradient(135deg, var(--primary) 0%, #4CAF50 100%);
    color: white;
    padding: 0.4rem 1rem;
    border-radius: 20px;
    font-size: 0.95rem;
    margin-left: auto;
    font-weight: 500;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`,nV=X.p`
  font-size: 1.3rem;
  color: #2c3e50;
  margin-bottom: 2rem;
  line-height: 1.5;
  font-weight: 500;
`,rV=X.div`
  margin-bottom: 2rem;
  padding: 2rem;
  background-color: #f8f9fa;
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`,iV=X.div`
  margin: 2rem 0;
  padding: 1.5rem;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
`,sV=X.h4`
  margin-bottom: 1.2rem;
  color: #2c3e50;
  font-size: 1.2rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  
  &:before {
    content: "💡";
    margin-right: 0.5rem;
    font-size: 1.4rem;
  }
`,aV=X.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,oV=X.li`
  margin-bottom: 1rem;
  padding-left: 1.8rem;
  position: relative;
  line-height: 1.5;
  color: #4a5568;
  
  &:before {
    content: "•";
    position: absolute;
    left: 0;
    color: var(--primary);
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 1;
    top: -2px;
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`,lV=X.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #edf2f7;
`,Cm=X.button`
  padding: 0.9rem 1.8rem;
  background: ${r=>r.$disabled?"#e2e8f0":"linear-gradient(135deg, var(--primary) 0%, #4CAF50 100%)"};
  color: ${r=>r.$disabled?"#a0aec0":"white"};
  border: none;
  border-radius: 8px;
  cursor: ${r=>r.$disabled?"not-allowed":"pointer"};
  font-weight: 500;
  font-size: 1rem;
  transition: all 0.2s ease;
  box-shadow: ${r=>r.$disabled?"none":"0 2px 4px rgba(0, 0, 0, 0.1)"};
  
  &:not(:disabled):hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  &:not(:disabled):active {
    transform: translateY(0);
  }
`,uV=X.div`
  margin-top: 2rem;
`,cV=X.textarea`
  width: 100%;
  min-height: 180px;
  padding: 1.2rem;
  margin: 1rem 0;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  font-size: 1.1rem;
  resize: vertical;
  transition: all 0.2s ease;
  background-color: white;
  color: #2d3748;
  line-height: 1.5;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.15);
  }
  
  &::placeholder {
    color: #a0aec0;
  }
`,hV=X.div`
  background-color: white;
  padding: 1.5rem;
  border-radius: 12px;
  margin-top: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
`,fV=X.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin: 1rem 0;
`,dV=X.div`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: ${r=>r.$filled?"#4CAF50":"#e2e8f0"};
  transition: all 0.3s ease;
  
  ${r=>r.$filled&&`
    animation: fillIn 0.3s ease;
    @keyframes fillIn {
      0% { transform: scale(0.8); }
      50% { transform: scale(1.1); }
      100% { transform: scale(1); }
    }
  `}
`,pV=X.div`
  text-align: center;
  color: #4a5568;
  font-size: 1rem;
  margin-top: 0.5rem;
  
  span {
    color: ${r=>r.complete?"#276749":"#4a5568"};
    font-weight: 600;
  }
`,mV=X.div`
  color: #276749;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem;
  background-color: #f0fff4;
  border-radius: 8px;
  margin-top: 1rem;
  
  span {
    font-size: 1.4rem;
  }
`;X.div`
  color: #d32f2f;
  margin-top: 0.5rem;
  font-size: 0.875rem;
`;const pA=({open:r,onClose:e,jobType:t})=>{const{jobType:s}=AR(),o=$o(),u=t||s,[h,p]=j.useState(null),[m,g]=j.useState(0),[v,b]=j.useState(!0),[w,I]=j.useState(null),[C,z]=j.useState(""),[U,$]=j.useState(!1),[Z,Y]=j.useState([]),[H,ee]=j.useState({answerWords:[],hasWordSpam:!1});j.useEffect(()=>{(async()=>{if(!u){b(!1);return}try{b(!0);const R=await XP(u);console.log("Fetched interview data:",R),R?(p(R),I(null)):I(`No interview questions found for ${u} jobs.`)}catch(R){console.error("Error fetching interview data:",R),I("Failed to load interview questions. Please try again later.")}finally{b(!1)}})()},[u]),j.useEffect(()=>{z(""),$(!1)},[m]);const ue=V=>{if(!V||!(h!=null&&h.questions[m]))return;const R=h.questions[m].keyWords;if(!R||!Array.isArray(R))return;const Ce=V.toLowerCase().replace(/[.,!?]/g,"").split(/\s+/).filter(le=>le.length>2),je={};Ce.forEach(le=>{je[le]=(je[le]||0)+1});const J=4,ce=Object.entries(je).filter(([le,oe])=>oe>J).map(([le])=>le),me=ce.length>0;if(me)return $(!1),Y([]),{answerWords:Ce,hasWordSpam:me,spamWords:ce};const Te=(le,oe)=>{if(le===oe||le.includes(oe)||oe.includes(le))return!0;const ge=[le,le.replace(/ing$/,""),le.replace(/ed$/,""),le.replace(/s$/,""),le.replace(/es$/,"")],Re=[oe,oe.replace(/ing$/,""),oe.replace(/ed$/,""),oe.replace(/s$/,""),oe.replace(/es$/,"")];return ge.some(ye=>Re.some(et=>ye===et||ye.length>3&&et.length>3&&(ye.includes(et)||et.includes(ye))))},P=[...new Set(Ce)].filter(le=>R.some(oe=>Te(le,oe.toLowerCase())));console.log("Answer words:",Ce),console.log("Keywords:",R),console.log("Matching words:",P);const ie=P.length>=6;return $(ie),Y(P),{answerWords:Ce,hasWordSpam:!1,matchedKeywords:P}},N=V=>{const R=V.target.value;z(R);const Ce=ue(R);ee(Ce)},x=()=>{m<h.questions.length-1?g(m+1):o("/")},D=()=>{m>0&&g(m-1)},k=()=>{e?e():o("/")};if(v)return S.jsx("div",{children:"Loading interview questions..."});if(w)return S.jsx("div",{children:w});if(!h||!h.questions||h.questions.length===0)return S.jsx("div",{children:"No interview questions available."});const M=h.questions[m];return console.log("Current question:",M),S.jsxs(WP,{children:[S.jsxs(JP,{children:[S.jsx("h2",{children:h.title}),S.jsx("p",{children:h.description}),S.jsx(ZP,{children:S.jsx(eV,{$progress:(m+1)/h.questions.length*100})})]}),S.jsxs(rV,{children:[S.jsxs(tV,{children:[S.jsxs("h3",{children:["Question ",m+1]}),S.jsxs("span",{children:[m+1," of ",h.questions.length]})]}),S.jsx(nV,{children:M.question}),S.jsxs(iV,{children:[S.jsx(sV,{children:"Tips:"}),S.jsx(aV,{children:M.tips&&M.tips.map((V,R)=>S.jsx(oV,{children:V},R))})]}),S.jsxs(uV,{children:[S.jsx(cV,{value:C,onChange:N,placeholder:"Include at least 6 relevant keywords in your answer."}),S.jsxs(hV,{children:[!U&&C.length>0&&S.jsxs(S.Fragment,{children:[S.jsx("div",{style:{textAlign:"center",color:"#4a5568",marginBottom:"0.5rem"},children:H.hasWordSpam?"Please avoid repeating words excessively":"Include more relevant keywords in your answer"}),S.jsx(fV,{children:Array(6).fill(0).map((V,R)=>S.jsx(dV,{$filled:R<Z.length},R))}),S.jsx(pV,{complete:!1,children:S.jsxs("div",{children:[S.jsx("span",{children:6-Z.length})," more keywords needed"]})})]}),U&&S.jsxs(mV,{children:[S.jsx("span",{children:"✨"}),"Excellent! Your answer includes all the required keywords."]})]})]})]}),S.jsxs(lV,{children:[S.jsx(Cm,{onClick:D,$disabled:m===0,children:"← Previous"}),m<h.questions.length-1?S.jsx(Cm,{onClick:x,$disabled:!U,children:"Next →"}):S.jsx(Cm,{onClick:k,$disabled:!U,children:"Finish"})]})]})},gV=X.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`,Qb=X.div`
  margin-bottom: 2rem;
`,yV=X.ul`
  list-style: none;
  padding: 0;
`,vV=X.li`
  margin-bottom: 1rem;
  padding: 1rem;
  background-color: var(--background-secondary);
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,_V=X.div`
  display: flex;
  gap: 1rem;
`,Dm=X.button`
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: white;
  
  &.remove {
    background-color: var(--danger);
  }
  
  &.practice {
    background-color: var(--primary);
  }

  &.message {
    background-color: var(--primary);
  }
`,EV=X.button`
  background-color: var(--danger);
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 2rem;
`,bV=X.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`,TV=X.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  width: 90%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
`,wV=X.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;

  &:hover {
    color: #333;
  }
`,SV=()=>{var ee;const{currentUser:r,logout:e}=Pr(),[t,s]=j.useState(null),[o,u]=j.useState(!0),[h,p]=j.useState(null),[m,g]=j.useState(!1),[v,b]=j.useState(null),[w,I]=j.useState(!1),[C,z]=j.useState(null),U=$o();j.useEffect(()=>{(async()=>{if(!r){u(!1);return}try{u(!0);const N=await oP(r.uid);s(N),p(null)}catch(N){console.error("Error fetching user profile:",N),p("Failed to load profile data.")}finally{u(!1)}})()},[r]);const $=async ue=>{try{await cP(r.uid,ue),s({...t,savedJobs:t.savedJobs.filter(N=>N.id!==ue.id)})}catch(N){console.error("Error removing job:",N)}},Z=ue=>{const N={"sales associate":"sales","sales representative":"sales","customer service representative":"customer-service","customer service agent":"customer-service","web developer":"web-developer","frontend developer":"web-developer","backend developer":"web-developer","administrative assistant":"admin","office administrator":"admin","data entry clerk":"data-entry","data entry specialist":"data-entry","social media manager":"social-media","social media specialist":"social-media"},x=ue.title.toLowerCase(),D=N[x]||x.replace(/\s+/g,"-");b(D),g(!0)},Y=ue=>{z(ue),I(!0)},H=async()=>{try{await e(),U("/login")}catch(ue){console.error("Error logging out:",ue)}};return o?S.jsx("div",{children:"Loading profile..."}):h?S.jsx("div",{children:h}):r?S.jsxs(gV,{children:[S.jsx("h2",{children:"My Profile"}),S.jsxs(Qb,{children:[S.jsx("h3",{children:"Account Information"}),S.jsxs("p",{children:[S.jsx("strong",{children:"Name:"})," ",(t==null?void 0:t.name)||"Not provided"]}),S.jsxs("p",{children:[S.jsx("strong",{children:"Email:"})," ",r.email]}),S.jsxs("p",{children:[S.jsx("strong",{children:"Member since:"})," ",t!=null&&t.createdAt?new Date(t.createdAt).toLocaleDateString():"Recently"]})]}),S.jsxs(Qb,{children:[S.jsx("h3",{children:"Saved Jobs"}),((ee=t==null?void 0:t.savedJobs)==null?void 0:ee.length)>0?S.jsx(yV,{children:t.savedJobs.map((ue,N)=>S.jsxs(vV,{children:[S.jsxs("div",{children:[S.jsx("strong",{children:ue.title})," at ",ue.company]}),S.jsxs(_V,{children:[S.jsx(Dm,{className:"practice",onClick:()=>Z(ue),children:"Practice Interview"}),S.jsx(Dm,{className:"message",onClick:()=>Y(ue),children:"Message"}),S.jsx(Dm,{className:"remove",onClick:()=>$(ue),children:"Remove"})]})]},N))}):S.jsx("p",{children:"You haven't saved any jobs yet."})]}),S.jsx(EV,{onClick:H,children:"Logout"}),m&&v&&S.jsx(pA,{jobType:v,open:m,onClose:()=>g(!1)}),w&&C&&S.jsx(bV,{children:S.jsxs(TV,{children:[S.jsx(wV,{onClick:()=>I(!1),children:"×"}),S.jsxs("h3",{children:["Messaging about ",C.title]}),S.jsx(rd,{applicationId:C.id,senderId:r.uid,receiverId:C.employerId})]})})]}):(U("/login"),null)},AV=X.div`
  width: 100%;
  max-width: 1400px;
  margin: 2rem auto;
  padding: 1rem;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`,RV=X.form`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`,Ji=X.div`
  margin-bottom: 1rem;
`,Zi=X.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
`,Nm=X.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
`,km=X.textarea`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 100px;
`,Yb=X.select`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  background-color: white;
`,Yh=X.button`
  padding: 0.8rem 1.5rem;
  background-color: var(--primary);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #1a4314;
  }

  &.delete {
    background-color: var(--danger);
  }
`,IV=X.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 2rem;
  width: 100%;
`,xV=X.div`
  background-color: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 100%;

  h4 {
    margin: 0;
    font-size: 1.2rem;
    color: var(--primary);
  }

  p {
    margin: 0.5rem 0;
    font-size: 0.95rem;
  }
`;X.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
  align-items: center;
`;const CV=X.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  margin: 1rem 0;

  p {
    margin: 0;
    min-width: 200px;
  }
`,DV=X.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;
`;X.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;const NV=X(Yh)`
  background-color: var(--danger);
  margin-top: 2rem;
  width: 100%;
  max-width: 200px;
  
  &:hover {
    background-color: #d32f2f;
  }
`,kV=X.div`
  margin-top: 1rem;
  border-top: 1px solid #eee;
  padding-top: 1rem;
`,OV=X.div`
  padding: 1rem;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;

  &:last-child {
    border-bottom: none;
  }
`,MV=X.div`
  flex: 1;
`,Xb=X.button`
  background-color: var(--primary);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  white-space: nowrap;
  height: fit-content;

  &:hover {
    background-color: #1a4314;
  }
`,PV=X.h3`
  margin: 2rem 0 1rem;
  color: var(--primary);
  font-size: 1.5rem;
`,VV=X.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`,LV=X.h2`
  color: var(--primary);
  margin-bottom: 2rem;
`,UV=X.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`,jV=X.h3`
  margin: 0 0 1rem 0;
  color: var(--primary);
`,zV=X.div`
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: #666;
`,qV=X.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`,BV=X.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  width: 90%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative; /* Ensure position relative for absolute positioning of close button */
`,HV=X.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #f0f0f0;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  font-size: 1.5rem;
  line-height: 1;
  cursor: pointer;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10; /* Ensure button is above other content */

  &:hover {
    background: #ddd;
    color: #000;
  }
`,FV=()=>{const{currentUser:r,logout:e}=Pr(),[t,s]=j.useState([]),[o,u]=j.useState(!0),[h,p]=j.useState(!1),[m,g]=j.useState(null),[v,b]=j.useState({title:"",description:"",location:"",type:"Full-time",salary:"",requirements:"",benefits:"",category:"customer-service"}),[w,I]=j.useState({}),[C,z]=j.useState([]),[U,$]=j.useState(null),[Z,Y]=j.useState(!1);j.useEffect(()=>{H()},[r]);const H=async()=>{if(r){const[k,M]=await Promise.all([iP(r.uid),kO(r.uid)]);if(M)g(M);else{const R=await zS(r.uid,{companyName:r.displayName||"Default Company Name",email:r.email,phone:"",address:"",website:"",description:""});g(R)}s(k);const V={};await Promise.all(k.map(async R=>{const Ce=await hP(R.id),je=await Promise.all(Ce.map(async J=>{const ce=pn(Ye,"users",J.userId),Te=(await vs(ce)).data()||{};return{...J,applicantName:Te.name||"Anonymous User",applicantEmail:Te.email||"No email provided"}}));V[R.id]=je})),I(V),u(!1)}},ee=k=>{const{name:M,value:V}=k.target;b(R=>({...R,[M]:V}))},ue=async k=>{k.preventDefault();try{if(!m)throw new Error("Employer profile not found");const M={...v,employerId:r.uid,company:m.companyName,requirements:v.requirements?v.requirements.split(",").map(V=>V.trim()):[],benefits:v.benefits?v.benefits.split(",").map(V=>V.trim()):[]};await sP(M),await H(),p(!1),b({title:"",description:"",location:"",type:"Full-time",salary:"",requirements:"",benefits:"",category:"customer-service"})}catch(M){console.error("Error posting job:",M)}},N=async k=>{if(window.confirm("Are you sure you want to delete this job posting?"))try{await aP(k),await H()}catch(M){console.error("Error deleting job:",M)}},x=async()=>{try{await e()}catch(k){console.error("Error logging out:",k)}};j.useEffect(()=>{(async()=>{if(!(r!=null&&r.uid))return;const M=dn(Ye,"applications"),V=sr(M,Ft("employerId","==",r.uid));try{const R=await ur(V),Ce=await Promise.all(R.docs.map(async je=>{const J=je.data(),ce=je(Ye,"users",J.userId),Te=(await vs(ce)).data()||{};return{id:je.id,...J,applicantId:J.userId,applicantName:Te.name||"Anonymous User",applicantEmail:Te.email||"No email provided"}}));z(Ce)}catch(R){console.error("Error fetching applications:",R)}})()},[r]);const D=k=>{console.log("Opening message modal for application:",k),$(k),Y(!0)};return o?S.jsx("div",{children:"Loading..."}):S.jsxs(AV,{children:[S.jsx("h2",{children:"Employer Dashboard"}),S.jsx(Yh,{onClick:()=>p(!h),style:{marginBottom:"2rem"},children:h?"Cancel":"Post New Job"}),h&&S.jsxs(RV,{onSubmit:ue,children:[S.jsxs(Ji,{children:[S.jsx(Zi,{children:"Job Title"}),S.jsx(Nm,{type:"text",name:"title",value:v.title,onChange:ee,required:!0})]}),S.jsxs(Ji,{children:[S.jsx(Zi,{children:"Job Description"}),S.jsx(km,{name:"description",value:v.description,onChange:ee,required:!0})]}),S.jsxs(Ji,{children:[S.jsx(Zi,{children:"Location"}),S.jsx(Nm,{type:"text",name:"location",value:v.location,onChange:ee,required:!0})]}),S.jsxs(Ji,{children:[S.jsx(Zi,{children:"Job Type"}),S.jsxs(Yb,{name:"type",value:v.type,onChange:ee,required:!0,children:[S.jsx("option",{value:"Full-time",children:"Full-time"}),S.jsx("option",{value:"Part-time",children:"Part-time"}),S.jsx("option",{value:"Contract",children:"Contract"}),S.jsx("option",{value:"Internship",children:"Internship"})]})]}),S.jsxs(Ji,{children:[S.jsx(Zi,{children:"Category"}),S.jsxs(Yb,{name:"category",value:v.category,onChange:ee,required:!0,children:[S.jsx("option",{value:"customer-service",children:"Customer Service"}),S.jsx("option",{value:"web-developer",children:"Web Developer"}),S.jsx("option",{value:"sales",children:"Sales"}),S.jsx("option",{value:"admin",children:"Administrative"}),S.jsx("option",{value:"data-entry",children:"Data Entry"}),S.jsx("option",{value:"social-media",children:"Social Media"})]})]}),S.jsxs(Ji,{children:[S.jsx(Zi,{children:"Salary Range"}),S.jsx(Nm,{type:"text",name:"salary",value:v.salary,onChange:ee,placeholder:"e.g. $30,000 - $40,000",required:!0})]}),S.jsxs(Ji,{children:[S.jsx(Zi,{children:"Requirements (comma-separated)"}),S.jsx(km,{name:"requirements",value:v.requirements,onChange:ee,placeholder:"e.g. High school diploma, Good communication skills, Basic computer knowledge",required:!0})]}),S.jsxs(Ji,{children:[S.jsx(Zi,{children:"Benefits (comma-separated)"}),S.jsx(km,{name:"benefits",value:v.benefits,onChange:ee,placeholder:"e.g. Health insurance, 401k, Paid time off",required:!0})]}),S.jsx(Yh,{type:"submit",children:"Post Job"})]}),S.jsx(PV,{children:"Your Job Postings"}),S.jsx(IV,{children:t.map(k=>{var M,V;return S.jsxs(xV,{children:[S.jsx("h4",{children:k.title}),S.jsxs(CV,{children:[S.jsxs("p",{children:[S.jsx("strong",{children:"Location:"})," ",k.location]}),S.jsxs("p",{children:[S.jsx("strong",{children:"Type:"})," ",k.type]}),S.jsxs("p",{children:[S.jsx("strong",{children:"Salary:"})," ",k.salary]}),S.jsxs("p",{children:[S.jsx("strong",{children:"Applications:"})," ",((M=w[k.id])==null?void 0:M.length)||0]})]}),S.jsx(kV,{children:(V=w[k.id])==null?void 0:V.map(R=>S.jsxs(OV,{children:[S.jsxs(MV,{children:[S.jsxs("h5",{children:["Application from ",R.applicantName]}),S.jsxs("p",{children:[S.jsx("strong",{children:"Email:"})," ",R.applicantEmail]}),S.jsxs("p",{children:[S.jsx("strong",{children:"Submitted:"})," ",new Date(R.submittedAt).toLocaleDateString()]}),S.jsx("p",{children:S.jsx("strong",{children:"Motivation Letter:"})}),S.jsx("p",{children:R.motivationLetter})]}),S.jsx(Xb,{onClick:()=>D(R),children:"Message Applicant"})]},R.id))}),S.jsx(DV,{children:S.jsx(Yh,{onClick:()=>N(k.id),className:"delete",children:"Delete"})})]},k.id)})}),S.jsx(NV,{onClick:x,children:"Logout"}),S.jsxs(VV,{children:[S.jsx(LV,{children:"Applications Received"}),S.jsx(UV,{children:C.map(k=>{var M;return S.jsxs(ApplicationCard,{children:[S.jsx(jV,{children:k.applicantName}),S.jsxs(zV,{children:[S.jsxs("p",{children:["Position: ",k.jobTitle]}),S.jsxs("p",{children:["Applied: ",new Date((M=k.timestamp)==null?void 0:M.toDate()).toLocaleDateString()]})]}),S.jsx(Xb,{onClick:()=>D(k),children:"Message Applicant"})]},k.id)})})]}),Z&&U&&S.jsx(qV,{children:S.jsxs(BV,{children:[S.jsx(HV,{onClick:()=>Y(!1),children:"×"}),S.jsxs("h3",{children:["Messaging ",U.applicantName]}),S.jsx(rd,{applicationId:U.id,senderId:r.uid,receiverId:U.userId||U.applicantId})]})})]})},Om=({children:r})=>{const{currentUser:e}=Pr();return e?r:S.jsx(jR,{to:"/login"})},$V=X.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  overflow: hidden;
  border: 1px solid #eaeaea;
  
  @media (max-width: 768px) {
    border-radius: 0;
    box-shadow: none;
    border: none;
    margin: 0;
    height: calc(100vh - 110px);
    display: flex;
    flex-direction: column;
    width: 100%; /* Use 100% instead of viewport units */
    max-width: 100%; /* Ensure no overflow */
    overflow-x: hidden; /* Prevent horizontal scrolling */
  }
`,GV=X.div`
  background: linear-gradient(to right, var(--primary), var(--primary-dark, #005a87));
  color: white;
  padding: 1rem 1.5rem;
  font-weight: bold;
  font-size: 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
  }
`,KV=X(Es)`
  color: white;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.2s;
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
  
  svg {
    width: 20px;
    height: 20px;
  }
`,QV=X.div`
  padding: 0;
  border-right: 1px solid #eee;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  
  @media (max-width: 768px) {
    display: ${r=>r.$hideOnMobile?"none":"block"};
  }
`,YV=X.div`
  padding: 1rem;
  border-bottom: 1px solid #eee;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: ${r=>r.$active?"#f4f6f8":r.$unread?"#f0f7ff":"white"};
  
  &:hover {
    background-color: #f4f6f8;
  }
`,XV=X.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2rem;
  color: #666;
`,WV=X.div`
  flex: 1;
`,JV=X.div`
  font-weight: ${r=>r.$unread?"bold":"normal"};
  margin-bottom: 0.3rem;
`,ZV=X.div`
  font-size: 0.9rem;
  color: #666;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
`,e4=X.div`
  background-color: var(--primary);
  color: white;
  border-radius: 50%;
  min-width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: bold;
`,t4=X.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  height: 70vh;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    height: 100%; /* Take full height of container */
    flex: 1; /* Allow container to expand */
  }
`,n4=X.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  color: #666;
  font-style: italic;
`,r4=X.div`
  font-size: 0.75rem;
  color: #999;
  margin-top: 0.3rem;
`,i4=X.div`
  height: 100%;
  overflow: hidden;
  
  @media (max-width: 768px) {
    flex: 1; /* Allow container to expand */
  }
`,s4=X.div`
  font-size: 0.75rem;
  color: #666;
  margin-top: 0.2rem;
`,a4=X.button`
  background: transparent;
  border: none;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  display: none;
  align-items: center;
  gap: 5px;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
  
  @media (max-width: 768px) {
    display: ${r=>r.$show?"flex":"none"};
  }
`,o4=X.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  border-bottom: 1px solid #eee;
  background-color: #f8f9fa;

  @media (min-width: 769px) {
    display: none;
  }
  
  h3 {
    margin: 0;
    font-size: 1rem;
  }
`,l4=()=>{const{currentUser:r}=Pr(),{refreshUnreadCount:e}=Ey(),[t,s]=j.useState([]),[o,u]=j.useState({}),[h,p]=j.useState({}),[m,g]=j.useState(!0),[v,b]=j.useState(null),[w,I]=j.useState(!0),C=async()=>{if(r!=null&&r.uid)try{g(!0),console.log("Fetching conversations for user:",r.uid);const H=await BS(r.uid);s(H);const ue=[...new Set(H.map(R=>R.otherUserId))].map(async R=>{const Ce=await lP(R);return{[R]:Ce}}),x=[...new Set(H.map(R=>R.applicationId).filter(R=>R&&R!=="default"))].map(async R=>{try{const Ce=await fP(R);return{[R]:Ce}}catch(Ce){return console.error(`Error fetching application ${R}:`,Ce),{[R]:null}}}),[D,k]=await Promise.all([Promise.all(ue),Promise.all(x)]),M=D.reduce((R,Ce)=>({...R,...Ce}),{}),V=k.reduce((R,Ce)=>({...R,...Ce}),{});u(M),p(V),r!=null&&r.uid&&e(r.uid)}catch(H){console.error("Error fetching conversations:",H)}finally{g(!1)}};j.useEffect(()=>{C();const H=setInterval(()=>{C()},3e4);return()=>clearInterval(H)},[r]);const z=async H=>{b(H),window.innerWidth<=768&&I(!1),H.unread>0&&(await MO(r.uid,H.otherUserId,H.applicationId),s(t.map(ee=>ee.id===H.id?{...ee,unread:0}:ee)),e(r.uid))},U=H=>{if(!H)return"";let ee;H instanceof dt?ee=H.toDate():H.seconds?ee=new Date(H.seconds*1e3):H instanceof Date?ee=H:ee=new Date(H);const ue=new Date;return ee.toDateString()===ue.toDateString()?ee.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):ee.getFullYear()===ue.getFullYear()?ee.toLocaleDateString([],{month:"short",day:"numeric"}):ee.toLocaleDateString([],{year:"numeric",month:"short",day:"numeric"})},$=H=>H.split(" ").map(ee=>ee[0]).join("").toUpperCase().slice(0,2),Z=()=>{I(!0)},Y=()=>{if(!v)return"";const H=o[v.otherUserId]||{};return H.displayName||H.companyName||"Unknown User"};return S.jsxs($V,{children:[S.jsxs(GV,{children:["Messages",S.jsx(a4,{onClick:Z,$show:!w&&v,children:"← Back to Messages"}),S.jsx(KV,{to:"/profile",children:S.jsx("svg",{viewBox:"0 0 24 24",children:S.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"})})})]}),S.jsxs(t4,{children:[S.jsx(QV,{$hideOnMobile:!w,children:m?S.jsx("div",{style:{padding:"1rem"},children:"Loading conversations..."}):t.length===0?S.jsxs("div",{style:{padding:"1rem"},children:["No conversations yet.",S.jsx("div",{style:{marginTop:"0.5rem",fontSize:"0.9rem",color:"#666"},children:"If you've sent messages before, they might be stored with different user IDs."})]}):t.map(H=>{const ee=o[H.otherUserId]||{},ue=ee.displayName||ee.companyName||"Unknown User",N=h[H.applicationId];return S.jsxs(YV,{onClick:()=>z(H),$active:(v==null?void 0:v.id)===H.id,$unread:H.unread>0,children:[S.jsx(XV,{children:$(ue)}),S.jsxs(WV,{children:[S.jsx(JV,{$unread:H.unread>0,children:ue}),N&&S.jsxs(s4,{children:["Re: ",N.jobTitle||"Job Application"]}),S.jsx(ZV,{children:H.content}),S.jsx(r4,{children:U(H.timestamp)})]}),H.unread>0&&S.jsx(e4,{children:H.unread})]},`${H.applicationId}-${H.otherUserId}`)})}),S.jsx(i4,{children:v?S.jsxs(S.Fragment,{children:[!w&&S.jsx(o4,{children:S.jsx("h3",{children:Y()})}),S.jsx(rd,{applicationId:v.applicationId,senderId:r.uid,receiverId:v.otherUserId})]}):S.jsx(n4,{children:"Select a conversation to start messaging"})})]})]})};function u4(){return S.jsx(cI,{children:S.jsx(OO,{children:S.jsx(PO,{children:S.jsxs("div",{className:"app",children:[S.jsx(YM,{}),S.jsx("main",{className:"main-content",children:S.jsxs(qR,{children:[S.jsx(es,{path:"/",element:S.jsx(LP,{})}),S.jsx(es,{path:"/login",element:S.jsx(BP,{})}),S.jsx(es,{path:"/register",element:S.jsx(QP,{})}),S.jsx(es,{path:"/profile",element:S.jsx(Om,{children:S.jsx(SV,{})})}),S.jsx(es,{path:"/employer/dashboard",element:S.jsx(Om,{children:S.jsx(FV,{})})}),S.jsx(es,{path:"/messages",element:S.jsx(Om,{children:S.jsx(l4,{})})}),S.jsx(es,{path:"/interview/:jobType",element:S.jsx(pA,{})})]})}),S.jsx(nP,{})]})})})})}Y1.createRoot(document.getElementById("root")).render(S.jsx(Ro.StrictMode,{children:S.jsx(u4,{})}));
