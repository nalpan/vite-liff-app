import{r as d,o as c,c as f,a,t as u,F as p,b as g,d as _,l as n}from"./vendor.6d726811.js";const m=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=l(e);fetch(e.href,o)}};m();var y=(s,t)=>{const l=s.__vccOpts||s;for(const[r,e]of t)l[r]=e;return l};const v={props:{msg:String},setup(s){const t=d(0);return(l,r)=>(c(),f(p,null,[a("h1",null,u(s.msg),1),a("button",{type:"button",onClick:r[0]||(r[0]=e=>t.value++)},"count is: "+u(t.value),1)],64))}};var L=y(v,[["__scopeId","data-v-429d8639"]]);const h={setup(s){return(t,l)=>(c(),g(L,{msg:"Hello Vue 3 + Vite"}))}};async function b(){_(h).mount("#app"),await n.init({liffId:"1656795481-GomBd7X9"}),n.isLoggedIn()?(console.log(n.getLanguage()),console.log(n.getVersion()),console.log(n.isInClient()),console.log(n.isLoggedIn()),console.log(n.getOS()),console.log(n.getLineVersion())):n.login()}b();
