import{H as m}from"./HeaderNavbar-e2219dc0.js";import{_ as f,r as c,o as d,c as _,a as b,d as e,F as x,e as g,t as a,n as k,u as w,p as y,f as I,g as V}from"./index-fd20096f.js";const r=n=>(y("data-v-0fecabbe"),n=n(),I(),n),D={class:"dest-page w-100 min-vh-100"},N={class:"container py-5"},S=r(()=>e("h4",{class:"heading text-uppercase"},[e("span",{class:"me-2 fw-bold"},"01"),V(" Pick your destination")],-1)),j={class:"content px-5 mt-5 d-flex align-items-center"},B=["src"],C={class:"info text-light"},E={class:"tabs d-flex aling-items-center gap-4 mb-4 text-uppercase"},T=["onClick"],F={class:"text-uppercase"},H={class:"second-info d-flex aling-items-center justify-content-between mt-5 pt-4 border-top"},z=r(()=>e("span",{class:"text-uppercase d-block mb-2"},"Avg, Distance",-1)),A={class:"text-uppercase"},L=r(()=>e("span",{class:"text-uppercase d-block mb-2"},"Est, Travel Time",-1)),P={class:"text-uppercase"},$={__name:"DestinationView",setup(n){const p=c([]),i=c([]),s=c({}),o=c(0);let v=t=>{o.value=t,s.value=i.value[o.value]};return fetch("data.json").then(t=>t.json()).then(t=>{t.destinations.forEach(u=>{p.value.push({name:u.name})}),i.value=t.destinations,s.value=i.value[o.value]}),(t,u)=>(d(),_("div",D,[b(m),e("div",N,[S,e("div",j,[e("img",{class:"planet img-fluid",src:s.value.images.png,alt:""},null,8,B),e("div",C,[e("ul",E,[(d(!0),_(x,null,g(p.value,(h,l)=>(d(),_("li",{class:k(o.value===l?"active":""),key:l,onClick:q=>w(v)(l)},a(h.name),11,T))),128))]),e("h1",F,a(s.value.name),1),e("p",null,a(s.value.description),1),e("div",H,[e("div",null,[z,e("h3",A,a(s.value.distance),1)]),e("div",null,[L,e("h3",P,a(s.value.travel),1)])])])])])]))}},K=f($,[["__scopeId","data-v-0fecabbe"]]);export{K as default};
