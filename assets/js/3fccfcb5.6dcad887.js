"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[41702],{50158:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return d}});var n=a(46393);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,p=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),g=c(a),d=r,k=g["".concat(o,".").concat(d)]||g[d]||u[d]||p;return a?n.createElement(k,i(i({ref:t},s),{},{components:a})):n.createElement(k,i({ref:t},s))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=a.length,i=new Array(p);i[0]=g;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<p;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},99406:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return s},default:function(){return g}});var n=a(74834),r=a(28265),p=(a(46393),a(50158)),i=["components"],l={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},o=void 0,c={unversionedId:"api/package-deps-hash.getpackagedeps",id:"api/package-deps-hash.getpackagedeps",isDocsHomePage:!1,title:"package-deps-hash.getpackagedeps",description:"Home &gt; @rushstack/package-deps-hash &gt; getPackageDeps",source:"@site/docs/api/package-deps-hash.getpackagedeps.md",sourceDirName:"api",slug:"/api/package-deps-hash.getpackagedeps",permalink:"/rushstack.io/pages/api/package-deps-hash.getpackagedeps",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},s=[{value:"getPackageDeps() function",id:"getpackagedeps-function",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2}],u={toc:s};function g(e){var t=e.components,a=(0,r.Z)(e,i);return(0,p.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/rushstack.io/pages/api/index"},"Home")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/rushstack.io/pages/api/package-deps-hash"},"@rushstack/package-deps-hash")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/rushstack.io/pages/api/package-deps-hash.getpackagedeps"},"getPackageDeps")),(0,p.kt)("h2",{id:"getpackagedeps-function"},"getPackageDeps() function"),(0,p.kt)("p",null,"Builds an object containing hashes for the files under the specified ",(0,p.kt)("inlineCode",{parentName:"p"},"packagePath")," folder."),(0,p.kt)("b",null,"Signature:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare function getPackageDeps(packagePath?: string, excludedPaths?: string[], gitPath?: string): Map<string, string>;\n")),(0,p.kt)("h2",{id:"parameters"},"Parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,p.kt)("th",{parentName:"tr",align:null},"Type"),(0,p.kt)("th",{parentName:"tr",align:null},"Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"packagePath"),(0,p.kt)("td",{parentName:"tr",align:null},"string"),(0,p.kt)("td",{parentName:"tr",align:null},"The folder path to derive the package dependencies from. This is typically the folder containing package.json. If omitted, the default value is the current working directory.")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"excludedPaths"),(0,p.kt)("td",{parentName:"tr",align:null},"string","[","]"),(0,p.kt)("td",{parentName:"tr",align:null},"An optional array of file path exclusions. If a file should be omitted from the list of dependencies, use this to exclude it.")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"gitPath"),(0,p.kt)("td",{parentName:"tr",align:null},"string"),(0,p.kt)("td",{parentName:"tr",align:null})))),(0,p.kt)("b",null,"Returns:"),(0,p.kt)("p",null,"Map","<","string, string",">"),(0,p.kt)("p",null,"the package-deps.json file content"))}g.isMDXComponent=!0}}]);