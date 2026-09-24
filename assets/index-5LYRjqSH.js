(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))p(u);new MutationObserver(u=>{for(const v of u)if(v.type==="childList")for(const b of v.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&p(b)}).observe(document,{childList:!0,subtree:!0});function l(u){const v={};return u.integrity&&(v.integrity=u.integrity),u.referrerPolicy&&(v.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?v.credentials="include":u.crossOrigin==="anonymous"?v.credentials="omit":v.credentials="same-origin",v}function p(u){if(u.ep)return;u.ep=!0;const v=l(u);fetch(u.href,v)}})();function yh(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Os={exports:{}},co={},Hs={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var su;function wh(){if(su)return ie;su=1;var i=Symbol.for("react.element"),c=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),b=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),Y=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),F=Symbol.iterator;function Z(m){return m===null||typeof m!="object"?null:(m=F&&m[F]||m["@@iterator"],typeof m=="function"?m:null)}var ce={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X=Object.assign,D={};function q(m,k,ee){this.props=m,this.context=k,this.refs=D,this.updater=ee||ce}q.prototype.isReactComponent={},q.prototype.setState=function(m,k){if(typeof m!="object"&&typeof m!="function"&&m!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,m,k,"setState")},q.prototype.forceUpdate=function(m){this.updater.enqueueForceUpdate(this,m,"forceUpdate")};function ge(){}ge.prototype=q.prototype;function pe(m,k,ee){this.props=m,this.context=k,this.refs=D,this.updater=ee||ce}var oe=pe.prototype=new ge;oe.constructor=pe,X(oe,q.prototype),oe.isPureReactComponent=!0;var z=Array.isArray,J=Object.prototype.hasOwnProperty,W={current:null},P={key:!0,ref:!0,__self:!0,__source:!0};function H(m,k,ee){var re,le={},ae=null,fe=null;if(k!=null)for(re in k.ref!==void 0&&(fe=k.ref),k.key!==void 0&&(ae=""+k.key),k)J.call(k,re)&&!P.hasOwnProperty(re)&&(le[re]=k[re]);var ue=arguments.length-2;if(ue===1)le.children=ee;else if(1<ue){for(var ve=Array(ue),Ee=0;Ee<ue;Ee++)ve[Ee]=arguments[Ee+2];le.children=ve}if(m&&m.defaultProps)for(re in ue=m.defaultProps,ue)le[re]===void 0&&(le[re]=ue[re]);return{$$typeof:i,type:m,key:ae,ref:fe,props:le,_owner:W.current}}function we(m,k){return{$$typeof:i,type:m.type,key:k,ref:m.ref,props:m.props,_owner:m._owner}}function Me(m){return typeof m=="object"&&m!==null&&m.$$typeof===i}function se(m){var k={"=":"=0",":":"=2"};return"$"+m.replace(/[=:]/g,function(ee){return k[ee]})}var Ie=/\/+/g;function Ce(m,k){return typeof m=="object"&&m!==null&&m.key!=null?se(""+m.key):k.toString(36)}function qe(m,k,ee,re,le){var ae=typeof m;(ae==="undefined"||ae==="boolean")&&(m=null);var fe=!1;if(m===null)fe=!0;else switch(ae){case"string":case"number":fe=!0;break;case"object":switch(m.$$typeof){case i:case c:fe=!0}}if(fe)return fe=m,le=le(fe),m=re===""?"."+Ce(fe,0):re,z(le)?(ee="",m!=null&&(ee=m.replace(Ie,"$&/")+"/"),qe(le,k,ee,"",function(Ee){return Ee})):le!=null&&(Me(le)&&(le=we(le,ee+(!le.key||fe&&fe.key===le.key?"":(""+le.key).replace(Ie,"$&/")+"/")+m)),k.push(le)),1;if(fe=0,re=re===""?".":re+":",z(m))for(var ue=0;ue<m.length;ue++){ae=m[ue];var ve=re+Ce(ae,ue);fe+=qe(ae,k,ee,ve,le)}else if(ve=Z(m),typeof ve=="function")for(m=ve.call(m),ue=0;!(ae=m.next()).done;)ae=ae.value,ve=re+Ce(ae,ue++),fe+=qe(ae,k,ee,ve,le);else if(ae==="object")throw k=String(m),Error("Objects are not valid as a React child (found: "+(k==="[object Object]"?"object with keys {"+Object.keys(m).join(", ")+"}":k)+"). If you meant to render a collection of children, use an array instead.");return fe}function er(m,k,ee){if(m==null)return m;var re=[],le=0;return qe(m,re,"","",function(ae){return k.call(ee,ae,le++)}),re}function Ke(m){if(m._status===-1){var k=m._result;k=k(),k.then(function(ee){(m._status===0||m._status===-1)&&(m._status=1,m._result=ee)},function(ee){(m._status===0||m._status===-1)&&(m._status=2,m._result=ee)}),m._status===-1&&(m._status=0,m._result=k)}if(m._status===1)return m._result.default;throw m._result}var be={current:null},E={transition:null},A={ReactCurrentDispatcher:be,ReactCurrentBatchConfig:E,ReactCurrentOwner:W};function I(){throw Error("act(...) is not supported in production builds of React.")}return ie.Children={map:er,forEach:function(m,k,ee){er(m,function(){k.apply(this,arguments)},ee)},count:function(m){var k=0;return er(m,function(){k++}),k},toArray:function(m){return er(m,function(k){return k})||[]},only:function(m){if(!Me(m))throw Error("React.Children.only expected to receive a single React element child.");return m}},ie.Component=q,ie.Fragment=l,ie.Profiler=u,ie.PureComponent=pe,ie.StrictMode=p,ie.Suspense=T,ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,ie.act=I,ie.cloneElement=function(m,k,ee){if(m==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+m+".");var re=X({},m.props),le=m.key,ae=m.ref,fe=m._owner;if(k!=null){if(k.ref!==void 0&&(ae=k.ref,fe=W.current),k.key!==void 0&&(le=""+k.key),m.type&&m.type.defaultProps)var ue=m.type.defaultProps;for(ve in k)J.call(k,ve)&&!P.hasOwnProperty(ve)&&(re[ve]=k[ve]===void 0&&ue!==void 0?ue[ve]:k[ve])}var ve=arguments.length-2;if(ve===1)re.children=ee;else if(1<ve){ue=Array(ve);for(var Ee=0;Ee<ve;Ee++)ue[Ee]=arguments[Ee+2];re.children=ue}return{$$typeof:i,type:m.type,key:le,ref:ae,props:re,_owner:fe}},ie.createContext=function(m){return m={$$typeof:b,_currentValue:m,_currentValue2:m,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},m.Provider={$$typeof:v,_context:m},m.Consumer=m},ie.createElement=H,ie.createFactory=function(m){var k=H.bind(null,m);return k.type=m,k},ie.createRef=function(){return{current:null}},ie.forwardRef=function(m){return{$$typeof:L,render:m}},ie.isValidElement=Me,ie.lazy=function(m){return{$$typeof:G,_payload:{_status:-1,_result:m},_init:Ke}},ie.memo=function(m,k){return{$$typeof:Y,type:m,compare:k===void 0?null:k}},ie.startTransition=function(m){var k=E.transition;E.transition={};try{m()}finally{E.transition=k}},ie.unstable_act=I,ie.useCallback=function(m,k){return be.current.useCallback(m,k)},ie.useContext=function(m){return be.current.useContext(m)},ie.useDebugValue=function(){},ie.useDeferredValue=function(m){return be.current.useDeferredValue(m)},ie.useEffect=function(m,k){return be.current.useEffect(m,k)},ie.useId=function(){return be.current.useId()},ie.useImperativeHandle=function(m,k,ee){return be.current.useImperativeHandle(m,k,ee)},ie.useInsertionEffect=function(m,k){return be.current.useInsertionEffect(m,k)},ie.useLayoutEffect=function(m,k){return be.current.useLayoutEffect(m,k)},ie.useMemo=function(m,k){return be.current.useMemo(m,k)},ie.useReducer=function(m,k,ee){return be.current.useReducer(m,k,ee)},ie.useRef=function(m){return be.current.useRef(m)},ie.useState=function(m){return be.current.useState(m)},ie.useSyncExternalStore=function(m,k,ee){return be.current.useSyncExternalStore(m,k,ee)},ie.useTransition=function(){return be.current.useTransition()},ie.version="18.3.1",ie}var lu;function ol(){return lu||(lu=1,Hs.exports=wh()),Hs.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cu;function bh(){if(cu)return co;cu=1;var i=ol(),c=Symbol.for("react.element"),l=Symbol.for("react.fragment"),p=Object.prototype.hasOwnProperty,u=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v={key:!0,ref:!0,__self:!0,__source:!0};function b(L,T,Y){var G,F={},Z=null,ce=null;Y!==void 0&&(Z=""+Y),T.key!==void 0&&(Z=""+T.key),T.ref!==void 0&&(ce=T.ref);for(G in T)p.call(T,G)&&!v.hasOwnProperty(G)&&(F[G]=T[G]);if(L&&L.defaultProps)for(G in T=L.defaultProps,T)F[G]===void 0&&(F[G]=T[G]);return{$$typeof:c,type:L,key:Z,ref:ce,props:F,_owner:u.current}}return co.Fragment=l,co.jsx=b,co.jsxs=b,co}var du;function kh(){return du||(du=1,Os.exports=bh()),Os.exports}var n=kh(),Ti={},Bs={exports:{}},lr={},As={exports:{}},Fs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uu;function jh(){return uu||(uu=1,(function(i){function c(E,A){var I=E.length;E.push(A);e:for(;0<I;){var m=I-1>>>1,k=E[m];if(0<u(k,A))E[m]=A,E[I]=k,I=m;else break e}}function l(E){return E.length===0?null:E[0]}function p(E){if(E.length===0)return null;var A=E[0],I=E.pop();if(I!==A){E[0]=I;e:for(var m=0,k=E.length,ee=k>>>1;m<ee;){var re=2*(m+1)-1,le=E[re],ae=re+1,fe=E[ae];if(0>u(le,I))ae<k&&0>u(fe,le)?(E[m]=fe,E[ae]=I,m=ae):(E[m]=le,E[re]=I,m=re);else if(ae<k&&0>u(fe,I))E[m]=fe,E[ae]=I,m=ae;else break e}}return A}function u(E,A){var I=E.sortIndex-A.sortIndex;return I!==0?I:E.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var v=performance;i.unstable_now=function(){return v.now()}}else{var b=Date,L=b.now();i.unstable_now=function(){return b.now()-L}}var T=[],Y=[],G=1,F=null,Z=3,ce=!1,X=!1,D=!1,q=typeof setTimeout=="function"?setTimeout:null,ge=typeof clearTimeout=="function"?clearTimeout:null,pe=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function oe(E){for(var A=l(Y);A!==null;){if(A.callback===null)p(Y);else if(A.startTime<=E)p(Y),A.sortIndex=A.expirationTime,c(T,A);else break;A=l(Y)}}function z(E){if(D=!1,oe(E),!X)if(l(T)!==null)X=!0,Ke(J);else{var A=l(Y);A!==null&&be(z,A.startTime-E)}}function J(E,A){X=!1,D&&(D=!1,ge(H),H=-1),ce=!0;var I=Z;try{for(oe(A),F=l(T);F!==null&&(!(F.expirationTime>A)||E&&!se());){var m=F.callback;if(typeof m=="function"){F.callback=null,Z=F.priorityLevel;var k=m(F.expirationTime<=A);A=i.unstable_now(),typeof k=="function"?F.callback=k:F===l(T)&&p(T),oe(A)}else p(T);F=l(T)}if(F!==null)var ee=!0;else{var re=l(Y);re!==null&&be(z,re.startTime-A),ee=!1}return ee}finally{F=null,Z=I,ce=!1}}var W=!1,P=null,H=-1,we=5,Me=-1;function se(){return!(i.unstable_now()-Me<we)}function Ie(){if(P!==null){var E=i.unstable_now();Me=E;var A=!0;try{A=P(!0,E)}finally{A?Ce():(W=!1,P=null)}}else W=!1}var Ce;if(typeof pe=="function")Ce=function(){pe(Ie)};else if(typeof MessageChannel!="undefined"){var qe=new MessageChannel,er=qe.port2;qe.port1.onmessage=Ie,Ce=function(){er.postMessage(null)}}else Ce=function(){q(Ie,0)};function Ke(E){P=E,W||(W=!0,Ce())}function be(E,A){H=q(function(){E(i.unstable_now())},A)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(E){E.callback=null},i.unstable_continueExecution=function(){X||ce||(X=!0,Ke(J))},i.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):we=0<E?Math.floor(1e3/E):5},i.unstable_getCurrentPriorityLevel=function(){return Z},i.unstable_getFirstCallbackNode=function(){return l(T)},i.unstable_next=function(E){switch(Z){case 1:case 2:case 3:var A=3;break;default:A=Z}var I=Z;Z=A;try{return E()}finally{Z=I}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(E,A){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var I=Z;Z=E;try{return A()}finally{Z=I}},i.unstable_scheduleCallback=function(E,A,I){var m=i.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?m+I:m):I=m,E){case 1:var k=-1;break;case 2:k=250;break;case 5:k=1073741823;break;case 4:k=1e4;break;default:k=5e3}return k=I+k,E={id:G++,callback:A,priorityLevel:E,startTime:I,expirationTime:k,sortIndex:-1},I>m?(E.sortIndex=I,c(Y,E),l(T)===null&&E===l(Y)&&(D?(ge(H),H=-1):D=!0,be(z,I-m))):(E.sortIndex=k,c(T,E),X||ce||(X=!0,Ke(J))),E},i.unstable_shouldYield=se,i.unstable_wrapCallback=function(E){var A=Z;return function(){var I=Z;Z=A;try{return E.apply(this,arguments)}finally{Z=I}}}})(Fs)),Fs}var pu;function Nh(){return pu||(pu=1,As.exports=jh()),As.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fu;function Sh(){if(fu)return lr;fu=1;var i=ol(),c=Nh();function l(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var p=new Set,u={};function v(e,r){b(e,r),b(e+"Capture",r)}function b(e,r){for(u[e]=r,e=0;e<r.length;e++)p.add(r[e])}var L=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),T=Object.prototype.hasOwnProperty,Y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,G={},F={};function Z(e){return T.call(F,e)?!0:T.call(G,e)?!1:Y.test(e)?F[e]=!0:(G[e]=!0,!1)}function ce(e,r,t,o){if(t!==null&&t.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return o?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function X(e,r,t,o){if(r===null||typeof r=="undefined"||ce(e,r,t,o))return!0;if(o)return!1;if(t!==null)switch(t.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function D(e,r,t,o,a,s,d){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=o,this.attributeNamespace=a,this.mustUseProperty=t,this.propertyName=e,this.type=r,this.sanitizeURL=s,this.removeEmptyString=d}var q={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){q[e]=new D(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var r=e[0];q[r]=new D(r,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){q[e]=new D(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){q[e]=new D(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){q[e]=new D(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){q[e]=new D(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){q[e]=new D(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){q[e]=new D(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){q[e]=new D(e,5,!1,e.toLowerCase(),null,!1,!1)});var ge=/[\-:]([a-z])/g;function pe(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var r=e.replace(ge,pe);q[r]=new D(r,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var r=e.replace(ge,pe);q[r]=new D(r,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var r=e.replace(ge,pe);q[r]=new D(r,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){q[e]=new D(e,1,!1,e.toLowerCase(),null,!1,!1)}),q.xlinkHref=new D("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){q[e]=new D(e,1,!1,e.toLowerCase(),null,!0,!0)});function oe(e,r,t,o){var a=q.hasOwnProperty(r)?q[r]:null;(a!==null?a.type!==0:o||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(X(r,t,a,o)&&(t=null),o||a===null?Z(r)&&(t===null?e.removeAttribute(r):e.setAttribute(r,""+t)):a.mustUseProperty?e[a.propertyName]=t===null?a.type===3?!1:"":t:(r=a.attributeName,o=a.attributeNamespace,t===null?e.removeAttribute(r):(a=a.type,t=a===3||a===4&&t===!0?"":""+t,o?e.setAttributeNS(o,r,t):e.setAttribute(r,t))))}var z=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,J=Symbol.for("react.element"),W=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),we=Symbol.for("react.profiler"),Me=Symbol.for("react.provider"),se=Symbol.for("react.context"),Ie=Symbol.for("react.forward_ref"),Ce=Symbol.for("react.suspense"),qe=Symbol.for("react.suspense_list"),er=Symbol.for("react.memo"),Ke=Symbol.for("react.lazy"),be=Symbol.for("react.offscreen"),E=Symbol.iterator;function A(e){return e===null||typeof e!="object"?null:(e=E&&e[E]||e["@@iterator"],typeof e=="function"?e:null)}var I=Object.assign,m;function k(e){if(m===void 0)try{throw Error()}catch(t){var r=t.stack.trim().match(/\n( *(at )?)/);m=r&&r[1]||""}return`
`+m+e}var ee=!1;function re(e,r){if(!e||ee)return"";ee=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(w){var o=w}Reflect.construct(e,[],r)}else{try{r.call()}catch(w){o=w}e.call(r.prototype)}else{try{throw Error()}catch(w){o=w}e()}}catch(w){if(w&&o&&typeof w.stack=="string"){for(var a=w.stack.split(`
`),s=o.stack.split(`
`),d=a.length-1,f=s.length-1;1<=d&&0<=f&&a[d]!==s[f];)f--;for(;1<=d&&0<=f;d--,f--)if(a[d]!==s[f]){if(d!==1||f!==1)do if(d--,f--,0>f||a[d]!==s[f]){var h=`
`+a[d].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=d&&0<=f);break}}}finally{ee=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?k(e):""}function le(e){switch(e.tag){case 5:return k(e.type);case 16:return k("Lazy");case 13:return k("Suspense");case 19:return k("SuspenseList");case 0:case 2:case 15:return e=re(e.type,!1),e;case 11:return e=re(e.type.render,!1),e;case 1:return e=re(e.type,!0),e;default:return""}}function ae(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case P:return"Fragment";case W:return"Portal";case we:return"Profiler";case H:return"StrictMode";case Ce:return"Suspense";case qe:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case se:return(e.displayName||"Context")+".Consumer";case Me:return(e._context.displayName||"Context")+".Provider";case Ie:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case er:return r=e.displayName||null,r!==null?r:ae(e.type)||"Memo";case Ke:r=e._payload,e=e._init;try{return ae(e(r))}catch{}}return null}function fe(e){var r=e.type;switch(e.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=r.render,e=e.displayName||e.name||"",r.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ae(r);case 8:return r===H?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function ue(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ve(e){var r=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Ee(e){var r=ve(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,r),o=""+e[r];if(!e.hasOwnProperty(r)&&typeof t!="undefined"&&typeof t.get=="function"&&typeof t.set=="function"){var a=t.get,s=t.set;return Object.defineProperty(e,r,{configurable:!0,get:function(){return a.call(this)},set:function(d){o=""+d,s.call(this,d)}}),Object.defineProperty(e,r,{enumerable:t.enumerable}),{getValue:function(){return o},setValue:function(d){o=""+d},stopTracking:function(){e._valueTracker=null,delete e[r]}}}}function Jr(e){e._valueTracker||(e._valueTracker=Ee(e))}function Nt(e){if(!e)return!1;var r=e._valueTracker;if(!r)return!0;var t=r.getValue(),o="";return e&&(o=ve(e)?e.checked?"true":"false":e.value),e=o,e!==t?(r.setValue(e),!0):!1}function Cr(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ui(e,r){var t=r.checked;return I({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t!=null?t:e._wrapperState.initialChecked})}function hl(e,r){var t=r.defaultValue==null?"":r.defaultValue,o=r.checked!=null?r.checked:r.defaultChecked;t=ue(r.value!=null?r.value:t),e._wrapperState={initialChecked:o,initialValue:t,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function xl(e,r){r=r.checked,r!=null&&oe(e,"checked",r,!1)}function Vi(e,r){xl(e,r);var t=ue(r.value),o=r.type;if(t!=null)o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}r.hasOwnProperty("value")?Qi(e,r.type,t):r.hasOwnProperty("defaultValue")&&Qi(e,r.type,ue(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(e.defaultChecked=!!r.defaultChecked)}function ml(e,r,t){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var o=r.type;if(!(o!=="submit"&&o!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+e._wrapperState.initialValue,t||r===e.value||(e.value=r),e.defaultValue=r}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Qi(e,r,t){(r!=="number"||Cr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Nn=Array.isArray;function Ut(e,r,t,o){if(e=e.options,r){r={};for(var a=0;a<t.length;a++)r["$"+t[a]]=!0;for(t=0;t<e.length;t++)a=r.hasOwnProperty("$"+e[t].value),e[t].selected!==a&&(e[t].selected=a),a&&o&&(e[t].defaultSelected=!0)}else{for(t=""+ue(t),r=null,a=0;a<e.length;a++){if(e[a].value===t){e[a].selected=!0,o&&(e[a].defaultSelected=!0);return}r!==null||e[a].disabled||(r=e[a])}r!==null&&(r.selected=!0)}}function Gi(e,r){if(r.dangerouslySetInnerHTML!=null)throw Error(l(91));return I({},r,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function gl(e,r){var t=r.value;if(t==null){if(t=r.children,r=r.defaultValue,t!=null){if(r!=null)throw Error(l(92));if(Nn(t)){if(1<t.length)throw Error(l(93));t=t[0]}r=t}r==null&&(r=""),t=r}e._wrapperState={initialValue:ue(t)}}function vl(e,r){var t=ue(r.value),o=ue(r.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),r.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),o!=null&&(e.defaultValue=""+o)}function yl(e){var r=e.textContent;r===e._wrapperState.initialValue&&r!==""&&r!==null&&(e.value=r)}function wl(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qi(e,r){return e==null||e==="http://www.w3.org/1999/xhtml"?wl(r):e==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var yo,bl=(function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(r,t,o,a){MSApp.execUnsafeLocalFunction(function(){return e(r,t,o,a)})}:e})(function(e,r){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=r;else{for(yo=yo||document.createElement("div"),yo.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=yo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;r.firstChild;)e.appendChild(r.firstChild)}});function Sn(e,r){if(r){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=r;return}}e.textContent=r}var Cn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kp=["Webkit","ms","Moz","O"];Object.keys(Cn).forEach(function(e){kp.forEach(function(r){r=r+e.charAt(0).toUpperCase()+e.substring(1),Cn[r]=Cn[e]})});function kl(e,r,t){return r==null||typeof r=="boolean"||r===""?"":t||typeof r!="number"||r===0||Cn.hasOwnProperty(e)&&Cn[e]?(""+r).trim():r+"px"}function jl(e,r){e=e.style;for(var t in r)if(r.hasOwnProperty(t)){var o=t.indexOf("--")===0,a=kl(t,r[t],o);t==="float"&&(t="cssFloat"),o?e.setProperty(t,a):e[t]=a}}var jp=I({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ki(e,r){if(r){if(jp[e]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(l(137,e));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(l(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(l(61))}if(r.style!=null&&typeof r.style!="object")throw Error(l(62))}}function Yi(e,r){if(e.indexOf("-")===-1)return typeof r.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xi=null;function Ji(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Zi=null,Vt=null,Qt=null;function Nl(e){if(e=qn(e)){if(typeof Zi!="function")throw Error(l(280));var r=e.stateNode;r&&(r=Do(r),Zi(e.stateNode,e.type,r))}}function Sl(e){Vt?Qt?Qt.push(e):Qt=[e]:Vt=e}function Cl(){if(Vt){var e=Vt,r=Qt;if(Qt=Vt=null,Nl(e),r)for(e=0;e<r.length;e++)Nl(r[e])}}function Tl(e,r){return e(r)}function El(){}var ea=!1;function Pl(e,r,t){if(ea)return e(r,t);ea=!0;try{return Tl(e,r,t)}finally{ea=!1,(Vt!==null||Qt!==null)&&(El(),Cl())}}function Tn(e,r){var t=e.stateNode;if(t===null)return null;var o=Do(t);if(o===null)return null;t=o[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(l(231,r,typeof t));return t}var ra=!1;if(L)try{var En={};Object.defineProperty(En,"passive",{get:function(){ra=!0}}),window.addEventListener("test",En,En),window.removeEventListener("test",En,En)}catch{ra=!1}function Np(e,r,t,o,a,s,d,f,h){var w=Array.prototype.slice.call(arguments,3);try{r.apply(t,w)}catch(N){this.onError(N)}}var Pn=!1,wo=null,bo=!1,ta=null,Sp={onError:function(e){Pn=!0,wo=e}};function Cp(e,r,t,o,a,s,d,f,h){Pn=!1,wo=null,Np.apply(Sp,arguments)}function Tp(e,r,t,o,a,s,d,f,h){if(Cp.apply(this,arguments),Pn){if(Pn){var w=wo;Pn=!1,wo=null}else throw Error(l(198));bo||(bo=!0,ta=w)}}function St(e){var r=e,t=e;if(e.alternate)for(;r.return;)r=r.return;else{e=r;do r=e,(r.flags&4098)!==0&&(t=r.return),e=r.return;while(e)}return r.tag===3?t:null}function _l(e){if(e.tag===13){var r=e.memoizedState;if(r===null&&(e=e.alternate,e!==null&&(r=e.memoizedState)),r!==null)return r.dehydrated}return null}function Ll(e){if(St(e)!==e)throw Error(l(188))}function Ep(e){var r=e.alternate;if(!r){if(r=St(e),r===null)throw Error(l(188));return r!==e?null:e}for(var t=e,o=r;;){var a=t.return;if(a===null)break;var s=a.alternate;if(s===null){if(o=a.return,o!==null){t=o;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===t)return Ll(a),e;if(s===o)return Ll(a),r;s=s.sibling}throw Error(l(188))}if(t.return!==o.return)t=a,o=s;else{for(var d=!1,f=a.child;f;){if(f===t){d=!0,t=a,o=s;break}if(f===o){d=!0,o=a,t=s;break}f=f.sibling}if(!d){for(f=s.child;f;){if(f===t){d=!0,t=s,o=a;break}if(f===o){d=!0,o=s,t=a;break}f=f.sibling}if(!d)throw Error(l(189))}}if(t.alternate!==o)throw Error(l(190))}if(t.tag!==3)throw Error(l(188));return t.stateNode.current===t?e:r}function zl(e){return e=Ep(e),e!==null?Il(e):null}function Il(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var r=Il(e);if(r!==null)return r;e=e.sibling}return null}var $l=c.unstable_scheduleCallback,Ml=c.unstable_cancelCallback,Pp=c.unstable_shouldYield,_p=c.unstable_requestPaint,Re=c.unstable_now,Lp=c.unstable_getCurrentPriorityLevel,na=c.unstable_ImmediatePriority,Rl=c.unstable_UserBlockingPriority,ko=c.unstable_NormalPriority,zp=c.unstable_LowPriority,Ol=c.unstable_IdlePriority,jo=null,Rr=null;function Ip(e){if(Rr&&typeof Rr.onCommitFiberRoot=="function")try{Rr.onCommitFiberRoot(jo,e,void 0,(e.current.flags&128)===128)}catch{}}var Tr=Math.clz32?Math.clz32:Rp,$p=Math.log,Mp=Math.LN2;function Rp(e){return e>>>=0,e===0?32:31-($p(e)/Mp|0)|0}var No=64,So=4194304;function _n(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Co(e,r){var t=e.pendingLanes;if(t===0)return 0;var o=0,a=e.suspendedLanes,s=e.pingedLanes,d=t&268435455;if(d!==0){var f=d&~a;f!==0?o=_n(f):(s&=d,s!==0&&(o=_n(s)))}else d=t&~a,d!==0?o=_n(d):s!==0&&(o=_n(s));if(o===0)return 0;if(r!==0&&r!==o&&(r&a)===0&&(a=o&-o,s=r&-r,a>=s||a===16&&(s&4194240)!==0))return r;if((o&4)!==0&&(o|=t&16),r=e.entangledLanes,r!==0)for(e=e.entanglements,r&=o;0<r;)t=31-Tr(r),a=1<<t,o|=e[t],r&=~a;return o}function Op(e,r){switch(e){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hp(e,r){for(var t=e.suspendedLanes,o=e.pingedLanes,a=e.expirationTimes,s=e.pendingLanes;0<s;){var d=31-Tr(s),f=1<<d,h=a[d];h===-1?((f&t)===0||(f&o)!==0)&&(a[d]=Op(f,r)):h<=r&&(e.expiredLanes|=f),s&=~f}}function oa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Hl(){var e=No;return No<<=1,(No&4194240)===0&&(No=64),e}function ia(e){for(var r=[],t=0;31>t;t++)r.push(e);return r}function Ln(e,r,t){e.pendingLanes|=r,r!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,r=31-Tr(r),e[r]=t}function Bp(e,r){var t=e.pendingLanes&~r;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=r,e.mutableReadLanes&=r,e.entangledLanes&=r,r=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<t;){var a=31-Tr(t),s=1<<a;r[a]=0,o[a]=-1,e[a]=-1,t&=~s}}function aa(e,r){var t=e.entangledLanes|=r;for(e=e.entanglements;t;){var o=31-Tr(t),a=1<<o;a&r|e[o]&r&&(e[o]|=r),t&=~a}}var ye=0;function Bl(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Al,sa,Fl,Dl,Wl,la=!1,To=[],Zr=null,et=null,rt=null,zn=new Map,In=new Map,tt=[],Ap="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ul(e,r){switch(e){case"focusin":case"focusout":Zr=null;break;case"dragenter":case"dragleave":et=null;break;case"mouseover":case"mouseout":rt=null;break;case"pointerover":case"pointerout":zn.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":In.delete(r.pointerId)}}function $n(e,r,t,o,a,s){return e===null||e.nativeEvent!==s?(e={blockedOn:r,domEventName:t,eventSystemFlags:o,nativeEvent:s,targetContainers:[a]},r!==null&&(r=qn(r),r!==null&&sa(r)),e):(e.eventSystemFlags|=o,r=e.targetContainers,a!==null&&r.indexOf(a)===-1&&r.push(a),e)}function Fp(e,r,t,o,a){switch(r){case"focusin":return Zr=$n(Zr,e,r,t,o,a),!0;case"dragenter":return et=$n(et,e,r,t,o,a),!0;case"mouseover":return rt=$n(rt,e,r,t,o,a),!0;case"pointerover":var s=a.pointerId;return zn.set(s,$n(zn.get(s)||null,e,r,t,o,a)),!0;case"gotpointercapture":return s=a.pointerId,In.set(s,$n(In.get(s)||null,e,r,t,o,a)),!0}return!1}function Vl(e){var r=Ct(e.target);if(r!==null){var t=St(r);if(t!==null){if(r=t.tag,r===13){if(r=_l(t),r!==null){e.blockedOn=r,Wl(e.priority,function(){Fl(t)});return}}else if(r===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Eo(e){if(e.blockedOn!==null)return!1;for(var r=e.targetContainers;0<r.length;){var t=da(e.domEventName,e.eventSystemFlags,r[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var o=new t.constructor(t.type,t);Xi=o,t.target.dispatchEvent(o),Xi=null}else return r=qn(t),r!==null&&sa(r),e.blockedOn=t,!1;r.shift()}return!0}function Ql(e,r,t){Eo(e)&&t.delete(r)}function Dp(){la=!1,Zr!==null&&Eo(Zr)&&(Zr=null),et!==null&&Eo(et)&&(et=null),rt!==null&&Eo(rt)&&(rt=null),zn.forEach(Ql),In.forEach(Ql)}function Mn(e,r){e.blockedOn===r&&(e.blockedOn=null,la||(la=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,Dp)))}function Rn(e){function r(a){return Mn(a,e)}if(0<To.length){Mn(To[0],e);for(var t=1;t<To.length;t++){var o=To[t];o.blockedOn===e&&(o.blockedOn=null)}}for(Zr!==null&&Mn(Zr,e),et!==null&&Mn(et,e),rt!==null&&Mn(rt,e),zn.forEach(r),In.forEach(r),t=0;t<tt.length;t++)o=tt[t],o.blockedOn===e&&(o.blockedOn=null);for(;0<tt.length&&(t=tt[0],t.blockedOn===null);)Vl(t),t.blockedOn===null&&tt.shift()}var Gt=z.ReactCurrentBatchConfig,Po=!0;function Wp(e,r,t,o){var a=ye,s=Gt.transition;Gt.transition=null;try{ye=1,ca(e,r,t,o)}finally{ye=a,Gt.transition=s}}function Up(e,r,t,o){var a=ye,s=Gt.transition;Gt.transition=null;try{ye=4,ca(e,r,t,o)}finally{ye=a,Gt.transition=s}}function ca(e,r,t,o){if(Po){var a=da(e,r,t,o);if(a===null)Ta(e,r,o,_o,t),Ul(e,o);else if(Fp(a,e,r,t,o))o.stopPropagation();else if(Ul(e,o),r&4&&-1<Ap.indexOf(e)){for(;a!==null;){var s=qn(a);if(s!==null&&Al(s),s=da(e,r,t,o),s===null&&Ta(e,r,o,_o,t),s===a)break;a=s}a!==null&&o.stopPropagation()}else Ta(e,r,o,null,t)}}var _o=null;function da(e,r,t,o){if(_o=null,e=Ji(o),e=Ct(e),e!==null)if(r=St(e),r===null)e=null;else if(t=r.tag,t===13){if(e=_l(r),e!==null)return e;e=null}else if(t===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;e=null}else r!==e&&(e=null);return _o=e,null}function Gl(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Lp()){case na:return 1;case Rl:return 4;case ko:case zp:return 16;case Ol:return 536870912;default:return 16}default:return 16}}var nt=null,ua=null,Lo=null;function ql(){if(Lo)return Lo;var e,r=ua,t=r.length,o,a="value"in nt?nt.value:nt.textContent,s=a.length;for(e=0;e<t&&r[e]===a[e];e++);var d=t-e;for(o=1;o<=d&&r[t-o]===a[s-o];o++);return Lo=a.slice(e,1<o?1-o:void 0)}function zo(e){var r=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&r===13&&(e=13)):e=r,e===10&&(e=13),32<=e||e===13?e:0}function Io(){return!0}function Kl(){return!1}function dr(e){function r(t,o,a,s,d){this._reactName=t,this._targetInst=a,this.type=o,this.nativeEvent=s,this.target=d,this.currentTarget=null;for(var f in e)e.hasOwnProperty(f)&&(t=e[f],this[f]=t?t(s):s[f]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Io:Kl,this.isPropagationStopped=Kl,this}return I(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Io)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Io)},persist:function(){},isPersistent:Io}),r}var qt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pa=dr(qt),On=I({},qt,{view:0,detail:0}),Vp=dr(On),fa,ha,Hn,$o=I({},On,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ma,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Hn&&(Hn&&e.type==="mousemove"?(fa=e.screenX-Hn.screenX,ha=e.screenY-Hn.screenY):ha=fa=0,Hn=e),fa)},movementY:function(e){return"movementY"in e?e.movementY:ha}}),Yl=dr($o),Qp=I({},$o,{dataTransfer:0}),Gp=dr(Qp),qp=I({},On,{relatedTarget:0}),xa=dr(qp),Kp=I({},qt,{animationName:0,elapsedTime:0,pseudoElement:0}),Yp=dr(Kp),Xp=I({},qt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Jp=dr(Xp),Zp=I({},qt,{data:0}),Xl=dr(Zp),ef={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nf(e){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(e):(e=tf[e])?!!r[e]:!1}function ma(){return nf}var of=I({},On,{key:function(e){if(e.key){var r=ef[e.key]||e.key;if(r!=="Unidentified")return r}return e.type==="keypress"?(e=zo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?rf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ma,charCode:function(e){return e.type==="keypress"?zo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?zo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),af=dr(of),sf=I({},$o,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jl=dr(sf),lf=I({},On,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ma}),cf=dr(lf),df=I({},qt,{propertyName:0,elapsedTime:0,pseudoElement:0}),uf=dr(df),pf=I({},$o,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ff=dr(pf),hf=[9,13,27,32],ga=L&&"CompositionEvent"in window,Bn=null;L&&"documentMode"in document&&(Bn=document.documentMode);var xf=L&&"TextEvent"in window&&!Bn,Zl=L&&(!ga||Bn&&8<Bn&&11>=Bn),ec=" ",rc=!1;function tc(e,r){switch(e){case"keyup":return hf.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Kt=!1;function mf(e,r){switch(e){case"compositionend":return nc(r);case"keypress":return r.which!==32?null:(rc=!0,ec);case"textInput":return e=r.data,e===ec&&rc?null:e;default:return null}}function gf(e,r){if(Kt)return e==="compositionend"||!ga&&tc(e,r)?(e=ql(),Lo=ua=nt=null,Kt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Zl&&r.locale!=="ko"?null:r.data;default:return null}}var vf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function oc(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r==="input"?!!vf[e.type]:r==="textarea"}function ic(e,r,t,o){Sl(o),r=Bo(r,"onChange"),0<r.length&&(t=new pa("onChange","change",null,t,o),e.push({event:t,listeners:r}))}var An=null,Fn=null;function yf(e){jc(e,0)}function Mo(e){var r=en(e);if(Nt(r))return e}function wf(e,r){if(e==="change")return r}var ac=!1;if(L){var va;if(L){var ya="oninput"in document;if(!ya){var sc=document.createElement("div");sc.setAttribute("oninput","return;"),ya=typeof sc.oninput=="function"}va=ya}else va=!1;ac=va&&(!document.documentMode||9<document.documentMode)}function lc(){An&&(An.detachEvent("onpropertychange",cc),Fn=An=null)}function cc(e){if(e.propertyName==="value"&&Mo(Fn)){var r=[];ic(r,Fn,e,Ji(e)),Pl(yf,r)}}function bf(e,r,t){e==="focusin"?(lc(),An=r,Fn=t,An.attachEvent("onpropertychange",cc)):e==="focusout"&&lc()}function kf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Mo(Fn)}function jf(e,r){if(e==="click")return Mo(r)}function Nf(e,r){if(e==="input"||e==="change")return Mo(r)}function Sf(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var Er=typeof Object.is=="function"?Object.is:Sf;function Dn(e,r){if(Er(e,r))return!0;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return!1;var t=Object.keys(e),o=Object.keys(r);if(t.length!==o.length)return!1;for(o=0;o<t.length;o++){var a=t[o];if(!T.call(r,a)||!Er(e[a],r[a]))return!1}return!0}function dc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function uc(e,r){var t=dc(e);e=0;for(var o;t;){if(t.nodeType===3){if(o=e+t.textContent.length,e<=r&&o>=r)return{node:t,offset:r-e};e=o}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=dc(t)}}function pc(e,r){return e&&r?e===r?!0:e&&e.nodeType===3?!1:r&&r.nodeType===3?pc(e,r.parentNode):"contains"in e?e.contains(r):e.compareDocumentPosition?!!(e.compareDocumentPosition(r)&16):!1:!1}function fc(){for(var e=window,r=Cr();r instanceof e.HTMLIFrameElement;){try{var t=typeof r.contentWindow.location.href=="string"}catch{t=!1}if(t)e=r.contentWindow;else break;r=Cr(e.document)}return r}function wa(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r&&(r==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||r==="textarea"||e.contentEditable==="true")}function Cf(e){var r=fc(),t=e.focusedElem,o=e.selectionRange;if(r!==t&&t&&t.ownerDocument&&pc(t.ownerDocument.documentElement,t)){if(o!==null&&wa(t)){if(r=o.start,e=o.end,e===void 0&&(e=r),"selectionStart"in t)t.selectionStart=r,t.selectionEnd=Math.min(e,t.value.length);else if(e=(r=t.ownerDocument||document)&&r.defaultView||window,e.getSelection){e=e.getSelection();var a=t.textContent.length,s=Math.min(o.start,a);o=o.end===void 0?s:Math.min(o.end,a),!e.extend&&s>o&&(a=o,o=s,s=a),a=uc(t,s);var d=uc(t,o);a&&d&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==d.node||e.focusOffset!==d.offset)&&(r=r.createRange(),r.setStart(a.node,a.offset),e.removeAllRanges(),s>o?(e.addRange(r),e.extend(d.node,d.offset)):(r.setEnd(d.node,d.offset),e.addRange(r)))}}for(r=[],e=t;e=e.parentNode;)e.nodeType===1&&r.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<r.length;t++)e=r[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Tf=L&&"documentMode"in document&&11>=document.documentMode,Yt=null,ba=null,Wn=null,ka=!1;function hc(e,r,t){var o=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;ka||Yt==null||Yt!==Cr(o)||(o=Yt,"selectionStart"in o&&wa(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Wn&&Dn(Wn,o)||(Wn=o,o=Bo(ba,"onSelect"),0<o.length&&(r=new pa("onSelect","select",null,r,t),e.push({event:r,listeners:o}),r.target=Yt)))}function Ro(e,r){var t={};return t[e.toLowerCase()]=r.toLowerCase(),t["Webkit"+e]="webkit"+r,t["Moz"+e]="moz"+r,t}var Xt={animationend:Ro("Animation","AnimationEnd"),animationiteration:Ro("Animation","AnimationIteration"),animationstart:Ro("Animation","AnimationStart"),transitionend:Ro("Transition","TransitionEnd")},ja={},xc={};L&&(xc=document.createElement("div").style,"AnimationEvent"in window||(delete Xt.animationend.animation,delete Xt.animationiteration.animation,delete Xt.animationstart.animation),"TransitionEvent"in window||delete Xt.transitionend.transition);function Oo(e){if(ja[e])return ja[e];if(!Xt[e])return e;var r=Xt[e],t;for(t in r)if(r.hasOwnProperty(t)&&t in xc)return ja[e]=r[t];return e}var mc=Oo("animationend"),gc=Oo("animationiteration"),vc=Oo("animationstart"),yc=Oo("transitionend"),wc=new Map,bc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ot(e,r){wc.set(e,r),v(r,[e])}for(var Na=0;Na<bc.length;Na++){var Sa=bc[Na],Ef=Sa.toLowerCase(),Pf=Sa[0].toUpperCase()+Sa.slice(1);ot(Ef,"on"+Pf)}ot(mc,"onAnimationEnd"),ot(gc,"onAnimationIteration"),ot(vc,"onAnimationStart"),ot("dblclick","onDoubleClick"),ot("focusin","onFocus"),ot("focusout","onBlur"),ot(yc,"onTransitionEnd"),b("onMouseEnter",["mouseout","mouseover"]),b("onMouseLeave",["mouseout","mouseover"]),b("onPointerEnter",["pointerout","pointerover"]),b("onPointerLeave",["pointerout","pointerover"]),v("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),v("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),v("onBeforeInput",["compositionend","keypress","textInput","paste"]),v("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),v("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),v("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Un="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_f=new Set("cancel close invalid load scroll toggle".split(" ").concat(Un));function kc(e,r,t){var o=e.type||"unknown-event";e.currentTarget=t,Tp(o,r,void 0,e),e.currentTarget=null}function jc(e,r){r=(r&4)!==0;for(var t=0;t<e.length;t++){var o=e[t],a=o.event;o=o.listeners;e:{var s=void 0;if(r)for(var d=o.length-1;0<=d;d--){var f=o[d],h=f.instance,w=f.currentTarget;if(f=f.listener,h!==s&&a.isPropagationStopped())break e;kc(a,f,w),s=h}else for(d=0;d<o.length;d++){if(f=o[d],h=f.instance,w=f.currentTarget,f=f.listener,h!==s&&a.isPropagationStopped())break e;kc(a,f,w),s=h}}}if(bo)throw e=ta,bo=!1,ta=null,e}function je(e,r){var t=r[Ia];t===void 0&&(t=r[Ia]=new Set);var o=e+"__bubble";t.has(o)||(Nc(r,e,2,!1),t.add(o))}function Ca(e,r,t){var o=0;r&&(o|=4),Nc(t,e,o,r)}var Ho="_reactListening"+Math.random().toString(36).slice(2);function Vn(e){if(!e[Ho]){e[Ho]=!0,p.forEach(function(t){t!=="selectionchange"&&(_f.has(t)||Ca(t,!1,e),Ca(t,!0,e))});var r=e.nodeType===9?e:e.ownerDocument;r===null||r[Ho]||(r[Ho]=!0,Ca("selectionchange",!1,r))}}function Nc(e,r,t,o){switch(Gl(r)){case 1:var a=Wp;break;case 4:a=Up;break;default:a=ca}t=a.bind(null,r,t,e),a=void 0,!ra||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(a=!0),o?a!==void 0?e.addEventListener(r,t,{capture:!0,passive:a}):e.addEventListener(r,t,!0):a!==void 0?e.addEventListener(r,t,{passive:a}):e.addEventListener(r,t,!1)}function Ta(e,r,t,o,a){var s=o;if((r&1)===0&&(r&2)===0&&o!==null)e:for(;;){if(o===null)return;var d=o.tag;if(d===3||d===4){var f=o.stateNode.containerInfo;if(f===a||f.nodeType===8&&f.parentNode===a)break;if(d===4)for(d=o.return;d!==null;){var h=d.tag;if((h===3||h===4)&&(h=d.stateNode.containerInfo,h===a||h.nodeType===8&&h.parentNode===a))return;d=d.return}for(;f!==null;){if(d=Ct(f),d===null)return;if(h=d.tag,h===5||h===6){o=s=d;continue e}f=f.parentNode}}o=o.return}Pl(function(){var w=s,N=Ji(t),S=[];e:{var j=wc.get(e);if(j!==void 0){var $=pa,R=e;switch(e){case"keypress":if(zo(t)===0)break e;case"keydown":case"keyup":$=af;break;case"focusin":R="focus",$=xa;break;case"focusout":R="blur",$=xa;break;case"beforeblur":case"afterblur":$=xa;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":$=Yl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":$=Gp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":$=cf;break;case mc:case gc:case vc:$=Yp;break;case yc:$=uf;break;case"scroll":$=Vp;break;case"wheel":$=ff;break;case"copy":case"cut":case"paste":$=Jp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":$=Jl}var O=(r&4)!==0,Oe=!O&&e==="scroll",g=O?j!==null?j+"Capture":null:j;O=[];for(var x=w,y;x!==null;){y=x;var C=y.stateNode;if(y.tag===5&&C!==null&&(y=C,g!==null&&(C=Tn(x,g),C!=null&&O.push(Qn(x,C,y)))),Oe)break;x=x.return}0<O.length&&(j=new $(j,R,null,t,N),S.push({event:j,listeners:O}))}}if((r&7)===0){e:{if(j=e==="mouseover"||e==="pointerover",$=e==="mouseout"||e==="pointerout",j&&t!==Xi&&(R=t.relatedTarget||t.fromElement)&&(Ct(R)||R[Dr]))break e;if(($||j)&&(j=N.window===N?N:(j=N.ownerDocument)?j.defaultView||j.parentWindow:window,$?(R=t.relatedTarget||t.toElement,$=w,R=R?Ct(R):null,R!==null&&(Oe=St(R),R!==Oe||R.tag!==5&&R.tag!==6)&&(R=null)):($=null,R=w),$!==R)){if(O=Yl,C="onMouseLeave",g="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(O=Jl,C="onPointerLeave",g="onPointerEnter",x="pointer"),Oe=$==null?j:en($),y=R==null?j:en(R),j=new O(C,x+"leave",$,t,N),j.target=Oe,j.relatedTarget=y,C=null,Ct(N)===w&&(O=new O(g,x+"enter",R,t,N),O.target=y,O.relatedTarget=Oe,C=O),Oe=C,$&&R)r:{for(O=$,g=R,x=0,y=O;y;y=Jt(y))x++;for(y=0,C=g;C;C=Jt(C))y++;for(;0<x-y;)O=Jt(O),x--;for(;0<y-x;)g=Jt(g),y--;for(;x--;){if(O===g||g!==null&&O===g.alternate)break r;O=Jt(O),g=Jt(g)}O=null}else O=null;$!==null&&Sc(S,j,$,O,!1),R!==null&&Oe!==null&&Sc(S,Oe,R,O,!0)}}e:{if(j=w?en(w):window,$=j.nodeName&&j.nodeName.toLowerCase(),$==="select"||$==="input"&&j.type==="file")var B=wf;else if(oc(j))if(ac)B=Nf;else{B=kf;var U=bf}else($=j.nodeName)&&$.toLowerCase()==="input"&&(j.type==="checkbox"||j.type==="radio")&&(B=jf);if(B&&(B=B(e,w))){ic(S,B,t,N);break e}U&&U(e,j,w),e==="focusout"&&(U=j._wrapperState)&&U.controlled&&j.type==="number"&&Qi(j,"number",j.value)}switch(U=w?en(w):window,e){case"focusin":(oc(U)||U.contentEditable==="true")&&(Yt=U,ba=w,Wn=null);break;case"focusout":Wn=ba=Yt=null;break;case"mousedown":ka=!0;break;case"contextmenu":case"mouseup":case"dragend":ka=!1,hc(S,t,N);break;case"selectionchange":if(Tf)break;case"keydown":case"keyup":hc(S,t,N)}var V;if(ga)e:{switch(e){case"compositionstart":var K="onCompositionStart";break e;case"compositionend":K="onCompositionEnd";break e;case"compositionupdate":K="onCompositionUpdate";break e}K=void 0}else Kt?tc(e,t)&&(K="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(K="onCompositionStart");K&&(Zl&&t.locale!=="ko"&&(Kt||K!=="onCompositionStart"?K==="onCompositionEnd"&&Kt&&(V=ql()):(nt=N,ua="value"in nt?nt.value:nt.textContent,Kt=!0)),U=Bo(w,K),0<U.length&&(K=new Xl(K,e,null,t,N),S.push({event:K,listeners:U}),V?K.data=V:(V=nc(t),V!==null&&(K.data=V)))),(V=xf?mf(e,t):gf(e,t))&&(w=Bo(w,"onBeforeInput"),0<w.length&&(N=new Xl("onBeforeInput","beforeinput",null,t,N),S.push({event:N,listeners:w}),N.data=V))}jc(S,r)})}function Qn(e,r,t){return{instance:e,listener:r,currentTarget:t}}function Bo(e,r){for(var t=r+"Capture",o=[];e!==null;){var a=e,s=a.stateNode;a.tag===5&&s!==null&&(a=s,s=Tn(e,t),s!=null&&o.unshift(Qn(e,s,a)),s=Tn(e,r),s!=null&&o.push(Qn(e,s,a))),e=e.return}return o}function Jt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Sc(e,r,t,o,a){for(var s=r._reactName,d=[];t!==null&&t!==o;){var f=t,h=f.alternate,w=f.stateNode;if(h!==null&&h===o)break;f.tag===5&&w!==null&&(f=w,a?(h=Tn(t,s),h!=null&&d.unshift(Qn(t,h,f))):a||(h=Tn(t,s),h!=null&&d.push(Qn(t,h,f)))),t=t.return}d.length!==0&&e.push({event:r,listeners:d})}var Lf=/\r\n?/g,zf=/\u0000|\uFFFD/g;function Cc(e){return(typeof e=="string"?e:""+e).replace(Lf,`
`).replace(zf,"")}function Ao(e,r,t){if(r=Cc(r),Cc(e)!==r&&t)throw Error(l(425))}function Fo(){}var Ea=null,Pa=null;function _a(e,r){return e==="textarea"||e==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var La=typeof setTimeout=="function"?setTimeout:void 0,If=typeof clearTimeout=="function"?clearTimeout:void 0,Tc=typeof Promise=="function"?Promise:void 0,$f=typeof queueMicrotask=="function"?queueMicrotask:typeof Tc!="undefined"?function(e){return Tc.resolve(null).then(e).catch(Mf)}:La;function Mf(e){setTimeout(function(){throw e})}function za(e,r){var t=r,o=0;do{var a=t.nextSibling;if(e.removeChild(t),a&&a.nodeType===8)if(t=a.data,t==="/$"){if(o===0){e.removeChild(a),Rn(r);return}o--}else t!=="$"&&t!=="$?"&&t!=="$!"||o++;t=a}while(t);Rn(r)}function it(e){for(;e!=null;e=e.nextSibling){var r=e.nodeType;if(r===1||r===3)break;if(r===8){if(r=e.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return e}function Ec(e){e=e.previousSibling;for(var r=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(r===0)return e;r--}else t==="/$"&&r++}e=e.previousSibling}return null}var Zt=Math.random().toString(36).slice(2),Or="__reactFiber$"+Zt,Gn="__reactProps$"+Zt,Dr="__reactContainer$"+Zt,Ia="__reactEvents$"+Zt,Rf="__reactListeners$"+Zt,Of="__reactHandles$"+Zt;function Ct(e){var r=e[Or];if(r)return r;for(var t=e.parentNode;t;){if(r=t[Dr]||t[Or]){if(t=r.alternate,r.child!==null||t!==null&&t.child!==null)for(e=Ec(e);e!==null;){if(t=e[Or])return t;e=Ec(e)}return r}e=t,t=e.parentNode}return null}function qn(e){return e=e[Or]||e[Dr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function en(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(l(33))}function Do(e){return e[Gn]||null}var $a=[],rn=-1;function at(e){return{current:e}}function Ne(e){0>rn||(e.current=$a[rn],$a[rn]=null,rn--)}function ke(e,r){rn++,$a[rn]=e.current,e.current=r}var st={},Ye=at(st),nr=at(!1),Tt=st;function tn(e,r){var t=e.type.contextTypes;if(!t)return st;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===r)return o.__reactInternalMemoizedMaskedChildContext;var a={},s;for(s in t)a[s]=r[s];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=a),a}function or(e){return e=e.childContextTypes,e!=null}function Wo(){Ne(nr),Ne(Ye)}function Pc(e,r,t){if(Ye.current!==st)throw Error(l(168));ke(Ye,r),ke(nr,t)}function _c(e,r,t){var o=e.stateNode;if(r=r.childContextTypes,typeof o.getChildContext!="function")return t;o=o.getChildContext();for(var a in o)if(!(a in r))throw Error(l(108,fe(e)||"Unknown",a));return I({},t,o)}function Uo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||st,Tt=Ye.current,ke(Ye,e),ke(nr,nr.current),!0}function Lc(e,r,t){var o=e.stateNode;if(!o)throw Error(l(169));t?(e=_c(e,r,Tt),o.__reactInternalMemoizedMergedChildContext=e,Ne(nr),Ne(Ye),ke(Ye,e)):Ne(nr),ke(nr,t)}var Wr=null,Vo=!1,Ma=!1;function zc(e){Wr===null?Wr=[e]:Wr.push(e)}function Hf(e){Vo=!0,zc(e)}function lt(){if(!Ma&&Wr!==null){Ma=!0;var e=0,r=ye;try{var t=Wr;for(ye=1;e<t.length;e++){var o=t[e];do o=o(!0);while(o!==null)}Wr=null,Vo=!1}catch(a){throw Wr!==null&&(Wr=Wr.slice(e+1)),$l(na,lt),a}finally{ye=r,Ma=!1}}return null}var nn=[],on=0,Qo=null,Go=0,vr=[],yr=0,Et=null,Ur=1,Vr="";function Pt(e,r){nn[on++]=Go,nn[on++]=Qo,Qo=e,Go=r}function Ic(e,r,t){vr[yr++]=Ur,vr[yr++]=Vr,vr[yr++]=Et,Et=e;var o=Ur;e=Vr;var a=32-Tr(o)-1;o&=~(1<<a),t+=1;var s=32-Tr(r)+a;if(30<s){var d=a-a%5;s=(o&(1<<d)-1).toString(32),o>>=d,a-=d,Ur=1<<32-Tr(r)+a|t<<a|o,Vr=s+e}else Ur=1<<s|t<<a|o,Vr=e}function Ra(e){e.return!==null&&(Pt(e,1),Ic(e,1,0))}function Oa(e){for(;e===Qo;)Qo=nn[--on],nn[on]=null,Go=nn[--on],nn[on]=null;for(;e===Et;)Et=vr[--yr],vr[yr]=null,Vr=vr[--yr],vr[yr]=null,Ur=vr[--yr],vr[yr]=null}var ur=null,pr=null,Te=!1,Pr=null;function $c(e,r){var t=jr(5,null,null,0);t.elementType="DELETED",t.stateNode=r,t.return=e,r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)}function Mc(e,r){switch(e.tag){case 5:var t=e.type;return r=r.nodeType!==1||t.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(e.stateNode=r,ur=e,pr=it(r.firstChild),!0):!1;case 6:return r=e.pendingProps===""||r.nodeType!==3?null:r,r!==null?(e.stateNode=r,ur=e,pr=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(t=Et!==null?{id:Ur,overflow:Vr}:null,e.memoizedState={dehydrated:r,treeContext:t,retryLane:1073741824},t=jr(18,null,null,0),t.stateNode=r,t.return=e,e.child=t,ur=e,pr=null,!0):!1;default:return!1}}function Ha(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ba(e){if(Te){var r=pr;if(r){var t=r;if(!Mc(e,r)){if(Ha(e))throw Error(l(418));r=it(t.nextSibling);var o=ur;r&&Mc(e,r)?$c(o,t):(e.flags=e.flags&-4097|2,Te=!1,ur=e)}}else{if(Ha(e))throw Error(l(418));e.flags=e.flags&-4097|2,Te=!1,ur=e}}}function Rc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ur=e}function qo(e){if(e!==ur)return!1;if(!Te)return Rc(e),Te=!0,!1;var r;if((r=e.tag!==3)&&!(r=e.tag!==5)&&(r=e.type,r=r!=="head"&&r!=="body"&&!_a(e.type,e.memoizedProps)),r&&(r=pr)){if(Ha(e))throw Oc(),Error(l(418));for(;r;)$c(e,r),r=it(r.nextSibling)}if(Rc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));e:{for(e=e.nextSibling,r=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(r===0){pr=it(e.nextSibling);break e}r--}else t!=="$"&&t!=="$!"&&t!=="$?"||r++}e=e.nextSibling}pr=null}}else pr=ur?it(e.stateNode.nextSibling):null;return!0}function Oc(){for(var e=pr;e;)e=it(e.nextSibling)}function an(){pr=ur=null,Te=!1}function Aa(e){Pr===null?Pr=[e]:Pr.push(e)}var Bf=z.ReactCurrentBatchConfig;function Kn(e,r,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(l(309));var o=t.stateNode}if(!o)throw Error(l(147,e));var a=o,s=""+e;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===s?r.ref:(r=function(d){var f=a.refs;d===null?delete f[s]:f[s]=d},r._stringRef=s,r)}if(typeof e!="string")throw Error(l(284));if(!t._owner)throw Error(l(290,e))}return e}function Ko(e,r){throw e=Object.prototype.toString.call(r),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e))}function Hc(e){var r=e._init;return r(e._payload)}function Bc(e){function r(g,x){if(e){var y=g.deletions;y===null?(g.deletions=[x],g.flags|=16):y.push(x)}}function t(g,x){if(!e)return null;for(;x!==null;)r(g,x),x=x.sibling;return null}function o(g,x){for(g=new Map;x!==null;)x.key!==null?g.set(x.key,x):g.set(x.index,x),x=x.sibling;return g}function a(g,x){return g=mt(g,x),g.index=0,g.sibling=null,g}function s(g,x,y){return g.index=y,e?(y=g.alternate,y!==null?(y=y.index,y<x?(g.flags|=2,x):y):(g.flags|=2,x)):(g.flags|=1048576,x)}function d(g){return e&&g.alternate===null&&(g.flags|=2),g}function f(g,x,y,C){return x===null||x.tag!==6?(x=Ls(y,g.mode,C),x.return=g,x):(x=a(x,y),x.return=g,x)}function h(g,x,y,C){var B=y.type;return B===P?N(g,x,y.props.children,C,y.key):x!==null&&(x.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===Ke&&Hc(B)===x.type)?(C=a(x,y.props),C.ref=Kn(g,x,y),C.return=g,C):(C=yi(y.type,y.key,y.props,null,g.mode,C),C.ref=Kn(g,x,y),C.return=g,C)}function w(g,x,y,C){return x===null||x.tag!==4||x.stateNode.containerInfo!==y.containerInfo||x.stateNode.implementation!==y.implementation?(x=zs(y,g.mode,C),x.return=g,x):(x=a(x,y.children||[]),x.return=g,x)}function N(g,x,y,C,B){return x===null||x.tag!==7?(x=Ot(y,g.mode,C,B),x.return=g,x):(x=a(x,y),x.return=g,x)}function S(g,x,y){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Ls(""+x,g.mode,y),x.return=g,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case J:return y=yi(x.type,x.key,x.props,null,g.mode,y),y.ref=Kn(g,null,x),y.return=g,y;case W:return x=zs(x,g.mode,y),x.return=g,x;case Ke:var C=x._init;return S(g,C(x._payload),y)}if(Nn(x)||A(x))return x=Ot(x,g.mode,y,null),x.return=g,x;Ko(g,x)}return null}function j(g,x,y,C){var B=x!==null?x.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return B!==null?null:f(g,x,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case J:return y.key===B?h(g,x,y,C):null;case W:return y.key===B?w(g,x,y,C):null;case Ke:return B=y._init,j(g,x,B(y._payload),C)}if(Nn(y)||A(y))return B!==null?null:N(g,x,y,C,null);Ko(g,y)}return null}function $(g,x,y,C,B){if(typeof C=="string"&&C!==""||typeof C=="number")return g=g.get(y)||null,f(x,g,""+C,B);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case J:return g=g.get(C.key===null?y:C.key)||null,h(x,g,C,B);case W:return g=g.get(C.key===null?y:C.key)||null,w(x,g,C,B);case Ke:var U=C._init;return $(g,x,y,U(C._payload),B)}if(Nn(C)||A(C))return g=g.get(y)||null,N(x,g,C,B,null);Ko(x,C)}return null}function R(g,x,y,C){for(var B=null,U=null,V=x,K=x=0,Ve=null;V!==null&&K<y.length;K++){V.index>K?(Ve=V,V=null):Ve=V.sibling;var xe=j(g,V,y[K],C);if(xe===null){V===null&&(V=Ve);break}e&&V&&xe.alternate===null&&r(g,V),x=s(xe,x,K),U===null?B=xe:U.sibling=xe,U=xe,V=Ve}if(K===y.length)return t(g,V),Te&&Pt(g,K),B;if(V===null){for(;K<y.length;K++)V=S(g,y[K],C),V!==null&&(x=s(V,x,K),U===null?B=V:U.sibling=V,U=V);return Te&&Pt(g,K),B}for(V=o(g,V);K<y.length;K++)Ve=$(V,g,K,y[K],C),Ve!==null&&(e&&Ve.alternate!==null&&V.delete(Ve.key===null?K:Ve.key),x=s(Ve,x,K),U===null?B=Ve:U.sibling=Ve,U=Ve);return e&&V.forEach(function(gt){return r(g,gt)}),Te&&Pt(g,K),B}function O(g,x,y,C){var B=A(y);if(typeof B!="function")throw Error(l(150));if(y=B.call(y),y==null)throw Error(l(151));for(var U=B=null,V=x,K=x=0,Ve=null,xe=y.next();V!==null&&!xe.done;K++,xe=y.next()){V.index>K?(Ve=V,V=null):Ve=V.sibling;var gt=j(g,V,xe.value,C);if(gt===null){V===null&&(V=Ve);break}e&&V&&gt.alternate===null&&r(g,V),x=s(gt,x,K),U===null?B=gt:U.sibling=gt,U=gt,V=Ve}if(xe.done)return t(g,V),Te&&Pt(g,K),B;if(V===null){for(;!xe.done;K++,xe=y.next())xe=S(g,xe.value,C),xe!==null&&(x=s(xe,x,K),U===null?B=xe:U.sibling=xe,U=xe);return Te&&Pt(g,K),B}for(V=o(g,V);!xe.done;K++,xe=y.next())xe=$(V,g,K,xe.value,C),xe!==null&&(e&&xe.alternate!==null&&V.delete(xe.key===null?K:xe.key),x=s(xe,x,K),U===null?B=xe:U.sibling=xe,U=xe);return e&&V.forEach(function(vh){return r(g,vh)}),Te&&Pt(g,K),B}function Oe(g,x,y,C){if(typeof y=="object"&&y!==null&&y.type===P&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case J:e:{for(var B=y.key,U=x;U!==null;){if(U.key===B){if(B=y.type,B===P){if(U.tag===7){t(g,U.sibling),x=a(U,y.props.children),x.return=g,g=x;break e}}else if(U.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===Ke&&Hc(B)===U.type){t(g,U.sibling),x=a(U,y.props),x.ref=Kn(g,U,y),x.return=g,g=x;break e}t(g,U);break}else r(g,U);U=U.sibling}y.type===P?(x=Ot(y.props.children,g.mode,C,y.key),x.return=g,g=x):(C=yi(y.type,y.key,y.props,null,g.mode,C),C.ref=Kn(g,x,y),C.return=g,g=C)}return d(g);case W:e:{for(U=y.key;x!==null;){if(x.key===U)if(x.tag===4&&x.stateNode.containerInfo===y.containerInfo&&x.stateNode.implementation===y.implementation){t(g,x.sibling),x=a(x,y.children||[]),x.return=g,g=x;break e}else{t(g,x);break}else r(g,x);x=x.sibling}x=zs(y,g.mode,C),x.return=g,g=x}return d(g);case Ke:return U=y._init,Oe(g,x,U(y._payload),C)}if(Nn(y))return R(g,x,y,C);if(A(y))return O(g,x,y,C);Ko(g,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,x!==null&&x.tag===6?(t(g,x.sibling),x=a(x,y),x.return=g,g=x):(t(g,x),x=Ls(y,g.mode,C),x.return=g,g=x),d(g)):t(g,x)}return Oe}var sn=Bc(!0),Ac=Bc(!1),Yo=at(null),Xo=null,ln=null,Fa=null;function Da(){Fa=ln=Xo=null}function Wa(e){var r=Yo.current;Ne(Yo),e._currentValue=r}function Ua(e,r,t){for(;e!==null;){var o=e.alternate;if((e.childLanes&r)!==r?(e.childLanes|=r,o!==null&&(o.childLanes|=r)):o!==null&&(o.childLanes&r)!==r&&(o.childLanes|=r),e===t)break;e=e.return}}function cn(e,r){Xo=e,Fa=ln=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&r)!==0&&(ir=!0),e.firstContext=null)}function wr(e){var r=e._currentValue;if(Fa!==e)if(e={context:e,memoizedValue:r,next:null},ln===null){if(Xo===null)throw Error(l(308));ln=e,Xo.dependencies={lanes:0,firstContext:e}}else ln=ln.next=e;return r}var _t=null;function Va(e){_t===null?_t=[e]:_t.push(e)}function Fc(e,r,t,o){var a=r.interleaved;return a===null?(t.next=t,Va(r)):(t.next=a.next,a.next=t),r.interleaved=t,Qr(e,o)}function Qr(e,r){e.lanes|=r;var t=e.alternate;for(t!==null&&(t.lanes|=r),t=e,e=e.return;e!==null;)e.childLanes|=r,t=e.alternate,t!==null&&(t.childLanes|=r),t=e,e=e.return;return t.tag===3?t.stateNode:null}var ct=!1;function Qa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Dc(e,r){e=e.updateQueue,r.updateQueue===e&&(r.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Gr(e,r){return{eventTime:e,lane:r,tag:0,payload:null,callback:null,next:null}}function dt(e,r,t){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(he&2)!==0){var a=o.pending;return a===null?r.next=r:(r.next=a.next,a.next=r),o.pending=r,Qr(e,t)}return a=o.interleaved,a===null?(r.next=r,Va(o)):(r.next=a.next,a.next=r),o.interleaved=r,Qr(e,t)}function Jo(e,r,t){if(r=r.updateQueue,r!==null&&(r=r.shared,(t&4194240)!==0)){var o=r.lanes;o&=e.pendingLanes,t|=o,r.lanes=t,aa(e,t)}}function Wc(e,r){var t=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,t===o)){var a=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var d={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?a=s=d:s=s.next=d,t=t.next}while(t!==null);s===null?a=s=r:s=s.next=r}else a=s=r;t={baseState:o.baseState,firstBaseUpdate:a,lastBaseUpdate:s,shared:o.shared,effects:o.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=r:e.next=r,t.lastBaseUpdate=r}function Zo(e,r,t,o){var a=e.updateQueue;ct=!1;var s=a.firstBaseUpdate,d=a.lastBaseUpdate,f=a.shared.pending;if(f!==null){a.shared.pending=null;var h=f,w=h.next;h.next=null,d===null?s=w:d.next=w,d=h;var N=e.alternate;N!==null&&(N=N.updateQueue,f=N.lastBaseUpdate,f!==d&&(f===null?N.firstBaseUpdate=w:f.next=w,N.lastBaseUpdate=h))}if(s!==null){var S=a.baseState;d=0,N=w=h=null,f=s;do{var j=f.lane,$=f.eventTime;if((o&j)===j){N!==null&&(N=N.next={eventTime:$,lane:0,tag:f.tag,payload:f.payload,callback:f.callback,next:null});e:{var R=e,O=f;switch(j=r,$=t,O.tag){case 1:if(R=O.payload,typeof R=="function"){S=R.call($,S,j);break e}S=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=O.payload,j=typeof R=="function"?R.call($,S,j):R,j==null)break e;S=I({},S,j);break e;case 2:ct=!0}}f.callback!==null&&f.lane!==0&&(e.flags|=64,j=a.effects,j===null?a.effects=[f]:j.push(f))}else $={eventTime:$,lane:j,tag:f.tag,payload:f.payload,callback:f.callback,next:null},N===null?(w=N=$,h=S):N=N.next=$,d|=j;if(f=f.next,f===null){if(f=a.shared.pending,f===null)break;j=f,f=j.next,j.next=null,a.lastBaseUpdate=j,a.shared.pending=null}}while(!0);if(N===null&&(h=S),a.baseState=h,a.firstBaseUpdate=w,a.lastBaseUpdate=N,r=a.shared.interleaved,r!==null){a=r;do d|=a.lane,a=a.next;while(a!==r)}else s===null&&(a.shared.lanes=0);It|=d,e.lanes=d,e.memoizedState=S}}function Uc(e,r,t){if(e=r.effects,r.effects=null,e!==null)for(r=0;r<e.length;r++){var o=e[r],a=o.callback;if(a!==null){if(o.callback=null,o=t,typeof a!="function")throw Error(l(191,a));a.call(o)}}}var Yn={},Hr=at(Yn),Xn=at(Yn),Jn=at(Yn);function Lt(e){if(e===Yn)throw Error(l(174));return e}function Ga(e,r){switch(ke(Jn,r),ke(Xn,e),ke(Hr,Yn),e=r.nodeType,e){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:qi(null,"");break;default:e=e===8?r.parentNode:r,r=e.namespaceURI||null,e=e.tagName,r=qi(r,e)}Ne(Hr),ke(Hr,r)}function dn(){Ne(Hr),Ne(Xn),Ne(Jn)}function Vc(e){Lt(Jn.current);var r=Lt(Hr.current),t=qi(r,e.type);r!==t&&(ke(Xn,e),ke(Hr,t))}function qa(e){Xn.current===e&&(Ne(Hr),Ne(Xn))}var Pe=at(0);function ei(e){for(var r=e;r!==null;){if(r.tag===13){var t=r.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Ka=[];function Ya(){for(var e=0;e<Ka.length;e++)Ka[e]._workInProgressVersionPrimary=null;Ka.length=0}var ri=z.ReactCurrentDispatcher,Xa=z.ReactCurrentBatchConfig,zt=0,_e=null,Ae=null,We=null,ti=!1,Zn=!1,eo=0,Af=0;function Xe(){throw Error(l(321))}function Ja(e,r){if(r===null)return!1;for(var t=0;t<r.length&&t<e.length;t++)if(!Er(e[t],r[t]))return!1;return!0}function Za(e,r,t,o,a,s){if(zt=s,_e=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,ri.current=e===null||e.memoizedState===null?Uf:Vf,e=t(o,a),Zn){s=0;do{if(Zn=!1,eo=0,25<=s)throw Error(l(301));s+=1,We=Ae=null,r.updateQueue=null,ri.current=Qf,e=t(o,a)}while(Zn)}if(ri.current=ii,r=Ae!==null&&Ae.next!==null,zt=0,We=Ae=_e=null,ti=!1,r)throw Error(l(300));return e}function es(){var e=eo!==0;return eo=0,e}function Br(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return We===null?_e.memoizedState=We=e:We=We.next=e,We}function br(){if(Ae===null){var e=_e.alternate;e=e!==null?e.memoizedState:null}else e=Ae.next;var r=We===null?_e.memoizedState:We.next;if(r!==null)We=r,Ae=e;else{if(e===null)throw Error(l(310));Ae=e,e={memoizedState:Ae.memoizedState,baseState:Ae.baseState,baseQueue:Ae.baseQueue,queue:Ae.queue,next:null},We===null?_e.memoizedState=We=e:We=We.next=e}return We}function ro(e,r){return typeof r=="function"?r(e):r}function rs(e){var r=br(),t=r.queue;if(t===null)throw Error(l(311));t.lastRenderedReducer=e;var o=Ae,a=o.baseQueue,s=t.pending;if(s!==null){if(a!==null){var d=a.next;a.next=s.next,s.next=d}o.baseQueue=a=s,t.pending=null}if(a!==null){s=a.next,o=o.baseState;var f=d=null,h=null,w=s;do{var N=w.lane;if((zt&N)===N)h!==null&&(h=h.next={lane:0,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null}),o=w.hasEagerState?w.eagerState:e(o,w.action);else{var S={lane:N,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null};h===null?(f=h=S,d=o):h=h.next=S,_e.lanes|=N,It|=N}w=w.next}while(w!==null&&w!==s);h===null?d=o:h.next=f,Er(o,r.memoizedState)||(ir=!0),r.memoizedState=o,r.baseState=d,r.baseQueue=h,t.lastRenderedState=o}if(e=t.interleaved,e!==null){a=e;do s=a.lane,_e.lanes|=s,It|=s,a=a.next;while(a!==e)}else a===null&&(t.lanes=0);return[r.memoizedState,t.dispatch]}function ts(e){var r=br(),t=r.queue;if(t===null)throw Error(l(311));t.lastRenderedReducer=e;var o=t.dispatch,a=t.pending,s=r.memoizedState;if(a!==null){t.pending=null;var d=a=a.next;do s=e(s,d.action),d=d.next;while(d!==a);Er(s,r.memoizedState)||(ir=!0),r.memoizedState=s,r.baseQueue===null&&(r.baseState=s),t.lastRenderedState=s}return[s,o]}function Qc(){}function Gc(e,r){var t=_e,o=br(),a=r(),s=!Er(o.memoizedState,a);if(s&&(o.memoizedState=a,ir=!0),o=o.queue,ns(Yc.bind(null,t,o,e),[e]),o.getSnapshot!==r||s||We!==null&&We.memoizedState.tag&1){if(t.flags|=2048,to(9,Kc.bind(null,t,o,a,r),void 0,null),Ue===null)throw Error(l(349));(zt&30)!==0||qc(t,r,a)}return a}function qc(e,r,t){e.flags|=16384,e={getSnapshot:r,value:t},r=_e.updateQueue,r===null?(r={lastEffect:null,stores:null},_e.updateQueue=r,r.stores=[e]):(t=r.stores,t===null?r.stores=[e]:t.push(e))}function Kc(e,r,t,o){r.value=t,r.getSnapshot=o,Xc(r)&&Jc(e)}function Yc(e,r,t){return t(function(){Xc(r)&&Jc(e)})}function Xc(e){var r=e.getSnapshot;e=e.value;try{var t=r();return!Er(e,t)}catch{return!0}}function Jc(e){var r=Qr(e,1);r!==null&&Ir(r,e,1,-1)}function Zc(e){var r=Br();return typeof e=="function"&&(e=e()),r.memoizedState=r.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ro,lastRenderedState:e},r.queue=e,e=e.dispatch=Wf.bind(null,_e,e),[r.memoizedState,e]}function to(e,r,t,o){return e={tag:e,create:r,destroy:t,deps:o,next:null},r=_e.updateQueue,r===null?(r={lastEffect:null,stores:null},_e.updateQueue=r,r.lastEffect=e.next=e):(t=r.lastEffect,t===null?r.lastEffect=e.next=e:(o=t.next,t.next=e,e.next=o,r.lastEffect=e)),e}function ed(){return br().memoizedState}function ni(e,r,t,o){var a=Br();_e.flags|=e,a.memoizedState=to(1|r,t,void 0,o===void 0?null:o)}function oi(e,r,t,o){var a=br();o=o===void 0?null:o;var s=void 0;if(Ae!==null){var d=Ae.memoizedState;if(s=d.destroy,o!==null&&Ja(o,d.deps)){a.memoizedState=to(r,t,s,o);return}}_e.flags|=e,a.memoizedState=to(1|r,t,s,o)}function rd(e,r){return ni(8390656,8,e,r)}function ns(e,r){return oi(2048,8,e,r)}function td(e,r){return oi(4,2,e,r)}function nd(e,r){return oi(4,4,e,r)}function od(e,r){if(typeof r=="function")return e=e(),r(e),function(){r(null)};if(r!=null)return e=e(),r.current=e,function(){r.current=null}}function id(e,r,t){return t=t!=null?t.concat([e]):null,oi(4,4,od.bind(null,r,e),t)}function os(){}function ad(e,r){var t=br();r=r===void 0?null:r;var o=t.memoizedState;return o!==null&&r!==null&&Ja(r,o[1])?o[0]:(t.memoizedState=[e,r],e)}function sd(e,r){var t=br();r=r===void 0?null:r;var o=t.memoizedState;return o!==null&&r!==null&&Ja(r,o[1])?o[0]:(e=e(),t.memoizedState=[e,r],e)}function ld(e,r,t){return(zt&21)===0?(e.baseState&&(e.baseState=!1,ir=!0),e.memoizedState=t):(Er(t,r)||(t=Hl(),_e.lanes|=t,It|=t,e.baseState=!0),r)}function Ff(e,r){var t=ye;ye=t!==0&&4>t?t:4,e(!0);var o=Xa.transition;Xa.transition={};try{e(!1),r()}finally{ye=t,Xa.transition=o}}function cd(){return br().memoizedState}function Df(e,r,t){var o=ht(e);if(t={lane:o,action:t,hasEagerState:!1,eagerState:null,next:null},dd(e))ud(r,t);else if(t=Fc(e,r,t,o),t!==null){var a=tr();Ir(t,e,o,a),pd(t,r,o)}}function Wf(e,r,t){var o=ht(e),a={lane:o,action:t,hasEagerState:!1,eagerState:null,next:null};if(dd(e))ud(r,a);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=r.lastRenderedReducer,s!==null))try{var d=r.lastRenderedState,f=s(d,t);if(a.hasEagerState=!0,a.eagerState=f,Er(f,d)){var h=r.interleaved;h===null?(a.next=a,Va(r)):(a.next=h.next,h.next=a),r.interleaved=a;return}}catch{}finally{}t=Fc(e,r,a,o),t!==null&&(a=tr(),Ir(t,e,o,a),pd(t,r,o))}}function dd(e){var r=e.alternate;return e===_e||r!==null&&r===_e}function ud(e,r){Zn=ti=!0;var t=e.pending;t===null?r.next=r:(r.next=t.next,t.next=r),e.pending=r}function pd(e,r,t){if((t&4194240)!==0){var o=r.lanes;o&=e.pendingLanes,t|=o,r.lanes=t,aa(e,t)}}var ii={readContext:wr,useCallback:Xe,useContext:Xe,useEffect:Xe,useImperativeHandle:Xe,useInsertionEffect:Xe,useLayoutEffect:Xe,useMemo:Xe,useReducer:Xe,useRef:Xe,useState:Xe,useDebugValue:Xe,useDeferredValue:Xe,useTransition:Xe,useMutableSource:Xe,useSyncExternalStore:Xe,useId:Xe,unstable_isNewReconciler:!1},Uf={readContext:wr,useCallback:function(e,r){return Br().memoizedState=[e,r===void 0?null:r],e},useContext:wr,useEffect:rd,useImperativeHandle:function(e,r,t){return t=t!=null?t.concat([e]):null,ni(4194308,4,od.bind(null,r,e),t)},useLayoutEffect:function(e,r){return ni(4194308,4,e,r)},useInsertionEffect:function(e,r){return ni(4,2,e,r)},useMemo:function(e,r){var t=Br();return r=r===void 0?null:r,e=e(),t.memoizedState=[e,r],e},useReducer:function(e,r,t){var o=Br();return r=t!==void 0?t(r):r,o.memoizedState=o.baseState=r,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},o.queue=e,e=e.dispatch=Df.bind(null,_e,e),[o.memoizedState,e]},useRef:function(e){var r=Br();return e={current:e},r.memoizedState=e},useState:Zc,useDebugValue:os,useDeferredValue:function(e){return Br().memoizedState=e},useTransition:function(){var e=Zc(!1),r=e[0];return e=Ff.bind(null,e[1]),Br().memoizedState=e,[r,e]},useMutableSource:function(){},useSyncExternalStore:function(e,r,t){var o=_e,a=Br();if(Te){if(t===void 0)throw Error(l(407));t=t()}else{if(t=r(),Ue===null)throw Error(l(349));(zt&30)!==0||qc(o,r,t)}a.memoizedState=t;var s={value:t,getSnapshot:r};return a.queue=s,rd(Yc.bind(null,o,s,e),[e]),o.flags|=2048,to(9,Kc.bind(null,o,s,t,r),void 0,null),t},useId:function(){var e=Br(),r=Ue.identifierPrefix;if(Te){var t=Vr,o=Ur;t=(o&~(1<<32-Tr(o)-1)).toString(32)+t,r=":"+r+"R"+t,t=eo++,0<t&&(r+="H"+t.toString(32)),r+=":"}else t=Af++,r=":"+r+"r"+t.toString(32)+":";return e.memoizedState=r},unstable_isNewReconciler:!1},Vf={readContext:wr,useCallback:ad,useContext:wr,useEffect:ns,useImperativeHandle:id,useInsertionEffect:td,useLayoutEffect:nd,useMemo:sd,useReducer:rs,useRef:ed,useState:function(){return rs(ro)},useDebugValue:os,useDeferredValue:function(e){var r=br();return ld(r,Ae.memoizedState,e)},useTransition:function(){var e=rs(ro)[0],r=br().memoizedState;return[e,r]},useMutableSource:Qc,useSyncExternalStore:Gc,useId:cd,unstable_isNewReconciler:!1},Qf={readContext:wr,useCallback:ad,useContext:wr,useEffect:ns,useImperativeHandle:id,useInsertionEffect:td,useLayoutEffect:nd,useMemo:sd,useReducer:ts,useRef:ed,useState:function(){return ts(ro)},useDebugValue:os,useDeferredValue:function(e){var r=br();return Ae===null?r.memoizedState=e:ld(r,Ae.memoizedState,e)},useTransition:function(){var e=ts(ro)[0],r=br().memoizedState;return[e,r]},useMutableSource:Qc,useSyncExternalStore:Gc,useId:cd,unstable_isNewReconciler:!1};function _r(e,r){if(e&&e.defaultProps){r=I({},r),e=e.defaultProps;for(var t in e)r[t]===void 0&&(r[t]=e[t]);return r}return r}function is(e,r,t,o){r=e.memoizedState,t=t(o,r),t=t==null?r:I({},r,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var ai={isMounted:function(e){return(e=e._reactInternals)?St(e)===e:!1},enqueueSetState:function(e,r,t){e=e._reactInternals;var o=tr(),a=ht(e),s=Gr(o,a);s.payload=r,t!=null&&(s.callback=t),r=dt(e,s,a),r!==null&&(Ir(r,e,a,o),Jo(r,e,a))},enqueueReplaceState:function(e,r,t){e=e._reactInternals;var o=tr(),a=ht(e),s=Gr(o,a);s.tag=1,s.payload=r,t!=null&&(s.callback=t),r=dt(e,s,a),r!==null&&(Ir(r,e,a,o),Jo(r,e,a))},enqueueForceUpdate:function(e,r){e=e._reactInternals;var t=tr(),o=ht(e),a=Gr(t,o);a.tag=2,r!=null&&(a.callback=r),r=dt(e,a,o),r!==null&&(Ir(r,e,o,t),Jo(r,e,o))}};function fd(e,r,t,o,a,s,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,s,d):r.prototype&&r.prototype.isPureReactComponent?!Dn(t,o)||!Dn(a,s):!0}function hd(e,r,t){var o=!1,a=st,s=r.contextType;return typeof s=="object"&&s!==null?s=wr(s):(a=or(r)?Tt:Ye.current,o=r.contextTypes,s=(o=o!=null)?tn(e,a):st),r=new r(t,s),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=ai,e.stateNode=r,r._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=s),r}function xd(e,r,t,o){e=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(t,o),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(t,o),r.state!==e&&ai.enqueueReplaceState(r,r.state,null)}function as(e,r,t,o){var a=e.stateNode;a.props=t,a.state=e.memoizedState,a.refs={},Qa(e);var s=r.contextType;typeof s=="object"&&s!==null?a.context=wr(s):(s=or(r)?Tt:Ye.current,a.context=tn(e,s)),a.state=e.memoizedState,s=r.getDerivedStateFromProps,typeof s=="function"&&(is(e,r,s,t),a.state=e.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(r=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),r!==a.state&&ai.enqueueReplaceState(a,a.state,null),Zo(e,t,a,o),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function un(e,r){try{var t="",o=r;do t+=le(o),o=o.return;while(o);var a=t}catch(s){a=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:r,stack:a,digest:null}}function ss(e,r,t){return{value:e,source:null,stack:t!=null?t:null,digest:r!=null?r:null}}function ls(e,r){try{console.error(r.value)}catch(t){setTimeout(function(){throw t})}}var Gf=typeof WeakMap=="function"?WeakMap:Map;function md(e,r,t){t=Gr(-1,t),t.tag=3,t.payload={element:null};var o=r.value;return t.callback=function(){fi||(fi=!0,js=o),ls(e,r)},t}function gd(e,r,t){t=Gr(-1,t),t.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var a=r.value;t.payload=function(){return o(a)},t.callback=function(){ls(e,r)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){ls(e,r),typeof o!="function"&&(pt===null?pt=new Set([this]):pt.add(this));var d=r.stack;this.componentDidCatch(r.value,{componentStack:d!==null?d:""})}),t}function vd(e,r,t){var o=e.pingCache;if(o===null){o=e.pingCache=new Gf;var a=new Set;o.set(r,a)}else a=o.get(r),a===void 0&&(a=new Set,o.set(r,a));a.has(t)||(a.add(t),e=sh.bind(null,e,r,t),r.then(e,e))}function yd(e){do{var r;if((r=e.tag===13)&&(r=e.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return e;e=e.return}while(e!==null);return null}function wd(e,r,t,o,a){return(e.mode&1)===0?(e===r?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(r=Gr(-1,1),r.tag=2,dt(t,r,1))),t.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var qf=z.ReactCurrentOwner,ir=!1;function rr(e,r,t,o){r.child=e===null?Ac(r,null,t,o):sn(r,e.child,t,o)}function bd(e,r,t,o,a){t=t.render;var s=r.ref;return cn(r,a),o=Za(e,r,t,o,s,a),t=es(),e!==null&&!ir?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~a,qr(e,r,a)):(Te&&t&&Ra(r),r.flags|=1,rr(e,r,o,a),r.child)}function kd(e,r,t,o,a){if(e===null){var s=t.type;return typeof s=="function"&&!_s(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(r.tag=15,r.type=s,jd(e,r,s,o,a)):(e=yi(t.type,null,o,r,r.mode,a),e.ref=r.ref,e.return=r,r.child=e)}if(s=e.child,(e.lanes&a)===0){var d=s.memoizedProps;if(t=t.compare,t=t!==null?t:Dn,t(d,o)&&e.ref===r.ref)return qr(e,r,a)}return r.flags|=1,e=mt(s,o),e.ref=r.ref,e.return=r,r.child=e}function jd(e,r,t,o,a){if(e!==null){var s=e.memoizedProps;if(Dn(s,o)&&e.ref===r.ref)if(ir=!1,r.pendingProps=o=s,(e.lanes&a)!==0)(e.flags&131072)!==0&&(ir=!0);else return r.lanes=e.lanes,qr(e,r,a)}return cs(e,r,t,o,a)}function Nd(e,r,t){var o=r.pendingProps,a=o.children,s=e!==null?e.memoizedState:null;if(o.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},ke(fn,fr),fr|=t;else{if((t&1073741824)===0)return e=s!==null?s.baseLanes|t:t,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:e,cachePool:null,transitions:null},r.updateQueue=null,ke(fn,fr),fr|=e,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=s!==null?s.baseLanes:t,ke(fn,fr),fr|=o}else s!==null?(o=s.baseLanes|t,r.memoizedState=null):o=t,ke(fn,fr),fr|=o;return rr(e,r,a,t),r.child}function Sd(e,r){var t=r.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(r.flags|=512,r.flags|=2097152)}function cs(e,r,t,o,a){var s=or(t)?Tt:Ye.current;return s=tn(r,s),cn(r,a),t=Za(e,r,t,o,s,a),o=es(),e!==null&&!ir?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~a,qr(e,r,a)):(Te&&o&&Ra(r),r.flags|=1,rr(e,r,t,a),r.child)}function Cd(e,r,t,o,a){if(or(t)){var s=!0;Uo(r)}else s=!1;if(cn(r,a),r.stateNode===null)li(e,r),hd(r,t,o),as(r,t,o,a),o=!0;else if(e===null){var d=r.stateNode,f=r.memoizedProps;d.props=f;var h=d.context,w=t.contextType;typeof w=="object"&&w!==null?w=wr(w):(w=or(t)?Tt:Ye.current,w=tn(r,w));var N=t.getDerivedStateFromProps,S=typeof N=="function"||typeof d.getSnapshotBeforeUpdate=="function";S||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(f!==o||h!==w)&&xd(r,d,o,w),ct=!1;var j=r.memoizedState;d.state=j,Zo(r,o,d,a),h=r.memoizedState,f!==o||j!==h||nr.current||ct?(typeof N=="function"&&(is(r,t,N,o),h=r.memoizedState),(f=ct||fd(r,t,f,o,j,h,w))?(S||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(r.flags|=4194308)):(typeof d.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=o,r.memoizedState=h),d.props=o,d.state=h,d.context=w,o=f):(typeof d.componentDidMount=="function"&&(r.flags|=4194308),o=!1)}else{d=r.stateNode,Dc(e,r),f=r.memoizedProps,w=r.type===r.elementType?f:_r(r.type,f),d.props=w,S=r.pendingProps,j=d.context,h=t.contextType,typeof h=="object"&&h!==null?h=wr(h):(h=or(t)?Tt:Ye.current,h=tn(r,h));var $=t.getDerivedStateFromProps;(N=typeof $=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(f!==S||j!==h)&&xd(r,d,o,h),ct=!1,j=r.memoizedState,d.state=j,Zo(r,o,d,a);var R=r.memoizedState;f!==S||j!==R||nr.current||ct?(typeof $=="function"&&(is(r,t,$,o),R=r.memoizedState),(w=ct||fd(r,t,w,o,j,R,h)||!1)?(N||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,R,h),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,R,h)),typeof d.componentDidUpdate=="function"&&(r.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof d.componentDidUpdate!="function"||f===e.memoizedProps&&j===e.memoizedState||(r.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&j===e.memoizedState||(r.flags|=1024),r.memoizedProps=o,r.memoizedState=R),d.props=o,d.state=R,d.context=h,o=w):(typeof d.componentDidUpdate!="function"||f===e.memoizedProps&&j===e.memoizedState||(r.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&j===e.memoizedState||(r.flags|=1024),o=!1)}return ds(e,r,t,o,s,a)}function ds(e,r,t,o,a,s){Sd(e,r);var d=(r.flags&128)!==0;if(!o&&!d)return a&&Lc(r,t,!1),qr(e,r,s);o=r.stateNode,qf.current=r;var f=d&&typeof t.getDerivedStateFromError!="function"?null:o.render();return r.flags|=1,e!==null&&d?(r.child=sn(r,e.child,null,s),r.child=sn(r,null,f,s)):rr(e,r,f,s),r.memoizedState=o.state,a&&Lc(r,t,!0),r.child}function Td(e){var r=e.stateNode;r.pendingContext?Pc(e,r.pendingContext,r.pendingContext!==r.context):r.context&&Pc(e,r.context,!1),Ga(e,r.containerInfo)}function Ed(e,r,t,o,a){return an(),Aa(a),r.flags|=256,rr(e,r,t,o),r.child}var us={dehydrated:null,treeContext:null,retryLane:0};function ps(e){return{baseLanes:e,cachePool:null,transitions:null}}function Pd(e,r,t){var o=r.pendingProps,a=Pe.current,s=!1,d=(r.flags&128)!==0,f;if((f=d)||(f=e!==null&&e.memoizedState===null?!1:(a&2)!==0),f?(s=!0,r.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),ke(Pe,a&1),e===null)return Ba(r),e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((r.mode&1)===0?r.lanes=1:e.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(d=o.children,e=o.fallback,s?(o=r.mode,s=r.child,d={mode:"hidden",children:d},(o&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=d):s=wi(d,o,0,null),e=Ot(e,o,t,null),s.return=r,e.return=r,s.sibling=e,r.child=s,r.child.memoizedState=ps(t),r.memoizedState=us,e):fs(r,d));if(a=e.memoizedState,a!==null&&(f=a.dehydrated,f!==null))return Kf(e,r,d,o,f,a,t);if(s){s=o.fallback,d=r.mode,a=e.child,f=a.sibling;var h={mode:"hidden",children:o.children};return(d&1)===0&&r.child!==a?(o=r.child,o.childLanes=0,o.pendingProps=h,r.deletions=null):(o=mt(a,h),o.subtreeFlags=a.subtreeFlags&14680064),f!==null?s=mt(f,s):(s=Ot(s,d,t,null),s.flags|=2),s.return=r,o.return=r,o.sibling=s,r.child=o,o=s,s=r.child,d=e.child.memoizedState,d=d===null?ps(t):{baseLanes:d.baseLanes|t,cachePool:null,transitions:d.transitions},s.memoizedState=d,s.childLanes=e.childLanes&~t,r.memoizedState=us,o}return s=e.child,e=s.sibling,o=mt(s,{mode:"visible",children:o.children}),(r.mode&1)===0&&(o.lanes=t),o.return=r,o.sibling=null,e!==null&&(t=r.deletions,t===null?(r.deletions=[e],r.flags|=16):t.push(e)),r.child=o,r.memoizedState=null,o}function fs(e,r){return r=wi({mode:"visible",children:r},e.mode,0,null),r.return=e,e.child=r}function si(e,r,t,o){return o!==null&&Aa(o),sn(r,e.child,null,t),e=fs(r,r.pendingProps.children),e.flags|=2,r.memoizedState=null,e}function Kf(e,r,t,o,a,s,d){if(t)return r.flags&256?(r.flags&=-257,o=ss(Error(l(422))),si(e,r,d,o)):r.memoizedState!==null?(r.child=e.child,r.flags|=128,null):(s=o.fallback,a=r.mode,o=wi({mode:"visible",children:o.children},a,0,null),s=Ot(s,a,d,null),s.flags|=2,o.return=r,s.return=r,o.sibling=s,r.child=o,(r.mode&1)!==0&&sn(r,e.child,null,d),r.child.memoizedState=ps(d),r.memoizedState=us,s);if((r.mode&1)===0)return si(e,r,d,null);if(a.data==="$!"){if(o=a.nextSibling&&a.nextSibling.dataset,o)var f=o.dgst;return o=f,s=Error(l(419)),o=ss(s,o,void 0),si(e,r,d,o)}if(f=(d&e.childLanes)!==0,ir||f){if(o=Ue,o!==null){switch(d&-d){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(o.suspendedLanes|d))!==0?0:a,a!==0&&a!==s.retryLane&&(s.retryLane=a,Qr(e,a),Ir(o,e,a,-1))}return Ps(),o=ss(Error(l(421))),si(e,r,d,o)}return a.data==="$?"?(r.flags|=128,r.child=e.child,r=lh.bind(null,e),a._reactRetry=r,null):(e=s.treeContext,pr=it(a.nextSibling),ur=r,Te=!0,Pr=null,e!==null&&(vr[yr++]=Ur,vr[yr++]=Vr,vr[yr++]=Et,Ur=e.id,Vr=e.overflow,Et=r),r=fs(r,o.children),r.flags|=4096,r)}function _d(e,r,t){e.lanes|=r;var o=e.alternate;o!==null&&(o.lanes|=r),Ua(e.return,r,t)}function hs(e,r,t,o,a){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:o,tail:t,tailMode:a}:(s.isBackwards=r,s.rendering=null,s.renderingStartTime=0,s.last=o,s.tail=t,s.tailMode=a)}function Ld(e,r,t){var o=r.pendingProps,a=o.revealOrder,s=o.tail;if(rr(e,r,o.children,t),o=Pe.current,(o&2)!==0)o=o&1|2,r.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=r.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&_d(e,t,r);else if(e.tag===19)_d(e,t,r);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break e;for(;e.sibling===null;){if(e.return===null||e.return===r)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(ke(Pe,o),(r.mode&1)===0)r.memoizedState=null;else switch(a){case"forwards":for(t=r.child,a=null;t!==null;)e=t.alternate,e!==null&&ei(e)===null&&(a=t),t=t.sibling;t=a,t===null?(a=r.child,r.child=null):(a=t.sibling,t.sibling=null),hs(r,!1,a,t,s);break;case"backwards":for(t=null,a=r.child,r.child=null;a!==null;){if(e=a.alternate,e!==null&&ei(e)===null){r.child=a;break}e=a.sibling,a.sibling=t,t=a,a=e}hs(r,!0,t,null,s);break;case"together":hs(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function li(e,r){(r.mode&1)===0&&e!==null&&(e.alternate=null,r.alternate=null,r.flags|=2)}function qr(e,r,t){if(e!==null&&(r.dependencies=e.dependencies),It|=r.lanes,(t&r.childLanes)===0)return null;if(e!==null&&r.child!==e.child)throw Error(l(153));if(r.child!==null){for(e=r.child,t=mt(e,e.pendingProps),r.child=t,t.return=r;e.sibling!==null;)e=e.sibling,t=t.sibling=mt(e,e.pendingProps),t.return=r;t.sibling=null}return r.child}function Yf(e,r,t){switch(r.tag){case 3:Td(r),an();break;case 5:Vc(r);break;case 1:or(r.type)&&Uo(r);break;case 4:Ga(r,r.stateNode.containerInfo);break;case 10:var o=r.type._context,a=r.memoizedProps.value;ke(Yo,o._currentValue),o._currentValue=a;break;case 13:if(o=r.memoizedState,o!==null)return o.dehydrated!==null?(ke(Pe,Pe.current&1),r.flags|=128,null):(t&r.child.childLanes)!==0?Pd(e,r,t):(ke(Pe,Pe.current&1),e=qr(e,r,t),e!==null?e.sibling:null);ke(Pe,Pe.current&1);break;case 19:if(o=(t&r.childLanes)!==0,(e.flags&128)!==0){if(o)return Ld(e,r,t);r.flags|=128}if(a=r.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),ke(Pe,Pe.current),o)break;return null;case 22:case 23:return r.lanes=0,Nd(e,r,t)}return qr(e,r,t)}var zd,xs,Id,$d;zd=function(e,r){for(var t=r.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break;for(;t.sibling===null;){if(t.return===null||t.return===r)return;t=t.return}t.sibling.return=t.return,t=t.sibling}},xs=function(){},Id=function(e,r,t,o){var a=e.memoizedProps;if(a!==o){e=r.stateNode,Lt(Hr.current);var s=null;switch(t){case"input":a=Ui(e,a),o=Ui(e,o),s=[];break;case"select":a=I({},a,{value:void 0}),o=I({},o,{value:void 0}),s=[];break;case"textarea":a=Gi(e,a),o=Gi(e,o),s=[];break;default:typeof a.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=Fo)}Ki(t,o);var d;t=null;for(w in a)if(!o.hasOwnProperty(w)&&a.hasOwnProperty(w)&&a[w]!=null)if(w==="style"){var f=a[w];for(d in f)f.hasOwnProperty(d)&&(t||(t={}),t[d]="")}else w!=="dangerouslySetInnerHTML"&&w!=="children"&&w!=="suppressContentEditableWarning"&&w!=="suppressHydrationWarning"&&w!=="autoFocus"&&(u.hasOwnProperty(w)?s||(s=[]):(s=s||[]).push(w,null));for(w in o){var h=o[w];if(f=a!=null?a[w]:void 0,o.hasOwnProperty(w)&&h!==f&&(h!=null||f!=null))if(w==="style")if(f){for(d in f)!f.hasOwnProperty(d)||h&&h.hasOwnProperty(d)||(t||(t={}),t[d]="");for(d in h)h.hasOwnProperty(d)&&f[d]!==h[d]&&(t||(t={}),t[d]=h[d])}else t||(s||(s=[]),s.push(w,t)),t=h;else w==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,f=f?f.__html:void 0,h!=null&&f!==h&&(s=s||[]).push(w,h)):w==="children"?typeof h!="string"&&typeof h!="number"||(s=s||[]).push(w,""+h):w!=="suppressContentEditableWarning"&&w!=="suppressHydrationWarning"&&(u.hasOwnProperty(w)?(h!=null&&w==="onScroll"&&je("scroll",e),s||f===h||(s=[])):(s=s||[]).push(w,h))}t&&(s=s||[]).push("style",t);var w=s;(r.updateQueue=w)&&(r.flags|=4)}},$d=function(e,r,t,o){t!==o&&(r.flags|=4)};function no(e,r){if(!Te)switch(e.tailMode){case"hidden":r=e.tail;for(var t=null;r!==null;)r.alternate!==null&&(t=r),r=r.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var o=null;t!==null;)t.alternate!==null&&(o=t),t=t.sibling;o===null?r||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Je(e){var r=e.alternate!==null&&e.alternate.child===e.child,t=0,o=0;if(r)for(var a=e.child;a!==null;)t|=a.lanes|a.childLanes,o|=a.subtreeFlags&14680064,o|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)t|=a.lanes|a.childLanes,o|=a.subtreeFlags,o|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=o,e.childLanes=t,r}function Xf(e,r,t){var o=r.pendingProps;switch(Oa(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(r),null;case 1:return or(r.type)&&Wo(),Je(r),null;case 3:return o=r.stateNode,dn(),Ne(nr),Ne(Ye),Ya(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(qo(r)?r.flags|=4:e===null||e.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Pr!==null&&(Cs(Pr),Pr=null))),xs(e,r),Je(r),null;case 5:qa(r);var a=Lt(Jn.current);if(t=r.type,e!==null&&r.stateNode!=null)Id(e,r,t,o,a),e.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!o){if(r.stateNode===null)throw Error(l(166));return Je(r),null}if(e=Lt(Hr.current),qo(r)){o=r.stateNode,t=r.type;var s=r.memoizedProps;switch(o[Or]=r,o[Gn]=s,e=(r.mode&1)!==0,t){case"dialog":je("cancel",o),je("close",o);break;case"iframe":case"object":case"embed":je("load",o);break;case"video":case"audio":for(a=0;a<Un.length;a++)je(Un[a],o);break;case"source":je("error",o);break;case"img":case"image":case"link":je("error",o),je("load",o);break;case"details":je("toggle",o);break;case"input":hl(o,s),je("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!s.multiple},je("invalid",o);break;case"textarea":gl(o,s),je("invalid",o)}Ki(t,s),a=null;for(var d in s)if(s.hasOwnProperty(d)){var f=s[d];d==="children"?typeof f=="string"?o.textContent!==f&&(s.suppressHydrationWarning!==!0&&Ao(o.textContent,f,e),a=["children",f]):typeof f=="number"&&o.textContent!==""+f&&(s.suppressHydrationWarning!==!0&&Ao(o.textContent,f,e),a=["children",""+f]):u.hasOwnProperty(d)&&f!=null&&d==="onScroll"&&je("scroll",o)}switch(t){case"input":Jr(o),ml(o,s,!0);break;case"textarea":Jr(o),yl(o);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(o.onclick=Fo)}o=a,r.updateQueue=o,o!==null&&(r.flags|=4)}else{d=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=wl(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=d.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=d.createElement(t,{is:o.is}):(e=d.createElement(t),t==="select"&&(d=e,o.multiple?d.multiple=!0:o.size&&(d.size=o.size))):e=d.createElementNS(e,t),e[Or]=r,e[Gn]=o,zd(e,r,!1,!1),r.stateNode=e;e:{switch(d=Yi(t,o),t){case"dialog":je("cancel",e),je("close",e),a=o;break;case"iframe":case"object":case"embed":je("load",e),a=o;break;case"video":case"audio":for(a=0;a<Un.length;a++)je(Un[a],e);a=o;break;case"source":je("error",e),a=o;break;case"img":case"image":case"link":je("error",e),je("load",e),a=o;break;case"details":je("toggle",e),a=o;break;case"input":hl(e,o),a=Ui(e,o),je("invalid",e);break;case"option":a=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},a=I({},o,{value:void 0}),je("invalid",e);break;case"textarea":gl(e,o),a=Gi(e,o),je("invalid",e);break;default:a=o}Ki(t,a),f=a;for(s in f)if(f.hasOwnProperty(s)){var h=f[s];s==="style"?jl(e,h):s==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,h!=null&&bl(e,h)):s==="children"?typeof h=="string"?(t!=="textarea"||h!=="")&&Sn(e,h):typeof h=="number"&&Sn(e,""+h):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(u.hasOwnProperty(s)?h!=null&&s==="onScroll"&&je("scroll",e):h!=null&&oe(e,s,h,d))}switch(t){case"input":Jr(e),ml(e,o,!1);break;case"textarea":Jr(e),yl(e);break;case"option":o.value!=null&&e.setAttribute("value",""+ue(o.value));break;case"select":e.multiple=!!o.multiple,s=o.value,s!=null?Ut(e,!!o.multiple,s,!1):o.defaultValue!=null&&Ut(e,!!o.multiple,o.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Fo)}switch(t){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Je(r),null;case 6:if(e&&r.stateNode!=null)$d(e,r,e.memoizedProps,o);else{if(typeof o!="string"&&r.stateNode===null)throw Error(l(166));if(t=Lt(Jn.current),Lt(Hr.current),qo(r)){if(o=r.stateNode,t=r.memoizedProps,o[Or]=r,(s=o.nodeValue!==t)&&(e=ur,e!==null))switch(e.tag){case 3:Ao(o.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ao(o.nodeValue,t,(e.mode&1)!==0)}s&&(r.flags|=4)}else o=(t.nodeType===9?t:t.ownerDocument).createTextNode(o),o[Or]=r,r.stateNode=o}return Je(r),null;case 13:if(Ne(Pe),o=r.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Te&&pr!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Oc(),an(),r.flags|=98560,s=!1;else if(s=qo(r),o!==null&&o.dehydrated!==null){if(e===null){if(!s)throw Error(l(318));if(s=r.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(l(317));s[Or]=r}else an(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Je(r),s=!1}else Pr!==null&&(Cs(Pr),Pr=null),s=!0;if(!s)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=t,r):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(r.child.flags|=8192,(r.mode&1)!==0&&(e===null||(Pe.current&1)!==0?Fe===0&&(Fe=3):Ps())),r.updateQueue!==null&&(r.flags|=4),Je(r),null);case 4:return dn(),xs(e,r),e===null&&Vn(r.stateNode.containerInfo),Je(r),null;case 10:return Wa(r.type._context),Je(r),null;case 17:return or(r.type)&&Wo(),Je(r),null;case 19:if(Ne(Pe),s=r.memoizedState,s===null)return Je(r),null;if(o=(r.flags&128)!==0,d=s.rendering,d===null)if(o)no(s,!1);else{if(Fe!==0||e!==null&&(e.flags&128)!==0)for(e=r.child;e!==null;){if(d=ei(e),d!==null){for(r.flags|=128,no(s,!1),o=d.updateQueue,o!==null&&(r.updateQueue=o,r.flags|=4),r.subtreeFlags=0,o=t,t=r.child;t!==null;)s=t,e=o,s.flags&=14680066,d=s.alternate,d===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=d.childLanes,s.lanes=d.lanes,s.child=d.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=d.memoizedProps,s.memoizedState=d.memoizedState,s.updateQueue=d.updateQueue,s.type=d.type,e=d.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return ke(Pe,Pe.current&1|2),r.child}e=e.sibling}s.tail!==null&&Re()>hn&&(r.flags|=128,o=!0,no(s,!1),r.lanes=4194304)}else{if(!o)if(e=ei(d),e!==null){if(r.flags|=128,o=!0,t=e.updateQueue,t!==null&&(r.updateQueue=t,r.flags|=4),no(s,!0),s.tail===null&&s.tailMode==="hidden"&&!d.alternate&&!Te)return Je(r),null}else 2*Re()-s.renderingStartTime>hn&&t!==1073741824&&(r.flags|=128,o=!0,no(s,!1),r.lanes=4194304);s.isBackwards?(d.sibling=r.child,r.child=d):(t=s.last,t!==null?t.sibling=d:r.child=d,s.last=d)}return s.tail!==null?(r=s.tail,s.rendering=r,s.tail=r.sibling,s.renderingStartTime=Re(),r.sibling=null,t=Pe.current,ke(Pe,o?t&1|2:t&1),r):(Je(r),null);case 22:case 23:return Es(),o=r.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(r.flags|=8192),o&&(r.mode&1)!==0?(fr&1073741824)!==0&&(Je(r),r.subtreeFlags&6&&(r.flags|=8192)):Je(r),null;case 24:return null;case 25:return null}throw Error(l(156,r.tag))}function Jf(e,r){switch(Oa(r),r.tag){case 1:return or(r.type)&&Wo(),e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 3:return dn(),Ne(nr),Ne(Ye),Ya(),e=r.flags,(e&65536)!==0&&(e&128)===0?(r.flags=e&-65537|128,r):null;case 5:return qa(r),null;case 13:if(Ne(Pe),e=r.memoizedState,e!==null&&e.dehydrated!==null){if(r.alternate===null)throw Error(l(340));an()}return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 19:return Ne(Pe),null;case 4:return dn(),null;case 10:return Wa(r.type._context),null;case 22:case 23:return Es(),null;case 24:return null;default:return null}}var ci=!1,Ze=!1,Zf=typeof WeakSet=="function"?WeakSet:Set,M=null;function pn(e,r){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(o){$e(e,r,o)}else t.current=null}function ms(e,r,t){try{t()}catch(o){$e(e,r,o)}}var Md=!1;function eh(e,r){if(Ea=Po,e=fc(),wa(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var o=t.getSelection&&t.getSelection();if(o&&o.rangeCount!==0){t=o.anchorNode;var a=o.anchorOffset,s=o.focusNode;o=o.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var d=0,f=-1,h=-1,w=0,N=0,S=e,j=null;r:for(;;){for(var $;S!==t||a!==0&&S.nodeType!==3||(f=d+a),S!==s||o!==0&&S.nodeType!==3||(h=d+o),S.nodeType===3&&(d+=S.nodeValue.length),($=S.firstChild)!==null;)j=S,S=$;for(;;){if(S===e)break r;if(j===t&&++w===a&&(f=d),j===s&&++N===o&&(h=d),($=S.nextSibling)!==null)break;S=j,j=S.parentNode}S=$}t=f===-1||h===-1?null:{start:f,end:h}}else t=null}t=t||{start:0,end:0}}else t=null;for(Pa={focusedElem:e,selectionRange:t},Po=!1,M=r;M!==null;)if(r=M,e=r.child,(r.subtreeFlags&1028)!==0&&e!==null)e.return=r,M=e;else for(;M!==null;){r=M;try{var R=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(R!==null){var O=R.memoizedProps,Oe=R.memoizedState,g=r.stateNode,x=g.getSnapshotBeforeUpdate(r.elementType===r.type?O:_r(r.type,O),Oe);g.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var y=r.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(l(163))}}catch(C){$e(r,r.return,C)}if(e=r.sibling,e!==null){e.return=r.return,M=e;break}M=r.return}return R=Md,Md=!1,R}function oo(e,r,t){var o=r.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var a=o=o.next;do{if((a.tag&e)===e){var s=a.destroy;a.destroy=void 0,s!==void 0&&ms(r,t,s)}a=a.next}while(a!==o)}}function di(e,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var t=r=r.next;do{if((t.tag&e)===e){var o=t.create;t.destroy=o()}t=t.next}while(t!==r)}}function gs(e){var r=e.ref;if(r!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof r=="function"?r(e):r.current=e}}function Rd(e){var r=e.alternate;r!==null&&(e.alternate=null,Rd(r)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(r=e.stateNode,r!==null&&(delete r[Or],delete r[Gn],delete r[Ia],delete r[Rf],delete r[Of])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Od(e){return e.tag===5||e.tag===3||e.tag===4}function Hd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Od(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function vs(e,r,t){var o=e.tag;if(o===5||o===6)e=e.stateNode,r?t.nodeType===8?t.parentNode.insertBefore(e,r):t.insertBefore(e,r):(t.nodeType===8?(r=t.parentNode,r.insertBefore(e,t)):(r=t,r.appendChild(e)),t=t._reactRootContainer,t!=null||r.onclick!==null||(r.onclick=Fo));else if(o!==4&&(e=e.child,e!==null))for(vs(e,r,t),e=e.sibling;e!==null;)vs(e,r,t),e=e.sibling}function ys(e,r,t){var o=e.tag;if(o===5||o===6)e=e.stateNode,r?t.insertBefore(e,r):t.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(ys(e,r,t),e=e.sibling;e!==null;)ys(e,r,t),e=e.sibling}var Qe=null,Lr=!1;function ut(e,r,t){for(t=t.child;t!==null;)Bd(e,r,t),t=t.sibling}function Bd(e,r,t){if(Rr&&typeof Rr.onCommitFiberUnmount=="function")try{Rr.onCommitFiberUnmount(jo,t)}catch{}switch(t.tag){case 5:Ze||pn(t,r);case 6:var o=Qe,a=Lr;Qe=null,ut(e,r,t),Qe=o,Lr=a,Qe!==null&&(Lr?(e=Qe,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):Qe.removeChild(t.stateNode));break;case 18:Qe!==null&&(Lr?(e=Qe,t=t.stateNode,e.nodeType===8?za(e.parentNode,t):e.nodeType===1&&za(e,t),Rn(e)):za(Qe,t.stateNode));break;case 4:o=Qe,a=Lr,Qe=t.stateNode.containerInfo,Lr=!0,ut(e,r,t),Qe=o,Lr=a;break;case 0:case 11:case 14:case 15:if(!Ze&&(o=t.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){a=o=o.next;do{var s=a,d=s.destroy;s=s.tag,d!==void 0&&((s&2)!==0||(s&4)!==0)&&ms(t,r,d),a=a.next}while(a!==o)}ut(e,r,t);break;case 1:if(!Ze&&(pn(t,r),o=t.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=t.memoizedProps,o.state=t.memoizedState,o.componentWillUnmount()}catch(f){$e(t,r,f)}ut(e,r,t);break;case 21:ut(e,r,t);break;case 22:t.mode&1?(Ze=(o=Ze)||t.memoizedState!==null,ut(e,r,t),Ze=o):ut(e,r,t);break;default:ut(e,r,t)}}function Ad(e){var r=e.updateQueue;if(r!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Zf),r.forEach(function(o){var a=ch.bind(null,e,o);t.has(o)||(t.add(o),o.then(a,a))})}}function zr(e,r){var t=r.deletions;if(t!==null)for(var o=0;o<t.length;o++){var a=t[o];try{var s=e,d=r,f=d;e:for(;f!==null;){switch(f.tag){case 5:Qe=f.stateNode,Lr=!1;break e;case 3:Qe=f.stateNode.containerInfo,Lr=!0;break e;case 4:Qe=f.stateNode.containerInfo,Lr=!0;break e}f=f.return}if(Qe===null)throw Error(l(160));Bd(s,d,a),Qe=null,Lr=!1;var h=a.alternate;h!==null&&(h.return=null),a.return=null}catch(w){$e(a,r,w)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Fd(r,e),r=r.sibling}function Fd(e,r){var t=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(zr(r,e),Ar(e),o&4){try{oo(3,e,e.return),di(3,e)}catch(O){$e(e,e.return,O)}try{oo(5,e,e.return)}catch(O){$e(e,e.return,O)}}break;case 1:zr(r,e),Ar(e),o&512&&t!==null&&pn(t,t.return);break;case 5:if(zr(r,e),Ar(e),o&512&&t!==null&&pn(t,t.return),e.flags&32){var a=e.stateNode;try{Sn(a,"")}catch(O){$e(e,e.return,O)}}if(o&4&&(a=e.stateNode,a!=null)){var s=e.memoizedProps,d=t!==null?t.memoizedProps:s,f=e.type,h=e.updateQueue;if(e.updateQueue=null,h!==null)try{f==="input"&&s.type==="radio"&&s.name!=null&&xl(a,s),Yi(f,d);var w=Yi(f,s);for(d=0;d<h.length;d+=2){var N=h[d],S=h[d+1];N==="style"?jl(a,S):N==="dangerouslySetInnerHTML"?bl(a,S):N==="children"?Sn(a,S):oe(a,N,S,w)}switch(f){case"input":Vi(a,s);break;case"textarea":vl(a,s);break;case"select":var j=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!s.multiple;var $=s.value;$!=null?Ut(a,!!s.multiple,$,!1):j!==!!s.multiple&&(s.defaultValue!=null?Ut(a,!!s.multiple,s.defaultValue,!0):Ut(a,!!s.multiple,s.multiple?[]:"",!1))}a[Gn]=s}catch(O){$e(e,e.return,O)}}break;case 6:if(zr(r,e),Ar(e),o&4){if(e.stateNode===null)throw Error(l(162));a=e.stateNode,s=e.memoizedProps;try{a.nodeValue=s}catch(O){$e(e,e.return,O)}}break;case 3:if(zr(r,e),Ar(e),o&4&&t!==null&&t.memoizedState.isDehydrated)try{Rn(r.containerInfo)}catch(O){$e(e,e.return,O)}break;case 4:zr(r,e),Ar(e);break;case 13:zr(r,e),Ar(e),a=e.child,a.flags&8192&&(s=a.memoizedState!==null,a.stateNode.isHidden=s,!s||a.alternate!==null&&a.alternate.memoizedState!==null||(ks=Re())),o&4&&Ad(e);break;case 22:if(N=t!==null&&t.memoizedState!==null,e.mode&1?(Ze=(w=Ze)||N,zr(r,e),Ze=w):zr(r,e),Ar(e),o&8192){if(w=e.memoizedState!==null,(e.stateNode.isHidden=w)&&!N&&(e.mode&1)!==0)for(M=e,N=e.child;N!==null;){for(S=M=N;M!==null;){switch(j=M,$=j.child,j.tag){case 0:case 11:case 14:case 15:oo(4,j,j.return);break;case 1:pn(j,j.return);var R=j.stateNode;if(typeof R.componentWillUnmount=="function"){o=j,t=j.return;try{r=o,R.props=r.memoizedProps,R.state=r.memoizedState,R.componentWillUnmount()}catch(O){$e(o,t,O)}}break;case 5:pn(j,j.return);break;case 22:if(j.memoizedState!==null){Ud(S);continue}}$!==null?($.return=j,M=$):Ud(S)}N=N.sibling}e:for(N=null,S=e;;){if(S.tag===5){if(N===null){N=S;try{a=S.stateNode,w?(s=a.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(f=S.stateNode,h=S.memoizedProps.style,d=h!=null&&h.hasOwnProperty("display")?h.display:null,f.style.display=kl("display",d))}catch(O){$e(e,e.return,O)}}}else if(S.tag===6){if(N===null)try{S.stateNode.nodeValue=w?"":S.memoizedProps}catch(O){$e(e,e.return,O)}}else if((S.tag!==22&&S.tag!==23||S.memoizedState===null||S===e)&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===e)break e;for(;S.sibling===null;){if(S.return===null||S.return===e)break e;N===S&&(N=null),S=S.return}N===S&&(N=null),S.sibling.return=S.return,S=S.sibling}}break;case 19:zr(r,e),Ar(e),o&4&&Ad(e);break;case 21:break;default:zr(r,e),Ar(e)}}function Ar(e){var r=e.flags;if(r&2){try{e:{for(var t=e.return;t!==null;){if(Od(t)){var o=t;break e}t=t.return}throw Error(l(160))}switch(o.tag){case 5:var a=o.stateNode;o.flags&32&&(Sn(a,""),o.flags&=-33);var s=Hd(e);ys(e,s,a);break;case 3:case 4:var d=o.stateNode.containerInfo,f=Hd(e);vs(e,f,d);break;default:throw Error(l(161))}}catch(h){$e(e,e.return,h)}e.flags&=-3}r&4096&&(e.flags&=-4097)}function rh(e,r,t){M=e,Dd(e)}function Dd(e,r,t){for(var o=(e.mode&1)!==0;M!==null;){var a=M,s=a.child;if(a.tag===22&&o){var d=a.memoizedState!==null||ci;if(!d){var f=a.alternate,h=f!==null&&f.memoizedState!==null||Ze;f=ci;var w=Ze;if(ci=d,(Ze=h)&&!w)for(M=a;M!==null;)d=M,h=d.child,d.tag===22&&d.memoizedState!==null?Vd(a):h!==null?(h.return=d,M=h):Vd(a);for(;s!==null;)M=s,Dd(s),s=s.sibling;M=a,ci=f,Ze=w}Wd(e)}else(a.subtreeFlags&8772)!==0&&s!==null?(s.return=a,M=s):Wd(e)}}function Wd(e){for(;M!==null;){var r=M;if((r.flags&8772)!==0){var t=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Ze||di(5,r);break;case 1:var o=r.stateNode;if(r.flags&4&&!Ze)if(t===null)o.componentDidMount();else{var a=r.elementType===r.type?t.memoizedProps:_r(r.type,t.memoizedProps);o.componentDidUpdate(a,t.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var s=r.updateQueue;s!==null&&Uc(r,s,o);break;case 3:var d=r.updateQueue;if(d!==null){if(t=null,r.child!==null)switch(r.child.tag){case 5:t=r.child.stateNode;break;case 1:t=r.child.stateNode}Uc(r,d,t)}break;case 5:var f=r.stateNode;if(t===null&&r.flags&4){t=f;var h=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":h.autoFocus&&t.focus();break;case"img":h.src&&(t.src=h.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var w=r.alternate;if(w!==null){var N=w.memoizedState;if(N!==null){var S=N.dehydrated;S!==null&&Rn(S)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(l(163))}Ze||r.flags&512&&gs(r)}catch(j){$e(r,r.return,j)}}if(r===e){M=null;break}if(t=r.sibling,t!==null){t.return=r.return,M=t;break}M=r.return}}function Ud(e){for(;M!==null;){var r=M;if(r===e){M=null;break}var t=r.sibling;if(t!==null){t.return=r.return,M=t;break}M=r.return}}function Vd(e){for(;M!==null;){var r=M;try{switch(r.tag){case 0:case 11:case 15:var t=r.return;try{di(4,r)}catch(h){$e(r,t,h)}break;case 1:var o=r.stateNode;if(typeof o.componentDidMount=="function"){var a=r.return;try{o.componentDidMount()}catch(h){$e(r,a,h)}}var s=r.return;try{gs(r)}catch(h){$e(r,s,h)}break;case 5:var d=r.return;try{gs(r)}catch(h){$e(r,d,h)}}}catch(h){$e(r,r.return,h)}if(r===e){M=null;break}var f=r.sibling;if(f!==null){f.return=r.return,M=f;break}M=r.return}}var th=Math.ceil,ui=z.ReactCurrentDispatcher,ws=z.ReactCurrentOwner,kr=z.ReactCurrentBatchConfig,he=0,Ue=null,He=null,Ge=0,fr=0,fn=at(0),Fe=0,io=null,It=0,pi=0,bs=0,ao=null,ar=null,ks=0,hn=1/0,Kr=null,fi=!1,js=null,pt=null,hi=!1,ft=null,xi=0,so=0,Ns=null,mi=-1,gi=0;function tr(){return(he&6)!==0?Re():mi!==-1?mi:mi=Re()}function ht(e){return(e.mode&1)===0?1:(he&2)!==0&&Ge!==0?Ge&-Ge:Bf.transition!==null?(gi===0&&(gi=Hl()),gi):(e=ye,e!==0||(e=window.event,e=e===void 0?16:Gl(e.type)),e)}function Ir(e,r,t,o){if(50<so)throw so=0,Ns=null,Error(l(185));Ln(e,t,o),((he&2)===0||e!==Ue)&&(e===Ue&&((he&2)===0&&(pi|=t),Fe===4&&xt(e,Ge)),sr(e,o),t===1&&he===0&&(r.mode&1)===0&&(hn=Re()+500,Vo&&lt()))}function sr(e,r){var t=e.callbackNode;Hp(e,r);var o=Co(e,e===Ue?Ge:0);if(o===0)t!==null&&Ml(t),e.callbackNode=null,e.callbackPriority=0;else if(r=o&-o,e.callbackPriority!==r){if(t!=null&&Ml(t),r===1)e.tag===0?Hf(Gd.bind(null,e)):zc(Gd.bind(null,e)),$f(function(){(he&6)===0&&lt()}),t=null;else{switch(Bl(o)){case 1:t=na;break;case 4:t=Rl;break;case 16:t=ko;break;case 536870912:t=Ol;break;default:t=ko}t=ru(t,Qd.bind(null,e))}e.callbackPriority=r,e.callbackNode=t}}function Qd(e,r){if(mi=-1,gi=0,(he&6)!==0)throw Error(l(327));var t=e.callbackNode;if(xn()&&e.callbackNode!==t)return null;var o=Co(e,e===Ue?Ge:0);if(o===0)return null;if((o&30)!==0||(o&e.expiredLanes)!==0||r)r=vi(e,o);else{r=o;var a=he;he|=2;var s=Kd();(Ue!==e||Ge!==r)&&(Kr=null,hn=Re()+500,Mt(e,r));do try{ih();break}catch(f){qd(e,f)}while(!0);Da(),ui.current=s,he=a,He!==null?r=0:(Ue=null,Ge=0,r=Fe)}if(r!==0){if(r===2&&(a=oa(e),a!==0&&(o=a,r=Ss(e,a))),r===1)throw t=io,Mt(e,0),xt(e,o),sr(e,Re()),t;if(r===6)xt(e,o);else{if(a=e.current.alternate,(o&30)===0&&!nh(a)&&(r=vi(e,o),r===2&&(s=oa(e),s!==0&&(o=s,r=Ss(e,s))),r===1))throw t=io,Mt(e,0),xt(e,o),sr(e,Re()),t;switch(e.finishedWork=a,e.finishedLanes=o,r){case 0:case 1:throw Error(l(345));case 2:Rt(e,ar,Kr);break;case 3:if(xt(e,o),(o&130023424)===o&&(r=ks+500-Re(),10<r)){if(Co(e,0)!==0)break;if(a=e.suspendedLanes,(a&o)!==o){tr(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=La(Rt.bind(null,e,ar,Kr),r);break}Rt(e,ar,Kr);break;case 4:if(xt(e,o),(o&4194240)===o)break;for(r=e.eventTimes,a=-1;0<o;){var d=31-Tr(o);s=1<<d,d=r[d],d>a&&(a=d),o&=~s}if(o=a,o=Re()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*th(o/1960))-o,10<o){e.timeoutHandle=La(Rt.bind(null,e,ar,Kr),o);break}Rt(e,ar,Kr);break;case 5:Rt(e,ar,Kr);break;default:throw Error(l(329))}}}return sr(e,Re()),e.callbackNode===t?Qd.bind(null,e):null}function Ss(e,r){var t=ao;return e.current.memoizedState.isDehydrated&&(Mt(e,r).flags|=256),e=vi(e,r),e!==2&&(r=ar,ar=t,r!==null&&Cs(r)),e}function Cs(e){ar===null?ar=e:ar.push.apply(ar,e)}function nh(e){for(var r=e;;){if(r.flags&16384){var t=r.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var o=0;o<t.length;o++){var a=t[o],s=a.getSnapshot;a=a.value;try{if(!Er(s(),a))return!1}catch{return!1}}}if(t=r.child,r.subtreeFlags&16384&&t!==null)t.return=r,r=t;else{if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function xt(e,r){for(r&=~bs,r&=~pi,e.suspendedLanes|=r,e.pingedLanes&=~r,e=e.expirationTimes;0<r;){var t=31-Tr(r),o=1<<t;e[t]=-1,r&=~o}}function Gd(e){if((he&6)!==0)throw Error(l(327));xn();var r=Co(e,0);if((r&1)===0)return sr(e,Re()),null;var t=vi(e,r);if(e.tag!==0&&t===2){var o=oa(e);o!==0&&(r=o,t=Ss(e,o))}if(t===1)throw t=io,Mt(e,0),xt(e,r),sr(e,Re()),t;if(t===6)throw Error(l(345));return e.finishedWork=e.current.alternate,e.finishedLanes=r,Rt(e,ar,Kr),sr(e,Re()),null}function Ts(e,r){var t=he;he|=1;try{return e(r)}finally{he=t,he===0&&(hn=Re()+500,Vo&&lt())}}function $t(e){ft!==null&&ft.tag===0&&(he&6)===0&&xn();var r=he;he|=1;var t=kr.transition,o=ye;try{if(kr.transition=null,ye=1,e)return e()}finally{ye=o,kr.transition=t,he=r,(he&6)===0&&lt()}}function Es(){fr=fn.current,Ne(fn)}function Mt(e,r){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,If(t)),He!==null)for(t=He.return;t!==null;){var o=t;switch(Oa(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&Wo();break;case 3:dn(),Ne(nr),Ne(Ye),Ya();break;case 5:qa(o);break;case 4:dn();break;case 13:Ne(Pe);break;case 19:Ne(Pe);break;case 10:Wa(o.type._context);break;case 22:case 23:Es()}t=t.return}if(Ue=e,He=e=mt(e.current,null),Ge=fr=r,Fe=0,io=null,bs=pi=It=0,ar=ao=null,_t!==null){for(r=0;r<_t.length;r++)if(t=_t[r],o=t.interleaved,o!==null){t.interleaved=null;var a=o.next,s=t.pending;if(s!==null){var d=s.next;s.next=a,o.next=d}t.pending=o}_t=null}return e}function qd(e,r){do{var t=He;try{if(Da(),ri.current=ii,ti){for(var o=_e.memoizedState;o!==null;){var a=o.queue;a!==null&&(a.pending=null),o=o.next}ti=!1}if(zt=0,We=Ae=_e=null,Zn=!1,eo=0,ws.current=null,t===null||t.return===null){Fe=1,io=r,He=null;break}e:{var s=e,d=t.return,f=t,h=r;if(r=Ge,f.flags|=32768,h!==null&&typeof h=="object"&&typeof h.then=="function"){var w=h,N=f,S=N.tag;if((N.mode&1)===0&&(S===0||S===11||S===15)){var j=N.alternate;j?(N.updateQueue=j.updateQueue,N.memoizedState=j.memoizedState,N.lanes=j.lanes):(N.updateQueue=null,N.memoizedState=null)}var $=yd(d);if($!==null){$.flags&=-257,wd($,d,f,s,r),$.mode&1&&vd(s,w,r),r=$,h=w;var R=r.updateQueue;if(R===null){var O=new Set;O.add(h),r.updateQueue=O}else R.add(h);break e}else{if((r&1)===0){vd(s,w,r),Ps();break e}h=Error(l(426))}}else if(Te&&f.mode&1){var Oe=yd(d);if(Oe!==null){(Oe.flags&65536)===0&&(Oe.flags|=256),wd(Oe,d,f,s,r),Aa(un(h,f));break e}}s=h=un(h,f),Fe!==4&&(Fe=2),ao===null?ao=[s]:ao.push(s),s=d;do{switch(s.tag){case 3:s.flags|=65536,r&=-r,s.lanes|=r;var g=md(s,h,r);Wc(s,g);break e;case 1:f=h;var x=s.type,y=s.stateNode;if((s.flags&128)===0&&(typeof x.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(pt===null||!pt.has(y)))){s.flags|=65536,r&=-r,s.lanes|=r;var C=gd(s,f,r);Wc(s,C);break e}}s=s.return}while(s!==null)}Xd(t)}catch(B){r=B,He===t&&t!==null&&(He=t=t.return);continue}break}while(!0)}function Kd(){var e=ui.current;return ui.current=ii,e===null?ii:e}function Ps(){(Fe===0||Fe===3||Fe===2)&&(Fe=4),Ue===null||(It&268435455)===0&&(pi&268435455)===0||xt(Ue,Ge)}function vi(e,r){var t=he;he|=2;var o=Kd();(Ue!==e||Ge!==r)&&(Kr=null,Mt(e,r));do try{oh();break}catch(a){qd(e,a)}while(!0);if(Da(),he=t,ui.current=o,He!==null)throw Error(l(261));return Ue=null,Ge=0,Fe}function oh(){for(;He!==null;)Yd(He)}function ih(){for(;He!==null&&!Pp();)Yd(He)}function Yd(e){var r=eu(e.alternate,e,fr);e.memoizedProps=e.pendingProps,r===null?Xd(e):He=r,ws.current=null}function Xd(e){var r=e;do{var t=r.alternate;if(e=r.return,(r.flags&32768)===0){if(t=Xf(t,r,fr),t!==null){He=t;return}}else{if(t=Jf(t,r),t!==null){t.flags&=32767,He=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Fe=6,He=null;return}}if(r=r.sibling,r!==null){He=r;return}He=r=e}while(r!==null);Fe===0&&(Fe=5)}function Rt(e,r,t){var o=ye,a=kr.transition;try{kr.transition=null,ye=1,ah(e,r,t,o)}finally{kr.transition=a,ye=o}return null}function ah(e,r,t,o){do xn();while(ft!==null);if((he&6)!==0)throw Error(l(327));t=e.finishedWork;var a=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(l(177));e.callbackNode=null,e.callbackPriority=0;var s=t.lanes|t.childLanes;if(Bp(e,s),e===Ue&&(He=Ue=null,Ge=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||hi||(hi=!0,ru(ko,function(){return xn(),null})),s=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||s){s=kr.transition,kr.transition=null;var d=ye;ye=1;var f=he;he|=4,ws.current=null,eh(e,t),Fd(t,e),Cf(Pa),Po=!!Ea,Pa=Ea=null,e.current=t,rh(t),_p(),he=f,ye=d,kr.transition=s}else e.current=t;if(hi&&(hi=!1,ft=e,xi=a),s=e.pendingLanes,s===0&&(pt=null),Ip(t.stateNode),sr(e,Re()),r!==null)for(o=e.onRecoverableError,t=0;t<r.length;t++)a=r[t],o(a.value,{componentStack:a.stack,digest:a.digest});if(fi)throw fi=!1,e=js,js=null,e;return(xi&1)!==0&&e.tag!==0&&xn(),s=e.pendingLanes,(s&1)!==0?e===Ns?so++:(so=0,Ns=e):so=0,lt(),null}function xn(){if(ft!==null){var e=Bl(xi),r=kr.transition,t=ye;try{if(kr.transition=null,ye=16>e?16:e,ft===null)var o=!1;else{if(e=ft,ft=null,xi=0,(he&6)!==0)throw Error(l(331));var a=he;for(he|=4,M=e.current;M!==null;){var s=M,d=s.child;if((M.flags&16)!==0){var f=s.deletions;if(f!==null){for(var h=0;h<f.length;h++){var w=f[h];for(M=w;M!==null;){var N=M;switch(N.tag){case 0:case 11:case 15:oo(8,N,s)}var S=N.child;if(S!==null)S.return=N,M=S;else for(;M!==null;){N=M;var j=N.sibling,$=N.return;if(Rd(N),N===w){M=null;break}if(j!==null){j.return=$,M=j;break}M=$}}}var R=s.alternate;if(R!==null){var O=R.child;if(O!==null){R.child=null;do{var Oe=O.sibling;O.sibling=null,O=Oe}while(O!==null)}}M=s}}if((s.subtreeFlags&2064)!==0&&d!==null)d.return=s,M=d;else e:for(;M!==null;){if(s=M,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:oo(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,M=g;break e}M=s.return}}var x=e.current;for(M=x;M!==null;){d=M;var y=d.child;if((d.subtreeFlags&2064)!==0&&y!==null)y.return=d,M=y;else e:for(d=x;M!==null;){if(f=M,(f.flags&2048)!==0)try{switch(f.tag){case 0:case 11:case 15:di(9,f)}}catch(B){$e(f,f.return,B)}if(f===d){M=null;break e}var C=f.sibling;if(C!==null){C.return=f.return,M=C;break e}M=f.return}}if(he=a,lt(),Rr&&typeof Rr.onPostCommitFiberRoot=="function")try{Rr.onPostCommitFiberRoot(jo,e)}catch{}o=!0}return o}finally{ye=t,kr.transition=r}}return!1}function Jd(e,r,t){r=un(t,r),r=md(e,r,1),e=dt(e,r,1),r=tr(),e!==null&&(Ln(e,1,r),sr(e,r))}function $e(e,r,t){if(e.tag===3)Jd(e,e,t);else for(;r!==null;){if(r.tag===3){Jd(r,e,t);break}else if(r.tag===1){var o=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(pt===null||!pt.has(o))){e=un(t,e),e=gd(r,e,1),r=dt(r,e,1),e=tr(),r!==null&&(Ln(r,1,e),sr(r,e));break}}r=r.return}}function sh(e,r,t){var o=e.pingCache;o!==null&&o.delete(r),r=tr(),e.pingedLanes|=e.suspendedLanes&t,Ue===e&&(Ge&t)===t&&(Fe===4||Fe===3&&(Ge&130023424)===Ge&&500>Re()-ks?Mt(e,0):bs|=t),sr(e,r)}function Zd(e,r){r===0&&((e.mode&1)===0?r=1:(r=So,So<<=1,(So&130023424)===0&&(So=4194304)));var t=tr();e=Qr(e,r),e!==null&&(Ln(e,r,t),sr(e,t))}function lh(e){var r=e.memoizedState,t=0;r!==null&&(t=r.retryLane),Zd(e,t)}function ch(e,r){var t=0;switch(e.tag){case 13:var o=e.stateNode,a=e.memoizedState;a!==null&&(t=a.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(l(314))}o!==null&&o.delete(r),Zd(e,t)}var eu;eu=function(e,r,t){if(e!==null)if(e.memoizedProps!==r.pendingProps||nr.current)ir=!0;else{if((e.lanes&t)===0&&(r.flags&128)===0)return ir=!1,Yf(e,r,t);ir=(e.flags&131072)!==0}else ir=!1,Te&&(r.flags&1048576)!==0&&Ic(r,Go,r.index);switch(r.lanes=0,r.tag){case 2:var o=r.type;li(e,r),e=r.pendingProps;var a=tn(r,Ye.current);cn(r,t),a=Za(null,r,o,e,a,t);var s=es();return r.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,or(o)?(s=!0,Uo(r)):s=!1,r.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Qa(r),a.updater=ai,r.stateNode=a,a._reactInternals=r,as(r,o,e,t),r=ds(null,r,o,!0,s,t)):(r.tag=0,Te&&s&&Ra(r),rr(null,r,a,t),r=r.child),r;case 16:o=r.elementType;e:{switch(li(e,r),e=r.pendingProps,a=o._init,o=a(o._payload),r.type=o,a=r.tag=uh(o),e=_r(o,e),a){case 0:r=cs(null,r,o,e,t);break e;case 1:r=Cd(null,r,o,e,t);break e;case 11:r=bd(null,r,o,e,t);break e;case 14:r=kd(null,r,o,_r(o.type,e),t);break e}throw Error(l(306,o,""))}return r;case 0:return o=r.type,a=r.pendingProps,a=r.elementType===o?a:_r(o,a),cs(e,r,o,a,t);case 1:return o=r.type,a=r.pendingProps,a=r.elementType===o?a:_r(o,a),Cd(e,r,o,a,t);case 3:e:{if(Td(r),e===null)throw Error(l(387));o=r.pendingProps,s=r.memoizedState,a=s.element,Dc(e,r),Zo(r,o,null,t);var d=r.memoizedState;if(o=d.element,s.isDehydrated)if(s={element:o,isDehydrated:!1,cache:d.cache,pendingSuspenseBoundaries:d.pendingSuspenseBoundaries,transitions:d.transitions},r.updateQueue.baseState=s,r.memoizedState=s,r.flags&256){a=un(Error(l(423)),r),r=Ed(e,r,o,t,a);break e}else if(o!==a){a=un(Error(l(424)),r),r=Ed(e,r,o,t,a);break e}else for(pr=it(r.stateNode.containerInfo.firstChild),ur=r,Te=!0,Pr=null,t=Ac(r,null,o,t),r.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(an(),o===a){r=qr(e,r,t);break e}rr(e,r,o,t)}r=r.child}return r;case 5:return Vc(r),e===null&&Ba(r),o=r.type,a=r.pendingProps,s=e!==null?e.memoizedProps:null,d=a.children,_a(o,a)?d=null:s!==null&&_a(o,s)&&(r.flags|=32),Sd(e,r),rr(e,r,d,t),r.child;case 6:return e===null&&Ba(r),null;case 13:return Pd(e,r,t);case 4:return Ga(r,r.stateNode.containerInfo),o=r.pendingProps,e===null?r.child=sn(r,null,o,t):rr(e,r,o,t),r.child;case 11:return o=r.type,a=r.pendingProps,a=r.elementType===o?a:_r(o,a),bd(e,r,o,a,t);case 7:return rr(e,r,r.pendingProps,t),r.child;case 8:return rr(e,r,r.pendingProps.children,t),r.child;case 12:return rr(e,r,r.pendingProps.children,t),r.child;case 10:e:{if(o=r.type._context,a=r.pendingProps,s=r.memoizedProps,d=a.value,ke(Yo,o._currentValue),o._currentValue=d,s!==null)if(Er(s.value,d)){if(s.children===a.children&&!nr.current){r=qr(e,r,t);break e}}else for(s=r.child,s!==null&&(s.return=r);s!==null;){var f=s.dependencies;if(f!==null){d=s.child;for(var h=f.firstContext;h!==null;){if(h.context===o){if(s.tag===1){h=Gr(-1,t&-t),h.tag=2;var w=s.updateQueue;if(w!==null){w=w.shared;var N=w.pending;N===null?h.next=h:(h.next=N.next,N.next=h),w.pending=h}}s.lanes|=t,h=s.alternate,h!==null&&(h.lanes|=t),Ua(s.return,t,r),f.lanes|=t;break}h=h.next}}else if(s.tag===10)d=s.type===r.type?null:s.child;else if(s.tag===18){if(d=s.return,d===null)throw Error(l(341));d.lanes|=t,f=d.alternate,f!==null&&(f.lanes|=t),Ua(d,t,r),d=s.sibling}else d=s.child;if(d!==null)d.return=s;else for(d=s;d!==null;){if(d===r){d=null;break}if(s=d.sibling,s!==null){s.return=d.return,d=s;break}d=d.return}s=d}rr(e,r,a.children,t),r=r.child}return r;case 9:return a=r.type,o=r.pendingProps.children,cn(r,t),a=wr(a),o=o(a),r.flags|=1,rr(e,r,o,t),r.child;case 14:return o=r.type,a=_r(o,r.pendingProps),a=_r(o.type,a),kd(e,r,o,a,t);case 15:return jd(e,r,r.type,r.pendingProps,t);case 17:return o=r.type,a=r.pendingProps,a=r.elementType===o?a:_r(o,a),li(e,r),r.tag=1,or(o)?(e=!0,Uo(r)):e=!1,cn(r,t),hd(r,o,a),as(r,o,a,t),ds(null,r,o,!0,e,t);case 19:return Ld(e,r,t);case 22:return Nd(e,r,t)}throw Error(l(156,r.tag))};function ru(e,r){return $l(e,r)}function dh(e,r,t,o){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jr(e,r,t,o){return new dh(e,r,t,o)}function _s(e){return e=e.prototype,!(!e||!e.isReactComponent)}function uh(e){if(typeof e=="function")return _s(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ie)return 11;if(e===er)return 14}return 2}function mt(e,r){var t=e.alternate;return t===null?(t=jr(e.tag,r,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=r,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,r=e.dependencies,t.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function yi(e,r,t,o,a,s){var d=2;if(o=e,typeof e=="function")_s(e)&&(d=1);else if(typeof e=="string")d=5;else e:switch(e){case P:return Ot(t.children,a,s,r);case H:d=8,a|=8;break;case we:return e=jr(12,t,r,a|2),e.elementType=we,e.lanes=s,e;case Ce:return e=jr(13,t,r,a),e.elementType=Ce,e.lanes=s,e;case qe:return e=jr(19,t,r,a),e.elementType=qe,e.lanes=s,e;case be:return wi(t,a,s,r);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Me:d=10;break e;case se:d=9;break e;case Ie:d=11;break e;case er:d=14;break e;case Ke:d=16,o=null;break e}throw Error(l(130,e==null?e:typeof e,""))}return r=jr(d,t,r,a),r.elementType=e,r.type=o,r.lanes=s,r}function Ot(e,r,t,o){return e=jr(7,e,o,r),e.lanes=t,e}function wi(e,r,t,o){return e=jr(22,e,o,r),e.elementType=be,e.lanes=t,e.stateNode={isHidden:!1},e}function Ls(e,r,t){return e=jr(6,e,null,r),e.lanes=t,e}function zs(e,r,t){return r=jr(4,e.children!==null?e.children:[],e.key,r),r.lanes=t,r.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},r}function ph(e,r,t,o,a){this.tag=r,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ia(0),this.expirationTimes=ia(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ia(0),this.identifierPrefix=o,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Is(e,r,t,o,a,s,d,f,h){return e=new ph(e,r,t,f,h),r===1?(r=1,s===!0&&(r|=8)):r=0,s=jr(3,null,null,r),e.current=s,s.stateNode=e,s.memoizedState={element:o,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Qa(s),e}function fh(e,r,t){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:W,key:o==null?null:""+o,children:e,containerInfo:r,implementation:t}}function tu(e){if(!e)return st;e=e._reactInternals;e:{if(St(e)!==e||e.tag!==1)throw Error(l(170));var r=e;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(or(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(l(171))}if(e.tag===1){var t=e.type;if(or(t))return _c(e,t,r)}return r}function nu(e,r,t,o,a,s,d,f,h){return e=Is(t,o,!0,e,a,s,d,f,h),e.context=tu(null),t=e.current,o=tr(),a=ht(t),s=Gr(o,a),s.callback=r!=null?r:null,dt(t,s,a),e.current.lanes=a,Ln(e,a,o),sr(e,o),e}function bi(e,r,t,o){var a=r.current,s=tr(),d=ht(a);return t=tu(t),r.context===null?r.context=t:r.pendingContext=t,r=Gr(s,d),r.payload={element:e},o=o===void 0?null:o,o!==null&&(r.callback=o),e=dt(a,r,d),e!==null&&(Ir(e,a,d,s),Jo(e,a,d)),d}function ki(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ou(e,r){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<r?t:r}}function $s(e,r){ou(e,r),(e=e.alternate)&&ou(e,r)}function hh(){return null}var iu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ms(e){this._internalRoot=e}ji.prototype.render=Ms.prototype.render=function(e){var r=this._internalRoot;if(r===null)throw Error(l(409));bi(e,r,null,null)},ji.prototype.unmount=Ms.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var r=e.containerInfo;$t(function(){bi(null,e,null,null)}),r[Dr]=null}};function ji(e){this._internalRoot=e}ji.prototype.unstable_scheduleHydration=function(e){if(e){var r=Dl();e={blockedOn:null,target:e,priority:r};for(var t=0;t<tt.length&&r!==0&&r<tt[t].priority;t++);tt.splice(t,0,e),t===0&&Vl(e)}};function Rs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ni(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function au(){}function xh(e,r,t,o,a){if(a){if(typeof o=="function"){var s=o;o=function(){var w=ki(d);s.call(w)}}var d=nu(r,o,e,0,null,!1,!1,"",au);return e._reactRootContainer=d,e[Dr]=d.current,Vn(e.nodeType===8?e.parentNode:e),$t(),d}for(;a=e.lastChild;)e.removeChild(a);if(typeof o=="function"){var f=o;o=function(){var w=ki(h);f.call(w)}}var h=Is(e,0,!1,null,null,!1,!1,"",au);return e._reactRootContainer=h,e[Dr]=h.current,Vn(e.nodeType===8?e.parentNode:e),$t(function(){bi(r,h,t,o)}),h}function Si(e,r,t,o,a){var s=t._reactRootContainer;if(s){var d=s;if(typeof a=="function"){var f=a;a=function(){var h=ki(d);f.call(h)}}bi(r,d,e,a)}else d=xh(t,r,e,a,o);return ki(d)}Al=function(e){switch(e.tag){case 3:var r=e.stateNode;if(r.current.memoizedState.isDehydrated){var t=_n(r.pendingLanes);t!==0&&(aa(r,t|1),sr(r,Re()),(he&6)===0&&(hn=Re()+500,lt()))}break;case 13:$t(function(){var o=Qr(e,1);if(o!==null){var a=tr();Ir(o,e,1,a)}}),$s(e,1)}},sa=function(e){if(e.tag===13){var r=Qr(e,134217728);if(r!==null){var t=tr();Ir(r,e,134217728,t)}$s(e,134217728)}},Fl=function(e){if(e.tag===13){var r=ht(e),t=Qr(e,r);if(t!==null){var o=tr();Ir(t,e,r,o)}$s(e,r)}},Dl=function(){return ye},Wl=function(e,r){var t=ye;try{return ye=e,r()}finally{ye=t}},Zi=function(e,r,t){switch(r){case"input":if(Vi(e,t),r=t.name,t.type==="radio"&&r!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<t.length;r++){var o=t[r];if(o!==e&&o.form===e.form){var a=Do(o);if(!a)throw Error(l(90));Nt(o),Vi(o,a)}}}break;case"textarea":vl(e,t);break;case"select":r=t.value,r!=null&&Ut(e,!!t.multiple,r,!1)}},Tl=Ts,El=$t;var mh={usingClientEntryPoint:!1,Events:[qn,en,Do,Sl,Cl,Ts]},lo={findFiberByHostInstance:Ct,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},gh={bundleType:lo.bundleType,version:lo.version,rendererPackageName:lo.rendererPackageName,rendererConfig:lo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:z.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=zl(e),e===null?null:e.stateNode},findFiberByHostInstance:lo.findFiberByHostInstance||hh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var Ci=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ci.isDisabled&&Ci.supportsFiber)try{jo=Ci.inject(gh),Rr=Ci}catch{}}return lr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mh,lr.createPortal=function(e,r){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Rs(r))throw Error(l(200));return fh(e,r,null,t)},lr.createRoot=function(e,r){if(!Rs(e))throw Error(l(299));var t=!1,o="",a=iu;return r!=null&&(r.unstable_strictMode===!0&&(t=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(a=r.onRecoverableError)),r=Is(e,1,!1,null,null,t,!1,o,a),e[Dr]=r.current,Vn(e.nodeType===8?e.parentNode:e),new Ms(r)},lr.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var r=e._reactInternals;if(r===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=zl(r),e=e===null?null:e.stateNode,e},lr.flushSync=function(e){return $t(e)},lr.hydrate=function(e,r,t){if(!Ni(r))throw Error(l(200));return Si(null,e,r,!0,t)},lr.hydrateRoot=function(e,r,t){if(!Rs(e))throw Error(l(405));var o=t!=null&&t.hydratedSources||null,a=!1,s="",d=iu;if(t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(d=t.onRecoverableError)),r=nu(r,null,e,1,t!=null?t:null,a,!1,s,d),e[Dr]=r.current,Vn(e),o)for(e=0;e<o.length;e++)t=o[e],a=t._getVersion,a=a(t._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[t,a]:r.mutableSourceEagerHydrationData.push(t,a);return new ji(r)},lr.render=function(e,r,t){if(!Ni(r))throw Error(l(200));return Si(null,e,r,!1,t)},lr.unmountComponentAtNode=function(e){if(!Ni(e))throw Error(l(40));return e._reactRootContainer?($t(function(){Si(null,null,e,!1,function(){e._reactRootContainer=null,e[Dr]=null})}),!0):!1},lr.unstable_batchedUpdates=Ts,lr.unstable_renderSubtreeIntoContainer=function(e,r,t,o){if(!Ni(t))throw Error(l(200));if(e==null||e._reactInternals===void 0)throw Error(l(38));return Si(e,r,t,!1,o)},lr.version="18.3.1-next-f1338f8080-20240426",lr}var hu;function Ch(){if(hu)return Bs.exports;hu=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(c){console.error(c)}}return i(),Bs.exports=Sh(),Bs.exports}var xu;function Th(){if(xu)return Ti;xu=1;var i=Ch();return Ti.createRoot=i.createRoot,Ti.hydrateRoot=i.hydrateRoot,Ti}var Eh=Th(),cr=function(){return cr=Object.assign||function(c){for(var l,p=1,u=arguments.length;p<u;p++){l=arguments[p];for(var v in l)Object.prototype.hasOwnProperty.call(l,v)&&(c[v]=l[v])}return c},cr.apply(this,arguments)};function Ii(i,c,l){if(l||arguments.length===2)for(var p=0,u=c.length,v;p<u;p++)(v||!(p in c))&&(v||(v=Array.prototype.slice.call(c,0,p)),v[p]=c[p]);return i.concat(v||Array.prototype.slice.call(c))}var Q=ol();const xr=yh(Q);var Se="-ms-",fo="-moz-",me="-webkit-",Bu="comm",Bi="rule",il="decl",Ph="@import",_h="@namespace",Au="@keyframes",Lh="@layer",Fu=Math.abs,al=String.fromCharCode,Ks=Object.assign;function zh(i,c){return De(i,0)^45?(((c<<2^De(i,0))<<2^De(i,1))<<2^De(i,2))<<2^De(i,3):0}function Du(i){return i.trim()}function Yr(i,c){return(i=c.exec(i))?i[0]:i}function te(i,c,l){return i.replace(c,l)}function Ei(i,c,l){return i.indexOf(c,l)}function De(i,c){return i.charCodeAt(c)|0}function Wt(i,c,l){return i.slice(c,l)}function $r(i){return i.length}function Wu(i){return i.length}function uo(i,c){return c.push(i),i}function Ih(i,c){return i.map(c).join("")}function mu(i,c){return i.filter(function(l){return!Yr(l,c)})}var Ai=1,vn=1,Uu=0,Sr=0,Be=0,jn="";function Fi(i,c,l,p,u,v,b,L){return{value:i,root:c,parent:l,type:p,props:u,children:v,line:Ai,column:vn,length:b,return:"",siblings:L}}function vt(i,c){return Ks(Fi("",null,null,"",null,null,0,i.siblings),i,{length:-i.length},c)}function mn(i){for(;i.root;)i=vt(i.root,{children:[i]});uo(i,i.siblings)}function $h(){return Be}function Mh(){return Be=Sr>0?De(jn,--Sr):0,vn--,Be===10&&(vn=1,Ai--),Be}function Mr(){return Be=Sr<Uu?De(jn,Sr++):0,vn++,Be===10&&(vn=1,Ai++),Be}function yt(){return De(jn,Sr)}function Pi(){return Sr}function Di(i,c){return Wt(jn,i,c)}function mo(i){switch(i){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Rh(i){return Ai=vn=1,Uu=$r(jn=i),Sr=0,[]}function Oh(i){return jn="",i}function Ds(i){return Du(Di(Sr-1,Ys(i===91?i+2:i===40?i+1:i)))}function Hh(i){for(;(Be=yt())&&Be<33;)Mr();return mo(i)>2||mo(Be)>3?"":" "}function Bh(i,c){for(;--c&&Mr()&&!(Be<48||Be>102||Be>57&&Be<65||Be>70&&Be<97););return Di(i,Pi()+(c<6&&yt()==32&&Mr()==32))}function Ys(i){for(;Mr();)switch(Be){case i:return Sr;case 34:case 39:i!==34&&i!==39&&Ys(Be);break;case 40:i===41&&Ys(i);break;case 92:Mr();break}return Sr}function Ah(i,c){for(;Mr()&&i+Be!==57;)if(i+Be===84&&yt()===47)break;return"/*"+Di(c,Sr-1)+"*"+al(i===47?i:Mr())}function Fh(i){for(;!mo(yt());)Mr();return Di(i,Sr)}function Dh(i){return Oh(_i("",null,null,null,[""],i=Rh(i),0,[0],i))}function _i(i,c,l,p,u,v,b,L,T){for(var Y=0,G=0,F=b,Z=0,ce=0,X=0,D=1,q=1,ge=1,pe=0,oe="",z=u,J=v,W=p,P=oe;q;)switch(X=pe,pe=Mr()){case 40:if(X!=108&&De(P,F-1)==58){Ei(P+=te(Ds(pe),"&","&\f"),"&\f",Fu(Y?L[Y-1]:0))!=-1&&(ge=-1);break}case 34:case 39:case 91:P+=Ds(pe);break;case 9:case 10:case 13:case 32:P+=Hh(X);break;case 92:P+=Bh(Pi()-1,7);continue;case 47:switch(yt()){case 42:case 47:uo(Wh(Ah(Mr(),Pi()),c,l,T),T),(mo(X||1)==5||mo(yt()||1)==5)&&$r(P)&&Wt(P,-1,void 0)!==" "&&(P+=" ");break;default:P+="/"}break;case 123*D:L[Y++]=$r(P)*ge;case 125*D:case 59:case 0:switch(pe){case 0:case 125:q=0;case 59+G:ge==-1&&(P=te(P,/\f/g,"")),ce>0&&($r(P)-F||D===0&&X===47)&&uo(ce>32?vu(P+";",p,l,F-1,T):vu(te(P," ","")+";",p,l,F-2,T),T);break;case 59:P+=";";default:if(uo(W=gu(P,c,l,Y,G,u,L,oe,z=[],J=[],F,v),v),pe===123)if(G===0)_i(P,c,W,W,z,v,F,L,J);else{switch(Z){case 99:if(De(P,3)===110)break;case 108:if(De(P,2)===97)break;default:G=0;case 100:case 109:case 115:}G?_i(i,W,W,p&&uo(gu(i,W,W,0,0,u,L,oe,u,z=[],F,J),J),u,J,F,L,p?z:J):_i(P,W,W,W,[""],J,0,L,J)}}Y=G=ce=0,D=ge=1,oe=P="",F=b;break;case 58:F=1+$r(P),ce=X;default:if(D<1){if(pe==123)--D;else if(pe==125&&D++==0&&Mh()==125)continue}switch(P+=al(pe),pe*D){case 38:ge=G>0?1:(P+="\f",-1);break;case 44:L[Y++]=($r(P)-1)*ge,ge=1;break;case 64:yt()===45&&(P+=Ds(Mr())),Z=yt(),G=F=$r(oe=P+=Fh(Pi())),pe++;break;case 45:X===45&&$r(P)==2&&(D=0)}}return v}function gu(i,c,l,p,u,v,b,L,T,Y,G,F){for(var Z=u-1,ce=u===0?v:[""],X=Wu(ce),D=0,q=0,ge=0;D<p;++D)for(var pe=0,oe=Wt(i,Z+1,Z=Fu(q=b[D])),z=i;pe<X;++pe)(z=Du(q>0?ce[pe]+" "+oe:te(oe,/&\f/g,ce[pe])))&&(T[ge++]=z);return Fi(i,c,l,u===0?Bi:L,T,Y,G,F)}function Wh(i,c,l,p){return Fi(i,c,l,Bu,al($h()),Wt(i,2,-2),0,p)}function vu(i,c,l,p,u){return Fi(i,c,l,il,Wt(i,0,p),Wt(i,p+1,-1),p,u)}function Vu(i,c,l){switch(zh(i,c)){case 5103:return me+"print-"+i+i;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return me+i+i;case 4855:return me+i.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+i;case 4789:return fo+i+i;case 5349:case 4246:case 4810:case 6968:case 2756:return me+i+fo+i+Se+i+i;case 5936:switch(De(i,c+11)){case 114:return me+i+Se+te(i,/[svh]\w+-[tblr]{2}/,"tb")+i;case 108:return me+i+Se+te(i,/[svh]\w+-[tblr]{2}/,"tb-rl")+i;case 45:return me+i+Se+te(i,/[svh]\w+-[tblr]{2}/,"lr")+i}case 6828:case 4268:case 2903:return me+i+Se+i+i;case 6165:return me+i+Se+"flex-"+i+i;case 5187:return me+i+te(i,/(\w+).+(:[^]+)/,me+"box-$1$2"+Se+"flex-$1$2")+i;case 5443:return me+i+Se+"flex-item-"+te(i,/flex-|-self/g,"")+(Yr(i,/flex-|baseline/)?"":Se+"grid-row-"+te(i,/flex-|-self/g,""))+i;case 4675:return me+i+Se+"flex-line-pack"+te(i,/align-content|flex-|-self/g,"")+i;case 5548:return me+i+Se+te(i,"shrink","negative")+i;case 5292:return me+i+Se+te(i,"basis","preferred-size")+i;case 6060:return me+"box-"+te(i,"-grow","")+me+i+Se+te(i,"grow","positive")+i;case 4554:return me+te(i,/([^-])(transform)/g,"$1"+me+"$2")+i;case 6187:return te(te(te(i,/(zoom-|grab)/,me+"$1"),/(image-set)/,me+"$1"),i,"")+i;case 5495:case 3959:return te(i,/(image-set\([^]*)/,me+"$1$`$1");case 4968:return te(te(i,/(.+:)(flex-)?(.*)/,me+"box-pack:$3"+Se+"flex-pack:$3"),/space-between/,"justify")+me+i+i;case 4200:if(!Yr(i,/flex-|baseline/))return Se+"grid-column-align"+Wt(i,c)+i;break;case 2592:case 3360:return Se+te(i,"template-","")+i;case 4384:case 3616:return l&&l.some(function(p,u){return c=u,Yr(p.props,/grid-\w+-end/)})?~Ei(i+(l=l[c].value),"span",0)?i:Se+te(i,"-start","")+i+Se+"grid-row-span:"+(~Ei(l,"span",0)?Yr(l,/\d+/):+Yr(l,/\d+/)-+Yr(i,/\d+/))+";":Se+te(i,"-start","")+i;case 4896:case 4128:return l&&l.some(function(p){return Yr(p.props,/grid-\w+-start/)})?i:Se+te(te(i,"-end","-span"),"span ","")+i;case 4095:case 3583:case 4068:case 2532:return te(i,/(.+)-inline(.+)/,me+"$1$2")+i;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if($r(i)-1-c>6)switch(De(i,c+1)){case 109:if(De(i,c+4)!==45)break;case 102:return te(i,/(.+:)(.+)-([^]+)/,"$1"+me+"$2-$3$1"+fo+(De(i,c+3)==108?"$3":"$2-$3"))+i;case 115:return~Ei(i,"stretch",0)?Vu(te(i,"stretch","fill-available"),c,l)+i:i}break;case 5152:case 5920:return te(i,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(p,u,v,b,L,T,Y){return Se+u+":"+v+Y+(b?Se+u+"-span:"+(L?T:+T-+v)+Y:"")+i});case 4949:if(De(i,c+6)===121)return te(i,":",":"+me)+i;break;case 6444:switch(De(i,De(i,14)===45?18:11)){case 120:return te(i,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+me+(De(i,14)===45?"inline-":"")+"box$3$1"+me+"$2$3$1"+Se+"$2box$3")+i;case 100:return te(i,":",":"+Se)+i}break;case 5719:case 2647:case 2135:case 3927:case 2391:return te(i,"scroll-","scroll-snap-")+i}return i}function $i(i,c){for(var l="",p=0;p<i.length;p++)l+=c(i[p],p,i,c)||"";return l}function Uh(i,c,l,p){switch(i.type){case Lh:if(i.children.length)break;case Ph:case _h:case il:return i.return=i.return||i.value;case Bu:return"";case Au:return i.return=i.value+"{"+$i(i.children,p)+"}";case Bi:if(!$r(i.value=i.props.join(",")))return""}return $r(l=$i(i.children,p))?i.return=i.value+"{"+l+"}":""}function Vh(i){var c=Wu(i);return function(l,p,u,v){for(var b="",L=0;L<c;L++)b+=i[L](l,p,u,v)||"";return b}}function Qh(i){return function(c){c.root||(c=c.return)&&i(c)}}function Gh(i,c,l,p){if(i.length>-1&&!i.return)switch(i.type){case il:i.return=Vu(i.value,i.length,l);return;case Au:return $i([vt(i,{value:te(i.value,"@","@"+me)})],p);case Bi:if(i.length)return Ih(l=i.props,function(u){switch(Yr(u,p=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":mn(vt(i,{props:[te(u,/:(read-\w+)/,":"+fo+"$1")]})),mn(vt(i,{props:[u]})),Ks(i,{props:mu(l,p)});break;case"::placeholder":mn(vt(i,{props:[te(u,/:(plac\w+)/,":"+me+"input-$1")]})),mn(vt(i,{props:[te(u,/:(plac\w+)/,":"+fo+"$1")]})),mn(vt(i,{props:[te(u,/:(plac\w+)/,Se+"input-$1")]})),mn(vt(i,{props:[u]})),Ks(i,{props:mu(l,p)});break}return""})}}var qh={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},hr={},yn=typeof process!="undefined"&&hr!==void 0&&(hr.REACT_APP_SC_ATTR||hr.SC_ATTR)||"data-styled",Qu="active",Gu="data-styled-version",Wi="6.3.10",sl=`/*!sc*/
`,ho=typeof window!="undefined"&&typeof document!="undefined",Kh=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&hr!==void 0&&hr.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&hr.REACT_APP_SC_DISABLE_SPEEDY!==""?hr.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&hr.REACT_APP_SC_DISABLE_SPEEDY:typeof process!="undefined"&&hr!==void 0&&hr.SC_DISABLE_SPEEDY!==void 0&&hr.SC_DISABLE_SPEEDY!==""&&hr.SC_DISABLE_SPEEDY!=="false"&&hr.SC_DISABLE_SPEEDY);function vo(i){for(var c=[],l=1;l<arguments.length;l++)c[l-1]=arguments[l];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(i," for more information.").concat(c.length>0?" Args: ".concat(c.join(", ")):""))}var Li=new Map,Mi=new Map,zi=1,po=function(i){if(Li.has(i))return Li.get(i);for(;Mi.has(zi);)zi++;var c=zi++;return Li.set(i,c),Mi.set(c,i),c},Yh=function(i,c){zi=c+1,Li.set(i,c),Mi.set(c,i)},ll=Object.freeze([]),wn=Object.freeze({});function Xh(i,c,l){return l===void 0&&(l=wn),i.theme!==l.theme&&i.theme||c||l.theme}var qu=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),Jh=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Zh=/(^-|-$)/g;function yu(i){return i.replace(Jh,"-").replace(Zh,"")}var ex=/(a)(d)/gi,wu=function(i){return String.fromCharCode(i+(i>25?39:97))};function Xs(i){var c,l="";for(c=Math.abs(i);c>52;c=c/52|0)l=wu(c%52)+l;return(wu(c%52)+l).replace(ex,"$1-$2")}var Ws,Ht=function(i,c){for(var l=c.length;l;)i=33*i^c.charCodeAt(--l);return i},Ku=function(i){return Ht(5381,i)};function rx(i){return Xs(Ku(i)>>>0)}function tx(i){return i.displayName||i.name||"Component"}function Us(i){return typeof i=="string"&&!0}var Yu=typeof Symbol=="function"&&Symbol.for,Xu=Yu?Symbol.for("react.memo"):60115,nx=Yu?Symbol.for("react.forward_ref"):60112,ox={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},ix={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ju={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ax=((Ws={})[nx]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ws[Xu]=Ju,Ws);function bu(i){return("type"in(c=i)&&c.type.$$typeof)===Xu?Ju:"$$typeof"in i?ax[i.$$typeof]:ox;var c}var sx=Object.defineProperty,lx=Object.getOwnPropertyNames,ku=Object.getOwnPropertySymbols,cx=Object.getOwnPropertyDescriptor,dx=Object.getPrototypeOf,ju=Object.prototype;function Zu(i,c,l){if(typeof c!="string"){if(ju){var p=dx(c);p&&p!==ju&&Zu(i,p,l)}var u=lx(c);ku&&(u=u.concat(ku(c)));for(var v=bu(i),b=bu(c),L=0;L<u.length;++L){var T=u[L];if(!(T in ix||l&&l[T]||b&&T in b||v&&T in v)){var Y=cx(c,T);try{sx(i,T,Y)}catch{}}}}return i}function bn(i){return typeof i=="function"}function cl(i){return typeof i=="object"&&"styledComponentId"in i}function At(i,c){return i&&c?"".concat(i," ").concat(c):i||c||""}function Nu(i,c){return i.join("")}function go(i){return i!==null&&typeof i=="object"&&i.constructor.name===Object.name&&!("props"in i&&i.$$typeof)}function Js(i,c,l){if(l===void 0&&(l=!1),!l&&!go(i)&&!Array.isArray(i))return c;if(Array.isArray(c))for(var p=0;p<c.length;p++)i[p]=Js(i[p],c[p]);else if(go(c))for(var p in c)i[p]=Js(i[p],c[p]);return i}function dl(i,c){Object.defineProperty(i,"toString",{value:c})}var ux=(function(){function i(c){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=c,this._cGroup=0,this._cIndex=0}return i.prototype.indexOfGroup=function(c){if(c===this._cGroup)return this._cIndex;var l=this._cIndex;if(c>this._cGroup)for(var p=this._cGroup;p<c;p++)l+=this.groupSizes[p];else for(p=this._cGroup-1;p>=c;p--)l-=this.groupSizes[p];return this._cGroup=c,this._cIndex=l,l},i.prototype.insertRules=function(c,l){if(c>=this.groupSizes.length){for(var p=this.groupSizes,u=p.length,v=u;c>=v;)if((v<<=1)<0)throw vo(16,"".concat(c));this.groupSizes=new Uint32Array(v),this.groupSizes.set(p),this.length=v;for(var b=u;b<v;b++)this.groupSizes[b]=0}for(var L=this.indexOfGroup(c+1),T=0,Y=(b=0,l.length);b<Y;b++)this.tag.insertRule(L,l[b])&&(this.groupSizes[c]++,L++,T++);T>0&&this._cGroup>c&&(this._cIndex+=T)},i.prototype.clearGroup=function(c){if(c<this.length){var l=this.groupSizes[c],p=this.indexOfGroup(c),u=p+l;this.groupSizes[c]=0;for(var v=p;v<u;v++)this.tag.deleteRule(p);l>0&&this._cGroup>c&&(this._cIndex-=l)}},i.prototype.getGroup=function(c){var l="";if(c>=this.length||this.groupSizes[c]===0)return l;for(var p=this.groupSizes[c],u=this.indexOfGroup(c),v=u+p,b=u;b<v;b++)l+=this.tag.getRule(b)+sl;return l},i})(),px="style[".concat(yn,"][").concat(Gu,'="').concat(Wi,'"]'),fx=new RegExp("^".concat(yn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Su=function(i){return typeof ShadowRoot!="undefined"&&i instanceof ShadowRoot||"host"in i&&i.nodeType===11},Zs=function(i){if(!i)return document;if(Su(i))return i;if("getRootNode"in i){var c=i.getRootNode();if(Su(c))return c}return document},hx=function(i,c,l){for(var p,u=l.split(","),v=0,b=u.length;v<b;v++)(p=u[v])&&i.registerName(c,p)},xx=function(i,c){for(var l,p=((l=c.textContent)!==null&&l!==void 0?l:"").split(sl),u=[],v=0,b=p.length;v<b;v++){var L=p[v].trim();if(L){var T=L.match(fx);if(T){var Y=0|parseInt(T[1],10),G=T[2];Y!==0&&(Yh(G,Y),hx(i,G,T[3]),i.getTag().insertRules(Y,u)),u.length=0}else u.push(L)}}},Vs=function(i){for(var c=Zs(i.options.target).querySelectorAll(px),l=0,p=c.length;l<p;l++){var u=c[l];u&&u.getAttribute(yn)!==Qu&&(xx(i,u),u.parentNode&&u.parentNode.removeChild(u))}};function mx(){return typeof __webpack_nonce__!="undefined"?__webpack_nonce__:null}var ep=function(i){var c=document.head,l=i||c,p=document.createElement("style"),u=(function(L){var T=Array.from(L.querySelectorAll("style[".concat(yn,"]")));return T[T.length-1]})(l),v=u!==void 0?u.nextSibling:null;p.setAttribute(yn,Qu),p.setAttribute(Gu,Wi);var b=mx();return b&&p.setAttribute("nonce",b),l.insertBefore(p,v),p},gx=(function(){function i(c){this.element=ep(c),this.element.appendChild(document.createTextNode("")),this.sheet=(function(l){var p;if(l.sheet)return l.sheet;for(var u=(p=l.getRootNode().styleSheets)!==null&&p!==void 0?p:document.styleSheets,v=0,b=u.length;v<b;v++){var L=u[v];if(L.ownerNode===l)return L}throw vo(17)})(this.element),this.length=0}return i.prototype.insertRule=function(c,l){try{return this.sheet.insertRule(l,c),this.length++,!0}catch{return!1}},i.prototype.deleteRule=function(c){this.sheet.deleteRule(c),this.length--},i.prototype.getRule=function(c){var l=this.sheet.cssRules[c];return l&&l.cssText?l.cssText:""},i})(),vx=(function(){function i(c){this.element=ep(c),this.nodes=this.element.childNodes,this.length=0}return i.prototype.insertRule=function(c,l){if(c<=this.length&&c>=0){var p=document.createTextNode(l);return this.element.insertBefore(p,this.nodes[c]||null),this.length++,!0}return!1},i.prototype.deleteRule=function(c){this.element.removeChild(this.nodes[c]),this.length--},i.prototype.getRule=function(c){return c<this.length?this.nodes[c].textContent:""},i})(),yx=(function(){function i(c){this.rules=[],this.length=0}return i.prototype.insertRule=function(c,l){return c<=this.length&&(c===this.length?this.rules.push(l):this.rules.splice(c,0,l),this.length++,!0)},i.prototype.deleteRule=function(c){this.rules.splice(c,1),this.length--},i.prototype.getRule=function(c){return c<this.length?this.rules[c]:""},i})(),Cu=ho,wx={isServer:!ho,useCSSOMInjection:!Kh},rp=(function(){function i(c,l,p){c===void 0&&(c=wn),l===void 0&&(l={});var u=this;this.options=cr(cr({},wx),c),this.gs=l,this.names=new Map(p),this.server=!!c.isServer,!this.server&&ho&&Cu&&(Cu=!1,Vs(this)),dl(this,function(){return(function(v){for(var b=v.getTag(),L=b.length,T="",Y=function(F){var Z=(function(ge){return Mi.get(ge)})(F);if(Z===void 0)return"continue";var ce=v.names.get(Z);if(ce===void 0||!ce.size)return"continue";var X=b.getGroup(F);if(X.length===0)return"continue";var D=yn+".g"+F+'[id="'+Z+'"]',q="";ce.forEach(function(ge){ge.length>0&&(q+=ge+",")}),T+=X+D+'{content:"'+q+'"}'+sl},G=0;G<L;G++)Y(G);return T})(u)})}return i.registerId=function(c){return po(c)},i.prototype.rehydrate=function(){!this.server&&ho&&Vs(this)},i.prototype.reconstructWithOptions=function(c,l){l===void 0&&(l=!0);var p=new i(cr(cr({},this.options),c),this.gs,l&&this.names||void 0);return!this.server&&ho&&c.target!==this.options.target&&Zs(this.options.target)!==Zs(c.target)&&Vs(p),p},i.prototype.allocateGSInstance=function(c){return this.gs[c]=(this.gs[c]||0)+1},i.prototype.getTag=function(){return this.tag||(this.tag=(c=(function(l){var p=l.useCSSOMInjection,u=l.target;return l.isServer?new yx(u):p?new gx(u):new vx(u)})(this.options),new ux(c)));var c},i.prototype.hasNameForId=function(c,l){var p,u;return(u=(p=this.names.get(c))===null||p===void 0?void 0:p.has(l))!==null&&u!==void 0&&u},i.prototype.registerName=function(c,l){po(c);var p=this.names.get(c);p?p.add(l):this.names.set(c,new Set([l]))},i.prototype.insertRules=function(c,l,p){this.registerName(c,l),this.getTag().insertRules(po(c),p)},i.prototype.clearNames=function(c){this.names.has(c)&&this.names.get(c).clear()},i.prototype.clearRules=function(c){this.getTag().clearGroup(po(c)),this.clearNames(c)},i.prototype.clearTag=function(){this.tag=void 0},i})(),bx=/&/g,Xr=47,Bt=42;function Tu(i){if(i.indexOf("}")===-1)return!1;for(var c=i.length,l=0,p=0,u=!1,v=0;v<c;v++){var b=i.charCodeAt(v);if(p!==0||u||b!==Xr||i.charCodeAt(v+1)!==Bt)if(u)b===Bt&&i.charCodeAt(v+1)===Xr&&(u=!1,v++);else if(b!==34&&b!==39||v!==0&&i.charCodeAt(v-1)===92){if(p===0){if(b===123)l++;else if(b===125&&--l<0)return!0}}else p===0?p=b:p===b&&(p=0);else u=!0,v++}return l!==0||p!==0}function tp(i,c){return i.map(function(l){return l.type==="rule"&&(l.value="".concat(c," ").concat(l.value),l.value=l.value.replaceAll(",",",".concat(c," ")),l.props=l.props.map(function(p){return"".concat(c," ").concat(p)})),Array.isArray(l.children)&&l.type!=="@keyframes"&&(l.children=tp(l.children,c)),l})}function kx(i){var c,l,p,u=wn,v=u.options,b=v===void 0?wn:v,L=u.plugins,T=L===void 0?ll:L,Y=function(X,D,q){return q.startsWith(l)&&q.endsWith(l)&&q.replaceAll(l,"").length>0?".".concat(c):X},G=T.slice();G.push(function(X){X.type===Bi&&X.value.includes("&")&&(p||(p=new RegExp("\\".concat(l,"\\b"),"g")),X.props[0]=X.props[0].replace(bx,l).replace(p,Y))}),b.prefix&&G.push(Gh),G.push(Uh);var F=[],Z=Vh(G.concat(Qh(function(X){return F.push(X)}))),ce=function(X,D,q,ge){D===void 0&&(D=""),q===void 0&&(q=""),ge===void 0&&(ge="&"),c=ge,l=D,p=void 0;var pe=(function(z){if(!Tu(z))return z;for(var J=z.length,W="",P=0,H=0,we=0,Me=!1,se=0;se<J;se++){var Ie=z.charCodeAt(se);if(we!==0||Me||Ie!==Xr||z.charCodeAt(se+1)!==Bt)if(Me)Ie===Bt&&z.charCodeAt(se+1)===Xr&&(Me=!1,se++);else if(Ie!==34&&Ie!==39||se!==0&&z.charCodeAt(se-1)===92){if(we===0)if(Ie===123)H++;else if(Ie===125){if(--H<0){for(var Ce=se+1;Ce<J;){var qe=z.charCodeAt(Ce);if(qe===59||qe===10)break;Ce++}Ce<J&&z.charCodeAt(Ce)===59&&Ce++,H=0,se=Ce-1,P=Ce;continue}H===0&&(W+=z.substring(P,se+1),P=se+1)}else Ie===59&&H===0&&(W+=z.substring(P,se+1),P=se+1)}else we===0?we=Ie:we===Ie&&(we=0);else Me=!0,se++}if(P<J){var er=z.substring(P);Tu(er)||(W+=er)}return W})((function(z){if(z.indexOf("//")===-1)return z;for(var J=z.length,W=[],P=0,H=0,we=0,Me=0;H<J;){var se=z.charCodeAt(H);if(se!==34&&se!==39||H!==0&&z.charCodeAt(H-1)===92)if(we===0)if(se===Xr&&H+1<J&&z.charCodeAt(H+1)===Bt){for(H+=2;H+1<J&&(z.charCodeAt(H)!==Bt||z.charCodeAt(H+1)!==Xr);)H++;H+=2}else if(se===40&&H>=3&&(32|z.charCodeAt(H-1))==108&&(32|z.charCodeAt(H-2))==114&&(32|z.charCodeAt(H-3))==117)Me=1,H++;else if(Me>0)se===41?Me--:se===40&&Me++,H++;else if(se===Bt&&H+1<J&&z.charCodeAt(H+1)===Xr)H>P&&W.push(z.substring(P,H)),P=H+=2;else if(se===Xr&&H+1<J&&z.charCodeAt(H+1)===Xr){for(H>P&&W.push(z.substring(P,H));H<J&&z.charCodeAt(H)!==10;)H++;P=H}else H++;else H++;else we===0?we=se:we===se&&(we=0),H++}return P===0?z:(P<J&&W.push(z.substring(P)),W.join(""))})(X)),oe=Dh(q||D?"".concat(q," ").concat(D," { ").concat(pe," }"):pe);return b.namespace&&(oe=tp(oe,b.namespace)),F=[],$i(oe,Z),F};return ce.hash=T.length?T.reduce(function(X,D){return D.name||vo(15),Ht(X,D.name)},5381).toString():"",ce}var jx=new rp,el=kx(),np=xr.createContext({shouldForwardProp:void 0,styleSheet:jx,stylis:el});np.Consumer;xr.createContext(void 0);function Eu(){return xr.useContext(np)}var Nx=(function(){function i(c,l){var p=this;this.inject=function(u,v){v===void 0&&(v=el);var b=p.name+v.hash;u.hasNameForId(p.id,b)||u.insertRules(p.id,b,v(p.rules,b,"@keyframes"))},this.name=c,this.id="sc-keyframes-".concat(c),this.rules=l,dl(this,function(){throw vo(12,String(p.name))})}return i.prototype.getName=function(c){return c===void 0&&(c=el),this.name+c.hash},i})();function Sx(i,c){return c==null||typeof c=="boolean"||c===""?"":typeof c!="number"||c===0||i in qh||i.startsWith("--")?String(c).trim():"".concat(c,"px")}var Cx=function(i){return i>="A"&&i<="Z"};function Pu(i){for(var c="",l=0;l<i.length;l++){var p=i[l];if(l===1&&p==="-"&&i[0]==="-")return i;Cx(p)?c+="-"+p.toLowerCase():c+=p}return c.startsWith("ms-")?"-"+c:c}var op=function(i){return i==null||i===!1||i===""},ip=function(i){var c=[];for(var l in i){var p=i[l];i.hasOwnProperty(l)&&!op(p)&&(Array.isArray(p)&&p.isCss||bn(p)?c.push("".concat(Pu(l),":"),p,";"):go(p)?c.push.apply(c,Ii(Ii(["".concat(l," {")],ip(p),!1),["}"],!1)):c.push("".concat(Pu(l),": ").concat(Sx(l,p),";")))}return c};function Ft(i,c,l,p,u){if(u===void 0&&(u=[]),typeof i=="string")return i&&u.push(i),u;if(op(i))return u;if(cl(i))return u.push(".".concat(i.styledComponentId)),u;if(bn(i)){if(!bn(b=i)||b.prototype&&b.prototype.isReactComponent||!c)return u.push(i),u;var v=i(c);return Ft(v,c,l,p,u)}var b;if(i instanceof Nx)return l?(i.inject(l,p),u.push(i.getName(p))):u.push(i),u;if(go(i)){for(var L=ip(i),T=0;T<L.length;T++)u.push(L[T]);return u}if(!Array.isArray(i))return u.push(i.toString()),u;for(T=0;T<i.length;T++)Ft(i[T],c,l,p,u);return u}function Tx(i){for(var c=0;c<i.length;c+=1){var l=i[c];if(bn(l)&&!cl(l))return!1}return!0}var Ex=Ku(Wi),Px=(function(){function i(c,l,p){this.rules=c,this.staticRulesId="",this.isStatic=(p===void 0||p.isStatic)&&Tx(c),this.componentId=l,this.baseHash=Ht(Ex,l),this.baseStyle=p,rp.registerId(l)}return i.prototype.generateAndInjectStyles=function(c,l,p){var u=this.baseStyle?this.baseStyle.generateAndInjectStyles(c,l,p).className:"";if(this.isStatic&&!p.hash)if(this.staticRulesId&&l.hasNameForId(this.componentId,this.staticRulesId))u=At(u,this.staticRulesId);else{var v=Nu(Ft(this.rules,c,l,p)),b=Xs(Ht(this.baseHash,v)>>>0);if(!l.hasNameForId(this.componentId,b)){var L=p(v,".".concat(b),void 0,this.componentId);l.insertRules(this.componentId,b,L)}u=At(u,b),this.staticRulesId=b}else{for(var T=Ht(this.baseHash,p.hash),Y="",G=0;G<this.rules.length;G++){var F=this.rules[G];if(typeof F=="string")Y+=F;else if(F){var Z=Nu(Ft(F,c,l,p));T=Ht(Ht(T,String(G)),Z),Y+=Z}}if(Y){var ce=Xs(T>>>0);if(!l.hasNameForId(this.componentId,ce)){var X=p(Y,".".concat(ce),void 0,this.componentId);l.insertRules(this.componentId,ce,X)}u=At(u,ce)}}return{className:u,css:typeof window=="undefined"?l.getTag().getGroup(po(this.componentId)):""}},i})(),ap=xr.createContext(void 0);ap.Consumer;var Qs={};function _x(i,c,l){var p=cl(i),u=i,v=!Us(i),b=c.attrs,L=b===void 0?ll:b,T=c.componentId,Y=T===void 0?(function(z,J){var W=typeof z!="string"?"sc":yu(z);Qs[W]=(Qs[W]||0)+1;var P="".concat(W,"-").concat(rx(Wi+W+Qs[W]));return J?"".concat(J,"-").concat(P):P})(c.displayName,c.parentComponentId):T,G=c.displayName,F=G===void 0?(function(z){return Us(z)?"styled.".concat(z):"Styled(".concat(tx(z),")")})(i):G,Z=c.displayName&&c.componentId?"".concat(yu(c.displayName),"-").concat(c.componentId):c.componentId||Y,ce=p&&u.attrs?u.attrs.concat(L).filter(Boolean):L,X=c.shouldForwardProp;if(p&&u.shouldForwardProp){var D=u.shouldForwardProp;if(c.shouldForwardProp){var q=c.shouldForwardProp;X=function(z,J){return D(z,J)&&q(z,J)}}else X=D}var ge=new Px(l,Z,p?u.componentStyle:void 0);function pe(z,J){return(function(W,P,H){var we=W.attrs,Me=W.componentStyle,se=W.defaultProps,Ie=W.foldedComponentIds,Ce=W.styledComponentId,qe=W.target,er=xr.useContext(ap),Ke=Eu(),be=W.shouldForwardProp||Ke.shouldForwardProp,E=Xh(P,er,se)||wn,A=(function(ae,fe,ue){for(var ve,Ee=cr(cr({},fe),{className:void 0,theme:ue}),Jr=0;Jr<ae.length;Jr+=1){var Nt=bn(ve=ae[Jr])?ve(Ee):ve;for(var Cr in Nt)Cr==="className"?Ee.className=At(Ee.className,Nt[Cr]):Cr==="style"?Ee.style=cr(cr({},Ee.style),Nt[Cr]):Ee[Cr]=Nt[Cr]}return"className"in fe&&typeof fe.className=="string"&&(Ee.className=At(Ee.className,fe.className)),Ee})(we,P,E),I=A.as||qe,m={};for(var k in A)A[k]===void 0||k[0]==="$"||k==="as"||k==="theme"&&A.theme===E||(k==="forwardedAs"?m.as=A.forwardedAs:be&&!be(k,I)||(m[k]=A[k]));var ee=(function(ae,fe){var ue=Eu(),ve=ae.generateAndInjectStyles(fe,ue.styleSheet,ue.stylis);return ve})(Me,A),re=ee.className,le=At(Ie,Ce);return re&&(le+=" "+re),A.className&&(le+=" "+A.className),m[Us(I)&&!qu.has(I)?"class":"className"]=le,H&&(m.ref=H),Q.createElement(I,m)})(oe,z,J)}pe.displayName=F;var oe=xr.forwardRef(pe);return oe.attrs=ce,oe.componentStyle=ge,oe.displayName=F,oe.shouldForwardProp=X,oe.foldedComponentIds=p?At(u.foldedComponentIds,u.styledComponentId):"",oe.styledComponentId=Z,oe.target=p?u.target:i,Object.defineProperty(oe,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(z){this._foldedDefaultProps=p?(function(J){for(var W=[],P=1;P<arguments.length;P++)W[P-1]=arguments[P];for(var H=0,we=W;H<we.length;H++)Js(J,we[H],!0);return J})({},u.defaultProps,z):z}}),dl(oe,function(){return".".concat(oe.styledComponentId)}),v&&Zu(oe,i,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),oe}function _u(i,c){for(var l=[i[0]],p=0,u=c.length;p<u;p+=1)l.push(c[p],i[p+1]);return l}var Lu=function(i){return Object.assign(i,{isCss:!0})};function Lx(i){for(var c=[],l=1;l<arguments.length;l++)c[l-1]=arguments[l];if(bn(i)||go(i))return Lu(Ft(_u(ll,Ii([i],c,!0))));var p=i;return c.length===0&&p.length===1&&typeof p[0]=="string"?Ft(p):Lu(Ft(_u(p,c)))}function rl(i,c,l){if(l===void 0&&(l=wn),!c)throw vo(1,c);var p=function(u){for(var v=[],b=1;b<arguments.length;b++)v[b-1]=arguments[b];return i(c,l,Lx.apply(void 0,Ii([u],v,!1)))};return p.attrs=function(u){return rl(i,c,cr(cr({},l),{attrs:Array.prototype.concat(l.attrs,u).filter(Boolean)}))},p.withConfig=function(u){return rl(i,c,cr(cr({},l),u))},p}var sp=function(i){return rl(_x,i)},ne=sp;qu.forEach(function(i){ne[i]=sp(i)});const Gs={Wrapper:ne.div`
        min-height: 100vh;
        overflow: hidden;
        background: var(--color-bg);
        color: var(--color-text-primary);
    `,Header:ne.header`
        position: fixed;
        inset: 0 0 auto;
        z-index: 50;
        height: 68px;
        border-bottom: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-bg) 90%, transparent);
        backdrop-filter: blur(14px);
    `,Main:ne.main`
        height: 100vh;
        padding-top: 68px;
        overflow-y: auto;
        position: relative;
        scrollbar-gutter: stable;
        scrollbar-width: thin;
        scrollbar-color: var(--color-border-light) transparent;
        &::-webkit-scrollbar { width: 10px; }
        &::-webkit-scrollbar-track { background: transparent; }
        &::-webkit-scrollbar-thumb { background: var(--color-border-light); border: 3px solid transparent; border-radius: 999px; background-clip: content-box; }
        .contentWrapper {
            min-height: 100%;
            width: min(1440px, calc(100% - 32px));
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            padding: 24px 0 10px;
            .category { margin: 28px 0 15px; }
        }
        .footerWrapper { flex-shrink: 0; padding: 14px 0 24px; }
        @media (max-width: 640px) {
            .contentWrapper { width: min(100% - 20px, 1440px); padding-top: 16px; }
        }
    `,Loading:ne.div` min-height: 50vh; display: grid; place-content: center; color: var(--color-text-muted); `};var lp={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},zu=xr.createContext&&xr.createContext(lp),zx=["attr","size","title"];function Ix(i,c){if(i==null)return{};var l=$x(i,c),p,u;if(Object.getOwnPropertySymbols){var v=Object.getOwnPropertySymbols(i);for(u=0;u<v.length;u++)p=v[u],!(c.indexOf(p)>=0)&&Object.prototype.propertyIsEnumerable.call(i,p)&&(l[p]=i[p])}return l}function $x(i,c){if(i==null)return{};var l={};for(var p in i)if(Object.prototype.hasOwnProperty.call(i,p)){if(c.indexOf(p)>=0)continue;l[p]=i[p]}return l}function Ri(){return Ri=Object.assign?Object.assign.bind():function(i){for(var c=1;c<arguments.length;c++){var l=arguments[c];for(var p in l)Object.prototype.hasOwnProperty.call(l,p)&&(i[p]=l[p])}return i},Ri.apply(this,arguments)}function Iu(i,c){var l=Object.keys(i);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(i);c&&(p=p.filter(function(u){return Object.getOwnPropertyDescriptor(i,u).enumerable})),l.push.apply(l,p)}return l}function Oi(i){for(var c=1;c<arguments.length;c++){var l=arguments[c]!=null?arguments[c]:{};c%2?Iu(Object(l),!0).forEach(function(p){Mx(i,p,l[p])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(l)):Iu(Object(l)).forEach(function(p){Object.defineProperty(i,p,Object.getOwnPropertyDescriptor(l,p))})}return i}function Mx(i,c,l){return c=Rx(c),c in i?Object.defineProperty(i,c,{value:l,enumerable:!0,configurable:!0,writable:!0}):i[c]=l,i}function Rx(i){var c=Ox(i,"string");return typeof c=="symbol"?c:c+""}function Ox(i,c){if(typeof i!="object"||!i)return i;var l=i[Symbol.toPrimitive];if(l!==void 0){var p=l.call(i,c);if(typeof p!="object")return p;throw new TypeError("@@toPrimitive must return a primitive value.")}return(c==="string"?String:Number)(i)}function cp(i){return i&&i.map((c,l)=>xr.createElement(c.tag,Oi({key:l},c.attr),cp(c.child)))}function _(i){return c=>xr.createElement(Hx,Ri({attr:Oi({},i.attr)},c),cp(i.child))}function Hx(i){var c=l=>{var{attr:p,size:u,title:v}=i,b=Ix(i,zx),L=u||l.size||"1em",T;return l.className&&(T=l.className),i.className&&(T=(T?T+" ":"")+i.className),xr.createElement("svg",Ri({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},l.attr,p,b,{className:T,style:Oi(Oi({color:i.color||l.color},l.style),i.style),height:L,width:L,xmlns:"http://www.w3.org/2000/svg"}),v&&xr.createElement("title",null,v),i.children)};return zu!==void 0?xr.createElement(zu.Consumer,null,l=>c(l)):c(lp)}function qs(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"16",x2:"12.01",y2:"16"},child:[]}]})(i)}function dp(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"},child:[]},{tag:"line",attr:{x1:"12",y1:"9",x2:"12",y2:"13"},child:[]},{tag:"line",attr:{x1:"12",y1:"17",x2:"12.01",y2:"17"},child:[]}]})(i)}function Bx(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"5",x2:"12",y2:"19"},child:[]},{tag:"polyline",attr:{points:"19 12 12 19 5 12"},child:[]}]})(i)}function up(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"19",x2:"12",y2:"5"},child:[]},{tag:"polyline",attr:{points:"5 12 12 5 19 12"},child:[]}]})(i)}function pp(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"},child:[]},{tag:"path",attr:{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"},child:[]}]})(i)}function wt(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"},child:[]},{tag:"polyline",attr:{points:"3.27 6.96 12 12.01 20.73 6.96"},child:[]},{tag:"line",attr:{x1:"12",y1:"22.08",x2:"12",y2:"12"},child:[]}]})(i)}function fp(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"},child:[]},{tag:"polyline",attr:{points:"22 4 12 14.01 9 11.01"},child:[]}]})(i)}function $u(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"9 11 12 14 22 4"},child:[]},{tag:"path",attr:{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"},child:[]}]})(i)}function Le(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"},child:[]}]})(i)}function ze(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"9 18 15 12 9 6"},child:[]}]})(i)}function ul(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"polyline",attr:{points:"12 6 12 12 16 14"},child:[]}]})(i)}function de(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 18 22 12 16 6"},child:[]},{tag:"polyline",attr:{points:"8 6 2 12 8 18"},child:[]}]})(i)}function Ax(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 8h1a4 4 0 0 1 0 8h-1"},child:[]},{tag:"path",attr:{d:"M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"},child:[]},{tag:"line",attr:{x1:"6",y1:"1",x2:"6",y2:"4"},child:[]},{tag:"line",attr:{x1:"10",y1:"1",x2:"10",y2:"4"},child:[]},{tag:"line",attr:{x1:"14",y1:"1",x2:"14",y2:"4"},child:[]}]})(i)}function Fx(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"9 10 4 15 9 20"},child:[]},{tag:"path",attr:{d:"M20 4v7a4 4 0 0 1-4 4H4"},child:[]}]})(i)}function Dx(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"9 14 4 9 9 4"},child:[]},{tag:"path",attr:{d:"M20 20v-7a4 4 0 0 0-4-4H4"},child:[]}]})(i)}function Wx(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"15 14 20 9 15 4"},child:[]},{tag:"path",attr:{d:"M4 20v-7a4 4 0 0 1 4-4h12"},child:[]}]})(i)}function pl(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"4",y:"4",width:"16",height:"16",rx:"2",ry:"2"},child:[]},{tag:"rect",attr:{x:"9",y:"9",width:"6",height:"6"},child:[]},{tag:"line",attr:{x1:"9",y1:"1",x2:"9",y2:"4"},child:[]},{tag:"line",attr:{x1:"15",y1:"1",x2:"15",y2:"4"},child:[]},{tag:"line",attr:{x1:"9",y1:"20",x2:"9",y2:"23"},child:[]},{tag:"line",attr:{x1:"15",y1:"20",x2:"15",y2:"23"},child:[]},{tag:"line",attr:{x1:"20",y1:"9",x2:"23",y2:"9"},child:[]},{tag:"line",attr:{x1:"20",y1:"14",x2:"23",y2:"14"},child:[]},{tag:"line",attr:{x1:"1",y1:"9",x2:"4",y2:"9"},child:[]},{tag:"line",attr:{x1:"1",y1:"14",x2:"4",y2:"14"},child:[]}]})(i)}function Nr(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"ellipse",attr:{cx:"12",cy:"5",rx:"9",ry:"3"},child:[]},{tag:"path",attr:{d:"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"},child:[]},{tag:"path",attr:{d:"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"},child:[]}]})(i)}function Ux(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"},child:[]},{tag:"polyline",attr:{points:"7 10 12 15 17 10"},child:[]},{tag:"line",attr:{x1:"12",y1:"15",x2:"12",y2:"3"},child:[]}]})(i)}function Vx(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"},child:[]}]})(i)}function tl(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 20h9"},child:[]},{tag:"path",attr:{d:"M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"},child:[]}]})(i)}function Qx(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"3"},child:[]}]})(i)}function bt(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"},child:[]},{tag:"polyline",attr:{points:"14 2 14 8 20 8"},child:[]},{tag:"line",attr:{x1:"16",y1:"13",x2:"8",y2:"13"},child:[]},{tag:"line",attr:{x1:"16",y1:"17",x2:"8",y2:"17"},child:[]},{tag:"polyline",attr:{points:"10 9 9 9 8 9"},child:[]}]})(i)}function Mu(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"},child:[]}]})(i)}function hp(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"},child:[]}]})(i)}function Gx(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"6",y1:"3",x2:"6",y2:"15"},child:[]},{tag:"circle",attr:{cx:"18",cy:"6",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"18",r:"3"},child:[]},{tag:"path",attr:{d:"M18 9a9 9 0 0 1-9 9"},child:[]}]})(i)}function qx(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"4"},child:[]},{tag:"line",attr:{x1:"1.05",y1:"12",x2:"7",y2:"12"},child:[]},{tag:"line",attr:{x1:"17.01",y1:"12",x2:"22.96",y2:"12"},child:[]}]})(i)}function Kx(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"18",cy:"18",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"6",r:"3"},child:[]},{tag:"path",attr:{d:"M13 6h3a2 2 0 0 1 2 2v7"},child:[]},{tag:"line",attr:{x1:"6",y1:"9",x2:"6",y2:"21"},child:[]}]})(i)}function gn(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"2",y1:"12",x2:"22",y2:"12"},child:[]},{tag:"path",attr:{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"},child:[]}]})(i)}function Yx(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"14",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"3",y:"14",width:"7",height:"7"},child:[]}]})(i)}function kn(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"4",y1:"9",x2:"20",y2:"9"},child:[]},{tag:"line",attr:{x1:"4",y1:"15",x2:"20",y2:"15"},child:[]},{tag:"line",attr:{x1:"10",y1:"3",x2:"8",y2:"21"},child:[]},{tag:"line",attr:{x1:"16",y1:"3",x2:"14",y2:"21"},child:[]}]})(i)}function Xx(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"},child:[]}]})(i)}function xp(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"},child:[]}]})(i)}function gr(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 2 7 12 12 22 7 12 2"},child:[]},{tag:"polyline",attr:{points:"2 17 12 22 22 17"},child:[]},{tag:"polyline",attr:{points:"2 12 12 17 22 12"},child:[]}]})(i)}function Jx(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"3",y1:"9",x2:"21",y2:"9"},child:[]},{tag:"line",attr:{x1:"9",y1:"21",x2:"9",y2:"9"},child:[]}]})(i)}function Zx(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"},child:[]},{tag:"path",attr:{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"},child:[]}]})(i)}function em(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"8",y1:"6",x2:"21",y2:"6"},child:[]},{tag:"line",attr:{x1:"8",y1:"12",x2:"21",y2:"12"},child:[]},{tag:"line",attr:{x1:"8",y1:"18",x2:"21",y2:"18"},child:[]},{tag:"line",attr:{x1:"3",y1:"6",x2:"3.01",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"12",x2:"3.01",y2:"12"},child:[]},{tag:"line",attr:{x1:"3",y1:"18",x2:"3.01",y2:"18"},child:[]}]})(i)}function kt(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M7 11V7a5 5 0 0 1 10 0v4"},child:[]}]})(i)}function rm(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"},child:[]},{tag:"line",attr:{x1:"8",y1:"2",x2:"8",y2:"18"},child:[]},{tag:"line",attr:{x1:"16",y1:"6",x2:"16",y2:"22"},child:[]}]})(i)}function tm(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"},child:[]}]})(i)}function xo(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"16.5",y1:"9.4",x2:"7.5",y2:"4.21"},child:[]},{tag:"path",attr:{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"},child:[]},{tag:"polyline",attr:{points:"3.27 6.96 12 12.01 20.73 6.96"},child:[]},{tag:"line",attr:{x1:"12",y1:"22.08",x2:"12",y2:"12"},child:[]}]})(i)}function nm(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"5 3 19 12 5 21 5 3"},child:[]}]})(i)}function mp(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 4 23 10 17 10"},child:[]},{tag:"polyline",attr:{points:"1 20 1 14 7 14"},child:[]},{tag:"path",attr:{d:"M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"},child:[]}]})(i)}function om(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"17 1 21 5 17 9"},child:[]},{tag:"path",attr:{d:"M3 11V9a4 4 0 0 1 4-4h14"},child:[]},{tag:"polyline",attr:{points:"7 23 3 19 7 15"},child:[]},{tag:"path",attr:{d:"M21 13v2a4 4 0 0 1-4 4H3"},child:[]}]})(i)}function im(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"6",cy:"6",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"18",r:"3"},child:[]},{tag:"line",attr:{x1:"20",y1:"4",x2:"8.12",y2:"15.88"},child:[]},{tag:"line",attr:{x1:"14.47",y1:"14.48",x2:"20",y2:"20"},child:[]},{tag:"line",attr:{x1:"8.12",y1:"8.12",x2:"12",y2:"12"},child:[]}]})(i)}function fl(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"},child:[]},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"},child:[]}]})(i)}function nl(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"22",y1:"2",x2:"11",y2:"13"},child:[]},{tag:"polygon",attr:{points:"22 2 15 22 11 13 2 9 22 2"},child:[]}]})(i)}function jt(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"2",y:"2",width:"20",height:"8",rx:"2",ry:"2"},child:[]},{tag:"rect",attr:{x:"2",y:"14",width:"20",height:"8",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"6",y1:"6",x2:"6.01",y2:"6"},child:[]},{tag:"line",attr:{x1:"6",y1:"18",x2:"6.01",y2:"18"},child:[]}]})(i)}function am(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"3"},child:[]},{tag:"path",attr:{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"},child:[]}]})(i)}function sm(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"18",cy:"5",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"12",r:"3"},child:[]},{tag:"circle",attr:{cx:"18",cy:"19",r:"3"},child:[]},{tag:"line",attr:{x1:"8.59",y1:"13.51",x2:"15.42",y2:"17.49"},child:[]},{tag:"line",attr:{x1:"15.41",y1:"6.51",x2:"8.59",y2:"10.49"},child:[]}]})(i)}function mr(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"},child:[]}]})(i)}function gp(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 3 21 3 21 8"},child:[]},{tag:"line",attr:{x1:"4",y1:"20",x2:"21",y2:"3"},child:[]},{tag:"polyline",attr:{points:"21 16 21 21 16 21"},child:[]},{tag:"line",attr:{x1:"15",y1:"15",x2:"21",y2:"21"},child:[]},{tag:"line",attr:{x1:"4",y1:"4",x2:"9",y2:"9"},child:[]}]})(i)}function lm(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"4",y1:"21",x2:"4",y2:"14"},child:[]},{tag:"line",attr:{x1:"4",y1:"10",x2:"4",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"20",y1:"21",x2:"20",y2:"16"},child:[]},{tag:"line",attr:{x1:"20",y1:"12",x2:"20",y2:"3"},child:[]},{tag:"line",attr:{x1:"1",y1:"14",x2:"7",y2:"14"},child:[]},{tag:"line",attr:{x1:"9",y1:"8",x2:"15",y2:"8"},child:[]},{tag:"line",attr:{x1:"17",y1:"16",x2:"23",y2:"16"},child:[]}]})(i)}function cm(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"5"},child:[]},{tag:"line",attr:{x1:"12",y1:"1",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"23"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"},child:[]},{tag:"line",attr:{x1:"1",y1:"12",x2:"3",y2:"12"},child:[]},{tag:"line",attr:{x1:"21",y1:"12",x2:"23",y2:"12"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"},child:[]}]})(i)}function dm(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"},child:[]},{tag:"line",attr:{x1:"7",y1:"7",x2:"7.01",y2:"7"},child:[]}]})(i)}function um(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"4 17 10 11 4 5"},child:[]},{tag:"line",attr:{x1:"12",y1:"19",x2:"20",y2:"19"},child:[]}]})(i)}function vp(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"},child:[]}]})(i)}function yp(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"3 6 5 6 21 6"},child:[]},{tag:"path",attr:{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"},child:[]},{tag:"line",attr:{x1:"10",y1:"11",x2:"10",y2:"17"},child:[]},{tag:"line",attr:{x1:"14",y1:"11",x2:"14",y2:"17"},child:[]}]})(i)}function pm(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 6 13.5 15.5 8.5 10.5 1 18"},child:[]},{tag:"polyline",attr:{points:"17 6 23 6 23 12"},child:[]}]})(i)}function Hi(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"4 7 4 4 20 4 20 7"},child:[]},{tag:"line",attr:{x1:"9",y1:"20",x2:"15",y2:"20"},child:[]},{tag:"line",attr:{x1:"12",y1:"4",x2:"12",y2:"20"},child:[]}]})(i)}function fm(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 16 12 12 8 16"},child:[]},{tag:"line",attr:{x1:"12",y1:"12",x2:"12",y2:"21"},child:[]},{tag:"path",attr:{d:"M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"},child:[]},{tag:"polyline",attr:{points:"16 16 12 12 8 16"},child:[]}]})(i)}function wp(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"},child:[]},{tag:"polyline",attr:{points:"17 8 12 3 7 8"},child:[]},{tag:"line",attr:{x1:"12",y1:"3",x2:"12",y2:"15"},child:[]}]})(i)}function bp(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"8.5",cy:"7",r:"4"},child:[]},{tag:"polyline",attr:{points:"17 11 19 13 23 9"},child:[]}]})(i)}function hm(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"9",cy:"7",r:"4"},child:[]},{tag:"path",attr:{d:"M23 21v-2a4 4 0 0 0-3-3.87"},child:[]},{tag:"path",attr:{d:"M16 3.13a4 4 0 0 1 0 7.75"},child:[]}]})(i)}function Dt(i){return _({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"},child:[]}]})(i)}const Ru={Wrapper:ne.header`
        display: flex;
        align-items: center;
        padding: 0 18px;
        height: 68px;
        background: transparent;
    `,Main:ne.div`
        width: 100%;
        display: flex;
        align-items: center;
        .logoNameThemeToggleWrapper {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 16px;
            width: 100%;
        }
        .logoNameWrapper { display: flex; align-items: center; gap: 12px; min-width: 0; }
        .logoWrapper {
            position: relative;
            width: 44px;
            height: 44px;
            padding: 5px;
            flex: 0 0 auto;
            overflow: hidden;
            border: 1px solid var(--color-border-light);
            border-radius: 12px;
            background: #05070c;
            img { width: 100%; height: 100%; object-fit: contain; transition: opacity 180ms ease; }
            .logoSkeleton { position: absolute; inset: 0; background: var(--color-surface-2); }
        }
        .nameWrapper { display: grid; gap: 1px; min-width: 0; }
        .title { overflow: hidden; color: var(--color-text-primary); font-weight: 800; letter-spacing: 0.02em; text-overflow: ellipsis; white-space: nowrap; }
        .subTitle { color: var(--color-text-muted); font-size: 11px; white-space: nowrap; }
        .themeToggleBtn {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 9px 11px;
            color: var(--color-text-primary);
            background: var(--color-surface);
            border: 1px solid var(--color-border);
            border-radius: 10px;
            cursor: pointer;
            transition: border-color 180ms ease, box-shadow 180ms ease, text-shadow 180ms ease;
            .icon { display: inline-flex; font-size: 17px; }
            .label { color: var(--color-text-secondary); font-size: 12px; font-weight: 700; }
            &:hover, &:focus-visible { border-color: var(--color-border-light); box-shadow: 0 0 18px var(--color-shadow); text-shadow: 0 0 10px var(--color-primary); outline: none; }
        }
        @media (max-width: 520px) {
            .subTitle, .themeToggleBtn .label { display: none; }
        }
    `};function xm(){const[i,c]=Q.useState(!1),[l,p]=Q.useState(()=>localStorage.getItem("app-theme")||"dark"),u=l==="light"?"dark":"light";return Q.useEffect(()=>{l==="light"?document.documentElement.setAttribute("data-theme","light"):document.documentElement.removeAttribute("data-theme"),localStorage.setItem("app-theme",l)},[l]),n.jsx(Ru.Wrapper,{children:n.jsx(Ru.Main,{children:n.jsxs("div",{className:"logoNameThemeToggleWrapper",children:[n.jsxs("div",{className:"logoNameWrapper",children:[n.jsxs("div",{className:"logoWrapper",children:[!i&&n.jsx("div",{className:"logoSkeleton","aria-hidden":"true"}),n.jsx("img",{src:"/php-core-notes/logo.png",alt:"Ashish Ranjan logo",onLoad:()=>c(!0),style:{opacity:i?1:0}})]}),n.jsxs("div",{className:"nameWrapper",children:[n.jsx("div",{className:"title",children:"PHP Core Notes"}),n.jsx("div",{className:"subTitle",children:"At-a-glance PHP revision"})]})]}),n.jsxs("button",{type:"button",className:"themeToggleBtn",onClick:()=>p(u),"aria-label":`Switch to ${u} theme`,"aria-pressed":l==="light",children:[n.jsx("span",{className:"icon",children:l==="light"?n.jsx(tm,{}):n.jsx(cm,{})}),n.jsx("span",{className:"label",children:l==="light"?"Light":"Dark"})]})]})})})}function mm(i){return _({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.285 159.704l-234-156c-7.987-4.915-16.511-4.96-24.571 0l-234 156C3.714 163.703 0 170.847 0 177.989v155.999c0 7.143 3.714 14.286 9.715 18.286l234 156.022c7.987 4.915 16.511 4.96 24.571 0l234-156.022c6-3.999 9.715-11.143 9.715-18.286V177.989c-.001-7.142-3.715-14.286-9.716-18.285zM278 63.131l172.286 114.858-76.857 51.429L278 165.703V63.131zm-44 0v102.572l-95.429 63.715-76.857-51.429L234 63.131zM44 219.132l55.143 36.857L44 292.846v-73.714zm190 229.715L61.714 333.989l76.857-51.429L234 346.275v102.572zm22-140.858l-77.715-52 77.715-52 77.715 52-77.715 52zm22 140.858V346.275l95.429-63.715 76.857 51.429L278 448.847zm190-156.001l-55.143-36.857L468 219.132v73.714z"},child:[]}]})(i)}function gm(i){return _({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"},child:[]}]})(i)}function vm(i){return _({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(i)}function ym(i){return _({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(i)}function wm(i){return _({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"},child:[]}]})(i)}function bm(i){return _({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"},child:[]}]})(i)}function km(i){return _({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"},child:[]}]})(i)}const Fr={Wrapper:ne.footer`
        display: grid;
        gap: 22px;
        padding: 28px 0 12px;
        border-top: 1px solid var(--color-border);
        color: var(--color-text-muted);
        @media (max-width: 760px) {
            padding-top: 22px;
        }
    `,Intro:ne.div`
        display: grid;
        gap: 8px;
        max-width: 360px;
        strong {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: var(--color-text-primary);
            font-size: 0.92rem;
        }
        strong svg {
            color: var(--color-accent);
        }
        span {
            font-size: 0.78rem;
            line-height: 1.6;
        }
    `,Groups:ne.div`
        display: flex;
        gap: 32px;
        align-items: flex-start;
        @media (max-width: 760px) {
            flex-wrap: wrap;
            gap: 22px;
        }
    `,Group:ne.div`
        display: grid;
        gap: 10px;
    `,GroupTitle:ne.span`
        color: var(--color-text-primary);
        font-size: 0.76rem;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
    `,Links:ne.div`
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
    `,IconLink:ne.a`
        width: 34px;
        height: 34px;
        display: inline-grid;
        place-items: center;
        border: 1px solid var(--color-border);
        border-radius: 10px;
        color: var(--color-text-muted);
        transition: color 180ms ease, border-color 180ms ease, box-shadow 180ms ease, text-shadow 180ms ease, transform 180ms ease;
        &:hover,
        &:focus-visible {
            color: var(--color-accent);
            border-color: var(--color-accent);
            box-shadow: 0 0 16px color-mix(in srgb, var(--color-accent) 22%, transparent);
            text-shadow: 0 0 10px color-mix(in srgb, var(--color-accent) 40%, transparent);
            transform: translateY(-2px);
        }
        &:focus-visible {
            outline: 2px solid var(--color-accent);
            outline-offset: 3px;
        }
        svg {
            width: 16px;
            height: 16px;
        }
    `,Bottom:ne.div`
        display: flex;
        justify-content: space-between;
        gap: 16px;
        align-items: center;
        padding-top: 14px;
        border-top: 1px solid var(--color-border);
        font-size: 0.76rem;
        @media (max-width: 560px) {
            align-items: flex-start;
            flex-direction: column;
            gap: 6px;
        }
        a {
            color: var(--color-text-primary);
            font-weight: 700;
            transition: color 180ms ease, text-shadow 180ms ease;
            &:hover,
            &:focus-visible {
                color: var(--color-accent);
                text-shadow: 0 0 10px color-mix(in srgb, var(--color-accent) 38%, transparent);
            }
        }
    `},jm=[{label:"Portfolio",href:"https://www.ashishranjan.net/",icon:bm},{label:"GitHub",href:"https://github.com/a2rp",icon:vm},{label:"CodePen",href:"https://codepen.io/ash1198",icon:mm},{label:"LinkedIn",href:"https://www.linkedin.com/in/aashishranjan",icon:ym},{label:"Facebook",href:"https://www.facebook.com/theash.ashish/",icon:gm},{label:"YouTube",href:"https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1",icon:wm},{label:"Email",href:"mailto:ash.ranjan09@gmail.com",icon:km}],Nm=[{label:"Support",href:"https://a2rp-donation-page.netlify.app/",icon:Xx},{label:"Buy Me a Coffee",href:"https://buymeacoffee.com/a2rp",icon:Ax},{label:"Patreon",href:"https://patreon.com/a2rp",icon:pp}];function Ou({links:i}){return n.jsx(Fr.Links,{children:i.map(({label:c,href:l,icon:p})=>n.jsx(Fr.IconLink,{href:l,target:"_blank",rel:"noopener noreferrer","aria-label":c,title:c,children:n.jsx(p,{"aria-hidden":"true"})},c))})}function Sm(){return n.jsxs(Fr.Wrapper,{children:[n.jsxs(Fr.Intro,{children:[n.jsxs("strong",{children:[n.jsx(mr,{"aria-hidden":"true"})," PHP fundamentals, kept practical"]}),n.jsx("span",{children:"Structured notes for quick revision and steady backend foundations."})]}),n.jsxs(Fr.Groups,{children:[n.jsxs(Fr.Group,{children:[n.jsx(Fr.GroupTitle,{children:"Connect"}),n.jsx(Ou,{links:jm})]}),n.jsxs(Fr.Group,{children:[n.jsx(Fr.GroupTitle,{children:"Support"}),n.jsx(Ou,{links:Nm})]})]}),n.jsxs(Fr.Bottom,{children:[n.jsxs("span",{children:["Copyright ","©"," ",new Date().getFullYear()," ",n.jsx("a",{href:"https://www.ashishranjan.net/",target:"_blank",rel:"noopener noreferrer",children:"Ashish Ranjan"})]}),n.jsx("span",{children:"Built for focused revision"})]})]})}function Cm(){const[i,c]=Q.useState(!1);return Q.useEffect(()=>{const l=document.getElementById("notes-scroll");if(!l)return;const p=()=>c(l.scrollTop>320);return l.addEventListener("scroll",p,{passive:!0}),()=>l.removeEventListener("scroll",p)},[]),i?n.jsx("button",{type:"button","aria-label":"Scroll to top",title:"Scroll to top",onClick:()=>{var l;return(l=document.getElementById("notes-scroll"))==null?void 0:l.scrollTo({top:0,behavior:"smooth"})},style:{position:"fixed",right:"24px",bottom:"24px",zIndex:60,width:"42px",height:"42px",display:"grid",placeItems:"center",border:"1px solid var(--color-border-light)",borderRadius:"50%",background:"var(--color-surface)",color:"var(--color-accent)",cursor:"pointer",boxShadow:"0 8px 22px rgba(0, 0, 0, 0.25)"},children:n.jsx(up,{"aria-hidden":"true"})}):null}const Hu={Wrapper:ne.section`
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 50px;
    `,Content:ne.div`
        max-width: 1440px;
        width: 100%;
        background: linear-gradient(
            180deg,
            var(--color-surface),
            var(--color-surface-2)
        );
        border: 1px solid var(--color-border);
        border-radius: 18px;
        padding: 26px;
        box-shadow: 0 10px 30px var(--color-shadow);

        .top {
            margin-bottom: 18px;
        }

        .badge {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            padding: 8px 12px;
            border-radius: 999px;
            color: var(--color-text-secondary);
            font-size: 12px;
            margin-bottom: 12px;
        }

        .badgeIcon {
            display: grid;
            place-items: center;
            color: var(--color-primary);
            font-size: 14px;
        }

        .heading {
            font-size: 32px;
            margin-bottom: 10px;
            color: var(--color-text-primary);
        }

        .sub {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-size: 14px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 14px;
        }

        .card {
            grid-column: span 6;
            background: var(--color-bg);
            border: 1px solid var(--color-border);
            border-radius: 16px;
            padding: 16px;
        }

        .card.wide {
            grid-column: span 12;
        }

        .cardTitle {
            display: flex;
            align-items: center;
            gap: 10px;
            font-weight: 900;
            color: var(--color-text-primary);
            margin-bottom: 10px;
            font-size: 14px;
        }

        .cardIcon {
            width: 30px;
            height: 30px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            background: var(--color-surface);
            border: 1px solid var(--color-border);
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.75;
            font-size: 14px;
        }

        .meta {
            margin-top: 14px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            padding-top: 12px;
            border-top: 1px dashed var(--color-border-light);
        }

        .metaLeft {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            color: var(--color-text-muted);
            font-size: 12px;
        }

        .metaIcon {
            color: var(--color-primary);
            display: grid;
            place-items: center;
        }

        .metaLabel {
            font-weight: 800;
            color: var(--color-text-secondary);
        }

        .metaValue {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            color: var(--color-text-primary);
            font-size: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            padding: 7px 10px;
            border-radius: 999px;
            white-space: nowrap;
        }

        @media (max-width: 900px) {
            padding: 18px;

            .card {
                grid-column: span 12;
            }

            .heading {
                font-size: 26px;
            }
        }
    `},Tm=()=>{const i="2026-09-24T12:45:56.164Z",c=new Date(i).toLocaleString("en-US",{year:"numeric",month:"long",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1});return n.jsx(Hu.Wrapper,{children:n.jsxs(Hu.Content,{children:[n.jsxs("div",{className:"top",children:[n.jsxs("div",{className:"badge",children:[n.jsx("span",{className:"badgeIcon",children:n.jsx(de,{})}),"PHP core revision"]}),n.jsx("h2",{className:"heading",children:"About PHP Programming"}),n.jsx("p",{className:"sub",children:"A powerful server side scripting language designed for building dynamic web applications and backend systems."})]}),n.jsxs("div",{className:"grid",children:[n.jsxs("div",{className:"card",children:[n.jsxs("div",{className:"cardTitle",children:[n.jsx("span",{className:"cardIcon",children:n.jsx(jt,{})}),"What is PHP"]}),n.jsx("p",{className:"p",children:"PHP is a widely used open source scripting language especially suited for web development. It runs on the server, processes requests, interacts with databases, and generates dynamic HTML responses."})]}),n.jsxs("div",{className:"card",children:[n.jsxs("div",{className:"cardTitle",children:[n.jsx("span",{className:"cardIcon",children:n.jsx(Nr,{})}),"Why PHP matters"]}),n.jsx("p",{className:"p",children:"PHP powers a large portion of the web including content management systems, e commerce platforms, and APIs. It integrates easily with databases like MySQL and supports both procedural and object oriented programming."})]}),n.jsxs("div",{className:"card wide",children:[n.jsxs("div",{className:"cardTitle",children:[n.jsx("span",{className:"cardIcon",children:n.jsx(gr,{})}),"About php-core-notes"]}),n.jsx("p",{className:"p",children:"The php-core-notes project is designed as a focused backend revision system. It organizes syntax, forms, sessions, security, database interaction, and modern PHP features into a structured single page reference. The goal is clarity in request handling, clean architecture thinking, and secure backend development fundamentals."}),n.jsxs("div",{className:"meta",children:[n.jsxs("span",{className:"metaLeft",children:[n.jsx("span",{className:"metaIcon",children:n.jsx(ul,{})}),n.jsx("span",{className:"metaLabel",children:"Last updated"})]}),n.jsx("span",{className:"metaValue",children:c})]})]})]})]})})},Em={Wrapper:ne.section`
        width: 100%;
        margin-bottom: 10px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px 14px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            width: 28px;
            height: 28px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            background: var(--color-bg);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .icon {
            width: 36px;
            height: 36px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            font-size: 18px;
            flex: 0 0 auto;
        }

        .title {
            font-weight: 900;
            letter-spacing: 0.2px;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            white-space: nowrap;
            flex: 0 0 auto;
        }

        .topicBody {
            max-height: 0px;
            overflow: hidden;
            transition: max-height 260ms ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 14000px;
        }

        .intro {
            padding: 14px 14px;
            border-bottom: 1px dashed var(--color-border-light);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
        }

        .pill {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            color: var(--color-text-secondary);
            font-size: 12px;
            margin-bottom: 10px;
        }

        .pillIcon {
            display: grid;
            place-items: center;
            color: var(--color-primary);
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-size: 14px;
        }

        .note {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 16px;
            padding: 12px;
        }

        .noteTitle {
            font-weight: 900;
            margin-bottom: 8px;
            color: var(--color-text-primary);
        }

        .noteText {
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-size: 14px;
        }

        .sections {
            padding: 14px 14px;
            display: grid;
            gap: 14px;
        }

        .section {
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 16px;
            overflow: hidden;
        }

        .sectionTitle {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 12px 12px;
            border-bottom: 1px solid var(--color-border);
            background: var(--color-surface);
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 14px;
        }

        .sectionIcon {
            width: 30px;
            height: 30px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .rows {
            display: grid;
        }

        .row {
            display: grid;
            grid-template-columns: 1fr 240px;
            gap: 12px;
            padding: 12px;
        }

        .row + .row {
            border-top: 1px dashed var(--color-border-light);
        }

        .itemTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            margin-bottom: 8px;
            font-size: 14px;
        }

        .desc {
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-size: 14px;
        }

        .example {
            margin-top: 12px;
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            border-radius: 16px;
            overflow: hidden;
        }

        .exTop {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            color: var(--color-text-secondary);
            font-weight: 900;
            font-size: 12px;
            background: var(--color-surface);
        }

        .exIcon {
            display: grid;
            place-items: center;
            color: var(--color-primary);
            font-size: 14px;
        }

        .code {
            margin: 0;
            padding: 12px;
            font-size: 13px;
            line-height: 1.6;
            color: var(--color-text-secondary);
            overflow-x: auto;
            white-space: pre;
        }

        .rightHint {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 16px;
            padding: 12px;
            height: fit-content;
        }

        .hintChip {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 6px 10px;
            color: var(--color-text-secondary);
            font-size: 12px;
            margin-bottom: 10px;
        }

        .hintIcon {
            display: grid;
            place-items: center;
            color: var(--color-primary);
        }

        .hintText {
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-size: 13px;
        }

        .mini {
            margin-top: 12px;
            display: flex;
            align-items: center;
            gap: 10px;
            border: 1px dashed var(--color-border-light);
            background: var(--color-bg);
            border-radius: 14px;
            padding: 10px 12px;
            color: var(--color-text-secondary);
            font-size: 13px;
        }

        .miniIcon {
            width: 30px;
            height: 30px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        @media (max-width: 920px) {
            .row {
                grid-template-columns: 1fr;
            }
        }
    `},Pm=()=>{const[i,c]=Q.useState(!1),l=Q.useMemo(()=>[{key:"intro",title:"Introduction",icon:n.jsx(pp,{}),items:[{title:"What is PHP",text:"PHP is a server side scripting language used to build dynamic websites, backend logic, and APIs. The server runs PHP code and sends the result (usually HTML or JSON) to the browser."},{title:"How PHP works",text:"Browser requests a URL, the server runs PHP, PHP can talk to a database, then the server returns the final response to the browser. The browser never sees your PHP code."},{title:"Client vs Server",text:"Client is the browser (runs HTML, CSS, JavaScript). Server is where PHP runs (handles requests, connects to DB, returns HTML or JSON)."},{title:"PHP execution flow",text:"Request comes in → server routes it → PHP runs from top to bottom → optional DB/file work → output is generated → response is sent back."},{title:"PHP vs JavaScript",text:"JavaScript mostly runs in the browser for UI and interactions. PHP runs on the server for backend tasks. Both can be used together: JS for frontend, PHP for backend."},{title:"Installing PHP (XAMPP, MAMP, CLI)",text:"XAMPP (Windows/Linux) and MAMP (Mac) give PHP + Apache + MySQL quickly. CLI lets you run PHP in terminal for scripts and quick testing."}]},{key:"syntax",title:"Basic Syntax",icon:n.jsx(de,{}),items:[{title:"PHP tags",text:"PHP code is written inside PHP tags. Most common: <?php ... ?>. In a .php file you can mix HTML and PHP.",example:'<?php echo "Hello"; ?>'},{title:"echo and print",text:"echo and print output text. echo is slightly faster and can output multiple values. print returns 1 (rarely used).",example:`echo "Hi";
print "Hello";`},{title:"Statements and semicolons",text:"Most PHP statements end with a semicolon. Missing semicolon is a common beginner error.",example:`$x = 10;
echo $x;`},{title:"Case sensitivity",text:"Variable names are case sensitive ($name and $Name are different). Keywords like if, echo are not case sensitive, but stick to normal lowercase style."},{title:"Comments",text:"Use comments for notes. // single line, # single line, /* multi line */.",example:`// comment
# comment
/* multi line */`}]},{key:"variables",title:"Variables",icon:n.jsx(tl,{}),items:[{title:"Variable syntax",text:"Variables start with $ and are assigned using =.",example:`$name = "Ash";
$age = 24;`},{title:"Naming rules",text:"Must start with a letter or underscore after $. Can include numbers later. No spaces. Use meaningful names like $userName or $totalPrice."},{title:"Dynamic typing",text:"PHP is dynamically typed, so a variable can hold different types over time. Still, keep code predictable and avoid random type switching.",example:`$x = 5;
$x = "five";`},{title:"Variable variables",text:"A variable name can be stored in another variable. Used rarely, but good to know it exists.",example:`$a = "name";
$$a = "Ash";
echo $name;`},{title:"Constants (define, const)",text:"Constants are values that should not change. define() is common, const is used inside classes or at top level. Constant names are usually uppercase.",example:`define("APP_NAME", "php-core-notes");
const VERSION = "1.0.0";`}]}],[]),p=()=>c(u=>!u);return n.jsxs(Em.Wrapper,{className:i?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:p,"aria-expanded":i,children:[n.jsx("span",{className:"chev",children:i?n.jsx(Le,{}):n.jsx(ze,{})}),n.jsx("span",{className:"icon",children:n.jsx(jt,{})}),n.jsx("span",{className:"title",children:"PHP Fundamentals"}),n.jsx("span",{className:"meta",children:i?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${i?"open":""}`,children:[n.jsxs("div",{className:"intro",children:[n.jsxs("div",{className:"pill",children:[n.jsx("span",{className:"pillIcon",children:n.jsx(gn,{})}),"Server side basics in one view"]}),n.jsx("p",{className:"p",children:"This section covers what PHP is, how it fits in the web, and the syntax and variable basics you will use everywhere."}),n.jsxs("div",{className:"note",children:[n.jsx("div",{className:"noteTitle",children:"Quick mindset"}),n.jsx("div",{className:"noteText",children:"Browser runs HTML CSS JS. Server runs PHP. The browser only receives the output, not your PHP code."})]})]}),n.jsx("div",{className:"sections",children:l.map(u=>n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:u.icon}),u.title]}),n.jsx("div",{className:"rows",children:u.items.map((v,b)=>n.jsxs("div",{className:"row",children:[n.jsxs("div",{className:"left",children:[n.jsx("div",{className:"itemTitle",children:v.title}),n.jsx("div",{className:"desc",children:v.text}),v.example&&n.jsxs("div",{className:"example",children:[n.jsxs("div",{className:"exTop",children:[n.jsx("span",{className:"exIcon",children:n.jsx(um,{})}),"Example"]}),n.jsx("pre",{className:"code",children:n.jsx("code",{children:v.example})})]})]}),n.jsxs("div",{className:"rightHint",children:[n.jsxs("div",{className:"hintChip",children:[n.jsx("span",{className:"hintIcon",children:n.jsx(kn,{})}),"Remember"]}),n.jsxs("div",{className:"hintText",children:[u.key==="intro"&&"Server runs PHP and returns HTML or JSON.",u.key==="syntax"&&"Semicolons and correct tags prevent silly errors.",u.key==="variables"&&"Prefer clear variable names and constants for fixed values."]}),n.jsxs("div",{className:"mini",children:[n.jsx("span",{className:"miniIcon",children:n.jsx(wt,{})}),n.jsx("div",{className:"miniText",children:"Keep it predictable"})]})]})]},`${u.key}-${b}`))})]},u.key))})]})]})},_m={Wrapper:ne.section`
        width: 100%;
        margin-bottom: 10px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 10px 30px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev,
        .icon {
            width: 32px;
            height: 32px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            background: var(--color-bg);
            color: var(--color-primary);
        }

        .title {
            font-weight: 900;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
        }

        .topicBody {
            max-height: 0;
            overflow: hidden;
            transition: max-height 300ms ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 8000px;
        }

        .intro {
            padding: 14px;
            border-bottom: 1px dashed var(--color-border-light);
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .section {
            padding: 14px;
            border-bottom: 1px solid var(--color-border-light);
        }

        .sectionTitle {
            font-weight: 900;
            margin-bottom: 12px;
            color: var(--color-text-primary);
        }

        .row {
            margin-bottom: 12px;
        }

        .left {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 6px;
        }

        .typeName {
            font-weight: 800;
        }

        .right {
            color: var(--color-text-secondary);
            line-height: 1.6;
        }

        .example {
            margin-top: 6px;
            display: flex;
            gap: 8px;
            align-items: center;
            flex-wrap: wrap;
        }

        .exLabel {
            font-size: 12px;
            color: var(--color-text-muted);
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Courier New", monospace;
            font-size: 13px;
            color: var(--color-text-primary);
        }
    `},Lm=()=>{const[i,c]=Q.useState(!1),l=Q.useMemo(()=>[{title:"String",icon:n.jsx(Hi,{}),desc:"Text data enclosed in single or double quotes.",ex:'$name = "Ashish";'},{title:"Integer",icon:n.jsx(kn,{}),desc:"Whole numbers without decimals.",ex:"$age = 25;"},{title:"Float",icon:n.jsx(kn,{}),desc:"Numbers with decimal points.",ex:"$price = 99.99;"},{title:"Boolean",icon:n.jsx(fp,{}),desc:"Represents true or false.",ex:"$isLoggedIn = true;"},{title:"Array",icon:n.jsx(wt,{}),desc:"Collection of multiple values.",ex:'$colors = ["red", "blue"];'},{title:"NULL",icon:n.jsx(wt,{}),desc:"Represents a variable with no value.",ex:"$data = null;"},{title:"Resource",icon:n.jsx(wt,{}),desc:"Special type holding external resources like file handles or database connections.",ex:'$file = fopen("test.txt", "r");'},{title:"Object",icon:n.jsx(wt,{}),desc:"Instance of a class containing properties and methods.",ex:"$user = new User();"}],[]),p=()=>c(u=>!u);return n.jsxs(_m.Wrapper,{children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:p,"aria-expanded":i,children:[n.jsx("span",{className:"chev",children:i?n.jsx(Le,{}):n.jsx(ze,{})}),n.jsx("span",{className:"icon",children:n.jsx(de,{})}),n.jsx("span",{className:"title",children:"Data Types"}),n.jsx("span",{className:"meta",children:i?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${i?"open":""}`,children:[n.jsx("div",{className:"intro",children:n.jsx("p",{children:"PHP is dynamically typed. A variable can hold different types at runtime. Understanding types prevents bugs and unexpected behavior."})}),n.jsxs("div",{className:"section",children:[n.jsx("div",{className:"sectionTitle",children:"Core Data Types"}),l.map((u,v)=>n.jsxs("div",{className:"row",children:[n.jsxs("div",{className:"left",children:[n.jsx("span",{className:"typeIcon",children:u.icon}),n.jsx("span",{className:"typeName",children:u.title})]}),n.jsxs("div",{className:"right",children:[n.jsx("div",{className:"desc",children:u.desc}),n.jsxs("div",{className:"example",children:[n.jsx("span",{className:"exLabel",children:"Example"}),n.jsx("span",{className:"mono",children:u.ex})]})]})]},v))]}),n.jsxs("div",{className:"section",children:[n.jsx("div",{className:"sectionTitle",children:"Type Checking"}),n.jsx("div",{className:"row",children:n.jsxs("div",{className:"right",children:[n.jsxs("div",{className:"desc",children:[n.jsx("strong",{children:"var_dump()"})," shows value and type."]}),n.jsx("div",{className:"mono",children:"var_dump($name);"})]})}),n.jsx("div",{className:"row",children:n.jsxs("div",{className:"right",children:[n.jsxs("div",{className:"desc",children:[n.jsx("strong",{children:"gettype()"})," returns type as string."]}),n.jsx("div",{className:"mono",children:"gettype($age);"})]})}),n.jsx("div",{className:"row",children:n.jsxs("div",{className:"right",children:[n.jsx("div",{className:"desc",children:"Type check helpers: is_string, is_array, is_int"}),n.jsxs("div",{className:"mono",children:["is_string($name);","  ","is_array($colors);","  ","is_int($age);"]})]})})]}),n.jsxs("div",{className:"section",children:[n.jsx("div",{className:"sectionTitle",children:"Type Casting"}),n.jsx("div",{className:"row",children:n.jsxs("div",{className:"right",children:[n.jsx("div",{className:"desc",children:"Convert value to specific type."}),n.jsxs("div",{className:"mono",children:["(int)$value ","  ","(string)$value ","  ","(bool)$value ","  ","(float)$value"]})]})})]})]})]})},zm={Wrapper:ne.section`
        width: 100%;
        margin-bottom: 10px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px 14px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            width: 28px;
            height: 28px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            background: var(--color-bg);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .icon {
            width: 36px;
            height: 36px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            font-size: 18px;
            flex: 0 0 auto;
        }

        .title {
            font-weight: 900;
            letter-spacing: 0.2px;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            white-space: nowrap;
            flex: 0 0 auto;
        }

        .topicBody {
            max-height: 0px;
            overflow: hidden;
            transition: max-height 260ms ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 12000px;
        }

        .intro {
            padding: 14px 14px;
            border-bottom: 1px dashed var(--color-border-light);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
        }

        .pill {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            color: var(--color-text-secondary);
            font-size: 12px;
            margin-bottom: 10px;
        }

        .pillIcon {
            display: grid;
            place-items: center;
            color: var(--color-primary);
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .note {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 16px;
            padding: 12px;
        }

        .noteTitle {
            font-weight: 900;
            margin-bottom: 8px;
            color: var(--color-text-primary);
        }

        .noteText {
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-size: 14px;
        }

        .sections {
            padding: 14px 14px;
            display: grid;
            gap: 14px;
        }

        .section {
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 16px;
            overflow: hidden;
        }

        .sectionTitle {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 12px 12px;
            border-bottom: 1px solid var(--color-border);
            background: var(--color-surface);
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 14px;
        }

        .sectionIcon {
            width: 30px;
            height: 30px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .rows {
            display: grid;
        }

        .row {
            display: grid;
            grid-template-columns: 90px 1fr;
            gap: 12px;
            padding: 12px;
        }

        .row + .row {
            border-top: 1px dashed var(--color-border-light);
        }

        .op {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-weight: 900;
            color: var(--color-text-primary);
            background: var(--color-surface);
            border: 1px solid var(--color-border);
            border-radius: 12px;
            padding: 10px 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 44px;
        }

        .desc {
            color: var(--color-text-secondary);
            line-height: 1.65;
            font-size: 14px;
        }

        .ex {
            margin-top: 8px;
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            align-items: center;
        }

        .exLabel {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            padding: 5px 8px;
            border-radius: 999px;
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            color: var(--color-text-primary);
            font-size: 13px;
        }

        @media (max-width: 720px) {
            .row {
                grid-template-columns: 1fr;
            }

            .op {
                justify-content: flex-start;
            }
        }
    `},Im=()=>{const[i,c]=Q.useState(!1),l=Q.useMemo(()=>[{key:"arithmetic",title:"Arithmetic",icon:n.jsx(pl,{}),lines:[{op:"/",text:"Division. In PHP, / returns float if needed.",example:"10 / 4 -> 2.5"},{op:"%",text:"Modulus. Remainder after division.",example:"10 % 4 -> 2"},{op:"**",text:"Exponentiation. Power operator.",example:"2 ** 3 -> 8"}]},{key:"assignment",title:"Assignment",icon:n.jsx(qx,{}),lines:[{op:"=",text:"Assign value to a variable.",example:"$x = 10"},{op:"+=",text:"Add and assign.",example:"$x += 5 -> same as $x = $x + 5"},{op:"-=",text:"Subtract and assign.",example:"$x -= 2 -> same as $x = $x - 2"},{op:".=",text:"Append string and assign.",example:'$name .= " Ranjan"'}]},{key:"comparison",title:"Comparison",icon:n.jsx(gp,{}),lines:[{op:"==",text:"Equal (loose). May type juggle.",example:'"5" == 5 -> true'},{op:"===",text:"Identical (strict). Value + type must match.",example:'"5" === 5 -> false'},{op:"!=",text:"Not equal (loose).",example:'"5" != 5 -> false'},{op:"!==",text:"Not identical (strict).",example:'"5" !== 5 -> true'},{op:"<",text:"Less than.",example:"3 < 5 -> true"},{op:"<=",text:"Less than or equal.",example:"5 <= 5 -> true"},{op:">=",text:"Greater than or equal.",example:"7 >= 5 -> true"}]},{key:"logical",title:"Logical",icon:n.jsx(kn,{}),lines:[{op:"&&",text:"AND. Both conditions must be true.",example:"true && false -> false"},{op:"||",text:"OR. Any one condition true -> true.",example:"true || false -> true"},{op:"!",text:"NOT. Flips boolean.",example:"!true -> false"},{op:"and",text:"AND keyword. Same idea as &&, but lower precedence.",example:"$ok = true and false -> tricky (precedence)"},{op:"or",text:"OR keyword. Same idea as ||, but lower precedence.",example:"$ok = false or true -> tricky (precedence)"}]},{key:"stringOps",title:"String Operators",icon:n.jsx(Hi,{}),lines:[{op:".",text:"Concatenation. Joins strings.",example:'"Hello" . " World" -> "Hello World"'},{op:".=",text:"Concatenate and assign.",example:'$msg .= "!"'}]}],[]),p=()=>c(u=>!u);return n.jsxs(zm.Wrapper,{className:i?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:p,"aria-expanded":i,children:[n.jsx("span",{className:"chev",children:i?n.jsx(Le,{}):n.jsx(ze,{})}),n.jsx("span",{className:"icon",children:n.jsx(de,{})}),n.jsx("span",{className:"title",children:"Operators"}),n.jsx("span",{className:"meta",children:i?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${i?"open":""}`,children:[n.jsxs("div",{className:"intro",children:[n.jsxs("div",{className:"pill",children:[n.jsx("span",{className:"pillIcon",children:n.jsx(de,{})}),"Quick reference for common operators"]}),n.jsx("p",{className:"p",children:"Operators help you calculate, compare, combine, and make decisions. In PHP, remember the difference between loose comparison (==) and strict comparison (===)."}),n.jsxs("div",{className:"note",children:[n.jsx("div",{className:"noteTitle",children:"Important"}),n.jsx("div",{className:"noteText",children:"Prefer strict checks (=== and !==) to avoid unexpected type juggling."})]})]}),n.jsx("div",{className:"sections",children:l.map(u=>n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:u.icon}),u.title]}),n.jsx("div",{className:"rows",children:u.lines.map((v,b)=>n.jsxs("div",{className:"row",children:[n.jsx("div",{className:"op",children:v.op}),n.jsxs("div",{className:"text",children:[n.jsx("div",{className:"desc",children:v.text}),n.jsxs("div",{className:"ex",children:[n.jsx("span",{className:"exLabel",children:"Example"}),n.jsx("span",{className:"mono",children:v.example})]})]})]},`${u.key}-${b}`))})]},u.key))})]})]})},$m={Wrapper:ne.section`
        width: 100%;
        margin-bottom: 10px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        overflow: hidden;
        box-shadow: 0 12px 30px var(--color-shadow);

        .header {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px;
            background: transparent;
            text-align: left;
        }

        .header:hover {
            background: var(--color-surface-2);
        }

        .chev {
            width: 28px;
            height: 28px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            background: var(--color-bg);
        }

        .icon {
            width: 36px;
            height: 36px;
            display: grid;
            place-items: center;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
        }

        .title {
            flex: 1;
            font-weight: 900;
            color: var(--color-text-primary);
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            padding: 6px 10px;
            border-radius: 999px;
            background: var(--color-bg);
        }

        .body {
            max-height: 0;
            overflow: hidden;
            transition: max-height 300ms ease;
            border-top: 1px solid var(--color-border);
        }

        .body.open {
            max-height: 6000px;
        }

        .intro {
            padding: 14px;
            color: var(--color-text-secondary);
            border-bottom: 1px dashed var(--color-border-light);
        }

        .section {
            padding: 14px;
            border-bottom: 1px solid var(--color-border);
        }

        .sectionTitle {
            font-weight: 900;
            margin-bottom: 12px;
            display: flex;
            align-items: center;
            gap: 8px;
            color: var(--color-text-primary);
        }

        .sectionIcon {
            color: var(--color-primary);
        }

        .row {
            display: grid;
            grid-template-columns: 110px 1fr;
            gap: 12px;
            padding: 10px 0;
        }

        .keyword {
            font-family: ui-monospace, monospace;
            font-weight: 900;
            color: var(--color-text-primary);
            background: var(--color-bg);
            border: 1px solid var(--color-border);
            border-radius: 10px;
            padding: 8px;
            text-align: center;
        }

        .desc {
            color: var(--color-text-secondary);
            margin-bottom: 6px;
        }

        .example {
            display: flex;
            gap: 8px;
            align-items: center;
            flex-wrap: wrap;
        }

        .label {
            font-size: 12px;
            color: var(--color-text-muted);
        }

        .mono {
            font-family: ui-monospace, monospace;
            font-size: 13px;
            color: var(--color-text-primary);
        }

        @media (max-width: 700px) {
            .row {
                grid-template-columns: 1fr;
            }
        }
    `},Mm=()=>{const[i,c]=Q.useState(!1),l=Q.useMemo(()=>[{key:"conditionals",title:"Conditionals",icon:n.jsx(Gx,{}),items:[{name:"if",desc:"Execute block if condition is true.",example:"if ($age >= 18) { echo 'Adult'; }"},{name:"else",desc:"Runs when if condition is false.",example:"else { echo 'Minor'; }"},{name:"elseif",desc:"Multiple condition checks.",example:"elseif ($age >= 13) { echo 'Teen'; }"},{name:"switch",desc:"Compare one value against multiple cases.",example:"switch ($role) { case 'admin': break; }"},{name:"match",desc:"Modern PHP expression. Strict comparison and returns value.",example:"$label = match($status) { 200 => 'OK', 404 => 'Not Found' };"}]},{key:"loops",title:"Loops",icon:n.jsx(om,{}),items:[{name:"while",desc:"Runs while condition is true.",example:"while ($i < 5) { $i++; }"},{name:"do while",desc:"Executes at least once before checking condition.",example:"do { $i++; } while ($i < 5);"},{name:"for",desc:"Loop with counter initialization, condition, increment.",example:"for ($i = 0; $i < 5; $i++) { }"},{name:"foreach",desc:"Best for arrays and collections.",example:"foreach ($users as $user) { echo $user; }"},{name:"break",desc:"Exit loop or switch immediately.",example:"if ($i == 3) break;"},{name:"continue",desc:"Skip current iteration and move to next.",example:"if ($i == 3) continue;"}]}],[]),p=()=>c(u=>!u);return n.jsxs($m.Wrapper,{children:[n.jsxs("button",{type:"button",className:"header",onClick:p,"aria-expanded":i,children:[n.jsx("span",{className:"chev",children:i?n.jsx(Le,{}):n.jsx(ze,{})}),n.jsx("span",{className:"icon",children:n.jsx(de,{})}),n.jsx("span",{className:"title",children:"Control Structures"}),n.jsx("span",{className:"meta",children:i?"Collapse":"Expand"})]}),n.jsxs("div",{className:`body ${i?"open":""}`,children:[n.jsx("div",{className:"intro",children:"Control structures control execution flow. They decide what runs and how many times it runs."}),l.map(u=>n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:u.icon}),u.title]}),u.items.map((v,b)=>n.jsxs("div",{className:"row",children:[n.jsx("div",{className:"keyword",children:v.name}),n.jsxs("div",{className:"content",children:[n.jsx("div",{className:"desc",children:v.desc}),n.jsxs("div",{className:"example",children:[n.jsx("span",{className:"label",children:"Example"}),n.jsx("span",{className:"mono",children:v.example})]})]})]},b))]},u.key))]})]})},Rm={Wrapper:ne.section`
        width: 100%;
        margin-bottom: 10px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px 14px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            width: 28px;
            height: 28px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            background: var(--color-bg);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .icon {
            width: 36px;
            height: 36px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            font-size: 18px;
            flex: 0 0 auto;
        }

        .title {
            font-weight: 900;
            letter-spacing: 0.2px;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            white-space: nowrap;
            flex: 0 0 auto;
        }

        .topicBody {
            max-height: 0px;
            overflow: hidden;
            transition: max-height 260ms ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 20000px;
        }

        .intro {
            padding: 14px 14px;
            border-bottom: 1px dashed var(--color-border-light);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
        }

        .pill {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            color: var(--color-text-secondary);
            font-size: 12px;
            margin-bottom: 10px;
        }

        .pillIcon {
            display: grid;
            place-items: center;
            color: var(--color-primary);
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .note {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 16px;
            padding: 12px;
        }

        .noteTitle {
            font-weight: 900;
            margin-bottom: 8px;
            color: var(--color-text-primary);
        }

        .noteText {
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-size: 14px;
        }

        .cards {
            padding: 14px 14px;
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 14px;
        }

        .card {
            grid-column: span 4;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 16px;
            padding: 14px;
            overflow: hidden;
        }

        .cardTitle {
            display: flex;
            align-items: center;
            gap: 10px;
            font-weight: 900;
            color: var(--color-text-primary);
            margin-bottom: 10px;
            font-size: 14px;
        }

        .cardIcon {
            width: 30px;
            height: 30px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            background: var(--color-surface);
            border: 1px solid var(--color-border);
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .cardDesc {
            margin: 0 0 12px 0;
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-size: 14px;
        }

        .codeBlock {
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            border-radius: 16px;
            overflow: hidden;
        }

        .codeTop {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            color: var(--color-text-secondary);
            font-weight: 800;
            font-size: 12px;
            letter-spacing: 0.2px;
            background: var(--color-surface);
        }

        .codeIcon {
            display: grid;
            place-items: center;
            color: var(--color-primary);
            font-size: 14px;
        }

        .code {
            margin: 0;
            padding: 12px;
            font-size: 13px;
            line-height: 1.6;
            color: var(--color-text-secondary);
            overflow-x: auto;
            white-space: pre;
        }

        .tips {
            list-style: none;
            padding-left: 0;
            margin: 12px 0 0 0;
            display: grid;
            gap: 10px;
        }

        .tips li {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.6;
        }

        .dot {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--color-primary);
            flex: 0 0 auto;
            margin-top: 7px;
        }

        .functions {
            padding: 0 14px 14px 14px;
        }

        .funcWrap {
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 16px;
            overflow: hidden;
        }

        .funcTitle {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 12px 12px;
            border-bottom: 1px solid var(--color-border);
            background: var(--color-surface);
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 14px;
        }

        .funcIcon {
            width: 30px;
            height: 30px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .funcDesc {
            margin: 0;
            padding: 12px 12px 0 12px;
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-size: 14px;
        }

        .funcTable {
            padding: 12px;
            display: grid;
            gap: 10px;
        }

        .funcRow {
            display: grid;
            grid-template-columns: 140px 1fr;
            gap: 12px;
            padding: 12px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            background: var(--color-surface-2);
        }

        .fnName {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-weight: 900;
            color: var(--color-text-primary);
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 12px;
            padding: 10px 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 44px;
        }

        .fnUse {
            color: var(--color-text-secondary);
            line-height: 1.6;
            font-size: 14px;
        }

        .fnEx {
            margin-top: 8px;
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            align-items: center;
        }

        .exLabel {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            padding: 5px 8px;
            border-radius: 999px;
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            color: var(--color-text-primary);
            font-size: 13px;
        }

        @media (max-width: 980px) {
            .card {
                grid-column: span 12;
            }

            .funcRow {
                grid-template-columns: 1fr;
            }

            .fnName {
                justify-content: flex-start;
            }
        }
    `},Om=()=>{const[i,c]=Q.useState(!1),l=Q.useMemo(()=>[{key:"indexed",title:"Indexed Arrays",icon:n.jsx(em,{}),desc:"Values are stored with numeric keys starting from 0.",exampleTitle:"Example",example:`$nums = [10, 20, 30];
$nums[0] -> 10`,tips:["Best for ordered lists","Use [] to append new item"]},{key:"associative",title:"Associative Arrays",icon:n.jsx(kn,{}),desc:"Values are stored with custom string keys (key-value pairs).",exampleTitle:"Example",example:`$user = ["name" => "Ash", "role" => "Dev"];
$user["name"] -> "Ash"`,tips:["Best for objects-like data","Keys are usually strings"]},{key:"multi",title:"Multidimensional Arrays",icon:n.jsx(gr,{}),desc:"Arrays inside arrays. Useful for tables, lists of objects, nested data.",exampleTitle:"Example",example:`$users = [
  ["name" => "A", "age" => 20],
  ["name" => "B", "age" => 22]
];
$users[1]["name"] -> "B"`,tips:["Common in API responses","Loop using foreach for readability"]},{key:"functions",title:"Array Functions",icon:n.jsx(vp,{}),desc:"Most used built-in functions for real projects.",rows:[{fn:"count",use:"Get total number of items in array.",ex:"count([1,2,3]) -> 3"},{fn:"array_push",use:"Add one or more items to the end.",ex:"array_push($arr, 4, 5)"},{fn:"array_pop",use:"Remove and return last item.",ex:"array_pop($arr)"},{fn:"array_merge",use:"Merge arrays into one.",ex:"array_merge($a, $b)"},{fn:"array_keys",use:"Get all keys from an array.",ex:'array_keys(["a"=>1,"b"=>2]) -> ["a","b"]'},{fn:"array_values",use:"Get all values (reindexes numeric keys).",ex:'array_values(["a"=>1,"b"=>2]) -> [1,2]'},{fn:"in_array",use:"Check if value exists in array.",ex:'in_array("red", ["red","blue"]) -> true'},{fn:"explode",use:"Split string into array by delimiter.",ex:'explode(",", "a,b,c") -> ["a","b","c"]'},{fn:"implode",use:"Join array into string with delimiter.",ex:'implode("-", ["a","b","c"]) -> "a-b-c"'},{fn:"sort",use:"Sort values and reindex keys (ascending).",ex:"sort($nums)"},{fn:"asort",use:"Sort by values but keep keys (ascending).",ex:"asort($scores)"},{fn:"ksort",use:"Sort by keys (ascending).",ex:"ksort($user)"}],noteTitle:"Quick reminder",noteText:"sort resets keys. Use asort if you must preserve key-value mapping. Use ksort when key order matters."}],[]),p=()=>c(u=>!u);return n.jsxs(Rm.Wrapper,{className:i?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:p,"aria-expanded":i,children:[n.jsx("span",{className:"chev",children:i?n.jsx(Le,{}):n.jsx(ze,{})}),n.jsx("span",{className:"icon",children:n.jsx(Yx,{})}),n.jsx("span",{className:"title",children:"Arrays"}),n.jsx("span",{className:"meta",children:i?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${i?"open":""}`,children:[n.jsxs("div",{className:"intro",children:[n.jsxs("div",{className:"pill",children:[n.jsx("span",{className:"pillIcon",children:n.jsx(de,{})}),"Most used data structure in PHP"]}),n.jsx("p",{className:"p",children:"PHP arrays are very flexible. They can behave like lists (indexed arrays) and like objects/maps (associative arrays). Many real apps use nested arrays for data and API responses."}),n.jsxs("div",{className:"note",children:[n.jsx("div",{className:"noteTitle",children:"Best practice"}),n.jsx("div",{className:"noteText",children:"Use associative arrays for named fields. Use indexed arrays for ordered lists. Keep nesting readable."})]})]}),n.jsx("div",{className:"cards",children:l.filter(u=>u.key!=="functions").map(u=>n.jsxs("div",{className:"card",children:[n.jsxs("div",{className:"cardTitle",children:[n.jsx("span",{className:"cardIcon",children:u.icon}),u.title]}),n.jsx("p",{className:"cardDesc",children:u.desc}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(de,{})}),u.exampleTitle]}),n.jsx("pre",{className:"code",children:u.example})]}),n.jsx("ul",{className:"tips",children:u.tips.map((v,b)=>n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),v]},`${u.key}-tip-${b}`))})]},u.key))}),n.jsx("div",{className:"functions",children:l.filter(u=>u.key==="functions").map(u=>n.jsxs("div",{className:"funcWrap",children:[n.jsxs("div",{className:"funcTitle",children:[n.jsx("span",{className:"funcIcon",children:u.icon}),u.title]}),n.jsx("p",{className:"funcDesc",children:u.desc}),n.jsx("div",{className:"funcTable",children:u.rows.map((v,b)=>n.jsxs("div",{className:"funcRow",children:[n.jsx("div",{className:"fnName",children:v.fn}),n.jsxs("div",{className:"fnInfo",children:[n.jsx("div",{className:"fnUse",children:v.use}),n.jsxs("div",{className:"fnEx",children:[n.jsx("span",{className:"exLabel",children:"Example"}),n.jsx("span",{className:"mono",children:v.ex})]})]})]},`fn-${b}`))}),n.jsxs("div",{className:"note",children:[n.jsx("div",{className:"noteTitle",children:u.noteTitle}),n.jsx("div",{className:"noteText",children:u.noteText})]})]},u.key))})]})]})},Hm={Wrapper:ne.section`
        width: 100%;
        margin-bottom: 10px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px 14px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            width: 28px;
            height: 28px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            background: var(--color-bg);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .icon {
            width: 36px;
            height: 36px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            font-size: 18px;
            flex: 0 0 auto;
        }

        .title {
            font-weight: 900;
            letter-spacing: 0.2px;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            white-space: nowrap;
            flex: 0 0 auto;
        }

        .topicBody {
            max-height: 0px;
            overflow: hidden;
            transition: max-height 260ms ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 12000px;
        }

        .intro {
            padding: 14px 14px;
            border-bottom: 1px dashed var(--color-border-light);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
        }

        .pill {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            color: var(--color-text-secondary);
            font-size: 12px;
            margin-bottom: 10px;
        }

        .pillIcon {
            display: grid;
            place-items: center;
            color: var(--color-primary);
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .note {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 16px;
            padding: 12px;
        }

        .noteTitle {
            font-weight: 900;
            margin-bottom: 8px;
            color: var(--color-text-primary);
        }

        .noteText {
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-size: 14px;
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            color: var(--color-text-primary);
        }

        .list {
            padding: 14px 14px;
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 14px;
        }

        .card {
            grid-column: span 6;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 16px;
            padding: 14px;
        }

        .cardTop {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cardIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            color: var(--color-primary);
            flex: 0 0 auto;
            font-size: 16px;
        }

        .cardTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 14px;
        }

        .desc {
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-size: 14px;
        }

        .example {
            margin-top: 10px;
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            align-items: center;
        }

        .exLabel {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            padding: 5px 8px;
            border-radius: 999px;
        }

        .noteRow {
            margin-top: 10px;
            display: flex;
            align-items: flex-start;
            gap: 10px;
            padding-top: 10px;
            border-top: 1px dashed var(--color-border-light);
        }

        .notePill {
            font-size: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            color: var(--color-text-muted);
            padding: 5px 8px;
            border-radius: 999px;
            flex: 0 0 auto;
            white-space: nowrap;
        }

        .noteRow .noteText {
            margin: 0;
            font-size: 13px;
            color: var(--color-text-secondary);
            line-height: 1.6;
        }

        @media (max-width: 900px) {
            .card {
                grid-column: span 12;
            }
        }
    `},Bm=()=>{const[i,c]=Q.useState(!1),l=Q.useMemo(()=>[{key:"strlen",title:"strlen",icon:n.jsx(Hi,{}),what:"Returns the length of a string (number of characters).",example:'strlen("hello") -> 5',note:"If you deal with multibyte characters (like Hindi), use mb_strlen with mbstring extension."},{key:"strpos",title:"strpos",icon:n.jsx(fl,{}),what:"Finds the position of the first occurrence of a substring. Returns an index or false.",example:'strpos("hello world", "world") -> 6',note:"Important: strpos can return 0 (found at start). Always check with !== false."},{key:"substr",title:"substr",icon:n.jsx(im,{}),what:"Returns a portion of a string using start index and optional length.",example:'substr("abcdef", 1, 3) -> "bcd"',note:"Negative start or length can count from the end."},{key:"str_replace",title:"str_replace",icon:n.jsx(mp,{}),what:"Replaces all occurrences of a search string with a replacement string.",example:'str_replace("cat", "dog", "cat and cat") -> "dog and dog"',note:"This is case-sensitive. For case-insensitive, use str_ireplace."},{key:"trim",title:"trim",icon:n.jsx(Vx,{}),what:"Removes whitespace from the start and end of a string.",example:'trim("  hello  ") -> "hello"',note:"Useful before validation and saving user input."},{key:"strtolower",title:"strtolower",icon:n.jsx(Bx,{}),what:"Converts a string to lowercase.",example:'strtolower("HELLO") -> "hello"',note:"Used for case-insensitive comparisons like emails and usernames."},{key:"strtoupper",title:"strtoupper",icon:n.jsx(up,{}),what:"Converts a string to uppercase.",example:'strtoupper("hello") -> "HELLO"',note:"Good for display formatting, not for strict identifiers."},{key:"htmlspecialchars",title:"htmlspecialchars",icon:n.jsx(mr,{}),what:"Escapes special characters for safe HTML output to prevent XSS.",example:'htmlspecialchars("<script>") -> "&lt;script&gt;"',note:"Use when showing user input in HTML. This is a security must-know."},{key:"nl2br",title:"nl2br",icon:n.jsx(Fx,{}),what:"Converts newline characters (\\n) into <br> tags for HTML display.",example:'nl2br("line1\\nline2") -> "line1<br />\\nline2"',note:"Often used for displaying textarea content in HTML."}],[]),p=()=>c(u=>!u);return n.jsxs(Hm.Wrapper,{className:i?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:p,"aria-expanded":i,children:[n.jsx("span",{className:"chev",children:i?n.jsx(Le,{}):n.jsx(ze,{})}),n.jsx("span",{className:"icon",children:n.jsx(de,{})}),n.jsx("span",{className:"title",children:"Strings"}),n.jsx("span",{className:"meta",children:i?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${i?"open":""}`,children:[n.jsxs("div",{className:"intro",children:[n.jsxs("div",{className:"pill",children:[n.jsx("span",{className:"pillIcon",children:n.jsx(Hi,{})}),"Most used PHP string helpers"]}),n.jsx("p",{className:"p",children:"Strings show up everywhere: forms, APIs, database data, file content. These functions cover the most common tasks like search, slicing, formatting, and safe HTML output."}),n.jsxs("div",{className:"note",children:[n.jsx("div",{className:"noteTitle",children:"Security tip"}),n.jsxs("div",{className:"noteText",children:["If you output user input inside HTML, use"," ",n.jsx("span",{className:"mono",children:"htmlspecialchars"})," to prevent XSS."]})]})]}),n.jsx("div",{className:"list",children:l.map(u=>n.jsxs("div",{className:"card",children:[n.jsxs("div",{className:"cardTop",children:[n.jsx("span",{className:"cardIcon",children:u.icon}),n.jsx("div",{className:"cardTitle",children:u.title})]}),n.jsx("div",{className:"desc",children:u.what}),n.jsxs("div",{className:"example",children:[n.jsx("span",{className:"exLabel",children:"Example"}),n.jsx("span",{className:"mono",children:u.example})]}),n.jsxs("div",{className:"noteRow",children:[n.jsx("span",{className:"notePill",children:"Note"}),n.jsx("span",{className:"noteText",children:u.note})]})]},u.key))})]})]})},Am={Wrapper:ne.section`
        width: 100%;
        margin-bottom: 10px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        overflow: hidden;
        box-shadow: 0 12px 30px var(--color-shadow);

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px;
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            width: 28px;
            height: 28px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            background: var(--color-bg);
        }

        .icon {
            width: 36px;
            height: 36px;
            display: grid;
            place-items: center;
            border-radius: 12px;
            background: var(--color-bg);
            border: 1px solid var(--color-border);
            color: var(--color-primary);
        }

        .title {
            font-weight: 900;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            border: 1px solid var(--color-border);
            padding: 6px 10px;
            border-radius: 999px;
            background: var(--color-bg);
        }

        .topicBody {
            max-height: 0;
            overflow: hidden;
            transition: max-height 260ms ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 8000px;
        }

        .intro {
            padding: 14px;
            border-bottom: 1px dashed var(--color-border-light);
        }

        .pill {
            display: inline-flex;
            gap: 8px;
            align-items: center;
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            font-size: 12px;
            margin-bottom: 10px;
        }

        .p {
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .sections {
            padding: 14px;
            display: grid;
            gap: 14px;
        }

        .section {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            overflow: hidden;
            background: var(--color-bg);
        }

        .sectionTitle {
            padding: 10px 12px;
            font-weight: 900;
            display: flex;
            align-items: center;
            gap: 10px;
            background: var(--color-surface);
            border-bottom: 1px solid var(--color-border);
        }

        .sectionIcon {
            width: 28px;
            height: 28px;
            display: grid;
            place-items: center;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
        }

        .content {
            padding: 12px;
        }

        .desc {
            margin-bottom: 10px;
            color: var(--color-text-secondary);
            line-height: 1.6;
            font-size: 14px;
        }

        pre {
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            padding: 12px;
            border-radius: 12px;
            overflow-x: auto;
            font-size: 13px;
        }

        code {
            font-family: ui-monospace, monospace;
        }
    `},Fm=()=>{const[i,c]=Q.useState(!1),l=Q.useMemo(()=>[{key:"creating",title:"Creating Functions",icon:n.jsx(de,{}),text:"Functions group reusable logic. Use the function keyword.",code:`function greet() {
    echo "Hello";
}`},{key:"parameters",title:"Parameters",icon:n.jsx(lm,{}),text:"Parameters allow passing data into functions.",code:`function greet($name) {
    echo "Hello " . $name;
}`},{key:"default",title:"Default Parameters",icon:n.jsx(gr,{}),text:"You can assign default values to parameters.",code:`function greet($name = "Guest") {
    echo "Hello " . $name;
}`},{key:"return",title:"Return Values",icon:n.jsx(Dx,{}),text:"Use return to send value back from function.",code:`function add($a, $b) {
    return $a + $b;
}`},{key:"types",title:"Type Declarations",icon:n.jsx(Dt,{}),text:"PHP supports parameter and return types.",code:`function add(int $a, int $b): int {
    return $a + $b;
}`},{key:"anonymous",title:"Anonymous Functions",icon:n.jsx(de,{}),text:"Functions without name. Often used as callbacks.",code:`$greet = function($name) {
    return "Hello " . $name;
};`},{key:"arrow",title:"Arrow Functions",icon:n.jsx(nm,{}),text:"Short syntax for simple functions.",code:"$square = fn($x) => $x * $x;"},{key:"scope",title:"Variable Scope",icon:n.jsx(gr,{}),text:"Variables inside function are local by default.",code:`$x = 10;

function test() {
    // $x is not accessible here
}`},{key:"global",title:"global Keyword",icon:n.jsx(gn,{}),text:"Use global to access global variables inside function.",code:`$x = 10;

function test() {
    global $x;
    echo $x;
}`},{key:"static",title:"Static Variables",icon:n.jsx(Dt,{}),text:"Static variables retain value between function calls.",code:`function counter() {
    static $count = 0;
    $count++;
    echo $count;
}`}],[]),p=()=>c(u=>!u);return n.jsxs(Am.Wrapper,{className:i?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:p,"aria-expanded":i,children:[n.jsx("span",{className:"chev",children:i?n.jsx(Le,{}):n.jsx(ze,{})}),n.jsx("span",{className:"icon",children:n.jsx(de,{})}),n.jsx("span",{className:"title",children:"Functions"}),n.jsx("span",{className:"meta",children:i?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${i?"open":""}`,children:[n.jsxs("div",{className:"intro",children:[n.jsxs("div",{className:"pill",children:[n.jsx(de,{}),"Function fundamentals at a glance"]}),n.jsx("p",{className:"p",children:"Functions help organize reusable logic. In PHP, understanding scope, return types, and modern syntax like arrow functions is essential."})]}),n.jsx("div",{className:"sections",children:l.map(u=>n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:u.icon}),u.title]}),n.jsxs("div",{className:"content",children:[n.jsx("div",{className:"desc",children:u.text}),n.jsx("pre",{children:n.jsx("code",{children:u.code})})]})]},u.key))})]})]})},Dm={Wrapper:ne.section`
        width: 100%;
        margin-bottom: 10px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 10px 30px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px;
            background: transparent;
            text-align: left;
            color: var(--color-text-primary);
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            width: 28px;
            height: 28px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            background: var(--color-bg);
        }

        .titleIcon {
            width: 34px;
            height: 34px;
            display: grid;
            place-items: center;
            border-radius: 12px;
            background: var(--color-bg);
            border: 1px solid var(--color-border);
            color: var(--color-primary);
        }

        .title {
            font-weight: 900;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            padding: 6px 10px;
            border-radius: 999px;
            background: var(--color-bg);
            border: 1px solid var(--color-border);
            color: var(--color-text-muted);
        }

        .body {
            max-height: 0;
            overflow: hidden;
            transition: max-height 300ms ease;
            border-top: 1px solid var(--color-border);
        }

        .body.open {
            max-height: 5000px;
        }

        .intro {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
            background: var(--color-surface-2);
        }

        .intro p {
            margin: 0 0 10px 0;
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .note {
            padding: 10px;
            border-radius: 12px;
            background: var(--color-bg);
            border: 1px solid var(--color-border);
            font-size: 13px;
            color: var(--color-text-secondary);
        }

        .grid {
            display: grid;
            gap: 14px;
            padding: 16px;
            grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        }

        .card {
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 16px;
            padding: 14px;
        }

        .cardHeader {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
            font-weight: 900;
        }

        .cardIcon {
            width: 28px;
            height: 28px;
            display: grid;
            place-items: center;
            border-radius: 10px;
            background: var(--color-surface);
            border: 1px solid var(--color-border);
            color: var(--color-primary);
        }

        .desc {
            font-size: 14px;
            line-height: 1.7;
            color: var(--color-text-secondary);
            margin-bottom: 10px;
        }

        .example {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Courier New", monospace;
            background: var(--color-surface-2);
            border: 1px solid var(--color-border);
            padding: 10px;
            border-radius: 10px;
            font-size: 13px;
            overflow-x: auto;
            white-space: pre-wrap;
        }
    `},Wm=()=>{const[i,c]=Q.useState(!1),l=Q.useMemo(()=>[{name:"$_GET",icon:n.jsx(gn,{}),desc:"Collects data sent via URL query string.",example:`example.com/page.php?name=ash

$_GET['name'] -> 'ash'`},{name:"$_POST",icon:n.jsx(gn,{}),desc:"Collects data sent via HTTP POST method (usually forms).",example:`<form method='POST'>
$_POST['email']`},{name:"$_REQUEST",icon:n.jsx(gn,{}),desc:"Contains data from GET, POST, and COOKIE (not recommended for secure logic).",example:"$_REQUEST['username']"},{name:"$_SERVER",icon:n.jsx(jt,{}),desc:"Contains server and request information.",example:`$_SERVER['REQUEST_METHOD']
$_SERVER['HTTP_HOST']`},{name:"$_FILES",icon:n.jsx(wp,{}),desc:"Used for file uploads via forms.",example:`$_FILES['file']['name']
$_FILES['file']['tmp_name']`},{name:"$_SESSION",icon:n.jsx(Nr,{}),desc:"Stores data across multiple pages for a user session.",example:`session_start();
$_SESSION['user'] = 'ash';`},{name:"$_COOKIE",icon:n.jsx(xp,{}),desc:"Stores small data in the user's browser.",example:`setcookie('theme', 'dark');
$_COOKIE['theme']`},{name:"$_ENV",icon:n.jsx(de,{}),desc:"Contains environment variables.",example:"$_ENV['PATH']"}],[]),p=()=>c(u=>!u);return n.jsxs(Dm.Wrapper,{children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:p,"aria-expanded":i,children:[n.jsx("span",{className:"chev",children:i?n.jsx(Le,{}):n.jsx(ze,{})}),n.jsx("span",{className:"titleIcon",children:n.jsx(de,{})}),n.jsx("span",{className:"title",children:"Superglobals"}),n.jsx("span",{className:"meta",children:i?"Collapse":"Expand"})]}),n.jsxs("div",{className:`body ${i?"open":""}`,children:[n.jsxs("div",{className:"intro",children:[n.jsx("p",{children:"Superglobals are built-in associative arrays available in all scopes. They provide access to request data, server info, sessions, cookies, files, and environment variables."}),n.jsx("div",{className:"note",children:"Always validate and sanitize external input like $_GET and $_POST to prevent security issues."})]}),n.jsx("div",{className:"grid",children:l.map((u,v)=>n.jsxs("div",{className:"card",children:[n.jsxs("div",{className:"cardHeader",children:[n.jsx("span",{className:"cardIcon",children:u.icon}),n.jsx("span",{className:"cardTitle",children:u.name})]}),n.jsx("p",{className:"desc",children:u.desc}),n.jsx("pre",{className:"example",children:u.example})]},v))})]})]})},Um={Wrapper:ne.section`
        width: 100%;
        margin-bottom: 10px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px 14px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            width: 28px;
            height: 28px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            background: var(--color-bg);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .icon {
            width: 36px;
            height: 36px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            font-size: 18px;
            flex: 0 0 auto;
        }

        .title {
            font-weight: 900;
            letter-spacing: 0.2px;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            white-space: nowrap;
            flex: 0 0 auto;
        }

        .topicBody {
            max-height: 0px;
            overflow: hidden;
            transition: max-height 260ms ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 14000px;
        }

        .intro {
            padding: 14px 14px;
            border-bottom: 1px dashed var(--color-border-light);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
        }

        .pill {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            color: var(--color-text-secondary);
            font-size: 12px;
            margin-bottom: 10px;
        }

        .pillIcon {
            display: grid;
            place-items: center;
            color: var(--color-primary);
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .note {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 16px;
            padding: 12px;
        }

        .noteTitle {
            font-weight: 900;
            margin-bottom: 8px;
            color: var(--color-text-primary);
        }

        .noteText {
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-size: 14px;
        }

        .sections {
            padding: 14px 14px;
            display: grid;
            gap: 14px;
        }

        .section {
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 16px;
            overflow: hidden;
        }

        .sectionTitle {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 12px 12px;
            border-bottom: 1px solid var(--color-border);
            background: var(--color-surface);
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 14px;
        }

        .sectionIcon {
            width: 30px;
            height: 30px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .bullets {
            list-style: none;
            padding: 12px 12px 0 12px;
            margin: 0;
            display: grid;
            gap: 10px;
        }

        .bullet {
            display: flex;
            align-items: flex-start;
            gap: 10px;
        }

        .dot {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--color-primary);
            flex: 0 0 auto;
            margin-top: 7px;
        }

        .bulletText {
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.65;
        }

        .codeBlock {
            margin: 12px;
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            border-radius: 16px;
            overflow: hidden;
        }

        .codeTop {
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            color: var(--color-text-secondary);
            font-weight: 900;
            font-size: 12px;
            letter-spacing: 0.2px;
            background: var(--color-surface);
        }

        .code {
            margin: 0;
            padding: 12px;
            font-size: 13px;
            line-height: 1.6;
            color: var(--color-text-secondary);
            overflow-x: auto;
            white-space: pre;
        }
    `},Vm=()=>{const[i,c]=Q.useState(!1),l=Q.useMemo(()=>[{key:"getVsPost",title:"GET vs POST",icon:n.jsx(Kx,{}),points:["GET sends data in the URL (query string). Good for search, filters, bookmarking.","POST sends data in the request body. Better for forms, passwords, larger payloads.","Never send sensitive data using GET (it can be logged, shared, cached)."],exampleTitle:"Quick example",example:`GET:  /profile.php?user=ash
POST: /login.php (email + password in body)`},{key:"validation",title:"Form validation",icon:n.jsx(fp,{}),points:["Validation means checking input is correct before using it.","Always validate on server side, even if you validate on frontend.","Common checks: required, length, format, allowed values, file type and size."],exampleTitle:"Typical validation checks",example:`- empty check
- email format
- min and max length
- allowed list (enum)
- numeric range`},{key:"requiredFields",title:"Required fields",icon:n.jsx(nl,{}),points:["Required means the field must exist and must not be empty after trimming.","Treat missing key and empty value as invalid.","Use trim() so spaces do not pass validation."],exampleTitle:"Rule",example:'trim($name) !== ""'},{key:"sanitize",title:"Sanitizing input",icon:n.jsx(mr,{}),points:["Sanitizing means cleaning input to reduce risk and make it safe to store or display.","Validation checks if input is acceptable. Sanitizing prepares it for safe usage.","Always escape on output (XSS prevention)."],exampleTitle:"Key idea",example:`Validate first, then sanitize, then store.
Escape when outputting to HTML.`},{key:"htmlspecialchars",title:"htmlspecialchars",icon:n.jsx(de,{}),points:["Converts special characters to HTML entities.","This prevents user input from becoming real HTML or script on your page.","Use it when printing user data into HTML (XSS protection)."],exampleTitle:"Example",example:'echo htmlspecialchars($name, ENT_QUOTES, "UTF-8");'},{key:"filterInput",title:"filter_input",icon:n.jsx(Mu,{}),points:["Reads input safely from GET or POST using filters.","Useful for emails, integers, URLs, etc.","Returns filtered value or false/null depending on filter and input."],exampleTitle:"Example",example:'$email = filter_input(INPUT_POST, "email", FILTER_VALIDATE_EMAIL);'},{key:"filterVar",title:"filter_var",icon:n.jsx(Mu,{}),points:["Filters a variable you already have in your code.","Useful when data comes from sources other than GET/POST (like JSON body).","Works similarly to filter_input but takes a value directly."],exampleTitle:"Example",example:"$age = filter_var($rawAge, FILTER_VALIDATE_INT);"},{key:"fileUpload",title:"File upload basics",icon:n.jsx(fm,{}),points:["Uploaded files are available in $_FILES.","Always check: error, size, allowed type, and final filename.","Never trust original filename. Generate your own safe name."],exampleTitle:"What to check",example:`- $_FILES["file"]["error"] === UPLOAD_ERR_OK
- max size limit
- allow only safe extensions
- move_uploaded_file() to a safe folder`}],[]),p=()=>c(u=>!u);return n.jsxs(Um.Wrapper,{className:i?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:p,"aria-expanded":i,children:[n.jsx("span",{className:"chev",children:i?n.jsx(Le,{}):n.jsx(ze,{})}),n.jsx("span",{className:"icon",children:n.jsx(nl,{})}),n.jsx("span",{className:"title",children:"Forms Handling"}),n.jsx("span",{className:"meta",children:i?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${i?"open":""}`,children:[n.jsxs("div",{className:"intro",children:[n.jsxs("div",{className:"pill",children:[n.jsx("span",{className:"pillIcon",children:n.jsx(mr,{})}),"Safe form handling checklist"]}),n.jsx("p",{className:"p",children:"Forms are one of the biggest entry points for bugs and security issues. The core rule is simple: validate input on server side, sanitize for storage, and escape on output."}),n.jsxs("div",{className:"note",children:[n.jsx("div",{className:"noteTitle",children:"Remember"}),n.jsx("div",{className:"noteText",children:"Client side validation is for UX. Server side validation is for security and correctness."})]})]}),n.jsx("div",{className:"sections",children:l.map(u=>n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:u.icon}),u.title]}),n.jsx("ul",{className:"bullets",children:u.points.map((v,b)=>n.jsxs("li",{className:"bullet",children:[n.jsx("span",{className:"dot"}),n.jsx("span",{className:"bulletText",children:v})]},`${u.key}-${b}`))}),n.jsxs("div",{className:"codeBlock",children:[n.jsx("div",{className:"codeTop",children:"Quick example"}),n.jsx("pre",{className:"code",children:u.example})]})]},u.key))})]})]})},Qm={Wrapper:ne.section`
        width: 100%;
        margin-bottom: 10px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px 14px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            width: 28px;
            height: 28px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            background: var(--color-bg);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .icon {
            width: 36px;
            height: 36px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            font-size: 18px;
            flex: 0 0 auto;
        }

        .title {
            font-weight: 900;
            letter-spacing: 0.2px;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            white-space: nowrap;
            flex: 0 0 auto;
        }

        .topicBody {
            max-height: 0px;
            overflow: hidden;
            transition: max-height 260ms ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 20000px;
        }

        .intro {
            padding: 14px 14px;
            border-bottom: 1px dashed var(--color-border-light);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
        }

        .pill {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            color: var(--color-text-secondary);
            font-size: 12px;
            margin-bottom: 10px;
        }

        .pillIcon {
            display: grid;
            place-items: center;
            color: var(--color-primary);
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .note {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 16px;
            padding: 12px;
        }

        .noteTitle {
            font-weight: 900;
            margin-bottom: 8px;
            color: var(--color-text-primary);
        }

        .noteText {
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-size: 14px;
        }

        .sections {
            padding: 14px 14px;
            display: grid;
            gap: 16px;
        }

        .section {
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 16px;
            overflow: hidden;
        }

        .sectionTop {
            padding: 12px;
            border-bottom: 1px solid var(--color-border);
            background: var(--color-surface);
        }

        .sectionTitle {
            display: flex;
            align-items: center;
            gap: 10px;
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 14px;
            margin-bottom: 8px;
        }

        .sectionIcon {
            width: 30px;
            height: 30px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .sectionIntro {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-size: 13px;
        }

        .blocks {
            padding: 12px;
            display: grid;
            gap: 12px;
        }

        .block {
            border: 1px solid var(--color-border);
            background: var(--color-surface-2);
            border-radius: 16px;
            padding: 12px;
        }

        .blockHead {
            display: flex;
            align-items: center;
            gap: 10px;
            justify-content: space-between;
            margin-bottom: 10px;
        }

        .blockTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 14px;
        }

        .miniBadge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 6px 10px;
            color: var(--color-text-secondary);
            font-size: 12px;
            white-space: nowrap;
        }

        .miniIcon {
            display: grid;
            place-items: center;
            color: var(--color-primary);
            font-size: 14px;
        }

        .bullets {
            list-style: none;
            padding-left: 0;
            display: grid;
            gap: 10px;
            margin: 0;
        }

        .bullet {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.6;
        }

        .dot {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--color-primary);
            flex: 0 0 auto;
            margin-top: 7px;
        }

        .codeBlock {
            margin-top: 12px;
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            border-radius: 16px;
            overflow: hidden;
        }

        .codeTop {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            color: var(--color-text-secondary);
            font-weight: 900;
            font-size: 12px;
            letter-spacing: 0.2px;
            background: var(--color-surface);
        }

        .codeIcon {
            display: grid;
            place-items: center;
            color: var(--color-primary);
            font-size: 14px;
        }

        .code {
            margin: 0;
            padding: 12px;
            font-size: 13px;
            line-height: 1.6;
            color: var(--color-text-secondary);
            overflow-x: auto;
            white-space: pre;
        }

        .hint {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            padding: 10px;
        }

        .hintTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            margin-bottom: 6px;
            font-size: 13px;
        }

        .hintText {
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-size: 13px;
        }

        @media (max-width: 720px) {
            .blockHead {
                flex-direction: column;
                align-items: flex-start;
            }
        }
    `},Gm=()=>{const[i,c]=Q.useState(!1),l=Q.useMemo(()=>[{key:"cookies",title:"Cookies",icon:n.jsx(xp,{}),intro:"Cookies are small key-value data stored in the browser and sent with requests to the server. Good for preferences and session ids.",blocks:[{heading:"setcookie",points:["Must be sent before any output (before echo / HTML).","Stored in browser, returned in next request headers.","Use for lightweight data - never store passwords."],exampleTitle:"Basic cookie",example:'setcookie("theme", "dark", time() + 3600, "/");'},{heading:"Expiry",points:["Expiry controls how long the cookie stays.","Session cookie: expires when browser closes (no expiry).","Persistent cookie: set expiry using time() + seconds."],exampleTitle:"Expires in 7 days",example:'setcookie("visit", "yes", time() + (7 * 24 * 60 * 60), "/");'},{heading:"Security flags",points:["HttpOnly: JS cannot read cookie (helps against XSS).","Secure: cookie sent only over HTTPS.","SameSite: helps reduce CSRF by controlling cross-site sending."],exampleTitle:"Safer cookie options",example:`setcookie("sid", $sessionId, [
  "expires" => time() + 3600,
  "path" => "/",
  "secure" => true,
  "httponly" => true,
  "samesite" => "Lax"
]);`,note:"In localhost HTTP, secure: true will prevent cookie from being set. Use secure: true in production HTTPS."}]},{key:"sessions",title:"Sessions",icon:n.jsx(kt,{}),intro:"Sessions store user data on the server. The browser only stores a session id (usually via cookie). Best for login state.",blocks:[{heading:"session_start",points:["Start session at the top of the request.","Required before reading or writing $_SESSION.","Must be called before any output."],exampleTitle:"Start session",example:"session_start();"},{heading:"$_SESSION usage",points:["Store data like user id after login.","Read it on every protected page request.","Keep it minimal. Store ids, not big objects."],exampleTitle:"Set and read session",example:`// after login success
$_SESSION["userId"] = $user["id"];
$_SESSION["role"] = $user["role"];

// later on protected page
if (!isset($_SESSION["userId"])) {
  header("Location: /login.php");
  exit;
}`},{heading:"Destroying sessions",points:["Unset session variables to clear user data.","Destroy session to remove the session storage on server.","Also clear session cookie for a complete logout."],exampleTitle:"Logout flow",example:`session_start();

$_SESSION = []; // clear session array

if (ini_get("session.use_cookies")) {
  $params = session_get_cookie_params();
  setcookie(session_name(), "", time() - 42000, $params["path"], $params["domain"], $params["secure"], $params["httponly"]);
}

session_destroy();

header("Location: /login.php");
exit;`},{heading:"Login system basics",points:["User submits email/password via POST.","Server verifies password using password_verify.","On success, store user id in $_SESSION.","Protect routes by checking $_SESSION['userId']."],exampleTitle:"Minimal login idea",example:`// 1) POST login.php
// 2) find user by email
// 3) verify password
// 4) set session and redirect

if ($ok) {
  session_start();
  $_SESSION["userId"] = $user["id"];
  header("Location: /dashboard.php");
  exit;
}`,note:"Always hash passwords (password_hash). Never store raw passwords in database."}]}],[]),p=()=>c(u=>!u);return n.jsxs(Qm.Wrapper,{className:i?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:p,"aria-expanded":i,children:[n.jsx("span",{className:"chev",children:i?n.jsx(Le,{}):n.jsx(ze,{})}),n.jsx("span",{className:"icon",children:n.jsx(mr,{})}),n.jsx("span",{className:"title",children:"Sessions and Cookies"}),n.jsx("span",{className:"meta",children:i?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${i?"open":""}`,children:[n.jsxs("div",{className:"intro",children:[n.jsxs("div",{className:"pill",children:[n.jsx("span",{className:"pillIcon",children:n.jsx(bp,{})}),"Login state and browser storage basics"]}),n.jsx("p",{className:"p",children:"Cookies live in the browser. Sessions live on the server. Most login systems use sessions and store only a session id in a cookie."}),n.jsxs("div",{className:"note",children:[n.jsx("div",{className:"noteTitle",children:"Quick rule"}),n.jsx("div",{className:"noteText",children:"Use cookies for small preferences. Use sessions for authentication and user state."})]})]}),n.jsx("div",{className:"sections",children:l.map(u=>n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTop",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:u.icon}),u.title]}),n.jsx("p",{className:"sectionIntro",children:u.intro})]}),n.jsx("div",{className:"blocks",children:u.blocks.map((v,b)=>n.jsxs("div",{className:"block",children:[n.jsxs("div",{className:"blockHead",children:[n.jsx("div",{className:"blockTitle",children:v.heading}),v.heading==="Expiry"&&n.jsxs("span",{className:"miniBadge",children:[n.jsx("span",{className:"miniIcon",children:n.jsx(ul,{})}),"time based"]}),v.heading==="Destroying sessions"&&n.jsxs("span",{className:"miniBadge",children:[n.jsx("span",{className:"miniIcon",children:n.jsx(yp,{})}),"logout"]}),v.heading==="Security flags"&&n.jsxs("span",{className:"miniBadge",children:[n.jsx("span",{className:"miniIcon",children:n.jsx(kt,{})}),"secure"]})]}),n.jsx("ul",{className:"bullets",children:v.points.map((L,T)=>n.jsxs("li",{className:"bullet",children:[n.jsx("span",{className:"dot"}),n.jsx("span",{children:L})]},`${u.key}-${b}-${T}`))}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(de,{})}),v.exampleTitle]}),n.jsx("pre",{className:"code",children:v.example})]}),v.note&&n.jsxs("div",{className:"hint",children:[n.jsx("div",{className:"hintTitle",children:"Tip"}),n.jsx("div",{className:"hintText",children:v.note})]})]},`${u.key}-${b}`))})]},u.key))})]})]})},qm={Wrapper:ne.section`
        width: 100%;
        margin-bottom: 10px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px 14px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            width: 28px;
            height: 28px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            background: var(--color-bg);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .icon {
            width: 36px;
            height: 36px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            font-size: 18px;
            flex: 0 0 auto;
        }

        .title {
            font-weight: 900;
            letter-spacing: 0.2px;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            white-space: nowrap;
            flex: 0 0 auto;
        }

        .topicBody {
            max-height: 0px;
            overflow: hidden;
            transition: max-height 260ms ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 20000px;
        }

        .intro {
            padding: 14px 14px;
            border-bottom: 1px dashed var(--color-border-light);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
        }

        .pill {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            color: var(--color-text-secondary);
            font-size: 12px;
            margin-bottom: 10px;
        }

        .pillIcon {
            display: grid;
            place-items: center;
            color: var(--color-primary);
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .note {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 16px;
            padding: 12px;
        }

        .noteTitle {
            display: flex;
            align-items: center;
            gap: 10px;
            font-weight: 900;
            margin-bottom: 8px;
            color: var(--color-text-primary);
        }

        .noteIcon {
            width: 30px;
            height: 30px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            display: grid;
            place-items: center;
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .noteText {
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-size: 14px;
        }

        .sections {
            padding: 14px 14px;
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 14px;
        }

        .card {
            grid-column: span 6;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 16px;
            padding: 14px;
            overflow: hidden;
        }

        .cardTop {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cardTitle {
            display: flex;
            align-items: center;
            gap: 10px;
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 14px;
        }

        .cardIcon {
            width: 30px;
            height: 30px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            background: var(--color-surface);
            border: 1px solid var(--color-border);
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .tag {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 999px;
            padding: 6px 10px;
            white-space: nowrap;
        }

        .what {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-size: 14px;
        }

        .bullets {
            margin-top: 10px;
            list-style: none;
            padding-left: 0;
            display: grid;
            gap: 10px;
        }

        .bullets li {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.6;
        }

        .dot {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--color-primary);
            flex: 0 0 auto;
            margin-top: 7px;
        }

        .example {
            margin-top: 12px;
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            border-radius: 16px;
            overflow: hidden;
        }

        .exTop {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            color: var(--color-text-secondary);
            font-weight: 900;
            font-size: 12px;
            letter-spacing: 0.2px;
            background: var(--color-surface);
        }

        .exIcon {
            display: grid;
            place-items: center;
            color: var(--color-primary);
            font-size: 14px;
        }

        .code {
            margin: 0;
            padding: 12px;
            font-size: 13px;
            line-height: 1.6;
            color: var(--color-text-secondary);
            overflow-x: auto;
            white-space: pre;
        }

        .footerNote {
            padding: 14px 14px;
            border-top: 1px solid var(--color-border);
            background: var(--color-surface-2);
        }

        .footerTitle {
            font-weight: 900;
            margin-bottom: 10px;
            color: var(--color-text-primary);
        }

        .checks {
            list-style: none;
            padding-left: 0;
            display: grid;
            gap: 10px;
            margin: 0;
        }

        .checks li {
            display: flex;
            align-items: center;
            gap: 10px;
            color: var(--color-text-secondary);
            font-size: 14px;
        }

        .checkDot {
            width: 10px;
            height: 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            box-shadow: inset 0 0 0 2px var(--color-primary);
            flex: 0 0 auto;
        }

        @media (max-width: 900px) {
            .card {
                grid-column: span 12;
            }
        }
    `},Km=()=>{const[i,c]=Q.useState(!1),l=Q.useMemo(()=>[{key:"fopen",title:"fopen",icon:n.jsx(hp,{}),what:"Opens a file and returns a file handle (resource). Needed for fread, fwrite, fclose.",notes:["Common modes: r, r+, w, w+, a, a+","w creates file if missing and truncates it","a appends and creates file if missing"],example:'$handle = fopen("notes.txt", "r");'},{key:"fread",title:"fread",icon:n.jsx(bt,{}),what:"Reads bytes from an open file handle.",notes:["You must pass how many bytes to read","Often combined with filesize() for full read"],example:"$data = fread($handle, 1024);"},{key:"fwrite",title:"fwrite",icon:n.jsx(tl,{}),what:"Writes a string to an open file handle.",notes:["Returns number of bytes written","Use a or a+ mode to append","Use w or w+ mode to overwrite"],example:'fwrite($handle, "Hello\\n");'},{key:"fclose",title:"fclose",icon:n.jsx(de,{}),what:"Closes an open file handle and frees resources.",notes:["Always close handles after use","Prevents file locks and resource leaks"],example:"fclose($handle);"},{key:"file_get_contents",title:"file_get_contents",icon:n.jsx(bt,{}),what:"Reads the entire file into a string (simple and common).",notes:["Best for small to medium files","Returns false on failure"],example:'$text = file_get_contents("notes.txt");'},{key:"file_put_contents",title:"file_put_contents",icon:n.jsx(tl,{}),what:"Writes a string to a file in one call.",notes:["Overwrites by default","Use FILE_APPEND to append","Creates file if missing"],example:'file_put_contents("notes.txt", "Hello\\n", FILE_APPEND);'},{key:"unlink",title:"unlink",icon:n.jsx(yp,{}),what:"Deletes a file from the filesystem.",notes:["Returns true on success, false on failure","Check file_exists before unlink to avoid warnings"],example:'unlink("old.txt");'},{key:"file_exists",title:"file_exists",icon:n.jsx(fl,{}),what:"Checks if a file or directory exists at a path.",notes:["Returns true or false","Good before read, write, or delete operations"],example:'if (file_exists("notes.txt")) { ... }'}],[]),p=()=>c(u=>!u);return n.jsxs(qm.Wrapper,{className:i?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:p,"aria-expanded":i,children:[n.jsx("span",{className:"chev",children:i?n.jsx(Le,{}):n.jsx(ze,{})}),n.jsx("span",{className:"icon",children:n.jsx(bt,{})}),n.jsx("span",{className:"title",children:"File Handling"}),n.jsx("span",{className:"meta",children:i?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${i?"open":""}`,children:[n.jsxs("div",{className:"intro",children:[n.jsxs("div",{className:"pill",children:[n.jsx("span",{className:"pillIcon",children:n.jsx(bt,{})}),"Read, write, append, delete files"]}),n.jsx("p",{className:"p",children:"PHP file handling is used for logs, reports, uploads, simple storage, and server side text processing. For most cases, prefer file_get_contents and file_put_contents for simplicity."}),n.jsxs("div",{className:"note",children:[n.jsxs("div",{className:"noteTitle",children:[n.jsx("span",{className:"noteIcon",children:n.jsx(dp,{})}),"Safety reminder"]}),n.jsx("div",{className:"noteText",children:"Always validate file paths if input comes from users. Never trust user provided filenames directly."})]})]}),n.jsx("div",{className:"sections",children:l.map(u=>n.jsxs("div",{className:"card",children:[n.jsxs("div",{className:"cardTop",children:[n.jsxs("div",{className:"cardTitle",children:[n.jsx("span",{className:"cardIcon",children:u.icon}),u.title]}),n.jsx("div",{className:"tag",children:"PHP"})]}),n.jsx("p",{className:"what",children:u.what}),n.jsx("ul",{className:"bullets",children:u.notes.map((v,b)=>n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),n.jsx("span",{className:"bulletText",children:v})]},`${u.key}-n-${b}`))}),n.jsxs("div",{className:"example",children:[n.jsxs("div",{className:"exTop",children:[n.jsx("span",{className:"exIcon",children:n.jsx(de,{})}),"Example"]}),n.jsx("pre",{className:"code",children:u.example})]})]},u.key))}),n.jsxs("div",{className:"footerNote",children:[n.jsx("div",{className:"footerTitle",children:"Quick patterns"}),n.jsxs("ul",{className:"checks",children:[n.jsxs("li",{children:[n.jsx("span",{className:"checkDot"}),"Small files: use file_get_contents and file_put_contents"]}),n.jsxs("li",{children:[n.jsx("span",{className:"checkDot"}),"Streaming or large files: use fopen, fread, fwrite, fclose"]}),n.jsxs("li",{children:[n.jsx("span",{className:"checkDot"}),"Before delete or read: file_exists"]})]})]})]})]})},Ym={Wrapper:ne.section`
        width: 100%;
        margin-bottom: 10px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev,
        .icon {
            width: 34px;
            height: 34px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 12px;
            background: var(--color-bg);
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .title {
            font-weight: 900;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 6px 10px;
        }

        .topicBody {
            max-height: 0;
            overflow: hidden;
            transition: max-height 300ms ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 5000px;
        }

        .intro {
            padding: 14px;
            border-bottom: 1px dashed var(--color-border-light);
        }

        .pill {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 6px 10px;
            font-size: 12px;
            margin-bottom: 10px;
        }

        .pillIcon {
            color: var(--color-primary);
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .sections {
            padding: 14px;
            display: grid;
            gap: 14px;
        }

        .section {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            background: var(--color-bg);
        }

        .sectionTitle {
            padding: 10px 12px;
            font-weight: 900;
            border-bottom: 1px solid var(--color-border);
            display: flex;
            align-items: center;
            gap: 8px;
            color: var(--color-text-primary);
        }

        .sectionIcon {
            color: var(--color-primary);
        }

        .sectionBody {
            padding: 12px;
        }

        .desc {
            color: var(--color-text-secondary);
            margin-bottom: 10px;
        }

        pre {
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            padding: 12px;
            border-radius: 12px;
            overflow-x: auto;
            font-size: 13px;
        }

        .note {
            margin-top: 10px;
            font-size: 13px;
            color: var(--color-text-muted);
        }
    `},Xm=()=>{const[i,c]=Q.useState(!1),l=Q.useMemo(()=>[{key:"errorReporting",title:"error_reporting",icon:n.jsx(vp,{}),desc:"Controls which PHP errors are displayed or logged.",code:`// Show all errors (development)
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Hide errors (production)
ini_set('display_errors', 0);`,note:"Use full error reporting in development. Disable display in production."},{key:"tryCatch",title:"try catch",icon:n.jsx(mr,{}),desc:"Used to handle exceptions safely without crashing the application.",code:`try {
    $num = 10 / 0;
} catch (Exception $e) {
    echo $e->getMessage();
}`,note:"Code that may fail goes inside try block."},{key:"throw",title:"throw",icon:n.jsx(qs,{}),desc:"Used to manually create and throw an exception.",code:`function divide($a, $b) {
    if ($b == 0) {
        throw new Exception("Division by zero not allowed");
    }
    return $a / $b;
}`,note:"throw stops execution and passes control to catch block."},{key:"exceptions",title:"Exceptions",icon:n.jsx(mr,{}),desc:"Exceptions represent runtime errors that can be caught and handled.",code:`try {
    throw new Exception("Something went wrong");
} catch (Exception $e) {
    echo "Error: " . $e->getMessage();
}`,note:"Exceptions provide structured error handling."},{key:"customExceptions",title:"Custom Exceptions",icon:n.jsx(qs,{}),desc:"Create your own exception class for better control.",code:`class MyException extends Exception {}

try {
    throw new MyException("Custom error triggered");
} catch (MyException $e) {
    echo $e->getMessage();
}`,note:"Custom exceptions help separate different error types."}],[]);return n.jsxs(Ym.Wrapper,{className:i?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:()=>c(p=>!p),"aria-expanded":i,children:[n.jsx("span",{className:"chev",children:i?n.jsx(Le,{}):n.jsx(ze,{})}),n.jsx("span",{className:"icon",children:n.jsx(qs,{})}),n.jsx("span",{className:"title",children:"Error Handling"}),n.jsx("span",{className:"meta",children:i?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${i?"open":""}`,children:[n.jsxs("div",{className:"intro",children:[n.jsxs("div",{className:"pill",children:[n.jsx("span",{className:"pillIcon",children:n.jsx(ul,{})}),"Handle runtime errors safely"]}),n.jsx("p",{className:"p",children:"Error handling prevents application crashes and allows graceful failure. PHP supports both traditional error reporting and modern exception handling."})]}),n.jsx("div",{className:"sections",children:l.map(p=>n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:p.icon}),p.title]}),n.jsxs("div",{className:"sectionBody",children:[n.jsx("p",{className:"desc",children:p.desc}),n.jsx("pre",{children:n.jsx("code",{children:p.code})}),n.jsxs("div",{className:"note",children:[n.jsx("strong",{children:"Important:"})," ",p.note]})]})]},p.key))})]})]})},Jm={Wrapper:ne.section`
        width: 100%;
        margin-bottom: 10px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        overflow: hidden;
        box-shadow: 0 12px 30px var(--color-shadow);

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            width: 28px;
            height: 28px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            background: var(--color-bg);
            color: var(--color-text-secondary);
        }

        .icon {
            width: 36px;
            height: 36px;
            display: grid;
            place-items: center;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
        }

        .title {
            font-weight: 900;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 6px 10px;
        }

        .topicBody {
            max-height: 0;
            overflow: hidden;
            transition: max-height 260ms ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 5000px;
        }

        .section {
            padding: 16px;
            border-bottom: 1px dashed var(--color-border-light);
        }

        .section:last-child {
            border-bottom: none;
        }

        .sectionTitle {
            display: flex;
            align-items: center;
            gap: 10px;
            font-weight: 900;
            margin-bottom: 10px;
            color: var(--color-text-primary);
        }

        .sectionIcon {
            width: 28px;
            height: 28px;
            display: grid;
            place-items: center;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
        }

        .desc {
            color: var(--color-text-secondary);
            line-height: 1.7;
            margin-bottom: 12px;
        }

        pre {
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            border-radius: 12px;
            padding: 12px;
            overflow-x: auto;
        }

        code {
            font-family: ui-monospace, monospace;
            font-size: 13px;
            color: var(--color-text-primary);
        }
    `},Zm=()=>{const[i,c]=Q.useState(!1),l=Q.useMemo(()=>[{key:"embedding",title:"Embedding PHP in HTML",icon:n.jsx(de,{}),content:`
PHP can be written directly inside HTML using <?php ... ?> tags.
The server executes PHP first, then sends pure HTML to the browser.
                `,example:`
<!-- example.php -->
<h1>Welcome</h1>

<?php
$name = "Ashish";
echo "<p>Hello " . $name . "</p>";
?>
                `},{key:"templating",title:"Templating basics",icon:n.jsx(Jx,{}),content:`
PHP can act as a simple templating engine.
You mix dynamic data into HTML using echo or shorthand syntax.
                `,example:`
<?php $title = "Dashboard"; ?>

<h1><?= $title ?></h1>

<?php if ($isLoggedIn): ?>
    <p>Welcome back</p>
<?php endif; ?>
                `},{key:"buffering",title:"Output buffering",icon:n.jsx(xo,{}),content:`
Output buffering stores output in memory before sending it to the browser.
Useful for modifying headers or capturing template output.
                `,example:`
<?php
ob_start();
echo "<h1>Hello</h1>";
$content = ob_get_clean();
?>
                `},{key:"separation",title:"Separating logic and view",icon:n.jsx(gr,{}),content:`
Best practice: keep business logic separate from HTML.
Controller handles data.
View displays it.
Avoid heavy PHP logic inside HTML templates.
                `,example:`
<?php
// controller.php
$user = ["name" => "Ashish"];
include "view.php";
?>

<!-- view.php -->
<h1><?= $user["name"] ?></h1>
                `}],[]);return n.jsxs(Jm.Wrapper,{children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:()=>c(!i),"aria-expanded":i,children:[n.jsx("span",{className:"chev",children:i?n.jsx(Le,{}):n.jsx(ze,{})}),n.jsx("span",{className:"icon",children:n.jsx(wt,{})}),n.jsx("span",{className:"title",children:"PHP and HTML Integration"}),n.jsx("span",{className:"meta",children:i?"Collapse":"Expand"})]}),n.jsx("div",{className:`topicBody ${i?"open":""}`,children:l.map(p=>n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:p.icon}),p.title]}),n.jsx("p",{className:"desc",children:p.content}),n.jsx("pre",{children:n.jsx("code",{children:p.example})})]},p.key))})]})},eg={Wrapper:ne.section`
        width: 100%;
        margin-bottom: 10px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px 14px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            width: 28px;
            height: 28px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            background: var(--color-bg);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .icon {
            width: 36px;
            height: 36px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            font-size: 18px;
            flex: 0 0 auto;
        }

        .title {
            font-weight: 900;
            letter-spacing: 0.2px;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            white-space: nowrap;
            flex: 0 0 auto;
        }

        .topicBody {
            max-height: 0px;
            overflow: hidden;
            transition: max-height 260ms ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 12000px;
        }

        .intro {
            padding: 14px 14px;
            border-bottom: 1px dashed var(--color-border-light);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
        }

        .pill {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            color: var(--color-text-secondary);
            font-size: 12px;
            margin-bottom: 10px;
        }

        .pillIcon {
            display: grid;
            place-items: center;
            color: var(--color-primary);
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .note {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 16px;
            padding: 12px;
        }

        .noteTitle {
            font-weight: 900;
            margin-bottom: 8px;
            color: var(--color-text-primary);
        }

        .noteText {
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-size: 14px;
        }

        .sections {
            padding: 14px 14px;
            display: grid;
            gap: 14px;
        }

        .section {
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 16px;
            overflow: hidden;
        }

        .sectionTitle {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 12px 12px;
            border-bottom: 1px solid var(--color-border);
            background: var(--color-surface);
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 14px;
        }

        .sectionIcon {
            width: 30px;
            height: 30px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .rows {
            display: grid;
        }

        .row {
            display: grid;
            grid-template-columns: 170px 1fr;
            gap: 12px;
            padding: 12px;
        }

        .row + .row {
            border-top: 1px dashed var(--color-border-light);
        }

        .label {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-weight: 900;
            color: var(--color-text-primary);
            background: var(--color-surface);
            border: 1px solid var(--color-border);
            border-radius: 12px;
            padding: 10px 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 44px;
            text-align: center;
        }

        .desc {
            color: var(--color-text-secondary);
            line-height: 1.65;
            font-size: 14px;
        }

        .ex {
            margin-top: 8px;
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            align-items: center;
        }

        .exLabel {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            padding: 5px 8px;
            border-radius: 999px;
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            color: var(--color-text-primary);
            font-size: 13px;
        }

        .miniCallout {
            margin: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-surface-2);
            border-radius: 16px;
            padding: 12px;
        }

        .miniCalloutTitle {
            display: flex;
            align-items: center;
            gap: 10px;
            font-weight: 900;
            margin-bottom: 8px;
            color: var(--color-text-primary);
        }

        .miniIcon {
            width: 30px;
            height: 30px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            display: grid;
            place-items: center;
            color: var(--color-primary);
        }

        .miniCalloutText {
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-size: 14px;
        }

        @media (max-width: 820px) {
            .row {
                grid-template-columns: 1fr;
            }

            .label {
                justify-content: flex-start;
                text-align: left;
            }
        }
    `},rg=()=>{const[i,c]=Q.useState(!1),l=Q.useMemo(()=>[{key:"classesObjects",title:"Classes and Objects",icon:n.jsx(wt,{}),rows:[{label:"class",text:"Blueprint. Defines properties (data) and methods (behavior).",example:"class User { }"},{label:"object",text:"Instance created from a class using new.",example:"$u = new User();"},{label:"properties",text:"Variables inside a class that store object state.",example:"public string $name;"},{label:"methods",text:"Functions inside a class that operate on object state.",example:"public function greet() { }"},{label:"constructor",text:"Runs automatically on object creation. Use it to set initial state.",example:"public function __construct($name) { }"},{label:"destructor",text:"Runs when object is destroyed. Rarely needed in PHP, but used for cleanup.",example:"public function __destruct() { }"}]},{key:"accessModifiers",title:"Access Modifiers",icon:n.jsx(kt,{}),rows:[{label:"public",text:"Accessible from anywhere. Default intent for APIs you expose.",example:"public function run() { }"},{label:"private",text:"Accessible only inside the same class. Hides internal details.",example:"private string $token;"},{label:"protected",text:"Accessible in the class and its child classes. Useful for inheritance.",example:"protected function build() { }"}]},{key:"oopConcepts",title:"OOP Concepts",icon:n.jsx(gr,{}),rows:[{label:"Encapsulation",text:"Keep data safe by hiding internals and exposing controlled methods.",example:"private $balance + public deposit()"},{label:"Inheritance",text:"A child class can reuse and extend a parent class.",example:"class Admin extends User"},{label:"Polymorphism",text:"Same method name, different behavior (usually via inheritance or interfaces).",example:"->pay() works for CardPay, UpiPay"},{label:"Abstraction",text:"Hide implementation, expose only essential behavior (abstract class or interface).",example:"abstract class Shape { abstract area(); }"},{label:"Interfaces",text:"A contract. Classes must implement required methods.",example:"interface Logger { public function log($m); }"},{label:"Traits",text:"Reusable code blocks you can include in multiple classes (no inheritance needed).",example:"use HasTimestamps;"}]},{key:"static",title:"Static properties and methods",icon:n.jsx(pl,{}),rows:[{label:"static",text:"Belongs to the class itself, not a specific object. Access using ::.",example:"Config::$env or Config::get()"}]},{key:"namespaces",title:"Namespaces",icon:n.jsx(xo,{}),rows:[{label:"namespace",text:"Organizes code and prevents name conflicts. Common in real projects and Composer.",example:"namespace App\\Services;"},{label:"use",text:"Imports a class with shorter name (alias optional).",example:"use App\\Services\\Mail;"}]}],[]),p=()=>c(u=>!u);return n.jsxs(eg.Wrapper,{className:i?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:p,"aria-expanded":i,children:[n.jsx("span",{className:"chev",children:i?n.jsx(Le,{}):n.jsx(ze,{})}),n.jsx("span",{className:"icon",children:n.jsx(hm,{})}),n.jsx("span",{className:"title",children:"Object Oriented PHP"}),n.jsx("span",{className:"meta",children:i?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${i?"open":""}`,children:[n.jsxs("div",{className:"intro",children:[n.jsxs("div",{className:"pill",children:[n.jsx("span",{className:"pillIcon",children:n.jsx(de,{})}),"OOP basics in one view"]}),n.jsx("p",{className:"p",children:"OOP helps you structure code using reusable objects. You model real features as classes, keep internals private, and expose clear methods. This keeps projects maintainable as they grow."}),n.jsxs("div",{className:"note",children:[n.jsx("div",{className:"noteTitle",children:"Quick rule"}),n.jsx("div",{className:"noteText",children:"Keep properties private by default, and expose behavior through methods. Prefer composition and interfaces when possible."})]})]}),n.jsx("div",{className:"sections",children:l.map(u=>n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:u.icon}),u.title]}),n.jsx("div",{className:"rows",children:u.rows.map((v,b)=>n.jsxs("div",{className:"row",children:[n.jsx("div",{className:"label",children:v.label}),n.jsxs("div",{className:"text",children:[n.jsx("div",{className:"desc",children:v.text}),n.jsxs("div",{className:"ex",children:[n.jsx("span",{className:"exLabel",children:"Example"}),n.jsx("span",{className:"mono",children:v.example})]})]})]},`${u.key}-${b}`))}),u.key==="oopConcepts"&&n.jsxs("div",{className:"miniCallout",children:[n.jsxs("div",{className:"miniCalloutTitle",children:[n.jsx("span",{className:"miniIcon",children:n.jsx(Zx,{})}),"How these connect"]}),n.jsx("div",{className:"miniCalloutText",children:"Interfaces define behavior. Classes implement that behavior. Traits share reusable code. Access modifiers protect internals. Together, they keep large PHP projects clean."})]}),u.key==="namespaces"&&n.jsxs("div",{className:"miniCallout",children:[n.jsxs("div",{className:"miniCalloutTitle",children:[n.jsx("span",{className:"miniIcon",children:n.jsx(sm,{})}),"Real world usage"]}),n.jsx("div",{className:"miniCalloutText",children:"Namespaces are standard in Composer projects. One folder usually maps to one namespace prefix, which keeps class names predictable."})]})]},u.key))})]})]})},tg={Wrapper:ne.section`
        width: 100%;
        margin-bottom: 10px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px;
            background: transparent;
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            width: 28px;
            height: 28px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            background: var(--color-bg);
        }

        .icon {
            width: 36px;
            height: 36px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            background: var(--color-bg);
            border: 1px solid var(--color-border);
            color: var(--color-primary);
        }

        .title {
            font-weight: 900;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
        }

        .topicBody {
            max-height: 0;
            overflow: hidden;
            transition: max-height 300ms ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 15000px;
        }

        .intro {
            padding: 14px;
            border-bottom: 1px dashed var(--color-border-light);
        }

        .sections {
            padding: 14px;
            display: grid;
            gap: 14px;
        }

        .section {
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 16px;
            overflow: hidden;
        }

        .sectionTitle {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 12px;
            border-bottom: 1px solid var(--color-border);
            background: var(--color-surface);
            font-weight: 900;
        }

        .sectionIcon {
            width: 30px;
            height: 30px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            background: var(--color-bg);
            border: 1px solid var(--color-border);
            color: var(--color-primary);
        }

        .sectionContent {
            padding: 12px;
        }

        .p {
            margin: 0 0 10px 0;
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        pre {
            margin: 0;
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            padding: 14px;
            border-radius: 12px;
            overflow-x: auto;
        }

        code {
            font-family: ui-monospace, monospace;
            font-size: 14px;
        }
    `},ng=()=>{const[i,c]=Q.useState(!1),l=Q.useMemo(()=>[{key:"mysqlBasics",title:"MySQL Basics",icon:n.jsx(Nr,{}),content:"MySQL is a relational database used to store structured data in tables. PHP communicates with MySQL to perform CRUD operations."},{key:"mysqli",title:"Connecting with mysqli",icon:n.jsx(de,{}),code:`<?php
$conn = new mysqli("localhost", "root", "", "mydb");
if ($conn->connect_error) {
    die("Connection failed");
}
?>`},{key:"pdo",title:"Connecting with PDO",icon:n.jsx(de,{}),code:`<?php
$pdo = new PDO("mysql:host=localhost;dbname=mydb", "root", "");
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
?>`},{key:"prepared",title:"Prepared Statements",icon:n.jsx(mr,{}),content:"Prepared statements separate SQL logic from user input. This prevents SQL injection attacks.",code:`<?php
$stmt = $pdo->prepare("SELECT * FROM users WHERE email = ?");
$stmt->execute([$email]);
$user = $stmt->fetch();
?>`},{key:"fetching",title:"Fetching Data",icon:n.jsx(Nr,{}),code:`<?php
$stmt = $pdo->query("SELECT * FROM users");
$users = $stmt->fetchAll(PDO::FETCH_ASSOC);
?>`},{key:"insert",title:"Insert",icon:n.jsx(Nr,{}),code:`<?php
$stmt = $pdo->prepare("INSERT INTO users(name, email) VALUES(?, ?)");
$stmt->execute([$name, $email]);
?>`},{key:"update",title:"Update",icon:n.jsx(Nr,{}),code:`<?php
$stmt = $pdo->prepare("UPDATE users SET name = ? WHERE id = ?");
$stmt->execute([$name, $id]);
?>`},{key:"delete",title:"Delete",icon:n.jsx(Nr,{}),code:`<?php
$stmt = $pdo->prepare("DELETE FROM users WHERE id = ?");
$stmt->execute([$id]);
?>`},{key:"security",title:"Security Essentials",icon:n.jsx(kt,{}),content:"Never trust user input. Always validate, sanitize, and use prepared statements."},{key:"sqlInjection",title:"SQL Injection",icon:n.jsx(mr,{}),content:"SQL injection happens when raw user input modifies your SQL query. Prepared statements prevent this by binding parameters safely."},{key:"escaping",title:"Escaping",icon:n.jsx(mr,{}),content:"Escaping converts special characters into safe versions. Use built in functions instead of manual escaping whenever possible."},{key:"passwordHash",title:"Password Hashing",icon:n.jsx(kt,{}),code:`<?php
$hash = password_hash($password, PASSWORD_DEFAULT);
?>`},{key:"passwordVerify",title:"Password Verify",icon:n.jsx(kt,{}),code:`<?php
if (password_verify($password, $hash)) {
    echo "Login success";
}
?>`}],[]),p=()=>c(u=>!u);return n.jsxs(tg.Wrapper,{className:i?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:p,"aria-expanded":i,children:[n.jsx("span",{className:"chev",children:i?n.jsx(Le,{}):n.jsx(ze,{})}),n.jsx("span",{className:"icon",children:n.jsx(Nr,{})}),n.jsx("span",{className:"title",children:"Working with Databases (MySQL)"}),n.jsx("span",{className:"meta",children:i?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${i?"open":""}`,children:[n.jsx("div",{className:"intro",children:n.jsx("p",{className:"p",children:"PHP interacts with MySQL to perform CRUD operations. Always use prepared statements and password hashing in real applications."})}),n.jsx("div",{className:"sections",children:l.map(u=>n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:u.icon}),u.title]}),n.jsxs("div",{className:"sectionContent",children:[u.content&&n.jsx("p",{className:"p",children:u.content}),u.code&&n.jsx("pre",{children:n.jsx("code",{children:u.code})})]})]},u.key))})]})]})},og={Wrapper:ne.section`
        width: 100%;
        margin-bottom: 10px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px;
            background: transparent;
            color: var(--color-text-primary);
        }

        .chev {
            width: 28px;
            height: 28px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            background: var(--color-bg);
        }

        .icon {
            width: 36px;
            height: 36px;
            display: grid;
            place-items: center;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
        }

        .title {
            font-weight: 900;
            flex: 1;
            text-align: left;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
        }

        .topicBody {
            max-height: 0;
            overflow: hidden;
            transition: max-height 250ms ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 10000px;
        }

        .intro {
            padding: 14px;
            color: var(--color-text-secondary);
            border-bottom: 1px dashed var(--color-border-light);
        }

        .sections {
            padding: 14px;
            display: grid;
            gap: 14px;
        }

        .card {
            background: var(--color-bg);
            border: 1px solid var(--color-border);
            border-radius: 16px;
            padding: 14px;
        }

        .cardTitle {
            display: flex;
            align-items: center;
            gap: 10px;
            font-weight: 900;
            margin-bottom: 8px;
        }

        .cardIcon {
            width: 30px;
            height: 30px;
            display: grid;
            place-items: center;
            border-radius: 10px;
            background: var(--color-surface);
            border: 1px solid var(--color-border);
            color: var(--color-primary);
        }

        .desc {
            color: var(--color-text-secondary);
            margin-bottom: 8px;
            line-height: 1.6;
        }

        .list {
            padding-left: 16px;
            margin-bottom: 8px;
        }

        .list li {
            color: var(--color-text-secondary);
            margin-bottom: 4px;
        }

        .example code {
            display: block;
            padding: 10px;
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            border-radius: 10px;
            font-family: ui-monospace, monospace;
            font-size: 13px;
        }
    `},ig=()=>{const[i,c]=Q.useState(!1),l=Q.useMemo(()=>[{key:"xss",title:"XSS prevention",icon:n.jsx(de,{}),content:"Cross Site Scripting happens when user input is injected into HTML and executed as JavaScript.",tips:["Never trust user input","Always escape output using htmlspecialchars","Use ENT_QUOTES flag","Avoid echoing raw $_GET or $_POST directly"],example:"echo htmlspecialchars($name, ENT_QUOTES, 'UTF-8');"},{key:"csrf",title:"CSRF basics",icon:n.jsx(mr,{}),content:"Cross Site Request Forgery tricks a logged in user into submitting unwanted requests.",tips:["Use CSRF tokens in forms","Validate token on form submission","Regenerate tokens periodically"],example:"$_SESSION['token'] === $_POST['token']"},{key:"validation",title:"Input validation",icon:n.jsx(bp,{}),content:"Validate data before processing. Sanitization removes unsafe characters. Validation checks correctness.",tips:["Use filter_input and filter_var","Check required fields","Validate email, numbers, length","Never rely only on frontend validation"],example:"filter_var($email, FILTER_VALIDATE_EMAIL);"},{key:"escaping",title:"Output escaping",icon:n.jsx(de,{}),content:"Escape output when displaying user data in HTML.",tips:["Use htmlspecialchars for HTML","Use prepared statements for SQL","Escape based on context HTML, JS, URL"],example:"echo htmlspecialchars($comment);"},{key:"upload",title:"File upload security",icon:n.jsx(wp,{}),content:"File uploads can be dangerous if not restricted properly.",tips:["Validate file type and extension","Check MIME type","Limit file size","Store outside public directory","Rename uploaded files"],example:"move_uploaded_file($tmp, $safePath);"},{key:"sessionFixation",title:"Session fixation",icon:n.jsx(kt,{}),content:"Attack where attacker sets session ID before login.",tips:["Regenerate session ID after login","Use session_regenerate_id(true)"],example:"session_regenerate_id(true);"},{key:"password",title:"Password hashing",icon:n.jsx(kt,{}),content:"Never store plain passwords. Always hash using strong algorithm.",tips:["Use password_hash","Use password_verify","Do not use md5 or sha1"],example:"password_hash($pass, PASSWORD_DEFAULT);"},{key:"https",title:"HTTPS importance",icon:n.jsx(gn,{}),content:"HTTPS encrypts communication between client and server.",tips:["Prevents man in the middle attacks","Protects login credentials","Required for secure cookies"],example:"Set-Cookie: Secure; HttpOnly"}],[]);return n.jsxs(og.Wrapper,{children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:()=>c(p=>!p),children:[n.jsx("span",{className:"chev",children:i?n.jsx(Le,{}):n.jsx(ze,{})}),n.jsx("span",{className:"icon",children:n.jsx(mr,{})}),n.jsx("span",{className:"title",children:"Security Essentials"}),n.jsx("span",{className:"meta",children:i?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${i?"open":""}`,children:[n.jsx("div",{className:"intro",children:n.jsx("p",{children:"Security is not optional. Even small applications must protect user data and prevent common attacks. Learn these basics before building real systems."})}),n.jsx("div",{className:"sections",children:l.map(p=>n.jsxs("div",{className:"card",children:[n.jsxs("div",{className:"cardTitle",children:[n.jsx("span",{className:"cardIcon",children:p.icon}),p.title]}),n.jsx("p",{className:"desc",children:p.content}),n.jsx("ul",{className:"list",children:p.tips.map((u,v)=>n.jsx("li",{children:u},v))}),n.jsx("div",{className:"example",children:n.jsx("code",{children:p.example})})]},p.key))})]})]})},ag={Wrapper:ne.section`
        width: 100%;
        margin-bottom: 10px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev,
        .icon {
            width: 32px;
            height: 32px;
            display: grid;
            place-items: center;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            flex: 0 0 auto;
        }

        .icon {
            color: var(--color-primary);
        }

        .title {
            font-weight: 900;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            padding: 6px 10px;
            border-radius: 999px;
        }

        .topicBody {
            max-height: 0;
            overflow: hidden;
            transition: max-height 250ms ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 6000px;
        }

        .intro {
            padding: 14px;
            border-bottom: 1px dashed var(--color-border-light);
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .sections {
            padding: 14px;
            display: grid;
            gap: 14px;
        }

        .section {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            background: var(--color-bg);
            overflow: hidden;
        }

        .sectionTitle {
            padding: 12px;
            display: flex;
            align-items: center;
            gap: 10px;
            font-weight: 900;
            border-bottom: 1px solid var(--color-border);
            background: var(--color-surface);
        }

        .sectionIcon {
            width: 28px;
            height: 28px;
            display: grid;
            place-items: center;
            border-radius: 10px;
            background: var(--color-bg);
            border: 1px solid var(--color-border);
            color: var(--color-primary);
        }

        .sectionBody {
            padding: 12px;
        }

        .desc {
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-size: 14px;
        }

        pre {
            margin-top: 10px;
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            padding: 12px;
            border-radius: 12px;
            overflow-x: auto;
            font-size: 13px;
        }

        code {
            font-family: ui-monospace, monospace;
            color: var(--color-text-primary);
        }
    `},sg=()=>{const[i,c]=Q.useState(!1),l=Q.useMemo(()=>[{key:"jsonEncode",title:"json_encode",icon:n.jsx(Nr,{}),content:"Converts PHP arrays or objects into JSON string format. Used when sending structured data to frontend or API clients.",example:`
$data = ["name" => "Ash", "age" => 25];
echo json_encode($data);
`},{key:"jsonDecode",title:"json_decode",icon:n.jsx(Nr,{}),content:"Converts JSON string into PHP data. By default returns object. Pass true to get associative array.",example:`
$json = '{"name":"Ash","age":25}';
$data = json_decode($json, true);
echo $data["name"];
`},{key:"createApi",title:"Creating API endpoints",icon:n.jsx(jt,{}),content:"An API endpoint is simply a PHP file that returns JSON instead of HTML. It processes request and responds with structured data.",example:`
header("Content-Type: application/json");

$response = ["status" => "success"];
echo json_encode($response);
`},{key:"requestBody",title:"Reading request body",icon:n.jsx(nl,{}),content:"For JSON requests, data is not available in $_POST. You must read raw input using php://input.",example:`
$raw = file_get_contents("php://input");
$data = json_decode($raw, true);
`},{key:"headers",title:"Setting headers",icon:n.jsx(gr,{}),content:"Headers define how client interprets response. Most APIs must set correct Content-Type.",example:`
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
`},{key:"contentType",title:"Content-Type",icon:n.jsx(gr,{}),content:"Content-Type tells client what format response is. For APIs use application/json.",example:`
header("Content-Type: application/json");
`},{key:"restBasics",title:"REST basics",icon:n.jsx(de,{}),content:"REST uses HTTP methods to perform actions. GET read. POST create. PUT update. DELETE remove. URL represents resource.",example:`
GET /users
POST /users
PUT /users/1
DELETE /users/1
`}],[]),p=()=>c(u=>!u);return n.jsxs(ag.Wrapper,{children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:p,"aria-expanded":i,children:[n.jsx("span",{className:"chev",children:i?n.jsx(Le,{}):n.jsx(ze,{})}),n.jsx("span",{className:"icon",children:n.jsx(jt,{})}),n.jsx("span",{className:"title",children:"Working with JSON and APIs"}),n.jsx("span",{className:"meta",children:i?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${i?"open":""}`,children:[n.jsx("div",{className:"intro",children:n.jsx("p",{className:"p",children:"JSON is the standard format for data exchange in modern web applications. PHP can generate and read JSON easily, making it simple to build APIs."})}),n.jsx("div",{className:"sections",children:l.map(u=>n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:u.icon}),u.title]}),n.jsxs("div",{className:"sectionBody",children:[n.jsx("p",{className:"desc",children:u.content}),n.jsx("pre",{children:n.jsx("code",{children:u.example})})]})]},u.key))})]})]})},lg={Wrapper:ne.section`
        width: 100%;
        margin-bottom: 10px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px 14px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            width: 28px;
            height: 28px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            background: var(--color-bg);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .icon {
            width: 36px;
            height: 36px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            font-size: 18px;
            flex: 0 0 auto;
        }

        .title {
            font-weight: 900;
            letter-spacing: 0.2px;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            white-space: nowrap;
            flex: 0 0 auto;
        }

        .topicBody {
            max-height: 0px;
            overflow: hidden;
            transition: max-height 260ms ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 20000px;
        }

        .intro {
            padding: 14px 14px;
            border-bottom: 1px dashed var(--color-border-light);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
        }

        .pill {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            color: var(--color-text-secondary);
            font-size: 12px;
            margin-bottom: 10px;
        }

        .pillIcon {
            display: grid;
            place-items: center;
            color: var(--color-primary);
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .note {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 16px;
            padding: 12px;
        }

        .noteTitle {
            font-weight: 900;
            margin-bottom: 8px;
            color: var(--color-text-primary);
        }

        .noteText {
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-size: 14px;
        }

        .sections {
            padding: 14px 14px;
            display: grid;
            gap: 14px;
        }

        .section {
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 16px;
            overflow: hidden;
        }

        .sectionTitle {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 12px 12px;
            border-bottom: 1px solid var(--color-border);
            background: var(--color-surface);
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 14px;
        }

        .sectionIcon {
            width: 30px;
            height: 30px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .content {
            padding: 12px;
            display: grid;
            gap: 12px;
        }

        .block {
            border: 1px solid var(--color-border);
            background: var(--color-surface-2);
            border-radius: 14px;
            padding: 12px;
        }

        .label {
            font-size: 12px;
            font-weight: 900;
            color: var(--color-text-primary);
            margin-bottom: 6px;
        }

        .text {
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-size: 14px;
        }

        .codeBlock {
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            border-radius: 16px;
            overflow: hidden;
        }

        .codeTop {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            color: var(--color-text-secondary);
            font-weight: 800;
            font-size: 12px;
            letter-spacing: 0.2px;
            background: var(--color-surface);
        }

        .codeIcon {
            display: grid;
            place-items: center;
            color: var(--color-primary);
            font-size: 14px;
        }

        .code {
            margin: 0;
            padding: 12px;
            font-size: 13px;
            line-height: 1.6;
            color: var(--color-text-secondary);
            overflow-x: auto;
            white-space: pre;
        }

        .tip {
            display: flex;
            gap: 10px;
            align-items: flex-start;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 14px;
            padding: 10px 12px;
        }

        .tipLabel {
            font-size: 12px;
            font-weight: 900;
            color: var(--color-text-primary);
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            padding: 6px 10px;
            border-radius: 999px;
            white-space: nowrap;
        }

        .tipText {
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-size: 14px;
        }

        .footerNote {
            padding: 14px 14px;
            border-top: 1px solid var(--color-border);
            background: var(--color-surface-2);
        }

        .footerTitle {
            font-weight: 900;
            margin-bottom: 10px;
            color: var(--color-text-primary);
        }

        .checks {
            list-style: none;
            padding-left: 0;
            display: grid;
            gap: 10px;
            margin: 0;
        }

        .checks li {
            display: flex;
            align-items: center;
            gap: 10px;
            color: var(--color-text-secondary);
            font-size: 14px;
        }

        .checkDot {
            width: 10px;
            height: 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            box-shadow: inset 0 0 0 2px var(--color-primary);
            flex: 0 0 auto;
        }
    `},cg=()=>{const[i,c]=Q.useState(!1),l=Q.useMemo(()=>[{key:"strictTypes",title:"Strict types",icon:n.jsx(mr,{}),what:"Forces PHP to respect parameter and return types more strictly.",why:"Reduces silent type juggling and catches mistakes early.",code:`<?php
declare(strict_types=1);

function add(int $a, int $b): int {
    return $a + $b;
}

add(2, 3);       // ok
add("2", "3");   // TypeError in strict mode
?>`,note:"declare(strict_types=1) must be the first statement in the file (after <?php)."},{key:"typedProps",title:"Typed properties",icon:n.jsx(kn,{}),what:"Class properties can have types like int, string, array, ?string.",why:"Makes objects safer and clearer, less guessing at runtime.",code:`<?php
class User {
    public int $id;
    public string $name;
    public ?string $email = null;
}
?>`,note:"Use ?type for nullable. Accessing an uninitialized typed property causes an error."},{key:"returnTypes",title:"Return types",icon:n.jsx(Wx,{}),what:"Functions can declare what they return: int, string, array, void, mixed, ?User.",why:"Prevents accidental wrong returns and improves readability.",code:`<?php
function getCount(): int {
    return 10;
}

function logMessage(string $msg): void {
    // no return
}
?>`,note:"If return type is declared and you return a different type, PHP throws a TypeError (especially strict mode)."},{key:"nullCoalescing",title:"Null coalescing operator ??",icon:n.jsx(gr,{}),what:"Provides a default when a value is null or not set.",why:"Cleaner than isset() checks for defaults.",code:`<?php
$name = $_GET["name"] ?? "Guest";

$theme = $config["theme"] ?? "dark";
?>`,note:"?? checks only for null / unset, not for empty string or 0."},{key:"spaceship",title:"Spaceship operator <=>",icon:n.jsx(gp,{}),what:"Compares two values and returns -1, 0, or 1.",why:"Perfect for sorting callbacks.",code:`<?php
// returns -1 if $a < $b
// returns  0 if $a == $b
// returns  1 if $a > $b
$result = 10 <=> 20; // -1

usort($nums, fn($a, $b) => $a <=> $b);
?>`,note:"Commonly used with usort and custom ordering logic."},{key:"attributes",title:"Attributes",icon:n.jsx(dm,{}),what:"Modern metadata system using #[] instead of docblock annotations.",why:"Used in frameworks for routing, validation, DI, etc.",code:`<?php
#[Attribute]
class Route {
    public function __construct(public string $path) {}
}

class UserController {
    #[Route("/users")]
    public function index() {}
}
?>`,note:"Attributes are read using reflection. Common in modern PHP frameworks."},{key:"enums",title:"Enums",icon:n.jsx(wt,{}),what:"A safe way to represent a fixed set of values.",why:"Prevents invalid states like status = 'donee' typo.",code:`<?php
enum Status: string {
    case Pending = "pending";
    case Paid = "paid";
    case Failed = "failed";
}

$status = Status::Paid;
?>`,note:"Enums improve correctness in business logic and APIs."},{key:"match",title:"Match expression",icon:n.jsx(de,{}),what:"Cleaner alternative to switch, returns a value and uses strict comparisons.",why:"Less boilerplate, fewer bugs, no fallthrough.",code:`<?php
$type = "admin";

$label = match ($type) {
    "admin" => "Full access",
    "user" => "Limited access",
    default => "Guest",
};
?>`,note:"match uses strict comparison (===) by default."},{key:"constructorPromotion",title:"Constructor property promotion",icon:n.jsx(Dt,{}),what:"Declare + assign class properties directly in constructor params.",why:"Cuts boilerplate and keeps classes clean.",code:`<?php
class Product {
    public function __construct(
        public int $id,
        public string $name,
        public float $price
    ) {}
}
?>`,note:"Great for DTOs and simple models. Use readonly when needed for immutability (modern PHP)."}],[]),p=()=>c(u=>!u);return n.jsxs(lg.Wrapper,{className:i?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:p,"aria-expanded":i,children:[n.jsx("span",{className:"chev",children:i?n.jsx(Le,{}):n.jsx(ze,{})}),n.jsx("span",{className:"icon",children:n.jsx(Dt,{})}),n.jsx("span",{className:"title",children:"Modern PHP Features"}),n.jsx("span",{className:"meta",children:i?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${i?"open":""}`,children:[n.jsxs("div",{className:"intro",children:[n.jsxs("div",{className:"pill",children:[n.jsx("span",{className:"pillIcon",children:n.jsx(Dt,{})}),"Modern PHP = safer code, less boilerplate"]}),n.jsx("p",{className:"p",children:"These features help you write cleaner and more reliable PHP. If you know these, your code looks modern and avoids common runtime bugs."}),n.jsxs("div",{className:"note",children:[n.jsx("div",{className:"noteTitle",children:"Quick rule"}),n.jsx("div",{className:"noteText",children:"Prefer strict types, typed properties, and return types for predictability. Use match and enums for safer business logic."})]})]}),n.jsx("div",{className:"sections",children:l.map(u=>n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:u.icon}),u.title]}),n.jsxs("div",{className:"content",children:[n.jsxs("div",{className:"block",children:[n.jsx("div",{className:"label",children:"What it is"}),n.jsx("div",{className:"text",children:u.what})]}),n.jsxs("div",{className:"block",children:[n.jsx("div",{className:"label",children:"Why it matters"}),n.jsx("div",{className:"text",children:u.why})]}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(de,{})}),"Example"]}),n.jsx("pre",{className:"code",children:u.code})]}),n.jsxs("div",{className:"tip",children:[n.jsx("span",{className:"tipLabel",children:"Tip"}),n.jsx("span",{className:"tipText",children:u.note})]})]})]},u.key))}),n.jsxs("div",{className:"footerNote",children:[n.jsx("div",{className:"footerTitle",children:"Fast revision checklist"}),n.jsxs("ul",{className:"checks",children:[n.jsxs("li",{children:[n.jsx("span",{className:"checkDot"}),"Use strict types for fewer surprises"]}),n.jsxs("li",{children:[n.jsx("span",{className:"checkDot"}),"Use typed properties and return types"]}),n.jsxs("li",{children:[n.jsx("span",{className:"checkDot"}),"Use ?? for defaults and match for mapping"]}),n.jsxs("li",{children:[n.jsx("span",{className:"checkDot"}),"Use enums for status and roles"]})]})]})]})]})},dg={Wrapper:ne.section`
        width: 100%;
        margin-bottom: 10px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px 14px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev {
            width: 28px;
            height: 28px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            background: var(--color-bg);
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .icon {
            width: 36px;
            height: 36px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            font-size: 18px;
            flex: 0 0 auto;
        }

        .title {
            font-weight: 900;
            letter-spacing: 0.2px;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            white-space: nowrap;
            flex: 0 0 auto;
        }

        .topicBody {
            max-height: 0px;
            overflow: hidden;
            transition: max-height 260ms ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 14000px;
        }

        .intro {
            padding: 14px 14px;
            border-bottom: 1px dashed var(--color-border-light);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
        }

        .pill {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 7px 10px;
            color: var(--color-text-secondary);
            font-size: 12px;
            margin-bottom: 10px;
        }

        .pillIcon {
            display: grid;
            place-items: center;
            color: var(--color-primary);
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .note {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 16px;
            padding: 12px;
        }

        .noteTitle {
            font-weight: 900;
            margin-bottom: 8px;
            color: var(--color-text-primary);
        }

        .noteText {
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-size: 14px;
        }

        .sections {
            padding: 14px 14px;
            display: grid;
            gap: 14px;
        }

        .section {
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 16px;
            overflow: hidden;
        }

        .sectionTitle {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 12px 12px;
            border-bottom: 1px solid var(--color-border);
            background: var(--color-surface);
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 14px;
        }

        .sectionIcon {
            width: 30px;
            height: 30px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .rows {
            display: grid;
        }

        .row {
            display: grid;
            grid-template-columns: 110px 1fr;
            gap: 12px;
            padding: 12px;
        }

        .row + .row {
            border-top: 1px dashed var(--color-border-light);
        }

        .op {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-weight: 900;
            color: var(--color-text-primary);
            background: var(--color-surface);
            border: 1px solid var(--color-border);
            border-radius: 12px;
            padding: 10px 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 44px;
        }

        .desc {
            color: var(--color-text-secondary);
            line-height: 1.65;
            font-size: 14px;
        }

        .ex {
            margin-top: 8px;
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            align-items: center;
        }

        .exLabel {
            font-size: 12px;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            padding: 5px 8px;
            border-radius: 999px;
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            color: var(--color-text-primary);
            font-size: 13px;
        }

        .codeBlock {
            margin-top: 12px;
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            border-radius: 16px;
            overflow: hidden;
        }

        .codeTop {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-bottom: 1px solid var(--color-code-border);
            color: var(--color-text-secondary);
            font-weight: 800;
            font-size: 12px;
            letter-spacing: 0.2px;
            background: var(--color-surface);
        }

        .codeIcon {
            display: grid;
            place-items: center;
            color: var(--color-primary);
            font-size: 14px;
        }

        .code {
            margin: 0;
            padding: 12px;
            font-size: 13px;
            line-height: 1.6;
            color: var(--color-text-secondary);
            overflow-x: auto;
            white-space: pre;
        }

        .footerNote {
            padding: 14px 14px;
            border-top: 1px solid var(--color-border);
            background: var(--color-surface-2);
        }

        .footerTitle {
            font-weight: 900;
            margin-bottom: 10px;
            color: var(--color-text-primary);
        }

        .checks {
            list-style: none;
            padding-left: 0;
            display: grid;
            gap: 10px;
            margin: 0;
        }

        .checks li {
            display: flex;
            align-items: center;
            gap: 10px;
            color: var(--color-text-secondary);
            font-size: 14px;
        }

        .checkDot {
            width: 10px;
            height: 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            box-shadow: inset 0 0 0 2px var(--color-primary);
            flex: 0 0 auto;
        }

        @media (max-width: 720px) {
            .row {
                grid-template-columns: 1fr;
            }

            .op {
                justify-content: flex-start;
            }
        }
    `},ug=()=>{const[i,c]=Q.useState(!1),l=()=>c(p=>!p);return n.jsxs(dg.Wrapper,{className:i?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":i,children:[n.jsx("span",{className:"chev",children:i?n.jsx(Le,{}):n.jsx(ze,{})}),n.jsx("span",{className:"icon",children:n.jsx(xo,{})}),n.jsx("span",{className:"title",children:"Composer and Autoloading"}),n.jsx("span",{className:"meta",children:i?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${i?"open":""}`,children:[n.jsxs("div",{className:"intro",children:[n.jsxs("div",{className:"pill",children:[n.jsx("span",{className:"pillIcon",children:n.jsx(xo,{})}),"PHP dependency manager + clean class loading"]}),n.jsx("p",{className:"p",children:"Composer is the standard way to install PHP libraries and load your classes automatically. It keeps projects clean, scalable, and predictable."}),n.jsxs("div",{className:"note",children:[n.jsx("div",{className:"noteTitle",children:"At a glance"}),n.jsxs("div",{className:"noteText",children:["You declare dependencies in"," ",n.jsx("span",{className:"mono",children:"composer.json"}),", run"," ",n.jsx("span",{className:"mono",children:"composer install"}),", and include"," ",n.jsx("span",{className:"mono",children:"vendor/autoload.php"}),"."]})]})]}),n.jsxs("div",{className:"sections",children:[n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:n.jsx(xo,{})}),"What is Composer"]}),n.jsxs("div",{className:"rows",children:[n.jsxs("div",{className:"row",children:[n.jsx("div",{className:"op",children:"Purpose"}),n.jsx("div",{className:"text",children:n.jsx("div",{className:"desc",children:"Composer manages third party packages (libraries) for PHP. It downloads them, locks versions, and generates an autoloader so you do not write manual require statements everywhere."})})]}),n.jsxs("div",{className:"row",children:[n.jsx("div",{className:"op",children:"Why"}),n.jsx("div",{className:"text",children:n.jsx("div",{className:"desc",children:"Easier dependency installs, consistent versions across machines, and clean project structure."})})]})]})]}),n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:n.jsx(bt,{})}),"composer.json"]}),n.jsxs("div",{className:"rows",children:[n.jsxs("div",{className:"row",children:[n.jsx("div",{className:"op",children:"What"}),n.jsxs("div",{className:"text",children:[n.jsx("div",{className:"desc",children:"The main config file. It defines project info, required packages, autoload rules, and scripts."}),n.jsxs("div",{className:"ex",children:[n.jsx("span",{className:"exLabel",children:"Common keys"}),n.jsx("span",{className:"mono",children:"require, require-dev, autoload, scripts"})]})]})]}),n.jsxs("div",{className:"row",children:[n.jsx("div",{className:"op",children:"Rule"}),n.jsx("div",{className:"text",children:n.jsxs("div",{className:"desc",children:["Do not edit"," ",n.jsx("span",{className:"mono",children:"vendor"})," ","files manually. Composer manages that folder."]})})]})]})]}),n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:n.jsx(Ux,{})}),"Installing packages"]}),n.jsxs("div",{className:"rows",children:[n.jsxs("div",{className:"row",children:[n.jsx("div",{className:"op",children:"Install"}),n.jsxs("div",{className:"text",children:[n.jsxs("div",{className:"desc",children:["Installs dependencies listed in"," ",n.jsx("span",{className:"mono",children:"composer.json"})," ","and creates the"," ",n.jsx("span",{className:"mono",children:"vendor"})," ","folder."]}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(de,{})}),"Command"]}),n.jsx("pre",{className:"code",children:"composer install"})]})]})]}),n.jsxs("div",{className:"row",children:[n.jsx("div",{className:"op",children:"Add"}),n.jsxs("div",{className:"text",children:[n.jsxs("div",{className:"desc",children:["Adds a new package and updates"," ",n.jsx("span",{className:"mono",children:"composer.json"})," ","and"," ",n.jsx("span",{className:"mono",children:"composer.lock"}),"."]}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(de,{})}),"Command"]}),n.jsx("pre",{className:"code",children:"composer require vendor/package"})]})]})]})]})]}),n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:n.jsx(mp,{})}),"Autoloading"]}),n.jsxs("div",{className:"rows",children:[n.jsxs("div",{className:"row",children:[n.jsx("div",{className:"op",children:"Meaning"}),n.jsx("div",{className:"text",children:n.jsxs("div",{className:"desc",children:["Autoloading means PHP loads class files automatically when you use a class. You do not write"," ",n.jsx("span",{className:"mono",children:"require"})," ","for every class file."]})})]}),n.jsxs("div",{className:"row",children:[n.jsx("div",{className:"op",children:"How"}),n.jsxs("div",{className:"text",children:[n.jsx("div",{className:"desc",children:"Include Composer's autoloader once, then use classes normally."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(de,{})}),"Include autoloader"]}),n.jsx("pre",{className:"code",children:'require __DIR__ . "/vendor/autoload.php";'})]})]})]}),n.jsxs("div",{className:"row",children:[n.jsx("div",{className:"op",children:"Tip"}),n.jsx("div",{className:"text",children:n.jsxs("div",{className:"desc",children:["If you update autoload settings, run"," ",n.jsx("span",{className:"mono",children:"composer dump-autoload"})," ","to regenerate the autoloader."]})})]})]})]}),n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:n.jsx(gr,{})}),"PSR standards"]}),n.jsxs("div",{className:"rows",children:[n.jsxs("div",{className:"row",children:[n.jsx("div",{className:"op",children:"What"}),n.jsx("div",{className:"text",children:n.jsx("div",{className:"desc",children:"PSR means PHP Standards Recommendation. These are community standards that help different libraries work together with consistent code style and autoloading."})})]}),n.jsxs("div",{className:"row",children:[n.jsx("div",{className:"op",children:"Must know"}),n.jsxs("div",{className:"text",children:[n.jsxs("div",{className:"desc",children:[n.jsx("span",{className:"mono",children:"PSR-4"})," is the most important for autoloading. It maps namespaces to folder paths."]}),n.jsxs("div",{className:"ex",children:[n.jsx("span",{className:"exLabel",children:"Example idea"}),n.jsx("span",{className:"mono",children:"App\\Controllers\\UserController"})]})]})]}),n.jsxs("div",{className:"row",children:[n.jsx("div",{className:"op",children:"Outcome"}),n.jsx("div",{className:"text",children:n.jsx("div",{className:"desc",children:"Cleaner codebase, predictable file structure, and easier team work."})})]})]})]})]}),n.jsxs("div",{className:"footerNote",children:[n.jsx("div",{className:"footerTitle",children:"Quick checklist"}),n.jsxs("ul",{className:"checks",children:[n.jsxs("li",{children:[n.jsx("span",{className:"checkDot"}),"Dependencies go in composer.json"]}),n.jsxs("li",{children:[n.jsx("span",{className:"checkDot"}),"Install with composer install"]}),n.jsxs("li",{children:[n.jsx("span",{className:"checkDot"}),"Require vendor/autoload.php once"]}),n.jsxs("li",{children:[n.jsx("span",{className:"checkDot"}),"Follow PSR-4 for namespaces and folders"]})]})]})]})]})},pg={Wrapper:ne.section`
        width: 100%;
        margin-bottom: 10px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev,
        .icon {
            width: 36px;
            height: 36px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 12px;
            background: var(--color-bg);
            color: var(--color-primary);
        }

        .title {
            font-weight: 900;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
        }

        .topicBody {
            max-height: 0px;
            overflow: hidden;
            transition: max-height 250ms ease;
        }

        .topicBody.open {
            max-height: 6000px;
        }

        .intro {
            padding: 14px;
            border-top: 1px solid var(--color-border);
            border-bottom: 1px dashed var(--color-border-light);
        }

        .p {
            color: var(--color-text-secondary);
            line-height: 1.7;
            margin: 0;
        }

        .sections {
            padding: 14px;
            display: grid;
            gap: 14px;
        }

        .section {
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 16px;
            overflow: hidden;
        }

        .sectionTitle {
            padding: 12px;
            display: flex;
            align-items: center;
            gap: 10px;
            font-weight: 900;
            border-bottom: 1px solid var(--color-border);
            background: var(--color-surface);
        }

        .sectionIcon {
            width: 30px;
            height: 30px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            border-radius: 10px;
            background: var(--color-bg);
            color: var(--color-primary);
        }

        .sectionBodyInner {
            padding: 12px;
        }

        .desc {
            color: var(--color-text-secondary);
            line-height: 1.7;
            margin-bottom: 10px;
        }

        .bullets {
            padding-left: 18px;
            list-style: disc;
            color: var(--color-text-secondary);
        }

        .bullets li {
            margin-bottom: 6px;
        }

        .codeBlock {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            background: var(--color-bg);
            overflow: hidden;
        }

        .codeTitle {
            padding: 12px;
            font-weight: 900;
            border-bottom: 1px solid var(--color-border);
            background: var(--color-surface);
        }

        pre {
            margin: 0;
            padding: 14px;
            background: var(--color-code-bg);
            border-top: 1px solid var(--color-code-border);
            font-size: 13px;
            overflow-x: auto;
        }
    `},fg=()=>{const[i,c]=Q.useState(!1),l=Q.useMemo(()=>[{key:"mvc",title:"MVC Concept",icon:n.jsx(gr,{}),text:"MVC stands for Model View Controller. It separates application logic into three layers to make code clean and maintainable.",bullets:["Model handles data and database logic","View handles UI output","Controller handles request logic and connects model and view","Separation improves scalability and testing"]},{key:"routing",title:"Routing Basics",icon:n.jsx(rm,{}),text:"Routing decides which controller runs when a user visits a URL.",bullets:["URL maps to specific controller action","Example: /users -> UserController","Helps organize application endpoints","Common in frameworks like Laravel"]},{key:"controllers",title:"Controllers",icon:n.jsx(jt,{}),text:"Controllers process user requests. They contain application logic.",bullets:["Receive request data","Validate inputs","Call models for data","Return a view or JSON response"]},{key:"views",title:"Views",icon:n.jsx(Qx,{}),text:"Views handle presentation layer. They generate HTML output.",bullets:["Display data from controller","Should not contain heavy logic","Keeps UI separate from backend code","Usually .php template files"]},{key:"models",title:"Models",icon:n.jsx(Nr,{}),text:"Models manage database interaction and business logic.",bullets:["Handle queries and database connection","Return structured data","Keep SQL separate from controllers","Represent application entities"]},{key:"structure",title:"Basic Folder Structure",icon:n.jsx(hp,{}),text:"A clean folder structure improves readability and maintainability.",bullets:["public -> entry point index.php","app/Controllers -> controller classes","app/Models -> database logic","app/Views -> templates","routes -> routing definitions"]}],[]);return n.jsxs(pg.Wrapper,{className:i?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:()=>c(p=>!p),"aria-expanded":i,children:[n.jsx("span",{className:"chev",children:i?n.jsx(Le,{}):n.jsx(ze,{})}),n.jsx("span",{className:"icon",children:n.jsx(gr,{})}),n.jsx("span",{className:"title",children:"Project Structure Basics"}),n.jsx("span",{className:"meta",children:i?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${i?"open":""}`,children:[n.jsx("div",{className:"intro",children:n.jsx("p",{className:"p",children:"Understanding structure is more important than syntax. Good architecture keeps your backend clean, scalable, and maintainable."})}),n.jsxs("div",{className:"sections",children:[l.map(p=>n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:p.icon}),p.title]}),n.jsxs("div",{className:"sectionBodyInner",children:[n.jsx("p",{className:"desc",children:p.text}),n.jsx("ul",{className:"bullets",children:p.bullets.map((u,v)=>n.jsx("li",{children:u},v))})]})]},p.key)),n.jsxs("div",{className:"codeBlock",children:[n.jsx("div",{className:"codeTitle",children:"Example Folder Structure"}),n.jsx("pre",{children:`project/
│
├── public/
│   └── index.php
│
├── app/
│   ├── Controllers/
│   ├── Models/
│   └── Views/
│
└── routes/
    └── web.php`})]})]})]})]})},hg={Wrapper:ne.section`
        width: 100%;
        margin-bottom: 10px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev,
        .icon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
        }

        .icon {
            color: var(--color-primary);
        }

        .title {
            font-weight: 900;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
        }

        .topicBody {
            max-height: 0;
            overflow: hidden;
            transition: max-height 260ms ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 5000px;
        }

        .intro {
            padding: 14px;
            border-bottom: 1px dashed var(--color-border-light);
        }

        .pill {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 6px 10px;
            font-size: 12px;
            margin-bottom: 10px;
        }

        .sections {
            padding: 14px;
            display: grid;
            gap: 14px;
        }

        .section {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            background: var(--color-bg);
        }

        .sectionTitle {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 12px;
            font-weight: 900;
            border-bottom: 1px solid var(--color-border);
        }

        .sectionIcon {
            width: 30px;
            height: 30px;
            border-radius: 10px;
            display: grid;
            place-items: center;
            background: var(--color-surface);
            border: 1px solid var(--color-border);
            color: var(--color-primary);
        }

        .sectionBody {
            padding: 12px;
            font-size: 14px;
            line-height: 1.7;
            color: var(--color-text-secondary);
        }

        pre {
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            padding: 10px;
            border-radius: 12px;
            overflow-x: auto;
            margin-top: 8px;
        }

        .note {
            margin-top: 8px;
            font-size: 13px;
            color: var(--color-warning);
        }
    `},xg=()=>{const[i,c]=Q.useState(!1),l=()=>c(p=>!p);return n.jsxs(hg.Wrapper,{children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":i,children:[n.jsx("span",{className:"chev",children:i?n.jsx(Le,{}):n.jsx(ze,{})}),n.jsx("span",{className:"icon",children:n.jsx(jt,{})}),n.jsx("span",{className:"title",children:"Deployment Basics"}),n.jsx("span",{className:"meta",children:i?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${i?"open":""}`,children:[n.jsxs("div",{className:"intro",children:[n.jsxs("div",{className:"pill",children:[n.jsx("span",{className:"pillIcon",children:n.jsx(de,{})}),"Production fundamentals checklist"]}),n.jsx("p",{className:"p",children:"Deployment is the process of moving your PHP application from local development to a live production server. It requires environment configuration, security settings, and proper server setup."})]}),n.jsxs("div",{className:"sections",children:[n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:n.jsx(bt,{})}),".env files"]}),n.jsxs("div",{className:"sectionBody",children:[n.jsx("p",{children:"Environment files store sensitive configuration like database credentials, API keys, and secret tokens. These should never be committed to version control."}),n.jsx("pre",{children:`DB_HOST=localhost
DB_NAME=app_db
DB_USER=root
DB_PASS=secret`}),n.jsx("div",{className:"note",children:"Keep .env outside public directory and add it to .gitignore."})]})]}),n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:n.jsx(am,{})}),"Server Configuration"]}),n.jsxs("div",{className:"sectionBody",children:[n.jsx("p",{children:"A PHP app runs through a web server like Apache or Nginx. The server must be configured to point to your project’s public directory as the document root."}),n.jsx("div",{className:"note",children:"Only expose the public folder, never the full project root."})]})]}),n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:n.jsx(jt,{})}),"Apache vs Nginx"]}),n.jsxs("div",{className:"sectionBody",children:[n.jsx("p",{children:"Apache uses .htaccess files for per-directory configuration. Nginx uses centralized configuration files."}),n.jsxs("ul",{children:[n.jsx("li",{children:"Apache - simpler setup, supports .htaccess"}),n.jsx("li",{children:"Nginx - faster under heavy load"})]})]})]}),n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:n.jsx(bt,{})}),".htaccess basics"]}),n.jsxs("div",{className:"sectionBody",children:[n.jsx("p",{children:".htaccess allows URL rewriting, redirects, access control, and security rules in Apache."}),n.jsx("pre",{children:`RewriteEngine On
RewriteRule ^$ index.php [L]
RewriteRule ^(.*)$ index.php?url=$1 [QSA,L]`}),n.jsx("div",{className:"note",children:"Used for clean URLs and routing in PHP apps."})]})]}),n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:n.jsx(dp,{})}),"Production error settings"]}),n.jsxs("div",{className:"sectionBody",children:[n.jsx("p",{children:"In production, never display errors to users. Log errors instead."}),n.jsx("pre",{children:`display_errors = Off
log_errors = On`}),n.jsx("div",{className:"note",children:"Showing errors in production exposes sensitive information."})]})]})]})]})]})},mg={Wrapper:ne.section`
        width: 100%;
        margin-bottom: 10px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev,
        .icon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
        }

        .icon {
            color: var(--color-primary);
        }

        .title {
            font-weight: 900;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
        }

        .topicBody {
            max-height: 0;
            overflow: hidden;
            transition: max-height 260ms ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 7000px;
        }

        .intro {
            padding: 14px;
            border-bottom: 1px dashed var(--color-border-light);
        }

        .pill {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 6px 10px;
            font-size: 12px;
            margin-bottom: 10px;
            color: var(--color-text-secondary);
        }

        .pillIcon {
            color: var(--color-primary);
            display: grid;
            place-items: center;
        }

        .p {
            margin: 0;
            color: var(--color-text-secondary);
            line-height: 1.7;
        }

        .note {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 16px;
            padding: 12px;
        }

        .noteTitle {
            font-weight: 900;
            margin-bottom: 8px;
            color: var(--color-text-primary);
            font-size: 14px;
        }

        .noteText {
            color: var(--color-text-secondary);
            line-height: 1.7;
            font-size: 14px;
        }

        .sections {
            padding: 14px;
            display: grid;
            gap: 14px;
        }

        .section {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            background: var(--color-bg);
            overflow: hidden;
        }

        .sectionTitle {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 12px;
            font-weight: 900;
            border-bottom: 1px solid var(--color-border);
            background: var(--color-surface);
            color: var(--color-text-primary);
            font-size: 14px;
        }

        .sectionIcon {
            width: 30px;
            height: 30px;
            border-radius: 10px;
            display: grid;
            place-items: center;
            background: var(--color-bg);
            border: 1px solid var(--color-border);
            color: var(--color-primary);
        }

        .sectionBody {
            padding: 12px;
            font-size: 14px;
            line-height: 1.7;
            color: var(--color-text-secondary);
        }

        .sectionBody p {
            margin: 0;
        }

        .sectionBody ul {
            margin-top: 10px;
            display: grid;
            gap: 8px;
            padding-left: 0;
        }

        .sectionBody li {
            display: flex;
            gap: 10px;
            align-items: flex-start;
        }

        .sectionBody li::before {
            content: "";
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: var(--color-primary);
            margin-top: 7px;
            flex: 0 0 auto;
        }

        pre {
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            padding: 10px;
            border-radius: 12px;
            overflow-x: auto;
            margin-top: 10px;
        }
    `},gg=()=>{const[i,c]=Q.useState(!1),l=()=>c(p=>!p);return n.jsxs(mg.Wrapper,{children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":i,children:[n.jsx("span",{className:"chev",children:i?n.jsx(Le,{}):n.jsx(ze,{})}),n.jsx("span",{className:"icon",children:n.jsx(Dt,{})}),n.jsx("span",{className:"title",children:"Performance Basics"}),n.jsx("span",{className:"meta",children:i?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${i?"open":""}`,children:[n.jsxs("div",{className:"intro",children:[n.jsxs("div",{className:"pill",children:[n.jsx("span",{className:"pillIcon",children:n.jsx(pm,{})}),"Faster pages, fewer server hits"]}),n.jsx("p",{className:"p",children:"Performance is mostly about doing less work: fewer DB calls, less repeated computation, and letting caching do its job. Focus on the biggest bottlenecks first."}),n.jsxs("div",{className:"note",children:[n.jsx("div",{className:"noteTitle",children:"Rule of thumb"}),n.jsx("div",{className:"noteText",children:"Database calls are usually slower than PHP code. Reduce queries first, then optimize code."})]})]}),n.jsxs("div",{className:"sections",children:[n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:n.jsx(gr,{})}),"Caching basics"]}),n.jsxs("div",{className:"sectionBody",children:[n.jsx("p",{children:"Caching stores results so you do not recompute or refetch them on every request. Cache can be at browser level, server level, or application level."}),n.jsxs("ul",{children:[n.jsx("li",{children:"Browser caching for static files (CSS, JS, images)"}),n.jsx("li",{children:"Server caching for generated pages or API responses"}),n.jsx("li",{children:"App caching for expensive DB queries or computed results"})]}),n.jsx("div",{className:"note",children:"Cache only when data does not change too often, and always plan cache invalidation."})]})]}),n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:n.jsx(de,{})}),"Output buffering"]}),n.jsxs("div",{className:"sectionBody",children:[n.jsx("p",{children:"Output buffering lets PHP collect output in memory before sending it to the browser. This helps when you want to modify output later or control headers before content is sent."}),n.jsx("pre",{children:`ob_start();

echo "Hello";
$content = ob_get_clean(); // gets output and clears buffer

// now you can modify $content or cache it`}),n.jsx("div",{className:"note",children:'Useful for templating, caching full HTML, and avoiding "headers already sent" issues.'})]})]}),n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:n.jsx(pl,{})}),"OPcache"]}),n.jsxs("div",{className:"sectionBody",children:[n.jsx("p",{children:"OPcache is a PHP extension that stores compiled script bytecode in memory. This avoids parsing and compiling PHP files on every request."}),n.jsx("pre",{children:`; php.ini (example)
opcache.enable=1
opcache.memory_consumption=128
opcache.max_accelerated_files=10000`}),n.jsx("div",{className:"note",children:"Enable OPcache in production. It gives big speed wins with almost zero code changes."})]})]}),n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:n.jsx(Nr,{})}),"Reducing DB calls"]}),n.jsxs("div",{className:"sectionBody",children:[n.jsx("p",{children:"Too many DB queries slow down requests. Try to fetch only what you need, and reduce repeated queries in loops."}),n.jsxs("ul",{children:[n.jsx("li",{children:"Use indexes for common WHERE columns"}),n.jsx("li",{children:"Fetch only required columns (avoid SELECT *)"}),n.jsx("li",{children:"Batch queries instead of querying inside loops"}),n.jsx("li",{children:"Cache frequently used results"})]}),n.jsx("div",{className:"note",children:"If you see queries inside a loop, it is usually a performance red flag."})]})]}),n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:n.jsx(Dt,{})}),"Code optimization"]}),n.jsxs("div",{className:"sectionBody",children:[n.jsx("p",{children:"Optimize only after measuring. Keep code simple, avoid heavy work on every request, and use built in functions where possible."}),n.jsxs("ul",{children:[n.jsx("li",{children:"Profile first, then optimize"}),n.jsx("li",{children:"Reuse computed values"}),n.jsx("li",{children:"Avoid unnecessary loops and conversions"}),n.jsx("li",{children:"Use prepared statements for DB queries"}),n.jsx("li",{children:"Move heavy tasks to background jobs when needed"})]}),n.jsx("div",{className:"note",children:"Biggest wins usually come from caching + fewer DB calls, not micro optimizations."})]})]})]})]})]})},vg={Wrapper:ne.section`
        width: 100%;
        margin-bottom: 10px;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;

        .topicHeader {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px;
            background: transparent;
            color: var(--color-text-primary);
            text-align: left;
        }

        .topicHeader:hover {
            background: var(--color-surface-2);
        }

        .chev,
        .icon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
        }

        .icon {
            color: var(--color-primary);
        }

        .title {
            font-weight: 900;
            flex: 1;
        }

        .meta {
            font-size: 12px;
            color: var(--color-text-muted);
        }

        .topicBody {
            max-height: 0;
            overflow: hidden;
            transition: max-height 260ms ease;
            border-top: 1px solid var(--color-border);
        }

        .topicBody.open {
            max-height: 5000px;
        }

        .intro {
            padding: 14px;
            border-bottom: 1px dashed var(--color-border-light);
        }

        .pill {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            border: 1px solid var(--color-border);
            background: var(--color-bg);
            border-radius: 999px;
            padding: 6px 10px;
            font-size: 12px;
            margin-bottom: 10px;
        }

        .sections {
            padding: 14px;
            display: grid;
            gap: 14px;
        }

        .section {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            background: var(--color-bg);
        }

        .sectionTitle {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 12px;
            font-weight: 900;
            border-bottom: 1px solid var(--color-border);
        }

        .sectionIcon {
            width: 30px;
            height: 30px;
            border-radius: 10px;
            display: grid;
            place-items: center;
            background: var(--color-surface);
            border: 1px solid var(--color-border);
            color: var(--color-primary);
        }

        .sectionBody {
            padding: 12px;
            font-size: 14px;
            line-height: 1.7;
            color: var(--color-text-secondary);
        }

        pre {
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            padding: 10px;
            border-radius: 12px;
            overflow-x: auto;
            margin-top: 8px;
        }

        .note {
            margin-top: 8px;
            font-size: 13px;
            color: var(--color-warning);
        }
    `},yg=()=>{const[i,c]=Q.useState(!1),l=()=>c(p=>!p);return n.jsxs(vg.Wrapper,{children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":i,children:[n.jsx("span",{className:"chev",children:i?n.jsx(Le,{}):n.jsx(ze,{})}),n.jsx("span",{className:"icon",children:n.jsx($u,{})}),n.jsx("span",{className:"title",children:"Testing Basics"}),n.jsx("span",{className:"meta",children:i?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${i?"open":""}`,children:[n.jsxs("div",{className:"intro",children:[n.jsxs("div",{className:"pill",children:[n.jsx("span",{className:"pillIcon",children:n.jsx(de,{})}),"Stability and reliability fundamentals"]}),n.jsx("p",{className:"p",children:"Testing ensures your PHP application behaves correctly. It helps detect bugs early and prevents regressions when updating code."})]}),n.jsxs("div",{className:"sections",children:[n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:n.jsx($u,{})}),"Basic Unit Testing Concept"]}),n.jsxs("div",{className:"sectionBody",children:[n.jsx("p",{children:"Unit testing means testing small pieces of code independently, usually functions or methods. Each test verifies expected output for a given input."}),n.jsx("pre",{children:`function add($a, $b) {
    return $a + $b;
}

// Expected: 5
add(2, 3);`}),n.jsx("div",{className:"note",children:"Goal: One function, one behavior, one test."})]})]}),n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:n.jsx(de,{})}),"PHPUnit Basics"]}),n.jsxs("div",{className:"sectionBody",children:[n.jsx("p",{children:"PHPUnit is the standard testing framework for PHP. It allows automated test execution and assertions."}),n.jsx("pre",{children:`use PHPUnit\\Framework\\TestCase;

class MathTest extends TestCase {
    public function testAddition() {
        $this->assertEquals(5, 2 + 3);
    }
}`}),n.jsx("div",{className:"note",children:"Run tests via: vendor/bin/phpunit"})]})]}),n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:n.jsx(fl,{})}),"Debugging with var_dump"]}),n.jsxs("div",{className:"sectionBody",children:[n.jsx("p",{children:"var_dump displays variable type and value. Useful during development for quick inspection."}),n.jsx("pre",{children:`$user = ["name" => "Ash", "age" => 25];
var_dump($user);`}),n.jsx("div",{className:"note",children:"Avoid leaving var_dump in production code."})]})]}),n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:n.jsx(bt,{})}),"Logging"]}),n.jsxs("div",{className:"sectionBody",children:[n.jsx("p",{children:"Logging records runtime information to files. Essential for debugging production issues."}),n.jsx("pre",{children:'error_log("Something went wrong");'}),n.jsx("div",{className:"note",children:"Production apps log errors instead of displaying them."})]})]})]})]})]})};function wg(){return n.jsxs(Gs.Wrapper,{children:[n.jsx(Gs.Header,{children:n.jsx(xm,{})}),n.jsxs(Gs.Main,{id:"notes-scroll",children:[n.jsxs("div",{className:"contentWrapper",children:[n.jsx(Tm,{}),n.jsx(Pm,{}),n.jsx(Lm,{}),n.jsx(Im,{}),n.jsx(Mm,{}),n.jsx(Om,{}),n.jsx(Bm,{}),n.jsx(Fm,{}),n.jsx(Wm,{}),n.jsx(Vm,{}),n.jsx(Gm,{}),n.jsx(Km,{}),n.jsx(Xm,{}),n.jsx(Zm,{}),n.jsx(rg,{}),n.jsx(ng,{}),n.jsx(ig,{}),n.jsx(sg,{}),n.jsx(cg,{}),n.jsx(ug,{}),n.jsx(fg,{}),n.jsx(xg,{}),n.jsx(gg,{}),n.jsx(yg,{})]}),n.jsx("div",{className:"footerWrapper",children:n.jsx(Sm,{})})]}),n.jsx(Cm,{})]})}Eh.createRoot(document.getElementById("root")).render(n.jsx(n.Fragment,{children:n.jsx(wg,{})}));
