var e=Object.defineProperty,t=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,n=(t,o,a)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[o]=a;import{d as r,b as s,r as l,c as i,t as d,o as c,e as m,g as u,F as p,j as f,k as v,h,n as b,p as g,a as y}from"./vendor.b375119b.js";import{c as x}from"./index.4e0c7486.js";/* empty css                      */g("data-v-91e12596");const w={class:"h-full"},k=["href"],M={class:b(["relative lg:py-8 font-mersan duration-500 ease-in-out pt-12 lg:ml-17 h-full overflow-y-scroll"])},T={class:"absolute top-4 right-4 text-black font-mersan font-medium text-sm transition-colors"};y();var j=r({setup(e){const r=s(),g=l({postDetail:{title:"",visits:"",formatContent:""},markdownBody:null,mode:i((()=>r.state.mode)),h4Arr:[]}),{postDetail:y,markdownBody:j,mode:A,h4Arr:E}=((e,r)=>{for(var s in r||(r={}))o.call(r,s)&&n(e,s,r[s]);if(t)for(var s of t(r))a.call(r,s)&&n(e,s,r[s]);return e})({},d(g));let B;return x("getPostsById",{postId:"191",formatDisabled:!1,sourceDisabled:!0}).then((e=>{g.postDetail=e.data,document.title=`Vvvvv-Blog! - ${g.postDetail.title}`,g.markdownBody.innerHTML+=g.postDetail.formatContent;const t=Array.from(document.getElementsByTagName("pre"));B=Array.from(document.querySelectorAll("pre code")),t.forEach(((e,t)=>{const o=`<figcaption class="line-numbers-head">\n              <div class="custom-carbon">\n                <div class="custom-carbon-dot custom-carbon-dot--red"></div>\n                <div class="custom-carbon-dot custom-carbon-dot--yellow"></div>\n                <div class="custom-carbon-dot custom-carbon-dot--green"></div>\n              </div>\n              <div class="language">${e.children[0].classList[0].split("-")[1].toUpperCase()}</div>\n              <a class="copy" onclick="copy(${t})" title="点击复制">\n                <svg class="icon" aria-hidden="true">\n                  <use xlink:href="#icon-fuzhi"></use>\n                </svg>\n              </a>\n            </figcaption>`;e.insertAdjacentHTML("beforebegin",o),e.classList.add("line-numbers")})),hljs.highlightAll(),g.h4Arr=Array.from(document.getElementsByTagName("h4")),g.h4Arr.forEach((e=>{e.innerHTML=`<a name='${e.innerText}'>${e.innerText}</a>`}))})),window.copy=e=>{const t=document.createElement("div");t.innerHTML=B[e].innerHTML;let o="";Array.from(t.innerText).forEach((e=>{o+=e}));const a=document.createElement("textarea");document.body.appendChild(a),a.value=o,a.select(),document.execCommand("Copy"),document.body.removeChild(a),alert("已复制")},(e,t)=>(c(),m("div",w,[u("div",{class:b(["light"===h(A)?"lightMode text-lightMode":"bg-darkMode  text-darkMode","hidden min:block  min:w-64 fixed top-0 left-0 mt-8 rounded-xl hidden bg-white h-util pt-4 pl-4 font-bold whitespace-nowrap font-medium text-sm"])},[(c(!0),m(p,null,f(h(E),((e,t)=>(c(),m("div",{key:t,class:"hover:text-FF9100"},[u("a",{href:"#"+e.innerText},v(e.innerText),9,k)])))),128))],2),u("div",M,[u("div",{class:b(["light"===h(A)?"lightMode text-lightMode":"bg-darkMode  text-darkMode","flex justify-center w-full overflow-x-none rounded-2xl lg:p-4 lg:pb-8 relative"])},[u("span",T,"累计看过："+v(h(y).visits),1),u("div",{ref:j,class:"flex-1 w-screen min-w-800 markdown-body p-4 lg:p-0 break-all"},null,512)],2)])]))}});j.__scopeId="data-v-91e12596";export default j;
