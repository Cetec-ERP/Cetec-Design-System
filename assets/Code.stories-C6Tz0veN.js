import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{w as $,e as s}from"./index-DPYJpPba.js";import{m as I,a as F,s as O,h as W,b as D,B as l,d as K,e as M}from"./dsComponent-BI5u6_Sr.js";import{T as P}from"./Text-BPA4Owys.js";import"./index-BKyFwriW.js";import"./_commonjsHelpers-CqkleIqs.js";const y=F("code",{},[]),U={},f=Object.keys(U),z=Object.assign(I(y.recipeFn),{__recipe__:!0,__name__:"code",__getCompoundVariantCss__:y.__getCompoundVariantCss__,raw:e=>e,variantKeys:f,variantMap:U,merge(e){return W(this,e)},splitVariantProps(e){return O(e,f)},getVariantProps:y.getVariantProps}),h=F("pre",{},[]),L={},_=Object.keys(L),G=Object.assign(I(h.recipeFn),{__recipe__:!0,__name__:"pre",__getCompoundVariantCss__:h.__getCompoundVariantCss__,raw:e=>e,variantKeys:_,variantMap:L,merge(e){return W(this,e)},splitVariantProps(e){return O(e,_)},getVariantProps:h.getVariantProps}),u=e=>{const{lang:a,children:r,...n}=e,[g,x]=D(n);return t.jsx(l,{...M("Code"),as:"code",className:K(z({}),g),lang:a,...x,children:t.jsx(P,{color:"slate.0",children:r})})};u.__docgenInfo={description:"Renders code content in a native `code` element.\n\nUse `Pre` for a preformatted code block. `lang` supplies element language\nmetadata; it does not perform syntax highlighting.\n\n@example\n```tsx\n<Code>npm run build</Code>\n```",methods:[],displayName:"Code",props:{children:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:"Text or inline content to render."},as:{required:!1,tsType:{name:"ElementType"},description:'@default "span"'},role:{required:!1,tsType:{name:"string"},description:"Explicit ARIA role when the rendered element does not provide it."},tabIndex:{required:!1,tsType:{name:"number"},description:"Adds the text to sequential keyboard focus when a composite widget requires it."},lang:{required:!1,tsType:{name:"string"},description:"Language metadata forwarded to the native `code` element."}}};const o=e=>{const{children:a,lang:r,"data-ds-component":n,...g}=e,[x,b]=D(g);return t.jsx(l,{...M("Pre",n),as:"pre",className:K(G({}),x),...b,children:t.jsx(u,{lang:r,slot:"react",bg:"transparent",...b,children:a})})};o.__docgenInfo={description:"Renders a preformatted code block using native `pre` and `code` semantics.\n\nWhitespace in string content is preserved. The component does not perform\nsyntax highlighting.\n\n@example\n```tsx\n<Pre lang=\"typescript\">{'const ready = true;'}</Pre>\n```",methods:[],displayName:"Pre",props:{children:{required:!0,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:"Preformatted code content."},lang:{required:!1,tsType:{name:"string"},description:"Language metadata forwarded to the nested `Code` element."},as:{required:!1,tsType:{name:"string"},description:"Element override forwarded through the rendered containers."}}};const te={title:"Components/Code",component:u,tags:["autodocs"],parameters:{layout:"centered"},args:{children:"npm run build"}},c={},d={render:()=>t.jsxs(P,{children:["Run ",t.jsx(u,{children:"npm run prepare"})," before building to regenerate Panda CSS types."]}),parameters:{controls:{disable:!0}}},i={render:()=>t.jsx(l,{maxW:"2xl",children:t.jsx(o,{lang:"tsx",children:`import { Button } from 'cetec-design-system';

export function SaveAction() {
  return <Button variant="primary">Save Changes</Button>;
}`})}),parameters:{controls:{disable:!0}}},p={name:"Test: data-ds-component",render:()=>t.jsxs(t.Fragment,{children:[t.jsx(o,{children:"const defaultPre = true;"}),t.jsx(o,{"data-ds-component":"ExamplePre",children:"const customPre = true;"})]}),play:async({canvasElement:e})=>{const a=$(e),r=a.getByText("const defaultPre = true;").closest("pre"),n=a.getByText("const customPre = true;").closest("pre");s(r).toHaveAttribute("data-ds-component","Pre"),s(r==null?void 0:r.querySelector("code")).toHaveAttribute("data-ds-component","Code"),s(n).toHaveAttribute("data-ds-component","ExamplePre"),s(n==null?void 0:n.querySelector("code")).toHaveAttribute("data-ds-component","Code")},parameters:{controls:{disable:!0}}},m={name:"Ex: Command Snippet",render:()=>t.jsxs(l,{display:"grid",gap:"8",maxW:"prose",children:[t.jsx(P,{children:"Build Storybook for review:"}),t.jsx(o,{children:"npm run storybook:build"})]}),parameters:{controls:{disable:!0}}};var C,v,S;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:"{}",...(S=(v=c.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var T,j,B;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Text>
      Run <Code>npm run prepare</Code> before building to regenerate Panda CSS
      types.
    </Text>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(B=(j=d.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var w,A,E;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(E=(A=i.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var q,V,R;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'Test: data-ds-component',
  render: () => <>
      <Pre>{'const defaultPre = true;'}</Pre>
      <Pre data-ds-component="ExamplePre">{'const customPre = true;'}</Pre>
    </>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const defaultPre = canvas.getByText('const defaultPre = true;').closest('pre');
    const customPre = canvas.getByText('const customPre = true;').closest('pre');
    expect(defaultPre).toHaveAttribute('data-ds-component', 'Pre');
    expect(defaultPre?.querySelector('code')).toHaveAttribute('data-ds-component', 'Code');
    expect(customPre).toHaveAttribute('data-ds-component', 'ExamplePre');
    expect(customPre?.querySelector('code')).toHaveAttribute('data-ds-component', 'Code');
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(R=(V=p.parameters)==null?void 0:V.docs)==null?void 0:R.source}}};var k,N,H;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(H=(N=m.parameters)==null?void 0:N.docs)==null?void 0:H.source}}};const re=["Default","InlineUsage","CodeBlock","DsComponentAttribute","ExCommandSnippet"];export{i as CodeBlock,c as Default,p as DsComponentAttribute,m as ExCommandSnippet,d as InlineUsage,re as __namedExportsOrder,te as default};
