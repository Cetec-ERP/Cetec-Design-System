import{j as e,B as r,T as n,a as y,G as ve,H as ze,F as je}from"./iframe-DXu0nSdR.js";import{s as a}from"./avatars-BdtzB-ZU.js";import{B as Ae}from"./BreakpointIndicator-saxNPsYt.js";import{A as s}from"./Avatar-JHBB8DIT.js";import"./preload-helper-C22nMbeH.js";import"./mq.hook-CivUtIrd.js";import"./breakpoints-DU_5_Zhy.js";import"./Tag-C6Z29Grs.js";const We={title:"Components/Avatar",component:s,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{control:"select",options:["sm","md","lg","xl","2xl","3xl"],description:"Size of the avatar"},shape:{control:"select",options:["circle","square","hexagon"],description:"Shape of the avatar (circle for users, square for projects, hexagon for an agent entity)"},presence:{control:"select",options:[void 0,"online","busy","offline","focus"],description:"Presence indicator shown at bottom-right"},status:{control:"select",options:[void 0,"approved","declined","locked"],description:"Status indicator shown at top-right"},name:{control:"text",description:"Name for generating initials fallback"},src:{control:"text",description:"Image source URL"}},args:{size:"md",shape:"circle"}},t={args:{src:a.user1,name:"John Doe",alt:"John Doe"}},i={render:()=>e.jsxs(r,{display:"flex",gap:"4",alignItems:"center",children:[e.jsx(s,{size:"sm",src:a.user1,name:"John Doe"}),e.jsx(s,{size:"md",src:a.user1,name:"John Doe"}),e.jsx(s,{size:"lg",src:a.user1,name:"John Doe"}),e.jsx(s,{size:"xl",src:a.user1,name:"John Doe"}),e.jsx(s,{size:"2xl",src:a.user1,name:"John Doe"}),e.jsx(s,{size:"3xl",src:a.user1,name:"John Doe"})]})},o={render:()=>e.jsx(r,{display:"flex",flexDir:"column",gap:"4",children:["sm","md","lg","xl","2xl","3xl"].map(l=>e.jsxs(r,{display:"flex",gap:"4",alignItems:"center",children:[e.jsxs(n,{w:"80",fontWeight:"medium",children:[l,":"]}),e.jsx(s,{size:l,src:a.user1,name:"John Doe"})]},l))})},c={render:()=>e.jsxs(r,{display:"flex",flexDir:"column",gap:"6",children:[e.jsxs(r,{display:"flex",flexDir:"column",gap:"2",children:[e.jsx(n,{fontWeight:"bold",children:"Circle (for users)"}),e.jsxs(r,{display:"flex",gap:"4",alignItems:"center",children:[e.jsx(s,{shape:"circle",size:"sm",src:a.user1}),e.jsx(s,{shape:"circle",size:"md",src:a.user2}),e.jsx(s,{shape:"circle",size:"lg",src:a.user3})]})]}),e.jsxs(r,{display:"flex",flexDir:"column",gap:"2",children:[e.jsx(n,{fontWeight:"bold",children:"Square (for projects/entities)"}),e.jsxs(r,{display:"flex",gap:"4",alignItems:"center",children:[e.jsx(s,{shape:"square",size:"sm",src:a.user4}),e.jsx(s,{shape:"square",size:"md",src:a.user5}),e.jsx(s,{shape:"square",size:"lg",src:a.user1})]})]}),e.jsxs(r,{display:"flex",flexDir:"column",gap:"2",children:[e.jsx(n,{fontWeight:"bold",children:"Hexagon (for an agent entity)"}),e.jsxs(r,{display:"flex",gap:"4",alignItems:"center",children:[e.jsx(s,{shape:"hexagon",size:"sm",src:a.user4}),e.jsx(s,{shape:"hexagon",size:"md",src:a.user5}),e.jsx(s,{shape:"hexagon",size:"lg",src:a.user1})]})]})]})},x={render:()=>e.jsxs(r,{display:"flex",gap:"4",alignItems:"center",children:[e.jsx(s,{size:"sm",name:"John Doe"}),e.jsx(s,{size:"md",name:"Alice Smith"}),e.jsx(s,{size:"lg",name:"Bob"}),e.jsx(s,{size:"xl",name:"Charlie Brown"})]})},p={render:()=>e.jsxs(r,{display:"flex",gap:"4",alignItems:"center",children:[e.jsx(s,{size:"md",fallback:e.jsx(y,{name:"user"})}),e.jsx(s,{size:"md",fallback:e.jsx(y,{name:"user-group"})}),e.jsx(s,{size:"md",fallback:e.jsx(y,{name:"building"})}),e.jsx(s,{size:"md",fallback:"?"})]})},m={render:()=>e.jsxs(r,{display:"flex",flexDir:"column",gap:"4",children:[e.jsx(n,{children:"When image fails to load, fallback is shown:"}),e.jsxs(r,{display:"flex",gap:"4",alignItems:"center",children:[e.jsx(s,{size:"md",src:"invalid-url.jpg",name:"John Doe"}),e.jsx(s,{size:"md",src:"invalid-url.jpg"}),e.jsx(s,{size:"md",src:"invalid-url.jpg",fallback:e.jsx(y,{name:"user"})})]})]})},d={render:()=>e.jsxs(r,{display:"flex",flexDir:"column",gap:"6",children:[e.jsx(n,{fontWeight:"bold",children:"Presence indicates availability (bottom-right)"}),e.jsxs(r,{display:"flex",gap:"6",alignItems:"center",children:[e.jsxs(r,{display:"flex",flexDir:"column",gap:"2",alignItems:"center",children:[e.jsx(s,{size:"lg",src:a.user1,presence:"online"}),e.jsx(n,{fontSize:"12",children:"Online"})]}),e.jsxs(r,{display:"flex",flexDir:"column",gap:"2",alignItems:"center",children:[e.jsx(s,{size:"lg",src:a.user2,presence:"busy"}),e.jsx(n,{fontSize:"12",children:"Busy"})]}),e.jsxs(r,{display:"flex",flexDir:"column",gap:"2",alignItems:"center",children:[e.jsx(s,{size:"lg",src:a.user3,presence:"offline"}),e.jsx(n,{fontSize:"12",children:"Offline"})]}),e.jsxs(r,{display:"flex",flexDir:"column",gap:"2",alignItems:"center",children:[e.jsx(s,{size:"lg",src:a.user4,presence:"focus"}),e.jsx(n,{fontSize:"12",children:"Focus"})]})]})]})},u={render:()=>e.jsxs(r,{display:"flex",gap:"4",alignItems:"center",children:[e.jsx(s,{size:"sm",src:a.user1,presence:"online"}),e.jsx(s,{size:"md",src:a.user1,presence:"online"}),e.jsx(s,{size:"lg",src:a.user1,presence:"online"}),e.jsx(s,{size:"xl",src:a.user1,presence:"online"}),e.jsx(s,{size:"2xl",src:a.user1,presence:"online"}),e.jsx(s,{size:"3xl",src:a.user1,presence:"online"})]})},g={render:()=>e.jsxs(r,{display:"flex",flexDir:"column",gap:"6",children:[e.jsx(n,{fontWeight:"bold",children:"Status shows contextual information (top-right)"}),e.jsxs(r,{display:"flex",gap:"6",alignItems:"center",children:[e.jsxs(r,{display:"flex",flexDir:"column",gap:"2",alignItems:"center",children:[e.jsx(s,{size:"lg",src:a.user1,status:"approved"}),e.jsx(n,{fontSize:"12",children:"Approved"})]}),e.jsxs(r,{display:"flex",flexDir:"column",gap:"2",alignItems:"center",children:[e.jsx(s,{size:"lg",src:a.user2,status:"declined"}),e.jsx(n,{fontSize:"12",children:"Declined"})]}),e.jsxs(r,{display:"flex",flexDir:"column",gap:"2",alignItems:"center",children:[e.jsx(s,{size:"lg",src:a.user3,status:"locked"}),e.jsx(n,{fontSize:"12",children:"Locked"})]})]})]})},f={render:()=>e.jsxs(r,{display:"flex",gap:"4",alignItems:"center",children:[e.jsx(s,{size:"sm",src:a.user1,status:"approved"}),e.jsx(s,{size:"md",src:a.user1,status:"approved"}),e.jsx(s,{size:"lg",src:a.user1,status:"approved"}),e.jsx(s,{size:"xl",src:a.user1,status:"approved"}),e.jsx(s,{size:"2xl",src:a.user1,status:"approved"}),e.jsx(s,{size:"3xl",src:a.user1,status:"approved"})]})},h={render:()=>e.jsxs(r,{display:"flex",flexDir:"column",gap:"4",children:[e.jsx(n,{children:"Both presence and status can be shown together:"}),e.jsxs(r,{display:"flex",gap:"4",alignItems:"center",children:[e.jsx(s,{size:"lg",src:a.user1,presence:"online",status:"approved"}),e.jsx(s,{size:"lg",src:a.user2,presence:"busy",status:"declined"}),e.jsx(s,{size:"lg",src:a.user3,presence:"offline",status:"locked"})]})]})},v={render:()=>e.jsxs(ve,{w:"full",h:"full",position:"relative",placeContent:"center",alignItems:"center",justifyItems:"center",gap:"16",children:[e.jsxs(ze,{gap:"20",children:[e.jsx(s,{src:a.user1,presence:"online",status:"approved",size:{base:"3xl",xs:"2xl",sm:"xl",md:"lg",lg:"md",xl:"sm"},shape:"circle"}),e.jsx(s,{src:a.user2,presence:"online",status:"approved",size:{base:"3xl",xs:"2xl",sm:"xl",md:"lg",lg:"md",xl:"sm"},shape:"square"}),e.jsx(s,{src:a.user3,presence:"online",status:"approved",size:{base:"3xl",xs:"2xl",sm:"xl",md:"lg",lg:"md",xl:"sm"},shape:"hexagon"})]}),e.jsxs(n,{textAlign:"center",textStyle:"mono.sm",_after:{display:"inline",content:{base:'"2xl"',xs:'"xl"',sm:'"lg"',md:'"md"',lg:'"sm"',xl:'"xs"'},color:"text.bold",fontWeight:"bold"},children:["Size:"," "]}),e.jsx(Ae,{})]}),parameters:{controls:{disable:!0}}},z={render:()=>e.jsx(r,{display:"flex",flexDir:"column",gap:"8",children:[{name:"Alice Johnson",presence:"online",img:a.user1},{name:"Bob Smith",presence:"busy",img:a.user2},{name:"Charlie Brown",presence:"offline",img:a.user3},{name:"Diana Prince",presence:"focus",img:a.user4}].map(l=>e.jsxs(r,{display:"flex",gap:"8",alignItems:"center",children:[e.jsx(s,{size:"md",src:l.img,name:l.name,presence:l.presence}),e.jsxs(je,{gap:"8",alignItems:"baseline",children:[e.jsx(n,{fontWeight:"medium",color:"text",children:l.name}),e.jsx(n,{fontSize:"12",color:"text.subtle",children:l.presence==="online"?"Available":l.presence==="busy"?"In a meeting":l.presence==="focus"?"Do not disturb":"Away"})]})]},l.name))})},j={render:()=>e.jsxs(r,{display:"flex",flexDir:"column",gap:"4",children:[e.jsx(n,{fontWeight:"bold",children:"Project/Entity Avatars (Square)"}),e.jsxs(r,{display:"flex",gap:"4",children:[e.jsxs(r,{display:"flex",flexDir:"column",gap:"2",alignItems:"center",children:[e.jsx(s,{shape:"square",size:"lg",name:"Design System"}),e.jsx(n,{fontSize:"12",children:"Design System"})]}),e.jsxs(r,{display:"flex",flexDir:"column",gap:"2",alignItems:"center",children:[e.jsx(s,{shape:"square",size:"lg",name:"Marketing"}),e.jsx(n,{fontSize:"12",children:"Marketing"})]}),e.jsxs(r,{display:"flex",flexDir:"column",gap:"2",alignItems:"center",children:[e.jsx(s,{shape:"square",size:"lg",name:"Engineering"}),e.jsx(n,{fontSize:"12",children:"Engineering"})]})]})]})},A={render:()=>e.jsxs(r,{display:"flex",flexDir:"column",gap:"4",children:[e.jsx(n,{fontWeight:"bold",children:"Stacked Avatars"}),e.jsxs(r,{display:"flex",children:[[a.user1,a.user2,a.user3,a.user4].map((l,he)=>e.jsx(r,{ml:he>0?"-8":"0",position:"relative",children:e.jsx(s,{size:"md",src:l})},l)),e.jsx(r,{ml:"-8",position:"relative",children:e.jsx(s,{size:"md",fallback:"+3"})})]})]})},Je=["Default","Sizes","SizesWithLabels","Shapes","WithInitials","WithCustomFallback","ImageLoadError","Presence","PresenceAllSizes","Status","StatusAllSizes","PresenceAndStatus","ConditionalBreakpoints","UserList","ProjectAvatars","AvatarStack"];var B,S,D;t.parameters={...t.parameters,docs:{...(B=t.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    src: sampleAvatars.user1,
    name: 'John Doe',
    alt: 'John Doe'
  }
}`,...(D=(S=t.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var b,I,T;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <Box display="flex" gap="4" alignItems="center">
      <Avatar size="sm" src={sampleAvatars.user1} name="John Doe" />
      <Avatar size="md" src={sampleAvatars.user1} name="John Doe" />
      <Avatar size="lg" src={sampleAvatars.user1} name="John Doe" />
      <Avatar size="xl" src={sampleAvatars.user1} name="John Doe" />
      <Avatar size="2xl" src={sampleAvatars.user1} name="John Doe" />
      <Avatar size="3xl" src={sampleAvatars.user1} name="John Doe" />
    </Box>
}`,...(T=(I=i.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var k,W,J;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDir="column" gap="4">
      {(['sm', 'md', 'lg', 'xl', '2xl', '3xl'] as const).map(size => <Box key={size} display="flex" gap="4" alignItems="center">
          <Text w="80" fontWeight="medium">
            {size}:
          </Text>
          <Avatar size={size} src={sampleAvatars.user1} name="John Doe" />
        </Box>)}
    </Box>
}`,...(J=(W=o.parameters)==null?void 0:W.docs)==null?void 0:J.source}}};var q,w,P;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(P=(w=c.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var C,E,L;x.parameters={...x.parameters,docs:{...(C=x.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <Box display="flex" gap="4" alignItems="center">
      <Avatar size="sm" name="John Doe" />
      <Avatar size="md" name="Alice Smith" />
      <Avatar size="lg" name="Bob" />
      <Avatar size="xl" name="Charlie Brown" />
    </Box>
}`,...(L=(E=x.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var F,H,O;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <Box display="flex" gap="4" alignItems="center">
      <Avatar size="md" fallback={<Icon name="user" />} />
      <Avatar size="md" fallback={<Icon name="user-group" />} />
      <Avatar size="md" fallback={<Icon name="building" />} />
      <Avatar size="md" fallback="?" />
    </Box>
}`,...(O=(H=p.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};var G,M,_;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDir="column" gap="4">
      <Text>When image fails to load, fallback is shown:</Text>
      <Box display="flex" gap="4" alignItems="center">
        <Avatar size="md" src="invalid-url.jpg" name="John Doe" />
        <Avatar size="md" src="invalid-url.jpg" />
        <Avatar size="md" src="invalid-url.jpg" fallback={<Icon name="user" />} />
      </Box>
    </Box>
}`,...(_=(M=m.parameters)==null?void 0:M.docs)==null?void 0:_.source}}};var U,R,N;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(N=(R=d.parameters)==null?void 0:R.docs)==null?void 0:N.source}}};var K,Q,V;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <Box display="flex" gap="4" alignItems="center">
      <Avatar size="sm" src={sampleAvatars.user1} presence="online" />
      <Avatar size="md" src={sampleAvatars.user1} presence="online" />
      <Avatar size="lg" src={sampleAvatars.user1} presence="online" />
      <Avatar size="xl" src={sampleAvatars.user1} presence="online" />
      <Avatar size="2xl" src={sampleAvatars.user1} presence="online" />
      <Avatar size="3xl" src={sampleAvatars.user1} presence="online" />
    </Box>
}`,...(V=(Q=u.parameters)==null?void 0:Q.docs)==null?void 0:V.source}}};var X,Y,Z;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Z=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,se;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <Box display="flex" gap="4" alignItems="center">
      <Avatar size="sm" src={sampleAvatars.user1} status="approved" />
      <Avatar size="md" src={sampleAvatars.user1} status="approved" />
      <Avatar size="lg" src={sampleAvatars.user1} status="approved" />
      <Avatar size="xl" src={sampleAvatars.user1} status="approved" />
      <Avatar size="2xl" src={sampleAvatars.user1} status="approved" />
      <Avatar size="3xl" src={sampleAvatars.user1} status="approved" />
    </Box>
}`,...(se=(ee=f.parameters)==null?void 0:ee.docs)==null?void 0:se.source}}};var ae,re,ne;h.parameters={...h.parameters,docs:{...(ae=h.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDir="column" gap="4">
      <Text>Both presence and status can be shown together:</Text>
      <Box display="flex" gap="4" alignItems="center">
        <Avatar size="lg" src={sampleAvatars.user1} presence="online" status="approved" />
        <Avatar size="lg" src={sampleAvatars.user2} presence="busy" status="declined" />
        <Avatar size="lg" src={sampleAvatars.user3} presence="offline" status="locked" />
      </Box>
    </Box>
}`,...(ne=(re=h.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var le,te,ie;v.parameters={...v.parameters,docs:{...(le=v.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(ie=(te=v.parameters)==null?void 0:te.docs)==null?void 0:ie.source}}};var oe,ce,xe;z.parameters={...z.parameters,docs:{...(oe=z.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(xe=(ce=z.parameters)==null?void 0:ce.docs)==null?void 0:xe.source}}};var pe,me,de;j.parameters={...j.parameters,docs:{...(pe=j.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(de=(me=j.parameters)==null?void 0:me.docs)==null?void 0:de.source}}};var ue,ge,fe;A.parameters={...A.parameters,docs:{...(ue=A.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDir="column" gap="4">
      <Text fontWeight="bold">Stacked Avatars</Text>
      <Box display="flex">
        {[sampleAvatars.user1, sampleAvatars.user2, sampleAvatars.user3, sampleAvatars.user4].map((src, i) => <Box key={src} ml={i > 0 ? '-8' : '0'} position="relative">
            <Avatar size="md" src={src} />
          </Box>)}
        <Box ml="-8" position="relative">
          <Avatar size="md" fallback="+3" />
        </Box>
      </Box>
    </Box>
}`,...(fe=(ge=A.parameters)==null?void 0:ge.docs)==null?void 0:fe.source}}};export{A as AvatarStack,v as ConditionalBreakpoints,t as Default,m as ImageLoadError,d as Presence,u as PresenceAllSizes,h as PresenceAndStatus,j as ProjectAvatars,c as Shapes,i as Sizes,o as SizesWithLabels,g as Status,f as StatusAllSizes,z as UserList,p as WithCustomFallback,x as WithInitials,Je as __namedExportsOrder,We as default};
