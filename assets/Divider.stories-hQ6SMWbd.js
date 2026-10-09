import{j as e,B as w,T as t}from"./iframe-tdKZEmKy.js";import{C as y}from"./Card-BhanCbHP.js";import{D as r}from"./Divider-CLaksQ4n.js";import"./preload-helper-Bx88jSaX.js";const b={title:"Components/Divider",component:r,tags:["autodocs"],parameters:{layout:"centered"},args:{direction:"horizontal",weight:"thin"}},a={render:()=>e.jsx(w,{display:"grid",w:"md",children:e.jsx(r,{})})},n={render:()=>e.jsxs(w,{display:"grid",gap:"10",w:"md",children:[e.jsx(r,{weight:"thin"}),e.jsx(r,{weight:"medium"}),e.jsx(r,{weight:"thick"}),e.jsx(r,{weight:"thicker"})]}),parameters:{controls:{disable:!0}}},i={render:()=>e.jsxs(y,{p:"16",display:"flex",alignItems:"center",gap:"12",h:"96",children:[e.jsx(t,{children:"Left"}),e.jsx(r,{direction:"vertical"}),e.jsx(t,{children:"Right"})]}),parameters:{controls:{disable:!0}}},s={name:"Ex: Section Break in Card",render:()=>e.jsxs(y,{p:"16",display:"grid",gap:"12",maxW:"sm",children:[e.jsx(t,{fontWeight:"bold",children:"Account Summary"}),e.jsx(t,{children:"Current balance: $2,403.18"}),e.jsx(r,{}),e.jsx(t,{children:"Next invoice date: May 4, 2026"})]}),parameters:{controls:{disable:!0}}},B=["Default","Weights","Vertical","ExSectionBreak"];var o,d,c;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <Box display="grid" w="md">
      <Divider />
    </Box>
}`,...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var m,l,p;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(l=n.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var x,g,h;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(h=(g=i.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var u,j,v;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(v=(j=s.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};export{a as Default,s as ExSectionBreak,i as Vertical,n as Weights,B as __namedExportsOrder,b as default};
