"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[41828],{50158:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return g}});var n=r(46393);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(r),g=i,d=f["".concat(p,".").concat(g)]||f[g]||s[g]||a;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},66158:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return f}});var n=r(74834),i=r(28265),a=(r(46393),r(50158)),o=["components"],l={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},p=void 0,c={unversionedId:"api/rig-package.rigconfig.tryresolveconfigfilepath",id:"api/rig-package.rigconfig.tryresolveconfigfilepath",isDocsHomePage:!1,title:"rig-package.rigconfig.tryresolveconfigfilepath",description:"Home &gt; @rushstack/rig-package &gt; RigConfig &gt; tryResolveConfigFilePath",source:"@site/docs/api/rig-package.rigconfig.tryresolveconfigfilepath.md",sourceDirName:"api",slug:"/api/rig-package.rigconfig.tryresolveconfigfilepath",permalink:"/rushstack.io/pages/api/rig-package.rigconfig.tryresolveconfigfilepath",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},u=[{value:"RigConfig.tryResolveConfigFilePath() method",id:"rigconfigtryresolveconfigfilepath-method",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2}],s={toc:u};function f(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/rushstack.io/pages/api/index"},"Home")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/rushstack.io/pages/api/rig-package"},"@rushstack/rig-package")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/rushstack.io/pages/api/rig-package.rigconfig"},"RigConfig")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/rushstack.io/pages/api/rig-package.rigconfig.tryresolveconfigfilepath"},"tryResolveConfigFilePath")),(0,a.kt)("h2",{id:"rigconfigtryresolveconfigfilepath-method"},"RigConfig.tryResolveConfigFilePath() method"),(0,a.kt)("p",null,"This lookup first checks for the specified relative path under ",(0,a.kt)("inlineCode",{parentName:"p"},"projectFolderPath")," ; if it does not exist there, then it checks in the resolved rig profile folder. If the file is found, its absolute path is returned. Otherwise, ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," is returned."),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"tryResolveConfigFilePath(configFileRelativePath: string): string | undefined;\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"configFileRelativePath"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("b",null,"Returns:"),(0,a.kt)("p",null,"string ","|"," undefined"),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"For example, suppose the rig profile is:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"/path/to/your-project/node_modules/example-rig/profiles/example-profile")),(0,a.kt)("p",null,"And suppose ",(0,a.kt)("inlineCode",{parentName:"p"},"configFileRelativePath")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"folder/file.json")," . Then the following locations will be checked:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"/path/to/your-project/folder/file.json")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"/path/to/your-project/node_modules/example-rig/profiles/example-profile/folder/file.json")))}f.isMDXComponent=!0}}]);