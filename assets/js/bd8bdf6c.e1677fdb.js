"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[81570],{49613:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var a=r(59496);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),u=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=u(r),d=n,m=f["".concat(p,".").concat(d)]||f[d]||s[d]||o;return r?a.createElement(m,i(i({ref:t},c),{},{components:r})):a.createElement(m,i({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},83451:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return f}});var a=r(50098),n=r(46862),o=(r(59496),r(49613)),i=["components"],l={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},p=void 0,u={unversionedId:"api/rush-lib.approvedpackagesconfiguration.tryloadfromfile",id:"api/rush-lib.approvedpackagesconfiguration.tryloadfromfile",isDocsHomePage:!1,title:"rush-lib.approvedpackagesconfiguration.tryloadfromfile",description:"Home &gt; @microsoft/rush-lib &gt; ApprovedPackagesConfiguration &gt; tryLoadFromFile",source:"@site/docs/api/rush-lib.approvedpackagesconfiguration.tryloadfromfile.md",sourceDirName:"api",slug:"/api/rush-lib.approvedpackagesconfiguration.tryloadfromfile",permalink:"/rushstack.io-website/pages/api/rush-lib.approvedpackagesconfiguration.tryloadfromfile",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},c=[{value:"ApprovedPackagesConfiguration.tryLoadFromFile() method",id:"approvedpackagesconfigurationtryloadfromfile-method",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2}],s={toc:c};function f(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/rushstack.io-website/pages/api/index"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/rushstack.io-website/pages/api/rush-lib"},"@microsoft/rush-lib")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/rushstack.io-website/pages/api/rush-lib.approvedpackagesconfiguration"},"ApprovedPackagesConfiguration")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/rushstack.io-website/pages/api/rush-lib.approvedpackagesconfiguration.tryloadfromfile"},"tryLoadFromFile")),(0,o.kt)("h2",{id:"approvedpackagesconfigurationtryloadfromfile-method"},"ApprovedPackagesConfiguration.tryLoadFromFile() method"),(0,o.kt)("p",null,"If the file exists, calls loadFromFile()."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"tryLoadFromFile(approvedPackagesPolicyEnabled: boolean): boolean;\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"approvedPackagesPolicyEnabled"),(0,o.kt)("td",{parentName:"tr",align:null},"boolean"),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("b",null,"Returns:"),(0,o.kt)("p",null,"boolean"))}f.isMDXComponent=!0}}]);