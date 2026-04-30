import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as S}from"./index-BKyFwriW.js";import{B as c,H as J}from"./Box-BV3UiX_0.js";import{F as K}from"./FormField-B2xdQbyO.js";import{T as p}from"./Text-CaLd5y6v.js";import{T as r}from"./TimePicker-BApCLh1l.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Icon-B7squOvl.js";import"./IconConfig-B5QOCK9V.js";import"./Label-Bpfbgc4x.js";import"./Tooltip-Q0L3A7IH.js";import"./floating-CMrvfkt4.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";import"./ListItem-CPjOmSmR.js";import"./Divider-BpaRy6Xf.js";import"./Checkbox-DAJZm7_j.js";import"./Toggle-Cg1zN6hm.js";const de={title:"Components/TimePicker",component:r,parameters:{layout:"centered"},tags:["autodocs"]},L=()=>{const[u,$]=S.useState(null),[d,R]=S.useState(null),x=h=>{const A=String(h.hour).padStart(2,"0"),G=String(h.minute).padStart(2,"0");return`${A}:${G}`};return e.jsxs(J,{gap:"32",children:[e.jsxs(c,{display:"flex",flexDirection:"column",gap:"4",width:"184",children:[e.jsx(r,{hourCycle:"12",value:u,onChange:$}),e.jsxs(p,{size:"14",color:"text.subtle",children:["Selected (12h): ",u?x(u):"none"]})]}),e.jsxs(c,{display:"flex",flexDirection:"column",gap:"4",width:"184",children:[e.jsx(r,{hourCycle:"24",value:d,onChange:R}),e.jsxs(p,{size:"14",color:"text.subtle",children:["Selected (24h): ",d?x(d):"none"]})]})]})},t={name:"Default (12h)",render:()=>e.jsx(r,{hourCycle:"12"})},o={name:"Default (24h)",render:()=>e.jsx(r,{hourCycle:"24"})},a={name:"With Value",render:()=>e.jsx(r,{hourCycle:"12",value:{hour:14,minute:30}})},s={name:"Minute Step: 15",render:()=>e.jsxs(c,{display:"flex",flexDirection:"column",gap:"8",children:[e.jsx(p,{size:"14",color:"text.subtle",children:"Only 0, 15, 30, 45 available"}),e.jsx(r,{hourCycle:"12",minuteStep:15})]})},i={name:"Error State",render:()=>e.jsx(r,{error:!0})},n={render:()=>e.jsx(r,{disabled:!0,value:{hour:9,minute:0}})},l={name:"In FormField",render:()=>e.jsx(c,{width:"224",children:e.jsx(K,{label:"Meeting time",labelFor:"meeting-time",required:!0,children:e.jsx(r,{id:"meeting-time",hourCycle:"12"})})})},m={name:"Ex: Controlled",render:()=>e.jsx(L,{})};var f,g,j;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Default (12h)',
  render: () => <TimePicker hourCycle="12" />
}`,...(j=(g=t.parameters)==null?void 0:g.docs)==null?void 0:j.source}}};var C,y,F;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Default (24h)',
  render: () => <TimePicker hourCycle="24" />
}`,...(F=(y=o.parameters)==null?void 0:y.docs)==null?void 0:F.source}}};var T,b,D;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'With Value',
  render: () =>
  // 14:30 = 2:30 PM
  <TimePicker hourCycle="12" value={{
    hour: 14,
    minute: 30
  }} />
}`,...(D=(b=a.parameters)==null?void 0:b.docs)==null?void 0:D.source}}};var E,k,P;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Minute Step: 15',
  render: () => <Box display="flex" flexDirection="column" gap="8">
      <Text size="14" color="text.subtle">
        Only 0, 15, 30, 45 available
      </Text>
      <TimePicker hourCycle="12" minuteStep={15} />
    </Box>
}`,...(P=(k=s.parameters)==null?void 0:k.docs)==null?void 0:P.source}}};var v,M,B;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Error State',
  render: () => <TimePicker error />
}`,...(B=(M=i.parameters)==null?void 0:M.docs)==null?void 0:B.source}}};var V,w,z;n.parameters={...n.parameters,docs:{...(V=n.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <TimePicker disabled value={{
    hour: 9,
    minute: 0
  }} />
}`,...(z=(w=n.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var I,W,O;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'In FormField',
  render: () => <Box width="224">
      <FormField label="Meeting time" labelFor="meeting-time" required>
        <TimePicker id="meeting-time" hourCycle="12" />
      </FormField>
    </Box>
}`,...(O=(W=l.parameters)==null?void 0:W.docs)==null?void 0:O.source}}};var q,H,_;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'Ex: Controlled',
  render: () => <ControlledTimePickerExample />
}`,...(_=(H=m.parameters)==null?void 0:H.docs)==null?void 0:_.source}}};const pe=["Default12h","Default24h","WithValue","MinuteStep15","ErrorState","Disabled","InFormField","ExControlled"];export{t as Default12h,o as Default24h,n as Disabled,i as ErrorState,m as ExControlled,l as InFormField,s as MinuteStep15,a as WithValue,pe as __namedExportsOrder,de as default};
