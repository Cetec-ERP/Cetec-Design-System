import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./index-BKyFwriW.js";import{V as a,G as g}from"./Box-C4uJrM56.js";import{T as n}from"./Text-MsVbvEyI.js";import{D as G,a as $,T as p,b as S,c as h}from"./TimeRangeMenu-ByzN_Ba2.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Calendar-BlzRKyjH.js";import"./Button-CQNMiShy.js";import"./Icon-DVkTIUY6.js";import"./IconConfig-CwDT3tlP.js";import"./Spinner-DQMshQyu.js";import"./FieldContext-D6URyQos.js";import"./IconButton-BHliuBHk.js";import"./Tooltip-BTuY3Pe3.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";import"./SubMenu-B--nSCIn.js";import"./ListItem-CA4sLCTj.js";import"./Divider-BN4yVLcR.js";import"./Checkbox-D03hsQ_a.js";import"./Toggle-gSazCA-r.js";import"./menu-CIKCa2hY.js";const ne={title:"Components/DateTime/Menus",component:G,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`Menus for the Date/Time family — DateMenu, DateRangeMenu, TimeMenu,
TimeRangeMenu, and DateTimeMenu. These stories render the menus inline so
their panels are visible without first opening a trigger popover. Range
menus and DateTimeMenu hold a pending/draft selection with Cancel/Apply
footer actions; DateMenu/TimeMenu commit immediately on selection.

\`timeFormat\` is a real prop, not a toggle — each 12h/24h story just passes
a different fixed value.`}}}},o=r=>r?`${r.year}-${String(r.month).padStart(2,"0")}-${String(r.day).padStart(2,"0")}`:"none",l=r=>r?`${String(r.hour).padStart(2,"0")}:${String(r.minute).padStart(2,"0")}`:"none",m={name:"DateMenu",render:function(){const[e,s]=i.useState(null);return t.jsxs(a,{gap:"8",alignItems:"flex-start",children:[t.jsxs(n,{textStyle:"mono.xs",color:"text.subtlest",children:["Selected: ",o(e)]}),t.jsx(G,{inline:!0,value:e,onChange:s})]})}},u={name:"DateRangeMenu",render:function(){const[e,s]=i.useState(null);return t.jsxs(a,{gap:"4",alignItems:"flex-start",children:[t.jsxs(n,{textStyle:"body.sm",fontWeight:"medium",children:["Selected: ",o(e==null?void 0:e.start)," – ",o(e==null?void 0:e.end)]}),t.jsx($,{inline:!0,value:e,onChange:s,startLabel:"Expense start",endLabel:"Expense end"})]})}},c={name:"TimeMenu",render:function(){const[e,s]=i.useState(null);return t.jsxs(g,{columns:2,gap:"56",children:[t.jsxs(a,{gap:"8",alignItems:"flex-start",children:[t.jsxs(a,{gap:"0",alignItems:"flex-start",children:[t.jsx(n,{color:"text",children:"12hr"}),t.jsxs(n,{textStyle:"mono.xs",color:"text.subtlest",children:["Selected: ",l(e)]})]}),t.jsx(p,{inline:!0,value:e,onChange:s,timeFormat:"12"})]}),t.jsxs(a,{gap:"8",alignItems:"flex-start",children:[t.jsxs(a,{gap:"0",alignItems:"flex-start",children:[t.jsx(n,{color:"text",children:"24hr"}),t.jsxs(n,{textStyle:"mono.xs",color:"text.subtlest",children:["Selected: ",l(e)]})]}),t.jsx(p,{inline:!0,value:e,onChange:s,timeFormat:"24"})]})]})}},x={name:"TimeRangeMenu",render:function(){const[e,s]=i.useState(null);return t.jsxs(g,{columns:2,gap:"56",children:[t.jsxs(a,{gap:"8",alignItems:"flex-start",children:[t.jsxs(a,{gap:"0",alignItems:"flex-start",children:[t.jsx(n,{color:"text",children:"12hr"}),t.jsxs(n,{textStyle:"mono.xs",color:"text.subtlest",children:["Selected: ",l(e==null?void 0:e.start)," – ",l(e==null?void 0:e.end)]})]}),t.jsx(S,{inline:!0,value:e,onChange:s,timeFormat:"12"})]}),t.jsxs(a,{gap:"8",alignItems:"flex-start",children:[t.jsxs(a,{gap:"0",alignItems:"flex-start",children:[t.jsx(n,{color:"text",children:"24hr"}),t.jsxs(n,{textStyle:"mono.xs",color:"text.subtlest",children:["Selected: ",l(e==null?void 0:e.start)," – ",l(e==null?void 0:e.end)]})]}),t.jsx(S,{inline:!0,value:e,onChange:s,timeFormat:"24"})]})]})}},d={name:"DateTimeMenu",render:function(){const[e,s]=i.useState(null);return t.jsxs(g,{columns:2,gap:"56",children:[t.jsxs(a,{gap:"8",alignItems:"flex-start",children:[t.jsxs(a,{gap:"0",alignItems:"flex-start",children:[t.jsx(n,{color:"text",children:"12hr"}),t.jsxs(n,{textStyle:"mono.xs",color:"text.subtlest",children:["Selected: ",o(e==null?void 0:e.date)," ",l(e==null?void 0:e.time)]})]}),t.jsx(h,{inline:!0,value:e,onChange:s,timeFormat:"12"})]}),t.jsxs(a,{gap:"8",alignItems:"flex-start",children:[t.jsxs(a,{gap:"0",alignItems:"flex-start",children:[t.jsx(n,{color:"text",children:"24hr"}),t.jsxs(n,{textStyle:"mono.xs",color:"text.subtlest",children:["Selected: ",o(e==null?void 0:e.date)," ",l(e==null?void 0:e.time)]})]}),t.jsx(h,{inline:!0,value:e,onChange:s,timeFormat:"24"})]})]})}};var T,f,V;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(E=(F=d.parameters)==null?void 0:F.docs)==null?void 0:E.source}}};const re=["Date","DateRange","TimeMenus","TimeRangeMenus","DateTimeMenus"];export{m as Date,u as DateRange,d as DateTimeMenus,c as TimeMenus,x as TimeRangeMenus,re as __namedExportsOrder,ne as default};
