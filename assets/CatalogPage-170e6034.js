import{u as v,a as g,r as d,j as e,C,P as N,F as f,n as m,b as h,c as y,g as b,d as w}from"./index-83e2ff85.js";import{C as k}from"./CatalogList-094c9e38.js";const j=n=>n.adverts.advertItems,A=v.form`
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
`,F=({setFilteredAdv:n})=>{const l=g(j),[s,a]=d.useState({brand:"",price:""}),i=r=>{const{name:t,value:o}=r.target;a({...s,[t]:o})},u=r=>{r.preventDefault();let t=l;const{brand:o,price:x}=s;o&&(t=t.filter(p=>p.make.toLowerCase()===o.toLowerCase()),m.Notify.success(`${o} successfully finded`,{timeout:1500})),x&&(t=t.filter(p=>Number(p.rentalPrice.split("$")[1])<=x),m.Notify.success(`Car brand with ${x}$ successfully finded`,{timeout:1500})),n(t)},c=()=>{a({brand:"",price:""}),n(l),m.Notify.warning("You clear your filters",{timeout:1500})};return e.jsx("section",{className:"container flex pt-[50px] justify-center ",children:e.jsxs(A,{className:"flex gap-x-[18px] items-end",onSubmit:u,children:[e.jsxs("div",{className:"flex flex-col justify-center",children:[e.jsx("label",{className:"text-[14px] leading-[1.29] font-medium text-label-color mb-[8px]",htmlFor:"brand",children:"Car brand"}),e.jsxs("select",{className:"cursor-pointer text-[18px] leading-[1.11] text-primary-text-color font-medium outline-none h-[48px] w-[224px] rounded-[14px] px-[18px] bg-background-input-color",name:"brand",value:s.brand,id:"brand",onChange:i,children:[e.jsx("option",{className:"rounded-[14px]",value:"default",children:"Enter the text"}),C.map(r=>{const t=h();return e.jsx("option",{className:"rounded-md",value:r,children:r},t)})]})]}),e.jsxs("div",{className:"flex flex-col justify-center",children:[e.jsx("label",{className:"text-[14px] leading-[1.29] font-medium text-label-color mb-[8px]",htmlFor:"brand",children:"Price/ 1 hour"}),e.jsxs("select",{className:"cursor-pointer text-[18px] leading-[1.11] text-primary-text-color font-medium outline-none h-[48px] w-[125px] rounded-[14px] px-[18px] bg-background-input-color",value:s.price,name:"price",id:"brand",onChange:i,children:[e.jsx("option",{className:"text-[16px] leading-[1.25] text-after-desc-element rounded-[14px]",value:"default",children:"To $"}),N.map(r=>{const t=h();return e.jsx("option",{className:"rounded-md text-[16px] leading-[1.25] text-after-desc-element",value:r,children:r},t)})]})]}),e.jsx(f,{type:"submit",children:"Search"}),e.jsx(f,{type:"button",onClick:c,children:"Clear"})]})})},E=()=>{const[n,l]=d.useState(null),s=g(j),a=y(),[i,u]=d.useState(2),c=s.length>0;d.useEffect(()=>{c||a(b())},[c,a]);const r=()=>{u(t=>t+1),a(b(i))};return e.jsxs("section",{children:[e.jsx(F,{setFilteredAdv:l}),e.jsx(k,{dataCatalog:n||s}),s.length>0&&s.length%12===0&&e.jsx(w,{onClick:r})]})};export{E as default};
