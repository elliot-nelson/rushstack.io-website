"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[50447],{49613:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var a=r(59496);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),m=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=m(r),d=n,y=c["".concat(p,".").concat(d)]||c[d]||u[d]||o;return r?a.createElement(y,l(l({ref:t},s),{},{components:r})):a.createElement(y,l({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var m=2;m<o;m++)l[m]=r[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},60793:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return s},default:function(){return c}});var a=r(50098),n=r(46862),o=(r(59496),r(49613)),l=["components"],i={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},p=void 0,m={unversionedId:"api/node-core-library.import.lazy",id:"api/node-core-library.import.lazy",isDocsHomePage:!1,title:"node-core-library.import.lazy",description:"Home &gt; @rushstack/node-core-library &gt; Import &gt; lazy",source:"@site/docs/api/node-core-library.import.lazy.md",sourceDirName:"api",slug:"/api/node-core-library.import.lazy",permalink:"/rushstack.io-website/pages/api/node-core-library.import.lazy",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},s=[{value:"Import.lazy() method",id:"importlazy-method",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2}],u={toc:s};function c(e){var t=e.components,r=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/rushstack.io-website/pages/api/index"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/rushstack.io-website/pages/api/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/rushstack.io-website/pages/api/node-core-library.import"},"Import")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/rushstack.io-website/pages/api/node-core-library.import.lazy"},"lazy")),(0,o.kt)("h2",{id:"importlazy-method"},"Import.lazy() method"),(0,o.kt)("p",null,"Provides a way to improve process startup times by lazy-loading imported modules."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"static lazy(moduleName: string, require: (id: string) => unknown): any;\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"moduleName"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"require"),(0,o.kt)("td",{parentName:"tr",align:null},"(id: string) =",">"," unknown"),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("b",null,"Returns:"),(0,o.kt)("p",null,"any"),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"This is a more structured wrapper for the ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/import-lazy"},"import-lazy")," package. It enables you to replace an import like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import * as example from 'example'; // <-- 100ms load time\n\nif (condition) {\n  example.doSomething();\n}\n")),(0,o.kt)("p",null,"...with a pattern like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const example: typeof import('example') = Import.lazy('example', require);\n\nif (condition) {\n  example.doSomething(); // <-- 100ms load time occurs here, only if needed\n}\n")),(0,o.kt)("p",null,"The implementation relies on JavaScript's ",(0,o.kt)("inlineCode",{parentName:"p"},"Proxy")," feature to intercept access to object members. Thus it will only work correctly with certain types of module exports. If a particular export isn't well behaved, you may need to find (or introduce) some other module in your dependency graph to apply the optimization to."),(0,o.kt)("p",null,"Usage guidelines:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Always specify types using ",(0,o.kt)("inlineCode",{parentName:"p"},"typeof")," as shown above.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Never apply lazy-loading in a way that would convert the module's type to ",(0,o.kt)("inlineCode",{parentName:"p"},"any")," . Losing type safety seriously impacts the maintainability of the code base.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In cases where the non-runtime types are needed, import them separately using the ",(0,o.kt)("inlineCode",{parentName:"p"},"Types")," suffix:"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const example: typeof import('example') = Import.lazy('example', require);\nimport type * as exampleTypes from 'example';\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If the imported module confusingly has the same name as its export, then use the Module suffix:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const exampleModule: typeof import('../../logic/Example') = Import.lazy(\n  '../../logic/Example', require);\nimport type * as exampleTypes from '../../logic/Example';\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If the exports cause a lot of awkwardness (e.g. too many expressions need to have ",(0,o.kt)("inlineCode",{parentName:"p"},"exampleModule.")," inserted into them), or if some exports cannot be proxied (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"Import.lazy('example', require)")," returns a function signature), then do not lazy-load that module. Instead, apply lazy-loading to some other module which is better behaved.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"It's recommended to sort imports in a standard ordering:"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// 1. external imports\nimport * as path from 'path';\nimport { Import, JsonFile, JsonObject } from '@rushstack/node-core-library';\n\n// 2. local imports\nimport { LocalFile } from './path/LocalFile';\n\n// 3. lazy-imports (which are technically variables, not imports)\nconst semver: typeof import('semver') = Import.lazy('semver', require);\n")))}c.isMDXComponent=!0}}]);