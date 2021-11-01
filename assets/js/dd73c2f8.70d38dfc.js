"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[44794],{49613:function(e,r,n){n.d(r,{Zo:function(){return l},kt:function(){return m}});var t=n(59496);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function u(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=t.createContext({}),s=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},l=function(e){var r=s(e.components);return t.createElement(c.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(n),m=o,h=p["".concat(c,".").concat(m)]||p[m]||f[m]||i;return n?t.createElement(h,a(a({ref:r},l),{},{components:n})):t.createElement(h,a({ref:r},l))}));function m(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var u={};for(var c in r)hasOwnProperty.call(r,c)&&(u[c]=r[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var s=2;s<i;s++)a[s]=n[s];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},17338:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var t=n(50098),o=n(46862),i=(n(59496),n(49613)),a=["components"],u={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},c=void 0,s={unversionedId:"api/rush-lib.rushconfiguration.commonrushconfigfolder",id:"api/rush-lib.rushconfiguration.commonrushconfigfolder",isDocsHomePage:!1,title:"rush-lib.rushconfiguration.commonrushconfigfolder",description:"Home &gt; @microsoft/rush-lib &gt; RushConfiguration &gt; commonRushConfigFolder",source:"@site/docs/api/rush-lib.rushconfiguration.commonrushconfigfolder.md",sourceDirName:"api",slug:"/api/rush-lib.rushconfiguration.commonrushconfigfolder",permalink:"/rushstack.io-website/pages/api/rush-lib.rushconfiguration.commonrushconfigfolder",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},l=[{value:"RushConfiguration.commonRushConfigFolder property",id:"rushconfigurationcommonrushconfigfolder-property",children:[],level:2}],f={toc:l};function p(e){var r=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,t.Z)({},f,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/rushstack.io-website/pages/api/index"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack.io-website/pages/api/rush-lib"},"@microsoft/rush-lib")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack.io-website/pages/api/rush-lib.rushconfiguration"},"RushConfiguration")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack.io-website/pages/api/rush-lib.rushconfiguration.commonrushconfigfolder"},"commonRushConfigFolder")),(0,i.kt)("h2",{id:"rushconfigurationcommonrushconfigfolder-property"},"RushConfiguration.commonRushConfigFolder property"),(0,i.kt)("p",null,"The folder where Rush's additional config files are stored. This folder is always a subfolder called ",(0,i.kt)("inlineCode",{parentName:"p"},"config\\rush")," inside the common folder. (The ",(0,i.kt)("inlineCode",{parentName:"p"},"common\\config")," folder is reserved for configuration files used by other tools.) To avoid confusion or mistakes, Rush will report an error if this this folder contains any unrecognized files."),(0,i.kt)("p",null,"Example: ",(0,i.kt)("inlineCode",{parentName:"p"},"C:\\MyRepo\\common\\config\\rush")),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"get commonRushConfigFolder(): string;\n")))}p.isMDXComponent=!0}}]);