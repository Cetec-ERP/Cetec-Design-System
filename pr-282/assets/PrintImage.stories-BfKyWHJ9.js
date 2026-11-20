import{p as n}from"./printFixtures-0K543kF7.js";import{P as K}from"./PrintFixture-B_rGiLtf.js";import{p as M}from"./usePrintPage-BzuNGdMS.js";import"./iframe-B861AzWe.js";import"./preload-helper-B6kYaje4.js";import"./CodeBlock-D8CLKwX7.js";import"./IconButton-BltImcZV.js";import"./Spinner-CjdL_ata.js";import"./FieldContext-CrxIKTA8.js";import"./useLocale-BADWnSrj.js";import"./dsPart-nnoJM9m6.js";import"./useControllableState-BZ-X75e6.js";import"./PrintPreview-kzsG7U3N.js";const{expect:a,waitFor:U}=__STORYBOOK_MODULE_TEST__,r=230.4,m=async(o,e)=>{const t=o.querySelector(`[data-fixture="${e}"] img.cetec-image`);await a(t).not.toBeNull(),await U(()=>a(t==null?void 0:t.naturalWidth).toBeGreaterThan(0));const d=getComputedStyle(t);return{width:parseFloat(d.width),height:parseFloat(d.height)}},ne={title:"Print/Image",component:K,parameters:{layout:"fullscreen",docs:{description:{component:`A contract image, the \`image\` recipe, for the kit element \`image\`. The Go
print helper writes the same markup for the screen and for paper. It has
no React component yet.

The image keeps its aspect ratio and is at most 2.4 in on its long side.
When the field has a value but the file cannot be read, Go writes an empty
hairline box with the \`broken\` class. When the field is empty, Go writes
nothing.

Each story renders one fixture from \`src/recipes/image.fixtures.json\` on a
Letter page. The fixture images are inline SVG, so the stories load nothing
from outside.`}}},tags:["autodocs"],args:{recipe:"image",fixture:n("image","part-photo"),paper:"letter",fit:"width",h:"lg"},argTypes:{paper:{control:"inline-radio",options:["letter","a4","legal"]},fixture:{control:!1},size:{control:!1},footer:{control:!1}}},s={play:async({canvasElement:o})=>{const{width:e,height:t}=await m(o,"part-photo");await a(e).toBeCloseTo(r,1),await a(t).toBeCloseTo(r*783/1200,0)}},p={args:{fixture:n("image","wide-logo")},play:async({canvasElement:o})=>{const{width:e,height:t}=await m(o,"wide-logo");await a(e).toBeCloseTo(r,1),await a(t).toBeCloseTo(r/5,0)}},c={args:{fixture:n("image","tall-photo")},play:async({canvasElement:o})=>{const{width:e,height:t}=await m(o,"tall-photo");await a(t).toBeCloseTo(r,1),await a(e).toBeCloseTo(r*600/900,0)}},l={args:{fixture:n("image","broken")},play:async({canvasElement:o})=>{const e=o.querySelector('[data-fixture="broken"] .cetec-image');await a(e).not.toBeNull(),await a(e==null?void 0:e.getAttribute("aria-label")).toBe("Part photo");const t=getComputedStyle(e);await a(t.borderTopStyle).toBe("solid"),await a(parseFloat(t.width)).toBeCloseTo(r,1),await a(parseFloat(t.height)).toBeCloseTo(r*3/4,1)}},i={args:{fixture:n("image","broken"),thermal:!0,size:M.label4x6,margins:.25,fit:"page",h:"2xl"},play:async({canvasElement:o})=>{const e=o.querySelector('[data-fixture="broken"] .cetec-image');await a(e).not.toBeNull();const t=getComputedStyle(e);await a(t.borderTopColor).toBe("rgb(0, 0, 0)"),await a(t.getPropertyValue("--cetec-border-widths-paper-hairline").trim()).toBe("1.5pt")}},h={args:{...i.args,fixture:n("image","part-photo")},play:async({canvasElement:o})=>{const{width:e}=await m(o,"part-photo");await a(e).toBeCloseTo(r,1)}},se=["PartPhoto","WideLogo","TallPhoto","Broken","Thermal","ThermalPhoto"];var g,u,w,x,y;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const {
      width,
      height
    } = await loadedSize(canvasElement, 'part-photo');
    await expect(width).toBeCloseTo(cap, 1);
    // The photo is 1200 × 783, so the height keeps that ratio.
    await expect(height).toBeCloseTo(cap * 783 / 1200, 0);
  }
}`,...(w=(u=s.parameters)==null?void 0:u.docs)==null?void 0:w.source},description:{story:"Fixture `part-photo`: a 1200 px photo scales down to the 2.4 in cap.",...(y=(x=s.parameters)==null?void 0:x.docs)==null?void 0:y.description}}};var f,b,T,B,S;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    fixture: printFixture('image', 'wide-logo')
  },
  play: async ({
    canvasElement
  }) => {
    const {
      width,
      height
    } = await loadedSize(canvasElement, 'wide-logo');
    await expect(width).toBeCloseTo(cap, 1);
    await expect(height).toBeCloseTo(cap / 5, 0);
  }
}`,...(T=(b=p.parameters)==null?void 0:b.docs)==null?void 0:T.source},description:{story:"Fixture `wide-logo`: a wide logo is 2.4 in wide and short.",...(S=(B=p.parameters)==null?void 0:B.docs)==null?void 0:S.description}}};var C,k,F,E,P;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    fixture: printFixture('image', 'tall-photo')
  },
  play: async ({
    canvasElement
  }) => {
    const {
      width,
      height
    } = await loadedSize(canvasElement, 'tall-photo');
    await expect(height).toBeCloseTo(cap, 1);
    await expect(width).toBeCloseTo(cap * 600 / 900, 0);
  }
}`,...(F=(k=c.parameters)==null?void 0:k.docs)==null?void 0:F.source},description:{story:"Fixture `tall-photo`: the long side is the height, so it is 2.4 in high.",...(P=(E=c.parameters)==null?void 0:E.docs)==null?void 0:P.description}}};var v,z,_,q,G;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    fixture: printFixture('image', 'broken')
  },
  play: async ({
    canvasElement
  }) => {
    const box = canvasElement.querySelector('[data-fixture="broken"] .cetec-image');
    await expect(box).not.toBeNull();
    await expect(box?.getAttribute('aria-label')).toBe('Part photo');
    const style = getComputedStyle(box as Element);
    await expect(style.borderTopStyle).toBe('solid');
    await expect(parseFloat(style.width)).toBeCloseTo(cap, 1);
    await expect(parseFloat(style.height)).toBeCloseTo(cap * 3 / 4, 1);
  }
}`,...(_=(z=l.parameters)==null?void 0:z.docs)==null?void 0:_.source},description:{story:"Fixture `broken`: the file cannot be read. An empty hairline box takes the\nplace of the image. It is as wide as its slot, up to 2.4 in, and 4 by 3.",...(G=(q=l.parameters)==null?void 0:q.docs)==null?void 0:G.description}}};var N,O,W,A,L;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    fixture: printFixture('image', 'broken'),
    thermal: true,
    size: pageSizes.label4x6,
    margins: 0.25,
    fit: 'page',
    h: '2xl'
  },
  play: async ({
    canvasElement
  }) => {
    const box = canvasElement.querySelector('[data-fixture="broken"] .cetec-image');
    await expect(box).not.toBeNull();
    const style = getComputedStyle(box as Element);
    await expect(style.borderTopColor).toBe('rgb(0, 0, 0)');
    await expect(style.getPropertyValue('--cetec-border-widths-paper-hairline').trim()).toBe('1.5pt');
  }
}`,...(W=(O=i.parameters)==null?void 0:O.docs)==null?void 0:W.source},description:{story:"Fixture `broken` in thermal ink, on 4 × 6 in label stock.\nThe broken box outline is black and 1.5 pt.",...(L=(A=i.parameters)==null?void 0:A.docs)==null?void 0:L.description}}};var D,I,V,R,j;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...Thermal.args,
    fixture: printFixture('image', 'part-photo')
  },
  play: async ({
    canvasElement
  }) => {
    const {
      width
    } = await loadedSize(canvasElement, 'part-photo');
    await expect(width).toBeCloseTo(cap, 1);
  }
}`,...(V=(I=h.parameters)==null?void 0:I.docs)==null?void 0:V.source},description:{story:"Fixture `part-photo` in thermal ink. The photo itself does not change.",...(j=(R=h.parameters)==null?void 0:R.docs)==null?void 0:j.description}}};export{l as Broken,s as PartPhoto,c as TallPhoto,i as Thermal,h as ThermalPhoto,p as WideLogo,se as __namedExportsOrder,ne as default};
