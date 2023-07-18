"use strict";(self.webpackChunkexperimenter_docs=self.webpackChunkexperimenter_docs||[]).push([[1146],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(r),m=a,d=p["".concat(u,".").concat(m)]||p[m]||f[m]||o;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5991:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={id:"how-to-restart",title:"Is this supported?",slug:"/feature-requires-restart/how-to-restart"},i=void 0,s={unversionedId:"faq/feature-requires-restart/how-to-restart",id:"faq/feature-requires-restart/how-to-restart",title:"Is this supported?",description:"This is how it works when a feature requires a restart:",source:"@site/docs/faq/feature-requires-restart/how-to-restart.mdx",sourceDirName:"faq/feature-requires-restart",slug:"/feature-requires-restart/how-to-restart",permalink:"/feature-requires-restart/how-to-restart",draft:!1,editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/faq/feature-requires-restart/how-to-restart.mdx",tags:[],version:"current",frontMatter:{id:"how-to-restart",title:"Is this supported?",slug:"/feature-requires-restart/how-to-restart"},sidebar:"sidebar",previous:{title:"Re-enrolled in the same experiment?",permalink:"/enrollment/re-enrollment"},next:{title:"Feature metrics aren't there?",permalink:"/metric-availability/feature-metrics"}},u={},l=[],c={toc:l},p="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This is how it works when a feature requires a restart:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Session 1: Client enrolls, applies feature configuration, but the feature itself won't implement the changes until the next restart"),(0,a.kt)("li",{parentName:"ul"},"Session 2: Client is enrolled, feature configuration is applied, feature now shows changes")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"IMPORTANT:  Please share that this experiment needs a restart in your data science Jira ticket and that there is custom work needed at analysis to exlude the pre-restart data.")))}f.isMDXComponent=!0}}]);