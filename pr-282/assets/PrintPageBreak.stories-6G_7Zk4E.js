import{j as a,G as M,V as h,B as O}from"./iframe-B861AzWe.js";import{p as x}from"./printFixtures-0K543kF7.js";import{P as R,a as H,b as V}from"./PrintFixture-B_rGiLtf.js";import{H as w}from"./Heading-CCLyJcDk.js";import{p as z}from"./usePrintPage-BzuNGdMS.js";import{P as q,a as A}from"./PrintPreview-kzsG7U3N.js";import"./preload-helper-B6kYaje4.js";import"./CodeBlock-D8CLKwX7.js";import"./IconButton-BltImcZV.js";import"./Spinner-CjdL_ata.js";import"./FieldContext-CrxIKTA8.js";import"./useLocale-BADWnSrj.js";import"./dsPart-nnoJM9m6.js";import"./useControllableState-BZ-X75e6.js";const{expect:i,within:c}=__STORYBOOK_MODULE_TEST__,G=x("printPageBreak","break").html,m=x("printPageBreak","between-lines"),Y=e=>e.html.split(G).map((t,n)=>({...e,name:`${e.name}-page-${n+1}`,html:t})),g=z.label4x3,b=.8,N=e=>[...document.styleSheets].some(t=>{const n=s=>[...s].some(r=>r instanceof CSSMediaRule&&r.media.mediaText==="print"?[...r.cssRules].some(d=>d instanceof CSSStyleRule&&d.selectorText===e&&d.style.display==="none"):"cssRules"in r?n(r.cssRules):!1);try{return n(t.cssRules)}catch{return!1}}),se={title:"Print/Page break",component:R,parameters:{layout:"fullscreen",docs:{description:{component:`A page break, the \`printPageBreak\` slot recipe, for the kit element
\`page_break\`. It has no props and no React component. The Go print helper
writes the markup from the fixtures.

In print, it starts a new page and takes no space. On screen, such as the
editor preview, it shows a dashed line and a "Page break" label. Go writes
the label text. The kit checker does not allow a page break inside a table
or totals.

Each story renders fixtures from \`src/recipes/printPageBreak.fixtures.json\`.
A preview cannot print, so the printed pages are the fixture split at the
break, as the printer splits it.`}}},tags:["autodocs"],args:{recipe:"printPageBreak",fixture:m,size:g,margins:.25,h:"xl"},argTypes:{fixture:{control:!1},size:{control:!1},footer:{control:!1}}},o={render:({thermal:e})=>a.jsxs(M,{columns:{base:1,lg:2},gap:"16",p:"24",children:[a.jsxs(h,{alignItems:"stretch",gap:"8",children:[a.jsx(w,{level:"h3",children:"Printed: two pages"}),a.jsx(O,{h:"xl",children:a.jsx(q,{fit:b,"aria-label":"Printed pages",children:Y(m).map(t=>a.jsx(A,{size:g,margins:.25,children:a.jsx(H,{fixture:t,thermal:e})},t.name))})})]}),a.jsxs(h,{alignItems:"stretch",gap:"8",children:[a.jsx(w,{level:"h3",children:"On screen: the editor preview"}),a.jsx(V,{fixture:m,thermal:e,size:g,margins:.25,fit:b,h:"xl",label:"Screen preview"})]})]}),play:async({canvasElement:e})=>{const t=c(e),n=c(await t.findByLabelText("Printed pages")),s=e.querySelector('[data-fixture="between-lines-page-1"]'),r=e.querySelector('[data-fixture="between-lines-page-2"]');await i(s==null?void 0:s.textContent).toContain("PCB-ASSY-2041"),await i(s==null?void 0:s.textContent).not.toContain("CBL-0880"),await i(r==null?void 0:r.textContent).toContain("CBL-0880"),await i(n.queryByText("Page break")).toBeNull();const u=(await c(await t.findByLabelText("Screen preview")).findByText("Page break")).parentElement;await i(getComputedStyle(u).breakAfter).toBe("page"),await i(getComputedStyle(u).borderTopStyle).toBe("dashed"),await i(N(".cetec-printPageBreak__label")).toBe(!0)}},p={...o,args:{thermal:!0},play:async({canvasElement:e})=>{const n=await c(await c(e).findByLabelText("Screen preview")).findByText("Page break");await i(getComputedStyle(n).color).toBe("rgb(0, 0, 0)"),await i(getComputedStyle(n.parentElement).borderTopColor).toBe("rgb(0, 0, 0)")}},l={args:{fixture:x("printPageBreak","break"),h:"md"}},oe=["BetweenLines","Thermal","Markup"];var f,k,P,y,B;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: ({
    thermal
  }) => <Grid columns={{
    base: 1,
    lg: 2
  }} gap="16" p="24">
      <VStack alignItems="stretch" gap="8">
        <Heading level="h3">Printed: two pages</Heading>
        <Box h="xl">
          <PrintPreview fit={scale} aria-label="Printed pages">
            {printedPages(betweenLines).map(part => <PrintPage key={part.name} size={page} margins={0.25}>
                <PrintFixtureMarkup fixture={part} thermal={thermal} />
              </PrintPage>)}
          </PrintPreview>
        </Box>
      </VStack>
      <VStack alignItems="stretch" gap="8">
        <Heading level="h3">On screen: the editor preview</Heading>
        <PrintFixtureView fixture={betweenLines} thermal={thermal} size={page} margins={0.25} fit={scale} h="xl" label="Screen preview" />
      </VStack>
    </Grid>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const printed = within(await canvas.findByLabelText('Printed pages'));
    const first = canvasElement.querySelector('[data-fixture="between-lines-page-1"]');
    const second = canvasElement.querySelector('[data-fixture="between-lines-page-2"]');
    await expect(first?.textContent).toContain('PCB-ASSY-2041');
    await expect(first?.textContent).not.toContain('CBL-0880');
    await expect(second?.textContent).toContain('CBL-0880');
    await expect(printed.queryByText('Page break')).toBeNull();
    const screen = within(await canvas.findByLabelText('Screen preview'));
    const label = await screen.findByText('Page break');
    const root = label.parentElement as HTMLElement;
    await expect(getComputedStyle(root).breakAfter).toBe('page');
    await expect(getComputedStyle(root).borderTopStyle).toBe('dashed');
    // In print, the label and the line do not show.
    await expect(hiddenInPrint('.cetec-printPageBreak__label')).toBe(true);
  }
}`,...(P=(k=o.parameters)==null?void 0:k.docs)==null?void 0:P.source},description:{story:"Fixture `between-lines`: one order line per page. Printed, it is two pages.\nOn screen, it is one flow with the break marked.",...(B=(y=o.parameters)==null?void 0:y.docs)==null?void 0:B.description}}};var S,C,T,v,L;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  ...BetweenLines,
  args: {
    thermal: true
  },
  play: async ({
    canvasElement
  }) => {
    const screen = within(await within(canvasElement).findByLabelText('Screen preview'));
    const label = await screen.findByText('Page break');
    await expect(getComputedStyle(label).color).toBe('rgb(0, 0, 0)');
    await expect(getComputedStyle(label.parentElement as HTMLElement).borderTopColor).toBe('rgb(0, 0, 0)');
  }
}`,...(T=(C=p.parameters)==null?void 0:C.docs)==null?void 0:T.source},description:{story:"Fixture `between-lines` in thermal ink. The marker is black.",...(L=(v=p.parameters)==null?void 0:v.docs)==null?void 0:L.description}}};var E,j,_,F,I;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    fixture: printFixture('printPageBreak', 'break'),
    h: 'md'
  }
}`,...(_=(j=l.parameters)==null?void 0:j.docs)==null?void 0:_.source},description:{story:"Fixture `break`: the page break alone, with its input and markup.",...(I=(F=l.parameters)==null?void 0:F.docs)==null?void 0:I.description}}};export{o as BetweenLines,l as Markup,p as Thermal,oe as __namedExportsOrder,se as default};
