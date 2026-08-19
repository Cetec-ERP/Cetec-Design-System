import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{w as D,e as o}from"./index-DPYJpPba.js";import{m as N,a as I,s as W,h as M,b as O,B as a,d as F,e as K}from"./dsComponent-BHDs0HDk.js";import{T as b}from"./Text-C8GrCxX4.js";import"./index-BKyFwriW.js";import"./_commonjsHelpers-CqkleIqs.js";const h=I("code",{},[]),L={},f=Object.keys(L),$=Object.assign(N(h.recipeFn),{__recipe__:!0,__name__:"code",__getCompoundVariantCss__:h.__getCompoundVariantCss__,raw:e=>e,variantKeys:f,variantMap:L,merge(e){return M(this,e)},splitVariantProps(e){return W(e,f)},getVariantProps:h.getVariantProps}),y=I("pre",{},[]),U={},_=Object.keys(U),z=Object.assign(N(y.recipeFn),{__recipe__:!0,__name__:"pre",__getCompoundVariantCss__:y.__getCompoundVariantCss__,raw:e=>e,variantKeys:_,variantMap:U,merge(e){return M(this,e)},splitVariantProps(e){return W(e,_)},getVariantProps:y.getVariantProps}),l=e=>{const{lang:s,children:n,...r}=e,[g,x]=O(r);return t.jsx(a,{...K("Code"),as:"code",className:F($({}),g),lang:s,...x,children:t.jsx(b,{color:"slate.0",children:n})})};l.__docgenInfo={description:"Renders code content in a native `code` element.\n\nUse `Pre` for a preformatted code block. `lang` supplies element language\nmetadata; it does not perform syntax highlighting.\n\n@example\n```tsx\n<Code>npm run build</Code>\n```",methods:[],displayName:"Code",props:{children:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:"Text or inline content to render."},as:{required:!1,tsType:{name:"ElementType"},description:'@default "span"'},role:{required:!1,tsType:{name:"string"},description:"Explicit ARIA role when the rendered element does not provide it."},tabIndex:{required:!1,tsType:{name:"number"},description:"Adds the text to sequential keyboard focus when a composite widget requires it."},lang:{required:!1,tsType:{name:"string"},description:"Language metadata forwarded to the native `code` element."}}};const u=e=>{const{children:s,lang:n,...r}=e,[g,x]=O(r);return t.jsx(a,{...K("Pre"),as:"pre",className:F(z({}),g),...x,children:t.jsx(l,{lang:n,slot:"react",bg:"transparent",children:s})})};u.__docgenInfo={description:"Renders a preformatted code block using native `pre` and `code` semantics.\n\nWhitespace in string content is preserved. The component does not perform\nsyntax highlighting.\n\n@example\n```tsx\n<Pre lang=\"typescript\">{'const ready = true;'}</Pre>\n```",methods:[],displayName:"Pre",props:{children:{required:!0,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:"Preformatted code content."},lang:{required:!1,tsType:{name:"string"},description:"Language metadata forwarded to the nested `Code` element."},as:{required:!1,tsType:{name:"string"},description:"Element override for the rendered `pre` container."}}};const ee={title:"Components/Code",component:l,tags:["autodocs"],parameters:{layout:"centered"},args:{children:"npm run build"}},d={},i={render:()=>t.jsxs(b,{children:["Run ",t.jsx(l,{children:"npm run prepare"})," before building to regenerate Panda CSS types."]}),parameters:{controls:{disable:!0}}},c={render:()=>t.jsx(a,{maxW:"2xl",children:t.jsx(u,{lang:"tsx",children:`import { Button } from 'cetec-design-system';

export function SaveAction() {
  return <Button variant="primary">Save Changes</Button>;
}`})}),parameters:{controls:{disable:!0}}},p={name:"Test: Pre root props",render:()=>t.jsx(a,{maxW:"2xl",children:t.jsx(u,{lang:"tsx",id:"pre-root","data-testid":"pre-root","data-ds-component":"CodeBlock",children:"const ready = true;"})}),play:async({canvasElement:e})=>{const n=D(e).getByTestId("pre-root"),r=n.querySelector("code");if(!(r instanceof HTMLElement))throw new Error("Pre should render a nested code element.");o(n).toHaveAttribute("id","pre-root"),o(n).toHaveAttribute("data-ds-component","CodeBlock"),o(r).not.toHaveAttribute("id"),o(r).not.toHaveAttribute("data-testid"),o(r).toHaveAttribute("data-ds-component","Code"),o(r).toHaveAttribute("lang","tsx")},parameters:{controls:{disable:!0}}},m={name:"Ex: Command Snippet",render:()=>t.jsxs(a,{display:"grid",gap:"8",maxW:"prose",children:[t.jsx(b,{children:"Build Storybook for review:"}),t.jsx(u,{children:"npm run storybook:build"})]}),parameters:{controls:{disable:!0}}};var v,C,P;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:"{}",...(P=(C=d.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};var B,T,S;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <Text>
      Run <Code>npm run prepare</Code> before building to regenerate Panda CSS
      types.
    </Text>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(S=(T=i.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var j,w,A;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(A=(w=c.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var k,E,H;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Test: Pre root props',
  render: () => <Box maxW="2xl">
      <Pre lang="tsx" id="pre-root" data-testid="pre-root" data-ds-component="CodeBlock">
        {'const ready = true;'}
      </Pre>
    </Box>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const pre = canvas.getByTestId('pre-root');
    const code = pre.querySelector('code');
    if (!(code instanceof HTMLElement)) {
      throw new Error('Pre should render a nested code element.');
    }

    // Consumer props land on the root \`pre\` only.
    expect(pre).toHaveAttribute('id', 'pre-root');
    expect(pre).toHaveAttribute('data-ds-component', 'CodeBlock');

    // The nested \`code\` keeps its own identity and does not receive the
    // consumer props spread onto the root.
    expect(code).not.toHaveAttribute('id');
    expect(code).not.toHaveAttribute('data-testid');
    expect(code).toHaveAttribute('data-ds-component', 'Code');
    expect(code).toHaveAttribute('lang', 'tsx');
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(H=(E=p.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var R,V,q;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(q=(V=m.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};const te=["Default","InlineUsage","CodeBlock","PreRootProps","ExCommandSnippet"];export{c as CodeBlock,d as Default,m as ExCommandSnippet,i as InlineUsage,p as PreRootProps,te as __namedExportsOrder,ee as default};
