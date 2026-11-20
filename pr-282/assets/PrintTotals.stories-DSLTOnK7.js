import{j as l,B as $,k as T}from"./iframe-B861AzWe.js";import{p as x}from"./printFixtures-0K543kF7.js";import{P as K,f as Y}from"./PrintFixture-B_rGiLtf.js";import{P as J,a as Q}from"./PrintPreview-kzsG7U3N.js";import{u as X}from"./usePrintPage-BzuNGdMS.js";import"./preload-helper-B6kYaje4.js";import"./CodeBlock-D8CLKwX7.js";import"./IconButton-BltImcZV.js";import"./Spinner-CjdL_ata.js";import"./FieldContext-CrxIKTA8.js";import"./useLocale-BADWnSrj.js";import"./dsPart-nnoJM9m6.js";import"./useControllableState-BZ-X75e6.js";const{expect:n}=__STORYBOOK_MODULE_TEST__,c=(e,t,a)=>[...e.querySelectorAll(`[data-fixture="${t}"] .cetec-keyFact__${a}`)].map(o=>getComputedStyle(o)),h={width:17,height:5.5,margin:.5},Z=({fixture:e})=>{const{margins:t}=X(),a={paddingTop:t.top,paddingRight:t.right,paddingBottom:t.bottom,paddingLeft:t.left},o={height:`${h.height-2*h.margin}in`};return l.jsx(T.div,{className:Y(e).join(" "),"data-fixture":e.name,style:a,children:l.jsx(T.div,{"data-fixture-body":"",style:o,columnCount:2,columnFill:"auto",columnGap:"96",columnRuleStyle:"dashed",columnRuleWidth:"1",columnRuleColor:"border",dangerouslySetInnerHTML:{__html:e.html}})})},ue={title:"Print/Totals",component:K,parameters:{layout:"fullscreen",docs:{description:{component:`Totals, the \`printTotals\` recipe, for the kit element \`totals\`. It prints the
money stack once, after the last line. It has no React component. The Go
print helper writes the classes from the fixtures.

Each row is a KeyFact in the \`aligned\` layout. Labels and values align
right, in two columns, at most 3.4 in wide. Values use tabular figures and
never wrap. A total row prints large in full ink with a hairline above it.
A danger row prints in the alert ink. The stack is kept together on one
page. Each story renders one fixture from \`src/recipes/printTotals.fixtures.json\`
on a Letter page.`}}},tags:["autodocs"],args:{recipe:"printTotals",fixture:x("printTotals","usd"),paper:"letter",fit:"width",h:"lg"},argTypes:{paper:{control:"inline-radio",options:["letter","a4","legal"]},fixture:{control:!1},size:{control:!1},footer:{control:!1}}},p={name:"USD",play:async({canvasElement:e})=>{var s,w,f,b;const t=e.querySelector('[data-fixture="usd"] .cetec-printTotals');await n(t.offsetWidth).toBe(326),await n(getComputedStyle(t).breakInside).toBe("avoid");const a=c(e,"usd","value"),o=a.map(y=>y.justifyContent);await n(new Set(o)).toEqual(new Set(["flex-end"]));const i=c(e,"usd","text");await n(i.map(y=>y.whiteSpace)).toEqual(Array(5).fill("nowrap")),await n((s=i[0])==null?void 0:s.fontVariantNumeric).toBe("tabular-nums");const r=c(e,"usd","label");await n((w=r[4])==null?void 0:w.borderTopStyle).toBe("solid"),await n((f=r[3])==null?void 0:f.borderTopStyle).toBe("none"),await n((b=a[4])==null?void 0:b.fontSize).toBe("18.6667px")}},d={args:{fixture:x("printTotals","german-retainage")},play:async({canvasElement:e})=>{var o,i,r,s;const t=c(e,"german-retainage","label"),a=c(e,"german-retainage","text");await n((o=t[3])==null?void 0:o.color).toBe((i=a[3])==null?void 0:i.color),await n((r=a[3])==null?void 0:r.color).not.toBe((s=a[2])==null?void 0:s.color)}},g={args:{fixture:x("printTotals","check-stub")}},u={args:{fixture:x("printTotals","german-retainage"),thermal:!0},play:async({canvasElement:e})=>{const t=c(e,"german-retainage","text");await n(new Set(t.map(a=>a.color))).toEqual(new Set(["rgb(0, 0, 0)"]))}},m={args:{fixture:x("printTotals","next-page")},render:({fixture:e})=>l.jsx($,{h:"lg",children:l.jsx(J,{fit:"width","aria-label":e.name,children:l.jsx(Q,{size:{width:h.width,height:h.height,unit:"in"},margins:h.margin,children:l.jsx(Z,{fixture:e})})})}),play:async({canvasElement:e})=>{const t=e.querySelector('[data-fixture="next-page"] [data-fixture-body]'),a=t.querySelector(".cetec-printTotals"),o=t.querySelectorAll("p"),i=o[o.length-1],r=t.getBoundingClientRect(),s=a.getBoundingClientRect();await n(i.getBoundingClientRect().right).toBeLessThan(r.left+r.width/2),await n(s.left).toBeGreaterThan(r.left+r.width/2),await n(s.top-r.top).toBeLessThan(r.height/10)}},me=["Usd","GermanRetainage","CheckStub","GermanRetainageThermal","MovesToNextPage"];var S,B,v,P,E;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'USD',
  play: async ({
    canvasElement
  }) => {
    const root = canvasElement.querySelector('[data-fixture="usd"] .cetec-printTotals') as HTMLElement;
    // sizes.totalsWidth is 3.4 in, which is 326.4 px before the preview scale.
    await expect(root.offsetWidth).toBe(326);
    await expect(getComputedStyle(root).breakInside).toBe('avoid');
    const values = styles(canvasElement, 'usd', 'value');
    const rights = values.map(style => style.justifyContent);
    await expect(new Set(rights)).toEqual(new Set(['flex-end']));
    const texts = styles(canvasElement, 'usd', 'text');
    await expect(texts.map(style => style.whiteSpace)).toEqual(Array(5).fill('nowrap'));
    await expect(texts[0]?.fontVariantNumeric).toBe('tabular-nums');
    const labels = styles(canvasElement, 'usd', 'label');
    await expect(labels[4]?.borderTopStyle).toBe('solid');
    await expect(labels[3]?.borderTopStyle).toBe('none');
    // print.total is 14 pt, which is 18.67 px.
    await expect(values[4]?.fontSize).toBe('18.6667px');
  }
}`,...(v=(B=p.parameters)==null?void 0:B.docs)==null?void 0:v.source},description:{story:"Fixture `usd`: a USD invoice with freight and tax. The balance due is the\ntotal row.",...(E=(P=p.parameters)==null?void 0:P.docs)==null?void 0:E.description}}};var k,C,R,q,F;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    fixture: printFixture('printTotals', 'german-retainage')
  },
  play: async ({
    canvasElement
  }) => {
    const labels = styles(canvasElement, 'german-retainage', 'label');
    const texts = styles(canvasElement, 'german-retainage', 'text');
    // paper.inkAlert is red.50.
    await expect(labels[3]?.color).toBe(texts[3]?.color);
    await expect(texts[3]?.color).not.toBe(texts[2]?.color);
  }
}`,...(R=(C=d.parameters)==null?void 0:C.docs)==null?void 0:R.source},description:{story:"Fixture `german-retainage`: the German document format, with retainage\nafter the total in the alert ink.",...(F=(q=d.parameters)==null?void 0:q.docs)==null?void 0:F.description}}};var L,j,_,M,G;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    fixture: printFixture('printTotals', 'check-stub')
  }
}`,...(_=(j=g.parameters)==null?void 0:j.docs)==null?void 0:_.source},description:{story:"Fixture `check-stub`: one total row, as a check remittance stub prints it.",...(G=(M=g.parameters)==null?void 0:M.docs)==null?void 0:G.description}}};var A,z,H,U,D;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    fixture: printFixture('printTotals', 'german-retainage'),
    thermal: true
  },
  play: async ({
    canvasElement
  }) => {
    const texts = styles(canvasElement, 'german-retainage', 'text');
    await expect(new Set(texts.map(style => style.color))).toEqual(new Set(['rgb(0, 0, 0)']));
  }
}`,...(H=(z=u.parameters)==null?void 0:z.docs)==null?void 0:H.source},description:{story:"Fixture `german-retainage` in thermal ink. Every ink prints black, the\nretainage too.",...(D=(U=u.parameters)==null?void 0:U.docs)==null?void 0:D.description}}};var I,N,O,W,V;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    fixture: printFixture('printTotals', 'next-page')
  },
  render: ({
    fixture
  }) => <Box h="lg">
      <PrintPreview fit="width" aria-label={fixture.name}>
        <PrintPage size={{
        width: twoPages.width,
        height: twoPages.height,
        unit: 'in'
      }} margins={twoPages.margin}>
          <TwoPagesMarkup fixture={fixture} />
        </PrintPage>
      </PrintPreview>
    </Box>,
  play: async ({
    canvasElement
  }) => {
    const body = canvasElement.querySelector('[data-fixture="next-page"] [data-fixture-body]') as HTMLElement;
    const totals = body.querySelector('.cetec-printTotals') as HTMLElement;
    const lines = body.querySelectorAll('p');
    const last = lines[lines.length - 1] as HTMLElement;
    const page = body.getBoundingClientRect();
    const box = totals.getBoundingClientRect();
    // Every line is on page 1. The totals start at the top of page 2.
    await expect(last.getBoundingClientRect().right).toBeLessThan(page.left + page.width / 2);
    await expect(box.left).toBeGreaterThan(page.left + page.width / 2);
    await expect(box.top - page.top).toBeLessThan(page.height / 10);
  }
}`,...(O=(N=m.parameters)==null?void 0:N.docs)==null?void 0:O.source},description:{story:"Fixture `next-page` on two pages, each 8.5 × 5.5 in, side by side. The\ncontent fills most of page 1. The totals do not fit, so they move whole to\nthe top of page 2. The dashed line is the page edge.",...(V=(W=m.parameters)==null?void 0:W.docs)==null?void 0:V.description}}};export{g as CheckStub,d as GermanRetainage,u as GermanRetainageThermal,m as MovesToNextPage,p as Usd,me as __namedExportsOrder,ue as default};
