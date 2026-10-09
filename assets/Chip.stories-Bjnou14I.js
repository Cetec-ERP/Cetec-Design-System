import{j as e,G as b,a as n,W as nn,T as i,F as r,V as g,r as d}from"./iframe-tdKZEmKy.js";import{A as m}from"./Avatar-C4b0puan.js";import{B as o}from"./Badge-SDRT5nS0.js";import{B as qs}from"./BreakpointIndicator-C3RKEknn.js";import{B as ne}from"./Button-C2EUBKCW.js";import{C as s}from"./Chip-DI3sDpXi.js";import{C as p}from"./ChipGroup-Ccu2QrAd.js";import"./preload-helper-Bx88jSaX.js";import"./mq.hook-D2RtN4wc.js";import"./breakpoints-DU_5_Zhy.js";import"./Tag-BU6uf1b-.js";import"./Spinner-D_DX6p-4.js";import"./FieldContext-B8DswrXU.js";import"./useControllableState-BtA8wFOW.js";const x={user1:"https://i.pravatar.cc/150?img=1",user2:"https://i.pravatar.cc/150?img=2"},zn={title:"Components/Chip",component:s,tags:["autodocs"],argTypes:{size:{control:"select",options:["md","sm","lg"],description:"Size variants of chip"},before:{control:!1,description:"Slot to render item before the label"},after:{control:!1,description:"Slot to render item after the label"},disabled:{control:"boolean",description:"Disables the chip interaction"},loading:{control:"boolean",description:"Shows loading state with pulse animation"},deleted:{control:"boolean",description:"Shows deleted state with strikethrough"},dismissable:{control:"boolean",description:"Renders a trailing remove button instead of whole-chip dismiss"},items:{control:"object",description:"List label used instead of children. More than two items show the first two plus +N and a tooltip with every item"},dismissLabel:{control:"text",description:"Accessible label for the trailing remove button"}},args:{children:"Chip Label",size:"md"},parameters:{layout:"centered"}},S={render:()=>e.jsx(s,{children:"Default"})},v={name:"Uncontrolled Group",render:()=>e.jsxs(p,{type:"single",defaultValue:"growth",label:"Plan size",children:[e.jsx(s,{value:"starter",children:"Starter"}),e.jsx(s,{value:"growth",children:"Growth"}),e.jsx(s,{value:"enterprise",children:"Enterprise"})]}),parameters:{controls:{disable:!0}}},I={render:()=>e.jsxs(b,{columns:5,justifyItems:"center",gap:"20",children:[e.jsx(s,{size:"sm",children:"sm Chip"}),e.jsx(s,{size:"sm",before:e.jsx(n,{name:"hash"}),children:"sm Chip"}),e.jsx(s,{size:"sm",after:e.jsx(n,{name:"read-doc"}),children:"sm Chip"}),e.jsx(s,{size:"sm",before:e.jsx(m,{src:x.user1,name:"John Doe"}),children:"sm Chip"}),e.jsx(s,{size:"sm",after:e.jsx(o,{count:3}),children:"sm Chip"}),e.jsx(s,{size:"md",children:"md Chip"}),e.jsx(s,{size:"md",before:e.jsx(n,{name:"hash"}),children:"md Chip"}),e.jsx(s,{size:"md",after:e.jsx(n,{name:"read-doc"}),children:"md Chip"}),e.jsx(s,{size:"md",before:e.jsx(m,{src:x.user1,name:"John Doe"}),children:"md Chip"}),e.jsx(s,{size:"md",after:e.jsx(o,{count:3}),children:"md Chip"}),e.jsx(s,{size:"lg",children:"lg Chip"}),e.jsx(s,{size:"lg",before:e.jsx(n,{name:"hash"}),children:"lg Chip"}),e.jsx(s,{size:"lg",after:e.jsx(n,{name:"read-doc"}),children:"lg Chip"}),e.jsx(s,{size:"lg",before:e.jsx(m,{src:x.user1,name:"John Doe"}),children:"lg Chip"}),e.jsx(s,{size:"lg",after:e.jsx(o,{count:3}),children:"lg Chip"})]})},j=()=>e.jsxs(b,{w:"full",h:"full",position:"relative",placeContent:"center",alignItems:"center",justifyItems:"center",gap:"16",children:[e.jsxs(nn,{justifyContent:"center",children:[e.jsx(s,{size:{base:"xl",xs:"lg",sm:"md",md:"sm"},before:e.jsx(n,{name:"hash"}),children:"Chip"}),e.jsx(s,{size:{base:"xl",xs:"lg",sm:"md",md:"sm"},before:e.jsx(m,{src:x.user1,name:"John Doe"}),children:"Chip"}),e.jsx(s,{size:{base:"xl",xs:"lg",sm:"md",md:"sm"},after:e.jsx(o,{count:3}),children:"Chip"})]}),e.jsxs(i,{textAlign:"center",textStyle:"mono.sm",_after:{display:"inline",content:{base:'"xl"',xs:'"lg"',sm:'"md"',md:'"sm"'},color:"text.bold",fontWeight:"bold"},children:["Size:"," "]}),e.jsx(qs,{})]}),D={render:()=>e.jsxs(r,{gap:"4",flexDir:"column",alignItems:"center",children:[e.jsxs(r,{gap:"4",alignItems:"center",children:[e.jsx(s,{size:"sm",before:e.jsx(o,{count:2,variant:"success"}),children:"Small"}),e.jsx(s,{before:e.jsx(o,{count:30,variant:"neutral"}),children:"Medium"}),e.jsx(s,{size:"lg",before:e.jsx(o,{count:100}),children:"Large"}),e.jsx(s,{size:"xl",before:e.jsx(o,{count:100}),children:"XLarge"})]}),e.jsxs(r,{gap:"4",alignItems:"center",children:[e.jsx(s,{size:"sm",before:e.jsx(m,{src:x.user1,name:"John Doe"}),children:"Small"}),e.jsx(s,{before:e.jsx(m,{src:x.user1,name:"John Doe"}),children:"Medium"}),e.jsx(s,{size:"lg",before:e.jsx(m,{src:x.user1,name:"John Doe"}),children:"Large"}),e.jsx(s,{size:"xl",before:e.jsx(m,{src:x.user1,name:"John Doe"}),children:"XLarge"})]}),e.jsxs(r,{gap:"4",alignItems:"center",children:[e.jsx(s,{size:"sm",before:e.jsx(n,{name:"file"}),children:"Small"}),e.jsx(s,{before:e.jsx(n,{name:"file"}),children:"Medium"}),e.jsx(s,{size:"lg",before:e.jsx(n,{name:"file"}),children:"Large"}),e.jsx(s,{size:"xl",before:e.jsx(n,{name:"file"}),children:"XLarge"})]})]})},y={render:()=>e.jsxs(r,{gap:"4",flexDir:"column",alignItems:"center",children:[e.jsxs(r,{gap:"4",alignItems:"center",children:[e.jsx(s,{size:"sm",after:e.jsx(o,{count:2,variant:"success"}),children:"Small"}),e.jsx(s,{after:e.jsx(o,{count:30,variant:"neutral"}),children:"Medium"}),e.jsx(s,{size:"lg",after:e.jsx(o,{count:100}),children:"Large"}),e.jsx(s,{size:"xl",after:e.jsx(o,{count:100}),children:"XLarge"})]}),e.jsxs(r,{gap:"4",alignItems:"center",children:[e.jsx(s,{size:"sm",after:e.jsx(m,{src:x.user1,name:"John Doe"}),children:"Small"}),e.jsx(s,{after:e.jsx(m,{src:x.user1,name:"John Doe"}),children:"Medium"}),e.jsx(s,{size:"lg",after:e.jsx(m,{src:x.user1,name:"John Doe"}),children:"Large"}),e.jsx(s,{size:"xl",after:e.jsx(m,{src:x.user1,name:"John Doe"}),children:"XLarge"})]}),e.jsxs(r,{gap:"4",alignItems:"center",children:[e.jsx(s,{size:"sm",after:e.jsx(n,{name:"file"}),children:"Small"}),e.jsx(s,{after:e.jsx(n,{name:"file"}),children:"Medium"}),e.jsx(s,{size:"lg",after:e.jsx(n,{name:"file"}),children:"Large"}),e.jsx(s,{size:"xl",after:e.jsx(n,{name:"file"}),children:"XLarge"})]})]})},z={render:()=>e.jsxs(r,{gap:"4",alignItems:"center",children:[e.jsx(s,{size:"sm",before:e.jsx(n,{name:"user"}),after:e.jsx(o,{count:2}),children:"Small"}),e.jsx(s,{before:e.jsx(n,{name:"user"}),after:e.jsx(o,{count:2}),children:"Medium"}),e.jsx(s,{size:"lg",before:e.jsx(n,{name:"user"}),after:e.jsx(o,{count:2}),children:"Large"}),e.jsx(s,{size:"xl",before:e.jsx(n,{name:"user"}),after:e.jsx(o,{count:2}),children:"XLarge"})]})},w={render:()=>e.jsxs(r,{gap:"4",flexDir:"column",alignItems:"center",children:[e.jsxs(r,{gap:"4",alignItems:"center",children:[e.jsx(s,{before:e.jsx(n,{name:"hash"}),children:"Icon Slot"}),e.jsx(s,{after:e.jsx(o,{count:3,variant:"success"}),children:"Badge Slot"}),e.jsx(s,{before:e.jsx(m,{src:x.user2,name:"Jane Doe"}),after:e.jsx(n,{name:"x"}),children:"Avatar Slot"})]}),e.jsxs(r,{gap:"4",alignItems:"center",children:[e.jsx(s,{before:e.jsx(n,{name:"hash"}),children:"Alias Before"}),e.jsx(s,{after:e.jsx(o,{count:4,variant:"warning"}),children:"Alias After"})]})]})},F={render:()=>e.jsxs(b,{gridTemplateColumns:"auto auto",gap:"24",children:[e.jsx(i,{textStyle:"mono.xs",children:"Default:"}),e.jsx(s,{before:e.jsx(n,{name:"file"}),children:"Interactive"}),e.jsx(i,{textStyle:"mono.xs",children:"Disabled:"}),e.jsx(s,{disabled:!0,before:e.jsx(n,{name:"file"}),children:"Disabled"}),e.jsx(i,{textStyle:"mono.xs",children:"Loading:"}),e.jsx(s,{loading:!0,before:e.jsx(n,{name:"file"}),children:"Loading..."}),e.jsx(i,{textStyle:"mono.xs",children:"Deleted:"}),e.jsx(s,{deleted:!0,before:e.jsx(n,{name:"file"}),children:"Deleted Item"})]})},E={render:()=>e.jsxs(r,{flexDir:"column",gap:"12",children:[e.jsx(i,{textStyle:"mono.xs",children:"Chips can be interactive buttons:"}),e.jsxs(r,{gap:"2",children:[e.jsx(s,{onClick:()=>alert("Clicked!"),children:"Click Me"}),e.jsx(s,{before:e.jsx(n,{name:"plus"}),onClick:()=>alert("Add clicked!"),children:"Add Item"}),e.jsx(s,{after:e.jsx(n,{name:"x"}),onClick:()=>alert("Remove clicked!"),children:"Remove"})]})]})},T={render:()=>e.jsxs(r,{flexDir:"column",gap:"12",children:[e.jsxs(r,{flexDir:"column",gap:"2",children:[e.jsx(i,{textStyle:"mono.xs",children:"No Content Before/After"}),e.jsxs(r,{gap:"4",alignItems:"center",children:[e.jsx(s,{size:"sm",children:"Small"}),e.jsx(s,{children:"Medium"}),e.jsx(s,{size:"lg",children:"Large"}),e.jsx(s,{size:"xl",children:"Extra Large"})]})]}),e.jsxs(r,{flexDir:"column",gap:"2",children:[e.jsx(i,{textStyle:"mono.xs",children:"With Before"}),e.jsxs(r,{gap:"4",alignItems:"center",children:[e.jsx(s,{size:"sm",before:e.jsx(n,{name:"file"}),children:"Small"}),e.jsx(s,{before:e.jsx(n,{name:"file"}),children:"Medium"}),e.jsx(s,{size:"lg",before:e.jsx(n,{name:"file"}),children:"Large"}),e.jsx(s,{size:"xl",before:e.jsx(n,{name:"file"}),children:"Extra Large"})]})]}),e.jsxs(r,{flexDir:"column",gap:"2",children:[e.jsx(i,{textStyle:"mono.xs",children:"With After"}),e.jsxs(r,{gap:"4",alignItems:"center",children:[e.jsx(s,{size:"sm",after:e.jsx(n,{name:"x"}),children:"Small"}),e.jsx(s,{after:e.jsx(n,{name:"x"}),children:"Medium"}),e.jsx(s,{size:"lg",after:e.jsx(n,{name:"x"}),children:"Large"}),e.jsx(s,{size:"xl",after:e.jsx(n,{name:"x"}),children:"Extra Large"})]})]}),e.jsxs(r,{flexDir:"column",gap:"2",children:[e.jsx(i,{textStyle:"mono.xs",children:"With Before and After"}),e.jsxs(r,{gap:"4",alignItems:"center",children:[e.jsx(s,{size:"sm",before:e.jsx(n,{name:"user"}),after:e.jsx(n,{name:"x"}),children:"Small"}),e.jsx(s,{before:e.jsx(n,{name:"user"}),after:e.jsx(n,{name:"x"}),children:"Medium"}),e.jsx(s,{size:"lg",before:e.jsx(n,{name:"user"}),after:e.jsx(n,{name:"x"}),children:"Large"}),e.jsx(s,{size:"xl",before:e.jsx(n,{name:"user"}),after:e.jsx(n,{name:"x"}),children:"Extra Large"})]})]})]})},A={render:()=>e.jsxs(g,{maxW:"lg",alignItems:"stretch",gap:"8",children:[e.jsxs(i,{children:["Chips can appear inline within text, like tagging"," ",e.jsx(s,{before:e.jsx(n,{name:"user"}),children:"John Doe"})," in a conversation. referencing ",e.jsx(s,{before:e.jsx(n,{name:"file"}),children:"Project Plan"})," in your notes."]}),e.jsxs(i,{children:["Chips with more than two items collapse to a count and should stay on the same baseline as plain chips: ",e.jsx(s,{children:"Design"})," ",e.jsx(s,{items:["Design","Engineering","Product"]})," and"," ",e.jsx(s,{before:e.jsx(n,{name:"user"}),items:["Ann","Bob","Cy","Di"]})," ",e.jsx(s,{children:"Design, Engineering"})," sit in one line of text."]})]})},L={render:()=>e.jsxs(r,{flexDir:"column",gap:"20",children:[e.jsxs(r,{flexDir:"column",gap:"2",children:[e.jsx(i,{textStyle:"mono.xs",children:"Filter Tags"}),e.jsxs(r,{gap:"4",flexWrap:"wrap",children:[e.jsx(s,{after:e.jsx(n,{name:"x"}),children:"React"}),e.jsx(s,{after:e.jsx(n,{name:"x"}),children:"TypeScript"}),e.jsx(s,{after:e.jsx(n,{name:"x"}),children:"Panda CSS"}),e.jsx(s,{before:e.jsx(n,{name:"plus"}),children:"Add Filter"})]})]}),e.jsxs(r,{flexDir:"column",gap:"2",children:[e.jsx(i,{textStyle:"mono.xs",children:"Categories"}),e.jsxs(r,{gap:"4",flexWrap:"wrap",children:[e.jsx(s,{before:e.jsx(n,{name:"file"}),children:"Documentation"}),e.jsx(s,{before:e.jsx(n,{name:"calendar"}),children:"Events"}),e.jsx(s,{before:e.jsx(n,{name:"user"}),children:"People"})]})]}),e.jsxs(r,{flexDir:"column",gap:"2",children:[e.jsx(i,{textStyle:"mono.xs",children:"Actions"}),e.jsxs(r,{gap:"4",flexWrap:"wrap",children:[e.jsx(s,{before:e.jsx(n,{name:"plus"}),children:"New Item"}),e.jsx(s,{before:e.jsx(n,{name:"check"}),children:"Approve"}),e.jsx(s,{deleted:!0,children:"Archived"})]})]})]})},rn=()=>{const[t,a]=d.useState(["React","TypeScript","Panda CSS","Vite"]),l=c=>{a(Z=>Z.filter(ee=>ee!==c))};return e.jsxs(r,{flexDir:"column",gap:"12",children:[e.jsx(i,{textStyle:"mono.xs",children:"Click the X to dismiss tags:"}),e.jsx(r,{gap:"4",flexWrap:"wrap",children:t.map(c=>e.jsx(s,{dismissable:!0,onDismiss:()=>l(c),children:c},c))}),t.length===0&&e.jsx(i,{color:"text.subtlest",children:"All tags dismissed!"})]})},k={render:()=>e.jsxs(r,{gap:"4",alignItems:"center",children:[e.jsx(s,{items:["Design","Engineering"]}),e.jsx(s,{items:["Design","Engineering","Product"]}),e.jsx(s,{dismissable:!0,onDismiss:()=>{},items:["Design","Engineering","Product","Support","Sales"]})]})},W={render:()=>e.jsxs(g,{gap:"8",alignItems:"flex-start",children:[e.jsxs(i,{textStyle:"mono.xs",children:["`children` stays a single string. Interpolate with a template string; mixed JSX text such as `Order ","{id}","` is a type error. Use `items` for lists."]}),e.jsx(s,{children:"Order 1042"})]})},B={render:()=>e.jsxs(g,{gap:"8",alignItems:"flex-start",children:[e.jsx(i,{textStyle:"mono.xs",children:"An empty `items` list renders nothing: the chip between the two labels below is absent, with no empty pill or dismiss button."}),e.jsxs(r,{gap:"4",alignItems:"center",children:[e.jsx(s,{children:"Before"}),e.jsx(s,{items:[],dismissable:!0,onDismiss:()=>{}}),e.jsx(s,{children:"After"})]})]})},h=["Design","Engineering","Product","Support","Sales"],u=({label:t,children:a})=>e.jsxs(g,{gap:"4",alignItems:"flex-start",children:[e.jsx(i,{textStyle:"mono.xs",children:t}),a]}),O={render:()=>e.jsxs(g,{gap:"12",alignItems:"flex-start",children:[e.jsx(i,{textStyle:"mono.xs",children:"Overflow is by item count, not width. Hover or focus each chip to see the full list. Disabled and loading chips do not open the tooltip or take focus. Static chips have no visual styling for deleted, error or invalid, so those look like a plain chip."}),e.jsxs(r,{gap:"12",alignItems:"flex-end",flexWrap:"wrap",children:[e.jsx(u,{label:"size sm",children:e.jsx(s,{size:"sm",items:h})}),e.jsx(u,{label:"size md",children:e.jsx(s,{size:"md",items:h})}),e.jsx(u,{label:"size lg",children:e.jsx(s,{size:"lg",items:h})})]}),e.jsxs(r,{gap:"12",alignItems:"flex-end",flexWrap:"wrap",children:[e.jsx(u,{label:"before",children:e.jsx(s,{before:e.jsx(n,{name:"user"}),items:h})}),e.jsx(u,{label:"after",children:e.jsx(s,{after:e.jsx(n,{name:"file"}),items:h})}),e.jsx(u,{label:"before + dismissable",children:e.jsx(s,{before:e.jsx(n,{name:"user"}),dismissable:!0,onDismiss:()=>{},items:h})})]}),e.jsxs(r,{gap:"12",alignItems:"flex-end",flexWrap:"wrap",children:[e.jsx(u,{label:"disabled (no tooltip, not focusable)",children:e.jsx(s,{disabled:!0,items:h})}),e.jsx(u,{label:"loading (no tooltip, not focusable)",children:e.jsx(s,{loading:!0,items:h})}),e.jsx(u,{label:"deleted (no static styling)",children:e.jsx(s,{deleted:!0,items:h})}),e.jsx(u,{label:"error (no static styling)",children:e.jsx(s,{error:!0,items:h})}),e.jsx(u,{label:"invalid (no static styling)",children:e.jsx(s,{invalid:!0,items:h})})]}),e.jsxs(r,{gap:"12",alignItems:"flex-end",flexWrap:"wrap",children:[e.jsx(u,{label:"onClick (focus via button)",children:e.jsx(s,{onClick:()=>{},items:h})}),e.jsx(u,{label:"dismissable + custom dismissLabel",children:e.jsx(s,{dismissLabel:"Clear all teams",dismissable:!0,onDismiss:()=>{},items:h})})]})]})},tn=()=>{const[t,a]=d.useState(!0);return e.jsxs(g,{gap:"12",alignItems:"flex-start",children:[e.jsx(i,{textStyle:"mono.xs",children:"The first chip has an empty `items` list, so it renders nothing and must not register with the group. Tab into the group: the first visible chip (Open) should be the tab stop, and arrow keys should move focus and selection only between visible chips. Toggle the button to switch the first chip between empty and populated; registration should follow."}),e.jsxs(p,{type:"single",label:"Status",children:[e.jsx(s,{value:"hidden",items:t?[]:["Draft","Review"]}),e.jsx(s,{value:"open",children:"Open"}),e.jsx(s,{value:"closed",children:"Closed"})]}),e.jsx(ne,{onClick:()=>a(l=>!l),children:t?"Populate first chip":"Empty first chip"})]})},G={render:()=>e.jsx(tn,{})},M={render:()=>e.jsxs(g,{gap:"12",alignItems:"flex-start",children:[e.jsx(i,{textStyle:"mono.xs",children:"Arrow keys still move between selectable chips, and the tooltip opens on focus for overflowing ones."}),e.jsxs(p,{type:"single",defaultValue:"all",label:"Team filter",children:[e.jsx(s,{value:"all",children:"All"}),e.jsx(s,{value:"core",items:["Design","Engineering","Product"]}),e.jsx(s,{value:"go",items:["Support","Sales"]})]}),e.jsxs(p,{type:"multi",defaultValue:["core"],label:"Team filter",children:[e.jsx(s,{value:"core",items:["Design","Engineering","Product"]}),e.jsx(s,{value:"go",items:["Support","Sales","Success","Ops"]})]})]})},se=["Design","Engineering","Product","Support","Sales"],an=()=>{const[t,a]=d.useState(2),l=se.slice(0,t);return e.jsxs(g,{gap:"12",alignItems:"flex-start",children:[e.jsx(i,{children:"Tab to each chip: static and dismiss-only chips become focusable at three or more items, show a visible focus ring, and open the tooltip. Escape closes it while the ring stays. For the clickable chip, change the count with the buttons (Shift+Tab back to the chip); focus should stay on it when crossing three items."}),e.jsxs(r,{gap:"8",alignItems:"center",children:[e.jsx(s,{onClick:()=>{},items:l}),e.jsx(s,{items:l}),e.jsx(s,{dismissable:!0,onDismiss:()=>{},items:l})]}),e.jsxs(r,{gap:"8",children:[e.jsx(ne,{onClick:()=>a(c=>Math.max(1,c-1)),disabled:t<=1,children:"Remove item"}),e.jsx(ne,{onClick:()=>a(c=>Math.min(se.length,c+1)),disabled:t>=se.length,children:"Add item"})]})]})},J={render:()=>e.jsx(an,{})},V={render:()=>e.jsx(rn,{})},P={render:()=>e.jsxs(r,{gap:"4",children:[e.jsx(s,{dismissable:!0,before:e.jsx(n,{name:"file"}),onDismiss:()=>{},children:"Document"}),e.jsx(s,{dismissable:!0,before:e.jsx(n,{name:"user"}),onDismiss:()=>{},children:"Person"}),e.jsx(s,{dismissable:!0,before:e.jsx(n,{name:"calendar"}),onDismiss:()=>{},children:"Event"})]})},R={render:()=>e.jsxs(r,{flexDir:"column",gap:"12",children:[e.jsx(i,{textStyle:"mono.xs",children:"Body clicks stay on the chip action. The trailing X is the only dismiss target."}),e.jsxs(r,{gap:"4",flexWrap:"wrap",children:[e.jsx(s,{dismissable:!0,before:e.jsx(n,{name:"file"}),onClick:()=>alert("Opened document"),onDismiss:()=>alert("Removed document"),children:"Document"}),e.jsx(s,{dismissable:!0,before:e.jsx(n,{name:"user"}),onClick:()=>alert("Opened person"),onDismiss:()=>alert("Removed person"),children:"Person"})]})]})},X={render:()=>e.jsxs(b,{gridTemplateColumns:"auto auto",gap:"24",children:[e.jsx(i,{textStyle:"mono.xs",children:"Default:"}),e.jsx(s,{dismissable:!0,onDismiss:()=>{},children:"Default"}),e.jsx(i,{textStyle:"mono.xs",children:"Disabled:"}),e.jsx(s,{dismissable:!0,disabled:!0,onDismiss:()=>{},children:"Disabled"}),e.jsx(i,{textStyle:"mono.xs",children:"Loading:"}),e.jsx(s,{dismissable:!0,loading:!0,onDismiss:()=>{},children:"Loading..."}),e.jsx(i,{textStyle:"mono.xs",children:"Deleted:"}),e.jsx(s,{dismissable:!0,deleted:!0,onDismiss:()=>{},children:"Deleted Item"})]})},N={render:()=>e.jsxs(g,{gap:"12",children:[e.jsx(s,{dismissable:!0,dismissLabel:"Remove assignee John Doe",before:e.jsx(m,{src:x.user1,name:"John Doe"}),onDismiss:()=>{},children:"John Doe"}),e.jsx(i,{textStyle:"mono.xs",children:'Dismiss button: aria-label="Remove assignee John Doe"'})]})},Ys=()=>{const[t,a]=d.useState("");return e.jsxs(r,{flexDir:"column",gap:"12",children:[e.jsx(i,{textStyle:"mono.md",children:"Select one size:"}),e.jsxs(p,{type:"single",value:t,onChange:l=>a(l),label:"Size selection",children:[e.jsx(s,{value:"sm",children:"Small"}),e.jsx(s,{value:"md",children:"Medium"}),e.jsx(s,{value:"lg",children:"Large"}),e.jsx(s,{value:"xl",children:"X-Large"})]}),e.jsxs(i,{textStyle:"mono.xs",children:["Selected: ",t]})]})},_={render:()=>e.jsx(Ys,{})},ln=()=>{const[t,a]=d.useState("grid");return e.jsxs(r,{flexDir:"column",gap:"12",children:[e.jsx(i,{textStyle:"mono.md",children:"Select a view:"}),e.jsxs(p,{type:"single",value:t,onChange:l=>a(l),label:"View selection",children:[e.jsx(s,{value:"list",before:e.jsx(n,{name:"menu"}),children:"List"}),e.jsx(s,{value:"grid",before:e.jsx(n,{name:"view-grid"}),children:"Grid"}),e.jsx(s,{value:"calendar",before:e.jsx(n,{name:"calendar"}),children:"Calendar"})]}),e.jsxs(i,{textStyle:"mono.xs",children:["Selected: ",t]})]})},U={render:()=>e.jsx(ln,{})},Zs=()=>{const[t,a]=d.useState(["react","typescript"]);return e.jsxs(r,{flexDir:"column",gap:"12",children:[e.jsx(i,{textStyle:"mono.md",children:"Select your skills (check icon appears when selected):"}),e.jsxs(p,{type:"multi",value:t,onChange:l=>a(l),label:"Skills selection",children:[e.jsx(s,{value:"react",children:"React"}),e.jsx(s,{value:"typescript",children:"TypeScript"}),e.jsx(s,{value:"vue",children:"Vue"}),e.jsx(s,{value:"angular",children:"Angular"}),e.jsx(s,{value:"svelte",children:"Svelte"})]}),e.jsxs(i,{textStyle:"mono.xs",children:["Selected: ",t.join(", ")||"None"]})]})},K={render:()=>e.jsx(Zs,{})},on=()=>{const[t,a]=d.useState(["docs"]);return e.jsxs(r,{flexDir:"column",gap:"12",children:[e.jsx(i,{textStyle:"mono.md",children:"Filter by category:"}),e.jsxs(p,{type:"multi",value:t,onChange:l=>a(l),label:"Category filter",children:[e.jsx(s,{value:"docs",before:e.jsx(n,{name:"file"}),children:"Documents"}),e.jsx(s,{value:"images",before:e.jsx(n,{name:"image"}),children:"Images"}),e.jsx(s,{value:"videos",before:e.jsx(n,{name:"video"}),children:"Videos"}),e.jsx(s,{value:"audio",before:e.jsx(n,{name:"broadcast"}),children:"Audio"})]}),e.jsxs(i,{textStyle:"mono.xs",children:["Selected: ",t.join(", ")||"None"]})]})},H={render:()=>e.jsx(on,{})},$={render:()=>e.jsxs(r,{flexDir:"column",gap:"40",children:[e.jsxs(r,{flexDir:"column",gap:"2",children:[e.jsx(i,{textStyle:"mono.md",color:"text",fontWeight:"bold",children:"Single Select (arrow keys navigate & select):"}),e.jsx(Ys,{})]}),e.jsxs(r,{flexDir:"column",gap:"2",children:[e.jsx(i,{textStyle:"mono.md",color:"text",fontWeight:"bold",children:"Multi Select (tab between, space/enter toggles):"}),e.jsx(Zs,{})]})]})},cn=()=>{const[t,a]=d.useState("option-a"),[l,c]=d.useState("option-a"),[Z,ee]=d.useState("option-a"),[en,sn]=d.useState("option-a");return e.jsxs(r,{flexDir:"column",gap:"24",children:[e.jsxs(r,{flexDir:"column",gap:"2",children:[e.jsx(i,{textStyle:"mono.xs",children:"Small"}),e.jsxs(p,{type:"single",size:"sm",value:t,onChange:f=>a(f),label:"Small chip group",children:[e.jsx(s,{value:"option-a",children:"Option A"}),e.jsx(s,{value:"option-b",children:"Option B"}),e.jsx(s,{value:"option-c",children:"Option C"})]})]}),e.jsxs(r,{flexDir:"column",gap:"2",children:[e.jsx(i,{textStyle:"mono.xs",children:"Medium"}),e.jsxs(p,{type:"single",size:"md",value:l,onChange:f=>c(f),label:"Medium chip group",children:[e.jsx(s,{value:"option-a",children:"Option A"}),e.jsx(s,{value:"option-b",children:"Option B"}),e.jsx(s,{value:"option-c",children:"Option C"})]})]}),e.jsxs(r,{flexDir:"column",gap:"2",children:[e.jsx(i,{textStyle:"mono.xs",children:"Large"}),e.jsxs(p,{type:"single",size:"lg",value:Z,onChange:f=>ee(f),label:"Large chip group",children:[e.jsx(s,{value:"option-a",children:"Option A"}),e.jsx(s,{value:"option-b",children:"Option B"}),e.jsx(s,{value:"option-c",children:"Option C"})]})]}),e.jsxs(r,{flexDir:"column",gap:"2",children:[e.jsx(i,{textStyle:"mono.xs",children:"Extra Large"}),e.jsxs(p,{type:"single",size:"xl",value:en,onChange:f=>sn(f),label:"Extra Large chip group",children:[e.jsx(s,{value:"option-a",children:"Option A"}),e.jsx(s,{value:"option-b",children:"Option B"}),e.jsx(s,{value:"option-c",children:"Option C"})]})]})]})},Q={render:()=>e.jsx(cn,{})},C=()=>{const[t,a]=d.useState("assignee");return e.jsxs(b,{w:"full",h:"full",position:"relative",placeContent:"center",alignItems:"center",justifyItems:"center",gap:"16",children:[e.jsxs(p,{type:"single",size:{base:"xl",xs:"lg",sm:"md",md:"sm"},value:t,onChange:l=>a(l),label:"Responsive chip group",children:[e.jsx(s,{value:"assignee",before:e.jsx(m,{name:"John Doe"}),children:"Assignee"}),e.jsx(s,{value:"mentions",before:e.jsx(n,{name:"hash"}),children:"Mentions"}),e.jsx(s,{value:"alerts",after:e.jsx(o,{count:3}),children:"Alerts"})]}),e.jsxs(i,{textAlign:"center",textStyle:"mono.sm",_after:{display:"inline",content:{base:'"xl"',xs:'"lg"',sm:'"md"',md:'"sm"'},color:"text.bold",fontWeight:"bold"},children:["Group size:"," "]}),e.jsx(qs,{})]})},mn=()=>{const[t,a]=d.useState("active");return e.jsxs(r,{flexDir:"column",gap:"12",children:[e.jsx(i,{textStyle:"mono.md",children:"Individual chips can be disabled within a group:"}),e.jsxs(p,{type:"single",value:t,onChange:l=>a(l),label:"Options with disabled",children:[e.jsx(s,{value:"active",children:"Active"}),e.jsx(s,{value:"pending",children:"Pending"}),e.jsx(s,{value:"unavailable",disabled:!0,children:"Unavailable"}),e.jsx(s,{value:"archived",children:"Archived"})]}),e.jsxs(i,{textStyle:"mono.xs",children:["Selected: ",t]})]})},q={render:()=>e.jsx(mn,{})},pn=()=>{const[t,a]=d.useState(["react","typescript"]),l=["React","TypeScript","JavaScript","Vue","Angular","Svelte","Next.js","Remix","Astro","Node.js","Python","Go","Rust","GraphQL","REST","Docker"];return e.jsxs(r,{flexDir:"column",gap:"12",maxW:"md",children:[e.jsx(i,{textStyle:"mono.md",children:"ChipGroup wraps when chips exceed container width:"}),e.jsx(p,{type:"multi",value:t,onChange:c=>a(c),label:"Skills selection",children:l.map(c=>e.jsx(s,{value:c.toLowerCase(),children:c},c.toLowerCase()))}),e.jsxs(i,{textStyle:"mono.xs",children:["Selected: ",t.join(", ")||"None"]})]})},Y={render:()=>e.jsx(pn,{})};j.__docgenInfo={description:"",methods:[],displayName:"ConditionalBreakpoints"};C.__docgenInfo={description:"",methods:[],displayName:"ChipGroupResponsiveSizes"};const wn=["Default","UncontrolledGroup","Sizes","ConditionalBreakpoints","WithBefore","WithAfter","WithBeforeAndAfter","WithSlots","States","Interactive","SizesMatrix","InlineWithText","UseCases","MultipleItems","InterpolatedLabel","EmptyItems","OverflowStates","EmptyItemsInChipGroup","OverflowInChipGroup","OverflowKeyboardAndFocus","Dismissable","DismissableWithBefore","DismissableWithPrimaryAction","DismissableStates","DismissableWithCustomLabel","SingleSelect","SingleSelectWithBefore","MultiSelect","MultiSelectWithBefore","KeyboardNavigation","ChipGroupSizes","ChipGroupResponsiveSizes","ChipGroupWithDisabled","ChipGroupWrapping"];var re,ie,te;S.parameters={...S.parameters,docs:{...(re=S.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => <Chip>Default</Chip>
}`,...(te=(ie=S.parameters)==null?void 0:ie.docs)==null?void 0:te.source}}};var ae,le,oe;v.parameters={...v.parameters,docs:{...(ae=v.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(oe=(le=v.parameters)==null?void 0:le.docs)==null?void 0:oe.source}}};var ce,me,pe;I.parameters={...I.parameters,docs:{...(ce=I.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(pe=(me=I.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var de,xe,he;j.parameters={...j.parameters,docs:{...(de=j.parameters)==null?void 0:de.docs,source:{originalSource:`() => {
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
}`,...(he=(xe=j.parameters)==null?void 0:xe.docs)==null?void 0:he.source}}};var ue,ge,fe;D.parameters={...D.parameters,docs:{...(ue=D.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(fe=(ge=D.parameters)==null?void 0:ge.docs)==null?void 0:fe.source}}};var je,Ce,be;y.parameters={...y.parameters,docs:{...(je=y.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
}`,...(be=(Ce=y.parameters)==null?void 0:Ce.docs)==null?void 0:be.source}}};var Se,ve,Ie;z.parameters={...z.parameters,docs:{...(Se=z.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(Ie=(ve=z.parameters)==null?void 0:ve.docs)==null?void 0:Ie.source}}};var De,ye,ze;w.parameters={...w.parameters,docs:{...(De=w.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
}`,...(ze=(ye=w.parameters)==null?void 0:ye.docs)==null?void 0:ze.source}}};var we,Fe,Ee;F.parameters={...F.parameters,docs:{...(we=F.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(Ee=(Fe=F.parameters)==null?void 0:Fe.docs)==null?void 0:Ee.source}}};var Te,Ae,Le;E.parameters={...E.parameters,docs:{...(Te=E.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(Le=(Ae=E.parameters)==null?void 0:Ae.docs)==null?void 0:Le.source}}};var ke,We,Be;T.parameters={...T.parameters,docs:{...(ke=T.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(Be=(We=T.parameters)==null?void 0:We.docs)==null?void 0:Be.source}}};var Oe,Ge,Me;A.parameters={...A.parameters,docs:{...(Oe=A.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
}`,...(Me=(Ge=A.parameters)==null?void 0:Ge.docs)==null?void 0:Me.source}}};var Je,Ve,Pe;L.parameters={...L.parameters,docs:{...(Je=L.parameters)==null?void 0:Je.docs,source:{originalSource:`{
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
}`,...(Pe=(Ve=L.parameters)==null?void 0:Ve.docs)==null?void 0:Pe.source}}};var Re,Xe,Ne;k.parameters={...k.parameters,docs:{...(Re=k.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  render: () => <Flex gap="4" alignItems="center">
      <Chip items={['Design', 'Engineering']} />
      <Chip items={['Design', 'Engineering', 'Product']} />
      <Chip dismissable onDismiss={() => {}} items={['Design', 'Engineering', 'Product', 'Support', 'Sales']} />
    </Flex>
}`,...(Ne=(Xe=k.parameters)==null?void 0:Xe.docs)==null?void 0:Ne.source}}};var _e,Ue,Ke;W.parameters={...W.parameters,docs:{...(_e=W.parameters)==null?void 0:_e.docs,source:{originalSource:`{
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
}`,...(Ke=(Ue=W.parameters)==null?void 0:Ue.docs)==null?void 0:Ke.source}}};var He,$e,Qe;B.parameters={...B.parameters,docs:{...(He=B.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
}`,...(Qe=($e=B.parameters)==null?void 0:$e.docs)==null?void 0:Qe.source}}};var qe,Ye,Ze;O.parameters={...O.parameters,docs:{...(qe=O.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...(Ze=(Ye=O.parameters)==null?void 0:Ye.docs)==null?void 0:Ze.source}}};var es,ss,ns;G.parameters={...G.parameters,docs:{...(es=G.parameters)==null?void 0:es.docs,source:{originalSource:`{
  render: () => <EmptyItemsInGroupExample />
}`,...(ns=(ss=G.parameters)==null?void 0:ss.docs)==null?void 0:ns.source}}};var rs,is,ts;M.parameters={...M.parameters,docs:{...(rs=M.parameters)==null?void 0:rs.docs,source:{originalSource:`{
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
}`,...(ts=(is=M.parameters)==null?void 0:is.docs)==null?void 0:ts.source}}};var as,ls,os;J.parameters={...J.parameters,docs:{...(as=J.parameters)==null?void 0:as.docs,source:{originalSource:`{
  render: () => <OverflowFocusExample />
}`,...(os=(ls=J.parameters)==null?void 0:ls.docs)==null?void 0:os.source}}};var cs,ms,ps;V.parameters={...V.parameters,docs:{...(cs=V.parameters)==null?void 0:cs.docs,source:{originalSource:`{
  render: () => <DismissableExample />
}`,...(ps=(ms=V.parameters)==null?void 0:ms.docs)==null?void 0:ps.source}}};var ds,xs,hs;P.parameters={...P.parameters,docs:{...(ds=P.parameters)==null?void 0:ds.docs,source:{originalSource:`{
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
}`,...(hs=(xs=P.parameters)==null?void 0:xs.docs)==null?void 0:hs.source}}};var us,gs,fs;R.parameters={...R.parameters,docs:{...(us=R.parameters)==null?void 0:us.docs,source:{originalSource:`{
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
}`,...(fs=(gs=R.parameters)==null?void 0:gs.docs)==null?void 0:fs.source}}};var js,Cs,bs;X.parameters={...X.parameters,docs:{...(js=X.parameters)==null?void 0:js.docs,source:{originalSource:`{
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
}`,...(bs=(Cs=X.parameters)==null?void 0:Cs.docs)==null?void 0:bs.source}}};var Ss,vs,Is;N.parameters={...N.parameters,docs:{...(Ss=N.parameters)==null?void 0:Ss.docs,source:{originalSource:`{
  render: () => <VStack gap="12">
      <Chip dismissable dismissLabel="Remove assignee John Doe" before={<Avatar src={sampleImages.user1} name="John Doe" />} onDismiss={() => {}}>
        John Doe
      </Chip>
      <Text textStyle="mono.xs">
        Dismiss button: aria-label="Remove assignee John Doe"
      </Text>
    </VStack>
}`,...(Is=(vs=N.parameters)==null?void 0:vs.docs)==null?void 0:Is.source}}};var Ds,ys,zs;_.parameters={..._.parameters,docs:{...(Ds=_.parameters)==null?void 0:Ds.docs,source:{originalSource:`{
  render: () => <SingleSelectExample />
}`,...(zs=(ys=_.parameters)==null?void 0:ys.docs)==null?void 0:zs.source}}};var ws,Fs,Es;U.parameters={...U.parameters,docs:{...(ws=U.parameters)==null?void 0:ws.docs,source:{originalSource:`{
  render: () => <SingleSelectWithBeforeExample />
}`,...(Es=(Fs=U.parameters)==null?void 0:Fs.docs)==null?void 0:Es.source}}};var Ts,As,Ls;K.parameters={...K.parameters,docs:{...(Ts=K.parameters)==null?void 0:Ts.docs,source:{originalSource:`{
  render: () => <MultiSelectExample />
}`,...(Ls=(As=K.parameters)==null?void 0:As.docs)==null?void 0:Ls.source}}};var ks,Ws,Bs;H.parameters={...H.parameters,docs:{...(ks=H.parameters)==null?void 0:ks.docs,source:{originalSource:`{
  render: () => <MultiSelectWithBeforeExample />
}`,...(Bs=(Ws=H.parameters)==null?void 0:Ws.docs)==null?void 0:Bs.source}}};var Os,Gs,Ms;$.parameters={...$.parameters,docs:{...(Os=$.parameters)==null?void 0:Os.docs,source:{originalSource:`{
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
}`,...(Ms=(Gs=$.parameters)==null?void 0:Gs.docs)==null?void 0:Ms.source}}};var Js,Vs,Ps;Q.parameters={...Q.parameters,docs:{...(Js=Q.parameters)==null?void 0:Js.docs,source:{originalSource:`{
  render: () => <ChipGroupSizesExample />
}`,...(Ps=(Vs=Q.parameters)==null?void 0:Vs.docs)==null?void 0:Ps.source}}};var Rs,Xs,Ns;C.parameters={...C.parameters,docs:{...(Rs=C.parameters)==null?void 0:Rs.docs,source:{originalSource:`() => {
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
}`,...(Ns=(Xs=C.parameters)==null?void 0:Xs.docs)==null?void 0:Ns.source}}};var _s,Us,Ks;q.parameters={...q.parameters,docs:{...(_s=q.parameters)==null?void 0:_s.docs,source:{originalSource:`{
  render: () => <ChipGroupWithDisabledExample />
}`,...(Ks=(Us=q.parameters)==null?void 0:Us.docs)==null?void 0:Ks.source}}};var Hs,$s,Qs;Y.parameters={...Y.parameters,docs:{...(Hs=Y.parameters)==null?void 0:Hs.docs,source:{originalSource:`{
  render: () => <ChipGroupWrappingExample />
}`,...(Qs=($s=Y.parameters)==null?void 0:$s.docs)==null?void 0:Qs.source}}};export{C as ChipGroupResponsiveSizes,Q as ChipGroupSizes,q as ChipGroupWithDisabled,Y as ChipGroupWrapping,j as ConditionalBreakpoints,S as Default,V as Dismissable,X as DismissableStates,P as DismissableWithBefore,N as DismissableWithCustomLabel,R as DismissableWithPrimaryAction,B as EmptyItems,G as EmptyItemsInChipGroup,A as InlineWithText,E as Interactive,W as InterpolatedLabel,$ as KeyboardNavigation,K as MultiSelect,H as MultiSelectWithBefore,k as MultipleItems,M as OverflowInChipGroup,J as OverflowKeyboardAndFocus,O as OverflowStates,_ as SingleSelect,U as SingleSelectWithBefore,I as Sizes,T as SizesMatrix,F as States,v as UncontrolledGroup,L as UseCases,y as WithAfter,D as WithBefore,z as WithBeforeAndAfter,w as WithSlots,wn as __namedExportsOrder,zn as default};
