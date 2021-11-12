"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[89620],{50158:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(46393);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=p(n),d=i,g=f["".concat(s,".").concat(d)]||f[d]||c[d]||o;return n?r.createElement(g,a(a({ref:t},u),{},{components:n})):r.createElement(g,a({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},50368:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return f}});var r=n(74834),i=n(28265),o=(n(46393),n(50158)),a=["components"],l={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},s=void 0,p={unversionedId:"api/node-core-library.ijsonfilesaveoptions.updateexistingfile",id:"api/node-core-library.ijsonfilesaveoptions.updateexistingfile",isDocsHomePage:!1,title:"node-core-library.ijsonfilesaveoptions.updateexistingfile",description:"Home &gt; @rushstack/node-core-library &gt; IJsonFileSaveOptions &gt; updateExistingFile",source:"@site/docs/api/node-core-library.ijsonfilesaveoptions.updateexistingfile.md",sourceDirName:"api",slug:"/api/node-core-library.ijsonfilesaveoptions.updateexistingfile",permalink:"/rushstack.io/pages/api/node-core-library.ijsonfilesaveoptions.updateexistingfile",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},u=[{value:"IJsonFileSaveOptions.updateExistingFile property",id:"ijsonfilesaveoptionsupdateexistingfile-property",children:[],level:2}],c={toc:u};function f(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/rushstack.io/pages/api/index"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/rushstack.io/pages/api/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/rushstack.io/pages/api/node-core-library.ijsonfilesaveoptions"},"IJsonFileSaveOptions")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/rushstack.io/pages/api/node-core-library.ijsonfilesaveoptions.updateexistingfile"},"updateExistingFile")),(0,o.kt)("h2",{id:"ijsonfilesaveoptionsupdateexistingfile-property"},"IJsonFileSaveOptions.updateExistingFile property"),(0,o.kt)("p",null,'If true, use the "jju" library to preserve the existing JSON formatting: The file will be loaded from the target filename, the new content will be merged in (preserving whitespace and comments), and then the file will be overwritten with the merged contents. If the target file does not exist, then the file is saved normally.'),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"updateExistingFile?: boolean;\n")))}f.isMDXComponent=!0}}]);