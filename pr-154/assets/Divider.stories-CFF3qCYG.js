import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as v}from"./Box-7d6-wXl0.js";import{C as w}from"./Card-gKcZ_NAN.js";import{T as t}from"./Text-Cm9k3dA6.js";import{D as r}from"./Divider-DnnylyCd.js";import"./index-BKyFwriW.js";import"./_commonjsHelpers-CqkleIqs.js";const k={title:"Components/Divider",component:r,tags:["autodocs"],parameters:{layout:"centered"},args:{direction:"horizontal",weight:"thin"}},a={render:()=>e.jsx(v,{display:"grid",w:"md",children:e.jsx(r,{})})},i={render:()=>e.jsxs(v,{display:"grid",gap:"10",w:"md",children:[e.jsx(r,{weight:"thin"}),e.jsx(r,{weight:"medium"}),e.jsx(r,{weight:"thick"}),e.jsx(r,{weight:"thicker"})]}),parameters:{controls:{disable:!0}}},s={render:()=>e.jsxs(w,{p:"16",display:"flex",alignItems:"center",gap:"12",h:"96",children:[e.jsx(t,{children:"Left"}),e.jsx(r,{direction:"vertical"}),e.jsx(t,{children:"Right"})]}),parameters:{controls:{disable:!0}}},n={name:"Ex: Section Break in Card",render:()=>e.jsxs(w,{p:"16",display:"grid",gap:"12",maxW:"sm",children:[e.jsx(t,{fontWeight:"bold",children:"Account Summary"}),e.jsx(t,{children:"Current balance: $2,403.18"}),e.jsx(r,{}),e.jsx(t,{children:"Next invoice date: May 4, 2026"})]}),parameters:{controls:{disable:!0}}};var o,d,c;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <Box display="grid" w="md">
      <Divider />
    </Box>
}`,...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var m,p,l;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <Box display="grid" gap="10" w="md">
      <Divider weight="thin" />
      <Divider weight="medium" />
      <Divider weight="thick" />
      <Divider weight="thicker" />
    </Box>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(l=(p=i.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var x,g,h;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <Card p="16" display="flex" alignItems="center" gap="12" h="96">
      <Text>Left</Text>
      <Divider direction="vertical" />
      <Text>Right</Text>
    </Card>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(h=(g=s.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var u,j,f;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Ex: Section Break in Card',
  render: () => <Card p="16" display="grid" gap="12" maxW="sm">
      <Text fontWeight="bold">Account Summary</Text>
      <Text>Current balance: $2,403.18</Text>
      <Divider />
      <Text>Next invoice date: May 4, 2026</Text>
    </Card>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(f=(j=n.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};const E=["Default","Weights","Vertical","ExSectionBreak"];export{a as Default,n as ExSectionBreak,s as Vertical,i as Weights,E as __namedExportsOrder,k as default};
