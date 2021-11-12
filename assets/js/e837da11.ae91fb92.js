"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[80274],{50158:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(46393);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=l(n),f=o,g=m["".concat(s,".").concat(f)]||m[f]||p[f]||i;return n?r.createElement(g,a(a({ref:t},c),{},{components:n})):r.createElement(g,a({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7200:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return m}});var r=n(74834),o=n(28265),i=(n(46393),n(50158)),a=["components"],u={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},s=void 0,l={unversionedId:"api/rush-lib.rushconfiguration.getcommonversions",id:"api/rush-lib.rushconfiguration.getcommonversions",isDocsHomePage:!1,title:"rush-lib.rushconfiguration.getcommonversions",description:"Home &gt; @microsoft/rush-lib &gt; RushConfiguration &gt; getCommonVersions",source:"@site/docs/api/rush-lib.rushconfiguration.getcommonversions.md",sourceDirName:"api",slug:"/api/rush-lib.rushconfiguration.getcommonversions",permalink:"/rushstack.io/pages/api/rush-lib.rushconfiguration.getcommonversions",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},c=[{value:"RushConfiguration.getCommonVersions() method",id:"rushconfigurationgetcommonversions-method",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2}],p={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/rushstack.io/pages/api/index"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack.io/pages/api/rush-lib"},"@microsoft/rush-lib")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack.io/pages/api/rush-lib.rushconfiguration"},"RushConfiguration")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack.io/pages/api/rush-lib.rushconfiguration.getcommonversions"},"getCommonVersions")),(0,i.kt)("h2",{id:"rushconfigurationgetcommonversions-method"},"RushConfiguration.getCommonVersions() method"),(0,i.kt)("p",null,"Gets the settings from the common-versions.json config file for a specific variant."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"getCommonVersions(variant?: string | undefined): CommonVersionsConfiguration;\n")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"variant"),(0,i.kt)("td",{parentName:"tr",align:null},"string ","|"," undefined"),(0,i.kt)("td",{parentName:"tr",align:null},"The name of the current variant in use by the active command.")))),(0,i.kt)("b",null,"Returns:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/rushstack.io/pages/api/rush-lib.commonversionsconfiguration"},"CommonVersionsConfiguration")))}m.isMDXComponent=!0}}]);