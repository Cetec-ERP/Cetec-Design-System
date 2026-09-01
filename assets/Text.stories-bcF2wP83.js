import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as t}from"./dsComponent-D6ec2IT1.js";import{C as k}from"./Card-BBXw6pee.js";import{D as H}from"./Divider-CFbTUo5C.js";import{H as E}from"./Heading-BNYnmztq.js";import{L as P}from"./Link-B_W8b6O5.js";import{T as r}from"./Text-DV_MEMni.js";import"./index-BKyFwriW.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Icon-12cJPaFt.js";import"./Tooltip-bRuinN4J.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";const Q={title:"Components/Text",component:r,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{control:"select",description:"Primitive text size token"},family:{control:"select",options:["body","heading","mono"],description:"Font family"},weight:{control:"select",description:"Font weight token"},truncate:{control:"boolean"},allCaps:{control:"boolean"},italic:{control:"boolean"},underline:{control:"boolean"},dashedUnderline:{control:"boolean"},definition:{control:"text",description:"Explains the text in a tooltip and applies a dashed underline."},bold:{control:"boolean"},as:{control:"text"}},args:{children:"Text content"}},a={render:C=>e.jsxs(t,{maxW:"prose",display:"grid",gap:"10",children:[e.jsx(r,{...C,children:"A single text primitive for app copy, labels, and metadata."}),e.jsx(r,{children:"Start with default `Text`, then adjust `size`, `weight`, or `family` only when hierarchy needs it."})]})},s={render:()=>e.jsxs(t,{display:"grid",gap:"8",maxW:"prose",children:[e.jsx(r,{size:"24",weight:"bold",children:"Primary paragraph intro"}),e.jsx(r,{size:"16",children:"Body copy for the main content area. This is the most common setting."}),e.jsx(r,{size:"14",color:"text.subtle",children:"Secondary support text for caveats and implementation details."}),e.jsx(r,{size:"12",family:"mono",color:"text.subtlest",children:"Metadata: Updated 2026-02-27"})]}),parameters:{controls:{disable:!0}}},o={render:()=>e.jsxs(t,{display:"grid",gap:"12",maxW:"prose",children:[e.jsx(r,{underline:!0,children:"Standard underline"}),e.jsx(r,{dashedUnderline:!0,children:"Dashed underline"}),e.jsx(r,{definition:"Application programming interface",width:"fit-content",children:"API"}),e.jsx(r,{size:"14",color:"text.subtle",children:"Hover or focus the defined term to read its explanation."})]}),parameters:{controls:{disable:!0}}},n={render:()=>e.jsxs(k,{p:"16",display:"grid",gap:"10",maxW:"prose",children:[e.jsx(E,{level:"h3",children:"Payment Details"}),e.jsx(r,{as:"p",children:"Your default card is charged on the first business day of each month."}),e.jsx(r,{as:"small",size:"12",color:"text.subtlest",children:"Last verified 2 hours ago."}),e.jsxs(r,{as:"span",size:"14",children:["Need help? ",e.jsx(P,{href:"#",children:"Contact billing support"})]})]}),parameters:{controls:{disable:!0}}},i={name:"Ex: Dashboard Summary",render:()=>e.jsxs(k,{p:"16",display:"grid",gap:"8",maxW:"sm",children:[e.jsx(r,{size:"14",color:"text.subtle",children:"Open invoices"}),e.jsx(r,{size:"32",weight:"black",color:"text",children:"18"}),e.jsx(r,{size:"14",color:"success.default",children:"Up 12% from last week"})]}),parameters:{controls:{disable:!0}}},d={name:"Ex: Common Mistakes",render:()=>e.jsxs(t,{display:"grid",gap:"12",maxW:"prose",children:[e.jsxs(t,{display:"grid",gap:"6",children:[e.jsx(r,{size:"14",weight:"bold",color:"success.default",children:"Do"}),e.jsx(r,{children:"Use Text for body copy and labels with semantic color tokens."})]}),e.jsx(H,{}),e.jsxs(t,{display:"grid",gap:"6",children:[e.jsx(r,{size:"14",weight:"bold",color:"error.default",children:"Avoid"}),e.jsx(r,{children:"Using heading sizes for long paragraphs or low-contrast text for critical information."})]})]}),parameters:{controls:{disable:!0}}},l={name:"A11y: Readable Paragraph",render:()=>e.jsxs(t,{maxW:"prose",display:"grid",gap:"10",children:[e.jsx(r,{as:"p",lineHeight:"default",children:"Keep long-form text in readable widths, use sufficient color contrast, and choose semantic HTML tags with the `as` prop when needed."}),e.jsx(r,{as:"p",size:"14",color:"text.subtle",children:"This paragraph demonstrates supporting content with a calmer visual weight while staying legible."})]}),parameters:{controls:{disable:!0}}};var c,p,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <Box maxW="prose" display="grid" gap="10">
      <Text {...args}>
        A single text primitive for app copy, labels, and metadata.
      </Text>
      <Text>
        Start with default \`Text\`, then adjust \`size\`, \`weight\`, or \`family\`
        only when hierarchy needs it.
      </Text>
    </Box>
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var x,h,g;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var u,f,b;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <Box display="grid" gap="12" maxW="prose">
      <Text underline>Standard underline</Text>
      <Text dashedUnderline>Dashed underline</Text>
      <Text definition="Application programming interface" width="fit-content">
        API
      </Text>
      <Text size="14" color="text.subtle">
        Hover or focus the defined term to read its explanation.
      </Text>
    </Box>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(b=(f=o.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var y,T,j;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(j=(T=n.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var w,z,D;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(D=(z=i.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var v,S,B;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(B=(S=d.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var A,U,W;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(W=(U=l.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};const V=["Default","Hierarchy","UnderlinesAndDefinitions","SemanticUsage","ExDashboardSummary","ExDoAndDont","A11yReadableParagraph"];export{l as A11yReadableParagraph,a as Default,i as ExDashboardSummary,d as ExDoAndDont,s as Hierarchy,n as SemanticUsage,o as UnderlinesAndDefinitions,V as __namedExportsOrder,Q as default};
