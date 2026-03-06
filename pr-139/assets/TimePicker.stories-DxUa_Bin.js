import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as A}from"./index-BKyFwriW.js";import{B as u}from"./Box-B-dS-qo0.js";import{F as G}from"./FormField-CuT4YOA_.js";import{T as O}from"./Text-BlqN2xhk.js";import{T as r}from"./TimePicker-BFtvsO78.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Icon-Dq3Qi2uA.js";import"./Label-C4IxB5qt.js";import"./Tooltip-DAdXVz-o.js";import"./floating-ui.react-BYVwYRsa.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";import"./SubMenu-DbZ3bp1K.js";import"./Checkbox-C1lhN8Vf.js";import"./Divider-kYvIQ_cX.js";import"./Toggle-by_dp2xY.js";const me={title:"Components/TimePicker",component:r,parameters:{layout:"centered"},tags:["autodocs"]},H=()=>{const[l,q]=A.useState(null),_=d=>{const $=String(d.hour).padStart(2,"0"),R=String(d.minute).padStart(2,"0");return`${$}:${R}`};return e.jsxs(u,{display:"flex",flexDirection:"column",gap:"16",width:"224",children:[e.jsx(r,{hourCycle:"12",value:l,onChange:q}),e.jsxs(O,{size:"14",color:"text.subtle",children:["Selected (24h): ",l?_(l):"none"]})]})},t={name:"Default (12h)",render:()=>e.jsx(r,{hourCycle:"12"})},o={name:"Default (24h)",render:()=>e.jsx(r,{hourCycle:"24"})},a={name:"With Value",render:()=>e.jsx(r,{hourCycle:"12",value:{hour:14,minute:30}})},s={name:"Minute Step: 15",render:()=>e.jsxs(u,{display:"flex",flexDirection:"column",gap:"8",children:[e.jsx(O,{size:"14",color:"text.subtle",children:"Only 0, 15, 30, 45 available"}),e.jsx(r,{hourCycle:"12",minuteStep:15})]})},i={name:"Error State",render:()=>e.jsx(r,{error:!0})},n={render:()=>e.jsx(r,{disabled:!0,value:{hour:9,minute:0}})},m={name:"In FormField",render:()=>e.jsx(u,{width:"224",children:e.jsx(G,{label:"Meeting time",labelFor:"meeting-time",required:!0,children:e.jsx(r,{id:"meeting-time",hourCycle:"12"})})})},c={name:"Ex: Controlled",render:()=>e.jsx(H,{})};var p,x,h;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Default (12h)',
  render: () => <TimePicker hourCycle="12" />
}`,...(h=(x=t.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var S,f,g;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Default (24h)',
  render: () => <TimePicker hourCycle="24" />
}`,...(g=(f=o.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var C,j,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'With Value',
  render: () =>
  // 14:30 = 2:30 PM
  <TimePicker hourCycle="12" value={{
    hour: 14,
    minute: 30
  }} />
}`,...(y=(j=a.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var F,T,b;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Minute Step: 15',
  render: () => <Box display="flex" flexDirection="column" gap="8">
      <Text size="14" color="text.subtle">
        Only 0, 15, 30, 45 available
      </Text>
      <TimePicker hourCycle="12" minuteStep={15} />
    </Box>
}`,...(b=(T=s.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};var D,E,P;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Error State',
  render: () => <TimePicker error />
}`,...(P=(E=i.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};var k,v,M;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <TimePicker disabled value={{
    hour: 9,
    minute: 0
  }} />
}`,...(M=(v=n.parameters)==null?void 0:v.docs)==null?void 0:M.source}}};var B,I,V;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'In FormField',
  render: () => <Box width="224">
      <FormField label="Meeting time" labelFor="meeting-time" required>
        <TimePicker id="meeting-time" hourCycle="12" />
      </FormField>
    </Box>
}`,...(V=(I=m.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};var W,w,z;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Ex: Controlled',
  render: () => <ControlledTimePickerExample />
}`,...(z=(w=c.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};const ce=["Default12h","Default24h","WithValue","MinuteStep15","ErrorState","Disabled","InFormField","ExControlled"];export{t as Default12h,o as Default24h,n as Disabled,i as ErrorState,c as ExControlled,m as InFormField,s as MinuteStep15,a as WithValue,ce as __namedExportsOrder,me as default};
