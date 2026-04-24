import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{m as N,c as B,s as C,a as D,g as P,d as k,e as w,B as L}from"./Box-BV3UiX_0.js";import{L as V}from"./Link-DFDNTh9t.js";import{T as n}from"./Text-CaLd5y6v.js";import"./index-BKyFwriW.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Icon-B7squOvl.js";const v={},q=[],M=[["wrapper","breadcrumbs__wrapper"],["slash","breadcrumbs__slash"],["linkSegment","breadcrumbs__linkSegment"],["currentSegment","breadcrumbs__currentSegment"]],A=M.map(([e,r])=>[e,D(r,v,P(q,e))]),F=N((e={})=>Object.fromEntries(A.map(([r,m])=>[r,m.recipeFn(e)]))),d=[],O=e=>({...v,...B(e)}),T=Object.assign(F,{__recipe__:!1,__name__:"breadcrumbs",raw:e=>e,classNameMap:{},variantKeys:d,variantMap:{},splitVariantProps(e){return C(e,d)},getVariantProps:O}),l=e=>{const{items:r,...m}=e,[y,j]=k(m),t=T();return a.jsx(n,{as:"ul",className:w(t.wrapper,y),...j,children:r==null?void 0:r.map((s,E)=>a.jsxs(n,{as:"li",children:[s.href?a.jsx(V,{href:s.href,className:t.linkSegment,children:s.label}):a.jsx(n,{className:t.currentSegment,children:s.label}),E<(r==null?void 0:r.length)-1&&a.jsx(n,{className:t.slash,children:"/"})]},s.id))})};l.__docgenInfo={description:"",methods:[],displayName:"Breadcrumbs",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ id: string; label: string; href?: string }",signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!1}}]}}],raw:"{ id: string; label: string; href?: string }[]"},description:""}}};const G={title:"Components/Breadcrumbs",component:l,tags:["autodocs"],parameters:{layout:"centered"},args:{items:[{id:"home",label:"Home",href:"#"},{id:"billing",label:"Billing",href:"#"},{id:"invoice-1242",label:"Invoice #1242"}]}},o={args:{}},i={name:"Ex: Deep Navigation Path",render:()=>a.jsx(L,{maxW:"prose",children:a.jsx(l,{items:[{id:"dashboard",label:"Dashboard",href:"#"},{id:"customers",label:"Customers",href:"#"},{id:"acme",label:"Acme Manufacturing",href:"#"},{id:"contacts",label:"Contacts",href:"#"},{id:"primary",label:"Primary Contact"}]})}),parameters:{controls:{disable:!0}}},c={name:"Ex: Single Level",render:()=>a.jsx(l,{items:[{id:"settings",label:"Settings"}]}),parameters:{controls:{disable:!0}}};var p,u,b;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {}
}`,...(b=(u=o.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var g,h,f;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(f=(h=i.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var x,_,S;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(S=(_=c.parameters)==null?void 0:_.docs)==null?void 0:S.source}}};const J=["Default","ExDeepNavigation","ExSingleLevel"];export{o as Default,i as ExDeepNavigation,c as ExSingleLevel,J as __namedExportsOrder,G as default};
