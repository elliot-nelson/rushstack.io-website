"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[45490],{49613:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=u(r),f=a,d=m["".concat(c,".").concat(f)]||m[f]||s[f]||i;return r?n.createElement(d,o(o({ref:t},l),{},{components:r})):n.createElement(d,o({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},16653:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return m}});var n=r(50098),a=r(46862),i=(r(59496),r(49613)),o=["components"],p={hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},c=void 0,u={unversionedId:"api/api-extractor-model.apiitem.parent",id:"api/api-extractor-model.apiitem.parent",isDocsHomePage:!1,title:"api-extractor-model.apiitem.parent",description:"Home &gt; @microsoft/api-extractor-model &gt; ApiItem &gt; parent",source:"@site/docs/api/api-extractor-model.apiitem.parent.md",sourceDirName:"api",slug:"/api/api-extractor-model.apiitem.parent",permalink:"/rushstack.io-website/pages/api/api-extractor-model.apiitem.parent",editUrl:null,tags:[],version:"current",frontMatter:{hide_title:!0,custom_edit_url:null,pagination_prev:null,pagination_next:null},sidebar:"apiSidebar"},l=[{value:"ApiItem.parent property",id:"apiitemparent-property",children:[],level:2}],s={toc:l};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/rushstack.io-website/pages/api/index"},"Home")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack.io-website/pages/api/api-extractor-model"},"@microsoft/api-extractor-model")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack.io-website/pages/api/api-extractor-model.apiitem"},"ApiItem")," ",">"," ",(0,i.kt)("a",{parentName:"p",href:"/rushstack.io-website/pages/api/api-extractor-model.apiitem.parent"},"parent")),(0,i.kt)("h2",{id:"apiitemparent-property"},"ApiItem.parent property"),(0,i.kt)("p",null,"If this item was added to a ApiItemContainerMixin item, then this returns the container item. If this is an Parameter that was added to a method or function, then this returns the function item. Otherwise, it returns undefined."),(0,i.kt)("b",null,"Signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"/** @virtual */\nget parent(): ApiItem | undefined;\n")))}m.isMDXComponent=!0}}]);