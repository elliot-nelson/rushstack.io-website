"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[14049],{50158:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(46393);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(n),f=a,d=m["".concat(s,".").concat(f)]||m[f]||c[f]||i;return n?r.createElement(d,l(l({ref:t},p),{},{components:n})):r.createElement(d,l({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},10772:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var r=n(74834),a=n(28265),i=(n(46393),n(50158)),l=["components"],o={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},s=void 0,u={unversionedId:"api/module-minifier-plugin.generatelicensefileforasset",id:"api/module-minifier-plugin.generatelicensefileforasset",isDocsHomePage:!1,title:"module-minifier-plugin.generatelicensefileforasset",description:"Home &gt; @rushstack/module-minifier-plugin &gt; generateLicenseFileForAsset",source:"@site/docs/api/module-minifier-plugin.generatelicensefileforasset.md",sourceDirName:"api",slug:"/api/module-minifier-plugin.generatelicensefileforasset",permalink:"/rushstack.io/pages/api/module-minifier-plugin.generatelicensefileforasset",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},p=[{value:"generateLicenseFileForAsset() function",id:"generatelicensefileforasset-function",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2}],c={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/rushstack.io/pages/api/index"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack.io/pages/api/module-minifier-plugin"},"@rushstack/module-minifier-plugin")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack.io/pages/api/module-minifier-plugin.generatelicensefileforasset"},"generateLicenseFileForAsset")),(0,i.kt)("h2",{id:"generatelicensefileforasset-function"},"generateLicenseFileForAsset() function"),(0,i.kt)("p",null,"Generates a companion asset containing all extracted comments. If it is non-empty, returns a banner comment directing users to said companion asset."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare function generateLicenseFileForAsset(compilation: webpack.compilation.Compilation, asset: IAssetInfo, minifiedModules: IModuleMap): string;\n")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"compilation"),(0,i.kt)("td",{parentName:"tr",align:null},"webpack.compilation.Compilation"),(0,i.kt)("td",{parentName:"tr",align:null},"The webpack compilation")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"asset"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/module-minifier-plugin.iassetinfo"},"IAssetInfo")),(0,i.kt)("td",{parentName:"tr",align:null},"The asset to process")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"minifiedModules"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/module-minifier-plugin.imodulemap"},"IModuleMap")),(0,i.kt)("td",{parentName:"tr",align:null},"The minified modules to pull comments from")))),(0,i.kt)("b",null,"Returns:"),(0,i.kt)("p",null,"string"))}m.isMDXComponent=!0}}]);