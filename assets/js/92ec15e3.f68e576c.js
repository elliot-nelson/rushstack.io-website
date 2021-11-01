"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[11083],{49613:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var a=r(59496);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),c=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(r),d=n,k=u["".concat(o,".").concat(d)]||u[d]||m[d]||i;return r?a.createElement(k,p(p({ref:t},s),{},{components:r})):a.createElement(k,p({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,p=new Array(i);p[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,p[1]=l;for(var c=2;c<i;c++)p[c]=r[c];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},92778:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var a=r(50098),n=r(46862),i=(r(59496),r(49613)),p=["components"],l={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},o=void 0,c={unversionedId:"api/api-extractor-model.parameter",id:"api/api-extractor-model.parameter",isDocsHomePage:!1,title:"api-extractor-model.parameter",description:"Home &gt; @microsoft/api-extractor-model &gt; Parameter",source:"@site/docs/api/api-extractor-model.parameter.md",sourceDirName:"api",slug:"/api/api-extractor-model.parameter",permalink:"/rushstack.io-website/pages/api/api-extractor-model.parameter",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},s=[{value:"Parameter class",id:"parameter-class",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2},{value:"Constructors",id:"constructors",children:[],level:2},{value:"Properties",id:"properties",children:[],level:2}],m={toc:s};function u(e){var t=e.components,r=(0,n.Z)(e,p);return(0,i.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/rushstack.io-website/pages/api/index"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack.io-website/pages/api/api-extractor-model"},"@microsoft/api-extractor-model")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack.io-website/pages/api/api-extractor-model.parameter"},"Parameter")),(0,i.kt)("h2",{id:"parameter-class"},"Parameter class"),(0,i.kt)("p",null,"Represents a named parameter for a function-like declaration."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class Parameter \n")),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Parameter")," represents a TypeScript declaration such as ",(0,i.kt)("inlineCode",{parentName:"p"},"x: number")," in this example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export function add(x: number, y: number): number {\n  return x + y;\n}\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Parameter")," objects belong to the ",(0,i.kt)("a",{parentName:"p",href:"/rushstack.io-website/pages/api/api-extractor-model.apiparameterlistmixin.parameters"},"ApiParameterListMixin.parameters")," collection."),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Constructor"),(0,i.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack.io-website/pages/api/api-extractor-model.parameter._constructor_"},"(constructor)(options)")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Constructs a new instance of the ",(0,i.kt)("code",null,"Parameter")," class")))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack.io-website/pages/api/api-extractor-model.parameter.name"},"name")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"The parameter name.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack.io-website/pages/api/api-extractor-model.parameter.parametertypeexcerpt"},"parameterTypeExcerpt")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack.io-website/pages/api/api-extractor-model.excerpt"},"Excerpt")),(0,i.kt)("td",{parentName:"tr",align:null},"An ",(0,i.kt)("a",{parentName:"td",href:"/rushstack.io-website/pages/api/api-extractor-model.excerpt"},"Excerpt")," that describes the type of the parameter.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack.io-website/pages/api/api-extractor-model.parameter.tsdocparamblock"},"tsdocParamBlock")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"tsdoc.DocParamBlock ","|"," undefined"),(0,i.kt)("td",{parentName:"tr",align:null},"Returns the ",(0,i.kt)("code",null,"@param")," documentation for this parameter, if present.")))))}u.isMDXComponent=!0}}]);