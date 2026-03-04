import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as r}from"./Box-DKmSdfHE.js";import{I as v}from"./Icon-D93YU_Y7.js";import{T as n}from"./Text-BrVA7iWX.js";import{A as s}from"./Avatar-Cxs4ih2o.js";import"./index-BKyFwriW.js";import"./_commonjsHelpers-CqkleIqs.js";const ve={title:"Components/Avatar",component:s,tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","sm","md","lg","xl","2xl"],description:"Size of the avatar"},shape:{control:"select",options:["circle","square","hexagon"],description:"Shape of the avatar (circle for users, square for projects, hexagon for an agent entity)"},presence:{control:"select",options:[void 0,"online","busy","offline","focus"],description:"Presence indicator shown at bottom-right"},status:{control:"select",options:[void 0,"approved","declined","locked"],description:"Status indicator shown at top-right"},name:{control:"text",description:"Name for generating initials fallback"},src:{control:"text",description:"Image source URL"}},args:{size:"md",shape:"circle"}},a={user1:"https://i.pravatar.cc/150?img=1",user2:"https://i.pravatar.cc/150?img=2",user3:"https://i.pravatar.cc/150?img=3",user4:"https://i.pravatar.cc/150?img=4",user5:"https://i.pravatar.cc/150?img=5"},i={args:{src:a.user1,name:"John Doe",alt:"John Doe"}},t={render:()=>e.jsxs(r,{display:"flex",gap:"4",alignItems:"center",children:[e.jsx(s,{size:"xs",src:a.user1,name:"John Doe"}),e.jsx(s,{size:"sm",src:a.user1,name:"John Doe"}),e.jsx(s,{size:"md",src:a.user1,name:"John Doe"}),e.jsx(s,{size:"lg",src:a.user1,name:"John Doe"}),e.jsx(s,{size:"xl",src:a.user1,name:"John Doe"}),e.jsx(s,{size:"2xl",src:a.user1,name:"John Doe"})]})},o={render:()=>e.jsx(r,{display:"flex",flexDir:"column",gap:"4",children:["xs","sm","md","lg","xl","2xl"].map(l=>e.jsxs(r,{display:"flex",gap:"4",alignItems:"center",children:[e.jsxs(n,{w:"80",fontWeight:"medium",children:[l,":"]}),e.jsx(s,{size:l,src:a.user1,name:"John Doe"})]},l))})},c={render:()=>e.jsxs(r,{display:"flex",flexDir:"column",gap:"6",children:[e.jsxs(r,{display:"flex",flexDir:"column",gap:"2",children:[e.jsx(n,{fontWeight:"bold",children:"Circle (for users)"}),e.jsxs(r,{display:"flex",gap:"4",alignItems:"center",children:[e.jsx(s,{shape:"circle",size:"sm",src:a.user1}),e.jsx(s,{shape:"circle",size:"md",src:a.user2}),e.jsx(s,{shape:"circle",size:"lg",src:a.user3})]})]}),e.jsxs(r,{display:"flex",flexDir:"column",gap:"2",children:[e.jsx(n,{fontWeight:"bold",children:"Square (for projects/entities)"}),e.jsxs(r,{display:"flex",gap:"4",alignItems:"center",children:[e.jsx(s,{shape:"square",size:"sm",src:a.user4}),e.jsx(s,{shape:"square",size:"md",src:a.user5}),e.jsx(s,{shape:"square",size:"lg",src:a.user1})]})]}),e.jsxs(r,{display:"flex",flexDir:"column",gap:"2",children:[e.jsx(n,{fontWeight:"bold",children:"Hexagon (for an agent entity)"}),e.jsxs(r,{display:"flex",gap:"4",alignItems:"center",children:[e.jsx(s,{shape:"hexagon",size:"sm",src:a.user4}),e.jsx(s,{shape:"hexagon",size:"md",src:a.user5}),e.jsx(s,{shape:"hexagon",size:"lg",src:a.user1})]})]})]})},m={render:()=>e.jsxs(r,{display:"flex",gap:"4",alignItems:"center",children:[e.jsx(s,{size:"sm",name:"John Doe"}),e.jsx(s,{size:"md",name:"Alice Smith"}),e.jsx(s,{size:"lg",name:"Bob"}),e.jsx(s,{size:"xl",name:"Charlie Brown"})]})},p={render:()=>e.jsxs(r,{display:"flex",gap:"4",alignItems:"center",children:[e.jsx(s,{size:"md",fallback:e.jsx(v,{name:"user"})}),e.jsx(s,{size:"md",fallback:e.jsx(v,{name:"user-group"})}),e.jsx(s,{size:"md",fallback:e.jsx(v,{name:"building"})}),e.jsx(s,{size:"md",fallback:"?"})]})},x={render:()=>e.jsxs(r,{display:"flex",flexDir:"column",gap:"4",children:[e.jsx(n,{children:"When image fails to load, fallback is shown:"}),e.jsxs(r,{display:"flex",gap:"4",alignItems:"center",children:[e.jsx(s,{size:"md",src:"invalid-url.jpg",name:"John Doe"}),e.jsx(s,{size:"md",src:"invalid-url.jpg"}),e.jsx(s,{size:"md",src:"invalid-url.jpg",fallback:e.jsx(v,{name:"user"})})]})]})},d={render:()=>e.jsxs(r,{display:"flex",flexDir:"column",gap:"6",children:[e.jsx(n,{fontWeight:"bold",children:"Presence indicates availability (bottom-right)"}),e.jsxs(r,{display:"flex",gap:"6",alignItems:"center",children:[e.jsxs(r,{display:"flex",flexDir:"column",gap:"2",alignItems:"center",children:[e.jsx(s,{size:"lg",src:a.user1,presence:"online"}),e.jsx(n,{fontSize:"12",children:"Online"})]}),e.jsxs(r,{display:"flex",flexDir:"column",gap:"2",alignItems:"center",children:[e.jsx(s,{size:"lg",src:a.user2,presence:"busy"}),e.jsx(n,{fontSize:"12",children:"Busy"})]}),e.jsxs(r,{display:"flex",flexDir:"column",gap:"2",alignItems:"center",children:[e.jsx(s,{size:"lg",src:a.user3,presence:"offline"}),e.jsx(n,{fontSize:"12",children:"Offline"})]}),e.jsxs(r,{display:"flex",flexDir:"column",gap:"2",alignItems:"center",children:[e.jsx(s,{size:"lg",src:a.user4,presence:"focus"}),e.jsx(n,{fontSize:"12",children:"Focus"})]})]})]})},g={render:()=>e.jsxs(r,{display:"flex",gap:"4",alignItems:"center",children:[e.jsx(s,{size:"xs",src:a.user1,presence:"online"}),e.jsx(s,{size:"sm",src:a.user1,presence:"online"}),e.jsx(s,{size:"md",src:a.user1,presence:"online"}),e.jsx(s,{size:"lg",src:a.user1,presence:"online"}),e.jsx(s,{size:"xl",src:a.user1,presence:"online"}),e.jsx(s,{size:"2xl",src:a.user1,presence:"online"})]})},u={render:()=>e.jsxs(r,{display:"flex",flexDir:"column",gap:"6",children:[e.jsx(n,{fontWeight:"bold",children:"Status shows contextual information (top-right)"}),e.jsxs(r,{display:"flex",gap:"6",alignItems:"center",children:[e.jsxs(r,{display:"flex",flexDir:"column",gap:"2",alignItems:"center",children:[e.jsx(s,{size:"lg",src:a.user1,status:"approved"}),e.jsx(n,{fontSize:"12",children:"Approved"})]}),e.jsxs(r,{display:"flex",flexDir:"column",gap:"2",alignItems:"center",children:[e.jsx(s,{size:"lg",src:a.user2,status:"declined"}),e.jsx(n,{fontSize:"12",children:"Declined"})]}),e.jsxs(r,{display:"flex",flexDir:"column",gap:"2",alignItems:"center",children:[e.jsx(s,{size:"lg",src:a.user3,status:"locked"}),e.jsx(n,{fontSize:"12",children:"Locked"})]})]})]})},f={render:()=>e.jsxs(r,{display:"flex",gap:"4",alignItems:"center",children:[e.jsx(s,{size:"xs",src:a.user1,status:"approved"}),e.jsx(s,{size:"sm",src:a.user1,status:"approved"}),e.jsx(s,{size:"md",src:a.user1,status:"approved"}),e.jsx(s,{size:"lg",src:a.user1,status:"approved"}),e.jsx(s,{size:"xl",src:a.user1,status:"approved"}),e.jsx(s,{size:"2xl",src:a.user1,status:"approved"})]})},h={render:()=>e.jsxs(r,{display:"flex",flexDir:"column",gap:"4",children:[e.jsx(n,{children:"Both presence and status can be shown together:"}),e.jsxs(r,{display:"flex",gap:"4",alignItems:"center",children:[e.jsx(s,{size:"lg",src:a.user1,presence:"online",status:"approved"}),e.jsx(s,{size:"lg",src:a.user2,presence:"busy",status:"declined"}),e.jsx(s,{size:"lg",src:a.user3,presence:"offline",status:"locked"})]})]})},z={render:()=>e.jsx(r,{display:"flex",flexDir:"column",gap:"3",children:[{name:"Alice Johnson",presence:"online",img:a.user1},{name:"Bob Smith",presence:"busy",img:a.user2},{name:"Charlie Brown",presence:"offline",img:a.user3},{name:"Diana Prince",presence:"focus",img:a.user4}].map(l=>e.jsxs(r,{display:"flex",gap:"3",alignItems:"center",children:[e.jsx(s,{size:"md",src:l.img,name:l.name,presence:l.presence}),e.jsxs(r,{children:[e.jsx(n,{fontWeight:"medium",children:l.name}),e.jsx(n,{fontSize:"12",color:"text.subtle",children:l.presence==="online"?"Available":l.presence==="busy"?"In a meeting":l.presence==="focus"?"Do not disturb":"Away"})]})]},l.name))})},j={render:()=>e.jsxs(r,{display:"flex",flexDir:"column",gap:"4",children:[e.jsx(n,{fontWeight:"bold",children:"Project/Entity Avatars (Square)"}),e.jsxs(r,{display:"flex",gap:"4",children:[e.jsxs(r,{display:"flex",flexDir:"column",gap:"2",alignItems:"center",children:[e.jsx(s,{shape:"square",size:"lg",name:"Design System"}),e.jsx(n,{fontSize:"12",children:"Design System"})]}),e.jsxs(r,{display:"flex",flexDir:"column",gap:"2",alignItems:"center",children:[e.jsx(s,{shape:"square",size:"lg",name:"Marketing"}),e.jsx(n,{fontSize:"12",children:"Marketing"})]}),e.jsxs(r,{display:"flex",flexDir:"column",gap:"2",alignItems:"center",children:[e.jsx(s,{shape:"square",size:"lg",name:"Engineering"}),e.jsx(n,{fontSize:"12",children:"Engineering"})]})]})]})},I={render:()=>e.jsxs(r,{display:"flex",flexDir:"column",gap:"4",children:[e.jsx(n,{fontWeight:"bold",children:"Stacked Avatars"}),e.jsxs(r,{display:"flex",children:[[a.user1,a.user2,a.user3,a.user4].map((l,de)=>e.jsx(r,{ml:de>0?"-8":"0",position:"relative",children:e.jsx(s,{size:"md",src:l})},l)),e.jsx(r,{ml:"-8",position:"relative",children:e.jsx(s,{size:"md",fallback:"+3"})})]})]})};var y,B,A;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    src: sampleImages.user1,
    name: 'John Doe',
    alt: 'John Doe'
  }
}`,...(A=(B=i.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};var D,S,b;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <Box display="flex" gap="4" alignItems="center">
      <Avatar size="xs" src={sampleImages.user1} name="John Doe" />
      <Avatar size="sm" src={sampleImages.user1} name="John Doe" />
      <Avatar size="md" src={sampleImages.user1} name="John Doe" />
      <Avatar size="lg" src={sampleImages.user1} name="John Doe" />
      <Avatar size="xl" src={sampleImages.user1} name="John Doe" />
      <Avatar size="2xl" src={sampleImages.user1} name="John Doe" />
    </Box>
}`,...(b=(S=t.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var T,k,W;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDir="column" gap="4">
      {(['xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const).map(size => <Box key={size} display="flex" gap="4" alignItems="center">
          <Text w="80" fontWeight="medium">
            {size}:
          </Text>
          <Avatar size={size} src={sampleImages.user1} name="John Doe" />
        </Box>)}
    </Box>
}`,...(W=(k=o.parameters)==null?void 0:k.docs)==null?void 0:W.source}}};var J,q,w;c.parameters={...c.parameters,docs:{...(J=c.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDir="column" gap="6">
      <Box display="flex" flexDir="column" gap="2">
        <Text fontWeight="bold">Circle (for users)</Text>
        <Box display="flex" gap="4" alignItems="center">
          <Avatar shape="circle" size="sm" src={sampleImages.user1} />
          <Avatar shape="circle" size="md" src={sampleImages.user2} />
          <Avatar shape="circle" size="lg" src={sampleImages.user3} />
        </Box>
      </Box>
      <Box display="flex" flexDir="column" gap="2">
        <Text fontWeight="bold">Square (for projects/entities)</Text>
        <Box display="flex" gap="4" alignItems="center">
          <Avatar shape="square" size="sm" src={sampleImages.user4} />
          <Avatar shape="square" size="md" src={sampleImages.user5} />
          <Avatar shape="square" size="lg" src={sampleImages.user1} />
        </Box>
      </Box>
      <Box display="flex" flexDir="column" gap="2">
        <Text fontWeight="bold">Hexagon (for an agent entity)</Text>
        <Box display="flex" gap="4" alignItems="center">
          <Avatar shape="hexagon" size="sm" src={sampleImages.user4} />
          <Avatar shape="hexagon" size="md" src={sampleImages.user5} />
          <Avatar shape="hexagon" size="lg" src={sampleImages.user1} />
        </Box>
      </Box>
    </Box>
}`,...(w=(q=c.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};var P,E,C;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <Box display="flex" gap="4" alignItems="center">
      <Avatar size="sm" name="John Doe" />
      <Avatar size="md" name="Alice Smith" />
      <Avatar size="lg" name="Bob" />
      <Avatar size="xl" name="Charlie Brown" />
    </Box>
}`,...(C=(E=m.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};var L,O,F;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <Box display="flex" gap="4" alignItems="center">
      <Avatar size="md" fallback={<Icon name="user" />} />
      <Avatar size="md" fallback={<Icon name="user-group" />} />
      <Avatar size="md" fallback={<Icon name="building" />} />
      <Avatar size="md" fallback="?" />
    </Box>
}`,...(F=(O=p.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};var M,U,H;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDir="column" gap="4">
      <Text>When image fails to load, fallback is shown:</Text>
      <Box display="flex" gap="4" alignItems="center">
        <Avatar size="md" src="invalid-url.jpg" name="John Doe" />
        <Avatar size="md" src="invalid-url.jpg" />
        <Avatar size="md" src="invalid-url.jpg" fallback={<Icon name="user" />} />
      </Box>
    </Box>
}`,...(H=(U=x.parameters)==null?void 0:U.docs)==null?void 0:H.source}}};var R,_,N;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDir="column" gap="6">
      <Text fontWeight="bold">
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
}`,...(N=(_=d.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};var G,K,Q;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <Box display="flex" gap="4" alignItems="center">
      <Avatar size="xs" src={sampleImages.user1} presence="online" />
      <Avatar size="sm" src={sampleImages.user1} presence="online" />
      <Avatar size="md" src={sampleImages.user1} presence="online" />
      <Avatar size="lg" src={sampleImages.user1} presence="online" />
      <Avatar size="xl" src={sampleImages.user1} presence="online" />
      <Avatar size="2xl" src={sampleImages.user1} presence="online" />
    </Box>
}`,...(Q=(K=g.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var V,X,Y;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDir="column" gap="6">
      <Text fontWeight="bold">
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
}`,...(Y=(X=u.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;f.parameters={...f.parameters,docs:{...(Z=f.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <Box display="flex" gap="4" alignItems="center">
      <Avatar size="xs" src={sampleImages.user1} status="approved" />
      <Avatar size="sm" src={sampleImages.user1} status="approved" />
      <Avatar size="md" src={sampleImages.user1} status="approved" />
      <Avatar size="lg" src={sampleImages.user1} status="approved" />
      <Avatar size="xl" src={sampleImages.user1} status="approved" />
      <Avatar size="2xl" src={sampleImages.user1} status="approved" />
    </Box>
}`,...(ee=($=f.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var se,ae,re;h.parameters={...h.parameters,docs:{...(se=h.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDir="column" gap="4">
      <Text>Both presence and status can be shown together:</Text>
      <Box display="flex" gap="4" alignItems="center">
        <Avatar size="lg" src={sampleImages.user1} presence="online" status="approved" />
        <Avatar size="lg" src={sampleImages.user2} presence="busy" status="declined" />
        <Avatar size="lg" src={sampleImages.user3} presence="offline" status="locked" />
      </Box>
    </Box>
}`,...(re=(ae=h.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var ne,le,ie;z.parameters={...z.parameters,docs:{...(ne=z.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
            <Text fontWeight="medium">{user.name}</Text>
            <Text fontSize="12" color="text.subtle">
              {user.presence === 'online' ? 'Available' : user.presence === 'busy' ? 'In a meeting' : user.presence === 'focus' ? 'Do not disturb' : 'Away'}
            </Text>
          </Box>
        </Box>)}
    </Box>
}`,...(ie=(le=z.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var te,oe,ce;j.parameters={...j.parameters,docs:{...(te=j.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ce=(oe=j.parameters)==null?void 0:oe.docs)==null?void 0:ce.source}}};var me,pe,xe;I.parameters={...I.parameters,docs:{...(me=I.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDir="column" gap="4">
      <Text fontWeight="bold">Stacked Avatars</Text>
      <Box display="flex">
        {[sampleImages.user1, sampleImages.user2, sampleImages.user3, sampleImages.user4].map((src, i) => <Box key={src} ml={i > 0 ? '-8' : '0'} position="relative">
            <Avatar size="md" src={src} />
          </Box>)}
        <Box ml="-8" position="relative">
          <Avatar size="md" fallback="+3" />
        </Box>
      </Box>
    </Box>
}`,...(xe=(pe=I.parameters)==null?void 0:pe.docs)==null?void 0:xe.source}}};const ye=["Default","Sizes","SizesWithLabels","Shapes","WithInitials","WithCustomFallback","ImageLoadError","Presence","PresenceAllSizes","Status","StatusAllSizes","PresenceAndStatus","UserList","ProjectAvatars","AvatarStack"];export{I as AvatarStack,i as Default,x as ImageLoadError,d as Presence,g as PresenceAllSizes,h as PresenceAndStatus,j as ProjectAvatars,c as Shapes,t as Sizes,o as SizesWithLabels,u as Status,f as StatusAllSizes,z as UserList,p as WithCustomFallback,m as WithInitials,ye as __namedExportsOrder,ve as default};
