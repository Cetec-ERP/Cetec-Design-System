import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./index-BKyFwriW.js";import{F as r,G as Ke,B as Xe}from"./Box-B-dS-qo0.js";import{A as w}from"./Avatar-Dr-K8YWc.js";import{B as k}from"./Badge-C3QBrp6r.js";import{I as n}from"./Icon-6Bp-j8YQ.js";import"./IconConfig-jo8kaCG8.js";import{T as i}from"./Text-BlqN2xhk.js";import{C as s,a as x}from"./ChipGroup-CX-7PsXw.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Spinner-B5Ee-ZZJ.js";const E={user1:"https://i.pravatar.cc/150?img=1"},xs={title:"Components/Chip",component:s,tags:["autodocs"],argTypes:{size:{control:"select",options:["md","sm","lg"],description:"Size variants of chip"},before:{control:!1,description:"Content to render before the label (e.g., Icon, Avatar)"},after:{control:!1,description:"Content to render after the label (e.g., Badge, Icon)"},disabled:{control:"boolean",description:"Disables the chip interaction"},loading:{control:"boolean",description:"Shows loading state with pulse animation"},deleted:{control:"boolean",description:"Shows deleted state with strikethrough"}},args:{children:"Chip Label",size:"md"},parameters:{layout:"centered"}},d={render:()=>e.jsx(s,{children:"Default"})},p={render:()=>e.jsxs(r,{gap:"4",alignItems:"center",children:[e.jsx(s,{size:"sm",children:"Small"}),e.jsx(s,{children:"Medium (default)"}),e.jsx(s,{size:"lg",children:"Large"})]})},h={render:()=>e.jsxs(r,{gap:"4",flexDir:"column",alignItems:"center",children:[e.jsxs(r,{gap:"4",alignItems:"center",children:[e.jsx(s,{size:"sm",before:e.jsx(k,{count:2,size:"sm",variant:"success"}),children:"Small"}),e.jsx(s,{before:e.jsx(k,{count:30,variant:"neutral"}),children:"Medium"}),e.jsx(s,{size:"lg",before:e.jsx(k,{count:100,size:"lg"}),children:"Large"})]}),e.jsxs(r,{gap:"4",alignItems:"center",children:[e.jsx(s,{size:"sm",before:e.jsx(w,{size:"xs",src:E.user1,name:"John Doe"}),children:"Small"}),e.jsx(s,{before:e.jsx(w,{size:"sm",src:E.user1,name:"John Doe"}),children:"Medium"}),e.jsx(s,{size:"lg",before:e.jsx(w,{src:E.user1,name:"John Doe"}),children:"Large"})]}),e.jsxs(r,{gap:"4",alignItems:"center",children:[e.jsx(s,{size:"sm",before:e.jsx(n,{name:"file",size:"20"}),children:"Small"}),e.jsx(s,{before:e.jsx(n,{name:"file",size:"20"}),children:"Medium"}),e.jsx(s,{size:"lg",before:e.jsx(n,{name:"file",size:"24"}),children:"Large"})]})]})},u={render:()=>e.jsxs(r,{gap:"4",alignItems:"center",children:[e.jsx(s,{size:"sm",after:e.jsx(n,{name:"x",size:"20"}),children:"Small"}),e.jsx(s,{after:e.jsx(n,{name:"x",size:"20"}),children:"Medium"}),e.jsx(s,{size:"lg",after:e.jsx(n,{name:"x",size:"24"}),children:"Large"})]})},g={render:()=>e.jsxs(r,{gap:"4",alignItems:"center",children:[e.jsx(s,{size:"sm",before:e.jsx(n,{name:"user",size:"20"}),after:e.jsx(n,{name:"x",size:"20"}),children:"Small"}),e.jsx(s,{before:e.jsx(n,{name:"user",size:"20"}),after:e.jsx(n,{name:"x",size:"20"}),children:"Medium"}),e.jsx(s,{size:"lg",before:e.jsx(n,{name:"user",size:"24"}),after:e.jsx(n,{name:"x",size:"24"}),children:"Large"})]})},j={render:()=>e.jsxs(Ke,{gridTemplateColumns:"auto auto",gap:"24",children:[e.jsx(i,{textStyle:"mono.xs",children:"Default:"}),e.jsx(s,{before:e.jsx(n,{name:"file",size:"20"}),children:"Interactive"}),e.jsx(i,{textStyle:"mono.xs",children:"Disabled:"}),e.jsx(s,{disabled:!0,before:e.jsx(n,{name:"file",size:"20"}),children:"Disabled"}),e.jsx(i,{textStyle:"mono.xs",children:"Loading:"}),e.jsx(s,{loading:!0,before:e.jsx(n,{name:"file",size:"20"}),children:"Loading..."}),e.jsx(i,{textStyle:"mono.xs",children:"Deleted:"}),e.jsx(s,{deleted:!0,before:e.jsx(n,{name:"file",size:"20"}),children:"Deleted Item"})]})},f={render:()=>e.jsxs(r,{flexDir:"column",gap:"12",children:[e.jsx(i,{textStyle:"mono.xs",children:"Chips can be interactive buttons:"}),e.jsxs(r,{gap:"2",children:[e.jsx(s,{onClick:()=>alert("Clicked!"),children:"Click Me"}),e.jsx(s,{before:e.jsx(n,{name:"plus",size:"20"}),onClick:()=>alert("Add clicked!"),children:"Add Item"}),e.jsx(s,{after:e.jsx(n,{name:"x",size:"20"}),onClick:()=>alert("Remove clicked!"),children:"Remove"})]})]})},S={render:()=>e.jsxs(r,{flexDir:"column",gap:"12",children:[e.jsxs(r,{flexDir:"column",gap:"2",children:[e.jsx(i,{textStyle:"mono.xs",children:"No Content Before/After"}),e.jsxs(r,{gap:"4",alignItems:"center",children:[e.jsx(s,{size:"sm",children:"Small"}),e.jsx(s,{children:"Medium"}),e.jsx(s,{size:"lg",children:"Large"})]})]}),e.jsxs(r,{flexDir:"column",gap:"2",children:[e.jsx(i,{textStyle:"mono.xs",children:"With Before"}),e.jsxs(r,{gap:"4",alignItems:"center",children:[e.jsx(s,{size:"sm",before:e.jsx(n,{name:"file",size:"20"}),children:"Small"}),e.jsx(s,{before:e.jsx(n,{name:"file",size:"20"}),children:"Medium"}),e.jsx(s,{size:"lg",before:e.jsx(n,{name:"file",size:"24"}),children:"Large"})]})]}),e.jsxs(r,{flexDir:"column",gap:"2",children:[e.jsx(i,{textStyle:"mono.xs",children:"With After"}),e.jsxs(r,{gap:"4",alignItems:"center",children:[e.jsx(s,{size:"sm",after:e.jsx(n,{name:"x",size:"20"}),children:"Small"}),e.jsx(s,{after:e.jsx(n,{name:"x",size:"20"}),children:"Medium"}),e.jsx(s,{size:"lg",after:e.jsx(n,{name:"x",size:"24"}),children:"Large"})]})]}),e.jsxs(r,{flexDir:"column",gap:"2",children:[e.jsx(i,{textStyle:"mono.xs",children:"With Before and After"}),e.jsxs(r,{gap:"4",alignItems:"center",children:[e.jsx(s,{size:"sm",before:e.jsx(n,{name:"user",size:"20"}),after:e.jsx(n,{name:"x",size:"20"}),children:"Small"}),e.jsx(s,{before:e.jsx(n,{name:"user",size:"20"}),after:e.jsx(n,{name:"x",size:"20"}),children:"Medium"}),e.jsx(s,{size:"lg",before:e.jsx(n,{name:"user",size:"24"}),after:e.jsx(n,{name:"x",size:"24"}),children:"Large"})]})]})]})},C={render:()=>e.jsx(Xe,{maxW:"lg",children:e.jsxs(i,{children:["Chips can appear inline within text, like tagging"," ",e.jsx(s,{before:e.jsx(n,{name:"user",size:"20"}),children:"John Doe"})," in a conversation or referencing"," ",e.jsx(s,{before:e.jsx(n,{name:"file",size:"20"}),children:"Project Plan"})," in your notes."]})})},z={render:()=>e.jsxs(r,{flexDir:"column",gap:"20",children:[e.jsxs(r,{flexDir:"column",gap:"2",children:[e.jsx(i,{textStyle:"mono.xs",children:"Filter Tags"}),e.jsxs(r,{gap:"4",flexWrap:"wrap",children:[e.jsx(s,{after:e.jsx(n,{name:"x",size:"20"}),children:"React"}),e.jsx(s,{after:e.jsx(n,{name:"x",size:"20"}),children:"TypeScript"}),e.jsx(s,{after:e.jsx(n,{name:"x",size:"20"}),children:"Panda CSS"}),e.jsx(s,{before:e.jsx(n,{name:"plus",size:"20"}),children:"Add Filter"})]})]}),e.jsxs(r,{flexDir:"column",gap:"2",children:[e.jsx(i,{textStyle:"mono.xs",children:"Categories"}),e.jsxs(r,{gap:"4",flexWrap:"wrap",children:[e.jsx(s,{before:e.jsx(n,{name:"file",size:"20"}),children:"Documentation"}),e.jsx(s,{before:e.jsx(n,{name:"calendar",size:"20"}),children:"Events"}),e.jsx(s,{before:e.jsx(n,{name:"user",size:"20"}),children:"People"})]})]}),e.jsxs(r,{flexDir:"column",gap:"2",children:[e.jsx(i,{textStyle:"mono.xs",children:"Actions"}),e.jsxs(r,{gap:"4",flexWrap:"wrap",children:[e.jsx(s,{before:e.jsx(n,{name:"plus",size:"20"}),children:"New Item"}),e.jsx(s,{before:e.jsx(n,{name:"check",size:"20"}),children:"Approve"}),e.jsx(s,{deleted:!0,children:"Archived"})]})]})]})},_e=()=>{const[l,a]=c.useState(["React","TypeScript","Panda CSS","Vite"]),t=o=>{a(L=>L.filter(B=>B!==o))};return e.jsxs(r,{flexDir:"column",gap:"12",children:[e.jsx(i,{textStyle:"mono.xs",children:"Click the X to dismiss tags:"}),e.jsx(r,{gap:"4",flexWrap:"wrap",children:l.map(o=>e.jsx(s,{dismissable:!0,onDismiss:()=>t(o),children:o},o))}),l.length===0&&e.jsx(i,{color:"text.muted",children:"All tags dismissed!"})]})},b={render:()=>e.jsx(_e,{})},v={render:()=>e.jsxs(r,{gap:"4",children:[e.jsx(s,{dismissable:!0,before:e.jsx(n,{name:"file",size:"20"}),onDismiss:()=>{},children:"Document"}),e.jsx(s,{dismissable:!0,before:e.jsx(n,{name:"user",size:"20"}),onDismiss:()=>{},children:"Person"}),e.jsx(s,{dismissable:!0,before:e.jsx(n,{name:"calendar",size:"20"}),onDismiss:()=>{},children:"Event"})]})},Je=()=>{const[l,a]=c.useState("");return e.jsxs(r,{flexDir:"column",gap:"12",children:[e.jsx(i,{textStyle:"mono.md",children:"Select one size:"}),e.jsxs(x,{type:"single",value:l,onChange:t=>a(t),label:"Size selection",children:[e.jsx(s,{value:"sm",children:"Small"}),e.jsx(s,{value:"md",children:"Medium"}),e.jsx(s,{value:"lg",children:"Large"}),e.jsx(s,{value:"xl",children:"X-Large"})]}),e.jsxs(i,{textStyle:"mono.xs",children:["Selected: ",l]})]})},I={render:()=>e.jsx(Je,{})},Qe=()=>{const[l,a]=c.useState("grid");return e.jsxs(r,{flexDir:"column",gap:"12",children:[e.jsx(i,{textStyle:"mono.md",children:"Select a view:"}),e.jsxs(x,{type:"single",value:l,onChange:t=>a(t),label:"View selection",children:[e.jsx(s,{value:"list",before:e.jsx(n,{name:"menu",size:"20"}),children:"List"}),e.jsx(s,{value:"grid",before:e.jsx(n,{name:"view-grid",size:"20"}),children:"Grid"}),e.jsx(s,{value:"calendar",before:e.jsx(n,{name:"calendar",size:"20"}),children:"Calendar"})]}),e.jsxs(i,{textStyle:"mono.xs",children:["Selected: ",l]})]})},D={render:()=>e.jsx(Qe,{})},Ue=()=>{const[l,a]=c.useState(["react","typescript"]);return e.jsxs(r,{flexDir:"column",gap:"12",children:[e.jsx(i,{textStyle:"mono.md",children:"Select your skills (check icon appears when selected):"}),e.jsxs(x,{type:"multi",value:l,onChange:t=>a(t),label:"Skills selection",children:[e.jsx(s,{value:"react",children:"React"}),e.jsx(s,{value:"typescript",children:"TypeScript"}),e.jsx(s,{value:"vue",children:"Vue"}),e.jsx(s,{value:"angular",children:"Angular"}),e.jsx(s,{value:"svelte",children:"Svelte"})]}),e.jsxs(i,{textStyle:"mono.xs",children:["Selected: ",l.join(", ")||"None"]})]})},y={render:()=>e.jsx(Ue,{})},qe=()=>{const[l,a]=c.useState(["docs"]);return e.jsxs(r,{flexDir:"column",gap:"12",children:[e.jsx(i,{textStyle:"mono.md",children:"Filter by category:"}),e.jsxs(x,{type:"multi",value:l,onChange:t=>a(t),label:"Category filter",children:[e.jsx(s,{value:"docs",before:e.jsx(n,{name:"file",size:"20"}),children:"Documents"}),e.jsx(s,{value:"images",before:e.jsx(n,{name:"image",size:"20"}),children:"Images"}),e.jsx(s,{value:"videos",before:e.jsx(n,{name:"video",size:"20"}),children:"Videos"}),e.jsx(s,{value:"audio",before:e.jsx(n,{name:"broadcast",size:"20"}),children:"Audio"})]}),e.jsxs(i,{textStyle:"mono.xs",children:["Selected: ",l.join(", ")||"None"]})]})},F={render:()=>e.jsx(qe,{})},T={render:()=>e.jsxs(r,{flexDir:"column",gap:"40",children:[e.jsxs(r,{flexDir:"column",gap:"2",children:[e.jsx(i,{textStyle:"mono.md",color:"text",fontWeight:"bold",children:"Single Select (arrow keys navigate & select):"}),e.jsx(Je,{})]}),e.jsxs(r,{flexDir:"column",gap:"2",children:[e.jsx(i,{textStyle:"mono.md",color:"text",fontWeight:"bold",children:"Multi Select (tab between, space/enter toggles):"}),e.jsx(Ue,{})]})]})},He=()=>{const[l,a]=c.useState("option-a"),[t,o]=c.useState("option-a"),[L,B]=c.useState("option-a");return e.jsxs(r,{flexDir:"column",gap:"24",children:[e.jsxs(r,{flexDir:"column",gap:"2",children:[e.jsx(i,{textStyle:"mono.xs",children:"Small"}),e.jsxs(x,{type:"single",value:l,onChange:m=>a(m),label:"Small chip group",children:[e.jsx(s,{value:"option-a",size:"sm",children:"Option A"}),e.jsx(s,{value:"option-b",size:"sm",children:"Option B"}),e.jsx(s,{value:"option-c",size:"sm",children:"Option C"})]})]}),e.jsxs(r,{flexDir:"column",gap:"2",children:[e.jsx(i,{textStyle:"mono.xs",children:"Medium"}),e.jsxs(x,{type:"single",value:t,onChange:m=>o(m),label:"Medium chip group",children:[e.jsx(s,{value:"option-a",children:"Option A"}),e.jsx(s,{value:"option-b",children:"Option B"}),e.jsx(s,{value:"option-c",children:"Option C"})]})]}),e.jsxs(r,{flexDir:"column",gap:"2",children:[e.jsx(i,{textStyle:"mono.xs",children:"Large"}),e.jsxs(x,{type:"single",value:L,onChange:m=>B(m),label:"Large chip group",children:[e.jsx(s,{value:"option-a",size:"lg",children:"Option A"}),e.jsx(s,{value:"option-b",size:"lg",children:"Option B"}),e.jsx(s,{value:"option-c",size:"lg",children:"Option C"})]})]})]})},W={render:()=>e.jsx(He,{})},Ye=()=>{const[l,a]=c.useState("active");return e.jsxs(r,{flexDir:"column",gap:"12",children:[e.jsx(i,{textStyle:"mono.md",children:"Individual chips can be disabled within a group:"}),e.jsxs(x,{type:"single",value:l,onChange:t=>a(t),label:"Options with disabled",children:[e.jsx(s,{value:"active",children:"Active"}),e.jsx(s,{value:"pending",children:"Pending"}),e.jsx(s,{value:"unavailable",disabled:!0,children:"Unavailable"}),e.jsx(s,{value:"archived",children:"Archived"})]}),e.jsxs(i,{textStyle:"mono.xs",children:["Selected: ",l]})]})},A={render:()=>e.jsx(Ye,{})},Ze=()=>{const[l,a]=c.useState(["react","typescript"]),t=["React","TypeScript","JavaScript","Vue","Angular","Svelte","Next.js","Remix","Astro","Node.js","Python","Go","Rust","GraphQL","REST","Docker"];return e.jsxs(r,{flexDir:"column",gap:"12",maxW:"md",children:[e.jsx(i,{textStyle:"mono.md",children:"ChipGroup wraps when chips exceed container width:"}),e.jsx(x,{type:"multi",value:l,onChange:o=>a(o),label:"Skills selection",children:t.map(o=>e.jsx(s,{value:o.toLowerCase(),children:o},o.toLowerCase()))}),e.jsxs(i,{textStyle:"mono.xs",children:["Selected: ",l.join(", ")||"None"]})]})},M={render:()=>e.jsx(Ze,{})};var G,P,R;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <Chip>Default</Chip>
}`,...(R=(P=d.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var N,O,V;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <Flex gap="4" alignItems="center">
      <Chip size="sm">Small</Chip>
      <Chip>Medium (default)</Chip>
      <Chip size="lg">Large</Chip>
    </Flex>
}`,...(V=(O=p.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};var J,U,K;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <Flex gap="4" flexDir="column" alignItems="center">
      <Flex gap="4" alignItems="center">
        <Chip size="sm" before={<Badge count={2} size="sm" variant="success" />}>
          Small
        </Chip>
        <Chip before={<Badge count={30} variant="neutral" />}>Medium</Chip>
        <Chip size="lg" before={<Badge count={100} size="lg" />}>
          Large
        </Chip>
      </Flex>
      <Flex gap="4" alignItems="center">
        <Chip size="sm" before={<Avatar size="xs" src={sampleImages.user1} name="John Doe" />}>
          Small
        </Chip>
        <Chip before={<Avatar size="sm" src={sampleImages.user1} name="John Doe" />}>
          Medium
        </Chip>
        <Chip size="lg" before={<Avatar src={sampleImages.user1} name="John Doe" />}>
          Large
        </Chip>
      </Flex>
      <Flex gap="4" alignItems="center">
        <Chip size="sm" before={<Icon name="file" size="20" />}>
          Small
        </Chip>
        <Chip before={<Icon name="file" size="20" />}>Medium</Chip>
        <Chip size="lg" before={<Icon name="file" size="24" />}>
          Large
        </Chip>
      </Flex>
    </Flex>
}`,...(K=(U=h.parameters)==null?void 0:U.docs)==null?void 0:K.source}}};var X,_,Q;u.parameters={...u.parameters,docs:{...(X=u.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <Flex gap="4" alignItems="center">
      <Chip size="sm" after={<Icon name="x" size="20" />}>
        Small
      </Chip>
      <Chip after={<Icon name="x" size="20" />}>Medium</Chip>
      <Chip size="lg" after={<Icon name="x" size="24" />}>
        Large
      </Chip>
    </Flex>
}`,...(Q=(_=u.parameters)==null?void 0:_.docs)==null?void 0:Q.source}}};var q,H,Y;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <Flex gap="4" alignItems="center">
      <Chip size="sm" before={<Icon name="user" size="20" />} after={<Icon name="x" size="20" />}>
        Small
      </Chip>
      <Chip before={<Icon name="user" size="20" />} after={<Icon name="x" size="20" />}>
        Medium
      </Chip>
      <Chip size="lg" before={<Icon name="user" size="24" />} after={<Icon name="x" size="24" />}>
        Large
      </Chip>
    </Flex>
}`,...(Y=(H=g.parameters)==null?void 0:H.docs)==null?void 0:Y.source}}};var Z,$,ee;j.parameters={...j.parameters,docs:{...(Z=j.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <Grid gridTemplateColumns="auto auto" gap="24">
      <Text textStyle="mono.xs">Default:</Text>
      <Chip before={<Icon name="file" size="20" />}>Interactive</Chip>
      <Text textStyle="mono.xs">Disabled:</Text>
      <Chip disabled before={<Icon name="file" size="20" />}>
        Disabled
      </Chip>
      <Text textStyle="mono.xs">Loading:</Text>
      <Chip loading before={<Icon name="file" size="20" />}>
        Loading...
      </Chip>
      <Text textStyle="mono.xs">Deleted:</Text>
      <Chip deleted before={<Icon name="file" size="20" />}>
        Deleted Item
      </Chip>
    </Grid>
}`,...(ee=($=j.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var se,ne,re;f.parameters={...f.parameters,docs:{...(se=f.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => <Flex flexDir="column" gap="12">
      <Text textStyle="mono.xs">Chips can be interactive buttons:</Text>
      <Flex gap="2">
        <Chip onClick={() => alert('Clicked!')}>Click Me</Chip>
        <Chip before={<Icon name="plus" size="20" />} onClick={() => alert('Add clicked!')}>
          Add Item
        </Chip>
        <Chip after={<Icon name="x" size="20" />} onClick={() => alert('Remove clicked!')}>
          Remove
        </Chip>
      </Flex>
    </Flex>
}`,...(re=(ne=f.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var ie,le,ae;S.parameters={...S.parameters,docs:{...(ie=S.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => <Flex flexDir="column" gap="12">
      <Flex flexDir="column" gap="2">
        <Text textStyle="mono.xs">No Content Before/After</Text>
        <Flex gap="4" alignItems="center">
          <Chip size="sm">Small</Chip>
          <Chip>Medium</Chip>
          <Chip size="lg">Large</Chip>
        </Flex>
      </Flex>
      <Flex flexDir="column" gap="2">
        <Text textStyle="mono.xs">With Before</Text>
        <Flex gap="4" alignItems="center">
          <Chip size="sm" before={<Icon name="file" size="20" />}>
            Small
          </Chip>
          <Chip before={<Icon name="file" size="20" />}>Medium</Chip>
          <Chip size="lg" before={<Icon name="file" size="24" />}>
            Large
          </Chip>
        </Flex>
      </Flex>
      <Flex flexDir="column" gap="2">
        <Text textStyle="mono.xs">With After</Text>
        <Flex gap="4" alignItems="center">
          <Chip size="sm" after={<Icon name="x" size="20" />}>
            Small
          </Chip>
          <Chip after={<Icon name="x" size="20" />}>Medium</Chip>
          <Chip size="lg" after={<Icon name="x" size="24" />}>
            Large
          </Chip>
        </Flex>
      </Flex>
      <Flex flexDir="column" gap="2">
        <Text textStyle="mono.xs">With Before and After</Text>
        <Flex gap="4" alignItems="center">
          <Chip size="sm" before={<Icon name="user" size="20" />} after={<Icon name="x" size="20" />}>
            Small
          </Chip>
          <Chip before={<Icon name="user" size="20" />} after={<Icon name="x" size="20" />}>
            Medium
          </Chip>
          <Chip size="lg" before={<Icon name="user" size="24" />} after={<Icon name="x" size="24" />}>
            Large
          </Chip>
        </Flex>
      </Flex>
    </Flex>
}`,...(ae=(le=S.parameters)==null?void 0:le.docs)==null?void 0:ae.source}}};var te,oe,ce;C.parameters={...C.parameters,docs:{...(te=C.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => <Box maxW="lg">
      <Text>
        Chips can appear inline within text, like tagging{' '}
        <Chip before={<Icon name="user" size="20" />}>John Doe</Chip> in a
        conversation or referencing{' '}
        <Chip before={<Icon name="file" size="20" />}>Project Plan</Chip> in
        your notes.
      </Text>
    </Box>
}`,...(ce=(oe=C.parameters)==null?void 0:oe.docs)==null?void 0:ce.source}}};var xe,me,de;z.parameters={...z.parameters,docs:{...(xe=z.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: () => <Flex flexDir="column" gap="20">
      <Flex flexDir="column" gap="2">
        <Text textStyle="mono.xs">Filter Tags</Text>
        <Flex gap="4" flexWrap="wrap">
          <Chip after={<Icon name="x" size="20" />}>React</Chip>
          <Chip after={<Icon name="x" size="20" />}>TypeScript</Chip>
          <Chip after={<Icon name="x" size="20" />}>Panda CSS</Chip>
          <Chip before={<Icon name="plus" size="20" />}>Add Filter</Chip>
        </Flex>
      </Flex>
      <Flex flexDir="column" gap="2">
        <Text textStyle="mono.xs">Categories</Text>
        <Flex gap="4" flexWrap="wrap">
          <Chip before={<Icon name="file" size="20" />}>Documentation</Chip>
          <Chip before={<Icon name="calendar" size="20" />}>Events</Chip>
          <Chip before={<Icon name="user" size="20" />}>People</Chip>
        </Flex>
      </Flex>
      <Flex flexDir="column" gap="2">
        <Text textStyle="mono.xs">Actions</Text>
        <Flex gap="4" flexWrap="wrap">
          <Chip before={<Icon name="plus" size="20" />}>New Item</Chip>
          <Chip before={<Icon name="check" size="20" />}>Approve</Chip>
          <Chip deleted>Archived</Chip>
        </Flex>
      </Flex>
    </Flex>
}`,...(de=(me=z.parameters)==null?void 0:me.docs)==null?void 0:de.source}}};var pe,he,ue;b.parameters={...b.parameters,docs:{...(pe=b.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: () => <DismissableExample />
}`,...(ue=(he=b.parameters)==null?void 0:he.docs)==null?void 0:ue.source}}};var ge,je,fe;v.parameters={...v.parameters,docs:{...(ge=v.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: () => <Flex gap="4">
      <Chip dismissable before={<Icon name="file" size="20" />} onDismiss={() => {}}>
        Document
      </Chip>
      <Chip dismissable before={<Icon name="user" size="20" />} onDismiss={() => {}}>
        Person
      </Chip>
      <Chip dismissable before={<Icon name="calendar" size="20" />} onDismiss={() => {}}>
        Event
      </Chip>
    </Flex>
}`,...(fe=(je=v.parameters)==null?void 0:je.docs)==null?void 0:fe.source}}};var Se,Ce,ze;I.parameters={...I.parameters,docs:{...(Se=I.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  render: () => <SingleSelectExample />
}`,...(ze=(Ce=I.parameters)==null?void 0:Ce.docs)==null?void 0:ze.source}}};var be,ve,Ie;D.parameters={...D.parameters,docs:{...(be=D.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: () => <SingleSelectWithBeforeExample />
}`,...(Ie=(ve=D.parameters)==null?void 0:ve.docs)==null?void 0:Ie.source}}};var De,ye,Fe;y.parameters={...y.parameters,docs:{...(De=y.parameters)==null?void 0:De.docs,source:{originalSource:`{
  render: () => <MultiSelectExample />
}`,...(Fe=(ye=y.parameters)==null?void 0:ye.docs)==null?void 0:Fe.source}}};var Te,We,Ae;F.parameters={...F.parameters,docs:{...(Te=F.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  render: () => <MultiSelectWithBeforeExample />
}`,...(Ae=(We=F.parameters)==null?void 0:We.docs)==null?void 0:Ae.source}}};var Me,Le,Be;T.parameters={...T.parameters,docs:{...(Me=T.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  render: () => <Flex flexDir="column" gap="40">
      <Flex flexDir="column" gap="2">
        <Text textStyle="mono.md" color="text" fontWeight="bold">
          Single Select (arrow keys navigate & select):
        </Text>
        <SingleSelectExample />
      </Flex>
      <Flex flexDir="column" gap="2">
        <Text textStyle="mono.md" color="text" fontWeight="bold">
          Multi Select (tab between, space/enter toggles):
        </Text>
        <MultiSelectExample />
      </Flex>
    </Flex>
}`,...(Be=(Le=T.parameters)==null?void 0:Le.docs)==null?void 0:Be.source}}};var we,ke,Ee;W.parameters={...W.parameters,docs:{...(we=W.parameters)==null?void 0:we.docs,source:{originalSource:`{
  render: () => <ChipGroupSizesExample />
}`,...(Ee=(ke=W.parameters)==null?void 0:ke.docs)==null?void 0:Ee.source}}};var Ge,Pe,Re;A.parameters={...A.parameters,docs:{...(Ge=A.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  render: () => <ChipGroupWithDisabledExample />
}`,...(Re=(Pe=A.parameters)==null?void 0:Pe.docs)==null?void 0:Re.source}}};var Ne,Oe,Ve;M.parameters={...M.parameters,docs:{...(Ne=M.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  render: () => <ChipGroupWrappingExample />
}`,...(Ve=(Oe=M.parameters)==null?void 0:Oe.docs)==null?void 0:Ve.source}}};const ms=["Default","Sizes","WithBefore","WithAfter","WithBeforeAndAfter","States","Interactive","SizesMatrix","InlineWithText","UseCases","Dismissable","DismissableWithBefore","SingleSelect","SingleSelectWithBefore","MultiSelect","MultiSelectWithBefore","KeyboardNavigation","ChipGroupSizes","ChipGroupWithDisabled","ChipGroupWrapping"];export{W as ChipGroupSizes,A as ChipGroupWithDisabled,M as ChipGroupWrapping,d as Default,b as Dismissable,v as DismissableWithBefore,C as InlineWithText,f as Interactive,T as KeyboardNavigation,y as MultiSelect,F as MultiSelectWithBefore,I as SingleSelect,D as SingleSelectWithBefore,p as Sizes,S as SizesMatrix,j as States,z as UseCases,u as WithAfter,h as WithBefore,g as WithBeforeAndAfter,ms as __namedExportsOrder,xs as default};
