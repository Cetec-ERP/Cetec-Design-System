import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as a}from"./index-BKyFwriW.js";import{G as x,W as ls,F as i,B as os}from"./Box-DON8OdPK.js";import{B as rs}from"./BreakpointIndicator-IW1tL_SP.js";import{T as r}from"./Text-BxMUKbtC.js";import{C as s,a as c}from"./ChipGroup-D1NGtJnB.js";import"./_commonjsHelpers-CqkleIqs.js";import"./mq.hook-BU-2oBAn.js";import"./radii-Ir2x-kmI.js";import"./index-DOpYXeGo.js";import"./colors-CLHggMRt.js";import"./Tag-CdyncLWL.js";import"./Icon-BjyDhYXA.js";import"./IconConfig-CigF0iOf.js";import"./Avatar-V7t8AZ1z.js";import"./Badge-DuKalmEC.js";import"./Spinner-VZexnvVV.js";import"./FieldContext-D6URyQos.js";const m={user1:"https://i.pravatar.cc/150?img=1"},ks={title:"Components/Chip",component:s,tags:["autodocs"],argTypes:{size:{control:"select",options:["md","sm","lg"],description:"Size variants of chip"},iconBefore:{control:!1,description:"Structured icon slot rendered before the label"},iconAfter:{control:!1,description:"Structured icon slot rendered after the label"},avatarBefore:{control:!1,description:"Structured avatar slot rendered before the label"},badgeBefore:{control:!1,description:"Structured badge slot rendered before the label"},badgeAfter:{control:!1,description:"Structured badge slot rendered after the label"},before:{control:!1,description:"Escape hatch content to render before the label"},after:{control:!1,description:"Escape hatch content to render after the label"},disabled:{control:"boolean",description:"Disables the chip interaction"},loading:{control:"boolean",description:"Shows loading state with pulse animation"},deleted:{control:"boolean",description:"Shows deleted state with strikethrough"},dismissable:{control:"boolean",description:"Renders a trailing remove button instead of whole-chip dismiss"},dismissLabel:{control:"text",description:"Accessible label for the trailing remove button"}},args:{children:"Chip Label",size:"md"},parameters:{layout:"centered"}},u={render:()=>e.jsx(s,{children:"Default"})},g={render:()=>e.jsxs(x,{columns:5,justifyItems:"center",gap:"20",children:[e.jsx(s,{size:"sm",children:"sm Chip"}),e.jsx(s,{size:"sm",iconBefore:{name:"hash"},children:"sm Chip"}),e.jsx(s,{size:"sm",iconAfter:{name:"read-doc"},children:"sm Chip"}),e.jsx(s,{size:"sm",avatarBefore:{src:m.user1,name:"John Doe"},children:"sm Chip"}),e.jsx(s,{size:"sm",badgeAfter:{count:3},children:"sm Chip"}),e.jsx(s,{size:"md",children:"md Chip"}),e.jsx(s,{size:"md",iconBefore:{name:"hash"},children:"md Chip"}),e.jsx(s,{size:"md",iconAfter:{name:"read-doc"},children:"md Chip"}),e.jsx(s,{size:"md",avatarBefore:{src:m.user1,name:"John Doe"},children:"md Chip"}),e.jsx(s,{size:"md",badgeAfter:{count:3},children:"md Chip"}),e.jsx(s,{size:"lg",children:"lg Chip"}),e.jsx(s,{size:"lg",iconBefore:{name:"hash"},children:"lg Chip"}),e.jsx(s,{size:"lg",iconAfter:{name:"read-doc"},children:"lg Chip"}),e.jsx(s,{size:"lg",avatarBefore:{src:m.user1,name:"John Doe"},children:"lg Chip"}),e.jsx(s,{size:"lg",badgeAfter:{count:3},children:"lg Chip"})]})},p=()=>e.jsxs(x,{w:"full",h:"full",position:"relative",placeContent:"center",alignItems:"center",justifyItems:"center",gap:"16",children:[e.jsxs(ls,{justifyContent:"center",children:[e.jsx(s,{size:{base:"lg",xs:"md",sm:"sm"},iconBefore:{name:"hash"},children:"Chip"}),e.jsx(s,{size:{base:"lg",xs:"md",sm:"sm"},avatarBefore:{src:m.user1,name:"John Doe"},children:"Chip"}),e.jsx(s,{size:{base:"lg",xs:"md",sm:"sm"},badgeAfter:{count:3},children:"Chip"})]}),e.jsxs(r,{textAlign:"center",textStyle:"mono.sm",_after:{display:"inline",content:{base:'"lg"',xs:'"md"',sm:'"sm"'},color:"text.bold",fontWeight:"bold"},children:["Size:"," "]}),e.jsx(rs,{})]}),f={render:()=>e.jsxs(i,{gap:"4",flexDir:"column",alignItems:"center",children:[e.jsxs(i,{gap:"4",alignItems:"center",children:[e.jsx(s,{size:"sm",badgeBefore:{count:2,variant:"success"},children:"Small"}),e.jsx(s,{badgeBefore:{count:30,variant:"neutral"},children:"Medium"}),e.jsx(s,{size:"lg",badgeBefore:{count:100},children:"Large"})]}),e.jsxs(i,{gap:"4",alignItems:"center",children:[e.jsx(s,{size:"sm",avatarBefore:{src:m.user1,name:"John Doe"},children:"Small"}),e.jsx(s,{avatarBefore:{src:m.user1,name:"John Doe"},children:"Medium"}),e.jsx(s,{size:"lg",avatarBefore:{src:m.user1,name:"John Doe"},children:"Large"})]}),e.jsxs(i,{gap:"4",alignItems:"center",children:[e.jsx(s,{size:"sm",iconBefore:{name:"file"},children:"Small"}),e.jsx(s,{iconBefore:{name:"file"},children:"Medium"}),e.jsx(s,{size:"lg",iconBefore:{name:"file"},children:"Large"})]})]})},C={render:()=>e.jsxs(i,{gap:"4",alignItems:"center",children:[e.jsx(s,{size:"sm",iconAfter:{name:"skull"},children:"Small"}),e.jsx(s,{iconAfter:{name:"skull"},children:"Medium"}),e.jsx(s,{size:"lg",iconAfter:{name:"skull"},children:"Large"})]})},j={render:()=>e.jsxs(i,{gap:"4",alignItems:"center",children:[e.jsx(s,{size:"sm",iconBefore:{name:"user"},iconAfter:{name:"skull"},children:"Small"}),e.jsx(s,{iconBefore:{name:"user"},iconAfter:{name:"skull"},children:"Medium"}),e.jsx(s,{size:"lg",iconBefore:{name:"user"},iconAfter:{name:"skull"},children:"Large"})]})},S={render:()=>e.jsxs(x,{gridTemplateColumns:"auto auto",gap:"24",children:[e.jsx(r,{textStyle:"mono.xs",children:"Default:"}),e.jsx(s,{iconBefore:{name:"file"},children:"Interactive"}),e.jsx(r,{textStyle:"mono.xs",children:"Disabled:"}),e.jsx(s,{disabled:!0,iconBefore:{name:"file"},children:"Disabled"}),e.jsx(r,{textStyle:"mono.xs",children:"Loading:"}),e.jsx(s,{loading:!0,iconBefore:{name:"file"},children:"Loading..."}),e.jsx(r,{textStyle:"mono.xs",children:"Deleted:"}),e.jsx(s,{deleted:!0,iconBefore:{name:"file"},children:"Deleted Item"})]})},b={render:()=>e.jsxs(i,{flexDir:"column",gap:"12",children:[e.jsxs(i,{flexDir:"column",gap:"2",children:[e.jsx(r,{textStyle:"mono.xs",children:"No Content Before/After"}),e.jsxs(i,{gap:"4",alignItems:"center",children:[e.jsx(s,{size:"sm",children:"Small"}),e.jsx(s,{children:"Medium"}),e.jsx(s,{size:"lg",children:"Large"})]})]}),e.jsxs(i,{flexDir:"column",gap:"2",children:[e.jsx(r,{textStyle:"mono.xs",children:"With Before"}),e.jsxs(i,{gap:"4",alignItems:"center",children:[e.jsx(s,{size:"sm",iconBefore:{name:"file"},children:"Small"}),e.jsx(s,{iconBefore:{name:"file"},children:"Medium"}),e.jsx(s,{size:"lg",iconBefore:{name:"file"},children:"Large"})]})]}),e.jsxs(i,{flexDir:"column",gap:"2",children:[e.jsx(r,{textStyle:"mono.xs",children:"With After"}),e.jsxs(i,{gap:"4",alignItems:"center",children:[e.jsx(s,{size:"sm",iconAfter:{name:"skull"},children:"Small"}),e.jsx(s,{iconAfter:{name:"skull"},children:"Medium"}),e.jsx(s,{size:"lg",iconAfter:{name:"skull"},children:"Large"})]})]}),e.jsxs(i,{flexDir:"column",gap:"2",children:[e.jsx(r,{textStyle:"mono.xs",children:"With Before and After"}),e.jsxs(i,{gap:"4",alignItems:"center",children:[e.jsx(s,{size:"sm",iconBefore:{name:"user"},iconAfter:{name:"skull"},children:"Small"}),e.jsx(s,{iconBefore:{name:"user"},iconAfter:{name:"skull"},children:"Medium"}),e.jsx(s,{size:"lg",iconBefore:{name:"user"},iconAfter:{name:"skull"},children:"Large"})]})]})]})},D={render:()=>e.jsx(os,{maxW:"lg",children:e.jsxs(r,{children:["Chips can appear inline within text, like tagging"," ",e.jsx(s,{iconBefore:{name:"user"},children:"John Doe"})," in a conversation or referencing ",e.jsx(s,{iconBefore:{name:"file"},children:"Project Plan"})," in your notes."]})})},B={render:()=>e.jsxs(i,{flexDir:"column",gap:"20",children:[e.jsxs(i,{flexDir:"column",gap:"2",children:[e.jsx(r,{textStyle:"mono.xs",children:"Filter Tags"}),e.jsxs(i,{gap:"4",flexWrap:"wrap",children:[e.jsx(s,{dismissable:!0,onDismiss:()=>{},children:"React"}),e.jsx(s,{dismissable:!0,onDismiss:()=>{},children:"TypeScript"}),e.jsx(s,{dismissable:!0,onDismiss:()=>{},children:"Panda CSS"}),e.jsx(s,{iconBefore:{name:"plus"},children:"Add Filter"})]})]}),e.jsxs(i,{flexDir:"column",gap:"2",children:[e.jsx(r,{textStyle:"mono.xs",children:"Categories"}),e.jsxs(i,{gap:"4",flexWrap:"wrap",children:[e.jsx(s,{iconBefore:{name:"file"},children:"Documentation"}),e.jsx(s,{iconBefore:{name:"calendar"},children:"Events"}),e.jsx(s,{iconBefore:{name:"user"},children:"People"})]})]}),e.jsxs(i,{flexDir:"column",gap:"2",children:[e.jsx(r,{textStyle:"mono.xs",children:"Actions"}),e.jsxs(i,{gap:"4",flexWrap:"wrap",children:[e.jsx(s,{iconBefore:{name:"plus"},children:"New Item"}),e.jsx(s,{iconBefore:{name:"check"},children:"Approve"}),e.jsx(s,{deleted:!0,children:"Archived"})]})]})]})},as=()=>{const[n,t]=a.useState(["React","TypeScript","Panda CSS","Vite"]),l=o=>{t(E=>E.filter(J=>J!==o))};return e.jsxs(i,{flexDir:"column",gap:"12",children:[e.jsx(r,{textStyle:"mono.xs",children:"Click the X to dismiss tags:"}),e.jsx(i,{gap:"4",flexWrap:"wrap",children:n.map(o=>e.jsx(s,{dismissable:!0,onDismiss:()=>l(o),children:o},o))}),n.length===0&&e.jsx(r,{color:"text.muted",children:"All tags dismissed!"})]})},v={render:()=>e.jsx(as,{})},y={render:()=>e.jsxs(i,{gap:"4",children:[e.jsx(s,{dismissable:!0,iconBefore:{name:"file"},onDismiss:()=>{},children:"Document"}),e.jsx(s,{dismissable:!0,iconBefore:{name:"user"},onDismiss:()=>{},children:"Person"}),e.jsx(s,{dismissable:!0,iconBefore:{name:"calendar"},onDismiss:()=>{},children:"Event"})]})},z={render:()=>e.jsxs(i,{flexDir:"column",gap:"12",children:[e.jsx(r,{textStyle:"mono.xs",children:"Body clicks stay on the chip action. The trailing X is the only dismiss target."}),e.jsxs(i,{gap:"4",flexWrap:"wrap",children:[e.jsx(s,{dismissable:!0,iconBefore:{name:"file"},onClick:()=>alert("Opened document"),onDismiss:()=>alert("Removed document"),children:"Document"}),e.jsx(s,{dismissable:!0,iconBefore:{name:"user"},onClick:()=>alert("Opened person"),onDismiss:()=>alert("Removed person"),children:"Person"})]})]})},A={render:()=>e.jsxs(x,{gridTemplateColumns:"auto auto",gap:"24",children:[e.jsx(r,{textStyle:"mono.xs",children:"Default:"}),e.jsx(s,{dismissable:!0,onDismiss:()=>{},children:"Default"}),e.jsx(r,{textStyle:"mono.xs",children:"Disabled:"}),e.jsx(s,{dismissable:!0,disabled:!0,onDismiss:()=>{},children:"Disabled"}),e.jsx(r,{textStyle:"mono.xs",children:"Loading:"}),e.jsx(s,{dismissable:!0,loading:!0,onDismiss:()=>{},children:"Loading..."}),e.jsx(r,{textStyle:"mono.xs",children:"Deleted:"}),e.jsx(s,{dismissable:!0,deleted:!0,onDismiss:()=>{},children:"Deleted Item"})]})},F={render:()=>e.jsx(s,{dismissable:!0,dismissLabel:"Remove assignee John Doe",avatarBefore:{src:m.user1,name:"John Doe"},onDismiss:()=>{},children:"John Doe"})},ns=()=>{const[n,t]=a.useState("");return e.jsxs(i,{flexDir:"column",gap:"12",children:[e.jsx(r,{textStyle:"mono.md",children:"Select one size:"}),e.jsxs(c,{type:"single",value:n,onChange:l=>t(l),label:"Size selection",children:[e.jsx(s,{value:"sm",children:"Small"}),e.jsx(s,{value:"md",children:"Medium"}),e.jsx(s,{value:"lg",children:"Large"}),e.jsx(s,{value:"xl",children:"X-Large"})]}),e.jsxs(r,{textStyle:"mono.xs",children:["Selected: ",n]})]})},T={render:()=>e.jsx(ns,{})},cs=()=>{const[n,t]=a.useState("grid");return e.jsxs(i,{flexDir:"column",gap:"12",children:[e.jsx(r,{textStyle:"mono.md",children:"Select a view:"}),e.jsxs(c,{type:"single",value:n,onChange:l=>t(l),label:"View selection",children:[e.jsx(s,{value:"list",iconBefore:{name:"menu"},children:"List"}),e.jsx(s,{value:"grid",iconBefore:{name:"view-grid"},children:"Grid"}),e.jsx(s,{value:"calendar",iconBefore:{name:"calendar"},children:"Calendar"})]}),e.jsxs(r,{textStyle:"mono.xs",children:["Selected: ",n]})]})},W={render:()=>e.jsx(cs,{})},ts=()=>{const[n,t]=a.useState(["react","typescript"]);return e.jsxs(i,{flexDir:"column",gap:"12",children:[e.jsx(r,{textStyle:"mono.md",children:"Select your skills (check icon appears when selected):"}),e.jsxs(c,{type:"multi",value:n,onChange:l=>t(l),label:"Skills selection",children:[e.jsx(s,{value:"react",children:"React"}),e.jsx(s,{value:"typescript",children:"TypeScript"}),e.jsx(s,{value:"vue",children:"Vue"}),e.jsx(s,{value:"angular",children:"Angular"}),e.jsx(s,{value:"svelte",children:"Svelte"})]}),e.jsxs(r,{textStyle:"mono.xs",children:["Selected: ",n.join(", ")||"None"]})]})},I={render:()=>e.jsx(ts,{})},ms=()=>{const[n,t]=a.useState(["docs"]);return e.jsxs(i,{flexDir:"column",gap:"12",children:[e.jsx(r,{textStyle:"mono.md",children:"Filter by category:"}),e.jsxs(c,{type:"multi",value:n,onChange:l=>t(l),label:"Category filter",children:[e.jsx(s,{value:"docs",iconBefore:{name:"file"},children:"Documents"}),e.jsx(s,{value:"images",iconBefore:{name:"image"},children:"Images"}),e.jsx(s,{value:"videos",iconBefore:{name:"video"},children:"Videos"}),e.jsx(s,{value:"audio",iconBefore:{name:"broadcast"},children:"Audio"})]}),e.jsxs(r,{textStyle:"mono.xs",children:["Selected: ",n.join(", ")||"None"]})]})},k={render:()=>e.jsx(ms,{})},L={render:()=>e.jsxs(i,{flexDir:"column",gap:"40",children:[e.jsxs(i,{flexDir:"column",gap:"2",children:[e.jsx(r,{textStyle:"mono.md",color:"text",fontWeight:"bold",children:"Single Select (arrow keys navigate & select):"}),e.jsx(ns,{})]}),e.jsxs(i,{flexDir:"column",gap:"2",children:[e.jsx(r,{textStyle:"mono.md",color:"text",fontWeight:"bold",children:"Multi Select (tab between, space/enter toggles):"}),e.jsx(ts,{})]})]})},ds=()=>{const[n,t]=a.useState("option-a"),[l,o]=a.useState("option-a"),[E,J]=a.useState("option-a");return e.jsxs(i,{flexDir:"column",gap:"24",children:[e.jsxs(i,{flexDir:"column",gap:"2",children:[e.jsx(r,{textStyle:"mono.xs",children:"Small"}),e.jsxs(c,{type:"single",size:"sm",value:n,onChange:d=>t(d),label:"Small chip group",children:[e.jsx(s,{value:"option-a",children:"Option A"}),e.jsx(s,{value:"option-b",children:"Option B"}),e.jsx(s,{value:"option-c",children:"Option C"})]})]}),e.jsxs(i,{flexDir:"column",gap:"2",children:[e.jsx(r,{textStyle:"mono.xs",children:"Medium"}),e.jsxs(c,{type:"single",size:"md",value:l,onChange:d=>o(d),label:"Medium chip group",children:[e.jsx(s,{value:"option-a",children:"Option A"}),e.jsx(s,{value:"option-b",children:"Option B"}),e.jsx(s,{value:"option-c",children:"Option C"})]})]}),e.jsxs(i,{flexDir:"column",gap:"2",children:[e.jsx(r,{textStyle:"mono.xs",children:"Large"}),e.jsxs(c,{type:"single",size:"lg",value:E,onChange:d=>J(d),label:"Large chip group",children:[e.jsx(s,{value:"option-a",children:"Option A"}),e.jsx(s,{value:"option-b",children:"Option B"}),e.jsx(s,{value:"option-c",children:"Option C"})]})]})]})},w={render:()=>e.jsx(ds,{})},h=()=>{const[n,t]=a.useState("assignee");return e.jsxs(x,{w:"full",h:"full",position:"relative",placeContent:"center",alignItems:"center",justifyItems:"center",gap:"16",children:[e.jsxs(c,{type:"single",size:{base:"lg",xs:"md",sm:"sm"},value:n,onChange:l=>t(l),label:"Responsive chip group",children:[e.jsx(s,{value:"assignee",avatarBefore:{name:"John Doe"},children:"Assignee"}),e.jsx(s,{value:"mentions",iconBefore:{name:"hash"},children:"Mentions"}),e.jsx(s,{value:"alerts",badgeAfter:{count:3},children:"Alerts"})]}),e.jsxs(r,{textAlign:"center",textStyle:"mono.sm",_after:{display:"inline",content:{base:'"lg"',xs:'"md"',sm:'"sm"'},color:"text.bold",fontWeight:"bold"},children:["Group size:"," "]}),e.jsx(rs,{})]})},ps=()=>{const[n,t]=a.useState("active");return e.jsxs(i,{flexDir:"column",gap:"12",children:[e.jsx(r,{textStyle:"mono.md",children:"Individual chips can be disabled within a group:"}),e.jsxs(c,{type:"single",value:n,onChange:l=>t(l),label:"Options with disabled",children:[e.jsx(s,{value:"active",children:"Active"}),e.jsx(s,{value:"pending",children:"Pending"}),e.jsx(s,{value:"unavailable",disabled:!0,children:"Unavailable"}),e.jsx(s,{value:"archived",children:"Archived"})]}),e.jsxs(r,{textStyle:"mono.xs",children:["Selected: ",n]})]})},M={render:()=>e.jsx(ps,{})},hs=()=>{const[n,t]=a.useState(["react","typescript"]),l=["React","TypeScript","JavaScript","Vue","Angular","Svelte","Next.js","Remix","Astro","Node.js","Python","Go","Rust","GraphQL","REST","Docker"];return e.jsxs(i,{flexDir:"column",gap:"12",maxW:"md",children:[e.jsx(r,{textStyle:"mono.md",children:"ChipGroup wraps when chips exceed container width:"}),e.jsx(c,{type:"multi",value:n,onChange:o=>t(o),label:"Skills selection",children:l.map(o=>e.jsx(s,{value:o.toLowerCase(),children:o},o.toLowerCase()))}),e.jsxs(r,{textStyle:"mono.xs",children:["Selected: ",n.join(", ")||"None"]})]})},G={render:()=>e.jsx(hs,{})};p.__docgenInfo={description:"",methods:[],displayName:"ConditionalBreakpoints"};h.__docgenInfo={description:"",methods:[],displayName:"ChipGroupResponsiveSizes"};var R,P,O;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <Chip>Default</Chip>
}`,...(O=(P=u.parameters)==null?void 0:P.docs)==null?void 0:O.source}}};var N,V,_;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(_=(V=g.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var X,U,K;p.parameters={...p.parameters,docs:{...(X=p.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
  return <Grid w="full" h="full" position="relative" placeContent="center" alignItems="center" justifyItems="center" gap="16">
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
      <BreakpointIndicator />
    </Grid>;
}`,...(K=(U=p.parameters)==null?void 0:U.docs)==null?void 0:K.source}}};var Q,q,H;f.parameters={...f.parameters,docs:{...(Q=f.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(H=(q=f.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var Y,Z,$;C.parameters={...C.parameters,docs:{...(Y=C.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <Flex gap="4" alignItems="center">
      <Chip size="sm" iconAfter={{
      name: 'skull'
    }}>
        Small
      </Chip>
      <Chip iconAfter={{
      name: 'skull'
    }}>Medium</Chip>
      <Chip size="lg" iconAfter={{
      name: 'skull'
    }}>
        Large
      </Chip>
    </Flex>
}`,...($=(Z=C.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,se,ie;j.parameters={...j.parameters,docs:{...(ee=j.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <Flex gap="4" alignItems="center">
      <Chip size="sm" iconBefore={{
      name: 'user'
    }} iconAfter={{
      name: 'skull'
    }}>
        Small
      </Chip>
      <Chip iconBefore={{
      name: 'user'
    }} iconAfter={{
      name: 'skull'
    }}>
        Medium
      </Chip>
      <Chip size="lg" iconBefore={{
      name: 'user'
    }} iconAfter={{
      name: 'skull'
    }}>
        Large
      </Chip>
    </Flex>
}`,...(ie=(se=j.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var re,ne,te;S.parameters={...S.parameters,docs:{...(re=S.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(te=(ne=S.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var le,oe,ae;b.parameters={...b.parameters,docs:{...(le=b.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
          name: 'skull'
        }}>
            Small
          </Chip>
          <Chip iconAfter={{
          name: 'skull'
        }}>Medium</Chip>
          <Chip size="lg" iconAfter={{
          name: 'skull'
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
          name: 'skull'
        }}>
            Small
          </Chip>
          <Chip iconBefore={{
          name: 'user'
        }} iconAfter={{
          name: 'skull'
        }}>
            Medium
          </Chip>
          <Chip size="lg" iconBefore={{
          name: 'user'
        }} iconAfter={{
          name: 'skull'
        }}>
            Large
          </Chip>
        </Flex>
      </Flex>
    </Flex>
}`,...(ae=(oe=b.parameters)==null?void 0:oe.docs)==null?void 0:ae.source}}};var ce,me,de;D.parameters={...D.parameters,docs:{...(ce=D.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(de=(me=D.parameters)==null?void 0:me.docs)==null?void 0:de.source}}};var pe,he,xe;B.parameters={...B.parameters,docs:{...(pe=B.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: () => <Flex flexDir="column" gap="20">
      <Flex flexDir="column" gap="2">
        <Text textStyle="mono.xs">Filter Tags</Text>
        <Flex gap="4" flexWrap="wrap">
          <Chip dismissable onDismiss={() => {}}>
            React
          </Chip>
          <Chip dismissable onDismiss={() => {}}>
            TypeScript
          </Chip>
          <Chip dismissable onDismiss={() => {}}>
            Panda CSS
          </Chip>
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
}`,...(xe=(he=B.parameters)==null?void 0:he.docs)==null?void 0:xe.source}}};var ue,ge,fe;v.parameters={...v.parameters,docs:{...(ue=v.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => <DismissableExample />
}`,...(fe=(ge=v.parameters)==null?void 0:ge.docs)==null?void 0:fe.source}}};var Ce,je,Se;y.parameters={...y.parameters,docs:{...(Ce=y.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(Se=(je=y.parameters)==null?void 0:je.docs)==null?void 0:Se.source}}};var be,De,Be;z.parameters={...z.parameters,docs:{...(be=z.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: () => <Flex flexDir="column" gap="12">
      <Text textStyle="mono.xs">
        Body clicks stay on the chip action. The trailing X is the only dismiss
        target.
      </Text>
      <Flex gap="4" flexWrap="wrap">
        <Chip dismissable iconBefore={{
        name: 'file'
      }} onClick={() => alert('Opened document')} onDismiss={() => alert('Removed document')}>
          Document
        </Chip>
        <Chip dismissable iconBefore={{
        name: 'user'
      }} onClick={() => alert('Opened person')} onDismiss={() => alert('Removed person')}>
          Person
        </Chip>
      </Flex>
    </Flex>
}`,...(Be=(De=z.parameters)==null?void 0:De.docs)==null?void 0:Be.source}}};var ve,ye,ze;A.parameters={...A.parameters,docs:{...(ve=A.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  render: () => <Grid gridTemplateColumns="auto auto" gap="24">
      <Text textStyle="mono.xs">Default:</Text>
      <Chip dismissable onDismiss={() => {}}>
        Default
      </Chip>
      <Text textStyle="mono.xs">Disabled:</Text>
      <Chip dismissable disabled onDismiss={() => {}}>
        Disabled
      </Chip>
      <Text textStyle="mono.xs">Loading:</Text>
      <Chip dismissable loading onDismiss={() => {}}>
        Loading...
      </Chip>
      <Text textStyle="mono.xs">Deleted:</Text>
      <Chip dismissable deleted onDismiss={() => {}}>
        Deleted Item
      </Chip>
    </Grid>
}`,...(ze=(ye=A.parameters)==null?void 0:ye.docs)==null?void 0:ze.source}}};var Ae,Fe,Te;F.parameters={...F.parameters,docs:{...(Ae=F.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  render: () => <Chip dismissable dismissLabel="Remove assignee John Doe" avatarBefore={{
    src: sampleImages.user1,
    name: 'John Doe'
  }} onDismiss={() => {}}>
      John Doe
    </Chip>
}`,...(Te=(Fe=F.parameters)==null?void 0:Fe.docs)==null?void 0:Te.source}}};var We,Ie,ke;T.parameters={...T.parameters,docs:{...(We=T.parameters)==null?void 0:We.docs,source:{originalSource:`{
  render: () => <SingleSelectExample />
}`,...(ke=(Ie=T.parameters)==null?void 0:Ie.docs)==null?void 0:ke.source}}};var Le,we,Me;W.parameters={...W.parameters,docs:{...(Le=W.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  render: () => <SingleSelectWithBeforeExample />
}`,...(Me=(we=W.parameters)==null?void 0:we.docs)==null?void 0:Me.source}}};var Ge,Ee,Je;I.parameters={...I.parameters,docs:{...(Ge=I.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  render: () => <MultiSelectExample />
}`,...(Je=(Ee=I.parameters)==null?void 0:Ee.docs)==null?void 0:Je.source}}};var Re,Pe,Oe;k.parameters={...k.parameters,docs:{...(Re=k.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  render: () => <MultiSelectWithBeforeExample />
}`,...(Oe=(Pe=k.parameters)==null?void 0:Pe.docs)==null?void 0:Oe.source}}};var Ne,Ve,_e;L.parameters={...L.parameters,docs:{...(Ne=L.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
}`,...(_e=(Ve=L.parameters)==null?void 0:Ve.docs)==null?void 0:_e.source}}};var Xe,Ue,Ke;w.parameters={...w.parameters,docs:{...(Xe=w.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  render: () => <ChipGroupSizesExample />
}`,...(Ke=(Ue=w.parameters)==null?void 0:Ue.docs)==null?void 0:Ke.source}}};var Qe,qe,He;h.parameters={...h.parameters,docs:{...(Qe=h.parameters)==null?void 0:Qe.docs,source:{originalSource:`() => {
  const [selected, setSelected] = useState('assignee');
  return <Grid w="full" h="full" position="relative" placeContent="center" alignItems="center" justifyItems="center" gap="16">
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
      <BreakpointIndicator />
    </Grid>;
}`,...(He=(qe=h.parameters)==null?void 0:qe.docs)==null?void 0:He.source}}};var Ye,Ze,$e;M.parameters={...M.parameters,docs:{...(Ye=M.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  render: () => <ChipGroupWithDisabledExample />
}`,...($e=(Ze=M.parameters)==null?void 0:Ze.docs)==null?void 0:$e.source}}};var es,ss,is;G.parameters={...G.parameters,docs:{...(es=G.parameters)==null?void 0:es.docs,source:{originalSource:`{
  render: () => <ChipGroupWrappingExample />
}`,...(is=(ss=G.parameters)==null?void 0:ss.docs)==null?void 0:is.source}}};const Ls=["Default","Sizes","ConditionalBreakpoints","WithBefore","WithAfter","WithBeforeAndAfter","States","SizesMatrix","InlineWithText","UseCases","Dismissable","DismissableWithBefore","DismissableWithPrimaryAction","DismissableStates","DismissableWithCustomLabel","SingleSelect","SingleSelectWithBefore","MultiSelect","MultiSelectWithBefore","KeyboardNavigation","ChipGroupSizes","ChipGroupResponsiveSizes","ChipGroupWithDisabled","ChipGroupWrapping"];export{h as ChipGroupResponsiveSizes,w as ChipGroupSizes,M as ChipGroupWithDisabled,G as ChipGroupWrapping,p as ConditionalBreakpoints,u as Default,v as Dismissable,A as DismissableStates,y as DismissableWithBefore,F as DismissableWithCustomLabel,z as DismissableWithPrimaryAction,D as InlineWithText,L as KeyboardNavigation,I as MultiSelect,k as MultiSelectWithBefore,T as SingleSelect,W as SingleSelectWithBefore,g as Sizes,b as SizesMatrix,S as States,B as UseCases,C as WithAfter,f as WithBefore,j as WithBeforeAndAfter,Ls as __namedExportsOrder,ks as default};
