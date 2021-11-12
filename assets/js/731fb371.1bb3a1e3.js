"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[60124],{50158:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var o=r(46393);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),l=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=l(r),d=n,k=f["".concat(c,".").concat(d)]||f[d]||s[d]||a;return r?o.createElement(k,p(p({ref:t},u),{},{components:r})):o.createElement(k,p({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,p=new Array(a);p[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var l=2;l<a;l++)p[l]=r[l];return o.createElement.apply(null,p)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},53543:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return f}});var o=r(74834),n=r(28265),a=(r(46393),r(50158)),p=["components"],i={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},c=void 0,l={unversionedId:"api/api-extractor.iextractorconfigprepareoptions.projectfolderlookuptoken",id:"api/api-extractor.iextractorconfigprepareoptions.projectfolderlookuptoken",isDocsHomePage:!1,title:"api-extractor.iextractorconfigprepareoptions.projectfolderlookuptoken",description:"Home &gt; @microsoft/api-extractor &gt; IExtractorConfigPrepareOptions &gt; projectFolderLookupToken",source:"@site/docs/api/api-extractor.iextractorconfigprepareoptions.projectfolderlookuptoken.md",sourceDirName:"api",slug:"/api/api-extractor.iextractorconfigprepareoptions.projectfolderlookuptoken",permalink:"/rushstack.io/pages/api/api-extractor.iextractorconfigprepareoptions.projectfolderlookuptoken",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},u=[{value:"IExtractorConfigPrepareOptions.projectFolderLookupToken property",id:"iextractorconfigprepareoptionsprojectfolderlookuptoken-property",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2}],s={toc:u};function f(e){var t=e.components,r=(0,n.Z)(e,p);return(0,a.kt)("wrapper",(0,o.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/rushstack.io/pages/api/index"},"Home")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/rushstack.io/pages/api/api-extractor"},"@microsoft/api-extractor")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/rushstack.io/pages/api/api-extractor.iextractorconfigprepareoptions"},"IExtractorConfigPrepareOptions")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/rushstack.io/pages/api/api-extractor.iextractorconfigprepareoptions.projectfolderlookuptoken"},"projectFolderLookupToken")),(0,a.kt)("h2",{id:"iextractorconfigprepareoptionsprojectfolderlookuptoken-property"},"IExtractorConfigPrepareOptions.projectFolderLookupToken property"),(0,a.kt)("p",null,"The default value for the ",(0,a.kt)("inlineCode",{parentName:"p"},"projectFolder")," setting is the ",(0,a.kt)("inlineCode",{parentName:"p"},"<lookup>")," token, which uses a heuristic to guess an appropriate project folder. Use ",(0,a.kt)("inlineCode",{parentName:"p"},"projectFolderLookupValue")," to manually specify the ",(0,a.kt)("inlineCode",{parentName:"p"},"<lookup>")," token value instead."),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"projectFolderLookupToken?: string;\n")),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"If the ",(0,a.kt)("inlineCode",{parentName:"p"},"projectFolder")," setting is explicitly specified in api-extractor.json file, it should take precedence over a value specified via the API. Thus the ",(0,a.kt)("inlineCode",{parentName:"p"},"projectFolderLookupToken")," option provides a way to override the default value for ",(0,a.kt)("inlineCode",{parentName:"p"},"projectFolder")," setting while still honoring a manually specified value."))}f.isMDXComponent=!0}}]);