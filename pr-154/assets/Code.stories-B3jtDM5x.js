import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{m as k,a as q,s as E,b as w,d as I,B as i,e as O}from"./Box-7d6-wXl0.js";import{T as x}from"./Text-Cm9k3dA6.js";import"./index-BKyFwriW.js";import"./_commonjsHelpers-CqkleIqs.js";const u=q("code",{},[]),F={},y=Object.keys(F),M=Object.assign(k(u.recipeFn),{__recipe__:!0,__name__:"code",__getCompoundVariantCss__:u.__getCompoundVariantCss__,raw:e=>e,variantKeys:y,variantMap:F,merge(e){return w(this,e)},splitVariantProps(e){return E(e,y)},getVariantProps:u.getVariantProps}),g=q("pre",{},[]),K={},b=Object.keys(K),W=Object.assign(k(g.recipeFn),{__recipe__:!0,__name__:"pre",__getCompoundVariantCss__:g.__getCompoundVariantCss__,raw:e=>e,variantKeys:b,variantMap:K,merge(e){return w(this,e)},splitVariantProps(e){return E(e,b)},getVariantProps:g.getVariantProps}),p=e=>{const{lang:c,children:d,...m}=e,[l,n]=I(m);return r.jsx(i,{as:"code",className:O(M({}),l),lang:c,...n,children:r.jsx(x,{color:"slate.0",children:d})})};p.__docgenInfo={description:"",methods:[],displayName:"Code",props:{children:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},as:{required:!1,tsType:{name:"ElementType"},description:""},role:{required:!1,tsType:{name:"string"},description:""},tabIndex:{required:!1,tsType:{name:"number"},description:""},lang:{required:!1,tsType:{name:"string"},description:""}}};const _=e=>{const{children:c,lang:d,...m}=e,[l,n]=I(m);return r.jsx(i,{as:"pre",className:O(W({}),l),...n,children:r.jsx(p,{lang:d,slot:"react",bg:"transparent",...n,children:c})})};_.__docgenInfo={description:"",methods:[],displayName:"Pre",props:{as:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},lang:{required:!1,tsType:{name:"string"},description:""}}};const G={title:"Components/Code",component:p,tags:["autodocs"],parameters:{layout:"centered"},args:{children:"npm run build"}},s={},t={render:()=>r.jsxs(x,{children:["Run ",r.jsx(p,{children:"npm run prepare"})," before building to regenerate Panda CSS types."]}),parameters:{controls:{disable:!0}}},a={render:()=>r.jsx(i,{maxW:"2xl",children:r.jsx(_,{lang:"tsx",children:`import { Button } from 'cetec-design-system';

export function SaveAction() {
  return <Button variant="primary">Save Changes</Button>;
}`})}),parameters:{controls:{disable:!0}}},o={name:"Ex: Command Snippet",render:()=>r.jsxs(i,{display:"grid",gap:"8",maxW:"prose",children:[r.jsx(x,{children:"Build Storybook for review:"}),r.jsx(_,{children:"npm run storybook:build"})]}),parameters:{controls:{disable:!0}}};var C,f,h;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:"{}",...(h=(f=s.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var P,S,j;t.parameters={...t.parameters,docs:{...(P=t.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <Text>
      Run <Code>npm run prepare</Code> before building to regenerate Panda CSS
      types.
    </Text>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(j=(S=t.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var B,T,V;a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <Box maxW="2xl">
      <Pre lang="tsx">{\`import { Button } from 'cetec-design-system';

export function SaveAction() {
  return <Button variant="primary">Save Changes</Button>;
}\`}</Pre>
    </Box>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(V=(T=a.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};var v,N,R;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Ex: Command Snippet',
  render: () => <Box display="grid" gap="8" maxW="prose">
      <Text>Build Storybook for review:</Text>
      <Pre>npm run storybook:build</Pre>
    </Box>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(R=(N=o.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};const H=["Default","InlineUsage","CodeBlock","ExCommandSnippet"];export{a as CodeBlock,s as Default,o as ExCommandSnippet,t as InlineUsage,H as __namedExportsOrder,G as default};
