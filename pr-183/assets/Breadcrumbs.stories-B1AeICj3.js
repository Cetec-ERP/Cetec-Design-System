import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as w,c as B,s as E,a as N,g as C,b as D,d as P,e as L,B as V}from"./dsComponent-BZ80dv4C.js";import{L as q}from"./Link-BLzRBrQM.js";import{T as n}from"./Text-BnqT0XMf.js";import"./index-BKyFwriW.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Icon-CPS1ygZT.js";const S={},A=[],M=[["wrapper","breadcrumbs__wrapper"],["slash","breadcrumbs__slash"],["linkSegment","breadcrumbs__linkSegment"],["currentSegment","breadcrumbs__currentSegment"]],O=M.map(([e,r])=>[e,N(r,S,C(A,e))]),F=w((e={})=>Object.fromEntries(O.map(([r,m])=>[r,m.recipeFn(e)]))),d=[],I=e=>({...S,...B(e)}),K=Object.assign(F,{__recipe__:!1,__name__:"breadcrumbs",raw:e=>e,classNameMap:{},variantKeys:d,variantMap:{},splitVariantProps(e){return E(e,d)},getVariantProps:I}),l=e=>{const{items:r,...m}=e,[y,j]=D(m),t=K();return a.jsx(n,{...L("Breadcrumbs"),as:"ul",className:P(t.wrapper,y),...j,children:r==null?void 0:r.map((s,k)=>a.jsxs(n,{as:"li",children:[s.href?a.jsx(q,{href:s.href,className:t.linkSegment,children:s.label}):a.jsx(n,{className:t.currentSegment,children:s.label}),k<(r==null?void 0:r.length)-1&&a.jsx(n,{className:t.slash,children:"/"})]},s.id))})};l.__docgenInfo={description:`Displays the current navigation path as a semantic unordered list.

Linked segments use {@link Link}; segments without \`href\` are rendered as
plain text. Use page navigation instead when the hierarchy is not a path to
the current location.

@example
\`\`\`tsx
<Breadcrumbs
  items={[
    { id: 'home', label: 'Home', href: '/' },
    { id: 'invoices', label: 'Invoices' },
  ]}
/>
\`\`\``,methods:[],displayName:"Breadcrumbs",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ id: string; label: string; href?: string }",signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!1}}]}}],raw:"{ id: string; label: string; href?: string }[]"},description:"Ordered path segments. A segment with `href` renders as a link; a segment\nwithout it renders as plain text, which is normally the current page.\nKeep the final segment non-linked when it represents the current page."}}};const G={title:"Components/Breadcrumbs",component:l,tags:["autodocs"],parameters:{layout:"centered"},args:{items:[{id:"home",label:"Home",href:"#"},{id:"billing",label:"Billing",href:"#"},{id:"invoice-1242",label:"Invoice #1242"}]}},i={args:{}},o={name:"Ex: Deep Navigation Path",render:()=>a.jsx(V,{maxW:"prose",children:a.jsx(l,{items:[{id:"dashboard",label:"Dashboard",href:"#"},{id:"customers",label:"Customers",href:"#"},{id:"acme",label:"Acme Manufacturing",href:"#"},{id:"contacts",label:"Contacts",href:"#"},{id:"primary",label:"Primary Contact"}]})}),parameters:{controls:{disable:!0}}},c={name:"Ex: Single Level",render:()=>a.jsx(l,{items:[{id:"settings",label:"Settings"}]}),parameters:{controls:{disable:!0}}};var p,u,b;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {}
}`,...(b=(u=i.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var g,h,f;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Ex: Deep Navigation Path',
  render: () => <Box maxW="prose">
      <Breadcrumbs items={[{
      id: 'dashboard',
      label: 'Dashboard',
      href: '#'
    }, {
      id: 'customers',
      label: 'Customers',
      href: '#'
    }, {
      id: 'acme',
      label: 'Acme Manufacturing',
      href: '#'
    }, {
      id: 'contacts',
      label: 'Contacts',
      href: '#'
    }, {
      id: 'primary',
      label: 'Primary Contact'
    }]} />
    </Box>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(f=(h=o.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var x,_,v;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Ex: Single Level',
  render: () => <Breadcrumbs items={[{
    id: 'settings',
    label: 'Settings'
  }]} />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(v=(_=c.parameters)==null?void 0:_.docs)==null?void 0:v.source}}};const J=["Default","ExDeepNavigation","ExSingleLevel"];export{i as Default,o as ExDeepNavigation,c as ExSingleLevel,J as __namedExportsOrder,G as default};
