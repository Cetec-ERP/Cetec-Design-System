import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as h}from"./index-BKyFwriW.js";import{w as p,e as o,u as Y}from"./index-DPYJpPba.js";import{V as y}from"./dsComponent-BG2jnRr7.js";import{T as v}from"./Text-IAtRPmZy.js";import{L as x}from"./LocaleProvider-DihxmyRu.js";import"./useLocale-A-vaza79.js";import{C as n}from"./Calendar-DPsH7ktf.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Tooltip-bxPM6yCH.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";import"./Button-Cr4bC5CG.js";import"./Icon-CrwLKW7B.js";import"./IconConfig-BuieZFlx.js";import"./Spinner-PLunUSsK.js";import"./FieldContext-D6URyQos.js";import"./dateTimeUtils-Ci5JiRSc.js";import"./IconButton-DXX-zVMP.js";const he={title:"Components/Calendar",component:n,tags:["autodocs"],parameters:{docs:{description:{component:"Standalone Days/Months/Years calendar grid. No popover, no input field, no picker — this is the pure selection surface that DateMenu/DateTimeMenu and eventually the pickers compose on top of."}}}},$=t=>t?`${t.year}-${String(t.month).padStart(2,"0")}-${String(t.day).padStart(2,"0")}`:"none",_=()=>{const[t,e]=h.useState(null);return a.jsxs(y,{gap:"8",alignItems:"flex-start",children:[a.jsx(n,{value:t,onChange:e}),a.jsxs(v,{textStyle:"mono.xs",color:"text.subtlest",children:["Selected: ",$(t)]})]})},r={render:()=>a.jsx(_,{})},O=()=>{const[t,e]=h.useState({year:2026,month:7,day:13});return a.jsx(n,{value:t,onChange:e})},s={render:()=>a.jsx(O,{})},q=()=>{const[t,e]=h.useState(null);return a.jsxs(y,{gap:"8",alignItems:"flex-start",children:[a.jsx(v,{textStyle:"mono.xs",color:"text.subtlest",children:"Bounded to 2026-07-01 through 2026-07-24 — everything outside that window is disabled at the day, month, and year level."}),a.jsx(n,{value:t,onChange:e,minDate:{year:2026,month:7,day:1},maxDate:{year:2026,month:7,day:24},defaultViewDate:{year:2026,month:7}})]})},c={render:()=>a.jsx(q,{})},l={render:()=>a.jsx(n,{disabled:!0,value:{year:2026,month:7,day:13},defaultViewDate:{year:2026,month:7}})},z=()=>{const[t,e]=h.useState(null);return a.jsxs(y,{gap:"8",alignItems:"flex-start",children:[a.jsx(v,{textStyle:"mono.xs",color:"text.subtlest",children:'Click the "Month Year" header label to jump to the Months view, then the year label to jump to Years — the standard fast-navigation drill-down for picking a date far from today.'}),a.jsx(n,{value:t,onChange:e,defaultViewDate:{year:2026,month:7}})]})},i={name:"Ex: Drill-Down Navigation",render:()=>a.jsx(z,{})},m={name:"Locale: French",render:()=>a.jsx(x,{locale:"fr-FR",children:a.jsx(n,{defaultViewDate:{year:2026,month:1}})}),play:async({canvasElement:t})=>{const e=p(t);await o(e.getByRole("button",{name:"janvier 2026"})).toBeInTheDocument(),await o(e.getByRole("columnheader",{name:"dimanche"})).toHaveTextContent("dim"),await o(e.getAllByRole("columnheader")[0]).toHaveAccessibleName("lundi"),await o(e.getByRole("gridcell",{name:"15 janvier 2026"})).toBeInTheDocument(),await Y.click(e.getByRole("button",{name:"janvier 2026"})),await o(e.getByRole("gridcell",{name:"février 2026"})).toHaveTextContent("févr.")}},d={name:"Locale: Spanish",render:()=>a.jsx(x,{locale:"es-ES",labels:{previousMonth:"Mes anterior",nextMonth:"Mes siguiente"},children:a.jsx(n,{defaultViewDate:{year:2026,month:1}})}),play:async({canvasElement:t})=>{const e=p(t);await o(e.getByRole("button",{name:"enero de 2026"})).toBeInTheDocument(),await o(e.getByRole("columnheader",{name:"miércoles"})).toHaveTextContent("mié"),await o(e.getAllByRole("columnheader")[0]).toHaveAccessibleName("lunes"),await o(e.getByRole("button",{name:"Mes anterior"})).toBeInTheDocument()}},u={name:"Locale: Thai (Gregorian Names)",render:()=>a.jsx(x,{locale:"th-TH",children:a.jsx(n,{defaultViewDate:{year:2026,month:1}})}),play:async({canvasElement:t})=>{const e=p(t);await o(e.getByRole("button",{name:"มกราคม 2026"})).toBeInTheDocument()}};var g,D,w;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <DefaultDemo />
}`,...(w=(D=r.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var f,B,S;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <WithSelectionDemo />
}`,...(S=(B=s.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var j,b,R;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <BoundedDemo />
}`,...(R=(b=c.parameters)==null?void 0:b.docs)==null?void 0:R.source}}};var T,M,C;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Calendar disabled value={{
    year: 2026,
    month: 7,
    day: 13
  }} defaultViewDate={{
    year: 2026,
    month: 7
  }} />
}`,...(C=(M=l.parameters)==null?void 0:M.docs)==null?void 0:C.source}}};var L,E,V;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Ex: Drill-Down Navigation',
  render: () => <DrillDownDemo />
}`,...(V=(E=i.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};var H,I,N;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(N=(I=m.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var k,A,F;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(F=(A=d.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};var P,W,G;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Locale: Thai (Gregorian Names)',
  render: () => <LocaleProvider locale="th-TH">
      <Calendar defaultViewDate={{
      year: 2026,
      month: 1
    }} />
    </LocaleProvider>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // th-TH defaults to the Buddhist calendar (year 2569). Calendar's grid is
    // Gregorian, so the title must show 2026.
    await expect(canvas.getByRole('button', {
      name: 'มกราคม 2026'
    })).toBeInTheDocument();
  }
}`,...(G=(W=u.parameters)==null?void 0:W.docs)==null?void 0:G.source}}};const pe=["Default","WithSelection","MinMaxBounds","Disabled","ExDrillDownNavigation","FrenchLocale","SpanishLocale","ThaiLocale"];export{r as Default,l as Disabled,i as ExDrillDownNavigation,m as FrenchLocale,c as MinMaxBounds,d as SpanishLocale,u as ThaiLocale,s as WithSelection,pe as __namedExportsOrder,he as default};
