import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./index-BKyFwriW.js";import{V as C,G as T,F as l}from"./Box-7d6-wXl0.js";import{B as E}from"./BreakpointIndicator-Cv_9ebTk.js";import{T as n}from"./Text-Cm9k3dA6.js";import{H as t}from"./Heading-DBcomOsZ.js";import"./_commonjsHelpers-CqkleIqs.js";import"./mq.hook-BU-2oBAn.js";import"./radii-Ir2x-kmI.js";import"./index-DOpYXeGo.js";import"./colors-CLHggMRt.js";import"./Tag--YEh4_zB.js";import"./Icon-CdfbFGjj.js";import"./IconConfig-D6qOrJtl.js";const P={title:"Components/Heading",component:t,tags:["autodocs"],parameters:{layout:"centered"},args:{level:"h2",children:"Quarterly Revenue"}},r={},a={render:()=>e.jsxs(C,{gap:"8",children:[e.jsx(t,{level:"h1",children:"Heading 1"}),e.jsx(t,{level:"h2",children:"Heading 2"}),e.jsx(t,{level:"h3",children:"Heading 3"}),e.jsx(t,{level:"h4",children:"Heading 4"})]}),parameters:{controls:{disable:!0}}},o={render:()=>e.jsxs(T,{w:"full",h:"full",position:"relative",placeContent:"center",justifyItems:"center",gap:"12",children:[e.jsx(t,{level:"h1",fontSize:{base:"64",xs:"40",sm:"20",md:"12"},color:{base:"text.accent.cyan",xs:"text.accent.indigo",sm:"text.accent.purple",md:"text.accent.violet"},children:"Heading 1"}),e.jsxs(n,{textAlign:"center",textStyle:"mono.sm",_after:{display:"inline",content:{base:'"64"',xs:'"40"',sm:'"20"',md:'"12"'},color:"text.bold",fontWeight:"bold"},children:["Size:"," "]}),e.jsxs(n,{textAlign:"center",textStyle:"mono.sm",_after:{display:"inline",content:{base:'"text.accent.cyan"',xs:'"text.accent.indigo"',sm:'"text.accent.purple"',md:'"text.accent.violet"'},color:"text.bold",fontWeight:"bold"},children:["Color:"," "]}),e.jsx(E,{position:"fixed",bottom:"16",right:"16"})]}),parameters:{controls:{disable:!0}}},i={name:"Ex: Content Hierarchy",render:()=>e.jsxs(C,{alignItems:"start",gap:"24",children:[e.jsxs(l,{direction:"column",children:[e.jsx(t,{level:"h2",children:"Billing Settings"}),e.jsx(n,{children:"Manage your payment methods and invoice preferences."})]}),e.jsxs(l,{direction:"column",children:[e.jsx(t,{level:"h3",children:"Default Payment Method"}),e.jsx(n,{children:"Visa ending in 0091 is used for recurring charges."})]}),e.jsxs(l,{direction:"column",children:[e.jsx(t,{level:"h3",children:"Invoice Delivery"}),e.jsx(n,{children:"Invoices are emailed to accounting@company.com."})]})]}),parameters:{controls:{disable:!0}}},s={name:"Ex: All Caps Variant",render:()=>e.jsxs(l,{direction:"column",gap:"4",children:[e.jsx(t,{level:"h4",allCaps:!0,children:"Section label"}),e.jsx(n,{children:"Use all caps sparingly for short section labels, not for long headings."})]}),parameters:{controls:{disable:!0}}};var c,d,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var x,p,g;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(g=(p=a.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var h,u,f;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <Grid w="full" h="full" position="relative" placeContent="center" justifyItems="center" gap="12">
      <Heading level="h1" fontSize={{
      base: '64',
      xs: '40',
      sm: '20',
      md: '12'
    }} color={{
      base: 'text.accent.cyan',
      xs: 'text.accent.indigo',
      sm: 'text.accent.purple',
      md: 'text.accent.violet'
    }}>
        Heading 1
      </Heading>
      <Text textAlign="center" textStyle="mono.sm" _after={{
      display: 'inline',
      content: {
        base: '"64"',
        xs: '"40"',
        sm: '"20"',
        md: '"12"'
      },
      color: 'text.bold',
      fontWeight: 'bold'
    }}>
        Size:{' '}
      </Text>
      <Text textAlign="center" textStyle="mono.sm" _after={{
      display: 'inline',
      content: {
        base: '"text.accent.cyan"',
        xs: '"text.accent.indigo"',
        sm: '"text.accent.purple"',
        md: '"text.accent.violet"'
      },
      color: 'text.bold',
      fontWeight: 'bold'
    }}>
        Color:{' '}
      </Text>
      <BreakpointIndicator position="fixed" bottom="16" right="16" />
    </Grid>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(f=(u=o.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var v,H,y;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(y=(H=i.parameters)==null?void 0:H.docs)==null?void 0:y.source}}};var b,j,S;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(S=(j=s.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};const R=["Default","Levels","ConditionalBreakpoints","ExContentHierarchy","ExAllCaps"];export{o as ConditionalBreakpoints,r as Default,s as ExAllCaps,i as ExContentHierarchy,a as Levels,R as __namedExportsOrder,P as default};
