"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[16793],{49613:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(59496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var m=r.createContext({}),l=function(e){var n=r.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(m.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,m=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(t),d=a,f=u["".concat(m,".").concat(d)]||u[d]||p[d]||i;return t?r.createElement(f,o(o({ref:n},s),{},{components:t})):r.createElement(f,o({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var c={};for(var m in n)hasOwnProperty.call(n,m)&&(c[m]=n[m]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},78106:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return m},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var r=t(50098),a=t(46862),i=(t(59496),t(49613)),o=["components"],c={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},m=void 0,l={unversionedId:"api/ts-command-line.commandlineaction.ondefineparameters",id:"api/ts-command-line.commandlineaction.ondefineparameters",isDocsHomePage:!1,title:"ts-command-line.commandlineaction.ondefineparameters",description:"Home &gt; @rushstack/ts-command-line &gt; CommandLineAction &gt; onDefineParameters",source:"@site/docs/api/ts-command-line.commandlineaction.ondefineparameters.md",sourceDirName:"api",slug:"/api/ts-command-line.commandlineaction.ondefineparameters",permalink:"/rushstack.io-website/pages/api/ts-command-line.commandlineaction.ondefineparameters",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},s=[{value:"CommandLineAction.onDefineParameters() method",id:"commandlineactionondefineparameters-method",children:[],level:2}],p={toc:s};function u(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/rushstack.io-website/pages/api/index"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack.io-website/pages/api/ts-command-line"},"@rushstack/ts-command-line")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack.io-website/pages/api/ts-command-line.commandlineaction"},"CommandLineAction")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack.io-website/pages/api/ts-command-line.commandlineaction.ondefineparameters"},"onDefineParameters")),(0,i.kt)("h2",{id:"commandlineactionondefineparameters-method"},"CommandLineAction.onDefineParameters() method"),(0,i.kt)("p",null,"The child class should implement this hook to define its command-line parameters, e.g. by calling defineFlagParameter()."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"protected abstract onDefineParameters(): void;\n")),(0,i.kt)("b",null,"Returns:"),(0,i.kt)("p",null,"void"))}u.isMDXComponent=!0}}]);