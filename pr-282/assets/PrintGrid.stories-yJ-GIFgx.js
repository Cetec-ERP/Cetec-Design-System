import{p as c}from"./printFixtures-0K543kF7.js";import{P as L}from"./PrintFixture-B_rGiLtf.js";import{p as P}from"./usePrintPage-BzuNGdMS.js";import"./iframe-B861AzWe.js";import"./preload-helper-B6kYaje4.js";import"./CodeBlock-D8CLKwX7.js";import"./IconButton-BltImcZV.js";import"./Spinner-CjdL_ata.js";import"./FieldContext-CrxIKTA8.js";import"./useLocale-BADWnSrj.js";import"./dsPart-nnoJM9m6.js";import"./useControllableState-BZ-X75e6.js";import"./PrintPreview-kzsG7U3N.js";const{expect:t}=__STORYBOOK_MODULE_TEST__,l=async(e,n)=>{const m=e.querySelector(`[data-fixture="${n}"] .cetec-printGrid`);return await t(m).not.toBeNull(),getComputedStyle(m).gridTemplateColumns.split(" ").length},u=(e,n)=>[...e.querySelectorAll(`[data-fixture="${n}"] .cetec-keyFact__inner`)].map(m=>getComputedStyle(m).flexDirection),X={title:"Print/Grid",component:L,parameters:{layout:"fullscreen",docs:{description:{component:"The print grid, the `printGrid` recipe, for the kit element `grid`. It puts\nany elements side by side. It has no React component. The Go print helper\nwrites the classes from the fixtures.\n\n`columns` is `2`, `3`, `4`, or `fit`. `fit` makes as many columns as fit,\neach at least 1.6 in wide. The elements are the cells, with no wrapper.\nEach cell is an inline size container, so a part in a narrow cell can change\nits layout. An aligned KeyFact stacks its label over its value in a cell\nnarrower than 15rem. Each story renders one fixture from\n`src/recipes/printGrid.fixtures.json` on a Letter page with 0.5 in margins,\nso the content is 7.5 in wide."}}},tags:["autodocs"],args:{recipe:"printGrid",fixture:c("printGrid","columns-2"),paper:"letter",h:"lg",fit:"width"},argTypes:{paper:{control:"inline-radio",options:["letter","a4","legal"]},fixture:{control:!1},size:{control:!1},footer:{control:!1}}},a={play:async({canvasElement:e})=>{await t(await l(e,"columns-2")).toBe(2);const n=e.querySelector('[data-fixture="columns-2"] .cetec-printGrid > *');await t(getComputedStyle(n).containerType).toBe("inline-size"),await t(u(e,"columns-2")).toEqual(Array(4).fill("row"))}},r={args:{fixture:c("printGrid","columns-3")},play:async({canvasElement:e})=>{await t(await l(e,"columns-3")).toBe(3),await t(u(e,"columns-3")).toEqual(Array(6).fill("column"))}},s={args:{fixture:c("printGrid","columns-4")},play:async({canvasElement:e})=>{await t(await l(e,"columns-4")).toBe(4),await t(u(e,"columns-4")).toEqual(Array(4).fill("column"))}},o={args:{fixture:c("printGrid","columns-fit")},play:async({canvasElement:e})=>{await t(await l(e,"columns-fit")).toBe(4)}},i={args:{fixture:c("printGrid","columns-fit"),thermal:!0,size:P.label4x6,margins:.25},play:async({canvasElement:e})=>{await t(await l(e,"columns-fit")).toBe(2)}},Z=["Columns2","Columns3","Columns4","ColumnsFit","ColumnsFitThermalLabel"];var p,d,f,y,w;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    await expect(await columnCount(canvasElement, 'columns-2')).toBe(2);
    const cell = canvasElement.querySelector('[data-fixture="columns-2"] .cetec-printGrid > *');
    await expect(getComputedStyle(cell as Element).containerType).toBe('inline-size');
    // Cells are wider than 15rem, so labels stay beside values.
    await expect(factDirections(canvasElement, 'columns-2')).toEqual(Array(4).fill('row'));
  }
}`,...(f=(d=a.parameters)==null?void 0:d.docs)==null?void 0:f.source},description:{story:"Fixture `columns-2`: two columns.",...(w=(y=a.parameters)==null?void 0:y.docs)==null?void 0:w.description}}};var x,h,g,C,E;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    fixture: printFixture('printGrid', 'columns-3')
  },
  play: async ({
    canvasElement
  }) => {
    await expect(await columnCount(canvasElement, 'columns-3')).toBe(3);
    // Cells are narrower than 15rem, so each KeyFact stacks.
    await expect(factDirections(canvasElement, 'columns-3')).toEqual(Array(6).fill('column'));
  }
}`,...(g=(h=r.parameters)==null?void 0:h.docs)==null?void 0:g.source},description:{story:"Fixture `columns-3`: three columns.",...(E=(C=r.parameters)==null?void 0:C.docs)==null?void 0:E.description}}};var F,S,G,B,v;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    fixture: printFixture('printGrid', 'columns-4')
  },
  play: async ({
    canvasElement
  }) => {
    await expect(await columnCount(canvasElement, 'columns-4')).toBe(4);
    // Cells are narrower than 15rem, so each KeyFact stacks.
    await expect(factDirections(canvasElement, 'columns-4')).toEqual(Array(4).fill('column'));
  }
}`,...(G=(S=s.parameters)==null?void 0:S.docs)==null?void 0:G.source},description:{story:"Fixture `columns-4`: four columns.",...(v=(B=s.parameters)==null?void 0:B.docs)==null?void 0:v.description}}};var T,q,A,_,b;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    fixture: printFixture('printGrid', 'columns-fit')
  },
  play: async ({
    canvasElement
  }) => {
    await expect(await columnCount(canvasElement, 'columns-fit')).toBe(4);
  }
}`,...(A=(q=o.parameters)==null?void 0:q.docs)==null?void 0:A.source},description:{story:"Fixture `columns-fit`: as many columns as fit, each at least 1.6 in wide. A\n7.5 in content width fits four, so the fifth cell starts a new row.",...(b=(_=o.parameters)==null?void 0:_.docs)==null?void 0:b.description}}};var k,z,D,O,K;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    fixture: printFixture('printGrid', 'columns-fit'),
    thermal: true,
    size: pageSizes.label4x6,
    margins: 0.25
  },
  play: async ({
    canvasElement
  }) => {
    await expect(await columnCount(canvasElement, 'columns-fit')).toBe(2);
  }
}`,...(D=(z=i.parameters)==null?void 0:z.docs)==null?void 0:D.source},description:{story:"Fixture `columns-fit` on 4 × 6 in label stock in thermal ink. A 3.5 in\ncontent width fits two columns.",...(K=(O=i.parameters)==null?void 0:O.docs)==null?void 0:K.description}}};export{a as Columns2,r as Columns3,s as Columns4,o as ColumnsFit,i as ColumnsFitThermalLabel,Z as __namedExportsOrder,X as default};
