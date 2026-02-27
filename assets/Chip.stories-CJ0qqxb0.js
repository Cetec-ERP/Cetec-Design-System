import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./index-BCtMShv3.js";import{m as Is,b as Ds,d as Fs,e as Ts,g as As,s as xs,B as us,a as hs,H as ws,W as Ws,F as r,G as Ms}from"./Box-Do4kfhe3.js";import{I as n}from"./Icon-DZeLJqXX.js";import{S as ks}from"./Spinner-gDUrdfRc.js";import{T as t}from"./Text-DeSZ72bP.js";import{B as ne}from"./Badge-CSN2ydID.js";import{A as re}from"./Avatar-CO9aEL8s.js";const gs={size:"md"},Bs=[{size:"md",before:!0,css:{container:{ps:"2"}}},{size:"md",after:!0,css:{container:{pe:"2"}}},{size:"sm",before:!0,css:{container:{ps:"2"}}},{size:"sm",after:!0,css:{container:{pe:"2"}}},{size:"lg",before:!0,css:{container:{ps:"4"}}},{size:"lg",after:!0,css:{container:{pe:"4"}}}],Ls=[["container","chip__container"],["icon","chip__icon"]],Es=Ls.map(([i,l])=>[i,Ts(l,gs,As(Bs,i))]),Ns=Is((i={})=>Object.fromEntries(Es.map(([l,o])=>[l,o.recipeFn(i)]))),ae=["size","before","after"],Rs=i=>({...gs,...Ds(i)}),Gs=Object.assign(Ns,{__recipe__:!1,__name__:"chip",raw:i=>i,classNameMap:{},variantKeys:ae,variantMap:{size:["md","sm","lg"],before:["true"],after:["true"]},splitVariantProps(i){return Fs(i,ae)},getVariantProps:Rs}),fs=d.createContext(null),Ps=()=>d.useContext(fs),Vs={sm:"20",md:"20",lg:"24"},s=i=>{const{size:l="md",children:o,loading:c,disabled:C,deleted:S,before:x,after:T,dismissable:z,onDismiss:A,value:p,gap:Z,onClick:w,...ee}=i,[I,f]=xs(ee),a=Ps(),W=d.useRef(null),u=p!==void 0&&a!==null;d.useEffect(()=>{if(u&&p&&a)return a.registerChip(p,W),()=>a.unregisterChip(p)},[u,p,a]);const m=u?a.type==="single"?a.value===p:Array.isArray(a.value)&&a.value.includes(p):!1,j=u&&a.type==="multi"&&m,b=Gs({size:l,before:!!x||j,after:!!T||z}),y=Vs[l],M=g=>{if(z&&A)A();else if(u&&a)if(a.type==="single")a.onChange(p);else{const se=Array.isArray(a.value)?a.value:[],vs=se.includes(p)?se.filter(ys=>ys!==p):[...se,p];a.onChange(vs)}else w&&w(g)},F=g=>{!u||!a||!p||a.type==="single"&&(g.key==="ArrowRight"||g.key==="ArrowDown"?(g.preventDefault(),a.focusChip("next",p)):(g.key==="ArrowLeft"||g.key==="ArrowUp")&&(g.preventDefault(),a.focusChip("prev",p)))},te=typeof o=="string"?o:void 0,Ss=z&&te?`${te}, dismiss`:void 0,bs=u?a.type==="single"?"radio":"checkbox":void 0,zs=()=>{if(!(!u||!a))return a.type==="single"?m||!(a.value!==void 0&&a.value!=="")&&a.chipValues[0]===p?0:-1:0};return e.jsxs(us,{as:"button",ref:W,className:hs(b.container,I),onClick:M,onKeyDown:F,tabIndex:zs(),...C&&{disabled:!0,"aria-disabled":!0},"aria-label":Ss,role:bs,"aria-checked":u?m:void 0,"data-selected":m?!0:void 0,"data-loading":c?!0:void 0,"aria-busy":c?!0:void 0,type:"button","data-deleted":S?!0:void 0,...f,children:[e.jsxs(ws,{gap:Z||"4",opacity:c?0:1,children:[j&&e.jsx(n,{name:"check",size:y,className:b.icon,"aria-hidden":!0}),x,o,z?e.jsx(n,{name:"x",size:y,className:b.icon,"aria-hidden":!0}):T]}),c&&e.jsx(ks,{size:"xs",centered:!0})]})};s.__docgenInfo={description:"",methods:[],displayName:"Chip",props:{children:{required:!0,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},before:{required:!1,tsType:{name:"ReactNode"},description:"Content to render before the label (e.g., Icon, Avatar)"},after:{required:!1,tsType:{name:"ReactNode"},description:"Content to render after the label (e.g., Badge, Icon)"},disabled:{required:!1,tsType:{name:"boolean"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},deleted:{required:!1,tsType:{name:"boolean"},description:""},dismissable:{required:!1,tsType:{name:"boolean"},description:""},onDismiss:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},value:{required:!1,tsType:{name:"string"},description:""},gap:{required:!1,tsType:{name:"NumericSizeToken"},description:""}}};const h=i=>{const{type:l,value:o,onChange:c,children:C,label:S,id:x,name:T,gap:z="4",className:A,...p}=i,[Z,w]=xs(p),ee=l==="single"?"radiogroup":"group",I=d.useRef(new Map),f=d.useRef([]),a=d.useCallback((m,j)=>{I.current.set(m,j),f.current.includes(m)||f.current.push(m)},[]),W=d.useCallback(m=>{I.current.delete(m),f.current=f.current.filter(j=>j!==m)},[]),u=d.useCallback((m,j)=>{var M;const D=f.current,v=D.indexOf(j);if(v===-1)return;let b;m==="next"?b=v===D.length-1?0:v+1:b=v===0?D.length-1:v-1;const y=D[b];if(y){const F=I.current.get(y);(M=F==null?void 0:F.current)==null||M.focus(),l==="single"&&c(y)}},[l,c]);return e.jsx(fs.Provider,{value:{type:l,value:o,onChange:c,name:T,registerChip:a,unregisterChip:W,focusChip:u,chipValues:f.current},children:e.jsx(Ws,{className:hs(Z,A),role:ee,"aria-label":S,"aria-labelledby":x?`${x}-label`:void 0,id:x,gap:z,...w,children:C})})};h.__docgenInfo={description:"",methods:[],displayName:"ChipGroup",props:{type:{required:!0,tsType:{name:"union",raw:"'single' | 'multi'",elements:[{name:"literal",value:"'single'"},{name:"literal",value:"'multi'"}]},description:""},value:{required:!0,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string | string[]) => void",signature:{arguments:[{type:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},name:"value"}],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},label:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:""}}};const ie={user1:"https://i.pravatar.cc/150?img=1"},nn={title:"Components/Chip",component:s,tags:["autodocs"],argTypes:{size:{control:"select",options:["md","sm","lg"],description:"Size variants of chip"},before:{control:!1,description:"Content to render before the label (e.g., Icon, Avatar)"},after:{control:!1,description:"Content to render after the label (e.g., Badge, Icon)"},disabled:{control:"boolean",description:"Disables the chip interaction"},loading:{control:"boolean",description:"Shows loading state with pulse animation"},deleted:{control:"boolean",description:"Shows deleted state with strikethrough"}},args:{children:"Chip Label",size:"md"},parameters:{layout:"centered"}},k={render:()=>e.jsx(s,{children:"Default"})},B={render:()=>e.jsxs(r,{gap:"4",alignItems:"center",children:[e.jsx(s,{size:"sm",children:"Small"}),e.jsx(s,{children:"Medium (default)"}),e.jsx(s,{size:"lg",children:"Large"})]})},L={render:()=>e.jsxs(r,{gap:"4",flexDir:"column",alignItems:"center",children:[e.jsxs(r,{gap:"4",alignItems:"center",children:[e.jsx(s,{size:"sm",before:e.jsx(ne,{count:2,size:"sm",variant:"success"}),children:"Small"}),e.jsx(s,{before:e.jsx(ne,{count:30,variant:"neutral"}),children:"Medium"}),e.jsx(s,{size:"lg",before:e.jsx(ne,{count:100,size:"lg"}),children:"Large"})]}),e.jsxs(r,{gap:"4",alignItems:"center",children:[e.jsx(s,{size:"sm",before:e.jsx(re,{size:"xs",src:ie.user1,name:"John Doe"}),children:"Small"}),e.jsx(s,{before:e.jsx(re,{size:"sm",src:ie.user1,name:"John Doe"}),children:"Medium"}),e.jsx(s,{size:"lg",before:e.jsx(re,{src:ie.user1,name:"John Doe"}),children:"Large"})]}),e.jsxs(r,{gap:"4",alignItems:"center",children:[e.jsx(s,{size:"sm",before:e.jsx(n,{name:"file",size:"20"}),children:"Small"}),e.jsx(s,{before:e.jsx(n,{name:"file",size:"20"}),children:"Medium"}),e.jsx(s,{size:"lg",before:e.jsx(n,{name:"file",size:"24"}),children:"Large"})]})]})},E={render:()=>e.jsxs(r,{gap:"4",alignItems:"center",children:[e.jsx(s,{size:"sm",after:e.jsx(n,{name:"x",size:"20"}),children:"Small"}),e.jsx(s,{after:e.jsx(n,{name:"x",size:"20"}),children:"Medium"}),e.jsx(s,{size:"lg",after:e.jsx(n,{name:"x",size:"24"}),children:"Large"})]})},N={render:()=>e.jsxs(r,{gap:"4",alignItems:"center",children:[e.jsx(s,{size:"sm",before:e.jsx(n,{name:"user",size:"20"}),after:e.jsx(n,{name:"x",size:"20"}),children:"Small"}),e.jsx(s,{before:e.jsx(n,{name:"user",size:"20"}),after:e.jsx(n,{name:"x",size:"20"}),children:"Medium"}),e.jsx(s,{size:"lg",before:e.jsx(n,{name:"user",size:"24"}),after:e.jsx(n,{name:"x",size:"24"}),children:"Large"})]})},R={render:()=>e.jsxs(Ms,{gridTemplateColumns:"auto auto",gap:"24",children:[e.jsx(t,{textStyle:"mono.xs",children:"Default:"}),e.jsx(s,{before:e.jsx(n,{name:"file",size:"20"}),children:"Interactive"}),e.jsx(t,{textStyle:"mono.xs",children:"Disabled:"}),e.jsx(s,{disabled:!0,before:e.jsx(n,{name:"file",size:"20"}),children:"Disabled"}),e.jsx(t,{textStyle:"mono.xs",children:"Loading:"}),e.jsx(s,{loading:!0,before:e.jsx(n,{name:"file",size:"20"}),children:"Loading..."}),e.jsx(t,{textStyle:"mono.xs",children:"Deleted:"}),e.jsx(s,{deleted:!0,before:e.jsx(n,{name:"file",size:"20"}),children:"Deleted Item"})]})},G={render:()=>e.jsxs(r,{flexDir:"column",gap:"12",children:[e.jsx(t,{textStyle:"mono.xs",children:"Chips can be interactive buttons:"}),e.jsxs(r,{gap:"2",children:[e.jsx(s,{onClick:()=>alert("Clicked!"),children:"Click Me"}),e.jsx(s,{before:e.jsx(n,{name:"plus",size:"20"}),onClick:()=>alert("Add clicked!"),children:"Add Item"}),e.jsx(s,{after:e.jsx(n,{name:"x",size:"20"}),onClick:()=>alert("Remove clicked!"),children:"Remove"})]})]})},P={render:()=>e.jsxs(r,{flexDir:"column",gap:"12",children:[e.jsxs(r,{flexDir:"column",gap:"2",children:[e.jsx(t,{textStyle:"mono.xs",children:"No Content Before/After"}),e.jsxs(r,{gap:"4",alignItems:"center",children:[e.jsx(s,{size:"sm",children:"Small"}),e.jsx(s,{children:"Medium"}),e.jsx(s,{size:"lg",children:"Large"})]})]}),e.jsxs(r,{flexDir:"column",gap:"2",children:[e.jsx(t,{textStyle:"mono.xs",children:"With Before"}),e.jsxs(r,{gap:"4",alignItems:"center",children:[e.jsx(s,{size:"sm",before:e.jsx(n,{name:"file",size:"20"}),children:"Small"}),e.jsx(s,{before:e.jsx(n,{name:"file",size:"20"}),children:"Medium"}),e.jsx(s,{size:"lg",before:e.jsx(n,{name:"file",size:"24"}),children:"Large"})]})]}),e.jsxs(r,{flexDir:"column",gap:"2",children:[e.jsx(t,{textStyle:"mono.xs",children:"With After"}),e.jsxs(r,{gap:"4",alignItems:"center",children:[e.jsx(s,{size:"sm",after:e.jsx(n,{name:"x",size:"20"}),children:"Small"}),e.jsx(s,{after:e.jsx(n,{name:"x",size:"20"}),children:"Medium"}),e.jsx(s,{size:"lg",after:e.jsx(n,{name:"x",size:"24"}),children:"Large"})]})]}),e.jsxs(r,{flexDir:"column",gap:"2",children:[e.jsx(t,{textStyle:"mono.xs",children:"With Before and After"}),e.jsxs(r,{gap:"4",alignItems:"center",children:[e.jsx(s,{size:"sm",before:e.jsx(n,{name:"user",size:"20"}),after:e.jsx(n,{name:"x",size:"20"}),children:"Small"}),e.jsx(s,{before:e.jsx(n,{name:"user",size:"20"}),after:e.jsx(n,{name:"x",size:"20"}),children:"Medium"}),e.jsx(s,{size:"lg",before:e.jsx(n,{name:"user",size:"24"}),after:e.jsx(n,{name:"x",size:"24"}),children:"Large"})]})]})]})},V={render:()=>e.jsx(us,{maxW:"lg",children:e.jsxs(t,{children:["Chips can appear inline within text, like tagging"," ",e.jsx(s,{before:e.jsx(n,{name:"user",size:"20"}),children:"John Doe"})," in a conversation or referencing"," ",e.jsx(s,{before:e.jsx(n,{name:"file",size:"20"}),children:"Project Plan"})," in your notes."]})})},_={render:()=>e.jsxs(r,{flexDir:"column",gap:"20",children:[e.jsxs(r,{flexDir:"column",gap:"2",children:[e.jsx(t,{textStyle:"mono.xs",children:"Filter Tags"}),e.jsxs(r,{gap:"4",flexWrap:"wrap",children:[e.jsx(s,{after:e.jsx(n,{name:"x",size:"20"}),children:"React"}),e.jsx(s,{after:e.jsx(n,{name:"x",size:"20"}),children:"TypeScript"}),e.jsx(s,{after:e.jsx(n,{name:"x",size:"20"}),children:"Panda CSS"}),e.jsx(s,{before:e.jsx(n,{name:"plus",size:"20"}),children:"Add Filter"})]})]}),e.jsxs(r,{flexDir:"column",gap:"2",children:[e.jsx(t,{textStyle:"mono.xs",children:"Categories"}),e.jsxs(r,{gap:"4",flexWrap:"wrap",children:[e.jsx(s,{before:e.jsx(n,{name:"file",size:"20"}),children:"Documentation"}),e.jsx(s,{before:e.jsx(n,{name:"calendar",size:"20"}),children:"Events"}),e.jsx(s,{before:e.jsx(n,{name:"user",size:"20"}),children:"People"})]})]}),e.jsxs(r,{flexDir:"column",gap:"2",children:[e.jsx(t,{textStyle:"mono.xs",children:"Actions"}),e.jsxs(r,{gap:"4",flexWrap:"wrap",children:[e.jsx(s,{before:e.jsx(n,{name:"plus",size:"20"}),children:"New Item"}),e.jsx(s,{before:e.jsx(n,{name:"check",size:"20"}),children:"Approve"}),e.jsx(s,{deleted:!0,children:"Archived"})]})]})]})},_s=()=>{const[i,l]=d.useState(["React","TypeScript","Panda CSS","Vite"]),o=c=>{l(C=>C.filter(S=>S!==c))};return e.jsxs(r,{flexDir:"column",gap:"12",children:[e.jsx(t,{textStyle:"mono.xs",children:"Click the X to dismiss tags:"}),e.jsx(r,{gap:"4",flexWrap:"wrap",children:i.map(c=>e.jsx(s,{dismissable:!0,onDismiss:()=>o(c),children:c},c))}),i.length===0&&e.jsx(t,{color:"text.muted",children:"All tags dismissed!"})]})},q={render:()=>e.jsx(_s,{})},O={render:()=>e.jsxs(r,{gap:"4",children:[e.jsx(s,{dismissable:!0,before:e.jsx(n,{name:"file",size:"20"}),onDismiss:()=>{},children:"Document"}),e.jsx(s,{dismissable:!0,before:e.jsx(n,{name:"user",size:"20"}),onDismiss:()=>{},children:"Person"}),e.jsx(s,{dismissable:!0,before:e.jsx(n,{name:"calendar",size:"20"}),onDismiss:()=>{},children:"Event"})]})},js=()=>{const[i,l]=d.useState("");return e.jsxs(r,{flexDir:"column",gap:"12",children:[e.jsx(t,{textStyle:"mono.md",children:"Select one size:"}),e.jsxs(h,{type:"single",value:i,onChange:o=>l(o),label:"Size selection",children:[e.jsx(s,{value:"sm",children:"Small"}),e.jsx(s,{value:"md",children:"Medium"}),e.jsx(s,{value:"lg",children:"Large"}),e.jsx(s,{value:"xl",children:"X-Large"})]}),e.jsxs(t,{textStyle:"mono.xs",children:["Selected: ",i]})]})},J={render:()=>e.jsx(js,{})},qs=()=>{const[i,l]=d.useState("grid");return e.jsxs(r,{flexDir:"column",gap:"12",children:[e.jsx(t,{textStyle:"mono.md",children:"Select a view:"}),e.jsxs(h,{type:"single",value:i,onChange:o=>l(o),label:"View selection",children:[e.jsx(s,{value:"list",before:e.jsx(n,{name:"menu",size:"20"}),children:"List"}),e.jsx(s,{value:"grid",before:e.jsx(n,{name:"view-grid",size:"20"}),children:"Grid"}),e.jsx(s,{value:"calendar",before:e.jsx(n,{name:"calendar",size:"20"}),children:"Calendar"})]}),e.jsxs(t,{textStyle:"mono.xs",children:["Selected: ",i]})]})},K={render:()=>e.jsx(qs,{})},Cs=()=>{const[i,l]=d.useState(["react","typescript"]);return e.jsxs(r,{flexDir:"column",gap:"12",children:[e.jsx(t,{textStyle:"mono.md",children:"Select your skills (check icon appears when selected):"}),e.jsxs(h,{type:"multi",value:i,onChange:o=>l(o),label:"Skills selection",children:[e.jsx(s,{value:"react",children:"React"}),e.jsx(s,{value:"typescript",children:"TypeScript"}),e.jsx(s,{value:"vue",children:"Vue"}),e.jsx(s,{value:"angular",children:"Angular"}),e.jsx(s,{value:"svelte",children:"Svelte"})]}),e.jsxs(t,{textStyle:"mono.xs",children:["Selected: ",i.join(", ")||"None"]})]})},U={render:()=>e.jsx(Cs,{})},Os=()=>{const[i,l]=d.useState(["docs"]);return e.jsxs(r,{flexDir:"column",gap:"12",children:[e.jsx(t,{textStyle:"mono.md",children:"Filter by category:"}),e.jsxs(h,{type:"multi",value:i,onChange:o=>l(o),label:"Category filter",children:[e.jsx(s,{value:"docs",before:e.jsx(n,{name:"file",size:"20"}),children:"Documents"}),e.jsx(s,{value:"images",before:e.jsx(n,{name:"image",size:"20"}),children:"Images"}),e.jsx(s,{value:"videos",before:e.jsx(n,{name:"video",size:"20"}),children:"Videos"}),e.jsx(s,{value:"audio",before:e.jsx(n,{name:"broadcast",size:"20"}),children:"Audio"})]}),e.jsxs(t,{textStyle:"mono.xs",children:["Selected: ",i.join(", ")||"None"]})]})},$={render:()=>e.jsx(Os,{})},H={render:()=>e.jsxs(r,{flexDir:"column",gap:"40",children:[e.jsxs(r,{flexDir:"column",gap:"2",children:[e.jsx(t,{textStyle:"mono.md",color:"text",fontWeight:"bold",children:"Single Select (arrow keys navigate & select):"}),e.jsx(js,{})]}),e.jsxs(r,{flexDir:"column",gap:"2",children:[e.jsx(t,{textStyle:"mono.md",color:"text",fontWeight:"bold",children:"Multi Select (tab between, space/enter toggles):"}),e.jsx(Cs,{})]})]})},Js=()=>{const[i,l]=d.useState("option-a"),[o,c]=d.useState("option-a"),[C,S]=d.useState("option-a");return e.jsxs(r,{flexDir:"column",gap:"24",children:[e.jsxs(r,{flexDir:"column",gap:"2",children:[e.jsx(t,{textStyle:"mono.xs",children:"Small"}),e.jsxs(h,{type:"single",value:i,onChange:x=>l(x),label:"Small chip group",children:[e.jsx(s,{value:"option-a",size:"sm",children:"Option A"}),e.jsx(s,{value:"option-b",size:"sm",children:"Option B"}),e.jsx(s,{value:"option-c",size:"sm",children:"Option C"})]})]}),e.jsxs(r,{flexDir:"column",gap:"2",children:[e.jsx(t,{textStyle:"mono.xs",children:"Medium"}),e.jsxs(h,{type:"single",value:o,onChange:x=>c(x),label:"Medium chip group",children:[e.jsx(s,{value:"option-a",children:"Option A"}),e.jsx(s,{value:"option-b",children:"Option B"}),e.jsx(s,{value:"option-c",children:"Option C"})]})]}),e.jsxs(r,{flexDir:"column",gap:"2",children:[e.jsx(t,{textStyle:"mono.xs",children:"Large"}),e.jsxs(h,{type:"single",value:C,onChange:x=>S(x),label:"Large chip group",children:[e.jsx(s,{value:"option-a",size:"lg",children:"Option A"}),e.jsx(s,{value:"option-b",size:"lg",children:"Option B"}),e.jsx(s,{value:"option-c",size:"lg",children:"Option C"})]})]})]})},X={render:()=>e.jsx(Js,{})},Ks=()=>{const[i,l]=d.useState("active");return e.jsxs(r,{flexDir:"column",gap:"12",children:[e.jsx(t,{textStyle:"mono.md",children:"Individual chips can be disabled within a group:"}),e.jsxs(h,{type:"single",value:i,onChange:o=>l(o),label:"Options with disabled",children:[e.jsx(s,{value:"active",children:"Active"}),e.jsx(s,{value:"pending",children:"Pending"}),e.jsx(s,{value:"unavailable",disabled:!0,children:"Unavailable"}),e.jsx(s,{value:"archived",children:"Archived"})]}),e.jsxs(t,{textStyle:"mono.xs",children:["Selected: ",i]})]})},Q={render:()=>e.jsx(Ks,{})},Us=()=>{const[i,l]=d.useState(["react","typescript"]),o=["React","TypeScript","JavaScript","Vue","Angular","Svelte","Next.js","Remix","Astro","Node.js","Python","Go","Rust","GraphQL","REST","Docker"];return e.jsxs(r,{flexDir:"column",gap:"12",maxW:"md",children:[e.jsx(t,{textStyle:"mono.md",children:"ChipGroup wraps when chips exceed container width:"}),e.jsx(h,{type:"multi",value:i,onChange:c=>l(c),label:"Skills selection",children:o.map(c=>e.jsx(s,{value:c.toLowerCase(),children:c},c.toLowerCase()))}),e.jsxs(t,{textStyle:"mono.xs",children:["Selected: ",i.join(", ")||"None"]})]})},Y={render:()=>e.jsx(Us,{})};var le,oe,ce;k.parameters={...k.parameters,docs:{...(le=k.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => <Chip>Default</Chip>
}`,...(ce=(oe=k.parameters)==null?void 0:oe.docs)==null?void 0:ce.source}}};var de,pe,me;B.parameters={...B.parameters,docs:{...(de=B.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => <Flex gap="4" alignItems="center">
      <Chip size="sm">Small</Chip>
      <Chip>Medium (default)</Chip>
      <Chip size="lg">Large</Chip>
    </Flex>
}`,...(me=(pe=B.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var xe,ue,he;L.parameters={...L.parameters,docs:{...(xe=L.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(he=(ue=L.parameters)==null?void 0:ue.docs)==null?void 0:he.source}}};var ge,fe,je;E.parameters={...E.parameters,docs:{...(ge=E.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: () => <Flex gap="4" alignItems="center">
      <Chip size="sm" after={<Icon name="x" size="20" />}>
        Small
      </Chip>
      <Chip after={<Icon name="x" size="20" />}>Medium</Chip>
      <Chip size="lg" after={<Icon name="x" size="24" />}>
        Large
      </Chip>
    </Flex>
}`,...(je=(fe=E.parameters)==null?void 0:fe.docs)==null?void 0:je.source}}};var Ce,Se,be;N.parameters={...N.parameters,docs:{...(Ce=N.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(be=(Se=N.parameters)==null?void 0:Se.docs)==null?void 0:be.source}}};var ze,ve,ye;R.parameters={...R.parameters,docs:{...(ze=R.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
}`,...(ye=(ve=R.parameters)==null?void 0:ve.docs)==null?void 0:ye.source}}};var Ie,De,Fe;G.parameters={...G.parameters,docs:{...(Ie=G.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(Fe=(De=G.parameters)==null?void 0:De.docs)==null?void 0:Fe.source}}};var Te,Ae,we;P.parameters={...P.parameters,docs:{...(Te=P.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(we=(Ae=P.parameters)==null?void 0:Ae.docs)==null?void 0:we.source}}};var We,Me,ke;V.parameters={...V.parameters,docs:{...(We=V.parameters)==null?void 0:We.docs,source:{originalSource:`{
  render: () => <Box maxW="lg">
      <Text>
        Chips can appear inline within text, like tagging{' '}
        <Chip before={<Icon name="user" size="20" />}>John Doe</Chip> in a
        conversation or referencing{' '}
        <Chip before={<Icon name="file" size="20" />}>Project Plan</Chip> in
        your notes.
      </Text>
    </Box>
}`,...(ke=(Me=V.parameters)==null?void 0:Me.docs)==null?void 0:ke.source}}};var Be,Le,Ee;_.parameters={..._.parameters,docs:{...(Be=_.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(Ee=(Le=_.parameters)==null?void 0:Le.docs)==null?void 0:Ee.source}}};var Ne,Re,Ge;q.parameters={...q.parameters,docs:{...(Ne=q.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  render: () => <DismissableExample />
}`,...(Ge=(Re=q.parameters)==null?void 0:Re.docs)==null?void 0:Ge.source}}};var Pe,Ve,_e;O.parameters={...O.parameters,docs:{...(Pe=O.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
}`,...(_e=(Ve=O.parameters)==null?void 0:Ve.docs)==null?void 0:_e.source}}};var qe,Oe,Je;J.parameters={...J.parameters,docs:{...(qe=J.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  render: () => <SingleSelectExample />
}`,...(Je=(Oe=J.parameters)==null?void 0:Oe.docs)==null?void 0:Je.source}}};var Ke,Ue,$e;K.parameters={...K.parameters,docs:{...(Ke=K.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  render: () => <SingleSelectWithBeforeExample />
}`,...($e=(Ue=K.parameters)==null?void 0:Ue.docs)==null?void 0:$e.source}}};var He,Xe,Qe;U.parameters={...U.parameters,docs:{...(He=U.parameters)==null?void 0:He.docs,source:{originalSource:`{
  render: () => <MultiSelectExample />
}`,...(Qe=(Xe=U.parameters)==null?void 0:Xe.docs)==null?void 0:Qe.source}}};var Ye,Ze,es;$.parameters={...$.parameters,docs:{...(Ye=$.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  render: () => <MultiSelectWithBeforeExample />
}`,...(es=(Ze=$.parameters)==null?void 0:Ze.docs)==null?void 0:es.source}}};var ss,ns,rs;H.parameters={...H.parameters,docs:{...(ss=H.parameters)==null?void 0:ss.docs,source:{originalSource:`{
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
}`,...(rs=(ns=H.parameters)==null?void 0:ns.docs)==null?void 0:rs.source}}};var is,ts,as;X.parameters={...X.parameters,docs:{...(is=X.parameters)==null?void 0:is.docs,source:{originalSource:`{
  render: () => <ChipGroupSizesExample />
}`,...(as=(ts=X.parameters)==null?void 0:ts.docs)==null?void 0:as.source}}};var ls,os,cs;Q.parameters={...Q.parameters,docs:{...(ls=Q.parameters)==null?void 0:ls.docs,source:{originalSource:`{
  render: () => <ChipGroupWithDisabledExample />
}`,...(cs=(os=Q.parameters)==null?void 0:os.docs)==null?void 0:cs.source}}};var ds,ps,ms;Y.parameters={...Y.parameters,docs:{...(ds=Y.parameters)==null?void 0:ds.docs,source:{originalSource:`{
  render: () => <ChipGroupWrappingExample />
}`,...(ms=(ps=Y.parameters)==null?void 0:ps.docs)==null?void 0:ms.source}}};const rn=["Default","Sizes","WithBefore","WithAfter","WithBeforeAndAfter","States","Interactive","SizesMatrix","InlineWithText","UseCases","Dismissable","DismissableWithBefore","SingleSelect","SingleSelectWithBefore","MultiSelect","MultiSelectWithBefore","KeyboardNavigation","ChipGroupSizes","ChipGroupWithDisabled","ChipGroupWrapping"];export{X as ChipGroupSizes,Q as ChipGroupWithDisabled,Y as ChipGroupWrapping,k as Default,q as Dismissable,O as DismissableWithBefore,V as InlineWithText,G as Interactive,H as KeyboardNavigation,U as MultiSelect,$ as MultiSelectWithBefore,J as SingleSelect,K as SingleSelectWithBefore,B as Sizes,P as SizesMatrix,R as States,_ as UseCases,E as WithAfter,L as WithBefore,N as WithBeforeAndAfter,rn as __namedExportsOrder,nn as default};
