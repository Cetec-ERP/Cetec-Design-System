import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{C as y}from"./Card-CRDN5tgc.js";import{L as j}from"./Link-BA3Z9of5.js";import{T as o}from"./Text-DorGSoIa.js";import{B as r}from"./Box-7HecziK7.js";import"./Icon-Bj4A0bIZ.js";import"./index-BKyFwriW.js";import"./_commonjsHelpers-CqkleIqs.js";const L={title:"Components/Box",component:r,tags:["autodocs"],parameters:{layout:"centered"}},t={render:()=>e.jsx(r,{p:"16",borderWidth:"1",borderColor:"border",borderRadius:"8",children:"Basic Box container"})},s={name:"Ex: Polymorphic as Prop",render:()=>e.jsxs(r,{display:"grid",gap:"10",maxW:"prose",children:[e.jsx(r,{as:"section",p:"12",bg:"bg.neutral.subtle",borderRadius:"8",children:"Section with Box"}),e.jsx(r,{as:"button",type:"button",p:"12",borderWidth:"1",borderColor:"border",borderRadius:"8",children:"Button rendered with Box"}),e.jsx(r,{as:"a",href:"#",color:"link",textDecoration:"underline",children:"Link rendered with Box"})]}),parameters:{controls:{disable:!0}}},a={name:"Ex: Layout Composition",render:()=>e.jsxs(y,{p:"16",display:"grid",gap:"8",maxW:"sm",children:[e.jsx(o,{as:"strong",children:"Invoice Summary"}),e.jsxs(r,{display:"flex",justifyContent:"space-between",children:[e.jsx(o,{children:"Subtotal"}),e.jsx(o,{children:"$120.00"})]}),e.jsxs(r,{display:"flex",justifyContent:"space-between",children:[e.jsx(o,{children:"Tax"}),e.jsx(o,{children:"$9.60"})]}),e.jsxs(r,{display:"flex",justifyContent:"space-between",fontWeight:"bold",children:[e.jsx(o,{children:"Total"}),e.jsx(o,{children:"$129.60"})]})]}),parameters:{controls:{disable:!0}}},n={name:"Ex: Pattern Docs Reference",render:()=>e.jsxs(r,{maxW:"prose",display:"grid",gap:"8",children:[e.jsx(o,{children:"Use Box for custom structure and composition, then reach for Panda Patterns for repeatable layout helpers."}),e.jsx(j,{href:"/?path=/docs/docs-panda-patterns--documentation",children:"Open Panda Patterns docs"})]}),parameters:{controls:{disable:!0}}};var d,i,c;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <Box p="16" borderWidth="1" borderColor="border" borderRadius="8">
      Basic Box container
    </Box>
}`,...(c=(i=t.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var p,x,l;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Ex: Polymorphic as Prop',
  render: () => <Box display="grid" gap="10" maxW="prose">
      <Box as="section" p="12" bg="bg.neutral.subtle" borderRadius="8">
        Section with Box
      </Box>
      <Box as="button" type="button" p="12" borderWidth="1" borderColor="border" borderRadius="8">
        Button rendered with Box
      </Box>
      <Box as="a" href="#" color="link" textDecoration="underline">
        Link rendered with Box
      </Box>
    </Box>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(l=(x=s.parameters)==null?void 0:x.docs)==null?void 0:l.source}}};var m,u,h;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Ex: Layout Composition',
  render: () => <Card p="16" display="grid" gap="8" maxW="sm">
      <Text as="strong">Invoice Summary</Text>
      <Box display="flex" justifyContent="space-between">
        <Text>Subtotal</Text>
        <Text>$120.00</Text>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Text>Tax</Text>
        <Text>$9.60</Text>
      </Box>
      <Box display="flex" justifyContent="space-between" fontWeight="bold">
        <Text>Total</Text>
        <Text>$129.60</Text>
      </Box>
    </Card>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(h=(u=a.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var b,f,B;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Ex: Pattern Docs Reference',
  render: () => <Box maxW="prose" display="grid" gap="8">
      <Text>
        Use Box for custom structure and composition, then reach for Panda
        Patterns for repeatable layout helpers.
      </Text>
      <Link href="/?path=/docs/docs-panda-patterns--documentation">
        Open Panda Patterns docs
      </Link>
    </Box>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(B=(f=n.parameters)==null?void 0:f.docs)==null?void 0:B.source}}};const S=["Default","ExPolymorphicAs","ExLayoutComposition","ExPatternsReference"];export{t as Default,a as ExLayoutComposition,n as ExPatternsReference,s as ExPolymorphicAs,S as __namedExportsOrder,L as default};
