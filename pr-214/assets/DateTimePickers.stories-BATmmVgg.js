import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./index-BKyFwriW.js";import{w as J,u as K,e as k}from"./index-DPYJpPba.js";import{V as s,G as u}from"./dsComponent-BG2jnRr7.js";import{T as n}from"./Text-IAtRPmZy.js";import{D as S,a as f,T as Y,b,c as P,d as N}from"./TimeRangePicker-Ba1plaUp.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Tooltip-bxPM6yCH.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";import"./useControllableState-ByGfjEIG.js";import"./TimeRangeInput-DsS8PRSc.js";import"./Icon-CrwLKW7B.js";import"./IconConfig-BuieZFlx.js";import"./FieldContext-D6URyQos.js";import"./SegmentedTime-DIfq-aZx.js";import"./dateTimeUtils-Ci5JiRSc.js";import"./IconButton-DXX-zVMP.js";import"./Spinner-PLunUSsK.js";import"./Button-Cr4bC5CG.js";import"./TimeRangeMenu-Bj6S3iKL.js";import"./Calendar-WDp2FJHF.js";import"./SubMenu-CDsavkZP.js";import"./HighlightText-DKF3xkQK.js";import"./menu-DMiDM6i6.js";import"./FloatingLayerContext-BryH8O9I.js";import"./ListItemGroup-C6Yw6dSd.js";import"./Divider-Dbp7vcYx.js";import"./Checkbox-BKc0omfg.js";import"./Toggle-mlz1wkXL.js";import"./ListItem-BTQR-hRu.js";const je={title:"Components/DateTime/Pickers",component:S,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:`The six Date/Time pickers — each composes an Input (typed segmented entry)
with a Menu (calendar/column popover) sharing the same trigger, matching
the multi-part-composition standard: the picker owns the committed value
and open state, and passes both down to its Input and Menu halves so they
always agree. \`timeFormat\` is a real prop, not a toggle — each 12h/24h story
passes a different fixed value.`}}},decorators:[a=>e.jsx(s,{width:"full",alignItems:"center",pt:"16",pb:"16",children:e.jsx(a,{})})]},c=a=>a?`${a.year}-${String(a.month).padStart(2,"0")}-${String(a.day).padStart(2,"0")}`:"none",m=a=>a?`${String(a.hour).padStart(2,"0")}:${String(a.minute).padStart(2,"0")}`:"none",V=a=>`${c(a==null?void 0:a.date)} ${m(a==null?void 0:a.time)}`,x={name:"DatePicker",render:function(){const[t,l]=o.useState(null),[r,i]=o.useState(null);return e.jsxs(u,{columns:2,gap:"56",children:[e.jsxs(s,{gap:"8",alignItems:"flex-start",children:[e.jsx(n,{color:"text",children:"Format: YYYY-MM-DD"}),e.jsx(S,{label:"Date",value:t,onChange:l}),e.jsxs(n,{textStyle:"mono.xs",color:"text.subtlest",children:["Value: ",c(t)]})]}),e.jsxs(s,{gap:"8",alignItems:"flex-start",children:[e.jsx(n,{color:"text",children:"Format: MM/DD/YYYY"}),e.jsx(S,{dateFormat:"MM/DD/YYYY",label:"Date",value:r,onChange:i}),e.jsxs(n,{textStyle:"mono.xs",color:"text.subtlest",children:["Value: ",c(r)]})]})]})}},d={name:"DatePicker: Clear action",render:function(){const[t,l]=o.useState({year:2026,month:9,day:21});return e.jsxs(s,{gap:"8",alignItems:"flex-start",children:[e.jsx(S,{label:"Due date",value:t,onChange:l}),e.jsxs(n,{textStyle:"mono.xs",color:"text.subtlest",children:["Value: ",c(t)]})]})},play:async({canvasElement:a})=>{const t=J(a),l=t.getByRole("group",{name:"Due date"}).parentElement;if(!(l instanceof HTMLElement))throw new Error("DatePicker should render a field around its segments.");const r=l.getBoundingClientRect().height;await K.click(t.getByRole("button",{name:"Clear date"})),k(t.getByText("Value: none")).toBeInTheDocument(),k(l.getBoundingClientRect().height).toBe(r),k(t.queryByRole("button",{name:"Clear date"})).not.toBeInTheDocument()},parameters:{controls:{disable:!0}}},g={name:"DateRangePicker",render:function(){const[t,l]=o.useState(null),[r,i]=o.useState(null);return e.jsxs(u,{columns:2,gap:"56",children:[e.jsxs(s,{gap:"8",alignItems:"flex-start",children:[e.jsx(n,{color:"text",children:"Format: YYYY-MM-DD"}),e.jsx(f,{startLabel:"Start date",endLabel:"End date",value:t,onChange:l}),e.jsxs(n,{textStyle:"mono.xs",color:"text.subtlest",children:["Value: ",c(t==null?void 0:t.start)," – ",c(t==null?void 0:t.end)]})]}),e.jsxs(s,{gap:"8",alignItems:"flex-start",children:[e.jsx(n,{color:"text",children:"Format: MM/DD/YYYY"}),e.jsx(f,{dateFormat:"MM/DD/YYYY",startLabel:"Start date",endLabel:"End date",value:r,onChange:i}),e.jsxs(n,{textStyle:"mono.xs",color:"text.subtlest",children:["Value: ",c(r==null?void 0:r.start)," – ",c(r==null?void 0:r.end)]})]})]})}},p={name:"TimePicker",render:function(){const[t,l]=o.useState(null),[r,i]=o.useState(null);return e.jsxs(u,{columns:2,gap:"56",children:[e.jsxs(s,{gap:"8",alignItems:"flex-start",children:[e.jsx(n,{color:"text",children:"12hr"}),e.jsx(Y,{label:"Time",value:t,onChange:l,timeFormat:"12"}),e.jsxs(n,{textStyle:"mono.xs",color:"text.subtlest",children:["Value: ",m(t)]})]}),e.jsxs(s,{gap:"8",alignItems:"flex-start",children:[e.jsx(n,{color:"text",children:"24hr"}),e.jsx(Y,{label:"Time",value:r,onChange:i,timeFormat:"24"}),e.jsxs(n,{textStyle:"mono.xs",color:"text.subtlest",children:["Value: ",m(r)]})]})]})}},h={name:"TimeRangePicker",render:function(){const[t,l]=o.useState(null),[r,i]=o.useState(null);return e.jsxs(u,{columns:2,gap:"56",children:[e.jsxs(s,{gap:"8",alignItems:"flex-start",children:[e.jsx(n,{color:"text",children:"12hr"}),e.jsx(b,{startLabel:"Start time",endLabel:"End time",value:t,onChange:l,timeFormat:"12"}),e.jsxs(n,{textStyle:"mono.xs",color:"text.subtlest",children:["Value: ",m(t==null?void 0:t.start)," – ",m(t==null?void 0:t.end)]})]}),e.jsxs(s,{gap:"8",alignItems:"flex-start",children:[e.jsx(n,{color:"text",children:"24hr"}),e.jsx(b,{startLabel:"Start time",endLabel:"End time",value:r,onChange:i,timeFormat:"24"}),e.jsxs(n,{textStyle:"mono.xs",color:"text.subtlest",children:["Value: ",m(r==null?void 0:r.start)," – ",m(r==null?void 0:r.end)]})]})]})}},D={name:"DateTimePicker",render:function(){const[t,l]=o.useState(null),[r,i]=o.useState(null);return e.jsxs(u,{columns:2,gap:"56",children:[e.jsxs(s,{gap:"8",alignItems:"flex-start",children:[e.jsx(n,{color:"text",children:"Format: YYYY-MM-DD, 12hr"}),e.jsx(P,{dateLabel:"Date",timeLabel:"Time",value:t,onChange:l,timeFormat:"12"}),e.jsxs(n,{textStyle:"mono.xs",color:"text.subtlest",children:["Selected: ",V(t)]})]}),e.jsxs(s,{gap:"8",alignItems:"flex-start",children:[e.jsx(n,{color:"text",children:"Format: MM/DD/YYYY, 24hr"}),e.jsx(P,{dateLabel:"Date",timeLabel:"Time",value:r,onChange:i,dateFormat:"MM/DD/YYYY",timeFormat:"24"}),e.jsxs(n,{textStyle:"mono.xs",color:"text.subtlest",children:["Selected: ",V(r)]})]})]})}},T={name:"DateTimeRangePicker",render:function(){const[t,l]=o.useState(null);return e.jsxs(s,{gap:"8",alignItems:"flex-start",width:"lg",children:[e.jsx(N,{value:t,onChange:l,timeFormat:"12"}),e.jsxs(n,{textStyle:"mono.xs",color:"text.subtlest",children:["Value: ",V(t==null?void 0:t.start)," – ",V(t==null?void 0:t.end)]})]})}};var R,j,v;x.parameters={...x.parameters,docs:{...(R=x.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'DatePicker',
  render: function DatePickerRender() {
    const [value, setValue] = useState<DateValue | null>(null);
    const [value2, setValue2] = useState<DateValue | null>(null);
    return <Grid columns={2} gap="56">
        <VStack gap="8" alignItems="flex-start">
          <Text color="text">Format: YYYY-MM-DD</Text>
          <DatePicker label="Date" value={value} onChange={setValue} />
          <Text textStyle="mono.xs" color="text.subtlest">
            Value: {formatDate(value)}
          </Text>
        </VStack>
        <VStack gap="8" alignItems="flex-start">
          <Text color="text">Format: MM/DD/YYYY</Text>
          <DatePicker dateFormat="MM/DD/YYYY" label="Date" value={value2} onChange={setValue2} />
          <Text textStyle="mono.xs" color="text.subtlest">
            Value: {formatDate(value2)}
          </Text>
        </VStack>
      </Grid>;
  }
}`,...(v=(j=x.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};var y,C,M;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'DatePicker: Clear action',
  render: function DatePickerClearActionRender() {
    const [value, setValue] = useState<DateValue | null>({
      year: 2026,
      month: 9,
      day: 21
    });
    return <VStack gap="8" alignItems="flex-start">
        <DatePicker label="Due date" value={value} onChange={setValue} />
        <Text textStyle="mono.xs" color="text.subtlest">
          Value: {formatDate(value)}
        </Text>
      </VStack>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const field = canvas.getByRole('group', {
      name: 'Due date'
    }).parentElement;
    if (!(field instanceof HTMLElement)) {
      throw new Error('DatePicker should render a field around its segments.');
    }
    const heightWithClearButton = field.getBoundingClientRect().height;
    await userEvent.click(canvas.getByRole('button', {
      name: 'Clear date'
    }));
    expect(canvas.getByText('Value: none')).toBeInTheDocument();
    expect(field.getBoundingClientRect().height).toBe(heightWithClearButton);
    expect(canvas.queryByRole('button', {
      name: 'Clear date'
    })).not.toBeInTheDocument();
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(M=(C=d.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};var F,I,L;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'DateRangePicker',
  render: function DateRangePickerRender() {
    const [value, setValue] = useState<DateRangeValue | null>(null);
    const [value2, setValue2] = useState<DateRangeValue | null>(null);
    return <Grid columns={2} gap="56">
        <VStack gap="8" alignItems="flex-start">
          <Text color="text">Format: YYYY-MM-DD</Text>
          <DateRangePicker startLabel="Start date" endLabel="End date" value={value} onChange={setValue} />
          <Text textStyle="mono.xs" color="text.subtlest">
            Value: {formatDate(value?.start)} – {formatDate(value?.end)}
          </Text>
        </VStack>
        <VStack gap="8" alignItems="flex-start">
          <Text color="text">Format: MM/DD/YYYY</Text>
          <DateRangePicker dateFormat="MM/DD/YYYY" startLabel="Start date" endLabel="End date" value={value2} onChange={setValue2} />
          <Text textStyle="mono.xs" color="text.subtlest">
            Value: {formatDate(value2?.start)} – {formatDate(value2?.end)}
          </Text>
        </VStack>
      </Grid>;
  }
}`,...(L=(I=g.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var B,E,w;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'TimePicker',
  render: function TimePickerRender() {
    const [value, setValue] = useState<TimeValue | null>(null);
    const [value2, setValue2] = useState<TimeValue | null>(null);
    return <Grid columns={2} gap="56">
        <VStack gap="8" alignItems="flex-start">
          <Text color="text">12hr</Text>
          <TimePicker label="Time" value={value} onChange={setValue} timeFormat="12" />
          <Text textStyle="mono.xs" color="text.subtlest">
            Value: {formatTime(value)}
          </Text>
        </VStack>
        <VStack gap="8" alignItems="flex-start">
          <Text color="text">24hr</Text>
          <TimePicker label="Time" value={value2} onChange={setValue2} timeFormat="24" />
          <Text textStyle="mono.xs" color="text.subtlest">
            Value: {formatTime(value2)}
          </Text>
        </VStack>
      </Grid>;
  }
}`,...(w=(E=p.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};var G,$,A;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'TimeRangePicker',
  render: function TimeRangePickerRender() {
    const [value, setValue] = useState<TimeRangeValue | null>(null);
    const [value2, setValue2] = useState<TimeRangeValue | null>(null);
    return <Grid columns={2} gap="56">
        <VStack gap="8" alignItems="flex-start">
          <Text color="text">12hr</Text>
          <TimeRangePicker startLabel="Start time" endLabel="End time" value={value} onChange={setValue} timeFormat="12" />
          <Text textStyle="mono.xs" color="text.subtlest">
            Value: {formatTime(value?.start)} – {formatTime(value?.end)}
          </Text>
        </VStack>
        <VStack gap="8" alignItems="flex-start">
          <Text color="text">24hr</Text>
          <TimeRangePicker startLabel="Start time" endLabel="End time" value={value2} onChange={setValue2} timeFormat="24" />
          <Text textStyle="mono.xs" color="text.subtlest">
            Value: {formatTime(value2?.start)} – {formatTime(value2?.end)}
          </Text>
        </VStack>
      </Grid>;
  }
}`,...(A=($=h.parameters)==null?void 0:$.docs)==null?void 0:A.source}}};var W,q,H;D.parameters={...D.parameters,docs:{...(W=D.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'DateTimePicker',
  render: function DateTimePickerRender() {
    const [value, setValue] = useState<DateTimeValue | null>(null);
    const [value2, setValue2] = useState<DateTimeValue | null>(null);
    return <Grid columns={2} gap="56">
        <VStack gap="8" alignItems="flex-start">
          <Text color="text">Format: YYYY-MM-DD, 12hr</Text>
          <DateTimePicker dateLabel="Date" timeLabel="Time" value={value} onChange={setValue} timeFormat="12" />
          <Text textStyle="mono.xs" color="text.subtlest">
            Selected: {formatDateTime(value)}
          </Text>
        </VStack>
        <VStack gap="8" alignItems="flex-start">
          <Text color="text">Format: MM/DD/YYYY, 24hr</Text>
          <DateTimePicker dateLabel="Date" timeLabel="Time" value={value2} onChange={setValue2} dateFormat="MM/DD/YYYY" timeFormat="24" />
          <Text textStyle="mono.xs" color="text.subtlest">
            Selected: {formatDateTime(value2)}
          </Text>
        </VStack>
      </Grid>;
  }
}`,...(H=(q=D.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var _,O,z;T.parameters={...T.parameters,docs:{...(_=T.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'DateTimeRangePicker',
  render: function DateTimeRangePickerRender() {
    const [value, setValue] = useState<DateTimeRangeValue | null>(null);
    return <VStack gap="8" alignItems="flex-start" width="lg">
        <DateTimeRangePicker value={value} onChange={setValue} timeFormat="12" />
        <Text textStyle="mono.xs" color="text.subtlest">
          Value: {formatDateTime(value?.start)} – {formatDateTime(value?.end)}
        </Text>
      </VStack>;
  }
}`,...(z=(O=T.parameters)==null?void 0:O.docs)==null?void 0:z.source}}};const ve=["Date","DateClearAction","DateRange","TimePickers","TimeRangePickers","DateTimePickers","DateTimeRangePickers"];export{x as Date,d as DateClearAction,g as DateRange,D as DateTimePickers,T as DateTimeRangePickers,p as TimePickers,h as TimeRangePickers,ve as __namedExportsOrder,je as default};
