import{j as e,B as r,T as n,a as A,G as de,H as ue,F as ge}from"./iframe-DDMtb19w.js";import{s as a}from"./avatars-BdtzB-ZU.js";import{B as fe}from"./BreakpointIndicator-DAKRiM4i.js";import{A as s}from"./Avatar-ClDjTgNl.js";import"./preload-helper-BoBnIWOp.js";import"./mq.hook-Bjv4ARc3.js";import"./breakpoints-DU_5_Zhy.js";import"./Tag-BABGX9c4.js";const De={title:"Components/Avatar",component:s,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{control:"select",options:["sm","md","lg","xl","2xl","3xl"],description:"Size of the avatar"},shape:{control:"select",options:["circle","square","hexagon"],description:"Shape of the avatar (circle for users, square for projects, hexagon for an agent entity)"},presence:{control:"select",options:[void 0,"online","busy","offline","focus"],description:"Presence indicator shown at bottom-right"},status:{control:"select",options:[void 0,"approved","declined","locked"],description:"Status indicator shown at top-right"},name:{control:"text",description:"Name for generating initials fallback"},src:{control:"text",description:"Image source URL"}},args:{size:"md",shape:"circle"}},t={args:{src:a.user1,name:"John Doe",alt:"John Doe"}},i={render:()=>e.jsxs(r,{display:"flex",gap:"4",alignItems:"center",children:[e.jsx(s,{size:"sm",src:a.user1,name:"John Doe"}),e.jsx(s,{size:"md",src:a.user1,name:"John Doe"}),e.jsx(s,{size:"lg",src:a.user1,name:"John Doe"}),e.jsx(s,{size:"xl",src:a.user1,name:"John Doe"}),e.jsx(s,{size:"2xl",src:a.user1,name:"John Doe"}),e.jsx(s,{size:"3xl",src:a.user1,name:"John Doe"})]})},o={render:()=>e.jsx(r,{display:"flex",flexDir:"column",gap:"4",children:["sm","md","lg","xl","2xl","3xl"].map(l=>e.jsxs(r,{display:"flex",gap:"4",alignItems:"center",children:[e.jsxs(n,{w:"80",fontWeight:"medium",children:[l,":"]}),e.jsx(s,{size:l,src:a.user1,name:"John Doe"})]},l))})},c={render:()=>e.jsxs(r,{display:"flex",flexDir:"column",gap:"6",children:[e.jsxs(r,{display:"flex",flexDir:"column",gap:"2",children:[e.jsx(n,{fontWeight:"bold",children:"Circle (for users)"}),e.jsxs(r,{display:"flex",gap:"4",alignItems:"center",children:[e.jsx(s,{shape:"circle",size:"sm",src:a.user1}),e.jsx(s,{shape:"circle",size:"md",src:a.user2}),e.jsx(s,{shape:"circle",size:"lg",src:a.user3})]})]}),e.jsxs(r,{display:"flex",flexDir:"column",gap:"2",children:[e.jsx(n,{fontWeight:"bold",children:"Square (for projects/entities)"}),e.jsxs(r,{display:"flex",gap:"4",alignItems:"center",children:[e.jsx(s,{shape:"square",size:"sm",src:a.user4}),e.jsx(s,{shape:"square",size:"md",src:a.user5}),e.jsx(s,{shape:"square",size:"lg",src:a.user1})]})]}),e.jsxs(r,{display:"flex",flexDir:"column",gap:"2",children:[e.jsx(n,{fontWeight:"bold",children:"Hexagon (for an agent entity)"}),e.jsxs(r,{display:"flex",gap:"4",alignItems:"center",children:[e.jsx(s,{shape:"hexagon",size:"sm",src:a.user4}),e.jsx(s,{shape:"hexagon",size:"md",src:a.user5}),e.jsx(s,{shape:"hexagon",size:"lg",src:a.user1})]})]})]})},x={render:()=>e.jsxs(r,{display:"flex",gap:"4",alignItems:"center",children:[e.jsx(s,{size:"sm",name:"John Doe"}),e.jsx(s,{size:"md",name:"Alice Smith"}),e.jsx(s,{size:"lg",name:"Bob"}),e.jsx(s,{size:"xl",name:"Charlie Brown"})]})},p={render:()=>e.jsxs(r,{display:"flex",gap:"4",alignItems:"center",children:[e.jsx(s,{size:"md",fallback:e.jsx(A,{name:"user"})}),e.jsx(s,{size:"md",fallback:e.jsx(A,{name:"user-group"})}),e.jsx(s,{size:"md",fallback:e.jsx(A,{name:"building"})}),e.jsx(s,{size:"md",fallback:"?"})]})},m={render:()=>e.jsxs(r,{display:"flex",flexDir:"column",gap:"4",children:[e.jsx(n,{children:"When image fails to load, fallback is shown:"}),e.jsxs(r,{display:"flex",gap:"4",alignItems:"center",children:[e.jsx(s,{size:"md",src:"invalid-url.jpg",name:"John Doe"}),e.jsx(s,{size:"md",src:"invalid-url.jpg"}),e.jsx(s,{size:"md",src:"invalid-url.jpg",fallback:e.jsx(A,{name:"user"})})]})]})},d={render:()=>e.jsxs(r,{display:"flex",flexDir:"column",gap:"6",children:[e.jsx(n,{fontWeight:"bold",children:"Presence indicates availability (bottom-right)"}),e.jsxs(r,{display:"flex",gap:"6",alignItems:"center",children:[e.jsxs(r,{display:"flex",flexDir:"column",gap:"2",alignItems:"center",children:[e.jsx(s,{size:"lg",src:a.user1,presence:"online"}),e.jsx(n,{fontSize:"12",children:"Online"})]}),e.jsxs(r,{display:"flex",flexDir:"column",gap:"2",alignItems:"center",children:[e.jsx(s,{size:"lg",src:a.user2,presence:"busy"}),e.jsx(n,{fontSize:"12",children:"Busy"})]}),e.jsxs(r,{display:"flex",flexDir:"column",gap:"2",alignItems:"center",children:[e.jsx(s,{size:"lg",src:a.user3,presence:"offline"}),e.jsx(n,{fontSize:"12",children:"Offline"})]}),e.jsxs(r,{display:"flex",flexDir:"column",gap:"2",alignItems:"center",children:[e.jsx(s,{size:"lg",src:a.user4,presence:"focus"}),e.jsx(n,{fontSize:"12",children:"Focus"})]})]})]})},u={render:()=>e.jsxs(r,{display:"flex",gap:"4",alignItems:"center",children:[e.jsx(s,{size:"sm",src:a.user1,presence:"online"}),e.jsx(s,{size:"md",src:a.user1,presence:"online"}),e.jsx(s,{size:"lg",src:a.user1,presence:"online"}),e.jsx(s,{size:"xl",src:a.user1,presence:"online"}),e.jsx(s,{size:"2xl",src:a.user1,presence:"online"}),e.jsx(s,{size:"3xl",src:a.user1,presence:"online"})]})},g={render:()=>e.jsxs(r,{display:"flex",flexDir:"column",gap:"6",children:[e.jsx(n,{fontWeight:"bold",children:"Status shows contextual information (top-right)"}),e.jsxs(r,{display:"flex",gap:"6",alignItems:"center",children:[e.jsxs(r,{display:"flex",flexDir:"column",gap:"2",alignItems:"center",children:[e.jsx(s,{size:"lg",src:a.user1,status:"approved"}),e.jsx(n,{fontSize:"12",children:"Approved"})]}),e.jsxs(r,{display:"flex",flexDir:"column",gap:"2",alignItems:"center",children:[e.jsx(s,{size:"lg",src:a.user2,status:"declined"}),e.jsx(n,{fontSize:"12",children:"Declined"})]}),e.jsxs(r,{display:"flex",flexDir:"column",gap:"2",alignItems:"center",children:[e.jsx(s,{size:"lg",src:a.user3,status:"locked"}),e.jsx(n,{fontSize:"12",children:"Locked"})]})]})]})},f={render:()=>e.jsxs(r,{display:"flex",gap:"4",alignItems:"center",children:[e.jsx(s,{size:"sm",src:a.user1,status:"approved"}),e.jsx(s,{size:"md",src:a.user1,status:"approved"}),e.jsx(s,{size:"lg",src:a.user1,status:"approved"}),e.jsx(s,{size:"xl",src:a.user1,status:"approved"}),e.jsx(s,{size:"2xl",src:a.user1,status:"approved"}),e.jsx(s,{size:"3xl",src:a.user1,status:"approved"})]})},h={render:()=>e.jsxs(r,{display:"flex",flexDir:"column",gap:"4",children:[e.jsx(n,{children:"Both presence and status can be shown together:"}),e.jsxs(r,{display:"flex",gap:"4",alignItems:"center",children:[e.jsx(s,{size:"lg",src:a.user1,presence:"online",status:"approved"}),e.jsx(s,{size:"lg",src:a.user2,presence:"busy",status:"declined"}),e.jsx(s,{size:"lg",src:a.user3,presence:"offline",status:"locked"})]})]})},v={render:()=>e.jsxs(de,{w:"full",h:"full",position:"relative",placeContent:"center",alignItems:"center",justifyItems:"center",gap:"16",children:[e.jsxs(ue,{gap:"20",children:[e.jsx(s,{src:a.user1,presence:"online",status:"approved",size:{base:"3xl",xs:"2xl",sm:"xl",md:"lg",lg:"md",xl:"sm"},shape:"circle"}),e.jsx(s,{src:a.user2,presence:"online",status:"approved",size:{base:"3xl",xs:"2xl",sm:"xl",md:"lg",lg:"md",xl:"sm"},shape:"square"}),e.jsx(s,{src:a.user3,presence:"online",status:"approved",size:{base:"3xl",xs:"2xl",sm:"xl",md:"lg",lg:"md",xl:"sm"},shape:"hexagon"})]}),e.jsxs(n,{textAlign:"center",textStyle:"mono.sm",_after:{display:"inline",content:{base:'"2xl"',xs:'"xl"',sm:'"lg"',md:'"md"',lg:'"sm"',xl:'"xs"'},color:"text.bold",fontWeight:"bold"},children:["Size:"," "]}),e.jsx(fe,{})]}),parameters:{controls:{disable:!0}}},z={render:()=>e.jsx(r,{display:"flex",flexDir:"column",gap:"8",children:[{name:"Alice Johnson",presence:"online",img:a.user1},{name:"Bob Smith",presence:"busy",img:a.user2},{name:"Charlie Brown",presence:"offline",img:a.user3},{name:"Diana Prince",presence:"focus",img:a.user4}].map(l=>e.jsxs(r,{display:"flex",gap:"8",alignItems:"center",children:[e.jsx(s,{size:"md",src:l.img,name:l.name,presence:l.presence}),e.jsxs(ge,{gap:"8",alignItems:"baseline",children:[e.jsx(n,{fontWeight:"medium",color:"text",children:l.name}),e.jsx(n,{fontSize:"12",color:"text.subtle",children:l.presence==="online"?"Available":l.presence==="busy"?"In a meeting":l.presence==="focus"?"Do not disturb":"Away"})]})]},l.name))})},j={render:()=>e.jsxs(r,{display:"flex",flexDir:"column",gap:"4",children:[e.jsx(n,{fontWeight:"bold",children:"Project/Entity Avatars (Square)"}),e.jsxs(r,{display:"flex",gap:"4",children:[e.jsxs(r,{display:"flex",flexDir:"column",gap:"2",alignItems:"center",children:[e.jsx(s,{shape:"square",size:"lg",name:"Design System"}),e.jsx(n,{fontSize:"12",children:"Design System"})]}),e.jsxs(r,{display:"flex",flexDir:"column",gap:"2",alignItems:"center",children:[e.jsx(s,{shape:"square",size:"lg",name:"Marketing"}),e.jsx(n,{fontSize:"12",children:"Marketing"})]}),e.jsxs(r,{display:"flex",flexDir:"column",gap:"2",alignItems:"center",children:[e.jsx(s,{shape:"square",size:"lg",name:"Engineering"}),e.jsx(n,{fontSize:"12",children:"Engineering"})]})]})]})},be=["Default","Sizes","SizesWithLabels","Shapes","WithInitials","WithCustomFallback","ImageLoadError","Presence","PresenceAllSizes","Status","StatusAllSizes","PresenceAndStatus","ConditionalBreakpoints","UserList","ProjectAvatars"];var y,B,S;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    src: sampleAvatars.user1,
    name: 'John Doe',
    alt: 'John Doe'
  }
}`,...(S=(B=t.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var D,b,I;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <Box display="flex" gap="4" alignItems="center">
      <Avatar size="sm" src={sampleAvatars.user1} name="John Doe" />
      <Avatar size="md" src={sampleAvatars.user1} name="John Doe" />
      <Avatar size="lg" src={sampleAvatars.user1} name="John Doe" />
      <Avatar size="xl" src={sampleAvatars.user1} name="John Doe" />
      <Avatar size="2xl" src={sampleAvatars.user1} name="John Doe" />
      <Avatar size="3xl" src={sampleAvatars.user1} name="John Doe" />
    </Box>
}`,...(I=(b=i.parameters)==null?void 0:b.docs)==null?void 0:I.source}}};var T,k,W;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDir="column" gap="4">
      {(['sm', 'md', 'lg', 'xl', '2xl', '3xl'] as const).map(size => <Box key={size} display="flex" gap="4" alignItems="center">
          <Text w="80" fontWeight="medium">
            {size}:
          </Text>
          <Avatar size={size} src={sampleAvatars.user1} name="John Doe" />
        </Box>)}
    </Box>
}`,...(W=(k=o.parameters)==null?void 0:k.docs)==null?void 0:W.source}}};var J,q,w;c.parameters={...c.parameters,docs:{...(J=c.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDir="column" gap="6">
      <Box display="flex" flexDir="column" gap="2">
        <Text fontWeight="bold">Circle (for users)</Text>
        <Box display="flex" gap="4" alignItems="center">
          <Avatar shape="circle" size="sm" src={sampleAvatars.user1} />
          <Avatar shape="circle" size="md" src={sampleAvatars.user2} />
          <Avatar shape="circle" size="lg" src={sampleAvatars.user3} />
        </Box>
      </Box>
      <Box display="flex" flexDir="column" gap="2">
        <Text fontWeight="bold">Square (for projects/entities)</Text>
        <Box display="flex" gap="4" alignItems="center">
          <Avatar shape="square" size="sm" src={sampleAvatars.user4} />
          <Avatar shape="square" size="md" src={sampleAvatars.user5} />
          <Avatar shape="square" size="lg" src={sampleAvatars.user1} />
        </Box>
      </Box>
      <Box display="flex" flexDir="column" gap="2">
        <Text fontWeight="bold">Hexagon (for an agent entity)</Text>
        <Box display="flex" gap="4" alignItems="center">
          <Avatar shape="hexagon" size="sm" src={sampleAvatars.user4} />
          <Avatar shape="hexagon" size="md" src={sampleAvatars.user5} />
          <Avatar shape="hexagon" size="lg" src={sampleAvatars.user1} />
        </Box>
      </Box>
    </Box>
}`,...(w=(q=c.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};var P,C,E;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <Box display="flex" gap="4" alignItems="center">
      <Avatar size="sm" name="John Doe" />
      <Avatar size="md" name="Alice Smith" />
      <Avatar size="lg" name="Bob" />
      <Avatar size="xl" name="Charlie Brown" />
    </Box>
}`,...(E=(C=x.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var L,F,H;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <Box display="flex" gap="4" alignItems="center">
      <Avatar size="md" fallback={<Icon name="user" />} />
      <Avatar size="md" fallback={<Icon name="user-group" />} />
      <Avatar size="md" fallback={<Icon name="building" />} />
      <Avatar size="md" fallback="?" />
    </Box>
}`,...(H=(F=p.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var O,G,M;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDir="column" gap="4">
      <Text>When image fails to load, fallback is shown:</Text>
      <Box display="flex" gap="4" alignItems="center">
        <Avatar size="md" src="invalid-url.jpg" name="John Doe" />
        <Avatar size="md" src="invalid-url.jpg" />
        <Avatar size="md" src="invalid-url.jpg" fallback={<Icon name="user" />} />
      </Box>
    </Box>
}`,...(M=(G=m.parameters)==null?void 0:G.docs)==null?void 0:M.source}}};var _,U,R;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDir="column" gap="6">
      <Text fontWeight="bold">
        Presence indicates availability (bottom-right)
      </Text>
      <Box display="flex" gap="6" alignItems="center">
        <Box display="flex" flexDir="column" gap="2" alignItems="center">
          <Avatar size="lg" src={sampleAvatars.user1} presence="online" />
          <Text fontSize="12">Online</Text>
        </Box>
        <Box display="flex" flexDir="column" gap="2" alignItems="center">
          <Avatar size="lg" src={sampleAvatars.user2} presence="busy" />
          <Text fontSize="12">Busy</Text>
        </Box>
        <Box display="flex" flexDir="column" gap="2" alignItems="center">
          <Avatar size="lg" src={sampleAvatars.user3} presence="offline" />
          <Text fontSize="12">Offline</Text>
        </Box>
        <Box display="flex" flexDir="column" gap="2" alignItems="center">
          <Avatar size="lg" src={sampleAvatars.user4} presence="focus" />
          <Text fontSize="12">Focus</Text>
        </Box>
      </Box>
    </Box>
}`,...(R=(U=d.parameters)==null?void 0:U.docs)==null?void 0:R.source}}};var N,K,Q;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <Box display="flex" gap="4" alignItems="center">
      <Avatar size="sm" src={sampleAvatars.user1} presence="online" />
      <Avatar size="md" src={sampleAvatars.user1} presence="online" />
      <Avatar size="lg" src={sampleAvatars.user1} presence="online" />
      <Avatar size="xl" src={sampleAvatars.user1} presence="online" />
      <Avatar size="2xl" src={sampleAvatars.user1} presence="online" />
      <Avatar size="3xl" src={sampleAvatars.user1} presence="online" />
    </Box>
}`,...(Q=(K=u.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var V,X,Y;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDir="column" gap="6">
      <Text fontWeight="bold">
        Status shows contextual information (top-right)
      </Text>
      <Box display="flex" gap="6" alignItems="center">
        <Box display="flex" flexDir="column" gap="2" alignItems="center">
          <Avatar size="lg" src={sampleAvatars.user1} status="approved" />
          <Text fontSize="12">Approved</Text>
        </Box>
        <Box display="flex" flexDir="column" gap="2" alignItems="center">
          <Avatar size="lg" src={sampleAvatars.user2} status="declined" />
          <Text fontSize="12">Declined</Text>
        </Box>
        <Box display="flex" flexDir="column" gap="2" alignItems="center">
          <Avatar size="lg" src={sampleAvatars.user3} status="locked" />
          <Text fontSize="12">Locked</Text>
        </Box>
      </Box>
    </Box>
}`,...(Y=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;f.parameters={...f.parameters,docs:{...(Z=f.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <Box display="flex" gap="4" alignItems="center">
      <Avatar size="sm" src={sampleAvatars.user1} status="approved" />
      <Avatar size="md" src={sampleAvatars.user1} status="approved" />
      <Avatar size="lg" src={sampleAvatars.user1} status="approved" />
      <Avatar size="xl" src={sampleAvatars.user1} status="approved" />
      <Avatar size="2xl" src={sampleAvatars.user1} status="approved" />
      <Avatar size="3xl" src={sampleAvatars.user1} status="approved" />
    </Box>
}`,...(ee=($=f.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var se,ae,re;h.parameters={...h.parameters,docs:{...(se=h.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDir="column" gap="4">
      <Text>Both presence and status can be shown together:</Text>
      <Box display="flex" gap="4" alignItems="center">
        <Avatar size="lg" src={sampleAvatars.user1} presence="online" status="approved" />
        <Avatar size="lg" src={sampleAvatars.user2} presence="busy" status="declined" />
        <Avatar size="lg" src={sampleAvatars.user3} presence="offline" status="locked" />
      </Box>
    </Box>
}`,...(re=(ae=h.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var ne,le,te;v.parameters={...v.parameters,docs:{...(ne=v.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => <Grid w="full" h="full" position="relative" placeContent="center" alignItems="center" justifyItems="center" gap="16">
      <HStack gap="20">
        <Avatar src={sampleAvatars.user1} presence="online" status="approved" size={{
        base: '3xl',
        xs: '2xl',
        sm: 'xl',
        md: 'lg',
        lg: 'md',
        xl: 'sm'
      }} shape="circle" />
        <Avatar src={sampleAvatars.user2} presence="online" status="approved" size={{
        base: '3xl',
        xs: '2xl',
        sm: 'xl',
        md: 'lg',
        lg: 'md',
        xl: 'sm'
      }} shape="square" />
        <Avatar src={sampleAvatars.user3} presence="online" status="approved" size={{
        base: '3xl',
        xs: '2xl',
        sm: 'xl',
        md: 'lg',
        lg: 'md',
        xl: 'sm'
      }} shape="hexagon" />
      </HStack>
      <Text textAlign="center" textStyle="mono.sm" _after={{
      display: 'inline',
      content: {
        base: '"2xl"',
        xs: '"xl"',
        sm: '"lg"',
        md: '"md"',
        lg: '"sm"',
        xl: '"xs"'
      },
      color: 'text.bold',
      fontWeight: 'bold'
    }}>
        Size:{' '}
      </Text>
      <BreakpointIndicator />
    </Grid>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(te=(le=v.parameters)==null?void 0:le.docs)==null?void 0:te.source}}};var ie,oe,ce;z.parameters={...z.parameters,docs:{...(ie=z.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDir="column" gap="8">
      {[{
      name: 'Alice Johnson',
      presence: 'online' as const,
      img: sampleAvatars.user1
    }, {
      name: 'Bob Smith',
      presence: 'busy' as const,
      img: sampleAvatars.user2
    }, {
      name: 'Charlie Brown',
      presence: 'offline' as const,
      img: sampleAvatars.user3
    }, {
      name: 'Diana Prince',
      presence: 'focus' as const,
      img: sampleAvatars.user4
    }].map(user => <Box key={user.name} display="flex" gap="8" alignItems="center">
          <Avatar size="md" src={user.img} name={user.name} presence={user.presence} />
          <Flex gap="8" alignItems="baseline">
            <Text fontWeight="medium" color="text">
              {user.name}
            </Text>
            <Text fontSize="12" color="text.subtle">
              {user.presence === 'online' ? 'Available' : user.presence === 'busy' ? 'In a meeting' : user.presence === 'focus' ? 'Do not disturb' : 'Away'}
            </Text>
          </Flex>
        </Box>)}
    </Box>
}`,...(ce=(oe=z.parameters)==null?void 0:oe.docs)==null?void 0:ce.source}}};var xe,pe,me;j.parameters={...j.parameters,docs:{...(xe=j.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDir="column" gap="4">
      <Text fontWeight="bold">Project/Entity Avatars (Square)</Text>
      <Box display="flex" gap="4">
        <Box display="flex" flexDir="column" gap="2" alignItems="center">
          <Avatar shape="square" size="lg" name="Design System" />
          <Text fontSize="12">Design System</Text>
        </Box>
        <Box display="flex" flexDir="column" gap="2" alignItems="center">
          <Avatar shape="square" size="lg" name="Marketing" />
          <Text fontSize="12">Marketing</Text>
        </Box>
        <Box display="flex" flexDir="column" gap="2" alignItems="center">
          <Avatar shape="square" size="lg" name="Engineering" />
          <Text fontSize="12">Engineering</Text>
        </Box>
      </Box>
    </Box>
}`,...(me=(pe=j.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};export{v as ConditionalBreakpoints,t as Default,m as ImageLoadError,d as Presence,u as PresenceAllSizes,h as PresenceAndStatus,j as ProjectAvatars,c as Shapes,i as Sizes,o as SizesWithLabels,g as Status,f as StatusAllSizes,z as UserList,p as WithCustomFallback,x as WithInitials,be as __namedExportsOrder,De as default};
