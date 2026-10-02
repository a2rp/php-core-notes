(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))p(u);new MutationObserver(u=>{for(const v of u)if(v.type==="childList")for(const k of v.addedNodes)k.tagName==="LINK"&&k.rel==="modulepreload"&&p(k)}).observe(document,{childList:!0,subtree:!0});function l(u){const v={};return u.integrity&&(v.integrity=u.integrity),u.referrerPolicy&&(v.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?v.credentials="include":u.crossOrigin==="anonymous"?v.credentials="omit":v.credentials="same-origin",v}function p(u){if(u.ep)return;u.ep=!0;const v=l(u);fetch(u.href,v)}})();function mh(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Rs={exports:{}},ao={},Os={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ou;function gh(){if(ou)return ne;ou=1;var i=Symbol.for("react.element"),c=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),k=Symbol.for("react.context"),I=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),G=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),H=Symbol.iterator;function B(m){return m===null||typeof m!="object"?null:(m=H&&m[H]||m["@@iterator"],typeof m=="function"?m:null)}var q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ie=Object.assign,Q={};function X(m,b,Y){this.props=m,this.context=b,this.refs=Q,this.updater=Y||q}X.prototype.isReactComponent={},X.prototype.setState=function(m,b){if(typeof m!="object"&&typeof m!="function"&&m!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,m,b,"setState")},X.prototype.forceUpdate=function(m){this.updater.enqueueForceUpdate(this,m,"forceUpdate")};function xe(){}xe.prototype=X.prototype;function ce(m,b,Y){this.props=m,this.context=b,this.refs=Q,this.updater=Y||q}var ae=ce.prototype=new xe;ae.constructor=ce,ie(ae,X.prototype),ae.isPureReactComponent=!0;var re=Array.isArray,fe=Object.prototype.hasOwnProperty,K={current:null},D={key:!0,ref:!0,__self:!0,__source:!0};function Ie(m,b,Y){var J,oe={},te=null,he=null;if(b!=null)for(J in b.ref!==void 0&&(he=b.ref),b.key!==void 0&&(te=""+b.key),b)fe.call(b,J)&&!D.hasOwnProperty(J)&&(oe[J]=b[J]);var se=arguments.length-2;if(se===1)oe.children=Y;else if(1<se){for(var ue=Array(se),Fe=0;Fe<se;Fe++)ue[Fe]=arguments[Fe+2];oe.children=ue}if(m&&m.defaultProps)for(J in se=m.defaultProps,se)oe[J]===void 0&&(oe[J]=se[J]);return{$$typeof:i,type:m,key:te,ref:he,props:oe,_owner:K.current}}function or(m,b){return{$$typeof:i,type:m.type,key:b,ref:m.ref,props:m.props,_owner:m._owner}}function Nr(m){return typeof m=="object"&&m!==null&&m.$$typeof===i}function Ar(m){var b={"=":"=0",":":"=2"};return"$"+m.replace(/[=:]/g,function(Y){return b[Y]})}var fr=/\/+/g;function qe(m,b){return typeof m=="object"&&m!==null&&m.key!=null?Ar(""+m.key):b.toString(36)}function ir(m,b,Y,J,oe){var te=typeof m;(te==="undefined"||te==="boolean")&&(m=null);var he=!1;if(m===null)he=!0;else switch(te){case"string":case"number":he=!0;break;case"object":switch(m.$$typeof){case i:case c:he=!0}}if(he)return he=m,oe=oe(he),m=J===""?"."+qe(he,0):J,re(oe)?(Y="",m!=null&&(Y=m.replace(fr,"$&/")+"/"),ir(oe,b,Y,"",function(Fe){return Fe})):oe!=null&&(Nr(oe)&&(oe=or(oe,Y+(!oe.key||he&&he.key===oe.key?"":(""+oe.key).replace(fr,"$&/")+"/")+m)),b.push(oe)),1;if(he=0,J=J===""?".":J+":",re(m))for(var se=0;se<m.length;se++){te=m[se];var ue=J+qe(te,se);he+=ir(te,b,Y,ue,oe)}else if(ue=B(m),typeof ue=="function")for(m=ue.call(m),se=0;!(te=m.next()).done;)te=te.value,ue=J+qe(te,se++),he+=ir(te,b,Y,ue,oe);else if(te==="object")throw b=String(m),Error("Objects are not valid as a React child (found: "+(b==="[object Object]"?"object with keys {"+Object.keys(m).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return he}function hr(m,b,Y){if(m==null)return m;var J=[],oe=0;return ir(m,J,"","",function(te){return b.call(Y,te,oe++)}),J}function We(m){if(m._status===-1){var b=m._result;b=b(),b.then(function(Y){(m._status===0||m._status===-1)&&(m._status=1,m._result=Y)},function(Y){(m._status===0||m._status===-1)&&(m._status=2,m._result=Y)}),m._status===-1&&(m._status=0,m._result=b)}if(m._status===1)return m._result.default;throw m._result}var ve={current:null},E={transition:null},O={ReactCurrentDispatcher:ve,ReactCurrentBatchConfig:E,ReactCurrentOwner:K};function _(){throw Error("act(...) is not supported in production builds of React.")}return ne.Children={map:hr,forEach:function(m,b,Y){hr(m,function(){b.apply(this,arguments)},Y)},count:function(m){var b=0;return hr(m,function(){b++}),b},toArray:function(m){return hr(m,function(b){return b})||[]},only:function(m){if(!Nr(m))throw Error("React.Children.only expected to receive a single React element child.");return m}},ne.Component=X,ne.Fragment=l,ne.Profiler=u,ne.PureComponent=ce,ne.StrictMode=p,ne.Suspense=T,ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O,ne.act=_,ne.cloneElement=function(m,b,Y){if(m==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+m+".");var J=ie({},m.props),oe=m.key,te=m.ref,he=m._owner;if(b!=null){if(b.ref!==void 0&&(te=b.ref,he=K.current),b.key!==void 0&&(oe=""+b.key),m.type&&m.type.defaultProps)var se=m.type.defaultProps;for(ue in b)fe.call(b,ue)&&!D.hasOwnProperty(ue)&&(J[ue]=b[ue]===void 0&&se!==void 0?se[ue]:b[ue])}var ue=arguments.length-2;if(ue===1)J.children=Y;else if(1<ue){se=Array(ue);for(var Fe=0;Fe<ue;Fe++)se[Fe]=arguments[Fe+2];J.children=se}return{$$typeof:i,type:m.type,key:oe,ref:te,props:J,_owner:he}},ne.createContext=function(m){return m={$$typeof:k,_currentValue:m,_currentValue2:m,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},m.Provider={$$typeof:v,_context:m},m.Consumer=m},ne.createElement=Ie,ne.createFactory=function(m){var b=Ie.bind(null,m);return b.type=m,b},ne.createRef=function(){return{current:null}},ne.forwardRef=function(m){return{$$typeof:I,render:m}},ne.isValidElement=Nr,ne.lazy=function(m){return{$$typeof:V,_payload:{_status:-1,_result:m},_init:We}},ne.memo=function(m,b){return{$$typeof:G,type:m,compare:b===void 0?null:b}},ne.startTransition=function(m){var b=E.transition;E.transition={};try{m()}finally{E.transition=b}},ne.unstable_act=_,ne.useCallback=function(m,b){return ve.current.useCallback(m,b)},ne.useContext=function(m){return ve.current.useContext(m)},ne.useDebugValue=function(){},ne.useDeferredValue=function(m){return ve.current.useDeferredValue(m)},ne.useEffect=function(m,b){return ve.current.useEffect(m,b)},ne.useId=function(){return ve.current.useId()},ne.useImperativeHandle=function(m,b,Y){return ve.current.useImperativeHandle(m,b,Y)},ne.useInsertionEffect=function(m,b){return ve.current.useInsertionEffect(m,b)},ne.useLayoutEffect=function(m,b){return ve.current.useLayoutEffect(m,b)},ne.useMemo=function(m,b){return ve.current.useMemo(m,b)},ne.useReducer=function(m,b,Y){return ve.current.useReducer(m,b,Y)},ne.useRef=function(m){return ve.current.useRef(m)},ne.useState=function(m){return ve.current.useState(m)},ne.useSyncExternalStore=function(m,b,Y){return ve.current.useSyncExternalStore(m,b,Y)},ne.useTransition=function(){return ve.current.useTransition()},ne.version="18.3.1",ne}var iu;function tl(){return iu||(iu=1,Os.exports=gh()),Os.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var au;function vh(){if(au)return ao;au=1;var i=tl(),c=Symbol.for("react.element"),l=Symbol.for("react.fragment"),p=Object.prototype.hasOwnProperty,u=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v={key:!0,ref:!0,__self:!0,__source:!0};function k(I,T,G){var V,H={},B=null,q=null;G!==void 0&&(B=""+G),T.key!==void 0&&(B=""+T.key),T.ref!==void 0&&(q=T.ref);for(V in T)p.call(T,V)&&!v.hasOwnProperty(V)&&(H[V]=T[V]);if(I&&I.defaultProps)for(V in T=I.defaultProps,T)H[V]===void 0&&(H[V]=T[V]);return{$$typeof:c,type:I,key:B,ref:q,props:H,_owner:u.current}}return ao.Fragment=l,ao.jsx=k,ao.jsxs=k,ao}var su;function yh(){return su||(su=1,Rs.exports=vh()),Rs.exports}var n=yh(),ki={},Hs={exports:{}},tr={},Bs={exports:{}},Fs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lu;function wh(){return lu||(lu=1,(function(i){function c(E,O){var _=E.length;E.push(O);e:for(;0<_;){var m=_-1>>>1,b=E[m];if(0<u(b,O))E[m]=O,E[_]=b,_=m;else break e}}function l(E){return E.length===0?null:E[0]}function p(E){if(E.length===0)return null;var O=E[0],_=E.pop();if(_!==O){E[0]=_;e:for(var m=0,b=E.length,Y=b>>>1;m<Y;){var J=2*(m+1)-1,oe=E[J],te=J+1,he=E[te];if(0>u(oe,_))te<b&&0>u(he,oe)?(E[m]=he,E[te]=_,m=te):(E[m]=oe,E[J]=_,m=J);else if(te<b&&0>u(he,_))E[m]=he,E[te]=_,m=te;else break e}}return O}function u(E,O){var _=E.sortIndex-O.sortIndex;return _!==0?_:E.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var v=performance;i.unstable_now=function(){return v.now()}}else{var k=Date,I=k.now();i.unstable_now=function(){return k.now()-I}}var T=[],G=[],V=1,H=null,B=3,q=!1,ie=!1,Q=!1,X=typeof setTimeout=="function"?setTimeout:null,xe=typeof clearTimeout=="function"?clearTimeout:null,ce=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ae(E){for(var O=l(G);O!==null;){if(O.callback===null)p(G);else if(O.startTime<=E)p(G),O.sortIndex=O.expirationTime,c(T,O);else break;O=l(G)}}function re(E){if(Q=!1,ae(E),!ie)if(l(T)!==null)ie=!0,We(fe);else{var O=l(G);O!==null&&ve(re,O.startTime-E)}}function fe(E,O){ie=!1,Q&&(Q=!1,xe(Ie),Ie=-1),q=!0;var _=B;try{for(ae(O),H=l(T);H!==null&&(!(H.expirationTime>O)||E&&!Ar());){var m=H.callback;if(typeof m=="function"){H.callback=null,B=H.priorityLevel;var b=m(H.expirationTime<=O);O=i.unstable_now(),typeof b=="function"?H.callback=b:H===l(T)&&p(T),ae(O)}else p(T);H=l(T)}if(H!==null)var Y=!0;else{var J=l(G);J!==null&&ve(re,J.startTime-O),Y=!1}return Y}finally{H=null,B=_,q=!1}}var K=!1,D=null,Ie=-1,or=5,Nr=-1;function Ar(){return!(i.unstable_now()-Nr<or)}function fr(){if(D!==null){var E=i.unstable_now();Nr=E;var O=!0;try{O=D(!0,E)}finally{O?qe():(K=!1,D=null)}}else K=!1}var qe;if(typeof ce=="function")qe=function(){ce(fr)};else if(typeof MessageChannel!="undefined"){var ir=new MessageChannel,hr=ir.port2;ir.port1.onmessage=fr,qe=function(){hr.postMessage(null)}}else qe=function(){X(fr,0)};function We(E){D=E,K||(K=!0,qe())}function ve(E,O){Ie=X(function(){E(i.unstable_now())},O)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(E){E.callback=null},i.unstable_continueExecution=function(){ie||q||(ie=!0,We(fe))},i.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):or=0<E?Math.floor(1e3/E):5},i.unstable_getCurrentPriorityLevel=function(){return B},i.unstable_getFirstCallbackNode=function(){return l(T)},i.unstable_next=function(E){switch(B){case 1:case 2:case 3:var O=3;break;default:O=B}var _=B;B=O;try{return E()}finally{B=_}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(E,O){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var _=B;B=E;try{return O()}finally{B=_}},i.unstable_scheduleCallback=function(E,O,_){var m=i.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?m+_:m):_=m,E){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=_+b,E={id:V++,callback:O,priorityLevel:E,startTime:_,expirationTime:b,sortIndex:-1},_>m?(E.sortIndex=_,c(G,E),l(T)===null&&E===l(G)&&(Q?(xe(Ie),Ie=-1):Q=!0,ve(re,_-m))):(E.sortIndex=b,c(T,E),ie||q||(ie=!0,We(fe))),E},i.unstable_shouldYield=Ar,i.unstable_wrapCallback=function(E){var O=B;return function(){var _=B;B=O;try{return E.apply(this,arguments)}finally{B=_}}}})(Fs)),Fs}var cu;function bh(){return cu||(cu=1,Bs.exports=wh()),Bs.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var du;function kh(){if(du)return tr;du=1;var i=tl(),c=bh();function l(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var p=new Set,u={};function v(e,r){k(e,r),k(e+"Capture",r)}function k(e,r){for(u[e]=r,e=0;e<r.length;e++)p.add(r[e])}var I=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),T=Object.prototype.hasOwnProperty,G=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,V={},H={};function B(e){return T.call(H,e)?!0:T.call(V,e)?!1:G.test(e)?H[e]=!0:(V[e]=!0,!1)}function q(e,r,t,o){if(t!==null&&t.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return o?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ie(e,r,t,o){if(r===null||typeof r=="undefined"||q(e,r,t,o))return!0;if(o)return!1;if(t!==null)switch(t.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function Q(e,r,t,o,a,s,d){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=o,this.attributeNamespace=a,this.mustUseProperty=t,this.propertyName=e,this.type=r,this.sanitizeURL=s,this.removeEmptyString=d}var X={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){X[e]=new Q(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var r=e[0];X[r]=new Q(r,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){X[e]=new Q(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){X[e]=new Q(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){X[e]=new Q(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){X[e]=new Q(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){X[e]=new Q(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){X[e]=new Q(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){X[e]=new Q(e,5,!1,e.toLowerCase(),null,!1,!1)});var xe=/[\-:]([a-z])/g;function ce(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var r=e.replace(xe,ce);X[r]=new Q(r,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var r=e.replace(xe,ce);X[r]=new Q(r,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var r=e.replace(xe,ce);X[r]=new Q(r,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){X[e]=new Q(e,1,!1,e.toLowerCase(),null,!1,!1)}),X.xlinkHref=new Q("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){X[e]=new Q(e,1,!1,e.toLowerCase(),null,!0,!0)});function ae(e,r,t,o){var a=X.hasOwnProperty(r)?X[r]:null;(a!==null?a.type!==0:o||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(ie(r,t,a,o)&&(t=null),o||a===null?B(r)&&(t===null?e.removeAttribute(r):e.setAttribute(r,""+t)):a.mustUseProperty?e[a.propertyName]=t===null?a.type===3?!1:"":t:(r=a.attributeName,o=a.attributeNamespace,t===null?e.removeAttribute(r):(a=a.type,t=a===3||a===4&&t===!0?"":""+t,o?e.setAttributeNS(o,r,t):e.setAttribute(r,t))))}var re=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fe=Symbol.for("react.element"),K=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),Ie=Symbol.for("react.strict_mode"),or=Symbol.for("react.profiler"),Nr=Symbol.for("react.provider"),Ar=Symbol.for("react.context"),fr=Symbol.for("react.forward_ref"),qe=Symbol.for("react.suspense"),ir=Symbol.for("react.suspense_list"),hr=Symbol.for("react.memo"),We=Symbol.for("react.lazy"),ve=Symbol.for("react.offscreen"),E=Symbol.iterator;function O(e){return e===null||typeof e!="object"?null:(e=E&&e[E]||e["@@iterator"],typeof e=="function"?e:null)}var _=Object.assign,m;function b(e){if(m===void 0)try{throw Error()}catch(t){var r=t.stack.trim().match(/\n( *(at )?)/);m=r&&r[1]||""}return`
`+m+e}var Y=!1;function J(e,r){if(!e||Y)return"";Y=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(w){var o=w}Reflect.construct(e,[],r)}else{try{r.call()}catch(w){o=w}e.call(r.prototype)}else{try{throw Error()}catch(w){o=w}e()}}catch(w){if(w&&o&&typeof w.stack=="string"){for(var a=w.stack.split(`
`),s=o.stack.split(`
`),d=a.length-1,f=s.length-1;1<=d&&0<=f&&a[d]!==s[f];)f--;for(;1<=d&&0<=f;d--,f--)if(a[d]!==s[f]){if(d!==1||f!==1)do if(d--,f--,0>f||a[d]!==s[f]){var h=`
`+a[d].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=d&&0<=f);break}}}finally{Y=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?b(e):""}function oe(e){switch(e.tag){case 5:return b(e.type);case 16:return b("Lazy");case 13:return b("Suspense");case 19:return b("SuspenseList");case 0:case 2:case 15:return e=J(e.type,!1),e;case 11:return e=J(e.type.render,!1),e;case 1:return e=J(e.type,!0),e;default:return""}}function te(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case D:return"Fragment";case K:return"Portal";case or:return"Profiler";case Ie:return"StrictMode";case qe:return"Suspense";case ir:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ar:return(e.displayName||"Context")+".Consumer";case Nr:return(e._context.displayName||"Context")+".Provider";case fr:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case hr:return r=e.displayName||null,r!==null?r:te(e.type)||"Memo";case We:r=e._payload,e=e._init;try{return te(e(r))}catch{}}return null}function he(e){var r=e.type;switch(e.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=r.render,e=e.displayName||e.name||"",r.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return te(r);case 8:return r===Ie?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function se(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ue(e){var r=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Fe(e){var r=ue(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,r),o=""+e[r];if(!e.hasOwnProperty(r)&&typeof t!="undefined"&&typeof t.get=="function"&&typeof t.set=="function"){var a=t.get,s=t.set;return Object.defineProperty(e,r,{configurable:!0,get:function(){return a.call(this)},set:function(d){o=""+d,s.call(this,d)}}),Object.defineProperty(e,r,{enumerable:t.enumerable}),{getValue:function(){return o},setValue:function(d){o=""+d},stopTracking:function(){e._valueTracker=null,delete e[r]}}}}function Dr(e){e._valueTracker||(e._valueTracker=Fe(e))}function Sr(e){if(!e)return!1;var r=e._valueTracker;if(!r)return!0;var t=r.getValue(),o="";return e&&(o=ue(e)?e.checked?"true":"false":e.value),e=o,e!==t?(r.setValue(e),!0):!1}function fo(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}function Wi(e,r){var t=r.checked;return _({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t!=null?t:e._wrapperState.initialChecked})}function ul(e,r){var t=r.defaultValue==null?"":r.defaultValue,o=r.checked!=null?r.checked:r.defaultChecked;t=se(r.value!=null?r.value:t),e._wrapperState={initialChecked:o,initialValue:t,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function pl(e,r){r=r.checked,r!=null&&ae(e,"checked",r,!1)}function Ui(e,r){pl(e,r);var t=se(r.value),o=r.type;if(t!=null)o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}r.hasOwnProperty("value")?Vi(e,r.type,t):r.hasOwnProperty("defaultValue")&&Vi(e,r.type,se(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(e.defaultChecked=!!r.defaultChecked)}function fl(e,r,t){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var o=r.type;if(!(o!=="submit"&&o!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+e._wrapperState.initialValue,t||r===e.value||(e.value=r),e.defaultValue=r}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Vi(e,r,t){(r!=="number"||fo(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var bn=Array.isArray;function Bt(e,r,t,o){if(e=e.options,r){r={};for(var a=0;a<t.length;a++)r["$"+t[a]]=!0;for(t=0;t<e.length;t++)a=r.hasOwnProperty("$"+e[t].value),e[t].selected!==a&&(e[t].selected=a),a&&o&&(e[t].defaultSelected=!0)}else{for(t=""+se(t),r=null,a=0;a<e.length;a++){if(e[a].value===t){e[a].selected=!0,o&&(e[a].defaultSelected=!0);return}r!==null||e[a].disabled||(r=e[a])}r!==null&&(r.selected=!0)}}function Qi(e,r){if(r.dangerouslySetInnerHTML!=null)throw Error(l(91));return _({},r,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function hl(e,r){var t=r.value;if(t==null){if(t=r.children,r=r.defaultValue,t!=null){if(r!=null)throw Error(l(92));if(bn(t)){if(1<t.length)throw Error(l(93));t=t[0]}r=t}r==null&&(r=""),t=r}e._wrapperState={initialValue:se(t)}}function xl(e,r){var t=se(r.value),o=se(r.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),r.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),o!=null&&(e.defaultValue=""+o)}function ml(e){var r=e.textContent;r===e._wrapperState.initialValue&&r!==""&&r!==null&&(e.value=r)}function gl(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Gi(e,r){return e==null||e==="http://www.w3.org/1999/xhtml"?gl(r):e==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ho,vl=(function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(r,t,o,a){MSApp.execUnsafeLocalFunction(function(){return e(r,t,o,a)})}:e})(function(e,r){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=r;else{for(ho=ho||document.createElement("div"),ho.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=ho.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;r.firstChild;)e.appendChild(r.firstChild)}});function kn(e,r){if(r){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=r;return}}e.textContent=r}var jn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},yp=["Webkit","ms","Moz","O"];Object.keys(jn).forEach(function(e){yp.forEach(function(r){r=r+e.charAt(0).toUpperCase()+e.substring(1),jn[r]=jn[e]})});function yl(e,r,t){return r==null||typeof r=="boolean"||r===""?"":t||typeof r!="number"||r===0||jn.hasOwnProperty(e)&&jn[e]?(""+r).trim():r+"px"}function wl(e,r){e=e.style;for(var t in r)if(r.hasOwnProperty(t)){var o=t.indexOf("--")===0,a=yl(t,r[t],o);t==="float"&&(t="cssFloat"),o?e.setProperty(t,a):e[t]=a}}var wp=_({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qi(e,r){if(r){if(wp[e]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(l(137,e));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(l(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(l(61))}if(r.style!=null&&typeof r.style!="object")throw Error(l(62))}}function Ki(e,r){if(e.indexOf("-")===-1)return typeof r.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yi=null;function Xi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ji=null,Ft=null,At=null;function bl(e){if(e=Vn(e)){if(typeof Ji!="function")throw Error(l(280));var r=e.stateNode;r&&(r=Oo(r),Ji(e.stateNode,e.type,r))}}function kl(e){Ft?At?At.push(e):At=[e]:Ft=e}function jl(){if(Ft){var e=Ft,r=At;if(At=Ft=null,bl(e),r)for(e=0;e<r.length;e++)bl(r[e])}}function Nl(e,r){return e(r)}function Sl(){}var Zi=!1;function Cl(e,r,t){if(Zi)return e(r,t);Zi=!0;try{return Nl(e,r,t)}finally{Zi=!1,(Ft!==null||At!==null)&&(Sl(),jl())}}function Nn(e,r){var t=e.stateNode;if(t===null)return null;var o=Oo(t);if(o===null)return null;t=o[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(l(231,r,typeof t));return t}var ea=!1;if(I)try{var Sn={};Object.defineProperty(Sn,"passive",{get:function(){ea=!0}}),window.addEventListener("test",Sn,Sn),window.removeEventListener("test",Sn,Sn)}catch{ea=!1}function bp(e,r,t,o,a,s,d,f,h){var w=Array.prototype.slice.call(arguments,3);try{r.apply(t,w)}catch(N){this.onError(N)}}var Cn=!1,xo=null,mo=!1,ra=null,kp={onError:function(e){Cn=!0,xo=e}};function jp(e,r,t,o,a,s,d,f,h){Cn=!1,xo=null,bp.apply(kp,arguments)}function Np(e,r,t,o,a,s,d,f,h){if(jp.apply(this,arguments),Cn){if(Cn){var w=xo;Cn=!1,xo=null}else throw Error(l(198));mo||(mo=!0,ra=w)}}function kt(e){var r=e,t=e;if(e.alternate)for(;r.return;)r=r.return;else{e=r;do r=e,(r.flags&4098)!==0&&(t=r.return),e=r.return;while(e)}return r.tag===3?t:null}function Tl(e){if(e.tag===13){var r=e.memoizedState;if(r===null&&(e=e.alternate,e!==null&&(r=e.memoizedState)),r!==null)return r.dehydrated}return null}function El(e){if(kt(e)!==e)throw Error(l(188))}function Sp(e){var r=e.alternate;if(!r){if(r=kt(e),r===null)throw Error(l(188));return r!==e?null:e}for(var t=e,o=r;;){var a=t.return;if(a===null)break;var s=a.alternate;if(s===null){if(o=a.return,o!==null){t=o;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===t)return El(a),e;if(s===o)return El(a),r;s=s.sibling}throw Error(l(188))}if(t.return!==o.return)t=a,o=s;else{for(var d=!1,f=a.child;f;){if(f===t){d=!0,t=a,o=s;break}if(f===o){d=!0,o=a,t=s;break}f=f.sibling}if(!d){for(f=s.child;f;){if(f===t){d=!0,t=s,o=a;break}if(f===o){d=!0,o=s,t=a;break}f=f.sibling}if(!d)throw Error(l(189))}}if(t.alternate!==o)throw Error(l(190))}if(t.tag!==3)throw Error(l(188));return t.stateNode.current===t?e:r}function Pl(e){return e=Sp(e),e!==null?_l(e):null}function _l(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var r=_l(e);if(r!==null)return r;e=e.sibling}return null}var Ll=c.unstable_scheduleCallback,zl=c.unstable_cancelCallback,Cp=c.unstable_shouldYield,Tp=c.unstable_requestPaint,Pe=c.unstable_now,Ep=c.unstable_getCurrentPriorityLevel,ta=c.unstable_ImmediatePriority,Il=c.unstable_UserBlockingPriority,go=c.unstable_NormalPriority,Pp=c.unstable_LowPriority,$l=c.unstable_IdlePriority,vo=null,$r=null;function _p(e){if($r&&typeof $r.onCommitFiberRoot=="function")try{$r.onCommitFiberRoot(vo,e,void 0,(e.current.flags&128)===128)}catch{}}var Cr=Math.clz32?Math.clz32:Ip,Lp=Math.log,zp=Math.LN2;function Ip(e){return e>>>=0,e===0?32:31-(Lp(e)/zp|0)|0}var yo=64,wo=4194304;function Tn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function bo(e,r){var t=e.pendingLanes;if(t===0)return 0;var o=0,a=e.suspendedLanes,s=e.pingedLanes,d=t&268435455;if(d!==0){var f=d&~a;f!==0?o=Tn(f):(s&=d,s!==0&&(o=Tn(s)))}else d=t&~a,d!==0?o=Tn(d):s!==0&&(o=Tn(s));if(o===0)return 0;if(r!==0&&r!==o&&(r&a)===0&&(a=o&-o,s=r&-r,a>=s||a===16&&(s&4194240)!==0))return r;if((o&4)!==0&&(o|=t&16),r=e.entangledLanes,r!==0)for(e=e.entanglements,r&=o;0<r;)t=31-Cr(r),a=1<<t,o|=e[t],r&=~a;return o}function $p(e,r){switch(e){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Mp(e,r){for(var t=e.suspendedLanes,o=e.pingedLanes,a=e.expirationTimes,s=e.pendingLanes;0<s;){var d=31-Cr(s),f=1<<d,h=a[d];h===-1?((f&t)===0||(f&o)!==0)&&(a[d]=$p(f,r)):h<=r&&(e.expiredLanes|=f),s&=~f}}function na(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ml(){var e=yo;return yo<<=1,(yo&4194240)===0&&(yo=64),e}function oa(e){for(var r=[],t=0;31>t;t++)r.push(e);return r}function En(e,r,t){e.pendingLanes|=r,r!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,r=31-Cr(r),e[r]=t}function Rp(e,r){var t=e.pendingLanes&~r;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=r,e.mutableReadLanes&=r,e.entangledLanes&=r,r=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<t;){var a=31-Cr(t),s=1<<a;r[a]=0,o[a]=-1,e[a]=-1,t&=~s}}function ia(e,r){var t=e.entangledLanes|=r;for(e=e.entanglements;t;){var o=31-Cr(t),a=1<<o;a&r|e[o]&r&&(e[o]|=r),t&=~a}}var ge=0;function Rl(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Ol,aa,Hl,Bl,Fl,sa=!1,ko=[],Jr=null,Zr=null,et=null,Pn=new Map,_n=new Map,rt=[],Op="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Al(e,r){switch(e){case"focusin":case"focusout":Jr=null;break;case"dragenter":case"dragleave":Zr=null;break;case"mouseover":case"mouseout":et=null;break;case"pointerover":case"pointerout":Pn.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":_n.delete(r.pointerId)}}function Ln(e,r,t,o,a,s){return e===null||e.nativeEvent!==s?(e={blockedOn:r,domEventName:t,eventSystemFlags:o,nativeEvent:s,targetContainers:[a]},r!==null&&(r=Vn(r),r!==null&&aa(r)),e):(e.eventSystemFlags|=o,r=e.targetContainers,a!==null&&r.indexOf(a)===-1&&r.push(a),e)}function Hp(e,r,t,o,a){switch(r){case"focusin":return Jr=Ln(Jr,e,r,t,o,a),!0;case"dragenter":return Zr=Ln(Zr,e,r,t,o,a),!0;case"mouseover":return et=Ln(et,e,r,t,o,a),!0;case"pointerover":var s=a.pointerId;return Pn.set(s,Ln(Pn.get(s)||null,e,r,t,o,a)),!0;case"gotpointercapture":return s=a.pointerId,_n.set(s,Ln(_n.get(s)||null,e,r,t,o,a)),!0}return!1}function Dl(e){var r=jt(e.target);if(r!==null){var t=kt(r);if(t!==null){if(r=t.tag,r===13){if(r=Tl(t),r!==null){e.blockedOn=r,Fl(e.priority,function(){Hl(t)});return}}else if(r===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function jo(e){if(e.blockedOn!==null)return!1;for(var r=e.targetContainers;0<r.length;){var t=ca(e.domEventName,e.eventSystemFlags,r[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var o=new t.constructor(t.type,t);Yi=o,t.target.dispatchEvent(o),Yi=null}else return r=Vn(t),r!==null&&aa(r),e.blockedOn=t,!1;r.shift()}return!0}function Wl(e,r,t){jo(e)&&t.delete(r)}function Bp(){sa=!1,Jr!==null&&jo(Jr)&&(Jr=null),Zr!==null&&jo(Zr)&&(Zr=null),et!==null&&jo(et)&&(et=null),Pn.forEach(Wl),_n.forEach(Wl)}function zn(e,r){e.blockedOn===r&&(e.blockedOn=null,sa||(sa=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,Bp)))}function In(e){function r(a){return zn(a,e)}if(0<ko.length){zn(ko[0],e);for(var t=1;t<ko.length;t++){var o=ko[t];o.blockedOn===e&&(o.blockedOn=null)}}for(Jr!==null&&zn(Jr,e),Zr!==null&&zn(Zr,e),et!==null&&zn(et,e),Pn.forEach(r),_n.forEach(r),t=0;t<rt.length;t++)o=rt[t],o.blockedOn===e&&(o.blockedOn=null);for(;0<rt.length&&(t=rt[0],t.blockedOn===null);)Dl(t),t.blockedOn===null&&rt.shift()}var Dt=re.ReactCurrentBatchConfig,No=!0;function Fp(e,r,t,o){var a=ge,s=Dt.transition;Dt.transition=null;try{ge=1,la(e,r,t,o)}finally{ge=a,Dt.transition=s}}function Ap(e,r,t,o){var a=ge,s=Dt.transition;Dt.transition=null;try{ge=4,la(e,r,t,o)}finally{ge=a,Dt.transition=s}}function la(e,r,t,o){if(No){var a=ca(e,r,t,o);if(a===null)Ca(e,r,o,So,t),Al(e,o);else if(Hp(a,e,r,t,o))o.stopPropagation();else if(Al(e,o),r&4&&-1<Op.indexOf(e)){for(;a!==null;){var s=Vn(a);if(s!==null&&Ol(s),s=ca(e,r,t,o),s===null&&Ca(e,r,o,So,t),s===a)break;a=s}a!==null&&o.stopPropagation()}else Ca(e,r,o,null,t)}}var So=null;function ca(e,r,t,o){if(So=null,e=Xi(o),e=jt(e),e!==null)if(r=kt(e),r===null)e=null;else if(t=r.tag,t===13){if(e=Tl(r),e!==null)return e;e=null}else if(t===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;e=null}else r!==e&&(e=null);return So=e,null}function Ul(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ep()){case ta:return 1;case Il:return 4;case go:case Pp:return 16;case $l:return 536870912;default:return 16}default:return 16}}var tt=null,da=null,Co=null;function Vl(){if(Co)return Co;var e,r=da,t=r.length,o,a="value"in tt?tt.value:tt.textContent,s=a.length;for(e=0;e<t&&r[e]===a[e];e++);var d=t-e;for(o=1;o<=d&&r[t-o]===a[s-o];o++);return Co=a.slice(e,1<o?1-o:void 0)}function To(e){var r=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&r===13&&(e=13)):e=r,e===10&&(e=13),32<=e||e===13?e:0}function Eo(){return!0}function Ql(){return!1}function ar(e){function r(t,o,a,s,d){this._reactName=t,this._targetInst=a,this.type=o,this.nativeEvent=s,this.target=d,this.currentTarget=null;for(var f in e)e.hasOwnProperty(f)&&(t=e[f],this[f]=t?t(s):s[f]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Eo:Ql,this.isPropagationStopped=Ql,this}return _(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Eo)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Eo)},persist:function(){},isPersistent:Eo}),r}var Wt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ua=ar(Wt),$n=_({},Wt,{view:0,detail:0}),Dp=ar($n),pa,fa,Mn,Po=_({},$n,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Mn&&(Mn&&e.type==="mousemove"?(pa=e.screenX-Mn.screenX,fa=e.screenY-Mn.screenY):fa=pa=0,Mn=e),pa)},movementY:function(e){return"movementY"in e?e.movementY:fa}}),Gl=ar(Po),Wp=_({},Po,{dataTransfer:0}),Up=ar(Wp),Vp=_({},$n,{relatedTarget:0}),ha=ar(Vp),Qp=_({},Wt,{animationName:0,elapsedTime:0,pseudoElement:0}),Gp=ar(Qp),qp=_({},Wt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Kp=ar(qp),Yp=_({},Wt,{data:0}),ql=ar(Yp),Xp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Jp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Zp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ef(e){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(e):(e=Zp[e])?!!r[e]:!1}function xa(){return ef}var rf=_({},$n,{key:function(e){if(e.key){var r=Xp[e.key]||e.key;if(r!=="Unidentified")return r}return e.type==="keypress"?(e=To(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Jp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xa,charCode:function(e){return e.type==="keypress"?To(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?To(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),tf=ar(rf),nf=_({},Po,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kl=ar(nf),of=_({},$n,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xa}),af=ar(of),sf=_({},Wt,{propertyName:0,elapsedTime:0,pseudoElement:0}),lf=ar(sf),cf=_({},Po,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),df=ar(cf),uf=[9,13,27,32],ma=I&&"CompositionEvent"in window,Rn=null;I&&"documentMode"in document&&(Rn=document.documentMode);var pf=I&&"TextEvent"in window&&!Rn,Yl=I&&(!ma||Rn&&8<Rn&&11>=Rn),Xl=" ",Jl=!1;function Zl(e,r){switch(e){case"keyup":return uf.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ec(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ut=!1;function ff(e,r){switch(e){case"compositionend":return ec(r);case"keypress":return r.which!==32?null:(Jl=!0,Xl);case"textInput":return e=r.data,e===Xl&&Jl?null:e;default:return null}}function hf(e,r){if(Ut)return e==="compositionend"||!ma&&Zl(e,r)?(e=Vl(),Co=da=tt=null,Ut=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Yl&&r.locale!=="ko"?null:r.data;default:return null}}var xf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rc(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r==="input"?!!xf[e.type]:r==="textarea"}function tc(e,r,t,o){kl(o),r=$o(r,"onChange"),0<r.length&&(t=new ua("onChange","change",null,t,o),e.push({event:t,listeners:r}))}var On=null,Hn=null;function mf(e){wc(e,0)}function _o(e){var r=Kt(e);if(Sr(r))return e}function gf(e,r){if(e==="change")return r}var nc=!1;if(I){var ga;if(I){var va="oninput"in document;if(!va){var oc=document.createElement("div");oc.setAttribute("oninput","return;"),va=typeof oc.oninput=="function"}ga=va}else ga=!1;nc=ga&&(!document.documentMode||9<document.documentMode)}function ic(){On&&(On.detachEvent("onpropertychange",ac),Hn=On=null)}function ac(e){if(e.propertyName==="value"&&_o(Hn)){var r=[];tc(r,Hn,e,Xi(e)),Cl(mf,r)}}function vf(e,r,t){e==="focusin"?(ic(),On=r,Hn=t,On.attachEvent("onpropertychange",ac)):e==="focusout"&&ic()}function yf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return _o(Hn)}function wf(e,r){if(e==="click")return _o(r)}function bf(e,r){if(e==="input"||e==="change")return _o(r)}function kf(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var Tr=typeof Object.is=="function"?Object.is:kf;function Bn(e,r){if(Tr(e,r))return!0;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return!1;var t=Object.keys(e),o=Object.keys(r);if(t.length!==o.length)return!1;for(o=0;o<t.length;o++){var a=t[o];if(!T.call(r,a)||!Tr(e[a],r[a]))return!1}return!0}function sc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function lc(e,r){var t=sc(e);e=0;for(var o;t;){if(t.nodeType===3){if(o=e+t.textContent.length,e<=r&&o>=r)return{node:t,offset:r-e};e=o}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=sc(t)}}function cc(e,r){return e&&r?e===r?!0:e&&e.nodeType===3?!1:r&&r.nodeType===3?cc(e,r.parentNode):"contains"in e?e.contains(r):e.compareDocumentPosition?!!(e.compareDocumentPosition(r)&16):!1:!1}function dc(){for(var e=window,r=fo();r instanceof e.HTMLIFrameElement;){try{var t=typeof r.contentWindow.location.href=="string"}catch{t=!1}if(t)e=r.contentWindow;else break;r=fo(e.document)}return r}function ya(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r&&(r==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||r==="textarea"||e.contentEditable==="true")}function jf(e){var r=dc(),t=e.focusedElem,o=e.selectionRange;if(r!==t&&t&&t.ownerDocument&&cc(t.ownerDocument.documentElement,t)){if(o!==null&&ya(t)){if(r=o.start,e=o.end,e===void 0&&(e=r),"selectionStart"in t)t.selectionStart=r,t.selectionEnd=Math.min(e,t.value.length);else if(e=(r=t.ownerDocument||document)&&r.defaultView||window,e.getSelection){e=e.getSelection();var a=t.textContent.length,s=Math.min(o.start,a);o=o.end===void 0?s:Math.min(o.end,a),!e.extend&&s>o&&(a=o,o=s,s=a),a=lc(t,s);var d=lc(t,o);a&&d&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==d.node||e.focusOffset!==d.offset)&&(r=r.createRange(),r.setStart(a.node,a.offset),e.removeAllRanges(),s>o?(e.addRange(r),e.extend(d.node,d.offset)):(r.setEnd(d.node,d.offset),e.addRange(r)))}}for(r=[],e=t;e=e.parentNode;)e.nodeType===1&&r.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<r.length;t++)e=r[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Nf=I&&"documentMode"in document&&11>=document.documentMode,Vt=null,wa=null,Fn=null,ba=!1;function uc(e,r,t){var o=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;ba||Vt==null||Vt!==fo(o)||(o=Vt,"selectionStart"in o&&ya(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Fn&&Bn(Fn,o)||(Fn=o,o=$o(wa,"onSelect"),0<o.length&&(r=new ua("onSelect","select",null,r,t),e.push({event:r,listeners:o}),r.target=Vt)))}function Lo(e,r){var t={};return t[e.toLowerCase()]=r.toLowerCase(),t["Webkit"+e]="webkit"+r,t["Moz"+e]="moz"+r,t}var Qt={animationend:Lo("Animation","AnimationEnd"),animationiteration:Lo("Animation","AnimationIteration"),animationstart:Lo("Animation","AnimationStart"),transitionend:Lo("Transition","TransitionEnd")},ka={},pc={};I&&(pc=document.createElement("div").style,"AnimationEvent"in window||(delete Qt.animationend.animation,delete Qt.animationiteration.animation,delete Qt.animationstart.animation),"TransitionEvent"in window||delete Qt.transitionend.transition);function zo(e){if(ka[e])return ka[e];if(!Qt[e])return e;var r=Qt[e],t;for(t in r)if(r.hasOwnProperty(t)&&t in pc)return ka[e]=r[t];return e}var fc=zo("animationend"),hc=zo("animationiteration"),xc=zo("animationstart"),mc=zo("transitionend"),gc=new Map,vc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function nt(e,r){gc.set(e,r),v(r,[e])}for(var ja=0;ja<vc.length;ja++){var Na=vc[ja],Sf=Na.toLowerCase(),Cf=Na[0].toUpperCase()+Na.slice(1);nt(Sf,"on"+Cf)}nt(fc,"onAnimationEnd"),nt(hc,"onAnimationIteration"),nt(xc,"onAnimationStart"),nt("dblclick","onDoubleClick"),nt("focusin","onFocus"),nt("focusout","onBlur"),nt(mc,"onTransitionEnd"),k("onMouseEnter",["mouseout","mouseover"]),k("onMouseLeave",["mouseout","mouseover"]),k("onPointerEnter",["pointerout","pointerover"]),k("onPointerLeave",["pointerout","pointerover"]),v("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),v("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),v("onBeforeInput",["compositionend","keypress","textInput","paste"]),v("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),v("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),v("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var An="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Tf=new Set("cancel close invalid load scroll toggle".split(" ").concat(An));function yc(e,r,t){var o=e.type||"unknown-event";e.currentTarget=t,Np(o,r,void 0,e),e.currentTarget=null}function wc(e,r){r=(r&4)!==0;for(var t=0;t<e.length;t++){var o=e[t],a=o.event;o=o.listeners;e:{var s=void 0;if(r)for(var d=o.length-1;0<=d;d--){var f=o[d],h=f.instance,w=f.currentTarget;if(f=f.listener,h!==s&&a.isPropagationStopped())break e;yc(a,f,w),s=h}else for(d=0;d<o.length;d++){if(f=o[d],h=f.instance,w=f.currentTarget,f=f.listener,h!==s&&a.isPropagationStopped())break e;yc(a,f,w),s=h}}}if(mo)throw e=ra,mo=!1,ra=null,e}function we(e,r){var t=r[za];t===void 0&&(t=r[za]=new Set);var o=e+"__bubble";t.has(o)||(bc(r,e,2,!1),t.add(o))}function Sa(e,r,t){var o=0;r&&(o|=4),bc(t,e,o,r)}var Io="_reactListening"+Math.random().toString(36).slice(2);function Dn(e){if(!e[Io]){e[Io]=!0,p.forEach(function(t){t!=="selectionchange"&&(Tf.has(t)||Sa(t,!1,e),Sa(t,!0,e))});var r=e.nodeType===9?e:e.ownerDocument;r===null||r[Io]||(r[Io]=!0,Sa("selectionchange",!1,r))}}function bc(e,r,t,o){switch(Ul(r)){case 1:var a=Fp;break;case 4:a=Ap;break;default:a=la}t=a.bind(null,r,t,e),a=void 0,!ea||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(a=!0),o?a!==void 0?e.addEventListener(r,t,{capture:!0,passive:a}):e.addEventListener(r,t,!0):a!==void 0?e.addEventListener(r,t,{passive:a}):e.addEventListener(r,t,!1)}function Ca(e,r,t,o,a){var s=o;if((r&1)===0&&(r&2)===0&&o!==null)e:for(;;){if(o===null)return;var d=o.tag;if(d===3||d===4){var f=o.stateNode.containerInfo;if(f===a||f.nodeType===8&&f.parentNode===a)break;if(d===4)for(d=o.return;d!==null;){var h=d.tag;if((h===3||h===4)&&(h=d.stateNode.containerInfo,h===a||h.nodeType===8&&h.parentNode===a))return;d=d.return}for(;f!==null;){if(d=jt(f),d===null)return;if(h=d.tag,h===5||h===6){o=s=d;continue e}f=f.parentNode}}o=o.return}Cl(function(){var w=s,N=Xi(t),S=[];e:{var j=gc.get(e);if(j!==void 0){var L=ua,$=e;switch(e){case"keypress":if(To(t)===0)break e;case"keydown":case"keyup":L=tf;break;case"focusin":$="focus",L=ha;break;case"focusout":$="blur",L=ha;break;case"beforeblur":case"afterblur":L=ha;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":L=Gl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":L=Up;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":L=af;break;case fc:case hc:case xc:L=Gp;break;case mc:L=lf;break;case"scroll":L=Dp;break;case"wheel":L=df;break;case"copy":case"cut":case"paste":L=Kp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":L=Kl}var M=(r&4)!==0,_e=!M&&e==="scroll",g=M?j!==null?j+"Capture":null:j;M=[];for(var x=w,y;x!==null;){y=x;var C=y.stateNode;if(y.tag===5&&C!==null&&(y=C,g!==null&&(C=Nn(x,g),C!=null&&M.push(Wn(x,C,y)))),_e)break;x=x.return}0<M.length&&(j=new L(j,$,null,t,N),S.push({event:j,listeners:M}))}}if((r&7)===0){e:{if(j=e==="mouseover"||e==="pointerover",L=e==="mouseout"||e==="pointerout",j&&t!==Yi&&($=t.relatedTarget||t.fromElement)&&(jt($)||$[Wr]))break e;if((L||j)&&(j=N.window===N?N:(j=N.ownerDocument)?j.defaultView||j.parentWindow:window,L?($=t.relatedTarget||t.toElement,L=w,$=$?jt($):null,$!==null&&(_e=kt($),$!==_e||$.tag!==5&&$.tag!==6)&&($=null)):(L=null,$=w),L!==$)){if(M=Gl,C="onMouseLeave",g="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(M=Kl,C="onPointerLeave",g="onPointerEnter",x="pointer"),_e=L==null?j:Kt(L),y=$==null?j:Kt($),j=new M(C,x+"leave",L,t,N),j.target=_e,j.relatedTarget=y,C=null,jt(N)===w&&(M=new M(g,x+"enter",$,t,N),M.target=y,M.relatedTarget=_e,C=M),_e=C,L&&$)r:{for(M=L,g=$,x=0,y=M;y;y=Gt(y))x++;for(y=0,C=g;C;C=Gt(C))y++;for(;0<x-y;)M=Gt(M),x--;for(;0<y-x;)g=Gt(g),y--;for(;x--;){if(M===g||g!==null&&M===g.alternate)break r;M=Gt(M),g=Gt(g)}M=null}else M=null;L!==null&&kc(S,j,L,M,!1),$!==null&&_e!==null&&kc(S,_e,$,M,!0)}}e:{if(j=w?Kt(w):window,L=j.nodeName&&j.nodeName.toLowerCase(),L==="select"||L==="input"&&j.type==="file")var R=gf;else if(rc(j))if(nc)R=bf;else{R=yf;var F=vf}else(L=j.nodeName)&&L.toLowerCase()==="input"&&(j.type==="checkbox"||j.type==="radio")&&(R=wf);if(R&&(R=R(e,w))){tc(S,R,t,N);break e}F&&F(e,j,w),e==="focusout"&&(F=j._wrapperState)&&F.controlled&&j.type==="number"&&Vi(j,"number",j.value)}switch(F=w?Kt(w):window,e){case"focusin":(rc(F)||F.contentEditable==="true")&&(Vt=F,wa=w,Fn=null);break;case"focusout":Fn=wa=Vt=null;break;case"mousedown":ba=!0;break;case"contextmenu":case"mouseup":case"dragend":ba=!1,uc(S,t,N);break;case"selectionchange":if(Nf)break;case"keydown":case"keyup":uc(S,t,N)}var A;if(ma)e:{switch(e){case"compositionstart":var U="onCompositionStart";break e;case"compositionend":U="onCompositionEnd";break e;case"compositionupdate":U="onCompositionUpdate";break e}U=void 0}else Ut?Zl(e,t)&&(U="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(U="onCompositionStart");U&&(Yl&&t.locale!=="ko"&&(Ut||U!=="onCompositionStart"?U==="onCompositionEnd"&&Ut&&(A=Vl()):(tt=N,da="value"in tt?tt.value:tt.textContent,Ut=!0)),F=$o(w,U),0<F.length&&(U=new ql(U,e,null,t,N),S.push({event:U,listeners:F}),A?U.data=A:(A=ec(t),A!==null&&(U.data=A)))),(A=pf?ff(e,t):hf(e,t))&&(w=$o(w,"onBeforeInput"),0<w.length&&(N=new ql("onBeforeInput","beforeinput",null,t,N),S.push({event:N,listeners:w}),N.data=A))}wc(S,r)})}function Wn(e,r,t){return{instance:e,listener:r,currentTarget:t}}function $o(e,r){for(var t=r+"Capture",o=[];e!==null;){var a=e,s=a.stateNode;a.tag===5&&s!==null&&(a=s,s=Nn(e,t),s!=null&&o.unshift(Wn(e,s,a)),s=Nn(e,r),s!=null&&o.push(Wn(e,s,a))),e=e.return}return o}function Gt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function kc(e,r,t,o,a){for(var s=r._reactName,d=[];t!==null&&t!==o;){var f=t,h=f.alternate,w=f.stateNode;if(h!==null&&h===o)break;f.tag===5&&w!==null&&(f=w,a?(h=Nn(t,s),h!=null&&d.unshift(Wn(t,h,f))):a||(h=Nn(t,s),h!=null&&d.push(Wn(t,h,f)))),t=t.return}d.length!==0&&e.push({event:r,listeners:d})}var Ef=/\r\n?/g,Pf=/\u0000|\uFFFD/g;function jc(e){return(typeof e=="string"?e:""+e).replace(Ef,`
`).replace(Pf,"")}function Mo(e,r,t){if(r=jc(r),jc(e)!==r&&t)throw Error(l(425))}function Ro(){}var Ta=null,Ea=null;function Pa(e,r){return e==="textarea"||e==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var _a=typeof setTimeout=="function"?setTimeout:void 0,_f=typeof clearTimeout=="function"?clearTimeout:void 0,Nc=typeof Promise=="function"?Promise:void 0,Lf=typeof queueMicrotask=="function"?queueMicrotask:typeof Nc!="undefined"?function(e){return Nc.resolve(null).then(e).catch(zf)}:_a;function zf(e){setTimeout(function(){throw e})}function La(e,r){var t=r,o=0;do{var a=t.nextSibling;if(e.removeChild(t),a&&a.nodeType===8)if(t=a.data,t==="/$"){if(o===0){e.removeChild(a),In(r);return}o--}else t!=="$"&&t!=="$?"&&t!=="$!"||o++;t=a}while(t);In(r)}function ot(e){for(;e!=null;e=e.nextSibling){var r=e.nodeType;if(r===1||r===3)break;if(r===8){if(r=e.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return e}function Sc(e){e=e.previousSibling;for(var r=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(r===0)return e;r--}else t==="/$"&&r++}e=e.previousSibling}return null}var qt=Math.random().toString(36).slice(2),Mr="__reactFiber$"+qt,Un="__reactProps$"+qt,Wr="__reactContainer$"+qt,za="__reactEvents$"+qt,If="__reactListeners$"+qt,$f="__reactHandles$"+qt;function jt(e){var r=e[Mr];if(r)return r;for(var t=e.parentNode;t;){if(r=t[Wr]||t[Mr]){if(t=r.alternate,r.child!==null||t!==null&&t.child!==null)for(e=Sc(e);e!==null;){if(t=e[Mr])return t;e=Sc(e)}return r}e=t,t=e.parentNode}return null}function Vn(e){return e=e[Mr]||e[Wr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Kt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(l(33))}function Oo(e){return e[Un]||null}var Ia=[],Yt=-1;function it(e){return{current:e}}function be(e){0>Yt||(e.current=Ia[Yt],Ia[Yt]=null,Yt--)}function ye(e,r){Yt++,Ia[Yt]=e.current,e.current=r}var at={},Ue=it(at),Xe=it(!1),Nt=at;function Xt(e,r){var t=e.type.contextTypes;if(!t)return at;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===r)return o.__reactInternalMemoizedMaskedChildContext;var a={},s;for(s in t)a[s]=r[s];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=a),a}function Je(e){return e=e.childContextTypes,e!=null}function Ho(){be(Xe),be(Ue)}function Cc(e,r,t){if(Ue.current!==at)throw Error(l(168));ye(Ue,r),ye(Xe,t)}function Tc(e,r,t){var o=e.stateNode;if(r=r.childContextTypes,typeof o.getChildContext!="function")return t;o=o.getChildContext();for(var a in o)if(!(a in r))throw Error(l(108,he(e)||"Unknown",a));return _({},t,o)}function Bo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||at,Nt=Ue.current,ye(Ue,e),ye(Xe,Xe.current),!0}function Ec(e,r,t){var o=e.stateNode;if(!o)throw Error(l(169));t?(e=Tc(e,r,Nt),o.__reactInternalMemoizedMergedChildContext=e,be(Xe),be(Ue),ye(Ue,e)):be(Xe),ye(Xe,t)}var Ur=null,Fo=!1,$a=!1;function Pc(e){Ur===null?Ur=[e]:Ur.push(e)}function Mf(e){Fo=!0,Pc(e)}function st(){if(!$a&&Ur!==null){$a=!0;var e=0,r=ge;try{var t=Ur;for(ge=1;e<t.length;e++){var o=t[e];do o=o(!0);while(o!==null)}Ur=null,Fo=!1}catch(a){throw Ur!==null&&(Ur=Ur.slice(e+1)),Ll(ta,st),a}finally{ge=r,$a=!1}}return null}var Jt=[],Zt=0,Ao=null,Do=0,xr=[],mr=0,St=null,Vr=1,Qr="";function Ct(e,r){Jt[Zt++]=Do,Jt[Zt++]=Ao,Ao=e,Do=r}function _c(e,r,t){xr[mr++]=Vr,xr[mr++]=Qr,xr[mr++]=St,St=e;var o=Vr;e=Qr;var a=32-Cr(o)-1;o&=~(1<<a),t+=1;var s=32-Cr(r)+a;if(30<s){var d=a-a%5;s=(o&(1<<d)-1).toString(32),o>>=d,a-=d,Vr=1<<32-Cr(r)+a|t<<a|o,Qr=s+e}else Vr=1<<s|t<<a|o,Qr=e}function Ma(e){e.return!==null&&(Ct(e,1),_c(e,1,0))}function Ra(e){for(;e===Ao;)Ao=Jt[--Zt],Jt[Zt]=null,Do=Jt[--Zt],Jt[Zt]=null;for(;e===St;)St=xr[--mr],xr[mr]=null,Qr=xr[--mr],xr[mr]=null,Vr=xr[--mr],xr[mr]=null}var sr=null,lr=null,je=!1,Er=null;function Lc(e,r){var t=wr(5,null,null,0);t.elementType="DELETED",t.stateNode=r,t.return=e,r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)}function zc(e,r){switch(e.tag){case 5:var t=e.type;return r=r.nodeType!==1||t.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(e.stateNode=r,sr=e,lr=ot(r.firstChild),!0):!1;case 6:return r=e.pendingProps===""||r.nodeType!==3?null:r,r!==null?(e.stateNode=r,sr=e,lr=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(t=St!==null?{id:Vr,overflow:Qr}:null,e.memoizedState={dehydrated:r,treeContext:t,retryLane:1073741824},t=wr(18,null,null,0),t.stateNode=r,t.return=e,e.child=t,sr=e,lr=null,!0):!1;default:return!1}}function Oa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ha(e){if(je){var r=lr;if(r){var t=r;if(!zc(e,r)){if(Oa(e))throw Error(l(418));r=ot(t.nextSibling);var o=sr;r&&zc(e,r)?Lc(o,t):(e.flags=e.flags&-4097|2,je=!1,sr=e)}}else{if(Oa(e))throw Error(l(418));e.flags=e.flags&-4097|2,je=!1,sr=e}}}function Ic(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;sr=e}function Wo(e){if(e!==sr)return!1;if(!je)return Ic(e),je=!0,!1;var r;if((r=e.tag!==3)&&!(r=e.tag!==5)&&(r=e.type,r=r!=="head"&&r!=="body"&&!Pa(e.type,e.memoizedProps)),r&&(r=lr)){if(Oa(e))throw $c(),Error(l(418));for(;r;)Lc(e,r),r=ot(r.nextSibling)}if(Ic(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));e:{for(e=e.nextSibling,r=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(r===0){lr=ot(e.nextSibling);break e}r--}else t!=="$"&&t!=="$!"&&t!=="$?"||r++}e=e.nextSibling}lr=null}}else lr=sr?ot(e.stateNode.nextSibling):null;return!0}function $c(){for(var e=lr;e;)e=ot(e.nextSibling)}function en(){lr=sr=null,je=!1}function Ba(e){Er===null?Er=[e]:Er.push(e)}var Rf=re.ReactCurrentBatchConfig;function Qn(e,r,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(l(309));var o=t.stateNode}if(!o)throw Error(l(147,e));var a=o,s=""+e;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===s?r.ref:(r=function(d){var f=a.refs;d===null?delete f[s]:f[s]=d},r._stringRef=s,r)}if(typeof e!="string")throw Error(l(284));if(!t._owner)throw Error(l(290,e))}return e}function Uo(e,r){throw e=Object.prototype.toString.call(r),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e))}function Mc(e){var r=e._init;return r(e._payload)}function Rc(e){function r(g,x){if(e){var y=g.deletions;y===null?(g.deletions=[x],g.flags|=16):y.push(x)}}function t(g,x){if(!e)return null;for(;x!==null;)r(g,x),x=x.sibling;return null}function o(g,x){for(g=new Map;x!==null;)x.key!==null?g.set(x.key,x):g.set(x.index,x),x=x.sibling;return g}function a(g,x){return g=xt(g,x),g.index=0,g.sibling=null,g}function s(g,x,y){return g.index=y,e?(y=g.alternate,y!==null?(y=y.index,y<x?(g.flags|=2,x):y):(g.flags|=2,x)):(g.flags|=1048576,x)}function d(g){return e&&g.alternate===null&&(g.flags|=2),g}function f(g,x,y,C){return x===null||x.tag!==6?(x=_s(y,g.mode,C),x.return=g,x):(x=a(x,y),x.return=g,x)}function h(g,x,y,C){var R=y.type;return R===D?N(g,x,y.props.children,C,y.key):x!==null&&(x.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===We&&Mc(R)===x.type)?(C=a(x,y.props),C.ref=Qn(g,x,y),C.return=g,C):(C=hi(y.type,y.key,y.props,null,g.mode,C),C.ref=Qn(g,x,y),C.return=g,C)}function w(g,x,y,C){return x===null||x.tag!==4||x.stateNode.containerInfo!==y.containerInfo||x.stateNode.implementation!==y.implementation?(x=Ls(y,g.mode,C),x.return=g,x):(x=a(x,y.children||[]),x.return=g,x)}function N(g,x,y,C,R){return x===null||x.tag!==7?(x=$t(y,g.mode,C,R),x.return=g,x):(x=a(x,y),x.return=g,x)}function S(g,x,y){if(typeof x=="string"&&x!==""||typeof x=="number")return x=_s(""+x,g.mode,y),x.return=g,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case fe:return y=hi(x.type,x.key,x.props,null,g.mode,y),y.ref=Qn(g,null,x),y.return=g,y;case K:return x=Ls(x,g.mode,y),x.return=g,x;case We:var C=x._init;return S(g,C(x._payload),y)}if(bn(x)||O(x))return x=$t(x,g.mode,y,null),x.return=g,x;Uo(g,x)}return null}function j(g,x,y,C){var R=x!==null?x.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return R!==null?null:f(g,x,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case fe:return y.key===R?h(g,x,y,C):null;case K:return y.key===R?w(g,x,y,C):null;case We:return R=y._init,j(g,x,R(y._payload),C)}if(bn(y)||O(y))return R!==null?null:N(g,x,y,C,null);Uo(g,y)}return null}function L(g,x,y,C,R){if(typeof C=="string"&&C!==""||typeof C=="number")return g=g.get(y)||null,f(x,g,""+C,R);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case fe:return g=g.get(C.key===null?y:C.key)||null,h(x,g,C,R);case K:return g=g.get(C.key===null?y:C.key)||null,w(x,g,C,R);case We:var F=C._init;return L(g,x,y,F(C._payload),R)}if(bn(C)||O(C))return g=g.get(y)||null,N(x,g,C,R,null);Uo(x,C)}return null}function $(g,x,y,C){for(var R=null,F=null,A=x,U=x=0,He=null;A!==null&&U<y.length;U++){A.index>U?(He=A,A=null):He=A.sibling;var pe=j(g,A,y[U],C);if(pe===null){A===null&&(A=He);break}e&&A&&pe.alternate===null&&r(g,A),x=s(pe,x,U),F===null?R=pe:F.sibling=pe,F=pe,A=He}if(U===y.length)return t(g,A),je&&Ct(g,U),R;if(A===null){for(;U<y.length;U++)A=S(g,y[U],C),A!==null&&(x=s(A,x,U),F===null?R=A:F.sibling=A,F=A);return je&&Ct(g,U),R}for(A=o(g,A);U<y.length;U++)He=L(A,g,U,y[U],C),He!==null&&(e&&He.alternate!==null&&A.delete(He.key===null?U:He.key),x=s(He,x,U),F===null?R=He:F.sibling=He,F=He);return e&&A.forEach(function(mt){return r(g,mt)}),je&&Ct(g,U),R}function M(g,x,y,C){var R=O(y);if(typeof R!="function")throw Error(l(150));if(y=R.call(y),y==null)throw Error(l(151));for(var F=R=null,A=x,U=x=0,He=null,pe=y.next();A!==null&&!pe.done;U++,pe=y.next()){A.index>U?(He=A,A=null):He=A.sibling;var mt=j(g,A,pe.value,C);if(mt===null){A===null&&(A=He);break}e&&A&&mt.alternate===null&&r(g,A),x=s(mt,x,U),F===null?R=mt:F.sibling=mt,F=mt,A=He}if(pe.done)return t(g,A),je&&Ct(g,U),R;if(A===null){for(;!pe.done;U++,pe=y.next())pe=S(g,pe.value,C),pe!==null&&(x=s(pe,x,U),F===null?R=pe:F.sibling=pe,F=pe);return je&&Ct(g,U),R}for(A=o(g,A);!pe.done;U++,pe=y.next())pe=L(A,g,U,pe.value,C),pe!==null&&(e&&pe.alternate!==null&&A.delete(pe.key===null?U:pe.key),x=s(pe,x,U),F===null?R=pe:F.sibling=pe,F=pe);return e&&A.forEach(function(xh){return r(g,xh)}),je&&Ct(g,U),R}function _e(g,x,y,C){if(typeof y=="object"&&y!==null&&y.type===D&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case fe:e:{for(var R=y.key,F=x;F!==null;){if(F.key===R){if(R=y.type,R===D){if(F.tag===7){t(g,F.sibling),x=a(F,y.props.children),x.return=g,g=x;break e}}else if(F.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===We&&Mc(R)===F.type){t(g,F.sibling),x=a(F,y.props),x.ref=Qn(g,F,y),x.return=g,g=x;break e}t(g,F);break}else r(g,F);F=F.sibling}y.type===D?(x=$t(y.props.children,g.mode,C,y.key),x.return=g,g=x):(C=hi(y.type,y.key,y.props,null,g.mode,C),C.ref=Qn(g,x,y),C.return=g,g=C)}return d(g);case K:e:{for(F=y.key;x!==null;){if(x.key===F)if(x.tag===4&&x.stateNode.containerInfo===y.containerInfo&&x.stateNode.implementation===y.implementation){t(g,x.sibling),x=a(x,y.children||[]),x.return=g,g=x;break e}else{t(g,x);break}else r(g,x);x=x.sibling}x=Ls(y,g.mode,C),x.return=g,g=x}return d(g);case We:return F=y._init,_e(g,x,F(y._payload),C)}if(bn(y))return $(g,x,y,C);if(O(y))return M(g,x,y,C);Uo(g,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,x!==null&&x.tag===6?(t(g,x.sibling),x=a(x,y),x.return=g,g=x):(t(g,x),x=_s(y,g.mode,C),x.return=g,g=x),d(g)):t(g,x)}return _e}var rn=Rc(!0),Oc=Rc(!1),Vo=it(null),Qo=null,tn=null,Fa=null;function Aa(){Fa=tn=Qo=null}function Da(e){var r=Vo.current;be(Vo),e._currentValue=r}function Wa(e,r,t){for(;e!==null;){var o=e.alternate;if((e.childLanes&r)!==r?(e.childLanes|=r,o!==null&&(o.childLanes|=r)):o!==null&&(o.childLanes&r)!==r&&(o.childLanes|=r),e===t)break;e=e.return}}function nn(e,r){Qo=e,Fa=tn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&r)!==0&&(Ze=!0),e.firstContext=null)}function gr(e){var r=e._currentValue;if(Fa!==e)if(e={context:e,memoizedValue:r,next:null},tn===null){if(Qo===null)throw Error(l(308));tn=e,Qo.dependencies={lanes:0,firstContext:e}}else tn=tn.next=e;return r}var Tt=null;function Ua(e){Tt===null?Tt=[e]:Tt.push(e)}function Hc(e,r,t,o){var a=r.interleaved;return a===null?(t.next=t,Ua(r)):(t.next=a.next,a.next=t),r.interleaved=t,Gr(e,o)}function Gr(e,r){e.lanes|=r;var t=e.alternate;for(t!==null&&(t.lanes|=r),t=e,e=e.return;e!==null;)e.childLanes|=r,t=e.alternate,t!==null&&(t.childLanes|=r),t=e,e=e.return;return t.tag===3?t.stateNode:null}var lt=!1;function Va(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bc(e,r){e=e.updateQueue,r.updateQueue===e&&(r.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function qr(e,r){return{eventTime:e,lane:r,tag:0,payload:null,callback:null,next:null}}function ct(e,r,t){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(de&2)!==0){var a=o.pending;return a===null?r.next=r:(r.next=a.next,a.next=r),o.pending=r,Gr(e,t)}return a=o.interleaved,a===null?(r.next=r,Ua(o)):(r.next=a.next,a.next=r),o.interleaved=r,Gr(e,t)}function Go(e,r,t){if(r=r.updateQueue,r!==null&&(r=r.shared,(t&4194240)!==0)){var o=r.lanes;o&=e.pendingLanes,t|=o,r.lanes=t,ia(e,t)}}function Fc(e,r){var t=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,t===o)){var a=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var d={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?a=s=d:s=s.next=d,t=t.next}while(t!==null);s===null?a=s=r:s=s.next=r}else a=s=r;t={baseState:o.baseState,firstBaseUpdate:a,lastBaseUpdate:s,shared:o.shared,effects:o.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=r:e.next=r,t.lastBaseUpdate=r}function qo(e,r,t,o){var a=e.updateQueue;lt=!1;var s=a.firstBaseUpdate,d=a.lastBaseUpdate,f=a.shared.pending;if(f!==null){a.shared.pending=null;var h=f,w=h.next;h.next=null,d===null?s=w:d.next=w,d=h;var N=e.alternate;N!==null&&(N=N.updateQueue,f=N.lastBaseUpdate,f!==d&&(f===null?N.firstBaseUpdate=w:f.next=w,N.lastBaseUpdate=h))}if(s!==null){var S=a.baseState;d=0,N=w=h=null,f=s;do{var j=f.lane,L=f.eventTime;if((o&j)===j){N!==null&&(N=N.next={eventTime:L,lane:0,tag:f.tag,payload:f.payload,callback:f.callback,next:null});e:{var $=e,M=f;switch(j=r,L=t,M.tag){case 1:if($=M.payload,typeof $=="function"){S=$.call(L,S,j);break e}S=$;break e;case 3:$.flags=$.flags&-65537|128;case 0:if($=M.payload,j=typeof $=="function"?$.call(L,S,j):$,j==null)break e;S=_({},S,j);break e;case 2:lt=!0}}f.callback!==null&&f.lane!==0&&(e.flags|=64,j=a.effects,j===null?a.effects=[f]:j.push(f))}else L={eventTime:L,lane:j,tag:f.tag,payload:f.payload,callback:f.callback,next:null},N===null?(w=N=L,h=S):N=N.next=L,d|=j;if(f=f.next,f===null){if(f=a.shared.pending,f===null)break;j=f,f=j.next,j.next=null,a.lastBaseUpdate=j,a.shared.pending=null}}while(!0);if(N===null&&(h=S),a.baseState=h,a.firstBaseUpdate=w,a.lastBaseUpdate=N,r=a.shared.interleaved,r!==null){a=r;do d|=a.lane,a=a.next;while(a!==r)}else s===null&&(a.shared.lanes=0);_t|=d,e.lanes=d,e.memoizedState=S}}function Ac(e,r,t){if(e=r.effects,r.effects=null,e!==null)for(r=0;r<e.length;r++){var o=e[r],a=o.callback;if(a!==null){if(o.callback=null,o=t,typeof a!="function")throw Error(l(191,a));a.call(o)}}}var Gn={},Rr=it(Gn),qn=it(Gn),Kn=it(Gn);function Et(e){if(e===Gn)throw Error(l(174));return e}function Qa(e,r){switch(ye(Kn,r),ye(qn,e),ye(Rr,Gn),e=r.nodeType,e){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Gi(null,"");break;default:e=e===8?r.parentNode:r,r=e.namespaceURI||null,e=e.tagName,r=Gi(r,e)}be(Rr),ye(Rr,r)}function on(){be(Rr),be(qn),be(Kn)}function Dc(e){Et(Kn.current);var r=Et(Rr.current),t=Gi(r,e.type);r!==t&&(ye(qn,e),ye(Rr,t))}function Ga(e){qn.current===e&&(be(Rr),be(qn))}var Ne=it(0);function Ko(e){for(var r=e;r!==null;){if(r.tag===13){var t=r.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var qa=[];function Ka(){for(var e=0;e<qa.length;e++)qa[e]._workInProgressVersionPrimary=null;qa.length=0}var Yo=re.ReactCurrentDispatcher,Ya=re.ReactCurrentBatchConfig,Pt=0,Se=null,$e=null,Re=null,Xo=!1,Yn=!1,Xn=0,Of=0;function Ve(){throw Error(l(321))}function Xa(e,r){if(r===null)return!1;for(var t=0;t<r.length&&t<e.length;t++)if(!Tr(e[t],r[t]))return!1;return!0}function Ja(e,r,t,o,a,s){if(Pt=s,Se=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Yo.current=e===null||e.memoizedState===null?Af:Df,e=t(o,a),Yn){s=0;do{if(Yn=!1,Xn=0,25<=s)throw Error(l(301));s+=1,Re=$e=null,r.updateQueue=null,Yo.current=Wf,e=t(o,a)}while(Yn)}if(Yo.current=ei,r=$e!==null&&$e.next!==null,Pt=0,Re=$e=Se=null,Xo=!1,r)throw Error(l(300));return e}function Za(){var e=Xn!==0;return Xn=0,e}function Or(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Re===null?Se.memoizedState=Re=e:Re=Re.next=e,Re}function vr(){if($e===null){var e=Se.alternate;e=e!==null?e.memoizedState:null}else e=$e.next;var r=Re===null?Se.memoizedState:Re.next;if(r!==null)Re=r,$e=e;else{if(e===null)throw Error(l(310));$e=e,e={memoizedState:$e.memoizedState,baseState:$e.baseState,baseQueue:$e.baseQueue,queue:$e.queue,next:null},Re===null?Se.memoizedState=Re=e:Re=Re.next=e}return Re}function Jn(e,r){return typeof r=="function"?r(e):r}function es(e){var r=vr(),t=r.queue;if(t===null)throw Error(l(311));t.lastRenderedReducer=e;var o=$e,a=o.baseQueue,s=t.pending;if(s!==null){if(a!==null){var d=a.next;a.next=s.next,s.next=d}o.baseQueue=a=s,t.pending=null}if(a!==null){s=a.next,o=o.baseState;var f=d=null,h=null,w=s;do{var N=w.lane;if((Pt&N)===N)h!==null&&(h=h.next={lane:0,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null}),o=w.hasEagerState?w.eagerState:e(o,w.action);else{var S={lane:N,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null};h===null?(f=h=S,d=o):h=h.next=S,Se.lanes|=N,_t|=N}w=w.next}while(w!==null&&w!==s);h===null?d=o:h.next=f,Tr(o,r.memoizedState)||(Ze=!0),r.memoizedState=o,r.baseState=d,r.baseQueue=h,t.lastRenderedState=o}if(e=t.interleaved,e!==null){a=e;do s=a.lane,Se.lanes|=s,_t|=s,a=a.next;while(a!==e)}else a===null&&(t.lanes=0);return[r.memoizedState,t.dispatch]}function rs(e){var r=vr(),t=r.queue;if(t===null)throw Error(l(311));t.lastRenderedReducer=e;var o=t.dispatch,a=t.pending,s=r.memoizedState;if(a!==null){t.pending=null;var d=a=a.next;do s=e(s,d.action),d=d.next;while(d!==a);Tr(s,r.memoizedState)||(Ze=!0),r.memoizedState=s,r.baseQueue===null&&(r.baseState=s),t.lastRenderedState=s}return[s,o]}function Wc(){}function Uc(e,r){var t=Se,o=vr(),a=r(),s=!Tr(o.memoizedState,a);if(s&&(o.memoizedState=a,Ze=!0),o=o.queue,ts(Gc.bind(null,t,o,e),[e]),o.getSnapshot!==r||s||Re!==null&&Re.memoizedState.tag&1){if(t.flags|=2048,Zn(9,Qc.bind(null,t,o,a,r),void 0,null),Oe===null)throw Error(l(349));(Pt&30)!==0||Vc(t,r,a)}return a}function Vc(e,r,t){e.flags|=16384,e={getSnapshot:r,value:t},r=Se.updateQueue,r===null?(r={lastEffect:null,stores:null},Se.updateQueue=r,r.stores=[e]):(t=r.stores,t===null?r.stores=[e]:t.push(e))}function Qc(e,r,t,o){r.value=t,r.getSnapshot=o,qc(r)&&Kc(e)}function Gc(e,r,t){return t(function(){qc(r)&&Kc(e)})}function qc(e){var r=e.getSnapshot;e=e.value;try{var t=r();return!Tr(e,t)}catch{return!0}}function Kc(e){var r=Gr(e,1);r!==null&&zr(r,e,1,-1)}function Yc(e){var r=Or();return typeof e=="function"&&(e=e()),r.memoizedState=r.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Jn,lastRenderedState:e},r.queue=e,e=e.dispatch=Ff.bind(null,Se,e),[r.memoizedState,e]}function Zn(e,r,t,o){return e={tag:e,create:r,destroy:t,deps:o,next:null},r=Se.updateQueue,r===null?(r={lastEffect:null,stores:null},Se.updateQueue=r,r.lastEffect=e.next=e):(t=r.lastEffect,t===null?r.lastEffect=e.next=e:(o=t.next,t.next=e,e.next=o,r.lastEffect=e)),e}function Xc(){return vr().memoizedState}function Jo(e,r,t,o){var a=Or();Se.flags|=e,a.memoizedState=Zn(1|r,t,void 0,o===void 0?null:o)}function Zo(e,r,t,o){var a=vr();o=o===void 0?null:o;var s=void 0;if($e!==null){var d=$e.memoizedState;if(s=d.destroy,o!==null&&Xa(o,d.deps)){a.memoizedState=Zn(r,t,s,o);return}}Se.flags|=e,a.memoizedState=Zn(1|r,t,s,o)}function Jc(e,r){return Jo(8390656,8,e,r)}function ts(e,r){return Zo(2048,8,e,r)}function Zc(e,r){return Zo(4,2,e,r)}function ed(e,r){return Zo(4,4,e,r)}function rd(e,r){if(typeof r=="function")return e=e(),r(e),function(){r(null)};if(r!=null)return e=e(),r.current=e,function(){r.current=null}}function td(e,r,t){return t=t!=null?t.concat([e]):null,Zo(4,4,rd.bind(null,r,e),t)}function ns(){}function nd(e,r){var t=vr();r=r===void 0?null:r;var o=t.memoizedState;return o!==null&&r!==null&&Xa(r,o[1])?o[0]:(t.memoizedState=[e,r],e)}function od(e,r){var t=vr();r=r===void 0?null:r;var o=t.memoizedState;return o!==null&&r!==null&&Xa(r,o[1])?o[0]:(e=e(),t.memoizedState=[e,r],e)}function id(e,r,t){return(Pt&21)===0?(e.baseState&&(e.baseState=!1,Ze=!0),e.memoizedState=t):(Tr(t,r)||(t=Ml(),Se.lanes|=t,_t|=t,e.baseState=!0),r)}function Hf(e,r){var t=ge;ge=t!==0&&4>t?t:4,e(!0);var o=Ya.transition;Ya.transition={};try{e(!1),r()}finally{ge=t,Ya.transition=o}}function ad(){return vr().memoizedState}function Bf(e,r,t){var o=ft(e);if(t={lane:o,action:t,hasEagerState:!1,eagerState:null,next:null},sd(e))ld(r,t);else if(t=Hc(e,r,t,o),t!==null){var a=Ye();zr(t,e,o,a),cd(t,r,o)}}function Ff(e,r,t){var o=ft(e),a={lane:o,action:t,hasEagerState:!1,eagerState:null,next:null};if(sd(e))ld(r,a);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=r.lastRenderedReducer,s!==null))try{var d=r.lastRenderedState,f=s(d,t);if(a.hasEagerState=!0,a.eagerState=f,Tr(f,d)){var h=r.interleaved;h===null?(a.next=a,Ua(r)):(a.next=h.next,h.next=a),r.interleaved=a;return}}catch{}finally{}t=Hc(e,r,a,o),t!==null&&(a=Ye(),zr(t,e,o,a),cd(t,r,o))}}function sd(e){var r=e.alternate;return e===Se||r!==null&&r===Se}function ld(e,r){Yn=Xo=!0;var t=e.pending;t===null?r.next=r:(r.next=t.next,t.next=r),e.pending=r}function cd(e,r,t){if((t&4194240)!==0){var o=r.lanes;o&=e.pendingLanes,t|=o,r.lanes=t,ia(e,t)}}var ei={readContext:gr,useCallback:Ve,useContext:Ve,useEffect:Ve,useImperativeHandle:Ve,useInsertionEffect:Ve,useLayoutEffect:Ve,useMemo:Ve,useReducer:Ve,useRef:Ve,useState:Ve,useDebugValue:Ve,useDeferredValue:Ve,useTransition:Ve,useMutableSource:Ve,useSyncExternalStore:Ve,useId:Ve,unstable_isNewReconciler:!1},Af={readContext:gr,useCallback:function(e,r){return Or().memoizedState=[e,r===void 0?null:r],e},useContext:gr,useEffect:Jc,useImperativeHandle:function(e,r,t){return t=t!=null?t.concat([e]):null,Jo(4194308,4,rd.bind(null,r,e),t)},useLayoutEffect:function(e,r){return Jo(4194308,4,e,r)},useInsertionEffect:function(e,r){return Jo(4,2,e,r)},useMemo:function(e,r){var t=Or();return r=r===void 0?null:r,e=e(),t.memoizedState=[e,r],e},useReducer:function(e,r,t){var o=Or();return r=t!==void 0?t(r):r,o.memoizedState=o.baseState=r,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},o.queue=e,e=e.dispatch=Bf.bind(null,Se,e),[o.memoizedState,e]},useRef:function(e){var r=Or();return e={current:e},r.memoizedState=e},useState:Yc,useDebugValue:ns,useDeferredValue:function(e){return Or().memoizedState=e},useTransition:function(){var e=Yc(!1),r=e[0];return e=Hf.bind(null,e[1]),Or().memoizedState=e,[r,e]},useMutableSource:function(){},useSyncExternalStore:function(e,r,t){var o=Se,a=Or();if(je){if(t===void 0)throw Error(l(407));t=t()}else{if(t=r(),Oe===null)throw Error(l(349));(Pt&30)!==0||Vc(o,r,t)}a.memoizedState=t;var s={value:t,getSnapshot:r};return a.queue=s,Jc(Gc.bind(null,o,s,e),[e]),o.flags|=2048,Zn(9,Qc.bind(null,o,s,t,r),void 0,null),t},useId:function(){var e=Or(),r=Oe.identifierPrefix;if(je){var t=Qr,o=Vr;t=(o&~(1<<32-Cr(o)-1)).toString(32)+t,r=":"+r+"R"+t,t=Xn++,0<t&&(r+="H"+t.toString(32)),r+=":"}else t=Of++,r=":"+r+"r"+t.toString(32)+":";return e.memoizedState=r},unstable_isNewReconciler:!1},Df={readContext:gr,useCallback:nd,useContext:gr,useEffect:ts,useImperativeHandle:td,useInsertionEffect:Zc,useLayoutEffect:ed,useMemo:od,useReducer:es,useRef:Xc,useState:function(){return es(Jn)},useDebugValue:ns,useDeferredValue:function(e){var r=vr();return id(r,$e.memoizedState,e)},useTransition:function(){var e=es(Jn)[0],r=vr().memoizedState;return[e,r]},useMutableSource:Wc,useSyncExternalStore:Uc,useId:ad,unstable_isNewReconciler:!1},Wf={readContext:gr,useCallback:nd,useContext:gr,useEffect:ts,useImperativeHandle:td,useInsertionEffect:Zc,useLayoutEffect:ed,useMemo:od,useReducer:rs,useRef:Xc,useState:function(){return rs(Jn)},useDebugValue:ns,useDeferredValue:function(e){var r=vr();return $e===null?r.memoizedState=e:id(r,$e.memoizedState,e)},useTransition:function(){var e=rs(Jn)[0],r=vr().memoizedState;return[e,r]},useMutableSource:Wc,useSyncExternalStore:Uc,useId:ad,unstable_isNewReconciler:!1};function Pr(e,r){if(e&&e.defaultProps){r=_({},r),e=e.defaultProps;for(var t in e)r[t]===void 0&&(r[t]=e[t]);return r}return r}function os(e,r,t,o){r=e.memoizedState,t=t(o,r),t=t==null?r:_({},r,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var ri={isMounted:function(e){return(e=e._reactInternals)?kt(e)===e:!1},enqueueSetState:function(e,r,t){e=e._reactInternals;var o=Ye(),a=ft(e),s=qr(o,a);s.payload=r,t!=null&&(s.callback=t),r=ct(e,s,a),r!==null&&(zr(r,e,a,o),Go(r,e,a))},enqueueReplaceState:function(e,r,t){e=e._reactInternals;var o=Ye(),a=ft(e),s=qr(o,a);s.tag=1,s.payload=r,t!=null&&(s.callback=t),r=ct(e,s,a),r!==null&&(zr(r,e,a,o),Go(r,e,a))},enqueueForceUpdate:function(e,r){e=e._reactInternals;var t=Ye(),o=ft(e),a=qr(t,o);a.tag=2,r!=null&&(a.callback=r),r=ct(e,a,o),r!==null&&(zr(r,e,o,t),Go(r,e,o))}};function dd(e,r,t,o,a,s,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,s,d):r.prototype&&r.prototype.isPureReactComponent?!Bn(t,o)||!Bn(a,s):!0}function ud(e,r,t){var o=!1,a=at,s=r.contextType;return typeof s=="object"&&s!==null?s=gr(s):(a=Je(r)?Nt:Ue.current,o=r.contextTypes,s=(o=o!=null)?Xt(e,a):at),r=new r(t,s),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=ri,e.stateNode=r,r._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=s),r}function pd(e,r,t,o){e=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(t,o),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(t,o),r.state!==e&&ri.enqueueReplaceState(r,r.state,null)}function is(e,r,t,o){var a=e.stateNode;a.props=t,a.state=e.memoizedState,a.refs={},Va(e);var s=r.contextType;typeof s=="object"&&s!==null?a.context=gr(s):(s=Je(r)?Nt:Ue.current,a.context=Xt(e,s)),a.state=e.memoizedState,s=r.getDerivedStateFromProps,typeof s=="function"&&(os(e,r,s,t),a.state=e.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(r=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),r!==a.state&&ri.enqueueReplaceState(a,a.state,null),qo(e,t,a,o),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function an(e,r){try{var t="",o=r;do t+=oe(o),o=o.return;while(o);var a=t}catch(s){a=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:r,stack:a,digest:null}}function as(e,r,t){return{value:e,source:null,stack:t!=null?t:null,digest:r!=null?r:null}}function ss(e,r){try{console.error(r.value)}catch(t){setTimeout(function(){throw t})}}var Uf=typeof WeakMap=="function"?WeakMap:Map;function fd(e,r,t){t=qr(-1,t),t.tag=3,t.payload={element:null};var o=r.value;return t.callback=function(){li||(li=!0,ks=o),ss(e,r)},t}function hd(e,r,t){t=qr(-1,t),t.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var a=r.value;t.payload=function(){return o(a)},t.callback=function(){ss(e,r)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){ss(e,r),typeof o!="function"&&(ut===null?ut=new Set([this]):ut.add(this));var d=r.stack;this.componentDidCatch(r.value,{componentStack:d!==null?d:""})}),t}function xd(e,r,t){var o=e.pingCache;if(o===null){o=e.pingCache=new Uf;var a=new Set;o.set(r,a)}else a=o.get(r),a===void 0&&(a=new Set,o.set(r,a));a.has(t)||(a.add(t),e=oh.bind(null,e,r,t),r.then(e,e))}function md(e){do{var r;if((r=e.tag===13)&&(r=e.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return e;e=e.return}while(e!==null);return null}function gd(e,r,t,o,a){return(e.mode&1)===0?(e===r?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(r=qr(-1,1),r.tag=2,ct(t,r,1))),t.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var Vf=re.ReactCurrentOwner,Ze=!1;function Ke(e,r,t,o){r.child=e===null?Oc(r,null,t,o):rn(r,e.child,t,o)}function vd(e,r,t,o,a){t=t.render;var s=r.ref;return nn(r,a),o=Ja(e,r,t,o,s,a),t=Za(),e!==null&&!Ze?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~a,Kr(e,r,a)):(je&&t&&Ma(r),r.flags|=1,Ke(e,r,o,a),r.child)}function yd(e,r,t,o,a){if(e===null){var s=t.type;return typeof s=="function"&&!Ps(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(r.tag=15,r.type=s,wd(e,r,s,o,a)):(e=hi(t.type,null,o,r,r.mode,a),e.ref=r.ref,e.return=r,r.child=e)}if(s=e.child,(e.lanes&a)===0){var d=s.memoizedProps;if(t=t.compare,t=t!==null?t:Bn,t(d,o)&&e.ref===r.ref)return Kr(e,r,a)}return r.flags|=1,e=xt(s,o),e.ref=r.ref,e.return=r,r.child=e}function wd(e,r,t,o,a){if(e!==null){var s=e.memoizedProps;if(Bn(s,o)&&e.ref===r.ref)if(Ze=!1,r.pendingProps=o=s,(e.lanes&a)!==0)(e.flags&131072)!==0&&(Ze=!0);else return r.lanes=e.lanes,Kr(e,r,a)}return ls(e,r,t,o,a)}function bd(e,r,t){var o=r.pendingProps,a=o.children,s=e!==null?e.memoizedState:null;if(o.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},ye(ln,cr),cr|=t;else{if((t&1073741824)===0)return e=s!==null?s.baseLanes|t:t,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:e,cachePool:null,transitions:null},r.updateQueue=null,ye(ln,cr),cr|=e,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=s!==null?s.baseLanes:t,ye(ln,cr),cr|=o}else s!==null?(o=s.baseLanes|t,r.memoizedState=null):o=t,ye(ln,cr),cr|=o;return Ke(e,r,a,t),r.child}function kd(e,r){var t=r.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(r.flags|=512,r.flags|=2097152)}function ls(e,r,t,o,a){var s=Je(t)?Nt:Ue.current;return s=Xt(r,s),nn(r,a),t=Ja(e,r,t,o,s,a),o=Za(),e!==null&&!Ze?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~a,Kr(e,r,a)):(je&&o&&Ma(r),r.flags|=1,Ke(e,r,t,a),r.child)}function jd(e,r,t,o,a){if(Je(t)){var s=!0;Bo(r)}else s=!1;if(nn(r,a),r.stateNode===null)ni(e,r),ud(r,t,o),is(r,t,o,a),o=!0;else if(e===null){var d=r.stateNode,f=r.memoizedProps;d.props=f;var h=d.context,w=t.contextType;typeof w=="object"&&w!==null?w=gr(w):(w=Je(t)?Nt:Ue.current,w=Xt(r,w));var N=t.getDerivedStateFromProps,S=typeof N=="function"||typeof d.getSnapshotBeforeUpdate=="function";S||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(f!==o||h!==w)&&pd(r,d,o,w),lt=!1;var j=r.memoizedState;d.state=j,qo(r,o,d,a),h=r.memoizedState,f!==o||j!==h||Xe.current||lt?(typeof N=="function"&&(os(r,t,N,o),h=r.memoizedState),(f=lt||dd(r,t,f,o,j,h,w))?(S||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(r.flags|=4194308)):(typeof d.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=o,r.memoizedState=h),d.props=o,d.state=h,d.context=w,o=f):(typeof d.componentDidMount=="function"&&(r.flags|=4194308),o=!1)}else{d=r.stateNode,Bc(e,r),f=r.memoizedProps,w=r.type===r.elementType?f:Pr(r.type,f),d.props=w,S=r.pendingProps,j=d.context,h=t.contextType,typeof h=="object"&&h!==null?h=gr(h):(h=Je(t)?Nt:Ue.current,h=Xt(r,h));var L=t.getDerivedStateFromProps;(N=typeof L=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(f!==S||j!==h)&&pd(r,d,o,h),lt=!1,j=r.memoizedState,d.state=j,qo(r,o,d,a);var $=r.memoizedState;f!==S||j!==$||Xe.current||lt?(typeof L=="function"&&(os(r,t,L,o),$=r.memoizedState),(w=lt||dd(r,t,w,o,j,$,h)||!1)?(N||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,$,h),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,$,h)),typeof d.componentDidUpdate=="function"&&(r.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof d.componentDidUpdate!="function"||f===e.memoizedProps&&j===e.memoizedState||(r.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&j===e.memoizedState||(r.flags|=1024),r.memoizedProps=o,r.memoizedState=$),d.props=o,d.state=$,d.context=h,o=w):(typeof d.componentDidUpdate!="function"||f===e.memoizedProps&&j===e.memoizedState||(r.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&j===e.memoizedState||(r.flags|=1024),o=!1)}return cs(e,r,t,o,s,a)}function cs(e,r,t,o,a,s){kd(e,r);var d=(r.flags&128)!==0;if(!o&&!d)return a&&Ec(r,t,!1),Kr(e,r,s);o=r.stateNode,Vf.current=r;var f=d&&typeof t.getDerivedStateFromError!="function"?null:o.render();return r.flags|=1,e!==null&&d?(r.child=rn(r,e.child,null,s),r.child=rn(r,null,f,s)):Ke(e,r,f,s),r.memoizedState=o.state,a&&Ec(r,t,!0),r.child}function Nd(e){var r=e.stateNode;r.pendingContext?Cc(e,r.pendingContext,r.pendingContext!==r.context):r.context&&Cc(e,r.context,!1),Qa(e,r.containerInfo)}function Sd(e,r,t,o,a){return en(),Ba(a),r.flags|=256,Ke(e,r,t,o),r.child}var ds={dehydrated:null,treeContext:null,retryLane:0};function us(e){return{baseLanes:e,cachePool:null,transitions:null}}function Cd(e,r,t){var o=r.pendingProps,a=Ne.current,s=!1,d=(r.flags&128)!==0,f;if((f=d)||(f=e!==null&&e.memoizedState===null?!1:(a&2)!==0),f?(s=!0,r.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),ye(Ne,a&1),e===null)return Ha(r),e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((r.mode&1)===0?r.lanes=1:e.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(d=o.children,e=o.fallback,s?(o=r.mode,s=r.child,d={mode:"hidden",children:d},(o&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=d):s=xi(d,o,0,null),e=$t(e,o,t,null),s.return=r,e.return=r,s.sibling=e,r.child=s,r.child.memoizedState=us(t),r.memoizedState=ds,e):ps(r,d));if(a=e.memoizedState,a!==null&&(f=a.dehydrated,f!==null))return Qf(e,r,d,o,f,a,t);if(s){s=o.fallback,d=r.mode,a=e.child,f=a.sibling;var h={mode:"hidden",children:o.children};return(d&1)===0&&r.child!==a?(o=r.child,o.childLanes=0,o.pendingProps=h,r.deletions=null):(o=xt(a,h),o.subtreeFlags=a.subtreeFlags&14680064),f!==null?s=xt(f,s):(s=$t(s,d,t,null),s.flags|=2),s.return=r,o.return=r,o.sibling=s,r.child=o,o=s,s=r.child,d=e.child.memoizedState,d=d===null?us(t):{baseLanes:d.baseLanes|t,cachePool:null,transitions:d.transitions},s.memoizedState=d,s.childLanes=e.childLanes&~t,r.memoizedState=ds,o}return s=e.child,e=s.sibling,o=xt(s,{mode:"visible",children:o.children}),(r.mode&1)===0&&(o.lanes=t),o.return=r,o.sibling=null,e!==null&&(t=r.deletions,t===null?(r.deletions=[e],r.flags|=16):t.push(e)),r.child=o,r.memoizedState=null,o}function ps(e,r){return r=xi({mode:"visible",children:r},e.mode,0,null),r.return=e,e.child=r}function ti(e,r,t,o){return o!==null&&Ba(o),rn(r,e.child,null,t),e=ps(r,r.pendingProps.children),e.flags|=2,r.memoizedState=null,e}function Qf(e,r,t,o,a,s,d){if(t)return r.flags&256?(r.flags&=-257,o=as(Error(l(422))),ti(e,r,d,o)):r.memoizedState!==null?(r.child=e.child,r.flags|=128,null):(s=o.fallback,a=r.mode,o=xi({mode:"visible",children:o.children},a,0,null),s=$t(s,a,d,null),s.flags|=2,o.return=r,s.return=r,o.sibling=s,r.child=o,(r.mode&1)!==0&&rn(r,e.child,null,d),r.child.memoizedState=us(d),r.memoizedState=ds,s);if((r.mode&1)===0)return ti(e,r,d,null);if(a.data==="$!"){if(o=a.nextSibling&&a.nextSibling.dataset,o)var f=o.dgst;return o=f,s=Error(l(419)),o=as(s,o,void 0),ti(e,r,d,o)}if(f=(d&e.childLanes)!==0,Ze||f){if(o=Oe,o!==null){switch(d&-d){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(o.suspendedLanes|d))!==0?0:a,a!==0&&a!==s.retryLane&&(s.retryLane=a,Gr(e,a),zr(o,e,a,-1))}return Es(),o=as(Error(l(421))),ti(e,r,d,o)}return a.data==="$?"?(r.flags|=128,r.child=e.child,r=ih.bind(null,e),a._reactRetry=r,null):(e=s.treeContext,lr=ot(a.nextSibling),sr=r,je=!0,Er=null,e!==null&&(xr[mr++]=Vr,xr[mr++]=Qr,xr[mr++]=St,Vr=e.id,Qr=e.overflow,St=r),r=ps(r,o.children),r.flags|=4096,r)}function Td(e,r,t){e.lanes|=r;var o=e.alternate;o!==null&&(o.lanes|=r),Wa(e.return,r,t)}function fs(e,r,t,o,a){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:o,tail:t,tailMode:a}:(s.isBackwards=r,s.rendering=null,s.renderingStartTime=0,s.last=o,s.tail=t,s.tailMode=a)}function Ed(e,r,t){var o=r.pendingProps,a=o.revealOrder,s=o.tail;if(Ke(e,r,o.children,t),o=Ne.current,(o&2)!==0)o=o&1|2,r.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=r.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Td(e,t,r);else if(e.tag===19)Td(e,t,r);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break e;for(;e.sibling===null;){if(e.return===null||e.return===r)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(ye(Ne,o),(r.mode&1)===0)r.memoizedState=null;else switch(a){case"forwards":for(t=r.child,a=null;t!==null;)e=t.alternate,e!==null&&Ko(e)===null&&(a=t),t=t.sibling;t=a,t===null?(a=r.child,r.child=null):(a=t.sibling,t.sibling=null),fs(r,!1,a,t,s);break;case"backwards":for(t=null,a=r.child,r.child=null;a!==null;){if(e=a.alternate,e!==null&&Ko(e)===null){r.child=a;break}e=a.sibling,a.sibling=t,t=a,a=e}fs(r,!0,t,null,s);break;case"together":fs(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function ni(e,r){(r.mode&1)===0&&e!==null&&(e.alternate=null,r.alternate=null,r.flags|=2)}function Kr(e,r,t){if(e!==null&&(r.dependencies=e.dependencies),_t|=r.lanes,(t&r.childLanes)===0)return null;if(e!==null&&r.child!==e.child)throw Error(l(153));if(r.child!==null){for(e=r.child,t=xt(e,e.pendingProps),r.child=t,t.return=r;e.sibling!==null;)e=e.sibling,t=t.sibling=xt(e,e.pendingProps),t.return=r;t.sibling=null}return r.child}function Gf(e,r,t){switch(r.tag){case 3:Nd(r),en();break;case 5:Dc(r);break;case 1:Je(r.type)&&Bo(r);break;case 4:Qa(r,r.stateNode.containerInfo);break;case 10:var o=r.type._context,a=r.memoizedProps.value;ye(Vo,o._currentValue),o._currentValue=a;break;case 13:if(o=r.memoizedState,o!==null)return o.dehydrated!==null?(ye(Ne,Ne.current&1),r.flags|=128,null):(t&r.child.childLanes)!==0?Cd(e,r,t):(ye(Ne,Ne.current&1),e=Kr(e,r,t),e!==null?e.sibling:null);ye(Ne,Ne.current&1);break;case 19:if(o=(t&r.childLanes)!==0,(e.flags&128)!==0){if(o)return Ed(e,r,t);r.flags|=128}if(a=r.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),ye(Ne,Ne.current),o)break;return null;case 22:case 23:return r.lanes=0,bd(e,r,t)}return Kr(e,r,t)}var Pd,hs,_d,Ld;Pd=function(e,r){for(var t=r.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break;for(;t.sibling===null;){if(t.return===null||t.return===r)return;t=t.return}t.sibling.return=t.return,t=t.sibling}},hs=function(){},_d=function(e,r,t,o){var a=e.memoizedProps;if(a!==o){e=r.stateNode,Et(Rr.current);var s=null;switch(t){case"input":a=Wi(e,a),o=Wi(e,o),s=[];break;case"select":a=_({},a,{value:void 0}),o=_({},o,{value:void 0}),s=[];break;case"textarea":a=Qi(e,a),o=Qi(e,o),s=[];break;default:typeof a.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=Ro)}qi(t,o);var d;t=null;for(w in a)if(!o.hasOwnProperty(w)&&a.hasOwnProperty(w)&&a[w]!=null)if(w==="style"){var f=a[w];for(d in f)f.hasOwnProperty(d)&&(t||(t={}),t[d]="")}else w!=="dangerouslySetInnerHTML"&&w!=="children"&&w!=="suppressContentEditableWarning"&&w!=="suppressHydrationWarning"&&w!=="autoFocus"&&(u.hasOwnProperty(w)?s||(s=[]):(s=s||[]).push(w,null));for(w in o){var h=o[w];if(f=a!=null?a[w]:void 0,o.hasOwnProperty(w)&&h!==f&&(h!=null||f!=null))if(w==="style")if(f){for(d in f)!f.hasOwnProperty(d)||h&&h.hasOwnProperty(d)||(t||(t={}),t[d]="");for(d in h)h.hasOwnProperty(d)&&f[d]!==h[d]&&(t||(t={}),t[d]=h[d])}else t||(s||(s=[]),s.push(w,t)),t=h;else w==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,f=f?f.__html:void 0,h!=null&&f!==h&&(s=s||[]).push(w,h)):w==="children"?typeof h!="string"&&typeof h!="number"||(s=s||[]).push(w,""+h):w!=="suppressContentEditableWarning"&&w!=="suppressHydrationWarning"&&(u.hasOwnProperty(w)?(h!=null&&w==="onScroll"&&we("scroll",e),s||f===h||(s=[])):(s=s||[]).push(w,h))}t&&(s=s||[]).push("style",t);var w=s;(r.updateQueue=w)&&(r.flags|=4)}},Ld=function(e,r,t,o){t!==o&&(r.flags|=4)};function eo(e,r){if(!je)switch(e.tailMode){case"hidden":r=e.tail;for(var t=null;r!==null;)r.alternate!==null&&(t=r),r=r.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var o=null;t!==null;)t.alternate!==null&&(o=t),t=t.sibling;o===null?r||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Qe(e){var r=e.alternate!==null&&e.alternate.child===e.child,t=0,o=0;if(r)for(var a=e.child;a!==null;)t|=a.lanes|a.childLanes,o|=a.subtreeFlags&14680064,o|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)t|=a.lanes|a.childLanes,o|=a.subtreeFlags,o|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=o,e.childLanes=t,r}function qf(e,r,t){var o=r.pendingProps;switch(Ra(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(r),null;case 1:return Je(r.type)&&Ho(),Qe(r),null;case 3:return o=r.stateNode,on(),be(Xe),be(Ue),Ka(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(Wo(r)?r.flags|=4:e===null||e.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Er!==null&&(Ss(Er),Er=null))),hs(e,r),Qe(r),null;case 5:Ga(r);var a=Et(Kn.current);if(t=r.type,e!==null&&r.stateNode!=null)_d(e,r,t,o,a),e.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!o){if(r.stateNode===null)throw Error(l(166));return Qe(r),null}if(e=Et(Rr.current),Wo(r)){o=r.stateNode,t=r.type;var s=r.memoizedProps;switch(o[Mr]=r,o[Un]=s,e=(r.mode&1)!==0,t){case"dialog":we("cancel",o),we("close",o);break;case"iframe":case"object":case"embed":we("load",o);break;case"video":case"audio":for(a=0;a<An.length;a++)we(An[a],o);break;case"source":we("error",o);break;case"img":case"image":case"link":we("error",o),we("load",o);break;case"details":we("toggle",o);break;case"input":ul(o,s),we("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!s.multiple},we("invalid",o);break;case"textarea":hl(o,s),we("invalid",o)}qi(t,s),a=null;for(var d in s)if(s.hasOwnProperty(d)){var f=s[d];d==="children"?typeof f=="string"?o.textContent!==f&&(s.suppressHydrationWarning!==!0&&Mo(o.textContent,f,e),a=["children",f]):typeof f=="number"&&o.textContent!==""+f&&(s.suppressHydrationWarning!==!0&&Mo(o.textContent,f,e),a=["children",""+f]):u.hasOwnProperty(d)&&f!=null&&d==="onScroll"&&we("scroll",o)}switch(t){case"input":Dr(o),fl(o,s,!0);break;case"textarea":Dr(o),ml(o);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(o.onclick=Ro)}o=a,r.updateQueue=o,o!==null&&(r.flags|=4)}else{d=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=gl(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=d.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=d.createElement(t,{is:o.is}):(e=d.createElement(t),t==="select"&&(d=e,o.multiple?d.multiple=!0:o.size&&(d.size=o.size))):e=d.createElementNS(e,t),e[Mr]=r,e[Un]=o,Pd(e,r,!1,!1),r.stateNode=e;e:{switch(d=Ki(t,o),t){case"dialog":we("cancel",e),we("close",e),a=o;break;case"iframe":case"object":case"embed":we("load",e),a=o;break;case"video":case"audio":for(a=0;a<An.length;a++)we(An[a],e);a=o;break;case"source":we("error",e),a=o;break;case"img":case"image":case"link":we("error",e),we("load",e),a=o;break;case"details":we("toggle",e),a=o;break;case"input":ul(e,o),a=Wi(e,o),we("invalid",e);break;case"option":a=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},a=_({},o,{value:void 0}),we("invalid",e);break;case"textarea":hl(e,o),a=Qi(e,o),we("invalid",e);break;default:a=o}qi(t,a),f=a;for(s in f)if(f.hasOwnProperty(s)){var h=f[s];s==="style"?wl(e,h):s==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,h!=null&&vl(e,h)):s==="children"?typeof h=="string"?(t!=="textarea"||h!=="")&&kn(e,h):typeof h=="number"&&kn(e,""+h):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(u.hasOwnProperty(s)?h!=null&&s==="onScroll"&&we("scroll",e):h!=null&&ae(e,s,h,d))}switch(t){case"input":Dr(e),fl(e,o,!1);break;case"textarea":Dr(e),ml(e);break;case"option":o.value!=null&&e.setAttribute("value",""+se(o.value));break;case"select":e.multiple=!!o.multiple,s=o.value,s!=null?Bt(e,!!o.multiple,s,!1):o.defaultValue!=null&&Bt(e,!!o.multiple,o.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Ro)}switch(t){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Qe(r),null;case 6:if(e&&r.stateNode!=null)Ld(e,r,e.memoizedProps,o);else{if(typeof o!="string"&&r.stateNode===null)throw Error(l(166));if(t=Et(Kn.current),Et(Rr.current),Wo(r)){if(o=r.stateNode,t=r.memoizedProps,o[Mr]=r,(s=o.nodeValue!==t)&&(e=sr,e!==null))switch(e.tag){case 3:Mo(o.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Mo(o.nodeValue,t,(e.mode&1)!==0)}s&&(r.flags|=4)}else o=(t.nodeType===9?t:t.ownerDocument).createTextNode(o),o[Mr]=r,r.stateNode=o}return Qe(r),null;case 13:if(be(Ne),o=r.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(je&&lr!==null&&(r.mode&1)!==0&&(r.flags&128)===0)$c(),en(),r.flags|=98560,s=!1;else if(s=Wo(r),o!==null&&o.dehydrated!==null){if(e===null){if(!s)throw Error(l(318));if(s=r.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(l(317));s[Mr]=r}else en(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Qe(r),s=!1}else Er!==null&&(Ss(Er),Er=null),s=!0;if(!s)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=t,r):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(r.child.flags|=8192,(r.mode&1)!==0&&(e===null||(Ne.current&1)!==0?Me===0&&(Me=3):Es())),r.updateQueue!==null&&(r.flags|=4),Qe(r),null);case 4:return on(),hs(e,r),e===null&&Dn(r.stateNode.containerInfo),Qe(r),null;case 10:return Da(r.type._context),Qe(r),null;case 17:return Je(r.type)&&Ho(),Qe(r),null;case 19:if(be(Ne),s=r.memoizedState,s===null)return Qe(r),null;if(o=(r.flags&128)!==0,d=s.rendering,d===null)if(o)eo(s,!1);else{if(Me!==0||e!==null&&(e.flags&128)!==0)for(e=r.child;e!==null;){if(d=Ko(e),d!==null){for(r.flags|=128,eo(s,!1),o=d.updateQueue,o!==null&&(r.updateQueue=o,r.flags|=4),r.subtreeFlags=0,o=t,t=r.child;t!==null;)s=t,e=o,s.flags&=14680066,d=s.alternate,d===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=d.childLanes,s.lanes=d.lanes,s.child=d.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=d.memoizedProps,s.memoizedState=d.memoizedState,s.updateQueue=d.updateQueue,s.type=d.type,e=d.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return ye(Ne,Ne.current&1|2),r.child}e=e.sibling}s.tail!==null&&Pe()>cn&&(r.flags|=128,o=!0,eo(s,!1),r.lanes=4194304)}else{if(!o)if(e=Ko(d),e!==null){if(r.flags|=128,o=!0,t=e.updateQueue,t!==null&&(r.updateQueue=t,r.flags|=4),eo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!d.alternate&&!je)return Qe(r),null}else 2*Pe()-s.renderingStartTime>cn&&t!==1073741824&&(r.flags|=128,o=!0,eo(s,!1),r.lanes=4194304);s.isBackwards?(d.sibling=r.child,r.child=d):(t=s.last,t!==null?t.sibling=d:r.child=d,s.last=d)}return s.tail!==null?(r=s.tail,s.rendering=r,s.tail=r.sibling,s.renderingStartTime=Pe(),r.sibling=null,t=Ne.current,ye(Ne,o?t&1|2:t&1),r):(Qe(r),null);case 22:case 23:return Ts(),o=r.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(r.flags|=8192),o&&(r.mode&1)!==0?(cr&1073741824)!==0&&(Qe(r),r.subtreeFlags&6&&(r.flags|=8192)):Qe(r),null;case 24:return null;case 25:return null}throw Error(l(156,r.tag))}function Kf(e,r){switch(Ra(r),r.tag){case 1:return Je(r.type)&&Ho(),e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 3:return on(),be(Xe),be(Ue),Ka(),e=r.flags,(e&65536)!==0&&(e&128)===0?(r.flags=e&-65537|128,r):null;case 5:return Ga(r),null;case 13:if(be(Ne),e=r.memoizedState,e!==null&&e.dehydrated!==null){if(r.alternate===null)throw Error(l(340));en()}return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 19:return be(Ne),null;case 4:return on(),null;case 10:return Da(r.type._context),null;case 22:case 23:return Ts(),null;case 24:return null;default:return null}}var oi=!1,Ge=!1,Yf=typeof WeakSet=="function"?WeakSet:Set,z=null;function sn(e,r){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(o){Ee(e,r,o)}else t.current=null}function xs(e,r,t){try{t()}catch(o){Ee(e,r,o)}}var zd=!1;function Xf(e,r){if(Ta=No,e=dc(),ya(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var o=t.getSelection&&t.getSelection();if(o&&o.rangeCount!==0){t=o.anchorNode;var a=o.anchorOffset,s=o.focusNode;o=o.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var d=0,f=-1,h=-1,w=0,N=0,S=e,j=null;r:for(;;){for(var L;S!==t||a!==0&&S.nodeType!==3||(f=d+a),S!==s||o!==0&&S.nodeType!==3||(h=d+o),S.nodeType===3&&(d+=S.nodeValue.length),(L=S.firstChild)!==null;)j=S,S=L;for(;;){if(S===e)break r;if(j===t&&++w===a&&(f=d),j===s&&++N===o&&(h=d),(L=S.nextSibling)!==null)break;S=j,j=S.parentNode}S=L}t=f===-1||h===-1?null:{start:f,end:h}}else t=null}t=t||{start:0,end:0}}else t=null;for(Ea={focusedElem:e,selectionRange:t},No=!1,z=r;z!==null;)if(r=z,e=r.child,(r.subtreeFlags&1028)!==0&&e!==null)e.return=r,z=e;else for(;z!==null;){r=z;try{var $=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if($!==null){var M=$.memoizedProps,_e=$.memoizedState,g=r.stateNode,x=g.getSnapshotBeforeUpdate(r.elementType===r.type?M:Pr(r.type,M),_e);g.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var y=r.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(l(163))}}catch(C){Ee(r,r.return,C)}if(e=r.sibling,e!==null){e.return=r.return,z=e;break}z=r.return}return $=zd,zd=!1,$}function ro(e,r,t){var o=r.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var a=o=o.next;do{if((a.tag&e)===e){var s=a.destroy;a.destroy=void 0,s!==void 0&&xs(r,t,s)}a=a.next}while(a!==o)}}function ii(e,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var t=r=r.next;do{if((t.tag&e)===e){var o=t.create;t.destroy=o()}t=t.next}while(t!==r)}}function ms(e){var r=e.ref;if(r!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof r=="function"?r(e):r.current=e}}function Id(e){var r=e.alternate;r!==null&&(e.alternate=null,Id(r)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(r=e.stateNode,r!==null&&(delete r[Mr],delete r[Un],delete r[za],delete r[If],delete r[$f])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function $d(e){return e.tag===5||e.tag===3||e.tag===4}function Md(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||$d(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function gs(e,r,t){var o=e.tag;if(o===5||o===6)e=e.stateNode,r?t.nodeType===8?t.parentNode.insertBefore(e,r):t.insertBefore(e,r):(t.nodeType===8?(r=t.parentNode,r.insertBefore(e,t)):(r=t,r.appendChild(e)),t=t._reactRootContainer,t!=null||r.onclick!==null||(r.onclick=Ro));else if(o!==4&&(e=e.child,e!==null))for(gs(e,r,t),e=e.sibling;e!==null;)gs(e,r,t),e=e.sibling}function vs(e,r,t){var o=e.tag;if(o===5||o===6)e=e.stateNode,r?t.insertBefore(e,r):t.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(vs(e,r,t),e=e.sibling;e!==null;)vs(e,r,t),e=e.sibling}var Ae=null,_r=!1;function dt(e,r,t){for(t=t.child;t!==null;)Rd(e,r,t),t=t.sibling}function Rd(e,r,t){if($r&&typeof $r.onCommitFiberUnmount=="function")try{$r.onCommitFiberUnmount(vo,t)}catch{}switch(t.tag){case 5:Ge||sn(t,r);case 6:var o=Ae,a=_r;Ae=null,dt(e,r,t),Ae=o,_r=a,Ae!==null&&(_r?(e=Ae,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):Ae.removeChild(t.stateNode));break;case 18:Ae!==null&&(_r?(e=Ae,t=t.stateNode,e.nodeType===8?La(e.parentNode,t):e.nodeType===1&&La(e,t),In(e)):La(Ae,t.stateNode));break;case 4:o=Ae,a=_r,Ae=t.stateNode.containerInfo,_r=!0,dt(e,r,t),Ae=o,_r=a;break;case 0:case 11:case 14:case 15:if(!Ge&&(o=t.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){a=o=o.next;do{var s=a,d=s.destroy;s=s.tag,d!==void 0&&((s&2)!==0||(s&4)!==0)&&xs(t,r,d),a=a.next}while(a!==o)}dt(e,r,t);break;case 1:if(!Ge&&(sn(t,r),o=t.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=t.memoizedProps,o.state=t.memoizedState,o.componentWillUnmount()}catch(f){Ee(t,r,f)}dt(e,r,t);break;case 21:dt(e,r,t);break;case 22:t.mode&1?(Ge=(o=Ge)||t.memoizedState!==null,dt(e,r,t),Ge=o):dt(e,r,t);break;default:dt(e,r,t)}}function Od(e){var r=e.updateQueue;if(r!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Yf),r.forEach(function(o){var a=ah.bind(null,e,o);t.has(o)||(t.add(o),o.then(a,a))})}}function Lr(e,r){var t=r.deletions;if(t!==null)for(var o=0;o<t.length;o++){var a=t[o];try{var s=e,d=r,f=d;e:for(;f!==null;){switch(f.tag){case 5:Ae=f.stateNode,_r=!1;break e;case 3:Ae=f.stateNode.containerInfo,_r=!0;break e;case 4:Ae=f.stateNode.containerInfo,_r=!0;break e}f=f.return}if(Ae===null)throw Error(l(160));Rd(s,d,a),Ae=null,_r=!1;var h=a.alternate;h!==null&&(h.return=null),a.return=null}catch(w){Ee(a,r,w)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Hd(r,e),r=r.sibling}function Hd(e,r){var t=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Lr(r,e),Hr(e),o&4){try{ro(3,e,e.return),ii(3,e)}catch(M){Ee(e,e.return,M)}try{ro(5,e,e.return)}catch(M){Ee(e,e.return,M)}}break;case 1:Lr(r,e),Hr(e),o&512&&t!==null&&sn(t,t.return);break;case 5:if(Lr(r,e),Hr(e),o&512&&t!==null&&sn(t,t.return),e.flags&32){var a=e.stateNode;try{kn(a,"")}catch(M){Ee(e,e.return,M)}}if(o&4&&(a=e.stateNode,a!=null)){var s=e.memoizedProps,d=t!==null?t.memoizedProps:s,f=e.type,h=e.updateQueue;if(e.updateQueue=null,h!==null)try{f==="input"&&s.type==="radio"&&s.name!=null&&pl(a,s),Ki(f,d);var w=Ki(f,s);for(d=0;d<h.length;d+=2){var N=h[d],S=h[d+1];N==="style"?wl(a,S):N==="dangerouslySetInnerHTML"?vl(a,S):N==="children"?kn(a,S):ae(a,N,S,w)}switch(f){case"input":Ui(a,s);break;case"textarea":xl(a,s);break;case"select":var j=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!s.multiple;var L=s.value;L!=null?Bt(a,!!s.multiple,L,!1):j!==!!s.multiple&&(s.defaultValue!=null?Bt(a,!!s.multiple,s.defaultValue,!0):Bt(a,!!s.multiple,s.multiple?[]:"",!1))}a[Un]=s}catch(M){Ee(e,e.return,M)}}break;case 6:if(Lr(r,e),Hr(e),o&4){if(e.stateNode===null)throw Error(l(162));a=e.stateNode,s=e.memoizedProps;try{a.nodeValue=s}catch(M){Ee(e,e.return,M)}}break;case 3:if(Lr(r,e),Hr(e),o&4&&t!==null&&t.memoizedState.isDehydrated)try{In(r.containerInfo)}catch(M){Ee(e,e.return,M)}break;case 4:Lr(r,e),Hr(e);break;case 13:Lr(r,e),Hr(e),a=e.child,a.flags&8192&&(s=a.memoizedState!==null,a.stateNode.isHidden=s,!s||a.alternate!==null&&a.alternate.memoizedState!==null||(bs=Pe())),o&4&&Od(e);break;case 22:if(N=t!==null&&t.memoizedState!==null,e.mode&1?(Ge=(w=Ge)||N,Lr(r,e),Ge=w):Lr(r,e),Hr(e),o&8192){if(w=e.memoizedState!==null,(e.stateNode.isHidden=w)&&!N&&(e.mode&1)!==0)for(z=e,N=e.child;N!==null;){for(S=z=N;z!==null;){switch(j=z,L=j.child,j.tag){case 0:case 11:case 14:case 15:ro(4,j,j.return);break;case 1:sn(j,j.return);var $=j.stateNode;if(typeof $.componentWillUnmount=="function"){o=j,t=j.return;try{r=o,$.props=r.memoizedProps,$.state=r.memoizedState,$.componentWillUnmount()}catch(M){Ee(o,t,M)}}break;case 5:sn(j,j.return);break;case 22:if(j.memoizedState!==null){Ad(S);continue}}L!==null?(L.return=j,z=L):Ad(S)}N=N.sibling}e:for(N=null,S=e;;){if(S.tag===5){if(N===null){N=S;try{a=S.stateNode,w?(s=a.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(f=S.stateNode,h=S.memoizedProps.style,d=h!=null&&h.hasOwnProperty("display")?h.display:null,f.style.display=yl("display",d))}catch(M){Ee(e,e.return,M)}}}else if(S.tag===6){if(N===null)try{S.stateNode.nodeValue=w?"":S.memoizedProps}catch(M){Ee(e,e.return,M)}}else if((S.tag!==22&&S.tag!==23||S.memoizedState===null||S===e)&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===e)break e;for(;S.sibling===null;){if(S.return===null||S.return===e)break e;N===S&&(N=null),S=S.return}N===S&&(N=null),S.sibling.return=S.return,S=S.sibling}}break;case 19:Lr(r,e),Hr(e),o&4&&Od(e);break;case 21:break;default:Lr(r,e),Hr(e)}}function Hr(e){var r=e.flags;if(r&2){try{e:{for(var t=e.return;t!==null;){if($d(t)){var o=t;break e}t=t.return}throw Error(l(160))}switch(o.tag){case 5:var a=o.stateNode;o.flags&32&&(kn(a,""),o.flags&=-33);var s=Md(e);vs(e,s,a);break;case 3:case 4:var d=o.stateNode.containerInfo,f=Md(e);gs(e,f,d);break;default:throw Error(l(161))}}catch(h){Ee(e,e.return,h)}e.flags&=-3}r&4096&&(e.flags&=-4097)}function Jf(e,r,t){z=e,Bd(e)}function Bd(e,r,t){for(var o=(e.mode&1)!==0;z!==null;){var a=z,s=a.child;if(a.tag===22&&o){var d=a.memoizedState!==null||oi;if(!d){var f=a.alternate,h=f!==null&&f.memoizedState!==null||Ge;f=oi;var w=Ge;if(oi=d,(Ge=h)&&!w)for(z=a;z!==null;)d=z,h=d.child,d.tag===22&&d.memoizedState!==null?Dd(a):h!==null?(h.return=d,z=h):Dd(a);for(;s!==null;)z=s,Bd(s),s=s.sibling;z=a,oi=f,Ge=w}Fd(e)}else(a.subtreeFlags&8772)!==0&&s!==null?(s.return=a,z=s):Fd(e)}}function Fd(e){for(;z!==null;){var r=z;if((r.flags&8772)!==0){var t=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Ge||ii(5,r);break;case 1:var o=r.stateNode;if(r.flags&4&&!Ge)if(t===null)o.componentDidMount();else{var a=r.elementType===r.type?t.memoizedProps:Pr(r.type,t.memoizedProps);o.componentDidUpdate(a,t.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var s=r.updateQueue;s!==null&&Ac(r,s,o);break;case 3:var d=r.updateQueue;if(d!==null){if(t=null,r.child!==null)switch(r.child.tag){case 5:t=r.child.stateNode;break;case 1:t=r.child.stateNode}Ac(r,d,t)}break;case 5:var f=r.stateNode;if(t===null&&r.flags&4){t=f;var h=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":h.autoFocus&&t.focus();break;case"img":h.src&&(t.src=h.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var w=r.alternate;if(w!==null){var N=w.memoizedState;if(N!==null){var S=N.dehydrated;S!==null&&In(S)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(l(163))}Ge||r.flags&512&&ms(r)}catch(j){Ee(r,r.return,j)}}if(r===e){z=null;break}if(t=r.sibling,t!==null){t.return=r.return,z=t;break}z=r.return}}function Ad(e){for(;z!==null;){var r=z;if(r===e){z=null;break}var t=r.sibling;if(t!==null){t.return=r.return,z=t;break}z=r.return}}function Dd(e){for(;z!==null;){var r=z;try{switch(r.tag){case 0:case 11:case 15:var t=r.return;try{ii(4,r)}catch(h){Ee(r,t,h)}break;case 1:var o=r.stateNode;if(typeof o.componentDidMount=="function"){var a=r.return;try{o.componentDidMount()}catch(h){Ee(r,a,h)}}var s=r.return;try{ms(r)}catch(h){Ee(r,s,h)}break;case 5:var d=r.return;try{ms(r)}catch(h){Ee(r,d,h)}}}catch(h){Ee(r,r.return,h)}if(r===e){z=null;break}var f=r.sibling;if(f!==null){f.return=r.return,z=f;break}z=r.return}}var Zf=Math.ceil,ai=re.ReactCurrentDispatcher,ys=re.ReactCurrentOwner,yr=re.ReactCurrentBatchConfig,de=0,Oe=null,Le=null,De=0,cr=0,ln=it(0),Me=0,to=null,_t=0,si=0,ws=0,no=null,er=null,bs=0,cn=1/0,Yr=null,li=!1,ks=null,ut=null,ci=!1,pt=null,di=0,oo=0,js=null,ui=-1,pi=0;function Ye(){return(de&6)!==0?Pe():ui!==-1?ui:ui=Pe()}function ft(e){return(e.mode&1)===0?1:(de&2)!==0&&De!==0?De&-De:Rf.transition!==null?(pi===0&&(pi=Ml()),pi):(e=ge,e!==0||(e=window.event,e=e===void 0?16:Ul(e.type)),e)}function zr(e,r,t,o){if(50<oo)throw oo=0,js=null,Error(l(185));En(e,t,o),((de&2)===0||e!==Oe)&&(e===Oe&&((de&2)===0&&(si|=t),Me===4&&ht(e,De)),rr(e,o),t===1&&de===0&&(r.mode&1)===0&&(cn=Pe()+500,Fo&&st()))}function rr(e,r){var t=e.callbackNode;Mp(e,r);var o=bo(e,e===Oe?De:0);if(o===0)t!==null&&zl(t),e.callbackNode=null,e.callbackPriority=0;else if(r=o&-o,e.callbackPriority!==r){if(t!=null&&zl(t),r===1)e.tag===0?Mf(Ud.bind(null,e)):Pc(Ud.bind(null,e)),Lf(function(){(de&6)===0&&st()}),t=null;else{switch(Rl(o)){case 1:t=ta;break;case 4:t=Il;break;case 16:t=go;break;case 536870912:t=$l;break;default:t=go}t=Jd(t,Wd.bind(null,e))}e.callbackPriority=r,e.callbackNode=t}}function Wd(e,r){if(ui=-1,pi=0,(de&6)!==0)throw Error(l(327));var t=e.callbackNode;if(dn()&&e.callbackNode!==t)return null;var o=bo(e,e===Oe?De:0);if(o===0)return null;if((o&30)!==0||(o&e.expiredLanes)!==0||r)r=fi(e,o);else{r=o;var a=de;de|=2;var s=Qd();(Oe!==e||De!==r)&&(Yr=null,cn=Pe()+500,zt(e,r));do try{th();break}catch(f){Vd(e,f)}while(!0);Aa(),ai.current=s,de=a,Le!==null?r=0:(Oe=null,De=0,r=Me)}if(r!==0){if(r===2&&(a=na(e),a!==0&&(o=a,r=Ns(e,a))),r===1)throw t=to,zt(e,0),ht(e,o),rr(e,Pe()),t;if(r===6)ht(e,o);else{if(a=e.current.alternate,(o&30)===0&&!eh(a)&&(r=fi(e,o),r===2&&(s=na(e),s!==0&&(o=s,r=Ns(e,s))),r===1))throw t=to,zt(e,0),ht(e,o),rr(e,Pe()),t;switch(e.finishedWork=a,e.finishedLanes=o,r){case 0:case 1:throw Error(l(345));case 2:It(e,er,Yr);break;case 3:if(ht(e,o),(o&130023424)===o&&(r=bs+500-Pe(),10<r)){if(bo(e,0)!==0)break;if(a=e.suspendedLanes,(a&o)!==o){Ye(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=_a(It.bind(null,e,er,Yr),r);break}It(e,er,Yr);break;case 4:if(ht(e,o),(o&4194240)===o)break;for(r=e.eventTimes,a=-1;0<o;){var d=31-Cr(o);s=1<<d,d=r[d],d>a&&(a=d),o&=~s}if(o=a,o=Pe()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*Zf(o/1960))-o,10<o){e.timeoutHandle=_a(It.bind(null,e,er,Yr),o);break}It(e,er,Yr);break;case 5:It(e,er,Yr);break;default:throw Error(l(329))}}}return rr(e,Pe()),e.callbackNode===t?Wd.bind(null,e):null}function Ns(e,r){var t=no;return e.current.memoizedState.isDehydrated&&(zt(e,r).flags|=256),e=fi(e,r),e!==2&&(r=er,er=t,r!==null&&Ss(r)),e}function Ss(e){er===null?er=e:er.push.apply(er,e)}function eh(e){for(var r=e;;){if(r.flags&16384){var t=r.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var o=0;o<t.length;o++){var a=t[o],s=a.getSnapshot;a=a.value;try{if(!Tr(s(),a))return!1}catch{return!1}}}if(t=r.child,r.subtreeFlags&16384&&t!==null)t.return=r,r=t;else{if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function ht(e,r){for(r&=~ws,r&=~si,e.suspendedLanes|=r,e.pingedLanes&=~r,e=e.expirationTimes;0<r;){var t=31-Cr(r),o=1<<t;e[t]=-1,r&=~o}}function Ud(e){if((de&6)!==0)throw Error(l(327));dn();var r=bo(e,0);if((r&1)===0)return rr(e,Pe()),null;var t=fi(e,r);if(e.tag!==0&&t===2){var o=na(e);o!==0&&(r=o,t=Ns(e,o))}if(t===1)throw t=to,zt(e,0),ht(e,r),rr(e,Pe()),t;if(t===6)throw Error(l(345));return e.finishedWork=e.current.alternate,e.finishedLanes=r,It(e,er,Yr),rr(e,Pe()),null}function Cs(e,r){var t=de;de|=1;try{return e(r)}finally{de=t,de===0&&(cn=Pe()+500,Fo&&st())}}function Lt(e){pt!==null&&pt.tag===0&&(de&6)===0&&dn();var r=de;de|=1;var t=yr.transition,o=ge;try{if(yr.transition=null,ge=1,e)return e()}finally{ge=o,yr.transition=t,de=r,(de&6)===0&&st()}}function Ts(){cr=ln.current,be(ln)}function zt(e,r){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,_f(t)),Le!==null)for(t=Le.return;t!==null;){var o=t;switch(Ra(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&Ho();break;case 3:on(),be(Xe),be(Ue),Ka();break;case 5:Ga(o);break;case 4:on();break;case 13:be(Ne);break;case 19:be(Ne);break;case 10:Da(o.type._context);break;case 22:case 23:Ts()}t=t.return}if(Oe=e,Le=e=xt(e.current,null),De=cr=r,Me=0,to=null,ws=si=_t=0,er=no=null,Tt!==null){for(r=0;r<Tt.length;r++)if(t=Tt[r],o=t.interleaved,o!==null){t.interleaved=null;var a=o.next,s=t.pending;if(s!==null){var d=s.next;s.next=a,o.next=d}t.pending=o}Tt=null}return e}function Vd(e,r){do{var t=Le;try{if(Aa(),Yo.current=ei,Xo){for(var o=Se.memoizedState;o!==null;){var a=o.queue;a!==null&&(a.pending=null),o=o.next}Xo=!1}if(Pt=0,Re=$e=Se=null,Yn=!1,Xn=0,ys.current=null,t===null||t.return===null){Me=1,to=r,Le=null;break}e:{var s=e,d=t.return,f=t,h=r;if(r=De,f.flags|=32768,h!==null&&typeof h=="object"&&typeof h.then=="function"){var w=h,N=f,S=N.tag;if((N.mode&1)===0&&(S===0||S===11||S===15)){var j=N.alternate;j?(N.updateQueue=j.updateQueue,N.memoizedState=j.memoizedState,N.lanes=j.lanes):(N.updateQueue=null,N.memoizedState=null)}var L=md(d);if(L!==null){L.flags&=-257,gd(L,d,f,s,r),L.mode&1&&xd(s,w,r),r=L,h=w;var $=r.updateQueue;if($===null){var M=new Set;M.add(h),r.updateQueue=M}else $.add(h);break e}else{if((r&1)===0){xd(s,w,r),Es();break e}h=Error(l(426))}}else if(je&&f.mode&1){var _e=md(d);if(_e!==null){(_e.flags&65536)===0&&(_e.flags|=256),gd(_e,d,f,s,r),Ba(an(h,f));break e}}s=h=an(h,f),Me!==4&&(Me=2),no===null?no=[s]:no.push(s),s=d;do{switch(s.tag){case 3:s.flags|=65536,r&=-r,s.lanes|=r;var g=fd(s,h,r);Fc(s,g);break e;case 1:f=h;var x=s.type,y=s.stateNode;if((s.flags&128)===0&&(typeof x.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(ut===null||!ut.has(y)))){s.flags|=65536,r&=-r,s.lanes|=r;var C=hd(s,f,r);Fc(s,C);break e}}s=s.return}while(s!==null)}qd(t)}catch(R){r=R,Le===t&&t!==null&&(Le=t=t.return);continue}break}while(!0)}function Qd(){var e=ai.current;return ai.current=ei,e===null?ei:e}function Es(){(Me===0||Me===3||Me===2)&&(Me=4),Oe===null||(_t&268435455)===0&&(si&268435455)===0||ht(Oe,De)}function fi(e,r){var t=de;de|=2;var o=Qd();(Oe!==e||De!==r)&&(Yr=null,zt(e,r));do try{rh();break}catch(a){Vd(e,a)}while(!0);if(Aa(),de=t,ai.current=o,Le!==null)throw Error(l(261));return Oe=null,De=0,Me}function rh(){for(;Le!==null;)Gd(Le)}function th(){for(;Le!==null&&!Cp();)Gd(Le)}function Gd(e){var r=Xd(e.alternate,e,cr);e.memoizedProps=e.pendingProps,r===null?qd(e):Le=r,ys.current=null}function qd(e){var r=e;do{var t=r.alternate;if(e=r.return,(r.flags&32768)===0){if(t=qf(t,r,cr),t!==null){Le=t;return}}else{if(t=Kf(t,r),t!==null){t.flags&=32767,Le=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Me=6,Le=null;return}}if(r=r.sibling,r!==null){Le=r;return}Le=r=e}while(r!==null);Me===0&&(Me=5)}function It(e,r,t){var o=ge,a=yr.transition;try{yr.transition=null,ge=1,nh(e,r,t,o)}finally{yr.transition=a,ge=o}return null}function nh(e,r,t,o){do dn();while(pt!==null);if((de&6)!==0)throw Error(l(327));t=e.finishedWork;var a=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(l(177));e.callbackNode=null,e.callbackPriority=0;var s=t.lanes|t.childLanes;if(Rp(e,s),e===Oe&&(Le=Oe=null,De=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||ci||(ci=!0,Jd(go,function(){return dn(),null})),s=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||s){s=yr.transition,yr.transition=null;var d=ge;ge=1;var f=de;de|=4,ys.current=null,Xf(e,t),Hd(t,e),jf(Ea),No=!!Ta,Ea=Ta=null,e.current=t,Jf(t),Tp(),de=f,ge=d,yr.transition=s}else e.current=t;if(ci&&(ci=!1,pt=e,di=a),s=e.pendingLanes,s===0&&(ut=null),_p(t.stateNode),rr(e,Pe()),r!==null)for(o=e.onRecoverableError,t=0;t<r.length;t++)a=r[t],o(a.value,{componentStack:a.stack,digest:a.digest});if(li)throw li=!1,e=ks,ks=null,e;return(di&1)!==0&&e.tag!==0&&dn(),s=e.pendingLanes,(s&1)!==0?e===js?oo++:(oo=0,js=e):oo=0,st(),null}function dn(){if(pt!==null){var e=Rl(di),r=yr.transition,t=ge;try{if(yr.transition=null,ge=16>e?16:e,pt===null)var o=!1;else{if(e=pt,pt=null,di=0,(de&6)!==0)throw Error(l(331));var a=de;for(de|=4,z=e.current;z!==null;){var s=z,d=s.child;if((z.flags&16)!==0){var f=s.deletions;if(f!==null){for(var h=0;h<f.length;h++){var w=f[h];for(z=w;z!==null;){var N=z;switch(N.tag){case 0:case 11:case 15:ro(8,N,s)}var S=N.child;if(S!==null)S.return=N,z=S;else for(;z!==null;){N=z;var j=N.sibling,L=N.return;if(Id(N),N===w){z=null;break}if(j!==null){j.return=L,z=j;break}z=L}}}var $=s.alternate;if($!==null){var M=$.child;if(M!==null){$.child=null;do{var _e=M.sibling;M.sibling=null,M=_e}while(M!==null)}}z=s}}if((s.subtreeFlags&2064)!==0&&d!==null)d.return=s,z=d;else e:for(;z!==null;){if(s=z,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:ro(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,z=g;break e}z=s.return}}var x=e.current;for(z=x;z!==null;){d=z;var y=d.child;if((d.subtreeFlags&2064)!==0&&y!==null)y.return=d,z=y;else e:for(d=x;z!==null;){if(f=z,(f.flags&2048)!==0)try{switch(f.tag){case 0:case 11:case 15:ii(9,f)}}catch(R){Ee(f,f.return,R)}if(f===d){z=null;break e}var C=f.sibling;if(C!==null){C.return=f.return,z=C;break e}z=f.return}}if(de=a,st(),$r&&typeof $r.onPostCommitFiberRoot=="function")try{$r.onPostCommitFiberRoot(vo,e)}catch{}o=!0}return o}finally{ge=t,yr.transition=r}}return!1}function Kd(e,r,t){r=an(t,r),r=fd(e,r,1),e=ct(e,r,1),r=Ye(),e!==null&&(En(e,1,r),rr(e,r))}function Ee(e,r,t){if(e.tag===3)Kd(e,e,t);else for(;r!==null;){if(r.tag===3){Kd(r,e,t);break}else if(r.tag===1){var o=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ut===null||!ut.has(o))){e=an(t,e),e=hd(r,e,1),r=ct(r,e,1),e=Ye(),r!==null&&(En(r,1,e),rr(r,e));break}}r=r.return}}function oh(e,r,t){var o=e.pingCache;o!==null&&o.delete(r),r=Ye(),e.pingedLanes|=e.suspendedLanes&t,Oe===e&&(De&t)===t&&(Me===4||Me===3&&(De&130023424)===De&&500>Pe()-bs?zt(e,0):ws|=t),rr(e,r)}function Yd(e,r){r===0&&((e.mode&1)===0?r=1:(r=wo,wo<<=1,(wo&130023424)===0&&(wo=4194304)));var t=Ye();e=Gr(e,r),e!==null&&(En(e,r,t),rr(e,t))}function ih(e){var r=e.memoizedState,t=0;r!==null&&(t=r.retryLane),Yd(e,t)}function ah(e,r){var t=0;switch(e.tag){case 13:var o=e.stateNode,a=e.memoizedState;a!==null&&(t=a.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(l(314))}o!==null&&o.delete(r),Yd(e,t)}var Xd;Xd=function(e,r,t){if(e!==null)if(e.memoizedProps!==r.pendingProps||Xe.current)Ze=!0;else{if((e.lanes&t)===0&&(r.flags&128)===0)return Ze=!1,Gf(e,r,t);Ze=(e.flags&131072)!==0}else Ze=!1,je&&(r.flags&1048576)!==0&&_c(r,Do,r.index);switch(r.lanes=0,r.tag){case 2:var o=r.type;ni(e,r),e=r.pendingProps;var a=Xt(r,Ue.current);nn(r,t),a=Ja(null,r,o,e,a,t);var s=Za();return r.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Je(o)?(s=!0,Bo(r)):s=!1,r.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Va(r),a.updater=ri,r.stateNode=a,a._reactInternals=r,is(r,o,e,t),r=cs(null,r,o,!0,s,t)):(r.tag=0,je&&s&&Ma(r),Ke(null,r,a,t),r=r.child),r;case 16:o=r.elementType;e:{switch(ni(e,r),e=r.pendingProps,a=o._init,o=a(o._payload),r.type=o,a=r.tag=lh(o),e=Pr(o,e),a){case 0:r=ls(null,r,o,e,t);break e;case 1:r=jd(null,r,o,e,t);break e;case 11:r=vd(null,r,o,e,t);break e;case 14:r=yd(null,r,o,Pr(o.type,e),t);break e}throw Error(l(306,o,""))}return r;case 0:return o=r.type,a=r.pendingProps,a=r.elementType===o?a:Pr(o,a),ls(e,r,o,a,t);case 1:return o=r.type,a=r.pendingProps,a=r.elementType===o?a:Pr(o,a),jd(e,r,o,a,t);case 3:e:{if(Nd(r),e===null)throw Error(l(387));o=r.pendingProps,s=r.memoizedState,a=s.element,Bc(e,r),qo(r,o,null,t);var d=r.memoizedState;if(o=d.element,s.isDehydrated)if(s={element:o,isDehydrated:!1,cache:d.cache,pendingSuspenseBoundaries:d.pendingSuspenseBoundaries,transitions:d.transitions},r.updateQueue.baseState=s,r.memoizedState=s,r.flags&256){a=an(Error(l(423)),r),r=Sd(e,r,o,t,a);break e}else if(o!==a){a=an(Error(l(424)),r),r=Sd(e,r,o,t,a);break e}else for(lr=ot(r.stateNode.containerInfo.firstChild),sr=r,je=!0,Er=null,t=Oc(r,null,o,t),r.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(en(),o===a){r=Kr(e,r,t);break e}Ke(e,r,o,t)}r=r.child}return r;case 5:return Dc(r),e===null&&Ha(r),o=r.type,a=r.pendingProps,s=e!==null?e.memoizedProps:null,d=a.children,Pa(o,a)?d=null:s!==null&&Pa(o,s)&&(r.flags|=32),kd(e,r),Ke(e,r,d,t),r.child;case 6:return e===null&&Ha(r),null;case 13:return Cd(e,r,t);case 4:return Qa(r,r.stateNode.containerInfo),o=r.pendingProps,e===null?r.child=rn(r,null,o,t):Ke(e,r,o,t),r.child;case 11:return o=r.type,a=r.pendingProps,a=r.elementType===o?a:Pr(o,a),vd(e,r,o,a,t);case 7:return Ke(e,r,r.pendingProps,t),r.child;case 8:return Ke(e,r,r.pendingProps.children,t),r.child;case 12:return Ke(e,r,r.pendingProps.children,t),r.child;case 10:e:{if(o=r.type._context,a=r.pendingProps,s=r.memoizedProps,d=a.value,ye(Vo,o._currentValue),o._currentValue=d,s!==null)if(Tr(s.value,d)){if(s.children===a.children&&!Xe.current){r=Kr(e,r,t);break e}}else for(s=r.child,s!==null&&(s.return=r);s!==null;){var f=s.dependencies;if(f!==null){d=s.child;for(var h=f.firstContext;h!==null;){if(h.context===o){if(s.tag===1){h=qr(-1,t&-t),h.tag=2;var w=s.updateQueue;if(w!==null){w=w.shared;var N=w.pending;N===null?h.next=h:(h.next=N.next,N.next=h),w.pending=h}}s.lanes|=t,h=s.alternate,h!==null&&(h.lanes|=t),Wa(s.return,t,r),f.lanes|=t;break}h=h.next}}else if(s.tag===10)d=s.type===r.type?null:s.child;else if(s.tag===18){if(d=s.return,d===null)throw Error(l(341));d.lanes|=t,f=d.alternate,f!==null&&(f.lanes|=t),Wa(d,t,r),d=s.sibling}else d=s.child;if(d!==null)d.return=s;else for(d=s;d!==null;){if(d===r){d=null;break}if(s=d.sibling,s!==null){s.return=d.return,d=s;break}d=d.return}s=d}Ke(e,r,a.children,t),r=r.child}return r;case 9:return a=r.type,o=r.pendingProps.children,nn(r,t),a=gr(a),o=o(a),r.flags|=1,Ke(e,r,o,t),r.child;case 14:return o=r.type,a=Pr(o,r.pendingProps),a=Pr(o.type,a),yd(e,r,o,a,t);case 15:return wd(e,r,r.type,r.pendingProps,t);case 17:return o=r.type,a=r.pendingProps,a=r.elementType===o?a:Pr(o,a),ni(e,r),r.tag=1,Je(o)?(e=!0,Bo(r)):e=!1,nn(r,t),ud(r,o,a),is(r,o,a,t),cs(null,r,o,!0,e,t);case 19:return Ed(e,r,t);case 22:return bd(e,r,t)}throw Error(l(156,r.tag))};function Jd(e,r){return Ll(e,r)}function sh(e,r,t,o){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wr(e,r,t,o){return new sh(e,r,t,o)}function Ps(e){return e=e.prototype,!(!e||!e.isReactComponent)}function lh(e){if(typeof e=="function")return Ps(e)?1:0;if(e!=null){if(e=e.$$typeof,e===fr)return 11;if(e===hr)return 14}return 2}function xt(e,r){var t=e.alternate;return t===null?(t=wr(e.tag,r,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=r,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,r=e.dependencies,t.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function hi(e,r,t,o,a,s){var d=2;if(o=e,typeof e=="function")Ps(e)&&(d=1);else if(typeof e=="string")d=5;else e:switch(e){case D:return $t(t.children,a,s,r);case Ie:d=8,a|=8;break;case or:return e=wr(12,t,r,a|2),e.elementType=or,e.lanes=s,e;case qe:return e=wr(13,t,r,a),e.elementType=qe,e.lanes=s,e;case ir:return e=wr(19,t,r,a),e.elementType=ir,e.lanes=s,e;case ve:return xi(t,a,s,r);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Nr:d=10;break e;case Ar:d=9;break e;case fr:d=11;break e;case hr:d=14;break e;case We:d=16,o=null;break e}throw Error(l(130,e==null?e:typeof e,""))}return r=wr(d,t,r,a),r.elementType=e,r.type=o,r.lanes=s,r}function $t(e,r,t,o){return e=wr(7,e,o,r),e.lanes=t,e}function xi(e,r,t,o){return e=wr(22,e,o,r),e.elementType=ve,e.lanes=t,e.stateNode={isHidden:!1},e}function _s(e,r,t){return e=wr(6,e,null,r),e.lanes=t,e}function Ls(e,r,t){return r=wr(4,e.children!==null?e.children:[],e.key,r),r.lanes=t,r.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},r}function ch(e,r,t,o,a){this.tag=r,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=oa(0),this.expirationTimes=oa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=oa(0),this.identifierPrefix=o,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function zs(e,r,t,o,a,s,d,f,h){return e=new ch(e,r,t,f,h),r===1?(r=1,s===!0&&(r|=8)):r=0,s=wr(3,null,null,r),e.current=s,s.stateNode=e,s.memoizedState={element:o,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Va(s),e}function dh(e,r,t){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:K,key:o==null?null:""+o,children:e,containerInfo:r,implementation:t}}function Zd(e){if(!e)return at;e=e._reactInternals;e:{if(kt(e)!==e||e.tag!==1)throw Error(l(170));var r=e;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Je(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(l(171))}if(e.tag===1){var t=e.type;if(Je(t))return Tc(e,t,r)}return r}function eu(e,r,t,o,a,s,d,f,h){return e=zs(t,o,!0,e,a,s,d,f,h),e.context=Zd(null),t=e.current,o=Ye(),a=ft(t),s=qr(o,a),s.callback=r!=null?r:null,ct(t,s,a),e.current.lanes=a,En(e,a,o),rr(e,o),e}function mi(e,r,t,o){var a=r.current,s=Ye(),d=ft(a);return t=Zd(t),r.context===null?r.context=t:r.pendingContext=t,r=qr(s,d),r.payload={element:e},o=o===void 0?null:o,o!==null&&(r.callback=o),e=ct(a,r,d),e!==null&&(zr(e,a,d,s),Go(e,a,d)),d}function gi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ru(e,r){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<r?t:r}}function Is(e,r){ru(e,r),(e=e.alternate)&&ru(e,r)}function uh(){return null}var tu=typeof reportError=="function"?reportError:function(e){console.error(e)};function $s(e){this._internalRoot=e}vi.prototype.render=$s.prototype.render=function(e){var r=this._internalRoot;if(r===null)throw Error(l(409));mi(e,r,null,null)},vi.prototype.unmount=$s.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var r=e.containerInfo;Lt(function(){mi(null,e,null,null)}),r[Wr]=null}};function vi(e){this._internalRoot=e}vi.prototype.unstable_scheduleHydration=function(e){if(e){var r=Bl();e={blockedOn:null,target:e,priority:r};for(var t=0;t<rt.length&&r!==0&&r<rt[t].priority;t++);rt.splice(t,0,e),t===0&&Dl(e)}};function Ms(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function yi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function nu(){}function ph(e,r,t,o,a){if(a){if(typeof o=="function"){var s=o;o=function(){var w=gi(d);s.call(w)}}var d=eu(r,o,e,0,null,!1,!1,"",nu);return e._reactRootContainer=d,e[Wr]=d.current,Dn(e.nodeType===8?e.parentNode:e),Lt(),d}for(;a=e.lastChild;)e.removeChild(a);if(typeof o=="function"){var f=o;o=function(){var w=gi(h);f.call(w)}}var h=zs(e,0,!1,null,null,!1,!1,"",nu);return e._reactRootContainer=h,e[Wr]=h.current,Dn(e.nodeType===8?e.parentNode:e),Lt(function(){mi(r,h,t,o)}),h}function wi(e,r,t,o,a){var s=t._reactRootContainer;if(s){var d=s;if(typeof a=="function"){var f=a;a=function(){var h=gi(d);f.call(h)}}mi(r,d,e,a)}else d=ph(t,r,e,a,o);return gi(d)}Ol=function(e){switch(e.tag){case 3:var r=e.stateNode;if(r.current.memoizedState.isDehydrated){var t=Tn(r.pendingLanes);t!==0&&(ia(r,t|1),rr(r,Pe()),(de&6)===0&&(cn=Pe()+500,st()))}break;case 13:Lt(function(){var o=Gr(e,1);if(o!==null){var a=Ye();zr(o,e,1,a)}}),Is(e,1)}},aa=function(e){if(e.tag===13){var r=Gr(e,134217728);if(r!==null){var t=Ye();zr(r,e,134217728,t)}Is(e,134217728)}},Hl=function(e){if(e.tag===13){var r=ft(e),t=Gr(e,r);if(t!==null){var o=Ye();zr(t,e,r,o)}Is(e,r)}},Bl=function(){return ge},Fl=function(e,r){var t=ge;try{return ge=e,r()}finally{ge=t}},Ji=function(e,r,t){switch(r){case"input":if(Ui(e,t),r=t.name,t.type==="radio"&&r!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<t.length;r++){var o=t[r];if(o!==e&&o.form===e.form){var a=Oo(o);if(!a)throw Error(l(90));Sr(o),Ui(o,a)}}}break;case"textarea":xl(e,t);break;case"select":r=t.value,r!=null&&Bt(e,!!t.multiple,r,!1)}},Nl=Cs,Sl=Lt;var fh={usingClientEntryPoint:!1,Events:[Vn,Kt,Oo,kl,jl,Cs]},io={findFiberByHostInstance:jt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},hh={bundleType:io.bundleType,version:io.version,rendererPackageName:io.rendererPackageName,rendererConfig:io.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:re.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Pl(e),e===null?null:e.stateNode},findFiberByHostInstance:io.findFiberByHostInstance||uh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var bi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bi.isDisabled&&bi.supportsFiber)try{vo=bi.inject(hh),$r=bi}catch{}}return tr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fh,tr.createPortal=function(e,r){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ms(r))throw Error(l(200));return dh(e,r,null,t)},tr.createRoot=function(e,r){if(!Ms(e))throw Error(l(299));var t=!1,o="",a=tu;return r!=null&&(r.unstable_strictMode===!0&&(t=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(a=r.onRecoverableError)),r=zs(e,1,!1,null,null,t,!1,o,a),e[Wr]=r.current,Dn(e.nodeType===8?e.parentNode:e),new $s(r)},tr.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var r=e._reactInternals;if(r===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=Pl(r),e=e===null?null:e.stateNode,e},tr.flushSync=function(e){return Lt(e)},tr.hydrate=function(e,r,t){if(!yi(r))throw Error(l(200));return wi(null,e,r,!0,t)},tr.hydrateRoot=function(e,r,t){if(!Ms(e))throw Error(l(405));var o=t!=null&&t.hydratedSources||null,a=!1,s="",d=tu;if(t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(d=t.onRecoverableError)),r=eu(r,null,e,1,t!=null?t:null,a,!1,s,d),e[Wr]=r.current,Dn(e),o)for(e=0;e<o.length;e++)t=o[e],a=t._getVersion,a=a(t._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[t,a]:r.mutableSourceEagerHydrationData.push(t,a);return new vi(r)},tr.render=function(e,r,t){if(!yi(r))throw Error(l(200));return wi(null,e,r,!1,t)},tr.unmountComponentAtNode=function(e){if(!yi(e))throw Error(l(40));return e._reactRootContainer?(Lt(function(){wi(null,null,e,!1,function(){e._reactRootContainer=null,e[Wr]=null})}),!0):!1},tr.unstable_batchedUpdates=Cs,tr.unstable_renderSubtreeIntoContainer=function(e,r,t,o){if(!yi(t))throw Error(l(200));if(e==null||e._reactInternals===void 0)throw Error(l(38));return wi(e,r,t,!1,o)},tr.version="18.3.1-next-f1338f8080-20240426",tr}var uu;function jh(){if(uu)return Hs.exports;uu=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(c){console.error(c)}}return i(),Hs.exports=kh(),Hs.exports}var pu;function Nh(){if(pu)return ki;pu=1;var i=jh();return ki.createRoot=i.createRoot,ki.hydrateRoot=i.hydrateRoot,ki}var Sh=Nh(),nr=function(){return nr=Object.assign||function(c){for(var l,p=1,u=arguments.length;p<u;p++){l=arguments[p];for(var v in l)Object.prototype.hasOwnProperty.call(l,v)&&(c[v]=l[v])}return c},nr.apply(this,arguments)};function _i(i,c,l){if(l||arguments.length===2)for(var p=0,u=c.length,v;p<u;p++)(v||!(p in c))&&(v||(v=Array.prototype.slice.call(c,0,p)),v[p]=c[p]);return i.concat(v||Array.prototype.slice.call(c))}var W=tl();const kr=mh(W);var ke="-ms-",lo="-moz-",me="-webkit-",Mu="comm",Oi="rule",nl="decl",Ch="@import",Ru="@keyframes",Th="@layer",Ou=Math.abs,ol=String.fromCharCode,Gs=Object.assign;function Eh(i,c){return Be(i,0)^45?(((c<<2^Be(i,0))<<2^Be(i,1))<<2^Be(i,2))<<2^Be(i,3):0}function Hu(i){return i.trim()}function Xr(i,c){return(i=c.exec(i))?i[0]:i}function Z(i,c,l){return i.replace(c,l)}function Si(i,c,l){return i.indexOf(c,l)}function Be(i,c){return i.charCodeAt(c)|0}function hn(i,c,l){return i.slice(c,l)}function Fr(i){return i.length}function Bu(i){return i.length}function so(i,c){return c.push(i),i}function Ph(i,c){return i.map(c).join("")}function fu(i,c){return i.filter(function(l){return!Xr(l,c)})}var Hi=1,xn=1,Fu=0,jr=0,ze=0,wn="";function Bi(i,c,l,p,u,v,k,I){return{value:i,root:c,parent:l,type:p,props:u,children:v,line:Hi,column:xn,length:k,return:"",siblings:I}}function gt(i,c){return Gs(Bi("",null,null,"",null,null,0,i.siblings),i,{length:-i.length},c)}function un(i){for(;i.root;)i=gt(i.root,{children:[i]});so(i,i.siblings)}function _h(){return ze}function Lh(){return ze=jr>0?Be(wn,--jr):0,xn--,ze===10&&(xn=1,Hi--),ze}function Ir(){return ze=jr<Fu?Be(wn,jr++):0,xn++,ze===10&&(xn=1,Hi++),ze}function Rt(){return Be(wn,jr)}function Ci(){return jr}function Fi(i,c){return hn(wn,i,c)}function qs(i){switch(i){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function zh(i){return Hi=xn=1,Fu=Fr(wn=i),jr=0,[]}function Ih(i){return wn="",i}function As(i){return Hu(Fi(jr-1,Ks(i===91?i+2:i===40?i+1:i)))}function $h(i){for(;(ze=Rt())&&ze<33;)Ir();return qs(i)>2||qs(ze)>3?"":" "}function Mh(i,c){for(;--c&&Ir()&&!(ze<48||ze>102||ze>57&&ze<65||ze>70&&ze<97););return Fi(i,Ci()+(c<6&&Rt()==32&&Ir()==32))}function Ks(i){for(;Ir();)switch(ze){case i:return jr;case 34:case 39:i!==34&&i!==39&&Ks(ze);break;case 40:i===41&&Ks(i);break;case 92:Ir();break}return jr}function Rh(i,c){for(;Ir()&&i+ze!==57;)if(i+ze===84&&Rt()===47)break;return"/*"+Fi(c,jr-1)+"*"+ol(i===47?i:Ir())}function Oh(i){for(;!qs(Rt());)Ir();return Fi(i,jr)}function Hh(i){return Ih(Ti("",null,null,null,[""],i=zh(i),0,[0],i))}function Ti(i,c,l,p,u,v,k,I,T){for(var G=0,V=0,H=k,B=0,q=0,ie=0,Q=1,X=1,xe=1,ce=0,ae="",re=u,fe=v,K=p,D=ae;X;)switch(ie=ce,ce=Ir()){case 40:if(ie!=108&&Be(D,H-1)==58){Si(D+=Z(As(ce),"&","&\f"),"&\f",Ou(G?I[G-1]:0))!=-1&&(xe=-1);break}case 34:case 39:case 91:D+=As(ce);break;case 9:case 10:case 13:case 32:D+=$h(ie);break;case 92:D+=Mh(Ci()-1,7);continue;case 47:switch(Rt()){case 42:case 47:so(Bh(Rh(Ir(),Ci()),c,l,T),T);break;default:D+="/"}break;case 123*Q:I[G++]=Fr(D)*xe;case 125*Q:case 59:case 0:switch(ce){case 0:case 125:X=0;case 59+V:xe==-1&&(D=Z(D,/\f/g,"")),q>0&&Fr(D)-H&&so(q>32?xu(D+";",p,l,H-1,T):xu(Z(D," ","")+";",p,l,H-2,T),T);break;case 59:D+=";";default:if(so(K=hu(D,c,l,G,V,u,I,ae,re=[],fe=[],H,v),v),ce===123)if(V===0)Ti(D,c,K,K,re,v,H,I,fe);else switch(B===99&&Be(D,3)===110?100:B){case 100:case 108:case 109:case 115:Ti(i,K,K,p&&so(hu(i,K,K,0,0,u,I,ae,u,re=[],H,fe),fe),u,fe,H,I,p?re:fe);break;default:Ti(D,K,K,K,[""],fe,0,I,fe)}}G=V=q=0,Q=xe=1,ae=D="",H=k;break;case 58:H=1+Fr(D),q=ie;default:if(Q<1){if(ce==123)--Q;else if(ce==125&&Q++==0&&Lh()==125)continue}switch(D+=ol(ce),ce*Q){case 38:xe=V>0?1:(D+="\f",-1);break;case 44:I[G++]=(Fr(D)-1)*xe,xe=1;break;case 64:Rt()===45&&(D+=As(Ir())),B=Rt(),V=H=Fr(ae=D+=Oh(Ci())),ce++;break;case 45:ie===45&&Fr(D)==2&&(Q=0)}}return v}function hu(i,c,l,p,u,v,k,I,T,G,V,H){for(var B=u-1,q=u===0?v:[""],ie=Bu(q),Q=0,X=0,xe=0;Q<p;++Q)for(var ce=0,ae=hn(i,B+1,B=Ou(X=k[Q])),re=i;ce<ie;++ce)(re=Hu(X>0?q[ce]+" "+ae:Z(ae,/&\f/g,q[ce])))&&(T[xe++]=re);return Bi(i,c,l,u===0?Oi:I,T,G,V,H)}function Bh(i,c,l,p){return Bi(i,c,l,Mu,ol(_h()),hn(i,2,-2),0,p)}function xu(i,c,l,p,u){return Bi(i,c,l,nl,hn(i,0,p),hn(i,p+1,-1),p,u)}function Au(i,c,l){switch(Eh(i,c)){case 5103:return me+"print-"+i+i;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return me+i+i;case 4789:return lo+i+i;case 5349:case 4246:case 4810:case 6968:case 2756:return me+i+lo+i+ke+i+i;case 5936:switch(Be(i,c+11)){case 114:return me+i+ke+Z(i,/[svh]\w+-[tblr]{2}/,"tb")+i;case 108:return me+i+ke+Z(i,/[svh]\w+-[tblr]{2}/,"tb-rl")+i;case 45:return me+i+ke+Z(i,/[svh]\w+-[tblr]{2}/,"lr")+i}case 6828:case 4268:case 2903:return me+i+ke+i+i;case 6165:return me+i+ke+"flex-"+i+i;case 5187:return me+i+Z(i,/(\w+).+(:[^]+)/,me+"box-$1$2"+ke+"flex-$1$2")+i;case 5443:return me+i+ke+"flex-item-"+Z(i,/flex-|-self/g,"")+(Xr(i,/flex-|baseline/)?"":ke+"grid-row-"+Z(i,/flex-|-self/g,""))+i;case 4675:return me+i+ke+"flex-line-pack"+Z(i,/align-content|flex-|-self/g,"")+i;case 5548:return me+i+ke+Z(i,"shrink","negative")+i;case 5292:return me+i+ke+Z(i,"basis","preferred-size")+i;case 6060:return me+"box-"+Z(i,"-grow","")+me+i+ke+Z(i,"grow","positive")+i;case 4554:return me+Z(i,/([^-])(transform)/g,"$1"+me+"$2")+i;case 6187:return Z(Z(Z(i,/(zoom-|grab)/,me+"$1"),/(image-set)/,me+"$1"),i,"")+i;case 5495:case 3959:return Z(i,/(image-set\([^]*)/,me+"$1$`$1");case 4968:return Z(Z(i,/(.+:)(flex-)?(.*)/,me+"box-pack:$3"+ke+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+me+i+i;case 4200:if(!Xr(i,/flex-|baseline/))return ke+"grid-column-align"+hn(i,c)+i;break;case 2592:case 3360:return ke+Z(i,"template-","")+i;case 4384:case 3616:return l&&l.some(function(p,u){return c=u,Xr(p.props,/grid-\w+-end/)})?~Si(i+(l=l[c].value),"span",0)?i:ke+Z(i,"-start","")+i+ke+"grid-row-span:"+(~Si(l,"span",0)?Xr(l,/\d+/):+Xr(l,/\d+/)-+Xr(i,/\d+/))+";":ke+Z(i,"-start","")+i;case 4896:case 4128:return l&&l.some(function(p){return Xr(p.props,/grid-\w+-start/)})?i:ke+Z(Z(i,"-end","-span"),"span ","")+i;case 4095:case 3583:case 4068:case 2532:return Z(i,/(.+)-inline(.+)/,me+"$1$2")+i;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Fr(i)-1-c>6)switch(Be(i,c+1)){case 109:if(Be(i,c+4)!==45)break;case 102:return Z(i,/(.+:)(.+)-([^]+)/,"$1"+me+"$2-$3$1"+lo+(Be(i,c+3)==108?"$3":"$2-$3"))+i;case 115:return~Si(i,"stretch",0)?Au(Z(i,"stretch","fill-available"),c,l)+i:i}break;case 5152:case 5920:return Z(i,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(p,u,v,k,I,T,G){return ke+u+":"+v+G+(k?ke+u+"-span:"+(I?T:+T-+v)+G:"")+i});case 4949:if(Be(i,c+6)===121)return Z(i,":",":"+me)+i;break;case 6444:switch(Be(i,Be(i,14)===45?18:11)){case 120:return Z(i,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+me+(Be(i,14)===45?"inline-":"")+"box$3$1"+me+"$2$3$1"+ke+"$2box$3")+i;case 100:return Z(i,":",":"+ke)+i}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Z(i,"scroll-","scroll-snap-")+i}return i}function Li(i,c){for(var l="",p=0;p<i.length;p++)l+=c(i[p],p,i,c)||"";return l}function Fh(i,c,l,p){switch(i.type){case Th:if(i.children.length)break;case Ch:case nl:return i.return=i.return||i.value;case Mu:return"";case Ru:return i.return=i.value+"{"+Li(i.children,p)+"}";case Oi:if(!Fr(i.value=i.props.join(",")))return""}return Fr(l=Li(i.children,p))?i.return=i.value+"{"+l+"}":""}function Ah(i){var c=Bu(i);return function(l,p,u,v){for(var k="",I=0;I<c;I++)k+=i[I](l,p,u,v)||"";return k}}function Dh(i){return function(c){c.root||(c=c.return)&&i(c)}}function Wh(i,c,l,p){if(i.length>-1&&!i.return)switch(i.type){case nl:i.return=Au(i.value,i.length,l);return;case Ru:return Li([gt(i,{value:Z(i.value,"@","@"+me)})],p);case Oi:if(i.length)return Ph(l=i.props,function(u){switch(Xr(u,p=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":un(gt(i,{props:[Z(u,/:(read-\w+)/,":"+lo+"$1")]})),un(gt(i,{props:[u]})),Gs(i,{props:fu(l,p)});break;case"::placeholder":un(gt(i,{props:[Z(u,/:(plac\w+)/,":"+me+"input-$1")]})),un(gt(i,{props:[Z(u,/:(plac\w+)/,":"+lo+"$1")]})),un(gt(i,{props:[Z(u,/:(plac\w+)/,ke+"input-$1")]})),un(gt(i,{props:[u]})),Gs(i,{props:fu(l,p)});break}return""})}}var Uh={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},dr={},mn=typeof process!="undefined"&&dr!==void 0&&(dr.REACT_APP_SC_ATTR||dr.SC_ATTR)||"data-styled",Du="active",Wu="data-styled-version",Ai="6.1.18",il=`/*!sc*/
`,zi=typeof window!="undefined"&&typeof document!="undefined",Vh=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&dr!==void 0&&dr.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&dr.REACT_APP_SC_DISABLE_SPEEDY!==""?dr.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&dr.REACT_APP_SC_DISABLE_SPEEDY:typeof process!="undefined"&&dr!==void 0&&dr.SC_DISABLE_SPEEDY!==void 0&&dr.SC_DISABLE_SPEEDY!==""&&dr.SC_DISABLE_SPEEDY!=="false"&&dr.SC_DISABLE_SPEEDY),Di=Object.freeze([]),gn=Object.freeze({});function Qh(i,c,l){return l===void 0&&(l=gn),i.theme!==l.theme&&i.theme||c||l.theme}var Uu=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Gh=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,qh=/(^-|-$)/g;function mu(i){return i.replace(Gh,"-").replace(qh,"")}var Kh=/(a)(d)/gi,ji=52,gu=function(i){return String.fromCharCode(i+(i>25?39:97))};function Ys(i){var c,l="";for(c=Math.abs(i);c>ji;c=c/ji|0)l=gu(c%ji)+l;return(gu(c%ji)+l).replace(Kh,"$1-$2")}var Ds,Vu=5381,pn=function(i,c){for(var l=c.length;l;)i=33*i^c.charCodeAt(--l);return i},Qu=function(i){return pn(Vu,i)};function Yh(i){return Ys(Qu(i)>>>0)}function Xh(i){return i.displayName||i.name||"Component"}function Ws(i){return typeof i=="string"&&!0}var Gu=typeof Symbol=="function"&&Symbol.for,qu=Gu?Symbol.for("react.memo"):60115,Jh=Gu?Symbol.for("react.forward_ref"):60112,Zh={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},ex={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ku={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},rx=((Ds={})[Jh]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ds[qu]=Ku,Ds);function vu(i){return("type"in(c=i)&&c.type.$$typeof)===qu?Ku:"$$typeof"in i?rx[i.$$typeof]:Zh;var c}var tx=Object.defineProperty,nx=Object.getOwnPropertyNames,yu=Object.getOwnPropertySymbols,ox=Object.getOwnPropertyDescriptor,ix=Object.getPrototypeOf,wu=Object.prototype;function Yu(i,c,l){if(typeof c!="string"){if(wu){var p=ix(c);p&&p!==wu&&Yu(i,p,l)}var u=nx(c);yu&&(u=u.concat(yu(c)));for(var v=vu(i),k=vu(c),I=0;I<u.length;++I){var T=u[I];if(!(T in ex||l&&l[T]||k&&T in k||v&&T in v)){var G=ox(c,T);try{tx(i,T,G)}catch{}}}}return i}function vn(i){return typeof i=="function"}function al(i){return typeof i=="object"&&"styledComponentId"in i}function Mt(i,c){return i&&c?"".concat(i," ").concat(c):i||c||""}function bu(i,c){if(i.length===0)return"";for(var l=i[0],p=1;p<i.length;p++)l+=i[p];return l}function uo(i){return i!==null&&typeof i=="object"&&i.constructor.name===Object.name&&!("props"in i&&i.$$typeof)}function Xs(i,c,l){if(l===void 0&&(l=!1),!l&&!uo(i)&&!Array.isArray(i))return c;if(Array.isArray(c))for(var p=0;p<c.length;p++)i[p]=Xs(i[p],c[p]);else if(uo(c))for(var p in c)i[p]=Xs(i[p],c[p]);return i}function sl(i,c){Object.defineProperty(i,"toString",{value:c})}function po(i){for(var c=[],l=1;l<arguments.length;l++)c[l-1]=arguments[l];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(i," for more information.").concat(c.length>0?" Args: ".concat(c.join(", ")):""))}var ax=(function(){function i(c){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=c}return i.prototype.indexOfGroup=function(c){for(var l=0,p=0;p<c;p++)l+=this.groupSizes[p];return l},i.prototype.insertRules=function(c,l){if(c>=this.groupSizes.length){for(var p=this.groupSizes,u=p.length,v=u;c>=v;)if((v<<=1)<0)throw po(16,"".concat(c));this.groupSizes=new Uint32Array(v),this.groupSizes.set(p),this.length=v;for(var k=u;k<v;k++)this.groupSizes[k]=0}for(var I=this.indexOfGroup(c+1),T=(k=0,l.length);k<T;k++)this.tag.insertRule(I,l[k])&&(this.groupSizes[c]++,I++)},i.prototype.clearGroup=function(c){if(c<this.length){var l=this.groupSizes[c],p=this.indexOfGroup(c),u=p+l;this.groupSizes[c]=0;for(var v=p;v<u;v++)this.tag.deleteRule(p)}},i.prototype.getGroup=function(c){var l="";if(c>=this.length||this.groupSizes[c]===0)return l;for(var p=this.groupSizes[c],u=this.indexOfGroup(c),v=u+p,k=u;k<v;k++)l+="".concat(this.tag.getRule(k)).concat(il);return l},i})(),Ei=new Map,Ii=new Map,Pi=1,Ni=function(i){if(Ei.has(i))return Ei.get(i);for(;Ii.has(Pi);)Pi++;var c=Pi++;return Ei.set(i,c),Ii.set(c,i),c},sx=function(i,c){Pi=c+1,Ei.set(i,c),Ii.set(c,i)},lx="style[".concat(mn,"][").concat(Wu,'="').concat(Ai,'"]'),cx=new RegExp("^".concat(mn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),dx=function(i,c,l){for(var p,u=l.split(","),v=0,k=u.length;v<k;v++)(p=u[v])&&i.registerName(c,p)},ux=function(i,c){for(var l,p=((l=c.textContent)!==null&&l!==void 0?l:"").split(il),u=[],v=0,k=p.length;v<k;v++){var I=p[v].trim();if(I){var T=I.match(cx);if(T){var G=0|parseInt(T[1],10),V=T[2];G!==0&&(sx(V,G),dx(i,V,T[3]),i.getTag().insertRules(G,u)),u.length=0}else u.push(I)}}},ku=function(i){for(var c=document.querySelectorAll(lx),l=0,p=c.length;l<p;l++){var u=c[l];u&&u.getAttribute(mn)!==Du&&(ux(i,u),u.parentNode&&u.parentNode.removeChild(u))}};function px(){return typeof __webpack_nonce__!="undefined"?__webpack_nonce__:null}var Xu=function(i){var c=document.head,l=i||c,p=document.createElement("style"),u=(function(I){var T=Array.from(I.querySelectorAll("style[".concat(mn,"]")));return T[T.length-1]})(l),v=u!==void 0?u.nextSibling:null;p.setAttribute(mn,Du),p.setAttribute(Wu,Ai);var k=px();return k&&p.setAttribute("nonce",k),l.insertBefore(p,v),p},fx=(function(){function i(c){this.element=Xu(c),this.element.appendChild(document.createTextNode("")),this.sheet=(function(l){if(l.sheet)return l.sheet;for(var p=document.styleSheets,u=0,v=p.length;u<v;u++){var k=p[u];if(k.ownerNode===l)return k}throw po(17)})(this.element),this.length=0}return i.prototype.insertRule=function(c,l){try{return this.sheet.insertRule(l,c),this.length++,!0}catch{return!1}},i.prototype.deleteRule=function(c){this.sheet.deleteRule(c),this.length--},i.prototype.getRule=function(c){var l=this.sheet.cssRules[c];return l&&l.cssText?l.cssText:""},i})(),hx=(function(){function i(c){this.element=Xu(c),this.nodes=this.element.childNodes,this.length=0}return i.prototype.insertRule=function(c,l){if(c<=this.length&&c>=0){var p=document.createTextNode(l);return this.element.insertBefore(p,this.nodes[c]||null),this.length++,!0}return!1},i.prototype.deleteRule=function(c){this.element.removeChild(this.nodes[c]),this.length--},i.prototype.getRule=function(c){return c<this.length?this.nodes[c].textContent:""},i})(),xx=(function(){function i(c){this.rules=[],this.length=0}return i.prototype.insertRule=function(c,l){return c<=this.length&&(this.rules.splice(c,0,l),this.length++,!0)},i.prototype.deleteRule=function(c){this.rules.splice(c,1),this.length--},i.prototype.getRule=function(c){return c<this.length?this.rules[c]:""},i})(),ju=zi,mx={isServer:!zi,useCSSOMInjection:!Vh},Ju=(function(){function i(c,l,p){c===void 0&&(c=gn),l===void 0&&(l={});var u=this;this.options=nr(nr({},mx),c),this.gs=l,this.names=new Map(p),this.server=!!c.isServer,!this.server&&zi&&ju&&(ju=!1,ku(this)),sl(this,function(){return(function(v){for(var k=v.getTag(),I=k.length,T="",G=function(H){var B=(function(xe){return Ii.get(xe)})(H);if(B===void 0)return"continue";var q=v.names.get(B),ie=k.getGroup(H);if(q===void 0||!q.size||ie.length===0)return"continue";var Q="".concat(mn,".g").concat(H,'[id="').concat(B,'"]'),X="";q!==void 0&&q.forEach(function(xe){xe.length>0&&(X+="".concat(xe,","))}),T+="".concat(ie).concat(Q,'{content:"').concat(X,'"}').concat(il)},V=0;V<I;V++)G(V);return T})(u)})}return i.registerId=function(c){return Ni(c)},i.prototype.rehydrate=function(){!this.server&&zi&&ku(this)},i.prototype.reconstructWithOptions=function(c,l){return l===void 0&&(l=!0),new i(nr(nr({},this.options),c),this.gs,l&&this.names||void 0)},i.prototype.allocateGSInstance=function(c){return this.gs[c]=(this.gs[c]||0)+1},i.prototype.getTag=function(){return this.tag||(this.tag=(c=(function(l){var p=l.useCSSOMInjection,u=l.target;return l.isServer?new xx(u):p?new fx(u):new hx(u)})(this.options),new ax(c)));var c},i.prototype.hasNameForId=function(c,l){return this.names.has(c)&&this.names.get(c).has(l)},i.prototype.registerName=function(c,l){if(Ni(c),this.names.has(c))this.names.get(c).add(l);else{var p=new Set;p.add(l),this.names.set(c,p)}},i.prototype.insertRules=function(c,l,p){this.registerName(c,l),this.getTag().insertRules(Ni(c),p)},i.prototype.clearNames=function(c){this.names.has(c)&&this.names.get(c).clear()},i.prototype.clearRules=function(c){this.getTag().clearGroup(Ni(c)),this.clearNames(c)},i.prototype.clearTag=function(){this.tag=void 0},i})(),gx=/&/g,vx=/^\s*\/\/.*$/gm;function Zu(i,c){return i.map(function(l){return l.type==="rule"&&(l.value="".concat(c," ").concat(l.value),l.value=l.value.replaceAll(",",",".concat(c," ")),l.props=l.props.map(function(p){return"".concat(c," ").concat(p)})),Array.isArray(l.children)&&l.type!=="@keyframes"&&(l.children=Zu(l.children,c)),l})}function yx(i){var c,l,p,u=gn,v=u.options,k=v===void 0?gn:v,I=u.plugins,T=I===void 0?Di:I,G=function(B,q,ie){return ie.startsWith(l)&&ie.endsWith(l)&&ie.replaceAll(l,"").length>0?".".concat(c):B},V=T.slice();V.push(function(B){B.type===Oi&&B.value.includes("&")&&(B.props[0]=B.props[0].replace(gx,l).replace(p,G))}),k.prefix&&V.push(Wh),V.push(Fh);var H=function(B,q,ie,Q){q===void 0&&(q=""),ie===void 0&&(ie=""),Q===void 0&&(Q="&"),c=Q,l=q,p=new RegExp("\\".concat(l,"\\b"),"g");var X=B.replace(vx,""),xe=Hh(ie||q?"".concat(ie," ").concat(q," { ").concat(X," }"):X);k.namespace&&(xe=Zu(xe,k.namespace));var ce=[];return Li(xe,Ah(V.concat(Dh(function(ae){return ce.push(ae)})))),ce};return H.hash=T.length?T.reduce(function(B,q){return q.name||po(15),pn(B,q.name)},Vu).toString():"",H}var wx=new Ju,Js=yx(),ep=kr.createContext({shouldForwardProp:void 0,styleSheet:wx,stylis:Js});ep.Consumer;kr.createContext(void 0);function Nu(){return W.useContext(ep)}var bx=(function(){function i(c,l){var p=this;this.inject=function(u,v){v===void 0&&(v=Js);var k=p.name+v.hash;u.hasNameForId(p.id,k)||u.insertRules(p.id,k,v(p.rules,k,"@keyframes"))},this.name=c,this.id="sc-keyframes-".concat(c),this.rules=l,sl(this,function(){throw po(12,String(p.name))})}return i.prototype.getName=function(c){return c===void 0&&(c=Js),this.name+c.hash},i})(),kx=function(i){return i>="A"&&i<="Z"};function Su(i){for(var c="",l=0;l<i.length;l++){var p=i[l];if(l===1&&p==="-"&&i[0]==="-")return i;kx(p)?c+="-"+p.toLowerCase():c+=p}return c.startsWith("ms-")?"-"+c:c}var rp=function(i){return i==null||i===!1||i===""},tp=function(i){var c,l,p=[];for(var u in i){var v=i[u];i.hasOwnProperty(u)&&!rp(v)&&(Array.isArray(v)&&v.isCss||vn(v)?p.push("".concat(Su(u),":"),v,";"):uo(v)?p.push.apply(p,_i(_i(["".concat(u," {")],tp(v),!1),["}"],!1)):p.push("".concat(Su(u),": ").concat((c=u,(l=v)==null||typeof l=="boolean"||l===""?"":typeof l!="number"||l===0||c in Uh||c.startsWith("--")?String(l).trim():"".concat(l,"px")),";")))}return p};function Ot(i,c,l,p){if(rp(i))return[];if(al(i))return[".".concat(i.styledComponentId)];if(vn(i)){if(!vn(v=i)||v.prototype&&v.prototype.isReactComponent||!c)return[i];var u=i(c);return Ot(u,c,l,p)}var v;return i instanceof bx?l?(i.inject(l,p),[i.getName(p)]):[i]:uo(i)?tp(i):Array.isArray(i)?Array.prototype.concat.apply(Di,i.map(function(k){return Ot(k,c,l,p)})):[i.toString()]}function jx(i){for(var c=0;c<i.length;c+=1){var l=i[c];if(vn(l)&&!al(l))return!1}return!0}var Nx=Qu(Ai),Sx=(function(){function i(c,l,p){this.rules=c,this.staticRulesId="",this.isStatic=(p===void 0||p.isStatic)&&jx(c),this.componentId=l,this.baseHash=pn(Nx,l),this.baseStyle=p,Ju.registerId(l)}return i.prototype.generateAndInjectStyles=function(c,l,p){var u=this.baseStyle?this.baseStyle.generateAndInjectStyles(c,l,p):"";if(this.isStatic&&!p.hash)if(this.staticRulesId&&l.hasNameForId(this.componentId,this.staticRulesId))u=Mt(u,this.staticRulesId);else{var v=bu(Ot(this.rules,c,l,p)),k=Ys(pn(this.baseHash,v)>>>0);if(!l.hasNameForId(this.componentId,k)){var I=p(v,".".concat(k),void 0,this.componentId);l.insertRules(this.componentId,k,I)}u=Mt(u,k),this.staticRulesId=k}else{for(var T=pn(this.baseHash,p.hash),G="",V=0;V<this.rules.length;V++){var H=this.rules[V];if(typeof H=="string")G+=H;else if(H){var B=bu(Ot(H,c,l,p));T=pn(T,B+V),G+=B}}if(G){var q=Ys(T>>>0);l.hasNameForId(this.componentId,q)||l.insertRules(this.componentId,q,p(G,".".concat(q),void 0,this.componentId)),u=Mt(u,q)}}return u},i})(),np=kr.createContext(void 0);np.Consumer;var Us={};function Cx(i,c,l){var p=al(i),u=i,v=!Ws(i),k=c.attrs,I=k===void 0?Di:k,T=c.componentId,G=T===void 0?(function(re,fe){var K=typeof re!="string"?"sc":mu(re);Us[K]=(Us[K]||0)+1;var D="".concat(K,"-").concat(Yh(Ai+K+Us[K]));return fe?"".concat(fe,"-").concat(D):D})(c.displayName,c.parentComponentId):T,V=c.displayName,H=V===void 0?(function(re){return Ws(re)?"styled.".concat(re):"Styled(".concat(Xh(re),")")})(i):V,B=c.displayName&&c.componentId?"".concat(mu(c.displayName),"-").concat(c.componentId):c.componentId||G,q=p&&u.attrs?u.attrs.concat(I).filter(Boolean):I,ie=c.shouldForwardProp;if(p&&u.shouldForwardProp){var Q=u.shouldForwardProp;if(c.shouldForwardProp){var X=c.shouldForwardProp;ie=function(re,fe){return Q(re,fe)&&X(re,fe)}}else ie=Q}var xe=new Sx(l,B,p?u.componentStyle:void 0);function ce(re,fe){return(function(K,D,Ie){var or=K.attrs,Nr=K.componentStyle,Ar=K.defaultProps,fr=K.foldedComponentIds,qe=K.styledComponentId,ir=K.target,hr=kr.useContext(np),We=Nu(),ve=K.shouldForwardProp||We.shouldForwardProp,E=Qh(D,hr,Ar)||gn,O=(function(oe,te,he){for(var se,ue=nr(nr({},te),{className:void 0,theme:he}),Fe=0;Fe<oe.length;Fe+=1){var Dr=vn(se=oe[Fe])?se(ue):se;for(var Sr in Dr)ue[Sr]=Sr==="className"?Mt(ue[Sr],Dr[Sr]):Sr==="style"?nr(nr({},ue[Sr]),Dr[Sr]):Dr[Sr]}return te.className&&(ue.className=Mt(ue.className,te.className)),ue})(or,D,E),_=O.as||ir,m={};for(var b in O)O[b]===void 0||b[0]==="$"||b==="as"||b==="theme"&&O.theme===E||(b==="forwardedAs"?m.as=O.forwardedAs:ve&&!ve(b,_)||(m[b]=O[b]));var Y=(function(oe,te){var he=Nu(),se=oe.generateAndInjectStyles(te,he.styleSheet,he.stylis);return se})(Nr,O),J=Mt(fr,qe);return Y&&(J+=" "+Y),O.className&&(J+=" "+O.className),m[Ws(_)&&!Uu.has(_)?"class":"className"]=J,Ie&&(m.ref=Ie),W.createElement(_,m)})(ae,re,fe)}ce.displayName=H;var ae=kr.forwardRef(ce);return ae.attrs=q,ae.componentStyle=xe,ae.displayName=H,ae.shouldForwardProp=ie,ae.foldedComponentIds=p?Mt(u.foldedComponentIds,u.styledComponentId):"",ae.styledComponentId=B,ae.target=p?u.target:i,Object.defineProperty(ae,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(re){this._foldedDefaultProps=p?(function(fe){for(var K=[],D=1;D<arguments.length;D++)K[D-1]=arguments[D];for(var Ie=0,or=K;Ie<or.length;Ie++)Xs(fe,or[Ie],!0);return fe})({},u.defaultProps,re):re}}),sl(ae,function(){return".".concat(ae.styledComponentId)}),v&&Yu(ae,i,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),ae}function Cu(i,c){for(var l=[i[0]],p=0,u=c.length;p<u;p+=1)l.push(c[p],i[p+1]);return l}var Tu=function(i){return Object.assign(i,{isCss:!0})};function Tx(i){for(var c=[],l=1;l<arguments.length;l++)c[l-1]=arguments[l];if(vn(i)||uo(i))return Tu(Ot(Cu(Di,_i([i],c,!0))));var p=i;return c.length===0&&p.length===1&&typeof p[0]=="string"?Ot(p):Tu(Ot(Cu(p,c)))}function Zs(i,c,l){if(l===void 0&&(l=gn),!c)throw po(1,c);var p=function(u){for(var v=[],k=1;k<arguments.length;k++)v[k-1]=arguments[k];return i(c,l,Tx.apply(void 0,_i([u],v,!1)))};return p.attrs=function(u){return Zs(i,c,nr(nr({},l),{attrs:Array.prototype.concat(l.attrs,u).filter(Boolean)}))},p.withConfig=function(u){return Zs(i,c,nr(nr({},l),u))},p}var op=function(i){return Zs(Cx,i)},ee=op;Uu.forEach(function(i){ee[i]=op(i)});const Vs={Wrapper:ee.div`
        min-height: 100vh;
        overflow: hidden;
        background: var(--color-bg);
        color: var(--color-text-primary);
    `,Header:ee.header`
        position: fixed;
        inset: 0 0 auto;
        z-index: 50;
        height: 68px;
        border-bottom: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-bg) 90%, transparent);
        backdrop-filter: blur(14px);
    `,Main:ee.main`
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
    `,Loading:ee.div` min-height: 50vh; display: grid; place-content: center; color: var(--color-text-muted); `};var ip={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Eu=kr.createContext&&kr.createContext(ip),Ex=["attr","size","title"];function Px(i,c){if(i==null)return{};var l=_x(i,c),p,u;if(Object.getOwnPropertySymbols){var v=Object.getOwnPropertySymbols(i);for(u=0;u<v.length;u++)p=v[u],!(c.indexOf(p)>=0)&&Object.prototype.propertyIsEnumerable.call(i,p)&&(l[p]=i[p])}return l}function _x(i,c){if(i==null)return{};var l={};for(var p in i)if(Object.prototype.hasOwnProperty.call(i,p)){if(c.indexOf(p)>=0)continue;l[p]=i[p]}return l}function $i(){return $i=Object.assign?Object.assign.bind():function(i){for(var c=1;c<arguments.length;c++){var l=arguments[c];for(var p in l)Object.prototype.hasOwnProperty.call(l,p)&&(i[p]=l[p])}return i},$i.apply(this,arguments)}function Pu(i,c){var l=Object.keys(i);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(i);c&&(p=p.filter(function(u){return Object.getOwnPropertyDescriptor(i,u).enumerable})),l.push.apply(l,p)}return l}function Mi(i){for(var c=1;c<arguments.length;c++){var l=arguments[c]!=null?arguments[c]:{};c%2?Pu(Object(l),!0).forEach(function(p){Lx(i,p,l[p])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(l)):Pu(Object(l)).forEach(function(p){Object.defineProperty(i,p,Object.getOwnPropertyDescriptor(l,p))})}return i}function Lx(i,c,l){return c=zx(c),c in i?Object.defineProperty(i,c,{value:l,enumerable:!0,configurable:!0,writable:!0}):i[c]=l,i}function zx(i){var c=Ix(i,"string");return typeof c=="symbol"?c:c+""}function Ix(i,c){if(typeof i!="object"||!i)return i;var l=i[Symbol.toPrimitive];if(l!==void 0){var p=l.call(i,c);if(typeof p!="object")return p;throw new TypeError("@@toPrimitive must return a primitive value.")}return(c==="string"?String:Number)(i)}function ap(i){return i&&i.map((c,l)=>kr.createElement(c.tag,Mi({key:l},c.attr),ap(c.child)))}function P(i){return c=>kr.createElement($x,$i({attr:Mi({},i.attr)},c),ap(i.child))}function $x(i){var c=l=>{var{attr:p,size:u,title:v}=i,k=Px(i,Ex),I=u||l.size||"1em",T;return l.className&&(T=l.className),i.className&&(T=(T?T+" ":"")+i.className),kr.createElement("svg",$i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},l.attr,p,k,{className:T,style:Mi(Mi({color:i.color||l.color},l.style),i.style),height:I,width:I,xmlns:"http://www.w3.org/2000/svg"}),v&&kr.createElement("title",null,v),i.children)};return Eu!==void 0?kr.createElement(Eu.Consumer,null,l=>c(l)):c(ip)}function Qs(i){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"16",x2:"12.01",y2:"16"},child:[]}]})(i)}function sp(i){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"},child:[]},{tag:"line",attr:{x1:"12",y1:"9",x2:"12",y2:"13"},child:[]},{tag:"line",attr:{x1:"12",y1:"17",x2:"12.01",y2:"17"},child:[]}]})(i)}function Mx(i){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"5",x2:"12",y2:"19"},child:[]},{tag:"polyline",attr:{points:"19 12 12 19 5 12"},child:[]}]})(i)}function lp(i){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"19",x2:"12",y2:"5"},child:[]},{tag:"polyline",attr:{points:"5 12 12 5 19 12"},child:[]}]})(i)}function cp(i){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"},child:[]},{tag:"path",attr:{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"},child:[]}]})(i)}function vt(i){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"},child:[]},{tag:"polyline",attr:{points:"3.27 6.96 12 12.01 20.73 6.96"},child:[]},{tag:"line",attr:{x1:"12",y1:"22.08",x2:"12",y2:"12"},child:[]}]})(i)}function dp(i){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"},child:[]},{tag:"polyline",attr:{points:"22 4 12 14.01 9 11.01"},child:[]}]})(i)}function _u(i){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"9 11 12 14 22 4"},child:[]},{tag:"path",attr:{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"},child:[]}]})(i)}function Ce(i){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"},child:[]}]})(i)}function Te(i){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"9 18 15 12 9 6"},child:[]}]})(i)}function ll(i){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"polyline",attr:{points:"12 6 12 12 16 14"},child:[]}]})(i)}function le(i){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 18 22 12 16 6"},child:[]},{tag:"polyline",attr:{points:"8 6 2 12 8 18"},child:[]}]})(i)}function Rx(i){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 8h1a4 4 0 0 1 0 8h-1"},child:[]},{tag:"path",attr:{d:"M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"},child:[]},{tag:"line",attr:{x1:"6",y1:"1",x2:"6",y2:"4"},child:[]},{tag:"line",attr:{x1:"10",y1:"1",x2:"10",y2:"4"},child:[]},{tag:"line",attr:{x1:"14",y1:"1",x2:"14",y2:"4"},child:[]}]})(i)}function Ox(i){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"9 10 4 15 9 20"},child:[]},{tag:"path",attr:{d:"M20 4v7a4 4 0 0 1-4 4H4"},child:[]}]})(i)}function Hx(i){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"9 14 4 9 9 4"},child:[]},{tag:"path",attr:{d:"M20 20v-7a4 4 0 0 0-4-4H4"},child:[]}]})(i)}function Bx(i){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"15 14 20 9 15 4"},child:[]},{tag:"path",attr:{d:"M4 20v-7a4 4 0 0 1 4-4h12"},child:[]}]})(i)}function cl(i){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"4",y:"4",width:"16",height:"16",rx:"2",ry:"2"},child:[]},{tag:"rect",attr:{x:"9",y:"9",width:"6",height:"6"},child:[]},{tag:"line",attr:{x1:"9",y1:"1",x2:"9",y2:"4"},child:[]},{tag:"line",attr:{x1:"15",y1:"1",x2:"15",y2:"4"},child:[]},{tag:"line",attr:{x1:"9",y1:"20",x2:"9",y2:"23"},child:[]},{tag:"line",attr:{x1:"15",y1:"20",x2:"15",y2:"23"},child:[]},{tag:"line",attr:{x1:"20",y1:"9",x2:"23",y2:"9"},child:[]},{tag:"line",attr:{x1:"20",y1:"14",x2:"23",y2:"14"},child:[]},{tag:"line",attr:{x1:"1",y1:"9",x2:"4",y2:"9"},child:[]},{tag:"line",attr:{x1:"1",y1:"14",x2:"4",y2:"14"},child:[]}]})(i)}function br(i){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"ellipse",attr:{cx:"12",cy:"5",rx:"9",ry:"3"},child:[]},{tag:"path",attr:{d:"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"},child:[]},{tag:"path",attr:{d:"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"},child:[]}]})(i)}function Fx(i){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"},child:[]},{tag:"polyline",attr:{points:"7 10 12 15 17 10"},child:[]},{tag:"line",attr:{x1:"12",y1:"15",x2:"12",y2:"3"},child:[]}]})(i)}function Ax(i){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"},child:[]}]})(i)}function el(i){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 20h9"},child:[]},{tag:"path",attr:{d:"M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"},child:[]}]})(i)}function Dx(i){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"3"},child:[]}]})(i)}function yt(i){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"},child:[]},{tag:"polyline",attr:{points:"14 2 14 8 20 8"},child:[]},{tag:"line",attr:{x1:"16",y1:"13",x2:"8",y2:"13"},child:[]},{tag:"line",attr:{x1:"16",y1:"17",x2:"8",y2:"17"},child:[]},{tag:"polyline",attr:{points:"10 9 9 9 8 9"},child:[]}]})(i)}function Lu(i){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"},child:[]}]})(i)}function up(i){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"},child:[]}]})(i)}function Wx(i){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"6",y1:"3",x2:"6",y2:"15"},child:[]},{tag:"circle",attr:{cx:"18",cy:"6",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"18",r:"3"},child:[]},{tag:"path",attr:{d:"M18 9a9 9 0 0 1-9 9"},child:[]}]})(i)}function Ux(i){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"4"},child:[]},{tag:"line",attr:{x1:"1.05",y1:"12",x2:"7",y2:"12"},child:[]},{tag:"line",attr:{x1:"17.01",y1:"12",x2:"22.96",y2:"12"},child:[]}]})(i)}function Vx(i){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"18",cy:"18",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"6",r:"3"},child:[]},{tag:"path",attr:{d:"M13 6h3a2 2 0 0 1 2 2v7"},child:[]},{tag:"line",attr:{x1:"6",y1:"9",x2:"6",y2:"21"},child:[]}]})(i)}function fn(i){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"2",y1:"12",x2:"22",y2:"12"},child:[]},{tag:"path",attr:{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"},child:[]}]})(i)}function Qx(i){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"14",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"3",y:"14",width:"7",height:"7"},child:[]}]})(i)}function yn(i){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"4",y1:"9",x2:"20",y2:"9"},child:[]},{tag:"line",attr:{x1:"4",y1:"15",x2:"20",y2:"15"},child:[]},{tag:"line",attr:{x1:"10",y1:"3",x2:"8",y2:"21"},child:[]},{tag:"line",attr:{x1:"16",y1:"3",x2:"14",y2:"21"},child:[]}]})(i)}function Gx(i){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"},child:[]}]})(i)}function pp(i){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"},child:[]}]})(i)}function pr(i){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 2 7 12 12 22 7 12 2"},child:[]},{tag:"polyline",attr:{points:"2 17 12 22 22 17"},child:[]},{tag:"polyline",attr:{points:"2 12 12 17 22 12"},child:[]}]})(i)}function qx(i){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"3",y1:"9",x2:"21",y2:"9"},child:[]},{tag:"line",attr:{x1:"9",y1:"21",x2:"9",y2:"9"},child:[]}]})(i)}function Kx(i){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"},child:[]},{tag:"path",attr:{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"},child:[]}]})(i)}function Yx(i){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"8",y1:"6",x2:"21",y2:"6"},child:[]},{tag:"line",attr:{x1:"8",y1:"12",x2:"21",y2:"12"},child:[]},{tag:"line",attr:{x1:"8",y1:"18",x2:"21",y2:"18"},child:[]},{tag:"line",attr:{x1:"3",y1:"6",x2:"3.01",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"12",x2:"3.01",y2:"12"},child:[]},{tag:"line",attr:{x1:"3",y1:"18",x2:"3.01",y2:"18"},child:[]}]})(i)}function wt(i){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M7 11V7a5 5 0 0 1 10 0v4"},child:[]}]})(i)}function Xx(i){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"},child:[]},{tag:"line",attr:{x1:"8",y1:"2",x2:"8",y2:"18"},child:[]},{tag:"line",attr:{x1:"16",y1:"6",x2:"16",y2:"22"},child:[]}]})(i)}function Jx(i){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"},child:[]}]})(i)}function co(i){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"16.5",y1:"9.4",x2:"7.5",y2:"4.21"},child:[]},{tag:"path",attr:{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"},child:[]},{tag:"polyline",attr:{points:"3.27 6.96 12 12.01 20.73 6.96"},child:[]},{tag:"line",attr:{x1:"12",y1:"22.08",x2:"12",y2:"12"},child:[]}]})(i)}function Zx(i){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"5 3 19 12 5 21 5 3"},child:[]}]})(i)}function fp(i){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 4 23 10 17 10"},child:[]},{tag:"polyline",attr:{points:"1 20 1 14 7 14"},child:[]},{tag:"path",attr:{d:"M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"},child:[]}]})(i)}function em(i){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"17 1 21 5 17 9"},child:[]},{tag:"path",attr:{d:"M3 11V9a4 4 0 0 1 4-4h14"},child:[]},{tag:"polyline",attr:{points:"7 23 3 19 7 15"},child:[]},{tag:"path",attr:{d:"M21 13v2a4 4 0 0 1-4 4H3"},child:[]}]})(i)}function rm(i){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"6",cy:"6",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"18",r:"3"},child:[]},{tag:"line",attr:{x1:"20",y1:"4",x2:"8.12",y2:"15.88"},child:[]},{tag:"line",attr:{x1:"14.47",y1:"14.48",x2:"20",y2:"20"},child:[]},{tag:"line",attr:{x1:"8.12",y1:"8.12",x2:"12",y2:"12"},child:[]}]})(i)}function dl(i){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"},child:[]},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"},child:[]}]})(i)}function rl(i){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"22",y1:"2",x2:"11",y2:"13"},child:[]},{tag:"polygon",attr:{points:"22 2 15 22 11 13 2 9 22 2"},child:[]}]})(i)}function bt(i){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"2",y:"2",width:"20",height:"8",rx:"2",ry:"2"},child:[]},{tag:"rect",attr:{x:"2",y:"14",width:"20",height:"8",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"6",y1:"6",x2:"6.01",y2:"6"},child:[]},{tag:"line",attr:{x1:"6",y1:"18",x2:"6.01",y2:"18"},child:[]}]})(i)}function tm(i){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"3"},child:[]},{tag:"path",attr:{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"},child:[]}]})(i)}function nm(i){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"18",cy:"5",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"12",r:"3"},child:[]},{tag:"circle",attr:{cx:"18",cy:"19",r:"3"},child:[]},{tag:"line",attr:{x1:"8.59",y1:"13.51",x2:"15.42",y2:"17.49"},child:[]},{tag:"line",attr:{x1:"15.41",y1:"6.51",x2:"8.59",y2:"10.49"},child:[]}]})(i)}function ur(i){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"},child:[]}]})(i)}function hp(i){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 3 21 3 21 8"},child:[]},{tag:"line",attr:{x1:"4",y1:"20",x2:"21",y2:"3"},child:[]},{tag:"polyline",attr:{points:"21 16 21 21 16 21"},child:[]},{tag:"line",attr:{x1:"15",y1:"15",x2:"21",y2:"21"},child:[]},{tag:"line",attr:{x1:"4",y1:"4",x2:"9",y2:"9"},child:[]}]})(i)}function om(i){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"4",y1:"21",x2:"4",y2:"14"},child:[]},{tag:"line",attr:{x1:"4",y1:"10",x2:"4",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"20",y1:"21",x2:"20",y2:"16"},child:[]},{tag:"line",attr:{x1:"20",y1:"12",x2:"20",y2:"3"},child:[]},{tag:"line",attr:{x1:"1",y1:"14",x2:"7",y2:"14"},child:[]},{tag:"line",attr:{x1:"9",y1:"8",x2:"15",y2:"8"},child:[]},{tag:"line",attr:{x1:"17",y1:"16",x2:"23",y2:"16"},child:[]}]})(i)}function im(i){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"5"},child:[]},{tag:"line",attr:{x1:"12",y1:"1",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"23"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"},child:[]},{tag:"line",attr:{x1:"1",y1:"12",x2:"3",y2:"12"},child:[]},{tag:"line",attr:{x1:"21",y1:"12",x2:"23",y2:"12"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"},child:[]}]})(i)}function am(i){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"},child:[]},{tag:"line",attr:{x1:"7",y1:"7",x2:"7.01",y2:"7"},child:[]}]})(i)}function sm(i){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"4 17 10 11 4 5"},child:[]},{tag:"line",attr:{x1:"12",y1:"19",x2:"20",y2:"19"},child:[]}]})(i)}function xp(i){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"},child:[]}]})(i)}function mp(i){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"3 6 5 6 21 6"},child:[]},{tag:"path",attr:{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"},child:[]},{tag:"line",attr:{x1:"10",y1:"11",x2:"10",y2:"17"},child:[]},{tag:"line",attr:{x1:"14",y1:"11",x2:"14",y2:"17"},child:[]}]})(i)}function lm(i){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 6 13.5 15.5 8.5 10.5 1 18"},child:[]},{tag:"polyline",attr:{points:"17 6 23 6 23 12"},child:[]}]})(i)}function Ri(i){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"4 7 4 4 20 4 20 7"},child:[]},{tag:"line",attr:{x1:"9",y1:"20",x2:"15",y2:"20"},child:[]},{tag:"line",attr:{x1:"12",y1:"4",x2:"12",y2:"20"},child:[]}]})(i)}function cm(i){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 16 12 12 8 16"},child:[]},{tag:"line",attr:{x1:"12",y1:"12",x2:"12",y2:"21"},child:[]},{tag:"path",attr:{d:"M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"},child:[]},{tag:"polyline",attr:{points:"16 16 12 12 8 16"},child:[]}]})(i)}function gp(i){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"},child:[]},{tag:"polyline",attr:{points:"17 8 12 3 7 8"},child:[]},{tag:"line",attr:{x1:"12",y1:"3",x2:"12",y2:"15"},child:[]}]})(i)}function vp(i){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"8.5",cy:"7",r:"4"},child:[]},{tag:"polyline",attr:{points:"17 11 19 13 23 9"},child:[]}]})(i)}function dm(i){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"9",cy:"7",r:"4"},child:[]},{tag:"path",attr:{d:"M23 21v-2a4 4 0 0 0-3-3.87"},child:[]},{tag:"path",attr:{d:"M16 3.13a4 4 0 0 1 0 7.75"},child:[]}]})(i)}function Ht(i){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"},child:[]}]})(i)}const zu={Wrapper:ee.header`
        display: flex;
        align-items: center;
        padding: 0 18px;
        height: 68px;
        background: transparent;
    `,Main:ee.div`
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
            background: #070707;
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
    `};function um(){const[i,c]=W.useState(!1),[l,p]=W.useState(()=>localStorage.getItem("app-theme")||"dark"),u=l==="light"?"dark":"light";return W.useEffect(()=>{l==="light"?document.documentElement.setAttribute("data-theme","light"):document.documentElement.removeAttribute("data-theme"),localStorage.setItem("app-theme",l)},[l]),n.jsx(zu.Wrapper,{children:n.jsx(zu.Main,{children:n.jsxs("div",{className:"logoNameThemeToggleWrapper",children:[n.jsxs("div",{className:"logoNameWrapper",children:[n.jsxs("div",{className:"logoWrapper",children:[!i&&n.jsx("div",{className:"logoSkeleton","aria-hidden":"true"}),n.jsx("img",{src:"/php-core-notes/logo.png",alt:"Ashish Ranjan logo",onLoad:()=>c(!0),style:{opacity:i?1:0}})]}),n.jsxs("div",{className:"nameWrapper",children:[n.jsx("div",{className:"title",children:"PHP Core Notes"}),n.jsx("div",{className:"subTitle",children:"At-a-glance PHP revision"})]})]}),n.jsxs("button",{type:"button",className:"themeToggleBtn",onClick:()=>p(u),"aria-label":`Switch to ${u} theme`,"aria-pressed":l==="light",children:[n.jsx("span",{className:"icon",children:l==="light"?n.jsx(Jx,{}):n.jsx(im,{})}),n.jsx("span",{className:"label",children:l==="light"?"Light":"Dark"})]})]})})})}function pm(i){return P({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.285 159.704l-234-156c-7.987-4.915-16.511-4.96-24.571 0l-234 156C3.714 163.703 0 170.847 0 177.989v155.999c0 7.143 3.714 14.286 9.715 18.286l234 156.022c7.987 4.915 16.511 4.96 24.571 0l234-156.022c6-3.999 9.715-11.143 9.715-18.286V177.989c-.001-7.142-3.715-14.286-9.716-18.285zM278 63.131l172.286 114.858-76.857 51.429L278 165.703V63.131zm-44 0v102.572l-95.429 63.715-76.857-51.429L234 63.131zM44 219.132l55.143 36.857L44 292.846v-73.714zm190 229.715L61.714 333.989l76.857-51.429L234 346.275v102.572zm22-140.858l-77.715-52 77.715-52 77.715 52-77.715 52zm22 140.858V346.275l95.429-63.715 76.857 51.429L278 448.847zm190-156.001l-55.143-36.857L468 219.132v73.714z"},child:[]}]})(i)}function fm(i){return P({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"},child:[]}]})(i)}function hm(i){return P({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(i)}function xm(i){return P({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(i)}function mm(i){return P({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"},child:[]}]})(i)}function gm(i){return P({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"},child:[]}]})(i)}function vm(i){return P({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"},child:[]}]})(i)}const Br={Wrapper:ee.footer`
        display: grid;
        gap: 22px;
        padding: 28px 0 12px;
        border-top: 1px solid var(--color-border);
        color: var(--color-text-muted);
        @media (max-width: 760px) {
            padding-top: 22px;
        }
    `,Intro:ee.div`
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
    `,Groups:ee.div`
        display: flex;
        gap: 32px;
        align-items: flex-start;
        @media (max-width: 760px) {
            flex-wrap: wrap;
            gap: 22px;
        }
    `,Group:ee.div`
        display: grid;
        gap: 10px;
    `,GroupTitle:ee.span`
        color: var(--color-text-primary);
        font-size: 0.76rem;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
    `,Links:ee.div`
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
    `,IconLink:ee.a`
        width: 34px;
        height: 34px;
        display: inline-grid;
        place-items: center;
        border: 1px solid var(--color-border);
        border-radius: 10px;
        color: var(--color-text-muted);
        transition: color 180ms ease, border-color 180ms ease, box-shadow 180ms ease, text-shadow 180ms ease;
        &:hover,
        &:focus-visible {
            color: var(--color-accent);
            border-color: var(--color-accent);
            box-shadow: 0 0 16px color-mix(in srgb, var(--color-accent) 22%, transparent);
            text-shadow: 0 0 10px color-mix(in srgb, var(--color-accent) 40%, transparent);

        }
        &:focus-visible {
            outline: 2px solid var(--color-accent);
            outline-offset: 3px;
        }
        svg {
            width: 16px;
            height: 16px;
        }
    `,Bottom:ee.div`
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
    `},ym=[{label:"Portfolio",href:"https://www.ashishranjan.net/",icon:gm},{label:"GitHub",href:"https://github.com/a2rp",icon:hm},{label:"CodePen",href:"https://codepen.io/ash1198",icon:pm},{label:"LinkedIn",href:"https://www.linkedin.com/in/aashishranjan",icon:xm},{label:"Facebook",href:"https://www.facebook.com/theash.ashish/",icon:fm},{label:"YouTube",href:"https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1",icon:mm},{label:"Email",href:"mailto:ash.ranjan09@gmail.com",icon:vm}],wm=[{label:"Support",href:"https://a2rp-donation-page.netlify.app/",icon:Gx},{label:"Buy Me a Coffee",href:"https://buymeacoffee.com/a2rp",icon:Rx},{label:"Patreon",href:"https://patreon.com/a2rp",icon:cp}];function Iu({links:i}){return n.jsx(Br.Links,{children:i.map(({label:c,href:l,icon:p})=>n.jsx(Br.IconLink,{href:l,target:"_blank",rel:"noopener noreferrer","aria-label":c,title:c,children:n.jsx(p,{"aria-hidden":"true"})},c))})}function bm(){return n.jsxs(Br.Wrapper,{children:[n.jsxs(Br.Intro,{children:[n.jsxs("strong",{children:[n.jsx(ur,{"aria-hidden":"true"})," PHP fundamentals, kept practical"]}),n.jsx("span",{children:"Structured notes for quick revision and steady backend foundations."})]}),n.jsxs(Br.Groups,{children:[n.jsxs(Br.Group,{children:[n.jsx(Br.GroupTitle,{children:"Connect"}),n.jsx(Iu,{links:ym})]}),n.jsxs(Br.Group,{children:[n.jsx(Br.GroupTitle,{children:"Support"}),n.jsx(Iu,{links:wm})]})]}),n.jsxs(Br.Bottom,{children:[n.jsxs("span",{children:["Copyright ","©"," ",new Date().getFullYear()," ",n.jsx("a",{href:"https://www.ashishranjan.net/",target:"_blank",rel:"noopener noreferrer",children:"Ashish Ranjan"})]}),n.jsx("span",{children:"Built for focused revision"})]})]})}function km(){const[i,c]=W.useState(!1);return W.useEffect(()=>{const l=document.getElementById("notes-scroll");if(!l)return;const p=()=>c(l.scrollTop>320);return l.addEventListener("scroll",p,{passive:!0}),()=>l.removeEventListener("scroll",p)},[]),i?n.jsx("button",{type:"button","aria-label":"Scroll to top",title:"Scroll to top",onClick:()=>{var l;return(l=document.getElementById("notes-scroll"))==null?void 0:l.scrollTo({top:0,behavior:"smooth"})},style:{position:"fixed",right:"24px",bottom:"24px",zIndex:60,width:"42px",height:"42px",display:"grid",placeItems:"center",border:"1px solid var(--color-border-light)",borderRadius:"50%",background:"var(--color-surface)",color:"var(--color-accent)",cursor:"pointer",boxShadow:"0 8px 22px rgba(0, 0, 0, 0.25)"},children:n.jsx(lp,{"aria-hidden":"true"})}):null}const $u={Wrapper:ee.section`
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 50px;
    `,Content:ee.div`
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
    `},jm=()=>{const i="2026-10-02T14:39:33.881Z",c=new Date(i).toLocaleString("en-US",{year:"numeric",month:"long",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1});return n.jsx($u.Wrapper,{children:n.jsxs($u.Content,{children:[n.jsxs("div",{className:"top",children:[n.jsxs("div",{className:"badge",children:[n.jsx("span",{className:"badgeIcon",children:n.jsx(le,{})}),"PHP core revision"]}),n.jsx("h2",{className:"heading",children:"About PHP Programming"}),n.jsx("p",{className:"sub",children:"A powerful server side scripting language designed for building dynamic web applications and backend systems."})]}),n.jsxs("div",{className:"grid",children:[n.jsxs("div",{className:"card",children:[n.jsxs("div",{className:"cardTitle",children:[n.jsx("span",{className:"cardIcon",children:n.jsx(bt,{})}),"What is PHP"]}),n.jsx("p",{className:"p",children:"PHP is a widely used open source scripting language especially suited for web development. It runs on the server, processes requests, interacts with databases, and generates dynamic HTML responses."})]}),n.jsxs("div",{className:"card",children:[n.jsxs("div",{className:"cardTitle",children:[n.jsx("span",{className:"cardIcon",children:n.jsx(br,{})}),"Why PHP matters"]}),n.jsx("p",{className:"p",children:"PHP powers a large portion of the web including content management systems, e commerce platforms, and APIs. It integrates easily with databases like MySQL and supports both procedural and object oriented programming."})]}),n.jsxs("div",{className:"card wide",children:[n.jsxs("div",{className:"cardTitle",children:[n.jsx("span",{className:"cardIcon",children:n.jsx(pr,{})}),"About php-core-notes"]}),n.jsx("p",{className:"p",children:"The php-core-notes project is designed as a focused backend revision system. It organizes syntax, forms, sessions, security, database interaction, and modern PHP features into a structured single page reference. The goal is clarity in request handling, clean architecture thinking, and secure backend development fundamentals."}),n.jsxs("div",{className:"meta",children:[n.jsxs("span",{className:"metaLeft",children:[n.jsx("span",{className:"metaIcon",children:n.jsx(ll,{})}),n.jsx("span",{className:"metaLabel",children:"Last updated"})]}),n.jsx("span",{className:"metaValue",children:c})]})]})]})]})})},Nm={Wrapper:ee.section`
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
    `},Sm=()=>{const[i,c]=W.useState(!1),l=W.useMemo(()=>[{key:"intro",title:"Introduction",icon:n.jsx(cp,{}),items:[{title:"What is PHP",text:"PHP is a server side scripting language used to build dynamic websites, backend logic, and APIs. The server runs PHP code and sends the result (usually HTML or JSON) to the browser."},{title:"How PHP works",text:"Browser requests a URL, the server runs PHP, PHP can talk to a database, then the server returns the final response to the browser. The browser never sees your PHP code."},{title:"Client vs Server",text:"Client is the browser (runs HTML, CSS, JavaScript). Server is where PHP runs (handles requests, connects to DB, returns HTML or JSON)."},{title:"PHP execution flow",text:"Request comes in → server routes it → PHP runs from top to bottom → optional DB/file work → output is generated → response is sent back."},{title:"PHP vs JavaScript",text:"JavaScript mostly runs in the browser for UI and interactions. PHP runs on the server for backend tasks. Both can be used together: JS for frontend, PHP for backend."},{title:"Installing PHP (XAMPP, MAMP, CLI)",text:"XAMPP (Windows/Linux) and MAMP (Mac) give PHP + Apache + MySQL quickly. CLI lets you run PHP in terminal for scripts and quick testing."}]},{key:"syntax",title:"Basic Syntax",icon:n.jsx(le,{}),items:[{title:"PHP tags",text:"PHP code is written inside PHP tags. Most common: <?php ... ?>. In a .php file you can mix HTML and PHP.",example:'<?php echo "Hello"; ?>'},{title:"echo and print",text:"echo and print output text. echo is slightly faster and can output multiple values. print returns 1 (rarely used).",example:`echo "Hi";
print "Hello";`},{title:"Statements and semicolons",text:"Most PHP statements end with a semicolon. Missing semicolon is a common beginner error.",example:`$x = 10;
echo $x;`},{title:"Case sensitivity",text:"Variable names are case sensitive ($name and $Name are different). Keywords like if, echo are not case sensitive, but stick to normal lowercase style."},{title:"Comments",text:"Use comments for notes. // single line, # single line, /* multi line */.",example:`// comment
# comment
/* multi line */`}]},{key:"variables",title:"Variables",icon:n.jsx(el,{}),items:[{title:"Variable syntax",text:"Variables start with $ and are assigned using =.",example:`$name = "Ash";
$age = 24;`},{title:"Naming rules",text:"Must start with a letter or underscore after $. Can include numbers later. No spaces. Use meaningful names like $userName or $totalPrice."},{title:"Dynamic typing",text:"PHP is dynamically typed, so a variable can hold different types over time. Still, keep code predictable and avoid random type switching.",example:`$x = 5;
$x = "five";`},{title:"Variable variables",text:"A variable name can be stored in another variable. Used rarely, but good to know it exists.",example:`$a = "name";
$$a = "Ash";
echo $name;`},{title:"Constants (define, const)",text:"Constants are values that should not change. define() is common, const is used inside classes or at top level. Constant names are usually uppercase.",example:`define("APP_NAME", "php-core-notes");
const VERSION = "1.0.0";`}]}],[]),p=()=>c(u=>!u);return n.jsxs(Nm.Wrapper,{className:i?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:p,"aria-expanded":i,children:[n.jsx("span",{className:"chev",children:i?n.jsx(Ce,{}):n.jsx(Te,{})}),n.jsx("span",{className:"icon",children:n.jsx(bt,{})}),n.jsx("span",{className:"title",children:"PHP Fundamentals"}),n.jsx("span",{className:"meta",children:i?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${i?"open":""}`,children:[n.jsxs("div",{className:"intro",children:[n.jsxs("div",{className:"pill",children:[n.jsx("span",{className:"pillIcon",children:n.jsx(fn,{})}),"Server side basics in one view"]}),n.jsx("p",{className:"p",children:"This section covers what PHP is, how it fits in the web, and the syntax and variable basics you will use everywhere."}),n.jsxs("div",{className:"note",children:[n.jsx("div",{className:"noteTitle",children:"Quick mindset"}),n.jsx("div",{className:"noteText",children:"Browser runs HTML CSS JS. Server runs PHP. The browser only receives the output, not your PHP code."})]})]}),n.jsx("div",{className:"sections",children:l.map(u=>n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:u.icon}),u.title]}),n.jsx("div",{className:"rows",children:u.items.map((v,k)=>n.jsxs("div",{className:"row",children:[n.jsxs("div",{className:"left",children:[n.jsx("div",{className:"itemTitle",children:v.title}),n.jsx("div",{className:"desc",children:v.text}),v.example&&n.jsxs("div",{className:"example",children:[n.jsxs("div",{className:"exTop",children:[n.jsx("span",{className:"exIcon",children:n.jsx(sm,{})}),"Example"]}),n.jsx("pre",{className:"code",children:n.jsx("code",{children:v.example})})]})]}),n.jsxs("div",{className:"rightHint",children:[n.jsxs("div",{className:"hintChip",children:[n.jsx("span",{className:"hintIcon",children:n.jsx(yn,{})}),"Remember"]}),n.jsxs("div",{className:"hintText",children:[u.key==="intro"&&"Server runs PHP and returns HTML or JSON.",u.key==="syntax"&&"Semicolons and correct tags prevent silly errors.",u.key==="variables"&&"Prefer clear variable names and constants for fixed values."]}),n.jsxs("div",{className:"mini",children:[n.jsx("span",{className:"miniIcon",children:n.jsx(vt,{})}),n.jsx("div",{className:"miniText",children:"Keep it predictable"})]})]})]},`${u.key}-${k}`))})]},u.key))})]})]})},Cm={Wrapper:ee.section`
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
    `},Tm=()=>{const[i,c]=W.useState(!1),l=W.useMemo(()=>[{title:"String",icon:n.jsx(Ri,{}),desc:"Text data enclosed in single or double quotes.",ex:'$name = "Ashish";'},{title:"Integer",icon:n.jsx(yn,{}),desc:"Whole numbers without decimals.",ex:"$age = 25;"},{title:"Float",icon:n.jsx(yn,{}),desc:"Numbers with decimal points.",ex:"$price = 99.99;"},{title:"Boolean",icon:n.jsx(dp,{}),desc:"Represents true or false.",ex:"$isLoggedIn = true;"},{title:"Array",icon:n.jsx(vt,{}),desc:"Collection of multiple values.",ex:'$colors = ["red", "blue"];'},{title:"NULL",icon:n.jsx(vt,{}),desc:"Represents a variable with no value.",ex:"$data = null;"},{title:"Resource",icon:n.jsx(vt,{}),desc:"Special type holding external resources like file handles or database connections.",ex:'$file = fopen("test.txt", "r");'},{title:"Object",icon:n.jsx(vt,{}),desc:"Instance of a class containing properties and methods.",ex:"$user = new User();"}],[]),p=()=>c(u=>!u);return n.jsxs(Cm.Wrapper,{children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:p,"aria-expanded":i,children:[n.jsx("span",{className:"chev",children:i?n.jsx(Ce,{}):n.jsx(Te,{})}),n.jsx("span",{className:"icon",children:n.jsx(le,{})}),n.jsx("span",{className:"title",children:"Data Types"}),n.jsx("span",{className:"meta",children:i?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${i?"open":""}`,children:[n.jsx("div",{className:"intro",children:n.jsx("p",{children:"PHP is dynamically typed. A variable can hold different types at runtime. Understanding types prevents bugs and unexpected behavior."})}),n.jsxs("div",{className:"section",children:[n.jsx("div",{className:"sectionTitle",children:"Core Data Types"}),l.map((u,v)=>n.jsxs("div",{className:"row",children:[n.jsxs("div",{className:"left",children:[n.jsx("span",{className:"typeIcon",children:u.icon}),n.jsx("span",{className:"typeName",children:u.title})]}),n.jsxs("div",{className:"right",children:[n.jsx("div",{className:"desc",children:u.desc}),n.jsxs("div",{className:"example",children:[n.jsx("span",{className:"exLabel",children:"Example"}),n.jsx("span",{className:"mono",children:u.ex})]})]})]},v))]}),n.jsxs("div",{className:"section",children:[n.jsx("div",{className:"sectionTitle",children:"Type Checking"}),n.jsx("div",{className:"row",children:n.jsxs("div",{className:"right",children:[n.jsxs("div",{className:"desc",children:[n.jsx("strong",{children:"var_dump()"})," shows value and type."]}),n.jsx("div",{className:"mono",children:"var_dump($name);"})]})}),n.jsx("div",{className:"row",children:n.jsxs("div",{className:"right",children:[n.jsxs("div",{className:"desc",children:[n.jsx("strong",{children:"gettype()"})," returns type as string."]}),n.jsx("div",{className:"mono",children:"gettype($age);"})]})}),n.jsx("div",{className:"row",children:n.jsxs("div",{className:"right",children:[n.jsx("div",{className:"desc",children:"Type check helpers: is_string, is_array, is_int"}),n.jsxs("div",{className:"mono",children:["is_string($name);","  ","is_array($colors);","  ","is_int($age);"]})]})})]}),n.jsxs("div",{className:"section",children:[n.jsx("div",{className:"sectionTitle",children:"Type Casting"}),n.jsx("div",{className:"row",children:n.jsxs("div",{className:"right",children:[n.jsx("div",{className:"desc",children:"Convert value to specific type."}),n.jsxs("div",{className:"mono",children:["(int)$value ","  ","(string)$value ","  ","(bool)$value ","  ","(float)$value"]})]})})]})]})]})},Em={Wrapper:ee.section`
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
    `},Pm=()=>{const[i,c]=W.useState(!1),l=W.useMemo(()=>[{key:"arithmetic",title:"Arithmetic",icon:n.jsx(cl,{}),lines:[{op:"/",text:"Division. In PHP, / returns float if needed.",example:"10 / 4 -> 2.5"},{op:"%",text:"Modulus. Remainder after division.",example:"10 % 4 -> 2"},{op:"**",text:"Exponentiation. Power operator.",example:"2 ** 3 -> 8"}]},{key:"assignment",title:"Assignment",icon:n.jsx(Ux,{}),lines:[{op:"=",text:"Assign value to a variable.",example:"$x = 10"},{op:"+=",text:"Add and assign.",example:"$x += 5 -> same as $x = $x + 5"},{op:"-=",text:"Subtract and assign.",example:"$x -= 2 -> same as $x = $x - 2"},{op:".=",text:"Append string and assign.",example:'$name .= " Ranjan"'}]},{key:"comparison",title:"Comparison",icon:n.jsx(hp,{}),lines:[{op:"==",text:"Equal (loose). May type juggle.",example:'"5" == 5 -> true'},{op:"===",text:"Identical (strict). Value + type must match.",example:'"5" === 5 -> false'},{op:"!=",text:"Not equal (loose).",example:'"5" != 5 -> false'},{op:"!==",text:"Not identical (strict).",example:'"5" !== 5 -> true'},{op:"<",text:"Less than.",example:"3 < 5 -> true"},{op:"<=",text:"Less than or equal.",example:"5 <= 5 -> true"},{op:">=",text:"Greater than or equal.",example:"7 >= 5 -> true"}]},{key:"logical",title:"Logical",icon:n.jsx(yn,{}),lines:[{op:"&&",text:"AND. Both conditions must be true.",example:"true && false -> false"},{op:"||",text:"OR. Any one condition true -> true.",example:"true || false -> true"},{op:"!",text:"NOT. Flips boolean.",example:"!true -> false"},{op:"and",text:"AND keyword. Same idea as &&, but lower precedence.",example:"$ok = true and false -> tricky (precedence)"},{op:"or",text:"OR keyword. Same idea as ||, but lower precedence.",example:"$ok = false or true -> tricky (precedence)"}]},{key:"stringOps",title:"String Operators",icon:n.jsx(Ri,{}),lines:[{op:".",text:"Concatenation. Joins strings.",example:'"Hello" . " World" -> "Hello World"'},{op:".=",text:"Concatenate and assign.",example:'$msg .= "!"'}]}],[]),p=()=>c(u=>!u);return n.jsxs(Em.Wrapper,{className:i?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:p,"aria-expanded":i,children:[n.jsx("span",{className:"chev",children:i?n.jsx(Ce,{}):n.jsx(Te,{})}),n.jsx("span",{className:"icon",children:n.jsx(le,{})}),n.jsx("span",{className:"title",children:"Operators"}),n.jsx("span",{className:"meta",children:i?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${i?"open":""}`,children:[n.jsxs("div",{className:"intro",children:[n.jsxs("div",{className:"pill",children:[n.jsx("span",{className:"pillIcon",children:n.jsx(le,{})}),"Quick reference for common operators"]}),n.jsx("p",{className:"p",children:"Operators help you calculate, compare, combine, and make decisions. In PHP, remember the difference between loose comparison (==) and strict comparison (===)."}),n.jsxs("div",{className:"note",children:[n.jsx("div",{className:"noteTitle",children:"Important"}),n.jsx("div",{className:"noteText",children:"Prefer strict checks (=== and !==) to avoid unexpected type juggling."})]})]}),n.jsx("div",{className:"sections",children:l.map(u=>n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:u.icon}),u.title]}),n.jsx("div",{className:"rows",children:u.lines.map((v,k)=>n.jsxs("div",{className:"row",children:[n.jsx("div",{className:"op",children:v.op}),n.jsxs("div",{className:"text",children:[n.jsx("div",{className:"desc",children:v.text}),n.jsxs("div",{className:"ex",children:[n.jsx("span",{className:"exLabel",children:"Example"}),n.jsx("span",{className:"mono",children:v.example})]})]})]},`${u.key}-${k}`))})]},u.key))})]})]})},_m={Wrapper:ee.section`
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
    `},Lm=()=>{const[i,c]=W.useState(!1),l=W.useMemo(()=>[{key:"conditionals",title:"Conditionals",icon:n.jsx(Wx,{}),items:[{name:"if",desc:"Execute block if condition is true.",example:"if ($age >= 18) { echo 'Adult'; }"},{name:"else",desc:"Runs when if condition is false.",example:"else { echo 'Minor'; }"},{name:"elseif",desc:"Multiple condition checks.",example:"elseif ($age >= 13) { echo 'Teen'; }"},{name:"switch",desc:"Compare one value against multiple cases.",example:"switch ($role) { case 'admin': break; }"},{name:"match",desc:"Modern PHP expression. Strict comparison and returns value.",example:"$label = match($status) { 200 => 'OK', 404 => 'Not Found' };"}]},{key:"loops",title:"Loops",icon:n.jsx(em,{}),items:[{name:"while",desc:"Runs while condition is true.",example:"while ($i < 5) { $i++; }"},{name:"do while",desc:"Executes at least once before checking condition.",example:"do { $i++; } while ($i < 5);"},{name:"for",desc:"Loop with counter initialization, condition, increment.",example:"for ($i = 0; $i < 5; $i++) { }"},{name:"foreach",desc:"Best for arrays and collections.",example:"foreach ($users as $user) { echo $user; }"},{name:"break",desc:"Exit loop or switch immediately.",example:"if ($i == 3) break;"},{name:"continue",desc:"Skip current iteration and move to next.",example:"if ($i == 3) continue;"}]}],[]),p=()=>c(u=>!u);return n.jsxs(_m.Wrapper,{children:[n.jsxs("button",{type:"button",className:"header",onClick:p,"aria-expanded":i,children:[n.jsx("span",{className:"chev",children:i?n.jsx(Ce,{}):n.jsx(Te,{})}),n.jsx("span",{className:"icon",children:n.jsx(le,{})}),n.jsx("span",{className:"title",children:"Control Structures"}),n.jsx("span",{className:"meta",children:i?"Collapse":"Expand"})]}),n.jsxs("div",{className:`body ${i?"open":""}`,children:[n.jsx("div",{className:"intro",children:"Control structures control execution flow. They decide what runs and how many times it runs."}),l.map(u=>n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:u.icon}),u.title]}),u.items.map((v,k)=>n.jsxs("div",{className:"row",children:[n.jsx("div",{className:"keyword",children:v.name}),n.jsxs("div",{className:"content",children:[n.jsx("div",{className:"desc",children:v.desc}),n.jsxs("div",{className:"example",children:[n.jsx("span",{className:"label",children:"Example"}),n.jsx("span",{className:"mono",children:v.example})]})]})]},k))]},u.key))]})]})},zm={Wrapper:ee.section`
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
    `},Im=()=>{const[i,c]=W.useState(!1),l=W.useMemo(()=>[{key:"indexed",title:"Indexed Arrays",icon:n.jsx(Yx,{}),desc:"Values are stored with numeric keys starting from 0.",exampleTitle:"Example",example:`$nums = [10, 20, 30];
$nums[0] -> 10`,tips:["Best for ordered lists","Use [] to append new item"]},{key:"associative",title:"Associative Arrays",icon:n.jsx(yn,{}),desc:"Values are stored with custom string keys (key-value pairs).",exampleTitle:"Example",example:`$user = ["name" => "Ash", "role" => "Dev"];
$user["name"] -> "Ash"`,tips:["Best for objects-like data","Keys are usually strings"]},{key:"multi",title:"Multidimensional Arrays",icon:n.jsx(pr,{}),desc:"Arrays inside arrays. Useful for tables, lists of objects, nested data.",exampleTitle:"Example",example:`$users = [
  ["name" => "A", "age" => 20],
  ["name" => "B", "age" => 22]
];
$users[1]["name"] -> "B"`,tips:["Common in API responses","Loop using foreach for readability"]},{key:"functions",title:"Array Functions",icon:n.jsx(xp,{}),desc:"Most used built-in functions for real projects.",rows:[{fn:"count",use:"Get total number of items in array.",ex:"count([1,2,3]) -> 3"},{fn:"array_push",use:"Add one or more items to the end.",ex:"array_push($arr, 4, 5)"},{fn:"array_pop",use:"Remove and return last item.",ex:"array_pop($arr)"},{fn:"array_merge",use:"Merge arrays into one.",ex:"array_merge($a, $b)"},{fn:"array_keys",use:"Get all keys from an array.",ex:'array_keys(["a"=>1,"b"=>2]) -> ["a","b"]'},{fn:"array_values",use:"Get all values (reindexes numeric keys).",ex:'array_values(["a"=>1,"b"=>2]) -> [1,2]'},{fn:"in_array",use:"Check if value exists in array.",ex:'in_array("red", ["red","blue"]) -> true'},{fn:"explode",use:"Split string into array by delimiter.",ex:'explode(",", "a,b,c") -> ["a","b","c"]'},{fn:"implode",use:"Join array into string with delimiter.",ex:'implode("-", ["a","b","c"]) -> "a-b-c"'},{fn:"sort",use:"Sort values and reindex keys (ascending).",ex:"sort($nums)"},{fn:"asort",use:"Sort by values but keep keys (ascending).",ex:"asort($scores)"},{fn:"ksort",use:"Sort by keys (ascending).",ex:"ksort($user)"}],noteTitle:"Quick reminder",noteText:"sort resets keys. Use asort if you must preserve key-value mapping. Use ksort when key order matters."}],[]),p=()=>c(u=>!u);return n.jsxs(zm.Wrapper,{className:i?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:p,"aria-expanded":i,children:[n.jsx("span",{className:"chev",children:i?n.jsx(Ce,{}):n.jsx(Te,{})}),n.jsx("span",{className:"icon",children:n.jsx(Qx,{})}),n.jsx("span",{className:"title",children:"Arrays"}),n.jsx("span",{className:"meta",children:i?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${i?"open":""}`,children:[n.jsxs("div",{className:"intro",children:[n.jsxs("div",{className:"pill",children:[n.jsx("span",{className:"pillIcon",children:n.jsx(le,{})}),"Most used data structure in PHP"]}),n.jsx("p",{className:"p",children:"PHP arrays are very flexible. They can behave like lists (indexed arrays) and like objects/maps (associative arrays). Many real apps use nested arrays for data and API responses."}),n.jsxs("div",{className:"note",children:[n.jsx("div",{className:"noteTitle",children:"Best practice"}),n.jsx("div",{className:"noteText",children:"Use associative arrays for named fields. Use indexed arrays for ordered lists. Keep nesting readable."})]})]}),n.jsx("div",{className:"cards",children:l.filter(u=>u.key!=="functions").map(u=>n.jsxs("div",{className:"card",children:[n.jsxs("div",{className:"cardTitle",children:[n.jsx("span",{className:"cardIcon",children:u.icon}),u.title]}),n.jsx("p",{className:"cardDesc",children:u.desc}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(le,{})}),u.exampleTitle]}),n.jsx("pre",{className:"code",children:u.example})]}),n.jsx("ul",{className:"tips",children:u.tips.map((v,k)=>n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),v]},`${u.key}-tip-${k}`))})]},u.key))}),n.jsx("div",{className:"functions",children:l.filter(u=>u.key==="functions").map(u=>n.jsxs("div",{className:"funcWrap",children:[n.jsxs("div",{className:"funcTitle",children:[n.jsx("span",{className:"funcIcon",children:u.icon}),u.title]}),n.jsx("p",{className:"funcDesc",children:u.desc}),n.jsx("div",{className:"funcTable",children:u.rows.map((v,k)=>n.jsxs("div",{className:"funcRow",children:[n.jsx("div",{className:"fnName",children:v.fn}),n.jsxs("div",{className:"fnInfo",children:[n.jsx("div",{className:"fnUse",children:v.use}),n.jsxs("div",{className:"fnEx",children:[n.jsx("span",{className:"exLabel",children:"Example"}),n.jsx("span",{className:"mono",children:v.ex})]})]})]},`fn-${k}`))}),n.jsxs("div",{className:"note",children:[n.jsx("div",{className:"noteTitle",children:u.noteTitle}),n.jsx("div",{className:"noteText",children:u.noteText})]})]},u.key))})]})]})},$m={Wrapper:ee.section`
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
    `},Mm=()=>{const[i,c]=W.useState(!1),l=W.useMemo(()=>[{key:"strlen",title:"strlen",icon:n.jsx(Ri,{}),what:"Returns the length of a string (number of characters).",example:'strlen("hello") -> 5',note:"If you deal with multibyte characters (like Hindi), use mb_strlen with mbstring extension."},{key:"strpos",title:"strpos",icon:n.jsx(dl,{}),what:"Finds the position of the first occurrence of a substring. Returns an index or false.",example:'strpos("hello world", "world") -> 6',note:"Important: strpos can return 0 (found at start). Always check with !== false."},{key:"substr",title:"substr",icon:n.jsx(rm,{}),what:"Returns a portion of a string using start index and optional length.",example:'substr("abcdef", 1, 3) -> "bcd"',note:"Negative start or length can count from the end."},{key:"str_replace",title:"str_replace",icon:n.jsx(fp,{}),what:"Replaces all occurrences of a search string with a replacement string.",example:'str_replace("cat", "dog", "cat and cat") -> "dog and dog"',note:"This is case-sensitive. For case-insensitive, use str_ireplace."},{key:"trim",title:"trim",icon:n.jsx(Ax,{}),what:"Removes whitespace from the start and end of a string.",example:'trim("  hello  ") -> "hello"',note:"Useful before validation and saving user input."},{key:"strtolower",title:"strtolower",icon:n.jsx(Mx,{}),what:"Converts a string to lowercase.",example:'strtolower("HELLO") -> "hello"',note:"Used for case-insensitive comparisons like emails and usernames."},{key:"strtoupper",title:"strtoupper",icon:n.jsx(lp,{}),what:"Converts a string to uppercase.",example:'strtoupper("hello") -> "HELLO"',note:"Good for display formatting, not for strict identifiers."},{key:"htmlspecialchars",title:"htmlspecialchars",icon:n.jsx(ur,{}),what:"Escapes special characters for safe HTML output to prevent XSS.",example:'htmlspecialchars("<script>") -> "&lt;script&gt;"',note:"Use when showing user input in HTML. This is a security must-know."},{key:"nl2br",title:"nl2br",icon:n.jsx(Ox,{}),what:"Converts newline characters (\\n) into <br> tags for HTML display.",example:'nl2br("line1\\nline2") -> "line1<br />\\nline2"',note:"Often used for displaying textarea content in HTML."}],[]),p=()=>c(u=>!u);return n.jsxs($m.Wrapper,{className:i?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:p,"aria-expanded":i,children:[n.jsx("span",{className:"chev",children:i?n.jsx(Ce,{}):n.jsx(Te,{})}),n.jsx("span",{className:"icon",children:n.jsx(le,{})}),n.jsx("span",{className:"title",children:"Strings"}),n.jsx("span",{className:"meta",children:i?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${i?"open":""}`,children:[n.jsxs("div",{className:"intro",children:[n.jsxs("div",{className:"pill",children:[n.jsx("span",{className:"pillIcon",children:n.jsx(Ri,{})}),"Most used PHP string helpers"]}),n.jsx("p",{className:"p",children:"Strings show up everywhere: forms, APIs, database data, file content. These functions cover the most common tasks like search, slicing, formatting, and safe HTML output."}),n.jsxs("div",{className:"note",children:[n.jsx("div",{className:"noteTitle",children:"Security tip"}),n.jsxs("div",{className:"noteText",children:["If you output user input inside HTML, use"," ",n.jsx("span",{className:"mono",children:"htmlspecialchars"})," to prevent XSS."]})]})]}),n.jsx("div",{className:"list",children:l.map(u=>n.jsxs("div",{className:"card",children:[n.jsxs("div",{className:"cardTop",children:[n.jsx("span",{className:"cardIcon",children:u.icon}),n.jsx("div",{className:"cardTitle",children:u.title})]}),n.jsx("div",{className:"desc",children:u.what}),n.jsxs("div",{className:"example",children:[n.jsx("span",{className:"exLabel",children:"Example"}),n.jsx("span",{className:"mono",children:u.example})]}),n.jsxs("div",{className:"noteRow",children:[n.jsx("span",{className:"notePill",children:"Note"}),n.jsx("span",{className:"noteText",children:u.note})]})]},u.key))})]})]})},Rm={Wrapper:ee.section`
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
    `},Om=()=>{const[i,c]=W.useState(!1),l=W.useMemo(()=>[{key:"creating",title:"Creating Functions",icon:n.jsx(le,{}),text:"Functions group reusable logic. Use the function keyword.",code:`function greet() {
    echo "Hello";
}`},{key:"parameters",title:"Parameters",icon:n.jsx(om,{}),text:"Parameters allow passing data into functions.",code:`function greet($name) {
    echo "Hello " . $name;
}`},{key:"default",title:"Default Parameters",icon:n.jsx(pr,{}),text:"You can assign default values to parameters.",code:`function greet($name = "Guest") {
    echo "Hello " . $name;
}`},{key:"return",title:"Return Values",icon:n.jsx(Hx,{}),text:"Use return to send value back from function.",code:`function add($a, $b) {
    return $a + $b;
}`},{key:"types",title:"Type Declarations",icon:n.jsx(Ht,{}),text:"PHP supports parameter and return types.",code:`function add(int $a, int $b): int {
    return $a + $b;
}`},{key:"anonymous",title:"Anonymous Functions",icon:n.jsx(le,{}),text:"Functions without name. Often used as callbacks.",code:`$greet = function($name) {
    return "Hello " . $name;
};`},{key:"arrow",title:"Arrow Functions",icon:n.jsx(Zx,{}),text:"Short syntax for simple functions.",code:"$square = fn($x) => $x * $x;"},{key:"scope",title:"Variable Scope",icon:n.jsx(pr,{}),text:"Variables inside function are local by default.",code:`$x = 10;

function test() {
    // $x is not accessible here
}`},{key:"global",title:"global Keyword",icon:n.jsx(fn,{}),text:"Use global to access global variables inside function.",code:`$x = 10;

function test() {
    global $x;
    echo $x;
}`},{key:"static",title:"Static Variables",icon:n.jsx(Ht,{}),text:"Static variables retain value between function calls.",code:`function counter() {
    static $count = 0;
    $count++;
    echo $count;
}`}],[]),p=()=>c(u=>!u);return n.jsxs(Rm.Wrapper,{className:i?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:p,"aria-expanded":i,children:[n.jsx("span",{className:"chev",children:i?n.jsx(Ce,{}):n.jsx(Te,{})}),n.jsx("span",{className:"icon",children:n.jsx(le,{})}),n.jsx("span",{className:"title",children:"Functions"}),n.jsx("span",{className:"meta",children:i?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${i?"open":""}`,children:[n.jsxs("div",{className:"intro",children:[n.jsxs("div",{className:"pill",children:[n.jsx(le,{}),"Function fundamentals at a glance"]}),n.jsx("p",{className:"p",children:"Functions help organize reusable logic. In PHP, understanding scope, return types, and modern syntax like arrow functions is essential."})]}),n.jsx("div",{className:"sections",children:l.map(u=>n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:u.icon}),u.title]}),n.jsxs("div",{className:"content",children:[n.jsx("div",{className:"desc",children:u.text}),n.jsx("pre",{children:n.jsx("code",{children:u.code})})]})]},u.key))})]})]})},Hm={Wrapper:ee.section`
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
    `},Bm=()=>{const[i,c]=W.useState(!1),l=W.useMemo(()=>[{name:"$_GET",icon:n.jsx(fn,{}),desc:"Collects data sent via URL query string.",example:`example.com/page.php?name=ash

$_GET['name'] -> 'ash'`},{name:"$_POST",icon:n.jsx(fn,{}),desc:"Collects data sent via HTTP POST method (usually forms).",example:`<form method='POST'>
$_POST['email']`},{name:"$_REQUEST",icon:n.jsx(fn,{}),desc:"Contains data from GET, POST, and COOKIE (not recommended for secure logic).",example:"$_REQUEST['username']"},{name:"$_SERVER",icon:n.jsx(bt,{}),desc:"Contains server and request information.",example:`$_SERVER['REQUEST_METHOD']
$_SERVER['HTTP_HOST']`},{name:"$_FILES",icon:n.jsx(gp,{}),desc:"Used for file uploads via forms.",example:`$_FILES['file']['name']
$_FILES['file']['tmp_name']`},{name:"$_SESSION",icon:n.jsx(br,{}),desc:"Stores data across multiple pages for a user session.",example:`session_start();
$_SESSION['user'] = 'ash';`},{name:"$_COOKIE",icon:n.jsx(pp,{}),desc:"Stores small data in the user's browser.",example:`setcookie('theme', 'dark');
$_COOKIE['theme']`},{name:"$_ENV",icon:n.jsx(le,{}),desc:"Contains environment variables.",example:"$_ENV['PATH']"}],[]),p=()=>c(u=>!u);return n.jsxs(Hm.Wrapper,{children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:p,"aria-expanded":i,children:[n.jsx("span",{className:"chev",children:i?n.jsx(Ce,{}):n.jsx(Te,{})}),n.jsx("span",{className:"titleIcon",children:n.jsx(le,{})}),n.jsx("span",{className:"title",children:"Superglobals"}),n.jsx("span",{className:"meta",children:i?"Collapse":"Expand"})]}),n.jsxs("div",{className:`body ${i?"open":""}`,children:[n.jsxs("div",{className:"intro",children:[n.jsx("p",{children:"Superglobals are built-in associative arrays available in all scopes. They provide access to request data, server info, sessions, cookies, files, and environment variables."}),n.jsx("div",{className:"note",children:"Always validate and sanitize external input like $_GET and $_POST to prevent security issues."})]}),n.jsx("div",{className:"grid",children:l.map((u,v)=>n.jsxs("div",{className:"card",children:[n.jsxs("div",{className:"cardHeader",children:[n.jsx("span",{className:"cardIcon",children:u.icon}),n.jsx("span",{className:"cardTitle",children:u.name})]}),n.jsx("p",{className:"desc",children:u.desc}),n.jsx("pre",{className:"example",children:u.example})]},v))})]})]})},Fm={Wrapper:ee.section`
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
    `},Am=()=>{const[i,c]=W.useState(!1),l=W.useMemo(()=>[{key:"getVsPost",title:"GET vs POST",icon:n.jsx(Vx,{}),points:["GET sends data in the URL (query string). Good for search, filters, bookmarking.","POST sends data in the request body. Better for forms, passwords, larger payloads.","Never send sensitive data using GET (it can be logged, shared, cached)."],exampleTitle:"Quick example",example:`GET:  /profile.php?user=ash
POST: /login.php (email + password in body)`},{key:"validation",title:"Form validation",icon:n.jsx(dp,{}),points:["Validation means checking input is correct before using it.","Always validate on server side, even if you validate on frontend.","Common checks: required, length, format, allowed values, file type and size."],exampleTitle:"Typical validation checks",example:`- empty check
- email format
- min and max length
- allowed list (enum)
- numeric range`},{key:"requiredFields",title:"Required fields",icon:n.jsx(rl,{}),points:["Required means the field must exist and must not be empty after trimming.","Treat missing key and empty value as invalid.","Use trim() so spaces do not pass validation."],exampleTitle:"Rule",example:'trim($name) !== ""'},{key:"sanitize",title:"Sanitizing input",icon:n.jsx(ur,{}),points:["Sanitizing means cleaning input to reduce risk and make it safe to store or display.","Validation checks if input is acceptable. Sanitizing prepares it for safe usage.","Always escape on output (XSS prevention)."],exampleTitle:"Key idea",example:`Validate first, then sanitize, then store.
Escape when outputting to HTML.`},{key:"htmlspecialchars",title:"htmlspecialchars",icon:n.jsx(le,{}),points:["Converts special characters to HTML entities.","This prevents user input from becoming real HTML or script on your page.","Use it when printing user data into HTML (XSS protection)."],exampleTitle:"Example",example:'echo htmlspecialchars($name, ENT_QUOTES, "UTF-8");'},{key:"filterInput",title:"filter_input",icon:n.jsx(Lu,{}),points:["Reads input safely from GET or POST using filters.","Useful for emails, integers, URLs, etc.","Returns filtered value or false/null depending on filter and input."],exampleTitle:"Example",example:'$email = filter_input(INPUT_POST, "email", FILTER_VALIDATE_EMAIL);'},{key:"filterVar",title:"filter_var",icon:n.jsx(Lu,{}),points:["Filters a variable you already have in your code.","Useful when data comes from sources other than GET/POST (like JSON body).","Works similarly to filter_input but takes a value directly."],exampleTitle:"Example",example:"$age = filter_var($rawAge, FILTER_VALIDATE_INT);"},{key:"fileUpload",title:"File upload basics",icon:n.jsx(cm,{}),points:["Uploaded files are available in $_FILES.","Always check: error, size, allowed type, and final filename.","Never trust original filename. Generate your own safe name."],exampleTitle:"What to check",example:`- $_FILES["file"]["error"] === UPLOAD_ERR_OK
- max size limit
- allow only safe extensions
- move_uploaded_file() to a safe folder`}],[]),p=()=>c(u=>!u);return n.jsxs(Fm.Wrapper,{className:i?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:p,"aria-expanded":i,children:[n.jsx("span",{className:"chev",children:i?n.jsx(Ce,{}):n.jsx(Te,{})}),n.jsx("span",{className:"icon",children:n.jsx(rl,{})}),n.jsx("span",{className:"title",children:"Forms Handling"}),n.jsx("span",{className:"meta",children:i?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${i?"open":""}`,children:[n.jsxs("div",{className:"intro",children:[n.jsxs("div",{className:"pill",children:[n.jsx("span",{className:"pillIcon",children:n.jsx(ur,{})}),"Safe form handling checklist"]}),n.jsx("p",{className:"p",children:"Forms are one of the biggest entry points for bugs and security issues. The core rule is simple: validate input on server side, sanitize for storage, and escape on output."}),n.jsxs("div",{className:"note",children:[n.jsx("div",{className:"noteTitle",children:"Remember"}),n.jsx("div",{className:"noteText",children:"Client side validation is for UX. Server side validation is for security and correctness."})]})]}),n.jsx("div",{className:"sections",children:l.map(u=>n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:u.icon}),u.title]}),n.jsx("ul",{className:"bullets",children:u.points.map((v,k)=>n.jsxs("li",{className:"bullet",children:[n.jsx("span",{className:"dot"}),n.jsx("span",{className:"bulletText",children:v})]},`${u.key}-${k}`))}),n.jsxs("div",{className:"codeBlock",children:[n.jsx("div",{className:"codeTop",children:"Quick example"}),n.jsx("pre",{className:"code",children:u.example})]})]},u.key))})]})]})},Dm={Wrapper:ee.section`
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
    `},Wm=()=>{const[i,c]=W.useState(!1),l=W.useMemo(()=>[{key:"cookies",title:"Cookies",icon:n.jsx(pp,{}),intro:"Cookies are small key-value data stored in the browser and sent with requests to the server. Good for preferences and session ids.",blocks:[{heading:"setcookie",points:["Must be sent before any output (before echo / HTML).","Stored in browser, returned in next request headers.","Use for lightweight data - never store passwords."],exampleTitle:"Basic cookie",example:'setcookie("theme", "dark", time() + 3600, "/");'},{heading:"Expiry",points:["Expiry controls how long the cookie stays.","Session cookie: expires when browser closes (no expiry).","Persistent cookie: set expiry using time() + seconds."],exampleTitle:"Expires in 7 days",example:'setcookie("visit", "yes", time() + (7 * 24 * 60 * 60), "/");'},{heading:"Security flags",points:["HttpOnly: JS cannot read cookie (helps against XSS).","Secure: cookie sent only over HTTPS.","SameSite: helps reduce CSRF by controlling cross-site sending."],exampleTitle:"Safer cookie options",example:`setcookie("sid", $sessionId, [
  "expires" => time() + 3600,
  "path" => "/",
  "secure" => true,
  "httponly" => true,
  "samesite" => "Lax"
]);`,note:"In localhost HTTP, secure: true will prevent cookie from being set. Use secure: true in production HTTPS."}]},{key:"sessions",title:"Sessions",icon:n.jsx(wt,{}),intro:"Sessions store user data on the server. The browser only stores a session id (usually via cookie). Best for login state.",blocks:[{heading:"session_start",points:["Start session at the top of the request.","Required before reading or writing $_SESSION.","Must be called before any output."],exampleTitle:"Start session",example:"session_start();"},{heading:"$_SESSION usage",points:["Store data like user id after login.","Read it on every protected page request.","Keep it minimal. Store ids, not big objects."],exampleTitle:"Set and read session",example:`// after login success
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
}`,note:"Always hash passwords (password_hash). Never store raw passwords in database."}]}],[]),p=()=>c(u=>!u);return n.jsxs(Dm.Wrapper,{className:i?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:p,"aria-expanded":i,children:[n.jsx("span",{className:"chev",children:i?n.jsx(Ce,{}):n.jsx(Te,{})}),n.jsx("span",{className:"icon",children:n.jsx(ur,{})}),n.jsx("span",{className:"title",children:"Sessions and Cookies"}),n.jsx("span",{className:"meta",children:i?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${i?"open":""}`,children:[n.jsxs("div",{className:"intro",children:[n.jsxs("div",{className:"pill",children:[n.jsx("span",{className:"pillIcon",children:n.jsx(vp,{})}),"Login state and browser storage basics"]}),n.jsx("p",{className:"p",children:"Cookies live in the browser. Sessions live on the server. Most login systems use sessions and store only a session id in a cookie."}),n.jsxs("div",{className:"note",children:[n.jsx("div",{className:"noteTitle",children:"Quick rule"}),n.jsx("div",{className:"noteText",children:"Use cookies for small preferences. Use sessions for authentication and user state."})]})]}),n.jsx("div",{className:"sections",children:l.map(u=>n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTop",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:u.icon}),u.title]}),n.jsx("p",{className:"sectionIntro",children:u.intro})]}),n.jsx("div",{className:"blocks",children:u.blocks.map((v,k)=>n.jsxs("div",{className:"block",children:[n.jsxs("div",{className:"blockHead",children:[n.jsx("div",{className:"blockTitle",children:v.heading}),v.heading==="Expiry"&&n.jsxs("span",{className:"miniBadge",children:[n.jsx("span",{className:"miniIcon",children:n.jsx(ll,{})}),"time based"]}),v.heading==="Destroying sessions"&&n.jsxs("span",{className:"miniBadge",children:[n.jsx("span",{className:"miniIcon",children:n.jsx(mp,{})}),"logout"]}),v.heading==="Security flags"&&n.jsxs("span",{className:"miniBadge",children:[n.jsx("span",{className:"miniIcon",children:n.jsx(wt,{})}),"secure"]})]}),n.jsx("ul",{className:"bullets",children:v.points.map((I,T)=>n.jsxs("li",{className:"bullet",children:[n.jsx("span",{className:"dot"}),n.jsx("span",{children:I})]},`${u.key}-${k}-${T}`))}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(le,{})}),v.exampleTitle]}),n.jsx("pre",{className:"code",children:v.example})]}),v.note&&n.jsxs("div",{className:"hint",children:[n.jsx("div",{className:"hintTitle",children:"Tip"}),n.jsx("div",{className:"hintText",children:v.note})]})]},`${u.key}-${k}`))})]},u.key))})]})]})},Um={Wrapper:ee.section`
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
    `},Vm=()=>{const[i,c]=W.useState(!1),l=W.useMemo(()=>[{key:"fopen",title:"fopen",icon:n.jsx(up,{}),what:"Opens a file and returns a file handle (resource). Needed for fread, fwrite, fclose.",notes:["Common modes: r, r+, w, w+, a, a+","w creates file if missing and truncates it","a appends and creates file if missing"],example:'$handle = fopen("notes.txt", "r");'},{key:"fread",title:"fread",icon:n.jsx(yt,{}),what:"Reads bytes from an open file handle.",notes:["You must pass how many bytes to read","Often combined with filesize() for full read"],example:"$data = fread($handle, 1024);"},{key:"fwrite",title:"fwrite",icon:n.jsx(el,{}),what:"Writes a string to an open file handle.",notes:["Returns number of bytes written","Use a or a+ mode to append","Use w or w+ mode to overwrite"],example:'fwrite($handle, "Hello\\n");'},{key:"fclose",title:"fclose",icon:n.jsx(le,{}),what:"Closes an open file handle and frees resources.",notes:["Always close handles after use","Prevents file locks and resource leaks"],example:"fclose($handle);"},{key:"file_get_contents",title:"file_get_contents",icon:n.jsx(yt,{}),what:"Reads the entire file into a string (simple and common).",notes:["Best for small to medium files","Returns false on failure"],example:'$text = file_get_contents("notes.txt");'},{key:"file_put_contents",title:"file_put_contents",icon:n.jsx(el,{}),what:"Writes a string to a file in one call.",notes:["Overwrites by default","Use FILE_APPEND to append","Creates file if missing"],example:'file_put_contents("notes.txt", "Hello\\n", FILE_APPEND);'},{key:"unlink",title:"unlink",icon:n.jsx(mp,{}),what:"Deletes a file from the filesystem.",notes:["Returns true on success, false on failure","Check file_exists before unlink to avoid warnings"],example:'unlink("old.txt");'},{key:"file_exists",title:"file_exists",icon:n.jsx(dl,{}),what:"Checks if a file or directory exists at a path.",notes:["Returns true or false","Good before read, write, or delete operations"],example:'if (file_exists("notes.txt")) { ... }'}],[]),p=()=>c(u=>!u);return n.jsxs(Um.Wrapper,{className:i?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:p,"aria-expanded":i,children:[n.jsx("span",{className:"chev",children:i?n.jsx(Ce,{}):n.jsx(Te,{})}),n.jsx("span",{className:"icon",children:n.jsx(yt,{})}),n.jsx("span",{className:"title",children:"File Handling"}),n.jsx("span",{className:"meta",children:i?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${i?"open":""}`,children:[n.jsxs("div",{className:"intro",children:[n.jsxs("div",{className:"pill",children:[n.jsx("span",{className:"pillIcon",children:n.jsx(yt,{})}),"Read, write, append, delete files"]}),n.jsx("p",{className:"p",children:"PHP file handling is used for logs, reports, uploads, simple storage, and server side text processing. For most cases, prefer file_get_contents and file_put_contents for simplicity."}),n.jsxs("div",{className:"note",children:[n.jsxs("div",{className:"noteTitle",children:[n.jsx("span",{className:"noteIcon",children:n.jsx(sp,{})}),"Safety reminder"]}),n.jsx("div",{className:"noteText",children:"Always validate file paths if input comes from users. Never trust user provided filenames directly."})]})]}),n.jsx("div",{className:"sections",children:l.map(u=>n.jsxs("div",{className:"card",children:[n.jsxs("div",{className:"cardTop",children:[n.jsxs("div",{className:"cardTitle",children:[n.jsx("span",{className:"cardIcon",children:u.icon}),u.title]}),n.jsx("div",{className:"tag",children:"PHP"})]}),n.jsx("p",{className:"what",children:u.what}),n.jsx("ul",{className:"bullets",children:u.notes.map((v,k)=>n.jsxs("li",{children:[n.jsx("span",{className:"dot"}),n.jsx("span",{className:"bulletText",children:v})]},`${u.key}-n-${k}`))}),n.jsxs("div",{className:"example",children:[n.jsxs("div",{className:"exTop",children:[n.jsx("span",{className:"exIcon",children:n.jsx(le,{})}),"Example"]}),n.jsx("pre",{className:"code",children:u.example})]})]},u.key))}),n.jsxs("div",{className:"footerNote",children:[n.jsx("div",{className:"footerTitle",children:"Quick patterns"}),n.jsxs("ul",{className:"checks",children:[n.jsxs("li",{children:[n.jsx("span",{className:"checkDot"}),"Small files: use file_get_contents and file_put_contents"]}),n.jsxs("li",{children:[n.jsx("span",{className:"checkDot"}),"Streaming or large files: use fopen, fread, fwrite, fclose"]}),n.jsxs("li",{children:[n.jsx("span",{className:"checkDot"}),"Before delete or read: file_exists"]})]})]})]})]})},Qm={Wrapper:ee.section`
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
    `},Gm=()=>{const[i,c]=W.useState(!1),l=W.useMemo(()=>[{key:"errorReporting",title:"error_reporting",icon:n.jsx(xp,{}),desc:"Controls which PHP errors are displayed or logged.",code:`// Show all errors (development)
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Hide errors (production)
ini_set('display_errors', 0);`,note:"Use full error reporting in development. Disable display in production."},{key:"tryCatch",title:"try catch",icon:n.jsx(ur,{}),desc:"Used to handle exceptions safely without crashing the application.",code:`try {
    $num = 10 / 0;
} catch (Exception $e) {
    echo $e->getMessage();
}`,note:"Code that may fail goes inside try block."},{key:"throw",title:"throw",icon:n.jsx(Qs,{}),desc:"Used to manually create and throw an exception.",code:`function divide($a, $b) {
    if ($b == 0) {
        throw new Exception("Division by zero not allowed");
    }
    return $a / $b;
}`,note:"throw stops execution and passes control to catch block."},{key:"exceptions",title:"Exceptions",icon:n.jsx(ur,{}),desc:"Exceptions represent runtime errors that can be caught and handled.",code:`try {
    throw new Exception("Something went wrong");
} catch (Exception $e) {
    echo "Error: " . $e->getMessage();
}`,note:"Exceptions provide structured error handling."},{key:"customExceptions",title:"Custom Exceptions",icon:n.jsx(Qs,{}),desc:"Create your own exception class for better control.",code:`class MyException extends Exception {}

try {
    throw new MyException("Custom error triggered");
} catch (MyException $e) {
    echo $e->getMessage();
}`,note:"Custom exceptions help separate different error types."}],[]);return n.jsxs(Qm.Wrapper,{className:i?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:()=>c(p=>!p),"aria-expanded":i,children:[n.jsx("span",{className:"chev",children:i?n.jsx(Ce,{}):n.jsx(Te,{})}),n.jsx("span",{className:"icon",children:n.jsx(Qs,{})}),n.jsx("span",{className:"title",children:"Error Handling"}),n.jsx("span",{className:"meta",children:i?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${i?"open":""}`,children:[n.jsxs("div",{className:"intro",children:[n.jsxs("div",{className:"pill",children:[n.jsx("span",{className:"pillIcon",children:n.jsx(ll,{})}),"Handle runtime errors safely"]}),n.jsx("p",{className:"p",children:"Error handling prevents application crashes and allows graceful failure. PHP supports both traditional error reporting and modern exception handling."})]}),n.jsx("div",{className:"sections",children:l.map(p=>n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:p.icon}),p.title]}),n.jsxs("div",{className:"sectionBody",children:[n.jsx("p",{className:"desc",children:p.desc}),n.jsx("pre",{children:n.jsx("code",{children:p.code})}),n.jsxs("div",{className:"note",children:[n.jsx("strong",{children:"Important:"})," ",p.note]})]})]},p.key))})]})]})},qm={Wrapper:ee.section`
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
    `},Km=()=>{const[i,c]=W.useState(!1),l=W.useMemo(()=>[{key:"embedding",title:"Embedding PHP in HTML",icon:n.jsx(le,{}),content:`
PHP can be written directly inside HTML using <?php ... ?> tags.
The server executes PHP first, then sends pure HTML to the browser.
                `,example:`
<!-- example.php -->
<h1>Welcome</h1>

<?php
$name = "Ashish";
echo "<p>Hello " . $name . "</p>";
?>
                `},{key:"templating",title:"Templating basics",icon:n.jsx(qx,{}),content:`
PHP can act as a simple templating engine.
You mix dynamic data into HTML using echo or shorthand syntax.
                `,example:`
<?php $title = "Dashboard"; ?>

<h1><?= $title ?></h1>

<?php if ($isLoggedIn): ?>
    <p>Welcome back</p>
<?php endif; ?>
                `},{key:"buffering",title:"Output buffering",icon:n.jsx(co,{}),content:`
Output buffering stores output in memory before sending it to the browser.
Useful for modifying headers or capturing template output.
                `,example:`
<?php
ob_start();
echo "<h1>Hello</h1>";
$content = ob_get_clean();
?>
                `},{key:"separation",title:"Separating logic and view",icon:n.jsx(pr,{}),content:`
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
                `}],[]);return n.jsxs(qm.Wrapper,{children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:()=>c(!i),"aria-expanded":i,children:[n.jsx("span",{className:"chev",children:i?n.jsx(Ce,{}):n.jsx(Te,{})}),n.jsx("span",{className:"icon",children:n.jsx(vt,{})}),n.jsx("span",{className:"title",children:"PHP and HTML Integration"}),n.jsx("span",{className:"meta",children:i?"Collapse":"Expand"})]}),n.jsx("div",{className:`topicBody ${i?"open":""}`,children:l.map(p=>n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:p.icon}),p.title]}),n.jsx("p",{className:"desc",children:p.content}),n.jsx("pre",{children:n.jsx("code",{children:p.example})})]},p.key))})]})},Ym={Wrapper:ee.section`
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
    `},Xm=()=>{const[i,c]=W.useState(!1),l=W.useMemo(()=>[{key:"classesObjects",title:"Classes and Objects",icon:n.jsx(vt,{}),rows:[{label:"class",text:"Blueprint. Defines properties (data) and methods (behavior).",example:"class User { }"},{label:"object",text:"Instance created from a class using new.",example:"$u = new User();"},{label:"properties",text:"Variables inside a class that store object state.",example:"public string $name;"},{label:"methods",text:"Functions inside a class that operate on object state.",example:"public function greet() { }"},{label:"constructor",text:"Runs automatically on object creation. Use it to set initial state.",example:"public function __construct($name) { }"},{label:"destructor",text:"Runs when object is destroyed. Rarely needed in PHP, but used for cleanup.",example:"public function __destruct() { }"}]},{key:"accessModifiers",title:"Access Modifiers",icon:n.jsx(wt,{}),rows:[{label:"public",text:"Accessible from anywhere. Default intent for APIs you expose.",example:"public function run() { }"},{label:"private",text:"Accessible only inside the same class. Hides internal details.",example:"private string $token;"},{label:"protected",text:"Accessible in the class and its child classes. Useful for inheritance.",example:"protected function build() { }"}]},{key:"oopConcepts",title:"OOP Concepts",icon:n.jsx(pr,{}),rows:[{label:"Encapsulation",text:"Keep data safe by hiding internals and exposing controlled methods.",example:"private $balance + public deposit()"},{label:"Inheritance",text:"A child class can reuse and extend a parent class.",example:"class Admin extends User"},{label:"Polymorphism",text:"Same method name, different behavior (usually via inheritance or interfaces).",example:"->pay() works for CardPay, UpiPay"},{label:"Abstraction",text:"Hide implementation, expose only essential behavior (abstract class or interface).",example:"abstract class Shape { abstract area(); }"},{label:"Interfaces",text:"A contract. Classes must implement required methods.",example:"interface Logger { public function log($m); }"},{label:"Traits",text:"Reusable code blocks you can include in multiple classes (no inheritance needed).",example:"use HasTimestamps;"}]},{key:"static",title:"Static properties and methods",icon:n.jsx(cl,{}),rows:[{label:"static",text:"Belongs to the class itself, not a specific object. Access using ::.",example:"Config::$env or Config::get()"}]},{key:"namespaces",title:"Namespaces",icon:n.jsx(co,{}),rows:[{label:"namespace",text:"Organizes code and prevents name conflicts. Common in real projects and Composer.",example:"namespace App\\Services;"},{label:"use",text:"Imports a class with shorter name (alias optional).",example:"use App\\Services\\Mail;"}]}],[]),p=()=>c(u=>!u);return n.jsxs(Ym.Wrapper,{className:i?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:p,"aria-expanded":i,children:[n.jsx("span",{className:"chev",children:i?n.jsx(Ce,{}):n.jsx(Te,{})}),n.jsx("span",{className:"icon",children:n.jsx(dm,{})}),n.jsx("span",{className:"title",children:"Object Oriented PHP"}),n.jsx("span",{className:"meta",children:i?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${i?"open":""}`,children:[n.jsxs("div",{className:"intro",children:[n.jsxs("div",{className:"pill",children:[n.jsx("span",{className:"pillIcon",children:n.jsx(le,{})}),"OOP basics in one view"]}),n.jsx("p",{className:"p",children:"OOP helps you structure code using reusable objects. You model real features as classes, keep internals private, and expose clear methods. This keeps projects maintainable as they grow."}),n.jsxs("div",{className:"note",children:[n.jsx("div",{className:"noteTitle",children:"Quick rule"}),n.jsx("div",{className:"noteText",children:"Keep properties private by default, and expose behavior through methods. Prefer composition and interfaces when possible."})]})]}),n.jsx("div",{className:"sections",children:l.map(u=>n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:u.icon}),u.title]}),n.jsx("div",{className:"rows",children:u.rows.map((v,k)=>n.jsxs("div",{className:"row",children:[n.jsx("div",{className:"label",children:v.label}),n.jsxs("div",{className:"text",children:[n.jsx("div",{className:"desc",children:v.text}),n.jsxs("div",{className:"ex",children:[n.jsx("span",{className:"exLabel",children:"Example"}),n.jsx("span",{className:"mono",children:v.example})]})]})]},`${u.key}-${k}`))}),u.key==="oopConcepts"&&n.jsxs("div",{className:"miniCallout",children:[n.jsxs("div",{className:"miniCalloutTitle",children:[n.jsx("span",{className:"miniIcon",children:n.jsx(Kx,{})}),"How these connect"]}),n.jsx("div",{className:"miniCalloutText",children:"Interfaces define behavior. Classes implement that behavior. Traits share reusable code. Access modifiers protect internals. Together, they keep large PHP projects clean."})]}),u.key==="namespaces"&&n.jsxs("div",{className:"miniCallout",children:[n.jsxs("div",{className:"miniCalloutTitle",children:[n.jsx("span",{className:"miniIcon",children:n.jsx(nm,{})}),"Real world usage"]}),n.jsx("div",{className:"miniCalloutText",children:"Namespaces are standard in Composer projects. One folder usually maps to one namespace prefix, which keeps class names predictable."})]})]},u.key))})]})]})},Jm={Wrapper:ee.section`
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
    `},Zm=()=>{const[i,c]=W.useState(!1),l=W.useMemo(()=>[{key:"mysqlBasics",title:"MySQL Basics",icon:n.jsx(br,{}),content:"MySQL is a relational database used to store structured data in tables. PHP communicates with MySQL to perform CRUD operations."},{key:"mysqli",title:"Connecting with mysqli",icon:n.jsx(le,{}),code:`<?php
$conn = new mysqli("localhost", "root", "", "mydb");
if ($conn->connect_error) {
    die("Connection failed");
}
?>`},{key:"pdo",title:"Connecting with PDO",icon:n.jsx(le,{}),code:`<?php
$pdo = new PDO("mysql:host=localhost;dbname=mydb", "root", "");
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
?>`},{key:"prepared",title:"Prepared Statements",icon:n.jsx(ur,{}),content:"Prepared statements separate SQL logic from user input. This prevents SQL injection attacks.",code:`<?php
$stmt = $pdo->prepare("SELECT * FROM users WHERE email = ?");
$stmt->execute([$email]);
$user = $stmt->fetch();
?>`},{key:"fetching",title:"Fetching Data",icon:n.jsx(br,{}),code:`<?php
$stmt = $pdo->query("SELECT * FROM users");
$users = $stmt->fetchAll(PDO::FETCH_ASSOC);
?>`},{key:"insert",title:"Insert",icon:n.jsx(br,{}),code:`<?php
$stmt = $pdo->prepare("INSERT INTO users(name, email) VALUES(?, ?)");
$stmt->execute([$name, $email]);
?>`},{key:"update",title:"Update",icon:n.jsx(br,{}),code:`<?php
$stmt = $pdo->prepare("UPDATE users SET name = ? WHERE id = ?");
$stmt->execute([$name, $id]);
?>`},{key:"delete",title:"Delete",icon:n.jsx(br,{}),code:`<?php
$stmt = $pdo->prepare("DELETE FROM users WHERE id = ?");
$stmt->execute([$id]);
?>`},{key:"security",title:"Security Essentials",icon:n.jsx(wt,{}),content:"Never trust user input. Always validate, sanitize, and use prepared statements."},{key:"sqlInjection",title:"SQL Injection",icon:n.jsx(ur,{}),content:"SQL injection happens when raw user input modifies your SQL query. Prepared statements prevent this by binding parameters safely."},{key:"escaping",title:"Escaping",icon:n.jsx(ur,{}),content:"Escaping converts special characters into safe versions. Use built in functions instead of manual escaping whenever possible."},{key:"passwordHash",title:"Password Hashing",icon:n.jsx(wt,{}),code:`<?php
$hash = password_hash($password, PASSWORD_DEFAULT);
?>`},{key:"passwordVerify",title:"Password Verify",icon:n.jsx(wt,{}),code:`<?php
if (password_verify($password, $hash)) {
    echo "Login success";
}
?>`}],[]),p=()=>c(u=>!u);return n.jsxs(Jm.Wrapper,{className:i?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:p,"aria-expanded":i,children:[n.jsx("span",{className:"chev",children:i?n.jsx(Ce,{}):n.jsx(Te,{})}),n.jsx("span",{className:"icon",children:n.jsx(br,{})}),n.jsx("span",{className:"title",children:"Working with Databases (MySQL)"}),n.jsx("span",{className:"meta",children:i?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${i?"open":""}`,children:[n.jsx("div",{className:"intro",children:n.jsx("p",{className:"p",children:"PHP interacts with MySQL to perform CRUD operations. Always use prepared statements and password hashing in real applications."})}),n.jsx("div",{className:"sections",children:l.map(u=>n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:u.icon}),u.title]}),n.jsxs("div",{className:"sectionContent",children:[u.content&&n.jsx("p",{className:"p",children:u.content}),u.code&&n.jsx("pre",{children:n.jsx("code",{children:u.code})})]})]},u.key))})]})]})},eg={Wrapper:ee.section`
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
    `},rg=()=>{const[i,c]=W.useState(!1),l=W.useMemo(()=>[{key:"xss",title:"XSS prevention",icon:n.jsx(le,{}),content:"Cross Site Scripting happens when user input is injected into HTML and executed as JavaScript.",tips:["Never trust user input","Always escape output using htmlspecialchars","Use ENT_QUOTES flag","Avoid echoing raw $_GET or $_POST directly"],example:"echo htmlspecialchars($name, ENT_QUOTES, 'UTF-8');"},{key:"csrf",title:"CSRF basics",icon:n.jsx(ur,{}),content:"Cross Site Request Forgery tricks a logged in user into submitting unwanted requests.",tips:["Use CSRF tokens in forms","Validate token on form submission","Regenerate tokens periodically"],example:"$_SESSION['token'] === $_POST['token']"},{key:"validation",title:"Input validation",icon:n.jsx(vp,{}),content:"Validate data before processing. Sanitization removes unsafe characters. Validation checks correctness.",tips:["Use filter_input and filter_var","Check required fields","Validate email, numbers, length","Never rely only on frontend validation"],example:"filter_var($email, FILTER_VALIDATE_EMAIL);"},{key:"escaping",title:"Output escaping",icon:n.jsx(le,{}),content:"Escape output when displaying user data in HTML.",tips:["Use htmlspecialchars for HTML","Use prepared statements for SQL","Escape based on context HTML, JS, URL"],example:"echo htmlspecialchars($comment);"},{key:"upload",title:"File upload security",icon:n.jsx(gp,{}),content:"File uploads can be dangerous if not restricted properly.",tips:["Validate file type and extension","Check MIME type","Limit file size","Store outside public directory","Rename uploaded files"],example:"move_uploaded_file($tmp, $safePath);"},{key:"sessionFixation",title:"Session fixation",icon:n.jsx(wt,{}),content:"Attack where attacker sets session ID before login.",tips:["Regenerate session ID after login","Use session_regenerate_id(true)"],example:"session_regenerate_id(true);"},{key:"password",title:"Password hashing",icon:n.jsx(wt,{}),content:"Never store plain passwords. Always hash using strong algorithm.",tips:["Use password_hash","Use password_verify","Do not use md5 or sha1"],example:"password_hash($pass, PASSWORD_DEFAULT);"},{key:"https",title:"HTTPS importance",icon:n.jsx(fn,{}),content:"HTTPS encrypts communication between client and server.",tips:["Prevents man in the middle attacks","Protects login credentials","Required for secure cookies"],example:"Set-Cookie: Secure; HttpOnly"}],[]);return n.jsxs(eg.Wrapper,{children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:()=>c(p=>!p),children:[n.jsx("span",{className:"chev",children:i?n.jsx(Ce,{}):n.jsx(Te,{})}),n.jsx("span",{className:"icon",children:n.jsx(ur,{})}),n.jsx("span",{className:"title",children:"Security Essentials"}),n.jsx("span",{className:"meta",children:i?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${i?"open":""}`,children:[n.jsx("div",{className:"intro",children:n.jsx("p",{children:"Security is not optional. Even small applications must protect user data and prevent common attacks. Learn these basics before building real systems."})}),n.jsx("div",{className:"sections",children:l.map(p=>n.jsxs("div",{className:"card",children:[n.jsxs("div",{className:"cardTitle",children:[n.jsx("span",{className:"cardIcon",children:p.icon}),p.title]}),n.jsx("p",{className:"desc",children:p.content}),n.jsx("ul",{className:"list",children:p.tips.map((u,v)=>n.jsx("li",{children:u},v))}),n.jsx("div",{className:"example",children:n.jsx("code",{children:p.example})})]},p.key))})]})]})},tg={Wrapper:ee.section`
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
    `},ng=()=>{const[i,c]=W.useState(!1),l=W.useMemo(()=>[{key:"jsonEncode",title:"json_encode",icon:n.jsx(br,{}),content:"Converts PHP arrays or objects into JSON string format. Used when sending structured data to frontend or API clients.",example:`
$data = ["name" => "Ash", "age" => 25];
echo json_encode($data);
`},{key:"jsonDecode",title:"json_decode",icon:n.jsx(br,{}),content:"Converts JSON string into PHP data. By default returns object. Pass true to get associative array.",example:`
$json = '{"name":"Ash","age":25}';
$data = json_decode($json, true);
echo $data["name"];
`},{key:"createApi",title:"Creating API endpoints",icon:n.jsx(bt,{}),content:"An API endpoint is simply a PHP file that returns JSON instead of HTML. It processes request and responds with structured data.",example:`
header("Content-Type: application/json");

$response = ["status" => "success"];
echo json_encode($response);
`},{key:"requestBody",title:"Reading request body",icon:n.jsx(rl,{}),content:"For JSON requests, data is not available in $_POST. You must read raw input using php://input.",example:`
$raw = file_get_contents("php://input");
$data = json_decode($raw, true);
`},{key:"headers",title:"Setting headers",icon:n.jsx(pr,{}),content:"Headers define how client interprets response. Most APIs must set correct Content-Type.",example:`
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
`},{key:"contentType",title:"Content-Type",icon:n.jsx(pr,{}),content:"Content-Type tells client what format response is. For APIs use application/json.",example:`
header("Content-Type: application/json");
`},{key:"restBasics",title:"REST basics",icon:n.jsx(le,{}),content:"REST uses HTTP methods to perform actions. GET read. POST create. PUT update. DELETE remove. URL represents resource.",example:`
GET /users
POST /users
PUT /users/1
DELETE /users/1
`}],[]),p=()=>c(u=>!u);return n.jsxs(tg.Wrapper,{children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:p,"aria-expanded":i,children:[n.jsx("span",{className:"chev",children:i?n.jsx(Ce,{}):n.jsx(Te,{})}),n.jsx("span",{className:"icon",children:n.jsx(bt,{})}),n.jsx("span",{className:"title",children:"Working with JSON and APIs"}),n.jsx("span",{className:"meta",children:i?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${i?"open":""}`,children:[n.jsx("div",{className:"intro",children:n.jsx("p",{className:"p",children:"JSON is the standard format for data exchange in modern web applications. PHP can generate and read JSON easily, making it simple to build APIs."})}),n.jsx("div",{className:"sections",children:l.map(u=>n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:u.icon}),u.title]}),n.jsxs("div",{className:"sectionBody",children:[n.jsx("p",{className:"desc",children:u.content}),n.jsx("pre",{children:n.jsx("code",{children:u.example})})]})]},u.key))})]})]})},og={Wrapper:ee.section`
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
    `},ig=()=>{const[i,c]=W.useState(!1),l=W.useMemo(()=>[{key:"strictTypes",title:"Strict types",icon:n.jsx(ur,{}),what:"Forces PHP to respect parameter and return types more strictly.",why:"Reduces silent type juggling and catches mistakes early.",code:`<?php
declare(strict_types=1);

function add(int $a, int $b): int {
    return $a + $b;
}

add(2, 3);       // ok
add("2", "3");   // TypeError in strict mode
?>`,note:"declare(strict_types=1) must be the first statement in the file (after <?php)."},{key:"typedProps",title:"Typed properties",icon:n.jsx(yn,{}),what:"Class properties can have types like int, string, array, ?string.",why:"Makes objects safer and clearer, less guessing at runtime.",code:`<?php
class User {
    public int $id;
    public string $name;
    public ?string $email = null;
}
?>`,note:"Use ?type for nullable. Accessing an uninitialized typed property causes an error."},{key:"returnTypes",title:"Return types",icon:n.jsx(Bx,{}),what:"Functions can declare what they return: int, string, array, void, mixed, ?User.",why:"Prevents accidental wrong returns and improves readability.",code:`<?php
function getCount(): int {
    return 10;
}

function logMessage(string $msg): void {
    // no return
}
?>`,note:"If return type is declared and you return a different type, PHP throws a TypeError (especially strict mode)."},{key:"nullCoalescing",title:"Null coalescing operator ??",icon:n.jsx(pr,{}),what:"Provides a default when a value is null or not set.",why:"Cleaner than isset() checks for defaults.",code:`<?php
$name = $_GET["name"] ?? "Guest";

$theme = $config["theme"] ?? "dark";
?>`,note:"?? checks only for null / unset, not for empty string or 0."},{key:"spaceship",title:"Spaceship operator <=>",icon:n.jsx(hp,{}),what:"Compares two values and returns -1, 0, or 1.",why:"Perfect for sorting callbacks.",code:`<?php
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
?>`,note:"Attributes are read using reflection. Common in modern PHP frameworks."},{key:"enums",title:"Enums",icon:n.jsx(vt,{}),what:"A safe way to represent a fixed set of values.",why:"Prevents invalid states like status = 'donee' typo.",code:`<?php
enum Status: string {
    case Pending = "pending";
    case Paid = "paid";
    case Failed = "failed";
}

$status = Status::Paid;
?>`,note:"Enums improve correctness in business logic and APIs."},{key:"match",title:"Match expression",icon:n.jsx(le,{}),what:"Cleaner alternative to switch, returns a value and uses strict comparisons.",why:"Less boilerplate, fewer bugs, no fallthrough.",code:`<?php
$type = "admin";

$label = match ($type) {
    "admin" => "Full access",
    "user" => "Limited access",
    default => "Guest",
};
?>`,note:"match uses strict comparison (===) by default."},{key:"constructorPromotion",title:"Constructor property promotion",icon:n.jsx(Ht,{}),what:"Declare + assign class properties directly in constructor params.",why:"Cuts boilerplate and keeps classes clean.",code:`<?php
class Product {
    public function __construct(
        public int $id,
        public string $name,
        public float $price
    ) {}
}
?>`,note:"Great for DTOs and simple models. Use readonly when needed for immutability (modern PHP)."}],[]),p=()=>c(u=>!u);return n.jsxs(og.Wrapper,{className:i?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:p,"aria-expanded":i,children:[n.jsx("span",{className:"chev",children:i?n.jsx(Ce,{}):n.jsx(Te,{})}),n.jsx("span",{className:"icon",children:n.jsx(Ht,{})}),n.jsx("span",{className:"title",children:"Modern PHP Features"}),n.jsx("span",{className:"meta",children:i?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${i?"open":""}`,children:[n.jsxs("div",{className:"intro",children:[n.jsxs("div",{className:"pill",children:[n.jsx("span",{className:"pillIcon",children:n.jsx(Ht,{})}),"Modern PHP = safer code, less boilerplate"]}),n.jsx("p",{className:"p",children:"These features help you write cleaner and more reliable PHP. If you know these, your code looks modern and avoids common runtime bugs."}),n.jsxs("div",{className:"note",children:[n.jsx("div",{className:"noteTitle",children:"Quick rule"}),n.jsx("div",{className:"noteText",children:"Prefer strict types, typed properties, and return types for predictability. Use match and enums for safer business logic."})]})]}),n.jsx("div",{className:"sections",children:l.map(u=>n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:u.icon}),u.title]}),n.jsxs("div",{className:"content",children:[n.jsxs("div",{className:"block",children:[n.jsx("div",{className:"label",children:"What it is"}),n.jsx("div",{className:"text",children:u.what})]}),n.jsxs("div",{className:"block",children:[n.jsx("div",{className:"label",children:"Why it matters"}),n.jsx("div",{className:"text",children:u.why})]}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(le,{})}),"Example"]}),n.jsx("pre",{className:"code",children:u.code})]}),n.jsxs("div",{className:"tip",children:[n.jsx("span",{className:"tipLabel",children:"Tip"}),n.jsx("span",{className:"tipText",children:u.note})]})]})]},u.key))}),n.jsxs("div",{className:"footerNote",children:[n.jsx("div",{className:"footerTitle",children:"Fast revision checklist"}),n.jsxs("ul",{className:"checks",children:[n.jsxs("li",{children:[n.jsx("span",{className:"checkDot"}),"Use strict types for fewer surprises"]}),n.jsxs("li",{children:[n.jsx("span",{className:"checkDot"}),"Use typed properties and return types"]}),n.jsxs("li",{children:[n.jsx("span",{className:"checkDot"}),"Use ?? for defaults and match for mapping"]}),n.jsxs("li",{children:[n.jsx("span",{className:"checkDot"}),"Use enums for status and roles"]})]})]})]})]})},ag={Wrapper:ee.section`
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
    `},sg=()=>{const[i,c]=W.useState(!1),l=()=>c(p=>!p);return n.jsxs(ag.Wrapper,{className:i?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":i,children:[n.jsx("span",{className:"chev",children:i?n.jsx(Ce,{}):n.jsx(Te,{})}),n.jsx("span",{className:"icon",children:n.jsx(co,{})}),n.jsx("span",{className:"title",children:"Composer and Autoloading"}),n.jsx("span",{className:"meta",children:i?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${i?"open":""}`,children:[n.jsxs("div",{className:"intro",children:[n.jsxs("div",{className:"pill",children:[n.jsx("span",{className:"pillIcon",children:n.jsx(co,{})}),"PHP dependency manager + clean class loading"]}),n.jsx("p",{className:"p",children:"Composer is the standard way to install PHP libraries and load your classes automatically. It keeps projects clean, scalable, and predictable."}),n.jsxs("div",{className:"note",children:[n.jsx("div",{className:"noteTitle",children:"At a glance"}),n.jsxs("div",{className:"noteText",children:["You declare dependencies in"," ",n.jsx("span",{className:"mono",children:"composer.json"}),", run"," ",n.jsx("span",{className:"mono",children:"composer install"}),", and include"," ",n.jsx("span",{className:"mono",children:"vendor/autoload.php"}),"."]})]})]}),n.jsxs("div",{className:"sections",children:[n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:n.jsx(co,{})}),"What is Composer"]}),n.jsxs("div",{className:"rows",children:[n.jsxs("div",{className:"row",children:[n.jsx("div",{className:"op",children:"Purpose"}),n.jsx("div",{className:"text",children:n.jsx("div",{className:"desc",children:"Composer manages third party packages (libraries) for PHP. It downloads them, locks versions, and generates an autoloader so you do not write manual require statements everywhere."})})]}),n.jsxs("div",{className:"row",children:[n.jsx("div",{className:"op",children:"Why"}),n.jsx("div",{className:"text",children:n.jsx("div",{className:"desc",children:"Easier dependency installs, consistent versions across machines, and clean project structure."})})]})]})]}),n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:n.jsx(yt,{})}),"composer.json"]}),n.jsxs("div",{className:"rows",children:[n.jsxs("div",{className:"row",children:[n.jsx("div",{className:"op",children:"What"}),n.jsxs("div",{className:"text",children:[n.jsx("div",{className:"desc",children:"The main config file. It defines project info, required packages, autoload rules, and scripts."}),n.jsxs("div",{className:"ex",children:[n.jsx("span",{className:"exLabel",children:"Common keys"}),n.jsx("span",{className:"mono",children:"require, require-dev, autoload, scripts"})]})]})]}),n.jsxs("div",{className:"row",children:[n.jsx("div",{className:"op",children:"Rule"}),n.jsx("div",{className:"text",children:n.jsxs("div",{className:"desc",children:["Do not edit"," ",n.jsx("span",{className:"mono",children:"vendor"})," ","files manually. Composer manages that folder."]})})]})]})]}),n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:n.jsx(Fx,{})}),"Installing packages"]}),n.jsxs("div",{className:"rows",children:[n.jsxs("div",{className:"row",children:[n.jsx("div",{className:"op",children:"Install"}),n.jsxs("div",{className:"text",children:[n.jsxs("div",{className:"desc",children:["Installs dependencies listed in"," ",n.jsx("span",{className:"mono",children:"composer.json"})," ","and creates the"," ",n.jsx("span",{className:"mono",children:"vendor"})," ","folder."]}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(le,{})}),"Command"]}),n.jsx("pre",{className:"code",children:"composer install"})]})]})]}),n.jsxs("div",{className:"row",children:[n.jsx("div",{className:"op",children:"Add"}),n.jsxs("div",{className:"text",children:[n.jsxs("div",{className:"desc",children:["Adds a new package and updates"," ",n.jsx("span",{className:"mono",children:"composer.json"})," ","and"," ",n.jsx("span",{className:"mono",children:"composer.lock"}),"."]}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(le,{})}),"Command"]}),n.jsx("pre",{className:"code",children:"composer require vendor/package"})]})]})]})]})]}),n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:n.jsx(fp,{})}),"Autoloading"]}),n.jsxs("div",{className:"rows",children:[n.jsxs("div",{className:"row",children:[n.jsx("div",{className:"op",children:"Meaning"}),n.jsx("div",{className:"text",children:n.jsxs("div",{className:"desc",children:["Autoloading means PHP loads class files automatically when you use a class. You do not write"," ",n.jsx("span",{className:"mono",children:"require"})," ","for every class file."]})})]}),n.jsxs("div",{className:"row",children:[n.jsx("div",{className:"op",children:"How"}),n.jsxs("div",{className:"text",children:[n.jsx("div",{className:"desc",children:"Include Composer's autoloader once, then use classes normally."}),n.jsxs("div",{className:"codeBlock",children:[n.jsxs("div",{className:"codeTop",children:[n.jsx("span",{className:"codeIcon",children:n.jsx(le,{})}),"Include autoloader"]}),n.jsx("pre",{className:"code",children:'require __DIR__ . "/vendor/autoload.php";'})]})]})]}),n.jsxs("div",{className:"row",children:[n.jsx("div",{className:"op",children:"Tip"}),n.jsx("div",{className:"text",children:n.jsxs("div",{className:"desc",children:["If you update autoload settings, run"," ",n.jsx("span",{className:"mono",children:"composer dump-autoload"})," ","to regenerate the autoloader."]})})]})]})]}),n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:n.jsx(pr,{})}),"PSR standards"]}),n.jsxs("div",{className:"rows",children:[n.jsxs("div",{className:"row",children:[n.jsx("div",{className:"op",children:"What"}),n.jsx("div",{className:"text",children:n.jsx("div",{className:"desc",children:"PSR means PHP Standards Recommendation. These are community standards that help different libraries work together with consistent code style and autoloading."})})]}),n.jsxs("div",{className:"row",children:[n.jsx("div",{className:"op",children:"Must know"}),n.jsxs("div",{className:"text",children:[n.jsxs("div",{className:"desc",children:[n.jsx("span",{className:"mono",children:"PSR-4"})," is the most important for autoloading. It maps namespaces to folder paths."]}),n.jsxs("div",{className:"ex",children:[n.jsx("span",{className:"exLabel",children:"Example idea"}),n.jsx("span",{className:"mono",children:"App\\Controllers\\UserController"})]})]})]}),n.jsxs("div",{className:"row",children:[n.jsx("div",{className:"op",children:"Outcome"}),n.jsx("div",{className:"text",children:n.jsx("div",{className:"desc",children:"Cleaner codebase, predictable file structure, and easier team work."})})]})]})]})]}),n.jsxs("div",{className:"footerNote",children:[n.jsx("div",{className:"footerTitle",children:"Quick checklist"}),n.jsxs("ul",{className:"checks",children:[n.jsxs("li",{children:[n.jsx("span",{className:"checkDot"}),"Dependencies go in composer.json"]}),n.jsxs("li",{children:[n.jsx("span",{className:"checkDot"}),"Install with composer install"]}),n.jsxs("li",{children:[n.jsx("span",{className:"checkDot"}),"Require vendor/autoload.php once"]}),n.jsxs("li",{children:[n.jsx("span",{className:"checkDot"}),"Follow PSR-4 for namespaces and folders"]})]})]})]})]})},lg={Wrapper:ee.section`
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
    `},cg=()=>{const[i,c]=W.useState(!1),l=W.useMemo(()=>[{key:"mvc",title:"MVC Concept",icon:n.jsx(pr,{}),text:"MVC stands for Model View Controller. It separates application logic into three layers to make code clean and maintainable.",bullets:["Model handles data and database logic","View handles UI output","Controller handles request logic and connects model and view","Separation improves scalability and testing"]},{key:"routing",title:"Routing Basics",icon:n.jsx(Xx,{}),text:"Routing decides which controller runs when a user visits a URL.",bullets:["URL maps to specific controller action","Example: /users -> UserController","Helps organize application endpoints","Common in frameworks like Laravel"]},{key:"controllers",title:"Controllers",icon:n.jsx(bt,{}),text:"Controllers process user requests. They contain application logic.",bullets:["Receive request data","Validate inputs","Call models for data","Return a view or JSON response"]},{key:"views",title:"Views",icon:n.jsx(Dx,{}),text:"Views handle presentation layer. They generate HTML output.",bullets:["Display data from controller","Should not contain heavy logic","Keeps UI separate from backend code","Usually .php template files"]},{key:"models",title:"Models",icon:n.jsx(br,{}),text:"Models manage database interaction and business logic.",bullets:["Handle queries and database connection","Return structured data","Keep SQL separate from controllers","Represent application entities"]},{key:"structure",title:"Basic Folder Structure",icon:n.jsx(up,{}),text:"A clean folder structure improves readability and maintainability.",bullets:["public -> entry point index.php","app/Controllers -> controller classes","app/Models -> database logic","app/Views -> templates","routes -> routing definitions"]}],[]);return n.jsxs(lg.Wrapper,{className:i?"open":"",children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:()=>c(p=>!p),"aria-expanded":i,children:[n.jsx("span",{className:"chev",children:i?n.jsx(Ce,{}):n.jsx(Te,{})}),n.jsx("span",{className:"icon",children:n.jsx(pr,{})}),n.jsx("span",{className:"title",children:"Project Structure Basics"}),n.jsx("span",{className:"meta",children:i?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${i?"open":""}`,children:[n.jsx("div",{className:"intro",children:n.jsx("p",{className:"p",children:"Understanding structure is more important than syntax. Good architecture keeps your backend clean, scalable, and maintainable."})}),n.jsxs("div",{className:"sections",children:[l.map(p=>n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:p.icon}),p.title]}),n.jsxs("div",{className:"sectionBodyInner",children:[n.jsx("p",{className:"desc",children:p.text}),n.jsx("ul",{className:"bullets",children:p.bullets.map((u,v)=>n.jsx("li",{children:u},v))})]})]},p.key)),n.jsxs("div",{className:"codeBlock",children:[n.jsx("div",{className:"codeTitle",children:"Example Folder Structure"}),n.jsx("pre",{children:`project/
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
    └── web.php`})]})]})]})]})},dg={Wrapper:ee.section`
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
    `},ug=()=>{const[i,c]=W.useState(!1),l=()=>c(p=>!p);return n.jsxs(dg.Wrapper,{children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":i,children:[n.jsx("span",{className:"chev",children:i?n.jsx(Ce,{}):n.jsx(Te,{})}),n.jsx("span",{className:"icon",children:n.jsx(bt,{})}),n.jsx("span",{className:"title",children:"Deployment Basics"}),n.jsx("span",{className:"meta",children:i?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${i?"open":""}`,children:[n.jsxs("div",{className:"intro",children:[n.jsxs("div",{className:"pill",children:[n.jsx("span",{className:"pillIcon",children:n.jsx(le,{})}),"Production fundamentals checklist"]}),n.jsx("p",{className:"p",children:"Deployment is the process of moving your PHP application from local development to a live production server. It requires environment configuration, security settings, and proper server setup."})]}),n.jsxs("div",{className:"sections",children:[n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:n.jsx(yt,{})}),".env files"]}),n.jsxs("div",{className:"sectionBody",children:[n.jsx("p",{children:"Environment files store sensitive configuration like database credentials, API keys, and secret tokens. These should never be committed to version control."}),n.jsx("pre",{children:`DB_HOST=localhost
DB_NAME=app_db
DB_USER=root
DB_PASS=secret`}),n.jsx("div",{className:"note",children:"Keep .env outside public directory and add it to .gitignore."})]})]}),n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:n.jsx(tm,{})}),"Server Configuration"]}),n.jsxs("div",{className:"sectionBody",children:[n.jsx("p",{children:"A PHP app runs through a web server like Apache or Nginx. The server must be configured to point to your project’s public directory as the document root."}),n.jsx("div",{className:"note",children:"Only expose the public folder, never the full project root."})]})]}),n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:n.jsx(bt,{})}),"Apache vs Nginx"]}),n.jsxs("div",{className:"sectionBody",children:[n.jsx("p",{children:"Apache uses .htaccess files for per-directory configuration. Nginx uses centralized configuration files."}),n.jsxs("ul",{children:[n.jsx("li",{children:"Apache - simpler setup, supports .htaccess"}),n.jsx("li",{children:"Nginx - faster under heavy load"})]})]})]}),n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:n.jsx(yt,{})}),".htaccess basics"]}),n.jsxs("div",{className:"sectionBody",children:[n.jsx("p",{children:".htaccess allows URL rewriting, redirects, access control, and security rules in Apache."}),n.jsx("pre",{children:`RewriteEngine On
RewriteRule ^$ index.php [L]
RewriteRule ^(.*)$ index.php?url=$1 [QSA,L]`}),n.jsx("div",{className:"note",children:"Used for clean URLs and routing in PHP apps."})]})]}),n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:n.jsx(sp,{})}),"Production error settings"]}),n.jsxs("div",{className:"sectionBody",children:[n.jsx("p",{children:"In production, never display errors to users. Log errors instead."}),n.jsx("pre",{children:`display_errors = Off
log_errors = On`}),n.jsx("div",{className:"note",children:"Showing errors in production exposes sensitive information."})]})]})]})]})]})},pg={Wrapper:ee.section`
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
    `},fg=()=>{const[i,c]=W.useState(!1),l=()=>c(p=>!p);return n.jsxs(pg.Wrapper,{children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":i,children:[n.jsx("span",{className:"chev",children:i?n.jsx(Ce,{}):n.jsx(Te,{})}),n.jsx("span",{className:"icon",children:n.jsx(Ht,{})}),n.jsx("span",{className:"title",children:"Performance Basics"}),n.jsx("span",{className:"meta",children:i?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${i?"open":""}`,children:[n.jsxs("div",{className:"intro",children:[n.jsxs("div",{className:"pill",children:[n.jsx("span",{className:"pillIcon",children:n.jsx(lm,{})}),"Faster pages, fewer server hits"]}),n.jsx("p",{className:"p",children:"Performance is mostly about doing less work: fewer DB calls, less repeated computation, and letting caching do its job. Focus on the biggest bottlenecks first."}),n.jsxs("div",{className:"note",children:[n.jsx("div",{className:"noteTitle",children:"Rule of thumb"}),n.jsx("div",{className:"noteText",children:"Database calls are usually slower than PHP code. Reduce queries first, then optimize code."})]})]}),n.jsxs("div",{className:"sections",children:[n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:n.jsx(pr,{})}),"Caching basics"]}),n.jsxs("div",{className:"sectionBody",children:[n.jsx("p",{children:"Caching stores results so you do not recompute or refetch them on every request. Cache can be at browser level, server level, or application level."}),n.jsxs("ul",{children:[n.jsx("li",{children:"Browser caching for static files (CSS, JS, images)"}),n.jsx("li",{children:"Server caching for generated pages or API responses"}),n.jsx("li",{children:"App caching for expensive DB queries or computed results"})]}),n.jsx("div",{className:"note",children:"Cache only when data does not change too often, and always plan cache invalidation."})]})]}),n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:n.jsx(le,{})}),"Output buffering"]}),n.jsxs("div",{className:"sectionBody",children:[n.jsx("p",{children:"Output buffering lets PHP collect output in memory before sending it to the browser. This helps when you want to modify output later or control headers before content is sent."}),n.jsx("pre",{children:`ob_start();

echo "Hello";
$content = ob_get_clean(); // gets output and clears buffer

// now you can modify $content or cache it`}),n.jsx("div",{className:"note",children:'Useful for templating, caching full HTML, and avoiding "headers already sent" issues.'})]})]}),n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:n.jsx(cl,{})}),"OPcache"]}),n.jsxs("div",{className:"sectionBody",children:[n.jsx("p",{children:"OPcache is a PHP extension that stores compiled script bytecode in memory. This avoids parsing and compiling PHP files on every request."}),n.jsx("pre",{children:`; php.ini (example)
opcache.enable=1
opcache.memory_consumption=128
opcache.max_accelerated_files=10000`}),n.jsx("div",{className:"note",children:"Enable OPcache in production. It gives big speed wins with almost zero code changes."})]})]}),n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:n.jsx(br,{})}),"Reducing DB calls"]}),n.jsxs("div",{className:"sectionBody",children:[n.jsx("p",{children:"Too many DB queries slow down requests. Try to fetch only what you need, and reduce repeated queries in loops."}),n.jsxs("ul",{children:[n.jsx("li",{children:"Use indexes for common WHERE columns"}),n.jsx("li",{children:"Fetch only required columns (avoid SELECT *)"}),n.jsx("li",{children:"Batch queries instead of querying inside loops"}),n.jsx("li",{children:"Cache frequently used results"})]}),n.jsx("div",{className:"note",children:"If you see queries inside a loop, it is usually a performance red flag."})]})]}),n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:n.jsx(Ht,{})}),"Code optimization"]}),n.jsxs("div",{className:"sectionBody",children:[n.jsx("p",{children:"Optimize only after measuring. Keep code simple, avoid heavy work on every request, and use built in functions where possible."}),n.jsxs("ul",{children:[n.jsx("li",{children:"Profile first, then optimize"}),n.jsx("li",{children:"Reuse computed values"}),n.jsx("li",{children:"Avoid unnecessary loops and conversions"}),n.jsx("li",{children:"Use prepared statements for DB queries"}),n.jsx("li",{children:"Move heavy tasks to background jobs when needed"})]}),n.jsx("div",{className:"note",children:"Biggest wins usually come from caching + fewer DB calls, not micro optimizations."})]})]})]})]})]})},hg={Wrapper:ee.section`
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
    `},xg=()=>{const[i,c]=W.useState(!1),l=()=>c(p=>!p);return n.jsxs(hg.Wrapper,{children:[n.jsxs("button",{type:"button",className:"topicHeader",onClick:l,"aria-expanded":i,children:[n.jsx("span",{className:"chev",children:i?n.jsx(Ce,{}):n.jsx(Te,{})}),n.jsx("span",{className:"icon",children:n.jsx(_u,{})}),n.jsx("span",{className:"title",children:"Testing Basics"}),n.jsx("span",{className:"meta",children:i?"Collapse":"Expand"})]}),n.jsxs("div",{className:`topicBody ${i?"open":""}`,children:[n.jsxs("div",{className:"intro",children:[n.jsxs("div",{className:"pill",children:[n.jsx("span",{className:"pillIcon",children:n.jsx(le,{})}),"Stability and reliability fundamentals"]}),n.jsx("p",{className:"p",children:"Testing ensures your PHP application behaves correctly. It helps detect bugs early and prevents regressions when updating code."})]}),n.jsxs("div",{className:"sections",children:[n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:n.jsx(_u,{})}),"Basic Unit Testing Concept"]}),n.jsxs("div",{className:"sectionBody",children:[n.jsx("p",{children:"Unit testing means testing small pieces of code independently, usually functions or methods. Each test verifies expected output for a given input."}),n.jsx("pre",{children:`function add($a, $b) {
    return $a + $b;
}

// Expected: 5
add(2, 3);`}),n.jsx("div",{className:"note",children:"Goal: One function, one behavior, one test."})]})]}),n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:n.jsx(le,{})}),"PHPUnit Basics"]}),n.jsxs("div",{className:"sectionBody",children:[n.jsx("p",{children:"PHPUnit is the standard testing framework for PHP. It allows automated test execution and assertions."}),n.jsx("pre",{children:`use PHPUnit\\Framework\\TestCase;

class MathTest extends TestCase {
    public function testAddition() {
        $this->assertEquals(5, 2 + 3);
    }
}`}),n.jsx("div",{className:"note",children:"Run tests via: vendor/bin/phpunit"})]})]}),n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:n.jsx(dl,{})}),"Debugging with var_dump"]}),n.jsxs("div",{className:"sectionBody",children:[n.jsx("p",{children:"var_dump displays variable type and value. Useful during development for quick inspection."}),n.jsx("pre",{children:`$user = ["name" => "Ash", "age" => 25];
var_dump($user);`}),n.jsx("div",{className:"note",children:"Avoid leaving var_dump in production code."})]})]}),n.jsxs("div",{className:"section",children:[n.jsxs("div",{className:"sectionTitle",children:[n.jsx("span",{className:"sectionIcon",children:n.jsx(yt,{})}),"Logging"]}),n.jsxs("div",{className:"sectionBody",children:[n.jsx("p",{children:"Logging records runtime information to files. Essential for debugging production issues."}),n.jsx("pre",{children:'error_log("Something went wrong");'}),n.jsx("div",{className:"note",children:"Production apps log errors instead of displaying them."})]})]})]})]})]})};function mg(){return n.jsxs(Vs.Wrapper,{children:[n.jsx(Vs.Header,{children:n.jsx(um,{})}),n.jsxs(Vs.Main,{id:"notes-scroll",children:[n.jsxs("div",{className:"contentWrapper",children:[n.jsx(jm,{}),n.jsx(Sm,{}),n.jsx(Tm,{}),n.jsx(Pm,{}),n.jsx(Lm,{}),n.jsx(Im,{}),n.jsx(Mm,{}),n.jsx(Om,{}),n.jsx(Bm,{}),n.jsx(Am,{}),n.jsx(Wm,{}),n.jsx(Vm,{}),n.jsx(Gm,{}),n.jsx(Km,{}),n.jsx(Xm,{}),n.jsx(Zm,{}),n.jsx(rg,{}),n.jsx(ng,{}),n.jsx(ig,{}),n.jsx(sg,{}),n.jsx(cg,{}),n.jsx(ug,{}),n.jsx(fg,{}),n.jsx(xg,{})]}),n.jsx("div",{className:"footerWrapper",children:n.jsx(bm,{})})]}),n.jsx(km,{})]})}Sh.createRoot(document.getElementById("root")).render(n.jsx(n.Fragment,{children:n.jsx(mg,{})}));
