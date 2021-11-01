"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[82835],{49613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),f=a,g=m["".concat(s,".").concat(f)]||m[f]||u[f]||i;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4055:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var r=n(50098),a=n(46862),i=(n(59496),n(49613)),o=["components"],l={title:"Heft architecture"},s=void 0,c={unversionedId:"heft/architecture",id:"heft/architecture",isDocsHomePage:!1,title:"Heft architecture",description:"Terminology",source:"@site/docs/heft/architecture.md",sourceDirName:"heft",slug:"/heft/architecture",permalink:"/rushstack.io-website/pages/heft/architecture",editUrl:"https://github.com/microsoft/rushstack.io-website/docs/heft/architecture.md",tags:[],version:"current",frontMatter:{title:"Heft architecture"},sidebar:"mainSidebar",previous:{title:"Heft introduction",permalink:"/rushstack.io-website/pages/heft/overview"},next:{title:"Core plugins",permalink:"/rushstack.io-website/pages/heft/core_plugins"}},p=[{value:"Terminology",id:"terminology",children:[],level:2}],u={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"terminology"},"Terminology"),(0,i.kt)("p",null,"The following concepts are important for understanding Heft's design:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"action")," - a Heft command-line verb (as formalized by Rush Stack's ",(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@rushstack/ts-command-line"},"ts-command-line"),' system).  For example, the "test" action appears in the  ',(0,i.kt)("inlineCode",{parentName:"li"},"heft test --clean")," command.  Actions are the user interface, essentially macros tailored for typical developer activities."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"plugin")," - a TypeScript class that implements the ",(0,i.kt)("inlineCode",{parentName:"li"},"IHeftPlugin")," contract to provide arbitrary functionality.  Plugins are loaded optionally based on Heft's configuration."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"plugin package")," - an NPM package that provides one or more Heft plugins.  You can create your own NPM package that exports custom plugins for Heft to use.  See ",(0,i.kt)("a",{parentName:"li",href:"core_plugins"},"Core Plugins")," for a list of the built-in plugins."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"hook")," - Heft leverages Webpack's ",(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/tapable"},"tapable")," system for enabling plugins to register handlers for various events during the build."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"task")," - a conceptual Heft operation that produces an output, typically by invoking some tool.  For example, ",(0,i.kt)("inlineCode",{parentName:"li"},"typescript")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"eslint")," are Heft tasks.  Unlike in other systems, Heft's tasks are not a formal coding contract or component; for example the ",(0,i.kt)("inlineCode",{parentName:"li"},"TypeScriptPlugin")," object implements three separate tasks (",(0,i.kt)("inlineCode",{parentName:"li"},"typescript"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"eslint"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"tslint"),") whose code is closely integrated."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"stage"),' - a larger sequence of work encompassing multiple Heft tasks.  When invoking Heft, the command line typically selects a meaningful set of stages to run. The stage names are also used to group logging output.  Examples of Heft stages: "clean", "build", "test"'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"rig package")," - an NPM package that provides Heft configurations that can be reused across multiple projects with similar requirements  See the ",(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@rushstack/rig-package"},"@rushstack/rig-package")," documentation for details about this system."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"rig profile")," - a named configuration obtained from a rig package.  A single rig package can provide more than one configuration.  For example, it might provide separate profiles for application projects versus library projects.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Future plans:"),' Today Rush commands can only invoke Heft actions.  However, in the future we want to implement a "multiphase build" feature that will enable Rush to orchestrate more granular steps of work.  For example, once a library dependency has compiled its output, Rush could start building the application before the library finishes running its unit tests.  This feature will bring some additional jargon:'),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"command")," - A monorepo command-line action as defined globally in ",(0,i.kt)("a",{parentName:"li",href:"https://rushjs.io/pages/configs/command-line_json/"},"command-line.json"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"phase"),' - This is similar to Heft\'s "stage", except that phases will be defined globally so that Rush can model their dependency relationships.'))))}m.isMDXComponent=!0}}]);