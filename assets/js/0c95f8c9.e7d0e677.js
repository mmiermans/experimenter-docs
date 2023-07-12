"use strict";(self.webpackChunkexperimenter_docs=self.webpackChunkexperimenter_docs||[]).push([[3937],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>b});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),u=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=u(t.components);return a.createElement(d.Provider,{value:e},t.children)},s="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,d=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),s=u(n),g=r,b=s["".concat(d,".").concat(g)]||s[g]||m[g]||i;return n?a.createElement(b,l(l({ref:e},p),{},{components:n})):a.createElement(b,l({ref:e},p))}));function b(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=g;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o[s]="string"==typeof t?t:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},1042:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const i={id:"onboarding-feature-android",title:"Onboarding Feature for Android",slug:"/onboarding-feature-android"},l="Introduction",o={unversionedId:"onboarding/onboarding-feature-android",id:"onboarding/onboarding-feature-android",title:"Onboarding Feature for Android",description:"The onboarding feature enables experimentation with the 'new user onboarding flow'. The onboarding flow is presented to the user on each new install and is made up of a series of full screen 'views', referred to as 'cards'. The purpose of the onboarding flow is to enable the user to configure a small number of app enhancing settings. Each card provides context for each setting and the ability to enable/skip.",source:"@site/docs/onboarding/onboarding-feature-android.md",sourceDirName:"onboarding",slug:"/onboarding-feature-android",permalink:"/onboarding-feature-android",draft:!1,editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/onboarding/onboarding-feature-android.md",tags:[],version:"current",frontMatter:{id:"onboarding-feature-android",title:"Onboarding Feature for Android",slug:"/onboarding-feature-android"},sidebar:"sidebar",previous:{title:"Behavioral Targeting",permalink:"/mobile-behavioral-targeting"},next:{title:"Onboarding Feature for iOS",permalink:"/onboarding-feature-ios"}},d={},u=[{value:"Existing default card",id:"existing-default-card",level:4},{value:"Experimenter card config",id:"experimenter-card-config",level:4},{value:"Output (the merged result of the existing card and experiment card)",id:"output-the-merged-result-of-the-existing-card-and-experiment-card",level:4},{value:"Card types",id:"card-types",level:2},{value:"String resources",id:"string-resources",level:2},{value:"Image resources",id:"image-resources",level:2},{value:"Campaign - Default (Illustrations)",id:"campaign---default-illustrations",level:3},{value:"Campaign - Lifestyle (Photographic)",id:"campaign---lifestyle-photographic",level:3},{value:"Default cards overview",id:"default-cards-overview",level:2},{value:"Default browser card",id:"default-browser-card",level:3},{value:"Sync card",id:"sync-card",level:3},{value:"Notification card",id:"notification-card",level:3}],p={toc:u},s="wrapper";function m(t){let{components:e,...n}=t;return(0,r.kt)(s,(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"The onboarding feature enables experimentation with the 'new user onboarding flow'. The onboarding flow is presented to the user on each new install and is made up of a series of full screen 'views', referred to as '",(0,r.kt)("strong",{parentName:"p"},"cards"),"'. The purpose of the onboarding flow is to enable the user to configure a small number of app enhancing settings. Each card provides context for each setting and the ability to enable/skip."),(0,r.kt)("p",null,"The onboarding feature enables staff \u2014 most likely experiment owners, product owners, user research and marketing teams to customize each card's:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"title copy"),(0,r.kt)("li",{parentName:"ul"},"body copy"),(0,r.kt)("li",{parentName:"ul"},"imagery"),(0,r.kt)("li",{parentName:"ul"},"button copy"),(0,r.kt)("li",{parentName:"ul"},"sequencing")),(0,r.kt)("h1",{id:"about-this-document"},"About this document"),(0,r.kt)("p",null,"This document is a guide for staff who wish to configure the new user onboarding flow through the experimenter interface."),(0,r.kt)("p",null,"It is also a living document:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the onboarding feature may be under active development"),(0,r.kt)("li",{parentName:"ul"},"card types may be added"),(0,r.kt)("li",{parentName:"ul"},"card attributes may be added ")),(0,r.kt)("h1",{id:"scene-setting"},"Scene setting"),(0,r.kt)("p",null,"The onboarding feature is built on top of Nimbus, Mozilla's experimentation platform. Nimbus allows you to send bits of configuration to application features from Experimenter, the web-application staff use to launch and manage experiments and rollouts."),(0,r.kt)("p",null,"Using Experimenter in the general case is documented elsewhere, so this document is specifically concerned with configuring the onboarding feature. ",(0,r.kt)("a",{parentName:"p",href:"https://experimenter.services.mozilla.com/nimbus/lifestyles-images-onboarding-experiment/summary"},"Example experiment")),(0,r.kt)("h1",{id:"references"},"References"),(0,r.kt)("p",null,"For the most up-to-date configurations, the main code base will always be the best place to check."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/mozilla-mobile/firefox-android/blob/main/fenix/app/nimbus.fml.yaml"},"Nimbus manifest")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/mozilla-mobile/firefox-android/blob/main/fenix/app/onboarding.fml.yaml"},"onboarding feature manifest"))),(0,r.kt)("p",null,"\u26a0\ufe0f The onboarding feature is a ",(0,r.kt)("strong",{parentName:"p"},"first run experiment"),". "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://experimenter.info/mobile-first-run-experiments"},"for information on first run experiment"))),(0,r.kt)("h1",{id:"creating-an-experiment"},"Creating an experiment"),(0,r.kt)("p",null,"Only ",(0,r.kt)("strong",{parentName:"p"},"values that differ")," from the default card(s) needs providing by the Experimenter. E.g:"),(0,r.kt)("h4",{id:"existing-default-card"},"Existing default card"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "cards":{\n      "default-browser":{\n         "card-type":"default-browser",\n         "title":"juno_onboarding_default_browser_title_nimbus",\n         "ordering":10,\n         "body":"juno_onboarding_default_browser_description_nimbus",\n         "link-text":"juno_onboarding_default_browser_description_link_text",\n         "image-res":"ic_onboarding_welcome",\n         "image-is-illustration":true,\n         "primary-button-label":"juno_onboarding_default_browser_positive_button",\n         "secondary-button-label":"juno_onboarding_default_browser_negative_button"\n      }\n   }\n}\n\n')),(0,r.kt)("h4",{id:"experimenter-card-config"},"Experimenter card config"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "cards":{\n      "default-browser":{\n         "image-res":"onboarding_default_browser",\n         "image-is-illustration":false\n      }\n   }\n}\n\n')),(0,r.kt)("h4",{id:"output-the-merged-result-of-the-existing-card-and-experiment-card"},"Output (the merged result of the existing card and experiment card)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},' "cards":{\n      "default-browser":{\n         "card-type":"default-browser",\n         "title":"juno_onboarding_default_browser_title_nimbus",\n         "ordering":10,\n         "body":"juno_onboarding_default_browser_description_nimbus",\n         "link-text":"juno_onboarding_default_browser_description_link_text",\n         "image-res":"onboarding_default_browser",\n         "image-is-illustration":false,\n         "primary-button-label":"juno_onboarding_default_browser_positive_button",\n         "secondary-button-label":"juno_onboarding_default_browser_negative_button"\n      }\n   }\n')),(0,r.kt)("h1",{id:"card-definition"},"Card definition"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"card-type"),(0,r.kt)("td",{parentName:"tr",align:null},"Card Type"),(0,r.kt)("td",{parentName:"tr",align:null},"The type of the card"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#card-types"},"See defined cards types"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"title"),(0,r.kt)("td",{parentName:"tr",align:null},"Free text  or   Resource ID"),(0,r.kt)("td",{parentName:"tr",align:null},"The title text displayed to the user"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"body"),(0,r.kt)("td",{parentName:"tr",align:null},"Free text  or  Resource ID"),(0,r.kt)("td",{parentName:"tr",align:null},"The message text displayed to the user"),(0,r.kt)("td",{parentName:"tr",align:null},"May contain linkable text")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"link-text (optional)"),(0,r.kt)("td",{parentName:"tr",align:null},"Free text or  Resource ID"),(0,r.kt)("td",{parentName:"tr",align:null},"The text to link from the \u2018body\u2019 text"),(0,r.kt)("td",{parentName:"tr",align:null},"Must match the linkable text from the \u2018body\u2019 exactly e.g. body: This is a policy link, link-text: policy link")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"image-res"),(0,r.kt)("td",{parentName:"tr",align:null},"Resource ID"),(0,r.kt)("td",{parentName:"tr",align:null},"The resource ID of the image to be displayed"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"image-is-illustration"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"True if the image type is an illustration"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ordering"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Used to sequence the cards"),(0,r.kt)("td",{parentName:"tr",align:null},"The system used for ordering is counting in tens, e.g. 10, 20, 30\u2026")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"primary-button-label"),(0,r.kt)("td",{parentName:"tr",align:null},"Free text  or  Resource ID"),(0,r.kt)("td",{parentName:"tr",align:null},"The text to display on the primary button"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"secondary-button-label"),(0,r.kt)("td",{parentName:"tr",align:null},"Free text or  Resource ID"),(0,r.kt)("td",{parentName:"tr",align:null},"The text to display on the secondary button"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"card-types"},"Card types"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"default-browser"),(0,r.kt)("li",{parentName:"ul"},"sync-sign-in"),(0,r.kt)("li",{parentName:"ul"},"notification-permission")),(0,r.kt)("h1",{id:"default-cards"},"Default cards"),(0,r.kt)("p",null,"By default, the app is bundled with a collection of pre-defined cards which will be used if no other configuration is provided for the cards. See the ",(0,r.kt)("a",{parentName:"p",href:"#default-cards-overview"},"appendix")," for an overview of the default cards or the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mozilla-mobile/firefox-android/blob/bfb1acebe37ea6fcff80d12f4084a54bb8a6cd1a/fenix/app/onboarding.fml.yaml#L4"},"code")," the most up-to-date configuration. "),(0,r.kt)("h1",{id:"available-resources"},"Available resources"),(0,r.kt)("h2",{id:"string-resources"},"String resources"),(0,r.kt)("p",null,"All existing app strings are available to Experimenter. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mozilla-mobile/firefox-android/blob/main/fenix/app/src/main/res/values/strings.xml"},"See the full list here"),".\nFree text may also be used instead of a string resource."),(0,r.kt)("p",null,"\u26a0\ufe0f Localization of ",(0,r.kt)("strong",{parentName:"p"},"Free Text")," is not currently supported."),(0,r.kt)("h2",{id:"image-resources"},"Image resources"),(0,r.kt)("h3",{id:"campaign---default-illustrations"},"Campaign - Default (Illustrations)"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Card type"),(0,r.kt)("th",{parentName:"tr",align:null},"Resource ID"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"default-browser"),(0,r.kt)("td",{parentName:"tr",align:null},"ic_onboarding_welcome")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sync-sign-in"),(0,r.kt)("td",{parentName:"tr",align:null},"ic_onboarding_sync")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"notification-permission"),(0,r.kt)("td",{parentName:"tr",align:null},"ic_notification_permission")))),(0,r.kt)("h3",{id:"campaign---lifestyle-photographic"},"Campaign - Lifestyle (Photographic)"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Card type"),(0,r.kt)("th",{parentName:"tr",align:null},"Resource ID"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"default-browser"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://raw.githubusercontent.com/mozilla-mobile/firefox-android/main/fenix/app/src/main/res/drawable-xxhdpi/onboarding_default_browser.webp"},"onboarding_default_browser"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sync-sign-in"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://raw.githubusercontent.com/mozilla-mobile/firefox-android/main/fenix/app/src/main/res/drawable-xxhdpi/onboarding_sync.webp"},"onboarding_sync"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"notification-permission"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://raw.githubusercontent.com/mozilla-mobile/firefox-android/main/fenix/app/src/main/res/drawable-xxhdpi/onboarding_notification.webp"},"onboarding_notification"))))),(0,r.kt)("h1",{id:"appendix"},"Appendix"),(0,r.kt)("h2",{id:"default-cards-overview"},"Default cards overview"),(0,r.kt)("h3",{id:"default-browser-card"},"Default browser card"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"card-type"),(0,r.kt)("td",{parentName:"tr",align:null},"default-browser")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"title"),(0,r.kt)("td",{parentName:"tr",align:null},"juno_onboarding_default_browser_title_nimbus")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"body"),(0,r.kt)("td",{parentName:"tr",align:null},"juno_onboarding_default_browser_description_nimbus")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"link-text (optional)"),(0,r.kt)("td",{parentName:"tr",align:null},"juno_onboarding_default_browser_description_link_text")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"image-res"),(0,r.kt)("td",{parentName:"tr",align:null},"ic_onboarding_welcome")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"image-is-illustration"),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ordering"),(0,r.kt)("td",{parentName:"tr",align:null},"10")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"primary-button-label"),(0,r.kt)("td",{parentName:"tr",align:null},"juno_onboarding_default_browser_positive_button")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"secondary-button-label"),(0,r.kt)("td",{parentName:"tr",align:null},"juno_onboarding_default_browser_negative_button")))),(0,r.kt)("h3",{id:"sync-card"},"Sync card"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"card-type"),(0,r.kt)("td",{parentName:"tr",align:null},"sync-sign-in")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"title"),(0,r.kt)("td",{parentName:"tr",align:null},"juno_onboarding_sign_in_title")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"body"),(0,r.kt)("td",{parentName:"tr",align:null},"juno_onboarding_sign_in_description")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"link-text (optional)"),(0,r.kt)("td",{parentName:"tr",align:null},"null")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"image-res"),(0,r.kt)("td",{parentName:"tr",align:null},"ic_onboarding_sync")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"image-is-illustration"),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ordering"),(0,r.kt)("td",{parentName:"tr",align:null},"20")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"primary-button-label"),(0,r.kt)("td",{parentName:"tr",align:null},"juno_onboarding_sign_in_positive_button")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"secondary-button-label"),(0,r.kt)("td",{parentName:"tr",align:null},"juno_onboarding_sign_in_negative_button")))),(0,r.kt)("h3",{id:"notification-card"},"Notification card"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"card-type"),(0,r.kt)("td",{parentName:"tr",align:null},"notification-permission")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"title"),(0,r.kt)("td",{parentName:"tr",align:null},"juno_onboarding_enable_notifications_title_nimbus")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"body"),(0,r.kt)("td",{parentName:"tr",align:null},"juno_onboarding_enable_notifications_description_nimbus")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"link-text (optional)"),(0,r.kt)("td",{parentName:"tr",align:null},"juno_onboarding_default_browser_description_link_text")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"image-res"),(0,r.kt)("td",{parentName:"tr",align:null},"ic_notification_permission")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"image-is-illustration"),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ordering"),(0,r.kt)("td",{parentName:"tr",align:null},"30")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"primary-button-label"),(0,r.kt)("td",{parentName:"tr",align:null},"juno_onboarding_enable_notifications_positive_button")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"secondary-button-label"),(0,r.kt)("td",{parentName:"tr",align:null},"juno_onboarding_enable_notifications_negative_button")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"secondary-button-label"),(0,r.kt)("td",{parentName:"tr",align:null},"juno_onboarding_sign_in_negative_button")))))}m.isMDXComponent=!0}}]);