"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[79553],{49613:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return h}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),f=s(r),h=o,m=f["".concat(u,".").concat(h)]||f[h]||l[h]||i;return r?n.createElement(m,c(c({ref:t},p),{},{components:r})):n.createElement(m,c({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=f;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var s=2;s<i;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},29809:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return f}});var n=r(50098),o=r(46862),i=(r(59496),r(49613)),c=["components"],a={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},u=void 0,s={unversionedId:"api/rush-lib.rushconfigurationproject.consumingprojects",id:"api/rush-lib.rushconfigurationproject.consumingprojects",isDocsHomePage:!1,title:"rush-lib.rushconfigurationproject.consumingprojects",description:"Home &gt; @microsoft/rush-lib &gt; RushConfigurationProject &gt; consumingProjects",source:"@site/docs/api/rush-lib.rushconfigurationproject.consumingprojects.md",sourceDirName:"api",slug:"/api/rush-lib.rushconfigurationproject.consumingprojects",permalink:"/rushstack.io-website/pages/api/rush-lib.rushconfigurationproject.consumingprojects",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},p=[{value:"RushConfigurationProject.consumingProjects property",id:"rushconfigurationprojectconsumingprojects-property",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2}],l={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/rushstack.io-website/pages/api/index"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack.io-website/pages/api/rush-lib"},"@microsoft/rush-lib")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack.io-website/pages/api/rush-lib.rushconfigurationproject"},"RushConfigurationProject")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack.io-website/pages/api/rush-lib.rushconfigurationproject.consumingprojects"},"consumingProjects")),(0,i.kt)("h2",{id:"rushconfigurationprojectconsumingprojects-property"},"RushConfigurationProject.consumingProjects property"),(0,i.kt)("p",null,"The set of projects within the Rush configuration which declare this project as a dependency. Excludes those that declare this project as a ",(0,i.kt)("inlineCode",{parentName:"p"},"cyclicDependencyProject")," ."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"get consumingProjects(): ReadonlySet<RushConfigurationProject>;\n")),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("p",null,"This field is the counterpart to ",(0,i.kt)("inlineCode",{parentName:"p"},"dependencyProjects")," , and can be used recursively to walk the project dependency graph to find all projects which will be impacted by changes to this project."))}f.isMDXComponent=!0}}]);