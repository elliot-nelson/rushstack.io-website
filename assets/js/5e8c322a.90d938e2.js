"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[37597],{50158:function(t,e,a){a.d(e,{Zo:function(){return c},kt:function(){return m}});var r=a(46393);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),s=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},c=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,p=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),d=s(a),m=n,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return a?r.createElement(k,o(o({ref:e},c),{},{components:a})):r.createElement(k,o({ref:e},c))}));function m(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:n,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},84405:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var r=a(74834),n=a(28265),i=(a(46393),a(50158)),o=["components"],l={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},p=void 0,s={unversionedId:"api/index",id:"api/index",isDocsHomePage:!1,title:"index",description:"Home",source:"@site/docs/api/index.md",sourceDirName:"api",slug:"/api/index",permalink:"/rushstack.io/pages/api/index",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},c=[{value:"API Reference",id:"api-reference",children:[],level:2},{value:"Packages",id:"packages",children:[],level:2}],u={toc:c};function d(t){var e=t.components,a=(0,n.Z)(t,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/rushstack.io/pages/api/index"},"Home")),(0,i.kt)("h2",{id:"api-reference"},"API Reference"),(0,i.kt)("h2",{id:"packages"},"Packages"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Package"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/api-documenter"},"@microsoft/api-documenter")),(0,i.kt)("td",{parentName:"tr",align:null},"API Documenter generates an API reference website from the .api.json files created by API Extractor. The ",(0,i.kt)("code",null,"@microsoft/api-documenter")," package provides the command-line tool. It also exposes a developer API that you can use to create plugins that customize how API Documenter generates documentation.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/api-extractor"},"@microsoft/api-extractor")),(0,i.kt)("td",{parentName:"tr",align:null},"API Extractor helps with validation, documentation, and reviewing of the exported API for a TypeScript library. The ",(0,i.kt)("code",null,"@microsoft/api-extractor")," package provides the command-line tool. It also exposes a developer API that you can use to invoke API Extractor programmatically.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/api-extractor-model"},"@microsoft/api-extractor-model")),(0,i.kt)("td",{parentName:"tr",align:null},"Use this library to read and write ","*",".api.json files as defined by the ",(0,i.kt)("a",{parentName:"td",href:"https://api-extractor.com/"},"API Extractor")," tool. These files are used to generate a documentation website for your TypeScript package. The files store the API signatures and doc comments that were extracted from your package.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/rush-lib"},"@microsoft/rush-lib")),(0,i.kt)("td",{parentName:"tr",align:null},"A library for writing scripts that interact with the ",(0,i.kt)("a",{parentName:"td",href:"https://rushjs.io/"},"Rush")," tool.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/debug-certificate-manager"},"@rushstack/debug-certificate-manager")),(0,i.kt)("td",{parentName:"tr",align:null},"This package is used to manage debug certificates for development servers. It is used by ","[","@ microsoft/gulp-core-build-serve","]","(",(0,i.kt)("a",{parentName:"td",href:"https://www.npmjs.com/package/"},"https://www.npmjs.com/package/")," @ microsoft/gulp-core-build-serve) to generate and trust a certificate when HTTPS is turned on. This package provides the following utilities: - ",(0,i.kt)("code",null,"CertificateStore")," to handle retrieving and saving a debug certificate. - ",(0,i.kt)("code",null,"CertificateManager")," is a utility class containing the following public methods: ","|"," - ",(0,i.kt)("code",null,"ensureCertificate")," will find or optionally create a debug certificate and trust it. ","|"," - ",(0,i.kt)("code",null,"untrustCertificate")," will untrust a debug certificate.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/heft"},"@rushstack/heft")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/heft-config-file"},"@rushstack/heft-config-file")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/heft-webpack4-plugin"},"@rushstack/heft-webpack4-plugin")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/heft-webpack5-plugin"},"@rushstack/heft-webpack5-plugin")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/localization-plugin"},"@rushstack/localization-plugin")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/module-minifier-plugin"},"@rushstack/module-minifier-plugin")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/node-core-library"},"@rushstack/node-core-library")),(0,i.kt)("td",{parentName:"tr",align:null},"Core libraries that every NodeJS toolchain project should use.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/package-deps-hash"},"@rushstack/package-deps-hash")),(0,i.kt)("td",{parentName:"tr",align:null},"This package builds a JSON object containing the git hashes of all files used to produce a given NPM package. The ",(0,i.kt)("a",{parentName:"td",href:"https://rushjs.io/"},"Rush")," tool uses this library to implement incremental build detection.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/rig-package"},"@rushstack/rig-package")),(0,i.kt)("td",{parentName:"tr",align:null},"A system for sharing tool configurations between projects without duplicating config files.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/stream-collator"},"@rushstack/stream-collator")),(0,i.kt)("td",{parentName:"tr",align:null},"This library enables a tool to display live console output from multiple concurrent processes, while ensuring that their output does not get jumbled together.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/terminal"},"@rushstack/terminal")),(0,i.kt)("td",{parentName:"tr",align:null},"This library implements a system for processing human readable text that will be output by console applications.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/tree-pattern"},"@rushstack/tree-pattern")),(0,i.kt)("td",{parentName:"tr",align:null},"A fast, lightweight pattern matcher for tree structures such as an Abstract Syntax Tree (AST).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/ts-command-line"},"@rushstack/ts-command-line")),(0,i.kt)("td",{parentName:"tr",align:null},"An object-oriented command-line parser for TypeScript projects.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/typings-generator"},"@rushstack/typings-generator")),(0,i.kt)("td",{parentName:"tr",align:null})))))}d.isMDXComponent=!0}}]);