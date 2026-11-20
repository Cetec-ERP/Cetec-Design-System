import{j as m,k as G}from"./iframe-B861AzWe.js";import{p as d}from"./printFixtures-0K543kF7.js";import{P as K}from"./PrintFixture-B_rGiLtf.js";import{p as N}from"./usePrintPage-BzuNGdMS.js";import"./preload-helper-B6kYaje4.js";import"./CodeBlock-D8CLKwX7.js";import"./IconButton-BltImcZV.js";import"./Spinner-CjdL_ata.js";import"./FieldContext-CrxIKTA8.js";import"./useLocale-BADWnSrj.js";import"./dsPart-nnoJM9m6.js";import"./useControllableState-BZ-X75e6.js";import"./PrintPreview-kzsG7U3N.js";const{expect:e}=__STORYBOOK_MODULE_TEST__,p=async(t,o,r)=>{const l=t.querySelector(`[data-fixture="${o}"] ${r}`);return await e(l).not.toBeNull(),l},tt={title:"Print/Section",component:K,parameters:{layout:"fullscreen",docs:{description:{component:'A titled group, the `printSection` slot recipe, for the kit element\n`section`. It has no React component. The Go print helper writes the\nclasses from the fixtures.\n\nThe `title` slot prints as a caps heading with a hairline under it, and\nnever ends a page alone. `keep="together"` keeps the whole section on one\npage when it fits. A template puts a plain Liquid `if` around a section to\nshow it only sometimes.\n\nEach story renders one fixture from `src/recipes/printSection.fixtures.json`\non a Letter page. The tables in the fixtures have no classes, so they show\nthe section only, not the print look of a table.'}}},tags:["autodocs"],args:{recipe:"printSection",fixture:d("printSection","titled"),paper:"letter",fit:"width",h:"md"},argTypes:{paper:{control:"inline-radio",options:["letter","a4","legal"]},fixture:{control:!1},size:{control:!1},footer:{control:!1}}},n={play:async({canvasElement:t})=>{const o=await p(t,"titled",".cetec-printSection__title"),r=getComputedStyle(o);await e(parseFloat(r.fontSize)).toBeCloseTo(9.333,2),await e(r.textTransform).toBe("uppercase"),await e(r.borderBottomStyle).toBe("solid"),await e(r.breakAfter).toBe("avoid");const l=await p(t,"titled",".cetec-printSection__root");await e(getComputedStyle(l).breakInside).toBe("auto")}},a={args:{fixture:d("printSection","keep-together")},decorators:[t=>m.jsx(G.div,{css:{"& .cetec-printSection__root--keep_together":{outlineWidth:"1",outlineStyle:"dashed",outlineColor:"border.bold",outlineOffset:"4"}},children:m.jsx(t,{})})],play:async({canvasElement:t})=>{const o=await p(t,"keep-together",".cetec-printSection__root");await e(getComputedStyle(o).breakInside).toBe("avoid")}},i={args:{fixture:d("printSection","untitled")},play:async({canvasElement:t})=>{const o=await p(t,"untitled",".cetec-printSection__root");await e(o.querySelector(".cetec-printSection__title")).toBeNull()}},s={args:{fixture:d("printSection","stacked")},play:async({canvasElement:t})=>{const o=t.querySelectorAll('[data-fixture="stacked"] .cetec-printSection__root');await e(o).toHaveLength(2),await e(getComputedStyle(o[0]).marginTop).toBe("0px"),await e(parseFloat(getComputedStyle(o[1]).marginTop)).toBeGreaterThan(0)}},c={args:{thermal:!0,size:N.label4x6,margins:.25,fit:"page",h:"2xl"},play:async({canvasElement:t})=>{const o=await p(t,"titled",".cetec-printSection__title"),r=getComputedStyle(o);await e(r.color).toBe("rgb(0, 0, 0)"),await e(r.borderBottomColor).toBe("rgb(0, 0, 0)"),await e(r.getPropertyValue("--cetec-border-widths-paper-rule").trim()).toBe("1.5pt")}},et=["Titled","KeepTogether","Untitled","Stacked","Thermal"];var u,y,h,S,g;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const title = await part(canvasElement, 'titled', '.cetec-printSection__title');
    const style = getComputedStyle(title);
    // print.capsLabel is 7 pt, which is 9.33 px at 96 px per inch.
    await expect(parseFloat(style.fontSize)).toBeCloseTo(9.333, 2);
    await expect(style.textTransform).toBe('uppercase');
    await expect(style.borderBottomStyle).toBe('solid');
    await expect(style.breakAfter).toBe('avoid');
    const root = await part(canvasElement, 'titled', '.cetec-printSection__root');
    await expect(getComputedStyle(root).breakInside).toBe('auto');
  }
}`,...(h=(y=n.parameters)==null?void 0:y.docs)==null?void 0:h.source},description:{story:"Fixture `titled`: a title and a table. The section may break.",...(g=(S=n.parameters)==null?void 0:S.docs)==null?void 0:g.description}}};var x,w,f,_,b;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    fixture: printFixture('printSection', 'keep-together')
  },
  decorators: [Story => <styled.div css={{
    '& .cetec-printSection__root--keep_together': {
      outlineWidth: '1',
      outlineStyle: 'dashed',
      outlineColor: 'border.bold',
      outlineOffset: '4'
    }
  }}>
        <Story />
      </styled.div>],
  play: async ({
    canvasElement
  }) => {
    const root = await part(canvasElement, 'keep-together', '.cetec-printSection__root');
    await expect(getComputedStyle(root).breakInside).toBe('avoid');
  }
}`,...(f=(w=a.parameters)==null?void 0:w.docs)==null?void 0:f.source},description:{story:"Fixture `keep-together`: the section moves to the next page as one unit\nwhen it does not fit. In this story only, a dashed outline marks the unit.\nIt is not part of the recipe and does not print.",...(b=(_=a.parameters)==null?void 0:_.docs)==null?void 0:b.description}}};var k,B,T,v,C;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    fixture: printFixture('printSection', 'untitled')
  },
  play: async ({
    canvasElement
  }) => {
    const root = await part(canvasElement, 'untitled', '.cetec-printSection__root');
    await expect(root.querySelector('.cetec-printSection__title')).toBeNull();
  }
}`,...(T=(B=i.parameters)==null?void 0:B.docs)==null?void 0:T.source},description:{story:"Fixture `untitled`: no title. The content starts at the top.",...(C=(v=i.parameters)==null?void 0:v.docs)==null?void 0:C.description}}};var E,F,z,I,O;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    fixture: printFixture('printSection', 'stacked')
  },
  play: async ({
    canvasElement
  }) => {
    const roots = canvasElement.querySelectorAll('[data-fixture="stacked"] .cetec-printSection__root');
    await expect(roots).toHaveLength(2);
    await expect(getComputedStyle(roots[0] as Element).marginTop).toBe('0px');
    await expect(parseFloat(getComputedStyle(roots[1] as Element).marginTop)).toBeGreaterThan(0);
  }
}`,...(z=(F=s.parameters)==null?void 0:F.docs)==null?void 0:z.source},description:{story:"Fixture `stacked`: space comes between sections, not above the first.",...(O=(I=s.parameters)==null?void 0:I.docs)==null?void 0:O.description}}};var q,A,L,j,P;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    thermal: true,
    size: pageSizes.label4x6,
    margins: 0.25,
    fit: 'page',
    h: '2xl'
  },
  play: async ({
    canvasElement
  }) => {
    const title = await part(canvasElement, 'titled', '.cetec-printSection__title');
    const style = getComputedStyle(title);
    await expect(style.color).toBe('rgb(0, 0, 0)');
    await expect(style.borderBottomColor).toBe('rgb(0, 0, 0)');
    await expect(style.getPropertyValue('--cetec-border-widths-paper-rule').trim()).toBe('1.5pt');
  }
}`,...(L=(A=c.parameters)==null?void 0:A.docs)==null?void 0:L.source},description:{story:"Fixture `titled` in thermal ink, on 4 × 6 in label stock. The title and its\nrule are black, and the rule is 1.5 pt.",...(P=(j=c.parameters)==null?void 0:j.docs)==null?void 0:P.description}}};export{a as KeepTogether,s as Stacked,c as Thermal,n as Titled,i as Untitled,et as __namedExportsOrder,tt as default};
