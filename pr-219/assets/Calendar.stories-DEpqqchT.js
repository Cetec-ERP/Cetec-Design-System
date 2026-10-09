import{j as a,r as h,V as p,T as x}from"./iframe-CXsJ8nBA.js";import{L as y}from"./LocaleProvider-YDfjqs1Q.js";import"./useLocale-viKyk6pi.js";import{C as o}from"./Calendar-fxry1e5r.js";import"./preload-helper-CNOPt5Zm.js";import"./Button-CZE1N6w8.js";import"./Spinner-D-dkI8vG.js";import"./FieldContext-B4fdc69l.js";import"./dateTimeUtils-Ci5JiRSc.js";import"./IconButton-Bkoqj9RS.js";const{expect:t,userEvent:W,within:v}=__STORYBOOK_MODULE_TEST__,oe={title:"Components/Calendar",component:o,tags:["autodocs"],parameters:{docs:{description:{component:"Standalone Days/Months/Years calendar grid. No popover, no input field, no picker — this is the pure selection surface that DateMenu/DateTimeMenu and eventually the pickers compose on top of."}}}},Y=n=>n?`${n.year}-${String(n.month).padStart(2,"0")}-${String(n.day).padStart(2,"0")}`:"none",G=()=>{const[n,e]=h.useState(null);return a.jsxs(p,{gap:"8",alignItems:"flex-start",children:[a.jsx(o,{value:n,onChange:e}),a.jsxs(x,{textStyle:"mono.xs",color:"text.subtlest",children:["Selected: ",Y(n)]})]})},r={render:()=>a.jsx(G,{})},$=()=>{const[n,e]=h.useState({year:2026,month:7,day:13});return a.jsx(o,{value:n,onChange:e})},s={render:()=>a.jsx($,{})},K=()=>{const[n,e]=h.useState(null);return a.jsxs(p,{gap:"8",alignItems:"flex-start",children:[a.jsx(x,{textStyle:"mono.xs",color:"text.subtlest",children:"Bounded to 2026-07-01 through 2026-07-24 — everything outside that window is disabled at the day, month, and year level."}),a.jsx(o,{value:n,onChange:e,minDate:{year:2026,month:7,day:1},maxDate:{year:2026,month:7,day:24},defaultViewDate:{year:2026,month:7}})]})},c={render:()=>a.jsx(K,{})},l={render:()=>a.jsx(o,{disabled:!0,value:{year:2026,month:7,day:13},defaultViewDate:{year:2026,month:7}})},U=()=>{const[n,e]=h.useState(null);return a.jsxs(p,{gap:"8",alignItems:"flex-start",children:[a.jsx(x,{textStyle:"mono.xs",color:"text.subtlest",children:'Click the "Month Year" header label to jump to the Months view, then the year label to jump to Years — the standard fast-navigation drill-down for picking a date far from today.'}),a.jsx(o,{value:n,onChange:e,defaultViewDate:{year:2026,month:7}})]})},i={name:"Ex: Drill-Down Navigation",render:()=>a.jsx(U,{})},m={name:"Locale: French",render:()=>a.jsx(y,{locale:"fr-FR",children:a.jsx(o,{defaultViewDate:{year:2026,month:1}})}),play:async({canvasElement:n})=>{const e=v(n);await t(e.getByRole("button",{name:"janvier 2026"})).toBeInTheDocument(),await t(e.getByRole("columnheader",{name:"dimanche"})).toHaveTextContent("dim"),await t(e.getAllByRole("columnheader")[0]).toHaveAccessibleName("lundi"),await t(e.getByRole("gridcell",{name:"15 janvier 2026"})).toBeInTheDocument(),await W.click(e.getByRole("button",{name:"janvier 2026"})),await t(e.getByRole("gridcell",{name:"février 2026"})).toHaveTextContent("févr.")}},d={name:"Locale: Spanish",render:()=>a.jsx(y,{locale:"es-ES",labels:{previousMonth:"Mes anterior",nextMonth:"Mes siguiente"},children:a.jsx(o,{defaultViewDate:{year:2026,month:1}})}),play:async({canvasElement:n})=>{const e=v(n);await t(e.getByRole("button",{name:"enero de 2026"})).toBeInTheDocument(),await t(e.getByRole("columnheader",{name:"miércoles"})).toHaveTextContent("mié"),await t(e.getAllByRole("columnheader")[0]).toHaveAccessibleName("lunes"),await t(e.getByRole("button",{name:"Mes anterior"})).toBeInTheDocument()}},u={name:"Locale: Thai (Gregorian Names)",render:()=>a.jsx(y,{locale:"th-TH",children:a.jsx(o,{defaultViewDate:{year:2026,month:1}})}),play:async({canvasElement:n})=>{const e=v(n);await t(e.getByRole("button",{name:"มกราคม 2026"})).toBeInTheDocument()}},re=["Default","WithSelection","MinMaxBounds","Disabled","ExDrillDownNavigation","FrenchLocale","SpanishLocale","ThaiLocale"];var g,D,w;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <DefaultDemo />
}`,...(w=(D=r.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var B,f,S;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <WithSelectionDemo />
}`,...(S=(f=s.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var j,E,T;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <BoundedDemo />
}`,...(T=(E=c.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var R,b,M;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <Calendar disabled value={{
    year: 2026,
    month: 7,
    day: 13
  }} defaultViewDate={{
    year: 2026,
    month: 7
  }} />
}`,...(M=(b=l.parameters)==null?void 0:b.docs)==null?void 0:M.source}}};var L,C,V;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Ex: Drill-Down Navigation',
  render: () => <DrillDownDemo />
}`,...(V=(C=i.parameters)==null?void 0:C.docs)==null?void 0:V.source}}};var H,I,N;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(N=(I=m.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var k,A,_;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(_=(A=d.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};var F,P,O;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(O=(P=u.parameters)==null?void 0:P.docs)==null?void 0:O.source}}};export{r as Default,l as Disabled,i as ExDrillDownNavigation,m as FrenchLocale,c as MinMaxBounds,d as SpanishLocale,u as ThaiLocale,s as WithSelection,re as __namedExportsOrder,oe as default};
