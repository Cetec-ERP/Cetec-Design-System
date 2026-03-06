import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as l}from"./Box-7HecziK7.js";import{T as o}from"./Text-DorGSoIa.js";import{H as r}from"./Heading-CvLa88Hx.js";import"./index-BKyFwriW.js";import"./_commonjsHelpers-CqkleIqs.js";const T={title:"Components/Heading",component:r,tags:["autodocs"],parameters:{layout:"centered"},args:{level:"h2",children:"Quarterly Revenue"}},a={},n={render:()=>e.jsxs(l,{display:"grid",gap:"8",maxW:"prose",children:[e.jsx(r,{level:"h1",children:"Heading 1"}),e.jsx(r,{level:"h2",children:"Heading 2"}),e.jsx(r,{level:"h3",children:"Heading 3"}),e.jsx(r,{level:"h4",children:"Heading 4"})]}),parameters:{controls:{disable:!0}}},s={name:"Ex: Content Hierarchy",render:()=>e.jsxs(l,{display:"grid",gap:"10",maxW:"prose",children:[e.jsx(r,{level:"h2",children:"Billing Settings"}),e.jsx(o,{children:"Manage your payment methods and invoice preferences."}),e.jsx(r,{level:"h3",children:"Default Payment Method"}),e.jsx(o,{children:"Visa ending in 0091 is used for recurring charges."}),e.jsx(r,{level:"h3",children:"Invoice Delivery"}),e.jsx(o,{children:"Invoices are emailed to accounting@company.com."})]}),parameters:{controls:{disable:!0}}},i={name:"Ex: All Caps Variant",render:()=>e.jsxs(l,{display:"grid",gap:"8",maxW:"prose",children:[e.jsx(r,{level:"h4",allCaps:!0,children:"Section label"}),e.jsx(o,{children:"Use all caps sparingly for short section labels, not for long headings."})]}),parameters:{controls:{disable:!0}}};var t,d,c;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:"{}",...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var p,g,m;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Box display="grid" gap="8" maxW="prose">
      <Heading level="h1">Heading 1</Heading>
      <Heading level="h2">Heading 2</Heading>
      <Heading level="h3">Heading 3</Heading>
      <Heading level="h4">Heading 4</Heading>
    </Box>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(m=(g=n.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var x,h,u;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Ex: Content Hierarchy',
  render: () => <Box display="grid" gap="10" maxW="prose">
      <Heading level="h2">Billing Settings</Heading>
      <Text>Manage your payment methods and invoice preferences.</Text>

      <Heading level="h3">Default Payment Method</Heading>
      <Text>Visa ending in 0091 is used for recurring charges.</Text>

      <Heading level="h3">Invoice Delivery</Heading>
      <Text>Invoices are emailed to accounting@company.com.</Text>
    </Box>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(u=(h=s.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var H,v,y;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Ex: All Caps Variant',
  render: () => <Box display="grid" gap="8" maxW="prose">
      <Heading level="h4" allCaps>
        Section label
      </Heading>
      <Text>
        Use all caps sparingly for short section labels, not for long headings.
      </Text>
    </Box>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(y=(v=i.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};const S=["Default","Levels","ExContentHierarchy","ExAllCaps"];export{a as Default,i as ExAllCaps,s as ExContentHierarchy,n as Levels,S as __namedExportsOrder,T as default};
