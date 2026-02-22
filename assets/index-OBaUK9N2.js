(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))p(u);new MutationObserver(u=>{for(const v of u)if(v.type==="childList")for(const b of v.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&p(b)}).observe(document,{childList:!0,subtree:!0});function l(u){const v={};return u.integrity&&(v.integrity=u.integrity),u.referrerPolicy&&(v.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?v.credentials="include":u.crossOrigin==="anonymous"?v.credentials="omit":v.credentials="same-origin",v}function p(u){if(u.ep)return;u.ep=!0;const v=l(u);fetch(u.href,v)}})();function xh(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Ma={exports:{}},lo={},Oa={exports:{}},oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var su;function mh(){if(su)return oe;su=1;var i=Symbol.for("react.element"),c=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),b=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),Y=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),F=Symbol.iterator;function Z(m){return m===null||typeof m!="object"?null:(m=F&&m[F]||m["@@iterator"],typeof m=="function"?m:null)}var le={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X=Object.assign,D={};function q(m,k,ee){this.props=m,this.context=k,this.refs=D,this.updater=ee||le}q.prototype.isReactComponent={},q.prototype.setState=function(m,k){if(typeof m!="object"&&typeof m!="function"&&m!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,m,k,"setState")},q.prototype.forceUpdate=function(m){this.updater.enqueueForceUpdate(this,m,"forceUpdate")};function ge(){}ge.prototype=q.prototype;function ue(m,k,ee){this.props=m,this.context=k,this.refs=D,this.updater=ee||le}var ne=ue.prototype=new ge;ne.constructor=ue,X(ne,q.prototype),ne.isPureReactComponent=!0;var L=Array.isArray,J=Object.prototype.hasOwnProperty,W={current:null},_={key:!0,ref:!0,__self:!0,__source:!0};function H(m,k,ee){var re,ae={},ie=null,pe=null;if(k!=null)for(re in k.ref!==void 0&&(pe=k.ref),k.key!==void 0&&(ie=""+k.key),k)J.call(k,re)&&!_.hasOwnProperty(re)&&(ae[re]=k[re]);var de=arguments.length-2;if(de===1)ae.children=ee;else if(1<de){for(var ve=Array(de),Ee=0;Ee<de;Ee++)ve[Ee]=arguments[Ee+2];ae.children=ve}if(m&&m.defaultProps)for(re in de=m.defaultProps,de)ae[re]===void 0&&(ae[re]=de[re]);return{$$typeof:i,type:m,key:ie,ref:pe,props:ae,_owner:W.current}}function we(m,k){return{$$typeof:i,type:m.type,key:k,ref:m.ref,props:m.props,_owner:m._owner}}function Re(m){return typeof m=="object"&&m!==null&&m.$$typeof===i}function se(m){var k={"=":"=0",":":"=2"};return"$"+m.replace(/[=:]/g,function(ee){return k[ee]})}var Ie=/\/+/g;function Ce(m,k){return typeof m=="object"&&m!==null&&m.key!=null?se(""+m.key):k.toString(36)}function qe(m,k,ee,re,ae){var ie=typeof m;(ie==="undefined"||ie==="boolean")&&(m=null);var pe=!1;if(m===null)pe=!0;else switch(ie){case"string":case"number":pe=!0;break;case"object":switch(m.$$typeof){case i:case c:pe=!0}}if(pe)return pe=m,ae=ae(pe),m=re===""?"."+Ce(pe,0):re,L(ae)?(ee="",m!=null&&(ee=m.replace(Ie,"$&/")+"/"),qe(ae,k,ee,"",function(Ee){return Ee})):ae!=null&&(Re(ae)&&(ae=we(ae,ee+(!ae.key||pe&&pe.key===ae.key?"":(""+ae.key).replace(Ie,"$&/")+"/")+m)),k.push(ae)),1;if(pe=0,re=re===""?".":re+":",L(m))for(var de=0;de<m.length;de++){ie=m[de];var ve=re+Ce(ie,de);pe+=qe(ie,k,ee,ve,ae)}else if(ve=Z(m),typeof ve=="function")for(m=ve.call(m),de=0;!(ie=m.next()).done;)ie=ie.value,ve=re+Ce(ie,de++),pe+=qe(ie,k,ee,ve,ae);else if(ie==="object")throw k=String(m),Error("Objects are not valid as a React child (found: "+(k==="[object Object]"?"object with keys {"+Object.keys(m).join(", ")+"}":k)+"). If you meant to render a collection of children, use an array instead.");return pe}function er(m,k,ee){if(m==null)return m;var re=[],ae=0;return qe(m,re,"","",function(ie){return k.call(ee,ie,ae++)}),re}function Ke(m){if(m._status===-1){var k=m._result;k=k(),k.then(function(ee){(m._status===0||m._status===-1)&&(m._status=1,m._result=ee)},function(ee){(m._status===0||m._status===-1)&&(m._status=2,m._result=ee)}),m._status===-1&&(m._status=0,m._result=k)}if(m._status===1)return m._result.default;throw m._result}var be={current:null},E={transition:null},B={ReactCurrentDispatcher:be,ReactCurrentBatchConfig:E,ReactCurrentOwner:W};function z(){throw Error("act(...) is not supported in production builds of React.")}return oe.Children={map:er,forEach:function(m,k,ee){er(m,function(){k.apply(this,arguments)},ee)},count:function(m){var k=0;return er(m,function(){k++}),k},toArray:function(m){return er(m,function(k){return k})||[]},only:function(m){if(!Re(m))throw Error("React.Children.only expected to receive a single React element child.");return m}},oe.Component=q,oe.Fragment=l,oe.Profiler=u,oe.PureComponent=ue,oe.StrictMode=p,oe.Suspense=T,oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B,oe.act=z,oe.cloneElement=function(m,k,ee){if(m==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+m+".");var re=X({},m.props),ae=m.key,ie=m.ref,pe=m._owner;if(k!=null){if(k.ref!==void 0&&(ie=k.ref,pe=W.current),k.key!==void 0&&(ae=""+k.key),m.type&&m.type.defaultProps)var de=m.type.defaultProps;for(ve in k)J.call(k,ve)&&!_.hasOwnProperty(ve)&&(re[ve]=k[ve]===void 0&&de!==void 0?de[ve]:k[ve])}var ve=arguments.length-2;if(ve===1)re.children=ee;else if(1<ve){de=Array(ve);for(var Ee=0;Ee<ve;Ee++)de[Ee]=arguments[Ee+2];re.children=de}return{$$typeof:i,type:m.type,key:ae,ref:ie,props:re,_owner:pe}},oe.createContext=function(m){return m={$$typeof:b,_currentValue:m,_currentValue2:m,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},m.Provider={$$typeof:v,_context:m},m.Consumer=m},oe.createElement=H,oe.createFactory=function(m){var k=H.bind(null,m);return k.type=m,k},oe.createRef=function(){return{current:null}},oe.forwardRef=function(m){return{$$typeof:P,render:m}},oe.isValidElement=Re,oe.lazy=function(m){return{$$typeof:G,_payload:{_status:-1,_result:m},_init:Ke}},oe.memo=function(m,k){return{$$typeof:Y,type:m,compare:k===void 0?null:k}},oe.startTransition=function(m){var k=E.transition;E.transition={};try{m()}finally{E.transition=k}},oe.unstable_act=z,oe.useCallback=function(m,k){return be.current.useCallback(m,k)},oe.useContext=function(m){return be.current.useContext(m)},oe.useDebugValue=function(){},oe.useDeferredValue=function(m){return be.current.useDeferredValue(m)},oe.useEffect=function(m,k){return be.current.useEffect(m,k)},oe.useId=function(){return be.current.useId()},oe.useImperativeHandle=function(m,k,ee){return be.current.useImperativeHandle(m,k,ee)},oe.useInsertionEffect=function(m,k){return be.current.useInsertionEffect(m,k)},oe.useLayoutEffect=function(m,k){return be.current.useLayoutEffect(m,k)},oe.useMemo=function(m,k){return be.current.useMemo(m,k)},oe.useReducer=function(m,k,ee){return be.current.useReducer(m,k,ee)},oe.useRef=function(m){return be.current.useRef(m)},oe.useState=function(m){return be.current.useState(m)},oe.useSyncExternalStore=function(m,k,ee){return be.current.useSyncExternalStore(m,k,ee)},oe.useTransition=function(){return be.current.useTransition()},oe.version="18.3.1",oe}var au;function nl(){return au||(au=1,Oa.exports=mh()),Oa.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lu;function gh(){if(lu)return lo;lu=1;var i=nl(),c=Symbol.for("react.element"),l=Symbol.for("react.fragment"),p=Object.prototype.hasOwnProperty,u=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v={key:!0,ref:!0,__self:!0,__source:!0};function b(P,T,Y){var G,F={},Z=null,le=null;Y!==void 0&&(Z=""+Y),T.key!==void 0&&(Z=""+T.key),T.ref!==void 0&&(le=T.ref);for(G in T)p.call(T,G)&&!v.hasOwnProperty(G)&&(F[G]=T[G]);if(P&&P.defaultProps)for(G in T=P.defaultProps,T)F[G]===void 0&&(F[G]=T[G]);return{$$typeof:c,type:P,key:Z,ref:le,props:F,_owner:u.current}}return lo.Fragment=l,lo.jsx=b,lo.jsxs=b,lo}var cu;function vh(){return cu||(cu=1,Ma.exports=gh()),Ma.exports}var n=vh(),Ci={},Ha={exports:{}},lr={},Aa={exports:{}},Ba={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var du;function yh(){return du||(du=1,(function(i){function c(E,B){var z=E.length;E.push(B);e:for(;0<z;){var m=z-1>>>1,k=E[m];if(0<u(k,B))E[m]=B,E[z]=k,z=m;else break e}}function l(E){return E.length===0?null:E[0]}function p(E){if(E.length===0)return null;var B=E[0],z=E.pop();if(z!==B){E[0]=z;e:for(var m=0,k=E.length,ee=k>>>1;m<ee;){var re=2*(m+1)-1,ae=E[re],ie=re+1,pe=E[ie];if(0>u(ae,z))ie<k&&0>u(pe,ae)?(E[m]=pe,E[ie]=z,m=ie):(E[m]=ae,E[re]=z,m=re);else if(ie<k&&0>u(pe,z))E[m]=pe,E[ie]=z,m=ie;else break e}}return B}function u(E,B){var z=E.sortIndex-B.sortIndex;return z!==0?z:E.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var v=performance;i.unstable_now=function(){return v.now()}}else{var b=Date,P=b.now();i.unstable_now=function(){return b.now()-P}}var T=[],Y=[],G=1,F=null,Z=3,le=!1,X=!1,D=!1,q=typeof setTimeout=="function"?setTimeout:null,ge=typeof clearTimeout=="function"?clearTimeout:null,ue=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ne(E){for(var B=l(Y);B!==null;){if(B.callback===null)p(Y);else if(B.startTime<=E)p(Y),B.sortIndex=B.expirationTime,c(T,B);else break;B=l(Y)}}function L(E){if(D=!1,ne(E),!X)if(l(T)!==null)X=!0,Ke(J);else{var B=l(Y);B!==null&&be(L,B.startTime-E)}}function J(E,B){X=!1,D&&(D=!1,ge(H),H=-1),le=!0;var z=Z;try{for(ne(B),F=l(T);F!==null&&(!(F.expirationTime>B)||E&&!se());){var m=F.callback;if(typeof m=="function"){F.callback=null,Z=F.priorityLevel;var k=m(F.expirationTime<=B);B=i.unstable_now(),typeof k=="function"?F.callback=k:F===l(T)&&p(T),ne(B)}else p(T);F=l(T)}if(F!==null)var ee=!0;else{var re=l(Y);re!==null&&be(L,re.startTime-B),ee=!1}return ee}finally{F=null,Z=z,le=!1}}var W=!1,_=null,H=-1,we=5,Re=-1;function se(){return!(i.unstable_now()-Re<we)}function Ie(){if(_!==null){var E=i.unstable_now();Re=E;var B=!0;try{B=_(!0,E)}finally{B?Ce():(W=!1,_=null)}}else W=!1}var Ce;if(typeof ue=="function")Ce=function(){ue(Ie)};else if(typeof MessageChannel!="undefined"){var qe=new MessageChannel,er=qe.port2;qe.port1.onmessage=Ie,Ce=function(){er.postMessage(null)}}else Ce=function(){q(Ie,0)};function Ke(E){_=E,W||(W=!0,Ce())}function be(E,B){H=q(function(){E(i.unstable_now())},B)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(E){E.callback=null},i.unstable_continueExecution=function(){X||le||(X=!0,Ke(J))},i.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):we=0<E?Math.floor(1e3/E):5},i.unstable_getCurrentPriorityLevel=function(){return Z},i.unstable_getFirstCallbackNode=function(){return l(T)},i.unstable_next=function(E){switch(Z){case 1:case 2:case 3:var B=3;break;default:B=Z}var z=Z;Z=B;try{return E()}finally{Z=z}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(E,B){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var z=Z;Z=E;try{return B()}finally{Z=z}},i.unstable_scheduleCallback=function(E,B,z){var m=i.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?m+z:m):z=m,E){case 1:var k=-1;break;case 2:k=250;break;case 5:k=1073741823;break;case 4:k=1e4;break;default:k=5e3}return k=z+k,E={id:G++,callback:B,priorityLevel:E,startTime:z,expirationTime:k,sortIndex:-1},z>m?(E.sortIndex=z,c(Y,E),l(T)===null&&E===l(Y)&&(D?(ge(H),H=-1):D=!0,be(L,z-m))):(E.sortIndex=k,c(T,E),X||le||(X=!0,Ke(J))),E},i.unstable_shouldYield=se,i.unstable_wrapCallback=function(E){var B=Z;return function(){var z=Z;Z=B;try{return E.apply(this,arguments)}finally{Z=z}}}})(Ba)),Ba}var uu;function wh(){return uu||(uu=1,Aa.exports=yh()),Aa.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pu;function bh(){if(pu)return lr;pu=1;var i=nl(),c=wh();function l(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var p=new Set,u={};function v(e,r){b(e,r),b(e+"Capture",r)}function b(e,r){for(u[e]=r,e=0;e<r.length;e++)p.add(r[e])}var P=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),T=Object.prototype.hasOwnProperty,Y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,G={},F={};function Z(e){return T.call(F,e)?!0:T.call(G,e)?!1:Y.test(e)?F[e]=!0:(G[e]=!0,!1)}function le(e,r,t,o){if(t!==null&&t.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return o?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function X(e,r,t,o){if(r===null||typeof r=="undefined"||le(e,r,t,o))return!0;if(o)return!1;if(t!==null)switch(t.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function D(e,r,t,o,s,a,d){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=o,this.attributeNamespace=s,this.mustUseProperty=t,this.propertyName=e,this.type=r,this.sanitizeURL=a,this.removeEmptyString=d}var q={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){q[e]=new D(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var r=e[0];q[r]=new D(r,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){q[e]=new D(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){q[e]=new D(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){q[e]=new D(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){q[e]=new D(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){q[e]=new D(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){q[e]=new D(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){q[e]=new D(e,5,!1,e.toLowerCase(),null,!1,!1)});var ge=/[\-:]([a-z])/g;function ue(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var r=e.replace(ge,ue);q[r]=new D(r,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var r=e.replace(ge,ue);q[r]=new D(r,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var r=e.replace(ge,ue);q[r]=new D(r,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){q[e]=new D(e,1,!1,e.toLowerCase(),null,!1,!1)}),q.xlinkHref=new D("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){q[e]=new D(e,1,!1,e.toLowerCase(),null,!0,!0)});function ne(e,r,t,o){var s=q.hasOwnProperty(r)?q[r]:null;(s!==null?s.type!==0:o||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(X(r,t,s,o)&&(t=null),o||s===null?Z(r)&&(t===null?e.removeAttribute(r):e.setAttribute(r,""+t)):s.mustUseProperty?e[s.propertyName]=t===null?s.type===3?!1:"":t:(r=s.attributeName,o=s.attributeNamespace,t===null?e.removeAttribute(r):(s=s.type,t=s===3||s===4&&t===!0?"":""+t,o?e.setAttributeNS(o,r,t):e.setAttribute(r,t))))}var L=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,J=Symbol.for("react.element"),W=Symbol.for("react.portal"),_=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),we=Symbol.for("react.profiler"),Re=Symbol.for("react.provider"),se=Symbol.for("react.context"),Ie=Symbol.for("react.forward_ref"),Ce=Symbol.for("react.suspense"),qe=Symbol.for("react.suspense_list"),er=Symbol.for("react.memo"),Ke=Symbol.for("react.lazy"),be=Symbol.for("react.offscreen"),E=Symbol.iterator;function B(e){return e===null||typeof e!="object"?null:(e=E&&e[E]||e["@@iterator"],typeof e=="function"?e:null)}var z=Object.assign,m;function k(e){if(m===void 0)try{throw Error()}catch(t){var r=t.stack.trim().match(/\n( *(at )?)/);m=r&&r[1]||""}return`
`+m+e}var ee=!1;function re(e,r){if(!e||ee)return"";ee=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(w){var o=w}Reflect.construct(e,[],r)}else{try{r.call()}catch(w){o=w}e.call(r.prototype)}else{try{throw Error()}catch(w){o=w}e()}}catch(w){if(w&&o&&typeof w.stack=="string"){for(var s=w.stack.split(`
`),a=o.stack.split(`
`),d=s.length-1,f=a.length-1;1<=d&&0<=f&&s[d]!==a[f];)f--;for(;1<=d&&0<=f;d--,f--)if(s[d]!==a[f]){if(d!==1||f!==1)do if(d--,f--,0>f||s[d]!==a[f]){var h=`
`+s[d].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=d&&0<=f);break}}}finally{ee=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?k(e):""}function ae(e){switch(e.tag){case 5:return k(e.type);case 16:return k("Lazy");case 13:return k("Suspense");case 19:return k("SuspenseList");case 0:case 2:case 15:return e=re(e.type,!1),e;case 11:return e=re(e.type.render,!1),e;case 1:return e=re(e.type,!0),e;default:return""}}function ie(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case _:return"Fragment";case W:return"Portal";case we:return"Profiler";case H:return"StrictMode";case Ce:return"Suspense";case qe:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case se:return(e.displayName||"Context")+".Consumer";case Re:return(e._context.displayName||"Context")+".Provider";case Ie:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case er:return r=e.displayName||null,r!==null?r:ie(e.type)||"Memo";case Ke:r=e._payload,e=e._init;try{return ie(e(r))}catch{}}return null}function pe(e){var r=e.type;switch(e.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=r.render,e=e.displayName||e.name||"",r.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ie(r);case 8:return r===H?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function de(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ve(e){var r=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Ee(e){var r=ve(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,r),o=""+e[r];if(!e.hasOwnProperty(r)&&typeof t!="undefined"&&typeof t.get=="function"&&typeof t.set=="function"){var s=t.get,a=t.set;return Object.defineProperty(e,r,{configurable:!0,get:function(){return s.call(this)},set:function(d){o=""+d,a.call(this,d)}}),Object.defineProperty(e,r,{enumerable:t.enumerable}),{getValue:function(){return o},setValue:function(d){o=""+d},stopTracking:function(){e._valueTracker=null,delete e[r]}}}}function Xr(e){e._valueTracker||(e._valueTracker=Ee(e))}function jt(e){if(!e)return!1;var r=e._valueTracker;if(!r)return!0;var t=r.getValue(),o="";return e&&(o=ve(e)?e.checked?"true":"false":e.value),e=o,e!==t?(r.setValue(e),!0):!1}function Cr(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}function Wi(e,r){var t=r.checked;return z({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t!=null?t:e._wrapperState.initialChecked})}function fl(e,r){var t=r.defaultValue==null?"":r.defaultValue,o=r.checked!=null?r.checked:r.defaultChecked;t=de(r.value!=null?r.value:t),e._wrapperState={initialChecked:o,initialValue:t,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function hl(e,r){r=r.checked,r!=null&&ne(e,"checked",r,!1)}function Ui(e,r){hl(e,r);var t=de(r.value),o=r.type;if(t!=null)o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}r.hasOwnProperty("value")?Vi(e,r.type,t):r.hasOwnProperty("defaultValue")&&Vi(e,r.type,de(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(e.defaultChecked=!!r.defaultChecked)}function xl(e,r,t){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var o=r.type;if(!(o!=="submit"&&o!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+e._wrapperState.initialValue,t||r===e.value||(e.value=r),e.defaultValue=r}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Vi(e,r,t){(r!=="number"||Cr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var jn=Array.isArray;function Wt(e,r,t,o){if(e=e.options,r){r={};for(var s=0;s<t.length;s++)r["$"+t[s]]=!0;for(t=0;t<e.length;t++)s=r.hasOwnProperty("$"+e[t].value),e[t].selected!==s&&(e[t].selected=s),s&&o&&(e[t].defaultSelected=!0)}else{for(t=""+de(t),r=null,s=0;s<e.length;s++){if(e[s].value===t){e[s].selected=!0,o&&(e[s].defaultSelected=!0);return}r!==null||e[s].disabled||(r=e[s])}r!==null&&(r.selected=!0)}}function Qi(e,r){if(r.dangerouslySetInnerHTML!=null)throw Error(l(91));return z({},r,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ml(e,r){var t=r.value;if(t==null){if(t=r.children,r=r.defaultValue,t!=null){if(r!=null)throw Error(l(92));if(jn(t)){if(1<t.length)throw Error(l(93));t=t[0]}r=t}r==null&&(r=""),t=r}e._wrapperState={initialValue:de(t)}}function gl(e,r){var t=de(r.value),o=de(r.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),r.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),o!=null&&(e.defaultValue=""+o)}function vl(e){var r=e.textContent;r===e._wrapperState.initialValue&&r!==""&&r!==null&&(e.value=r)}function yl(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Gi(e,r){return e==null||e==="http://www.w3.org/1999/xhtml"?yl(r):e==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var vo,wl=(function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(r,t,o,s){MSApp.execUnsafeLocalFunction(function(){return e(r,t,o,s)})}:e})(function(e,r){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=r;else{for(vo=vo||document.createElement("div"),vo.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=vo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;r.firstChild;)e.appendChild(r.firstChild)}});function Nn(e,r){if(r){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=r;return}}e.textContent=r}var Sn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},vp=["Webkit","ms","Moz","O"];Object.keys(Sn).forEach(function(e){vp.forEach(function(r){r=r+e.charAt(0).toUpperCase()+e.substring(1),Sn[r]=Sn[e]})});function bl(e,r,t){return r==null||typeof r=="boolean"||r===""?"":t||typeof r!="number"||r===0||Sn.hasOwnProperty(e)&&Sn[e]?(""+r).trim():r+"px"}function kl(e,r){e=e.style;for(var t in r)if(r.hasOwnProperty(t)){var o=t.indexOf("--")===0,s=bl(t,r[t],o);t==="float"&&(t="cssFloat"),o?e.setProperty(t,s):e[t]=s}}var yp=z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qi(e,r){if(r){if(yp[e]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(l(137,e));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(l(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(l(61))}if(r.style!=null&&typeof r.style!="object")throw Error(l(62))}}function Ki(e,r){if(e.indexOf("-")===-1)return typeof r.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yi=null;function Xi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ji=null,Ut=null,Vt=null;function jl(e){if(e=Gn(e)){if(typeof Ji!="function")throw Error(l(280));var r=e.stateNode;r&&(r=Fo(r),Ji(e.stateNode,e.type,r))}}function Nl(e){Ut?Vt?Vt.push(e):Vt=[e]:Ut=e}function Sl(){if(Ut){var e=Ut,r=Vt;if(Vt=Ut=null,jl(e),r)for(e=0;e<r.length;e++)jl(r[e])}}function Cl(e,r){return e(r)}function Tl(){}var Zi=!1;function El(e,r,t){if(Zi)return e(r,t);Zi=!0;try{return Cl(e,r,t)}finally{Zi=!1,(Ut!==null||Vt!==null)&&(Tl(),Sl())}}function Cn(e,r){var t=e.stateNode;if(t===null)return null;var o=Fo(t);if(o===null)return null;t=o[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(l(231,r,typeof t));return t}var es=!1;if(P)try{var Tn={};Object.defineProperty(Tn,"passive",{get:function(){es=!0}}),window.addEventListener("test",Tn,Tn),window.removeEventListener("test",Tn,Tn)}catch{es=!1}function wp(e,r,t,o,s,a,d,f,h){var w=Array.prototype.slice.call(arguments,3);try{r.apply(t,w)}catch(N){this.onError(N)}}var En=!1,yo=null,wo=!1,rs=null,bp={onError:function(e){En=!0,yo=e}};function kp(e,r,t,o,s,a,d,f,h){En=!1,yo=null,wp.apply(bp,arguments)}function jp(e,r,t,o,s,a,d,f,h){if(kp.apply(this,arguments),En){if(En){var w=yo;En=!1,yo=null}else throw Error(l(198));wo||(wo=!0,rs=w)}}function Nt(e){var r=e,t=e;if(e.alternate)for(;r.return;)r=r.return;else{e=r;do r=e,(r.flags&4098)!==0&&(t=r.return),e=r.return;while(e)}return r.tag===3?t:null}function Pl(e){if(e.tag===13){var r=e.memoizedState;if(r===null&&(e=e.alternate,e!==null&&(r=e.memoizedState)),r!==null)return r.dehydrated}return null}function _l(e){if(Nt(e)!==e)throw Error(l(188))}function Np(e){var r=e.alternate;if(!r){if(r=Nt(e),r===null)throw Error(l(188));return r!==e?null:e}for(var t=e,o=r;;){var s=t.return;if(s===null)break;var a=s.alternate;if(a===null){if(o=s.return,o!==null){t=o;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===t)return _l(s),e;if(a===o)return _l(s),r;a=a.sibling}throw Error(l(188))}if(t.return!==o.return)t=s,o=a;else{for(var d=!1,f=s.child;f;){if(f===t){d=!0,t=s,o=a;break}if(f===o){d=!0,o=s,t=a;break}f=f.sibling}if(!d){for(f=a.child;f;){if(f===t){d=!0,t=a,o=s;break}if(f===o){d=!0,o=a,t=s;break}f=f.sibling}if(!d)throw Error(l(189))}}if(t.alternate!==o)throw Error(l(190))}if(t.tag!==3)throw Error(l(188));return t.stateNode.current===t?e:r}function Ll(e){return e=Np(e),e!==null?zl(e):null}function zl(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var r=zl(e);if(r!==null)return r;e=e.sibling}return null}var Il=c.unstable_scheduleCallback,$l=c.unstable_cancelCallback,Sp=c.unstable_shouldYield,Cp=c.unstable_requestPaint,Me=c.unstable_now,Tp=c.unstable_getCurrentPriorityLevel,ts=c.unstable_ImmediatePriority,Rl=c.unstable_UserBlockingPriority,bo=c.unstable_NormalPriority,Ep=c.unstable_LowPriority,Ml=c.unstable_IdlePriority,ko=null,Mr=null;function Pp(e){if(Mr&&typeof Mr.onCommitFiberRoot=="function")try{Mr.onCommitFiberRoot(ko,e,void 0,(e.current.flags&128)===128)}catch{}}var Tr=Math.clz32?Math.clz32:zp,_p=Math.log,Lp=Math.LN2;function zp(e){return e>>>=0,e===0?32:31-(_p(e)/Lp|0)|0}var jo=64,No=4194304;function Pn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function So(e,r){var t=e.pendingLanes;if(t===0)return 0;var o=0,s=e.suspendedLanes,a=e.pingedLanes,d=t&268435455;if(d!==0){var f=d&~s;f!==0?o=Pn(f):(a&=d,a!==0&&(o=Pn(a)))}else d=t&~s,d!==0?o=Pn(d):a!==0&&(o=Pn(a));if(o===0)return 0;if(r!==0&&r!==o&&(r&s)===0&&(s=o&-o,a=r&-r,s>=a||s===16&&(a&4194240)!==0))return r;if((o&4)!==0&&(o|=t&16),r=e.entangledLanes,r!==0)for(e=e.entanglements,r&=o;0<r;)t=31-Tr(r),s=1<<t,o|=e[t],r&=~s;return o}function Ip(e,r){switch(e){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $p(e,r){for(var t=e.suspendedLanes,o=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes;0<a;){var d=31-Tr(a),f=1<<d,h=s[d];h===-1?((f&t)===0||(f&o)!==0)&&(s[d]=Ip(f,r)):h<=r&&(e.expiredLanes|=f),a&=~f}}function ns(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ol(){var e=jo;return jo<<=1,(jo&4194240)===0&&(jo=64),e}function os(e){for(var r=[],t=0;31>t;t++)r.push(e);return r}function _n(e,r,t){e.pendingLanes|=r,r!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,r=31-Tr(r),e[r]=t}function Rp(e,r){var t=e.pendingLanes&~r;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=r,e.mutableReadLanes&=r,e.entangledLanes&=r,r=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<t;){var s=31-Tr(t),a=1<<s;r[s]=0,o[s]=-1,e[s]=-1,t&=~a}}function is(e,r){var t=e.entangledLanes|=r;for(e=e.entanglements;t;){var o=31-Tr(t),s=1<<o;s&r|e[o]&r&&(e[o]|=r),t&=~s}}var ye=0;function Hl(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Al,ss,Bl,Fl,Dl,as=!1,Co=[],Jr=null,Zr=null,et=null,Ln=new Map,zn=new Map,rt=[],Mp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Wl(e,r){switch(e){case"focusin":case"focusout":Jr=null;break;case"dragenter":case"dragleave":Zr=null;break;case"mouseover":case"mouseout":et=null;break;case"pointerover":case"pointerout":Ln.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":zn.delete(r.pointerId)}}function In(e,r,t,o,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:r,domEventName:t,eventSystemFlags:o,nativeEvent:a,targetContainers:[s]},r!==null&&(r=Gn(r),r!==null&&ss(r)),e):(e.eventSystemFlags|=o,r=e.targetContainers,s!==null&&r.indexOf(s)===-1&&r.push(s),e)}function Op(e,r,t,o,s){switch(r){case"focusin":return Jr=In(Jr,e,r,t,o,s),!0;case"dragenter":return Zr=In(Zr,e,r,t,o,s),!0;case"mouseover":return et=In(et,e,r,t,o,s),!0;case"pointerover":var a=s.pointerId;return Ln.set(a,In(Ln.get(a)||null,e,r,t,o,s)),!0;case"gotpointercapture":return a=s.pointerId,zn.set(a,In(zn.get(a)||null,e,r,t,o,s)),!0}return!1}function Ul(e){var r=St(e.target);if(r!==null){var t=Nt(r);if(t!==null){if(r=t.tag,r===13){if(r=Pl(t),r!==null){e.blockedOn=r,Dl(e.priority,function(){Bl(t)});return}}else if(r===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function To(e){if(e.blockedOn!==null)return!1;for(var r=e.targetContainers;0<r.length;){var t=cs(e.domEventName,e.eventSystemFlags,r[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var o=new t.constructor(t.type,t);Yi=o,t.target.dispatchEvent(o),Yi=null}else return r=Gn(t),r!==null&&ss(r),e.blockedOn=t,!1;r.shift()}return!0}function Vl(e,r,t){To(e)&&t.delete(r)}function Hp(){as=!1,Jr!==null&&To(Jr)&&(Jr=null),Zr!==null&&To(Zr)&&(Zr=null),et!==null&&To(et)&&(et=null),Ln.forEach(Vl),zn.forEach(Vl)}function $n(e,r){e.blockedOn===r&&(e.blockedOn=null,as||(as=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,Hp)))}function Rn(e){function r(s){return $n(s,e)}if(0<Co.length){$n(Co[0],e);for(var t=1;t<Co.length;t++){var o=Co[t];o.blockedOn===e&&(o.blockedOn=null)}}for(Jr!==null&&$n(Jr,e),Zr!==null&&$n(Zr,e),et!==null&&$n(et,e),Ln.forEach(r),zn.forEach(r),t=0;t<rt.length;t++)o=rt[t],o.blockedOn===e&&(o.blockedOn=null);for(;0<rt.length&&(t=rt[0],t.blockedOn===null);)Ul(t),t.blockedOn===null&&rt.shift()}var Qt=L.ReactCurrentBatchConfig,Eo=!0;function Ap(e,r,t,o){var s=ye,a=Qt.transition;Qt.transition=null;try{ye=1,ls(e,r,t,o)}finally{ye=s,Qt.transition=a}}function Bp(e,r,t,o){var s=ye,a=Qt.transition;Qt.transition=null;try{ye=4,ls(e,r,t,o)}finally{ye=s,Qt.transition=a}}function ls(e,r,t,o){if(Eo){var s=cs(e,r,t,o);if(s===null)Cs(e,r,o,Po,t),Wl(e,o);else if(Op(s,e,r,t,o))o.stopPropagation();else if(Wl(e,o),r&4&&-1<Mp.indexOf(e)){for(;s!==null;){var a=Gn(s);if(a!==null&&Al(a),a=cs(e,r,t,o),a===null&&Cs(e,r,o,Po,t),a===s)break;s=a}s!==null&&o.stopPropagation()}else Cs(e,r,o,null,t)}}var Po=null;function cs(e,r,t,o){if(Po=null,e=Xi(o),e=St(e),e!==null)if(r=Nt(e),r===null)e=null;else if(t=r.tag,t===13){if(e=Pl(r),e!==null)return e;e=null}else if(t===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;e=null}else r!==e&&(e=null);return Po=e,null}function Ql(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Tp()){case ts:return 1;case Rl:return 4;case bo:case Ep:return 16;case Ml:return 536870912;default:return 16}default:return 16}}var tt=null,ds=null,_o=null;function Gl(){if(_o)return _o;var e,r=ds,t=r.length,o,s="value"in tt?tt.value:tt.textContent,a=s.length;for(e=0;e<t&&r[e]===s[e];e++);var d=t-e;for(o=1;o<=d&&r[t-o]===s[a-o];o++);return _o=s.slice(e,1<o?1-o:void 0)}function Lo(e){var r=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&r===13&&(e=13)):e=r,e===10&&(e=13),32<=e||e===13?e:0}function zo(){return!0}function ql(){return!1}function dr(e){function r(t,o,s,a,d){this._reactName=t,this._targetInst=s,this.type=o,this.nativeEvent=a,this.target=d,this.currentTarget=null;for(var f in e)e.hasOwnProperty(f)&&(t=e[f],this[f]=t?t(a):a[f]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?zo:ql,this.isPropagationStopped=ql,this}return z(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=zo)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=zo)},persist:function(){},isPersistent:zo}),r}var Gt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},us=dr(Gt),Mn=z({},Gt,{view:0,detail:0}),Fp=dr(Mn),ps,fs,On,Io=z({},Mn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==On&&(On&&e.type==="mousemove"?(ps=e.screenX-On.screenX,fs=e.screenY-On.screenY):fs=ps=0,On=e),ps)},movementY:function(e){return"movementY"in e?e.movementY:fs}}),Kl=dr(Io),Dp=z({},Io,{dataTransfer:0}),Wp=dr(Dp),Up=z({},Mn,{relatedTarget:0}),hs=dr(Up),Vp=z({},Gt,{animationName:0,elapsedTime:0,pseudoElement:0}),Qp=dr(Vp),Gp=z({},Gt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),qp=dr(Gp),Kp=z({},Gt,{data:0}),Yl=dr(Kp),Yp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Jp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zp(e){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(e):(e=Jp[e])?!!r[e]:!1}function xs(){return Zp}var ef=z({},Mn,{key:function(e){if(e.key){var r=Yp[e.key]||e.key;if(r!=="Unidentified")return r}return e.type==="keypress"?(e=Lo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Xp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xs,charCode:function(e){return e.type==="keypress"?Lo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Lo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),rf=dr(ef),tf=z({},Io,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xl=dr(tf),nf=z({},Mn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xs}),of=dr(nf),sf=z({},Gt,{propertyName:0,elapsedTime:0,pseudoElement:0}),af=dr(sf),lf=z({},Io,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),cf=dr(lf),df=[9,13,27,32],ms=P&&"CompositionEvent"in window,Hn=null;P&&"documentMode"in document&&(Hn=document.documentMode);var uf=P&&"TextEvent"in window&&!Hn,Jl=P&&(!ms||Hn&&8<Hn&&11>=Hn),Zl=" ",ec=!1;function rc(e,r){switch(e){case"keyup":return df.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var qt=!1;function pf(e,r){switch(e){case"compositionend":return tc(r);case"keypress":return r.which!==32?null:(ec=!0,Zl);case"textInput":return e=r.data,e===Zl&&ec?null:e;default:return null}}function ff(e,r){if(qt)return e==="compositionend"||!ms&&rc(e,r)?(e=Gl(),_o=ds=tt=null,qt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Jl&&r.locale!=="ko"?null:r.data;default:return null}}var hf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nc(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r==="input"?!!hf[e.type]:r==="textarea"}function oc(e,r,t,o){Nl(o),r=Ho(r,"onChange"),0<r.length&&(t=new us("onChange","change",null,t,o),e.push({event:t,listeners:r}))}var An=null,Bn=null;function xf(e){kc(e,0)}function $o(e){var r=Zt(e);if(jt(r))return e}function mf(e,r){if(e==="change")return r}var ic=!1;if(P){var gs;if(P){var vs="oninput"in document;if(!vs){var sc=document.createElement("div");sc.setAttribute("oninput","return;"),vs=typeof sc.oninput=="function"}gs=vs}else gs=!1;ic=gs&&(!document.documentMode||9<document.documentMode)}function ac(){An&&(An.detachEvent("onpropertychange",lc),Bn=An=null)}function lc(e){if(e.propertyName==="value"&&$o(Bn)){var r=[];oc(r,Bn,e,Xi(e)),El(xf,r)}}function gf(e,r,t){e==="focusin"?(ac(),An=r,Bn=t,An.attachEvent("onpropertychange",lc)):e==="focusout"&&ac()}function vf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return $o(Bn)}function yf(e,r){if(e==="click")return $o(r)}function wf(e,r){if(e==="input"||e==="change")return $o(r)}function bf(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var Er=typeof Object.is=="function"?Object.is:bf;function Fn(e,r){if(Er(e,r))return!0;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return!1;var t=Object.keys(e),o=Object.keys(r);if(t.length!==o.length)return!1;for(o=0;o<t.length;o++){var s=t[o];if(!T.call(r,s)||!Er(e[s],r[s]))return!1}return!0}function cc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function dc(e,r){var t=cc(e);e=0;for(var o;t;){if(t.nodeType===3){if(o=e+t.textContent.length,e<=r&&o>=r)return{node:t,offset:r-e};e=o}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=cc(t)}}function uc(e,r){return e&&r?e===r?!0:e&&e.nodeType===3?!1:r&&r.nodeType===3?uc(e,r.parentNode):"contains"in e?e.contains(r):e.compareDocumentPosition?!!(e.compareDocumentPosition(r)&16):!1:!1}function pc(){for(var e=window,r=Cr();r instanceof e.HTMLIFrameElement;){try{var t=typeof r.contentWindow.location.href=="string"}catch{t=!1}if(t)e=r.contentWindow;else break;r=Cr(e.document)}return r}function ys(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r&&(r==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||r==="textarea"||e.contentEditable==="true")}function kf(e){var r=pc(),t=e.focusedElem,o=e.selectionRange;if(r!==t&&t&&t.ownerDocument&&uc(t.ownerDocument.documentElement,t)){if(o!==null&&ys(t)){if(r=o.start,e=o.end,e===void 0&&(e=r),"selectionStart"in t)t.selectionStart=r,t.selectionEnd=Math.min(e,t.value.length);else if(e=(r=t.ownerDocument||document)&&r.defaultView||window,e.getSelection){e=e.getSelection();var s=t.textContent.length,a=Math.min(o.start,s);o=o.end===void 0?a:Math.min(o.end,s),!e.extend&&a>o&&(s=o,o=a,a=s),s=dc(t,a);var d=dc(t,o);s&&d&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==d.node||e.focusOffset!==d.offset)&&(r=r.createRange(),r.setStart(s.node,s.offset),e.removeAllRanges(),a>o?(e.addRange(r),e.extend(d.node,d.offset)):(r.setEnd(d.node,d.offset),e.addRange(r)))}}for(r=[],e=t;e=e.parentNode;)e.nodeType===1&&r.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<r.length;t++)e=r[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var jf=P&&"documentMode"in document&&11>=document.documentMode,Kt=null,ws=null,Dn=null,bs=!1;function fc(e,r,t){var o=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;bs||Kt==null||Kt!==Cr(o)||(o=Kt,"selectionStart"in o&&ys(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Dn&&Fn(Dn,o)||(Dn=o,o=Ho(ws,"onSelect"),0<o.length&&(r=new us("onSelect","select",null,r,t),e.push({event:r,listeners:o}),r.target=Kt)))}function Ro(e,r){var t={};return t[e.toLowerCase()]=r.toLowerCase(),t["Webkit"+e]="webkit"+r,t["Moz"+e]="moz"+r,t}var Yt={animationend:Ro("Animation","AnimationEnd"),animationiteration:Ro("Animation","AnimationIteration"),animationstart:Ro("Animation","AnimationStart"),transitionend:Ro("Transition","TransitionEnd")},ks={},hc={};P&&(hc=document.createElement("div").style,"AnimationEvent"in window||(delete Yt.animationend.animation,delete Yt.animationiteration.animation,delete Yt.animationstart.animation),"TransitionEvent"in window||delete Yt.transitionend.transition);function Mo(e){if(ks[e])return ks[e];if(!Yt[e])return e;var r=Yt[e],t;for(t in r)if(r.hasOwnProperty(t)&&t in hc)return ks[e]=r[t];return e}var xc=Mo("animationend"),mc=Mo("animationiteration"),gc=Mo("animationstart"),vc=Mo("transitionend"),yc=new Map,wc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function nt(e,r){yc.set(e,r),v(r,[e])}for(var js=0;js<wc.length;js++){var Ns=wc[js],Nf=Ns.toLowerCase(),Sf=Ns[0].toUpperCase()+Ns.slice(1);nt(Nf,"on"+Sf)}nt(xc,"onAnimationEnd"),nt(mc,"onAnimationIteration"),nt(gc,"onAnimationStart"),nt("dblclick","onDoubleClick"),nt("focusin","onFocus"),nt("focusout","onBlur"),nt(vc,"onTransitionEnd"),b("onMouseEnter",["mouseout","mouseover"]),b("onMouseLeave",["mouseout","mouseover"]),b("onPointerEnter",["pointerout","pointerover"]),b("onPointerLeave",["pointerout","pointerover"]),v("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),v("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),v("onBeforeInput",["compositionend","keypress","textInput","paste"]),v("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),v("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),v("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Cf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Wn));function bc(e,r,t){var o=e.type||"unknown-event";e.currentTarget=t,jp(o,r,void 0,e),e.currentTarget=null}function kc(e,r){r=(r&4)!==0;for(var t=0;t<e.length;t++){var o=e[t],s=o.event;o=o.listeners;e:{var a=void 0;if(r)for(var d=o.length-1;0<=d;d--){var f=o[d],h=f.instance,w=f.currentTarget;if(f=f.listener,h!==a&&s.isPropagationStopped())break e;bc(s,f,w),a=h}else for(d=0;d<o.length;d++){if(f=o[d],h=f.instance,w=f.currentTarget,f=f.listener,h!==a&&s.isPropagationStopped())break e;bc(s,f,w),a=h}}}if(wo)throw e=rs,wo=!1,rs=null,e}function je(e,r){var t=r[zs];t===void 0&&(t=r[zs]=new Set);var o=e+"__bubble";t.has(o)||(jc(r,e,2,!1),t.add(o))}function Ss(e,r,t){var o=0;r&&(o|=4),jc(t,e,o,r)}var Oo="_reactListening"+Math.random().toString(36).slice(2);function Un(e){if(!e[Oo]){e[Oo]=!0,p.forEach(function(t){t!=="selectionchange"&&(Cf.has(t)||Ss(t,!1,e),Ss(t,!0,e))});var r=e.nodeType===9?e:e.ownerDocument;r===null||r[Oo]||(r[Oo]=!0,Ss("selectionchange",!1,r))}}function jc(e,r,t,o){switch(Ql(r)){case 1:var s=Ap;break;case 4:s=Bp;break;default:s=ls}t=s.bind(null,r,t,e),s=void 0,!es||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(s=!0),o?s!==void 0?e.addEventListener(r,t,{capture:!0,passive:s}):e.addEventListener(r,t,!0):s!==void 0?e.addEventListener(r,t,{passive:s}):e.addEventListener(r,t,!1)}function Cs(e,r,t,o,s){var a=o;if((r&1)===0&&(r&2)===0&&o!==null)e:for(;;){if(o===null)return;var d=o.tag;if(d===3||d===4){var f=o.stateNode.containerInfo;if(f===s||f.nodeType===8&&f.parentNode===s)break;if(d===4)for(d=o.return;d!==null;){var h=d.tag;if((h===3||h===4)&&(h=d.stateNode.containerInfo,h===s||h.nodeType===8&&h.parentNode===s))return;d=d.return}for(;f!==null;){if(d=St(f),d===null)return;if(h=d.tag,h===5||h===6){o=a=d;continue e}f=f.parentNode}}o=o.return}El(function(){var w=a,N=Xi(t),S=[];e:{var j=yc.get(e);if(j!==void 0){var I=us,R=e;switch(e){case"keypress":if(Lo(t)===0)break e;case"keydown":case"keyup":I=rf;break;case"focusin":R="focus",I=hs;break;case"focusout":R="blur",I=hs;break;case"beforeblur":case"afterblur":I=hs;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":I=Kl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":I=Wp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":I=of;break;case xc:case mc:case gc:I=Qp;break;case vc:I=af;break;case"scroll":I=Fp;break;case"wheel":I=cf;break;case"copy":case"cut":case"paste":I=qp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":I=Xl}var O=(r&4)!==0,Oe=!O&&e==="scroll",g=O?j!==null?j+"Capture":null:j;O=[];for(var x=w,y;x!==null;){y=x;var C=y.stateNode;if(y.tag===5&&C!==null&&(y=C,g!==null&&(C=Cn(x,g),C!=null&&O.push(Vn(x,C,y)))),Oe)break;x=x.return}0<O.length&&(j=new I(j,R,null,t,N),S.push({event:j,listeners:O}))}}if((r&7)===0){e:{if(j=e==="mouseover"||e==="pointerover",I=e==="mouseout"||e==="pointerout",j&&t!==Yi&&(R=t.relatedTarget||t.fromElement)&&(St(R)||R[Fr]))break e;if((I||j)&&(j=N.window===N?N:(j=N.ownerDocument)?j.defaultView||j.parentWindow:window,I?(R=t.relatedTarget||t.toElement,I=w,R=R?St(R):null,R!==null&&(Oe=Nt(R),R!==Oe||R.tag!==5&&R.tag!==6)&&(R=null)):(I=null,R=w),I!==R)){if(O=Kl,C="onMouseLeave",g="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(O=Xl,C="onPointerLeave",g="onPointerEnter",x="pointer"),Oe=I==null?j:Zt(I),y=R==null?j:Zt(R),j=new O(C,x+"leave",I,t,N),j.target=Oe,j.relatedTarget=y,C=null,St(N)===w&&(O=new O(g,x+"enter",R,t,N),O.target=y,O.relatedTarget=Oe,C=O),Oe=C,I&&R)r:{for(O=I,g=R,x=0,y=O;y;y=Xt(y))x++;for(y=0,C=g;C;C=Xt(C))y++;for(;0<x-y;)O=Xt(O),x--;for(;0<y-x;)g=Xt(g),y--;for(;x--;){if(O===g||g!==null&&O===g.alternate)break r;O=Xt(O),g=Xt(g)}O=null}else O=null;I!==null&&Nc(S,j,I,O,!1),R!==null&&Oe!==null&&Nc(S,Oe,R,O,!0)}}e:{if(j=w?Zt(w):window,I=j.nodeName&&j.nodeName.toLowerCase(),I==="select"||I==="input"&&j.type==="file")var A=mf;else if(nc(j))if(ic)A=wf;else{A=vf;var U=gf}else(I=j.nodeName)&&I.toLowerCase()==="input"&&(j.type==="checkbox"||j.type==="radio")&&(A=yf);if(A&&(A=A(e,w))){oc(S,A,t,N);break e}U&&U(e,j,w),e==="focusout"&&(U=j._wrapperState)&&U.controlled&&j.type==="number"&&Vi(j,"number",j.value)}switch(U=w?Zt(w):window,e){case"focusin":(nc(U)||U.contentEditable==="true")&&(Kt=U,ws=w,Dn=null);break;case"focusout":Dn=ws=Kt=null;break;case"mousedown":bs=!0;break;case"contextmenu":case"mouseup":case"dragend":bs=!1,fc(S,t,N);break;case"selectionchange":if(jf)break;case"keydown":case"keyup":fc(S,t,N)}var V;if(ms)e:{switch(e){case"compositionstart":var K="onCompositionStart";break e;case"compositionend":K="onCompositionEnd";break e;case"compositionupdate":K="onCompositionUpdate";break e}K=void 0}else qt?rc(e,t)&&(K="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(K="onCompositionStart");K&&(Jl&&t.locale!=="ko"&&(qt||K!=="onCompositionStart"?K==="onCompositionEnd"&&qt&&(V=Gl()):(tt=N,ds="value"in tt?tt.value:tt.textContent,qt=!0)),U=Ho(w,K),0<U.length&&(K=new Yl(K,e,null,t,N),S.push({event:K,listeners:U}),V?K.data=V:(V=tc(t),V!==null&&(K.data=V)))),(V=uf?pf(e,t):ff(e,t))&&(w=Ho(w,"onBeforeInput"),0<w.length&&(N=new Yl("onBeforeInput","beforeinput",null,t,N),S.push({event:N,listeners:w}),N.data=V))}kc(S,r)})}function Vn(e,r,t){return{instance:e,listener:r,currentTarget:t}}function Ho(e,r){for(var t=r+"Capture",o=[];e!==null;){var s=e,a=s.stateNode;s.tag===5&&a!==null&&(s=a,a=Cn(e,t),a!=null&&o.unshift(Vn(e,a,s)),a=Cn(e,r),a!=null&&o.push(Vn(e,a,s))),e=e.return}return o}function Xt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Nc(e,r,t,o,s){for(var a=r._reactName,d=[];t!==null&&t!==o;){var f=t,h=f.alternate,w=f.stateNode;if(h!==null&&h===o)break;f.tag===5&&w!==null&&(f=w,s?(h=Cn(t,a),h!=null&&d.unshift(Vn(t,h,f))):s||(h=Cn(t,a),h!=null&&d.push(Vn(t,h,f)))),t=t.return}d.length!==0&&e.push({event:r,listeners:d})}var Tf=/\r\n?/g,Ef=/\u0000|\uFFFD/g;function Sc(e){return(typeof e=="string"?e:""+e).replace(Tf,`
`).replace(Ef,"")}function Ao(e,r,t){if(r=Sc(r),Sc(e)!==r&&t)throw Error(l(425))}function Bo(){}var Ts=null,Es=null;function Ps(e,r){return e==="textarea"||e==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var _s=typeof setTimeout=="function"?setTimeout:void 0,Pf=typeof clearTimeout=="function"?clearTimeout:void 0,Cc=typeof Promise=="function"?Promise:void 0,_f=typeof queueMicrotask=="function"?queueMicrotask:typeof Cc!="undefined"?function(e){return Cc.resolve(null).then(e).catch(Lf)}:_s;function Lf(e){setTimeout(function(){throw e})}function Ls(e,r){var t=r,o=0;do{var s=t.nextSibling;if(e.removeChild(t),s&&s.nodeType===8)if(t=s.data,t==="/$"){if(o===0){e.removeChild(s),Rn(r);return}o--}else t!=="$"&&t!=="$?"&&t!=="$!"||o++;t=s}while(t);Rn(r)}function ot(e){for(;e!=null;e=e.nextSibling){var r=e.nodeType;if(r===1||r===3)break;if(r===8){if(r=e.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return e}function Tc(e){e=e.previousSibling;for(var r=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(r===0)return e;r--}else t==="/$"&&r++}e=e.previousSibling}return null}var Jt=Math.random().toString(36).slice(2),Or="__reactFiber$"+Jt,Qn="__reactProps$"+Jt,Fr="__reactContainer$"+Jt,zs="__reactEvents$"+Jt,zf="__reactListeners$"+Jt,If="__reactHandles$"+Jt;function St(e){var r=e[Or];if(r)return r;for(var t=e.parentNode;t;){if(r=t[Fr]||t[Or]){if(t=r.alternate,r.child!==null||t!==null&&t.child!==null)for(e=Tc(e);e!==null;){if(t=e[Or])return t;e=Tc(e)}return r}e=t,t=e.parentNode}return null}function Gn(e){return e=e[Or]||e[Fr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Zt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(l(33))}function Fo(e){return e[Qn]||null}var Is=[],en=-1;function it(e){return{current:e}}function Ne(e){0>en||(e.current=Is[en],Is[en]=null,en--)}function ke(e,r){en++,Is[en]=e.current,e.current=r}var st={},Ye=it(st),nr=it(!1),Ct=st;function rn(e,r){var t=e.type.contextTypes;if(!t)return st;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===r)return o.__reactInternalMemoizedMaskedChildContext;var s={},a;for(a in t)s[a]=r[a];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=s),s}function or(e){return e=e.childContextTypes,e!=null}function Do(){Ne(nr),Ne(Ye)}function Ec(e,r,t){if(Ye.current!==st)throw Error(l(168));ke(Ye,r),ke(nr,t)}function Pc(e,r,t){var o=e.stateNode;if(r=r.childContextTypes,typeof o.getChildContext!="function")return t;o=o.getChildContext();for(var s in o)if(!(s in r))throw Error(l(108,pe(e)||"Unknown",s));return z({},t,o)}function Wo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||st,Ct=Ye.current,ke(Ye,e),ke(nr,nr.current),!0}function _c(e,r,t){var o=e.stateNode;if(!o)throw Error(l(169));t?(e=Pc(e,r,Ct),o.__reactInternalMemoizedMergedChildContext=e,Ne(nr),Ne(Ye),ke(Ye,e)):Ne(nr),ke(nr,t)}var Dr=null,Uo=!1,$s=!1;function Lc(e){Dr===null?Dr=[e]:Dr.push(e)}function $f(e){Uo=!0,Lc(e)}function at(){if(!$s&&Dr!==null){$s=!0;var e=0,r=ye;try{var t=Dr;for(ye=1;e<t.length;e++){var o=t[e];do o=o(!0);while(o!==null)}Dr=null,Uo=!1}catch(s){throw Dr!==null&&(Dr=Dr.slice(e+1)),Il(ts,at),s}finally{ye=r,$s=!1}}return null}var tn=[],nn=0,Vo=null,Qo=0,gr=[],vr=0,Tt=null,Wr=1,Ur="";function Et(e,r){tn[nn++]=Qo,tn[nn++]=Vo,Vo=e,Qo=r}function zc(e,r,t){gr[vr++]=Wr,gr[vr++]=Ur,gr[vr++]=Tt,Tt=e;var o=Wr;e=Ur;var s=32-Tr(o)-1;o&=~(1<<s),t+=1;var a=32-Tr(r)+s;if(30<a){var d=s-s%5;a=(o&(1<<d)-1).toString(32),o>>=d,s-=d,Wr=1<<32-Tr(r)+s|t<<s|o,Ur=a+e}else Wr=1<<a|t<<s|o,Ur=e}function Rs(e){e.return!==null&&(Et(e,1),zc(e,1,0))}function Ms(e){for(;e===Vo;)Vo=tn[--nn],tn[nn]=null,Qo=tn[--nn],tn[nn]=null;for(;e===Tt;)Tt=gr[--vr],gr[vr]=null,Ur=gr[--vr],gr[vr]=null,Wr=gr[--vr],gr[vr]=null}var ur=null,pr=null,Te=!1,Pr=null;function Ic(e,r){var t=kr(5,null,null,0);t.elementType="DELETED",t.stateNode=r,t.return=e,r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)}function $c(e,r){switch(e.tag){case 5:var t=e.type;return r=r.nodeType!==1||t.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(e.stateNode=r,ur=e,pr=ot(r.firstChild),!0):!1;case 6:return r=e.pendingProps===""||r.nodeType!==3?null:r,r!==null?(e.stateNode=r,ur=e,pr=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(t=Tt!==null?{id:Wr,overflow:Ur}:null,e.memoizedState={dehydrated:r,treeContext:t,retryLane:1073741824},t=kr(18,null,null,0),t.stateNode=r,t.return=e,e.child=t,ur=e,pr=null,!0):!1;default:return!1}}function Os(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Hs(e){if(Te){var r=pr;if(r){var t=r;if(!$c(e,r)){if(Os(e))throw Error(l(418));r=ot(t.nextSibling);var o=ur;r&&$c(e,r)?Ic(o,t):(e.flags=e.flags&-4097|2,Te=!1,ur=e)}}else{if(Os(e))throw Error(l(418));e.flags=e.flags&-4097|2,Te=!1,ur=e}}}function Rc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ur=e}function Go(e){if(e!==ur)return!1;if(!Te)return Rc(e),Te=!0,!1;var r;if((r=e.tag!==3)&&!(r=e.tag!==5)&&(r=e.type,r=r!=="head"&&r!=="body"&&!Ps(e.type,e.memoizedProps)),r&&(r=pr)){if(Os(e))throw Mc(),Error(l(418));for(;r;)Ic(e,r),r=ot(r.nextSibling)}if(Rc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));e:{for(e=e.nextSibling,r=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(r===0){pr=ot(e.nextSibling);break e}r--}else t!=="$"&&t!=="$!"&&t!=="$?"||r++}e=e.nextSibling}pr=null}}else pr=ur?ot(e.stateNode.nextSibling):null;return!0}function Mc(){for(var e=pr;e;)e=ot(e.nextSibling)}function on(){pr=ur=null,Te=!1}function As(e){Pr===null?Pr=[e]:Pr.push(e)}var Rf=L.ReactCurrentBatchConfig;function qn(e,r,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(l(309));var o=t.stateNode}if(!o)throw Error(l(147,e));var s=o,a=""+e;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===a?r.ref:(r=function(d){var f=s.refs;d===null?delete f[a]:f[a]=d},r._stringRef=a,r)}if(typeof e!="string")throw Error(l(284));if(!t._owner)throw Error(l(290,e))}return e}function qo(e,r){throw e=Object.prototype.toString.call(r),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e))}function Oc(e){var r=e._init;return r(e._payload)}function Hc(e){function r(g,x){if(e){var y=g.deletions;y===null?(g.deletions=[x],g.flags|=16):y.push(x)}}function t(g,x){if(!e)return null;for(;x!==null;)r(g,x),x=x.sibling;return null}function o(g,x){for(g=new Map;x!==null;)x.key!==null?g.set(x.key,x):g.set(x.index,x),x=x.sibling;return g}function s(g,x){return g=xt(g,x),g.index=0,g.sibling=null,g}function a(g,x,y){return g.index=y,e?(y=g.alternate,y!==null?(y=y.index,y<x?(g.flags|=2,x):y):(g.flags|=2,x)):(g.flags|=1048576,x)}function d(g){return e&&g.alternate===null&&(g.flags|=2),g}function f(g,x,y,C){return x===null||x.tag!==6?(x=_a(y,g.mode,C),x.return=g,x):(x=s(x,y),x.return=g,x)}function h(g,x,y,C){var A=y.type;return A===_?N(g,x,y.props.children,C,y.key):x!==null&&(x.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Ke&&Oc(A)===x.type)?(C=s(x,y.props),C.ref=qn(g,x,y),C.return=g,C):(C=vi(y.type,y.key,y.props,null,g.mode,C),C.ref=qn(g,x,y),C.return=g,C)}function w(g,x,y,C){return x===null||x.tag!==4||x.stateNode.containerInfo!==y.containerInfo||x.stateNode.implementation!==y.implementation?(x=La(y,g.mode,C),x.return=g,x):(x=s(x,y.children||[]),x.return=g,x)}function N(g,x,y,C,A){return x===null||x.tag!==7?(x=Mt(y,g.mode,C,A),x.return=g,x):(x=s(x,y),x.return=g,x)}function S(g,x,y){if(typeof x=="string"&&x!==""||typeof x=="number")return x=_a(""+x,g.mode,y),x.return=g,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case J:return y=vi(x.type,x.key,x.props,null,g.mode,y),y.ref=qn(g,null,x),y.return=g,y;case W:return x=La(x,g.mode,y),x.return=g,x;case Ke:var C=x._init;return S(g,C(x._payload),y)}if(jn(x)||B(x))return x=Mt(x,g.mode,y,null),x.return=g,x;qo(g,x)}return null}function j(g,x,y,C){var A=x!==null?x.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return A!==null?null:f(g,x,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case J:return y.key===A?h(g,x,y,C):null;case W:return y.key===A?w(g,x,y,C):null;case Ke:return A=y._init,j(g,x,A(y._payload),C)}if(jn(y)||B(y))return A!==null?null:N(g,x,y,C,null);qo(g,y)}return null}function I(g,x,y,C,A){if(typeof C=="string"&&C!==""||typeof C=="number")return g=g.get(y)||null,f(x,g,""+C,A);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case J:return g=g.get(C.key===null?y:C.key)||null,h(x,g,C,A);case W:return g=g.get(C.key===null?y:C.key)||null,w(x,g,C,A);case Ke:var U=C._init;return I(g,x,y,U(C._payload),A)}if(jn(C)||B(C))return g=g.get(y)||null,N(x,g,C,A,null);qo(x,C)}return null}function R(g,x,y,C){for(var A=null,U=null,V=x,K=x=0,Ve=null;V!==null&&K<y.length;K++){V.index>K?(Ve=V,V=null):Ve=V.sibling;var he=j(g,V,y[K],C);if(he===null){V===null&&(V=Ve);break}e&&V&&he.alternate===null&&r(g,V),x=a(he,x,K),U===null?A=he:U.sibling=he,U=he,V=Ve}if(K===y.length)return t(g,V),Te&&Et(g,K),A;if(V===null){for(;K<y.length;K++)V=S(g,y[K],C),V!==null&&(x=a(V,x,K),U===null?A=V:U.sibling=V,U=V);return Te&&Et(g,K),A}for(V=o(g,V);K<y.length;K++)Ve=I(V,g,K,y[K],C),Ve!==null&&(e&&Ve.alternate!==null&&V.delete(Ve.key===null?K:Ve.key),x=a(Ve,x,K),U===null?A=Ve:U.sibling=Ve,U=Ve);return e&&V.forEach(function(mt){return r(g,mt)}),Te&&Et(g,K),A}function O(g,x,y,C){var A=B(y);if(typeof A!="function")throw Error(l(150));if(y=A.call(y),y==null)throw Error(l(151));for(var U=A=null,V=x,K=x=0,Ve=null,he=y.next();V!==null&&!he.done;K++,he=y.next()){V.index>K?(Ve=V,V=null):Ve=V.sibling;var mt=j(g,V,he.value,C);if(mt===null){V===null&&(V=Ve);break}e&&V&&mt.alternate===null&&r(g,V),x=a(mt,x,K),U===null?A=mt:U.sibling=mt,U=mt,V=Ve}if(he.done)return t(g,V),Te&&Et(g,K),A;if(V===null){for(;!he.done;K++,he=y.next())he=S(g,he.value,C),he!==null&&(x=a(he,x,K),U===null?A=he:U.sibling=he,U=he);return Te&&Et(g,K),A}for(V=o(g,V);!he.done;K++,he=y.next())he=I(V,g,K,he.value,C),he!==null&&(e&&he.alternate!==null&&V.delete(he.key===null?K:he.key),x=a(he,x,K),U===null?A=he:U.sibling=he,U=he);return e&&V.forEach(function(hh){return r(g,hh)}),Te&&Et(g,K),A}function Oe(g,x,y,C){if(typeof y=="object"&&y!==null&&y.type===_&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case J:e:{for(var A=y.key,U=x;U!==null;){if(U.key===A){if(A=y.type,A===_){if(U.tag===7){t(g,U.sibling),x=s(U,y.props.children),x.return=g,g=x;break e}}else if(U.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Ke&&Oc(A)===U.type){t(g,U.sibling),x=s(U,y.props),x.ref=qn(g,U,y),x.return=g,g=x;break e}t(g,U);break}else r(g,U);U=U.sibling}y.type===_?(x=Mt(y.props.children,g.mode,C,y.key),x.return=g,g=x):(C=vi(y.type,y.key,y.props,null,g.mode,C),C.ref=qn(g,x,y),C.return=g,g=C)}return d(g);case W:e:{for(U=y.key;x!==null;){if(x.key===U)if(x.tag===4&&x.stateNode.containerInfo===y.containerInfo&&x.stateNode.implementation===y.implementation){t(g,x.sibling),x=s(x,y.children||[]),x.return=g,g=x;break e}else{t(g,x);break}else r(g,x);x=x.sibling}x=La(y,g.mode,C),x.return=g,g=x}return d(g);case Ke:return U=y._init,Oe(g,x,U(y._payload),C)}if(jn(y))return R(g,x,y,C);if(B(y))return O(g,x,y,C);qo(g,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,x!==null&&x.tag===6?(t(g,x.sibling),x=s(x,y),x.return=g,g=x):(t(g,x),x=_a(y,g.mode,C),x.return=g,g=x),d(g)):t(g,x)}return Oe}var sn=Hc(!0),Ac=Hc(!1),Ko=it(null),Yo=null,an=null,Bs=null;function Fs(){Bs=an=Yo=null}function Ds(e){var r=Ko.current;Ne(Ko),e._currentValue=r}function Ws(e,r,t){for(;e!==null;){var o=e.alternate;if((e.childLanes&r)!==r?(e.childLanes|=r,o!==null&&(o.childLanes|=r)):o!==null&&(o.childLanes&r)!==r&&(o.childLanes|=r),e===t)break;e=e.return}}function ln(e,r){Yo=e,Bs=an=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&r)!==0&&(ir=!0),e.firstContext=null)}function yr(e){var r=e._currentValue;if(Bs!==e)if(e={context:e,memoizedValue:r,next:null},an===null){if(Yo===null)throw Error(l(308));an=e,Yo.dependencies={lanes:0,firstContext:e}}else an=an.next=e;return r}var Pt=null;function Us(e){Pt===null?Pt=[e]:Pt.push(e)}function Bc(e,r,t,o){var s=r.interleaved;return s===null?(t.next=t,Us(r)):(t.next=s.next,s.next=t),r.interleaved=t,Vr(e,o)}function Vr(e,r){e.lanes|=r;var t=e.alternate;for(t!==null&&(t.lanes|=r),t=e,e=e.return;e!==null;)e.childLanes|=r,t=e.alternate,t!==null&&(t.childLanes|=r),t=e,e=e.return;return t.tag===3?t.stateNode:null}var lt=!1;function Vs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Fc(e,r){e=e.updateQueue,r.updateQueue===e&&(r.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Qr(e,r){return{eventTime:e,lane:r,tag:0,payload:null,callback:null,next:null}}function ct(e,r,t){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(fe&2)!==0){var s=o.pending;return s===null?r.next=r:(r.next=s.next,s.next=r),o.pending=r,Vr(e,t)}return s=o.interleaved,s===null?(r.next=r,Us(o)):(r.next=s.next,s.next=r),o.interleaved=r,Vr(e,t)}function Xo(e,r,t){if(r=r.updateQueue,r!==null&&(r=r.shared,(t&4194240)!==0)){var o=r.lanes;o&=e.pendingLanes,t|=o,r.lanes=t,is(e,t)}}function Dc(e,r){var t=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,t===o)){var s=null,a=null;if(t=t.firstBaseUpdate,t!==null){do{var d={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};a===null?s=a=d:a=a.next=d,t=t.next}while(t!==null);a===null?s=a=r:a=a.next=r}else s=a=r;t={baseState:o.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:o.shared,effects:o.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=r:e.next=r,t.lastBaseUpdate=r}function Jo(e,r,t,o){var s=e.updateQueue;lt=!1;var a=s.firstBaseUpdate,d=s.lastBaseUpdate,f=s.shared.pending;if(f!==null){s.shared.pending=null;var h=f,w=h.next;h.next=null,d===null?a=w:d.next=w,d=h;var N=e.alternate;N!==null&&(N=N.updateQueue,f=N.lastBaseUpdate,f!==d&&(f===null?N.firstBaseUpdate=w:f.next=w,N.lastBaseUpdate=h))}if(a!==null){var S=s.baseState;d=0,N=w=h=null,f=a;do{var j=f.lane,I=f.eventTime;if((o&j)===j){N!==null&&(N=N.next={eventTime:I,lane:0,tag:f.tag,payload:f.payload,callback:f.callback,next:null});e:{var R=e,O=f;switch(j=r,I=t,O.tag){case 1:if(R=O.payload,typeof R=="function"){S=R.call(I,S,j);break e}S=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=O.payload,j=typeof R=="function"?R.call(I,S,j):R,j==null)break e;S=z({},S,j);break e;case 2:lt=!0}}f.callback!==null&&f.lane!==0&&(e.flags|=64,j=s.effects,j===null?s.effects=[f]:j.push(f))}else I={eventTime:I,lane:j,tag:f.tag,payload:f.payload,callback:f.callback,next:null},N===null?(w=N=I,h=S):N=N.next=I,d|=j;if(f=f.next,f===null){if(f=s.shared.pending,f===null)break;j=f,f=j.next,j.next=null,s.lastBaseUpdate=j,s.shared.pending=null}}while(!0);if(N===null&&(h=S),s.baseState=h,s.firstBaseUpdate=w,s.lastBaseUpdate=N,r=s.shared.interleaved,r!==null){s=r;do d|=s.lane,s=s.next;while(s!==r)}else a===null&&(s.shared.lanes=0);zt|=d,e.lanes=d,e.memoizedState=S}}function Wc(e,r,t){if(e=r.effects,r.effects=null,e!==null)for(r=0;r<e.length;r++){var o=e[r],s=o.callback;if(s!==null){if(o.callback=null,o=t,typeof s!="function")throw Error(l(191,s));s.call(o)}}}var Kn={},Hr=it(Kn),Yn=it(Kn),Xn=it(Kn);function _t(e){if(e===Kn)throw Error(l(174));return e}function Qs(e,r){switch(ke(Xn,r),ke(Yn,e),ke(Hr,Kn),e=r.nodeType,e){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Gi(null,"");break;default:e=e===8?r.parentNode:r,r=e.namespaceURI||null,e=e.tagName,r=Gi(r,e)}Ne(Hr),ke(Hr,r)}function cn(){Ne(Hr),Ne(Yn),Ne(Xn)}function Uc(e){_t(Xn.current);var r=_t(Hr.current),t=Gi(r,e.type);r!==t&&(ke(Yn,e),ke(Hr,t))}function Gs(e){Yn.current===e&&(Ne(Hr),Ne(Yn))}var Pe=it(0);function Zo(e){for(var r=e;r!==null;){if(r.tag===13){var t=r.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var qs=[];function Ks(){for(var e=0;e<qs.length;e++)qs[e]._workInProgressVersionPrimary=null;qs.length=0}var ei=L.ReactCurrentDispatcher,Ys=L.ReactCurrentBatchConfig,Lt=0,_e=null,Be=null,We=null,ri=!1,Jn=!1,Zn=0,Mf=0;function Xe(){throw Error(l(321))}function Xs(e,r){if(r===null)return!1;for(var t=0;t<r.length&&t<e.length;t++)if(!Er(e[t],r[t]))return!1;return!0}function Js(e,r,t,o,s,a){if(Lt=a,_e=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,ei.current=e===null||e.memoizedState===null?Bf:Ff,e=t(o,s),Jn){a=0;do{if(Jn=!1,Zn=0,25<=a)throw Error(l(301));a+=1,We=Be=null,r.updateQueue=null,ei.current=Df,e=t(o,s)}while(Jn)}if(ei.current=oi,r=Be!==null&&Be.next!==null,Lt=0,We=Be=_e=null,ri=!1,r)throw Error(l(300));return e}function Zs(){var e=Zn!==0;return Zn=0,e}function Ar(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return We===null?_e.memoizedState=We=e:We=We.next=e,We}function wr(){if(Be===null){var e=_e.alternate;e=e!==null?e.memoizedState:null}else e=Be.next;var r=We===null?_e.memoizedState:We.next;if(r!==null)We=r,Be=e;else{if(e===null)throw Error(l(310));Be=e,e={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},We===null?_e.memoizedState=We=e:We=We.next=e}return We}function eo(e,r){return typeof r=="function"?r(e):r}function ea(e){var r=wr(),t=r.queue;if(t===null)throw Error(l(311));t.lastRenderedReducer=e;var o=Be,s=o.baseQueue,a=t.pending;if(a!==null){if(s!==null){var d=s.next;s.next=a.next,a.next=d}o.baseQueue=s=a,t.pending=null}if(s!==null){a=s.next,o=o.baseState;var f=d=null,h=null,w=a;do{var N=w.lane;if((Lt&N)===N)h!==null&&(h=h.next={lane:0,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null}),o=w.hasEagerState?w.eagerState:e(o,w.action);else{var S={lane:N,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null};h===null?(f=h=S,d=o):h=h.next=S,_e.lanes|=N,zt|=N}w=w.next}while(w!==null&&w!==a);h===null?d=o:h.next=f,Er(o,r.memoizedState)||(ir=!0),r.memoizedState=o,r.baseState=d,r.baseQueue=h,t.lastRenderedState=o}if(e=t.interleaved,e!==null){s=e;do a=s.lane,_e.lanes|=a,zt|=a,s=s.next;while(s!==e)}else s===null&&(t.lanes=0);return[r.memoizedState,t.dispatch]}function ra(e){var r=wr(),t=r.queue;if(t===null)throw Error(l(311));t.lastRenderedReducer=e;var o=t.dispatch,s=t.pending,a=r.memoizedState;if(s!==null){t.pending=null;var d=s=s.next;do a=e(a,d.action),d=d.next;while(d!==s);Er(a,r.memoizedState)||(ir=!0),r.memoizedState=a,r.baseQueue===null&&(r.baseState=a),t.lastRenderedState=a}return[a,o]}function Vc(){}function Qc(e,r){var t=_e,o=wr(),s=r(),a=!Er(o.memoizedState,s);if(a&&(o.memoizedState=s,ir=!0),o=o.queue,ta(Kc.bind(null,t,o,e),[e]),o.getSnapshot!==r||a||We!==null&&We.memoizedState.tag&1){if(t.flags|=2048,ro(9,qc.bind(null,t,o,s,r),void 0,null),Ue===null)throw Error(l(349));(Lt&30)!==0||Gc(t,r,s)}return s}function Gc(e,r,t){e.flags|=16384,e={getSnapshot:r,value:t},r=_e.updateQueue,r===null?(r={lastEffect:null,stores:null},_e.updateQueue=r,r.stores=[e]):(t=r.stores,t===null?r.stores=[e]:t.push(e))}function qc(e,r,t,o){r.value=t,r.getSnapshot=o,Yc(r)&&Xc(e)}function Kc(e,r,t){return t(function(){Yc(r)&&Xc(e)})}function Yc(e){var r=e.getSnapshot;e=e.value;try{var t=r();return!Er(e,t)}catch{return!0}}function Xc(e){var r=Vr(e,1);r!==null&&Ir(r,e,1,-1)}function Jc(e){var r=Ar();return typeof e=="function"&&(e=e()),r.memoizedState=r.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:eo,lastRenderedState:e},r.queue=e,e=e.dispatch=Af.bind(null,_e,e),[r.memoizedState,e]}function ro(e,r,t,o){return e={tag:e,create:r,destroy:t,deps:o,next:null},r=_e.updateQueue,r===null?(r={lastEffect:null,stores:null},_e.updateQueue=r,r.lastEffect=e.next=e):(t=r.lastEffect,t===null?r.lastEffect=e.next=e:(o=t.next,t.next=e,e.next=o,r.lastEffect=e)),e}function Zc(){return wr().memoizedState}function ti(e,r,t,o){var s=Ar();_e.flags|=e,s.memoizedState=ro(1|r,t,void 0,o===void 0?null:o)}function ni(e,r,t,o){var s=wr();o=o===void 0?null:o;var a=void 0;if(Be!==null){var d=Be.memoizedState;if(a=d.destroy,o!==null&&Xs(o,d.deps)){s.memoizedState=ro(r,t,a,o);return}}_e.flags|=e,s.memoizedState=ro(1|r,t,a,o)}function ed(e,r){return ti(8390656,8,e,r)}function ta(e,r){return ni(2048,8,e,r)}function rd(e,r){return ni(4,2,e,r)}function td(e,r){return ni(4,4,e,r)}function nd(e,r){if(typeof r=="function")return e=e(),r(e),function(){r(null)};if(r!=null)return e=e(),r.current=e,function(){r.current=null}}function od(e,r,t){return t=t!=null?t.concat([e]):null,ni(4,4,nd.bind(null,r,e),t)}function na(){}function id(e,r){var t=wr();r=r===void 0?null:r;var o=t.memoizedState;return o!==null&&r!==null&&Xs(r,o[1])?o[0]:(t.memoizedState=[e,r],e)}function sd(e,r){var t=wr();r=r===void 0?null:r;var o=t.memoizedState;return o!==null&&r!==null&&Xs(r,o[1])?o[0]:(e=e(),t.memoizedState=[e,r],e)}function ad(e,r,t){return(Lt&21)===0?(e.baseState&&(e.baseState=!1,ir=!0),e.memoizedState=t):(Er(t,r)||(t=Ol(),_e.lanes|=t,zt|=t,e.baseState=!0),r)}function Of(e,r){var t=ye;ye=t!==0&&4>t?t:4,e(!0);var o=Ys.transition;Ys.transition={};try{e(!1),r()}finally{ye=t,Ys.transition=o}}function ld(){return wr().memoizedState}function Hf(e,r,t){var o=ft(e);if(t={lane:o,action:t,hasEagerState:!1,eagerState:null,next:null},cd(e))dd(r,t);else if(t=Bc(e,r,t,o),t!==null){var s=tr();Ir(t,e,o,s),ud(t,r,o)}}function Af(e,r,t){var o=ft(e),s={lane:o,action:t,hasEagerState:!1,eagerState:null,next:null};if(cd(e))dd(r,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=r.lastRenderedReducer,a!==null))try{var d=r.lastRenderedState,f=a(d,t);if(s.hasEagerState=!0,s.eagerState=f,Er(f,d)){var h=r.interleaved;h===null?(s.next=s,Us(r)):(s.next=h.next,h.next=s),r.interleaved=s;return}}catch{}finally{}t=Bc(e,r,s,o),t!==null&&(s=tr(),Ir(t,e,o,s),ud(t,r,o))}}function cd(e){var r=e.alternate;return e===_e||r!==null&&r===_e}function dd(e,r){Jn=ri=!0;var t=e.pending;t===null?r.next=r:(r.next=t.next,t.next=r),e.pending=r}function ud(e,r,t){if((t&4194240)!==0){var o=r.lanes;o&=e.pendingLanes,t|=o,r.lanes=t,is(e,t)}}var oi={readContext:yr,useCallback:Xe,useContext:Xe,useEffect:Xe,useImperativeHandle:Xe,useInsertionEffect:Xe,useLayoutEffect:Xe,useMemo:Xe,useReducer:Xe,useRef:Xe,useState:Xe,useDebugValue:Xe,useDeferredValue:Xe,useTransition:Xe,useMutableSource:Xe,useSyncExternalStore:Xe,useId:Xe,unstable_isNewReconciler:!1},Bf={readContext:yr,useCallback:function(e,r){return Ar().memoizedState=[e,r===void 0?null:r],e},useContext:yr,useEffect:ed,useImperativeHandle:function(e,r,t){return t=t!=null?t.concat([e]):null,ti(4194308,4,nd.bind(null,r,e),t)},useLayoutEffect:function(e,r){return ti(4194308,4,e,r)},useInsertionEffect:function(e,r){return ti(4,2,e,r)},useMemo:function(e,r){var t=Ar();return r=r===void 0?null:r,e=e(),t.memoizedState=[e,r],e},useReducer:function(e,r,t){var o=Ar();return r=t!==void 0?t(r):r,o.memoizedState=o.baseState=r,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},o.queue=e,e=e.dispatch=Hf.bind(null,_e,e),[o.memoizedState,e]},useRef:function(e){var r=Ar();return e={current:e},r.memoizedState=e},useState:Jc,useDebugValue:na,useDeferredValue:function(e){return Ar().memoizedState=e},useTransition:function(){var e=Jc(!1),r=e[0];return e=Of.bind(null,e[1]),Ar().memoizedState=e,[r,e]},useMutableSource:function(){},useSyncExternalStore:function(e,r,t){var o=_e,s=Ar();if(Te){if(t===void 0)throw Error(l(407));t=t()}else{if(t=r(),Ue===null)throw Error(l(349));(Lt&30)!==0||Gc(o,r,t)}s.memoizedState=t;var a={value:t,getSnapshot:r};return s.queue=a,ed(Kc.bind(null,o,a,e),[e]),o.flags|=2048,ro(9,qc.bind(null,o,a,t,r),void 0,null),t},useId:function(){var e=Ar(),r=Ue.identifierPrefix;if(Te){var t=Ur,o=Wr;t=(o&~(1<<32-Tr(o)-1)).toString(32)+t,r=":"+r+"R"+t,t=Zn++,0<t&&(r+="H"+t.toString(32)),r+=":"}else t=Mf++,r=":"+r+"r"+t.toString(32)+":";return e.memoizedState=r},unstable_isNewReconciler:!1},Ff={readContext:yr,useCallback:id,useContext:yr,useEffect:ta,useImperativeHandle:od,useInsertionEffect:rd,useLayoutEffect:td,useMemo:sd,useReducer:ea,useRef:Zc,useState:function(){return ea(eo)},useDebugValue:na,useDeferredValue:function(e){var r=wr();return ad(r,Be.memoizedState,e)},useTransition:function(){var e=ea(eo)[0],r=wr().memoizedState;return[e,r]},useMutableSource:Vc,useSyncExternalStore:Qc,useId:ld,unstable_isNewReconciler:!1},Df={readContext:yr,useCallback:id,useContext:yr,useEffect:ta,useImperativeHandle:od,useInsertionEffect:rd,useLayoutEffect:td,useMemo:sd,useReducer:ra,useRef:Zc,useState:function(){return ra(eo)},useDebugValue:na,useDeferredValue:function(e){var r=wr();return Be===null?r.memoizedState=e:ad(r,Be.memoizedState,e)},useTransition:function(){var e=ra(eo)[0],r=wr().memoizedState;return[e,r]},useMutableSource:Vc,useSyncExternalStore:Qc,useId:ld,unstable_isNewReconciler:!1};function _r(e,r){if(e&&e.defaultProps){r=z({},r),e=e.defaultProps;for(var t in e)r[t]===void 0&&(r[t]=e[t]);return r}return r}function oa(e,r,t,o){r=e.memoizedState,t=t(o,r),t=t==null?r:z({},r,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var ii={isMounted:function(e){return(e=e._reactInternals)?Nt(e)===e:!1},enqueueSetState:function(e,r,t){e=e._reactInternals;var o=tr(),s=ft(e),a=Qr(o,s);a.payload=r,t!=null&&(a.callback=t),r=ct(e,a,s),r!==null&&(Ir(r,e,s,o),Xo(r,e,s))},enqueueReplaceState:function(e,r,t){e=e._reactInternals;var o=tr(),s=ft(e),a=Qr(o,s);a.tag=1,a.payload=r,t!=null&&(a.callback=t),r=ct(e,a,s),r!==null&&(Ir(r,e,s,o),Xo(r,e,s))},enqueueForceUpdate:function(e,r){e=e._reactInternals;var t=tr(),o=ft(e),s=Qr(t,o);s.tag=2,r!=null&&(s.callback=r),r=ct(e,s,o),r!==null&&(Ir(r,e,o,t),Xo(r,e,o))}};function pd(e,r,t,o,s,a,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,a,d):r.prototype&&r.prototype.isPureReactComponent?!Fn(t,o)||!Fn(s,a):!0}function fd(e,r,t){var o=!1,s=st,a=r.contextType;return typeof a=="object"&&a!==null?a=yr(a):(s=or(r)?Ct:Ye.current,o=r.contextTypes,a=(o=o!=null)?rn(e,s):st),r=new r(t,a),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=ii,e.stateNode=r,r._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=a),r}function hd(e,r,t,o){e=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(t,o),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(t,o),r.state!==e&&ii.enqueueReplaceState(r,r.state,null)}function ia(e,r,t,o){var s=e.stateNode;s.props=t,s.state=e.memoizedState,s.refs={},Vs(e);var a=r.contextType;typeof a=="object"&&a!==null?s.context=yr(a):(a=or(r)?Ct:Ye.current,s.context=rn(e,a)),s.state=e.memoizedState,a=r.getDerivedStateFromProps,typeof a=="function"&&(oa(e,r,a,t),s.state=e.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(r=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),r!==s.state&&ii.enqueueReplaceState(s,s.state,null),Jo(e,t,s,o),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function dn(e,r){try{var t="",o=r;do t+=ae(o),o=o.return;while(o);var s=t}catch(a){s=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:r,stack:s,digest:null}}function sa(e,r,t){return{value:e,source:null,stack:t!=null?t:null,digest:r!=null?r:null}}function aa(e,r){try{console.error(r.value)}catch(t){setTimeout(function(){throw t})}}var Wf=typeof WeakMap=="function"?WeakMap:Map;function xd(e,r,t){t=Qr(-1,t),t.tag=3,t.payload={element:null};var o=r.value;return t.callback=function(){pi||(pi=!0,ka=o),aa(e,r)},t}function md(e,r,t){t=Qr(-1,t),t.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var s=r.value;t.payload=function(){return o(s)},t.callback=function(){aa(e,r)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(t.callback=function(){aa(e,r),typeof o!="function"&&(ut===null?ut=new Set([this]):ut.add(this));var d=r.stack;this.componentDidCatch(r.value,{componentStack:d!==null?d:""})}),t}function gd(e,r,t){var o=e.pingCache;if(o===null){o=e.pingCache=new Wf;var s=new Set;o.set(r,s)}else s=o.get(r),s===void 0&&(s=new Set,o.set(r,s));s.has(t)||(s.add(t),e=nh.bind(null,e,r,t),r.then(e,e))}function vd(e){do{var r;if((r=e.tag===13)&&(r=e.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return e;e=e.return}while(e!==null);return null}function yd(e,r,t,o,s){return(e.mode&1)===0?(e===r?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(r=Qr(-1,1),r.tag=2,ct(t,r,1))),t.lanes|=1),e):(e.flags|=65536,e.lanes=s,e)}var Uf=L.ReactCurrentOwner,ir=!1;function rr(e,r,t,o){r.child=e===null?Ac(r,null,t,o):sn(r,e.child,t,o)}function wd(e,r,t,o,s){t=t.render;var a=r.ref;return ln(r,s),o=Js(e,r,t,o,a,s),t=Zs(),e!==null&&!ir?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~s,Gr(e,r,s)):(Te&&t&&Rs(r),r.flags|=1,rr(e,r,o,s),r.child)}function bd(e,r,t,o,s){if(e===null){var a=t.type;return typeof a=="function"&&!Pa(a)&&a.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(r.tag=15,r.type=a,kd(e,r,a,o,s)):(e=vi(t.type,null,o,r,r.mode,s),e.ref=r.ref,e.return=r,r.child=e)}if(a=e.child,(e.lanes&s)===0){var d=a.memoizedProps;if(t=t.compare,t=t!==null?t:Fn,t(d,o)&&e.ref===r.ref)return Gr(e,r,s)}return r.flags|=1,e=xt(a,o),e.ref=r.ref,e.return=r,r.child=e}function kd(e,r,t,o,s){if(e!==null){var a=e.memoizedProps;if(Fn(a,o)&&e.ref===r.ref)if(ir=!1,r.pendingProps=o=a,(e.lanes&s)!==0)(e.flags&131072)!==0&&(ir=!0);else return r.lanes=e.lanes,Gr(e,r,s)}return la(e,r,t,o,s)}function jd(e,r,t){var o=r.pendingProps,s=o.children,a=e!==null?e.memoizedState:null;if(o.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},ke(pn,fr),fr|=t;else{if((t&1073741824)===0)return e=a!==null?a.baseLanes|t:t,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:e,cachePool:null,transitions:null},r.updateQueue=null,ke(pn,fr),fr|=e,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=a!==null?a.baseLanes:t,ke(pn,fr),fr|=o}else a!==null?(o=a.baseLanes|t,r.memoizedState=null):o=t,ke(pn,fr),fr|=o;return rr(e,r,s,t),r.child}function Nd(e,r){var t=r.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(r.flags|=512,r.flags|=2097152)}function la(e,r,t,o,s){var a=or(t)?Ct:Ye.current;return a=rn(r,a),ln(r,s),t=Js(e,r,t,o,a,s),o=Zs(),e!==null&&!ir?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~s,Gr(e,r,s)):(Te&&o&&Rs(r),r.flags|=1,rr(e,r,t,s),r.child)}function Sd(e,r,t,o,s){if(or(t)){var a=!0;Wo(r)}else a=!1;if(ln(r,s),r.stateNode===null)ai(e,r),fd(r,t,o),ia(r,t,o,s),o=!0;else if(e===null){var d=r.stateNode,f=r.memoizedProps;d.props=f;var h=d.context,w=t.contextType;typeof w=="object"&&w!==null?w=yr(w):(w=or(t)?Ct:Ye.current,w=rn(r,w));var N=t.getDerivedStateFromProps,S=typeof N=="function"||typeof d.getSnapshotBeforeUpdate=="function";S||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(f!==o||h!==w)&&hd(r,d,o,w),lt=!1;var j=r.memoizedState;d.state=j,Jo(r,o,d,s),h=r.memoizedState,f!==o||j!==h||nr.current||lt?(typeof N=="function"&&(oa(r,t,N,o),h=r.memoizedState),(f=lt||pd(r,t,f,o,j,h,w))?(S||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(r.flags|=4194308)):(typeof d.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=o,r.memoizedState=h),d.props=o,d.state=h,d.context=w,o=f):(typeof d.componentDidMount=="function"&&(r.flags|=4194308),o=!1)}else{d=r.stateNode,Fc(e,r),f=r.memoizedProps,w=r.type===r.elementType?f:_r(r.type,f),d.props=w,S=r.pendingProps,j=d.context,h=t.contextType,typeof h=="object"&&h!==null?h=yr(h):(h=or(t)?Ct:Ye.current,h=rn(r,h));var I=t.getDerivedStateFromProps;(N=typeof I=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(f!==S||j!==h)&&hd(r,d,o,h),lt=!1,j=r.memoizedState,d.state=j,Jo(r,o,d,s);var R=r.memoizedState;f!==S||j!==R||nr.current||lt?(typeof I=="function"&&(oa(r,t,I,o),R=r.memoizedState),(w=lt||pd(r,t,w,o,j,R,h)||!1)?(N||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,R,h),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,R,h)),typeof d.componentDidUpdate=="function"&&(r.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof d.componentDidUpdate!="function"||f===e.memoizedProps&&j===e.memoizedState||(r.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&j===e.memoizedState||(r.flags|=1024),r.memoizedProps=o,r.memoizedState=R),d.props=o,d.state=R,d.context=h,o=w):(typeof d.componentDidUpdate!="function"||f===e.memoizedProps&&j===e.memoizedState||(r.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&j===e.memoizedState||(r.flags|=1024),o=!1)}return ca(e,r,t,o,a,s)}function ca(e,r,t,o,s,a){Nd(e,r);var d=(r.flags&128)!==0;if(!o&&!d)return s&&_c(r,t,!1),Gr(e,r,a);o=r.stateNode,Uf.current=r;var f=d&&typeof t.getDerivedStateFromError!="function"?null:o.render();return r.flags|=1,e!==null&&d?(r.child=sn(r,e.child,null,a),r.child=sn(r,null,f,a)):rr(e,r,f,a),r.memoizedState=o.state,s&&_c(r,t,!0),r.child}function Cd(e){var r=e.stateNode;r.pendingContext?Ec(e,r.pendingContext,r.pendingContext!==r.context):r.context&&Ec(e,r.context,!1),Qs(e,r.containerInfo)}function Td(e,r,t,o,s){return on(),As(s),r.flags|=256,rr(e,r,t,o),r.child}var da={dehydrated:null,treeContext:null,retryLane:0};function ua(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ed(e,r,t){var o=r.pendingProps,s=Pe.current,a=!1,d=(r.flags&128)!==0,f;if((f=d)||(f=e!==null&&e.memoizedState===null?!1:(s&2)!==0),f?(a=!0,r.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),ke(Pe,s&1),e===null)return Hs(r),e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((r.mode&1)===0?r.lanes=1:e.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(d=o.children,e=o.fallback,a?(o=r.mode,a=r.child,d={mode:"hidden",children:d},(o&1)===0&&a!==null?(a.childLanes=0,a.pendingProps=d):a=yi(d,o,0,null),e=Mt(e,o,t,null),a.return=r,e.return=r,a.sibling=e,r.child=a,r.child.memoizedState=ua(t),r.memoizedState=da,e):pa(r,d));if(s=e.memoizedState,s!==null&&(f=s.dehydrated,f!==null))return Vf(e,r,d,o,f,s,t);if(a){a=o.fallback,d=r.mode,s=e.child,f=s.sibling;var h={mode:"hidden",children:o.children};return(d&1)===0&&r.child!==s?(o=r.child,o.childLanes=0,o.pendingProps=h,r.deletions=null):(o=xt(s,h),o.subtreeFlags=s.subtreeFlags&14680064),f!==null?a=xt(f,a):(a=Mt(a,d,t,null),a.flags|=2),a.return=r,o.return=r,o.sibling=a,r.child=o,o=a,a=r.child,d=e.child.memoizedState,d=d===null?ua(t):{baseLanes:d.baseLanes|t,cachePool:null,transitions:d.transitions},a.memoizedState=d,a.childLanes=e.childLanes&~t,r.memoizedState=da,o}return a=e.child,e=a.sibling,o=xt(a,{mode:"visible",children:o.children}),(r.mode&1)===0&&(o.lanes=t),o.return=r,o.sibling=null,e!==null&&(t=r.deletions,t===null?(r.deletions=[e],r.flags|=16):t.push(e)),r.child=o,r.memoizedState=null,o}function pa(e,r){return r=yi({mode:"visible",children:r},e.mode,0,null),r.return=e,e.child=r}function si(e,r,t,o){return o!==null&&As(o),sn(r,e.child,null,t),e=pa(r,r.pendingProps.children),e.flags|=2,r.memoizedState=null,e}function Vf(e,r,t,o,s,a,d){if(t)return r.flags&256?(r.flags&=-257,o=sa(Error(l(422))),si(e,r,d,o)):r.memoizedState!==null?(r.child=e.child,r.flags|=128,null):(a=o.fallback,s=r.mode,o=yi({mode:"visible",children:o.children},s,0,null),a=Mt(a,s,d,null),a.flags|=2,o.return=r,a.return=r,o.sibling=a,r.child=o,(r.mode&1)!==0&&sn(r,e.child,null,d),r.child.memoizedState=ua(d),r.memoizedState=da,a);if((r.mode&1)===0)return si(e,r,d,null);if(s.data==="$!"){if(o=s.nextSibling&&s.nextSibling.dataset,o)var f=o.dgst;return o=f,a=Error(l(419)),o=sa(a,o,void 0),si(e,r,d,o)}if(f=(d&e.childLanes)!==0,ir||f){if(o=Ue,o!==null){switch(d&-d){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=(s&(o.suspendedLanes|d))!==0?0:s,s!==0&&s!==a.retryLane&&(a.retryLane=s,Vr(e,s),Ir(o,e,s,-1))}return Ea(),o=sa(Error(l(421))),si(e,r,d,o)}return s.data==="$?"?(r.flags|=128,r.child=e.child,r=oh.bind(null,e),s._reactRetry=r,null):(e=a.treeContext,pr=ot(s.nextSibling),ur=r,Te=!0,Pr=null,e!==null&&(gr[vr++]=Wr,gr[vr++]=Ur,gr[vr++]=Tt,Wr=e.id,Ur=e.overflow,Tt=r),r=pa(r,o.children),r.flags|=4096,r)}function Pd(e,r,t){e.lanes|=r;var o=e.alternate;o!==null&&(o.lanes|=r),Ws(e.return,r,t)}function fa(e,r,t,o,s){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:o,tail:t,tailMode:s}:(a.isBackwards=r,a.rendering=null,a.renderingStartTime=0,a.last=o,a.tail=t,a.tailMode=s)}function _d(e,r,t){var o=r.pendingProps,s=o.revealOrder,a=o.tail;if(rr(e,r,o.children,t),o=Pe.current,(o&2)!==0)o=o&1|2,r.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=r.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Pd(e,t,r);else if(e.tag===19)Pd(e,t,r);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break e;for(;e.sibling===null;){if(e.return===null||e.return===r)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(ke(Pe,o),(r.mode&1)===0)r.memoizedState=null;else switch(s){case"forwards":for(t=r.child,s=null;t!==null;)e=t.alternate,e!==null&&Zo(e)===null&&(s=t),t=t.sibling;t=s,t===null?(s=r.child,r.child=null):(s=t.sibling,t.sibling=null),fa(r,!1,s,t,a);break;case"backwards":for(t=null,s=r.child,r.child=null;s!==null;){if(e=s.alternate,e!==null&&Zo(e)===null){r.child=s;break}e=s.sibling,s.sibling=t,t=s,s=e}fa(r,!0,t,null,a);break;case"together":fa(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function ai(e,r){(r.mode&1)===0&&e!==null&&(e.alternate=null,r.alternate=null,r.flags|=2)}function Gr(e,r,t){if(e!==null&&(r.dependencies=e.dependencies),zt|=r.lanes,(t&r.childLanes)===0)return null;if(e!==null&&r.child!==e.child)throw Error(l(153));if(r.child!==null){for(e=r.child,t=xt(e,e.pendingProps),r.child=t,t.return=r;e.sibling!==null;)e=e.sibling,t=t.sibling=xt(e,e.pendingProps),t.return=r;t.sibling=null}return r.child}function Qf(e,r,t){switch(r.tag){case 3:Cd(r),on();break;case 5:Uc(r);break;case 1:or(r.type)&&Wo(r);break;case 4:Qs(r,r.stateNode.containerInfo);break;case 10:var o=r.type._context,s=r.memoizedProps.value;ke(Ko,o._currentValue),o._currentValue=s;break;case 13:if(o=r.memoizedState,o!==null)return o.dehydrated!==null?(ke(Pe,Pe.current&1),r.flags|=128,null):(t&r.child.childLanes)!==0?Ed(e,r,t):(ke(Pe,Pe.current&1),e=Gr(e,r,t),e!==null?e.sibling:null);ke(Pe,Pe.current&1);break;case 19:if(o=(t&r.childLanes)!==0,(e.flags&128)!==0){if(o)return _d(e,r,t);r.flags|=128}if(s=r.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),ke(Pe,Pe.current),o)break;return null;case 22:case 23:return r.lanes=0,jd(e,r,t)}return Gr(e,r,t)}var Ld,ha,zd,Id;Ld=function(e,r){for(var t=r.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break;for(;t.sibling===null;){if(t.return===null||t.return===r)return;t=t.return}t.sibling.return=t.return,t=t.sibling}},ha=function(){},zd=function(e,r,t,o){var s=e.memoizedProps;if(s!==o){e=r.stateNode,_t(Hr.current);var a=null;switch(t){case"input":s=Wi(e,s),o=Wi(e,o),a=[];break;case"select":s=z({},s,{value:void 0}),o=z({},o,{value:void 0}),a=[];break;case"textarea":s=Qi(e,s),o=Qi(e,o),a=[];break;default:typeof s.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=Bo)}qi(t,o);var d;t=null;for(w in s)if(!o.hasOwnProperty(w)&&s.hasOwnProperty(w)&&s[w]!=null)if(w==="style"){var f=s[w];for(d in f)f.hasOwnProperty(d)&&(t||(t={}),t[d]="")}else w!=="dangerouslySetInnerHTML"&&w!=="children"&&w!=="suppressContentEditableWarning"&&w!=="suppressHydrationWarning"&&w!=="autoFocus"&&(u.hasOwnProperty(w)?a||(a=[]):(a=a||[]).push(w,null));for(w in o){var h=o[w];if(f=s!=null?s[w]:void 0,o.hasOwnProperty(w)&&h!==f&&(h!=null||f!=null))if(w==="style")if(f){for(d in f)!f.hasOwnProperty(d)||h&&h.hasOwnProperty(d)||(t||(t={}),t[d]="");for(d in h)h.hasOwnProperty(d)&&f[d]!==h[d]&&(t||(t={}),t[d]=h[d])}else t||(a||(a=[]),a.push(w,t)),t=h;else w==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,f=f?f.__html:void 0,h!=null&&f!==h&&(a=a||[]).push(w,h)):w==="children"?typeof h!="string"&&typeof h!="number"||(a=a||[]).push(w,""+h):w!=="suppressContentEditableWarning"&&w!=="suppressHydrationWarning"&&(u.hasOwnProperty(w)?(h!=null&&w==="onScroll"&&je("scroll",e),a||f===h||(a=[])):(a=a||[]).push(w,h))}t&&(a=a||[]).push("style",t);var w=a;(r.updateQueue=w)&&(r.flags|=4)}},Id=function(e,r,t,o){t!==o&&(r.flags|=4)};function to(e,r){if(!Te)switch(e.tailMode){case"hidden":r=e.tail;for(var t=null;r!==null;)r.alternate!==null&&(t=r),r=r.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var o=null;t!==null;)t.alternate!==null&&(o=t),t=t.sibling;o===null?r||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Je(e){var r=e.alternate!==null&&e.alternate.child===e.child,t=0,o=0;if(r)for(var s=e.child;s!==null;)t|=s.lanes|s.childLanes,o|=s.subtreeFlags&14680064,o|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)t|=s.lanes|s.childLanes,o|=s.subtreeFlags,o|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=o,e.childLanes=t,r}function Gf(e,r,t){var o=r.pendingProps;switch(Ms(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(r),null;case 1:return or(r.type)&&Do(),Je(r),null;case 3:return o=r.stateNode,cn(),Ne(nr),Ne(Ye),Ks(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(Go(r)?r.flags|=4:e===null||e.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Pr!==null&&(Sa(Pr),Pr=null))),ha(e,r),Je(r),null;case 5:Gs(r);var s=_t(Xn.current);if(t=r.type,e!==null&&r.stateNode!=null)zd(e,r,t,o,s),e.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!o){if(r.stateNode===null)throw Error(l(166));return Je(r),null}if(e=_t(Hr.current),Go(r)){o=r.stateNode,t=r.type;var a=r.memoizedProps;switch(o[Or]=r,o[Qn]=a,e=(r.mode&1)!==0,t){case"dialog":je("cancel",o),je("close",o);break;case"iframe":case"object":case"embed":je("load",o);break;case"video":case"audio":for(s=0;s<Wn.length;s++)je(Wn[s],o);break;case"source":je("error",o);break;case"img":case"image":case"link":je("error",o),je("load",o);break;case"details":je("toggle",o);break;case"input":fl(o,a),je("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!a.multiple},je("invalid",o);break;case"textarea":ml(o,a),je("invalid",o)}qi(t,a),s=null;for(var d in a)if(a.hasOwnProperty(d)){var f=a[d];d==="children"?typeof f=="string"?o.textContent!==f&&(a.suppressHydrationWarning!==!0&&Ao(o.textContent,f,e),s=["children",f]):typeof f=="number"&&o.textContent!==""+f&&(a.suppressHydrationWarning!==!0&&Ao(o.textContent,f,e),s=["children",""+f]):u.hasOwnProperty(d)&&f!=null&&d==="onScroll"&&je("scroll",o)}switch(t){case"input":Xr(o),xl(o,a,!0);break;case"textarea":Xr(o),vl(o);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(o.onclick=Bo)}o=s,r.updateQueue=o,o!==null&&(r.flags|=4)}else{d=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=yl(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=d.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=d.createElement(t,{is:o.is}):(e=d.createElement(t),t==="select"&&(d=e,o.multiple?d.multiple=!0:o.size&&(d.size=o.size))):e=d.createElementNS(e,t),e[Or]=r,e[Qn]=o,Ld(e,r,!1,!1),r.stateNode=e;e:{switch(d=Ki(t,o),t){case"dialog":je("cancel",e),je("close",e),s=o;break;case"iframe":case"object":case"embed":je("load",e),s=o;break;case"video":case"audio":for(s=0;s<Wn.length;s++)je(Wn[s],e);s=o;break;case"source":je("error",e),s=o;break;case"img":case"image":case"link":je("error",e),je("load",e),s=o;break;case"details":je("toggle",e),s=o;break;case"input":fl(e,o),s=Wi(e,o),je("invalid",e);break;case"option":s=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},s=z({},o,{value:void 0}),je("invalid",e);break;case"textarea":ml(e,o),s=Qi(e,o),je("invalid",e);break;default:s=o}qi(t,s),f=s;for(a in f)if(f.hasOwnProperty(a)){var h=f[a];a==="style"?kl(e,h):a==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,h!=null&&wl(e,h)):a==="children"?typeof h=="string"?(t!=="textarea"||h!=="")&&Nn(e,h):typeof h=="number"&&Nn(e,""+h):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(u.hasOwnProperty(a)?h!=null&&a==="onScroll"&&je("scroll",e):h!=null&&ne(e,a,h,d))}switch(t){case"input":Xr(e),xl(e,o,!1);break;case"textarea":Xr(e),vl(e);break;case"option":o.value!=null&&e.setAttribute("value",""+de(o.value));break;case"select":e.multiple=!!o.multiple,a=o.value,a!=null?Wt(e,!!o.multiple,a,!1):o.defaultValue!=null&&Wt(e,!!o.multiple,o.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=Bo)}switch(t){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Je(r),null;case 6:if(e&&r.stateNode!=null)Id(e,r,e.memoizedProps,o);else{if(typeof o!="string"&&r.stateNode===null)throw Error(l(166));if(t=_t(Xn.current),_t(Hr.current),Go(r)){if(o=r.stateNode,t=r.memoizedProps,o[Or]=r,(a=o.nodeValue!==t)&&(e=ur,e!==null))switch(e.tag){case 3:Ao(o.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ao(o.nodeValue,t,(e.mode&1)!==0)}a&&(r.flags|=4)}else o=(t.nodeType===9?t:t.ownerDocument).createTextNode(o),o[Or]=r,r.stateNode=o}return Je(r),null;case 13:if(Ne(Pe),o=r.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Te&&pr!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Mc(),on(),r.flags|=98560,a=!1;else if(a=Go(r),o!==null&&o.dehydrated!==null){if(e===null){if(!a)throw Error(l(318));if(a=r.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(l(317));a[Or]=r}else on(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Je(r),a=!1}else Pr!==null&&(Sa(Pr),Pr=null),a=!0;if(!a)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=t,r):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(r.child.flags|=8192,(r.mode&1)!==0&&(e===null||(Pe.current&1)!==0?Fe===0&&(Fe=3):Ea())),r.updateQueue!==null&&(r.flags|=4),Je(r),null);case 4:return cn(),ha(e,r),e===null&&Un(r.stateNode.containerInfo),Je(r),null;case 10:return Ds(r.type._context),Je(r),null;case 17:return or(r.type)&&Do(),Je(r),null;case 19:if(Ne(Pe),a=r.memoizedState,a===null)return Je(r),null;if(o=(r.flags&128)!==0,d=a.rendering,d===null)if(o)to(a,!1);else{if(Fe!==0||e!==null&&(e.flags&128)!==0)for(e=r.child;e!==null;){if(d=Zo(e),d!==null){for(r.flags|=128,to(a,!1),o=d.updateQueue,o!==null&&(r.updateQueue=o,r.flags|=4),r.subtreeFlags=0,o=t,t=r.child;t!==null;)a=t,e=o,a.flags&=14680066,d=a.alternate,d===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=d.childLanes,a.lanes=d.lanes,a.child=d.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=d.memoizedProps,a.memoizedState=d.memoizedState,a.updateQueue=d.updateQueue,a.type=d.type,e=d.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return ke(Pe,Pe.current&1|2),r.child}e=e.sibling}a.tail!==null&&Me()>fn&&(r.flags|=128,o=!0,to(a,!1),r.lanes=4194304)}else{if(!o)if(e=Zo(d),e!==null){if(r.flags|=128,o=!0,t=e.updateQueue,t!==null&&(r.updateQueue=t,r.flags|=4),to(a,!0),a.tail===null&&a.tailMode==="hidden"&&!d.alternate&&!Te)return Je(r),null}else 2*Me()-a.renderingStartTime>fn&&t!==1073741824&&(r.flags|=128,o=!0,to(a,!1),r.lanes=4194304);a.isBackwards?(d.sibling=r.child,r.child=d):(t=a.last,t!==null?t.sibling=d:r.child=d,a.last=d)}return a.tail!==null?(r=a.tail,a.rendering=r,a.tail=r.sibling,a.renderingStartTime=Me(),r.sibling=null,t=Pe.current,ke(Pe,o?t&1|2:t&1),r):(Je(r),null);case 22:case 23:return Ta(),o=r.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(r.flags|=8192),o&&(r.mode&1)!==0?(fr&1073741824)!==0&&(Je(r),r.subtreeFlags&6&&(r.flags|=8192)):Je(r),null;case 24:return null;case 25:return null}throw Error(l(156,r.tag))}function qf(e,r){switch(Ms(r),r.tag){case 1:return or(r.type)&&Do(),e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 3:return cn(),Ne(nr),Ne(Ye),Ks(),e=r.flags,(e&65536)!==0&&(e&128)===0?(r.flags=e&-65537|128,r):null;case 5:return Gs(r),null;case 13:if(Ne(Pe),e=r.memoizedState,e!==null&&e.dehydrated!==null){if(r.alternate===null)throw Error(l(340));on()}return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 19:return Ne(Pe),null;case 4:return cn(),null;case 10:return Ds(r.type._context),null;case 22:case 23:return Ta(),null;case 24:return null;default:return null}}var li=!1,Ze=!1,Kf=typeof WeakSet=="function"?WeakSet:Set,$=null;function un(e,r){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(o){$e(e,r,o)}else t.current=null}function xa(e,r,t){try{t()}catch(o){$e(e,r,o)}}var $d=!1;function Yf(e,r){if(Ts=Eo,e=pc(),ys(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var o=t.getSelection&&t.getSelection();if(o&&o.rangeCount!==0){t=o.anchorNode;var s=o.anchorOffset,a=o.focusNode;o=o.focusOffset;try{t.nodeType,a.nodeType}catch{t=null;break e}var d=0,f=-1,h=-1,w=0,N=0,S=e,j=null;r:for(;;){for(var I;S!==t||s!==0&&S.nodeType!==3||(f=d+s),S!==a||o!==0&&S.nodeType!==3||(h=d+o),S.nodeType===3&&(d+=S.nodeValue.length),(I=S.firstChild)!==null;)j=S,S=I;for(;;){if(S===e)break r;if(j===t&&++w===s&&(f=d),j===a&&++N===o&&(h=d),(I=S.nextSibling)!==null)break;S=j,j=S.parentNode}S=I}t=f===-1||h===-1?null:{start:f,end:h}}else t=null}t=t||{start:0,end:0}}else t=null;for(Es={focusedElem:e,selectionRange:t},Eo=!1,$=r;$!==null;)if(r=$,e=r.child,(r.subtreeFlags&1028)!==0&&e!==null)e.return=r,$=e;else for(;$!==null;){r=$;try{var R=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(R!==null){var O=R.memoizedProps,Oe=R.memoizedState,g=r.stateNode,x=g.getSnapshotBeforeUpdate(r.elementType===r.type?O:_r(r.type,O),Oe);g.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var y=r.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(l(163))}}catch(C){$e(r,r.return,C)}if(e=r.sibling,e!==null){e.return=r.return,$=e;break}$=r.return}return R=$d,$d=!1,R}function no(e,r,t){var o=r.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var s=o=o.next;do{if((s.tag&e)===e){var a=s.destroy;s.destroy=void 0,a!==void 0&&xa(r,t,a)}s=s.next}while(s!==o)}}function ci(e,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var t=r=r.next;do{if((t.tag&e)===e){var o=t.create;t.destroy=o()}t=t.next}while(t!==r)}}function ma(e){var r=e.ref;if(r!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof r=="function"?r(e):r.current=e}}function Rd(e){var r=e.alternate;r!==null&&(e.alternate=null,Rd(r)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(r=e.stateNode,r!==null&&(delete r[Or],delete r[Qn],delete r[zs],delete r[zf],delete r[If])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Md(e){return e.tag===5||e.tag===3||e.tag===4}function Od(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Md(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ga(e,r,t){var o=e.tag;if(o===5||o===6)e=e.stateNode,r?t.nodeType===8?t.parentNode.insertBefore(e,r):t.insertBefore(e,r):(t.nodeType===8?(r=t.parentNode,r.insertBefore(e,t)):(r=t,r.appendChild(e)),t=t._reactRootContainer,t!=null||r.onclick!==null||(r.onclick=Bo));else if(o!==4&&(e=e.child,e!==null))for(ga(e,r,t),e=e.sibling;e!==null;)ga(e,r,t),e=e.sibling}function va(e,r,t){var o=e.tag;if(o===5||o===6)e=e.stateNode,r?t.insertBefore(e,r):t.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(va(e,r,t),e=e.sibling;e!==null;)va(e,r,t),e=e.sibling}var Qe=null,Lr=!1;function dt(e,r,t){for(t=t.child;t!==null;)Hd(e,r,t),t=t.sibling}function Hd(e,r,t){if(Mr&&typeof Mr.onCommitFiberUnmount=="function")try{Mr.onCommitFiberUnmount(ko,t)}catch{}switch(t.tag){case 5:Ze||un(t,r);case 6:var o=Qe,s=Lr;Qe=null,dt(e,r,t),Qe=o,Lr=s,Qe!==null&&(Lr?(e=Qe,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):Qe.removeChild(t.stateNode));break;case 18:Qe!==null&&(Lr?(e=Qe,t=t.stateNode,e.nodeType===8?Ls(e.parentNode,t):e.nodeType===1&&Ls(e,t),Rn(e)):Ls(Qe,t.stateNode));break;case 4:o=Qe,s=Lr,Qe=t.stateNode.containerInfo,Lr=!0,dt(e,r,t),Qe=o,Lr=s;break;case 0:case 11:case 14:case 15:if(!Ze&&(o=t.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){s=o=o.next;do{var a=s,d=a.destroy;a=a.tag,d!==void 0&&((a&2)!==0||(a&4)!==0)&&xa(t,r,d),s=s.next}while(s!==o)}dt(e,r,t);break;case 1:if(!Ze&&(un(t,r),o=t.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=t.memoizedProps,o.state=t.memoizedState,o.componentWillUnmount()}catch(f){$e(t,r,f)}dt(e,r,t);break;case 21:dt(e,r,t);break;case 22:t.mode&1?(Ze=(o=Ze)||t.memoizedState!==null,dt(e,r,t),Ze=o):dt(e,r,t);break;default:dt(e,r,t)}}function Ad(e){var r=e.updateQueue;if(r!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Kf),r.forEach(function(o){var s=ih.bind(null,e,o);t.has(o)||(t.add(o),o.then(s,s))})}}function zr(e,r){var t=r.deletions;if(t!==null)for(var o=0;o<t.length;o++){var s=t[o];try{var a=e,d=r,f=d;e:for(;f!==null;){switch(f.tag){case 5:Qe=f.stateNode,Lr=!1;break e;case 3:Qe=f.stateNode.containerInfo,Lr=!0;break e;case 4:Qe=f.stateNode.containerInfo,Lr=!0;break e}f=f.return}if(Qe===null)throw Error(l(160));Hd(a,d,s),Qe=null,Lr=!1;var h=s.alternate;h!==null&&(h.return=null),s.return=null}catch(w){$e(s,r,w)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Bd(r,e),r=r.sibling}function Bd(e,r){var t=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(zr(r,e),Br(e),o&4){try{no(3,e,e.return),ci(3,e)}catch(O){$e(e,e.return,O)}try{no(5,e,e.return)}catch(O){$e(e,e.return,O)}}break;case 1:zr(r,e),Br(e),o&512&&t!==null&&un(t,t.return);break;case 5:if(zr(r,e),Br(e),o&512&&t!==null&&un(t,t.return),e.flags&32){var s=e.stateNode;try{Nn(s,"")}catch(O){$e(e,e.return,O)}}if(o&4&&(s=e.stateNode,s!=null)){var a=e.memoizedProps,d=t!==null?t.memoizedProps:a,f=e.type,h=e.updateQueue;if(e.updateQueue=null,h!==null)try{f==="input"&&a.type==="radio"&&a.name!=null&&hl(s,a),Ki(f,d);var w=Ki(f,a);for(d=0;d<h.length;d+=2){var N=h[d],S=h[d+1];N==="style"?kl(s,S):N==="dangerouslySetInnerHTML"?wl(s,S):N==="children"?Nn(s,S):ne(s,N,S,w)}switch(f){case"input":Ui(s,a);break;case"textarea":gl(s,a);break;case"select":var j=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!a.multiple;var I=a.value;I!=null?Wt(s,!!a.multiple,I,!1):j!==!!a.multiple&&(a.defaultValue!=null?Wt(s,!!a.multiple,a.defaultValue,!0):Wt(s,!!a.multiple,a.multiple?[]:"",!1))}s[Qn]=a}catch(O){$e(e,e.return,O)}}break;case 6:if(zr(r,e),Br(e),o&4){if(e.stateNode===null)throw Error(l(162));s=e.stateNode,a=e.memoizedProps;try{s.nodeValue=a}catch(O){$e(e,e.return,O)}}break;case 3:if(zr(r,e),Br(e),o&4&&t!==null&&t.memoizedState.isDehydrated)try{Rn(r.containerInfo)}catch(O){$e(e,e.return,O)}break;case 4:zr(r,e),Br(e);break;case 13:zr(r,e),Br(e),s=e.child,s.flags&8192&&(a=s.memoizedState!==null,s.stateNode.isHidden=a,!a||s.alternate!==null&&s.alternate.memoizedState!==null||(ba=Me())),o&4&&Ad(e);break;case 22:if(N=t!==null&&t.memoizedState!==null,e.mode&1?(Ze=(w=Ze)||N,zr(r,e),Ze=w):zr(r,e),Br(e),o&8192){if(w=e.memoizedState!==null,(e.stateNode.isHidden=w)&&!N&&(e.mode&1)!==0)for($=e,N=e.child;N!==null;){for(S=$=N;$!==null;){switch(j=$,I=j.child,j.tag){case 0:case 11:case 14:case 15:no(4,j,j.return);break;case 1:un(j,j.return);var R=j.stateNode;if(typeof R.componentWillUnmount=="function"){o=j,t=j.return;try{r=o,R.props=r.memoizedProps,R.state=r.memoizedState,R.componentWillUnmount()}catch(O){$e(o,t,O)}}break;case 5:un(j,j.return);break;case 22:if(j.memoizedState!==null){Wd(S);continue}}I!==null?(I.return=j,$=I):Wd(S)}N=N.sibling}e:for(N=null,S=e;;){if(S.tag===5){if(N===null){N=S;try{s=S.stateNode,w?(a=s.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(f=S.stateNode,h=S.memoizedProps.style,d=h!=null&&h.hasOwnProperty("display")?h.display:null,f.style.display=bl("display",d))}catch(O){$e(e,e.return,O)}}}else if(S.tag===6){if(N===null)try{S.stateNode.nodeValue=w?"":S.memoizedProps}catch(O){$e(e,e.return,O)}}else if((S.tag!==22&&S.tag!==23||S.memoizedState===null||S===e)&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===e)break e;for(;S.sibling===null;){if(S.return===null||S.return===e)break e;N===S&&(N=null),S=S.return}N===S&&(N=null),S.sibling.return=S.return,S=S.sibling}}break;case 19:zr(r,e),Br(e),o&4&&Ad(e);break;case 21:break;default:zr(r,e),Br(e)}}function Br(e){var r=e.flags;if(r&2){try{e:{for(var t=e.return;t!==null;){if(Md(t)){var o=t;break e}t=t.return}throw Error(l(160))}switch(o.tag){case 5:var s=o.stateNode;o.flags&32&&(Nn(s,""),o.flags&=-33);var a=Od(e);va(e,a,s);break;case 3:case 4:var d=o.stateNode.containerInfo,f=Od(e);ga(e,f,d);break;default:throw Error(l(161))}}catch(h){$e(e,e.return,h)}e.flags&=-3}r&4096&&(e.flags&=-4097)}function Xf(e,r,t){$=e,Fd(e)}function Fd(e,r,t){for(var o=(e.mode&1)!==0;$!==null;){var s=$,a=s.child;if(s.tag===22&&o){var d=s.memoizedState!==null||li;if(!d){var f=s.alternate,h=f!==null&&f.memoizedState!==null||Ze;f=li;var w=Ze;if(li=d,(Ze=h)&&!w)for($=s;$!==null;)d=$,h=d.child,d.tag===22&&d.memoizedState!==null?Ud(s):h!==null?(h.return=d,$=h):Ud(s);for(;a!==null;)$=a,Fd(a),a=a.sibling;$=s,li=f,Ze=w}Dd(e)}else(s.subtreeFlags&8772)!==0&&a!==null?(a.return=s,$=a):Dd(e)}}function Dd(e){for(;$!==null;){var r=$;if((r.flags&8772)!==0){var t=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Ze||ci(5,r);break;case 1:var o=r.stateNode;if(r.flags&4&&!Ze)if(t===null)o.componentDidMount();else{var s=r.elementType===r.type?t.memoizedProps:_r(r.type,t.memoizedProps);o.componentDidUpdate(s,t.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var a=r.updateQueue;a!==null&&Wc(r,a,o);break;case 3:var d=r.updateQueue;if(d!==null){if(t=null,r.child!==null)switch(r.child.tag){case 5:t=r.child.stateNode;break;case 1:t=r.child.stateNode}Wc(r,d,t)}break;case 5:var f=r.stateNode;if(t===null&&r.flags&4){t=f;var h=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":h.autoFocus&&t.focus();break;case"img":h.src&&(t.src=h.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var w=r.alternate;if(w!==null){var N=w.memoizedState;if(N!==null){var S=N.dehydrated;S!==null&&Rn(S)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(l(163))}Ze||r.flags&512&&ma(r)}catch(j){$e(r,r.return,j)}}if(r===e){$=null;break}if(t=r.sibling,t!==null){t.return=r.return,$=t;break}$=r.return}}function Wd(e){for(;$!==null;){var r=$;if(r===e){$=null;break}var t=r.sibling;if(t!==null){t.return=r.return,$=t;break}$=r.return}}function Ud(e){for(;$!==null;){var r=$;try{switch(r.tag){case 0:case 11:case 15:var t=r.return;try{ci(4,r)}catch(h){$e(r,t,h)}break;case 1:var o=r.stateNode;if(typeof o.componentDidMount=="function"){var s=r.return;try{o.componentDidMount()}catch(h){$e(r,s,h)}}var a=r.return;try{ma(r)}catch(h){$e(r,a,h)}break;case 5:var d=r.return;try{ma(r)}catch(h){$e(r,d,h)}}}catch(h){$e(r,r.return,h)}if(r===e){$=null;break}var f=r.sibling;if(f!==null){f.return=r.return,$=f;break}$=r.return}}var Jf=Math.ceil,di=L.ReactCurrentDispatcher,ya=L.ReactCurrentOwner,br=L.ReactCurrentBatchConfig,fe=0,Ue=null,He=null,Ge=0,fr=0,pn=it(0),Fe=0,oo=null,zt=0,ui=0,wa=0,io=null,sr=null,ba=0,fn=1/0,qr=null,pi=!1,ka=null,ut=null,fi=!1,pt=null,hi=0,so=0,ja=null,xi=-1,mi=0;function tr(){return(fe&6)!==0?Me():xi!==-1?xi:xi=Me()}function ft(e){return(e.mode&1)===0?1:(fe&2)!==0&&Ge!==0?Ge&-Ge:Rf.transition!==null?(mi===0&&(mi=Ol()),mi):(e=ye,e!==0||(e=window.event,e=e===void 0?16:Ql(e.type)),e)}function Ir(e,r,t,o){if(50<so)throw so=0,ja=null,Error(l(185));_n(e,t,o),((fe&2)===0||e!==Ue)&&(e===Ue&&((fe&2)===0&&(ui|=t),Fe===4&&ht(e,Ge)),ar(e,o),t===1&&fe===0&&(r.mode&1)===0&&(fn=Me()+500,Uo&&at()))}function ar(e,r){var t=e.callbackNode;$p(e,r);var o=So(e,e===Ue?Ge:0);if(o===0)t!==null&&$l(t),e.callbackNode=null,e.callbackPriority=0;else if(r=o&-o,e.callbackPriority!==r){if(t!=null&&$l(t),r===1)e.tag===0?$f(Qd.bind(null,e)):Lc(Qd.bind(null,e)),_f(function(){(fe&6)===0&&at()}),t=null;else{switch(Hl(o)){case 1:t=ts;break;case 4:t=Rl;break;case 16:t=bo;break;case 536870912:t=Ml;break;default:t=bo}t=eu(t,Vd.bind(null,e))}e.callbackPriority=r,e.callbackNode=t}}function Vd(e,r){if(xi=-1,mi=0,(fe&6)!==0)throw Error(l(327));var t=e.callbackNode;if(hn()&&e.callbackNode!==t)return null;var o=So(e,e===Ue?Ge:0);if(o===0)return null;if((o&30)!==0||(o&e.expiredLanes)!==0||r)r=gi(e,o);else{r=o;var s=fe;fe|=2;var a=qd();(Ue!==e||Ge!==r)&&(qr=null,fn=Me()+500,$t(e,r));do try{rh();break}catch(f){Gd(e,f)}while(!0);Fs(),di.current=a,fe=s,He!==null?r=0:(Ue=null,Ge=0,r=Fe)}if(r!==0){if(r===2&&(s=ns(e),s!==0&&(o=s,r=Na(e,s))),r===1)throw t=oo,$t(e,0),ht(e,o),ar(e,Me()),t;if(r===6)ht(e,o);else{if(s=e.current.alternate,(o&30)===0&&!Zf(s)&&(r=gi(e,o),r===2&&(a=ns(e),a!==0&&(o=a,r=Na(e,a))),r===1))throw t=oo,$t(e,0),ht(e,o),ar(e,Me()),t;switch(e.finishedWork=s,e.finishedLanes=o,r){case 0:case 1:throw Error(l(345));case 2:Rt(e,sr,qr);break;case 3:if(ht(e,o),(o&130023424)===o&&(r=ba+500-Me(),10<r)){if(So(e,0)!==0)break;if(s=e.suspendedLanes,(s&o)!==o){tr(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=_s(Rt.bind(null,e,sr,qr),r);break}Rt(e,sr,qr);break;case 4:if(ht(e,o),(o&4194240)===o)break;for(r=e.eventTimes,s=-1;0<o;){var d=31-Tr(o);a=1<<d,d=r[d],d>s&&(s=d),o&=~a}if(o=s,o=Me()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*Jf(o/1960))-o,10<o){e.timeoutHandle=_s(Rt.bind(null,e,sr,qr),o);break}Rt(e,sr,qr);break;case 5:Rt(e,sr,qr);break;default:throw Error(l(329))}}}return ar(e,Me()),e.callbackNode===t?Vd.bind(null,e):null}function Na(e,r){var t=io;return e.current.memoizedState.isDehydrated&&($t(e,r).flags|=256),e=gi(e,r),e!==2&&(r=sr,sr=t,r!==null&&Sa(r)),e}function Sa(e){sr===null?sr=e:sr.push.apply(sr,e)}function Zf(e){for(var r=e;;){if(r.flags&16384){var t=r.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var o=0;o<t.length;o++){var s=t[o],a=s.getSnapshot;s=s.value;try{if(!Er(a(),s))return!1}catch{return!1}}}if(t=r.child,r.subtreeFlags&16384&&t!==null)t.return=r,r=t;else{if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function ht(e,r){for(r&=~wa,r&=~ui,e.suspendedLanes|=r,e.pingedLanes&=~r,e=e.expirationTimes;0<r;){var t=31-Tr(r),o=1<<t;e[t]=-1,r&=~o}}function Qd(e){if((fe&6)!==0)throw Error(l(327));hn();var r=So(e,0);if((r&1)===0)return ar(e,Me()),null;var t=gi(e,r);if(e.tag!==0&&t===2){var o=ns(e);o!==0&&(r=o,t=Na(e,o))}if(t===1)throw t=oo,$t(e,0),ht(e,r),ar(e,Me()),t;if(t===6)throw Error(l(345));return e.finishedWork=e.current.alternate,e.finishedLanes=r,Rt(e,sr,qr),ar(e,Me()),null}function Ca(e,r){var t=fe;fe|=1;try{return e(r)}finally{fe=t,fe===0&&(fn=Me()+500,Uo&&at())}}function It(e){pt!==null&&pt.tag===0&&(fe&6)===0&&hn();var r=fe;fe|=1;var t=br.transition,o=ye;try{if(br.transition=null,ye=1,e)return e()}finally{ye=o,br.transition=t,fe=r,(fe&6)===0&&at()}}function Ta(){fr=pn.current,Ne(pn)}function $t(e,r){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Pf(t)),He!==null)for(t=He.return;t!==null;){var o=t;switch(Ms(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&Do();break;case 3:cn(),Ne(nr),Ne(Ye),Ks();break;case 5:Gs(o);break;case 4:cn();break;case 13:Ne(Pe);break;case 19:Ne(Pe);break;case 10:Ds(o.type._context);break;case 22:case 23:Ta()}t=t.return}if(Ue=e,He=e=xt(e.current,null),Ge=fr=r,Fe=0,oo=null,wa=ui=zt=0,sr=io=null,Pt!==null){for(r=0;r<Pt.length;r++)if(t=Pt[r],o=t.interleaved,o!==null){t.interleaved=null;var s=o.next,a=t.pending;if(a!==null){var d=a.next;a.next=s,o.next=d}t.pending=o}Pt=null}return e}function Gd(e,r){do{var t=He;try{if(Fs(),ei.current=oi,ri){for(var o=_e.memoizedState;o!==null;){var s=o.queue;s!==null&&(s.pending=null),o=o.next}ri=!1}if(Lt=0,We=Be=_e=null,Jn=!1,Zn=0,ya.current=null,t===null||t.return===null){Fe=1,oo=r,He=null;break}e:{var a=e,d=t.return,f=t,h=r;if(r=Ge,f.flags|=32768,h!==null&&typeof h=="object"&&typeof h.then=="function"){var w=h,N=f,S=N.tag;if((N.mode&1)===0&&(S===0||S===11||S===15)){var j=N.alternate;j?(N.updateQueue=j.updateQueue,N.memoizedState=j.memoizedState,N.lanes=j.lanes):(N.updateQueue=null,N.memoizedState=null)}var I=vd(d);if(I!==null){I.flags&=-257,yd(I,d,f,a,r),I.mode&1&&gd(a,w,r),r=I,h=w;var R=r.updateQueue;if(R===null){var O=new Set;O.add(h),r.updateQueue=O}else R.add(h);break e}else{if((r&1)===0){gd(a,w,r),Ea();break e}h=Error(l(426))}}else if(Te&&f.mode&1){var Oe=vd(d);if(Oe!==null){(Oe.flags&65536)===0&&(Oe.flags|=256),yd(Oe,d,f,a,r),As(dn(h,f));break e}}a=h=dn(h,f),Fe!==4&&(Fe=2),io===null?io=[a]:io.push(a),a=d;do{switch(a.tag){case 3:a.flags|=65536,r&=-r,a.lanes|=r;var g=xd(a,h,r);Dc(a,g);break e;case 1:f=h;var x=a.type,y=a.stateNode;if((a.flags&128)===0&&(typeof x.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(ut===null||!ut.has(y)))){a.flags|=65536,r&=-r,a.lanes|=r;var C=md(a,f,r);Dc(a,C);break e}}a=a.return}while(a!==null)}Yd(t)}catch(A){r=A,He===t&&t!==null&&(He=t=t.return);continue}break}while(!0)}function qd(){var e=di.current;return di.current=oi,e===null?oi:e}function Ea(){(Fe===0||Fe===3||Fe===2)&&(Fe=4),Ue===null||(zt&268435455)===0&&(ui&268435455)===0||ht(Ue,Ge)}function gi(e,r){var t=fe;fe|=2;var o=qd();(Ue!==e||Ge!==r)&&(qr=null,$t(e,r));do try{eh();break}catch(s){Gd(e,s)}while(!0);if(Fs(),fe=t,di.current=o,He!==null)throw Error(l(261));return Ue=null,Ge=0,Fe}function eh(){for(;He!==null;)Kd(He)}function rh(){for(;He!==null&&!Sp();)Kd(He)}function Kd(e){var r=Zd(e.alternate,e,fr);e.memoizedProps=e.pendingProps,r===null?Yd(e):He=r,ya.current=null}function Yd(e){var r=e;do{var t=r.alternate;if(e=r.return,(r.flags&32768)===0){if(t=Gf(t,r,fr),t!==null){He=t;return}}else{if(t=qf(t,r),t!==null){t.flags&=32767,He=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Fe=6,He=null;return}}if(r=r.sibling,r!==null){He=r;return}He=r=e}while(r!==null);Fe===0&&(Fe=5)}function Rt(e,r,t){var o=ye,s=br.transition;try{br.transition=null,ye=1,th(e,r,t,o)}finally{br.transition=s,ye=o}return null}function th(e,r,t,o){do hn();while(pt!==null);if((fe&6)!==0)throw Error(l(327));t=e.finishedWork;var s=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(l(177));e.callbackNode=null,e.callbackPriority=0;var a=t.lanes|t.childLanes;if(Rp(e,a),e===Ue&&(He=Ue=null,Ge=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||fi||(fi=!0,eu(bo,function(){return hn(),null})),a=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||a){a=br.transition,br.transition=null;var d=ye;ye=1;var f=fe;fe|=4,ya.current=null,Yf(e,t),Bd(t,e),kf(Es),Eo=!!Ts,Es=Ts=null,e.current=t,Xf(t),Cp(),fe=f,ye=d,br.transition=a}else e.current=t;if(fi&&(fi=!1,pt=e,hi=s),a=e.pendingLanes,a===0&&(ut=null),Pp(t.stateNode),ar(e,Me()),r!==null)for(o=e.onRecoverableError,t=0;t<r.length;t++)s=r[t],o(s.value,{componentStack:s.stack,digest:s.digest});if(pi)throw pi=!1,e=ka,ka=null,e;return(hi&1)!==0&&e.tag!==0&&hn(),a=e.pendingLanes,(a&1)!==0?e===ja?so++:(so=0,ja=e):so=0,at(),null}function hn(){if(pt!==null){var e=Hl(hi),r=br.transition,t=ye;try{if(br.transition=null,ye=16>e?16:e,pt===null)var o=!1;else{if(e=pt,pt=null,hi=0,(fe&6)!==0)throw Error(l(331));var s=fe;for(fe|=4,$=e.current;$!==null;){var a=$,d=a.child;if(($.flags&16)!==0){var f=a.deletions;if(f!==null){for(var h=0;h<f.length;h++){var w=f[h];for($=w;$!==null;){var N=$;switch(N.tag){case 0:case 11:case 15:no(8,N,a)}var S=N.child;if(S!==null)S.return=N,$=S;else for(;$!==null;){N=$;var j=N.sibling,I=N.return;if(Rd(N),N===w){$=null;break}if(j!==null){j.return=I,$=j;break}$=I}}}var R=a.alternate;if(R!==null){var O=R.child;if(O!==null){R.child=null;do{var Oe=O.sibling;O.sibling=null,O=Oe}while(O!==null)}}$=a}}if((a.subtreeFlags&2064)!==0&&d!==null)d.return=a,$=d;else e:for(;$!==null;){if(a=$,(a.flags&2048)!==0)switch(a.tag){case 0:case 11:case 15:no(9,a,a.return)}var g=a.sibling;if(g!==null){g.return=a.return,$=g;break e}$=a.return}}var x=e.current;for($=x;$!==null;){d=$;var y=d.child;if((d.subtreeFlags&2064)!==0&&y!==null)y.return=d,$=y;else e:for(d=x;$!==null;){if(f=$,(f.flags&2048)!==0)try{switch(f.tag){case 0:case 11:case 15:ci(9,f)}}catch(A){$e(f,f.return,A)}if(f===d){$=null;break e}var C=f.sibling;if(C!==null){C.return=f.return,$=C;break e}$=f.return}}if(fe=s,at(),Mr&&typeof Mr.onPostCommitFiberRoot=="function")try{Mr.onPostCommitFiberRoot(ko,e)}catch{}o=!0}return o}finally{ye=t,br.transition=r}}return!1}function Xd(e,r,t){r=dn(t,r),r=xd(e,r,1),e=ct(e,r,1),r=tr(),e!==null&&(_n(e,1,r),ar(e,r))}function $e(e,r,t){if(e.tag===3)Xd(e,e,t);else for(;r!==null;){if(r.tag===3){Xd(r,e,t);break}else if(r.tag===1){var o=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ut===null||!ut.has(o))){e=dn(t,e),e=md(r,e,1),r=ct(r,e,1),e=tr(),r!==null&&(_n(r,1,e),ar(r,e));break}}r=r.return}}function nh(e,r,t){var o=e.pingCache;o!==null&&o.delete(r),r=tr(),e.pingedLanes|=e.suspendedLanes&t,Ue===e&&(Ge&t)===t&&(Fe===4||Fe===3&&(Ge&130023424)===Ge&&500>Me()-ba?$t(e,0):wa|=t),ar(e,r)}function Jd(e,r){r===0&&((e.mode&1)===0?r=1:(r=No,No<<=1,(No&130023424)===0&&(No=4194304)));var t=tr();e=Vr(e,r),e!==null&&(_n(e,r,t),ar(e,t))}function oh(e){var r=e.memoizedState,t=0;r!==null&&(t=r.retryLane),Jd(e,t)}function ih(e,r){var t=0;switch(e.tag){case 13:var o=e.stateNode,s=e.memoizedState;s!==null&&(t=s.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(l(314))}o!==null&&o.delete(r),Jd(e,t)}var Zd;Zd=function(e,r,t){if(e!==null)if(e.memoizedProps!==r.pendingProps||nr.current)ir=!0;else{if((e.lanes&t)===0&&(r.flags&128)===0)return ir=!1,Qf(e,r,t);ir=(e.flags&131072)!==0}else ir=!1,Te&&(r.flags&1048576)!==0&&zc(r,Qo,r.index);switch(r.lanes=0,r.tag){case 2:var o=r.type;ai(e,r),e=r.pendingProps;var s=rn(r,Ye.current);ln(r,t),s=Js(null,r,o,e,s,t);var a=Zs();return r.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,or(o)?(a=!0,Wo(r)):a=!1,r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Vs(r),s.updater=ii,r.stateNode=s,s._reactInternals=r,ia(r,o,e,t),r=ca(null,r,o,!0,a,t)):(r.tag=0,Te&&a&&Rs(r),rr(null,r,s,t),r=r.child),r;case 16:o=r.elementType;e:{switch(ai(e,r),e=r.pendingProps,s=o._init,o=s(o._payload),r.type=o,s=r.tag=ah(o),e=_r(o,e),s){case 0:r=la(null,r,o,e,t);break e;case 1:r=Sd(null,r,o,e,t);break e;case 11:r=wd(null,r,o,e,t);break e;case 14:r=bd(null,r,o,_r(o.type,e),t);break e}throw Error(l(306,o,""))}return r;case 0:return o=r.type,s=r.pendingProps,s=r.elementType===o?s:_r(o,s),la(e,r,o,s,t);case 1:return o=r.type,s=r.pendingProps,s=r.elementType===o?s:_r(o,s),Sd(e,r,o,s,t);case 3:e:{if(Cd(r),e===null)throw Error(l(387));o=r.pendingProps,a=r.memoizedState,s=a.element,Fc(e,r),Jo(r,o,null,t);var d=r.memoizedState;if(o=d.element,a.isDehydrated)if(a={element:o,isDehydrated:!1,cache:d.cache,pendingSuspenseBoundaries:d.pendingSuspenseBoundaries,transitions:d.transitions},r.updateQueue.baseState=a,r.memoizedState=a,r.flags&256){s=dn(Error(l(423)),r),r=Td(e,r,o,t,s);break e}else if(o!==s){s=dn(Error(l(424)),r),r=Td(e,r,o,t,s);break e}else for(pr=ot(r.stateNode.containerInfo.firstChild),ur=r,Te=!0,Pr=null,t=Ac(r,null,o,t),r.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(on(),o===s){r=Gr(e,r,t);break e}rr(e,r,o,t)}r=r.child}return r;case 5:return Uc(r),e===null&&Hs(r),o=r.type,s=r.pendingProps,a=e!==null?e.memoizedProps:null,d=s.children,Ps(o,s)?d=null:a!==null&&Ps(o,a)&&(r.flags|=32),Nd(e,r),rr(e,r,d,t),r.child;case 6:return e===null&&Hs(r),null;case 13:return Ed(e,r,t);case 4:return Qs(r,r.stateNode.containerInfo),o=r.pendingProps,e===null?r.child=sn(r,null,o,t):rr(e,r,o,t),r.child;case 11:return o=r.type,s=r.pendingProps,s=r.elementType===o?s:_r(o,s),wd(e,r,o,s,t);case 7:return rr(e,r,r.pendingProps,t),r.child;case 8:return rr(e,r,r.pendingProps.children,t),r.child;case 12:return rr(e,r,r.pendingProps.children,t),r.child;case 10:e:{if(o=r.type._context,s=r.pendingProps,a=r.memoizedProps,d=s.value,ke(Ko,o._currentValue),o._currentValue=d,a!==null)if(Er(a.value,d)){if(a.children===s.children&&!nr.current){r=Gr(e,r,t);break e}}else for(a=r.child,a!==null&&(a.return=r);a!==null;){var f=a.dependencies;if(f!==null){d=a.child;for(var h=f.firstContext;h!==null;){if(h.context===o){if(a.tag===1){h=Qr(-1,t&-t),h.tag=2;var w=a.updateQueue;if(w!==null){w=w.shared;var N=w.pending;N===null?h.next=h:(h.next=N.next,N.next=h),w.pending=h}}a.lanes|=t,h=a.alternate,h!==null&&(h.lanes|=t),Ws(a.return,t,r),f.lanes|=t;break}h=h.next}}else if(a.tag===10)d=a.type===r.type?null:a.child;else if(a.tag===18){if(d=a.return,d===null)throw Error(l(341));d.lanes|=t,f=d.alternate,f!==null&&(f.lanes|=t),Ws(d,t,r),d=a.sibling}else d=a.child;if(d!==null)d.return=a;else for(d=a;d!==null;){if(d===r){d=null;break}if(a=d.sibling,a!==null){a.return=d.return,d=a;break}d=d.return}a=d}rr(e,r,s.children,t),r=r.child}return r;case 9:return s=r.type,o=r.pendingProps.children,ln(r,t),s=yr(s),o=o(s),r.flags|=1,rr(e,r,o,t),r.child;case 14:return o=r.type,s=_r(o,r.pendingProps),s=_r(o.type,s),bd(e,r,o,s,t);case 15:return kd(e,r,r.type,r.pendingProps,t);case 17:return o=r.type,s=r.pendingProps,s=r.elementType===o?s:_r(o,s),ai(e,r),r.tag=1,or(o)?(e=!0,Wo(r)):e=!1,ln(r,t),fd(r,o,s),ia(r,o,s,t),ca(null,r,o,!0,e,t);case 19:return _d(e,r,t);case 22:return jd(e,r,t)}throw Error(l(156,r.tag))};function eu(e,r){return Il(e,r)}function sh(e,r,t,o){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kr(e,r,t,o){return new sh(e,r,t,o)}function Pa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ah(e){if(typeof e=="function")return Pa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ie)return 11;if(e===er)return 14}return 2}function xt(e,r){var t=e.alternate;return t===null?(t=kr(e.tag,r,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=r,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,r=e.dependencies,t.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function vi(e,r,t,o,s,a){var d=2;if(o=e,typeof e=="function")Pa(e)&&(d=1);else if(typeof e=="string")d=5;else e:switch(e){case _:return Mt(t.children,s,a,r);case H:d=8,s|=8;break;case we:return e=kr(12,t,r,s|2),e.elementType=we,e.lanes=a,e;case Ce:return e=kr(13,t,r,s),e.elementType=Ce,e.lanes=a,e;case qe:return e=kr(19,t,r,s),e.elementType=qe,e.lanes=a,e;case be:return yi(t,s,a,r);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Re:d=10;break e;case se:d=9;break e;case Ie:d=11;break e;case er:d=14;break e;case Ke:d=16,o=null;break e}throw Error(l(130,e==null?e:typeof e,""))}return r=kr(d,t,r,s),r.elementType=e,r.type=o,r.lanes=a,r}function Mt(e,r,t,o){return e=kr(7,e,o,r),e.lanes=t,e}function yi(e,r,t,o){return e=kr(22,e,o,r),e.elementType=be,e.lanes=t,e.stateNode={isHidden:!1},e}function _a(e,r,t){return e=kr(6,e,null,r),e.lanes=t,e}function La(e,r,t){return r=kr(4,e.children!==null?e.children:[],e.key,r),r.lanes=t,r.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},r}function lh(e,r,t,o,s){this.tag=r,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=os(0),this.expirationTimes=os(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=os(0),this.identifierPrefix=o,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function za(e,r,t,o,s,a,d,f,h){return e=new lh(e,r,t,f,h),r===1?(r=1,a===!0&&(r|=8)):r=0,a=kr(3,null,null,r),e.current=a,a.stateNode=e,a.memoizedState={element:o,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vs(a),e}function ch(e,r,t){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:W,key:o==null?null:""+o,children:e,containerInfo:r,implementation:t}}function ru(e){if(!e)return st;e=e._reactInternals;e:{if(Nt(e)!==e||e.tag!==1)throw Error(l(170));var r=e;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(or(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(l(171))}if(e.tag===1){var t=e.type;if(or(t))return Pc(e,t,r)}return r}function tu(e,r,t,o,s,a,d,f,h){return e=za(t,o,!0,e,s,a,d,f,h),e.context=ru(null),t=e.current,o=tr(),s=ft(t),a=Qr(o,s),a.callback=r!=null?r:null,ct(t,a,s),e.current.lanes=s,_n(e,s,o),ar(e,o),e}function wi(e,r,t,o){var s=r.current,a=tr(),d=ft(s);return t=ru(t),r.context===null?r.context=t:r.pendingContext=t,r=Qr(a,d),r.payload={element:e},o=o===void 0?null:o,o!==null&&(r.callback=o),e=ct(s,r,d),e!==null&&(Ir(e,s,d,a),Xo(e,s,d)),d}function bi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function nu(e,r){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<r?t:r}}function Ia(e,r){nu(e,r),(e=e.alternate)&&nu(e,r)}function dh(){return null}var ou=typeof reportError=="function"?reportError:function(e){console.error(e)};function $a(e){this._internalRoot=e}ki.prototype.render=$a.prototype.render=function(e){var r=this._internalRoot;if(r===null)throw Error(l(409));wi(e,r,null,null)},ki.prototype.unmount=$a.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var r=e.containerInfo;It(function(){wi(null,e,null,null)}),r[Fr]=null}};function ki(e){this._internalRoot=e}ki.prototype.unstable_scheduleHydration=function(e){if(e){var r=Fl();e={blockedOn:null,target:e,priority:r};for(var t=0;t<rt.length&&r!==0&&r<rt[t].priority;t++);rt.splice(t,0,e),t===0&&Ul(e)}};function Ra(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ji(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function iu(){}function uh(e,r,t,o,s){if(s){if(typeof o=="function"){var a=o;o=function(){var w=bi(d);a.call(w)}}var d=tu(r,o,e,0,null,!1,!1,"",iu);return e._reactRootContainer=d,e[Fr]=d.current,Un(e.nodeType===8?e.parentNode:e),It(),d}for(;s=e.lastChild;)e.removeChild(s);if(typeof o=="function"){var f=o;o=function(){var w=bi(h);f.call(w)}}var h=za(e,0,!1,null,null,!1,!1,"",iu);return e._reactRootContainer=h,e[Fr]=h.current,Un(e.nodeType===8?e.parentNode:e),It(function(){wi(r,h,t,o)}),h}function Ni(e,r,t,o,s){var a=t._reactRootContainer;if(a){var d=a;if(typeof s=="function"){var f=s;s=function(){var h=bi(d);f.call(h)}}wi(r,d,e,s)}else d=uh(t,r,e,s,o);return bi(d)}Al=function(e){switch(e.tag){case 3:var r=e.stateNode;if(r.current.memoizedState.isDehydrated){var t=Pn(r.pendingLanes);t!==0&&(is(r,t|1),ar(r,Me()),(fe&6)===0&&(fn=Me()+500,at()))}break;case 13:It(function(){var o=Vr(e,1);if(o!==null){var s=tr();Ir(o,e,1,s)}}),Ia(e,1)}},ss=function(e){if(e.tag===13){var r=Vr(e,134217728);if(r!==null){var t=tr();Ir(r,e,134217728,t)}Ia(e,134217728)}},Bl=function(e){if(e.tag===13){var r=ft(e),t=Vr(e,r);if(t!==null){var o=tr();Ir(t,e,r,o)}Ia(e,r)}},Fl=function(){return ye},Dl=function(e,r){var t=ye;try{return ye=e,r()}finally{ye=t}},Ji=function(e,r,t){switch(r){case"input":if(Ui(e,t),r=t.name,t.type==="radio"&&r!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<t.length;r++){var o=t[r];if(o!==e&&o.form===e.form){var s=Fo(o);if(!s)throw Error(l(90));jt(o),Ui(o,s)}}}break;case"textarea":gl(e,t);break;case"select":r=t.value,r!=null&&Wt(e,!!t.multiple,r,!1)}},Cl=Ca,Tl=It;var ph={usingClientEntryPoint:!1,Events:[Gn,Zt,Fo,Nl,Sl,Ca]},ao={findFiberByHostInstance:St,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},fh={bundleType:ao.bundleType,version:ao.version,rendererPackageName:ao.rendererPackageName,rendererConfig:ao.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:L.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ll(e),e===null?null:e.stateNode},findFiberByHostInstance:ao.findFiberByHostInstance||dh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var Si=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Si.isDisabled&&Si.supportsFiber)try{ko=Si.inject(fh),Mr=Si}catch{}}return lr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ph,lr.createPortal=function(e,r){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ra(r))throw Error(l(200));return ch(e,r,null,t)},lr.createRoot=function(e,r){if(!Ra(e))throw Error(l(299));var t=!1,o="",s=ou;return r!=null&&(r.unstable_strictMode===!0&&(t=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(s=r.onRecoverableError)),r=za(e,1,!1,null,null,t,!1,o,s),e[Fr]=r.current,Un(e.nodeType===8?e.parentNode:e),new $a(r)},lr.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var r=e._reactInternals;if(r===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=Ll(r),e=e===null?null:e.stateNode,e},lr.flushSync=function(e){return It(e)},lr.hydrate=function(e,r,t){if(!ji(r))throw Error(l(200));return Ni(null,e,r,!0,t)},lr.hydrateRoot=function(e,r,t){if(!Ra(e))throw Error(l(405));var o=t!=null&&t.hydratedSources||null,s=!1,a="",d=ou;if(t!=null&&(t.unstable_strictMode===!0&&(s=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(d=t.onRecoverableError)),r=tu(r,null,e,1,t!=null?t:null,s,!1,a,d),e[Fr]=r.current,Un(e),o)for(e=0;e<o.length;e++)t=o[e],s=t._getVersion,s=s(t._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[t,s]:r.mutableSourceEagerHydrationData.push(t,s);return new ki(r)},lr.render=function(e,r,t){if(!ji(r))throw Error(l(200));return Ni(null,e,r,!1,t)},lr.unmountComponentAtNode=function(e){if(!ji(e))throw Error(l(40));return e._reactRootContainer?(It(function(){Ni(null,null,e,!1,function(){e._reactRootContainer=null,e[Fr]=null})}),!0):!1},lr.unstable_batchedUpdates=Ca,lr.unstable_renderSubtreeIntoContainer=function(e,r,t,o){if(!ji(t))throw Error(l(200));if(e==null||e._reactInternals===void 0)throw Error(l(38));return Ni(e,r,t,!1,o)},lr.version="18.3.1-next-f1338f8080-20240426",lr}var fu;function kh(){if(fu)return Ha.exports;fu=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(c){console.error(c)}}return i(),Ha.exports=bh(),Ha.exports}var hu;function jh(){if(hu)return Ci;hu=1;var i=kh();return Ci.createRoot=i.createRoot,Ci.hydrateRoot=i.hydrateRoot,Ci}var Nh=jh(),Q=nl();const xr=xh(Q);var cr=function(){return cr=Object.assign||function(c){for(var l,p=1,u=arguments.length;p<u;p++){l=arguments[p];for(var v in l)Object.prototype.hasOwnProperty.call(l,v)&&(c[v]=l[v])}return c},cr.apply(this,arguments)};function zi(i,c,l){if(l||arguments.length===2)for(var p=0,u=c.length,v;p<u;p++)(v||!(p in c))&&(v||(v=Array.prototype.slice.call(c,0,p)),v[p]=c[p]);return i.concat(v||Array.prototype.slice.call(c))}var Se="-ms-",po="-moz-",me="-webkit-",Ou="comm",Hi="rule",ol="decl",Sh="@import",Ch="@namespace",Hu="@keyframes",Th="@layer",Au=Math.abs,il=String.fromCharCode,qa=Object.assign;function Eh(i,c){return De(i,0)^45?(((c<<2^De(i,0))<<2^De(i,1))<<2^De(i,2))<<2^De(i,3):0}function Bu(i){return i.trim()}function Kr(i,c){return(i=c.exec(i))?i[0]:i}function te(i,c,l){return i.replace(c,l)}function Ti(i,c,l){return i.indexOf(c,l)}function De(i,c){return i.charCodeAt(c)|0}function Dt(i,c,l){return i.slice(c,l)}function $r(i){return i.length}function Fu(i){return i.length}function co(i,c){return c.push(i),i}function Ph(i,c){return i.map(c).join("")}function xu(i,c){return i.filter(function(l){return!Kr(l,c)})}var Ai=1,gn=1,Du=0,Sr=0,Ae=0,kn="";function Bi(i,c,l,p,u,v,b,P){return{value:i,root:c,parent:l,type:p,props:u,children:v,line:Ai,column:gn,length:b,return:"",siblings:P}}function gt(i,c){return qa(Bi("",null,null,"",null,null,0,i.siblings),i,{length:-i.length},c)}function xn(i){for(;i.root;)i=gt(i.root,{children:[i]});co(i,i.siblings)}function _h(){return Ae}function Lh(){return Ae=Sr>0?De(kn,--Sr):0,gn--,Ae===10&&(gn=1,Ai--),Ae}function Rr(){return Ae=Sr<Du?De(kn,Sr++):0,gn++,Ae===10&&(gn=1,Ai++),Ae}function vt(){return De(kn,Sr)}function Ei(){return Sr}function Fi(i,c){return Dt(kn,i,c)}function xo(i){switch(i){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function zh(i){return Ai=gn=1,Du=$r(kn=i),Sr=0,[]}function Ih(i){return kn="",i}function Fa(i){return Bu(Fi(Sr-1,Ka(i===91?i+2:i===40?i+1:i)))}function $h(i){for(;(Ae=vt())&&Ae<33;)Rr();return xo(i)>2||xo(Ae)>3?"":" "}function Rh(i,c){for(;--c&&Rr()&&!(Ae<48||Ae>102||Ae>57&&Ae<65||Ae>70&&Ae<97););return Fi(i,Ei()+(c<6&&vt()==32&&Rr()==32))}function Ka(i){for(;Rr();)switch(Ae){case i:return Sr;case 34:case 39:i!==34&&i!==39&&Ka(Ae);break;case 40:i===41&&Ka(i);break;case 92:Rr();break}return Sr}function Mh(i,c){for(;Rr()&&i+Ae!==57;)if(i+Ae===84&&vt()===47)break;return"/*"+Fi(c,Sr-1)+"*"+il(i===47?i:Rr())}function Oh(i){for(;!xo(vt());)Rr();return Fi(i,Sr)}function Hh(i){return Ih(Pi("",null,null,null,[""],i=zh(i),0,[0],i))}function Pi(i,c,l,p,u,v,b,P,T){for(var Y=0,G=0,F=b,Z=0,le=0,X=0,D=1,q=1,ge=1,ue=0,ne="",L=u,J=v,W=p,_=ne;q;)switch(X=ue,ue=Rr()){case 40:if(X!=108&&De(_,F-1)==58){Ti(_+=te(Fa(ue),"&","&\f"),"&\f",Au(Y?P[Y-1]:0))!=-1&&(ge=-1);break}case 34:case 39:case 91:_+=Fa(ue);break;case 9:case 10:case 13:case 32:_+=$h(X);break;case 92:_+=Rh(Ei()-1,7);continue;case 47:switch(vt()){case 42:case 47:co(Ah(Mh(Rr(),Ei()),c,l,T),T),(xo(X||1)==5||xo(vt()||1)==5)&&$r(_)&&Dt(_,-1,void 0)!==" "&&(_+=" ");break;default:_+="/"}break;case 123*D:P[Y++]=$r(_)*ge;case 125*D:case 59:case 0:switch(ue){case 0:case 125:q=0;case 59+G:ge==-1&&(_=te(_,/\f/g,"")),le>0&&($r(_)-F||D===0&&X===47)&&co(le>32?gu(_+";",p,l,F-1,T):gu(te(_," ","")+";",p,l,F-2,T),T);break;case 59:_+=";";default:if(co(W=mu(_,c,l,Y,G,u,P,ne,L=[],J=[],F,v),v),ue===123)if(G===0)Pi(_,c,W,W,L,v,F,P,J);else{switch(Z){case 99:if(De(_,3)===110)break;case 108:if(De(_,2)===97)break;default:G=0;case 100:case 109:case 115:}G?Pi(i,W,W,p&&co(mu(i,W,W,0,0,u,P,ne,u,L=[],F,J),J),u,J,F,P,p?L:J):Pi(_,W,W,W,[""],J,0,P,J)}}Y=G=le=0,D=ge=1,ne=_="",F=b;break;case 58:F=1+$r(_),le=X;default:if(D<1){if(ue==123)--D;else if(ue==125&&D++==0&&Lh()==125)continue}switch(_+=il(ue),ue*D){case 38:ge=G>0?1:(_+="\f",-1);break;case 44:P[Y++]=($r(_)-1)*ge,ge=1;break;case 64:vt()===45&&(_+=Fa(Rr())),Z=vt(),G=F=$r(ne=_+=Oh(Ei())),ue++;break;case 45:X===45&&$r(_)==2&&(D=0)}}return v}function mu(i,c,l,p,u,v,b,P,T,Y,G,F){for(var Z=u-1,le=u===0?v:[""],X=Fu(le),D=0,q=0,ge=0;D<p;++D)for(var ue=0,ne=Dt(i,Z+1,Z=Au(q=b[D])),L=i;ue<X;++ue)(L=Bu(q>0?le[ue]+" "+ne:te(ne,/&\f/g,le[ue])))&&(T[ge++]=L);return Bi(i,c,l,u===0?Hi:P,T,Y,G,F)}function Ah(i,c,l,p){return Bi(i,c,l,Ou,il(_h()),Dt(i,2,-2),0,p)}function gu(i,c,l,p,u){return Bi(i,c,l,ol,Dt(i,0,p),Dt(i,p+1,-1),p,u)}function Wu(i,c,l){switch(Eh(i,c)){case 5103:return me+"print-"+i+i;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return me+i+i;case 4855:return me+i.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+i;case 4789:return po+i+i;case 5349:case 4246:case 4810:case 6968:case 2756:return me+i+po+i+Se+i+i;case 5936:switch(De(i,c+11)){case 114:return me+i+Se+te(i,/[svh]\w+-[tblr]{2}/,"tb")+i;case 108:return me+i+Se+te(i,/[svh]\w+-[tblr]{2}/,"tb-rl")+i;case 45:return me+i+Se+te(i,/[svh]\w+-[tblr]{2}/,"lr")+i}case 6828:case 4268:case 2903:return me+i+Se+i+i;case 6165:return me+i+Se+"flex-"+i+i;case 5187:return me+i+te(i,/(\w+).+(:[^]+)/,me+"box-$1$2"+Se+"flex-$1$2")+i;case 5443:return me+i+Se+"flex-item-"+te(i,/flex-|-self/g,"")+(Kr(i,/flex-|baseline/)?"":Se+"grid-row-"+te(i,/flex-|-self/g,""))+i;case 4675:return me+i+Se+"flex-line-pack"+te(i,/align-content|flex-|-self/g,"")+i;case 5548:return me+i+Se+te(i,"shrink","negative")+i;case 5292:return me+i+Se+te(i,"basis","preferred-size")+i;case 6060:return me+"box-"+te(i,"-grow","")+me+i+Se+te(i,"grow","positive")+i;case 4554:return me+te(i,/([^-])(transform)/g,"$1"+me+"$2")+i;case 6187:return te(te(te(i,/(zoom-|grab)/,me+"$1"),/(image-set)/,me+"$1"),i,"")+i;case 5495:case 3959:return te(i,/(image-set\([^]*)/,me+"$1$`$1");case 4968:return te(te(i,/(.+:)(flex-)?(.*)/,me+"box-pack:$3"+Se+"flex-pack:$3"),/space-between/,"justify")+me+i+i;case 4200:if(!Kr(i,/flex-|baseline/))return Se+"grid-column-align"+Dt(i,c)+i;break;case 2592:case 3360:return Se+te(i,"template-","")+i;case 4384:case 3616:return l&&l.some(function(p,u){return c=u,Kr(p.props,/grid-\w+-end/)})?~Ti(i+(l=l[c].value),"span",0)?i:Se+te(i,"-start","")+i+Se+"grid-row-span:"+(~Ti(l,"span",0)?Kr(l,/\d+/):+Kr(l,/\d+/)-+Kr(i,/\d+/))+";":Se+te(i,"-start","")+i;case 4896:case 4128:return l&&l.some(function(p){return Kr(p.props,/grid-\w+-start/)})?i:Se+te(te(i,"-end","-span"),"span ","")+i;case 4095:case 3583:case 4068:case 2532:return te(i,/(.+)-inline(.+)/,me+"$1$2")+i;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if($r(i)-1-c>6)switch(De(i,c+1)){case 109:if(De(i,c+4)!==45)break;case 102:return te(i,/(.+:)(.+)-([^]+)/,"$1"+me+"$2-$3$1"+po+(De(i,c+3)==108?"$3":"$2-$3"))+i;case 115:return~Ti(i,"stretch",0)?Wu(te(i,"stretch","fill-available"),c,l)+i:i}break;case 5152:case 5920:return te(i,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(p,u,v,b,P,T,Y){return Se+u+":"+v+Y+(b?Se+u+"-span:"+(P?T:+T-+v)+Y:"")+i});case 4949:if(De(i,c+6)===121)return te(i,":",":"+me)+i;break;case 6444:switch(De(i,De(i,14)===45?18:11)){case 120:return te(i,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+me+(De(i,14)===45?"inline-":"")+"box$3$1"+me+"$2$3$1"+Se+"$2box$3")+i;case 100:return te(i,":",":"+Se)+i}break;case 5719:case 2647:case 2135:case 3927:case 2391:return te(i,"scroll-","scroll-snap-")+i}return i}function Ii(i,c){for(var l="",p=0;p<i.length;p++)l+=c(i[p],p,i,c)||"";return l}function Bh(i,c,l,p){switch(i.type){case Th:if(i.children.length)break;case Sh:case Ch:case ol:return i.return=i.return||i.value;case Ou:return"";case Hu:return i.return=i.value+"{"+Ii(i.children,p)+"}";case Hi:if(!$r(i.value=i.props.join(",")))return""}return $r(l=Ii(i.children,p))?i.return=i.value+"{"+l+"}":""}function Fh(i){var c=Fu(i);return function(l,p,u,v){for(var b="",P=0;P<c;P++)b+=i[P](l,p,u,v)||"";return b}}function Dh(i){return function(c){c.root||(c=c.return)&&i(c)}}function Wh(i,c,l,p){if(i.length>-1&&!i.return)switch(i.type){case ol:i.return=Wu(i.value,i.length,l);return;case Hu:return Ii([gt(i,{value:te(i.value,"@","@"+me)})],p);case Hi:if(i.length)return Ph(l=i.props,function(u){switch(Kr(u,p=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":xn(gt(i,{props:[te(u,/:(read-\w+)/,":"+po+"$1")]})),xn(gt(i,{props:[u]})),qa(i,{props:xu(l,p)});break;case"::placeholder":xn(gt(i,{props:[te(u,/:(plac\w+)/,":"+me+"input-$1")]})),xn(gt(i,{props:[te(u,/:(plac\w+)/,":"+po+"$1")]})),xn(gt(i,{props:[te(u,/:(plac\w+)/,Se+"input-$1")]})),xn(gt(i,{props:[u]})),qa(i,{props:xu(l,p)});break}return""})}}var Uh={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},hr={},vn=typeof process!="undefined"&&hr!==void 0&&(hr.REACT_APP_SC_ATTR||hr.SC_ATTR)||"data-styled",Uu="active",Vu="data-styled-version",Di="6.3.10",sl=`/*!sc*/
`,fo=typeof window!="undefined"&&typeof document!="undefined",Vh=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&hr!==void 0&&hr.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&hr.REACT_APP_SC_DISABLE_SPEEDY!==""?hr.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&hr.REACT_APP_SC_DISABLE_SPEEDY:typeof process!="undefined"&&hr!==void 0&&hr.SC_DISABLE_SPEEDY!==void 0&&hr.SC_DISABLE_SPEEDY!==""&&hr.SC_DISABLE_SPEEDY!=="false"&&hr.SC_DISABLE_SPEEDY);function go(i){for(var c=[],l=1;l<arguments.length;l++)c[l-1]=arguments[l];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(i," for more information.").concat(c.length>0?" Args: ".concat(c.join(", ")):""))}var _i=new Map,$i=new Map,Li=1,uo=function(i){if(_i.has(i))return _i.get(i);for(;$i.has(Li);)Li++;var c=Li++;return _i.set(i,c),$i.set(c,i),c},Qh=function(i,c){Li=c+1,_i.set(i,c),$i.set(c,i)},al=Object.freeze([]),yn=Object.freeze({});function Gh(i,c,l){return l===void 0&&(l=yn),i.theme!==l.theme&&i.theme||c||l.theme}var Qu=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),qh=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Kh=/(^-|-$)/g;function vu(i){return i.replace(qh,"-").replace(Kh,"")}var Yh=/(a)(d)/gi,yu=function(i){return String.fromCharCode(i+(i>25?39:97))};function Ya(i){var c,l="";for(c=Math.abs(i);c>52;c=c/52|0)l=yu(c%52)+l;return(yu(c%52)+l).replace(Yh,"$1-$2")}var Da,Ot=function(i,c){for(var l=c.length;l;)i=33*i^c.charCodeAt(--l);return i},Gu=function(i){return Ot(5381,i)};function Xh(i){return Ya(Gu(i)>>>0)}function Jh(i){return i.displayName||i.name||"Component"}function Wa(i){return typeof i=="string"&&!0}var qu=typeof Symbol=="function"&&Symbol.for,Ku=qu?Symbol.for("react.memo"):60115,Zh=qu?Symbol.for("react.forward_ref"):60112,ex={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},rx={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Yu={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},tx=((Da={})[Zh]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Da[Ku]=Yu,Da);function wu(i){return("type"in(c=i)&&c.type.$$typeof)===Ku?Yu:"$$typeof"in i?tx[i.$$typeof]:ex;var c}var nx=Object.defineProperty,ox=Object.getOwnPropertyNames,bu=Object.getOwnPropertySymbols,ix=Object.getOwnPropertyDescriptor,sx=Object.getPrototypeOf,ku=Object.prototype;function Xu(i,c,l){if(typeof c!="string"){if(ku){var p=sx(c);p&&p!==ku&&Xu(i,p,l)}var u=ox(c);bu&&(u=u.concat(bu(c)));for(var v=wu(i),b=wu(c),P=0;P<u.length;++P){var T=u[P];if(!(T in rx||l&&l[T]||b&&T in b||v&&T in v)){var Y=ix(c,T);try{nx(i,T,Y)}catch{}}}}return i}function wn(i){return typeof i=="function"}function ll(i){return typeof i=="object"&&"styledComponentId"in i}function At(i,c){return i&&c?"".concat(i," ").concat(c):i||c||""}function ju(i,c){return i.join("")}function mo(i){return i!==null&&typeof i=="object"&&i.constructor.name===Object.name&&!("props"in i&&i.$$typeof)}function Xa(i,c,l){if(l===void 0&&(l=!1),!l&&!mo(i)&&!Array.isArray(i))return c;if(Array.isArray(c))for(var p=0;p<c.length;p++)i[p]=Xa(i[p],c[p]);else if(mo(c))for(var p in c)i[p]=Xa(i[p],c[p]);return i}function cl(i,c){Object.defineProperty(i,"toString",{value:c})}var ax=(function(){function i(c){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=c,this._cGroup=0,this._cIndex=0}return i.prototype.indexOfGroup=function(c){if(c===this._cGroup)return this._cIndex;var l=this._cIndex;if(c>this._cGroup)for(var p=this._cGroup;p<c;p++)l+=this.groupSizes[p];else for(p=this._cGroup-1;p>=c;p--)l-=this.groupSizes[p];return this._cGroup=c,this._cIndex=l,l},i.prototype.insertRules=function(c,l){if(c>=this.groupSizes.length){for(var p=this.groupSizes,u=p.length,v=u;c>=v;)if((v<<=1)<0)throw go(16,"".concat(c));this.groupSizes=new Uint32Array(v),this.groupSizes.set(p),this.length=v;for(var b=u;b<v;b++)this.groupSizes[b]=0}for(var P=this.indexOfGroup(c+1),T=0,Y=(b=0,l.length);b<Y;b++)this.tag.insertRule(P,l[b])&&(this.groupSizes[c]++,P++,T++);T>0&&this._cGroup>c&&(this._cIndex+=T)},i.prototype.clearGroup=function(c){if(c<this.length){var l=this.groupSizes[c],p=this.indexOfGroup(c),u=p+l;this.groupSizes[c]=0;for(var v=p;v<u;v++)this.tag.deleteRule(p);l>0&&this._cGroup>c&&(this._cIndex-=l)}},i.prototype.getGroup=function(c){var l="";if(c>=this.length||this.groupSizes[c]===0)return l;for(var p=this.groupSizes[c],u=this.indexOfGroup(c),v=u+p,b=u;b<v;b++)l+=this.tag.getRule(b)+sl;return l},i})(),lx="style[".concat(vn,"][").concat(Vu,'="').concat(Di,'"]'),cx=new RegExp("^".concat(vn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Nu=function(i){return typeof ShadowRoot!="undefined"&&i instanceof ShadowRoot||"host"in i&&i.nodeType===11},Ja=function(i){if(!i)return document;if(Nu(i))return i;if("getRootNode"in i){var c=i.getRootNode();if(Nu(c))return c}return document},dx=function(i,c,l){for(var p,u=l.split(","),v=0,b=u.length;v<b;v++)(p=u[v])&&i.registerName(c,p)},ux=function(i,c){for(var l,p=((l=c.textContent)!==null&&l!==void 0?l:"").split(sl),u=[],v=0,b=p.length;v<b;v++){var P=p[v].trim();if(P){var T=P.match(cx);if(T){var Y=0|parseInt(T[1],10),G=T[2];Y!==0&&(Qh(G,Y),dx(i,G,T[3]),i.getTag().insertRules(Y,u)),u.length=0}else u.push(P)}}},Ua=function(i){for(var c=Ja(i.options.target).querySelectorAll(lx),l=0,p=c.length;l<p;l++){var u=c[l];u&&u.getAttribute(vn)!==Uu&&(ux(i,u),u.parentNode&&u.parentNode.removeChild(u))}};function px(){return typeof __webpack_nonce__!="undefined"?__webpack_nonce__:null}var Ju=function(i){var c=document.head,l=i||c,p=document.createElement("style"),u=(function(P){var T=Array.from(P.querySelectorAll("style[".concat(vn,"]")));return T[T.length-1]})(l),v=u!==void 0?u.nextSibling:null;p.setAttribute(vn,Uu),p.setAttribute(Vu,Di);var b=px();return b&&p.setAttribute("nonce",b),l.insertBefore(p,v),p},fx=(function(){function i(c){this.element=Ju(c),this.element.appendChild(document.createTextNode("")),this.sheet=(function(l){var p;if(l.sheet)return l.sheet;for(var u=(p=l.getRootNode().styleSheets)!==null&&p!==void 0?p:document.styleSheets,v=0,b=u.length;v<b;v++){var P=u[v];if(P.ownerNode===l)return P}throw go(17)})(this.element),this.length=0}return i.prototype.insertRule=function(c,l){try{return this.sheet.insertRule(l,c),this.length++,!0}catch{return!1}},i.prototype.deleteRule=function(c){this.sheet.deleteRule(c),this.length--},i.prototype.getRule=function(c){var l=this.sheet.cssRules[c];return l&&l.cssText?l.cssText:""},i})(),hx=(function(){function i(c){this.element=Ju(c),this.nodes=this.element.childNodes,this.length=0}return i.prototype.insertRule=function(c,l){if(c<=this.length&&c>=0){var p=document.createTextNode(l);return this.element.insertBefore(p,this.nodes[c]||null),this.length++,!0}return!1},i.prototype.deleteRule=function(c){this.element.removeChild(this.nodes[c]),this.length--},i.prototype.getRule=function(c){return c<this.length?this.nodes[c].textContent:""},i})(),xx=(function(){function i(c){this.rules=[],this.length=0}return i.prototype.insertRule=function(c,l){return c<=this.length&&(c===this.length?this.rules.push(l):this.rules.splice(c,0,l),this.length++,!0)},i.prototype.deleteRule=function(c){this.rules.splice(c,1),this.length--},i.prototype.getRule=function(c){return c<this.length?this.rules[c]:""},i})(),Su=fo,mx={isServer:!fo,useCSSOMInjection:!Vh},Zu=(function(){function i(c,l,p){c===void 0&&(c=yn),l===void 0&&(l={});var u=this;this.options=cr(cr({},mx),c),this.gs=l,this.names=new Map(p),this.server=!!c.isServer,!this.server&&fo&&Su&&(Su=!1,Ua(this)),cl(this,function(){return(function(v){for(var b=v.getTag(),P=b.length,T="",Y=function(F){var Z=(function(ge){return $i.get(ge)})(F);if(Z===void 0)return"continue";var le=v.names.get(Z);if(le===void 0||!le.size)return"continue";var X=b.getGroup(F);if(X.length===0)return"continue";var D=vn+".g"+F+'[id="'+Z+'"]',q="";le.forEach(function(ge){ge.length>0&&(q+=ge+",")}),T+=X+D+'{content:"'+q+'"}'+sl},G=0;G<P;G++)Y(G);return T})(u)})}return i.registerId=function(c){return uo(c)},i.prototype.rehydrate=function(){!this.server&&fo&&Ua(this)},i.prototype.reconstructWithOptions=function(c,l){l===void 0&&(l=!0);var p=new i(cr(cr({},this.options),c),this.gs,l&&this.names||void 0);return!this.server&&fo&&c.target!==this.options.target&&Ja(this.options.target)!==Ja(c.target)&&Ua(p),p},i.prototype.allocateGSInstance=function(c){return this.gs[c]=(this.gs[c]||0)+1},i.prototype.getTag=function(){return this.tag||(this.tag=(c=(function(l){var p=l.useCSSOMInjection,u=l.target;return l.isServer?new xx(u):p?new fx(u):new hx(u)})(this.options),new ax(c)));var c},i.prototype.hasNameForId=function(c,l){var p,u;return(u=(p=this.names.get(c))===null||p===void 0?void 0:p.has(l))!==null&&u!==void 0&&u},i.prototype.registerName=function(c,l){uo(c);var p=this.names.get(c);p?p.add(l):this.names.set(c,new Set([l]))},i.prototype.insertRules=function(c,l,p){this.registerName(c,l),this.getTag().insertRules(uo(c),p)},i.prototype.clearNames=function(c){this.names.has(c)&&this.names.get(c).clear()},i.prototype.clearRules=function(c){this.getTag().clearGroup(uo(c)),this.clearNames(c)},i.prototype.clearTag=function(){this.tag=void 0},i})(),gx=/&/g,Yr=47,Ht=42;function Cu(i){if(i.indexOf("}")===-1)return!1;for(var c=i.length,l=0,p=0,u=!1,v=0;v<c;v++){var b=i.charCodeAt(v);if(p!==0||u||b!==Yr||i.charCodeAt(v+1)!==Ht)if(u)b===Ht&&i.charCodeAt(v+1)===Yr&&(u=!1,v++);else if(b!==34&&b!==39||v!==0&&i.charCodeAt(v-1)===92){if(p===0){if(b===123)l++;else if(b===125&&--l<0)return!0}}else p===0?p=b:p===b&&(p=0);else u=!0,v++}return l!==0||p!==0}function ep(i,c){return i.map(function(l){return l.type==="rule"&&(l.value="".concat(c," ").concat(l.value),l.value=l.value.replaceAll(",",",".concat(c," ")),l.props=l.props.map(function(p){return"".concat(c," ").concat(p)})),Array.isArray(l.children)&&l.type!=="@keyframes"&&(l.children=ep(l.children,c)),l})}function vx(i){var c,l,p,u=yn,v=u.options,b=v===void 0?yn:v,P=u.plugins,T=P===void 0?al:P,Y=function(X,D,q){return q.startsWith(l)&&q.endsWith(l)&&q.replaceAll(l,"").length>0?".".concat(c):X},G=T.slice();G.push(function(X){X.type===Hi&&X.value.includes("&")&&(p||(p=new RegExp("\\".concat(l,"\\b"),"g")),X.props[0]=X.props[0].replace(gx,l).replace(p,Y))}),b.prefix&&G.push(Wh),G.push(Bh);var F=[],Z=Fh(G.concat(Dh(function(X){return F.push(X)}))),le=function(X,D,q,ge){D===void 0&&(D=""),q===void 0&&(q=""),ge===void 0&&(ge="&"),c=ge,l=D,p=void 0;var ue=(function(L){if(!Cu(L))return L;for(var J=L.length,W="",_=0,H=0,we=0,Re=!1,se=0;se<J;se++){var Ie=L.charCodeAt(se);if(we!==0||Re||Ie!==Yr||L.charCodeAt(se+1)!==Ht)if(Re)Ie===Ht&&L.charCodeAt(se+1)===Yr&&(Re=!1,se++);else if(Ie!==34&&Ie!==39||se!==0&&L.charCodeAt(se-1)===92){if(we===0)if(Ie===123)H++;else if(Ie===125){if(--H<0){for(var Ce=se+1;Ce<J;){var qe=L.charCodeAt(Ce);if(qe===59||qe===10)break;Ce++}Ce<J&&L.charCodeAt(Ce)===59&&Ce++,H=0,se=Ce-1,_=Ce;continue}H===0&&(W+=L.substring(_,se+1),_=se+1)}else Ie===59&&H===0&&(W+=L.substring(_,se+1),_=se+1)}else we===0?we=Ie:we===Ie&&(we=0);else Re=!0,se++}if(_<J){var er=L.substring(_);Cu(er)||(W+=er)}return W})((function(L){if(L.indexOf("//")===-1)return L;for(var J=L.length,W=[],_=0,H=0,we=0,Re=0;H<J;){var se=L.charCodeAt(H);if(se!==34&&se!==39||H!==0&&L.charCodeAt(H-1)===92)if(we===0)if(se===Yr&&H+1<J&&L.charCodeAt(H+1)===Ht){for(H+=2;H+1<J&&(L.charCodeAt(H)!==Ht||L.charCodeAt(H+1)!==Yr);)H++;H+=2}else if(se===40&&H>=3&&(32|L.charCodeAt(H-1))==108&&(32|L.charCodeAt(H-2))==114&&(32|L.charCodeAt(H-3))==117)Re=1,H++;else if(Re>0)se===41?Re--:se===40&&Re++,H++;else if(se===Ht&&H+1<J&&L.charCodeAt(H+1)===Yr)H>_&&W.push(L.substring(_,H)),_=H+=2;else if(se===Yr&&H+1<J&&L.charCodeAt(H+1)===Yr){for(H>_&&W.push(L.substring(_,H));H<J&&L.charCodeAt(H)!==10;)H++;_=H}else H++;else H++;else we===0?we=se:we===se&&(we=0),H++}return _===0?L:(_<J&&W.push(L.substring(_)),W.join(""))})(X)),ne=Hh(q||D?"".concat(q," ").concat(D," { ").concat(ue," }"):ue);return b.namespace&&(ne=ep(ne,b.namespace)),F=[],Ii(ne,Z),F};return le.hash=T.length?T.reduce(function(X,D){return D.name||go(15),Ot(X,D.name)},5381).toString():"",le}var yx=new Zu,Za=vx(),rp=xr.createContext({shouldForwardProp:void 0,styleSheet:yx,stylis:Za});rp.Consumer;xr.createContext(void 0);function Tu(){return xr.useContext(rp)}var wx=(function(){function i(c,l){var p=this;this.inject=function(u,v){v===void 0&&(v=Za);var b=p.name+v.hash;u.hasNameForId(p.id,b)||u.insertRules(p.id,b,v(p.rules,b,"@keyframes"))},this.name=c,this.id="sc-keyframes-".concat(c),this.rules=l,cl(this,function(){throw go(12,String(p.name))})}return i.prototype.getName=function(c){return c===void 0&&(c=Za),this.name+c.hash},i})();function bx(i,c){return c==null||typeof c=="boolean"||c===""?"":typeof c!="number"||c===0||i in Uh||i.startsWith("--")?String(c).trim():"".concat(c,"px")}var kx=function(i){return i>="A"&&i<="Z"};function Eu(i){for(var c="",l=0;l<i.length;l++){var p=i[l];if(l===1&&p==="-"&&i[0]==="-")return i;kx(p)?c+="-"+p.toLowerCase():c+=p}return c.startsWith("ms-")?"-"+c:c}var tp=function(i){return i==null||i===!1||i===""},np=function(i){var c=[];for(var l in i){var p=i[l];i.hasOwnProperty(l)&&!tp(p)&&(Array.isArray(p)&&p.isCss||wn(p)?c.push("".concat(Eu(l),":"),p,";"):mo(p)?c.push.apply(c,zi(zi(["".concat(l," {")],np(p),!1),["}"],!1)):c.push("".concat(Eu(l),": ").concat(bx(l,p),";")))}return c};function Bt(i,c,l,p,u){if(u===void 0&&(u=[]),typeof i=="string")return i&&u.push(i),u;if(tp(i))return u;if(ll(i))return u.push(".".concat(i.styledComponentId)),u;if(wn(i)){if(!wn(b=i)||b.prototype&&b.prototype.isReactComponent||!c)return u.push(i),u;var v=i(c);return Bt(v,c,l,p,u)}var b;if(i instanceof wx)return l?(i.inject(l,p),u.push(i.getName(p))):u.push(i),u;if(mo(i)){for(var P=np(i),T=0;T<P.length;T++)u.push(P[T]);return u}if(!Array.isArray(i))return u.push(i.toString()),u;for(T=0;T<i.length;T++)Bt(i[T],c,l,p,u);return u}function jx(i){for(var c=0;c<i.length;c+=1){var l=i[c];if(wn(l)&&!ll(l))return!1}return!0}var Nx=Gu(Di),Sx=(function(){function i(c,l,p){this.rules=c,this.staticRulesId="",this.isStatic=(p===void 0||p.isStatic)&&jx(c),this.componentId=l,this.baseHash=Ot(Nx,l),this.baseStyle=p,Zu.registerId(l)}return i.prototype.generateAndInjectStyles=function(c,l,p){var u=this.baseStyle?this.baseStyle.generateAndInjectStyles(c,l,p).className:"";if(this.isStatic&&!p.hash)if(this.staticRulesId&&l.hasNameForId(this.componentId,this.staticRulesId))u=At(u,this.staticRulesId);else{var v=ju(Bt(this.rules,c,l,p)),b=Ya(Ot(this.baseHash,v)>>>0);if(!l.hasNameForId(this.componentId,b)){var P=p(v,".".concat(b),void 0,this.componentId);l.insertRules(this.componentId,b,P)}u=At(u,b),this.staticRulesId=b}else{for(var T=Ot(this.baseHash,p.hash),Y="",G=0;G<this.rules.length;G++){var F=this.rules[G];if(typeof F=="string")Y+=F;else if(F){var Z=ju(Bt(F,c,l,p));T=Ot(Ot(T,String(G)),Z),Y+=Z}}if(Y){var le=Ya(T>>>0);if(!l.hasNameForId(this.componentId,le)){var X=p(Y,".".concat(le),void 0,this.componentId);l.insertRules(this.componentId,le,X)}u=At(u,le)}}return{className:u,css:typeof window=="undefined"?l.getTag().getGroup(uo(this.componentId)):""}},i})(),op=xr.createContext(void 0);op.Consumer;var Va={};function Cx(i,c,l){var p=ll(i),u=i,v=!Wa(i),b=c.attrs,P=b===void 0?al:b,T=c.componentId,Y=T===void 0?(function(L,J){var W=typeof L!="string"?"sc":vu(L);Va[W]=(Va[W]||0)+1;var _="".concat(W,"-").concat(Xh(Di+W+Va[W]));return J?"".concat(J,"-").concat(_):_})(c.displayName,c.parentComponentId):T,G=c.displayName,F=G===void 0?(function(L){return Wa(L)?"styled.".concat(L):"Styled(".concat(Jh(L),")")})(i):G,Z=c.displayName&&c.componentId?"".concat(vu(c.displayName),"-").concat(c.componentId):c.componentId||Y,le=p&&u.attrs?u.attrs.concat(P).filter(Boolean):P,X=c.shouldForwardProp;if(p&&u.shouldForwardProp){var D=u.shouldForwardProp;if(c.shouldForwardProp){var q=c.shouldForwardProp;X=function(L,J){return D(L,J)&&q(L,J)}}else X=D}var ge=new Sx(l,Z,p?u.componentStyle:void 0);function ue(L,J){return(function(W,_,H){var we=W.attrs,Re=W.componentStyle,se=W.defaultProps,Ie=W.foldedComponentIds,Ce=W.styledComponentId,qe=W.target,er=xr.useContext(op),Ke=Tu(),be=W.shouldForwardProp||Ke.shouldForwardProp,E=Gh(_,er,se)||yn,B=(function(ie,pe,de){for(var ve,Ee=cr(cr({},pe),{className:void 0,theme:de}),Xr=0;Xr<ie.length;Xr+=1){var jt=wn(ve=ie[Xr])?ve(Ee):ve;for(var Cr in jt)Cr==="className"?Ee.className=At(Ee.className,jt[Cr]):Cr==="style"?Ee.style=cr(cr({},Ee.style),jt[Cr]):Ee[Cr]=jt[Cr]}return"className"in pe&&typeof pe.className=="string"&&(Ee.className=At(Ee.className,pe.className)),Ee})(we,_,E),z=B.as||qe,m={};for(var k in B)B[k]===void 0||k[0]==="$"||k==="as"||k==="theme"&&B.theme===E||(k==="forwardedAs"?m.as=B.forwardedAs:be&&!be(k,z)||(m[k]=B[k]));var ee=(function(ie,pe){var de=Tu(),ve=ie.generateAndInjectStyles(pe,de.styleSheet,de.stylis);return ve})(Re,B),re=ee.className,ae=At(Ie,Ce);return re&&(ae+=" "+re),B.className&&(ae+=" "+B.className),m[Wa(z)&&!Qu.has(z)?"class":"className"]=ae,H&&(m.ref=H),Q.createElement(z,m)})(ne,L,J)}ue.displayName=F;var ne=xr.forwardRef(ue);return ne.attrs=le,ne.componentStyle=ge,ne.displayName=F,ne.shouldForwardProp=X,ne.foldedComponentIds=p?At(u.foldedComponentIds,u.styledComponentId):"",ne.styledComponentId=Z,ne.target=p?u.target:i,Object.defineProperty(ne,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(L){this._foldedDefaultProps=p?(function(J){for(var W=[],_=1;_<arguments.length;_++)W[_-1]=arguments[_];for(var H=0,we=W;H<we.length;H++)Xa(J,we[H],!0);return J})({},u.defaultProps,L):L}}),cl(ne,function(){return".".concat(ne.styledComponentId)}),v&&Xu(ne,i,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),ne}function Pu(i,c){for(var l=[i[0]],p=0,u=c.length;p<u;p+=1)l.push(c[p],i[p+1]);return l}var _u=function(i){return Object.assign(i,{isCss:!0})};function Tx(i){for(var c=[],l=1;l<arguments.length;l++)c[l-1]=arguments[l];if(wn(i)||mo(i))return _u(Bt(Pu(al,zi([i],c,!0))));var p=i;return c.length===0&&p.length===1&&typeof p[0]=="string"?Bt(p):_u(Bt(Pu(p,c)))}function el(i,c,l){if(l===void 0&&(l=yn),!c)throw go(1,c);var p=function(u){for(var v=[],b=1;b<arguments.length;b++)v[b-1]=arguments[b];return i(c,l,Tx.apply(void 0,zi([u],v,!1)))};return p.attrs=function(u){return el(i,c,cr(cr({},l),{attrs:Array.prototype.concat(l.attrs,u).filter(Boolean)}))},p.withConfig=function(u){return el(i,c,cr(cr({},l),u))},p}var ip=function(i){return el(Cx,i)},xe=ip;Qu.forEach(function(i){xe[i]=ip(i)});const Qa={Wrapper:xe.div`
        /* border: 1px solid #f00; */
        height: 100vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    `,Header:xe.header`
        /* border: 1px solid #f00; */
        height: 60px;
        flex-shrink: 0;
    `,Main:xe.main`
        /* border: 1px solid #f00; */
        flex: 1;
        overflow-y: auto;
        position: relative;

        .contentWrapper {
            /* border: 1px solid #f00; */
            min-height: 100%;
            max-width: 1440px;
            margin: auto;
            display: flex;
            flex-direction: column;
            padding: 15px;

            .category {
                margin: 30px 0 15px 0;
            }
        }

        .footerWrapper {
            /* border: 1px solid #f00; */
            /* min-height: 300px; */
            flex-shrink: 0;
        }
    `},Lu={Wrapper:xe.header`
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 16px;
        border-bottom: 1px solid var(--color-border);
        background: var(--color-bg);
        position: sticky;
        top: 0;
        z-index: 50;
        height: 60px;
    `,Main:xe.div`
        width: 100%;
        display: flex;
        align-items: center;

        .logoNameThemeToggleWrapper {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;
            width: 100%;
        }

        .logoNameWrapper {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .logoWrapper {
            height: 50px;
            width: 50px;
            border-radius: 10px;
            background: #000;
            border: 1px solid var(--color-border);
            position: relative;
            overflow: hidden;
            flex: 0 0 auto;
            padding: 5px;

            img {
                height: 100%;
                width: 100%;
                object-fit: contain;
                display: block;
                transition: opacity 180ms ease;
            }

            .logoSkeleton {
                position: absolute;
                inset: 0;
                background: var(--color-surface-2);
                opacity: 0.75;
            }
        }

        .nameWrapper {
            display: flex;
            flex-direction: column;
            gap: 2px;
            min-width: 0;

            .title {
                color: var(--color-text-primary);
                font-weight: 800;
                letter-spacing: 0.2px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .subTitle {
                color: var(--color-text-muted);
                font-size: 12px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            @media (width < 520px) {
                .subTitle {
                    display: none;
                }
            }

            @media (width < 420px) {
                display: none;
            }
        }

        .themeToggleBtn {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-radius: 12px;
            background: var(--color-surface);
            border: 1px solid var(--color-border);
            color: var(--color-text-primary);
            flex: 0 0 auto;

            .icon {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                font-size: 18px;
            }

            .label {
                font-size: 13px;
                font-weight: 700;
                color: var(--color-text-secondary);
            }

            &:hover {
                border-color: var(--color-border-light);
                background: var(--color-surface-2);
            }

            &:active {
                transform: translateY(1px);
            }

            &:focus-visible {
                outline: 2px solid var(--color-text-primary);
                outline-offset: 3px;
            }

            @media (width < 420px) {
                .label {
                    display: none;
                }
            }
        }
    `},Ex="/php-core-notes/images/transparentLogo.png";var sp={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},zu=xr.createContext&&xr.createContext(sp),Px=["attr","size","title"];function _x(i,c){if(i==null)return{};var l=Lx(i,c),p,u;if(Object.getOwnPropertySymbols){var v=Object.getOwnPropertySymbols(i);for(u=0;u<v.length;u++)p=v[u],!(c.indexOf(p)>=0)&&Object.prototype.propertyIsEnumerable.call(i,p)&&(l[p]=i[p])}return l}function Lx(i,c){if(i==null)return{};var l={};for(var p in i)if(Object.prototype.hasOwnProperty.call(i,p)){if(c.indexOf(p)>=0)continue;l[p]=i[p]}return l}function Ri(){return Ri=Object.assign?Object.assign.bind():function(i){for(var c=1;c<arguments.length;c++){var l=arguments[c];for(var p in l)Object.prototype.hasOwnProperty.call(l,p)&&(i[p]=l[p])}return i},Ri.apply(this,arguments)}function Iu(i,c){var l=Object.keys(i);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(i);c&&(p=p.filter(function(u){return Object.getOwnPropertyDescriptor(i,u).enumerable})),l.push.apply(l,p)}return l}function Mi(i){for(var c=1;c<arguments.length;c++){var l=arguments[c]!=null?arguments[c]:{};c%2?Iu(Object(l),!0).forEach(function(p){zx(i,p,l[p])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(l)):Iu(Object(l)).forEach(function(p){Object.defineProperty(i,p,Object.getOwnPropertyDescriptor(l,p))})}return i}function zx(i,c,l){return c=Ix(c),c in i?Object.defineProperty(i,c,{value:l,enumerable:!0,configurable:!0,writable:!0}):i[c]=l,i}function Ix(i){var c=$x(i,"string");return typeof c=="symbol"?c:c+""}function $x(i,c){if(typeof i!="object"||!i)return i;var l=i[Symbol.toPrimitive];if(l!==void 0){var p=l.call(i,c);if(typeof p!="object")return p;throw new TypeError("@@toPrimitive must return a primitive value.")}return(c==="string"?String:Number)(i)}function ap(i){return i&&i.map((c,l)=>xr.createElement(c.tag,Mi({key:l},c.attr),ap(c.child)))}function M(i){return c=>xr.createElement(Rx,Ri({attr:Mi({},i.attr)},c),ap(i.child))}function Rx(i){var c=l=>{var{attr:p,size:u,title:v}=i,b=_x(i,Px),P=u||l.size||"1em",T;return l.className&&(T=l.className),i.className&&(T=(T?T+" ":"")+i.className),xr.createElement("svg",Ri({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},l.attr,p,b,{className:T,style:Mi(Mi({color:i.color||l.color},l.style),i.style),height:P,width:P,xmlns:"http://www.w3.org/2000/svg"}),v&&xr.createElement("title",null,v),i.children)};return zu!==void 0?xr.createElement(zu.Consumer,null,l=>c(l)):c(sp)}function Ga(i){return M({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"16",x2:"12.01",y2:"16"},child:[]}]})(i)}function lp(i){return M({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"},child:[]},{tag:"line",attr:{x1:"12",y1:"9",x2:"12",y2:"13"},child:[]},{tag:"line",attr:{x1:"12",y1:"17",x2:"12.01",y2:"17"},child:[]}]})(i)}function Mx(i){return M({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"5",x2:"12",y2:"19"},child:[]},{tag:"polyline",attr:{points:"19 12 12 19 5 12"},child:[]}]})(i)}function Ox(i){return M({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"19",x2:"12",y2:"5"},child:[]},{tag:"polyline",attr:{points:"5 12 12 5 19 12"},child:[]}]})(i)}function Hx(i){return M({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"},child:[]},{tag:"path",attr:{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"},child:[]}]})(i)}function yt(i){return M({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"},child:[]},{tag:"polyline",attr:{points:"3.27 6.96 12 12.01 20.73 6.96"},child:[]},{tag:"line",attr:{x1:"12",y1:"22.08",x2:"12",y2:"12"},child:[]}]})(i)}function cp(i){return M({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"},child:[]},{tag:"polyline",attr:{points:"22 4 12 14.01 9 11.01"},child:[]}]})(i)}function $u(i){return M({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"9 11 12 14 22 4"},child:[]},{tag:"path",attr:{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"},child:[]}]})(i)}function Le(i){return M({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"},child:[]}]})(i)}function ze(i){return M({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"9 18 15 12 9 6"},child:[]}]})(i)}function dl(i){return M({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"polyline",attr:{points:"12 6 12 12 16 14"},child:[]}]})(i)}function ce(i){return M({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 18 22 12 16 6"},child:[]},{tag:"polyline",attr:{points:"8 6 2 12 8 18"},child:[]}]})(i)}function Ax(i){return M({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"9 10 4 15 9 20"},child:[]},{tag:"path",attr:{d:"M20 4v7a4 4 0 0 1-4 4H4"},child:[]}]})(i)}function Bx(i){return M({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"9 14 4 9 9 4"},child:[]},{tag:"path",attr:{d:"M20 20v-7a4 4 0 0 0-4-4H4"},child:[]}]})(i)}function Fx(i){return M({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"15 14 20 9 15 4"},child:[]},{tag:"path",attr:{d:"M4 20v-7a4 4 0 0 1 4-4h12"},child:[]}]})(i)}function ul(i){return M({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"4",y:"4",width:"16",height:"16",rx:"2",ry:"2"},child:[]},{tag:"rect",attr:{x:"9",y:"9",width:"6",height:"6"},child:[]},{tag:"line",attr:{x1:"9",y1:"1",x2:"9",y2:"4"},child:[]},{tag:"line",attr:{x1:"15",y1:"1",x2:"15",y2:"4"},child:[]},{tag:"line",attr:{x1:"9",y1:"20",x2:"9",y2:"23"},child:[]},{tag:"line",attr:{x1:"15",y1:"20",x2:"15",y2:"23"},child:[]},{tag:"line",attr:{x1:"20",y1:"9",x2:"23",y2:"9"},child:[]},{tag:"line",attr:{x1:"20",y1:"14",x2:"23",y2:"14"},child:[]},{tag:"line",attr:{x1:"1",y1:"9",x2:"4",y2:"9"},child:[]},{tag:"line",attr:{x1:"1",y1:"14",x2:"4",y2:"14"},child:[]}]})(i)}function jr(i){return M({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"ellipse",attr:{cx:"12",cy:"5",rx:"9",ry:"3"},child:[]},{tag:"path",attr:{d:"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"},child:[]},{tag:"path",attr:{d:"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"},child:[]}]})(i)}function Dx(i){return M({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"},child:[]},{tag:"polyline",attr:{points:"7 10 12 15 17 10"},child:[]},{tag:"line",attr:{x1:"12",y1:"15",x2:"12",y2:"3"},child:[]}]})(i)}function Wx(i){return M({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"},child:[]}]})(i)}function rl(i){return M({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 20h9"},child:[]},{tag:"path",attr:{d:"M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"},child:[]}]})(i)}function Ux(i){return M({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"3"},child:[]}]})(i)}function wt(i){return M({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"},child:[]},{tag:"polyline",attr:{points:"14 2 14 8 20 8"},child:[]},{tag:"line",attr:{x1:"16",y1:"13",x2:"8",y2:"13"},child:[]},{tag:"line",attr:{x1:"16",y1:"17",x2:"8",y2:"17"},child:[]},{tag:"polyline",attr:{points:"10 9 9 9 8 9"},child:[]}]})(i)}function Ru(i){return M({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"},child:[]}]})(i)}function dp(i){return M({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"},child:[]}]})(i)}function Vx(i){return M({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"6",y1:"3",x2:"6",y2:"15"},child:[]},{tag:"circle",attr:{cx:"18",cy:"6",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"18",r:"3"},child:[]},{tag:"path",attr:{d:"M18 9a9 9 0 0 1-9 9"},child:[]}]})(i)}function Qx(i){return M({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"4"},child:[]},{tag:"line",attr:{x1:"1.05",y1:"12",x2:"7",y2:"12"},child:[]},{tag:"line",attr:{x1:"17.01",y1:"12",x2:"22.96",y2:"12"},child:[]}]})(i)}function Gx(i){return M({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"18",cy:"18",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"6",r:"3"},child:[]},{tag:"path",attr:{d:"M13 6h3a2 2 0 0 1 2 2v7"},child:[]},{tag:"line",attr:{x1:"6",y1:"9",x2:"6",y2:"21"},child:[]}]})(i)}function mn(i){return M({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"2",y1:"12",x2:"22",y2:"12"},child:[]},{tag:"path",attr:{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"},child:[]}]})(i)}function qx(i){return M({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"14",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"3",y:"14",width:"7",height:"7"},child:[]}]})(i)}function bn(i){return M({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"4",y1:"9",x2:"20",y2:"9"},child:[]},{tag:"line",attr:{x1:"4",y1:"15",x2:"20",y2:"15"},child:[]},{tag:"line",attr:{x1:"10",y1:"3",x2:"8",y2:"21"},child:[]},{tag:"line",attr:{x1:"16",y1:"3",x2:"14",y2:"21"},child:[]}]})(i)}function up(i){return M({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"},child:[]}]})(i)}function mr(i){return M({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 2 7 12 12 22 7 12 2"},child:[]},{tag:"polyline",attr:{points:"2 17 12 22 22 17"},child:[]},{tag:"polyline",attr:{points:"2 12 12 17 22 12"},child:[]}]})(i)}function Kx(i){return M({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"3",y1:"9",x2:"21",y2:"9"},child:[]},{tag:"line",attr:{x1:"9",y1:"21",x2:"9",y2:"9"},child:[]}]})(i)}function Yx(i){return M({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"},child:[]},{tag:"path",attr:{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"},child:[]}]})(i)}function Xx(i){return M({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"8",y1:"6",x2:"21",y2:"6"},child:[]},{tag:"line",attr:{x1:"8",y1:"12",x2:"21",y2:"12"},child:[]},{tag:"line",attr:{x1:"8",y1:"18",x2:"21",y2:"18"},child:[]},{tag:"line",attr:{x1:"3",y1:"6",x2:"3.01",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"12",x2:"3.01",y2:"12"},child:[]},{tag:"line",attr:{x1:"3",y1:"18",x2:"3.01",y2:"18"},child:[]}]})(i)}function bt(i){return M({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M7 11V7a5 5 0 0 1 10 0v4"},child:[]}]})(i)}function Jx(i){return M({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"},child:[]},{tag:"line",attr:{x1:"8",y1:"2",x2:"8",y2:"18"},child:[]},{tag:"line",attr:{x1:"16",y1:"6",x2:"16",y2:"22"},child:[]}]})(i)}function Zx(i){return M({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"},child:[]}]})(i)}function ho(i){return M({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"16.5",y1:"9.4",x2:"7.5",y2:"4.21"},child:[]},{tag:"path",attr:{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"},child:[]},{tag:"polyline",attr:{points:"3.27 6.96 12 12.01 20.73 6.96"},child:[]},{tag:"line",attr:{x1:"12",y1:"22.08",x2:"12",y2:"12"},child:[]}]})(i)}function em(i){return M({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"5 3 19 12 5 21 5 3"},child:[]}]})(i)}function pp(i){return M({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 4 23 10 17 10"},child:[]},{tag:"polyline",attr:{points:"1 20 1 14 7 14"},child:[]},{tag:"path",attr:{d:"M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"},child:[]}]})(i)}function rm(i){return M({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"17 1 21 5 17 9"},child:[]},{tag:"path",attr:{d:"M3 11V9a4 4 0 0 1 4-4h14"},child:[]},{tag:"polyline",attr:{points:"7 23 3 19 7 15"},child:[]},{tag:"path",attr:{d:"M21 13v2a4 4 0 0 1-4 4H3"},child:[]}]})(i)}function tm(i){return M({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"6",cy:"6",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"18",r:"3"},child:[]},{tag:"line",attr:{x1:"20",y1:"4",x2:"8.12",y2:"15.88"},child:[]},{tag:"line",attr:{x1:"14.47",y1:"14.48",x2:"20",y2:"20"},child:[]},{tag:"line",attr:{x1:"8.12",y1:"8.12",x2:"12",y2:"12"},child:[]}]})(i)}function pl(i){return M({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"},child:[]},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"},child:[]}]})(i)}function tl(i){return M({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"22",y1:"2",x2:"11",y2:"13"},child:[]},{tag:"polygon",attr:{points:"22 2 15 22 11 13 2 9 22 2"},child:[]}]})(i)}function kt(i){return M({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"2",y:"2",width:"20",height:"8",rx:"2",ry:"2"},child:[]},{tag:"rect",attr:{x:"2",y:"14",width:"20",height:"8",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"6",y1:"6",x2:"6.01",y2:"6"},child:[]},{tag:"line",attr:{x1:"6",y1:"18",x2:"6.01",y2:"18"},child:[]}]})(i)}function nm(i){return M({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"3"},child:[]},{tag:"path",attr:{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"},child:[]}]})(i)}function om(i){return M({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"18",cy:"5",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"12",r:"3"},child:[]},{tag:"circle",attr:{cx:"18",cy:"19",r:"3"},child:[]},{tag:"line",attr:{x1:"8.59",y1:"13.51",x2:"15.42",y2:"17.49"},child:[]},{tag:"line",attr:{x1:"15.41",y1:"6.51",x2:"8.59",y2:"10.49"},child:[]}]})(i)}function Nr(i){return M({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"},child:[]}]})(i)}function fp(i){return M({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 3 21 3 21 8"},child:[]},{tag:"line",attr:{x1:"4",y1:"20",x2:"21",y2:"3"},child:[]},{tag:"polyline",attr:{points:"21 16 21 21 16 21"},child:[]},{tag:"line",attr:{x1:"15",y1:"15",x2:"21",y2:"21"},child:[]},{tag:"line",attr:{x1:"4",y1:"4",x2:"9",y2:"9"},child:[]}]})(i)}function im(i){return M({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"4",y1:"21",x2:"4",y2:"14"},child:[]},{tag:"line",attr:{x1:"4",y1:"10",x2:"4",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"20",y1:"21",x2:"20",y2:"16"},child:[]},{tag:"line",attr:{x1:"20",y1:"12",x2:"20",y2:"3"},child:[]},{tag:"line",attr:{x1:"1",y1:"14",x2:"7",y2:"14"},child:[]},{tag:"line",attr:{x1:"9",y1:"8",x2:"15",y2:"8"},child:[]},{tag:"line",attr:{x1:"17",y1:"16",x2:"23",y2:"16"},child:[]}]})(i)}function sm(i){return M({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"5"},child:[]},{tag:"line",attr:{x1:"12",y1:"1",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"23"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"},child:[]},{tag:"line",attr:{x1:"1",y1:"12",x2:"3",y2:"12"},child:[]},{tag:"line",attr:{x1:"21",y1:"12",x2:"23",y2:"12"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"},child:[]}]})(i)}function am(i){return M({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"},child:[]},{tag:"line",attr:{x1:"7",y1:"7",x2:"7.01",y2:"7"},child:[]}]})(i)}function lm(i){return M({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"4 17 10 11 4 5"},child:[]},{tag:"line",attr:{x1:"12",y1:"19",x2:"20",y2:"19"},child:[]}]})(i)}function hp(i){return M({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"},child:[]}]})(i)}function xp(i){return M({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"3 6 5 6 21 6"},child:[]},{tag:"path",attr:{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"},child:[]},{tag:"line",attr:{x1:"10",y1:"11",x2:"10",y2:"17"},child:[]},{tag:"line",attr:{x1:"14",y1:"11",x2:"14",y2:"17"},child:[]}]})(i)}function cm(i){return M({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 6 13.5 15.5 8.5 10.5 1 18"},child:[]},{tag:"polyline",attr:{points:"17 6 23 6 23 12"},child:[]}]})(i)}function Oi(i){return M({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"4 7 4 4 20 4 20 7"},child:[]},{tag:"line",attr:{x1:"9",y1:"20",x2:"15",y2:"20"},child:[]},{tag:"line",attr:{x1:"12",y1:"4",x2:"12",y2:"20"},child:[]}]})(i)}function dm(i){return M({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 16 12 12 8 16"},child:[]},{tag:"line",attr:{x1:"12",y1:"12",x2:"12",y2:"21"},child:[]},{tag:"path",attr:{d:"M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"},child:[]},{tag:"polyline",attr:{points:"16 16 12 12 8 16"},child:[]}]})(i)}function mp(i){return M({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"},child:[]},{tag:"polyline",attr:{points:"17 8 12 3 7 8"},child:[]},{tag:"line",attr:{x1:"12",y1:"3",x2:"12",y2:"15"},child:[]}]})(i)}function gp(i){return M({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"8.5",cy:"7",r:"4"},child:[]},{tag:"polyline",attr:{points:"17 11 19 13 23 9"},child:[]}]})(i)}function um(i){return M({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"9",cy:"7",r:"4"},child:[]},{tag:"path",attr:{d:"M23 21v-2a4 4 0 0 0-3-3.87"},child:[]},{tag:"path",attr:{d:"M16 3.13a4 4 0 0 1 0 7.75"},child:[]}]})(i)}function Ft(i){return M({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"},child:[]}]})(i)}const pm=()=>{const[i,c]=Q.useState(!1),[l,p]=Q.useState("dark");Q.useEffect(()=>{const P=localStorage.getItem("app-theme")||"dark";p(P),P==="light"?document.documentElement.setAttribute("data-theme","light"):document.documentElement.removeAttribute("data-theme")},[]),Q.useEffect(()=>{l==="light"?document.documentElement.setAttribute("data-theme","light"):document.documentElement.removeAttribute("data-theme"),localStorage.setItem("app-theme",l)},[l]);const u=Q.useMemo(()=>l==="light"?"dark":"light",[l]),v=()=>{p(u)};return n.jsx(Lu.Wrapper,{children:n.jsx(Lu.Main,{children:n.jsxs("div",{className:"logoNameThemeToggleWrapper",children:[n.jsxs("div",{className:"logoNameWrapper",children:[n.jsxs("div",{className:"logoWrapper",children:[!i&&n.jsx("div",{className:"logoSkeleton"}),n.jsx("img",{src:Ex,alt:"php-core-notes",onLoad:()=>c(!0),style:{opacity:i?1:0}})]}),n.jsxs("div",{className:"nameWrapper",children:[n.jsx("div",{className:"title",children:"php-core-notes"}),n.jsx("div",{className:"subTitle",children:"At-a-glance php revision"})]})]}),n.jsxs("button",{type:"button",className:"themeToggleBtn",onClick:v,"aria-label":`Switch to ${u} theme`,title:`Switch to ${u}`,children:[n.jsx("span",{className:"icon",children:l==="light"?n.jsx(Zx,{}):n.jsx(sm,{})}),n.jsx("span",{className:"label",children:l==="light"?"Light":"Dark"})]})]})})})},fm={Wrapper:xe.footer`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 15px;
        border-top: 1px solid var(--color-border);

        font-size: 12px;
        color: var(--color-text-muted);

        .right a {
            color: var(--color-text-secondary);
            font-weight: 600;
        }

        .right a:hover {
            color: var(--color-text-primary);
        }

        a {
            color: var(--color-text-secondary);
            font-weight: 600;
        }

        a:hover {
            color: var(--color-text-primary);
        }

        @media (width < 600px) {
            flex-direction: column;
            align-items: flex-start;
            gap: 6px;
        }
    `},hm=()=>n.jsxs(fm.Wrapper,{children:[n.jsxs("div",{className:"left",children:["© ",new Date().getFullYear()," | All rights reserved"]}),n.jsxs("div",{className:"right",children:["By ",n.jsx("a",{href:"https://www.ashishranjan.net",target:"_blank",rel:"noopener noreferrer",children:"Ashish Ranjan"})]})]}),Mu={Wrapper:xe.section`
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 50px;
    `,Content:xe.div`
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
    `},xm=()=>{const i="2026-02-22T10:22:05.452Z",c=new Date(i).toLocaleString("en-US",{year:"numeric",month:"long",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1});return n.jsx(Mu.Wrapper,{children:n.jsxs(Mu.Content,{children:[n.jsxs("div",{className:"top",children:[n.jsxs("div",{className:"badge",children:[n.jsx("span",{className:"badgeIcon",children:n.jsx(ce,{})}),"PHP core revision"]}),n.jsx("h2",{className:"heading",children:"About PHP Programming"}),n.jsx("p",{className:"sub",children:"A powerful server side scripting language designed for building dynamic web applications and backend systems."})]}),n.jsxs("div",{className:"grid",children:[n.jsxs("div",{className:"card",children:[n.jsxs("div",{className:"cardTitle",children:[n.jsx("span",{className:"cardIcon",children:n.jsx(kt,{})}),"What is PHP"]}),n.jsx("p",{className:"p",children:"PHP is a widely used open source scripting language especially suited for web development. It runs on the server, processes requests, interacts with databases, and generates dynamic HTML responses."})]}),n.jsxs("div",{className:"card",children:[n.jsxs("div",{className:"cardTitle",children:[n.jsx("span",{className:"cardIcon",children:n.jsx(jr,{})}),"Why PHP matters"]}),n.jsx("p",{className:"p",children:"PHP powers a large portion of the web including content management systems, e commerce platforms, and APIs. It integrates easily with databases like MySQL and supports both procedural and object oriented programming."})]}),n.jsxs("div",{className:"card wide",children:[n.jsxs("div",{className:"cardTitle",children:[n.jsx("span",{className:"cardIcon",children:n.jsx(mr,{})}),"About php-core-notes"]}),n.jsx("p",{className:"p",children:"The php-core-notes project is designed as a focused backend revision system. It organizes syntax, forms, sessions, security, database interaction, and modern PHP features into a structured single page reference. The goal is clarity in request handling, clean architecture thinking, and secure backend development fundamentals."}),n.jsxs("div",{className:"meta",children:[n.jsxs("span",{className:"metaLeft",children:[n.jsx("span",{className:"metaIcon",children:n.jsx(dl,{})}),n.jsx("span",{className:"metaLabel",children:"Last updated"})]}),n.jsx("span",{className:"metaValue",children:c})]})]})]})]})})},mm={Wrapper:xe.section`
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
    `},gm=()=>{const[i,c]=Q.useState(!1),l=Q.useMemo(()=>[{key:"intro",title:"Introduction",icon:n.jsx(Hx,{}),items:[{title:"What is PHP",text:"PHP is a server side scripting language used to build dynamic websites, backend logic, and APIs. The server runs PHP code and sends the result (usually HTML or JSON) to the browser."},{title:"How PHP works",text:"Browser requests a URL, the server runs PHP, PHP can talk to a database, then the server returns the final response to the browser. The browser never sees your PHP code."},{title:"Client vs Server",text:"Client is the browser (runs HTML, CSS, JavaScript). Server is where PHP runs (handles requests, connects to DB, returns HTML or JSON)."},{title:"PHP execution flow",text:"Request comes in → server routes it → PHP runs from top to bottom → optional DB/file work → output is generated → response is sent back."},{title:"PHP vs JavaScript",text:"JavaScript mostly runs in the browser for UI and interactions. PHP runs on the server for backend tasks. Both can be used together: JS for frontend, PHP for backend."},{title:"Installing PHP (XAMPP, MAMP, CLI)",text:"XAMPP (Windows/Linux) and MAMP (Mac) give PHP + Apache + MySQL quickly. CLI lets you run PHP in terminal for scripts and quick testing."}]},{key:"syntax",title:"Basic Syntax",icon:n.jsx(ce,{}),items:[{title:"PHP tags",text:"PHP code is written inside PHP tags. Most common: <?php ... ?>. In a .php file you can mix HTML and PHP.",example:'<?php echo "Hello"; ?>'},{title:"echo and print",text:"echo and print output text. echo is slightly faster and can output multiple values. print returns 1 (rarely used).",example:`echo "Hi";
print "Hello";`},{title:"Statements and semicolons",text:"Most PHP statements end with a semicolon. Missing semicolon is a common beginner error.",example:`$x = 10;
echo $x;`},{title:"Case sensitivity",text:"Variable names are case sensitive ($name and $Name are different). Keywords like if, echo are not case sensitive, but stick to normal lowercase style."},{title:"Comments",text:"Use comments for notes. // single line, # single line, /* multi line */.",example:`// comment
# comment
/* multi line */`}]},{key:"variables",title:"Variables",icon:n.jsx(rl,{}),items:[{title:"Variable syntax",text:"Variables start with $ and are assigned using =.",example:`$name = "Ash";
$age = 24;`},{title:"Naming rules",text:"Must start with a letter or underscore after $. Can include numbers later. No spaces. Use meaningful names like $userName or $totalPrice."},{title:"Dynamic typing",text:"PHP is dynamically typed, so a variable can hold different types over time. Still, keep code predictable and avoid random type switching.",example:`$x = 5;
$x = "five";`},{title:"Variable variables",text:"A variable name can be stored in another variable. Used rarely, but good to know it exists.",example:`$a = "name";
$$a = "Ash";
echo $name;`},{title:"Constants (define, const)",text:"Constants are values that should not change. define() is common, const is used inside classes or at top level. Constant names are usually uppercase.",example:`define("APP_NAME", "php-core-notes");
const VERSION = "1.0.0";`}]}],[]),p=()=>c(u=>!u);return n.jsxs(mm.Wrapper,{className:i?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:p,"aria-expanded":i,children:[n.jsx("span",{className:"chev",children:i?n.jsx(Le,{}):n.jsx(ze,{})}),n.jsx("span",{className:"icon",children:n.jsx(kt,{})}),n.jsx("span",{className:"title",children:"PHP Fundamentals"}),n.jsx("span",{className:"meta",children:i?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${i?"open":""}`,children:[n.jsxs("div",{className:"intro",children:[n.jsxs("div",{className:"pill",children:[n.jsx("span",{className:"pillIcon",children:n.jsx(mn,{})}),"Server side basics in one view"]}),n.jsx("p",{className:"p",children:"This section covers what PHP is, how it fits in the web, and the syntax and variable basics you will use everywhere."}),n.jsxs("div",{className:"note",children:[n.jsx("div",{className:"noteTitle",children:"Quick mindset"}),n.jsx("div",{className:"noteText",children:"Browser runs HTML CSS JS. Server runs PHP. The browser only receives the output, not your PHP code."})]})]}),n.jsx("div",{className:"sections",children:l.map(u=>n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:u.icon}),u.title]}),n.jsx("div",{className:"rows",children:u.items.map((v,b)=>n.jsxs("div",{className:"row",children:[n.jsxs("div",{className:"left",children:[n.jsx("div",{className:"itemTitle",children:v.title}),n.jsx("div",{className:"desc",children:v.text}),v.example&&n.jsxs("div",{className:"example",children:[n.jsxs("div",{className:"exTop",children:[n.jsx("span",{className:"exIcon",children:n.jsx(lm,{})}),"Example"]}),n.jsx("pre",{className:"code",children:n.jsx("code",{children:v.example})})]})]}),n.jsxs("div",{className:"rightHint",children:[n.jsxs("div",{className:"hintChip",children:[n.jsx("span",{className:"hintIcon",children:n.jsx(bn,{})}),"Remember"]}),n.jsxs("div",{className:"hintText",children:[u.key==="intro"&&"Server runs PHP and returns HTML or JSON.",u.key==="syntax"&&"Semicolons and correct tags prevent silly errors.",u.key==="variables"&&"Prefer clear variable names and constants for fixed values."]}),n.jsxs("div",{className:"mini",children:[n.jsx("span",{className:"miniIcon",children:n.jsx(yt,{})}),n.jsx("div",{className:"miniText",children:"Keep it predictable"})]})]})]},`${u.key}-${b}`))})]},u.key))})]})]})},vm={Wrapper:xe.section`
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
    `},ym=()=>{const[i,c]=Q.useState(!1),l=Q.useMemo(()=>[{title:"String",icon:n.jsx(Oi,{}),desc:"Text data enclosed in single or double quotes.",ex:'$name = "Ashish";'},{title:"Integer",icon:n.jsx(bn,{}),desc:"Whole numbers without decimals.",ex:"$age = 25;"},{title:"Float",icon:n.jsx(bn,{}),desc:"Numbers with decimal points.",ex:"$price = 99.99;"},{title:"Boolean",icon:n.jsx(cp,{}),desc:"Represents true or false.",ex:"$isLoggedIn = true;"},{title:"Array",icon:n.jsx(yt,{}),desc:"Collection of multiple values.",ex:'$colors = ["red", "blue"];'},{title:"NULL",icon:n.jsx(yt,{}),desc:"Represents a variable with no value.",ex:"$data = null;"},{title:"Resource",icon:n.jsx(yt,{}),desc:"Special type holding external resources like file handles or database connections.",ex:'$file = fopen("test.txt", "r");'},{title:"Object",icon:n.jsx(yt,{}),desc:"Instance of a class containing properties and methods.",ex:"$user = new User();"}],[]),p=()=>c(u=>!u);return n.jsxs(vm.Wrapper,{children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:p,"aria-expanded":i,children:[n.jsx("span",{className:"chev",children:i?n.jsx(Le,{}):n.jsx(ze,{})}),n.jsx("span",{className:"icon",children:n.jsx(ce,{})}),n.jsx("span",{className:"title",children:"Data Types"}),n.jsx("span",{className:"meta",children:i?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${i?"open":""}`,children:[n.jsx("div",{className:"intro",children:n.jsx("p",{children:"PHP is dynamically typed. A variable can hold different types at runtime. Understanding types prevents bugs and unexpected behavior."})}),n.jsxs("div",{className:"section",children:[n.jsx("div",{className:"sectionTitle",children:"Core Data Types"}),l.map((u,v)=>n.jsxs("div",{className:"row",children:[n.jsxs("div",{className:"left",children:[n.jsx("span",{className:"typeIcon",children:u.icon}),n.jsx("span",{className:"typeName",children:u.title})]}),n.jsxs("div",{className:"right",children:[n.jsx("div",{className:"desc",children:u.desc}),n.jsxs("div",{className:"example",children:[n.jsx("span",{className:"exLabel",children:"Example"}),n.jsx("span",{className:"mono",children:u.ex})]})]})]},v))]}),n.jsxs("div",{className:"section",children:[n.jsx("div",{className:"sectionTitle",children:"Type Checking"}),n.jsx("div",{className:"row",children:n.jsxs("div",{className:"right",children:[n.jsxs("div",{className:"desc",children:[n.jsx("strong",{children:"var_dump()"})," shows value and type."]}),n.jsx("div",{className:"mono",children:"var_dump($name);"})]})}),n.jsx("div",{className:"row",children:n.jsxs("div",{className:"right",children:[n.jsxs("div",{className:"desc",children:[n.jsx("strong",{children:"gettype()"})," returns type as string."]}),n.jsx("div",{className:"mono",children:"gettype($age);"})]})}),n.jsx("div",{className:"row",children:n.jsxs("div",{className:"right",children:[n.jsx("div",{className:"desc",children:"Type check helpers: is_string, is_array, is_int"}),n.jsxs("div",{className:"mono",children:["is_string($name);","  ","is_array($colors);","  ","is_int($age);"]})]})})]}),n.jsxs("div",{className:"section",children:[n.jsx("div",{className:"sectionTitle",children:"Type Casting"}),n.jsx("div",{className:"row",children:n.jsxs("div",{className:"right",children:[n.jsx("div",{className:"desc",children:"Convert value to specific type."}),n.jsxs("div",{className:"mono",children:["(int)$value ","  ","(string)$value ","  ","(bool)$value ","  ","(float)$value"]})]})})]})]})]})},wm={Wrapper:xe.section`
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
    `},bm=()=>{const[i,c]=Q.useState(!1),l=Q.useMemo(()=>[{key:"arithmetic",title:"Arithmetic",icon:n.jsx(ul,{}),lines:[{op:"/",text:"Division. In PHP, / returns float if needed.",example:"10 / 4 -> 2.5"},{op:"%",text:"Modulus. Remainder after division.",example:"10 % 4 -> 2"},{op:"**",text:"Exponentiation. Power operator.",example:"2 ** 3 -> 8"}]},{key:"assignment",title:"Assignment",icon:n.jsx(Qx,{}),lines:[{op:"=",text:"Assign value to a variable.",example:"$x = 10"},{op:"+=",text:"Add and assign.",example:"$x += 5 -> same as $x = $x + 5"},{op:"-=",text:"Subtract and assign.",example:"$x -= 2 -> same as $x = $x - 2"},{op:".=",text:"Append string and assign.",example:'$name .= " Ranjan"'}]},{key:"comparison",title:"Comparison",icon:n.jsx(fp,{}),lines:[{op:"==",text:"Equal (loose). May type juggle.",example:'"5" == 5 -> true'},{op:"===",text:"Identical (strict). Value + type must match.",example:'"5" === 5 -> false'},{op:"!=",text:"Not equal (loose).",example:'"5" != 5 -> false'},{op:"!==",text:"Not identical (strict).",example:'"5" !== 5 -> true'},{op:"<",text:"Less than.",example:"3 < 5 -> true"},{op:"<=",text:"Less than or equal.",example:"5 <= 5 -> true"},{op:">=",text:"Greater than or equal.",example:"7 >= 5 -> true"}]},{key:"logical",title:"Logical",icon:n.jsx(bn,{}),lines:[{op:"&&",text:"AND. Both conditions must be true.",example:"true && false -> false"},{op:"||",text:"OR. Any one condition true -> true.",example:"true || false -> true"},{op:"!",text:"NOT. Flips boolean.",example:"!true -> false"},{op:"and",text:"AND keyword. Same idea as &&, but lower precedence.",example:"$ok = true and false -> tricky (precedence)"},{op:"or",text:"OR keyword. Same idea as ||, but lower precedence.",example:"$ok = false or true -> tricky (precedence)"}]},{key:"stringOps",title:"String Operators",icon:n.jsx(Oi,{}),lines:[{op:".",text:"Concatenation. Joins strings.",example:'"Hello" . " World" -> "Hello World"'},{op:".=",text:"Concatenate and assign.",example:'$msg .= "!"'}]}],[]),p=()=>c(u=>!u);return n.jsxs(wm.Wrapper,{className:i?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:p,"aria-expanded":i,children:[n.jsx("span",{className:"chev",children:i?n.jsx(Le,{}):n.jsx(ze,{})}),n.jsx("span",{className:"icon",children:n.jsx(ce,{})}),n.jsx("span",{className:"title",children:"Operators"}),n.jsx("span",{className:"meta",children:i?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${i?"open":""}`,children:[n.jsxs("div",{className:"intro",children:[n.jsxs("div",{className:"pill",children:[n.jsx("span",{className:"pillIcon",children:n.jsx(ce,{})}),"Quick reference for common operators"]}),n.jsx("p",{className:"p",children:"Operators help you calculate, compare, combine, and make decisions. In PHP, remember the difference between loose comparison (==) and strict comparison (===)."}),n.jsxs("div",{className:"note",children:[n.jsx("div",{className:"noteTitle",children:"Important"}),n.jsx("div",{className:"noteText",children:"Prefer strict checks (=== and !==) to avoid unexpected type juggling."})]})]}),n.jsx("div",{className:"sections",children:l.map(u=>n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:u.icon}),u.title]}),n.jsx("div",{className:"rows",children:u.lines.map((v,b)=>n.jsxs("div",{className:"row",children:[n.jsx("div",{className:"op",children:v.op}),n.jsxs("div",{className:"text",children:[n.jsx("div",{className:"desc",children:v.text}),n.jsxs("div",{className:"ex",children:[n.jsx("span",{className:"exLabel",children:"Example"}),n.jsx("span",{className:"mono",children:v.example})]})]})]},`${u.key}-${b}`))})]},u.key))})]})]})},km={Wrapper:xe.section`
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
    `},jm=()=>{const[i,c]=Q.useState(!1),l=Q.useMemo(()=>[{key:"conditionals",title:"Conditionals",icon:n.jsx(Vx,{}),items:[{name:"if",desc:"Execute block if condition is true.",example:"if ($age >= 18) { echo 'Adult'; }"},{name:"else",desc:"Runs when if condition is false.",example:"else { echo 'Minor'; }"},{name:"elseif",desc:"Multiple condition checks.",example:"elseif ($age >= 13) { echo 'Teen'; }"},{name:"switch",desc:"Compare one value against multiple cases.",example:"switch ($role) { case 'admin': break; }"},{name:"match",desc:"Modern PHP expression. Strict comparison and returns value.",example:"$label = match($status) { 200 => 'OK', 404 => 'Not Found' };"}]},{key:"loops",title:"Loops",icon:n.jsx(rm,{}),items:[{name:"while",desc:"Runs while condition is true.",example:"while ($i < 5) { $i++; }"},{name:"do while",desc:"Executes at least once before checking condition.",example:"do { $i++; } while ($i < 5);"},{name:"for",desc:"Loop with counter initialization, condition, increment.",example:"for ($i = 0; $i < 5; $i++) { }"},{name:"foreach",desc:"Best for arrays and collections.",example:"foreach ($users as $user) { echo $user; }"},{name:"break",desc:"Exit loop or switch immediately.",example:"if ($i == 3) break;"},{name:"continue",desc:"Skip current iteration and move to next.",example:"if ($i == 3) continue;"}]}],[]),p=()=>c(u=>!u);return n.jsxs(km.Wrapper,{children:[n.jsxs("button",{type:"button",className:"header",onClick:p,"aria-expanded":i,children:[n.jsx("span",{className:"chev",children:i?n.jsx(Le,{}):n.jsx(ze,{})}),n.jsx("span",{className:"icon",children:n.jsx(ce,{})}),n.jsx("span",{className:"title",children:"Control Structures"}),n.jsx("span",{className:"meta",children:i?"Collapse":"Expand"})]}),n.jsxs("div",{className:`body ${i?"open":""}`,children:[n.jsx("div",{className:"intro",children:"Control structures control execution flow. They decide what runs and how many times it runs."}),l.map(u=>n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:u.icon}),u.title]}),u.items.map((v,b)=>n.jsxs("div",{className:"row",children:[n.jsx("div",{className:"keyword",children:v.name}),n.jsxs("div",{className:"content",children:[n.jsx("div",{className:"desc",children:v.desc}),n.jsxs("div",{className:"example",children:[n.jsx("span",{className:"label",children:"Example"}),n.jsx("span",{className:"mono",children:v.example})]})]})]},b))]},u.key))]})]})},Nm={Wrapper:xe.section`
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
    `},Sm=()=>{const[i,c]=Q.useState(!1),l=Q.useMemo(()=>[{key:"indexed",title:"Indexed Arrays",icon:n.jsx(Xx,{}),desc:"Values are stored with numeric keys starting from 0.",exampleTitle:"Example",example:`$nums = [10, 20, 30];
$nums[0] -> 10`,tips:["Best for ordered lists","Use [] to append new item"]},{key:"associative",title:"Associative Arrays",icon:n.jsx(bn,{}),desc:"Values are stored with custom string keys (key-value pairs).",exampleTitle:"Example",example:`$user = ["name" => "Ash", "role" => "Dev"];
$user["name"] -> "Ash"`,tips:["Best for objects-like data","Keys are usually strings"]},{key:"multi",title:"Multidimensional Arrays",icon:n.jsx(mr,{}),desc:"Arrays inside arrays. Useful for tables, lists of objects, nested data.",exampleTitle:"Example",example:`$users = [
  ["name" => "A", "age" => 20],
  ["name" => "B", "age" => 22]
];
$users[1]["name"] -> "B"`,tips:["Common in API responses","Loop using foreach for readability"]},{key:"functions",title:"Array Functions",icon:n.jsx(hp,{}),desc:"Most used built-in functions for real projects.",rows:[{fn:"count",use:"Get total number of items in array.",ex:"count([1,2,3]) -> 3"},{fn:"array_push",use:"Add one or more items to the end.",ex:"array_push($arr, 4, 5)"},{fn:"array_pop",use:"Remove and return last item.",ex:"array_pop($arr)"},{fn:"array_merge",use:"Merge arrays into one.",ex:"array_merge($a, $b)"},{fn:"array_keys",use:"Get all keys from an array.",ex:'array_keys(["a"=>1,"b"=>2]) -> ["a","b"]'},{fn:"array_values",use:"Get all values (reindexes numeric keys).",ex:'array_values(["a"=>1,"b"=>2]) -> [1,2]'},{fn:"in_array",use:"Check if value exists in array.",ex:'in_array("red", ["red","blue"]) -> true'},{fn:"explode",use:"Split string into array by delimiter.",ex:'explode(",", "a,b,c") -> ["a","b","c"]'},{fn:"implode",use:"Join array into string with delimiter.",ex:'implode("-", ["a","b","c"]) -> "a-b-c"'},{fn:"sort",use:"Sort values and reindex keys (ascending).",ex:"sort($nums)"},{fn:"asort",use:"Sort by values but keep keys (ascending).",ex:"asort($scores)"},{fn:"ksort",use:"Sort by keys (ascending).",ex:"ksort($user)"}],noteTitle:"Quick reminder",noteText:"sort resets keys. Use asort if you must preserve key-value mapping. Use ksort when key order matters."}],[]),p=()=>c(u=>!u);return n.jsxs(Nm.Wrapper,{className:i?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:p,"aria-expanded":i,children:[n.jsx("span",{className:"chev",children:i?n.jsx(Le,{}):n.jsx(ze,{})}),n.jsx("span",{className:"icon",children:n.jsx(qx,{})}),n.jsx("span",{className:"title",children:"Arrays"}),n.jsx("span",{className:"meta",children:i?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${i?"open":""}`,children:[n.jsxs("div",{className:"intro",children:[n.jsxs("div",{className:"pill",children:[n.jsx("span",{className:"pillIcon",children:n.jsx(ce,{})}),"Most used data structure in PHP"]}),n.jsx("p",{className:"p",children:"PHP arrays are very flexible. They can behave like lists (indexed arrays) and like objects/maps (associative arrays). Many real apps use nested arrays for data and API responses."}),n.jsxs("div",{className:"note",children:[n.jsx("div",{className:"noteTitle",children:"Best practice"}),n.jsx("div",{className:"noteText",children:"Use associative arrays for named fields. Use indexed arrays for ordered lists. Keep nesting readable."})]})]}),n.jsx("div",{className:"cards",children:l.filter(u=>u.key!=="functions").map(u=>n.jsxs("div",{className:"card",children:[n.jsxs("div",{className:"cardTitle",children:[n.jsx("span",{className:"cardIcon",children:u.icon}),u.title]}),n.jsx("p",{className:"cardDesc",children:u.desc}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(ce,{})}),u.exampleTitle]}),n.jsx("pre",{className:"code",children:u.example})]}),n.jsx("ul",{className:"tips",children:u.tips.map((v,b)=>n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),v]},`${u.key}-tip-${b}`))})]},u.key))}),n.jsx("div",{className:"functions",children:l.filter(u=>u.key==="functions").map(u=>n.jsxs("div",{className:"funcWrap",children:[n.jsxs("div",{className:"funcTitle",children:[n.jsx("span",{className:"funcIcon",children:u.icon}),u.title]}),n.jsx("p",{className:"funcDesc",children:u.desc}),n.jsx("div",{className:"funcTable",children:u.rows.map((v,b)=>n.jsxs("div",{className:"funcRow",children:[n.jsx("div",{className:"fnName",children:v.fn}),n.jsxs("div",{className:"fnInfo",children:[n.jsx("div",{className:"fnUse",children:v.use}),n.jsxs("div",{className:"fnEx",children:[n.jsx("span",{className:"exLabel",children:"Example"}),n.jsx("span",{className:"mono",children:v.ex})]})]})]},`fn-${b}`))}),n.jsxs("div",{className:"note",children:[n.jsx("div",{className:"noteTitle",children:u.noteTitle}),n.jsx("div",{className:"noteText",children:u.noteText})]})]},u.key))})]})]})},Cm={Wrapper:xe.section`
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
    `},Tm=()=>{const[i,c]=Q.useState(!1),l=Q.useMemo(()=>[{key:"strlen",title:"strlen",icon:n.jsx(Oi,{}),what:"Returns the length of a string (number of characters).",example:'strlen("hello") -> 5',note:"If you deal with multibyte characters (like Hindi), use mb_strlen with mbstring extension."},{key:"strpos",title:"strpos",icon:n.jsx(pl,{}),what:"Finds the position of the first occurrence of a substring. Returns an index or false.",example:'strpos("hello world", "world") -> 6',note:"Important: strpos can return 0 (found at start). Always check with !== false."},{key:"substr",title:"substr",icon:n.jsx(tm,{}),what:"Returns a portion of a string using start index and optional length.",example:'substr("abcdef", 1, 3) -> "bcd"',note:"Negative start or length can count from the end."},{key:"str_replace",title:"str_replace",icon:n.jsx(pp,{}),what:"Replaces all occurrences of a search string with a replacement string.",example:'str_replace("cat", "dog", "cat and cat") -> "dog and dog"',note:"This is case-sensitive. For case-insensitive, use str_ireplace."},{key:"trim",title:"trim",icon:n.jsx(Wx,{}),what:"Removes whitespace from the start and end of a string.",example:'trim("  hello  ") -> "hello"',note:"Useful before validation and saving user input."},{key:"strtolower",title:"strtolower",icon:n.jsx(Mx,{}),what:"Converts a string to lowercase.",example:'strtolower("HELLO") -> "hello"',note:"Used for case-insensitive comparisons like emails and usernames."},{key:"strtoupper",title:"strtoupper",icon:n.jsx(Ox,{}),what:"Converts a string to uppercase.",example:'strtoupper("hello") -> "HELLO"',note:"Good for display formatting, not for strict identifiers."},{key:"htmlspecialchars",title:"htmlspecialchars",icon:n.jsx(Nr,{}),what:"Escapes special characters for safe HTML output to prevent XSS.",example:'htmlspecialchars("<script>") -> "&lt;script&gt;"',note:"Use when showing user input in HTML. This is a security must-know."},{key:"nl2br",title:"nl2br",icon:n.jsx(Ax,{}),what:"Converts newline characters (\\n) into <br> tags for HTML display.",example:'nl2br("line1\\nline2") -> "line1<br />\\nline2"',note:"Often used for displaying textarea content in HTML."}],[]),p=()=>c(u=>!u);return n.jsxs(Cm.Wrapper,{className:i?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:p,"aria-expanded":i,children:[n.jsx("span",{className:"chev",children:i?n.jsx(Le,{}):n.jsx(ze,{})}),n.jsx("span",{className:"icon",children:n.jsx(ce,{})}),n.jsx("span",{className:"title",children:"Strings"}),n.jsx("span",{className:"meta",children:i?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${i?"open":""}`,children:[n.jsxs("div",{className:"intro",children:[n.jsxs("div",{className:"pill",children:[n.jsx("span",{className:"pillIcon",children:n.jsx(Oi,{})}),"Most used PHP string helpers"]}),n.jsx("p",{className:"p",children:"Strings show up everywhere: forms, APIs, database data, file content. These functions cover the most common tasks like search, slicing, formatting, and safe HTML output."}),n.jsxs("div",{className:"note",children:[n.jsx("div",{className:"noteTitle",children:"Security tip"}),n.jsxs("div",{className:"noteText",children:["If you output user input inside HTML, use"," ",n.jsx("span",{className:"mono",children:"htmlspecialchars"})," to prevent XSS."]})]})]}),n.jsx("div",{className:"list",children:l.map(u=>n.jsxs("div",{className:"card",children:[n.jsxs("div",{className:"cardTop",children:[n.jsx("span",{className:"cardIcon",children:u.icon}),n.jsx("div",{className:"cardTitle",children:u.title})]}),n.jsx("div",{className:"desc",children:u.what}),n.jsxs("div",{className:"example",children:[n.jsx("span",{className:"exLabel",children:"Example"}),n.jsx("span",{className:"mono",children:u.example})]}),n.jsxs("div",{className:"noteRow",children:[n.jsx("span",{className:"notePill",children:"Note"}),n.jsx("span",{className:"noteText",children:u.note})]})]},u.key))})]})]})},Em={Wrapper:xe.section`
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
    `},Pm=()=>{const[i,c]=Q.useState(!1),l=Q.useMemo(()=>[{key:"creating",title:"Creating Functions",icon:n.jsx(ce,{}),text:"Functions group reusable logic. Use the function keyword.",code:`function greet() {
    echo "Hello";
}`},{key:"parameters",title:"Parameters",icon:n.jsx(im,{}),text:"Parameters allow passing data into functions.",code:`function greet($name) {
    echo "Hello " . $name;
}`},{key:"default",title:"Default Parameters",icon:n.jsx(mr,{}),text:"You can assign default values to parameters.",code:`function greet($name = "Guest") {
    echo "Hello " . $name;
}`},{key:"return",title:"Return Values",icon:n.jsx(Bx,{}),text:"Use return to send value back from function.",code:`function add($a, $b) {
    return $a + $b;
}`},{key:"types",title:"Type Declarations",icon:n.jsx(Ft,{}),text:"PHP supports parameter and return types.",code:`function add(int $a, int $b): int {
    return $a + $b;
}`},{key:"anonymous",title:"Anonymous Functions",icon:n.jsx(ce,{}),text:"Functions without name. Often used as callbacks.",code:`$greet = function($name) {
    return "Hello " . $name;
};`},{key:"arrow",title:"Arrow Functions",icon:n.jsx(em,{}),text:"Short syntax for simple functions.",code:"$square = fn($x) => $x * $x;"},{key:"scope",title:"Variable Scope",icon:n.jsx(mr,{}),text:"Variables inside function are local by default.",code:`$x = 10;

function test() {
    // $x is not accessible here
}`},{key:"global",title:"global Keyword",icon:n.jsx(mn,{}),text:"Use global to access global variables inside function.",code:`$x = 10;

function test() {
    global $x;
    echo $x;
}`},{key:"static",title:"Static Variables",icon:n.jsx(Ft,{}),text:"Static variables retain value between function calls.",code:`function counter() {
    static $count = 0;
    $count++;
    echo $count;
}`}],[]),p=()=>c(u=>!u);return n.jsxs(Em.Wrapper,{className:i?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:p,"aria-expanded":i,children:[n.jsx("span",{className:"chev",children:i?n.jsx(Le,{}):n.jsx(ze,{})}),n.jsx("span",{className:"icon",children:n.jsx(ce,{})}),n.jsx("span",{className:"title",children:"Functions"}),n.jsx("span",{className:"meta",children:i?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${i?"open":""}`,children:[n.jsxs("div",{className:"intro",children:[n.jsxs("div",{className:"pill",children:[n.jsx(ce,{}),"Function fundamentals at a glance"]}),n.jsx("p",{className:"p",children:"Functions help organize reusable logic. In PHP, understanding scope, return types, and modern syntax like arrow functions is essential."})]}),n.jsx("div",{className:"sections",children:l.map(u=>n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:u.icon}),u.title]}),n.jsxs("div",{className:"content",children:[n.jsx("div",{className:"desc",children:u.text}),n.jsx("pre",{children:n.jsx("code",{children:u.code})})]})]},u.key))})]})]})},_m={Wrapper:xe.section`
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
    `},Lm=()=>{const[i,c]=Q.useState(!1),l=Q.useMemo(()=>[{name:"$_GET",icon:n.jsx(mn,{}),desc:"Collects data sent via URL query string.",example:`example.com/page.php?name=ash

$_GET['name'] -> 'ash'`},{name:"$_POST",icon:n.jsx(mn,{}),desc:"Collects data sent via HTTP POST method (usually forms).",example:`<form method='POST'>
$_POST['email']`},{name:"$_REQUEST",icon:n.jsx(mn,{}),desc:"Contains data from GET, POST, and COOKIE (not recommended for secure logic).",example:"$_REQUEST['username']"},{name:"$_SERVER",icon:n.jsx(kt,{}),desc:"Contains server and request information.",example:`$_SERVER['REQUEST_METHOD']
$_SERVER['HTTP_HOST']`},{name:"$_FILES",icon:n.jsx(mp,{}),desc:"Used for file uploads via forms.",example:`$_FILES['file']['name']
$_FILES['file']['tmp_name']`},{name:"$_SESSION",icon:n.jsx(jr,{}),desc:"Stores data across multiple pages for a user session.",example:`session_start();
$_SESSION['user'] = 'ash';`},{name:"$_COOKIE",icon:n.jsx(up,{}),desc:"Stores small data in the user's browser.",example:`setcookie('theme', 'dark');
$_COOKIE['theme']`},{name:"$_ENV",icon:n.jsx(ce,{}),desc:"Contains environment variables.",example:"$_ENV['PATH']"}],[]),p=()=>c(u=>!u);return n.jsxs(_m.Wrapper,{children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:p,"aria-expanded":i,children:[n.jsx("span",{className:"chev",children:i?n.jsx(Le,{}):n.jsx(ze,{})}),n.jsx("span",{className:"titleIcon",children:n.jsx(ce,{})}),n.jsx("span",{className:"title",children:"Superglobals"}),n.jsx("span",{className:"meta",children:i?"Collapse":"Expand"})]}),n.jsxs("div",{className:`body ${i?"open":""}`,children:[n.jsxs("div",{className:"intro",children:[n.jsx("p",{children:"Superglobals are built-in associative arrays available in all scopes. They provide access to request data, server info, sessions, cookies, files, and environment variables."}),n.jsx("div",{className:"note",children:"Always validate and sanitize external input like $_GET and $_POST to prevent security issues."})]}),n.jsx("div",{className:"grid",children:l.map((u,v)=>n.jsxs("div",{className:"card",children:[n.jsxs("div",{className:"cardHeader",children:[n.jsx("span",{className:"cardIcon",children:u.icon}),n.jsx("span",{className:"cardTitle",children:u.name})]}),n.jsx("p",{className:"desc",children:u.desc}),n.jsx("pre",{className:"example",children:u.example})]},v))})]})]})},zm={Wrapper:xe.section`
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
    `},Im=()=>{const[i,c]=Q.useState(!1),l=Q.useMemo(()=>[{key:"getVsPost",title:"GET vs POST",icon:n.jsx(Gx,{}),points:["GET sends data in the URL (query string). Good for search, filters, bookmarking.","POST sends data in the request body. Better for forms, passwords, larger payloads.","Never send sensitive data using GET (it can be logged, shared, cached)."],exampleTitle:"Quick example",example:`GET:  /profile.php?user=ash
POST: /login.php (email + password in body)`},{key:"validation",title:"Form validation",icon:n.jsx(cp,{}),points:["Validation means checking input is correct before using it.","Always validate on server side, even if you validate on frontend.","Common checks: required, length, format, allowed values, file type and size."],exampleTitle:"Typical validation checks",example:`- empty check
- email format
- min and max length
- allowed list (enum)
- numeric range`},{key:"requiredFields",title:"Required fields",icon:n.jsx(tl,{}),points:["Required means the field must exist and must not be empty after trimming.","Treat missing key and empty value as invalid.","Use trim() so spaces do not pass validation."],exampleTitle:"Rule",example:'trim($name) !== ""'},{key:"sanitize",title:"Sanitizing input",icon:n.jsx(Nr,{}),points:["Sanitizing means cleaning input to reduce risk and make it safe to store or display.","Validation checks if input is acceptable. Sanitizing prepares it for safe usage.","Always escape on output (XSS prevention)."],exampleTitle:"Key idea",example:`Validate first, then sanitize, then store.
Escape when outputting to HTML.`},{key:"htmlspecialchars",title:"htmlspecialchars",icon:n.jsx(ce,{}),points:["Converts special characters to HTML entities.","This prevents user input from becoming real HTML or script on your page.","Use it when printing user data into HTML (XSS protection)."],exampleTitle:"Example",example:'echo htmlspecialchars($name, ENT_QUOTES, "UTF-8");'},{key:"filterInput",title:"filter_input",icon:n.jsx(Ru,{}),points:["Reads input safely from GET or POST using filters.","Useful for emails, integers, URLs, etc.","Returns filtered value or false/null depending on filter and input."],exampleTitle:"Example",example:'$email = filter_input(INPUT_POST, "email", FILTER_VALIDATE_EMAIL);'},{key:"filterVar",title:"filter_var",icon:n.jsx(Ru,{}),points:["Filters a variable you already have in your code.","Useful when data comes from sources other than GET/POST (like JSON body).","Works similarly to filter_input but takes a value directly."],exampleTitle:"Example",example:"$age = filter_var($rawAge, FILTER_VALIDATE_INT);"},{key:"fileUpload",title:"File upload basics",icon:n.jsx(dm,{}),points:["Uploaded files are available in $_FILES.","Always check: error, size, allowed type, and final filename.","Never trust original filename. Generate your own safe name."],exampleTitle:"What to check",example:`- $_FILES["file"]["error"] === UPLOAD_ERR_OK
- max size limit
- allow only safe extensions
- move_uploaded_file() to a safe folder`}],[]),p=()=>c(u=>!u);return n.jsxs(zm.Wrapper,{className:i?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:p,"aria-expanded":i,children:[n.jsx("span",{className:"chev",children:i?n.jsx(Le,{}):n.jsx(ze,{})}),n.jsx("span",{className:"icon",children:n.jsx(tl,{})}),n.jsx("span",{className:"title",children:"Forms Handling"}),n.jsx("span",{className:"meta",children:i?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${i?"open":""}`,children:[n.jsxs("div",{className:"intro",children:[n.jsxs("div",{className:"pill",children:[n.jsx("span",{className:"pillIcon",children:n.jsx(Nr,{})}),"Safe form handling checklist"]}),n.jsx("p",{className:"p",children:"Forms are one of the biggest entry points for bugs and security issues. The core rule is simple: validate input on server side, sanitize for storage, and escape on output."}),n.jsxs("div",{className:"note",children:[n.jsx("div",{className:"noteTitle",children:"Remember"}),n.jsx("div",{className:"noteText",children:"Client side validation is for UX. Server side validation is for security and correctness."})]})]}),n.jsx("div",{className:"sections",children:l.map(u=>n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:u.icon}),u.title]}),n.jsx("ul",{className:"bullets",children:u.points.map((v,b)=>n.jsxs("li",{className:"bullet",children:[n.jsx("span",{className:"dot"}),n.jsx("span",{className:"bulletText",children:v})]},`${u.key}-${b}`))}),n.jsxs("div",{className:"codeBlock",children:[n.jsx("div",{className:"codeTop",children:"Quick example"}),n.jsx("pre",{className:"code",children:u.example})]})]},u.key))})]})]})},$m={Wrapper:xe.section`
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
    `},Rm=()=>{const[i,c]=Q.useState(!1),l=Q.useMemo(()=>[{key:"cookies",title:"Cookies",icon:n.jsx(up,{}),intro:"Cookies are small key-value data stored in the browser and sent with requests to the server. Good for preferences and session ids.",blocks:[{heading:"setcookie",points:["Must be sent before any output (before echo / HTML).","Stored in browser, returned in next request headers.","Use for lightweight data - never store passwords."],exampleTitle:"Basic cookie",example:'setcookie("theme", "dark", time() + 3600, "/");'},{heading:"Expiry",points:["Expiry controls how long the cookie stays.","Session cookie: expires when browser closes (no expiry).","Persistent cookie: set expiry using time() + seconds."],exampleTitle:"Expires in 7 days",example:'setcookie("visit", "yes", time() + (7 * 24 * 60 * 60), "/");'},{heading:"Security flags",points:["HttpOnly: JS cannot read cookie (helps against XSS).","Secure: cookie sent only over HTTPS.","SameSite: helps reduce CSRF by controlling cross-site sending."],exampleTitle:"Safer cookie options",example:`setcookie("sid", $sessionId, [
  "expires" => time() + 3600,
  "path" => "/",
  "secure" => true,
  "httponly" => true,
  "samesite" => "Lax"
]);`,note:"In localhost HTTP, secure: true will prevent cookie from being set. Use secure: true in production HTTPS."}]},{key:"sessions",title:"Sessions",icon:n.jsx(bt,{}),intro:"Sessions store user data on the server. The browser only stores a session id (usually via cookie). Best for login state.",blocks:[{heading:"session_start",points:["Start session at the top of the request.","Required before reading or writing $_SESSION.","Must be called before any output."],exampleTitle:"Start session",example:"session_start();"},{heading:"$_SESSION usage",points:["Store data like user id after login.","Read it on every protected page request.","Keep it minimal. Store ids, not big objects."],exampleTitle:"Set and read session",example:`// after login success
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
}`,note:"Always hash passwords (password_hash). Never store raw passwords in database."}]}],[]),p=()=>c(u=>!u);return n.jsxs($m.Wrapper,{className:i?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:p,"aria-expanded":i,children:[n.jsx("span",{className:"chev",children:i?n.jsx(Le,{}):n.jsx(ze,{})}),n.jsx("span",{className:"icon",children:n.jsx(Nr,{})}),n.jsx("span",{className:"title",children:"Sessions and Cookies"}),n.jsx("span",{className:"meta",children:i?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${i?"open":""}`,children:[n.jsxs("div",{className:"intro",children:[n.jsxs("div",{className:"pill",children:[n.jsx("span",{className:"pillIcon",children:n.jsx(gp,{})}),"Login state and browser storage basics"]}),n.jsx("p",{className:"p",children:"Cookies live in the browser. Sessions live on the server. Most login systems use sessions and store only a session id in a cookie."}),n.jsxs("div",{className:"note",children:[n.jsx("div",{className:"noteTitle",children:"Quick rule"}),n.jsx("div",{className:"noteText",children:"Use cookies for small preferences. Use sessions for authentication and user state."})]})]}),n.jsx("div",{className:"sections",children:l.map(u=>n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTop",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:u.icon}),u.title]}),n.jsx("p",{className:"sectionIntro",children:u.intro})]}),n.jsx("div",{className:"blocks",children:u.blocks.map((v,b)=>n.jsxs("div",{className:"block",children:[n.jsxs("div",{className:"blockHead",children:[n.jsx("div",{className:"blockTitle",children:v.heading}),v.heading==="Expiry"&&n.jsxs("span",{className:"miniBadge",children:[n.jsx("span",{className:"miniIcon",children:n.jsx(dl,{})}),"time based"]}),v.heading==="Destroying sessions"&&n.jsxs("span",{className:"miniBadge",children:[n.jsx("span",{className:"miniIcon",children:n.jsx(xp,{})}),"logout"]}),v.heading==="Security flags"&&n.jsxs("span",{className:"miniBadge",children:[n.jsx("span",{className:"miniIcon",children:n.jsx(bt,{})}),"secure"]})]}),n.jsx("ul",{className:"bullets",children:v.points.map((P,T)=>n.jsxs("li",{className:"bullet",children:[n.jsx("span",{className:"dot"}),n.jsx("span",{children:P})]},`${u.key}-${b}-${T}`))}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(ce,{})}),v.exampleTitle]}),n.jsx("pre",{className:"code",children:v.example})]}),v.note&&n.jsxs("div",{className:"hint",children:[n.jsx("div",{className:"hintTitle",children:"Tip"}),n.jsx("div",{className:"hintText",children:v.note})]})]},`${u.key}-${b}`))})]},u.key))})]})]})},Mm={Wrapper:xe.section`
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
    `},Om=()=>{const[i,c]=Q.useState(!1),l=Q.useMemo(()=>[{key:"fopen",title:"fopen",icon:n.jsx(dp,{}),what:"Opens a file and returns a file handle (resource). Needed for fread, fwrite, fclose.",notes:["Common modes: r, r+, w, w+, a, a+","w creates file if missing and truncates it","a appends and creates file if missing"],example:'$handle = fopen("notes.txt", "r");'},{key:"fread",title:"fread",icon:n.jsx(wt,{}),what:"Reads bytes from an open file handle.",notes:["You must pass how many bytes to read","Often combined with filesize() for full read"],example:"$data = fread($handle, 1024);"},{key:"fwrite",title:"fwrite",icon:n.jsx(rl,{}),what:"Writes a string to an open file handle.",notes:["Returns number of bytes written","Use a or a+ mode to append","Use w or w+ mode to overwrite"],example:'fwrite($handle, "Hello\\n");'},{key:"fclose",title:"fclose",icon:n.jsx(ce,{}),what:"Closes an open file handle and frees resources.",notes:["Always close handles after use","Prevents file locks and resource leaks"],example:"fclose($handle);"},{key:"file_get_contents",title:"file_get_contents",icon:n.jsx(wt,{}),what:"Reads the entire file into a string (simple and common).",notes:["Best for small to medium files","Returns false on failure"],example:'$text = file_get_contents("notes.txt");'},{key:"file_put_contents",title:"file_put_contents",icon:n.jsx(rl,{}),what:"Writes a string to a file in one call.",notes:["Overwrites by default","Use FILE_APPEND to append","Creates file if missing"],example:'file_put_contents("notes.txt", "Hello\\n", FILE_APPEND);'},{key:"unlink",title:"unlink",icon:n.jsx(xp,{}),what:"Deletes a file from the filesystem.",notes:["Returns true on success, false on failure","Check file_exists before unlink to avoid warnings"],example:'unlink("old.txt");'},{key:"file_exists",title:"file_exists",icon:n.jsx(pl,{}),what:"Checks if a file or directory exists at a path.",notes:["Returns true or false","Good before read, write, or delete operations"],example:'if (file_exists("notes.txt")) { ... }'}],[]),p=()=>c(u=>!u);return n.jsxs(Mm.Wrapper,{className:i?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:p,"aria-expanded":i,children:[n.jsx("span",{className:"chev",children:i?n.jsx(Le,{}):n.jsx(ze,{})}),n.jsx("span",{className:"icon",children:n.jsx(wt,{})}),n.jsx("span",{className:"title",children:"File Handling"}),n.jsx("span",{className:"meta",children:i?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${i?"open":""}`,children:[n.jsxs("div",{className:"intro",children:[n.jsxs("div",{className:"pill",children:[n.jsx("span",{className:"pillIcon",children:n.jsx(wt,{})}),"Read, write, append, delete files"]}),n.jsx("p",{className:"p",children:"PHP file handling is used for logs, reports, uploads, simple storage, and server side text processing. For most cases, prefer file_get_contents and file_put_contents for simplicity."}),n.jsxs("div",{className:"note",children:[n.jsxs("div",{className:"noteTitle",children:[n.jsx("span",{className:"noteIcon",children:n.jsx(lp,{})}),"Safety reminder"]}),n.jsx("div",{className:"noteText",children:"Always validate file paths if input comes from users. Never trust user provided filenames directly."})]})]}),n.jsx("div",{className:"sections",children:l.map(u=>n.jsxs("div",{className:"card",children:[n.jsxs("div",{className:"cardTop",children:[n.jsxs("div",{className:"cardTitle",children:[n.jsx("span",{className:"cardIcon",children:u.icon}),u.title]}),n.jsx("div",{className:"tag",children:"PHP"})]}),n.jsx("p",{className:"what",children:u.what}),n.jsx("ul",{className:"bullets",children:u.notes.map((v,b)=>n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),n.jsx("span",{className:"bulletText",children:v})]},`${u.key}-n-${b}`))}),n.jsxs("div",{className:"example",children:[n.jsxs("div",{className:"exTop",children:[n.jsx("span",{className:"exIcon",children:n.jsx(ce,{})}),"Example"]}),n.jsx("pre",{className:"code",children:u.example})]})]},u.key))}),n.jsxs("div",{className:"footerNote",children:[n.jsx("div",{className:"footerTitle",children:"Quick patterns"}),n.jsxs("ul",{className:"checks",children:[n.jsxs("li",{children:[n.jsx("span",{className:"checkDot"}),"Small files: use file_get_contents and file_put_contents"]}),n.jsxs("li",{children:[n.jsx("span",{className:"checkDot"}),"Streaming or large files: use fopen, fread, fwrite, fclose"]}),n.jsxs("li",{children:[n.jsx("span",{className:"checkDot"}),"Before delete or read: file_exists"]})]})]})]})]})},Hm={Wrapper:xe.section`
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
    `},Am=()=>{const[i,c]=Q.useState(!1),l=Q.useMemo(()=>[{key:"errorReporting",title:"error_reporting",icon:n.jsx(hp,{}),desc:"Controls which PHP errors are displayed or logged.",code:`// Show all errors (development)
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Hide errors (production)
ini_set('display_errors', 0);`,note:"Use full error reporting in development. Disable display in production."},{key:"tryCatch",title:"try catch",icon:n.jsx(Nr,{}),desc:"Used to handle exceptions safely without crashing the application.",code:`try {
    $num = 10 / 0;
} catch (Exception $e) {
    echo $e->getMessage();
}`,note:"Code that may fail goes inside try block."},{key:"throw",title:"throw",icon:n.jsx(Ga,{}),desc:"Used to manually create and throw an exception.",code:`function divide($a, $b) {
    if ($b == 0) {
        throw new Exception("Division by zero not allowed");
    }
    return $a / $b;
}`,note:"throw stops execution and passes control to catch block."},{key:"exceptions",title:"Exceptions",icon:n.jsx(Nr,{}),desc:"Exceptions represent runtime errors that can be caught and handled.",code:`try {
    throw new Exception("Something went wrong");
} catch (Exception $e) {
    echo "Error: " . $e->getMessage();
}`,note:"Exceptions provide structured error handling."},{key:"customExceptions",title:"Custom Exceptions",icon:n.jsx(Ga,{}),desc:"Create your own exception class for better control.",code:`class MyException extends Exception {}

try {
    throw new MyException("Custom error triggered");
} catch (MyException $e) {
    echo $e->getMessage();
}`,note:"Custom exceptions help separate different error types."}],[]);return n.jsxs(Hm.Wrapper,{className:i?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:()=>c(p=>!p),"aria-expanded":i,children:[n.jsx("span",{className:"chev",children:i?n.jsx(Le,{}):n.jsx(ze,{})}),n.jsx("span",{className:"icon",children:n.jsx(Ga,{})}),n.jsx("span",{className:"title",children:"Error Handling"}),n.jsx("span",{className:"meta",children:i?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${i?"open":""}`,children:[n.jsxs("div",{className:"intro",children:[n.jsxs("div",{className:"pill",children:[n.jsx("span",{className:"pillIcon",children:n.jsx(dl,{})}),"Handle runtime errors safely"]}),n.jsx("p",{className:"p",children:"Error handling prevents application crashes and allows graceful failure. PHP supports both traditional error reporting and modern exception handling."})]}),n.jsx("div",{className:"sections",children:l.map(p=>n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:p.icon}),p.title]}),n.jsxs("div",{className:"sectionBody",children:[n.jsx("p",{className:"desc",children:p.desc}),n.jsx("pre",{children:n.jsx("code",{children:p.code})}),n.jsxs("div",{className:"note",children:[n.jsx("strong",{children:"Important:"})," ",p.note]})]})]},p.key))})]})]})},Bm={Wrapper:xe.section`
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
    `},Fm=()=>{const[i,c]=Q.useState(!1),l=Q.useMemo(()=>[{key:"embedding",title:"Embedding PHP in HTML",icon:n.jsx(ce,{}),content:`
PHP can be written directly inside HTML using <?php ... ?> tags.
The server executes PHP first, then sends pure HTML to the browser.
                `,example:`
<!-- example.php -->
<h1>Welcome</h1>

<?php
$name = "Ashish";
echo "<p>Hello " . $name . "</p>";
?>
                `},{key:"templating",title:"Templating basics",icon:n.jsx(Kx,{}),content:`
PHP can act as a simple templating engine.
You mix dynamic data into HTML using echo or shorthand syntax.
                `,example:`
<?php $title = "Dashboard"; ?>

<h1><?= $title ?></h1>

<?php if ($isLoggedIn): ?>
    <p>Welcome back</p>
<?php endif; ?>
                `},{key:"buffering",title:"Output buffering",icon:n.jsx(ho,{}),content:`
Output buffering stores output in memory before sending it to the browser.
Useful for modifying headers or capturing template output.
                `,example:`
<?php
ob_start();
echo "<h1>Hello</h1>";
$content = ob_get_clean();
?>
                `},{key:"separation",title:"Separating logic and view",icon:n.jsx(mr,{}),content:`
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
                `}],[]);return n.jsxs(Bm.Wrapper,{children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:()=>c(!i),"aria-expanded":i,children:[n.jsx("span",{className:"chev",children:i?n.jsx(Le,{}):n.jsx(ze,{})}),n.jsx("span",{className:"icon",children:n.jsx(yt,{})}),n.jsx("span",{className:"title",children:"PHP and HTML Integration"}),n.jsx("span",{className:"meta",children:i?"Collapse":"Expand"})]}),n.jsx("div",{className:`topicBody ${i?"open":""}`,children:l.map(p=>n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:p.icon}),p.title]}),n.jsx("p",{className:"desc",children:p.content}),n.jsx("pre",{children:n.jsx("code",{children:p.example})})]},p.key))})]})},Dm={Wrapper:xe.section`
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
    `},Wm=()=>{const[i,c]=Q.useState(!1),l=Q.useMemo(()=>[{key:"classesObjects",title:"Classes and Objects",icon:n.jsx(yt,{}),rows:[{label:"class",text:"Blueprint. Defines properties (data) and methods (behavior).",example:"class User { }"},{label:"object",text:"Instance created from a class using new.",example:"$u = new User();"},{label:"properties",text:"Variables inside a class that store object state.",example:"public string $name;"},{label:"methods",text:"Functions inside a class that operate on object state.",example:"public function greet() { }"},{label:"constructor",text:"Runs automatically on object creation. Use it to set initial state.",example:"public function __construct($name) { }"},{label:"destructor",text:"Runs when object is destroyed. Rarely needed in PHP, but used for cleanup.",example:"public function __destruct() { }"}]},{key:"accessModifiers",title:"Access Modifiers",icon:n.jsx(bt,{}),rows:[{label:"public",text:"Accessible from anywhere. Default intent for APIs you expose.",example:"public function run() { }"},{label:"private",text:"Accessible only inside the same class. Hides internal details.",example:"private string $token;"},{label:"protected",text:"Accessible in the class and its child classes. Useful for inheritance.",example:"protected function build() { }"}]},{key:"oopConcepts",title:"OOP Concepts",icon:n.jsx(mr,{}),rows:[{label:"Encapsulation",text:"Keep data safe by hiding internals and exposing controlled methods.",example:"private $balance + public deposit()"},{label:"Inheritance",text:"A child class can reuse and extend a parent class.",example:"class Admin extends User"},{label:"Polymorphism",text:"Same method name, different behavior (usually via inheritance or interfaces).",example:"->pay() works for CardPay, UpiPay"},{label:"Abstraction",text:"Hide implementation, expose only essential behavior (abstract class or interface).",example:"abstract class Shape { abstract area(); }"},{label:"Interfaces",text:"A contract. Classes must implement required methods.",example:"interface Logger { public function log($m); }"},{label:"Traits",text:"Reusable code blocks you can include in multiple classes (no inheritance needed).",example:"use HasTimestamps;"}]},{key:"static",title:"Static properties and methods",icon:n.jsx(ul,{}),rows:[{label:"static",text:"Belongs to the class itself, not a specific object. Access using ::.",example:"Config::$env or Config::get()"}]},{key:"namespaces",title:"Namespaces",icon:n.jsx(ho,{}),rows:[{label:"namespace",text:"Organizes code and prevents name conflicts. Common in real projects and Composer.",example:"namespace App\\Services;"},{label:"use",text:"Imports a class with shorter name (alias optional).",example:"use App\\Services\\Mail;"}]}],[]),p=()=>c(u=>!u);return n.jsxs(Dm.Wrapper,{className:i?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:p,"aria-expanded":i,children:[n.jsx("span",{className:"chev",children:i?n.jsx(Le,{}):n.jsx(ze,{})}),n.jsx("span",{className:"icon",children:n.jsx(um,{})}),n.jsx("span",{className:"title",children:"Object Oriented PHP"}),n.jsx("span",{className:"meta",children:i?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${i?"open":""}`,children:[n.jsxs("div",{className:"intro",children:[n.jsxs("div",{className:"pill",children:[n.jsx("span",{className:"pillIcon",children:n.jsx(ce,{})}),"OOP basics in one view"]}),n.jsx("p",{className:"p",children:"OOP helps you structure code using reusable objects. You model real features as classes, keep internals private, and expose clear methods. This keeps projects maintainable as they grow."}),n.jsxs("div",{className:"note",children:[n.jsx("div",{className:"noteTitle",children:"Quick rule"}),n.jsx("div",{className:"noteText",children:"Keep properties private by default, and expose behavior through methods. Prefer composition and interfaces when possible."})]})]}),n.jsx("div",{className:"sections",children:l.map(u=>n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:u.icon}),u.title]}),n.jsx("div",{className:"rows",children:u.rows.map((v,b)=>n.jsxs("div",{className:"row",children:[n.jsx("div",{className:"label",children:v.label}),n.jsxs("div",{className:"text",children:[n.jsx("div",{className:"desc",children:v.text}),n.jsxs("div",{className:"ex",children:[n.jsx("span",{className:"exLabel",children:"Example"}),n.jsx("span",{className:"mono",children:v.example})]})]})]},`${u.key}-${b}`))}),u.key==="oopConcepts"&&n.jsxs("div",{className:"miniCallout",children:[n.jsxs("div",{className:"miniCalloutTitle",children:[n.jsx("span",{className:"miniIcon",children:n.jsx(Yx,{})}),"How these connect"]}),n.jsx("div",{className:"miniCalloutText",children:"Interfaces define behavior. Classes implement that behavior. Traits share reusable code. Access modifiers protect internals. Together, they keep large PHP projects clean."})]}),u.key==="namespaces"&&n.jsxs("div",{className:"miniCallout",children:[n.jsxs("div",{className:"miniCalloutTitle",children:[n.jsx("span",{className:"miniIcon",children:n.jsx(om,{})}),"Real world usage"]}),n.jsx("div",{className:"miniCalloutText",children:"Namespaces are standard in Composer projects. One folder usually maps to one namespace prefix, which keeps class names predictable."})]})]},u.key))})]})]})},Um={Wrapper:xe.section`
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
    `},Vm=()=>{const[i,c]=Q.useState(!1),l=Q.useMemo(()=>[{key:"mysqlBasics",title:"MySQL Basics",icon:n.jsx(jr,{}),content:"MySQL is a relational database used to store structured data in tables. PHP communicates with MySQL to perform CRUD operations."},{key:"mysqli",title:"Connecting with mysqli",icon:n.jsx(ce,{}),code:`<?php
$conn = new mysqli("localhost", "root", "", "mydb");
if ($conn->connect_error) {
    die("Connection failed");
}
?>`},{key:"pdo",title:"Connecting with PDO",icon:n.jsx(ce,{}),code:`<?php
$pdo = new PDO("mysql:host=localhost;dbname=mydb", "root", "");
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
?>`},{key:"prepared",title:"Prepared Statements",icon:n.jsx(Nr,{}),content:"Prepared statements separate SQL logic from user input. This prevents SQL injection attacks.",code:`<?php
$stmt = $pdo->prepare("SELECT * FROM users WHERE email = ?");
$stmt->execute([$email]);
$user = $stmt->fetch();
?>`},{key:"fetching",title:"Fetching Data",icon:n.jsx(jr,{}),code:`<?php
$stmt = $pdo->query("SELECT * FROM users");
$users = $stmt->fetchAll(PDO::FETCH_ASSOC);
?>`},{key:"insert",title:"Insert",icon:n.jsx(jr,{}),code:`<?php
$stmt = $pdo->prepare("INSERT INTO users(name, email) VALUES(?, ?)");
$stmt->execute([$name, $email]);
?>`},{key:"update",title:"Update",icon:n.jsx(jr,{}),code:`<?php
$stmt = $pdo->prepare("UPDATE users SET name = ? WHERE id = ?");
$stmt->execute([$name, $id]);
?>`},{key:"delete",title:"Delete",icon:n.jsx(jr,{}),code:`<?php
$stmt = $pdo->prepare("DELETE FROM users WHERE id = ?");
$stmt->execute([$id]);
?>`},{key:"security",title:"Security Essentials",icon:n.jsx(bt,{}),content:"Never trust user input. Always validate, sanitize, and use prepared statements."},{key:"sqlInjection",title:"SQL Injection",icon:n.jsx(Nr,{}),content:"SQL injection happens when raw user input modifies your SQL query. Prepared statements prevent this by binding parameters safely."},{key:"escaping",title:"Escaping",icon:n.jsx(Nr,{}),content:"Escaping converts special characters into safe versions. Use built in functions instead of manual escaping whenever possible."},{key:"passwordHash",title:"Password Hashing",icon:n.jsx(bt,{}),code:`<?php
$hash = password_hash($password, PASSWORD_DEFAULT);
?>`},{key:"passwordVerify",title:"Password Verify",icon:n.jsx(bt,{}),code:`<?php
if (password_verify($password, $hash)) {
    echo "Login success";
}
?>`}],[]),p=()=>c(u=>!u);return n.jsxs(Um.Wrapper,{className:i?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:p,"aria-expanded":i,children:[n.jsx("span",{className:"chev",children:i?n.jsx(Le,{}):n.jsx(ze,{})}),n.jsx("span",{className:"icon",children:n.jsx(jr,{})}),n.jsx("span",{className:"title",children:"Working with Databases (MySQL)"}),n.jsx("span",{className:"meta",children:i?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${i?"open":""}`,children:[n.jsx("div",{className:"intro",children:n.jsx("p",{className:"p",children:"PHP interacts with MySQL to perform CRUD operations. Always use prepared statements and password hashing in real applications."})}),n.jsx("div",{className:"sections",children:l.map(u=>n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:u.icon}),u.title]}),n.jsxs("div",{className:"sectionContent",children:[u.content&&n.jsx("p",{className:"p",children:u.content}),u.code&&n.jsx("pre",{children:n.jsx("code",{children:u.code})})]})]},u.key))})]})]})},Qm={Wrapper:xe.section`
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
    `},Gm=()=>{const[i,c]=Q.useState(!1),l=Q.useMemo(()=>[{key:"xss",title:"XSS prevention",icon:n.jsx(ce,{}),content:"Cross Site Scripting happens when user input is injected into HTML and executed as JavaScript.",tips:["Never trust user input","Always escape output using htmlspecialchars","Use ENT_QUOTES flag","Avoid echoing raw $_GET or $_POST directly"],example:"echo htmlspecialchars($name, ENT_QUOTES, 'UTF-8');"},{key:"csrf",title:"CSRF basics",icon:n.jsx(Nr,{}),content:"Cross Site Request Forgery tricks a logged in user into submitting unwanted requests.",tips:["Use CSRF tokens in forms","Validate token on form submission","Regenerate tokens periodically"],example:"$_SESSION['token'] === $_POST['token']"},{key:"validation",title:"Input validation",icon:n.jsx(gp,{}),content:"Validate data before processing. Sanitization removes unsafe characters. Validation checks correctness.",tips:["Use filter_input and filter_var","Check required fields","Validate email, numbers, length","Never rely only on frontend validation"],example:"filter_var($email, FILTER_VALIDATE_EMAIL);"},{key:"escaping",title:"Output escaping",icon:n.jsx(ce,{}),content:"Escape output when displaying user data in HTML.",tips:["Use htmlspecialchars for HTML","Use prepared statements for SQL","Escape based on context HTML, JS, URL"],example:"echo htmlspecialchars($comment);"},{key:"upload",title:"File upload security",icon:n.jsx(mp,{}),content:"File uploads can be dangerous if not restricted properly.",tips:["Validate file type and extension","Check MIME type","Limit file size","Store outside public directory","Rename uploaded files"],example:"move_uploaded_file($tmp, $safePath);"},{key:"sessionFixation",title:"Session fixation",icon:n.jsx(bt,{}),content:"Attack where attacker sets session ID before login.",tips:["Regenerate session ID after login","Use session_regenerate_id(true)"],example:"session_regenerate_id(true);"},{key:"password",title:"Password hashing",icon:n.jsx(bt,{}),content:"Never store plain passwords. Always hash using strong algorithm.",tips:["Use password_hash","Use password_verify","Do not use md5 or sha1"],example:"password_hash($pass, PASSWORD_DEFAULT);"},{key:"https",title:"HTTPS importance",icon:n.jsx(mn,{}),content:"HTTPS encrypts communication between client and server.",tips:["Prevents man in the middle attacks","Protects login credentials","Required for secure cookies"],example:"Set-Cookie: Secure; HttpOnly"}],[]);return n.jsxs(Qm.Wrapper,{children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:()=>c(p=>!p),children:[n.jsx("span",{className:"chev",children:i?n.jsx(Le,{}):n.jsx(ze,{})}),n.jsx("span",{className:"icon",children:n.jsx(Nr,{})}),n.jsx("span",{className:"title",children:"Security Essentials"}),n.jsx("span",{className:"meta",children:i?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${i?"open":""}`,children:[n.jsx("div",{className:"intro",children:n.jsx("p",{children:"Security is not optional. Even small applications must protect user data and prevent common attacks. Learn these basics before building real systems."})}),n.jsx("div",{className:"sections",children:l.map(p=>n.jsxs("div",{className:"card",children:[n.jsxs("div",{className:"cardTitle",children:[n.jsx("span",{className:"cardIcon",children:p.icon}),p.title]}),n.jsx("p",{className:"desc",children:p.content}),n.jsx("ul",{className:"list",children:p.tips.map((u,v)=>n.jsx("li",{children:u},v))}),n.jsx("div",{className:"example",children:n.jsx("code",{children:p.example})})]},p.key))})]})]})},qm={Wrapper:xe.section`
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
    `},Km=()=>{const[i,c]=Q.useState(!1),l=Q.useMemo(()=>[{key:"jsonEncode",title:"json_encode",icon:n.jsx(jr,{}),content:"Converts PHP arrays or objects into JSON string format. Used when sending structured data to frontend or API clients.",example:`
$data = ["name" => "Ash", "age" => 25];
echo json_encode($data);
`},{key:"jsonDecode",title:"json_decode",icon:n.jsx(jr,{}),content:"Converts JSON string into PHP data. By default returns object. Pass true to get associative array.",example:`
$json = '{"name":"Ash","age":25}';
$data = json_decode($json, true);
echo $data["name"];
`},{key:"createApi",title:"Creating API endpoints",icon:n.jsx(kt,{}),content:"An API endpoint is simply a PHP file that returns JSON instead of HTML. It processes request and responds with structured data.",example:`
header("Content-Type: application/json");

$response = ["status" => "success"];
echo json_encode($response);
`},{key:"requestBody",title:"Reading request body",icon:n.jsx(tl,{}),content:"For JSON requests, data is not available in $_POST. You must read raw input using php://input.",example:`
$raw = file_get_contents("php://input");
$data = json_decode($raw, true);
`},{key:"headers",title:"Setting headers",icon:n.jsx(mr,{}),content:"Headers define how client interprets response. Most APIs must set correct Content-Type.",example:`
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
`},{key:"contentType",title:"Content-Type",icon:n.jsx(mr,{}),content:"Content-Type tells client what format response is. For APIs use application/json.",example:`
header("Content-Type: application/json");
`},{key:"restBasics",title:"REST basics",icon:n.jsx(ce,{}),content:"REST uses HTTP methods to perform actions. GET read. POST create. PUT update. DELETE remove. URL represents resource.",example:`
GET /users
POST /users
PUT /users/1
DELETE /users/1
`}],[]),p=()=>c(u=>!u);return n.jsxs(qm.Wrapper,{children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:p,"aria-expanded":i,children:[n.jsx("span",{className:"chev",children:i?n.jsx(Le,{}):n.jsx(ze,{})}),n.jsx("span",{className:"icon",children:n.jsx(kt,{})}),n.jsx("span",{className:"title",children:"Working with JSON and APIs"}),n.jsx("span",{className:"meta",children:i?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${i?"open":""}`,children:[n.jsx("div",{className:"intro",children:n.jsx("p",{className:"p",children:"JSON is the standard format for data exchange in modern web applications. PHP can generate and read JSON easily, making it simple to build APIs."})}),n.jsx("div",{className:"sections",children:l.map(u=>n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:u.icon}),u.title]}),n.jsxs("div",{className:"sectionBody",children:[n.jsx("p",{className:"desc",children:u.content}),n.jsx("pre",{children:n.jsx("code",{children:u.example})})]})]},u.key))})]})]})},Ym={Wrapper:xe.section`
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
    `},Xm=()=>{const[i,c]=Q.useState(!1),l=Q.useMemo(()=>[{key:"strictTypes",title:"Strict types",icon:n.jsx(Nr,{}),what:"Forces PHP to respect parameter and return types more strictly.",why:"Reduces silent type juggling and catches mistakes early.",code:`<?php
declare(strict_types=1);

function add(int $a, int $b): int {
    return $a + $b;
}

add(2, 3);       // ok
add("2", "3");   // TypeError in strict mode
?>`,note:"declare(strict_types=1) must be the first statement in the file (after <?php)."},{key:"typedProps",title:"Typed properties",icon:n.jsx(bn,{}),what:"Class properties can have types like int, string, array, ?string.",why:"Makes objects safer and clearer, less guessing at runtime.",code:`<?php
class User {
    public int $id;
    public string $name;
    public ?string $email = null;
}
?>`,note:"Use ?type for nullable. Accessing an uninitialized typed property causes an error."},{key:"returnTypes",title:"Return types",icon:n.jsx(Fx,{}),what:"Functions can declare what they return: int, string, array, void, mixed, ?User.",why:"Prevents accidental wrong returns and improves readability.",code:`<?php
function getCount(): int {
    return 10;
}

function logMessage(string $msg): void {
    // no return
}
?>`,note:"If return type is declared and you return a different type, PHP throws a TypeError (especially strict mode)."},{key:"nullCoalescing",title:"Null coalescing operator ??",icon:n.jsx(mr,{}),what:"Provides a default when a value is null or not set.",why:"Cleaner than isset() checks for defaults.",code:`<?php
$name = $_GET["name"] ?? "Guest";

$theme = $config["theme"] ?? "dark";
?>`,note:"?? checks only for null / unset, not for empty string or 0."},{key:"spaceship",title:"Spaceship operator <=>",icon:n.jsx(fp,{}),what:"Compares two values and returns -1, 0, or 1.",why:"Perfect for sorting callbacks.",code:`<?php
// returns -1 if $a < $b
// returns  0 if $a == $b
// returns  1 if $a > $b
$result = 10 <=> 20; // -1

usort($nums, fn($a, $b) => $a <=> $b);
?>`,note:"Commonly used with usort and custom ordering logic."},{key:"attributes",title:"Attributes",icon:n.jsx(am,{}),what:"Modern metadata system using #[] instead of docblock annotations.",why:"Used in frameworks for routing, validation, DI, etc.",code:`<?php
#[Attribute]
class Route {
    public function __construct(public string $path) {}
}

class UserController {
    #[Route("/users")]
    public function index() {}
}
?>`,note:"Attributes are read using reflection. Common in modern PHP frameworks."},{key:"enums",title:"Enums",icon:n.jsx(yt,{}),what:"A safe way to represent a fixed set of values.",why:"Prevents invalid states like status = 'donee' typo.",code:`<?php
enum Status: string {
    case Pending = "pending";
    case Paid = "paid";
    case Failed = "failed";
}

$status = Status::Paid;
?>`,note:"Enums improve correctness in business logic and APIs."},{key:"match",title:"Match expression",icon:n.jsx(ce,{}),what:"Cleaner alternative to switch, returns a value and uses strict comparisons.",why:"Less boilerplate, fewer bugs, no fallthrough.",code:`<?php
$type = "admin";

$label = match ($type) {
    "admin" => "Full access",
    "user" => "Limited access",
    default => "Guest",
};
?>`,note:"match uses strict comparison (===) by default."},{key:"constructorPromotion",title:"Constructor property promotion",icon:n.jsx(Ft,{}),what:"Declare + assign class properties directly in constructor params.",why:"Cuts boilerplate and keeps classes clean.",code:`<?php
class Product {
    public function __construct(
        public int $id,
        public string $name,
        public float $price
    ) {}
}
?>`,note:"Great for DTOs and simple models. Use readonly when needed for immutability (modern PHP)."}],[]),p=()=>c(u=>!u);return n.jsxs(Ym.Wrapper,{className:i?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:p,"aria-expanded":i,children:[n.jsx("span",{className:"chev",children:i?n.jsx(Le,{}):n.jsx(ze,{})}),n.jsx("span",{className:"icon",children:n.jsx(Ft,{})}),n.jsx("span",{className:"title",children:"Modern PHP Features"}),n.jsx("span",{className:"meta",children:i?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${i?"open":""}`,children:[n.jsxs("div",{className:"intro",children:[n.jsxs("div",{className:"pill",children:[n.jsx("span",{className:"pillIcon",children:n.jsx(Ft,{})}),"Modern PHP = safer code, less boilerplate"]}),n.jsx("p",{className:"p",children:"These features help you write cleaner and more reliable PHP. If you know these, your code looks modern and avoids common runtime bugs."}),n.jsxs("div",{className:"note",children:[n.jsx("div",{className:"noteTitle",children:"Quick rule"}),n.jsx("div",{className:"noteText",children:"Prefer strict types, typed properties, and return types for predictability. Use match and enums for safer business logic."})]})]}),n.jsx("div",{className:"sections",children:l.map(u=>n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:u.icon}),u.title]}),n.jsxs("div",{className:"content",children:[n.jsxs("div",{className:"block",children:[n.jsx("div",{className:"label",children:"What it is"}),n.jsx("div",{className:"text",children:u.what})]}),n.jsxs("div",{className:"block",children:[n.jsx("div",{className:"label",children:"Why it matters"}),n.jsx("div",{className:"text",children:u.why})]}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(ce,{})}),"Example"]}),n.jsx("pre",{className:"code",children:u.code})]}),n.jsxs("div",{className:"tip",children:[n.jsx("span",{className:"tipLabel",children:"Tip"}),n.jsx("span",{className:"tipText",children:u.note})]})]})]},u.key))}),n.jsxs("div",{className:"footerNote",children:[n.jsx("div",{className:"footerTitle",children:"Fast revision checklist"}),n.jsxs("ul",{className:"checks",children:[n.jsxs("li",{children:[n.jsx("span",{className:"checkDot"}),"Use strict types for fewer surprises"]}),n.jsxs("li",{children:[n.jsx("span",{className:"checkDot"}),"Use typed properties and return types"]}),n.jsxs("li",{children:[n.jsx("span",{className:"checkDot"}),"Use ?? for defaults and match for mapping"]}),n.jsxs("li",{children:[n.jsx("span",{className:"checkDot"}),"Use enums for status and roles"]})]})]})]})]})},Jm={Wrapper:xe.section`
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
    `},Zm=()=>{const[i,c]=Q.useState(!1),l=()=>c(p=>!p);return n.jsxs(Jm.Wrapper,{className:i?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":i,children:[n.jsx("span",{className:"chev",children:i?n.jsx(Le,{}):n.jsx(ze,{})}),n.jsx("span",{className:"icon",children:n.jsx(ho,{})}),n.jsx("span",{className:"title",children:"Composer and Autoloading"}),n.jsx("span",{className:"meta",children:i?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${i?"open":""}`,children:[n.jsxs("div",{className:"intro",children:[n.jsxs("div",{className:"pill",children:[n.jsx("span",{className:"pillIcon",children:n.jsx(ho,{})}),"PHP dependency manager + clean class loading"]}),n.jsx("p",{className:"p",children:"Composer is the standard way to install PHP libraries and load your classes automatically. It keeps projects clean, scalable, and predictable."}),n.jsxs("div",{className:"note",children:[n.jsx("div",{className:"noteTitle",children:"At a glance"}),n.jsxs("div",{className:"noteText",children:["You declare dependencies in"," ",n.jsx("span",{className:"mono",children:"composer.json"}),", run"," ",n.jsx("span",{className:"mono",children:"composer install"}),", and include"," ",n.jsx("span",{className:"mono",children:"vendor/autoload.php"}),"."]})]})]}),n.jsxs("div",{className:"sections",children:[n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:n.jsx(ho,{})}),"What is Composer"]}),n.jsxs("div",{className:"rows",children:[n.jsxs("div",{className:"row",children:[n.jsx("div",{className:"op",children:"Purpose"}),n.jsx("div",{className:"text",children:n.jsx("div",{className:"desc",children:"Composer manages third party packages (libraries) for PHP. It downloads them, locks versions, and generates an autoloader so you do not write manual require statements everywhere."})})]}),n.jsxs("div",{className:"row",children:[n.jsx("div",{className:"op",children:"Why"}),n.jsx("div",{className:"text",children:n.jsx("div",{className:"desc",children:"Easier dependency installs, consistent versions across machines, and clean project structure."})})]})]})]}),n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:n.jsx(wt,{})}),"composer.json"]}),n.jsxs("div",{className:"rows",children:[n.jsxs("div",{className:"row",children:[n.jsx("div",{className:"op",children:"What"}),n.jsxs("div",{className:"text",children:[n.jsx("div",{className:"desc",children:"The main config file. It defines project info, required packages, autoload rules, and scripts."}),n.jsxs("div",{className:"ex",children:[n.jsx("span",{className:"exLabel",children:"Common keys"}),n.jsx("span",{className:"mono",children:"require, require-dev, autoload, scripts"})]})]})]}),n.jsxs("div",{className:"row",children:[n.jsx("div",{className:"op",children:"Rule"}),n.jsx("div",{className:"text",children:n.jsxs("div",{className:"desc",children:["Do not edit"," ",n.jsx("span",{className:"mono",children:"vendor"})," ","files manually. Composer manages that folder."]})})]})]})]}),n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:n.jsx(Dx,{})}),"Installing packages"]}),n.jsxs("div",{className:"rows",children:[n.jsxs("div",{className:"row",children:[n.jsx("div",{className:"op",children:"Install"}),n.jsxs("div",{className:"text",children:[n.jsxs("div",{className:"desc",children:["Installs dependencies listed in"," ",n.jsx("span",{className:"mono",children:"composer.json"})," ","and creates the"," ",n.jsx("span",{className:"mono",children:"vendor"})," ","folder."]}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(ce,{})}),"Command"]}),n.jsx("pre",{className:"code",children:"composer install"})]})]})]}),n.jsxs("div",{className:"row",children:[n.jsx("div",{className:"op",children:"Add"}),n.jsxs("div",{className:"text",children:[n.jsxs("div",{className:"desc",children:["Adds a new package and updates"," ",n.jsx("span",{className:"mono",children:"composer.json"})," ","and"," ",n.jsx("span",{className:"mono",children:"composer.lock"}),"."]}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(ce,{})}),"Command"]}),n.jsx("pre",{className:"code",children:"composer require vendor/package"})]})]})]})]})]}),n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:n.jsx(pp,{})}),"Autoloading"]}),n.jsxs("div",{className:"rows",children:[n.jsxs("div",{className:"row",children:[n.jsx("div",{className:"op",children:"Meaning"}),n.jsx("div",{className:"text",children:n.jsxs("div",{className:"desc",children:["Autoloading means PHP loads class files automatically when you use a class. You do not write"," ",n.jsx("span",{className:"mono",children:"require"})," ","for every class file."]})})]}),n.jsxs("div",{className:"row",children:[n.jsx("div",{className:"op",children:"How"}),n.jsxs("div",{className:"text",children:[n.jsx("div",{className:"desc",children:"Include Composer's autoloader once, then use classes normally."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(ce,{})}),"Include autoloader"]}),n.jsx("pre",{className:"code",children:'require __DIR__ . "/vendor/autoload.php";'})]})]})]}),n.jsxs("div",{className:"row",children:[n.jsx("div",{className:"op",children:"Tip"}),n.jsx("div",{className:"text",children:n.jsxs("div",{className:"desc",children:["If you update autoload settings, run"," ",n.jsx("span",{className:"mono",children:"composer dump-autoload"})," ","to regenerate the autoloader."]})})]})]})]}),n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:n.jsx(mr,{})}),"PSR standards"]}),n.jsxs("div",{className:"rows",children:[n.jsxs("div",{className:"row",children:[n.jsx("div",{className:"op",children:"What"}),n.jsx("div",{className:"text",children:n.jsx("div",{className:"desc",children:"PSR means PHP Standards Recommendation. These are community standards that help different libraries work together with consistent code style and autoloading."})})]}),n.jsxs("div",{className:"row",children:[n.jsx("div",{className:"op",children:"Must know"}),n.jsxs("div",{className:"text",children:[n.jsxs("div",{className:"desc",children:[n.jsx("span",{className:"mono",children:"PSR-4"})," is the most important for autoloading. It maps namespaces to folder paths."]}),n.jsxs("div",{className:"ex",children:[n.jsx("span",{className:"exLabel",children:"Example idea"}),n.jsx("span",{className:"mono",children:"App\\Controllers\\UserController"})]})]})]}),n.jsxs("div",{className:"row",children:[n.jsx("div",{className:"op",children:"Outcome"}),n.jsx("div",{className:"text",children:n.jsx("div",{className:"desc",children:"Cleaner codebase, predictable file structure, and easier team work."})})]})]})]})]}),n.jsxs("div",{className:"footerNote",children:[n.jsx("div",{className:"footerTitle",children:"Quick checklist"}),n.jsxs("ul",{className:"checks",children:[n.jsxs("li",{children:[n.jsx("span",{className:"checkDot"}),"Dependencies go in composer.json"]}),n.jsxs("li",{children:[n.jsx("span",{className:"checkDot"}),"Install with composer install"]}),n.jsxs("li",{children:[n.jsx("span",{className:"checkDot"}),"Require vendor/autoload.php once"]}),n.jsxs("li",{children:[n.jsx("span",{className:"checkDot"}),"Follow PSR-4 for namespaces and folders"]})]})]})]})]})},eg={Wrapper:xe.section`
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
    `},rg=()=>{const[i,c]=Q.useState(!1),l=Q.useMemo(()=>[{key:"mvc",title:"MVC Concept",icon:n.jsx(mr,{}),text:"MVC stands for Model View Controller. It separates application logic into three layers to make code clean and maintainable.",bullets:["Model handles data and database logic","View handles UI output","Controller handles request logic and connects model and view","Separation improves scalability and testing"]},{key:"routing",title:"Routing Basics",icon:n.jsx(Jx,{}),text:"Routing decides which controller runs when a user visits a URL.",bullets:["URL maps to specific controller action","Example: /users -> UserController","Helps organize application endpoints","Common in frameworks like Laravel"]},{key:"controllers",title:"Controllers",icon:n.jsx(kt,{}),text:"Controllers process user requests. They contain application logic.",bullets:["Receive request data","Validate inputs","Call models for data","Return a view or JSON response"]},{key:"views",title:"Views",icon:n.jsx(Ux,{}),text:"Views handle presentation layer. They generate HTML output.",bullets:["Display data from controller","Should not contain heavy logic","Keeps UI separate from backend code","Usually .php template files"]},{key:"models",title:"Models",icon:n.jsx(jr,{}),text:"Models manage database interaction and business logic.",bullets:["Handle queries and database connection","Return structured data","Keep SQL separate from controllers","Represent application entities"]},{key:"structure",title:"Basic Folder Structure",icon:n.jsx(dp,{}),text:"A clean folder structure improves readability and maintainability.",bullets:["public -> entry point index.php","app/Controllers -> controller classes","app/Models -> database logic","app/Views -> templates","routes -> routing definitions"]}],[]);return n.jsxs(eg.Wrapper,{className:i?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:()=>c(p=>!p),"aria-expanded":i,children:[n.jsx("span",{className:"chev",children:i?n.jsx(Le,{}):n.jsx(ze,{})}),n.jsx("span",{className:"icon",children:n.jsx(mr,{})}),n.jsx("span",{className:"title",children:"Project Structure Basics"}),n.jsx("span",{className:"meta",children:i?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${i?"open":""}`,children:[n.jsx("div",{className:"intro",children:n.jsx("p",{className:"p",children:"Understanding structure is more important than syntax. Good architecture keeps your backend clean, scalable, and maintainable."})}),n.jsxs("div",{className:"sections",children:[l.map(p=>n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:p.icon}),p.title]}),n.jsxs("div",{className:"sectionBodyInner",children:[n.jsx("p",{className:"desc",children:p.text}),n.jsx("ul",{className:"bullets",children:p.bullets.map((u,v)=>n.jsx("li",{children:u},v))})]})]},p.key)),n.jsxs("div",{className:"codeBlock",children:[n.jsx("div",{className:"codeTitle",children:"Example Folder Structure"}),n.jsx("pre",{children:`project/
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
    └── web.php`})]})]})]})]})},tg={Wrapper:xe.section`
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
    `},ng=()=>{const[i,c]=Q.useState(!1),l=()=>c(p=>!p);return n.jsxs(tg.Wrapper,{children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":i,children:[n.jsx("span",{className:"chev",children:i?n.jsx(Le,{}):n.jsx(ze,{})}),n.jsx("span",{className:"icon",children:n.jsx(kt,{})}),n.jsx("span",{className:"title",children:"Deployment Basics"}),n.jsx("span",{className:"meta",children:i?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${i?"open":""}`,children:[n.jsxs("div",{className:"intro",children:[n.jsxs("div",{className:"pill",children:[n.jsx("span",{className:"pillIcon",children:n.jsx(ce,{})}),"Production fundamentals checklist"]}),n.jsx("p",{className:"p",children:"Deployment is the process of moving your PHP application from local development to a live production server. It requires environment configuration, security settings, and proper server setup."})]}),n.jsxs("div",{className:"sections",children:[n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:n.jsx(wt,{})}),".env files"]}),n.jsxs("div",{className:"sectionBody",children:[n.jsx("p",{children:"Environment files store sensitive configuration like database credentials, API keys, and secret tokens. These should never be committed to version control."}),n.jsx("pre",{children:`DB_HOST=localhost
DB_NAME=app_db
DB_USER=root
DB_PASS=secret`}),n.jsx("div",{className:"note",children:"Keep .env outside public directory and add it to .gitignore."})]})]}),n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:n.jsx(nm,{})}),"Server Configuration"]}),n.jsxs("div",{className:"sectionBody",children:[n.jsx("p",{children:"A PHP app runs through a web server like Apache or Nginx. The server must be configured to point to your project’s public directory as the document root."}),n.jsx("div",{className:"note",children:"Only expose the public folder, never the full project root."})]})]}),n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:n.jsx(kt,{})}),"Apache vs Nginx"]}),n.jsxs("div",{className:"sectionBody",children:[n.jsx("p",{children:"Apache uses .htaccess files for per-directory configuration. Nginx uses centralized configuration files."}),n.jsxs("ul",{children:[n.jsx("li",{children:"Apache - simpler setup, supports .htaccess"}),n.jsx("li",{children:"Nginx - faster under heavy load"})]})]})]}),n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:n.jsx(wt,{})}),".htaccess basics"]}),n.jsxs("div",{className:"sectionBody",children:[n.jsx("p",{children:".htaccess allows URL rewriting, redirects, access control, and security rules in Apache."}),n.jsx("pre",{children:`RewriteEngine On
RewriteRule ^$ index.php [L]
RewriteRule ^(.*)$ index.php?url=$1 [QSA,L]`}),n.jsx("div",{className:"note",children:"Used for clean URLs and routing in PHP apps."})]})]}),n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:n.jsx(lp,{})}),"Production error settings"]}),n.jsxs("div",{className:"sectionBody",children:[n.jsx("p",{children:"In production, never display errors to users. Log errors instead."}),n.jsx("pre",{children:`display_errors = Off
log_errors = On`}),n.jsx("div",{className:"note",children:"Showing errors in production exposes sensitive information."})]})]})]})]})]})},og={Wrapper:xe.section`
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
    `},ig=()=>{const[i,c]=Q.useState(!1),l=()=>c(p=>!p);return n.jsxs(og.Wrapper,{children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":i,children:[n.jsx("span",{className:"chev",children:i?n.jsx(Le,{}):n.jsx(ze,{})}),n.jsx("span",{className:"icon",children:n.jsx(Ft,{})}),n.jsx("span",{className:"title",children:"Performance Basics"}),n.jsx("span",{className:"meta",children:i?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${i?"open":""}`,children:[n.jsxs("div",{className:"intro",children:[n.jsxs("div",{className:"pill",children:[n.jsx("span",{className:"pillIcon",children:n.jsx(cm,{})}),"Faster pages, fewer server hits"]}),n.jsx("p",{className:"p",children:"Performance is mostly about doing less work: fewer DB calls, less repeated computation, and letting caching do its job. Focus on the biggest bottlenecks first."}),n.jsxs("div",{className:"note",children:[n.jsx("div",{className:"noteTitle",children:"Rule of thumb"}),n.jsx("div",{className:"noteText",children:"Database calls are usually slower than PHP code. Reduce queries first, then optimize code."})]})]}),n.jsxs("div",{className:"sections",children:[n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:n.jsx(mr,{})}),"Caching basics"]}),n.jsxs("div",{className:"sectionBody",children:[n.jsx("p",{children:"Caching stores results so you do not recompute or refetch them on every request. Cache can be at browser level, server level, or application level."}),n.jsxs("ul",{children:[n.jsx("li",{children:"Browser caching for static files (CSS, JS, images)"}),n.jsx("li",{children:"Server caching for generated pages or API responses"}),n.jsx("li",{children:"App caching for expensive DB queries or computed results"})]}),n.jsx("div",{className:"note",children:"Cache only when data does not change too often, and always plan cache invalidation."})]})]}),n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:n.jsx(ce,{})}),"Output buffering"]}),n.jsxs("div",{className:"sectionBody",children:[n.jsx("p",{children:"Output buffering lets PHP collect output in memory before sending it to the browser. This helps when you want to modify output later or control headers before content is sent."}),n.jsx("pre",{children:`ob_start();

echo "Hello";
$content = ob_get_clean(); // gets output and clears buffer

// now you can modify $content or cache it`}),n.jsx("div",{className:"note",children:'Useful for templating, caching full HTML, and avoiding "headers already sent" issues.'})]})]}),n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:n.jsx(ul,{})}),"OPcache"]}),n.jsxs("div",{className:"sectionBody",children:[n.jsx("p",{children:"OPcache is a PHP extension that stores compiled script bytecode in memory. This avoids parsing and compiling PHP files on every request."}),n.jsx("pre",{children:`; php.ini (example)
opcache.enable=1
opcache.memory_consumption=128
opcache.max_accelerated_files=10000`}),n.jsx("div",{className:"note",children:"Enable OPcache in production. It gives big speed wins with almost zero code changes."})]})]}),n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:n.jsx(jr,{})}),"Reducing DB calls"]}),n.jsxs("div",{className:"sectionBody",children:[n.jsx("p",{children:"Too many DB queries slow down requests. Try to fetch only what you need, and reduce repeated queries in loops."}),n.jsxs("ul",{children:[n.jsx("li",{children:"Use indexes for common WHERE columns"}),n.jsx("li",{children:"Fetch only required columns (avoid SELECT *)"}),n.jsx("li",{children:"Batch queries instead of querying inside loops"}),n.jsx("li",{children:"Cache frequently used results"})]}),n.jsx("div",{className:"note",children:"If you see queries inside a loop, it is usually a performance red flag."})]})]}),n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:n.jsx(Ft,{})}),"Code optimization"]}),n.jsxs("div",{className:"sectionBody",children:[n.jsx("p",{children:"Optimize only after measuring. Keep code simple, avoid heavy work on every request, and use built in functions where possible."}),n.jsxs("ul",{children:[n.jsx("li",{children:"Profile first, then optimize"}),n.jsx("li",{children:"Reuse computed values"}),n.jsx("li",{children:"Avoid unnecessary loops and conversions"}),n.jsx("li",{children:"Use prepared statements for DB queries"}),n.jsx("li",{children:"Move heavy tasks to background jobs when needed"})]}),n.jsx("div",{className:"note",children:"Biggest wins usually come from caching + fewer DB calls, not micro optimizations."})]})]})]})]})]})},sg={Wrapper:xe.section`
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
    `},ag=()=>{const[i,c]=Q.useState(!1),l=()=>c(p=>!p);return n.jsxs(sg.Wrapper,{children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":i,children:[n.jsx("span",{className:"chev",children:i?n.jsx(Le,{}):n.jsx(ze,{})}),n.jsx("span",{className:"icon",children:n.jsx($u,{})}),n.jsx("span",{className:"title",children:"Testing Basics"}),n.jsx("span",{className:"meta",children:i?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${i?"open":""}`,children:[n.jsxs("div",{className:"intro",children:[n.jsxs("div",{className:"pill",children:[n.jsx("span",{className:"pillIcon",children:n.jsx(ce,{})}),"Stability and reliability fundamentals"]}),n.jsx("p",{className:"p",children:"Testing ensures your PHP application behaves correctly. It helps detect bugs early and prevents regressions when updating code."})]}),n.jsxs("div",{className:"sections",children:[n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:n.jsx($u,{})}),"Basic Unit Testing Concept"]}),n.jsxs("div",{className:"sectionBody",children:[n.jsx("p",{children:"Unit testing means testing small pieces of code independently, usually functions or methods. Each test verifies expected output for a given input."}),n.jsx("pre",{children:`function add($a, $b) {
    return $a + $b;
}

// Expected: 5
add(2, 3);`}),n.jsx("div",{className:"note",children:"Goal: One function, one behavior, one test."})]})]}),n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:n.jsx(ce,{})}),"PHPUnit Basics"]}),n.jsxs("div",{className:"sectionBody",children:[n.jsx("p",{children:"PHPUnit is the standard testing framework for PHP. It allows automated test execution and assertions."}),n.jsx("pre",{children:`use PHPUnit\\Framework\\TestCase;

class MathTest extends TestCase {
    public function testAddition() {
        $this->assertEquals(5, 2 + 3);
    }
}`}),n.jsx("div",{className:"note",children:"Run tests via: vendor/bin/phpunit"})]})]}),n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:n.jsx(pl,{})}),"Debugging with var_dump"]}),n.jsxs("div",{className:"sectionBody",children:[n.jsx("p",{children:"var_dump displays variable type and value. Useful during development for quick inspection."}),n.jsx("pre",{children:`$user = ["name" => "Ash", "age" => 25];
var_dump($user);`}),n.jsx("div",{className:"note",children:"Avoid leaving var_dump in production code."})]})]}),n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:n.jsx(wt,{})}),"Logging"]}),n.jsxs("div",{className:"sectionBody",children:[n.jsx("p",{children:"Logging records runtime information to files. Essential for debugging production issues."}),n.jsx("pre",{children:'error_log("Something went wrong");'}),n.jsx("div",{className:"note",children:"Production apps log errors instead of displaying them."})]})]})]})]})]})},lg=()=>n.jsxs(Qa.Wrapper,{children:[n.jsx(Qa.Header,{children:n.jsx(pm,{})}),n.jsxs(Qa.Main,{children:[n.jsxs("div",{className:"contentWrapper",children:[n.jsx(xm,{}),n.jsx(gm,{}),n.jsx(ym,{}),n.jsx(bm,{}),n.jsx(jm,{}),n.jsx(Sm,{}),n.jsx(Tm,{}),n.jsx(Pm,{}),n.jsx(Lm,{}),n.jsx(Im,{}),n.jsx(Rm,{}),n.jsx(Om,{}),n.jsx(Am,{}),n.jsx(Fm,{}),n.jsx(Wm,{}),n.jsx(Vm,{}),n.jsx(Gm,{}),n.jsx(Km,{}),n.jsx(Xm,{}),n.jsx(Zm,{}),n.jsx(rg,{}),n.jsx(ng,{}),n.jsx(ig,{}),n.jsx(ag,{})]}),n.jsx("div",{className:"footerWrapper",children:n.jsx(hm,{})})]})]});Nh.createRoot(document.getElementById("root")).render(n.jsx(n.Fragment,{children:n.jsx(lg,{})}));
