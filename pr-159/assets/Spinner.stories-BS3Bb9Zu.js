import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as z}from"./Box-DON8OdPK.js";import{C as b}from"./Card-Djc-wNfS.js";import{T as f}from"./Text-BxMUKbtC.js";import{S as r}from"./Spinner-VZexnvVV.js";import"./index-BKyFwriW.js";import"./_commonjsHelpers-CqkleIqs.js";const I={title:"Components/Spinner",component:r,tags:["autodocs"],parameters:{layout:"centered"},args:{size:"md"}},s={},a={render:()=>e.jsxs(z,{display:"flex",gap:"16",alignItems:"center",children:[e.jsx(r,{size:"xs"}),e.jsx(r,{size:"sm"}),e.jsx(r,{size:"md"}),e.jsx(r,{size:"lg"})]}),parameters:{controls:{disable:!0}}},n={name:"Ex: Centered Overlay",render:()=>e.jsxs(b,{position:"relative",p:"16",w:"sm",h:"120",overflow:"hidden",children:[e.jsx(f,{children:"Saving invoice updates..."}),e.jsx(r,{centered:!0,size:"md"})]}),parameters:{controls:{disable:!0}}},t={name:"Ex: Inverse Spinner",render:()=>e.jsx(z,{p:"16",borderRadius:"8",bg:"bg.neutral.boldest",children:e.jsx(r,{size:"md",inverse:!0})}),parameters:{controls:{disable:!0}}};var o,i,d;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:"{}",...(d=(i=s.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var m,p,c;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <Box display="flex" gap="16" alignItems="center">
      <Spinner size="xs" />
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
    </Box>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(c=(p=a.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var l,u,x;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'Ex: Centered Overlay',
  render: () => <Card position="relative" p="16" w="sm" h="120" overflow="hidden">
      <Text>Saving invoice updates...</Text>
      <Spinner centered size="md" />
    </Card>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(x=(u=n.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var S,g,v;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Ex: Inverse Spinner',
  render: () => <Box p="16" borderRadius="8" bg="bg.neutral.boldest">
      <Spinner size="md" inverse />
    </Box>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(v=(g=t.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};const w=["Default","Sizes","ExCenteredOverlay","ExInverseOnDarkSurface"];export{s as Default,n as ExCenteredOverlay,t as ExInverseOnDarkSurface,a as Sizes,w as __namedExportsOrder,I as default};
