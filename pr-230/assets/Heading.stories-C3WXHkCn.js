import{j as e,V as p,G as k,T as t,F as c}from"./iframe-DZjfHOlA.js";import{B as F}from"./BreakpointIndicator-vjLItZ0h.js";import{H as n}from"./Heading-Bm8pzVyA.js";import"./preload-helper-BWCT3BfN.js";import"./mq.hook-C26xjvuC.js";import"./breakpoints-DU_5_Zhy.js";import"./Tag-CDXHFI1V.js";const{expect:m,within:P}=__STORYBOOK_MODULE_TEST__,W={title:"Components/Heading",component:n,tags:["autodocs"],parameters:{layout:"centered"},args:{level:"h2",children:"Quarterly Revenue"}},a={},r={render:()=>e.jsxs(p,{gap:"8",children:[e.jsx(n,{level:"h1",children:"Heading 1"}),e.jsx(n,{level:"h2",children:"Heading 2"}),e.jsx(n,{level:"h3",children:"Heading 3"}),e.jsx(n,{level:"h4",children:"Heading 4"})]}),parameters:{controls:{disable:!0}}},s={render:()=>e.jsxs(k,{w:"full",h:"full",position:"relative",placeContent:"center",justifyItems:"center",gap:"12",children:[e.jsx(n,{level:"h1",fontSize:{base:"64",xs:"40",sm:"20",md:"12"},color:{base:"text.accent.cyan",xs:"text.accent.indigo",sm:"text.accent.purple",md:"text.accent.violet"},children:"Heading 1"}),e.jsxs(t,{textAlign:"center",textStyle:"mono.sm",_after:{display:"inline",content:{base:'"64"',xs:'"40"',sm:'"20"',md:'"12"'},color:"text.bold",fontWeight:"bold"},children:["Size:"," "]}),e.jsxs(t,{textAlign:"center",textStyle:"mono.sm",_after:{display:"inline",content:{base:'"text.accent.cyan"',xs:'"text.accent.indigo"',sm:'"text.accent.purple"',md:'"text.accent.violet"'},color:"text.bold",fontWeight:"bold"},children:["Color:"," "]}),e.jsx(F,{})]}),parameters:{controls:{disable:!0}}},o={name:"Ex: Content Hierarchy",render:()=>e.jsxs(p,{alignItems:"start",gap:"24",children:[e.jsxs(c,{direction:"column",children:[e.jsx(n,{level:"h2",children:"Billing Settings"}),e.jsx(t,{children:"Manage your payment methods and invoice preferences."})]}),e.jsxs(c,{direction:"column",children:[e.jsx(n,{level:"h3",children:"Default Payment Method"}),e.jsx(t,{children:"Visa ending in 0091 is used for recurring charges."})]}),e.jsxs(c,{direction:"column",children:[e.jsx(n,{level:"h3",children:"Invoice Delivery"}),e.jsx(t,{children:"Invoices are emailed to accounting@company.com."})]})]}),parameters:{controls:{disable:!0}}},i={name:"Test: data-ds-component",render:()=>e.jsxs(p,{alignItems:"start",gap:"8",children:[e.jsx(n,{level:"h3",children:"Composed heading"}),e.jsx(t,{children:"Plain text"}),e.jsx(n,{level:"h3","data-ds-component":"PageTitle",children:"Overridden heading"})]}),play:async({canvasElement:_})=>{const d=P(_);m(d.getByRole("heading",{name:"Composed heading"})).toHaveAttribute("data-ds-component","Heading"),m(d.getByText("Plain text")).toHaveAttribute("data-ds-component","Text"),m(d.getByRole("heading",{name:"Overridden heading"})).toHaveAttribute("data-ds-component","PageTitle")},parameters:{controls:{disable:!0}}},l={name:"Ex: All Caps Variant",render:()=>e.jsxs(c,{direction:"column",gap:"4",children:[e.jsx(n,{level:"h4",allCaps:!0,children:"Section label"}),e.jsx(t,{children:"Use all caps sparingly for short section labels, not for long headings."})]}),parameters:{controls:{disable:!0}}},L=["Default","Levels","ConditionalBreakpoints","ExContentHierarchy","DsComponentAttribute","ExAllCaps"];var g,x,h;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(h=(x=a.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var u,v,H;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(H=(v=r.parameters)==null?void 0:v.docs)==null?void 0:H.source}}};var y,b,f;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
      <BreakpointIndicator />
    </Grid>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(f=(b=s.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var j,T,S;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(S=(T=o.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var C,A,B;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Test: data-ds-component',
  render: () => <VStack alignItems="start" gap="8">
      <Heading level="h3">Composed heading</Heading>
      <Text>Plain text</Text>
      <Heading level="h3" data-ds-component="PageTitle">
        Overridden heading
      </Heading>
    </VStack>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Heading renders through Text; the outermost component name wins.
    expect(canvas.getByRole('heading', {
      name: 'Composed heading'
    })).toHaveAttribute('data-ds-component', 'Heading');
    expect(canvas.getByText('Plain text')).toHaveAttribute('data-ds-component', 'Text');
    expect(canvas.getByRole('heading', {
      name: 'Overridden heading'
    })).toHaveAttribute('data-ds-component', 'PageTitle');
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(B=(A=i.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var E,I,V;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(V=(I=l.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};export{s as ConditionalBreakpoints,a as Default,i as DsComponentAttribute,l as ExAllCaps,o as ExContentHierarchy,r as Levels,L as __namedExportsOrder,W as default};
