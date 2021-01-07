(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{103:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=p(n),f=r,b=s["".concat(i,".").concat(f)]||s[f]||d[f]||o;return n?a.a.createElement(b,c(c({ref:t},l),{},{components:n})):a.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),o=(n(0),n(103)),i={},c={unversionedId:"react/unstated-next",id:"react/unstated-next",isDocsHomePage:!1,title:"unstated-next",description:"---",source:"@site/docs/react/unstated-next.md",permalink:"/blog/docs/react/unstated-next",editUrl:"https://github.com/zhenbushidashen/callmeboy/tree/master/docs/react/unstated-next.md",sidebar:"blog",previous:{title:"for of",permalink:"/blog/docs/ecma/es2015/forof"},next:{title:"patch-package",permalink:"/blog/docs/npm/patch-package"}},u=[{value:"tags: []",id:"tags-",children:[]},{value:"unstated-next\u6e90\u7801",id:"unstated-next\u6e90\u7801",children:[]}],l={rightToc:u};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("hr",null),Object(o.b)("p",null,"id: unstated-next\ntitle: unstated-next \u6e90\u7801"),Object(o.b)("h2",{id:"tags-"},"tags: []"),Object(o.b)("h2",{id:"unstated-next\u6e90\u7801"},"unstated-next\u6e90\u7801"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),'import React from "react"\n\nconst EMPTY: unique symbol = Symbol()\n\nexport interface ContainerProviderProps<State = void> {\n    initialState?: State\n    children: React.ReactNode\n}\n\nexport interface Container<Value, State = void> {\n    Provider: React.ComponentType<ContainerProviderProps<State>>\n    useContainer: () => Value\n}\n\nexport function createContainer<Value, State = void>(\n    useHook: (initialState?: State) => Value,\n): Container<Value, State> {\n    let Context = React.createContext<Value | typeof EMPTY>(EMPTY)\n\n    function Provider(props: ContainerProviderProps<State>) {\n        let value = useHook(props.initialState)\n        return <Context.Provider value={value}>{props.children}</Context.Provider>\n    }\n\n    function useContainer(): Value {\n        let value = React.useContext(Context)\n        if (value === EMPTY) {\n            throw new Error("Component must be wrapped with <Container.Provider>")\n        }\n        return value\n    }\n\n    return { Provider, useContainer }\n}\n\nexport function useContainer<Value, State = void>(\n    container: Container<Value, State>,\n): Value {\n    return container.useContainer()\n}\n\n')))}p.isMDXComponent=!0}}]);