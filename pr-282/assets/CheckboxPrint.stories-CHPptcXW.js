import{p as O}from"./usePrintPage-BzuNGdMS.js";import{p as d}from"./printFixtures-0K543kF7.js";import{P}from"./PrintFixture-B_rGiLtf.js";import"./iframe-B861AzWe.js";import"./preload-helper-B6kYaje4.js";import"./PrintPreview-kzsG7U3N.js";import"./CodeBlock-D8CLKwX7.js";import"./IconButton-BltImcZV.js";import"./Spinner-CjdL_ata.js";import"./FieldContext-CrxIKTA8.js";import"./useLocale-BADWnSrj.js";import"./dsPart-nnoJM9m6.js";import"./useControllableState-BZ-X75e6.js";const{expect:a,within:l}=__STORYBOOK_MODULE_TEST__,D=async e=>{var n;const o=await(await fetch(`/svgs/${e}.svg`)).text();return(n=/<path d="([^"]*)"/.exec(o))==null?void 0:n[1]},h=async(e,t)=>[...(await l(e).findByLabelText(t)).querySelectorAll("svg.cetec-checkbox__indicator")],x=async(e,t)=>{var o;await a(e).toBeDefined(),await a(e==null?void 0:e.dataset.icon).toBe(t),await a((o=e==null?void 0:e.querySelector("path"))==null?void 0:o.getAttribute("d")).toBe(await D(t))},Q={title:"Print/Checkbox",component:P,parameters:{layout:"fullscreen",docs:{description:{component:"The print look of `Checkbox`, for the kit element `checkbox`. It prints a\nbox to tick by hand, or a box ticked from a yes/no field.\n\nThe Go print helper writes static markup with no input: the `checkbox`\nrecipe's `container`, one icon in the `indicator` slot, and the text in\nthe `label` slot. The icon is the design system `checkbox` icon for an\nempty box and `checkbox-checked` for a ticked one. Go inlines the icon\nSVG, because the PDF renderer may not load the icon sprite.\n\nThe box is 10 pt, in paper ink. Thermal ink prints it solid black. The\nlabel carries the meaning, so the box never stands alone. Each story\nrenders one fixture from `src/recipes/checkbox.fixtures.json`, exactly as\nstored."}}},tags:["autodocs"],args:{recipe:"checkbox",fixture:d("checkbox","empty-boxes"),paper:"letter",fit:"width",h:"md"},argTypes:{paper:{control:"inline-radio",options:["letter","a4","legal"]},fixture:{control:!1},size:{control:!1},footer:{control:!1}}},s={play:async({canvasElement:e})=>{const t=await h(e,"empty-boxes");await a(t).toHaveLength(3);for(const i of t)await x(i,"checkbox");const o=l(await l(e).findByLabelText("empty-boxes"));for(const i of["Rework","Use as is","Scrap"])await a(await o.findByText(i)).toBeVisible();const n=getComputedStyle(t[0]);await a(parseFloat(n.width)).toBeCloseTo(21.33,1),await a(n.fill).toBe("rgb(41, 42, 46)")}},c={args:{fixture:d("checkbox","checked-field")},play:async({canvasElement:e})=>{const t=await h(e,"checked-field");await a(t).toHaveLength(1),await x(t[0],"checkbox-checked")}},r={args:{fixture:d("checkbox","empty-field")},play:async({canvasElement:e})=>{const t=await h(e,"empty-field");await a(t).toHaveLength(1),await x(t[0],"checkbox")}},p={args:{fixture:d("checkbox","thermal-ink"),size:O.label4x6,margins:.25,fit:"page",h:"3xl"},play:async({canvasElement:e})=>{const t=await h(e,"thermal-ink");await a(t).toHaveLength(2),await x(t[0],"checkbox-checked"),await x(t[1],"checkbox");for(const i of t)await a(getComputedStyle(i).fill).toBe("rgb(0, 0, 0)");const n=await l(await l(e).findByLabelText("thermal-ink")).findByText("First article");await a(getComputedStyle(n).color).toBe("rgb(0, 0, 0)")}},W=["EmptyBoxes","CheckedField","EmptyField","ThermalInk"];var m,b,f,y,k;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const boxes = await findBoxes(canvasElement, 'empty-boxes');
    await expect(boxes).toHaveLength(3);
    for (const box of boxes) await expectIcon(box, 'checkbox');
    const page = within(await within(canvasElement).findByLabelText('empty-boxes'));
    for (const label of ['Rework', 'Use as is', 'Scrap']) {
      await expect(await page.findByText(label)).toBeVisible();
    }
    const style = getComputedStyle(boxes[0] as Element);
    // paper.tickBox is 16 pt, which is 21.33 px at 96 px per inch. Layout
    // rounds it to a 64th of a pixel.
    await expect(parseFloat(style.width)).toBeCloseTo(21.33, 1);
    // paper.ink is neutral.100, #292A2E.
    await expect(style.fill).toBe('rgb(41, 42, 46)');
  }
}`,...(f=(b=s.parameters)==null?void 0:b.docs)==null?void 0:f.source},description:{story:"Fixture `empty-boxes`: three empty boxes to tick by hand, as on the\nInspection Label. Each box is in its own cell.",...(k=(y=s.parameters)==null?void 0:y.docs)==null?void 0:k.description}}};var w,g,u,B,T;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    fixture: printFixture('checkbox', 'checked-field')
  },
  play: async ({
    canvasElement
  }) => {
    const boxes = await findBoxes(canvasElement, 'checked-field');
    await expect(boxes).toHaveLength(1);
    await expectIcon(boxes[0], 'checkbox-checked');
  }
}`,...(u=(g=c.parameters)==null?void 0:g.docs)==null?void 0:u.source},description:{story:"Fixture `checked-field`: a box ticked from a yes/no field that is true.",...(T=(B=c.parameters)==null?void 0:B.docs)==null?void 0:T.description}}};var v,S,E,F,L;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    fixture: printFixture('checkbox', 'empty-field')
  },
  play: async ({
    canvasElement
  }) => {
    const boxes = await findBoxes(canvasElement, 'empty-field');
    await expect(boxes).toHaveLength(1);
    await expectIcon(boxes[0], 'checkbox');
  }
}`,...(E=(S=r.parameters)==null?void 0:S.docs)==null?void 0:E.source},description:{story:"Fixture `empty-field`: an empty box from a yes/no field that is false.",...(L=(F=r.parameters)==null?void 0:F.docs)==null?void 0:L.description}}};var C,I,_,H,z;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    fixture: printFixture('checkbox', 'thermal-ink'),
    size: pageSizes.label4x6,
    margins: 0.25,
    fit: 'page',
    h: '3xl'
  },
  play: async ({
    canvasElement
  }) => {
    const boxes = await findBoxes(canvasElement, 'thermal-ink');
    await expect(boxes).toHaveLength(2);
    await expectIcon(boxes[0], 'checkbox-checked');
    await expectIcon(boxes[1], 'checkbox');
    for (const box of boxes) {
      await expect(getComputedStyle(box).fill).toBe('rgb(0, 0, 0)');
    }
    const page = within(await within(canvasElement).findByLabelText('thermal-ink'));
    const label = await page.findByText('First article');
    await expect(getComputedStyle(label).color).toBe('rgb(0, 0, 0)');
  }
}`,...(_=(I=p.parameters)==null?void 0:I.docs)==null?void 0:_.source},description:{story:"Fixture `thermal-ink`: a ticked and an empty box in thermal ink, on\n4 × 6 in label stock. Both icons print solid black.",...(z=(H=p.parameters)==null?void 0:H.docs)==null?void 0:z.description}}};export{c as CheckedField,s as EmptyBoxes,r as EmptyField,p as ThermalInk,W as __namedExportsOrder,Q as default};
