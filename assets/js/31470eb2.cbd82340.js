"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[67154],{50158:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(46393);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(r),f=a,d=m["".concat(p,".").concat(f)]||m[f]||c[f]||i;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},53361:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var n=r(74834),a=r(28265),i=(r(46393),r(50158)),o=["components"],l={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},p=void 0,s={unversionedId:"api/terminal.textrewriterstate",id:"api/terminal.textrewriterstate",isDocsHomePage:!1,title:"terminal.textrewriterstate",description:"Home &gt; @rushstack/terminal &gt; TextRewriterState",source:"@site/docs/api/terminal.textrewriterstate.md",sourceDirName:"api",slug:"/api/terminal.textrewriterstate",permalink:"/rushstack.io/pages/api/terminal.textrewriterstate",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},u=[{value:"TextRewriterState type",id:"textrewriterstate-type",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2}],c={toc:u};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/rushstack.io/pages/api/index"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack.io/pages/api/terminal"},"@rushstack/terminal")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack.io/pages/api/terminal.textrewriterstate"},"TextRewriterState")),(0,i.kt)("h2",{id:"textrewriterstate-type"},"TextRewriterState type"),(0,i.kt)("p",null,"Represents the internal state of a ",(0,i.kt)("a",{parentName:"p",href:"/rushstack.io/pages/api/terminal.textrewriter"},"TextRewriter")," subclass."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare type TextRewriterState = Brand<unknown, 'TextRewriterState'>;\n")),(0,i.kt)("b",null,"References:")," [Brand](/rushstack.io/pages/api/node-core-library.brand)",(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("p",null,"For example, suppose that ",(0,i.kt)("a",{parentName:"p",href:"/rushstack.io/pages/api/terminal.normalizenewlinestextrewriter"},"NormalizeNewlinesTextRewriter")," will be used to rewrite the input ",(0,i.kt)("inlineCode",{parentName:"p"},'"line 1\\r\\nline 2\\r\\n"')," to become ",(0,i.kt)("inlineCode",{parentName:"p"},'"line 1\\nline 2\\n"')," . But suppose that the ",(0,i.kt)("inlineCode",{parentName:"p"},'"\\r\\n"')," pair is split across two chunks:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const rewriter: NormalizeNewlinesTextRewriter = new NormalizeNewlinesTextRewriter(NewlineKind.Lf);\nconst state: TextRewriterState = rewriter.initialize();\nlet output: string = rewriter.process(state, 'line 1\\r');\noutput += rewriter.process(state, '\\nline 2\\r\\n');\noutput += rewriter.close(state);\n\n// The final \"output\" value is: \"line 1\\nline 2\\n\"\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"TextRewriterState")," keeps track of this context, so that split ",(0,i.kt)("inlineCode",{parentName:"p"},'"\\r"')," and ",(0,i.kt)("inlineCode",{parentName:"p"},'"\\n"')," are interpreted as a single newline."))}m.isMDXComponent=!0}}]);