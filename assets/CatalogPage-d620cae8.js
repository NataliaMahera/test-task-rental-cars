import{j as e,u as o,r as c,c as r,a as x,o as y,g as v,L as N}from"./index-a5047e21.js";const b=s=>s.adverts.advertItems,w="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let C=(s=21)=>{let a="",t=crypto.getRandomValues(new Uint8Array(s));for(;s--;)a+=w[t[s]&63];return a};const k=s=>s.modal.isOpenModal,I=()=>e.jsx("div",{}),L=()=>{const s=o();c.useEffect(()=>{const t=l=>{l.code==="Escape"&&s(r())};return window.addEventListener("keydown",t),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",t),document.body.style.overflow="auto"}},[s]);const a=t=>{t.target===t.currentTarget&&s(r())};return e.jsx("div",{onClick:a,className:"fixed bg-background-img-gr opacity-20  overflow-x-hidden overflow-y-auto left-0 top-0  w-full h-full pt-20 z-[100]",children:e.jsxs("div",{className:"absolute w-[541px] h-[752px] bg-accent-color top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-[24px] items-center flex flex-col py-[50px] px-[25px] md:p-[50px] ",children:[e.jsx("button",{className:"absolute items-center flex justify-center top-[18px] right-[18px] rounded-[58px]",onClick:()=>s(r()),children:"Close"}),e.jsx("p",{className:"text-[14px] leading-[1.29] md:text-[18px] md:leading-[1.33] mb-[25px] md:mb-[37px] text-center",children:"Ytllo"})]})})},E=({data:s})=>{const a=x(k),t=o(),{year:l,make:n,model:m,type:p,img:d,accessories:u,rentalPrice:h,rentalCompany:g,address:i,mileage:j,photoLink:f}=s;return e.jsxs("li",{className:"cardWrap w-[268px] mx-auto",children:[e.jsxs("div",{className:"imgWrap rounded-[14px] h-[268px] w-full",children:[e.jsx(I,{data:s}),e.jsx("img",{src:d||f,alt:"car",className:"rounded-[14px] w-full h-full object-cover bg-after-desc-element"})]}),e.jsxs("div",{className:"titleContainer flex justify-between mt-[14px]",children:[e.jsxs("h3",{className:"text-[16px] leading-[1.5] font-medium text-primary-text-color",children:[n," ",e.jsx("span",{className:"text-accent-color",children:m}),e.jsx("span",{className:"text-primary-text-color",children:","})," ",l]}),e.jsx("div",{className:"price",children:h})]}),e.jsxs("ul",{className:"descWrap  ",children:[e.jsx("li",{className:"descItem",children:i.split(",")[1]}),e.jsx("li",{className:"descItem",children:i.split(",")[2]}),e.jsx("li",{className:"descItem",children:g}),e.jsx("li",{className:"descItem",children:p}),e.jsx("li",{className:"descItem",children:n}),e.jsx("li",{className:"descItem",children:j}),e.jsx("li",{className:"descItem",children:u[0]})]}),e.jsx("button",{type:"button",className:"button",onClick:()=>t(y(s)),children:"Learn more"}),a&&e.jsx(L,{})]})},M=()=>{const s=x(b),[a,t]=c.useState([]);return c.useEffect(()=>{s&&t(l=>[...l,...s])},[s]),e.jsx("section",{className:"container pt-[50px] pb-[100px]",children:e.jsx("ul",{className:"grid md:grid-cols-2 md:gap-x-[25px] md:gap-y-[40px] lg:grid-cols-4 lg:gap-x-[29px] lg:gap-y-[50px] mx-auto",children:a.map(l=>e.jsx(E,{data:l},C()))})})},O=()=>{const s=o(),[a,t]=c.useState(1);c.useEffect(()=>{s(v(a))},[s,a]);const l=()=>{t(n=>n+1)};return e.jsxs(e.Fragment,{children:[e.jsx(M,{}),e.jsx(N,{onClick:l,children:"Load more"})]})};export{O as default};
