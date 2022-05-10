(self.webpackChunkexperimenter_docs=self.webpackChunkexperimenter_docs||[]).push([[7201],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||r;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9209:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var a=n(2122),i=n(9756),r=(n(7294),n(3905)),o={id:"data-scientists-root",title:"Experimentation for data scientists",slug:"/data-scientists"},s=void 0,l={unversionedId:"data-scientists/data-scientists-root",id:"data-scientists/data-scientists-root",isDocsHomePage:!1,title:"Experimentation for data scientists",description:"This page describes the roles data scientists play in experimentation at Mozilla.",source:"@site/docs/data-scientists/data-scientists-root.md",sourceDirName:"data-scientists",slug:"/data-scientists",permalink:"/data-scientists",editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/data-scientists/data-scientists-root.md",tags:[],version:"current",frontMatter:{id:"data-scientists-root",title:"Experimentation for data scientists",slug:"/data-scientists"},sidebar:"sidebar",previous:{title:"Getting Access",permalink:"/access"},next:{title:"Telemetry for Experiments",permalink:"/telemetry"}},p=[{value:"What is the role of experimentation at Mozilla?",id:"what-is-the-role-of-experimentation-at-mozilla",children:[]},{value:"Collaborating with investigation owners",id:"collaborating-with-investigation-owners",children:[]},{value:"Sampling framework",id:"sampling-framework",children:[]},{value:"Sample size recommendations",id:"sample-size-recommendations",children:[]},{value:"Metrics and statistics",id:"metrics-and-statistics",children:[]},{value:"Watch out for",id:"watch-out-for",children:[]}],c={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This page describes the roles data scientists play in experimentation at Mozilla."),(0,r.kt)("p",null,"Some other things you may be looking for are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Documentation about using ",(0,r.kt)("a",{parentName:"li",href:"/jetstream/jetstream"},"Jetstream"),", Mozilla's experiment analysis tool"),(0,r.kt)("li",{parentName:"ul"},"Technical documentation about ",(0,r.kt)("a",{parentName:"li",href:"https://docs.telemetry.mozilla.org/tools/experiments.html"},"datasets used in experimentation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://mana.mozilla.org/wiki/display/DATA/Mozilla+Data+Organization"},"Process documentation")," for the Mozilla data science organization\n(internal link)")),(0,r.kt)("h2",{id:"what-is-the-role-of-experimentation-at-mozilla"},"What is the role of experimentation at Mozilla?"),(0,r.kt)("p",null,"Experimentation informs product decision-making at Mozilla.\nThis suite of experimentation tools is designed for product managers and other investigation owners to A/B test hypotheses they have about new and existing products and features.\n",(0,r.kt)("a",{parentName:"p",href:"https://experimenter.services.mozilla.com/nimbus/"},"Experimenter")," (internal link)\nand the ",(0,r.kt)("a",{parentName:"p",href:"https://mana.mozilla.org/wiki/display/FIREFOX/Experiments+Previously+Reviewed"},"experiment review repository")," (internal link)\ncontain examples of completed and active experiments."),(0,r.kt)("h2",{id:"collaborating-with-investigation-owners"},"Collaborating with investigation owners"),(0,r.kt)("p",null,"Data scientists support investigation owners in setting up and interpreting their experiments.\n",(0,r.kt)("a",{parentName:"p",href:"https://mana.mozilla.org/wiki/display/FIREFOX/Experiment+Design+Process"},"The Firefox experiment design process")," (internal link)\ndescribes the process for both data scientists and stakeholders."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/155EUgzn22VTX8mFwesSROT3Z6JORSfb5VyoMoLra7ws/edit#"},"The Nimbus onboarding guide"),"\nexplains how to set up an experiment in the experiment console."),(0,r.kt)("p",null,"The support that investigation owners need from data scientists during experiment set-up includes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"validating that the experimental design will answer their questions"),(0,r.kt)("li",{parentName:"ul"},"consulting on telemetry specifications"),(0,r.kt)("li",{parentName:"ul"},"sample size recommendations"),(0,r.kt)("li",{parentName:"ul"},"writing ",(0,r.kt)("a",{parentName:"li",href:"/jetstream/metrics"},"custom metrics")," if needed"),(0,r.kt)("li",{parentName:"ul"},"guidance about interpretation")),(0,r.kt)("h2",{id:"sampling-framework"},"Sampling framework"),(0,r.kt)("p",null,"Each experiment begins with an enrollment period with fixed start and end dates during which clients can enroll in the experiment. After the declared enrollment period ends, we modify the recipe to instruct clients to stop enrolling, and ignore clients that report enrollment anyway. Because enrollment depends on the client checking for software updates, samples will be skewed towards active users at the beginning of the enrollment period. We typically leave enrollment open for a week to account for weekly seasonality (e.g. weekday vs. weekend users) and to give clients who are active less often a chance to enroll. This makes our experiment population essentially a sample of the weekly active users (WAU)."),(0,r.kt)("p",null,"For each client, experiment metrics are analyzed over a defined period of time from enrollment. We report results for an analysis period (e.g. the first day after enrollment) after all clients have had a chance to experience the treatment for that duration. The ",(0,r.kt)("a",{parentName:"p",href:"/jetstream/jetstream#analysis-paradigm"},"Jetstream overview")," describes the analysis paradigm in more depth and how it relates to the length of an experiment."),(0,r.kt)("p",null,"For more nuances about sampling, enrollment and exposure (whether or not the client actually saw the treatment or control), see ",(0,r.kt)("a",{parentName:"p",href:"/client-sdk-states-and-lifecycle"},"the experiment lifecycle overview"),"."),(0,r.kt)("h2",{id:"sample-size-recommendations"},"Sample size recommendations"),(0,r.kt)("p",null,"Sample size recommendations are operationalized as the fraction of the Firefox population that should consider enrolling in your recipe."),(0,r.kt)("p",null,"Nimbus can filter on several factors, including:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"channel"),(0,r.kt)("li",{parentName:"ul"},"minimum version"),(0,r.kt)("li",{parentName:"ul"},"country"),(0,r.kt)("li",{parentName:"ul"},"locale"),(0,r.kt)("li",{parentName:"ul"},"OS"),(0,r.kt)("li",{parentName:"ul"},"client preference values (on desktop)"),(0,r.kt)("li",{parentName:"ul"},"other factors")),(0,r.kt)("p",null,"This additional filtering always happens logically ",(0,r.kt)("em",{parentName:"p"},"after")," a client passes the sizing filter.\nYou must inflate your population fraction to account for filtering."),(0,r.kt)("p",null,"For a concrete example, imagine that Firefox WAU is 1,000 clients. 20% of WAU is from Canada. You wish to deploy an experiment to Canadian users. Your power analysis says that you need 50 clients in total to enroll. You should specify a population fraction of at least 25%, because 1,000 ","*"," 0.2 (from Canada) ","*"," 0.25 (your filter) = 50."),(0,r.kt)("p",null,"Most of our telemetry metrics are not normally distributed. A couple approaches that you may find helpful are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"powering a Mann-Whitney U-test. ",(0,r.kt)("a",{parentName:"li",href:"https://www.psychologie.hhu.de/arbeitsgruppen/allgemeine-psychologie-und-arbeitspsychologie/gpower"},"Gpower")," implements the Mann-Whitney U-test."),(0,r.kt)("li",{parentName:"ul"},"log-transforming the data and the expected difference and powering a ",(0,r.kt)("em",{parentName:"li"},"t")," test in log space.")),(0,r.kt)("h2",{id:"metrics-and-statistics"},"Metrics and statistics"),(0,r.kt)("p",null,"Two weeks after the beginning of the enrollment period, Jetstream will begin to produce auto-generated reports summarizing the results of the experiment. ",(0,r.kt)("a",{parentName:"p",href:"https://experimenter.services.mozilla.com/nimbus/custom-messaging-in-aboutwelcome-for-chrome-users-to-import/results"},"Here is one such report")," (internal link)."),(0,r.kt)("p",null,"To see which metrics are included by default to this auto-generated report as well as information on adding custom and default metrics, statistics and confidence, see the ",(0,r.kt)("a",{parentName:"p",href:"/jetstream/jetstream"},"Jetstream documentation"),"."),(0,r.kt)("p",null,"If you want to perform some analysis by hand, ",(0,r.kt)("a",{parentName:"p",href:"https://docs.telemetry.mozilla.org/datasets/jetstream.html"},"Jetstream datasets")," are also available in BigQuery. Many telemetry datasets also include an ",(0,r.kt)("inlineCode",{parentName:"p"},"experiments")," field, which when filtered on the experiment slug, can identify rows in the dataset enrolled in the experiment."),(0,r.kt)("p",null,"For certain experiments, data scientists may need to contruct confidence intervals for relative or percent differences. Example implementations can be found in ",(0,r.kt)("a",{parentName:"p",href:"https://colab.research.google.com/drive/1sVOdVdraPwec_Hit4OiaDDH4TJGzaIcc?usp=sharing"},"this notebook"),"."),(0,r.kt)("h2",{id:"watch-out-for"},"Watch out for"),(0,r.kt)("p",null,"Here are other things to watch out for:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Are there other experiments taking place at the same time as yours? How might that affect the interpretation of your results, or limit your sample sizes?"),(0,r.kt)("li",{parentName:"ul"},"Are there multiple implementation phases to this new feature? Does Product want to compare results from one phase to another?"),(0,r.kt)("li",{parentName:"ul"},"...")))}m.isMDXComponent=!0}}]);