"use strict";(self.webpackChunkexperimenter_docs=self.webpackChunkexperimenter_docs||[]).push([[9658],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),d=i,g=c["".concat(l,".").concat(d)]||c[d]||m[d]||a;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9236:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const a={id:"integration-tests",title:"Integration Test Docs",slug:"/integration-tests"},o="Integration Tests",s={unversionedId:"integration-tests",id:"integration-tests",title:"Integration Test Docs",description:"About",source:"@site/docs/integration-tests.md",sourceDirName:".",slug:"/integration-tests",permalink:"/integration-tests",draft:!1,editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/integration-tests.md",tags:[],version:"current",frontMatter:{id:"integration-tests",title:"Integration Test Docs",slug:"/integration-tests"},sidebar:"sidebar",previous:{title:"Glossary",permalink:"/glossary"},next:{title:"Local configuration for natural enrollments",permalink:"/local-enrollment"}},l={},u=[{value:"About",id:"about",level:2},{value:"Nimbus Tests",id:"nimbus-tests",level:2},{value:"Getting Started",id:"getting-started",level:3},{value:"Legacy tests",id:"legacy-tests",level:2},{value:"Running a single test",id:"running-a-single-test",level:2}],p={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"integration-tests"},"Integration Tests"),(0,i.kt)("h2",{id:"about"},"About"),(0,i.kt)("p",null,"The integration test suite is an end-to-end test suite that uses Selenium and Firefox to verify Nimbus functions properly for users."),(0,i.kt)("h2",{id:"nimbus-tests"},"Nimbus Tests"),(0,i.kt)("h3",{id:"getting-started"},"Getting Started"),(0,i.kt)("p",null,"You must have Docker installed."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create a python virtual environment"),(0,i.kt)("li",{parentName:"ol"},"Copy ",(0,i.kt)("inlineCode",{parentName:"li"},".env.integration-tests")," file to ",(0,i.kt)("inlineCode",{parentName:"li"},".env"),"."),(0,i.kt)("li",{parentName:"ol"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"make refresh SKIP_DUMMY=1")," to initialize the DB and setup Nimbus."),(0,i.kt)("li",{parentName:"ol"},"Run the ",(0,i.kt)("inlineCode",{parentName:"li"},"make up_prod_detached")," command."),(0,i.kt)("li",{parentName:"ol"},"Run the following command to run the integration tests: ",(0,i.kt)("inlineCode",{parentName:"li"},"make integration_test_nimbus"))),(0,i.kt)("p",null,"To pass custom parameters to pytest use the environment variable ",(0,i.kt)("inlineCode",{parentName:"p"},"PYTEST_ARGS"),"."),(0,i.kt)("h2",{id:"legacy-tests"},"Legacy tests"),(0,i.kt)("p",null,"To run the legacy tests follow steps 1-3 above. Then run this command: ",(0,i.kt)("inlineCode",{parentName:"p"},"make integration_test_legacy"),". This will run the legacy experimenter test suite."),(0,i.kt)("h2",{id:"running-a-single-test"},"Running a single test"),(0,i.kt)("p",null,"If you would like to run just 1 test, pass this flag to PYTEST_ARGS with the test name you would like to run: ",(0,i.kt)("inlineCode",{parentName:"p"},"-k"),". Example ",(0,i.kt)("inlineCode",{parentName:"p"},"make integration_test_nimbus PYTEST_ARGS=-ktest_archive_experiment")))}m.isMDXComponent=!0}}]);