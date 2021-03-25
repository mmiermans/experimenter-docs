(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{78:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return c}));var r=t(3),o=t(7),a=(t(0),t(92)),i={id:"migration-guide-desktop-frontend",title:"Migration guide for Desktop Front-end",slug:"/migration-guide-desktop-frontend"},s={unversionedId:"migration-guide-desktop-frontend",id:"migration-guide-desktop-frontend",isDocsHomePage:!1,title:"Migration guide for Desktop Front-end",description:"This guide will help you integrate ExperimentAPI.jsm in your Desktop front-end code to run Nimbus experiments, while still being able to use preferences for default values and local development.",source:"@site/docs/migration-guide-desktop-frontend.md",slug:"/migration-guide-desktop-frontend",permalink:"/experimenter-docs/migration-guide-desktop-frontend",editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/migration-guide-desktop-frontend.md",version:"current",sidebar:"sidebar",previous:{title:"Root Page",permalink:"/experimenter-docs/desktop-engineers"},next:{title:"Desktop Front-end testing",permalink:"/experimenter-docs/desktop-frontend-testing"}},l=[{value:"Register a new feature",id:"register-a-new-feature",children:[]},{value:"How to use an Experiment Feature",id:"how-to-use-an-experiment-feature",children:[]}],u={toc:l};function c(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This guide will help you integrate ",Object(a.b)("inlineCode",{parentName:"p"},"ExperimentAPI.jsm")," in your Desktop front-end code to run Nimbus experiments, while still being able to use preferences for default values and local development."),Object(a.b)("p",null,"In order to use ",Object(a.b)("inlineCode",{parentName:"p"},"ExperimentAPI.jsm")," your code must be able to import ",Object(a.b)("inlineCode",{parentName:"p"},"jsm"),"s in the parent process or a privileged child process."),Object(a.b)("h2",{id:"register-a-new-feature"},"Register a new feature"),Object(a.b)("p",null,'A feature is just some area of code instrumented for experiments \u2013 it can be as small as a single function or as complex as a whole about: page. You need to choose an identifier for your feature (e.g. "aboutnewtab").'),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},'// In ExperimentAPI.jsm\n\nconst MANIFEST = {\n  // Our feature name\n  aboutwelcome: {\n    description: "The about:welcome page",\n    // Control if the feature is on or off\n    enabledFallbackPref: "browser.aboutwelcome.enabled",\n    variables: {\n      // Additional (optional) values that we can control\n      // The name of these variables is up to you\n      skipFocus: {\n        type: "boolean",\n        fallbackPref: "browser.aboutwelcome.skipFocus",\n      },\n    },\n  },\n};\n\n// In firefox.js\npref("browser.aboutwelcome.enable", true);\npref("skipFocus", false);\n')),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"By setting fallback preferences for Nimbus features, you will be able to still run Normandy roll-outs and experiments while you are partially migrated. We do not recommend running Nimbus and Normandy experiments on the same feature/preference simultaneously.")),Object(a.b)("h2",{id:"how-to-use-an-experiment-feature"},"How to use an Experiment Feature"),Object(a.b)("p",null,"Import ",Object(a.b)("inlineCode",{parentName:"p"},"ExperimentFeature")," from ",Object(a.b)("inlineCode",{parentName:"p"},"ExperimentAPI.jsm")," and instantiate an instance"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},'XPCOMUtils.defineLazyGetter(this, "feature", () => {\n  const { ExperimentFeature } = ChromeUtils.import(\n    "resource://nimbus/ExperimentAPI.jsm",\n  );\n  // Here we use the same name we defined in the MANIFEST\n  return new ExperimentFeature("aboutwelcome");\n});\n')),Object(a.b)("p",null,"Access feature values:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"if (feature.isEnabled()) {\n  // Do something!\n  // This is controllbed by the `enabledFallbackPref` defined in the MANIFEST\n}\n\n// props: { skipFocus: boolean }\nconst props = feature.getValue();\nrenderSomeUI(props);\n")),Object(a.b)("p",null,"Defaults values inline:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"feature.isEnabled({ defaultValue: true });\n\nconst { skipFocus } = feature.getValue() || {};\n")),Object(a.b)("p",null,"Listen to changes:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"// Listen to changes, including to fallback prefs.\nfeature.on(() => {\n  updateUI(feature.getValue());\n});\n")),Object(a.b)("p",null,"For more examples and usecases please see the ",Object(a.b)("a",{parentName:"p",href:"https://docs.google.com/document/d/1ev75pG0nAM1lz53WuPQkWqykUlZMmZRbx8wzvvn5DhU/edit#heading=h.hvm8985z4f8s"},"SDK Docs"),"."))}c.isMDXComponent=!0},92:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),c=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),b=r,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||a;return t?o.a.createElement(m,s(s({ref:n},u),{},{components:t})):o.a.createElement(m,s({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=b;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=t[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);