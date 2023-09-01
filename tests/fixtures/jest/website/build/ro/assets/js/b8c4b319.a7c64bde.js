/*! For license information please see b8c4b319.a7c64bde.js.LICENSE.txt */
"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[5442],{6169:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=r(4246),a=r(1670),o=r(8475);const i={id:"architecture",title:"Architecture"},c=void 0,s={unversionedId:"architecture",id:"architecture",title:"Architecture",description:"If you are interested in learning more about how Jest works, understand its architecture, and how Jest is split up into individual reusable packages, check out this video:",source:"@site/i18n/ro/docusaurus-plugin-content-docs/current/Architecture.md",sourceDirName:".",slug:"/architecture",permalink:"/ro/docs/next/architecture",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/jest-v2/ro",tags:[],version:"current",frontMatter:{id:"architecture",title:"Architecture"},sidebar:"docs",previous:{title:"Rezolvarea problemelor",permalink:"/ro/docs/next/troubleshooting"},next:{title:"Testarea aplica\u021biilor React",permalink:"/ro/docs/next/tutorial-react"}},l={},u=[];function p(e){const t=Object.assign({p:"p",a:"a"},(0,a.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"If you are interested in learning more about how Jest works, understand its architecture, and how Jest is split up into individual reusable packages, check out this video:"}),"\n",(0,n.jsx)(o.Z,{id:"3YDiloj8_d0"}),"\n",(0,n.jsx)(t.p,{children:"If you'd like to learn how to build a testing framework like Jest from scratch, check out this video:"}),"\n",(0,n.jsx)(o.Z,{id:"B8FbUK0WpVU"}),"\n",(0,n.jsxs)(t.p,{children:["There is also a ",(0,n.jsx)(t.a,{href:"https://cpojer.net/posts/building-a-javascript-testing-framework",children:"written guide you can follow"}),". It teaches the fundamental concepts of Jest and explains how various parts of Jest can be used to compose a custom testing framework."]})]})}const d=function(e={}){const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(p,e)})):p(e)}},8475:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7378),a=function(){return a=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},a.apply(this,arguments)};function o(e){var t=n.useState(!1),r=t[0],o=t[1],i=n.useState(!1),c=i[0],s=i[1],l=encodeURIComponent(e.id),u="string"==typeof e.playlistCoverId?encodeURIComponent(e.playlistCoverId):null,p=e.title,d=e.poster||"hqdefault",h="&"+e.params||0,m=e.muted?"&mute=1":"",f=e.announce||"Watch",g=e.webp?"webp":"jpg",w=e.webp?"vi_webp":"vi",b=e.thumbnail||(e.playlist?"https://i.ytimg.com/"+w+"/"+u+"/"+d+"."+g:"https://i.ytimg.com/"+w+"/"+l+"/"+d+"."+g),k=e.noCookie;k=e.cookie?"https://www.youtube.com":"https://www.youtube-nocookie.com";var v=e.playlist?k+"/embed/videoseries?autoplay=1"+m+"&list="+l+h:k+"/embed/"+l+"?autoplay=1&state=1"+m+h,y=e.activatedClass||"lyt-activated",j=e.adNetwork||!1,x=e.aspectHeight||9,C=e.aspectWidth||16,E=e.iframeClass||"",I=e.playerClass||"lty-playbtn",F=e.wrapperClass||"yt-lite",J=e.onIframeAdded||function(){},O=e.rel?"prefetch":"preload";return n.useEffect((function(){c&&J()}),[c]),n.createElement(n.Fragment,null,n.createElement("link",{rel:O,href:b,as:"image"}),n.createElement(n.Fragment,null,r&&n.createElement(n.Fragment,null,n.createElement("link",{rel:"preconnect",href:k}),n.createElement("link",{rel:"preconnect",href:"https://www.google.com"}),j&&n.createElement(n.Fragment,null,n.createElement("link",{rel:"preconnect",href:"https://static.doubleclick.net"}),n.createElement("link",{rel:"preconnect",href:"https://googleads.g.doubleclick.net"})))),n.createElement("article",{onPointerOver:function(){r||o(!0)},onClick:function(){c||s(!0)},className:F+" "+(c?y:""),"data-title":p,style:a({backgroundImage:"url("+b+")"},{"--aspect-ratio":x/C*100+"%"})},n.createElement("button",{type:"button",className:I,"aria-label":f+" "+p}),c&&n.createElement("iframe",{className:E,title:p,width:"560",height:"315",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,src:v})))}},1670:(e,t,r)=>{r.d(t,{Zo:()=>c,ah:()=>o});var n=r(7378);const a=n.createContext({});function o(e){const t=n.useContext(a);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function c({components:e,children:t,disableParentContext:r}){let c;return c=r?"function"==typeof e?e({}):e||i:o(e),n.createElement(a.Provider,{value:c},t)}}}]);