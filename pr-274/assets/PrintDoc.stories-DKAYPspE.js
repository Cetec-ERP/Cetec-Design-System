import{b as f}from"./printFixtures-B6ed1-Cm.js";import{P as w}from"./PrintFixture-apJBOE__.js";import{p as b}from"./usePrintPage-DZv1imEF.js";import"./iframe-Dnjkp1ni.js";import"./preload-helper-CPI0EWmb.js";import"./CodeBlock-cd9ik8V6.js";import"./IconButton-DpjoKS1Y.js";import"./Spinner-Du2Mvwj6.js";import"./FieldContext-BFW9VqL4.js";import"./useLocale-Dovh_ny_.js";import"./dsPart-nnoJM9m6.js";import"./useControllableState-CENvTxa5.js";import"./PrintPreview-CoMU9Bdl.js";const{expect:n,within:a}=__STORYBOOK_MODULE_TEST__,N={title:"Print/Document root",component:w,parameters:{layout:"fullscreen",docs:{description:{component:"The document root, the `printDoc` recipe. It has no React component. The\nGo print helper puts `cetec-printDoc` on the `<html>` element of every kit\ndocument and adds `cetec-ink-thermal` for thermal label printers.\n\nThe root sets the white sheet and the paper ink. `<html>` keeps the browser\ntext size, so 1 rem is 16 px, as in the app. `<body>` takes the body text\nstyle, and each top-level block after the first gets 12 pt above it. So the\nfixture HTML needs no classes of its own. Each story renders one\nfixture from `src/recipes/printDoc.fixtures.json`, exactly as stored. The\npage margins stand in for the `@page` margins Go writes.\n\nSwitch the app theme to dark. The pages do not change."}}},tags:["autodocs"],args:{recipe:"printDoc",fixture:f("printDoc","normal-ink"),paper:"letter"},argTypes:{paper:{control:"inline-radio",options:["letter","a4","legal"]},fixture:{control:!1},size:{control:!1},footer:{control:!1}}},e={play:async({canvasElement:o})=>{const r=await a(await a(o).findByLabelText("normal-ink")).findByText(/Thank you for your order/),i=getComputedStyle(r);await n(i.fontSize).toBe("11.3333px"),await n(i.color).toBe("rgb(41, 42, 46)");const s=o.querySelector('[data-fixture="normal-ink"]');await n(s).not.toBeNull(),await n(getComputedStyle(s).backgroundColor).toBe("rgb(255, 255, 255)")}},t={args:{fixture:f("printDoc","thermal-ink"),size:b.label4x6,margins:.25,fit:"page"},play:async({canvasElement:o})=>{const r=await a(await a(o).findByLabelText("thermal-ink")).findByText(/Handle with care/);await n(getComputedStyle(r).color).toBe("rgb(0, 0, 0)")}},H=["NormalInk","ThermalInk"];var p,c,l,m,d;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const page = within(await within(canvasElement).findByLabelText('normal-ink'));
    const text = await page.findByText(/Thank you for your order/);
    const style = getComputedStyle(text);
    // print.body is 8.5 pt, which is 11.33 px at 96 px per inch.
    await expect(style.fontSize).toBe('11.3333px');
    // paper.ink is neutral.100, #292A2E.
    await expect(style.color).toBe('rgb(41, 42, 46)');
    const root = canvasElement.querySelector('[data-fixture="normal-ink"]');
    await expect(root).not.toBeNull();
    // The paper token is white.
    await expect(getComputedStyle(root as Element).backgroundColor).toBe('rgb(255, 255, 255)');
  }
}`,...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.source},description:{story:"Fixture `normal-ink`: a document on Letter paper in normal ink.",...(d=(m=e.parameters)==null?void 0:m.docs)==null?void 0:d.description}}};var h,x,u,y,g;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    fixture: printFixture('printDoc', 'thermal-ink'),
    size: pageSizes.label4x6,
    margins: 0.25,
    fit: 'page'
  },
  play: async ({
    canvasElement
  }) => {
    const page = within(await within(canvasElement).findByLabelText('thermal-ink'));
    const text = await page.findByText(/Handle with care/);
    await expect(getComputedStyle(text).color).toBe('rgb(0, 0, 0)');
  }
}`,...(u=(x=t.parameters)==null?void 0:x.docs)==null?void 0:u.source},description:{story:"Fixture `thermal-ink`: a label in thermal ink, on 4 × 6 in label stock.\nEvery paper ink is solid black.",...(g=(y=t.parameters)==null?void 0:y.docs)==null?void 0:g.description}}};export{e as NormalInk,t as ThermalInk,H as __namedExportsOrder,N as default};
