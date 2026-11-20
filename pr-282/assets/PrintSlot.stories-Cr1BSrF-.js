import{p as n}from"./printFixtures-0K543kF7.js";import{P as M,c as p,e as _,a as d,f as q}from"./PrintCanvasFixture-2dIY57RI.js";import"./iframe-B861AzWe.js";import"./preload-helper-B6kYaje4.js";import"./CodeBlock-D8CLKwX7.js";import"./IconButton-BltImcZV.js";import"./Spinner-CjdL_ata.js";import"./FieldContext-CrxIKTA8.js";import"./useLocale-BADWnSrj.js";import"./dsPart-nnoJM9m6.js";import"./useControllableState-BZ-X75e6.js";import"./PrintPreview-kzsG7U3N.js";import"./usePrintPage-BzuNGdMS.js";import"./PrintFixture-B_rGiLtf.js";const{expect:e}=__STORYBOOK_MODULE_TEST__,j={title:"Print/Slot",component:M,parameters:{layout:"fullscreen",docs:{description:{component:`A slot on a canvas layout: the \`printSlot\` recipe. It has no React
component. Go writes each slot with its position and size in inches as
inline values, and \`data-slot\` with the slot name.

- \`rotate: 90\` turns the content a quarter turn clockwise. The slot box
  stays where it is placed.
- \`rule: true\` draws a rule along the top edge, 1 pt on paper and 1.5 pt in
  thermal ink.
- \`micr: true\` is Cetec's locked MICR slot on a check face.
- A slot never grows. Content that does not fit is clipped.

See "Print/Canvas" for whole checks and labels.`}}},tags:["autodocs"],args:{recipe:"printSlot",fixture:n("printSlot","variants"),showSlots:!0,h:"xl"},argTypes:{fixture:{control:!1},recipe:{control:!1}}},c=(t,o)=>{const r=t.querySelector(`[data-slot="${o}"] .cetec-printSlot__content`);if(!r)throw new Error(`Slot "${o}" has no content.`);return r},s={play:async({canvasElement:t})=>{const o=p(n("printSlot","variants"));await _(o),await d(t,o),await e(await q(t)).toEqual(["clipped"]);const r=c(t,"plain").querySelector("p");await e(getComputedStyle(r).marginBottom).toBe("0px");const a=c(t,"clipped");await e(a.scrollHeight).toBeGreaterThan(a.clientHeight),await e(getComputedStyle(a).overflow).toBe("hidden");const O=c(t,"turned");await e(getComputedStyle(O).transform).toBe("matrix(0, 1, -1, 0, 0, 0)");const F=t.querySelector('[data-slot="ruled"]'),u=getComputedStyle(F);await e(u.getPropertyValue("--cetec-border-widths-paper-rule").trim()).toBe("1pt"),await e(u.borderTopColor).toBe("rgb(41, 42, 46)")}},i={args:{fixture:n("printSlot","variants-thermal")},play:async({canvasElement:t})=>{const o=p(n("printSlot","variants-thermal"));await d(t,o);const r=t.querySelector('[data-slot="ruled"]'),a=getComputedStyle(r);await e(a.getPropertyValue("--cetec-border-widths-paper-rule").trim()).toBe("1.5pt"),await e(a.borderTopColor).toBe("rgb(0, 0, 0)"),await e(getComputedStyle(c(t,"plain")).color).toBe("rgb(0, 0, 0)")}},l={args:{fixture:n("printSlot","micr"),h:"md"},play:async({canvasElement:t})=>{const o=p(n("printSlot","micr"));await d(t,o),await e(await q(t)).toEqual([]);const r=c(t,"micr"),a=getComputedStyle(r);await e(a.color).toBe("rgb(0, 0, 0)"),await e(a.whiteSpace).toBe("nowrap"),await e(a.alignItems).toBe("flex-end"),await e(a.paddingRight).toBe("0px")}},J=["Variants","VariantsThermal","Micr"];var m,h,y,w,g;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const layout = canvasLayout(printFixture('printSlot', 'variants'));
    await expectSlotsOnGrid(layout);
    await expectSlotsMatchOverlay(canvasElement, layout);
    await expect(await flaggedSlots(canvasElement)).toEqual(['clipped']);
    // Slot text keeps the print reset: no paragraph margins.
    const paragraph = slotContent(canvasElement, 'plain').querySelector('p');
    await expect(getComputedStyle(paragraph as Element).marginBottom).toBe('0px');
    // The clipped slot holds more than it shows.
    const clipped = slotContent(canvasElement, 'clipped');
    await expect(clipped.scrollHeight).toBeGreaterThan(clipped.clientHeight);
    await expect(getComputedStyle(clipped).overflow).toBe('hidden');
    // The turned slot's content is turned a quarter turn.
    const turned = slotContent(canvasElement, 'turned');
    await expect(getComputedStyle(turned).transform).toBe('matrix(0, 1, -1, 0, 0, 0)');
    // Paper ink: the rule is 1 pt in the ink color.
    const ruled = canvasElement.querySelector('[data-slot="ruled"]');
    const style = getComputedStyle(ruled as Element);
    await expect(style.getPropertyValue('--cetec-border-widths-paper-rule').trim()).toBe('1pt');
    await expect(style.borderTopColor).toBe('rgb(41, 42, 46)');
  }
}`,...(y=(h=s.parameters)==null?void 0:h.docs)==null?void 0:y.source},description:{story:"Fixture `variants`: each slot variant on a 4 × 2 in label in normal ink.\nThe last slot's text is too long. The slot clips it and keeps its size.",...(g=(w=s.parameters)==null?void 0:w.docs)==null?void 0:g.description}}};var S,x,v,C,f;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    fixture: printFixture('printSlot', 'variants-thermal')
  },
  play: async ({
    canvasElement
  }) => {
    const layout = canvasLayout(printFixture('printSlot', 'variants-thermal'));
    await expectSlotsMatchOverlay(canvasElement, layout);
    const ruled = canvasElement.querySelector('[data-slot="ruled"]');
    const style = getComputedStyle(ruled as Element);
    await expect(style.getPropertyValue('--cetec-border-widths-paper-rule').trim()).toBe('1.5pt');
    await expect(style.borderTopColor).toBe('rgb(0, 0, 0)');
    await expect(getComputedStyle(slotContent(canvasElement, 'plain')).color).toBe('rgb(0, 0, 0)');
  }
}`,...(v=(x=i.parameters)==null?void 0:x.docs)==null?void 0:v.source},description:{story:"Fixture `variants-thermal`: the same slots in thermal ink. Text and rules\nare solid black, and the rule is 1.5 pt.",...(f=(C=i.parameters)==null?void 0:C.docs)==null?void 0:f.description}}};var B,b,T,E,k;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    fixture: printFixture('printSlot', 'micr'),
    h: 'md'
  },
  play: async ({
    canvasElement
  }) => {
    const layout = canvasLayout(printFixture('printSlot', 'micr'));
    await expectSlotsMatchOverlay(canvasElement, layout);
    await expect(await flaggedSlots(canvasElement)).toEqual([]);
    const content = slotContent(canvasElement, 'micr');
    const style = getComputedStyle(content);
    await expect(style.color).toBe('rgb(0, 0, 0)');
    await expect(style.whiteSpace).toBe('nowrap');
    await expect(style.alignItems).toBe('flex-end');
    await expect(style.paddingRight).toBe('0px');
  }
}`,...(T=(b=l.parameters)==null?void 0:b.docs)==null?void 0:T.source},description:{story:`Fixture \`micr\`: the locked MICR slot in the clear band of a check face.
The line is solid black on every ink, does not wrap, and sits against the
slot's right edge with no inset. The Go print path sets the MICR font, so
the story shows the mono face.`,...(k=(E=l.parameters)==null?void 0:E.docs)==null?void 0:k.description}}};export{l as Micr,s as Variants,i as VariantsThermal,J as __namedExportsOrder,j as default};
