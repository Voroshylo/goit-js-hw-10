import{f as y,i as f}from"./assets/vendor-77e16229.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();let d=null,a=null;const c=document.querySelector("button[data-start]"),l=document.getElementById("datetime-picker"),h=document.querySelector("[data-days]"),S=document.querySelector("[data-hours]"),g=document.querySelector("[data-minutes]"),b=document.querySelector("[data-seconds]"),v={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(r){d=r[0],d<=new Date?(f.error({title:"Error",message:"Please choose a date in the future"}),c.disabled=!0):c.disabled=!1}};y(l,v);c.addEventListener("click",()=>{a&&clearInterval(a),l.disabled=!0,c.disabled=!0,a=setInterval(()=>{const n=d-new Date;n<=0?(clearInterval(a),l.disabled=!1,c.disabled=!0,f.success({title:"Success",message:"Countdown finished!"})):I(n)},1e3)});function I(r){const{days:n,hours:i,minutes:o,seconds:e}=D(r);h.textContent=u(n),S.textContent=u(i),g.textContent=u(o),b.textContent=u(e)}function D(r){const t=Math.floor(r/864e5),s=Math.floor(r%864e5/36e5),m=Math.floor(r%864e5%36e5/6e4),p=Math.floor(r%864e5%36e5%6e4/1e3);return{days:t,hours:s,minutes:m,seconds:p}}function u(r){return String(r).padStart(2,"0")}
//# sourceMappingURL=commonHelpers.js.map
