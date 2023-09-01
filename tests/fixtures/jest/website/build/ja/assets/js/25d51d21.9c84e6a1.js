"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[5891],{2599:(e,n,t)=>{t.d(n,{Z:()=>l});t(7378);var r=t(7140);const a={tabItem:"tabItem_wHwb"};var s=t(4246);function l(e){let{children:n,hidden:t,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,l),hidden:t,children:n})}},8447:(e,n,t)=>{t.d(n,{Z:()=>k});var r=t(7378),a=t(7140),s=t(9169),l=t(3620),c=t(9749),i=t(8981),o=t(56),d=t(8796);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,o.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const a=(0,l.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i._X)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=u(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[o,h]=m({queryString:t,groupId:a}),[b,j]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,d.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),x=(()=>{const e=o??b;return p({value:e,tabValues:s})?e:null})();(0,c.Z)((()=>{x&&i(x)}),[x]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),h(e),j(e)}),[h,j,s]),tabValues:s}}var j=t(362);const x={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var g=t(4246);function f(e){let{className:n,block:t,selectedValue:r,selectValue:l,tabValues:c}=e;const i=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.o5)(),d=e=>{const n=e.currentTarget,t=i.indexOf(n),a=c[t].value;a!==r&&(o(n),l(a))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:c.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>i.push(e),onKeyDown:h,onClick:d,...s,className:(0,a.Z)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function y(e){const n=b(e);return(0,g.jsxs)("div",{className:(0,a.Z)("tabs-container",x.tabList),children:[(0,g.jsx)(f,{...e,...n}),(0,g.jsx)(v,{...e,...n})]})}function k(e){const n=(0,j.Z)();return(0,g.jsx)(y,{...e,children:h(e.children)},String(n))}},3284:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>o,toc:()=>h});var r=t(4246),a=t(1670),s=t(8447),l=t(2599);const c={id:"tutorial-react",title:"React\u30a2\u30d7\u30ea\u3092\u30c6\u30b9\u30c8"},i=void 0,o={unversionedId:"tutorial-react",id:"version-29.4/tutorial-react",title:"React\u30a2\u30d7\u30ea\u3092\u30c6\u30b9\u30c8",description:"Facebook \u3067\u306fJest\u3092\u4f7f\u7528\u3057\u3066\u3001React\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u30c6\u30b9\u30c8\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-29.4/TutorialReact.md",sourceDirName:".",slug:"/tutorial-react",permalink:"/ja/docs/29.4/tutorial-react",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/jest-v2/ja",tags:[],version:"29.4",frontMatter:{id:"tutorial-react",title:"React\u30a2\u30d7\u30ea\u3092\u30c6\u30b9\u30c8"},sidebar:"docs",previous:{title:"\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3",permalink:"/ja/docs/29.4/architecture"},next:{title:"React Native\u30a2\u30d7\u30ea\u3092\u30c6\u30b9\u30c8",permalink:"/ja/docs/29.4/tutorial-react-native"}},d={},h=[{value:"\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",id:"\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",level:2},{value:"Create React App\u3092\u4f7f\u7528\u3057\u305f\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",id:"create-react-app\u3092\u4f7f\u7528\u3057\u305f\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",level:3},{value:"Create React App\u3092\u4f7f\u308f\u306a\u3044\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",id:"create-react-app\u3092\u4f7f\u308f\u306a\u3044\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",level:3},{value:"\u30b9\u30ca\u30c3\u30d7\u30b7\u30e7\u30c3\u30c8\u30c6\u30b9\u30c8",id:"\u30b9\u30ca\u30c3\u30d7\u30b7\u30e7\u30c3\u30c8\u30c6\u30b9\u30c8",level:3},{value:"\u30e2\u30c3\u30af\u3001Enzyme\u3001 React 16+ \u3092\u4f7f\u7528\u3057\u305f\u30b9\u30ca\u30c3\u30d7\u30b7\u30e7\u30c3\u30c8\u30c6\u30b9\u30c8",id:"\u30e2\u30c3\u30afenzyme-react-16-\u3092\u4f7f\u7528\u3057\u305f\u30b9\u30ca\u30c3\u30d7\u30b7\u30e7\u30c3\u30c8\u30c6\u30b9\u30c8",level:4},{value:"DOM \u306e\u30c6\u30b9\u30c8",id:"dom-\u306e\u30c6\u30b9\u30c8",level:3},{value:"react-testing-library",id:"react-testing-library",level:4},{value:"Enzyme",id:"enzyme",level:4},{value:"\u72ec\u81ea\u306e\u30b3\u30fc\u30c9\u5909\u63db\u51e6\u7406",id:"\u72ec\u81ea\u306e\u30b3\u30fc\u30c9\u5909\u63db\u51e6\u7406",level:3}];function u(e){const n=Object.assign({p:"p",a:"a",h2:"h2",h3:"h3",code:"code",pre:"pre",strong:"strong",admonition:"admonition",h4:"h4",ol:"ol",li:"li"},(0,a.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Facebook \u3067\u306fJest\u3092\u4f7f\u7528\u3057\u3066\u3001",(0,r.jsx)(n.a,{href:"https://reactjs.org/",children:"React"}),"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u30c6\u30b9\u30c8\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",children:"\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7"}),"\n",(0,r.jsx)(n.h3,{id:"create-react-app\u3092\u4f7f\u7528\u3057\u305f\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",children:"Create React App\u3092\u4f7f\u7528\u3057\u305f\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7"}),"\n",(0,r.jsxs)(n.p,{children:["React\u306b\u99b4\u67d3\u307f\u304c\u306a\u3044\u306a\u3089\u3001",(0,r.jsx)(n.a,{href:"https://create-react-app.dev/",children:"Create React App"}),"\u306e\u5229\u7528\u3092\u304a\u52e7\u3081\u3057\u307e\u3059\u3002 \u3059\u3050\u306b\u4f7f\u3048\u3066 ",(0,r.jsx)(n.a,{href:"https://create-react-app.dev/docs/running-tests/#docsNav",children:"Jest\u3082\u540c\u68b1\u3055\u308c\u3066\u3044\u307e\u3059\uff01 "})," \u30b9\u30ca\u30c3\u30d7\u30b7\u30e7\u30c3\u30c8\u3092\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3059\u308b\u306b\u306f\u3001 ",(0,r.jsx)(n.code,{children:"react-test-renderer"})," \u3092\u8ffd\u52a0\u3059\u308b\u3060\u3051\u3067\u3059\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u5b9f\u884c"}),"\n",(0,r.jsxs)(s.Z,{groupId:"npm2yarn",children:[(0,r.jsx)(l.Z,{value:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm install --save-dev react-test-renderer\n"})})}),(0,r.jsx)(l.Z,{value:"yarn",label:"Yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn add --dev react-test-renderer\n"})})}),(0,r.jsx)(l.Z,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pnpm add --save-dev react-test-renderer\n"})})})]}),"\n",(0,r.jsx)(n.h3,{id:"create-react-app\u3092\u4f7f\u308f\u306a\u3044\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",children:"Create React App\u3092\u4f7f\u308f\u306a\u3044\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7"}),"\n",(0,r.jsxs)(n.p,{children:["\u65e2\u5b58\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u3042\u308b\u5834\u5408\u306f\u3001\u3044\u304f\u3064\u304b\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u3046\u307e\u304f\u6a5f\u80fd\u3059\u308b\u3088\u3046\u306b\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 ",(0,r.jsx)(n.code,{children:"babel-jest"}),"\u30d1\u30c3\u30b1\u30fc\u30b8\u3068 ",(0,r.jsx)(n.code,{children:"react"}),"\u306ebabel preset\u3092\u30c6\u30b9\u30c8\u74b0\u5883\u5185\u306e\u30b3\u30fc\u30c9\u3092\u5909\u63db\u3059\u308b\u306e\u306b\u5229\u7528\u3057\u3066\u3044\u307e\u3059\u3002 ",(0,r.jsx)(n.a,{href:"/ja/docs/29.4/getting-started#using-babel",children:"using babel"}),"\u3082\u53c2\u7167\u3057\u3066\u4e0b\u3055\u3044\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u5b9f\u884c"}),"\n",(0,r.jsxs)(s.Z,{groupId:"npm2yarn",children:[(0,r.jsx)(l.Z,{value:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm install --save-dev jest babel-jest @babel/preset-env @babel/preset-react react-test-renderer\n"})})}),(0,r.jsx)(l.Z,{value:"yarn",label:"Yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn add --dev jest babel-jest @babel/preset-env @babel/preset-react react-test-renderer\n"})})}),(0,r.jsx)(l.Z,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pnpm add --save-dev jest babel-jest @babel/preset-env @babel/preset-react react-test-renderer\n"})})})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"package.json"}),"\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u306b\u306a\u3063\u3066\u3044\u308b\u306f\u305a\u3067\u3059( ",(0,r.jsx)(n.code,{children:"<current-version>"}),"\u306f\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u5b9f\u969b\u306e\u6700\u65b0\u7248\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u6570\u5b57\u306b\u306a\u308a\u307e\u3059)\u3002 scripts\u3068Jest\u306e\u8a2d\u5b9a\u306e\u30a8\u30f3\u30c8\u30ea\u3092\u8ffd\u52a0\u3057\u3066\u4e0b\u3055\u3044:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "dependencies": {\n    "react": "<current-version>",\n    "react-dom": "<current-version>"\n  },\n  "devDependencies": {\n    "@babel/preset-env": "<current-version>",\n    "@babel/preset-react": "<current-version>",\n    "babel-jest": "<current-version>",\n    "jest": "<current-version>",\n    "react-test-renderer": "<current-version>"\n  },\n  "scripts": {\n    "test": "jest"\n  }\n}\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="babel.config.js"',children:"module.exports = {\n  presets: [\n    '@babel/preset-env',\n    ['@babel/preset-react', {runtime: 'automatic'}],\n  ],\n};\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u305d\u308c\u3067\u306f\u6b21\u3078\u9032\u307f\u307e\u3057\u3087\u3046\uff01"})}),"\n",(0,r.jsx)(n.h3,{id:"\u30b9\u30ca\u30c3\u30d7\u30b7\u30e7\u30c3\u30c8\u30c6\u30b9\u30c8",children:"\u30b9\u30ca\u30c3\u30d7\u30b7\u30e7\u30c3\u30c8\u30c6\u30b9\u30c8"}),"\n",(0,r.jsxs)(n.p,{children:["\u30cf\u30a4\u30d1\u30fc\u30ea\u30f3\u30af\u3092\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3059\u308bLink\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e ",(0,r.jsx)(n.a,{href:"/ja/docs/29.4/snapshot-testing",children:"snapshot test"})," \u3092\u4f5c\u6210\u3057\u307e\u3057\u3087\u3046:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",metastring:'title="Link.js"',children:"import {useState} from 'react';\n\nconst STATUS = {\n  HOVERED: 'hovered',\n  NORMAL: 'normal',\n};\n\nexport default function Link({page, children}) {\n  const [status, setStatus] = useState(STATUS.NORMAL);\n\n  const onMouseEnter = () => {\n    setStatus(STATUS.HOVERED);\n  };\n\n  const onMouseLeave = () => {\n    setStatus(STATUS.NORMAL);\n  };\n\n  return (\n    <a\n      className={status}\n      href={page || '#'}\n      onMouseEnter={onMouseEnter}\n      onMouseLeave={onMouseLeave}\n    >\n      {children}\n    </a>\n  );\n}\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["\u4f8b\u3068\u3057\u3066\u95a2\u6570\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u4f7f\u7528\u3057\u3066\u3044\u307e\u3059\u304c\u3001\u30af\u30e9\u30b9\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3082\u540c\u3058\u65b9\u6cd5\u3067\u30c6\u30b9\u30c8\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 ",(0,r.jsx)(n.a,{href:"https://ja.reactjs.org/docs/components-and-props.html#function-and-class-components",children:"React: \u95a2\u6570\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3068\u30af\u30e9\u30b9\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"}),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002 ",(0,r.jsx)(n.strong,{children:"\u30ea\u30de\u30a4\u30f3\u30c9:"})," \u30af\u30e9\u30b9\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3067\u306f\u3001\u30e1\u30bd\u30c3\u30c9\u3092\u76f4\u63a5\u30c6\u30b9\u30c8\u3059\u308b\u306e\u3067\u306f\u306a\u304f\u3001props\u3092\u30c6\u30b9\u30c8\u3059\u308b\u305f\u3081\u306bJest\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3092\u60f3\u5b9a\u3057\u3066\u3044\u307e\u3059\u3002"]})}),"\n",(0,r.jsx)(n.p,{children:"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3068\u306e\u3084\u308a\u53d6\u308a\u3068\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3055\u308c\u305f\u51fa\u529b\u3092\u30ad\u30e3\u30d7\u30c1\u30e3\u3057\u3066\u30b9\u30ca\u30c3\u30d7\u30b7\u30e7\u30c3\u30c8\u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\u3059\u308b\u305f\u3081\u306b\u3001React\u306e\u30c6\u30b9\u30c8\u30ec\u30f3\u30c0\u30e9\u30fc\u3068Jest\u306e\u30b9\u30ca\u30c3\u30d7\u30b7\u30e7\u30c3\u30c8\u6a5f\u80fd\u3092\u5229\u7528\u3057\u307e\u3057\u3087\u3046:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",metastring:'title="Link.test.js"',children:"import renderer from 'react-test-renderer';\nimport Link from '../Link';\n\nit('changes the class when hovered', () => {\n  const component = renderer.create(\n    <Link page=\"http://www.facebook.com\">Facebook</Link>,\n  );\n  let tree = component.toJSON();\n  expect(tree).toMatchSnapshot();\n\n  // manually trigger the callback\n  renderer.act(() => {\n    tree.props.onMouseEnter();\n  });\n  // re-rendering\n  tree = component.toJSON();\n  expect(tree).toMatchSnapshot();\n\n  // manually trigger the callback\n  renderer.act(() => {\n    tree.props.onMouseLeave();\n  });\n  // re-rendering\n  tree = component.toJSON();\n  expect(tree).toMatchSnapshot();\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"yarn test"})," \u307e\u305f\u306f ",(0,r.jsx)(n.code,{children:"jest"}),"\u3092\u5b9f\u884c\u3059\u308b\u3068\u3001\u3053\u306e\u3088\u3046\u306a\u30d5\u30a1\u30a4\u30eb\u304c\u51fa\u529b\u3055\u308c\u307e\u3059:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",metastring:'title="__tests__/__snapshots__/Link.test.js.snap"',children:'exports[`changes the class when hovered 1`] = `\n<a\n  className="normal"\n  href="http://www.facebook.com"\n  onMouseEnter={[Function]}\n  onMouseLeave={[Function]}\n>\n  Facebook\n</a>\n`;\n\nexports[`changes the class when hovered 2`] = `\n<a\n  className="hovered"\n  href="http://www.facebook.com"\n  onMouseEnter={[Function]}\n  onMouseLeave={[Function]}\n>\n  Facebook\n</a>\n`;\n\nexports[`changes the class when hovered 3`] = `\n<a\n  className="normal"\n  href="http://www.facebook.com"\n  onMouseEnter={[Function]}\n  onMouseLeave={[Function]}\n>\n  Facebook\n</a>\n`;\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u6b21\u56de\u306e\u30c6\u30b9\u30c8\u3067\u306f\u3001\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3055\u308c\u305f\u51fa\u529b\u306f\u524d\u306b\u4f5c\u6210\u3055\u308c\u305f\u30b9\u30ca\u30c3\u30d7\u30b7\u30e7\u30c3\u30c8\u3068\u6bd4\u8f03\u3055\u308c\u307e\u3059\u3002 \u30b9\u30ca\u30c3\u30d7\u30b7\u30e7\u30c3\u30c8\u306f\u3001\u30b3\u30fc\u30c9\u306e\u5909\u66f4\u306b\u6cbf\u3063\u3066\u30b3\u30df\u30c3\u30c8\u3055\u308c\u308b\u3079\u304d\u3067\u3059\u3002 \u30b9\u30ca\u30c3\u30d7\u30b7\u30e7\u30c3\u30c8\u30c6\u30b9\u30c8\u304c\u5931\u6557\u3057\u305f\u5834\u5408\u3001\u305d\u308c\u304c\u610f\u56f3\u7684\u306a\u5909\u66f4\u304b\u3069\u3046\u304b\u3092\u70b9\u691c\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 \u5909\u66f4\u304c\u4e88\u60f3\u3055\u308c\u305f\u3082\u306e\u3067\u3042\u308c\u3070",(0,r.jsx)(n.code,{children:"jest -u"}),"\u30b3\u30de\u30f3\u30c9\u3067Jest\u3092\u5b9f\u884c\u3057\u3066\u65e2\u5b58\u306e\u30b9\u30ca\u30c3\u30d7\u30b7\u30e7\u30c3\u30c8\u3092\u4e0a\u66f8\u304d\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["The code for this example is available at ",(0,r.jsx)(n.a,{href:"https://github.com/jestjs/jest/tree/main/examples/snapshot",children:"examples/snapshot"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"\u30e2\u30c3\u30afenzyme-react-16-\u3092\u4f7f\u7528\u3057\u305f\u30b9\u30ca\u30c3\u30d7\u30b7\u30e7\u30c3\u30c8\u30c6\u30b9\u30c8",children:"\u30e2\u30c3\u30af\u3001Enzyme\u3001 React 16+ \u3092\u4f7f\u7528\u3057\u305f\u30b9\u30ca\u30c3\u30d7\u30b7\u30e7\u30c3\u30c8\u30c6\u30b9\u30c8"}),"\n",(0,r.jsx)(n.p,{children:"Enzyme \u3068 React 16 \u4ee5\u964d\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u5834\u5408\u3001\u30b9\u30ca\u30c3\u30d7\u30b7\u30e7\u30c3\u30c8\u30c6\u30b9\u30c8\u306b\u306f\u6ce8\u610f\u70b9\u304c\u3042\u308a\u307e\u3059\u3002 \u4ee5\u4e0b\u306e\u30b9\u30bf\u30a4\u30eb\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u30e2\u30b8\u30e5\u30fc\u30eb\u3092\u30e2\u30c3\u30af\u30a2\u30a6\u30c8\u3059\u308b\u5834\u5408:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"jest.mock('../SomeDirectory/SomeComponent', () => 'SomeComponent');\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u30b3\u30f3\u30bd\u30fc\u30eb\u306b\u6b21\u306e\u3088\u3046\u306a\u8b66\u544a\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"Warning: <SomeComponent /> is using uppercase HTML. Always use lowercase HTML tags in React.\n\n# \u307e\u305f\u306f\nWarning: The tag <SomeComponent> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.\n"})}),"\n",(0,r.jsx)(n.p,{children:"React 16 \u304c\u3053\u308c\u3089\u306e\u8b66\u544a\u3092\u5f15\u304d\u8d77\u3053\u3057\u3066\u3057\u307e\u3046\u7406\u7531\u306f\u3001\u8981\u7d20\u306e\u578b\u30c1\u30a7\u30c3\u30af\u306e\u65b9\u6cd5\u306e\u305f\u3081\u3067\u3042\u308a\u3001\u30e2\u30c3\u30af\u5316\u3057\u305f\u30e2\u30b8\u30e5\u30fc\u30eb\u306f\u3053\u306e\u30c1\u30a7\u30c3\u30af\u306b\u5f15\u3063\u304b\u304b\u3063\u3066\u3057\u307e\u3044\u307e\u3059\u3002 \u3053\u308c\u306b\u5bfe\u51e6\u3059\u308b\u305f\u3081\u306e\u9078\u629e\u80a2\u306f\u4ee5\u4e0b\u306e\u3068\u304a\u308a\u3067\u3059\u3002"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\u30c6\u30ad\u30b9\u30c8\u3068\u3057\u3066\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3059\u308b\u3002 \u3053\u306e\u65b9\u6cd5\u3092\u9078\u3093\u3060\u5834\u5408\u3001\u30b9\u30ca\u30c3\u30d7\u30b7\u30e7\u30c3\u30c8\u5185\u306e\u30e2\u30c3\u30af\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306b\u6e21\u3055\u308c\u305f props \u3092\u78ba\u8a8d\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u305b\u3093\u304c\u3001\u30b7\u30f3\u30d7\u30eb\u3067\u5206\u304b\u308a\u3084\u3059\u3044\u65b9\u6cd5\u3067\u3059\u3002","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"js\n jest.mock('./SomeComponent', () =&#062; () =&#062; 'SomeComponent');\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:['\u30ab\u30b9\u30bf\u30e0\u8981\u7d20\u3068\u3057\u3066\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3059\u308b\u3002 DOM "\u30ab\u30b9\u30bf\u30e0\u8981\u7d20" \u306f\u4e00\u5207\u30c1\u30a7\u30c3\u30af\u3055\u308c\u306a\u3044\u305f\u3081\u3001\u8b66\u544a\u3082\u767a\u751f\u3057\u307e\u305b\u3093\u3002 \u540d\u524d\u306b\u30c0\u30c3\u30b7\u30e5\u3068\u5c0f\u6587\u5b57\u304c\u4f7f\u308f\u308c\u307e\u3059\u3002',"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"tsx\n jest.mock('./Widget', () =&#062; () =&#062; <mock-widget />);\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"react-test-renderer"})," \u3092\u4f7f\u7528\u3059\u308b\u3002 test renderer \u306f\u3001\u8981\u7d20\u306e\u578b\u3092\u6c17\u306b\u3057\u306a\u3044\u306e\u3067\u3001",(0,r.jsx)(n.code,{children:"SomeComponent"})," \u3068\u3044\u3063\u305f\u8981\u7d20\u3092\u8a31\u5bb9\u3057\u3066\u304f\u308c\u307e\u3059\u3002 test renderer \u3092\u4f7f\u3046\u3068\u3001\u30b9\u30ca\u30c3\u30d7\u30b7\u30e7\u30c3\u30c8\u3092\u30c1\u30a7\u30c3\u30af\u3057\u305f\u308a\u3001Enzyme \u3068\u306f\u72ec\u7acb\u3057\u3066\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u3075\u308b\u307e\u3044\u3092\u78ba\u8a8d\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u8b66\u544a\u3092\u3059\u3079\u3066\u7121\u52b9\u306b\u3057\u307e\u3059\uff08jest\u306e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3067\u884c\u3046\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\uff09\uff1a","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"jest.mock('fbjs/lib/warning', () => require('fbjs/lib/emptyFunction'));\n"})}),"\n","\u8b66\u544a\u3092\u3059\u3079\u3066\u7121\u52b9\u306b\u3057\u307e\u3059\uff08jest\u306e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3067\u884c\u3046\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\uff09\uff1a js jest.mock('fbjs/lib/warning', () => require('fbjs/lib/emptyFunction')); \u3053\u308c\u306f\u3001\u6709\u7528\u306a\u8b66\u544a\u304c\u5931\u308f\u308c\u308b\u53ef\u80fd\u6027\u304c\u3042\u308b\u305f\u3081\u3001\u901a\u5e38\u3068\u308b\u3079\u304d\u9078\u629e\u80a2\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002 \u3057\u304b\u3057\u3001\u4f8b\u3048\u3070react-native\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u30c6\u30b9\u30c8\u3059\u308b\u5834\u5408\u306b\u306f\u3001react-native\u30bf\u30b0\u3092DOM\u306b\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3059\u308b\u969b\u306b\u3001\u591a\u304f\u306e\u7121\u95a2\u4fc2\u306a\u8b66\u544a\u304c\u767a\u751f\u3057\u307e\u3059\u3002 \u5225\u306e\u9078\u629e\u80a2\u3068\u3057\u3066\u306f\u3001console.warning \u3092\u5229\u7528\u3057\u3066\u3001\u7279\u5b9a\u306e\u8b66\u544a\u3092\u6291\u5236\u3059\u308b\u3053\u3068\u3067\u3059\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"dom-\u306e\u30c6\u30b9\u30c8",children:"DOM \u306e\u30c6\u30b9\u30c8"}),"\n",(0,r.jsxs)(n.p,{children:["If you'd like to assert, and manipulate your rendered components you can use ",(0,r.jsx)(n.a,{href:"https://github.com/testing-library/react-testing-library",children:"react-testing-library"}),", ",(0,r.jsx)(n.a,{href:"https://enzymejs.github.io/enzyme/",children:"Enzyme"}),", or React's ",(0,r.jsx)(n.a,{href:"https://reactjs.org/docs/test-utils.html",children:"TestUtils"}),". \u4ee5\u4e0b\u306e2\u3064\u306e\u4f8b\u3067\u306f\u3001react-testing-library \u3068 Enzyme \u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.h4,{id:"react-testing-library",children:"react-testing-library"}),"\n",(0,r.jsxs)(s.Z,{groupId:"npm2yarn",children:[(0,r.jsx)(l.Z,{value:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm install --save-dev @testing-library/react\n"})})}),(0,r.jsx)(l.Z,{value:"yarn",label:"Yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn add --dev @testing-library/react\n"})})}),(0,r.jsx)(l.Z,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pnpm add --save-dev @testing-library/react\n"})})})]}),"\n",(0,r.jsx)(n.p,{children:"2\u3064\u306e\u30e9\u30d9\u30eb\u3092\u5165\u308c\u66ff\u3048\u308b\u30c1\u30a7\u30c3\u30af\u30dc\u30c3\u30af\u30b9\u3092\u5b9f\u88c5\u3057\u307e\u3057\u3087\u3046\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",metastring:'title="CheckboxWithLabel.js"',children:"import {useState} from 'react';\n\nexport default function CheckboxWithLabel({labelOn, labelOff}) {\n  const [isChecked, setIsChecked] = useState(false);\n\n  const onChange = () => {\n    setIsChecked(!isChecked);\n  };\n\n  return (\n    <label>\n      <input type=\"checkbox\" checked={isChecked} onChange={onChange} />\n      {isChecked ? labelOn : labelOff}\n    </label>\n  );\n}\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",metastring:'title="__tests__/CheckboxWithLabel-test.js"',children:"import {cleanup, fireEvent, render} from '@testing-library/react';\nimport CheckboxWithLabel from '../CheckboxWithLabel';\n\n// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher\n// unmount and cleanup DOM after the test is finished.\nafterEach(cleanup);\n\nit('CheckboxWithLabel changes the text after click', () => {\n  const {queryByLabelText, getByLabelText} = render(\n    <CheckboxWithLabel labelOn=\"On\" labelOff=\"Off\" />,\n  );\n\n  expect(queryByLabelText(/off/i)).toBeTruthy();\n\n  fireEvent.click(getByLabelText(/off/i));\n\n  expect(queryByLabelText(/on/i)).toBeTruthy();\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The code for this example is available at ",(0,r.jsx)(n.a,{href:"https://github.com/jestjs/jest/tree/main/examples/react-testing-library",children:"examples/react-testing-library"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"enzyme",children:"Enzyme"}),"\n",(0,r.jsxs)(s.Z,{groupId:"npm2yarn",children:[(0,r.jsx)(l.Z,{value:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm install --save-dev enzyme\n"})})}),(0,r.jsx)(l.Z,{value:"yarn",label:"Yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn add --dev enzyme\n"})})}),(0,r.jsx)(l.Z,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pnpm add --save-dev enzyme\n"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["If you are using a React version below 15.5.0, you will also need to install ",(0,r.jsx)(n.code,{children:"react-addons-test-utils"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["react-testing-library\u306e\u4ee3\u308f\u308a\u306bEnzyme\u3092\u4f7f\u7528\u3057\u3066\u4e0a\u8a18\u306e\u30c6\u30b9\u30c8\u3092\u66f8\u304d\u76f4\u3057\u307e\u3057\u3087\u3046\u3002 We use Enzyme's ",(0,r.jsx)(n.a,{href:"https://enzymejs.github.io/enzyme/docs/api/shallow.html",children:"shallow renderer"})," in this example."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",metastring:'title="__tests__/CheckboxWithLabel-test.js"',children:"import Enzyme, {shallow} from 'enzyme';\nimport Adapter from 'enzyme-adapter-react-16';\nimport CheckboxWithLabel from '../CheckboxWithLabel';\n\nEnzyme.configure({adapter: new Adapter()});\n\nit('CheckboxWithLabel changes the text after click', () => {\n  // Render a checkbox with label in the document\n  const checkbox = shallow(<CheckboxWithLabel labelOn=\"On\" labelOff=\"Off\" />);\n\n  expect(checkbox.text()).toBe('Off');\n\n  checkbox.find('input').simulate('change');\n\n  expect(checkbox.text()).toBe('On');\n});\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u72ec\u81ea\u306e\u30b3\u30fc\u30c9\u5909\u63db\u51e6\u7406",children:"\u72ec\u81ea\u306e\u30b3\u30fc\u30c9\u5909\u63db\u51e6\u7406"}),"\n",(0,r.jsxs)(n.p,{children:["\u3088\u308a\u9ad8\u5ea6\u306a\u6a5f\u80fd\u304c\u5fc5\u8981\u306a\u5834\u5408\u306f\u3001\u72ec\u81ea\u306e\u5909\u63db\u51e6\u7406\u3092\u69cb\u7bc9\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002 ",(0,r.jsx)(n.code,{children:"babel-jest"}),"\u3092\u4f7f\u7528\u3059\u308b\u4ee3\u308f\u308a\u306b\u3001 ",(0,r.jsx)(n.code,{children:"@babel/core"})," \u3092\u4f7f\u7528\u3059\u308b\u4f8b\u3092\u793a\u3057\u307e\u3059:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",metastring:'title="custom-transformer.js"',children:"'use strict';\n\nconst {transform} = require('@babel/core');\nconst jestPreset = require('babel-preset-jest');\n\nmodule.exports = {\n  process(src, filename) {\n    const result = transform(src, {\n      filename,\n      presets: [jestPreset],\n    });\n\n    return result || src;\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u3053\u306e\u4f8b\u3092\u52d5\u4f5c\u3055\u305b\u308b\u306b\u306f ",(0,r.jsx)(n.code,{children:"@babel/core"})," \u3068",(0,r.jsx)(n.code,{children:"babel-preset-jest"})," \u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u3053\u3068\u3092\u5fd8\u308c\u306a\u3044\u3067\u4e0b\u3055\u3044\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u3053\u308c\u3092Jest\u3068\u52d5\u4f5c\u3055\u305b\u308b\u306b\u306fJest\u306b\u6b21\u306e\u8a2d\u5b9a\u3092\u8ffd\u52a0\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059:",(0,r.jsx)(n.code,{children:'"transform": {"\\\\.js$": "path/to/custom-transformer.js"}'})]}),"\n",(0,r.jsxs)(n.p,{children:["Babel\u306e\u30b5\u30dd\u30fc\u30c8\u6a5f\u80fd\u3092\u4f7f\u3063\u3066\u30b3\u30fc\u30c9\u306e\u5909\u63db\u51e6\u7406\u3092\u69cb\u7bc9\u3057\u305f\u3044\u5834\u5408\u306f\u3001",(0,r.jsx)(n.code,{children:"babel-jest"}),"\u3092\u5909\u63db\u51e6\u7406\u306e\u4f5c\u6210\u306b\u5229\u7528\u3057\u3001\u305d\u306e\u4e2d\u306b\u72ec\u81ea\u306e\u69cb\u6210\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u6e21\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"const babelJest = require('babel-jest');\n\nmodule.exports = babelJest.createTransformer({\n  presets: ['my-custom-preset'],\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u8a73\u7d30\u306f ",(0,r.jsx)(n.a,{href:"/ja/docs/29.4/code-transformation#writing-custom-transformers",children:"\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"})," \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]})]})}const p=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(u,e)})):u(e)}},1670:(e,n,t)=>{t.d(n,{Zo:()=>c,ah:()=>s});var r=t(7378);const a=r.createContext({});function s(e){const n=r.useContext(a);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function c({components:e,children:n,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||l:s(e),r.createElement(a.Provider,{value:c},n)}}}]);