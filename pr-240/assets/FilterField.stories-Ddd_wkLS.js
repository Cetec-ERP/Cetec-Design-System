import{m as ht,e as vt,f as gt,g as ft,h as wt,s as bt,r as y,Y as kt,j as d,B as z,c as Be,d as xt,a as Bt,V as Z,T as be,H as Et}from"./iframe-D3Ar8nPH.js";import{L as Ft}from"./LocaleProvider-CJI8N7TC.js";import{u as Rt}from"./useLocale-CIxZnT0h.js";import{B as ge}from"./Button-Erfve5O0.js";import{u as ut,F as pt}from"./FilterMenu-D9qG0QVr.js";import{F as Tt}from"./FilterToken-DZSzjYRq.js";import{I as At}from"./IconButton-Ba37O2-P.js";import{K as Ct}from"./Kbd-heBUU_9f.js";import{u as St}from"./useOverflowItems-Vcq0S6St.js";import"./preload-helper-DEUlCBEE.js";import"./Spinner-DlAC96RF.js";import"./FieldContext-D96o8Baq.js";import"./ListItem-Dafyi78S.js";import"./HighlightText-C2d2Dr67.js";import"./Checkbox-6f6jav7p.js";import"./Divider-jI-WRtNJ.js";import"./Toggle-Dr-XcF3V.js";import"./ListItemGroup-3I1pN6YX.js";import"./FloatingLayerContext-BSgr56QX.js";const dt={},Ht=[],It=[["root","filterField__root"],["icon","filterField__icon"],["values","filterField__values"],["sizer","filterField__sizer"],["token","filterField__token"],["input","filterField__input"],["more","filterField__more"],["shortcut","filterField__shortcut"],["clear","filterField__clear"]],Dt=It.map(([a,n])=>[a,ft(n,dt,wt(Ht,a))]),Lt=ht((a={})=>Object.fromEntries(Dt.map(([n,i])=>[n,i.recipeFn(a)]))),Ee=[],Ot=a=>({...dt,...vt(a)}),Vt=Object.assign(Lt,{__recipe__:!1,__name__:"filterField",raw:a=>a,classNameMap:{},variantKeys:Ee,variantMap:{},splitVariantProps(a){return gt(a,Ee)},getVariantProps:Ot}),Mt=96,Pt=a=>a instanceof HTMLElement&&!!a.closest('input, textarea, select, [contenteditable=""], [contenteditable="true"]'),U=a=>{const{tokens:n,inputValue:i,onInputChange:c,inputProps:t,inputRef:v,placeholder:m,editingKey:w=null,onMoreClick:R,moreOpen:B,onClearAll:A,clearLabel:O,shortcut:L,disabled:g,...M}=a,[_,N]=bt(M),F=Vt(),{labels:l}=Rt(),[T,b]=y.useState(null),[S,K]=y.useState(!1),te=y.useRef(null),Q=y.useRef(null),ne=y.useRef(null),j=y.useRef(null),$=y.useRef(new Map),C=y.useRef(!1),ae=y.useCallback(r=>{if(r){j.current=r,C.current&&(C.current=!1,r.focus());return}j.current&&j.current===j.current.ownerDocument.activeElement&&(C.current=!0)},[]),D=kt([ae,v]),H=y.useCallback(()=>{var r;return(r=j.current)==null?void 0:r.focus()},[]),I=n.filter(r=>r.onRemove&&r.state!=="removing"),k=I[I.length-1],V=T!==null&&(k==null?void 0:k.key)===T?T:null,Y=n.map(r=>r.key),P=y.useCallback(r=>$.current.get(r)??null,[]),{visible:X,overflow:fe}=St({items:Y,containerRef:Q,getItemElement:P,activeItem:w??V,reserve:Mt,reserveRef:ne}),oe=fe.filter(r=>Y.includes(r)),G=n.filter(r=>oe.includes(r.key)),e=new Set(X);y.useEffect(()=>{if(!L||g)return;const r=f=>{f.key!==L||f.metaKey||f.ctrlKey||f.altKey||f.defaultPrevented||Pt(f.target)||(f.preventDefault(),H())};return document.addEventListener("keydown",r),()=>document.removeEventListener("keydown",r)},[L,g,H]);const o=r=>{var f,W;if((f=t==null?void 0:t.onKeyDown)==null||f.call(t,r),!r.defaultPrevented){if(r.key!=="Backspace"){b(null);return}i!==""||w!==null||!k||(r.preventDefault(),V===k.key?(b(null),(W=k.onRemove)==null||W.call(k)):b(k.key))}},p=r=>r&&((...f)=>{H(),r(...f)}),x=r=>d.jsx("input",{type:"text",autoComplete:"off",spellCheck:!1,"aria-label":l.filterOrSearch,"aria-keyshortcuts":L,...t,ref:D,className:Be(F.input,t==null?void 0:t.className),"data-inline":r||void 0,size:r?Math.max(i.length,1):void 0,value:i,placeholder:r?void 0:m,disabled:g,onChange:f=>{b(null),c(f.target.value)},onKeyDown:o}),J=w!==null&&e.has(w),se=!!A&&!g&&(n.length>0||i!=="");return d.jsxs(z,{...xt("FilterField"),ref:te,className:Be(F.root,_),"data-disabled":g||void 0,"data-has-clear":se||void 0,onFocusCapture:()=>K(!0),onBlurCapture:r=>{var f;(f=te.current)!=null&&f.contains(r.relatedTarget)||(K(!1),b(null))},onMouseDown:r=>{g||r.target!==r.currentTarget||(r.preventDefault(),H())},...N,children:[d.jsx(Bt,{name:"search",size:"20",fill:g?"icon.disabled":"icon.subtle",className:F.icon,"aria-hidden":!0}),d.jsxs(z,{className:F.values,onMouseDown:r=>{g||r.target!==r.currentTarget||(r.preventDefault(),H())},children:[d.jsx(z,{ref:Q,className:F.sizer,"aria-hidden":!0}),n.map(({key:r,...f})=>{const W=!e.has(r),yt=r===w&&!W;return d.jsx(z,{as:"span",ref:xe=>{xe?$.current.set(r,xe):$.current.delete(r)},className:F.token,"data-overflowed":W||void 0,inert:W||void 0,children:d.jsx(Tt,{...f,state:r===V?"armed":f.state,disabled:g,retainFocus:!0,editor:yt?x(!0):void 0,onFieldClick:p(f.onFieldClick),onOperatorClick:p(f.onOperatorClick),onValueClick:p(f.onValueClick),onRemove:p(f.onRemove)})},r)}),G.length>0&&d.jsx(ge,{ref:ne,size:"sm",variant:"hollow",iconAfter:"caret-down",className:F.more,disabled:g,"aria-expanded":R?!!B:void 0,"data-open":B||void 0,"data-pending":G.some(r=>r.state==="pending"||r.state==="removing")||void 0,onMouseDown:r=>r.preventDefault(),onClick:r=>{H(),R==null||R(oe,r.currentTarget)},children:l.moreFilters(G.length)}),!J&&x(!1)]}),L&&!S&&!g&&d.jsx(Ct,{keys:[L],className:F.shortcut}),se&&d.jsx(At,{variant:"ghost",size:"sm",iconName:"x",altText:O??l.clearFilters,className:F.clear,onMouseDown:r=>r.preventDefault(),onClick:()=>{b(null),H(),A==null||A()}})]})};U.__docgenInfo={description:`The filter bar's field: the applied filters as tokens, followed by one
text input.

The field owns layout and a few keys. The app owns the filters and the
menus. Tokens that do not fit go behind a "+N more" button. Backspace in
an empty input arms the last token, and a second Backspace removes it.
The input moves into the token named by \`editingKey\`, and focus moves
with it.

Pair it with \`FilterMenu\` and \`useFilterMenu\` for the menus.

@example
\`\`\`tsx
<FilterField
  tokens={filters.map((f) => ({ key: f.id, ...toTokenProps(f) }))}
  inputValue={text}
  onInputChange={setText}
  inputProps={menu.inputProps}
  inputRef={setInput}
  placeholder="Filter or search…"
  onClearAll={clearAll}
  shortcut="/"
/>
\`\`\``,methods:[],displayName:"FilterField",props:{tokens:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`FilterTokenProps & {
  /** Stable key, unique in the field. */
  key: string;
}`,elements:[{name:"FilterTokenProps"},{name:"signature",type:"object",raw:`{
  /** Stable key, unique in the field. */
  key: string;
}`,signature:{properties:[{key:"key",value:{name:"string",required:!0},description:"Stable key, unique in the field."}]}}]}],raw:"FilterFieldToken[]"},description:"Filters shown as tokens, in order."},inputValue:{required:!0,tsType:{name:"string"},description:"Text in the input."},onInputChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Runs when the person types in the input."},inputProps:{required:!1,tsType:{name:"intersection",raw:"Omit<\n  InputHTMLAttributes<HTMLInputElement>,\n  'value' | 'onChange' | 'disabled' | 'placeholder'\n> & { [key: `data-${string}`]: string | boolean | undefined }",elements:[{name:"Omit",elements:[{name:"InputHTMLAttributes",elements:[{name:"HTMLInputElement"}],raw:"InputHTMLAttributes<HTMLInputElement>"},{name:"union",raw:"'value' | 'onChange' | 'disabled' | 'placeholder'",elements:[{name:"literal",value:"'value'"},{name:"literal",value:"'onChange'"},{name:"literal",value:"'disabled'"},{name:"literal",value:"'placeholder'"}]}],raw:`Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'disabled' | 'placeholder'
>`},{name:"signature",type:"object",raw:"{ [key: `data-${string}`]: string | boolean | undefined }",signature:{properties:[{key:{name:"literal",value:"`data-${string}`"},value:{name:"union",raw:"string | boolean | undefined",elements:[{name:"string"},{name:"boolean"},{name:"undefined"}],required:!0}}]}}]},description:"Attributes for the input, such as `inputProps` from `useFilterMenu`. Its\n`onKeyDown` runs before the field's own Backspace handling. Call\n`preventDefault` to skip that handling."},inputRef:{required:!1,tsType:{name:"Ref",elements:[{name:"HTMLInputElement"}],raw:"Ref<HTMLInputElement>"},description:"Ref to the input. The input moves into a token while it is edited."},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder text of the input."},editingKey:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:`Key of the token whose value is edited. The input moves into that token,
and the token stays visible when the field overflows.`},onMoreClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(hiddenKeys: string[], anchor: HTMLElement) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"hiddenKeys"},{type:{name:"HTMLElement"},name:"anchor"}],return:{name:"void"}}},description:`Runs when the "+N more" button is clicked. Gets the keys of the tokens
that do not fit, and the button, to anchor a menu.`},moreOpen:{required:!1,tsType:{name:"boolean"},description:'Marks the "+N more" button as open while its menu shows.'},onClearAll:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:`Runs when the clear button is clicked. The button shows only when this
is set and the field has a token or text.`},clearLabel:{required:!1,tsType:{name:"string"},description:'Accessible name of the clear button.\n@default `labels.clearFilters` (English: "Clear all filters")'},shortcut:{required:!1,tsType:{name:"string"},description:`A key that focuses the input from anywhere on the page, such as "/".
It is ignored while another text field has focus. A hint shows whenever
the field does not have focus.`},disabled:{required:!1,tsType:{name:"boolean"},description:"Disables the input, the tokens and the buttons."}}};const{expect:s,fn:we,userEvent:u,waitFor:h,within:E}=__STORYBOOK_MODULE_TEST__,ke=[{id:"resolution",field:"Resolution",operator:"is",value:"All open",locked:!0},{id:"stage",field:"Stage",operator:"is any of",value:["Open","In progress"]},{id:"entered",field:"Entered On",operator:"is on or after",value:"Sep 1, 2026"}],mt=[...ke,{id:"assigned",field:"Assigned To",operator:"is any of",value:["Brent Barton","David Atkins"],state:"pending"},{id:"type",field:"Case Type",operator:"is",value:"Warranty"},{id:"customer",field:"Customer",operator:"is",value:"Acme Corp"}],ee=({initial:a=ke,width:n="full",shortcut:i="/",...c})=>{const[t,v]=y.useState(a),[m,w]=y.useState(""),R=B=>v(A=>A.filter(O=>O.id!==B));return d.jsxs(Z,{alignItems:"start",gap:"12",children:[d.jsx(U,{w:n,tokens:t.map(B=>({key:B.id,field:B.field,operator:B.operator,value:B.value,state:B.state,operatorLocked:B.locked,onRemove:()=>R(B.id)})),inputValue:m,onInputChange:w,placeholder:"Filter or search…",shortcut:i,onClearAll:()=>{v([]),w("")},...c}),d.jsx(ge,{size:"sm",variant:"ghost",onClick:()=>v(a),children:"Reset"})]})},mn={title:"Components/FilterField",component:U,parameters:{layout:"padded"},args:{tokens:[],inputValue:"",onInputChange:we(),onClearAll:we(),onMoreClick:we(),shortcut:"/"},render:a=>d.jsx(ee,{shortcut:a.shortcut,disabled:a.disabled,onMoreClick:a.onMoreClick})},ie={play:async({canvasElement:a})=>{const n=E(a),i=n.getByRole("textbox",{name:"Filter or search"});s(n.getByRole("group",{name:"Stage is any of Open, In progress"})).toBeVisible(),s(i).toHaveAttribute("aria-keyshortcuts","/"),await u.click(i),await u.type(i,"acme"),s(i).toHaveValue("acme"),await u.click(n.getByRole("button",{name:"Clear all filters"})),await h(()=>s(n.queryAllByRole("group")).toHaveLength(0)),s(i).toHaveValue(""),s(i).toHaveFocus(),await u.click(n.getByRole("button",{name:"Reset"})),await h(()=>s(n.getAllByRole("group")).toHaveLength(3))}},re={render:a=>d.jsx(ee,{initial:[],shortcut:a.shortcut}),play:async({canvasElement:a})=>{const n=E(a);s(n.queryByRole("button",{name:"Clear all filters"})).not.toBeInTheDocument(),s(n.getByText("/")).toBeVisible(),s(n.getByRole("textbox",{name:"Filter or search"})).toHaveAttribute("placeholder","Filter or search…")}},jt=a=>a.mock.calls[0],le={render:a=>d.jsx(ee,{initial:mt,width:"2xl",onMoreClick:a.onMoreClick}),play:async({args:a,canvasElement:n})=>{const i=E(n),c=await i.findByRole("button",{name:/^\+\d more$/});s(c).toHaveAttribute("data-pending"),s(i.getByRole("group",{name:"Resolution is All open"})).toBeVisible(),s(i.queryByRole("group",{name:"Customer is Acme Corp"})).not.toBeInTheDocument(),await u.click(c),s(a.onMoreClick).toHaveBeenCalledOnce();const[t,v]=jt(a.onMoreClick);s(t).toContain("customer"),s(t).not.toContain("resolution"),s(v).toBe(c),i.getByRole("textbox",{name:"Filter or search"}).blur(),await h(()=>s(i.getByText("/")).toBeVisible())}},ce={play:async({canvasElement:a})=>{const n=E(a),i=n.getByRole("textbox",{name:"Filter or search"});s(n.getByText("/")).toBeVisible(),await u.click(i),await h(()=>s(i).toHaveFocus()),s(n.queryByText("/")).not.toBeInTheDocument(),await u.type(i,"acme"),i.blur(),await h(()=>s(n.getByText("/")).toBeVisible()),await u.clear(i),i.blur()}},ue={args:{disabled:!0},play:async({canvasElement:a})=>{const n=E(a);s(n.getByRole("textbox",{name:"Filter or search"})).toBeDisabled(),s(n.getByRole("button",{name:/^Remove filter: Stage/})).toBeDisabled(),s(n.queryByRole("button",{name:"Clear all filters"})).not.toBeInTheDocument(),s(n.queryByText("/")).not.toBeInTheDocument()}},pe={render:a=>d.jsxs(Z,{alignItems:"start",gap:"12",children:[d.jsx(z,{as:"input","aria-label":"Notes",w:"xs",h:"32",px:"8",borderWidth:"1",borderStyle:"solid",borderColor:"border",borderRadius:"4",bg:"surface",color:"text"}),d.jsx(ee,{shortcut:a.shortcut})]}),play:async({canvasElement:a})=>{const n=E(a),i=n.getByRole("textbox",{name:"Filter or search"}),c=n.getByRole("textbox",{name:"Notes"});await u.type(c,"a/b"),s(c).toHaveValue("a/b"),s(i).not.toHaveFocus(),c.blur(),await u.keyboard("/"),await h(()=>s(i).toHaveFocus()),s(i).toHaveValue(""),i.blur(),await h(()=>s(n.getByText("/")).toBeVisible())}},de={name:"Backspace removes",play:async({canvasElement:a})=>{const n=E(a),i=n.getByRole("textbox",{name:"Filter or search"}),c=()=>n.queryByRole("group",{name:"Entered On is on or after Sep 1, 2026"});await u.click(i),await u.type(i,"a{Backspace}"),s(c()).toHaveAttribute("data-state","applied"),await u.keyboard("{Backspace}"),await h(()=>s(c()).toHaveAttribute("data-state","armed")),await u.keyboard("{ArrowLeft}"),await h(()=>s(c()).toHaveAttribute("data-state","applied")),await u.keyboard("{Backspace}{Backspace}"),await h(()=>s(c()).not.toBeInTheDocument()),s(i).toHaveFocus(),await u.click(n.getByRole("button",{name:"Reset"})),await h(()=>s(c()).toBeVisible())}},_t=()=>{const[a,n]=y.useState(null),[i,c]=y.useState("");return d.jsxs(Z,{alignItems:"start",gap:"12",children:[d.jsx(U,{w:"full",tokens:ke.map(t=>({key:t.id,field:t.field,operator:t.operator,value:t.value,state:t.id===a?"editing":"applied",operatorLocked:t.locked,onValueClick:()=>n(t.id)})),inputValue:i,onInputChange:c,inputProps:{onKeyDown:t=>{t.key==="Escape"&&n(null)}},placeholder:"Filter or search…",editingKey:a,shortcut:"/"}),d.jsx(be,{textStyle:"body.sm",color:"text.subtlest",children:"Click a value to edit it in place. Esc ends the edit."})]})},me={render:()=>d.jsx(_t,{}),play:async({canvasElement:a})=>{const n=E(a),i=()=>n.getByRole("group",{name:"Stage is any of Open, In progress"});await u.click(n.getByRole("button",{name:"Open, In progress"})),await h(()=>s(i()).toHaveAttribute("data-state","editing"));const c=E(i()).getByRole("textbox",{name:"Filter or search"});await h(()=>s(c).toHaveFocus()),await u.type(c,"Wai"),s(c).toHaveValue("Wai"),await u.keyboard("{Escape}"),await h(()=>s(i()).toHaveAttribute("data-state","applied"));const t=n.getByRole("textbox",{name:"Filter or search"});s(E(i()).queryByRole("textbox")).not.toBeInTheDocument(),await h(()=>s(t).toHaveFocus()),await u.clear(t),await u.click(n.getByRole("button",{name:"Open, In progress"})),await h(()=>s(i()).toHaveAttribute("data-state","editing"))}},ye={render:()=>d.jsx(Ft,{labels:{filterOrSearch:"Filtrar o buscar",clearFilters:"Quitar todos los filtros",moreFilters:a=>`+${a} más`},children:d.jsx(ee,{initial:mt,width:"2xl"})}),play:async({canvasElement:a})=>{const n=E(a);s(n.getByRole("textbox",{name:"Filtrar o buscar"})).toBeVisible(),s(n.getByRole("button",{name:"Quitar todos los filtros"})).toBeVisible(),s(await n.findByRole("button",{name:/^\+\d más$/})).toBeVisible()}},Fe={Stage:["Open","In progress","Waiting on customer","Closed"],"Case Type":["Warranty","Repair","Question"],Priority:["High","Medium","Low"]},Nt=()=>{const[a,n]=y.useState([]),[i,c]=y.useState(""),[t,v]=y.useState({type:"closed"}),[m,w]=y.useState(null),[R,B]=y.useState(null),A=a.find(l=>l.id===m),O=A&&Array.isArray(A.value)?A.value:[],L=i.trim().toLowerCase(),g=[];if(t.type==="fields"){g.push({type:"group",label:"Fields"});for(const l of Object.keys(Fe))l.toLowerCase().includes(L)&&g.push({type:"item",key:l,label:l,detail:"list"})}else if(t.type==="values"&&A){g.push({type:"group",label:`${A.field} is any of`});for(const l of Fe[A.field]??[])l.toLowerCase().includes(L)&&g.push({type:"item",key:l,label:l,checked:O.includes(l)})}L&&!g.some(l=>l.type==="item")&&g.push({type:"empty",label:`No match for “${i}”`});const M=()=>{n(l=>l.filter(T=>T.id!==m||T.value.length>0)),w(null),v({type:"closed"}),c("")},_=l=>{w(l),v({type:"values"}),c("")},N=l=>{if(t.type==="fields"){const T=`${l}-${a.length}`;n(b=>[...b,{id:T,field:l,operator:"is any of",value:[]}]),_(T);return}n(T=>T.map(b=>b.id===m?{...b,value:O.includes(l)?O.filter(S=>S!==l):[...O,l]}:b)),c("")},F=ut({rows:g,open:t.type!=="closed",onSelect:N,onClose:M,spaceSelects:t.type==="values"&&i===""});return d.jsxs(Z,{alignItems:"start",gap:"12",minH:"sm",children:[d.jsx(U,{w:"full",tokens:a.map(l=>({key:l.id,field:l.field,operator:l.operator,value:l.value,state:l.id===m?"editing":"applied",onValueClick:()=>_(l.id),onRemove:()=>{l.id===m&&M(),n(T=>T.filter(b=>b.id!==l.id))}})),inputValue:i,onInputChange:l=>{c(l),F.setActiveKey(null),t.type==="closed"&&v({type:"fields"})},inputRef:B,inputProps:{...F.inputProps,onFocus:()=>{t.type==="closed"&&v({type:"fields"})},onKeyDown:l=>{if(l.key==="Enter"&&t.type==="values"&&!i){l.preventDefault(),M();return}F.inputProps.onKeyDown(l)}},placeholder:"Filter or search…",editingKey:m,shortcut:"/",onClearAll:()=>{n([]),M()}}),d.jsx(pt,{...F.menuProps,anchor:R,"aria-label":t.type==="values"?"Values":"Fields",query:i,footer:t.type==="values"?"Space toggles · Enter done · Esc done":"Type a field · Enter picks"})]})},he={name:"Ex: Add a filter",render:()=>d.jsx(Nt,{}),play:async({canvasElement:a})=>{const n=E(a),i=E(a.ownerDocument.body),c=()=>n.getByRole("combobox",{name:"Filter or search"});await u.click(c()),await u.type(c(),"sta"),await i.findByRole("option",{name:/^Stage/}),await u.keyboard("{Enter}");const t=()=>n.getByRole("group",{name:/^Stage/,hidden:!0});await h(()=>s(t()).toHaveAttribute("data-state","editing")),await h(()=>s(E(t()).getByRole("combobox",{hidden:!0})).toHaveFocus()),await i.findByRole("option",{name:/^Open/}),await u.keyboard(" {ArrowDown} "),await h(()=>s(t()).toHaveAccessibleName("Stage is any of Open, In progress")),await u.keyboard("{Enter}"),await h(()=>s(t()).toHaveAttribute("data-state","applied")),await h(()=>s(c()).toHaveFocus()),await u.type(c(),"p"),await i.findByRole("option",{name:/^Priority/})}},q={Stage:{kind:"many",ops:["is any of","is none of"],options:["Open","In progress","Waiting on customer","Closed"]},Priority:{kind:"one",ops:["is","is not"],options:["High","Medium","Low"]},Customer:{kind:"lookup",ops:["is","is not"]},"Entered On":{kind:"date",ops:["is on or after","is before"]},"All text":{kind:"text",ops:["contains"]}},Re=["Stage","Priority","Customer","Entered On"],qt={many:"pick many",one:"pick one",lookup:"search",date:"date",text:"text"},Te=new Set(["is none of","is not"]),Ae=[{name:"Acme Corp",city:"Austin, TX"},{name:"Apex Machining",city:"Dallas, TX"},{name:"Bluebird Labs",city:"Denver, CO"},{name:"Cobalt Motors",city:"Detroit, MI"},{name:"Delta Fabrication",city:"Tulsa, OK"},{name:"Evergreen Plastics",city:"Portland, OR"},{name:"Granite Controls",city:"Austin, TX"}],Kt=[{label:"Start of this month",value:"Oct 1, 2026"},{label:"Start of last month",value:"Sep 1, 2026"},{label:"Start of the year",value:"Jan 1, 2026"}],Ce=[{id:"stage",field:"Stage",op:"is any of",values:["Open","In progress"]},{id:"priority",field:"Priority",op:"is",values:["High"]},{id:"entered",field:"Entered On",op:"is on or after",values:["Sep 1, 2026"]},{id:"customer",field:"Customer",op:"is not",values:["Acme Corp"]}],$t=(a,n)=>a.field===n.field&&a.op===n.op&&a.values.join(`
`)===n.values.join(`
`),Se=a=>`${a.field} ${a.op} ${a.values.join(", ")}`,Wt=a=>{if(!/\d/.test(a))return null;const n=new Date(a);return Number.isNaN(n.getTime())?null:n.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})},zt=()=>{const[a,n]=y.useState(Ce),[i,c]=y.useState(Ce),[t,v]=y.useState(null),[m,w]=y.useState({type:"closed"}),[R,B]=y.useState(""),[A,O]=y.useState(null),[L,g]=y.useState(null),M=y.useRef(null),_=y.useRef(0),N=y.useRef(!1),F=e=>{const o=a.find(p=>p.id===e.id);return!o||!$t(o,e)},l=i.filter(F).length,T=[...i.map(e=>(t==null?void 0:t.id)===e.id?{filter:t,state:"editing"}:{filter:e,state:F(e)?"pending":"applied"}),...t&&!i.some(e=>e.id===t.id)?[{filter:t,state:"editing"}]:[]],b=()=>{m.type==="values"&&(N.current=!0,requestAnimationFrame(()=>{N.current=!1})),v(null),w({type:"closed"}),B(""),g(null),P.setActiveKey(null)},S=(e=t)=>{e&&c(o=>e.values.length===0?o.filter(p=>p.id!==e.id):o.some(p=>p.id===e.id)?o.map(p=>p.id===e.id?e:p):[...o,e]),b()},K=(e,o,p)=>{t&&t.id!==e.id&&S(t),v({...e,values:[...e.values]}),w({type:o,id:e.id}),B(""),g(p),P.setActiveKey(null)},te=e=>{const o={id:`new-${_.current++}`,field:e,op:q[e].ops[0],values:[]};v(o),w({type:"values",id:o.id}),B(""),P.setActiveKey(null)},Q=(e,o)=>{const p=q[e];c(x=>{const J=x.find(r=>r.field===e&&r.op===p.ops[0]);if(!J)return[...x,{id:`new-${_.current++}`,field:e,op:p.ops[0],values:[o]}];const se=p.kind==="many"?[...J.values.filter(r=>r!==o),o]:[o];return x.map(r=>r.id===J.id?{...r,values:se}:r)}),b()},ne=e=>{(t==null?void 0:t.id)===e&&b(),c(o=>o.filter(p=>p.id!==e)),n(o=>o.filter(p=>p.id!==e))},j=()=>{n(i),b()},$=()=>{c(a),b()};y.useEffect(()=>{if(m.type==="closed")return;const e=o=>{var x;const p=o.target;(x=M.current)!=null&&x.contains(p)||p.closest("[data-filter-bar-menu]")||S()};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)});const C=[],ae=new Map,D=(e,o)=>{C.push({type:"item",...e}),ae.set(e.key,o)},H=R.trim(),I=H.toLowerCase(),k=t?q[t.field]:void 0;let V="Enter picks · Esc cancels";if(m.type==="root"){const e=Re.filter(o=>o.toLowerCase().includes(I));e.length>0&&C.push({type:"group",label:"Fields"});for(const o of e)D({key:`field:${o}`,label:o,detail:qt[q[o].kind]},()=>te(o));if(I){const o=Re.flatMap(p=>(q[p].options??Ae.map(x=>x.name)).filter(x=>x.toLowerCase().includes(I)).map(x=>({field:p,value:x}))).filter(({field:p})=>q[p].kind!=="date");o.length>0&&C.push({type:"group",label:`Values matching “${H}”`});for(const{field:p,value:x}of o)D({key:`value:${p}:${x}`,label:`${p} is ${x}`},()=>Q(p,x));C.push({type:"group",label:"Search"}),D({key:"search",label:`All text contains “${H}”`},()=>Q("All text",H))}V=l>0&&!I?"Type a field or a value · Enter applies":"Type a field or a value · Enter picks"}if(m.type==="op"&&t&&k){C.push({type:"group",label:`${t.field} operator`});for(const e of k.ops)D({key:`op:${e}`,label:e,selected:e===t.op,detail:e===t.op?"current":Te.has(e)?"excludes":void 0},()=>{const o={...t,op:e};o.values.length>0?S(o):(v(o),w({type:"values",id:o.id}),g(null))})}if(m.type==="values"&&t&&k){if(C.push({type:"group",label:`${t.field} ${t.op}`}),k.kind==="many"){for(const e of k.options??[])e.toLowerCase().includes(I)&&D({key:e,label:e,checked:t.values.includes(e)},()=>{v({...t,values:t.values.includes(e)?t.values.filter(o=>o!==e):[...t.values,e]}),B("")});V="Space toggles · Enter done · Esc cancels"}else if(k.kind==="one")for(const e of k.options??[])e.toLowerCase().includes(I)&&D({key:e,label:e,selected:t.values[0]===e},()=>S({...t,values:[e]}));else if(k.kind==="lookup"){const e=t.values[0];!I&&e&&D({key:e,label:e,selected:!0},()=>S()),I||C.push({type:"empty",label:"Type a customer name"});for(const o of Ae)!I||!o.name.toLowerCase().includes(I)||D({key:o.name,label:o.name,description:o.city,selected:e===o.name},()=>S({...t,values:[o.name]}));V="Type to find · Enter picks · Esc cancels"}else if(k.kind==="date"){const e=Wt(H);e&&D({key:"typed",label:e,detail:"typed"},()=>S({...t,values:[e]}));for(const o of Kt)D({key:o.value,label:o.label,detail:o.value,selected:t.values[0]===o.value},()=>S({...t,values:[o.value]}));V="Type a date, such as 10/15/2026 · Esc cancels"}I&&!C.some(e=>e.type==="item")&&C.push({type:"empty",label:`No ${t.field.toLowerCase()} matches “${H}”`})}if(m.type==="more"){const e=T.filter(o=>m.keys.includes(o.filter.id));C.push({type:"group",label:`${e.length} more filters`});for(const{filter:o,state:p}of e)D({key:o.id,label:Se(o),detail:p==="pending"?p:void 0},()=>K(o,"values",null));V="Pick a filter to edit it"}const Y=m.type==="values"&&(k==null?void 0:k.kind)==="many",P=ut({rows:C,open:m.type!=="closed",onSelect:e=>{var o;return(o=ae.get(e))==null?void 0:o()},onClose:b,spaceSelects:Y&&R===""}),X=()=>{m.type==="closed"&&w({type:"root"})},fe=e=>{const o=R.trim()==="",p=m.type==="closed"||m.type==="root";if(e.key==="Enter"&&o&&p&&l>0){e.preventDefault(),j();return}if(e.key==="Enter"&&o&&Y){e.preventDefault(),S();return}if(e.key==="Escape"&&m.type==="closed"&&l>0){e.preventDefault(),$();return}if(e.key==="ArrowDown"&&m.type==="closed"){e.preventDefault(),X();return}P.inputProps.onKeyDown(e)},oe=T.map(({filter:e,state:o})=>{const p=q[e.field];return{key:e.id,field:e.field,operator:e.op,value:p.kind==="many"?e.values:e.values[0]??"",state:o,tone:Te.has(e.op)?"exclude":"default",operatorLocked:p.ops.length===1,onValueClick:()=>K(e,"values",null),onOperatorClick:x=>K(e,"op",x.currentTarget),onRemove:()=>ne(e.id)}}),G=m.type==="op"||m.type==="more"?L:A;return d.jsxs(Z,{alignItems:"stretch",gap:"12",w:"full",minH:"md",children:[d.jsxs(Et,{gap:"8",alignItems:"start",children:[d.jsx(z,{ref:M,flex:"1",minW:"0",children:d.jsx(U,{w:"full",tokens:oe,inputValue:R,onInputChange:e=>{B(e),P.setActiveKey(null),(m.type==="closed"||m.type==="more")&&w({type:"root"})},inputRef:O,inputProps:{...P.inputProps,onFocus:()=>{N.current||X()},onMouseDown:X,onKeyDown:fe},placeholder:"Filter or search…",editingKey:m.type==="values"?(t==null?void 0:t.id)??null:null,onMoreClick:(e,o)=>{if(m.type==="more")return b();S(),w({type:"more",keys:e}),g(o)},moreOpen:m.type==="more",shortcut:"/",onClearAll:()=>{c([]),n([]),b()}})}),l>0&&d.jsxs(d.Fragment,{children:[d.jsx(ge,{variant:"ghost",onClick:$,children:"Discard"}),d.jsx(ge,{variant:"primary",onClick:j,children:`Apply (${l})`})]})]}),d.jsx(be,{textStyle:"body.sm",color:"text.subtle",children:l>0?`These results do not include ${l} pending ${l===1?"change":"changes"}. Press Enter or Apply to update them. Press Esc or Discard to undo.`:"The results match the applied filters."}),d.jsx(be,{textStyle:"body.sm",color:"text.subtlest","data-testid":"applied",children:`Applied: ${a.map(Se).join(" · ")||"none"}`}),d.jsx(pt,{...P.menuProps,anchor:G,"aria-label":m.type==="values"?`${(t==null?void 0:t.field)??""} values`:m.type==="op"?"Operators":m.type==="more"?"More filters":"Fields and values",query:m.type==="op"||m.type==="more"?void 0:R,footer:V,"data-filter-bar-menu":!0})]})},ve={name:"Ex: Filter bar with Apply",render:()=>d.jsx(zt,{}),play:async({canvasElement:a})=>{const n=E(a),i=E(a.ownerDocument.body),c=w=>n.getByRole("group",{name:w,hidden:!0}),t=(w,R)=>E(c(w)).getByRole("button",{name:R,hidden:!0}),v=()=>n.queryByRole("button",{name:/^Apply/,hidden:!0}),m=()=>n.getByRole("combobox",{name:"Filter or search",hidden:!0});await u.click(t(/^Stage/,"Open, In progress")),await h(()=>s(c(/^Stage/)).toHaveAttribute("data-state","editing")),await u.click(await i.findByRole("option",{name:/^Waiting on customer/})),await u.keyboard("{Enter}"),await h(()=>s(c(/^Stage/)).toHaveAttribute("data-state","pending")),s(v()).toHaveTextContent("Apply (1)"),await u.click(t(/^Stage/,"Stage")),await i.findByRole("option",{name:/^Open/}),await u.keyboard(" "),await h(()=>s(c(/^Stage/)).toHaveAccessibleName("Stage is any of In progress, Waiting on customer")),await u.keyboard("{Escape}"),await h(()=>s(c(/^Stage/)).toHaveAccessibleName("Stage is any of Open, In progress, Waiting on customer")),await u.click(t(/^Priority/,"is")),await u.click(await i.findByRole("option",{name:/^is not/})),await h(()=>s(c(/^Priority/)).toHaveAttribute("data-tone","exclude")),s(c(/^Priority/)).toHaveAttribute("data-state","pending"),s(v()).toHaveTextContent("Apply (2)"),await u.click(v()),await h(()=>s(v()).toBeNull()),s(n.getByTestId("applied")).toHaveTextContent("Priority is not High"),await u.click(E(c(/^Priority/)).getByRole("button",{name:/^Remove filter/,hidden:!0})),await h(()=>s(n.getByTestId("applied")).not.toHaveTextContent("Priority")),s(v()).toBeNull(),await u.click(m()),await u.keyboard("{Backspace}{Backspace}"),await h(()=>s(n.getByTestId("applied")).not.toHaveTextContent("Customer")),s(v()).toBeNull(),await u.click(t(/^Stage/,"Stage")),await u.click(await i.findByRole("option",{name:/^Closed/})),await u.keyboard("{Enter}"),await h(()=>s(v()).toHaveTextContent("Apply (1)")),await u.keyboard("{Escape}"),await h(()=>s(v()).toBeNull()),await u.type(m(),"clo"),await i.findByRole("option",{name:/Closed$/})}},yn=["Default","Empty","Overflow","Focused","Disabled","Shortcut","BackspaceRemoves","EditingInPlace","TranslatedLabels","ExAddAFilter","ExFilterBarWithApply"];var He,Ie,De;ie.parameters={...ie.parameters,docs:{...(He=ie.parameters)==null?void 0:He.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: 'Filter or search'
    });
    expect(canvas.getByRole('group', {
      name: 'Stage is any of Open, In progress'
    })).toBeVisible();
    expect(input).toHaveAttribute('aria-keyshortcuts', '/');

    // Typed text stays in the input.
    await userEvent.click(input);
    await userEvent.type(input, 'acme');
    expect(input).toHaveValue('acme');

    // The clear button removes every token and the text.
    await userEvent.click(canvas.getByRole('button', {
      name: 'Clear all filters'
    }));
    await waitFor(() => expect(canvas.queryAllByRole('group')).toHaveLength(0));
    expect(input).toHaveValue('');
    expect(input).toHaveFocus();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Reset'
    }));
    await waitFor(() => expect(canvas.getAllByRole('group')).toHaveLength(3));
  }
}`,...(De=(Ie=ie.parameters)==null?void 0:Ie.docs)==null?void 0:De.source}}};var Le,Oe,Ve;re.parameters={...re.parameters,docs:{...(Le=re.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  render: args => <FieldDemo initial={[]} shortcut={args.shortcut} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // With no token and no text, there is nothing to clear.
    expect(canvas.queryByRole('button', {
      name: 'Clear all filters'
    })).not.toBeInTheDocument();
    expect(canvas.getByText('/')).toBeVisible();
    expect(canvas.getByRole('textbox', {
      name: 'Filter or search'
    })).toHaveAttribute('placeholder', 'Filter or search…');
  }
}`,...(Ve=(Oe=re.parameters)==null?void 0:Oe.docs)==null?void 0:Ve.source}}};var Me,Pe,je;le.parameters={...le.parameters,docs:{...(Me=le.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  render: args => <FieldDemo initial={MANY_FILTERS} width="2xl" onMoreClick={args.onMoreClick} />,
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Tokens that do not fit go behind "+N more". The button has a dashed
    // border when a hidden token is pending.
    const more = await canvas.findByRole('button', {
      name: /^\\+\\d more$/
    });
    expect(more).toHaveAttribute('data-pending');
    expect(canvas.getByRole('group', {
      name: 'Resolution is All open'
    })).toBeVisible();
    expect(canvas.queryByRole('group', {
      name: 'Customer is Acme Corp'
    })).not.toBeInTheDocument();

    // A click gives the app the hidden keys and the button, for a menu.
    await userEvent.click(more);
    expect(args.onMoreClick).toHaveBeenCalledOnce();
    const [hiddenKeys, anchor] = firstCall(args.onMoreClick);
    expect(hiddenKeys).toContain('customer');
    expect(hiddenKeys).not.toContain('resolution');
    expect(anchor).toBe(more);

    // The click focused the input. Leave the field so the hint shows.
    canvas.getByRole('textbox', {
      name: 'Filter or search'
    }).blur();
    await waitFor(() => expect(canvas.getByText('/')).toBeVisible());
  }
}`,...(je=(Pe=le.parameters)==null?void 0:Pe.docs)==null?void 0:je.source}}};var _e,Ne,qe;ce.parameters={...ce.parameters,docs:{...(_e=ce.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: 'Filter or search'
    });
    expect(canvas.getByText('/')).toBeVisible();
    await userEvent.click(input);
    await waitFor(() => expect(input).toHaveFocus());

    // The shortcut hint hides while the field has focus.
    expect(canvas.queryByText('/')).not.toBeInTheDocument();

    // It comes back on blur, also when the input has text.
    await userEvent.type(input, 'acme');
    input.blur();
    await waitFor(() => expect(canvas.getByText('/')).toBeVisible());
    await userEvent.clear(input);
    input.blur();
  }
}`,...(qe=(Ne=ce.parameters)==null?void 0:Ne.docs)==null?void 0:qe.source}}};var Ke,$e,We;ue.parameters={...ue.parameters,docs:{...(Ke=ue.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('textbox', {
      name: 'Filter or search'
    })).toBeDisabled();
    expect(canvas.getByRole('button', {
      name: /^Remove filter: Stage/
    })).toBeDisabled();
    expect(canvas.queryByRole('button', {
      name: 'Clear all filters'
    })).not.toBeInTheDocument();
    expect(canvas.queryByText('/')).not.toBeInTheDocument();
  }
}`,...(We=($e=ue.parameters)==null?void 0:$e.docs)==null?void 0:We.source}}};var ze,Ue,Qe;pe.parameters={...pe.parameters,docs:{...(ze=pe.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  render: args => <VStack alignItems="start" gap="12">
      <Box as="input" aria-label="Notes" w="xs" h="32" px="8" borderWidth="1" borderStyle="solid" borderColor="border" borderRadius="4" bg="surface" color="text" />
      <FieldDemo shortcut={args.shortcut} />
    </VStack>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: 'Filter or search'
    });
    const notes = canvas.getByRole('textbox', {
      name: 'Notes'
    });

    // "/" typed in another text field stays there.
    await userEvent.type(notes, 'a/b');
    expect(notes).toHaveValue('a/b');
    expect(input).not.toHaveFocus();

    // Anywhere else, "/" focuses the field and is not typed.
    notes.blur();
    await userEvent.keyboard('/');
    await waitFor(() => expect(input).toHaveFocus());
    expect(input).toHaveValue('');

    // Leave the field so the hint shows again.
    input.blur();
    await waitFor(() => expect(canvas.getByText('/')).toBeVisible());
  }
}`,...(Qe=(Ue=pe.parameters)==null?void 0:Ue.docs)==null?void 0:Qe.source}}};var Ye,Xe,Ge;de.parameters={...de.parameters,docs:{...(Ye=de.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  name: 'Backspace removes',
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox', {
      name: 'Filter or search'
    });
    const entered = () => canvas.queryByRole('group', {
      name: 'Entered On is on or after Sep 1, 2026'
    });
    await userEvent.click(input);

    // Backspace in text deletes text and arms nothing.
    await userEvent.type(input, 'a{Backspace}');
    expect(entered()).toHaveAttribute('data-state', 'applied');

    // The first Backspace arms the last token. Another key disarms it.
    await userEvent.keyboard('{Backspace}');
    await waitFor(() => expect(entered()).toHaveAttribute('data-state', 'armed'));
    await userEvent.keyboard('{ArrowLeft}');
    await waitFor(() => expect(entered()).toHaveAttribute('data-state', 'applied'));

    // Two Backspaces in a row remove it.
    await userEvent.keyboard('{Backspace}{Backspace}');
    await waitFor(() => expect(entered()).not.toBeInTheDocument());
    expect(input).toHaveFocus();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Reset'
    }));
    await waitFor(() => expect(entered()).toBeVisible());
  }
}`,...(Ge=(Xe=de.parameters)==null?void 0:Xe.docs)==null?void 0:Ge.source}}};var Je,Ze,et;me.parameters={...me.parameters,docs:{...(Je=me.parameters)==null?void 0:Je.docs,source:{originalSource:`{
  render: () => <EditingDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const stage = () => canvas.getByRole('group', {
      name: 'Stage is any of Open, In progress'
    });

    // A click on a value moves the input into that token, with focus.
    await userEvent.click(canvas.getByRole('button', {
      name: 'Open, In progress'
    }));
    await waitFor(() => expect(stage()).toHaveAttribute('data-state', 'editing'));
    const inline = within(stage()).getByRole('textbox', {
      name: 'Filter or search'
    });
    await waitFor(() => expect(inline).toHaveFocus());
    await userEvent.type(inline, 'Wai');
    expect(inline).toHaveValue('Wai');

    // Esc moves the input back to the end, and focus stays in it.
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(stage()).toHaveAttribute('data-state', 'applied'));
    const input = canvas.getByRole('textbox', {
      name: 'Filter or search'
    });
    expect(within(stage()).queryByRole('textbox')).not.toBeInTheDocument();
    await waitFor(() => expect(input).toHaveFocus());

    // Leave the story at rest for the visual snapshot.
    await userEvent.clear(input);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Open, In progress'
    }));
    await waitFor(() => expect(stage()).toHaveAttribute('data-state', 'editing'));
  }
}`,...(et=(Ze=me.parameters)==null?void 0:Ze.docs)==null?void 0:et.source}}};var tt,nt,at;ye.parameters={...ye.parameters,docs:{...(tt=ye.parameters)==null?void 0:tt.docs,source:{originalSource:`{
  render: () => <LocaleProvider labels={{
    filterOrSearch: 'Filtrar o buscar',
    clearFilters: 'Quitar todos los filtros',
    moreFilters: count => \`+\${count} más\`
  }}>
      <FieldDemo initial={MANY_FILTERS} width="2xl" />
    </LocaleProvider>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('textbox', {
      name: 'Filtrar o buscar'
    })).toBeVisible();
    expect(canvas.getByRole('button', {
      name: 'Quitar todos los filtros'
    })).toBeVisible();
    expect(await canvas.findByRole('button', {
      name: /^\\+\\d más$/
    })).toBeVisible();
  }
}`,...(at=(nt=ye.parameters)==null?void 0:nt.docs)==null?void 0:at.source}}};var ot,st,it;he.parameters={...he.parameters,docs:{...(ot=he.parameters)==null?void 0:ot.docs,source:{originalSource:`{
  name: 'Ex: Add a filter',
  render: () => <AddFilterDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    const input = () => canvas.getByRole('combobox', {
      name: 'Filter or search'
    });

    // Typing narrows the fields. Enter starts a Stage token, and the input
    // moves into it.
    await userEvent.click(input());
    await userEvent.type(input(), 'sta');
    await body.findByRole('option', {
      name: /^Stage/
    });
    await userEvent.keyboard('{Enter}');
    // While a combobox menu is open, Floating UI hides the rest of the page
    // from screen readers, tokens included. So token queries allow hidden.
    const stage = () => canvas.getByRole('group', {
      name: /^Stage/,
      hidden: true
    });
    await waitFor(() => expect(stage()).toHaveAttribute('data-state', 'editing'));
    await waitFor(() => expect(within(stage()).getByRole('combobox', {
      hidden: true
    })).toHaveFocus());

    // Space toggles the active value. Arrow keys move.
    await body.findByRole('option', {
      name: /^Open/
    });
    await userEvent.keyboard(' {ArrowDown} ');
    await waitFor(() => expect(stage()).toHaveAccessibleName('Stage is any of Open, In progress'));

    // Enter on the empty input ends the edit. The input goes back to the end.
    await userEvent.keyboard('{Enter}');
    await waitFor(() => expect(stage()).toHaveAttribute('data-state', 'applied'));
    await waitFor(() => expect(input()).toHaveFocus());

    // Leave the menu open for the visual snapshot.
    await userEvent.type(input(), 'p');
    await body.findByRole('option', {
      name: /^Priority/
    });
  }
}`,...(it=(st=he.parameters)==null?void 0:st.docs)==null?void 0:it.source}}};var rt,lt,ct;ve.parameters={...ve.parameters,docs:{...(rt=ve.parameters)==null?void 0:rt.docs,source:{originalSource:`{
  name: 'Ex: Filter bar with Apply',
  render: () => <StagedFilterBarDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    // While a combobox menu is open, Floating UI hides the rest of the page
    // from screen readers. So queries in the field allow hidden elements.
    const token = (name: RegExp) => canvas.getByRole('group', {
      name,
      hidden: true
    });
    const part = (name: RegExp, partName: string) => within(token(name)).getByRole('button', {
      name: partName,
      hidden: true
    });
    const applyButton = () => canvas.queryByRole('button', {
      name: /^Apply/,
      hidden: true
    });
    // The input remounts when it moves into a token, so find it each time.
    const input = () => canvas.getByRole('combobox', {
      name: 'Filter or search',
      hidden: true
    });

    // A click on the value opens its menu, with the picked values checked.
    // A new pick waits for Apply.
    await userEvent.click(part(/^Stage/, 'Open, In progress'));
    await waitFor(() => expect(token(/^Stage/)).toHaveAttribute('data-state', 'editing'));
    await userEvent.click(await body.findByRole('option', {
      name: /^Waiting on customer/
    }));
    await userEvent.keyboard('{Enter}');
    await waitFor(() => expect(token(/^Stage/)).toHaveAttribute('data-state', 'pending'));
    expect(applyButton()).toHaveTextContent('Apply (1)');

    // Esc cancels an edit and puts the token back as it was.
    await userEvent.click(part(/^Stage/, 'Stage'));
    await body.findByRole('option', {
      name: /^Open/
    });
    await userEvent.keyboard(' ');
    await waitFor(() => expect(token(/^Stage/)).toHaveAccessibleName('Stage is any of In progress, Waiting on customer'));
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(token(/^Stage/)).toHaveAccessibleName('Stage is any of Open, In progress, Waiting on customer'));

    // The operator menu switches to an excluding operator.
    await userEvent.click(part(/^Priority/, 'is'));
    await userEvent.click(await body.findByRole('option', {
      name: /^is not/
    }));
    await waitFor(() => expect(token(/^Priority/)).toHaveAttribute('data-tone', 'exclude'));
    expect(token(/^Priority/)).toHaveAttribute('data-state', 'pending');
    expect(applyButton()).toHaveTextContent('Apply (2)');

    // Apply makes the draft the applied set.
    await userEvent.click(applyButton()!);
    await waitFor(() => expect(applyButton()).toBeNull());
    expect(canvas.getByTestId('applied')).toHaveTextContent('Priority is not High');

    // The remove button applies at once. It does not wait for Apply.
    await userEvent.click(within(token(/^Priority/)).getByRole('button', {
      name: /^Remove filter/,
      hidden: true
    }));
    await waitFor(() => expect(canvas.getByTestId('applied')).not.toHaveTextContent('Priority'));
    expect(applyButton()).toBeNull();

    // Backspace twice removes the last filter, also at once.
    await userEvent.click(input());
    await userEvent.keyboard('{Backspace}{Backspace}');
    await waitFor(() => expect(canvas.getByTestId('applied')).not.toHaveTextContent('Customer'));
    expect(applyButton()).toBeNull();

    // An edit waits for Apply. Esc with no menu open throws it away.
    await userEvent.click(part(/^Stage/, 'Stage'));
    await userEvent.click(await body.findByRole('option', {
      name: /^Closed/
    }));
    await userEvent.keyboard('{Enter}');
    await waitFor(() => expect(applyButton()).toHaveTextContent('Apply (1)'));
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(applyButton()).toBeNull());

    // Typing finds fields, values and a text search. Leave the menu open for
    // the visual snapshot.
    await userEvent.type(input(), 'clo');
    // The test library drops the space before a highlight, so the name is
    // matched on the value alone.
    await body.findByRole('option', {
      name: /Closed$/
    });
  }
}`,...(ct=(lt=ve.parameters)==null?void 0:lt.docs)==null?void 0:ct.source}}};export{de as BackspaceRemoves,ie as Default,ue as Disabled,me as EditingInPlace,re as Empty,he as ExAddAFilter,ve as ExFilterBarWithApply,ce as Focused,le as Overflow,pe as Shortcut,ye as TranslatedLabels,yn as __namedExportsOrder,mn as default};
