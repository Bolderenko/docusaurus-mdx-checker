"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[7955],{957:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var t=n(4246),r=n(1670);const a={id:"tutorial-async",title:"Um Exemplo de Async"},o=void 0,c={unversionedId:"tutorial-async",id:"version-29.5/tutorial-async",title:"Um Exemplo de Async",description:"Primeiro, ative o suporte para Babel em Jest conforme documentado no guia de Introdu\xe7\xe3o.",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/version-29.5/TutorialAsync.md",sourceDirName:".",slug:"/tutorial-async",permalink:"/pt-BR/docs/29.5/tutorial-async",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/jest-v2/pt-BR",tags:[],version:"29.5",frontMatter:{id:"tutorial-async",title:"Um Exemplo de Async"},sidebar:"docs",previous:{title:"Teste de Snapshot",permalink:"/pt-BR/docs/29.5/snapshot-testing"},next:{title:"Simula\xe7\xf5es de Temporizador",permalink:"/pt-BR/docs/29.5/timer-mocks"}},i={},d=[{value:"<code>.resolves</code>",id:"resolves",level:2},{value:"<code>async</code>/<code>await</code>",id:"asyncawait",level:2},{value:"Tratamento de erros",id:"tratamento-de-erros",level:2},{value:"<code>.rejects</code>",id:"rejects",level:2}];function l(e){const s=Object.assign({p:"p",a:"a",pre:"pre",code:"code",h2:"h2"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:["Primeiro, ative o suporte para Babel em Jest conforme documentado no guia de ",(0,t.jsx)(s.a,{href:"/pt-BR/docs/29.5/getting-started#using-babel",children:"Introdu\xe7\xe3o"}),"."]}),"\n",(0,t.jsx)(s.p,{children:"Vamos implementar um m\xf3dulo simples que busca dados de usu\xe1rio de uma API e retorna o nome de usu\xe1rio."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",metastring:'title="user.js"',children:"import request from './request';\n\nexport function getUserName(userID) {\n  return request(`/users/${userID}`).then(user => user.name);\n}\n"})}),"\n",(0,t.jsxs)(s.p,{children:["In the above implementation, we expect the ",(0,t.jsx)(s.code,{children:"request.js"})," module to return a promise. We chain a call to ",(0,t.jsx)(s.code,{children:"then"})," to receive the user name."]}),"\n",(0,t.jsxs)(s.p,{children:["Now imagine an implementation of ",(0,t.jsx)(s.code,{children:"request.js"})," that goes to the network and fetches some user data:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",metastring:'title="request.js"',children:"const http = require('http');\n\nexport default function request(url) {\n  return new Promise(resolve => {\n    // This is an example of an http request, for example to fetch\n    // user data from an API.\n    // Este modulo est\xe1 sendo simulado em __mocks__/request.js\n    http.get({path: url}, response => {\n      let data = '';\n      response.on('data', _data => (data += _data));\n      response.on('end', () => resolve(data));\n    });\n  });\n}\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Because we don't want to go to the network in our test, we are going to create a manual mock for our ",(0,t.jsx)(s.code,{children:"request.js"})," module in the ",(0,t.jsx)(s.code,{children:"__mocks__"})," folder (the folder is case-sensitive, ",(0,t.jsx)(s.code,{children:"__MOCKS__"})," will not work). Pode ficar parecido com:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",metastring:'title="__mocks__/request.js"',children:"const users = {\n  4: {name: 'Mark'},\n  5: {name: 'Paul'},\n};\n\nexport default function request(url) {\n  return new Promise((resolve, reject) => {\n    const userID = parseInt(url.substr('/users/'.length), 10);\n    process.nextTick(() =>\n      users[userID]\n        ? resolve(users[userID])\n        : reject({\n            error: `User with ${userID} not found.`,\n          }),\n    );\n  });\n}\n"})}),"\n",(0,t.jsx)(s.p,{children:"Agora vamos escrever um teste para a nossa funcionalidade async."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",metastring:'title="__tests__/user-test.js"',children:"jest.mock('../request');\n\nimport * as user from '../user';\n\n// The assertion for a promise must be returned.\nit('works with promises', () => {\n  expect.assertions(1);\n  return user.getUserName(4).then(data => expect(data).toBe('Mark'));\n});\n"})}),"\n",(0,t.jsxs)(s.p,{children:["N\xf3s chamamos ",(0,t.jsx)(s.code,{children:"jest.mock('../request')"})," para informar Jest para usar nossa simula\xe7\xe3o manual. ",(0,t.jsx)(s.code,{children:"it"})," espera que o valor de retorno seja uma promessa que vai ser resolvida. You can chain as many Promises as you like and call ",(0,t.jsx)(s.code,{children:"expect"})," at any time, as long as you return a Promise at the end."]}),"\n",(0,t.jsx)(s.h2,{id:"resolves",children:(0,t.jsx)(s.code,{children:".resolves"})}),"\n",(0,t.jsxs)(s.p,{children:["Existe uma maneira menos verbosa usando ",(0,t.jsx)(s.code,{children:"resolves"})," para decodificar o valor de uma promessa cumprida, juntamente com quaisquer outro matcher. Se a promessa for rejeitada, a afirma\xe7\xe3o falhar\xe1."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"it('works with resolves', () => {\n  expect.assertions(1);\n  return expect(user.getUserName(5)).resolves.toBe('Paul');\n});\n"})}),"\n",(0,t.jsxs)(s.h2,{id:"asyncawait",children:[(0,t.jsx)(s.code,{children:"async"}),"/",(0,t.jsx)(s.code,{children:"await"})]}),"\n",(0,t.jsxs)(s.p,{children:["Writing tests using the ",(0,t.jsx)(s.code,{children:"async"}),"/",(0,t.jsx)(s.code,{children:"await"})," syntax is also possible. Here is how you'd write the same examples from before:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"// async/await pode ser usado.\nit('works with async/await', async () => {\n  expect.assertions(1);\n  const data = await user.getUserName(4);\n  expect(data).toBe('Mark');\n});\n\n// async/await can also be used with `.resolves`.\nit('works with async/await and resolves', async () => {\n  expect.assertions(1);\n  await expect(user.getUserName(5)).resolves.toBe('Paul');\n});\n"})}),"\n",(0,t.jsxs)(s.p,{children:["To enable async/await in your project, install ",(0,t.jsx)(s.a,{href:"https://babeljs.io/docs/en/babel-preset-env",children:(0,t.jsx)(s.code,{children:"@babel/preset-env"})})," and enable the feature in your ",(0,t.jsx)(s.code,{children:"babel.config.js"})," file."]}),"\n",(0,t.jsx)(s.h2,{id:"tratamento-de-erros",children:"Tratamento de erros"}),"\n",(0,t.jsxs)(s.p,{children:["Erros podem ser tratados usando o m\xe9todo ",(0,t.jsx)(s.code,{children:".catch"}),". Se certifique de adicionar ",(0,t.jsx)(s.code,{children:"expect.assertions"})," para verificar que um certo n\xfamero de afirma\xe7\xf5es s\xe3o chamadas. Caso contr\xe1rio, uma promessa cumprida n\xe3o falharia no teste:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"// Testando para erros async usando Promise.catch.\nit('tests error with promises', () => {\n  expect.assertions(1);\n  return user.getUserName(2).catch(e =>\n    expect(e).toEqual({\n      error: 'User with 2 not found.',\n    }),\n  );\n});\n\n// Or using async/await.\nit('testa erro com async/await', async () => {\n  expect.assertions(1);\n  try {\n    await user.getUserName(1);\n  } catch (e) {\n    expect(e).toEqual({\n      error: 'User with 1 not found.',\n    });\n  }\n});\n"})}),"\n",(0,t.jsx)(s.h2,{id:"rejects",children:(0,t.jsx)(s.code,{children:".rejects"})}),"\n",(0,t.jsxs)(s.p,{children:["The",(0,t.jsx)(s.code,{children:".rejects"})," helper works like the ",(0,t.jsx)(s.code,{children:".resolves"})," helper. Se a promessa \xe9 cumprida, o teste automaticamente ir\xe1 falhar. ",(0,t.jsx)(s.code,{children:"expect.assertions(number)"})," is not required but recommended to verify that a certain number of ",(0,t.jsx)(s.a,{href:"expect#expectassertionsnumber",children:"assertions"})," are called during a test. It is otherwise easy to forget to ",(0,t.jsx)(s.code,{children:"return"}),"/",(0,t.jsx)(s.code,{children:"await"})," the ",(0,t.jsx)(s.code,{children:".resolves"})," assertions."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"// Testando para erros async usando `.rejects`.\nit('testa erro com rejects', () => {\n  expect.assertions(1);\n  return expect(user.getUserName(3)).rejects.toEqual({\n    error: 'User with 3 not found.',\n  });\n});\n\n\n// Ou usando async/await com `.rejects`.\nit('testa erro com async/await e rejects', async () => {\n  expect.assertions(1);\n  await expect(user.getUserName(3)).rejects.toEqual({\n    error: 'User with 3 not found.',\n  });\n});\n"})}),"\n",(0,t.jsxs)(s.p,{children:["The code for this example is available at ",(0,t.jsx)(s.a,{href:"https://github.com/jestjs/jest/tree/main/examples/async",children:"examples/async"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["If you'd like to test timers, like ",(0,t.jsx)(s.code,{children:"setTimeout"}),", take a look at the ",(0,t.jsx)(s.a,{href:"/pt-BR/docs/29.5/timer-mocks",children:"Timer mocks"})," documentation."]})]})}const u=function(e={}){const{wrapper:s}=Object.assign({},(0,r.ah)(),e.components);return s?(0,t.jsx)(s,Object.assign({},e,{children:(0,t.jsx)(l,e)})):l(e)}},1670:(e,s,n)=>{n.d(s,{Zo:()=>c,ah:()=>a});var t=n(7378);const r=t.createContext({});function a(e){const s=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const o={};function c({components:e,children:s,disableParentContext:n}){let c;return c=n?"function"==typeof e?e({}):e||o:a(e),t.createElement(r.Provider,{value:c},s)}}}]);