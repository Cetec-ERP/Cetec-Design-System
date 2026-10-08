import{m as I,g as L,f as D,L as F,s as K,j as t,B as c,c as U,d as Y,T as v}from"./iframe-BWZZmoTh.js";import"./preload-helper-B5DXRnm6.js";const y=L("code",{},[]),$={},h=Object.keys($),Q=Object.assign(I(y.recipeFn),{__recipe__:!0,__name__:"code",__getCompoundVariantCss__:y.__getCompoundVariantCss__,raw:e=>e,variantKeys:h,variantMap:$,merge(e){return F(this,e)},splitVariantProps(e){return D(e,h)},getVariantProps:y.getVariantProps}),b=L("pre",{},[]),z={},_=Object.keys(z),X=Object.assign(I(b.recipeFn),{__recipe__:!0,__name__:"pre",__getCompoundVariantCss__:b.__getCompoundVariantCss__,raw:e=>e,variantKeys:_,variantMap:z,merge(e){return F(this,e)},splitVariantProps(e){return D(e,_)},getVariantProps:b.getVariantProps}),x=e=>{const{lang:a,children:r,...n}=e,[g,P]=K(n);return t.jsx(c,{...Y("Code"),as:"code",className:U(Q({}),g),lang:a,...P,children:t.jsx(v,{color:"slate.0",children:r})})};x.__docgenInfo={description:"Renders code content in a native `code` element.\n\nUse `Pre` for a preformatted code block. `lang` supplies element language\nmetadata; it does not perform syntax highlighting.\n\n@example\n```tsx\n<Code>npm run build</Code>\n```",methods:[],displayName:"Code",props:{children:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:"Source code or inline content to render."},lang:{required:!1,tsType:{name:"string"},description:"Language metadata forwarded to the native `code` element."}}};const s=e=>{const{children:a,lang:r,"data-ds-component":n,...g}=e,[P,J]=K(g);return t.jsx(c,{...Y("Pre",n),as:"pre",className:U(X({}),P),...J,children:t.jsx(x,{lang:r,slot:"react",bg:"transparent",children:a})})};s.__docgenInfo={description:"Renders a preformatted code block using native `pre` and `code` semantics.\n\nWhitespace in string content is preserved. The component does not perform\nsyntax highlighting.\n\n@example\n```tsx\n<Pre lang=\"typescript\">{'const ready = true;'}</Pre>\n```",methods:[],displayName:"Pre",props:{children:{required:!0,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:"Preformatted code content."},lang:{required:!1,tsType:{name:"string"},description:"Language metadata forwarded to the nested `Code` element."},as:{required:!1,tsType:{name:"string"},description:"Element override for the rendered `pre` container."}}};const{expect:o,within:G}=__STORYBOOK_MODULE_TEST__,te={title:"Components/Code",component:x,tags:["autodocs"],parameters:{layout:"centered"},args:{children:"npm run build"}},d={},p={render:()=>t.jsxs(v,{children:["Run ",t.jsx(x,{children:"npm run prepare"})," before building to regenerate Panda CSS types."]}),parameters:{controls:{disable:!0}}},i={render:()=>t.jsx(c,{maxW:"2xl",children:t.jsx(s,{lang:"tsx",children:`import { Button } from 'cetec-design-system';

export function SaveAction() {
  return <Button variant="primary">Save Changes</Button>;
}`})}),parameters:{controls:{disable:!0}}},m={name:"Test: Pre root props",render:()=>t.jsx(c,{maxW:"2xl",children:t.jsx(s,{lang:"tsx",id:"pre-root","data-testid":"pre-root","data-ds-component":"CodeBlock",children:"const ready = true;"})}),play:async({canvasElement:e})=>{const r=G(e).getByTestId("pre-root"),n=r.querySelector("code");if(!(n instanceof HTMLElement))throw new Error("Pre should render a nested code element.");o(r).toHaveAttribute("id","pre-root"),o(r).toHaveAttribute("data-ds-component","CodeBlock"),o(n).not.toHaveAttribute("id"),o(n).not.toHaveAttribute("data-testid"),o(n).toHaveAttribute("data-ds-component","Code"),o(n).toHaveAttribute("lang","tsx")},parameters:{controls:{disable:!0}}},l={name:"Test: data-ds-component",render:()=>t.jsxs(t.Fragment,{children:[t.jsx(s,{children:"const defaultPre = true;"}),t.jsx(s,{"data-ds-component":"ExamplePre",children:"const customPre = true;"})]}),play:async({canvasElement:e})=>{const a=G(e),r=a.getByText("const defaultPre = true;").closest("pre"),n=a.getByText("const customPre = true;").closest("pre");o(r).toHaveAttribute("data-ds-component","Pre"),o(r==null?void 0:r.querySelector("code")).toHaveAttribute("data-ds-component","Code"),o(n).toHaveAttribute("data-ds-component","ExamplePre"),o(n==null?void 0:n.querySelector("code")).toHaveAttribute("data-ds-component","Code")},parameters:{controls:{disable:!0}}},u={name:"Ex: Command Snippet",render:()=>t.jsxs(c,{display:"grid",gap:"8",maxW:"prose",children:[t.jsx(v,{children:"Build Storybook for review:"}),t.jsx(s,{children:"npm run storybook:build"})]}),parameters:{controls:{disable:!0}}},ne=["Default","InlineUsage","CodeBlock","PreRootProps","DsComponentAttribute","ExCommandSnippet"];var C,f,B;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:"{}",...(B=(f=d.parameters)==null?void 0:f.docs)==null?void 0:B.source}}};var S,T,A;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <Text>
      Run <Code>npm run prepare</Code> before building to regenerate Panda CSS
      types.
    </Text>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(A=(T=p.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var j,H,E;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(E=(H=i.parameters)==null?void 0:H.docs)==null?void 0:E.source}}};var w,k,R;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(R=(k=m.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};var V,q,N;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(N=(q=l.parameters)==null?void 0:q.docs)==null?void 0:N.source}}};var O,M,W;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(W=(M=u.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};export{i as CodeBlock,d as Default,l as DsComponentAttribute,u as ExCommandSnippet,p as InlineUsage,m as PreRootProps,ne as __namedExportsOrder,te as default};
