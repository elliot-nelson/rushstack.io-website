"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[78985],{49613:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(59496);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),y=p(r),m=i,f=y["".concat(s,".").concat(m)]||y[m]||u[m]||a;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},32425:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return y}});var n=r(50098),i=r(46862),a=(r(59496),r(49613)),o=["components"],l={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},s=void 0,p={unversionedId:"api/node-core-library.filesystem.copyfiles",id:"api/node-core-library.filesystem.copyfiles",isDocsHomePage:!1,title:"node-core-library.filesystem.copyfiles",description:"Home &gt; @rushstack/node-core-library &gt; FileSystem &gt; copyFiles",source:"@site/docs/api/node-core-library.filesystem.copyfiles.md",sourceDirName:"api",slug:"/api/node-core-library.filesystem.copyfiles",permalink:"/rushstack.io-website/pages/api/node-core-library.filesystem.copyfiles",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},c=[{value:"FileSystem.copyFiles() method",id:"filesystemcopyfiles-method",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2}],u={toc:c};function y(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/rushstack.io-website/pages/api/index"},"Home")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/rushstack.io-website/pages/api/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/rushstack.io-website/pages/api/node-core-library.filesystem"},"FileSystem")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/rushstack.io-website/pages/api/node-core-library.filesystem.copyfiles"},"copyFiles")),(0,a.kt)("h2",{id:"filesystemcopyfiles-method"},"FileSystem.copyFiles() method"),(0,a.kt)("p",null,"Copies a file or folder from one location to another, recursively copying any folder contents. By default, destinationPath is overwritten if it already exists."),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"static copyFiles(options: IFileSystemCopyFilesOptions): void;\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"options"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/rushstack.io-website/pages/api/node-core-library.ifilesystemcopyfilesoptions"},"IFileSystemCopyFilesOptions")),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("b",null,"Returns:"),(0,a.kt)("p",null,"void"),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"If you only intend to copy a single file, it is recommended to use ",(0,a.kt)("a",{parentName:"p",href:"/rushstack.io-website/pages/api/node-core-library.filesystem.copyfile"},"FileSystem.copyFile()")," instead to more clearly communicate the intended operation."),(0,a.kt)("p",null,"The implementation is based on ",(0,a.kt)("inlineCode",{parentName:"p"},"copySync()")," from the ",(0,a.kt)("inlineCode",{parentName:"p"},"fs-extra")," package."))}y.isMDXComponent=!0}}]);