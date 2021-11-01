"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[83059],{49613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var a=r(59496);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,y=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return r?a.createElement(y,l(l({ref:t},u),{},{components:r})):a.createElement(y,l({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},48973:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var a=r(50098),n=r(46862),i=(r(59496),r(49613)),l=["components"],o={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},s=void 0,p={unversionedId:"api/node-core-library.alreadyexistsbehavior",id:"api/node-core-library.alreadyexistsbehavior",isDocsHomePage:!1,title:"node-core-library.alreadyexistsbehavior",description:"Home &gt; @rushstack/node-core-library &gt; AlreadyExistsBehavior",source:"@site/docs/api/node-core-library.alreadyexistsbehavior.md",sourceDirName:"api",slug:"/api/node-core-library.alreadyexistsbehavior",permalink:"/rushstack.io-website/pages/api/node-core-library.alreadyexistsbehavior",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},u=[{value:"AlreadyExistsBehavior enum",id:"alreadyexistsbehavior-enum",children:[],level:2},{value:"Enumeration Members",id:"enumeration-members",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2}],c={toc:u};function d(e){var t=e.components,r=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/rushstack.io-website/pages/api/index"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack.io-website/pages/api/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack.io-website/pages/api/node-core-library.alreadyexistsbehavior"},"AlreadyExistsBehavior")),(0,i.kt)("h2",{id:"alreadyexistsbehavior-enum"},"AlreadyExistsBehavior enum"),(0,i.kt)("p",null,"Specifies the behavior of APIs such as ",(0,i.kt)("a",{parentName:"p",href:"/rushstack.io-website/pages/api/node-core-library.filesystem.copyfile"},"FileSystem.copyFile()")," or ",(0,i.kt)("a",{parentName:"p",href:"/rushstack.io-website/pages/api/node-core-library.filesystem.createsymboliclinkfile"},"FileSystem.createSymbolicLinkFile()")," when the output file path already exists."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare const enum AlreadyExistsBehavior \n")),(0,i.kt)("h2",{id:"enumeration-members"},"Enumeration Members"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Member"),(0,i.kt)("th",{parentName:"tr",align:null},"Value"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Error"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,'"',"error",'"')),(0,i.kt)("td",{parentName:"tr",align:null},"If the output file path already exists, the operation will fail, and an error will be reported.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Ignore"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,'"',"ignore",'"')),(0,i.kt)("td",{parentName:"tr",align:null},"If the output file path already exists, skip this item, and continue the operation.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Overwrite"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,'"',"overwrite",'"')),(0,i.kt)("td",{parentName:"tr",align:null},"If the output file path already exists, try to overwrite the existing object.")))),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("p",null,"For ",(0,i.kt)("a",{parentName:"p",href:"/rushstack.io-website/pages/api/node-core-library.filesystem.copyfile"},"FileSystem.copyFile()"),' and related APIs, the "output file path" is ',(0,i.kt)("a",{parentName:"p",href:"/rushstack.io-website/pages/api/node-core-library.ifilesystemcopyfileoptions.destinationpath"},"IFileSystemCopyFileOptions.destinationPath")," ."),(0,i.kt)("p",null,"For ",(0,i.kt)("a",{parentName:"p",href:"/rushstack.io-website/pages/api/node-core-library.filesystem.createsymboliclinkfile"},"FileSystem.createSymbolicLinkFile()"),' and related APIs, the "output file path" is ',(0,i.kt)("a",{parentName:"p",href:"/rushstack.io-website/pages/api/node-core-library.ifilesystemcreatelinkoptions.newlinkpath"},"IFileSystemCreateLinkOptions.newLinkPath")," ."))}d.isMDXComponent=!0}}]);