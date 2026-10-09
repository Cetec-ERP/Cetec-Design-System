import{j as e,B as z,T as b}from"./iframe-DMd1B6rC.js";import{C as f}from"./Card-DYcEXgGT.js";import{S as r}from"./Spinner-C0teSUmD.js";import"./preload-helper--E47Ns1F.js";const y={title:"Components/Spinner",component:r,tags:["autodocs"],parameters:{layout:"centered"},args:{size:"lg"}},s={},n={render:()=>e.jsxs(z,{display:"flex",gap:"16",alignItems:"center",children:[e.jsx(r,{size:"sm"}),e.jsx(r,{size:"md"}),e.jsx(r,{size:"lg"}),e.jsx(r,{size:"xl"})]}),parameters:{controls:{disable:!0}}},a={name:"Ex: Centered Overlay",render:()=>e.jsxs(f,{position:"relative",p:"16",w:"md",h:"120",overflow:"hidden",children:[e.jsx(b,{children:"Saving invoice updates..."}),e.jsx(r,{centered:!0,size:"lg"})]}),parameters:{controls:{disable:!0}}},t={name:"Ex: Inverse Spinner",render:()=>e.jsx(z,{p:"16",borderRadius:"8",bg:"bg.neutral.boldest",children:e.jsx(r,{size:"lg",inverse:!0})}),parameters:{controls:{disable:!0}}},O=["Default","Sizes","ExCenteredOverlay","ExInverseOnDarkSurface"];var o,i,d;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:"{}",...(d=(i=s.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var p,l,c;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(c=(l=n.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var m,u,x;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(x=(u=a.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var g,S,v;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Ex: Inverse Spinner',
  render: () => <Box p="16" borderRadius="8" bg="bg.neutral.boldest">
      <Spinner size="lg" inverse />
    </Box>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(v=(S=t.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};export{s as Default,a as ExCenteredOverlay,t as ExInverseOnDarkSurface,n as Sizes,O as __namedExportsOrder,y as default};
