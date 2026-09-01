import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{w as F,e as n}from"./index-DPYJpPba.js";import{m as O,e as D,b as K,h as L,s as U,B as d,c as $,d as z}from"./dsComponent-D6ec2IT1.js";import{T as P}from"./Text-DV_MEMni.js";import"./index-BKyFwriW.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Tooltip-bRuinN4J.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";const h=D("code",{},[]),G={},v=Object.keys(G),X=Object.assign(O(h.recipeFn),{__recipe__:!0,__name__:"code",__getCompoundVariantCss__:h.__getCompoundVariantCss__,raw:e=>e,variantKeys:v,variantMap:G,merge(e){return L(this,e)},splitVariantProps(e){return K(e,v)},getVariantProps:h.getVariantProps}),b=D("pre",{},[]),J={},f=Object.keys(J),Y=Object.assign(O(b.recipeFn),{__recipe__:!0,__name__:"pre",__getCompoundVariantCss__:b.__getCompoundVariantCss__,raw:e=>e,variantKeys:f,variantMap:J,merge(e){return L(this,e)},splitVariantProps(e){return K(e,f)},getVariantProps:b.getVariantProps}),x=e=>{const{lang:a,children:o,...r}=e,[g,y]=U(r);return t.jsx(d,{...z("Code"),as:"code",className:$(X({}),g),lang:a,...y,children:t.jsx(P,{color:"slate.0",children:o})})};x.__docgenInfo={description:"Renders code content in a native `code` element.\n\nUse `Pre` for a preformatted code block. `lang` supplies element language\nmetadata; it does not perform syntax highlighting.\n\n@example\n```tsx\n<Code>npm run build</Code>\n```",methods:[],displayName:"Code",props:{children:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:"Text or inline content to render."},as:{required:!1,tsType:{name:"ElementType"},description:'@default "span"'},definition:{required:!1,tsType:{name:"string"},description:`Short, nonessential explanation shown in a tooltip. Applies a dashed
underline and adds the text to sequential keyboard focus.`},role:{required:!1,tsType:{name:"string"},description:"Explicit ARIA role when the rendered element does not provide it."},tabIndex:{required:!1,tsType:{name:"number"},description:"Adds the text to sequential keyboard focus when a composite widget requires it."},lang:{required:!1,tsType:{name:"string"},description:"Language metadata forwarded to the native `code` element."}}};const s=e=>{const{children:a,lang:o,"data-ds-component":r,...g}=e,[y,Q]=U(g);return t.jsx(d,{...z("Pre",r),as:"pre",className:$(Y({}),y),...Q,children:t.jsx(x,{lang:o,slot:"react",bg:"transparent",children:a})})};s.__docgenInfo={description:"Renders a preformatted code block using native `pre` and `code` semantics.\n\nWhitespace in string content is preserved. The component does not perform\nsyntax highlighting.\n\n@example\n```tsx\n<Pre lang=\"typescript\">{'const ready = true;'}</Pre>\n```",methods:[],displayName:"Pre",props:{children:{required:!0,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:"Preformatted code content."},lang:{required:!1,tsType:{name:"string"},description:"Language metadata forwarded to the nested `Code` element."},as:{required:!1,tsType:{name:"string"},description:"Element override for the rendered `pre` container."}}};const ce={title:"Components/Code",component:x,tags:["autodocs"],parameters:{layout:"centered"},args:{children:"npm run build"}},c={},i={render:()=>t.jsxs(P,{children:["Run ",t.jsx(x,{children:"npm run prepare"})," before building to regenerate Panda CSS types."]}),parameters:{controls:{disable:!0}}},p={render:()=>t.jsx(d,{maxW:"2xl",children:t.jsx(s,{lang:"tsx",children:`import { Button } from 'cetec-design-system';

export function SaveAction() {
  return <Button variant="primary">Save Changes</Button>;
}`})}),parameters:{controls:{disable:!0}}},m={name:"Test: Pre root props",render:()=>t.jsx(d,{maxW:"2xl",children:t.jsx(s,{lang:"tsx",id:"pre-root","data-testid":"pre-root","data-ds-component":"CodeBlock",children:"const ready = true;"})}),play:async({canvasElement:e})=>{const o=F(e).getByTestId("pre-root"),r=o.querySelector("code");if(!(r instanceof HTMLElement))throw new Error("Pre should render a nested code element.");n(o).toHaveAttribute("id","pre-root"),n(o).toHaveAttribute("data-ds-component","CodeBlock"),n(r).not.toHaveAttribute("id"),n(r).not.toHaveAttribute("data-testid"),n(r).toHaveAttribute("data-ds-component","Code"),n(r).toHaveAttribute("lang","tsx")},parameters:{controls:{disable:!0}}},l={name:"Test: data-ds-component",render:()=>t.jsxs(t.Fragment,{children:[t.jsx(s,{children:"const defaultPre = true;"}),t.jsx(s,{"data-ds-component":"ExamplePre",children:"const customPre = true;"})]}),play:async({canvasElement:e})=>{const a=F(e),o=a.getByText("const defaultPre = true;").closest("pre"),r=a.getByText("const customPre = true;").closest("pre");n(o).toHaveAttribute("data-ds-component","Pre"),n(o==null?void 0:o.querySelector("code")).toHaveAttribute("data-ds-component","Code"),n(r).toHaveAttribute("data-ds-component","ExamplePre"),n(r==null?void 0:r.querySelector("code")).toHaveAttribute("data-ds-component","Code")},parameters:{controls:{disable:!0}}},u={name:"Ex: Command Snippet",render:()=>t.jsxs(d,{display:"grid",gap:"8",maxW:"prose",children:[t.jsx(P,{children:"Build Storybook for review:"}),t.jsx(s,{children:"npm run storybook:build"})]}),parameters:{controls:{disable:!0}}};var C,_,T;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:"{}",...(T=(_=c.parameters)==null?void 0:_.docs)==null?void 0:T.source}}};var A,B,S;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <Text>
      Run <Code>npm run prepare</Code> before building to regenerate Panda CSS
      types.
    </Text>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(S=(B=i.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var j,H,w;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(w=(H=p.parameters)==null?void 0:H.docs)==null?void 0:w.source}}};var E,q,k;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(k=(q=m.parameters)==null?void 0:q.docs)==null?void 0:k.source}}};var R,V,N;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(N=(V=l.parameters)==null?void 0:V.docs)==null?void 0:N.source}}};var I,W,M;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(M=(W=u.parameters)==null?void 0:W.docs)==null?void 0:M.source}}};const ie=["Default","InlineUsage","CodeBlock","PreRootProps","DsComponentAttribute","ExCommandSnippet"];export{p as CodeBlock,c as Default,l as DsComponentAttribute,u as ExCommandSnippet,i as InlineUsage,m as PreRootProps,ie as __namedExportsOrder,ce as default};
