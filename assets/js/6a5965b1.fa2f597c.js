"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[26659],{49613:function(e,n,r){r.d(n,{Zo:function(){return u},kt:function(){return f}});var t=r(59496);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=t.createContext({}),c=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},u=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(r),f=o,d=m["".concat(l,".").concat(f)]||m[f]||p[f]||i;return r?t.createElement(d,a(a({ref:n},u),{},{components:r})):t.createElement(d,a({ref:n},u))}));function f(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},94724:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var t=r(50098),o=r(46862),i=(r(59496),r(49613)),a=["components"],s={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},l=void 0,c={unversionedId:"api/rush-lib.commonversionsconfiguration.allowedalternativeversions",id:"api/rush-lib.commonversionsconfiguration.allowedalternativeversions",isDocsHomePage:!1,title:"rush-lib.commonversionsconfiguration.allowedalternativeversions",description:"Home &gt; @microsoft/rush-lib &gt; CommonVersionsConfiguration &gt; allowedAlternativeVersions",source:"@site/docs/api/rush-lib.commonversionsconfiguration.allowedalternativeversions.md",sourceDirName:"api",slug:"/api/rush-lib.commonversionsconfiguration.allowedalternativeversions",permalink:"/rushstack.io-website/pages/api/rush-lib.commonversionsconfiguration.allowedalternativeversions",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},u=[{value:"CommonVersionsConfiguration.allowedAlternativeVersions property",id:"commonversionsconfigurationallowedalternativeversions-property",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2}],p={toc:u};function m(e){var n=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/rushstack.io-website/pages/api/index"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack.io-website/pages/api/rush-lib"},"@microsoft/rush-lib")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack.io-website/pages/api/rush-lib.commonversionsconfiguration"},"CommonVersionsConfiguration")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack.io-website/pages/api/rush-lib.commonversionsconfiguration.allowedalternativeversions"},"allowedAlternativeVersions")),(0,i.kt)("h2",{id:"commonversionsconfigurationallowedalternativeversions-property"},"CommonVersionsConfiguration.allowedAlternativeVersions property"),(0,i.kt)("p",null,'A table that stores, for a given dependency, a list of SemVer ranges that will be accepted by "rush check" in addition to the normal version range.'),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"get allowedAlternativeVersions(): Map<string, ReadonlyArray<string>>;\n")),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("p",null,'The "rush check" command can be used to enforce that every project in the repo must specify the same SemVer range for a given dependency. However, sometimes exceptions are needed. The allowedAlternativeVersions table allows you to list other SemVer ranges that will be accepted by "rush check" for a given dependency. Note that the normal version range (as inferred by looking at all projects in the repo) should NOT be included in this list.'))}m.isMDXComponent=!0}}]);