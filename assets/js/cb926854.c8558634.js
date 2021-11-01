"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[86231],{49613:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(r),m=o,h=u["".concat(c,".").concat(m)]||u[m]||f[m]||a;return r?n.createElement(h,s(s({ref:t},l),{},{components:r})):n.createElement(h,s({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2599:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return u}});var n=r(50098),o=r(46862),a=(r(59496),r(49613)),s=["components"],i={title:"api-extractor-task.json"},c=void 0,p={unversionedId:"heft_configs/api-extractor-task_json",id:"heft_configs/api-extractor-task_json",isDocsHomePage:!1,title:"api-extractor-task.json",description:"| File path: | &lt;project folder&gt;/config/api-extractor-task.json |",source:"@site/docs/heft_configs/api-extractor-task_json.md",sourceDirName:"heft_configs",slug:"/heft_configs/api-extractor-task_json",permalink:"/rushstack.io-website/pages/heft_configs/api-extractor-task_json",editUrl:"https://github.com/microsoft/rushstack.io-website/docs/heft_configs/api-extractor-task_json.md",tags:[],version:"current",frontMatter:{title:"api-extractor-task.json"},sidebar:"mainSidebar",previous:{title:'"webpack" task',permalink:"/rushstack.io-website/pages/heft_tasks/webpack"},next:{title:"heft.json",permalink:"/rushstack.io-website/pages/heft_configs/heft_json"}},l=[{value:"Template",id:"template",children:[],level:2},{value:"See also",id:"see-also",children:[],level:2}],f={toc:l};function u(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"| ",(0,a.kt)("strong",{parentName:"p"},"File path:")," | ",(0,a.kt)("strong",{parentName:"p"},"<","project folder",">","/config/api-extractor-task.json")," |\n| ",(0,a.kt)("a",{parentName:"p",href:"/heft/rig_packages"},(0,a.kt)("strong",{parentName:"a"},"Riggable?"))," | Yes |\n| ",(0,a.kt)("strong",{parentName:"p"},"Associated plugins:")," | ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rushstack/blob/master/apps/heft/src/plugins/ApiExtractorPlugin/ApiExtractorPlugin.ts"},"ApiExtractorPlugin")," |"),(0,a.kt)("h2",{id:"template"},"Template"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'/**\n * Configures the API Extractor task for the Heft build system.\n *\n * This optional additional file customizes how the Heft task is invoked. The main analysis is\n * controlled by API Extractor\'s own "api-extractor.json" config file.\n */\n{\n  "$schema": "https://developer.microsoft.com/json-schemas/heft/api-extractor-task.schema.json"\n\n  /**\n   * Optionally specifies another JSON config file that this file extends from. This provides a way for standard\n   * settings to be shared across multiple projects.\n   */\n  // "extends": "base-project/config/api-extractor-task.json",\n\n  /**\n   * If set to true, use the project\'s TypeScript compiler version for API Extractor\'s\n   * analysis. API Extractor\'s included TypeScript compiler can generally correctly\n   * analyze typings generated by older compilers, and referencing the project\'s compiler\n   * can cause issues. If issues are encountered with API Extractor\'s included compiler,\n   * set this option to true.\n   *\n   * This corresponds to API Extractor\'s "--typescript-compiler-folder" CLI option and\n   * "IExtractorInvokeOptions.typescriptCompilerFolder" API option. This option defaults to false.\n   */\n  // "useProjectTypescriptVersion": true\n}\n')),(0,a.kt)("h2",{id:"see-also"},"See also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/heft_tasks/api-extractor"},"api-extractor")," task"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://api-extractor.com/"},"API Exctractor")," website")))}u.isMDXComponent=!0}}]);