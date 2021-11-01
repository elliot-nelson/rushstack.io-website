"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[91493],{49613:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var r=a(59496);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(a),m=n,b=u["".concat(c,".").concat(m)]||u[m]||d[m]||l;return a?r.createElement(b,i(i({ref:t},p),{},{components:a})):r.createElement(b,i({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},91593:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var r=a(50098),n=a(46862),l=(a(59496),a(49613)),i=["components"],o={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},c=void 0,s={unversionedId:"api/node-core-library.jsonfile.loadandvalidatewithcallback",id:"api/node-core-library.jsonfile.loadandvalidatewithcallback",isDocsHomePage:!1,title:"node-core-library.jsonfile.loadandvalidatewithcallback",description:"Home &gt; @rushstack/node-core-library &gt; JsonFile &gt; loadAndValidateWithCallback",source:"@site/docs/api/node-core-library.jsonfile.loadandvalidatewithcallback.md",sourceDirName:"api",slug:"/api/node-core-library.jsonfile.loadandvalidatewithcallback",permalink:"/rushstack.io-website/pages/api/node-core-library.jsonfile.loadandvalidatewithcallback",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},p=[{value:"JsonFile.loadAndValidateWithCallback() method",id:"jsonfileloadandvalidatewithcallback-method",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2}],d={toc:p};function u(e){var t=e.components,a=(0,n.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/rushstack.io-website/pages/api/index"},"Home")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/rushstack.io-website/pages/api/node-core-library"},"@rushstack/node-core-library")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/rushstack.io-website/pages/api/node-core-library.jsonfile"},"JsonFile")," ",">"," ",(0,l.kt)("a",{parentName:"p",href:"/rushstack.io-website/pages/api/node-core-library.jsonfile.loadandvalidatewithcallback"},"loadAndValidateWithCallback")),(0,l.kt)("h2",{id:"jsonfileloadandvalidatewithcallback-method"},"JsonFile.loadAndValidateWithCallback() method"),(0,l.kt)("p",null,"Loads a JSON file and validate its schema, reporting errors using a callback"),(0,l.kt)("b",null,"Signature:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"static loadAndValidateWithCallback(jsonFilename: string, jsonSchema: JsonSchema, errorCallback: (errorInfo: IJsonSchemaErrorInfo) => void): JsonObject;\n")),(0,l.kt)("h2",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"jsonFilename"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"jsonSchema"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/rushstack.io-website/pages/api/node-core-library.jsonschema"},"JsonSchema")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"errorCallback"),(0,l.kt)("td",{parentName:"tr",align:null},"(errorInfo: ",(0,l.kt)("a",{parentName:"td",href:"/rushstack.io-website/pages/api/node-core-library.ijsonschemaerrorinfo"},"IJsonSchemaErrorInfo")," ) =",">"," void"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("b",null,"Returns:"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/rushstack.io-website/pages/api/node-core-library.jsonobject"},"JsonObject")),(0,l.kt)("h2",{id:"remarks"},"Remarks"),(0,l.kt)("p",null,"See JsonSchema.validateObjectWithCallback() for more info."))}u.isMDXComponent=!0}}]);