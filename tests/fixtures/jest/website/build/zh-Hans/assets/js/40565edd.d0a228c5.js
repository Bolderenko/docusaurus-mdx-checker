"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[4174],{5802:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var s=t(4246),c=t(1670);const r={id:"asynchronous",title:"\u6d4b\u8bd5\u5f02\u6b65\u4ee3\u7801"},a=void 0,o={unversionedId:"asynchronous",id:"version-29.5/asynchronous",title:"\u6d4b\u8bd5\u5f02\u6b65\u4ee3\u7801",description:"\u5728JavaScript\u4e2d\u6267\u884c\u5f02\u6b65\u4ee3\u7801\u662f\u5f88\u5e38\u89c1\u7684\u3002 \u5f53\u4f60\u6709\u4ee5\u5f02\u6b65\u65b9\u5f0f\u8fd0\u884c\u7684\u4ee3\u7801\u65f6\uff0cJest \u9700\u8981\u77e5\u9053\u5f53\u524d\u5b83\u6d4b\u8bd5\u7684\u4ee3\u7801\u662f\u5426\u5df2\u5b8c\u6210\uff0c\u7136\u540e\u5b83\u53ef\u4ee5\u8f6c\u79fb\u5230\u53e6\u4e00\u4e2a\u6d4b\u8bd5\u3002 Jest\u6709\u82e5\u5e72\u65b9\u6cd5\u5904\u7406\u8fd9\u79cd\u60c5\u51b5\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/version-29.5/TestingAsyncCode.md",sourceDirName:".",slug:"/asynchronous",permalink:"/zh-Hans/docs/29.5/asynchronous",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/jest-v2/zh-CN",tags:[],version:"29.5",frontMatter:{id:"asynchronous",title:"\u6d4b\u8bd5\u5f02\u6b65\u4ee3\u7801"},sidebar:"docs",previous:{title:"\u5339\u914d\u5668\u7684\u4f7f\u7528",permalink:"/zh-Hans/docs/29.5/using-matchers"},next:{title:"\u5b89\u88c5\u548c\u79fb\u9664",permalink:"/zh-Hans/docs/29.5/setup-teardown"}},i={},d=[{value:"Promise",id:"promise",level:2},{value:"Async/Await",id:"asyncawait",level:2},{value:"\u56de\u8c03",id:"\u56de\u8c03",level:2},{value:"<code>.resolves</code> / <code>.rejects</code>",id:"resolves--rejects",level:2}];function l(e){const n=Object.assign({p:"p",h2:"h2",code:"code",pre:"pre",admonition:"admonition"},(0,c.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"\u5728JavaScript\u4e2d\u6267\u884c\u5f02\u6b65\u4ee3\u7801\u662f\u5f88\u5e38\u89c1\u7684\u3002 \u5f53\u4f60\u6709\u4ee5\u5f02\u6b65\u65b9\u5f0f\u8fd0\u884c\u7684\u4ee3\u7801\u65f6\uff0cJest \u9700\u8981\u77e5\u9053\u5f53\u524d\u5b83\u6d4b\u8bd5\u7684\u4ee3\u7801\u662f\u5426\u5df2\u5b8c\u6210\uff0c\u7136\u540e\u5b83\u53ef\u4ee5\u8f6c\u79fb\u5230\u53e6\u4e00\u4e2a\u6d4b\u8bd5\u3002 Jest\u6709\u82e5\u5e72\u65b9\u6cd5\u5904\u7406\u8fd9\u79cd\u60c5\u51b5\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"promise",children:"Promise"}),"\n",(0,s.jsx)(n.p,{children:"\u4e3a\u4f60\u7684\u6d4b\u8bd5\u8fd4\u56de\u4e00\u4e2aPromise\uff0c\u5219Jest\u4f1a\u7b49\u5f85Promise\u7684resove\u72b6\u6001 \u5982\u679c Promise \u7684\u72b6\u6001\u53d8\u4e3a rejected, \u6d4b\u8bd5\u5c06\u4f1a\u5931\u8d25\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u4f8b\u5982\uff0c\u6709\u4e00\u4e2a\u540d\u4e3a",(0,s.jsx)(n.code,{children:"fetchData"}),"\u7684Promise, \u5047\u8bbe\u5b83\u4f1a\u8fd4\u56de\u5185\u5bb9\u4e3a",(0,s.jsx)(n.code,{children:"'peanut butter'"}),"\u7684\u5b57\u7b26\u4e32 \u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u4e0b\u9762\u7684\u6d4b\u8bd5\u4ee3\u7801\ufe30"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"test('the data is peanut butter', () => {\n  return fetchData().then(data => {\n    expect(data).toBe('peanut butter');\n  });\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"asyncawait",children:"Async/Await"}),"\n",(0,s.jsxs)(n.p,{children:["\u6216\u8005\uff0c\u60a8\u53ef\u4ee5\u5728\u6d4b\u8bd5\u4e2d\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"async"})," \u548c ",(0,s.jsx)(n.code,{children:"await"}),"\u3002 \u5199\u5f02\u6b65\u6d4b\u8bd5\u7528\u4f8b\u65f6\uff0c\u53ef\u4ee5\u5728\u4f20\u9012\u7ed9",(0,s.jsx)(n.code,{children:"test"}),"\u7684\u51fd\u6570\u524d\u9762\u52a0\u4e0a",(0,s.jsx)(n.code,{children:"async"}),"\u3002 \u4f8b\u5982\uff0c\u53ef\u4ee5\u7528\u6765\u6d4b\u8bd5\u76f8\u540c\u7684 ",(0,s.jsx)(n.code,{children:"fetchData"})," \u65b9\u6848\ufe30"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"test('the data is peanut butter', async () => {\n  const data = await fetchData();\n  expect(data).toBe('peanut butter');\n});\n\ntest('the fetch fails with an error', async () => {\n  expect.assertions(1);\n  try {\n    await fetchData();\n  } catch (e) {\n    expect(e).toMatch('error');\n  }\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u4f60\u4e5f\u53ef\u4ee5\u5c06 ",(0,s.jsx)(n.code,{children:"async"})," and ",(0,s.jsx)(n.code,{children:"await"}),"\u548c ",(0,s.jsx)(n.code,{children:".resolves"})," or ",(0,s.jsx)(n.code,{children:".rejects"}),"\u4e00\u8d77\u4f7f\u7528\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"test('the data is peanut butter', async () => {\n  await expect(fetchData()).resolves.toBe('peanut butter');\n});\n\ntest('the fetch fails with an error', async () => {\n  await expect(fetchData()).rejects.toMatch('error');\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u4e0a\u8ff0\u793a\u4f8b\u4e2d\uff0c",(0,s.jsx)(n.code,{children:"async"})," and ",(0,s.jsx)(n.code,{children:"await"}),"\u5b9e\u9645\u4e0a\u662f\u4e00\u79cd\u57fa\u4e8ePromise\u7684\u5f02\u6b65\u8bed\u6cd5\u7cd6\u3002"]}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.p,{children:["Be sure to return (or ",(0,s.jsx)(n.code,{children:"await"}),") the promise - if you omit the ",(0,s.jsx)(n.code,{children:"return"}),"/",(0,s.jsx)(n.code,{children:"await"})," statement, your test will complete before the promise returned from ",(0,s.jsx)(n.code,{children:"fetchData"})," resolves or rejects."]})}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u671f\u671bPromise\u88abReject\uff0c\u5219\u9700\u8981\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:".catch"})," \u65b9\u6cd5\u3002 \u8bf7\u786e\u4fdd\u6dfb\u52a0 ",(0,s.jsx)(n.code,{children:"expect.assertions"})," \u6765\u9a8c\u8bc1\u4e00\u5b9a\u6570\u91cf\u7684\u65ad\u8a00\u88ab\u8c03\u7528\u3002 \u5426\u5219\uff0c\u4e00\u4e2afulfilled\u72b6\u6001\u7684Promise\u4e0d\u4f1a\u8ba9\u6d4b\u8bd5\u7528\u4f8b\u5931\u8d25\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"test('the fetch fails with an error', () => {\n  expect.assertions(1);\n  return fetchData().catch(e => expect(e).toMatch('error'));\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u56de\u8c03",children:"\u56de\u8c03"}),"\n",(0,s.jsxs)(n.p,{children:["If you don't use promises, you can use callbacks. For example, let's say that ",(0,s.jsx)(n.code,{children:"fetchData"}),", instead of returning a promise, expects a callback, i.e. fetches some data and calls ",(0,s.jsx)(n.code,{children:"callback(null, data)"})," when it is complete. \u4f60\u671f\u671b\u8fd4\u56de\u7684\u6570\u636e\u662f\u4e00\u4e2a\u5b57\u7b26\u4e32 ",(0,s.jsx)(n.code,{children:"'peanut butter'"})]}),"\n",(0,s.jsx)(n.p,{children:"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u4e00\u65e6\u5230\u8fbe\u8fd0\u884c\u4e0a\u4e0b\u6587\u5e95\u90e8Jest\u6d4b\u8bd5\u7acb\u5373\u7ed3\u675f\u3002 \u8fd9\u6837\u610f\u5473\u7740\u8fd9\u4e2a\u6d4b\u8bd5\u5c06\u4e0d\u80fd\u6309\u9884\u671f\u5de5\u4f5c\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// \u4e0d\u8981\u8fd9\u6837\u505a\uff01\uff01\uff01\ntest('the data is peanut butter', () => {\n  function callback(error, data) {\n    if (error) {\n      throw error;\n    }\n    expect(data).toBe('peanut butter');\n  }\n\n  fetchData(callback);\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u95ee\u9898\u5728\u4e8e\u4e00\u65e6",(0,s.jsx)(n.code,{children:"fetchData"}),"\u6267\u884c\u7ed3\u675f\uff0c\u6b64\u6d4b\u8bd5\u5c31\u5728\u8c03\u7528\u56de\u8c03\u51fd\u6570\u524d\u7ed3\u675f\u4e86\uff08\u56e0\u4e3a\u540c\u6b65\u4ee3\u7801\u7ed3\u675f\u540e\uff0c\u624d\u662f\u5f02\u6b65\u62ff\u5230\u7684\u6570\u636e\uff09\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u8fd8\u6709\u53e6\u4e00\u79cd\u5f62\u5f0f\u7684 ",(0,s.jsx)(n.code,{children:"test"})," \u53ef\u4ee5\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u3002 \u4f7f\u7528\u5355\u4e2a\u53c2\u6570\u8c03\u7528 ",(0,s.jsx)(n.code,{children:"done"}),"\uff0c\u800c\u4e0d\u662f\u5c06\u6d4b\u8bd5\u653e\u5728\u4e00\u4e2a\u7a7a\u53c2\u6570\u7684\u51fd\u6570\u3002 Jest\u4f1a\u7b49",(0,s.jsx)(n.code,{children:"done"}),"\u56de\u8c03\u51fd\u6570\u88ab\u8c03\u7528\u6267\u884c\u7ed3\u675f\u540e\uff0c\u518d\u7ed3\u675f\u6d4b\u8bd5\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"test('the data is peanut butter', done => {\n  function callback(error, data) {\n    if (error) {\n      done(error);\n      return;\n    }\n    try {\n      expect(data).toBe('peanut butter');\n      done();\n    } catch (error) {\n      done(error);\n    }\n  }\n\n  fetchData(callback);\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u82e5 ",(0,s.jsx)(n.code,{children:"done()"})," \u51fd\u6570\u4ece\u672a\u88ab\u8c03\u7528\uff0c\u6d4b\u8bd5\u7528\u4f8b\u4f1a\u6b63\u5982\u4f60\u9884\u671f\u7684\u90a3\u6837\u6267\u884c\u5931\u8d25\uff08\u663e\u793a\u8d85\u65f6\u9519\u8bef\uff09\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u82e5 ",(0,s.jsx)(n.code,{children:"expect"})," \u6267\u884c\u5931\u8d25\uff0c\u5b83\u4f1a\u629b\u51fa\u4e00\u4e2a\u9519\u8bef\uff0c\u540e\u9762\u7684 ",(0,s.jsx)(n.code,{children:"done()"})," \u4e0d\u518d\u6267\u884c\u3002 \u82e5\u6211\u4eec\u60f3\u77e5\u9053\u6d4b\u8bd5\u7528\u4f8b\u4e3a\u4f55\u5931\u8d25\uff0c\u6211\u4eec\u5fc5\u987b\u5c06 ",(0,s.jsx)(n.code,{children:"expect"})," \u653e\u5165 ",(0,s.jsx)(n.code,{children:"try"})," \u4e2d\uff0c\u5c06 error \u4f20\u9012\u7ed9 ",(0,s.jsx)(n.code,{children:"catch"})," \u4e2d\u7684 ",(0,s.jsx)(n.code,{children:"done"}),"\u51fd\u6570\u3002 \u5426\u5219\uff0c\u6700\u540e\u63a7\u5236\u53f0\u5c06\u663e\u793a\u4e00\u4e2a\u8d85\u65f6\u9519\u8bef\u5931\u8d25\uff0c\u4e0d\u80fd\u663e\u793a\u6211\u4eec\u5728 ",(0,s.jsx)(n.code,{children:"expect(data)"})," \u4e2d\u63a5\u6536\u7684\u503c\u3002"]}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.p,{children:["Jest will throw an error, if the same test function is passed a ",(0,s.jsx)(n.code,{children:"done()"})," callback and returns a promise. This is done as a precaution to avoid memory leaks in your tests."]})}),"\n",(0,s.jsxs)(n.h2,{id:"resolves--rejects",children:[(0,s.jsx)(n.code,{children:".resolves"})," / ",(0,s.jsx)(n.code,{children:".rejects"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u60a8\u8fd8\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:".resolves"})," \u5339\u914d\u5668\u5728\u60a8\u671f\u671b\u7684\u58f0\u660e\uff0cJest \u4f1a\u7b49\u5f85\u8fd9\u4e00 Promise \u6765\u89e3\u51b3\u3002 \u5982\u679c Promise \u88ab\u62d2\u7edd\uff0c\u5219\u6d4b\u8bd5\u5c06\u81ea\u52a8\u5931\u8d25\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"test('the data is peanut butter', () => {\n  return expect(fetchData()).resolves.toBe('peanut butter');\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u4e00\u5b9a\u4e0d\u8981\u5fd8\u8bb0\u628a\u6574\u4e2a\u65ad\u8a00\u4f5c\u4e3a\u8fd4\u56de\u503c\u8fd4\u56de\u2e3a\u5982\u679c\u4f60\u5fd8\u4e86",(0,s.jsx)(n.code,{children:"return"}),"\u8bed\u53e5\u7684\u8bdd\uff0c\u5728 ",(0,s.jsx)(n.code,{children:"fetchData"})," \u8fd4\u56de\u7684\u8fd9\u4e2a promise \u53d8\u66f4\u4e3a resolved \u72b6\u6001\u3001then() \u6709\u673a\u4f1a\u6267\u884c\u4e4b\u524d\uff0c\u6d4b\u8bd5\u5c31\u5df2\u7ecf\u88ab\u89c6\u4e3a\u5df2\u7ecf\u5b8c\u6210\u4e86\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u5e0c\u671bPromise\u8fd4\u56derejected\uff0c\u4f60\u9700\u8981\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:".rejects"})," \u5339\u914d\u5668\u3002 \u5b83\u548c ",(0,s.jsx)(n.code,{children:".resolves"})," \u5339\u914d\u5668\u662f\u4e00\u6837\u7684\u4f7f\u7528\u65b9\u5f0f\u3002 \u5982\u679c Promise \u88ab\u62d2\u7edd\uff0c\u5219\u6d4b\u8bd5\u5c06\u81ea\u52a8\u5931\u8d25\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"test('the fetch fails with an error', () => {\n  return expect(fetchData()).rejects.toMatch('error');\n});\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u4e0a\u8ff0\u51e0\u79cd\u5f02\u6b65\u5f62\u5f0f\u6ca1\u6709\u4f18\u52a3\u4e4b\u5206\uff0c\u4f60\u53ef\u4ee5\u5728\u4f60\u7684\u9879\u76ee\u6216\u8005\u6587\u4ef6\u4e2d\u6df7\u5408\u6216\u5355\u72ec\u4f7f\u7528\u4ed6\u4eec\u3002 \u8fd9\u53ea\u53d6\u51b3\u4e8e\u54ea\u79cd\u5f62\u5f0f\u66f4\u80fd\u4f7f\u60a8\u7684\u6d4b\u8bd5\u53d8\u5f97\u7b80\u5355\u3002"})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,c.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}},1670:(e,n,t)=>{t.d(n,{Zo:()=>o,ah:()=>r});var s=t(7378);const c=s.createContext({});function r(e){const n=s.useContext(c);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function o({components:e,children:n,disableParentContext:t}){let o;return o=t?"function"==typeof e?e({}):e||a:r(e),s.createElement(c.Provider,{value:o},n)}}}]);