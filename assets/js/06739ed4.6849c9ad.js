"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[14479],{49613:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=s(r),d=a,m=f["".concat(p,".").concat(d)]||f[d]||u[d]||i;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3900:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return f}});var n=r(50098),a=r(46862),i=(r(59496),r(49613)),o=["components"],l={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},p=void 0,s={unversionedId:"api/node-core-library.filewriter.open",id:"api/node-core-library.filewriter.open",isDocsHomePage:!1,title:"node-core-library.filewriter.open",description:"Home &gt; @rushstack/node-core-library &gt; FileWriter &gt; open",source:"@site/docs/api/node-core-library.filewriter.open.md",sourceDirName:"api",slug:"/api/node-core-library.filewriter.open",permalink:"/rushstack.io-website/pages/api/node-core-library.filewriter.open",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},c=[{value:"FileWriter.open() method",id:"filewriteropen-method",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2}],u={toc:c};function f(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/rushstack.io-website/pages/api/index"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack.io-website/pages/api/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack.io-website/pages/api/node-core-library.filewriter"},"FileWriter")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack.io-website/pages/api/node-core-library.filewriter.open"},"open")),(0,i.kt)("h2",{id:"filewriteropen-method"},"FileWriter.open() method"),(0,i.kt)("p",null,"Opens a new file handle to the file at the specified path and given mode. Behind the scenes it uses ",(0,i.kt)("inlineCode",{parentName:"p"},"fs.openSync()")," . The behaviour of this function is platform specific. See: ",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org/docs/latest-v8.x/api/fs.html%5C#fs%5C_fs%5C_open%5C_path%5C_flags%5C_mode%5C_callback"},"https://nodejs.org/docs/latest-v8.x/api/fs.html\\#fs\\_fs\\_open\\_path\\_flags\\_mode\\_callback")),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"static open(filePath: string, flags?: IFileWriterFlags): FileWriter;\n")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"filePath"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"The absolute or relative path to the file handle that should be opened.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"flags"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack.io-website/pages/api/node-core-library.ifilewriterflags"},"IFileWriterFlags")),(0,i.kt)("td",{parentName:"tr",align:null},"The flags for opening the handle")))),(0,i.kt)("b",null,"Returns:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/rushstack.io-website/pages/api/node-core-library.filewriter"},"FileWriter")))}f.isMDXComponent=!0}}]);