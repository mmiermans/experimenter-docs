"use strict";(self.webpackChunkexperimenter_docs=self.webpackChunkexperimenter_docs||[]).push([[2400],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=u(n),d=i,h=c["".concat(l,".").concat(d)]||c[d]||p[d]||a;return n?r.createElement(h,o(o({ref:t},m),{},{components:n})):r.createElement(h,o({ref:t},m))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8991:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const a={id:"validating-experiments",title:"Validating Experiments",slug:"/validating-experiments"},o=void 0,s={unversionedId:"getting-started/data-scientists/validating-experiments",id:"getting-started/data-scientists/validating-experiments",title:"Validating Experiments",description:"This section describes some common problems with experiments that you should look out for, how we recommend testing for them, and some potential causes to investigate if you do see that something is wrong.",source:"@site/docs/getting-started/data-scientists/validating-experiments.md",sourceDirName:"getting-started/data-scientists",slug:"/validating-experiments",permalink:"/validating-experiments",draft:!1,editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/getting-started/data-scientists/validating-experiments.md",tags:[],version:"current",frontMatter:{id:"validating-experiments",title:"Validating Experiments",slug:"/validating-experiments"},sidebar:"sidebar",previous:{title:"Telemetry for Experiments",permalink:"/telemetry"},next:{title:"Getting started with implementation",permalink:"/getting-started/engineers/for-engineers"}},l={},u=[{value:"Branch imbalance (Sample Ratio Mismatch)",id:"branch-imbalance-sample-ratio-mismatch",level:3},{value:"Low enrollments",id:"low-enrollments",level:3},{value:"High unenrollments",id:"high-unenrollments",level:3},{value:"Debugging unenrollments by reason",id:"debugging-unenrollments-by-reason",level:4}],m={toc:u},c="wrapper";function p(e){let{components:t,...a}=e;return(0,i.kt)(c,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This section describes some common problems with experiments that you should look out for, how we recommend testing for them, and some potential causes to investigate if you do see that something is wrong."),(0,i.kt)("p",null,"You should consider this a starting point, not a comprehensive list. ",(0,i.kt)("strong",{parentName:"p"},"Generally speaking, interesting results warrant a higher degree of scrutiny"),"."),(0,i.kt)("h3",{id:"branch-imbalance-sample-ratio-mismatch"},"Branch imbalance (Sample Ratio Mismatch)"),(0,i.kt)("p",null,"We expect to see some variation between the observed v.s. expected ratios for enrollment in branches for experiments. However, too much imbalance might be indication that there might be a problem with the validity of the experiment configuration, implementation, or execution."),(0,i.kt)("p",null,"As a first step, you should continuously monitor daily active population and enrollment by branch to see if anything is obviously wrong. We do this with standard Grafana monitoring dashboards generated for every experiment:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Daily active population is 2.152m control, 2.150m treatment",src:n(3484).Z,width:"800",height:"304"})),(0,i.kt)("p",null,'You will also see a "Sample Ratio Mismatch" health check, which is a chi-squared test of independence to determine whether the difference between the actual v.s. expected ratio of branches is statistically significant. Note that this can have some temporary fluctuation, but you see a sustained period of enrollment for which the p-value is less than 0.01, you should consider this cause for further investigation.'),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/1455535/137956046-c63f8c40-df02-4641-9259-14f02c021945.png",alt:"SRM check screenshot"})),(0,i.kt)("p",null,"You will see SRM checks for daily active clients, enrollments, and unenrollments. Note that it is ",(0,i.kt)("em",{parentName:"p"},"always")," important for enrollments to be balanced, whereas noise in unenrollments is less concerning. Some potential causes of SRM if you do see a potential issue:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Low overall enrollment"),(0,i.kt)("li",{parentName:"ul"},"High unenrollments in treatment due to implementation details of the experience being tested"),(0,i.kt)("li",{parentName:"ul"},"Irregularities in deployment of experiments/updating in flight")),(0,i.kt)("h3",{id:"low-enrollments"},"Low enrollments"),(0,i.kt)("p",null,"Once your experiment has been enrolling for a day or so, you should check your monitoring dashboards to see the difference between the actual and expected rate of enrollment. If numbers are lower than expected, this can be due to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"An error in sizing calculations (your expected count was off)"),(0,i.kt)("li",{parentName:"ul"},"The experiment conflicts with other experiments or roll-outs targeting the same feature"),(0,i.kt)("li",{parentName:"ul"},"Misconfiguration in experimenter (e.g. you selected the wrong release version or channel)"),(0,i.kt)("li",{parentName:"ul"},"A bug in server-side targeting expressions"),(0,i.kt)("li",{parentName:"ul"},"A bug, timeout, or implementation error in client-side targeting attributes;"),(0,i.kt)("li",{parentName:"ul"},"You launched the experiment during the first week of a new release, during which actual users are still updating to the latest version of Firefox")),(0,i.kt)("h3",{id:"high-unenrollments"},"High unenrollments"),(0,i.kt)("p",null,'Users can be removed from experiments for a number of reasons, which shows up on your dashboard as "unenrollments". When unenrollments look suspiciously high, these are some possible causes to investigate:'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A targeting condition that was true during enrollment is no longer satisfied (e.g. user switched regions)"),(0,i.kt)("li",{parentName:"ul"},"A preference that is required for the experiment to be on was changed by the user"),(0,i.kt)("li",{parentName:"ul"},"Infrastructure failures (e.g. signing, remote settings delivery is somehow compromised)"),(0,i.kt)("li",{parentName:"ul"},"Users are opting out of the experiment at an unexpected rate")),(0,i.kt)("h4",{id:"debugging-unenrollments-by-reason"},"Debugging unenrollments by reason"),(0,i.kt)("p",null,'In order to see which "reasons" are responsible for unenrollment, you can take a look at this part of the dashboard:\n',(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/1455535/137957335-e34e9ab5-05cd-42b2-b1fd-2e88d90bb60c.png",alt:"image"})),(0,i.kt)("p",null,"Alternatively, you can run your own query for unenrollment events. For example, this will show you unenrollments by reason ",(0,i.kt)("em",{parentName:"p"},"and")," branch:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    submission_date,\n    mozfun.map.get_key(event_map_values, 'branch') as branch,\n    mozfun.map.get_key(event_map_values, 'reason') as reason,\n    COUNT(*) AS events\nFROM telemetry.events\nWHERE\n    event_category = 'normandy'\n    AND event_method = 'unenroll'\n    AND event_string_value = 'YOUR_EXPERIMENT_SLUG'\n    AND submission_date >= '2021-8-10'\nGROUP BY 1, 2, 3\nORDER BY events DESC\n")))}p.isMDXComponent=!0},3484:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/daily-active-pop-8d4e3e7cacf5f5868d65619dfa909693.png"}}]);