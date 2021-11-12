"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[75288],{50158:function(r,e,t){t.d(e,{Zo:function(){return s},kt:function(){return h}});var n=t(46393);function a(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function i(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function o(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){a(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}function u(r,e){if(null==r)return{};var t,n,a=function(r,e){if(null==r)return{};var t,n,a={},i=Object.keys(r);for(n=0;n<i.length;n++)t=i[n],e.indexOf(t)>=0||(a[t]=r[t]);return a}(r,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);for(n=0;n<i.length;n++)t=i[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(r,t)&&(a[t]=r[t])}return a}var l=n.createContext({}),c=function(r){var e=n.useContext(l),t=e;return r&&(t="function"==typeof r?r(e):o(o({},e),r)),t},s=function(r){var e=c(r.components);return n.createElement(l.Provider,{value:e},r.children)},p={inlineCode:"code",wrapper:function(r){var e=r.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(r,e){var t=r.components,a=r.mdxType,i=r.originalType,l=r.parentName,s=u(r,["components","mdxType","originalType","parentName"]),f=c(t),h=a,d=f["".concat(l,".").concat(h)]||f[h]||p[h]||i;return t?n.createElement(d,o(o({ref:e},s),{},{components:t})):n.createElement(d,o({ref:e},s))}));function h(r,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof r||a){var i=t.length,o=new Array(i);o[0]=f;var u={};for(var l in e)hasOwnProperty.call(e,l)&&(u[l]=e[l]);u.originalType=r,u.mdxType="string"==typeof r?r:a,o[1]=u;for(var c=2;c<i;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},53143:function(r,e,t){t.r(e),t.d(e,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return f}});var n=t(74834),a=t(28265),i=(t(46393),t(50158)),o=["components"],u={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},l=void 0,c={unversionedId:"api/rush-lib.rushconfiguration.currentinstalledvariant",id:"api/rush-lib.rushconfiguration.currentinstalledvariant",isDocsHomePage:!1,title:"rush-lib.rushconfiguration.currentinstalledvariant",description:"Home &gt; @microsoft/rush-lib &gt; RushConfiguration &gt; currentInstalledVariant",source:"@site/docs/api/rush-lib.rushconfiguration.currentinstalledvariant.md",sourceDirName:"api",slug:"/api/rush-lib.rushconfiguration.currentinstalledvariant",permalink:"/rushstack.io/pages/api/rush-lib.rushconfiguration.currentinstalledvariant",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},s=[{value:"RushConfiguration.currentInstalledVariant property",id:"rushconfigurationcurrentinstalledvariant-property",children:[],level:2}],p={toc:s};function f(r){var e=r.components,t=(0,a.Z)(r,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/rushstack.io/pages/api/index"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack.io/pages/api/rush-lib"},"@microsoft/rush-lib")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack.io/pages/api/rush-lib.rushconfiguration"},"RushConfiguration")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack.io/pages/api/rush-lib.rushconfiguration.currentinstalledvariant"},"currentInstalledVariant")),(0,i.kt)("h2",{id:"rushconfigurationcurrentinstalledvariant-property"},"RushConfiguration.currentInstalledVariant property"),(0,i.kt)("p",null,'Gets the currently-installed variant, if an installation has occurred. For Rush operations which do not take a --variant parameter, this method determines which variant, if any, was last specified when performing "rush install" or "rush update".'),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"get currentInstalledVariant(): string | undefined;\n")))}f.isMDXComponent=!0}}]);