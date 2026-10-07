import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{f as Pe,w as p,u as He,e as r,a as I}from"./index-L8OlCEhE.js";import{B as l}from"./dsComponent-BG2jnRr7.js";import{C as H}from"./Code-DLdUuufz.js";import{H as ze}from"./Heading-Bl5mgPxg.js";import{T as M}from"./Text-tIn1sg48.js";import{C as a}from"./CodeBlock-BCTu5Xp_.js";import"./index-BKyFwriW.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Tooltip-GoULuPEB.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";import"./Icon-CrwLKW7B.js";import"./IconConfig-BuieZFlx.js";import"./IconButton-BRyYBgwZ.js";import"./Spinner-PLunUSsK.js";import"./FieldContext-D6URyQos.js";import"./dsPart-nnoJM9m6.js";import"./useControllableState-ByGfjEIG.js";const Me=`{
  "invoice": 104233,
  "customer": "ACME-001",
  "status": "submitted",
  "lines": [
    { "part": "PN-4471-B", "qty": 12, "price": 18.5 },
    { "part": "PN-0093-A", "qty": 4, "price": 210 }
  ],
  "total": 1062
}`,A=`SELECT o.ordernum, o.customer_id, SUM(l.qty * l.price) AS total
FROM orders o
JOIN order_lines l ON l.order_id = o.id
WHERE o.created_at >= CURRENT_DATE - INTERVAL 30 DAY
GROUP BY o.ordernum, o.customer_id
ORDER BY total DESC;`,O=JSON.stringify(Array.from({length:20},(o,t)=>({line:t+1,part:`PN-${String(1e3+t)}`,qty:t%5+1})),null,2),N=`2026-10-06 09:14:02 INFO  Sync started for location MAIN
2026-10-06 09:14:03 WARN  Part PN-4471-B has no default bin; using RECEIVING, which may delay the pick list for every open work order that references it
2026-10-06 09:14:05 INFO  Sync finished: 412 records, 1 warning`,lt={title:"Components/CodeBlock",component:a,tags:["autodocs"],parameters:{layout:"padded"},args:{code:Me,language:"json"},decorators:[o=>e.jsx(l,{maxW:"2xl",children:e.jsx(o,{})})]},x={},y={args:{title:"Submit request",language:"json"}},h={args:{tone:"inverse",title:"query.sql",language:"sql",code:A}},b={render:()=>e.jsxs(l,{display:"grid",gap:"16",children:[e.jsx(a,{size:"sm",title:"size=sm",code:A}),e.jsx(a,{size:"md",title:"size=md",code:A})]}),parameters:{controls:{disable:!0}}},f={args:{lineNumbers:!0,title:"payload.json"}},B={args:{lineNumbers:{start:98},title:"Lines 98–107"}},S={args:{wrap:!0,code:N,language:"log",title:"sync.log"}},v={args:{code:N,language:"log",title:"sync.log"}},w={args:{maxLines:8,code:O,title:"Order lines"}},C={args:{copyable:!1}},T={name:"Test: copy writes plain text",args:{code:`line one
line two
`,lineNumbers:!0,title:"copy.txt"},play:async({canvasElement:o})=>{const t=Pe().mockResolvedValue(void 0);Object.defineProperty(navigator,"clipboard",{value:{writeText:t},configurable:!0});const n=p(o);await He.click(n.getByRole("button",{name:"Copy code"})),r(t).toHaveBeenCalledWith(`line one
line two`),await I(()=>r(n.getByRole("status")).toHaveTextContent("Copied"))}},E={name:"Test: focusable only when overflowing",render:()=>e.jsxs(l,{display:"grid",gap:"16",children:[e.jsx(a,{"data-testid":"short",code:"const ready = true;"}),e.jsx(a,{"data-testid":"long",code:N,language:"log"})]}),play:async({canvasElement:o})=>{const t=p(o),n=t.getByTestId("short"),c=t.getByTestId("long");r(n.querySelector("[tabindex]")).toBeNull(),await I(()=>{const s=p(c).getByRole("region",{name:"log code block"});r(s).toHaveAttribute("tabindex","0")})},parameters:{controls:{disable:!0}}},j={name:"Test: expand toggle",args:{maxLines:4,code:O},play:async({canvasElement:o})=>{const t=p(o),n=t.getByRole("button",{name:/Show all/});r(n).toHaveAttribute("aria-expanded","false"),await He.click(n),r(t.getByRole("button",{name:"Show less"})).toHaveAttribute("aria-expanded","true")}},W="abcdefghijklmnopqrstuvwxyz".repeat(6),Fe=(o,t)=>o.left<t.right&&t.left<o.right&&o.top<t.bottom&&t.top<o.bottom,L={name:"Test: copy button clears the code",render:()=>e.jsxs(l,{display:"grid",gap:"16",children:[e.jsx(a,{"data-testid":"scroll",code:W}),e.jsx(a,{"data-testid":"wrap",code:W,wrap:!0})]}),play:async({canvasElement:o})=>{var n;const t=p(o);for(const c of["scroll","wrap"]){const s=t.getByTestId(c),m=p(s).getByRole("button",{name:"Copy code"}),g=(n=s.querySelector("pre"))==null?void 0:n.parentElement,u=s.querySelector("code > span");if(!g||!u)throw new Error("Code not rendered");const i=g.getBoundingClientRect(),d=u.getBoundingClientRect(),We=new DOMRect(Math.max(d.left,i.left),Math.max(d.top,i.top),Math.min(d.right,i.right)-Math.max(d.left,i.left),Math.min(d.bottom,i.bottom)-Math.max(d.top,i.top));r(Fe(m.getBoundingClientRect(),We)).toBe(!1)}},parameters:{controls:{disable:!0}}},k={name:"Test: collapse keeps whole wrapped lines",args:{wrap:!0,code:N,language:"log",maxLines:2},decorators:[o=>e.jsx(l,{maxW:"sm",children:e.jsx(o,{})})],play:async({canvasElement:o})=>{var s;const[t,n]=o.querySelectorAll("code > span"),c=(s=o.querySelector("pre"))==null?void 0:s.parentElement;if(!t||!n||!c)throw new Error("Lines not rendered");await I(()=>{const m=n.getBoundingClientRect(),g=c.getBoundingClientRect(),u=parseFloat(getComputedStyle(t).lineHeight);r(m.height).toBeGreaterThan(u*1.5),r(m.bottom).toBeLessThanOrEqual(g.bottom)})}},R={name:"Ex: Integration Setup",render:()=>e.jsxs(l,{display:"grid",gap:"12",maxW:"prose",children:[e.jsx(ze,{level:"h3",children:"Connect an MCP client"}),e.jsxs(M,{children:["Add the server to your client configuration. Replace"," ",e.jsx(H,{children:"<token>"})," with the value of ",e.jsx(H,{children:"JSON API Token"})," ","from Admin > Configuration."]}),e.jsx(a,{tone:"inverse",title:"claude_desktop_config.json",language:"json",code:`{
  "mcpServers": {
    "cetec": {
      "url": "https://example.cetecerp.com/mcp",
      "headers": { "Authorization": "Bearer <token>" }
    }
  }
}`}),e.jsx(M,{children:"Then restart the client and run:"}),e.jsx(a,{tone:"inverse",language:"shell",code:"claude mcp list"})]}),parameters:{controls:{disable:!0}}},q={name:"Ex: Submission Log",render:()=>e.jsxs(l,{display:"grid",gap:"12",children:[e.jsx(a,{title:"Submit request",language:"json",code:Me,maxLines:6}),e.jsx(a,{title:"Submit response (HTTP 200)",language:"json",code:O,maxLines:6})]}),parameters:{controls:{disable:!0}}};var P,z,F;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:"{}",...(F=(z=x.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var _,D,J;y.parameters={...y.parameters,docs:{...(_=y.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    title: 'Submit request',
    language: 'json'
  }
}`,...(J=(D=y.parameters)==null?void 0:D.docs)==null?void 0:J.source}}};var G,V,U;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    tone: 'inverse',
    title: 'query.sql',
    language: 'sql',
    code: sqlSample
  }
}`,...(U=(V=h.parameters)==null?void 0:V.docs)==null?void 0:U.source}}};var Y,K,$;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <Box display="grid" gap="16">
      <CodeBlock size="sm" title="size=sm" code={sqlSample} />
      <CodeBlock size="md" title="size=md" code={sqlSample} />
    </Box>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...($=(K=b.parameters)==null?void 0:K.docs)==null?void 0:$.source}}};var Q,X,Z;f.parameters={...f.parameters,docs:{...(Q=f.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    lineNumbers: true,
    title: 'payload.json'
  }
}`,...(Z=(X=f.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,te,oe;B.parameters={...B.parameters,docs:{...(ee=B.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    lineNumbers: {
      start: 98
    },
    title: 'Lines 98–107'
  }
}`,...(oe=(te=B.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var ne,ae,re;S.parameters={...S.parameters,docs:{...(ne=S.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    wrap: true,
    code: logSample,
    language: 'log',
    title: 'sync.log'
  }
}`,...(re=(ae=S.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var se,le,ce;v.parameters={...v.parameters,docs:{...(se=v.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    code: logSample,
    language: 'log',
    title: 'sync.log'
  }
}`,...(ce=(le=v.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var ie,de,pe;w.parameters={...w.parameters,docs:{...(ie=w.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    maxLines: 8,
    code: longJson,
    title: 'Order lines'
  }
}`,...(pe=(de=w.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var me,ge,ue;C.parameters={...C.parameters,docs:{...(me=C.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    copyable: false
  }
}`,...(ue=(ge=C.parameters)==null?void 0:ge.docs)==null?void 0:ue.source}}};var xe,ye,he;T.parameters={...T.parameters,docs:{...(xe=T.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(he=(ye=T.parameters)==null?void 0:ye.docs)==null?void 0:he.source}}};var be,fe,Be;E.parameters={...E.parameters,docs:{...(be=E.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(Be=(fe=E.parameters)==null?void 0:fe.docs)==null?void 0:Be.source}}};var Se,ve,we;j.parameters={...j.parameters,docs:{...(Se=j.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(we=(ve=j.parameters)==null?void 0:ve.docs)==null?void 0:we.source}}};var Ce,Te,Ee;L.parameters={...L.parameters,docs:{...(Ce=L.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  name: 'Test: copy button clears the code',
  render: () => <Box display="grid" gap="16">
      <CodeBlock data-testid="scroll" code={longLine} />
      <CodeBlock data-testid="wrap" code={longLine} wrap />
    </Box>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    for (const testId of ['scroll', 'wrap']) {
      const block = canvas.getByTestId(testId);
      const button = within(block).getByRole('button', {
        name: 'Copy code'
      });
      const content = block.querySelector('pre')?.parentElement;
      const firstLine = block.querySelector('code > span');
      if (!content || !firstLine) throw new Error('Code not rendered');

      // Only the part of the line inside the scroll area is visible.
      const area = content.getBoundingClientRect();
      const line = firstLine.getBoundingClientRect();
      const visibleLine = new DOMRect(Math.max(line.left, area.left), Math.max(line.top, area.top), Math.min(line.right, area.right) - Math.max(line.left, area.left), Math.min(line.bottom, area.bottom) - Math.max(line.top, area.top));
      expect(overlaps(button.getBoundingClientRect(), visibleLine)).toBe(false);
    }
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Ee=(Te=L.parameters)==null?void 0:Te.docs)==null?void 0:Ee.source}}};var je,Le,ke;k.parameters={...k.parameters,docs:{...(je=k.parameters)==null?void 0:je.docs,source:{originalSource:`{
  name: 'Test: collapse keeps whole wrapped lines',
  args: {
    wrap: true,
    code: logSample,
    language: 'log',
    maxLines: 2
  },
  decorators: [Story => <Box maxW="sm">
        <Story />
      </Box>],
  play: async ({
    canvasElement
  }) => {
    const [first, second] = canvasElement.querySelectorAll('code > span');
    const content = canvasElement.querySelector('pre')?.parentElement;
    if (!first || !second || !content) throw new Error('Lines not rendered');
    await waitFor(() => {
      const secondBox = second.getBoundingClientRect();
      const area = content.getBoundingClientRect();
      const lineHeight = parseFloat(getComputedStyle(first).lineHeight);

      // The second source line wraps, so it is taller than one row.
      expect(secondBox.height).toBeGreaterThan(lineHeight * 1.5);
      // All of it stays visible above the collapse.
      expect(secondBox.bottom).toBeLessThanOrEqual(area.bottom);
    });
  }
}`,...(ke=(Le=k.parameters)==null?void 0:Le.docs)==null?void 0:ke.source}}};var Re,qe,Ne;R.parameters={...R.parameters,docs:{...(Re=R.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(Ne=(qe=R.parameters)==null?void 0:qe.docs)==null?void 0:Ne.source}}};var Ae,Ie,Oe;q.parameters={...q.parameters,docs:{...(Ae=q.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...(Oe=(Ie=q.parameters)==null?void 0:Ie.docs)==null?void 0:Oe.source}}};const ct=["Default","WithTitle","Inverse","Sizes","LineNumbers","LineNumbersFromStart","Wrap","ScrollsByDefault","MaxLines","NotCopyable","CopyWritesPlainText","FocusableOnlyWhenOverflowing","ExpandToggle","CopyButtonClearsCode","CollapseKeepsWholeLines","ExIntegrationSetup","ExSubmissionLog"];export{k as CollapseKeepsWholeLines,L as CopyButtonClearsCode,T as CopyWritesPlainText,x as Default,R as ExIntegrationSetup,q as ExSubmissionLog,j as ExpandToggle,E as FocusableOnlyWhenOverflowing,h as Inverse,f as LineNumbers,B as LineNumbersFromStart,w as MaxLines,C as NotCopyable,v as ScrollsByDefault,b as Sizes,y as WithTitle,S as Wrap,ct as __namedExportsOrder,lt as default};
