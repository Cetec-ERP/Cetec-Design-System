import{j as nt}from"./iframe-B861AzWe.js";import{p as r}from"./printFixtures-0K543kF7.js";import{c as rt,e as mt,a as st,f as it,P as ct}from"./PrintCanvasFixture-2dIY57RI.js";import{P as ht}from"./PrintFixture-B_rGiLtf.js";import"./preload-helper-B6kYaje4.js";import"./CodeBlock-D8CLKwX7.js";import"./IconButton-BltImcZV.js";import"./Spinner-CjdL_ata.js";import"./FieldContext-CrxIKTA8.js";import"./useLocale-BADWnSrj.js";import"./dsPart-nnoJM9m6.js";import"./useControllableState-BZ-X75e6.js";import"./PrintPreview-kzsG7U3N.js";import"./usePrintPage-BzuNGdMS.js";const{expect:a,within:b}=__STORYBOOK_MODULE_TEST__,Rt={title:"Print/Barcode",component:ht,parameters:{layout:"fullscreen",docs:{description:{component:"A barcode: the kit element `barcode` and the `barcode` recipe. It has no\nReact component. Go encodes the value and draws the bars as inline SVG.\nThe design system owns the frame and the text under the bars.\n\n- `symbology`: `code128` (default), `qr`, or `datamatrix`.\n- A Code 128 prints its value under the bars in the mono face.\n- In flow, every code has one fixed height, 5/8 in.\n- In a slot, a code fills the slot height. A Code 128 uses the widest bars\n  that fit the slot width, in whole printer dots.\n- Bars are solid black on every ink.\n- When Go cannot encode the value, the preview shows a box with the\n  message. The value is never changed.\n\nThe bars in these stories are the output of the Go barcode module that\nCetec-ERP uses, `github.com/boombuler/barcode`, so they scan."}}},tags:["autodocs"],args:{recipe:"barcode",fixture:r("barcode","code128"),size:{width:4,height:1.5,unit:"in"},margins:.25,h:"md"},argTypes:{fixture:{control:!1},recipe:{control:!1},size:{control:!1},footer:{control:!1},paper:{table:{disable:!0}}}},n=(t,e,o="")=>{const s=t.querySelector(`${o} .cetec-barcode__${e}`);if(!s)throw new Error(`No barcode ${e} in "${o}".`);return s},g="60px",c={play:async({canvasElement:t})=>{await b(t).findAllByText("SO7731-1");const e=getComputedStyle(n(t,"bars"));await a(e.height).toBe(g),await a(e.fill).toBe("rgb(0, 0, 0)");const o=getComputedStyle(n(t,"text"));await a(o.fontVariationSettings).toContain('"MONO" 1'),await a(o.color).toBe("rgb(41, 42, 46)")}},l={args:{fixture:r("barcode","code128-thermal")},play:async({canvasElement:t})=>{await b(t).findAllByText("SO7731-1"),await a(getComputedStyle(n(t,"bars")).fill).toBe("rgb(0, 0, 0)"),await a(getComputedStyle(n(t,"text")).color).toBe("rgb(0, 0, 0)")}},d={args:{fixture:r("barcode","qr")},play:async({canvasElement:t})=>{await b(t).findByRole("img",{name:/^QR code/});const e=getComputedStyle(n(t,"bars"));await a(e.height).toBe(g),await a(e.width).toBe(g),await a(t.querySelector(".cetec-barcode__text")).toBeNull()}},p={args:{fixture:r("barcode","datamatrix")},play:async({canvasElement:t})=>{await b(t).findByRole("img",{name:/^Data Matrix/});const e=getComputedStyle(n(t,"bars"));await a(e.height).toBe(g),await a(e.width).toBe(g)}},m={render:()=>nt.jsx(ct,{recipe:"barcode",fixture:r("barcode","in-slot"),h:"2xl"}),play:async({canvasElement:t})=>{var s;const e=rt(r("barcode","in-slot"));await mt(e),await st(t,e),await a(await it(t)).toEqual([]);const o=e.dpi??203;for(const w of e.slots){const i=n(t,"root",`[data-slot="${w.name}"]`).parentElement,x=getComputedStyle(i),f=i.clientWidth-parseFloat(x.paddingLeft)-parseFloat(x.paddingRight),lt=i.getBoundingClientRect().bottom-parseFloat(x.paddingBottom)*(i.getBoundingClientRect().height/i.offsetHeight),dt=n(t,"root",`[data-slot="${w.name}"]`);await a(Math.abs(dt.getBoundingClientRect().bottom-lt)).toBeLessThan(1.5);const y=n(t,"bars",`[data-slot="${w.name}"]`);if(y.getAttribute("preserveAspectRatio")!=="none")continue;const B=Number((s=y.getAttribute("viewBox"))==null?void 0:s.split(" ")[2]),S=parseFloat(y.getAttribute("width")??"0")*96,pt=Math.round(S/96/B*o);await a(S).toBeLessThanOrEqual(f+.5),await a((pt+1)*B/o*96).toBeGreaterThan(f)}}},h={render:()=>nt.jsx(ct,{recipe:"barcode",fixture:r("barcode","in-slot-paper"),h:"2xl"}),play:async({canvasElement:t})=>{const e=rt(r("barcode","in-slot-paper"));await st(t,e),await a(await it(t)).toEqual([]),await a(getComputedStyle(n(t,"bars",'[data-slot="po"]')).fill).toBe("rgb(0, 0, 0)")}},u={args:{fixture:r("barcode","error")},play:async({canvasElement:t})=>{const e=await b(t).findByRole("alert");await a(e.textContent).toBe("Code 128 cannot encode this character.");const o=getComputedStyle(e);await a(o.color).toBe("rgb(229, 5, 19)"),await a(o.borderTopStyle).toBe("solid"),await a(t.querySelector(".cetec-barcode__bars")).toBeNull()}},Ot=["Code128","Code128Thermal","Qr","DataMatrix","InSlot","InSlotPaper","EncodeError"];var C,v,E,F,T;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    await within(canvasElement).findAllByText('SO7731-1');
    const bars = getComputedStyle(part(canvasElement, 'bars'));
    await expect(bars.height).toBe(flowHeight);
    await expect(bars.fill).toBe('rgb(0, 0, 0)');
    const text = getComputedStyle(part(canvasElement, 'text'));
    await expect(text.fontVariationSettings).toContain('"MONO" 1');
    await expect(text.color).toBe('rgb(41, 42, 46)');
  }
}`,...(E=(v=c.parameters)==null?void 0:v.docs)==null?void 0:E.source},description:{story:"Fixture `code128`: a Code 128 in the flow of a document. The value prints\nunder the bars in the mono face.",...(T=(F=c.parameters)==null?void 0:F.docs)==null?void 0:T.description}}};var R,O,q,_,A;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    fixture: printFixture('barcode', 'code128-thermal')
  },
  play: async ({
    canvasElement
  }) => {
    await within(canvasElement).findAllByText('SO7731-1');
    await expect(getComputedStyle(part(canvasElement, 'bars')).fill).toBe('rgb(0, 0, 0)');
    await expect(getComputedStyle(part(canvasElement, 'text')).color).toBe('rgb(0, 0, 0)');
  }
}`,...(q=(O=l.parameters)==null?void 0:O.docs)==null?void 0:q.source},description:{story:"Fixture `code128-thermal`: the same code in thermal ink.",...(A=(_=l.parameters)==null?void 0:_.docs)==null?void 0:A.description}}};var M,P,L,$,G;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    fixture: printFixture('barcode', 'qr')
  },
  play: async ({
    canvasElement
  }) => {
    await within(canvasElement).findByRole('img', {
      name: /^QR code/
    });
    const bars = getComputedStyle(part(canvasElement, 'bars'));
    await expect(bars.height).toBe(flowHeight);
    await expect(bars.width).toBe(flowHeight);
    await expect(canvasElement.querySelector('.cetec-barcode__text')).toBeNull();
  }
}`,...(L=(P=d.parameters)==null?void 0:P.docs)==null?void 0:L.source},description:{story:"Fixture `qr`: a QR code in flow. It is square and has no text.",...(G=($=d.parameters)==null?void 0:$.docs)==null?void 0:G.description}}};var H,N,I,k,D;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    fixture: printFixture('barcode', 'datamatrix')
  },
  play: async ({
    canvasElement
  }) => {
    await within(canvasElement).findByRole('img', {
      name: /^Data Matrix/
    });
    const bars = getComputedStyle(part(canvasElement, 'bars'));
    await expect(bars.height).toBe(flowHeight);
    await expect(bars.width).toBe(flowHeight);
  }
}`,...(I=(N=p.parameters)==null?void 0:N.docs)==null?void 0:I.source},description:{story:"Fixture `datamatrix`: a Data Matrix code in flow.",...(D=(k=p.parameters)==null?void 0:k.docs)==null?void 0:D.description}}};var W,Q,j,V,z;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <PrintCanvasFixtureSpec recipe="barcode" fixture={printFixture('barcode', 'in-slot')} h="2xl" />,
  play: async ({
    canvasElement
  }) => {
    const layout = canvasLayout(printFixture('barcode', 'in-slot'));
    await expectSlotsOnGrid(layout);
    await expectSlotsMatchOverlay(canvasElement, layout);
    await expect(await flaggedSlots(canvasElement)).toEqual([]);
    const dpi = layout.dpi ?? 203;
    for (const slot of layout.slots) {
      const content = part(canvasElement, 'root', \`[data-slot="\${slot.name}"]\`).parentElement as HTMLElement;
      const style = getComputedStyle(content);
      const innerWidth = content.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight);
      const innerBottom = content.getBoundingClientRect().bottom - parseFloat(style.paddingBottom) * (content.getBoundingClientRect().height / content.offsetHeight);
      const root = part(canvasElement, 'root', \`[data-slot="\${slot.name}"]\`);
      // The code fills the slot height.
      await expect(Math.abs(root.getBoundingClientRect().bottom - innerBottom)).toBeLessThan(1.5);
      const bars = part(canvasElement, 'bars', \`[data-slot="\${slot.name}"]\`);
      if (bars.getAttribute('preserveAspectRatio') !== 'none') continue;
      // The widest whole-dot module that fits the width.
      const columns = Number(bars.getAttribute('viewBox')?.split(' ')[2]);
      const widthPx = parseFloat(bars.getAttribute('width') ?? '0') * 96;
      const dots = Math.round(widthPx / 96 / columns * dpi);
      await expect(widthPx).toBeLessThanOrEqual(innerWidth + 0.5);
      await expect((dots + 1) * columns / dpi * 96).toBeGreaterThan(innerWidth);
    }
  }
}`,...(j=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:j.source},description:{story:`Fixture \`in-slot\`: each symbology in a slot on a 4 × 3 in label in
thermal ink. Each code fills the slot height below any label field in the
slot. A Code 128 uses the widest bars that fit, in whole dots at 203 dpi.
A square code is the largest square that fits.`,...(z=(V=m.parameters)==null?void 0:V.docs)==null?void 0:z.description}}};var K,U,Y,J,X;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <PrintCanvasFixtureSpec recipe="barcode" fixture={printFixture('barcode', 'in-slot-paper')} h="2xl" />,
  play: async ({
    canvasElement
  }) => {
    const layout = canvasLayout(printFixture('barcode', 'in-slot-paper'));
    await expectSlotsMatchOverlay(canvasElement, layout);
    await expect(await flaggedSlots(canvasElement)).toEqual([]);
    await expect(getComputedStyle(part(canvasElement, 'bars', '[data-slot="po"]')).fill).toBe('rgb(0, 0, 0)');
  }
}`,...(Y=(U=h.parameters)==null?void 0:U.docs)==null?void 0:Y.source},description:{story:"Fixture `in-slot-paper`: the same slots in normal ink, in whole dots at\n300 dpi.",...(X=(J=h.parameters)==null?void 0:J.docs)==null?void 0:X.description}}};var Z,tt,et,at,ot;u.parameters={...u.parameters,docs:{...(Z=u.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    fixture: printFixture('barcode', 'error')
  },
  play: async ({
    canvasElement
  }) => {
    const alert = await within(canvasElement).findByRole('alert');
    await expect(alert.textContent).toBe('Code 128 cannot encode this character.');
    const style = getComputedStyle(alert);
    await expect(style.color).toBe('rgb(229, 5, 19)');
    await expect(style.borderTopStyle).toBe('solid');
    await expect(canvasElement.querySelector('.cetec-barcode__bars')).toBeNull();
  }
}`,...(et=(tt=u.parameters)==null?void 0:tt.docs)==null?void 0:et.source},description:{story:"Fixture `error`: the preview when Go cannot encode the value. The box\nshows the message in the alert ink.",...(ot=(at=u.parameters)==null?void 0:at.docs)==null?void 0:ot.description}}};export{c as Code128,l as Code128Thermal,p as DataMatrix,u as EncodeError,m as InSlot,h as InSlotPaper,d as Qr,Ot as __namedExportsOrder,Rt as default};
