import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./index-BKyFwriW.js";import{V as y,F as i}from"./Box-B-dS-qo0.js";import{T as t}from"./Text-BlqN2xhk.js";import{H as r}from"./Heading-EacOxlfa.js";import"./_commonjsHelpers-CqkleIqs.js";const T={title:"Components/Heading",component:r,tags:["autodocs"],parameters:{layout:"centered"},args:{level:"h2",children:"Quarterly Revenue"}},a={},n={render:()=>e.jsxs(y,{gap:"8",children:[e.jsx(r,{level:"h1",children:"Heading 1"}),e.jsx(r,{level:"h2",children:"Heading 2"}),e.jsx(r,{level:"h3",children:"Heading 3"}),e.jsx(r,{level:"h4",children:"Heading 4"})]}),parameters:{controls:{disable:!0}}},s={name:"Ex: Content Hierarchy",render:()=>e.jsxs(y,{alignItems:"start",gap:"24",children:[e.jsxs(i,{direction:"column",children:[e.jsx(r,{level:"h2",children:"Billing Settings"}),e.jsx(t,{children:"Manage your payment methods and invoice preferences."})]}),e.jsxs(i,{direction:"column",children:[e.jsx(r,{level:"h3",children:"Default Payment Method"}),e.jsx(t,{children:"Visa ending in 0091 is used for recurring charges."})]}),e.jsxs(i,{direction:"column",children:[e.jsx(r,{level:"h3",children:"Invoice Delivery"}),e.jsx(t,{children:"Invoices are emailed to accounting@company.com."})]})]}),parameters:{controls:{disable:!0}}},l={name:"Ex: All Caps Variant",render:()=>e.jsxs(i,{direction:"column",gap:"4",children:[e.jsx(r,{level:"h4",allCaps:!0,children:"Section label"}),e.jsx(t,{children:"Use all caps sparingly for short section labels, not for long headings."})]}),parameters:{controls:{disable:!0}}};var o,c,d;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:"{}",...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,g,p;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <VStack gap="8">
      <Heading level="h1">Heading 1</Heading>
      <Heading level="h2">Heading 2</Heading>
      <Heading level="h3">Heading 3</Heading>
      <Heading level="h4">Heading 4</Heading>
    </VStack>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(p=(g=n.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var h,x,u;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Ex: Content Hierarchy',
  render: () => <VStack alignItems="start" gap="24">
      <Flex direction="column">
        <Heading level="h2">Billing Settings</Heading>
        <Text>Manage your payment methods and invoice preferences.</Text>
      </Flex>

      <Flex direction="column">
        <Heading level="h3">Default Payment Method</Heading>
        <Text>Visa ending in 0091 is used for recurring charges.</Text>
      </Flex>

      <Flex direction="column">
        <Heading level="h3">Invoice Delivery</Heading>
        <Text>Invoices are emailed to accounting@company.com.</Text>
      </Flex>
    </VStack>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(u=(x=s.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};var H,v,j;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Ex: All Caps Variant',
  render: () => <Flex direction="column" gap="4">
      <Heading level="h4" allCaps>
        Section label
      </Heading>
      <Text>
        Use all caps sparingly for short section labels, not for long headings.
      </Text>
    </Flex>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(j=(v=l.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};const V=["Default","Levels","ExContentHierarchy","ExAllCaps"];export{a as Default,l as ExAllCaps,s as ExContentHierarchy,n as Levels,V as __namedExportsOrder,T as default};
