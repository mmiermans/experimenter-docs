"use strict";(self.webpackChunkexperimenter_docs=self.webpackChunkexperimenter_docs||[]).push([[6174],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>b});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(n),c=l,b=d["".concat(p,".").concat(c)]||d[c]||m[c]||o;return n?r.createElement(b,a(a({ref:t},s),{},{components:n})):r.createElement(b,a({ref:t},s))}));function b(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:l,a[1]=i;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2328:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(7462),l=(n(7294),n(3905));const o={id:"desktop-enroll-locally",title:"Desktop Local Experiment Iteration",slug:"/desktop-enroll-locally"},a="Debugging an experiment from experimenter locally",i={unversionedId:"deep-dives/desktop/desktop-enroll-locally",id:"deep-dives/desktop/desktop-enroll-locally",title:"Desktop Local Experiment Iteration",description:"Trying to iterate on an experiment in Preview on experimenter.services.mozilla.com can be painful, because even after you change something and post to preview, you have a wait a while for the updated recipe to be propagated to the CDN.",source:"@site/docs/deep-dives/desktop/desktop-enroll-locally.md",sourceDirName:"deep-dives/desktop",slug:"/desktop-enroll-locally",permalink:"/desktop-enroll-locally",draft:!1,editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/deep-dives/desktop/desktop-enroll-locally.md",tags:[],version:"current",frontMatter:{id:"desktop-enroll-locally",title:"Desktop Local Experiment Iteration",slug:"/desktop-enroll-locally"},sidebar:"sidebar",previous:{title:"Bucketing",permalink:"/bucketing"},next:{title:"Running Pref-setting Experiments on Desktop",permalink:"/desktop-pref-experiments"}},p={},u=[{value:"Enable Nimbus debugging",id:"enable-nimbus-debugging",level:2},{value:"Enable the Browser Toolbox",id:"enable-the-browser-toolbox",level:2},{value:"Prepare a few things:",id:"prepare-a-few-things",level:2},{value:"Do the Enrollment",id:"do-the-enrollment",level:2},{value:"Reload <code>about:studies</code>, and you should see the experiment",id:"reload-aboutstudies-and-you-should-see-the-experiment",level:2}],s={toc:u},d="wrapper";function m(e){let{components:t,...n}=e;return(0,l.kt)(d,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"debugging-an-experiment-from-experimenter-locally"},"Debugging an experiment from experimenter locally"),(0,l.kt)("p",null,"Trying to iterate on an experiment in Preview on experimenter.services.mozilla.com can be painful, because even after you change something and post to preview, you have a wait a while for the updated recipe to be propagated to the CDN."),(0,l.kt)("h2",{id:"enable-nimbus-debugging"},"Enable Nimbus debugging"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"In ",(0,l.kt)("inlineCode",{parentName:"li"},"about:config"),", set:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"nimbus.debug")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"true"))))),(0,l.kt)("h2",{id:"enable-the-browser-toolbox"},"Enable the Browser Toolbox"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"In ",(0,l.kt)("inlineCode",{parentName:"li"},"about:config"),", set:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"devtools.chrome.enabled")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"true")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"devtools.debugger.remote-enabled")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"true"))))),(0,l.kt)("h2",{id:"prepare-a-few-things"},"Prepare a few things:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Load ",(0,l.kt)("inlineCode",{parentName:"li"},"about:studies")," and unenroll this profile from anything that might interfere"),(0,l.kt)("li",{parentName:"ul"},"On the Experimenter page for your experiment, select the contents of the ",(0,l.kt)("inlineCode",{parentName:"li"},"Recipe JSON")," field from the ",(0,l.kt)("inlineCode",{parentName:"li"},"Details")," tab, and copy it into your Copy/Paste buffer")),(0,l.kt)("h2",{id:"do-the-enrollment"},"Do the Enrollment"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Open ",(0,l.kt)("inlineCode",{parentName:"li"},"Tools > Browser Tools > Browser Toolbox")),(0,l.kt)("li",{parentName:"ul"},"Switch to the browser console"),(0,l.kt)("li",{parentName:"ul"},"In the input area, do the following:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"const branchSlug = 'treatment-a'; // or whatever branch you want")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"let recipe = ")," ",(0,l.kt)("em",{parentName:"li"},"paste_recipe_json_here")," ",(0,l.kt)("inlineCode",{parentName:"li"},";")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'const { ExperimentManager: em } = ChromeUtils.importESModule("resource://nimbus/lib/ExperimentManager.sys.mjs");')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"let branch = recipe.branches.find(b => b.slug == branchSlug);")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"em.forceEnroll(recipe, branch);"))))),(0,l.kt)("h2",{id:"reload-aboutstudies-and-you-should-see-the-experiment"},"Reload ",(0,l.kt)("inlineCode",{parentName:"h2"},"about:studies"),", and you should see the experiment"))}m.isMDXComponent=!0}}]);