import{j as s,B as g,T as l}from"./iframe-B861AzWe.js";import{p as K}from"./usePrintPage-BzuNGdMS.js";import{p as y}from"./printFixtures-0K543kF7.js";import{P as Y}from"./PrintFixture-B_rGiLtf.js";import"./preload-helper-B6kYaje4.js";import"./PrintPreview-kzsG7U3N.js";import"./CodeBlock-D8CLKwX7.js";import"./IconButton-BltImcZV.js";import"./Spinner-CjdL_ata.js";import"./FieldContext-CrxIKTA8.js";import"./useLocale-BADWnSrj.js";import"./dsPart-nnoJM9m6.js";import"./useControllableState-BZ-X75e6.js";const{expect:e,within:r}=__STORYBOOK_MODULE_TEST__,J=i=>{const n=document.createRange();return n.selectNodeContents(i),new Set([...n.getClientRects()].filter(a=>a.width>0).map(a=>Math.round(a.top))).size},pe={title:"Print/Text",component:Y,parameters:{layout:"fullscreen",docs:{description:{component:'The print look of `Text`, for the kit element `text`. It prints a note,\nterms, payment instructions, or the closing line of a quote or invoice.\n\nThe Go print helper writes the `text` recipe classes. A title is a `Text`\nwith `variant="title"` above the text. The kit always sets\n`preserveLines`, so the line breaks of a contract text field print as they\nare. Each paper story renders one fixture from\n`src/recipes/text.fixtures.json`, exactly as stored.'}}},tags:["autodocs"],args:{recipe:"text",fixture:y("text","titled-note"),paper:"letter",fit:"width",h:"md"},argTypes:{paper:{control:"inline-radio",options:["letter","a4","legal"]},fixture:{control:!1},size:{control:!1},footer:{control:!1}}},p={render:()=>s.jsxs(g,{display:"grid",gap:"24",p:"24",maxW:"prose",bg:"surface",children:[s.jsxs(g,{children:[s.jsx(l,{as:"h3",variant:"title",children:"Note"}),s.jsx(l,{as:"p",variant:"note",preserveLines:!0,children:"Parts ship in ESD bags. Lot traceability on request."})]}),s.jsxs(g,{children:[s.jsx(l,{as:"h3",variant:"title",children:"Terms"}),s.jsx(l,{as:"p",variant:"terms",preserveLines:!0,children:`Claims must be made within 10 days of receipt. Returns need a return authorization number, and goods must come back in their original packing.
Prices do not include taxes, duties, or freight unless this document lists them.`})]}),s.jsx(l,{as:"p",variant:"closing",preserveLines:!0,children:"Thank you for your business."})]}),play:async({canvasElement:i})=>{const n=r(i),t=await n.findByText(/Claims must be made/);await e(getComputedStyle(t).whiteSpace).toBe("pre-line");const a=await n.findByRole("heading",{name:"Terms"});await e(getComputedStyle(a).textTransform).toBe("uppercase")}},c={play:async({canvasElement:i})=>{const n=r(await r(i).findByLabelText("titled-note")),t=await n.findByText(/Parts ship in ESD bags/);await e(getComputedStyle(t).fontSize).toBe("11.3333px"),await e(getComputedStyle(t).color).toBe("rgb(41, 42, 46)");const a=await n.findByRole("heading",{name:"Note"}),o=getComputedStyle(a);await e(o.fontSize).toBe("9.33333px"),await e(o.textTransform).toBe("uppercase"),await e(o.borderBottomStyle).toBe("solid"),await e(o.breakAfter).toBe("avoid")}},d={args:{fixture:y("text","terms")},play:async({canvasElement:i})=>{const t=await r(await r(i).findByLabelText("terms")).findByText(/Claims must be made/);await e(getComputedStyle(t).fontSize).toBe("10px"),await e(getComputedStyle(t).color).not.toBe("rgb(41, 42, 46)")}},m={args:{fixture:y("text","closing-line")},play:async({canvasElement:i})=>{const t=await r(await r(i).findByLabelText("closing-line")).findByText("Thank you for your business."),a=getComputedStyle(t);await e(a.fontFamily).toMatch(/Ruda/),await e(a.fontSize).toBe("14.6667px")}},u={args:{fixture:y("text","line-breaks")},play:async({canvasElement:i})=>{var a;const t=await r(await r(i).findByLabelText("line-breaks")).findByText(/Pay by wire transfer/);await e((a=t.textContent)==null?void 0:a.split(`
`)).toHaveLength(4),await e(getComputedStyle(t).whiteSpace).toBe("pre-line"),await e(J(t)).toBe(4)}},x={args:{thermal:!0,size:K.label4x6,margins:.25,fit:"page",h:"3xl"},play:async({canvasElement:i})=>{const n=r(await r(i).findByLabelText("titled-note")),t=await n.findByText(/Parts ship in ESD bags/);await e(getComputedStyle(t).color).toBe("rgb(0, 0, 0)");const a=await n.findByRole("heading",{name:"Note"}),o=getComputedStyle(a);await e(o.color).toBe("rgb(0, 0, 0)"),await e(o.borderBottomColor).toBe("rgb(0, 0, 0)"),await e(getComputedStyle(a).getPropertyValue("--cetec-border-widths-paper-rule")).toBe("1.5pt")}},ce=["OnScreen","TitledNote","Terms","ClosingLine","LineBreaks","ThermalInk"];var h,w,f,B,b;p.parameters={...p.parameters,docs:{...(h=p.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <Box display="grid" gap="24" p="24" maxW="prose" bg="surface">
      <Box>
        <Text as="h3" variant="title">
          Note
        </Text>
        <Text as="p" variant="note" preserveLines>
          Parts ship in ESD bags. Lot traceability on request.
        </Text>
      </Box>
      <Box>
        <Text as="h3" variant="title">
          Terms
        </Text>
        <Text as="p" variant="terms" preserveLines>
          {'Claims must be made within 10 days of receipt. Returns need a return authorization number, and goods must come back in their original packing.\\nPrices do not include taxes, duties, or freight unless this document lists them.'}
        </Text>
      </Box>
      <Text as="p" variant="closing" preserveLines>
        Thank you for your business.
      </Text>
    </Box>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const terms = await canvas.findByText(/Claims must be made/);
    await expect(getComputedStyle(terms).whiteSpace).toBe('pre-line');
    const title = await canvas.findByRole('heading', {
      name: 'Terms'
    });
    await expect(getComputedStyle(title).textTransform).toBe('uppercase');
  }
}`,...(f=(w=p.parameters)==null?void 0:w.docs)==null?void 0:f.source},description:{story:"The same blocks of words on screen, in the app theme. Use `variant` for\nthe look and `preserveLines` for text from a multi-line field.",...(b=(B=p.parameters)==null?void 0:B.docs)==null?void 0:b.description}}};var S,T,v,C,k;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const page = within(await within(canvasElement).findByLabelText('titled-note'));
    const note = await page.findByText(/Parts ship in ESD bags/);
    // print.body is 8.5 pt, which is 11.33 px at 96 px per inch.
    await expect(getComputedStyle(note).fontSize).toBe('11.3333px');
    // paper.ink is neutral.100, #292A2E.
    await expect(getComputedStyle(note).color).toBe('rgb(41, 42, 46)');
    const title = await page.findByRole('heading', {
      name: 'Note'
    });
    const titleStyle = getComputedStyle(title);
    // print.capsLabel is 7 pt, which is 9.33 px.
    await expect(titleStyle.fontSize).toBe('9.33333px');
    await expect(titleStyle.textTransform).toBe('uppercase');
    await expect(titleStyle.borderBottomStyle).toBe('solid');
    await expect(titleStyle.breakAfter).toBe('avoid');
  }
}`,...(v=(T=c.parameters)==null?void 0:T.docs)==null?void 0:v.source},description:{story:"Fixture `titled-note`: a note with a title, on paper.",...(k=(C=c.parameters)==null?void 0:C.docs)==null?void 0:k.description}}};var L,E,z,P,R;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    fixture: printFixture('text', 'terms')
  },
  play: async ({
    canvasElement
  }) => {
    const page = within(await within(canvasElement).findByLabelText('terms'));
    const terms = await page.findByText(/Claims must be made/);
    // print.smallPrint is 7.5 pt, which is 10 px.
    await expect(getComputedStyle(terms).fontSize).toBe('10px');
    // paper.inkSoft is neutral.70.
    await expect(getComputedStyle(terms).color).not.toBe('rgb(41, 42, 46)');
  }
}`,...(z=(E=d.parameters)==null?void 0:E.docs)==null?void 0:z.source},description:{story:"Fixture `terms`: long terms in small print, on paper.",...(R=(P=d.parameters)==null?void 0:P.docs)==null?void 0:R.description}}};var F,j,N,D,_;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    fixture: printFixture('text', 'closing-line')
  },
  play: async ({
    canvasElement
  }) => {
    const page = within(await within(canvasElement).findByLabelText('closing-line'));
    const closing = await page.findByText('Thank you for your business.');
    const style = getComputedStyle(closing);
    await expect(style.fontFamily).toMatch(/Ruda/);
    // print.lead is 11 pt, which is 14.67 px.
    await expect(style.fontSize).toBe('14.6667px');
  }
}`,...(N=(j=m.parameters)==null?void 0:j.docs)==null?void 0:N.source},description:{story:"Fixture `closing-line`: a closing line with no title, on paper.",...(_=(D=m.parameters)==null?void 0:D.docs)==null?void 0:_.description}}};var O,A,M,q,I;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    fixture: printFixture('text', 'line-breaks')
  },
  play: async ({
    canvasElement
  }) => {
    const page = within(await within(canvasElement).findByLabelText('line-breaks'));
    const value = await page.findByText(/Pay by wire transfer/);
    await expect(value.textContent?.split('\\n')).toHaveLength(4);
    await expect(getComputedStyle(value).whiteSpace).toBe('pre-line');
    await expect(renderedLines(value)).toBe(4);
  }
}`,...(M=(A=u.parameters)==null?void 0:A.docs)==null?void 0:M.source},description:{story:"Fixture `line-breaks`: payment instructions with three line breaks. They\nprint on four lines.",...(I=(q=u.parameters)==null?void 0:q.docs)==null?void 0:I.description}}};var H,U,V,W,G;x.parameters={...x.parameters,docs:{...(H=x.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    thermal: true,
    size: pageSizes.label4x6,
    margins: 0.25,
    fit: 'page',
    h: '3xl'
  },
  play: async ({
    canvasElement
  }) => {
    const page = within(await within(canvasElement).findByLabelText('titled-note'));
    const note = await page.findByText(/Parts ship in ESD bags/);
    await expect(getComputedStyle(note).color).toBe('rgb(0, 0, 0)');
    const title = await page.findByRole('heading', {
      name: 'Note'
    });
    const titleStyle = getComputedStyle(title);
    await expect(titleStyle.color).toBe('rgb(0, 0, 0)');
    await expect(titleStyle.borderBottomColor).toBe('rgb(0, 0, 0)');
    // Thermal rules are at least 1.5 pt.
    await expect(getComputedStyle(title).getPropertyValue('--cetec-border-widths-paper-rule')).toBe('1.5pt');
  }
}`,...(V=(U=x.parameters)==null?void 0:U.docs)==null?void 0:V.source},description:{story:"Fixture `titled-note` in thermal ink, on 4 × 6 in label stock. The title,\nits rule, and the note are solid black.",...(G=(W=x.parameters)==null?void 0:W.docs)==null?void 0:G.description}}};export{m as ClosingLine,u as LineBreaks,p as OnScreen,d as Terms,x as ThermalInk,c as TitledNote,ce as __namedExportsOrder,pe as default};
