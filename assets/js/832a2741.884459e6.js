"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[85341],{50158:function(t,e,r){r.d(e,{Zo:function(){return u},kt:function(){return m}});var a=r(46393);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},i=Object.keys(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var s=a.createContext({}),p=function(t){var e=a.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},u=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,s=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),d=p(r),m=n,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return r?a.createElement(k,l(l({ref:e},u),{},{components:r})):a.createElement(k,l({ref:e},u))}));function m(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:n,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},48368:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var a=r(74834),n=r(28265),i=(r(46393),r(50158)),l=["components"],o={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},s=void 0,p={unversionedId:"api/terminal.stdiowritable",id:"api/terminal.stdiowritable",isDocsHomePage:!1,title:"terminal.stdiowritable",description:"Home &gt; @rushstack/terminal &gt; StdioWritable",source:"@site/docs/api/terminal.stdiowritable.md",sourceDirName:"api",slug:"/api/terminal.stdiowritable",permalink:"/rushstack.io/pages/api/terminal.stdiowritable",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},u=[{value:"StdioWritable class",id:"stdiowritable-class",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2},{value:"Properties",id:"properties",children:[],level:2},{value:"Methods",id:"methods",children:[],level:2}],c={toc:u};function d(t){var e=t.components,r=(0,n.Z)(t,l);return(0,i.kt)("wrapper",(0,a.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/rushstack.io/pages/api/index"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack.io/pages/api/terminal"},"@rushstack/terminal")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack.io/pages/api/terminal.stdiowritable"},"StdioWritable")),(0,i.kt)("h2",{id:"stdiowritable-class"},"StdioWritable class"),(0,i.kt)("p",null,"A ",(0,i.kt)("a",{parentName:"p",href:"/rushstack.io/pages/api/terminal.terminalwritable"},"TerminalWritable")," subclass that writes its output directly to the process ",(0,i.kt)("inlineCode",{parentName:"p"},"stdout")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"stderr")," streams."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class StdioWritable extends TerminalWritable \n")),(0,i.kt)("b",null,"Extends:")," [TerminalWritable](/rushstack.io/pages/api/terminal.terminalwritable)",(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("p",null,"This is the standard output target for a process. You normally do not need to construct this class; the ",(0,i.kt)("a",{parentName:"p",href:"/rushstack.io/pages/api/terminal.stdiowritable.instance"},"StdioWritable.instance")," singleton can be used instead."),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/terminal.stdiowritable.instance"},"instance")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"static")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/terminal.stdiowritable"},"StdioWritable")),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Method"),(0,i.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/terminal.stdiowritable.onwritechunk"},"onWriteChunk(chunk)")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})))))}d.isMDXComponent=!0}}]);