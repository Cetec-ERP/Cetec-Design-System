import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as u}from"./index-BKyFwriW.js";import{G as b,W as Ys,F as r,V as g}from"./dsComponent-BG2jnRr7.js";import{A as m}from"./Avatar-V8qMY89R.js";import{B as o}from"./Badge-DBgIjuLw.js";import{B as Ks}from"./BreakpointIndicator-CC_bqv_X.js";import{B as se}from"./Button-Cr4bC5CG.js";import{I as n}from"./Icon-CrwLKW7B.js";import"./IconConfig-BuieZFlx.js";import{T as i}from"./Text-BZYrSSlU.js";import{C as s}from"./Chip-BE3muR1C.js";import{C as p}from"./ChipGroup-Ccsy4Svw.js";import"./_commonjsHelpers-CqkleIqs.js";import"./mq.hook-D1974m8s.js";import"./breakpoints-DU_5_Zhy.js";import"./Tag-tl1AJKHB.js";import"./Spinner-PLunUSsK.js";import"./FieldContext-D6URyQos.js";import"./Tooltip-C-IRQOyj.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";import"./useControllableState-ByGfjEIG.js";const d={user1:"https://i.pravatar.cc/150?img=1",user2:"https://i.pravatar.cc/150?img=2"},En={title:"Components/Chip",component:s,tags:["autodocs"],argTypes:{size:{control:"select",options:["md","sm","lg"],description:"Size variants of chip"},before:{control:!1,description:"Slot to render item before the label"},after:{control:!1,description:"Slot to render item after the label"},disabled:{control:"boolean",description:"Disables the chip interaction"},loading:{control:"boolean",description:"Shows loading state with pulse animation"},deleted:{control:"boolean",description:"Shows deleted state with strikethrough"},dismissable:{control:"boolean",description:"Renders a trailing remove button instead of whole-chip dismiss"},items:{control:"object",description:"List label used instead of children. More than two items show the first two plus +N and a tooltip with every item"},dismissLabel:{control:"text",description:"Accessible label for the trailing remove button"}},args:{children:"Chip Label",size:"md"},parameters:{layout:"centered"}},S={render:()=>e.jsx(s,{children:"Default"})},v={name:"Uncontrolled Group",render:()=>e.jsxs(p,{type:"single",defaultValue:"growth",label:"Plan size",children:[e.jsx(s,{value:"starter",children:"Starter"}),e.jsx(s,{value:"growth",children:"Growth"}),e.jsx(s,{value:"enterprise",children:"Enterprise"})]}),parameters:{controls:{disable:!0}}},I={render:()=>e.jsxs(b,{columns:5,justifyItems:"center",gap:"20",children:[e.jsx(s,{size:"sm",children:"sm Chip"}),e.jsx(s,{size:"sm",before:e.jsx(n,{name:"hash"}),children:"sm Chip"}),e.jsx(s,{size:"sm",after:e.jsx(n,{name:"read-doc"}),children:"sm Chip"}),e.jsx(s,{size:"sm",before:e.jsx(m,{src:d.user1,name:"John Doe"}),children:"sm Chip"}),e.jsx(s,{size:"sm",after:e.jsx(o,{count:3}),children:"sm Chip"}),e.jsx(s,{size:"md",children:"md Chip"}),e.jsx(s,{size:"md",before:e.jsx(n,{name:"hash"}),children:"md Chip"}),e.jsx(s,{size:"md",after:e.jsx(n,{name:"read-doc"}),children:"md Chip"}),e.jsx(s,{size:"md",before:e.jsx(m,{src:d.user1,name:"John Doe"}),children:"md Chip"}),e.jsx(s,{size:"md",after:e.jsx(o,{count:3}),children:"md Chip"}),e.jsx(s,{size:"lg",children:"lg Chip"}),e.jsx(s,{size:"lg",before:e.jsx(n,{name:"hash"}),children:"lg Chip"}),e.jsx(s,{size:"lg",after:e.jsx(n,{name:"read-doc"}),children:"lg Chip"}),e.jsx(s,{size:"lg",before:e.jsx(m,{src:d.user1,name:"John Doe"}),children:"lg Chip"}),e.jsx(s,{size:"lg",after:e.jsx(o,{count:3}),children:"lg Chip"})]})},j=()=>e.jsxs(b,{w:"full",h:"full",position:"relative",placeContent:"center",alignItems:"center",justifyItems:"center",gap:"16",children:[e.jsxs(Ys,{justifyContent:"center",children:[e.jsx(s,{size:{base:"xl",xs:"lg",sm:"md",md:"sm"},before:e.jsx(n,{name:"hash"}),children:"Chip"}),e.jsx(s,{size:{base:"xl",xs:"lg",sm:"md",md:"sm"},before:e.jsx(m,{src:d.user1,name:"John Doe"}),children:"Chip"}),e.jsx(s,{size:{base:"xl",xs:"lg",sm:"md",md:"sm"},after:e.jsx(o,{count:3}),children:"Chip"})]}),e.jsxs(i,{textAlign:"center",textStyle:"mono.sm",_after:{display:"inline",content:{base:'"xl"',xs:'"lg"',sm:'"md"',md:'"sm"'},color:"text.bold",fontWeight:"bold"},children:["Size:"," "]}),e.jsx(Ks,{})]}),D={render:()=>e.jsxs(r,{gap:"4",flexDir:"column",alignItems:"center",children:[e.jsxs(r,{gap:"4",alignItems:"center",children:[e.jsx(s,{size:"sm",before:e.jsx(o,{count:2,variant:"success"}),children:"Small"}),e.jsx(s,{before:e.jsx(o,{count:30,variant:"neutral"}),children:"Medium"}),e.jsx(s,{size:"lg",before:e.jsx(o,{count:100}),children:"Large"}),e.jsx(s,{size:"xl",before:e.jsx(o,{count:100}),children:"XLarge"})]}),e.jsxs(r,{gap:"4",alignItems:"center",children:[e.jsx(s,{size:"sm",before:e.jsx(m,{src:d.user1,name:"John Doe"}),children:"Small"}),e.jsx(s,{before:e.jsx(m,{src:d.user1,name:"John Doe"}),children:"Medium"}),e.jsx(s,{size:"lg",before:e.jsx(m,{src:d.user1,name:"John Doe"}),children:"Large"}),e.jsx(s,{size:"xl",before:e.jsx(m,{src:d.user1,name:"John Doe"}),children:"XLarge"})]}),e.jsxs(r,{gap:"4",alignItems:"center",children:[e.jsx(s,{size:"sm",before:e.jsx(n,{name:"file"}),children:"Small"}),e.jsx(s,{before:e.jsx(n,{name:"file"}),children:"Medium"}),e.jsx(s,{size:"lg",before:e.jsx(n,{name:"file"}),children:"Large"}),e.jsx(s,{size:"xl",before:e.jsx(n,{name:"file"}),children:"XLarge"})]})]})},y={render:()=>e.jsxs(r,{gap:"4",flexDir:"column",alignItems:"center",children:[e.jsxs(r,{gap:"4",alignItems:"center",children:[e.jsx(s,{size:"sm",after:e.jsx(o,{count:2,variant:"success"}),children:"Small"}),e.jsx(s,{after:e.jsx(o,{count:30,variant:"neutral"}),children:"Medium"}),e.jsx(s,{size:"lg",after:e.jsx(o,{count:100}),children:"Large"}),e.jsx(s,{size:"xl",after:e.jsx(o,{count:100}),children:"XLarge"})]}),e.jsxs(r,{gap:"4",alignItems:"center",children:[e.jsx(s,{size:"sm",after:e.jsx(m,{src:d.user1,name:"John Doe"}),children:"Small"}),e.jsx(s,{after:e.jsx(m,{src:d.user1,name:"John Doe"}),children:"Medium"}),e.jsx(s,{size:"lg",after:e.jsx(m,{src:d.user1,name:"John Doe"}),children:"Large"}),e.jsx(s,{size:"xl",after:e.jsx(m,{src:d.user1,name:"John Doe"}),children:"XLarge"})]}),e.jsxs(r,{gap:"4",alignItems:"center",children:[e.jsx(s,{size:"sm",after:e.jsx(n,{name:"file"}),children:"Small"}),e.jsx(s,{after:e.jsx(n,{name:"file"}),children:"Medium"}),e.jsx(s,{size:"lg",after:e.jsx(n,{name:"file"}),children:"Large"}),e.jsx(s,{size:"xl",after:e.jsx(n,{name:"file"}),children:"XLarge"})]})]})},z={render:()=>e.jsxs(r,{gap:"4",alignItems:"center",children:[e.jsx(s,{size:"sm",before:e.jsx(n,{name:"user"}),after:e.jsx(o,{count:2}),children:"Small"}),e.jsx(s,{before:e.jsx(n,{name:"user"}),after:e.jsx(o,{count:2}),children:"Medium"}),e.jsx(s,{size:"lg",before:e.jsx(n,{name:"user"}),after:e.jsx(o,{count:2}),children:"Large"}),e.jsx(s,{size:"xl",before:e.jsx(n,{name:"user"}),after:e.jsx(o,{count:2}),children:"XLarge"})]})},w={render:()=>e.jsxs(r,{gap:"4",flexDir:"column",alignItems:"center",children:[e.jsxs(r,{gap:"4",alignItems:"center",children:[e.jsx(s,{before:e.jsx(n,{name:"hash"}),children:"Icon Slot"}),e.jsx(s,{after:e.jsx(o,{count:3,variant:"success"}),children:"Badge Slot"}),e.jsx(s,{before:e.jsx(m,{src:d.user2,name:"Jane Doe"}),after:e.jsx(n,{name:"x"}),children:"Avatar Slot"})]}),e.jsxs(r,{gap:"4",alignItems:"center",children:[e.jsx(s,{before:e.jsx(n,{name:"hash"}),children:"Alias Before"}),e.jsx(s,{after:e.jsx(o,{count:4,variant:"warning"}),children:"Alias After"})]})]})},F={render:()=>e.jsxs(b,{gridTemplateColumns:"auto auto",gap:"24",children:[e.jsx(i,{textStyle:"mono.xs",children:"Default:"}),e.jsx(s,{before:e.jsx(n,{name:"file"}),children:"Interactive"}),e.jsx(i,{textStyle:"mono.xs",children:"Disabled:"}),e.jsx(s,{disabled:!0,before:e.jsx(n,{name:"file"}),children:"Disabled"}),e.jsx(i,{textStyle:"mono.xs",children:"Loading:"}),e.jsx(s,{loading:!0,before:e.jsx(n,{name:"file"}),children:"Loading..."}),e.jsx(i,{textStyle:"mono.xs",children:"Deleted:"}),e.jsx(s,{deleted:!0,before:e.jsx(n,{name:"file"}),children:"Deleted Item"})]})},E={render:()=>e.jsxs(r,{flexDir:"column",gap:"12",children:[e.jsx(i,{textStyle:"mono.xs",children:"Chips can be interactive buttons:"}),e.jsxs(r,{gap:"2",children:[e.jsx(s,{onClick:()=>alert("Clicked!"),children:"Click Me"}),e.jsx(s,{before:e.jsx(n,{name:"plus"}),onClick:()=>alert("Add clicked!"),children:"Add Item"}),e.jsx(s,{after:e.jsx(n,{name:"x"}),onClick:()=>alert("Remove clicked!"),children:"Remove"})]})]})},A={render:()=>e.jsxs(r,{flexDir:"column",gap:"12",children:[e.jsxs(r,{flexDir:"column",gap:"2",children:[e.jsx(i,{textStyle:"mono.xs",children:"No Content Before/After"}),e.jsxs(r,{gap:"4",alignItems:"center",children:[e.jsx(s,{size:"sm",children:"Small"}),e.jsx(s,{children:"Medium"}),e.jsx(s,{size:"lg",children:"Large"}),e.jsx(s,{size:"xl",children:"Extra Large"})]})]}),e.jsxs(r,{flexDir:"column",gap:"2",children:[e.jsx(i,{textStyle:"mono.xs",children:"With Before"}),e.jsxs(r,{gap:"4",alignItems:"center",children:[e.jsx(s,{size:"sm",before:e.jsx(n,{name:"file"}),children:"Small"}),e.jsx(s,{before:e.jsx(n,{name:"file"}),children:"Medium"}),e.jsx(s,{size:"lg",before:e.jsx(n,{name:"file"}),children:"Large"}),e.jsx(s,{size:"xl",before:e.jsx(n,{name:"file"}),children:"Extra Large"})]})]}),e.jsxs(r,{flexDir:"column",gap:"2",children:[e.jsx(i,{textStyle:"mono.xs",children:"With After"}),e.jsxs(r,{gap:"4",alignItems:"center",children:[e.jsx(s,{size:"sm",after:e.jsx(n,{name:"x"}),children:"Small"}),e.jsx(s,{after:e.jsx(n,{name:"x"}),children:"Medium"}),e.jsx(s,{size:"lg",after:e.jsx(n,{name:"x"}),children:"Large"}),e.jsx(s,{size:"xl",after:e.jsx(n,{name:"x"}),children:"Extra Large"})]})]}),e.jsxs(r,{flexDir:"column",gap:"2",children:[e.jsx(i,{textStyle:"mono.xs",children:"With Before and After"}),e.jsxs(r,{gap:"4",alignItems:"center",children:[e.jsx(s,{size:"sm",before:e.jsx(n,{name:"user"}),after:e.jsx(n,{name:"x"}),children:"Small"}),e.jsx(s,{before:e.jsx(n,{name:"user"}),after:e.jsx(n,{name:"x"}),children:"Medium"}),e.jsx(s,{size:"lg",before:e.jsx(n,{name:"user"}),after:e.jsx(n,{name:"x"}),children:"Large"}),e.jsx(s,{size:"xl",before:e.jsx(n,{name:"user"}),after:e.jsx(n,{name:"x"}),children:"Extra Large"})]})]})]})},T={render:()=>e.jsxs(g,{maxW:"lg",alignItems:"stretch",gap:"8",children:[e.jsxs(i,{children:["Chips can appear inline within text, like tagging"," ",e.jsx(s,{before:e.jsx(n,{name:"user"}),children:"John Doe"})," in a conversation. referencing ",e.jsx(s,{before:e.jsx(n,{name:"file"}),children:"Project Plan"})," in your notes."]}),e.jsxs(i,{children:["Chips with more than two items collapse to a count and should stay on the same baseline as plain chips: ",e.jsx(s,{children:"Design"})," ",e.jsx(s,{items:["Design","Engineering","Product"]})," and"," ",e.jsx(s,{before:e.jsx(n,{name:"user"}),items:["Ann","Bob","Cy","Di"]})," ",e.jsx(s,{children:"Design, Engineering"})," sit in one line of text."]})]})},L={render:()=>e.jsxs(r,{flexDir:"column",gap:"20",children:[e.jsxs(r,{flexDir:"column",gap:"2",children:[e.jsx(i,{textStyle:"mono.xs",children:"Filter Tags"}),e.jsxs(r,{gap:"4",flexWrap:"wrap",children:[e.jsx(s,{after:e.jsx(n,{name:"x"}),children:"React"}),e.jsx(s,{after:e.jsx(n,{name:"x"}),children:"TypeScript"}),e.jsx(s,{after:e.jsx(n,{name:"x"}),children:"Panda CSS"}),e.jsx(s,{before:e.jsx(n,{name:"plus"}),children:"Add Filter"})]})]}),e.jsxs(r,{flexDir:"column",gap:"2",children:[e.jsx(i,{textStyle:"mono.xs",children:"Categories"}),e.jsxs(r,{gap:"4",flexWrap:"wrap",children:[e.jsx(s,{before:e.jsx(n,{name:"file"}),children:"Documentation"}),e.jsx(s,{before:e.jsx(n,{name:"calendar"}),children:"Events"}),e.jsx(s,{before:e.jsx(n,{name:"user"}),children:"People"})]})]}),e.jsxs(r,{flexDir:"column",gap:"2",children:[e.jsx(i,{textStyle:"mono.xs",children:"Actions"}),e.jsxs(r,{gap:"4",flexWrap:"wrap",children:[e.jsx(s,{before:e.jsx(n,{name:"plus"}),children:"New Item"}),e.jsx(s,{before:e.jsx(n,{name:"check"}),children:"Approve"}),e.jsx(s,{deleted:!0,children:"Archived"})]})]})]})},Zs=()=>{const[t,a]=u.useState(["React","TypeScript","Panda CSS","Vite"]),l=c=>{a(Y=>Y.filter(Z=>Z!==c))};return e.jsxs(r,{flexDir:"column",gap:"12",children:[e.jsx(i,{textStyle:"mono.xs",children:"Click the X to dismiss tags:"}),e.jsx(r,{gap:"4",flexWrap:"wrap",children:t.map(c=>e.jsx(s,{dismissable:!0,onDismiss:()=>l(c),children:c},c))}),t.length===0&&e.jsx(i,{color:"text.subtlest",children:"All tags dismissed!"})]})},W={render:()=>e.jsxs(r,{gap:"4",alignItems:"center",children:[e.jsx(s,{items:["Design","Engineering"]}),e.jsx(s,{items:["Design","Engineering","Product"]}),e.jsx(s,{dismissable:!0,onDismiss:()=>{},items:["Design","Engineering","Product","Support","Sales"]})]})},k={render:()=>e.jsxs(g,{gap:"8",alignItems:"flex-start",children:[e.jsxs(i,{textStyle:"mono.xs",children:["`children` stays a single string. Interpolate with a template string; mixed JSX text such as `Order ","{id}","` is a type error. Use `items` for lists."]}),e.jsx(s,{children:"Order 1042"})]})},B={render:()=>e.jsxs(g,{gap:"8",alignItems:"flex-start",children:[e.jsx(i,{textStyle:"mono.xs",children:"An empty `items` list renders nothing: the chip between the two labels below is absent, with no empty pill or dismiss button."}),e.jsxs(r,{gap:"4",alignItems:"center",children:[e.jsx(s,{children:"Before"}),e.jsx(s,{items:[],dismissable:!0,onDismiss:()=>{}}),e.jsx(s,{children:"After"})]})]})},x=["Design","Engineering","Product","Support","Sales"],h=({label:t,children:a})=>e.jsxs(g,{gap:"4",alignItems:"flex-start",children:[e.jsx(i,{textStyle:"mono.xs",children:t}),a]}),O={render:()=>e.jsxs(g,{gap:"12",alignItems:"flex-start",children:[e.jsx(i,{textStyle:"mono.xs",children:"Overflow is by item count, not width. Hover or focus each chip to see the full list. Disabled and loading chips do not open the tooltip or take focus. Static chips have no visual styling for deleted, error or invalid, so those look like a plain chip."}),e.jsxs(r,{gap:"12",alignItems:"flex-end",flexWrap:"wrap",children:[e.jsx(h,{label:"size sm",children:e.jsx(s,{size:"sm",items:x})}),e.jsx(h,{label:"size md",children:e.jsx(s,{size:"md",items:x})}),e.jsx(h,{label:"size lg",children:e.jsx(s,{size:"lg",items:x})})]}),e.jsxs(r,{gap:"12",alignItems:"flex-end",flexWrap:"wrap",children:[e.jsx(h,{label:"before",children:e.jsx(s,{before:e.jsx(n,{name:"user"}),items:x})}),e.jsx(h,{label:"after",children:e.jsx(s,{after:e.jsx(n,{name:"file"}),items:x})}),e.jsx(h,{label:"before + dismissable",children:e.jsx(s,{before:e.jsx(n,{name:"user"}),dismissable:!0,onDismiss:()=>{},items:x})})]}),e.jsxs(r,{gap:"12",alignItems:"flex-end",flexWrap:"wrap",children:[e.jsx(h,{label:"disabled (no tooltip, not focusable)",children:e.jsx(s,{disabled:!0,items:x})}),e.jsx(h,{label:"loading (no tooltip, not focusable)",children:e.jsx(s,{loading:!0,items:x})}),e.jsx(h,{label:"deleted (no static styling)",children:e.jsx(s,{deleted:!0,items:x})}),e.jsx(h,{label:"error (no static styling)",children:e.jsx(s,{error:!0,items:x})}),e.jsx(h,{label:"invalid (no static styling)",children:e.jsx(s,{invalid:!0,items:x})})]}),e.jsxs(r,{gap:"12",alignItems:"flex-end",flexWrap:"wrap",children:[e.jsx(h,{label:"onClick (focus via button)",children:e.jsx(s,{onClick:()=>{},items:x})}),e.jsx(h,{label:"dismissable + custom dismissLabel",children:e.jsx(s,{dismissLabel:"Clear all teams",dismissable:!0,onDismiss:()=>{},items:x})})]})]})},G={render:()=>e.jsxs(g,{gap:"12",alignItems:"flex-start",children:[e.jsx(i,{textStyle:"mono.xs",children:"Arrow keys still move between selectable chips, and the tooltip opens on focus for overflowing ones."}),e.jsxs(p,{type:"single",defaultValue:"all",label:"Team filter",children:[e.jsx(s,{value:"all",children:"All"}),e.jsx(s,{value:"core",items:["Design","Engineering","Product"]}),e.jsx(s,{value:"go",items:["Support","Sales"]})]}),e.jsxs(p,{type:"multi",defaultValue:["core"],label:"Team filter",children:[e.jsx(s,{value:"core",items:["Design","Engineering","Product"]}),e.jsx(s,{value:"go",items:["Support","Sales","Success","Ops"]})]})]})},ee=["Design","Engineering","Product","Support","Sales"],en=()=>{const[t,a]=u.useState(2),l=ee.slice(0,t);return e.jsxs(g,{gap:"12",alignItems:"flex-start",children:[e.jsx(i,{children:"Tab to each chip: static and dismiss-only chips become focusable at three or more items, show a visible focus ring, and open the tooltip. Escape closes it while the ring stays. For the clickable chip, change the count with the buttons (Shift+Tab back to the chip); focus should stay on it when crossing three items."}),e.jsxs(r,{gap:"8",alignItems:"center",children:[e.jsx(s,{onClick:()=>{},items:l}),e.jsx(s,{items:l}),e.jsx(s,{dismissable:!0,onDismiss:()=>{},items:l})]}),e.jsxs(r,{gap:"8",children:[e.jsx(se,{onClick:()=>a(c=>Math.max(1,c-1)),disabled:t<=1,children:"Remove item"}),e.jsx(se,{onClick:()=>a(c=>Math.min(ee.length,c+1)),disabled:t>=ee.length,children:"Add item"})]})]})},M={render:()=>e.jsx(en,{})},J={render:()=>e.jsx(Zs,{})},V={render:()=>e.jsxs(r,{gap:"4",children:[e.jsx(s,{dismissable:!0,before:e.jsx(n,{name:"file"}),onDismiss:()=>{},children:"Document"}),e.jsx(s,{dismissable:!0,before:e.jsx(n,{name:"user"}),onDismiss:()=>{},children:"Person"}),e.jsx(s,{dismissable:!0,before:e.jsx(n,{name:"calendar"}),onDismiss:()=>{},children:"Event"})]})},P={render:()=>e.jsxs(r,{flexDir:"column",gap:"12",children:[e.jsx(i,{textStyle:"mono.xs",children:"Body clicks stay on the chip action. The trailing X is the only dismiss target."}),e.jsxs(r,{gap:"4",flexWrap:"wrap",children:[e.jsx(s,{dismissable:!0,before:e.jsx(n,{name:"file"}),onClick:()=>alert("Opened document"),onDismiss:()=>alert("Removed document"),children:"Document"}),e.jsx(s,{dismissable:!0,before:e.jsx(n,{name:"user"}),onClick:()=>alert("Opened person"),onDismiss:()=>alert("Removed person"),children:"Person"})]})]})},R={render:()=>e.jsxs(b,{gridTemplateColumns:"auto auto",gap:"24",children:[e.jsx(i,{textStyle:"mono.xs",children:"Default:"}),e.jsx(s,{dismissable:!0,onDismiss:()=>{},children:"Default"}),e.jsx(i,{textStyle:"mono.xs",children:"Disabled:"}),e.jsx(s,{dismissable:!0,disabled:!0,onDismiss:()=>{},children:"Disabled"}),e.jsx(i,{textStyle:"mono.xs",children:"Loading:"}),e.jsx(s,{dismissable:!0,loading:!0,onDismiss:()=>{},children:"Loading..."}),e.jsx(i,{textStyle:"mono.xs",children:"Deleted:"}),e.jsx(s,{dismissable:!0,deleted:!0,onDismiss:()=>{},children:"Deleted Item"})]})},X={render:()=>e.jsxs(g,{gap:"12",children:[e.jsx(s,{dismissable:!0,dismissLabel:"Remove assignee John Doe",before:e.jsx(m,{src:d.user1,name:"John Doe"}),onDismiss:()=>{},children:"John Doe"}),e.jsx(i,{textStyle:"mono.xs",children:'Dismiss button: aria-label="Remove assignee John Doe"'})]})},Hs=()=>{const[t,a]=u.useState("");return e.jsxs(r,{flexDir:"column",gap:"12",children:[e.jsx(i,{textStyle:"mono.md",children:"Select one size:"}),e.jsxs(p,{type:"single",value:t,onChange:l=>a(l),label:"Size selection",children:[e.jsx(s,{value:"sm",children:"Small"}),e.jsx(s,{value:"md",children:"Medium"}),e.jsx(s,{value:"lg",children:"Large"}),e.jsx(s,{value:"xl",children:"X-Large"})]}),e.jsxs(i,{textStyle:"mono.xs",children:["Selected: ",t]})]})},N={render:()=>e.jsx(Hs,{})},sn=()=>{const[t,a]=u.useState("grid");return e.jsxs(r,{flexDir:"column",gap:"12",children:[e.jsx(i,{textStyle:"mono.md",children:"Select a view:"}),e.jsxs(p,{type:"single",value:t,onChange:l=>a(l),label:"View selection",children:[e.jsx(s,{value:"list",before:e.jsx(n,{name:"menu"}),children:"List"}),e.jsx(s,{value:"grid",before:e.jsx(n,{name:"view-grid"}),children:"Grid"}),e.jsx(s,{value:"calendar",before:e.jsx(n,{name:"calendar"}),children:"Calendar"})]}),e.jsxs(i,{textStyle:"mono.xs",children:["Selected: ",t]})]})},_={render:()=>e.jsx(sn,{})},$s=()=>{const[t,a]=u.useState(["react","typescript"]);return e.jsxs(r,{flexDir:"column",gap:"12",children:[e.jsx(i,{textStyle:"mono.md",children:"Select your skills (check icon appears when selected):"}),e.jsxs(p,{type:"multi",value:t,onChange:l=>a(l),label:"Skills selection",children:[e.jsx(s,{value:"react",children:"React"}),e.jsx(s,{value:"typescript",children:"TypeScript"}),e.jsx(s,{value:"vue",children:"Vue"}),e.jsx(s,{value:"angular",children:"Angular"}),e.jsx(s,{value:"svelte",children:"Svelte"})]}),e.jsxs(i,{textStyle:"mono.xs",children:["Selected: ",t.join(", ")||"None"]})]})},U={render:()=>e.jsx($s,{})},nn=()=>{const[t,a]=u.useState(["docs"]);return e.jsxs(r,{flexDir:"column",gap:"12",children:[e.jsx(i,{textStyle:"mono.md",children:"Filter by category:"}),e.jsxs(p,{type:"multi",value:t,onChange:l=>a(l),label:"Category filter",children:[e.jsx(s,{value:"docs",before:e.jsx(n,{name:"file"}),children:"Documents"}),e.jsx(s,{value:"images",before:e.jsx(n,{name:"image"}),children:"Images"}),e.jsx(s,{value:"videos",before:e.jsx(n,{name:"video"}),children:"Videos"}),e.jsx(s,{value:"audio",before:e.jsx(n,{name:"broadcast"}),children:"Audio"})]}),e.jsxs(i,{textStyle:"mono.xs",children:["Selected: ",t.join(", ")||"None"]})]})},K={render:()=>e.jsx(nn,{})},H={render:()=>e.jsxs(r,{flexDir:"column",gap:"40",children:[e.jsxs(r,{flexDir:"column",gap:"2",children:[e.jsx(i,{textStyle:"mono.md",color:"text",fontWeight:"bold",children:"Single Select (arrow keys navigate & select):"}),e.jsx(Hs,{})]}),e.jsxs(r,{flexDir:"column",gap:"2",children:[e.jsx(i,{textStyle:"mono.md",color:"text",fontWeight:"bold",children:"Multi Select (tab between, space/enter toggles):"}),e.jsx($s,{})]})]})},rn=()=>{const[t,a]=u.useState("option-a"),[l,c]=u.useState("option-a"),[Y,Z]=u.useState("option-a"),[Qs,qs]=u.useState("option-a");return e.jsxs(r,{flexDir:"column",gap:"24",children:[e.jsxs(r,{flexDir:"column",gap:"2",children:[e.jsx(i,{textStyle:"mono.xs",children:"Small"}),e.jsxs(p,{type:"single",size:"sm",value:t,onChange:f=>a(f),label:"Small chip group",children:[e.jsx(s,{value:"option-a",children:"Option A"}),e.jsx(s,{value:"option-b",children:"Option B"}),e.jsx(s,{value:"option-c",children:"Option C"})]})]}),e.jsxs(r,{flexDir:"column",gap:"2",children:[e.jsx(i,{textStyle:"mono.xs",children:"Medium"}),e.jsxs(p,{type:"single",size:"md",value:l,onChange:f=>c(f),label:"Medium chip group",children:[e.jsx(s,{value:"option-a",children:"Option A"}),e.jsx(s,{value:"option-b",children:"Option B"}),e.jsx(s,{value:"option-c",children:"Option C"})]})]}),e.jsxs(r,{flexDir:"column",gap:"2",children:[e.jsx(i,{textStyle:"mono.xs",children:"Large"}),e.jsxs(p,{type:"single",size:"lg",value:Y,onChange:f=>Z(f),label:"Large chip group",children:[e.jsx(s,{value:"option-a",children:"Option A"}),e.jsx(s,{value:"option-b",children:"Option B"}),e.jsx(s,{value:"option-c",children:"Option C"})]})]}),e.jsxs(r,{flexDir:"column",gap:"2",children:[e.jsx(i,{textStyle:"mono.xs",children:"Extra Large"}),e.jsxs(p,{type:"single",size:"xl",value:Qs,onChange:f=>qs(f),label:"Extra Large chip group",children:[e.jsx(s,{value:"option-a",children:"Option A"}),e.jsx(s,{value:"option-b",children:"Option B"}),e.jsx(s,{value:"option-c",children:"Option C"})]})]})]})},$={render:()=>e.jsx(rn,{})},C=()=>{const[t,a]=u.useState("assignee");return e.jsxs(b,{w:"full",h:"full",position:"relative",placeContent:"center",alignItems:"center",justifyItems:"center",gap:"16",children:[e.jsxs(p,{type:"single",size:{base:"xl",xs:"lg",sm:"md",md:"sm"},value:t,onChange:l=>a(l),label:"Responsive chip group",children:[e.jsx(s,{value:"assignee",before:e.jsx(m,{name:"John Doe"}),children:"Assignee"}),e.jsx(s,{value:"mentions",before:e.jsx(n,{name:"hash"}),children:"Mentions"}),e.jsx(s,{value:"alerts",after:e.jsx(o,{count:3}),children:"Alerts"})]}),e.jsxs(i,{textAlign:"center",textStyle:"mono.sm",_after:{display:"inline",content:{base:'"xl"',xs:'"lg"',sm:'"md"',md:'"sm"'},color:"text.bold",fontWeight:"bold"},children:["Group size:"," "]}),e.jsx(Ks,{})]})},tn=()=>{const[t,a]=u.useState("active");return e.jsxs(r,{flexDir:"column",gap:"12",children:[e.jsx(i,{textStyle:"mono.md",children:"Individual chips can be disabled within a group:"}),e.jsxs(p,{type:"single",value:t,onChange:l=>a(l),label:"Options with disabled",children:[e.jsx(s,{value:"active",children:"Active"}),e.jsx(s,{value:"pending",children:"Pending"}),e.jsx(s,{value:"unavailable",disabled:!0,children:"Unavailable"}),e.jsx(s,{value:"archived",children:"Archived"})]}),e.jsxs(i,{textStyle:"mono.xs",children:["Selected: ",t]})]})},Q={render:()=>e.jsx(tn,{})},an=()=>{const[t,a]=u.useState(["react","typescript"]),l=["React","TypeScript","JavaScript","Vue","Angular","Svelte","Next.js","Remix","Astro","Node.js","Python","Go","Rust","GraphQL","REST","Docker"];return e.jsxs(r,{flexDir:"column",gap:"12",maxW:"md",children:[e.jsx(i,{textStyle:"mono.md",children:"ChipGroup wraps when chips exceed container width:"}),e.jsx(p,{type:"multi",value:t,onChange:c=>a(c),label:"Skills selection",children:l.map(c=>e.jsx(s,{value:c.toLowerCase(),children:c},c.toLowerCase()))}),e.jsxs(i,{textStyle:"mono.xs",children:["Selected: ",t.join(", ")||"None"]})]})},q={render:()=>e.jsx(an,{})};j.__docgenInfo={description:"",methods:[],displayName:"ConditionalBreakpoints"};C.__docgenInfo={description:"",methods:[],displayName:"ChipGroupResponsiveSizes"};var ne,re,ie;S.parameters={...S.parameters,docs:{...(ne=S.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => <Chip>Default</Chip>
}`,...(ie=(re=S.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var te,ae,le;v.parameters={...v.parameters,docs:{...(te=v.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(le=(ae=v.parameters)==null?void 0:ae.docs)==null?void 0:le.source}}};var oe,ce,me;I.parameters={...I.parameters,docs:{...(oe=I.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(me=(ce=I.parameters)==null?void 0:ce.docs)==null?void 0:me.source}}};var pe,de,xe;j.parameters={...j.parameters,docs:{...(pe=j.parameters)==null?void 0:pe.docs,source:{originalSource:`() => {
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
}`,...(xe=(de=j.parameters)==null?void 0:de.docs)==null?void 0:xe.source}}};var he,ue,ge;D.parameters={...D.parameters,docs:{...(he=D.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(ge=(ue=D.parameters)==null?void 0:ue.docs)==null?void 0:ge.source}}};var fe,je,Ce;y.parameters={...y.parameters,docs:{...(fe=y.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(Ce=(je=y.parameters)==null?void 0:je.docs)==null?void 0:Ce.source}}};var be,Se,ve;z.parameters={...z.parameters,docs:{...(be=z.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(ve=(Se=z.parameters)==null?void 0:Se.docs)==null?void 0:ve.source}}};var Ie,De,ye;w.parameters={...w.parameters,docs:{...(Ie=w.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(ye=(De=w.parameters)==null?void 0:De.docs)==null?void 0:ye.source}}};var ze,we,Fe;F.parameters={...F.parameters,docs:{...(ze=F.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
}`,...(Fe=(we=F.parameters)==null?void 0:we.docs)==null?void 0:Fe.source}}};var Ee,Ae,Te;E.parameters={...E.parameters,docs:{...(Ee=E.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(Te=(Ae=E.parameters)==null?void 0:Ae.docs)==null?void 0:Te.source}}};var Le,We,ke;A.parameters={...A.parameters,docs:{...(Le=A.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(ke=(We=A.parameters)==null?void 0:We.docs)==null?void 0:ke.source}}};var Be,Oe,Ge;T.parameters={...T.parameters,docs:{...(Be=T.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
        <Chip items={['Design', 'Engineering', 'Product']} /> and{' '}
        <Chip before={<Icon name="user" />} items={['Ann', 'Bob', 'Cy', 'Di']} />{' '}
        <Chip>Design, Engineering</Chip> sit in one line of text.
      </Text>
    </VStack>
}`,...(Ge=(Oe=T.parameters)==null?void 0:Oe.docs)==null?void 0:Ge.source}}};var Me,Je,Ve;L.parameters={...L.parameters,docs:{...(Me=L.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
}`,...(Ve=(Je=L.parameters)==null?void 0:Je.docs)==null?void 0:Ve.source}}};var Pe,Re,Xe;W.parameters={...W.parameters,docs:{...(Pe=W.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  render: () => <Flex gap="4" alignItems="center">
      <Chip items={['Design', 'Engineering']} />
      <Chip items={['Design', 'Engineering', 'Product']} />
      <Chip dismissable onDismiss={() => {}} items={['Design', 'Engineering', 'Product', 'Support', 'Sales']} />
    </Flex>
}`,...(Xe=(Re=W.parameters)==null?void 0:Re.docs)==null?void 0:Xe.source}}};var Ne,_e,Ue;k.parameters={...k.parameters,docs:{...(Ne=k.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  render: () => {
    const orderId = 1042;
    return <VStack gap="8" alignItems="flex-start">
        <Text textStyle="mono.xs">
          \`children\` stays a single string. Interpolate with a template string;
          mixed JSX text such as \`Order {'{id}'}\` is a type error. Use \`items\`
          for lists.
        </Text>
        <Chip>{\`Order \${orderId}\`}</Chip>
      </VStack>;
  }
}`,...(Ue=(_e=k.parameters)==null?void 0:_e.docs)==null?void 0:Ue.source}}};var Ke,He,$e;B.parameters={...B.parameters,docs:{...(Ke=B.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  render: () => <VStack gap="8" alignItems="flex-start">
      <Text textStyle="mono.xs">
        An empty \`items\` list renders nothing: the chip between the two labels
        below is absent, with no empty pill or dismiss button.
      </Text>
      <Flex gap="4" alignItems="center">
        <Chip>Before</Chip>
        <Chip items={[]} dismissable onDismiss={() => {}} />
        <Chip>After</Chip>
      </Flex>
    </VStack>
}`,...($e=(He=B.parameters)==null?void 0:He.docs)==null?void 0:$e.source}}};var Qe,qe,Ye;O.parameters={...O.parameters,docs:{...(Qe=O.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
  render: () => <VStack gap="12" alignItems="flex-start">
      <Text textStyle="mono.xs">
        Overflow is by item count, not width. Hover or focus each chip to see
        the full list. Disabled and loading chips do not open the tooltip or
        take focus. Static chips have no visual styling for deleted, error or
        invalid, so those look like a plain chip.
      </Text>
      <Flex gap="12" alignItems="flex-end" flexWrap="wrap">
        <OverflowExample label="size sm">
          <Chip size="sm" items={overflowItems} />
        </OverflowExample>
        <OverflowExample label="size md">
          <Chip size="md" items={overflowItems} />
        </OverflowExample>
        <OverflowExample label="size lg">
          <Chip size="lg" items={overflowItems} />
        </OverflowExample>
      </Flex>
      <Flex gap="12" alignItems="flex-end" flexWrap="wrap">
        <OverflowExample label="before">
          <Chip before={<Icon name="user" />} items={overflowItems} />
        </OverflowExample>
        <OverflowExample label="after">
          <Chip after={<Icon name="file" />} items={overflowItems} />
        </OverflowExample>
        <OverflowExample label="before + dismissable">
          <Chip before={<Icon name="user" />} dismissable onDismiss={() => {}} items={overflowItems} />
        </OverflowExample>
      </Flex>
      <Flex gap="12" alignItems="flex-end" flexWrap="wrap">
        <OverflowExample label="disabled (no tooltip, not focusable)">
          <Chip disabled items={overflowItems} />
        </OverflowExample>
        <OverflowExample label="loading (no tooltip, not focusable)">
          <Chip loading items={overflowItems} />
        </OverflowExample>
        <OverflowExample label="deleted (no static styling)">
          <Chip deleted items={overflowItems} />
        </OverflowExample>
        <OverflowExample label="error (no static styling)">
          <Chip error items={overflowItems} />
        </OverflowExample>
        <OverflowExample label="invalid (no static styling)">
          <Chip invalid items={overflowItems} />
        </OverflowExample>
      </Flex>
      <Flex gap="12" alignItems="flex-end" flexWrap="wrap">
        <OverflowExample label="onClick (focus via button)">
          <Chip onClick={() => {}} items={overflowItems} />
        </OverflowExample>
        <OverflowExample label="dismissable + custom dismissLabel">
          <Chip dismissLabel="Clear all teams" dismissable onDismiss={() => {}} items={overflowItems} />
        </OverflowExample>
      </Flex>
    </VStack>
}`,...(Ye=(qe=O.parameters)==null?void 0:qe.docs)==null?void 0:Ye.source}}};var Ze,es,ss;G.parameters={...G.parameters,docs:{...(Ze=G.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
  render: () => <VStack gap="12" alignItems="flex-start">
      <Text textStyle="mono.xs">
        Arrow keys still move between selectable chips, and the tooltip opens on
        focus for overflowing ones.
      </Text>
      <ChipGroup type="single" defaultValue="all" label="Team filter">
        <Chip value="all">All</Chip>
        <Chip value="core" items={['Design', 'Engineering', 'Product']} />
        <Chip value="go" items={['Support', 'Sales']} />
      </ChipGroup>
      <ChipGroup type="multi" defaultValue={['core']} label="Team filter">
        <Chip value="core" items={['Design', 'Engineering', 'Product']} />
        <Chip value="go" items={['Support', 'Sales', 'Success', 'Ops']} />
      </ChipGroup>
    </VStack>
}`,...(ss=(es=G.parameters)==null?void 0:es.docs)==null?void 0:ss.source}}};var ns,rs,is;M.parameters={...M.parameters,docs:{...(ns=M.parameters)==null?void 0:ns.docs,source:{originalSource:`{
  render: () => <OverflowFocusExample />
}`,...(is=(rs=M.parameters)==null?void 0:rs.docs)==null?void 0:is.source}}};var ts,as,ls;J.parameters={...J.parameters,docs:{...(ts=J.parameters)==null?void 0:ts.docs,source:{originalSource:`{
  render: () => <DismissableExample />
}`,...(ls=(as=J.parameters)==null?void 0:as.docs)==null?void 0:ls.source}}};var os,cs,ms;V.parameters={...V.parameters,docs:{...(os=V.parameters)==null?void 0:os.docs,source:{originalSource:`{
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
}`,...(ms=(cs=V.parameters)==null?void 0:cs.docs)==null?void 0:ms.source}}};var ps,ds,xs;P.parameters={...P.parameters,docs:{...(ps=P.parameters)==null?void 0:ps.docs,source:{originalSource:`{
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
}`,...(xs=(ds=P.parameters)==null?void 0:ds.docs)==null?void 0:xs.source}}};var hs,us,gs;R.parameters={...R.parameters,docs:{...(hs=R.parameters)==null?void 0:hs.docs,source:{originalSource:`{
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
}`,...(gs=(us=R.parameters)==null?void 0:us.docs)==null?void 0:gs.source}}};var fs,js,Cs;X.parameters={...X.parameters,docs:{...(fs=X.parameters)==null?void 0:fs.docs,source:{originalSource:`{
  render: () => <VStack gap="12">
      <Chip dismissable dismissLabel="Remove assignee John Doe" before={<Avatar src={sampleImages.user1} name="John Doe" />} onDismiss={() => {}}>
        John Doe
      </Chip>
      <Text textStyle="mono.xs">
        Dismiss button: aria-label="Remove assignee John Doe"
      </Text>
    </VStack>
}`,...(Cs=(js=X.parameters)==null?void 0:js.docs)==null?void 0:Cs.source}}};var bs,Ss,vs;N.parameters={...N.parameters,docs:{...(bs=N.parameters)==null?void 0:bs.docs,source:{originalSource:`{
  render: () => <SingleSelectExample />
}`,...(vs=(Ss=N.parameters)==null?void 0:Ss.docs)==null?void 0:vs.source}}};var Is,Ds,ys;_.parameters={..._.parameters,docs:{...(Is=_.parameters)==null?void 0:Is.docs,source:{originalSource:`{
  render: () => <SingleSelectWithBeforeExample />
}`,...(ys=(Ds=_.parameters)==null?void 0:Ds.docs)==null?void 0:ys.source}}};var zs,ws,Fs;U.parameters={...U.parameters,docs:{...(zs=U.parameters)==null?void 0:zs.docs,source:{originalSource:`{
  render: () => <MultiSelectExample />
}`,...(Fs=(ws=U.parameters)==null?void 0:ws.docs)==null?void 0:Fs.source}}};var Es,As,Ts;K.parameters={...K.parameters,docs:{...(Es=K.parameters)==null?void 0:Es.docs,source:{originalSource:`{
  render: () => <MultiSelectWithBeforeExample />
}`,...(Ts=(As=K.parameters)==null?void 0:As.docs)==null?void 0:Ts.source}}};var Ls,Ws,ks;H.parameters={...H.parameters,docs:{...(Ls=H.parameters)==null?void 0:Ls.docs,source:{originalSource:`{
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
}`,...(ks=(Ws=H.parameters)==null?void 0:Ws.docs)==null?void 0:ks.source}}};var Bs,Os,Gs;$.parameters={...$.parameters,docs:{...(Bs=$.parameters)==null?void 0:Bs.docs,source:{originalSource:`{
  render: () => <ChipGroupSizesExample />
}`,...(Gs=(Os=$.parameters)==null?void 0:Os.docs)==null?void 0:Gs.source}}};var Ms,Js,Vs;C.parameters={...C.parameters,docs:{...(Ms=C.parameters)==null?void 0:Ms.docs,source:{originalSource:`() => {
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
}`,...(Vs=(Js=C.parameters)==null?void 0:Js.docs)==null?void 0:Vs.source}}};var Ps,Rs,Xs;Q.parameters={...Q.parameters,docs:{...(Ps=Q.parameters)==null?void 0:Ps.docs,source:{originalSource:`{
  render: () => <ChipGroupWithDisabledExample />
}`,...(Xs=(Rs=Q.parameters)==null?void 0:Rs.docs)==null?void 0:Xs.source}}};var Ns,_s,Us;q.parameters={...q.parameters,docs:{...(Ns=q.parameters)==null?void 0:Ns.docs,source:{originalSource:`{
  render: () => <ChipGroupWrappingExample />
}`,...(Us=(_s=q.parameters)==null?void 0:_s.docs)==null?void 0:Us.source}}};const An=["Default","UncontrolledGroup","Sizes","ConditionalBreakpoints","WithBefore","WithAfter","WithBeforeAndAfter","WithSlots","States","Interactive","SizesMatrix","InlineWithText","UseCases","MultipleItems","InterpolatedLabel","EmptyItems","OverflowStates","OverflowInChipGroup","OverflowKeyboardAndFocus","Dismissable","DismissableWithBefore","DismissableWithPrimaryAction","DismissableStates","DismissableWithCustomLabel","SingleSelect","SingleSelectWithBefore","MultiSelect","MultiSelectWithBefore","KeyboardNavigation","ChipGroupSizes","ChipGroupResponsiveSizes","ChipGroupWithDisabled","ChipGroupWrapping"];export{C as ChipGroupResponsiveSizes,$ as ChipGroupSizes,Q as ChipGroupWithDisabled,q as ChipGroupWrapping,j as ConditionalBreakpoints,S as Default,J as Dismissable,R as DismissableStates,V as DismissableWithBefore,X as DismissableWithCustomLabel,P as DismissableWithPrimaryAction,B as EmptyItems,T as InlineWithText,E as Interactive,k as InterpolatedLabel,H as KeyboardNavigation,U as MultiSelect,K as MultiSelectWithBefore,W as MultipleItems,G as OverflowInChipGroup,M as OverflowKeyboardAndFocus,O as OverflowStates,N as SingleSelect,_ as SingleSelectWithBefore,I as Sizes,A as SizesMatrix,F as States,v as UncontrolledGroup,L as UseCases,y as WithAfter,D as WithBefore,z as WithBeforeAndAfter,w as WithSlots,An as __namedExportsOrder,En as default};
