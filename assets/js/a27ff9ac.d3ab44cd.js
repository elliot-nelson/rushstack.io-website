"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[79452],{50158:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(46393);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),f=i,m=u["".concat(c,".").concat(f)]||u[f]||y[f]||o;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},86280:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var n=r(74834),i=r(28265),o=(r(46393),r(50158)),a=["components"],l={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},c=void 0,s={unversionedId:"api/node-core-library.filesystemcopyfilesasyncfilter",id:"api/node-core-library.filesystemcopyfilesasyncfilter",isDocsHomePage:!1,title:"node-core-library.filesystemcopyfilesasyncfilter",description:"Home &gt; @rushstack/node-core-library &gt; FileSystemCopyFilesAsyncFilter",source:"@site/docs/api/node-core-library.filesystemcopyfilesasyncfilter.md",sourceDirName:"api",slug:"/api/node-core-library.filesystemcopyfilesasyncfilter",permalink:"/rushstack.io/pages/api/node-core-library.filesystemcopyfilesasyncfilter",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},p=[{value:"FileSystemCopyFilesAsyncFilter type",id:"filesystemcopyfilesasyncfilter-type",children:[],level:2}],y={toc:p};function u(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/rushstack.io/pages/api/index"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/rushstack.io/pages/api/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/rushstack.io/pages/api/node-core-library.filesystemcopyfilesasyncfilter"},"FileSystemCopyFilesAsyncFilter")),(0,o.kt)("h2",{id:"filesystemcopyfilesasyncfilter-type"},"FileSystemCopyFilesAsyncFilter type"),(0,o.kt)("p",null,"Callback function type for ",(0,o.kt)("a",{parentName:"p",href:"/rushstack.io/pages/api/node-core-library.ifilesystemcopyfilesasyncoptions.filter"},"IFileSystemCopyFilesAsyncOptions.filter")),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare type FileSystemCopyFilesAsyncFilter = (sourcePath: string, destinationPath: string) => Promise<boolean>;\n")))}u.isMDXComponent=!0}}]);