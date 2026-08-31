import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{m as N,e as O,b as z,h as F,s as K,B as n,c as W,d as U}from"./dsComponent-BOaIIHJG.js";import{C as $}from"./Card-DF18p0O9.js";import{T as G}from"./Text-Do3oYkTU.js";import"./index-BKyFwriW.js";import"./_commonjsHelpers-CqkleIqs.js";const h=O("skeleton",{variant:"text",animation:"pulse"},[]),E={variant:["text","circular","rounded","rectangular"],animation:["pulse","wave","none"],hasChildren:["true"],fitContent:["true"],heightAuto:["true"]},g=Object.keys(E),H=Object.assign(N(h.recipeFn),{__recipe__:!0,__name__:"skeleton",__getCompoundVariantCss__:h.__getCompoundVariantCss__,raw:a=>a,variantKeys:g,variantMap:E,merge(a){return F(this,a)},splitVariantProps(a){return z(a,g)},getVariantProps:h.getVariantProps}),t=a=>{const{animation:c="pulse",component:D="span",variant:q="text",width:p,height:m,children:u,...I}=a,[R,A]=K(I),d=!!u,M=H({variant:q,animation:c===!1?"none":c,hasChildren:d,fitContent:d&&p==null,heightAuto:d&&m==null});return e.jsx(n,{...U("Skeleton"),as:D,width:p,height:m,className:W(M,R),...A,children:u})};t.__docgenInfo={description:'Reserves the shape of content while that content is loading.\n\n`Skeleton` is visual only and does not announce loading. Put it in a region\nwith an appropriate accessible loading state when users need that feedback.\n\n@example\n```tsx\n<Skeleton width="full" height="40" aria-hidden />\n```',methods:[],displayName:"Skeleton",props:{animation:{required:!1,tsType:{name:"union",raw:"'pulse' | 'wave' | false",elements:[{name:"literal",value:"'pulse'"},{name:"literal",value:"'wave'"},{name:"literal",value:"false"}]},description:'@default "pulse"'},variant:{required:!1,tsType:{name:"union",raw:"'text' | 'circular' | 'rounded' | 'rectangular'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'circular'"},{name:"literal",value:"'rounded'"},{name:"literal",value:"'rectangular'"}]},description:'@default "text"'},component:{required:!1,tsType:{name:"ElementType"},description:'@default "span"'},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Explicit placeholder width; content determines width when omitted."},height:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Explicit placeholder height; content determines height when omitted."},children:{required:!1,tsType:{name:"ReactNode"},description:"Content whose dimensions the skeleton should match."}}};const te={title:"Components/Skeleton",component:t,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Skeleton is for loading placeholders where the final layout is known. Use it to reserve space and reduce layout shift. Do not use it as a generic loading spinner or for content that will not appear in the same shape."}}},argTypes:{variant:{control:"select",options:["text","circular","rounded","rectangular"]},animation:{control:"select",options:["pulse","wave",!1]},component:{control:"text"},width:{control:"text"},height:{control:"text"}},args:{variant:"text",animation:"pulse",component:"span",width:"280",height:"24"}},r={render:a=>e.jsx(t,{...a})},i={render:()=>e.jsxs(n,{display:"grid",gap:"8",children:[e.jsx(t,{variant:"text",width:"280",height:"24"}),e.jsx(t,{variant:"rounded",width:"280",height:"40"}),e.jsx(t,{variant:"rectangular",width:"280",height:"40"}),e.jsx(t,{variant:"circular",width:"48",height:"48"})]}),parameters:{controls:{disable:!0}}},s={render:()=>e.jsxs(n,{display:"grid",gap:"8",children:[e.jsx(t,{animation:"pulse",width:"280",height:"24"}),e.jsx(t,{animation:"wave",width:"280",height:"24"}),e.jsx(t,{animation:!1,width:"280",height:"24"})]}),parameters:{controls:{disable:!0}}},o={name:"Children: Masked Content",render:()=>e.jsx(t,{variant:"text",animation:"wave",children:e.jsx(G,{weight:"bold",children:"Invoice #C-1042"})}),parameters:{controls:{disable:!0}}},l={name:"Ex: Dashboard Placeholder",render:()=>e.jsxs($,{p:"16",display:"grid",gap:"8",maxW:"sm",children:[e.jsxs(n,{display:"grid",gap:"4",children:[e.jsx(t,{variant:"text",width:"160",height:"20"}),e.jsx(t,{variant:"text",width:"220",height:"24"})]}),e.jsxs(n,{display:"grid",gap:"6",children:[e.jsx(t,{variant:"rounded",width:"100%",height:"16"}),e.jsx(t,{variant:"rounded",width:"85%",height:"16"}),e.jsx(t,{variant:"rounded",width:"70%",height:"16"})]}),e.jsxs(n,{display:"flex",alignItems:"center",gap:"8",children:[e.jsx(t,{variant:"circular",width:"40",height:"40"}),e.jsxs(n,{display:"grid",gap:"3",children:[e.jsx(t,{variant:"text",width:"140",height:"20"}),e.jsx(t,{variant:"text",width:"100",height:"16"})]})]})]}),parameters:{controls:{disable:!0}}};var x,w,v;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <Skeleton {...args} />
}`,...(v=(w=r.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var k,f,S;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <Box display="grid" gap="8">
      <Skeleton variant="text" width="280" height="24" />
      <Skeleton variant="rounded" width="280" height="40" />
      <Skeleton variant="rectangular" width="280" height="40" />
      <Skeleton variant="circular" width="48" height="48" />
    </Box>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(S=(f=i.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var j,y,b;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Box display="grid" gap="8">
      <Skeleton animation="pulse" width="280" height="24" />
      <Skeleton animation="wave" width="280" height="24" />
      <Skeleton animation={false} width="280" height="24" />
    </Box>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(b=(y=s.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var C,_,B;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Children: Masked Content',
  render: () => <Skeleton variant="text" animation="wave">
      <Text weight="bold">Invoice #C-1042</Text>
    </Skeleton>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(B=(_=o.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var T,P,V;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Ex: Dashboard Placeholder',
  render: () => <Card p="16" display="grid" gap="8" maxW="sm">
      <Box display="grid" gap="4">
        <Skeleton variant="text" width="160" height="20" />
        <Skeleton variant="text" width="220" height="24" />
      </Box>
      <Box display="grid" gap="6">
        <Skeleton variant="rounded" width="100%" height="16" />
        <Skeleton variant="rounded" width="85%" height="16" />
        <Skeleton variant="rounded" width="70%" height="16" />
      </Box>
      <Box display="flex" alignItems="center" gap="8">
        <Skeleton variant="circular" width="40" height="40" />
        <Box display="grid" gap="3">
          <Skeleton variant="text" width="140" height="20" />
          <Skeleton variant="text" width="100" height="16" />
        </Box>
      </Box>
    </Card>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(V=(P=l.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};const ae=["Default","Variants","Animations","ChildrenSizing","ExDashboardPlaceholder"];export{s as Animations,o as ChildrenSizing,r as Default,l as ExDashboardPlaceholder,i as Variants,ae as __namedExportsOrder,te as default};
