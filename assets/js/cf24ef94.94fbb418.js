"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[14642],{49613:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var r=a(59496);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),l=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=l(a),d=n,f=m["".concat(p,".").concat(d)]||m[d]||s[d]||i;return a?r.createElement(f,o(o({ref:t},c),{},{components:a})):r.createElement(f,o({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:n,o[1]=u;for(var l=2;l<i;l++)o[l]=a[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},27971:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return m}});var r=a(50098),n=a(46862),i=(a(59496),a(49613)),o=["components"],u={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},p=void 0,l={unversionedId:"api/api-documenter",id:"api/api-documenter",isDocsHomePage:!1,title:"api-documenter",description:"Home &gt; @microsoft/api-documenter",source:"@site/docs/api/api-documenter.md",sourceDirName:"api",slug:"/api/api-documenter",permalink:"/rushstack.io-website/pages/api/api-documenter",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},c=[{value:"api-documenter package",id:"api-documenter-package",children:[],level:2},{value:"Classes",id:"classes",children:[],level:2},{value:"Interfaces",id:"interfaces",children:[],level:2}],s={toc:c};function m(e){var t=e.components,a=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/rushstack.io-website/pages/api/index"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack.io-website/pages/api/api-documenter"},"@microsoft/api-documenter")),(0,i.kt)("h2",{id:"api-documenter-package"},"api-documenter package"),(0,i.kt)("p",null,"API Documenter generates an API reference website from the .api.json files created by API Extractor. The ",(0,i.kt)("inlineCode",{parentName:"p"},"@microsoft/api-documenter")," package provides the command-line tool. It also exposes a developer API that you can use to create plugins that customize how API Documenter generates documentation."),(0,i.kt)("h2",{id:"classes"},"Classes"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Class"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack.io-website/pages/api/api-documenter.markdowndocumenteraccessor"},"MarkdownDocumenterAccessor")),(0,i.kt)("td",{parentName:"tr",align:null},"Provides access to the documenter that is generating the output.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack.io-website/pages/api/api-documenter.markdowndocumenterfeature"},"MarkdownDocumenterFeature")),(0,i.kt)("td",{parentName:"tr",align:null},"Inherit from this base class to implement an API Documenter plugin feature that customizes the generation of markdown output.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack.io-website/pages/api/api-documenter.markdowndocumenterfeaturecontext"},"MarkdownDocumenterFeatureContext")),(0,i.kt)("td",{parentName:"tr",align:null},"Context object for ",(0,i.kt)("a",{parentName:"td",href:"/rushstack.io-website/pages/api/api-documenter.markdowndocumenterfeature"},"MarkdownDocumenterFeature")," . Exposes various services that can be used by a plugin.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack.io-website/pages/api/api-documenter.pluginfeature"},"PluginFeature")),(0,i.kt)("td",{parentName:"tr",align:null},"The abstract base class for all API Documenter plugin features.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack.io-website/pages/api/api-documenter.pluginfeaturecontext"},"PluginFeatureContext")),(0,i.kt)("td",{parentName:"tr",align:null},"Context object for ",(0,i.kt)("a",{parentName:"td",href:"/rushstack.io-website/pages/api/api-documenter.pluginfeature"},"PluginFeature")," . Exposes various services that can be used by a plugin.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack.io-website/pages/api/api-documenter.pluginfeatureinitialization"},"PluginFeatureInitialization")),(0,i.kt)("td",{parentName:"tr",align:null},"This is an internal part of the plugin infrastructure.")))),(0,i.kt)("h2",{id:"interfaces"},"Interfaces"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Interface"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack.io-website/pages/api/api-documenter.iapidocumenterpluginmanifest"},"IApiDocumenterPluginManifest")),(0,i.kt)("td",{parentName:"tr",align:null},"The manifest for an API Documenter plugin.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack.io-website/pages/api/api-documenter.ifeaturedefinition"},"IFeatureDefinition")),(0,i.kt)("td",{parentName:"tr",align:null},'Defines a "feature" that is provided by an API Documenter plugin. A feature is a user-defined module that customizes the behavior of API Documenter.')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack.io-website/pages/api/api-documenter.imarkdowndocumenterfeatureonbeforewritepageargs"},"IMarkdownDocumenterFeatureOnBeforeWritePageArgs")),(0,i.kt)("td",{parentName:"tr",align:null},"Event arguments for MarkdownDocumenterFeature.onBeforeWritePage()")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack.io-website/pages/api/api-documenter.imarkdowndocumenterfeatureonfinishedargs"},"IMarkdownDocumenterFeatureOnFinishedArgs")),(0,i.kt)("td",{parentName:"tr",align:null},"Event arguments for MarkdownDocumenterFeature.onFinished()")))))}m.isMDXComponent=!0}}]);