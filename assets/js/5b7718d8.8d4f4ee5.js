"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[10254],{49613:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var a=r(59496);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),l=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=l(r),d=n,m=f["".concat(p,".").concat(d)]||f[d]||u[d]||o;return r?a.createElement(m,i(i({ref:t},s),{},{components:r})):a.createElement(m,i({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},42558:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return s},default:function(){return f}});var a=r(50098),n=r(46862),o=(r(59496),r(49613)),i=["components"],c={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},p=void 0,l={unversionedId:"api/api-extractor.extractorconfig.tsdocmetadatafilepath",id:"api/api-extractor.extractorconfig.tsdocmetadatafilepath",isDocsHomePage:!1,title:"api-extractor.extractorconfig.tsdocmetadatafilepath",description:"Home &gt; @microsoft/api-extractor &gt; ExtractorConfig &gt; tsdocMetadataFilePath",source:"@site/docs/api/api-extractor.extractorconfig.tsdocmetadatafilepath.md",sourceDirName:"api",slug:"/api/api-extractor.extractorconfig.tsdocmetadatafilepath",permalink:"/rushstack.io-website/pages/api/api-extractor.extractorconfig.tsdocmetadatafilepath",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},s=[{value:"ExtractorConfig.tsdocMetadataFilePath property",id:"extractorconfigtsdocmetadatafilepath-property",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2}],u={toc:s};function f(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/rushstack.io-website/pages/api/index"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/rushstack.io-website/pages/api/api-extractor"},"@microsoft/api-extractor")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/rushstack.io-website/pages/api/api-extractor.extractorconfig"},"ExtractorConfig")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/rushstack.io-website/pages/api/api-extractor.extractorconfig.tsdocmetadatafilepath"},"tsdocMetadataFilePath")),(0,o.kt)("h2",{id:"extractorconfigtsdocmetadatafilepath-property"},"ExtractorConfig.tsdocMetadataFilePath property"),(0,o.kt)("p",null,"Specifies where the TSDoc metadata file should be written."),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"readonly tsdocMetadataFilePath: string;\n")),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"The path is resolved relative to the folder of the config file that contains the setting; to change this, prepend a folder token such as ",(0,o.kt)("inlineCode",{parentName:"p"},"<projectFolder>")," ."),(0,o.kt)("p",null,"The default value is ",(0,o.kt)("inlineCode",{parentName:"p"},"<lookup>")," , which causes the path to be automatically inferred from the ",(0,o.kt)("inlineCode",{parentName:"p"},"tsdocMetadata")," , ",(0,o.kt)("inlineCode",{parentName:"p"},"typings")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," fields of the project's package.json. If none of these fields are set, the lookup falls back to ",(0,o.kt)("inlineCode",{parentName:"p"},"tsdoc-metadata.json")," in the package folder."))}f.isMDXComponent=!0}}]);