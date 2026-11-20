import{j as e,W as b,F as r,T as n,H as S,G as T,V as l,B as i,a as Te}from"./iframe-Dnjkp1ni.js";import{B as ye}from"./BreakpointIndicator-BDDVUaWe.js";import{B as y}from"./Button-DMmV2vGc.js";import{H as t}from"./Heading-DWu9UMjF.js";import{C as a}from"./Card-_RP5UpNz.js";import"./preload-helper-CPI0EWmb.js";import"./mq.hook-D-IVE5Gw.js";import"./breakpoints-DU_5_Zhy.js";import"./Tag-DxaydCkN.js";import"./Spinner-Du2Mvwj6.js";import"./FieldContext-BFW9VqL4.js";const{expect:H,fn:Se,userEvent:we,within:He}=__STORYBOOK_MODULE_TEST__,Ne={title:"Components/Card",component:a,parameters:{layout:"centered",docs:{description:{component:`Card component for containing content with optional interactivity.

Features:
- Non-interactive by default (renders as div)
- Five visual variants: default, flat, sunken, ghost, overlay
- Polymorphic \`as\` prop for semantic elements (article, section, etc.)
- Interactive mode for clickable cards
- Auto-interactive when href or onClick is provided
- Accessible focus and disabled states`}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","flat","ghost","sunken","overlay"],description:"Visual style variants",table:{defaultValue:{summary:"default"}}},interactive:{control:"boolean",description:"Makes card interactive (clickable). Auto-set when href or onClick provided.",table:{defaultValue:{summary:"false"}}},disabled:{control:"boolean",description:"Disabled state for interactive cards"},href:{control:"text",description:"When provided, card renders as anchor and becomes interactive"},as:{control:"select",options:["div","article","section","aside","button","a"],description:"Semantic element to render as",table:{defaultValue:{summary:"div"}}},children:{control:!1,description:"Card content"}},args:{onClick:Se()}},De=({title:s,description:k})=>e.jsxs(l,{p:"16",gap:"8",alignItems:"flex-start",children:[e.jsx(t,{level:"h3",children:s}),e.jsx(n,{children:k})]}),h={name:"Static",render:()=>e.jsxs(b,{justifyContent:"center",gap:"24",p:"40",children:[e.jsx(a,{children:e.jsxs(r,{flexDir:"column",p:"16",children:[e.jsx(t,{level:"h3",children:"Default Card"}),e.jsx(n,{children:"Static card with shadow"})]})}),e.jsx(a,{variant:"flat",children:e.jsxs(r,{flexDir:"column",p:"16",children:[e.jsx(t,{level:"h3",children:"Flat Card"}),e.jsx(n,{children:"Static card with flat style"})]})}),e.jsx(a,{variant:"sunken",children:e.jsxs(r,{flexDir:"column",p:"16",children:[e.jsx(t,{level:"h3",children:"Sunken Card"}),e.jsx(n,{children:"Static with sunken background"})]})}),e.jsx(a,{variant:"ghost",children:e.jsxs(r,{flexDir:"column",p:"16",children:[e.jsx(t,{level:"h3",children:"Ghost Card"}),e.jsx(n,{children:"Static with transparent background"})]})}),e.jsx(a,{variant:"overlay",children:e.jsxs(r,{flexDir:"column",p:"16",children:[e.jsx(t,{level:"h3",children:"Overlay Card"}),e.jsx(n,{children:"Static card with shadow"})]})})]})},m={name:"Interactive",render:()=>e.jsxs(b,{justifyContent:"center",gap:"24",p:"40",children:[e.jsx(a,{onClick:()=>alert("Default clicked"),children:e.jsxs(r,{flexDir:"column",p:"16",children:[e.jsx(t,{level:"h3",children:"Default Card"}),e.jsx(n,{children:"Static card with shadow"})]})}),e.jsx(a,{variant:"flat",onClick:()=>alert("Flat clicked"),children:e.jsxs(r,{flexDir:"column",p:"16",children:[e.jsx(t,{level:"h3",children:"Flat Card"}),e.jsx(n,{children:"Static card with flat style"})]})}),e.jsx(a,{variant:"sunken",onClick:()=>alert("Sunken clicked"),children:e.jsxs(r,{flexDir:"column",p:"16",children:[e.jsx(t,{level:"h3",children:"Sunken Card"}),e.jsx(n,{children:"Static with sunken background"})]})}),e.jsx(a,{variant:"ghost",onClick:()=>alert("Ghost clicked"),children:e.jsxs(r,{flexDir:"column",p:"16",children:[e.jsx(t,{level:"h3",children:"Ghost Card"}),e.jsx(n,{children:"Static with transparent background"})]})})]})},u={name:"Click Handler",tags:["!dev","!autodocs","!snapshot"],args:{onClick:Se()},render:s=>e.jsxs(S,{gap:"16",p:"16",children:[e.jsx(a,{onClick:s.onClick,children:e.jsx(n,{p:"16",children:"Enabled card"})}),e.jsx(a,{onClick:s.onClick,disabled:!0,children:e.jsx(n,{p:"16",children:"Disabled card"})})]}),play:async({args:s,canvasElement:k})=>{const w=He(k);await we.click(w.getByRole("button",{name:"Enabled card"})),await H(s.onClick).toHaveBeenCalledTimes(1),await H(w.getByRole("button",{name:"Disabled card"})).toBeDisabled()}},f={name:"Link Card",render:()=>e.jsx(a,{href:"#link-target",children:e.jsxs(r,{flexDir:"column",p:"16",children:[e.jsx(t,{level:"h3",children:"Link Card"}),e.jsx(n,{children:"Renders as anchor element automatically."})]})})},g={name:"Disabled states",render:()=>e.jsxs(b,{justifyContent:"center",gap:"24",p:"40",children:[e.jsx(a,{disabled:!0,href:"#link-target",children:e.jsxs(r,{flexDir:"column",p:"16",children:[e.jsx(t,{level:"h3",children:"Default Card"}),e.jsx(n,{children:"Static card with shadow"})]})}),e.jsx(a,{variant:"flat",disabled:!0,children:e.jsxs(r,{flexDir:"column",p:"16",children:[e.jsx(t,{level:"h3",children:"Flat Card"}),e.jsx(n,{children:"Static card with flat style"})]})}),e.jsx(a,{variant:"sunken",disabled:!0,children:e.jsxs(r,{flexDir:"column",p:"16",children:[e.jsx(t,{level:"h3",children:"Sunken Card"}),e.jsx(n,{children:"Static with sunken background"})]})}),e.jsx(a,{variant:"ghost",disabled:!0,children:e.jsxs(r,{flexDir:"column",p:"16",children:[e.jsx(t,{level:"h3",children:"Ghost Card"}),e.jsx(n,{children:"Static with transparent background"})]})}),e.jsx(a,{variant:"overlay",disabled:!0,children:e.jsxs(r,{flexDir:"column",p:"16",children:[e.jsx(t,{level:"h3",children:"Overlay Card"}),e.jsx(n,{children:"Static card with shadow"})]})})]})},C={render:()=>e.jsxs(T,{gridTemplateColumns:"repeat(3, 1fr)",gap:"16",children:[e.jsx(a,{as:"article",children:e.jsxs(l,{p:"12",gap:"4",alignItems:"flex-start",children:[e.jsx(i,{as:"code",fontSize:"14",color:"blue.50",children:"article"}),e.jsx(n,{children:"For blog posts, news"})]})}),e.jsx(a,{as:"section",variant:"flat",children:e.jsxs(l,{p:"12",gap:"4",alignItems:"flex-start",children:[e.jsx(i,{as:"code",fontSize:"14",color:"blue.50",children:"section"}),e.jsx(n,{children:"For grouped content"})]})}),e.jsx(a,{as:"aside",variant:"ghost",children:e.jsxs(l,{p:"12",gap:"4",alignItems:"flex-start",children:[e.jsx(i,{as:"code",fontSize:"14",color:"blue.50",children:"aside"}),e.jsx(n,{children:"For supplementary content"})]})})]}),parameters:{controls:{disable:!0}}},v={render:()=>e.jsxs(T,{w:"full",h:"full",position:"relative",placeContent:"center",alignItems:"center",justifyItems:"center",gap:"16",children:[e.jsx(a,{p:{base:"56",xs:"40",sm:"24",md:"16"},variant:{base:"sunken",xs:"flat",sm:"default"},children:"Conditional Card"}),e.jsxs(l,{gap:"4",children:[e.jsxs(n,{textAlign:"center",textStyle:"mono.sm",_after:{display:"inline",content:{base:'"56"',xs:'"40"',sm:'"24"',md:'"16"'},color:"text.bold",fontWeight:"bold"},children:["Padding:"," "]}),e.jsxs(n,{textAlign:"center",textStyle:"mono.sm",_after:{display:"inline",content:{base:'"sunken"',xs:'"flat"',sm:'"default"'},color:"text.bold",fontWeight:"bold"},children:["Variant:"," "]})]}),e.jsx(ye,{})]}),parameters:{controls:{disable:!0}}},j={name:"Product Card",render:()=>e.jsx(a,{overflow:"hidden",children:e.jsxs(l,{gap:"0",children:[e.jsx(i,{bg:"blue.50",aspectRatio:"wide",w:"280"}),e.jsxs(r,{flexDir:"column",p:"16",gap:"8",alignItems:"flex-start",w:"full",children:[e.jsx(t,{level:"h4",children:"Product Name"}),e.jsx(n,{children:"$99.99"}),e.jsx(y,{variant:"primary",onClick:()=>alert("View product"),children:"Add to Cart"})]})]})}),parameters:{controls:{disable:!0}}},d={name:"Profile",render:()=>e.jsx(a,{variant:"flat",children:e.jsxs(S,{p:"16",gap:"16",children:[e.jsx(i,{bg:"blue.60",w:"64",h:"64",borderRadius:"100",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:"0",children:e.jsx(Te,{name:"user",size:"32",fill:"icon.inverse"})}),e.jsxs(r,{flexDir:"column",alignItems:"flex-start",w:"full",children:[e.jsx(t,{level:"h4",children:"Jane Doe"}),e.jsx(n,{color:"text.muted",children:"Product Designer"}),e.jsx(y,{size:"sm",mt:"12",children:"View Profile"})]})]})}),parameters:{controls:{disable:!0}}},c={name:"Stats Card",render:()=>e.jsxs(S,{gap:"16",children:[e.jsx(a,{variant:"overlay",children:e.jsxs(l,{p:"16",gap:"4",alignItems:"flex-start",children:[e.jsx(n,{color:"text.subtlest",fontSize:"14",children:"Total Users"}),e.jsx(t,{level:"h2",children:"12,345"}),e.jsx(n,{color:"text.subtlest",fontSize:"14",children:"+12% from last month"})]})}),e.jsx(a,{variant:"overlay",children:e.jsxs(l,{p:"16",gap:"4",alignItems:"flex-start",children:[e.jsx(n,{color:"text.subtlest",fontSize:"14",children:"Revenue"}),e.jsx(t,{level:"h2",children:"$54,321"}),e.jsx(n,{color:"text.subtlest",fontSize:"14",children:"+8% from last month"})]})})]}),parameters:{controls:{disable:!0}}},o={render:()=>e.jsx(T,{gridTemplateColumns:"repeat(3, 1fr)",gap:"16",w:"4xl",p:"40",children:[1,2,3,4,5,6].map(s=>e.jsx(a,{variant:"flat",interactive:!0,children:e.jsxs(l,{p:"16",gap:"8",alignItems:"flex-start",children:[e.jsxs(t,{level:"h4",children:["Card ",s]}),e.jsx(n,{children:"Card content goes here."})]})},`card-${s}`))}),parameters:{controls:{disable:!0}}},x={name:"Interactive vs Non-interactive",render:()=>e.jsxs(l,{gap:"24",alignItems:"flex-start",children:[e.jsxs("div",{children:[e.jsx(i,{mb:"8",fontSize:"14",fontWeight:"bold",children:"Non-Interactive (Content Container)"}),e.jsx(a,{children:e.jsxs(l,{p:"16",gap:"0",alignItems:"flex-start",children:[e.jsx(t,{level:"h4",children:"Static Card"}),e.jsx(n,{children:"This is a content container. No hover effects."}),e.jsx(y,{variant:"primary",mt:"16",onClick:()=>alert("Button clicked!"),children:"Action Inside"})]})})]}),e.jsxs("div",{children:[e.jsx(i,{mb:"8",fontSize:"14",fontWeight:"bold",children:"Interactive (Clickable Card)"}),e.jsx(a,{onClick:()=>alert("Card clicked!"),children:e.jsxs(l,{p:"16",gap:"8",alignItems:"flex-start",children:[e.jsx(t,{level:"h4",children:"Clickable Card"}),e.jsx(n,{children:"The entire card is clickable. Hover to see effects."})]})})]})]}),parameters:{controls:{disable:!0}}},p={args:{interactive:!1,disabled:!1,children:e.jsx(De,{title:"Playground Card",description:"Adjust the controls to see different variations."})}},_e=["Default","Interactive","ClickHandler","LinkCard","Disabled","SemanticElements","ConditionalBreakpoints","ProductCard","ProfileCard","StatsCard","CardGrid","InteractiveComparison","Playground"];var D,F,I;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Static',
  render: () => <Wrap justifyContent="center" gap="24" p="40">
      <Card>
        <Flex flexDir="column" p={'16'}>
          <Heading level="h3">Default Card</Heading>
          <Text>Static card with shadow</Text>
        </Flex>
      </Card>
      <Card variant="flat">
        <Flex flexDir="column" p={'16'}>
          <Heading level="h3">Flat Card</Heading>
          <Text>Static card with flat style</Text>
        </Flex>
      </Card>
      <Card variant="sunken">
        <Flex flexDir="column" p={'16'}>
          <Heading level="h3">Sunken Card</Heading>
          <Text>Static with sunken background</Text>
        </Flex>
      </Card>
      <Card variant="ghost">
        <Flex flexDir="column" p={'16'}>
          <Heading level="h3">Ghost Card</Heading>
          <Text>Static with transparent background</Text>
        </Flex>
      </Card>
      <Card variant="overlay">
        <Flex flexDir="column" p={'16'}>
          <Heading level="h3">Overlay Card</Heading>
          <Text>Static card with shadow</Text>
        </Flex>
      </Card>
    </Wrap>
}`,...(I=(F=h.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var B,V,z;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Interactive',
  render: () => <Wrap justifyContent="center" gap="24" p="40">
      <Card onClick={() => alert('Default clicked')}>
        <Flex flexDir="column" p={'16'}>
          <Heading level="h3">Default Card</Heading>
          <Text>Static card with shadow</Text>
        </Flex>
      </Card>
      <Card variant="flat" onClick={() => alert('Flat clicked')}>
        <Flex flexDir="column" p={'16'}>
          <Heading level="h3">Flat Card</Heading>
          <Text>Static card with flat style</Text>
        </Flex>
      </Card>
      <Card variant="sunken" onClick={() => alert('Sunken clicked')}>
        <Flex flexDir="column" p={'16'}>
          <Heading level="h3">Sunken Card</Heading>
          <Text>Static with sunken background</Text>
        </Flex>
      </Card>
      <Card variant="ghost" onClick={() => alert('Ghost clicked')}>
        <Flex flexDir="column" p={'16'}>
          <Heading level="h3">Ghost Card</Heading>
          <Text>Static with transparent background</Text>
        </Flex>
      </Card>
    </Wrap>
}`,...(z=(V=m.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};var P,G,W;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Click Handler',
  tags: ['!dev', '!autodocs', '!snapshot'],
  args: {
    onClick: fn()
  },
  render: args => <HStack gap="16" p="16">
      <Card onClick={args.onClick}>
        <Text p="16">Enabled card</Text>
      </Card>
      <Card onClick={args.onClick} disabled>
        <Text p="16">Disabled card</Text>
      </Card>
    </HStack>,
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Enabled card'
    }));
    await expect(args.onClick).toHaveBeenCalledTimes(1);
    await expect(canvas.getByRole('button', {
      name: 'Disabled card'
    })).toBeDisabled();
  }
}`,...(W=(G=u.parameters)==null?void 0:G.docs)==null?void 0:W.source}}};var E,R,A;f.parameters={...f.parameters,docs:{...(E=f.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Link Card',
  render: () => <Card href="#link-target">
      <Flex flexDir="column" p={'16'}>
        <Heading level="h3">Link Card</Heading>
        <Text>Renders as anchor element automatically.</Text>
      </Flex>
    </Card>
}`,...(A=(R=f.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var N,_,O;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Disabled states',
  render: () => <Wrap justifyContent="center" gap="24" p="40">
      <Card disabled href="#link-target">
        <Flex flexDir="column" p={'16'}>
          <Heading level="h3">Default Card</Heading>
          <Text>Static card with shadow</Text>
        </Flex>
      </Card>
      <Card variant="flat" disabled>
        <Flex flexDir="column" p={'16'}>
          <Heading level="h3">Flat Card</Heading>
          <Text>Static card with flat style</Text>
        </Flex>
      </Card>
      <Card variant="sunken" disabled>
        <Flex flexDir="column" p={'16'}>
          <Heading level="h3">Sunken Card</Heading>
          <Text>Static with sunken background</Text>
        </Flex>
      </Card>
      <Card variant="ghost" disabled>
        <Flex flexDir="column" p={'16'}>
          <Heading level="h3">Ghost Card</Heading>
          <Text>Static with transparent background</Text>
        </Flex>
      </Card>
      <Card variant="overlay" disabled>
        <Flex flexDir="column" p={'16'}>
          <Heading level="h3">Overlay Card</Heading>
          <Text>Static card with shadow</Text>
        </Flex>
      </Card>
    </Wrap>
}`,...(O=(_=g.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var L,$,U;C.parameters={...C.parameters,docs:{...(L=C.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <Grid gridTemplateColumns="repeat(3, 1fr)" gap="16">
      <Card as="article">
        <VStack p="12" gap="4" alignItems="flex-start">
          <Box as="code" fontSize="14" color="blue.50">
            article
          </Box>
          <Text>For blog posts, news</Text>
        </VStack>
      </Card>
      <Card as="section" variant="flat">
        <VStack p="12" gap="4" alignItems="flex-start">
          <Box as="code" fontSize="14" color="blue.50">
            section
          </Box>
          <Text>For grouped content</Text>
        </VStack>
      </Card>
      <Card as="aside" variant="ghost">
        <VStack p="12" gap="4" alignItems="flex-start">
          <Box as="code" fontSize="14" color="blue.50">
            aside
          </Box>
          <Text>For supplementary content</Text>
        </VStack>
      </Card>
    </Grid>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(U=($=C.parameters)==null?void 0:$.docs)==null?void 0:U.source}}};var J,M,K;v.parameters={...v.parameters,docs:{...(J=v.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <Grid w="full" h="full" position="relative" placeContent="center" alignItems="center" justifyItems="center" gap="16">
      <Card p={{
      base: '56',
      xs: '40',
      sm: '24',
      md: '16'
    }} variant={{
      base: 'sunken',
      xs: 'flat',
      sm: 'default'
    }}>
        Conditional Card
      </Card>
      <VStack gap="4">
        <Text textAlign="center" textStyle="mono.sm" _after={{
        display: 'inline',
        content: {
          base: '"56"',
          xs: '"40"',
          sm: '"24"',
          md: '"16"'
        },
        color: 'text.bold',
        fontWeight: 'bold'
      }}>
          Padding:{' '}
        </Text>
        <Text textAlign="center" textStyle="mono.sm" _after={{
        display: 'inline',
        content: {
          base: '"sunken"',
          xs: '"flat"',
          sm: '"default"'
        },
        color: 'text.bold',
        fontWeight: 'bold'
      }}>
          Variant:{' '}
        </Text>
      </VStack>
      <BreakpointIndicator />
    </Grid>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(K=(M=v.parameters)==null?void 0:M.docs)==null?void 0:K.source}}};var Y,q,Q;j.parameters={...j.parameters,docs:{...(Y=j.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'Product Card',
  render: () => <Card overflow="hidden">
      <VStack gap="0">
        <Box bg="blue.50" aspectRatio="wide" w="280" />
        <Flex flexDir="column" p="16" gap="8" alignItems="flex-start" w="full">
          <Heading level="h4">Product Name</Heading>
          <Text>$99.99</Text>
          <Button variant="primary" onClick={() => alert('View product')}>
            Add to Cart
          </Button>
        </Flex>
      </VStack>
    </Card>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Q=(q=j.parameters)==null?void 0:q.docs)==null?void 0:Q.source}}};var X,Z,ee,ne,ae;d.parameters={...d.parameters,docs:{...(X=d.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: 'Profile',
  render: () => <Card variant="flat">
      <HStack p="16" gap="16">
        <Box bg="blue.60" w="64" h="64" borderRadius="100" display="flex" alignItems="center" justifyContent="center" flexShrink="0">
          <Icon name="user" size="32" fill="icon.inverse" />
        </Box>
        <Flex flexDir="column" alignItems="flex-start" w="full">
          <Heading level="h4">Jane Doe</Heading>
          <Text color="text.muted">Product Designer</Text>
          <Button size="sm" mt="12">
            View Profile
          </Button>
        </Flex>
      </HStack>
    </Card>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ee=(Z=d.parameters)==null?void 0:Z.docs)==null?void 0:ee.source},description:{story:"Profile card",...(ae=(ne=d.parameters)==null?void 0:ne.docs)==null?void 0:ae.description}}};var te,re,le,se,ie;c.parameters={...c.parameters,docs:{...(te=c.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: 'Stats Card',
  render: () => <HStack gap="16">
      <Card variant="overlay">
        <VStack p="16" gap="4" alignItems="flex-start">
          <Text color="text.subtlest" fontSize="14">
            Total Users
          </Text>
          <Heading level="h2">12,345</Heading>
          <Text color="text.subtlest" fontSize="14">
            +12% from last month
          </Text>
        </VStack>
      </Card>
      <Card variant="overlay">
        <VStack p="16" gap="4" alignItems="flex-start">
          <Text color="text.subtlest" fontSize="14">
            Revenue
          </Text>
          <Heading level="h2">$54,321</Heading>
          <Text color="text.subtlest" fontSize="14">
            +8% from last month
          </Text>
        </VStack>
      </Card>
    </HStack>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(le=(re=c.parameters)==null?void 0:re.docs)==null?void 0:le.source},description:{story:"Stats card",...(ie=(se=c.parameters)==null?void 0:se.docs)==null?void 0:ie.description}}};var de,ce,oe,xe,pe;o.parameters={...o.parameters,docs:{...(de=o.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => <Grid gridTemplateColumns="repeat(3, 1fr)" gap="16" w="4xl" p="40">
      {[1, 2, 3, 4, 5, 6].map(cardNumber => <Card key={\`card-\${cardNumber}\`} variant="flat" interactive>
          <VStack p="16" gap="8" alignItems="flex-start">
            <Heading level="h4">Card {cardNumber}</Heading>
            <Text>Card content goes here.</Text>
          </VStack>
        </Card>)}
    </Grid>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(oe=(ce=o.parameters)==null?void 0:ce.docs)==null?void 0:oe.source},description:{story:"Card grid layout",...(pe=(xe=o.parameters)==null?void 0:xe.docs)==null?void 0:pe.description}}};var he,me,ue,fe,ge;x.parameters={...x.parameters,docs:{...(he=x.parameters)==null?void 0:he.docs,source:{originalSource:`{
  name: 'Interactive vs Non-interactive',
  render: () => <VStack gap="24" alignItems="flex-start">
      <div>
        <Box mb="8" fontSize="14" fontWeight="bold">
          Non-Interactive (Content Container)
        </Box>
        <Card>
          <VStack p="16" gap="0" alignItems="flex-start">
            <Heading level="h4">Static Card</Heading>
            <Text>This is a content container. No hover effects.</Text>
            <Button variant="primary" mt="16" onClick={() => alert('Button clicked!')}>
              Action Inside
            </Button>
          </VStack>
        </Card>
      </div>
      <div>
        <Box mb="8" fontSize="14" fontWeight="bold">
          Interactive (Clickable Card)
        </Box>
        <Card onClick={() => alert('Card clicked!')}>
          <VStack p="16" gap="8" alignItems="flex-start">
            <Heading level="h4">Clickable Card</Heading>
            <Text>The entire card is clickable. Hover to see effects.</Text>
          </VStack>
        </Card>
      </div>
    </VStack>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ue=(me=x.parameters)==null?void 0:me.docs)==null?void 0:ue.source},description:{story:"Interactive vs Non-interactive comparison",...(ge=(fe=x.parameters)==null?void 0:fe.docs)==null?void 0:ge.description}}};var Ce,ve,je,ke,be;p.parameters={...p.parameters,docs:{...(Ce=p.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  args: {
    interactive: false,
    disabled: false,
    children: <CardContent title="Playground Card" description="Adjust the controls to see different variations." />
  }
}`,...(je=(ve=p.parameters)==null?void 0:ve.docs)==null?void 0:je.source},description:{story:"Interactive playground to test all props",...(be=(ke=p.parameters)==null?void 0:ke.docs)==null?void 0:be.description}}};export{o as CardGrid,u as ClickHandler,v as ConditionalBreakpoints,h as Default,g as Disabled,m as Interactive,x as InteractiveComparison,f as LinkCard,p as Playground,j as ProductCard,d as ProfileCard,C as SemanticElements,c as StatsCard,_e as __namedExportsOrder,Ne as default};
