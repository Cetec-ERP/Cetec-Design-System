import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{m as k,a as q,s as N,h as E,b as I,B as i,d as A,e as O}from"./dsComponent-BZ80dv4C.js";import{T as x}from"./Text-BnqT0XMf.js";import"./index-BKyFwriW.js";import"./_commonjsHelpers-CqkleIqs.js";const u=q("code",{},[]),W={},_=Object.keys(W),K=Object.assign(k(u.recipeFn),{__recipe__:!0,__name__:"code",__getCompoundVariantCss__:u.__getCompoundVariantCss__,raw:e=>e,variantKeys:_,variantMap:W,merge(e){return E(this,e)},splitVariantProps(e){return N(e,_)},getVariantProps:u.getVariantProps}),g=q("pre",{},[]),F={},y=Object.keys(F),M=Object.assign(k(g.recipeFn),{__recipe__:!0,__name__:"pre",__getCompoundVariantCss__:g.__getCompoundVariantCss__,raw:e=>e,variantKeys:y,variantMap:F,merge(e){return E(this,e)},splitVariantProps(e){return N(e,y)},getVariantProps:g.getVariantProps}),d=e=>{const{lang:p,children:c,...m}=e,[l,n]=I(m);return r.jsx(i,{...O("Code"),as:"code",className:A(K({}),l),lang:p,...n,children:r.jsx(x,{color:"slate.0",children:c})})};d.__docgenInfo={description:"Renders code content in a native `code` element.\n\nUse `Pre` for a preformatted code block. `lang` supplies element language\nmetadata; it does not perform syntax highlighting.\n\n@example\n```tsx\n<Code>npm run build</Code>\n```",methods:[],displayName:"Code",props:{children:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:"Text or inline content to render."},as:{required:!1,tsType:{name:"ElementType"},description:'@default "span"'},role:{required:!1,tsType:{name:"string"},description:"Explicit ARIA role when the rendered element does not provide it."},tabIndex:{required:!1,tsType:{name:"number"},description:"Adds the text to sequential keyboard focus when a composite widget requires it."},lang:{required:!1,tsType:{name:"string"},description:"Language metadata forwarded to the native `code` element."}}};const h=e=>{const{children:p,lang:c,...m}=e,[l,n]=I(m);return r.jsx(i,{...O("Pre"),as:"pre",className:A(M({}),l),...n,children:r.jsx(d,{lang:c,slot:"react",bg:"transparent",...n,children:p})})};h.__docgenInfo={description:"Renders a preformatted code block using native `pre` and `code` semantics.\n\nWhitespace in string content is preserved. The component does not perform\nsyntax highlighting.\n\n@example\n```tsx\n<Pre lang=\"typescript\">{'const ready = true;'}</Pre>\n```",methods:[],displayName:"Pre",props:{children:{required:!0,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:"Preformatted code content."},lang:{required:!1,tsType:{name:"string"},description:"Language metadata forwarded to the nested `Code` element."},as:{required:!1,tsType:{name:"string"},description:"Element override forwarded through the rendered containers."}}};const G={title:"Components/Code",component:d,tags:["autodocs"],parameters:{layout:"centered"},args:{children:"npm run build"}},t={},a={render:()=>r.jsxs(x,{children:["Run ",r.jsx(d,{children:"npm run prepare"})," before building to regenerate Panda CSS types."]}),parameters:{controls:{disable:!0}}},s={render:()=>r.jsx(i,{maxW:"2xl",children:r.jsx(h,{lang:"tsx",children:`import { Button } from 'cetec-design-system';

export function SaveAction() {
  return <Button variant="primary">Save Changes</Button>;
}`})}),parameters:{controls:{disable:!0}}},o={name:"Ex: Command Snippet",render:()=>r.jsxs(i,{display:"grid",gap:"8",maxW:"prose",children:[r.jsx(x,{children:"Build Storybook for review:"}),r.jsx(h,{children:"npm run storybook:build"})]}),parameters:{controls:{disable:!0}}};var f,b,C;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(C=(b=t.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var P,v,S;a.parameters={...a.parameters,docs:{...(P=a.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <Text>
      Run <Code>npm run prepare</Code> before building to regenerate Panda CSS
      types.
    </Text>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(S=(v=a.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var j,T,B;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(B=(T=s.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};var V,w,R;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(R=(w=o.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};const H=["Default","InlineUsage","CodeBlock","ExCommandSnippet"];export{s as CodeBlock,t as Default,o as ExCommandSnippet,a as InlineUsage,H as __namedExportsOrder,G as default};
