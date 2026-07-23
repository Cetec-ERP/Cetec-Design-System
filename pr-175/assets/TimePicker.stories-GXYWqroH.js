import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as S}from"./index-BKyFwriW.js";import{B as u,H as Q}from"./Box-D8syd76n.js";import{F as U}from"./FormField-B0u84Tqi.js";import{T as h}from"./Text-OMCUSOol.js";import{T as r}from"./TimePicker-GIYbOXAP.js";import"./_commonjsHelpers-CqkleIqs.js";import"./FieldContext-D6URyQos.js";import"./Icon-CLSA3e9P.js";import"./IconConfig-CuyDtWEJ.js";import"./Label-Bb6hdk3t.js";import"./Tooltip-CwX3MQ24.js";import"./floating-CMrvfkt4.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";import"./ListItem-Cn5IbNKt.js";import"./Divider-KBSxUyGs.js";import"./Checkbox-CiUwpcUt.js";import"./Toggle-CUhhVt_e.js";const Se={title:"Components/TimePicker",component:r,parameters:{layout:"centered"},tags:["autodocs"]},X=()=>{const[d,J]=S.useState(null),[p,K]=S.useState(null),x=f=>{const L=String(f.hour).padStart(2,"0"),N=String(f.minute).padStart(2,"0");return`${L}:${N}`};return e.jsxs(Q,{gap:"32",children:[e.jsxs(u,{display:"flex",flexDirection:"column",gap:"4",width:"184",children:[e.jsx(r,{hourCycle:"12",value:d,onChange:J}),e.jsxs(h,{size:"14",color:"text.subtle",children:["Selected (12h): ",d?x(d):"none"]})]}),e.jsxs(u,{display:"flex",flexDirection:"column",gap:"4",width:"184",children:[e.jsx(r,{hourCycle:"24",value:p,onChange:K}),e.jsxs(h,{size:"14",color:"text.subtle",children:["Selected (24h): ",p?x(p):"none"]})]})]})},t={name:"Default (12h)",render:()=>e.jsx(r,{hourCycle:"12"})},o={name:"Default (24h)",render:()=>e.jsx(r,{hourCycle:"24"})},a={name:"With Value",render:()=>e.jsx(r,{hourCycle:"12",value:{hour:14,minute:30}})},s={name:"With Default Value",render:()=>e.jsx(r,{hourCycle:"12",defaultValue:{hour:14,minute:30}})},i={name:"Minute Step: 15",render:()=>e.jsxs(u,{display:"flex",flexDirection:"column",gap:"8",children:[e.jsx(h,{size:"14",color:"text.subtle",children:"Only 0, 15, 30, 45 available"}),e.jsx(r,{hourCycle:"12",minuteStep:15})]})},n={name:"Error State",render:()=>e.jsx(r,{error:!0})},l={render:()=>e.jsx(r,{disabled:!0,value:{hour:9,minute:0}})},m={name:"In FormField",render:()=>e.jsx(u,{width:"224",children:e.jsx(U,{label:"Meeting time",labelFor:"meeting-time",required:!0,children:e.jsx(r,{id:"meeting-time",hourCycle:"12"})})})},c={name:"Ex: Controlled",render:()=>e.jsx(X,{})};var g,C,j;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Default (12h)',
  render: () => <TimePicker hourCycle="12" />
}`,...(j=(C=t.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var y,D,T;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Default (24h)',
  render: () => <TimePicker hourCycle="24" />
}`,...(T=(D=o.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var F,b,k;a.parameters={...a.parameters,docs:{...(F=a.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'With Value',
  render: () =>
  // 14:30 = 2:30 PM
  <TimePicker hourCycle="12" value={{
    hour: 14,
    minute: 30
  }} />
}`,...(k=(b=a.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var E,P,V;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'With Default Value',
  render: () => <TimePicker hourCycle="12" defaultValue={{
    hour: 14,
    minute: 30
  }} />
}`,...(V=(P=s.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};var v,W,M;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Minute Step: 15',
  render: () => <Box display="flex" flexDirection="column" gap="8">
      <Text size="14" color="text.subtle">
        Only 0, 15, 30, 45 available
      </Text>
      <TimePicker hourCycle="12" minuteStep={15} />
    </Box>
}`,...(M=(W=i.parameters)==null?void 0:W.docs)==null?void 0:M.source}}};var B,w,z;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Error State',
  render: () => <TimePicker error />
}`,...(z=(w=n.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var I,O,q;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <TimePicker disabled value={{
    hour: 9,
    minute: 0
  }} />
}`,...(q=(O=l.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};var H,_,$;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'In FormField',
  render: () => <Box width="224">
      <FormField label="Meeting time" labelFor="meeting-time" required>
        <TimePicker id="meeting-time" hourCycle="12" />
      </FormField>
    </Box>
}`,...($=(_=m.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var R,A,G;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Ex: Controlled',
  render: () => <ControlledTimePickerExample />
}`,...(G=(A=c.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};const ge=["Default12h","Default24h","WithValue","WithDefaultValue","MinuteStep15","ErrorState","Disabled","InFormField","ExControlled"];export{t as Default12h,o as Default24h,l as Disabled,n as ErrorState,c as ExControlled,m as InFormField,i as MinuteStep15,s as WithDefaultValue,a as WithValue,ge as __namedExportsOrder,Se as default};
