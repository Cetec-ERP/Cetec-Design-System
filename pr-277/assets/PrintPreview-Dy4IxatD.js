import{m as B,e as U,f as z,g as A,h as H,r as a,s as R,j as h,B as P,c as E,d as L}from"./iframe-BYrU5jxL.js";const F={},K=[],W=[["root","printPreview__root"],["stack","printPreview__stack"],["page","printPreview__page"],["sheet","printPreview__sheet"],["overlay","printPreview__overlay"],["marginArea","printPreview__marginArea"],["margins","printPreview__margins"]],G=W.map(([e,s])=>[e,A(s,F,H(K,e))]),X=B((e={})=>Object.fromEntries(G.map(([s,r])=>[s,r.recipeFn(e)]))),N=[],J=e=>({...F,...U(e)}),I=Object.assign(X,{__recipe__:!1,__name__:"printPreview",raw:e=>e,classNameMap:{},variantKeys:N,variantMap:{},splitVariantProps(e){return z(e,N)},getVariantProps:J}),Q={in:96,mm:96/25.4,pt:96/72},y=(e,s)=>e*Q[s],Y=(e,s,r=0)=>{let n=y(e.width,e.unit),u=y(e.height,e.unit);const g=n>u;(s==="landscape"&&!g||s==="portrait"&&g)&&([n,u]=[u,n]);const d=typeof r=="number"?{top:r,right:r,bottom:r,left:r}:r;return{width:n,height:u,margins:{top:y(d.top,e.unit),right:y(d.right,e.unit),bottom:y(d.bottom,e.unit),left:y(d.left,e.unit)}}},Z=(e,s,r)=>{if(typeof e=="number")return e;if(!s||!r||s.width<=0||r.width<=0)return null;const n=s.width/r.width;if(e==="width")return n;const u=s.height/r.height;return Math.min(n,u)},V=a.createContext(null),ee=a.createContext(null),te=e=>{const{size:s,orientation:r,margins:n,showMargins:u=!1,overlay:g,children:d,style:f,...k}=e,[C,j]=R(k),o=a.useContext(V),x=o==null?void 0:o.classes,w=a.useMemo(()=>x??I(),[x]),v=a.useId(),{width:_,height:M,unit:S}=s,T=typeof n=="object"?n:{top:n??0,right:n??0,bottom:n??0,left:n??0},{top:t,right:l,bottom:p,left:c}=T,i=a.useMemo(()=>Y({width:_,height:M,unit:S},r,{top:t,right:l,bottom:p,left:c}),[_,M,S,r,t,l,p,c]),b=o==null?void 0:o.registerPage,m=o==null?void 0:o.unregisterPage;a.useLayoutEffect(()=>{if(!(!b||!m))return b(v,{width:i.width,height:i.height}),()=>m(v)},[v,i.width,i.height,b,m]);const $=o!==null&&o.scale===null,q=o?o.scale??1:1,D=a.useMemo(()=>({...i,scale:q}),[i,q]),O={"--print-scale":q,"--print-page-w":`${String(i.width)}px`,"--print-page-h":`${String(i.height)}px`,"--print-margin-top":`${String(i.margins.top)}px`,"--print-margin-right":`${String(i.margins.right)}px`,"--print-margin-bottom":`${String(i.margins.bottom)}px`,"--print-margin-left":`${String(i.margins.left)}px`,...f};return h.jsx(ee.Provider,{value:D,children:h.jsxs(P,{...L("PrintPage"),className:E(w.page,C),"data-measuring":$||void 0,style:O,...j,children:[h.jsxs(P,{className:w.sheet,children:[d,g!==void 0&&h.jsx(P,{className:w.overlay,children:g})]}),u&&h.jsxs(h.Fragment,{children:[h.jsx(P,{className:w.marginArea,"aria-hidden":!0}),h.jsx(P,{className:w.margins,"aria-hidden":!0})]})]})})};te.__docgenInfo={description:`One printed page at its true proportions.

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
iframe with full width and height lays out as it prints.`}}};const ne=e=>{const{fit:s="page",children:r,ref:n,...u}=e,[g,d]=R(u),f=a.useMemo(()=>I(),[]),k=a.useRef(null),[C,j]=a.useState(null),[o,x]=a.useState(()=>new Map),w=a.useCallback(t=>{k.current=t,typeof n=="function"?n(t):n&&(n.current=t)},[n]);a.useLayoutEffect(()=>{const t=k.current;if(!t)return;const l=()=>{const c=getComputedStyle(t),i=t.clientWidth-parseFloat(c.paddingLeft)-parseFloat(c.paddingRight),b=t.clientHeight-parseFloat(c.paddingTop)-parseFloat(c.paddingBottom);j(m=>(m==null?void 0:m.width)===i&&m.height===b?m:{width:i,height:b})};l();const p=new ResizeObserver(l);return p.observe(t),()=>p.disconnect()},[]);const v=a.useCallback((t,l)=>{x(p=>{const c=p.get(t);if((c==null?void 0:c.width)===l.width&&c.height===l.height)return p;const i=new Map(p);return i.set(t,l),i})},[]),_=a.useCallback(t=>{x(l=>{if(!l.has(t))return l;const p=new Map(l);return p.delete(t),p})},[]),M=a.useMemo(()=>{if(o.size===0)return null;let t=0,l=0;return o.forEach(p=>{t=Math.max(t,p.width),l=Math.max(l,p.height)}),{width:t,height:l}},[o]),S=Z(s,C,M),T=a.useMemo(()=>({scale:S,registerPage:v,unregisterPage:_,classes:f}),[S,v,_,f]);return h.jsx(V.Provider,{value:T,children:h.jsx(P,{...L("PrintPreview"),ref:w,tabIndex:0,className:E(f.root,g),...d,children:h.jsx(P,{className:f.stack,children:r})})})};ne.__docgenInfo={description:`Shows printed pages at their true proportions, scaled to fit the area.

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
\`\`\``,methods:[],displayName:"PrintPreview",props:{fit:{required:!1,tsType:{name:"union",raw:"'page' | 'width' | number",elements:[{name:"literal",value:"'page'"},{name:"literal",value:"'width'"},{name:"number"}]},description:'@default "page"'},children:{required:!1,tsType:{name:"ReactNode"},description:"One or more `PrintPage` elements."},ref:{required:!1,tsType:{name:"Ref",elements:[{name:"HTMLDivElement"}],raw:"Ref<HTMLDivElement>"},description:"Ref to the scrolling root element."}}};export{ne as P,te as a,ee as b};
