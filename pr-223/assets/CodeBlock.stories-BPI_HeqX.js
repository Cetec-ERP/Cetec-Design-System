import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{f as Ce,w as B,u as he,e as n,a as ve}from"./index-L8OlCEhE.js";import{B as s}from"./dsComponent-BG2jnRr7.js";import{C as j}from"./Code-DLdUuufz.js";import{H as Te}from"./Heading-Cs48zUEI.js";import{T as E}from"./Text-BLROLK4_.js";import{C as o}from"./CodeBlock-B22AMhHU.js";import"./index-BKyFwriW.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Tooltip-CskXLX0j.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";import"./Icon-CrwLKW7B.js";import"./IconConfig-BuieZFlx.js";import"./IconButton-f30ewR3O.js";import"./Spinner-PLunUSsK.js";import"./FieldContext-D6URyQos.js";import"./dsPart-nnoJM9m6.js";import"./useControllableState-ByGfjEIG.js";const fe=`{
  "invoice": 104233,
  "customer": "ACME-001",
  "status": "submitted",
  "lines": [
    { "part": "PN-4471-B", "qty": 12, "price": 18.5 },
    { "part": "PN-0093-A", "qty": 4, "price": 210 }
  ],
  "total": 1062
}`,w=`SELECT o.ordernum, o.customer_id, SUM(l.qty * l.price) AS total
FROM orders o
JOIN order_lines l ON l.order_id = o.id
WHERE o.created_at >= CURRENT_DATE - INTERVAL 30 DAY
GROUP BY o.ordernum, o.customer_id
ORDER BY total DESC;`,C=JSON.stringify(Array.from({length:20},(a,t)=>({line:t+1,part:`PN-${String(1e3+t)}`,qty:t%5+1})),null,2),T=`2026-10-06 09:14:02 INFO  Sync started for location MAIN
2026-10-06 09:14:03 WARN  Part PN-4471-B has no default bin; using RECEIVING, which may delay the pick list for every open work order that references it
2026-10-06 09:14:05 INFO  Sync finished: 412 records, 1 warning`,Ve={title:"Components/CodeBlock",component:o,tags:["autodocs"],parameters:{layout:"padded"},args:{code:fe,language:"json"},decorators:[a=>e.jsx(s,{maxW:"2xl",children:e.jsx(a,{})})]},i={},l={args:{title:"Submit request",language:"json"}},c={args:{tone:"inverse",title:"query.sql",language:"sql",code:w}},d={render:()=>e.jsxs(s,{display:"grid",gap:"16",children:[e.jsx(o,{size:"sm",title:"size=sm",code:w}),e.jsx(o,{size:"md",title:"size=md",code:w})]}),parameters:{controls:{disable:!0}}},m={args:{lineNumbers:!0,title:"payload.json"}},p={args:{lineNumbers:{start:98},title:"Lines 98–107"}},g={args:{wrap:!0,code:T,language:"log",title:"sync.log"}},u={args:{code:T,language:"log",title:"sync.log"}},x={args:{maxLines:8,code:C,title:"Order lines"}},y={args:{copyable:!1}},b={name:"Test: copy writes plain text",args:{code:`line one
line two
`,lineNumbers:!0,title:"copy.txt"},play:async({canvasElement:a})=>{const t=Ce().mockResolvedValue(void 0);Object.defineProperty(navigator,"clipboard",{value:{writeText:t},configurable:!0});const r=B(a);await he.click(r.getByRole("button",{name:"Copy code"})),n(t).toHaveBeenCalledWith(`line one
line two`),await ve(()=>n(r.getByRole("status")).toHaveTextContent("Copied"))}},S={name:"Test: focusable only when overflowing",render:()=>e.jsxs(s,{display:"grid",gap:"16",children:[e.jsx(o,{"data-testid":"short",code:"const ready = true;"}),e.jsx(o,{"data-testid":"long",code:T,language:"log"})]}),play:async({canvasElement:a})=>{const t=B(a),r=t.getByTestId("short"),Be=t.getByTestId("long");n(r.querySelector("[tabindex]")).toBeNull(),await ve(()=>{const we=B(Be).getByRole("region",{name:"log code block"});n(we).toHaveAttribute("tabindex","0")})},parameters:{controls:{disable:!0}}},h={name:"Test: expand toggle",args:{maxLines:4,code:C},play:async({canvasElement:a})=>{const t=B(a),r=t.getByRole("button",{name:/Show all/});n(r).toHaveAttribute("aria-expanded","false"),await he.click(r),n(t.getByRole("button",{name:"Show less"})).toHaveAttribute("aria-expanded","true")}},v={name:"Ex: Integration Setup",render:()=>e.jsxs(s,{display:"grid",gap:"12",maxW:"prose",children:[e.jsx(Te,{level:"h3",children:"Connect an MCP client"}),e.jsxs(E,{children:["Add the server to your client configuration. Replace"," ",e.jsx(j,{children:"<token>"})," with the value of ",e.jsx(j,{children:"JSON API Token"})," ","from Admin > Configuration."]}),e.jsx(o,{tone:"inverse",title:"claude_desktop_config.json",language:"json",code:`{
  "mcpServers": {
    "cetec": {
      "url": "https://example.cetecerp.com/mcp",
      "headers": { "Authorization": "Bearer <token>" }
    }
  }
}`}),e.jsx(E,{children:"Then restart the client and run:"}),e.jsx(o,{tone:"inverse",language:"shell",code:"claude mcp list"})]}),parameters:{controls:{disable:!0}}},f={name:"Ex: Submission Log",render:()=>e.jsxs(s,{display:"grid",gap:"12",children:[e.jsx(o,{title:"Submit request",language:"json",code:fe,maxLines:6}),e.jsx(o,{title:"Submit response (HTTP 200)",language:"json",code:C,maxLines:6})]}),parameters:{controls:{disable:!0}}};var N,k,R;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:"{}",...(R=(k=i.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};var A,L,q;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    title: 'Submit request',
    language: 'json'
  }
}`,...(q=(L=l.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};var I,O,H;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    tone: 'inverse',
    title: 'query.sql',
    language: 'sql',
    code: sqlSample
  }
}`,...(H=(O=c.parameters)==null?void 0:O.docs)==null?void 0:H.source}}};var P,W,_;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <Box display="grid" gap="16">
      <CodeBlock size="sm" title="size=sm" code={sqlSample} />
      <CodeBlock size="md" title="size=md" code={sqlSample} />
    </Box>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(_=(W=d.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var z,F,D;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    lineNumbers: true,
    title: 'payload.json'
  }
}`,...(D=(F=m.parameters)==null?void 0:F.docs)==null?void 0:D.source}}};var J,M,V;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    lineNumbers: {
      start: 98
    },
    title: 'Lines 98–107'
  }
}`,...(V=(M=p.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};var U,Y,G;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    wrap: true,
    code: logSample,
    language: 'log',
    title: 'sync.log'
  }
}`,...(G=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:G.source}}};var $,K,Q;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    code: logSample,
    language: 'log',
    title: 'sync.log'
  }
}`,...(Q=(K=u.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Z,ee;x.parameters={...x.parameters,docs:{...(X=x.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    maxLines: 8,
    code: longJson,
    title: 'Order lines'
  }
}`,...(ee=(Z=x.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,oe,ae;y.parameters={...y.parameters,docs:{...(te=y.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    copyable: false
  }
}`,...(ae=(oe=y.parameters)==null?void 0:oe.docs)==null?void 0:ae.source}}};var re,ne,se;b.parameters={...b.parameters,docs:{...(re=b.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: 'Test: copy writes plain text',
  args: {
    code: 'line one\\nline two\\n',
    lineNumbers: true,
    title: 'copy.txt'
  },
  play: async ({
    canvasElement
  }) => {
    const writeText = fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, 'clipboard', {
      value: {
        writeText
      },
      configurable: true
    });
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Copy code'
    }));

    // Line numbers and the trailing line break are not copied.
    expect(writeText).toHaveBeenCalledWith('line one\\nline two');
    await waitFor(() => expect(canvas.getByRole('status')).toHaveTextContent('Copied'));
  }
}`,...(se=(ne=b.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var ie,le,ce;S.parameters={...S.parameters,docs:{...(ie=S.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  name: 'Test: focusable only when overflowing',
  render: () => <Box display="grid" gap="16">
      <CodeBlock data-testid="short" code="const ready = true;" />
      <CodeBlock data-testid="long" code={logSample} language="log" />
    </Box>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const short = canvas.getByTestId('short');
    const long = canvas.getByTestId('long');
    expect(short.querySelector('[tabindex]')).toBeNull();
    await waitFor(() => {
      const region = within(long).getByRole('region', {
        name: 'log code block'
      });
      expect(region).toHaveAttribute('tabindex', '0');
    });
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ce=(le=S.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var de,me,pe;h.parameters={...h.parameters,docs:{...(de=h.parameters)==null?void 0:de.docs,source:{originalSource:`{
  name: 'Test: expand toggle',
  args: {
    maxLines: 4,
    code: longJson
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const toggle = canvas.getByRole('button', {
      name: /Show all/
    });
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    await userEvent.click(toggle);
    expect(canvas.getByRole('button', {
      name: 'Show less'
    })).toHaveAttribute('aria-expanded', 'true');
  }
}`,...(pe=(me=h.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var ge,ue,xe;v.parameters={...v.parameters,docs:{...(ge=v.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  name: 'Ex: Integration Setup',
  render: () => <Box display="grid" gap="12" maxW="prose">
      <Heading level="h3">Connect an MCP client</Heading>
      <Text>
        Add the server to your client configuration. Replace{' '}
        <Code>&lt;token&gt;</Code> with the value of <Code>JSON API Token</Code>{' '}
        from Admin &gt; Configuration.
      </Text>
      <CodeBlock tone="inverse" title="claude_desktop_config.json" language="json" code={\`{
  "mcpServers": {
    "cetec": {
      "url": "https://example.cetecerp.com/mcp",
      "headers": { "Authorization": "Bearer <token>" }
    }
  }
}\`} />
      <Text>Then restart the client and run:</Text>
      <CodeBlock tone="inverse" language="shell" code="claude mcp list" />
    </Box>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(xe=(ue=v.parameters)==null?void 0:ue.docs)==null?void 0:xe.source}}};var ye,be,Se;f.parameters={...f.parameters,docs:{...(ye=f.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  name: 'Ex: Submission Log',
  render: () => <Box display="grid" gap="12">
      <CodeBlock title="Submit request" language="json" code={jsonSample} maxLines={6} />
      <CodeBlock title="Submit response (HTTP 200)" language="json" code={longJson} maxLines={6} />
    </Box>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Se=(be=f.parameters)==null?void 0:be.docs)==null?void 0:Se.source}}};const Ue=["Default","WithTitle","Inverse","Sizes","LineNumbers","LineNumbersFromStart","Wrap","ScrollsByDefault","MaxLines","NotCopyable","CopyWritesPlainText","FocusableOnlyWhenOverflowing","ExpandToggle","ExIntegrationSetup","ExSubmissionLog"];export{b as CopyWritesPlainText,i as Default,v as ExIntegrationSetup,f as ExSubmissionLog,h as ExpandToggle,S as FocusableOnlyWhenOverflowing,c as Inverse,m as LineNumbers,p as LineNumbersFromStart,x as MaxLines,y as NotCopyable,u as ScrollsByDefault,d as Sizes,l as WithTitle,g as Wrap,Ue as __namedExportsOrder,Ve as default};
