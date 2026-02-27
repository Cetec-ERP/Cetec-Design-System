import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{A as s}from"./Avatar-CO9aEL8s.js";import{B as r}from"./Box-Do4kfhe3.js";import{T as n}from"./Text-DeSZ72bP.js";import{I as v}from"./Icon-DZeLJqXX.js";import"./index-BCtMShv3.js";const Ie={title:"Components/Avatar",component:s,tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","sm","md","lg","xl","2xl"],description:"Size of the avatar"},shape:{control:"select",options:["circle","square","hexagon"],description:"Shape of the avatar (circle for users, square for projects, hexagon for an agent entity)"},presence:{control:"select",options:[void 0,"online","busy","offline","focus"],description:"Presence indicator shown at bottom-right"},status:{control:"select",options:[void 0,"approved","declined","locked"],description:"Status indicator shown at top-right"},name:{control:"text",description:"Name for generating initials fallback"},src:{control:"text",description:"Image source URL"}},args:{size:"md",shape:"circle"}},a={user1:"https://i.pravatar.cc/150?img=1",user2:"https://i.pravatar.cc/150?img=2",user3:"https://i.pravatar.cc/150?img=3",user4:"https://i.pravatar.cc/150?img=4",user5:"https://i.pravatar.cc/150?img=5"},i={args:{src:a.user1,name:"John Doe",alt:"John Doe"}},t={render:()=>e.jsxs(r,{display:"flex",gap:"4",alignItems:"center",children:[e.jsx(s,{size:"xs",src:a.user1,name:"John Doe"}),e.jsx(s,{size:"sm",src:a.user1,name:"John Doe"}),e.jsx(s,{size:"md",src:a.user1,name:"John Doe"}),e.jsx(s,{size:"lg",src:a.user1,name:"John Doe"}),e.jsx(s,{size:"xl",src:a.user1,name:"John Doe"}),e.jsx(s,{size:"2xl",src:a.user1,name:"John Doe"})]})},o={render:()=>e.jsx(r,{display:"flex",flexDir:"column",gap:"4",children:["xs","sm","md","lg","xl","2xl"].map(l=>e.jsxs(r,{display:"flex",gap:"4",alignItems:"center",children:[e.jsxs(n,{w:"80",fontWeight:"500",children:[l,":"]}),e.jsx(s,{size:l,src:a.user1,name:"John Doe"})]},l))})},c={render:()=>e.jsxs(r,{display:"flex",flexDir:"column",gap:"6",children:[e.jsxs(r,{display:"flex",flexDir:"column",gap:"2",children:[e.jsx(n,{fontWeight:"600",children:"Circle (for users)"}),e.jsxs(r,{display:"flex",gap:"4",alignItems:"center",children:[e.jsx(s,{shape:"circle",size:"sm",src:a.user1}),e.jsx(s,{shape:"circle",size:"md",src:a.user2}),e.jsx(s,{shape:"circle",size:"lg",src:a.user3})]})]}),e.jsxs(r,{display:"flex",flexDir:"column",gap:"2",children:[e.jsx(n,{fontWeight:"600",children:"Square (for projects/entities)"}),e.jsxs(r,{display:"flex",gap:"4",alignItems:"center",children:[e.jsx(s,{shape:"square",size:"sm",src:a.user4}),e.jsx(s,{shape:"square",size:"md",src:a.user5}),e.jsx(s,{shape:"square",size:"lg",src:a.user1})]})]}),e.jsxs(r,{display:"flex",flexDir:"column",gap:"2",children:[e.jsx(n,{fontWeight:"600",children:"Hexagon (for an agent entity)"}),e.jsxs(r,{display:"flex",gap:"4",alignItems:"center",children:[e.jsx(s,{shape:"hexagon",size:"sm",src:a.user4}),e.jsx(s,{shape:"hexagon",size:"md",src:a.user5}),e.jsx(s,{shape:"hexagon",size:"lg",src:a.user1})]})]})]})},p={render:()=>e.jsxs(r,{display:"flex",gap:"4",alignItems:"center",children:[e.jsx(s,{size:"sm",name:"John Doe"}),e.jsx(s,{size:"md",name:"Alice Smith"}),e.jsx(s,{size:"lg",name:"Bob"}),e.jsx(s,{size:"xl",name:"Charlie Brown"})]})},x={render:()=>e.jsxs(r,{display:"flex",gap:"4",alignItems:"center",children:[e.jsx(s,{size:"md",fallback:e.jsx(v,{name:"user"})}),e.jsx(s,{size:"md",fallback:e.jsx(v,{name:"user-group"})}),e.jsx(s,{size:"md",fallback:e.jsx(v,{name:"Building"})}),e.jsx(s,{size:"md",fallback:"?"})]})},m={render:()=>e.jsxs(r,{display:"flex",flexDir:"column",gap:"4",children:[e.jsx(n,{children:"When image fails to load, fallback is shown:"}),e.jsxs(r,{display:"flex",gap:"4",alignItems:"center",children:[e.jsx(s,{size:"md",src:"invalid-url.jpg",name:"John Doe"}),e.jsx(s,{size:"md",src:"invalid-url.jpg"}),e.jsx(s,{size:"md",src:"invalid-url.jpg",fallback:e.jsx(v,{name:"user"})})]})]})},d={render:()=>e.jsxs(r,{display:"flex",flexDir:"column",gap:"6",children:[e.jsx(n,{fontWeight:"600",children:"Presence indicates availability (bottom-right)"}),e.jsxs(r,{display:"flex",gap:"6",alignItems:"center",children:[e.jsxs(r,{display:"flex",flexDir:"column",gap:"2",alignItems:"center",children:[e.jsx(s,{size:"lg",src:a.user1,presence:"online"}),e.jsx(n,{fontSize:"12",children:"Online"})]}),e.jsxs(r,{display:"flex",flexDir:"column",gap:"2",alignItems:"center",children:[e.jsx(s,{size:"lg",src:a.user2,presence:"busy"}),e.jsx(n,{fontSize:"12",children:"Busy"})]}),e.jsxs(r,{display:"flex",flexDir:"column",gap:"2",alignItems:"center",children:[e.jsx(s,{size:"lg",src:a.user3,presence:"offline"}),e.jsx(n,{fontSize:"12",children:"Offline"})]}),e.jsxs(r,{display:"flex",flexDir:"column",gap:"2",alignItems:"center",children:[e.jsx(s,{size:"lg",src:a.user4,presence:"focus"}),e.jsx(n,{fontSize:"12",children:"Focus"})]})]})]})},g={render:()=>e.jsxs(r,{display:"flex",gap:"4",alignItems:"center",children:[e.jsx(s,{size:"xs",src:a.user1,presence:"online"}),e.jsx(s,{size:"sm",src:a.user1,presence:"online"}),e.jsx(s,{size:"md",src:a.user1,presence:"online"}),e.jsx(s,{size:"lg",src:a.user1,presence:"online"}),e.jsx(s,{size:"xl",src:a.user1,presence:"online"}),e.jsx(s,{size:"2xl",src:a.user1,presence:"online"})]})},u={render:()=>e.jsxs(r,{display:"flex",flexDir:"column",gap:"6",children:[e.jsx(n,{fontWeight:"600",children:"Status shows contextual information (top-right)"}),e.jsxs(r,{display:"flex",gap:"6",alignItems:"center",children:[e.jsxs(r,{display:"flex",flexDir:"column",gap:"2",alignItems:"center",children:[e.jsx(s,{size:"lg",src:a.user1,status:"approved"}),e.jsx(n,{fontSize:"12",children:"Approved"})]}),e.jsxs(r,{display:"flex",flexDir:"column",gap:"2",alignItems:"center",children:[e.jsx(s,{size:"lg",src:a.user2,status:"declined"}),e.jsx(n,{fontSize:"12",children:"Declined"})]}),e.jsxs(r,{display:"flex",flexDir:"column",gap:"2",alignItems:"center",children:[e.jsx(s,{size:"lg",src:a.user3,status:"locked"}),e.jsx(n,{fontSize:"12",children:"Locked"})]})]})]})},f={render:()=>e.jsxs(r,{display:"flex",gap:"4",alignItems:"center",children:[e.jsx(s,{size:"xs",src:a.user1,status:"approved"}),e.jsx(s,{size:"sm",src:a.user1,status:"approved"}),e.jsx(s,{size:"md",src:a.user1,status:"approved"}),e.jsx(s,{size:"lg",src:a.user1,status:"approved"}),e.jsx(s,{size:"xl",src:a.user1,status:"approved"}),e.jsx(s,{size:"2xl",src:a.user1,status:"approved"})]})},h={render:()=>e.jsxs(r,{display:"flex",flexDir:"column",gap:"4",children:[e.jsx(n,{children:"Both presence and status can be shown together:"}),e.jsxs(r,{display:"flex",gap:"4",alignItems:"center",children:[e.jsx(s,{size:"lg",src:a.user1,presence:"online",status:"approved"}),e.jsx(s,{size:"lg",src:a.user2,presence:"busy",status:"declined"}),e.jsx(s,{size:"lg",src:a.user3,presence:"offline",status:"locked"})]})]})},z={render:()=>e.jsx(r,{display:"flex",flexDir:"column",gap:"3",children:[{name:"Alice Johnson",presence:"online",img:a.user1},{name:"Bob Smith",presence:"busy",img:a.user2},{name:"Charlie Brown",presence:"offline",img:a.user3},{name:"Diana Prince",presence:"focus",img:a.user4}].map(l=>e.jsxs(r,{display:"flex",gap:"3",alignItems:"center",children:[e.jsx(s,{size:"md",src:l.img,name:l.name,presence:l.presence}),e.jsxs(r,{children:[e.jsx(n,{fontWeight:"500",children:l.name}),e.jsx(n,{fontSize:"12",color:"text.subtle",children:l.presence==="online"?"Available":l.presence==="busy"?"In a meeting":l.presence==="focus"?"Do not disturb":"Away"})]})]},l.name))})},j={render:()=>e.jsxs(r,{display:"flex",flexDir:"column",gap:"4",children:[e.jsx(n,{fontWeight:"600",children:"Project/Entity Avatars (Square)"}),e.jsxs(r,{display:"flex",gap:"4",children:[e.jsxs(r,{display:"flex",flexDir:"column",gap:"2",alignItems:"center",children:[e.jsx(s,{shape:"square",size:"lg",name:"Design System"}),e.jsx(n,{fontSize:"12",children:"Design System"})]}),e.jsxs(r,{display:"flex",flexDir:"column",gap:"2",alignItems:"center",children:[e.jsx(s,{shape:"square",size:"lg",name:"Marketing"}),e.jsx(n,{fontSize:"12",children:"Marketing"})]}),e.jsxs(r,{display:"flex",flexDir:"column",gap:"2",alignItems:"center",children:[e.jsx(s,{shape:"square",size:"lg",name:"Engineering"}),e.jsx(n,{fontSize:"12",children:"Engineering"})]})]})]})},I={render:()=>e.jsxs(r,{display:"flex",flexDir:"column",gap:"4",children:[e.jsx(n,{fontWeight:"600",children:"Stacked Avatars"}),e.jsxs(r,{display:"flex",children:[[a.user1,a.user2,a.user3,a.user4].map((l,y)=>e.jsx(r,{style:{marginLeft:y>0?"-8px":"0"},position:"relative",zIndex:4-y,children:e.jsx(s,{size:"md",src:l,borderColor:"var(--colors-bg)"})},y)),e.jsx(r,{style:{marginLeft:"-8px"},position:"relative",zIndex:0,children:e.jsx(s,{size:"md",fallback:"+3"})})]})]})};var B,A,D;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    src: sampleImages.user1,
    name: 'John Doe',
    alt: 'John Doe'
  }
}`,...(D=(A=i.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var S,b,T;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <Box display="flex" gap="4" alignItems="center">
      <Avatar size="xs" src={sampleImages.user1} name="John Doe" />
      <Avatar size="sm" src={sampleImages.user1} name="John Doe" />
      <Avatar size="md" src={sampleImages.user1} name="John Doe" />
      <Avatar size="lg" src={sampleImages.user1} name="John Doe" />
      <Avatar size="xl" src={sampleImages.user1} name="John Doe" />
      <Avatar size="2xl" src={sampleImages.user1} name="John Doe" />
    </Box>
}`,...(T=(b=t.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};var k,W,J;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDir="column" gap="4">
      {(['xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const).map(size => <Box key={size} display="flex" gap="4" alignItems="center">
          <Text w="80" fontWeight="500">
            {size}:
          </Text>
          <Avatar size={size} src={sampleImages.user1} name="John Doe" />
        </Box>)}
    </Box>
}`,...(J=(W=o.parameters)==null?void 0:W.docs)==null?void 0:J.source}}};var q,w,P;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDir="column" gap="6">
      <Box display="flex" flexDir="column" gap="2">
        <Text fontWeight="600">Circle (for users)</Text>
        <Box display="flex" gap="4" alignItems="center">
          <Avatar shape="circle" size="sm" src={sampleImages.user1} />
          <Avatar shape="circle" size="md" src={sampleImages.user2} />
          <Avatar shape="circle" size="lg" src={sampleImages.user3} />
        </Box>
      </Box>
      <Box display="flex" flexDir="column" gap="2">
        <Text fontWeight="600">Square (for projects/entities)</Text>
        <Box display="flex" gap="4" alignItems="center">
          <Avatar shape="square" size="sm" src={sampleImages.user4} />
          <Avatar shape="square" size="md" src={sampleImages.user5} />
          <Avatar shape="square" size="lg" src={sampleImages.user1} />
        </Box>
      </Box>
      <Box display="flex" flexDir="column" gap="2">
        <Text fontWeight="600">Hexagon (for an agent entity)</Text>
        <Box display="flex" gap="4" alignItems="center">
          <Avatar shape="hexagon" size="sm" src={sampleImages.user4} />
          <Avatar shape="hexagon" size="md" src={sampleImages.user5} />
          <Avatar shape="hexagon" size="lg" src={sampleImages.user1} />
        </Box>
      </Box>
    </Box>
}`,...(P=(w=c.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var L,C,E;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <Box display="flex" gap="4" alignItems="center">
      <Avatar size="sm" name="John Doe" />
      <Avatar size="md" name="Alice Smith" />
      <Avatar size="lg" name="Bob" />
      <Avatar size="xl" name="Charlie Brown" />
    </Box>
}`,...(E=(C=p.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var O,F,M;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <Box display="flex" gap="4" alignItems="center">
      <Avatar size="md" fallback={<Icon name="user" />} />
      <Avatar size="md" fallback={<Icon name="user-group" />} />
      <Avatar size="md" fallback={<Icon name="Building" />} />
      <Avatar size="md" fallback="?" />
    </Box>
}`,...(M=(F=x.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var U,H,R;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDir="column" gap="4">
      <Text>When image fails to load, fallback is shown:</Text>
      <Box display="flex" gap="4" alignItems="center">
        <Avatar size="md" src="invalid-url.jpg" name="John Doe" />
        <Avatar size="md" src="invalid-url.jpg" />
        <Avatar size="md" src="invalid-url.jpg" fallback={<Icon name="user" />} />
      </Box>
    </Box>
}`,...(R=(H=m.parameters)==null?void 0:H.docs)==null?void 0:R.source}}};var _,N,G;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDir="column" gap="6">
      <Text fontWeight="600">
        Presence indicates availability (bottom-right)
      </Text>
      <Box display="flex" gap="6" alignItems="center">
        <Box display="flex" flexDir="column" gap="2" alignItems="center">
          <Avatar size="lg" src={sampleImages.user1} presence="online" />
          <Text fontSize="12">Online</Text>
        </Box>
        <Box display="flex" flexDir="column" gap="2" alignItems="center">
          <Avatar size="lg" src={sampleImages.user2} presence="busy" />
          <Text fontSize="12">Busy</Text>
        </Box>
        <Box display="flex" flexDir="column" gap="2" alignItems="center">
          <Avatar size="lg" src={sampleImages.user3} presence="offline" />
          <Text fontSize="12">Offline</Text>
        </Box>
        <Box display="flex" flexDir="column" gap="2" alignItems="center">
          <Avatar size="lg" src={sampleImages.user4} presence="focus" />
          <Text fontSize="12">Focus</Text>
        </Box>
      </Box>
    </Box>
}`,...(G=(N=d.parameters)==null?void 0:N.docs)==null?void 0:G.source}}};var K,Q,V;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <Box display="flex" gap="4" alignItems="center">
      <Avatar size="xs" src={sampleImages.user1} presence="online" />
      <Avatar size="sm" src={sampleImages.user1} presence="online" />
      <Avatar size="md" src={sampleImages.user1} presence="online" />
      <Avatar size="lg" src={sampleImages.user1} presence="online" />
      <Avatar size="xl" src={sampleImages.user1} presence="online" />
      <Avatar size="2xl" src={sampleImages.user1} presence="online" />
    </Box>
}`,...(V=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:V.source}}};var X,Y,Z;u.parameters={...u.parameters,docs:{...(X=u.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDir="column" gap="6">
      <Text fontWeight="600">
        Status shows contextual information (top-right)
      </Text>
      <Box display="flex" gap="6" alignItems="center">
        <Box display="flex" flexDir="column" gap="2" alignItems="center">
          <Avatar size="lg" src={sampleImages.user1} status="approved" />
          <Text fontSize="12">Approved</Text>
        </Box>
        <Box display="flex" flexDir="column" gap="2" alignItems="center">
          <Avatar size="lg" src={sampleImages.user2} status="declined" />
          <Text fontSize="12">Declined</Text>
        </Box>
        <Box display="flex" flexDir="column" gap="2" alignItems="center">
          <Avatar size="lg" src={sampleImages.user3} status="locked" />
          <Text fontSize="12">Locked</Text>
        </Box>
      </Box>
    </Box>
}`,...(Z=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,se;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <Box display="flex" gap="4" alignItems="center">
      <Avatar size="xs" src={sampleImages.user1} status="approved" />
      <Avatar size="sm" src={sampleImages.user1} status="approved" />
      <Avatar size="md" src={sampleImages.user1} status="approved" />
      <Avatar size="lg" src={sampleImages.user1} status="approved" />
      <Avatar size="xl" src={sampleImages.user1} status="approved" />
      <Avatar size="2xl" src={sampleImages.user1} status="approved" />
    </Box>
}`,...(se=(ee=f.parameters)==null?void 0:ee.docs)==null?void 0:se.source}}};var ae,re,ne;h.parameters={...h.parameters,docs:{...(ae=h.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDir="column" gap="4">
      <Text>Both presence and status can be shown together:</Text>
      <Box display="flex" gap="4" alignItems="center">
        <Avatar size="lg" src={sampleImages.user1} presence="online" status="approved" />
        <Avatar size="lg" src={sampleImages.user2} presence="busy" status="declined" />
        <Avatar size="lg" src={sampleImages.user3} presence="offline" status="locked" />
      </Box>
    </Box>
}`,...(ne=(re=h.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var le,ie,te;z.parameters={...z.parameters,docs:{...(le=z.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDir="column" gap="3">
      {[{
      name: 'Alice Johnson',
      presence: 'online' as const,
      img: sampleImages.user1
    }, {
      name: 'Bob Smith',
      presence: 'busy' as const,
      img: sampleImages.user2
    }, {
      name: 'Charlie Brown',
      presence: 'offline' as const,
      img: sampleImages.user3
    }, {
      name: 'Diana Prince',
      presence: 'focus' as const,
      img: sampleImages.user4
    }].map(user => <Box key={user.name} display="flex" gap="3" alignItems="center">
          <Avatar size="md" src={user.img} name={user.name} presence={user.presence} />
          <Box>
            <Text fontWeight="500">{user.name}</Text>
            <Text fontSize="12" color="text.subtle">
              {user.presence === 'online' ? 'Available' : user.presence === 'busy' ? 'In a meeting' : user.presence === 'focus' ? 'Do not disturb' : 'Away'}
            </Text>
          </Box>
        </Box>)}
    </Box>
}`,...(te=(ie=z.parameters)==null?void 0:ie.docs)==null?void 0:te.source}}};var oe,ce,pe;j.parameters={...j.parameters,docs:{...(oe=j.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDir="column" gap="4">
      <Text fontWeight="600">Project/Entity Avatars (Square)</Text>
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
}`,...(pe=(ce=j.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var xe,me,de;I.parameters={...I.parameters,docs:{...(xe=I.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDir="column" gap="4">
      <Text fontWeight="600">Stacked Avatars</Text>
      <Box display="flex">
        {[sampleImages.user1, sampleImages.user2, sampleImages.user3, sampleImages.user4].map((src, i) => <Box key={i} style={{
        marginLeft: i > 0 ? '-8px' : '0'
      }} position="relative" zIndex={4 - i}>
            <Avatar size="md" src={src} borderColor="var(--colors-bg)" />
          </Box>)}
        <Box style={{
        marginLeft: '-8px'
      }} position="relative" zIndex={0}>
          <Avatar size="md" fallback="+3" />
        </Box>
      </Box>
    </Box>
}`,...(de=(me=I.parameters)==null?void 0:me.docs)==null?void 0:de.source}}};const ve=["Default","Sizes","SizesWithLabels","Shapes","WithInitials","WithCustomFallback","ImageLoadError","Presence","PresenceAllSizes","Status","StatusAllSizes","PresenceAndStatus","UserList","ProjectAvatars","AvatarStack"];export{I as AvatarStack,i as Default,m as ImageLoadError,d as Presence,g as PresenceAllSizes,h as PresenceAndStatus,j as ProjectAvatars,c as Shapes,t as Sizes,o as SizesWithLabels,u as Status,f as StatusAllSizes,z as UserList,x as WithCustomFallback,p as WithInitials,ve as __namedExportsOrder,Ie as default};
