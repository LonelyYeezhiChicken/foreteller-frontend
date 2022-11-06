import{a as x}from"./axios.c924aa86.js";import{r as g}from"./jssha.87c0c597.js";import{_ as p,a as b,b as i,F as v,R as _}from"./index.5178809a.js";import{k as m,l as f,q as o,y,z as k,B as C,v as $,h as F,D as c,E as d,G as B}from"./@vue.e78b13fc.js";import"./form-data.d1f94bc2.js";import"./pinia.d4f8a662.js";import"./vue-demi.b3a9cad9.js";import"./vue-router.6b804b2a.js";const D={class:"relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-pink-500 mb-3"},A={class:"container px-4 mx-auto flex flex-wrap items-center justify-between"},M={class:"w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start"},N=o("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"})],-1),G=[N],j={class:"lg:flex flex-grow items-center"},E={class:"lg:flex lg:flex-row hidden list-none ml-auto"},L={class:"nav-item"},T=o("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"})],-1),V=[T];function H(e,t,s,r,h,l){const a=C("router-link");return m(),f("nav",D,[o("div",A,[o("div",M,[y(a,{to:"/home",class:"text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-gray-200"},{default:k(()=>[$(" \u9810\u8A00\u5BB6 ")]),_:1}),o("button",{class:"cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none text-white hover:opacity-75",type:"button",onClick:t[0]||(t[0]=w=>l.changDark())},G)]),o("div",j,[o("ul",E,[o("li",L,[o("button",{class:"px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75",onClick:t[1]||(t[1]=w=>l.changDark())},V)])])])])])}const U=p(b,[["render",H]]),R={apiURL:"https://feb.lychicken.com"};function S(){const e=new Date().toUTCString(),t=new g("SHA-1","TEXT");return t.setHMACKey("appKey","TEXT"),t.update("x-date: "+e),t.getHMAC("B64"),{"Access-Control-Allow-Origin":"*","Content-Type":"application/json","X-Date":e}}const{apiURL:z}=R,n=x.create({baseURL:z,headers:S(),timeout:2e4});n.interceptors.request.use(function(e){let t=i().getJwt;return e.headers.Authorization=`Bearer ${t}`,e},function(e){return Promise.reject(e)});n.interceptors.response.use(function(e){return e},function(e){if(e.response)switch(e.response.status){case 404:console.log("\u4F60\u8981\u627E\u7684\u9801\u9762\u4E0D\u5B58\u5728");break;case 500:console.log("\u7A0B\u5F0F\u767C\u751F\u554F\u984C");break;default:console.log(e.message)}if(!window.navigator.onLine){alert("\u7DB2\u8DEF\u51FA\u4E86\u9EDE\u554F\u984C\uFF0C\u8ACB\u91CD\u65B0\u9023\u7DDA\u5F8C\u91CD\u6574\u7DB2\u9801");return}return Promise.reject(e)});function q(e,t,s){return n.get(e,{params:{...t,$format:"JSON"},...s})}function O(e,t=null,s){return n.post(e,t,s)}function J(e,t=null,s){return n.delete(e,{params:t,...s})}function P(e,t=null,s){return n.put(e,t,s)}function X(e,t=null,s){return n.patch(e,t,s)}const u={get:q,post:O,delete:J,put:P,patch:X},I=e=>u.get("/WeatherForecast",e,void 0),K=e=>u.post("/Account",e,void 0),W=()=>u.get("/claims",null,void 0),Q=F({name:"login",inheritAttrs:!1,data(){return{userName:"",password:""}},components:{FooterAdmin:v,NavbarAdmin:U},mounted(){I("").then(e=>{console.log(e)})},methods:{checkData:function(){const e=this;return!(e.userName===""||e.password==="")},toLogin:function(){const e=this;e.checkData()&&K(e.apiData()).then(t=>{i().setJwt(t.data.token.result),W().then(s=>{let r={userName:s.data[0].value,role:s.data[2].value};i().setAdmin(r),this.$router.push(_.Home)})})},apiData:function(){const e=this;return{userName:e.userName,password:e.password}}}}),Y={class:"container mx-auto px-4 h-full"},Z={class:"flex content-center items-center justify-center h-full"},ee={class:"w-full lg:w-4/12 px-4"},te={class:"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 dark:bg-blueGray-600 border-0"},oe={class:"flex-auto px-4 lg:px-10 py-10 pt-0"},se=o("div",{class:"text-blueGray-400 text-center mb-3 font-bold text-lg"},[o("small",null,"\u6B61\u8FCE\u56DE\u4F86 \u9810\u8A00\u5BB6~")],-1),ne={class:"relative w-full mb-3"},ae=o("label",{class:"block uppercase text-blueGray-600 text-xs font-bold mb-2",htmlFor:"grid-password"}," \u4F7F\u7528\u8005 ",-1),re={class:"relative w-full mb-3"},le=o("label",{class:"block uppercase text-blueGray-600 text-xs font-bold mb-2",htmlFor:"grid-password"}," \u5BC6\u78BC ",-1),ie={class:"text-center mt-6"},ue=B('<div class="flex flex-wrap mt-6 relative"><div class="w-1/2"><a href="javascript:void(0)" class="text-blueGray-700"><small>Forgot password?</small></a></div><div class="w-1/2 text-right"><a href="javascript:void(0)" class="text-blueGray-700"><small>Create new account</small></a></div></div>',1);function ce(e,t,s,r,h,l){return m(),f("div",Y,[o("section",Z,[o("div",ee,[o("div",te,[o("div",oe,[se,o("form",null,[o("div",ne,[ae,c(o("input",{type:"email",class:"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",placeholder:"User Name","onUpdate:modelValue":t[0]||(t[0]=a=>e.userName=a)},null,512),[[d,e.userName]])]),o("div",re,[le,c(o("input",{type:"password",class:"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",placeholder:"Password",autocomplete:"on","onUpdate:modelValue":t[1]||(t[1]=a=>e.password=a)},null,512),[[d,e.password]])]),o("div",ie,[o("button",{class:"bg-pink-500 text-white active:bg-pink-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150",type:"button",onClick:t[2]||(t[2]=a=>e.toLogin())}," Sign In ")])])])]),ue])])])}const be=p(Q,[["render",ce]]);export{be as default};
