import{j as e,r as d,V as c,T as m}from"./iframe-DMd1B6rC.js";import{C as r}from"./Calendar-BhQYm_RA.js";import"./preload-helper--E47Ns1F.js";import"./Button-DzHX1KMy.js";import"./Spinner-C0teSUmD.js";import"./FieldContext-Bjm7tzl8.js";import"./dateTimeUtils-Ci5JiRSc.js";import"./IconButton-B464-sN2.js";import"./useLocale-CMRaevmZ.js";const z={title:"Components/Calendar",component:r,tags:["autodocs"],parameters:{docs:{description:{component:"Standalone Days/Months/Years calendar grid. No popover, no input field, no picker — this is the pure selection surface that DateMenu/DateTimeMenu and eventually the pickers compose on top of."}}}},M=t=>t?`${t.year}-${String(t.month).padStart(2,"0")}-${String(t.day).padStart(2,"0")}`:"none",E=()=>{const[t,a]=d.useState(null);return e.jsxs(c,{gap:"8",alignItems:"flex-start",children:[e.jsx(r,{value:t,onChange:a}),e.jsxs(m,{textStyle:"mono.xs",color:"text.subtlest",children:["Selected: ",M(t)]})]})},o={render:()=>e.jsx(E,{})},k=()=>{const[t,a]=d.useState({year:2026,month:7,day:13});return e.jsx(r,{value:t,onChange:a})},n={render:()=>e.jsx(k,{})},B=()=>{const[t,a]=d.useState(null);return e.jsxs(c,{gap:"8",alignItems:"flex-start",children:[e.jsx(m,{textStyle:"mono.xs",color:"text.subtlest",children:"Bounded to 2026-07-01 through 2026-07-24 — everything outside that window is disabled at the day, month, and year level."}),e.jsx(r,{value:t,onChange:a,minDate:{year:2026,month:7,day:1},maxDate:{year:2026,month:7,day:24},defaultViewDate:{year:2026,month:7}})]})},s={render:()=>e.jsx(B,{})},l={render:()=>e.jsx(r,{disabled:!0,value:{year:2026,month:7,day:13},defaultViewDate:{year:2026,month:7}})},N=()=>{const[t,a]=d.useState(null);return e.jsxs(c,{gap:"8",alignItems:"flex-start",children:[e.jsx(m,{textStyle:"mono.xs",color:"text.subtlest",children:'Click the "Month Year" header label to jump to the Months view, then the year label to jump to Years — the standard fast-navigation drill-down for picking a date far from today.'}),e.jsx(r,{value:t,onChange:a,defaultViewDate:{year:2026,month:7}})]})},i={name:"Ex: Drill-Down Navigation",render:()=>e.jsx(N,{})},A=["Default","WithSelection","MinMaxBounds","Disabled","ExDrillDownNavigation"];var u,p,h;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <DefaultDemo />
}`,...(h=(p=o.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var x,D,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <WithSelectionDemo />
}`,...(g=(D=n.parameters)==null?void 0:D.docs)==null?void 0:g.source}}};var y,S,f;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <BoundedDemo />
}`,...(f=(S=s.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var j,w,v;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Calendar disabled value={{
    year: 2026,
    month: 7,
    day: 13
  }} defaultViewDate={{
    year: 2026,
    month: 7
  }} />
}`,...(v=(w=l.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var b,C,V;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Ex: Drill-Down Navigation',
  render: () => <DrillDownDemo />
}`,...(V=(C=i.parameters)==null?void 0:C.docs)==null?void 0:V.source}}};export{o as Default,l as Disabled,i as ExDrillDownNavigation,s as MinMaxBounds,n as WithSelection,A as __namedExportsOrder,z as default};
