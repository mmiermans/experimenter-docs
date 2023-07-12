"use strict";(self.webpackChunkexperimenter_docs=self.webpackChunkexperimenter_docs||[]).push([[3967],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),g=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=g(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=g(n),u=i,c=d["".concat(l,".").concat(u)]||d[u]||m[u]||a;return n?r.createElement(c,o(o({ref:t},p),{},{components:n})):r.createElement(c,o({ref:t},p))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var g=2;g<a;g++)o[g]=n[g];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8406:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>g});var r=n(7462),i=(n(7294),n(3905));const a={id:"for-engineers",title:"Getting started with implementation",slug:"for-engineers"},o=void 0,s={unversionedId:"getting-started/engineers/for-engineers",id:"getting-started/engineers/for-engineers",title:"Getting started with implementation",description:"Engineers are typically tasked with implementing an experiment on a new surface with an experiment that has been designed by their product manager in partnership with a data scientist.",source:"@site/docs/getting-started/engineers/00-for-engineers.md",sourceDirName:"getting-started/engineers",slug:"/getting-started/engineers/for-engineers",permalink:"/getting-started/engineers/for-engineers",draft:!1,editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/getting-started/engineers/00-for-engineers.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"for-engineers",title:"Getting started with implementation",slug:"for-engineers"},sidebar:"sidebar",previous:{title:"Validating Experiments",permalink:"/validating-experiments"},next:{title:"Getting Started for Android Engineers",permalink:"/getting-started/engineers/getting-started-for-android-engineers"}},l={},g=[{value:"Integrating with a new app",id:"integrating-with-a-new-app",level:2},{value:"To get started with implementation",id:"to-get-started-with-implementation",level:2}],p={toc:g},d="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Engineers are typically tasked with implementing an experiment on a new surface with an experiment that has been designed by their product manager in partnership with a data scientist."),(0,i.kt)("h2",{id:"integrating-with-a-new-app"},"Integrating with a new app"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/getting-started/engineers/getting-started-for-android-engineers"},"Getting started with Nimbus, for Android Engineers")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/getting-started/engineers/getting-started-for-ios-engineers"},"Getting started with Nimbus for iOS Engineers")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/getting-started/engineers/getting-started-mobile-required-ui"},"Mobile UI needed for Nimbus"))),(0,i.kt)("h2",{id:"to-get-started-with-implementation"},"To get started with implementation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Review the experiment design document."),(0,i.kt)("li",{parentName:"ul"},"Determine if you need to implement any additional telemetry collection"),(0,i.kt)("li",{parentName:"ul"},"Check if you need to implement a custom audience"),(0,i.kt)("li",{parentName:"ul"},"Confirm the name of the feature and follow the guide to ",(0,i.kt)("a",{parentName:"li",href:"https://experimenter.info/feature-definition#to-define-your-feature-in-the-feature-manifest-file"},"adding a new feature to the manifest"))))}m.isMDXComponent=!0}}]);