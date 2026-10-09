import{r as i,j as t,V as n,T as a,G as g}from"./iframe-DZjfHOlA.js";import{D as G,a as $,T as p,b as S,c as h}from"./TimeRangeMenu-B4Dh_JnY.js";import"./preload-helper-BWCT3BfN.js";import"./Calendar-TgABJkuk.js";import"./Button-Cy6v52eP.js";import"./Spinner-C55NuBax.js";import"./FieldContext-UIV0oueV.js";import"./dateTimeUtils-Ci5JiRSc.js";import"./IconButton-BTcEr8Y4.js";import"./SubMenu-Cyq7SreX.js";import"./HighlightText-eP4BPY5y.js";import"./menu-CRvwsY4u.js";import"./FloatingLayerContext-Bt3CuMRH.js";import"./ListItemGroup-D60nHlCE.js";import"./Divider-DjfUucoR.js";import"./Checkbox-BSSHh8iM.js";import"./Toggle-DI_DQhLe.js";import"./useControllableState-CLFdmhFI.js";import"./ListItem-WInI1y0E.js";const ee={title:"Components/DateTime/Menus",component:G,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`Menus for the Date/Time family — DateMenu, DateRangeMenu, TimeMenu,
TimeRangeMenu, and DateTimeMenu. These stories render the menus inline so
their panels are visible without first opening a trigger popover. Range
menus and DateTimeMenu hold a pending/draft selection with Cancel/Apply
footer actions; DateMenu/TimeMenu commit immediately on selection.

\`timeFormat\` is a real prop, not a toggle — each 12h/24h story just passes
a different fixed value.`}}}},o=s=>s?`${s.year}-${String(s.month).padStart(2,"0")}-${String(s.day).padStart(2,"0")}`:"none",l=s=>s?`${String(s.hour).padStart(2,"0")}:${String(s.minute).padStart(2,"0")}`:"none",m={name:"DateMenu",render:function(){const[e,r]=i.useState(null);return t.jsxs(n,{gap:"8",alignItems:"flex-start",children:[t.jsxs(a,{textStyle:"mono.xs",color:"text.subtlest",children:["Selected: ",o(e)]}),t.jsx(G,{inline:!0,value:e,onChange:r})]})}},u={name:"DateRangeMenu",render:function(){const[e,r]=i.useState(null);return t.jsxs(n,{gap:"4",alignItems:"flex-start",children:[t.jsxs(a,{textStyle:"body.sm",fontWeight:"medium",children:["Selected: ",o(e==null?void 0:e.start)," – ",o(e==null?void 0:e.end)]}),t.jsx($,{inline:!0,value:e,onChange:r,startLabel:"Expense start",endLabel:"Expense end"})]})}},c={name:"TimeMenu",render:function(){const[e,r]=i.useState(null);return t.jsxs(g,{columns:2,gap:"56",children:[t.jsxs(n,{gap:"8",alignItems:"flex-start",children:[t.jsxs(n,{gap:"0",alignItems:"flex-start",children:[t.jsx(a,{color:"text",children:"12hr"}),t.jsxs(a,{textStyle:"mono.xs",color:"text.subtlest",children:["Selected: ",l(e)]})]}),t.jsx(p,{inline:!0,value:e,onChange:r,timeFormat:"12"})]}),t.jsxs(n,{gap:"8",alignItems:"flex-start",children:[t.jsxs(n,{gap:"0",alignItems:"flex-start",children:[t.jsx(a,{color:"text",children:"24hr"}),t.jsxs(a,{textStyle:"mono.xs",color:"text.subtlest",children:["Selected: ",l(e)]})]}),t.jsx(p,{inline:!0,value:e,onChange:r,timeFormat:"24"})]})]})}},x={name:"TimeRangeMenu",render:function(){const[e,r]=i.useState(null);return t.jsxs(g,{columns:2,gap:"56",children:[t.jsxs(n,{gap:"8",alignItems:"flex-start",children:[t.jsxs(n,{gap:"0",alignItems:"flex-start",children:[t.jsx(a,{color:"text",children:"12hr"}),t.jsxs(a,{textStyle:"mono.xs",color:"text.subtlest",children:["Selected: ",l(e==null?void 0:e.start)," – ",l(e==null?void 0:e.end)]})]}),t.jsx(S,{inline:!0,value:e,onChange:r,timeFormat:"12"})]}),t.jsxs(n,{gap:"8",alignItems:"flex-start",children:[t.jsxs(n,{gap:"0",alignItems:"flex-start",children:[t.jsx(a,{color:"text",children:"24hr"}),t.jsxs(a,{textStyle:"mono.xs",color:"text.subtlest",children:["Selected: ",l(e==null?void 0:e.start)," – ",l(e==null?void 0:e.end)]})]}),t.jsx(S,{inline:!0,value:e,onChange:r,timeFormat:"24"})]})]})}},d={name:"DateTimeMenu",render:function(){const[e,r]=i.useState(null);return t.jsxs(g,{columns:2,gap:"56",children:[t.jsxs(n,{gap:"8",alignItems:"flex-start",children:[t.jsxs(n,{gap:"0",alignItems:"flex-start",children:[t.jsx(a,{color:"text",children:"12hr"}),t.jsxs(a,{textStyle:"mono.xs",color:"text.subtlest",children:["Selected: ",o(e==null?void 0:e.date)," ",l(e==null?void 0:e.time)]})]}),t.jsx(h,{inline:!0,value:e,onChange:r,timeFormat:"12"})]}),t.jsxs(n,{gap:"8",alignItems:"flex-start",children:[t.jsxs(n,{gap:"0",alignItems:"flex-start",children:[t.jsx(a,{color:"text",children:"24hr"}),t.jsxs(a,{textStyle:"mono.xs",color:"text.subtlest",children:["Selected: ",o(e==null?void 0:e.date)," ",l(e==null?void 0:e.time)]})]}),t.jsx(h,{inline:!0,value:e,onChange:r,timeFormat:"24"})]})]})}},te=["Date","DateRange","TimeMenus","TimeRangeMenus","DateTimeMenus"];var T,f,V;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'DateMenu',
  render: function DateMenuRender() {
    const [value, setValue] = useState<DateValue | null>(null);
    return <VStack gap="8" alignItems="flex-start">
        <Text textStyle="mono.xs" color="text.subtlest">
          Selected: {formatDate(value)}
        </Text>
        <DateMenu inline value={value} onChange={setValue} />
      </VStack>;
  }
}`,...(V=(f=m.parameters)==null?void 0:f.docs)==null?void 0:V.source}}};var M,j,D;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'DateRangeMenu',
  render: function ExExpenseDateRangeRender() {
    const [range, setRange] = useState<DateRangeValue | null>(null);
    return <VStack gap="4" alignItems="flex-start">
        <Text textStyle="body.sm" fontWeight="medium">
          Selected: {formatDate(range?.start)} – {formatDate(range?.end)}
        </Text>
        <DateRangeMenu inline value={range} onChange={setRange} startLabel="Expense start" endLabel="Expense end" />
      </VStack>;
  }
}`,...(D=(j=u.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var R,k,I;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'TimeMenu',
  render: function TimeMenu12hRender() {
    const [value, setValue] = useState<TimeValue | null>(null);
    return <Grid columns={2} gap="56">
        <VStack gap="8" alignItems="flex-start">
          <VStack gap="0" alignItems="flex-start">
            <Text color="text">12hr</Text>
            <Text textStyle="mono.xs" color="text.subtlest">
              Selected: {formatTime(value)}
            </Text>
          </VStack>
          <TimeMenu inline value={value} onChange={setValue} timeFormat="12" />
        </VStack>
        <VStack gap="8" alignItems="flex-start">
          <VStack gap="0" alignItems="flex-start">
            <Text color="text">24hr</Text>
            <Text textStyle="mono.xs" color="text.subtlest">
              Selected: {formatTime(value)}
            </Text>
          </VStack>
          <TimeMenu inline value={value} onChange={setValue} timeFormat="24" />
        </VStack>
      </Grid>;
  }
}`,...(I=(k=c.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};var y,b,C;x.parameters={...x.parameters,docs:{...(y=x.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'TimeRangeMenu',
  render: function TimeRangeMenu12hRender() {
    const [value, setValue] = useState<TimeRangeValue | null>(null);
    return <Grid columns={2} gap="56">
        <VStack gap="8" alignItems="flex-start">
          <VStack gap="0" alignItems="flex-start">
            <Text color="text">12hr</Text>
            <Text textStyle="mono.xs" color="text.subtlest">
              Selected: {formatTime(value?.start)} – {formatTime(value?.end)}
            </Text>
          </VStack>
          <TimeRangeMenu inline value={value} onChange={setValue} timeFormat="12" />
        </VStack>
        <VStack gap="8" alignItems="flex-start">
          <VStack gap="0" alignItems="flex-start">
            <Text color="text">24hr</Text>
            <Text textStyle="mono.xs" color="text.subtlest">
              Selected: {formatTime(value?.start)} – {formatTime(value?.end)}
            </Text>
          </VStack>
          <TimeRangeMenu inline value={value} onChange={setValue} timeFormat="24" />
        </VStack>
      </Grid>;
  }
}`,...(C=(b=x.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var v,F,E;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'DateTimeMenu',
  render: function DateTimeMenu12hRender() {
    const [value, setValue] = useState<DateTimeValue | null>(null);
    return <Grid columns={2} gap="56">
        <VStack gap="8" alignItems="flex-start">
          <VStack gap="0" alignItems="flex-start">
            <Text color="text">12hr</Text>
            <Text textStyle="mono.xs" color="text.subtlest">
              Selected: {formatDate(value?.date)} {formatTime(value?.time)}
            </Text>
          </VStack>
          <DateTimeMenu inline value={value} onChange={setValue} timeFormat="12" />
        </VStack>
        <VStack gap="8" alignItems="flex-start">
          <VStack gap="0" alignItems="flex-start">
            <Text color="text">24hr</Text>
            <Text textStyle="mono.xs" color="text.subtlest">
              Selected: {formatDate(value?.date)} {formatTime(value?.time)}
            </Text>
          </VStack>
          <DateTimeMenu inline value={value} onChange={setValue} timeFormat="24" />
        </VStack>
      </Grid>;
  }
}`,...(E=(F=d.parameters)==null?void 0:F.docs)==null?void 0:E.source}}};export{m as Date,u as DateRange,d as DateTimeMenus,c as TimeMenus,x as TimeRangeMenus,te as __namedExportsOrder,ee as default};
