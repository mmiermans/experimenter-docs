"use strict";(self.webpackChunkexperimenter_docs=self.webpackChunkexperimenter_docs||[]).push([[3562],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var r=t(7294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=r.createContext({}),g=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=g(e.components);return r.createElement(l.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=g(t),u=s,d=c["".concat(l,".").concat(u)]||c[u]||m[u]||i;return t?r.createElement(d,a(a({ref:n},p),{},{components:t})):r.createElement(d,a({ref:n},p))}));function d(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var i=t.length,a=new Array(i);a[0]=u;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[c]="string"==typeof e?e:s,a[1]=o;for(var g=2;g<i;g++)a[g]=t[g];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5657:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>g});var r=t(7462),s=(t(7294),t(3905));const i={id:"messaging-journey",title:"Messaging Journey",slug:"/messaging/messaging-journey"},a=void 0,o={unversionedId:"messaging/messaging-journey",id:"messaging/messaging-journey",title:"Messaging Journey",description:"From inception to launch, a message goes through the below three steps for Firefox Desktop:",source:"@site/docs/messaging/messaging-journey.md",sourceDirName:"messaging",slug:"/messaging/messaging-journey",permalink:"/messaging/messaging-journey",draft:!1,editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/messaging/messaging-journey.md",tags:[],version:"current",frontMatter:{id:"messaging-journey",title:"Messaging Journey",slug:"/messaging/messaging-journey"},sidebar:"sidebar",previous:{title:"Messaging Surfaces",permalink:"/messaging/messaging-surfaces"},next:{title:"Messaging Display Logic",permalink:"/messaging/display-logic"}},l={},g=[{value:"Message Design",id:"message-design",level:2},{value:"Running an Experiment",id:"running-an-experiment",level:2},{value:"Message in Firefox",id:"message-in-firefox",level:2}],p={toc:g},c="wrapper";function m(e){let{components:n,...t}=e;return(0,s.kt)(c,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"From inception to launch, a message goes through the below three steps for Firefox Desktop:"),(0,s.kt)("h2",{id:"message-design"},"Message Design"),(0,s.kt)("p",null,"Once an idea has been developed, the next step is designing the experiment message. A good place to start for some inspiration, is to look through previous messaging system experiments (Examples in Source doc) as well as looking into the available capabilities through the  ",(0,s.kt)("a",{parentName:"p",href:"https://experimenter.info/messaging/messaging-surfaces/"},"Messaging Surfaces"),". The OMC team has vast experience with running these experiments and can provide feedback and answer any questions in the #omc Slack channel. "),(0,s.kt)("h2",{id:"running-an-experiment"},"Running an Experiment"),(0,s.kt)("p",null,"First, determine if your experiment will require any on-train development work to support the launch as well as any translated strings that need to land prior. Once that\u2019s been determined, we can get started with creating the experiment.\nFor a more in-depth guide and step by step process, visit ",(0,s.kt)("a",{parentName:"p",href:"https://mozilla-hub.atlassian.net/wiki/spaces/FIREFOX/pages/233406786/OMC+Experimenter+Onboarding"},"OMC: Experimenter onboarding document")),(0,s.kt)("h2",{id:"message-in-firefox"},"Message in Firefox"),(0,s.kt)("p",null,"Once the experiment has successfully concluded and analysis shows promising results, we can land the new message in tree. Depending on the messaging surface, the following files is where the JSON for our different messages exists"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"browser/components/newtab/aboutwelcome/lib/AboutWelcomeDefaults.jsm\nbrowser/components/newtab/lib/FeatureCalloutMessages.jsm\nbrowser/components/newtab/lib/OnboardingMessageProvider.jsm\n")),(0,s.kt)("p",null,"Visit ",(0,s.kt)("a",{parentName:"p",href:"https://firefox-source-docs.mozilla.org/browser/components/newtab/docs/index.html"},"Firefox Source docs"),": newtab for details on how to develop within our components."))}m.isMDXComponent=!0}}]);