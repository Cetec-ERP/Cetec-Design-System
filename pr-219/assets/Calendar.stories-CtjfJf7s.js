import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as u}from"./index-BKyFwriW.js";import{w as N,e as o,u as F}from"./index-DPYJpPba.js";import{V as p}from"./dsComponent-BG2jnRr7.js";import{T as h}from"./Text-IAtRPmZy.js";import{L as A}from"./LocaleProvider-CzLG-SoS.js";import"./useLocale-A-vaza79.js";import{C as n}from"./Calendar-Ci0_fCaY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Tooltip-bxPM6yCH.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";import"./Button-Cr4bC5CG.js";import"./Icon-CrwLKW7B.js";import"./IconConfig-BuieZFlx.js";import"./Spinner-PLunUSsK.js";import"./FieldContext-D6URyQos.js";import"./dateTimeUtils-Ci5JiRSc.js";import"./IconButton-DXX-zVMP.js";const ie={title:"Components/Calendar",component:n,tags:["autodocs"],parameters:{docs:{description:{component:"Standalone Days/Months/Years calendar grid. No popover, no input field, no picker — this is the pure selection surface that DateMenu/DateTimeMenu and eventually the pickers compose on top of."}}}},P=t=>t?`${t.year}-${String(t.month).padStart(2,"0")}-${String(t.day).padStart(2,"0")}`:"none",W=()=>{const[t,e]=u.useState(null);return a.jsxs(p,{gap:"8",alignItems:"flex-start",children:[a.jsx(n,{value:t,onChange:e}),a.jsxs(h,{textStyle:"mono.xs",color:"text.subtlest",children:["Selected: ",P(t)]})]})},r={render:()=>a.jsx(W,{})},Y=()=>{const[t,e]=u.useState({year:2026,month:7,day:13});return a.jsx(n,{value:t,onChange:e})},s={render:()=>a.jsx(Y,{})},$=()=>{const[t,e]=u.useState(null);return a.jsxs(p,{gap:"8",alignItems:"flex-start",children:[a.jsx(h,{textStyle:"mono.xs",color:"text.subtlest",children:"Bounded to 2026-07-01 through 2026-07-24 — everything outside that window is disabled at the day, month, and year level."}),a.jsx(n,{value:t,onChange:e,minDate:{year:2026,month:7,day:1},maxDate:{year:2026,month:7,day:24},defaultViewDate:{year:2026,month:7}})]})},l={render:()=>a.jsx($,{})},c={render:()=>a.jsx(n,{disabled:!0,value:{year:2026,month:7,day:13},defaultViewDate:{year:2026,month:7}})},_=()=>{const[t,e]=u.useState(null);return a.jsxs(p,{gap:"8",alignItems:"flex-start",children:[a.jsx(h,{textStyle:"mono.xs",color:"text.subtlest",children:'Click the "Month Year" header label to jump to the Months view, then the year label to jump to Years — the standard fast-navigation drill-down for picking a date far from today.'}),a.jsx(n,{value:t,onChange:e,defaultViewDate:{year:2026,month:7}})]})},i={name:"Ex: Drill-Down Navigation",render:()=>a.jsx(_,{})},m={name:"Locale: French",render:()=>a.jsx(A,{locale:"fr-FR",children:a.jsx(n,{defaultViewDate:{year:2026,month:1}})}),play:async({canvasElement:t})=>{const e=N(t);await o(e.getByRole("button",{name:"janvier 2026"})).toBeInTheDocument(),await o(e.getByRole("columnheader",{name:"dimanche"})).toHaveTextContent("dim"),await o(e.getAllByRole("columnheader")[0]).toHaveAccessibleName("lundi"),await o(e.getByRole("gridcell",{name:"15 janvier 2026"})).toBeInTheDocument(),await F.click(e.getByRole("button",{name:"janvier 2026"})),await o(e.getByRole("gridcell",{name:"février 2026"})).toHaveTextContent("févr.")}},d={name:"Locale: Spanish",render:()=>a.jsx(A,{locale:"es-ES",labels:{previousMonth:"Mes anterior",nextMonth:"Mes siguiente"},children:a.jsx(n,{defaultViewDate:{year:2026,month:1}})}),play:async({canvasElement:t})=>{const e=N(t);await o(e.getByRole("button",{name:"enero de 2026"})).toBeInTheDocument(),await o(e.getByRole("columnheader",{name:"miércoles"})).toHaveTextContent("mié"),await o(e.getAllByRole("columnheader")[0]).toHaveAccessibleName("lunes"),await o(e.getByRole("button",{name:"Mes anterior"})).toBeInTheDocument()}};var x,v,y;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <DefaultDemo />
}`,...(y=(v=r.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var g,D,w;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <WithSelectionDemo />
}`,...(w=(D=s.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var f,B,S;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <BoundedDemo />
}`,...(S=(B=l.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var j,b,R;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Calendar disabled value={{
    year: 2026,
    month: 7,
    day: 13
  }} defaultViewDate={{
    year: 2026,
    month: 7
  }} />
}`,...(R=(b=c.parameters)==null?void 0:b.docs)==null?void 0:R.source}}};var M,C,T;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Ex: Drill-Down Navigation',
  render: () => <DrillDownDemo />
}`,...(T=(C=i.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var E,L,V;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
    // fr-FR weeks start on Monday.
    await expect(canvas.getAllByRole('columnheader')[0]).toHaveAccessibleName('lundi');
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
}`,...(V=(L=m.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};var I,H,k;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
    // es-ES weeks start on Monday.
    await expect(canvas.getAllByRole('columnheader')[0]).toHaveAccessibleName('lunes');
    await expect(canvas.getByRole('button', {
      name: 'Mes anterior'
    })).toBeInTheDocument();
  }
}`,...(k=(H=d.parameters)==null?void 0:H.docs)==null?void 0:k.source}}};const me=["Default","WithSelection","MinMaxBounds","Disabled","ExDrillDownNavigation","FrenchLocale","SpanishLocale"];export{r as Default,c as Disabled,i as ExDrillDownNavigation,m as FrenchLocale,l as MinMaxBounds,d as SpanishLocale,s as WithSelection,me as __namedExportsOrder,ie as default};
