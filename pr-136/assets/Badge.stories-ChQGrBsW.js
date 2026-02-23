import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as Y}from"./index-BCtMShv3.js";import{B as n}from"./Badge-CSN2ydID.js";import{B as o,V as X,F as s,G as $}from"./Box-Do4kfhe3.js";import{T as a}from"./Text-DeSZ72bP.js";import{I as t}from"./Icon-e7_Gs79q.js";import{B as r}from"./Button-BVq08bnu.js";import{I as z}from"./IconButton-Dw3P7sci.js";import"./Spinner-gDUrdfRc.js";const xe={title:"Components/Badge",component:n,tags:["autodocs"],argTypes:{count:{control:"number",description:"Number to show in badge. If provided, switches to count mode."},showZero:{control:"boolean",description:"Show badge when count is zero"},overflowCount:{control:"number",description:'Max count to show before displaying "99+"'},variant:{control:"select",options:["neutral","subtle","bold","inverse","success","warning","danger","info"],description:"Color scheme of the badge"},size:{control:"select",options:["sm","md","lg"],description:"Size of the badge"}},args:{size:"md",variant:"danger"}},l={name:"Dot (Standalone)",render:()=>e.jsxs(o,{display:"flex",gap:"16",alignItems:"center",children:[e.jsx(n,{size:"sm"}),e.jsx(n,{size:"md"}),e.jsx(n,{size:"lg"})]})},i={name:"Dot (With Children)",render:()=>e.jsxs(o,{display:"flex",gap:"16",alignItems:"center",children:[e.jsx(n,{children:e.jsx(t,{name:"envelope",size:"24"})}),e.jsx(n,{children:e.jsx(t,{name:"bell",size:"24"})}),e.jsx(n,{children:e.jsx(t,{name:"message",size:"24"})})]})},c={name:"Count (Standalone)",render:()=>e.jsxs(X,{gap:"24",children:[e.jsxs(s,{gap:"16",children:[e.jsx(n,{count:5,size:"sm"}),e.jsx(n,{count:12,size:"md"}),e.jsx(n,{count:99,size:"lg"})]}),e.jsxs(s,{gap:"16",children:[e.jsxs(r,{children:["Button ",e.jsx(n,{count:5})]}),e.jsxs(r,{size:"lg",variant:"primary",gap:"8",children:["Button ",e.jsx(n,{count:12})]}),e.jsxs(r,{size:"sm",variant:"ghost",children:["Button ",e.jsx(n,{count:99,size:"sm"})]})]})]})},x={name:"Count (With Children)",render:()=>e.jsxs(X,{w:"fit",gap:"16",children:[e.jsxs(o,{display:"flex",gap:"16",alignItems:"center",children:[e.jsx(n,{count:5,children:e.jsx(t,{name:"envelope",size:"24"})}),e.jsx(n,{count:12,children:e.jsx(t,{name:"bell",size:"24"})}),e.jsx(n,{count:99,children:e.jsx(t,{name:"message",size:"24"})})]}),e.jsxs(o,{display:"flex",gap:"16",alignItems:"center",children:[e.jsx(n,{count:5,children:e.jsx(r,{children:"Button"})}),e.jsx(n,{count:12,children:e.jsx(r,{size:"lg",variant:"primary",children:"Button"})}),e.jsx(n,{count:99,size:"sm",children:e.jsx(r,{size:"sm",variant:"ghost",children:"Button"})})]})]})},d={render:()=>e.jsxs(o,{display:"flex",flexDir:"column",gap:"6",children:[e.jsxs(o,{display:"flex",flexDir:"column",gap:"2",children:[e.jsx(a,{fontWeight:"600",children:"Dot Mode:"}),e.jsxs(o,{display:"flex",gap:"16",alignItems:"center",children:[e.jsx(n,{size:"sm",children:e.jsx(t,{name:"envelope",size:"20"})}),e.jsx(n,{size:"md",children:e.jsx(t,{name:"envelope",size:"24"})}),e.jsx(n,{size:"lg",children:e.jsx(t,{name:"envelope",size:"32"})})]})]}),e.jsxs(o,{display:"flex",flexDir:"column",gap:"2",children:[e.jsx(a,{fontWeight:"600",children:"Count Mode:"}),e.jsxs(o,{display:"flex",gap:"16",alignItems:"center",children:[e.jsx(n,{count:5,size:"sm",children:e.jsx(t,{name:"envelope",size:"20"})}),e.jsx(n,{count:12,size:"md",children:e.jsx(t,{name:"envelope",size:"24"})}),e.jsx(n,{count:99,size:"lg",children:e.jsx(t,{name:"envelope",size:"32"})})]})]})]})},m={render:()=>e.jsxs(s,{flexDir:"column",gap:"16",children:[e.jsxs(s,{flexDir:"column",gap:"12",children:[e.jsx(a,{fontWeight:"600",children:"Dot Mode:"}),e.jsxs(s,{gap:"16",alignItems:"center",flexWrap:"wrap",children:[e.jsxs(s,{flexDir:"column",alignItems:"center",gap:"1",children:[e.jsx(n,{variant:"neutral",children:e.jsx(t,{name:"envelope",size:"24"})}),e.jsx(a,{fontSize:"12",color:"text.muted",children:"neutral"})]}),e.jsxs(s,{flexDir:"column",alignItems:"center",gap:"1",children:[e.jsx(n,{variant:"subtle",children:e.jsx(t,{name:"envelope",size:"24"})}),e.jsx(a,{fontSize:"12",color:"text.muted",children:"subtle"})]}),e.jsxs(s,{flexDir:"column",alignItems:"center",gap:"1",children:[e.jsx(n,{variant:"inverse",children:e.jsx(t,{name:"envelope",size:"24"})}),e.jsx(a,{fontSize:"12",color:"text.muted",children:"inverse"})]}),e.jsxs(s,{flexDir:"column",alignItems:"center",gap:"1",children:[e.jsx(n,{variant:"bold",children:e.jsx(t,{name:"envelope",size:"24"})}),e.jsx(a,{fontSize:"12",color:"text.muted",children:"bold"})]}),e.jsxs(s,{flexDir:"column",alignItems:"center",gap:"1",children:[e.jsx(n,{variant:"success",children:e.jsx(t,{name:"envelope",size:"24"})}),e.jsx(a,{fontSize:"12",color:"text.muted",children:"success"})]}),e.jsxs(s,{flexDir:"column",alignItems:"center",gap:"1",children:[e.jsx(n,{variant:"warning",children:e.jsx(t,{name:"envelope",size:"24"})}),e.jsx(a,{fontSize:"12",color:"text.muted",children:"warning"})]}),e.jsxs(s,{flexDir:"column",alignItems:"center",gap:"1",children:[e.jsx(n,{variant:"danger",children:e.jsx(t,{name:"envelope",size:"24"})}),e.jsx(a,{fontSize:"12",color:"text.muted",children:"danger"})]}),e.jsxs(s,{flexDir:"column",alignItems:"center",gap:"1",children:[e.jsx(n,{variant:"info",children:e.jsx(t,{name:"envelope",size:"24"})}),e.jsx(a,{fontSize:"12",color:"text.muted",children:"info"})]})]})]}),e.jsxs(s,{flexDir:"column",gap:"12",children:[e.jsx(a,{fontWeight:"600",children:"Count Mode:"}),e.jsxs(s,{gap:"16",alignItems:"center",flexWrap:"wrap",children:[e.jsxs(s,{flexDir:"column",alignItems:"center",gap:"1",children:[e.jsx(n,{count:9,variant:"neutral",children:e.jsx(t,{name:"envelope",size:"24"})}),e.jsx(a,{fontSize:"12",color:"text.muted",children:"neutral"})]}),e.jsxs(s,{flexDir:"column",alignItems:"center",gap:"1",children:[e.jsx(n,{count:6,variant:"subtle",children:e.jsx(t,{name:"envelope",size:"24"})}),e.jsx(a,{fontSize:"12",color:"text.muted",children:"subtle"})]}),e.jsxs(s,{flexDir:"column",alignItems:"center",gap:"1",children:[e.jsx(n,{count:8,variant:"bold",children:e.jsx(t,{name:"envelope",size:"24"})}),e.jsx(a,{fontSize:"12",color:"text.muted",children:"bold"})]}),e.jsxs(s,{flexDir:"column",alignItems:"center",gap:"1",children:[e.jsx(n,{count:4,variant:"inverse",children:e.jsx(t,{name:"envelope",size:"24"})}),e.jsx(a,{fontSize:"12",color:"text.muted",children:"inverse"})]}),e.jsxs(s,{flexDir:"column",alignItems:"center",gap:"1",children:[e.jsx(n,{count:3,variant:"success",children:e.jsx(t,{name:"envelope",size:"24"})}),e.jsx(a,{fontSize:"12",color:"text.muted",children:"success"})]}),e.jsxs(s,{flexDir:"column",alignItems:"center",gap:"1",children:[e.jsx(n,{count:7,variant:"warning",children:e.jsx(t,{name:"envelope",size:"24"})}),e.jsx(a,{fontSize:"12",color:"text.muted",children:"warning"})]}),e.jsxs(s,{flexDir:"column",alignItems:"center",gap:"1",children:[e.jsx(n,{count:5,variant:"danger",children:e.jsx(t,{name:"envelope",size:"24"})}),e.jsx(a,{fontSize:"12",color:"text.muted",children:"danger"})]}),e.jsxs(s,{flexDir:"column",alignItems:"center",gap:"1",children:[e.jsx(n,{count:2,variant:"info",children:e.jsx(t,{name:"envelope",size:"24"})}),e.jsx(a,{fontSize:"12",color:"text.muted",children:"info"})]})]})]})]})},g={render:()=>e.jsxs(s,{flexDir:"column",gap:"12",children:[e.jsx(a,{children:"Default overflow at 99:"}),e.jsxs(s,{gap:"16",alignItems:"center",children:[e.jsx(n,{count:99,children:e.jsx(t,{name:"envelope",size:"24"})}),e.jsx(n,{count:100,children:e.jsx(t,{name:"envelope",size:"24"})}),e.jsx(n,{count:999,children:e.jsx(t,{name:"envelope",size:"24"})})]}),e.jsx(a,{children:"Custom overflow at 10:"}),e.jsxs(s,{gap:"16",alignItems:"center",children:[e.jsx(n,{count:10,overflowCount:10,children:e.jsx(t,{name:"envelope",size:"24"})}),e.jsx(n,{count:11,overflowCount:10,children:e.jsx(t,{name:"envelope",size:"24"})}),e.jsx(n,{count:100,overflowCount:10,children:e.jsx(t,{name:"envelope",size:"24"})})]})]})},u={render:()=>e.jsxs($,{gridTemplateColumns:"auto auto auto",gap:"16",w:"fit",children:[e.jsx(a,{children:"showZero=false:"}),e.jsx(n,{count:0,children:e.jsx(t,{name:"envelope",size:"24"})}),e.jsx(a,{textStyle:"mono.xs",color:"text.muted",children:"(badge hidden)"}),e.jsx(a,{children:"showZero=true:"}),e.jsx(n,{count:0,showZero:!0,children:e.jsx(t,{name:"envelope",size:"24"})}),e.jsx(a,{textStyle:"mono.xs",color:"text.muted",children:"(badge visible)"})]})},ee=()=>{const[h,B]=Y.useState(5);return e.jsxs(o,{display:"flex",flexDir:"column",gap:"12",children:[e.jsx(a,{children:"Click buttons to see animation on count change:"}),e.jsxs(o,{display:"flex",gap:"4",alignItems:"center",children:[e.jsx(n,{count:h,mx:"16",children:e.jsx(t,{name:"envelope",size:"32"})}),e.jsx(z,{variant:"hollow",size:"sm",iconName:"minus",onClick:()=>B(f=>Math.max(0,f-1))}),e.jsx(z,{variant:"hollow",size:"sm",iconName:"plus",onClick:()=>B(f=>f+1)})]}),e.jsxs(a,{color:"text.muted",children:["Current count: ",h]})]})},p={render:()=>e.jsx(ee,{})},j={render:()=>e.jsxs(o,{display:"flex",flexDir:"column",gap:"12",children:[e.jsxs(o,{display:"flex",flexDir:"column",gap:"12",children:[e.jsx(a,{fontWeight:"600",children:"Notifications"}),e.jsxs(o,{display:"flex",gap:"16",alignItems:"center",children:[e.jsx(n,{count:3,children:e.jsx(t,{name:"bell",size:"24"})}),e.jsx(n,{count:12,children:e.jsx(t,{name:"envelope",size:"24"})}),e.jsx(n,{count:99,children:e.jsx(t,{name:"message",size:"24"})})]})]}),e.jsxs(o,{display:"flex",flexDir:"column",gap:"8",children:[e.jsx(a,{fontWeight:"600",children:"Status Indicators"}),e.jsxs(o,{display:"flex",gap:"16",alignItems:"center",children:[e.jsx(n,{variant:"success",children:e.jsx(t,{name:"user",size:"24"})}),e.jsx(n,{variant:"warning",children:e.jsx(t,{name:"user",size:"24"})}),e.jsx(n,{variant:"neutral",children:e.jsx(t,{name:"user",size:"24"})})]})]}),e.jsxs(o,{display:"flex",flexDir:"column",gap:"8",children:[e.jsx(a,{fontWeight:"600",children:"Standalone Badges"}),e.jsxs(o,{display:"flex",gap:"8",alignItems:"center",children:[e.jsx(n,{variant:"danger"}),e.jsx(n,{variant:"success"}),e.jsx(n,{variant:"info"}),e.jsx(n,{count:5,variant:"danger"}),e.jsx(n,{count:42,variant:"info"})]})]})]})};var v,I,D;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Dot (Standalone)',
  render: () => <Box display="flex" gap="16" alignItems="center">
      <Badge size="sm" />
      <Badge size="md" />
      <Badge size="lg" />
    </Box>
}`,...(D=(I=l.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};var S,T,F;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(F=(T=i.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};var w,y,C;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Count (Standalone)',
  render: () => <VStack gap="24">
      <Flex gap="16">
        <Badge count={5} size="sm" />
        <Badge count={12} size="md" />
        <Badge count={99} size="lg" />
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
}`,...(C=(y=c.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var b,W,M;x.parameters={...x.parameters,docs:{...(b=x.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(M=(W=x.parameters)==null?void 0:W.docs)==null?void 0:M.source}}};var Z,k,V;d.parameters={...d.parameters,docs:{...(Z=d.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDir="column" gap="6">
      <Box display="flex" flexDir="column" gap="2">
        <Text fontWeight="600">Dot Mode:</Text>
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
        <Text fontWeight="600">Count Mode:</Text>
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
}`,...(V=(k=d.parameters)==null?void 0:k.docs)==null?void 0:V.source}}};var N,A,G;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <Flex flexDir="column" gap="16">
      <Flex flexDir="column" gap="12">
        <Text fontWeight="600">Dot Mode:</Text>
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
        <Text fontWeight="600">Count Mode:</Text>
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
}`,...(G=(A=m.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};var E,O,U;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(U=(O=g.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};var _,R,q;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(q=(R=u.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var H,J,K;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <AnimationDemo />
}`,...(K=(J=p.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var L,P,Q;j.parameters={...j.parameters,docs:{...(L=j.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDir="column" gap="12">
      <Box display="flex" flexDir="column" gap="12">
        <Text fontWeight="600">Notifications</Text>
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
        <Text fontWeight="600">Status Indicators</Text>
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
        <Text fontWeight="600">Standalone Badges</Text>
        <Box display="flex" gap="8" alignItems="center">
          <Badge variant="danger" />
          <Badge variant="success" />
          <Badge variant="info" />
          <Badge count={5} variant="danger" />
          <Badge count={42} variant="info" />
        </Box>
      </Box>
    </Box>
}`,...(Q=(P=j.parameters)==null?void 0:P.docs)==null?void 0:Q.source}}};const de=["DotStandalone","DotWithChildren","CountStandalone","CountWithChildren","Sizes","variants","OverflowCount","ShowZero","Animation","UseCases"];export{p as Animation,c as CountStandalone,x as CountWithChildren,l as DotStandalone,i as DotWithChildren,g as OverflowCount,u as ShowZero,d as Sizes,j as UseCases,de as __namedExportsOrder,xe as default,m as variants};
