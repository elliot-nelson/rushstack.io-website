"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3787],{49613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},64957:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var n=r(50098),a=r(46862),i=(r(59496),r(49613)),l=["components"],o={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},s=void 0,p={unversionedId:"api/terminal.textrewriter",id:"api/terminal.textrewriter",isDocsHomePage:!1,title:"terminal.textrewriter",description:"Home &gt; @rushstack/terminal &gt; TextRewriter",source:"@site/docs/api/terminal.textrewriter.md",sourceDirName:"api",slug:"/api/terminal.textrewriter",permalink:"/rushstack.io-website/pages/api/terminal.textrewriter",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},u=[{value:"TextRewriter class",id:"textrewriter-class",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2},{value:"Methods",id:"methods",children:[],level:2}],c={toc:u};function m(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/rushstack.io-website/pages/api/index"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack.io-website/pages/api/terminal"},"@rushstack/terminal")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack.io-website/pages/api/terminal.textrewriter"},"TextRewriter")),(0,i.kt)("h2",{id:"textrewriter-class"},"TextRewriter class"),(0,i.kt)("p",null,"The abstract base class for operations that can be applied by ",(0,i.kt)("a",{parentName:"p",href:"/rushstack.io-website/pages/api/terminal.textrewritertransform"},"TextRewriterTransform")," ."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare abstract class TextRewriter \n")),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/rushstack.io-website/pages/api/terminal.textrewritertransform"},"TextRewriterTransform")," applies one or more character rewriting operations to its chunk stream. Since these operations are applied separately to ",(0,i.kt)("inlineCode",{parentName:"p"},"stderr")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"stdout")," , the state is stored in an opaque ",(0,i.kt)("inlineCode",{parentName:"p"},"TextRewriterState")," object."),(0,i.kt)("p",null,"Conceptually, a ",(0,i.kt)("inlineCode",{parentName:"p"},"TextRewriter")," subclass is very similar to a regular expression, with the difference that ",(0,i.kt)("inlineCode",{parentName:"p"},"RegExp")," operates on a text string, whereas ",(0,i.kt)("inlineCode",{parentName:"p"},"TextRewriter")," operates on a stream of characters."),(0,i.kt)("p",null,"The two most common subclasses are ",(0,i.kt)("a",{parentName:"p",href:"/rushstack.io-website/pages/api/terminal.normalizenewlinestextrewriter"},"NormalizeNewlinesTextRewriter")," and ",(0,i.kt)("a",{parentName:"p",href:"/rushstack.io-website/pages/api/terminal.removecolorstextrewriter"},"RemoveColorsTextRewriter")," ."),(0,i.kt)("p",null,"A rewriting operation starts with ",(0,i.kt)("inlineCode",{parentName:"p"},"initialize()")," , followed by any number of ",(0,i.kt)("inlineCode",{parentName:"p"},"process()")," calls, and then finishes with ",(0,i.kt)("inlineCode",{parentName:"p"},"close()")," . For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const rewriter: NormalizeNewlinesTextRewriter = new NormalizeNewlinesTextRewriter(NewlineKind.Lf);\nconst state: TextRewriterState = rewriter.initialize();\nlet output: string = rewriter.process(state, 'line 1\\r');\noutput += rewriter.process(state, '\\nline 2\\r\\n');\noutput += rewriter.close(state);\n\n// The final \"output\" value is: \"line 1\\nline 2\\n\"\n")),(0,i.kt)("p",null,"After ",(0,i.kt)("inlineCode",{parentName:"p"},"close()")," has been called, the ",(0,i.kt)("inlineCode",{parentName:"p"},"TextRewriterState")," state should not be reused."),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Method"),(0,i.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack.io-website/pages/api/terminal.textrewriter.close"},"close(state)")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Close the ",(0,i.kt)("code",null,"TextRewriterState")," object and return any buffered output.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack.io-website/pages/api/terminal.textrewriter.initialize"},"initialize()")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Create a new ",(0,i.kt)("code",null,"TextRewriterState")," object that can be used to process a stream of characters.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack.io-website/pages/api/terminal.textrewriter.process"},"process(state, input)")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Rewrite the next sequence of characters from the input stream, returning the modified output.")))))}m.isMDXComponent=!0}}]);