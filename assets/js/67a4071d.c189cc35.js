"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[93510],{50158:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return d}});var n=t(46393);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=l(t),d=o,g=s["".concat(c,".").concat(d)]||s[d]||f[d]||i;return t?n.createElement(g,a(a({ref:r},u),{},{components:t})):n.createElement(g,a({ref:r},u))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=s;var p={};for(var c in r)hasOwnProperty.call(r,c)&&(p[c]=r[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var l=2;l<i;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},72217:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return s}});var n=t(74834),o=t(28265),i=(t(46393),t(50158)),a=["components"],p={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},c=void 0,l={unversionedId:"api/api-extractor.iconfigapireport.reportfolder",id:"api/api-extractor.iconfigapireport.reportfolder",isDocsHomePage:!1,title:"api-extractor.iconfigapireport.reportfolder",description:"Home &gt; @microsoft/api-extractor &gt; IConfigApiReport &gt; reportFolder",source:"@site/docs/api/api-extractor.iconfigapireport.reportfolder.md",sourceDirName:"api",slug:"/api/api-extractor.iconfigapireport.reportfolder",permalink:"/rushstack.io/pages/api/api-extractor.iconfigapireport.reportfolder",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},u=[{value:"IConfigApiReport.reportFolder property",id:"iconfigapireportreportfolder-property",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2}],f={toc:u};function s(e){var r=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/rushstack.io/pages/api/index"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack.io/pages/api/api-extractor"},"@microsoft/api-extractor")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack.io/pages/api/api-extractor.iconfigapireport"},"IConfigApiReport")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack.io/pages/api/api-extractor.iconfigapireport.reportfolder"},"reportFolder")),(0,i.kt)("h2",{id:"iconfigapireportreportfolder-property"},"IConfigApiReport.reportFolder property"),(0,i.kt)("p",null,"Specifies the folder where the API report file is written. The file name portion is determined by the ",(0,i.kt)("inlineCode",{parentName:"p"},"reportFileName")," setting."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"reportFolder?: string;\n")),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("p",null,"The API report file is normally tracked by Git. Changes to it can be used to trigger a branch policy, e.g. for an API review."),(0,i.kt)("p",null,"The path is resolved relative to the folder of the config file that contains the setting; to change this, prepend a folder token such as ",(0,i.kt)("inlineCode",{parentName:"p"},"<projectFolder>")," ."))}s.isMDXComponent=!0}}]);