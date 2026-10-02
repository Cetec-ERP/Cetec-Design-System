import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./index-BKyFwriW.js";import{G as f,W as Es,F as r,V as Q}from"./dsComponent-BG2jnRr7.js";import{A as m}from"./Avatar-V8qMY89R.js";import{B as o}from"./Badge-DBgIjuLw.js";import{B as Ts}from"./BreakpointIndicator-CC_bqv_X.js";import{B as q}from"./Button-Cr4bC5CG.js";import{I as n}from"./Icon-CrwLKW7B.js";import"./IconConfig-BuieZFlx.js";import{T as i}from"./Text-2OwfEPBf.js";import{C as s}from"./Chip-DKaV68AI.js";import{C as x}from"./ChipGroup-C9NvKR92.js";import"./_commonjsHelpers-CqkleIqs.js";import"./mq.hook-D1974m8s.js";import"./breakpoints-DU_5_Zhy.js";import"./Tag-tl1AJKHB.js";import"./Spinner-PLunUSsK.js";import"./FieldContext-D6URyQos.js";import"./Tooltip-DSAM1rgm.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";import"./useControllableState-ByGfjEIG.js";const d={user1:"https://i.pravatar.cc/150?img=1",user2:"https://i.pravatar.cc/150?img=2"},dn={title:"Components/Chip",component:s,tags:["autodocs"],argTypes:{size:{control:"select",options:["md","sm","lg"],description:"Size variants of chip"},before:{control:!1,description:"Slot to render item before the label"},after:{control:!1,description:"Slot to render item after the label"},disabled:{control:"boolean",description:"Disables the chip interaction"},loading:{control:"boolean",description:"Shows loading state with pulse animation"},deleted:{control:"boolean",description:"Shows deleted state with strikethrough"},dismissable:{control:"boolean",description:"Renders a trailing remove button instead of whole-chip dismiss"},dismissLabel:{control:"text",description:"Accessible label for the trailing remove button"}},args:{children:"Chip Label",size:"md"},parameters:{layout:"centered"}},j={render:()=>e.jsx(s,{children:"Default"})},C={name:"Uncontrolled Group",render:()=>e.jsxs(x,{type:"single",defaultValue:"growth",label:"Plan size",children:[e.jsx(s,{value:"starter",children:"Starter"}),e.jsx(s,{value:"growth",children:"Growth"}),e.jsx(s,{value:"enterprise",children:"Enterprise"})]}),parameters:{controls:{disable:!0}}},b={render:()=>e.jsxs(f,{columns:5,justifyItems:"center",gap:"20",children:[e.jsx(s,{size:"sm",children:"sm Chip"}),e.jsx(s,{size:"sm",before:e.jsx(n,{name:"hash"}),children:"sm Chip"}),e.jsx(s,{size:"sm",after:e.jsx(n,{name:"read-doc"}),children:"sm Chip"}),e.jsx(s,{size:"sm",before:e.jsx(m,{src:d.user1,name:"John Doe"}),children:"sm Chip"}),e.jsx(s,{size:"sm",after:e.jsx(o,{count:3}),children:"sm Chip"}),e.jsx(s,{size:"md",children:"md Chip"}),e.jsx(s,{size:"md",before:e.jsx(n,{name:"hash"}),children:"md Chip"}),e.jsx(s,{size:"md",after:e.jsx(n,{name:"read-doc"}),children:"md Chip"}),e.jsx(s,{size:"md",before:e.jsx(m,{src:d.user1,name:"John Doe"}),children:"md Chip"}),e.jsx(s,{size:"md",after:e.jsx(o,{count:3}),children:"md Chip"}),e.jsx(s,{size:"lg",children:"lg Chip"}),e.jsx(s,{size:"lg",before:e.jsx(n,{name:"hash"}),children:"lg Chip"}),e.jsx(s,{size:"lg",after:e.jsx(n,{name:"read-doc"}),children:"lg Chip"}),e.jsx(s,{size:"lg",before:e.jsx(m,{src:d.user1,name:"John Doe"}),children:"lg Chip"}),e.jsx(s,{size:"lg",after:e.jsx(o,{count:3}),children:"lg Chip"})]})},u=()=>e.jsxs(f,{w:"full",h:"full",position:"relative",placeContent:"center",alignItems:"center",justifyItems:"center",gap:"16",children:[e.jsxs(Es,{justifyContent:"center",children:[e.jsx(s,{size:{base:"xl",xs:"lg",sm:"md",md:"sm"},before:e.jsx(n,{name:"hash"}),children:"Chip"}),e.jsx(s,{size:{base:"xl",xs:"lg",sm:"md",md:"sm"},before:e.jsx(m,{src:d.user1,name:"John Doe"}),children:"Chip"}),e.jsx(s,{size:{base:"xl",xs:"lg",sm:"md",md:"sm"},after:e.jsx(o,{count:3}),children:"Chip"})]}),e.jsxs(i,{textAlign:"center",textStyle:"mono.sm",_after:{display:"inline",content:{base:'"xl"',xs:'"lg"',sm:'"md"',md:'"sm"'},color:"text.bold",fontWeight:"bold"},children:["Size:"," "]}),e.jsx(Ts,{})]}),S={render:()=>e.jsxs(r,{gap:"4",flexDir:"column",alignItems:"center",children:[e.jsxs(r,{gap:"4",alignItems:"center",children:[e.jsx(s,{size:"sm",before:e.jsx(o,{count:2,variant:"success"}),children:"Small"}),e.jsx(s,{before:e.jsx(o,{count:30,variant:"neutral"}),children:"Medium"}),e.jsx(s,{size:"lg",before:e.jsx(o,{count:100}),children:"Large"}),e.jsx(s,{size:"xl",before:e.jsx(o,{count:100}),children:"XLarge"})]}),e.jsxs(r,{gap:"4",alignItems:"center",children:[e.jsx(s,{size:"sm",before:e.jsx(m,{src:d.user1,name:"John Doe"}),children:"Small"}),e.jsx(s,{before:e.jsx(m,{src:d.user1,name:"John Doe"}),children:"Medium"}),e.jsx(s,{size:"lg",before:e.jsx(m,{src:d.user1,name:"John Doe"}),children:"Large"}),e.jsx(s,{size:"xl",before:e.jsx(m,{src:d.user1,name:"John Doe"}),children:"XLarge"})]}),e.jsxs(r,{gap:"4",alignItems:"center",children:[e.jsx(s,{size:"sm",before:e.jsx(n,{name:"file"}),children:"Small"}),e.jsx(s,{before:e.jsx(n,{name:"file"}),children:"Medium"}),e.jsx(s,{size:"lg",before:e.jsx(n,{name:"file"}),children:"Large"}),e.jsx(s,{size:"xl",before:e.jsx(n,{name:"file"}),children:"XLarge"})]})]})},D={render:()=>e.jsxs(r,{gap:"4",flexDir:"column",alignItems:"center",children:[e.jsxs(r,{gap:"4",alignItems:"center",children:[e.jsx(s,{size:"sm",after:e.jsx(o,{count:2,variant:"success"}),children:"Small"}),e.jsx(s,{after:e.jsx(o,{count:30,variant:"neutral"}),children:"Medium"}),e.jsx(s,{size:"lg",after:e.jsx(o,{count:100}),children:"Large"}),e.jsx(s,{size:"xl",after:e.jsx(o,{count:100}),children:"XLarge"})]}),e.jsxs(r,{gap:"4",alignItems:"center",children:[e.jsx(s,{size:"sm",after:e.jsx(m,{src:d.user1,name:"John Doe"}),children:"Small"}),e.jsx(s,{after:e.jsx(m,{src:d.user1,name:"John Doe"}),children:"Medium"}),e.jsx(s,{size:"lg",after:e.jsx(m,{src:d.user1,name:"John Doe"}),children:"Large"}),e.jsx(s,{size:"xl",after:e.jsx(m,{src:d.user1,name:"John Doe"}),children:"XLarge"})]}),e.jsxs(r,{gap:"4",alignItems:"center",children:[e.jsx(s,{size:"sm",after:e.jsx(n,{name:"file"}),children:"Small"}),e.jsx(s,{after:e.jsx(n,{name:"file"}),children:"Medium"}),e.jsx(s,{size:"lg",after:e.jsx(n,{name:"file"}),children:"Large"}),e.jsx(s,{size:"xl",after:e.jsx(n,{name:"file"}),children:"XLarge"})]})]})},v={render:()=>e.jsxs(r,{gap:"4",alignItems:"center",children:[e.jsx(s,{size:"sm",before:e.jsx(n,{name:"user"}),after:e.jsx(o,{count:2}),children:"Small"}),e.jsx(s,{before:e.jsx(n,{name:"user"}),after:e.jsx(o,{count:2}),children:"Medium"}),e.jsx(s,{size:"lg",before:e.jsx(n,{name:"user"}),after:e.jsx(o,{count:2}),children:"Large"}),e.jsx(s,{size:"xl",before:e.jsx(n,{name:"user"}),after:e.jsx(o,{count:2}),children:"XLarge"})]})},I={render:()=>e.jsxs(r,{gap:"4",flexDir:"column",alignItems:"center",children:[e.jsxs(r,{gap:"4",alignItems:"center",children:[e.jsx(s,{before:e.jsx(n,{name:"hash"}),children:"Icon Slot"}),e.jsx(s,{after:e.jsx(o,{count:3,variant:"success"}),children:"Badge Slot"}),e.jsx(s,{before:e.jsx(m,{src:d.user2,name:"Jane Doe"}),after:e.jsx(n,{name:"x"}),children:"Avatar Slot"})]}),e.jsxs(r,{gap:"4",alignItems:"center",children:[e.jsx(s,{before:e.jsx(n,{name:"hash"}),children:"Alias Before"}),e.jsx(s,{after:e.jsx(o,{count:4,variant:"warning"}),children:"Alias After"})]})]})},z={render:()=>e.jsxs(f,{gridTemplateColumns:"auto auto",gap:"24",children:[e.jsx(i,{textStyle:"mono.xs",children:"Default:"}),e.jsx(s,{before:e.jsx(n,{name:"file"}),children:"Interactive"}),e.jsx(i,{textStyle:"mono.xs",children:"Disabled:"}),e.jsx(s,{disabled:!0,before:e.jsx(n,{name:"file"}),children:"Disabled"}),e.jsx(i,{textStyle:"mono.xs",children:"Loading:"}),e.jsx(s,{loading:!0,before:e.jsx(n,{name:"file"}),children:"Loading..."}),e.jsx(i,{textStyle:"mono.xs",children:"Deleted:"}),e.jsx(s,{deleted:!0,before:e.jsx(n,{name:"file"}),children:"Deleted Item"})]})},y={render:()=>e.jsxs(r,{flexDir:"column",gap:"12",children:[e.jsx(i,{textStyle:"mono.xs",children:"Chips can be interactive buttons:"}),e.jsxs(r,{gap:"2",children:[e.jsx(s,{onClick:()=>alert("Clicked!"),children:"Click Me"}),e.jsx(s,{before:e.jsx(n,{name:"plus"}),onClick:()=>alert("Add clicked!"),children:"Add Item"}),e.jsx(s,{after:e.jsx(n,{name:"x"}),onClick:()=>alert("Remove clicked!"),children:"Remove"})]})]})},F={render:()=>e.jsxs(r,{flexDir:"column",gap:"12",children:[e.jsxs(r,{flexDir:"column",gap:"2",children:[e.jsx(i,{textStyle:"mono.xs",children:"No Content Before/After"}),e.jsxs(r,{gap:"4",alignItems:"center",children:[e.jsx(s,{size:"sm",children:"Small"}),e.jsx(s,{children:"Medium"}),e.jsx(s,{size:"lg",children:"Large"}),e.jsx(s,{size:"xl",children:"Extra Large"})]})]}),e.jsxs(r,{flexDir:"column",gap:"2",children:[e.jsx(i,{textStyle:"mono.xs",children:"With Before"}),e.jsxs(r,{gap:"4",alignItems:"center",children:[e.jsx(s,{size:"sm",before:e.jsx(n,{name:"file"}),children:"Small"}),e.jsx(s,{before:e.jsx(n,{name:"file"}),children:"Medium"}),e.jsx(s,{size:"lg",before:e.jsx(n,{name:"file"}),children:"Large"}),e.jsx(s,{size:"xl",before:e.jsx(n,{name:"file"}),children:"Extra Large"})]})]}),e.jsxs(r,{flexDir:"column",gap:"2",children:[e.jsx(i,{textStyle:"mono.xs",children:"With After"}),e.jsxs(r,{gap:"4",alignItems:"center",children:[e.jsx(s,{size:"sm",after:e.jsx(n,{name:"x"}),children:"Small"}),e.jsx(s,{after:e.jsx(n,{name:"x"}),children:"Medium"}),e.jsx(s,{size:"lg",after:e.jsx(n,{name:"x"}),children:"Large"}),e.jsx(s,{size:"xl",after:e.jsx(n,{name:"x"}),children:"Extra Large"})]})]}),e.jsxs(r,{flexDir:"column",gap:"2",children:[e.jsx(i,{textStyle:"mono.xs",children:"With Before and After"}),e.jsxs(r,{gap:"4",alignItems:"center",children:[e.jsx(s,{size:"sm",before:e.jsx(n,{name:"user"}),after:e.jsx(n,{name:"x"}),children:"Small"}),e.jsx(s,{before:e.jsx(n,{name:"user"}),after:e.jsx(n,{name:"x"}),children:"Medium"}),e.jsx(s,{size:"lg",before:e.jsx(n,{name:"user"}),after:e.jsx(n,{name:"x"}),children:"Large"}),e.jsx(s,{size:"xl",before:e.jsx(n,{name:"user"}),after:e.jsx(n,{name:"x"}),children:"Extra Large"})]})]})]})},A={render:()=>e.jsxs(Q,{maxW:"lg",alignItems:"stretch",gap:"8",children:[e.jsxs(i,{children:["Chips can appear inline within text, like tagging"," ",e.jsx(s,{before:e.jsx(n,{name:"user"}),children:"John Doe"})," in a conversation. referencing ",e.jsx(s,{before:e.jsx(n,{name:"file"}),children:"Project Plan"})," in your notes."]}),e.jsxs(i,{children:["Chips with more than two items collapse to a count and should stay on the same baseline as plain chips: ",e.jsx(s,{children:"Design"})," ",e.jsx(s,{children:["Design","Engineering","Product"]})," and"," ",e.jsx(s,{before:e.jsx(n,{name:"user"}),children:["Ann","Bob","Cy","Di"]})," ",e.jsx(s,{children:"Design, Engineering"})," sit in one line of text."]})]})},T={render:()=>e.jsxs(r,{flexDir:"column",gap:"20",children:[e.jsxs(r,{flexDir:"column",gap:"2",children:[e.jsx(i,{textStyle:"mono.xs",children:"Filter Tags"}),e.jsxs(r,{gap:"4",flexWrap:"wrap",children:[e.jsx(s,{after:e.jsx(n,{name:"x"}),children:"React"}),e.jsx(s,{after:e.jsx(n,{name:"x"}),children:"TypeScript"}),e.jsx(s,{after:e.jsx(n,{name:"x"}),children:"Panda CSS"}),e.jsx(s,{before:e.jsx(n,{name:"plus"}),children:"Add Filter"})]})]}),e.jsxs(r,{flexDir:"column",gap:"2",children:[e.jsx(i,{textStyle:"mono.xs",children:"Categories"}),e.jsxs(r,{gap:"4",flexWrap:"wrap",children:[e.jsx(s,{before:e.jsx(n,{name:"file"}),children:"Documentation"}),e.jsx(s,{before:e.jsx(n,{name:"calendar"}),children:"Events"}),e.jsx(s,{before:e.jsx(n,{name:"user"}),children:"People"})]})]}),e.jsxs(r,{flexDir:"column",gap:"2",children:[e.jsx(i,{textStyle:"mono.xs",children:"Actions"}),e.jsxs(r,{gap:"4",flexWrap:"wrap",children:[e.jsx(s,{before:e.jsx(n,{name:"plus"}),children:"New Item"}),e.jsx(s,{before:e.jsx(n,{name:"check"}),children:"Approve"}),e.jsx(s,{deleted:!0,children:"Archived"})]})]})]})},ks=()=>{const[a,l]=p.useState(["React","TypeScript","Panda CSS","Vite"]),t=c=>{l(_=>_.filter(U=>U!==c))};return e.jsxs(r,{flexDir:"column",gap:"12",children:[e.jsx(i,{textStyle:"mono.xs",children:"Click the X to dismiss tags:"}),e.jsx(r,{gap:"4",flexWrap:"wrap",children:a.map(c=>e.jsx(s,{dismissable:!0,onDismiss:()=>t(c),children:c},c))}),a.length===0&&e.jsx(i,{color:"text.subtlest",children:"All tags dismissed!"})]})},L={render:()=>e.jsxs(r,{gap:"4",alignItems:"center",children:[e.jsx(s,{children:["Design","Engineering"]}),e.jsx(s,{children:["Design","Engineering","Product"]}),e.jsx(s,{dismissable:!0,onDismiss:()=>{},children:["Design","Engineering","Product","Support","Sales"]})]})},K=["Design","Engineering","Product","Support","Sales"],Ms=()=>{const[a,l]=p.useState(2),t=K.slice(0,a);return e.jsxs(Q,{gap:"12",alignItems:"flex-start",children:[e.jsx(i,{children:"Focus the chip, then change the count with the buttons (Shift+Tab back to the chip). Focus should stay on the chip when crossing three items."}),e.jsxs(r,{gap:"8",alignItems:"center",children:[e.jsx(s,{onClick:()=>{},children:t}),e.jsx(s,{children:t}),e.jsx(s,{dismissable:!0,onDismiss:()=>{},children:t})]}),e.jsxs(r,{gap:"8",children:[e.jsx(q,{onClick:()=>l(c=>Math.max(1,c-1)),disabled:a<=1,children:"Remove item"}),e.jsx(q,{onClick:()=>l(c=>Math.min(K.length,c+1)),disabled:a>=K.length,children:"Add item"})]})]})},B={render:()=>e.jsx(Ms,{})},W={render:()=>e.jsx(ks,{})},w={render:()=>e.jsxs(r,{gap:"4",children:[e.jsx(s,{dismissable:!0,before:e.jsx(n,{name:"file"}),onDismiss:()=>{},children:"Document"}),e.jsx(s,{dismissable:!0,before:e.jsx(n,{name:"user"}),onDismiss:()=>{},children:"Person"}),e.jsx(s,{dismissable:!0,before:e.jsx(n,{name:"calendar"}),onDismiss:()=>{},children:"Event"})]})},E={render:()=>e.jsxs(r,{flexDir:"column",gap:"12",children:[e.jsx(i,{textStyle:"mono.xs",children:"Body clicks stay on the chip action. The trailing X is the only dismiss target."}),e.jsxs(r,{gap:"4",flexWrap:"wrap",children:[e.jsx(s,{dismissable:!0,before:e.jsx(n,{name:"file"}),onClick:()=>alert("Opened document"),onDismiss:()=>alert("Removed document"),children:"Document"}),e.jsx(s,{dismissable:!0,before:e.jsx(n,{name:"user"}),onClick:()=>alert("Opened person"),onDismiss:()=>alert("Removed person"),children:"Person"})]})]})},k={render:()=>e.jsxs(f,{gridTemplateColumns:"auto auto",gap:"24",children:[e.jsx(i,{textStyle:"mono.xs",children:"Default:"}),e.jsx(s,{dismissable:!0,onDismiss:()=>{},children:"Default"}),e.jsx(i,{textStyle:"mono.xs",children:"Disabled:"}),e.jsx(s,{dismissable:!0,disabled:!0,onDismiss:()=>{},children:"Disabled"}),e.jsx(i,{textStyle:"mono.xs",children:"Loading:"}),e.jsx(s,{dismissable:!0,loading:!0,onDismiss:()=>{},children:"Loading..."}),e.jsx(i,{textStyle:"mono.xs",children:"Deleted:"}),e.jsx(s,{dismissable:!0,deleted:!0,onDismiss:()=>{},children:"Deleted Item"})]})},M={render:()=>e.jsxs(Q,{gap:"12",children:[e.jsx(s,{dismissable:!0,dismissLabel:"Remove assignee John Doe",before:e.jsx(m,{src:d.user1,name:"John Doe"}),onDismiss:()=>{},children:"John Doe"}),e.jsx(i,{textStyle:"mono.xs",children:'Dismiss button: aria-label="Remove assignee John Doe"'})]})},Ls=()=>{const[a,l]=p.useState("");return e.jsxs(r,{flexDir:"column",gap:"12",children:[e.jsx(i,{textStyle:"mono.md",children:"Select one size:"}),e.jsxs(x,{type:"single",value:a,onChange:t=>l(t),label:"Size selection",children:[e.jsx(s,{value:"sm",children:"Small"}),e.jsx(s,{value:"md",children:"Medium"}),e.jsx(s,{value:"lg",children:"Large"}),e.jsx(s,{value:"xl",children:"X-Large"})]}),e.jsxs(i,{textStyle:"mono.xs",children:["Selected: ",a]})]})},G={render:()=>e.jsx(Ls,{})},Gs=()=>{const[a,l]=p.useState("grid");return e.jsxs(r,{flexDir:"column",gap:"12",children:[e.jsx(i,{textStyle:"mono.md",children:"Select a view:"}),e.jsxs(x,{type:"single",value:a,onChange:t=>l(t),label:"View selection",children:[e.jsx(s,{value:"list",before:e.jsx(n,{name:"menu"}),children:"List"}),e.jsx(s,{value:"grid",before:e.jsx(n,{name:"view-grid"}),children:"Grid"}),e.jsx(s,{value:"calendar",before:e.jsx(n,{name:"calendar"}),children:"Calendar"})]}),e.jsxs(i,{textStyle:"mono.xs",children:["Selected: ",a]})]})},J={render:()=>e.jsx(Gs,{})},Bs=()=>{const[a,l]=p.useState(["react","typescript"]);return e.jsxs(r,{flexDir:"column",gap:"12",children:[e.jsx(i,{textStyle:"mono.md",children:"Select your skills (check icon appears when selected):"}),e.jsxs(x,{type:"multi",value:a,onChange:t=>l(t),label:"Skills selection",children:[e.jsx(s,{value:"react",children:"React"}),e.jsx(s,{value:"typescript",children:"TypeScript"}),e.jsx(s,{value:"vue",children:"Vue"}),e.jsx(s,{value:"angular",children:"Angular"}),e.jsx(s,{value:"svelte",children:"Svelte"})]}),e.jsxs(i,{textStyle:"mono.xs",children:["Selected: ",a.join(", ")||"None"]})]})},R={render:()=>e.jsx(Bs,{})},Js=()=>{const[a,l]=p.useState(["docs"]);return e.jsxs(r,{flexDir:"column",gap:"12",children:[e.jsx(i,{textStyle:"mono.md",children:"Filter by category:"}),e.jsxs(x,{type:"multi",value:a,onChange:t=>l(t),label:"Category filter",children:[e.jsx(s,{value:"docs",before:e.jsx(n,{name:"file"}),children:"Documents"}),e.jsx(s,{value:"images",before:e.jsx(n,{name:"image"}),children:"Images"}),e.jsx(s,{value:"videos",before:e.jsx(n,{name:"video"}),children:"Videos"}),e.jsx(s,{value:"audio",before:e.jsx(n,{name:"broadcast"}),children:"Audio"})]}),e.jsxs(i,{textStyle:"mono.xs",children:["Selected: ",a.join(", ")||"None"]})]})},P={render:()=>e.jsx(Js,{})},O={render:()=>e.jsxs(r,{flexDir:"column",gap:"40",children:[e.jsxs(r,{flexDir:"column",gap:"2",children:[e.jsx(i,{textStyle:"mono.md",color:"text",fontWeight:"bold",children:"Single Select (arrow keys navigate & select):"}),e.jsx(Ls,{})]}),e.jsxs(r,{flexDir:"column",gap:"2",children:[e.jsx(i,{textStyle:"mono.md",color:"text",fontWeight:"bold",children:"Multi Select (tab between, space/enter toggles):"}),e.jsx(Bs,{})]})]})},Rs=()=>{const[a,l]=p.useState("option-a"),[t,c]=p.useState("option-a"),[_,U]=p.useState("option-a"),[Ws,ws]=p.useState("option-a");return e.jsxs(r,{flexDir:"column",gap:"24",children:[e.jsxs(r,{flexDir:"column",gap:"2",children:[e.jsx(i,{textStyle:"mono.xs",children:"Small"}),e.jsxs(x,{type:"single",size:"sm",value:a,onChange:h=>l(h),label:"Small chip group",children:[e.jsx(s,{value:"option-a",children:"Option A"}),e.jsx(s,{value:"option-b",children:"Option B"}),e.jsx(s,{value:"option-c",children:"Option C"})]})]}),e.jsxs(r,{flexDir:"column",gap:"2",children:[e.jsx(i,{textStyle:"mono.xs",children:"Medium"}),e.jsxs(x,{type:"single",size:"md",value:t,onChange:h=>c(h),label:"Medium chip group",children:[e.jsx(s,{value:"option-a",children:"Option A"}),e.jsx(s,{value:"option-b",children:"Option B"}),e.jsx(s,{value:"option-c",children:"Option C"})]})]}),e.jsxs(r,{flexDir:"column",gap:"2",children:[e.jsx(i,{textStyle:"mono.xs",children:"Large"}),e.jsxs(x,{type:"single",size:"lg",value:_,onChange:h=>U(h),label:"Large chip group",children:[e.jsx(s,{value:"option-a",children:"Option A"}),e.jsx(s,{value:"option-b",children:"Option B"}),e.jsx(s,{value:"option-c",children:"Option C"})]})]}),e.jsxs(r,{flexDir:"column",gap:"2",children:[e.jsx(i,{textStyle:"mono.xs",children:"Extra Large"}),e.jsxs(x,{type:"single",size:"xl",value:Ws,onChange:h=>ws(h),label:"Extra Large chip group",children:[e.jsx(s,{value:"option-a",children:"Option A"}),e.jsx(s,{value:"option-b",children:"Option B"}),e.jsx(s,{value:"option-c",children:"Option C"})]})]})]})},V={render:()=>e.jsx(Rs,{})},g=()=>{const[a,l]=p.useState("assignee");return e.jsxs(f,{w:"full",h:"full",position:"relative",placeContent:"center",alignItems:"center",justifyItems:"center",gap:"16",children:[e.jsxs(x,{type:"single",size:{base:"xl",xs:"lg",sm:"md",md:"sm"},value:a,onChange:t=>l(t),label:"Responsive chip group",children:[e.jsx(s,{value:"assignee",before:e.jsx(m,{name:"John Doe"}),children:"Assignee"}),e.jsx(s,{value:"mentions",before:e.jsx(n,{name:"hash"}),children:"Mentions"}),e.jsx(s,{value:"alerts",after:e.jsx(o,{count:3}),children:"Alerts"})]}),e.jsxs(i,{textAlign:"center",textStyle:"mono.sm",_after:{display:"inline",content:{base:'"xl"',xs:'"lg"',sm:'"md"',md:'"sm"'},color:"text.bold",fontWeight:"bold"},children:["Group size:"," "]}),e.jsx(Ts,{})]})},Ps=()=>{const[a,l]=p.useState("active");return e.jsxs(r,{flexDir:"column",gap:"12",children:[e.jsx(i,{textStyle:"mono.md",children:"Individual chips can be disabled within a group:"}),e.jsxs(x,{type:"single",value:a,onChange:t=>l(t),label:"Options with disabled",children:[e.jsx(s,{value:"active",children:"Active"}),e.jsx(s,{value:"pending",children:"Pending"}),e.jsx(s,{value:"unavailable",disabled:!0,children:"Unavailable"}),e.jsx(s,{value:"archived",children:"Archived"})]}),e.jsxs(i,{textStyle:"mono.xs",children:["Selected: ",a]})]})},X={render:()=>e.jsx(Ps,{})},Os=()=>{const[a,l]=p.useState(["react","typescript"]),t=["React","TypeScript","JavaScript","Vue","Angular","Svelte","Next.js","Remix","Astro","Node.js","Python","Go","Rust","GraphQL","REST","Docker"];return e.jsxs(r,{flexDir:"column",gap:"12",maxW:"md",children:[e.jsx(i,{textStyle:"mono.md",children:"ChipGroup wraps when chips exceed container width:"}),e.jsx(x,{type:"multi",value:a,onChange:c=>l(c),label:"Skills selection",children:t.map(c=>e.jsx(s,{value:c.toLowerCase(),children:c},c.toLowerCase()))}),e.jsxs(i,{textStyle:"mono.xs",children:["Selected: ",a.join(", ")||"None"]})]})},N={render:()=>e.jsx(Os,{})};u.__docgenInfo={description:"",methods:[],displayName:"ConditionalBreakpoints"};g.__docgenInfo={description:"",methods:[],displayName:"ChipGroupResponsiveSizes"};var H,Y,Z;j.parameters={...j.parameters,docs:{...(H=j.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <Chip>Default</Chip>
}`,...(Z=(Y=j.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,se;C.parameters={...C.parameters,docs:{...($=C.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(se=(ee=C.parameters)==null?void 0:ee.docs)==null?void 0:se.source}}};var ne,re,ie;b.parameters={...b.parameters,docs:{...(ne=b.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(ie=(re=b.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var ae,te,le;u.parameters={...u.parameters,docs:{...(ae=u.parameters)==null?void 0:ae.docs,source:{originalSource:`() => {
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
}`,...(le=(te=u.parameters)==null?void 0:te.docs)==null?void 0:le.source}}};var oe,ce,me;S.parameters={...S.parameters,docs:{...(oe=S.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(me=(ce=S.parameters)==null?void 0:ce.docs)==null?void 0:me.source}}};var de,pe,xe;D.parameters={...D.parameters,docs:{...(de=D.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(xe=(pe=D.parameters)==null?void 0:pe.docs)==null?void 0:xe.source}}};var he,ue,ge;v.parameters={...v.parameters,docs:{...(he=v.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(ge=(ue=v.parameters)==null?void 0:ue.docs)==null?void 0:ge.source}}};var fe,je,Ce;I.parameters={...I.parameters,docs:{...(fe=I.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(Ce=(je=I.parameters)==null?void 0:je.docs)==null?void 0:Ce.source}}};var be,Se,De;z.parameters={...z.parameters,docs:{...(be=z.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(De=(Se=z.parameters)==null?void 0:Se.docs)==null?void 0:De.source}}};var ve,Ie,ze;y.parameters={...y.parameters,docs:{...(ve=y.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(ze=(Ie=y.parameters)==null?void 0:Ie.docs)==null?void 0:ze.source}}};var ye,Fe,Ae;F.parameters={...F.parameters,docs:{...(ye=F.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(Ae=(Fe=F.parameters)==null?void 0:Fe.docs)==null?void 0:Ae.source}}};var Te,Le,Be;A.parameters={...A.parameters,docs:{...(Te=A.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(Be=(Le=A.parameters)==null?void 0:Le.docs)==null?void 0:Be.source}}};var We,we,Ee;T.parameters={...T.parameters,docs:{...(We=T.parameters)==null?void 0:We.docs,source:{originalSource:`{
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
}`,...(Ee=(we=T.parameters)==null?void 0:we.docs)==null?void 0:Ee.source}}};var ke,Me,Ge;L.parameters={...L.parameters,docs:{...(ke=L.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  render: () => <Flex gap="4" alignItems="center">
      <Chip>{['Design', 'Engineering']}</Chip>
      <Chip>{['Design', 'Engineering', 'Product']}</Chip>
      <Chip dismissable onDismiss={() => {}}>
        {['Design', 'Engineering', 'Product', 'Support', 'Sales']}
      </Chip>
    </Flex>
}`,...(Ge=(Me=L.parameters)==null?void 0:Me.docs)==null?void 0:Ge.source}}};var Je,Re,Pe;B.parameters={...B.parameters,docs:{...(Je=B.parameters)==null?void 0:Je.docs,source:{originalSource:`{
  render: () => <OverflowFocusExample />
}`,...(Pe=(Re=B.parameters)==null?void 0:Re.docs)==null?void 0:Pe.source}}};var Oe,Ve,Xe;W.parameters={...W.parameters,docs:{...(Oe=W.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  render: () => <DismissableExample />
}`,...(Xe=(Ve=W.parameters)==null?void 0:Ve.docs)==null?void 0:Xe.source}}};var Ne,_e,Ue;w.parameters={...w.parameters,docs:{...(Ne=w.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
}`,...(Ue=(_e=w.parameters)==null?void 0:_e.docs)==null?void 0:Ue.source}}};var Ke,Qe,qe;E.parameters={...E.parameters,docs:{...(Ke=E.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
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
}`,...(qe=(Qe=E.parameters)==null?void 0:Qe.docs)==null?void 0:qe.source}}};var He,Ye,Ze;k.parameters={...k.parameters,docs:{...(He=k.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
}`,...(Ze=(Ye=k.parameters)==null?void 0:Ye.docs)==null?void 0:Ze.source}}};var $e,es,ss;M.parameters={...M.parameters,docs:{...($e=M.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  render: () => <VStack gap="12">
      <Chip dismissable dismissLabel="Remove assignee John Doe" before={<Avatar src={sampleImages.user1} name="John Doe" />} onDismiss={() => {}}>
        John Doe
      </Chip>
      <Text textStyle="mono.xs">
        Dismiss button: aria-label="Remove assignee John Doe"
      </Text>
    </VStack>
}`,...(ss=(es=M.parameters)==null?void 0:es.docs)==null?void 0:ss.source}}};var ns,rs,is;G.parameters={...G.parameters,docs:{...(ns=G.parameters)==null?void 0:ns.docs,source:{originalSource:`{
  render: () => <SingleSelectExample />
}`,...(is=(rs=G.parameters)==null?void 0:rs.docs)==null?void 0:is.source}}};var as,ts,ls;J.parameters={...J.parameters,docs:{...(as=J.parameters)==null?void 0:as.docs,source:{originalSource:`{
  render: () => <SingleSelectWithBeforeExample />
}`,...(ls=(ts=J.parameters)==null?void 0:ts.docs)==null?void 0:ls.source}}};var os,cs,ms;R.parameters={...R.parameters,docs:{...(os=R.parameters)==null?void 0:os.docs,source:{originalSource:`{
  render: () => <MultiSelectExample />
}`,...(ms=(cs=R.parameters)==null?void 0:cs.docs)==null?void 0:ms.source}}};var ds,ps,xs;P.parameters={...P.parameters,docs:{...(ds=P.parameters)==null?void 0:ds.docs,source:{originalSource:`{
  render: () => <MultiSelectWithBeforeExample />
}`,...(xs=(ps=P.parameters)==null?void 0:ps.docs)==null?void 0:xs.source}}};var hs,us,gs;O.parameters={...O.parameters,docs:{...(hs=O.parameters)==null?void 0:hs.docs,source:{originalSource:`{
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
}`,...(gs=(us=O.parameters)==null?void 0:us.docs)==null?void 0:gs.source}}};var fs,js,Cs;V.parameters={...V.parameters,docs:{...(fs=V.parameters)==null?void 0:fs.docs,source:{originalSource:`{
  render: () => <ChipGroupSizesExample />
}`,...(Cs=(js=V.parameters)==null?void 0:js.docs)==null?void 0:Cs.source}}};var bs,Ss,Ds;g.parameters={...g.parameters,docs:{...(bs=g.parameters)==null?void 0:bs.docs,source:{originalSource:`() => {
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
}`,...(Ds=(Ss=g.parameters)==null?void 0:Ss.docs)==null?void 0:Ds.source}}};var vs,Is,zs;X.parameters={...X.parameters,docs:{...(vs=X.parameters)==null?void 0:vs.docs,source:{originalSource:`{
  render: () => <ChipGroupWithDisabledExample />
}`,...(zs=(Is=X.parameters)==null?void 0:Is.docs)==null?void 0:zs.source}}};var ys,Fs,As;N.parameters={...N.parameters,docs:{...(ys=N.parameters)==null?void 0:ys.docs,source:{originalSource:`{
  render: () => <ChipGroupWrappingExample />
}`,...(As=(Fs=N.parameters)==null?void 0:Fs.docs)==null?void 0:As.source}}};const pn=["Default","UncontrolledGroup","Sizes","ConditionalBreakpoints","WithBefore","WithAfter","WithBeforeAndAfter","WithSlots","States","Interactive","SizesMatrix","InlineWithText","UseCases","MultipleItems","OverflowKeyboardAndFocus","Dismissable","DismissableWithBefore","DismissableWithPrimaryAction","DismissableStates","DismissableWithCustomLabel","SingleSelect","SingleSelectWithBefore","MultiSelect","MultiSelectWithBefore","KeyboardNavigation","ChipGroupSizes","ChipGroupResponsiveSizes","ChipGroupWithDisabled","ChipGroupWrapping"];export{g as ChipGroupResponsiveSizes,V as ChipGroupSizes,X as ChipGroupWithDisabled,N as ChipGroupWrapping,u as ConditionalBreakpoints,j as Default,W as Dismissable,k as DismissableStates,w as DismissableWithBefore,M as DismissableWithCustomLabel,E as DismissableWithPrimaryAction,A as InlineWithText,y as Interactive,O as KeyboardNavigation,R as MultiSelect,P as MultiSelectWithBefore,L as MultipleItems,B as OverflowKeyboardAndFocus,G as SingleSelect,J as SingleSelectWithBefore,b as Sizes,F as SizesMatrix,z as States,C as UncontrolledGroup,T as UseCases,D as WithAfter,S as WithBefore,v as WithBeforeAndAfter,I as WithSlots,pn as __namedExportsOrder,dn as default};
