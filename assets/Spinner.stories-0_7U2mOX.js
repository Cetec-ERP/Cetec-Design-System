import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as z}from"./dsComponent-D6ec2IT1.js";import{C as b}from"./Card-BBXw6pee.js";import{T as f}from"./Text-DV_MEMni.js";import{S as r}from"./Spinner-DHR4yZCu.js";import"./index-BKyFwriW.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Tooltip-bRuinN4J.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";import"./Icon-12cJPaFt.js";const R={title:"Components/Spinner",component:r,tags:["autodocs"],parameters:{layout:"centered"},args:{size:"lg"}},s={},a={render:()=>e.jsxs(z,{display:"flex",gap:"16",alignItems:"center",children:[e.jsx(r,{size:"sm"}),e.jsx(r,{size:"md"}),e.jsx(r,{size:"lg"}),e.jsx(r,{size:"xl"})]}),parameters:{controls:{disable:!0}}},n={name:"Ex: Centered Overlay",render:()=>e.jsxs(b,{position:"relative",p:"16",w:"md",h:"120",overflow:"hidden",children:[e.jsx(f,{children:"Saving invoice updates..."}),e.jsx(r,{centered:!0,size:"lg"})]}),parameters:{controls:{disable:!0}}},t={name:"Ex: Inverse Spinner",render:()=>e.jsx(z,{p:"16",borderRadius:"8",bg:"bg.neutral.boldest",children:e.jsx(r,{size:"lg",inverse:!0})}),parameters:{controls:{disable:!0}}};var o,i,p;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:"{}",...(p=(i=s.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var d,m,l;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <Box display="flex" gap="16" alignItems="center">
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
      <Spinner size="xl" />
    </Box>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(l=(m=a.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var c,u,x;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Ex: Centered Overlay',
  render: () => <Card position="relative" p="16" w="md" h="120" overflow="hidden">
      <Text>Saving invoice updates...</Text>
      <Spinner centered size="lg" />
    </Card>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(x=(u=n.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var g,S,v;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Ex: Inverse Spinner',
  render: () => <Box p="16" borderRadius="8" bg="bg.neutral.boldest">
      <Spinner size="lg" inverse />
    </Box>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(v=(S=t.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};const k=["Default","Sizes","ExCenteredOverlay","ExInverseOnDarkSurface"];export{s as Default,n as ExCenteredOverlay,t as ExInverseOnDarkSurface,a as Sizes,k as __namedExportsOrder,R as default};
