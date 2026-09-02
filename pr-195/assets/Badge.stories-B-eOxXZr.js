import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as ae}from"./index-BKyFwriW.js";import{w as oe,e as I}from"./index-DPYJpPba.js";import{B as s,V as z,F as o,G as se}from"./dsComponent-BYUIyF_R.js";import{B as r}from"./Button-Bf2hC955.js";import{I as t}from"./Icon-Dq9uSEeo.js";import"./IconConfig-CikP2Rer.js";import{I as b}from"./IconButton-BcWUHMy5.js";import{T as a}from"./Text-DTL6959x.js";import{B as n}from"./Badge-CePMooOl.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Spinner-B6GigztE.js";import"./FieldContext-D6URyQos.js";import"./Tooltip--hlfaos6.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";const be={title:"Components/Badge",component:n,tags:["autodocs"],argTypes:{count:{control:"number",description:"Number to show in badge. If provided, switches to count mode."},showZero:{control:"boolean",description:"Show badge when count is zero"},overflowCount:{control:"number",description:'Max count to show before displaying "99+"'},variant:{control:"select",options:["neutral","subtle","bold","inverse","success","warning","danger","info"],description:"Color scheme of the badge"},size:{control:"select",options:["sm","md","lg","xl"],description:"Size of the badge"}},args:{size:"md",variant:"danger"}},c={name:"Dot (Standalone)",render:()=>e.jsxs(s,{display:"flex",gap:"16",alignItems:"center",children:[e.jsx(n,{size:"sm"}),e.jsx(n,{size:"md"}),e.jsx(n,{size:"lg"}),e.jsx(n,{size:"xl"})]})},d={name:"Test: data-ds-component",render:()=>e.jsxs(z,{alignItems:"start",gap:"8",children:[e.jsx(n,{"aria-label":"Default badge",count:5}),e.jsx(n,{"aria-label":"Overridden badge",count:5,"data-ds-component":"NotificationCount"})]}),play:async({canvasElement:i})=>{const l=oe(i);I(l.getByLabelText("Default badge")).toHaveAttribute("data-ds-component","Badge"),I(l.getByLabelText("Overridden badge")).toHaveAttribute("data-ds-component","NotificationCount")},parameters:{controls:{disable:!0}}},x={name:"Dot (With Children)",render:()=>e.jsxs(s,{display:"flex",gap:"16",alignItems:"center",children:[e.jsx(n,{children:e.jsx(t,{name:"envelope",size:"24"})}),e.jsx(n,{children:e.jsx(t,{name:"bell",size:"24"})}),e.jsx(n,{children:e.jsx(t,{name:"message",size:"24"})})]})},m={name:"Count (Standalone)",render:()=>e.jsxs(z,{gap:"24",children:[e.jsxs(o,{gap:"16",children:[e.jsx(n,{count:5,size:"sm"}),e.jsx(n,{count:12,size:"md"}),e.jsx(n,{count:99,size:"lg"}),e.jsx(n,{count:999,size:"xl"})]}),e.jsxs(o,{gap:"16",children:[e.jsxs(r,{children:["Button ",e.jsx(n,{count:5})]}),e.jsxs(r,{size:"lg",variant:"primary",gap:"8",children:["Button ",e.jsx(n,{count:12})]}),e.jsxs(r,{size:"sm",variant:"ghost",children:["Button ",e.jsx(n,{count:99,size:"sm"})]})]})]})},g={name:"Count (With Children)",render:()=>e.jsxs(z,{w:"fit",gap:"16",children:[e.jsxs(s,{display:"flex",gap:"16",alignItems:"center",children:[e.jsx(n,{count:5,children:e.jsx(t,{name:"envelope",size:"24"})}),e.jsx(n,{count:12,children:e.jsx(t,{name:"bell",size:"24"})}),e.jsx(n,{count:99,children:e.jsx(t,{name:"message",size:"24"})})]}),e.jsxs(s,{display:"flex",gap:"16",alignItems:"center",children:[e.jsx(n,{count:5,children:e.jsx(r,{children:"Button"})}),e.jsx(n,{count:12,children:e.jsx(r,{size:"lg",variant:"primary",children:"Button"})}),e.jsx(n,{count:99,size:"sm",children:e.jsx(r,{size:"sm",variant:"ghost",children:"Button"})})]})]})},u={render:()=>e.jsxs(s,{display:"flex",flexDir:"column",gap:"6",children:[e.jsxs(s,{display:"flex",flexDir:"column",gap:"2",children:[e.jsx(a,{fontWeight:"bold",children:"Dot Mode:"}),e.jsxs(s,{display:"flex",gap:"16",alignItems:"center",children:[e.jsx(n,{size:"sm",children:e.jsx(t,{name:"envelope",size:"20"})}),e.jsx(n,{size:"md",children:e.jsx(t,{name:"envelope",size:"24"})}),e.jsx(n,{size:"lg",children:e.jsx(t,{name:"envelope",size:"32"})})]})]}),e.jsxs(s,{display:"flex",flexDir:"column",gap:"2",children:[e.jsx(a,{fontWeight:"bold",children:"Count Mode:"}),e.jsxs(s,{display:"flex",gap:"16",alignItems:"center",children:[e.jsx(n,{count:5,size:"sm",children:e.jsx(t,{name:"envelope",size:"20"})}),e.jsx(n,{count:12,size:"md",children:e.jsx(t,{name:"envelope",size:"24"})}),e.jsx(n,{count:99,size:"lg",children:e.jsx(t,{name:"envelope",size:"32"})})]})]})]})},p={render:()=>e.jsxs(o,{flexDir:"column",gap:"16",children:[e.jsxs(o,{flexDir:"column",gap:"12",children:[e.jsx(a,{fontWeight:"bold",children:"Dot Mode:"}),e.jsxs(o,{gap:"16",alignItems:"center",flexWrap:"wrap",children:[e.jsxs(o,{flexDir:"column",alignItems:"center",gap:"1",children:[e.jsx(n,{variant:"neutral",children:e.jsx(t,{name:"envelope",size:"24"})}),e.jsx(a,{fontSize:"12",color:"text.muted",children:"neutral"})]}),e.jsxs(o,{flexDir:"column",alignItems:"center",gap:"1",children:[e.jsx(n,{variant:"subtle",children:e.jsx(t,{name:"envelope",size:"24"})}),e.jsx(a,{fontSize:"12",color:"text.muted",children:"subtle"})]}),e.jsxs(o,{flexDir:"column",alignItems:"center",gap:"1",children:[e.jsx(n,{variant:"inverse",children:e.jsx(t,{name:"envelope",size:"24"})}),e.jsx(a,{fontSize:"12",color:"text.muted",children:"inverse"})]}),e.jsxs(o,{flexDir:"column",alignItems:"center",gap:"1",children:[e.jsx(n,{variant:"bold",children:e.jsx(t,{name:"envelope",size:"24"})}),e.jsx(a,{fontSize:"12",color:"text.muted",children:"bold"})]}),e.jsxs(o,{flexDir:"column",alignItems:"center",gap:"1",children:[e.jsx(n,{variant:"success",children:e.jsx(t,{name:"envelope",size:"24"})}),e.jsx(a,{fontSize:"12",color:"text.muted",children:"success"})]}),e.jsxs(o,{flexDir:"column",alignItems:"center",gap:"1",children:[e.jsx(n,{variant:"warning",children:e.jsx(t,{name:"envelope",size:"24"})}),e.jsx(a,{fontSize:"12",color:"text.muted",children:"warning"})]}),e.jsxs(o,{flexDir:"column",alignItems:"center",gap:"1",children:[e.jsx(n,{variant:"danger",children:e.jsx(t,{name:"envelope",size:"24"})}),e.jsx(a,{fontSize:"12",color:"text.muted",children:"danger"})]}),e.jsxs(o,{flexDir:"column",alignItems:"center",gap:"1",children:[e.jsx(n,{variant:"info",children:e.jsx(t,{name:"envelope",size:"24"})}),e.jsx(a,{fontSize:"12",color:"text.muted",children:"info"})]})]})]}),e.jsxs(o,{flexDir:"column",gap:"12",children:[e.jsx(a,{fontWeight:"bold",children:"Count Mode:"}),e.jsxs(o,{gap:"16",alignItems:"center",flexWrap:"wrap",children:[e.jsxs(o,{flexDir:"column",alignItems:"center",gap:"1",children:[e.jsx(n,{count:9,variant:"neutral",children:e.jsx(t,{name:"envelope",size:"24"})}),e.jsx(a,{fontSize:"12",color:"text.muted",children:"neutral"})]}),e.jsxs(o,{flexDir:"column",alignItems:"center",gap:"1",children:[e.jsx(n,{count:6,variant:"subtle",children:e.jsx(t,{name:"envelope",size:"24"})}),e.jsx(a,{fontSize:"12",color:"text.muted",children:"subtle"})]}),e.jsxs(o,{flexDir:"column",alignItems:"center",gap:"1",children:[e.jsx(n,{count:8,variant:"bold",children:e.jsx(t,{name:"envelope",size:"24"})}),e.jsx(a,{fontSize:"12",color:"text.muted",children:"bold"})]}),e.jsxs(o,{flexDir:"column",alignItems:"center",gap:"1",children:[e.jsx(n,{count:4,variant:"inverse",children:e.jsx(t,{name:"envelope",size:"24"})}),e.jsx(a,{fontSize:"12",color:"text.muted",children:"inverse"})]}),e.jsxs(o,{flexDir:"column",alignItems:"center",gap:"1",children:[e.jsx(n,{count:3,variant:"success",children:e.jsx(t,{name:"envelope",size:"24"})}),e.jsx(a,{fontSize:"12",color:"text.muted",children:"success"})]}),e.jsxs(o,{flexDir:"column",alignItems:"center",gap:"1",children:[e.jsx(n,{count:7,variant:"warning",children:e.jsx(t,{name:"envelope",size:"24"})}),e.jsx(a,{fontSize:"12",color:"text.muted",children:"warning"})]}),e.jsxs(o,{flexDir:"column",alignItems:"center",gap:"1",children:[e.jsx(n,{count:5,variant:"danger",children:e.jsx(t,{name:"envelope",size:"24"})}),e.jsx(a,{fontSize:"12",color:"text.muted",children:"danger"})]}),e.jsxs(o,{flexDir:"column",alignItems:"center",gap:"1",children:[e.jsx(n,{count:2,variant:"info",children:e.jsx(t,{name:"envelope",size:"24"})}),e.jsx(a,{fontSize:"12",color:"text.muted",children:"info"})]})]})]})]})},f={render:()=>e.jsxs(o,{flexDir:"column",gap:"12",children:[e.jsx(a,{children:"Default overflow at 99:"}),e.jsxs(o,{gap:"16",alignItems:"center",children:[e.jsx(n,{count:99,children:e.jsx(t,{name:"envelope",size:"24"})}),e.jsx(n,{count:100,children:e.jsx(t,{name:"envelope",size:"24"})}),e.jsx(n,{count:999,children:e.jsx(t,{name:"envelope",size:"24"})})]}),e.jsx(a,{children:"Custom overflow at 10:"}),e.jsxs(o,{gap:"16",alignItems:"center",children:[e.jsx(n,{count:10,overflowCount:10,children:e.jsx(t,{name:"envelope",size:"24"})}),e.jsx(n,{count:11,overflowCount:10,children:e.jsx(t,{name:"envelope",size:"24"})}),e.jsx(n,{count:100,overflowCount:10,children:e.jsx(t,{name:"envelope",size:"24"})})]})]})},j={render:()=>e.jsxs(se,{gridTemplateColumns:"auto auto auto",gap:"16",w:"fit",children:[e.jsx(a,{children:"showZero=false:"}),e.jsx(n,{count:0,children:e.jsx(t,{name:"envelope",size:"24"})}),e.jsx(a,{textStyle:"mono.xs",color:"text.muted",children:"(badge hidden)"}),e.jsx(a,{children:"showZero=true:"}),e.jsx(n,{count:0,showZero:!0,children:e.jsx(t,{name:"envelope",size:"24"})}),e.jsx(a,{textStyle:"mono.xs",color:"text.muted",children:"(badge visible)"})]})},re=()=>{const[i,l]=ae.useState(5);return e.jsxs(s,{display:"flex",flexDir:"column",gap:"12",children:[e.jsx(a,{children:"Click buttons to see animation on count change:"}),e.jsxs(s,{display:"flex",gap:"4",alignItems:"center",children:[e.jsx(n,{count:i,mx:"16",children:e.jsx(t,{name:"envelope",size:"32"})}),e.jsx(b,{variant:"hollow",size:"sm",iconName:"minus",altText:"Decrease count",onClick:()=>l(v=>Math.max(0,v-1))}),e.jsx(b,{variant:"hollow",size:"sm",iconName:"plus",altText:"Increase count",onClick:()=>l(v=>v+1)})]}),e.jsxs(a,{color:"text.muted",children:["Current count: ",i]})]})},h={render:()=>e.jsx(re,{})},B={render:()=>e.jsxs(s,{display:"flex",flexDir:"column",gap:"12",children:[e.jsxs(s,{display:"flex",flexDir:"column",gap:"12",children:[e.jsx(a,{fontWeight:"bold",children:"Notifications"}),e.jsxs(s,{display:"flex",gap:"16",alignItems:"center",children:[e.jsx(n,{count:3,children:e.jsx(t,{name:"bell",size:"24"})}),e.jsx(n,{count:12,children:e.jsx(t,{name:"envelope",size:"24"})}),e.jsx(n,{count:99,children:e.jsx(t,{name:"message",size:"24"})})]})]}),e.jsxs(s,{display:"flex",flexDir:"column",gap:"8",children:[e.jsx(a,{fontWeight:"bold",children:"Status Indicators"}),e.jsxs(s,{display:"flex",gap:"16",alignItems:"center",children:[e.jsx(n,{variant:"success",children:e.jsx(t,{name:"user",size:"24"})}),e.jsx(n,{variant:"warning",children:e.jsx(t,{name:"user",size:"24"})}),e.jsx(n,{variant:"neutral",children:e.jsx(t,{name:"user",size:"24"})})]})]}),e.jsxs(s,{display:"flex",flexDir:"column",gap:"8",children:[e.jsx(a,{fontWeight:"bold",children:"Standalone Badges"}),e.jsxs(s,{display:"flex",gap:"8",alignItems:"center",children:[e.jsx(n,{variant:"danger"}),e.jsx(n,{variant:"success"}),e.jsx(n,{variant:"info"}),e.jsx(n,{count:5,variant:"danger"}),e.jsx(n,{count:42,variant:"info"})]})]})]})};var D,S,T;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Dot (Standalone)',
  render: () => <Box display="flex" gap="16" alignItems="center">
      <Badge size="sm" />
      <Badge size="md" />
      <Badge size="lg" />
      <Badge size="xl" />
    </Box>
}`,...(T=(S=c.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var F,y,w;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Test: data-ds-component',
  render: () => <VStack alignItems="start" gap="8">
      <Badge aria-label="Default badge" count={5} />
      <Badge aria-label="Overridden badge" count={5} data-ds-component="NotificationCount" />
    </VStack>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByLabelText('Default badge')).toHaveAttribute('data-ds-component', 'Badge');
    expect(canvas.getByLabelText('Overridden badge')).toHaveAttribute('data-ds-component', 'NotificationCount');
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(w=(y=d.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var C,W,k;x.parameters={...x.parameters,docs:{...(C=x.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Dot (With Children)',
  render: () => <Box display="flex" gap="16" alignItems="center">
      <Badge>
        <Icon name="envelope" size="24" />
      </Badge>
      <Badge>
        <Icon name="bell" size="24" />
      </Badge>
      <Badge>
        <Icon name="message" size="24" />
      </Badge>
    </Box>
}`,...(k=(W=x.parameters)==null?void 0:W.docs)==null?void 0:k.source}}};var A,M,N;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Count (Standalone)',
  render: () => <VStack gap="24">
      <Flex gap="16">
        <Badge count={5} size="sm" />
        <Badge count={12} size="md" />
        <Badge count={99} size="lg" />
        <Badge count={999} size="xl" />
      </Flex>
      <Flex gap="16">
        <Button>
          Button <Badge count={5} />
        </Button>
        <Button size="lg" variant="primary" gap="8">
          Button <Badge count={12} />
        </Button>
        <Button size="sm" variant="ghost">
          Button <Badge count={99} size="sm" />
        </Button>
      </Flex>
    </VStack>
}`,...(N=(M=m.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var Z,V,O;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: 'Count (With Children)',
  render: () => <VStack w="fit" gap="16">
      <Box display="flex" gap="16" alignItems="center">
        <Badge count={5}>
          <Icon name="envelope" size="24" />
        </Badge>
        <Badge count={12}>
          <Icon name="bell" size="24" />
        </Badge>
        <Badge count={99}>
          <Icon name="message" size="24" />
        </Badge>
      </Box>
      <Box display="flex" gap="16" alignItems="center">
        <Badge count={5}>
          <Button>Button</Button>
        </Badge>
        <Badge count={12}>
          <Button size="lg" variant="primary">
            Button
          </Button>
        </Badge>
        <Badge count={99} size="sm">
          <Button size="sm" variant="ghost">
            Button
          </Button>
        </Badge>
      </Box>
    </VStack>
}`,...(O=(V=g.parameters)==null?void 0:V.docs)==null?void 0:O.source}}};var E,G,H;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDir="column" gap="6">
      <Box display="flex" flexDir="column" gap="2">
        <Text fontWeight="bold">Dot Mode:</Text>
        <Box display="flex" gap="16" alignItems="center">
          <Badge size="sm">
            <Icon name="envelope" size="20" />
          </Badge>
          <Badge size="md">
            <Icon name="envelope" size="24" />
          </Badge>
          <Badge size="lg">
            <Icon name="envelope" size="32" />
          </Badge>
        </Box>
      </Box>
      <Box display="flex" flexDir="column" gap="2">
        <Text fontWeight="bold">Count Mode:</Text>
        <Box display="flex" gap="16" alignItems="center">
          <Badge count={5} size="sm">
            <Icon name="envelope" size="20" />
          </Badge>
          <Badge count={12} size="md">
            <Icon name="envelope" size="24" />
          </Badge>
          <Badge count={99} size="lg">
            <Icon name="envelope" size="32" />
          </Badge>
        </Box>
      </Box>
    </Box>
}`,...(H=(G=u.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var L,U,_;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <Flex flexDir="column" gap="16">
      <Flex flexDir="column" gap="12">
        <Text fontWeight="bold">Dot Mode:</Text>
        <Flex gap="16" alignItems="center" flexWrap="wrap">
          <Flex flexDir="column" alignItems="center" gap="1">
            <Badge variant="neutral">
              <Icon name="envelope" size="24" />
            </Badge>
            <Text fontSize="12" color="text.muted">
              neutral
            </Text>
          </Flex>
          <Flex flexDir="column" alignItems="center" gap="1">
            <Badge variant="subtle">
              <Icon name="envelope" size="24" />
            </Badge>
            <Text fontSize="12" color="text.muted">
              subtle
            </Text>
          </Flex>
          <Flex flexDir="column" alignItems="center" gap="1">
            <Badge variant="inverse">
              <Icon name="envelope" size="24" />
            </Badge>
            <Text fontSize="12" color="text.muted">
              inverse
            </Text>
          </Flex>
          <Flex flexDir="column" alignItems="center" gap="1">
            <Badge variant="bold">
              <Icon name="envelope" size="24" />
            </Badge>
            <Text fontSize="12" color="text.muted">
              bold
            </Text>
          </Flex>
          <Flex flexDir="column" alignItems="center" gap="1">
            <Badge variant="success">
              <Icon name="envelope" size="24" />
            </Badge>
            <Text fontSize="12" color="text.muted">
              success
            </Text>
          </Flex>
          <Flex flexDir="column" alignItems="center" gap="1">
            <Badge variant="warning">
              <Icon name="envelope" size="24" />
            </Badge>
            <Text fontSize="12" color="text.muted">
              warning
            </Text>
          </Flex>
          <Flex flexDir="column" alignItems="center" gap="1">
            <Badge variant="danger">
              <Icon name="envelope" size="24" />
            </Badge>
            <Text fontSize="12" color="text.muted">
              danger
            </Text>
          </Flex>
          <Flex flexDir="column" alignItems="center" gap="1">
            <Badge variant="info">
              <Icon name="envelope" size="24" />
            </Badge>
            <Text fontSize="12" color="text.muted">
              info
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex flexDir="column" gap="12">
        <Text fontWeight="bold">Count Mode:</Text>
        <Flex gap="16" alignItems="center" flexWrap="wrap">
          <Flex flexDir="column" alignItems="center" gap="1">
            <Badge count={9} variant="neutral">
              <Icon name="envelope" size="24" />
            </Badge>
            <Text fontSize="12" color="text.muted">
              neutral
            </Text>
          </Flex>
          <Flex flexDir="column" alignItems="center" gap="1">
            <Badge count={6} variant="subtle">
              <Icon name="envelope" size="24" />
            </Badge>
            <Text fontSize="12" color="text.muted">
              subtle
            </Text>
          </Flex>
          <Flex flexDir="column" alignItems="center" gap="1">
            <Badge count={8} variant="bold">
              <Icon name="envelope" size="24" />
            </Badge>
            <Text fontSize="12" color="text.muted">
              bold
            </Text>
          </Flex>
          <Flex flexDir="column" alignItems="center" gap="1">
            <Badge count={4} variant="inverse">
              <Icon name="envelope" size="24" />
            </Badge>
            <Text fontSize="12" color="text.muted">
              inverse
            </Text>
          </Flex>
          <Flex flexDir="column" alignItems="center" gap="1">
            <Badge count={3} variant="success">
              <Icon name="envelope" size="24" />
            </Badge>
            <Text fontSize="12" color="text.muted">
              success
            </Text>
          </Flex>
          <Flex flexDir="column" alignItems="center" gap="1">
            <Badge count={7} variant="warning">
              <Icon name="envelope" size="24" />
            </Badge>
            <Text fontSize="12" color="text.muted">
              warning
            </Text>
          </Flex>
          <Flex flexDir="column" alignItems="center" gap="1">
            <Badge count={5} variant="danger">
              <Icon name="envelope" size="24" />
            </Badge>
            <Text fontSize="12" color="text.muted">
              danger
            </Text>
          </Flex>
          <Flex flexDir="column" alignItems="center" gap="1">
            <Badge count={2} variant="info">
              <Icon name="envelope" size="24" />
            </Badge>
            <Text fontSize="12" color="text.muted">
              info
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
}`,...(_=(U=p.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};var R,q,J;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <Flex flexDir="column" gap="12">
      <Text>Default overflow at 99:</Text>
      <Flex gap="16" alignItems="center">
        <Badge count={99}>
          <Icon name="envelope" size="24" />
        </Badge>
        <Badge count={100}>
          <Icon name="envelope" size="24" />
        </Badge>
        <Badge count={999}>
          <Icon name="envelope" size="24" />
        </Badge>
      </Flex>
      <Text>Custom overflow at 10:</Text>
      <Flex gap="16" alignItems="center">
        <Badge count={10} overflowCount={10}>
          <Icon name="envelope" size="24" />
        </Badge>
        <Badge count={11} overflowCount={10}>
          <Icon name="envelope" size="24" />
        </Badge>
        <Badge count={100} overflowCount={10}>
          <Icon name="envelope" size="24" />
        </Badge>
      </Flex>
    </Flex>
}`,...(J=(q=f.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var K,P,Q;j.parameters={...j.parameters,docs:{...(K=j.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <Grid gridTemplateColumns="auto auto auto" gap="16" w="fit">
      <Text>showZero=false:</Text>
      <Badge count={0}>
        <Icon name="envelope" size="24" />
      </Badge>
      <Text textStyle="mono.xs" color="text.muted">
        (badge hidden)
      </Text>

      <Text>showZero=true:</Text>
      <Badge count={0} showZero>
        <Icon name="envelope" size="24" />
      </Badge>
      <Text textStyle="mono.xs" color="text.muted">
        (badge visible)
      </Text>
    </Grid>
}`,...(Q=(P=j.parameters)==null?void 0:P.docs)==null?void 0:Q.source}}};var X,Y,$;h.parameters={...h.parameters,docs:{...(X=h.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <AnimationDemo />
}`,...($=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};var ee,ne,te;B.parameters={...B.parameters,docs:{...(ee=B.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDir="column" gap="12">
      <Box display="flex" flexDir="column" gap="12">
        <Text fontWeight="bold">Notifications</Text>
        <Box display="flex" gap="16" alignItems="center">
          <Badge count={3}>
            <Icon name="bell" size="24" />
          </Badge>
          <Badge count={12}>
            <Icon name="envelope" size="24" />
          </Badge>
          <Badge count={99}>
            <Icon name="message" size="24" />
          </Badge>
        </Box>
      </Box>
      <Box display="flex" flexDir="column" gap="8">
        <Text fontWeight="bold">Status Indicators</Text>
        <Box display="flex" gap="16" alignItems="center">
          <Badge variant="success">
            <Icon name="user" size="24" />
          </Badge>
          <Badge variant="warning">
            <Icon name="user" size="24" />
          </Badge>
          <Badge variant="neutral">
            <Icon name="user" size="24" />
          </Badge>
        </Box>
      </Box>
      <Box display="flex" flexDir="column" gap="8">
        <Text fontWeight="bold">Standalone Badges</Text>
        <Box display="flex" gap="8" alignItems="center">
          <Badge variant="danger" />
          <Badge variant="success" />
          <Badge variant="info" />
          <Badge count={5} variant="danger" />
          <Badge count={42} variant="info" />
        </Box>
      </Box>
    </Box>
}`,...(te=(ne=B.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};const De=["DotStandalone","DsComponentAttribute","DotWithChildren","CountStandalone","CountWithChildren","Sizes","variants","OverflowCount","ShowZero","Animation","UseCases"];export{h as Animation,m as CountStandalone,g as CountWithChildren,c as DotStandalone,x as DotWithChildren,d as DsComponentAttribute,f as OverflowCount,j as ShowZero,u as Sizes,B as UseCases,De as __namedExportsOrder,be as default,p as variants};
