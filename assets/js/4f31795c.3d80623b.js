"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[69733],{50158:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var a=r(46393);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),c=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,k=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return r?a.createElement(k,p(p({ref:t},s),{},{components:r})):a.createElement(k,p({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,p=new Array(o);p[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,p[1]=l;for(var c=2;c<o;c++)p[c]=r[c];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},72441:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var a=r(74834),n=r(28265),o=(r(46393),r(50158)),p=["components"],l={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},i=void 0,c={unversionedId:"api/api-extractor-model.excerpt",id:"api/api-extractor-model.excerpt",isDocsHomePage:!1,title:"api-extractor-model.excerpt",description:"Home &gt; @microsoft/api-extractor-model &gt; Excerpt",source:"@site/docs/api/api-extractor-model.excerpt.md",sourceDirName:"api",slug:"/api/api-extractor-model.excerpt",permalink:"/rushstack.io/pages/api/api-extractor-model.excerpt",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},s=[{value:"Excerpt class",id:"excerpt-class",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2},{value:"Constructors",id:"constructors",children:[],level:2},{value:"Properties",id:"properties",children:[],level:2}],u={toc:s};function d(e){var t=e.components,r=(0,n.Z)(e,p);return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/rushstack.io/pages/api/index"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/rushstack.io/pages/api/api-extractor-model"},"@microsoft/api-extractor-model")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/rushstack.io/pages/api/api-extractor-model.excerpt"},"Excerpt")),(0,o.kt)("h2",{id:"excerpt-class"},"Excerpt class"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Excerpt")," class is used by ",(0,o.kt)("a",{parentName:"p",href:"/rushstack.io/pages/api/api-extractor-model.apideclareditem"},"ApiDeclaredItem")," to represent a TypeScript code fragment that may be annotated with hyperlinks to declared types (and in the future, source code locations)."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class Excerpt \n")),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"API Extractor's .api.json file format stores excerpts compactly as a start/end indexes into an array of tokens. Every ",(0,o.kt)("inlineCode",{parentName:"p"},"ApiDeclaredItem"),' has a "main excerpt" corresponding to the full list of tokens. The declaration may also have have "captured" excerpts that correspond to subranges of tokens.'),(0,o.kt)("p",null,"For example, if the main excerpt is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"function parse(s: string): Vector | undefined;\n")),(0,o.kt)("p",null,'...then this entire signature is the "main excerpt", whereas the function\'s return type ',(0,o.kt)("inlineCode",{parentName:"p"},"Vector | undefined")," is a captured excerpt. The ",(0,o.kt)("inlineCode",{parentName:"p"},"Vector")," token might be a hyperlink to that API item."),(0,o.kt)("p",null,"An excerpt may be empty (i.e. a token range containing zero tokens). For example, if a function's return value is not explicitly declared, then the returnTypeExcerpt will be empty. By contrast, a class constructor cannot have a return value, so ApiConstructor has no returnTypeExcerpt property at all."),(0,o.kt)("h2",{id:"constructors"},"Constructors"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Constructor"),(0,o.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/api-extractor-model.excerpt._constructor_"},"(constructor)(tokens, tokenRange)")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Constructs a new instance of the ",(0,o.kt)("code",null,"Excerpt")," class")))),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/api-extractor-model.excerpt.isempty"},"isEmpty")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"boolean"),(0,o.kt)("td",{parentName:"tr",align:null},"Returns true if the excerpt is an empty range.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/api-extractor-model.excerpt.spannedtokens"},"spannedTokens")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"ReadonlyArray","<",(0,o.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/api-extractor-model.excerpttoken"},"ExcerptToken")," ",">"),(0,o.kt)("td",{parentName:"tr",align:null},"The tokens spanned by this excerpt. It is the range of the ",(0,o.kt)("code",null,"tokens")," array as specified by the ",(0,o.kt)("code",null,"tokenRange")," property.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/api-extractor-model.excerpt.text"},"text")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"The excerpted text, formed by concatenating the text of the ",(0,o.kt)("code",null,"spannedTokens")," strings.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/api-extractor-model.excerpt.tokenrange"},"tokenRange")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Readonly","<",(0,o.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/api-extractor-model.iexcerpttokenrange"},"IExcerptTokenRange")," ",">"),(0,o.kt)("td",{parentName:"tr",align:null},"Specifies the excerpt's range within the ",(0,o.kt)("code",null,"tokens")," array.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/api-extractor-model.excerpt.tokens"},"tokens")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"ReadonlyArray","<",(0,o.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/api-extractor-model.excerpttoken"},"ExcerptToken")," ",">"),(0,o.kt)("td",{parentName:"tr",align:null},"The complete list of tokens for the source code fragment that this excerpt is based upon. If this object is the main excerpt, then it will span all of the tokens; otherwise, it will correspond to a range within the array.")))))}d.isMDXComponent=!0}}]);