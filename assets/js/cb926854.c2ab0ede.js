"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[86231],{50158:function(t,e,r){r.d(e,{Zo:function(){return l},kt:function(){return m}});var n=r(46393);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var c=n.createContext({}),p=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},l=function(t){var e=p(t.components);return n.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),f=p(r),m=a,d=f["".concat(c,".").concat(m)]||f[m]||u[m]||o;return r?n.createElement(d,i(i({ref:e},l),{},{components:r})):n.createElement(d,i({ref:e},l))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},95122:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return f}});var n=r(74834),a=r(28265),o=(r(46393),r(50158)),i=["components"],s={title:"api-extractor-task.json"},c=void 0,p={unversionedId:"heft_configs/api-extractor-task_json",id:"heft_configs/api-extractor-task_json",isDocsHomePage:!1,title:"api-extractor-task.json",description:"| | |",source:"@site/docs/heft_configs/api-extractor-task_json.md",sourceDirName:"heft_configs",slug:"/heft_configs/api-extractor-task_json",permalink:"/rushstack.io/pages/heft_configs/api-extractor-task_json",editUrl:"https://github.com/microsoft/rushstack.io-website/docs/heft_configs/api-extractor-task_json.md",tags:[],version:"current",frontMatter:{title:"api-extractor-task.json"},sidebar:"docsSidebar",previous:{title:'"webpack" task',permalink:"/rushstack.io/pages/heft_tasks/webpack"},next:{title:"heft.json",permalink:"/rushstack.io/pages/heft_configs/heft_json"}},l=[{value:"Template",id:"template",children:[],level:2},{value:"See also",id:"see-also",children:[],level:2}],u={toc:l};function f(t){var e=t.components,r=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("table",null,(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"File path:")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"<","project folder",">","/config/api-extractor-task.json"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"../heft/rig_packages"},(0,o.kt)("strong",{parentName:"a"},"Riggable?"))),(0,o.kt)("td",{parentName:"tr",align:null},"Yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Associated plugins:")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/microsoft/rushstack/blob/master/apps/heft/src/plugins/ApiExtractorPlugin/ApiExtractorPlugin.ts"},"ApiExtractorPlugin"))))),(0,o.kt)("h2",{id:"template"},"Template"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'/**\n * Configures the API Extractor task for the Heft build system.\n *\n * This optional additional file customizes how the Heft task is invoked. The main analysis is\n * controlled by API Extractor\'s own "api-extractor.json" config file.\n */\n{\n  "$schema": "https://developer.microsoft.com/json-schemas/heft/api-extractor-task.schema.json"\n\n  /**\n   * Optionally specifies another JSON config file that this file extends from. This provides a way for standard\n   * settings to be shared across multiple projects.\n   */\n  // "extends": "base-project/config/api-extractor-task.json",\n\n  /**\n   * If set to true, use the project\'s TypeScript compiler version for API Extractor\'s\n   * analysis. API Extractor\'s included TypeScript compiler can generally correctly\n   * analyze typings generated by older compilers, and referencing the project\'s compiler\n   * can cause issues. If issues are encountered with API Extractor\'s included compiler,\n   * set this option to true.\n   *\n   * This corresponds to API Extractor\'s "--typescript-compiler-folder" CLI option and\n   * "IExtractorInvokeOptions.typescriptCompilerFolder" API option. This option defaults to false.\n   */\n  // "useProjectTypescriptVersion": true\n}\n')),(0,o.kt)("h2",{id:"see-also"},"See also"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../heft_tasks/api-extractor"},"api-extractor")," task"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://api-extractor.com/"},"API Extractor")," website")))}f.isMDXComponent=!0}}]);