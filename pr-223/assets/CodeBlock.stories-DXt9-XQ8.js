import{j as e,B as i,T as M}from"./iframe-CRR58YI_.js";import{C as H}from"./Code-CrRjEXJ6.js";import{H as We}from"./Heading-FHxVesos.js";import{C as a}from"./CodeBlock-CByan0GT.js";import"./preload-helper-De6kpJMI.js";import"./IconButton-zahHbzSg.js";import"./Spinner-BwYG2ZPB.js";import"./FieldContext-QFlrTQOk.js";import"./dsPart-nnoJM9m6.js";import"./useControllableState-OVa5QkyD.js";const{expect:s,fn:_e,userEvent:Me,waitFor:A,within:p}=__STORYBOOK_MODULE_TEST__,He=`{
  "invoice": 104233,
  "customer": "ACME-001",
  "status": "submitted",
  "lines": [
    { "part": "PN-4471-B", "qty": 12, "price": 18.5 },
    { "part": "PN-0093-A", "qty": 4, "price": 210 }
  ],
  "total": 1062
}`,N=`SELECT o.ordernum, o.customer_id, SUM(l.qty * l.price) AS total
FROM orders o
JOIN order_lines l ON l.order_id = o.id
WHERE o.created_at >= CURRENT_DATE - INTERVAL 30 DAY
GROUP BY o.ordernum, o.customer_id
ORDER BY total DESC;`,I=JSON.stringify(Array.from({length:20},(t,n)=>({line:n+1,part:`PN-${String(1e3+n)}`,qty:n%5+1})),null,2),q=`2026-10-06 09:14:02 INFO  Sync started for location MAIN
2026-10-06 09:14:03 WARN  Part PN-4471-B has no default bin; using RECEIVING, which may delay the pick list for every open work order that references it
2026-10-06 09:14:05 INFO  Sync finished: 412 records, 1 warning`,Xe={title:"Components/CodeBlock",component:a,tags:["autodocs"],parameters:{layout:"padded"},args:{code:He,language:"json"},decorators:[t=>e.jsx(i,{maxW:"2xl",children:e.jsx(t,{})})]},y={},h={args:{title:"Submit request",language:"json"}},x={args:{tone:"inverse",title:"query.sql",language:"sql",code:N}},b={render:()=>e.jsxs(i,{display:"grid",gap:"16",children:[e.jsx(a,{size:"sm",title:"size=sm",code:N}),e.jsx(a,{size:"md",title:"size=md",code:N})]}),parameters:{controls:{disable:!0}}},v={args:{lineNumbers:!0,title:"payload.json"}},f={args:{lineNumbers:{start:98},title:"Lines 98–107"}},S={args:{wrap:!0,code:q,language:"log",title:"sync.log"}},B={args:{code:q,language:"log",title:"sync.log"}},w={args:{maxLines:8,code:I,title:"Order lines"}},C={args:{copyable:!1}},T={name:"Test: copy writes plain text",args:{code:`line one
line two
`,lineNumbers:!0,title:"copy.txt"},play:async({canvasElement:t})=>{const n=_e().mockResolvedValue(void 0),o=Object.getOwnPropertyDescriptor(navigator,"clipboard");Object.defineProperty(navigator,"clipboard",{value:{writeText:n},configurable:!0});try{const r=p(t);await Me.click(r.getByRole("button",{name:"Copy code"})),s(n).toHaveBeenCalledWith(`line one
line two`),await A(()=>s(r.getByRole("status")).toHaveTextContent("Copied"))}finally{o?Object.defineProperty(navigator,"clipboard",o):Reflect.deleteProperty(navigator,"clipboard")}}},E={name:"Test: focusable only when overflowing",render:()=>e.jsxs(i,{display:"grid",gap:"16",children:[e.jsx(a,{"data-testid":"short",code:"const ready = true;"}),e.jsx(a,{"data-testid":"long",code:q,language:"log"})]}),play:async({canvasElement:t})=>{const n=p(t),o=n.getByTestId("short"),r=n.getByTestId("long");s(o.querySelector("[tabindex]")).toBeNull(),await A(()=>{const l=p(r).getByRole("region",{name:"log code block"});s(l).toHaveAttribute("tabindex","0")})},parameters:{controls:{disable:!0}}},j={name:"Test: expand toggle",args:{maxLines:4,code:I},play:async({canvasElement:t})=>{const n=p(t),o=n.getByRole("button",{name:/Show all/});s(o).toHaveAttribute("aria-expanded","false"),await Me.click(o),s(n.getByRole("button",{name:"Show less"})).toHaveAttribute("aria-expanded","true")}},P="abcdefghijklmnopqrstuvwxyz".repeat(6),ze=(t,n)=>t.left<n.right&&n.left<t.right&&t.top<n.bottom&&n.top<t.bottom,L={name:"Test: copy button clears the code",render:()=>e.jsxs(i,{display:"grid",gap:"16",children:[e.jsx(a,{"data-testid":"scroll",code:P}),e.jsx(a,{"data-testid":"wrap",code:P,wrap:!0})]}),play:async({canvasElement:t})=>{var o;const n=p(t);for(const r of["scroll","wrap"]){const l=n.getByTestId(r),g=p(l).getByRole("button",{name:"Copy code"}),m=(o=l.querySelector("pre"))==null?void 0:o.parentElement,u=l.querySelector("code > span");if(!m||!u)throw new Error("Code not rendered");const c=m.getBoundingClientRect(),d=u.getBoundingClientRect(),Pe=new DOMRect(Math.max(d.left,c.left),Math.max(d.top,c.top),Math.min(d.right,c.right)-Math.max(d.left,c.left),Math.min(d.bottom,c.bottom)-Math.max(d.top,c.top));s(ze(g.getBoundingClientRect(),Pe)).toBe(!1)}},parameters:{controls:{disable:!0}}},R={name:"Test: collapse keeps whole wrapped lines",args:{wrap:!0,code:q,language:"log",maxLines:2},decorators:[t=>e.jsx(i,{maxW:"sm",children:e.jsx(t,{})})],play:async({canvasElement:t})=>{var l;const[n,o]=t.querySelectorAll("code > span"),r=(l=t.querySelector("pre"))==null?void 0:l.parentElement;if(!n||!o||!r)throw new Error("Lines not rendered");await A(()=>{const g=o.getBoundingClientRect(),m=r.getBoundingClientRect(),u=parseFloat(getComputedStyle(n).lineHeight);s(g.height).toBeGreaterThan(u*1.5),s(g.bottom).toBeLessThanOrEqual(m.bottom)})}},k={name:"Ex: Integration Setup",render:()=>e.jsxs(i,{display:"grid",gap:"12",maxW:"prose",children:[e.jsx(We,{level:"h3",children:"Connect an MCP client"}),e.jsxs(M,{children:["Add the server to your client configuration. Replace"," ",e.jsx(H,{children:"<token>"})," with the value of ",e.jsx(H,{children:"JSON API Token"})," ","from Admin > Configuration."]}),e.jsx(a,{tone:"inverse",title:"claude_desktop_config.json",language:"json",code:`{
  "mcpServers": {
    "cetec": {
      "url": "https://example.cetecerp.com/mcp",
      "headers": { "Authorization": "Bearer <token>" }
    }
  }
}`}),e.jsx(M,{children:"Then restart the client and run:"}),e.jsx(a,{tone:"inverse",language:"shell",code:"claude mcp list"})]}),parameters:{controls:{disable:!0}}},O={name:"Ex: Submission Log",render:()=>e.jsxs(i,{display:"grid",gap:"12",children:[e.jsx(a,{title:"Submit request",language:"json",code:He,maxLines:6}),e.jsx(a,{title:"Submit response (HTTP 200)",language:"json",code:I,maxLines:6})]}),parameters:{controls:{disable:!0}}},Ze=["Default","WithTitle","Inverse","Sizes","LineNumbers","LineNumbersFromStart","Wrap","ScrollsByDefault","MaxLines","NotCopyable","CopyWritesPlainText","FocusableOnlyWhenOverflowing","ExpandToggle","CopyButtonClearsCode","CollapseKeepsWholeLines","ExIntegrationSetup","ExSubmissionLog"];var W,_,z;y.parameters={...y.parameters,docs:{...(W=y.parameters)==null?void 0:W.docs,source:{originalSource:"{}",...(z=(_=y.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};var D,F,J;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    title: 'Submit request',
    language: 'json'
  }
}`,...(J=(F=h.parameters)==null?void 0:F.docs)==null?void 0:J.source}}};var G,K,U;x.parameters={...x.parameters,docs:{...(G=x.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    tone: 'inverse',
    title: 'query.sql',
    language: 'sql',
    code: sqlSample
  }
}`,...(U=(K=x.parameters)==null?void 0:K.docs)==null?void 0:U.source}}};var V,Y,$;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <Box display="grid" gap="16">
      <CodeBlock size="sm" title="size=sm" code={sqlSample} />
      <CodeBlock size="md" title="size=md" code={sqlSample} />
    </Box>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...($=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};var Q,X,Z;v.parameters={...v.parameters,docs:{...(Q=v.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    lineNumbers: true,
    title: 'payload.json'
  }
}`,...(Z=(X=v.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,ne,te;f.parameters={...f.parameters,docs:{...(ee=f.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    lineNumbers: {
      start: 98
    },
    title: 'Lines 98–107'
  }
}`,...(te=(ne=f.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var oe,ae,re;S.parameters={...S.parameters,docs:{...(oe=S.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    wrap: true,
    code: logSample,
    language: 'log',
    title: 'sync.log'
  }
}`,...(re=(ae=S.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var se,le,ie;B.parameters={...B.parameters,docs:{...(se=B.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    code: logSample,
    language: 'log',
    title: 'sync.log'
  }
}`,...(ie=(le=B.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var ce,de,pe;w.parameters={...w.parameters,docs:{...(ce=w.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    maxLines: 8,
    code: longJson,
    title: 'Order lines'
  }
}`,...(pe=(de=w.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var ge,me,ue;C.parameters={...C.parameters,docs:{...(ge=C.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    copyable: false
  }
}`,...(ue=(me=C.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};var ye,he,xe;T.parameters={...T.parameters,docs:{...(ye=T.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
    // Keep the original so other stories in this window use the real clipboard.
    const original = Object.getOwnPropertyDescriptor(navigator, 'clipboard');
    Object.defineProperty(navigator, 'clipboard', {
      value: {
        writeText
      },
      configurable: true
    });
    try {
      const canvas = within(canvasElement);
      await userEvent.click(canvas.getByRole('button', {
        name: 'Copy code'
      }));

      // Line numbers and the trailing line break are not copied.
      expect(writeText).toHaveBeenCalledWith('line one\\nline two');
      await waitFor(() => expect(canvas.getByRole('status')).toHaveTextContent('Copied'));
    } finally {
      if (original) {
        Object.defineProperty(navigator, 'clipboard', original);
      } else {
        // The real clipboard lives on Navigator.prototype; drop the own override.
        Reflect.deleteProperty(navigator, 'clipboard');
      }
    }
  }
}`,...(xe=(he=T.parameters)==null?void 0:he.docs)==null?void 0:xe.source}}};var be,ve,fe;E.parameters={...E.parameters,docs:{...(be=E.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(fe=(ve=E.parameters)==null?void 0:ve.docs)==null?void 0:fe.source}}};var Se,Be,we;j.parameters={...j.parameters,docs:{...(Se=j.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(we=(Be=j.parameters)==null?void 0:Be.docs)==null?void 0:we.source}}};var Ce,Te,Ee;L.parameters={...L.parameters,docs:{...(Ce=L.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(Ee=(Te=L.parameters)==null?void 0:Te.docs)==null?void 0:Ee.source}}};var je,Le,Re;R.parameters={...R.parameters,docs:{...(je=R.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
}`,...(Re=(Le=R.parameters)==null?void 0:Le.docs)==null?void 0:Re.source}}};var ke,Oe,qe;k.parameters={...k.parameters,docs:{...(ke=k.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(qe=(Oe=k.parameters)==null?void 0:Oe.docs)==null?void 0:qe.source}}};var Ne,Ae,Ie;O.parameters={...O.parameters,docs:{...(Ne=O.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
}`,...(Ie=(Ae=O.parameters)==null?void 0:Ae.docs)==null?void 0:Ie.source}}};export{R as CollapseKeepsWholeLines,L as CopyButtonClearsCode,T as CopyWritesPlainText,y as Default,k as ExIntegrationSetup,O as ExSubmissionLog,j as ExpandToggle,E as FocusableOnlyWhenOverflowing,x as Inverse,v as LineNumbers,f as LineNumbersFromStart,w as MaxLines,C as NotCopyable,B as ScrollsByDefault,b as Sizes,h as WithTitle,S as Wrap,Ze as __namedExportsOrder,Xe as default};
