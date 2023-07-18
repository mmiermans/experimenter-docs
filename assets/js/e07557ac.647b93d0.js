"use strict";(self.webpackChunkexperimenter_docs=self.webpackChunkexperimenter_docs||[]).push([[1279],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),h=i,d=m["".concat(s,".").concat(h)]||m[h]||c[h]||r;return n?a.createElement(d,o(o({ref:t},p),{},{components:n})):a.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6430:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var a=n(7462),i=(n(7294),n(3905));const r={id:"mobile-feature-api",title:"Feature API",slug:"/mobile-feature-api"},o="Feature Variables and Me",l={unversionedId:"deep-dives/mobile/mobile-feature-api",id:"deep-dives/mobile/mobile-feature-api",title:"Feature API",description:"About this document",source:"@site/docs/deep-dives/mobile/feature-variables-and-me.md",sourceDirName:"deep-dives/mobile",slug:"/mobile-feature-api",permalink:"/mobile-feature-api",draft:!1,editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/deep-dives/mobile/feature-variables-and-me.md",tags:[],version:"current",frontMatter:{id:"mobile-feature-api",title:"Feature API",slug:"/mobile-feature-api"},sidebar:"sidebar",previous:{title:"Enrollment State Machine",permalink:"/mobile-enrollment-state-machine"},next:{title:"First Run Experiments",permalink:"/mobile-first-run-experiments"}},s={},u=[{value:"About this document",id:"about-this-document",level:2},{value:"Document status",id:"document-status",level:3},{value:"Introduction",id:"introduction",level:2},{value:"Fundamental types: Strings, Int, Bool",id:"fundamental-types-strings-int-bool",level:3},{value:"Everything is optional",id:"everything-is-optional",level:3},{value:"Text resources",id:"text-resources",level:3},{value:"\ud83d\udcf7 Image resources",id:"-image-resources",level:3},{value:"Making JSON more manageable",id:"making-json-more-manageable",level:2},{value:"Structural types",id:"structural-types",level:3},{value:"Enumerations of values",id:"enumerations-of-values",level:3},{value:"Recording exposure events",id:"recording-exposure-events",level:2},{value:"Using configurable features to experiment with another",id:"using-configurable-features-to-experiment-with-another",level:2},{value:"The exception to the rule...",id:"the-exception-to-the-rule",level:3},{value:"\ud83d\udd27\u2699\ufe0f Working with configurable features",id:"\ufe0f-working-with-configurable-features",level:2}],p={toc:u},m="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"feature-variables-and-me"},"Feature Variables and Me"),(0,i.kt)("h2",{id:"about-this-document"},"About this document"),(0,i.kt)("p",null,"This document is to illustrate the concepts of the Feature Variables feature of Nimbus, internally known as the Feature API."),(0,i.kt)("p",null,"The API used by software engineers is relatively small, so this document is not just for them. This document is also for designers, product managers and engineering managers who design, work on, and are responsible for features in the mobile apps we build. Successful experimentation requires multiple parts of the team to share an understanding of these concepts."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\ud83d\udc4b Information"),(0,i.kt)("p",{parentName:"blockquote"},"Neither Nimbus, nor all of the Feature Variables work are finished yet, but they are certainly still useful. This document will talk about features that aren't yet implemented, but will serve to illustrate the concepts. A sidebar like this will tell you when a feature isn't ready.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u26c5\ufe0f\ud83d\udd2c\ud83d\udd2d Nomenclature"),(0,i.kt)("p",{parentName:"blockquote"},'Much of the literature around the methodology of experiments Nimbus implements has its roots in medical testing. The feature variables API does not require understanding of double blind experiments or data-science, but this document will occasionally use words like "treatment" or "exposure".')),(0,i.kt)("h3",{id:"document-status"},"Document status"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note: The code in this document still works, but is ",(0,i.kt)("em",{parentName:"strong"},"not")," the supported way of interacting with the Nimbus Feature API.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"This document is still useful for the concepts. The ",(0,i.kt)("a",{parentName:"strong",href:"fml-spec"},"Feature Manifest Language specification")," would be the best place for engineers to go having read this document.")),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,'The "Feature" in the "Feature Variables API" refers to features of the application. It\'s pretty abstract, and how the application is divided up into features is up to the product teams. Over time, a feature may be involved in many experiments.'),(0,i.kt)("p",null,"We can be more specific here:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u26c5\ufe0f\ud83d\udd2c\ud83d\udd2d Concept"),(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"A feature is an identifiable part of the app in which a change might be detectable by a user"),".")),(0,i.kt)("p",null,"However, there is one rule:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u26c5\ufe0f\ud83d\udd2c\ud83d\udd2d Concept"),(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"For a given user each feature can only be involved in one experiment at a time"),"."),(0,i.kt)("p",{parentName:"blockquote"},"If we see user change behavior after being exposed to an experimental treatment we need to be able to attribute it to that treatment, not another from a different experiment."),(0,i.kt)("p",{parentName:"blockquote"},"There is one exception to this rule, which we will discuss ",(0,i.kt)("a",{parentName:"p",href:"#the-exception-to-the-rule"},"later"))),(0,i.kt)("p",null,"One easy way to start thinking about features, would be to identify user-visible surfaces of the app: the ",(0,i.kt)("inlineCode",{parentName:"p"},"new-tab")," screen, the ",(0,i.kt)("inlineCode",{parentName:"p"},"app-menu"),", the ",(0,i.kt)("inlineCode",{parentName:"p"},"context-menu"),", the ",(0,i.kt)("inlineCode",{parentName:"p"},"onboarding"),"."),(0,i.kt)("p",null,"Imagine you're a designer, doing a re-design of the app's menu. It would be natural to call the app menu a \"feature\" of the app."),(0,i.kt)("p",null,"You've got some hypotheses around the icons, and whether they should be to right or left of the text. There is also some uncertainty around the copy for each menu item."),(0,i.kt)("p",null,"The uncertainties and hypotheses you have might translate into variations and variables you might configure the menu with. If these variables and variations are documented, they should travel as an adjunct to or part of the design itself. Later these will be turned into a more formal document that lives with the code, but it is at this stage when they should be thought about."),(0,i.kt)("p",null,"To narrow the scope for documentation purposes, we'll focus on a small number of variables. Within the ",(0,i.kt)("inlineCode",{parentName:"p"},"app-menu")," feature, we'll consider the menu being made up of menu items, and we'll zoom in on the settings menu item."),(0,i.kt)("p",null,"As a team communication tool, it may help to consider a JSON object to enumerate the variables that are configurable for the settings icon, and their defaults."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "settings-menu-item-title": "Settings",\n    "settings-menu-item-icon": "ic_settings",\n    "settings-menu-item-enabled": true,\n    "settings-menu-item-action": "firefox://settings"\n}\n')),(0,i.kt)("p",null,"This JSON object looks like what experimenters will be putting into branch configuration screens in Experimenter, under Feature Configuration."),(0,i.kt)("p",null,"Where did these keys come from? This is not up to Nimbus, but up to the app, i.e. the app team. In this hypothetical case, you have some theories about the title and the icon, and now the app needs to get those values from nimbus."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u26c5\ufe0f\ud83d\udd2c\ud83d\udd2d  Naming Convention"),(0,i.kt)("p",{parentName:"blockquote"},"Nimbus doesn't take a view on how you arrange the JSON, but by convention, like all other identifiers, it prefers kebab-case (i.e. lower-case-words-joined-with-dashes).")),(0,i.kt)("p",null,"In the app code, the ",(0,i.kt)("inlineCode",{parentName:"p"},"Variables")," object is a wrapper around this JSON object, and we have a number of getters to get values out. Notice that all getters return optional types, so it is up to the app developer to provide a default value."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'let variables = nimbus.getVariables("app-menu")\nlet action: String = variables.getString("settings-menu-item-action") ?? "firefox://settings"\nlet title: String = variables.getText("settings-menu-item-title") ?? Strings.AppMenuSettingsTitle\nlet icon: UIImage = variables.getImage("settings-menu-item-icon") ?? UIImage(named: "icon-photon-gear")\nlet isEnabled: Bool = variables.getBool("settings-menu-item-enabled") ?? true\n')),(0,i.kt)("p",null,"It is a similar story in Kotlin:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'val variables = nimbus.getVariables("app-menu")\nval action: String = variables.getString("settings-menu-item-action") ?: "firefox://settings"\nval title: String = variables.getText("settings-menu-item-title") ?: context.getString(R.string.app_menu_settings_title)\nval icon: Drawable = variables.getDrawable("settings-menu-item-icon") ?: context.getDrawable(R.drawable.ic_settings)\nval isEnabled: Bool = variables.getBool("settings-menu-item-enabled") ?? true\n')),(0,i.kt)("p",null,"A few things to talk about here:"),(0,i.kt)("h3",{id:"fundamental-types-strings-int-bool"},"Fundamental types: Strings, Int, Bool"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"getString(key)"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"getBool(key)")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"getInt(key)")," all return values as found in the JSON. If there is a disagreement about types, i.e. if the app is expecting a string, and the value in the JSON is an integer, the app gets ",(0,i.kt)("inlineCode",{parentName:"p"},"nil")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,i.kt)("h3",{id:"everything-is-optional"},"Everything is optional"),(0,i.kt)("p",null,"If the app asks for a variable that is not specified in this particular experiment, then it gets back ",(0,i.kt)("inlineCode",{parentName:"p"},"nil")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,i.kt)("p",null,"It is thus imperative that the app has a reasonable default. On the other hand, this allows us to have experiments which configure only small parts of a feature."),(0,i.kt)("h3",{id:"text-resources"},"Text resources"),(0,i.kt)("p",null,"In the example above, the title uses ",(0,i.kt)("inlineCode",{parentName:"p"},"getText()"),". This gets a string value with ",(0,i.kt)("inlineCode",{parentName:"p"},"getString()"),". The value is then used as a key to look up the app resource string."),(0,i.kt)("p",null,"For example, on Android: ",(0,i.kt)("inlineCode",{parentName:"p"},'getText("settings-menu-item-title")')," may get a string from the JSON ",(0,i.kt)("inlineCode",{parentName:"p"},'"app_menu_settings_title"'),", which is then resolves to ",(0,i.kt)("inlineCode",{parentName:"p"},"R.string.app_menu_settings_title")," which is then used to look up the String in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Resources"),"."),(0,i.kt)("p",null,"On iOS, ",(0,i.kt)("inlineCode",{parentName:"p"},"getText")," uses a similar process via ",(0,i.kt)("inlineCode",{parentName:"p"},"LocalizedString")," to look up the translated strings. You can specify the ",(0,i.kt)("inlineCode",{parentName:"p"},"tableName")," as well as the ",(0,i.kt)("inlineCode",{parentName:"p"},"key")," in the single value by joining it with a slash."),(0,i.kt)("p",null,"For example, ",(0,i.kt)("inlineCode",{parentName:"p"},'getText("settings-menu-item-title")')," may get a string from the JSON ",(0,i.kt)("inlineCode",{parentName:"p"},'"AppMenu/SettingsTitle"')," which uses ",(0,i.kt)("inlineCode",{parentName:"p"},'bundle.localizedString("SettingsTitle", tableName: "AppMenu")')," to look up a localized string. If the app doesn't use ",(0,i.kt)("inlineCode",{parentName:"p"},"tableName"),", then you can omit it: e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"AppMenu_SettingsTitle")," would look for ",(0,i.kt)("inlineCode",{parentName:"p"},'NSLocalizedString("AppMenu_SettingsTitle")'),"."),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"getString()")," returned a string, and the resource lookup didn't succeed, ",(0,i.kt)("inlineCode",{parentName:"p"},"getText()")," falls back to the string."),(0,i.kt)("p",null,"This means that you can use either pre-translated strings to try out experiments across locales, or target your experiment on a single language."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\ud83c\udf9b Configuration"),(0,i.kt)("p",{parentName:"blockquote"},"Resource lookup via ",(0,i.kt)("inlineCode",{parentName:"p"},"Bundle")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Context")," uses the objects passed to nimbus at construction time at app-startup. In Firefox for iOS and Fenix this is ",(0,i.kt)("inlineCode",{parentName:"p"},"Bundle.main")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"context.applicationContext")," respectively.")),(0,i.kt)("h3",{id:"-image-resources"},"\ud83d\udcf7 Image resources"),(0,i.kt)("p",null,"In the example above, the ",(0,i.kt)("inlineCode",{parentName:"p"},"icon")," uses ",(0,i.kt)("inlineCode",{parentName:"p"},"getImage()")," and its Android analog ",(0,i.kt)("inlineCode",{parentName:"p"},"getDrawable()"),". This gets a string value from the JSON with ",(0,i.kt)("inlineCode",{parentName:"p"},"getString()")," and then uses that value to look up the pre-bundled resource."),(0,i.kt)("p",null,"For example on Android: ",(0,i.kt)("inlineCode",{parentName:"p"},'getDrawable("settings-menu-item-icon")')," uses ",(0,i.kt)("inlineCode",{parentName:"p"},'getString("settings-menu-item-icon")')," which might get the value ",(0,i.kt)("inlineCode",{parentName:"p"},'"ic_settings"')," from JSON. This is then resolved to ",(0,i.kt)("inlineCode",{parentName:"p"},"R.drawable.ic_settings"),", which is then resolved to ",(0,i.kt)("inlineCode",{parentName:"p"},"context.resources.getDrawable(R.drawable.ic_settings)"),"."),(0,i.kt)("p",null,"On iOS: ",(0,i.kt)("inlineCode",{parentName:"p"},'getImage("settings-menu-item-icon")')," uses ",(0,i.kt)("inlineCode",{parentName:"p"},'getString("settings-menu-item-icon")')," which might get the value ",(0,i.kt)("inlineCode",{parentName:"p"},'"icon_photon_gear"'),", which is then used to get the named ",(0,i.kt)("inlineCode",{parentName:"p"},"UIImage")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"UIImage(named:in:)"),"."),(0,i.kt)("h2",{id:"making-json-more-manageable"},"Making JSON more manageable"),(0,i.kt)("p",null,"We focused on the settings menu item in the above example, as a way of making a small enough example to reason about in this documentation, but it made for some very long variable names. The ",(0,i.kt)("inlineCode",{parentName:"p"},"Variables")," object has itself a ",(0,i.kt)("inlineCode",{parentName:"p"},"getVariables(key: String)")," method to make navigating the JSON more easily. This in turn allows the JSON to be organized in different ways."),(0,i.kt)("p",null,"Zooming out of our example above, which had just one menu item: we can re-arrange the JSON to accommodate multiple menu items, with a simpler nested structure:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "settings": {\n        "icon": "ic_settings",\n        "title": "Settings",\n        "action": "firefox://settings",\n        "enabled": true\n    },\n    "bookmarks": {\n        "icon": "ic_bookmarks",\n        "title": "View Bookmarks",\n        "action": "firefox://bookmark_list",\n        "enabled": true\n    },\n    "history": {\n        "icon": "ic_history",\n        "title": "View History",\n        "action": "firefox://history_list",\n        "enabled": true\n    }\n}\n')),(0,i.kt)("p",null,"This might be accessed in Kotlin with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'val menuVariables = nimbus.getVariables("app-menu")\nvar settingsItem = menuVariables.getVariables("settings").let { vars ->\n    val action: String = vars?.getString("action") ?: "firefox://settings"\n    val title: String = vars?.getText("title") ?: context.getString(R.string.app_menu_settings_title)\n    val icon: Drawable = vars?.getDrawable("icon") ?: context.getDrawable(R.drawable.ic_settings)\n\n    MenuItem(icon, title, action)\n}\n')),(0,i.kt)("p",null,"In Swift:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'let menuVariables = nimbus.getVariables("app-menu")\nlet settingsItem = menuVariables.getVariables("settings") { vars ->\n    let action: String = vars?.getString("action") ?? "firefox://settings"\n    let title: String = vars?.getText("title") ?? Strings.AppMenuSettingsTitle\n    let icon: UIImage = vars?.getImage("icon") ?? UIImage(named: "icon-photon-gear")\n    let isEnabled: Bool = vars?.getBool("enabled") ?? true\n\n    MZMenuItem(icon: icon, title: title, action: action)\n}\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\ud83d\udc4b Information"),(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"variables.getVariables()")," can be arbitrarily deep. ",(0,i.kt)("inlineCode",{parentName:"p"},"variables.getVariables()")," returns an optional ",(0,i.kt)("inlineCode",{parentName:"p"},"Variables")," object.")),(0,i.kt)("h3",{id:"structural-types"},"Structural types"),(0,i.kt)("p",null,"Lists and dictionary types are supported for every type."),(0,i.kt)("p",null,"For example: ",(0,i.kt)("inlineCode",{parentName:"p"},"getStringList(key)")," returns an list of ",(0,i.kt)("inlineCode",{parentName:"p"},"String"),"s (",(0,i.kt)("inlineCode",{parentName:"p"},"[String]?")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"List<String>?"),"). ",(0,i.kt)("inlineCode",{parentName:"p"},"getIntMap(key)")," returns a ",(0,i.kt)("inlineCode",{parentName:"p"},"[String: Int]?")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Map<String, Int>?"),". Getting a ",(0,i.kt)("inlineCode",{parentName:"p"},"Map")," of anything will always have a key type ",(0,i.kt)("inlineCode",{parentName:"p"},"String"),"."),(0,i.kt)("p",null,"This includes nested variables and enums."),(0,i.kt)("p",null,"For example, we may have configured a feature to accept some JSON that may look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "ordering": ["settings", "bookmarks", "history"],\n    "items": {\n        "settings": {\n            "icon": "ic_settings",\n            "title": "Settings",\n            "action": "firefox://settings"\n        },\n        "bookmarks": {\n            "icon": "ic_bookmarks",\n            "title": "View Bookmarks",\n            "action": "firefox://bookmark_list"\n        },\n        "history": {\n            "icon": "ic_history",\n            "title": "View History",\n            "action": "firefox://history_list"\n        }\n    }\n}\n')),(0,i.kt)("p",null,"The application code to read that JSON now looks like this in Kotlin:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'fun toMenuItem(vars: Variables): MenuItem? {\n    val action: String = vars?.getString("action") ?: return null\n    val title: String = vars?.getText("title") ?: return null\n    val icon: Drawable = vars?.getDrawable("icon") ?: return null\n    return MenuItem(icon, title, action)\n}\n\nval menuVariables = nimbus.getVariables("app-menu")\n// Use the ordering from the experiment or the hardcoded version.\nval ordering: List<String> = menuVariables.getStringList("ordering") ?: hardcodedOrdering\n// Get a list of MenuItem items from the "items" object, using toMenuItem.\nval experimentalItems: Map<String, MenuItem> = menuVariables.getVariablesMap("items", ::toMenuItem) ?: mapOf()\n\n// use the ordering to lookup the menu items from the experiment or the hardcoded version.\nval items: List<MenuItem> = ordering.mapNotNull { id -> experimentalItems[id] ?: hardcodedItems[id] }\n\n// Use the items to make the menu\n')),(0,i.kt)("p",null,"And in Swift:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'func toMenuItem(vars: Variables): MZMenuItem? {\n    guard let action = vars.getString("action"),\n        let title = vars.getText("title"),\n        let icon = vars.getDrawable("icon") else {\n            return nil\n        }\n    return MZMenuItem(icon: icon, title: title, action: action)\n}\n\nlet menuVariables = nimbus.getVariables("app-menu")\n// Use the ordering from the experiment or the hardcoded version.\nlet ordering = menuVariables.getStringList("ordering") ?? hardcodedOrdering\n// Get a list of MZMenuItem items from the "items" object, using toMenuItem.\nlet experimentalItems = menuVariables.getVariablesMap("items", transform: toMenuItem) ?? [:]()\n\n// use the ordering to lookup the menu items from the experiment or the hardcoded version.\nlet items: [MZMenuItem] = ordering.compactMap { id in experimentalItems[id] ?? hardcodedItems[id] }\n\n// Use the items to make the menu\n')),(0,i.kt)("p",null,"Building the menu like this allows the experiment to add and remove menu items remotely, while still providing a default experience."),(0,i.kt)("h3",{id:"enumerations-of-values"},"Enumerations of values"),(0,i.kt)("p",null,"The above example leans quite heavily on ",(0,i.kt)("inlineCode",{parentName:"p"},"String"),"s. The code may be written in such a way that an ",(0,i.kt)("inlineCode",{parentName:"p"},"enum")," would be more appropriate."),(0,i.kt)("p",null,"In this contrived example of a homescreen with different sections, we see some JSON with a list and a map. The items of the list correspond to the keys of the map."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "section-ordering": ["topSites", "highlights", "collections"],\n    "sections-rows": {\n        "topSites": 1,\n        "highlights": 1,\n        "collections": 2,\n        "recentlyViewed": 0\n    }\n}\n')),(0,i.kt)("p",null,"We can represent these items in Kotlin as an enum."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"enum class SectionId {\n    recentlyViewed,\n    topSites,\n    highlights,\n    collections\n}\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\ud83d\udc4b Information"),(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"enum")," classes in Kotlin can be resolved only by their name, which cannot include hyphens.")),(0,i.kt)("p",null,"Also in Swift:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"enum SectionId: String {\n    case recentlyViewed\n    case topSites\n    case highlights\n    case collections\n}\n")),(0,i.kt)("p",null,"Then, when preparing our Home screen, we can get the list:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'val variables = nimbus.getVariables("home-screen")\nval ordering: List<SectionId>? = variables.getEnumList("section-ordering")\nval sectionsRows: Map<SectionId, Int>? = variables.getIntMap("sections-rows")?.mapKeysAsEnums()\n')),(0,i.kt)("p",null,"and in Swift."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'let variables = nimbus.getVariables("home-screen")\nlet ordering: [SectionId]? = variables.getEnumList("section-ordering")\nlet sectionRows: [SectionId: Int]? = variables.getIntMap("section-rows").compactMapKeysAsEnums()\n')),(0,i.kt)("h2",{id:"recording-exposure-events"},"Recording exposure events"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u26c5\ufe0f\ud83d\udd2c\ud83d\udd2d Enrollment versus Exposure"),(0,i.kt)("p",{parentName:"blockquote"},"When a client is selected to take part in an experiment, they are ",(0,i.kt)("em",{parentName:"p"},"assigned")," a branch. This is ",(0,i.kt)("em",{parentName:"p"},"enrollment"),"."),(0,i.kt)("p",{parentName:"blockquote"},"However, the user may not be ",(0,i.kt)("em",{parentName:"p"},"exposed")," to the branch until sometime later. The exposure is the earliest moment that the user could be affected by the experimental treatment."),(0,i.kt)("p",{parentName:"blockquote"},"Nimbus records the enrollments and exposure events using Glean."),(0,i.kt)("p",{parentName:"blockquote"},"Enrollments are recorded at each app start-up, and exposure events each time an exposure happens.")),(0,i.kt)("p",null,"For experiments in Firefox for iOS and Android, enrollment happens shortly after app-startup."),(0,i.kt)("p",null,"In our example above, the app menu is constructed when a tab is open. The user is only exposed to the values of the JSON when they tap on the open-menu icon."),(0,i.kt)("p",null,"By default, exposure is recorded when ",(0,i.kt)("inlineCode",{parentName:"p"},"nimbus.getVariables(featureId: String)")," is called. Whichever experiment the feature is enrolled in\u2014 always exactly zero or one\u2014 has an exposure event recorded."),(0,i.kt)("p",null,"A second, optional argument is allowed for this method ",(0,i.kt)("inlineCode",{parentName:"p"},"getVariables"),", to change this default behavior."),(0,i.kt)("p",null,"Here, the menu is constructed with variables from Nimbus, but the user doesn't see the menu until they open it."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'val menu = createMenu(\n    nimbus.getVariables("app-menu", sendExposureEvents = false)\n)\nval menuButton = Button(\n    icon = R.drawable.ic_menu,\n    onButtonPressed = {\n        nimbus.recordExposureEvent("app-menu")\n        show(menu)\n    }\n)\n')),(0,i.kt)("p",null,"This is a caricature of the same code in Swift."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'let menuSheet = createMenuSheet(\n    nimbus.getVariables("app-menu", sendExposureEvents: false)\n)\nlet menuButton = UIButton()\nmenuButton.addTarget(self, action: #selector(didOpenMenu), for: .touchUpInside)\n\nfunc didOpenMenu() {\n    let nimbus = Nimbus.shared\n    nimbus.recordExposureEvent("app-menu")\n    viewController.present(menuSheet, animated: true, completion: nil)\n}\n')),(0,i.kt)("p",null,"Nimbus will take care of finding out what experiment, if any, the user is enrolled in when using this feature."),(0,i.kt)("h2",{id:"using-configurable-features-to-experiment-with-another"},"Using configurable features to experiment with another"),(0,i.kt)("p",null,"The feature itself may be configurable, but we don't have to limit feature configuration to experiments ",(0,i.kt)("em",{parentName:"p"},"about that feature"),"."),(0,i.kt)("p",null,"We can imagine a world where we have multiple configurable features, say: an ",(0,i.kt)("inlineCode",{parentName:"p"},"app-menu"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"onboarding")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"newtab"),". On each of these features we have a messaging surface, and we want to run an experiment to find which is the best surface to show the message about a behavior we wish to maximize: setting the browser to be the device default."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Q")," Can we configure an experiment to test each of the message on each of these messaging surfaces?"),(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"A")," This would be done with an experiment that has three branches, and each branch configures exactly one feature. The application code doesn't have to know about the linkage between the features in this experiment, just get its configuration from Nimbus.")),(0,i.kt)("p",null,"If a user is enrolled in that experiment, no other experiment is allowed to use the features involved."),(0,i.kt)("p",null,"We might also imagine a world where we have multiple features as before. Two different product teams are experimenting with two new capabilities of the app: both require onboarding instructions, one has an entry point via a app menu item, and the other has an entry point in the new tab screen."),(0,i.kt)("p",null,"If it was one product team where communication is high, perhaps they might run one experiment, with two treatment branches: one branch with configuration for the ",(0,i.kt)("inlineCode",{parentName:"p"},"onboarding")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"app-menu")," features, and one branch with configuration for the ",(0,i.kt)("inlineCode",{parentName:"p"},"onboarding")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"new-tab")," features."),(0,i.kt)("p",null,"Both teams require the ",(0,i.kt)("inlineCode",{parentName:"p"},"onboarding")," feature. This allows each team to run their own experiments, which do not interfere with one another."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u26c5\ufe0f\ud83d\udd2c\ud83d\udd2d  Concept"),(0,i.kt)("p",{parentName:"blockquote"},"While for any given user a feature may be involved in only one experiment, one experiment should be able to configure multiple features.")),(0,i.kt)("p",null,"Because both product teams' experiments require the ",(0,i.kt)("inlineCode",{parentName:"p"},"onboarding")," experiment, no user will be involved in ",(0,i.kt)("em",{parentName:"p"},"both")," experiments."),(0,i.kt)("p",null,"For such an experiment, an experiment would have two branches, each of which configure two features."),(0,i.kt)("h3",{id:"the-exception-to-the-rule"},"The exception to the rule..."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},'"If a user is enrolled in that experiment, no other experiment is allowed to use the features involved." - this document, above.')),(0,i.kt)("p",null,"As always, there will be an exception to the rule. In the case of feature enrollment, there is a way to allow ",(0,i.kt)("strong",{parentName:"p"},"certain features")," to be co-enrolled. ",(0,i.kt)("a",{parentName:"p",href:"/fml/coenrolling-features"},"This document")," will give you more information about defining co-enrolling features and which features are currently instrumented to be co-enrollable."),(0,i.kt)("h2",{id:"\ufe0f-working-with-configurable-features"},"\ud83d\udd27\u2699\ufe0f Working with configurable features"),(0,i.kt)("p",null,"Throughout the process of designing and building these configurable features, the feature variables have needed to be documented. At first, when the feature is being envisioned and designed, the variables should travel with the designs themselves."),(0,i.kt)("p",null,"When the feature is being implemented, these variables will begin to acquire concrete names, types and organization, which will be used extract JSON from the Nimbus SDK and configure the application features themselves. This documentation will begin to take shape and textual organization that travel in the app's repository."),(0,i.kt)("p",null,"When the feature is being tested, QA testers are going to want to configure the features within bounds and tolerances set by the designs and the engineers."),(0,i.kt)("p",null,"Finally, when the feature is part of experiments, then the experiment owner, setting the branches in Experimenter needs to be able configure the branches with variables with spellings and organization that match the app implementation."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"The ",(0,i.kt)("a",{parentName:"strong",href:"fml-spec"},"Feature Manifest Language specification")," would be the best place for engineers to go having read this document.")))}c.isMDXComponent=!0}}]);