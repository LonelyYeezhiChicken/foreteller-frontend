import{a}from"./Api.548d356a.js";import{a as e,_ as r}from"./index.dc454e4b.js";import{k as m,l as s}from"./@vue.2645191e.js";import"./axios.c924aa86.js";import"./form-data.d1f94bc2.js";import"./jssha.87c0c597.js";import"./pinia.665484c7.js";import"./vue-demi.b3a9cad9.js";import"./vue-router.0cedc29b.js";const c={name:"home",created(){console.log("home"),a().then(o=>{let t={userName:o.data[0].value,role:o.data[2].value};e().setAdmin(t)})}},i={class:"container mx-auto px-4 h-full"};function n(o,t,p,l,_,d){return m(),s("div",i)}const A=r(c,[["render",n]]);export{A as default};