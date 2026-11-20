import{p as b}from"./usePrintPage-BzuNGdMS.js";import{p as y}from"./printFixtures-0K543kF7.js";import{P as f}from"./PrintFixture-B_rGiLtf.js";import"./iframe-B861AzWe.js";import"./preload-helper-B6kYaje4.js";import"./PrintPreview-kzsG7U3N.js";import"./CodeBlock-D8CLKwX7.js";import"./IconButton-BltImcZV.js";import"./Spinner-CjdL_ata.js";import"./FieldContext-CrxIKTA8.js";import"./useLocale-BADWnSrj.js";import"./dsPart-nnoJM9m6.js";import"./useControllableState-BZ-X75e6.js";const{expect:t,within:v}=__STORYBOOK_MODULE_TEST__,g=async(r,i)=>{const n=(await v(r).findByLabelText(i)).querySelector("hr.cetec-divider");return await t(n).not.toBeNull(),n},R={title:"Print/Divider",component:f,parameters:{layout:"fullscreen",docs:{description:{component:"The print look of `Divider`, for the kit element `divider`. It is a plain\nhorizontal rule between flow elements, in place of a hand-written `<hr>`.\n\nThe kit element has no props. The Go print helper writes an `<hr>` with\nthe `divider` recipe classes for the horizontal direction and the default\nweight. On paper the rule is the hairline color at 1 pt, with space above\nand below. Thermal ink prints it solid black at 1.5 pt. Each story renders\none fixture from `src/recipes/divider.fixtures.json`, exactly as stored."}}},tags:["autodocs"],args:{recipe:"divider",fixture:y("divider","between-text"),paper:"letter",fit:"width",h:"md"},argTypes:{paper:{control:"inline-radio",options:["letter","a4","legal"]},fixture:{control:!1},size:{control:!1},footer:{control:!1}}},o={play:async({canvasElement:r})=>{const i=await g(r,"between-text"),e=getComputedStyle(i);await t(e.borderTopStyle).toBe("solid"),await t(e.borderTopColor).not.toBe("rgb(0, 0, 0)"),await t(e.getPropertyValue("--divider-weight").trim()).toBe("1pt")}},a={args:{fixture:y("divider","between-text-thermal"),size:b.label4x6,margins:.25,fit:"page",h:"3xl"},play:async({canvasElement:r})=>{const i=await g(r,"between-text-thermal"),e=getComputedStyle(i);await t(e.borderTopColor).toBe("rgb(0, 0, 0)"),await t(e.getPropertyValue("--divider-weight").trim()).toBe("1.5pt")}},V=["BetweenText","ThermalInk"];var s,l,p,d,c;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const rule = await findRule(canvasElement, 'between-text');
    const style = getComputedStyle(rule);
    await expect(style.borderTopStyle).toBe('solid');
    // paper.hairline is neutralA.30, a soft grey, not solid black.
    await expect(style.borderTopColor).not.toBe('rgb(0, 0, 0)');
    // Chromium rounds the rendered width, so read the weight variable. It
    // holds paper.rule, 1 pt.
    await expect(style.getPropertyValue('--divider-weight').trim()).toBe('1pt');
  }
}`,...(p=(l=o.parameters)==null?void 0:l.docs)==null?void 0:p.source},description:{story:"Fixture `between-text`: a divider between two text blocks, normal ink.",...(c=(d=o.parameters)==null?void 0:d.docs)==null?void 0:c.description}}};var m,u,h,w,x;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    fixture: printFixture('divider', 'between-text-thermal'),
    size: pageSizes.label4x6,
    margins: 0.25,
    fit: 'page',
    h: '3xl'
  },
  play: async ({
    canvasElement
  }) => {
    const rule = await findRule(canvasElement, 'between-text-thermal');
    const style = getComputedStyle(rule);
    await expect(style.borderTopColor).toBe('rgb(0, 0, 0)');
    await expect(style.getPropertyValue('--divider-weight').trim()).toBe('1.5pt');
  }
}`,...(h=(u=a.parameters)==null?void 0:u.docs)==null?void 0:h.source},description:{story:"Fixture `between-text-thermal`: the same divider in thermal ink, on\n4 × 6 in label stock. The rule is solid black at 1.5 pt.",...(x=(w=a.parameters)==null?void 0:w.docs)==null?void 0:x.description}}};export{o as BetweenText,a as ThermalInk,V as __namedExportsOrder,R as default};
