(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{103:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=u(n),f=r,d=s["".concat(c,".").concat(f)]||s[f]||b[f]||o;return n?a.a.createElement(d,i(i({ref:t},l),{},{components:n})):a.a.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},71:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),o=(n(0),n(103)),c={id:"react",title:"React.Component\u6e90\u7801",author:"CallMeBoy",author_title:"Loves LingYi",author_url:"https://github.com/zhenbushidashen",author_image_url:"https://avatars1.githubusercontent.com/u/29516868?s=460&u=7e7ad04de89d6a177a490c30e531730a4a7e6ba1&v=4",tags:["react","front-end","javascript"]},i={permalink:"/blog/blog/react",editUrl:"https://github.com/zhenbushidashen/callmeboy/tree/master/blog/2019-05-28-React.Component.md",source:"@site/blog/2019-05-28-React.Component.md",description:"\u6e90\u7801",date:"2019-05-28T00:00:00.000Z",tags:[{label:"react",permalink:"/blog/blog/tags/react"},{label:"front-end",permalink:"/blog/blog/tags/front-end"},{label:"javascript",permalink:"/blog/blog/tags/javascript"}],title:"React.Component\u6e90\u7801",readingTime:.485,truncated:!1},p=[{value:"\u6e90\u7801",id:"\u6e90\u7801",children:[]}],l={rightToc:p};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"\u6e90\u7801"},"\u6e90\u7801"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"\nfunction Component(props, context, updater) {\n  /* \u521d\u59cb\u5316\u5c5e\u6027 */\n  this.props = props;\n  /* \u521d\u59cb\u5316context */\n  this.context = context; \n  /* \u521d\u59cb\u5316ref */\n  this.refs = emptyObject; \n  /* \u521d\u59cb\u5316updater */\n  this.updater = updater || ReactNoopUpdateQueue;\n}\n\n\nComponent.prototype.isReactComponent = {};\n\nComponent.prototype.setState = function (partialState, callback) {\n  if (!(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null)) {\n    {\n      throw Error(\"setState(...): takes an object of state variables to update or a function which returns an object of state variables.\");\n    }\n  }\n\n  this.updater.enqueueSetState(this, partialState, callback, 'setState');\n};\n\nComponent.prototype.forceUpdate = function (callback) {\n  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');\n};\n\n")))}u.isMDXComponent=!0}}]);