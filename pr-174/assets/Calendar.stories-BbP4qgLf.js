import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./index-BKyFwriW.js";import{V as m}from"./Box-C4uJrM56.js";import{T as c}from"./Text-MsVbvEyI.js";import{C as a}from"./Calendar-COcjZl4T.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Button-CQNMiShy.js";import"./Icon-DVkTIUY6.js";import"./IconConfig-CwDT3tlP.js";import"./Spinner-DQMshQyu.js";import"./FieldContext-D6URyQos.js";import"./dateTimeUtils-Ci5JiRSc.js";import"./IconButton-BHliuBHk.js";import"./Tooltip-BTuY3Pe3.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";const L={title:"Components/Calendar",component:a,tags:["autodocs"],parameters:{docs:{description:{component:"Standalone Days/Months/Years calendar grid. No popover, no input field, no picker — this is the pure selection surface that DateMenu/DateTimeMenu and eventually the pickers compose on top of."}}}},M=t=>t?`${t.year}-${String(t.month).padStart(2,"0")}-${String(t.day).padStart(2,"0")}`:"none",E=()=>{const[t,r]=d.useState(null);return e.jsxs(m,{gap:"8",alignItems:"flex-start",children:[e.jsx(a,{value:t,onChange:r}),e.jsxs(c,{textStyle:"mono.xs",color:"text.subtlest",children:["Selected: ",M(t)]})]})},o={render:()=>e.jsx(E,{})},k=()=>{const[t,r]=d.useState({year:2026,month:7,day:13});return e.jsx(a,{value:t,onChange:r})},n={render:()=>e.jsx(k,{})},B=()=>{const[t,r]=d.useState(null);return e.jsxs(m,{gap:"8",alignItems:"flex-start",children:[e.jsx(c,{textStyle:"mono.xs",color:"text.subtlest",children:"Bounded to 2026-07-01 through 2026-07-24 — everything outside that window is disabled at the day, month, and year level."}),e.jsx(a,{value:t,onChange:r,minDate:{year:2026,month:7,day:1},maxDate:{year:2026,month:7,day:24},defaultViewDate:{year:2026,month:7}})]})},s={render:()=>e.jsx(B,{})},i={render:()=>e.jsx(a,{disabled:!0,value:{year:2026,month:7,day:13},defaultViewDate:{year:2026,month:7}})},N=()=>{const[t,r]=d.useState(null);return e.jsxs(m,{gap:"8",alignItems:"flex-start",children:[e.jsx(c,{textStyle:"mono.xs",color:"text.subtlest",children:'Click the "Month Year" header label to jump to the Months view, then the year label to jump to Years — the standard fast-navigation drill-down for picking a date far from today.'}),e.jsx(a,{value:t,onChange:r,defaultViewDate:{year:2026,month:7}})]})},l={name:"Ex: Drill-Down Navigation",render:()=>e.jsx(N,{})};var u,p,h;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <DefaultDemo />
}`,...(h=(p=o.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var x,D,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <WithSelectionDemo />
}`,...(g=(D=n.parameters)==null?void 0:D.docs)==null?void 0:g.source}}};var y,f,S;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <BoundedDemo />
}`,...(S=(f=s.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var j,w,v;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Calendar disabled value={{
    year: 2026,
    month: 7,
    day: 13
  }} defaultViewDate={{
    year: 2026,
    month: 7
  }} />
}`,...(v=(w=i.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var b,C,V;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Ex: Drill-Down Navigation',
  render: () => <DrillDownDemo />
}`,...(V=(C=l.parameters)==null?void 0:C.docs)==null?void 0:V.source}}};const P=["Default","WithSelection","MinMaxBounds","Disabled","ExDrillDownNavigation"];export{o as Default,i as Disabled,l as ExDrillDownNavigation,s as MinMaxBounds,n as WithSelection,P as __namedExportsOrder,L as default};
