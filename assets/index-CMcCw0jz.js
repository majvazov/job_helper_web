(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();function GT(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var em={exports:{}},lu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D0;function O1(){if(D0)return lu;D0=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(s,o,u){var h=null;if(u!==void 0&&(h=""+u),o.key!==void 0&&(h=""+o.key),"key"in o){u={};for(var p in o)p!=="key"&&(u[p]=o[p])}else u=o;return o=u.ref,{$$typeof:r,type:s,key:h,ref:o!==void 0?o:null,props:u}}return lu.Fragment=e,lu.jsx=t,lu.jsxs=t,lu}var N0;function k1(){return N0||(N0=1,em.exports=O1()),em.exports}var A=k1(),tm={exports:{}},xe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O0;function M1(){if(O0)return xe;O0=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),b=Symbol.iterator;function w(M){return M===null||typeof M!="object"?null:(M=b&&M[b]||M["@@iterator"],typeof M=="function"?M:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N=Object.assign,G={};function U(M,ee,ae){this.props=M,this.context=ee,this.refs=G,this.updater=ae||C}U.prototype.isReactComponent={},U.prototype.setState=function(M,ee){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,ee,"setState")},U.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function H(){}H.prototype=U.prototype;function J(M,ee,ae){this.props=M,this.context=ee,this.refs=G,this.updater=ae||C}var Q=J.prototype=new H;Q.constructor=J,N(Q,U.prototype),Q.isPureReactComponent=!0;var le=Array.isArray,oe={H:null,A:null,T:null,S:null,V:null},ue=Object.prototype.hasOwnProperty;function D(M,ee,ae,se,ge,Re){return ae=Re.ref,{$$typeof:r,type:M,key:ee,ref:ae!==void 0?ae:null,props:Re}}function R(M,ee){return D(M.type,ee,void 0,void 0,void 0,M.props)}function x(M){return typeof M=="object"&&M!==null&&M.$$typeof===r}function O(M){var ee={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(ae){return ee[ae]})}var P=/\/+/g;function L(M,ee){return typeof M=="object"&&M!==null&&M.key!=null?O(""+M.key):ee.toString(36)}function I(){}function Ge(M){switch(M.status){case"fulfilled":return M.value;case"rejected":throw M.reason;default:switch(typeof M.status=="string"?M.then(I,I):(M.status="pending",M.then(function(ee){M.status==="pending"&&(M.status="fulfilled",M.value=ee)},function(ee){M.status==="pending"&&(M.status="rejected",M.reason=ee)})),M.status){case"fulfilled":return M.value;case"rejected":throw M.reason}}throw M}function Ue(M,ee,ae,se,ge){var Re=typeof M;(Re==="undefined"||Re==="boolean")&&(M=null);var ye=!1;if(M===null)ye=!0;else switch(Re){case"bigint":case"string":case"number":ye=!0;break;case"object":switch(M.$$typeof){case r:case e:ye=!0;break;case _:return ye=M._init,Ue(ye(M._payload),ee,ae,se,ge)}}if(ye)return ge=ge(M),ye=se===""?"."+L(M,0):se,le(ge)?(ae="",ye!=null&&(ae=ye.replace(P,"$&/")+"/"),Ue(ge,ee,ae,"",function(Vt){return Vt})):ge!=null&&(x(ge)&&(ge=R(ge,ae+(ge.key==null||M&&M.key===ge.key?"":(""+ge.key).replace(P,"$&/")+"/")+ye)),ee.push(ge)),1;ye=0;var Ze=se===""?".":se+":";if(le(M))for(var He=0;He<M.length;He++)se=M[He],Re=Ze+L(se,He),ye+=Ue(se,ee,ae,Re,ge);else if(He=w(M),typeof He=="function")for(M=He.call(M),He=0;!(se=M.next()).done;)se=se.value,Re=Ze+L(se,He++),ye+=Ue(se,ee,ae,Re,ge);else if(Re==="object"){if(typeof M.then=="function")return Ue(Ge(M),ee,ae,se,ge);throw ee=String(M),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.")}return ye}function X(M,ee,ae){if(M==null)return M;var se=[],ge=0;return Ue(M,se,"","",function(Re){return ee.call(ae,Re,ge++)}),se}function ce(M){if(M._status===-1){var ee=M._result;ee=ee(),ee.then(function(ae){(M._status===0||M._status===-1)&&(M._status=1,M._result=ae)},function(ae){(M._status===0||M._status===-1)&&(M._status=2,M._result=ae)}),M._status===-1&&(M._status=0,M._result=ee)}if(M._status===1)return M._result.default;throw M._result}var me=typeof reportError=="function"?reportError:function(M){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ee=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof M=="object"&&M!==null&&typeof M.message=="string"?String(M.message):String(M),error:M});if(!window.dispatchEvent(ee))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",M);return}console.error(M)};function be(){}return xe.Children={map:X,forEach:function(M,ee,ae){X(M,function(){ee.apply(this,arguments)},ae)},count:function(M){var ee=0;return X(M,function(){ee++}),ee},toArray:function(M){return X(M,function(ee){return ee})||[]},only:function(M){if(!x(M))throw Error("React.Children.only expected to receive a single React element child.");return M}},xe.Component=U,xe.Fragment=t,xe.Profiler=o,xe.PureComponent=J,xe.StrictMode=s,xe.Suspense=m,xe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=oe,xe.__COMPILER_RUNTIME={__proto__:null,c:function(M){return oe.H.useMemoCache(M)}},xe.cache=function(M){return function(){return M.apply(null,arguments)}},xe.cloneElement=function(M,ee,ae){if(M==null)throw Error("The argument must be a React element, but you passed "+M+".");var se=N({},M.props),ge=M.key,Re=void 0;if(ee!=null)for(ye in ee.ref!==void 0&&(Re=void 0),ee.key!==void 0&&(ge=""+ee.key),ee)!ue.call(ee,ye)||ye==="key"||ye==="__self"||ye==="__source"||ye==="ref"&&ee.ref===void 0||(se[ye]=ee[ye]);var ye=arguments.length-2;if(ye===1)se.children=ae;else if(1<ye){for(var Ze=Array(ye),He=0;He<ye;He++)Ze[He]=arguments[He+2];se.children=Ze}return D(M.type,ge,void 0,void 0,Re,se)},xe.createContext=function(M){return M={$$typeof:h,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null},M.Provider=M,M.Consumer={$$typeof:u,_context:M},M},xe.createElement=function(M,ee,ae){var se,ge={},Re=null;if(ee!=null)for(se in ee.key!==void 0&&(Re=""+ee.key),ee)ue.call(ee,se)&&se!=="key"&&se!=="__self"&&se!=="__source"&&(ge[se]=ee[se]);var ye=arguments.length-2;if(ye===1)ge.children=ae;else if(1<ye){for(var Ze=Array(ye),He=0;He<ye;He++)Ze[He]=arguments[He+2];ge.children=Ze}if(M&&M.defaultProps)for(se in ye=M.defaultProps,ye)ge[se]===void 0&&(ge[se]=ye[se]);return D(M,Re,void 0,void 0,null,ge)},xe.createRef=function(){return{current:null}},xe.forwardRef=function(M){return{$$typeof:p,render:M}},xe.isValidElement=x,xe.lazy=function(M){return{$$typeof:_,_payload:{_status:-1,_result:M},_init:ce}},xe.memo=function(M,ee){return{$$typeof:g,type:M,compare:ee===void 0?null:ee}},xe.startTransition=function(M){var ee=oe.T,ae={};oe.T=ae;try{var se=M(),ge=oe.S;ge!==null&&ge(ae,se),typeof se=="object"&&se!==null&&typeof se.then=="function"&&se.then(be,me)}catch(Re){me(Re)}finally{oe.T=ee}},xe.unstable_useCacheRefresh=function(){return oe.H.useCacheRefresh()},xe.use=function(M){return oe.H.use(M)},xe.useActionState=function(M,ee,ae){return oe.H.useActionState(M,ee,ae)},xe.useCallback=function(M,ee){return oe.H.useCallback(M,ee)},xe.useContext=function(M){return oe.H.useContext(M)},xe.useDebugValue=function(){},xe.useDeferredValue=function(M,ee){return oe.H.useDeferredValue(M,ee)},xe.useEffect=function(M,ee,ae){var se=oe.H;if(typeof ae=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return se.useEffect(M,ee)},xe.useId=function(){return oe.H.useId()},xe.useImperativeHandle=function(M,ee,ae){return oe.H.useImperativeHandle(M,ee,ae)},xe.useInsertionEffect=function(M,ee){return oe.H.useInsertionEffect(M,ee)},xe.useLayoutEffect=function(M,ee){return oe.H.useLayoutEffect(M,ee)},xe.useMemo=function(M,ee){return oe.H.useMemo(M,ee)},xe.useOptimistic=function(M,ee){return oe.H.useOptimistic(M,ee)},xe.useReducer=function(M,ee,ae){return oe.H.useReducer(M,ee,ae)},xe.useRef=function(M){return oe.H.useRef(M)},xe.useState=function(M){return oe.H.useState(M)},xe.useSyncExternalStore=function(M,ee,ae){return oe.H.useSyncExternalStore(M,ee,ae)},xe.useTransition=function(){return oe.H.useTransition()},xe.version="19.1.0",xe}var k0;function cg(){return k0||(k0=1,tm.exports=M1()),tm.exports}var z=cg();const So=GT(z);var nm={exports:{}},uu={},rm={exports:{}},im={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M0;function P1(){return M0||(M0=1,function(r){function e(X,ce){var me=X.length;X.push(ce);e:for(;0<me;){var be=me-1>>>1,M=X[be];if(0<o(M,ce))X[be]=ce,X[me]=M,me=be;else break e}}function t(X){return X.length===0?null:X[0]}function s(X){if(X.length===0)return null;var ce=X[0],me=X.pop();if(me!==ce){X[0]=me;e:for(var be=0,M=X.length,ee=M>>>1;be<ee;){var ae=2*(be+1)-1,se=X[ae],ge=ae+1,Re=X[ge];if(0>o(se,me))ge<M&&0>o(Re,se)?(X[be]=Re,X[ge]=me,be=ge):(X[be]=se,X[ae]=me,be=ae);else if(ge<M&&0>o(Re,me))X[be]=Re,X[ge]=me,be=ge;else break e}}return ce}function o(X,ce){var me=X.sortIndex-ce.sortIndex;return me!==0?me:X.id-ce.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var h=Date,p=h.now();r.unstable_now=function(){return h.now()-p}}var m=[],g=[],_=1,b=null,w=3,C=!1,N=!1,G=!1,U=!1,H=typeof setTimeout=="function"?setTimeout:null,J=typeof clearTimeout=="function"?clearTimeout:null,Q=typeof setImmediate<"u"?setImmediate:null;function le(X){for(var ce=t(g);ce!==null;){if(ce.callback===null)s(g);else if(ce.startTime<=X)s(g),ce.sortIndex=ce.expirationTime,e(m,ce);else break;ce=t(g)}}function oe(X){if(G=!1,le(X),!N)if(t(m)!==null)N=!0,ue||(ue=!0,L());else{var ce=t(g);ce!==null&&Ue(oe,ce.startTime-X)}}var ue=!1,D=-1,R=5,x=-1;function O(){return U?!0:!(r.unstable_now()-x<R)}function P(){if(U=!1,ue){var X=r.unstable_now();x=X;var ce=!0;try{e:{N=!1,G&&(G=!1,J(D),D=-1),C=!0;var me=w;try{t:{for(le(X),b=t(m);b!==null&&!(b.expirationTime>X&&O());){var be=b.callback;if(typeof be=="function"){b.callback=null,w=b.priorityLevel;var M=be(b.expirationTime<=X);if(X=r.unstable_now(),typeof M=="function"){b.callback=M,le(X),ce=!0;break t}b===t(m)&&s(m),le(X)}else s(m);b=t(m)}if(b!==null)ce=!0;else{var ee=t(g);ee!==null&&Ue(oe,ee.startTime-X),ce=!1}}break e}finally{b=null,w=me,C=!1}ce=void 0}}finally{ce?L():ue=!1}}}var L;if(typeof Q=="function")L=function(){Q(P)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,Ge=I.port2;I.port1.onmessage=P,L=function(){Ge.postMessage(null)}}else L=function(){H(P,0)};function Ue(X,ce){D=H(function(){X(r.unstable_now())},ce)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(X){X.callback=null},r.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<X?Math.floor(1e3/X):5},r.unstable_getCurrentPriorityLevel=function(){return w},r.unstable_next=function(X){switch(w){case 1:case 2:case 3:var ce=3;break;default:ce=w}var me=w;w=ce;try{return X()}finally{w=me}},r.unstable_requestPaint=function(){U=!0},r.unstable_runWithPriority=function(X,ce){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var me=w;w=X;try{return ce()}finally{w=me}},r.unstable_scheduleCallback=function(X,ce,me){var be=r.unstable_now();switch(typeof me=="object"&&me!==null?(me=me.delay,me=typeof me=="number"&&0<me?be+me:be):me=be,X){case 1:var M=-1;break;case 2:M=250;break;case 5:M=1073741823;break;case 4:M=1e4;break;default:M=5e3}return M=me+M,X={id:_++,callback:ce,priorityLevel:X,startTime:me,expirationTime:M,sortIndex:-1},me>be?(X.sortIndex=me,e(g,X),t(m)===null&&X===t(g)&&(G?(J(D),D=-1):G=!0,Ue(oe,me-be))):(X.sortIndex=M,e(m,X),N||C||(N=!0,ue||(ue=!0,L()))),X},r.unstable_shouldYield=O,r.unstable_wrapCallback=function(X){var ce=w;return function(){var me=w;w=ce;try{return X.apply(this,arguments)}finally{w=me}}}}(im)),im}var P0;function V1(){return P0||(P0=1,rm.exports=P1()),rm.exports}var sm={exports:{}},tn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V0;function L1(){if(V0)return tn;V0=1;var r=cg();function e(m){var g="https://react.dev/errors/"+m;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)g+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var s={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(m,g,_){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:b==null?null:""+b,children:m,containerInfo:g,implementation:_}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,g){if(m==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return tn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,tn.createPortal=function(m,g){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return u(m,g,null,_)},tn.flushSync=function(m){var g=h.T,_=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=g,s.p=_,s.d.f()}},tn.preconnect=function(m,g){typeof m=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(m,g))},tn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},tn.preinit=function(m,g){if(typeof m=="string"&&g&&typeof g.as=="string"){var _=g.as,b=p(_,g.crossOrigin),w=typeof g.integrity=="string"?g.integrity:void 0,C=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;_==="style"?s.d.S(m,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:b,integrity:w,fetchPriority:C}):_==="script"&&s.d.X(m,{crossOrigin:b,integrity:w,fetchPriority:C,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},tn.preinitModule=function(m,g){if(typeof m=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var _=p(g.as,g.crossOrigin);s.d.M(m,{crossOrigin:_,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&s.d.M(m)},tn.preload=function(m,g){if(typeof m=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var _=g.as,b=p(_,g.crossOrigin);s.d.L(m,_,{crossOrigin:b,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},tn.preloadModule=function(m,g){if(typeof m=="string")if(g){var _=p(g.as,g.crossOrigin);s.d.m(m,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:_,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else s.d.m(m)},tn.requestFormReset=function(m){s.d.r(m)},tn.unstable_batchedUpdates=function(m,g){return m(g)},tn.useFormState=function(m,g,_){return h.H.useFormState(m,g,_)},tn.useFormStatus=function(){return h.H.useHostTransitionStatus()},tn.version="19.1.0",tn}var L0;function U1(){if(L0)return sm.exports;L0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),sm.exports=L1(),sm.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U0;function j1(){if(U0)return uu;U0=1;var r=V1(),e=cg(),t=U1();function s(n){var i="https://react.dev/errors/"+n;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function u(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function h(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function p(n){if(u(n)!==n)throw Error(s(188))}function m(n){var i=n.alternate;if(!i){if(i=u(n),i===null)throw Error(s(188));return i!==n?null:n}for(var a=n,l=i;;){var f=a.return;if(f===null)break;var d=f.alternate;if(d===null){if(l=f.return,l!==null){a=l;continue}break}if(f.child===d.child){for(d=f.child;d;){if(d===a)return p(f),n;if(d===l)return p(f),i;d=d.sibling}throw Error(s(188))}if(a.return!==l.return)a=f,l=d;else{for(var E=!1,T=f.child;T;){if(T===a){E=!0,a=f,l=d;break}if(T===l){E=!0,l=f,a=d;break}T=T.sibling}if(!E){for(T=d.child;T;){if(T===a){E=!0,a=d,l=f;break}if(T===l){E=!0,l=d,a=f;break}T=T.sibling}if(!E)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?n:i}function g(n){var i=n.tag;if(i===5||i===26||i===27||i===6)return n;for(n=n.child;n!==null;){if(i=g(n),i!==null)return i;n=n.sibling}return null}var _=Object.assign,b=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),C=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),H=Symbol.for("react.provider"),J=Symbol.for("react.consumer"),Q=Symbol.for("react.context"),le=Symbol.for("react.forward_ref"),oe=Symbol.for("react.suspense"),ue=Symbol.for("react.suspense_list"),D=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),O=Symbol.for("react.memo_cache_sentinel"),P=Symbol.iterator;function L(n){return n===null||typeof n!="object"?null:(n=P&&n[P]||n["@@iterator"],typeof n=="function"?n:null)}var I=Symbol.for("react.client.reference");function Ge(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===I?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case N:return"Fragment";case U:return"Profiler";case G:return"StrictMode";case oe:return"Suspense";case ue:return"SuspenseList";case x:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case C:return"Portal";case Q:return(n.displayName||"Context")+".Provider";case J:return(n._context.displayName||"Context")+".Consumer";case le:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case D:return i=n.displayName||null,i!==null?i:Ge(n.type)||"Memo";case R:i=n._payload,n=n._init;try{return Ge(n(i))}catch{}}return null}var Ue=Array.isArray,X=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ce=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,me={pending:!1,data:null,method:null,action:null},be=[],M=-1;function ee(n){return{current:n}}function ae(n){0>M||(n.current=be[M],be[M]=null,M--)}function se(n,i){M++,be[M]=n.current,n.current=i}var ge=ee(null),Re=ee(null),ye=ee(null),Ze=ee(null);function He(n,i){switch(se(ye,i),se(Re,n),se(ge,null),i.nodeType){case 9:case 11:n=(n=i.documentElement)&&(n=n.namespaceURI)?i0(n):0;break;default:if(n=i.tagName,i=i.namespaceURI)i=i0(i),n=s0(i,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}ae(ge),se(ge,n)}function Vt(){ae(ge),ae(Re),ae(ye)}function Nn(n){n.memoizedState!==null&&se(Ze,n);var i=ge.current,a=s0(i,n.type);i!==a&&(se(Re,n),se(ge,a))}function fn(n){Re.current===n&&(ae(ge),ae(Re)),Ze.current===n&&(ae(Ze),ru._currentValue=me)}var Jt=Object.prototype.hasOwnProperty,_s=r.unstable_scheduleCallback,Es=r.unstable_cancelCallback,el=r.unstable_shouldYield,Qu=r.unstable_requestPaint,On=r.unstable_now,ed=r.unstable_getCurrentPriorityLevel,tl=r.unstable_ImmediatePriority,Ea=r.unstable_UserBlockingPriority,Ts=r.unstable_NormalPriority,td=r.unstable_LowPriority,Ta=r.unstable_IdlePriority,nl=r.log,Yu=r.unstable_setDisableYieldValue,dt=null,Xe=null;function En(n){if(typeof nl=="function"&&Yu(n),Xe&&typeof Xe.setStrictMode=="function")try{Xe.setStrictMode(dt,n)}catch{}}var Zt=Math.clz32?Math.clz32:bs,Xu=Math.log,nd=Math.LN2;function bs(n){return n>>>=0,n===0?32:31-(Xu(n)/nd|0)|0}var ws=256,Ss=4194304;function Yn(n){var i=n&42;if(i!==0)return i;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function ba(n,i,a){var l=n.pendingLanes;if(l===0)return 0;var f=0,d=n.suspendedLanes,E=n.pingedLanes;n=n.warmLanes;var T=l&134217727;return T!==0?(l=T&~d,l!==0?f=Yn(l):(E&=T,E!==0?f=Yn(E):a||(a=T&~n,a!==0&&(f=Yn(a))))):(T=l&~d,T!==0?f=Yn(T):E!==0?f=Yn(E):a||(a=l&~n,a!==0&&(f=Yn(a)))),f===0?0:i!==0&&i!==f&&(i&d)===0&&(d=f&-f,a=i&-i,d>=a||d===32&&(a&4194048)!==0)?i:f}function As(n,i){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&i)===0}function rl(n,i){switch(n){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function il(){var n=ws;return ws<<=1,(ws&4194048)===0&&(ws=256),n}function sl(){var n=Ss;return Ss<<=1,(Ss&62914560)===0&&(Ss=4194304),n}function Or(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function kr(n,i){n.pendingLanes|=i,i!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function al(n,i,a,l,f,d){var E=n.pendingLanes;n.pendingLanes=a,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=a,n.entangledLanes&=a,n.errorRecoveryDisabledLanes&=a,n.shellSuspendCounter=0;var T=n.entanglements,k=n.expirationTimes,F=n.hiddenUpdates;for(a=E&~a;0<a;){var W=31-Zt(a),te=1<<W;T[W]=0,k[W]=-1;var $=F[W];if($!==null)for(F[W]=null,W=0;W<$.length;W++){var K=$[W];K!==null&&(K.lane&=-536870913)}a&=~te}l!==0&&ur(n,l,0),d!==0&&f===0&&n.tag!==0&&(n.suspendedLanes|=d&~(E&~i))}function ur(n,i,a){n.pendingLanes|=i,n.suspendedLanes&=~i;var l=31-Zt(i);n.entangledLanes|=i,n.entanglements[l]=n.entanglements[l]|1073741824|a&4194090}function ol(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var l=31-Zt(a),f=1<<l;f&i|n[l]&i&&(n[l]|=i),a&=~f}}function _i(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function wa(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function Ei(){var n=ce.p;return n!==0?n:(n=window.event,n===void 0?32:S0(n.type))}function Wu(n,i){var a=ce.p;try{return ce.p=n,i()}finally{ce.p=a}}var lt=Math.random().toString(36).slice(2),Dt="__reactFiber$"+lt,bt="__reactProps$"+lt,kn="__reactContainer$"+lt,ll="__reactEvents$"+lt,rd="__reactListeners$"+lt,Ti="__reactHandles$"+lt,Ju="__reactResources$"+lt,Rs="__reactMarker$"+lt;function bi(n){delete n[Dt],delete n[bt],delete n[ll],delete n[rd],delete n[Ti]}function Mr(n){var i=n[Dt];if(i)return i;for(var a=n.parentNode;a;){if(i=a[kn]||a[Dt]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=u0(n);n!==null;){if(a=n[Dt])return a;n=u0(n)}return i}n=a,a=n.parentNode}return null}function cr(n){if(n=n[Dt]||n[kn]){var i=n.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return n}return null}function hr(n){var i=n.tag;if(i===5||i===26||i===27||i===6)return n.stateNode;throw Error(s(33))}function ln(n){var i=n[Ju];return i||(i=n[Ju]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function yt(n){n[Rs]=!0}var ul=new Set,Sa={};function Xn(n,i){Pr(n,i),Pr(n+"Capture",i)}function Pr(n,i){for(Sa[n]=i,n=0;n<i.length;n++)ul.add(i[n])}var Zu=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ec={},Is={};function tc(n){return Jt.call(Is,n)?!0:Jt.call(ec,n)?!1:Zu.test(n)?Is[n]=!0:(ec[n]=!0,!1)}function wi(n,i,a){if(tc(i))if(a===null)n.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":n.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){n.removeAttribute(i);return}}n.setAttribute(i,""+a)}}function fr(n,i,a){if(a===null)n.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(i);return}n.setAttribute(i,""+a)}}function Ft(n,i,a,l){if(l===null)n.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(a);return}n.setAttributeNS(i,a,""+l)}}var Cs,nc;function Vr(n){if(Cs===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);Cs=i&&i[1]||"",nc=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Cs+n+nc}var Aa=!1;function Ra(n,i){if(!n||Aa)return"";Aa=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var te=function(){throw Error()};if(Object.defineProperty(te.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(te,[])}catch(K){var $=K}Reflect.construct(n,[],te)}else{try{te.call()}catch(K){$=K}n.call(te.prototype)}}else{try{throw Error()}catch(K){$=K}(te=n())&&typeof te.catch=="function"&&te.catch(function(){})}}catch(K){if(K&&$&&typeof K.stack=="string")return[K.stack,$.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),E=d[0],T=d[1];if(E&&T){var k=E.split(`
`),F=T.split(`
`);for(f=l=0;l<k.length&&!k[l].includes("DetermineComponentFrameRoot");)l++;for(;f<F.length&&!F[f].includes("DetermineComponentFrameRoot");)f++;if(l===k.length||f===F.length)for(l=k.length-1,f=F.length-1;1<=l&&0<=f&&k[l]!==F[f];)f--;for(;1<=l&&0<=f;l--,f--)if(k[l]!==F[f]){if(l!==1||f!==1)do if(l--,f--,0>f||k[l]!==F[f]){var W=`
`+k[l].replace(" at new "," at ");return n.displayName&&W.includes("<anonymous>")&&(W=W.replace("<anonymous>",n.displayName)),W}while(1<=l&&0<=f);break}}}finally{Aa=!1,Error.prepareStackTrace=a}return(a=n?n.displayName||n.name:"")?Vr(a):""}function cl(n){switch(n.tag){case 26:case 27:case 5:return Vr(n.type);case 16:return Vr("Lazy");case 13:return Vr("Suspense");case 19:return Vr("SuspenseList");case 0:case 15:return Ra(n.type,!1);case 11:return Ra(n.type.render,!1);case 1:return Ra(n.type,!0);case 31:return Vr("Activity");default:return""}}function Ia(n){try{var i="";do i+=cl(n),n=n.return;while(n);return i}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function un(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function hl(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function id(n){var i=hl(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),l=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,d=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return f.call(this)},set:function(E){l=""+E,d.call(this,E)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(E){l=""+E},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Ca(n){n._valueTracker||(n._valueTracker=id(n))}function fl(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return n&&(l=hl(n)?n.checked?"true":"false":n.value),n=l,n!==a?(i.setValue(n),!0):!1}function xs(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var sd=/[\n"\\]/g;function wt(n){return n.replace(sd,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Tn(n,i,a,l,f,d,E,T){n.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?n.type=E:n.removeAttribute("type"),i!=null?E==="number"?(i===0&&n.value===""||n.value!=i)&&(n.value=""+un(i)):n.value!==""+un(i)&&(n.value=""+un(i)):E!=="submit"&&E!=="reset"||n.removeAttribute("value"),i!=null?Si(n,E,un(i)):a!=null?Si(n,E,un(a)):l!=null&&n.removeAttribute("value"),f==null&&d!=null&&(n.defaultChecked=!!d),f!=null&&(n.checked=f&&typeof f!="function"&&typeof f!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?n.name=""+un(T):n.removeAttribute("name")}function Ds(n,i,a,l,f,d,E,T){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(n.type=d),i!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||i!=null))return;a=a!=null?""+un(a):"",i=i!=null?""+un(i):a,T||i===n.value||(n.value=i),n.defaultValue=i}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,n.checked=T?n.checked:!!l,n.defaultChecked=!!l,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(n.name=E)}function Si(n,i,a){i==="number"&&xs(n.ownerDocument)===n||n.defaultValue===""+a||(n.defaultValue=""+a)}function Lr(n,i,a,l){if(n=n.options,i){i={};for(var f=0;f<a.length;f++)i["$"+a[f]]=!0;for(a=0;a<n.length;a++)f=i.hasOwnProperty("$"+n[a].value),n[a].selected!==f&&(n[a].selected=f),f&&l&&(n[a].defaultSelected=!0)}else{for(a=""+un(a),i=null,f=0;f<n.length;f++){if(n[f].value===a){n[f].selected=!0,l&&(n[f].defaultSelected=!0);return}i!==null||n[f].disabled||(i=n[f])}i!==null&&(i.selected=!0)}}function et(n,i,a){if(i!=null&&(i=""+un(i),i!==n.value&&(n.value=i),a==null)){n.defaultValue!==i&&(n.defaultValue=i);return}n.defaultValue=a!=null?""+un(a):""}function Ns(n,i,a,l){if(i==null){if(l!=null){if(a!=null)throw Error(s(92));if(Ue(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),i=a}a=un(i),n.defaultValue=a,l=n.textContent,l===a&&l!==""&&l!==null&&(n.value=l)}function Mn(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Os=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function rc(n,i,a){var l=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?n.setProperty(i,""):i==="float"?n.cssFloat="":n[i]="":l?n.setProperty(i,a):typeof a!="number"||a===0||Os.has(i)?i==="float"?n.cssFloat=a:n[i]=(""+a).trim():n[i]=a+"px"}function dl(n,i,a){if(i!=null&&typeof i!="object")throw Error(s(62));if(n=n.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?n.setProperty(l,""):l==="float"?n.cssFloat="":n[l]="");for(var f in i)l=i[f],i.hasOwnProperty(f)&&a[f]!==l&&rc(n,f,l)}else for(var d in i)i.hasOwnProperty(d)&&rc(n,d,i[d])}function pl(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ad=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),od=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function xa(n){return od.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var Ur=null;function Pn(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var jr=null,zr=null;function ml(n){var i=cr(n);if(i&&(n=i.stateNode)){var a=n[bt]||null;e:switch(n=i.stateNode,i.type){case"input":if(Tn(n,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+wt(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==n&&l.form===n.form){var f=l[bt]||null;if(!f)throw Error(s(90));Tn(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<a.length;i++)l=a[i],l.form===n.form&&fl(l)}break e;case"textarea":et(n,a.value,a.defaultValue);break e;case"select":i=a.value,i!=null&&Lr(n,!!a.multiple,i,!1)}}}var dr=!1;function ic(n,i,a){if(dr)return n(i,a);dr=!0;try{var l=n(i);return l}finally{if(dr=!1,(jr!==null||zr!==null)&&(Wc(),jr&&(i=jr,n=zr,zr=jr=null,ml(i),n)))for(i=0;i<n.length;i++)ml(n[i])}}function ks(n,i){var a=n.stateNode;if(a===null)return null;var l=a[bt]||null;if(l===null)return null;a=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(n=n.type,l=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!l;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(s(231,i,typeof a));return a}var Wn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vn=!1;if(Wn)try{var Ms={};Object.defineProperty(Ms,"passive",{get:function(){Vn=!0}}),window.addEventListener("test",Ms,Ms),window.removeEventListener("test",Ms,Ms)}catch{Vn=!1}var pr=null,Ai=null,qr=null;function gl(){if(qr)return qr;var n,i=Ai,a=i.length,l,f="value"in pr?pr.value:pr.textContent,d=f.length;for(n=0;n<a&&i[n]===f[n];n++);var E=a-n;for(l=1;l<=E&&i[a-l]===f[d-l];l++);return qr=f.slice(n,1<l?1-l:void 0)}function mr(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function gr(){return!0}function yl(){return!1}function Lt(n){function i(a,l,f,d,E){this._reactName=a,this._targetInst=f,this.type=l,this.nativeEvent=d,this.target=E,this.currentTarget=null;for(var T in n)n.hasOwnProperty(T)&&(a=n[T],this[T]=a?a(d):d[T]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?gr:yl,this.isPropagationStopped=yl,this}return _(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=gr)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=gr)},persist:function(){},isPersistent:gr}),i}var Ke={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Da=Lt(Ke),Ps=_({},Ke,{view:0,detail:0}),sc=Lt(Ps),Na,Oa,yr,Vs=_({},Ps,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:js,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==yr&&(yr&&n.type==="mousemove"?(Na=n.screenX-yr.screenX,Oa=n.screenY-yr.screenY):Oa=Na=0,yr=n),Na)},movementY:function(n){return"movementY"in n?n.movementY:Oa}}),Ln=Lt(Vs),ac=_({},Vs,{dataTransfer:0}),ld=Lt(ac),Ls=_({},Ps,{relatedTarget:0}),ka=Lt(Ls),vl=_({},Ke,{animationName:0,elapsedTime:0,pseudoElement:0}),Ma=Lt(vl),oc=_({},Ke,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Pa=Lt(oc),ud=_({},Ke,{data:0}),_l=Lt(ud),Us={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},uc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function El(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=uc[n])?!!i[n]:!1}function js(){return El}var cc=_({},Ps,{key:function(n){if(n.key){var i=Us[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=mr(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?lc[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:js,charCode:function(n){return n.type==="keypress"?mr(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?mr(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Va=Lt(cc),hc=_({},Vs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Tl=Lt(hc),Br=_({},Ps,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:js}),fc=Lt(Br),dc=_({},Ke,{propertyName:0,elapsedTime:0,pseudoElement:0}),pc=Lt(dc),mc=_({},Vs,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),La=Lt(mc),cn=_({},Ke,{newState:0,oldState:0}),gc=Lt(cn),yc=[9,13,27,32],vr=Wn&&"CompositionEvent"in window,c=null;Wn&&"documentMode"in document&&(c=document.documentMode);var y=Wn&&"TextEvent"in window&&!c,v=Wn&&(!vr||c&&8<c&&11>=c),S=" ",q=!1;function Y(n,i){switch(n){case"keyup":return yc.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function he(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var je=!1;function Nt(n,i){switch(n){case"compositionend":return he(i);case"keypress":return i.which!==32?null:(q=!0,S);case"textInput":return n=i.data,n===S&&q?null:n;default:return null}}function ze(n,i){if(je)return n==="compositionend"||!vr&&Y(n,i)?(n=gl(),qr=Ai=pr=null,je=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return v&&i.locale!=="ko"?null:i.data;default:return null}}var Ut={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ot(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Ut[n.type]:i==="textarea"}function Hr(n,i,a,l){jr?zr?zr.push(l):zr=[l]:jr=l,i=rh(i,"onChange"),0<i.length&&(a=new Da("onChange","change",null,a,l),n.push({event:a,listeners:i}))}var Gt=null,_r=null;function bl(n){Z_(n,0)}function vc(n){var i=hr(n);if(fl(i))return n}function Ey(n,i){if(n==="change")return i}var Ty=!1;if(Wn){var cd;if(Wn){var hd="oninput"in document;if(!hd){var by=document.createElement("div");by.setAttribute("oninput","return;"),hd=typeof by.oninput=="function"}cd=hd}else cd=!1;Ty=cd&&(!document.documentMode||9<document.documentMode)}function wy(){Gt&&(Gt.detachEvent("onpropertychange",Sy),_r=Gt=null)}function Sy(n){if(n.propertyName==="value"&&vc(_r)){var i=[];Hr(i,_r,n,Pn(n)),ic(bl,i)}}function lA(n,i,a){n==="focusin"?(wy(),Gt=i,_r=a,Gt.attachEvent("onpropertychange",Sy)):n==="focusout"&&wy()}function uA(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return vc(_r)}function cA(n,i){if(n==="click")return vc(i)}function hA(n,i){if(n==="input"||n==="change")return vc(i)}function fA(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var bn=typeof Object.is=="function"?Object.is:fA;function wl(n,i){if(bn(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var f=a[l];if(!Jt.call(i,f)||!bn(n[f],i[f]))return!1}return!0}function Ay(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Ry(n,i){var a=Ay(n);n=0;for(var l;a;){if(a.nodeType===3){if(l=n+a.textContent.length,n<=i&&l>=i)return{node:a,offset:i-n};n=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Ay(a)}}function Iy(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Iy(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Cy(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var i=xs(n.document);i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=xs(n.document)}return i}function fd(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}var dA=Wn&&"documentMode"in document&&11>=document.documentMode,Ua=null,dd=null,Sl=null,pd=!1;function xy(n,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;pd||Ua==null||Ua!==xs(l)||(l=Ua,"selectionStart"in l&&fd(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Sl&&wl(Sl,l)||(Sl=l,l=rh(dd,"onSelect"),0<l.length&&(i=new Da("onSelect","select",null,i,a),n.push({event:i,listeners:l}),i.target=Ua)))}function zs(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var ja={animationend:zs("Animation","AnimationEnd"),animationiteration:zs("Animation","AnimationIteration"),animationstart:zs("Animation","AnimationStart"),transitionrun:zs("Transition","TransitionRun"),transitionstart:zs("Transition","TransitionStart"),transitioncancel:zs("Transition","TransitionCancel"),transitionend:zs("Transition","TransitionEnd")},md={},Dy={};Wn&&(Dy=document.createElement("div").style,"AnimationEvent"in window||(delete ja.animationend.animation,delete ja.animationiteration.animation,delete ja.animationstart.animation),"TransitionEvent"in window||delete ja.transitionend.transition);function qs(n){if(md[n])return md[n];if(!ja[n])return n;var i=ja[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Dy)return md[n]=i[a];return n}var Ny=qs("animationend"),Oy=qs("animationiteration"),ky=qs("animationstart"),pA=qs("transitionrun"),mA=qs("transitionstart"),gA=qs("transitioncancel"),My=qs("transitionend"),Py=new Map,gd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");gd.push("scrollEnd");function Jn(n,i){Py.set(n,i),Xn(i,[n])}var Vy=new WeakMap;function Un(n,i){if(typeof n=="object"&&n!==null){var a=Vy.get(n);return a!==void 0?a:(i={value:n,source:i,stack:Ia(i)},Vy.set(n,i),i)}return{value:n,source:i,stack:Ia(i)}}var jn=[],za=0,yd=0;function _c(){for(var n=za,i=yd=za=0;i<n;){var a=jn[i];jn[i++]=null;var l=jn[i];jn[i++]=null;var f=jn[i];jn[i++]=null;var d=jn[i];if(jn[i++]=null,l!==null&&f!==null){var E=l.pending;E===null?f.next=f:(f.next=E.next,E.next=f),l.pending=f}d!==0&&Ly(a,f,d)}}function Ec(n,i,a,l){jn[za++]=n,jn[za++]=i,jn[za++]=a,jn[za++]=l,yd|=l,n.lanes|=l,n=n.alternate,n!==null&&(n.lanes|=l)}function vd(n,i,a,l){return Ec(n,i,a,l),Tc(n)}function qa(n,i){return Ec(n,null,null,i),Tc(n)}function Ly(n,i,a){n.lanes|=a;var l=n.alternate;l!==null&&(l.lanes|=a);for(var f=!1,d=n.return;d!==null;)d.childLanes|=a,l=d.alternate,l!==null&&(l.childLanes|=a),d.tag===22&&(n=d.stateNode,n===null||n._visibility&1||(f=!0)),n=d,d=d.return;return n.tag===3?(d=n.stateNode,f&&i!==null&&(f=31-Zt(a),n=d.hiddenUpdates,l=n[f],l===null?n[f]=[i]:l.push(i),i.lane=a|536870912),d):null}function Tc(n){if(50<Yl)throw Yl=0,Sp=null,Error(s(185));for(var i=n.return;i!==null;)n=i,i=n.return;return n.tag===3?n.stateNode:null}var Ba={};function yA(n,i,a,l){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wn(n,i,a,l){return new yA(n,i,a,l)}function _d(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Fr(n,i){var a=n.alternate;return a===null?(a=wn(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&65011712,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a.refCleanup=n.refCleanup,a}function Uy(n,i){n.flags&=65011714;var a=n.alternate;return a===null?(n.childLanes=0,n.lanes=i,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=a.childLanes,n.lanes=a.lanes,n.child=a.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=a.memoizedProps,n.memoizedState=a.memoizedState,n.updateQueue=a.updateQueue,n.type=a.type,i=a.dependencies,n.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),n}function bc(n,i,a,l,f,d){var E=0;if(l=n,typeof n=="function")_d(n)&&(E=1);else if(typeof n=="string")E=_1(n,a,ge.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case x:return n=wn(31,a,i,f),n.elementType=x,n.lanes=d,n;case N:return Bs(a.children,f,d,i);case G:E=8,f|=24;break;case U:return n=wn(12,a,i,f|2),n.elementType=U,n.lanes=d,n;case oe:return n=wn(13,a,i,f),n.elementType=oe,n.lanes=d,n;case ue:return n=wn(19,a,i,f),n.elementType=ue,n.lanes=d,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case H:case Q:E=10;break e;case J:E=9;break e;case le:E=11;break e;case D:E=14;break e;case R:E=16,l=null;break e}E=29,a=Error(s(130,n===null?"null":typeof n,"")),l=null}return i=wn(E,a,i,f),i.elementType=n,i.type=l,i.lanes=d,i}function Bs(n,i,a,l){return n=wn(7,n,l,i),n.lanes=a,n}function Ed(n,i,a){return n=wn(6,n,null,i),n.lanes=a,n}function Td(n,i,a){return i=wn(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}var Ha=[],Fa=0,wc=null,Sc=0,zn=[],qn=0,Hs=null,Gr=1,$r="";function Fs(n,i){Ha[Fa++]=Sc,Ha[Fa++]=wc,wc=n,Sc=i}function jy(n,i,a){zn[qn++]=Gr,zn[qn++]=$r,zn[qn++]=Hs,Hs=n;var l=Gr;n=$r;var f=32-Zt(l)-1;l&=~(1<<f),a+=1;var d=32-Zt(i)+f;if(30<d){var E=f-f%5;d=(l&(1<<E)-1).toString(32),l>>=E,f-=E,Gr=1<<32-Zt(i)+f|a<<f|l,$r=d+n}else Gr=1<<d|a<<f|l,$r=n}function bd(n){n.return!==null&&(Fs(n,1),jy(n,1,0))}function wd(n){for(;n===wc;)wc=Ha[--Fa],Ha[Fa]=null,Sc=Ha[--Fa],Ha[Fa]=null;for(;n===Hs;)Hs=zn[--qn],zn[qn]=null,$r=zn[--qn],zn[qn]=null,Gr=zn[--qn],zn[qn]=null}var hn=null,pt=null,$e=!1,Gs=null,Er=!1,Sd=Error(s(519));function $s(n){var i=Error(s(418,""));throw Il(Un(i,n)),Sd}function zy(n){var i=n.stateNode,a=n.type,l=n.memoizedProps;switch(i[Dt]=n,i[bt]=l,a){case"dialog":Pe("cancel",i),Pe("close",i);break;case"iframe":case"object":case"embed":Pe("load",i);break;case"video":case"audio":for(a=0;a<Wl.length;a++)Pe(Wl[a],i);break;case"source":Pe("error",i);break;case"img":case"image":case"link":Pe("error",i),Pe("load",i);break;case"details":Pe("toggle",i);break;case"input":Pe("invalid",i),Ds(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),Ca(i);break;case"select":Pe("invalid",i);break;case"textarea":Pe("invalid",i),Ns(i,l.value,l.defaultValue,l.children),Ca(i)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||l.suppressHydrationWarning===!0||r0(i.textContent,a)?(l.popover!=null&&(Pe("beforetoggle",i),Pe("toggle",i)),l.onScroll!=null&&Pe("scroll",i),l.onScrollEnd!=null&&Pe("scrollend",i),l.onClick!=null&&(i.onclick=ih),i=!0):i=!1,i||$s(n)}function qy(n){for(hn=n.return;hn;)switch(hn.tag){case 5:case 13:Er=!1;return;case 27:case 3:Er=!0;return;default:hn=hn.return}}function Al(n){if(n!==hn)return!1;if(!$e)return qy(n),$e=!0,!1;var i=n.tag,a;if((a=i!==3&&i!==27)&&((a=i===5)&&(a=n.type,a=!(a!=="form"&&a!=="button")||zp(n.type,n.memoizedProps)),a=!a),a&&pt&&$s(n),qy(n),i===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(s(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8)if(a=n.data,a==="/$"){if(i===0){pt=er(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++;n=n.nextSibling}pt=null}}else i===27?(i=pt,qi(n.type)?(n=Fp,Fp=null,pt=n):pt=i):pt=hn?er(n.stateNode.nextSibling):null;return!0}function Rl(){pt=hn=null,$e=!1}function By(){var n=Gs;return n!==null&&(mn===null?mn=n:mn.push.apply(mn,n),Gs=null),n}function Il(n){Gs===null?Gs=[n]:Gs.push(n)}var Ad=ee(null),Ks=null,Kr=null;function Ri(n,i,a){se(Ad,i._currentValue),i._currentValue=a}function Qr(n){n._currentValue=Ad.current,ae(Ad)}function Rd(n,i,a){for(;n!==null;){var l=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),n===a)break;n=n.return}}function Id(n,i,a,l){var f=n.child;for(f!==null&&(f.return=n);f!==null;){var d=f.dependencies;if(d!==null){var E=f.child;d=d.firstContext;e:for(;d!==null;){var T=d;d=f;for(var k=0;k<i.length;k++)if(T.context===i[k]){d.lanes|=a,T=d.alternate,T!==null&&(T.lanes|=a),Rd(d.return,a,n),l||(E=null);break e}d=T.next}}else if(f.tag===18){if(E=f.return,E===null)throw Error(s(341));E.lanes|=a,d=E.alternate,d!==null&&(d.lanes|=a),Rd(E,a,n),E=null}else E=f.child;if(E!==null)E.return=f;else for(E=f;E!==null;){if(E===n){E=null;break}if(f=E.sibling,f!==null){f.return=E.return,E=f;break}E=E.return}f=E}}function Cl(n,i,a,l){n=null;for(var f=i,d=!1;f!==null;){if(!d){if((f.flags&524288)!==0)d=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var E=f.alternate;if(E===null)throw Error(s(387));if(E=E.memoizedProps,E!==null){var T=f.type;bn(f.pendingProps.value,E.value)||(n!==null?n.push(T):n=[T])}}else if(f===Ze.current){if(E=f.alternate,E===null)throw Error(s(387));E.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(n!==null?n.push(ru):n=[ru])}f=f.return}n!==null&&Id(i,n,a,l),i.flags|=262144}function Ac(n){for(n=n.firstContext;n!==null;){if(!bn(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function Qs(n){Ks=n,Kr=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function en(n){return Hy(Ks,n)}function Rc(n,i){return Ks===null&&Qs(n),Hy(n,i)}function Hy(n,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},Kr===null){if(n===null)throw Error(s(308));Kr=i,n.dependencies={lanes:0,firstContext:i},n.flags|=524288}else Kr=Kr.next=i;return a}var vA=typeof AbortController<"u"?AbortController:function(){var n=[],i=this.signal={aborted:!1,addEventListener:function(a,l){n.push(l)}};this.abort=function(){i.aborted=!0,n.forEach(function(a){return a()})}},_A=r.unstable_scheduleCallback,EA=r.unstable_NormalPriority,kt={$$typeof:Q,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Cd(){return{controller:new vA,data:new Map,refCount:0}}function xl(n){n.refCount--,n.refCount===0&&_A(EA,function(){n.controller.abort()})}var Dl=null,xd=0,Ga=0,$a=null;function TA(n,i){if(Dl===null){var a=Dl=[];xd=0,Ga=Np(),$a={status:"pending",value:void 0,then:function(l){a.push(l)}}}return xd++,i.then(Fy,Fy),i}function Fy(){if(--xd===0&&Dl!==null){$a!==null&&($a.status="fulfilled");var n=Dl;Dl=null,Ga=0,$a=null;for(var i=0;i<n.length;i++)(0,n[i])()}}function bA(n,i){var a=[],l={status:"pending",value:null,reason:null,then:function(f){a.push(f)}};return n.then(function(){l.status="fulfilled",l.value=i;for(var f=0;f<a.length;f++)(0,a[f])(i)},function(f){for(l.status="rejected",l.reason=f,f=0;f<a.length;f++)(0,a[f])(void 0)}),l}var Gy=X.S;X.S=function(n,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&TA(n,i),Gy!==null&&Gy(n,i)};var Ys=ee(null);function Dd(){var n=Ys.current;return n!==null?n:st.pooledCache}function Ic(n,i){i===null?se(Ys,Ys.current):se(Ys,i.pool)}function $y(){var n=Dd();return n===null?null:{parent:kt._currentValue,pool:n}}var Nl=Error(s(460)),Ky=Error(s(474)),Cc=Error(s(542)),Nd={then:function(){}};function Qy(n){return n=n.status,n==="fulfilled"||n==="rejected"}function xc(){}function Yy(n,i,a){switch(a=n[a],a===void 0?n.push(i):a!==i&&(i.then(xc,xc),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw n=i.reason,Wy(n),n;default:if(typeof i.status=="string")i.then(xc,xc);else{if(n=st,n!==null&&100<n.shellSuspendCounter)throw Error(s(482));n=i,n.status="pending",n.then(function(l){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=l}},function(l){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw n=i.reason,Wy(n),n}throw Ol=i,Nl}}var Ol=null;function Xy(){if(Ol===null)throw Error(s(459));var n=Ol;return Ol=null,n}function Wy(n){if(n===Nl||n===Cc)throw Error(s(483))}var Ii=!1;function Od(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function kd(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function Ci(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function xi(n,i,a){var l=n.updateQueue;if(l===null)return null;if(l=l.shared,(We&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,i=Tc(n),Ly(n,null,a),i}return Ec(n,l,i,a),Tc(n)}function kl(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194048)!==0)){var l=i.lanes;l&=n.pendingLanes,a|=l,i.lanes=a,ol(n,a)}}function Md(n,i){var a=n.updateQueue,l=n.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var f=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var E={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?f=d=E:d=d.next=E,a=a.next}while(a!==null);d===null?f=d=i:d=d.next=i}else f=d=i;a={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}var Pd=!1;function Ml(){if(Pd){var n=$a;if(n!==null)throw n}}function Pl(n,i,a,l){Pd=!1;var f=n.updateQueue;Ii=!1;var d=f.firstBaseUpdate,E=f.lastBaseUpdate,T=f.shared.pending;if(T!==null){f.shared.pending=null;var k=T,F=k.next;k.next=null,E===null?d=F:E.next=F,E=k;var W=n.alternate;W!==null&&(W=W.updateQueue,T=W.lastBaseUpdate,T!==E&&(T===null?W.firstBaseUpdate=F:T.next=F,W.lastBaseUpdate=k))}if(d!==null){var te=f.baseState;E=0,W=F=k=null,T=d;do{var $=T.lane&-536870913,K=$!==T.lane;if(K?(qe&$)===$:(l&$)===$){$!==0&&$===Ga&&(Pd=!0),W!==null&&(W=W.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var Se=n,Ee=T;$=i;var rt=a;switch(Ee.tag){case 1:if(Se=Ee.payload,typeof Se=="function"){te=Se.call(rt,te,$);break e}te=Se;break e;case 3:Se.flags=Se.flags&-65537|128;case 0:if(Se=Ee.payload,$=typeof Se=="function"?Se.call(rt,te,$):Se,$==null)break e;te=_({},te,$);break e;case 2:Ii=!0}}$=T.callback,$!==null&&(n.flags|=64,K&&(n.flags|=8192),K=f.callbacks,K===null?f.callbacks=[$]:K.push($))}else K={lane:$,tag:T.tag,payload:T.payload,callback:T.callback,next:null},W===null?(F=W=K,k=te):W=W.next=K,E|=$;if(T=T.next,T===null){if(T=f.shared.pending,T===null)break;K=T,T=K.next,K.next=null,f.lastBaseUpdate=K,f.shared.pending=null}}while(!0);W===null&&(k=te),f.baseState=k,f.firstBaseUpdate=F,f.lastBaseUpdate=W,d===null&&(f.shared.lanes=0),Li|=E,n.lanes=E,n.memoizedState=te}}function Jy(n,i){if(typeof n!="function")throw Error(s(191,n));n.call(i)}function Zy(n,i){var a=n.callbacks;if(a!==null)for(n.callbacks=null,n=0;n<a.length;n++)Jy(a[n],i)}var Ka=ee(null),Dc=ee(0);function ev(n,i){n=ti,se(Dc,n),se(Ka,i),ti=n|i.baseLanes}function Vd(){se(Dc,ti),se(Ka,Ka.current)}function Ld(){ti=Dc.current,ae(Ka),ae(Dc)}var Di=0,Ne=null,tt=null,St=null,Nc=!1,Qa=!1,Xs=!1,Oc=0,Vl=0,Ya=null,wA=0;function vt(){throw Error(s(321))}function Ud(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!bn(n[a],i[a]))return!1;return!0}function jd(n,i,a,l,f,d){return Di=d,Ne=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,X.H=n===null||n.memoizedState===null?Lv:Uv,Xs=!1,d=a(l,f),Xs=!1,Qa&&(d=nv(i,a,l,f)),tv(n),d}function tv(n){X.H=Uc;var i=tt!==null&&tt.next!==null;if(Di=0,St=tt=Ne=null,Nc=!1,Vl=0,Ya=null,i)throw Error(s(300));n===null||jt||(n=n.dependencies,n!==null&&Ac(n)&&(jt=!0))}function nv(n,i,a,l){Ne=n;var f=0;do{if(Qa&&(Ya=null),Vl=0,Qa=!1,25<=f)throw Error(s(301));if(f+=1,St=tt=null,n.updateQueue!=null){var d=n.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}X.H=DA,d=i(a,l)}while(Qa);return d}function SA(){var n=X.H,i=n.useState()[0];return i=typeof i.then=="function"?Ll(i):i,n=n.useState()[0],(tt!==null?tt.memoizedState:null)!==n&&(Ne.flags|=1024),i}function zd(){var n=Oc!==0;return Oc=0,n}function qd(n,i,a){i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~a}function Bd(n){if(Nc){for(n=n.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}Nc=!1}Di=0,St=tt=Ne=null,Qa=!1,Vl=Oc=0,Ya=null}function dn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return St===null?Ne.memoizedState=St=n:St=St.next=n,St}function At(){if(tt===null){var n=Ne.alternate;n=n!==null?n.memoizedState:null}else n=tt.next;var i=St===null?Ne.memoizedState:St.next;if(i!==null)St=i,tt=n;else{if(n===null)throw Ne.alternate===null?Error(s(467)):Error(s(310));tt=n,n={memoizedState:tt.memoizedState,baseState:tt.baseState,baseQueue:tt.baseQueue,queue:tt.queue,next:null},St===null?Ne.memoizedState=St=n:St=St.next=n}return St}function Hd(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ll(n){var i=Vl;return Vl+=1,Ya===null&&(Ya=[]),n=Yy(Ya,n,i),i=Ne,(St===null?i.memoizedState:St.next)===null&&(i=i.alternate,X.H=i===null||i.memoizedState===null?Lv:Uv),n}function kc(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return Ll(n);if(n.$$typeof===Q)return en(n)}throw Error(s(438,String(n)))}function Fd(n){var i=null,a=Ne.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var l=Ne.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=Hd(),Ne.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(n),l=0;l<n;l++)a[l]=O;return i.index++,a}function Yr(n,i){return typeof i=="function"?i(n):i}function Mc(n){var i=At();return Gd(i,tt,n)}function Gd(n,i,a){var l=n.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var f=n.baseQueue,d=l.pending;if(d!==null){if(f!==null){var E=f.next;f.next=d.next,d.next=E}i.baseQueue=f=d,l.pending=null}if(d=n.baseState,f===null)n.memoizedState=d;else{i=f.next;var T=E=null,k=null,F=i,W=!1;do{var te=F.lane&-536870913;if(te!==F.lane?(qe&te)===te:(Di&te)===te){var $=F.revertLane;if($===0)k!==null&&(k=k.next={lane:0,revertLane:0,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null}),te===Ga&&(W=!0);else if((Di&$)===$){F=F.next,$===Ga&&(W=!0);continue}else te={lane:0,revertLane:F.revertLane,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null},k===null?(T=k=te,E=d):k=k.next=te,Ne.lanes|=$,Li|=$;te=F.action,Xs&&a(d,te),d=F.hasEagerState?F.eagerState:a(d,te)}else $={lane:te,revertLane:F.revertLane,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null},k===null?(T=k=$,E=d):k=k.next=$,Ne.lanes|=te,Li|=te;F=F.next}while(F!==null&&F!==i);if(k===null?E=d:k.next=T,!bn(d,n.memoizedState)&&(jt=!0,W&&(a=$a,a!==null)))throw a;n.memoizedState=d,n.baseState=E,n.baseQueue=k,l.lastRenderedState=d}return f===null&&(l.lanes=0),[n.memoizedState,l.dispatch]}function $d(n){var i=At(),a=i.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=n;var l=a.dispatch,f=a.pending,d=i.memoizedState;if(f!==null){a.pending=null;var E=f=f.next;do d=n(d,E.action),E=E.next;while(E!==f);bn(d,i.memoizedState)||(jt=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),a.lastRenderedState=d}return[d,l]}function rv(n,i,a){var l=Ne,f=At(),d=$e;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=i();var E=!bn((tt||f).memoizedState,a);E&&(f.memoizedState=a,jt=!0),f=f.queue;var T=av.bind(null,l,f,n);if(Ul(2048,8,T,[n]),f.getSnapshot!==i||E||St!==null&&St.memoizedState.tag&1){if(l.flags|=2048,Xa(9,Pc(),sv.bind(null,l,f,a,i),null),st===null)throw Error(s(349));d||(Di&124)!==0||iv(l,i,a)}return a}function iv(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Ne.updateQueue,i===null?(i=Hd(),Ne.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function sv(n,i,a,l){i.value=a,i.getSnapshot=l,ov(i)&&lv(n)}function av(n,i,a){return a(function(){ov(i)&&lv(n)})}function ov(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!bn(n,a)}catch{return!0}}function lv(n){var i=qa(n,2);i!==null&&Cn(i,n,2)}function Kd(n){var i=dn();if(typeof n=="function"){var a=n;if(n=a(),Xs){En(!0);try{a()}finally{En(!1)}}}return i.memoizedState=i.baseState=n,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yr,lastRenderedState:n},i}function uv(n,i,a,l){return n.baseState=a,Gd(n,tt,typeof l=="function"?l:Yr)}function AA(n,i,a,l,f){if(Lc(n))throw Error(s(485));if(n=i.action,n!==null){var d={payload:f,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){d.listeners.push(E)}};X.T!==null?a(!0):d.isTransition=!1,l(d),a=i.pending,a===null?(d.next=i.pending=d,cv(i,d)):(d.next=a.next,i.pending=a.next=d)}}function cv(n,i){var a=i.action,l=i.payload,f=n.state;if(i.isTransition){var d=X.T,E={};X.T=E;try{var T=a(f,l),k=X.S;k!==null&&k(E,T),hv(n,i,T)}catch(F){Qd(n,i,F)}finally{X.T=d}}else try{d=a(f,l),hv(n,i,d)}catch(F){Qd(n,i,F)}}function hv(n,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){fv(n,i,l)},function(l){return Qd(n,i,l)}):fv(n,i,a)}function fv(n,i,a){i.status="fulfilled",i.value=a,dv(i),n.state=a,i=n.pending,i!==null&&(a=i.next,a===i?n.pending=null:(a=a.next,i.next=a,cv(n,a)))}function Qd(n,i,a){var l=n.pending;if(n.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=a,dv(i),i=i.next;while(i!==l)}n.action=null}function dv(n){n=n.listeners;for(var i=0;i<n.length;i++)(0,n[i])()}function pv(n,i){return i}function mv(n,i){if($e){var a=st.formState;if(a!==null){e:{var l=Ne;if($e){if(pt){t:{for(var f=pt,d=Er;f.nodeType!==8;){if(!d){f=null;break t}if(f=er(f.nextSibling),f===null){f=null;break t}}d=f.data,f=d==="F!"||d==="F"?f:null}if(f){pt=er(f.nextSibling),l=f.data==="F!";break e}}$s(l)}l=!1}l&&(i=a[0])}}return a=dn(),a.memoizedState=a.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:pv,lastRenderedState:i},a.queue=l,a=Mv.bind(null,Ne,l),l.dispatch=a,l=Kd(!1),d=Zd.bind(null,Ne,!1,l.queue),l=dn(),f={state:i,dispatch:null,action:n,pending:null},l.queue=f,a=AA.bind(null,Ne,f,d,a),f.dispatch=a,l.memoizedState=n,[i,a,!1]}function gv(n){var i=At();return yv(i,tt,n)}function yv(n,i,a){if(i=Gd(n,i,pv)[0],n=Mc(Yr)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=Ll(i)}catch(E){throw E===Nl?Cc:E}else l=i;i=At();var f=i.queue,d=f.dispatch;return a!==i.memoizedState&&(Ne.flags|=2048,Xa(9,Pc(),RA.bind(null,f,a),null)),[l,d,n]}function RA(n,i){n.action=i}function vv(n){var i=At(),a=tt;if(a!==null)return yv(i,a,n);At(),i=i.memoizedState,a=At();var l=a.queue.dispatch;return a.memoizedState=n,[i,l,!1]}function Xa(n,i,a,l){return n={tag:n,create:a,deps:l,inst:i,next:null},i=Ne.updateQueue,i===null&&(i=Hd(),Ne.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=n.next=n:(l=a.next,a.next=n,n.next=l,i.lastEffect=n),n}function Pc(){return{destroy:void 0,resource:void 0}}function _v(){return At().memoizedState}function Vc(n,i,a,l){var f=dn();l=l===void 0?null:l,Ne.flags|=n,f.memoizedState=Xa(1|i,Pc(),a,l)}function Ul(n,i,a,l){var f=At();l=l===void 0?null:l;var d=f.memoizedState.inst;tt!==null&&l!==null&&Ud(l,tt.memoizedState.deps)?f.memoizedState=Xa(i,d,a,l):(Ne.flags|=n,f.memoizedState=Xa(1|i,d,a,l))}function Ev(n,i){Vc(8390656,8,n,i)}function Tv(n,i){Ul(2048,8,n,i)}function bv(n,i){return Ul(4,2,n,i)}function wv(n,i){return Ul(4,4,n,i)}function Sv(n,i){if(typeof i=="function"){n=n();var a=i(n);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Av(n,i,a){a=a!=null?a.concat([n]):null,Ul(4,4,Sv.bind(null,i,n),a)}function Yd(){}function Rv(n,i){var a=At();i=i===void 0?null:i;var l=a.memoizedState;return i!==null&&Ud(i,l[1])?l[0]:(a.memoizedState=[n,i],n)}function Iv(n,i){var a=At();i=i===void 0?null:i;var l=a.memoizedState;if(i!==null&&Ud(i,l[1]))return l[0];if(l=n(),Xs){En(!0);try{n()}finally{En(!1)}}return a.memoizedState=[l,i],l}function Xd(n,i,a){return a===void 0||(Di&1073741824)!==0?n.memoizedState=i:(n.memoizedState=a,n=D_(),Ne.lanes|=n,Li|=n,a)}function Cv(n,i,a,l){return bn(a,i)?a:Ka.current!==null?(n=Xd(n,a,l),bn(n,i)||(jt=!0),n):(Di&42)===0?(jt=!0,n.memoizedState=a):(n=D_(),Ne.lanes|=n,Li|=n,i)}function xv(n,i,a,l,f){var d=ce.p;ce.p=d!==0&&8>d?d:8;var E=X.T,T={};X.T=T,Zd(n,!1,i,a);try{var k=f(),F=X.S;if(F!==null&&F(T,k),k!==null&&typeof k=="object"&&typeof k.then=="function"){var W=bA(k,l);jl(n,i,W,In(n))}else jl(n,i,l,In(n))}catch(te){jl(n,i,{then:function(){},status:"rejected",reason:te},In())}finally{ce.p=d,X.T=E}}function IA(){}function Wd(n,i,a,l){if(n.tag!==5)throw Error(s(476));var f=Dv(n).queue;xv(n,f,i,me,a===null?IA:function(){return Nv(n),a(l)})}function Dv(n){var i=n.memoizedState;if(i!==null)return i;i={memoizedState:me,baseState:me,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yr,lastRenderedState:me},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yr,lastRenderedState:a},next:null},n.memoizedState=i,n=n.alternate,n!==null&&(n.memoizedState=i),i}function Nv(n){var i=Dv(n).next.queue;jl(n,i,{},In())}function Jd(){return en(ru)}function Ov(){return At().memoizedState}function kv(){return At().memoizedState}function CA(n){for(var i=n.return;i!==null;){switch(i.tag){case 24:case 3:var a=In();n=Ci(a);var l=xi(i,n,a);l!==null&&(Cn(l,i,a),kl(l,i,a)),i={cache:Cd()},n.payload=i;return}i=i.return}}function xA(n,i,a){var l=In();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Lc(n)?Pv(i,a):(a=vd(n,i,a,l),a!==null&&(Cn(a,n,l),Vv(a,i,l)))}function Mv(n,i,a){var l=In();jl(n,i,a,l)}function jl(n,i,a,l){var f={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Lc(n))Pv(i,f);else{var d=n.alternate;if(n.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var E=i.lastRenderedState,T=d(E,a);if(f.hasEagerState=!0,f.eagerState=T,bn(T,E))return Ec(n,i,f,0),st===null&&_c(),!1}catch{}finally{}if(a=vd(n,i,f,l),a!==null)return Cn(a,n,l),Vv(a,i,l),!0}return!1}function Zd(n,i,a,l){if(l={lane:2,revertLane:Np(),action:l,hasEagerState:!1,eagerState:null,next:null},Lc(n)){if(i)throw Error(s(479))}else i=vd(n,a,l,2),i!==null&&Cn(i,n,2)}function Lc(n){var i=n.alternate;return n===Ne||i!==null&&i===Ne}function Pv(n,i){Qa=Nc=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Vv(n,i,a){if((a&4194048)!==0){var l=i.lanes;l&=n.pendingLanes,a|=l,i.lanes=a,ol(n,a)}}var Uc={readContext:en,use:kc,useCallback:vt,useContext:vt,useEffect:vt,useImperativeHandle:vt,useLayoutEffect:vt,useInsertionEffect:vt,useMemo:vt,useReducer:vt,useRef:vt,useState:vt,useDebugValue:vt,useDeferredValue:vt,useTransition:vt,useSyncExternalStore:vt,useId:vt,useHostTransitionStatus:vt,useFormState:vt,useActionState:vt,useOptimistic:vt,useMemoCache:vt,useCacheRefresh:vt},Lv={readContext:en,use:kc,useCallback:function(n,i){return dn().memoizedState=[n,i===void 0?null:i],n},useContext:en,useEffect:Ev,useImperativeHandle:function(n,i,a){a=a!=null?a.concat([n]):null,Vc(4194308,4,Sv.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Vc(4194308,4,n,i)},useInsertionEffect:function(n,i){Vc(4,2,n,i)},useMemo:function(n,i){var a=dn();i=i===void 0?null:i;var l=n();if(Xs){En(!0);try{n()}finally{En(!1)}}return a.memoizedState=[l,i],l},useReducer:function(n,i,a){var l=dn();if(a!==void 0){var f=a(i);if(Xs){En(!0);try{a(i)}finally{En(!1)}}}else f=i;return l.memoizedState=l.baseState=f,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:f},l.queue=n,n=n.dispatch=xA.bind(null,Ne,n),[l.memoizedState,n]},useRef:function(n){var i=dn();return n={current:n},i.memoizedState=n},useState:function(n){n=Kd(n);var i=n.queue,a=Mv.bind(null,Ne,i);return i.dispatch=a,[n.memoizedState,a]},useDebugValue:Yd,useDeferredValue:function(n,i){var a=dn();return Xd(a,n,i)},useTransition:function(){var n=Kd(!1);return n=xv.bind(null,Ne,n.queue,!0,!1),dn().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,i,a){var l=Ne,f=dn();if($e){if(a===void 0)throw Error(s(407));a=a()}else{if(a=i(),st===null)throw Error(s(349));(qe&124)!==0||iv(l,i,a)}f.memoizedState=a;var d={value:a,getSnapshot:i};return f.queue=d,Ev(av.bind(null,l,d,n),[n]),l.flags|=2048,Xa(9,Pc(),sv.bind(null,l,d,a,i),null),a},useId:function(){var n=dn(),i=st.identifierPrefix;if($e){var a=$r,l=Gr;a=(l&~(1<<32-Zt(l)-1)).toString(32)+a,i="«"+i+"R"+a,a=Oc++,0<a&&(i+="H"+a.toString(32)),i+="»"}else a=wA++,i="«"+i+"r"+a.toString(32)+"»";return n.memoizedState=i},useHostTransitionStatus:Jd,useFormState:mv,useActionState:mv,useOptimistic:function(n){var i=dn();i.memoizedState=i.baseState=n;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=Zd.bind(null,Ne,!0,a),a.dispatch=i,[n,i]},useMemoCache:Fd,useCacheRefresh:function(){return dn().memoizedState=CA.bind(null,Ne)}},Uv={readContext:en,use:kc,useCallback:Rv,useContext:en,useEffect:Tv,useImperativeHandle:Av,useInsertionEffect:bv,useLayoutEffect:wv,useMemo:Iv,useReducer:Mc,useRef:_v,useState:function(){return Mc(Yr)},useDebugValue:Yd,useDeferredValue:function(n,i){var a=At();return Cv(a,tt.memoizedState,n,i)},useTransition:function(){var n=Mc(Yr)[0],i=At().memoizedState;return[typeof n=="boolean"?n:Ll(n),i]},useSyncExternalStore:rv,useId:Ov,useHostTransitionStatus:Jd,useFormState:gv,useActionState:gv,useOptimistic:function(n,i){var a=At();return uv(a,tt,n,i)},useMemoCache:Fd,useCacheRefresh:kv},DA={readContext:en,use:kc,useCallback:Rv,useContext:en,useEffect:Tv,useImperativeHandle:Av,useInsertionEffect:bv,useLayoutEffect:wv,useMemo:Iv,useReducer:$d,useRef:_v,useState:function(){return $d(Yr)},useDebugValue:Yd,useDeferredValue:function(n,i){var a=At();return tt===null?Xd(a,n,i):Cv(a,tt.memoizedState,n,i)},useTransition:function(){var n=$d(Yr)[0],i=At().memoizedState;return[typeof n=="boolean"?n:Ll(n),i]},useSyncExternalStore:rv,useId:Ov,useHostTransitionStatus:Jd,useFormState:vv,useActionState:vv,useOptimistic:function(n,i){var a=At();return tt!==null?uv(a,tt,n,i):(a.baseState=n,[n,a.queue.dispatch])},useMemoCache:Fd,useCacheRefresh:kv},Wa=null,zl=0;function jc(n){var i=zl;return zl+=1,Wa===null&&(Wa=[]),Yy(Wa,n,i)}function ql(n,i){i=i.props.ref,n.ref=i!==void 0?i:null}function zc(n,i){throw i.$$typeof===b?Error(s(525)):(n=Object.prototype.toString.call(i),Error(s(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n)))}function jv(n){var i=n._init;return i(n._payload)}function zv(n){function i(j,V){if(n){var B=j.deletions;B===null?(j.deletions=[V],j.flags|=16):B.push(V)}}function a(j,V){if(!n)return null;for(;V!==null;)i(j,V),V=V.sibling;return null}function l(j){for(var V=new Map;j!==null;)j.key!==null?V.set(j.key,j):V.set(j.index,j),j=j.sibling;return V}function f(j,V){return j=Fr(j,V),j.index=0,j.sibling=null,j}function d(j,V,B){return j.index=B,n?(B=j.alternate,B!==null?(B=B.index,B<V?(j.flags|=67108866,V):B):(j.flags|=67108866,V)):(j.flags|=1048576,V)}function E(j){return n&&j.alternate===null&&(j.flags|=67108866),j}function T(j,V,B,Z){return V===null||V.tag!==6?(V=Ed(B,j.mode,Z),V.return=j,V):(V=f(V,B),V.return=j,V)}function k(j,V,B,Z){var pe=B.type;return pe===N?W(j,V,B.props.children,Z,B.key):V!==null&&(V.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===R&&jv(pe)===V.type)?(V=f(V,B.props),ql(V,B),V.return=j,V):(V=bc(B.type,B.key,B.props,null,j.mode,Z),ql(V,B),V.return=j,V)}function F(j,V,B,Z){return V===null||V.tag!==4||V.stateNode.containerInfo!==B.containerInfo||V.stateNode.implementation!==B.implementation?(V=Td(B,j.mode,Z),V.return=j,V):(V=f(V,B.children||[]),V.return=j,V)}function W(j,V,B,Z,pe){return V===null||V.tag!==7?(V=Bs(B,j.mode,Z,pe),V.return=j,V):(V=f(V,B),V.return=j,V)}function te(j,V,B){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=Ed(""+V,j.mode,B),V.return=j,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case w:return B=bc(V.type,V.key,V.props,null,j.mode,B),ql(B,V),B.return=j,B;case C:return V=Td(V,j.mode,B),V.return=j,V;case R:var Z=V._init;return V=Z(V._payload),te(j,V,B)}if(Ue(V)||L(V))return V=Bs(V,j.mode,B,null),V.return=j,V;if(typeof V.then=="function")return te(j,jc(V),B);if(V.$$typeof===Q)return te(j,Rc(j,V),B);zc(j,V)}return null}function $(j,V,B,Z){var pe=V!==null?V.key:null;if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return pe!==null?null:T(j,V,""+B,Z);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case w:return B.key===pe?k(j,V,B,Z):null;case C:return B.key===pe?F(j,V,B,Z):null;case R:return pe=B._init,B=pe(B._payload),$(j,V,B,Z)}if(Ue(B)||L(B))return pe!==null?null:W(j,V,B,Z,null);if(typeof B.then=="function")return $(j,V,jc(B),Z);if(B.$$typeof===Q)return $(j,V,Rc(j,B),Z);zc(j,B)}return null}function K(j,V,B,Z,pe){if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return j=j.get(B)||null,T(V,j,""+Z,pe);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case w:return j=j.get(Z.key===null?B:Z.key)||null,k(V,j,Z,pe);case C:return j=j.get(Z.key===null?B:Z.key)||null,F(V,j,Z,pe);case R:var ke=Z._init;return Z=ke(Z._payload),K(j,V,B,Z,pe)}if(Ue(Z)||L(Z))return j=j.get(B)||null,W(V,j,Z,pe,null);if(typeof Z.then=="function")return K(j,V,B,jc(Z),pe);if(Z.$$typeof===Q)return K(j,V,B,Rc(V,Z),pe);zc(V,Z)}return null}function Se(j,V,B,Z){for(var pe=null,ke=null,ve=V,Te=V=0,qt=null;ve!==null&&Te<B.length;Te++){ve.index>Te?(qt=ve,ve=null):qt=ve.sibling;var Fe=$(j,ve,B[Te],Z);if(Fe===null){ve===null&&(ve=qt);break}n&&ve&&Fe.alternate===null&&i(j,ve),V=d(Fe,V,Te),ke===null?pe=Fe:ke.sibling=Fe,ke=Fe,ve=qt}if(Te===B.length)return a(j,ve),$e&&Fs(j,Te),pe;if(ve===null){for(;Te<B.length;Te++)ve=te(j,B[Te],Z),ve!==null&&(V=d(ve,V,Te),ke===null?pe=ve:ke.sibling=ve,ke=ve);return $e&&Fs(j,Te),pe}for(ve=l(ve);Te<B.length;Te++)qt=K(ve,j,Te,B[Te],Z),qt!==null&&(n&&qt.alternate!==null&&ve.delete(qt.key===null?Te:qt.key),V=d(qt,V,Te),ke===null?pe=qt:ke.sibling=qt,ke=qt);return n&&ve.forEach(function($i){return i(j,$i)}),$e&&Fs(j,Te),pe}function Ee(j,V,B,Z){if(B==null)throw Error(s(151));for(var pe=null,ke=null,ve=V,Te=V=0,qt=null,Fe=B.next();ve!==null&&!Fe.done;Te++,Fe=B.next()){ve.index>Te?(qt=ve,ve=null):qt=ve.sibling;var $i=$(j,ve,Fe.value,Z);if($i===null){ve===null&&(ve=qt);break}n&&ve&&$i.alternate===null&&i(j,ve),V=d($i,V,Te),ke===null?pe=$i:ke.sibling=$i,ke=$i,ve=qt}if(Fe.done)return a(j,ve),$e&&Fs(j,Te),pe;if(ve===null){for(;!Fe.done;Te++,Fe=B.next())Fe=te(j,Fe.value,Z),Fe!==null&&(V=d(Fe,V,Te),ke===null?pe=Fe:ke.sibling=Fe,ke=Fe);return $e&&Fs(j,Te),pe}for(ve=l(ve);!Fe.done;Te++,Fe=B.next())Fe=K(ve,j,Te,Fe.value,Z),Fe!==null&&(n&&Fe.alternate!==null&&ve.delete(Fe.key===null?Te:Fe.key),V=d(Fe,V,Te),ke===null?pe=Fe:ke.sibling=Fe,ke=Fe);return n&&ve.forEach(function(N1){return i(j,N1)}),$e&&Fs(j,Te),pe}function rt(j,V,B,Z){if(typeof B=="object"&&B!==null&&B.type===N&&B.key===null&&(B=B.props.children),typeof B=="object"&&B!==null){switch(B.$$typeof){case w:e:{for(var pe=B.key;V!==null;){if(V.key===pe){if(pe=B.type,pe===N){if(V.tag===7){a(j,V.sibling),Z=f(V,B.props.children),Z.return=j,j=Z;break e}}else if(V.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===R&&jv(pe)===V.type){a(j,V.sibling),Z=f(V,B.props),ql(Z,B),Z.return=j,j=Z;break e}a(j,V);break}else i(j,V);V=V.sibling}B.type===N?(Z=Bs(B.props.children,j.mode,Z,B.key),Z.return=j,j=Z):(Z=bc(B.type,B.key,B.props,null,j.mode,Z),ql(Z,B),Z.return=j,j=Z)}return E(j);case C:e:{for(pe=B.key;V!==null;){if(V.key===pe)if(V.tag===4&&V.stateNode.containerInfo===B.containerInfo&&V.stateNode.implementation===B.implementation){a(j,V.sibling),Z=f(V,B.children||[]),Z.return=j,j=Z;break e}else{a(j,V);break}else i(j,V);V=V.sibling}Z=Td(B,j.mode,Z),Z.return=j,j=Z}return E(j);case R:return pe=B._init,B=pe(B._payload),rt(j,V,B,Z)}if(Ue(B))return Se(j,V,B,Z);if(L(B)){if(pe=L(B),typeof pe!="function")throw Error(s(150));return B=pe.call(B),Ee(j,V,B,Z)}if(typeof B.then=="function")return rt(j,V,jc(B),Z);if(B.$$typeof===Q)return rt(j,V,Rc(j,B),Z);zc(j,B)}return typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint"?(B=""+B,V!==null&&V.tag===6?(a(j,V.sibling),Z=f(V,B),Z.return=j,j=Z):(a(j,V),Z=Ed(B,j.mode,Z),Z.return=j,j=Z),E(j)):a(j,V)}return function(j,V,B,Z){try{zl=0;var pe=rt(j,V,B,Z);return Wa=null,pe}catch(ve){if(ve===Nl||ve===Cc)throw ve;var ke=wn(29,ve,null,j.mode);return ke.lanes=Z,ke.return=j,ke}finally{}}}var Ja=zv(!0),qv=zv(!1),Bn=ee(null),Tr=null;function Ni(n){var i=n.alternate;se(Mt,Mt.current&1),se(Bn,n),Tr===null&&(i===null||Ka.current!==null||i.memoizedState!==null)&&(Tr=n)}function Bv(n){if(n.tag===22){if(se(Mt,Mt.current),se(Bn,n),Tr===null){var i=n.alternate;i!==null&&i.memoizedState!==null&&(Tr=n)}}else Oi()}function Oi(){se(Mt,Mt.current),se(Bn,Bn.current)}function Xr(n){ae(Bn),Tr===n&&(Tr=null),ae(Mt)}var Mt=ee(0);function qc(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Hp(a)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function ep(n,i,a,l){i=n.memoizedState,a=a(l,i),a=a==null?i:_({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var tp={enqueueSetState:function(n,i,a){n=n._reactInternals;var l=In(),f=Ci(l);f.payload=i,a!=null&&(f.callback=a),i=xi(n,f,l),i!==null&&(Cn(i,n,l),kl(i,n,l))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var l=In(),f=Ci(l);f.tag=1,f.payload=i,a!=null&&(f.callback=a),i=xi(n,f,l),i!==null&&(Cn(i,n,l),kl(i,n,l))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=In(),l=Ci(a);l.tag=2,i!=null&&(l.callback=i),i=xi(n,l,a),i!==null&&(Cn(i,n,a),kl(i,n,a))}};function Hv(n,i,a,l,f,d,E){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(l,d,E):i.prototype&&i.prototype.isPureReactComponent?!wl(a,l)||!wl(f,d):!0}function Fv(n,i,a,l){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==n&&tp.enqueueReplaceState(i,i.state,null)}function Ws(n,i){var a=i;if("ref"in i){a={};for(var l in i)l!=="ref"&&(a[l]=i[l])}if(n=n.defaultProps){a===i&&(a=_({},a));for(var f in n)a[f]===void 0&&(a[f]=n[f])}return a}var Bc=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function Gv(n){Bc(n)}function $v(n){console.error(n)}function Kv(n){Bc(n)}function Hc(n,i){try{var a=n.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function Qv(n,i,a){try{var l=n.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function np(n,i,a){return a=Ci(a),a.tag=3,a.payload={element:null},a.callback=function(){Hc(n,i)},a}function Yv(n){return n=Ci(n),n.tag=3,n}function Xv(n,i,a,l){var f=a.type.getDerivedStateFromError;if(typeof f=="function"){var d=l.value;n.payload=function(){return f(d)},n.callback=function(){Qv(i,a,l)}}var E=a.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(n.callback=function(){Qv(i,a,l),typeof f!="function"&&(Ui===null?Ui=new Set([this]):Ui.add(this));var T=l.stack;this.componentDidCatch(l.value,{componentStack:T!==null?T:""})})}function NA(n,i,a,l,f){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=a.alternate,i!==null&&Cl(i,a,f,!0),a=Bn.current,a!==null){switch(a.tag){case 13:return Tr===null?Rp():a.alternate===null&&mt===0&&(mt=3),a.flags&=-257,a.flags|=65536,a.lanes=f,l===Nd?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([l]):i.add(l),Cp(n,l,f)),!1;case 22:return a.flags|=65536,l===Nd?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([l]):a.add(l)),Cp(n,l,f)),!1}throw Error(s(435,a.tag))}return Cp(n,l,f),Rp(),!1}if($e)return i=Bn.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,l!==Sd&&(n=Error(s(422),{cause:l}),Il(Un(n,a)))):(l!==Sd&&(i=Error(s(423),{cause:l}),Il(Un(i,a))),n=n.current.alternate,n.flags|=65536,f&=-f,n.lanes|=f,l=Un(l,a),f=np(n.stateNode,l,f),Md(n,f),mt!==4&&(mt=2)),!1;var d=Error(s(520),{cause:l});if(d=Un(d,a),Ql===null?Ql=[d]:Ql.push(d),mt!==4&&(mt=2),i===null)return!0;l=Un(l,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,n=f&-f,a.lanes|=n,n=np(a.stateNode,l,n),Md(a,n),!1;case 1:if(i=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Ui===null||!Ui.has(d))))return a.flags|=65536,f&=-f,a.lanes|=f,f=Yv(f),Xv(f,n,a,l),Md(a,f),!1}a=a.return}while(a!==null);return!1}var Wv=Error(s(461)),jt=!1;function $t(n,i,a,l){i.child=n===null?qv(i,null,a,l):Ja(i,n.child,a,l)}function Jv(n,i,a,l,f){a=a.render;var d=i.ref;if("ref"in l){var E={};for(var T in l)T!=="ref"&&(E[T]=l[T])}else E=l;return Qs(i),l=jd(n,i,a,E,d,f),T=zd(),n!==null&&!jt?(qd(n,i,f),Wr(n,i,f)):($e&&T&&bd(i),i.flags|=1,$t(n,i,l,f),i.child)}function Zv(n,i,a,l,f){if(n===null){var d=a.type;return typeof d=="function"&&!_d(d)&&d.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=d,e_(n,i,d,l,f)):(n=bc(a.type,null,l,i,i.mode,f),n.ref=i.ref,n.return=i,i.child=n)}if(d=n.child,!cp(n,f)){var E=d.memoizedProps;if(a=a.compare,a=a!==null?a:wl,a(E,l)&&n.ref===i.ref)return Wr(n,i,f)}return i.flags|=1,n=Fr(d,l),n.ref=i.ref,n.return=i,i.child=n}function e_(n,i,a,l,f){if(n!==null){var d=n.memoizedProps;if(wl(d,l)&&n.ref===i.ref)if(jt=!1,i.pendingProps=l=d,cp(n,f))(n.flags&131072)!==0&&(jt=!0);else return i.lanes=n.lanes,Wr(n,i,f)}return rp(n,i,a,l,f)}function t_(n,i,a){var l=i.pendingProps,f=l.children,d=n!==null?n.memoizedState:null;if(l.mode==="hidden"){if((i.flags&128)!==0){if(l=d!==null?d.baseLanes|a:a,n!==null){for(f=i.child=n.child,d=0;f!==null;)d=d|f.lanes|f.childLanes,f=f.sibling;i.childLanes=d&~l}else i.childLanes=0,i.child=null;return n_(n,i,l,a)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},n!==null&&Ic(i,d!==null?d.cachePool:null),d!==null?ev(i,d):Vd(),Bv(i);else return i.lanes=i.childLanes=536870912,n_(n,i,d!==null?d.baseLanes|a:a,a)}else d!==null?(Ic(i,d.cachePool),ev(i,d),Oi(),i.memoizedState=null):(n!==null&&Ic(i,null),Vd(),Oi());return $t(n,i,f,a),i.child}function n_(n,i,a,l){var f=Dd();return f=f===null?null:{parent:kt._currentValue,pool:f},i.memoizedState={baseLanes:a,cachePool:f},n!==null&&Ic(i,null),Vd(),Bv(i),n!==null&&Cl(n,i,l,!0),null}function Fc(n,i){var a=i.ref;if(a===null)n!==null&&n.ref!==null&&(i.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(n===null||n.ref!==a)&&(i.flags|=4194816)}}function rp(n,i,a,l,f){return Qs(i),a=jd(n,i,a,l,void 0,f),l=zd(),n!==null&&!jt?(qd(n,i,f),Wr(n,i,f)):($e&&l&&bd(i),i.flags|=1,$t(n,i,a,f),i.child)}function r_(n,i,a,l,f,d){return Qs(i),i.updateQueue=null,a=nv(i,l,a,f),tv(n),l=zd(),n!==null&&!jt?(qd(n,i,d),Wr(n,i,d)):($e&&l&&bd(i),i.flags|=1,$t(n,i,a,d),i.child)}function i_(n,i,a,l,f){if(Qs(i),i.stateNode===null){var d=Ba,E=a.contextType;typeof E=="object"&&E!==null&&(d=en(E)),d=new a(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=tp,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},Od(i),E=a.contextType,d.context=typeof E=="object"&&E!==null?en(E):Ba,d.state=i.memoizedState,E=a.getDerivedStateFromProps,typeof E=="function"&&(ep(i,a,E,l),d.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(E=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),E!==d.state&&tp.enqueueReplaceState(d,d.state,null),Pl(i,l,d,f),Ml(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(n===null){d=i.stateNode;var T=i.memoizedProps,k=Ws(a,T);d.props=k;var F=d.context,W=a.contextType;E=Ba,typeof W=="object"&&W!==null&&(E=en(W));var te=a.getDerivedStateFromProps;W=typeof te=="function"||typeof d.getSnapshotBeforeUpdate=="function",T=i.pendingProps!==T,W||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(T||F!==E)&&Fv(i,d,l,E),Ii=!1;var $=i.memoizedState;d.state=$,Pl(i,l,d,f),Ml(),F=i.memoizedState,T||$!==F||Ii?(typeof te=="function"&&(ep(i,a,te,l),F=i.memoizedState),(k=Ii||Hv(i,a,k,l,$,F,E))?(W||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=F),d.props=l,d.state=F,d.context=E,l=k):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,kd(n,i),E=i.memoizedProps,W=Ws(a,E),d.props=W,te=i.pendingProps,$=d.context,F=a.contextType,k=Ba,typeof F=="object"&&F!==null&&(k=en(F)),T=a.getDerivedStateFromProps,(F=typeof T=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(E!==te||$!==k)&&Fv(i,d,l,k),Ii=!1,$=i.memoizedState,d.state=$,Pl(i,l,d,f),Ml();var K=i.memoizedState;E!==te||$!==K||Ii||n!==null&&n.dependencies!==null&&Ac(n.dependencies)?(typeof T=="function"&&(ep(i,a,T,l),K=i.memoizedState),(W=Ii||Hv(i,a,W,l,$,K,k)||n!==null&&n.dependencies!==null&&Ac(n.dependencies))?(F||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,K,k),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,K,k)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||E===n.memoizedProps&&$===n.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||E===n.memoizedProps&&$===n.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=K),d.props=l,d.state=K,d.context=k,l=W):(typeof d.componentDidUpdate!="function"||E===n.memoizedProps&&$===n.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||E===n.memoizedProps&&$===n.memoizedState||(i.flags|=1024),l=!1)}return d=l,Fc(n,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,n!==null&&l?(i.child=Ja(i,n.child,null,f),i.child=Ja(i,null,a,f)):$t(n,i,a,f),i.memoizedState=d.state,n=i.child):n=Wr(n,i,f),n}function s_(n,i,a,l){return Rl(),i.flags|=256,$t(n,i,a,l),i.child}var ip={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function sp(n){return{baseLanes:n,cachePool:$y()}}function ap(n,i,a){return n=n!==null?n.childLanes&~a:0,i&&(n|=Hn),n}function a_(n,i,a){var l=i.pendingProps,f=!1,d=(i.flags&128)!==0,E;if((E=d)||(E=n!==null&&n.memoizedState===null?!1:(Mt.current&2)!==0),E&&(f=!0,i.flags&=-129),E=(i.flags&32)!==0,i.flags&=-33,n===null){if($e){if(f?Ni(i):Oi(),$e){var T=pt,k;if(k=T){e:{for(k=T,T=Er;k.nodeType!==8;){if(!T){T=null;break e}if(k=er(k.nextSibling),k===null){T=null;break e}}T=k}T!==null?(i.memoizedState={dehydrated:T,treeContext:Hs!==null?{id:Gr,overflow:$r}:null,retryLane:536870912,hydrationErrors:null},k=wn(18,null,null,0),k.stateNode=T,k.return=i,i.child=k,hn=i,pt=null,k=!0):k=!1}k||$s(i)}if(T=i.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return Hp(T)?i.lanes=32:i.lanes=536870912,null;Xr(i)}return T=l.children,l=l.fallback,f?(Oi(),f=i.mode,T=Gc({mode:"hidden",children:T},f),l=Bs(l,f,a,null),T.return=i,l.return=i,T.sibling=l,i.child=T,f=i.child,f.memoizedState=sp(a),f.childLanes=ap(n,E,a),i.memoizedState=ip,l):(Ni(i),op(i,T))}if(k=n.memoizedState,k!==null&&(T=k.dehydrated,T!==null)){if(d)i.flags&256?(Ni(i),i.flags&=-257,i=lp(n,i,a)):i.memoizedState!==null?(Oi(),i.child=n.child,i.flags|=128,i=null):(Oi(),f=l.fallback,T=i.mode,l=Gc({mode:"visible",children:l.children},T),f=Bs(f,T,a,null),f.flags|=2,l.return=i,f.return=i,l.sibling=f,i.child=l,Ja(i,n.child,null,a),l=i.child,l.memoizedState=sp(a),l.childLanes=ap(n,E,a),i.memoizedState=ip,i=f);else if(Ni(i),Hp(T)){if(E=T.nextSibling&&T.nextSibling.dataset,E)var F=E.dgst;E=F,l=Error(s(419)),l.stack="",l.digest=E,Il({value:l,source:null,stack:null}),i=lp(n,i,a)}else if(jt||Cl(n,i,a,!1),E=(a&n.childLanes)!==0,jt||E){if(E=st,E!==null&&(l=a&-a,l=(l&42)!==0?1:_i(l),l=(l&(E.suspendedLanes|a))!==0?0:l,l!==0&&l!==k.retryLane))throw k.retryLane=l,qa(n,l),Cn(E,n,l),Wv;T.data==="$?"||Rp(),i=lp(n,i,a)}else T.data==="$?"?(i.flags|=192,i.child=n.child,i=null):(n=k.treeContext,pt=er(T.nextSibling),hn=i,$e=!0,Gs=null,Er=!1,n!==null&&(zn[qn++]=Gr,zn[qn++]=$r,zn[qn++]=Hs,Gr=n.id,$r=n.overflow,Hs=i),i=op(i,l.children),i.flags|=4096);return i}return f?(Oi(),f=l.fallback,T=i.mode,k=n.child,F=k.sibling,l=Fr(k,{mode:"hidden",children:l.children}),l.subtreeFlags=k.subtreeFlags&65011712,F!==null?f=Fr(F,f):(f=Bs(f,T,a,null),f.flags|=2),f.return=i,l.return=i,l.sibling=f,i.child=l,l=f,f=i.child,T=n.child.memoizedState,T===null?T=sp(a):(k=T.cachePool,k!==null?(F=kt._currentValue,k=k.parent!==F?{parent:F,pool:F}:k):k=$y(),T={baseLanes:T.baseLanes|a,cachePool:k}),f.memoizedState=T,f.childLanes=ap(n,E,a),i.memoizedState=ip,l):(Ni(i),a=n.child,n=a.sibling,a=Fr(a,{mode:"visible",children:l.children}),a.return=i,a.sibling=null,n!==null&&(E=i.deletions,E===null?(i.deletions=[n],i.flags|=16):E.push(n)),i.child=a,i.memoizedState=null,a)}function op(n,i){return i=Gc({mode:"visible",children:i},n.mode),i.return=n,n.child=i}function Gc(n,i){return n=wn(22,n,null,i),n.lanes=0,n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},n}function lp(n,i,a){return Ja(i,n.child,null,a),n=op(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function o_(n,i,a){n.lanes|=i;var l=n.alternate;l!==null&&(l.lanes|=i),Rd(n.return,i,a)}function up(n,i,a,l,f){var d=n.memoizedState;d===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:f}:(d.isBackwards=i,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=a,d.tailMode=f)}function l_(n,i,a){var l=i.pendingProps,f=l.revealOrder,d=l.tail;if($t(n,i,l.children,a),l=Mt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&o_(n,a,i);else if(n.tag===19)o_(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}l&=1}switch(se(Mt,l),f){case"forwards":for(a=i.child,f=null;a!==null;)n=a.alternate,n!==null&&qc(n)===null&&(f=a),a=a.sibling;a=f,a===null?(f=i.child,i.child=null):(f=a.sibling,a.sibling=null),up(i,!1,f,a,d);break;case"backwards":for(a=null,f=i.child,i.child=null;f!==null;){if(n=f.alternate,n!==null&&qc(n)===null){i.child=f;break}n=f.sibling,f.sibling=a,a=f,f=n}up(i,!0,a,null,d);break;case"together":up(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Wr(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Li|=i.lanes,(a&i.childLanes)===0)if(n!==null){if(Cl(n,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(n!==null&&i.child!==n.child)throw Error(s(153));if(i.child!==null){for(n=i.child,a=Fr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Fr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function cp(n,i){return(n.lanes&i)!==0?!0:(n=n.dependencies,!!(n!==null&&Ac(n)))}function OA(n,i,a){switch(i.tag){case 3:He(i,i.stateNode.containerInfo),Ri(i,kt,n.memoizedState.cache),Rl();break;case 27:case 5:Nn(i);break;case 4:He(i,i.stateNode.containerInfo);break;case 10:Ri(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(Ni(i),i.flags|=128,null):(a&i.child.childLanes)!==0?a_(n,i,a):(Ni(i),n=Wr(n,i,a),n!==null?n.sibling:null);Ni(i);break;case 19:var f=(n.flags&128)!==0;if(l=(a&i.childLanes)!==0,l||(Cl(n,i,a,!1),l=(a&i.childLanes)!==0),f){if(l)return l_(n,i,a);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),se(Mt,Mt.current),l)break;return null;case 22:case 23:return i.lanes=0,t_(n,i,a);case 24:Ri(i,kt,n.memoizedState.cache)}return Wr(n,i,a)}function u_(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps)jt=!0;else{if(!cp(n,a)&&(i.flags&128)===0)return jt=!1,OA(n,i,a);jt=(n.flags&131072)!==0}else jt=!1,$e&&(i.flags&1048576)!==0&&jy(i,Sc,i.index);switch(i.lanes=0,i.tag){case 16:e:{n=i.pendingProps;var l=i.elementType,f=l._init;if(l=f(l._payload),i.type=l,typeof l=="function")_d(l)?(n=Ws(l,n),i.tag=1,i=i_(null,i,l,n,a)):(i.tag=0,i=rp(null,i,l,n,a));else{if(l!=null){if(f=l.$$typeof,f===le){i.tag=11,i=Jv(null,i,l,n,a);break e}else if(f===D){i.tag=14,i=Zv(null,i,l,n,a);break e}}throw i=Ge(l)||l,Error(s(306,i,""))}}return i;case 0:return rp(n,i,i.type,i.pendingProps,a);case 1:return l=i.type,f=Ws(l,i.pendingProps),i_(n,i,l,f,a);case 3:e:{if(He(i,i.stateNode.containerInfo),n===null)throw Error(s(387));l=i.pendingProps;var d=i.memoizedState;f=d.element,kd(n,i),Pl(i,l,null,a);var E=i.memoizedState;if(l=E.cache,Ri(i,kt,l),l!==d.cache&&Id(i,[kt],a,!0),Ml(),l=E.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:E.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=s_(n,i,l,a);break e}else if(l!==f){f=Un(Error(s(424)),i),Il(f),i=s_(n,i,l,a);break e}else{switch(n=i.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(pt=er(n.firstChild),hn=i,$e=!0,Gs=null,Er=!0,a=qv(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Rl(),l===f){i=Wr(n,i,a);break e}$t(n,i,l,a)}i=i.child}return i;case 26:return Fc(n,i),n===null?(a=d0(i.type,null,i.pendingProps,null))?i.memoizedState=a:$e||(a=i.type,n=i.pendingProps,l=sh(ye.current).createElement(a),l[Dt]=i,l[bt]=n,Qt(l,a,n),yt(l),i.stateNode=l):i.memoizedState=d0(i.type,n.memoizedProps,i.pendingProps,n.memoizedState),null;case 27:return Nn(i),n===null&&$e&&(l=i.stateNode=c0(i.type,i.pendingProps,ye.current),hn=i,Er=!0,f=pt,qi(i.type)?(Fp=f,pt=er(l.firstChild)):pt=f),$t(n,i,i.pendingProps.children,a),Fc(n,i),n===null&&(i.flags|=4194304),i.child;case 5:return n===null&&$e&&((f=l=pt)&&(l=a1(l,i.type,i.pendingProps,Er),l!==null?(i.stateNode=l,hn=i,pt=er(l.firstChild),Er=!1,f=!0):f=!1),f||$s(i)),Nn(i),f=i.type,d=i.pendingProps,E=n!==null?n.memoizedProps:null,l=d.children,zp(f,d)?l=null:E!==null&&zp(f,E)&&(i.flags|=32),i.memoizedState!==null&&(f=jd(n,i,SA,null,null,a),ru._currentValue=f),Fc(n,i),$t(n,i,l,a),i.child;case 6:return n===null&&$e&&((n=a=pt)&&(a=o1(a,i.pendingProps,Er),a!==null?(i.stateNode=a,hn=i,pt=null,n=!0):n=!1),n||$s(i)),null;case 13:return a_(n,i,a);case 4:return He(i,i.stateNode.containerInfo),l=i.pendingProps,n===null?i.child=Ja(i,null,l,a):$t(n,i,l,a),i.child;case 11:return Jv(n,i,i.type,i.pendingProps,a);case 7:return $t(n,i,i.pendingProps,a),i.child;case 8:return $t(n,i,i.pendingProps.children,a),i.child;case 12:return $t(n,i,i.pendingProps.children,a),i.child;case 10:return l=i.pendingProps,Ri(i,i.type,l.value),$t(n,i,l.children,a),i.child;case 9:return f=i.type._context,l=i.pendingProps.children,Qs(i),f=en(f),l=l(f),i.flags|=1,$t(n,i,l,a),i.child;case 14:return Zv(n,i,i.type,i.pendingProps,a);case 15:return e_(n,i,i.type,i.pendingProps,a);case 19:return l_(n,i,a);case 31:return l=i.pendingProps,a=i.mode,l={mode:l.mode,children:l.children},n===null?(a=Gc(l,a),a.ref=i.ref,i.child=a,a.return=i,i=a):(a=Fr(n.child,l),a.ref=i.ref,i.child=a,a.return=i,i=a),i;case 22:return t_(n,i,a);case 24:return Qs(i),l=en(kt),n===null?(f=Dd(),f===null&&(f=st,d=Cd(),f.pooledCache=d,d.refCount++,d!==null&&(f.pooledCacheLanes|=a),f=d),i.memoizedState={parent:l,cache:f},Od(i),Ri(i,kt,f)):((n.lanes&a)!==0&&(kd(n,i),Pl(i,null,null,a),Ml()),f=n.memoizedState,d=i.memoizedState,f.parent!==l?(f={parent:l,cache:l},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),Ri(i,kt,l)):(l=d.cache,Ri(i,kt,l),l!==f.cache&&Id(i,[kt],a,!0))),$t(n,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}function Jr(n){n.flags|=4}function c_(n,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!v0(i)){if(i=Bn.current,i!==null&&((qe&4194048)===qe?Tr!==null:(qe&62914560)!==qe&&(qe&536870912)===0||i!==Tr))throw Ol=Nd,Ky;n.flags|=8192}}function $c(n,i){i!==null&&(n.flags|=4),n.flags&16384&&(i=n.tag!==22?sl():536870912,n.lanes|=i,no|=i)}function Bl(n,i){if(!$e)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:l.sibling=null}}function ht(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,l=0;if(i)for(var f=n.child;f!==null;)a|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)a|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=l,n.childLanes=a,i}function kA(n,i,a){var l=i.pendingProps;switch(wd(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ht(i),null;case 1:return ht(i),null;case 3:return a=i.stateNode,l=null,n!==null&&(l=n.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),Qr(kt),Vt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(n===null||n.child===null)&&(Al(i)?Jr(i):n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,By())),ht(i),null;case 26:return a=i.memoizedState,n===null?(Jr(i),a!==null?(ht(i),c_(i,a)):(ht(i),i.flags&=-16777217)):a?a!==n.memoizedState?(Jr(i),ht(i),c_(i,a)):(ht(i),i.flags&=-16777217):(n.memoizedProps!==l&&Jr(i),ht(i),i.flags&=-16777217),null;case 27:fn(i),a=ye.current;var f=i.type;if(n!==null&&i.stateNode!=null)n.memoizedProps!==l&&Jr(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return ht(i),null}n=ge.current,Al(i)?zy(i):(n=c0(f,l,a),i.stateNode=n,Jr(i))}return ht(i),null;case 5:if(fn(i),a=i.type,n!==null&&i.stateNode!=null)n.memoizedProps!==l&&Jr(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return ht(i),null}if(n=ge.current,Al(i))zy(i);else{switch(f=sh(ye.current),n){case 1:n=f.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:n=f.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":n=f.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":n=f.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":n=f.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof l.is=="string"?f.createElement("select",{is:l.is}):f.createElement("select"),l.multiple?n.multiple=!0:l.size&&(n.size=l.size);break;default:n=typeof l.is=="string"?f.createElement(a,{is:l.is}):f.createElement(a)}}n[Dt]=i,n[bt]=l;e:for(f=i.child;f!==null;){if(f.tag===5||f.tag===6)n.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===i)break e;for(;f.sibling===null;){if(f.return===null||f.return===i)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}i.stateNode=n;e:switch(Qt(n,a,l),a){case"button":case"input":case"select":case"textarea":n=!!l.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&Jr(i)}}return ht(i),i.flags&=-16777217,null;case 6:if(n&&i.stateNode!=null)n.memoizedProps!==l&&Jr(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(s(166));if(n=ye.current,Al(i)){if(n=i.stateNode,a=i.memoizedProps,l=null,f=hn,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}n[Dt]=i,n=!!(n.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||r0(n.nodeValue,a)),n||$s(i)}else n=sh(n).createTextNode(l),n[Dt]=i,i.stateNode=n}return ht(i),null;case 13:if(l=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(f=Al(i),l!==null&&l.dehydrated!==null){if(n===null){if(!f)throw Error(s(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(s(317));f[Dt]=i}else Rl(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;ht(i),f=!1}else f=By(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(Xr(i),i):(Xr(i),null)}if(Xr(i),(i.flags&128)!==0)return i.lanes=a,i;if(a=l!==null,n=n!==null&&n.memoizedState!==null,a){l=i.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool);var d=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==f&&(l.flags|=2048)}return a!==n&&a&&(i.child.flags|=8192),$c(i,i.updateQueue),ht(i),null;case 4:return Vt(),n===null&&Pp(i.stateNode.containerInfo),ht(i),null;case 10:return Qr(i.type),ht(i),null;case 19:if(ae(Mt),f=i.memoizedState,f===null)return ht(i),null;if(l=(i.flags&128)!==0,d=f.rendering,d===null)if(l)Bl(f,!1);else{if(mt!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(d=qc(n),d!==null){for(i.flags|=128,Bl(f,!1),n=d.updateQueue,i.updateQueue=n,$c(i,n),i.subtreeFlags=0,n=a,a=i.child;a!==null;)Uy(a,n),a=a.sibling;return se(Mt,Mt.current&1|2),i.child}n=n.sibling}f.tail!==null&&On()>Yc&&(i.flags|=128,l=!0,Bl(f,!1),i.lanes=4194304)}else{if(!l)if(n=qc(d),n!==null){if(i.flags|=128,l=!0,n=n.updateQueue,i.updateQueue=n,$c(i,n),Bl(f,!0),f.tail===null&&f.tailMode==="hidden"&&!d.alternate&&!$e)return ht(i),null}else 2*On()-f.renderingStartTime>Yc&&a!==536870912&&(i.flags|=128,l=!0,Bl(f,!1),i.lanes=4194304);f.isBackwards?(d.sibling=i.child,i.child=d):(n=f.last,n!==null?n.sibling=d:i.child=d,f.last=d)}return f.tail!==null?(i=f.tail,f.rendering=i,f.tail=i.sibling,f.renderingStartTime=On(),i.sibling=null,n=Mt.current,se(Mt,l?n&1|2:n&1),i):(ht(i),null);case 22:case 23:return Xr(i),Ld(),l=i.memoizedState!==null,n!==null?n.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(a&536870912)!==0&&(i.flags&128)===0&&(ht(i),i.subtreeFlags&6&&(i.flags|=8192)):ht(i),a=i.updateQueue,a!==null&&$c(i,a.retryQueue),a=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==a&&(i.flags|=2048),n!==null&&ae(Ys),null;case 24:return a=null,n!==null&&(a=n.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),Qr(kt),ht(i),null;case 25:return null;case 30:return null}throw Error(s(156,i.tag))}function MA(n,i){switch(wd(i),i.tag){case 1:return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Qr(kt),Vt(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 26:case 27:case 5:return fn(i),null;case 13:if(Xr(i),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(s(340));Rl()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return ae(Mt),null;case 4:return Vt(),null;case 10:return Qr(i.type),null;case 22:case 23:return Xr(i),Ld(),n!==null&&ae(Ys),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 24:return Qr(kt),null;case 25:return null;default:return null}}function h_(n,i){switch(wd(i),i.tag){case 3:Qr(kt),Vt();break;case 26:case 27:case 5:fn(i);break;case 4:Vt();break;case 13:Xr(i);break;case 19:ae(Mt);break;case 10:Qr(i.type);break;case 22:case 23:Xr(i),Ld(),n!==null&&ae(Ys);break;case 24:Qr(kt)}}function Hl(n,i){try{var a=i.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var f=l.next;a=f;do{if((a.tag&n)===n){l=void 0;var d=a.create,E=a.inst;l=d(),E.destroy=l}a=a.next}while(a!==f)}}catch(T){it(i,i.return,T)}}function ki(n,i,a){try{var l=i.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var d=f.next;l=d;do{if((l.tag&n)===n){var E=l.inst,T=E.destroy;if(T!==void 0){E.destroy=void 0,f=i;var k=a,F=T;try{F()}catch(W){it(f,k,W)}}}l=l.next}while(l!==d)}}catch(W){it(i,i.return,W)}}function f_(n){var i=n.updateQueue;if(i!==null){var a=n.stateNode;try{Zy(i,a)}catch(l){it(n,n.return,l)}}}function d_(n,i,a){a.props=Ws(n.type,n.memoizedProps),a.state=n.memoizedState;try{a.componentWillUnmount()}catch(l){it(n,i,l)}}function Fl(n,i){try{var a=n.ref;if(a!==null){switch(n.tag){case 26:case 27:case 5:var l=n.stateNode;break;case 30:l=n.stateNode;break;default:l=n.stateNode}typeof a=="function"?n.refCleanup=a(l):a.current=l}}catch(f){it(n,i,f)}}function br(n,i){var a=n.ref,l=n.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(f){it(n,i,f)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(f){it(n,i,f)}else a.current=null}function p_(n){var i=n.type,a=n.memoizedProps,l=n.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(f){it(n,n.return,f)}}function hp(n,i,a){try{var l=n.stateNode;t1(l,n.type,a,i),l[bt]=i}catch(f){it(n,n.return,f)}}function m_(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&qi(n.type)||n.tag===4}function fp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||m_(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&qi(n.type)||n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function dp(n,i,a){var l=n.tag;if(l===5||l===6)n=n.stateNode,i?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(n,i):(i=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,i.appendChild(n),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=ih));else if(l!==4&&(l===27&&qi(n.type)&&(a=n.stateNode,i=null),n=n.child,n!==null))for(dp(n,i,a),n=n.sibling;n!==null;)dp(n,i,a),n=n.sibling}function Kc(n,i,a){var l=n.tag;if(l===5||l===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(l!==4&&(l===27&&qi(n.type)&&(a=n.stateNode),n=n.child,n!==null))for(Kc(n,i,a),n=n.sibling;n!==null;)Kc(n,i,a),n=n.sibling}function g_(n){var i=n.stateNode,a=n.memoizedProps;try{for(var l=n.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);Qt(i,l,a),i[Dt]=n,i[bt]=a}catch(d){it(n,n.return,d)}}var Zr=!1,_t=!1,pp=!1,y_=typeof WeakSet=="function"?WeakSet:Set,zt=null;function PA(n,i){if(n=n.containerInfo,Up=hh,n=Cy(n),fd(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var f=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var E=0,T=-1,k=-1,F=0,W=0,te=n,$=null;t:for(;;){for(var K;te!==a||f!==0&&te.nodeType!==3||(T=E+f),te!==d||l!==0&&te.nodeType!==3||(k=E+l),te.nodeType===3&&(E+=te.nodeValue.length),(K=te.firstChild)!==null;)$=te,te=K;for(;;){if(te===n)break t;if($===a&&++F===f&&(T=E),$===d&&++W===l&&(k=E),(K=te.nextSibling)!==null)break;te=$,$=te.parentNode}te=K}a=T===-1||k===-1?null:{start:T,end:k}}else a=null}a=a||{start:0,end:0}}else a=null;for(jp={focusedElem:n,selectionRange:a},hh=!1,zt=i;zt!==null;)if(i=zt,n=i.child,(i.subtreeFlags&1024)!==0&&n!==null)n.return=i,zt=n;else for(;zt!==null;){switch(i=zt,d=i.alternate,n=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&d!==null){n=void 0,a=i,f=d.memoizedProps,d=d.memoizedState,l=a.stateNode;try{var Se=Ws(a.type,f,a.elementType===a.type);n=l.getSnapshotBeforeUpdate(Se,d),l.__reactInternalSnapshotBeforeUpdate=n}catch(Ee){it(a,a.return,Ee)}}break;case 3:if((n&1024)!==0){if(n=i.stateNode.containerInfo,a=n.nodeType,a===9)Bp(n);else if(a===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":Bp(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(s(163))}if(n=i.sibling,n!==null){n.return=i.return,zt=n;break}zt=i.return}}function v_(n,i,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Mi(n,a),l&4&&Hl(5,a);break;case 1:if(Mi(n,a),l&4)if(n=a.stateNode,i===null)try{n.componentDidMount()}catch(E){it(a,a.return,E)}else{var f=Ws(a.type,i.memoizedProps);i=i.memoizedState;try{n.componentDidUpdate(f,i,n.__reactInternalSnapshotBeforeUpdate)}catch(E){it(a,a.return,E)}}l&64&&f_(a),l&512&&Fl(a,a.return);break;case 3:if(Mi(n,a),l&64&&(n=a.updateQueue,n!==null)){if(i=null,a.child!==null)switch(a.child.tag){case 27:case 5:i=a.child.stateNode;break;case 1:i=a.child.stateNode}try{Zy(n,i)}catch(E){it(a,a.return,E)}}break;case 27:i===null&&l&4&&g_(a);case 26:case 5:Mi(n,a),i===null&&l&4&&p_(a),l&512&&Fl(a,a.return);break;case 12:Mi(n,a);break;case 13:Mi(n,a),l&4&&T_(n,a),l&64&&(n=a.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(a=FA.bind(null,a),l1(n,a))));break;case 22:if(l=a.memoizedState!==null||Zr,!l){i=i!==null&&i.memoizedState!==null||_t,f=Zr;var d=_t;Zr=l,(_t=i)&&!d?Pi(n,a,(a.subtreeFlags&8772)!==0):Mi(n,a),Zr=f,_t=d}break;case 30:break;default:Mi(n,a)}}function __(n){var i=n.alternate;i!==null&&(n.alternate=null,__(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&bi(i)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var ut=null,pn=!1;function ei(n,i,a){for(a=a.child;a!==null;)E_(n,i,a),a=a.sibling}function E_(n,i,a){if(Xe&&typeof Xe.onCommitFiberUnmount=="function")try{Xe.onCommitFiberUnmount(dt,a)}catch{}switch(a.tag){case 26:_t||br(a,i),ei(n,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:_t||br(a,i);var l=ut,f=pn;qi(a.type)&&(ut=a.stateNode,pn=!1),ei(n,i,a),Zl(a.stateNode),ut=l,pn=f;break;case 5:_t||br(a,i);case 6:if(l=ut,f=pn,ut=null,ei(n,i,a),ut=l,pn=f,ut!==null)if(pn)try{(ut.nodeType===9?ut.body:ut.nodeName==="HTML"?ut.ownerDocument.body:ut).removeChild(a.stateNode)}catch(d){it(a,i,d)}else try{ut.removeChild(a.stateNode)}catch(d){it(a,i,d)}break;case 18:ut!==null&&(pn?(n=ut,l0(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,a.stateNode),ou(n)):l0(ut,a.stateNode));break;case 4:l=ut,f=pn,ut=a.stateNode.containerInfo,pn=!0,ei(n,i,a),ut=l,pn=f;break;case 0:case 11:case 14:case 15:_t||ki(2,a,i),_t||ki(4,a,i),ei(n,i,a);break;case 1:_t||(br(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"&&d_(a,i,l)),ei(n,i,a);break;case 21:ei(n,i,a);break;case 22:_t=(l=_t)||a.memoizedState!==null,ei(n,i,a),_t=l;break;default:ei(n,i,a)}}function T_(n,i){if(i.memoizedState===null&&(n=i.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{ou(n)}catch(a){it(i,i.return,a)}}function VA(n){switch(n.tag){case 13:case 19:var i=n.stateNode;return i===null&&(i=n.stateNode=new y_),i;case 22:return n=n.stateNode,i=n._retryCache,i===null&&(i=n._retryCache=new y_),i;default:throw Error(s(435,n.tag))}}function mp(n,i){var a=VA(n);i.forEach(function(l){var f=GA.bind(null,n,l);a.has(l)||(a.add(l),l.then(f,f))})}function Sn(n,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var f=a[l],d=n,E=i,T=E;e:for(;T!==null;){switch(T.tag){case 27:if(qi(T.type)){ut=T.stateNode,pn=!1;break e}break;case 5:ut=T.stateNode,pn=!1;break e;case 3:case 4:ut=T.stateNode.containerInfo,pn=!0;break e}T=T.return}if(ut===null)throw Error(s(160));E_(d,E,f),ut=null,pn=!1,d=f.alternate,d!==null&&(d.return=null),f.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)b_(i,n),i=i.sibling}var Zn=null;function b_(n,i){var a=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:Sn(i,n),An(n),l&4&&(ki(3,n,n.return),Hl(3,n),ki(5,n,n.return));break;case 1:Sn(i,n),An(n),l&512&&(_t||a===null||br(a,a.return)),l&64&&Zr&&(n=n.updateQueue,n!==null&&(l=n.callbacks,l!==null&&(a=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var f=Zn;if(Sn(i,n),An(n),l&512&&(_t||a===null||br(a,a.return)),l&4){var d=a!==null?a.memoizedState:null;if(l=n.memoizedState,a===null)if(l===null)if(n.stateNode===null){e:{l=n.type,a=n.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":d=f.getElementsByTagName("title")[0],(!d||d[Rs]||d[Dt]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=f.createElement(l),f.head.insertBefore(d,f.querySelector("head > title"))),Qt(d,l,a),d[Dt]=n,yt(d),l=d;break e;case"link":var E=g0("link","href",f).get(l+(a.href||""));if(E){for(var T=0;T<E.length;T++)if(d=E[T],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){E.splice(T,1);break t}}d=f.createElement(l),Qt(d,l,a),f.head.appendChild(d);break;case"meta":if(E=g0("meta","content",f).get(l+(a.content||""))){for(T=0;T<E.length;T++)if(d=E[T],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){E.splice(T,1);break t}}d=f.createElement(l),Qt(d,l,a),f.head.appendChild(d);break;default:throw Error(s(468,l))}d[Dt]=n,yt(d),l=d}n.stateNode=l}else y0(f,n.type,n.stateNode);else n.stateNode=m0(f,l,n.memoizedProps);else d!==l?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,l===null?y0(f,n.type,n.stateNode):m0(f,l,n.memoizedProps)):l===null&&n.stateNode!==null&&hp(n,n.memoizedProps,a.memoizedProps)}break;case 27:Sn(i,n),An(n),l&512&&(_t||a===null||br(a,a.return)),a!==null&&l&4&&hp(n,n.memoizedProps,a.memoizedProps);break;case 5:if(Sn(i,n),An(n),l&512&&(_t||a===null||br(a,a.return)),n.flags&32){f=n.stateNode;try{Mn(f,"")}catch(K){it(n,n.return,K)}}l&4&&n.stateNode!=null&&(f=n.memoizedProps,hp(n,f,a!==null?a.memoizedProps:f)),l&1024&&(pp=!0);break;case 6:if(Sn(i,n),An(n),l&4){if(n.stateNode===null)throw Error(s(162));l=n.memoizedProps,a=n.stateNode;try{a.nodeValue=l}catch(K){it(n,n.return,K)}}break;case 3:if(lh=null,f=Zn,Zn=ah(i.containerInfo),Sn(i,n),Zn=f,An(n),l&4&&a!==null&&a.memoizedState.isDehydrated)try{ou(i.containerInfo)}catch(K){it(n,n.return,K)}pp&&(pp=!1,w_(n));break;case 4:l=Zn,Zn=ah(n.stateNode.containerInfo),Sn(i,n),An(n),Zn=l;break;case 12:Sn(i,n),An(n);break;case 13:Sn(i,n),An(n),n.child.flags&8192&&n.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Tp=On()),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,mp(n,l)));break;case 22:f=n.memoizedState!==null;var k=a!==null&&a.memoizedState!==null,F=Zr,W=_t;if(Zr=F||f,_t=W||k,Sn(i,n),_t=W,Zr=F,An(n),l&8192)e:for(i=n.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(a===null||k||Zr||_t||Js(n)),a=null,i=n;;){if(i.tag===5||i.tag===26){if(a===null){k=a=i;try{if(d=k.stateNode,f)E=d.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{T=k.stateNode;var te=k.memoizedProps.style,$=te!=null&&te.hasOwnProperty("display")?te.display:null;T.style.display=$==null||typeof $=="boolean"?"":(""+$).trim()}}catch(K){it(k,k.return,K)}}}else if(i.tag===6){if(a===null){k=i;try{k.stateNode.nodeValue=f?"":k.memoizedProps}catch(K){it(k,k.return,K)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===n)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break e;for(;i.sibling===null;){if(i.return===null||i.return===n)break e;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=n.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,mp(n,a))));break;case 19:Sn(i,n),An(n),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,mp(n,l)));break;case 30:break;case 21:break;default:Sn(i,n),An(n)}}function An(n){var i=n.flags;if(i&2){try{for(var a,l=n.return;l!==null;){if(m_(l)){a=l;break}l=l.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var f=a.stateNode,d=fp(n);Kc(n,d,f);break;case 5:var E=a.stateNode;a.flags&32&&(Mn(E,""),a.flags&=-33);var T=fp(n);Kc(n,T,E);break;case 3:case 4:var k=a.stateNode.containerInfo,F=fp(n);dp(n,F,k);break;default:throw Error(s(161))}}catch(W){it(n,n.return,W)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function w_(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var i=n;w_(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),n=n.sibling}}function Mi(n,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)v_(n,i.alternate,i),i=i.sibling}function Js(n){for(n=n.child;n!==null;){var i=n;switch(i.tag){case 0:case 11:case 14:case 15:ki(4,i,i.return),Js(i);break;case 1:br(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&d_(i,i.return,a),Js(i);break;case 27:Zl(i.stateNode);case 26:case 5:br(i,i.return),Js(i);break;case 22:i.memoizedState===null&&Js(i);break;case 30:Js(i);break;default:Js(i)}n=n.sibling}}function Pi(n,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,f=n,d=i,E=d.flags;switch(d.tag){case 0:case 11:case 15:Pi(f,d,a),Hl(4,d);break;case 1:if(Pi(f,d,a),l=d,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(F){it(l,l.return,F)}if(l=d,f=l.updateQueue,f!==null){var T=l.stateNode;try{var k=f.shared.hiddenCallbacks;if(k!==null)for(f.shared.hiddenCallbacks=null,f=0;f<k.length;f++)Jy(k[f],T)}catch(F){it(l,l.return,F)}}a&&E&64&&f_(d),Fl(d,d.return);break;case 27:g_(d);case 26:case 5:Pi(f,d,a),a&&l===null&&E&4&&p_(d),Fl(d,d.return);break;case 12:Pi(f,d,a);break;case 13:Pi(f,d,a),a&&E&4&&T_(f,d);break;case 22:d.memoizedState===null&&Pi(f,d,a),Fl(d,d.return);break;case 30:break;default:Pi(f,d,a)}i=i.sibling}}function gp(n,i){var a=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),n=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(n=i.memoizedState.cachePool.pool),n!==a&&(n!=null&&n.refCount++,a!=null&&xl(a))}function yp(n,i){n=null,i.alternate!==null&&(n=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==n&&(i.refCount++,n!=null&&xl(n))}function wr(n,i,a,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)S_(n,i,a,l),i=i.sibling}function S_(n,i,a,l){var f=i.flags;switch(i.tag){case 0:case 11:case 15:wr(n,i,a,l),f&2048&&Hl(9,i);break;case 1:wr(n,i,a,l);break;case 3:wr(n,i,a,l),f&2048&&(n=null,i.alternate!==null&&(n=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==n&&(i.refCount++,n!=null&&xl(n)));break;case 12:if(f&2048){wr(n,i,a,l),n=i.stateNode;try{var d=i.memoizedProps,E=d.id,T=d.onPostCommit;typeof T=="function"&&T(E,i.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(k){it(i,i.return,k)}}else wr(n,i,a,l);break;case 13:wr(n,i,a,l);break;case 23:break;case 22:d=i.stateNode,E=i.alternate,i.memoizedState!==null?d._visibility&2?wr(n,i,a,l):Gl(n,i):d._visibility&2?wr(n,i,a,l):(d._visibility|=2,Za(n,i,a,l,(i.subtreeFlags&10256)!==0)),f&2048&&gp(E,i);break;case 24:wr(n,i,a,l),f&2048&&yp(i.alternate,i);break;default:wr(n,i,a,l)}}function Za(n,i,a,l,f){for(f=f&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var d=n,E=i,T=a,k=l,F=E.flags;switch(E.tag){case 0:case 11:case 15:Za(d,E,T,k,f),Hl(8,E);break;case 23:break;case 22:var W=E.stateNode;E.memoizedState!==null?W._visibility&2?Za(d,E,T,k,f):Gl(d,E):(W._visibility|=2,Za(d,E,T,k,f)),f&&F&2048&&gp(E.alternate,E);break;case 24:Za(d,E,T,k,f),f&&F&2048&&yp(E.alternate,E);break;default:Za(d,E,T,k,f)}i=i.sibling}}function Gl(n,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=n,l=i,f=l.flags;switch(l.tag){case 22:Gl(a,l),f&2048&&gp(l.alternate,l);break;case 24:Gl(a,l),f&2048&&yp(l.alternate,l);break;default:Gl(a,l)}i=i.sibling}}var $l=8192;function eo(n){if(n.subtreeFlags&$l)for(n=n.child;n!==null;)A_(n),n=n.sibling}function A_(n){switch(n.tag){case 26:eo(n),n.flags&$l&&n.memoizedState!==null&&T1(Zn,n.memoizedState,n.memoizedProps);break;case 5:eo(n);break;case 3:case 4:var i=Zn;Zn=ah(n.stateNode.containerInfo),eo(n),Zn=i;break;case 22:n.memoizedState===null&&(i=n.alternate,i!==null&&i.memoizedState!==null?(i=$l,$l=16777216,eo(n),$l=i):eo(n));break;default:eo(n)}}function R_(n){var i=n.alternate;if(i!==null&&(n=i.child,n!==null)){i.child=null;do i=n.sibling,n.sibling=null,n=i;while(n!==null)}}function Kl(n){var i=n.deletions;if((n.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];zt=l,C_(l,n)}R_(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)I_(n),n=n.sibling}function I_(n){switch(n.tag){case 0:case 11:case 15:Kl(n),n.flags&2048&&ki(9,n,n.return);break;case 3:Kl(n);break;case 12:Kl(n);break;case 22:var i=n.stateNode;n.memoizedState!==null&&i._visibility&2&&(n.return===null||n.return.tag!==13)?(i._visibility&=-3,Qc(n)):Kl(n);break;default:Kl(n)}}function Qc(n){var i=n.deletions;if((n.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];zt=l,C_(l,n)}R_(n)}for(n=n.child;n!==null;){switch(i=n,i.tag){case 0:case 11:case 15:ki(8,i,i.return),Qc(i);break;case 22:a=i.stateNode,a._visibility&2&&(a._visibility&=-3,Qc(i));break;default:Qc(i)}n=n.sibling}}function C_(n,i){for(;zt!==null;){var a=zt;switch(a.tag){case 0:case 11:case 15:ki(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:xl(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,zt=l;else e:for(a=n;zt!==null;){l=zt;var f=l.sibling,d=l.return;if(__(l),l===a){zt=null;break e}if(f!==null){f.return=d,zt=f;break e}zt=d}}}var LA={getCacheForType:function(n){var i=en(kt),a=i.data.get(n);return a===void 0&&(a=n(),i.data.set(n,a)),a}},UA=typeof WeakMap=="function"?WeakMap:Map,We=0,st=null,Me=null,qe=0,Je=0,Rn=null,Vi=!1,to=!1,vp=!1,ti=0,mt=0,Li=0,Zs=0,_p=0,Hn=0,no=0,Ql=null,mn=null,Ep=!1,Tp=0,Yc=1/0,Xc=null,Ui=null,Kt=0,ji=null,ro=null,io=0,bp=0,wp=null,x_=null,Yl=0,Sp=null;function In(){if((We&2)!==0&&qe!==0)return qe&-qe;if(X.T!==null){var n=Ga;return n!==0?n:Np()}return Ei()}function D_(){Hn===0&&(Hn=(qe&536870912)===0||$e?il():536870912);var n=Bn.current;return n!==null&&(n.flags|=32),Hn}function Cn(n,i,a){(n===st&&(Je===2||Je===9)||n.cancelPendingCommit!==null)&&(so(n,0),zi(n,qe,Hn,!1)),kr(n,a),((We&2)===0||n!==st)&&(n===st&&((We&2)===0&&(Zs|=a),mt===4&&zi(n,qe,Hn,!1)),Sr(n))}function N_(n,i,a){if((We&6)!==0)throw Error(s(327));var l=!a&&(i&124)===0&&(i&n.expiredLanes)===0||As(n,i),f=l?qA(n,i):Ip(n,i,!0),d=l;do{if(f===0){to&&!l&&zi(n,i,0,!1);break}else{if(a=n.current.alternate,d&&!jA(a)){f=Ip(n,i,!1),d=!1;continue}if(f===2){if(d=i,n.errorRecoveryDisabledLanes&d)var E=0;else E=n.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){i=E;e:{var T=n;f=Ql;var k=T.current.memoizedState.isDehydrated;if(k&&(so(T,E).flags|=256),E=Ip(T,E,!1),E!==2){if(vp&&!k){T.errorRecoveryDisabledLanes|=d,Zs|=d,f=4;break e}d=mn,mn=f,d!==null&&(mn===null?mn=d:mn.push.apply(mn,d))}f=E}if(d=!1,f!==2)continue}}if(f===1){so(n,0),zi(n,i,0,!0);break}e:{switch(l=n,d=f,d){case 0:case 1:throw Error(s(345));case 4:if((i&4194048)!==i)break;case 6:zi(l,i,Hn,!Vi);break e;case 2:mn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((i&62914560)===i&&(f=Tp+300-On(),10<f)){if(zi(l,i,Hn,!Vi),ba(l,0,!0)!==0)break e;l.timeoutHandle=a0(O_.bind(null,l,a,mn,Xc,Ep,i,Hn,Zs,no,Vi,d,2,-0,0),f);break e}O_(l,a,mn,Xc,Ep,i,Hn,Zs,no,Vi,d,0,-0,0)}}break}while(!0);Sr(n)}function O_(n,i,a,l,f,d,E,T,k,F,W,te,$,K){if(n.timeoutHandle=-1,te=i.subtreeFlags,(te&8192||(te&16785408)===16785408)&&(nu={stylesheets:null,count:0,unsuspend:E1},A_(i),te=b1(),te!==null)){n.cancelPendingCommit=te(j_.bind(null,n,i,d,a,l,f,E,T,k,W,1,$,K)),zi(n,d,E,!F);return}j_(n,i,d,a,l,f,E,T,k)}function jA(n){for(var i=n;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var f=a[l],d=f.getSnapshot;f=f.value;try{if(!bn(d(),f))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function zi(n,i,a,l){i&=~_p,i&=~Zs,n.suspendedLanes|=i,n.pingedLanes&=~i,l&&(n.warmLanes|=i),l=n.expirationTimes;for(var f=i;0<f;){var d=31-Zt(f),E=1<<d;l[d]=-1,f&=~E}a!==0&&ur(n,a,i)}function Wc(){return(We&6)===0?(Xl(0),!1):!0}function Ap(){if(Me!==null){if(Je===0)var n=Me.return;else n=Me,Kr=Ks=null,Bd(n),Wa=null,zl=0,n=Me;for(;n!==null;)h_(n.alternate,n),n=n.return;Me=null}}function so(n,i){var a=n.timeoutHandle;a!==-1&&(n.timeoutHandle=-1,r1(a)),a=n.cancelPendingCommit,a!==null&&(n.cancelPendingCommit=null,a()),Ap(),st=n,Me=a=Fr(n.current,null),qe=i,Je=0,Rn=null,Vi=!1,to=As(n,i),vp=!1,no=Hn=_p=Zs=Li=mt=0,mn=Ql=null,Ep=!1,(i&8)!==0&&(i|=i&32);var l=n.entangledLanes;if(l!==0)for(n=n.entanglements,l&=i;0<l;){var f=31-Zt(l),d=1<<f;i|=n[f],l&=~d}return ti=i,_c(),a}function k_(n,i){Ne=null,X.H=Uc,i===Nl||i===Cc?(i=Xy(),Je=3):i===Ky?(i=Xy(),Je=4):Je=i===Wv?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,Rn=i,Me===null&&(mt=1,Hc(n,Un(i,n.current)))}function M_(){var n=X.H;return X.H=Uc,n===null?Uc:n}function P_(){var n=X.A;return X.A=LA,n}function Rp(){mt=4,Vi||(qe&4194048)!==qe&&Bn.current!==null||(to=!0),(Li&134217727)===0&&(Zs&134217727)===0||st===null||zi(st,qe,Hn,!1)}function Ip(n,i,a){var l=We;We|=2;var f=M_(),d=P_();(st!==n||qe!==i)&&(Xc=null,so(n,i)),i=!1;var E=mt;e:do try{if(Je!==0&&Me!==null){var T=Me,k=Rn;switch(Je){case 8:Ap(),E=6;break e;case 3:case 2:case 9:case 6:Bn.current===null&&(i=!0);var F=Je;if(Je=0,Rn=null,ao(n,T,k,F),a&&to){E=0;break e}break;default:F=Je,Je=0,Rn=null,ao(n,T,k,F)}}zA(),E=mt;break}catch(W){k_(n,W)}while(!0);return i&&n.shellSuspendCounter++,Kr=Ks=null,We=l,X.H=f,X.A=d,Me===null&&(st=null,qe=0,_c()),E}function zA(){for(;Me!==null;)V_(Me)}function qA(n,i){var a=We;We|=2;var l=M_(),f=P_();st!==n||qe!==i?(Xc=null,Yc=On()+500,so(n,i)):to=As(n,i);e:do try{if(Je!==0&&Me!==null){i=Me;var d=Rn;t:switch(Je){case 1:Je=0,Rn=null,ao(n,i,d,1);break;case 2:case 9:if(Qy(d)){Je=0,Rn=null,L_(i);break}i=function(){Je!==2&&Je!==9||st!==n||(Je=7),Sr(n)},d.then(i,i);break e;case 3:Je=7;break e;case 4:Je=5;break e;case 7:Qy(d)?(Je=0,Rn=null,L_(i)):(Je=0,Rn=null,ao(n,i,d,7));break;case 5:var E=null;switch(Me.tag){case 26:E=Me.memoizedState;case 5:case 27:var T=Me;if(!E||v0(E)){Je=0,Rn=null;var k=T.sibling;if(k!==null)Me=k;else{var F=T.return;F!==null?(Me=F,Jc(F)):Me=null}break t}}Je=0,Rn=null,ao(n,i,d,5);break;case 6:Je=0,Rn=null,ao(n,i,d,6);break;case 8:Ap(),mt=6;break e;default:throw Error(s(462))}}BA();break}catch(W){k_(n,W)}while(!0);return Kr=Ks=null,X.H=l,X.A=f,We=a,Me!==null?0:(st=null,qe=0,_c(),mt)}function BA(){for(;Me!==null&&!el();)V_(Me)}function V_(n){var i=u_(n.alternate,n,ti);n.memoizedProps=n.pendingProps,i===null?Jc(n):Me=i}function L_(n){var i=n,a=i.alternate;switch(i.tag){case 15:case 0:i=r_(a,i,i.pendingProps,i.type,void 0,qe);break;case 11:i=r_(a,i,i.pendingProps,i.type.render,i.ref,qe);break;case 5:Bd(i);default:h_(a,i),i=Me=Uy(i,ti),i=u_(a,i,ti)}n.memoizedProps=n.pendingProps,i===null?Jc(n):Me=i}function ao(n,i,a,l){Kr=Ks=null,Bd(i),Wa=null,zl=0;var f=i.return;try{if(NA(n,f,i,a,qe)){mt=1,Hc(n,Un(a,n.current)),Me=null;return}}catch(d){if(f!==null)throw Me=f,d;mt=1,Hc(n,Un(a,n.current)),Me=null;return}i.flags&32768?($e||l===1?n=!0:to||(qe&536870912)!==0?n=!1:(Vi=n=!0,(l===2||l===9||l===3||l===6)&&(l=Bn.current,l!==null&&l.tag===13&&(l.flags|=16384))),U_(i,n)):Jc(i)}function Jc(n){var i=n;do{if((i.flags&32768)!==0){U_(i,Vi);return}n=i.return;var a=kA(i.alternate,i,ti);if(a!==null){Me=a;return}if(i=i.sibling,i!==null){Me=i;return}Me=i=n}while(i!==null);mt===0&&(mt=5)}function U_(n,i){do{var a=MA(n.alternate,n);if(a!==null){a.flags&=32767,Me=a;return}if(a=n.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(n=n.sibling,n!==null)){Me=n;return}Me=n=a}while(n!==null);mt=6,Me=null}function j_(n,i,a,l,f,d,E,T,k){n.cancelPendingCommit=null;do Zc();while(Kt!==0);if((We&6)!==0)throw Error(s(327));if(i!==null){if(i===n.current)throw Error(s(177));if(d=i.lanes|i.childLanes,d|=yd,al(n,a,d,E,T,k),n===st&&(Me=st=null,qe=0),ro=i,ji=n,io=a,bp=d,wp=f,x_=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,$A(Ts,function(){return F_(),null})):(n.callbackNode=null,n.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=X.T,X.T=null,f=ce.p,ce.p=2,E=We,We|=4;try{PA(n,i,a)}finally{We=E,ce.p=f,X.T=l}}Kt=1,z_(),q_(),B_()}}function z_(){if(Kt===1){Kt=0;var n=ji,i=ro,a=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||a){a=X.T,X.T=null;var l=ce.p;ce.p=2;var f=We;We|=4;try{b_(i,n);var d=jp,E=Cy(n.containerInfo),T=d.focusedElem,k=d.selectionRange;if(E!==T&&T&&T.ownerDocument&&Iy(T.ownerDocument.documentElement,T)){if(k!==null&&fd(T)){var F=k.start,W=k.end;if(W===void 0&&(W=F),"selectionStart"in T)T.selectionStart=F,T.selectionEnd=Math.min(W,T.value.length);else{var te=T.ownerDocument||document,$=te&&te.defaultView||window;if($.getSelection){var K=$.getSelection(),Se=T.textContent.length,Ee=Math.min(k.start,Se),rt=k.end===void 0?Ee:Math.min(k.end,Se);!K.extend&&Ee>rt&&(E=rt,rt=Ee,Ee=E);var j=Ry(T,Ee),V=Ry(T,rt);if(j&&V&&(K.rangeCount!==1||K.anchorNode!==j.node||K.anchorOffset!==j.offset||K.focusNode!==V.node||K.focusOffset!==V.offset)){var B=te.createRange();B.setStart(j.node,j.offset),K.removeAllRanges(),Ee>rt?(K.addRange(B),K.extend(V.node,V.offset)):(B.setEnd(V.node,V.offset),K.addRange(B))}}}}for(te=[],K=T;K=K.parentNode;)K.nodeType===1&&te.push({element:K,left:K.scrollLeft,top:K.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<te.length;T++){var Z=te[T];Z.element.scrollLeft=Z.left,Z.element.scrollTop=Z.top}}hh=!!Up,jp=Up=null}finally{We=f,ce.p=l,X.T=a}}n.current=i,Kt=2}}function q_(){if(Kt===2){Kt=0;var n=ji,i=ro,a=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||a){a=X.T,X.T=null;var l=ce.p;ce.p=2;var f=We;We|=4;try{v_(n,i.alternate,i)}finally{We=f,ce.p=l,X.T=a}}Kt=3}}function B_(){if(Kt===4||Kt===3){Kt=0,Qu();var n=ji,i=ro,a=io,l=x_;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Kt=5:(Kt=0,ro=ji=null,H_(n,n.pendingLanes));var f=n.pendingLanes;if(f===0&&(Ui=null),wa(a),i=i.stateNode,Xe&&typeof Xe.onCommitFiberRoot=="function")try{Xe.onCommitFiberRoot(dt,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=X.T,f=ce.p,ce.p=2,X.T=null;try{for(var d=n.onRecoverableError,E=0;E<l.length;E++){var T=l[E];d(T.value,{componentStack:T.stack})}}finally{X.T=i,ce.p=f}}(io&3)!==0&&Zc(),Sr(n),f=n.pendingLanes,(a&4194090)!==0&&(f&42)!==0?n===Sp?Yl++:(Yl=0,Sp=n):Yl=0,Xl(0)}}function H_(n,i){(n.pooledCacheLanes&=i)===0&&(i=n.pooledCache,i!=null&&(n.pooledCache=null,xl(i)))}function Zc(n){return z_(),q_(),B_(),F_()}function F_(){if(Kt!==5)return!1;var n=ji,i=bp;bp=0;var a=wa(io),l=X.T,f=ce.p;try{ce.p=32>a?32:a,X.T=null,a=wp,wp=null;var d=ji,E=io;if(Kt=0,ro=ji=null,io=0,(We&6)!==0)throw Error(s(331));var T=We;if(We|=4,I_(d.current),S_(d,d.current,E,a),We=T,Xl(0,!1),Xe&&typeof Xe.onPostCommitFiberRoot=="function")try{Xe.onPostCommitFiberRoot(dt,d)}catch{}return!0}finally{ce.p=f,X.T=l,H_(n,i)}}function G_(n,i,a){i=Un(a,i),i=np(n.stateNode,i,2),n=xi(n,i,2),n!==null&&(kr(n,2),Sr(n))}function it(n,i,a){if(n.tag===3)G_(n,n,a);else for(;i!==null;){if(i.tag===3){G_(i,n,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ui===null||!Ui.has(l))){n=Un(a,n),a=Yv(2),l=xi(i,a,2),l!==null&&(Xv(a,l,i,n),kr(l,2),Sr(l));break}}i=i.return}}function Cp(n,i,a){var l=n.pingCache;if(l===null){l=n.pingCache=new UA;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(a)||(vp=!0,f.add(a),n=HA.bind(null,n,i,a),i.then(n,n))}function HA(n,i,a){var l=n.pingCache;l!==null&&l.delete(i),n.pingedLanes|=n.suspendedLanes&a,n.warmLanes&=~a,st===n&&(qe&a)===a&&(mt===4||mt===3&&(qe&62914560)===qe&&300>On()-Tp?(We&2)===0&&so(n,0):_p|=a,no===qe&&(no=0)),Sr(n)}function $_(n,i){i===0&&(i=sl()),n=qa(n,i),n!==null&&(kr(n,i),Sr(n))}function FA(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),$_(n,a)}function GA(n,i){var a=0;switch(n.tag){case 13:var l=n.stateNode,f=n.memoizedState;f!==null&&(a=f.retryLane);break;case 19:l=n.stateNode;break;case 22:l=n.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(i),$_(n,a)}function $A(n,i){return _s(n,i)}var eh=null,oo=null,xp=!1,th=!1,Dp=!1,ea=0;function Sr(n){n!==oo&&n.next===null&&(oo===null?eh=oo=n:oo=oo.next=n),th=!0,xp||(xp=!0,QA())}function Xl(n,i){if(!Dp&&th){Dp=!0;do for(var a=!1,l=eh;l!==null;){if(n!==0){var f=l.pendingLanes;if(f===0)var d=0;else{var E=l.suspendedLanes,T=l.pingedLanes;d=(1<<31-Zt(42|n)+1)-1,d&=f&~(E&~T),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,X_(l,d))}else d=qe,d=ba(l,l===st?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||As(l,d)||(a=!0,X_(l,d));l=l.next}while(a);Dp=!1}}function KA(){K_()}function K_(){th=xp=!1;var n=0;ea!==0&&(n1()&&(n=ea),ea=0);for(var i=On(),a=null,l=eh;l!==null;){var f=l.next,d=Q_(l,i);d===0?(l.next=null,a===null?eh=f:a.next=f,f===null&&(oo=a)):(a=l,(n!==0||(d&3)!==0)&&(th=!0)),l=f}Xl(n)}function Q_(n,i){for(var a=n.suspendedLanes,l=n.pingedLanes,f=n.expirationTimes,d=n.pendingLanes&-62914561;0<d;){var E=31-Zt(d),T=1<<E,k=f[E];k===-1?((T&a)===0||(T&l)!==0)&&(f[E]=rl(T,i)):k<=i&&(n.expiredLanes|=T),d&=~T}if(i=st,a=qe,a=ba(n,n===i?a:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),l=n.callbackNode,a===0||n===i&&(Je===2||Je===9)||n.cancelPendingCommit!==null)return l!==null&&l!==null&&Es(l),n.callbackNode=null,n.callbackPriority=0;if((a&3)===0||As(n,a)){if(i=a&-a,i===n.callbackPriority)return i;switch(l!==null&&Es(l),wa(a)){case 2:case 8:a=Ea;break;case 32:a=Ts;break;case 268435456:a=Ta;break;default:a=Ts}return l=Y_.bind(null,n),a=_s(a,l),n.callbackPriority=i,n.callbackNode=a,i}return l!==null&&l!==null&&Es(l),n.callbackPriority=2,n.callbackNode=null,2}function Y_(n,i){if(Kt!==0&&Kt!==5)return n.callbackNode=null,n.callbackPriority=0,null;var a=n.callbackNode;if(Zc()&&n.callbackNode!==a)return null;var l=qe;return l=ba(n,n===st?l:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),l===0?null:(N_(n,l,i),Q_(n,On()),n.callbackNode!=null&&n.callbackNode===a?Y_.bind(null,n):null)}function X_(n,i){if(Zc())return null;N_(n,i,!0)}function QA(){i1(function(){(We&6)!==0?_s(tl,KA):K_()})}function Np(){return ea===0&&(ea=il()),ea}function W_(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:xa(""+n)}function J_(n,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,n.id&&a.setAttribute("form",n.id),i.parentNode.insertBefore(a,i),n=new FormData(n),a.parentNode.removeChild(a),n}function YA(n,i,a,l,f){if(i==="submit"&&a&&a.stateNode===f){var d=W_((f[bt]||null).action),E=l.submitter;E&&(i=(i=E[bt]||null)?W_(i.formAction):E.getAttribute("formAction"),i!==null&&(d=i,E=null));var T=new Da("action","action",null,l,f);n.push({event:T,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(ea!==0){var k=E?J_(f,E):new FormData(f);Wd(a,{pending:!0,data:k,method:f.method,action:d},null,k)}}else typeof d=="function"&&(T.preventDefault(),k=E?J_(f,E):new FormData(f),Wd(a,{pending:!0,data:k,method:f.method,action:d},d,k))},currentTarget:f}]})}}for(var Op=0;Op<gd.length;Op++){var kp=gd[Op],XA=kp.toLowerCase(),WA=kp[0].toUpperCase()+kp.slice(1);Jn(XA,"on"+WA)}Jn(Ny,"onAnimationEnd"),Jn(Oy,"onAnimationIteration"),Jn(ky,"onAnimationStart"),Jn("dblclick","onDoubleClick"),Jn("focusin","onFocus"),Jn("focusout","onBlur"),Jn(pA,"onTransitionRun"),Jn(mA,"onTransitionStart"),Jn(gA,"onTransitionCancel"),Jn(My,"onTransitionEnd"),Pr("onMouseEnter",["mouseout","mouseover"]),Pr("onMouseLeave",["mouseout","mouseover"]),Pr("onPointerEnter",["pointerout","pointerover"]),Pr("onPointerLeave",["pointerout","pointerover"]),Xn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Xn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Xn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Xn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Xn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Xn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),JA=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Wl));function Z_(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var l=n[a],f=l.event;l=l.listeners;e:{var d=void 0;if(i)for(var E=l.length-1;0<=E;E--){var T=l[E],k=T.instance,F=T.currentTarget;if(T=T.listener,k!==d&&f.isPropagationStopped())break e;d=T,f.currentTarget=F;try{d(f)}catch(W){Bc(W)}f.currentTarget=null,d=k}else for(E=0;E<l.length;E++){if(T=l[E],k=T.instance,F=T.currentTarget,T=T.listener,k!==d&&f.isPropagationStopped())break e;d=T,f.currentTarget=F;try{d(f)}catch(W){Bc(W)}f.currentTarget=null,d=k}}}}function Pe(n,i){var a=i[ll];a===void 0&&(a=i[ll]=new Set);var l=n+"__bubble";a.has(l)||(e0(i,n,2,!1),a.add(l))}function Mp(n,i,a){var l=0;i&&(l|=4),e0(a,n,l,i)}var nh="_reactListening"+Math.random().toString(36).slice(2);function Pp(n){if(!n[nh]){n[nh]=!0,ul.forEach(function(a){a!=="selectionchange"&&(JA.has(a)||Mp(a,!1,n),Mp(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[nh]||(i[nh]=!0,Mp("selectionchange",!1,i))}}function e0(n,i,a,l){switch(S0(i)){case 2:var f=A1;break;case 8:f=R1;break;default:f=Yp}a=f.bind(null,i,a,n),f=void 0,!Vn||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?n.addEventListener(i,a,{capture:!0,passive:f}):n.addEventListener(i,a,!0):f!==void 0?n.addEventListener(i,a,{passive:f}):n.addEventListener(i,a,!1)}function Vp(n,i,a,l,f){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var E=l.tag;if(E===3||E===4){var T=l.stateNode.containerInfo;if(T===f)break;if(E===4)for(E=l.return;E!==null;){var k=E.tag;if((k===3||k===4)&&E.stateNode.containerInfo===f)return;E=E.return}for(;T!==null;){if(E=Mr(T),E===null)return;if(k=E.tag,k===5||k===6||k===26||k===27){l=d=E;continue e}T=T.parentNode}}l=l.return}ic(function(){var F=d,W=Pn(a),te=[];e:{var $=Py.get(n);if($!==void 0){var K=Da,Se=n;switch(n){case"keypress":if(mr(a)===0)break e;case"keydown":case"keyup":K=Va;break;case"focusin":Se="focus",K=ka;break;case"focusout":Se="blur",K=ka;break;case"beforeblur":case"afterblur":K=ka;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":K=Ln;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":K=ld;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":K=fc;break;case Ny:case Oy:case ky:K=Ma;break;case My:K=pc;break;case"scroll":case"scrollend":K=sc;break;case"wheel":K=La;break;case"copy":case"cut":case"paste":K=Pa;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":K=Tl;break;case"toggle":case"beforetoggle":K=gc}var Ee=(i&4)!==0,rt=!Ee&&(n==="scroll"||n==="scrollend"),j=Ee?$!==null?$+"Capture":null:$;Ee=[];for(var V=F,B;V!==null;){var Z=V;if(B=Z.stateNode,Z=Z.tag,Z!==5&&Z!==26&&Z!==27||B===null||j===null||(Z=ks(V,j),Z!=null&&Ee.push(Jl(V,Z,B))),rt)break;V=V.return}0<Ee.length&&($=new K($,Se,null,a,W),te.push({event:$,listeners:Ee}))}}if((i&7)===0){e:{if($=n==="mouseover"||n==="pointerover",K=n==="mouseout"||n==="pointerout",$&&a!==Ur&&(Se=a.relatedTarget||a.fromElement)&&(Mr(Se)||Se[kn]))break e;if((K||$)&&($=W.window===W?W:($=W.ownerDocument)?$.defaultView||$.parentWindow:window,K?(Se=a.relatedTarget||a.toElement,K=F,Se=Se?Mr(Se):null,Se!==null&&(rt=u(Se),Ee=Se.tag,Se!==rt||Ee!==5&&Ee!==27&&Ee!==6)&&(Se=null)):(K=null,Se=F),K!==Se)){if(Ee=Ln,Z="onMouseLeave",j="onMouseEnter",V="mouse",(n==="pointerout"||n==="pointerover")&&(Ee=Tl,Z="onPointerLeave",j="onPointerEnter",V="pointer"),rt=K==null?$:hr(K),B=Se==null?$:hr(Se),$=new Ee(Z,V+"leave",K,a,W),$.target=rt,$.relatedTarget=B,Z=null,Mr(W)===F&&(Ee=new Ee(j,V+"enter",Se,a,W),Ee.target=B,Ee.relatedTarget=rt,Z=Ee),rt=Z,K&&Se)t:{for(Ee=K,j=Se,V=0,B=Ee;B;B=lo(B))V++;for(B=0,Z=j;Z;Z=lo(Z))B++;for(;0<V-B;)Ee=lo(Ee),V--;for(;0<B-V;)j=lo(j),B--;for(;V--;){if(Ee===j||j!==null&&Ee===j.alternate)break t;Ee=lo(Ee),j=lo(j)}Ee=null}else Ee=null;K!==null&&t0(te,$,K,Ee,!1),Se!==null&&rt!==null&&t0(te,rt,Se,Ee,!0)}}e:{if($=F?hr(F):window,K=$.nodeName&&$.nodeName.toLowerCase(),K==="select"||K==="input"&&$.type==="file")var pe=Ey;else if(Ot($))if(Ty)pe=hA;else{pe=uA;var ke=lA}else K=$.nodeName,!K||K.toLowerCase()!=="input"||$.type!=="checkbox"&&$.type!=="radio"?F&&pl(F.elementType)&&(pe=Ey):pe=cA;if(pe&&(pe=pe(n,F))){Hr(te,pe,a,W);break e}ke&&ke(n,$,F),n==="focusout"&&F&&$.type==="number"&&F.memoizedProps.value!=null&&Si($,"number",$.value)}switch(ke=F?hr(F):window,n){case"focusin":(Ot(ke)||ke.contentEditable==="true")&&(Ua=ke,dd=F,Sl=null);break;case"focusout":Sl=dd=Ua=null;break;case"mousedown":pd=!0;break;case"contextmenu":case"mouseup":case"dragend":pd=!1,xy(te,a,W);break;case"selectionchange":if(dA)break;case"keydown":case"keyup":xy(te,a,W)}var ve;if(vr)e:{switch(n){case"compositionstart":var Te="onCompositionStart";break e;case"compositionend":Te="onCompositionEnd";break e;case"compositionupdate":Te="onCompositionUpdate";break e}Te=void 0}else je?Y(n,a)&&(Te="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(Te="onCompositionStart");Te&&(v&&a.locale!=="ko"&&(je||Te!=="onCompositionStart"?Te==="onCompositionEnd"&&je&&(ve=gl()):(pr=W,Ai="value"in pr?pr.value:pr.textContent,je=!0)),ke=rh(F,Te),0<ke.length&&(Te=new _l(Te,n,null,a,W),te.push({event:Te,listeners:ke}),ve?Te.data=ve:(ve=he(a),ve!==null&&(Te.data=ve)))),(ve=y?Nt(n,a):ze(n,a))&&(Te=rh(F,"onBeforeInput"),0<Te.length&&(ke=new _l("onBeforeInput","beforeinput",null,a,W),te.push({event:ke,listeners:Te}),ke.data=ve)),YA(te,n,F,a,W)}Z_(te,i)})}function Jl(n,i,a){return{instance:n,listener:i,currentTarget:a}}function rh(n,i){for(var a=i+"Capture",l=[];n!==null;){var f=n,d=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||d===null||(f=ks(n,a),f!=null&&l.unshift(Jl(n,f,d)),f=ks(n,i),f!=null&&l.push(Jl(n,f,d))),n.tag===3)return l;n=n.return}return[]}function lo(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function t0(n,i,a,l,f){for(var d=i._reactName,E=[];a!==null&&a!==l;){var T=a,k=T.alternate,F=T.stateNode;if(T=T.tag,k!==null&&k===l)break;T!==5&&T!==26&&T!==27||F===null||(k=F,f?(F=ks(a,d),F!=null&&E.unshift(Jl(a,F,k))):f||(F=ks(a,d),F!=null&&E.push(Jl(a,F,k)))),a=a.return}E.length!==0&&n.push({event:i,listeners:E})}var ZA=/\r\n?/g,e1=/\u0000|\uFFFD/g;function n0(n){return(typeof n=="string"?n:""+n).replace(ZA,`
`).replace(e1,"")}function r0(n,i){return i=n0(i),n0(n)===i}function ih(){}function nt(n,i,a,l,f,d){switch(a){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||Mn(n,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&Mn(n,""+l);break;case"className":fr(n,"class",l);break;case"tabIndex":fr(n,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":fr(n,a,l);break;case"style":dl(n,l,d);break;case"data":if(i!=="object"){fr(n,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||a!=="href")){n.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(a);break}l=xa(""+l),n.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){n.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(i!=="input"&&nt(n,i,"name",f.name,f,null),nt(n,i,"formEncType",f.formEncType,f,null),nt(n,i,"formMethod",f.formMethod,f,null),nt(n,i,"formTarget",f.formTarget,f,null)):(nt(n,i,"encType",f.encType,f,null),nt(n,i,"method",f.method,f,null),nt(n,i,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(a);break}l=xa(""+l),n.setAttribute(a,l);break;case"onClick":l!=null&&(n.onclick=ih);break;case"onScroll":l!=null&&Pe("scroll",n);break;case"onScrollEnd":l!=null&&Pe("scrollend",n);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(f.children!=null)throw Error(s(60));n.innerHTML=a}}break;case"multiple":n.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":n.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){n.removeAttribute("xlink:href");break}a=xa(""+l),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(a,""+l):n.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(a,""):n.removeAttribute(a);break;case"capture":case"download":l===!0?n.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(a,l):n.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?n.setAttribute(a,l):n.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?n.removeAttribute(a):n.setAttribute(a,l);break;case"popover":Pe("beforetoggle",n),Pe("toggle",n),wi(n,"popover",l);break;case"xlinkActuate":Ft(n,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ft(n,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ft(n,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ft(n,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ft(n,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ft(n,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ft(n,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ft(n,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ft(n,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":wi(n,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=ad.get(a)||a,wi(n,a,l))}}function Lp(n,i,a,l,f,d){switch(a){case"style":dl(n,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(f.children!=null)throw Error(s(60));n.innerHTML=a}}break;case"children":typeof l=="string"?Mn(n,l):(typeof l=="number"||typeof l=="bigint")&&Mn(n,""+l);break;case"onScroll":l!=null&&Pe("scroll",n);break;case"onScrollEnd":l!=null&&Pe("scrollend",n);break;case"onClick":l!=null&&(n.onclick=ih);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Sa.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(f=a.endsWith("Capture"),i=a.slice(2,f?a.length-7:void 0),d=n[bt]||null,d=d!=null?d[a]:null,typeof d=="function"&&n.removeEventListener(i,d,f),typeof l=="function")){typeof d!="function"&&d!==null&&(a in n?n[a]=null:n.hasAttribute(a)&&n.removeAttribute(a)),n.addEventListener(i,l,f);break e}a in n?n[a]=l:l===!0?n.setAttribute(a,""):wi(n,a,l)}}}function Qt(n,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Pe("error",n),Pe("load",n);var l=!1,f=!1,d;for(d in a)if(a.hasOwnProperty(d)){var E=a[d];if(E!=null)switch(d){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:nt(n,i,d,E,a,null)}}f&&nt(n,i,"srcSet",a.srcSet,a,null),l&&nt(n,i,"src",a.src,a,null);return;case"input":Pe("invalid",n);var T=d=E=f=null,k=null,F=null;for(l in a)if(a.hasOwnProperty(l)){var W=a[l];if(W!=null)switch(l){case"name":f=W;break;case"type":E=W;break;case"checked":k=W;break;case"defaultChecked":F=W;break;case"value":d=W;break;case"defaultValue":T=W;break;case"children":case"dangerouslySetInnerHTML":if(W!=null)throw Error(s(137,i));break;default:nt(n,i,l,W,a,null)}}Ds(n,d,T,k,F,E,f,!1),Ca(n);return;case"select":Pe("invalid",n),l=E=d=null;for(f in a)if(a.hasOwnProperty(f)&&(T=a[f],T!=null))switch(f){case"value":d=T;break;case"defaultValue":E=T;break;case"multiple":l=T;default:nt(n,i,f,T,a,null)}i=d,a=E,n.multiple=!!l,i!=null?Lr(n,!!l,i,!1):a!=null&&Lr(n,!!l,a,!0);return;case"textarea":Pe("invalid",n),d=f=l=null;for(E in a)if(a.hasOwnProperty(E)&&(T=a[E],T!=null))switch(E){case"value":l=T;break;case"defaultValue":f=T;break;case"children":d=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:nt(n,i,E,T,a,null)}Ns(n,l,f,d),Ca(n);return;case"option":for(k in a)if(a.hasOwnProperty(k)&&(l=a[k],l!=null))switch(k){case"selected":n.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:nt(n,i,k,l,a,null)}return;case"dialog":Pe("beforetoggle",n),Pe("toggle",n),Pe("cancel",n),Pe("close",n);break;case"iframe":case"object":Pe("load",n);break;case"video":case"audio":for(l=0;l<Wl.length;l++)Pe(Wl[l],n);break;case"image":Pe("error",n),Pe("load",n);break;case"details":Pe("toggle",n);break;case"embed":case"source":case"link":Pe("error",n),Pe("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(F in a)if(a.hasOwnProperty(F)&&(l=a[F],l!=null))switch(F){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:nt(n,i,F,l,a,null)}return;default:if(pl(i)){for(W in a)a.hasOwnProperty(W)&&(l=a[W],l!==void 0&&Lp(n,i,W,l,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(l=a[T],l!=null&&nt(n,i,T,l,a,null))}function t1(n,i,a,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,d=null,E=null,T=null,k=null,F=null,W=null;for(K in a){var te=a[K];if(a.hasOwnProperty(K)&&te!=null)switch(K){case"checked":break;case"value":break;case"defaultValue":k=te;default:l.hasOwnProperty(K)||nt(n,i,K,null,l,te)}}for(var $ in l){var K=l[$];if(te=a[$],l.hasOwnProperty($)&&(K!=null||te!=null))switch($){case"type":d=K;break;case"name":f=K;break;case"checked":F=K;break;case"defaultChecked":W=K;break;case"value":E=K;break;case"defaultValue":T=K;break;case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(s(137,i));break;default:K!==te&&nt(n,i,$,K,l,te)}}Tn(n,E,T,k,F,W,d,f);return;case"select":K=E=T=$=null;for(d in a)if(k=a[d],a.hasOwnProperty(d)&&k!=null)switch(d){case"value":break;case"multiple":K=k;default:l.hasOwnProperty(d)||nt(n,i,d,null,l,k)}for(f in l)if(d=l[f],k=a[f],l.hasOwnProperty(f)&&(d!=null||k!=null))switch(f){case"value":$=d;break;case"defaultValue":T=d;break;case"multiple":E=d;default:d!==k&&nt(n,i,f,d,l,k)}i=T,a=E,l=K,$!=null?Lr(n,!!a,$,!1):!!l!=!!a&&(i!=null?Lr(n,!!a,i,!0):Lr(n,!!a,a?[]:"",!1));return;case"textarea":K=$=null;for(T in a)if(f=a[T],a.hasOwnProperty(T)&&f!=null&&!l.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:nt(n,i,T,null,l,f)}for(E in l)if(f=l[E],d=a[E],l.hasOwnProperty(E)&&(f!=null||d!=null))switch(E){case"value":$=f;break;case"defaultValue":K=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(s(91));break;default:f!==d&&nt(n,i,E,f,l,d)}et(n,$,K);return;case"option":for(var Se in a)if($=a[Se],a.hasOwnProperty(Se)&&$!=null&&!l.hasOwnProperty(Se))switch(Se){case"selected":n.selected=!1;break;default:nt(n,i,Se,null,l,$)}for(k in l)if($=l[k],K=a[k],l.hasOwnProperty(k)&&$!==K&&($!=null||K!=null))switch(k){case"selected":n.selected=$&&typeof $!="function"&&typeof $!="symbol";break;default:nt(n,i,k,$,l,K)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Ee in a)$=a[Ee],a.hasOwnProperty(Ee)&&$!=null&&!l.hasOwnProperty(Ee)&&nt(n,i,Ee,null,l,$);for(F in l)if($=l[F],K=a[F],l.hasOwnProperty(F)&&$!==K&&($!=null||K!=null))switch(F){case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(s(137,i));break;default:nt(n,i,F,$,l,K)}return;default:if(pl(i)){for(var rt in a)$=a[rt],a.hasOwnProperty(rt)&&$!==void 0&&!l.hasOwnProperty(rt)&&Lp(n,i,rt,void 0,l,$);for(W in l)$=l[W],K=a[W],!l.hasOwnProperty(W)||$===K||$===void 0&&K===void 0||Lp(n,i,W,$,l,K);return}}for(var j in a)$=a[j],a.hasOwnProperty(j)&&$!=null&&!l.hasOwnProperty(j)&&nt(n,i,j,null,l,$);for(te in l)$=l[te],K=a[te],!l.hasOwnProperty(te)||$===K||$==null&&K==null||nt(n,i,te,$,l,K)}var Up=null,jp=null;function sh(n){return n.nodeType===9?n:n.ownerDocument}function i0(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function s0(n,i){if(n===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&i==="foreignObject"?0:n}function zp(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var qp=null;function n1(){var n=window.event;return n&&n.type==="popstate"?n===qp?!1:(qp=n,!0):(qp=null,!1)}var a0=typeof setTimeout=="function"?setTimeout:void 0,r1=typeof clearTimeout=="function"?clearTimeout:void 0,o0=typeof Promise=="function"?Promise:void 0,i1=typeof queueMicrotask=="function"?queueMicrotask:typeof o0<"u"?function(n){return o0.resolve(null).then(n).catch(s1)}:a0;function s1(n){setTimeout(function(){throw n})}function qi(n){return n==="head"}function l0(n,i){var a=i,l=0,f=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(0<l&&8>l){a=l;var E=n.ownerDocument;if(a&1&&Zl(E.documentElement),a&2&&Zl(E.body),a&4)for(a=E.head,Zl(a),E=a.firstChild;E;){var T=E.nextSibling,k=E.nodeName;E[Rs]||k==="SCRIPT"||k==="STYLE"||k==="LINK"&&E.rel.toLowerCase()==="stylesheet"||a.removeChild(E),E=T}}if(f===0){n.removeChild(d),ou(i);return}f--}else a==="$"||a==="$?"||a==="$!"?f++:l=a.charCodeAt(0)-48;else l=0;a=d}while(a);ou(i)}function Bp(n){var i=n.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Bp(a),bi(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}n.removeChild(a)}}function a1(n,i,a,l){for(;n.nodeType===1;){var f=a;if(n.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(l){if(!n[Rs])switch(i){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(d=n.getAttribute("rel"),d==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(d!==f.rel||n.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||n.getAttribute("title")!==(f.title==null?null:f.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(d=n.getAttribute("src"),(d!==(f.src==null?null:f.src)||n.getAttribute("type")!==(f.type==null?null:f.type)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&d&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(i==="input"&&n.type==="hidden"){var d=f.name==null?null:""+f.name;if(f.type==="hidden"&&n.getAttribute("name")===d)return n}else return n;if(n=er(n.nextSibling),n===null)break}return null}function o1(n,i,a){if(i==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!a||(n=er(n.nextSibling),n===null))return null;return n}function Hp(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState==="complete"}function l1(n,i){var a=n.ownerDocument;if(n.data!=="$?"||a.readyState==="complete")i();else{var l=function(){i(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),n._reactRetry=l}}function er(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return n}var Fp=null;function u0(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}function c0(n,i,a){switch(i=sh(a),n){case"html":if(n=i.documentElement,!n)throw Error(s(452));return n;case"head":if(n=i.head,!n)throw Error(s(453));return n;case"body":if(n=i.body,!n)throw Error(s(454));return n;default:throw Error(s(451))}}function Zl(n){for(var i=n.attributes;i.length;)n.removeAttributeNode(i[0]);bi(n)}var Fn=new Map,h0=new Set;function ah(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var ni=ce.d;ce.d={f:u1,r:c1,D:h1,C:f1,L:d1,m:p1,X:g1,S:m1,M:y1};function u1(){var n=ni.f(),i=Wc();return n||i}function c1(n){var i=cr(n);i!==null&&i.tag===5&&i.type==="form"?Nv(i):ni.r(n)}var uo=typeof document>"u"?null:document;function f0(n,i,a){var l=uo;if(l&&typeof i=="string"&&i){var f=wt(i);f='link[rel="'+n+'"][href="'+f+'"]',typeof a=="string"&&(f+='[crossorigin="'+a+'"]'),h0.has(f)||(h0.add(f),n={rel:n,crossOrigin:a,href:i},l.querySelector(f)===null&&(i=l.createElement("link"),Qt(i,"link",n),yt(i),l.head.appendChild(i)))}}function h1(n){ni.D(n),f0("dns-prefetch",n,null)}function f1(n,i){ni.C(n,i),f0("preconnect",n,i)}function d1(n,i,a){ni.L(n,i,a);var l=uo;if(l&&n&&i){var f='link[rel="preload"][as="'+wt(i)+'"]';i==="image"&&a&&a.imageSrcSet?(f+='[imagesrcset="'+wt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(f+='[imagesizes="'+wt(a.imageSizes)+'"]')):f+='[href="'+wt(n)+'"]';var d=f;switch(i){case"style":d=co(n);break;case"script":d=ho(n)}Fn.has(d)||(n=_({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:n,as:i},a),Fn.set(d,n),l.querySelector(f)!==null||i==="style"&&l.querySelector(eu(d))||i==="script"&&l.querySelector(tu(d))||(i=l.createElement("link"),Qt(i,"link",n),yt(i),l.head.appendChild(i)))}}function p1(n,i){ni.m(n,i);var a=uo;if(a&&n){var l=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+wt(l)+'"][href="'+wt(n)+'"]',d=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=ho(n)}if(!Fn.has(d)&&(n=_({rel:"modulepreload",href:n},i),Fn.set(d,n),a.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(tu(d)))return}l=a.createElement("link"),Qt(l,"link",n),yt(l),a.head.appendChild(l)}}}function m1(n,i,a){ni.S(n,i,a);var l=uo;if(l&&n){var f=ln(l).hoistableStyles,d=co(n);i=i||"default";var E=f.get(d);if(!E){var T={loading:0,preload:null};if(E=l.querySelector(eu(d)))T.loading=5;else{n=_({rel:"stylesheet",href:n,"data-precedence":i},a),(a=Fn.get(d))&&Gp(n,a);var k=E=l.createElement("link");yt(k),Qt(k,"link",n),k._p=new Promise(function(F,W){k.onload=F,k.onerror=W}),k.addEventListener("load",function(){T.loading|=1}),k.addEventListener("error",function(){T.loading|=2}),T.loading|=4,oh(E,i,l)}E={type:"stylesheet",instance:E,count:1,state:T},f.set(d,E)}}}function g1(n,i){ni.X(n,i);var a=uo;if(a&&n){var l=ln(a).hoistableScripts,f=ho(n),d=l.get(f);d||(d=a.querySelector(tu(f)),d||(n=_({src:n,async:!0},i),(i=Fn.get(f))&&$p(n,i),d=a.createElement("script"),yt(d),Qt(d,"link",n),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(f,d))}}function y1(n,i){ni.M(n,i);var a=uo;if(a&&n){var l=ln(a).hoistableScripts,f=ho(n),d=l.get(f);d||(d=a.querySelector(tu(f)),d||(n=_({src:n,async:!0,type:"module"},i),(i=Fn.get(f))&&$p(n,i),d=a.createElement("script"),yt(d),Qt(d,"link",n),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(f,d))}}function d0(n,i,a,l){var f=(f=ye.current)?ah(f):null;if(!f)throw Error(s(446));switch(n){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=co(a.href),a=ln(f).hoistableStyles,l=a.get(i),l||(l={type:"style",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){n=co(a.href);var d=ln(f).hoistableStyles,E=d.get(n);if(E||(f=f.ownerDocument||f,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(n,E),(d=f.querySelector(eu(n)))&&!d._p&&(E.instance=d,E.state.loading=5),Fn.has(n)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Fn.set(n,a),d||v1(f,n,a,E.state))),i&&l===null)throw Error(s(528,""));return E}if(i&&l!==null)throw Error(s(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=ho(a),a=ln(f).hoistableScripts,l=a.get(i),l||(l={type:"script",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,n))}}function co(n){return'href="'+wt(n)+'"'}function eu(n){return'link[rel="stylesheet"]['+n+"]"}function p0(n){return _({},n,{"data-precedence":n.precedence,precedence:null})}function v1(n,i,a,l){n.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=n.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Qt(i,"link",a),yt(i),n.head.appendChild(i))}function ho(n){return'[src="'+wt(n)+'"]'}function tu(n){return"script[async]"+n}function m0(n,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var l=n.querySelector('style[data-href~="'+wt(a.href)+'"]');if(l)return i.instance=l,yt(l),l;var f=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(n.ownerDocument||n).createElement("style"),yt(l),Qt(l,"style",f),oh(l,a.precedence,n),i.instance=l;case"stylesheet":f=co(a.href);var d=n.querySelector(eu(f));if(d)return i.state.loading|=4,i.instance=d,yt(d),d;l=p0(a),(f=Fn.get(f))&&Gp(l,f),d=(n.ownerDocument||n).createElement("link"),yt(d);var E=d;return E._p=new Promise(function(T,k){E.onload=T,E.onerror=k}),Qt(d,"link",l),i.state.loading|=4,oh(d,a.precedence,n),i.instance=d;case"script":return d=ho(a.src),(f=n.querySelector(tu(d)))?(i.instance=f,yt(f),f):(l=a,(f=Fn.get(d))&&(l=_({},a),$p(l,f)),n=n.ownerDocument||n,f=n.createElement("script"),yt(f),Qt(f,"link",l),n.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,oh(l,a.precedence,n));return i.instance}function oh(n,i,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,d=f,E=0;E<l.length;E++){var T=l[E];if(T.dataset.precedence===i)d=T;else if(d!==f)break}d?d.parentNode.insertBefore(n,d.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(n,i.firstChild))}function Gp(n,i){n.crossOrigin==null&&(n.crossOrigin=i.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=i.referrerPolicy),n.title==null&&(n.title=i.title)}function $p(n,i){n.crossOrigin==null&&(n.crossOrigin=i.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=i.referrerPolicy),n.integrity==null&&(n.integrity=i.integrity)}var lh=null;function g0(n,i,a){if(lh===null){var l=new Map,f=lh=new Map;f.set(a,l)}else f=lh,l=f.get(a),l||(l=new Map,f.set(a,l));if(l.has(n))return l;for(l.set(n,null),a=a.getElementsByTagName(n),f=0;f<a.length;f++){var d=a[f];if(!(d[Rs]||d[Dt]||n==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var E=d.getAttribute(i)||"";E=n+E;var T=l.get(E);T?T.push(d):l.set(E,[d])}}return l}function y0(n,i,a){n=n.ownerDocument||n,n.head.insertBefore(a,i==="title"?n.querySelector("head > title"):null)}function _1(n,i,a){if(a===1||i.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return n=i.disabled,typeof i.precedence=="string"&&n==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function v0(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var nu=null;function E1(){}function T1(n,i,a){if(nu===null)throw Error(s(475));var l=nu;if(i.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var f=co(a.href),d=n.querySelector(eu(f));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(l.count++,l=uh.bind(l),n.then(l,l)),i.state.loading|=4,i.instance=d,yt(d);return}d=n.ownerDocument||n,a=p0(a),(f=Fn.get(f))&&Gp(a,f),d=d.createElement("link"),yt(d);var E=d;E._p=new Promise(function(T,k){E.onload=T,E.onerror=k}),Qt(d,"link",a),i.instance=d}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,n),(n=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=uh.bind(l),n.addEventListener("load",i),n.addEventListener("error",i))}}function b1(){if(nu===null)throw Error(s(475));var n=nu;return n.stylesheets&&n.count===0&&Kp(n,n.stylesheets),0<n.count?function(i){var a=setTimeout(function(){if(n.stylesheets&&Kp(n,n.stylesheets),n.unsuspend){var l=n.unsuspend;n.unsuspend=null,l()}},6e4);return n.unsuspend=i,function(){n.unsuspend=null,clearTimeout(a)}}:null}function uh(){if(this.count--,this.count===0){if(this.stylesheets)Kp(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var ch=null;function Kp(n,i){n.stylesheets=null,n.unsuspend!==null&&(n.count++,ch=new Map,i.forEach(w1,n),ch=null,uh.call(n))}function w1(n,i){if(!(i.state.loading&4)){var a=ch.get(n);if(a)var l=a.get(null);else{a=new Map,ch.set(n,a);for(var f=n.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<f.length;d++){var E=f[d];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(a.set(E.dataset.precedence,E),l=E)}l&&a.set(null,l)}f=i.instance,E=f.getAttribute("data-precedence"),d=a.get(E)||l,d===l&&a.set(null,f),a.set(E,f),this.count++,l=uh.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),d?d.parentNode.insertBefore(f,d.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(f,n.firstChild)),i.state.loading|=4}}var ru={$$typeof:Q,Provider:null,Consumer:null,_currentValue:me,_currentValue2:me,_threadCount:0};function S1(n,i,a,l,f,d,E,T){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Or(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Or(0),this.hiddenUpdates=Or(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=d,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function _0(n,i,a,l,f,d,E,T,k,F,W,te){return n=new S1(n,i,a,E,T,k,F,te),i=1,d===!0&&(i|=24),d=wn(3,null,null,i),n.current=d,d.stateNode=n,i=Cd(),i.refCount++,n.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:a,cache:i},Od(d),n}function E0(n){return n?(n=Ba,n):Ba}function T0(n,i,a,l,f,d){f=E0(f),l.context===null?l.context=f:l.pendingContext=f,l=Ci(i),l.payload={element:a},d=d===void 0?null:d,d!==null&&(l.callback=d),a=xi(n,l,i),a!==null&&(Cn(a,n,i),kl(a,n,i))}function b0(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Qp(n,i){b0(n,i),(n=n.alternate)&&b0(n,i)}function w0(n){if(n.tag===13){var i=qa(n,67108864);i!==null&&Cn(i,n,67108864),Qp(n,67108864)}}var hh=!0;function A1(n,i,a,l){var f=X.T;X.T=null;var d=ce.p;try{ce.p=2,Yp(n,i,a,l)}finally{ce.p=d,X.T=f}}function R1(n,i,a,l){var f=X.T;X.T=null;var d=ce.p;try{ce.p=8,Yp(n,i,a,l)}finally{ce.p=d,X.T=f}}function Yp(n,i,a,l){if(hh){var f=Xp(l);if(f===null)Vp(n,i,l,fh,a),A0(n,l);else if(C1(f,n,i,a,l))l.stopPropagation();else if(A0(n,l),i&4&&-1<I1.indexOf(n)){for(;f!==null;){var d=cr(f);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var E=Yn(d.pendingLanes);if(E!==0){var T=d;for(T.pendingLanes|=2,T.entangledLanes|=2;E;){var k=1<<31-Zt(E);T.entanglements[1]|=k,E&=~k}Sr(d),(We&6)===0&&(Yc=On()+500,Xl(0))}}break;case 13:T=qa(d,2),T!==null&&Cn(T,d,2),Wc(),Qp(d,2)}if(d=Xp(l),d===null&&Vp(n,i,l,fh,a),d===f)break;f=d}f!==null&&l.stopPropagation()}else Vp(n,i,l,null,a)}}function Xp(n){return n=Pn(n),Wp(n)}var fh=null;function Wp(n){if(fh=null,n=Mr(n),n!==null){var i=u(n);if(i===null)n=null;else{var a=i.tag;if(a===13){if(n=h(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null)}}return fh=n,null}function S0(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ed()){case tl:return 2;case Ea:return 8;case Ts:case td:return 32;case Ta:return 268435456;default:return 32}default:return 32}}var Jp=!1,Bi=null,Hi=null,Fi=null,iu=new Map,su=new Map,Gi=[],I1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function A0(n,i){switch(n){case"focusin":case"focusout":Bi=null;break;case"dragenter":case"dragleave":Hi=null;break;case"mouseover":case"mouseout":Fi=null;break;case"pointerover":case"pointerout":iu.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":su.delete(i.pointerId)}}function au(n,i,a,l,f,d){return n===null||n.nativeEvent!==d?(n={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:d,targetContainers:[f]},i!==null&&(i=cr(i),i!==null&&w0(i)),n):(n.eventSystemFlags|=l,i=n.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),n)}function C1(n,i,a,l,f){switch(i){case"focusin":return Bi=au(Bi,n,i,a,l,f),!0;case"dragenter":return Hi=au(Hi,n,i,a,l,f),!0;case"mouseover":return Fi=au(Fi,n,i,a,l,f),!0;case"pointerover":var d=f.pointerId;return iu.set(d,au(iu.get(d)||null,n,i,a,l,f)),!0;case"gotpointercapture":return d=f.pointerId,su.set(d,au(su.get(d)||null,n,i,a,l,f)),!0}return!1}function R0(n){var i=Mr(n.target);if(i!==null){var a=u(i);if(a!==null){if(i=a.tag,i===13){if(i=h(a),i!==null){n.blockedOn=i,Wu(n.priority,function(){if(a.tag===13){var l=In();l=_i(l);var f=qa(a,l);f!==null&&Cn(f,a,l),Qp(a,l)}});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function dh(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Xp(n.nativeEvent);if(a===null){a=n.nativeEvent;var l=new a.constructor(a.type,a);Ur=l,a.target.dispatchEvent(l),Ur=null}else return i=cr(a),i!==null&&w0(i),n.blockedOn=a,!1;i.shift()}return!0}function I0(n,i,a){dh(n)&&a.delete(i)}function x1(){Jp=!1,Bi!==null&&dh(Bi)&&(Bi=null),Hi!==null&&dh(Hi)&&(Hi=null),Fi!==null&&dh(Fi)&&(Fi=null),iu.forEach(I0),su.forEach(I0)}function ph(n,i){n.blockedOn===i&&(n.blockedOn=null,Jp||(Jp=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,x1)))}var mh=null;function C0(n){mh!==n&&(mh=n,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){mh===n&&(mh=null);for(var i=0;i<n.length;i+=3){var a=n[i],l=n[i+1],f=n[i+2];if(typeof l!="function"){if(Wp(l||a)===null)continue;break}var d=cr(a);d!==null&&(n.splice(i,3),i-=3,Wd(d,{pending:!0,data:f,method:a.method,action:l},l,f))}}))}function ou(n){function i(k){return ph(k,n)}Bi!==null&&ph(Bi,n),Hi!==null&&ph(Hi,n),Fi!==null&&ph(Fi,n),iu.forEach(i),su.forEach(i);for(var a=0;a<Gi.length;a++){var l=Gi[a];l.blockedOn===n&&(l.blockedOn=null)}for(;0<Gi.length&&(a=Gi[0],a.blockedOn===null);)R0(a),a.blockedOn===null&&Gi.shift();if(a=(n.ownerDocument||n).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var f=a[l],d=a[l+1],E=f[bt]||null;if(typeof d=="function")E||C0(a);else if(E){var T=null;if(d&&d.hasAttribute("formAction")){if(f=d,E=d[bt]||null)T=E.formAction;else if(Wp(f)!==null)continue}else T=E.action;typeof T=="function"?a[l+1]=T:(a.splice(l,3),l-=3),C0(a)}}}function Zp(n){this._internalRoot=n}gh.prototype.render=Zp.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(s(409));var a=i.current,l=In();T0(a,l,n,i,null,null)},gh.prototype.unmount=Zp.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;T0(n.current,2,null,n,null,null),Wc(),i[kn]=null}};function gh(n){this._internalRoot=n}gh.prototype.unstable_scheduleHydration=function(n){if(n){var i=Ei();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Gi.length&&i!==0&&i<Gi[a].priority;a++);Gi.splice(a,0,n),a===0&&R0(n)}};var x0=e.version;if(x0!=="19.1.0")throw Error(s(527,x0,"19.1.0"));ce.findDOMNode=function(n){var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(s(188)):(n=Object.keys(n).join(","),Error(s(268,n)));return n=m(i),n=n!==null?g(n):null,n=n===null?null:n.stateNode,n};var D1={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:X,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yh.isDisabled&&yh.supportsFiber)try{dt=yh.inject(D1),Xe=yh}catch{}}return uu.createRoot=function(n,i){if(!o(n))throw Error(s(299));var a=!1,l="",f=Gv,d=$v,E=Kv,T=null;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(E=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(T=i.unstable_transitionCallbacks)),i=_0(n,1,!1,null,null,a,l,f,d,E,T,null),n[kn]=i.current,Pp(n),new Zp(i)},uu.hydrateRoot=function(n,i,a){if(!o(n))throw Error(s(299));var l=!1,f="",d=Gv,E=$v,T=Kv,k=null,F=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(f=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(E=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(k=a.unstable_transitionCallbacks),a.formState!==void 0&&(F=a.formState)),i=_0(n,1,!0,i,a??null,l,f,d,E,T,k,F),i.context=E0(null),a=i.current,l=In(),l=_i(l),f=Ci(l),f.callback=null,xi(a,f,l),a=l,i.current.lanes=a,kr(i,a),Sr(i),n[kn]=i.current,Pp(n),new gh(i)},uu.version="19.1.0",uu}var j0;function z1(){if(j0)return nm.exports;j0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),nm.exports=j1(),nm.exports}var q1=z1();const B1=GT(q1);var cu={},z0;function H1(){if(z0)return cu;z0=1,Object.defineProperty(cu,"__esModule",{value:!0}),cu.parse=h,cu.serialize=g;const r=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,s=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,u=(()=>{const w=function(){};return w.prototype=Object.create(null),w})();function h(w,C){const N=new u,G=w.length;if(G<2)return N;const U=(C==null?void 0:C.decode)||_;let H=0;do{const J=w.indexOf("=",H);if(J===-1)break;const Q=w.indexOf(";",H),le=Q===-1?G:Q;if(J>le){H=w.lastIndexOf(";",J-1)+1;continue}const oe=p(w,H,J),ue=m(w,J,oe),D=w.slice(oe,ue);if(N[D]===void 0){let R=p(w,J+1,le),x=m(w,le,R);const O=U(w.slice(R,x));N[D]=O}H=le+1}while(H<G);return N}function p(w,C,N){do{const G=w.charCodeAt(C);if(G!==32&&G!==9)return C}while(++C<N);return N}function m(w,C,N){for(;C>N;){const G=w.charCodeAt(--C);if(G!==32&&G!==9)return C+1}return N}function g(w,C,N){const G=(N==null?void 0:N.encode)||encodeURIComponent;if(!r.test(w))throw new TypeError(`argument name is invalid: ${w}`);const U=G(C);if(!e.test(U))throw new TypeError(`argument val is invalid: ${C}`);let H=w+"="+U;if(!N)return H;if(N.maxAge!==void 0){if(!Number.isInteger(N.maxAge))throw new TypeError(`option maxAge is invalid: ${N.maxAge}`);H+="; Max-Age="+N.maxAge}if(N.domain){if(!t.test(N.domain))throw new TypeError(`option domain is invalid: ${N.domain}`);H+="; Domain="+N.domain}if(N.path){if(!s.test(N.path))throw new TypeError(`option path is invalid: ${N.path}`);H+="; Path="+N.path}if(N.expires){if(!b(N.expires)||!Number.isFinite(N.expires.valueOf()))throw new TypeError(`option expires is invalid: ${N.expires}`);H+="; Expires="+N.expires.toUTCString()}if(N.httpOnly&&(H+="; HttpOnly"),N.secure&&(H+="; Secure"),N.partitioned&&(H+="; Partitioned"),N.priority)switch(typeof N.priority=="string"?N.priority.toLowerCase():void 0){case"low":H+="; Priority=Low";break;case"medium":H+="; Priority=Medium";break;case"high":H+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${N.priority}`)}if(N.sameSite)switch(typeof N.sameSite=="string"?N.sameSite.toLowerCase():N.sameSite){case!0:case"strict":H+="; SameSite=Strict";break;case"lax":H+="; SameSite=Lax";break;case"none":H+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${N.sameSite}`)}return H}function _(w){if(w.indexOf("%")===-1)return w;try{return decodeURIComponent(w)}catch{return w}}function b(w){return o.call(w)==="[object Date]"}return cu}H1();/**
 * react-router v7.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var q0="popstate";function F1(r={}){function e(o,u){let{pathname:h="/",search:p="",hash:m=""}=pa(o.location.hash.substring(1));return!h.startsWith("/")&&!h.startsWith(".")&&(h="/"+h),Cm("",{pathname:h,search:p,hash:m},u.state&&u.state.usr||null,u.state&&u.state.key||"default")}function t(o,u){let h=o.document.querySelector("base"),p="";if(h&&h.getAttribute("href")){let m=o.location.href,g=m.indexOf("#");p=g===-1?m:m.slice(0,g)}return p+"#"+(typeof u=="string"?u:Au(u))}function s(o,u){Kn(o.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(u)})`)}return $1(e,t,s,r)}function ct(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function Kn(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function G1(){return Math.random().toString(36).substring(2,10)}function B0(r,e){return{usr:r.state,key:r.key,idx:e}}function Cm(r,e,t=null,s){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?pa(e):e,state:t,key:e&&e.key||s||G1()}}function Au({pathname:r="/",search:e="",hash:t=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(r+=t.charAt(0)==="#"?t:"#"+t),r}function pa(r){let e={};if(r){let t=r.indexOf("#");t>=0&&(e.hash=r.substring(t),r=r.substring(0,t));let s=r.indexOf("?");s>=0&&(e.search=r.substring(s),r=r.substring(0,s)),r&&(e.pathname=r)}return e}function $1(r,e,t,s={}){let{window:o=document.defaultView,v5Compat:u=!1}=s,h=o.history,p="POP",m=null,g=_();g==null&&(g=0,h.replaceState({...h.state,idx:g},""));function _(){return(h.state||{idx:null}).idx}function b(){p="POP";let U=_(),H=U==null?null:U-g;g=U,m&&m({action:p,location:G.location,delta:H})}function w(U,H){p="PUSH";let J=Cm(G.location,U,H);t&&t(J,U),g=_()+1;let Q=B0(J,g),le=G.createHref(J);try{h.pushState(Q,"",le)}catch(oe){if(oe instanceof DOMException&&oe.name==="DataCloneError")throw oe;o.location.assign(le)}u&&m&&m({action:p,location:G.location,delta:1})}function C(U,H){p="REPLACE";let J=Cm(G.location,U,H);t&&t(J,U),g=_();let Q=B0(J,g),le=G.createHref(J);h.replaceState(Q,"",le),u&&m&&m({action:p,location:G.location,delta:0})}function N(U){let H=o.location.origin!=="null"?o.location.origin:o.location.href,J=typeof U=="string"?U:Au(U);return J=J.replace(/ $/,"%20"),ct(H,`No window.location.(origin|href) available to create URL for href: ${J}`),new URL(J,H)}let G={get action(){return p},get location(){return r(o,h)},listen(U){if(m)throw new Error("A history only accepts one active listener");return o.addEventListener(q0,b),m=U,()=>{o.removeEventListener(q0,b),m=null}},createHref(U){return e(o,U)},createURL:N,encodeLocation(U){let H=N(U);return{pathname:H.pathname,search:H.search,hash:H.hash}},push:w,replace:C,go(U){return h.go(U)}};return G}function $T(r,e,t="/"){return K1(r,e,t,!1)}function K1(r,e,t,s){let o=typeof e=="string"?pa(e):e,u=ci(o.pathname||"/",t);if(u==null)return null;let h=KT(r);Q1(h);let p=null;for(let m=0;p==null&&m<h.length;++m){let g=sR(u);p=rR(h[m],g,s)}return p}function KT(r,e=[],t=[],s=""){let o=(u,h,p)=>{let m={relativePath:p===void 0?u.path||"":p,caseSensitive:u.caseSensitive===!0,childrenIndex:h,route:u};m.relativePath.startsWith("/")&&(ct(m.relativePath.startsWith(s),`Absolute route path "${m.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(s.length));let g=oi([s,m.relativePath]),_=t.concat(m);u.children&&u.children.length>0&&(ct(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),KT(u.children,e,_,g)),!(u.path==null&&!u.index)&&e.push({path:g,score:tR(g,u.index),routesMeta:_})};return r.forEach((u,h)=>{var p;if(u.path===""||!((p=u.path)!=null&&p.includes("?")))o(u,h);else for(let m of QT(u.path))o(u,h,m)}),e}function QT(r){let e=r.split("/");if(e.length===0)return[];let[t,...s]=e,o=t.endsWith("?"),u=t.replace(/\?$/,"");if(s.length===0)return o?[u,""]:[u];let h=QT(s.join("/")),p=[];return p.push(...h.map(m=>m===""?u:[u,m].join("/"))),o&&p.push(...h),p.map(m=>r.startsWith("/")&&m===""?"/":m)}function Q1(r){r.sort((e,t)=>e.score!==t.score?t.score-e.score:nR(e.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}var Y1=/^:[\w-]+$/,X1=3,W1=2,J1=1,Z1=10,eR=-2,H0=r=>r==="*";function tR(r,e){let t=r.split("/"),s=t.length;return t.some(H0)&&(s+=eR),e&&(s+=W1),t.filter(o=>!H0(o)).reduce((o,u)=>o+(Y1.test(u)?X1:u===""?J1:Z1),s)}function nR(r,e){return r.length===e.length&&r.slice(0,-1).every((s,o)=>s===e[o])?r[r.length-1]-e[e.length-1]:0}function rR(r,e,t=!1){let{routesMeta:s}=r,o={},u="/",h=[];for(let p=0;p<s.length;++p){let m=s[p],g=p===s.length-1,_=u==="/"?e:e.slice(u.length)||"/",b=Kh({path:m.relativePath,caseSensitive:m.caseSensitive,end:g},_),w=m.route;if(!b&&g&&t&&!s[s.length-1].route.index&&(b=Kh({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},_)),!b)return null;Object.assign(o,b.params),h.push({params:o,pathname:oi([u,b.pathname]),pathnameBase:uR(oi([u,b.pathnameBase])),route:w}),b.pathnameBase!=="/"&&(u=oi([u,b.pathnameBase]))}return h}function Kh(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[t,s]=iR(r.path,r.caseSensitive,r.end),o=e.match(t);if(!o)return null;let u=o[0],h=u.replace(/(.)\/+$/,"$1"),p=o.slice(1);return{params:s.reduce((g,{paramName:_,isOptional:b},w)=>{if(_==="*"){let N=p[w]||"";h=u.slice(0,u.length-N.length).replace(/(.)\/+$/,"$1")}const C=p[w];return b&&!C?g[_]=void 0:g[_]=(C||"").replace(/%2F/g,"/"),g},{}),pathname:u,pathnameBase:h,pattern:r}}function iR(r,e=!1,t=!0){Kn(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],o="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,p,m)=>(s.push({paramName:p,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(s.push({paramName:"*"}),o+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":r!==""&&r!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),s]}function sR(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Kn(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function ci(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,s=r.charAt(t);return s&&s!=="/"?null:r.slice(t)||"/"}function aR(r,e="/"){let{pathname:t,search:s="",hash:o=""}=typeof r=="string"?pa(r):r;return{pathname:t?t.startsWith("/")?t:oR(t,e):e,search:cR(s),hash:hR(o)}}function oR(r,e){let t=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function am(r,e,t,s){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function lR(r){return r.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function hg(r){let e=lR(r);return e.map((t,s)=>s===e.length-1?t.pathname:t.pathnameBase)}function fg(r,e,t,s=!1){let o;typeof r=="string"?o=pa(r):(o={...r},ct(!o.pathname||!o.pathname.includes("?"),am("?","pathname","search",o)),ct(!o.pathname||!o.pathname.includes("#"),am("#","pathname","hash",o)),ct(!o.search||!o.search.includes("#"),am("#","search","hash",o)));let u=r===""||o.pathname==="",h=u?"/":o.pathname,p;if(h==null)p=t;else{let b=e.length-1;if(!s&&h.startsWith("..")){let w=h.split("/");for(;w[0]==="..";)w.shift(),b-=1;o.pathname=w.join("/")}p=b>=0?e[b]:"/"}let m=aR(o,p),g=h&&h!=="/"&&h.endsWith("/"),_=(u||h===".")&&t.endsWith("/");return!m.pathname.endsWith("/")&&(g||_)&&(m.pathname+="/"),m}var oi=r=>r.join("/").replace(/\/\/+/g,"/"),uR=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),cR=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,hR=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function fR(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var YT=["POST","PUT","PATCH","DELETE"];new Set(YT);var dR=["GET",...YT];new Set(dR);var Bo=z.createContext(null);Bo.displayName="DataRouter";var _f=z.createContext(null);_f.displayName="DataRouterState";var XT=z.createContext({isTransitioning:!1});XT.displayName="ViewTransition";var pR=z.createContext(new Map);pR.displayName="Fetchers";var mR=z.createContext(null);mR.displayName="Await";var or=z.createContext(null);or.displayName="Navigation";var Mu=z.createContext(null);Mu.displayName="Location";var lr=z.createContext({outlet:null,matches:[],isDataRoute:!1});lr.displayName="Route";var dg=z.createContext(null);dg.displayName="RouteError";function gR(r,{relative:e}={}){ct(Ho(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:s}=z.useContext(or),{hash:o,pathname:u,search:h}=Pu(r,{relative:e}),p=u;return t!=="/"&&(p=u==="/"?t:oi([t,u])),s.createHref({pathname:p,search:h,hash:o})}function Ho(){return z.useContext(Mu)!=null}function ds(){return ct(Ho(),"useLocation() may be used only in the context of a <Router> component."),z.useContext(Mu).location}var WT="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function JT(r){z.useContext(or).static||z.useLayoutEffect(r)}function Fo(){let{isDataRoute:r}=z.useContext(lr);return r?DR():yR()}function yR(){ct(Ho(),"useNavigate() may be used only in the context of a <Router> component.");let r=z.useContext(Bo),{basename:e,navigator:t}=z.useContext(or),{matches:s}=z.useContext(lr),{pathname:o}=ds(),u=JSON.stringify(hg(s)),h=z.useRef(!1);return JT(()=>{h.current=!0}),z.useCallback((m,g={})=>{if(Kn(h.current,WT),!h.current)return;if(typeof m=="number"){t.go(m);return}let _=fg(m,JSON.parse(u),o,g.relative==="path");r==null&&e!=="/"&&(_.pathname=_.pathname==="/"?e:oi([e,_.pathname])),(g.replace?t.replace:t.push)(_,g.state,g)},[e,t,u,o,r])}z.createContext(null);function vR(){let{matches:r}=z.useContext(lr),e=r[r.length-1];return e?e.params:{}}function Pu(r,{relative:e}={}){let{matches:t}=z.useContext(lr),{pathname:s}=ds(),o=JSON.stringify(hg(t));return z.useMemo(()=>fg(r,JSON.parse(o),s,e==="path"),[r,o,s,e])}function _R(r,e){return ZT(r,e)}function ZT(r,e,t,s){var J;ct(Ho(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o,static:u}=z.useContext(or),{matches:h}=z.useContext(lr),p=h[h.length-1],m=p?p.params:{},g=p?p.pathname:"/",_=p?p.pathnameBase:"/",b=p&&p.route;{let Q=b&&b.path||"";eb(g,!b||Q.endsWith("*")||Q.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${Q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Q}"> to <Route path="${Q==="/"?"*":`${Q}/*`}">.`)}let w=ds(),C;if(e){let Q=typeof e=="string"?pa(e):e;ct(_==="/"||((J=Q.pathname)==null?void 0:J.startsWith(_)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${_}" but pathname "${Q.pathname}" was given in the \`location\` prop.`),C=Q}else C=w;let N=C.pathname||"/",G=N;if(_!=="/"){let Q=_.replace(/^\//,"").split("/");G="/"+N.replace(/^\//,"").split("/").slice(Q.length).join("/")}let U=!u&&t&&t.matches&&t.matches.length>0?t.matches:$T(r,{pathname:G});Kn(b||U!=null,`No routes matched location "${C.pathname}${C.search}${C.hash}" `),Kn(U==null||U[U.length-1].route.element!==void 0||U[U.length-1].route.Component!==void 0||U[U.length-1].route.lazy!==void 0,`Matched leaf route at location "${C.pathname}${C.search}${C.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let H=SR(U&&U.map(Q=>Object.assign({},Q,{params:Object.assign({},m,Q.params),pathname:oi([_,o.encodeLocation?o.encodeLocation(Q.pathname).pathname:Q.pathname]),pathnameBase:Q.pathnameBase==="/"?_:oi([_,o.encodeLocation?o.encodeLocation(Q.pathnameBase).pathname:Q.pathnameBase])})),h,t,s);return e&&H?z.createElement(Mu.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...C},navigationType:"POP"}},H):H}function ER(){let r=xR(),e=fR(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),t=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:s},u={padding:"2px 4px",backgroundColor:s},h=null;return console.error("Error handled by React Router default ErrorBoundary:",r),h=z.createElement(z.Fragment,null,z.createElement("p",null,"💿 Hey developer 👋"),z.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",z.createElement("code",{style:u},"ErrorBoundary")," or"," ",z.createElement("code",{style:u},"errorElement")," prop on your route.")),z.createElement(z.Fragment,null,z.createElement("h2",null,"Unexpected Application Error!"),z.createElement("h3",{style:{fontStyle:"italic"}},e),t?z.createElement("pre",{style:o},t):null,h)}var TR=z.createElement(ER,null),bR=class extends z.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){console.error("React Router caught the following error during render",r,e)}render(){return this.state.error!==void 0?z.createElement(lr.Provider,{value:this.props.routeContext},z.createElement(dg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function wR({routeContext:r,match:e,children:t}){let s=z.useContext(Bo);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),z.createElement(lr.Provider,{value:r},t)}function SR(r,e=[],t=null,s=null){if(r==null){if(!t)return null;if(t.errors)r=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)r=t.matches;else return null}let o=r,u=t==null?void 0:t.errors;if(u!=null){let m=o.findIndex(g=>g.route.id&&(u==null?void 0:u[g.route.id])!==void 0);ct(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),o=o.slice(0,Math.min(o.length,m+1))}let h=!1,p=-1;if(t)for(let m=0;m<o.length;m++){let g=o[m];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(p=m),g.route.id){let{loaderData:_,errors:b}=t,w=g.route.loader&&!_.hasOwnProperty(g.route.id)&&(!b||b[g.route.id]===void 0);if(g.route.lazy||w){h=!0,p>=0?o=o.slice(0,p+1):o=[o[0]];break}}}return o.reduceRight((m,g,_)=>{let b,w=!1,C=null,N=null;t&&(b=u&&g.route.id?u[g.route.id]:void 0,C=g.route.errorElement||TR,h&&(p<0&&_===0?(eb("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),w=!0,N=null):p===_&&(w=!0,N=g.route.hydrateFallbackElement||null)));let G=e.concat(o.slice(0,_+1)),U=()=>{let H;return b?H=C:w?H=N:g.route.Component?H=z.createElement(g.route.Component,null):g.route.element?H=g.route.element:H=m,z.createElement(wR,{match:g,routeContext:{outlet:m,matches:G,isDataRoute:t!=null},children:H})};return t&&(g.route.ErrorBoundary||g.route.errorElement||_===0)?z.createElement(bR,{location:t.location,revalidation:t.revalidation,component:C,error:b,children:U(),routeContext:{outlet:null,matches:G,isDataRoute:!0}}):U()},null)}function pg(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function AR(r){let e=z.useContext(Bo);return ct(e,pg(r)),e}function RR(r){let e=z.useContext(_f);return ct(e,pg(r)),e}function IR(r){let e=z.useContext(lr);return ct(e,pg(r)),e}function mg(r){let e=IR(r),t=e.matches[e.matches.length-1];return ct(t.route.id,`${r} can only be used on routes that contain a unique "id"`),t.route.id}function CR(){return mg("useRouteId")}function xR(){var s;let r=z.useContext(dg),e=RR("useRouteError"),t=mg("useRouteError");return r!==void 0?r:(s=e.errors)==null?void 0:s[t]}function DR(){let{router:r}=AR("useNavigate"),e=mg("useNavigate"),t=z.useRef(!1);return JT(()=>{t.current=!0}),z.useCallback(async(o,u={})=>{Kn(t.current,WT),t.current&&(typeof o=="number"?r.navigate(o):await r.navigate(o,{fromRouteId:e,...u}))},[r,e])}var F0={};function eb(r,e,t){!e&&!F0[r]&&(F0[r]=!0,Kn(!1,t))}z.memo(NR);function NR({routes:r,future:e,state:t}){return ZT(r,void 0,t,e)}function OR({to:r,replace:e,state:t,relative:s}){ct(Ho(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=z.useContext(or);Kn(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:u}=z.useContext(lr),{pathname:h}=ds(),p=Fo(),m=fg(r,hg(u),h,s==="path"),g=JSON.stringify(m);return z.useEffect(()=>{p(JSON.parse(g),{replace:e,state:t,relative:s})},[p,g,s,e,t]),null}function ta(r){ct(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function kR({basename:r="/",children:e=null,location:t,navigationType:s="POP",navigator:o,static:u=!1}){ct(!Ho(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=r.replace(/^\/*/,"/"),p=z.useMemo(()=>({basename:h,navigator:o,static:u,future:{}}),[h,o,u]);typeof t=="string"&&(t=pa(t));let{pathname:m="/",search:g="",hash:_="",state:b=null,key:w="default"}=t,C=z.useMemo(()=>{let N=ci(m,h);return N==null?null:{location:{pathname:N,search:g,hash:_,state:b,key:w},navigationType:s}},[h,m,g,_,b,w,s]);return Kn(C!=null,`<Router basename="${h}"> is not able to match the URL "${m}${g}${_}" because it does not start with the basename, so the <Router> won't render anything.`),C==null?null:z.createElement(or.Provider,{value:p},z.createElement(Mu.Provider,{children:e,value:C}))}function MR({children:r,location:e}){return _R(xm(r),e)}function xm(r,e=[]){let t=[];return z.Children.forEach(r,(s,o)=>{if(!z.isValidElement(s))return;let u=[...e,o];if(s.type===z.Fragment){t.push.apply(t,xm(s.props.children,u));return}ct(s.type===ta,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ct(!s.props.index||!s.props.children,"An index route cannot have child routes.");let h={id:s.props.id||u.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(h.children=xm(s.props.children,u)),t.push(h)}),t}var xh="get",Dh="application/x-www-form-urlencoded";function Ef(r){return r!=null&&typeof r.tagName=="string"}function PR(r){return Ef(r)&&r.tagName.toLowerCase()==="button"}function VR(r){return Ef(r)&&r.tagName.toLowerCase()==="form"}function LR(r){return Ef(r)&&r.tagName.toLowerCase()==="input"}function UR(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function jR(r,e){return r.button===0&&(!e||e==="_self")&&!UR(r)}var vh=null;function zR(){if(vh===null)try{new FormData(document.createElement("form"),0),vh=!1}catch{vh=!0}return vh}var qR=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function om(r){return r!=null&&!qR.has(r)?(Kn(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Dh}"`),null):r}function BR(r,e){let t,s,o,u,h;if(VR(r)){let p=r.getAttribute("action");s=p?ci(p,e):null,t=r.getAttribute("method")||xh,o=om(r.getAttribute("enctype"))||Dh,u=new FormData(r)}else if(PR(r)||LR(r)&&(r.type==="submit"||r.type==="image")){let p=r.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=r.getAttribute("formaction")||p.getAttribute("action");if(s=m?ci(m,e):null,t=r.getAttribute("formmethod")||p.getAttribute("method")||xh,o=om(r.getAttribute("formenctype"))||om(p.getAttribute("enctype"))||Dh,u=new FormData(p,r),!zR()){let{name:g,type:_,value:b}=r;if(_==="image"){let w=g?`${g}.`:"";u.append(`${w}x`,"0"),u.append(`${w}y`,"0")}else g&&u.append(g,b)}}else{if(Ef(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=xh,s=null,o=Dh,h=r}return u&&o==="text/plain"&&(h=u,u=void 0),{action:s,method:t.toLowerCase(),encType:o,formData:u,body:h}}function gg(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}async function HR(r,e){if(r.id in e)return e[r.id];try{let t=await import(r.module);return e[r.id]=t,t}catch(t){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function FR(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function GR(r,e,t){let s=await Promise.all(r.map(async o=>{let u=e.routes[o.route.id];if(u){let h=await HR(u,t);return h.links?h.links():[]}return[]}));return YR(s.flat(1).filter(FR).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function G0(r,e,t,s,o,u){let h=(m,g)=>t[g]?m.route.id!==t[g].route.id:!0,p=(m,g)=>{var _;return t[g].pathname!==m.pathname||((_=t[g].route.path)==null?void 0:_.endsWith("*"))&&t[g].params["*"]!==m.params["*"]};return u==="assets"?e.filter((m,g)=>h(m,g)||p(m,g)):u==="data"?e.filter((m,g)=>{var b;let _=s.routes[m.route.id];if(!_||!_.hasLoader)return!1;if(h(m,g)||p(m,g))return!0;if(m.route.shouldRevalidate){let w=m.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((b=t[0])==null?void 0:b.params)||{},nextUrl:new URL(r,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function $R(r,e,{includeHydrateFallback:t}={}){return KR(r.map(s=>{let o=e.routes[s.route.id];if(!o)return[];let u=[o.module];return o.clientActionModule&&(u=u.concat(o.clientActionModule)),o.clientLoaderModule&&(u=u.concat(o.clientLoaderModule)),t&&o.hydrateFallbackModule&&(u=u.concat(o.hydrateFallbackModule)),o.imports&&(u=u.concat(o.imports)),u}).flat(1))}function KR(r){return[...new Set(r)]}function QR(r){let e={},t=Object.keys(r).sort();for(let s of t)e[s]=r[s];return e}function YR(r,e){let t=new Set;return new Set(e),r.reduce((s,o)=>{let u=JSON.stringify(QR(o));return t.has(u)||(t.add(u),s.push({key:u,link:o})),s},[])}function XR(r,e){let t=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return t.pathname==="/"?t.pathname="_root.data":e&&ci(t.pathname,e)==="/"?t.pathname=`${e.replace(/\/$/,"")}/_root.data`:t.pathname=`${t.pathname.replace(/\/$/,"")}.data`,t}function tb(){let r=z.useContext(Bo);return gg(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function WR(){let r=z.useContext(_f);return gg(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var yg=z.createContext(void 0);yg.displayName="FrameworkContext";function nb(){let r=z.useContext(yg);return gg(r,"You must render this element inside a <HydratedRouter> element"),r}function JR(r,e){let t=z.useContext(yg),[s,o]=z.useState(!1),[u,h]=z.useState(!1),{onFocus:p,onBlur:m,onMouseEnter:g,onMouseLeave:_,onTouchStart:b}=e,w=z.useRef(null);z.useEffect(()=>{if(r==="render"&&h(!0),r==="viewport"){let G=H=>{H.forEach(J=>{h(J.isIntersecting)})},U=new IntersectionObserver(G,{threshold:.5});return w.current&&U.observe(w.current),()=>{U.disconnect()}}},[r]),z.useEffect(()=>{if(s){let G=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(G)}}},[s]);let C=()=>{o(!0)},N=()=>{o(!1),h(!1)};return t?r!=="intent"?[u,w,{}]:[u,w,{onFocus:hu(p,C),onBlur:hu(m,N),onMouseEnter:hu(g,C),onMouseLeave:hu(_,N),onTouchStart:hu(b,C)}]:[!1,w,{}]}function hu(r,e){return t=>{r&&r(t),t.defaultPrevented||e(t)}}function ZR({page:r,...e}){let{router:t}=tb(),s=z.useMemo(()=>$T(t.routes,r,t.basename),[t.routes,r,t.basename]);return s?z.createElement(tI,{page:r,matches:s,...e}):null}function eI(r){let{manifest:e,routeModules:t}=nb(),[s,o]=z.useState([]);return z.useEffect(()=>{let u=!1;return GR(r,e,t).then(h=>{u||o(h)}),()=>{u=!0}},[r,e,t]),s}function tI({page:r,matches:e,...t}){let s=ds(),{manifest:o,routeModules:u}=nb(),{basename:h}=tb(),{loaderData:p,matches:m}=WR(),g=z.useMemo(()=>G0(r,e,m,o,s,"data"),[r,e,m,o,s]),_=z.useMemo(()=>G0(r,e,m,o,s,"assets"),[r,e,m,o,s]),b=z.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let N=new Set,G=!1;if(e.forEach(H=>{var Q;let J=o.routes[H.route.id];!J||!J.hasLoader||(!g.some(le=>le.route.id===H.route.id)&&H.route.id in p&&((Q=u[H.route.id])!=null&&Q.shouldRevalidate)||J.hasClientLoader?G=!0:N.add(H.route.id))}),N.size===0)return[];let U=XR(r,h);return G&&N.size>0&&U.searchParams.set("_routes",e.filter(H=>N.has(H.route.id)).map(H=>H.route.id).join(",")),[U.pathname+U.search]},[h,p,s,o,g,e,r,u]),w=z.useMemo(()=>$R(_,o),[_,o]),C=eI(_);return z.createElement(z.Fragment,null,b.map(N=>z.createElement("link",{key:N,rel:"prefetch",as:"fetch",href:N,...t})),w.map(N=>z.createElement("link",{key:N,rel:"modulepreload",href:N,...t})),C.map(({key:N,link:G})=>z.createElement("link",{key:N,...G})))}function nI(...r){return e=>{r.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var rb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{rb&&(window.__reactRouterVersion="7.5.0")}catch{}function rI({basename:r,children:e,window:t}){let s=z.useRef();s.current==null&&(s.current=F1({window:t,v5Compat:!0}));let o=s.current,[u,h]=z.useState({action:o.action,location:o.location}),p=z.useCallback(m=>{z.startTransition(()=>h(m))},[h]);return z.useLayoutEffect(()=>o.listen(p),[o,p]),z.createElement(kR,{basename:r,children:e,location:u.location,navigationType:u.action,navigator:o})}var ib=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Go=z.forwardRef(function({onClick:e,discover:t="render",prefetch:s="none",relative:o,reloadDocument:u,replace:h,state:p,target:m,to:g,preventScrollReset:_,viewTransition:b,...w},C){let{basename:N}=z.useContext(or),G=typeof g=="string"&&ib.test(g),U,H=!1;if(typeof g=="string"&&G&&(U=g,rb))try{let x=new URL(window.location.href),O=g.startsWith("//")?new URL(x.protocol+g):new URL(g),P=ci(O.pathname,N);O.origin===x.origin&&P!=null?g=P+O.search+O.hash:H=!0}catch{Kn(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let J=gR(g,{relative:o}),[Q,le,oe]=JR(s,w),ue=oI(g,{replace:h,state:p,target:m,preventScrollReset:_,relative:o,viewTransition:b});function D(x){e&&e(x),x.defaultPrevented||ue(x)}let R=z.createElement("a",{...w,...oe,href:U||J,onClick:H||u?e:D,ref:nI(C,le),target:m,"data-discover":!G&&t==="render"?"true":void 0});return Q&&!G?z.createElement(z.Fragment,null,R,z.createElement(ZR,{page:J})):R});Go.displayName="Link";var iI=z.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:s="",end:o=!1,style:u,to:h,viewTransition:p,children:m,...g},_){let b=Pu(h,{relative:g.relative}),w=ds(),C=z.useContext(_f),{navigator:N,basename:G}=z.useContext(or),U=C!=null&&fI(b)&&p===!0,H=N.encodeLocation?N.encodeLocation(b).pathname:b.pathname,J=w.pathname,Q=C&&C.navigation&&C.navigation.location?C.navigation.location.pathname:null;t||(J=J.toLowerCase(),Q=Q?Q.toLowerCase():null,H=H.toLowerCase()),Q&&G&&(Q=ci(Q,G)||Q);const le=H!=="/"&&H.endsWith("/")?H.length-1:H.length;let oe=J===H||!o&&J.startsWith(H)&&J.charAt(le)==="/",ue=Q!=null&&(Q===H||!o&&Q.startsWith(H)&&Q.charAt(H.length)==="/"),D={isActive:oe,isPending:ue,isTransitioning:U},R=oe?e:void 0,x;typeof s=="function"?x=s(D):x=[s,oe?"active":null,ue?"pending":null,U?"transitioning":null].filter(Boolean).join(" ");let O=typeof u=="function"?u(D):u;return z.createElement(Go,{...g,"aria-current":R,className:x,ref:_,style:O,to:h,viewTransition:p},typeof m=="function"?m(D):m)});iI.displayName="NavLink";var sI=z.forwardRef(({discover:r="render",fetcherKey:e,navigate:t,reloadDocument:s,replace:o,state:u,method:h=xh,action:p,onSubmit:m,relative:g,preventScrollReset:_,viewTransition:b,...w},C)=>{let N=cI(),G=hI(p,{relative:g}),U=h.toLowerCase()==="get"?"get":"post",H=typeof p=="string"&&ib.test(p),J=Q=>{if(m&&m(Q),Q.defaultPrevented)return;Q.preventDefault();let le=Q.nativeEvent.submitter,oe=(le==null?void 0:le.getAttribute("formmethod"))||h;N(le||Q.currentTarget,{fetcherKey:e,method:oe,navigate:t,replace:o,state:u,relative:g,preventScrollReset:_,viewTransition:b})};return z.createElement("form",{ref:C,method:U,action:G,onSubmit:s?m:J,...w,"data-discover":!H&&r==="render"?"true":void 0})});sI.displayName="Form";function aI(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function sb(r){let e=z.useContext(Bo);return ct(e,aI(r)),e}function oI(r,{target:e,replace:t,state:s,preventScrollReset:o,relative:u,viewTransition:h}={}){let p=Fo(),m=ds(),g=Pu(r,{relative:u});return z.useCallback(_=>{if(jR(_,e)){_.preventDefault();let b=t!==void 0?t:Au(m)===Au(g);p(r,{replace:b,state:s,preventScrollReset:o,relative:u,viewTransition:h})}},[m,p,g,t,s,e,r,o,u,h])}var lI=0,uI=()=>`__${String(++lI)}__`;function cI(){let{router:r}=sb("useSubmit"),{basename:e}=z.useContext(or),t=CR();return z.useCallback(async(s,o={})=>{let{action:u,method:h,encType:p,formData:m,body:g}=BR(s,e);if(o.navigate===!1){let _=o.fetcherKey||uI();await r.fetch(_,t,o.action||u,{preventScrollReset:o.preventScrollReset,formData:m,body:g,formMethod:o.method||h,formEncType:o.encType||p,flushSync:o.flushSync})}else await r.navigate(o.action||u,{preventScrollReset:o.preventScrollReset,formData:m,body:g,formMethod:o.method||h,formEncType:o.encType||p,replace:o.replace,state:o.state,fromRouteId:t,flushSync:o.flushSync,viewTransition:o.viewTransition})},[r,e,t])}function hI(r,{relative:e}={}){let{basename:t}=z.useContext(or),s=z.useContext(lr);ct(s,"useFormAction must be used inside a RouteContext");let[o]=s.matches.slice(-1),u={...Pu(r||".",{relative:e})},h=ds();if(r==null){u.search=h.search;let p=new URLSearchParams(u.search),m=p.getAll("index");if(m.some(_=>_==="")){p.delete("index"),m.filter(b=>b).forEach(b=>p.append("index",b));let _=p.toString();u.search=_?`?${_}`:""}}return(!r||r===".")&&o.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(u.pathname=u.pathname==="/"?t:oi([t,u.pathname])),Au(u)}function fI(r,e={}){let t=z.useContext(XT);ct(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=sb("useViewTransitionState"),o=Pu(r,{relative:e.relative});if(!t.isTransitioning)return!1;let u=ci(t.currentLocation.pathname,s)||t.currentLocation.pathname,h=ci(t.nextLocation.pathname,s)||t.nextLocation.pathname;return Kh(o.pathname,h)!=null||Kh(o.pathname,u)!=null}new TextEncoder;const dI=()=>{};var $0={};/**
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
 */const ab=function(r){const e=[];let t=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},pI=function(r){const e=[];let t=0,s=0;for(;t<r.length;){const o=r[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=r[t++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=r[t++],h=r[t++],p=r[t++],m=((o&7)<<18|(u&63)<<12|(h&63)<<6|p&63)-65536;e[s++]=String.fromCharCode(55296+(m>>10)),e[s++]=String.fromCharCode(56320+(m&1023))}else{const u=r[t++],h=r[t++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},ob={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const u=r[o],h=o+1<r.length,p=h?r[o+1]:0,m=o+2<r.length,g=m?r[o+2]:0,_=u>>2,b=(u&3)<<4|p>>4;let w=(p&15)<<2|g>>6,C=g&63;m||(C=64,h||(w=64)),s.push(t[_],t[b],t[w],t[C])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(ab(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):pI(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const u=t[r.charAt(o++)],p=o<r.length?t[r.charAt(o)]:0;++o;const g=o<r.length?t[r.charAt(o)]:64;++o;const b=o<r.length?t[r.charAt(o)]:64;if(++o,u==null||p==null||g==null||b==null)throw new mI;const w=u<<2|p>>4;if(s.push(w),g!==64){const C=p<<4&240|g>>2;if(s.push(C),b!==64){const N=g<<6&192|b;s.push(N)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class mI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const gI=function(r){const e=ab(r);return ob.encodeByteArray(e,!0)},Qh=function(r){return gI(r).replace(/\./g,"")},lb=function(r){try{return ob.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function yI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const vI=()=>yI().__FIREBASE_DEFAULTS__,_I=()=>{if(typeof process>"u"||typeof $0>"u")return;const r=$0.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},EI=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&lb(r[1]);return e&&JSON.parse(e)},Tf=()=>{try{return dI()||vI()||_I()||EI()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},ub=r=>{var e,t;return(t=(e=Tf())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},TI=r=>{const e=ub(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},cb=()=>{var r;return(r=Tf())===null||r===void 0?void 0:r.config},hb=r=>{var e;return(e=Tf())===null||e===void 0?void 0:e[`_${r}`]};/**
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
 */class bI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function wI(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=r.iat||0,u=r.sub||r.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Qh(JSON.stringify(t)),Qh(JSON.stringify(h)),""].join(".")}/**
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
 */function on(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function SI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(on())}function AI(){var r;const e=(r=Tf())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function RI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function II(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function CI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function xI(){const r=on();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function DI(){return!AI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function NI(){try{return typeof indexedDB=="object"}catch{return!1}}function OI(){return new Promise((r,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var u;e(((u=o.error)===null||u===void 0?void 0:u.message)||"")}}catch(t){e(t)}})}/**
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
 */const kI="FirebaseError";class yi extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=kI,Object.setPrototypeOf(this,yi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Vu.prototype.create)}}class Vu{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?MI(u,s):"Error",p=`${this.serviceName}: ${h} (${o}).`;return new yi(o,p,s)}}function MI(r,e){return r.replace(PI,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const PI=/\{\$([^}]+)}/g;function VI(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function hi(r,e){if(r===e)return!0;const t=Object.keys(r),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const u=r[o],h=e[o];if(K0(u)&&K0(h)){if(!hi(u,h))return!1}else if(u!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function K0(r){return r!==null&&typeof r=="object"}/**
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
 */function Lu(r){const e=[];for(const[t,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function fu(r){const e={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,u]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(u)}}),e}function du(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function LI(r,e){const t=new UI(r,e);return t.subscribe.bind(t)}class UI{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");jI(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=lm),o.error===void 0&&(o.error=lm),o.complete===void 0&&(o.complete=lm);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function jI(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function lm(){}/**
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
 */function xt(r){return r&&r._delegate?r._delegate:r}class oa{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const na="[DEFAULT]";/**
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
 */class zI{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new bI;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(o)return null;throw u}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(BI(e))try{this.getOrInitializeService({instanceIdentifier:na})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=na){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=na){return this.instances.has(e)}getOptions(e=na){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(u);s===p&&h.resolve(o)}return o}onInit(e,t){var s;const o=this.normalizeInstanceIdentifier(t),u=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(o,u);const h=this.instances.get(o);return h&&e(h,o),()=>{u.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:qI(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=na){return this.component?this.component.multipleInstances?e:na:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function qI(r){return r===na?void 0:r}function BI(r){return r.instantiationMode==="EAGER"}/**
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
 */class HI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new zI(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ve;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Ve||(Ve={}));const FI={debug:Ve.DEBUG,verbose:Ve.VERBOSE,info:Ve.INFO,warn:Ve.WARN,error:Ve.ERROR,silent:Ve.SILENT},GI=Ve.INFO,$I={[Ve.DEBUG]:"log",[Ve.VERBOSE]:"log",[Ve.INFO]:"info",[Ve.WARN]:"warn",[Ve.ERROR]:"error"},KI=(r,e,...t)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),o=$I[e];if(o)console[o](`[${s}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class vg{constructor(e){this.name=e,this._logLevel=GI,this._logHandler=KI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?FI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ve.DEBUG,...e),this._logHandler(this,Ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ve.VERBOSE,...e),this._logHandler(this,Ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ve.INFO,...e),this._logHandler(this,Ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ve.WARN,...e),this._logHandler(this,Ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ve.ERROR,...e),this._logHandler(this,Ve.ERROR,...e)}}const QI=(r,e)=>e.some(t=>r instanceof t);let Q0,Y0;function YI(){return Q0||(Q0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function XI(){return Y0||(Y0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const fb=new WeakMap,Dm=new WeakMap,db=new WeakMap,um=new WeakMap,_g=new WeakMap;function WI(r){const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("success",u),r.removeEventListener("error",h)},u=()=>{t(ns(r.result)),o()},h=()=>{s(r.error),o()};r.addEventListener("success",u),r.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&fb.set(t,r)}).catch(()=>{}),_g.set(e,r),e}function JI(r){if(Dm.has(r))return;const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",h),r.removeEventListener("abort",h)},u=()=>{t(),o()},h=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",u),r.addEventListener("error",h),r.addEventListener("abort",h)});Dm.set(r,e)}let Nm={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return Dm.get(r);if(e==="objectStoreNames")return r.objectStoreNames||db.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ns(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function ZI(r){Nm=r(Nm)}function eC(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=r.call(cm(this),e,...t);return db.set(s,e.sort?e.sort():[e]),ns(s)}:XI().includes(r)?function(...e){return r.apply(cm(this),e),ns(fb.get(this))}:function(...e){return ns(r.apply(cm(this),e))}}function tC(r){return typeof r=="function"?eC(r):(r instanceof IDBTransaction&&JI(r),QI(r,YI())?new Proxy(r,Nm):r)}function ns(r){if(r instanceof IDBRequest)return WI(r);if(um.has(r))return um.get(r);const e=tC(r);return e!==r&&(um.set(r,e),_g.set(e,r)),e}const cm=r=>_g.get(r);function nC(r,e,{blocked:t,upgrade:s,blocking:o,terminated:u}={}){const h=indexedDB.open(r,e),p=ns(h);return s&&h.addEventListener("upgradeneeded",m=>{s(ns(h.result),m.oldVersion,m.newVersion,ns(h.transaction),m)}),t&&h.addEventListener("blocked",m=>t(m.oldVersion,m.newVersion,m)),p.then(m=>{u&&m.addEventListener("close",()=>u()),o&&m.addEventListener("versionchange",g=>o(g.oldVersion,g.newVersion,g))}).catch(()=>{}),p}const rC=["get","getKey","getAll","getAllKeys","count"],iC=["put","add","delete","clear"],hm=new Map;function X0(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(hm.get(e))return hm.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=iC.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||rC.includes(t)))return;const u=async function(h,...p){const m=this.transaction(h,o?"readwrite":"readonly");let g=m.store;return s&&(g=g.index(p.shift())),(await Promise.all([g[t](...p),o&&m.done]))[0]};return hm.set(e,u),u}ZI(r=>({...r,get:(e,t,s)=>X0(e,t)||r.get(e,t,s),has:(e,t)=>!!X0(e,t)||r.has(e,t)}));/**
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
 */class sC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(aC(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function aC(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Om="@firebase/app",W0="0.11.4";/**
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
 */const fi=new vg("@firebase/app"),oC="@firebase/app-compat",lC="@firebase/analytics-compat",uC="@firebase/analytics",cC="@firebase/app-check-compat",hC="@firebase/app-check",fC="@firebase/auth",dC="@firebase/auth-compat",pC="@firebase/database",mC="@firebase/data-connect",gC="@firebase/database-compat",yC="@firebase/functions",vC="@firebase/functions-compat",_C="@firebase/installations",EC="@firebase/installations-compat",TC="@firebase/messaging",bC="@firebase/messaging-compat",wC="@firebase/performance",SC="@firebase/performance-compat",AC="@firebase/remote-config",RC="@firebase/remote-config-compat",IC="@firebase/storage",CC="@firebase/storage-compat",xC="@firebase/firestore",DC="@firebase/vertexai",NC="@firebase/firestore-compat",OC="firebase",kC="11.6.0";/**
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
 */const km="[DEFAULT]",MC={[Om]:"fire-core",[oC]:"fire-core-compat",[uC]:"fire-analytics",[lC]:"fire-analytics-compat",[hC]:"fire-app-check",[cC]:"fire-app-check-compat",[fC]:"fire-auth",[dC]:"fire-auth-compat",[pC]:"fire-rtdb",[mC]:"fire-data-connect",[gC]:"fire-rtdb-compat",[yC]:"fire-fn",[vC]:"fire-fn-compat",[_C]:"fire-iid",[EC]:"fire-iid-compat",[TC]:"fire-fcm",[bC]:"fire-fcm-compat",[wC]:"fire-perf",[SC]:"fire-perf-compat",[AC]:"fire-rc",[RC]:"fire-rc-compat",[IC]:"fire-gcs",[CC]:"fire-gcs-compat",[xC]:"fire-fst",[NC]:"fire-fst-compat",[DC]:"fire-vertex","fire-js":"fire-js",[OC]:"fire-js-all"};/**
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
 */const Yh=new Map,PC=new Map,Mm=new Map;function J0(r,e){try{r.container.addComponent(e)}catch(t){fi.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function Ao(r){const e=r.name;if(Mm.has(e))return fi.debug(`There were multiple attempts to register component ${e}.`),!1;Mm.set(e,r);for(const t of Yh.values())J0(t,r);for(const t of PC.values())J0(t,r);return!0}function Eg(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function Gn(r){return r==null?!1:r.settings!==void 0}/**
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
 */const VC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},rs=new Vu("app","Firebase",VC);/**
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
 */class LC{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new oa("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw rs.create("app-deleted",{appName:this._name})}}/**
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
 */const $o=kC;function pb(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const s=Object.assign({name:km,automaticDataCollectionEnabled:!1},e),o=s.name;if(typeof o!="string"||!o)throw rs.create("bad-app-name",{appName:String(o)});if(t||(t=cb()),!t)throw rs.create("no-options");const u=Yh.get(o);if(u){if(hi(t,u.options)&&hi(s,u.config))return u;throw rs.create("duplicate-app",{appName:o})}const h=new HI(o);for(const m of Mm.values())h.addComponent(m);const p=new LC(t,s,h);return Yh.set(o,p),p}function mb(r=km){const e=Yh.get(r);if(!e&&r===km&&cb())return pb();if(!e)throw rs.create("no-app",{appName:r});return e}function is(r,e,t){var s;let o=(s=MC[r])!==null&&s!==void 0?s:r;t&&(o+=`-${t}`);const u=o.match(/\s|\//),h=e.match(/\s|\//);if(u||h){const p=[`Unable to register library "${o}" with version "${e}":`];u&&p.push(`library name "${o}" contains illegal characters (whitespace or "/")`),u&&h&&p.push("and"),h&&p.push(`version name "${e}" contains illegal characters (whitespace or "/")`),fi.warn(p.join(" "));return}Ao(new oa(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const UC="firebase-heartbeat-database",jC=1,Ru="firebase-heartbeat-store";let fm=null;function gb(){return fm||(fm=nC(UC,jC,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Ru)}catch(t){console.warn(t)}}}}).catch(r=>{throw rs.create("idb-open",{originalErrorMessage:r.message})})),fm}async function zC(r){try{const t=(await gb()).transaction(Ru),s=await t.objectStore(Ru).get(yb(r));return await t.done,s}catch(e){if(e instanceof yi)fi.warn(e.message);else{const t=rs.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});fi.warn(t.message)}}}async function Z0(r,e){try{const s=(await gb()).transaction(Ru,"readwrite");await s.objectStore(Ru).put(e,yb(r)),await s.done}catch(t){if(t instanceof yi)fi.warn(t.message);else{const s=rs.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});fi.warn(s.message)}}}function yb(r){return`${r.name}!${r.options.appId}`}/**
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
 */const qC=1024,BC=30;class HC{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new GC(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=eE();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>BC){const h=$C(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){fi.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=eE(),{heartbeatsToSend:s,unsentEntries:o}=FC(this._heartbeatsCache.heartbeats),u=Qh(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return fi.warn(t),""}}}function eE(){return new Date().toISOString().substring(0,10)}function FC(r,e=qC){const t=[];let s=r.slice();for(const o of r){const u=t.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),tE(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),tE(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class GC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return NI()?OI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await zC(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Z0(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Z0(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function tE(r){return Qh(JSON.stringify({version:2,heartbeats:r})).length}function $C(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let s=1;s<r.length;s++)r[s].date<t&&(t=r[s].date,e=s);return e}/**
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
 */function KC(r){Ao(new oa("platform-logger",e=>new sC(e),"PRIVATE")),Ao(new oa("heartbeat",e=>new HC(e),"PRIVATE")),is(Om,W0,r),is(Om,W0,"esm2017"),is("fire-js","")}KC("");var vn=function(){return vn=Object.assign||function(e){for(var t,s=1,o=arguments.length;s<o;s++){t=arguments[s];for(var u in t)Object.prototype.hasOwnProperty.call(t,u)&&(e[u]=t[u])}return e},vn.apply(this,arguments)};function Tg(r,e){var t={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&e.indexOf(s)<0&&(t[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(r);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(r,s[o])&&(t[s[o]]=r[s[o]]);return t}function Xh(r,e,t){if(t||arguments.length===2)for(var s=0,o=e.length,u;s<o;s++)(u||!(s in e))&&(u||(u=Array.prototype.slice.call(e,0,s)),u[s]=e[s]);return r.concat(u||Array.prototype.slice.call(e))}function vb(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const QC=vb,_b=new Vu("auth","Firebase",vb());/**
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
 */const Wh=new vg("@firebase/auth");function YC(r,...e){Wh.logLevel<=Ve.WARN&&Wh.warn(`Auth (${$o}): ${r}`,...e)}function Nh(r,...e){Wh.logLevel<=Ve.ERROR&&Wh.error(`Auth (${$o}): ${r}`,...e)}/**
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
 */function ir(r,...e){throw bg(r,...e)}function Ir(r,...e){return bg(r,...e)}function Eb(r,e,t){const s=Object.assign(Object.assign({},QC()),{[e]:t});return new Vu("auth","Firebase",s).create(e,{appName:r.name})}function li(r){return Eb(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function bg(r,...e){if(typeof r!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(t,...s)}return _b.create(r,...e)}function we(r,e,...t){if(!r)throw bg(e,...t)}function si(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Nh(e),new Error(e)}function di(r,e){r||si(e)}/**
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
 */function Pm(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function XC(){return nE()==="http:"||nE()==="https:"}function nE(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
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
 */function WC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(XC()||II()||"connection"in navigator)?navigator.onLine:!0}function JC(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class Uu{constructor(e,t){this.shortDelay=e,this.longDelay=t,di(t>e,"Short delay should be less than long delay!"),this.isMobile=SI()||CI()}get(){return WC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function wg(r,e){di(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Tb{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;si("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;si("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;si("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const ZC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const ex=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],tx=new Uu(3e4,6e4);function ps(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function vi(r,e,t,s,o={}){return bb(r,o,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const p=Lu(Object.assign({key:r.config.apiKey},h)).slice(1),m=await r._getAdditionalHeaders();m["Content-Type"]="application/json",r.languageCode&&(m["X-Firebase-Locale"]=r.languageCode);const g=Object.assign({method:e,headers:m},u);return RI()||(g.referrerPolicy="no-referrer"),Tb.fetch()(await wb(r,r.config.apiHost,t,p),g)})}async function bb(r,e,t){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},ZC),e);try{const o=new rx(r),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw _h(r,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const p=u.ok?h.errorMessage:h.error.message,[m,g]=p.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw _h(r,"credential-already-in-use",h);if(m==="EMAIL_EXISTS")throw _h(r,"email-already-in-use",h);if(m==="USER_DISABLED")throw _h(r,"user-disabled",h);const _=s[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw Eb(r,_,g);ir(r,_)}}catch(o){if(o instanceof yi)throw o;ir(r,"network-request-failed",{message:String(o)})}}async function ju(r,e,t,s,o={}){const u=await vi(r,e,t,s,o);return"mfaPendingCredential"in u&&ir(r,"multi-factor-auth-required",{_serverResponse:u}),u}async function wb(r,e,t,s){const o=`${e}${t}?${s}`,u=r,h=u.config.emulator?wg(r.config,o):`${r.config.apiScheme}://${o}`;return ex.includes(t)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(h).toString():h}function nx(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class rx{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Ir(this.auth,"network-request-failed")),tx.get())})}}function _h(r,e,t){const s={appName:r.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=Ir(r,e,s);return o.customData._tokenResponse=t,o}function rE(r){return r!==void 0&&r.enterprise!==void 0}class ix{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return nx(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function sx(r,e){return vi(r,"GET","/v2/recaptchaConfig",ps(r,e))}/**
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
 */async function ax(r,e){return vi(r,"POST","/v1/accounts:delete",e)}async function Jh(r,e){return vi(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function _u(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ox(r,e=!1){const t=xt(r),s=await t.getIdToken(e),o=Sg(s);we(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:_u(dm(o.auth_time)),issuedAtTime:_u(dm(o.iat)),expirationTime:_u(dm(o.exp)),signInProvider:h||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function dm(r){return Number(r)*1e3}function Sg(r){const[e,t,s]=r.split(".");if(e===void 0||t===void 0||s===void 0)return Nh("JWT malformed, contained fewer than 3 sections"),null;try{const o=lb(t);return o?JSON.parse(o):(Nh("Failed to decode base64 JWT payload"),null)}catch(o){return Nh("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function iE(r){const e=Sg(r);return we(e,"internal-error"),we(typeof e.exp<"u","internal-error"),we(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ro(r,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof yi&&lx(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function lx({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class ux{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Vm{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=_u(this.lastLoginAt),this.creationTime=_u(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Zh(r){var e;const t=r.auth,s=await r.getIdToken(),o=await Ro(r,Jh(t,{idToken:s}));we(o==null?void 0:o.users.length,t,"internal-error");const u=o.users[0];r._notifyReloadListener(u);const h=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?Sb(u.providerUserInfo):[],p=hx(r.providerData,h),m=r.isAnonymous,g=!(r.email&&u.passwordHash)&&!(p!=null&&p.length),_=m?g:!1,b={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:p,metadata:new Vm(u.createdAt,u.lastLoginAt),isAnonymous:_};Object.assign(r,b)}async function cx(r){const e=xt(r);await Zh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function hx(r,e){return[...r.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function Sb(r){return r.map(e=>{var{providerId:t}=e,s=Tg(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function fx(r,e){const t=await bb(r,{},async()=>{const s=Lu({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=r.config,h=await wb(r,o,"/v1/token",`key=${u}`),p=await r._getAdditionalHeaders();return p["Content-Type"]="application/x-www-form-urlencoded",Tb.fetch()(h,{method:"POST",headers:p,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function dx(r,e){return vi(r,"POST","/v2/accounts:revokeToken",ps(r,e))}/**
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
 */class Eo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){we(e.idToken,"internal-error"),we(typeof e.idToken<"u","internal-error"),we(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):iE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){we(e.length!==0,"internal-error");const t=iE(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(we(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:u}=await fx(e,t);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:u}=t,h=new Eo;return s&&(we(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(we(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(we(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Eo,this.toJSON())}_performRefresh(){return si("not implemented")}}/**
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
 */function Ki(r,e){we(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class tr{constructor(e){var{uid:t,auth:s,stsTokenManager:o}=e,u=Tg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ux(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new Vm(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const t=await Ro(this,this.stsTokenManager.getToken(this.auth,e));return we(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return ox(this,e)}reload(){return cx(this)}_assign(e){this!==e&&(we(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new tr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){we(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Zh(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Gn(this.auth.app))return Promise.reject(li(this.auth));const e=await this.getIdToken();return await Ro(this,ax(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,o,u,h,p,m,g,_;const b=(s=t.displayName)!==null&&s!==void 0?s:void 0,w=(o=t.email)!==null&&o!==void 0?o:void 0,C=(u=t.phoneNumber)!==null&&u!==void 0?u:void 0,N=(h=t.photoURL)!==null&&h!==void 0?h:void 0,G=(p=t.tenantId)!==null&&p!==void 0?p:void 0,U=(m=t._redirectEventId)!==null&&m!==void 0?m:void 0,H=(g=t.createdAt)!==null&&g!==void 0?g:void 0,J=(_=t.lastLoginAt)!==null&&_!==void 0?_:void 0,{uid:Q,emailVerified:le,isAnonymous:oe,providerData:ue,stsTokenManager:D}=t;we(Q&&D,e,"internal-error");const R=Eo.fromJSON(this.name,D);we(typeof Q=="string",e,"internal-error"),Ki(b,e.name),Ki(w,e.name),we(typeof le=="boolean",e,"internal-error"),we(typeof oe=="boolean",e,"internal-error"),Ki(C,e.name),Ki(N,e.name),Ki(G,e.name),Ki(U,e.name),Ki(H,e.name),Ki(J,e.name);const x=new tr({uid:Q,auth:e,email:w,emailVerified:le,displayName:b,isAnonymous:oe,photoURL:N,phoneNumber:C,tenantId:G,stsTokenManager:R,createdAt:H,lastLoginAt:J});return ue&&Array.isArray(ue)&&(x.providerData=ue.map(O=>Object.assign({},O))),U&&(x._redirectEventId=U),x}static async _fromIdTokenResponse(e,t,s=!1){const o=new Eo;o.updateFromServerResponse(t);const u=new tr({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await Zh(u),u}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];we(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?Sb(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),p=new Eo;p.updateFromIdToken(s);const m=new tr({uid:o.localId,auth:e,stsTokenManager:p,isAnonymous:h}),g={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new Vm(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(m,g),m}}/**
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
 */const sE=new Map;function ai(r){di(r instanceof Function,"Expected a class definition");let e=sE.get(r);return e?(di(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,sE.set(r,e),e)}/**
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
 */class Ab{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ab.type="NONE";const aE=Ab;/**
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
 */function Oh(r,e,t){return`firebase:${r}:${e}:${t}`}class To{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=Oh(this.userKey,o.apiKey,u),this.fullPersistenceKey=Oh("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Jh(this.auth,{idToken:e}).catch(()=>{});return t?tr._fromGetAccountInfoResponse(this.auth,t,e):null}return tr._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new To(ai(aE),e,s);const o=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let u=o[0]||ai(aE);const h=Oh(s,e.config.apiKey,e.name);let p=null;for(const g of t)try{const _=await g._get(h);if(_){let b;if(typeof _=="string"){const w=await Jh(e,{idToken:_}).catch(()=>{});if(!w)break;b=await tr._fromGetAccountInfoResponse(e,w,_)}else b=tr._fromJSON(e,_);g!==u&&(p=b),u=g;break}}catch{}const m=o.filter(g=>g._shouldAllowMigration);return!u._shouldAllowMigration||!m.length?new To(u,e,s):(u=m[0],p&&await u._set(h,p.toJSON()),await Promise.all(t.map(async g=>{if(g!==u)try{await g._remove(h)}catch{}})),new To(u,e,s))}}/**
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
 */function oE(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(xb(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Rb(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Nb(e))return"Blackberry";if(Ob(e))return"Webos";if(Ib(e))return"Safari";if((e.includes("chrome/")||Cb(e))&&!e.includes("edge/"))return"Chrome";if(Db(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Rb(r=on()){return/firefox\//i.test(r)}function Ib(r=on()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Cb(r=on()){return/crios\//i.test(r)}function xb(r=on()){return/iemobile/i.test(r)}function Db(r=on()){return/android/i.test(r)}function Nb(r=on()){return/blackberry/i.test(r)}function Ob(r=on()){return/webos/i.test(r)}function Ag(r=on()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function px(r=on()){var e;return Ag(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function mx(){return xI()&&document.documentMode===10}function kb(r=on()){return Ag(r)||Db(r)||Ob(r)||Nb(r)||/windows phone/i.test(r)||xb(r)}/**
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
 */function Mb(r,e=[]){let t;switch(r){case"Browser":t=oE(on());break;case"Worker":t=`${oE(on())}-${r}`;break;default:t=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${$o}/${s}`}/**
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
 */class gx{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((h,p)=>{try{const m=e(u);h(m)}catch(m){p(m)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function yx(r,e={}){return vi(r,"GET","/v2/passwordPolicy",ps(r,e))}/**
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
 */const vx=6;class _x{constructor(e){var t,s,o,u;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:vx,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,o,u,h,p;const m={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,m),this.validatePasswordCharacterOptions(e,m),m.isValid&&(m.isValid=(t=m.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),m.isValid&&(m.isValid=(s=m.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),m.isValid&&(m.isValid=(o=m.containsLowercaseLetter)!==null&&o!==void 0?o:!0),m.isValid&&(m.isValid=(u=m.containsUppercaseLetter)!==null&&u!==void 0?u:!0),m.isValid&&(m.isValid=(h=m.containsNumericCharacter)!==null&&h!==void 0?h:!0),m.isValid&&(m.isValid=(p=m.containsNonAlphanumericCharacter)!==null&&p!==void 0?p:!0),m}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
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
 */class Ex{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new lE(this),this.idTokenSubscription=new lE(this),this.beforeStateQueue=new gx(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=_b,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ai(t)),this._initializationPromise=this.queue(async()=>{var s,o,u;if(!this._deleted&&(this.persistenceManager=await To.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((u=this.currentUser)===null||u===void 0?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Jh(this,{idToken:e}),s=await tr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Gn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(p=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(p,p))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,p=o==null?void 0:o._redirectEventId,m=await this.tryRedirectSignIn(e);(!h||h===p)&&(m!=null&&m.user)&&(o=m.user,u=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return we(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Zh(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=JC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Gn(this.app))return Promise.reject(li(this));const t=e?xt(e):null;return t&&we(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&we(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Gn(this.app)?Promise.reject(li(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Gn(this.app)?Promise.reject(li(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ai(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await yx(this),t=new _x(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Vu("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await dx(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ai(e)||this._popupRedirectResolver;we(t,this,"argument-error"),this.redirectPersistenceManager=await To.create(this,[ai(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(we(p,this,"internal-error"),p.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const m=e.addObserver(t,s,o);return()=>{h=!0,m()}}else{const m=e.addObserver(t);return()=>{h=!0,m()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return we(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Mb(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;if(Gn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&YC(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function ma(r){return xt(r)}class lE{constructor(e){this.auth=e,this.observer=null,this.addObserver=LI(t=>this.observer=t)}get next(){return we(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let bf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Tx(r){bf=r}function Pb(r){return bf.loadJS(r)}function bx(){return bf.recaptchaEnterpriseScript}function wx(){return bf.gapiScript}function Sx(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class Ax{constructor(){this.enterprise=new Rx}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Rx{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Ix="recaptcha-enterprise",Vb="NO_RECAPTCHA";class Cx{constructor(e){this.type=Ix,this.auth=ma(e)}async verify(e="verify",t=!1){async function s(u){if(!t){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(h,p)=>{sx(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(m=>{if(m.recaptchaKey===void 0)p(new Error("recaptcha Enterprise site key undefined"));else{const g=new ix(m);return u.tenantId==null?u._agentRecaptchaConfig=g:u._tenantRecaptchaConfigs[u.tenantId]=g,h(g.siteKey)}}).catch(m=>{p(m)})})}function o(u,h,p){const m=window.grecaptcha;rE(m)?m.enterprise.ready(()=>{m.enterprise.execute(u,{action:e}).then(g=>{h(g)}).catch(()=>{h(Vb)})}):p(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Ax().execute("siteKey",{action:"verify"}):new Promise((u,h)=>{s(this.auth).then(p=>{if(!t&&rE(window.grecaptcha))o(p,u,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let m=bx();m.length!==0&&(m+=p),Pb(m).then(()=>{o(p,u,h)}).catch(g=>{h(g)})}}).catch(p=>{h(p)})})}}async function uE(r,e,t,s=!1,o=!1){const u=new Cx(r);let h;if(o)h=Vb;else try{h=await u.verify(t)}catch{h=await u.verify(t,!0)}const p=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in p){const m=p.phoneEnrollmentInfo.phoneNumber,g=p.phoneEnrollmentInfo.recaptchaToken;Object.assign(p,{phoneEnrollmentInfo:{phoneNumber:m,recaptchaToken:g,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in p){const m=p.phoneSignInInfo.recaptchaToken;Object.assign(p,{phoneSignInInfo:{recaptchaToken:m,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return p}return s?Object.assign(p,{captchaResp:h}):Object.assign(p,{captchaResponse:h}),Object.assign(p,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(p,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),p}async function Lm(r,e,t,s,o){var u;if(!((u=r._getRecaptchaConfig())===null||u===void 0)&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await uE(r,e,t,t==="getOobCode");return s(r,h)}else return s(r,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const p=await uE(r,e,t,t==="getOobCode");return s(r,p)}else return Promise.reject(h)})}/**
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
 */function xx(r,e){const t=Eg(r,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(hi(u,e??{}))return o;ir(o,"already-initialized")}return t.initialize({options:e})}function Dx(r,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(ai);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function Nx(r,e,t){const s=ma(r);we(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=Lb(e),{host:h,port:p}=Ox(e),m=p===null?"":`:${p}`,g={url:`${u}//${h}${m}/`},_=Object.freeze({host:h,port:p,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){we(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),we(hi(g,s.config.emulator)&&hi(_,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=g,s.emulatorConfig=_,s.settings.appVerificationDisabledForTesting=!0,kx()}function Lb(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function Ox(r){const e=Lb(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:cE(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:cE(h)}}}function cE(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function kx(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class Rg{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return si("not implemented")}_getIdTokenResponse(e){return si("not implemented")}_linkToIdToken(e,t){return si("not implemented")}_getReauthenticationResolver(e){return si("not implemented")}}async function Mx(r,e){return vi(r,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Px(r,e){return ju(r,"POST","/v1/accounts:signInWithPassword",ps(r,e))}/**
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
 */async function Vx(r,e){return ju(r,"POST","/v1/accounts:signInWithEmailLink",ps(r,e))}async function Lx(r,e){return ju(r,"POST","/v1/accounts:signInWithEmailLink",ps(r,e))}/**
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
 */class Iu extends Rg{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new Iu(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Iu(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Lm(e,t,"signInWithPassword",Px);case"emailLink":return Vx(e,{email:this._email,oobCode:this._password});default:ir(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Lm(e,s,"signUpPassword",Mx);case"emailLink":return Lx(e,{idToken:t,email:this._email,oobCode:this._password});default:ir(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function bo(r,e){return ju(r,"POST","/v1/accounts:signInWithIdp",ps(r,e))}/**
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
 */const Ux="http://localhost";class la extends Rg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new la(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ir("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=t,u=Tg(t,["providerId","signInMethod"]);if(!s||!o)return null;const h=new la(s,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return bo(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,bo(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,bo(e,t)}buildRequest(){const e={requestUri:Ux,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Lu(t)}return e}}/**
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
 */function jx(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function zx(r){const e=fu(du(r)).link,t=e?fu(du(e)).deep_link_id:null,s=fu(du(r)).deep_link_id;return(s?fu(du(s)).link:null)||s||t||e||r}class Ig{constructor(e){var t,s,o,u,h,p;const m=fu(du(e)),g=(t=m.apiKey)!==null&&t!==void 0?t:null,_=(s=m.oobCode)!==null&&s!==void 0?s:null,b=jx((o=m.mode)!==null&&o!==void 0?o:null);we(g&&_&&b,"argument-error"),this.apiKey=g,this.operation=b,this.code=_,this.continueUrl=(u=m.continueUrl)!==null&&u!==void 0?u:null,this.languageCode=(h=m.languageCode)!==null&&h!==void 0?h:null,this.tenantId=(p=m.tenantId)!==null&&p!==void 0?p:null}static parseLink(e){const t=zx(e);try{return new Ig(t)}catch{return null}}}/**
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
 */class Ko{constructor(){this.providerId=Ko.PROVIDER_ID}static credential(e,t){return Iu._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=Ig.parseLink(t);return we(s,"argument-error"),Iu._fromEmailAndCode(e,s.code,s.tenantId)}}Ko.PROVIDER_ID="password";Ko.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ko.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Ub{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class zu extends Ub{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Wi extends zu{constructor(){super("facebook.com")}static credential(e){return la._fromParams({providerId:Wi.PROVIDER_ID,signInMethod:Wi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wi.credentialFromTaggedObject(e)}static credentialFromError(e){return Wi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wi.credential(e.oauthAccessToken)}catch{return null}}}Wi.FACEBOOK_SIGN_IN_METHOD="facebook.com";Wi.PROVIDER_ID="facebook.com";/**
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
 */class Ji extends zu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return la._fromParams({providerId:Ji.PROVIDER_ID,signInMethod:Ji.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ji.credentialFromTaggedObject(e)}static credentialFromError(e){return Ji.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Ji.credential(t,s)}catch{return null}}}Ji.GOOGLE_SIGN_IN_METHOD="google.com";Ji.PROVIDER_ID="google.com";/**
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
 */class Zi extends zu{constructor(){super("github.com")}static credential(e){return la._fromParams({providerId:Zi.PROVIDER_ID,signInMethod:Zi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zi.credentialFromTaggedObject(e)}static credentialFromError(e){return Zi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zi.credential(e.oauthAccessToken)}catch{return null}}}Zi.GITHUB_SIGN_IN_METHOD="github.com";Zi.PROVIDER_ID="github.com";/**
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
 */class es extends zu{constructor(){super("twitter.com")}static credential(e,t){return la._fromParams({providerId:es.PROVIDER_ID,signInMethod:es.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return es.credentialFromTaggedObject(e)}static credentialFromError(e){return es.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return es.credential(t,s)}catch{return null}}}es.TWITTER_SIGN_IN_METHOD="twitter.com";es.PROVIDER_ID="twitter.com";/**
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
 */async function qx(r,e){return ju(r,"POST","/v1/accounts:signUp",ps(r,e))}/**
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
 */class ua{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const u=await tr._fromIdTokenResponse(e,s,o),h=hE(s);return new ua({user:u,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=hE(s);return new ua({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function hE(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class ef extends yi{constructor(e,t,s,o){var u;super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,ef.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new ef(e,t,s,o)}}function jb(r,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?ef._fromErrorAndOperation(r,u,e,s):u})}async function Bx(r,e,t=!1){const s=await Ro(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return ua._forOperation(r,"link",s)}/**
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
 */async function Hx(r,e,t=!1){const{auth:s}=r;if(Gn(s.app))return Promise.reject(li(s));const o="reauthenticate";try{const u=await Ro(r,jb(s,o,e,r),t);we(u.idToken,s,"internal-error");const h=Sg(u.idToken);we(h,s,"internal-error");const{sub:p}=h;return we(r.uid===p,s,"user-mismatch"),ua._forOperation(r,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&ir(s,"user-mismatch"),u}}/**
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
 */async function zb(r,e,t=!1){if(Gn(r.app))return Promise.reject(li(r));const s="signIn",o=await jb(r,s,e),u=await ua._fromIdTokenResponse(r,s,o);return t||await r._updateCurrentUser(u.user),u}async function Fx(r,e){return zb(ma(r),e)}/**
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
 */async function qb(r){const e=ma(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Gx(r,e,t){if(Gn(r.app))return Promise.reject(li(r));const s=ma(r),h=await Lm(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",qx).catch(m=>{throw m.code==="auth/password-does-not-meet-requirements"&&qb(r),m}),p=await ua._fromIdTokenResponse(s,"signIn",h);return await s._updateCurrentUser(p.user),p}function $x(r,e,t){return Gn(r.app)?Promise.reject(li(r)):Fx(xt(r),Ko.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&qb(r),s})}/**
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
 */async function Kx(r,e){return vi(r,"POST","/v1/accounts:update",e)}/**
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
 */async function Qx(r,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const s=xt(r),u={idToken:await s.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},h=await Ro(s,Kx(s.auth,u));s.displayName=h.displayName||null,s.photoURL=h.photoUrl||null;const p=s.providerData.find(({providerId:m})=>m==="password");p&&(p.displayName=s.displayName,p.photoURL=s.photoURL),await s._updateTokensIfNecessary(h)}function Yx(r,e,t,s){return xt(r).onIdTokenChanged(e,t,s)}function Xx(r,e,t){return xt(r).beforeAuthStateChanged(e,t)}function Wx(r,e,t,s){return xt(r).onAuthStateChanged(e,t,s)}function Jx(r){return xt(r).signOut()}const tf="__sak";/**
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
 */class Bb{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(tf,"1"),this.storage.removeItem(tf),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Zx=1e3,eD=10;class Hb extends Bb{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=kb(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,p,m)=>{this.notifyListeners(h,m)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);mx()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,eD):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},Zx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Hb.type="LOCAL";const tD=Hb;/**
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
 */class Fb extends Bb{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Fb.type="SESSION";const Gb=Fb;/**
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
 */function nD(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class wf{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new wf(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:u}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const p=Array.from(h).map(async g=>g(t.origin,u)),m=await nD(p);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:m})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}wf.receivers=[];/**
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
 */function Cg(r="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class rD{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((p,m)=>{const g=Cg("",20);o.port1.start();const _=setTimeout(()=>{m(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(b){const w=b;if(w.data.eventId===g)switch(w.data.status){case"ack":clearTimeout(_),u=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),p(w.data.response);break;default:clearTimeout(_),clearTimeout(u),m(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function Cr(){return window}function iD(r){Cr().location.href=r}/**
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
 */function $b(){return typeof Cr().WorkerGlobalScope<"u"&&typeof Cr().importScripts=="function"}async function sD(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function aD(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function oD(){return $b()?self:null}/**
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
 */const Kb="firebaseLocalStorageDb",lD=1,nf="firebaseLocalStorage",Qb="fbase_key";class qu{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Sf(r,e){return r.transaction([nf],e?"readwrite":"readonly").objectStore(nf)}function uD(){const r=indexedDB.deleteDatabase(Kb);return new qu(r).toPromise()}function Um(){const r=indexedDB.open(Kb,lD);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(nf,{keyPath:Qb})}catch(o){t(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(nf)?e(s):(s.close(),await uD(),e(await Um()))})})}async function fE(r,e,t){const s=Sf(r,!0).put({[Qb]:e,value:t});return new qu(s).toPromise()}async function cD(r,e){const t=Sf(r,!1).get(e),s=await new qu(t).toPromise();return s===void 0?null:s.value}function dE(r,e){const t=Sf(r,!0).delete(e);return new qu(t).toPromise()}const hD=800,fD=3;class Yb{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Um(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>fD)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return $b()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=wf._getInstance(oD()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await sD(),!this.activeServiceWorker)return;this.sender=new rD(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||aD()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Um();return await fE(e,tf,"1"),await dE(e,tf),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>fE(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>cD(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>dE(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=Sf(o,!1).getAll();return new qu(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),hD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Yb.type="LOCAL";const dD=Yb;new Uu(3e4,6e4);/**
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
 */function pD(r,e){return e?ai(e):(we(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class xg extends Rg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return bo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return bo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return bo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function mD(r){return zb(r.auth,new xg(r),r.bypassAuthState)}function gD(r){const{auth:e,user:t}=r;return we(t,e,"internal-error"),Hx(t,new xg(r),r.bypassAuthState)}async function yD(r){const{auth:e,user:t}=r;return we(t,e,"internal-error"),Bx(t,new xg(r),r.bypassAuthState)}/**
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
 */class Xb{constructor(e,t,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:u,error:h,type:p}=e;if(h){this.reject(h);return}const m={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(m))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return mD;case"linkViaPopup":case"linkViaRedirect":return yD;case"reauthViaPopup":case"reauthViaRedirect":return gD;default:ir(this.auth,"internal-error")}}resolve(e){di(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){di(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const vD=new Uu(2e3,1e4);class vo extends Xb{constructor(e,t,s,o,u){super(e,t,o,u),this.provider=s,this.authWindow=null,this.pollId=null,vo.currentPopupAction&&vo.currentPopupAction.cancel(),vo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return we(e,this.auth,"internal-error"),e}async onExecution(){di(this.filter.length===1,"Popup operations only handle one event");const e=Cg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ir(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ir(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,vo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ir(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,vD.get())};e()}}vo.currentPopupAction=null;/**
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
 */const _D="pendingRedirect",kh=new Map;class ED extends Xb{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=kh.get(this.auth._key());if(!e){try{const s=await TD(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}kh.set(this.auth._key(),e)}return this.bypassAuthState||kh.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function TD(r,e){const t=SD(e),s=wD(r);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function bD(r,e){kh.set(r._key(),e)}function wD(r){return ai(r._redirectPersistence)}function SD(r){return Oh(_D,r.config.apiKey,r.name)}async function AD(r,e,t=!1){if(Gn(r.app))return Promise.reject(li(r));const s=ma(r),o=pD(s,e),h=await new ED(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
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
 */const RD=10*60*1e3;class ID{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!CD(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!Wb(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(Ir(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=RD&&this.cachedEventUids.clear(),this.cachedEventUids.has(pE(e))}saveEventToCache(e){this.cachedEventUids.add(pE(e)),this.lastProcessedEventTime=Date.now()}}function pE(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function Wb({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function CD(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Wb(r);default:return!1}}/**
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
 */async function xD(r,e={}){return vi(r,"GET","/v1/projects",e)}/**
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
 */const DD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ND=/^https?/;async function OD(r){if(r.config.emulator)return;const{authorizedDomains:e}=await xD(r);for(const t of e)try{if(kD(t))return}catch{}ir(r,"unauthorized-domain")}function kD(r){const e=Pm(),{protocol:t,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const h=new URL(r);return h.hostname===""&&s===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!ND.test(t))return!1;if(DD.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const MD=new Uu(3e4,6e4);function mE(){const r=Cr().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function PD(r){return new Promise((e,t)=>{var s,o,u;function h(){mE(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{mE(),t(Ir(r,"network-request-failed"))},timeout:MD.get()})}if(!((o=(s=Cr().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((u=Cr().gapi)===null||u===void 0)&&u.load)h();else{const p=Sx("iframefcb");return Cr()[p]=()=>{gapi.load?h():t(Ir(r,"network-request-failed"))},Pb(`${wx()}?onload=${p}`).catch(m=>t(m))}}).catch(e=>{throw Mh=null,e})}let Mh=null;function VD(r){return Mh=Mh||PD(r),Mh}/**
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
 */const LD=new Uu(5e3,15e3),UD="__/auth/iframe",jD="emulator/auth/iframe",zD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},qD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function BD(r){const e=r.config;we(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?wg(e,jD):`https://${r.config.authDomain}/${UD}`,s={apiKey:e.apiKey,appName:r.name,v:$o},o=qD.get(r.config.apiHost);o&&(s.eid=o);const u=r._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${Lu(s).slice(1)}`}async function HD(r){const e=await VD(r),t=Cr().gapi;return we(t,r,"internal-error"),e.open({where:document.body,url:BD(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:zD,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const h=Ir(r,"network-request-failed"),p=Cr().setTimeout(()=>{u(h)},LD.get());function m(){Cr().clearTimeout(p),o(s)}s.ping(m).then(m,()=>{u(h)})}))}/**
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
 */const FD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},GD=500,$D=600,KD="_blank",QD="http://localhost";class gE{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function YD(r,e,t,s=GD,o=$D){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let p="";const m=Object.assign(Object.assign({},FD),{width:s.toString(),height:o.toString(),top:u,left:h}),g=on().toLowerCase();t&&(p=Cb(g)?KD:t),Rb(g)&&(e=e||QD,m.scrollbars="yes");const _=Object.entries(m).reduce((w,[C,N])=>`${w}${C}=${N},`,"");if(px(g)&&p!=="_self")return XD(e||"",p),new gE(null);const b=window.open(e||"",p,_);we(b,r,"popup-blocked");try{b.focus()}catch{}return new gE(b)}function XD(r,e){const t=document.createElement("a");t.href=r,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const WD="__/auth/handler",JD="emulator/auth/handler",ZD=encodeURIComponent("fac");async function yE(r,e,t,s,o,u){we(r.config.authDomain,r,"auth-domain-config-required"),we(r.config.apiKey,r,"invalid-api-key");const h={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:s,v:$o,eventId:o};if(e instanceof Ub){e.setDefaultLanguage(r.languageCode),h.providerId=e.providerId||"",VI(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[_,b]of Object.entries({}))h[_]=b}if(e instanceof zu){const _=e.getScopes().filter(b=>b!=="");_.length>0&&(h.scopes=_.join(","))}r.tenantId&&(h.tid=r.tenantId);const p=h;for(const _ of Object.keys(p))p[_]===void 0&&delete p[_];const m=await r._getAppCheckToken(),g=m?`#${ZD}=${encodeURIComponent(m)}`:"";return`${eN(r)}?${Lu(p).slice(1)}${g}`}function eN({config:r}){return r.emulator?wg(r,JD):`https://${r.authDomain}/${WD}`}/**
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
 */const pm="webStorageSupport";class tN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Gb,this._completeRedirectFn=AD,this._overrideRedirectResult=bD}async _openPopup(e,t,s,o){var u;di((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const h=await yE(e,t,s,Pm(),o);return YD(e,h,Cg())}async _openRedirect(e,t,s,o){await this._originValidation(e);const u=await yE(e,t,s,Pm(),o);return iD(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(di(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await HD(e),s=new ID(e);return t.register("authEvent",o=>(we(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(pm,{type:pm},o=>{var u;const h=(u=o==null?void 0:o[0])===null||u===void 0?void 0:u[pm];h!==void 0&&t(!!h),ir(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=OD(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return kb()||Ib()||Ag()}}const nN=tN;var vE="@firebase/auth",_E="1.10.0";/**
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
 */class rN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){we(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function iN(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function sN(r){Ao(new oa("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:p}=s.options;we(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const m={apiKey:h,authDomain:p,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Mb(r)},g=new Ex(s,o,u,m);return Dx(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Ao(new oa("auth-internal",e=>{const t=ma(e.getProvider("auth").getImmediate());return(s=>new rN(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),is(vE,_E,iN(r)),is(vE,_E,"esm2017")}/**
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
 */const aN=5*60,oN=hb("authIdTokenMaxAge")||aN;let EE=null;const lN=r=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>oN)return;const o=t==null?void 0:t.token;EE!==o&&(EE=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function uN(r=mb()){const e=Eg(r,"auth");if(e.isInitialized())return e.getImmediate();const t=xx(r,{popupRedirectResolver:nN,persistence:[dD,tD,Gb]}),s=hb("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=lN(u.toString());Xx(t,h,()=>h(t.currentUser)),Yx(t,p=>h(p))}}const o=ub("auth");return o&&Nx(t,`http://${o}`),t}function cN(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}Tx({loadJS(r){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=o=>{const u=Ir("internal-error");u.customData=o,t(u)},s.type="text/javascript",s.charset="UTF-8",cN().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});sN("Browser");var TE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ss,Jb;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(D,R){function x(){}x.prototype=R.prototype,D.D=R.prototype,D.prototype=new x,D.prototype.constructor=D,D.C=function(O,P,L){for(var I=Array(arguments.length-2),Ge=2;Ge<arguments.length;Ge++)I[Ge-2]=arguments[Ge];return R.prototype[P].apply(O,I)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(D,R,x){x||(x=0);var O=Array(16);if(typeof R=="string")for(var P=0;16>P;++P)O[P]=R.charCodeAt(x++)|R.charCodeAt(x++)<<8|R.charCodeAt(x++)<<16|R.charCodeAt(x++)<<24;else for(P=0;16>P;++P)O[P]=R[x++]|R[x++]<<8|R[x++]<<16|R[x++]<<24;R=D.g[0],x=D.g[1],P=D.g[2];var L=D.g[3],I=R+(L^x&(P^L))+O[0]+3614090360&4294967295;R=x+(I<<7&4294967295|I>>>25),I=L+(P^R&(x^P))+O[1]+3905402710&4294967295,L=R+(I<<12&4294967295|I>>>20),I=P+(x^L&(R^x))+O[2]+606105819&4294967295,P=L+(I<<17&4294967295|I>>>15),I=x+(R^P&(L^R))+O[3]+3250441966&4294967295,x=P+(I<<22&4294967295|I>>>10),I=R+(L^x&(P^L))+O[4]+4118548399&4294967295,R=x+(I<<7&4294967295|I>>>25),I=L+(P^R&(x^P))+O[5]+1200080426&4294967295,L=R+(I<<12&4294967295|I>>>20),I=P+(x^L&(R^x))+O[6]+2821735955&4294967295,P=L+(I<<17&4294967295|I>>>15),I=x+(R^P&(L^R))+O[7]+4249261313&4294967295,x=P+(I<<22&4294967295|I>>>10),I=R+(L^x&(P^L))+O[8]+1770035416&4294967295,R=x+(I<<7&4294967295|I>>>25),I=L+(P^R&(x^P))+O[9]+2336552879&4294967295,L=R+(I<<12&4294967295|I>>>20),I=P+(x^L&(R^x))+O[10]+4294925233&4294967295,P=L+(I<<17&4294967295|I>>>15),I=x+(R^P&(L^R))+O[11]+2304563134&4294967295,x=P+(I<<22&4294967295|I>>>10),I=R+(L^x&(P^L))+O[12]+1804603682&4294967295,R=x+(I<<7&4294967295|I>>>25),I=L+(P^R&(x^P))+O[13]+4254626195&4294967295,L=R+(I<<12&4294967295|I>>>20),I=P+(x^L&(R^x))+O[14]+2792965006&4294967295,P=L+(I<<17&4294967295|I>>>15),I=x+(R^P&(L^R))+O[15]+1236535329&4294967295,x=P+(I<<22&4294967295|I>>>10),I=R+(P^L&(x^P))+O[1]+4129170786&4294967295,R=x+(I<<5&4294967295|I>>>27),I=L+(x^P&(R^x))+O[6]+3225465664&4294967295,L=R+(I<<9&4294967295|I>>>23),I=P+(R^x&(L^R))+O[11]+643717713&4294967295,P=L+(I<<14&4294967295|I>>>18),I=x+(L^R&(P^L))+O[0]+3921069994&4294967295,x=P+(I<<20&4294967295|I>>>12),I=R+(P^L&(x^P))+O[5]+3593408605&4294967295,R=x+(I<<5&4294967295|I>>>27),I=L+(x^P&(R^x))+O[10]+38016083&4294967295,L=R+(I<<9&4294967295|I>>>23),I=P+(R^x&(L^R))+O[15]+3634488961&4294967295,P=L+(I<<14&4294967295|I>>>18),I=x+(L^R&(P^L))+O[4]+3889429448&4294967295,x=P+(I<<20&4294967295|I>>>12),I=R+(P^L&(x^P))+O[9]+568446438&4294967295,R=x+(I<<5&4294967295|I>>>27),I=L+(x^P&(R^x))+O[14]+3275163606&4294967295,L=R+(I<<9&4294967295|I>>>23),I=P+(R^x&(L^R))+O[3]+4107603335&4294967295,P=L+(I<<14&4294967295|I>>>18),I=x+(L^R&(P^L))+O[8]+1163531501&4294967295,x=P+(I<<20&4294967295|I>>>12),I=R+(P^L&(x^P))+O[13]+2850285829&4294967295,R=x+(I<<5&4294967295|I>>>27),I=L+(x^P&(R^x))+O[2]+4243563512&4294967295,L=R+(I<<9&4294967295|I>>>23),I=P+(R^x&(L^R))+O[7]+1735328473&4294967295,P=L+(I<<14&4294967295|I>>>18),I=x+(L^R&(P^L))+O[12]+2368359562&4294967295,x=P+(I<<20&4294967295|I>>>12),I=R+(x^P^L)+O[5]+4294588738&4294967295,R=x+(I<<4&4294967295|I>>>28),I=L+(R^x^P)+O[8]+2272392833&4294967295,L=R+(I<<11&4294967295|I>>>21),I=P+(L^R^x)+O[11]+1839030562&4294967295,P=L+(I<<16&4294967295|I>>>16),I=x+(P^L^R)+O[14]+4259657740&4294967295,x=P+(I<<23&4294967295|I>>>9),I=R+(x^P^L)+O[1]+2763975236&4294967295,R=x+(I<<4&4294967295|I>>>28),I=L+(R^x^P)+O[4]+1272893353&4294967295,L=R+(I<<11&4294967295|I>>>21),I=P+(L^R^x)+O[7]+4139469664&4294967295,P=L+(I<<16&4294967295|I>>>16),I=x+(P^L^R)+O[10]+3200236656&4294967295,x=P+(I<<23&4294967295|I>>>9),I=R+(x^P^L)+O[13]+681279174&4294967295,R=x+(I<<4&4294967295|I>>>28),I=L+(R^x^P)+O[0]+3936430074&4294967295,L=R+(I<<11&4294967295|I>>>21),I=P+(L^R^x)+O[3]+3572445317&4294967295,P=L+(I<<16&4294967295|I>>>16),I=x+(P^L^R)+O[6]+76029189&4294967295,x=P+(I<<23&4294967295|I>>>9),I=R+(x^P^L)+O[9]+3654602809&4294967295,R=x+(I<<4&4294967295|I>>>28),I=L+(R^x^P)+O[12]+3873151461&4294967295,L=R+(I<<11&4294967295|I>>>21),I=P+(L^R^x)+O[15]+530742520&4294967295,P=L+(I<<16&4294967295|I>>>16),I=x+(P^L^R)+O[2]+3299628645&4294967295,x=P+(I<<23&4294967295|I>>>9),I=R+(P^(x|~L))+O[0]+4096336452&4294967295,R=x+(I<<6&4294967295|I>>>26),I=L+(x^(R|~P))+O[7]+1126891415&4294967295,L=R+(I<<10&4294967295|I>>>22),I=P+(R^(L|~x))+O[14]+2878612391&4294967295,P=L+(I<<15&4294967295|I>>>17),I=x+(L^(P|~R))+O[5]+4237533241&4294967295,x=P+(I<<21&4294967295|I>>>11),I=R+(P^(x|~L))+O[12]+1700485571&4294967295,R=x+(I<<6&4294967295|I>>>26),I=L+(x^(R|~P))+O[3]+2399980690&4294967295,L=R+(I<<10&4294967295|I>>>22),I=P+(R^(L|~x))+O[10]+4293915773&4294967295,P=L+(I<<15&4294967295|I>>>17),I=x+(L^(P|~R))+O[1]+2240044497&4294967295,x=P+(I<<21&4294967295|I>>>11),I=R+(P^(x|~L))+O[8]+1873313359&4294967295,R=x+(I<<6&4294967295|I>>>26),I=L+(x^(R|~P))+O[15]+4264355552&4294967295,L=R+(I<<10&4294967295|I>>>22),I=P+(R^(L|~x))+O[6]+2734768916&4294967295,P=L+(I<<15&4294967295|I>>>17),I=x+(L^(P|~R))+O[13]+1309151649&4294967295,x=P+(I<<21&4294967295|I>>>11),I=R+(P^(x|~L))+O[4]+4149444226&4294967295,R=x+(I<<6&4294967295|I>>>26),I=L+(x^(R|~P))+O[11]+3174756917&4294967295,L=R+(I<<10&4294967295|I>>>22),I=P+(R^(L|~x))+O[2]+718787259&4294967295,P=L+(I<<15&4294967295|I>>>17),I=x+(L^(P|~R))+O[9]+3951481745&4294967295,D.g[0]=D.g[0]+R&4294967295,D.g[1]=D.g[1]+(P+(I<<21&4294967295|I>>>11))&4294967295,D.g[2]=D.g[2]+P&4294967295,D.g[3]=D.g[3]+L&4294967295}s.prototype.u=function(D,R){R===void 0&&(R=D.length);for(var x=R-this.blockSize,O=this.B,P=this.h,L=0;L<R;){if(P==0)for(;L<=x;)o(this,D,L),L+=this.blockSize;if(typeof D=="string"){for(;L<R;)if(O[P++]=D.charCodeAt(L++),P==this.blockSize){o(this,O),P=0;break}}else for(;L<R;)if(O[P++]=D[L++],P==this.blockSize){o(this,O),P=0;break}}this.h=P,this.o+=R},s.prototype.v=function(){var D=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);D[0]=128;for(var R=1;R<D.length-8;++R)D[R]=0;var x=8*this.o;for(R=D.length-8;R<D.length;++R)D[R]=x&255,x/=256;for(this.u(D),D=Array(16),R=x=0;4>R;++R)for(var O=0;32>O;O+=8)D[x++]=this.g[R]>>>O&255;return D};function u(D,R){var x=p;return Object.prototype.hasOwnProperty.call(x,D)?x[D]:x[D]=R(D)}function h(D,R){this.h=R;for(var x=[],O=!0,P=D.length-1;0<=P;P--){var L=D[P]|0;O&&L==R||(x[P]=L,O=!1)}this.g=x}var p={};function m(D){return-128<=D&&128>D?u(D,function(R){return new h([R|0],0>R?-1:0)}):new h([D|0],0>D?-1:0)}function g(D){if(isNaN(D)||!isFinite(D))return b;if(0>D)return U(g(-D));for(var R=[],x=1,O=0;D>=x;O++)R[O]=D/x|0,x*=4294967296;return new h(R,0)}function _(D,R){if(D.length==0)throw Error("number format error: empty string");if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(D.charAt(0)=="-")return U(_(D.substring(1),R));if(0<=D.indexOf("-"))throw Error('number format error: interior "-" character');for(var x=g(Math.pow(R,8)),O=b,P=0;P<D.length;P+=8){var L=Math.min(8,D.length-P),I=parseInt(D.substring(P,P+L),R);8>L?(L=g(Math.pow(R,L)),O=O.j(L).add(g(I))):(O=O.j(x),O=O.add(g(I)))}return O}var b=m(0),w=m(1),C=m(16777216);r=h.prototype,r.m=function(){if(G(this))return-U(this).m();for(var D=0,R=1,x=0;x<this.g.length;x++){var O=this.i(x);D+=(0<=O?O:4294967296+O)*R,R*=4294967296}return D},r.toString=function(D){if(D=D||10,2>D||36<D)throw Error("radix out of range: "+D);if(N(this))return"0";if(G(this))return"-"+U(this).toString(D);for(var R=g(Math.pow(D,6)),x=this,O="";;){var P=le(x,R).g;x=H(x,P.j(R));var L=((0<x.g.length?x.g[0]:x.h)>>>0).toString(D);if(x=P,N(x))return L+O;for(;6>L.length;)L="0"+L;O=L+O}},r.i=function(D){return 0>D?0:D<this.g.length?this.g[D]:this.h};function N(D){if(D.h!=0)return!1;for(var R=0;R<D.g.length;R++)if(D.g[R]!=0)return!1;return!0}function G(D){return D.h==-1}r.l=function(D){return D=H(this,D),G(D)?-1:N(D)?0:1};function U(D){for(var R=D.g.length,x=[],O=0;O<R;O++)x[O]=~D.g[O];return new h(x,~D.h).add(w)}r.abs=function(){return G(this)?U(this):this},r.add=function(D){for(var R=Math.max(this.g.length,D.g.length),x=[],O=0,P=0;P<=R;P++){var L=O+(this.i(P)&65535)+(D.i(P)&65535),I=(L>>>16)+(this.i(P)>>>16)+(D.i(P)>>>16);O=I>>>16,L&=65535,I&=65535,x[P]=I<<16|L}return new h(x,x[x.length-1]&-2147483648?-1:0)};function H(D,R){return D.add(U(R))}r.j=function(D){if(N(this)||N(D))return b;if(G(this))return G(D)?U(this).j(U(D)):U(U(this).j(D));if(G(D))return U(this.j(U(D)));if(0>this.l(C)&&0>D.l(C))return g(this.m()*D.m());for(var R=this.g.length+D.g.length,x=[],O=0;O<2*R;O++)x[O]=0;for(O=0;O<this.g.length;O++)for(var P=0;P<D.g.length;P++){var L=this.i(O)>>>16,I=this.i(O)&65535,Ge=D.i(P)>>>16,Ue=D.i(P)&65535;x[2*O+2*P]+=I*Ue,J(x,2*O+2*P),x[2*O+2*P+1]+=L*Ue,J(x,2*O+2*P+1),x[2*O+2*P+1]+=I*Ge,J(x,2*O+2*P+1),x[2*O+2*P+2]+=L*Ge,J(x,2*O+2*P+2)}for(O=0;O<R;O++)x[O]=x[2*O+1]<<16|x[2*O];for(O=R;O<2*R;O++)x[O]=0;return new h(x,0)};function J(D,R){for(;(D[R]&65535)!=D[R];)D[R+1]+=D[R]>>>16,D[R]&=65535,R++}function Q(D,R){this.g=D,this.h=R}function le(D,R){if(N(R))throw Error("division by zero");if(N(D))return new Q(b,b);if(G(D))return R=le(U(D),R),new Q(U(R.g),U(R.h));if(G(R))return R=le(D,U(R)),new Q(U(R.g),R.h);if(30<D.g.length){if(G(D)||G(R))throw Error("slowDivide_ only works with positive integers.");for(var x=w,O=R;0>=O.l(D);)x=oe(x),O=oe(O);var P=ue(x,1),L=ue(O,1);for(O=ue(O,2),x=ue(x,2);!N(O);){var I=L.add(O);0>=I.l(D)&&(P=P.add(x),L=I),O=ue(O,1),x=ue(x,1)}return R=H(D,P.j(R)),new Q(P,R)}for(P=b;0<=D.l(R);){for(x=Math.max(1,Math.floor(D.m()/R.m())),O=Math.ceil(Math.log(x)/Math.LN2),O=48>=O?1:Math.pow(2,O-48),L=g(x),I=L.j(R);G(I)||0<I.l(D);)x-=O,L=g(x),I=L.j(R);N(L)&&(L=w),P=P.add(L),D=H(D,I)}return new Q(P,D)}r.A=function(D){return le(this,D).h},r.and=function(D){for(var R=Math.max(this.g.length,D.g.length),x=[],O=0;O<R;O++)x[O]=this.i(O)&D.i(O);return new h(x,this.h&D.h)},r.or=function(D){for(var R=Math.max(this.g.length,D.g.length),x=[],O=0;O<R;O++)x[O]=this.i(O)|D.i(O);return new h(x,this.h|D.h)},r.xor=function(D){for(var R=Math.max(this.g.length,D.g.length),x=[],O=0;O<R;O++)x[O]=this.i(O)^D.i(O);return new h(x,this.h^D.h)};function oe(D){for(var R=D.g.length+1,x=[],O=0;O<R;O++)x[O]=D.i(O)<<1|D.i(O-1)>>>31;return new h(x,D.h)}function ue(D,R){var x=R>>5;R%=32;for(var O=D.g.length-x,P=[],L=0;L<O;L++)P[L]=0<R?D.i(L+x)>>>R|D.i(L+x+1)<<32-R:D.i(L+x);return new h(P,D.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,Jb=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=g,h.fromString=_,ss=h}).apply(typeof TE<"u"?TE:typeof self<"u"?self:typeof window<"u"?window:{});var Eh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Zb,pu,ew,Ph,jm,tw,nw,rw;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,y,v){return c==Array.prototype||c==Object.prototype||(c[y]=v.value),c};function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Eh=="object"&&Eh];for(var y=0;y<c.length;++y){var v=c[y];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var s=t(this);function o(c,y){if(y)e:{var v=s;c=c.split(".");for(var S=0;S<c.length-1;S++){var q=c[S];if(!(q in v))break e;v=v[q]}c=c[c.length-1],S=v[c],y=y(S),y!=S&&y!=null&&e(v,c,{configurable:!0,writable:!0,value:y})}}function u(c,y){c instanceof String&&(c+="");var v=0,S=!1,q={next:function(){if(!S&&v<c.length){var Y=v++;return{value:y(Y,c[Y]),done:!1}}return S=!0,{done:!0,value:void 0}}};return q[Symbol.iterator]=function(){return q},q}o("Array.prototype.values",function(c){return c||function(){return u(this,function(y,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},p=this||self;function m(c){var y=typeof c;return y=y!="object"?y:c?Array.isArray(c)?"array":y:"null",y=="array"||y=="object"&&typeof c.length=="number"}function g(c){var y=typeof c;return y=="object"&&c!=null||y=="function"}function _(c,y,v){return c.call.apply(c.bind,arguments)}function b(c,y,v){if(!c)throw Error();if(2<arguments.length){var S=Array.prototype.slice.call(arguments,2);return function(){var q=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(q,S),c.apply(y,q)}}return function(){return c.apply(y,arguments)}}function w(c,y,v){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_:b,w.apply(null,arguments)}function C(c,y){var v=Array.prototype.slice.call(arguments,1);return function(){var S=v.slice();return S.push.apply(S,arguments),c.apply(this,S)}}function N(c,y){function v(){}v.prototype=y.prototype,c.aa=y.prototype,c.prototype=new v,c.prototype.constructor=c,c.Qb=function(S,q,Y){for(var he=Array(arguments.length-2),je=2;je<arguments.length;je++)he[je-2]=arguments[je];return y.prototype[q].apply(S,he)}}function G(c){const y=c.length;if(0<y){const v=Array(y);for(let S=0;S<y;S++)v[S]=c[S];return v}return[]}function U(c,y){for(let v=1;v<arguments.length;v++){const S=arguments[v];if(m(S)){const q=c.length||0,Y=S.length||0;c.length=q+Y;for(let he=0;he<Y;he++)c[q+he]=S[he]}else c.push(S)}}class H{constructor(y,v){this.i=y,this.j=v,this.h=0,this.g=null}get(){let y;return 0<this.h?(this.h--,y=this.g,this.g=y.next,y.next=null):y=this.i(),y}}function J(c){return/^[\s\xa0]*$/.test(c)}function Q(){var c=p.navigator;return c&&(c=c.userAgent)?c:""}function le(c){return le[" "](c),c}le[" "]=function(){};var oe=Q().indexOf("Gecko")!=-1&&!(Q().toLowerCase().indexOf("webkit")!=-1&&Q().indexOf("Edge")==-1)&&!(Q().indexOf("Trident")!=-1||Q().indexOf("MSIE")!=-1)&&Q().indexOf("Edge")==-1;function ue(c,y,v){for(const S in c)y.call(v,c[S],S,c)}function D(c,y){for(const v in c)y.call(void 0,c[v],v,c)}function R(c){const y={};for(const v in c)y[v]=c[v];return y}const x="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function O(c,y){let v,S;for(let q=1;q<arguments.length;q++){S=arguments[q];for(v in S)c[v]=S[v];for(let Y=0;Y<x.length;Y++)v=x[Y],Object.prototype.hasOwnProperty.call(S,v)&&(c[v]=S[v])}}function P(c){var y=1;c=c.split(":");const v=[];for(;0<y&&c.length;)v.push(c.shift()),y--;return c.length&&v.push(c.join(":")),v}function L(c){p.setTimeout(()=>{throw c},0)}function I(){var c=be;let y=null;return c.g&&(y=c.g,c.g=c.g.next,c.g||(c.h=null),y.next=null),y}class Ge{constructor(){this.h=this.g=null}add(y,v){const S=Ue.get();S.set(y,v),this.h?this.h.next=S:this.g=S,this.h=S}}var Ue=new H(()=>new X,c=>c.reset());class X{constructor(){this.next=this.g=this.h=null}set(y,v){this.h=y,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let ce,me=!1,be=new Ge,M=()=>{const c=p.Promise.resolve(void 0);ce=()=>{c.then(ee)}};var ee=()=>{for(var c;c=I();){try{c.h.call(c.g)}catch(v){L(v)}var y=Ue;y.j(c),100>y.h&&(y.h++,c.next=y.g,y.g=c)}me=!1};function ae(){this.s=this.s,this.C=this.C}ae.prototype.s=!1,ae.prototype.ma=function(){this.s||(this.s=!0,this.N())},ae.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function se(c,y){this.type=c,this.g=this.target=y,this.defaultPrevented=!1}se.prototype.h=function(){this.defaultPrevented=!0};var ge=function(){if(!p.addEventListener||!Object.defineProperty)return!1;var c=!1,y=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const v=()=>{};p.addEventListener("test",v,y),p.removeEventListener("test",v,y)}catch{}return c}();function Re(c,y){if(se.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var v=this.type=c.type,S=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=y,y=c.relatedTarget){if(oe){e:{try{le(y.nodeName);var q=!0;break e}catch{}q=!1}q||(y=null)}}else v=="mouseover"?y=c.fromElement:v=="mouseout"&&(y=c.toElement);this.relatedTarget=y,S?(this.clientX=S.clientX!==void 0?S.clientX:S.pageX,this.clientY=S.clientY!==void 0?S.clientY:S.pageY,this.screenX=S.screenX||0,this.screenY=S.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:ye[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&Re.aa.h.call(this)}}N(Re,se);var ye={2:"touch",3:"pen",4:"mouse"};Re.prototype.h=function(){Re.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var Ze="closure_listenable_"+(1e6*Math.random()|0),He=0;function Vt(c,y,v,S,q){this.listener=c,this.proxy=null,this.src=y,this.type=v,this.capture=!!S,this.ha=q,this.key=++He,this.da=this.fa=!1}function Nn(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function fn(c){this.src=c,this.g={},this.h=0}fn.prototype.add=function(c,y,v,S,q){var Y=c.toString();c=this.g[Y],c||(c=this.g[Y]=[],this.h++);var he=_s(c,y,S,q);return-1<he?(y=c[he],v||(y.fa=!1)):(y=new Vt(y,this.src,Y,!!S,q),y.fa=v,c.push(y)),y};function Jt(c,y){var v=y.type;if(v in c.g){var S=c.g[v],q=Array.prototype.indexOf.call(S,y,void 0),Y;(Y=0<=q)&&Array.prototype.splice.call(S,q,1),Y&&(Nn(y),c.g[v].length==0&&(delete c.g[v],c.h--))}}function _s(c,y,v,S){for(var q=0;q<c.length;++q){var Y=c[q];if(!Y.da&&Y.listener==y&&Y.capture==!!v&&Y.ha==S)return q}return-1}var Es="closure_lm_"+(1e6*Math.random()|0),el={};function Qu(c,y,v,S,q){if(Array.isArray(y)){for(var Y=0;Y<y.length;Y++)Qu(c,y[Y],v,S,q);return null}return v=Yu(v),c&&c[Ze]?c.K(y,v,g(S)?!!S.capture:!1,q):On(c,y,v,!1,S,q)}function On(c,y,v,S,q,Y){if(!y)throw Error("Invalid event type");var he=g(q)?!!q.capture:!!q,je=Ta(c);if(je||(c[Es]=je=new fn(c)),v=je.add(y,v,S,he,Y),v.proxy)return v;if(S=ed(),v.proxy=S,S.src=c,S.listener=v,c.addEventListener)ge||(q=he),q===void 0&&(q=!1),c.addEventListener(y.toString(),S,q);else if(c.attachEvent)c.attachEvent(Ts(y.toString()),S);else if(c.addListener&&c.removeListener)c.addListener(S);else throw Error("addEventListener and attachEvent are unavailable.");return v}function ed(){function c(v){return y.call(c.src,c.listener,v)}const y=td;return c}function tl(c,y,v,S,q){if(Array.isArray(y))for(var Y=0;Y<y.length;Y++)tl(c,y[Y],v,S,q);else S=g(S)?!!S.capture:!!S,v=Yu(v),c&&c[Ze]?(c=c.i,y=String(y).toString(),y in c.g&&(Y=c.g[y],v=_s(Y,v,S,q),-1<v&&(Nn(Y[v]),Array.prototype.splice.call(Y,v,1),Y.length==0&&(delete c.g[y],c.h--)))):c&&(c=Ta(c))&&(y=c.g[y.toString()],c=-1,y&&(c=_s(y,v,S,q)),(v=-1<c?y[c]:null)&&Ea(v))}function Ea(c){if(typeof c!="number"&&c&&!c.da){var y=c.src;if(y&&y[Ze])Jt(y.i,c);else{var v=c.type,S=c.proxy;y.removeEventListener?y.removeEventListener(v,S,c.capture):y.detachEvent?y.detachEvent(Ts(v),S):y.addListener&&y.removeListener&&y.removeListener(S),(v=Ta(y))?(Jt(v,c),v.h==0&&(v.src=null,y[Es]=null)):Nn(c)}}}function Ts(c){return c in el?el[c]:el[c]="on"+c}function td(c,y){if(c.da)c=!0;else{y=new Re(y,this);var v=c.listener,S=c.ha||c.src;c.fa&&Ea(c),c=v.call(S,y)}return c}function Ta(c){return c=c[Es],c instanceof fn?c:null}var nl="__closure_events_fn_"+(1e9*Math.random()>>>0);function Yu(c){return typeof c=="function"?c:(c[nl]||(c[nl]=function(y){return c.handleEvent(y)}),c[nl])}function dt(){ae.call(this),this.i=new fn(this),this.M=this,this.F=null}N(dt,ae),dt.prototype[Ze]=!0,dt.prototype.removeEventListener=function(c,y,v,S){tl(this,c,y,v,S)};function Xe(c,y){var v,S=c.F;if(S)for(v=[];S;S=S.F)v.push(S);if(c=c.M,S=y.type||y,typeof y=="string")y=new se(y,c);else if(y instanceof se)y.target=y.target||c;else{var q=y;y=new se(S,c),O(y,q)}if(q=!0,v)for(var Y=v.length-1;0<=Y;Y--){var he=y.g=v[Y];q=En(he,S,!0,y)&&q}if(he=y.g=c,q=En(he,S,!0,y)&&q,q=En(he,S,!1,y)&&q,v)for(Y=0;Y<v.length;Y++)he=y.g=v[Y],q=En(he,S,!1,y)&&q}dt.prototype.N=function(){if(dt.aa.N.call(this),this.i){var c=this.i,y;for(y in c.g){for(var v=c.g[y],S=0;S<v.length;S++)Nn(v[S]);delete c.g[y],c.h--}}this.F=null},dt.prototype.K=function(c,y,v,S){return this.i.add(String(c),y,!1,v,S)},dt.prototype.L=function(c,y,v,S){return this.i.add(String(c),y,!0,v,S)};function En(c,y,v,S){if(y=c.i.g[String(y)],!y)return!0;y=y.concat();for(var q=!0,Y=0;Y<y.length;++Y){var he=y[Y];if(he&&!he.da&&he.capture==v){var je=he.listener,Nt=he.ha||he.src;he.fa&&Jt(c.i,he),q=je.call(Nt,S)!==!1&&q}}return q&&!S.defaultPrevented}function Zt(c,y,v){if(typeof c=="function")v&&(c=w(c,v));else if(c&&typeof c.handleEvent=="function")c=w(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(y)?-1:p.setTimeout(c,y||0)}function Xu(c){c.g=Zt(()=>{c.g=null,c.i&&(c.i=!1,Xu(c))},c.l);const y=c.h;c.h=null,c.m.apply(null,y)}class nd extends ae{constructor(y,v){super(),this.m=y,this.l=v,this.h=null,this.i=!1,this.g=null}j(y){this.h=arguments,this.g?this.i=!0:Xu(this)}N(){super.N(),this.g&&(p.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function bs(c){ae.call(this),this.h=c,this.g={}}N(bs,ae);var ws=[];function Ss(c){ue(c.g,function(y,v){this.g.hasOwnProperty(v)&&Ea(y)},c),c.g={}}bs.prototype.N=function(){bs.aa.N.call(this),Ss(this)},bs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Yn=p.JSON.stringify,ba=p.JSON.parse,As=class{stringify(c){return p.JSON.stringify(c,void 0)}parse(c){return p.JSON.parse(c,void 0)}};function rl(){}rl.prototype.h=null;function il(c){return c.h||(c.h=c.i())}function sl(){}var Or={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function kr(){se.call(this,"d")}N(kr,se);function al(){se.call(this,"c")}N(al,se);var ur={},ol=null;function _i(){return ol=ol||new dt}ur.La="serverreachability";function wa(c){se.call(this,ur.La,c)}N(wa,se);function Ei(c){const y=_i();Xe(y,new wa(y))}ur.STAT_EVENT="statevent";function Wu(c,y){se.call(this,ur.STAT_EVENT,c),this.stat=y}N(Wu,se);function lt(c){const y=_i();Xe(y,new Wu(y,c))}ur.Ma="timingevent";function Dt(c,y){se.call(this,ur.Ma,c),this.size=y}N(Dt,se);function bt(c,y){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return p.setTimeout(function(){c()},y)}function kn(){this.g=!0}kn.prototype.xa=function(){this.g=!1};function ll(c,y,v,S,q,Y){c.info(function(){if(c.g)if(Y)for(var he="",je=Y.split("&"),Nt=0;Nt<je.length;Nt++){var ze=je[Nt].split("=");if(1<ze.length){var Ut=ze[0];ze=ze[1];var Ot=Ut.split("_");he=2<=Ot.length&&Ot[1]=="type"?he+(Ut+"="+ze+"&"):he+(Ut+"=redacted&")}}else he=null;else he=Y;return"XMLHTTP REQ ("+S+") [attempt "+q+"]: "+y+`
`+v+`
`+he})}function rd(c,y,v,S,q,Y,he){c.info(function(){return"XMLHTTP RESP ("+S+") [ attempt "+q+"]: "+y+`
`+v+`
`+Y+" "+he})}function Ti(c,y,v,S){c.info(function(){return"XMLHTTP TEXT ("+y+"): "+Rs(c,v)+(S?" "+S:"")})}function Ju(c,y){c.info(function(){return"TIMEOUT: "+y})}kn.prototype.info=function(){};function Rs(c,y){if(!c.g)return y;if(!y)return null;try{var v=JSON.parse(y);if(v){for(c=0;c<v.length;c++)if(Array.isArray(v[c])){var S=v[c];if(!(2>S.length)){var q=S[1];if(Array.isArray(q)&&!(1>q.length)){var Y=q[0];if(Y!="noop"&&Y!="stop"&&Y!="close")for(var he=1;he<q.length;he++)q[he]=""}}}}return Yn(v)}catch{return y}}var bi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Mr={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},cr;function hr(){}N(hr,rl),hr.prototype.g=function(){return new XMLHttpRequest},hr.prototype.i=function(){return{}},cr=new hr;function ln(c,y,v,S){this.j=c,this.i=y,this.l=v,this.R=S||1,this.U=new bs(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new yt}function yt(){this.i=null,this.g="",this.h=!1}var ul={},Sa={};function Xn(c,y,v){c.L=1,c.v=Ns(Tn(y)),c.m=v,c.P=!0,Pr(c,null)}function Pr(c,y){c.F=Date.now(),Is(c),c.A=Tn(c.v);var v=c.A,S=c.R;Array.isArray(S)||(S=[String(S)]),ml(v.i,"t",S),c.C=0,v=c.j.J,c.h=new yt,c.g=pc(c.j,v?y:null,!c.m),0<c.O&&(c.M=new nd(w(c.Y,c,c.g),c.O)),y=c.U,v=c.g,S=c.ca;var q="readystatechange";Array.isArray(q)||(q&&(ws[0]=q.toString()),q=ws);for(var Y=0;Y<q.length;Y++){var he=Qu(v,q[Y],S||y.handleEvent,!1,y.h||y);if(!he)break;y.g[he.key]=he}y=c.H?R(c.H):{},c.m?(c.u||(c.u="POST"),y["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,y)):(c.u="GET",c.g.ea(c.A,c.u,null,y)),Ei(),ll(c.i,c.u,c.A,c.l,c.R,c.m)}ln.prototype.ca=function(c){c=c.target;const y=this.M;y&&Ln(c)==3?y.j():this.Y(c)},ln.prototype.Y=function(c){try{if(c==this.g)e:{const Ot=Ln(this.g);var y=this.g.Ba();const Hr=this.g.Z();if(!(3>Ot)&&(Ot!=3||this.g&&(this.h.h||this.g.oa()||ac(this.g)))){this.J||Ot!=4||y==7||(y==8||0>=Hr?Ei(3):Ei(2)),wi(this);var v=this.g.Z();this.X=v;t:if(Zu(this)){var S=ac(this.g);c="";var q=S.length,Y=Ln(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ft(this),fr(this);var he="";break t}this.h.i=new p.TextDecoder}for(y=0;y<q;y++)this.h.h=!0,c+=this.h.i.decode(S[y],{stream:!(Y&&y==q-1)});S.length=0,this.h.g+=c,this.C=0,he=this.h.g}else he=this.g.oa();if(this.o=v==200,rd(this.i,this.u,this.A,this.l,this.R,Ot,v),this.o){if(this.T&&!this.K){t:{if(this.g){var je,Nt=this.g;if((je=Nt.g?Nt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!J(je)){var ze=je;break t}}ze=null}if(v=ze)Ti(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Cs(this,v);else{this.o=!1,this.s=3,lt(12),Ft(this),fr(this);break e}}if(this.P){v=!0;let Gt;for(;!this.J&&this.C<he.length;)if(Gt=ec(this,he),Gt==Sa){Ot==4&&(this.s=4,lt(14),v=!1),Ti(this.i,this.l,null,"[Incomplete Response]");break}else if(Gt==ul){this.s=4,lt(15),Ti(this.i,this.l,he,"[Invalid Chunk]"),v=!1;break}else Ti(this.i,this.l,Gt,null),Cs(this,Gt);if(Zu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ot!=4||he.length!=0||this.h.h||(this.s=1,lt(16),v=!1),this.o=this.o&&v,!v)Ti(this.i,this.l,he,"[Invalid Chunked Response]"),Ft(this),fr(this);else if(0<he.length&&!this.W){this.W=!0;var Ut=this.j;Ut.g==this&&Ut.ba&&!Ut.M&&(Ut.j.info("Great, no buffering proxy detected. Bytes received: "+he.length),js(Ut),Ut.M=!0,lt(11))}}else Ti(this.i,this.l,he,null),Cs(this,he);Ot==4&&Ft(this),this.o&&!this.J&&(Ot==4?hc(this.j,this):(this.o=!1,Is(this)))}else ld(this.g),v==400&&0<he.indexOf("Unknown SID")?(this.s=3,lt(12)):(this.s=0,lt(13)),Ft(this),fr(this)}}}catch{}finally{}};function Zu(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function ec(c,y){var v=c.C,S=y.indexOf(`
`,v);return S==-1?Sa:(v=Number(y.substring(v,S)),isNaN(v)?ul:(S+=1,S+v>y.length?Sa:(y=y.slice(S,S+v),c.C=S+v,y)))}ln.prototype.cancel=function(){this.J=!0,Ft(this)};function Is(c){c.S=Date.now()+c.I,tc(c,c.I)}function tc(c,y){if(c.B!=null)throw Error("WatchDog timer not null");c.B=bt(w(c.ba,c),y)}function wi(c){c.B&&(p.clearTimeout(c.B),c.B=null)}ln.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(Ju(this.i,this.A),this.L!=2&&(Ei(),lt(17)),Ft(this),this.s=2,fr(this)):tc(this,this.S-c)};function fr(c){c.j.G==0||c.J||hc(c.j,c)}function Ft(c){wi(c);var y=c.M;y&&typeof y.ma=="function"&&y.ma(),c.M=null,Ss(c.U),c.g&&(y=c.g,c.g=null,y.abort(),y.ma())}function Cs(c,y){try{var v=c.j;if(v.G!=0&&(v.g==c||cl(v.h,c))){if(!c.K&&cl(v.h,c)&&v.G==3){try{var S=v.Da.g.parse(y)}catch{S=null}if(Array.isArray(S)&&S.length==3){var q=S;if(q[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<c.F)Va(v),Ma(v);else break e;El(v),lt(18)}}else v.za=q[1],0<v.za-v.T&&37500>q[2]&&v.F&&v.v==0&&!v.C&&(v.C=bt(w(v.Za,v),6e3));if(1>=Ra(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else Br(v,11)}else if((c.K||v.g==c)&&Va(v),!J(y))for(q=v.Da.g.parse(y),y=0;y<q.length;y++){let ze=q[y];if(v.T=ze[0],ze=ze[1],v.G==2)if(ze[0]=="c"){v.K=ze[1],v.ia=ze[2];const Ut=ze[3];Ut!=null&&(v.la=Ut,v.j.info("VER="+v.la));const Ot=ze[4];Ot!=null&&(v.Aa=Ot,v.j.info("SVER="+v.Aa));const Hr=ze[5];Hr!=null&&typeof Hr=="number"&&0<Hr&&(S=1.5*Hr,v.L=S,v.j.info("backChannelRequestTimeoutMs_="+S)),S=v;const Gt=c.g;if(Gt){const _r=Gt.g?Gt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_r){var Y=S.h;Y.g||_r.indexOf("spdy")==-1&&_r.indexOf("quic")==-1&&_r.indexOf("h2")==-1||(Y.j=Y.l,Y.g=new Set,Y.h&&(Ia(Y,Y.h),Y.h=null))}if(S.D){const bl=Gt.g?Gt.g.getResponseHeader("X-HTTP-Session-Id"):null;bl&&(S.ya=bl,et(S.I,S.D,bl))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-c.F,v.j.info("Handshake RTT: "+v.R+"ms")),S=v;var he=c;if(S.qa=dc(S,S.J?S.ia:null,S.W),he.K){un(S.h,he);var je=he,Nt=S.L;Nt&&(je.I=Nt),je.B&&(wi(je),Is(je)),S.g=he}else uc(S);0<v.i.length&&Pa(v)}else ze[0]!="stop"&&ze[0]!="close"||Br(v,7);else v.G==3&&(ze[0]=="stop"||ze[0]=="close"?ze[0]=="stop"?Br(v,7):vl(v):ze[0]!="noop"&&v.l&&v.l.ta(ze),v.v=0)}}Ei(4)}catch{}}var nc=class{constructor(c,y){this.g=c,this.map=y}};function Vr(c){this.l=c||10,p.PerformanceNavigationTiming?(c=p.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(p.chrome&&p.chrome.loadTimes&&p.chrome.loadTimes()&&p.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Aa(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Ra(c){return c.h?1:c.g?c.g.size:0}function cl(c,y){return c.h?c.h==y:c.g?c.g.has(y):!1}function Ia(c,y){c.g?c.g.add(y):c.h=y}function un(c,y){c.h&&c.h==y?c.h=null:c.g&&c.g.has(y)&&c.g.delete(y)}Vr.prototype.cancel=function(){if(this.i=hl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function hl(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let y=c.i;for(const v of c.g.values())y=y.concat(v.D);return y}return G(c.i)}function id(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(m(c)){for(var y=[],v=c.length,S=0;S<v;S++)y.push(c[S]);return y}y=[],v=0;for(S in c)y[v++]=c[S];return y}function Ca(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(m(c)||typeof c=="string"){var y=[];c=c.length;for(var v=0;v<c;v++)y.push(v);return y}y=[],v=0;for(const S in c)y[v++]=S;return y}}}function fl(c,y){if(c.forEach&&typeof c.forEach=="function")c.forEach(y,void 0);else if(m(c)||typeof c=="string")Array.prototype.forEach.call(c,y,void 0);else for(var v=Ca(c),S=id(c),q=S.length,Y=0;Y<q;Y++)y.call(void 0,S[Y],v&&v[Y],c)}var xs=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function sd(c,y){if(c){c=c.split("&");for(var v=0;v<c.length;v++){var S=c[v].indexOf("="),q=null;if(0<=S){var Y=c[v].substring(0,S);q=c[v].substring(S+1)}else Y=c[v];y(Y,q?decodeURIComponent(q.replace(/\+/g," ")):"")}}}function wt(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof wt){this.h=c.h,Ds(this,c.j),this.o=c.o,this.g=c.g,Si(this,c.s),this.l=c.l;var y=c.i,v=new Ur;v.i=y.i,y.g&&(v.g=new Map(y.g),v.h=y.h),Lr(this,v),this.m=c.m}else c&&(y=String(c).match(xs))?(this.h=!1,Ds(this,y[1]||"",!0),this.o=Mn(y[2]||""),this.g=Mn(y[3]||"",!0),Si(this,y[4]),this.l=Mn(y[5]||"",!0),Lr(this,y[6]||"",!0),this.m=Mn(y[7]||"")):(this.h=!1,this.i=new Ur(null,this.h))}wt.prototype.toString=function(){var c=[],y=this.j;y&&c.push(Os(y,dl,!0),":");var v=this.g;return(v||y=="file")&&(c.push("//"),(y=this.o)&&c.push(Os(y,dl,!0),"@"),c.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&c.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&c.push("/"),c.push(Os(v,v.charAt(0)=="/"?ad:pl,!0))),(v=this.i.toString())&&c.push("?",v),(v=this.m)&&c.push("#",Os(v,xa)),c.join("")};function Tn(c){return new wt(c)}function Ds(c,y,v){c.j=v?Mn(y,!0):y,c.j&&(c.j=c.j.replace(/:$/,""))}function Si(c,y){if(y){if(y=Number(y),isNaN(y)||0>y)throw Error("Bad port number "+y);c.s=y}else c.s=null}function Lr(c,y,v){y instanceof Ur?(c.i=y,ic(c.i,c.h)):(v||(y=Os(y,od)),c.i=new Ur(y,c.h))}function et(c,y,v){c.i.set(y,v)}function Ns(c){return et(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function Mn(c,y){return c?y?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Os(c,y,v){return typeof c=="string"?(c=encodeURI(c).replace(y,rc),v&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function rc(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var dl=/[#\/\?@]/g,pl=/[#\?:]/g,ad=/[#\?]/g,od=/[#\?@]/g,xa=/#/g;function Ur(c,y){this.h=this.g=null,this.i=c||null,this.j=!!y}function Pn(c){c.g||(c.g=new Map,c.h=0,c.i&&sd(c.i,function(y,v){c.add(decodeURIComponent(y.replace(/\+/g," ")),v)}))}r=Ur.prototype,r.add=function(c,y){Pn(this),this.i=null,c=dr(this,c);var v=this.g.get(c);return v||this.g.set(c,v=[]),v.push(y),this.h+=1,this};function jr(c,y){Pn(c),y=dr(c,y),c.g.has(y)&&(c.i=null,c.h-=c.g.get(y).length,c.g.delete(y))}function zr(c,y){return Pn(c),y=dr(c,y),c.g.has(y)}r.forEach=function(c,y){Pn(this),this.g.forEach(function(v,S){v.forEach(function(q){c.call(y,q,S,this)},this)},this)},r.na=function(){Pn(this);const c=Array.from(this.g.values()),y=Array.from(this.g.keys()),v=[];for(let S=0;S<y.length;S++){const q=c[S];for(let Y=0;Y<q.length;Y++)v.push(y[S])}return v},r.V=function(c){Pn(this);let y=[];if(typeof c=="string")zr(this,c)&&(y=y.concat(this.g.get(dr(this,c))));else{c=Array.from(this.g.values());for(let v=0;v<c.length;v++)y=y.concat(c[v])}return y},r.set=function(c,y){return Pn(this),this.i=null,c=dr(this,c),zr(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[y]),this.h+=1,this},r.get=function(c,y){return c?(c=this.V(c),0<c.length?String(c[0]):y):y};function ml(c,y,v){jr(c,y),0<v.length&&(c.i=null,c.g.set(dr(c,y),G(v)),c.h+=v.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],y=Array.from(this.g.keys());for(var v=0;v<y.length;v++){var S=y[v];const Y=encodeURIComponent(String(S)),he=this.V(S);for(S=0;S<he.length;S++){var q=Y;he[S]!==""&&(q+="="+encodeURIComponent(String(he[S]))),c.push(q)}}return this.i=c.join("&")};function dr(c,y){return y=String(y),c.j&&(y=y.toLowerCase()),y}function ic(c,y){y&&!c.j&&(Pn(c),c.i=null,c.g.forEach(function(v,S){var q=S.toLowerCase();S!=q&&(jr(this,S),ml(this,q,v))},c)),c.j=y}function ks(c,y){const v=new kn;if(p.Image){const S=new Image;S.onload=C(Vn,v,"TestLoadImage: loaded",!0,y,S),S.onerror=C(Vn,v,"TestLoadImage: error",!1,y,S),S.onabort=C(Vn,v,"TestLoadImage: abort",!1,y,S),S.ontimeout=C(Vn,v,"TestLoadImage: timeout",!1,y,S),p.setTimeout(function(){S.ontimeout&&S.ontimeout()},1e4),S.src=c}else y(!1)}function Wn(c,y){const v=new kn,S=new AbortController,q=setTimeout(()=>{S.abort(),Vn(v,"TestPingServer: timeout",!1,y)},1e4);fetch(c,{signal:S.signal}).then(Y=>{clearTimeout(q),Y.ok?Vn(v,"TestPingServer: ok",!0,y):Vn(v,"TestPingServer: server error",!1,y)}).catch(()=>{clearTimeout(q),Vn(v,"TestPingServer: error",!1,y)})}function Vn(c,y,v,S,q){try{q&&(q.onload=null,q.onerror=null,q.onabort=null,q.ontimeout=null),S(v)}catch{}}function Ms(){this.g=new As}function pr(c,y,v){const S=v||"";try{fl(c,function(q,Y){let he=q;g(q)&&(he=Yn(q)),y.push(S+Y+"="+encodeURIComponent(he))})}catch(q){throw y.push(S+"type="+encodeURIComponent("_badmap")),q}}function Ai(c){this.l=c.Ub||null,this.j=c.eb||!1}N(Ai,rl),Ai.prototype.g=function(){return new qr(this.l,this.j)},Ai.prototype.i=function(c){return function(){return c}}({});function qr(c,y){dt.call(this),this.D=c,this.o=y,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(qr,dt),r=qr.prototype,r.open=function(c,y){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=y,this.readyState=1,gr(this)},r.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const y={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(y.body=c),(this.D||p).fetch(new Request(this.A,y)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,mr(this)),this.readyState=0},r.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,gr(this)),this.g&&(this.readyState=3,gr(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof p.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;gl(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function gl(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}r.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var y=c.value?c.value:new Uint8Array(0);(y=this.v.decode(y,{stream:!c.done}))&&(this.response=this.responseText+=y)}c.done?mr(this):gr(this),this.readyState==3&&gl(this)}},r.Ra=function(c){this.g&&(this.response=this.responseText=c,mr(this))},r.Qa=function(c){this.g&&(this.response=c,mr(this))},r.ga=function(){this.g&&mr(this)};function mr(c){c.readyState=4,c.l=null,c.j=null,c.v=null,gr(c)}r.setRequestHeader=function(c,y){this.u.append(c,y)},r.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],y=this.h.entries();for(var v=y.next();!v.done;)v=v.value,c.push(v[0]+": "+v[1]),v=y.next();return c.join(`\r
`)};function gr(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(qr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function yl(c){let y="";return ue(c,function(v,S){y+=S,y+=":",y+=v,y+=`\r
`}),y}function Lt(c,y,v){e:{for(S in v){var S=!1;break e}S=!0}S||(v=yl(v),typeof c=="string"?v!=null&&encodeURIComponent(String(v)):et(c,y,v))}function Ke(c){dt.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(Ke,dt);var Da=/^https?$/i,Ps=["POST","PUT"];r=Ke.prototype,r.Ha=function(c){this.J=c},r.ea=function(c,y,v,S){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);y=y?y.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():cr.g(),this.v=this.o?il(this.o):il(cr),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(y,String(c),!0),this.B=!1}catch(Y){sc(this,Y);return}if(c=v||"",v=new Map(this.headers),S)if(Object.getPrototypeOf(S)===Object.prototype)for(var q in S)v.set(q,S[q]);else if(typeof S.keys=="function"&&typeof S.get=="function")for(const Y of S.keys())v.set(Y,S.get(Y));else throw Error("Unknown input type for opt_headers: "+String(S));S=Array.from(v.keys()).find(Y=>Y.toLowerCase()=="content-type"),q=p.FormData&&c instanceof p.FormData,!(0<=Array.prototype.indexOf.call(Ps,y,void 0))||S||q||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[Y,he]of v)this.g.setRequestHeader(Y,he);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Vs(this),this.u=!0,this.g.send(c),this.u=!1}catch(Y){sc(this,Y)}};function sc(c,y){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=y,c.m=5,Na(c),yr(c)}function Na(c){c.A||(c.A=!0,Xe(c,"complete"),Xe(c,"error"))}r.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,Xe(this,"complete"),Xe(this,"abort"),yr(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),yr(this,!0)),Ke.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Oa(this):this.bb())},r.bb=function(){Oa(this)};function Oa(c){if(c.h&&typeof h<"u"&&(!c.v[1]||Ln(c)!=4||c.Z()!=2)){if(c.u&&Ln(c)==4)Zt(c.Ea,0,c);else if(Xe(c,"readystatechange"),Ln(c)==4){c.h=!1;try{const he=c.Z();e:switch(he){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var y=!0;break e;default:y=!1}var v;if(!(v=y)){var S;if(S=he===0){var q=String(c.D).match(xs)[1]||null;!q&&p.self&&p.self.location&&(q=p.self.location.protocol.slice(0,-1)),S=!Da.test(q?q.toLowerCase():"")}v=S}if(v)Xe(c,"complete"),Xe(c,"success");else{c.m=6;try{var Y=2<Ln(c)?c.g.statusText:""}catch{Y=""}c.l=Y+" ["+c.Z()+"]",Na(c)}}finally{yr(c)}}}}function yr(c,y){if(c.g){Vs(c);const v=c.g,S=c.v[0]?()=>{}:null;c.g=null,c.v=null,y||Xe(c,"ready");try{v.onreadystatechange=S}catch{}}}function Vs(c){c.I&&(p.clearTimeout(c.I),c.I=null)}r.isActive=function(){return!!this.g};function Ln(c){return c.g?c.g.readyState:0}r.Z=function(){try{return 2<Ln(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(c){if(this.g){var y=this.g.responseText;return c&&y.indexOf(c)==0&&(y=y.substring(c.length)),ba(y)}};function ac(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function ld(c){const y={};c=(c.g&&2<=Ln(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let S=0;S<c.length;S++){if(J(c[S]))continue;var v=P(c[S]);const q=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const Y=y[q]||[];y[q]=Y,Y.push(v)}D(y,function(S){return S.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ls(c,y,v){return v&&v.internalChannelParams&&v.internalChannelParams[c]||y}function ka(c){this.Aa=0,this.i=[],this.j=new kn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ls("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ls("baseRetryDelayMs",5e3,c),this.cb=Ls("retryDelaySeedMs",1e4,c),this.Wa=Ls("forwardChannelMaxRetries",2,c),this.wa=Ls("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new Vr(c&&c.concurrentRequestLimit),this.Da=new Ms,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=ka.prototype,r.la=8,r.G=1,r.connect=function(c,y,v,S){lt(0),this.W=c,this.H=y||{},v&&S!==void 0&&(this.H.OSID=v,this.H.OAID=S),this.F=this.X,this.I=dc(this,null,this.W),Pa(this)};function vl(c){if(oc(c),c.G==3){var y=c.U++,v=Tn(c.I);if(et(v,"SID",c.K),et(v,"RID",y),et(v,"TYPE","terminate"),Us(c,v),y=new ln(c,c.j,y),y.L=2,y.v=Ns(Tn(v)),v=!1,p.navigator&&p.navigator.sendBeacon)try{v=p.navigator.sendBeacon(y.v.toString(),"")}catch{}!v&&p.Image&&(new Image().src=y.v,v=!0),v||(y.g=pc(y.j,null),y.g.ea(y.v)),y.F=Date.now(),Is(y)}fc(c)}function Ma(c){c.g&&(js(c),c.g.cancel(),c.g=null)}function oc(c){Ma(c),c.u&&(p.clearTimeout(c.u),c.u=null),Va(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&p.clearTimeout(c.s),c.s=null)}function Pa(c){if(!Aa(c.h)&&!c.s){c.s=!0;var y=c.Ga;ce||M(),me||(ce(),me=!0),be.add(y,c),c.B=0}}function ud(c,y){return Ra(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=y.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=bt(w(c.Ga,c,y),Tl(c,c.B)),c.B++,!0)}r.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const q=new ln(this,this.j,c);let Y=this.o;if(this.S&&(Y?(Y=R(Y),O(Y,this.S)):Y=this.S),this.m!==null||this.O||(q.H=Y,Y=null),this.P)e:{for(var y=0,v=0;v<this.i.length;v++){t:{var S=this.i[v];if("__data__"in S.map&&(S=S.map.__data__,typeof S=="string")){S=S.length;break t}S=void 0}if(S===void 0)break;if(y+=S,4096<y){y=v;break e}if(y===4096||v===this.i.length-1){y=v+1;break e}}y=1e3}else y=1e3;y=lc(this,q,y),v=Tn(this.I),et(v,"RID",c),et(v,"CVER",22),this.D&&et(v,"X-HTTP-Session-Id",this.D),Us(this,v),Y&&(this.O?y="headers="+encodeURIComponent(String(yl(Y)))+"&"+y:this.m&&Lt(v,this.m,Y)),Ia(this.h,q),this.Ua&&et(v,"TYPE","init"),this.P?(et(v,"$req",y),et(v,"SID","null"),q.T=!0,Xn(q,v,null)):Xn(q,v,y),this.G=2}}else this.G==3&&(c?_l(this,c):this.i.length==0||Aa(this.h)||_l(this))};function _l(c,y){var v;y?v=y.l:v=c.U++;const S=Tn(c.I);et(S,"SID",c.K),et(S,"RID",v),et(S,"AID",c.T),Us(c,S),c.m&&c.o&&Lt(S,c.m,c.o),v=new ln(c,c.j,v,c.B+1),c.m===null&&(v.H=c.o),y&&(c.i=y.D.concat(c.i)),y=lc(c,v,1e3),v.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),Ia(c.h,v),Xn(v,S,y)}function Us(c,y){c.H&&ue(c.H,function(v,S){et(y,S,v)}),c.l&&fl({},function(v,S){et(y,S,v)})}function lc(c,y,v){v=Math.min(c.i.length,v);var S=c.l?w(c.l.Na,c.l,c):null;e:{var q=c.i;let Y=-1;for(;;){const he=["count="+v];Y==-1?0<v?(Y=q[0].g,he.push("ofs="+Y)):Y=0:he.push("ofs="+Y);let je=!0;for(let Nt=0;Nt<v;Nt++){let ze=q[Nt].g;const Ut=q[Nt].map;if(ze-=Y,0>ze)Y=Math.max(0,q[Nt].g-100),je=!1;else try{pr(Ut,he,"req"+ze+"_")}catch{S&&S(Ut)}}if(je){S=he.join("&");break e}}}return c=c.i.splice(0,v),y.D=c,S}function uc(c){if(!c.g&&!c.u){c.Y=1;var y=c.Fa;ce||M(),me||(ce(),me=!0),be.add(y,c),c.v=0}}function El(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=bt(w(c.Fa,c),Tl(c,c.v)),c.v++,!0)}r.Fa=function(){if(this.u=null,cc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=bt(w(this.ab,this),c)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,lt(10),Ma(this),cc(this))};function js(c){c.A!=null&&(p.clearTimeout(c.A),c.A=null)}function cc(c){c.g=new ln(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var y=Tn(c.qa);et(y,"RID","rpc"),et(y,"SID",c.K),et(y,"AID",c.T),et(y,"CI",c.F?"0":"1"),!c.F&&c.ja&&et(y,"TO",c.ja),et(y,"TYPE","xmlhttp"),Us(c,y),c.m&&c.o&&Lt(y,c.m,c.o),c.L&&(c.g.I=c.L);var v=c.g;c=c.ia,v.L=1,v.v=Ns(Tn(y)),v.m=null,v.P=!0,Pr(v,c)}r.Za=function(){this.C!=null&&(this.C=null,Ma(this),El(this),lt(19))};function Va(c){c.C!=null&&(p.clearTimeout(c.C),c.C=null)}function hc(c,y){var v=null;if(c.g==y){Va(c),js(c),c.g=null;var S=2}else if(cl(c.h,y))v=y.D,un(c.h,y),S=1;else return;if(c.G!=0){if(y.o)if(S==1){v=y.m?y.m.length:0,y=Date.now()-y.F;var q=c.B;S=_i(),Xe(S,new Dt(S,v)),Pa(c)}else uc(c);else if(q=y.s,q==3||q==0&&0<y.X||!(S==1&&ud(c,y)||S==2&&El(c)))switch(v&&0<v.length&&(y=c.h,y.i=y.i.concat(v)),q){case 1:Br(c,5);break;case 4:Br(c,10);break;case 3:Br(c,6);break;default:Br(c,2)}}}function Tl(c,y){let v=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(v*=2),v*y}function Br(c,y){if(c.j.info("Error code "+y),y==2){var v=w(c.fb,c),S=c.Xa;const q=!S;S=new wt(S||"//www.google.com/images/cleardot.gif"),p.location&&p.location.protocol=="http"||Ds(S,"https"),Ns(S),q?ks(S.toString(),v):Wn(S.toString(),v)}else lt(2);c.G=0,c.l&&c.l.sa(y),fc(c),oc(c)}r.fb=function(c){c?(this.j.info("Successfully pinged google.com"),lt(2)):(this.j.info("Failed to ping google.com"),lt(1))};function fc(c){if(c.G=0,c.ka=[],c.l){const y=hl(c.h);(y.length!=0||c.i.length!=0)&&(U(c.ka,y),U(c.ka,c.i),c.h.i.length=0,G(c.i),c.i.length=0),c.l.ra()}}function dc(c,y,v){var S=v instanceof wt?Tn(v):new wt(v);if(S.g!="")y&&(S.g=y+"."+S.g),Si(S,S.s);else{var q=p.location;S=q.protocol,y=y?y+"."+q.hostname:q.hostname,q=+q.port;var Y=new wt(null);S&&Ds(Y,S),y&&(Y.g=y),q&&Si(Y,q),v&&(Y.l=v),S=Y}return v=c.D,y=c.ya,v&&y&&et(S,v,y),et(S,"VER",c.la),Us(c,S),S}function pc(c,y,v){if(y&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return y=c.Ca&&!c.pa?new Ke(new Ai({eb:v})):new Ke(c.pa),y.Ha(c.J),y}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function mc(){}r=mc.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function La(){}La.prototype.g=function(c,y){return new cn(c,y)};function cn(c,y){dt.call(this),this.g=new ka(y),this.l=c,this.h=y&&y.messageUrlParams||null,c=y&&y.messageHeaders||null,y&&y.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=y&&y.initMessageHeaders||null,y&&y.messageContentType&&(c?c["X-WebChannel-Content-Type"]=y.messageContentType:c={"X-WebChannel-Content-Type":y.messageContentType}),y&&y.va&&(c?c["X-WebChannel-Client-Profile"]=y.va:c={"X-WebChannel-Client-Profile":y.va}),this.g.S=c,(c=y&&y.Sb)&&!J(c)&&(this.g.m=c),this.v=y&&y.supportsCrossDomainXhr||!1,this.u=y&&y.sendRawJson||!1,(y=y&&y.httpSessionIdParam)&&!J(y)&&(this.g.D=y,c=this.h,c!==null&&y in c&&(c=this.h,y in c&&delete c[y])),this.j=new vr(this)}N(cn,dt),cn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},cn.prototype.close=function(){vl(this.g)},cn.prototype.o=function(c){var y=this.g;if(typeof c=="string"){var v={};v.__data__=c,c=v}else this.u&&(v={},v.__data__=Yn(c),c=v);y.i.push(new nc(y.Ya++,c)),y.G==3&&Pa(y)},cn.prototype.N=function(){this.g.l=null,delete this.j,vl(this.g),delete this.g,cn.aa.N.call(this)};function gc(c){kr.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var y=c.__sm__;if(y){e:{for(const v in y){c=v;break e}c=void 0}(this.i=c)&&(c=this.i,y=y!==null&&c in y?y[c]:void 0),this.data=y}else this.data=c}N(gc,kr);function yc(){al.call(this),this.status=1}N(yc,al);function vr(c){this.g=c}N(vr,mc),vr.prototype.ua=function(){Xe(this.g,"a")},vr.prototype.ta=function(c){Xe(this.g,new gc(c))},vr.prototype.sa=function(c){Xe(this.g,new yc)},vr.prototype.ra=function(){Xe(this.g,"b")},La.prototype.createWebChannel=La.prototype.g,cn.prototype.send=cn.prototype.o,cn.prototype.open=cn.prototype.m,cn.prototype.close=cn.prototype.close,rw=function(){return new La},nw=function(){return _i()},tw=ur,jm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},bi.NO_ERROR=0,bi.TIMEOUT=8,bi.HTTP_ERROR=6,Ph=bi,Mr.COMPLETE="complete",ew=Mr,sl.EventType=Or,Or.OPEN="a",Or.CLOSE="b",Or.ERROR="c",Or.MESSAGE="d",dt.prototype.listen=dt.prototype.K,pu=sl,Ke.prototype.listenOnce=Ke.prototype.L,Ke.prototype.getLastError=Ke.prototype.Ka,Ke.prototype.getLastErrorCode=Ke.prototype.Ba,Ke.prototype.getStatus=Ke.prototype.Z,Ke.prototype.getResponseJson=Ke.prototype.Oa,Ke.prototype.getResponseText=Ke.prototype.oa,Ke.prototype.send=Ke.prototype.ea,Ke.prototype.setWithCredentials=Ke.prototype.Ha,Zb=Ke}).apply(typeof Eh<"u"?Eh:typeof self<"u"?self:typeof window<"u"?window:{});const bE="@firebase/firestore",wE="4.7.10";/**
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
 */class rn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}rn.UNAUTHENTICATED=new rn(null),rn.GOOGLE_CREDENTIALS=new rn("google-credentials-uid"),rn.FIRST_PARTY=new rn("first-party-uid"),rn.MOCK_USER=new rn("mock-user");/**
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
 */const ca=new vg("@firebase/firestore");function po(){return ca.logLevel}function fe(r,...e){if(ca.logLevel<=Ve.DEBUG){const t=e.map(Dg);ca.debug(`Firestore (${Qo}): ${r}`,...t)}}function pi(r,...e){if(ca.logLevel<=Ve.ERROR){const t=e.map(Dg);ca.error(`Firestore (${Qo}): ${r}`,...t)}}function Io(r,...e){if(ca.logLevel<=Ve.WARN){const t=e.map(Dg);ca.warn(`Firestore (${Qo}): ${r}`,...t)}}function Dg(r){if(typeof r=="string")return r;try{/**
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
 */function Ae(r="Unexpected state"){const e=`FIRESTORE (${Qo}) INTERNAL ASSERTION FAILED: `+r;throw pi(e),new Error(e)}function Ye(r,e){r||Ae()}function Ce(r,e){return r}/**
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
 */const ne={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class de extends yi{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ui{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class iw{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class hN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(rn.UNAUTHENTICATED))}shutdown(){}}class fN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class dN{constructor(e){this.t=e,this.currentUser=rn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ye(this.o===void 0);let s=this.i;const o=m=>this.i!==s?(s=this.i,t(m)):Promise.resolve();let u=new ui;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new ui,e.enqueueRetryable(()=>o(this.currentUser))};const h=()=>{const m=u;e.enqueueRetryable(async()=>{await m.promise,await o(this.currentUser)})},p=m=>{fe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=m,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(m=>p(m)),setTimeout(()=>{if(!this.auth){const m=this.t.getImmediate({optional:!0});m?p(m):(fe("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new ui)}},0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(fe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ye(typeof s.accessToken=="string"),new iw(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ye(e===null||typeof e=="string"),new rn(e)}}class pN{constructor(e,t,s){this.l=e,this.h=t,this.P=s,this.type="FirstParty",this.user=rn.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class mN{constructor(e,t,s){this.l=e,this.h=t,this.P=s}getToken(){return Promise.resolve(new pN(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(rn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class SE{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class gN{constructor(e,t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,Gn(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,t){Ye(this.o===void 0);const s=u=>{u.error!=null&&fe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.R;return this.R=u.token,fe("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable(()=>s(u))};const o=u=>{fe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(u=>o(u)),setTimeout(()=>{if(!this.appCheck){const u=this.A.getImmediate({optional:!0});u?o(u):fe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new SE(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Ye(typeof t.token=="string"),this.R=t.token,new SE(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function yN(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<r;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */function sw(){return new TextEncoder}/**
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
 */class aw{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=yN(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<t&&(s+=e.charAt(o[u]%62))}return s}}function Oe(r,e){return r<e?-1:r>e?1:0}function zm(r,e){let t=0;for(;t<r.length&&t<e.length;){const s=r.codePointAt(t),o=e.codePointAt(t);if(s!==o){if(s<128&&o<128)return Oe(s,o);{const u=sw(),h=vN(u.encode(AE(r,t)),u.encode(AE(e,t)));return h!==0?h:Oe(s,o)}}t+=s>65535?2:1}return Oe(r.length,e.length)}function AE(r,e){return r.codePointAt(e)>65535?r.substring(e,e+2):r.substring(e,e+1)}function vN(r,e){for(let t=0;t<r.length&&t<e.length;++t)if(r[t]!==e[t])return Oe(r[t],e[t]);return Oe(r.length,e.length)}function Co(r,e,t){return r.length===e.length&&r.every((s,o)=>t(s,e[o]))}/**
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
 */const RE=-62135596800,IE=1e6;class Tt{static now(){return Tt.fromMillis(Date.now())}static fromDate(e){return Tt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*IE);return new Tt(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new de(ne.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new de(ne.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<RE)throw new de(ne.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new de(ne.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/IE}_compareTo(e){return this.seconds===e.seconds?Oe(this.nanoseconds,e.nanoseconds):Oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-RE;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Ie{static fromTimestamp(e){return new Ie(e)}static min(){return new Ie(new Tt(0,0))}static max(){return new Ie(new Tt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const CE="__name__";class Ar{constructor(e,t,s){t===void 0?t=0:t>e.length&&Ae(),s===void 0?s=e.length-t:s>e.length-t&&Ae(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Ar.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ar?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const u=Ar.compareSegments(e.get(o),t.get(o));if(u!==0)return u}return Oe(e.length,t.length)}static compareSegments(e,t){const s=Ar.isNumericId(e),o=Ar.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?Ar.extractNumericId(e).compare(Ar.extractNumericId(t)):zm(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ss.fromString(e.substring(4,e.length-2))}}class ot extends Ar{construct(e,t,s){return new ot(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new de(ne.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(o=>o.length>0))}return new ot(t)}static emptyPath(){return new ot([])}}const _N=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Xt extends Ar{construct(e,t,s){return new Xt(e,t,s)}static isValidIdentifier(e){return _N.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Xt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===CE}static keyField(){return new Xt([CE])}static fromServerFormat(e){const t=[];let s="",o=0;const u=()=>{if(s.length===0)throw new de(ne.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const p=e[o];if(p==="\\"){if(o+1===e.length)throw new de(ne.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const m=e[o+1];if(m!=="\\"&&m!=="."&&m!=="`")throw new de(ne.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=m,o+=2}else p==="`"?(h=!h,o++):p!=="."||h?(s+=p,o++):(u(),o++)}if(u(),h)throw new de(ne.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Xt(t)}static emptyPath(){return new Xt([])}}/**
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
 */class _e{constructor(e){this.path=e}static fromPath(e){return new _e(ot.fromString(e))}static fromName(e){return new _e(ot.fromString(e).popFirst(5))}static empty(){return new _e(ot.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ot.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ot.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new _e(new ot(e.slice()))}}/**
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
 */const Cu=-1;function EN(r,e){const t=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=Ie.fromTimestamp(s===1e9?new Tt(t+1,0):new Tt(t,s));return new os(o,_e.empty(),e)}function TN(r){return new os(r.readTime,r.key,Cu)}class os{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new os(Ie.min(),_e.empty(),Cu)}static max(){return new os(Ie.max(),_e.empty(),Cu)}}function bN(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=_e.comparator(r.documentKey,e.documentKey),t!==0?t:Oe(r.largestBatchId,e.largestBatchId))}/**
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
 */const wN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class SN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Yo(r){if(r.code!==ne.FAILED_PRECONDITION||r.message!==wN)throw r;fe("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class re{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ae(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new re((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof re?t:re.resolve(t)}catch(t){return re.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):re.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):re.reject(t)}static resolve(e){return new re((t,s)=>{t(e)})}static reject(e){return new re((t,s)=>{s(e)})}static waitFor(e){return new re((t,s)=>{let o=0,u=0,h=!1;e.forEach(p=>{++o,p.next(()=>{++u,h&&u===o&&t()},m=>s(m))}),h=!0,u===o&&t()})}static or(e){let t=re.resolve(!1);for(const s of e)t=t.next(o=>o?re.resolve(o):s());return t}static forEach(e,t){const s=[];return e.forEach((o,u)=>{s.push(t.call(this,o,u))}),this.waitFor(s)}static mapArray(e,t){return new re((s,o)=>{const u=e.length,h=new Array(u);let p=0;for(let m=0;m<u;m++){const g=m;t(e[g]).next(_=>{h[g]=_,++p,p===u&&s(h)},_=>o(_))}})}static doWhile(e,t){return new re((s,o)=>{const u=()=>{e()===!0?t().next(()=>{u()},o):s()};u()})}}function AN(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Xo(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class Af{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.oe(s),this._e=s=>t.writeSequenceNumber(s))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Af.ae=-1;/**
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
 */const Ng=-1;function Rf(r){return r==null}function rf(r){return r===0&&1/r==-1/0}function RN(r){return typeof r=="number"&&Number.isInteger(r)&&!rf(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const ow="";function IN(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=xE(e)),e=CN(r.get(t),e);return xE(e)}function CN(r,e){let t=e;const s=r.length;for(let o=0;o<s;o++){const u=r.charAt(o);switch(u){case"\0":t+="";break;case ow:t+="";break;default:t+=u}}return t}function xE(r){return r+ow+""}/**
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
 */function DE(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function ms(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function lw(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */class ft{constructor(e,t){this.comparator=e,this.root=t||Yt.EMPTY}insert(e,t){return new ft(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Yt.BLACK,null,null))}remove(e){return new ft(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Yt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Th(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Th(this.root,e,this.comparator,!1)}getReverseIterator(){return new Th(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Th(this.root,e,this.comparator,!0)}}class Th{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Yt{constructor(e,t,s,o,u){this.key=e,this.value=t,this.color=s??Yt.RED,this.left=o??Yt.EMPTY,this.right=u??Yt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,u){return new Yt(e??this.key,t??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,s),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Yt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Yt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Yt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Yt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Ae();const e=this.left.check();if(e!==this.right.check())throw Ae();return e+(this.isRed()?0:1)}}Yt.EMPTY=null,Yt.RED=!0,Yt.BLACK=!1;Yt.EMPTY=new class{constructor(){this.size=0}get key(){throw Ae()}get value(){throw Ae()}get color(){throw Ae()}get left(){throw Ae()}get right(){throw Ae()}copy(e,t,s,o,u){return this}insert(e,t,s){return new Yt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Pt{constructor(e){this.comparator=e,this.data=new ft(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new NE(this.data.getIterator())}getIteratorFrom(e){return new NE(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof Pt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Pt(this.comparator);return t.data=e,t}}class NE{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Dn{constructor(e){this.fields=e,e.sort(Xt.comparator)}static empty(){return new Dn([])}unionWith(e){let t=new Pt(Xt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Dn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Co(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
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
 */class uw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Wt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new uw("Invalid base64 string: "+u):u}}(e);return new Wt(t)}static fromUint8Array(e){const t=function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u}(e);return new Wt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Wt.EMPTY_BYTE_STRING=new Wt("");const xN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ls(r){if(Ye(!!r),typeof r=="string"){let e=0;const t=xN.exec(r);if(Ye(!!t),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Et(r.seconds),nanos:Et(r.nanos)}}function Et(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function us(r){return typeof r=="string"?Wt.fromBase64String(r):Wt.fromUint8Array(r)}/**
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
 */const cw="server_timestamp",hw="__type__",fw="__previous_value__",dw="__local_write_time__";function Og(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[hw])===null||t===void 0?void 0:t.stringValue)===cw}function If(r){const e=r.mapValue.fields[fw];return Og(e)?If(e):e}function xu(r){const e=ls(r.mapValue.fields[dw].timestampValue);return new Tt(e.seconds,e.nanos)}/**
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
 */class DN{constructor(e,t,s,o,u,h,p,m,g){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=p,this.longPollingOptions=m,this.useFetchStreams=g}}const sf="(default)";class Du{constructor(e,t){this.projectId=e,this.database=t||sf}static empty(){return new Du("","")}get isDefaultDatabase(){return this.database===sf}isEqual(e){return e instanceof Du&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const pw="__type__",NN="__max__",bh={mapValue:{}},mw="__vector__",af="value";function cs(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Og(r)?4:kN(r)?9007199254740991:ON(r)?10:11:Ae()}function Nr(r,e){if(r===e)return!0;const t=cs(r);if(t!==cs(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return xu(r).isEqual(xu(e));case 3:return function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=ls(o.timestampValue),p=ls(u.timestampValue);return h.seconds===p.seconds&&h.nanos===p.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(o,u){return us(o.bytesValue).isEqual(us(u.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(o,u){return Et(o.geoPointValue.latitude)===Et(u.geoPointValue.latitude)&&Et(o.geoPointValue.longitude)===Et(u.geoPointValue.longitude)}(r,e);case 2:return function(o,u){if("integerValue"in o&&"integerValue"in u)return Et(o.integerValue)===Et(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=Et(o.doubleValue),p=Et(u.doubleValue);return h===p?rf(h)===rf(p):isNaN(h)&&isNaN(p)}return!1}(r,e);case 9:return Co(r.arrayValue.values||[],e.arrayValue.values||[],Nr);case 10:case 11:return function(o,u){const h=o.mapValue.fields||{},p=u.mapValue.fields||{};if(DE(h)!==DE(p))return!1;for(const m in h)if(h.hasOwnProperty(m)&&(p[m]===void 0||!Nr(h[m],p[m])))return!1;return!0}(r,e);default:return Ae()}}function Nu(r,e){return(r.values||[]).find(t=>Nr(t,e))!==void 0}function xo(r,e){if(r===e)return 0;const t=cs(r),s=cs(e);if(t!==s)return Oe(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Oe(r.booleanValue,e.booleanValue);case 2:return function(u,h){const p=Et(u.integerValue||u.doubleValue),m=Et(h.integerValue||h.doubleValue);return p<m?-1:p>m?1:p===m?0:isNaN(p)?isNaN(m)?0:-1:1}(r,e);case 3:return OE(r.timestampValue,e.timestampValue);case 4:return OE(xu(r),xu(e));case 5:return zm(r.stringValue,e.stringValue);case 6:return function(u,h){const p=us(u),m=us(h);return p.compareTo(m)}(r.bytesValue,e.bytesValue);case 7:return function(u,h){const p=u.split("/"),m=h.split("/");for(let g=0;g<p.length&&g<m.length;g++){const _=Oe(p[g],m[g]);if(_!==0)return _}return Oe(p.length,m.length)}(r.referenceValue,e.referenceValue);case 8:return function(u,h){const p=Oe(Et(u.latitude),Et(h.latitude));return p!==0?p:Oe(Et(u.longitude),Et(h.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return kE(r.arrayValue,e.arrayValue);case 10:return function(u,h){var p,m,g,_;const b=u.fields||{},w=h.fields||{},C=(p=b[af])===null||p===void 0?void 0:p.arrayValue,N=(m=w[af])===null||m===void 0?void 0:m.arrayValue,G=Oe(((g=C==null?void 0:C.values)===null||g===void 0?void 0:g.length)||0,((_=N==null?void 0:N.values)===null||_===void 0?void 0:_.length)||0);return G!==0?G:kE(C,N)}(r.mapValue,e.mapValue);case 11:return function(u,h){if(u===bh.mapValue&&h===bh.mapValue)return 0;if(u===bh.mapValue)return 1;if(h===bh.mapValue)return-1;const p=u.fields||{},m=Object.keys(p),g=h.fields||{},_=Object.keys(g);m.sort(),_.sort();for(let b=0;b<m.length&&b<_.length;++b){const w=zm(m[b],_[b]);if(w!==0)return w;const C=xo(p[m[b]],g[_[b]]);if(C!==0)return C}return Oe(m.length,_.length)}(r.mapValue,e.mapValue);default:throw Ae()}}function OE(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return Oe(r,e);const t=ls(r),s=ls(e),o=Oe(t.seconds,s.seconds);return o!==0?o:Oe(t.nanos,s.nanos)}function kE(r,e){const t=r.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const u=xo(t[o],s[o]);if(u)return u}return Oe(t.length,s.length)}function Do(r){return qm(r)}function qm(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(t){const s=ls(t);return`time(${s.seconds},${s.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(t){return us(t).toBase64()}(r.bytesValue):"referenceValue"in r?function(t){return _e.fromName(t).toString()}(r.referenceValue):"geoPointValue"in r?function(t){return`geo(${t.latitude},${t.longitude})`}(r.geoPointValue):"arrayValue"in r?function(t){let s="[",o=!0;for(const u of t.values||[])o?o=!1:s+=",",s+=qm(u);return s+"]"}(r.arrayValue):"mapValue"in r?function(t){const s=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const h of s)u?u=!1:o+=",",o+=`${h}:${qm(t.fields[h])}`;return o+"}"}(r.mapValue):Ae()}function Vh(r){switch(cs(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=If(r);return e?16+Vh(e):16;case 5:return 2*r.stringValue.length;case 6:return us(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((o,u)=>o+Vh(u),0)}(r.arrayValue);case 10:case 11:return function(s){let o=0;return ms(s.fields,(u,h)=>{o+=u.length+Vh(h)}),o}(r.mapValue);default:throw Ae()}}function ME(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function Bm(r){return!!r&&"integerValue"in r}function kg(r){return!!r&&"arrayValue"in r}function PE(r){return!!r&&"nullValue"in r}function VE(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Lh(r){return!!r&&"mapValue"in r}function ON(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[pw])===null||t===void 0?void 0:t.stringValue)===mw}function Eu(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return ms(r.mapValue.fields,(t,s)=>e.mapValue.fields[t]=Eu(s)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Eu(r.arrayValue.values[t]);return e}return Object.assign({},r)}function kN(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===NN}/**
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
 */class yn{constructor(e){this.value=e}static empty(){return new yn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Lh(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Eu(t)}setAll(e){let t=Xt.emptyPath(),s={},o=[];e.forEach((h,p)=>{if(!t.isImmediateParentOf(p)){const m=this.getFieldsMap(t);this.applyChanges(m,s,o),s={},o=[],t=p.popLast()}h?s[p.lastSegment()]=Eu(h):o.push(p.lastSegment())});const u=this.getFieldsMap(t);this.applyChanges(u,s,o)}delete(e){const t=this.field(e.popLast());Lh(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Nr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];Lh(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){ms(t,(o,u)=>e[o]=u);for(const o of s)delete e[o]}clone(){return new yn(Eu(this.value))}}function gw(r){const e=[];return ms(r.fields,(t,s)=>{const o=new Xt([t]);if(Lh(s)){const u=gw(s.mapValue).fields;if(u.length===0)e.push(o);else for(const h of u)e.push(o.child(h))}else e.push(o)}),new Dn(e)}/**
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
 */class sn{constructor(e,t,s,o,u,h,p){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=u,this.data=h,this.documentState=p}static newInvalidDocument(e){return new sn(e,0,Ie.min(),Ie.min(),Ie.min(),yn.empty(),0)}static newFoundDocument(e,t,s,o){return new sn(e,1,t,Ie.min(),s,o,0)}static newNoDocument(e,t){return new sn(e,2,t,Ie.min(),Ie.min(),yn.empty(),0)}static newUnknownDocument(e,t){return new sn(e,3,t,Ie.min(),Ie.min(),yn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ie.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=yn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=yn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ie.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof sn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new sn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class of{constructor(e,t){this.position=e,this.inclusive=t}}function LE(r,e,t){let s=0;for(let o=0;o<r.position.length;o++){const u=e[o],h=r.position[o];if(u.field.isKeyField()?s=_e.comparator(_e.fromName(h.referenceValue),t.key):s=xo(h,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function UE(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!Nr(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class Ou{constructor(e,t="asc"){this.field=e,this.dir=t}}function MN(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class yw{}class Ct extends yw{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new VN(e,t,s):t==="array-contains"?new jN(e,s):t==="in"?new zN(e,s):t==="not-in"?new qN(e,s):t==="array-contains-any"?new BN(e,s):new Ct(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new LN(e,s):new UN(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(xo(t,this.value)):t!==null&&cs(this.value)===cs(t)&&this.matchesComparison(xo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ae()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class sr extends yw{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new sr(e,t)}matches(e){return vw(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function vw(r){return r.op==="and"}function _w(r){return PN(r)&&vw(r)}function PN(r){for(const e of r.filters)if(e instanceof sr)return!1;return!0}function Hm(r){if(r instanceof Ct)return r.field.canonicalString()+r.op.toString()+Do(r.value);if(_w(r))return r.filters.map(e=>Hm(e)).join(",");{const e=r.filters.map(t=>Hm(t)).join(",");return`${r.op}(${e})`}}function Ew(r,e){return r instanceof Ct?function(s,o){return o instanceof Ct&&s.op===o.op&&s.field.isEqual(o.field)&&Nr(s.value,o.value)}(r,e):r instanceof sr?function(s,o){return o instanceof sr&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((u,h,p)=>u&&Ew(h,o.filters[p]),!0):!1}(r,e):void Ae()}function Tw(r){return r instanceof Ct?function(t){return`${t.field.canonicalString()} ${t.op} ${Do(t.value)}`}(r):r instanceof sr?function(t){return t.op.toString()+" {"+t.getFilters().map(Tw).join(" ,")+"}"}(r):"Filter"}class VN extends Ct{constructor(e,t,s){super(e,t,s),this.key=_e.fromName(s.referenceValue)}matches(e){const t=_e.comparator(e.key,this.key);return this.matchesComparison(t)}}class LN extends Ct{constructor(e,t){super(e,"in",t),this.keys=bw("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class UN extends Ct{constructor(e,t){super(e,"not-in",t),this.keys=bw("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function bw(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>_e.fromName(s.referenceValue))}class jN extends Ct{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return kg(t)&&Nu(t.arrayValue,this.value)}}class zN extends Ct{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Nu(this.value.arrayValue,t)}}class qN extends Ct{constructor(e,t){super(e,"not-in",t)}matches(e){if(Nu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Nu(this.value.arrayValue,t)}}class BN extends Ct{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!kg(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>Nu(this.value.arrayValue,s))}}/**
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
 */class HN{constructor(e,t=null,s=[],o=[],u=null,h=null,p=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=h,this.endAt=p,this.le=null}}function jE(r,e=null,t=[],s=[],o=null,u=null,h=null){return new HN(r,e,t,s,o,u,h)}function Mg(r){const e=Ce(r);if(e.le===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>Hm(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(u){return u.field.canonicalString()+u.dir}(s)).join(","),Rf(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>Do(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>Do(s)).join(",")),e.le=t}return e.le}function Pg(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!MN(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!Ew(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!UE(r.startAt,e.startAt)&&UE(r.endAt,e.endAt)}function Fm(r){return _e.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class Wo{constructor(e,t=null,s=[],o=[],u=null,h="F",p=null,m=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=h,this.startAt=p,this.endAt=m,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function FN(r,e,t,s,o,u,h,p){return new Wo(r,e,t,s,o,u,h,p)}function Cf(r){return new Wo(r)}function zE(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function ww(r){return r.collectionGroup!==null}function Tu(r){const e=Ce(r);if(e.he===null){e.he=[];const t=new Set;for(const u of e.explicitOrderBy)e.he.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let p=new Pt(Xt.comparator);return h.filters.forEach(m=>{m.getFlattenedFilters().forEach(g=>{g.isInequality()&&(p=p.add(g.field))})}),p})(e).forEach(u=>{t.has(u.canonicalString())||u.isKeyField()||e.he.push(new Ou(u,s))}),t.has(Xt.keyField().canonicalString())||e.he.push(new Ou(Xt.keyField(),s))}return e.he}function xr(r){const e=Ce(r);return e.Pe||(e.Pe=GN(e,Tu(r))),e.Pe}function GN(r,e){if(r.limitType==="F")return jE(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(o=>{const u=o.dir==="desc"?"asc":"desc";return new Ou(o.field,u)});const t=r.endAt?new of(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new of(r.startAt.position,r.startAt.inclusive):null;return jE(r.path,r.collectionGroup,e,r.filters,r.limit,t,s)}}function Gm(r,e){const t=r.filters.concat([e]);return new Wo(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function $m(r,e,t){return new Wo(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function xf(r,e){return Pg(xr(r),xr(e))&&r.limitType===e.limitType}function Sw(r){return`${Mg(xr(r))}|lt:${r.limitType}`}function mo(r){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(o=>Tw(o)).join(", ")}]`),Rf(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(o=>function(h){return`${h.field.canonicalString()} (${h.dir})`}(o)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(o=>Do(o)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(o=>Do(o)).join(",")),`Target(${s})`}(xr(r))}; limitType=${r.limitType})`}function Df(r,e){return e.isFoundDocument()&&function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):_e.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)}(r,e)&&function(s,o){for(const u of Tu(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0}(r,e)&&function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0}(r,e)&&function(s,o){return!(s.startAt&&!function(h,p,m){const g=LE(h,p,m);return h.inclusive?g<=0:g<0}(s.startAt,Tu(s),o)||s.endAt&&!function(h,p,m){const g=LE(h,p,m);return h.inclusive?g>=0:g>0}(s.endAt,Tu(s),o))}(r,e)}function $N(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Aw(r){return(e,t)=>{let s=!1;for(const o of Tu(r)){const u=KN(o,e,t);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function KN(r,e,t){const s=r.field.isKeyField()?_e.comparator(e.key,t.key):function(u,h,p){const m=h.data.field(u),g=p.data.field(u);return m!==null&&g!==null?xo(m,g):Ae()}(r.field,e,t);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return Ae()}}/**
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
 */class ga{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){ms(this.inner,(t,s)=>{for(const[o,u]of s)e(o,u)})}isEmpty(){return lw(this.inner)}size(){return this.innerSize}}/**
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
 */const QN=new ft(_e.comparator);function mi(){return QN}const Rw=new ft(_e.comparator);function mu(...r){let e=Rw;for(const t of r)e=e.insert(t.key,t);return e}function Iw(r){let e=Rw;return r.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function ra(){return bu()}function Cw(){return bu()}function bu(){return new ga(r=>r.toString(),(r,e)=>r.isEqual(e))}const YN=new ft(_e.comparator),XN=new Pt(_e.comparator);function Le(...r){let e=XN;for(const t of r)e=e.add(t);return e}const WN=new Pt(Oe);function JN(){return WN}/**
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
 */function Vg(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:rf(e)?"-0":e}}function xw(r){return{integerValue:""+r}}function ZN(r,e){return RN(e)?xw(e):Vg(r,e)}/**
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
 */class Nf{constructor(){this._=void 0}}function eO(r,e,t){return r instanceof lf?function(o,u){const h={fields:{[hw]:{stringValue:cw},[dw]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Og(u)&&(u=If(u)),u&&(h.fields[fw]=u),{mapValue:h}}(t,e):r instanceof No?Nw(r,e):r instanceof Oo?Ow(r,e):function(o,u){const h=Dw(o,u),p=qE(h)+qE(o.Ie);return Bm(h)&&Bm(o.Ie)?xw(p):Vg(o.serializer,p)}(r,e)}function tO(r,e,t){return r instanceof No?Nw(r,e):r instanceof Oo?Ow(r,e):t}function Dw(r,e){return r instanceof uf?function(s){return Bm(s)||function(u){return!!u&&"doubleValue"in u}(s)}(e)?e:{integerValue:0}:null}class lf extends Nf{}class No extends Nf{constructor(e){super(),this.elements=e}}function Nw(r,e){const t=kw(e);for(const s of r.elements)t.some(o=>Nr(o,s))||t.push(s);return{arrayValue:{values:t}}}class Oo extends Nf{constructor(e){super(),this.elements=e}}function Ow(r,e){let t=kw(e);for(const s of r.elements)t=t.filter(o=>!Nr(o,s));return{arrayValue:{values:t}}}class uf extends Nf{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function qE(r){return Et(r.integerValue||r.doubleValue)}function kw(r){return kg(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
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
 */class Mw{constructor(e,t){this.field=e,this.transform=t}}function nO(r,e){return r.field.isEqual(e.field)&&function(s,o){return s instanceof No&&o instanceof No||s instanceof Oo&&o instanceof Oo?Co(s.elements,o.elements,Nr):s instanceof uf&&o instanceof uf?Nr(s.Ie,o.Ie):s instanceof lf&&o instanceof lf}(r.transform,e.transform)}class rO{constructor(e,t){this.version=e,this.transformResults=t}}class $n{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new $n}static exists(e){return new $n(void 0,e)}static updateTime(e){return new $n(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Uh(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Of{}function Pw(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new Lg(r.key,$n.none()):new Bu(r.key,r.data,$n.none());{const t=r.data,s=yn.empty();let o=new Pt(Xt.comparator);for(let u of e.fields)if(!o.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?s.delete(u):s.set(u,h),o=o.add(u)}return new gs(r.key,s,new Dn(o.toArray()),$n.none())}}function iO(r,e,t){r instanceof Bu?function(o,u,h){const p=o.value.clone(),m=HE(o.fieldTransforms,u,h.transformResults);p.setAll(m),u.convertToFoundDocument(h.version,p).setHasCommittedMutations()}(r,e,t):r instanceof gs?function(o,u,h){if(!Uh(o.precondition,u))return void u.convertToUnknownDocument(h.version);const p=HE(o.fieldTransforms,u,h.transformResults),m=u.data;m.setAll(Vw(o)),m.setAll(p),u.convertToFoundDocument(h.version,m).setHasCommittedMutations()}(r,e,t):function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()}(0,e,t)}function wu(r,e,t,s){return r instanceof Bu?function(u,h,p,m){if(!Uh(u.precondition,h))return p;const g=u.value.clone(),_=FE(u.fieldTransforms,m,h);return g.setAll(_),h.convertToFoundDocument(h.version,g).setHasLocalMutations(),null}(r,e,t,s):r instanceof gs?function(u,h,p,m){if(!Uh(u.precondition,h))return p;const g=FE(u.fieldTransforms,m,h),_=h.data;return _.setAll(Vw(u)),_.setAll(g),h.convertToFoundDocument(h.version,_).setHasLocalMutations(),p===null?null:p.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map(b=>b.field))}(r,e,t,s):function(u,h,p){return Uh(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):p}(r,e,t)}function sO(r,e){let t=null;for(const s of r.fieldTransforms){const o=e.data.field(s.field),u=Dw(s.transform,o||null);u!=null&&(t===null&&(t=yn.empty()),t.set(s.field,u))}return t||null}function BE(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&Co(s,o,(u,h)=>nO(u,h))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class Bu extends Of{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class gs extends Of{constructor(e,t,s,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function Vw(r){const e=new Map;return r.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=r.data.field(t);e.set(t,s)}}),e}function HE(r,e,t){const s=new Map;Ye(r.length===t.length);for(let o=0;o<t.length;o++){const u=r[o],h=u.transform,p=e.data.field(u.field);s.set(u.field,tO(h,p,t[o]))}return s}function FE(r,e,t){const s=new Map;for(const o of r){const u=o.transform,h=t.data.field(o.field);s.set(o.field,eO(u,h,e))}return s}class Lg extends Of{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class aO extends Of{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class oO{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&iO(u,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=wu(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=wu(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=Cw();return this.mutations.forEach(o=>{const u=e.get(o.key),h=u.overlayedDocument;let p=this.applyToLocalView(h,u.mutatedFields);p=t.has(o.key)?null:p;const m=Pw(h,p);m!==null&&s.set(o.key,m),h.isValidDocument()||h.convertToNoDocument(Ie.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Le())}isEqual(e){return this.batchId===e.batchId&&Co(this.mutations,e.mutations,(t,s)=>BE(t,s))&&Co(this.baseMutations,e.baseMutations,(t,s)=>BE(t,s))}}class Ug{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){Ye(e.mutations.length===s.length);let o=function(){return YN}();const u=e.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,s[h].version);return new Ug(e,t,s,o)}}/**
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
 */class lO{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class uO{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Rt,Be;function cO(r){switch(r){case ne.OK:return Ae();case ne.CANCELLED:case ne.UNKNOWN:case ne.DEADLINE_EXCEEDED:case ne.RESOURCE_EXHAUSTED:case ne.INTERNAL:case ne.UNAVAILABLE:case ne.UNAUTHENTICATED:return!1;case ne.INVALID_ARGUMENT:case ne.NOT_FOUND:case ne.ALREADY_EXISTS:case ne.PERMISSION_DENIED:case ne.FAILED_PRECONDITION:case ne.ABORTED:case ne.OUT_OF_RANGE:case ne.UNIMPLEMENTED:case ne.DATA_LOSS:return!0;default:return Ae()}}function Lw(r){if(r===void 0)return pi("GRPC error has no .code"),ne.UNKNOWN;switch(r){case Rt.OK:return ne.OK;case Rt.CANCELLED:return ne.CANCELLED;case Rt.UNKNOWN:return ne.UNKNOWN;case Rt.DEADLINE_EXCEEDED:return ne.DEADLINE_EXCEEDED;case Rt.RESOURCE_EXHAUSTED:return ne.RESOURCE_EXHAUSTED;case Rt.INTERNAL:return ne.INTERNAL;case Rt.UNAVAILABLE:return ne.UNAVAILABLE;case Rt.UNAUTHENTICATED:return ne.UNAUTHENTICATED;case Rt.INVALID_ARGUMENT:return ne.INVALID_ARGUMENT;case Rt.NOT_FOUND:return ne.NOT_FOUND;case Rt.ALREADY_EXISTS:return ne.ALREADY_EXISTS;case Rt.PERMISSION_DENIED:return ne.PERMISSION_DENIED;case Rt.FAILED_PRECONDITION:return ne.FAILED_PRECONDITION;case Rt.ABORTED:return ne.ABORTED;case Rt.OUT_OF_RANGE:return ne.OUT_OF_RANGE;case Rt.UNIMPLEMENTED:return ne.UNIMPLEMENTED;case Rt.DATA_LOSS:return ne.DATA_LOSS;default:return Ae()}}(Be=Rt||(Rt={}))[Be.OK=0]="OK",Be[Be.CANCELLED=1]="CANCELLED",Be[Be.UNKNOWN=2]="UNKNOWN",Be[Be.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Be[Be.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Be[Be.NOT_FOUND=5]="NOT_FOUND",Be[Be.ALREADY_EXISTS=6]="ALREADY_EXISTS",Be[Be.PERMISSION_DENIED=7]="PERMISSION_DENIED",Be[Be.UNAUTHENTICATED=16]="UNAUTHENTICATED",Be[Be.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Be[Be.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Be[Be.ABORTED=10]="ABORTED",Be[Be.OUT_OF_RANGE=11]="OUT_OF_RANGE",Be[Be.UNIMPLEMENTED=12]="UNIMPLEMENTED",Be[Be.INTERNAL=13]="INTERNAL",Be[Be.UNAVAILABLE=14]="UNAVAILABLE",Be[Be.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const hO=new ss([4294967295,4294967295],0);function GE(r){const e=sw().encode(r),t=new Jb;return t.update(e),new Uint8Array(t.digest())}function $E(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new ss([t,s],0),new ss([o,u],0)]}class jg{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new gu(`Invalid padding: ${t}`);if(s<0)throw new gu(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new gu(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new gu(`Invalid padding when bitmap length is 0: ${t}`);this.Ee=8*e.length-t,this.de=ss.fromNumber(this.Ee)}Ae(e,t,s){let o=e.add(t.multiply(ss.fromNumber(s)));return o.compare(hO)===1&&(o=new ss([o.getBits(0),o.getBits(1)],0)),o.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const t=GE(e),[s,o]=$E(t);for(let u=0;u<this.hashCount;u++){const h=this.Ae(s,o,u);if(!this.Re(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new jg(u,o,t);return s.forEach(p=>h.insert(p)),h}insert(e){if(this.Ee===0)return;const t=GE(e),[s,o]=$E(t);for(let u=0;u<this.hashCount;u++){const h=this.Ae(s,o,u);this.Ve(h)}}Ve(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class gu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class kf{constructor(e,t,s,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,Hu.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new kf(Ie.min(),o,new ft(Oe),mi(),Le())}}class Hu{constructor(e,t,s,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Hu(s,t,Le(),Le(),Le())}}/**
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
 */class jh{constructor(e,t,s,o){this.me=e,this.removedTargetIds=t,this.key=s,this.fe=o}}class Uw{constructor(e,t){this.targetId=e,this.ge=t}}class jw{constructor(e,t,s=Wt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class KE{constructor(){this.pe=0,this.ye=QE(),this.we=Wt.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=Le(),t=Le(),s=Le();return this.ye.forEach((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:Ae()}}),new Hu(this.we,this.Se,e,t,s)}Me(){this.be=!1,this.ye=QE()}xe(e,t){this.be=!0,this.ye=this.ye.insert(e,t)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,Ye(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class fO{constructor(e){this.ke=e,this.qe=new Map,this.Qe=mi(),this.$e=wh(),this.Ue=wh(),this.Ke=new ft(Oe)}We(e){for(const t of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(t,e.fe):this.ze(t,e.key,e.fe);for(const t of e.removedTargetIds)this.ze(t,e.key,e.fe)}je(e){this.forEachTarget(e,t=>{const s=this.He(t);switch(e.state){case 0:this.Je(t)&&s.Ce(e.resumeToken);break;case 1:s.Be(),s.De||s.Me(),s.Ce(e.resumeToken);break;case 2:s.Be(),s.De||this.removeTarget(t);break;case 3:this.Je(t)&&(s.Le(),s.Ce(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),s.Ce(e.resumeToken));break;default:Ae()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.qe.forEach((s,o)=>{this.Je(o)&&t(o)})}Ze(e){const t=e.targetId,s=e.ge.count,o=this.Xe(t);if(o){const u=o.target;if(Fm(u))if(s===0){const h=new _e(u.path);this.ze(t,h,sn.newNoDocument(h,Ie.min()))}else Ye(s===1);else{const h=this.et(t);if(h!==s){const p=this.tt(e),m=p?this.nt(p,e,h):1;if(m!==0){this.Ye(t);const g=m===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,g)}}}}}tt(e){const t=e.ge.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=t;let h,p;try{h=us(s).toUint8Array()}catch(m){if(m instanceof uw)return Io("Decoding the base64 bloom filter in existence filter failed ("+m.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw m}try{p=new jg(h,o,u)}catch(m){return Io(m instanceof gu?"BloomFilter error: ":"Applying bloom filter failed: ",m),null}return p.Ee===0?null:p}nt(e,t,s){return t.ge.count===s-this.st(e,t.targetId)?0:2}st(e,t){const s=this.ke.getRemoteKeysForTarget(t);let o=0;return s.forEach(u=>{const h=this.ke.it(),p=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(p)||(this.ze(t,u,null),o++)}),o}ot(e){const t=new Map;this.qe.forEach((u,h)=>{const p=this.Xe(h);if(p){if(u.current&&Fm(p.target)){const m=new _e(p.target.path);this._t(m).has(h)||this.ut(h,m)||this.ze(h,m,sn.newNoDocument(m,e))}u.ve&&(t.set(h,u.Fe()),u.Me())}});let s=Le();this.Ue.forEach((u,h)=>{let p=!0;h.forEachWhile(m=>{const g=this.Xe(m);return!g||g.purpose==="TargetPurposeLimboResolution"||(p=!1,!1)}),p&&(s=s.add(u))}),this.Qe.forEach((u,h)=>h.setReadTime(e));const o=new kf(e,t,this.Ke,this.Qe,s);return this.Qe=mi(),this.$e=wh(),this.Ue=wh(),this.Ke=new ft(Oe),o}Ge(e,t){if(!this.Je(e))return;const s=this.ut(e,t.key)?2:0;this.He(e).xe(t.key,s),this.Qe=this.Qe.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e)),this.Ue=this.Ue.insert(t.key,this.ct(t.key).add(e))}ze(e,t,s){if(!this.Je(e))return;const o=this.He(e);this.ut(e,t)?o.xe(t,1):o.Oe(t),this.Ue=this.Ue.insert(t,this.ct(t).delete(e)),this.Ue=this.Ue.insert(t,this.ct(t).add(e)),s&&(this.Qe=this.Qe.insert(t,s))}removeTarget(e){this.qe.delete(e)}et(e){const t=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let t=this.qe.get(e);return t||(t=new KE,this.qe.set(e,t)),t}ct(e){let t=this.Ue.get(e);return t||(t=new Pt(Oe),this.Ue=this.Ue.insert(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new Pt(Oe),this.$e=this.$e.insert(e,t)),t}Je(e){const t=this.Xe(e)!==null;return t||fe("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){const t=this.qe.get(e);return t&&t.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new KE),this.ke.getRemoteKeysForTarget(e).forEach(t=>{this.ze(e,t,null)})}ut(e,t){return this.ke.getRemoteKeysForTarget(e).has(t)}}function wh(){return new ft(_e.comparator)}function QE(){return new ft(_e.comparator)}const dO={asc:"ASCENDING",desc:"DESCENDING"},pO={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},mO={and:"AND",or:"OR"};class gO{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Km(r,e){return r.useProto3Json||Rf(e)?e:{value:e}}function cf(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function zw(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function yO(r,e){return cf(r,e.toTimestamp())}function Dr(r){return Ye(!!r),Ie.fromTimestamp(function(t){const s=ls(t);return new Tt(s.seconds,s.nanos)}(r))}function zg(r,e){return Qm(r,e).canonicalString()}function Qm(r,e){const t=function(o){return new ot(["projects",o.projectId,"databases",o.database])}(r).child("documents");return e===void 0?t:t.child(e)}function qw(r){const e=ot.fromString(r);return Ye($w(e)),e}function Ym(r,e){return zg(r.databaseId,e.path)}function mm(r,e){const t=qw(e);if(t.get(1)!==r.databaseId.projectId)throw new de(ne.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new de(ne.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new _e(Hw(t))}function Bw(r,e){return zg(r.databaseId,e)}function vO(r){const e=qw(r);return e.length===4?ot.emptyPath():Hw(e)}function Xm(r){return new ot(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Hw(r){return Ye(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function YE(r,e,t){return{name:Ym(r,e),fields:t.value.mapValue.fields}}function _O(r,e){let t;if("targetChange"in e){e.targetChange;const s=function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:Ae()}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=function(g,_){return g.useProto3Json?(Ye(_===void 0||typeof _=="string"),Wt.fromBase64String(_||"")):(Ye(_===void 0||_ instanceof Buffer||_ instanceof Uint8Array),Wt.fromUint8Array(_||new Uint8Array))}(r,e.targetChange.resumeToken),h=e.targetChange.cause,p=h&&function(g){const _=g.code===void 0?ne.UNKNOWN:Lw(g.code);return new de(_,g.message||"")}(h);t=new jw(s,o,u,p||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=mm(r,s.document.name),u=Dr(s.document.updateTime),h=s.document.createTime?Dr(s.document.createTime):Ie.min(),p=new yn({mapValue:{fields:s.document.fields}}),m=sn.newFoundDocument(o,u,h,p),g=s.targetIds||[],_=s.removedTargetIds||[];t=new jh(g,_,m.key,m)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=mm(r,s.document),u=s.readTime?Dr(s.readTime):Ie.min(),h=sn.newNoDocument(o,u),p=s.removedTargetIds||[];t=new jh([],p,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=mm(r,s.document),u=s.removedTargetIds||[];t=new jh([],u,o,null)}else{if(!("filter"in e))return Ae();{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,h=new uO(o,u),p=s.targetId;t=new Uw(p,h)}}return t}function EO(r,e){let t;if(e instanceof Bu)t={update:YE(r,e.key,e.value)};else if(e instanceof Lg)t={delete:Ym(r,e.key)};else if(e instanceof gs)t={update:YE(r,e.key,e.data),updateMask:xO(e.fieldMask)};else{if(!(e instanceof aO))return Ae();t={verify:Ym(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(u,h){const p=h.transform;if(p instanceof lf)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(p instanceof No)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:p.elements}};if(p instanceof Oo)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:p.elements}};if(p instanceof uf)return{fieldPath:h.field.canonicalString(),increment:p.Ie};throw Ae()}(0,s))),e.precondition.isNone||(t.currentDocument=function(o,u){return u.updateTime!==void 0?{updateTime:yO(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:Ae()}(r,e.precondition)),t}function TO(r,e){return r&&r.length>0?(Ye(e!==void 0),r.map(t=>function(o,u){let h=o.updateTime?Dr(o.updateTime):Dr(u);return h.isEqual(Ie.min())&&(h=Dr(u)),new rO(h,o.transformResults||[])}(t,e))):[]}function bO(r,e){return{documents:[Bw(r,e.path)]}}function wO(r,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=Bw(r,o);const u=function(g){if(g.length!==0)return Gw(sr.create(g,"and"))}(e.filters);u&&(t.structuredQuery.where=u);const h=function(g){if(g.length!==0)return g.map(_=>function(w){return{field:go(w.field),direction:RO(w.dir)}}(_))}(e.orderBy);h&&(t.structuredQuery.orderBy=h);const p=Km(r,e.limit);return p!==null&&(t.structuredQuery.limit=p),e.startAt&&(t.structuredQuery.startAt=function(g){return{before:g.inclusive,values:g.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(g){return{before:!g.inclusive,values:g.position}}(e.endAt)),{ht:t,parent:o}}function SO(r){let e=vO(r.parent);const t=r.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){Ye(s===1);const _=t.from[0];_.allDescendants?o=_.collectionId:e=e.child(_.collectionId)}let u=[];t.where&&(u=function(b){const w=Fw(b);return w instanceof sr&&_w(w)?w.getFilters():[w]}(t.where));let h=[];t.orderBy&&(h=function(b){return b.map(w=>function(N){return new Ou(yo(N.field),function(U){switch(U){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(w))}(t.orderBy));let p=null;t.limit&&(p=function(b){let w;return w=typeof b=="object"?b.value:b,Rf(w)?null:w}(t.limit));let m=null;t.startAt&&(m=function(b){const w=!!b.before,C=b.values||[];return new of(C,w)}(t.startAt));let g=null;return t.endAt&&(g=function(b){const w=!b.before,C=b.values||[];return new of(C,w)}(t.endAt)),FN(e,o,h,u,p,"F",m,g)}function AO(r,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ae()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Fw(r){return r.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=yo(t.unaryFilter.field);return Ct.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=yo(t.unaryFilter.field);return Ct.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=yo(t.unaryFilter.field);return Ct.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=yo(t.unaryFilter.field);return Ct.create(h,"!=",{nullValue:"NULL_VALUE"});default:return Ae()}}(r):r.fieldFilter!==void 0?function(t){return Ct.create(yo(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ae()}}(t.fieldFilter.op),t.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(t){return sr.create(t.compositeFilter.filters.map(s=>Fw(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Ae()}}(t.compositeFilter.op))}(r):Ae()}function RO(r){return dO[r]}function IO(r){return pO[r]}function CO(r){return mO[r]}function go(r){return{fieldPath:r.canonicalString()}}function yo(r){return Xt.fromServerFormat(r.fieldPath)}function Gw(r){return r instanceof Ct?function(t){if(t.op==="=="){if(VE(t.value))return{unaryFilter:{field:go(t.field),op:"IS_NAN"}};if(PE(t.value))return{unaryFilter:{field:go(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(VE(t.value))return{unaryFilter:{field:go(t.field),op:"IS_NOT_NAN"}};if(PE(t.value))return{unaryFilter:{field:go(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:go(t.field),op:IO(t.op),value:t.value}}}(r):r instanceof sr?function(t){const s=t.getFilters().map(o=>Gw(o));return s.length===1?s[0]:{compositeFilter:{op:CO(t.op),filters:s}}}(r):Ae()}function xO(r){const e=[];return r.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function $w(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class ts{constructor(e,t,s,o,u=Ie.min(),h=Ie.min(),p=Wt.EMPTY_BYTE_STRING,m=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=p,this.expectedCount=m}withSequenceNumber(e){return new ts(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ts(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ts(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ts(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class DO{constructor(e){this.Tt=e}}function NO(r){const e=SO({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?$m(e,e.limit,"L"):e}/**
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
 */class OO{constructor(){this.Tn=new kO}addToCollectionParentIndex(e,t){return this.Tn.add(t),re.resolve()}getCollectionParents(e,t){return re.resolve(this.Tn.getEntries(t))}addFieldIndex(e,t){return re.resolve()}deleteFieldIndex(e,t){return re.resolve()}deleteAllFieldIndexes(e){return re.resolve()}createTargetIndexes(e,t){return re.resolve()}getDocumentsMatchingTarget(e,t){return re.resolve(null)}getIndexType(e,t){return re.resolve(0)}getFieldIndexes(e,t){return re.resolve([])}getNextCollectionGroupToUpdate(e){return re.resolve(null)}getMinOffset(e,t){return re.resolve(os.min())}getMinOffsetFromCollectionGroup(e,t){return re.resolve(os.min())}updateCollectionGroup(e,t,s){return re.resolve()}updateIndexEntries(e,t){return re.resolve()}}class kO{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new Pt(ot.comparator),u=!o.has(s);return this.index[t]=o.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new Pt(ot.comparator)).toArray()}}/**
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
 */const XE={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Kw=41943040;class gn{static withCacheSize(e){return new gn(e,gn.DEFAULT_COLLECTION_PERCENTILE,gn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
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
 */gn.DEFAULT_COLLECTION_PERCENTILE=10,gn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,gn.DEFAULT=new gn(Kw,gn.DEFAULT_COLLECTION_PERCENTILE,gn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),gn.DISABLED=new gn(-1,0,0);/**
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
 */class ko{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Un(){return new ko(0)}static Kn(){return new ko(-1)}}/**
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
 */const WE="LruGarbageCollector",MO=1048576;function JE([r,e],[t,s]){const o=Oe(r,t);return o===0?Oe(e,s):o}class PO{constructor(e){this.Hn=e,this.buffer=new Pt(JE),this.Jn=0}Yn(){return++this.Jn}Zn(e){const t=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();JE(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class VO{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){fe(WE,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Xo(t)?fe(WE,"Ignoring IndexedDB error during garbage collection: ",t):await Yo(t)}await this.er(3e5)})}}class LO{constructor(e,t){this.tr=e,this.params=t}calculateTargetCount(e,t){return this.tr.nr(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return re.resolve(Af.ae);const s=new PO(t);return this.tr.forEachTarget(e,o=>s.Zn(o.sequenceNumber)).next(()=>this.tr.rr(e,o=>s.Zn(o))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.tr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.tr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(fe("LruGarbageCollector","Garbage collection skipped; disabled"),re.resolve(XE)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(fe("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),XE):this.ir(e,t))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,t){let s,o,u,h,p,m,g;const _=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(b=>(b>this.params.maximumSequenceNumbersToCollect?(fe("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${b}`),o=this.params.maximumSequenceNumbersToCollect):o=b,h=Date.now(),this.nthSequenceNumber(e,o))).next(b=>(s=b,p=Date.now(),this.removeTargets(e,s,t))).next(b=>(u=b,m=Date.now(),this.removeOrphanedDocuments(e,s))).next(b=>(g=Date.now(),po()<=Ve.DEBUG&&fe("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-_}ms
	Determined least recently used ${o} in `+(p-h)+`ms
	Removed ${u} targets in `+(m-p)+`ms
	Removed ${b} documents in `+(g-m)+`ms
Total Duration: ${g-_}ms`),re.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:b})))}}function UO(r,e){return new LO(r,e)}/**
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
 */class jO{constructor(){this.changes=new ga(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,sn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?re.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class zO{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class qO{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(s=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(s!==null&&wu(s.mutation,o,Dn.empty(),Tt.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,Le()).next(()=>s))}getLocalViewOfDocuments(e,t,s=Le()){const o=ra();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,s).next(u=>{let h=mu();return u.forEach((p,m)=>{h=h.insert(p,m.overlayedDocument)}),h}))}getOverlayedDocuments(e,t){const s=ra();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,Le()))}populateOverlays(e,t,s){const o=[];return s.forEach(u=>{t.has(u)||o.push(u)}),this.documentOverlayCache.getOverlays(e,o).next(u=>{u.forEach((h,p)=>{t.set(h,p)})})}computeViews(e,t,s,o){let u=mi();const h=bu(),p=function(){return bu()}();return t.forEach((m,g)=>{const _=s.get(g.key);o.has(g.key)&&(_===void 0||_.mutation instanceof gs)?u=u.insert(g.key,g):_!==void 0?(h.set(g.key,_.mutation.getFieldMask()),wu(_.mutation,g,_.mutation.getFieldMask(),Tt.now())):h.set(g.key,Dn.empty())}),this.recalculateAndSaveOverlays(e,u).next(m=>(m.forEach((g,_)=>h.set(g,_)),t.forEach((g,_)=>{var b;return p.set(g,new zO(_,(b=h.get(g))!==null&&b!==void 0?b:null))}),p))}recalculateAndSaveOverlays(e,t){const s=bu();let o=new ft((h,p)=>h-p),u=Le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(h=>{for(const p of h)p.keys().forEach(m=>{const g=t.get(m);if(g===null)return;let _=s.get(m)||Dn.empty();_=p.applyToLocalView(g,_),s.set(m,_);const b=(o.get(p.batchId)||Le()).add(m);o=o.insert(p.batchId,b)})}).next(()=>{const h=[],p=o.getReverseIterator();for(;p.hasNext();){const m=p.getNext(),g=m.key,_=m.value,b=Cw();_.forEach(w=>{if(!u.has(w)){const C=Pw(t.get(w),s.get(w));C!==null&&b.set(w,C),u=u.add(w)}}),h.push(this.documentOverlayCache.saveOverlays(e,g,b))}return re.waitFor(h)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,o){return function(h){return _e.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):ww(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next(u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-u.size):re.resolve(ra());let p=Cu,m=u;return h.next(g=>re.forEach(g,(_,b)=>(p<b.largestBatchId&&(p=b.largestBatchId),u.get(_)?re.resolve():this.remoteDocumentCache.getEntry(e,_).next(w=>{m=m.insert(_,w)}))).next(()=>this.populateOverlays(e,g,u)).next(()=>this.computeViews(e,m,g,Le())).next(_=>({batchId:p,changes:Iw(_)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new _e(t)).next(s=>{let o=mu();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const u=t.collectionGroup;let h=mu();return this.indexManager.getCollectionParents(e,u).next(p=>re.forEach(p,m=>{const g=function(b,w){return new Wo(w,null,b.explicitOrderBy.slice(),b.filters.slice(),b.limit,b.limitType,b.startAt,b.endAt)}(t,m.child(u));return this.getDocumentsMatchingCollectionQuery(e,g,s,o).next(_=>{_.forEach((b,w)=>{h=h.insert(b,w)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(e,t,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,o))).next(h=>{u.forEach((m,g)=>{const _=g.getKey();h.get(_)===null&&(h=h.insert(_,sn.newInvalidDocument(_)))});let p=mu();return h.forEach((m,g)=>{const _=u.get(m);_!==void 0&&wu(_.mutation,g,Dn.empty(),Tt.now()),Df(t,g)&&(p=p.insert(m,g))}),p})}}/**
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
 */class BO{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,t){return re.resolve(this.dr.get(t))}saveBundleMetadata(e,t){return this.dr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:Dr(o.createTime)}}(t)),re.resolve()}getNamedQuery(e,t){return re.resolve(this.Ar.get(t))}saveNamedQuery(e,t){return this.Ar.set(t.name,function(o){return{name:o.name,query:NO(o.bundledQuery),readTime:Dr(o.readTime)}}(t)),re.resolve()}}/**
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
 */class HO{constructor(){this.overlays=new ft(_e.comparator),this.Rr=new Map}getOverlay(e,t){return re.resolve(this.overlays.get(t))}getOverlays(e,t){const s=ra();return re.forEach(t,o=>this.getOverlay(e,o).next(u=>{u!==null&&s.set(o,u)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((o,u)=>{this.Et(e,t,u)}),re.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.Rr.get(s);return o!==void 0&&(o.forEach(u=>this.overlays=this.overlays.remove(u)),this.Rr.delete(s)),re.resolve()}getOverlaysForCollection(e,t,s){const o=ra(),u=t.length+1,h=new _e(t.child("")),p=this.overlays.getIteratorFrom(h);for(;p.hasNext();){const m=p.getNext().value,g=m.getKey();if(!t.isPrefixOf(g.path))break;g.path.length===u&&m.largestBatchId>s&&o.set(m.getKey(),m)}return re.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let u=new ft((g,_)=>g-_);const h=this.overlays.getIterator();for(;h.hasNext();){const g=h.getNext().value;if(g.getKey().getCollectionGroup()===t&&g.largestBatchId>s){let _=u.get(g.largestBatchId);_===null&&(_=ra(),u=u.insert(g.largestBatchId,_)),_.set(g.getKey(),g)}}const p=ra(),m=u.getIterator();for(;m.hasNext()&&(m.getNext().value.forEach((g,_)=>p.set(g,_)),!(p.size()>=o)););return re.resolve(p)}Et(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.Rr.get(o.largestBatchId).delete(s.key);this.Rr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new lO(t,s));let u=this.Rr.get(t);u===void 0&&(u=Le(),this.Rr.set(t,u)),this.Rr.set(t,u.add(s.key))}}/**
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
 */class FO{constructor(){this.sessionToken=Wt.EMPTY_BYTE_STRING}getSessionToken(e){return re.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,re.resolve()}}/**
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
 */class qg{constructor(){this.Vr=new Pt(Bt.mr),this.gr=new Pt(Bt.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,t){const s=new Bt(e,t);this.Vr=this.Vr.add(s),this.gr=this.gr.add(s)}yr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.wr(new Bt(e,t))}Sr(e,t){e.forEach(s=>this.removeReference(s,t))}br(e){const t=new _e(new ot([])),s=new Bt(t,e),o=new Bt(t,e+1),u=[];return this.gr.forEachInRange([s,o],h=>{this.wr(h),u.push(h.key)}),u}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const t=new _e(new ot([])),s=new Bt(t,e),o=new Bt(t,e+1);let u=Le();return this.gr.forEachInRange([s,o],h=>{u=u.add(h.key)}),u}containsKey(e){const t=new Bt(e,0),s=this.Vr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Bt{constructor(e,t){this.key=e,this.Cr=t}static mr(e,t){return _e.comparator(e.key,t.key)||Oe(e.Cr,t.Cr)}static pr(e,t){return Oe(e.Cr,t.Cr)||_e.comparator(e.key,t.key)}}/**
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
 */class GO{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Fr=1,this.Mr=new Pt(Bt.mr)}checkEmpty(e){return re.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const u=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new oO(u,t,s,o);this.mutationQueue.push(h);for(const p of o)this.Mr=this.Mr.add(new Bt(p.key,u)),this.indexManager.addToCollectionParentIndex(e,p.key.path.popLast());return re.resolve(h)}lookupMutationBatch(e,t){return re.resolve(this.Or(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.Nr(s),u=o<0?0:o;return re.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return re.resolve(this.mutationQueue.length===0?Ng:this.Fr-1)}getAllMutationBatches(e){return re.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Bt(t,0),o=new Bt(t,Number.POSITIVE_INFINITY),u=[];return this.Mr.forEachInRange([s,o],h=>{const p=this.Or(h.Cr);u.push(p)}),re.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Pt(Oe);return t.forEach(o=>{const u=new Bt(o,0),h=new Bt(o,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([u,h],p=>{s=s.add(p.Cr)})}),re.resolve(this.Br(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let u=s;_e.isDocumentKey(u)||(u=u.child(""));const h=new Bt(new _e(u),0);let p=new Pt(Oe);return this.Mr.forEachWhile(m=>{const g=m.key.path;return!!s.isPrefixOf(g)&&(g.length===o&&(p=p.add(m.Cr)),!0)},h),re.resolve(this.Br(p))}Br(e){const t=[];return e.forEach(s=>{const o=this.Or(s);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){Ye(this.Lr(t.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Mr;return re.forEach(t.mutations,o=>{const u=new Bt(o.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.Mr=s})}qn(e){}containsKey(e,t){const s=new Bt(t,0),o=this.Mr.firstAfterOrEqual(s);return re.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,re.resolve()}Lr(e,t){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const t=this.Nr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class $O{constructor(e){this.kr=e,this.docs=function(){return new ft(_e.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),u=o?o.size:0,h=this.kr(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return re.resolve(s?s.document.mutableCopy():sn.newInvalidDocument(t))}getEntries(e,t){let s=mi();return t.forEach(o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():sn.newInvalidDocument(o))}),re.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let u=mi();const h=t.path,p=new _e(h.child("__id-9223372036854775808__")),m=this.docs.getIteratorFrom(p);for(;m.hasNext();){const{key:g,value:{document:_}}=m.getNext();if(!h.isPrefixOf(g.path))break;g.path.length>h.length+1||bN(TN(_),s)<=0||(o.has(_.key)||Df(t,_))&&(u=u.insert(_.key,_.mutableCopy()))}return re.resolve(u)}getAllFromCollectionGroup(e,t,s,o){Ae()}qr(e,t){return re.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new KO(this)}getSize(e){return re.resolve(this.size)}}class KO extends jO{constructor(e){super(),this.Ir=e}applyChanges(e){const t=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?t.push(this.Ir.addEntry(e,o)):this.Ir.removeEntry(s)}),re.waitFor(t)}getFromCache(e,t){return this.Ir.getEntry(e,t)}getAllFromCache(e,t){return this.Ir.getEntries(e,t)}}/**
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
 */class QO{constructor(e){this.persistence=e,this.Qr=new ga(t=>Mg(t),Pg),this.lastRemoteSnapshotVersion=Ie.min(),this.highestTargetId=0,this.$r=0,this.Ur=new qg,this.targetCount=0,this.Kr=ko.Un()}forEachTarget(e,t){return this.Qr.forEach((s,o)=>t(o)),re.resolve()}getLastRemoteSnapshotVersion(e){return re.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return re.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Kr.next(),re.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.$r&&(this.$r=t),re.resolve()}zn(e){this.Qr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Kr=new ko(t),this.highestTargetId=t),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,t){return this.zn(t),this.targetCount+=1,re.resolve()}updateTargetData(e,t){return this.zn(t),re.resolve()}removeTargetData(e,t){return this.Qr.delete(t.target),this.Ur.br(t.targetId),this.targetCount-=1,re.resolve()}removeTargets(e,t,s){let o=0;const u=[];return this.Qr.forEach((h,p)=>{p.sequenceNumber<=t&&s.get(p.targetId)===null&&(this.Qr.delete(h),u.push(this.removeMatchingKeysForTargetId(e,p.targetId)),o++)}),re.waitFor(u).next(()=>o)}getTargetCount(e){return re.resolve(this.targetCount)}getTargetData(e,t){const s=this.Qr.get(t)||null;return re.resolve(s)}addMatchingKeys(e,t,s){return this.Ur.yr(t,s),re.resolve()}removeMatchingKeys(e,t,s){this.Ur.Sr(t,s);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach(h=>{u.push(o.markPotentiallyOrphaned(e,h))}),re.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this.Ur.br(t),re.resolve()}getMatchingKeysForTargetId(e,t){const s=this.Ur.vr(t);return re.resolve(s)}containsKey(e,t){return re.resolve(this.Ur.containsKey(t))}}/**
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
 */class Qw{constructor(e,t){this.Wr={},this.overlays={},this.Gr=new Af(0),this.zr=!1,this.zr=!0,this.jr=new FO,this.referenceDelegate=e(this),this.Hr=new QO(this),this.indexManager=new OO,this.remoteDocumentCache=function(o){return new $O(o)}(s=>this.referenceDelegate.Jr(s)),this.serializer=new DO(t),this.Yr=new BO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new HO,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.Wr[e.toKey()];return s||(s=new GO(t,this.referenceDelegate),this.Wr[e.toKey()]=s),s}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,t,s){fe("MemoryPersistence","Starting transaction:",e);const o=new YO(this.Gr.next());return this.referenceDelegate.Zr(),s(o).next(u=>this.referenceDelegate.Xr(o).next(()=>u)).toPromise().then(u=>(o.raiseOnCommittedEvent(),u))}ei(e,t){return re.or(Object.values(this.Wr).map(s=>()=>s.containsKey(e,t)))}}class YO extends SN{constructor(e){super(),this.currentSequenceNumber=e}}class Bg{constructor(e){this.persistence=e,this.ti=new qg,this.ni=null}static ri(e){return new Bg(e)}get ii(){if(this.ni)return this.ni;throw Ae()}addReference(e,t,s){return this.ti.addReference(s,t),this.ii.delete(s.toString()),re.resolve()}removeReference(e,t,s){return this.ti.removeReference(s,t),this.ii.add(s.toString()),re.resolve()}markPotentiallyOrphaned(e,t){return this.ii.add(t.toString()),re.resolve()}removeTarget(e,t){this.ti.br(t.targetId).forEach(o=>this.ii.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(u=>this.ii.add(u.toString()))}).next(()=>s.removeTargetData(e,t))}Zr(){this.ni=new Set}Xr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return re.forEach(this.ii,s=>{const o=_e.fromPath(s);return this.si(e,o).next(u=>{u||t.removeEntry(o,Ie.min())})}).next(()=>(this.ni=null,t.apply(e)))}updateLimboDocument(e,t){return this.si(e,t).next(s=>{s?this.ii.delete(t.toString()):this.ii.add(t.toString())})}Jr(e){return 0}si(e,t){return re.or([()=>re.resolve(this.ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.ei(e,t)])}}class hf{constructor(e,t){this.persistence=e,this.oi=new ga(s=>IN(s.path),(s,o)=>s.isEqual(o)),this.garbageCollector=UO(this,t)}static ri(e,t){return new hf(e,t)}Zr(){}Xr(e){return re.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}nr(e){const t=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(o=>s+o))}sr(e){let t=0;return this.rr(e,s=>{t++}).next(()=>t)}rr(e,t){return re.forEach(this.oi,(s,o)=>this.ar(e,s,o).next(u=>u?re.resolve():t(o)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.qr(e,h=>this.ar(e,h,t).next(p=>{p||(s++,u.removeEntry(h,Ie.min()))})).next(()=>u.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.oi.set(t,e.currentSequenceNumber),re.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.oi.set(s,e.currentSequenceNumber),re.resolve()}removeReference(e,t,s){return this.oi.set(s,e.currentSequenceNumber),re.resolve()}updateLimboDocument(e,t){return this.oi.set(t,e.currentSequenceNumber),re.resolve()}Jr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Vh(e.data.value)),t}ar(e,t,s){return re.or([()=>this.persistence.ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.oi.get(t);return re.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Hg{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Hi=s,this.Ji=o}static Yi(e,t){let s=Le(),o=Le();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new Hg(e,t.fromCache,s,o)}}/**
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
 */class XO{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class WO{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return DI()?8:AN(on())>0?6:4}()}initialize(e,t){this.ns=e,this.indexManager=t,this.Zi=!0}getDocumentsMatchingQuery(e,t,s,o){const u={result:null};return this.rs(e,t).next(h=>{u.result=h}).next(()=>{if(!u.result)return this.ss(e,t,o,s).next(h=>{u.result=h})}).next(()=>{if(u.result)return;const h=new XO;return this._s(e,t,h).next(p=>{if(u.result=p,this.Xi)return this.us(e,t,h,p.size)})}).next(()=>u.result)}us(e,t,s,o){return s.documentReadCount<this.es?(po()<=Ve.DEBUG&&fe("QueryEngine","SDK will not create cache indexes for query:",mo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),re.resolve()):(po()<=Ve.DEBUG&&fe("QueryEngine","Query:",mo(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.ts*o?(po()<=Ve.DEBUG&&fe("QueryEngine","The SDK decides to create cache indexes for query:",mo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,xr(t))):re.resolve())}rs(e,t){if(zE(t))return re.resolve(null);let s=xr(t);return this.indexManager.getIndexType(e,s).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=$m(t,null,"F"),s=xr(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(u=>{const h=Le(...u);return this.ns.getDocuments(e,h).next(p=>this.indexManager.getMinOffset(e,s).next(m=>{const g=this.cs(t,p);return this.ls(t,g,h,m.readTime)?this.rs(e,$m(t,null,"F")):this.hs(e,g,t,m)}))})))}ss(e,t,s,o){return zE(t)||o.isEqual(Ie.min())?re.resolve(null):this.ns.getDocuments(e,s).next(u=>{const h=this.cs(t,u);return this.ls(t,h,s,o)?re.resolve(null):(po()<=Ve.DEBUG&&fe("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),mo(t)),this.hs(e,h,t,EN(o,Cu)).next(p=>p))})}cs(e,t){let s=new Pt(Aw(e));return t.forEach((o,u)=>{Df(e,u)&&(s=s.add(u))}),s}ls(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}_s(e,t,s){return po()<=Ve.DEBUG&&fe("QueryEngine","Using full collection scan to execute query:",mo(t)),this.ns.getDocumentsMatchingQuery(e,t,os.min(),s)}hs(e,t,s,o){return this.ns.getDocumentsMatchingQuery(e,s,o).next(u=>(t.forEach(h=>{u=u.insert(h.key,h)}),u))}}/**
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
 */const Fg="LocalStore",JO=3e8;class ZO{constructor(e,t,s,o){this.persistence=e,this.Ps=t,this.serializer=o,this.Ts=new ft(Oe),this.Is=new ga(u=>Mg(u),Pg),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(s)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new qO(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ts))}}function ek(r,e,t,s){return new ZO(r,e,t,s)}async function Yw(r,e){const t=Ce(r);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next(u=>(o=u,t.As(e),t.mutationQueue.getAllMutationBatches(s))).next(u=>{const h=[],p=[];let m=Le();for(const g of o){h.push(g.batchId);for(const _ of g.mutations)m=m.add(_.key)}for(const g of u){p.push(g.batchId);for(const _ of g.mutations)m=m.add(_.key)}return t.localDocuments.getDocuments(s,m).next(g=>({Rs:g,removedBatchIds:h,addedBatchIds:p}))})})}function tk(r,e){const t=Ce(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const o=e.batch.keys(),u=t.ds.newChangeBuffer({trackRemovals:!0});return function(p,m,g,_){const b=g.batch,w=b.keys();let C=re.resolve();return w.forEach(N=>{C=C.next(()=>_.getEntry(m,N)).next(G=>{const U=g.docVersions.get(N);Ye(U!==null),G.version.compareTo(U)<0&&(b.applyToRemoteDocument(G,g),G.isValidDocument()&&(G.setReadTime(g.commitVersion),_.addEntry(G)))})}),C.next(()=>p.mutationQueue.removeMutationBatch(m,b))}(t,s,e,u).next(()=>u.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(p){let m=Le();for(let g=0;g<p.mutationResults.length;++g)p.mutationResults[g].transformResults.length>0&&(m=m.add(p.batch.mutations[g].key));return m}(e))).next(()=>t.localDocuments.getDocuments(s,o))})}function Xw(r){const e=Ce(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Hr.getLastRemoteSnapshotVersion(t))}function nk(r,e){const t=Ce(r),s=e.snapshotVersion;let o=t.Ts;return t.persistence.runTransaction("Apply remote event","readwrite-primary",u=>{const h=t.ds.newChangeBuffer({trackRemovals:!0});o=t.Ts;const p=[];e.targetChanges.forEach((_,b)=>{const w=o.get(b);if(!w)return;p.push(t.Hr.removeMatchingKeys(u,_.removedDocuments,b).next(()=>t.Hr.addMatchingKeys(u,_.addedDocuments,b)));let C=w.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(b)!==null?C=C.withResumeToken(Wt.EMPTY_BYTE_STRING,Ie.min()).withLastLimboFreeSnapshotVersion(Ie.min()):_.resumeToken.approximateByteSize()>0&&(C=C.withResumeToken(_.resumeToken,s)),o=o.insert(b,C),function(G,U,H){return G.resumeToken.approximateByteSize()===0||U.snapshotVersion.toMicroseconds()-G.snapshotVersion.toMicroseconds()>=JO?!0:H.addedDocuments.size+H.modifiedDocuments.size+H.removedDocuments.size>0}(w,C,_)&&p.push(t.Hr.updateTargetData(u,C))});let m=mi(),g=Le();if(e.documentUpdates.forEach(_=>{e.resolvedLimboDocuments.has(_)&&p.push(t.persistence.referenceDelegate.updateLimboDocument(u,_))}),p.push(rk(u,h,e.documentUpdates).next(_=>{m=_.Vs,g=_.fs})),!s.isEqual(Ie.min())){const _=t.Hr.getLastRemoteSnapshotVersion(u).next(b=>t.Hr.setTargetsMetadata(u,u.currentSequenceNumber,s));p.push(_)}return re.waitFor(p).next(()=>h.apply(u)).next(()=>t.localDocuments.getLocalViewOfDocuments(u,m,g)).next(()=>m)}).then(u=>(t.Ts=o,u))}function rk(r,e,t){let s=Le(),o=Le();return t.forEach(u=>s=s.add(u)),e.getEntries(r,s).next(u=>{let h=mi();return t.forEach((p,m)=>{const g=u.get(p);m.isFoundDocument()!==g.isFoundDocument()&&(o=o.add(p)),m.isNoDocument()&&m.version.isEqual(Ie.min())?(e.removeEntry(p,m.readTime),h=h.insert(p,m)):!g.isValidDocument()||m.version.compareTo(g.version)>0||m.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(m),h=h.insert(p,m)):fe(Fg,"Ignoring outdated watch update for ",p,". Current version:",g.version," Watch version:",m.version)}),{Vs:h,fs:o}})}function ik(r,e){const t=Ce(r);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=Ng),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function sk(r,e){const t=Ce(r);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let o;return t.Hr.getTargetData(s,e).next(u=>u?(o=u,re.resolve(o)):t.Hr.allocateTargetId(s).next(h=>(o=new ts(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.Hr.addTargetData(s,o).next(()=>o))))}).then(s=>{const o=t.Ts.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Ts=t.Ts.insert(s.targetId,s),t.Is.set(e,s.targetId)),s})}async function Wm(r,e,t){const s=Ce(r),o=s.Ts.get(e),u=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",u,h=>s.persistence.referenceDelegate.removeTarget(h,o))}catch(h){if(!Xo(h))throw h;fe(Fg,`Failed to update sequence numbers for target ${e}: ${h}`)}s.Ts=s.Ts.remove(e),s.Is.delete(o.target)}function ZE(r,e,t){const s=Ce(r);let o=Ie.min(),u=Le();return s.persistence.runTransaction("Execute query","readwrite",h=>function(m,g,_){const b=Ce(m),w=b.Is.get(_);return w!==void 0?re.resolve(b.Ts.get(w)):b.Hr.getTargetData(g,_)}(s,h,xr(e)).next(p=>{if(p)return o=p.lastLimboFreeSnapshotVersion,s.Hr.getMatchingKeysForTargetId(h,p.targetId).next(m=>{u=m})}).next(()=>s.Ps.getDocumentsMatchingQuery(h,e,t?o:Ie.min(),t?u:Le())).next(p=>(ak(s,$N(e),p),{documents:p,gs:u})))}function ak(r,e,t){let s=r.Es.get(e)||Ie.min();t.forEach((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)}),r.Es.set(e,s)}class eT{constructor(){this.activeTargetIds=JN()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}bs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ok{constructor(){this.ho=new eT,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,t,s){this.Po[e]=t}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new eT,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class lk{To(e){}shutdown(){}}/**
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
 */const tT="ConnectivityMonitor";class nT{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){fe(tT,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){fe(tT,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Sh=null;function Jm(){return Sh===null?Sh=function(){return 268435456+Math.round(2147483648*Math.random())}():Sh++,"0x"+Sh.toString(16)}/**
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
 */const gm="RestConnection",uk={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class ck{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${s}/databases/${o}`,this.wo=this.databaseId.database===sf?`project_id=${s}`:`project_id=${s}&database_id=${o}`}So(e,t,s,o,u){const h=Jm(),p=this.bo(e,t.toUriEncodedString());fe(gm,`Sending RPC '${e}' ${h}:`,p,s);const m={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(m,o,u),this.vo(e,p,m,s).then(g=>(fe(gm,`Received RPC '${e}' ${h}: `,g),g),g=>{throw Io(gm,`RPC '${e}' ${h} failed with error: `,g,"url: ",p,"request:",s),g})}Co(e,t,s,o,u,h){return this.So(e,t,s,o,u)}Do(e,t,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Qo}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((o,u)=>e[u]=o),s&&s.headers.forEach((o,u)=>e[u]=o)}bo(e,t){const s=uk[e];return`${this.po}/v1/${t}:${s}`}terminate(){}}/**
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
 */class hk{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Uo(e){this.ko(e)}Ko(e){this.qo(e)}}/**
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
 */const nn="WebChannelConnection";class fk extends ck{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,s,o){const u=Jm();return new Promise((h,p)=>{const m=new Zb;m.setWithCredentials(!0),m.listenOnce(ew.COMPLETE,()=>{try{switch(m.getLastErrorCode()){case Ph.NO_ERROR:const _=m.getResponseJson();fe(nn,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(_)),h(_);break;case Ph.TIMEOUT:fe(nn,`RPC '${e}' ${u} timed out`),p(new de(ne.DEADLINE_EXCEEDED,"Request time out"));break;case Ph.HTTP_ERROR:const b=m.getStatus();if(fe(nn,`RPC '${e}' ${u} failed with status:`,b,"response text:",m.getResponseText()),b>0){let w=m.getResponseJson();Array.isArray(w)&&(w=w[0]);const C=w==null?void 0:w.error;if(C&&C.status&&C.message){const N=function(U){const H=U.toLowerCase().replace(/_/g,"-");return Object.values(ne).indexOf(H)>=0?H:ne.UNKNOWN}(C.status);p(new de(N,C.message))}else p(new de(ne.UNKNOWN,"Server responded with status "+m.getStatus()))}else p(new de(ne.UNAVAILABLE,"Connection failed."));break;default:Ae()}}finally{fe(nn,`RPC '${e}' ${u} completed.`)}});const g=JSON.stringify(o);fe(nn,`RPC '${e}' ${u} sending request:`,o),m.send(t,"POST",g,s,15)})}Wo(e,t,s){const o=Jm(),u=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=rw(),p=nw(),m={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(m.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(m.useFetchStreams=!0),this.Do(m.initMessageHeaders,t,s),m.encodeInitMessageHeaders=!0;const _=u.join("");fe(nn,`Creating RPC '${e}' stream ${o}: ${_}`,m);const b=h.createWebChannel(_,m);let w=!1,C=!1;const N=new hk({Fo:U=>{C?fe(nn,`Not sending because RPC '${e}' stream ${o} is closed:`,U):(w||(fe(nn,`Opening RPC '${e}' stream ${o} transport.`),b.open(),w=!0),fe(nn,`RPC '${e}' stream ${o} sending:`,U),b.send(U))},Mo:()=>b.close()}),G=(U,H,J)=>{U.listen(H,Q=>{try{J(Q)}catch(le){setTimeout(()=>{throw le},0)}})};return G(b,pu.EventType.OPEN,()=>{C||(fe(nn,`RPC '${e}' stream ${o} transport opened.`),N.Qo())}),G(b,pu.EventType.CLOSE,()=>{C||(C=!0,fe(nn,`RPC '${e}' stream ${o} transport closed`),N.Uo())}),G(b,pu.EventType.ERROR,U=>{C||(C=!0,Io(nn,`RPC '${e}' stream ${o} transport errored:`,U),N.Uo(new de(ne.UNAVAILABLE,"The operation could not be completed")))}),G(b,pu.EventType.MESSAGE,U=>{var H;if(!C){const J=U.data[0];Ye(!!J);const Q=J,le=(Q==null?void 0:Q.error)||((H=Q[0])===null||H===void 0?void 0:H.error);if(le){fe(nn,`RPC '${e}' stream ${o} received error:`,le);const oe=le.status;let ue=function(x){const O=Rt[x];if(O!==void 0)return Lw(O)}(oe),D=le.message;ue===void 0&&(ue=ne.INTERNAL,D="Unknown error status: "+oe+" with message "+le.message),C=!0,N.Uo(new de(ue,D)),b.close()}else fe(nn,`RPC '${e}' stream ${o} received:`,J),N.Ko(J)}}),G(p,tw.STAT_EVENT,U=>{U.stat===jm.PROXY?fe(nn,`RPC '${e}' stream ${o} detected buffering proxy`):U.stat===jm.NOPROXY&&fe(nn,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{N.$o()},0),N}}function ym(){return typeof document<"u"?document:null}/**
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
 */function Mf(r){return new gO(r,!0)}/**
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
 */class Ww{constructor(e,t,s=1e3,o=1.5,u=6e4){this.Ti=e,this.timerId=t,this.Go=s,this.zo=o,this.jo=u,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const t=Math.floor(this.Ho+this.e_()),s=Math.max(0,Date.now()-this.Yo),o=Math.max(0,t-s);o>0&&fe("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Ho} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,o,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
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
 */const rT="PersistentStream";class Jw{constructor(e,t,s,o,u,h,p,m){this.Ti=e,this.n_=s,this.r_=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=p,this.listener=m,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new Ww(e,t)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,t){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():t&&t.code===ne.RESOURCE_EXHAUSTED?(pi(t.toString()),pi("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):t&&t.code===ne.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(t)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),t=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.i_===t&&this.V_(s,o)},s=>{e(()=>{const o=new de(ne.UNKNOWN,"Fetching auth token failed: "+s.message);return this.m_(o)})})}V_(e,t){const s=this.R_(this.i_);this.stream=this.f_(e,t),this.stream.xo(()=>{s(()=>this.listener.xo())}),this.stream.No(()=>{s(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(o=>{s(()=>this.m_(o))}),this.stream.onMessage(o=>{s(()=>++this.__==1?this.g_(o):this.onNext(o))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return fe(rT,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return t=>{this.Ti.enqueueAndForget(()=>this.i_===e?t():(fe(rT,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class dk extends Jw{constructor(e,t,s,o,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}f_(e,t){return this.connection.Wo("Listen",e,t)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const t=_O(this.serializer,e),s=function(u){if(!("targetChange"in u))return Ie.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?Ie.min():h.readTime?Dr(h.readTime):Ie.min()}(e);return this.listener.p_(t,s)}y_(e){const t={};t.database=Xm(this.serializer),t.addTarget=function(u,h){let p;const m=h.target;if(p=Fm(m)?{documents:bO(u,m)}:{query:wO(u,m).ht},p.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){p.resumeToken=zw(u,h.resumeToken);const g=Km(u,h.expectedCount);g!==null&&(p.expectedCount=g)}else if(h.snapshotVersion.compareTo(Ie.min())>0){p.readTime=cf(u,h.snapshotVersion.toTimestamp());const g=Km(u,h.expectedCount);g!==null&&(p.expectedCount=g)}return p}(this.serializer,e);const s=AO(this.serializer,e);s&&(t.labels=s),this.I_(t)}w_(e){const t={};t.database=Xm(this.serializer),t.removeTarget=e,this.I_(t)}}class pk extends Jw{constructor(e,t,s,o,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(e,t){return this.connection.Wo("Write",e,t)}g_(e){return Ye(!!e.streamToken),this.lastStreamToken=e.streamToken,Ye(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){Ye(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const t=TO(e.writeResults,e.commitTime),s=Dr(e.commitTime);return this.listener.v_(s,t)}C_(){const e={};e.database=Xm(this.serializer),this.I_(e)}b_(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>EO(this.serializer,s))};this.I_(t)}}/**
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
 */class mk{}class gk extends mk{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.F_=!1}M_(){if(this.F_)throw new de(ne.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,t,s,o){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,h])=>this.connection.So(e,Qm(t,s),o,u,h)).catch(u=>{throw u.name==="FirebaseError"?(u.code===ne.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new de(ne.UNKNOWN,u.toString())})}Co(e,t,s,o,u){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,p])=>this.connection.Co(e,Qm(t,s),o,h,p,u)).catch(h=>{throw h.name==="FirebaseError"?(h.code===ne.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new de(ne.UNKNOWN,h.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class yk{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(pi(t),this.N_=!1):fe("OnlineStateTracker",t)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
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
 */const ha="RemoteStore";class vk{constructor(e,t,s,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=u,this.z_.To(h=>{s.enqueueAndForget(async()=>{ya(this)&&(fe(ha,"Restarting streams for network reachability change."),await async function(m){const g=Ce(m);g.W_.add(4),await Fu(g),g.j_.set("Unknown"),g.W_.delete(4),await Pf(g)}(this))})}),this.j_=new yk(s,o)}}async function Pf(r){if(ya(r))for(const e of r.G_)await e(!0)}async function Fu(r){for(const e of r.G_)await e(!1)}function Zw(r,e){const t=Ce(r);t.K_.has(e.targetId)||(t.K_.set(e.targetId,e),Qg(t)?Kg(t):Jo(t).c_()&&$g(t,e))}function Gg(r,e){const t=Ce(r),s=Jo(t);t.K_.delete(e),s.c_()&&eS(t,e),t.K_.size===0&&(s.c_()?s.P_():ya(t)&&t.j_.set("Unknown"))}function $g(r,e){if(r.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ie.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Jo(r).y_(e)}function eS(r,e){r.H_.Ne(e),Jo(r).w_(e)}function Kg(r){r.H_=new fO({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>r.K_.get(e)||null,it:()=>r.datastore.serializer.databaseId}),Jo(r).start(),r.j_.B_()}function Qg(r){return ya(r)&&!Jo(r).u_()&&r.K_.size>0}function ya(r){return Ce(r).W_.size===0}function tS(r){r.H_=void 0}async function _k(r){r.j_.set("Online")}async function Ek(r){r.K_.forEach((e,t)=>{$g(r,e)})}async function Tk(r,e){tS(r),Qg(r)?(r.j_.q_(e),Kg(r)):r.j_.set("Unknown")}async function bk(r,e,t){if(r.j_.set("Online"),e instanceof jw&&e.state===2&&e.cause)try{await async function(o,u){const h=u.cause;for(const p of u.targetIds)o.K_.has(p)&&(await o.remoteSyncer.rejectListen(p,h),o.K_.delete(p),o.H_.removeTarget(p))}(r,e)}catch(s){fe(ha,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await ff(r,s)}else if(e instanceof jh?r.H_.We(e):e instanceof Uw?r.H_.Ze(e):r.H_.je(e),!t.isEqual(Ie.min()))try{const s=await Xw(r.localStore);t.compareTo(s)>=0&&await function(u,h){const p=u.H_.ot(h);return p.targetChanges.forEach((m,g)=>{if(m.resumeToken.approximateByteSize()>0){const _=u.K_.get(g);_&&u.K_.set(g,_.withResumeToken(m.resumeToken,h))}}),p.targetMismatches.forEach((m,g)=>{const _=u.K_.get(m);if(!_)return;u.K_.set(m,_.withResumeToken(Wt.EMPTY_BYTE_STRING,_.snapshotVersion)),eS(u,m);const b=new ts(_.target,m,g,_.sequenceNumber);$g(u,b)}),u.remoteSyncer.applyRemoteEvent(p)}(r,t)}catch(s){fe(ha,"Failed to raise snapshot:",s),await ff(r,s)}}async function ff(r,e,t){if(!Xo(e))throw e;r.W_.add(1),await Fu(r),r.j_.set("Offline"),t||(t=()=>Xw(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{fe(ha,"Retrying IndexedDB access"),await t(),r.W_.delete(1),await Pf(r)})}function nS(r,e){return e().catch(t=>ff(r,t,e))}async function Vf(r){const e=Ce(r),t=hs(e);let s=e.U_.length>0?e.U_[e.U_.length-1].batchId:Ng;for(;wk(e);)try{const o=await ik(e.localStore,s);if(o===null){e.U_.length===0&&t.P_();break}s=o.batchId,Sk(e,o)}catch(o){await ff(e,o)}rS(e)&&iS(e)}function wk(r){return ya(r)&&r.U_.length<10}function Sk(r,e){r.U_.push(e);const t=hs(r);t.c_()&&t.S_&&t.b_(e.mutations)}function rS(r){return ya(r)&&!hs(r).u_()&&r.U_.length>0}function iS(r){hs(r).start()}async function Ak(r){hs(r).C_()}async function Rk(r){const e=hs(r);for(const t of r.U_)e.b_(t.mutations)}async function Ik(r,e,t){const s=r.U_.shift(),o=Ug.from(s,e,t);await nS(r,()=>r.remoteSyncer.applySuccessfulWrite(o)),await Vf(r)}async function Ck(r,e){e&&hs(r).S_&&await async function(s,o){if(function(h){return cO(h)&&h!==ne.ABORTED}(o.code)){const u=s.U_.shift();hs(s).h_(),await nS(s,()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o)),await Vf(s)}}(r,e),rS(r)&&iS(r)}async function iT(r,e){const t=Ce(r);t.asyncQueue.verifyOperationInProgress(),fe(ha,"RemoteStore received new credentials");const s=ya(t);t.W_.add(3),await Fu(t),s&&t.j_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.W_.delete(3),await Pf(t)}async function xk(r,e){const t=Ce(r);e?(t.W_.delete(2),await Pf(t)):e||(t.W_.add(2),await Fu(t),t.j_.set("Unknown"))}function Jo(r){return r.J_||(r.J_=function(t,s,o){const u=Ce(t);return u.M_(),new dk(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(r.datastore,r.asyncQueue,{xo:_k.bind(null,r),No:Ek.bind(null,r),Lo:Tk.bind(null,r),p_:bk.bind(null,r)}),r.G_.push(async e=>{e?(r.J_.h_(),Qg(r)?Kg(r):r.j_.set("Unknown")):(await r.J_.stop(),tS(r))})),r.J_}function hs(r){return r.Y_||(r.Y_=function(t,s,o){const u=Ce(t);return u.M_(),new pk(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(r.datastore,r.asyncQueue,{xo:()=>Promise.resolve(),No:Ak.bind(null,r),Lo:Ck.bind(null,r),D_:Rk.bind(null,r),v_:Ik.bind(null,r)}),r.G_.push(async e=>{e?(r.Y_.h_(),await Vf(r)):(await r.Y_.stop(),r.U_.length>0&&(fe(ha,`Stopping write stream with ${r.U_.length} pending writes`),r.U_=[]))})),r.Y_}/**
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
 */class Yg{constructor(e,t,s,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new ui,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,u){const h=Date.now()+s,p=new Yg(e,t,h,o,u);return p.start(s),p}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new de(ne.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Xg(r,e){if(pi("AsyncQueue",`${e}: ${r}`),Xo(r))return new de(ne.UNAVAILABLE,`${e}: ${r}`);throw r}/**
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
 */class wo{static emptySet(e){return new wo(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||_e.comparator(t.key,s.key):(t,s)=>_e.comparator(t.key,s.key),this.keyedMap=mu(),this.sortedSet=new ft(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof wo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new wo;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
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
 */class sT{constructor(){this.Z_=new ft(_e.comparator)}track(e){const t=e.doc.key,s=this.Z_.get(t);s?e.type!==0&&s.type===3?this.Z_=this.Z_.insert(t,e):e.type===3&&s.type!==1?this.Z_=this.Z_.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Z_=this.Z_.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Z_=this.Z_.remove(t):e.type===1&&s.type===2?this.Z_=this.Z_.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):Ae():this.Z_=this.Z_.insert(t,e)}X_(){const e=[];return this.Z_.inorderTraversal((t,s)=>{e.push(s)}),e}}class Mo{constructor(e,t,s,o,u,h,p,m,g){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=p,this.excludesMetadataChanges=m,this.hasCachedResults=g}static fromInitialDocuments(e,t,s,o,u){const h=[];return t.forEach(p=>{h.push({type:0,doc:p})}),new Mo(e,t,wo.emptySet(t),h,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&xf(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
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
 */class Dk{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class Nk{constructor(){this.queries=aT(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(t,s){const o=Ce(t),u=o.queries;o.queries=aT(),u.forEach((h,p)=>{for(const m of p.ta)m.onError(s)})})(this,new de(ne.ABORTED,"Firestore shutting down"))}}function aT(){return new ga(r=>Sw(r),xf)}async function Wg(r,e){const t=Ce(r);let s=3;const o=e.query;let u=t.queries.get(o);u?!u.na()&&e.ra()&&(s=2):(u=new Dk,s=e.ra()?0:1);try{switch(s){case 0:u.ea=await t.onListen(o,!0);break;case 1:u.ea=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const p=Xg(h,`Initialization of query '${mo(e.query)}' failed`);return void e.onError(p)}t.queries.set(o,u),u.ta.push(e),e.sa(t.onlineState),u.ea&&e.oa(u.ea)&&Zg(t)}async function Jg(r,e){const t=Ce(r),s=e.query;let o=3;const u=t.queries.get(s);if(u){const h=u.ta.indexOf(e);h>=0&&(u.ta.splice(h,1),u.ta.length===0?o=e.ra()?0:1:!u.na()&&e.ra()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function Ok(r,e){const t=Ce(r);let s=!1;for(const o of e){const u=o.query,h=t.queries.get(u);if(h){for(const p of h.ta)p.oa(o)&&(s=!0);h.ea=o}}s&&Zg(t)}function kk(r,e,t){const s=Ce(r),o=s.queries.get(e);if(o)for(const u of o.ta)u.onError(t);s.queries.delete(e)}function Zg(r){r.ia.forEach(e=>{e.next()})}var Zm,oT;(oT=Zm||(Zm={}))._a="default",oT.Cache="cache";class ey{constructor(e,t,s){this.query=e,this.aa=t,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=s||{}}oa(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new Mo(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ua?this.la(e)&&(this.aa.next(e),t=!0):this.ha(e,this.onlineState)&&(this.Pa(e),t=!0),this.ca=e,t}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let t=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),t=!0),t}ha(e,t){if(!e.fromCache||!this.ra())return!0;const s=t!=="Offline";return(!this.options.Ta||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}la(e){if(e.docChanges.length>0)return!0;const t=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Pa(e){e=Mo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==Zm.Cache}}/**
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
 */class sS{constructor(e){this.key=e}}class aS{constructor(e){this.key=e}}class Mk{constructor(e,t){this.query=e,this.fa=t,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=Le(),this.mutatedKeys=Le(),this.ya=Aw(e),this.wa=new wo(this.ya)}get Sa(){return this.fa}ba(e,t){const s=t?t.Da:new sT,o=t?t.wa:this.wa;let u=t?t.mutatedKeys:this.mutatedKeys,h=o,p=!1;const m=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,g=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((_,b)=>{const w=o.get(_),C=Df(this.query,b)?b:null,N=!!w&&this.mutatedKeys.has(w.key),G=!!C&&(C.hasLocalMutations||this.mutatedKeys.has(C.key)&&C.hasCommittedMutations);let U=!1;w&&C?w.data.isEqual(C.data)?N!==G&&(s.track({type:3,doc:C}),U=!0):this.va(w,C)||(s.track({type:2,doc:C}),U=!0,(m&&this.ya(C,m)>0||g&&this.ya(C,g)<0)&&(p=!0)):!w&&C?(s.track({type:0,doc:C}),U=!0):w&&!C&&(s.track({type:1,doc:w}),U=!0,(m||g)&&(p=!0)),U&&(C?(h=h.add(C),u=G?u.add(_):u.delete(_)):(h=h.delete(_),u=u.delete(_)))}),this.query.limit!==null)for(;h.size>this.query.limit;){const _=this.query.limitType==="F"?h.last():h.first();h=h.delete(_.key),u=u.delete(_.key),s.track({type:1,doc:_})}return{wa:h,Da:s,ls:p,mutatedKeys:u}}va(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const u=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const h=e.Da.X_();h.sort((_,b)=>function(C,N){const G=U=>{switch(U){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ae()}};return G(C)-G(N)}(_.type,b.type)||this.ya(_.doc,b.doc)),this.Ca(s),o=o!=null&&o;const p=t&&!o?this.Fa():[],m=this.pa.size===0&&this.current&&!o?1:0,g=m!==this.ga;return this.ga=m,h.length!==0||g?{snapshot:new Mo(this.query,e.wa,u,h,e.mutatedKeys,m===0,g,!1,!!s&&s.resumeToken.approximateByteSize()>0),Ma:p}:{Ma:p}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new sT,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(t=>this.fa=this.fa.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.fa=this.fa.delete(t)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=Le(),this.wa.forEach(s=>{this.xa(s.key)&&(this.pa=this.pa.add(s.key))});const t=[];return e.forEach(s=>{this.pa.has(s)||t.push(new aS(s))}),this.pa.forEach(s=>{e.has(s)||t.push(new sS(s))}),t}Oa(e){this.fa=e.gs,this.pa=Le();const t=this.ba(e.documents);return this.applyChanges(t,!0)}Na(){return Mo.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const ty="SyncEngine";class Pk{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class Vk{constructor(e){this.key=e,this.Ba=!1}}class Lk{constructor(e,t,s,o,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.La={},this.ka=new ga(p=>Sw(p),xf),this.qa=new Map,this.Qa=new Set,this.$a=new ft(_e.comparator),this.Ua=new Map,this.Ka=new qg,this.Wa={},this.Ga=new Map,this.za=ko.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function Uk(r,e,t=!0){const s=fS(r);let o;const u=s.ka.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.Na()):o=await oS(s,e,t,!0),o}async function jk(r,e){const t=fS(r);await oS(t,e,!0,!1)}async function oS(r,e,t,s){const o=await sk(r.localStore,xr(e)),u=o.targetId,h=r.sharedClientState.addLocalQueryTarget(u,t);let p;return s&&(p=await zk(r,e,u,h==="current",o.resumeToken)),r.isPrimaryClient&&t&&Zw(r.remoteStore,o),p}async function zk(r,e,t,s,o){r.Ha=(b,w,C)=>async function(G,U,H,J){let Q=U.view.ba(H);Q.ls&&(Q=await ZE(G.localStore,U.query,!1).then(({documents:D})=>U.view.ba(D,Q)));const le=J&&J.targetChanges.get(U.targetId),oe=J&&J.targetMismatches.get(U.targetId)!=null,ue=U.view.applyChanges(Q,G.isPrimaryClient,le,oe);return uT(G,U.targetId,ue.Ma),ue.snapshot}(r,b,w,C);const u=await ZE(r.localStore,e,!0),h=new Mk(e,u.gs),p=h.ba(u.documents),m=Hu.createSynthesizedTargetChangeForCurrentChange(t,s&&r.onlineState!=="Offline",o),g=h.applyChanges(p,r.isPrimaryClient,m);uT(r,t,g.Ma);const _=new Pk(e,t,h);return r.ka.set(e,_),r.qa.has(t)?r.qa.get(t).push(e):r.qa.set(t,[e]),g.snapshot}async function qk(r,e,t){const s=Ce(r),o=s.ka.get(e),u=s.qa.get(o.targetId);if(u.length>1)return s.qa.set(o.targetId,u.filter(h=>!xf(h,e))),void s.ka.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await Wm(s.localStore,o.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(o.targetId),t&&Gg(s.remoteStore,o.targetId),eg(s,o.targetId)}).catch(Yo)):(eg(s,o.targetId),await Wm(s.localStore,o.targetId,!0))}async function Bk(r,e){const t=Ce(r),s=t.ka.get(e),o=t.qa.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Gg(t.remoteStore,s.targetId))}async function Hk(r,e,t){const s=Xk(r);try{const o=await function(h,p){const m=Ce(h),g=Tt.now(),_=p.reduce((C,N)=>C.add(N.key),Le());let b,w;return m.persistence.runTransaction("Locally write mutations","readwrite",C=>{let N=mi(),G=Le();return m.ds.getEntries(C,_).next(U=>{N=U,N.forEach((H,J)=>{J.isValidDocument()||(G=G.add(H))})}).next(()=>m.localDocuments.getOverlayedDocuments(C,N)).next(U=>{b=U;const H=[];for(const J of p){const Q=sO(J,b.get(J.key).overlayedDocument);Q!=null&&H.push(new gs(J.key,Q,gw(Q.value.mapValue),$n.exists(!0)))}return m.mutationQueue.addMutationBatch(C,g,H,p)}).next(U=>{w=U;const H=U.applyToLocalDocumentSet(b,G);return m.documentOverlayCache.saveOverlays(C,U.batchId,H)})}).then(()=>({batchId:w.batchId,changes:Iw(b)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),function(h,p,m){let g=h.Wa[h.currentUser.toKey()];g||(g=new ft(Oe)),g=g.insert(p,m),h.Wa[h.currentUser.toKey()]=g}(s,o.batchId,t),await Gu(s,o.changes),await Vf(s.remoteStore)}catch(o){const u=Xg(o,"Failed to persist write");t.reject(u)}}async function lS(r,e){const t=Ce(r);try{const s=await nk(t.localStore,e);e.targetChanges.forEach((o,u)=>{const h=t.Ua.get(u);h&&(Ye(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?h.Ba=!0:o.modifiedDocuments.size>0?Ye(h.Ba):o.removedDocuments.size>0&&(Ye(h.Ba),h.Ba=!1))}),await Gu(t,s,e)}catch(s){await Yo(s)}}function lT(r,e,t){const s=Ce(r);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.ka.forEach((u,h)=>{const p=h.view.sa(e);p.snapshot&&o.push(p.snapshot)}),function(h,p){const m=Ce(h);m.onlineState=p;let g=!1;m.queries.forEach((_,b)=>{for(const w of b.ta)w.sa(p)&&(g=!0)}),g&&Zg(m)}(s.eventManager,e),o.length&&s.La.p_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Fk(r,e,t){const s=Ce(r);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Ua.get(e),u=o&&o.key;if(u){let h=new ft(_e.comparator);h=h.insert(u,sn.newNoDocument(u,Ie.min()));const p=Le().add(u),m=new kf(Ie.min(),new Map,new ft(Oe),h,p);await lS(s,m),s.$a=s.$a.remove(u),s.Ua.delete(e),ny(s)}else await Wm(s.localStore,e,!1).then(()=>eg(s,e,t)).catch(Yo)}async function Gk(r,e){const t=Ce(r),s=e.batch.batchId;try{const o=await tk(t.localStore,e);cS(t,s,null),uS(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Gu(t,o)}catch(o){await Yo(o)}}async function $k(r,e,t){const s=Ce(r);try{const o=await function(h,p){const m=Ce(h);return m.persistence.runTransaction("Reject batch","readwrite-primary",g=>{let _;return m.mutationQueue.lookupMutationBatch(g,p).next(b=>(Ye(b!==null),_=b.keys(),m.mutationQueue.removeMutationBatch(g,b))).next(()=>m.mutationQueue.performConsistencyCheck(g)).next(()=>m.documentOverlayCache.removeOverlaysForBatchId(g,_,p)).next(()=>m.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,_)).next(()=>m.localDocuments.getDocuments(g,_))})}(s.localStore,e);cS(s,e,t),uS(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Gu(s,o)}catch(o){await Yo(o)}}function uS(r,e){(r.Ga.get(e)||[]).forEach(t=>{t.resolve()}),r.Ga.delete(e)}function cS(r,e,t){const s=Ce(r);let o=s.Wa[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),s.Wa[s.currentUser.toKey()]=o}}function eg(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const s of r.qa.get(e))r.ka.delete(s),t&&r.La.Ja(s,t);r.qa.delete(e),r.isPrimaryClient&&r.Ka.br(e).forEach(s=>{r.Ka.containsKey(s)||hS(r,s)})}function hS(r,e){r.Qa.delete(e.path.canonicalString());const t=r.$a.get(e);t!==null&&(Gg(r.remoteStore,t),r.$a=r.$a.remove(e),r.Ua.delete(t),ny(r))}function uT(r,e,t){for(const s of t)s instanceof sS?(r.Ka.addReference(s.key,e),Kk(r,s)):s instanceof aS?(fe(ty,"Document no longer in limbo: "+s.key),r.Ka.removeReference(s.key,e),r.Ka.containsKey(s.key)||hS(r,s.key)):Ae()}function Kk(r,e){const t=e.key,s=t.path.canonicalString();r.$a.get(t)||r.Qa.has(s)||(fe(ty,"New document in limbo: "+t),r.Qa.add(s),ny(r))}function ny(r){for(;r.Qa.size>0&&r.$a.size<r.maxConcurrentLimboResolutions;){const e=r.Qa.values().next().value;r.Qa.delete(e);const t=new _e(ot.fromString(e)),s=r.za.next();r.Ua.set(s,new Vk(t)),r.$a=r.$a.insert(t,s),Zw(r.remoteStore,new ts(xr(Cf(t.path)),s,"TargetPurposeLimboResolution",Af.ae))}}async function Gu(r,e,t){const s=Ce(r),o=[],u=[],h=[];s.ka.isEmpty()||(s.ka.forEach((p,m)=>{h.push(s.Ha(m,e,t).then(g=>{var _;if((g||t)&&s.isPrimaryClient){const b=g?!g.fromCache:(_=t==null?void 0:t.targetChanges.get(m.targetId))===null||_===void 0?void 0:_.current;s.sharedClientState.updateQueryState(m.targetId,b?"current":"not-current")}if(g){o.push(g);const b=Hg.Yi(m.targetId,g);u.push(b)}}))}),await Promise.all(h),s.La.p_(o),await async function(m,g){const _=Ce(m);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",b=>re.forEach(g,w=>re.forEach(w.Hi,C=>_.persistence.referenceDelegate.addReference(b,w.targetId,C)).next(()=>re.forEach(w.Ji,C=>_.persistence.referenceDelegate.removeReference(b,w.targetId,C)))))}catch(b){if(!Xo(b))throw b;fe(Fg,"Failed to update sequence numbers: "+b)}for(const b of g){const w=b.targetId;if(!b.fromCache){const C=_.Ts.get(w),N=C.snapshotVersion,G=C.withLastLimboFreeSnapshotVersion(N);_.Ts=_.Ts.insert(w,G)}}}(s.localStore,u))}async function Qk(r,e){const t=Ce(r);if(!t.currentUser.isEqual(e)){fe(ty,"User change. New user:",e.toKey());const s=await Yw(t.localStore,e);t.currentUser=e,function(u,h){u.Ga.forEach(p=>{p.forEach(m=>{m.reject(new de(ne.CANCELLED,h))})}),u.Ga.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Gu(t,s.Rs)}}function Yk(r,e){const t=Ce(r),s=t.Ua.get(e);if(s&&s.Ba)return Le().add(s.key);{let o=Le();const u=t.qa.get(e);if(!u)return o;for(const h of u){const p=t.ka.get(h);o=o.unionWith(p.view.Sa)}return o}}function fS(r){const e=Ce(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=lS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Yk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Fk.bind(null,e),e.La.p_=Ok.bind(null,e.eventManager),e.La.Ja=kk.bind(null,e.eventManager),e}function Xk(r){const e=Ce(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Gk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=$k.bind(null,e),e}class df{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Mf(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,t){return null}nu(e,t){return null}eu(e){return ek(this.persistence,new WO,e.initialUser,this.serializer)}Xa(e){return new Qw(Bg.ri,this.serializer)}Za(e){return new ok}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}df.provider={build:()=>new df};class Wk extends df{constructor(e){super(),this.cacheSizeBytes=e}tu(e,t){Ye(this.persistence.referenceDelegate instanceof hf);const s=this.persistence.referenceDelegate.garbageCollector;return new VO(s,e.asyncQueue,t)}Xa(e){const t=this.cacheSizeBytes!==void 0?gn.withCacheSize(this.cacheSizeBytes):gn.DEFAULT;return new Qw(s=>hf.ri(s,t),this.serializer)}}class tg{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>lT(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Qk.bind(null,this.syncEngine),await xk(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Nk}()}createDatastore(e){const t=Mf(e.databaseInfo.databaseId),s=function(u){return new fk(u)}(e.databaseInfo);return function(u,h,p,m){return new gk(u,h,p,m)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,o,u,h,p){return new vk(s,o,u,h,p)}(this.localStore,this.datastore,e.asyncQueue,t=>lT(this.syncEngine,t,0),function(){return nT.D()?new nT:new lk}())}createSyncEngine(e,t){return function(o,u,h,p,m,g,_){const b=new Lk(o,u,h,p,m,g);return _&&(b.ja=!0),b}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const u=Ce(o);fe(ha,"RemoteStore shutting down."),u.W_.add(5),await Fu(u),u.z_.shutdown(),u.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}tg.provider={build:()=>new tg};/**
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
 */class ry{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):pi("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const fs="FirestoreClient";class Jk{constructor(e,t,s,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=rn.UNAUTHENTICATED,this.clientId=aw.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,async h=>{fe(fs,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(s,h=>(fe(fs,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ui;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Xg(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function vm(r,e){r.asyncQueue.verifyOperationInProgress(),fe(fs,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let s=t.initialUser;r.setCredentialChangeListener(async o=>{s.isEqual(o)||(await Yw(e.localStore,o),s=o)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function cT(r,e){r.asyncQueue.verifyOperationInProgress();const t=await Zk(r);fe(fs,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener(s=>iT(e.remoteStore,s)),r.setAppCheckTokenChangeListener((s,o)=>iT(e.remoteStore,o)),r._onlineComponents=e}async function Zk(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){fe(fs,"Using user provided OfflineComponentProvider");try{await vm(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===ne.FAILED_PRECONDITION||o.code===ne.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;Io("Error using user provided cache. Falling back to memory cache: "+t),await vm(r,new df)}}else fe(fs,"Using default OfflineComponentProvider"),await vm(r,new Wk(void 0));return r._offlineComponents}async function dS(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(fe(fs,"Using user provided OnlineComponentProvider"),await cT(r,r._uninitializedComponentsProvider._online)):(fe(fs,"Using default OnlineComponentProvider"),await cT(r,new tg))),r._onlineComponents}function e2(r){return dS(r).then(e=>e.syncEngine)}async function pf(r){const e=await dS(r),t=e.eventManager;return t.onListen=Uk.bind(null,e.syncEngine),t.onUnlisten=qk.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=jk.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Bk.bind(null,e.syncEngine),t}function t2(r,e,t={}){const s=new ui;return r.asyncQueue.enqueueAndForget(async()=>function(u,h,p,m,g){const _=new ry({next:w=>{_.su(),h.enqueueAndForget(()=>Jg(u,b));const C=w.docs.has(p);!C&&w.fromCache?g.reject(new de(ne.UNAVAILABLE,"Failed to get document because the client is offline.")):C&&w.fromCache&&m&&m.source==="server"?g.reject(new de(ne.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(w)},error:w=>g.reject(w)}),b=new ey(Cf(p.path),_,{includeMetadataChanges:!0,Ta:!0});return Wg(u,b)}(await pf(r),r.asyncQueue,e,t,s)),s.promise}function n2(r,e,t={}){const s=new ui;return r.asyncQueue.enqueueAndForget(async()=>function(u,h,p,m,g){const _=new ry({next:w=>{_.su(),h.enqueueAndForget(()=>Jg(u,b)),w.fromCache&&m.source==="server"?g.reject(new de(ne.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(w)},error:w=>g.reject(w)}),b=new ey(p,_,{includeMetadataChanges:!0,Ta:!0});return Wg(u,b)}(await pf(r),r.asyncQueue,e,t,s)),s.promise}/**
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
 */function pS(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */const hT=new Map;/**
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
 */function mS(r,e,t){if(!t)throw new de(ne.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function r2(r,e,t,s){if(e===!0&&s===!0)throw new de(ne.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function fT(r){if(!_e.isDocumentKey(r))throw new de(ne.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function dT(r){if(_e.isDocumentKey(r))throw new de(ne.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function Lf(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":Ae()}function _n(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new de(ne.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Lf(r);throw new de(ne.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
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
 */const gS="firestore.googleapis.com",pT=!0;class mT{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new de(ne.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=gS,this.ssl=pT}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:pT;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Kw;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<MO)throw new de(ne.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}r2("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=pS((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new de(ne.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new de(ne.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new de(ne.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Uf{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new mT({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new de(ne.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new de(ne.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new mT(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new hN;switch(s.type){case"firstParty":return new mN(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new de(ne.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=hT.get(t);s&&(fe("ComponentProvider","Removing Datastore"),hT.delete(t),s.terminate())}(this),Promise.resolve()}}function i2(r,e,t,s={}){var o;const u=(r=_n(r,Uf))._getSettings(),h=Object.assign(Object.assign({},u),{emulatorOptions:r._getEmulatorOptions()}),p=`${e}:${t}`;u.host!==gS&&u.host!==p&&Io("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const m=Object.assign(Object.assign({},u),{host:p,ssl:!1,emulatorOptions:s});if(!hi(m,h)&&(r._setSettings(m),s.mockUserToken)){let g,_;if(typeof s.mockUserToken=="string")g=s.mockUserToken,_=rn.MOCK_USER;else{g=wI(s.mockUserToken,(o=r._app)===null||o===void 0?void 0:o.options.projectId);const b=s.mockUserToken.sub||s.mockUserToken.user_id;if(!b)throw new de(ne.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");_=new rn(b)}r._authCredentials=new fN(new iw(g,_))}}/**
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
 */class ys{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new ys(this.firestore,e,this._query)}}class an{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new as(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new an(this.firestore,e,this._key)}}class as extends ys{constructor(e,t,s){super(e,t,Cf(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new an(this.firestore,null,new _e(e))}withConverter(e){return new as(this.firestore,e,this._path)}}function nr(r,e,...t){if(r=xt(r),mS("collection","path",e),r instanceof Uf){const s=ot.fromString(e,...t);return dT(s),new as(r,null,s)}{if(!(r instanceof an||r instanceof as))throw new de(ne.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(ot.fromString(e,...t));return dT(s),new as(r.firestore,null,s)}}function ar(r,e,...t){if(r=xt(r),arguments.length===1&&(e=aw.newId()),mS("doc","path",e),r instanceof Uf){const s=ot.fromString(e,...t);return fT(s),new an(r,null,new _e(s))}{if(!(r instanceof an||r instanceof as))throw new de(ne.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(ot.fromString(e,...t));return fT(s),new an(r.firestore,r instanceof as?r.converter:null,new _e(s))}}/**
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
 */const gT="AsyncQueue";class yT{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new Ww(this,"async_queue_retry"),this.Su=()=>{const s=ym();s&&fe(gT,"Visibility state changed to "+s.visibilityState),this.a_.t_()},this.bu=e;const t=ym();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const t=ym();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const t=new ui;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!Xo(e))throw e;fe(gT,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const t=this.bu.then(()=>(this.pu=!0,e().catch(s=>{this.gu=s,this.pu=!1;const o=function(h){let p=h.message||"";return h.stack&&(p=h.stack.includes(h.message)?h.stack:h.message+`
`+h.stack),p}(s);throw pi("INTERNAL UNHANDLED ERROR: ",o),s}).then(s=>(this.pu=!1,s))));return this.bu=t,t}enqueueAfterDelay(e,t,s){this.Du(),this.wu.indexOf(e)>-1&&(t=0);const o=Yg.createAndSchedule(this,e,t,s,u=>this.Fu(u));return this.fu.push(o),o}Du(){this.gu&&Ae()}verifyOperationInProgress(){}async Mu(){let e;do e=this.bu,await e;while(e!==this.bu)}xu(e){for(const t of this.fu)if(t.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.fu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const t=this.fu.indexOf(e);this.fu.splice(t,1)}}function vT(r){return function(t,s){if(typeof t!="object"||t===null)return!1;const o=t;for(const u of s)if(u in o&&typeof o[u]=="function")return!0;return!1}(r,["next","error","complete"])}class gi extends Uf{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new yT,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new yT(e),this._firestoreClient=void 0,await e}}}function s2(r,e){const t=typeof r=="object"?r:mb(),s=typeof r=="string"?r:sf,o=Eg(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=TI("firestore");u&&i2(o,...u)}return o}function jf(r){if(r._terminated)throw new de(ne.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||a2(r),r._firestoreClient}function a2(r){var e,t,s;const o=r._freezeSettings(),u=function(p,m,g,_){return new DN(p,m,g,_.host,_.ssl,_.experimentalForceLongPolling,_.experimentalAutoDetectLongPolling,pS(_.experimentalLongPollingOptions),_.useFetchStreams)}(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,o);r._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(r._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),r._firestoreClient=new Jk(r._authCredentials,r._appCheckCredentials,r._queue,u,r._componentsProvider&&function(p){const m=p==null?void 0:p._online.build();return{_offline:p==null?void 0:p._offline.build(m),_online:m}}(r._componentsProvider))}/**
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
 */class Po{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Po(Wt.fromBase64String(e))}catch(t){throw new de(ne.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Po(Wt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class zf{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new de(ne.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Xt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class $u{constructor(e){this._methodName=e}}/**
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
 */class iy{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new de(ne.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new de(ne.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Oe(this._lat,e._lat)||Oe(this._long,e._long)}}/**
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
 */class sy{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0}(this._values,e._values)}}/**
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
 */const o2=/^__.*__$/;class l2{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new gs(e,this.data,this.fieldMask,t,this.fieldTransforms):new Bu(e,this.data,t,this.fieldTransforms)}}class yS{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new gs(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function vS(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ae()}}class qf{constructor(e,t,s,o,u,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Bu(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new qf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.ku({path:s,Qu:!1});return o.$u(e),o}Uu(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.ku({path:s,Qu:!1});return o.Bu(),o}Ku(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return mf(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(vS(this.Lu)&&o2.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class u2{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Mf(e)}ju(e,t,s,o=!1){return new qf({Lu:e,methodName:t,zu:s,path:Xt.emptyPath(),Qu:!1,Gu:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Bf(r){const e=r._freezeSettings(),t=Mf(r._databaseId);return new u2(r._databaseId,!!e.ignoreUndefinedProperties,t)}function _S(r,e,t,s,o,u={}){const h=r.ju(u.merge||u.mergeFields?2:0,e,t,o);ly("Data must be an object, but it was:",h,s);const p=TS(s,h);let m,g;if(u.merge)m=new Dn(h.fieldMask),g=h.fieldTransforms;else if(u.mergeFields){const _=[];for(const b of u.mergeFields){const w=ng(e,b,t);if(!h.contains(w))throw new de(ne.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);wS(_,w)||_.push(w)}m=new Dn(_),g=h.fieldTransforms.filter(b=>m.covers(b.field))}else m=null,g=h.fieldTransforms;return new l2(new yn(p),m,g)}class Hf extends $u{_toFieldTransform(e){if(e.Lu!==2)throw e.Lu===1?e.Wu(`${this._methodName}() can only appear at the top level of your update data`):e.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Hf}}function ES(r,e,t){return new qf({Lu:3,zu:e.settings.zu,methodName:r._methodName,Qu:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class ay extends $u{constructor(e,t){super(e),this.Hu=t}_toFieldTransform(e){const t=ES(this,e,!0),s=this.Hu.map(u=>va(u,t)),o=new No(s);return new Mw(e.path,o)}isEqual(e){return e instanceof ay&&hi(this.Hu,e.Hu)}}class oy extends $u{constructor(e,t){super(e),this.Hu=t}_toFieldTransform(e){const t=ES(this,e,!0),s=this.Hu.map(u=>va(u,t)),o=new Oo(s);return new Mw(e.path,o)}isEqual(e){return e instanceof oy&&hi(this.Hu,e.Hu)}}function c2(r,e,t,s){const o=r.ju(1,e,t);ly("Data must be an object, but it was:",o,s);const u=[],h=yn.empty();ms(s,(m,g)=>{const _=uy(e,m,t);g=xt(g);const b=o.Uu(_);if(g instanceof Hf)u.push(_);else{const w=va(g,b);w!=null&&(u.push(_),h.set(_,w))}});const p=new Dn(u);return new yS(h,p,o.fieldTransforms)}function h2(r,e,t,s,o,u){const h=r.ju(1,e,t),p=[ng(e,s,t)],m=[o];if(u.length%2!=0)throw new de(ne.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<u.length;w+=2)p.push(ng(e,u[w])),m.push(u[w+1]);const g=[],_=yn.empty();for(let w=p.length-1;w>=0;--w)if(!wS(g,p[w])){const C=p[w];let N=m[w];N=xt(N);const G=h.Uu(C);if(N instanceof Hf)g.push(C);else{const U=va(N,G);U!=null&&(g.push(C),_.set(C,U))}}const b=new Dn(g);return new yS(_,b,h.fieldTransforms)}function f2(r,e,t,s=!1){return va(t,r.ju(s?4:3,e))}function va(r,e){if(bS(r=xt(r)))return ly("Unsupported field value:",e,r),TS(r,e);if(r instanceof $u)return function(s,o){if(!vS(o.Lu))throw o.Wu(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Wu(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(s,o){const u=[];let h=0;for(const p of s){let m=va(p,o.Ku(h));m==null&&(m={nullValue:"NULL_VALUE"}),u.push(m),h++}return{arrayValue:{values:u}}}(r,e)}return function(s,o){if((s=xt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return ZN(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=Tt.fromDate(s);return{timestampValue:cf(o.serializer,u)}}if(s instanceof Tt){const u=new Tt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:cf(o.serializer,u)}}if(s instanceof iy)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Po)return{bytesValue:zw(o.serializer,s._byteString)};if(s instanceof an){const u=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw o.Wu(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:zg(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof sy)return function(h,p){return{mapValue:{fields:{[pw]:{stringValue:mw},[af]:{arrayValue:{values:h.toArray().map(g=>{if(typeof g!="number")throw p.Wu("VectorValues must only contain numeric values.");return Vg(p.serializer,g)})}}}}}}(s,o);throw o.Wu(`Unsupported field value: ${Lf(s)}`)}(r,e)}function TS(r,e){const t={};return lw(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ms(r,(s,o)=>{const u=va(o,e.qu(s));u!=null&&(t[s]=u)}),{mapValue:{fields:t}}}function bS(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof Tt||r instanceof iy||r instanceof Po||r instanceof an||r instanceof $u||r instanceof sy)}function ly(r,e,t){if(!bS(t)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(t)){const s=Lf(t);throw s==="an object"?e.Wu(r+" a custom object"):e.Wu(r+" "+s)}}function ng(r,e,t){if((e=xt(e))instanceof zf)return e._internalPath;if(typeof e=="string")return uy(r,e);throw mf("Field path arguments must be of type string or ",r,!1,void 0,t)}const d2=new RegExp("[~\\*/\\[\\]]");function uy(r,e,t){if(e.search(d2)>=0)throw mf(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new zf(...e.split("."))._internalPath}catch{throw mf(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function mf(r,e,t,s,o){const u=s&&!s.isEmpty(),h=o!==void 0;let p=`Function ${e}() called with invalid data`;t&&(p+=" (via `toFirestore()`)"),p+=". ";let m="";return(u||h)&&(m+=" (found",u&&(m+=` in field ${s}`),h&&(m+=` in document ${o}`),m+=")"),new de(ne.INVALID_ARGUMENT,p+r+m)}function wS(r,e){return r.some(t=>t.isEqual(e))}/**
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
 */class SS{constructor(e,t,s,o,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new an(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new p2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Ff("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class p2 extends SS{data(){return super.data()}}function Ff(r,e){return typeof e=="string"?uy(r,e):e instanceof zf?e._internalPath:e._delegate._internalPath}/**
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
 */function AS(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new de(ne.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class cy{}class RS extends cy{}function fa(r,e,...t){let s=[];e instanceof cy&&s.push(e),s=s.concat(t),function(u){const h=u.filter(m=>m instanceof hy).length,p=u.filter(m=>m instanceof Gf).length;if(h>1||h>0&&p>0)throw new de(ne.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const o of s)r=o._apply(r);return r}class Gf extends RS{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new Gf(e,t,s)}_apply(e){const t=this._parse(e);return IS(e._query,t),new ys(e.firestore,e.converter,Gm(e._query,t))}_parse(e){const t=Bf(e.firestore);return function(u,h,p,m,g,_,b){let w;if(g.isKeyField()){if(_==="array-contains"||_==="array-contains-any")throw new de(ne.INVALID_ARGUMENT,`Invalid Query. You can't perform '${_}' queries on documentId().`);if(_==="in"||_==="not-in"){TT(b,_);const N=[];for(const G of b)N.push(ET(m,u,G));w={arrayValue:{values:N}}}else w=ET(m,u,b)}else _!=="in"&&_!=="not-in"&&_!=="array-contains-any"||TT(b,_),w=f2(p,h,b,_==="in"||_==="not-in");return Ct.create(g,_,w)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function da(r,e,t){const s=e,o=Ff("where",r);return Gf._create(o,s,t)}class hy extends cy{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new hy(e,t)}_parse(e){const t=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return t.length===1?t[0]:sr.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(o,u){let h=o;const p=u.getFlattenedFilters();for(const m of p)IS(h,m),h=Gm(h,m)}(e._query,t),new ys(e.firestore,e.converter,Gm(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class fy extends RS{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new fy(e,t)}_apply(e){const t=function(o,u,h){if(o.startAt!==null)throw new de(ne.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new de(ne.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ou(u,h)}(e._query,this._field,this._direction);return new ys(e.firestore,e.converter,function(o,u){const h=o.explicitOrderBy.concat([u]);return new Wo(o.path,o.collectionGroup,h,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)}(e._query,t))}}function _T(r,e="asc"){const t=e,s=Ff("orderBy",r);return fy._create(s,t)}function ET(r,e,t){if(typeof(t=xt(t))=="string"){if(t==="")throw new de(ne.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ww(e)&&t.indexOf("/")!==-1)throw new de(ne.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(ot.fromString(t));if(!_e.isDocumentKey(s))throw new de(ne.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return ME(r,new _e(s))}if(t instanceof an)return ME(r,t._key);throw new de(ne.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Lf(t)}.`)}function TT(r,e){if(!Array.isArray(r)||r.length===0)throw new de(ne.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function IS(r,e){const t=function(o,u){for(const h of o)for(const p of h.getFlattenedFilters())if(u.indexOf(p.op)>=0)return p.op;return null}(r.filters,function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new de(ne.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new de(ne.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class m2{convertValue(e,t="none"){switch(cs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Et(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(us(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Ae()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return ms(e,(o,u)=>{s[o]=this.convertValue(u,t)}),s}convertVectorValue(e){var t,s,o;const u=(o=(s=(t=e.fields)===null||t===void 0?void 0:t[af].arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map(h=>Et(h.doubleValue));return new sy(u)}convertGeoPoint(e){return new iy(Et(e.latitude),Et(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=If(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(xu(e));default:return null}}convertTimestamp(e){const t=ls(e);return new Tt(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=ot.fromString(e);Ye($w(s));const o=new Du(s.get(1),s.get(3)),u=new _e(s.popFirst(5));return o.isEqual(t)||pi(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
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
 */function CS(r,e,t){let s;return s=r?r.toFirestore(e):e,s}/**
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
 */class yu{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class xS extends SS{constructor(e,t,s,o,u,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new zh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Ff("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class zh extends xS{data(e={}){return super.data(e)}}class DS{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new yu(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new zh(this._firestore,this._userDataWriter,s.key,s,new yu(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new de(ne.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,u){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map(p=>{const m=new zh(o._firestore,o._userDataWriter,p.doc.key,p.doc,new yu(o._snapshot.mutatedKeys.has(p.doc.key),o._snapshot.fromCache),o.query.converter);return p.doc,{type:"added",doc:m,oldIndex:-1,newIndex:h++}})}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(p=>u||p.type!==3).map(p=>{const m=new zh(o._firestore,o._userDataWriter,p.doc.key,p.doc,new yu(o._snapshot.mutatedKeys.has(p.doc.key),o._snapshot.fromCache),o.query.converter);let g=-1,_=-1;return p.type!==0&&(g=h.indexOf(p.doc.key),h=h.delete(p.doc.key)),p.type!==1&&(h=h.add(p.doc),_=h.indexOf(p.doc.key)),{type:g2(p.type),doc:m,oldIndex:g,newIndex:_}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function g2(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ae()}}/**
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
 */function Vo(r){r=_n(r,an);const e=_n(r.firestore,gi);return t2(jf(e),r._key).then(t=>kS(e,r,t))}class dy extends m2{constructor(e){super(),this.firestore=e}convertBytes(e){return new Po(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new an(this.firestore,null,t)}}function _a(r){r=_n(r,ys);const e=_n(r.firestore,gi),t=jf(e),s=new dy(e);return AS(r._query),n2(t,r._query).then(o=>new DS(e,s,r,o))}function NS(r,e,t){r=_n(r,an);const s=_n(r.firestore,gi),o=CS(r.converter,e);return Kf(s,[_S(Bf(s),"setDoc",r._key,o,r.converter!==null,t).toMutation(r._key,$n.none())])}function OS(r,e,t,...s){r=_n(r,an);const o=_n(r.firestore,gi),u=Bf(o);let h;return h=typeof(e=xt(e))=="string"||e instanceof zf?h2(u,"updateDoc",r._key,e,t,s):c2(u,"updateDoc",r._key,e),Kf(o,[h.toMutation(r._key,$n.exists(!0))])}function y2(r){return Kf(_n(r.firestore,gi),[new Lg(r._key,$n.none())])}function $f(r,e){const t=_n(r.firestore,gi),s=ar(r),o=CS(r.converter,e);return Kf(t,[_S(Bf(r.firestore),"addDoc",s._key,o,r.converter!==null,{}).toMutation(s._key,$n.exists(!1))]).then(()=>s)}function v2(r,...e){var t,s,o;r=xt(r);let u={includeMetadataChanges:!1,source:"default"},h=0;typeof e[h]!="object"||vT(e[h])||(u=e[h],h++);const p={includeMetadataChanges:u.includeMetadataChanges,source:u.source};if(vT(e[h])){const b=e[h];e[h]=(t=b.next)===null||t===void 0?void 0:t.bind(b),e[h+1]=(s=b.error)===null||s===void 0?void 0:s.bind(b),e[h+2]=(o=b.complete)===null||o===void 0?void 0:o.bind(b)}let m,g,_;if(r instanceof an)g=_n(r.firestore,gi),_=Cf(r._key.path),m={next:b=>{e[h]&&e[h](kS(g,r,b))},error:e[h+1],complete:e[h+2]};else{const b=_n(r,ys);g=_n(b.firestore,gi),_=b._query;const w=new dy(g);m={next:C=>{e[h]&&e[h](new DS(g,w,b,C))},error:e[h+1],complete:e[h+2]},AS(r._query)}return function(w,C,N,G){const U=new ry(G),H=new ey(C,U,N);return w.asyncQueue.enqueueAndForget(async()=>Wg(await pf(w),H)),()=>{U.su(),w.asyncQueue.enqueueAndForget(async()=>Jg(await pf(w),H))}}(jf(g),_,p,m)}function Kf(r,e){return function(s,o){const u=new ui;return s.asyncQueue.enqueueAndForget(async()=>Hk(await e2(s),o,u)),u.promise}(jf(r),e)}function kS(r,e,t){const s=t.docs.get(e._key),o=new dy(r);return new xS(r,o,e._key,s,new yu(t.hasPendingWrites,t.fromCache),e.converter)}function _2(...r){return new ay("arrayUnion",r)}function E2(...r){return new oy("arrayRemove",r)}(function(e,t=!0){(function(o){Qo=o})($o),Ao(new oa("firestore",(s,{instanceIdentifier:o,options:u})=>{const h=s.getProvider("app").getImmediate(),p=new gi(new dN(s.getProvider("auth-internal")),new gN(h,s.getProvider("app-check-internal")),function(g,_){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new de(ne.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Du(g.options.projectId,_)}(h,o),h);return u=Object.assign({useFetchStreams:t},u),p._setSettings(u),p},"PUBLIC").setMultipleInstances(!0)),is(bE,wE,e),is(bE,wE,"esm2017")})();var T2="firebase",b2="11.6.0";/**
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
 */is(T2,b2,"app");const w2={apiKey:"",authDomain:"",projectId:"",storageBucket:"",messagingSenderId:"",appId:"",measurementId:""},MS=pb(w2),Ah=uN(MS),gt=s2(MS),PS=async(r,e)=>{try{const t=ar(gt,"employers",r);return await NS(t,{...e,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()}),{id:r,...e}}catch(t){throw console.error("Error creating employer profile:",t),t}},S2=async r=>{try{const e=ar(gt,"employers",r),t=await Vo(e);return t.exists()?{id:t.id,...t.data()}:null}catch(e){return console.error("Error getting employer profile:",e),null}},VS=z.createContext(),vs=()=>z.useContext(VS),A2=({children:r})=>{const[e,t]=z.useState(null),[s,o]=z.useState(null),[u,h]=z.useState(!0),p=async(w,C,N,G="jobseeker")=>{try{const U=await Gx(Ah,w,C),H=U.user;await Qx(H,{displayName:G==="employer"?N.companyName:`${N.firstName} ${N.lastName}`});const J=ar(gt,"users",H.uid);return await NS(J,{email:w,userType:G,...N,createdAt:new Date().toISOString()}),G==="employer"&&await PS(H.uid,{companyName:N.companyName,email:w,phone:N.phone||"",address:N.address||"",website:N.website||"",description:N.description||""}),U}catch(U){throw console.error("Error in registration:",U),U}},m=(w,C)=>$x(Ah,w,C),g=()=>Jx(Ah),_=async w=>{try{const C=ar(gt,"users",w),N=await Vo(C);return N.exists()?N.data().userType:null}catch(C){return console.error("Error getting user type:",C),null}};z.useEffect(()=>Wx(Ah,async C=>{if(C){const N=await _(C.uid);o(N)}else o(null);t(C),h(!1)}),[]);const b={currentUser:e,userType:s,register:p,login:m,logout:g};return A.jsx(VS.Provider,{value:b,children:!u&&r})};var at="-ms-",Su="-moz-",Qe="-webkit-",LS="comm",Qf="rule",py="decl",R2="@import",US="@keyframes",I2="@layer",jS=Math.abs,my=String.fromCharCode,rg=Object.assign;function C2(r,e){return Ht(r,0)^45?(((e<<2^Ht(r,0))<<2^Ht(r,1))<<2^Ht(r,2))<<2^Ht(r,3):0}function zS(r){return r.trim()}function ii(r,e){return(r=e.exec(r))?r[0]:r}function De(r,e,t){return r.replace(e,t)}function qh(r,e,t){return r.indexOf(e,t)}function Ht(r,e){return r.charCodeAt(e)|0}function Lo(r,e,t){return r.slice(e,t)}function Rr(r){return r.length}function qS(r){return r.length}function vu(r,e){return e.push(r),r}function x2(r,e){return r.map(e).join("")}function bT(r,e){return r.filter(function(t){return!ii(t,e)})}var Yf=1,Uo=1,BS=0,Qn=0,It=0,Zo="";function Xf(r,e,t,s,o,u,h,p){return{value:r,root:e,parent:t,type:s,props:o,children:u,line:Yf,column:Uo,length:h,return:"",siblings:p}}function Xi(r,e){return rg(Xf("",null,null,"",null,null,0,r.siblings),r,{length:-r.length},e)}function fo(r){for(;r.root;)r=Xi(r.root,{children:[r]});vu(r,r.siblings)}function D2(){return It}function N2(){return It=Qn>0?Ht(Zo,--Qn):0,Uo--,It===10&&(Uo=1,Yf--),It}function rr(){return It=Qn<BS?Ht(Zo,Qn++):0,Uo++,It===10&&(Uo=1,Yf++),It}function sa(){return Ht(Zo,Qn)}function Bh(){return Qn}function Wf(r,e){return Lo(Zo,r,e)}function ig(r){switch(r){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function O2(r){return Yf=Uo=1,BS=Rr(Zo=r),Qn=0,[]}function k2(r){return Zo="",r}function _m(r){return zS(Wf(Qn-1,sg(r===91?r+2:r===40?r+1:r)))}function M2(r){for(;(It=sa())&&It<33;)rr();return ig(r)>2||ig(It)>3?"":" "}function P2(r,e){for(;--e&&rr()&&!(It<48||It>102||It>57&&It<65||It>70&&It<97););return Wf(r,Bh()+(e<6&&sa()==32&&rr()==32))}function sg(r){for(;rr();)switch(It){case r:return Qn;case 34:case 39:r!==34&&r!==39&&sg(It);break;case 40:r===41&&sg(r);break;case 92:rr();break}return Qn}function V2(r,e){for(;rr()&&r+It!==57;)if(r+It===84&&sa()===47)break;return"/*"+Wf(e,Qn-1)+"*"+my(r===47?r:rr())}function L2(r){for(;!ig(sa());)rr();return Wf(r,Qn)}function U2(r){return k2(Hh("",null,null,null,[""],r=O2(r),0,[0],r))}function Hh(r,e,t,s,o,u,h,p,m){for(var g=0,_=0,b=h,w=0,C=0,N=0,G=1,U=1,H=1,J=0,Q="",le=o,oe=u,ue=s,D=Q;U;)switch(N=J,J=rr()){case 40:if(N!=108&&Ht(D,b-1)==58){qh(D+=De(_m(J),"&","&\f"),"&\f",jS(g?p[g-1]:0))!=-1&&(H=-1);break}case 34:case 39:case 91:D+=_m(J);break;case 9:case 10:case 13:case 32:D+=M2(N);break;case 92:D+=P2(Bh()-1,7);continue;case 47:switch(sa()){case 42:case 47:vu(j2(V2(rr(),Bh()),e,t,m),m);break;default:D+="/"}break;case 123*G:p[g++]=Rr(D)*H;case 125*G:case 59:case 0:switch(J){case 0:case 125:U=0;case 59+_:H==-1&&(D=De(D,/\f/g,"")),C>0&&Rr(D)-b&&vu(C>32?ST(D+";",s,t,b-1,m):ST(De(D," ","")+";",s,t,b-2,m),m);break;case 59:D+=";";default:if(vu(ue=wT(D,e,t,g,_,o,p,Q,le=[],oe=[],b,u),u),J===123)if(_===0)Hh(D,e,ue,ue,le,u,b,p,oe);else switch(w===99&&Ht(D,3)===110?100:w){case 100:case 108:case 109:case 115:Hh(r,ue,ue,s&&vu(wT(r,ue,ue,0,0,o,p,Q,o,le=[],b,oe),oe),o,oe,b,p,s?le:oe);break;default:Hh(D,ue,ue,ue,[""],oe,0,p,oe)}}g=_=C=0,G=H=1,Q=D="",b=h;break;case 58:b=1+Rr(D),C=N;default:if(G<1){if(J==123)--G;else if(J==125&&G++==0&&N2()==125)continue}switch(D+=my(J),J*G){case 38:H=_>0?1:(D+="\f",-1);break;case 44:p[g++]=(Rr(D)-1)*H,H=1;break;case 64:sa()===45&&(D+=_m(rr())),w=sa(),_=b=Rr(Q=D+=L2(Bh())),J++;break;case 45:N===45&&Rr(D)==2&&(G=0)}}return u}function wT(r,e,t,s,o,u,h,p,m,g,_,b){for(var w=o-1,C=o===0?u:[""],N=qS(C),G=0,U=0,H=0;G<s;++G)for(var J=0,Q=Lo(r,w+1,w=jS(U=h[G])),le=r;J<N;++J)(le=zS(U>0?C[J]+" "+Q:De(Q,/&\f/g,C[J])))&&(m[H++]=le);return Xf(r,e,t,o===0?Qf:p,m,g,_,b)}function j2(r,e,t,s){return Xf(r,e,t,LS,my(D2()),Lo(r,2,-2),0,s)}function ST(r,e,t,s,o){return Xf(r,e,t,py,Lo(r,0,s),Lo(r,s+1,-1),s,o)}function HS(r,e,t){switch(C2(r,e)){case 5103:return Qe+"print-"+r+r;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Qe+r+r;case 4789:return Su+r+r;case 5349:case 4246:case 4810:case 6968:case 2756:return Qe+r+Su+r+at+r+r;case 5936:switch(Ht(r,e+11)){case 114:return Qe+r+at+De(r,/[svh]\w+-[tblr]{2}/,"tb")+r;case 108:return Qe+r+at+De(r,/[svh]\w+-[tblr]{2}/,"tb-rl")+r;case 45:return Qe+r+at+De(r,/[svh]\w+-[tblr]{2}/,"lr")+r}case 6828:case 4268:case 2903:return Qe+r+at+r+r;case 6165:return Qe+r+at+"flex-"+r+r;case 5187:return Qe+r+De(r,/(\w+).+(:[^]+)/,Qe+"box-$1$2"+at+"flex-$1$2")+r;case 5443:return Qe+r+at+"flex-item-"+De(r,/flex-|-self/g,"")+(ii(r,/flex-|baseline/)?"":at+"grid-row-"+De(r,/flex-|-self/g,""))+r;case 4675:return Qe+r+at+"flex-line-pack"+De(r,/align-content|flex-|-self/g,"")+r;case 5548:return Qe+r+at+De(r,"shrink","negative")+r;case 5292:return Qe+r+at+De(r,"basis","preferred-size")+r;case 6060:return Qe+"box-"+De(r,"-grow","")+Qe+r+at+De(r,"grow","positive")+r;case 4554:return Qe+De(r,/([^-])(transform)/g,"$1"+Qe+"$2")+r;case 6187:return De(De(De(r,/(zoom-|grab)/,Qe+"$1"),/(image-set)/,Qe+"$1"),r,"")+r;case 5495:case 3959:return De(r,/(image-set\([^]*)/,Qe+"$1$`$1");case 4968:return De(De(r,/(.+:)(flex-)?(.*)/,Qe+"box-pack:$3"+at+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Qe+r+r;case 4200:if(!ii(r,/flex-|baseline/))return at+"grid-column-align"+Lo(r,e)+r;break;case 2592:case 3360:return at+De(r,"template-","")+r;case 4384:case 3616:return t&&t.some(function(s,o){return e=o,ii(s.props,/grid-\w+-end/)})?~qh(r+(t=t[e].value),"span",0)?r:at+De(r,"-start","")+r+at+"grid-row-span:"+(~qh(t,"span",0)?ii(t,/\d+/):+ii(t,/\d+/)-+ii(r,/\d+/))+";":at+De(r,"-start","")+r;case 4896:case 4128:return t&&t.some(function(s){return ii(s.props,/grid-\w+-start/)})?r:at+De(De(r,"-end","-span"),"span ","")+r;case 4095:case 3583:case 4068:case 2532:return De(r,/(.+)-inline(.+)/,Qe+"$1$2")+r;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Rr(r)-1-e>6)switch(Ht(r,e+1)){case 109:if(Ht(r,e+4)!==45)break;case 102:return De(r,/(.+:)(.+)-([^]+)/,"$1"+Qe+"$2-$3$1"+Su+(Ht(r,e+3)==108?"$3":"$2-$3"))+r;case 115:return~qh(r,"stretch",0)?HS(De(r,"stretch","fill-available"),e,t)+r:r}break;case 5152:case 5920:return De(r,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,o,u,h,p,m,g){return at+o+":"+u+g+(h?at+o+"-span:"+(p?m:+m-+u)+g:"")+r});case 4949:if(Ht(r,e+6)===121)return De(r,":",":"+Qe)+r;break;case 6444:switch(Ht(r,Ht(r,14)===45?18:11)){case 120:return De(r,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Qe+(Ht(r,14)===45?"inline-":"")+"box$3$1"+Qe+"$2$3$1"+at+"$2box$3")+r;case 100:return De(r,":",":"+at)+r}break;case 5719:case 2647:case 2135:case 3927:case 2391:return De(r,"scroll-","scroll-snap-")+r}return r}function gf(r,e){for(var t="",s=0;s<r.length;s++)t+=e(r[s],s,r,e)||"";return t}function z2(r,e,t,s){switch(r.type){case I2:if(r.children.length)break;case R2:case py:return r.return=r.return||r.value;case LS:return"";case US:return r.return=r.value+"{"+gf(r.children,s)+"}";case Qf:if(!Rr(r.value=r.props.join(",")))return""}return Rr(t=gf(r.children,s))?r.return=r.value+"{"+t+"}":""}function q2(r){var e=qS(r);return function(t,s,o,u){for(var h="",p=0;p<e;p++)h+=r[p](t,s,o,u)||"";return h}}function B2(r){return function(e){e.root||(e=e.return)&&r(e)}}function H2(r,e,t,s){if(r.length>-1&&!r.return)switch(r.type){case py:r.return=HS(r.value,r.length,t);return;case US:return gf([Xi(r,{value:De(r.value,"@","@"+Qe)})],s);case Qf:if(r.length)return x2(t=r.props,function(o){switch(ii(o,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":fo(Xi(r,{props:[De(o,/:(read-\w+)/,":"+Su+"$1")]})),fo(Xi(r,{props:[o]})),rg(r,{props:bT(t,s)});break;case"::placeholder":fo(Xi(r,{props:[De(o,/:(plac\w+)/,":"+Qe+"input-$1")]})),fo(Xi(r,{props:[De(o,/:(plac\w+)/,":"+Su+"$1")]})),fo(Xi(r,{props:[De(o,/:(plac\w+)/,at+"input-$1")]})),fo(Xi(r,{props:[o]})),rg(r,{props:bT(t,s)});break}return""})}}var F2={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},xn={},jo=typeof process<"u"&&xn!==void 0&&(xn.REACT_APP_SC_ATTR||xn.SC_ATTR)||"data-styled",FS="active",GS="data-styled-version",Jf="6.1.17",gy=`/*!sc*/
`,yf=typeof window<"u"&&"HTMLElement"in window,G2=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&xn!==void 0&&xn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&xn.REACT_APP_SC_DISABLE_SPEEDY!==""?xn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&xn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&xn!==void 0&&xn.SC_DISABLE_SPEEDY!==void 0&&xn.SC_DISABLE_SPEEDY!==""&&xn.SC_DISABLE_SPEEDY!=="false"&&xn.SC_DISABLE_SPEEDY),Zf=Object.freeze([]),zo=Object.freeze({});function $2(r,e,t){return t===void 0&&(t=zo),r.theme!==t.theme&&r.theme||e||t.theme}var $S=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),K2=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Q2=/(^-|-$)/g;function AT(r){return r.replace(K2,"-").replace(Q2,"")}var Y2=/(a)(d)/gi,Rh=52,RT=function(r){return String.fromCharCode(r+(r>25?39:97))};function ag(r){var e,t="";for(e=Math.abs(r);e>Rh;e=e/Rh|0)t=RT(e%Rh)+t;return(RT(e%Rh)+t).replace(Y2,"$1-$2")}var Em,KS=5381,_o=function(r,e){for(var t=e.length;t;)r=33*r^e.charCodeAt(--t);return r},QS=function(r){return _o(KS,r)};function X2(r){return ag(QS(r)>>>0)}function W2(r){return r.displayName||r.name||"Component"}function Tm(r){return typeof r=="string"&&!0}var YS=typeof Symbol=="function"&&Symbol.for,XS=YS?Symbol.for("react.memo"):60115,J2=YS?Symbol.for("react.forward_ref"):60112,Z2={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},eM={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},WS={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},tM=((Em={})[J2]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Em[XS]=WS,Em);function IT(r){return("type"in(e=r)&&e.type.$$typeof)===XS?WS:"$$typeof"in r?tM[r.$$typeof]:Z2;var e}var nM=Object.defineProperty,rM=Object.getOwnPropertyNames,CT=Object.getOwnPropertySymbols,iM=Object.getOwnPropertyDescriptor,sM=Object.getPrototypeOf,xT=Object.prototype;function JS(r,e,t){if(typeof e!="string"){if(xT){var s=sM(e);s&&s!==xT&&JS(r,s,t)}var o=rM(e);CT&&(o=o.concat(CT(e)));for(var u=IT(r),h=IT(e),p=0;p<o.length;++p){var m=o[p];if(!(m in eM||t&&t[m]||h&&m in h||u&&m in u)){var g=iM(e,m);try{nM(r,m,g)}catch{}}}}return r}function qo(r){return typeof r=="function"}function yy(r){return typeof r=="object"&&"styledComponentId"in r}function ia(r,e){return r&&e?"".concat(r," ").concat(e):r||e||""}function DT(r,e){if(r.length===0)return"";for(var t=r[0],s=1;s<r.length;s++)t+=r[s];return t}function ku(r){return r!==null&&typeof r=="object"&&r.constructor.name===Object.name&&!("props"in r&&r.$$typeof)}function og(r,e,t){if(t===void 0&&(t=!1),!t&&!ku(r)&&!Array.isArray(r))return e;if(Array.isArray(e))for(var s=0;s<e.length;s++)r[s]=og(r[s],e[s]);else if(ku(e))for(var s in e)r[s]=og(r[s],e[s]);return r}function vy(r,e){Object.defineProperty(r,"toString",{value:e})}function Ku(r){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(r," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var aM=function(){function r(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return r.prototype.indexOfGroup=function(e){for(var t=0,s=0;s<e;s++)t+=this.groupSizes[s];return t},r.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var s=this.groupSizes,o=s.length,u=o;e>=u;)if((u<<=1)<0)throw Ku(16,"".concat(e));this.groupSizes=new Uint32Array(u),this.groupSizes.set(s),this.length=u;for(var h=o;h<u;h++)this.groupSizes[h]=0}for(var p=this.indexOfGroup(e+1),m=(h=0,t.length);h<m;h++)this.tag.insertRule(p,t[h])&&(this.groupSizes[e]++,p++)},r.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],s=this.indexOfGroup(e),o=s+t;this.groupSizes[e]=0;for(var u=s;u<o;u++)this.tag.deleteRule(s)}},r.prototype.getGroup=function(e){var t="";if(e>=this.length||this.groupSizes[e]===0)return t;for(var s=this.groupSizes[e],o=this.indexOfGroup(e),u=o+s,h=o;h<u;h++)t+="".concat(this.tag.getRule(h)).concat(gy);return t},r}(),Fh=new Map,vf=new Map,Gh=1,Ih=function(r){if(Fh.has(r))return Fh.get(r);for(;vf.has(Gh);)Gh++;var e=Gh++;return Fh.set(r,e),vf.set(e,r),e},oM=function(r,e){Gh=e+1,Fh.set(r,e),vf.set(e,r)},lM="style[".concat(jo,"][").concat(GS,'="').concat(Jf,'"]'),uM=new RegExp("^".concat(jo,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),cM=function(r,e,t){for(var s,o=t.split(","),u=0,h=o.length;u<h;u++)(s=o[u])&&r.registerName(e,s)},hM=function(r,e){for(var t,s=((t=e.textContent)!==null&&t!==void 0?t:"").split(gy),o=[],u=0,h=s.length;u<h;u++){var p=s[u].trim();if(p){var m=p.match(uM);if(m){var g=0|parseInt(m[1],10),_=m[2];g!==0&&(oM(_,g),cM(r,_,m[3]),r.getTag().insertRules(g,o)),o.length=0}else o.push(p)}}},NT=function(r){for(var e=document.querySelectorAll(lM),t=0,s=e.length;t<s;t++){var o=e[t];o&&o.getAttribute(jo)!==FS&&(hM(r,o),o.parentNode&&o.parentNode.removeChild(o))}};function fM(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var ZS=function(r){var e=document.head,t=r||e,s=document.createElement("style"),o=function(p){var m=Array.from(p.querySelectorAll("style[".concat(jo,"]")));return m[m.length-1]}(t),u=o!==void 0?o.nextSibling:null;s.setAttribute(jo,FS),s.setAttribute(GS,Jf);var h=fM();return h&&s.setAttribute("nonce",h),t.insertBefore(s,u),s},dM=function(){function r(e){this.element=ZS(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(t){if(t.sheet)return t.sheet;for(var s=document.styleSheets,o=0,u=s.length;o<u;o++){var h=s[o];if(h.ownerNode===t)return h}throw Ku(17)}(this.element),this.length=0}return r.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}},r.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},r.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},r}(),pM=function(){function r(e){this.element=ZS(e),this.nodes=this.element.childNodes,this.length=0}return r.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var s=document.createTextNode(t);return this.element.insertBefore(s,this.nodes[e]||null),this.length++,!0}return!1},r.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},r.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},r}(),mM=function(){function r(e){this.rules=[],this.length=0}return r.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},r.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},r.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},r}(),OT=yf,gM={isServer:!yf,useCSSOMInjection:!G2},eA=function(){function r(e,t,s){e===void 0&&(e=zo),t===void 0&&(t={});var o=this;this.options=vn(vn({},gM),e),this.gs=t,this.names=new Map(s),this.server=!!e.isServer,!this.server&&yf&&OT&&(OT=!1,NT(this)),vy(this,function(){return function(u){for(var h=u.getTag(),p=h.length,m="",g=function(b){var w=function(H){return vf.get(H)}(b);if(w===void 0)return"continue";var C=u.names.get(w),N=h.getGroup(b);if(C===void 0||!C.size||N.length===0)return"continue";var G="".concat(jo,".g").concat(b,'[id="').concat(w,'"]'),U="";C!==void 0&&C.forEach(function(H){H.length>0&&(U+="".concat(H,","))}),m+="".concat(N).concat(G,'{content:"').concat(U,'"}').concat(gy)},_=0;_<p;_++)g(_);return m}(o)})}return r.registerId=function(e){return Ih(e)},r.prototype.rehydrate=function(){!this.server&&yf&&NT(this)},r.prototype.reconstructWithOptions=function(e,t){return t===void 0&&(t=!0),new r(vn(vn({},this.options),e),this.gs,t&&this.names||void 0)},r.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},r.prototype.getTag=function(){return this.tag||(this.tag=(e=function(t){var s=t.useCSSOMInjection,o=t.target;return t.isServer?new mM(o):s?new dM(o):new pM(o)}(this.options),new aM(e)));var e},r.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},r.prototype.registerName=function(e,t){if(Ih(e),this.names.has(e))this.names.get(e).add(t);else{var s=new Set;s.add(t),this.names.set(e,s)}},r.prototype.insertRules=function(e,t,s){this.registerName(e,t),this.getTag().insertRules(Ih(e),s)},r.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},r.prototype.clearRules=function(e){this.getTag().clearGroup(Ih(e)),this.clearNames(e)},r.prototype.clearTag=function(){this.tag=void 0},r}(),yM=/&/g,vM=/^\s*\/\/.*$/gm;function tA(r,e){return r.map(function(t){return t.type==="rule"&&(t.value="".concat(e," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(e," ")),t.props=t.props.map(function(s){return"".concat(e," ").concat(s)})),Array.isArray(t.children)&&t.type!=="@keyframes"&&(t.children=tA(t.children,e)),t})}function _M(r){var e,t,s,o=zo,u=o.options,h=u===void 0?zo:u,p=o.plugins,m=p===void 0?Zf:p,g=function(w,C,N){return N.startsWith(t)&&N.endsWith(t)&&N.replaceAll(t,"").length>0?".".concat(e):w},_=m.slice();_.push(function(w){w.type===Qf&&w.value.includes("&")&&(w.props[0]=w.props[0].replace(yM,t).replace(s,g))}),h.prefix&&_.push(H2),_.push(z2);var b=function(w,C,N,G){C===void 0&&(C=""),N===void 0&&(N=""),G===void 0&&(G="&"),e=G,t=C,s=new RegExp("\\".concat(t,"\\b"),"g");var U=w.replace(vM,""),H=U2(N||C?"".concat(N," ").concat(C," { ").concat(U," }"):U);h.namespace&&(H=tA(H,h.namespace));var J=[];return gf(H,q2(_.concat(B2(function(Q){return J.push(Q)})))),J};return b.hash=m.length?m.reduce(function(w,C){return C.name||Ku(15),_o(w,C.name)},KS).toString():"",b}var EM=new eA,lg=_M(),nA=So.createContext({shouldForwardProp:void 0,styleSheet:EM,stylis:lg});nA.Consumer;So.createContext(void 0);function kT(){return z.useContext(nA)}var TM=function(){function r(e,t){var s=this;this.inject=function(o,u){u===void 0&&(u=lg);var h=s.name+u.hash;o.hasNameForId(s.id,h)||o.insertRules(s.id,h,u(s.rules,h,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,vy(this,function(){throw Ku(12,String(s.name))})}return r.prototype.getName=function(e){return e===void 0&&(e=lg),this.name+e.hash},r}(),bM=function(r){return r>="A"&&r<="Z"};function MT(r){for(var e="",t=0;t<r.length;t++){var s=r[t];if(t===1&&s==="-"&&r[0]==="-")return r;bM(s)?e+="-"+s.toLowerCase():e+=s}return e.startsWith("ms-")?"-"+e:e}var rA=function(r){return r==null||r===!1||r===""},iA=function(r){var e,t,s=[];for(var o in r){var u=r[o];r.hasOwnProperty(o)&&!rA(u)&&(Array.isArray(u)&&u.isCss||qo(u)?s.push("".concat(MT(o),":"),u,";"):ku(u)?s.push.apply(s,Xh(Xh(["".concat(o," {")],iA(u),!1),["}"],!1)):s.push("".concat(MT(o),": ").concat((e=o,(t=u)==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in F2||e.startsWith("--")?String(t).trim():"".concat(t,"px")),";")))}return s};function aa(r,e,t,s){if(rA(r))return[];if(yy(r))return[".".concat(r.styledComponentId)];if(qo(r)){if(!qo(u=r)||u.prototype&&u.prototype.isReactComponent||!e)return[r];var o=r(e);return aa(o,e,t,s)}var u;return r instanceof TM?t?(r.inject(t,s),[r.getName(s)]):[r]:ku(r)?iA(r):Array.isArray(r)?Array.prototype.concat.apply(Zf,r.map(function(h){return aa(h,e,t,s)})):[r.toString()]}function wM(r){for(var e=0;e<r.length;e+=1){var t=r[e];if(qo(t)&&!yy(t))return!1}return!0}var SM=QS(Jf),AM=function(){function r(e,t,s){this.rules=e,this.staticRulesId="",this.isStatic=(s===void 0||s.isStatic)&&wM(e),this.componentId=t,this.baseHash=_o(SM,t),this.baseStyle=s,eA.registerId(t)}return r.prototype.generateAndInjectStyles=function(e,t,s){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,s):"";if(this.isStatic&&!s.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))o=ia(o,this.staticRulesId);else{var u=DT(aa(this.rules,e,t,s)),h=ag(_o(this.baseHash,u)>>>0);if(!t.hasNameForId(this.componentId,h)){var p=s(u,".".concat(h),void 0,this.componentId);t.insertRules(this.componentId,h,p)}o=ia(o,h),this.staticRulesId=h}else{for(var m=_o(this.baseHash,s.hash),g="",_=0;_<this.rules.length;_++){var b=this.rules[_];if(typeof b=="string")g+=b;else if(b){var w=DT(aa(b,e,t,s));m=_o(m,w+_),g+=w}}if(g){var C=ag(m>>>0);t.hasNameForId(this.componentId,C)||t.insertRules(this.componentId,C,s(g,".".concat(C),void 0,this.componentId)),o=ia(o,C)}}return o},r}(),sA=So.createContext(void 0);sA.Consumer;var bm={};function RM(r,e,t){var s=yy(r),o=r,u=!Tm(r),h=e.attrs,p=h===void 0?Zf:h,m=e.componentId,g=m===void 0?function(le,oe){var ue=typeof le!="string"?"sc":AT(le);bm[ue]=(bm[ue]||0)+1;var D="".concat(ue,"-").concat(X2(Jf+ue+bm[ue]));return oe?"".concat(oe,"-").concat(D):D}(e.displayName,e.parentComponentId):m,_=e.displayName,b=_===void 0?function(le){return Tm(le)?"styled.".concat(le):"Styled(".concat(W2(le),")")}(r):_,w=e.displayName&&e.componentId?"".concat(AT(e.displayName),"-").concat(e.componentId):e.componentId||g,C=s&&o.attrs?o.attrs.concat(p).filter(Boolean):p,N=e.shouldForwardProp;if(s&&o.shouldForwardProp){var G=o.shouldForwardProp;if(e.shouldForwardProp){var U=e.shouldForwardProp;N=function(le,oe){return G(le,oe)&&U(le,oe)}}else N=G}var H=new AM(t,w,s?o.componentStyle:void 0);function J(le,oe){return function(ue,D,R){var x=ue.attrs,O=ue.componentStyle,P=ue.defaultProps,L=ue.foldedComponentIds,I=ue.styledComponentId,Ge=ue.target,Ue=So.useContext(sA),X=kT(),ce=ue.shouldForwardProp||X.shouldForwardProp,me=$2(D,Ue,P)||zo,be=function(Re,ye,Ze){for(var He,Vt=vn(vn({},ye),{className:void 0,theme:Ze}),Nn=0;Nn<Re.length;Nn+=1){var fn=qo(He=Re[Nn])?He(Vt):He;for(var Jt in fn)Vt[Jt]=Jt==="className"?ia(Vt[Jt],fn[Jt]):Jt==="style"?vn(vn({},Vt[Jt]),fn[Jt]):fn[Jt]}return ye.className&&(Vt.className=ia(Vt.className,ye.className)),Vt}(x,D,me),M=be.as||Ge,ee={};for(var ae in be)be[ae]===void 0||ae[0]==="$"||ae==="as"||ae==="theme"&&be.theme===me||(ae==="forwardedAs"?ee.as=be.forwardedAs:ce&&!ce(ae,M)||(ee[ae]=be[ae]));var se=function(Re,ye){var Ze=kT(),He=Re.generateAndInjectStyles(ye,Ze.styleSheet,Ze.stylis);return He}(O,be),ge=ia(L,I);return se&&(ge+=" "+se),be.className&&(ge+=" "+be.className),ee[Tm(M)&&!$S.has(M)?"class":"className"]=ge,R&&(ee.ref=R),z.createElement(M,ee)}(Q,le,oe)}J.displayName=b;var Q=So.forwardRef(J);return Q.attrs=C,Q.componentStyle=H,Q.displayName=b,Q.shouldForwardProp=N,Q.foldedComponentIds=s?ia(o.foldedComponentIds,o.styledComponentId):"",Q.styledComponentId=w,Q.target=s?o.target:r,Object.defineProperty(Q,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(le){this._foldedDefaultProps=s?function(oe){for(var ue=[],D=1;D<arguments.length;D++)ue[D-1]=arguments[D];for(var R=0,x=ue;R<x.length;R++)og(oe,x[R],!0);return oe}({},o.defaultProps,le):le}}),vy(Q,function(){return".".concat(Q.styledComponentId)}),u&&JS(Q,r,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),Q}function PT(r,e){for(var t=[r[0]],s=0,o=e.length;s<o;s+=1)t.push(e[s],r[s+1]);return t}var VT=function(r){return Object.assign(r,{isCss:!0})};function IM(r){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];if(qo(r)||ku(r))return VT(aa(PT(Zf,Xh([r],e,!0))));var s=r;return e.length===0&&s.length===1&&typeof s[0]=="string"?aa(s):VT(aa(PT(s,e)))}function ug(r,e,t){if(t===void 0&&(t=zo),!e)throw Ku(1,e);var s=function(o){for(var u=[],h=1;h<arguments.length;h++)u[h-1]=arguments[h];return r(e,t,IM.apply(void 0,Xh([o],u,!1)))};return s.attrs=function(o){return ug(r,e,vn(vn({},t),{attrs:Array.prototype.concat(t.attrs,o).filter(Boolean)}))},s.withConfig=function(o){return ug(r,e,vn(vn({},t),o))},s}var aA=function(r){return ug(RM,r)},ie=aA;$S.forEach(function(r){ie[r]=aA(r)});const CM=ie.header`
  background-color: #2b5a1d;
  color: white;
  padding: 0 2rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: visible;
`,xM=ie.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 1;
`,DM=ie(Go)`
  text-decoration: none;
  color: white;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: -1.5rem 0;  /* Increased negative margin to allow more logo overflow */
`,NM=ie.img`
  height: 120px;
  width: auto;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`,OM=ie.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`,kM=ie.p`
  @media (max-width: 768px) {
    display: none;
  }
`,MM=ie.nav`
  display: flex;
  align-items: center;
  gap: 1rem;
`,PM=ie.ul`
  display: flex;
  gap: 1rem;
  list-style: none;
  margin: 0;
  padding: 0;
`,LT=ie.li`
  padding: 0;
`,UT=ie(Go)`
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
`,VM=ie.div`
  display: flex;
  gap: 1rem;
`,Ch=ie(Go)`
  text-decoration: none;
  color: white;
  font-weight: 500;
  font-size: 0.95rem;
  padding: 0.3rem 0.8rem;
  border-radius: 4px;
  transition: all 0.2s;
  background-color: ${r=>r.$primary?"rgba(255, 255, 255, 0.2)":"transparent"};
  border: 1px solid ${r=>r.$primary?"transparent":"rgba(255, 255, 255, 0.5)"};

  &:hover {
    background-color: ${r=>r.$primary?"rgba(255, 255, 255, 0.3)":"rgba(255, 255, 255, 0.1)"};
  }

  @media (max-width: 768px) {
    &[data-mobile-text]:before {
      content: attr(data-mobile-text);
    }
    &[data-mobile-text] > span {
      display: none;
    }
  }
`,LM=()=>{const{currentUser:r}=vs(),[e,t]=z.useState(null);return z.useEffect(()=>{(async()=>{if(r){const o=await Vo(ar(gt,"users",r.uid));o.exists()&&t(o.data().userType)}})()},[r]),A.jsx(CM,{children:A.jsxs(xM,{children:[A.jsxs(DM,{to:"/",children:[A.jsx(NM,{src:"/logo.png",alt:"FirstJob Logo"}),A.jsx(OM,{children:A.jsx(kM,{children:"Find your first job - No experience required"})})]}),A.jsxs(MM,{children:[A.jsxs(PM,{children:[A.jsx(LT,{children:A.jsx(UT,{to:"/",children:"Home"})}),(!r||e==="jobseeker")&&A.jsx(LT,{children:A.jsx(UT,{to:"/interview/customer-service",children:"Practice Interviews"})})]}),A.jsx(VM,{children:r?A.jsx(A.Fragment,{children:e==="employer"?A.jsx(Ch,{to:"/employer/dashboard",$primary:!0,"data-mobile-text":"Dashboard",children:A.jsx("span",{children:"Employer Dashboard"})}):A.jsx(Ch,{to:"/profile",$primary:!0,children:"My Profile"})}):A.jsxs(A.Fragment,{children:[A.jsx(Ch,{to:"/login",children:"Login"}),A.jsx(Ch,{to:"/register",$primary:!0,children:"Register"})]})})]})]})})},UM=ie.footer`
  background-color: var(--dark);
  color: white;
  text-align: center;
  padding: 2rem;
  margin-top: 2rem;
`,jM=()=>A.jsxs(UM,{children:[A.jsx("p",{children:"© 2025 FirstJob - Helping beginners start their careers"}),A.jsx("p",{children:"Contact: info@firstjob.example.com"})]}),zM=async()=>{try{const r=nr(gt,"jobs");return(await _a(r)).docs.map(t=>({id:t.id,...t.data()}))}catch(r){return console.error("Error getting jobs:",r),[]}},qM=async r=>{try{const e=nr(gt,"jobs"),t=fa(e,da("employerId","==",r));return(await _a(t)).docs.map(o=>({id:o.id,...o.data()}))}catch(e){return console.error("Error getting employer jobs:",e),[]}},BM=async r=>{try{const e=nr(gt,"jobs");return{id:(await $f(e,{...r,createdAt:new Date().toISOString(),status:"active"})).id,...r}}catch(e){throw console.error("Error posting job:",e),e}},HM=async r=>{try{const e=ar(gt,"jobs",r);return await y2(e),!0}catch(e){throw console.error("Error deleting job:",e),e}},FM=async r=>{try{const e=ar(gt,"users",r),t=await Vo(e);return t.exists()?{id:t.id,...t.data()}:(console.log("No such user!"),null)}catch(e){return console.error("Error getting user profile:",e),null}},GM=async(r,e)=>{try{const t=ar(gt,"users",r);return await OS(t,{savedJobs:_2(e)}),!0}catch(t){return console.error("Error saving job:",t),!1}},$M=async(r,e)=>{try{const t=ar(gt,"users",r);return await OS(t,{savedJobs:E2(e)}),!0}catch(t){return console.error("Error removing job:",t),!1}},KM=async r=>{try{const e=nr(gt,"applications"),t=fa(e,da("jobId","==",r));return(await _a(t)).docs.map(o=>({id:o.id,...o.data()}))}catch(e){return console.error("Error getting job applications:",e),[]}},QM=ie.div`
  display: flex;
  flex-direction: column;
  height: 400px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: white;
`,YM=ie.div`
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,XM=ie.div`
  padding: 0.8rem;
  border-radius: 8px;
  max-width: 80%;
  word-wrap: break-word;
  ${r=>r.$isSender?`
    background-color: var(--primary);
    color: white;
    align-self: flex-end;
  `:`
    background-color: #f0f0f0;
    align-self: flex-start;
  `}
`,WM=ie.span`
  font-size: 0.8rem;
  color: ${r=>r.$isSender?"rgba(255, 255, 255, 0.8)":"#666"};
  display: block;
  margin-top: 0.3rem;
`,JM=ie.form`
  display: flex;
  gap: 0.5rem;
  padding: 1rem;
  border-top: 1px solid #ddd;
`,ZM=ie.input`
  flex: 1;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.9rem;

  &:focus {
    outline: none;
    border-color: var(--primary);
  }
`,eP=ie.button`
  background-color: var(--primary);
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;

  &:hover {
    background-color: #1a4314;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`,_y=({applicationId:r,senderId:e,receiverId:t})=>{const[s,o]=z.useState([]),[u,h]=z.useState(""),[p,m]=z.useState(!1),g=z.useRef(null),_=()=>{var C;(C=g.current)==null||C.scrollIntoView({behavior:"smooth"})};z.useEffect(()=>{_()},[s]),z.useEffect(()=>{if(!r){console.error("No applicationId provided");return}(async()=>{try{const H=nr(gt,"messages"),J=fa(H,da("applicationId","==",r),_T("timestamp","asc"));try{const le=(await _a(J)).docs.map(oe=>({id:oe.id,...oe.data()}));o(le.sort((oe,ue)=>oe.timestamp.seconds-ue.timestamp.seconds))}catch(Q){Q.code==="failed-precondition"&&console.error("This query requires an index. Please create it in the Firebase Console.")}}catch(H){console.error("Error fetching messages:",H)}})();const N=nr(gt,"messages"),G=fa(N,da("applicationId","==",r),_T("timestamp","asc")),U=v2(G,H=>{const J=H.docs.map(Q=>({id:Q.id,...Q.data()}));o(J.sort((Q,le)=>Q.timestamp.seconds-le.timestamp.seconds))},H=>{H.code==="failed-precondition"?console.error("This query requires an index. Please create it in the Firebase Console."):console.error("Error in messages listener:",H)});return()=>U()},[r]);const b=async C=>{if(C.preventDefault(),!!u.trim()){m(!0);try{const N={applicationId:r,senderId:e,receiverId:t,content:u.trim(),timestamp:Tt.now(),read:!1};await $f(nr(gt,"messages"),N),h("")}catch(N){console.error("Error sending message:",N)}finally{m(!1)}}},w=C=>C?new Date(C.seconds*1e3).toLocaleString():"";return A.jsxs(QM,{children:[A.jsxs(YM,{children:[s.map(C=>A.jsxs(XM,{$isSender:C.senderId===e,children:[C.content,A.jsx(WM,{$isSender:C.senderId===e,children:w(C.timestamp)})]},C.id)),A.jsx("div",{ref:g})]}),A.jsxs(JM,{onSubmit:b,children:[A.jsx(ZM,{type:"text",value:u,onChange:C=>h(C.target.value),placeholder:"Type a message...",disabled:p}),A.jsx(eP,{type:"submit",disabled:p||!u.trim(),children:p?"Sending...":"Send"})]})]})},tP=ie.div`
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
`,nP=ie.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  width: 90%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
`,rP=ie.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,iP=ie.textarea`
  width: 100%;
  min-height: 200px;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  resize: vertical;
`,jT=ie.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
`,wm=ie.button`
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
`,sP=({job:r,onClose:e})=>{const{currentUser:t}=vs(),[s,o]=z.useState(""),[u,h]=z.useState(!1),[p,m]=z.useState(null),[g,_]=z.useState(!1),[b,w]=z.useState(""),C=async N=>{var G;N.preventDefault(),h(!0);try{const U=nr(gt,"users"),H=fa(U,da("uid","==",t.uid)),Q=((G=(await _a(H)).docs[0])==null?void 0:G.data())||{},le={jobId:r.id,applicantId:t.uid,employerId:r.employerId,motivationLetter:s,timestamp:Tt.now(),status:"pending",applicantName:Q.name||t.displayName||"Anonymous User",applicantEmail:Q.email||t.email||"No email provided"},oe=await $f(nr(gt,"applications"),le);m(oe.id),_(!0),e()}catch(U){console.error("Error submitting application:",U),w("Failed to submit application. Please try again.")}finally{h(!1)}};return A.jsx(tP,{onClick:e,children:A.jsxs(nP,{onClick:N=>N.stopPropagation(),children:[A.jsxs("h2",{children:["Apply for ",r.title]}),A.jsxs("p",{children:[A.jsx("strong",{children:"Company:"})," ",r.company]}),g?A.jsxs(A.Fragment,{children:[A.jsx("p",{children:"Your application has been submitted successfully!"}),A.jsx(_y,{applicationId:p,senderId:t.uid,receiverId:r.employerId}),A.jsx(jT,{children:A.jsx(wm,{type:"button",className:"secondary",onClick:e,children:"Close"})})]}):A.jsxs(rP,{onSubmit:C,children:[A.jsxs("div",{children:[A.jsx("label",{htmlFor:"motivationLetter",children:"Motivation Letter"}),A.jsx(iP,{id:"motivationLetter",value:s,onChange:N=>o(N.target.value),placeholder:"Write your motivation letter here...",required:!0})]}),A.jsxs(jT,{children:[A.jsx(wm,{type:"button",className:"secondary",onClick:e,children:"Cancel"}),A.jsx(wm,{type:"submit",className:"primary",disabled:u,children:u?"Submitting...":"Submit Application"})]})]})]})})},aP=ie.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
`,oP=ie.div`
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
`,lP=ie.h3`
  margin-top: 0;
  margin-bottom: 0.5rem;
  color: var(--primary);
  font-weight: bold;
  font-size: 1.25rem;
`,uP=ie.h4`
  margin-top: 0;
  margin-bottom: 1rem;
  color: var(--text-secondary);
`,cP=ie.p`
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  flex-grow: 1;
`,hP=ie.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`,fP=ie.span`
  background-color: var(--background-secondary);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  color: var(--text-secondary);
`,dP=ie.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: auto;
`,pP=ie(Go)`
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
`,mP=ie.button`
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
`,gP=ie.button`
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
`,yP=ie.div`
  display: flex;
  gap: 1rem;
  width: 100%;
`,vP=()=>{const[r,e]=z.useState([]),[t,s]=z.useState(!0),[o,u]=z.useState(null),{currentUser:h}=vs(),[p,m]=z.useState(null);z.useEffect(()=>{(async()=>{try{s(!0);const w=await zM();e(w),u(null)}catch(w){console.error("Error fetching jobs:",w),u("Failed to load jobs. Please try again later.")}finally{s(!1)}})()},[]);const g=async b=>{if(!h){alert("Please login to save jobs");return}try{const w=await GM(h.uid,b);alert(w?"Job saved successfully":"Failed to save job")}catch(w){console.error("Error saving job:",w),alert("Failed to save job")}},_=b=>{if(!h){alert("Please login to apply for jobs");return}m(b)};return t?A.jsx("div",{children:"Loading jobs..."}):o?A.jsx("div",{children:o}):A.jsxs(A.Fragment,{children:[A.jsx(aP,{children:r.length>0?r.map(b=>A.jsxs(oP,{children:[A.jsx(lP,{children:b.title}),A.jsx(uP,{children:b.company}),A.jsx(cP,{children:b.description}),A.jsx(hP,{children:b.tags&&b.tags.map((w,C)=>A.jsx(fP,{children:w},C))}),A.jsxs(dP,{children:[A.jsx(gP,{onClick:()=>_(b),children:"Apply Now"}),A.jsxs(yP,{children:[A.jsx(pP,{to:`/interview/${b.jobType}`,children:"Practice Interview"}),A.jsx(mP,{onClick:()=>g(b),children:"Save Job"})]})]})]},b.id)):A.jsx("p",{children:"No jobs found. Please check back later."})}),p&&A.jsx(sP,{job:p,onClose:()=>m(null)})]})},_P=ie.div`
  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`,EP=ie.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,zT=ie.input`
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
`,TP=ie.button`
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
`,bP=ie.div`
  color: red;
  margin-top: 1rem;
`,wP=()=>{const[r,e]=z.useState(""),[t,s]=z.useState(""),[o,u]=z.useState(""),{login:h}=vs(),p=Fo(),m=async g=>{g.preventDefault(),u("");try{await h(r,t),p("/")}catch(_){u("Failed to sign in. Please check your credentials."),console.error(_)}};return A.jsxs(_P,{children:[A.jsx("h2",{children:"Login"}),o&&A.jsx(bP,{children:o}),A.jsxs(EP,{onSubmit:m,children:[A.jsx(zT,{type:"email",placeholder:"Email",value:r,onChange:g=>e(g.target.value),required:!0}),A.jsx(zT,{type:"password",placeholder:"Password",value:t,onChange:g=>s(g.target.value),required:!0}),A.jsx(TP,{type:"submit",children:"Login"})]}),A.jsxs("p",{style:{marginTop:"1rem",textAlign:"center"},children:["Don't have an account? ",A.jsx("a",{href:"/register",children:"Register"})]})]})},SP=ie.div`
  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`,AP=ie.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,ri=ie.input`
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
`,RP=ie.select`
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
`,IP=ie.button`
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
`,CP=ie.div`
  color: red;
  margin-top: 1rem;
`,xP=()=>{const{register:r}=vs(),e=Fo(),[t,s]=z.useState(""),[o,u]=z.useState(!1),[h,p]=z.useState("jobseeker"),[m,g]=z.useState({email:"",password:"",confirmPassword:"",firstName:"",lastName:"",companyName:"",phone:"",website:"",description:""}),_=w=>{const{name:C,value:N}=w.target;g(G=>({...G,[C]:N}))},b=async w=>{if(w.preventDefault(),m.password!==m.confirmPassword)return s("Passwords do not match");try{s(""),u(!0);const C=h==="employer"?{companyName:m.companyName,phone:m.phone,website:m.website,description:m.description}:{firstName:m.firstName,lastName:m.lastName};await r(m.email,m.password,C,h),e("/")}catch(C){s("Failed to create an account: "+C.message)}finally{u(!1)}};return A.jsxs(SP,{children:[A.jsx("h2",{children:"Register"}),t&&A.jsx(CP,{children:t}),A.jsxs(AP,{onSubmit:b,children:[A.jsxs(RP,{value:h,onChange:w=>p(w.target.value),children:[A.jsx("option",{value:"jobseeker",children:"Job Seeker"}),A.jsx("option",{value:"employer",children:"Employer"})]}),A.jsx(ri,{type:"email",name:"email",placeholder:"Email",value:m.email,onChange:_,required:!0}),A.jsx(ri,{type:"password",name:"password",placeholder:"Password",value:m.password,onChange:_,required:!0}),A.jsx(ri,{type:"password",name:"confirmPassword",placeholder:"Confirm Password",value:m.confirmPassword,onChange:_,required:!0}),h==="jobseeker"?A.jsxs(A.Fragment,{children:[A.jsx(ri,{type:"text",name:"firstName",placeholder:"First Name",value:m.firstName,onChange:_,required:!0}),A.jsx(ri,{type:"text",name:"lastName",placeholder:"Last Name",value:m.lastName,onChange:_,required:!0})]}):A.jsxs(A.Fragment,{children:[A.jsx(ri,{type:"text",name:"companyName",placeholder:"Company Name",value:m.companyName,onChange:_,required:!0}),A.jsx(ri,{type:"tel",name:"phone",placeholder:"Phone Number",value:m.phone,onChange:_}),A.jsx(ri,{type:"url",name:"website",placeholder:"Company Website",value:m.website,onChange:_}),A.jsx(ri,{type:"text",name:"description",placeholder:"Company Description",value:m.description,onChange:_})]}),A.jsx(IP,{type:"submit",disabled:o,children:o?"Registering...":"Register"})]})]})},DP={"customer-service":{title:"Customer Service Representative Interview",description:"Practice answering common questions for a customer service position.",questions:[{question:"Tell me about a time you had to deal with a difficult situation and how you handled it.",tips:["Use the STAR method (Situation, Task, Action, Result) to structure your answer","Focus on your problem-solving skills and how you remained calm","Emphasize what you learned from the experience","Show how you maintained professionalism throughout the situation"],keyWords:["situation","problem","solution","customer","resolved","professional","calm","learned","experience","handled"],goodFeedback:"Great answer! You showed problem-solving skills and empathy in your response. Customer service is about finding solutions while maintaining a positive attitude.",badFeedback:"Try to include specific examples of how you've handled conflicts or difficult situations. Even if you don't have work experience, you can draw from school, volunteer work, or personal interactions."},{question:"How would you handle an angry customer?",tips:["Start by actively listening to the customer's concerns","Stay calm and maintain a professional tone","Acknowledge their frustration and show empathy","Focus on finding a solution rather than placing blame","Follow up to ensure their issue was resolved"],keyWords:["listen","understand","empathy","solution","calm","professional","resolve","patience","apologize","assist"],goodFeedback:"Excellent! You demonstrated patience and a focus on resolution. Listening to the customer and maintaining a calm demeanor are key skills for this role.",badFeedback:"Consider emphasizing active listening skills and empathy more in your answer. Remember the goal is to de-escalate the situation and find a solution for the customer."},{question:"What does good customer service mean to you?",tips:["Define what customer service means in your own words","Include specific examples of good customer service you've experienced","Mention the importance of active listening and empathy","Highlight the value of going above and beyond for customers","Connect your definition to the company's values"],keyWords:["satisfaction","experience","quality","helpful","listening","empathy","service","support","communication","excellence"],goodFeedback:"Well done! Your definition of customer service aligns with what we're looking for - going above and beyond to ensure customer satisfaction.",badFeedback:"Try to be more specific about what actions constitute good customer service. Examples can help illustrate your understanding of customer needs."}]},"web-developer":{title:"Junior Web Developer Interview",description:"Practice answering technical and situational questions for a web development role.",questions:[{question:"What interests you about web development?",tips:["Share your passion for technology and problem-solving","Mention any personal projects or coding exercises you've done","Talk about specific aspects of web development that excite you","Connect your interests to the company's tech stack or projects","Show enthusiasm for continuous learning in the field"],keyWords:["passionate","projects","learning","technology","coding","development","problem-solving","creative","innovation","challenges"],goodFeedback:"Great answer! Your enthusiasm for technology and problem-solving comes through clearly. This shows us you have the right motivation for the role.",badFeedback:"Try to be more specific about what aspects of web development excite you. Mentioning any personal projects or coding exercises you've done would strengthen your answer."},{question:"How comfortable are you with HTML, CSS, and JavaScript?",tips:["Be honest about your current skill level","Mention any courses, tutorials, or projects you've completed","Highlight your willingness to learn and improve","Share specific examples of what you've built or learned","Express confidence in your ability to pick up new skills"],keyWords:["experience","projects","learning","practice","skills","knowledge","understanding","development","programming","coding"],goodFeedback:"Good response! You've honestly assessed your knowledge level and shown a willingness to learn, which is exactly what we look for in entry-level positions.",badFeedback:"It's okay to be a beginner, but try to highlight any specific exposure you have had to these technologies, even if it's just from online courses or self-learning."},{question:"How do you approach learning new technologies?",tips:["Describe your learning process and resources you use","Mention specific online platforms or communities you engage with","Share how you practice and apply what you learn","Talk about how you stay updated with industry trends","Highlight your ability to learn independently"],keyWords:["research","practice","documentation","tutorials","learning","resources","community","projects","hands-on","understanding"],goodFeedback:"Excellent answer! Your structured approach to learning shows us you can quickly adapt to new technologies, which is essential in this field.",badFeedback:"Consider mentioning specific strategies you use to learn, such as online courses, practice projects, or coding challenges. This shows your commitment to growth."}]},sales:{title:"Sales Associate Interview",description:"Practice answering sales-focused questions for a retail position.",questions:[{question:"Why do you want to work in sales?",tips:["Share your passion for helping customers","Mention your interest in product knowledge","Highlight your communication and interpersonal skills","Talk about your enthusiasm for meeting new people","Connect your answer to the company's products or services"],keyWords:["passion","customers","communication","people","products","sales","helping","skills","enthusiasm","service"],goodFeedback:"Great answer! Your enthusiasm for customer interaction and helping people find solutions aligns perfectly with sales work.",badFeedback:"Try to emphasize your interest in the customer experience more. Sales is about understanding customer needs and connecting them with the right solutions."},{question:"How would you approach a customer who seems undecided?",tips:["Start by asking open-ended questions to understand their needs","Listen actively to their responses","Suggest products based on their specific requirements","Be patient and avoid being pushy","Offer to show them different options"],keyWords:["questions","listen","understand","needs","patient","options","suggest","requirements","help","solutions"],goodFeedback:"Excellent! Your approach of asking open-ended questions and identifying needs shows you understand the consultative sales process.",badFeedback:"Consider focusing more on asking questions to understand the customer's needs rather than immediately pitching products. The best sales approach starts with listening."},{question:"How do you handle rejection?",tips:["Show resilience and a positive attitude","Mention how you learn from each rejection","Talk about maintaining professionalism","Share how you stay motivated","Highlight your ability to move on quickly"],keyWords:["resilience","positive","learn","professional","motivated","improve","attitude","opportunity","experience","growth"],goodFeedback:"Well done! Your positive attitude toward rejection and seeing it as a learning opportunity is exactly what we look for in sales associates.",badFeedback:"Remember that rejection is a normal part of sales. Try to emphasize resilience and how you would learn from each rejection to improve your approach."}]},admin:{title:"Administrative Assistant Interview",description:"Practice answering questions related to organizational and support skills.",questions:[{question:"How do you prioritize multiple tasks when everything seems urgent?",tips:["Describe your method for assessing task urgency and importance","Mention tools or systems you use for organization","Talk about how you communicate with stakeholders","Share how you handle unexpected urgent tasks","Highlight your ability to stay calm under pressure"],keyWords:["prioritize","organize","urgent","important","system","method","communicate","manage","deadline","efficiency"],goodFeedback:"Great answer! Your systematic approach to prioritization shows strong organizational skills essential for administrative work.",badFeedback:"Try to include more specific methods for prioritizing tasks, such as urgency/importance matrices or communication with stakeholders to clarify deadlines."},{question:"What experience do you have with Microsoft Office or Google Workspace?",tips:["List the specific applications you're familiar with","Mention any advanced features you know","Share examples of how you've used these tools","Talk about your willingness to learn new features","Highlight your ability to adapt to different software"],keyWords:["microsoft","google","excel","word","powerpoint","sheets","docs","experience","software","skills"],goodFeedback:"Excellent! Your familiarity with these tools, even from academic or personal use, transfers well to professional settings.",badFeedback:"Even without professional experience, you can highlight your comfort level with these tools from school or personal projects. Be specific about which applications you know best."},{question:"How do you maintain confidentiality when handling sensitive information?",tips:["Emphasize the importance of trust and discretion","Mention specific security practices you follow","Talk about your understanding of data protection","Share how you handle sensitive documents","Highlight your commitment to privacy"],keyWords:["confidential","security","privacy","trust","discretion","protection","sensitive","professional","responsibility","careful"],goodFeedback:"Well done! Your understanding of confidentiality principles shows maturity and professionalism needed for this role.",badFeedback:"Consider emphasizing the importance of trust and discretion more in your answer. Administrative roles often require handling confidential information."}]},"data-entry":{title:"Data Entry Specialist Interview",description:"Practice answering questions about accuracy, attention to detail, and efficiency.",questions:[{question:"How do you ensure accuracy in repetitive tasks?",tips:["Describe your quality control process","Mention specific techniques for double-checking work","Talk about how you maintain focus","Share how you handle distractions","Highlight your attention to detail"],keyWords:["accuracy","quality","check","detail","focus","process","attention","careful","review","precise"],goodFeedback:"Great answer! Your methods for maintaining focus and checking your work demonstrate the attention to detail needed for data entry.",badFeedback:"Try to mention specific techniques you use to maintain accuracy, such as double-checking entries, taking breaks to stay fresh, or creating a distraction-free environment."},{question:"How comfortable are you with typing and data entry speed?",tips:["Mention your typing speed if you know it","Talk about your accuracy rate"],keyWords:["typing","speed","accuracy","efficient","practice","skills","comfortable","experience","keyboard","productivity"],goodFeedback:"Good response! Your focus on balancing speed with accuracy shows you understand the key requirements of data entry work.",badFeedback:"It's helpful to mention any typing speed you know (in WPM) or your comfort level with keyboard use. Also emphasize your willingness to improve speed while maintaining accuracy."},{question:"How do you handle monotonous or repetitive tasks?",tips:["Share strategies for maintaining focus","Mention how you break up the work into manageable chunks","Talk about setting personal goals","Highlight your ability to find satisfaction in detail-oriented work","Describe how you maintain quality over time"],keyWords:["focus","strategy","goals","quality","consistent","organized","efficient","routine","satisfaction","methodical"],goodFeedback:"Excellent! Your strategies for maintaining focus and finding satisfaction in detail-oriented work align perfectly with data entry roles.",badFeedback:"Consider sharing specific techniques you use to stay engaged during repetitive tasks, such as setting small goals or finding satisfaction in maintaining quality work."}]},"social-media":{title:"Social Media Assistant Interview",description:"Practice answering questions about social media knowledge, content creation, and online trends.",questions:[{question:"Which social media platforms are you most familiar with?",tips:["List the platforms you use regularly","Mention specific features you're familiar with","Share your understanding of each platform's audience","Talk about any content creation experience","Highlight your ability to adapt to new platforms"],keyWords:["platforms","content","experience","audience","features","instagram","facebook","twitter","linkedin","creation"],goodFeedback:"Great answer! Your knowledge of multiple platforms and their different strengths shows you're ready to adapt to various social media strategies.",badFeedback:"Try to be more specific about how you use each platform and what types of content work best on each. Personal experience with social media can translate to professional skills."},{question:"How do you stay updated on social media trends?",tips:["Mention specific industry resources you follow","Talk about social media news sources","Share how you analyze trends","Highlight your ability to predict trends","Describe how you apply trends to content"],keyWords:["trends","research","industry","analytics","updates","follow","monitor","analyze","insights","strategy"],goodFeedback:"Excellent! Your proactive approach to following industry trends shows initiative and genuine interest in the field.",badFeedback:"Consider mentioning specific resources you follow to stay updated, such as industry blogs, thought leaders, or competitor accounts. This demonstrates your commitment to the field."},{question:"What makes content engaging on social media?",tips:["Talk about the importance of visuals","Mention the role of storytelling","Share your understanding of audience engagement","Highlight the value of authenticity","Describe how you measure engagement"],keyWords:["engaging","visuals","storytelling","authentic","audience","content","interaction","creative","value","strategy"],goodFeedback:"Well done! Your understanding of engagement factors shows you have insight into what resonates with audiences online.",badFeedback:"Try to include more specific elements that make content engaging, such as visuals, storytelling, or emotional connections. Examples from your personal experience can strengthen your answer."}]}},NP=async r=>{try{const e=nr(gt,"interviews"),t=fa(e,da("jobType","==",r)),s=await _a(t);if(s.empty){console.log("Creating interview data in Firebase for:",r);const h=DP[r];if(!h)return console.error(`No predefined data found for job type: ${r}`),null;const p={jobType:r,title:h.title,description:h.description,questions:h.questions.map(m=>({question:m.question,tips:m.tips||[],goodFeedback:m.goodFeedback,badFeedback:m.badFeedback}))};try{const m=await $f(e,p);return console.log("Interview data created with ID:",m.id),{id:m.id,...p}}catch(m){return console.error("Error storing interview data:",m),null}}const o=s.docs[0],u=o.data();return console.log("Retrieved interview data:",u),{id:o.id,...u}}catch(e){return console.error(`Error getting interview questions for ${r}:`,e),null}},OP=ie.div`
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
`,kP=ie.div`
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
`,MP=ie.div`
  width: 100%;
  height: 8px;
  background-color: #f0f0f0;
  border-radius: 4px;
  margin: 1.5rem 0;
  overflow: hidden;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
`,PP=ie.div`
  width: ${r=>r.$progress}%;
  height: 100%;
  background: linear-gradient(90deg, var(--primary) 0%, #4CAF50 100%);
  transition: width 0.5s ease;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`,VP=ie.div`
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
`,LP=ie.p`
  font-size: 1.3rem;
  color: #2c3e50;
  margin-bottom: 2rem;
  line-height: 1.5;
  font-weight: 500;
`,UP=ie.div`
  margin-bottom: 2rem;
  padding: 2rem;
  background-color: #f8f9fa;
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`,jP=ie.div`
  margin: 2rem 0;
  padding: 1.5rem;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
`,zP=ie.h4`
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
`,qP=ie.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,BP=ie.li`
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
`,HP=ie.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #edf2f7;
`,Sm=ie.button`
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
`,FP=ie.div`
  margin-top: 2rem;
`,GP=ie.textarea`
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
`,$P=ie.div`
  background-color: white;
  padding: 1.5rem;
  border-radius: 12px;
  margin-top: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
`,KP=ie.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin: 1rem 0;
`,QP=ie.div`
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
`,YP=ie.div`
  text-align: center;
  color: #4a5568;
  font-size: 1rem;
  margin-top: 0.5rem;
  
  span {
    color: ${r=>r.complete?"#276749":"#4a5568"};
    font-weight: 600;
  }
`,XP=ie.div`
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
`;ie.div`
  color: #d32f2f;
  margin-top: 0.5rem;
  font-size: 0.875rem;
`;const oA=({open:r,onClose:e,jobType:t})=>{const{jobType:s}=vR(),o=Fo(),u=t||s,[h,p]=z.useState(null),[m,g]=z.useState(0),[_,b]=z.useState(!0),[w,C]=z.useState(null),[N,G]=z.useState(""),[U,H]=z.useState(!1),[J,Q]=z.useState([]),[le,oe]=z.useState({answerWords:[],hasWordSpam:!1});z.useEffect(()=>{(async()=>{if(!u){b(!1);return}try{b(!0);const I=await NP(u);console.log("Fetched interview data:",I),I?(p(I),C(null)):C(`No interview questions found for ${u} jobs.`)}catch(I){console.error("Error fetching interview data:",I),C("Failed to load interview questions. Please try again later.")}finally{b(!1)}})()},[u]),z.useEffect(()=>{G(""),H(!1)},[m]);const ue=L=>{if(!L||!(h!=null&&h.questions[m]))return;const I=h.questions[m].keyWords;if(!I||!Array.isArray(I))return;const Ge=L.toLowerCase().replace(/[.,!?]/g,"").split(/\s+/).filter(ae=>ae.length>2),Ue={};Ge.forEach(ae=>{Ue[ae]=(Ue[ae]||0)+1});const X=4,ce=Object.entries(Ue).filter(([ae,se])=>se>X).map(([ae])=>ae),me=ce.length>0;if(me)return H(!1),Q([]),{answerWords:Ge,hasWordSpam:me,spamWords:ce};const be=(ae,se)=>{if(ae===se||ae.includes(se)||se.includes(ae))return!0;const ge=[ae,ae.replace(/ing$/,""),ae.replace(/ed$/,""),ae.replace(/s$/,""),ae.replace(/es$/,"")],Re=[se,se.replace(/ing$/,""),se.replace(/ed$/,""),se.replace(/s$/,""),se.replace(/es$/,"")];return ge.some(ye=>Re.some(Ze=>ye===Ze||ye.length>3&&Ze.length>3&&(ye.includes(Ze)||Ze.includes(ye))))},M=[...new Set(Ge)].filter(ae=>I.some(se=>be(ae,se.toLowerCase())));console.log("Answer words:",Ge),console.log("Keywords:",I),console.log("Matching words:",M);const ee=M.length>=6;return H(ee),Q(M),{answerWords:Ge,hasWordSpam:!1,matchedKeywords:M}},D=L=>{const I=L.target.value;G(I);const Ge=ue(I);oe(Ge)},R=()=>{m<h.questions.length-1?g(m+1):o("/")},x=()=>{m>0&&g(m-1)},O=()=>{e?e():o("/")};if(_)return A.jsx("div",{children:"Loading interview questions..."});if(w)return A.jsx("div",{children:w});if(!h||!h.questions||h.questions.length===0)return A.jsx("div",{children:"No interview questions available."});const P=h.questions[m];return console.log("Current question:",P),A.jsxs(OP,{children:[A.jsxs(kP,{children:[A.jsx("h2",{children:h.title}),A.jsx("p",{children:h.description}),A.jsx(MP,{children:A.jsx(PP,{$progress:(m+1)/h.questions.length*100})})]}),A.jsxs(UP,{children:[A.jsxs(VP,{children:[A.jsxs("h3",{children:["Question ",m+1]}),A.jsxs("span",{children:[m+1," of ",h.questions.length]})]}),A.jsx(LP,{children:P.question}),A.jsxs(jP,{children:[A.jsx(zP,{children:"Tips:"}),A.jsx(qP,{children:P.tips&&P.tips.map((L,I)=>A.jsx(BP,{children:L},I))})]}),A.jsxs(FP,{children:[A.jsx(GP,{value:N,onChange:D,placeholder:"Include at least 6 relevant keywords in your answer."}),A.jsxs($P,{children:[!U&&N.length>0&&A.jsxs(A.Fragment,{children:[A.jsx("div",{style:{textAlign:"center",color:"#4a5568",marginBottom:"0.5rem"},children:le.hasWordSpam?"Please avoid repeating words excessively":"Include more relevant keywords in your answer"}),A.jsx(KP,{children:Array(6).fill(0).map((L,I)=>A.jsx(QP,{$filled:I<J.length},I))}),A.jsx(YP,{complete:!1,children:A.jsxs("div",{children:[A.jsx("span",{children:6-J.length})," more keywords needed"]})})]}),U&&A.jsxs(XP,{children:[A.jsx("span",{children:"✨"}),"Excellent! Your answer includes all the required keywords."]})]})]})]}),A.jsxs(HP,{children:[A.jsx(Sm,{onClick:x,$disabled:m===0,children:"← Previous"}),m<h.questions.length-1?A.jsx(Sm,{onClick:R,$disabled:!U,children:"Next →"}):A.jsx(Sm,{onClick:O,$disabled:!U,children:"Finish"})]})]})},WP=ie.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`,qT=ie.div`
  margin-bottom: 2rem;
`,JP=ie.ul`
  list-style: none;
  padding: 0;
`,ZP=ie.li`
  margin-bottom: 1rem;
  padding: 1rem;
  background-color: var(--background-secondary);
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,eV=ie.div`
  display: flex;
  gap: 1rem;
`,Am=ie.button`
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
`,tV=ie.button`
  background-color: var(--danger);
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 2rem;
`,nV=ie.div`
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
`,rV=ie.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  width: 90%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
`,iV=ie.button`
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
`,sV=()=>{var oe;const{currentUser:r,logout:e}=vs(),[t,s]=z.useState(null),[o,u]=z.useState(!0),[h,p]=z.useState(null),[m,g]=z.useState(!1),[_,b]=z.useState(null),[w,C]=z.useState(!1),[N,G]=z.useState(null),U=Fo();z.useEffect(()=>{(async()=>{if(!r){u(!1);return}try{u(!0);const D=await FM(r.uid);s(D),p(null)}catch(D){console.error("Error fetching user profile:",D),p("Failed to load profile data.")}finally{u(!1)}})()},[r]);const H=async ue=>{try{await $M(r.uid,ue),s({...t,savedJobs:t.savedJobs.filter(D=>D.id!==ue.id)})}catch(D){console.error("Error removing job:",D)}},J=ue=>{const D={"sales associate":"sales","sales representative":"sales","customer service representative":"customer-service","customer service agent":"customer-service","web developer":"web-developer","frontend developer":"web-developer","backend developer":"web-developer","administrative assistant":"admin","office administrator":"admin","data entry clerk":"data-entry","data entry specialist":"data-entry","social media manager":"social-media","social media specialist":"social-media"},R=ue.title.toLowerCase(),x=D[R]||R.replace(/\s+/g,"-");b(x),g(!0)},Q=ue=>{G(ue),C(!0)},le=async()=>{try{await e(),U("/login")}catch(ue){console.error("Error logging out:",ue)}};return o?A.jsx("div",{children:"Loading profile..."}):h?A.jsx("div",{children:h}):r?A.jsxs(WP,{children:[A.jsx("h2",{children:"My Profile"}),A.jsxs(qT,{children:[A.jsx("h3",{children:"Account Information"}),A.jsxs("p",{children:[A.jsx("strong",{children:"Name:"})," ",(t==null?void 0:t.name)||"Not provided"]}),A.jsxs("p",{children:[A.jsx("strong",{children:"Email:"})," ",r.email]}),A.jsxs("p",{children:[A.jsx("strong",{children:"Member since:"})," ",t!=null&&t.createdAt?new Date(t.createdAt).toLocaleDateString():"Recently"]})]}),A.jsxs(qT,{children:[A.jsx("h3",{children:"Saved Jobs"}),((oe=t==null?void 0:t.savedJobs)==null?void 0:oe.length)>0?A.jsx(JP,{children:t.savedJobs.map((ue,D)=>A.jsxs(ZP,{children:[A.jsxs("div",{children:[A.jsx("strong",{children:ue.title})," at ",ue.company]}),A.jsxs(eV,{children:[A.jsx(Am,{className:"practice",onClick:()=>J(ue),children:"Practice Interview"}),A.jsx(Am,{className:"message",onClick:()=>Q(ue),children:"Message"}),A.jsx(Am,{className:"remove",onClick:()=>H(ue),children:"Remove"})]})]},D))}):A.jsx("p",{children:"You haven't saved any jobs yet."})]}),A.jsx(tV,{onClick:le,children:"Logout"}),m&&_&&A.jsx(oA,{jobType:_,open:m,onClose:()=>g(!1)}),w&&N&&A.jsx(nV,{children:A.jsxs(rV,{children:[A.jsx(iV,{onClick:()=>C(!1),children:"×"}),A.jsxs("h3",{children:["Messaging about ",N.title]}),A.jsx(_y,{applicationId:N.id,senderId:r.uid,receiverId:N.employerId})]})})]}):(U("/login"),null)},aV=ie.div`
  width: 100%;
  max-width: 1400px;
  margin: 2rem auto;
  padding: 1rem;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`,oV=ie.form`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`,Qi=ie.div`
  margin-bottom: 1rem;
`,Yi=ie.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
`,Rm=ie.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
`,Im=ie.textarea`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 100px;
`,BT=ie.select`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  background-color: white;
`,$h=ie.button`
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
`,lV=ie.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 2rem;
  width: 100%;
`,uV=ie.div`
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
`;ie.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
  align-items: center;
`;const cV=ie.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  margin: 1rem 0;

  p {
    margin: 0;
    min-width: 200px;
  }
`,hV=ie.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;
`;ie.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;const fV=ie($h)`
  background-color: var(--danger);
  margin-top: 2rem;
  width: 100%;
  max-width: 200px;
  
  &:hover {
    background-color: #d32f2f;
  }
`,dV=ie.div`
  margin-top: 1rem;
  border-top: 1px solid #eee;
  padding-top: 1rem;
`,pV=ie.div`
  padding: 1rem;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;

  &:last-child {
    border-bottom: none;
  }
`,mV=ie.div`
  flex: 1;
`,HT=ie.button`
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
`,gV=ie.h3`
  margin: 2rem 0 1rem;
  color: var(--primary);
  font-size: 1.5rem;
`,yV=ie.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`,vV=ie.h2`
  color: var(--primary);
  margin-bottom: 2rem;
`,_V=ie.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`,EV=ie.h3`
  margin: 0 0 1rem 0;
  color: var(--primary);
`,TV=ie.div`
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: #666;
`,bV=ie.div`
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
`,wV=ie.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  width: 90%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
`,SV=ie.button`
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
`,AV=()=>{const{currentUser:r,logout:e}=vs(),[t,s]=z.useState([]),[o,u]=z.useState(!0),[h,p]=z.useState(!1),[m,g]=z.useState(null),[_,b]=z.useState({title:"",description:"",location:"",type:"Full-time",salary:"",requirements:"",benefits:"",category:"customer-service"}),[w,C]=z.useState({}),[N,G]=z.useState([]),[U,H]=z.useState(null),[J,Q]=z.useState(!1);z.useEffect(()=>{le()},[r]);const le=async()=>{if(r){const[O,P]=await Promise.all([qM(r.uid),S2(r.uid)]);if(P)g(P);else{const I=await PS(r.uid,{companyName:r.displayName||"Default Company Name",email:r.email,phone:"",address:"",website:"",description:""});g(I)}s(O);const L={};await Promise.all(O.map(async I=>{const Ge=await KM(I.id),Ue=await Promise.all(Ge.map(async X=>{const ce=ar(gt,"users",X.userId),be=(await Vo(ce)).data()||{};return{...X,applicantName:be.name||"Anonymous User",applicantEmail:be.email||"No email provided"}}));L[I.id]=Ue})),C(L),u(!1)}},oe=O=>{const{name:P,value:L}=O.target;b(I=>({...I,[P]:L}))},ue=async O=>{O.preventDefault();try{if(!m)throw new Error("Employer profile not found");const P={..._,employerId:r.uid,company:m.companyName,requirements:_.requirements?_.requirements.split(",").map(L=>L.trim()):[],benefits:_.benefits?_.benefits.split(",").map(L=>L.trim()):[]};await BM(P),await le(),p(!1),b({title:"",description:"",location:"",type:"Full-time",salary:"",requirements:"",benefits:"",category:"customer-service"})}catch(P){console.error("Error posting job:",P)}},D=async O=>{if(window.confirm("Are you sure you want to delete this job posting?"))try{await HM(O),await le()}catch(P){console.error("Error deleting job:",P)}},R=async()=>{try{await e()}catch(O){console.error("Error logging out:",O)}};z.useEffect(()=>{(async()=>{if(!(r!=null&&r.uid))return;const P=nr(gt,"applications"),L=fa(P,da("employerId","==",r.uid));try{const I=await _a(L),Ge=await Promise.all(I.docs.map(async Ue=>{const X=Ue.data(),ce=Ue(gt,"users",X.userId),be=(await Vo(ce)).data()||{};return{id:Ue.id,...X,applicantId:X.userId,applicantName:be.name||"Anonymous User",applicantEmail:be.email||"No email provided"}}));G(Ge)}catch(I){console.error("Error fetching applications:",I)}})()},[r]);const x=O=>{console.log("Opening message modal for application:",O),H(O),Q(!0)};return o?A.jsx("div",{children:"Loading..."}):A.jsxs(aV,{children:[A.jsx("h2",{children:"Employer Dashboard"}),A.jsx($h,{onClick:()=>p(!h),style:{marginBottom:"2rem"},children:h?"Cancel":"Post New Job"}),h&&A.jsxs(oV,{onSubmit:ue,children:[A.jsxs(Qi,{children:[A.jsx(Yi,{children:"Job Title"}),A.jsx(Rm,{type:"text",name:"title",value:_.title,onChange:oe,required:!0})]}),A.jsxs(Qi,{children:[A.jsx(Yi,{children:"Job Description"}),A.jsx(Im,{name:"description",value:_.description,onChange:oe,required:!0})]}),A.jsxs(Qi,{children:[A.jsx(Yi,{children:"Location"}),A.jsx(Rm,{type:"text",name:"location",value:_.location,onChange:oe,required:!0})]}),A.jsxs(Qi,{children:[A.jsx(Yi,{children:"Job Type"}),A.jsxs(BT,{name:"type",value:_.type,onChange:oe,required:!0,children:[A.jsx("option",{value:"Full-time",children:"Full-time"}),A.jsx("option",{value:"Part-time",children:"Part-time"}),A.jsx("option",{value:"Contract",children:"Contract"}),A.jsx("option",{value:"Internship",children:"Internship"})]})]}),A.jsxs(Qi,{children:[A.jsx(Yi,{children:"Category"}),A.jsxs(BT,{name:"category",value:_.category,onChange:oe,required:!0,children:[A.jsx("option",{value:"customer-service",children:"Customer Service"}),A.jsx("option",{value:"web-developer",children:"Web Developer"}),A.jsx("option",{value:"sales",children:"Sales"}),A.jsx("option",{value:"admin",children:"Administrative"}),A.jsx("option",{value:"data-entry",children:"Data Entry"}),A.jsx("option",{value:"social-media",children:"Social Media"})]})]}),A.jsxs(Qi,{children:[A.jsx(Yi,{children:"Salary Range"}),A.jsx(Rm,{type:"text",name:"salary",value:_.salary,onChange:oe,placeholder:"e.g. $30,000 - $40,000",required:!0})]}),A.jsxs(Qi,{children:[A.jsx(Yi,{children:"Requirements (comma-separated)"}),A.jsx(Im,{name:"requirements",value:_.requirements,onChange:oe,placeholder:"e.g. High school diploma, Good communication skills, Basic computer knowledge",required:!0})]}),A.jsxs(Qi,{children:[A.jsx(Yi,{children:"Benefits (comma-separated)"}),A.jsx(Im,{name:"benefits",value:_.benefits,onChange:oe,placeholder:"e.g. Health insurance, 401k, Paid time off",required:!0})]}),A.jsx($h,{type:"submit",children:"Post Job"})]}),A.jsx(gV,{children:"Your Job Postings"}),A.jsx(lV,{children:t.map(O=>{var P,L;return A.jsxs(uV,{children:[A.jsx("h4",{children:O.title}),A.jsxs(cV,{children:[A.jsxs("p",{children:[A.jsx("strong",{children:"Location:"})," ",O.location]}),A.jsxs("p",{children:[A.jsx("strong",{children:"Type:"})," ",O.type]}),A.jsxs("p",{children:[A.jsx("strong",{children:"Salary:"})," ",O.salary]}),A.jsxs("p",{children:[A.jsx("strong",{children:"Applications:"})," ",((P=w[O.id])==null?void 0:P.length)||0]})]}),A.jsx(dV,{children:(L=w[O.id])==null?void 0:L.map(I=>A.jsxs(pV,{children:[A.jsxs(mV,{children:[A.jsxs("h5",{children:["Application from ",I.applicantName]}),A.jsxs("p",{children:[A.jsx("strong",{children:"Email:"})," ",I.applicantEmail]}),A.jsxs("p",{children:[A.jsx("strong",{children:"Submitted:"})," ",new Date(I.submittedAt).toLocaleDateString()]}),A.jsx("p",{children:A.jsx("strong",{children:"Motivation Letter:"})}),A.jsx("p",{children:I.motivationLetter})]}),A.jsx(HT,{onClick:()=>x(I),children:"Message Applicant"})]},I.id))}),A.jsx(hV,{children:A.jsx($h,{onClick:()=>D(O.id),className:"delete",children:"Delete"})})]},O.id)})}),A.jsx(fV,{onClick:R,children:"Logout"}),A.jsxs(yV,{children:[A.jsx(vV,{children:"Applications Received"}),A.jsx(_V,{children:N.map(O=>{var P;return A.jsxs(ApplicationCard,{children:[A.jsx(EV,{children:O.applicantName}),A.jsxs(TV,{children:[A.jsxs("p",{children:["Position: ",O.jobTitle]}),A.jsxs("p",{children:["Applied: ",new Date((P=O.timestamp)==null?void 0:P.toDate()).toLocaleDateString()]})]}),A.jsx(HT,{onClick:()=>x(O),children:"Message Applicant"})]},O.id)})})]}),J&&U&&A.jsx(bV,{children:A.jsxs(wV,{children:[A.jsx(SV,{onClick:()=>Q(!1),children:"×"}),A.jsxs("h3",{children:["Messaging ",U.applicantName]}),A.jsx(_y,{applicationId:U.id,senderId:r.uid,receiverId:U.userId||U.applicantId})]})})]})},FT=({children:r})=>{const{currentUser:e}=vs();return e?r:A.jsx(OR,{to:"/login"})};function RV(){return A.jsx(rI,{children:A.jsx(A2,{children:A.jsxs("div",{className:"app",children:[A.jsx(LM,{}),A.jsx("main",{className:"main-content",children:A.jsxs(MR,{children:[A.jsx(ta,{path:"/",element:A.jsx(vP,{})}),A.jsx(ta,{path:"/login",element:A.jsx(wP,{})}),A.jsx(ta,{path:"/register",element:A.jsx(xP,{})}),A.jsx(ta,{path:"/profile",element:A.jsx(FT,{children:A.jsx(sV,{})})}),A.jsx(ta,{path:"/employer/dashboard",element:A.jsx(FT,{children:A.jsx(AV,{})})}),A.jsx(ta,{path:"/interview/:jobType",element:A.jsx(oA,{})})]})}),A.jsx(jM,{})]})})})}B1.createRoot(document.getElementById("root")).render(A.jsx(So.StrictMode,{children:A.jsx(RV,{})}));
