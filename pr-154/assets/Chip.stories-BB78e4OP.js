import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./index-BKyFwriW.js";import{G as L,W as Ze,F as i,B as $e}from"./Box-7d6-wXl0.js";import{B as qe}from"./BreakpointIndicator-U3vrIdY_.js";import{T as s}from"./Text-Cm9k3dA6.js";import{C as r,a as c}from"./ChipGroup-BoaF0Wqy.js";import"./_commonjsHelpers-CqkleIqs.js";import"./mq.hook-BU-2oBAn.js";import"./radii-Ir2x-kmI.js";import"./index-DOpYXeGo.js";import"./colors-CLHggMRt.js";import"./Tag-TEsd4yEi.js";import"./Icon-CdfbFGjj.js";import"./IconConfig-D6qOrJtl.js";import"./Avatar-B5x53ntW.js";import"./Badge-BHSJBx75.js";import"./Spinner-Ccue1JZg.js";const m={user1:"https://i.pravatar.cc/150?img=1"},zr={title:"Components/Chip",component:r,tags:["autodocs"],argTypes:{size:{control:"select",options:["md","sm","lg"],description:"Size variants of chip"},iconBefore:{control:!1,description:"Structured icon slot rendered before the label"},iconAfter:{control:!1,description:"Structured icon slot rendered after the label"},avatarBefore:{control:!1,description:"Structured avatar slot rendered before the label"},badgeBefore:{control:!1,description:"Structured badge slot rendered before the label"},badgeAfter:{control:!1,description:"Structured badge slot rendered after the label"},before:{control:!1,description:"Escape hatch content to render before the label"},after:{control:!1,description:"Escape hatch content to render after the label"},disabled:{control:"boolean",description:"Disables the chip interaction"},loading:{control:"boolean",description:"Shows loading state with pulse animation"},deleted:{control:"boolean",description:"Shows deleted state with strikethrough"}},args:{children:"Chip Label",size:"md"},parameters:{layout:"centered"}},h={render:()=>e.jsx(r,{children:"Default"})},x={render:()=>e.jsxs(L,{columns:5,justifyItems:"center",gap:"20",children:[e.jsx(r,{size:"sm",children:"sm Chip"}),e.jsx(r,{size:"sm",iconBefore:{name:"hash"},children:"sm Chip"}),e.jsx(r,{size:"sm",iconAfter:{name:"read-doc"},children:"sm Chip"}),e.jsx(r,{size:"sm",avatarBefore:{src:m.user1,name:"John Doe"},children:"sm Chip"}),e.jsx(r,{size:"sm",badgeAfter:{count:3},children:"sm Chip"}),e.jsx(r,{size:"md",children:"md Chip"}),e.jsx(r,{size:"md",iconBefore:{name:"hash"},children:"md Chip"}),e.jsx(r,{size:"md",iconAfter:{name:"read-doc"},children:"md Chip"}),e.jsx(r,{size:"md",avatarBefore:{src:m.user1,name:"John Doe"},children:"md Chip"}),e.jsx(r,{size:"md",badgeAfter:{count:3},children:"md Chip"}),e.jsx(r,{size:"lg",children:"lg Chip"}),e.jsx(r,{size:"lg",iconBefore:{name:"hash"},children:"lg Chip"}),e.jsx(r,{size:"lg",iconAfter:{name:"read-doc"},children:"lg Chip"}),e.jsx(r,{size:"lg",avatarBefore:{src:m.user1,name:"John Doe"},children:"lg Chip"}),e.jsx(r,{size:"lg",badgeAfter:{count:3},children:"lg Chip"})]})},p=()=>e.jsxs(L,{w:"full",h:"full",position:"relative",placeContent:"center",alignItems:"center",gap:"16",children:[e.jsxs(Ze,{justifyContent:"center",children:[e.jsx(r,{size:{base:"lg",xs:"md",sm:"sm"},iconBefore:{name:"hash"},children:"Chip"}),e.jsx(r,{size:{base:"lg",xs:"md",sm:"sm"},avatarBefore:{src:m.user1,name:"John Doe"},children:"Chip"}),e.jsx(r,{size:{base:"lg",xs:"md",sm:"sm"},badgeAfter:{count:3},children:"Chip"})]}),e.jsxs(s,{textAlign:"center",textStyle:"mono.sm",_after:{display:"inline",content:{base:'"lg"',xs:'"md"',sm:'"sm"'},color:"text.bold",fontWeight:"bold"},children:["Size:"," "]}),e.jsx(qe,{position:"fixed",bottom:"16",right:"16"})]}),u={render:()=>e.jsxs(i,{gap:"4",flexDir:"column",alignItems:"center",children:[e.jsxs(i,{gap:"4",alignItems:"center",children:[e.jsx(r,{size:"sm",badgeBefore:{count:2,variant:"success"},children:"Small"}),e.jsx(r,{badgeBefore:{count:30,variant:"neutral"},children:"Medium"}),e.jsx(r,{size:"lg",badgeBefore:{count:100},children:"Large"})]}),e.jsxs(i,{gap:"4",alignItems:"center",children:[e.jsx(r,{size:"sm",avatarBefore:{src:m.user1,name:"John Doe"},children:"Small"}),e.jsx(r,{avatarBefore:{src:m.user1,name:"John Doe"},children:"Medium"}),e.jsx(r,{size:"lg",avatarBefore:{src:m.user1,name:"John Doe"},children:"Large"})]}),e.jsxs(i,{gap:"4",alignItems:"center",children:[e.jsx(r,{size:"sm",iconBefore:{name:"file"},children:"Small"}),e.jsx(r,{iconBefore:{name:"file"},children:"Medium"}),e.jsx(r,{size:"lg",iconBefore:{name:"file"},children:"Large"})]})]})},g={render:()=>e.jsxs(i,{gap:"4",alignItems:"center",children:[e.jsx(r,{size:"sm",iconAfter:{name:"x"},children:"Small"}),e.jsx(r,{iconAfter:{name:"x"},children:"Medium"}),e.jsx(r,{size:"lg",iconAfter:{name:"x"},children:"Large"})]})},f={render:()=>e.jsxs(i,{gap:"4",alignItems:"center",children:[e.jsx(r,{size:"sm",iconBefore:{name:"user"},iconAfter:{name:"x"},children:"Small"}),e.jsx(r,{iconBefore:{name:"user"},iconAfter:{name:"x"},children:"Medium"}),e.jsx(r,{size:"lg",iconBefore:{name:"user"},iconAfter:{name:"x"},children:"Large"})]})},C={render:()=>e.jsxs(L,{gridTemplateColumns:"auto auto",gap:"24",children:[e.jsx(s,{textStyle:"mono.xs",children:"Default:"}),e.jsx(r,{iconBefore:{name:"file"},children:"Interactive"}),e.jsx(s,{textStyle:"mono.xs",children:"Disabled:"}),e.jsx(r,{disabled:!0,iconBefore:{name:"file"},children:"Disabled"}),e.jsx(s,{textStyle:"mono.xs",children:"Loading:"}),e.jsx(r,{loading:!0,iconBefore:{name:"file"},children:"Loading..."}),e.jsx(s,{textStyle:"mono.xs",children:"Deleted:"}),e.jsx(r,{deleted:!0,iconBefore:{name:"file"},children:"Deleted Item"})]})},j={render:()=>e.jsxs(i,{flexDir:"column",gap:"12",children:[e.jsx(s,{textStyle:"mono.xs",children:"Chips can be interactive buttons:"}),e.jsxs(i,{gap:"2",children:[e.jsx(r,{onClick:()=>alert("Clicked!"),children:"Click Me"}),e.jsx(r,{iconBefore:{name:"plus"},onClick:()=>alert("Add clicked!"),children:"Add Item"}),e.jsx(r,{iconAfter:{name:"x"},onClick:()=>alert("Remove clicked!"),children:"Remove"})]})]})},S={render:()=>e.jsxs(i,{flexDir:"column",gap:"12",children:[e.jsxs(i,{flexDir:"column",gap:"2",children:[e.jsx(s,{textStyle:"mono.xs",children:"No Content Before/After"}),e.jsxs(i,{gap:"4",alignItems:"center",children:[e.jsx(r,{size:"sm",children:"Small"}),e.jsx(r,{children:"Medium"}),e.jsx(r,{size:"lg",children:"Large"})]})]}),e.jsxs(i,{flexDir:"column",gap:"2",children:[e.jsx(s,{textStyle:"mono.xs",children:"With Before"}),e.jsxs(i,{gap:"4",alignItems:"center",children:[e.jsx(r,{size:"sm",iconBefore:{name:"file"},children:"Small"}),e.jsx(r,{iconBefore:{name:"file"},children:"Medium"}),e.jsx(r,{size:"lg",iconBefore:{name:"file"},children:"Large"})]})]}),e.jsxs(i,{flexDir:"column",gap:"2",children:[e.jsx(s,{textStyle:"mono.xs",children:"With After"}),e.jsxs(i,{gap:"4",alignItems:"center",children:[e.jsx(r,{size:"sm",iconAfter:{name:"x"},children:"Small"}),e.jsx(r,{iconAfter:{name:"x"},children:"Medium"}),e.jsx(r,{size:"lg",iconAfter:{name:"x"},children:"Large"})]})]}),e.jsxs(i,{flexDir:"column",gap:"2",children:[e.jsx(s,{textStyle:"mono.xs",children:"With Before and After"}),e.jsxs(i,{gap:"4",alignItems:"center",children:[e.jsx(r,{size:"sm",iconBefore:{name:"user"},iconAfter:{name:"x"},children:"Small"}),e.jsx(r,{iconBefore:{name:"user"},iconAfter:{name:"x"},children:"Medium"}),e.jsx(r,{size:"lg",iconBefore:{name:"user"},iconAfter:{name:"x"},children:"Large"})]})]})]})},B={render:()=>e.jsx($e,{maxW:"lg",children:e.jsxs(s,{children:["Chips can appear inline within text, like tagging"," ",e.jsx(r,{iconBefore:{name:"user"},children:"John Doe"})," in a conversation or referencing ",e.jsx(r,{iconBefore:{name:"file"},children:"Project Plan"})," in your notes."]})})},b={render:()=>e.jsxs(i,{flexDir:"column",gap:"20",children:[e.jsxs(i,{flexDir:"column",gap:"2",children:[e.jsx(s,{textStyle:"mono.xs",children:"Filter Tags"}),e.jsxs(i,{gap:"4",flexWrap:"wrap",children:[e.jsx(r,{iconAfter:{name:"x"},children:"React"}),e.jsx(r,{iconAfter:{name:"x"},children:"TypeScript"}),e.jsx(r,{iconAfter:{name:"x"},children:"Panda CSS"}),e.jsx(r,{iconBefore:{name:"plus"},children:"Add Filter"})]})]}),e.jsxs(i,{flexDir:"column",gap:"2",children:[e.jsx(s,{textStyle:"mono.xs",children:"Categories"}),e.jsxs(i,{gap:"4",flexWrap:"wrap",children:[e.jsx(r,{iconBefore:{name:"file"},children:"Documentation"}),e.jsx(r,{iconBefore:{name:"calendar"},children:"Events"}),e.jsx(r,{iconBefore:{name:"user"},children:"People"})]})]}),e.jsxs(i,{flexDir:"column",gap:"2",children:[e.jsx(s,{textStyle:"mono.xs",children:"Actions"}),e.jsxs(i,{gap:"4",flexWrap:"wrap",children:[e.jsx(r,{iconBefore:{name:"plus"},children:"New Item"}),e.jsx(r,{iconBefore:{name:"check"},children:"Approve"}),e.jsx(r,{deleted:!0,children:"Archived"})]})]})]})},er=()=>{const[n,t]=l.useState(["React","TypeScript","Panda CSS","Vite"]),o=a=>{t(k=>k.filter(E=>E!==a))};return e.jsxs(i,{flexDir:"column",gap:"12",children:[e.jsx(s,{textStyle:"mono.xs",children:"Click the X to dismiss tags:"}),e.jsx(i,{gap:"4",flexWrap:"wrap",children:n.map(a=>e.jsx(r,{dismissable:!0,onDismiss:()=>o(a),children:a},a))}),n.length===0&&e.jsx(s,{color:"text.muted",children:"All tags dismissed!"})]})},v={render:()=>e.jsx(er,{})},z={render:()=>e.jsxs(i,{gap:"4",children:[e.jsx(r,{dismissable:!0,iconBefore:{name:"file"},onDismiss:()=>{},children:"Document"}),e.jsx(r,{dismissable:!0,iconBefore:{name:"user"},onDismiss:()=>{},children:"Person"}),e.jsx(r,{dismissable:!0,iconBefore:{name:"calendar"},onDismiss:()=>{},children:"Event"})]})},He=()=>{const[n,t]=l.useState("");return e.jsxs(i,{flexDir:"column",gap:"12",children:[e.jsx(s,{textStyle:"mono.md",children:"Select one size:"}),e.jsxs(c,{type:"single",value:n,onChange:o=>t(o),label:"Size selection",children:[e.jsx(r,{value:"sm",children:"Small"}),e.jsx(r,{value:"md",children:"Medium"}),e.jsx(r,{value:"lg",children:"Large"}),e.jsx(r,{value:"xl",children:"X-Large"})]}),e.jsxs(s,{textStyle:"mono.xs",children:["Selected: ",n]})]})},D={render:()=>e.jsx(He,{})},rr=()=>{const[n,t]=l.useState("grid");return e.jsxs(i,{flexDir:"column",gap:"12",children:[e.jsx(s,{textStyle:"mono.md",children:"Select a view:"}),e.jsxs(c,{type:"single",value:n,onChange:o=>t(o),label:"View selection",children:[e.jsx(r,{value:"list",iconBefore:{name:"menu"},children:"List"}),e.jsx(r,{value:"grid",iconBefore:{name:"view-grid"},children:"Grid"}),e.jsx(r,{value:"calendar",iconBefore:{name:"calendar"},children:"Calendar"})]}),e.jsxs(s,{textStyle:"mono.xs",children:["Selected: ",n]})]})},A={render:()=>e.jsx(rr,{})},Ye=()=>{const[n,t]=l.useState(["react","typescript"]);return e.jsxs(i,{flexDir:"column",gap:"12",children:[e.jsx(s,{textStyle:"mono.md",children:"Select your skills (check icon appears when selected):"}),e.jsxs(c,{type:"multi",value:n,onChange:o=>t(o),label:"Skills selection",children:[e.jsx(r,{value:"react",children:"React"}),e.jsx(r,{value:"typescript",children:"TypeScript"}),e.jsx(r,{value:"vue",children:"Vue"}),e.jsx(r,{value:"angular",children:"Angular"}),e.jsx(r,{value:"svelte",children:"Svelte"})]}),e.jsxs(s,{textStyle:"mono.xs",children:["Selected: ",n.join(", ")||"None"]})]})},y={render:()=>e.jsx(Ye,{})},ir=()=>{const[n,t]=l.useState(["docs"]);return e.jsxs(i,{flexDir:"column",gap:"12",children:[e.jsx(s,{textStyle:"mono.md",children:"Filter by category:"}),e.jsxs(c,{type:"multi",value:n,onChange:o=>t(o),label:"Category filter",children:[e.jsx(r,{value:"docs",iconBefore:{name:"file"},children:"Documents"}),e.jsx(r,{value:"images",iconBefore:{name:"image"},children:"Images"}),e.jsx(r,{value:"videos",iconBefore:{name:"video"},children:"Videos"}),e.jsx(r,{value:"audio",iconBefore:{name:"broadcast"},children:"Audio"})]}),e.jsxs(s,{textStyle:"mono.xs",children:["Selected: ",n.join(", ")||"None"]})]})},F={render:()=>e.jsx(ir,{})},W={render:()=>e.jsxs(i,{flexDir:"column",gap:"40",children:[e.jsxs(i,{flexDir:"column",gap:"2",children:[e.jsx(s,{textStyle:"mono.md",color:"text",fontWeight:"bold",children:"Single Select (arrow keys navigate & select):"}),e.jsx(He,{})]}),e.jsxs(i,{flexDir:"column",gap:"2",children:[e.jsx(s,{textStyle:"mono.md",color:"text",fontWeight:"bold",children:"Multi Select (tab between, space/enter toggles):"}),e.jsx(Ye,{})]})]})},sr=()=>{const[n,t]=l.useState("option-a"),[o,a]=l.useState("option-a"),[k,E]=l.useState("option-a");return e.jsxs(i,{flexDir:"column",gap:"24",children:[e.jsxs(i,{flexDir:"column",gap:"2",children:[e.jsx(s,{textStyle:"mono.xs",children:"Small"}),e.jsxs(c,{type:"single",size:"sm",value:n,onChange:d=>t(d),label:"Small chip group",children:[e.jsx(r,{value:"option-a",children:"Option A"}),e.jsx(r,{value:"option-b",children:"Option B"}),e.jsx(r,{value:"option-c",children:"Option C"})]})]}),e.jsxs(i,{flexDir:"column",gap:"2",children:[e.jsx(s,{textStyle:"mono.xs",children:"Medium"}),e.jsxs(c,{type:"single",size:"md",value:o,onChange:d=>a(d),label:"Medium chip group",children:[e.jsx(r,{value:"option-a",children:"Option A"}),e.jsx(r,{value:"option-b",children:"Option B"}),e.jsx(r,{value:"option-c",children:"Option C"})]})]}),e.jsxs(i,{flexDir:"column",gap:"2",children:[e.jsx(s,{textStyle:"mono.xs",children:"Large"}),e.jsxs(c,{type:"single",size:"lg",value:k,onChange:d=>E(d),label:"Large chip group",children:[e.jsx(r,{value:"option-a",children:"Option A"}),e.jsx(r,{value:"option-b",children:"Option B"}),e.jsx(r,{value:"option-c",children:"Option C"})]})]})]})},I={render:()=>e.jsx(sr,{})},nr=()=>{const[n,t]=l.useState("assignee");return e.jsxs(L,{w:"full",h:"full",position:"relative",placeContent:"center",alignItems:"center",gap:"16",children:[e.jsxs(c,{type:"single",size:{base:"lg",xs:"md",sm:"sm"},value:n,onChange:o=>t(o),label:"Responsive chip group",children:[e.jsx(r,{value:"assignee",avatarBefore:{name:"John Doe"},children:"Assignee"}),e.jsx(r,{value:"mentions",iconBefore:{name:"hash"},children:"Mentions"}),e.jsx(r,{value:"alerts",badgeAfter:{count:3},children:"Alerts"})]}),e.jsxs(s,{textAlign:"center",textStyle:"mono.sm",_after:{display:"inline",content:{base:'"lg"',xs:'"md"',sm:'"sm"'},color:"text.bold",fontWeight:"bold"},children:["Group size:"," "]}),e.jsx(qe,{position:"fixed",bottom:"16",right:"16"})]})},T={render:()=>e.jsx(nr,{}),parameters:{controls:{disable:!0}}},tr=()=>{const[n,t]=l.useState("active");return e.jsxs(i,{flexDir:"column",gap:"12",children:[e.jsx(s,{textStyle:"mono.md",children:"Individual chips can be disabled within a group:"}),e.jsxs(c,{type:"single",value:n,onChange:o=>t(o),label:"Options with disabled",children:[e.jsx(r,{value:"active",children:"Active"}),e.jsx(r,{value:"pending",children:"Pending"}),e.jsx(r,{value:"unavailable",disabled:!0,children:"Unavailable"}),e.jsx(r,{value:"archived",children:"Archived"})]}),e.jsxs(s,{textStyle:"mono.xs",children:["Selected: ",n]})]})},M={render:()=>e.jsx(tr,{})},or=()=>{const[n,t]=l.useState(["react","typescript"]),o=["React","TypeScript","JavaScript","Vue","Angular","Svelte","Next.js","Remix","Astro","Node.js","Python","Go","Rust","GraphQL","REST","Docker"];return e.jsxs(i,{flexDir:"column",gap:"12",maxW:"md",children:[e.jsx(s,{textStyle:"mono.md",children:"ChipGroup wraps when chips exceed container width:"}),e.jsx(c,{type:"multi",value:n,onChange:a=>t(a),label:"Skills selection",children:o.map(a=>e.jsx(r,{value:a.toLowerCase(),children:a},a.toLowerCase()))}),e.jsxs(s,{textStyle:"mono.xs",children:["Selected: ",n.join(", ")||"None"]})]})},w={render:()=>e.jsx(or,{})};p.__docgenInfo={description:"",methods:[],displayName:"ConditionalBreakpoints"};var G,J,R;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <Chip>Default</Chip>
}`,...(R=(J=h.parameters)==null?void 0:J.docs)==null?void 0:R.source}}};var P,N,O;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(O=(N=x.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var V,_,U;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
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
}`,...(U=(_=p.parameters)==null?void 0:_.docs)==null?void 0:U.source}}};var K,X,Q;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(Q=(X=u.parameters)==null?void 0:X.docs)==null?void 0:Q.source}}};var q,H,Y;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(Y=(H=g.parameters)==null?void 0:H.docs)==null?void 0:Y.source}}};var Z,$,ee;f.parameters={...f.parameters,docs:{...(Z=f.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ee=($=f.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var re,ie,se;C.parameters={...C.parameters,docs:{...(re=C.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(se=(ie=C.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};var ne,te,oe;j.parameters={...j.parameters,docs:{...(ne=j.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(oe=(te=j.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var ae,le,ce;S.parameters={...S.parameters,docs:{...(ae=S.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(ce=(le=S.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var me,de,pe;B.parameters={...B.parameters,docs:{...(me=B.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(pe=(de=B.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var he,xe,ue;b.parameters={...b.parameters,docs:{...(he=b.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(ue=(xe=b.parameters)==null?void 0:xe.docs)==null?void 0:ue.source}}};var ge,fe,Ce;v.parameters={...v.parameters,docs:{...(ge=v.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: () => <DismissableExample />
}`,...(Ce=(fe=v.parameters)==null?void 0:fe.docs)==null?void 0:Ce.source}}};var je,Se,Be;z.parameters={...z.parameters,docs:{...(je=z.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
}`,...(Be=(Se=z.parameters)==null?void 0:Se.docs)==null?void 0:Be.source}}};var be,ve,ze;D.parameters={...D.parameters,docs:{...(be=D.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: () => <SingleSelectExample />
}`,...(ze=(ve=D.parameters)==null?void 0:ve.docs)==null?void 0:ze.source}}};var De,Ae,ye;A.parameters={...A.parameters,docs:{...(De=A.parameters)==null?void 0:De.docs,source:{originalSource:`{
  render: () => <SingleSelectWithBeforeExample />
}`,...(ye=(Ae=A.parameters)==null?void 0:Ae.docs)==null?void 0:ye.source}}};var Fe,We,Ie;y.parameters={...y.parameters,docs:{...(Fe=y.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  render: () => <MultiSelectExample />
}`,...(Ie=(We=y.parameters)==null?void 0:We.docs)==null?void 0:Ie.source}}};var Te,Me,we;F.parameters={...F.parameters,docs:{...(Te=F.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  render: () => <MultiSelectWithBeforeExample />
}`,...(we=(Me=F.parameters)==null?void 0:Me.docs)==null?void 0:we.source}}};var Le,ke,Ee;W.parameters={...W.parameters,docs:{...(Le=W.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(Ee=(ke=W.parameters)==null?void 0:ke.docs)==null?void 0:Ee.source}}};var Ge,Je,Re;I.parameters={...I.parameters,docs:{...(Ge=I.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  render: () => <ChipGroupSizesExample />
}`,...(Re=(Je=I.parameters)==null?void 0:Je.docs)==null?void 0:Re.source}}};var Pe,Ne,Oe;T.parameters={...T.parameters,docs:{...(Pe=T.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  render: () => <ChipGroupResponsiveSizesExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Oe=(Ne=T.parameters)==null?void 0:Ne.docs)==null?void 0:Oe.source}}};var Ve,_e,Ue;M.parameters={...M.parameters,docs:{...(Ve=M.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  render: () => <ChipGroupWithDisabledExample />
}`,...(Ue=(_e=M.parameters)==null?void 0:_e.docs)==null?void 0:Ue.source}}};var Ke,Xe,Qe;w.parameters={...w.parameters,docs:{...(Ke=w.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  render: () => <ChipGroupWrappingExample />
}`,...(Qe=(Xe=w.parameters)==null?void 0:Xe.docs)==null?void 0:Qe.source}}};const Dr=["Default","Sizes","ConditionalBreakpoints","WithBefore","WithAfter","WithBeforeAndAfter","States","Interactive","SizesMatrix","InlineWithText","UseCases","Dismissable","DismissableWithBefore","SingleSelect","SingleSelectWithBefore","MultiSelect","MultiSelectWithBefore","KeyboardNavigation","ChipGroupSizes","ChipGroupResponsiveSizes","ChipGroupWithDisabled","ChipGroupWrapping"];export{T as ChipGroupResponsiveSizes,I as ChipGroupSizes,M as ChipGroupWithDisabled,w as ChipGroupWrapping,p as ConditionalBreakpoints,h as Default,v as Dismissable,z as DismissableWithBefore,B as InlineWithText,j as Interactive,W as KeyboardNavigation,y as MultiSelect,F as MultiSelectWithBefore,D as SingleSelect,A as SingleSelectWithBefore,x as Sizes,S as SizesMatrix,C as States,b as UseCases,g as WithAfter,u as WithBefore,f as WithBeforeAndAfter,Dr as __namedExportsOrder,zr as default};
