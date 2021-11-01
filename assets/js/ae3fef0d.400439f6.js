"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[92558],{49613:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return u}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),s=c(r),u=a,f=s["".concat(l,".").concat(u)]||s[u]||d[u]||i;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=s;var m={};for(var l in t)hasOwnProperty.call(t,l)&&(m[l]=t[l]);m.originalType=e,m.mdxType="string"==typeof e?e:a,o[1]=m;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},36059:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return m},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return s}});var n=r(50098),a=r(46862),i=(r(59496),r(49613)),o=["components"],m={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},l=void 0,c={unversionedId:"api/ts-command-line.commandlineparameterprovider.definechoiceparameter",id:"api/ts-command-line.commandlineparameterprovider.definechoiceparameter",isDocsHomePage:!1,title:"ts-command-line.commandlineparameterprovider.definechoiceparameter",description:"Home &gt; @rushstack/ts-command-line &gt; CommandLineParameterProvider &gt; defineChoiceParameter",source:"@site/docs/api/ts-command-line.commandlineparameterprovider.definechoiceparameter.md",sourceDirName:"api",slug:"/api/ts-command-line.commandlineparameterprovider.definechoiceparameter",permalink:"/rushstack.io-website/pages/api/ts-command-line.commandlineparameterprovider.definechoiceparameter",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},p=[{value:"CommandLineParameterProvider.defineChoiceParameter() method",id:"commandlineparameterproviderdefinechoiceparameter-method",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2}],d={toc:p};function s(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/rushstack.io-website/pages/api/index"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack.io-website/pages/api/ts-command-line"},"@rushstack/ts-command-line")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack.io-website/pages/api/ts-command-line.commandlineparameterprovider"},"CommandLineParameterProvider")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack.io-website/pages/api/ts-command-line.commandlineparameterprovider.definechoiceparameter"},"defineChoiceParameter")),(0,i.kt)("h2",{id:"commandlineparameterproviderdefinechoiceparameter-method"},"CommandLineParameterProvider.defineChoiceParameter() method"),(0,i.kt)("p",null,"Defines a command-line parameter whose value must be a string from a fixed set of allowable choices (similar to an enum)."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"defineChoiceParameter(definition: ICommandLineChoiceDefinition): CommandLineChoiceParameter;\n")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"definition"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack.io-website/pages/api/ts-command-line.icommandlinechoicedefinition"},"ICommandLineChoiceDefinition")),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("b",null,"Returns:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/rushstack.io-website/pages/api/ts-command-line.commandlinechoiceparameter"},"CommandLineChoiceParameter")),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("p",null,"Example of a choice parameter:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"example-tool --log-level warn\n")))}s.isMDXComponent=!0}}]);