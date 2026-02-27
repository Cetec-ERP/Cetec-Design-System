import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{f as me}from"./index-FPNDRHs_.js";import{C as r}from"./Card-CnjSTl45.js";import{W as C,F as n,G as oe,V as l,c as x,B as xe,H as he}from"./Box-Do4kfhe3.js";import"./index-BCtMShv3.js";import{T as a}from"./Text-DeSZ72bP.js";import{H as t}from"./Heading-Boj4W3vs.js";import{B as j}from"./Button-C0sIXEyB.js";import{I as ue}from"./Icon-DZeLJqXX.js";import"./Spinner-gDUrdfRc.js";const He={title:"Components/Card",component:r,parameters:{layout:"centered",docs:{description:{component:`Card component for containing content with optional interactivity.

Features:
- Non-interactive by default (renders as div)
- Five visual variants: default, flat, sunken, ghost, overlay
- Polymorphic \`as\` prop for semantic elements (article, section, etc.)
- Interactive mode for clickable cards
- Auto-interactive when href or onClick is provided
- Accessible focus and disabled states`}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","flat","ghost","sunken","overlay"],description:"Visual style variants",table:{defaultValue:{summary:"default"}}},interactive:{control:"boolean",description:"Makes card interactive (clickable). Auto-set when href or onClick provided.",table:{defaultValue:{summary:"false"}}},disabled:{control:"boolean",description:"Disabled state for interactive cards"},href:{control:"text",description:"When provided, card renders as anchor and becomes interactive"},as:{control:"select",options:["div","article","section","aside","button","a"],description:"Semantic element to render as",table:{defaultValue:{summary:"div"}}},children:{control:!1,description:"Card content"}},args:{onClick:me()}},fe=({title:h,description:pe})=>e.jsxs(l,{p:"16",gap:"8",alignItems:"flex-start",children:[e.jsx(t,{level:"h3",children:h}),e.jsx(a,{children:pe})]}),p={name:"Static",render:()=>e.jsxs(C,{justifyContent:"center",gap:"24",p:"40",children:[e.jsx(r,{children:e.jsxs(n,{flexDir:"column",p:"16",children:[e.jsx(t,{level:"h3",children:"Default Card"}),e.jsx(a,{children:"Static card with shadow"})]})}),e.jsx(r,{variant:"flat",children:e.jsxs(n,{flexDir:"column",p:"16",children:[e.jsx(t,{level:"h3",children:"Flat Card"}),e.jsx(a,{children:"Static card with flat style"})]})}),e.jsx(r,{variant:"sunken",children:e.jsxs(n,{flexDir:"column",p:"16",children:[e.jsx(t,{level:"h3",children:"Sunken Card"}),e.jsx(a,{children:"Static with sunken background"})]})}),e.jsx(r,{variant:"ghost",children:e.jsxs(n,{flexDir:"column",p:"16",children:[e.jsx(t,{level:"h3",children:"Ghost Card"}),e.jsx(a,{children:"Static with transparent background"})]})}),e.jsx(r,{variant:"overlay",children:e.jsxs(n,{flexDir:"column",p:"16",children:[e.jsx(t,{level:"h3",children:"Overlay Card"}),e.jsx(a,{children:"Static card with shadow"})]})})]})},m={name:"Interactive",render:()=>e.jsxs(C,{justifyContent:"center",gap:"24",p:"40",children:[e.jsx(r,{onClick:()=>alert("Default clicked"),children:e.jsxs(n,{flexDir:"column",p:"16",children:[e.jsx(t,{level:"h3",children:"Default Card"}),e.jsx(a,{children:"Static card with shadow"})]})}),e.jsx(r,{variant:"flat",onClick:()=>alert("Flat clicked"),children:e.jsxs(n,{flexDir:"column",p:"16",children:[e.jsx(t,{level:"h3",children:"Flat Card"}),e.jsx(a,{children:"Static card with flat style"})]})}),e.jsx(r,{variant:"sunken",onClick:()=>alert("Sunken clicked"),children:e.jsxs(n,{flexDir:"column",p:"16",children:[e.jsx(t,{level:"h3",children:"Sunken Card"}),e.jsx(a,{children:"Static with sunken background"})]})}),e.jsx(r,{variant:"ghost",onClick:()=>alert("Ghost clicked"),children:e.jsxs(n,{flexDir:"column",p:"16",children:[e.jsx(t,{level:"h3",children:"Ghost Card"}),e.jsx(a,{children:"Static with transparent background"})]})})]})},u={name:"Link Card",render:()=>e.jsx(r,{href:"#link-target",children:e.jsxs(n,{flexDir:"column",p:"16",children:[e.jsx(t,{level:"h3",children:"Link Card"}),e.jsx(a,{children:"Renders as anchor element automatically."})]})})},f={name:"Disabled states",render:()=>e.jsxs(C,{justifyContent:"center",gap:"24",p:"40",children:[e.jsx(r,{disabled:!0,children:e.jsxs(n,{flexDir:"column",p:"16",children:[e.jsx(t,{level:"h3",children:"Default Card"}),e.jsx(a,{children:"Static card with shadow"})]})}),e.jsx(r,{variant:"flat",disabled:!0,children:e.jsxs(n,{flexDir:"column",p:"16",children:[e.jsx(t,{level:"h3",children:"Flat Card"}),e.jsx(a,{children:"Static card with flat style"})]})}),e.jsx(r,{variant:"sunken",disabled:!0,children:e.jsxs(n,{flexDir:"column",p:"16",children:[e.jsx(t,{level:"h3",children:"Sunken Card"}),e.jsx(a,{children:"Static with sunken background"})]})}),e.jsx(r,{variant:"ghost",disabled:!0,children:e.jsxs(n,{flexDir:"column",p:"16",children:[e.jsx(t,{level:"h3",children:"Ghost Card"}),e.jsx(a,{children:"Static with transparent background"})]})}),e.jsx(r,{variant:"overlay",disabled:!0,children:e.jsxs(n,{flexDir:"column",p:"16",children:[e.jsx(t,{level:"h3",children:"Overlay Card"}),e.jsx(a,{children:"Static card with shadow"})]})})]})},g={render:()=>e.jsxs(oe,{gridTemplateColumns:"repeat(3, 1fr)",gap:"16",children:[e.jsx(r,{as:"article",children:e.jsxs(l,{p:"12",gap:"4",alignItems:"flex-start",children:[e.jsx("code",{className:x({fontSize:"14",color:"blue.50"}),children:"article"}),e.jsx(a,{children:"For blog posts, news"})]})}),e.jsx(r,{as:"section",variant:"flat",children:e.jsxs(l,{p:"12",gap:"4",alignItems:"flex-start",children:[e.jsx("code",{className:x({fontSize:"14",color:"blue.50"}),children:"section"}),e.jsx(a,{children:"For grouped content"})]})}),e.jsx(r,{as:"aside",variant:"ghost",children:e.jsxs(l,{p:"12",gap:"4",alignItems:"flex-start",children:[e.jsx("code",{className:x({fontSize:"14",color:"blue.50"}),children:"aside"}),e.jsx(a,{children:"For supplementary content"})]})})]}),parameters:{controls:{disable:!0}}},v={name:"Product Card",render:()=>e.jsx(r,{overflow:"hidden",children:e.jsxs(l,{gap:"0",children:[e.jsx(xe,{bg:"blue.50",aspectRatio:"wide",w:"280"}),e.jsxs(n,{flexDir:"column",p:"16",gap:"8",alignItems:"flex-start",w:"full",children:[e.jsx(t,{level:"h4",children:"Product Name"}),e.jsx(a,{children:"$99.99"}),e.jsx(j,{variant:"primary",onClick:()=>alert("View product"),children:"Add to Cart"})]})]})}),parameters:{controls:{disable:!0}}},s={name:"Profile",render:()=>e.jsx(r,{variant:"flat",children:e.jsxs(he,{p:"16",gap:"16",children:[e.jsx(xe,{bg:"blue.60",w:"64",h:"64",borderRadius:"100",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:"0",children:e.jsx(ue,{name:"user",size:"32",fill:"icon.inverse"})}),e.jsxs(n,{flexDir:"column",alignItems:"flex-start",w:"full",children:[e.jsx(t,{level:"h4",children:"Jane Doe"}),e.jsx(a,{color:"text.muted",children:"Product Designer"}),e.jsx(j,{size:"sm",mt:"12",children:"View Profile"})]})]})}),parameters:{controls:{disable:!0}}},i={name:"Stats Card",render:()=>e.jsxs(he,{gap:"16",children:[e.jsx(r,{variant:"overlay",children:e.jsxs(l,{p:"16",gap:"4",alignItems:"flex-start",children:[e.jsx(a,{color:"text.subtlest",fontSize:"14",children:"Total Users"}),e.jsx(t,{level:"h2",children:"12,345"}),e.jsx(a,{color:"text.subtlest",fontSize:"14",children:"+12% from last month"})]})}),e.jsx(r,{variant:"overlay",children:e.jsxs(l,{p:"16",gap:"4",alignItems:"flex-start",children:[e.jsx(a,{color:"text.subtlest",fontSize:"14",children:"Revenue"}),e.jsx(t,{level:"h2",children:"$54,321"}),e.jsx(a,{color:"text.subtlest",fontSize:"14",children:"+8% from last month"})]})})]}),parameters:{controls:{disable:!0}}},c={render:()=>e.jsx(oe,{gridTemplateColumns:"repeat(3, 1fr)",gap:"16",w:"4xl",p:"40",children:[1,2,3,4,5,6].map(h=>e.jsx(r,{variant:"flat",interactive:!0,children:e.jsxs(l,{p:"16",gap:"8",alignItems:"flex-start",children:[e.jsxs(t,{level:"h4",children:["Card ",h]}),e.jsx(a,{children:"Card content goes here."})]})},h))}),parameters:{controls:{disable:!0}}},d={name:"Interactive vs Non-interactive",render:()=>e.jsxs(l,{gap:"24",alignItems:"flex-start",children:[e.jsxs("div",{children:[e.jsx("div",{className:x({mb:"8",fontSize:"14",fontWeight:"bold"}),children:"Non-Interactive (Content Container)"}),e.jsx(r,{children:e.jsxs(l,{p:"16",gap:"0",alignItems:"flex-start",children:[e.jsx(t,{level:"h4",children:"Static Card"}),e.jsx(a,{children:"This is a content container. No hover effects."}),e.jsx(j,{variant:"primary",mt:"16",onClick:()=>alert("Button clicked!"),children:"Action Inside"})]})})]}),e.jsxs("div",{children:[e.jsx("div",{className:x({mb:"8",fontSize:"14",fontWeight:"bold"}),children:"Interactive (Clickable Card)"}),e.jsx(r,{onClick:()=>alert("Card clicked!"),children:e.jsxs(l,{p:"16",gap:"8",alignItems:"flex-start",children:[e.jsx(t,{level:"h4",children:"Clickable Card"}),e.jsx(a,{children:"The entire card is clickable. Hover to see effects."})]})})]})]}),parameters:{controls:{disable:!0}}},o={args:{interactive:!1,disabled:!1,children:e.jsx(fe,{title:"Playground Card",description:"Adjust the controls to see different variations."})}};var k,S,b;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(F=(D=u.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var I,V,z;f.parameters={...f.parameters,docs:{...(I=f.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Disabled states',
  render: () => <Wrap justifyContent="center" gap="24" p="40">
      <Card disabled>
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
}`,...(z=(V=f.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};var N,P,G;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <Grid gridTemplateColumns="repeat(3, 1fr)" gap="16">
      <Card as="article">
        <VStack p="12" gap="4" alignItems="flex-start">
          <code className={css({
          fontSize: '14',
          color: 'blue.50'
        })}>
            article
          </code>
          <Text>For blog posts, news</Text>
        </VStack>
      </Card>
      <Card as="section" variant="flat">
        <VStack p="12" gap="4" alignItems="flex-start">
          <code className={css({
          fontSize: '14',
          color: 'blue.50'
        })}>
            section
          </code>
          <Text>For grouped content</Text>
        </VStack>
      </Card>
      <Card as="aside" variant="ghost">
        <VStack p="12" gap="4" alignItems="flex-start">
          <code className={css({
          fontSize: '14',
          color: 'blue.50'
        })}>
            aside
          </code>
          <Text>For supplementary content</Text>
        </VStack>
      </Card>
    </Grid>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(G=(P=g.parameters)==null?void 0:P.docs)==null?void 0:G.source}}};var B,W,A;v.parameters={...v.parameters,docs:{...(B=v.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(A=(W=v.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};var R,L,O,E,$;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(O=(L=s.parameters)==null?void 0:L.docs)==null?void 0:O.source},description:{story:"Profile card",...($=(E=s.parameters)==null?void 0:E.docs)==null?void 0:$.description}}};var J,U,_,M,q;i.parameters={...i.parameters,docs:{...(J=i.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(_=(U=i.parameters)==null?void 0:U.docs)==null?void 0:_.source},description:{story:"Stats card",...(q=(M=i.parameters)==null?void 0:M.docs)==null?void 0:q.description}}};var K,Q,X,Y,Z;c.parameters={...c.parameters,docs:{...(K=c.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <Grid gridTemplateColumns="repeat(3, 1fr)" gap="16" w="4xl" p="40">
      {[1, 2, 3, 4, 5, 6].map(i => <Card key={i} variant="flat" interactive>
          <VStack p="16" gap="8" alignItems="flex-start">
            <Heading level="h4">Card {i}</Heading>
            <Text>Card content goes here.</Text>
          </VStack>
        </Card>)}
    </Grid>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(X=(Q=c.parameters)==null?void 0:Q.docs)==null?void 0:X.source},description:{story:"Card grid layout",...(Z=(Y=c.parameters)==null?void 0:Y.docs)==null?void 0:Z.description}}};var ee,ae,re,te,ne;d.parameters={...d.parameters,docs:{...(ee=d.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: 'Interactive vs Non-interactive',
  render: () => <VStack gap="24" alignItems="flex-start">
      <div>
        <div className={css({
        mb: '8',
        fontSize: '14',
        fontWeight: 'bold'
      })}>
          Non-Interactive (Content Container)
        </div>
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
        <div className={css({
        mb: '8',
        fontSize: '14',
        fontWeight: 'bold'
      })}>
          Interactive (Clickable Card)
        </div>
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
}`,...(re=(ae=d.parameters)==null?void 0:ae.docs)==null?void 0:re.source},description:{story:"Interactive vs Non-interactive comparison",...(ne=(te=d.parameters)==null?void 0:te.docs)==null?void 0:ne.description}}};var le,se,ie,ce,de;o.parameters={...o.parameters,docs:{...(le=o.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    interactive: false,
    disabled: false,
    children: <CardContent title="Playground Card" description="Adjust the controls to see different variations." />
  }
}`,...(ie=(se=o.parameters)==null?void 0:se.docs)==null?void 0:ie.source},description:{story:"Interactive playground to test all props",...(de=(ce=o.parameters)==null?void 0:ce.docs)==null?void 0:de.description}}};const De=["Default","Interactive","LinkCard","Disabled","SemanticElements","ProductCard","ProfileCard","StatsCard","CardGrid","InteractiveComparison","Playground"];export{c as CardGrid,p as Default,f as Disabled,m as Interactive,d as InteractiveComparison,u as LinkCard,o as Playground,v as ProductCard,s as ProfileCard,g as SemanticElements,i as StatsCard,De as __namedExportsOrder,He as default};
