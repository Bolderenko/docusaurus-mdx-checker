"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[5722],{3088:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>h,contentTitle:()=>r,default:()=>l,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var n=t(4246),i=t(1670);const o={title:"Jest 25: \ud83d\ude80 Laying foundations for the future",author:"Simen Bekkhus",authorURL:"https://github.com/SimenB",authorFBID:0x5af3c395182e},r=void 0,a={permalink:"/ro/blog/2020/01/21/jest-25",editUrl:"https://github.com/jestjs/jest/tree/main/website/blog/2020-01-21-jest-25.md",source:"@site/i18n/ro/docusaurus-plugin-content-blog/2020-01-21-jest-25.md",title:"Jest 25: \ud83d\ude80 Laying foundations for the future",description:"Jest 25 is laying the groundwork for many major changes in the future. As such, we kept breaking changes to a minimum, but internal architecture changes may require attention during the upgrade. The main changes are an upgrade of JSDOM from v11 to v15, 10-15% faster test runs, a new diff view for outdated snapshots and dropped Node 6 support.",date:"2020-01-21T00:00:00.000Z",formattedDate:"21 ianuarie 2020",tags:[],readingTime:6.995,hasTruncateMarker:!0,authors:[{name:"Simen Bekkhus",url:"https://github.com/SimenB"}],frontMatter:{title:"Jest 25: \ud83d\ude80 Laying foundations for the future",author:"Simen Bekkhus",authorURL:"https://github.com/SimenB",authorFBID:0x5af3c395182e},unlisted:!1,prevItem:{title:"Jest 26: Tick Tock",permalink:"/ro/blog/2020/05/05/jest-26"},nextItem:{title:"Jest 24: \ud83d\udc85 Refreshing, Polished, TypeScript-friendly",permalink:"/ro/blog/2019/01/25/jest-24-refreshing-polished-typescript-friendly"}},h={authorsImageUrls:[void 0]},c=[{value:"Bye Node 6",id:"bye-node-6",level:2},{value:"Performance improvements",id:"performance-improvements",level:2},{value:"V8 Code Coverage",id:"v8-code-coverage",level:2},{value:"Thinking fast and slow when tests fail",id:"thinking-fast-and-slow-when-tests-fail",level:2},{value:"Colors of differences when snapshot tests fail",id:"colors-of-differences-when-snapshot-tests-fail",level:2},{value:"ECMAScript Modules support",id:"ecmascript-modules-support",level:2},{value:"Other improvements and updates",id:"other-improvements-and-updates",level:2},{value:"Plans for the future",id:"plans-for-the-future",level:2}];function d(e){const s=Object.assign({p:"p",a:"a",h2:"h2",code:"code",ul:"ul",li:"li",strong:"strong",ol:"ol",img:"img",em:"em"},(0,i.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:"Jest 25 is laying the groundwork for many major changes in the future. As such, we kept breaking changes to a minimum, but internal architecture changes may require attention during the upgrade. The main changes are an upgrade of JSDOM from v11 to v15, 10-15% faster test runs, a new diff view for outdated snapshots and dropped Node 6 support."}),"\n",(0,n.jsxs)(s.p,{children:["There has been more than 200 commits since Jest 24.9 by more than 80 different contributors, so as always, take a look at the ",(0,n.jsx)(s.a,{href:"https://github.com/jestjs/jest/blob/main/CHANGELOG.md",children:"changelog"})," for a full list of changes."]}),"\n",(0,n.jsx)(s.h2,{id:"bye-node-6",children:"Bye Node 6"}),"\n",(0,n.jsxs)(s.p,{children:["Node 6 has been EOL since April 30th 2019, and Jest 25 leaves it behind. Dropping Node 6 means we can upgrade our dependencies, the main one being JSDOM, which has been upgraded to version 15. Upgrading also means we no longer have to transpile ",(0,n.jsx)(s.code,{children:"async-await"})," syntax, which results in both faster code execution and less memory consumption. As a bonus, Jest\u2019s transpiled code should be easier to debug if anyone finds themselves tumbling down that particular rabbit hole."]}),"\n",(0,n.jsxs)(s.p,{children:["Even though Node 8 has also entered EOL, Jest 25 will keep support for it to make the upgrade as easy as possible for those of us who still support Node 8. It does come with some tradeoffs though, such as JSDOM v16 having been released without Node 8 support, so you'll need to use ",(0,n.jsx)(s.a,{href:"https://www.npmjs.com/package/jest-environment-jsdom-sixteen",children:(0,n.jsx)(s.code,{children:"jest-environment-jsdom-sixteen"})})," if you want to use the latest version."]}),"\n",(0,n.jsx)(s.h2,{id:"performance-improvements",children:"Performance improvements"}),"\n",(0,n.jsx)(s.p,{children:"We\u2019ve gotten reports that Jest has slowed down over the last couple of releases. Jest 25 includes upgraded Micromatch, which brings huge gains in startup time, and some bug fixes and performance tweaks which brings Jest back to the speed it was at for Jest 23. For Jest itself, like mentioned at the beginning of this post, that means a 10-15% reduction of test runtime. We're always looking to improve here of course, so please check how it stacks up against earlier versions and create issues if we should be better!"}),"\n",(0,n.jsx)(s.h2,{id:"v8-code-coverage",children:"V8 Code Coverage"}),"\n",(0,n.jsxs)(s.p,{children:["Jest\u2019s current code coverage instrumentation is powered by ",(0,n.jsx)(s.code,{children:"babel-plugin-istanbul"})," inserting code coverage collection code before creating reports. However, this is quite slow and memory-intensive, especially for large files and code bases. Luckily, V8 has built-in code coverage, which is becoming more and more usable in Node thanks to the hard work of ",(0,n.jsx)(s.a,{href:"https://github.com/bcoe",children:"Benjamin Coe"})," and others on the V8 and Node.js teams. Jest 25 comes with experimental support for this via a new ",(0,n.jsx)(s.code,{children:"--coverage-provider"})," flag. Please see its ",(0,n.jsx)(s.a,{href:"/docs/configuration#coverageprovider-string",children:"documentation"})," for caveats and how to use it."]}),"\n",(0,n.jsx)(s.h2,{id:"thinking-fast-and-slow-when-tests-fail",children:"Thinking fast and slow when tests fail"}),"\n",(0,n.jsx)(s.p,{children:"Unnecessary effort to interpret the reports when tests fail hinders:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"\u201cthinking fast\u201d to recognize patterns from your past experience"}),"\n",(0,n.jsx)(s.li,{children:"\u201cthinking slow\u201d to analyze changes and decide whether they are expected progress or unexpected regressions"}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Jest 25 completes the second half of an effort begun in Jest 24 to improve all matchers:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["correct description line, including ",(0,n.jsx)(s.code,{children:".rejects"}),", ",(0,n.jsx)(s.code,{children:".resolves"}),", and ",(0,n.jsx)(s.code,{children:".not"})," modifiers"]}),"\n",(0,n.jsx)(s.li,{children:"concise labels and consistent alignment for expected and received values"}),"\n",(0,n.jsx)(s.li,{children:"inverse highlight of substring differences when expected and received are strings"}),"\n",(0,n.jsx)(s.li,{children:"counts of change lines in differences to know if they are only delete or insert"}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["Special thanks to Jest maintainer ",(0,n.jsx)(s.a,{href:"https://github.com/pedrottimark",children:"Mark Pedrotti"})," for driving this effort and his continued work towards making expectation errors as good as they can be."]}),"\n",(0,n.jsx)(s.h2,{id:"colors-of-differences-when-snapshot-tests-fail",children:"Colors of differences when snapshot tests fail"}),"\n",(0,n.jsx)(s.p,{children:"The most obvious change to replace confusion with confidence is the colors of change lines in differences when snapshot tests fail:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"- Snapshot"})," changes from green to ",(0,n.jsx)(s.strong,{children:"magenta"})]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"+ Received"})," changes from red to ",(0,n.jsx)(s.strong,{children:"teal"})," foreground on cyan/aqua background"]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Examples of snapshot test reports (before at left and after at right)"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"Counts of changed lines confirm your first impression which way did the snapshot change (that is, deleted or inserted lines)"}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"snapshot-insert-lines",src:t(4807).Z+"",width:"1800",height:"532"})}),"\n",(0,n.jsxs)(s.ol,{start:"2",children:["\n",(0,n.jsx)(s.li,{children:"Background colors attract your eyes to compare adjacent changed lines"}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"snapshot-change-lines",src:t(7912).Z+"",width:"1800",height:"504"})}),"\n",(0,n.jsxs)(s.ol,{start:"3",children:["\n",(0,n.jsxs)(s.li,{children:["Background colors also help you see which ",(0,n.jsx)(s.code,{children:"toThrow"})," tests require a decision whether or not to update the snapshot"]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"snapshot-change-substrings",src:t(1668).Z+"",width:"1800",height:"168"})}),"\n",(0,n.jsx)(s.p,{children:"Here are some reasons why we chose unique colors:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"The 95% of people who have full color vision can quickly recognize which reports are from snapshot tests versus all other matchers."}),"\n",(0,n.jsx)(s.li,{children:"It solves the direct conflict between meaning of green/red in Jest tests versus red/green in code review."}),"\n",(0,n.jsx)(s.li,{children:"Unlike a reversal to red/green which suggests that update is the default decision, it suggests that differences require more careful review for possible regression in local snapshot test failures than in code review (when problems have already been fixed)."}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"The difference in hue from magenta at 300\xb0 to teal/cyan/aqua at 180\xb0 gives better color vision accessibility and the light background tint for changed lines gives consistent contrast on light and dark themes."}),"\n",(0,n.jsxs)(s.p,{children:["If you maintain a command line tool, you might find inspiration to improve its accessibility in ",(0,n.jsx)(s.a,{href:"https://github.com/jestjs/jest/pull/9132",children:"#9132"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"ecmascript-modules-support",children:"ECMAScript Modules support"}),"\n",(0,n.jsxs)(s.p,{children:["Node 13 has unflagged ESM support, and we have started a tiny bit working towards native support in Jest. Jest 25 includes support for ",(0,n.jsx)(s.code,{children:"jest.config.cjs"})," and ",(0,n.jsx)(s.code,{children:"jest.config.mjs"})," configuration files, but tests themselves cannot yet be written using ESM without something like Babel or TypeScript transforming it into CJS."]}),"\n",(0,n.jsxs)(s.p,{children:["The APIs Jest will use are still flagged and experimental, so don't expect support right away. These APIs are something the ",(0,n.jsx)(s.a,{href:"https://github.com/nodejs/modules",children:"Node.js Modules team"})," is actively working on, and we'll be keeping an eye on it moving forward and experiment with them so we can provide feedback. You can subscribe to ",(0,n.jsx)(s.a,{href:"https://github.com/jestjs/jest/issues/9430",children:"this issue"})," to get any updates about the implementation status in Jest."]}),"\n",(0,n.jsx)(s.h2,{id:"other-improvements-and-updates",children:"Other improvements and updates"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Jest has passed ",(0,n.jsx)(s.a,{href:"https://github.com/jestjs/jest/graphs/contributors",children:"1000 unique contributors"}),". This is an incredible milestone! Thank you to everybody who helps us make testing as delightful as possible."]}),"\n",(0,n.jsxs)(s.li,{children:["Thanks to community member ",(0,n.jsx)(s.a,{href:"https://github.com/JoshRosenstein",children:"Josh Rosenstein"}),", Jest now comes with support for ",(0,n.jsx)(s.code,{children:"BigInt"})," in most matchers, such as ",(0,n.jsx)(s.code,{children:"toBeGreaterThan"}),". Jest will also understand bigint literals out of the box."]}),"\n",(0,n.jsxs)(s.li,{children:["Jest\u2019s feature ",(0,n.jsx)(s.code,{children:"--detect-leaks"})," has been broken for Node 12 and newer - this has been fixed in Jest 25."]}),"\n",(0,n.jsxs)(s.li,{children:["As announced in the blog post for Jest 24, Jest\u2019s code base has been rewritten in TypeScript - this work was completed in Jest 24.3. So if you use any of Jest\u2019s individual parts, you should get great IDE integration. Looking forward, we really want to make Jest mocks play nicer with type systems, and we\u2019d love the community\u2019s help with this. Please chime in ",(0,n.jsx)(s.a,{href:"https://github.com/jestjs/jest/issues/7832",children:"here"})," with ideas and send PRs! We\u2019ll also be investigating moving the typings for using Jest as a test runner from DefinitelyTyped into Jest itself."]}),"\n",(0,n.jsxs)(s.li,{children:["The ",(0,n.jsx)(s.code,{children:"jest-diff"})," package now exports functions like ",(0,n.jsx)(s.code,{children:"diffLinesUnified"})," and ",(0,n.jsx)(s.code,{children:"diffStringsUnified"})," which have configuration options, so other applications can format differences in a custom way. For more information and code examples, see its new ",(0,n.jsx)(s.code,{children:"README.md"})," file in the Jest repository or on package repositories."]}),"\n",(0,n.jsxs)(s.li,{children:["Thanks to community member ",(0,n.jsx)(s.a,{href:"https://github.com/WeiAnAn",children:"Wei An Yen"}),", Jest will no longer highlight passing asymmetric matchers in expectation errors. This has been a long-standing pain point with asymmetric matchers and we're very happy it's finally solved."]}),"\n",(0,n.jsxs)(s.li,{children:["For the second year running, Jest won the Highest Satisfaction award from ",(0,n.jsx)(s.a,{href:"https://2019.stateofjs.com/awards/",children:"State of JS"}),". We are incredibly grateful for the support from the community, and hope we can build on this momentum to make 2020 even better!"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"plans-for-the-future",children:"Plans for the future"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Jest\u2019s configuration is vast and somewhat clunky - there is often ",(0,n.jsx)(s.em,{children:"at least"})," two ways of doing the same thing, oftentimes even more. For Jest 26 we hope to condense the config down, and make it more predictable. See this ",(0,n.jsx)(s.a,{href:"https://github.com/jestjs/jest/issues/7185",children:"issue"})," for details."]}),"\n",(0,n.jsxs)(s.li,{children:["We also hope to be able to provide a proper programmatic API for running Jest, to make integration into IDEs and other tooling easier. Please see ",(0,n.jsx)(s.a,{href:"https://github.com/jestjs/jest/issues/5048",children:"this"})," tracking issue."]}),"\n",(0,n.jsxs)(s.li,{children:["There\u2019s been an open PR for adding Lolex as an implementation of Jest\u2019s fake timers since December 2017. While we\u2019re not adding it to any public APIs in Jest 25, support for it is technically included and you we're looking into how to expose this so people can test and experiment with it. Using it means you can mock out ",(0,n.jsx)(s.code,{children:"Date"})," and other timer function Jest currently doesn\u2019t touch. Note that this should be considered experimental, and a proper API support will come in a later release. Follow ",(0,n.jsx)(s.a,{href:"https://github.com/jestjs/jest/pull/7776",children:"this PR"})," for the latest updates on the status."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Happy Jesting! \ud83c\udccf"})]})}const l=function(e={}){const{wrapper:s}=Object.assign({},(0,i.ah)(),e.components);return s?(0,n.jsx)(s,Object.assign({},e,{children:(0,n.jsx)(d,e)})):d(e)}},7912:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/25-snapshot-change-lines-d42906add66e08bb7c0ffffbca9a44bc.png"},1668:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/25-snapshot-change-substrings-0798d37f2f603ec43b57145cddc1247b.png"},4807:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/25-snapshot-insert-lines-8168b88f07172d72e4d2cd0e05d200f1.png"},1670:(e,s,t)=>{t.d(s,{Zo:()=>a,ah:()=>o});var n=t(7378);const i=n.createContext({});function o(e){const s=n.useContext(i);return n.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const r={};function a({components:e,children:s,disableParentContext:t}){let a;return a=t?"function"==typeof e?e({}):e||r:o(e),n.createElement(i.Provider,{value:a},s)}}}]);