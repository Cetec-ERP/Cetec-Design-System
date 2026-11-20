import{p as a}from"./printFixtures-0K543kF7.js";import{P as te}from"./PrintFixture-B_rGiLtf.js";import{p as re}from"./usePrintPage-BzuNGdMS.js";import"./iframe-B861AzWe.js";import"./preload-helper-B6kYaje4.js";import"./CodeBlock-D8CLKwX7.js";import"./IconButton-BltImcZV.js";import"./Spinner-CjdL_ata.js";import"./FieldContext-CrxIKTA8.js";import"./useLocale-BADWnSrj.js";import"./dsPart-nnoJM9m6.js";import"./useControllableState-BZ-X75e6.js";import"./PrintPreview-kzsG7U3N.js";const{expect:r}=__STORYBOOK_MODULE_TEST__,n=(e,t)=>[...e.querySelectorAll(`[data-fixture="${t}"] .cetec-printParty__root`)],u=e=>[...(e==null?void 0:e.children)??[]].map(t=>t.className.replace("cetec-printParty__","")),ge={title:"Print/Party",component:te,parameters:{layout:"fullscreen",docs:{description:{component:`A party, the \`printParty\` recipe, for the kit element \`party\`. It prints From,
Bill to, Ship to, or Remit to, and is the only element that prints an
address. It has no React component. The Go print helper writes the classes
from the fixtures.

The label comes first. Then the lines print in this order: attention, name,
address, country, and contact. Go skips an empty line. Line breaks in a
line print as they are. Inside a print grid, a hairline separates parties
side by side. Each story renders one fixture from
\`src/recipes/printParty.fixtures.json\` on a Letter page.`}}},tags:["autodocs"],args:{recipe:"printParty",fixture:a("printParty","all-lines"),paper:"letter",fit:"width",h:"lg"},argTypes:{paper:{control:"inline-radio",options:["letter","a4","legal"]},fixture:{control:!1},size:{control:!1},footer:{control:!1}}},i={play:async({canvasElement:e})=>{const[t]=n(e,"all-lines");await r(u(t)).toEqual(["label","attention","name","address","country","contact"]);const s=t==null?void 0:t.querySelector(".cetec-printParty__address");await r(getComputedStyle(s).whiteSpace).toBe("pre-line")}},o={args:{fixture:a("printParty","no-attention")},play:async({canvasElement:e})=>{const[t]=n(e,"no-attention");await r(u(t)).toEqual(["label","name","address","contact"])}},c={args:{fixture:a("printParty","no-contact")},play:async({canvasElement:e})=>{const[t]=n(e,"no-contact");await r(u(t)).toEqual(["label","attention","name","address"])}},p={args:{fixture:a("printParty","remit-no-name")},play:async({canvasElement:e})=>{const[t]=n(e,"remit-no-name");await r(u(t)).toEqual(["label","address"])}},l={args:{fixture:a("printParty","three-in-grid")},play:async({canvasElement:e})=>{const t=n(e,"three-in-grid").map(s=>getComputedStyle(s));await r(t.map(s=>s.borderLeftStyle)).toEqual(["none","solid","solid"]),await r(getComputedStyle(e.querySelector('[data-fixture="three-in-grid"]')).getPropertyValue("--cetec-border-widths-paper-rule")).toBe("1pt")}},d={args:{fixture:a("printParty","credit-memo")},play:async({canvasElement:e})=>{await r(n(e,"credit-memo")).toHaveLength(2)}},m={args:{fixture:a("printParty","with-key-facts")},play:async({canvasElement:e})=>{await r(n(e,"with-key-facts")).toHaveLength(3);const t=e.querySelectorAll('[data-fixture="with-key-facts"] .cetec-keyFact__root');await r(t).toHaveLength(4)}},y={args:{fixture:a("printParty","three-in-grid"),thermal:!0,size:re.label4x6,margins:.25},play:async({canvasElement:e})=>{const[,t]=n(e,"three-in-grid");await r(getComputedStyle(t).borderLeftColor).toBe("rgb(0, 0, 0)")}},xe=["AllLines","NoAttention","NoContact","RemitNoName","ThreeInGrid","CreditMemo","WithKeyFacts","ThreeInGridThermal"];var h,g,x,f,w;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const [party] = parties(canvasElement, 'all-lines');
    await expect(lines(party)).toEqual(['label', 'attention', 'name', 'address', 'country', 'contact']);
    const address = party?.querySelector('.cetec-printParty__address');
    await expect(getComputedStyle(address as Element).whiteSpace).toBe('pre-line');
  }
}`,...(x=(g=i.parameters)==null?void 0:g.docs)==null?void 0:x.source},description:{story:"Fixture `all-lines`: all five lines, with the attention line above the name.",...(w=(f=i.parameters)==null?void 0:f.docs)==null?void 0:w.description}}};var E,S,P,v,b;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    fixture: printFixture('printParty', 'no-attention')
  },
  play: async ({
    canvasElement
  }) => {
    const [party] = parties(canvasElement, 'no-attention');
    await expect(lines(party)).toEqual(['label', 'name', 'address', 'contact']);
  }
}`,...(P=(S=o.parameters)==null?void 0:S.docs)==null?void 0:P.source},description:{story:"Fixture `no-attention`: no attention line.",...(b=(v=o.parameters)==null?void 0:v.docs)==null?void 0:b.description}}};var F,_,q,k,L;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    fixture: printFixture('printParty', 'no-contact')
  },
  play: async ({
    canvasElement
  }) => {
    const [party] = parties(canvasElement, 'no-contact');
    await expect(lines(party)).toEqual(['label', 'attention', 'name', 'address']);
  }
}`,...(q=(_=c.parameters)==null?void 0:_.docs)==null?void 0:q.source},description:{story:"Fixture `no-contact`: no contact line.",...(L=(k=c.parameters)==null?void 0:k.docs)==null?void 0:L.description}}};var C,T,B,A,N;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    fixture: printFixture('printParty', 'remit-no-name')
  },
  play: async ({
    canvasElement
  }) => {
    const [party] = parties(canvasElement, 'remit-no-name');
    await expect(lines(party)).toEqual(['label', 'address']);
  }
}`,...(B=(T=p.parameters)==null?void 0:T.docs)==null?void 0:B.source},description:{story:"Fixture `remit-no-name`: a remit-to with a remit address set. It has no\nname line, so the remit text prints whole.",...(N=(A=p.parameters)==null?void 0:A.docs)==null?void 0:N.description}}};var I,R,G,H,z;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    fixture: printFixture('printParty', 'three-in-grid')
  },
  play: async ({
    canvasElement
  }) => {
    const styles = parties(canvasElement, 'three-in-grid').map(party => getComputedStyle(party));
    await expect(styles.map(style => style.borderLeftStyle)).toEqual(['none', 'solid', 'solid']);
    // The rule is 1 pt wide.
    await expect(getComputedStyle(canvasElement.querySelector('[data-fixture="three-in-grid"]') as Element).getPropertyValue('--cetec-border-widths-paper-rule')).toBe('1pt');
  }
}`,...(G=(R=l.parameters)==null?void 0:R.docs)==null?void 0:G.source},description:{story:"Fixture `three-in-grid`: Bill to, Ship to, and Remit to in a 3-column grid\non a Letter page. A hairline separates parties side by side.",...(z=(H=l.parameters)==null?void 0:H.docs)==null?void 0:z.description}}};var O,K,M,D,V;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    fixture: printFixture('printParty', 'credit-memo')
  },
  play: async ({
    canvasElement
  }) => {
    await expect(parties(canvasElement, 'credit-memo')).toHaveLength(2);
  }
}`,...(M=(K=d.parameters)==null?void 0:K.docs)==null?void 0:M.source},description:{story:"Fixture `credit-memo`: Bill to and Remit to only.",...(V=(D=d.parameters)==null?void 0:D.docs)==null?void 0:V.description}}};var W,j,U,Y,$;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    fixture: printFixture('printParty', 'with-key-facts')
  },
  play: async ({
    canvasElement
  }) => {
    await expect(parties(canvasElement, 'with-key-facts')).toHaveLength(3);
    const facts = canvasElement.querySelectorAll('[data-fixture="with-key-facts"] .cetec-keyFact__root');
    await expect(facts).toHaveLength(4);
  }
}`,...(U=(j=m.parameters)==null?void 0:j.docs)==null?void 0:U.source},description:{story:"Fixture `with-key-facts`: parties in a 3-column grid, then a fit grid of\nKeyFacts, as the top of an invoice prints them.",...($=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:$.description}}};var J,Q,X,Z,ee;y.parameters={...y.parameters,docs:{...(J=y.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    fixture: printFixture('printParty', 'three-in-grid'),
    thermal: true,
    size: pageSizes.label4x6,
    margins: 0.25
  },
  play: async ({
    canvasElement
  }) => {
    const [, second] = parties(canvasElement, 'three-in-grid');
    await expect(getComputedStyle(second as Element).borderLeftColor).toBe('rgb(0, 0, 0)');
  }
}`,...(X=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:X.source},description:{story:"Fixture `three-in-grid` in thermal ink, on 4 × 6 in label stock. Every ink\nand the hairline print black.",...(ee=(Z=y.parameters)==null?void 0:Z.docs)==null?void 0:ee.description}}};export{i as AllLines,d as CreditMemo,o as NoAttention,c as NoContact,p as RemitNoName,l as ThreeInGrid,y as ThreeInGridThermal,m as WithKeyFacts,xe as __namedExportsOrder,ge as default};
