import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{w as N,e as a}from"./index-L8OlCEhE.js";import{B as p}from"./dsComponent-BG2jnRr7.js";import{H as w}from"./Heading-Bl5mgPxg.js";import{T as t}from"./Text-tIn1sg48.js";import{C as r}from"./Code-DLdUuufz.js";import"./index-BKyFwriW.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Tooltip-GoULuPEB.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";const G={title:"Components/Code",component:r,tags:["autodocs"],parameters:{layout:"centered"},args:{children:"npm run build"}},o={},s={render:()=>e.jsxs(p,{display:"grid",gap:"12",maxW:"prose",children:[e.jsxs(t,{children:["Subtle: run ",e.jsx(r,{variant:"subtle",children:"npm run prepare"})," first."]}),e.jsxs(t,{children:["Outline: run ",e.jsx(r,{variant:"outline",children:"npm run prepare"})," first."]}),e.jsxs(t,{children:["Plain: run ",e.jsx(r,{variant:"plain",children:"npm run prepare"})," first."]})]}),parameters:{controls:{disable:!0}}},i={render:()=>e.jsxs(p,{display:"grid",gap:"12",maxW:"prose",children:[e.jsxs(w,{level:"h3",children:["Configure ",e.jsx(r,{children:"preshared_token"})]}),e.jsxs(t,{children:["Body text with ",e.jsx(r,{children:"preshared_token"})," inline."]}),e.jsxs(t,{textStyle:"body.xs",children:["Small text with ",e.jsx(r,{children:"preshared_token"})," inline."]})]}),parameters:{controls:{disable:!0}}},d={render:()=>e.jsx(p,{maxW:"xs",borderWidth:"1",borderColor:"border",p:"12",children:e.jsxs(t,{children:["Token:"," ",e.jsx(r,{children:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0In0"})]})}),parameters:{controls:{disable:!0}}},l={name:"Test: native code element",render:()=>e.jsxs(t,{children:["Run"," ",e.jsx(r,{language:"shell","data-testid":"inline-code",children:"npm test"}),"."]}),play:async({canvasElement:H})=>{const n=N(H).getByTestId("inline-code");a(n.tagName).toBe("CODE"),a(n).toHaveAttribute("data-language","shell"),a(n).toHaveAttribute("data-ds-component","Code"),a(n.children).toHaveLength(0),a(n).not.toHaveAttribute("lang")},parameters:{controls:{disable:!0}}},c={name:"Ex: API Setup Note",render:()=>e.jsx(p,{display:"grid",gap:"8",maxW:"prose",children:e.jsxs(t,{children:["Search for ",e.jsx(r,{children:"JSON API Token"})," in Admin > Configuration. The value is sent as ",e.jsx(r,{children:"preshared_token"})," on all internal API calls, and as an ",e.jsx(r,{children:"Authorization: Bearer <token>"})," header on external ones."]})}),parameters:{controls:{disable:!0}}};var m,x,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(u=(x=o.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};var h,g,C;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(C=(g=s.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var b,T,j;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(j=(T=i.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var v,I,y;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(y=(I=d.parameters)==null?void 0:I.docs)==null?void 0:y.source}}};var S,f,A;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(A=(f=l.parameters)==null?void 0:f.docs)==null?void 0:A.source}}};var B,k,W;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(W=(k=c.parameters)==null?void 0:k.docs)==null?void 0:W.source}}};const U=["Default","Variants","SizeFollowsText","LongValueWraps","NativeSemantics","ExApiSetupNote"];export{o as Default,c as ExApiSetupNote,d as LongValueWraps,l as NativeSemantics,i as SizeFollowsText,s as Variants,U as __namedExportsOrder,G as default};
