var e=Object.defineProperty,a=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,r=(a,t,s)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[t]=s;import{c as o}from"./index.d225dd30.js";import{d as l,b as n,r as i,c as d,t as c,o as f,e as m,F as p,i as b,n as u,g,f as v,j as h,p as y,a as _}from"./vendor.93ca28da.js";y("data-v-241691de");const w={class:"w-full h-full relativex py-8 flex flex-col items-center"},x=["href"],j={class:"w-20 h-20 mask mask-hexagon animate-pulse"},k=["src"],O={class:"flex flex-col justify-center ml-4"},I={class:"font-semibold"},L={class:"opacity-40"},P=v("img",{class:"w-96 h-96 absolute right-0 bottom-0  animate__animated animate__bounceInDown",src:"http://124.71.57.28:8090/upload/2021/08/astro-mona-03a16b99728c4f6b97c584e0fd8b18f5.svg"},null,-1);_();var F=l({setup(e){const l=n(),y=i({friendList:[],mode:d((()=>l.state.mode))}),{mode:_,friendList:F}=((e,o)=>{for(var l in o||(o={}))t.call(o,l)&&r(e,l,o[l]);if(a)for(var l of a(o))s.call(o,l)&&r(e,l,o[l]);return e})({},c(y));return o("getFriendLink").then((e=>{y.friendList=e.data})),(e,a)=>(f(),m("div",w,[(f(!0),m(p,null,b(g(F),((e,a)=>(f(),m("a",{href:e.url,target:"_blank",key:a,class:u(["light"===g(_)?"lightMode":"bg-darkMode","flex w-5/6 h-24 bg-white rounded-lg py-2 px-4 overflow-hidden mb-4 animate__animated animate__bounceInUp"])},[v("div",j,[v("img",{src:e.logo},null,8,k)]),v("div",O,[v("div",I,h(e.name),1),v("div",L,h(e.description),1)])],10,x)))),128)),P]))}});F.__scopeId="data-v-241691de";export default F;
