"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[63125],{49613:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return b}});var n=r(59496);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=u(r),b=i,d=m["".concat(l,".").concat(b)]||m[b]||c[b]||a;return r?n.createElement(d,o(o({ref:t},s),{},{components:r})):n.createElement(d,o({ref:t},s))}));function b(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},13124:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return m}});var n=r(50098),i=r(46862),a=(r(59496),r(49613)),o=["components"],p={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},l=void 0,u={unversionedId:"api/rush-lib.lockstepversionpolicy.bump",id:"api/rush-lib.lockstepversionpolicy.bump",isDocsHomePage:!1,title:"rush-lib.lockstepversionpolicy.bump",description:"Home &gt; @microsoft/rush-lib &gt; LockStepVersionPolicy &gt; bump",source:"@site/docs/api/rush-lib.lockstepversionpolicy.bump.md",sourceDirName:"api",slug:"/api/rush-lib.lockstepversionpolicy.bump",permalink:"/rushstack.io-website/pages/api/rush-lib.lockstepversionpolicy.bump",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},s=[{value:"LockStepVersionPolicy.bump() method",id:"lockstepversionpolicybump-method",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2}],c={toc:s};function m(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/rushstack.io-website/pages/api/index"},"Home")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/rushstack.io-website/pages/api/rush-lib"},"@microsoft/rush-lib")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/rushstack.io-website/pages/api/rush-lib.lockstepversionpolicy"},"LockStepVersionPolicy")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/rushstack.io-website/pages/api/rush-lib.lockstepversionpolicy.bump"},"bump")),(0,a.kt)("h2",{id:"lockstepversionpolicybump-method"},"LockStepVersionPolicy.bump() method"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,a.kt)("p",null,"Bumps the version of the lockstep policy"),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"bump(bumpType?: BumpType, identifier?: string): void;\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"bumpType"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/rushstack.io-website/pages/api/rush-lib.bumptype"},"BumpType")),(0,a.kt)("td",{parentName:"tr",align:null},"Overwrite bump type in version-policy.json with the provided value.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"identifier"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Prerelease identifier if bump type is prerelease.")))),(0,a.kt)("b",null,"Returns:"),(0,a.kt)("p",null,"void"))}m.isMDXComponent=!0}}]);