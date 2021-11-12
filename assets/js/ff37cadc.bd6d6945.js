"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[5402],{50158:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return g}});var n=r(46393);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),h=p(r),g=a,d=h["".concat(l,".").concat(g)]||h[g]||u[g]||o;return r?n.createElement(d,c(c({ref:t},s),{},{components:r})):n.createElement(d,c({ref:t},s))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},77440:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return h}});var n=r(74834),a=r(28265),o=(r(46393),r(50158)),c=["components"],i={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},l=void 0,p={unversionedId:"api/rush-lib.projectchangeanalyzer.getchangedprojectsasync",id:"api/rush-lib.projectchangeanalyzer.getchangedprojectsasync",isDocsHomePage:!1,title:"rush-lib.projectchangeanalyzer.getchangedprojectsasync",description:"Home &gt; @microsoft/rush-lib &gt; ProjectChangeAnalyzer &gt; getChangedProjectsAsync",source:"@site/docs/api/rush-lib.projectchangeanalyzer.getchangedprojectsasync.md",sourceDirName:"api",slug:"/api/rush-lib.projectchangeanalyzer.getchangedprojectsasync",permalink:"/rushstack.io/pages/api/rush-lib.projectchangeanalyzer.getchangedprojectsasync",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},s=[{value:"ProjectChangeAnalyzer.getChangedProjectsAsync() method",id:"projectchangeanalyzergetchangedprojectsasync-method",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2}],u={toc:s};function h(e){var t=e.components,r=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/rushstack.io/pages/api/index"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/rushstack.io/pages/api/rush-lib"},"@microsoft/rush-lib")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/rushstack.io/pages/api/rush-lib.projectchangeanalyzer"},"ProjectChangeAnalyzer")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/rushstack.io/pages/api/rush-lib.projectchangeanalyzer.getchangedprojectsasync"},"getChangedProjectsAsync")),(0,o.kt)("h2",{id:"projectchangeanalyzergetchangedprojectsasync-method"},"ProjectChangeAnalyzer.getChangedProjectsAsync() method"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,o.kt)("p",null,"Gets a list of projects that have changed in the current state of the repo when compared to the specified branch."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"getChangedProjectsAsync(options: IGetChangedProjectsOptions): AsyncIterable<RushConfigurationProject>;\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"options"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/rush-lib.igetchangedprojectsoptions"},"IGetChangedProjectsOptions")),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("b",null,"Returns:"),(0,o.kt)("p",null,"AsyncIterable","<",(0,o.kt)("a",{parentName:"p",href:"/rushstack.io/pages/api/rush-lib.rushconfigurationproject"},"RushConfigurationProject")," ",">"))}h.isMDXComponent=!0}}]);