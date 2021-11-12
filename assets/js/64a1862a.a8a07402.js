"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[48146],{50158:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(46393);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(r),f=a,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},69737:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return s},default:function(){return d}});var n=r(74834),a=r(28265),o=(r(46393),r(50158)),i=["components"],c={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},p=void 0,l={unversionedId:"api/node-core-library.ipackagejson",id:"api/node-core-library.ipackagejson",isDocsHomePage:!1,title:"node-core-library.ipackagejson",description:"Home &gt; @rushstack/node-core-library &gt; IPackageJson",source:"@site/docs/api/node-core-library.ipackagejson.md",sourceDirName:"api",slug:"/api/node-core-library.ipackagejson",permalink:"/rushstack.io/pages/api/node-core-library.ipackagejson",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},s=[{value:"IPackageJson interface",id:"ipackagejson-interface",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2},{value:"Properties",id:"properties",children:[],level:2}],u={toc:s};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/rushstack.io/pages/api/index"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/rushstack.io/pages/api/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/rushstack.io/pages/api/node-core-library.ipackagejson"},"IPackageJson")),(0,o.kt)("h2",{id:"ipackagejson-interface"},"IPackageJson interface"),(0,o.kt)("p",null,"An interface for accessing common fields from a package.json file."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface IPackageJson extends INodePackageJson \n")),(0,o.kt)("b",null,"Extends:")," [INodePackageJson](/rushstack.io/pages/api/node-core-library.inodepackagejson)",(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"This interface describes a package.json file format whose ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"version")," field are required. In some situations, the ",(0,o.kt)("inlineCode",{parentName:"p"},"version")," field is optional; in that case, use the ",(0,o.kt)("a",{parentName:"p",href:"/rushstack.io/pages/api/node-core-library.inodepackagejson"},"INodePackageJson")," interface instead."),(0,o.kt)("p",null,"More fields may be added to this interface in the future. For documentation about the package.json file format, see the ",(0,o.kt)("a",{parentName:"p",href:"http://wiki.commonjs.org/wiki/Packages/1.0"},"CommonJS Packages specification")," and the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/files/package.json"},"NPM manual page")," ."),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/node-core-library.ipackagejson.version"},"version")),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"A version number conforming to the Semantic Versioning (SemVer) standard.")))))}d.isMDXComponent=!0}}]);