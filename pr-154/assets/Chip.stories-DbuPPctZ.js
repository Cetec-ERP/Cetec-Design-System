import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./index-BKyFwriW.js";import{G,W as Ze,F as r,B as $e}from"./Box-7d6-wXl0.js";import{B as qe}from"./BreakpointIndicator-Cv_9ebTk.js";import{T as s}from"./Text-Cm9k3dA6.js";import{C as i,a as c}from"./ChipGroup-DM7sL4hz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./mq.hook-BU-2oBAn.js";import"./radii-Ir2x-kmI.js";import"./index-DOpYXeGo.js";import"./colors-CLHggMRt.js";import"./Tag--YEh4_zB.js";import"./Icon-CdfbFGjj.js";import"./IconConfig-D6qOrJtl.js";import"./Avatar-B5x53ntW.js";import"./Badge-BHSJBx75.js";import"./Spinner-DsNgvsFa.js";const m={user1:"https://i.pravatar.cc/150?img=1"},bi={title:"Components/Chip",component:i,tags:["autodocs"],argTypes:{size:{control:"select",options:["md","sm","lg"],description:"Size variants of chip"},iconBefore:{control:!1,description:"Structured icon slot rendered before the label"},iconAfter:{control:!1,description:"Structured icon slot rendered after the label"},avatarBefore:{control:!1,description:"Structured avatar slot rendered before the label"},badgeBefore:{control:!1,description:"Structured badge slot rendered before the label"},badgeAfter:{control:!1,description:"Structured badge slot rendered after the label"},before:{control:!1,description:"Escape hatch content to render before the label"},after:{control:!1,description:"Escape hatch content to render after the label"},disabled:{control:"boolean",description:"Disables the chip interaction"},loading:{control:"boolean",description:"Shows loading state with pulse animation"},deleted:{control:"boolean",description:"Shows deleted state with strikethrough"}},args:{children:"Chip Label",size:"md"},parameters:{layout:"centered"}},x={render:()=>e.jsx(i,{children:"Default"})},u={render:()=>e.jsxs(G,{columns:5,justifyItems:"center",gap:"20",children:[e.jsx(i,{size:"sm",children:"sm Chip"}),e.jsx(i,{size:"sm",iconBefore:{name:"hash"},children:"sm Chip"}),e.jsx(i,{size:"sm",iconAfter:{name:"read-doc"},children:"sm Chip"}),e.jsx(i,{size:"sm",avatarBefore:{src:m.user1,name:"John Doe"},children:"sm Chip"}),e.jsx(i,{size:"sm",badgeAfter:{count:3},children:"sm Chip"}),e.jsx(i,{size:"md",children:"md Chip"}),e.jsx(i,{size:"md",iconBefore:{name:"hash"},children:"md Chip"}),e.jsx(i,{size:"md",iconAfter:{name:"read-doc"},children:"md Chip"}),e.jsx(i,{size:"md",avatarBefore:{src:m.user1,name:"John Doe"},children:"md Chip"}),e.jsx(i,{size:"md",badgeAfter:{count:3},children:"md Chip"}),e.jsx(i,{size:"lg",children:"lg Chip"}),e.jsx(i,{size:"lg",iconBefore:{name:"hash"},children:"lg Chip"}),e.jsx(i,{size:"lg",iconAfter:{name:"read-doc"},children:"lg Chip"}),e.jsx(i,{size:"lg",avatarBefore:{src:m.user1,name:"John Doe"},children:"lg Chip"}),e.jsx(i,{size:"lg",badgeAfter:{count:3},children:"lg Chip"})]})},p=()=>e.jsxs(G,{w:"full",h:"full",position:"relative",placeContent:"center",alignItems:"center",gap:"16",children:[e.jsxs(Ze,{justifyContent:"center",children:[e.jsx(i,{size:{base:"lg",xs:"md",sm:"sm"},iconBefore:{name:"hash"},children:"Chip"}),e.jsx(i,{size:{base:"lg",xs:"md",sm:"sm"},avatarBefore:{src:m.user1,name:"John Doe"},children:"Chip"}),e.jsx(i,{size:{base:"lg",xs:"md",sm:"sm"},badgeAfter:{count:3},children:"Chip"})]}),e.jsxs(s,{textAlign:"center",textStyle:"mono.sm",_after:{display:"inline",content:{base:'"lg"',xs:'"md"',sm:'"sm"'},color:"text.bold",fontWeight:"bold"},children:["Size:"," "]}),e.jsx(qe,{position:"fixed",bottom:"16",right:"16"})]}),g={render:()=>e.jsxs(r,{gap:"4",flexDir:"column",alignItems:"center",children:[e.jsxs(r,{gap:"4",alignItems:"center",children:[e.jsx(i,{size:"sm",badgeBefore:{count:2,variant:"success"},children:"Small"}),e.jsx(i,{badgeBefore:{count:30,variant:"neutral"},children:"Medium"}),e.jsx(i,{size:"lg",badgeBefore:{count:100},children:"Large"})]}),e.jsxs(r,{gap:"4",alignItems:"center",children:[e.jsx(i,{size:"sm",avatarBefore:{src:m.user1,name:"John Doe"},children:"Small"}),e.jsx(i,{avatarBefore:{src:m.user1,name:"John Doe"},children:"Medium"}),e.jsx(i,{size:"lg",avatarBefore:{src:m.user1,name:"John Doe"},children:"Large"})]}),e.jsxs(r,{gap:"4",alignItems:"center",children:[e.jsx(i,{size:"sm",iconBefore:{name:"file"},children:"Small"}),e.jsx(i,{iconBefore:{name:"file"},children:"Medium"}),e.jsx(i,{size:"lg",iconBefore:{name:"file"},children:"Large"})]})]})},f={render:()=>e.jsxs(r,{gap:"4",alignItems:"center",children:[e.jsx(i,{size:"sm",iconAfter:{name:"x"},children:"Small"}),e.jsx(i,{iconAfter:{name:"x"},children:"Medium"}),e.jsx(i,{size:"lg",iconAfter:{name:"x"},children:"Large"})]})},C={render:()=>e.jsxs(r,{gap:"4",alignItems:"center",children:[e.jsx(i,{size:"sm",iconBefore:{name:"user"},iconAfter:{name:"x"},children:"Small"}),e.jsx(i,{iconBefore:{name:"user"},iconAfter:{name:"x"},children:"Medium"}),e.jsx(i,{size:"lg",iconBefore:{name:"user"},iconAfter:{name:"x"},children:"Large"})]})},j={render:()=>e.jsxs(G,{gridTemplateColumns:"auto auto",gap:"24",children:[e.jsx(s,{textStyle:"mono.xs",children:"Default:"}),e.jsx(i,{iconBefore:{name:"file"},children:"Interactive"}),e.jsx(s,{textStyle:"mono.xs",children:"Disabled:"}),e.jsx(i,{disabled:!0,iconBefore:{name:"file"},children:"Disabled"}),e.jsx(s,{textStyle:"mono.xs",children:"Loading:"}),e.jsx(i,{loading:!0,iconBefore:{name:"file"},children:"Loading..."}),e.jsx(s,{textStyle:"mono.xs",children:"Deleted:"}),e.jsx(i,{deleted:!0,iconBefore:{name:"file"},children:"Deleted Item"})]})},S={render:()=>e.jsxs(r,{flexDir:"column",gap:"12",children:[e.jsx(s,{textStyle:"mono.xs",children:"Chips can be interactive buttons:"}),e.jsxs(r,{gap:"2",children:[e.jsx(i,{onClick:()=>alert("Clicked!"),children:"Click Me"}),e.jsx(i,{iconBefore:{name:"plus"},onClick:()=>alert("Add clicked!"),children:"Add Item"}),e.jsx(i,{iconAfter:{name:"x"},onClick:()=>alert("Remove clicked!"),children:"Remove"})]})]})},B={render:()=>e.jsxs(r,{flexDir:"column",gap:"12",children:[e.jsxs(r,{flexDir:"column",gap:"2",children:[e.jsx(s,{textStyle:"mono.xs",children:"No Content Before/After"}),e.jsxs(r,{gap:"4",alignItems:"center",children:[e.jsx(i,{size:"sm",children:"Small"}),e.jsx(i,{children:"Medium"}),e.jsx(i,{size:"lg",children:"Large"})]})]}),e.jsxs(r,{flexDir:"column",gap:"2",children:[e.jsx(s,{textStyle:"mono.xs",children:"With Before"}),e.jsxs(r,{gap:"4",alignItems:"center",children:[e.jsx(i,{size:"sm",iconBefore:{name:"file"},children:"Small"}),e.jsx(i,{iconBefore:{name:"file"},children:"Medium"}),e.jsx(i,{size:"lg",iconBefore:{name:"file"},children:"Large"})]})]}),e.jsxs(r,{flexDir:"column",gap:"2",children:[e.jsx(s,{textStyle:"mono.xs",children:"With After"}),e.jsxs(r,{gap:"4",alignItems:"center",children:[e.jsx(i,{size:"sm",iconAfter:{name:"x"},children:"Small"}),e.jsx(i,{iconAfter:{name:"x"},children:"Medium"}),e.jsx(i,{size:"lg",iconAfter:{name:"x"},children:"Large"})]})]}),e.jsxs(r,{flexDir:"column",gap:"2",children:[e.jsx(s,{textStyle:"mono.xs",children:"With Before and After"}),e.jsxs(r,{gap:"4",alignItems:"center",children:[e.jsx(i,{size:"sm",iconBefore:{name:"user"},iconAfter:{name:"x"},children:"Small"}),e.jsx(i,{iconBefore:{name:"user"},iconAfter:{name:"x"},children:"Medium"}),e.jsx(i,{size:"lg",iconBefore:{name:"user"},iconAfter:{name:"x"},children:"Large"})]})]})]})},v={render:()=>e.jsx($e,{maxW:"lg",children:e.jsxs(s,{children:["Chips can appear inline within text, like tagging"," ",e.jsx(i,{iconBefore:{name:"user"},children:"John Doe"})," in a conversation or referencing ",e.jsx(i,{iconBefore:{name:"file"},children:"Project Plan"})," in your notes."]})})},b={render:()=>e.jsxs(r,{flexDir:"column",gap:"20",children:[e.jsxs(r,{flexDir:"column",gap:"2",children:[e.jsx(s,{textStyle:"mono.xs",children:"Filter Tags"}),e.jsxs(r,{gap:"4",flexWrap:"wrap",children:[e.jsx(i,{iconAfter:{name:"x"},children:"React"}),e.jsx(i,{iconAfter:{name:"x"},children:"TypeScript"}),e.jsx(i,{iconAfter:{name:"x"},children:"Panda CSS"}),e.jsx(i,{iconBefore:{name:"plus"},children:"Add Filter"})]})]}),e.jsxs(r,{flexDir:"column",gap:"2",children:[e.jsx(s,{textStyle:"mono.xs",children:"Categories"}),e.jsxs(r,{gap:"4",flexWrap:"wrap",children:[e.jsx(i,{iconBefore:{name:"file"},children:"Documentation"}),e.jsx(i,{iconBefore:{name:"calendar"},children:"Events"}),e.jsx(i,{iconBefore:{name:"user"},children:"People"})]})]}),e.jsxs(r,{flexDir:"column",gap:"2",children:[e.jsx(s,{textStyle:"mono.xs",children:"Actions"}),e.jsxs(r,{gap:"4",flexWrap:"wrap",children:[e.jsx(i,{iconBefore:{name:"plus"},children:"New Item"}),e.jsx(i,{iconBefore:{name:"check"},children:"Approve"}),e.jsx(i,{deleted:!0,children:"Archived"})]})]})]})},ei=()=>{const[n,t]=l.useState(["React","TypeScript","Panda CSS","Vite"]),o=a=>{t(k=>k.filter(L=>L!==a))};return e.jsxs(r,{flexDir:"column",gap:"12",children:[e.jsx(s,{textStyle:"mono.xs",children:"Click the X to dismiss tags:"}),e.jsx(r,{gap:"4",flexWrap:"wrap",children:n.map(a=>e.jsx(i,{dismissable:!0,onDismiss:()=>o(a),children:a},a))}),n.length===0&&e.jsx(s,{color:"text.muted",children:"All tags dismissed!"})]})},z={render:()=>e.jsx(ei,{})},D={render:()=>e.jsxs(r,{gap:"4",children:[e.jsx(i,{dismissable:!0,iconBefore:{name:"file"},onDismiss:()=>{},children:"Document"}),e.jsx(i,{dismissable:!0,iconBefore:{name:"user"},onDismiss:()=>{},children:"Person"}),e.jsx(i,{dismissable:!0,iconBefore:{name:"calendar"},onDismiss:()=>{},children:"Event"})]})},He=()=>{const[n,t]=l.useState("");return e.jsxs(r,{flexDir:"column",gap:"12",children:[e.jsx(s,{textStyle:"mono.md",children:"Select one size:"}),e.jsxs(c,{type:"single",value:n,onChange:o=>t(o),label:"Size selection",children:[e.jsx(i,{value:"sm",children:"Small"}),e.jsx(i,{value:"md",children:"Medium"}),e.jsx(i,{value:"lg",children:"Large"}),e.jsx(i,{value:"xl",children:"X-Large"})]}),e.jsxs(s,{textStyle:"mono.xs",children:["Selected: ",n]})]})},A={render:()=>e.jsx(He,{})},ii=()=>{const[n,t]=l.useState("grid");return e.jsxs(r,{flexDir:"column",gap:"12",children:[e.jsx(s,{textStyle:"mono.md",children:"Select a view:"}),e.jsxs(c,{type:"single",value:n,onChange:o=>t(o),label:"View selection",children:[e.jsx(i,{value:"list",iconBefore:{name:"menu"},children:"List"}),e.jsx(i,{value:"grid",iconBefore:{name:"view-grid"},children:"Grid"}),e.jsx(i,{value:"calendar",iconBefore:{name:"calendar"},children:"Calendar"})]}),e.jsxs(s,{textStyle:"mono.xs",children:["Selected: ",n]})]})},y={render:()=>e.jsx(ii,{})},Ye=()=>{const[n,t]=l.useState(["react","typescript"]);return e.jsxs(r,{flexDir:"column",gap:"12",children:[e.jsx(s,{textStyle:"mono.md",children:"Select your skills (check icon appears when selected):"}),e.jsxs(c,{type:"multi",value:n,onChange:o=>t(o),label:"Skills selection",children:[e.jsx(i,{value:"react",children:"React"}),e.jsx(i,{value:"typescript",children:"TypeScript"}),e.jsx(i,{value:"vue",children:"Vue"}),e.jsx(i,{value:"angular",children:"Angular"}),e.jsx(i,{value:"svelte",children:"Svelte"})]}),e.jsxs(s,{textStyle:"mono.xs",children:["Selected: ",n.join(", ")||"None"]})]})},F={render:()=>e.jsx(Ye,{})},ri=()=>{const[n,t]=l.useState(["docs"]);return e.jsxs(r,{flexDir:"column",gap:"12",children:[e.jsx(s,{textStyle:"mono.md",children:"Filter by category:"}),e.jsxs(c,{type:"multi",value:n,onChange:o=>t(o),label:"Category filter",children:[e.jsx(i,{value:"docs",iconBefore:{name:"file"},children:"Documents"}),e.jsx(i,{value:"images",iconBefore:{name:"image"},children:"Images"}),e.jsx(i,{value:"videos",iconBefore:{name:"video"},children:"Videos"}),e.jsx(i,{value:"audio",iconBefore:{name:"broadcast"},children:"Audio"})]}),e.jsxs(s,{textStyle:"mono.xs",children:["Selected: ",n.join(", ")||"None"]})]})},W={render:()=>e.jsx(ri,{})},I={render:()=>e.jsxs(r,{flexDir:"column",gap:"40",children:[e.jsxs(r,{flexDir:"column",gap:"2",children:[e.jsx(s,{textStyle:"mono.md",color:"text",fontWeight:"bold",children:"Single Select (arrow keys navigate & select):"}),e.jsx(He,{})]}),e.jsxs(r,{flexDir:"column",gap:"2",children:[e.jsx(s,{textStyle:"mono.md",color:"text",fontWeight:"bold",children:"Multi Select (tab between, space/enter toggles):"}),e.jsx(Ye,{})]})]})},si=()=>{const[n,t]=l.useState("option-a"),[o,a]=l.useState("option-a"),[k,L]=l.useState("option-a");return e.jsxs(r,{flexDir:"column",gap:"24",children:[e.jsxs(r,{flexDir:"column",gap:"2",children:[e.jsx(s,{textStyle:"mono.xs",children:"Small"}),e.jsxs(c,{type:"single",size:"sm",value:n,onChange:d=>t(d),label:"Small chip group",children:[e.jsx(i,{value:"option-a",children:"Option A"}),e.jsx(i,{value:"option-b",children:"Option B"}),e.jsx(i,{value:"option-c",children:"Option C"})]})]}),e.jsxs(r,{flexDir:"column",gap:"2",children:[e.jsx(s,{textStyle:"mono.xs",children:"Medium"}),e.jsxs(c,{type:"single",size:"md",value:o,onChange:d=>a(d),label:"Medium chip group",children:[e.jsx(i,{value:"option-a",children:"Option A"}),e.jsx(i,{value:"option-b",children:"Option B"}),e.jsx(i,{value:"option-c",children:"Option C"})]})]}),e.jsxs(r,{flexDir:"column",gap:"2",children:[e.jsx(s,{textStyle:"mono.xs",children:"Large"}),e.jsxs(c,{type:"single",size:"lg",value:k,onChange:d=>L(d),label:"Large chip group",children:[e.jsx(i,{value:"option-a",children:"Option A"}),e.jsx(i,{value:"option-b",children:"Option B"}),e.jsx(i,{value:"option-c",children:"Option C"})]})]})]})},T={render:()=>e.jsx(si,{})},h=()=>{const[n,t]=l.useState("assignee");return e.jsxs(G,{w:"full",h:"full",position:"relative",placeContent:"center",alignItems:"center",gap:"16",children:[e.jsxs(c,{type:"single",size:{base:"lg",xs:"md",sm:"sm"},value:n,onChange:o=>t(o),label:"Responsive chip group",children:[e.jsx(i,{value:"assignee",avatarBefore:{name:"John Doe"},children:"Assignee"}),e.jsx(i,{value:"mentions",iconBefore:{name:"hash"},children:"Mentions"}),e.jsx(i,{value:"alerts",badgeAfter:{count:3},children:"Alerts"})]}),e.jsxs(s,{textAlign:"center",textStyle:"mono.sm",_after:{display:"inline",content:{base:'"lg"',xs:'"md"',sm:'"sm"'},color:"text.bold",fontWeight:"bold"},children:["Group size:"," "]}),e.jsx(qe,{position:"fixed",bottom:"16",right:"16"})]})},ni=()=>{const[n,t]=l.useState("active");return e.jsxs(r,{flexDir:"column",gap:"12",children:[e.jsx(s,{textStyle:"mono.md",children:"Individual chips can be disabled within a group:"}),e.jsxs(c,{type:"single",value:n,onChange:o=>t(o),label:"Options with disabled",children:[e.jsx(i,{value:"active",children:"Active"}),e.jsx(i,{value:"pending",children:"Pending"}),e.jsx(i,{value:"unavailable",disabled:!0,children:"Unavailable"}),e.jsx(i,{value:"archived",children:"Archived"})]}),e.jsxs(s,{textStyle:"mono.xs",children:["Selected: ",n]})]})},M={render:()=>e.jsx(ni,{})},ti=()=>{const[n,t]=l.useState(["react","typescript"]),o=["React","TypeScript","JavaScript","Vue","Angular","Svelte","Next.js","Remix","Astro","Node.js","Python","Go","Rust","GraphQL","REST","Docker"];return e.jsxs(r,{flexDir:"column",gap:"12",maxW:"md",children:[e.jsx(s,{textStyle:"mono.md",children:"ChipGroup wraps when chips exceed container width:"}),e.jsx(c,{type:"multi",value:n,onChange:a=>t(a),label:"Skills selection",children:o.map(a=>e.jsx(i,{value:a.toLowerCase(),children:a},a.toLowerCase()))}),e.jsxs(s,{textStyle:"mono.xs",children:["Selected: ",n.join(", ")||"None"]})]})},w={render:()=>e.jsx(ti,{})};p.__docgenInfo={description:"",methods:[],displayName:"ConditionalBreakpoints"};h.__docgenInfo={description:"",methods:[],displayName:"ChipGroupResponsiveSizes"};var E,J,R;x.parameters={...x.parameters,docs:{...(E=x.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <Chip>Default</Chip>
}`,...(R=(J=x.parameters)==null?void 0:J.docs)==null?void 0:R.source}}};var N,P,O;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <Grid columns={5} justifyItems="center" gap="20">
      <Chip size="sm">sm Chip</Chip>
      <Chip size="sm" iconBefore={{
      name: 'hash'
    }}>
        sm Chip
      </Chip>
      <Chip size="sm" iconAfter={{
      name: 'read-doc'
    }}>
        sm Chip
      </Chip>
      <Chip size="sm" avatarBefore={{
      src: sampleImages.user1,
      name: 'John Doe'
    }}>
        sm Chip
      </Chip>
      <Chip size="sm" badgeAfter={{
      count: 3
    }}>
        sm Chip
      </Chip>
      <Chip size="md">md Chip</Chip>
      <Chip size="md" iconBefore={{
      name: 'hash'
    }}>
        md Chip
      </Chip>
      <Chip size="md" iconAfter={{
      name: 'read-doc'
    }}>
        md Chip
      </Chip>
      <Chip size="md" avatarBefore={{
      src: sampleImages.user1,
      name: 'John Doe'
    }}>
        md Chip
      </Chip>
      <Chip size="md" badgeAfter={{
      count: 3
    }}>
        md Chip
      </Chip>
      <Chip size="lg">lg Chip</Chip>
      <Chip size="lg" iconBefore={{
      name: 'hash'
    }}>
        lg Chip
      </Chip>
      <Chip size="lg" iconAfter={{
      name: 'read-doc'
    }}>
        lg Chip
      </Chip>
      <Chip size="lg" avatarBefore={{
      src: sampleImages.user1,
      name: 'John Doe'
    }}>
        lg Chip
      </Chip>
      <Chip size="lg" badgeAfter={{
      count: 3
    }}>
        lg Chip
      </Chip>
    </Grid>
}`,...(O=(P=u.parameters)==null?void 0:P.docs)==null?void 0:O.source}}};var V,_,U;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
  return <Grid w="full" h="full" position="relative" placeContent="center" alignItems="center" gap="16">
      <Wrap justifyContent="center">
        <Chip size={{
        base: 'lg',
        xs: 'md',
        sm: 'sm'
      }} iconBefore={{
        name: 'hash'
      }}>
          Chip
        </Chip>
        <Chip size={{
        base: 'lg',
        xs: 'md',
        sm: 'sm'
      }} avatarBefore={{
        src: sampleImages.user1,
        name: 'John Doe'
      }}>
          Chip
        </Chip>
        <Chip size={{
        base: 'lg',
        xs: 'md',
        sm: 'sm'
      }} badgeAfter={{
        count: 3
      }}>
          Chip
        </Chip>
      </Wrap>
      <Text textAlign="center" textStyle="mono.sm" _after={{
      display: 'inline',
      content: {
        base: '"lg"',
        xs: '"md"',
        sm: '"sm"'
      },
      color: 'text.bold',
      fontWeight: 'bold'
    }}>
        Size:{' '}
      </Text>
      <BreakpointIndicator position="fixed" bottom="16" right="16" />
    </Grid>;
}`,...(U=(_=p.parameters)==null?void 0:_.docs)==null?void 0:U.source}}};var K,X,Q;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <Flex gap="4" flexDir="column" alignItems="center">
      <Flex gap="4" alignItems="center">
        <Chip size="sm" badgeBefore={{
        count: 2,
        variant: 'success'
      }}>
          Small
        </Chip>
        <Chip badgeBefore={{
        count: 30,
        variant: 'neutral'
      }}>Medium</Chip>
        <Chip size="lg" badgeBefore={{
        count: 100
      }}>
          Large
        </Chip>
      </Flex>
      <Flex gap="4" alignItems="center">
        <Chip size="sm" avatarBefore={{
        src: sampleImages.user1,
        name: 'John Doe'
      }}>
          Small
        </Chip>
        <Chip avatarBefore={{
        src: sampleImages.user1,
        name: 'John Doe'
      }}>
          Medium
        </Chip>
        <Chip size="lg" avatarBefore={{
        src: sampleImages.user1,
        name: 'John Doe'
      }}>
          Large
        </Chip>
      </Flex>
      <Flex gap="4" alignItems="center">
        <Chip size="sm" iconBefore={{
        name: 'file'
      }}>
          Small
        </Chip>
        <Chip iconBefore={{
        name: 'file'
      }}>Medium</Chip>
        <Chip size="lg" iconBefore={{
        name: 'file'
      }}>
          Large
        </Chip>
      </Flex>
    </Flex>
}`,...(Q=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Q.source}}};var q,H,Y;f.parameters={...f.parameters,docs:{...(q=f.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <Flex gap="4" alignItems="center">
      <Chip size="sm" iconAfter={{
      name: 'x'
    }}>
        Small
      </Chip>
      <Chip iconAfter={{
      name: 'x'
    }}>Medium</Chip>
      <Chip size="lg" iconAfter={{
      name: 'x'
    }}>
        Large
      </Chip>
    </Flex>
}`,...(Y=(H=f.parameters)==null?void 0:H.docs)==null?void 0:Y.source}}};var Z,$,ee;C.parameters={...C.parameters,docs:{...(Z=C.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <Flex gap="4" alignItems="center">
      <Chip size="sm" iconBefore={{
      name: 'user'
    }} iconAfter={{
      name: 'x'
    }}>
        Small
      </Chip>
      <Chip iconBefore={{
      name: 'user'
    }} iconAfter={{
      name: 'x'
    }}>
        Medium
      </Chip>
      <Chip size="lg" iconBefore={{
      name: 'user'
    }} iconAfter={{
      name: 'x'
    }}>
        Large
      </Chip>
    </Flex>
}`,...(ee=($=C.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var ie,re,se;j.parameters={...j.parameters,docs:{...(ie=j.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => <Grid gridTemplateColumns="auto auto" gap="24">
      <Text textStyle="mono.xs">Default:</Text>
      <Chip iconBefore={{
      name: 'file'
    }}>Interactive</Chip>
      <Text textStyle="mono.xs">Disabled:</Text>
      <Chip disabled iconBefore={{
      name: 'file'
    }}>
        Disabled
      </Chip>
      <Text textStyle="mono.xs">Loading:</Text>
      <Chip loading iconBefore={{
      name: 'file'
    }}>
        Loading...
      </Chip>
      <Text textStyle="mono.xs">Deleted:</Text>
      <Chip deleted iconBefore={{
      name: 'file'
    }}>
        Deleted Item
      </Chip>
    </Grid>
}`,...(se=(re=j.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var ne,te,oe;S.parameters={...S.parameters,docs:{...(ne=S.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => <Flex flexDir="column" gap="12">
      <Text textStyle="mono.xs">Chips can be interactive buttons:</Text>
      <Flex gap="2">
        <Chip onClick={() => alert('Clicked!')}>Click Me</Chip>
        <Chip iconBefore={{
        name: 'plus'
      }} onClick={() => alert('Add clicked!')}>
          Add Item
        </Chip>
        <Chip iconAfter={{
        name: 'x'
      }} onClick={() => alert('Remove clicked!')}>
          Remove
        </Chip>
      </Flex>
    </Flex>
}`,...(oe=(te=S.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var ae,le,ce;B.parameters={...B.parameters,docs:{...(ae=B.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
          <Chip size="sm" iconBefore={{
          name: 'file'
        }}>
            Small
          </Chip>
          <Chip iconBefore={{
          name: 'file'
        }}>Medium</Chip>
          <Chip size="lg" iconBefore={{
          name: 'file'
        }}>
            Large
          </Chip>
        </Flex>
      </Flex>
      <Flex flexDir="column" gap="2">
        <Text textStyle="mono.xs">With After</Text>
        <Flex gap="4" alignItems="center">
          <Chip size="sm" iconAfter={{
          name: 'x'
        }}>
            Small
          </Chip>
          <Chip iconAfter={{
          name: 'x'
        }}>Medium</Chip>
          <Chip size="lg" iconAfter={{
          name: 'x'
        }}>
            Large
          </Chip>
        </Flex>
      </Flex>
      <Flex flexDir="column" gap="2">
        <Text textStyle="mono.xs">With Before and After</Text>
        <Flex gap="4" alignItems="center">
          <Chip size="sm" iconBefore={{
          name: 'user'
        }} iconAfter={{
          name: 'x'
        }}>
            Small
          </Chip>
          <Chip iconBefore={{
          name: 'user'
        }} iconAfter={{
          name: 'x'
        }}>
            Medium
          </Chip>
          <Chip size="lg" iconBefore={{
          name: 'user'
        }} iconAfter={{
          name: 'x'
        }}>
            Large
          </Chip>
        </Flex>
      </Flex>
    </Flex>
}`,...(ce=(le=B.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var me,de,pe;v.parameters={...v.parameters,docs:{...(me=v.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => <Box maxW="lg">
      <Text>
        Chips can appear inline within text, like tagging{' '}
        <Chip iconBefore={{
        name: 'user'
      }}>John Doe</Chip> in a conversation or
        referencing <Chip iconBefore={{
        name: 'file'
      }}>Project Plan</Chip> in
        your notes.
      </Text>
    </Box>
}`,...(pe=(de=v.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var he,xe,ue;b.parameters={...b.parameters,docs:{...(he=b.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: () => <Flex flexDir="column" gap="20">
      <Flex flexDir="column" gap="2">
        <Text textStyle="mono.xs">Filter Tags</Text>
        <Flex gap="4" flexWrap="wrap">
          <Chip iconAfter={{
          name: 'x'
        }}>React</Chip>
          <Chip iconAfter={{
          name: 'x'
        }}>TypeScript</Chip>
          <Chip iconAfter={{
          name: 'x'
        }}>Panda CSS</Chip>
          <Chip iconBefore={{
          name: 'plus'
        }}>Add Filter</Chip>
        </Flex>
      </Flex>
      <Flex flexDir="column" gap="2">
        <Text textStyle="mono.xs">Categories</Text>
        <Flex gap="4" flexWrap="wrap">
          <Chip iconBefore={{
          name: 'file'
        }}>Documentation</Chip>
          <Chip iconBefore={{
          name: 'calendar'
        }}>Events</Chip>
          <Chip iconBefore={{
          name: 'user'
        }}>People</Chip>
        </Flex>
      </Flex>
      <Flex flexDir="column" gap="2">
        <Text textStyle="mono.xs">Actions</Text>
        <Flex gap="4" flexWrap="wrap">
          <Chip iconBefore={{
          name: 'plus'
        }}>New Item</Chip>
          <Chip iconBefore={{
          name: 'check'
        }}>Approve</Chip>
          <Chip deleted>Archived</Chip>
        </Flex>
      </Flex>
    </Flex>
}`,...(ue=(xe=b.parameters)==null?void 0:xe.docs)==null?void 0:ue.source}}};var ge,fe,Ce;z.parameters={...z.parameters,docs:{...(ge=z.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: () => <DismissableExample />
}`,...(Ce=(fe=z.parameters)==null?void 0:fe.docs)==null?void 0:Ce.source}}};var je,Se,Be;D.parameters={...D.parameters,docs:{...(je=D.parameters)==null?void 0:je.docs,source:{originalSource:`{
  render: () => <Flex gap="4">
      <Chip dismissable iconBefore={{
      name: 'file'
    }} onDismiss={() => {}}>
        Document
      </Chip>
      <Chip dismissable iconBefore={{
      name: 'user'
    }} onDismiss={() => {}}>
        Person
      </Chip>
      <Chip dismissable iconBefore={{
      name: 'calendar'
    }} onDismiss={() => {}}>
        Event
      </Chip>
    </Flex>
}`,...(Be=(Se=D.parameters)==null?void 0:Se.docs)==null?void 0:Be.source}}};var ve,be,ze;A.parameters={...A.parameters,docs:{...(ve=A.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  render: () => <SingleSelectExample />
}`,...(ze=(be=A.parameters)==null?void 0:be.docs)==null?void 0:ze.source}}};var De,Ae,ye;y.parameters={...y.parameters,docs:{...(De=y.parameters)==null?void 0:De.docs,source:{originalSource:`{
  render: () => <SingleSelectWithBeforeExample />
}`,...(ye=(Ae=y.parameters)==null?void 0:Ae.docs)==null?void 0:ye.source}}};var Fe,We,Ie;F.parameters={...F.parameters,docs:{...(Fe=F.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  render: () => <MultiSelectExample />
}`,...(Ie=(We=F.parameters)==null?void 0:We.docs)==null?void 0:Ie.source}}};var Te,Me,we;W.parameters={...W.parameters,docs:{...(Te=W.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  render: () => <MultiSelectWithBeforeExample />
}`,...(we=(Me=W.parameters)==null?void 0:Me.docs)==null?void 0:we.source}}};var Ge,ke,Le;I.parameters={...I.parameters,docs:{...(Ge=I.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
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
}`,...(Le=(ke=I.parameters)==null?void 0:ke.docs)==null?void 0:Le.source}}};var Ee,Je,Re;T.parameters={...T.parameters,docs:{...(Ee=T.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  render: () => <ChipGroupSizesExample />
}`,...(Re=(Je=T.parameters)==null?void 0:Je.docs)==null?void 0:Re.source}}};var Ne,Pe,Oe;h.parameters={...h.parameters,docs:{...(Ne=h.parameters)==null?void 0:Ne.docs,source:{originalSource:`() => {
  const [selected, setSelected] = useState('assignee');
  return <Grid w="full" h="full" position="relative" placeContent="center" alignItems="center" gap="16">
      <ChipGroup type="single" size={{
      base: 'lg',
      xs: 'md',
      sm: 'sm'
    }} value={selected} onChange={v => setSelected(v as string)} label="Responsive chip group">
        <Chip value="assignee" avatarBefore={{
        name: 'John Doe'
      }}>
          Assignee
        </Chip>
        <Chip value="mentions" iconBefore={{
        name: 'hash'
      }}>
          Mentions
        </Chip>
        <Chip value="alerts" badgeAfter={{
        count: 3
      }}>
          Alerts
        </Chip>
      </ChipGroup>
      <Text textAlign="center" textStyle="mono.sm" _after={{
      display: 'inline',
      content: {
        base: '"lg"',
        xs: '"md"',
        sm: '"sm"'
      },
      color: 'text.bold',
      fontWeight: 'bold'
    }}>
        Group size:{' '}
      </Text>
      <BreakpointIndicator position="fixed" bottom="16" right="16" />
    </Grid>;
}`,...(Oe=(Pe=h.parameters)==null?void 0:Pe.docs)==null?void 0:Oe.source}}};var Ve,_e,Ue;M.parameters={...M.parameters,docs:{...(Ve=M.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  render: () => <ChipGroupWithDisabledExample />
}`,...(Ue=(_e=M.parameters)==null?void 0:_e.docs)==null?void 0:Ue.source}}};var Ke,Xe,Qe;w.parameters={...w.parameters,docs:{...(Ke=w.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  render: () => <ChipGroupWrappingExample />
}`,...(Qe=(Xe=w.parameters)==null?void 0:Xe.docs)==null?void 0:Qe.source}}};const zi=["Default","Sizes","ConditionalBreakpoints","WithBefore","WithAfter","WithBeforeAndAfter","States","Interactive","SizesMatrix","InlineWithText","UseCases","Dismissable","DismissableWithBefore","SingleSelect","SingleSelectWithBefore","MultiSelect","MultiSelectWithBefore","KeyboardNavigation","ChipGroupSizes","ChipGroupResponsiveSizes","ChipGroupWithDisabled","ChipGroupWrapping"];export{h as ChipGroupResponsiveSizes,T as ChipGroupSizes,M as ChipGroupWithDisabled,w as ChipGroupWrapping,p as ConditionalBreakpoints,x as Default,z as Dismissable,D as DismissableWithBefore,v as InlineWithText,S as Interactive,I as KeyboardNavigation,F as MultiSelect,W as MultiSelectWithBefore,A as SingleSelect,y as SingleSelectWithBefore,u as Sizes,B as SizesMatrix,j as States,b as UseCases,f as WithAfter,g as WithBefore,C as WithBeforeAndAfter,zi as __namedExportsOrder,bi as default};
