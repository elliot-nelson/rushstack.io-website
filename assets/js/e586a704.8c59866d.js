"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[35016],{50158:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(46393);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),f=u(n),d=r,m=f["".concat(p,".").concat(d)]||f[d]||s[d]||l;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=f;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},44247:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return f}});var a=n(74834),r=n(28265),l=(n(46393),n(50158)),i=["components"],o={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},p=void 0,u={unversionedId:"api/localization-plugin.idefaultlocaleoptions",id:"api/localization-plugin.idefaultlocaleoptions",isDocsHomePage:!1,title:"localization-plugin.idefaultlocaleoptions",description:"Home &gt; @rushstack/localization-plugin &gt; IDefaultLocaleOptions",source:"@site/docs/api/localization-plugin.idefaultlocaleoptions.md",sourceDirName:"api",slug:"/api/localization-plugin.idefaultlocaleoptions",permalink:"/rushstack.io/pages/api/localization-plugin.idefaultlocaleoptions",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},c=[{value:"IDefaultLocaleOptions interface",id:"idefaultlocaleoptions-interface",children:[],level:2},{value:"Properties",id:"properties",children:[],level:2}],s={toc:c};function f(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/rushstack.io/pages/api/index"},"Home")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/rushstack.io/pages/api/localization-plugin"},"@rushstack/localization-plugin")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/rushstack.io/pages/api/localization-plugin.idefaultlocaleoptions"},"IDefaultLocaleOptions")),(0,l.kt)("h2",{id:"idefaultlocaleoptions-interface"},"IDefaultLocaleOptions interface"),(0,l.kt)("b",null,"Signature:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface IDefaultLocaleOptions \n")),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/localization-plugin.idefaultlocaleoptions.fillmissingtranslationstrings"},"fillMissingTranslationStrings?")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("i",null,"(Optional)")," If this option is set to ",(0,l.kt)("code",null,"true"),", strings that are missing from ",(0,l.kt)("code",null,"localizedData.translatedStrings")," will be provided by the default locale")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/localization-plugin.idefaultlocaleoptions.localename"},"localeName")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"This required property specifies the name of the locale used in the ",(0,l.kt)("code",null,".resx")," and ",(0,l.kt)("code",null,".loc.json")," files in the source")))))}f.isMDXComponent=!0}}]);