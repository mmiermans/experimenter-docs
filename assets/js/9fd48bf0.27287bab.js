"use strict";(self.webpackChunkexperimenter_docs=self.webpackChunkexperimenter_docs||[]).push([[6883],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),m=p(n),d=l,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,o=new Array(i);o[0]=d;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[m]="string"==typeof e?e:l,o[1]=r;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),l=n(6010);const i={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(i.tabItem,o),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>y});var a=n(7462),l=n(7294),i=n(6010),o=n(2466),r=n(6550),s=n(1980),p=n(7392),u=n(12);function m(e){return function(e){return l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:l}}=e;return{value:t,label:n,attributes:a,default:l}}))}function c(e){const{values:t,children:n}=e;return(0,l.useMemo)((()=>{const e=t??m(n);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,r.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(i),(0,l.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=c(e),[o,r]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[s,p]=f({queryString:n,groupId:a}),[m,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,u.Nk)(n);return[a,(0,l.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),k=(()=>{const e=s??m;return d({value:e,tabValues:i})?e:null})();(0,l.useLayoutEffect)((()=>{k&&r(k)}),[k]);return{selectedValue:o,selectValue:(0,l.useCallback)((e=>{if(!d({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);r(e),p(e),h(e)}),[p,h,i]),tabValues:i}}var k=n(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:m}=(0,o.o5)(),c=e=>{const t=e.currentTarget,n=u.indexOf(t),a=p[n].value;a!==r&&(m(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:o}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:c},o,{className:(0,i.Z)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":r===t})}),n??t)})))}function N(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=h(e);return l.createElement("div",{className:(0,i.Z)("tabs-container",g.tabList)},l.createElement(b,(0,a.Z)({},e,t)),l.createElement(N,(0,a.Z)({},e,t)))}function y(e){const t=(0,k.Z)();return l.createElement(v,(0,a.Z)({key:String(t)},e))}},4543:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>r,metadata:()=>p,toc:()=>m});var a=n(7462),l=(n(7294),n(3905)),i=n(4866),o=n(5162);const r={id:"fml-imports",title:"Componentizing the Nimbus Feature Manifest",slug:"/fml-imports-and-includes"},s="Componentizing the FML",p={unversionedId:"deep-dives/specifications/fml-imports",id:"deep-dives/specifications/fml-imports",title:"Componentizing the Nimbus Feature Manifest",description:"In the first iteration of the nimbus-fml, the tooling was only able to work on one file at a time.",source:"@site/docs/deep-dives/specifications/fml-imports.mdx",sourceDirName:"deep-dives/specifications",slug:"/fml-imports-and-includes",permalink:"/fml-imports-and-includes",draft:!1,editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/deep-dives/specifications/fml-imports.mdx",tags:[],version:"current",frontMatter:{id:"fml-imports",title:"Componentizing the Nimbus Feature Manifest",slug:"/fml-imports-and-includes"},sidebar:"sidebar",previous:{title:"Feature Manifest Language Front-end Format As YAML",permalink:"/fml-front-end-format"},next:{title:"Using paths in FML",permalink:"/fml-paths"}},u={},m=[{value:"Goals",id:"goals",level:2},{value:"Non-goals",id:"non-goals",level:2},{value:"Concepts",id:"concepts",level:2},{value:"Invoking the <code>nimbus-fml</code> command",id:"invoking-the-nimbus-fml-command",level:3},{value:"The <code>about</code> block",id:"the-about-block",level:3},{value:"The <code>include</code> list",id:"the-include-list",level:3},{value:"The <code>import</code> list",id:"the-import-list",level:3},{value:"Implementation notes",id:"implementation-notes",level:2},{value:"Illustrative sketch",id:"illustrative-sketch",level:3},{value:"Two FML files",id:"two-fml-files",level:4},{value:"The corresponding Kotlin files",id:"the-corresponding-kotlin-files",level:4}],c={toc:m},d="wrapper";function f(e){let{components:t,...n}=e;return(0,l.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"componentizing-the-fml"},"Componentizing the FML"),(0,l.kt)("p",null,"In the first iteration of the ",(0,l.kt)("inlineCode",{parentName:"p"},"nimbus-fml"),", the tooling was only able to work on one file at a time."),(0,l.kt)("p",null,"It accepted a ",(0,l.kt)("inlineCode",{parentName:"p"},"nimbus.fml.yaml")," file, and outputed a Kotlin or Swift file for inclusion in the product, or an ",(0,l.kt)("inlineCode",{parentName:"p"},".experimenter.yaml")," file for ingestion into Experimenter."),(0,l.kt)("p",null,"The pattern we have seen is that the application specifies code that:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"grows each time a new feature is added. This makes it hard to navigate."),(0,l.kt)("li",{parentName:"ul"},"is only able to generate code app code, which is not usable in any of the app's components.")),(0,l.kt)("p",null,"This second restriction is most problematic: the app's components (e.g. Fenix is made up of Android Components, Application Services, GeckoView and Gecko) are unable to instrument their code for experimentation, even though they by themselves might make up the majority of the codebase of the app."),(0,l.kt)("p",null,"This document discusses three new blocks in the FML specification, which are to implement including and importing FML files which easily solve these problems."),(0,l.kt)("p",null,"It allows for experimentation in the re-usable and library codebases that makes up most of our applications."),(0,l.kt)("p",null,"It enables cross-platform re-use of data definitions and schemas which will in turn, make it easier to reason about experimental features by experiment owners."),(0,l.kt)("h2",{id:"goals"},"Goals"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"nimbus.fml.yaml")," file should be composable such the monolithic file can be broken up in to smaller pieces, potentially to live closer to the code it's configuring."),(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},".experimenter.yaml")," ingested by Experimenter should give a complete picture of all the features available in the application."),(0,l.kt)("li",{parentName:"ul"},"The components (and their ",(0,l.kt)("inlineCode",{parentName:"li"},"fml.yaml")," files) can live in a different repository to the application."),(0,l.kt)("li",{parentName:"ul"},"The components' feature code generation happens at component compile time"),(0,l.kt)("li",{parentName:"ul"},"Generated feature code should be visible and configurable from the application",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"e.g. Fenix and Focus might use the same feature from Android Components, but require different configuration."))),(0,l.kt)("li",{parentName:"ul"},"versioning and branches:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"experiments are launched at a population of users using different versions of the app."),(0,l.kt)("li",{parentName:"ul"},"each specific version of the app is potentially built with a specific version of their components"),(0,l.kt)("li",{parentName:"ul"},"for this proposal, easily varying the versions of components is not explored."))),(0,l.kt)("li",{parentName:"ul"},"local development",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"for some feature development, working in multiple repos ",(0,l.kt)("em",{parentName:"li"},"at the same time")," is necessary."),(0,l.kt)("li",{parentName:"ul"},"for this proposal, easily varying the paths or URLs of components is not explored, although this will likely involve a config file.")))),(0,l.kt)("h2",{id:"non-goals"},"Non-goals"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"namespacing",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"currently names of feature, object, and enum classes are unique; collisions are disallowed"),(0,l.kt)("li",{parentName:"ul"},"for this proposal, no attempt is made to allow classes of the same name to be used."))),(0,l.kt)("li",{parentName:"ul"},"connectors to different languages",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"some features may be written in a different language or context to the one that the application is written in: e.g. C++, Rust or JS, or in an iOS app-extension."),(0,l.kt)("li",{parentName:"ul"},"for this proposal, this is only lightly discussed.")))),(0,l.kt)("h2",{id:"concepts"},"Concepts"),(0,l.kt)("p",null,"This proposal changes the way the ",(0,l.kt)("inlineCode",{parentName:"p"},"nimbus-fml")," file is invoked, and adds three new structures to the Feature Manifest Language spec."),(0,l.kt)("h3",{id:"invoking-the-nimbus-fml-command"},"Invoking the ",(0,l.kt)("inlineCode",{parentName:"h3"},"nimbus-fml")," command"),(0,l.kt)("p",null,"The following ",(0,l.kt)("inlineCode",{parentName:"p"},"nimbus-fml")," commands can be run in fml files in either applications or components."),(0,l.kt)(i.Z,{defaultValue:"kotlin",values:[{label:"Android",value:"kotlin"},{label:"iOS",value:"swift"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"kotlin",mdxType:"TabItem"},(0,l.kt)("p",null,"Each component or app has its own ",(0,l.kt)("inlineCode",{parentName:"p"},"build.gradle"),"."),(0,l.kt)("p",null,"The following command is assembled and run by the Nimbus Gradle Plugin."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"% nimbus-fml generate --language kotlin --channel release component.fml.yaml components/build/generated/debug/nimbus\n")),(0,l.kt)("p",null,"This will generated exactly one Kotlin file.")),(0,l.kt)(o.Z,{value:"swift",mdxType:"TabItem"},(0,l.kt)("p",null,"The following command is assembled and run by a Build Phase."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"% nimbus-fml generate --language swift --channel release component.fml.yaml component/Generated\n")),(0,l.kt)("p",null,"This will generated exactly one Swift file."))),(0,l.kt)("p",null,"The following command is assembled and run at application build time only."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"% nimbus-fml generate-experimenter application.fml.yaml .experimenter.yaml\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},".experimenter.yaml")," file is checked into source control, and ingested by Experimenter."),(0,l.kt)("h3",{id:"the-about-block"},"The ",(0,l.kt)("inlineCode",{parentName:"h3"},"about")," block"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"about")," block is an optional block in any given ",(0,l.kt)("inlineCode",{parentName:"p"},".fml.yaml")," file."),(0,l.kt)("p",null,"If present:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"the file may be used to generate a Swift or Kotlin file."),(0,l.kt)("li",{parentName:"ul"},"the file may be imported by another ",(0,l.kt)("inlineCode",{parentName:"li"},".fml.yaml")," file.")),(0,l.kt)("p",null,"If not present:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"the file may be included in another ",(0,l.kt)("inlineCode",{parentName:"li"},".fml.yaml")," file.")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"about")," associates a particular ",(0,l.kt)("inlineCode",{parentName:"p"},".fml.yaml")," file what Kotlin/Swift class and package/module this file will generate:"),(0,l.kt)(i.Z,{defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"},{label:"Swift",value:"swift"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"about:\n    android:\n        class:   .nimbus.MyNimbus\n        package: mozilla.components.search\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"package")," property ",(0,l.kt)("strong",{parentName:"p"},"must")," correspond to the app's namespace, where the ",(0,l.kt)("inlineCode",{parentName:"p"},"R")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"BuildConfig")," files are generated."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"class")," property is the qualified name of the class that will be generated. If the ",(0,l.kt)("inlineCode",{parentName:"p"},"class")," has ",(0,l.kt)("inlineCode",{parentName:"p"},".")," as a prefix, the fully qualified name is created by appending the ",(0,l.kt)("inlineCode",{parentName:"p"},"package")," to the ",(0,l.kt)("inlineCode",{parentName:"p"},"class"),". The filename is taken to be the final segment of the fully qualified name."),(0,l.kt)("p",null,"For Android developers, this should be the familiar way ",(0,l.kt)("inlineCode",{parentName:"p"},"android:name")," is specified in the ",(0,l.kt)("inlineCode",{parentName:"p"},"AndroidManifest.xml"),".")),(0,l.kt)(o.Z,{value:"swift",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"about:\n    ios:\n        class:   AccountsNimbus\n        module:  Accounts\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"module")," property is the name of the module the generate class will be in."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"class")," is the name of the class used to access the features."))),(0,l.kt)("p",null,"As with existing ",(0,l.kt)("inlineCode",{parentName:"p"},".fml.yaml")," files, any file with an ",(0,l.kt)("inlineCode",{parentName:"p"},"about")," block, ",(0,l.kt)("strong",{parentName:"p"},"must")," contain a ",(0,l.kt)("inlineCode",{parentName:"p"},"channels")," list. e.g."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"channels:\n    - release\n    - beta\n    - developer\n    - testing\n")),(0,l.kt)("h3",{id:"the-include-list"},"The ",(0,l.kt)("inlineCode",{parentName:"h3"},"include")," list"),(0,l.kt)("p",null,"This is a list of files which will be merged with this one. The files may be relative to this one, absolute or URLs."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"include:\n    - nimbus/search.yaml\n    - @mozilla/nimbus-shared/fml/messaging.yaml\n")),(0,l.kt)("p",null,"Each element in the list is a path or URL to another file to be included into this one."),(0,l.kt)("p",null,"Included files:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"must not contain an ",(0,l.kt)("inlineCode",{parentName:"li"},"about")," block,"),(0,l.kt)("li",{parentName:"ul"},"must not contain a ",(0,l.kt)("inlineCode",{parentName:"li"},"channels")," list, or must match the ",(0,l.kt)("inlineCode",{parentName:"li"},"channels")," list of the including file.")),(0,l.kt)("p",null,"Including a file means that contents of the ",(0,l.kt)("inlineCode",{parentName:"p"},"features"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"objects")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"enums")," blocks will be appended from the included file to the including file. Any collisions will cause an error, i.e. if two files declare a type of the same name, this should cause an error."),(0,l.kt)("p",null,"Included files may include other files. These files may be remote or on a local filesystem."),(0,l.kt)("p",null,"Including the same file twice should be a no-op."),(0,l.kt)("p",null,"Included files may import files. These files may be remote or on a local filesystem."),(0,l.kt)("h3",{id:"the-import-list"},"The ",(0,l.kt)("inlineCode",{parentName:"h3"},"import")," list"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"import:\n    - path:    ../Accounts/nimbus.fml.yaml\n      channel: production\n    - path:    @mozilla-mobile/ios-components/components/feature/search/nimbus.fml.yaml\n      channel: release\n")),(0,l.kt)("p",null,"The list contains blocks with the following mandatory properties:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"path"),": this string value is a relative path or URL to the imported file."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"channel"),": this string value is the name of a channel. The channel ",(0,l.kt)("strong",{parentName:"li"},"must")," be in the channel list of the included file.")),(0,l.kt)("p",null,"An imported file:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"must")," have an ",(0,l.kt)("inlineCode",{parentName:"li"},"about")," block."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"may")," have an ",(0,l.kt)("inlineCode",{parentName:"li"},"include")," block.")),(0,l.kt)("p",null,"Optionally, a ",(0,l.kt)("inlineCode",{parentName:"p"},"features")," block is provided, which is a ",(0,l.kt)("inlineCode",{parentName:"p"},"Map<FeatureId, List<DefaultBlock>>"),". This provides a way of configuring components."),(0,l.kt)("p",null,"A list of ",(0,l.kt)("inlineCode",{parentName:"p"},"DefaultBlock"),"s is the same way feature defaulting, and channel specific defaulting works when specifying a feature."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"import:\n    - path:    ../Accounts/nimbus.fml.yaml\n      channel: production\n      features:\n        accounts:\n            - value:\n                button-color: blue\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"value")," used by the imported code will come from the importing code."),(0,l.kt)("h2",{id:"implementation-notes"},"Implementation notes"),(0,l.kt)("h3",{id:"illustrative-sketch"},"Illustrative sketch"),(0,l.kt)("p",null,"Consider two projects that are already linked: the app, and the components. One of the components is a messaging feature which we'd like to be able to use in the app."),(0,l.kt)("p",null,"The app needs to initialize the messaging component with specific configuration, not available to the component when it was compiled."),(0,l.kt)("h4",{id:"two-fml-files"},"Two FML files"),(0,l.kt)("p",null,"In ",(0,l.kt)("inlineCode",{parentName:"p"},"../components/messaging.fml.yaml")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'about:\n    class:   .nimbus.ComponentNimbus\n    package: org.example.components\nchannels:\n    - testing\n    - staging\n    - production\n\nfeatures:\n    messaging:\n        # definition elided, for clarity\n        # We include one variable for illustration\n        variable:\n            triggers:\n                type: Map<String, String>\n        defaults:\n            - channel: production\n              value:\n                triggers:\n                    ALWAYS: "true"\n                    NEVER:  "false"\n')),(0,l.kt)("p",null,"The top level file, ",(0,l.kt)("inlineCode",{parentName:"p"},"app.fml.yaml"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"about:\n    class:   .nimbus.AppNimbus\n    package: org.example.app\nchannels:\n    - developer\n    - nightly\n    - beta\n    - release\nimport:\n    - path:    ../components/messaging.fml.yaml\n      channel: production\n      features:\n        messaging:\n            - channel: release\n              value:\n                I_AM_DEFAULT_BROWSER:     is_default_browser == true\n                I_AM_NOT_DEFAULT_BROWSER: is_default_browser != true\n\n")),(0,l.kt)("h4",{id:"the-corresponding-kotlin-files"},"The corresponding Kotlin files"),(0,l.kt)("p",null,"Running ",(0,l.kt)("inlineCode",{parentName:"p"},"nimbus-fml")," on ",(0,l.kt)("inlineCode",{parentName:"p"},"messaging.fml.yaml")," in the components directory, with the ",(0,l.kt)("inlineCode",{parentName:"p"},"channel")," as ",(0,l.kt)("inlineCode",{parentName:"p"},"production")," generates:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'package org.example.components.nimbus\n\nimport org.example.components.R\n\nclass ComponentNimbus {\n    var api: NimbusFeaturesInterface?\n\n    \u2026\n}\n\nclass Messaging\n    private constructor(\u2026) {\n    constructor(\n        _variables: Variables = NullVariables.instance,\n        triggers: Map<String, String> = mapOf(\n            "ALWAYS" to "true",\n            "NEVER" to "false"\n        )\n    )\n}\n')),(0,l.kt)("p",null,"When running the ",(0,l.kt)("inlineCode",{parentName:"p"},"nimbus-fml")," command with the ",(0,l.kt)("inlineCode",{parentName:"p"},"release")," channel, the component file is imported."),(0,l.kt)("p",null,"The generated file looks like:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'package org.example.app.nimbus\n\nimport org.example.component.ComponentNimbus\nimport org.example.app.R\n\nclass AppNimbus {\n    var api: NimbusFeaturesInterface? = null\n        set(value) {\n            ComponentNimbus.api = value\n        }\n\n    companion object {\n        init() {\n            ComponentNimbus.features.messaging.withConfiguration { _variables ->\n                Messaging(\n                    _variables,\n                    triggers = mapOf(\n                        "ALWAYS" to "true",\n                        "NEVER" to "false",\n                        "I_AM_DEFAULT_BROWSER" to "is_default_browser == true",\n                        "I_AM_NOT_DEFAULT_BROWSER" to "is_default_browser != true"\n                    )\n                )\n            }\n        }\n    }\n}\n')),(0,l.kt)("p",null,"Several places to highlight in this code:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The class names and package names are gained from the ",(0,l.kt)("inlineCode",{parentName:"li"},"about")," blocks of the imported files."),(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"api")," property connects the Nimbus SDK to the generated code. Setting this lets the ",(0,l.kt)("inlineCode",{parentName:"li"},"AppNimbus")," get configuration from the server. The setter now sets the ",(0,l.kt)("inlineCode",{parentName:"li"},"api")," all imported (and generated above) classes\u2014\xa0in this case ",(0,l.kt)("inlineCode",{parentName:"li"},"ComponentNimbus"),"."),(0,l.kt)("li",{parentName:"ul"},"The companion object ",(0,l.kt)("inlineCode",{parentName:"li"},"init")," block calls ",(0,l.kt)("inlineCode",{parentName:"li"},"withConfiguration")," as soon as ",(0,l.kt)("inlineCode",{parentName:"li"},"AppNimbus")," is used. ",(0,l.kt)("inlineCode",{parentName:"li"},"withConfiguration")," is a new method on ",(0,l.kt)("inlineCode",{parentName:"li"},"FeatureHolder")," which provides an alternative ",(0,l.kt)("inlineCode",{parentName:"li"},"create")," closure. It has to be public and is named as to appear after ",(0,l.kt)("inlineCode",{parentName:"li"},"value()")," in the list auto-completed identifiers offered by IDEs. The new configuration comes from merging the component default with the app default.")),(0,l.kt)("p",null,"So when ",(0,l.kt)("inlineCode",{parentName:"p"},"ComponentNimbus.features.messaging.value()")," is called, even from within the component itself, it returns configuration from the Nimbus SDK, and defaults from the app."))}f.isMDXComponent=!0}}]);