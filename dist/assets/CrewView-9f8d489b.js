import{H as d}from"./HeaderNavbar-048fc51f.js";import{_ as p,r as n,o as i,c as r,a as v,d as e,t as _,F as m,e as h,n as f,p as g,f as w,g as b}from"./index-6ba7752a.js";const x=a=>(g("data-v-50290af0"),a=a(),w(),a),C={class:"crew-page w-100 min-vh-100"},V={class:"container pt-5"},k=x(()=>e("h4",{class:"heading text-uppercase"},[e("span",{class:"me-2 fw-bold"},"02"),b(" Meet You Crew")],-1)),y={class:"content mt-5 d-flex align-items-end justify-content-between"},I={class:"info mb-5 pb-5"},N={class:"text-uppercase mb-3"},S={class:"text-uppercase mb-4"},j={class:"bullets d-flex align-items-center gap-4 mt-5"},B=["onClick"],D=["src"],F={__name:"CrewView",setup(a){const o=n([]),t=n({}),c=n(0),u=s=>{console.log(s),c.value=s,t.value=o.value[c.value]};return fetch("data.json").then(s=>s.json()).then(s=>{console.log(s.crew),o.value=s.crew,t.value=o.value[c.value]}),(s,H)=>(i(),r("div",C,[v(d),e("div",V,[k,e("div",y,[e("div",I,[e("div",null,[e("h4",N,_(t.value.role),1),e("h1",S,_(t.value.name),1),e("p",null,_(t.value.bio),1)]),e("ul",j,[(i(!0),r(m,null,h(o.value,(z,l)=>(i(),r("li",{class:f(c.value===l?"active":""),key:l,onClick:E=>u(l)},null,10,B))),128))])]),e("img",{class:"img-fluid",src:t.value.images.png,alt:""},null,8,D)])])]))}},T=p(F,[["__scopeId","data-v-50290af0"]]);export{T as default};
