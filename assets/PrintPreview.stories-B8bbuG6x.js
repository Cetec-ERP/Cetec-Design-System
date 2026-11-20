import{j as e,B as t,G as z,V as j,r as b,H as pe}from"./iframe-Bc_tAn7t.js";import{B as v}from"./Button-BHL-Y94d.js";import{p as a,u as me}from"./usePrintPage-C4wVVxXR.js";import{P as s,a as n}from"./PrintPreview-BJiL0HjA.js";import"./preload-helper-Bx88jSaX.js";import"./Spinner-B4BuY_S_.js";import"./FieldContext-D8lShs0W.js";const{expect:S,waitFor:ge,within:he}=__STORYBOOK_MODULE_TEST__,ye={title:"Components/PrintPreview",component:s,parameters:{layout:"fullscreen",docs:{description:{component:"Shows printed pages at their true proportions, scaled to fit the area.\n\n- `PrintPreview` measures itself and applies one scale to every page.\n- `PrintPage` takes the page size as a prop. It does not know what the\n  content is, so it works with server HTML in an iframe, an editable\n  canvas, or a rendered PDF page.\n- `usePrintPage` gives content the scale and page geometry."}}},tags:["autodocs"],argTypes:{fit:{control:"select",options:["page","width",.5,1],description:"`page` fits the whole page, `width` fits its width, a number is a fixed zoom",table:{defaultValue:{summary:"page"}}}},args:{fit:"page","aria-label":"Document preview"}},o=({title:r})=>{const{margins:i}=me(),d={paddingTop:i.top,paddingRight:i.right,paddingBottom:i.bottom,paddingLeft:i.left};return e.jsxs(j,{alignItems:"stretch",gap:"12",h:"full",style:d,children:[e.jsx(t,{as:"h2",fontSize:"24",fontWeight:"bold",children:r}),e.jsx(t,{as:"p",children:"Bill to: Example Manufacturing"}),e.jsx(t,{as:"p",children:"Ship to: 100 Main Street"}),e.jsxs(j,{alignItems:"stretch",gap:"4",borderTopWidth:"1",borderColor:"neutral.30",pt:"12",children:[e.jsx(t,{as:"p",children:"Line 1 · Widget · 4 × $12.00"}),e.jsx(t,{as:"p",children:"Line 2 · Bracket · 10 × $3.50"})]})]})},w={render:r=>e.jsx(t,{h:"lg",children:e.jsx(s,{...r,children:e.jsx(n,{size:a.letter,margins:.5,showMargins:!0,children:e.jsx(o,{title:"Invoice"})})})}),play:async({canvasElement:r})=>{const c=he(r).getByLabelText("Document preview").querySelector('[data-ds-component="PrintPage"]');await ge(()=>{S(c).not.toHaveAttribute("data-measuring")}),await S(c==null?void 0:c.getBoundingClientRect().width).toBeLessThan(816)}},p={render:r=>e.jsxs(z,{columns:2,gap:"0",children:[e.jsx(t,{h:"md",children:e.jsx(s,{...r,"aria-label":"Portrait label",children:e.jsx(n,{size:a.label4x6,orientation:"portrait",children:e.jsx(o,{title:"Portrait"})})})}),e.jsx(t,{h:"md",children:e.jsx(s,{...r,"aria-label":"Landscape label",children:e.jsx(n,{size:a.label4x6,orientation:"landscape",children:e.jsx(o,{title:"Landscape"})})})})]})},xe=[{name:"Letter",size:a.letter},{name:"A4",size:a.a4},{name:"Legal",size:a.legal},{name:"Label 4 × 2 in",size:a.label4x2},{name:"Label 2 × 1 in",size:a.label2x1},{name:"Custom 100 × 50 mm",size:{width:100,height:50,unit:"mm"}}],m={render:r=>e.jsx(z,{columns:3,gap:"0",children:xe.map(({name:i,size:d})=>e.jsx(t,{h:"xs",children:e.jsx(s,{...r,"aria-label":i,children:e.jsx(n,{size:d,children:e.jsx(t,{p:"8",children:e.jsx(t,{as:"p",children:i})})})})},i))})},g={render:r=>e.jsxs(z,{columns:2,gap:"0",children:[e.jsx(t,{h:"md",children:e.jsx(s,{...r,"aria-label":"Even margins",children:e.jsx(n,{size:a.letter,margins:1,showMargins:!0,children:e.jsx(o,{title:"1 in all sides"})})})}),e.jsx(t,{h:"md",children:e.jsx(s,{...r,"aria-label":"Mixed margins",children:e.jsx(n,{size:a.a4,margins:{top:30,right:15,bottom:20,left:25},showMargins:!0,children:e.jsx(o,{title:"Mixed, in mm"})})})})]})},h={args:{fit:"width"},render:r=>e.jsx(t,{h:"lg",children:e.jsxs(s,{...r,children:[e.jsx(n,{size:a.letter,margins:.5,showMargins:!0,children:e.jsx(o,{title:"Page 1"})}),e.jsx(n,{size:a.letter,margins:.5,showMargins:!0,children:e.jsx(o,{title:"Page 2"})}),e.jsx(n,{size:a.label4x6,children:e.jsx(o,{title:"Packing label"})})]})})},de=`<!doctype html>
<html><head><style>
  @page { size: letter; margin: 0.5in; }
  body { margin: 0.5in; font: 14px/1.4 system-ui, sans-serif; color: #1e1f21; }
  h1 { font-size: 28px; margin: 0 0 16px; }
  table { width: 100%; border-collapse: collapse; margin-top: 24px; }
  th, td { text-align: left; padding: 6px 0; border-bottom: 1px solid #dddee1; }
</style></head><body>
  <h1>Invoice 10482</h1>
  <div>Example Manufacturing · 100 Main Street</div>
  <table>
    <tr><th>Part</th><th>Qty</th><th>Price</th></tr>
    <tr><td>Widget</td><td>4</td><td>$12.00</td></tr>
    <tr><td>Bracket</td><td>10</td><td>$3.50</td></tr>
  </table>
</body></html>`,x={render:r=>e.jsx(t,{h:"lg",children:e.jsx(s,{...r,children:e.jsx(n,{size:a.letter,margins:.5,showMargins:!0,children:e.jsx(t,{as:"iframe",title:"Invoice 10482",srcDoc:de,w:"full",h:"full",borderWidth:"0"})})})})},P={render:r=>e.jsx(t,{h:"lg",children:e.jsx(s,{...r,children:e.jsx(n,{size:a.letter,margins:.5,overlay:e.jsx(t,{position:"absolute",top:"96",left:"48",w:"272",h:"40",borderWidth:"2",borderStyle:"solid",borderColor:"border.danger",borderRadius:"4"}),children:e.jsx(o,{title:"Invoice"})})})})},Pe=[{label:"Fit page",value:"page"},{label:"Fit width",value:"width"},{label:"100%",value:1}],ue=()=>{const[r,i]=b.useState("page"),[d,c]=b.useState(!1),[f,ce]=b.useState(!0);return e.jsxs(j,{alignItems:"stretch",gap:"0",h:"lg",children:[e.jsxs(pe,{gap:"8",p:"8",borderBottomWidth:"1",borderColor:"border",children:[Pe.map(l=>e.jsx(v,{size:"sm",variant:r===l.value?"primary":void 0,onClick:()=>i(l.value),children:l.label},l.label)),e.jsx(v,{size:"sm",onClick:()=>c(l=>!l),children:d?"Portrait":"Landscape"}),e.jsx(v,{size:"sm",onClick:()=>ce(l=>!l),children:f?"Hide margins":"Show margins"})]}),e.jsx(t,{flex:"1",minH:"0",children:e.jsx(s,{fit:r,"aria-label":"Order acknowledgment preview",children:e.jsx(n,{size:a.letter,orientation:d?"landscape":"portrait",margins:.5,showMargins:f,children:e.jsx(t,{as:"iframe",title:"Order acknowledgment",srcDoc:de,w:"full",h:"full",borderWidth:"0"})})})})]})},u={render:()=>e.jsx(ue,{})},Be=["Default","Orientation","Sizes","Margins","MultiplePages","IframeContent","Overlay","ExTemplateEditorPane"];var y,B,M;w.parameters={...w.parameters,docs:{...(y=w.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <Box h="lg">
      <PrintPreview {...args}>
        <PrintPage size={pageSizes.letter} margins={0.5} showMargins>
          <SampleDocument title="Invoice" />
        </PrintPage>
      </PrintPreview>
    </Box>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const preview = canvas.getByLabelText('Document preview');
    const page = preview.querySelector<HTMLElement>('[data-ds-component="PrintPage"]');
    await waitFor(() => {
      expect(page).not.toHaveAttribute('data-measuring');
    });
    // Letter is 816 CSS pixels wide at scale 1. Fit scales it down.
    await expect(page?.getBoundingClientRect().width).toBeLessThan(816);
  }
}`,...(M=(B=w.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};var E,L,D,T,k;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => <Grid columns={2} gap="0">
      <Box h="md">
        <PrintPreview {...args} aria-label="Portrait label">
          <PrintPage size={pageSizes.label4x6} orientation="portrait">
            <SampleDocument title="Portrait" />
          </PrintPage>
        </PrintPreview>
      </Box>
      <Box h="md">
        <PrintPreview {...args} aria-label="Landscape label">
          <PrintPage size={pageSizes.label4x6} orientation="landscape">
            <SampleDocument title="Landscape" />
          </PrintPage>
        </PrintPreview>
      </Box>
    </Grid>
}`,...(D=(L=p.parameters)==null?void 0:L.docs)==null?void 0:D.source},description:{story:"The same 4 × 6 in label, as given and turned to landscape.",...(k=(T=p.parameters)==null?void 0:T.docs)==null?void 0:k.description}}};var C,I,O,H,W;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => <Grid columns={3} gap="0">
      {sizeExamples.map(({
      name,
      size
    }) => <Box key={name} h="xs">
          <PrintPreview {...args} aria-label={name}>
            <PrintPage size={size}>
              <Box p="8">
                <Box as="p">{name}</Box>
              </Box>
            </PrintPage>
          </PrintPreview>
        </Box>)}
    </Grid>
}`,...(O=(I=m.parameters)==null?void 0:I.docs)==null?void 0:O.source},description:{story:"Presets and a custom size. Every size is a plain `PageSize` object.",...(W=(H=m.parameters)==null?void 0:H.docs)==null?void 0:W.description}}};var G,_,F,R,$;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: args => <Grid columns={2} gap="0">
      <Box h="md">
        <PrintPreview {...args} aria-label="Even margins">
          <PrintPage size={pageSizes.letter} margins={1} showMargins>
            <SampleDocument title="1 in all sides" />
          </PrintPage>
        </PrintPreview>
      </Box>
      <Box h="md">
        <PrintPreview {...args} aria-label="Mixed margins">
          <PrintPage size={pageSizes.a4} margins={{
          top: 30,
          right: 15,
          bottom: 20,
          left: 25
        }} showMargins>
            <SampleDocument title="Mixed, in mm" />
          </PrintPage>
        </PrintPreview>
      </Box>
    </Grid>
}`,...(F=(_=g.parameters)==null?void 0:_.docs)==null?void 0:F.source},description:{story:"Margins can be one number or four sides, in the unit of the page size.",...($=(R=g.parameters)==null?void 0:R.docs)==null?void 0:$.description}}};var A,V,q,K,Q;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    fit: 'width'
  },
  render: args => <Box h="lg">
      <PrintPreview {...args}>
        <PrintPage size={pageSizes.letter} margins={0.5} showMargins>
          <SampleDocument title="Page 1" />
        </PrintPage>
        <PrintPage size={pageSizes.letter} margins={0.5} showMargins>
          <SampleDocument title="Page 2" />
        </PrintPage>
        <PrintPage size={pageSizes.label4x6}>
          <SampleDocument title="Packing label" />
        </PrintPage>
      </PrintPreview>
    </Box>
}`,...(q=(V=h.parameters)==null?void 0:V.docs)==null?void 0:q.source},description:{story:"Pages stack and share one scale, set by the largest page.",...(Q=(K=h.parameters)==null?void 0:K.docs)==null?void 0:Q.description}}};var U,Y,J,N,X;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: args => <Box h="lg">
      <PrintPreview {...args}>
        <PrintPage size={pageSizes.letter} margins={0.5} showMargins>
          <Box as="iframe" title="Invoice 10482" srcDoc={invoiceHtml} w="full" h="full" borderWidth="0" />
        </PrintPage>
      </PrintPreview>
    </Box>
}`,...(J=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:J.source},description:{story:`Server-rendered HTML in an iframe. The iframe fills the sheet at 96 CSS
pixels per inch, so it lays out as it prints.`,...(X=(N=x.parameters)==null?void 0:N.docs)==null?void 0:X.description}}};var Z,ee,re,te,ae;P.parameters={...P.parameters,docs:{...(Z=P.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: args => <Box h="lg">
      <PrintPreview {...args}>
        <PrintPage size={pageSizes.letter} margins={0.5} overlay={<Box position="absolute" top="96" left="48" w="272" h="40" borderWidth="2" borderStyle="solid" borderColor="border.danger" borderRadius="4" />}>
          <SampleDocument title="Invoice" />
        </PrintPage>
      </PrintPreview>
    </Box>
}`,...(re=(ee=P.parameters)==null?void 0:ee.docs)==null?void 0:re.source},description:{story:"The overlay draws in page space above the content, such as an error marker.",...(ae=(te=P.parameters)==null?void 0:te.docs)==null?void 0:ae.description}}};var ne,ie,se,oe,le;u.parameters={...u.parameters,docs:{...(ne=u.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => <TemplateEditorPane />
}`,...(se=(ie=u.parameters)==null?void 0:ie.docs)==null?void 0:se.source},description:{story:"Ex: the preview pane of a document template editor.",...(le=(oe=u.parameters)==null?void 0:oe.docs)==null?void 0:le.description}}};export{w as Default,u as ExTemplateEditorPane,x as IframeContent,g as Margins,h as MultiplePages,p as Orientation,P as Overlay,m as Sizes,Be as __namedExportsOrder,ye as default};
