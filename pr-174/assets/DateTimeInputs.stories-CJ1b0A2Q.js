import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./index-BKyFwriW.js";import{V as n,G as L,H as N}from"./Box-C4uJrM56.js";import{I}from"./Icon-DVkTIUY6.js";import"./IconConfig-CwDT3tlP.js";import{I as _}from"./IconButton-BHliuBHk.js";import{T as r}from"./Text-MsVbvEyI.js";import{D as a,T as B,a as G,b as W,c as q}from"./TimeRangeInput-BzYCzWnb.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Spinner-DQMshQyu.js";import"./Tooltip-BTuY3Pe3.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";import"./FieldContext-D6URyQos.js";import"./Button-CQNMiShy.js";import"./SegmentedTime-BSG_WsFL.js";const me={title:"Components/DateTime/Inputs",component:a,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`Segmented Date/Time input fields — DateInput, DateRangeInput, TimeInput,
TimeRangeInput, and DateTimeInput. Each wraps SegmentedDate/SegmentedTime
in a bordered field with the same before/after slot mechanics as TextInput.
These are standalone fields — no popover/calendar/menu attached yet
(that's the Menus phase); typing and arrow-key stepping work on their own.`}}}},m=t=>t?`${t.year}-${String(t.month).padStart(2,"0")}-${String(t.day).padStart(2,"0")}`:"none",d=t=>t?`${String(t.hour).padStart(2,"0")}:${String(t.minute).padStart(2,"0")}`:"none",F=()=>{const[t,h]=i.useState(null),[f,M]=i.useState(null),[s,O]=i.useState(null),[o,A]=i.useState(null),[l,H]=i.useState(null);return e.jsxs(n,{gap:"16",alignItems:"flex-start",children:[e.jsxs(n,{gap:"4",alignItems:"flex-start",children:[e.jsxs(r,{textStyle:"mono.xs",color:"text.subtlest",children:["DateInput — ",m(t)]}),e.jsx(a,{value:t,onChange:h})]}),e.jsxs(n,{gap:"4",alignItems:"flex-start",children:[e.jsxs(r,{textStyle:"mono.xs",color:"text.subtlest",children:["TimeInput — ",d(f)]}),e.jsx(B,{value:f,onChange:M})]}),e.jsxs(n,{gap:"4",alignItems:"flex-start",children:[e.jsxs(r,{textStyle:"mono.xs",color:"text.subtlest",children:["DateRangeInput — ",m(s==null?void 0:s.start)," –"," ",m(s==null?void 0:s.end)]}),e.jsx(G,{value:s,onChange:O})]}),e.jsxs(n,{gap:"4",alignItems:"flex-start",children:[e.jsxs(r,{textStyle:"mono.xs",color:"text.subtlest",children:["TimeRangeInput — ",d(o==null?void 0:o.start)," –"," ",d(o==null?void 0:o.end)]}),e.jsx(W,{value:o,onChange:A})]}),e.jsxs(n,{gap:"4",alignItems:"flex-start",children:[e.jsxs(r,{textStyle:"mono.xs",color:"text.subtlest",children:["DateTimeInput — ",m(l==null?void 0:l.date)," ",d(l==null?void 0:l.time)]}),e.jsx(q,{value:l,onChange:H})]})]})},c={render:()=>e.jsx(F,{})},p={render:()=>e.jsxs(n,{gap:"8",alignItems:"flex-start",children:[e.jsx(a,{size:"sm",label:"Small"}),e.jsx(a,{size:"md",label:"Medium"}),e.jsx(a,{size:"lg",label:"Large"}),e.jsx(a,{size:"xl",label:"Extra large"})]})},x={render:()=>e.jsxs(n,{gap:"8",alignItems:"flex-start",children:[e.jsx(a,{before:e.jsx(I,{name:"calendar","aria-hidden":!0})}),e.jsx(a,{after:e.jsx(_,{variant:"ghost",altText:"Open calendar",iconName:"calendar"})}),e.jsx(B,{before:e.jsx(I,{name:"clock","aria-hidden":!0})})]})},u={render:()=>e.jsxs(L,{columns:2,gap:"8",alignItems:"center",children:[e.jsx(r,{children:"default"}),e.jsx(a,{label:"Default"}),e.jsx(r,{children:"disabled"}),e.jsx(a,{label:"Disabled",disabled:!0,value:{year:2026,month:7,day:13}}),e.jsx(r,{children:"error"}),e.jsx(a,{label:"Error",error:!0,value:{year:2026,month:7,day:13}})]})},J=()=>{const[t,h]=i.useState({start:{year:2026,month:5,day:1},end:{year:2026,month:6,day:9}});return e.jsxs(n,{gap:"4",alignItems:"flex-start",children:[e.jsx(r,{textStyle:"body.sm",fontWeight:"medium",children:"Expense date range"}),e.jsx(N,{gap:"8",children:e.jsx(G,{value:t,onChange:h,before:e.jsx(I,{name:"calendar","aria-hidden":!0})})})]})},g={name:"Ex: Expense Date Range",render:()=>e.jsx(J,{})};var j,D,S;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <DefaultDemo />
}`,...(S=(D=c.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var b,T,y;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <VStack gap="8" alignItems="flex-start">
      <DateInput size="sm" label="Small" />
      <DateInput size="md" label="Medium" />
      <DateInput size="lg" label="Large" />
      <DateInput size="xl" label="Extra large" />
    </VStack>
}`,...(y=(T=p.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};var E,k,z;x.parameters={...x.parameters,docs:{...(E=x.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <VStack gap="8" alignItems="flex-start">
      <DateInput before={<Icon name="calendar" aria-hidden />} />
      <DateInput after={<IconButton variant="ghost" altText="Open calendar" iconName="calendar" />} />
      <TimeInput before={<Icon name="clock" aria-hidden />} />
    </VStack>
}`,...(z=(k=x.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var R,v,C;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <Grid columns={2} gap="8" alignItems="center">
      <Text>default</Text>
      <DateInput label="Default" />
      <Text>disabled</Text>
      <DateInput label="Disabled" disabled value={{
      year: 2026,
      month: 7,
      day: 13
    }} />
      <Text>error</Text>
      <DateInput label="Error" error value={{
      year: 2026,
      month: 7,
      day: 13
    }} />
    </Grid>
}`,...(C=(v=u.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var V,w,$;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Ex: Expense Date Range',
  render: () => <ExpenseDateRangeDemo />
}`,...($=(w=g.parameters)==null?void 0:w.docs)==null?void 0:$.source}}};const de=["Default","Sizes","BeforeAfterSlots","States","ExExpenseDateRange"];export{x as BeforeAfterSlots,c as Default,g as ExExpenseDateRange,p as Sizes,u as States,de as __namedExportsOrder,me as default};
