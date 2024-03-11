import{u as y,r,a as N,j as e,C as F,P as S,F as g,n as f,b,c as E,g as v,d as B}from"./index-ed70fa99.js";import{C as P}from"./CatalogList-267fae48.js";const C=t=>t.adverts.advertItems,A=y.form`
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
`,w=t=>r.createElement("svg",{width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},r.createElement("path",{d:"M5 7.5L10 12.5L15 7.5",stroke:"#121417",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),j=t=>r.createElement("svg",{width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},r.createElement("path",{d:"M5 12.5L10 7.5L15 12.5",stroke:"#121417",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),R=({setFilteredAdv:t})=>{const d=N(C),[l,a]=r.useState(null),[p,i]=r.useState(null),[o,x]=r.useState({brand:"",price:""}),u=n=>{const{name:s,value:c}=n.target;x({...o,[s]:c}),a(!1),i(!1)},k=n=>{n.preventDefault();let s=d;const{brand:c,price:m}=o;c&&(s=s.filter(h=>h.make.toLowerCase()===c.toLowerCase()),f.Notify.success(`${c} successfully finded`,{timeout:1500})),m&&(s=s.filter(h=>Number(h.rentalPrice.split("$")[1])<=m),f.Notify.success(`Car brand with ${m}$ successfully finded`,{timeout:1500})),t(s)},L=()=>{x({brand:"",price:""}),t(d),f.Notify.warning("You clear your filters",{timeout:1500})};return e.jsx("section",{className:"container flex pt-[50px] justify-center ",children:e.jsxs(A,{className:"flex items-center md:gap-x-[18px] flex-col md:flex-row md:items-end",onSubmit:k,children:[e.jsxs("div",{className:"flex flex-row gap-x-[10px] md:gap-x-[18px]",children:[e.jsxs("div",{className:"relative flex flex-col justify-center",children:[e.jsx("label",{className:"text-[14px] leading-[1.29] font-medium text-label-color mb-[8px]",htmlFor:"brand",children:"Car brand"}),e.jsxs("select",{className:"appearance-none cursor-pointer text-[18px] leading-[1.11] text-primary-text-color font-medium outline-none h-[48px] w-[185px] md:w-[224px] rounded-[14px] px-[18px] bg-background-input-color",name:"brand",value:o.brand,id:"brand",onChange:u,onFocus:()=>{a(!0)},onBlur:()=>{a(!1)},children:[e.jsx("option",{className:"rounded-[14px]",value:"default",children:"Enter the text"}),F.map(n=>{const s=b();return e.jsx("option",{className:"rounded-md",value:n,children:n},s)})]}),l?e.jsx(w,{className:"arrow"}):e.jsx(j,{className:"arrow"})]}),e.jsxs("div",{className:"relative flex flex-col justify-center",children:[e.jsx("label",{className:"text-[14px] leading-[1.29] font-medium text-label-color mb-[8px]",htmlFor:"brand",children:"Price/ 1 hour"}),e.jsxs("select",{className:"appearance-none cursor-pointer text-[18px] leading-[1.11] text-primary-text-color font-medium outline-none h-[48px] w-[75px] md:w-[125px] rounded-[14px] px-[13px] md:px-[18px] bg-background-input-color",value:o.price,name:"price",id:"brand",onChange:u,onFocus:()=>{i(!0)},onBlur:()=>{i(!1)},children:[e.jsx("option",{className:"text-[16px] leading-[1.25] text-after-desc-element rounded-[14px]",value:"default",children:"To $"}),S.map(n=>{const s=b();return e.jsx("option",{className:"rounded-md text-[16px] leading-[1.25] text-after-desc-element",value:n,children:n},s)})]}),p?e.jsx(w,{className:"arrow"}):e.jsx(j,{className:"arrow"})]})]}),e.jsxs("div",{className:"flex flex-row gap-x-[10px] md:gap-x-[18px]",children:[e.jsx(g,{type:"submit",children:"Search"}),e.jsx(g,{type:"button",onClick:L,children:"Clear"})]})]})})},D=()=>{const[t,d]=r.useState(null),l=N(C),a=E(),[p,i]=r.useState(2),o=l.length>0;r.useEffect(()=>{o||a(v())},[o,a]);const x=()=>{i(u=>u+1),a(v(p))};return e.jsxs("section",{children:[e.jsx(R,{setFilteredAdv:d}),e.jsx(P,{dataCatalog:t||l}),l.length>0&&l.length%12===0&&e.jsx(B,{onClick:x})]})};export{D as default};
