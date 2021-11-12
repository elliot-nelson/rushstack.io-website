"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[55904],{50158:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(46393);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(r),d=o,h=c["".concat(p,".").concat(d)]||c[d]||m[d]||a;return r?n.createElement(h,l(l({ref:t},u),{},{components:r})):n.createElement(h,l({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},43117:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return c}});var n=r(74834),o=r(28265),a=(r(46393),r(50158)),l=["components"],i={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},p=void 0,s={unversionedId:"api/node-core-library.import.resolvemodule",id:"api/node-core-library.import.resolvemodule",isDocsHomePage:!1,title:"node-core-library.import.resolvemodule",description:"Home &gt; @rushstack/node-core-library &gt; Import &gt; resolveModule",source:"@site/docs/api/node-core-library.import.resolvemodule.md",sourceDirName:"api",slug:"/api/node-core-library.import.resolvemodule",permalink:"/rushstack.io/pages/api/node-core-library.import.resolvemodule",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},u=[{value:"Import.resolveModule() method",id:"importresolvemodule-method",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2}],m={toc:u};function c(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/rushstack.io/pages/api/index"},"Home")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/rushstack.io/pages/api/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/rushstack.io/pages/api/node-core-library.import"},"Import")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/rushstack.io/pages/api/node-core-library.import.resolvemodule"},"resolveModule")),(0,a.kt)("h2",{id:"importresolvemodule-method"},"Import.resolveModule() method"),(0,a.kt)("p",null,"This resolves a module path using similar logic as the Node.js ",(0,a.kt)("inlineCode",{parentName:"p"},"require.resolve()")," API, but supporting extra features such as specifying the base folder."),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"static resolveModule(options: IImportResolveModuleOptions): string;\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"options"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/node-core-library.iimportresolvemoduleoptions"},"IImportResolveModuleOptions")),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("b",null,"Returns:"),(0,a.kt)("p",null,"string"),(0,a.kt)("p",null,"the absolute path of the resolved module. If ",(0,a.kt)("a",{parentName:"p",href:"/rushstack.io/pages/api/node-core-library.iimportresolveoptions.includesystemmodules"},"IImportResolveOptions.includeSystemModules")," is specified and a system module is found, then its name is returned without any file path."),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"A module path is a text string that might appear in a statement such as ",(0,a.kt)("inlineCode",{parentName:"p"},'import { X } from "____";')," or ",(0,a.kt)("inlineCode",{parentName:"p"},'const x = require("___");')," . The implementation is based on the popular ",(0,a.kt)("inlineCode",{parentName:"p"},"resolve")," NPM package."),(0,a.kt)("p",null,"Suppose ",(0,a.kt)("inlineCode",{parentName:"p"},"example")," is an NPM package whose entry point is ",(0,a.kt)("inlineCode",{parentName:"p"},"lib/index.js")," :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// Returns \"/path/to/project/node_modules/example/lib/index.js\"\nImport.resolveModule({ modulePath: 'example' });\n\n// Returns \"/path/to/project/node_modules/example/lib/other.js\"\nImport.resolveModule({ modulePath: 'example/lib/other' });\n")),(0,a.kt)("p",null,"If you need to determine the containing package folder (",(0,a.kt)("inlineCode",{parentName:"p"},"/path/to/project/node_modules/example")," ), use ",(0,a.kt)("a",{parentName:"p",href:"/rushstack.io/pages/api/node-core-library.import.resolvepackage"},"Import.resolvePackage()")," instead."))}c.isMDXComponent=!0}}]);