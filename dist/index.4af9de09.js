function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function r(e){return e&&e.__esModule?e.default:e}var n={},i={},o=t.parcelRequire6d3a;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},t.parcelRequire6d3a=o),o.register("27Lyk",(function(t,r){var n,i;e(t.exports,"register",(()=>n),(e=>n=e)),e(t.exports,"resolve",(()=>i),(e=>i=e));var o={};n=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)o[t[r]]=e[t[r]]},i=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o("27Lyk").register(JSON.parse('{"f9fpV":"index.4af9de09.js","eyyUD":"icons.c14567a0.svg"}'));var a,s,c={},u=function(e){return e&&e.Math==Math&&e};c=u("object"==typeof globalThis&&globalThis)||u("object"==typeof window&&window)||u("object"==typeof self&&self)||u("object"==typeof t&&t)||function(){return this}()||Function("return this")();var l,d;l=!(d=function(e){try{return!!e()}catch(e){return!0}})((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}));var f,p={};f=!d((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}));var h,g=Function.prototype.call;p=f?g.bind(g):function(){return g.apply(g,arguments)};var v={}.propertyIsEnumerable,y=Object.getOwnPropertyDescriptor,m=y&&!v.call({1:2},1);h=m?function(e){var t=y(this,e);return!!t&&t.enumerable}:v;var b;b=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var _,w,k={},E={},S=Function.prototype,$=S.bind,O=S.call,j=f&&$.bind(O,O),L=(E=f?function(e){return e&&j(e)}:function(e){return e&&function(){return O.apply(e,arguments)}})({}.toString),M=E("".slice);w=function(e){return M(L(e),8,-1)};var x=Object,P=E("".split);k=d((function(){return!x("z").propertyIsEnumerable(0)}))?function(e){return"String"==w(e)?P(e,""):x(e)}:x;var T,q=TypeError;T=function(e){if(null==e)throw q("Can't call method on "+e);return e},_=function(e){return k(T(e))};var I,N,H,F;F=function(e){return"function"==typeof e},H=function(e){return"object"==typeof e?null!==e:F(e)};var C,A={},R=function(e){return F(e)?e:void 0};C=function(e,t){return arguments.length<2?R(c[e]):c[e]&&c[e][t]};var D={};D=E({}.isPrototypeOf);var U,W,G,z={};z=C("navigator","userAgent")||"";var B,J,Y=c.process,V=c.Deno,Q=Y&&Y.versions||V&&V.version,K=Q&&Q.v8;K&&(J=(B=K.split("."))[0]>0&&B[0]<4?1:+(B[0]+B[1])),!J&&z&&(!(B=z.match(/Edge\/(\d+)/))||B[1]>=74)&&(B=z.match(/Chrome\/(\d+)/))&&(J=+B[1]),G=J,W=!!Object.getOwnPropertySymbols&&!d((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&G&&G<41})),U=W&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var X=Object;A=U?function(e){return"symbol"==typeof e}:function(e){var t=C("Symbol");return F(t)&&D(t.prototype,X(e))};var Z,ee,te,re=String;te=function(e){try{return re(e)}catch(e){return"Object"}};var ne=TypeError;ee=function(e){if(F(e))return e;throw ne(te(e)+" is not a function")},Z=function(e,t){var r=e[t];return null==r?void 0:ee(r)};var ie,oe=TypeError;ie=function(e,t){var r,n;if("string"===t&&F(r=e.toString)&&!H(n=p(r,e)))return n;if(F(r=e.valueOf)&&!H(n=p(r,e)))return n;if("string"!==t&&F(r=e.toString)&&!H(n=p(r,e)))return n;throw oe("Can't convert object to primitive value")};var ae;var se,ce={},ue=Object.defineProperty;se=function(e,t){try{ue(c,e,{value:t,configurable:!0,writable:!0})}catch(r){c[e]=t}return t};var le=c["__core-js_shared__"]||se("__core-js_shared__",{});ce=le,(ae=function(e,t){return ce[e]||(ce[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.23.3",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.23.3/LICENSE",source:"https://github.com/zloirock/core-js"});var de,fe={},pe=Object;de=function(e){return pe(T(e))};var he=E({}.hasOwnProperty);fe=Object.hasOwn||function(e,t){return he(de(e),t)};var ge,ve=0,ye=Math.random(),me=E(1..toString);ge=function(e){return"Symbol("+(void 0===e?"":e)+")_"+me(++ve+ye,36)};var be=ae("wks"),_e=c.Symbol,we=_e&&_e.for,ke=U?_e:_e&&_e.withoutSetter||ge,Ee=TypeError,Se=function(e){if(!fe(be,e)||!W&&"string"!=typeof be[e]){var t="Symbol."+e;W&&fe(_e,e)?be[e]=_e[e]:be[e]=U&&we?we(t):ke(t)}return be[e]}("toPrimitive");N=function(e,t){if(!H(e)||A(e))return e;var r,n=Z(e,Se);if(n){if(void 0===t&&(t="default"),r=p(n,e,t),!H(r)||A(r))return r;throw Ee("Can't convert object to primitive value")}return void 0===t&&(t="number"),ie(e,t)},I=function(e){var t=N(e,"string");return A(t)?t:t+""};var $e,Oe,je=c.document,Le=H(je)&&H(je.createElement);Oe=function(e){return Le?je.createElement(e):{}},$e=!l&&!d((function(){return 7!=Object.defineProperty(Oe("div"),"a",{get:function(){return 7}}).a}));var Me,xe,Pe=Object.getOwnPropertyDescriptor,Te=s=l?Pe:function(e,t){if(e=_(e),t=I(t),$e)try{return Pe(e,t)}catch(e){}if(fe(e,t))return b(!p(h,e,t),e[t])},qe={};xe=l&&d((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}));var Ie,Ne=String,He=TypeError;Ie=function(e){if(H(e))return e;throw He(Ne(e)+" is not an object")};var Fe=TypeError,Ce=Object.defineProperty,Ae=Object.getOwnPropertyDescriptor;Me=l?xe?function(e,t,r){if(Ie(e),t=I(t),Ie(r),"function"==typeof e&&"prototype"===t&&"value"in r&&"writable"in r&&!r.writable){var n=Ae(e,t);n&&n.writable&&(e[t]=r.value,r={configurable:"configurable"in r?r.configurable:n.configurable,enumerable:"enumerable"in r?r.enumerable:n.enumerable,writable:!1})}return Ce(e,t,r)}:Ce:function(e,t,r){if(Ie(e),t=I(t),Ie(r),$e)try{return Ce(e,t,r)}catch(e){}if("get"in r||"set"in r)throw Fe("Accessors not supported");return"value"in r&&(e[t]=r.value),e},qe=l?function(e,t,r){return Me(e,t,b(1,r))}:function(e,t,r){return e[t]=r,e};var Re,De,Ue=Function.prototype,We=l&&Object.getOwnPropertyDescriptor,Ge=fe(Ue,"name"),ze={EXISTS:Ge,PROPER:Ge&&"something"===function(){}.name,CONFIGURABLE:Ge&&(!l||l&&We(Ue,"name").configurable)}.CONFIGURABLE,Be={},Je=E(Function.toString);F(ce.inspectSource)||(ce.inspectSource=function(e){return Je(e)}),Be=ce.inspectSource;var Ye,Ve,Qe=c.WeakMap;Ve=F(Qe)&&/native code/.test(Be(Qe));var Ke,Xe=ae("keys");Ke=function(e){return Xe[e]||(Xe[e]=ge(e))};var Ze={};Ze={};var et,tt,rt,nt=c.TypeError,it=c.WeakMap;if(Ve||ce.state){var ot=ce.state||(ce.state=new it),at=E(ot.get),st=E(ot.has),ct=E(ot.set);et=function(e,t){if(st(ot,e))throw new nt("Object already initialized");return t.facade=e,ct(ot,e,t),t},tt=function(e){return at(ot,e)||{}},rt=function(e){return st(ot,e)}}else{var ut=Ke("state");Ze[ut]=!0,et=function(e,t){if(fe(e,ut))throw new nt("Object already initialized");return t.facade=e,qe(e,ut,t),t},tt=function(e){return fe(e,ut)?e[ut]:{}},rt=function(e){return fe(e,ut)}}var lt=(Ye={set:et,get:tt,has:rt,enforce:function(e){return rt(e)?tt(e):et(e,{})},getterFor:function(e){return function(t){var r;if(!H(t)||(r=tt(t)).type!==e)throw nt("Incompatible receiver, "+e+" required");return r}}}).enforce,dt=Ye.get,ft=Object.defineProperty,pt=l&&!d((function(){return 8!==ft((function(){}),"length",{value:8}).length})),ht=String(String).split("String"),gt=De=function(e,t,r){"Symbol("===String(t).slice(0,7)&&(t="["+String(t).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!fe(e,"name")||ze&&e.name!==t)&&(l?ft(e,"name",{value:t,configurable:!0}):e.name=t),pt&&r&&fe(r,"arity")&&e.length!==r.arity&&ft(e,"length",{value:r.arity});try{r&&fe(r,"constructor")&&r.constructor?l&&ft(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=lt(e);return fe(n,"source")||(n.source=ht.join("string"==typeof t?t:"")),e};Function.prototype.toString=gt((function(){return F(this)&&dt(this).source||Be(this)}),"toString"),Re=function(e,t,r,n){n||(n={});var i=n.enumerable,o=void 0!==n.name?n.name:t;if(F(r)&&De(r,o,n),n.global)i?e[t]=r:se(t,r);else{try{n.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=r:Me(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var vt,yt,mt,bt,_t,wt={},kt={},Et=Math.ceil,St=Math.floor;kt=Math.trunc||function(e){var t=+e;return(t>0?St:Et)(t)},_t=function(e){var t=+e;return t!=t||0===t?0:kt(t)};var $t=Math.max,Ot=Math.min;bt=function(e,t){var r=_t(e);return r<0?$t(r+t,0):Ot(r,t)};var jt,Lt,Mt=Math.min;Lt=function(e){return e>0?Mt(_t(e),9007199254740991):0},jt=function(e){return Lt(e.length)};var xt=function(e){return function(t,r,n){var i,o=_(t),a=jt(o),s=bt(n,a);if(e&&r!=r){for(;a>s;)if((i=o[s++])!=i)return!0}else for(;a>s;s++)if((e||s in o)&&o[s]===r)return e||s||0;return!e&&-1}},Pt={includes:xt(!0),indexOf:xt(!1)}.indexOf,Tt=E([].push);mt=function(e,t){var r,n=_(e),i=0,o=[];for(r in n)!fe(Ze,r)&&fe(n,r)&&Tt(o,r);for(;t.length>i;)fe(n,r=t[i++])&&(~Pt(o,r)||Tt(o,r));return o};var qt,It=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");yt=Object.getOwnPropertyNames||function(e){return mt(e,It)},qt=Object.getOwnPropertySymbols;var Nt=E([].concat);wt=C("Reflect","ownKeys")||function(e){var t=yt(Ie(e));return qt?Nt(t,qt(e)):t},vt=function(e,t,r){for(var n=wt(t),i=Me,o=s,a=0;a<n.length;a++){var c=n[a];fe(e,c)||r&&fe(r,c)||i(e,c,o(t,c))}};var Ht={},Ft=/#|\.prototype\./,Ct=function(e,t){var r=Rt[At(e)];return r==Ut||r!=Dt&&(F(t)?d(t):!!t)},At=Ct.normalize=function(e){return String(e).replace(Ft,".").toLowerCase()},Rt=Ct.data={},Dt=Ct.NATIVE="N",Ut=Ct.POLYFILL="P";Ht=Ct,a=function(e,t){var r,n,i,o,a,s=e.target,u=e.global,l=e.stat;if(r=u?c:l?c[s]||se(s,{}):(c[s]||{}).prototype)for(n in t){if(o=t[n],i=e.dontCallGetSet?(a=Te(r,n))&&a.value:r[n],!Ht(u?n:s+(l?".":"#")+n,e.forced)&&void 0!==i){if(typeof o==typeof i)continue;vt(o,i)}(e.sham||i&&i.sham)&&qe(o,"sham",!0),Re(r,n,o,e)}};var Wt,Gt={},zt=Function.prototype,Bt=zt.apply,Jt=zt.call;Gt="object"==typeof Reflect&&Reflect.apply||(f?Jt.bind(Bt):function(){return Jt.apply(Bt,arguments)});var Yt,Vt=E(E.bind);Yt=function(e,t){return ee(e),void 0===t?e:f?Vt(e,t):function(){return e.apply(t,arguments)}};var Qt={};Qt=C("document","documentElement");var Kt={};Kt=E([].slice);var Xt,Zt=TypeError;Xt=function(e,t){if(e<t)throw Zt("Not enough arguments");return e};var er;er=/(?:ipad|iphone|ipod).*applewebkit/i.test(z);var tr;tr="process"==w(c.process);var rr,nr,ir,or,ar=c.setImmediate,sr=c.clearImmediate,cr=c.process,ur=c.Dispatch,lr=c.Function,dr=c.MessageChannel,fr=c.String,pr=0,hr={};try{rr=c.location}catch(e){}var gr=function(e){if(fe(hr,e)){var t=hr[e];delete hr[e],t()}},vr=function(e){return function(){gr(e)}},yr=function(e){gr(e.data)},mr=function(e){c.postMessage(fr(e),rr.protocol+"//"+rr.host)};ar&&sr||(ar=function(e){Xt(arguments.length,1);var t=F(e)?e:lr(e),r=Kt(arguments,1);return hr[++pr]=function(){Gt(t,void 0,r)},nr(pr),pr},sr=function(e){delete hr[e]},tr?nr=function(e){cr.nextTick(vr(e))}:ur&&ur.now?nr=function(e){ur.now(vr(e))}:dr&&!er?(or=(ir=new dr).port2,ir.port1.onmessage=yr,nr=Yt(or.postMessage,or)):c.addEventListener&&F(c.postMessage)&&!c.importScripts&&rr&&"file:"!==rr.protocol&&!d(mr)?(nr=mr,c.addEventListener("message",yr,!1)):nr="onreadystatechange"in Oe("script")?function(e){Qt.appendChild(Oe("script")).onreadystatechange=function(){Qt.removeChild(this),gr(e)}}:function(e){setTimeout(vr(e),0)});var br=(Wt={set:ar,clear:sr}).clear;a({global:!0,bind:!0,enumerable:!0,forced:c.clearImmediate!==br},{clearImmediate:br});var _r=Wt.set;a({global:!0,bind:!0,enumerable:!0,forced:c.setImmediate!==_r},{setImmediate:_r});var wr=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,r){return e[t]=r}}function u(e,t,r,n){var i=t&&t.prototype instanceof v?t:v,o=Object.create(i.prototype),a=new L(n||[]);return o._invoke=function(e,t,r){var n=d;return function(i,o){if(n===p)throw new Error("Generator is already running");if(n===h){if("throw"===i)throw o;return x()}for(r.method=i,r.arg=o;;){var a=r.delegate;if(a){var s=$(a,r);if(s){if(s===g)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===d)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var c=l(e,t,r);if("normal"===c.type){if(n=r.done?h:f,c.arg===g)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=h,r.method="throw",r.arg=c.arg)}}}(e,r,a),o}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var d="suspendedStart",f="suspendedYield",p="executing",h="completed",g={};function v(){}function y(){}function m(){}var b={};c(b,o,(function(){return this}));var _=Object.getPrototypeOf,w=_&&_(_(M([])));w&&w!==r&&n.call(w,o)&&(b=w);var k=m.prototype=v.prototype=Object.create(b);function E(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function S(e,t){function r(i,o,a,s){var c=l(e[i],e,o);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"==typeof d&&n.call(d,"__await")?t.resolve(d.__await).then((function(e){r("next",e,a,s)}),(function(e){r("throw",e,a,s)})):t.resolve(d).then((function(e){u.value=e,a(u)}),(function(e){return r("throw",e,a,s)}))}s(c.arg)}var i;this._invoke=function(e,n){function o(){return new t((function(t,i){r(e,n,t,i)}))}return i=i?i.then(o,o):o()}}function $(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,$(e,r),"throw"===r.method))return g;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var i=l(n,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,g;var o=i.arg;return o?o.done?(r[e.resultName]=o.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function M(e){if(e){var r=e[o];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}return{next:x}}function x(){return{value:t,done:!0}}return y.prototype=m,c(k,"constructor",m),c(m,"constructor",y),y.displayName=c(m,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,c(e,s,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E(S.prototype),c(S.prototype,a,(function(){return this})),e.AsyncIterator=S,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new S(u(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},E(k),c(k,s,"Generator"),c(k,o,(function(){return this})),c(k,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=M,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(j),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),j(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;j(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:M(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}({});try{regeneratorRuntime=wr}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=wr:Function("r","regeneratorRuntime = r")(wr)}const kr=async function(e,t){try{const n=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),i=await Promise.race([n,(r=10,new Promise((function(e,t){setTimeout((function(){t(new Error(`Request took too long! Timeout after ${r} second`))}),1e3*r)})))]),o=await i.json();if(!i.ok)throw new Error(`${o.message} (${i.status})`);return o}catch(e){throw e}var r},Er={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[]},Sr=function(e){const{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},$r=function(e=Er.search.page){Er.search.page=e;const t=(e-1)*Er.search.resultsPerPage,r=e*Er.search.resultsPerPage;return Er.search.results.slice(t,r)},Or=function(){localStorage.setItem("bookmarks",JSON.stringify(Er.bookmarks))},jr=function(e){Er.bookmarks.push(e),e.id===Er.recipe.id&&(Er.recipe.bookmarked=!0),Or()};!function(){const e=localStorage.getItem("bookmarks");e&&(Er.bookmarks=JSON.parse(e))}();var Lr;Lr=new URL(o("27Lyk").resolve("eyyUD"),import.meta.url).toString();class Mr{_data;render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderErrorMessage();this._data=e;const r=this._generateMarkup();if(!t)return r;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}update(e){this._data=e;const t=this._generateMarkup(),r=document.createRange().createContextualFragment(t),n=Array.from(r.querySelectorAll("*")),i=Array.from(this._parentElement.querySelectorAll("*"));n.forEach(((e,t)=>{const r=i.at(t);e.isEqualNode(r)||""===e.firstChild?.nodeValue.trim()||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach((e=>{r.setAttribute(e.name,e.value)}))}))}renderSpinner(){const e=`\n            <div class="spinner">\n              <svg>\n                <use href="${r(Lr)}/icons.svg#icon-loader"></use>\n              </svg>\n            </div>\n      `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderErrorMessage(e=this._errorMessage){const t=`\n        <div class="error">\n          <div>\n            <svg>\n              <use href="${r(Lr)}#icon-alert-triangle"></use>\n            </svg>\n          </div>\n          <p>${e}</p>\n        </div>\n      `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderSuccessMessage(e=this._successMessage){const t=`\n        <div class="error">\n          <div>\n            <svg>\n              <use href="${r(Lr)}#icon-smile"></use>\n            </svg>\n          </div>\n          <p>${e}</p>\n        </div>\n      `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}_clear(){this._parentElement.innerHTML=""}}var xr=new class extends Mr{_parentElement="";_generateMarkup(){const e=window.location.hash.slice(1);return`\n    <li class="preview">\n        <a class="preview__link ${this._data.id===e?"preview__link--active":""}" href="#${this._data.id}">\n        <figure class="preview__fig">\n            <img src="${this._data.image}" alt="${this._data.title}" />\n        </figure>\n        <div class="preview__data">\n            <h4 class="preview__title">${this._data.title}</h4>\n            <p class="preview__publisher">${this._data.publisher}</p>\n            <div class="preview__user-generated ${this._data.key?"":"hidden"}">\n              <svg>\n                <use href="${r(Lr)}#icon-user"></use>\n              </svg>\n            </div>\n        </div>\n        </a>\n    </li>\n    `}};var Pr,Tr=new class extends Mr{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. Find a nice recipe and bookmart it!";_successMessage="";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map((e=>xr.render(e,!1))).join("")}};function qr(e,t,r,n,i){const o=[2,3,5];if(!0===i)for(let t=3;t*t<=e;t+=2)e%t==0&&o.push(t);let a=0,s=1,c=e,u=t;for(;a<=o.length;)c%o[a]==0&&u%o[a]==0?(s*=o[a],c/=o[a],u/=o[a]):a++;return function(e,t,r,n){return 1===e&&1===t?`${r=`${n}${(parseInt(r)+1).toString()}`}`:0===t?`${n}${r}`:"0"==r?`${n}${t}/${e}`:`${n}${r} ${t}/${e}`}(u,c,r,n)}Pr=function(e){let t;if(e<0?(e=Math.abs(e),t="-"):t="",void 0===e)return"Your input was undefined.";if(isNaN(e))return`"${e}" is not a number.`;if(1e16==e)return`${t}9999999999999999`;if(e>1e16)return"Too many digits in your integer to maintain IEEE 754 Floating Point conversion accuracy.";if(Number.isInteger(e))return`${t}${e}`;if(e<1e-6)return"0";const r=e.toString(),n=r.split(".");let i,o=n[0];if("0"==i&&"0"!==o)return o;if("0"==i&&"0"==o)return"0";if(i=r.length>=17?n[1].slice(0,n[1].length-1):n[1],"99"==i&&"0"!==o)return`${o} 99/100`;if("99"==i&&"0"==o)return"99/100";if(1-parseFloat(`.${i}`)<.0011&&(i="999"),null==i)return o;let a=i.split("").reverse().join("").match(/^(\d+)\1{1,2}/);if(a&&i.length>2){let e=a[0].split("").reverse().join(""),r=a[1].split("").reverse().join("");if(r.length>1){let e=r.split(""),t=1;for(let r=0;r<e.length;r++)t/=e[0]/e[r];1===t&&(r=e[0])}return r.length>1&&r.length%2==0&&(r=parseInt(r.slice(0,r.length/2),10)-parseInt(r.slice(r.length/2,r.length),10)==0?r.slice(0,r.length/2):r),function(e,t,r,n,i){const o=!0,a=e.length-r.length>=1?e.length-r.length:1,s=Math.pow(10,a),c=parseFloat(`0.${e}`),u=Math.pow(10,t.length),l=Math.round((c*u-c)*Math.pow(10,a));return qr(l,(u-1)*s,n,i,o)}(i,r,e,o,t)}return function(e,t,r){const n=!1,i=parseInt(e,10),o=Math.pow(10,e.length);return qr(i,o,t,r,n)}(i,o,t)};var Ir=new class extends Mr{_parentElement=document.querySelector(".recipe");_errorMessage="No recipes found for your query. Please try again!";_successMessage="";addHandlerRender(e){["hashchange","load"].forEach((t=>window.addEventListener(t,e)))}addHanlderUpdateServings(e){this._parentElement.addEventListener("click",(function(t){const r=t.target.closest(".btn--update-servings");if(!r)return;const{updateTo:n}=r.dataset;+n>0&&e(+n)}))}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",(function(t){t.target.closest(".btn--bookmark")&&e()}))}_generateMarkup(){return`\n    <figure class="recipe__fig">\n      <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />\n      <h1 class="recipe__title">\n        <span>${this._data.title}</span>\n      </h1>\n    </figure>\n\n    <div class="recipe__details">\n      <div class="recipe__info">\n        <svg class="recipe__info-icon">\n          <use href="src/img/icons.svg#icon-clock"></use>\n        </svg>\n        <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>\n        <span class="recipe__info-text">minutes</span>\n      </div>\n      <div class="recipe__info">\n        <svg class="recipe__info-icon">\n          <use href="${r(Lr)}#icon-users"></use>\n        </svg>\n        <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>\n        <span class="recipe__info-text">servings</span>\n\n        <div class="recipe__info-buttons">\n          <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">\n            <svg>\n              <use href="${r(Lr)}#icon-minus-circle"></use>\n            </svg>\n          </button>\n          <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">\n            <svg>\n              <use href="${r(Lr)}#icon-plus-circle"></use>\n            </svg>\n          </button>\n        </div>\n      </div>\n\n      <div class="preview__user-generated ${this._data.key?"":"hidden"}">\n        <svg>\n          <use href="${r(Lr)}#icon-user"></use>\n        </svg>\n      </div>\n      <button class="btn--round btn--bookmark">\n        <svg class="">\n          <use href="${r(Lr)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>\n        </svg>\n      </button>\n    </div>\n\n    <div class="recipe__ingredients">\n      <h2 class="heading--2">Recipe ingredients</h2>\n      <ul class="recipe__ingredient-list">\n        ${this._data.ingredients.map(this._generateMarkupIngredient).join("")}\n      </ul>\n    </div>\n\n    <div class="recipe__directions">\n      <h2 class="heading--2">How to cook it</h2>\n      <p class="recipe__directions-text">\n        This recipe was carefully designed and tested by\n        <span class="recipe__publisher">${this._data.publisher}</span>. Please check out\n        directions at their website.\n      </p>\n      <a\n        class="btn--small recipe__btn"\n        href="${this._data.sourceUrl}"\n        target="_blank"\n      >\n        <span>Directions</span>\n        <svg class="search__icon">\n          <use href="${r(Lr)}#icon-arrow-right"></use>\n        </svg>\n      </a>\n    </div>\n    `}_generateMarkupIngredient(e){return`\n        <li class="recipe__ingredient">\n          <svg class="recipe__icon">\n            <use href="${r(Lr)}#icon-check"></use>\n          </svg>\n          <div class="recipe__quantity">${e.quantity?r(Pr)(e.quantity):""}</div>\n          <div class="recipe__description">\n            <span class="recipe__unit">${e.unit}</span>\n            ${e.description}\n          </div>\n        </li>\n    `}};var Nr=new class extends Mr{_parentElement=document.querySelector(".results");_errorMessage="No recipes found for your query. Please try again!";_successMessage="";_generateMarkup(){return this._data.map((e=>xr.render(e,!1))).join("")}};var Hr=new class extends Mr{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",(function(t){t.preventDefault();const r=t.target.closest(".btn--inline");if(!r)return;const n=+r.dataset.gotoPage;e(n)}))}_generateMarkup(){const e=Math.ceil(this._data.results.length/this._data.resultsPerPage),t=this._data.page;return 1===t&&e>1?`\n        <button class="btn--inline pagination__btn--next" data-goto-page="${t+1}">\n            <span>Page ${t+1}</span>\n            <svg class="search__icon">\n            <use href="${r(Lr)}#icon-arrow-right"></use>\n            </svg>\n        </button>\n        `:t===e&&e>1?`\n        <button class="btn--inline pagination__btn--prev" data-goto-page="${t-1}">\n            <svg class="search__icon">\n            <use href="${r(Lr)}#icon-arrow-left"></use>\n            </svg>\n            <span>Page ${t-1}</span>\n        </button>`:t<e?`\n        <button class="btn--inline pagination__btn--prev" data-goto-page="${t-1}">\n            <svg class="search__icon">\n            <use href="${r(Lr)}#icon-arrow-left"></use>\n            </svg>\n            <span>Page ${t-1}</span>\n        </button>\n        <button class="btn--inline pagination__btn--next" data-goto-page="${t+1}">\n            <span>Page ${t+1}</span>\n            <svg class="search__icon">\n            <use href="${r(Lr)}#icon-arrow-right"></use>\n            </svg>\n        </button>\n    `:""}};var Fr=new class extends Mr{_parentElement=document.querySelector(".search");_errorMessage="No recipes found for your query. Please try again!";_successMessage="";getQuery(){const e=this._parentElement.querySelector(".search__field").value;return this._clearInput(),e}addHandlerSearch(e){this._parentElement.addEventListener("submit",(function(t){t.preventDefault(),e()}))}_clearInput(){this._parentElement.querySelector(".search__field").value=""}};var Cr=new class extends Mr{_parentElement=document.querySelector(".upload");_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");_successMessage="Recipe uploaded successfully !";constructor(){super(),this._addHandlerShowWindow(),this._addHandlerCloseWindow()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerCloseWindow(){[this._btnClose,this._overlay].forEach((e=>{e.addEventListener("click",this.toggleWindow.bind(this))}))}addHandlerUpload(e){this._parentElement.addEventListener("submit",(function(t){t.preventDefault();const r=[...new FormData(this)],n=Object.fromEntries(r);e(n)}))}_generateMarkup(){}};const Ar=async function(){try{let e=window.location.hash.slice(1);if(!e)return;Ir.renderSpinner(),Nr.update($r()),Tr.update(Er.bookmarks),await async function(e){try{const t=await kr(`https://forkify-api.herokuapp.com/api/v2/recipes/${e}?key=9558d0de-e7e2-4881-87e7-4f6521afaf14`);Er.recipe=Sr(t),Er.bookmarks.some((t=>t.id===e))?Er.recipe.bookmarked=!0:Er.recipe.bookmarked=!1}catch(e){throw e}}(e),Ir.render(Er.recipe)}catch(e){console.error(`${e} 💥💥💥`),Ir.renderErrorMessage()}},Rr=async function(){try{const e=Fr.getQuery();if(!e)return;Nr.renderSpinner(),await async function(e){try{Er.search.query=e;const t=await kr(`https://forkify-api.herokuapp.com/api/v2/recipes/?search=${e}&key=9558d0de-e7e2-4881-87e7-4f6521afaf14`),{recipes:r}=t.data;if(!r)throw new Error("No recipe matched your search query!");Er.search.results=r.map((e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}}))),Er.search.page=1}catch(e){throw console.log(`${e} 💥💥💥`),e}}(e),Nr.render($r()),Hr.render(Er.search)}catch(e){console.error(`${e} 💥💥💥`),Nr.renderErrorMessage()}},Dr=function(e){Nr.render($r(e)),Hr.render(Er.search)},Ur=function(e){!function(e){Er.recipe.ingredients.forEach((t=>{t.quantity=t.quantity*e/Er.recipe.servings})),Er.recipe.servings=e}(e),Ir.update(Er.recipe)},Wr=function(){Er.recipe.bookmarked?function(e){const t=Er.bookmarks.findIndex((t=>t.id===e));Er.bookmarks.splice(t,1),Er.recipe.id===e&&(Er.recipe.bookmarked=!1),Or()}(Er.recipe.id):jr(Er.recipe),Ir.update(Er.recipe),Tr.render(Er.bookmarks)},Gr=function(){Tr.render(Er.bookmarks)},zr=async function(e){try{Cr.renderSpinner(),await async function(e){try{const t=Object.entries(e).filter((e=>e[0].startsWith("ingredient")&&""!==e[1])).map((e=>{const t=e[1].split(",").map((e=>e.trim()));if(3!==t.length)throw new Error("Wrong ingredient format ! Please use the correct format !");const[r,n,i]=t;return{quantity:r?+r:null,unit:n,description:i}})),r={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},n=await kr("https://forkify-api.herokuapp.com/api/v2/recipes/?key=9558d0de-e7e2-4881-87e7-4f6521afaf14",r);Er.recipe=Sr(n),jr(Er.recipe)}catch(e){throw console.error(` 💥 Model: ${e}`),e}}(e),Ir.render(Er.recipe),Cr.renderSuccessMessage(),Tr.render(Er.bookmarks),window.history.pushState(null,"",`#${Er.recipe.id}`),setTimeout((function(){Cr.toggleWindow()}),2500)}catch(e){console.error(` 💥 controlAddRecipe: ${e}`),Cr.renderErrorMessage(e.message)}};Tr.addHandlerRender(Gr),Ir.addHandlerAddBookmark(Wr),Ir.addHandlerRender(Ar),Ir.addHanlderUpdateServings(Ur),Fr.addHandlerSearch(Rr),Hr.addHandlerClick(Dr),Cr.addHandlerUpload(zr);
//# sourceMappingURL=index.4af9de09.js.map
