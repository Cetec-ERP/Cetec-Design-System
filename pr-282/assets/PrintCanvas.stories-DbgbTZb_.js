import{p as r}from"./printFixtures-0K543kF7.js";import{P as I,c as h,e as m,a as y,f as w}from"./PrintCanvasFixture-2dIY57RI.js";import"./iframe-B861AzWe.js";import"./preload-helper-B6kYaje4.js";import"./CodeBlock-D8CLKwX7.js";import"./IconButton-BltImcZV.js";import"./Spinner-CjdL_ata.js";import"./FieldContext-CrxIKTA8.js";import"./useLocale-BADWnSrj.js";import"./dsPart-nnoJM9m6.js";import"./useControllableState-BZ-X75e6.js";import"./PrintPreview-kzsG7U3N.js";import"./usePrintPage-BzuNGdMS.js";import"./PrintFixture-B_rGiLtf.js";const{expect:t,waitFor:z}=__STORYBOOK_MODULE_TEST__,at={title:"Print/Canvas",component:I,parameters:{layout:"fullscreen",docs:{description:{component:"Canvas layouts for checks and labels: the `printCanvas` and `printSlot`\nrecipes. They have no React component. The author places slots on a\n1/64 in grid, and Go writes the canvas with the same classes.\n\n- The canvas is the stock. Go sets its size in inches as inline values.\n- Each slot is placed in the canvas by inline `left`, `top`, `width`, and\n  `height` values. The class carries the look, not the position. A slot\n  clips its content and never grows.\n- `rotate: 90` turns a whole layout, or the content of one slot.\n- Ink comes from the document root, as on every kit document.\n\nThe dashed boxes, name tags, perforations, and striped MICR band are the\nslot editor's overlay. They are not printed. The overlay goes in the\n`overlay` of each `PrintPage` and reads the page size from `usePrintPage`,\nso the app's editor can draw the same boxes over these slots. Turn it off\nwith the `showSlots` control to see the printed page.\n\nSlot content is plain text here. The kit elements in each slot, such as\n`LabelField` and `Barcode`, have their own fixtures and stories."}}},tags:["autodocs"],args:{recipe:"printCanvas",fixture:r("printCanvas","check"),showSlots:!0},argTypes:{fixture:{control:!1},recipe:{control:!1}}},c={play:async({canvasElement:e})=>{const n=h(r("printCanvas","check"));await m(n),await y(e,n),await t(await w(e)).toEqual([]);const a=n.micrBand;if(await t(a).toBeDefined(),!a)return;const s=n.slots.filter(i=>i.y<a.top+a.height&&i.y+i.height>a.top);await t(s.map(i=>i.name)).toEqual(["micr"]);const o=e.querySelector('[data-slot="micr"] .cetec-printSlot__content');await t(o).not.toBeNull();const l=getComputedStyle(o);await t(l.color).toBe("rgb(0, 0, 0)"),await t(l.whiteSpace).toBe("nowrap")}},p={args:{fixture:r("printCanvas","packing-label")},play:async({canvasElement:e})=>{const n=h(r("printCanvas","packing-label"));await m(n),await y(e,n),await t(await w(e)).toEqual([]);const a=e.querySelector('[data-slot="part"]');await t(a).not.toBeNull();const s=getComputedStyle(a);await t(s.borderTopColor).toBe("rgb(0, 0, 0)"),await t(s.getPropertyValue("--cetec-border-widths-paper-rule").trim()).toBe("1.5pt"),await t(getComputedStyle(a).color).toBe("rgb(0, 0, 0)")}},d={args:{fixture:r("printCanvas","turned-label")},play:async({canvasElement:e})=>{const n=h(r("printCanvas","turned-label"));await m(n),await y(e,n),await t(await w(e)).toEqual([]);const a=e.querySelector('[data-slot="part"]'),s=e.querySelector('[data-canvas-page="1"]');await t(a).not.toBeNull();const o=a.getBoundingClientRect(),l=s.getBoundingClientRect();await t(Math.abs(o.right-l.right)).toBeLessThan(1),await t(o.height).toBeGreaterThan(o.width)}},u={args:{fixture:r("printCanvas","serial-labels"),h:"xl"},play:async({canvasElement:e})=>{var g,x;const n=h(r("printCanvas","serial-labels"));await m(n),await y(e,n),await t(await w(e)).toEqual([]);const a=await z(()=>{const b=e.querySelectorAll("[data-canvas-page]");if(b.length!==2)throw new Error("Expected two pages.");return[...b]});await t((g=a[0])==null?void 0:g.textContent).toContain("SN-26450118"),await t((x=a[1])==null?void 0:x.textContent).toContain("SN-26450119");const s=r("printCanvas","serial-labels"),o=document.createElement("div");o.className="cetec-printDoc",o.innerHTML=s.html,document.body.append(o);const[l,i]=[...o.children];try{await t(getComputedStyle(l).breakAfter).toBe("page"),await t(getComputedStyle(i).breakAfter).toBe("auto")}finally{o.remove()}}},nt=["Check","PackingLabel","TurnedLabel","SerialLabels"];var v,f,S,C,B;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const layout = canvasLayout(printFixture('printCanvas', 'check'));
    await expectSlotsOnGrid(layout);
    await expectSlotsMatchOverlay(canvasElement, layout);
    await expect(await flaggedSlots(canvasElement)).toEqual([]);
    const band = layout.micrBand;
    await expect(band).toBeDefined();
    if (!band) return;
    // Only the MICR slot touches the clear band.
    const inBand = layout.slots.filter(slot => slot.y < band.top + band.height && slot.y + slot.height > band.top);
    await expect(inBand.map(slot => slot.name)).toEqual(['micr']);
    const micr = canvasElement.querySelector('[data-slot="micr"] .cetec-printSlot__content');
    await expect(micr).not.toBeNull();
    const style = getComputedStyle(micr as Element);
    await expect(style.color).toBe('rgb(0, 0, 0)');
    await expect(style.whiteSpace).toBe('nowrap');
  }
}`,...(S=(f=c.parameters)==null?void 0:f.docs)==null?void 0:S.source},description:{story:`Fixture \`check\`: today's default check on one Letter sheet. A window stub
on top, the check face in the middle, and the remittance below.
Perforations are at 3.5 in and 7 in. Only the locked MICR slot prints in
the clear band, the bottom 5/8 in of the face.`,...(B=(C=c.parameters)==null?void 0:C.docs)==null?void 0:B.description}}};var k,E,T,q,L;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    fixture: printFixture('printCanvas', 'packing-label')
  },
  play: async ({
    canvasElement
  }) => {
    const layout = canvasLayout(printFixture('printCanvas', 'packing-label'));
    await expectSlotsOnGrid(layout);
    await expectSlotsMatchOverlay(canvasElement, layout);
    await expect(await flaggedSlots(canvasElement)).toEqual([]);
    const part = canvasElement.querySelector('[data-slot="part"]');
    await expect(part).not.toBeNull();
    const style = getComputedStyle(part as Element);
    await expect(style.borderTopColor).toBe('rgb(0, 0, 0)');
    // Chromium rounds drawn widths, so read the token value.
    await expect(style.getPropertyValue('--cetec-border-widths-paper-rule').trim()).toBe('1.5pt');
    await expect(getComputedStyle(part as Element).color).toBe('rgb(0, 0, 0)');
  }
}`,...(T=(E=p.parameters)==null?void 0:E.docs)==null?void 0:T.source},description:{story:"Fixture `packing-label`: the order line packing label on 4 × 6 in stock,\nin thermal ink. Slots with a top rule split it into sections. Every ink is\nsolid black, and rules are 1.5 pt.",...(L=(q=p.parameters)==null?void 0:q.docs)==null?void 0:L.description}}};var F,O,M,N,P;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    fixture: printFixture('printCanvas', 'turned-label')
  },
  play: async ({
    canvasElement
  }) => {
    const layout = canvasLayout(printFixture('printCanvas', 'turned-label'));
    await expectSlotsOnGrid(layout);
    await expectSlotsMatchOverlay(canvasElement, layout);
    await expect(await flaggedSlots(canvasElement)).toEqual([]);
    // The layout's top slot lands along the right edge of the stock.
    const part = canvasElement.querySelector('[data-slot="part"]');
    const sheet = canvasElement.querySelector('[data-canvas-page="1"]');
    await expect(part).not.toBeNull();
    const partBox = (part as Element).getBoundingClientRect();
    const sheetBox = (sheet as Element).getBoundingClientRect();
    await expect(Math.abs(partBox.right - sheetBox.right)).toBeLessThan(1);
    await expect(partBox.height).toBeGreaterThan(partBox.width);
  }
}`,...(M=(O=d.parameters)==null?void 0:O.docs)==null?void 0:M.source},description:{story:"Fixture `turned-label`: a carton label turned 90°. The stock is 4 × 6 in\nas the printer feeds it, so the layout is 6 × 4 in, turned a quarter turn\nclockwise. The `lot` slot is also turned 90° inside the layout. The\noverlay maps layout positions to the stock the same way.",...(P=(N=d.parameters)==null?void 0:N.docs)==null?void 0:P.description}}};var _,G,D,R,A;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    fixture: printFixture('printCanvas', 'serial-labels'),
    h: 'xl'
  },
  play: async ({
    canvasElement
  }) => {
    const layout = canvasLayout(printFixture('printCanvas', 'serial-labels'));
    await expectSlotsOnGrid(layout);
    await expectSlotsMatchOverlay(canvasElement, layout);
    await expect(await flaggedSlots(canvasElement)).toEqual([]);
    const pages = await waitFor(() => {
      const found = canvasElement.querySelectorAll('[data-canvas-page]');
      if (found.length !== 2) throw new Error('Expected two pages.');
      return [...found];
    });
    await expect(pages[0]?.textContent).toContain('SN-26450118');
    await expect(pages[1]?.textContent).toContain('SN-26450119');
    // In print, every canvas but the last breaks the page after it.
    const fixture = printFixture('printCanvas', 'serial-labels');
    const probe = document.createElement('div');
    probe.className = 'cetec-printDoc';
    probe.innerHTML = fixture.html;
    document.body.append(probe);
    const [first, second] = [...probe.children];
    try {
      await expect(getComputedStyle(first as Element).breakAfter).toBe('page');
      await expect(getComputedStyle(second as Element).breakAfter).toBe('auto');
    } finally {
      probe.remove();
    }
  }
}`,...(D=(G=u.parameters)==null?void 0:G.docs)==null?void 0:D.source},description:{story:"Fixture `serial-labels`: one layout that repeats over `serials`, on 3 × 1\nin stock in thermal ink. Go builds the loop and writes one canvas per\nitem, and each canvas starts a new page. Two serials print two labels.",...(A=(R=u.parameters)==null?void 0:R.docs)==null?void 0:A.description}}};export{c as Check,p as PackingLabel,u as SerialLabels,d as TurnedLabel,nt as __namedExportsOrder,at as default};
