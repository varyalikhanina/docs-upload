!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=33)}([function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||function(){return this}()||Function("return this")()}).call(this,n(35))},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(5),o=n(14),u=n(10);t.exports=r?function(t,e,n){return o.f(t,e,u(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(1);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,e,n){var r=n(2);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(0),o=n(24),u=n(3),c=n(25),i=n(30),a=n(55),f=o("wks"),l=r.Symbol,s=a?l:l&&l.withoutSetter||c;t.exports=function(t){return u(f,t)||(i&&u(l,t)?f[t]=l[t]:f[t]=s("Symbol."+t)),f[t]}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(37),o=n(6);t.exports=function(t){return r(o(t))}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(2);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r=n(5),o=n(21),u=n(7),c=n(13),i=Object.defineProperty;e.f=r?i:function(t,e,n){if(u(t),e=c(e,!0),u(n),o)try{return i(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(0),o=n(4);t.exports=function(t,e){try{o(r,t,e)}catch(n){r[t]=e}return e}},function(t,e,n){var r=n(0),o=n(15),u=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=u},function(t,e,n){var r=n(8),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){"use strict";var r,o,u=n(58),c=n(59),i=RegExp.prototype.exec,a=String.prototype.replace,f=i,l=(r=/a/,o=/b*/g,i.call(r,"a"),i.call(o,"a"),0!==r.lastIndex||0!==o.lastIndex),s=c.UNSUPPORTED_Y||c.BROKEN_CARET,p=void 0!==/()??/.exec("")[1];(l||p||s)&&(f=function(t){var e,n,r,o,c=this,f=s&&c.sticky,v=u.call(c),d=c.source,y=0,x=t;return f&&(-1===(v=v.replace("y","")).indexOf("g")&&(v+="g"),x=String(t).slice(c.lastIndex),c.lastIndex>0&&(!c.multiline||c.multiline&&"\n"!==t[c.lastIndex-1])&&(d="(?: "+d+")",x=" "+x,y++),n=new RegExp("^(?:"+d+")",v)),p&&(n=new RegExp("^"+d+"$(?!\\s)",v)),l&&(e=c.lastIndex),r=i.call(f?n:c,x),f?r?(r.input=r.input.slice(y),r[0]=r[0].slice(y),r.index=c.lastIndex,c.lastIndex+=r[0].length):c.lastIndex=0:l&&r&&(c.lastIndex=c.global?r.index+r[0].length:e),p&&r&&r.length>1&&a.call(r[0],n,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)})),r}),t.exports=f},function(t,e,n){var r=n(0),o=n(20).f,u=n(4),c=n(22),i=n(15),a=n(43),f=n(52);t.exports=function(t,e){var n,l,s,p,v,d=t.target,y=t.global,x=t.stat;if(n=y?r:x?r[d]||i(d,{}):(r[d]||{}).prototype)for(l in e){if(p=e[l],s=t.noTargetGet?(v=o(n,l))&&v.value:n[l],!f(y?l:d+(x?".":"#")+l,t.forced)&&void 0!==s){if(typeof p==typeof s)continue;a(p,s)}(t.sham||s&&s.sham)&&u(p,"sham",!0),c(n,l,p,t)}}},function(t,e,n){var r=n(5),o=n(36),u=n(10),c=n(11),i=n(13),a=n(3),f=n(21),l=Object.getOwnPropertyDescriptor;e.f=r?l:function(t,e){if(t=c(t),e=i(e,!0),f)try{return l(t,e)}catch(t){}if(a(t,e))return u(!o.f.call(t,e),t[e])}},function(t,e,n){var r=n(5),o=n(1),u=n(38);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(u("div"),"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(0),o=n(4),u=n(3),c=n(15),i=n(23),a=n(39),f=a.get,l=a.enforce,s=String(String).split("String");(t.exports=function(t,e,n,i){var a,f=!!i&&!!i.unsafe,p=!!i&&!!i.enumerable,v=!!i&&!!i.noTargetGet;"function"==typeof n&&("string"!=typeof e||u(n,"name")||o(n,"name",e),(a=l(n)).source||(a.source=s.join("string"==typeof e?e:""))),t!==r?(f?!v&&t[e]&&(p=!0):delete t[e],p?t[e]=n:o(t,e,n)):p?t[e]=n:c(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||i(this)}))},function(t,e,n){var r=n(16),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},function(t,e,n){var r=n(42),o=n(16);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.7.0",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},function(t,e){t.exports={}},function(t,e,n){var r=n(45),o=n(0),u=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?u(r[t])||u(o[t]):r[t]&&r[t][e]||o[t]&&o[t][e]}},function(t,e,n){var r=n(12);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){var r=n(6);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(1);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(t,e,n){var r,o,u=n(0),c=n(57),i=u.process,a=i&&i.versions,f=a&&a.v8;f?o=(r=f.split("."))[0]+r[1]:c&&(!(r=c.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=c.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o},function(t,e,n){"use strict";var r=n(19),o=n(18);r({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},function(t,e,n){"use strict";n.r(e);n(34),n(32),n(60),n(65);var r=document.querySelector(".documents__item-filename_photo"),o=document.querySelector(".documents__item-filename_reg"),u=document.querySelector(".documents__item-upload_photo"),c=document.querySelector(".documents__item-upload_reg"),i=document.querySelector(".documents__item-input_photo"),a=document.querySelector(".documents__item-input_reg"),f=document.querySelector(".documents__item-result_photo"),l=document.querySelector(".documents__item-result_reg"),s=document.querySelector(".documents__item-link"),p=document.querySelector(".documents__item-link_reg"),v=document.querySelector(".preloader_photo"),d=document.querySelector(".preloader_reg"),y=[{text:"Проверено",color:"#7fa050"},{text:"Отклонено",color:"#c43524"}];function x(t,e,n,r,o,u,c,i){t.addEventListener("change",(function(a){i.style.display="flex",o.style.textDecoration="none",o.style.cursor="default",t.disabled="true",n.style.cursor="default";var f=t.files[0].size/1024,l=f/1e3;setTimeout((function(){n.style.backgroundImage='url("../../../images/wait.svg")',r.textContent="Идет проверка",r.style.color="#9c9c9c",i.style.display="none",o.textContent="Файл загружен"}),2e3),setTimeout((function(){var i=a.target.value.replace(/C:\\fakepath\\/i,""),s=Math.floor(f);e.textContent="".concat(i," (").concat(s,"Кб)"),n.style.backgroundImage="url('../../../images/ok.svg')";var p=y[Math.floor(Math.random()*y.length)];function v(){r.textContent="Отклонено",r.style.color="#c43524",n.style.backgroundImage="url('../../../images/upload.svg')",e.textContent="Размер файла не более 5Мб",o.textContent="Загрузить скан страницы с ".concat(c),t.removeAttribute("disabled"),n.style.cursor="pointer",o.style.cursor="pointer",o.style.textDecoration="underline"}"Отклонено"===p.text||l>=5?v():"Проверено"===p.text&&(o.textContent=u,r.textContent="Проверено",r.style.color="#7fa050",o.style.textDecoration="none")}),4e3)}))}x(i,r,u,f,s,"Страница с фотографией","фотографией",v),x(a,o,c,l,p,"Страница с пропиской","пропиской",d)},function(t,e,n){"use strict";var r=n(19),o=n(1),u=n(28),c=n(2),i=n(29),a=n(17),f=n(53),l=n(54),s=n(56),p=n(9),v=n(31),d=p("isConcatSpreadable"),y=v>=51||!o((function(){var t=[];return t[d]=!1,t.concat()[0]!==t})),x=s("concat"),g=function(t){if(!c(t))return!1;var e=t[d];return void 0!==e?!!e:u(t)};r({target:"Array",proto:!0,forced:!y||!x},{concat:function(t){var e,n,r,o,u,c=i(this),s=l(c,0),p=0;for(e=-1,r=arguments.length;e<r;e++)if(g(u=-1===e?c:arguments[e])){if(p+(o=a(u.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(n=0;n<o;n++,p++)n in u&&f(s,p,u[n])}else{if(p>=9007199254740991)throw TypeError("Maximum allowed index exceeded");f(s,p++,u)}return s.length=p,s}})},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,u=o&&!r.call({1:2},1);e.f=u?function(t){var e=o(this,t);return!!e&&e.enumerable}:r},function(t,e,n){var r=n(1),o=n(12),u="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?u.call(t,""):Object(t)}:Object},function(t,e,n){var r=n(0),o=n(2),u=r.document,c=o(u)&&o(u.createElement);t.exports=function(t){return c?u.createElement(t):{}}},function(t,e,n){var r,o,u,c=n(40),i=n(0),a=n(2),f=n(4),l=n(3),s=n(16),p=n(41),v=n(26),d=i.WeakMap;if(c){var y=s.state||(s.state=new d),x=y.get,g=y.has,h=y.set;r=function(t,e){return e.facade=t,h.call(y,t,e),e},o=function(t){return x.call(y,t)||{}},u=function(t){return g.call(y,t)}}else{var m=p("state");v[m]=!0,r=function(t,e){return e.facade=t,f(t,m,e),e},o=function(t){return l(t,m)?t[m]:{}},u=function(t){return l(t,m)}}t.exports={set:r,get:o,has:u,enforce:function(t){return u(t)?o(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!a(e)||(n=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}}},function(t,e,n){var r=n(0),o=n(23),u=r.WeakMap;t.exports="function"==typeof u&&/native code/.test(o(u))},function(t,e,n){var r=n(24),o=n(25),u=r("keys");t.exports=function(t){return u[t]||(u[t]=o(t))}},function(t,e){t.exports=!1},function(t,e,n){var r=n(3),o=n(44),u=n(20),c=n(14);t.exports=function(t,e){for(var n=o(e),i=c.f,a=u.f,f=0;f<n.length;f++){var l=n[f];r(t,l)||i(t,l,a(e,l))}}},function(t,e,n){var r=n(27),o=n(46),u=n(51),c=n(7);t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(c(t)),n=u.f;return n?e.concat(n(t)):e}},function(t,e,n){var r=n(0);t.exports=r},function(t,e,n){var r=n(47),o=n(50).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e,n){var r=n(3),o=n(11),u=n(48).indexOf,c=n(26);t.exports=function(t,e){var n,i=o(t),a=0,f=[];for(n in i)!r(c,n)&&r(i,n)&&f.push(n);for(;e.length>a;)r(i,n=e[a++])&&(~u(f,n)||f.push(n));return f}},function(t,e,n){var r=n(11),o=n(17),u=n(49),c=function(t){return function(e,n,c){var i,a=r(e),f=o(a.length),l=u(c,f);if(t&&n!=n){for(;f>l;)if((i=a[l++])!=i)return!0}else for(;f>l;l++)if((t||l in a)&&a[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},function(t,e,n){var r=n(8),o=Math.max,u=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):u(n,e)}},function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(1),o=/#|\.prototype\./,u=function(t,e){var n=i[c(t)];return n==f||n!=a&&("function"==typeof e?r(e):!!e)},c=u.normalize=function(t){return String(t).replace(o,".").toLowerCase()},i=u.data={},a=u.NATIVE="N",f=u.POLYFILL="P";t.exports=u},function(t,e,n){"use strict";var r=n(13),o=n(14),u=n(10);t.exports=function(t,e,n){var c=r(e);c in t?o.f(t,c,u(0,n)):t[c]=n}},function(t,e,n){var r=n(2),o=n(28),u=n(9)("species");t.exports=function(t,e){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)?r(n)&&null===(n=n[u])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},function(t,e,n){var r=n(30);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,e,n){var r=n(1),o=n(9),u=n(31),c=o("species");t.exports=function(t){return u>=51||!r((function(){var e=[];return(e.constructor={})[c]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},function(t,e,n){var r=n(27);t.exports=r("navigator","userAgent")||""},function(t,e,n){"use strict";var r=n(7);t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},function(t,e,n){"use strict";var r=n(1);function o(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=r((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},function(t,e,n){"use strict";var r=n(61),o=n(7),u=n(29),c=n(17),i=n(8),a=n(6),f=n(62),l=n(64),s=Math.max,p=Math.min,v=Math.floor,d=/\$([$&'`]|\d\d?|<[^>]*>)/g,y=/\$([$&'`]|\d\d?)/g;r("replace",2,(function(t,e,n,r){var x=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,g=r.REPLACE_KEEPS_$0,h=x?"$":"$0";return[function(n,r){var o=a(this),u=null==n?void 0:n[t];return void 0!==u?u.call(n,o,r):e.call(String(o),n,r)},function(t,r){if(!x&&g||"string"==typeof r&&-1===r.indexOf(h)){var u=n(e,t,this,r);if(u.done)return u.value}var a=o(t),v=String(this),d="function"==typeof r;d||(r=String(r));var y=a.global;if(y){var b=a.unicode;a.lastIndex=0}for(var S=[];;){var _=l(a,v);if(null===_)break;if(S.push(_),!y)break;""===String(_[0])&&(a.lastIndex=f(v,c(a.lastIndex),b))}for(var E,w="",O=0,P=0;P<S.length;P++){_=S[P];for(var j=String(_[0]),T=s(p(i(_.index),v.length),0),A=[],I=1;I<_.length;I++)A.push(void 0===(E=_[I])?E:String(E));var C=_.groups;if(d){var R=[j].concat(A,T,v);void 0!==C&&R.push(C);var M=String(r.apply(void 0,R))}else M=m(j,v,T,A,C,r);T>=O&&(w+=v.slice(O,T)+M,O=T+j.length)}return w+v.slice(O)}];function m(t,n,r,o,c,i){var a=r+t.length,f=o.length,l=y;return void 0!==c&&(c=u(c),l=d),e.call(i,l,(function(e,u){var i;switch(u.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,r);case"'":return n.slice(a);case"<":i=c[u.slice(1,-1)];break;default:var l=+u;if(0===l)return e;if(l>f){var s=v(l/10);return 0===s?e:s<=f?void 0===o[s-1]?u.charAt(1):o[s-1]+u.charAt(1):e}i=o[l-1]}return void 0===i?"":i}))}}))},function(t,e,n){"use strict";n(32);var r=n(22),o=n(1),u=n(9),c=n(18),i=n(4),a=u("species"),f=!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),l="$0"==="a".replace(/./,"$0"),s=u("replace"),p=!!/./[s]&&""===/./[s]("a","$0"),v=!o((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,s){var d=u(t),y=!o((function(){var e={};return e[d]=function(){return 7},7!=""[t](e)})),x=y&&!o((function(){var e=!1,n=/a/;return"split"===t&&((n={}).constructor={},n.constructor[a]=function(){return n},n.flags="",n[d]=/./[d]),n.exec=function(){return e=!0,null},n[d](""),!e}));if(!y||!x||"replace"===t&&(!f||!l||p)||"split"===t&&!v){var g=/./[d],h=n(d,""[t],(function(t,e,n,r,o){return e.exec===c?y&&!o?{done:!0,value:g.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:l,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),m=h[0],b=h[1];r(String.prototype,t,m),r(RegExp.prototype,d,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)})}s&&i(RegExp.prototype[d],"sham",!0)}},function(t,e,n){"use strict";var r=n(63).charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},function(t,e,n){var r=n(8),o=n(6),u=function(t){return function(e,n){var u,c,i=String(o(e)),a=r(n),f=i.length;return a<0||a>=f?t?"":void 0:(u=i.charCodeAt(a))<55296||u>56319||a+1===f||(c=i.charCodeAt(a+1))<56320||c>57343?t?i.charAt(a):u:t?i.slice(a,a+2):c-56320+(u-55296<<10)+65536}};t.exports={codeAt:u(!1),charAt:u(!0)}},function(t,e,n){var r=n(12),o=n(18);t.exports=function(t,e){var n=t.exec;if("function"==typeof n){var u=n.call(t,e);if("object"!=typeof u)throw TypeError("RegExp exec method returned something other than an Object or null");return u}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(t,e)}},function(t,e,n){}]);