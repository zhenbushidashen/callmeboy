(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{103:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),s=u(n),m=r,d=s["".concat(o,".").concat(m)]||s[m]||b[m]||c;return n?a.a.createElement(d,p(p({ref:t},l),{},{components:n})):a.a.createElement(d,p({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var l=2;l<c;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},70:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),c=(n(0),n(103)),o={},p={unversionedId:"npm/patch-package",id:"npm/patch-package",isDocsHomePage:!1,title:"patch-package",description:"\u4f7f\u7528 patch-package \u53ef\u4ee5\u4fee\u6539\u7b2c\u4e09\u65b9\u6a21\u5757\uff0c\u53ca\u65f6\u89e3\u51b3\u7b2c\u4e09\u65b9\u4f9d\u8d56\u5305\u7684 bug",source:"@site/docs/npm/patch-package.md",permalink:"/blog/docs/npm/patch-package",editUrl:"https://github.com/zhenbushidashen/callmeboy/tree/master/docs/npm/patch-package.md",sidebar:"blog",previous:{title:"unstated-next",permalink:"/blog/docs/react/unstated-next"},next:{title:"Style Guide",permalink:"/blog/docs/doc1"}},i=[{value:"\u5b8c",id:"\u5b8c",children:[]}],l={rightToc:i};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u4f7f\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"patch-package")," \u53ef\u4ee5\u4fee\u6539\u7b2c\u4e09\u65b9\u6a21\u5757\uff0c\u53ca\u65f6\u89e3\u51b3\u7b2c\u4e09\u65b9\u4f9d\u8d56\u5305\u7684 bug"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"npm install patch-package --save-dev"),Object(c.b)("li",{parentName:"ol"},"\u4fee\u6539node_modules\u4e0b\u9700\u8981\u6539\u7684\u5305\u5185\u6587\u4ef6"),Object(c.b)("li",{parentName:"ol"},"npx patch-package \u4fee\u6539\u7684\u5305\u540d"),Object(c.b)("li",{parentName:"ol"},"\u6267\u884c\u5b8c\u81ea\u52a8\u751f\u6210patches\u6587\u4ef6\u5939\uff0c\u5185\u90e8\u5c31\u662fpatch\u540e\u7684\u6587\u4ef6\u4fe1\u606f\uff0c\u540e\u7eed\u5b89\u88c5\u4f1a\u81ea\u52a8\u5c06patch\u7684\u5185\u5bb9\u6253\u5230\u4f9d\u8d56\u5305\u5185"),Object(c.b)("li",{parentName:"ol"},"\u6700\u6700\u6700\u91cd\u8981\u7684\u4e00\u70b9\uff0c\u5728npm scripts \u4e2d postinstall \u8bbe\u7f6e\u4e3a patch-package")),Object(c.b)("h2",{id:"\u5b8c"},"\u5b8c"))}u.isMDXComponent=!0}}]);