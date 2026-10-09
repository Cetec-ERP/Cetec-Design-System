import{j as e,V as n,a as I,G as L,T as s,r as i,H as N}from"./iframe-CRR58YI_.js";import{I as _}from"./IconButton-zahHbzSg.js";import{D as a,T as B,a as G,b as W,c as q}from"./TimeRangeInput-DjT6eqTw.js";import"./preload-helper-De6kpJMI.js";import"./Spinner-BwYG2ZPB.js";import"./FieldContext-QFlrTQOk.js";import"./useControllableState-OVa5QkyD.js";import"./SegmentedTime-C2LwL15c.js";import"./dateTimeUtils-Ci5JiRSc.js";import"./Button-DSBwExzk.js";const ne={title:"Components/DateTime/Inputs",component:a,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`Segmented Date/Time input fields — DateInput, DateRangeInput, TimeInput,
TimeRangeInput, and DateTimeInput. Each wraps SegmentedDate/SegmentedTime
in a bordered field with the same before/after slot mechanics as TextInput.
These are standalone fields — no popover/calendar/menu attached yet
(that's the Menus phase); typing and arrow-key stepping work on their own.`}}}},d=t=>t?`${t.year}-${String(t.month).padStart(2,"0")}-${String(t.day).padStart(2,"0")}`:"none",c=t=>t?`${String(t.hour).padStart(2,"0")}:${String(t.minute).padStart(2,"0")}`:"none",F=()=>{const[t,h]=i.useState(null),[j,M]=i.useState(null),[r,O]=i.useState(null),[o,A]=i.useState(null),[l,H]=i.useState(null);return e.jsxs(n,{gap:"16",alignItems:"flex-start",children:[e.jsxs(n,{gap:"4",alignItems:"flex-start",children:[e.jsxs(s,{textStyle:"mono.xs",color:"text.subtlest",children:["DateInput — ",d(t)]}),e.jsx(a,{value:t,onChange:h})]}),e.jsxs(n,{gap:"4",alignItems:"flex-start",children:[e.jsxs(s,{textStyle:"mono.xs",color:"text.subtlest",children:["TimeInput — ",c(j)]}),e.jsx(B,{value:j,onChange:M})]}),e.jsxs(n,{gap:"4",alignItems:"flex-start",children:[e.jsxs(s,{textStyle:"mono.xs",color:"text.subtlest",children:["DateRangeInput — ",d(r==null?void 0:r.start)," –"," ",d(r==null?void 0:r.end)]}),e.jsx(G,{value:r,onChange:O})]}),e.jsxs(n,{gap:"4",alignItems:"flex-start",children:[e.jsxs(s,{textStyle:"mono.xs",color:"text.subtlest",children:["TimeRangeInput — ",c(o==null?void 0:o.start)," –"," ",c(o==null?void 0:o.end)]}),e.jsx(W,{value:o,onChange:A})]}),e.jsxs(n,{gap:"4",alignItems:"flex-start",children:[e.jsxs(s,{textStyle:"mono.xs",color:"text.subtlest",children:["DateTimeInput — ",d(l==null?void 0:l.date)," ",c(l==null?void 0:l.time)]}),e.jsx(q,{value:l,onChange:H})]})]})},m={render:()=>e.jsx(F,{})},p={render:()=>e.jsxs(n,{gap:"8",alignItems:"flex-start",children:[e.jsx(a,{size:"sm",label:"Small"}),e.jsx(a,{size:"md",label:"Medium"}),e.jsx(a,{size:"lg",label:"Large"}),e.jsx(a,{size:"xl",label:"Extra large"})]})},x={render:()=>e.jsxs(n,{gap:"8",alignItems:"flex-start",children:[e.jsx(a,{before:e.jsx(I,{name:"calendar","aria-hidden":!0})}),e.jsx(a,{after:e.jsx(_,{variant:"ghost",altText:"Open calendar",iconName:"calendar"})}),e.jsx(B,{before:e.jsx(I,{name:"clock","aria-hidden":!0})})]})},u={render:()=>e.jsxs(L,{columns:2,gap:"8",alignItems:"center",children:[e.jsx(s,{children:"default"}),e.jsx(a,{label:"Default"}),e.jsx(s,{children:"disabled"}),e.jsx(a,{label:"Disabled",disabled:!0,value:{year:2026,month:7,day:13}}),e.jsx(s,{children:"error"}),e.jsx(a,{label:"Error",error:!0,value:{year:2026,month:7,day:13}})]})},J=()=>{const[t,h]=i.useState({start:{year:2026,month:5,day:1},end:{year:2026,month:6,day:9}});return e.jsxs(n,{gap:"4",alignItems:"flex-start",children:[e.jsx(s,{textStyle:"body.sm",fontWeight:"medium",children:"Expense date range"}),e.jsx(N,{gap:"8",children:e.jsx(G,{value:t,onChange:h,before:e.jsx(I,{name:"calendar","aria-hidden":!0})})})]})},g={name:"Ex: Expense Date Range",render:()=>e.jsx(J,{})},se=["Default","Sizes","BeforeAfterSlots","States","ExExpenseDateRange"];var D,f,S;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <DefaultDemo />
}`,...(S=(f=m.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var b,T,y;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...($=(w=g.parameters)==null?void 0:w.docs)==null?void 0:$.source}}};export{x as BeforeAfterSlots,m as Default,g as ExExpenseDateRange,p as Sizes,u as States,se as __namedExportsOrder,ne as default};
