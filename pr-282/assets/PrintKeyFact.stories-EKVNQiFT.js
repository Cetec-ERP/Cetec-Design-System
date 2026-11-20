import{p as o}from"./printFixtures-0K543kF7.js";import{P as ce}from"./PrintFixture-B_rGiLtf.js";import{p as le}from"./usePrintPage-BzuNGdMS.js";import"./iframe-B861AzWe.js";import"./preload-helper-B6kYaje4.js";import"./CodeBlock-D8CLKwX7.js";import"./IconButton-BltImcZV.js";import"./Spinner-CjdL_ata.js";import"./FieldContext-CrxIKTA8.js";import"./useLocale-BADWnSrj.js";import"./dsPart-nnoJM9m6.js";import"./useControllableState-BZ-X75e6.js";import"./PrintPreview-kzsG7U3N.js";const pe={keyFactStack:"15rem"},{expect:n}=__STORYBOOK_MODULE_TEST__,r=(t,e,a)=>[...t.querySelectorAll(`[data-fixture="${e}"] .cetec-keyFact__${a}`)].map(s=>getComputedStyle(s)),Se={title:"Print/KeyFact",component:ce,parameters:{layout:"fullscreen",docs:{description:{component:"KeyFact on paper, for the kit element `key_fact`. The Go print helper\nwrites the same markup and classes as the `KeyFact` component, with no\ntooltip or link.\n\nThe kit element has no `layout` prop. The element around it picks one. A\n`grid` or a `section` writes `aligned`. A `header` writes `horizontal`.\nLabels print in the caps style and values never truncate. Each story renders\none fixture from `src/recipes/keyFact.fixtures.json` on a Letter page."}}},tags:["autodocs"],args:{recipe:"keyFact",fixture:o("keyFact","aligned"),paper:"letter",fit:"width",h:"lg"},argTypes:{paper:{control:"inline-radio",options:["letter","a4","legal"]},fixture:{control:!1},size:{control:!1},footer:{control:!1}}},i={play:async({canvasElement:t})=>{const[e]=r(t,"aligned","label");await n(e==null?void 0:e.fontSize).toBe("9.33333px"),await n(e==null?void 0:e.textTransform).toBe("uppercase"),await n(e==null?void 0:e.width).toBe("96px")}},c={args:{fixture:o("keyFact","types")},play:async({canvasElement:t})=>{var s;const e=r(t,"types","text"),a=e.map(ie=>ie.fontVariantNumeric);await n(a).toEqual(["normal","tabular-nums","normal","normal","tabular-nums","tabular-nums"]),await n((s=e[2])==null?void 0:s.whiteSpace).toBe("nowrap")}},l={args:{fixture:o("keyFact","aligned-grid")},play:async({canvasElement:t})=>{const e=[...t.querySelectorAll('[data-fixture="aligned-grid"] .cetec-keyFact__value')].map(s=>Math.round(s.getBoundingClientRect().left));await n(new Set([e[0],e[2],e[4]]).size).toBe(1),await n(e[1]).toBe(e[3]);const a=r(t,"aligned-grid","inner").map(s=>s.flexDirection);await n(a).toEqual(Array(5).fill("row"))}},p={args:{fixture:o("keyFact","aligned-grid"),size:{width:195,height:150,unit:"pt"},margins:0,fit:1,h:"xs"},play:async({canvasElement:t})=>{await n(pe.keyFactStack).toBe("15rem");const e=r(t,"aligned-grid","inner").map(s=>s.flexDirection);await n(e).toEqual(Array(5).fill("column"));const[a]=r(t,"aligned-grid","label");await n(a==null?void 0:a.width).not.toBe("96px")}},d={args:{fixture:o("keyFact","wrap")},play:async({canvasElement:t})=>{for(const e of t.querySelectorAll('[data-fixture="wrap"] .cetec-keyFact__text'))await n(getComputedStyle(e).whiteSpace).toBe("normal"),await n(e.scrollWidth).toBeLessThanOrEqual(e.clientWidth)}},m={args:{fixture:o("keyFact","horizontal")},play:async({canvasElement:t})=>{const e=r(t,"horizontal","labelWithColon");await n(e.map(a=>a.display)).toEqual(Array(3).fill("inline"))}},u={args:{fixture:o("keyFact","emphasis-total")},play:async({canvasElement:t})=>{const[,e]=r(t,"emphasis-total","value");await n(e==null?void 0:e.fontSize).toBe("18.6667px"),await n(e==null?void 0:e.color).toBe("rgb(41, 42, 46)")}},y={args:{fixture:o("keyFact","tone-danger")},play:async({canvasElement:t})=>{const[e]=r(t,"tone-danger","label"),[a]=r(t,"tone-danger","text");await n(e==null?void 0:e.color).toBe(a==null?void 0:a.color),await n(a==null?void 0:a.color).not.toBe("rgb(41, 42, 46)")}},g={args:{fixture:o("keyFact","tone-danger"),thermal:!0,size:le.label4x6,margins:.25},play:async({canvasElement:t})=>{const[e]=r(t,"tone-danger","label"),[a]=r(t,"tone-danger","text");await n(e==null?void 0:e.color).toBe("rgb(0, 0, 0)"),await n(a==null?void 0:a.color).toBe("rgb(0, 0, 0)")}},Ee=["Aligned","Types","AlignedGrid","AlignedGridStacked","Wrap","Horizontal","EmphasisTotal","ToneDanger","ToneDangerThermal"];var x,h,f,w,F;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const [label] = styles(canvasElement, 'aligned', 'label');
    // print.capsLabel is 7 pt, which is 9.33 px at 96 px per inch.
    await expect(label?.fontSize).toBe('9.33333px');
    await expect(label?.textTransform).toBe('uppercase');
    // sizes.keyFactLabel is 6rem.
    await expect(label?.width).toBe('96px');
  }
}`,...(f=(h=i.parameters)==null?void 0:h.docs)==null?void 0:f.source},description:{story:"Fixture `aligned`: one fact with a fixed label width.",...(F=(w=i.parameters)==null?void 0:w.docs)==null?void 0:F.description}}};var k,b,v,S,E;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    fixture: printFixture('keyFact', 'types')
  },
  play: async ({
    canvasElement
  }) => {
    const texts = styles(canvasElement, 'types', 'text');
    const numeric = texts.map(style => style.fontVariantNumeric);
    await expect(numeric).toEqual(['normal', 'tabular-nums', 'normal', 'normal', 'tabular-nums', 'tabular-nums']);
    await expect(texts[2]?.whiteSpace).toBe('nowrap');
  }
}`,...(v=(b=c.parameters)==null?void 0:b.docs)==null?void 0:v.source},description:{story:"Fixture `types`: each type in a 2-column grid. Number and currency use\ntabular figures. Money shows the digits Go formats, in the document format.",...(E=(S=c.parameters)==null?void 0:S.docs)==null?void 0:E.description}}};var B,T,z,A,_;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    fixture: printFixture('keyFact', 'aligned-grid')
  },
  play: async ({
    canvasElement
  }) => {
    const values = [...canvasElement.querySelectorAll('[data-fixture="aligned-grid"] .cetec-keyFact__value')].map(value => Math.round(value.getBoundingClientRect().left));
    // Facts 1, 3, and 5 are in the first column. Facts 2 and 4 are in the second.
    await expect(new Set([values[0], values[2], values[4]]).size).toBe(1);
    await expect(values[1]).toBe(values[3]);
    const directions = styles(canvasElement, 'aligned-grid', 'inner').map(style => style.flexDirection);
    await expect(directions).toEqual(Array(5).fill('row'));
  }
}`,...(z=(T=l.parameters)==null?void 0:T.docs)==null?void 0:z.source},description:{story:"Fixture `aligned-grid`: five aligned facts in a 2-column grid. The values of\neach column start at the same x.",...(_=(A=l.parameters)==null?void 0:A.docs)==null?void 0:_.description}}};var q,D,L,W,C;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    fixture: printFixture('keyFact', 'aligned-grid'),
    size: {
      width: 195,
      height: 150,
      unit: 'pt'
    },
    margins: 0,
    fit: 1,
    h: 'xs'
  },
  play: async ({
    canvasElement
  }) => {
    // The recipe query and the token must agree.
    await expect(containerSizes.keyFactStack).toBe('15rem');
    const directions = styles(canvasElement, 'aligned-grid', 'inner').map(style => style.flexDirection);
    await expect(directions).toEqual(Array(5).fill('column'));
    const [label] = styles(canvasElement, 'aligned-grid', 'label');
    await expect(label?.width).not.toBe('96px');
  }
}`,...(L=(D=p.parameters)==null?void 0:D.docs)==null?void 0:L.source},description:{story:"Fixture `aligned-grid` in a 260 px container, a page 195 pt wide with no\nmargins. Each cell is narrower than 15rem, so each fact stacks its label\nover its value.",...(C=(W=p.parameters)==null?void 0:W.docs)==null?void 0:C.description}}};var O,G,M,K,N;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    fixture: printFixture('keyFact', 'wrap')
  },
  play: async ({
    canvasElement
  }) => {
    for (const text of canvasElement.querySelectorAll<HTMLElement>('[data-fixture="wrap"] .cetec-keyFact__text')) {
      await expect(getComputedStyle(text).whiteSpace).toBe('normal');
      await expect(text.scrollWidth).toBeLessThanOrEqual(text.clientWidth);
    }
  }
}`,...(M=(G=d.parameters)==null?void 0:G.docs)==null?void 0:M.source},description:{story:"Fixture `wrap`: a long label and a long value wrap. Nothing truncates.",...(N=(K=d.parameters)==null?void 0:K.docs)==null?void 0:N.description}}};var H,P,R,V,$;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    fixture: printFixture('keyFact', 'horizontal')
  },
  play: async ({
    canvasElement
  }) => {
    const colons = styles(canvasElement, 'horizontal', 'labelWithColon');
    await expect(colons.map(style => style.display)).toEqual(Array(3).fill('inline'));
  }
}`,...(R=(P=m.parameters)==null?void 0:P.docs)==null?void 0:R.source},description:{story:"Fixture `horizontal`: the layout a header writes for its meta list. The\nlabel sizes itself and ends in a colon.",...($=(V=m.parameters)==null?void 0:V.docs)==null?void 0:$.description}}};var j,U,Y,I,J;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    fixture: printFixture('keyFact', 'emphasis-total')
  },
  play: async ({
    canvasElement
  }) => {
    const [, total] = styles(canvasElement, 'emphasis-total', 'value');
    // print.total is 14 pt, which is 18.67 px.
    await expect(total?.fontSize).toBe('18.6667px');
    // paper.ink is neutral.100.
    await expect(total?.color).toBe('rgb(41, 42, 46)');
  }
}`,...(Y=(U=u.parameters)==null?void 0:U.docs)==null?void 0:Y.source},description:{story:"Fixture `emphasis-total`: a total row prints large in full ink.",...(J=(I=u.parameters)==null?void 0:I.docs)==null?void 0:J.description}}};var Q,X,Z,ee,te;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    fixture: printFixture('keyFact', 'tone-danger')
  },
  play: async ({
    canvasElement
  }) => {
    const [label] = styles(canvasElement, 'tone-danger', 'label');
    const [text] = styles(canvasElement, 'tone-danger', 'text');
    // paper.inkAlert is red.50.
    await expect(label?.color).toBe(text?.color);
    await expect(text?.color).not.toBe('rgb(41, 42, 46)');
  }
}`,...(Z=(X=y.parameters)==null?void 0:X.docs)==null?void 0:Z.source},description:{story:"Fixture `tone-danger`: the label and the value print in the alert ink.",...(te=(ee=y.parameters)==null?void 0:ee.docs)==null?void 0:te.description}}};var ae,ne,re,se,oe;g.parameters={...g.parameters,docs:{...(ae=g.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    fixture: printFixture('keyFact', 'tone-danger'),
    thermal: true,
    size: pageSizes.label4x6,
    margins: 0.25
  },
  play: async ({
    canvasElement
  }) => {
    const [label] = styles(canvasElement, 'tone-danger', 'label');
    const [text] = styles(canvasElement, 'tone-danger', 'text');
    await expect(label?.color).toBe('rgb(0, 0, 0)');
    await expect(text?.color).toBe('rgb(0, 0, 0)');
  }
}`,...(re=(ne=g.parameters)==null?void 0:ne.docs)==null?void 0:re.source},description:{story:"Fixture `tone-danger` in thermal ink, on 4 × 6 in label stock. Thermal\nprinters have one ink, so the alert prints black.",...(oe=(se=g.parameters)==null?void 0:se.docs)==null?void 0:oe.description}}};export{i as Aligned,l as AlignedGrid,p as AlignedGridStacked,u as EmphasisTotal,m as Horizontal,y as ToneDanger,g as ToneDangerThermal,c as Types,d as Wrap,Ee as __namedExportsOrder,Se as default};
