import{u as y,r as s,a as N,j as e,C as F,P as S,F as g,n as f,b,c as E,g as v,d as B}from"./index-0dc03836.js";import{C as P}from"./CatalogList-9af0aec3.js";const C=t=>t.adverts.advertItems,A=y.form`
  option {
    color: rgba(18, 20, 23, 0.2);
    font-weight: 500;
    font-size: 16px;
    line-height: 1.25;
    border-radius: 14px;
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 14px;
  }

  select::-webkit-scrollbar {
    border-radius: 10px;
    width: 8px;
    height: 130px;
  }

  select::-webkit-scrollbar-thumb {
    background-color: rgba(18, 20, 23, 0.05);
    border-radius: 6px;
  }
`,j=t=>s.createElement("svg",{width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},s.createElement("path",{d:"M5 7.5L10 12.5L15 7.5",stroke:"#121417",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),w=t=>s.createElement("svg",{width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},s.createElement("path",{d:"M5 12.5L10 7.5L15 12.5",stroke:"#121417",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),R=({setFilteredAdv:t})=>{const d=N(C),[l,o]=s.useState(null),[p,i]=s.useState(null),[a,u]=s.useState({brand:"",price:""}),x=n=>{const{name:r,value:c}=n.target;u({...a,[r]:c}),o(!1),i(!1)},k=n=>{n.preventDefault();let r=d;const{brand:c,price:m}=a;c&&(r=r.filter(h=>h.make.toLowerCase()===c.toLowerCase()),f.Notify.success(`${c} successfully finded`,{timeout:1500})),m&&(r=r.filter(h=>Number(h.rentalPrice.split("$")[1])<=m),f.Notify.success(`Car brand with ${m}$ successfully finded`,{timeout:1500})),t(r)},L=()=>{u({brand:"",price:""}),t(d),f.Notify.warning("You clear your filters",{timeout:1500})};return e.jsx("section",{className:"container flex pt-[50px] justify-center ",children:e.jsxs(A,{className:"flex gap-x-[18px] items-end",onSubmit:k,children:[e.jsxs("div",{className:"relative flex flex-col justify-center",children:[e.jsx("label",{className:"text-[14px] leading-[1.29] font-medium text-label-color mb-[8px]",htmlFor:"brand",children:"Car brand"}),e.jsxs("select",{className:"appearance-none cursor-pointer text-[18px] leading-[1.11] text-primary-text-color font-medium outline-none h-[48px] w-[224px] rounded-[14px] px-[18px] bg-background-input-color",name:"brand",value:a.brand,id:"brand",onChange:x,onFocus:()=>{o(!0)},onBlur:()=>{o(!1)},children:[e.jsx("option",{className:"rounded-[14px]",value:"default",children:"Enter the text"}),F.map(n=>{const r=b();return e.jsx("option",{className:"rounded-md",value:n,children:n},r)})]}),l?e.jsx(j,{className:"arrow"}):e.jsx(w,{className:"arrow"})]}),e.jsxs("div",{className:"relative flex flex-col justify-center",children:[e.jsx("label",{className:"text-[14px] leading-[1.29] font-medium text-label-color mb-[8px]",htmlFor:"brand",children:"Price/ 1 hour"}),e.jsxs("select",{className:"appearance-none cursor-pointer text-[18px] leading-[1.11] text-primary-text-color font-medium outline-none h-[48px] w-[125px] rounded-[14px] px-[18px] bg-background-input-color",value:a.price,name:"price",id:"brand",onChange:x,onFocus:()=>{i(!0)},onBlur:()=>{i(!1)},children:[e.jsx("option",{className:"text-[16px] leading-[1.25] text-after-desc-element rounded-[14px]",value:"default",children:"To $"}),S.map(n=>{const r=b();return e.jsx("option",{className:"rounded-md text-[16px] leading-[1.25] text-after-desc-element",value:n,children:n},r)})]}),p?e.jsx(j,{className:"arrow"}):e.jsx(w,{className:"arrow"})]}),e.jsx(g,{type:"submit",children:"Search"}),e.jsx(g,{type:"button",onClick:L,children:"Clear"})]})})},D=()=>{const[t,d]=s.useState(null),l=N(C),o=E(),[p,i]=s.useState(2),a=l.length>0;s.useEffect(()=>{a||o(v())},[a,o]);const u=()=>{i(x=>x+1),o(v(p))};return e.jsxs("section",{children:[e.jsx(R,{setFilteredAdv:d}),e.jsx(P,{dataCatalog:t||l}),l.length>0&&l.length%12===0&&e.jsx(B,{onClick:u})]})};export{D as default};
