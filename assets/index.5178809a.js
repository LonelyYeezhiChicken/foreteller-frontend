import{k as h,l as _,q as r,v as $,x as C,y as p,z as D,A as E,B as f,F as S,C as N}from"./@vue.e78b13fc.js";import{d as j,c as B}from"./pinia.d4f8a662.js";import{c as G,a as O}from"./vue-router.6b804b2a.js";import"./vue-demi.b3a9cad9.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const I="modulepreload",M=function(n){return"/"+n},w={},k=function(o,s,a){return!s||s.length===0?o():Promise.all(s.map(e=>{if(e=M(e),e in w)return;w[e]=!0;const t=e.endsWith(".css"),i=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${i}`))return;const l=document.createElement("link");if(l.rel=t?"stylesheet":I,t||(l.as="script",l.crossOrigin=""),l.href=e,document.head.appendChild(l),t)return new Promise((x,A)=>{l.addEventListener("load",x),l.addEventListener("error",()=>A(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>o())};var c=(n=>(n.Login="/",n.Home="/Home",n))(c||{});class R{create(o,s){let a=JSON.stringify(s);var e=new Date;e.setTime(e.getTime()+100*60*1e3);let t="; expires="+e.toString();document.cookie=encodeURIComponent(o)+"="+encodeURIComponent(btoa(a))+t+"; path=/"}read(o){let s=encodeURIComponent(o)+"=",a=document.cookie.split(";");for(var e=0;e<a.length;e++){for(var t=a[e];t.charAt(0)===" ";)t=t.substring(1,t.length);if(t.indexOf(s)===0){let i=decodeURIComponent(t.substring(s.length,t.length)),l=atob(i);return JSON.parse(l)}}return null}update(o,s){let a=JSON.stringify(s);var e=new Date;e.setTime(e.getTime()+100*60*1e3);let t="; expires="+e.toString();document.cookie=encodeURIComponent(o)+"="+encodeURIComponent(btoa(a))+t+"; path=/"}delete(o){this.create(o,"")}}const v="token",y="ad",g=j("account",{state:()=>({auth:!1,Dao:new R,jwt:""}),getters:{isAuth:n=>{let o=n.Dao.read(y);return o!==null&&o!==""?(n.auth=!0,n.auth):(n.auth=!1,n.auth)},getJwt:n=>{let o=n.Dao.read(v);return o!==null&&o!==""&&(n.jwt=o),n.jwt}},actions:{setJwt(n){this.$state.Dao.create(v,n)},logOut(){this.$state.Dao.delete(v),this.$state.Dao.delete(y),this.$state.auth=!1},setAdmin(n){this.$state.Dao.create(y,n),this.$state.auth=!0}}}),V=[{path:c.Home,name:c.Home.toString(),component:()=>k(()=>import("./Home.17315d04.js"),["assets/Home.17315d04.js","assets/@vue.e78b13fc.js","assets/pinia.d4f8a662.js","assets/vue-demi.b3a9cad9.js","assets/vue-router.6b804b2a.js"])},{path:c.Login,name:c.Login.toString(),component:()=>k(()=>import("./Login.b0d1c2d9.js"),["assets/Login.b0d1c2d9.js","assets/axios.c924aa86.js","assets/form-data.d1f94bc2.js","assets/jssha.87c0c597.js","assets/@vue.e78b13fc.js","assets/pinia.d4f8a662.js","assets/vue-demi.b3a9cad9.js","assets/vue-router.6b804b2a.js"])}],L=G({history:O(),routes:V});L.beforeEach(async(n,o,s)=>{console.log(g().isAuth),g().isAuth||n.name===c.Login.toString()?s():s({name:c.Login.toString()}),console.log(n.name)});const U={data(){return{date:new Date().getFullYear()}}},b=(n,o)=>{const s=n.__vccOpts||n;for(const[a,e]of o)s[a]=e;return s},P={class:"block py-4 sticky bottom-0"},H={class:"container mx-auto px-4"},T=r("hr",{class:"mb-4 border-b-1 dark:border-blueGray-200 border-blueGray-500"},null,-1),F={class:"flex flex-wrap items-center md:justify-between justify-center"},J={class:"w-full md:w-4/12 px-4"},q={class:"text-sm text-blueGray-500 dark:text-blueGray-200 font-semibold py-1 text-center md:text-left"},z=r("a",{href:"https://www.creative-tim.com?ref=vn-footer-admin",class:"text-blueGray-500 dark:text-blueGray-200 hover:text-blueGray-700 dark:hover:text-blueGray-400 text-sm font-semibold py-1"}," \u4E00\u96BB\u96DE ",-1),W=r("div",{class:"w-full md:w-8/12 px-4"},[r("ul",{class:"flex flex-wrap list-none md:justify-end justify-center"},[r("li",null,[r("a",{href:"http://blog.lychicken.com",class:"dark:text-blueGray-300 dark:hover:text-blueGray-500 text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"}," Blog ")])])],-1);function K(n,o,s,a,e,t){return h(),_("footer",P,[r("div",H,[T,r("div",F,[r("div",J,[r("div",q,[$(" Copyright \xA9 "+C(e.date)+" ",1),z])]),W])])])}const Q=b(U,[["render",K]]),u=document.getElementById("app"),Y={name:"Navbar",methods:{changDark:function(){u!==null&&(u.className.includes("dark")?u.classList.remove("dark"):u.classList.add("dark"))},logout:function(){g().logOut(),this.$router.push(c.Login)}},computed:{isAuth:function(){return g().isAuth}}},X={class:"relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-pink-500"},Z={class:"container px-4 mx-auto flex flex-wrap items-center justify-between"},ee={class:"w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start"},te=r("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[r("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"})],-1),oe=[te],ne={class:"lg:flex flex-grow items-center"},re={class:"lg:flex lg:flex-row hidden list-none ml-auto"},se={class:"nav-item"},ae=r("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[r("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"})],-1),le=[ae],ie={key:0,class:"nav-item"},ce=r("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[r("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"})],-1),de=[ce];function ue(n,o,s,a,e,t){const i=f("router-link");return h(),_("nav",X,[r("div",Z,[r("div",ee,[p(i,{to:"/home",class:"text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-gray-200"},{default:D(()=>[$(" \u9810\u8A00\u5BB6 ")]),_:1}),r("button",{class:"cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none text-white hover:opacity-75",type:"button",onClick:o[0]||(o[0]=l=>t.changDark())},oe)]),r("div",ne,[r("ul",re,[r("li",se,[r("button",{class:"px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75",onClick:o[1]||(o[1]=l=>t.changDark())},le)]),t.isAuth?(h(),_("li",ie,[r("button",{class:"px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75",onClick:o[2]||(o[2]=l=>t.logout())},de)])):E("",!0)])])])])}const me=b(Y,[["render",ue]]),m=document.getElementById("app"),we={name:"NavbarAdmin",methods:{changDark:function(){m!==null&&(m.className.includes("dark")?m.classList.remove("dark"):m.classList.add("dark"))}}},d=document.getElementById("app"),pe={name:"thisApp",components:{Navbar:me,FooterAdmin:Q},data(){return{}},methods:{changDark:function(){console.log(d),d!==null&&(d.className.includes("dark")?d.classList.remove("dark"):d.classList.add("dark"))}}},fe={className:"dark:bg-blueGray-700 font-mono border-blueGray-100 h-screen"};function he(n,o,s,a,e,t){const i=f("navbar"),l=f("router-view"),x=f("footer-admin");return h(),_(S,null,[p(i),r("main",fe,[p(l,{class:"relative w-full h-full min-h-screen"})]),p(x)],64)}const _e=b(pe,[["render",he]]),ge=N(_e);ge.use(L).use(B()).mount("#app");export{Q as F,c as R,b as _,we as a,g as b};
