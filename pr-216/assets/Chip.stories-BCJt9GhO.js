import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./index-BKyFwriW.js";import{G as f,W as As,F as r,V as Ds}from"./dsComponent-BG2jnRr7.js";import{A as c}from"./Avatar-V8qMY89R.js";import{B as t}from"./Badge-DBgIjuLw.js";import{B as vs}from"./BreakpointIndicator-CC_bqv_X.js";import{I as n}from"./Icon-CrwLKW7B.js";import"./IconConfig-BuieZFlx.js";import{T as i}from"./Text-IAtRPmZy.js";import{C as s}from"./Chip-BAQlpGmU.js";import{C as d}from"./ChipGroup-Dy7RyrAP.js";import"./_commonjsHelpers-CqkleIqs.js";import"./mq.hook-D1974m8s.js";import"./breakpoints-DU_5_Zhy.js";import"./Tag-tl1AJKHB.js";import"./Tooltip-bxPM6yCH.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";import"./Spinner-PLunUSsK.js";import"./FieldContext-D6URyQos.js";import"./useControllableState-ByGfjEIG.js";const m={user1:"https://i.pravatar.cc/150?img=1",user2:"https://i.pravatar.cc/150?img=2"},nn={title:"Components/Chip",component:s,tags:["autodocs"],argTypes:{size:{control:"select",options:["md","sm","lg"],description:"Size variants of chip"},before:{control:!1,description:"Slot to render item before the label"},after:{control:!1,description:"Slot to render item after the label"},disabled:{control:"boolean",description:"Disables the chip interaction"},loading:{control:"boolean",description:"Shows loading state with pulse animation"},deleted:{control:"boolean",description:"Shows deleted state with strikethrough"},dismissable:{control:"boolean",description:"Renders a trailing remove button instead of whole-chip dismiss"},dismissLabel:{control:"text",description:"Accessible label for the trailing remove button"}},args:{children:"Chip Label",size:"md"},parameters:{layout:"centered"}},j={render:()=>e.jsx(s,{children:"Default"})},C={name:"Uncontrolled Group",render:()=>e.jsxs(d,{type:"single",defaultValue:"growth",label:"Plan size",children:[e.jsx(s,{value:"starter",children:"Starter"}),e.jsx(s,{value:"growth",children:"Growth"}),e.jsx(s,{value:"enterprise",children:"Enterprise"})]}),parameters:{controls:{disable:!0}}},b={render:()=>e.jsxs(f,{columns:5,justifyItems:"center",gap:"20",children:[e.jsx(s,{size:"sm",children:"sm Chip"}),e.jsx(s,{size:"sm",before:e.jsx(n,{name:"hash"}),children:"sm Chip"}),e.jsx(s,{size:"sm",after:e.jsx(n,{name:"read-doc"}),children:"sm Chip"}),e.jsx(s,{size:"sm",before:e.jsx(c,{src:m.user1,name:"John Doe"}),children:"sm Chip"}),e.jsx(s,{size:"sm",after:e.jsx(t,{count:3}),children:"sm Chip"}),e.jsx(s,{size:"md",children:"md Chip"}),e.jsx(s,{size:"md",before:e.jsx(n,{name:"hash"}),children:"md Chip"}),e.jsx(s,{size:"md",after:e.jsx(n,{name:"read-doc"}),children:"md Chip"}),e.jsx(s,{size:"md",before:e.jsx(c,{src:m.user1,name:"John Doe"}),children:"md Chip"}),e.jsx(s,{size:"md",after:e.jsx(t,{count:3}),children:"md Chip"}),e.jsx(s,{size:"lg",children:"lg Chip"}),e.jsx(s,{size:"lg",before:e.jsx(n,{name:"hash"}),children:"lg Chip"}),e.jsx(s,{size:"lg",after:e.jsx(n,{name:"read-doc"}),children:"lg Chip"}),e.jsx(s,{size:"lg",before:e.jsx(c,{src:m.user1,name:"John Doe"}),children:"lg Chip"}),e.jsx(s,{size:"lg",after:e.jsx(t,{count:3}),children:"lg Chip"})]})},u=()=>e.jsxs(f,{w:"full",h:"full",position:"relative",placeContent:"center",alignItems:"center",justifyItems:"center",gap:"16",children:[e.jsxs(As,{justifyContent:"center",children:[e.jsx(s,{size:{base:"xl",xs:"lg",sm:"md",md:"sm"},before:e.jsx(n,{name:"hash"}),children:"Chip"}),e.jsx(s,{size:{base:"xl",xs:"lg",sm:"md",md:"sm"},before:e.jsx(c,{src:m.user1,name:"John Doe"}),children:"Chip"}),e.jsx(s,{size:{base:"xl",xs:"lg",sm:"md",md:"sm"},after:e.jsx(t,{count:3}),children:"Chip"})]}),e.jsxs(i,{textAlign:"center",textStyle:"mono.sm",_after:{display:"inline",content:{base:'"xl"',xs:'"lg"',sm:'"md"',md:'"sm"'},color:"text.bold",fontWeight:"bold"},children:["Size:"," "]}),e.jsx(vs,{})]}),S={render:()=>e.jsxs(r,{gap:"4",flexDir:"column",alignItems:"center",children:[e.jsxs(r,{gap:"4",alignItems:"center",children:[e.jsx(s,{size:"sm",before:e.jsx(t,{count:2,variant:"success"}),children:"Small"}),e.jsx(s,{before:e.jsx(t,{count:30,variant:"neutral"}),children:"Medium"}),e.jsx(s,{size:"lg",before:e.jsx(t,{count:100}),children:"Large"}),e.jsx(s,{size:"xl",before:e.jsx(t,{count:100}),children:"XLarge"})]}),e.jsxs(r,{gap:"4",alignItems:"center",children:[e.jsx(s,{size:"sm",before:e.jsx(c,{src:m.user1,name:"John Doe"}),children:"Small"}),e.jsx(s,{before:e.jsx(c,{src:m.user1,name:"John Doe"}),children:"Medium"}),e.jsx(s,{size:"lg",before:e.jsx(c,{src:m.user1,name:"John Doe"}),children:"Large"}),e.jsx(s,{size:"xl",before:e.jsx(c,{src:m.user1,name:"John Doe"}),children:"XLarge"})]}),e.jsxs(r,{gap:"4",alignItems:"center",children:[e.jsx(s,{size:"sm",before:e.jsx(n,{name:"file"}),children:"Small"}),e.jsx(s,{before:e.jsx(n,{name:"file"}),children:"Medium"}),e.jsx(s,{size:"lg",before:e.jsx(n,{name:"file"}),children:"Large"}),e.jsx(s,{size:"xl",before:e.jsx(n,{name:"file"}),children:"XLarge"})]})]})},D={render:()=>e.jsxs(r,{gap:"4",flexDir:"column",alignItems:"center",children:[e.jsxs(r,{gap:"4",alignItems:"center",children:[e.jsx(s,{size:"sm",after:e.jsx(t,{count:2,variant:"success"}),children:"Small"}),e.jsx(s,{after:e.jsx(t,{count:30,variant:"neutral"}),children:"Medium"}),e.jsx(s,{size:"lg",after:e.jsx(t,{count:100}),children:"Large"}),e.jsx(s,{size:"xl",after:e.jsx(t,{count:100}),children:"XLarge"})]}),e.jsxs(r,{gap:"4",alignItems:"center",children:[e.jsx(s,{size:"sm",after:e.jsx(c,{src:m.user1,name:"John Doe"}),children:"Small"}),e.jsx(s,{after:e.jsx(c,{src:m.user1,name:"John Doe"}),children:"Medium"}),e.jsx(s,{size:"lg",after:e.jsx(c,{src:m.user1,name:"John Doe"}),children:"Large"}),e.jsx(s,{size:"xl",after:e.jsx(c,{src:m.user1,name:"John Doe"}),children:"XLarge"})]}),e.jsxs(r,{gap:"4",alignItems:"center",children:[e.jsx(s,{size:"sm",after:e.jsx(n,{name:"file"}),children:"Small"}),e.jsx(s,{after:e.jsx(n,{name:"file"}),children:"Medium"}),e.jsx(s,{size:"lg",after:e.jsx(n,{name:"file"}),children:"Large"}),e.jsx(s,{size:"xl",after:e.jsx(n,{name:"file"}),children:"XLarge"})]})]})},v={render:()=>e.jsxs(r,{gap:"4",alignItems:"center",children:[e.jsx(s,{size:"sm",before:e.jsx(n,{name:"user"}),after:e.jsx(t,{count:2}),children:"Small"}),e.jsx(s,{before:e.jsx(n,{name:"user"}),after:e.jsx(t,{count:2}),children:"Medium"}),e.jsx(s,{size:"lg",before:e.jsx(n,{name:"user"}),after:e.jsx(t,{count:2}),children:"Large"}),e.jsx(s,{size:"xl",before:e.jsx(n,{name:"user"}),after:e.jsx(t,{count:2}),children:"XLarge"})]})},I={render:()=>e.jsxs(r,{gap:"4",flexDir:"column",alignItems:"center",children:[e.jsxs(r,{gap:"4",alignItems:"center",children:[e.jsx(s,{before:e.jsx(n,{name:"hash"}),children:"Icon Slot"}),e.jsx(s,{after:e.jsx(t,{count:3,variant:"success"}),children:"Badge Slot"}),e.jsx(s,{before:e.jsx(c,{src:m.user2,name:"Jane Doe"}),after:e.jsx(n,{name:"x"}),children:"Avatar Slot"})]}),e.jsxs(r,{gap:"4",alignItems:"center",children:[e.jsx(s,{before:e.jsx(n,{name:"hash"}),children:"Alias Before"}),e.jsx(s,{after:e.jsx(t,{count:4,variant:"warning"}),children:"Alias After"})]})]})},z={render:()=>e.jsxs(f,{gridTemplateColumns:"auto auto",gap:"24",children:[e.jsx(i,{textStyle:"mono.xs",children:"Default:"}),e.jsx(s,{before:e.jsx(n,{name:"file"}),children:"Interactive"}),e.jsx(i,{textStyle:"mono.xs",children:"Disabled:"}),e.jsx(s,{disabled:!0,before:e.jsx(n,{name:"file"}),children:"Disabled"}),e.jsx(i,{textStyle:"mono.xs",children:"Loading:"}),e.jsx(s,{loading:!0,before:e.jsx(n,{name:"file"}),children:"Loading..."}),e.jsx(i,{textStyle:"mono.xs",children:"Deleted:"}),e.jsx(s,{deleted:!0,before:e.jsx(n,{name:"file"}),children:"Deleted Item"})]})},y={render:()=>e.jsxs(r,{flexDir:"column",gap:"12",children:[e.jsx(i,{textStyle:"mono.xs",children:"Chips can be interactive buttons:"}),e.jsxs(r,{gap:"2",children:[e.jsx(s,{onClick:()=>alert("Clicked!"),children:"Click Me"}),e.jsx(s,{before:e.jsx(n,{name:"plus"}),onClick:()=>alert("Add clicked!"),children:"Add Item"}),e.jsx(s,{after:e.jsx(n,{name:"x"}),onClick:()=>alert("Remove clicked!"),children:"Remove"})]})]})},F={render:()=>e.jsxs(r,{flexDir:"column",gap:"12",children:[e.jsxs(r,{flexDir:"column",gap:"2",children:[e.jsx(i,{textStyle:"mono.xs",children:"No Content Before/After"}),e.jsxs(r,{gap:"4",alignItems:"center",children:[e.jsx(s,{size:"sm",children:"Small"}),e.jsx(s,{children:"Medium"}),e.jsx(s,{size:"lg",children:"Large"}),e.jsx(s,{size:"xl",children:"Extra Large"})]})]}),e.jsxs(r,{flexDir:"column",gap:"2",children:[e.jsx(i,{textStyle:"mono.xs",children:"With Before"}),e.jsxs(r,{gap:"4",alignItems:"center",children:[e.jsx(s,{size:"sm",before:e.jsx(n,{name:"file"}),children:"Small"}),e.jsx(s,{before:e.jsx(n,{name:"file"}),children:"Medium"}),e.jsx(s,{size:"lg",before:e.jsx(n,{name:"file"}),children:"Large"}),e.jsx(s,{size:"xl",before:e.jsx(n,{name:"file"}),children:"Extra Large"})]})]}),e.jsxs(r,{flexDir:"column",gap:"2",children:[e.jsx(i,{textStyle:"mono.xs",children:"With After"}),e.jsxs(r,{gap:"4",alignItems:"center",children:[e.jsx(s,{size:"sm",after:e.jsx(n,{name:"x"}),children:"Small"}),e.jsx(s,{after:e.jsx(n,{name:"x"}),children:"Medium"}),e.jsx(s,{size:"lg",after:e.jsx(n,{name:"x"}),children:"Large"}),e.jsx(s,{size:"xl",after:e.jsx(n,{name:"x"}),children:"Extra Large"})]})]}),e.jsxs(r,{flexDir:"column",gap:"2",children:[e.jsx(i,{textStyle:"mono.xs",children:"With Before and After"}),e.jsxs(r,{gap:"4",alignItems:"center",children:[e.jsx(s,{size:"sm",before:e.jsx(n,{name:"user"}),after:e.jsx(n,{name:"x"}),children:"Small"}),e.jsx(s,{before:e.jsx(n,{name:"user"}),after:e.jsx(n,{name:"x"}),children:"Medium"}),e.jsx(s,{size:"lg",before:e.jsx(n,{name:"user"}),after:e.jsx(n,{name:"x"}),children:"Large"}),e.jsx(s,{size:"xl",before:e.jsx(n,{name:"user"}),after:e.jsx(n,{name:"x"}),children:"Extra Large"})]})]})]})},A={render:()=>e.jsxs(Ds,{maxW:"lg",alignItems:"stretch",gap:"8",children:[e.jsxs(i,{children:["Chips can appear inline within text, like tagging"," ",e.jsx(s,{before:e.jsx(n,{name:"user"}),children:"John Doe"})," in a conversation. referencing ",e.jsx(s,{before:e.jsx(n,{name:"file"}),children:"Project Plan"})," in your notes."]}),e.jsxs(i,{children:["Chips with more than two items collapse to a count and should stay on the same baseline as plain chips: ",e.jsx(s,{children:"Design"})," ",e.jsx(s,{children:["Design","Engineering","Product"]})," and"," ",e.jsx(s,{before:e.jsx(n,{name:"user"}),children:["Ann","Bob","Cy","Di"]})," ",e.jsx(s,{children:"Design, Engineering"})," sit in one line of text."]})]})},L={render:()=>e.jsxs(r,{flexDir:"column",gap:"20",children:[e.jsxs(r,{flexDir:"column",gap:"2",children:[e.jsx(i,{textStyle:"mono.xs",children:"Filter Tags"}),e.jsxs(r,{gap:"4",flexWrap:"wrap",children:[e.jsx(s,{after:e.jsx(n,{name:"x"}),children:"React"}),e.jsx(s,{after:e.jsx(n,{name:"x"}),children:"TypeScript"}),e.jsx(s,{after:e.jsx(n,{name:"x"}),children:"Panda CSS"}),e.jsx(s,{before:e.jsx(n,{name:"plus"}),children:"Add Filter"})]})]}),e.jsxs(r,{flexDir:"column",gap:"2",children:[e.jsx(i,{textStyle:"mono.xs",children:"Categories"}),e.jsxs(r,{gap:"4",flexWrap:"wrap",children:[e.jsx(s,{before:e.jsx(n,{name:"file"}),children:"Documentation"}),e.jsx(s,{before:e.jsx(n,{name:"calendar"}),children:"Events"}),e.jsx(s,{before:e.jsx(n,{name:"user"}),children:"People"})]})]}),e.jsxs(r,{flexDir:"column",gap:"2",children:[e.jsx(i,{textStyle:"mono.xs",children:"Actions"}),e.jsxs(r,{gap:"4",flexWrap:"wrap",children:[e.jsx(s,{before:e.jsx(n,{name:"plus"}),children:"New Item"}),e.jsx(s,{before:e.jsx(n,{name:"check"}),children:"Approve"}),e.jsx(s,{deleted:!0,children:"Archived"})]})]})]})},Ls=()=>{const[a,l]=p.useState(["React","TypeScript","Panda CSS","Vite"]),o=x=>{l(N=>N.filter(_=>_!==x))};return e.jsxs(r,{flexDir:"column",gap:"12",children:[e.jsx(i,{textStyle:"mono.xs",children:"Click the X to dismiss tags:"}),e.jsx(r,{gap:"4",flexWrap:"wrap",children:a.map(x=>e.jsx(s,{dismissable:!0,onDismiss:()=>o(x),children:x},x))}),a.length===0&&e.jsx(i,{color:"text.subtlest",children:"All tags dismissed!"})]})},T={render:()=>e.jsxs(r,{gap:"4",alignItems:"center",children:[e.jsx(s,{children:["Design","Engineering"]}),e.jsx(s,{children:["Design","Engineering","Product"]}),e.jsx(s,{dismissable:!0,onDismiss:()=>{},children:["Design","Engineering","Product","Support","Sales"]})]})},W={render:()=>e.jsx(Ls,{})},B={render:()=>e.jsxs(r,{gap:"4",children:[e.jsx(s,{dismissable:!0,before:e.jsx(n,{name:"file"}),onDismiss:()=>{},children:"Document"}),e.jsx(s,{dismissable:!0,before:e.jsx(n,{name:"user"}),onDismiss:()=>{},children:"Person"}),e.jsx(s,{dismissable:!0,before:e.jsx(n,{name:"calendar"}),onDismiss:()=>{},children:"Event"})]})},w={render:()=>e.jsxs(r,{flexDir:"column",gap:"12",children:[e.jsx(i,{textStyle:"mono.xs",children:"Body clicks stay on the chip action. The trailing X is the only dismiss target."}),e.jsxs(r,{gap:"4",flexWrap:"wrap",children:[e.jsx(s,{dismissable:!0,before:e.jsx(n,{name:"file"}),onClick:()=>alert("Opened document"),onDismiss:()=>alert("Removed document"),children:"Document"}),e.jsx(s,{dismissable:!0,before:e.jsx(n,{name:"user"}),onClick:()=>alert("Opened person"),onDismiss:()=>alert("Removed person"),children:"Person"})]})]})},E={render:()=>e.jsxs(f,{gridTemplateColumns:"auto auto",gap:"24",children:[e.jsx(i,{textStyle:"mono.xs",children:"Default:"}),e.jsx(s,{dismissable:!0,onDismiss:()=>{},children:"Default"}),e.jsx(i,{textStyle:"mono.xs",children:"Disabled:"}),e.jsx(s,{dismissable:!0,disabled:!0,onDismiss:()=>{},children:"Disabled"}),e.jsx(i,{textStyle:"mono.xs",children:"Loading:"}),e.jsx(s,{dismissable:!0,loading:!0,onDismiss:()=>{},children:"Loading..."}),e.jsx(i,{textStyle:"mono.xs",children:"Deleted:"}),e.jsx(s,{dismissable:!0,deleted:!0,onDismiss:()=>{},children:"Deleted Item"})]})},M={render:()=>e.jsxs(Ds,{gap:"12",children:[e.jsx(s,{dismissable:!0,dismissLabel:"Remove assignee John Doe",before:e.jsx(c,{src:m.user1,name:"John Doe"}),onDismiss:()=>{},children:"John Doe"}),e.jsx(i,{textStyle:"mono.xs",children:'Dismiss button: aria-label="Remove assignee John Doe"'})]})},Is=()=>{const[a,l]=p.useState("");return e.jsxs(r,{flexDir:"column",gap:"12",children:[e.jsx(i,{textStyle:"mono.md",children:"Select one size:"}),e.jsxs(d,{type:"single",value:a,onChange:o=>l(o),label:"Size selection",children:[e.jsx(s,{value:"sm",children:"Small"}),e.jsx(s,{value:"md",children:"Medium"}),e.jsx(s,{value:"lg",children:"Large"}),e.jsx(s,{value:"xl",children:"X-Large"})]}),e.jsxs(i,{textStyle:"mono.xs",children:["Selected: ",a]})]})},G={render:()=>e.jsx(Is,{})},Ts=()=>{const[a,l]=p.useState("grid");return e.jsxs(r,{flexDir:"column",gap:"12",children:[e.jsx(i,{textStyle:"mono.md",children:"Select a view:"}),e.jsxs(d,{type:"single",value:a,onChange:o=>l(o),label:"View selection",children:[e.jsx(s,{value:"list",before:e.jsx(n,{name:"menu"}),children:"List"}),e.jsx(s,{value:"grid",before:e.jsx(n,{name:"view-grid"}),children:"Grid"}),e.jsx(s,{value:"calendar",before:e.jsx(n,{name:"calendar"}),children:"Calendar"})]}),e.jsxs(i,{textStyle:"mono.xs",children:["Selected: ",a]})]})},k={render:()=>e.jsx(Ts,{})},zs=()=>{const[a,l]=p.useState(["react","typescript"]);return e.jsxs(r,{flexDir:"column",gap:"12",children:[e.jsx(i,{textStyle:"mono.md",children:"Select your skills (check icon appears when selected):"}),e.jsxs(d,{type:"multi",value:a,onChange:o=>l(o),label:"Skills selection",children:[e.jsx(s,{value:"react",children:"React"}),e.jsx(s,{value:"typescript",children:"TypeScript"}),e.jsx(s,{value:"vue",children:"Vue"}),e.jsx(s,{value:"angular",children:"Angular"}),e.jsx(s,{value:"svelte",children:"Svelte"})]}),e.jsxs(i,{textStyle:"mono.xs",children:["Selected: ",a.join(", ")||"None"]})]})},J={render:()=>e.jsx(zs,{})},Ws=()=>{const[a,l]=p.useState(["docs"]);return e.jsxs(r,{flexDir:"column",gap:"12",children:[e.jsx(i,{textStyle:"mono.md",children:"Filter by category:"}),e.jsxs(d,{type:"multi",value:a,onChange:o=>l(o),label:"Category filter",children:[e.jsx(s,{value:"docs",before:e.jsx(n,{name:"file"}),children:"Documents"}),e.jsx(s,{value:"images",before:e.jsx(n,{name:"image"}),children:"Images"}),e.jsx(s,{value:"videos",before:e.jsx(n,{name:"video"}),children:"Videos"}),e.jsx(s,{value:"audio",before:e.jsx(n,{name:"broadcast"}),children:"Audio"})]}),e.jsxs(i,{textStyle:"mono.xs",children:["Selected: ",a.join(", ")||"None"]})]})},R={render:()=>e.jsx(Ws,{})},P={render:()=>e.jsxs(r,{flexDir:"column",gap:"40",children:[e.jsxs(r,{flexDir:"column",gap:"2",children:[e.jsx(i,{textStyle:"mono.md",color:"text",fontWeight:"bold",children:"Single Select (arrow keys navigate & select):"}),e.jsx(Is,{})]}),e.jsxs(r,{flexDir:"column",gap:"2",children:[e.jsx(i,{textStyle:"mono.md",color:"text",fontWeight:"bold",children:"Multi Select (tab between, space/enter toggles):"}),e.jsx(zs,{})]})]})},Bs=()=>{const[a,l]=p.useState("option-a"),[o,x]=p.useState("option-a"),[N,_]=p.useState("option-a"),[ys,Fs]=p.useState("option-a");return e.jsxs(r,{flexDir:"column",gap:"24",children:[e.jsxs(r,{flexDir:"column",gap:"2",children:[e.jsx(i,{textStyle:"mono.xs",children:"Small"}),e.jsxs(d,{type:"single",size:"sm",value:a,onChange:h=>l(h),label:"Small chip group",children:[e.jsx(s,{value:"option-a",children:"Option A"}),e.jsx(s,{value:"option-b",children:"Option B"}),e.jsx(s,{value:"option-c",children:"Option C"})]})]}),e.jsxs(r,{flexDir:"column",gap:"2",children:[e.jsx(i,{textStyle:"mono.xs",children:"Medium"}),e.jsxs(d,{type:"single",size:"md",value:o,onChange:h=>x(h),label:"Medium chip group",children:[e.jsx(s,{value:"option-a",children:"Option A"}),e.jsx(s,{value:"option-b",children:"Option B"}),e.jsx(s,{value:"option-c",children:"Option C"})]})]}),e.jsxs(r,{flexDir:"column",gap:"2",children:[e.jsx(i,{textStyle:"mono.xs",children:"Large"}),e.jsxs(d,{type:"single",size:"lg",value:N,onChange:h=>_(h),label:"Large chip group",children:[e.jsx(s,{value:"option-a",children:"Option A"}),e.jsx(s,{value:"option-b",children:"Option B"}),e.jsx(s,{value:"option-c",children:"Option C"})]})]}),e.jsxs(r,{flexDir:"column",gap:"2",children:[e.jsx(i,{textStyle:"mono.xs",children:"Extra Large"}),e.jsxs(d,{type:"single",size:"xl",value:ys,onChange:h=>Fs(h),label:"Extra Large chip group",children:[e.jsx(s,{value:"option-a",children:"Option A"}),e.jsx(s,{value:"option-b",children:"Option B"}),e.jsx(s,{value:"option-c",children:"Option C"})]})]})]})},V={render:()=>e.jsx(Bs,{})},g=()=>{const[a,l]=p.useState("assignee");return e.jsxs(f,{w:"full",h:"full",position:"relative",placeContent:"center",alignItems:"center",justifyItems:"center",gap:"16",children:[e.jsxs(d,{type:"single",size:{base:"xl",xs:"lg",sm:"md",md:"sm"},value:a,onChange:o=>l(o),label:"Responsive chip group",children:[e.jsx(s,{value:"assignee",before:e.jsx(c,{name:"John Doe"}),children:"Assignee"}),e.jsx(s,{value:"mentions",before:e.jsx(n,{name:"hash"}),children:"Mentions"}),e.jsx(s,{value:"alerts",after:e.jsx(t,{count:3}),children:"Alerts"})]}),e.jsxs(i,{textAlign:"center",textStyle:"mono.sm",_after:{display:"inline",content:{base:'"xl"',xs:'"lg"',sm:'"md"',md:'"sm"'},color:"text.bold",fontWeight:"bold"},children:["Group size:"," "]}),e.jsx(vs,{})]})},ws=()=>{const[a,l]=p.useState("active");return e.jsxs(r,{flexDir:"column",gap:"12",children:[e.jsx(i,{textStyle:"mono.md",children:"Individual chips can be disabled within a group:"}),e.jsxs(d,{type:"single",value:a,onChange:o=>l(o),label:"Options with disabled",children:[e.jsx(s,{value:"active",children:"Active"}),e.jsx(s,{value:"pending",children:"Pending"}),e.jsx(s,{value:"unavailable",disabled:!0,children:"Unavailable"}),e.jsx(s,{value:"archived",children:"Archived"})]}),e.jsxs(i,{textStyle:"mono.xs",children:["Selected: ",a]})]})},X={render:()=>e.jsx(ws,{})},Es=()=>{const[a,l]=p.useState(["react","typescript"]),o=["React","TypeScript","JavaScript","Vue","Angular","Svelte","Next.js","Remix","Astro","Node.js","Python","Go","Rust","GraphQL","REST","Docker"];return e.jsxs(r,{flexDir:"column",gap:"12",maxW:"md",children:[e.jsx(i,{textStyle:"mono.md",children:"ChipGroup wraps when chips exceed container width:"}),e.jsx(d,{type:"multi",value:a,onChange:x=>l(x),label:"Skills selection",children:o.map(x=>e.jsx(s,{value:x.toLowerCase(),children:x},x.toLowerCase()))}),e.jsxs(i,{textStyle:"mono.xs",children:["Selected: ",a.join(", ")||"None"]})]})},O={render:()=>e.jsx(Es,{})};u.__docgenInfo={description:"",methods:[],displayName:"ConditionalBreakpoints"};g.__docgenInfo={description:"",methods:[],displayName:"ChipGroupResponsiveSizes"};var U,K,Q;j.parameters={...j.parameters,docs:{...(U=j.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <Chip>Default</Chip>
}`,...(Q=(K=j.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var q,H,Y;C.parameters={...C.parameters,docs:{...(q=C.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'Uncontrolled Group',
  render: () => <ChipGroup type="single" defaultValue="growth" label="Plan size">
      <Chip value="starter">Starter</Chip>
      <Chip value="growth">Growth</Chip>
      <Chip value="enterprise">Enterprise</Chip>
    </ChipGroup>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Y=(H=C.parameters)==null?void 0:H.docs)==null?void 0:Y.source}}};var Z,$,ee;b.parameters={...b.parameters,docs:{...(Z=b.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <Grid columns={5} justifyItems="center" gap="20">
      <Chip size="sm">sm Chip</Chip>
      <Chip size="sm" before={<Icon name="hash" />}>
        sm Chip
      </Chip>
      <Chip size="sm" after={<Icon name="read-doc" />}>
        sm Chip
      </Chip>
      <Chip size="sm" before={<Avatar src={sampleImages.user1} name="John Doe" />}>
        sm Chip
      </Chip>
      <Chip size="sm" after={<Badge count={3} />}>
        sm Chip
      </Chip>
      <Chip size="md">md Chip</Chip>
      <Chip size="md" before={<Icon name="hash" />}>
        md Chip
      </Chip>
      <Chip size="md" after={<Icon name="read-doc" />}>
        md Chip
      </Chip>
      <Chip size="md" before={<Avatar src={sampleImages.user1} name="John Doe" />}>
        md Chip
      </Chip>
      <Chip size="md" after={<Badge count={3} />}>
        md Chip
      </Chip>
      <Chip size="lg">lg Chip</Chip>
      <Chip size="lg" before={<Icon name="hash" />}>
        lg Chip
      </Chip>
      <Chip size="lg" after={<Icon name="read-doc" />}>
        lg Chip
      </Chip>
      <Chip size="lg" before={<Avatar src={sampleImages.user1} name="John Doe" />}>
        lg Chip
      </Chip>
      <Chip size="lg" after={<Badge count={3} />}>
        lg Chip
      </Chip>
    </Grid>
}`,...(ee=($=b.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var se,ne,re;u.parameters={...u.parameters,docs:{...(se=u.parameters)==null?void 0:se.docs,source:{originalSource:`() => {
  return <Grid w="full" h="full" position="relative" placeContent="center" alignItems="center" justifyItems="center" gap="16">
      <Wrap justifyContent="center">
        <Chip size={{
        base: 'xl',
        xs: 'lg',
        sm: 'md',
        md: 'sm'
      }} before={<Icon name="hash" />}>
          Chip
        </Chip>
        <Chip size={{
        base: 'xl',
        xs: 'lg',
        sm: 'md',
        md: 'sm'
      }} before={<Avatar src={sampleImages.user1} name="John Doe" />}>
          Chip
        </Chip>
        <Chip size={{
        base: 'xl',
        xs: 'lg',
        sm: 'md',
        md: 'sm'
      }} after={<Badge count={3} />}>
          Chip
        </Chip>
      </Wrap>
      <Text textAlign="center" textStyle="mono.sm" _after={{
      display: 'inline',
      content: {
        base: '"xl"',
        xs: '"lg"',
        sm: '"md"',
        md: '"sm"'
      },
      color: 'text.bold',
      fontWeight: 'bold'
    }}>
        Size:{' '}
      </Text>
      <BreakpointIndicator />
    </Grid>;
}`,...(re=(ne=u.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var ie,ae,te;S.parameters={...S.parameters,docs:{...(ie=S.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => <Flex gap="4" flexDir="column" alignItems="center">
      <Flex gap="4" alignItems="center">
        <Chip size="sm" before={<Badge count={2} variant="success" />}>
          Small
        </Chip>
        <Chip before={<Badge count={30} variant="neutral" />}>Medium</Chip>
        <Chip size="lg" before={<Badge count={100} />}>
          Large
        </Chip>
        <Chip size="xl" before={<Badge count={100} />}>
          XLarge
        </Chip>
      </Flex>
      <Flex gap="4" alignItems="center">
        <Chip size="sm" before={<Avatar src={sampleImages.user1} name="John Doe" />}>
          Small
        </Chip>
        <Chip before={<Avatar src={sampleImages.user1} name="John Doe" />}>
          Medium
        </Chip>
        <Chip size="lg" before={<Avatar src={sampleImages.user1} name="John Doe" />}>
          Large
        </Chip>
        <Chip size="xl" before={<Avatar src={sampleImages.user1} name="John Doe" />}>
          XLarge
        </Chip>
      </Flex>
      <Flex gap="4" alignItems="center">
        <Chip size="sm" before={<Icon name="file" />}>
          Small
        </Chip>
        <Chip before={<Icon name="file" />}>Medium</Chip>
        <Chip size="lg" before={<Icon name="file" />}>
          Large
        </Chip>
        <Chip size="xl" before={<Icon name="file" />}>
          XLarge
        </Chip>
      </Flex>
    </Flex>
}`,...(te=(ae=S.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var le,oe,ce;D.parameters={...D.parameters,docs:{...(le=D.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => <Flex gap="4" flexDir="column" alignItems="center">
      <Flex gap="4" alignItems="center">
        <Chip size="sm" after={<Badge count={2} variant="success" />}>
          Small
        </Chip>
        <Chip after={<Badge count={30} variant="neutral" />}>Medium</Chip>
        <Chip size="lg" after={<Badge count={100} />}>
          Large
        </Chip>
        <Chip size="xl" after={<Badge count={100} />}>
          XLarge
        </Chip>
      </Flex>
      <Flex gap="4" alignItems="center">
        <Chip size="sm" after={<Avatar src={sampleImages.user1} name="John Doe" />}>
          Small
        </Chip>
        <Chip after={<Avatar src={sampleImages.user1} name="John Doe" />}>
          Medium
        </Chip>
        <Chip size="lg" after={<Avatar src={sampleImages.user1} name="John Doe" />}>
          Large
        </Chip>
        <Chip size="xl" after={<Avatar src={sampleImages.user1} name="John Doe" />}>
          XLarge
        </Chip>
      </Flex>
      <Flex gap="4" alignItems="center">
        <Chip size="sm" after={<Icon name="file" />}>
          Small
        </Chip>
        <Chip after={<Icon name="file" />}>Medium</Chip>
        <Chip size="lg" after={<Icon name="file" />}>
          Large
        </Chip>
        <Chip size="xl" after={<Icon name="file" />}>
          XLarge
        </Chip>
      </Flex>
    </Flex>
}`,...(ce=(oe=D.parameters)==null?void 0:oe.docs)==null?void 0:ce.source}}};var me,xe,pe;v.parameters={...v.parameters,docs:{...(me=v.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => <Flex gap="4" alignItems="center">
      <Chip size="sm" before={<Icon name="user" />} after={<Badge count={2} />}>
        Small
      </Chip>
      <Chip before={<Icon name="user" />} after={<Badge count={2} />}>
        Medium
      </Chip>
      <Chip size="lg" before={<Icon name="user" />} after={<Badge count={2} />}>
        Large
      </Chip>
      <Chip size="xl" before={<Icon name="user" />} after={<Badge count={2} />}>
        XLarge
      </Chip>
    </Flex>
}`,...(pe=(xe=v.parameters)==null?void 0:xe.docs)==null?void 0:pe.source}}};var de,he,ue;I.parameters={...I.parameters,docs:{...(de=I.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => <Flex gap="4" flexDir="column" alignItems="center">
      <Flex gap="4" alignItems="center">
        <Chip before={<Icon name="hash" />}>Icon Slot</Chip>
        <Chip after={<Badge count={3} variant="success" />}>Badge Slot</Chip>
        <Chip before={<Avatar src={sampleImages.user2} name="Jane Doe" />} after={<Icon name="x" />}>
          Avatar Slot
        </Chip>
      </Flex>
      <Flex gap="4" alignItems="center">
        <Chip before={<Icon name="hash" />}>Alias Before</Chip>
        <Chip after={<Badge count={4} variant="warning" />}>Alias After</Chip>
      </Flex>
    </Flex>
}`,...(ue=(he=I.parameters)==null?void 0:he.docs)==null?void 0:ue.source}}};var ge,fe,je;z.parameters={...z.parameters,docs:{...(ge=z.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: () => <Grid gridTemplateColumns="auto auto" gap="24">
      <Text textStyle="mono.xs">Default:</Text>
      <Chip before={<Icon name="file" />}>Interactive</Chip>
      <Text textStyle="mono.xs">Disabled:</Text>
      <Chip disabled before={<Icon name="file" />}>
        Disabled
      </Chip>
      <Text textStyle="mono.xs">Loading:</Text>
      <Chip loading before={<Icon name="file" />}>
        Loading...
      </Chip>
      <Text textStyle="mono.xs">Deleted:</Text>
      <Chip deleted before={<Icon name="file" />}>
        Deleted Item
      </Chip>
    </Grid>
}`,...(je=(fe=z.parameters)==null?void 0:fe.docs)==null?void 0:je.source}}};var Ce,be,Se;y.parameters={...y.parameters,docs:{...(Ce=y.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  render: () => <Flex flexDir="column" gap="12">
      <Text textStyle="mono.xs">Chips can be interactive buttons:</Text>
      <Flex gap="2">
        <Chip onClick={() => alert('Clicked!')}>Click Me</Chip>
        <Chip before={<Icon name="plus" />} onClick={() => alert('Add clicked!')}>
          Add Item
        </Chip>
        <Chip after={<Icon name="x" />} onClick={() => alert('Remove clicked!')}>
          Remove
        </Chip>
      </Flex>
    </Flex>
}`,...(Se=(be=y.parameters)==null?void 0:be.docs)==null?void 0:Se.source}}};var De,ve,Ie;F.parameters={...F.parameters,docs:{...(De=F.parameters)==null?void 0:De.docs,source:{originalSource:`{
  render: () => <Flex flexDir="column" gap="12">
      <Flex flexDir="column" gap="2">
        <Text textStyle="mono.xs">No Content Before/After</Text>
        <Flex gap="4" alignItems="center">
          <Chip size="sm">Small</Chip>
          <Chip>Medium</Chip>
          <Chip size="lg">Large</Chip>
          <Chip size="xl">Extra Large</Chip>
        </Flex>
      </Flex>
      <Flex flexDir="column" gap="2">
        <Text textStyle="mono.xs">With Before</Text>
        <Flex gap="4" alignItems="center">
          <Chip size="sm" before={<Icon name="file" />}>
            Small
          </Chip>
          <Chip before={<Icon name="file" />}>Medium</Chip>
          <Chip size="lg" before={<Icon name="file" />}>
            Large
          </Chip>
          <Chip size="xl" before={<Icon name="file" />}>
            Extra Large
          </Chip>
        </Flex>
      </Flex>
      <Flex flexDir="column" gap="2">
        <Text textStyle="mono.xs">With After</Text>
        <Flex gap="4" alignItems="center">
          <Chip size="sm" after={<Icon name="x" />}>
            Small
          </Chip>
          <Chip after={<Icon name="x" />}>Medium</Chip>
          <Chip size="lg" after={<Icon name="x" />}>
            Large
          </Chip>
          <Chip size="xl" after={<Icon name="x" />}>
            Extra Large
          </Chip>
        </Flex>
      </Flex>
      <Flex flexDir="column" gap="2">
        <Text textStyle="mono.xs">With Before and After</Text>
        <Flex gap="4" alignItems="center">
          <Chip size="sm" before={<Icon name="user" />} after={<Icon name="x" />}>
            Small
          </Chip>
          <Chip before={<Icon name="user" />} after={<Icon name="x" />}>
            Medium
          </Chip>
          <Chip size="lg" before={<Icon name="user" />} after={<Icon name="x" />}>
            Large
          </Chip>
          <Chip size="xl" before={<Icon name="user" />} after={<Icon name="x" />}>
            Extra Large
          </Chip>
        </Flex>
      </Flex>
    </Flex>
}`,...(Ie=(ve=F.parameters)==null?void 0:ve.docs)==null?void 0:Ie.source}}};var ze,ye,Fe;A.parameters={...A.parameters,docs:{...(ze=A.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  render: () => <VStack maxW="lg" alignItems="stretch" gap="8">
      <Text>
        Chips can appear inline within text, like tagging{' '}
        <Chip before={<Icon name="user" />}>John Doe</Chip> in a conversation.
        referencing <Chip before={<Icon name="file" />}>Project Plan</Chip> in
        your notes.
      </Text>
      <Text>
        Chips with more than two items collapse to a count and should stay on
        the same baseline as plain chips: <Chip>Design</Chip>{' '}
        <Chip>{['Design', 'Engineering', 'Product']}</Chip> and{' '}
        <Chip before={<Icon name="user" />}>{['Ann', 'Bob', 'Cy', 'Di']}</Chip>{' '}
        <Chip>Design, Engineering</Chip> sit in one line of text.
      </Text>
    </VStack>
}`,...(Fe=(ye=A.parameters)==null?void 0:ye.docs)==null?void 0:Fe.source}}};var Ae,Le,Te;L.parameters={...L.parameters,docs:{...(Ae=L.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  render: () => <Flex flexDir="column" gap="20">
      <Flex flexDir="column" gap="2">
        <Text textStyle="mono.xs">Filter Tags</Text>
        <Flex gap="4" flexWrap="wrap">
          <Chip after={<Icon name="x" />}>React</Chip>
          <Chip after={<Icon name="x" />}>TypeScript</Chip>
          <Chip after={<Icon name="x" />}>Panda CSS</Chip>
          <Chip before={<Icon name="plus" />}>Add Filter</Chip>
        </Flex>
      </Flex>
      <Flex flexDir="column" gap="2">
        <Text textStyle="mono.xs">Categories</Text>
        <Flex gap="4" flexWrap="wrap">
          <Chip before={<Icon name="file" />}>Documentation</Chip>
          <Chip before={<Icon name="calendar" />}>Events</Chip>
          <Chip before={<Icon name="user" />}>People</Chip>
        </Flex>
      </Flex>
      <Flex flexDir="column" gap="2">
        <Text textStyle="mono.xs">Actions</Text>
        <Flex gap="4" flexWrap="wrap">
          <Chip before={<Icon name="plus" />}>New Item</Chip>
          <Chip before={<Icon name="check" />}>Approve</Chip>
          <Chip deleted>Archived</Chip>
        </Flex>
      </Flex>
    </Flex>
}`,...(Te=(Le=L.parameters)==null?void 0:Le.docs)==null?void 0:Te.source}}};var We,Be,we;T.parameters={...T.parameters,docs:{...(We=T.parameters)==null?void 0:We.docs,source:{originalSource:`{
  render: () => <Flex gap="4" alignItems="center">
      <Chip>{['Design', 'Engineering']}</Chip>
      <Chip>{['Design', 'Engineering', 'Product']}</Chip>
      <Chip dismissable onDismiss={() => {}}>
        {['Design', 'Engineering', 'Product', 'Support', 'Sales']}
      </Chip>
    </Flex>
}`,...(we=(Be=T.parameters)==null?void 0:Be.docs)==null?void 0:we.source}}};var Ee,Me,Ge;W.parameters={...W.parameters,docs:{...(Ee=W.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  render: () => <DismissableExample />
}`,...(Ge=(Me=W.parameters)==null?void 0:Me.docs)==null?void 0:Ge.source}}};var ke,Je,Re;B.parameters={...B.parameters,docs:{...(ke=B.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  render: () => <Flex gap="4">
      <Chip dismissable before={<Icon name="file" />} onDismiss={() => {}}>
        Document
      </Chip>
      <Chip dismissable before={<Icon name="user" />} onDismiss={() => {}}>
        Person
      </Chip>
      <Chip dismissable before={<Icon name="calendar" />} onDismiss={() => {}}>
        Event
      </Chip>
    </Flex>
}`,...(Re=(Je=B.parameters)==null?void 0:Je.docs)==null?void 0:Re.source}}};var Pe,Ve,Xe;w.parameters={...w.parameters,docs:{...(Pe=w.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  render: () => <Flex flexDir="column" gap="12">
      <Text textStyle="mono.xs">
        Body clicks stay on the chip action. The trailing X is the only dismiss
        target.
      </Text>
      <Flex gap="4" flexWrap="wrap">
        <Chip dismissable before={<Icon name="file" />} onClick={() => alert('Opened document')} onDismiss={() => alert('Removed document')}>
          Document
        </Chip>
        <Chip dismissable before={<Icon name="user" />} onClick={() => alert('Opened person')} onDismiss={() => alert('Removed person')}>
          Person
        </Chip>
      </Flex>
    </Flex>
}`,...(Xe=(Ve=w.parameters)==null?void 0:Ve.docs)==null?void 0:Xe.source}}};var Oe,Ne,_e;E.parameters={...E.parameters,docs:{...(Oe=E.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
}`,...(_e=(Ne=E.parameters)==null?void 0:Ne.docs)==null?void 0:_e.source}}};var Ue,Ke,Qe;M.parameters={...M.parameters,docs:{...(Ue=M.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  render: () => <VStack gap="12">
      <Chip dismissable dismissLabel="Remove assignee John Doe" before={<Avatar src={sampleImages.user1} name="John Doe" />} onDismiss={() => {}}>
        John Doe
      </Chip>
      <Text textStyle="mono.xs">
        Dismiss button: aria-label="Remove assignee John Doe"
      </Text>
    </VStack>
}`,...(Qe=(Ke=M.parameters)==null?void 0:Ke.docs)==null?void 0:Qe.source}}};var qe,He,Ye;G.parameters={...G.parameters,docs:{...(qe=G.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  render: () => <SingleSelectExample />
}`,...(Ye=(He=G.parameters)==null?void 0:He.docs)==null?void 0:Ye.source}}};var Ze,$e,es;k.parameters={...k.parameters,docs:{...(Ze=k.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
  render: () => <SingleSelectWithBeforeExample />
}`,...(es=($e=k.parameters)==null?void 0:$e.docs)==null?void 0:es.source}}};var ss,ns,rs;J.parameters={...J.parameters,docs:{...(ss=J.parameters)==null?void 0:ss.docs,source:{originalSource:`{
  render: () => <MultiSelectExample />
}`,...(rs=(ns=J.parameters)==null?void 0:ns.docs)==null?void 0:rs.source}}};var is,as,ts;R.parameters={...R.parameters,docs:{...(is=R.parameters)==null?void 0:is.docs,source:{originalSource:`{
  render: () => <MultiSelectWithBeforeExample />
}`,...(ts=(as=R.parameters)==null?void 0:as.docs)==null?void 0:ts.source}}};var ls,os,cs;P.parameters={...P.parameters,docs:{...(ls=P.parameters)==null?void 0:ls.docs,source:{originalSource:`{
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
}`,...(cs=(os=P.parameters)==null?void 0:os.docs)==null?void 0:cs.source}}};var ms,xs,ps;V.parameters={...V.parameters,docs:{...(ms=V.parameters)==null?void 0:ms.docs,source:{originalSource:`{
  render: () => <ChipGroupSizesExample />
}`,...(ps=(xs=V.parameters)==null?void 0:xs.docs)==null?void 0:ps.source}}};var ds,hs,us;g.parameters={...g.parameters,docs:{...(ds=g.parameters)==null?void 0:ds.docs,source:{originalSource:`() => {
  const [selected, setSelected] = useState('assignee');
  return <Grid w="full" h="full" position="relative" placeContent="center" alignItems="center" justifyItems="center" gap="16">
      <ChipGroup type="single" size={{
      base: 'xl',
      xs: 'lg',
      sm: 'md',
      md: 'sm'
    }} value={selected} onChange={v => setSelected(v as string)} label="Responsive chip group">
        <Chip value="assignee" before={<Avatar name="John Doe" />}>
          Assignee
        </Chip>
        <Chip value="mentions" before={<Icon name="hash" />}>
          Mentions
        </Chip>
        <Chip value="alerts" after={<Badge count={3} />}>
          Alerts
        </Chip>
      </ChipGroup>
      <Text textAlign="center" textStyle="mono.sm" _after={{
      display: 'inline',
      content: {
        base: '"xl"',
        xs: '"lg"',
        sm: '"md"',
        md: '"sm"'
      },
      color: 'text.bold',
      fontWeight: 'bold'
    }}>
        Group size:{' '}
      </Text>
      <BreakpointIndicator />
    </Grid>;
}`,...(us=(hs=g.parameters)==null?void 0:hs.docs)==null?void 0:us.source}}};var gs,fs,js;X.parameters={...X.parameters,docs:{...(gs=X.parameters)==null?void 0:gs.docs,source:{originalSource:`{
  render: () => <ChipGroupWithDisabledExample />
}`,...(js=(fs=X.parameters)==null?void 0:fs.docs)==null?void 0:js.source}}};var Cs,bs,Ss;O.parameters={...O.parameters,docs:{...(Cs=O.parameters)==null?void 0:Cs.docs,source:{originalSource:`{
  render: () => <ChipGroupWrappingExample />
}`,...(Ss=(bs=O.parameters)==null?void 0:bs.docs)==null?void 0:Ss.source}}};const rn=["Default","UncontrolledGroup","Sizes","ConditionalBreakpoints","WithBefore","WithAfter","WithBeforeAndAfter","WithSlots","States","Interactive","SizesMatrix","InlineWithText","UseCases","MultipleItems","Dismissable","DismissableWithBefore","DismissableWithPrimaryAction","DismissableStates","DismissableWithCustomLabel","SingleSelect","SingleSelectWithBefore","MultiSelect","MultiSelectWithBefore","KeyboardNavigation","ChipGroupSizes","ChipGroupResponsiveSizes","ChipGroupWithDisabled","ChipGroupWrapping"];export{g as ChipGroupResponsiveSizes,V as ChipGroupSizes,X as ChipGroupWithDisabled,O as ChipGroupWrapping,u as ConditionalBreakpoints,j as Default,W as Dismissable,E as DismissableStates,B as DismissableWithBefore,M as DismissableWithCustomLabel,w as DismissableWithPrimaryAction,A as InlineWithText,y as Interactive,P as KeyboardNavigation,J as MultiSelect,R as MultiSelectWithBefore,T as MultipleItems,G as SingleSelect,k as SingleSelectWithBefore,b as Sizes,F as SizesMatrix,z as States,C as UncontrolledGroup,L as UseCases,D as WithAfter,S as WithBefore,v as WithBeforeAndAfter,I as WithSlots,rn as __namedExportsOrder,nn as default};
