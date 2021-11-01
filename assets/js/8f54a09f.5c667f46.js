"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[49448],{49613:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var a=r(59496);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),p=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(r),d=n,g=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return r?a.createElement(g,l(l({ref:t},s),{},{components:r})):a.createElement(g,l({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},62058:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var a=r(50098),n=r(46862),o=(r(59496),r(49613)),l=["components"],c={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},i=void 0,p={unversionedId:"api/node-core-library.legacyadapters.convertcallbacktopromise_2",id:"api/node-core-library.legacyadapters.convertcallbacktopromise_2",isDocsHomePage:!1,title:"node-core-library.legacyadapters.convertcallbacktopromise_2",description:"Home &gt; @rushstack/node-core-library &gt; LegacyAdapters &gt; convertCallbackToPromise",source:"@site/docs/api/node-core-library.legacyadapters.convertcallbacktopromise_2.md",sourceDirName:"api",slug:"/api/node-core-library.legacyadapters.convertcallbacktopromise_2",permalink:"/rushstack.io-website/pages/api/node-core-library.legacyadapters.convertcallbacktopromise_2",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},s=[{value:"LegacyAdapters.convertCallbackToPromise() method",id:"legacyadaptersconvertcallbacktopromise-method",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2}],u={toc:s};function m(e){var t=e.components,r=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/rushstack.io-website/pages/api/index"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/rushstack.io-website/pages/api/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/rushstack.io-website/pages/api/node-core-library.legacyadapters"},"LegacyAdapters")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/rushstack.io-website/pages/api/node-core-library.legacyadapters.convertcallbacktopromise_2"},"convertCallbackToPromise")),(0,o.kt)("h2",{id:"legacyadaptersconvertcallbacktopromise-method"},"LegacyAdapters.convertCallbackToPromise() method"),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"static convertCallbackToPromise<TResult, TError, TArg1, TArg2>(fn: (arg1: TArg1, arg2: TArg2, cb: LegacyCallback<TResult, TError>) => void, arg1: TArg1, arg2: TArg2): Promise<TResult>;\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"fn"),(0,o.kt)("td",{parentName:"tr",align:null},"(arg1: TArg1, arg2: TArg2, cb: ",(0,o.kt)("a",{parentName:"td",href:"/rushstack.io-website/pages/api/node-core-library.legacycallback"},"LegacyCallback")," ","<","TResult, TError",">",") =",">"," void"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"arg1"),(0,o.kt)("td",{parentName:"tr",align:null},"TArg1"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"arg2"),(0,o.kt)("td",{parentName:"tr",align:null},"TArg2"),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("b",null,"Returns:"),(0,o.kt)("p",null,"Promise","<","TResult",">"))}m.isMDXComponent=!0}}]);