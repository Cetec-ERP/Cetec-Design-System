import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{f as pe}from"./index-DPYJpPba.js";import"./index-BKyFwriW.js";import{W as v,F as n,G as oe,V as l,B as i,H as xe}from"./Box-B-dS-qo0.js";import{B as j}from"./Button-C2_uhQrP.js";import{H as t}from"./Heading-EacOxlfa.js";import{I as me}from"./Icon-6Bp-j8YQ.js";import"./IconConfig-jo8kaCG8.js";import{T as r}from"./Text-BlqN2xhk.js";import{C as a}from"./Card-DQHmbzpq.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Spinner-B5Ee-ZZJ.js";const De={title:"Components/Card",component:a,parameters:{layout:"centered",docs:{description:{component:`Card component for containing content with optional interactivity.

Features:
- Non-interactive by default (renders as div)
- Five visual variants: default, flat, sunken, ghost, overlay
- Polymorphic \`as\` prop for semantic elements (article, section, etc.)
- Interactive mode for clickable cards
- Auto-interactive when href or onClick is provided
- Accessible focus and disabled states`}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","flat","ghost","sunken","overlay"],description:"Visual style variants",table:{defaultValue:{summary:"default"}}},interactive:{control:"boolean",description:"Makes card interactive (clickable). Auto-set when href or onClick provided.",table:{defaultValue:{summary:"false"}}},disabled:{control:"boolean",description:"Disabled state for interactive cards"},href:{control:"text",description:"When provided, card renders as anchor and becomes interactive"},as:{control:"select",options:["div","article","section","aside","button","a"],description:"Semantic element to render as",table:{defaultValue:{summary:"div"}}},children:{control:!1,description:"Card content"}},args:{onClick:pe()}},ue=({title:h,description:he})=>e.jsxs(l,{p:"16",gap:"8",alignItems:"flex-start",children:[e.jsx(t,{level:"h3",children:h}),e.jsx(r,{children:he})]}),p={name:"Static",render:()=>e.jsxs(v,{justifyContent:"center",gap:"24",p:"40",children:[e.jsx(a,{children:e.jsxs(n,{flexDir:"column",p:"16",children:[e.jsx(t,{level:"h3",children:"Default Card"}),e.jsx(r,{children:"Static card with shadow"})]})}),e.jsx(a,{variant:"flat",children:e.jsxs(n,{flexDir:"column",p:"16",children:[e.jsx(t,{level:"h3",children:"Flat Card"}),e.jsx(r,{children:"Static card with flat style"})]})}),e.jsx(a,{variant:"sunken",children:e.jsxs(n,{flexDir:"column",p:"16",children:[e.jsx(t,{level:"h3",children:"Sunken Card"}),e.jsx(r,{children:"Static with sunken background"})]})}),e.jsx(a,{variant:"ghost",children:e.jsxs(n,{flexDir:"column",p:"16",children:[e.jsx(t,{level:"h3",children:"Ghost Card"}),e.jsx(r,{children:"Static with transparent background"})]})}),e.jsx(a,{variant:"overlay",children:e.jsxs(n,{flexDir:"column",p:"16",children:[e.jsx(t,{level:"h3",children:"Overlay Card"}),e.jsx(r,{children:"Static card with shadow"})]})})]})},m={name:"Interactive",render:()=>e.jsxs(v,{justifyContent:"center",gap:"24",p:"40",children:[e.jsx(a,{onClick:()=>alert("Default clicked"),children:e.jsxs(n,{flexDir:"column",p:"16",children:[e.jsx(t,{level:"h3",children:"Default Card"}),e.jsx(r,{children:"Static card with shadow"})]})}),e.jsx(a,{variant:"flat",onClick:()=>alert("Flat clicked"),children:e.jsxs(n,{flexDir:"column",p:"16",children:[e.jsx(t,{level:"h3",children:"Flat Card"}),e.jsx(r,{children:"Static card with flat style"})]})}),e.jsx(a,{variant:"sunken",onClick:()=>alert("Sunken clicked"),children:e.jsxs(n,{flexDir:"column",p:"16",children:[e.jsx(t,{level:"h3",children:"Sunken Card"}),e.jsx(r,{children:"Static with sunken background"})]})}),e.jsx(a,{variant:"ghost",onClick:()=>alert("Ghost clicked"),children:e.jsxs(n,{flexDir:"column",p:"16",children:[e.jsx(t,{level:"h3",children:"Ghost Card"}),e.jsx(r,{children:"Static with transparent background"})]})})]})},u={name:"Link Card",render:()=>e.jsx(a,{href:"#link-target",children:e.jsxs(n,{flexDir:"column",p:"16",children:[e.jsx(t,{level:"h3",children:"Link Card"}),e.jsx(r,{children:"Renders as anchor element automatically."})]})})},f={name:"Disabled states",render:()=>e.jsxs(v,{justifyContent:"center",gap:"24",p:"40",children:[e.jsx(a,{disabled:!0,href:"#link-target",children:e.jsxs(n,{flexDir:"column",p:"16",children:[e.jsx(t,{level:"h3",children:"Default Card"}),e.jsx(r,{children:"Static card with shadow"})]})}),e.jsx(a,{variant:"flat",disabled:!0,children:e.jsxs(n,{flexDir:"column",p:"16",children:[e.jsx(t,{level:"h3",children:"Flat Card"}),e.jsx(r,{children:"Static card with flat style"})]})}),e.jsx(a,{variant:"sunken",disabled:!0,children:e.jsxs(n,{flexDir:"column",p:"16",children:[e.jsx(t,{level:"h3",children:"Sunken Card"}),e.jsx(r,{children:"Static with sunken background"})]})}),e.jsx(a,{variant:"ghost",disabled:!0,children:e.jsxs(n,{flexDir:"column",p:"16",children:[e.jsx(t,{level:"h3",children:"Ghost Card"}),e.jsx(r,{children:"Static with transparent background"})]})}),e.jsx(a,{variant:"overlay",disabled:!0,children:e.jsxs(n,{flexDir:"column",p:"16",children:[e.jsx(t,{level:"h3",children:"Overlay Card"}),e.jsx(r,{children:"Static card with shadow"})]})})]})},g={render:()=>e.jsxs(oe,{gridTemplateColumns:"repeat(3, 1fr)",gap:"16",children:[e.jsx(a,{as:"article",children:e.jsxs(l,{p:"12",gap:"4",alignItems:"flex-start",children:[e.jsx(i,{as:"code",fontSize:"14",color:"blue.50",children:"article"}),e.jsx(r,{children:"For blog posts, news"})]})}),e.jsx(a,{as:"section",variant:"flat",children:e.jsxs(l,{p:"12",gap:"4",alignItems:"flex-start",children:[e.jsx(i,{as:"code",fontSize:"14",color:"blue.50",children:"section"}),e.jsx(r,{children:"For grouped content"})]})}),e.jsx(a,{as:"aside",variant:"ghost",children:e.jsxs(l,{p:"12",gap:"4",alignItems:"flex-start",children:[e.jsx(i,{as:"code",fontSize:"14",color:"blue.50",children:"aside"}),e.jsx(r,{children:"For supplementary content"})]})})]}),parameters:{controls:{disable:!0}}},C={name:"Product Card",render:()=>e.jsx(a,{overflow:"hidden",children:e.jsxs(l,{gap:"0",children:[e.jsx(i,{bg:"blue.50",aspectRatio:"wide",w:"280"}),e.jsxs(n,{flexDir:"column",p:"16",gap:"8",alignItems:"flex-start",w:"full",children:[e.jsx(t,{level:"h4",children:"Product Name"}),e.jsx(r,{children:"$99.99"}),e.jsx(j,{variant:"primary",onClick:()=>alert("View product"),children:"Add to Cart"})]})]})}),parameters:{controls:{disable:!0}}},s={name:"Profile",render:()=>e.jsx(a,{variant:"flat",children:e.jsxs(xe,{p:"16",gap:"16",children:[e.jsx(i,{bg:"blue.60",w:"64",h:"64",borderRadius:"100",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:"0",children:e.jsx(me,{name:"user",size:"32",fill:"icon.inverse"})}),e.jsxs(n,{flexDir:"column",alignItems:"flex-start",w:"full",children:[e.jsx(t,{level:"h4",children:"Jane Doe"}),e.jsx(r,{color:"text.muted",children:"Product Designer"}),e.jsx(j,{size:"sm",mt:"12",children:"View Profile"})]})]})}),parameters:{controls:{disable:!0}}},d={name:"Stats Card",render:()=>e.jsxs(xe,{gap:"16",children:[e.jsx(a,{variant:"overlay",children:e.jsxs(l,{p:"16",gap:"4",alignItems:"flex-start",children:[e.jsx(r,{color:"text.subtlest",fontSize:"14",children:"Total Users"}),e.jsx(t,{level:"h2",children:"12,345"}),e.jsx(r,{color:"text.subtlest",fontSize:"14",children:"+12% from last month"})]})}),e.jsx(a,{variant:"overlay",children:e.jsxs(l,{p:"16",gap:"4",alignItems:"flex-start",children:[e.jsx(r,{color:"text.subtlest",fontSize:"14",children:"Revenue"}),e.jsx(t,{level:"h2",children:"$54,321"}),e.jsx(r,{color:"text.subtlest",fontSize:"14",children:"+8% from last month"})]})})]}),parameters:{controls:{disable:!0}}},c={render:()=>e.jsx(oe,{gridTemplateColumns:"repeat(3, 1fr)",gap:"16",w:"4xl",p:"40",children:[1,2,3,4,5,6].map(h=>e.jsx(a,{variant:"flat",interactive:!0,children:e.jsxs(l,{p:"16",gap:"8",alignItems:"flex-start",children:[e.jsxs(t,{level:"h4",children:["Card ",h]}),e.jsx(r,{children:"Card content goes here."})]})},`card-${h}`))}),parameters:{controls:{disable:!0}}},o={name:"Interactive vs Non-interactive",render:()=>e.jsxs(l,{gap:"24",alignItems:"flex-start",children:[e.jsxs("div",{children:[e.jsx(i,{mb:"8",fontSize:"14",fontWeight:"bold",children:"Non-Interactive (Content Container)"}),e.jsx(a,{children:e.jsxs(l,{p:"16",gap:"0",alignItems:"flex-start",children:[e.jsx(t,{level:"h4",children:"Static Card"}),e.jsx(r,{children:"This is a content container. No hover effects."}),e.jsx(j,{variant:"primary",mt:"16",onClick:()=>alert("Button clicked!"),children:"Action Inside"})]})})]}),e.jsxs("div",{children:[e.jsx(i,{mb:"8",fontSize:"14",fontWeight:"bold",children:"Interactive (Clickable Card)"}),e.jsx(a,{onClick:()=>alert("Card clicked!"),children:e.jsxs(l,{p:"16",gap:"8",alignItems:"flex-start",children:[e.jsx(t,{level:"h4",children:"Clickable Card"}),e.jsx(r,{children:"The entire card is clickable. Hover to see effects."})]})})]})]}),parameters:{controls:{disable:!0}}},x={args:{interactive:!1,disabled:!1,children:e.jsx(ue,{title:"Playground Card",description:"Adjust the controls to see different variations."})}};var k,S,b;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(b=(S=p.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var T,w,y;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(y=(w=m.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var H,D,F;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Link Card',
  render: () => <Card href="#link-target">
      <Flex flexDir="column" p={'16'}>
        <Heading level="h3">Link Card</Heading>
        <Text>Renders as anchor element automatically.</Text>
      </Flex>
    </Card>
}`,...(F=(D=u.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var I,V,B;f.parameters={...f.parameters,docs:{...(I=f.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(B=(V=f.parameters)==null?void 0:V.docs)==null?void 0:B.source}}};var z,P,G;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(G=(P=g.parameters)==null?void 0:P.docs)==null?void 0:G.source}}};var W,N,A;C.parameters={...C.parameters,docs:{...(W=C.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(A=(N=C.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};var R,L,$,O,E;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...($=(L=s.parameters)==null?void 0:L.docs)==null?void 0:$.source},description:{story:"Profile card",...(E=(O=s.parameters)==null?void 0:O.docs)==null?void 0:E.description}}};var J,U,_,M,q;d.parameters={...d.parameters,docs:{...(J=d.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(_=(U=d.parameters)==null?void 0:U.docs)==null?void 0:_.source},description:{story:"Stats card",...(q=(M=d.parameters)==null?void 0:M.docs)==null?void 0:q.description}}};var K,Q,X,Y,Z;c.parameters={...c.parameters,docs:{...(K=c.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(X=(Q=c.parameters)==null?void 0:Q.docs)==null?void 0:X.source},description:{story:"Card grid layout",...(Z=(Y=c.parameters)==null?void 0:Y.docs)==null?void 0:Z.description}}};var ee,re,ae,te,ne;o.parameters={...o.parameters,docs:{...(ee=o.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ae=(re=o.parameters)==null?void 0:re.docs)==null?void 0:ae.source},description:{story:"Interactive vs Non-interactive comparison",...(ne=(te=o.parameters)==null?void 0:te.docs)==null?void 0:ne.description}}};var le,ie,se,de,ce;x.parameters={...x.parameters,docs:{...(le=x.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    interactive: false,
    disabled: false,
    children: <CardContent title="Playground Card" description="Adjust the controls to see different variations." />
  }
}`,...(se=(ie=x.parameters)==null?void 0:ie.docs)==null?void 0:se.source},description:{story:"Interactive playground to test all props",...(ce=(de=x.parameters)==null?void 0:de.docs)==null?void 0:ce.description}}};const Fe=["Default","Interactive","LinkCard","Disabled","SemanticElements","ProductCard","ProfileCard","StatsCard","CardGrid","InteractiveComparison","Playground"];export{c as CardGrid,p as Default,f as Disabled,m as Interactive,o as InteractiveComparison,u as LinkCard,x as Playground,C as ProductCard,s as ProfileCard,g as SemanticElements,d as StatsCard,Fe as __namedExportsOrder,De as default};
