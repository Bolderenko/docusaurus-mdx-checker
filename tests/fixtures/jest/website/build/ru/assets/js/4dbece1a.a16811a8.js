"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[3819],{9368:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var s=t(4246),c=t(1670);const o={id:"using-matchers",title:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0441\u043e\u043f\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0439"},i=void 0,r={unversionedId:"using-matchers",id:"using-matchers",title:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0441\u043e\u043f\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0439",description:"Jest \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \xabc\u043e\u043f\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f\xbb \u0434\u043b\u044f \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u0440\u0430\u0437\u043d\u044b\u043c\u0438 \u0441\u043f\u043e\u0441\u043e\u0431\u0430\u043c\u0438. \u041d\u0430 \u044d\u0442\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u0431\u0443\u0434\u0443\u0442 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u044b \u0441\u043e\u043f\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0447\u0430\u0449\u0435 \u0432\u0441\u0435\u0433\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f. \u041f\u043e\u043b\u043d\u044b\u0439 \u0441\u043f\u0438\u0441\u043e\u043a \u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0432 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0438 expect API.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/UsingMatchers.md",sourceDirName:".",slug:"/using-matchers",permalink:"/ru/docs/next/using-matchers",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/jest-v2/ru",tags:[],version:"current",frontMatter:{id:"using-matchers",title:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0441\u043e\u043f\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0439"},sidebar:"docs",previous:{title:"\u041d\u0430\u0447\u0430\u043b\u043e \u0440\u0430\u0431\u043e\u0442\u044b",permalink:"/ru/docs/next/getting-started"},next:{title:"\u0422\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u043e\u0433\u043e \u043a\u043e\u0434\u0430",permalink:"/ru/docs/next/asynchronous"}},d={},l=[{value:"\u0421\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u0435 \u0441\u043e\u043f\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f",id:"\u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u0435-\u0441\u043e\u043f\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f",level:2},{value:"\u041f\u0440\u0430\u0432\u0434\u0438\u0432\u043e\u0441\u0442\u044c",id:"\u043f\u0440\u0430\u0432\u0434\u0438\u0432\u043e\u0441\u0442\u044c",level:2},{value:"\u0427\u0438\u0441\u043b\u0430",id:"\u0447\u0438\u0441\u043b\u0430",level:2},{value:"\u0421\u0442\u0440\u043e\u043a\u0438",id:"\u0441\u0442\u0440\u043e\u043a\u0438",level:2},{value:"\u041c\u0430\u0441\u0441\u0438\u0432\u044b \u0438 \u043f\u0435\u0440\u0435\u0431\u0438\u0440\u0430\u0435\u043c\u044b\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u044b",id:"\u043c\u0430\u0441\u0441\u0438\u0432\u044b-\u0438-\u043f\u0435\u0440\u0435\u0431\u0438\u0440\u0430\u0435\u043c\u044b\u0435-\u043e\u0431\u044a\u0435\u043a\u0442\u044b",level:2},{value:"\u0418\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f",id:"\u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f",level:2},{value:"\u0418 \u043c\u043d\u043e\u0433\u043e\u0435 \u0434\u0440\u0443\u0433\u043e\u0435",id:"\u0438-\u043c\u043d\u043e\u0433\u043e\u0435-\u0434\u0440\u0443\u0433\u043e\u0435",level:2}];function a(e){const n=Object.assign({p:"p",a:"a",code:"code",h2:"h2",pre:"pre",admonition:"admonition",ul:"ul",li:"li"},(0,c.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Jest \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \xabc\u043e\u043f\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f\xbb \u0434\u043b\u044f \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u0440\u0430\u0437\u043d\u044b\u043c\u0438 \u0441\u043f\u043e\u0441\u043e\u0431\u0430\u043c\u0438. \u041d\u0430 \u044d\u0442\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u0431\u0443\u0434\u0443\u0442 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u044b \u0441\u043e\u043f\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0447\u0430\u0449\u0435 \u0432\u0441\u0435\u0433\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f. \u041f\u043e\u043b\u043d\u044b\u0439 \u0441\u043f\u0438\u0441\u043e\u043a \u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0432 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0438 ",(0,s.jsxs)(n.a,{href:"/ru/docs/next/expect",children:[(0,s.jsx)(n.code,{children:"expect"})," API"]}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"\u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u0435-\u0441\u043e\u043f\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f",children:"\u0421\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u0435 \u0441\u043e\u043f\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f"}),"\n",(0,s.jsx)(n.p,{children:"\u0421\u0430\u043c\u044b\u0439 \u043f\u0440\u043e\u0441\u0442\u043e\u0439 \u0441\u043f\u043e\u0441\u043e\u0431 \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u2014 \u043f\u0440\u0438 \u043f\u043e\u043c\u043e\u0449\u0438 \u0442\u043e\u0447\u043d\u043e\u0433\u043e \u0440\u0430\u0432\u0435\u043d\u0441\u0442\u0432\u0430."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"test('\u0434\u0432\u0430 \u043f\u043b\u044e\u0441 \u0434\u0432\u0430 \u0440\u0430\u0432\u043d\u043e \u0447\u0435\u0442\u044b\u0440\u0435', () => {\n  expect(2 + 2).toBe(4);\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u0412 \u044d\u0442\u043e\u043c \u043a\u043e\u0434\u0435 ",(0,s.jsx)(n.code,{children:"expect(2+2)"}),' \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043e\u0431\u044a\u0435\u043a\u0442 "\u043e\u0436\u0438\u0434\u0430\u043d\u0438\u0439". \u041e\u0431\u044b\u0447\u043d\u043e \u0432\u0430\u043c \u043d\u0435 \u043f\u0440\u0438\u0434\u0435\u0442\u0441\u044f \u0434\u0435\u043b\u0430\u0442\u044c \u0441 \u044d\u0442\u0438\u043c\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u0430\u043c\u0438 \u043e\u0436\u0438\u0434\u0430\u043d\u0438\u0439 \u043d\u0438\u0447\u0435\u0433\u043e \u043a\u0440\u043e\u043c\u0435 \u043a\u0430\u043a \u0432\u044b\u0437\u044b\u0432\u0430\u0442\u044c \u0438\u0445 \u0432\u044b\u0447\u0438\u0441\u043b\u0438\u0442\u0435\u043b\u0438. \u0412 \u044d\u0442\u043e\u043c \u043f\u0440\u0438\u043c\u0435\u0440\u0435 \u043a\u043e\u0434\u0430 ',(0,s.jsx)(n.code,{children:".toBe(4)"})," \u044d\u0442\u043e \u0432\u044b\u0447\u0438\u0441\u043b\u0438\u0442\u0435\u043b\u044c. \u041f\u0440\u0438 \u0437\u0430\u043f\u0443\u0441\u043a\u0435, Jest \u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u0435\u0442 \u0432\u0441\u0435 \u043f\u0440\u043e\u0432\u0430\u043b\u0438\u0432\u0448\u0438\u0435\u0441\u044f \u0432\u044b\u0447\u0438\u0441\u043b\u0438\u0442\u0435\u043b\u0438 \u0434\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u043e\u043d \u043c\u043e\u0433 \u043d\u0430\u043f\u0435\u0447\u0430\u0442\u0430\u0442\u044c \u0434\u043b\u044f \u0432\u0430\u0441 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u043e\u0431 \u043e\u0448\u0438\u0431\u043a\u0430\u0445."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"toBe"})," \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 ",(0,s.jsx)(n.code,{children:"Object.is"})," \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u0442\u043e\u0447\u043d\u043e\u0433\u043e \u0441\u043e\u0432\u043f\u0430\u0434\u0435\u043d\u0438\u044f. If you want to check the value of an object, use ",(0,s.jsx)(n.code,{children:"toEqual"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"test('\u043f\u0440\u0438\u0441\u0432\u0430\u0438\u0432\u0430\u043d\u0438\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u0443', () => {\n  const data = {\u043e\u0434\u0438\u043d: 1};\n  data['\u0434\u0432\u0430'] = 2;\n  expect(data).toEqual({\u043e\u0434\u0438\u043d: 1, \u0434\u0432\u0430: 2});\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"toEqual"})," \u0440\u0435\u043a\u0443\u0440\u0441\u0438\u0432\u043d\u043e \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u0442 \u043a\u0430\u0436\u0434\u043e\u0435 \u043f\u043e\u043b\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u0438\u043b\u0438 \u043c\u0430\u0441\u0441\u0438\u0432\u0430."]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"toEqual"})," ignores object keys with ",(0,s.jsx)(n.code,{children:"undefined"})," properties, ",(0,s.jsx)(n.code,{children:"undefined"})," array items, array sparseness, or object type mismatch. To take these into account use ",(0,s.jsx)(n.code,{children:"toStrictEqual"})," instead."]})}),"\n",(0,s.jsxs)(n.p,{children:["You can also test for the opposite of a matcher using ",(0,s.jsx)(n.code,{children:"not"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"test('\u0441\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043f\u043e\u043b\u043e\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u0447\u0438\u0441\u0435\u043b \u043d\u0435 \u0440\u0430\u0432\u043d\u043e \u043d\u0443\u043b\u044e', () => {\n  for (let a = 1; a < 10; a++) {\n    for (let b = 1; b < 10; b++) {\n      expect(a + b).not.toBe(0);\n    }\n  }\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u043f\u0440\u0430\u0432\u0434\u0438\u0432\u043e\u0441\u0442\u044c",children:"\u041f\u0440\u0430\u0432\u0434\u0438\u0432\u043e\u0441\u0442\u044c"}),"\n",(0,s.jsxs)(n.p,{children:["\u041f\u0440\u0438 \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0438 \u0438\u043d\u043e\u0433\u0434\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0440\u0430\u0437\u043b\u0438\u0447\u0430\u0442\u044c ",(0,s.jsx)(n.code,{children:"undefined"}),", ",(0,s.jsx)(n.code,{children:"null"})," \u0438 ",(0,s.jsx)(n.code,{children:"false"}),", \u043d\u043e \u0432 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u044f\u0445 \u044d\u0442\u043e \u043d\u0435 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f. Jest \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0432\u0441\u043f\u043e\u043c\u043e\u0433\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0449\u0438\u0435 \u044f\u0432\u043d\u043e \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c, \u0447\u0442\u043e \u0432\u0430\u043c \u043d\u0443\u0436\u043d\u043e."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"toBeNull"})," \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0442\u043e\u043b\u044c\u043a\u043e ",(0,s.jsx)(n.code,{children:"null"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"toBeUndefined"})," \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0442\u043e\u043b\u044c\u043a\u043e ",(0,s.jsx)(n.code,{children:"undefined"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"toBeDefined"})," \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043f\u0440\u043e\u0442\u0438\u0432\u043e\u043f\u043e\u043b\u043e\u0436\u043d\u043e\u0441\u0442\u044c\u044e ",(0,s.jsx)(n.code,{children:"toBeUndefined"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"toBeTruthy"})," \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0432\u0441\u0435\u043c\u0443, \u0447\u0442\u043e ",(0,s.jsx)(n.code,{children:"if"})," \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0440\u0430\u0441\u0441\u043c\u0430\u0442\u0440\u0438\u0432\u0430\u0435\u0442 \u043a\u0430\u043a true"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"toBeFalsy"})," \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0432\u0441\u0435\u043c\u0443, \u0447\u0442\u043e ",(0,s.jsx)(n.code,{children:"if"})," \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f \u0440\u0430\u0441\u0441\u043c\u0430\u0442\u0440\u0438\u0432\u0430\u0435\u0442 \u043a\u0430\u043a false"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"test('null', () => {\n  const n = null;\n  expect(n).toBeNull();\n  expect(n).toBeDefined();\n  expect(n).not.toBeUndefined();\n  expect(n).not.toBeTruthy();\n  expect(n).toBeFalsy();\n});\n\ntest('\u043d\u043e\u043b\u044c', () => {\n  const z = 0;\n  expect(z).not.toBeNull();\n  expect(z).toBeDefined();\n  expect(z).not.toBeUndefined();\n  expect(z).not.toBeTruthy();\n  expect(z).toBeFalsy();\n});\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u0421\u043b\u0435\u0434\u0443\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432\u044b\u0447\u0438\u0441\u043b\u0438\u0442\u0435\u043b\u044c, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043d\u0430\u0438\u0431\u043e\u043b\u0435\u0435 \u0442\u043e\u0447\u043d\u043e \u043e\u0442\u0440\u0430\u0436\u0430\u0435\u0442 \u0442\u043e, \u0447\u0442\u043e \u043a\u043e\u0434 \u0434\u043e\u043b\u0436\u0435\u043d \u0434\u0435\u043b\u0430\u0442\u044c."}),"\n",(0,s.jsx)(n.h2,{id:"\u0447\u0438\u0441\u043b\u0430",children:"\u0427\u0438\u0441\u043b\u0430"}),"\n",(0,s.jsx)(n.p,{children:"\u0411\u043e\u043b\u044c\u0448\u0438\u043d\u0441\u0442\u0432\u043e \u0441\u043f\u043e\u0441\u043e\u0431\u043e\u0432 \u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u044f \u0447\u0438\u0441\u0435\u043b \u0438\u043c\u0435\u044e\u0442 \u044d\u043a\u0432\u0438\u0432\u0430\u043b\u0435\u043d\u0442\u043d\u044b\u0435 \u0432\u044b\u0447\u0438\u0441\u043b\u0438\u0442\u0435\u043b\u0438."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"test('\u0434\u0432\u0430 \u043f\u043b\u044e\u0441 \u0434\u0432\u0430', () => {\n  const value = 2 + 2;\n  expect(value).toBeGreaterThan(3);\n  expect(value).toBeGreaterThanOrEqual(3.5);\n  expect(value).toBeLessThan(5);\n  expect(value).toBeLessThanOrEqual(4.5);\n\n  // toBe \u0438 toEqual \u044d\u043a\u0432\u0438\u0432\u0430\u043b\u0435\u043d\u0442\u043d\u044b \u043f\u043e \u043e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u044e \u043a \u0447\u0438\u0441\u043b\u0430\u043c\n  expect(value).toBe(4);\n  expect(value).toEqual(4);\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u0414\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u0440\u0430\u0432\u0435\u043d\u0441\u0442\u0432\u0430 \u0447\u0438\u0441\u0435\u043b \u0441 \u043f\u043b\u0430\u0432\u0430\u044e\u0449\u0435\u0439 \u0437\u0430\u043f\u044f\u0442\u043e\u0439, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 ",(0,s.jsx)(n.code,{children:"toBeCloseTo"})," \u0432\u043c\u0435\u0441\u0442\u043e ",(0,s.jsx)(n.code,{children:"toEqual"})," \u043f\u043e\u0442\u043e\u043c\u0443, \u0447\u0442\u043e \u0432\u044b \u043d\u0435 \u0445\u043e\u0442\u0438\u0442\u0435, \u0447\u0442\u043e\u0431\u044b \u0442\u0435\u0441\u0442 \u043f\u043e\u043b\u0430\u0433\u0430\u043b\u0441\u044f \u043d\u0430 \u043d\u0435\u0431\u043e\u043b\u044c\u0448\u0443\u044e \u043e\u0448\u0438\u0431\u043a\u0443 \u043e\u043a\u0440\u0443\u0433\u043b\u0435\u043d\u0438\u044f."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"test('\u0441\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0447\u0438\u0441\u0435\u043b \u0441 \u043f\u043b\u0430\u0432\u0430\u044e\u0449\u0435\u0439 \u0437\u0430\u043f\u044f\u0442\u043e\u0439', () => {\n  const value = 0.1 + 0.2;\n  //expect(value).toBe(0.3);         \u042d\u0442\u043e \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0438\u0437-\u0437\u0430 \u043e\u0448\u0438\u0431\u043a\u0438 \u043e\u043a\u0440\u0443\u0433\u043b\u0435\u043d\u0438\u044f\n  expect(value).toBeCloseTo(0.3); // \u0410 \u044d\u0442\u043e \u0441\u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442.\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u0441\u0442\u0440\u043e\u043a\u0438",children:"\u0421\u0442\u0440\u043e\u043a\u0438"}),"\n",(0,s.jsxs)(n.p,{children:["\u0414\u043b\u044f \u0441\u043e\u043f\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0441\u0442\u0440\u043e\u043a \u0441 \u0440\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u044b\u043c\u0438 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044f\u043c\u0438, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 ",(0,s.jsx)(n.code,{children:"toMatch"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"test('\u0432 \u043a\u043e\u043c\u0430\u043d\u0434\u0435 \u043d\u0435\u0442 \u043c\u0435\u0441\u0442\u0430 \u042f', () => {\n  expect('\u043a\u043e\u043c\u0430\u043d\u0434\u0430').not.toMatch(/\u042f/);\n});\n\ntest('\u043d\u043e \u0435\u0441\u0442\u044c \"\u0430\u0441\u044f\" \u0432 \u0412\u0430\u0441\u0435', () => {\n  expect('\u0412\u0430\u0441\u044f').toMatch(/\u0430\u0441\u044f/);\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u043c\u0430\u0441\u0441\u0438\u0432\u044b-\u0438-\u043f\u0435\u0440\u0435\u0431\u0438\u0440\u0430\u0435\u043c\u044b\u0435-\u043e\u0431\u044a\u0435\u043a\u0442\u044b",children:"\u041c\u0430\u0441\u0441\u0438\u0432\u044b \u0438 \u043f\u0435\u0440\u0435\u0431\u0438\u0440\u0430\u0435\u043c\u044b\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u044b"}),"\n",(0,s.jsxs)(n.p,{children:["\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c, \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u043b\u0438 \u043c\u0430\u0441\u0441\u0438\u0432 \u0438\u043b\u0438 \u0438\u0442\u0435\u0440\u0438\u0440\u0443\u0435\u043c\u044b\u0439 \u043e\u0431\u044a\u0435\u043a\u0442 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f ",(0,s.jsx)(n.code,{children:"toContain"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const shoppingList = [\n  'diapers',\n  'kleenex',\n  'trash bags',\n  'paper towels',\n  'milk',\n];\n\ntest('the shopping list has milk on it', () => {\n  expect(shoppingList).toContain('milk');\n  expect(new Set(shoppingList)).toContain('milk');\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f",children:"\u0418\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f"}),"\n",(0,s.jsxs)(n.p,{children:["\u0414\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u0432\u043e\u0437\u0432\u0440\u0430\u0442\u0430 \u043e\u0448\u0438\u0431\u043a\u0438 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0439 \u0444\u0443\u043d\u043a\u0446\u0438\u0435\u0439 \u043f\u0440\u0438 \u0435\u0451 \u0432\u044b\u0437\u043e\u0432\u0435, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 ",(0,s.jsx)(n.code,{children:"toThrow"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"function compileAndroidCode() {\n  throw new Error('you are using the wrong JDK!');\n}\n\ntest('compiling android goes as expected', () => {\n  expect(() => compileAndroidCode()).toThrow();\n  expect(() => compileAndroidCode()).toThrow(Error);\n\n  // You can also use a string that must be contained in the error message or a regexp\n  expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');\n  expect(() => compileAndroidCode()).toThrow(/JDK/);\n\n  // Or you can match an exact error message using a regexp like below\n  expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK$/); // Test fails\n  expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK!$/); // Test pass\n});\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["The function that throws an exception needs to be invoked within a wrapping function otherwise the ",(0,s.jsx)(n.code,{children:"toThrow"})," assertion will fail."]})}),"\n",(0,s.jsx)(n.h2,{id:"\u0438-\u043c\u043d\u043e\u0433\u043e\u0435-\u0434\u0440\u0443\u0433\u043e\u0435",children:"\u0418 \u043c\u043d\u043e\u0433\u043e\u0435 \u0434\u0440\u0443\u0433\u043e\u0435"}),"\n",(0,s.jsxs)(n.p,{children:["\u042d\u0442\u043e \u043b\u0438\u0448\u044c \u043f\u0440\u043e\u0431\u0430 \u043f\u0435\u0440\u0430. \u0414\u043b\u044f \u043e\u0437\u043d\u0430\u043a\u043e\u043c\u043b\u0435\u043d\u0438\u044f \u0441 \u043f\u043e\u043b\u043d\u044b\u043c \u0441\u043f\u0438\u0441\u043a\u043e\u043c \u0441\u043e\u043f\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0439, \u043e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435 \u043d\u0430 ",(0,s.jsx)(n.a,{href:"/ru/docs/next/expect",children:"\u0441\u043f\u0440\u0430\u0432\u043e\u0447\u043d\u0443\u044e \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044e"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["\u041f\u043e\u0441\u043b\u0435 \u0442\u043e\u0433\u043e \u043a\u0430\u043a \u0432\u044b \u0443\u0437\u043d\u0430\u043b\u0438 \u043e \u0432\u0441\u0435\u0445 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0445 \u0441\u043e\u043f\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f\u0445, \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c \u0448\u0430\u0433\u043e\u043c \u0432\u0437\u0433\u043b\u044f\u043d\u0438\u0442\u0435 \u043d\u0430 \u0442\u043e, \u043a\u0430\u043a Jest \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 ",(0,s.jsx)(n.a,{href:"/ru/docs/next/asynchronous",children:"\u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0439 \u043a\u043e\u0434"}),"."]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,c.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(a,e)})):a(e)}},1670:(e,n,t)=>{t.d(n,{Zo:()=>r,ah:()=>o});var s=t(7378);const c=s.createContext({});function o(e){const n=s.useContext(c);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function r({components:e,children:n,disableParentContext:t}){let r;return r=t?"function"==typeof e?e({}):e||i:o(e),s.createElement(c.Provider,{value:r},n)}}}]);