import{p as i}from"./printFixtures-0K543kF7.js";import{P as I,c as d,e as g,a as m,f}from"./PrintCanvasFixture-2dIY57RI.js";import"./iframe-B861AzWe.js";import"./preload-helper-B6kYaje4.js";import"./CodeBlock-D8CLKwX7.js";import"./IconButton-BltImcZV.js";import"./Spinner-CjdL_ata.js";import"./FieldContext-CrxIKTA8.js";import"./useLocale-BADWnSrj.js";import"./dsPart-nnoJM9m6.js";import"./useControllableState-BZ-X75e6.js";import"./PrintPreview-kzsG7U3N.js";import"./usePrintPage-BzuNGdMS.js";import"./PrintFixture-B_rGiLtf.js";const{expect:t}=__STORYBOOK_MODULE_TEST__,ia={title:"Print/Label field",component:I,parameters:{layout:"fullscreen",docs:{description:{component:"A captioned value in a canvas slot: the kit element `label_field` and the\n`printLabelField` recipe. It has no React component. It works only inside a\nslot, so each story shows label fields on a check face or a label.\n\n- `caption`: the caps label over the value. Optional.\n- `type`: `text` (default), `code`, `currency`, `date`, or `amount_words`.\n  Go formats the value. `text` prints in the body face, for names. `code`\n  prints in the mono face, for part numbers, POs, and serials. `currency`\n  and `date` print in the mono face with tabular figures. Go maps the kit\n  type `money` to `currency`. Words print in the body face and wrap.\n- `size`: `normal` (default, medium weight) or `large` (bold).\n\nA value too long for its slot is cut at the slot edge in print. The slot\neditor's overlay flags that slot in red."}}},tags:["autodocs"],args:{recipe:"printLabelField",fixture:i("printLabelField","check-face"),showSlots:!0,h:"xl"},argTypes:{fixture:{control:!1},recipe:{control:!1}}},n=(a,e,o)=>{const r=a.querySelector(`[data-slot="${e}"] .cetec-printLabelField__${o}`);if(!r)throw new Error(`Slot "${e}" has no ${o}.`);return getComputedStyle(r)},R="14.6667px",y="22.6667px",l={play:async({canvasElement:a})=>{const e=d(i("printLabelField","check-face"));await g(e),await m(a,e);const o=n(a,"payee","caption");await t(o.textTransform).toBe("uppercase"),await t(o.color).toBe("rgb(41, 42, 46)"),await t(n(a,"payee","value").fontSize).toBe(R);const r=n(a,"amount","value");await t(r.fontSize).toBe(y),await t(r.fontVariantNumeric).toBe("tabular-nums"),await t(r.fontVariationSettings).toContain('"MONO" 1');const w=n(a,"words","value");await t(w.fontVariationSettings).toContain('"MONO" 0'),await t(w.whiteSpace).toBe("normal"),await t(await f(a)).toEqual([])}},c={args:{fixture:i("printLabelField","check-face-thermal")},play:async({canvasElement:a})=>{const e=d(i("printLabelField","check-face-thermal"));await m(a,e),await t(await f(a)).toEqual([]),await t(n(a,"payee","caption").color).toBe("rgb(0, 0, 0)"),await t(n(a,"payee","value").color).toBe("rgb(0, 0, 0)")}},s={args:{fixture:i("printLabelField","packing-label"),h:"3xl"},play:async({canvasElement:a})=>{const e=d(i("printLabelField","packing-label"));await g(e),await m(a,e);const o=n(a,"part","value");await t(o.fontSize).toBe(y),await t(o.color).toBe("rgb(0, 0, 0)"),await t(await f(a)).toEqual([])}},p={args:{fixture:i("printLabelField","packing-label-paper"),h:"3xl"},play:async({canvasElement:a})=>{const e=d(i("printLabelField","packing-label-paper"));await m(a,e),await t(await f(a)).toEqual([]),await t(n(a,"part","value").color).toBe("rgb(41, 42, 46)")}},u={args:{fixture:i("printLabelField","variants")},play:async({canvasElement:a})=>{const e=d(i("printLabelField","variants"));await g(e),await m(a,e),await t(a.querySelector('[data-slot="no_caption"] .cetec-printLabelField__caption')).toBeNull(),await t(n(a,"date","value").fontVariantNumeric).toBe("tabular-nums");const o=n(a,"text","value");await t(o.fontVariationSettings).toContain('"MONO" 0'),await t(o.fontWeight).toBe("500");for(const w of["code","currency","date"])await t(n(a,w,"value").fontVariationSettings).toContain('"MONO" 1');await t(n(a,"currency","value").fontVariantNumeric).toBe("tabular-nums");const r=n(a,"code_large","value");await t(r.fontSize).toBe(y),await t(r.fontWeight).toBe("700"),await t(await f(a)).toEqual(["too_long","words_long"])}},ra=["CheckFace","CheckFaceThermal","PackingLabel","PackingLabelPaper","Variants"];var h,x,b,v,S;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const layout = canvasLayout(printFixture('printLabelField', 'check-face'));
    await expectSlotsOnGrid(layout);
    await expectSlotsMatchOverlay(canvasElement, layout);
    const caption = field(canvasElement, 'payee', 'caption');
    await expect(caption.textTransform).toBe('uppercase');
    await expect(caption.color).toBe('rgb(41, 42, 46)');
    await expect(field(canvasElement, 'payee', 'value').fontSize).toBe(normalSize);
    const amount = field(canvasElement, 'amount', 'value');
    await expect(amount.fontSize).toBe(largeSize);
    await expect(amount.fontVariantNumeric).toBe('tabular-nums');
    await expect(amount.fontVariationSettings).toContain('"MONO" 1');
    const words = field(canvasElement, 'words', 'value');
    await expect(words.fontVariationSettings).toContain('"MONO" 0');
    await expect(words.whiteSpace).toBe('normal');
    // Every value fits its slot.
    await expect(await flaggedSlots(canvasElement)).toEqual([]);
  }
}`,...(b=(x=l.parameters)==null?void 0:x.docs)==null?void 0:b.source},description:{story:"Fixture `check-face`: the label fields on a check face in normal ink.\nThe check number and the amount are large. The amount in words wraps in\nthe body face.",...(S=(v=l.parameters)==null?void 0:v.docs)==null?void 0:S.description}}};var F,k,L,B,O;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    fixture: printFixture('printLabelField', 'check-face-thermal')
  },
  play: async ({
    canvasElement
  }) => {
    const layout = canvasLayout(printFixture('printLabelField', 'check-face-thermal'));
    await expectSlotsMatchOverlay(canvasElement, layout);
    await expect(await flaggedSlots(canvasElement)).toEqual([]);
    await expect(field(canvasElement, 'payee', 'caption').color).toBe('rgb(0, 0, 0)');
    await expect(field(canvasElement, 'payee', 'value').color).toBe('rgb(0, 0, 0)');
  }
}`,...(L=(k=c.parameters)==null?void 0:k.docs)==null?void 0:L.source},description:{story:"Fixture `check-face-thermal`: the same fields in thermal ink.",...(O=(B=c.parameters)==null?void 0:B.docs)==null?void 0:O.description}}};var E,_,z,N,V;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    fixture: printFixture('printLabelField', 'packing-label'),
    h: '3xl'
  },
  play: async ({
    canvasElement
  }) => {
    const layout = canvasLayout(printFixture('printLabelField', 'packing-label'));
    await expectSlotsOnGrid(layout);
    await expectSlotsMatchOverlay(canvasElement, layout);
    const part = field(canvasElement, 'part', 'value');
    await expect(part.fontSize).toBe(largeSize);
    await expect(part.color).toBe('rgb(0, 0, 0)');
    await expect(await flaggedSlots(canvasElement)).toEqual([]);
  }
}`,...(z=(_=s.parameters)==null?void 0:_.docs)==null?void 0:z.source},description:{story:"Fixture `packing-label`: the label fields on the 4 × 6 in packing label in\nthermal ink. The part number and the ship quantity are large.",...(V=(N=s.parameters)==null?void 0:N.docs)==null?void 0:V.description}}};var M,q,C,T,P;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    fixture: printFixture('printLabelField', 'packing-label-paper'),
    h: '3xl'
  },
  play: async ({
    canvasElement
  }) => {
    const layout = canvasLayout(printFixture('printLabelField', 'packing-label-paper'));
    await expectSlotsMatchOverlay(canvasElement, layout);
    await expect(await flaggedSlots(canvasElement)).toEqual([]);
    await expect(field(canvasElement, 'part', 'value').color).toBe('rgb(41, 42, 46)');
  }
}`,...(C=(q=p.parameters)==null?void 0:q.docs)==null?void 0:C.source},description:{story:"Fixture `packing-label-paper`: the same fields in normal ink.",...(P=(T=p.parameters)==null?void 0:T.docs)==null?void 0:P.description}}};var G,W,$,A,D;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    fixture: printFixture('printLabelField', 'variants')
  },
  play: async ({
    canvasElement
  }) => {
    const layout = canvasLayout(printFixture('printLabelField', 'variants'));
    await expectSlotsOnGrid(layout);
    await expectSlotsMatchOverlay(canvasElement, layout);
    await expect(canvasElement.querySelector('[data-slot="no_caption"] .cetec-printLabelField__caption')).toBeNull();
    await expect(field(canvasElement, 'date', 'value').fontVariantNumeric).toBe('tabular-nums');
    const text = field(canvasElement, 'text', 'value');
    await expect(text.fontVariationSettings).toContain('"MONO" 0');
    await expect(text.fontWeight).toBe('500');
    for (const slot of ['code', 'currency', 'date']) {
      await expect(field(canvasElement, slot, 'value').fontVariationSettings).toContain('"MONO" 1');
    }
    await expect(field(canvasElement, 'currency', 'value').fontVariantNumeric).toBe('tabular-nums');
    const large = field(canvasElement, 'code_large', 'value');
    await expect(large.fontSize).toBe(largeSize);
    await expect(large.fontWeight).toBe('700');
    await expect(await flaggedSlots(canvasElement)).toEqual(['too_long', 'words_long']);
  }
}`,...($=(W=u.parameters)==null?void 0:W.docs)==null?void 0:$.source},description:{story:"Fixture `variants`: each type and size, a field with no caption, and two\nvalues too long for their slots. `text` is in the body face. `code`,\n`currency`, and `date` are in the mono face. The slots keep their size and\ncut the values, and the editor flags both slots.",...(D=(A=u.parameters)==null?void 0:A.docs)==null?void 0:D.description}}};export{l as CheckFace,c as CheckFaceThermal,s as PackingLabel,p as PackingLabelPaper,u as Variants,ra as __namedExportsOrder,ia as default};
