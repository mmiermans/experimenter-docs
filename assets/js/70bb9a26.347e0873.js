"use strict";(self.webpackChunkexperimenter_docs=self.webpackChunkexperimenter_docs||[]).push([[6723],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),c=a,m=d["".concat(s,".").concat(c)]||d[c]||g[c]||l;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},330:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const l={id:"desktop-targeting-debug",title:"Desktop Targeting debug",slug:"/desktop-targeting-debug"},o="Debugging Targeting expressions",i={unversionedId:"deep-dives/desktop/desktop-targeting-debug",id:"deep-dives/desktop/desktop-targeting-debug",title:"Desktop Targeting debug",description:"How to enable ASRouter devtools",source:"@site/docs/deep-dives/desktop/desktop-targeting-debug.md",sourceDirName:"deep-dives/desktop",slug:"/desktop-targeting-debug",permalink:"/desktop-targeting-debug",draft:!1,editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/deep-dives/desktop/desktop-targeting-debug.md",tags:[],version:"current",frontMatter:{id:"desktop-targeting-debug",title:"Desktop Targeting debug",slug:"/desktop-targeting-debug"},sidebar:"sidebar",previous:{title:"Desktop Pref Experiments",permalink:"/desktop-pref-experiments"},next:{title:"Behavioral Targeting",permalink:"/mobile-behavioral-targeting"}},s={},p=[{value:"How to enable ASRouter devtools",id:"how-to-enable-asrouter-devtools",level:2},{value:"Overview of ASRouter devtools",id:"overview-of-asrouter-devtools",level:2},{value:"Targeting",id:"targeting",level:2},{value:"Builtin functions and examples",id:"builtin-functions-and-examples",level:2}],u={toc:p},d="wrapper";function g(e){let{components:t,...l}=e;return(0,a.kt)(d,(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"debugging-targeting-expressions"},"Debugging Targeting expressions"),(0,a.kt)("h2",{id:"how-to-enable-asrouter-devtools"},"How to enable ASRouter devtools"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In ",(0,a.kt)("inlineCode",{parentName:"li"},"about:config"),", set ",(0,a.kt)("inlineCode",{parentName:"li"},"browser.newtabpage.activity-stream.asrouter.devtoolsEnabled")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"true")),(0,a.kt)("li",{parentName:"ul"},"Visit ",(0,a.kt)("inlineCode",{parentName:"li"},"about:newtab#devtools-targeting")," to see the devtools (you need to copy-paste this manually to navigate).")),(0,a.kt)("h2",{id:"overview-of-asrouter-devtools"},"Overview of ASRouter devtools"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Devtools image",src:n(7478).Z,width:"1017",height:"1094"})),(0,a.kt)("h2",{id:"targeting"},"Targeting"),(0,a.kt)("p",null,"Available targeting attributes are ",(0,a.kt)("a",{parentName:"p",href:"https://firefox-source-docs.mozilla.org/browser/components/newtab/content-src/asrouter/docs/targeting-attributes.html"},"documented in firefox-source-docs"),"."),(0,a.kt)("p",null,"Inside the textarea targeting expressions can be written and evaluated using the ",(0,a.kt)("inlineCode",{parentName:"p"},"Evaluate")," button."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Targeting expression"),(0,a.kt)("th",{parentName:"tr",align:null},"Status"),(0,a.kt)("th",{parentName:"tr",align:null},"Result"),(0,a.kt)("th",{parentName:"tr",align:null},"Observation"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Correctly formatted JEXL expression ",(0,a.kt)("br",null)),(0,a.kt)("td",{parentName:"tr",align:null},"\u274c",(0,a.kt)("br",null),"\u2705"),(0,a.kt)("td",{parentName:"tr",align:null},"false",(0,a.kt)("br",null)," true"),(0,a.kt)("td",{parentName:"tr",align:null},"Depends on the truth value of the expression")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Correctly formatted JEXL expression",(0,a.kt)("br",null)," referencing unknown variables"),(0,a.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,a.kt)("td",{parentName:"tr",align:null},"Empty result"),(0,a.kt)("td",{parentName:"tr",align:null},"Using unknown variables is an error, result is neither true nor false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"JEXL expression with syntax error"),(0,a.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,a.kt)("td",{parentName:"tr",align:null},"<ERR_MSG>"),(0,a.kt)("td",{parentName:"tr",align:null},"Full error message is shown")))),(0,a.kt)("h2",{id:"builtin-functions-and-examples"},"Builtin functions and examples"),(0,a.kt)("p",null,"The full list of available functions can be seen in ",(0,a.kt)("a",{parentName:"p",href:"https://searchfox.org/mozilla-central/source/toolkit/components/utils/FilterExpressions.jsm"},"FilterExpressions.jsm"),"."),(0,a.kt)("p",null,"A JEXL function is called using the ",(0,a.kt)("inlineCode",{parentName:"p"},"|")," operator followed by the function name, example: ",(0,a.kt)("inlineCode",{parentName:"p"},"[1,2,3]|length == 3"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Any preference can be read using ",(0,a.kt)("inlineCode",{parentName:"li"},"|prefValue")),(0,a.kt)("li",{parentName:"ul"},"An array of objects can be filtered by key value")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"topFrecentSites // An array of objects with `frequency` and `host` names\n\ntopFrecentSites[.frecency > 9000] // returns an array containing only those objects with frequency over 9000\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[1,2,3] intersect [3,4,5]")," => ",(0,a.kt)("inlineCode",{parentName:"li"},"[3]"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'[{a:1, type:"foo"}, {b:2, type:"bar"}]|mapToProperty("type")')," => ",(0,a.kt)("inlineCode",{parentName:"li"},'["foo", "bar"]')),(0,a.kt)("li",{parentName:"ul"},"Date casting")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// Is the profile older than 7 days\n(currentDate | (date - profileAgeCreated)) / 86400000 > 7;\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1 in [1,2,3]")," => ",(0,a.kt)("inlineCode",{parentName:"li"},"true")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"JEXL expression"|regExpMatch("\\w+")')," => ",(0,a.kt)("inlineCode",{parentName:"li"},'["JEXL"]'))))}g.isMDXComponent=!0},7478:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/desktop-devtools-bb4adfe60eb4208c2db309eae97c2eda.png"}}]);