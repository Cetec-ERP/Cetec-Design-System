import{j as t,V as P,G as b,k as S,B as v}from"./iframe-B6RvJOop.js";import{b as B}from"./printFixtures-B6ed1-Cm.js";import{b as T}from"./printManifest-CV114kvx.js";import{a as k,d as E,p as O}from"./PrintFixture-RC2tlphL.js";import{C as j}from"./CodeBlock-Tc60SL0t.js";import"./preload-helper-Gb_arb4r.js";import"./index-HTq8a4kC.js";import"./textStyles-2ZSPTz2W.js";import"./colors-iEBmLtns.js";import"./radii-DfM2VzUD.js";import"./PrintPreview-C4BTcO-I.js";import"./usePrintPage-DkjbnZ68.js";import"./IconButton-Bkt0pmdh.js";import"./Spinner-Cgjy8-EF.js";import"./FieldContext-C0a9Zqrn.js";import"./useLocale-xASZbP7G.js";import"./dsPart-nnoJM9m6.js";import"./useControllableState-CRDcMOjD.js";const{expect:s,within:x}=__STORYBOOK_MODULE_TEST__,y=T(),C=E(y.pageFooter.declarations),_=({format:a,text:n})=>t.jsxs(P,{alignItems:"stretch",gap:"0",children:[t.jsx(b,{columns:2,gap:"0",children:["normal-ink","thermal-ink"].map(e=>t.jsx(k,{fixture:B("printDoc",e),label:e==="normal-ink"?"Normal ink":"Thermal ink",footer:t.jsx(S.span,{style:C,children:n})},e))}),t.jsx(v,{px:"24",py:"16",children:t.jsx(j,{title:"@page rule the Go helper writes",language:"css",code:O(y,a)})})]}),W={title:"Print/Page footer",component:_,parameters:{layout:"fullscreen",docs:{description:{component:'The page footer, the `print.pageFooter` text style. It prints page numbers,\nsuch as "Page 2" or "Page 2 of 3", in an `@page` margin box.\n\nA margin box cannot carry a class. So the Go print helper reads the footer\ndeclarations from `print-classes.json` and writes them into its `@page`\nrule. The declarations use token variables with literal fallbacks. Margin\nboxes read custom properties only from the `<html>` element, so the root\nclasses must go on `<html>`. Under `cetec-ink-thermal` the footer turns\nblack with no extra rule. The manifest also carries plain literal values for\nplaces with no variables, such as a browser print footer template.\n\nIn these stories a box in the bottom page margin stands in for the margin\nbox. It uses the manifest declarations, not the text style, so it shows\nwhat Go writes. Go may swap "Page" and "of" for the company language.'}}},tags:["autodocs"],args:{format:"page",text:"Page 2"},argTypes:{format:{control:"inline-radio",options:["page","pageOfPages"]}}},o={play:async({canvasElement:a})=>{const n=x(a),[e,w]=await n.findAllByText("Page 2");await s(getComputedStyle(e).fontSize).toBe("10px"),await s(getComputedStyle(e).color).toBe("rgb(107, 110, 118)"),await s(getComputedStyle(w).color).toBe("rgb(0, 0, 0)")}},r={args:{format:"pageOfPages",text:"Page 2 of 3"},play:async({canvasElement:a})=>{const e=await x(a).findAllByText("Page 2 of 3");await s(e).toHaveLength(2)}},X=["Page","PageOfPages"];var i,p,l,c,m;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const [normal, thermal] = await canvas.findAllByText('Page 2');
    // 7.5 pt is 10 px at 96 px per inch.
    await expect(getComputedStyle(normal as Element).fontSize).toBe('10px');
    // paper.inkSoft is neutral.70, #6B6E76.
    await expect(getComputedStyle(normal as Element).color).toBe('rgb(107, 110, 118)');
    await expect(getComputedStyle(thermal as Element).color).toBe('rgb(0, 0, 0)');
  }
}`,...(l=(p=o.parameters)==null?void 0:p.docs)==null?void 0:l.source},description:{story:'The page number alone: "Page 2".',...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.description}}};var g,f,d,h,u;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    format: 'pageOfPages',
    text: 'Page 2 of 3'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const footers = await canvas.findAllByText('Page 2 of 3');
    await expect(footers).toHaveLength(2);
  }
}`,...(d=(f=r.parameters)==null?void 0:f.docs)==null?void 0:d.source},description:{story:'The page number with the page count: "Page 2 of 3".',...(u=(h=r.parameters)==null?void 0:h.docs)==null?void 0:u.description}}};export{o as Page,r as PageOfPages,X as __namedExportsOrder,W as default};
