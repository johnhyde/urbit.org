!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define("tile",t):(e=e||self).tile=t()}(this,function(){"use strict";var e="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};e.setTimeout,e.clearTimeout;var t=e.performance||{};t.now||t.mozNow||t.msNow||t.oNow||t.webkitNow;function r(e,t){return e(t={exports:{}},t.exports),t.exports}var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;var i=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(e){n[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var r,i,u=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),s=1;s<arguments.length;s++){for(var c in r=Object(arguments[s]))o.call(r,c)&&(u[c]=r[c]);if(n){i=n(r);for(var l=0;l<i.length;l++)a.call(r,i[l])&&(u[i[l]]=r[i[l]])}}return u};function u(e){for(var t=arguments.length-1,r="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=0;n<t;n++)r+="&args[]="+encodeURIComponent(arguments[n+1]);!function(e,t,r,n,o,a,i,u){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[r,n,o,a,i,u],c=0;(e=Error(t.replace(/%s/g,function(){return s[c++]}))).name="Invariant Violation"}throw e.framesToPop=1,e}}(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",r)}var s={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},c={};function l(e,t,r){this.props=e,this.context=t,this.refs=c,this.updater=r||s}function f(){}function p(e,t,r){this.props=e,this.context=t,this.refs=c,this.updater=r||s}l.prototype.isReactComponent={},l.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&u("85"),this.updater.enqueueSetState(this,e,t,"setState")},l.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},f.prototype=l.prototype;var d=p.prototype=new f;d.constructor=p,i(d,l.prototype),d.isPureReactComponent=!0;var y=function(){},m="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",v={},h=Function.call.bind(Object.prototype.hasOwnProperty);function g(e,t,r,n,o){for(var a in e)if(h(e,a)){var i;try{if("function"!=typeof e[a]){var u=Error((n||"React class")+": "+r+" type `"+a+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[a]+"`.");throw u.name="Invariant Violation",u}i=e[a](t,a,n,r,null,m)}catch(e){i=e}if(!i||i instanceof Error||y((n||"React class")+": type specification of "+r+" `"+a+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof i+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),i instanceof Error&&!(i.message in v)){v[i.message]=!0;var s=o?o():"";y("Failed "+r+" type: "+i.message+(null!=s?s:""))}}}y=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},g.resetWarningCache=function(){v={}};var b=g,w=r(function(e){!function(){var t=i,r=b,n="function"==typeof Symbol&&Symbol.for,o=n?Symbol.for("react.element"):60103,a=n?Symbol.for("react.portal"):60106,u=n?Symbol.for("react.fragment"):60107,s=n?Symbol.for("react.strict_mode"):60108,c=n?Symbol.for("react.profiler"):60114,l=n?Symbol.for("react.provider"):60109,f=n?Symbol.for("react.context"):60110,p=n?Symbol.for("react.concurrent_mode"):60111,d=n?Symbol.for("react.forward_ref"):60112,y=n?Symbol.for("react.suspense"):60113,m=n?Symbol.for("react.memo"):60115,v=n?Symbol.for("react.lazy"):60116,h="function"==typeof Symbol&&Symbol.iterator,g="@@iterator";function w(e){if(null===e||"object"!=typeof e)return null;var t=h&&e[h]||e[g];return"function"==typeof t?t:null}var _=function(){};function C(e,t,r,n,o,a,i,u){if(_(t),!e){var s=void 0;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[r,n,o,a,i,u],l=0;(s=new Error(t.replace(/%s/g,function(){return c[l++]}))).name="Invariant Violation"}throw s.framesToPop=1,s}}_=function(e){if(void 0===e)throw new Error("invariant requires an error message argument")};var k=function(e,t){if(void 0===t)throw new Error("`lowPriorityWarning(condition, format, ...args)` requires a warning message argument");if(!e){for(var r=arguments.length,n=Array(r>2?r-2:0),o=2;o<r;o++)n[o-2]=arguments[o];(function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var o=0,a="Warning: "+e.replace(/%s/g,function(){return r[o++]});"undefined"!=typeof console&&console.warn(a);try{throw new Error(a)}catch(e){}}).apply(void 0,[t].concat(n))}},j=function(e,t){for(var r=arguments.length,n=Array(r>2?r-2:0),o=2;o<r;o++)n[o-2]=arguments[o];if(void 0===t)throw new Error("`warningWithoutStack(condition, format, ...args)` requires a warning message argument");if(n.length>8)throw new Error("warningWithoutStack() currently supports at most 8 arguments.");if(!e){if("undefined"!=typeof console){var a=n.map(function(e){return""+e});a.unshift("Warning: "+t),Function.prototype.apply.call(console.error,console,a)}try{var i=0,u="Warning: "+t.replace(/%s/g,function(){return n[i++]});throw new Error(u)}catch(e){}}},O={};function R(e,t){var r=e.constructor,n=r&&(r.displayName||r.name)||"ReactClass",o=n+"."+t;O[o]||(j(!1,"Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",t,n),O[o]=!0)}var P={isMounted:function(e){return!1},enqueueForceUpdate:function(e,t,r){R(e,"forceUpdate")},enqueueReplaceState:function(e,t,r,n){R(e,"replaceState")},enqueueSetState:function(e,t,r,n){R(e,"setState")}},S={};function x(e,t,r){this.props=e,this.context=t,this.refs=S,this.updater=r||P}Object.freeze(S),x.prototype.isReactComponent={},x.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&C(!1,"setState(...): takes an object of state variables to update or a function which returns an object of state variables."),this.updater.enqueueSetState(this,e,t,"setState")},x.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};var E={isMounted:["isMounted","Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],replaceState:["replaceState","Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]},N=function(e,t){Object.defineProperty(x.prototype,e,{get:function(){k(!1,"%s(...) is deprecated in plain JavaScript React classes. %s",t[0],t[1])}})};for(var $ in E)E.hasOwnProperty($)&&N($,E[$]);function T(){}function A(e,t,r){this.props=e,this.context=t,this.refs=S,this.updater=r||P}T.prototype=x.prototype;var I=A.prototype=new T;I.constructor=A,t(I,x.prototype),I.isPureReactComponent=!0;var D={current:null},q={current:null},U=/^(.*)[\\\/]/,F=1;function M(e){if(null==e)return null;if("number"==typeof e.tag&&j(!1,"Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."),"function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case p:return"ConcurrentMode";case u:return"Fragment";case a:return"Portal";case c:return"Profiler";case s:return"StrictMode";case y:return"Suspense"}if("object"==typeof e)switch(e.$$typeof){case f:return"Context.Consumer";case l:return"Context.Provider";case d:return n=e,o=e.render,i="ForwardRef",h=o.displayName||o.name||"",n.displayName||(""!==h?i+"("+h+")":i);case m:return M(e.type);case v:var t=(r=e)._status===F?r._result:null;if(t)return M(t)}var r,n,o,i,h;return null}var W={},z=null;function V(e){z=e}W.getCurrentStack=null,W.getStackAddendum=function(){var e="";if(z){var t=M(z.type),r=z._owner;e+=function(e,t,r){var n="";if(t){var o=t.fileName,a=o.replace(U,"");if(/^index\./.test(a)){var i=o.match(U);if(i){var u=i[1];u&&(a=u.replace(U,"")+"/"+a)}}n=" (at "+a+":"+t.lineNumber+")"}else r&&(n=" (created by "+r+")");return"\n    in "+(e||"Unknown")+n}(t,z._source,r&&M(r.type))}var n=W.getCurrentStack;return n&&(e+=n()||""),e};var L={ReactCurrentDispatcher:D,ReactCurrentOwner:q,assign:t};t(L,{ReactDebugCurrentFrame:W,ReactComponentTreeHook:{}});var Y=function(e,t){if(!e){for(var r=L.ReactDebugCurrentFrame.getStackAddendum(),n=arguments.length,o=Array(n>2?n-2:0),a=2;a<n;a++)o[a-2]=arguments[a];j.apply(void 0,[!1,t+"%s"].concat(o,[r]))}},H=Object.prototype.hasOwnProperty,B={key:!0,ref:!0,__self:!0,__source:!0},J=void 0,X=void 0;function G(e){if(H.call(e,"ref")){var t=Object.getOwnPropertyDescriptor(e,"ref").get;if(t&&t.isReactWarning)return!1}return void 0!==e.ref}function K(e){if(H.call(e,"key")){var t=Object.getOwnPropertyDescriptor(e,"key").get;if(t&&t.isReactWarning)return!1}return void 0!==e.key}var Q=function(e,t,r,n,a,i,u){var s={$$typeof:o,type:e,key:t,ref:r,props:u,_owner:i,_store:{}};return Object.defineProperty(s._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(s,"_self",{configurable:!1,enumerable:!1,writable:!1,value:n}),Object.defineProperty(s,"_source",{configurable:!1,enumerable:!1,writable:!1,value:a}),Object.freeze&&(Object.freeze(s.props),Object.freeze(s)),s};function Z(e,t,r){var n=void 0,o={},a=null,i=null,u=null,s=null;if(null!=t)for(n in G(t)&&(i=t.ref),K(t)&&(a=""+t.key),u=void 0===t.__self?null:t.__self,s=void 0===t.__source?null:t.__source,t)H.call(t,n)&&!B.hasOwnProperty(n)&&(o[n]=t[n]);var c=arguments.length-2;if(1===c)o.children=r;else if(c>1){for(var l=Array(c),f=0;f<c;f++)l[f]=arguments[f+2];Object.freeze&&Object.freeze(l),o.children=l}if(e&&e.defaultProps){var p=e.defaultProps;for(n in p)void 0===o[n]&&(o[n]=p[n])}if(a||i){var d="function"==typeof e?e.displayName||e.name||"Unknown":e;a&&function(e,t){var r=function(){J||(J=!0,j(!1,"%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://fb.me/react-special-props)",t))};r.isReactWarning=!0,Object.defineProperty(e,"key",{get:r,configurable:!0})}(o,d),i&&function(e,t){var r=function(){X||(X=!0,j(!1,"%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://fb.me/react-special-props)",t))};r.isReactWarning=!0,Object.defineProperty(e,"ref",{get:r,configurable:!0})}(o,d)}return Q(e,a,i,u,s,q.current,o)}function ee(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var te=".",re=":";var ne=!1,oe=/\/+/g;function ae(e){return(""+e).replace(oe,"$&/")}var ie=10,ue=[];function se(e,t,r,n){if(ue.length){var o=ue.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function ce(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,ue.length<ie&&ue.push(e)}function le(e,t,r){return null==e?0:function e(t,r,n,i){var u=typeof t;"undefined"!==u&&"boolean"!==u||(t=null);var s=!1;if(null===t)s=!0;else switch(u){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case o:case a:s=!0}}if(s)return n(i,t,""===r?te+fe(t,0):r),1;var c=void 0,l=0,f=""===r?te:r+re;if(Array.isArray(t))for(var p=0;p<t.length;p++)l+=e(c=t[p],f+fe(c,p),n,i);else{var d=w(t);if("function"==typeof d){d===t.entries&&(ne||Y(!1,"Using Maps as children is unsupported and will likely yield unexpected results. Convert it to a sequence/iterable of keyed ReactElements instead."),ne=!0);for(var y=d.call(t),m=void 0,v=0;!(m=y.next()).done;)l+=e(c=m.value,f+fe(c,v++),n,i)}else if("object"===u){var h;h=" If you meant to render a collection of children, use an array instead."+W.getStackAddendum();var g=""+t;C(!1,"Objects are not valid as a React child (found: %s).%s","[object Object]"===g?"object with keys {"+Object.keys(t).join(", ")+"}":g,h)}}return l}(e,"",t,r)}function fe(e,t){return"object"==typeof e&&null!==e&&null!=e.key?(r=e.key,n={"=":"=0",":":"=2"},"$"+(""+r).replace(/[=:]/g,function(e){return n[e]})):t.toString(36);var r,n}function pe(e,t,r){var n=e.func,o=e.context;n.call(o,t,e.count++)}function de(e,t,r){var n,o,a=e.result,i=e.keyPrefix,u=e.func,s=e.context,c=u.call(s,t,e.count++);Array.isArray(c)?ye(c,a,r,function(e){return e}):null!=c&&(ee(c)&&(n=c,o=i+(!c.key||t&&t.key===c.key?"":ae(c.key)+"/")+r,c=Q(n.type,o,n.ref,n._self,n._source,n._owner,n.props)),a.push(c))}function ye(e,t,r,n,o){var a="";null!=r&&(a=ae(r)+"/");var i=se(t,a,n,o);le(e,de,i),ce(i)}function me(e){return"string"==typeof e||"function"==typeof e||e===u||e===p||e===c||e===s||e===y||"object"==typeof e&&null!==e&&(e.$$typeof===v||e.$$typeof===m||e.$$typeof===l||e.$$typeof===f||e.$$typeof===d)}function ve(){var e=D.current;return null===e&&C(!1,"Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem."),e}var he=void 0;function ge(){if(q.current){var e=M(q.current.type);if(e)return"\n\nCheck the render method of `"+e+"`."}return""}he=!1;var be={};function we(e,t){if(e._store&&!e._store.validated&&null==e.key){e._store.validated=!0;var r=function(e){var t=ge();if(!t){var r="string"==typeof e?e:e.displayName||e.name;r&&(t="\n\nCheck the top-level render call using <"+r+">.")}return t}(t);if(!be[r]){be[r]=!0;var n="";e&&e._owner&&e._owner!==q.current&&(n=" It was passed a child from "+M(e._owner.type)+"."),V(e),Y(!1,'Each child in a list should have a unique "key" prop.%s%s See https://fb.me/react-warning-keys for more information.',r,n),V(null)}}}function _e(e,t){if("object"==typeof e)if(Array.isArray(e))for(var r=0;r<e.length;r++){var n=e[r];ee(n)&&we(n,t)}else if(ee(e))e._store&&(e._store.validated=!0);else if(e){var o=w(e);if("function"==typeof o&&o!==e.entries)for(var a=o.call(e),i=void 0;!(i=a.next()).done;)ee(i.value)&&we(i.value,t)}}function Ce(e){var t=e.type;if(null!=t&&"string"!=typeof t){var n=M(t),o=void 0;if("function"==typeof t)o=t.propTypes;else{if("object"!=typeof t||t.$$typeof!==d&&t.$$typeof!==m)return;o=t.propTypes}o?(V(e),r(o,e.props,"prop",n,W.getStackAddendum),V(null)):void 0===t.PropTypes||he||(he=!0,j(!1,"Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",n||"Unknown")),"function"==typeof t.getDefaultProps&&(t.getDefaultProps.isReactClassApproved||j(!1,"getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead."))}}function ke(e,t,r){var n=me(e);if(!n){var a="";(void 0===e||"object"==typeof e&&null!==e&&0===Object.keys(e).length)&&(a+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var i=function(e){if(null!=e&&void 0!==e.__source){var t=e.__source;return"\n\nCheck your code at "+t.fileName.replace(/^.*[\\\/]/,"")+":"+t.lineNumber+"."}return""}(t);a+=i||ge();var s=void 0;null===e?s="null":Array.isArray(e)?s="array":void 0!==e&&e.$$typeof===o?(s="<"+(M(e.type)||"Unknown")+" />",a=" Did you accidentally export a JSX literal instead of a component?"):s=typeof e,Y(!1,"React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",s,a)}var c=Z.apply(this,arguments);if(null==c)return c;if(n)for(var l=2;l<arguments.length;l++)_e(arguments[l],e);return e===u?function(e){V(e);for(var t=Object.keys(e.props),r=0;r<t.length;r++){var n=t[r];if("children"!==n&&"key"!==n){Y(!1,"Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n);break}}null!==e.ref&&Y(!1,"Invalid attribute `ref` supplied to `React.Fragment`."),V(null)}(c):Ce(c),c}var je={Children:{map:function(e,t,r){if(null==e)return e;var n=[];return ye(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;var n=se(null,null,t,r);le(e,pe,n),ce(n)},count:function(e){return le(e,function(){return null},null)},toArray:function(e){var t=[];return ye(e,t,null,function(e){return e}),t},only:function(e){return ee(e)||C(!1,"React.Children.only expected to receive a single React element child."),e}},createRef:function(){var e={current:null};return Object.seal(e),e},Component:x,PureComponent:A,createContext:function(e,t){void 0===t?t=null:null!==t&&"function"!=typeof t&&j(!1,"createContext: Expected the optional second argument to be a function. Instead received: %s",t);var r={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null};r.Provider={$$typeof:l,_context:r};var n=!1,o=!1,a={$$typeof:f,_context:r,_calculateChangedBits:r._calculateChangedBits};return Object.defineProperties(a,{Provider:{get:function(){return o||(o=!0,Y(!1,"Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")),r.Provider},set:function(e){r.Provider=e}},_currentValue:{get:function(){return r._currentValue},set:function(e){r._currentValue=e}},_currentValue2:{get:function(){return r._currentValue2},set:function(e){r._currentValue2=e}},_threadCount:{get:function(){return r._threadCount},set:function(e){r._threadCount=e}},Consumer:{get:function(){return n||(n=!0,Y(!1,"Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")),r.Consumer}}}),r.Consumer=a,r._currentRenderer=null,r._currentRenderer2=null,r},forwardRef:function(e){return null!=e&&e.$$typeof===m?j(!1,"forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."):"function"!=typeof e?j(!1,"forwardRef requires a render function but was given %s.",null===e?"null":typeof e):0!==e.length&&2!==e.length&&j(!1,"forwardRef render functions accept exactly two parameters: props and ref. %s",1===e.length?"Did you forget to use the ref parameter?":"Any additional parameter will be undefined."),null!=e&&(null!=e.defaultProps||null!=e.propTypes)&&j(!1,"forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?"),{$$typeof:d,render:e}},lazy:function(e){var t={$$typeof:v,_ctor:e,_status:-1,_result:null},r=void 0,n=void 0;return Object.defineProperties(t,{defaultProps:{configurable:!0,get:function(){return r},set:function(e){Y(!1,"React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."),r=e,Object.defineProperty(t,"defaultProps",{enumerable:!0})}},propTypes:{configurable:!0,get:function(){return n},set:function(e){Y(!1,"React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."),n=e,Object.defineProperty(t,"propTypes",{enumerable:!0})}}}),t},memo:function(e,t){return me(e)||j(!1,"memo: The first argument must be a component. Instead received: %s",null===e?"null":typeof e),{$$typeof:m,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return ve().useCallback(e,t)},useContext:function(e,t){var r=ve();if(void 0!==t&&Y(!1,"useContext() second argument is reserved for future use in React. Passing it is not supported. You passed: %s.%s",t,"number"==typeof t&&Array.isArray(arguments[2])?"\n\nDid you call array.map(useContext)? Calling Hooks inside a loop is not supported. Learn more at https://fb.me/rules-of-hooks":""),void 0!==e._context){var n=e._context;n.Consumer===e?Y(!1,"Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?"):n.Provider===e&&Y(!1,"Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?")}return r.useContext(e,t)},useEffect:function(e,t){return ve().useEffect(e,t)},useImperativeHandle:function(e,t,r){return ve().useImperativeHandle(e,t,r)},useDebugValue:function(e,t){return ve().useDebugValue(e,t)},useLayoutEffect:function(e,t){return ve().useLayoutEffect(e,t)},useMemo:function(e,t){return ve().useMemo(e,t)},useReducer:function(e,t,r){return ve().useReducer(e,t,r)},useRef:function(e){return ve().useRef(e)},useState:function(e){return ve().useState(e)},Fragment:u,StrictMode:s,Suspense:y,createElement:ke,cloneElement:function(e,r,n){for(var o=function(e,r,n){null==e&&C(!1,"React.cloneElement(...): The argument must be a React element, but you passed %s.",e);var o=void 0,a=t({},e.props),i=e.key,u=e.ref,s=e._self,c=e._source,l=e._owner;if(null!=r){G(r)&&(u=r.ref,l=q.current),K(r)&&(i=""+r.key);var f=void 0;for(o in e.type&&e.type.defaultProps&&(f=e.type.defaultProps),r)H.call(r,o)&&!B.hasOwnProperty(o)&&(void 0===r[o]&&void 0!==f?a[o]=f[o]:a[o]=r[o])}var p=arguments.length-2;if(1===p)a.children=n;else if(p>1){for(var d=Array(p),y=0;y<p;y++)d[y]=arguments[y+2];a.children=d}return Q(e.type,i,u,s,c,l,a)}.apply(this,arguments),a=2;a<arguments.length;a++)_e(arguments[a],o.type);return Ce(o),o},createFactory:function(e){var t=ke.bind(null,e);return t.type=e,Object.defineProperty(t,"type",{enumerable:!1,get:function(){return k(!1,"Factory.type is deprecated. Access the class directly before passing it to createFactory."),Object.defineProperty(this,"type",{value:e}),e}}),t},isValidElement:ee,version:"16.8.6",unstable_ConcurrentMode:p,unstable_Profiler:c,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:L},Oe=Object.freeze({default:je}),Re=Oe&&je||Oe,Pe=Re.default||Re;e.exports=Pe}()}),_=r(function(e){e.exports=w}),C=_.Component;r(function(e){!function(){var t={}.hasOwnProperty;function r(){for(var e=[],n=0;n<arguments.length;n++){var o=arguments[n];if(o){var a=typeof o;if("string"===a||"number"===a)e.push(o);else if(Array.isArray(o)&&o.length){var i=r.apply(null,o);i&&e.push(i)}else if("object"===a)for(var u in o)t.call(o,u)&&o[u]&&e.push(u)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):window.classNames=r}()});const k="/Users/logan/Dev/urbit/pkg/interface/publish/tile/tile.js";class j extends C{constructor(e){super(e),console.log("publish-tile",this.props)}render(){let e=this.props.data.notifications;return 0===e?e="":e>99?e="99+":isNaN(e)&&(e=""),_.createElement("div",{className:"w-100 h-100 relative bg-white bg-gray0-d ba b--black b--gray1-d",__self:this,__source:{fileName:k,lineNumber:27}},_.createElement("a",{className:"w-100 h-100 db no-underline",href:"/~publish",__self:this,__source:{fileName:k,lineNumber:29}},_.createElement("p",{className:"black white-d f9 absolute",style:{left:8,top:8},__self:this,__source:{fileName:k,lineNumber:30}},"Publishing"),_.createElement("img",{className:"absolute invert-d",style:{left:39,top:39},src:"/~publish/tile.png",width:48,height:48,__self:this,__source:{fileName:k,lineNumber:33}}),_.createElement("div",{className:"absolute w-100 flex-col f9",style:{verticalAlign:"bottom",bottom:8,left:8},__self:this,__source:{fileName:k,lineNumber:40}},_.createElement("span",{className:"green2 white-d",__self:this,__source:{fileName:k,lineNumber:43}},e))))}}return window.publishTile=j,j});