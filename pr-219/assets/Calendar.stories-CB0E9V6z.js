import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as u}from"./index-BKyFwriW.js";import{w as H,e as n,u as P}from"./index-DPYJpPba.js";import{V as p}from"./dsComponent-BG2jnRr7.js";import{T as h}from"./Text-IAtRPmZy.js";import{L as N}from"./LocaleProvider-CzLG-SoS.js";import"./useLocale-A-vaza79.js";import{C as o}from"./Calendar-BJrrx8lI.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Tooltip-bxPM6yCH.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";import"./Button-Cr4bC5CG.js";import"./Icon-CrwLKW7B.js";import"./IconConfig-BuieZFlx.js";import"./Spinner-PLunUSsK.js";import"./FieldContext-D6URyQos.js";import"./dateTimeUtils-Ci5JiRSc.js";import"./IconButton-DXX-zVMP.js";const le={title:"Components/Calendar",component:o,tags:["autodocs"],parameters:{docs:{description:{component:"Standalone Days/Months/Years calendar grid. No popover, no input field, no picker — this is the pure selection surface that DateMenu/DateTimeMenu and eventually the pickers compose on top of."}}}},W=a=>a?`${a.year}-${String(a.month).padStart(2,"0")}-${String(a.day).padStart(2,"0")}`:"none",Y=()=>{const[a,t]=u.useState(null);return e.jsxs(p,{gap:"8",alignItems:"flex-start",children:[e.jsx(o,{value:a,onChange:t}),e.jsxs(h,{textStyle:"mono.xs",color:"text.subtlest",children:["Selected: ",W(a)]})]})},r={render:()=>e.jsx(Y,{})},$=()=>{const[a,t]=u.useState({year:2026,month:7,day:13});return e.jsx(o,{value:a,onChange:t})},s={render:()=>e.jsx($,{})},_=()=>{const[a,t]=u.useState(null);return e.jsxs(p,{gap:"8",alignItems:"flex-start",children:[e.jsx(h,{textStyle:"mono.xs",color:"text.subtlest",children:"Bounded to 2026-07-01 through 2026-07-24 — everything outside that window is disabled at the day, month, and year level."}),e.jsx(o,{value:a,onChange:t,minDate:{year:2026,month:7,day:1},maxDate:{year:2026,month:7,day:24},defaultViewDate:{year:2026,month:7}})]})},i={render:()=>e.jsx(_,{})},c={render:()=>e.jsx(o,{disabled:!0,value:{year:2026,month:7,day:13},defaultViewDate:{year:2026,month:7}})},O=()=>{const[a,t]=u.useState(null);return e.jsxs(p,{gap:"8",alignItems:"flex-start",children:[e.jsx(h,{textStyle:"mono.xs",color:"text.subtlest",children:'Click the "Month Year" header label to jump to the Months view, then the year label to jump to Years — the standard fast-navigation drill-down for picking a date far from today.'}),e.jsx(o,{value:a,onChange:t,defaultViewDate:{year:2026,month:7}})]})},l={name:"Ex: Drill-Down Navigation",render:()=>e.jsx(O,{})},m={name:"Locale: French",render:()=>e.jsx(N,{locale:"fr-FR",children:e.jsx(o,{defaultViewDate:{year:2026,month:1}})}),play:async({canvasElement:a})=>{const t=H(a);await n(t.getByRole("button",{name:"janvier 2026"})).toBeInTheDocument(),await n(t.getByRole("columnheader",{name:"dimanche"})).toHaveTextContent("dim"),await n(t.getByRole("gridcell",{name:"15 janvier 2026"})).toBeInTheDocument(),await P.click(t.getByRole("button",{name:"janvier 2026"})),await n(t.getByRole("gridcell",{name:"février 2026"})).toHaveTextContent("févr.")}},d={name:"Locale: Spanish",render:()=>e.jsx(N,{locale:"es-ES",labels:{previousMonth:"Mes anterior",nextMonth:"Mes siguiente"},children:e.jsx(o,{defaultViewDate:{year:2026,month:1}})}),play:async({canvasElement:a})=>{const t=H(a);await n(t.getByRole("button",{name:"enero de 2026"})).toBeInTheDocument(),await n(t.getByRole("columnheader",{name:"miércoles"})).toHaveTextContent("mié"),await n(t.getByRole("button",{name:"Mes anterior"})).toBeInTheDocument()}};var x,v,y;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <DefaultDemo />
}`,...(y=(v=r.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var g,D,w;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <WithSelectionDemo />
}`,...(w=(D=s.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var f,S,j;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <BoundedDemo />
}`,...(j=(S=i.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var B,b,M;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <Calendar disabled value={{
    year: 2026,
    month: 7,
    day: 13
  }} defaultViewDate={{
    year: 2026,
    month: 7
  }} />
}`,...(M=(b=c.parameters)==null?void 0:b.docs)==null?void 0:M.source}}};var R,C,T;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Ex: Drill-Down Navigation',
  render: () => <DrillDownDemo />
}`,...(T=(C=l.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var E,L,V;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Locale: French',
  render: () => <LocaleProvider locale="fr-FR">
      <Calendar defaultViewDate={{
      year: 2026,
      month: 1
    }} />
    </LocaleProvider>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('button', {
      name: 'janvier 2026'
    })).toBeInTheDocument();
    await expect(canvas.getByRole('columnheader', {
      name: 'dimanche'
    })).toHaveTextContent('dim');
    await expect(canvas.getByRole('gridcell', {
      name: '15 janvier 2026'
    })).toBeInTheDocument();
    await userEvent.click(canvas.getByRole('button', {
      name: 'janvier 2026'
    }));
    await expect(canvas.getByRole('gridcell', {
      name: 'février 2026'
    })).toHaveTextContent('févr.');
  }
}`,...(V=(L=m.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};var I,k,F;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Locale: Spanish',
  render: () => <LocaleProvider locale="es-ES" labels={{
    previousMonth: 'Mes anterior',
    nextMonth: 'Mes siguiente'
  }}>
      <Calendar defaultViewDate={{
      year: 2026,
      month: 1
    }} />
    </LocaleProvider>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('button', {
      name: 'enero de 2026'
    })).toBeInTheDocument();
    await expect(canvas.getByRole('columnheader', {
      name: 'miércoles'
    })).toHaveTextContent('mié');
    await expect(canvas.getByRole('button', {
      name: 'Mes anterior'
    })).toBeInTheDocument();
  }
}`,...(F=(k=d.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};const me=["Default","WithSelection","MinMaxBounds","Disabled","ExDrillDownNavigation","FrenchLocale","SpanishLocale"];export{r as Default,c as Disabled,l as ExDrillDownNavigation,m as FrenchLocale,i as MinMaxBounds,d as SpanishLocale,s as WithSelection,me as __namedExportsOrder,le as default};
