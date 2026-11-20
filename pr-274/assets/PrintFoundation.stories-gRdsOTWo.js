import{j as e,G as _,V as i,T as m,B as t,H as l,c as D,k as $}from"./iframe-Dnjkp1ni.js";import{a as N,P as F}from"./PrintPreview-CoMU9Bdl.js";import"./preload-helper-CPI0EWmb.js";const{expect:d,within:W}=__STORYBOOK_MODULE_TEST__,H="cetec-printDoc",O="cetec-ink-thermal",G={width:4.5,height:6.5,unit:"in"},X={title:"Print/Foundation",component:N,parameters:{layout:"fullscreen",docs:{description:{component:`The print foundation: paper inks, print text styles in points, and rule
widths. Printed documents use them through two root classes.

- \`cetec-printDoc\` goes on the document root. Recipes read it as the
  \`_printDoc\` condition. Inside it, semantic colors reset to their light
  values, so paper stays white in dark mode.
- \`cetec-ink-thermal\` goes next to it for thermal label printers. Recipes
  read it as the \`_thermal\` condition. Every paper ink turns solid black,
  and rules are at least 1.5 pt.

Switch the app theme to dark. The sheets do not change.`}}},tags:["autodocs"],args:{size:G}},j=({ink:n,children:r})=>e.jsx(t,{className:D(H,n==="thermal"&&O),h:"full",p:"24",children:e.jsx($.div,{children:r})}),g=({children:n})=>e.jsx(t,{textStyle:"print.capsLabel",color:"paper.ink",pb:"4",borderBottomWidth:"paper.rule",borderBottomStyle:"solid",borderColor:"paper.hairline",children:n}),s=({name:n,children:r})=>e.jsxs(l,{alignItems:"baseline",gap:"12",children:[e.jsx(t,{textStyle:"print.smallPrint",fontFamily:"mono",w:"128",flexShrink:"0",children:n}),e.jsx(t,{flex:"1",minW:"0",children:r})]}),M=()=>e.jsxs(i,{alignItems:"stretch",gap:"6",children:[e.jsx(g,{children:"Text styles"}),e.jsx(s,{name:"print.title · 20 pt",children:e.jsx(t,{textStyle:"print.title",children:"Invoice"})}),e.jsx(s,{name:"print.total · 14 pt",children:e.jsx(t,{textStyle:"print.total",children:"$12,480.00"})}),e.jsx(s,{name:"print.fieldValue · 9.5 pt",children:e.jsx(t,{textStyle:"print.fieldValue",children:"Net 30"})}),e.jsx(s,{name:"print.body · 8.5 pt",children:e.jsx(t,{textStyle:"print.body",children:"Aluminum bracket, 4 in"})}),e.jsx(s,{name:"print.smallPrint · 7.5 pt",children:e.jsx(t,{textStyle:"print.smallPrint",children:"Prices valid for 30 days."})}),e.jsx(s,{name:"print.capsLabel · 7 pt",children:e.jsx(t,{textStyle:"print.capsLabel",children:"Due date"})})]}),q=()=>e.jsxs(i,{alignItems:"stretch",gap:"6",children:[e.jsx(g,{children:"Paper inks"}),e.jsx(s,{name:"paper.ink",children:e.jsxs(l,{gap:"8",children:[e.jsx(t,{w:"16",h:"16",bg:"paper.ink"}),e.jsx(t,{textStyle:"print.body",children:"Main text and strong rules"})]})}),e.jsx(s,{name:"paper.inkSoft",children:e.jsxs(l,{gap:"8",children:[e.jsx(t,{w:"16",h:"16",bg:"paper.inkSoft"}),e.jsx(t,{textStyle:"print.body",color:"paper.inkSoft",children:"Labels and secondary text"})]})}),e.jsx(s,{name:"paper.hairline",children:e.jsxs(l,{gap:"8",children:[e.jsx(t,{w:"16",h:"16",bg:"paper.hairline"}),e.jsx(t,{textStyle:"print.body",children:"Rules between rows"})]})}),e.jsx(s,{name:"paper.inkAlert",children:e.jsxs(l,{gap:"8",children:[e.jsx(t,{w:"16",h:"16",bg:"paper.inkAlert"}),e.jsx(t,{textStyle:"print.body",color:"paper.inkAlert",children:"−$240.00 overdue"})]})})]}),K=()=>e.jsxs(i,{alignItems:"stretch",gap:"6",children:[e.jsx(g,{children:"Rules"}),e.jsx(s,{name:"paper.hairline · 0.5 pt",children:e.jsx(t,{"data-rule":"hairline",borderTopWidth:"paper.hairline",borderTopStyle:"solid",borderColor:"paper.ink",mt:"4"})}),e.jsx(s,{name:"paper.rule · 1 pt",children:e.jsx(t,{"data-rule":"rule",borderTopWidth:"paper.rule",borderTopStyle:"solid",borderColor:"paper.ink",mt:"4"})})]}),U=()=>e.jsxs(i,{alignItems:"stretch",gap:"6",children:[e.jsx(g,{children:"Semantic colors"}),e.jsx(t,{bg:"surface.sunken",p:"6",borderRadius:"2",children:e.jsx(m,{size:"12",color:"text.subtle",children:"Design-system text reads its light colors on paper."})})]}),k=({ink:n})=>e.jsx(j,{ink:n,children:e.jsxs(i,{alignItems:"stretch",gap:"16",children:[e.jsx(M,{}),e.jsx(q,{}),e.jsx(K,{}),e.jsx(U,{})]})}),u=({label:n,size:r,h:a="3xl",children:h})=>e.jsxs(i,{alignItems:"stretch",gap:"0",children:[e.jsx(t,{px:"24",pt:"16",textStyle:"body.sm",color:"text.subtle",children:n}),e.jsx(t,{h:a,children:e.jsx(F,{fit:1,"aria-label":n,children:e.jsx(N,{size:r,children:h})})})]}),o={render:n=>e.jsxs(_,{columns:2,gap:"0",children:[e.jsx(u,{label:"Normal ink",size:n.size,children:e.jsx(k,{ink:"normal"})}),e.jsx(u,{label:"Thermal ink",size:n.size,children:e.jsx(k,{ink:"thermal"})})]}),play:async({canvasElement:n})=>{const r=W(n),a=r.getByLabelText("Normal ink"),h=r.getByLabelText("Thermal ink"),x=(S,y)=>getComputedStyle(S.querySelector(`[data-rule="${y}"]`)??S).getPropertyValue(`--cetec-border-widths-paper-${y}`).trim();await d(x(a,"hairline")).toBe("0.5pt"),await d(x(a,"rule")).toBe("1pt"),await d(x(h,"hairline")).toBe("1.5pt"),await d(x(h,"rule")).toBe("1.5pt")}},c={args:{size:{width:4.5,height:1.75,unit:"in"}},render:n=>e.jsx(u,{label:"Semantic colors on paper",size:n.size,h:"2xs",children:e.jsx(j,{ink:"normal",children:e.jsxs(i,{alignItems:"stretch",gap:"8",children:[e.jsx(m,{color:"text",children:"Text in the default text color."}),e.jsx(m,{color:"text.subtle",children:"Text in the subtle text color."}),e.jsx(t,{bg:"surface.sunken",p:"8",borderRadius:"2",children:e.jsx(m,{size:"12",children:"A sunken surface."})})]})})}),play:async({canvasElement:n})=>{const a=W(n).getByText("Text in the default text color.");await d(getComputedStyle(a).color).toBe("rgb(41, 42, 46)")}},p={args:{size:{width:8.5,height:1.5,unit:"in"}},render:n=>e.jsx(i,{alignItems:"stretch",gap:"0",children:["normal","thermal"].map(r=>e.jsx(u,{label:r==="normal"?"Normal ink":"Thermal ink",size:n.size,h:"2xs",children:e.jsx(j,{ink:r,children:e.jsxs(l,{alignItems:"flex-start",justifyContent:"space-between",children:[e.jsxs(i,{alignItems:"flex-start",gap:"4",children:[e.jsx(t,{textStyle:"print.capsLabel",children:"Invoice"}),e.jsx(t,{textStyle:"print.title",children:"INV-10482"}),e.jsx(t,{textStyle:"print.smallPrint",children:"Payment is due within 30 days."})]}),e.jsxs(i,{alignItems:"flex-end",gap:"4",children:[e.jsx(t,{textStyle:"print.capsLabel",children:"Amount due"}),e.jsx(t,{textStyle:"print.total",children:"$12,480.00"}),e.jsx(t,{textStyle:"print.fieldValue",color:"paper.inkAlert",children:"Past due"})]})]})})},r))})},Z=["Foundation","SemanticReset","ExInvoiceTop"];var b,T,w,f,B;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <Grid columns={2} gap="0">
      <TrueSizeSheet label="Normal ink" size={args.size}>
        <FoundationSheet ink="normal" />
      </TrueSizeSheet>
      <TrueSizeSheet label="Thermal ink" size={args.size}>
        <FoundationSheet ink="thermal" />
      </TrueSizeSheet>
    </Grid>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const normal = canvas.getByLabelText('Normal ink');
    const thermal = canvas.getByLabelText('Thermal ink');
    const ruleWidth = (root: HTMLElement, rule: string) => getComputedStyle(root.querySelector(\`[data-rule="\${rule}"]\`) ?? root).getPropertyValue(\`--cetec-border-widths-paper-\${rule}\`).trim();
    await expect(ruleWidth(normal, 'hairline')).toBe('0.5pt');
    await expect(ruleWidth(normal, 'rule')).toBe('1pt');
    await expect(ruleWidth(thermal, 'hairline')).toBe('1.5pt');
    await expect(ruleWidth(thermal, 'rule')).toBe('1.5pt');
  }
}`,...(w=(T=o.parameters)==null?void 0:T.docs)==null?void 0:w.source},description:{story:`Normal ink and thermal ink side by side. In thermal ink every ink is solid
black and both rules are 1.5 pt.`,...(B=(f=o.parameters)==null?void 0:f.docs)==null?void 0:B.description}}};var z,I,v,P,R;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    size: {
      width: 4.5,
      height: 1.75,
      unit: 'in'
    }
  },
  render: args => <TrueSizeSheet label="Semantic colors on paper" size={args.size} h="2xs">
      <PaperRoot ink="normal">
        <VStack alignItems="stretch" gap="8">
          <Text color="text">Text in the default text color.</Text>
          <Text color="text.subtle">Text in the subtle text color.</Text>
          <Box bg="surface.sunken" p="8" borderRadius="2">
            <Text size="12">A sunken surface.</Text>
          </Box>
        </VStack>
      </PaperRoot>
    </TrueSizeSheet>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const text = canvas.getByText('Text in the default text color.');
    // The light value of the \`text\` token is neutral.100, #292A2E.
    await expect(getComputedStyle(text).color).toBe('rgb(41, 42, 46)');
  }
}`,...(v=(I=c.parameters)==null?void 0:I.docs)==null?void 0:v.source},description:{story:"Paper stays white in dark mode. The text on the sheet is a design-system\n`Text` with a semantic color. Inside `cetec-printDoc` it reads the light\nvalue.",...(R=(P=c.parameters)==null?void 0:P.docs)==null?void 0:R.description}}};var V,E,L,A,C;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    size: {
      width: 8.5,
      height: 1.5,
      unit: 'in'
    }
  },
  render: args => <VStack alignItems="stretch" gap="0">
      {(['normal', 'thermal'] as const).map(ink => <TrueSizeSheet key={ink} label={ink === 'normal' ? 'Normal ink' : 'Thermal ink'} size={args.size} h="2xs">
          <PaperRoot ink={ink}>
            <HStack alignItems="flex-start" justifyContent="space-between">
              <VStack alignItems="flex-start" gap="4">
                <Box textStyle="print.capsLabel">Invoice</Box>
                <Box textStyle="print.title">INV-10482</Box>
                <Box textStyle="print.smallPrint">
                  Payment is due within 30 days.
                </Box>
              </VStack>
              <VStack alignItems="flex-end" gap="4">
                <Box textStyle="print.capsLabel">Amount due</Box>
                <Box textStyle="print.total">$12,480.00</Box>
                <Box textStyle="print.fieldValue" color="paper.inkAlert">
                  Past due
                </Box>
              </VStack>
            </HStack>
          </PaperRoot>
        </TrueSizeSheet>)}
    </VStack>
}`,...(L=(E=p.parameters)==null?void 0:E.docs)==null?void 0:L.source},description:{story:"Ex: the top of an invoice, built from the print text styles.",...(C=(A=p.parameters)==null?void 0:A.docs)==null?void 0:C.description}}};export{p as ExInvoiceTop,o as Foundation,c as SemanticReset,Z as __namedExportsOrder,X as default};
