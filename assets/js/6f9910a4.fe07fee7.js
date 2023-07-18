"use strict";(self.webpackChunkexperimenter_docs=self.webpackChunkexperimenter_docs||[]).push([[9438],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,f=d["".concat(o,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(f,l(l({ref:t},u),{},{components:n})):a.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[d]="string"==typeof e?e:i,l[1]=s;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7797:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={id:"fm-unimplemented-spec",title:"Proposed changes for Feature Manifest Language",slug:"/fm-unimplemented-spec"},l=void 0,s={unversionedId:"deep-dives/specifications/fml/fm-unimplemented-spec",id:"deep-dives/specifications/fml/fm-unimplemented-spec",title:"Proposed changes for Feature Manifest Language",description:"Future specifications",source:"@site/docs/deep-dives/specifications/fml/fm-unimplemented-spec.mdx",sourceDirName:"deep-dives/specifications/fml",slug:"/fm-unimplemented-spec",permalink:"/fm-unimplemented-spec",draft:!1,editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/deep-dives/specifications/fml/fm-unimplemented-spec.mdx",tags:[],version:"current",frontMatter:{id:"fm-unimplemented-spec",title:"Proposed changes for Feature Manifest Language",slug:"/fm-unimplemented-spec"},sidebar:"sidebar",previous:{title:"Co-enrolling Features",permalink:"/fml/coenrolling-features"},next:{title:"Nimbus FML command line interface",permalink:"/fml-cli"}},o={},p=[{value:"Future specifications",id:"future-specifications",level:2},{value:"Feature defaults and runtime targeting",id:"feature-defaults-and-runtime-targeting",level:3},{value:"Types coerced from <code>String</code>",id:"types-coerced-from-string",level:3},{value:"Variables and fields with no defaults",id:"variables-and-fields-with-no-defaults",level:2},{value:"Required fields",id:"required-fields",level:3},{value:"Failable features",id:"failable-features",level:3},{value:"Imports and Includes",id:"imports-and-includes",level:2},{value:"Unclear/scope\u2013creep/YAGNI",id:"unclearscopecreepyagni",level:4},{value:"Connecting to different languages or contexts",id:"connecting-to-different-languages-or-contexts",level:4}],u={toc:p},d="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"future-specifications"},"Future specifications"),(0,i.kt)("p",null,"This document houses a number of proposals not ready for comment. They are not linked to from the spec."),(0,i.kt)("h3",{id:"feature-defaults-and-runtime-targeting"},"Feature defaults and runtime targeting"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f Unimplemented. This is intended to use the same JEXL targeting used elsewhere in Nimbus SDK.")),(0,i.kt)("p",null,"Occasionally, we would like to vary a configuration based upon the device. In this example, the ",(0,i.kt)("inlineCode",{parentName:"p"},"homepage")," feature has sections for both Pocket and Topsites."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"features:\n  homepage:\n    variables:\n      pocket-enabled:\n        description: If true, show stories from Pocket. This is only available in certain territories.\n        type: Bool\n        default: false\n      topsites-enabled:\n        description: If true, show tiles from the users most recent and frequently visited pages.\n        type: Bool\n        default: false\n    defaults:\n      - channel: nightly\n        value: { topsites-enabled: true }\n      - channel: nightly\n        targeting: locale in ['en-US', 'de-DE', 'en-GB']\n        value: { pocket-enabled: true }\n")),(0,i.kt)("p",null,"In this example, ",(0,i.kt)("inlineCode",{parentName:"p"},"pocket-enabled")," defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," only on the ",(0,i.kt)("inlineCode",{parentName:"p"},"nightly")," channel and when the device locale is in ",(0,i.kt)("inlineCode",{parentName:"p"},"US"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"DE")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"GB"),"."),(0,i.kt)("h3",{id:"types-coerced-from-string"},"Types coerced from ",(0,i.kt)("inlineCode",{parentName:"h3"},"String")),(0,i.kt)("p",null,"We have already seen enums being declared in the ",(0,i.kt)("inlineCode",{parentName:"p"},"types")," section of the manifest."),(0,i.kt)("p",null,"Other types that may be derived from ",(0,i.kt)("inlineCode",{parentName:"p"},"String"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Color")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"URL"))),(0,i.kt)("h2",{id:"variables-and-fields-with-no-defaults"},"Variables and fields with no defaults"),(0,i.kt)("h3",{id:"required-fields"},"Required fields"),(0,i.kt)("p",null,"Some object fields do not have a sensible default value, but without them, the object itself doesn't make sense."),(0,i.kt)("p",null,"For example a ",(0,i.kt)("inlineCode",{parentName:"p"},"MessageItem")," doesn't make sense unless it has a ",(0,i.kt)("inlineCode",{parentName:"p"},"message")," and a ",(0,i.kt)("inlineCode",{parentName:"p"},"deeplink"),". Where any required fields are missing from the JSON, the ",(0,i.kt)("inlineCode",{parentName:"p"},"MessageItem")," is incomplete, and cannot be used."),(0,i.kt)("p",null,"Incomplete objects cannot be included in maps, lists or optional types."),(0,i.kt)("p",null,"In this case, a message surface is added to the ",(0,i.kt)("inlineCode",{parentName:"p"},"new-tab"),", but isn't always needed to be displayed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"features:\n  new-tab:\n    variables:\n      message:\n        description: An optional message\n        type: MessageItem?\n        default: null\ntypes:\n  MessageItem:\n    description: \u2026\n    fields:\n      label:\n        type: String\n        required: true\n      deeplink:\n        type: String\n        required: true\n")),(0,i.kt)("p",null,"In these cases, the app code must deal with the cases with objects that are said to be failable, because there are no defaults."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"let newTabConfig = FxNimbus.features.newTab.value()\n\nif let message = newTabConfig.message {\n    // We have to check that the message exists, because the message may not exist.\n    displayMessage(message.label, message.deeplink)\n}\n\n// continue configuring the new tab.\n")),(0,i.kt)("h3",{id:"failable-features"},"Failable features"),(0,i.kt)("p",null,"Feature ",(0,i.kt)("inlineCode",{parentName:"p"},"variables")," may also be marked as ",(0,i.kt)("inlineCode",{parentName:"p"},"required"),". In the cases where these variables are missing, then the whole feature no longer makes sense."),(0,i.kt)("p",null,"Features with ",(0,i.kt)("inlineCode",{parentName:"p"},"required")," variables must be marked as ",(0,i.kt)("inlineCode",{parentName:"p"},"failable"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"features:\n  emergency-startup-message:\n    failable: true\n    description: A message displayed to the user at start up.\n      variables:\n        message-content:\n          description: The long form message to be displayed to the user\n          type: String\n          required: true\n        color:\n          description: The background color of the screen\n          type: String\n          default: red\n")),(0,i.kt)("p",null,"Failable features are implemented as Optional. If the feature is incomplete or failed, then it is returned as ",(0,i.kt)("inlineCode",{parentName:"p"},"nil")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"guard let message = FxNimbus.features.emergencyStartupMessage else {\n    // phew, there is no emergency message.\n    return\n}\n")),(0,i.kt)("p",null,"Features with ",(0,i.kt)("inlineCode",{parentName:"p"},"required")," variables which should be marked ",(0,i.kt)("inlineCode",{parentName:"p"},"failable")," but aren't will produce an error."),(0,i.kt)("h2",{id:"imports-and-includes"},"Imports and Includes"),(0,i.kt)("h4",{id:"unclearscopecreepyagni"},"Unclear/scope\u2013creep/YAGNI"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The importing ",(0,i.kt)("inlineCode",{parentName:"li"},".fml.yaml")," file should not have access to types from the imported one."),(0,i.kt)("li",{parentName:"ul"},"The imported file may not have an ",(0,i.kt)("inlineCode",{parentName:"li"},"import")," list.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Eventually it might be necessary to have imported files recursively importing other files.\nImplementing this proposal will give an idea of how much extra complexity is required.")),(0,i.kt)("h4",{id:"connecting-to-different-languages-or-contexts"},"Connecting to different languages or contexts"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"import")," block does two different roles:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Giving ",(0,i.kt)("inlineCode",{parentName:"li"},"experimenter")," knowledge of the imported features."),(0,i.kt)("li",{parentName:"ol"},"Sending experimental configuration from the application singleton into the components.")),(0,i.kt)("p",null,"For features written in a different language, the feature configuration needs to travel across an FFI."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"import:\n    path:      @mozilla/gecko-dev/fenix.fml.yaml\n    channel:   production\n    connector: gecko-view\n    features:\n        autofill:\n            - value: {}\n")),(0,i.kt)("p",null,"Imports for the same connector are gathered up so we can get a ",(0,i.kt)("inlineCode",{parentName:"p"},"Map<String, JSONObject>")," containing configuration from the experiment (and the app-specific defaults) by calling:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"FxNimbus.connectors.geckoView.value()\n")),(0,i.kt)("p",null,"The app will need to send this to the right place, for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"val nimbus = Nimbus.shared\nnimbus.register(object : Nimbus.Observer {\n    fun onExperimentsApplied() {\n        val features: Map<String, JSONObject> = FxNimbus.connectors.geckoView.value()\n        geckoView.setNimbusFeatures(features)\n    }\n})\n")))}c.isMDXComponent=!0}}]);