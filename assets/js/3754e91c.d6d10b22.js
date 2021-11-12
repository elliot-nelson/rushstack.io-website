"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[46345],{50158:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return d}});var r=a(46393);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var o=r.createContext({}),p=function(t){var e=r.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},m=function(t){var e=p(t.components);return r.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,o=t.parentName,m=s(t,["components","mdxType","originalType","parentName"]),k=p(a),d=n,c=k["".concat(o,".").concat(d)]||k[d]||u[d]||i;return a?r.createElement(c,l(l({ref:e},m),{},{components:a})):r.createElement(c,l({ref:e},m))}));function d(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,l=new Array(i);l[0]=k;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s.mdxType="string"==typeof t?t:n,l[1]=s;for(var p=2;p<i;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},4934:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return m},default:function(){return k}});var r=a(74834),n=a(28265),i=(a(46393),a(50158)),l=["components"],s={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},o=void 0,p={unversionedId:"api/terminal",id:"api/terminal",isDocsHomePage:!1,title:"terminal",description:"Home &gt; @rushstack/terminal",source:"@site/docs/api/terminal.md",sourceDirName:"api",slug:"/api/terminal",permalink:"/rushstack.io/pages/api/terminal",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},m=[{value:"terminal package",id:"terminal-package",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2},{value:"Classes",id:"classes",children:[],level:2},{value:"Enumerations",id:"enumerations",children:[],level:2},{value:"Interfaces",id:"interfaces",children:[],level:2},{value:"Variables",id:"variables",children:[],level:2},{value:"Type Aliases",id:"type-aliases",children:[],level:2}],u={toc:m};function k(t){var e=t.components,a=(0,n.Z)(t,l);return(0,i.kt)("wrapper",(0,r.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/rushstack.io/pages/api/index"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack.io/pages/api/terminal"},"@rushstack/terminal")),(0,i.kt)("h2",{id:"terminal-package"},"terminal package"),(0,i.kt)("p",null,"This library implements a system for processing human readable text that will be output by console applications."),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("p",null,"See the ",(0,i.kt)("a",{parentName:"p",href:"/rushstack.io/pages/api/terminal.terminalwritable"},"TerminalWritable")," documentation for an overview of the major concepts."),(0,i.kt)("h2",{id:"classes"},"Classes"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Class"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/terminal.callbackwritable"},"CallbackWritable")),(0,i.kt)("td",{parentName:"tr",align:null},"This class enables very basic ",(0,i.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/terminal.terminalwritable.onwritechunk"},"TerminalWritable.onWriteChunk()")," operations to be implemented as a callback function, avoiding the need to define a subclass of ",(0,i.kt)("code",null,"TerminalWritable"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/terminal.discardstdouttransform"},"DiscardStdoutTransform")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("b",null,(0,i.kt)("i",null,"(BETA)"))," ",(0,i.kt)("code",null,"DiscardStdoutTransform")," discards ",(0,i.kt)("code",null,"stdout")," chunks while fixing up malformed ",(0,i.kt)("code",null,"stderr")," lines.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/terminal.mockwritable"},"MockWritable")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("b",null,(0,i.kt)("i",null,"(BETA)"))," A ",(0,i.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/terminal.terminalwritable"},"TerminalWritable")," subclass for use by unit tests.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/terminal.normalizenewlinestextrewriter"},"NormalizeNewlinesTextRewriter")),(0,i.kt)("td",{parentName:"tr",align:null},"For use with ",(0,i.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/terminal.textrewritertransform"},"TextRewriterTransform")," , this rewriter converts all newlines to a standard format.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/terminal.printutilities"},"PrintUtilities")),(0,i.kt)("td",{parentName:"tr",align:null},"A collection of utilities for printing messages to the console.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/terminal.removecolorstextrewriter"},"RemoveColorsTextRewriter")),(0,i.kt)("td",{parentName:"tr",align:null},"For use with ",(0,i.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/terminal.textrewritertransform"},"TextRewriterTransform")," , this rewriter removes ANSI escape codes including colored text.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/terminal.splittertransform"},"SplitterTransform")),(0,i.kt)("td",{parentName:"tr",align:null},"Use this instead of ",(0,i.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/terminal.terminaltransform"},"TerminalTransform")," if you need to output ",(0,i.kt)("code",null,"ITerminalChunk")," data to more than one destination.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/terminal.stderrlinetransform"},"StderrLineTransform")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("b",null,(0,i.kt)("i",null,"(BETA)"))," ",(0,i.kt)("code",null,"StderrLineTransform")," normalizes lines that mix characters from ",(0,i.kt)("code",null,"stdout")," and ",(0,i.kt)("code",null,"stderr"),", so that each output line is routed entirely to ",(0,i.kt)("code",null,"stdout")," or ",(0,i.kt)("code",null,"stderr"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/terminal.stdiosummarizer"},"StdioSummarizer")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("b",null,(0,i.kt)("i",null,"(BETA)"))," Summarizes the results of a failed build task by returning a subset of ",(0,i.kt)("code",null,"stderr")," output not to exceed a specified maximum number of lines.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/terminal.stdiowritable"},"StdioWritable")),(0,i.kt)("td",{parentName:"tr",align:null},"A ",(0,i.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/terminal.terminalwritable"},"TerminalWritable")," subclass that writes its output directly to the process ",(0,i.kt)("code",null,"stdout")," and ",(0,i.kt)("code",null,"stderr")," streams.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/terminal.terminaltransform"},"TerminalTransform")),(0,i.kt)("td",{parentName:"tr",align:null},"The abstract base class for ",(0,i.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/terminal.terminalwritable"},"TerminalWritable")," objects that receive an input, transform it somehow, and then write the output to another ",(0,i.kt)("code",null,"TerminalWritable"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/terminal.terminalwritable"},"TerminalWritable")),(0,i.kt)("td",{parentName:"tr",align:null},"The abstract base class for objects that can present, route, or process text output for a console application. This output is typically prepared using the ",(0,i.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/node-core-library.terminal"},"Terminal")," API.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/terminal.textrewriter"},"TextRewriter")),(0,i.kt)("td",{parentName:"tr",align:null},"The abstract base class for operations that can be applied by ",(0,i.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/terminal.textrewritertransform"},"TextRewriterTransform")," .")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/terminal.textrewritertransform"},"TextRewriterTransform")),(0,i.kt)("td",{parentName:"tr",align:null},"A ",(0,i.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/terminal.terminaltransform"},"TerminalTransform")," subclass that performs one or more ",(0,i.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/terminal.textrewriter"},"TextRewriter")," operations. The most common operations are ",(0,i.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/terminal.normalizenewlinestextrewriter"},"NormalizeNewlinesTextRewriter")," and ",(0,i.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/terminal.removecolorstextrewriter"},"RemoveColorsTextRewriter")," .")))),(0,i.kt)("h2",{id:"enumerations"},"Enumerations"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Enumeration"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/terminal.terminalchunkkind"},"TerminalChunkKind")),(0,i.kt)("td",{parentName:"tr",align:null},"Specifies the kind of data represented by a ",(0,i.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/terminal.iterminalchunk"},"ITerminalChunk")," object.")))),(0,i.kt)("h2",{id:"interfaces"},"Interfaces"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Interface"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/terminal.icallbackwritableoptions"},"ICallbackWritableOptions")),(0,i.kt)("td",{parentName:"tr",align:null},"Constructor options for ",(0,i.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/terminal.callbackwritable"},"CallbackWritable")," .")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/terminal.idiscardstdouttransformoptions"},"IDiscardStdoutTransformOptions")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("b",null,(0,i.kt)("i",null,"(BETA)"))," Constructor options for ",(0,i.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/terminal.discardstdouttransform"},"DiscardStdoutTransform"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/terminal.inormalizenewlinestextrewriteroptions"},"INormalizeNewlinesTextRewriterOptions")),(0,i.kt)("td",{parentName:"tr",align:null},"Constructor options for ",(0,i.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/terminal.normalizenewlinestextrewriter"},"NormalizeNewlinesTextRewriter"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/terminal.isplittertransformoptions"},"ISplitterTransformOptions")),(0,i.kt)("td",{parentName:"tr",align:null},"Constructor options for ",(0,i.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/terminal.splittertransform"},"SplitterTransform")," .")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/terminal.istdiolinetransformoptions"},"IStdioLineTransformOptions")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("b",null,(0,i.kt)("i",null,"(BETA)"))," Constructor options for ",(0,i.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/terminal.stderrlinetransform"},"StderrLineTransform"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/terminal.istdiosummarizeroptions"},"IStdioSummarizerOptions")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("b",null,(0,i.kt)("i",null,"(BETA)"))," Constructor options for ",(0,i.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/terminal.stdiosummarizer"},"StdioSummarizer")," .")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/terminal.iterminalchunk"},"ITerminalChunk")),(0,i.kt)("td",{parentName:"tr",align:null},"Represents a chunk of output that will ultimately be written to a ",(0,i.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/terminal.terminalwritable"},"TerminalWritable")," .")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/terminal.iterminaltransformoptions"},"ITerminalTransformOptions")),(0,i.kt)("td",{parentName:"tr",align:null},"Constructor options for ",(0,i.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/terminal.terminaltransform"},"TerminalTransform")," .")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/terminal.iterminalwritableoptions"},"ITerminalWritableOptions")),(0,i.kt)("td",{parentName:"tr",align:null},"Constructor options for ",(0,i.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/terminal.terminalwritable"},"TerminalWritable"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/terminal.itextrewritertransformoptions"},"ITextRewriterTransformOptions")),(0,i.kt)("td",{parentName:"tr",align:null},"Constructor options for ",(0,i.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/terminal.textrewritertransform"},"TextRewriterTransform")," .")))),(0,i.kt)("h2",{id:"variables"},"Variables"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Variable"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/terminal.default_console_width"},"DEFAULT","_","CONSOLE","_","WIDTH")),(0,i.kt)("td",{parentName:"tr",align:null},"A sensible fallback column width for consoles.")))),(0,i.kt)("h2",{id:"type-aliases"},"Type Aliases"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Type Alias"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/terminal.textrewriterstate"},"TextRewriterState")),(0,i.kt)("td",{parentName:"tr",align:null},"Represents the internal state of a ",(0,i.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/terminal.textrewriter"},"TextRewriter")," subclass.")))))}k.isMDXComponent=!0}}]);