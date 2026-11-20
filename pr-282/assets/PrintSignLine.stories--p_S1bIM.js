import{p as m}from"./printFixtures-0K543kF7.js";import{P as M}from"./PrintFixture-B_rGiLtf.js";import{p as W}from"./usePrintPage-BzuNGdMS.js";import"./iframe-B861AzWe.js";import"./preload-helper-B6kYaje4.js";import"./CodeBlock-D8CLKwX7.js";import"./IconButton-BltImcZV.js";import"./Spinner-CjdL_ata.js";import"./FieldContext-CrxIKTA8.js";import"./useLocale-BADWnSrj.js";import"./dsPart-nnoJM9m6.js";import"./useControllableState-BZ-X75e6.js";import"./PrintPreview-kzsG7U3N.js";const{expect:e}=__STORYBOOK_MODULE_TEST__,u=async(n,a)=>{var r;const t=n.querySelector(`[data-fixture="${a}"] .cetec-printSignLine__root`);await e(t).not.toBeNull();const i=s=>[...t.querySelectorAll(`.cetec-printSignLine__${s}`)];return{fields:i("field"),lines:i("line"),captions:i("caption").map(s=>s.textContent),label:(r=i("label")[0])==null?void 0:r.textContent}},ae={title:"Print/Sign line",component:M,parameters:{layout:"fullscreen",docs:{description:{component:"A line to sign by hand, the `printSignLine` slot recipe, for the kit\nelement `sign_line`. It has no React component. The Go print helper writes\nthe classes and the caption words from the fixtures.\n\nThe label comes first, then a signature line, then a line for each of\n`name`, `date`, and `initials` that the template asks for, in that order.\nA printed name sits on the name line. With no lines, it is a write-in\nfield with one rule. The rule is 1 pt on paper and 1.5 pt in thermal ink.\n\nEach story renders one fixture from\n`src/recipes/printSignLine.fixtures.json` on a Letter page."}}},tags:["autodocs"],args:{recipe:"printSignLine",fixture:m("printSignLine","name-and-date"),paper:"letter",fit:"width",h:"xs"},argTypes:{paper:{control:"inline-radio",options:["letter","a4","legal"]},fixture:{control:!1},size:{control:!1},footer:{control:!1}}},o={play:async({canvasElement:n})=>{var g;const{fields:a,lines:t,captions:i}=await u(n,"name-and-date");await e(i).toEqual(["Signature","Name","Date"]),await e((g=t[1])==null?void 0:g.textContent).toBe("Tamsin Okoro");const r=getComputedStyle(t[0]);await e(r.borderBottomStyle).toBe("solid"),await e(r.getPropertyValue("--cetec-border-widths-paper-rule").trim()).toBe("1pt");const[s,,R]=a.map(V=>V.getBoundingClientRect().width);await e(R).toBeLessThan(s??0)}},l={args:{fixture:m("printSignLine","all-lines")},play:async({canvasElement:n})=>{const{captions:a}=await u(n,"all-lines");await e(a).toEqual(["Signature","Name","Date","Initials"])}},c={args:{fixture:m("printSignLine","write-in")},play:async({canvasElement:n})=>{const{fields:a,captions:t,label:i}=await u(n,"write-in");await e(a).toHaveLength(1),await e(t).toEqual([]),await e(i).toBe("Measured torque (N·m)")}},p={args:{fixture:m("printSignLine","check-face")},play:async({canvasElement:n})=>{const{fields:a,captions:t}=await u(n,"check-face");await e(a).toHaveLength(1),await e(t).toEqual([])}},d={args:{fixture:m("printSignLine","all-lines"),thermal:!0,size:W.label4x6,margins:.25,fit:"page",h:"2xl"},play:async({canvasElement:n})=>{const{lines:a}=await u(n,"all-lines"),t=getComputedStyle(a[0]);await e(t.borderBottomColor).toBe("rgb(0, 0, 0)"),await e(t.getPropertyValue("--cetec-border-widths-paper-rule").trim()).toBe("1.5pt")}},ie=["NameAndDate","AllLines","WriteIn","CheckFace","Thermal"];var h,w,f,x,y;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const {
      fields,
      lines,
      captions
    } = await signLine(canvasElement, 'name-and-date');
    await expect(captions).toEqual(['Signature', 'Name', 'Date']);
    // The printed name sits on the name line.
    await expect(lines[1]?.textContent).toBe('Tamsin Okoro');
    const rule = getComputedStyle(lines[0] as Element);
    await expect(rule.borderBottomStyle).toBe('solid');
    await expect(rule.getPropertyValue('--cetec-border-widths-paper-rule').trim()).toBe('1pt');
    // The date line starts narrower than the signature line.
    const [signature,, date] = fields.map(field => field.getBoundingClientRect().width);
    await expect(date).toBeLessThan(signature ?? 0);
  }
}`,...(f=(w=o.parameters)==null?void 0:w.docs)==null?void 0:f.source},description:{story:"Fixture `name-and-date`: a signature with a printed name and a date.",...(y=(x=o.parameters)==null?void 0:x.docs)==null?void 0:y.description}}};var S,L,E,B,b;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    fixture: printFixture('printSignLine', 'all-lines')
  },
  play: async ({
    canvasElement
  }) => {
    const {
      captions
    } = await signLine(canvasElement, 'all-lines');
    await expect(captions).toEqual(['Signature', 'Name', 'Date', 'Initials']);
  }
}`,...(E=(L=l.parameters)==null?void 0:L.docs)==null?void 0:E.source},description:{story:"Fixture `all-lines`: name, date, and initials, in that order.",...(b=(B=l.parameters)==null?void 0:B.docs)==null?void 0:b.description}}};var T,k,v,C,F;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    fixture: printFixture('printSignLine', 'write-in')
  },
  play: async ({
    canvasElement
  }) => {
    const {
      fields,
      captions,
      label
    } = await signLine(canvasElement, 'write-in');
    await expect(fields).toHaveLength(1);
    await expect(captions).toEqual([]);
    await expect(label).toBe('Measured torque (N·m)');
  }
}`,...(v=(k=c.parameters)==null?void 0:k.docs)==null?void 0:v.source},description:{story:"Fixture `write-in`: no lines, so one rule with no caption.",...(F=(C=c.parameters)==null?void 0:C.docs)==null?void 0:F.description}}};var _,q,N,A,D;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    fixture: printFixture('printSignLine', 'check-face')
  },
  play: async ({
    canvasElement
  }) => {
    const {
      fields,
      captions
    } = await signLine(canvasElement, 'check-face');
    await expect(fields).toHaveLength(1);
    await expect(captions).toEqual([]);
  }
}`,...(N=(q=p.parameters)==null?void 0:q.docs)==null?void 0:N.source},description:{story:'Fixture `check-face`: "Authorized signature" on a check, a write-in.',...(D=(A=p.parameters)==null?void 0:A.docs)==null?void 0:D.description}}};var O,P,z,I,H;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    fixture: printFixture('printSignLine', 'all-lines'),
    thermal: true,
    size: pageSizes.label4x6,
    margins: 0.25,
    fit: 'page',
    h: '2xl'
  },
  play: async ({
    canvasElement
  }) => {
    const {
      lines
    } = await signLine(canvasElement, 'all-lines');
    const rule = getComputedStyle(lines[0] as Element);
    await expect(rule.borderBottomColor).toBe('rgb(0, 0, 0)');
    await expect(rule.getPropertyValue('--cetec-border-widths-paper-rule').trim()).toBe('1.5pt');
  }
}`,...(z=(P=d.parameters)==null?void 0:P.docs)==null?void 0:z.source},description:{story:"Fixture `all-lines` in thermal ink, on 4 × 6 in label stock. The rules\nare black and 1.5 pt. The lines wrap to fit the label.",...(H=(I=d.parameters)==null?void 0:I.docs)==null?void 0:H.description}}};export{l as AllLines,p as CheckFace,o as NameAndDate,d as Thermal,c as WriteIn,ie as __namedExportsOrder,ae as default};
