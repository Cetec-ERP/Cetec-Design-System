import{j as s,B as Y,k as f}from"./iframe-B861AzWe.js";import{p as h}from"./printFixtures-0K543kF7.js";import{P as J,f as X}from"./PrintFixture-B_rGiLtf.js";import{P as Z,a as ee}from"./PrintPreview-kzsG7U3N.js";import{u as te}from"./usePrintPage-BzuNGdMS.js";import"./preload-helper-B6kYaje4.js";import"./CodeBlock-D8CLKwX7.js";import"./IconButton-BltImcZV.js";import"./Spinner-CjdL_ata.js";import"./FieldContext-CrxIKTA8.js";import"./useLocale-BADWnSrj.js";import"./dsPart-nnoJM9m6.js";import"./useControllableState-BZ-X75e6.js";const{expect:n,waitFor:ae}=__STORYBOOK_MODULE_TEST__,o=(t,e,a)=>t.querySelector(`[data-fixture="${e}"] .cetec-printHeader__${a}`),u={width:17,height:5.5,margin:.5},ne=({fixture:t})=>{const{margins:e}=te(),a={paddingTop:e.top,paddingRight:e.right,paddingBottom:e.bottom,paddingLeft:e.left},r={height:`${u.height-2*u.margin}in`};return s.jsx(f.div,{className:X(t).join(" "),"data-fixture":t.name,style:a,children:s.jsx(f.div,{"data-fixture-body":"",style:r,columnCount:2,columnFill:"auto",columnGap:"96",columnRuleStyle:"dashed",columnRuleWidth:"1",columnRuleColor:"border",dangerouslySetInnerHTML:{__html:t.html}})})},we={title:"Print/Header",component:J,parameters:{layout:"fullscreen",docs:{description:{component:`The document header, the \`printHeader\` recipe, for the kit element \`header\`.
It has no React component. The Go print helper writes the classes from the
fixtures.

It holds the brand bar, the eyebrow line (kind, number, and status tags),
the title, the sub line, and the meta list. The meta list aligns right. Its
KeyFacts use the \`horizontal\` layout, so labels size themselves and end in
a colon. The company name always prints: a wordmark logo carries it, a
badge logo prints it beside the badge, and with no logo it prints as text.
Each story renders one fixture from \`src/recipes/printHeader.fixtures.json\` on a
Letter page.`}}},tags:["autodocs"],args:{recipe:"printHeader",fixture:h("printHeader","quote-wordmark"),paper:"letter",fit:"width",h:"lg"},argTypes:{paper:{control:"inline-radio",options:["letter","a4","legal"]},fixture:{control:!1},size:{control:!1},footer:{control:!1}}},l={play:async({canvasElement:t})=>{const e=o(t,"quote-wordmark","logo");await n(e==null?void 0:e.getAttribute("alt")).toBe("Brightline Electronics"),await ae(()=>n(e.naturalWidth).toBeGreaterThan(0)),await n(e==null?void 0:e.offsetHeight).toBe(37),await n(o(t,"quote-wordmark","companyName")).toBe(null);const a=o(t,"quote-wordmark","meta"),r=[...(a==null?void 0:a.querySelectorAll(".cetec-keyFact__labelWithColon"))??[]].map(y=>getComputedStyle(y).display);await n(r).toEqual(Array(3).fill("inline"));const i=a==null?void 0:a.querySelector(".cetec-keyFact__label");await n(getComputedStyle(i).fontSize).toBe("12.6667px")}},c={args:{fixture:h("printHeader","invoice-badge")},play:async({canvasElement:t})=>{var a;const e=o(t,"invoice-badge","logo");await n(e==null?void 0:e.offsetHeight).toBe(43),await n((a=o(t,"invoice-badge","companyName"))==null?void 0:a.textContent).toBe("Brightline Electronics")}},d={args:{fixture:h("printHeader","credit-memo-no-logo")},play:async({canvasElement:t})=>{await n(o(t,"credit-memo-no-logo","logo")).toBe(null),await n(o(t,"credit-memo-no-logo","title")).toBe(null);const e=o(t,"credit-memo-no-logo","companyName");await n(getComputedStyle(e).textTransform).toBe("uppercase")}},p={args:{fixture:h("printHeader","long-title")},play:async({canvasElement:t})=>{const e=o(t,"long-title","title"),a=parseFloat(getComputedStyle(e).lineHeight);await n(e.offsetHeight).toBeGreaterThan(a*1.5);const r=o(t,"long-title","meta"),i=r.querySelector(".cetec-keyFact__root");await n(r.offsetWidth).toBeGreaterThanOrEqual(i.scrollWidth)}},m={args:{thermal:!0},play:async({canvasElement:t})=>{const e=t.querySelector('[data-fixture="quote-wordmark"] .cetec-tag');await n(getComputedStyle(e).color).toBe("rgb(0, 0, 0)");const a=o(t,"quote-wordmark","sub");await n(getComputedStyle(a).color).toBe("rgb(0, 0, 0)")}},g={args:{fixture:h("printHeader","first-page-only")},render:({fixture:t})=>s.jsx(Y,{h:"lg",children:s.jsx(Z,{fit:"width","aria-label":t.name,children:s.jsx(ee,{size:{width:u.width,height:u.height,unit:"in"},margins:u.margin,children:s.jsx(ne,{fixture:t})})})}),play:async({canvasElement:t})=>{const e=t.querySelector('[data-fixture="first-page-only"] [data-fixture-body]'),a=e.getBoundingClientRect(),r=a.left+a.width/2,i=e.querySelectorAll(".cetec-printHeader__root");await n(i).toHaveLength(1);const y=i[0].getBoundingClientRect();await n(y.right).toBeLessThan(r);const w=e.querySelectorAll("p"),V=w[w.length-1];await n(V.getBoundingClientRect().left).toBeGreaterThan(r)}},fe=["QuoteWordmark","InvoiceBadge","CreditMemoNoLogo","LongTitle","QuoteThermal","FirstPageOnly"];var x,b,B,T,S;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const logo = part(canvasElement, 'quote-wordmark', 'logo');
    await expect(logo?.getAttribute('alt')).toBe('Brightline Electronics');
    await waitFor(() => expect((logo as HTMLImageElement).naturalWidth).toBeGreaterThan(0));
    // sizes.headerWordmark is 28 pt, which is 37.33 px.
    await expect(logo?.offsetHeight).toBe(37);
    await expect(part(canvasElement, 'quote-wordmark', 'companyName')).toBe(null);
    const metaList = part(canvasElement, 'quote-wordmark', 'meta');
    const colons = [...(metaList?.querySelectorAll('.cetec-keyFact__labelWithColon') ?? [])].map(label => getComputedStyle(label).display);
    await expect(colons).toEqual(Array(3).fill('inline'));
    const label = metaList?.querySelector('.cetec-keyFact__label');
    // print.fieldValue is 9.5 pt, which is 12.67 px.
    await expect(getComputedStyle(label as Element).fontSize).toBe('12.6667px');
  }
}`,...(B=(b=l.parameters)==null?void 0:b.docs)==null?void 0:B.source},description:{story:"Fixture `quote-wordmark`: a quote with a wordmark logo and a revised tag.\nThe wordmark carries the company name.",...(S=(T=l.parameters)==null?void 0:T.docs)==null?void 0:S.description}}};var H,k,E,q,v;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    fixture: printFixture('printHeader', 'invoice-badge')
  },
  play: async ({
    canvasElement
  }) => {
    const logo = part(canvasElement, 'invoice-badge', 'logo');
    // sizes.headerBadge is 32 pt, which is 42.67 px.
    await expect(logo?.offsetHeight).toBe(43);
    await expect(part(canvasElement, 'invoice-badge', 'companyName')?.textContent).toBe('Brightline Electronics');
  }
}`,...(E=(k=c.parameters)==null?void 0:k.docs)==null?void 0:E.source},description:{story:"Fixture `invoice-badge`: an invoice with a badge logo and a payment status\ntag. The company name prints beside the badge.",...(v=(q=c.parameters)==null?void 0:q.docs)==null?void 0:v.description}}};var C,P,_,F,L;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    fixture: printFixture('printHeader', 'credit-memo-no-logo')
  },
  play: async ({
    canvasElement
  }) => {
    await expect(part(canvasElement, 'credit-memo-no-logo', 'logo')).toBe(null);
    await expect(part(canvasElement, 'credit-memo-no-logo', 'title')).toBe(null);
    const name = part(canvasElement, 'credit-memo-no-logo', 'companyName');
    await expect(getComputedStyle(name as Element).textTransform).toBe('uppercase');
  }
}`,...(_=(P=d.parameters)==null?void 0:P.docs)==null?void 0:_.source},description:{story:"Fixture `credit-memo-no-logo`: a credit memo with no logo and no title.\nThe company name prints as text.",...(L=(F=d.parameters)==null?void 0:F.docs)==null?void 0:L.description}}};var M,R,W,j,A;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    fixture: printFixture('printHeader', 'long-title')
  },
  play: async ({
    canvasElement
  }) => {
    const title = part(canvasElement, 'long-title', 'title') as HTMLElement;
    const lineHeight = parseFloat(getComputedStyle(title).lineHeight);
    await expect(title.offsetHeight).toBeGreaterThan(lineHeight * 1.5);
    const metaList = part(canvasElement, 'long-title', 'meta') as HTMLElement;
    const fact = metaList.querySelector('.cetec-keyFact__root') as HTMLElement;
    await expect(metaList.offsetWidth).toBeGreaterThanOrEqual(fact.scrollWidth);
  }
}`,...(W=(R=p.parameters)==null?void 0:R.docs)==null?void 0:W.source},description:{story:"Fixture `long-title`: a long title wraps. The meta list keeps its width.",...(A=(j=p.parameters)==null?void 0:j.docs)==null?void 0:A.description}}};var G,z,N,O,I;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    thermal: true
  },
  play: async ({
    canvasElement
  }) => {
    const tag = canvasElement.querySelector('[data-fixture="quote-wordmark"] .cetec-tag');
    await expect(getComputedStyle(tag as Element).color).toBe('rgb(0, 0, 0)');
    const sub = part(canvasElement, 'quote-wordmark', 'sub');
    await expect(getComputedStyle(sub as Element).color).toBe('rgb(0, 0, 0)');
  }
}`,...(N=(z=m.parameters)==null?void 0:z.docs)==null?void 0:N.source},description:{story:"Fixture `quote-wordmark` in thermal ink, on Letter. Tags print as black\noutlines and every ink is black.",...(I=(O=m.parameters)==null?void 0:O.docs)==null?void 0:I.description}}};var Q,$,D,K,U;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    fixture: printFixture('printHeader', 'first-page-only')
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
    const body = canvasElement.querySelector('[data-fixture="first-page-only"] [data-fixture-body]') as HTMLElement;
    const page = body.getBoundingClientRect();
    const middle = page.left + page.width / 2;
    const headers = body.querySelectorAll('.cetec-printHeader__root');
    await expect(headers).toHaveLength(1);
    const header = (headers[0] as HTMLElement).getBoundingClientRect();
    await expect(header.right).toBeLessThan(middle);
    // Content runs onto page 2.
    const lines = body.querySelectorAll('p');
    const last = lines[lines.length - 1] as HTMLElement;
    await expect(last.getBoundingClientRect().left).toBeGreaterThan(middle);
  }
}`,...(D=($=g.parameters)==null?void 0:$.docs)==null?void 0:D.source},description:{story:"Fixture `first-page-only` on two pages, each 8.5 × 5.5 in, side by side.\nThe header is the first block in the flow, so only page 1 has it. Page 2\nstarts with content. The dashed line is the page edge.",...(U=(K=g.parameters)==null?void 0:K.docs)==null?void 0:U.description}}};export{d as CreditMemoNoLogo,g as FirstPageOnly,c as InvoiceBadge,p as LongTitle,m as QuoteThermal,l as QuoteWordmark,fe as __namedExportsOrder,we as default};
