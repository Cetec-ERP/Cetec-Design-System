import{j as e,B as p,T as r}from"./iframe-CRR58YI_.js";import{H as W}from"./Heading-FHxVesos.js";import{C as n}from"./Code-CrRjEXJ6.js";import"./preload-helper-De6kpJMI.js";const{expect:a,within:E}=__STORYBOOK_MODULE_TEST__,P={title:"Components/Code",component:n,tags:["autodocs"],parameters:{layout:"centered"},args:{children:"npm run build"}},o={},s={render:()=>e.jsxs(p,{display:"grid",gap:"12",maxW:"prose",children:[e.jsxs(r,{children:["Subtle: run ",e.jsx(n,{variant:"subtle",children:"npm run prepare"})," first."]}),e.jsxs(r,{children:["Outline: run ",e.jsx(n,{variant:"outline",children:"npm run prepare"})," first."]}),e.jsxs(r,{children:["Plain: run ",e.jsx(n,{variant:"plain",children:"npm run prepare"})," first."]})]}),parameters:{controls:{disable:!0}}},d={render:()=>e.jsxs(p,{display:"grid",gap:"12",maxW:"prose",children:[e.jsxs(W,{level:"h3",children:["Configure ",e.jsx(n,{children:"preshared_token"})]}),e.jsxs(r,{children:["Body text with ",e.jsx(n,{children:"preshared_token"})," inline."]}),e.jsxs(r,{textStyle:"body.xs",children:["Small text with ",e.jsx(n,{children:"preshared_token"})," inline."]})]}),parameters:{controls:{disable:!0}}},i={render:()=>e.jsx(p,{maxW:"xs",borderWidth:"1",borderColor:"border",p:"12",children:e.jsxs(r,{children:["Token:"," ",e.jsx(n,{children:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0In0"})]})}),parameters:{controls:{disable:!0}}},l={name:"Test: native code element",render:()=>e.jsxs(r,{children:["Run"," ",e.jsx(n,{language:"shell","data-testid":"inline-code",children:"npm test"}),"."]}),play:async({canvasElement:O})=>{const t=E(O).getByTestId("inline-code");a(t.tagName).toBe("CODE"),a(t).toHaveAttribute("data-language","shell"),a(t).toHaveAttribute("data-ds-component","Code"),a(t.children).toHaveLength(0),a(t).not.toHaveAttribute("lang")},parameters:{controls:{disable:!0}}},c={name:"Ex: API Setup Note",render:()=>e.jsx(p,{display:"grid",gap:"8",maxW:"prose",children:e.jsxs(r,{children:["Search for ",e.jsx(n,{children:"JSON API Token"})," in Admin > Configuration. The value is sent as ",e.jsx(n,{children:"preshared_token"})," on all internal API calls, and as an ",e.jsx(n,{children:"Authorization: Bearer <token>"})," header on external ones."]})}),parameters:{controls:{disable:!0}}},R=["Default","Variants","SizeFollowsText","LongValueWraps","NativeSemantics","ExApiSetupNote"];var x,m,u;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var h,g,C;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <Box display="grid" gap="12" maxW="prose">
      <Text>
        Subtle: run <Code variant="subtle">npm run prepare</Code> first.
      </Text>
      <Text>
        Outline: run <Code variant="outline">npm run prepare</Code> first.
      </Text>
      <Text>
        Plain: run <Code variant="plain">npm run prepare</Code> first.
      </Text>
    </Box>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(C=(g=s.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var T,b,j;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Box display="grid" gap="12" maxW="prose">
      <Heading level="h3">
        Configure <Code>preshared_token</Code>
      </Heading>
      <Text>
        Body text with <Code>preshared_token</Code> inline.
      </Text>
      <Text textStyle="body.xs">
        Small text with <Code>preshared_token</Code> inline.
      </Text>
    </Box>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(j=(b=d.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var v,I,S;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <Box maxW="xs" borderWidth="1" borderColor="border" p="12">
      <Text>
        Token:{' '}
        <Code>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0In0</Code>
      </Text>
    </Box>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(S=(I=i.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var y,B,f;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Test: native code element',
  render: () => <Text>
      Run{' '}
      <Code language="shell" data-testid="inline-code">
        npm test
      </Code>
      .
    </Text>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const code = canvas.getByTestId('inline-code');
    expect(code.tagName).toBe('CODE');
    expect(code).toHaveAttribute('data-language', 'shell');
    expect(code).toHaveAttribute('data-ds-component', 'Code');
    // Children render directly in the code element, with no wrapper.
    expect(code.children).toHaveLength(0);
    expect(code).not.toHaveAttribute('lang');
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(f=(B=l.parameters)==null?void 0:B.docs)==null?void 0:f.source}}};var A,k,_;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Ex: API Setup Note',
  render: () => <Box display="grid" gap="8" maxW="prose">
      <Text>
        Search for <Code>JSON API Token</Code> in Admin &gt; Configuration. The
        value is sent as <Code>preshared_token</Code> on all internal API calls,
        and as an <Code>Authorization: Bearer &lt;token&gt;</Code> header on
        external ones.
      </Text>
    </Box>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(_=(k=c.parameters)==null?void 0:k.docs)==null?void 0:_.source}}};export{o as Default,c as ExApiSetupNote,i as LongValueWraps,l as NativeSemantics,d as SizeFollowsText,s as Variants,R as __namedExportsOrder,P as default};
