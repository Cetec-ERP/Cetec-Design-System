import{m as $e,e as Ve,f as Ge,g as Ae,h as Ue,r as o,s as Le,j as e,B as a,c as Ee,d as De,G,V,H as Ke}from"./iframe-dpBk5fLH.js";import{B as $}from"./Button-CTAtJHIQ.js";import"./preload-helper-DCXCruOF.js";import"./Spinner-DRCJCBYp.js";import"./FieldContext-Bh6W5I2b.js";const Ie={},Qe=[],Xe=[["root","printPreview__root"],["stack","printPreview__stack"],["page","printPreview__page"],["sheet","printPreview__sheet"],["overlay","printPreview__overlay"],["marginArea","printPreview__marginArea"],["margins","printPreview__margins"]],Ye=Xe.map(([t,n])=>[t,Ae(n,Ie,Ue(Qe,t))]),Je=$e((t={})=>Object.fromEntries(Ye.map(([n,i])=>[n,i.recipeFn(t)]))),A=[],Ze=t=>({...Ie,...Ve(t)}),Re=Object.assign(Je,{__recipe__:!1,__name__:"printPreview",raw:t=>t,classNameMap:{},variantKeys:A,variantMap:{},splitVariantProps(t){return Ge(t,A)},getVariantProps:Ze}),h={letter:{width:8.5,height:11,unit:"in"},legal:{width:8.5,height:14,unit:"in"},a4:{width:210,height:297,unit:"mm"},label4x6:{width:4,height:6,unit:"in"},label4x2:{width:4,height:2,unit:"in"},label2x1:{width:2,height:1,unit:"in"}},et={in:96,mm:96/25.4,pt:96/72},z=(t,n)=>t*et[n],tt=(t,n,i=0)=>{let r=z(t.width,t.unit),g=z(t.height,t.unit);const w=r>g;(n==="landscape"&&!w||n==="portrait"&&w)&&([r,g]=[g,r]);const c=typeof i=="number"?{top:i,right:i,bottom:i,left:i}:i;return{width:r,height:g,margins:{top:z(c.top,t.unit),right:z(c.right,t.unit),bottom:z(c.bottom,t.unit),left:z(c.left,t.unit)}}},nt=(t,n,i)=>{if(typeof t=="number")return t;if(!n||!i||n.width<=0||i.width<=0)return null;const r=n.width/i.width;if(t==="width")return r;const g=n.height/i.height;return Math.min(r,g)},qe=o.createContext(null),Oe=o.createContext(null),u=t=>{const{size:n,orientation:i,margins:r,showMargins:g=!1,overlay:w,children:c,style:y,...R}=t,[F,N]=Le(R),d=o.useContext(qe),M=d==null?void 0:d.classes,f=o.useMemo(()=>M??Re(),[M]),S=o.useId(),{width:B,height:q,unit:T}=n,H=typeof r=="object"?r:{top:r??0,right:r??0,bottom:r??0,left:r??0},{top:s,right:p,bottom:m,left:P}=H,l=o.useMemo(()=>tt({width:B,height:q,unit:T},i,{top:s,right:p,bottom:m,left:P}),[B,q,T,i,s,p,m,P]),j=d==null?void 0:d.registerPage,b=d==null?void 0:d.unregisterPage;o.useLayoutEffect(()=>{if(!(!j||!b))return j(S,{width:l.width,height:l.height}),()=>b(S)},[S,l.width,l.height,j,b]);const Ne=d!==null&&d.scale===null,W=d?d.scale??1:1,He=o.useMemo(()=>({...l,scale:W}),[l,W]),We={"--print-scale":W,"--print-page-w":`${String(l.width)}px`,"--print-page-h":`${String(l.height)}px`,"--print-margin-top":`${String(l.margins.top)}px`,"--print-margin-right":`${String(l.margins.right)}px`,"--print-margin-bottom":`${String(l.margins.bottom)}px`,"--print-margin-left":`${String(l.margins.left)}px`,...y};return e.jsx(Oe.Provider,{value:He,children:e.jsxs(a,{...De("PrintPage"),className:Ee(f.page,F),"data-measuring":Ne||void 0,style:We,...N,children:[e.jsxs(a,{className:f.sheet,children:[c,w!==void 0&&e.jsx(a,{className:f.overlay,children:w})]}),g&&e.jsxs(e.Fragment,{children:[e.jsx(a,{className:f.marginArea,"aria-hidden":!0}),e.jsx(a,{className:f.margins,"aria-hidden":!0})]})]})})};u.__docgenInfo={description:`One printed page at its true proportions.

Place inside a \`PrintPreview\`, which sets the scale. Outside a preview the
page renders at scale 1.

The sheet is white with dark text in both themes, because paper is white.
Design-system components placed directly on the sheet still follow the app
theme. Content in an iframe is not affected.

Content inside can call \`usePrintPage\` for the scale and the page geometry.

@example
\`\`\`tsx
<PrintPage size={pageSizes.label4x6} orientation="landscape">
  <ShippingLabel />
</PrintPage>
\`\`\``,methods:[],displayName:"PrintPage",props:{size:{required:!0,tsType:{name:"signature",type:"object",raw:"{\n  /** Page width in `unit`. */\n  width: number;\n  /** Page height in `unit`. */\n  height: number;\n  /** Unit for `width`, `height`, and the page margins. */\n  unit: PageUnit;\n}",signature:{properties:[{key:"width",value:{name:"number",required:!0},description:"Page width in `unit`."},{key:"height",value:{name:"number",required:!0},description:"Page height in `unit`."},{key:"unit",value:{name:"union",raw:"'in' | 'mm' | 'pt'",elements:[{name:"literal",value:"'in'"},{name:"literal",value:"'mm'"},{name:"literal",value:"'pt'"}],required:!0},description:"Unit for `width`, `height`, and the page margins."}]}},description:"Physical page size. Use a `pageSizes` preset or any `PageSize` object."},orientation:{required:!1,tsType:{name:"union",raw:"'portrait' | 'landscape'",elements:[{name:"literal",value:"'portrait'"},{name:"literal",value:"'landscape'"}]},description:"Forces the page to be taller (`portrait`) or wider (`landscape`) than it\nis wide. Leave unset to use `size` as given."},margins:{required:!1,tsType:{name:"union",raw:`| number
| {
    top: number;
    right: number;
    bottom: number;
    left: number;
  }`,elements:[{name:"number"},{name:"signature",type:"object",raw:`{
  top: number;
  right: number;
  bottom: number;
  left: number;
}`,signature:{properties:[{key:"top",value:{name:"number",required:!0}},{key:"right",value:{name:"number",required:!0}},{key:"bottom",value:{name:"number",required:!0}},{key:"left",value:{name:"number",required:!0}}]}}]},description:"@default 0"},showMargins:{required:!1,tsType:{name:"boolean"},description:"@default false"},overlay:{required:!1,tsType:{name:"ReactNode"},description:"Layer drawn above the content in page space, such as error markers or a\nselection outline. The layer ignores the pointer. Set `pointerEvents` on\nits children to make them interactive."},children:{required:!1,tsType:{name:"ReactNode"},description:`Page content. It fills the whole sheet at 96 CSS pixels per inch, so an
iframe with full width and height lays out as it prints.`}}};const x=t=>{const{fit:n="page",children:i,ref:r,...g}=t,[w,c]=Le(g),y=o.useMemo(()=>Re(),[]),R=o.useRef(null),[F,N]=o.useState(null),[d,M]=o.useState(()=>new Map),f=o.useCallback(s=>{R.current=s,typeof r=="function"?r(s):r&&(r.current=s)},[r]);o.useLayoutEffect(()=>{const s=R.current;if(!s)return;const p=()=>{const P=getComputedStyle(s),l=s.clientWidth-parseFloat(P.paddingLeft)-parseFloat(P.paddingRight),j=s.clientHeight-parseFloat(P.paddingTop)-parseFloat(P.paddingBottom);N(b=>(b==null?void 0:b.width)===l&&b.height===j?b:{width:l,height:j})};p();const m=new ResizeObserver(p);return m.observe(s),()=>m.disconnect()},[]);const S=o.useCallback((s,p)=>{M(m=>{const P=m.get(s);if((P==null?void 0:P.width)===p.width&&P.height===p.height)return m;const l=new Map(m);return l.set(s,p),l})},[]),B=o.useCallback(s=>{M(p=>{if(!p.has(s))return p;const m=new Map(p);return m.delete(s),m})},[]),q=o.useMemo(()=>{if(d.size===0)return null;let s=0,p=0;return d.forEach(m=>{s=Math.max(s,m.width),p=Math.max(p,m.height)}),{width:s,height:p}},[d]),T=nt(n,F,q),H=o.useMemo(()=>({scale:T,registerPage:S,unregisterPage:B,classes:y}),[T,S,B,y]);return e.jsx(qe.Provider,{value:H,children:e.jsx(a,{...De("PrintPreview"),ref:f,tabIndex:0,className:Ee(y.root,w),...c,children:e.jsx(a,{className:y.stack,children:i})})})};x.__docgenInfo={description:`Shows printed pages at their true proportions, scaled to fit the area.

Wrap one or more \`PrintPage\` elements. The preview measures itself and
applies one scale to every page, chosen by \`fit\`. Pages stack vertically
and the preview scrolls when they do not fit.

The preview does not know what is on the page. Page size comes from each
\`PrintPage\`'s \`size\` prop, so it works for server-rendered HTML in an iframe,
an editable canvas, or a rendered PDF page.

Renders a focusable \`div\` so keyboard users can scroll it. Give it an
\`aria-label\` that names what is previewed.

@example
\`\`\`tsx
<PrintPreview aria-label="Invoice preview">
  <PrintPage size={pageSizes.letter} margins={0.5} showMargins>
    <iframe title="Invoice" srcDoc={html} />
  </PrintPage>
</PrintPreview>
\`\`\``,methods:[],displayName:"PrintPreview",props:{fit:{required:!1,tsType:{name:"union",raw:"'page' | 'width' | number",elements:[{name:"literal",value:"'page'"},{name:"literal",value:"'width'"},{name:"number"}]},description:'@default "page"'},children:{required:!1,tsType:{name:"ReactNode"},description:"One or more `PrintPage` elements."},ref:{required:!1,tsType:{name:"Ref",elements:[{name:"HTMLDivElement"}],raw:"Ref<HTMLDivElement>"},description:"Ref to the scrolling root element."}}};const rt=()=>{const t=o.useContext(Oe);if(!t)throw new Error("usePrintPage must be used within a <PrintPage>");return t},{expect:U,waitFor:at,within:it}=__STORYBOOK_MODULE_TEST__,gt={title:"Components/PrintPreview",component:x,parameters:{layout:"fullscreen",docs:{description:{component:"Shows printed pages at their true proportions, scaled to fit the area.\n\n- `PrintPreview` measures itself and applies one scale to every page.\n- `PrintPage` takes the page size as a prop. It does not know what the\n  content is, so it works with server HTML in an iframe, an editable\n  canvas, or a rendered PDF page.\n- `usePrintPage` gives content the scale and page geometry."}}},tags:["autodocs"],argTypes:{fit:{control:"select",options:["page","width",.5,1],description:"`page` fits the whole page, `width` fits its width, a number is a fixed zoom",table:{defaultValue:{summary:"page"}}}},args:{fit:"page","aria-label":"Document preview"}},v=({title:t})=>{const{margins:n}=rt(),i={paddingTop:n.top,paddingRight:n.right,paddingBottom:n.bottom,paddingLeft:n.left};return e.jsxs(V,{alignItems:"stretch",gap:"12",h:"full",style:i,children:[e.jsx(a,{as:"h2",fontSize:"24",fontWeight:"bold",children:t}),e.jsx(a,{as:"p",children:"Bill to: Example Manufacturing"}),e.jsx(a,{as:"p",children:"Ship to: 100 Main Street"}),e.jsxs(V,{alignItems:"stretch",gap:"4",borderTopWidth:"1",borderColor:"neutral.30",pt:"12",children:[e.jsx(a,{as:"p",children:"Line 1 · Widget · 4 × $12.00"}),e.jsx(a,{as:"p",children:"Line 2 · Bracket · 10 × $3.50"})]})]})},O={render:t=>e.jsx(a,{h:"lg",children:e.jsx(x,{...t,children:e.jsx(u,{size:h.letter,margins:.5,showMargins:!0,children:e.jsx(v,{title:"Invoice"})})})}),play:async({canvasElement:t})=>{const r=it(t).getByLabelText("Document preview").querySelector('[data-ds-component="PrintPage"]');await at(()=>{U(r).not.toHaveAttribute("data-measuring")}),await U(r==null?void 0:r.getBoundingClientRect().width).toBeLessThan(816)}},k={render:t=>e.jsxs(G,{columns:2,gap:"0",children:[e.jsx(a,{h:"md",children:e.jsx(x,{...t,"aria-label":"Portrait label",children:e.jsx(u,{size:h.label4x6,orientation:"portrait",children:e.jsx(v,{title:"Portrait"})})})}),e.jsx(a,{h:"md",children:e.jsx(x,{...t,"aria-label":"Landscape label",children:e.jsx(u,{size:h.label4x6,orientation:"landscape",children:e.jsx(v,{title:"Landscape"})})})})]})},st=[{name:"Letter",size:h.letter},{name:"A4",size:h.a4},{name:"Legal",size:h.legal},{name:"Label 4 × 2 in",size:h.label4x2},{name:"Label 2 × 1 in",size:h.label2x1},{name:"Custom 100 × 50 mm",size:{width:100,height:50,unit:"mm"}}],_={render:t=>e.jsx(G,{columns:3,gap:"0",children:st.map(({name:n,size:i})=>e.jsx(a,{h:"xs",children:e.jsx(x,{...t,"aria-label":n,children:e.jsx(u,{size:i,children:e.jsx(a,{p:"8",children:e.jsx(a,{as:"p",children:n})})})})},n))})},C={render:t=>e.jsxs(G,{columns:2,gap:"0",children:[e.jsx(a,{h:"md",children:e.jsx(x,{...t,"aria-label":"Even margins",children:e.jsx(u,{size:h.letter,margins:1,showMargins:!0,children:e.jsx(v,{title:"1 in all sides"})})})}),e.jsx(a,{h:"md",children:e.jsx(x,{...t,"aria-label":"Mixed margins",children:e.jsx(u,{size:h.a4,margins:{top:30,right:15,bottom:20,left:25},showMargins:!0,children:e.jsx(v,{title:"Mixed, in mm"})})})})]})},L={args:{fit:"width"},render:t=>e.jsx(a,{h:"lg",children:e.jsxs(x,{...t,children:[e.jsx(u,{size:h.letter,margins:.5,showMargins:!0,children:e.jsx(v,{title:"Page 1"})}),e.jsx(u,{size:h.letter,margins:.5,showMargins:!0,children:e.jsx(v,{title:"Page 2"})}),e.jsx(u,{size:h.label4x6,children:e.jsx(v,{title:"Packing label"})})]})})},Fe=`<!doctype html>
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
</body></html>`,E={render:t=>e.jsx(a,{h:"lg",children:e.jsx(x,{...t,children:e.jsx(u,{size:h.letter,margins:.5,showMargins:!0,children:e.jsx(a,{as:"iframe",title:"Invoice 10482",srcDoc:Fe,w:"full",h:"full",borderWidth:"0"})})})})},D={render:t=>e.jsx(a,{h:"lg",children:e.jsx(x,{...t,children:e.jsx(u,{size:h.letter,margins:.5,overlay:e.jsx(a,{position:"absolute",top:"96",left:"48",w:"272",h:"40",borderWidth:"2",borderStyle:"solid",borderColor:"border.danger",borderRadius:"4"}),children:e.jsx(v,{title:"Invoice"})})})})},ot=[{label:"Fit page",value:"page"},{label:"Fit width",value:"width"},{label:"100%",value:1}],lt=()=>{const[t,n]=o.useState("page"),[i,r]=o.useState(!1),[g,w]=o.useState(!0);return e.jsxs(V,{alignItems:"stretch",gap:"0",h:"lg",children:[e.jsxs(Ke,{gap:"8",p:"8",borderBottomWidth:"1",borderColor:"border",children:[ot.map(c=>e.jsx($,{size:"sm",variant:t===c.value?"primary":void 0,onClick:()=>n(c.value),children:c.label},c.label)),e.jsx($,{size:"sm",onClick:()=>r(c=>!c),children:i?"Portrait":"Landscape"}),e.jsx($,{size:"sm",onClick:()=>w(c=>!c),children:g?"Hide margins":"Show margins"})]}),e.jsx(a,{flex:"1",minH:"0",children:e.jsx(x,{fit:t,"aria-label":"Order acknowledgment preview",children:e.jsx(u,{size:h.letter,orientation:i?"landscape":"portrait",margins:.5,showMargins:g,children:e.jsx(a,{as:"iframe",title:"Order acknowledgment",srcDoc:Fe,w:"full",h:"full",borderWidth:"0"})})})})]})},I={render:()=>e.jsx(lt,{})},ut=["Default","Orientation","Sizes","Margins","MultiplePages","IframeContent","Overlay","ExTemplateEditorPane"];var K,Q,X;O.parameters={...O.parameters,docs:{...(K=O.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(X=(Q=O.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,J,Z,ee,te;k.parameters={...k.parameters,docs:{...(Y=k.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(Z=(J=k.parameters)==null?void 0:J.docs)==null?void 0:Z.source},description:{story:"The same 4 × 6 in label, as given and turned to landscape.",...(te=(ee=k.parameters)==null?void 0:ee.docs)==null?void 0:te.description}}};var ne,re,ae,ie,se;_.parameters={..._.parameters,docs:{...(ne=_.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(ae=(re=_.parameters)==null?void 0:re.docs)==null?void 0:ae.source},description:{story:"Presets and a custom size. Every size is a plain `PageSize` object.",...(se=(ie=_.parameters)==null?void 0:ie.docs)==null?void 0:se.description}}};var oe,le,ce,de,pe;C.parameters={...C.parameters,docs:{...(oe=C.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ce=(le=C.parameters)==null?void 0:le.docs)==null?void 0:ce.source},description:{story:"Margins can be one number or four sides, in the unit of the page size.",...(pe=(de=C.parameters)==null?void 0:de.docs)==null?void 0:pe.description}}};var he,me,ge,ue,Pe;L.parameters={...L.parameters,docs:{...(he=L.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(ge=(me=L.parameters)==null?void 0:me.docs)==null?void 0:ge.source},description:{story:"Pages stack and share one scale, set by the largest page.",...(Pe=(ue=L.parameters)==null?void 0:ue.docs)==null?void 0:Pe.description}}};var xe,we,be,ve,fe;E.parameters={...E.parameters,docs:{...(xe=E.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: args => <Box h="lg">
      <PrintPreview {...args}>
        <PrintPage size={pageSizes.letter} margins={0.5} showMargins>
          <Box as="iframe" title="Invoice 10482" srcDoc={invoiceHtml} w="full" h="full" borderWidth="0" />
        </PrintPage>
      </PrintPreview>
    </Box>
}`,...(be=(we=E.parameters)==null?void 0:we.docs)==null?void 0:be.source},description:{story:`Server-rendered HTML in an iframe. The iframe fills the sheet at 96 CSS
pixels per inch, so it lays out as it prints.`,...(fe=(ve=E.parameters)==null?void 0:ve.docs)==null?void 0:fe.description}}};var ye,Se,je,ze,Me;D.parameters={...D.parameters,docs:{...(ye=D.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  render: args => <Box h="lg">
      <PrintPreview {...args}>
        <PrintPage size={pageSizes.letter} margins={0.5} overlay={<Box position="absolute" top="96" left="48" w="272" h="40" borderWidth="2" borderStyle="solid" borderColor="border.danger" borderRadius="4" />}>
          <SampleDocument title="Invoice" />
        </PrintPage>
      </PrintPreview>
    </Box>
}`,...(je=(Se=D.parameters)==null?void 0:Se.docs)==null?void 0:je.source},description:{story:"The overlay draws in page space above the content, such as an error marker.",...(Me=(ze=D.parameters)==null?void 0:ze.docs)==null?void 0:Me.description}}};var Be,Te,ke,_e,Ce;I.parameters={...I.parameters,docs:{...(Be=I.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  render: () => <TemplateEditorPane />
}`,...(ke=(Te=I.parameters)==null?void 0:Te.docs)==null?void 0:ke.source},description:{story:"Ex: the preview pane of a document template editor.",...(Ce=(_e=I.parameters)==null?void 0:_e.docs)==null?void 0:Ce.description}}};export{O as Default,I as ExTemplateEditorPane,E as IframeContent,C as Margins,L as MultiplePages,k as Orientation,D as Overlay,_ as Sizes,ut as __namedExportsOrder,gt as default};
