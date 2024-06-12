"use strict";(self.webpackChunkexperimenter_docs=self.webpackChunkexperimenter_docs||[]).push([[6836],{4137:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),c=u(r),f=o,m=c["".concat(s,".").concat(f)]||c[f]||d[f]||i;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=f;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[c]="string"==typeof e?e:o,l[1]=a;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7551:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var n=r(7462),o=(r(7294),r(4137));const i={id:"sizing-rollouts",title:"Sizing rollouts",slug:"/rollouts/sizing"},l=void 0,a={unversionedId:"faq/rollouts/sizing-rollouts",id:"faq/rollouts/sizing-rollouts",title:"Sizing rollouts",description:"See the Rollout FAQ for general rollout information",source:"@site/docs/faq/rollouts/sizing.md",sourceDirName:"faq/rollouts",slug:"/rollouts/sizing",permalink:"/rollouts/sizing",draft:!1,editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/faq/rollouts/sizing.md",tags:[],version:"current",frontMatter:{id:"sizing-rollouts",title:"Sizing rollouts",slug:"/rollouts/sizing"},sidebar:"sidebar",previous:{title:"Rollout feature saturation",permalink:"/rollouts/saturation"},next:{title:"Advanced targeting",permalink:"/targeting/advanced-targeting"}},s={},u=[{value:"Question",id:"question",level:3},{value:"Answer",id:"answer",level:3}],p={toc:u},c="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"See the ",(0,o.kt)("a",{parentName:"p",href:"/deep-dives/experimenter/rollouts"},"Rollout FAQ")," for general rollout information")),(0,o.kt)("h3",{id:"question"},"Question"),(0,o.kt)("p",null,"How quickly can I get to 100% with a staged rollout?"),(0,o.kt)("h3",{id:"answer"},"Answer"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Your sizing steps")," are a balance of:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"how many users do you need to gain confidence to go to the next step?"),(0,o.kt)("li",{parentName:"ul"},"How big of a step are you comfortable with?")),(0,o.kt)("p",null,"Some common patterns are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Low risk:  5, 10, 50,100"),(0,o.kt)("li",{parentName:"ul"},"Med risk: 1, 5, 10, 25, 75, 100"),(0,o.kt)("li",{parentName:"ul"},"High risk or scaling risk: .5, 1, 5, 10, 25, 50, 75, 100")),(0,o.kt)("p",null,"The first step is usually the one where issues are discovered.  It's easy to stop the rollout, land fixes, and start again with a higher minimum version (after the fixes have landed)."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The speed you increase")," is based on:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"What are you observing to decide you are OK moving forward?"),(0,o.kt)("li",{parentName:"ul"},"How long will it take to see those changes?")),(0,o.kt)("p",null,"Fast:  2 days, 7 days, 10 days (ex: a frequently used feature, where the telemetry exists for your team to easily see issues)\nMed: 1 week, 2 week, 3 week\nSlow: 2 week, 4 weeks, 6 weeks (ex: it takes users a while to use the feature or looking at revenue or other indirect impacts)"))}d.isMDXComponent=!0}}]);