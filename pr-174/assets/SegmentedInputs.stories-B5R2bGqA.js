import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as S}from"./index-BKyFwriW.js";import{V as i}from"./Box-C4uJrM56.js";import{T as y}from"./Text-MsVbvEyI.js";import{S as m,a as _,b as x}from"./SegmentedTime-Y94dzBTy.js";import"./_commonjsHelpers-CqkleIqs.js";import"./FieldContext-D6URyQos.js";const z={title:"Components/SegmentedInputs",component:m,tags:["autodocs"],parameters:{layout:"centered"}},F=s=>JSON.stringify(s),a=(s,t,r,o,l,P)=>({type:"segment",kind:"numeric",id:s,label:t,placeholder:r,value:o,digits:l,min:0,max:P}),n=(s,t,r="normal")=>({type:"separator",id:s,content:t,gap:r}),u={name:"SegmentedDate",render:function(){const[t,r]=S.useState({year:2026,month:7,day:17});return e.jsxs(i,{gap:"8",alignItems:"flex-start",children:[e.jsx(_,{value:t,onChange:r}),e.jsx(_,{format:"YYYY-MM-DD",value:t,onChange:r})]})},parameters:{controls:{disable:!0}}},p={name:"SegmentedTime",render:function(){const[t,r]=S.useState({hour:13,minute:30});return e.jsxs(i,{gap:"8",alignItems:"flex-start",children:[e.jsx(x,{value:t,onChange:r}),e.jsx(x,{timeFormat:"24",value:t,onChange:r})]})},parameters:{controls:{disable:!0}}},d={render:function(){const[t,r]=S.useState({prefix:null,middle:null,suffix:null}),o=[a("prefix","Prefix","___",t.prefix,3,999),n("prefix-middle","-","loose"),a("middle","Middle","___",t.middle,3,999),n("middle-suffix","-","loose"),a("suffix","Suffix","____",t.suffix,4,9999)];return e.jsxs(i,{gap:"4",alignItems:"flex-start",children:[e.jsx(m,{label:"Custom segmented identifier",items:o,onChange:({values:l})=>r(l)}),e.jsx(y,{textStyle:"mono.xs",color:"text.subtlest",children:F(t)})]})},parameters:{controls:{disable:!0}}},c={render:function(){return e.jsxs(i,{gap:"8",alignItems:"flex-start",children:[e.jsx(_,{separators:{gap:"tight"}}),e.jsx(_,{separators:{gap:"loose"}}),e.jsx(x,{separators:{time:{gap:"tight"},meridiem:{gap:"loose"}}})]})},parameters:{controls:{disable:!0}}},g={render:function(){const t=[a("area","Area code","___",null,3,999),n("area-prefix","-","loose"),a("prefix","Prefix","___",null,3,999),n("prefix-line","-","loose"),a("line","Line number","____",null,4,9999)],r=[a("card-1","Card group 1","____",null,4,9999),n("card-sep-1"," ","loose"),a("card-2","Card group 2","____",null,4,9999),n("card-sep-2"," ","loose"),a("card-3","Card group 3","____",null,4,9999),n("card-sep-3"," ","loose"),a("card-4","Card group 4","____",null,4,9999)],o=[a("mail-a","Mailbox prefix","____",null,4,9999),n("mail-at","@","normal"),a("mail-b","Mailbox domain","______",null,6,999999),n("mail-dot",".","normal"),a("mail-c","Mailbox suffix","___",null,3,999)],l=[a("prc-a","PRC part prefix","___",null,3,999),n("prc-sep"," ","loose"),a("prc-b","PRC part suffix","___",null,3,999)];return e.jsxs(i,{gap:"8",alignItems:"flex-start",children:[e.jsx(m,{label:"Phone number",items:t}),e.jsx(m,{label:"Credit card",items:r}),e.jsx(m,{label:"Email-like identifier",items:o}),e.jsx(m,{label:"PRC part",items:l})]})}};var f,C,I;u.parameters={...u.parameters,docs:{...(f=u.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'SegmentedDate',
  render: function DateRender() {
    const [date, setDate] = useState<DateValue | null>({
      year: 2026,
      month: 7,
      day: 17
    });
    return <VStack gap="8" alignItems="flex-start">
        <SegmentedDate value={date} onChange={setDate} />
        <SegmentedDate format="YYYY-MM-DD" value={date} onChange={setDate} />
      </VStack>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(I=(C=u.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var b,h,k;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'SegmentedTime',
  render: function TimeRender() {
    const [time, setTime] = useState<TimeValue | null>({
      hour: 13,
      minute: 30
    });
    return <VStack gap="8" alignItems="flex-start">
        <SegmentedTime value={time} onChange={setTime} />
        <SegmentedTime timeFormat="24" value={time} onChange={setTime} />
      </VStack>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(k=(h=p.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var V,j,D;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: function CustomCompositionRender() {
    const [values, setValues] = useState<SegmentedInputValueMap>({
      prefix: null,
      middle: null,
      suffix: null
    });
    const items: SegmentedInputItem[] = [getNumericSegment('prefix', 'Prefix', '___', values.prefix as number | null, 3, 999), makeSeparator('prefix-middle', '-', 'loose'), getNumericSegment('middle', 'Middle', '___', values.middle as number | null, 3, 999), makeSeparator('middle-suffix', '-', 'loose'), getNumericSegment('suffix', 'Suffix', '____', values.suffix as number | null, 4, 9999)];
    return <VStack gap="4" alignItems="flex-start">
        <SegmentedInput label="Custom segmented identifier" items={items} onChange={({
        values: nextValues
      }) => setValues(nextValues)} />
        <Text textStyle="mono.xs" color="text.subtlest">
          {formatValue(values)}
        </Text>
      </VStack>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(D=(j=d.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var T,N,R;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: function SeparatorSpacingRender() {
    return <VStack gap="8" alignItems="flex-start">
        <SegmentedDate separators={{
        gap: 'tight'
      }} />
        <SegmentedDate separators={{
        gap: 'loose'
      }} />
        <SegmentedTime separators={{
        time: {
          gap: 'tight'
        },
        meridiem: {
          gap: 'loose'
        }
      }} />
      </VStack>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(R=(N=c.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var v,E,M;g.parameters={...g.parameters,docs:{...(v=g.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: function FutureExtensionExamplesRender() {
    const phoneItems: SegmentedInputItem[] = [getNumericSegment('area', 'Area code', '___', null, 3, 999), makeSeparator('area-prefix', '-', 'loose'), getNumericSegment('prefix', 'Prefix', '___', null, 3, 999), makeSeparator('prefix-line', '-', 'loose'), getNumericSegment('line', 'Line number', '____', null, 4, 9999)];
    const creditCardItems: SegmentedInputItem[] = [getNumericSegment('card-1', 'Card group 1', '____', null, 4, 9999), makeSeparator('card-sep-1', ' ', 'loose'), getNumericSegment('card-2', 'Card group 2', '____', null, 4, 9999), makeSeparator('card-sep-2', ' ', 'loose'), getNumericSegment('card-3', 'Card group 3', '____', null, 4, 9999), makeSeparator('card-sep-3', ' ', 'loose'), getNumericSegment('card-4', 'Card group 4', '____', null, 4, 9999)];
    const emailLikeItems: SegmentedInputItem[] = [getNumericSegment('mail-a', 'Mailbox prefix', '____', null, 4, 9999), makeSeparator('mail-at', '@', 'normal'), getNumericSegment('mail-b', 'Mailbox domain', '______', null, 6, 999999), makeSeparator('mail-dot', '.', 'normal'), getNumericSegment('mail-c', 'Mailbox suffix', '___', null, 3, 999)];
    const prcItems: SegmentedInputItem[] = [getNumericSegment('prc-a', 'PRC part prefix', '___', null, 3, 999), makeSeparator('prc-sep', ' ', 'loose'), getNumericSegment('prc-b', 'PRC part suffix', '___', null, 3, 999)];
    return <VStack gap="8" alignItems="flex-start">
        <SegmentedInput label="Phone number" items={phoneItems} />
        <SegmentedInput label="Credit card" items={creditCardItems} />
        <SegmentedInput label="Email-like identifier" items={emailLikeItems} />
        <SegmentedInput label="PRC part" items={prcItems} />
      </VStack>;
  }
}`,...(M=(E=g.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};const B=["DateFormats","TimeFormats","CustomComposition","SeparatorSpacing","FutureExtensionExamples"];export{d as CustomComposition,u as DateFormats,g as FutureExtensionExamples,c as SeparatorSpacing,p as TimeFormats,B as __namedExportsOrder,z as default};
