"use strict";(self.webpackChunkrushstack_io=self.webpackChunkrushstack_io||[]).push([[11093],{50158:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var a=r(46393);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),l=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),f=l(r),m=n,g=f["".concat(u,".").concat(m)]||f[m]||s[m]||i;return r?a.createElement(g,c(c({ref:t},p),{},{components:r})):a.createElement(g,c({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=f;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var l=2;l<i;l++)c[l]=r[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},62345:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return p},default:function(){return f}});var a=r(74834),n=r(28265),i=(r(46393),r(50158)),c=["components"],o={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},u=void 0,l={unversionedId:"api/debug-certificate-manager.certificatemanager.ensurecertificateasync",id:"api/debug-certificate-manager.certificatemanager.ensurecertificateasync",isDocsHomePage:!1,title:"debug-certificate-manager.certificatemanager.ensurecertificateasync",description:"Home &gt; @rushstack/debug-certificate-manager &gt; CertificateManager &gt; ensureCertificateAsync",source:"@site/docs/api/debug-certificate-manager.certificatemanager.ensurecertificateasync.md",sourceDirName:"api",slug:"/api/debug-certificate-manager.certificatemanager.ensurecertificateasync",permalink:"/rushstack.io/pages/api/debug-certificate-manager.certificatemanager.ensurecertificateasync",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},p=[{value:"CertificateManager.ensureCertificateAsync() method",id:"certificatemanagerensurecertificateasync-method",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2}],s={toc:p};function f(e){var t=e.components,r=(0,n.Z)(e,c);return(0,i.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/rushstack.io/pages/api/index"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack.io/pages/api/debug-certificate-manager"},"@rushstack/debug-certificate-manager")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack.io/pages/api/debug-certificate-manager.certificatemanager"},"CertificateManager")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack.io/pages/api/debug-certificate-manager.certificatemanager.ensurecertificateasync"},"ensureCertificateAsync")),(0,i.kt)("h2",{id:"certificatemanagerensurecertificateasync-method"},"CertificateManager.ensureCertificateAsync() method"),(0,i.kt)("p",null,"Get a dev certificate from the store, or optionally, generate a new one and trust it if one doesn't exist in the store."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"ensureCertificateAsync(canGenerateNewCertificate: boolean, terminal: ITerminal): Promise<ICertificate>;\n")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"canGenerateNewCertificate"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"terminal"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/rushstack.io/pages/api/node-core-library.iterminal"},"ITerminal")),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("b",null,"Returns:"),(0,i.kt)("p",null,"Promise","<",(0,i.kt)("a",{parentName:"p",href:"/rushstack.io/pages/api/debug-certificate-manager.icertificate"},"ICertificate")," ",">"))}f.isMDXComponent=!0}}]);