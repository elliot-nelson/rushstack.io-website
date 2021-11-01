"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6886],{49613:function(e,r,a){a.d(r,{Zo:function(){return s},kt:function(){return d}});var t=a(59496);function n(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function p(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?p(Object(a),!0).forEach((function(r){n(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function o(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},p=Object.keys(e);for(t=0;t<p.length;t++)a=p[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)a=p[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=t.createContext({}),l=function(e){var r=t.useContext(c),a=r;return e&&(a="function"==typeof e?e(r):i(i({},r),e)),a},s=function(e){var r=l(e.components);return t.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var a=e.components,n=e.mdxType,p=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=l(a),d=n,k=m["".concat(c,".").concat(d)]||m[d]||u[d]||p;return a?t.createElement(k,i(i({ref:r},s),{},{components:a})):t.createElement(k,i({ref:r},s))}));function d(e,r){var a=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var p=a.length,i=new Array(p);i[0]=m;var o={};for(var c in r)hasOwnProperty.call(r,c)&&(o[c]=r[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var l=2;l<p;l++)i[l]=a[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},62091:function(e,r,a){a.r(r),a.d(r,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return m}});var t=a(50098),n=a(46862),p=(a(59496),a(49613)),i=["components"],o={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},c=void 0,l={unversionedId:"api/node-core-library.packagenameparser.parse",id:"api/node-core-library.packagenameparser.parse",isDocsHomePage:!1,title:"node-core-library.packagenameparser.parse",description:"Home &gt; @rushstack/node-core-library &gt; PackageNameParser &gt; parse",source:"@site/docs/api/node-core-library.packagenameparser.parse.md",sourceDirName:"api",slug:"/api/node-core-library.packagenameparser.parse",permalink:"/rushstack.io-website/pages/api/node-core-library.packagenameparser.parse",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},s=[{value:"PackageNameParser.parse() method",id:"packagenameparserparse-method",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2}],u={toc:s};function m(e){var r=e.components,a=(0,n.Z)(e,i);return(0,p.kt)("wrapper",(0,t.Z)({},u,a,{components:r,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/rushstack.io-website/pages/api/index"},"Home")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/rushstack.io-website/pages/api/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/rushstack.io-website/pages/api/node-core-library.packagenameparser"},"PackageNameParser")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/rushstack.io-website/pages/api/node-core-library.packagenameparser.parse"},"parse")),(0,p.kt)("h2",{id:"packagenameparserparse-method"},"PackageNameParser.parse() method"),(0,p.kt)("p",null,"Same as ",(0,p.kt)("a",{parentName:"p",href:"/rushstack.io-website/pages/api/node-core-library.packagename.tryparse"},"PackageName.tryParse()")," , except this throws an exception if the input cannot be parsed."),(0,p.kt)("b",null,"Signature:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"parse(packageName: string): IParsedPackageName;\n")),(0,p.kt)("h2",{id:"parameters"},"Parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,p.kt)("th",{parentName:"tr",align:null},"Type"),(0,p.kt)("th",{parentName:"tr",align:null},"Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"packageName"),(0,p.kt)("td",{parentName:"tr",align:null},"string"),(0,p.kt)("td",{parentName:"tr",align:null})))),(0,p.kt)("b",null,"Returns:"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/rushstack.io-website/pages/api/node-core-library.iparsedpackagename"},"IParsedPackageName")),(0,p.kt)("h2",{id:"remarks"},"Remarks"),(0,p.kt)("p",null,"The packageName must not be an empty string."))}m.isMDXComponent=!0}}]);