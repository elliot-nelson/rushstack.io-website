"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[38938],{49613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):m(m({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,h=u["".concat(o,".").concat(d)]||u[d]||s[d]||i;return n?r.createElement(h,m(m({ref:t},p),{},{components:n})):r.createElement(h,m({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,m=new Array(i);m[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,m[1]=l;for(var c=2;c<i;c++)m[c]=n[c];return r.createElement.apply(null,m)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},43253:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var r=n(50098),a=n(46862),i=(n(59496),n(49613)),m=["components"],l={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},o=void 0,c={unversionedId:"api/ts-command-line.commandlineparameterwithargument",id:"api/ts-command-line.commandlineparameterwithargument",isDocsHomePage:!1,title:"ts-command-line.commandlineparameterwithargument",description:"Home &gt; @rushstack/ts-command-line &gt; CommandLineParameterWithArgument",source:"@site/docs/api/ts-command-line.commandlineparameterwithargument.md",sourceDirName:"api",slug:"/api/ts-command-line.commandlineparameterwithargument",permalink:"/rushstack.io-website/pages/api/ts-command-line.commandlineparameterwithargument",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},p=[{value:"CommandLineParameterWithArgument class",id:"commandlineparameterwithargument-class",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2},{value:"Properties",id:"properties",children:[],level:2}],s={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,m);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/rushstack.io-website/pages/api/index"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack.io-website/pages/api/ts-command-line"},"@rushstack/ts-command-line")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack.io-website/pages/api/ts-command-line.commandlineparameterwithargument"},"CommandLineParameterWithArgument")),(0,i.kt)("h2",{id:"commandlineparameterwithargument-class"},"CommandLineParameterWithArgument class"),(0,i.kt)("p",null,"The common base class for parameters types that receive an argument."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare abstract class CommandLineParameterWithArgument extends CommandLineParameter \n")),(0,i.kt)("b",null,"Extends:")," [CommandLineParameter](/rushstack.io-website/pages/api/ts-command-line.commandlineparameter)",(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("p",null,'An argument is an accompanying command-line token, such as "123" in the example "--max-count 123".'),(0,i.kt)("p",null,"The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,i.kt)("inlineCode",{parentName:"p"},"CommandLineParameterWithArgument")," class."),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack.io-website/pages/api/ts-command-line.commandlineparameterwithargument.argumentname"},"argumentName")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"The name of the argument, which will be shown in the command-line help.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack.io-website/pages/api/ts-command-line.commandlineparameterwithargument.completions"},"completions")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"(() =",">"," Promise","<","string","[","]",">",") ","|"," undefined"),(0,i.kt)("td",{parentName:"tr",align:null},"An optional callback that provides a list of custom choices for tab completion.")))))}u.isMDXComponent=!0}}]);