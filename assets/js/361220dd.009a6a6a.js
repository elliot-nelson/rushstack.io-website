"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[11776],{50158:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var a=r(46393);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(r),f=n,k=m["".concat(l,".").concat(f)]||m[f]||u[f]||o;return r?a.createElement(k,i(i({ref:t},s),{},{components:r})):a.createElement(k,i({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7635:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var a=r(74834),n=r(28265),o=(r(46393),r(50158)),i=["components"],c={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},l=void 0,p={unversionedId:"api/api-extractor.iextractorinvokeoptions.messagecallback",id:"api/api-extractor.iextractorinvokeoptions.messagecallback",isDocsHomePage:!1,title:"api-extractor.iextractorinvokeoptions.messagecallback",description:"Home &gt; @microsoft/api-extractor &gt; IExtractorInvokeOptions &gt; messageCallback",source:"@site/docs/api/api-extractor.iextractorinvokeoptions.messagecallback.md",sourceDirName:"api",slug:"/api/api-extractor.iextractorinvokeoptions.messagecallback",permalink:"/rushstack.io/pages/api/api-extractor.iextractorinvokeoptions.messagecallback",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},s=[{value:"IExtractorInvokeOptions.messageCallback property",id:"iextractorinvokeoptionsmessagecallback-property",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2}],u={toc:s};function m(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/rushstack.io/pages/api/index"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/rushstack.io/pages/api/api-extractor"},"@microsoft/api-extractor")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/rushstack.io/pages/api/api-extractor.iextractorinvokeoptions"},"IExtractorInvokeOptions")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/rushstack.io/pages/api/api-extractor.iextractorinvokeoptions.messagecallback"},"messageCallback")),(0,o.kt)("h2",{id:"iextractorinvokeoptionsmessagecallback-property"},"IExtractorInvokeOptions.messageCallback property"),(0,o.kt)("p",null,"An optional callback function that will be called for each ",(0,o.kt)("inlineCode",{parentName:"p"},"ExtractorMessage")," before it is displayed by API Extractor. The callback can customize the message, handle it, or discard it."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"messageCallback?: (message: ExtractorMessage) => void;\n")),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"If a ",(0,o.kt)("inlineCode",{parentName:"p"},"messageCallback")," is not provided, then by default API Extractor will print the messages to the STDERR/STDOUT console."))}m.isMDXComponent=!0}}]);