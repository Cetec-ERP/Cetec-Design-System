import{j as e,t as C,V as w,G as M,B as u}from"./iframe-B861AzWe.js";import{p as f}from"./printFixtures-0K543kF7.js";import{P as U,b as k}from"./PrintFixture-B_rGiLtf.js";import{C as m}from"./Code-B9nBLEUP.js";import{H as y}from"./Heading-CCLyJcDk.js";import{T as Y}from"./Tag-CBNAAQMV.js";import"./preload-helper-B6kYaje4.js";import"./CodeBlock-D8CLKwX7.js";import"./IconButton-BltImcZV.js";import"./Spinner-CjdL_ata.js";import"./FieldContext-CrxIKTA8.js";import"./useLocale-BADWnSrj.js";import"./dsPart-nnoJM9m6.js";import"./useControllableState-BZ-X75e6.js";import"./PrintPreview-kzsG7U3N.js";import"./usePrintPage-BzuNGdMS.js";const{expect:a,within:l}=__STORYBOOK_MODULE_TEST__,b=[{tone:"neutral",hue:"slate",text:"Draft"},{tone:"info",hue:"blue",text:"Revised"},{tone:"success",hue:"green",text:"Approved"},{tone:"warning",hue:"orange",text:"On hold"},{tone:"danger",hue:"red",text:"Expedite"}],N=b.map(({tone:t})=>f("tag",`tone-${t}`)),S={name:"tones",description:"Every tone fixture, in order.",input:{},html:N.map(t=>t.html).join(" ")},j={width:4,height:.5,unit:"in"},p=({children:t})=>e.jsx(u,{as:"td",px:"8",py:"6",verticalAlign:"middle",borderBottomWidth:"1",borderBottomStyle:"solid",borderColor:"border",children:t}),d=({children:t})=>e.jsx(u,{as:"th",textAlign:"left",fontWeight:"bold",px:"8",py:"6",borderBottomWidth:"2",borderBottomStyle:"solid",borderColor:"border",children:t}),J=()=>e.jsxs(u,{as:"table",w:"full",borderCollapse:"collapse",textStyle:"body.sm",children:[e.jsx(u,{as:"caption",textAlign:"left",pb:"8",children:e.jsx(y,{level:"h3",children:"Kit tones"})}),e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx(d,{children:"Kit tone"}),e.jsx(d,{children:"Hue"}),e.jsx(d,{children:"Variant"}),e.jsx(d,{children:"On screen"}),e.jsx(d,{children:"Fixture"})]})}),e.jsx("tbody",{children:b.map(({tone:t,hue:r,text:n})=>e.jsxs("tr",{children:[e.jsx(p,{children:e.jsx(m,{children:t})}),e.jsx(p,{children:e.jsx(m,{children:r})}),e.jsx(p,{children:e.jsx(m,{children:"default"})}),e.jsx(p,{children:e.jsx(Y,{hue:r,"data-tone":t,children:n})}),e.jsx(p,{children:e.jsxs(m,{children:["tag/tone-",t]})})]},t))})]}),v=t=>{const[r,n,o]=[1,3,5].map(i=>parseInt(t.slice(i,i+2),16));return`rgb(${r}, ${n}, ${o})`},ge={title:"Print/Tag",component:U,parameters:{layout:"fullscreen",docs:{description:{component:"The print look of `Tag`. On paper, a tag is an outline in its own ink with\nno fill, so it survives a browser print with backgrounds off. Thermal label\nprinters print black only, so in thermal ink the text and the outline are\nblack and the words carry the tone.\n\nThe kit's `tag` element has a `tone`. The Go print helper maps it to a hue\nand the default variant, as the `Tones` story shows. Each story renders\nfixtures from `src/recipes/tag.fixtures.json`, exactly as stored.\n\nSwitch the app theme to dark. The screen tags change. The paper does not."}}},tags:["autodocs"],args:{recipe:"tag",fixture:f("tag","table-cell")},argTypes:{fixture:{control:!1},size:{control:!1},footer:{control:!1}}},h={render:()=>e.jsxs(w,{alignItems:"stretch",gap:"24",p:"24",children:[e.jsx(J,{}),e.jsxs(M,{columns:{base:1,lg:2},gap:"16",children:[e.jsxs(w,{alignItems:"stretch",gap:"8",children:[e.jsx(y,{level:"h3",children:"On paper"}),e.jsx(k,{fixture:S,size:j,margins:.125,h:"2xs",label:"Tones on paper"})]}),e.jsxs(w,{alignItems:"stretch",gap:"8",children:[e.jsx(y,{level:"h3",children:"Thermal ink"}),e.jsx(k,{fixture:S,thermal:!0,size:j,margins:.125,h:"2xs",label:"Tones in thermal ink"})]})]})]}),play:async({canvasElement:t})=>{const r=l(t);for(const[T,{tone:x,hue:R,text:W}]of b.entries()){const s=N[T];await a(s==null?void 0:s.input).toEqual({tone:x,text:W}),await a(s==null?void 0:s.html).toContain(`cetec-tag--hue_${R}`),await a(s==null?void 0:s.html).toContain("cetec-tag--variant_default")}const n=t.querySelector('[data-tone="danger"]');await a(n).not.toBeNull(),await a(getComputedStyle(n).backgroundColor).toBe(v(C("colors.red.10")));const o=l(await r.findByLabelText("Tones on paper")),i=getComputedStyle(await o.findByText("Expedite"));await a(i.backgroundColor).toBe("rgba(0, 0, 0, 0)"),await a(i.color).toBe(v(C("colors.red.70"))),await a(i.borderTopStyle).toBe("solid"),await a(i.borderTopColor).toBe(i.color),await a(i.getPropertyValue("--cetec-border-widths-paper-hairline").trim()).toBe("0.5pt"),await a(i.fontSize).toBe("10px");const B=l(await r.findByLabelText("Tones in thermal ink"));for(const{text:T}of b){const x=getComputedStyle(await B.findByText(T));await a(x.color).toBe("rgb(0, 0, 0)"),await a(x.borderTopColor).toBe("rgb(0, 0, 0)")}const K=getComputedStyle(await B.findByText("Expedite"));await a(K.getPropertyValue("--cetec-border-widths-paper-hairline").trim()).toBe("1.5pt")}},c={args:{fixture:f("tag","table-cell"),size:{width:4,height:1.25,unit:"in"},margins:.125,h:"xs"},play:async({canvasElement:t})=>{const n=await l(await l(t).findByLabelText("table-cell")).findByText("Due");await a(n.className).toContain("cetec-tag--size_sm");const o=getComputedStyle(n);await a(parseFloat(o.fontSize)).toBeCloseTo(9.333,2),await a(o.backgroundColor).toBe("rgba(0, 0, 0, 0)"),await a(o.borderTopStyle).toBe("solid")}},g={args:{...c.args,thermal:!0},play:async({canvasElement:t})=>{const r=l(await l(t).findByLabelText("table-cell"));for(const n of["Due","Partially paid","Paid"]){const o=getComputedStyle(await r.findByText(n));await a(o.color).toBe("rgb(0, 0, 0)"),await a(o.borderTopColor).toBe("rgb(0, 0, 0)")}}},xe=["Tones","TableCell","TableCellThermal"];var E,V,z,P,_;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <VStack alignItems="stretch" gap="24" p="24">
      <ToneTable />
      <Grid columns={{
      base: 1,
      lg: 2
    }} gap="16">
        <VStack alignItems="stretch" gap="8">
          <Heading level="h3">On paper</Heading>
          <PrintFixtureView fixture={allTones} size={strip} margins={0.125} h="2xs" label="Tones on paper" />
        </VStack>
        <VStack alignItems="stretch" gap="8">
          <Heading level="h3">Thermal ink</Heading>
          <PrintFixtureView fixture={allTones} thermal size={strip} margins={0.125} h="2xs" label="Tones in thermal ink" />
        </VStack>
      </Grid>
    </VStack>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // The fixtures and the tone table agree.
    for (const [i, {
      tone,
      hue,
      text
    }] of kitTones.entries()) {
      const fixture = toneFixtures[i];
      await expect(fixture?.input).toEqual({
        tone,
        text
      });
      await expect(fixture?.html).toContain(\`cetec-tag--hue_\${hue}\`);
      await expect(fixture?.html).toContain('cetec-tag--variant_default');
    }

    // On screen, a tag has a fill.
    const screenTag = canvasElement.querySelector('[data-tone="danger"]');
    await expect(screenTag).not.toBeNull();
    await expect(getComputedStyle(screenTag as Element).backgroundColor).toBe(rgb(token('colors.red.10')));

    // On paper, an outline in the hue's text color, with no fill.
    const paper = within(await canvas.findByLabelText('Tones on paper'));
    const paperTag = getComputedStyle(await paper.findByText('Expedite'));
    await expect(paperTag.backgroundColor).toBe('rgba(0, 0, 0, 0)');
    await expect(paperTag.color).toBe(rgb(token('colors.red.70')));
    await expect(paperTag.borderTopStyle).toBe('solid');
    await expect(paperTag.borderTopColor).toBe(paperTag.color);
    await expect(paperTag.getPropertyValue('--cetec-border-widths-paper-hairline').trim()).toBe('0.5pt');
    // print.smallPrint is 7.5 pt, which is 10 px at 96 px per inch.
    await expect(paperTag.fontSize).toBe('10px');

    // In thermal ink, black text and a black 1.5 pt outline.
    const thermal = within(await canvas.findByLabelText('Tones in thermal ink'));
    for (const {
      text
    } of kitTones) {
      const style = getComputedStyle(await thermal.findByText(text));
      await expect(style.color).toBe('rgb(0, 0, 0)');
      await expect(style.borderTopColor).toBe('rgb(0, 0, 0)');
    }
    const thermalTag = getComputedStyle(await thermal.findByText('Expedite'));
    await expect(thermalTag.getPropertyValue('--cetec-border-widths-paper-hairline').trim()).toBe('1.5pt');
  }
}`,...(z=(V=h.parameters)==null?void 0:V.docs)==null?void 0:z.source},description:{story:"Each kit tone on screen, on paper, and in thermal ink. The paper strips\nrender the five `tone-*` fixtures in order.",...(_=(P=h.parameters)==null?void 0:P.docs)==null?void 0:_.description}}};var F,O,L,H,I;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    fixture: printFixture('tag', 'table-cell'),
    size: {
      width: 4,
      height: 1.25,
      unit: 'in'
    },
    margins: 0.125,
    h: 'xs'
  },
  play: async ({
    canvasElement
  }) => {
    const page = within(await within(canvasElement).findByLabelText('table-cell'));
    const due = await page.findByText('Due');
    await expect(due.className).toContain('cetec-tag--size_sm');
    const style = getComputedStyle(due);
    // print.capsLabel is 7 pt, which is 9.33 px at 96 px per inch.
    await expect(parseFloat(style.fontSize)).toBeCloseTo(9.333, 2);
    await expect(style.backgroundColor).toBe('rgba(0, 0, 0, 0)');
    await expect(style.borderTopStyle).toBe('solid');
  }
}`,...(L=(O=c.parameters)==null?void 0:O.docs)==null?void 0:L.source},description:{story:"Fixture `table-cell`: tags in table cells use the `sm` size. On paper,\n`sm` prints at the 7 pt caps label size with less padding.",...(I=(H=c.parameters)==null?void 0:H.docs)==null?void 0:I.description}}};var D,$,G,q,A;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...TableCell.args,
    thermal: true
  },
  play: async ({
    canvasElement
  }) => {
    const page = within(await within(canvasElement).findByLabelText('table-cell'));
    for (const text of ['Due', 'Partially paid', 'Paid']) {
      const style = getComputedStyle(await page.findByText(text));
      await expect(style.color).toBe('rgb(0, 0, 0)');
      await expect(style.borderTopColor).toBe('rgb(0, 0, 0)');
    }
  }
}`,...(G=($=g.parameters)==null?void 0:$.docs)==null?void 0:G.source},description:{story:"Fixture `table-cell` in thermal ink. Every tag is black.",...(A=(q=g.parameters)==null?void 0:q.docs)==null?void 0:A.description}}};export{c as TableCell,g as TableCellThermal,h as Tones,xe as __namedExportsOrder,ge as default};
