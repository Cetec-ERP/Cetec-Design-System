import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as a}from"./Box-DKmSdfHE.js";import{C as S}from"./Card-BkI1tAaZ.js";import{D as C}from"./Divider-B70_XZm7.js";import{H as W}from"./Heading-DiyfRLxp.js";import{L as A}from"./Link-BDZi_Hzn.js";import{T as r}from"./Text-BrVA7iWX.js";import"./index-BKyFwriW.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Icon-D93YU_Y7.js";const N={title:"Components/Text",component:r,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{control:"select",description:"Primitive text size token"},family:{control:"select",options:["body","heading","mono"],description:"Font family"},weight:{control:"select",description:"Font weight token"},truncate:{control:"boolean"},allCaps:{control:"boolean"},italic:{control:"boolean"},underline:{control:"boolean"},bold:{control:"boolean"},as:{control:"text"}},args:{children:"Text content"}},t={render:k=>e.jsxs(a,{maxW:"prose",display:"grid",gap:"10",children:[e.jsx(r,{...k,children:"A single text primitive for app copy, labels, and metadata."}),e.jsx(r,{children:"Start with default `Text`, then adjust `size`, `weight`, or `family` only when hierarchy needs it."})]})},s={render:()=>e.jsxs(a,{display:"grid",gap:"8",maxW:"prose",children:[e.jsx(r,{size:"24",weight:"bold",children:"Primary paragraph intro"}),e.jsx(r,{size:"16",children:"Body copy for the main content area. This is the most common setting."}),e.jsx(r,{size:"14",color:"text.subtle",children:"Secondary support text for caveats and implementation details."}),e.jsx(r,{size:"12",family:"mono",color:"text.subtlest",children:"Metadata: Updated 2026-02-27"})]}),parameters:{controls:{disable:!0}}},o={render:()=>e.jsxs(S,{p:"16",display:"grid",gap:"10",maxW:"prose",children:[e.jsx(W,{level:"h3",children:"Payment Details"}),e.jsx(r,{as:"p",children:"Your default card is charged on the first business day of each month."}),e.jsx(r,{as:"small",size:"12",color:"text.subtlest",children:"Last verified 2 hours ago."}),e.jsxs(r,{as:"span",size:"14",children:["Need help? ",e.jsx(A,{href:"#",children:"Contact billing support"})]})]}),parameters:{controls:{disable:!0}}},n={name:"Ex: Dashboard Summary",render:()=>e.jsxs(S,{p:"16",display:"grid",gap:"8",maxW:"sm",children:[e.jsx(r,{size:"14",color:"text.subtle",children:"Open invoices"}),e.jsx(r,{size:"32",weight:"black",color:"text",children:"18"}),e.jsx(r,{size:"14",color:"success.default",children:"Up 12% from last week"})]}),parameters:{controls:{disable:!0}}},i={name:"Ex: Common Mistakes",render:()=>e.jsxs(a,{display:"grid",gap:"12",maxW:"prose",children:[e.jsxs(a,{display:"grid",gap:"6",children:[e.jsx(r,{size:"14",weight:"bold",color:"success.default",children:"Do"}),e.jsx(r,{children:"Use Text for body copy and labels with semantic color tokens."})]}),e.jsx(C,{}),e.jsxs(a,{display:"grid",gap:"6",children:[e.jsx(r,{size:"14",weight:"bold",color:"error.default",children:"Avoid"}),e.jsx(r,{children:"Using heading sizes for long paragraphs or low-contrast text for critical information."})]})]}),parameters:{controls:{disable:!0}}},l={name:"A11y: Readable Paragraph",render:()=>e.jsxs(a,{maxW:"prose",display:"grid",gap:"10",children:[e.jsx(r,{as:"p",lineHeight:"default",children:"Keep long-form text in readable widths, use sufficient color contrast, and choose semantic HTML tags with the `as` prop when needed."}),e.jsx(r,{as:"p",size:"14",color:"text.subtle",children:"This paragraph demonstrates supporting content with a calmer visual weight while staying legible."})]}),parameters:{controls:{disable:!0}}};var d,c,p;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <Box maxW="prose" display="grid" gap="10">
      <Text {...args}>
        A single text primitive for app copy, labels, and metadata.
      </Text>
      <Text>
        Start with default \`Text\`, then adjust \`size\`, \`weight\`, or \`family\`
        only when hierarchy needs it.
      </Text>
    </Box>
}`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,x,h;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <Box display="grid" gap="8" maxW="prose">
      <Text size="24" weight="bold">
        Primary paragraph intro
      </Text>
      <Text size="16">
        Body copy for the main content area. This is the most common setting.
      </Text>
      <Text size="14" color="text.subtle">
        Secondary support text for caveats and implementation details.
      </Text>
      <Text size="12" family="mono" color="text.subtlest">
        Metadata: Updated 2026-02-27
      </Text>
    </Box>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(h=(x=s.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var g,u,y;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Card p="16" display="grid" gap="10" maxW="prose">
      <Heading level="h3">Payment Details</Heading>
      <Text as="p">
        Your default card is charged on the first business day of each month.
      </Text>
      <Text as="small" size="12" color="text.subtlest">
        Last verified 2 hours ago.
      </Text>
      <Text as="span" size="14">
        Need help? <Link href="#">Contact billing support</Link>
      </Text>
    </Card>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(y=(u=o.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var f,b,T;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Ex: Dashboard Summary',
  render: () => <Card p="16" display="grid" gap="8" maxW="sm">
      <Text size="14" color="text.subtle">
        Open invoices
      </Text>
      <Text size="32" weight="black" color="text">
        18
      </Text>
      <Text size="14" color="success.default">
        Up 12% from last week
      </Text>
    </Card>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(T=(b=n.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};var w,j,z;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Ex: Common Mistakes',
  render: () => <Box display="grid" gap="12" maxW="prose">
      <Box display="grid" gap="6">
        <Text size="14" weight="bold" color="success.default">
          Do
        </Text>
        <Text>
          Use Text for body copy and labels with semantic color tokens.
        </Text>
      </Box>
      <Divider />
      <Box display="grid" gap="6">
        <Text size="14" weight="bold" color="error.default">
          Avoid
        </Text>
        <Text>
          Using heading sizes for long paragraphs or low-contrast text for
          critical information.
        </Text>
      </Box>
    </Box>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(z=(j=i.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var v,D,B;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'A11y: Readable Paragraph',
  render: () => <Box maxW="prose" display="grid" gap="10">
      <Text as="p" lineHeight="default">
        Keep long-form text in readable widths, use sufficient color contrast,
        and choose semantic HTML tags with the \`as\` prop when needed.
      </Text>
      <Text as="p" size="14" color="text.subtle">
        This paragraph demonstrates supporting content with a calmer visual
        weight while staying legible.
      </Text>
    </Box>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(B=(D=l.parameters)==null?void 0:D.docs)==null?void 0:B.source}}};const Y=["Default","Hierarchy","SemanticUsage","ExDashboardSummary","ExDoAndDont","A11yReadableParagraph"];export{l as A11yReadableParagraph,t as Default,n as ExDashboardSummary,i as ExDoAndDont,s as Hierarchy,o as SemanticUsage,Y as __namedExportsOrder,N as default};
