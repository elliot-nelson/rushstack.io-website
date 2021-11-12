"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[42665],{50158:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(46393);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),y=s(r),m=a,d=y["".concat(c,".").concat(m)]||y[m]||u[m]||o;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=y;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},24376:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return y}});var n=r(74834),a=r(28265),o=(r(46393),r(50158)),i=["components"],l={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},c=void 0,s={unversionedId:"api/node-core-library.async.foreachasync",id:"api/node-core-library.async.foreachasync",isDocsHomePage:!1,title:"node-core-library.async.foreachasync",description:"Home &gt; @rushstack/node-core-library &gt; Async &gt; forEachAsync",source:"@site/docs/api/node-core-library.async.foreachasync.md",sourceDirName:"api",slug:"/api/node-core-library.async.foreachasync",permalink:"/rushstack.io/pages/api/node-core-library.async.foreachasync",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},p=[{value:"Async.forEachAsync() method",id:"asyncforeachasync-method",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2}],u={toc:p};function y(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/rushstack.io/pages/api/index"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/rushstack.io/pages/api/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/rushstack.io/pages/api/node-core-library.async"},"Async")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/rushstack.io/pages/api/node-core-library.async.foreachasync"},"forEachAsync")),(0,o.kt)("h2",{id:"asyncforeachasync-method"},"Async.forEachAsync() method"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,o.kt)("p",null,"Given an input array and a ",(0,o.kt)("inlineCode",{parentName:"p"},"callback")," function, invoke the callback to start a promise for each element in the array."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"static forEachAsync<TEntry>(iterable: Iterable<TEntry> | AsyncIterable<TEntry>, callback: (entry: TEntry, arrayIndex: number) => Promise<void>, options?: IAsyncParallelismOptions | undefined): Promise<void>;\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"iterable"),(0,o.kt)("td",{parentName:"tr",align:null},"Iterable","<","TEntry",">"," ","|"," AsyncIterable","<","TEntry",">"),(0,o.kt)("td",{parentName:"tr",align:null},"the array of inputs for the callback function")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"callback"),(0,o.kt)("td",{parentName:"tr",align:null},"(entry: TEntry, arrayIndex: number) =",">"," Promise","<","void",">"),(0,o.kt)("td",{parentName:"tr",align:null},"a function that starts an asynchronous promise for an element from the array")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"options"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/node-core-library.iasyncparallelismoptions"},"IAsyncParallelismOptions")," ","|"," undefined"),(0,o.kt)("td",{parentName:"tr",align:null},"options for customizing the control flow")))),(0,o.kt)("b",null,"Returns:"),(0,o.kt)("p",null,"Promise","<","void",">"),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"This API is similar to the system ",(0,o.kt)("inlineCode",{parentName:"p"},"Array#forEach")," , except that the loop is asynchronous, and the maximum number of concurrent promises can be throttled using ",(0,o.kt)("a",{parentName:"p",href:"/rushstack.io/pages/api/node-core-library.iasyncparallelismoptions.concurrency"},"IAsyncParallelismOptions.concurrency")," ."),(0,o.kt)("p",null,"If ",(0,o.kt)("inlineCode",{parentName:"p"},"callback")," throws a synchronous exception, or if it returns a promise that rejects, then the loop stops immediately. Any remaining array items will be skipped, and overall operation will reject with the first error that was encountered."))}y.isMDXComponent=!0}}]);