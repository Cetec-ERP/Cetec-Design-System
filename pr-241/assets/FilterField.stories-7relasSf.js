import{m as Lt,e as $t,f as Mt,g as Nt,h as jt,s as Vt,r as h,Y as Pt,j as m,B as ne,c as qe,d as _t,a as qt,V as ue,T as Oe,H as Ke}from"./iframe-H8xhFwkI.js";import{L as Kt}from"./LocaleProvider-D00wP6eh.js";import{u as Wt}from"./useLocale-DWOuK1-L.js";import{B as le}from"./Button-DtrchsKK.js";import{u as Ct,F as Ht}from"./FilterMenu-Cctg8aA9.js";import{F as Ut}from"./FilterToken-B7ysQtPy.js";import{I as zt}from"./IconButton-_BbsFynU.js";import{K as Gt}from"./Kbd-GqQfbwwQ.js";import{u as Yt}from"./useOverflowItems-B3ptTv2E.js";import"./preload-helper-BtVfDqlS.js";import"./Spinner-WK0Mz0fi.js";import"./FieldContext-DInEoleQ.js";import"./ListItem--h_LaqWK.js";import"./HighlightText-Deb6rchl.js";import"./Checkbox-lNW42uyL.js";import"./Divider-aMtEFuUi.js";import"./Toggle-BMGwTiID.js";import"./ListItemGroup-SUyCwlrd.js";import"./FloatingLayerContext-BqfTgN7r.js";const It={},Xt=[],Qt=[["root","filterField__root"],["icon","filterField__icon"],["values","filterField__values"],["sizer","filterField__sizer"],["token","filterField__token"],["input","filterField__input"],["more","filterField__more"],["shortcut","filterField__shortcut"],["clear","filterField__clear"]],Jt=Qt.map(([a,o])=>[a,Nt(o,It,jt(Xt,a))]),Zt=Lt((a={})=>Object.fromEntries(Jt.map(([o,t])=>[o,t.recipeFn(a)]))),We=[],en=a=>({...It,...$t(a)}),tn=Object.assign(Zt,{__recipe__:!1,__name__:"filterField",raw:a=>a,classNameMap:{},variantKeys:We,variantMap:{},splitVariantProps(a){return Mt(a,We)},getVariantProps:en}),nn=96,an=a=>a instanceof HTMLElement&&!!a.closest('input, textarea, select, [contenteditable=""], [contenteditable="true"]'),ae=a=>{const{tokens:o,inputValue:t,onInputChange:l,inputProps:n,inputRef:f,placeholder:u,editingKey:p=null,onMoreClick:E,moreOpen:g,onClearAll:S,clearLabel:B,shortcut:k,disabled:v,...N}=a,[G,V]=Vt(N),F=tn(),{labels:d}=Wt(),[L,C]=h.useState(null),[oe,P]=h.useState(!1),ie=h.useRef(null),K=h.useRef(null),_=h.useRef(null),U=h.useRef(null),se=h.useRef(new Map),J=h.useRef(!1),de=h.useCallback(e=>{if(e){U.current=e,J.current&&(J.current=!1,e.focus());return}U.current&&U.current===U.current.ownerDocument.activeElement&&(J.current=!0)},[]),me=Pt([de,f]),z=h.useCallback(()=>{var e;return(e=U.current)==null?void 0:e.focus()},[]),ye=o.filter(e=>e.onRemove&&e.state!=="removing"),b=ye[ye.length-1],Z=L!==null&&(b==null?void 0:b.key)===L?L:null,H=o.map(e=>e.key),j=h.useCallback(e=>se.current.get(e)??null,[]),{visible:$,overflow:x}=Yt({items:H,containerRef:K,getItemElement:j,activeItem:p??Z,reserve:nn,reserveRef:_}),ee=x.filter(e=>H.includes(e)),q=o.filter(e=>ee.includes(e.key)),W=new Set($);h.useEffect(()=>{if(!k||v)return;const e=i=>{i.key!==k||i.metaKey||i.ctrlKey||i.altKey||i.defaultPrevented||an(i.target)||(i.preventDefault(),z())};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[k,v,z]);const re=e=>{var i,c;if((i=n==null?void 0:n.onKeyDown)==null||i.call(n,e),!e.defaultPrevented){if(e.key!=="Backspace"){C(null);return}t!==""||p!==null||!b||(e.preventDefault(),Z===b.key?(C(null),(c=b.onRemove)==null||c.call(b)):C(b.key))}},te=e=>e&&((...i)=>{z(),e(...i)}),he=e=>m.jsx("input",{type:"text",autoComplete:"off",spellCheck:!1,"aria-label":d.filterOrSearch,"aria-keyshortcuts":k,...n,ref:me,className:qe(F.input,n==null?void 0:n.className),"data-inline":e||void 0,size:e?Math.max(t.length,1):void 0,value:t,placeholder:e?void 0:u,disabled:v,onChange:i=>{C(null),l(i.target.value)},onKeyDown:re}),Se=p!==null&&W.has(p),Y=!!S&&!v&&(o.length>0||t!=="");return m.jsxs(ne,{..._t("FilterField"),ref:ie,className:qe(F.root,G),"data-disabled":v||void 0,"data-has-clear":Y||void 0,onFocusCapture:()=>P(!0),onBlurCapture:e=>{var i;(i=ie.current)!=null&&i.contains(e.relatedTarget)||(P(!1),C(null))},onMouseDown:e=>{v||e.target!==e.currentTarget||(e.preventDefault(),z())},...V,children:[m.jsx(qt,{name:"search",size:"20",fill:v?"icon.disabled":"icon.subtle",className:F.icon,"aria-hidden":!0}),m.jsxs(ne,{className:F.values,onMouseDown:e=>{v||e.target!==e.currentTarget||(e.preventDefault(),z())},children:[m.jsx(ne,{ref:K,className:F.sizer,"aria-hidden":!0}),o.map(({key:e,...i})=>{const c=!W.has(e),T=e===p&&!c;return m.jsx(ne,{as:"span",ref:w=>{w?se.current.set(e,w):se.current.delete(e)},className:F.token,"data-overflowed":c||void 0,inert:c||void 0,children:m.jsx(Ut,{...i,state:e===Z?"armed":i.state,disabled:v,retainFocus:!0,editor:T?he(!0):void 0,onFieldClick:te(i.onFieldClick),onOperatorClick:te(i.onOperatorClick),onValueClick:te(i.onValueClick),onRemove:te(i.onRemove)})},e)}),q.length>0&&m.jsx(le,{ref:_,size:"sm",variant:"hollow",iconAfter:"caret-down",className:F.more,disabled:v,"aria-expanded":E?!!g:void 0,"data-open":g||void 0,"data-pending":q.some(e=>e.state==="pending"||e.state==="removing")||void 0,onMouseDown:e=>e.preventDefault(),onClick:e=>{z(),E==null||E(ee,e.currentTarget)},children:d.moreFilters(q.length)}),!Se&&he(!1)]}),k&&!oe&&!v&&m.jsx(Gt,{keys:[k],className:F.shortcut}),Y&&m.jsx(zt,{variant:"ghost",size:"sm",iconName:"x",altText:B??d.clearFilters,className:F.clear,onMouseDown:e=>e.preventDefault(),onClick:()=>{C(null),z(),S==null||S()}})]})};ae.__docgenInfo={description:`The filter bar's field: the applied filters as tokens, followed by one
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
the field does not have focus.`},disabled:{required:!1,tsType:{name:"boolean"},description:"Disables the input, the tokens and the buttons."}}};const{expect:s,fn:Ce,userEvent:r,waitFor:y,within:M}=__STORYBOOK_MODULE_TEST__,Pe=[{id:"resolution",field:"Resolution",operator:"is",value:"All open",locked:!0},{id:"stage",field:"Stage",operator:"is any of",value:["Open","In progress"]},{id:"entered",field:"Entered On",operator:"is on or after",value:"Sep 1, 2026"}],Dt=[...Pe,{id:"assigned",field:"Assigned To",operator:"is any of",value:["Brent Barton","David Atkins"],state:"pending"},{id:"type",field:"Case Type",operator:"is",value:"Warranty"},{id:"customer",field:"Customer",operator:"is",value:"Acme Corp"}],pe=({initial:a=Pe,width:o="full",shortcut:t="/",...l})=>{const[n,f]=h.useState(a),[u,p]=h.useState(""),E=g=>f(S=>S.filter(B=>B.id!==g));return m.jsxs(ue,{alignItems:"start",gap:"12",children:[m.jsx(ae,{w:o,tokens:n.map(g=>({key:g.id,field:g.field,operator:g.operator,value:g.value,state:g.state,operatorLocked:g.locked,onRemove:()=>E(g.id)})),inputValue:u,onInputChange:p,placeholder:"Filter or search…",shortcut:t,onClearAll:()=>{f([]),p("")},...l}),m.jsx(le,{size:"sm",variant:"ghost",onClick:()=>f(a),children:"Reset"})]})},Mn={title:"Components/FilterField",component:ae,parameters:{layout:"padded"},args:{tokens:[],inputValue:"",onInputChange:Ce(),onClearAll:Ce(),onMoreClick:Ce(),shortcut:"/"},render:a=>m.jsx(pe,{shortcut:a.shortcut,disabled:a.disabled,onMoreClick:a.onMoreClick})},fe={play:async({canvasElement:a})=>{const o=M(a),t=o.getByRole("textbox",{name:"Filter or search"});s(o.getByRole("group",{name:"Stage is any of Open, In progress"})).toBeVisible(),s(t).toHaveAttribute("aria-keyshortcuts","/"),await r.click(t),await r.type(t,"acme"),s(t).toHaveValue("acme"),await r.click(o.getByRole("button",{name:"Clear all filters"})),await y(()=>s(o.queryAllByRole("group")).toHaveLength(0)),s(t).toHaveValue(""),s(t).toHaveFocus(),await r.click(o.getByRole("button",{name:"Reset"})),await y(()=>s(o.getAllByRole("group")).toHaveLength(3))}},we={render:a=>m.jsx(pe,{initial:[],shortcut:a.shortcut}),play:async({canvasElement:a})=>{const o=M(a);s(o.queryByRole("button",{name:"Clear all filters"})).not.toBeInTheDocument(),s(o.getByText("/")).toBeVisible(),s(o.getByRole("textbox",{name:"Filter or search"})).toHaveAttribute("placeholder","Filter or search…")}},on=a=>a.mock.calls[0],ve={render:a=>m.jsx(pe,{initial:Dt,width:"2xl",onMoreClick:a.onMoreClick}),play:async({args:a,canvasElement:o})=>{const t=M(o),l=await t.findByRole("button",{name:/^\+\d more$/});s(l).toHaveAttribute("data-pending"),s(t.getByRole("group",{name:"Resolution is All open"})).toBeVisible(),s(t.queryByRole("group",{name:"Customer is Acme Corp"})).not.toBeInTheDocument(),await r.click(l),s(a.onMoreClick).toHaveBeenCalledOnce();const[n,f]=on(a.onMoreClick);s(n).toContain("customer"),s(n).not.toContain("resolution"),s(f).toBe(l),t.getByRole("textbox",{name:"Filter or search"}).blur(),await y(()=>s(t.getByText("/")).toBeVisible())}},ge={play:async({canvasElement:a})=>{const o=M(a),t=o.getByRole("textbox",{name:"Filter or search"});s(o.getByText("/")).toBeVisible(),await r.click(t),await y(()=>s(t).toHaveFocus()),s(o.queryByText("/")).not.toBeInTheDocument(),await r.type(t,"acme"),t.blur(),await y(()=>s(o.getByText("/")).toBeVisible()),await r.clear(t),t.blur()}},be={args:{disabled:!0},play:async({canvasElement:a})=>{const o=M(a);s(o.getByRole("textbox",{name:"Filter or search"})).toBeDisabled(),s(o.getByRole("button",{name:/^Remove filter: Stage/})).toBeDisabled(),s(o.queryByRole("button",{name:"Clear all filters"})).not.toBeInTheDocument(),s(o.queryByText("/")).not.toBeInTheDocument()}},ke={render:a=>m.jsxs(ue,{alignItems:"start",gap:"12",children:[m.jsx(ne,{as:"input","aria-label":"Notes",w:"xs",h:"32",px:"8",borderWidth:"1",borderStyle:"solid",borderColor:"border",borderRadius:"4",bg:"surface",color:"text"}),m.jsx(pe,{shortcut:a.shortcut})]}),play:async({canvasElement:a})=>{const o=M(a),t=o.getByRole("textbox",{name:"Filter or search"}),l=o.getByRole("textbox",{name:"Notes"});await r.type(l,"a/b"),s(l).toHaveValue("a/b"),s(t).not.toHaveFocus(),l.blur(),await r.keyboard("/"),await y(()=>s(t).toHaveFocus()),s(t).toHaveValue(""),t.blur(),await y(()=>s(o.getByText("/")).toBeVisible())}},xe={name:"Backspace removes",play:async({canvasElement:a})=>{const o=M(a),t=o.getByRole("textbox",{name:"Filter or search"}),l=()=>o.queryByRole("group",{name:"Entered On is on or after Sep 1, 2026"});await r.click(t),await r.type(t,"a{Backspace}"),s(l()).toHaveAttribute("data-state","applied"),await r.keyboard("{Backspace}"),await y(()=>s(l()).toHaveAttribute("data-state","armed")),await r.keyboard("{ArrowLeft}"),await y(()=>s(l()).toHaveAttribute("data-state","applied")),await r.keyboard("{Backspace}{Backspace}"),await y(()=>s(l()).not.toBeInTheDocument()),s(t).toHaveFocus(),await r.click(o.getByRole("button",{name:"Reset"})),await y(()=>s(l()).toBeVisible())}},sn=()=>{const[a,o]=h.useState(null),[t,l]=h.useState("");return m.jsxs(ue,{alignItems:"start",gap:"12",children:[m.jsx(ae,{w:"full",tokens:Pe.map(n=>({key:n.id,field:n.field,operator:n.operator,value:n.value,state:n.id===a?"editing":"applied",operatorLocked:n.locked,onValueClick:()=>o(n.id)})),inputValue:t,onInputChange:l,inputProps:{onKeyDown:n=>{n.key==="Escape"&&o(null)}},placeholder:"Filter or search…",editingKey:a,shortcut:"/"}),m.jsx(Oe,{textStyle:"body.sm",color:"text.subtlest",children:"Click a value to edit it in place. Esc ends the edit."})]})},Ee={render:()=>m.jsx(sn,{}),play:async({canvasElement:a})=>{const o=M(a),t=()=>o.getByRole("group",{name:"Stage is any of Open, In progress"});await r.click(o.getByRole("button",{name:"Open, In progress"})),await y(()=>s(t()).toHaveAttribute("data-state","editing"));const l=M(t()).getByRole("textbox",{name:"Filter or search"});await y(()=>s(l).toHaveFocus()),await r.type(l,"Wai"),s(l).toHaveValue("Wai"),await r.keyboard("{Escape}"),await y(()=>s(t()).toHaveAttribute("data-state","applied"));const n=o.getByRole("textbox",{name:"Filter or search"});s(M(t()).queryByRole("textbox")).not.toBeInTheDocument(),await y(()=>s(n).toHaveFocus()),await r.clear(n),await r.click(o.getByRole("button",{name:"Open, In progress"})),await y(()=>s(t()).toHaveAttribute("data-state","editing"))}},Be={render:()=>m.jsx(Kt,{labels:{filterOrSearch:"Filtrar o buscar",clearFilters:"Quitar todos los filtros",moreFilters:a=>`+${a} más`},children:m.jsx(pe,{initial:Dt,width:"2xl"})}),play:async({canvasElement:a})=>{const o=M(a);s(o.getByRole("textbox",{name:"Filtrar o buscar"})).toBeVisible(),s(o.getByRole("button",{name:"Quitar todos los filtros"})).toBeVisible(),s(await o.findByRole("button",{name:/^\+\d más$/})).toBeVisible()}},Ue={Stage:["Open","In progress","Waiting on customer","Closed"],"Case Type":["Warranty","Repair","Question"],Priority:["High","Medium","Low"]},rn=()=>{const[a,o]=h.useState([]),[t,l]=h.useState(""),[n,f]=h.useState({type:"closed"}),[u,p]=h.useState(null),[E,g]=h.useState(null),S=a.find(d=>d.id===u),B=S&&Array.isArray(S.value)?S.value:[],k=t.trim().toLowerCase(),v=[];if(n.type==="fields"){v.push({type:"group",label:"Fields"});for(const d of Object.keys(Ue))d.toLowerCase().includes(k)&&v.push({type:"item",key:d,label:d,detail:"list"})}else if(n.type==="values"&&S){v.push({type:"group",label:`${S.field} is any of`});for(const d of Ue[S.field]??[])d.toLowerCase().includes(k)&&v.push({type:"item",key:d,label:d,checked:B.includes(d)})}k&&!v.some(d=>d.type==="item")&&v.push({type:"empty",label:`No match for “${t}”`});const N=()=>{o(d=>d.filter(L=>L.id!==u||L.value.length>0)),p(null),f({type:"closed"}),l("")},G=d=>{p(d),f({type:"values"}),l("")},V=d=>{if(n.type==="fields"){const L=`${d}-${a.length}`;o(C=>[...C,{id:L,field:d,operator:"is any of",value:[]}]),G(L);return}o(L=>L.map(C=>C.id===u?{...C,value:B.includes(d)?B.filter(oe=>oe!==d):[...B,d]}:C)),l("")},F=Ct({rows:v,open:n.type!=="closed",onSelect:V,onClose:N,spaceSelects:n.type==="values"&&t===""});return m.jsxs(ue,{alignItems:"start",gap:"12",minH:"sm",children:[m.jsx(ae,{w:"full",tokens:a.map(d=>({key:d.id,field:d.field,operator:d.operator,value:d.value,state:d.id===u?"editing":"applied",onValueClick:()=>G(d.id),onRemove:()=>{d.id===u&&N(),o(L=>L.filter(C=>C.id!==d.id))}})),inputValue:t,onInputChange:d=>{l(d),F.setActiveKey(null),n.type==="closed"&&f({type:"fields"})},inputRef:g,inputProps:{...F.inputProps,onFocus:()=>{n.type==="closed"&&f({type:"fields"})},onKeyDown:d=>{if(d.key==="Enter"&&n.type==="values"&&!t){d.preventDefault(),N();return}F.inputProps.onKeyDown(d)}},placeholder:"Filter or search…",editingKey:u,shortcut:"/",onClearAll:()=>{o([]),N()}}),m.jsx(Ht,{...F.menuProps,anchor:E,"aria-label":n.type==="values"?"Values":"Fields",query:t,footer:n.type==="values"?"Space toggles · Enter done · Esc done":"Type a field · Enter picks"})]})},Te={name:"Ex: Add a filter",render:()=>m.jsx(rn,{}),play:async({canvasElement:a})=>{const o=M(a),t=M(a.ownerDocument.body),l=()=>o.getByRole("combobox",{name:"Filter or search"});await r.click(l()),await r.type(l(),"sta"),await t.findByRole("option",{name:/^Stage/}),await r.keyboard("{Enter}");const n=()=>o.getByRole("group",{name:/^Stage/,hidden:!0});await y(()=>s(n()).toHaveAttribute("data-state","editing")),await y(()=>s(M(n()).getByRole("combobox",{hidden:!0})).toHaveFocus()),await t.findByRole("option",{name:/^Open/}),await r.keyboard(" {ArrowDown} "),await y(()=>s(n()).toHaveAccessibleName("Stage is any of Open, In progress")),await r.keyboard("{Enter}"),await y(()=>s(n()).toHaveAttribute("data-state","applied")),await y(()=>s(l()).toHaveFocus()),await r.type(l(),"p"),await t.findByRole("option",{name:/^Priority/})}},ln=[{name:"Acme Corp",description:"Austin, TX"},{name:"Apex Machining",description:"Dallas, TX"},{name:"Bluebird Labs",description:"Denver, CO"},{name:"Cobalt Motors",description:"Detroit, MI"},{name:"Delta Fabrication",description:"Tulsa, OK"},{name:"Evergreen Plastics",description:"Portland, OR"},{name:"Granite Controls",description:"Austin, TX"},{name:"Harbor Instruments",description:"Seattle, WA"},{name:"Ironwood Tooling",description:"Akron, OH"},{name:"Juniper Medical",description:"Boise, ID"}],cn=[{name:"HNG-1001",description:"Hinge, 110°, full overlay"},{name:"HNG-1002",description:"Hinge, 110°, half overlay"},{name:"HNG-1010",description:"Hinge, soft close, clip-on"},{name:"PLT-2001",description:"Mounting plate, steel"},{name:"SLD-3018",description:"Drawer slide, full extension, 18 in"},{name:"SLD-3021",description:"Drawer slide, full extension, 21 in"},{name:"LEV-4001",description:"Cabinet leveler, adjustable"},{name:"SCR-5005",description:"Screw, euro, 5 x 13 mm"},{name:"KIT-6001",description:"Install kit, base cabinet"},{name:"KIT-6002",description:"Install kit, water damage repair"}],X={Resolution:{kind:"one",ops:["in"],groups:[{value:"@open",label:"All open"},{value:"@closed",label:"All closed"}],options:["Fixed","Duplicate","Will not fix"]},Stage:{kind:"many",ops:["in"],options:["Open","In progress","Waiting on customer","Closed"]},Priority:{kind:"one",ops:["in"],options:["High","Medium","Low"]},Customer:{kind:"lookup",ops:["in"],records:ln,prompt:"Type a customer name"},Part:{kind:"lookup",ops:["in"],records:cn,multiple:!0,prompt:"Type a part number or text"},Intercompany:{kind:"one",ops:["in"],options:["Yes","No"]},"Entered On":{kind:"date",ops:["between","onOrAfter","onOrBefore"]},"Cust PO":{kind:"text",ops:["contains"]},Search:{kind:"text",ops:["contains"]}},un=Object.keys(X).filter(a=>a!=="Search"),pn={many:"pick many",one:"pick one",lookup:"search",date:"date",text:"text"},Le={between:"is between",onOrAfter:"is on or after",onOrBefore:"is on or before",contains:"contains"},He=8,Re="2026-10-20",ze=Number(Re.slice(0,4)),dn=[{label:"Start of this month",value:"2026-10-01"},{label:"Start of last month",value:"2026-09-01"},{label:"Start of the year",value:"2026-01-01"}],mn=[{label:"Last 7 days",values:["2026-10-14",Re]},{label:"Last 30 days",values:["2026-09-21",Re]},{label:"This month",values:["2026-10-01",Re]},{label:"Last month",values:["2026-09-01","2026-09-30"]},{label:"Last quarter",values:["2026-07-01","2026-09-30"]}],ce=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],$e=a=>a.split("-").map(Number),Q=a=>{const[o,t,l]=$e(a);return`${ce[(t??1)-1]} ${l}, ${o}`},Me=(a,o)=>{const[t,l,n]=$e(a),[f,u,p]=$e(o);return t!==f?`${Q(a)} – ${Q(o)}`:l===u?`${ce[(l??1)-1]} ${n} – ${p}, ${f}`:`${ce[(l??1)-1]} ${n} – ${ce[(u??1)-1]} ${p}, ${f}`},Ie=(a,o,t)=>o<1||o>12||t<1||t>31?null:`${a}-${String(o).padStart(2,"0")}-${String(t).padStart(2,"0")}`,Ne=a=>{const o=a.trim().toLowerCase();let t=o.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);if(t)return Ie(Number(t[1]),Number(t[2]),Number(t[3]));if(t=o.match(/^(\d{1,2})\/(\d{1,2})(?:\/(\d{4}))?$/),t)return Ie(t[3]?Number(t[3]):ze,Number(t[1]),Number(t[2]));if(t=o.match(/^([a-z]{3})[a-z]*\.? (\d{1,2})(?:,? (\d{4}))?$/),t){const l=ce.findIndex(n=>n.toLowerCase()===(t==null?void 0:t[1]));if(l>=0)return Ie(t[3]?Number(t[3]):ze,l+1,Number(t[2]))}return null},yn=a=>{const o=a.trim().split(/\s+(?:-|to)\s+|\s*–\s*/i);if(o.length!==2)return null;const t=Ne(o[0]??""),l=Ne(o[1]??"");return!t||!l?null:t<=l?[t,l]:[l,t]},_e="*",Ae=a=>a.startsWith(_e),je=a=>`“${Ae(a)?a.slice(_e.length):a}”`,hn=(a,o)=>{var t,l,n;return((n=(l=(t=X[a])==null?void 0:t.groups)==null?void 0:l.find(f=>f.value===o))==null?void 0:n.label)??o},fn=a=>a==="between"?2:1,De=a=>a.values.length>=fn(a.op),Ve=a=>{const o=X[a.field];if(a.op==="between"){const[p,E]=a.values;return{operator:Le.between,value:p&&E?Me(p,E):p?`${Q(p)} –`:""}}if(a.op!=="in"){const p=a.values[0];return{operator:Le[a.op],value:p?(o==null?void 0:o.kind)==="date"?Q(p):je(p):""}}const t=a.values.filter(p=>!Ae(p)),l=a.values.filter(Ae).map(je).join(" or "),n=t.length>1?"is any of":"is",f=t.map(p=>hn(a.field,p)),u=(o==null?void 0:o.kind)==="many"||o!=null&&o.multiple?f:f[0]??"";return l?t.length===0?{operator:"contains",value:l}:{operator:n,value:u,joined:{operator:"or contains",value:l}}:{operator:n,value:u}},Ge=a=>{const o=Ve(a),t=Array.isArray(o.value)?o.value.join(", "):o.value,l=o.joined?` ${o.joined.operator} ${o.joined.value}`:"";return`${a.field} ${o.operator} ${t}${l}`},Ot=(a,o)=>a.field===o.field&&a.op===o.op&&a.values.join(`
`)===o.values.join(`
`),Ye=(a,o)=>a.filter(t=>{const l=o.find(n=>n.id===t.id);return!l||!Ot(l,t)}).length,Xe=[{id:"resolution",field:"Resolution",op:"in",values:["@open"]},{id:"stage",field:"Stage",op:"in",values:["Open","In progress"]},{id:"entered",field:"Entered On",op:"between",values:["2026-09-01","2026-09-30"]}],wn=()=>{const[a,o]=h.useState(Xe),[t,l]=h.useState(Xe),[n,f]=h.useState(null),[u,p]=h.useState({type:"closed"}),[E,g]=h.useState(""),[S,B]=h.useState(null),[k,v]=h.useState(null),[N,G]=h.useState(!1),[V,F]=h.useState(null),d=h.useRef(null),L=h.useRef(0),C=h.useRef(!1);h.useEffect(()=>{if(!N)return;const e=window.setTimeout(()=>G(!1),800);return()=>window.clearTimeout(e)},[N]),h.useEffect(()=>{if(!V)return;const e=window.setTimeout(()=>F(null),6e3);return()=>window.clearTimeout(e)},[V]);const oe=e=>{const i=a.find(c=>c.id===e.id);return!i||!Ot(i,e)},P=Ye(t,a),ie=[...t.map(e=>(n==null?void 0:n.id)===e.id?{filter:n,state:"editing"}:{filter:e,state:oe(e)?"pending":"applied"}),...n&&!t.some(e=>e.id===n.id)?[{filter:n,state:"editing"}]:[]],K=()=>{u.type==="values"&&(C.current=!0,requestAnimationFrame(()=>{C.current=!1})),f(null),p({type:"closed"}),g(""),v(null),W.setActiveKey(null)},_=(e=n)=>{e&&!De(e)&&a.some(i=>i.id===e.id)?de(e.id):e&&l(i=>De(e)?i.some(c=>c.id===e.id)?i.map(c=>c.id===e.id?e:c):[...i,e]:i.filter(c=>c.id!==e.id)),K()},U=(e,i,c)=>{n&&n.id!==e.id&&_(n),f({...e,values:[...e.values]}),p({type:i,id:e.id}),g(""),v(c),W.setActiveKey(null)},se=e=>{const i=t.find(T=>T.field===e);if(i){U(i,"values",null);return}const c={id:`new-${L.current++}`,field:e,op:X[e].ops[0],values:[]};f(c),p({type:"values",id:c.id}),g(""),W.setActiveKey(null)},J=e=>{l(i=>{const c=i.find(T=>T.field==="Search");return c?i.map(T=>T.id===c.id?{...T,values:[e]}:T):[...i,{id:`new-${L.current++}`,field:"Search",op:"contains",values:[e]}]}),K()},de=e=>{(n==null?void 0:n.id)===e&&K(),l(i=>i.filter(c=>c.id!==e)),o(i=>i.filter(c=>c.id!==e)),G(!0)},me=()=>{o(t),F(null),G(!0),K()},z=()=>{F(t),l(a),K()},ye=()=>{V&&l(V),F(null)};h.useEffect(()=>{if(u.type==="closed")return;const e=i=>{var T;const c=i.target;(T=d.current)!=null&&T.contains(c)||c.closest("[data-filter-bar-menu]")||_()};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)});const b=[],Z=new Map,H=(e,i)=>{b.push({type:"item",...e}),Z.set(e.key,i)},j=E.trim(),$=j.toLowerCase(),x=n?X[n.field]:void 0,ee=u.type==="values"&&((x==null?void 0:x.kind)==="many"||(x==null?void 0:x.kind)==="lookup"&&!!x.multiple);let q="Enter picks · Esc cancels";if(u.type==="root"){const e=new Set(t.map(c=>c.field)),i=un.filter(c=>c.toLowerCase().includes($)).sort((c,T)=>Number(e.has(c))-Number(e.has(T)));i.length>0&&b.push({type:"group",label:"Fields"});for(const c of i)H({key:`field:${c}`,label:c,detail:pn[X[c].kind]},()=>se(c));$?(b.push({type:"group",label:"Search"}),H({key:"search",label:`Search contains “${j}”`,detail:"Tab"},()=>J(j)),q="Enter picks · Tab searches the text"):q=P>0?"Type a field or text · Enter applies":"Type a field or text · Enter picks"}if(u.type==="op"&&n&&x){b.push({type:"group",label:`${n.field} operator`});for(const e of x.ops)e!=="in"&&H({key:`op:${e}`,label:Le[e],selected:e===n.op,detail:e===n.op?"current":void 0},()=>{const i=e==="between"?n.values.slice(0,2):n.values.slice(0,1),c={...n,op:e,values:i};De(c)?_(c):(f(c),p({type:"values",id:c.id}),v(null))})}if(u.type==="values"&&n&&x){const e=Ve(n);b.push({type:"group",label:`${n.field} ${e.operator}`});const i=w=>{f({...n,values:n.values.includes(w)?n.values.filter(O=>O!==w):[...n.values,w]}),g("")},c=w=>_({...n,values:[w]}),T=w=>n.values.includes(w)?{selected:!0,detail:"current"}:{selected:!1};if(x.kind==="many"){for(const w of x.options??[])w.toLowerCase().includes($)&&H({key:w,label:w,checked:n.values.includes(w)},()=>i(w));q="Space toggles · Enter done · Esc cancels"}else if(x.kind==="one"){const w=(x.groups??[]).filter(R=>R.label.toLowerCase().includes($)),O=(x.options??[]).filter(R=>R.toLowerCase().includes($));for(const R of w)H({key:R.value,label:R.label,...T(R.value)},()=>c(R.value));w.length>0&&O.length>0&&b.push({type:"group",label:`Each ${n.field.toLowerCase()}`});for(const R of O)H({key:R,label:R,...T(R)},()=>c(R))}else if(x.kind==="lookup"){const w=x.records??[],O=I=>{var A;return(A=w.find(D=>D.name===I))==null?void 0:A.description},R=x.multiple?i:c;if($){const I=w.filter(A=>A.name.toLowerCase().includes($)||A.description.toLowerCase().includes($));for(const A of I.slice(0,He))H({key:A.name,label:A.name,description:A.description,...x.multiple?{checked:n.values.includes(A.name)}:T(A.name)},()=>R(A.name));if(I.length>He&&b.push({type:"empty",label:`${I.length-He} more · keep typing to narrow`}),x.multiple){const A=`${_e}${j}`;b.push({type:"group",label:"Or match the text"}),H({key:`text:${j}`,label:`contains “${j}”`,checked:n.values.includes(A)},()=>i(A))}}else{for(const I of n.values)H({key:`picked:${I}`,label:Ae(I)?`contains ${je(I)}`:I,description:O(I),...x.multiple?{checked:!0}:T(I)},()=>R(I));n.values.length===0&&b.push({type:"empty",label:x.prompt??"Type to find"})}q=x.multiple?"Type to find · Space toggles · Enter done · Esc cancels":"Type to find · Enter picks · Esc cancels"}else if(x.kind==="date"){const w=n.op==="between",O=w&&n.values.length===1?n.values[0]:void 0,R=D=>{if(!w)return c(D);if(!O){f({...n,values:[D]}),g(""),W.setActiveKey(null);return}_({...n,values:O<=D?[O,D]:[D,O]})};w&&O&&(b[b.length-1]={type:"group",label:`${n.field} is between ${Q(O)} and …`});const I=w&&!O&&$?yn(j):null;I&&H({key:"typed-range",label:Me(...I),detail:"typed"},()=>_({...n,values:I}));const A=$&&!I?Ne(j):null;if(A&&H({key:"typed",label:Q(A),detail:w?O?"end date":"start date":"typed"},()=>R(A)),w&&!O&&!$){for(const D of mn)H({key:`range:${D.label}`,label:D.label,detail:Me(...D.values)},()=>_({...n,values:D.values}));b.push({type:"group",label:"Or pick a start date"})}if(!$)for(const D of dn)H({key:D.value,label:D.label,detail:Q(D.value),selected:!w&&n.values[0]===D.value},()=>R(D.value));q=w?O?"Type or pick the end date · Esc cancels":"Type a range, such as 10/1 - 10/15 · Esc cancels":"Type a date, such as 10/15 · Esc cancels"}else $?H({key:"typed",label:`“${j}”`},()=>c(j)):b.push({type:"empty",label:"Type the text to match"}),q="Enter adds the text · Esc cancels";$&&!b.some(w=>w.type==="item")&&b.push({type:"empty",label:`No ${n.field.toLowerCase()} matches “${j}”`})}if(u.type==="more"){const e=ie.filter(i=>u.keys.includes(i.filter.id));b.push({type:"group",label:`${e.length} more filters`});for(const{filter:i,state:c}of e)H({key:i.id,label:Ge(i),detail:c==="pending"?c:void 0},()=>U(i,"values",null));q="Pick a filter to edit it"}const W=Ct({rows:b,open:u.type!=="closed",onSelect:e=>{var i;return(i=Z.get(e))==null?void 0:i()},onClose:K,spaceSelects:ee&&E===""}),re=()=>{u.type==="closed"&&p({type:"root"})},te=e=>{const i=E.trim()==="",c=u.type==="closed"||u.type==="root";if(e.key==="Enter"&&i&&c&&P>0){e.preventDefault(),me();return}if(e.key==="Enter"&&i&&ee){e.preventDefault(),_();return}if(e.key==="Backspace"&&E===""&&ee&&n&&n.values.length>0){e.preventDefault(),f({...n,values:n.values.slice(0,-1)});return}if(e.key==="Tab"&&u.type==="root"&&!i){e.preventDefault(),J(E.trim());return}if(e.key==="Escape"&&u.type==="closed"&&P>0){e.preventDefault(),z();return}if(e.key==="ArrowDown"&&u.type==="closed"){e.preventDefault(),re();return}W.inputProps.onKeyDown(e)},he=ie.map(({filter:e,state:i})=>{const c=X[e.field],T=Ve(e);return{key:e.id,field:e.field,operator:T.operator,value:T.value,joined:T.joined,state:i,operatorLocked:c.ops.length===1,onValueClick:()=>U(e,"values",null),onOperatorClick:w=>U(e,"op",w.currentTarget),onRemove:()=>de(e.id)}}),Se=u.type==="op"||u.type==="more"?k:S,Y=V?Ye(V,a):0;return m.jsxs(ue,{alignItems:"stretch",gap:"12",w:"full",minH:"md",children:[m.jsxs(Ke,{gap:"8",alignItems:"start",children:[m.jsx(ne,{ref:d,flex:"1",minW:"0",children:m.jsx(ae,{w:"full",tokens:he,inputValue:E,onInputChange:e=>{g(e),W.setActiveKey(null),(u.type==="closed"||u.type==="more")&&p({type:"root"})},inputRef:B,inputProps:{...W.inputProps,onFocus:()=>{C.current||re()},onMouseDown:re,onKeyDown:te},placeholder:"Filter or search…",editingKey:u.type==="values"?(n==null?void 0:n.id)??null:null,onMoreClick:(e,i)=>{if(u.type==="more")return K();_(),p({type:"more",keys:e}),v(i)},moreOpen:u.type==="more",shortcut:"/",onClearAll:()=>{l([]),o([]),G(!0),K()}})}),P>0&&m.jsxs(m.Fragment,{children:[m.jsx(le,{variant:"ghost",onClick:z,children:"Discard"}),m.jsx(le,{variant:"primary",disabled:N,onClick:me,children:`Apply (${P})`})]})]}),m.jsxs(Ke,{gap:"8",children:[m.jsx(Oe,{textStyle:"body.sm",color:"text.subtle",children:N?"Updating the results…":P>0?`These results do not include ${P} pending ${P===1?"change":"changes"}. Press Enter or Apply to update them. Press Esc or Discard to undo.`:V&&Y>0?`Discarded ${Y} ${Y===1?"change":"changes"}.`:"The results match the applied filters."}),!N&&P===0&&V&&Y>0&&m.jsx(le,{size:"sm",variant:"ghost",onClick:ye,children:"Undo"})]}),m.jsx(Oe,{textStyle:"body.sm",color:"text.subtlest","data-testid":"applied",children:`Applied: ${a.map(Ge).join(" · ")||"none"}`}),m.jsx(Ht,{...W.menuProps,anchor:Se,"aria-label":u.type==="values"?`${(n==null?void 0:n.field)??""} values`:u.type==="op"?"Operators":u.type==="more"?"More filters":"Fields",query:u.type==="op"||u.type==="more"?void 0:E,footer:q,"data-filter-bar-menu":!0})]})},Fe={name:"Ex: Filter bar with Apply",render:()=>m.jsx(wn,{}),play:async({canvasElement:a})=>{const o=M(a),t=M(a.ownerDocument.body),l=()=>Array.from(a.querySelectorAll('[data-ds-component="FilterToken"]')),n=B=>{const k=l().find(v=>B.test(v.getAttribute("aria-label")??""));if(!k)throw new Error(`No filter token named ${B}`);return k},f=(B,k)=>{const v=Array.from(n(B).querySelectorAll("button")).find(N=>N.textContent===k);if(!v)throw new Error(`No part "${k}" in ${B}`);return v},u=()=>o.queryByRole("button",{name:/^Apply/,hidden:!0}),p=()=>o.getByRole("combobox",{name:"Filter or search",hidden:!0}),E=()=>o.getByTestId("applied"),g=B=>l().some(k=>k.getAttribute("aria-label")===B);await r.click(f(/^Stage/,"Open, In progress")),await y(()=>s(n(/^Stage/)).toHaveAttribute("data-state","editing")),await r.click(await t.findByRole("option",{name:/^Waiting on customer/})),await r.keyboard("{Backspace}"),await y(()=>s(g("Stage is any of Open, In progress")).toBe(!0)),await r.click(await t.findByRole("option",{name:/^Closed/})),await r.keyboard("{Enter}"),await y(()=>s(n(/^Stage/)).toHaveAttribute("data-state","pending")),s(u()).toHaveTextContent("Apply (1)"),await r.click(f(/^Stage/,"Stage")),await t.findByRole("option",{name:/^Open/}),await r.keyboard(" "),await r.keyboard("{Escape}"),await y(()=>s(g("Stage is any of Open, In progress, Closed")).toBe(!0));const S=async()=>{await r.click(p()),await r.type(p(),"entered"),await r.keyboard("{Enter}"),await y(()=>s(n(/^Entered On/)).toHaveAttribute("data-state","editing"))};await S(),s(l().filter(B=>{var k;return(k=B.getAttribute("aria-label"))==null?void 0:k.startsWith("Entered On")})).toHaveLength(1),await r.click(f(/^Entered On/,"is between")),await r.click(await t.findByRole("option",{name:/^is on or after/})),await y(()=>s(g("Entered On is on or after Sep 1, 2026")).toBe(!0)),await S(),await r.keyboard("9/15"),await t.findByRole("option",{name:/^Sep 15, 2026/}),await r.keyboard("{Enter}"),await y(()=>s(g("Entered On is on or after Sep 15, 2026")).toBe(!0)),await r.click(p()),await r.type(p(),"prio"),await r.keyboard("{Enter}"),await t.findByRole("option",{name:/^High/}),await r.keyboard("{Enter}"),await y(()=>s(g("Priority is High")).toBe(!0)),s(u()).toHaveTextContent("Apply (3)"),await r.click(u()),await y(()=>s(u()).toBeNull()),s(E()).toHaveTextContent("Priority is High"),await r.click(p()),await r.keyboard("{Escape}{Backspace}{Backspace}"),await y(()=>s(E()).not.toHaveTextContent("Priority")),s(u()).toBeNull(),await r.click(f(/^Stage/,"Stage")),await r.click(await t.findByRole("option",{name:/^Waiting on customer/})),await r.keyboard("{Enter}"),await y(()=>s(u()).toHaveTextContent("Apply (1)")),await r.keyboard("{Escape}"),await y(()=>s(u()).toBeNull()),await r.click(await o.findByRole("button",{name:"Undo",hidden:!0})),await y(()=>s(u()).toHaveTextContent("Apply (1)")),await r.click(p()),await r.type(p(),"hinge"),await r.keyboard("{Tab}"),await y(()=>s(g("Search contains “hinge”")).toBe(!0)),await r.click(p()),await r.type(p(),"part"),await r.keyboard("{Enter}"),await t.findByText("Type a part number or text"),await r.keyboard("kit-6001"),await r.click(await t.findByRole("option",{name:/^KIT-6001/})),await r.keyboard("water damage"),await r.click(await t.findByRole("option",{name:/^contains “water damage”/})),await r.keyboard("{Enter}"),await r.keyboard("{Enter}"),await y(()=>s(E()).toHaveTextContent("Part is KIT-6001 or contains “water damage”")),await r.click(f(/^Stage/,"Stage"));for(const B of["Open","In progress","Waiting on customer","Closed"])await r.click(await t.findByRole("option",{name:new RegExp(`^${B}`)}));await r.keyboard("{Enter}"),await y(()=>s(E()).not.toHaveTextContent("Stage")),s(l().some(B=>{var k;return(k=B.getAttribute("aria-label"))==null?void 0:k.startsWith("Stage")})).toBe(!1),s(u()).toBeNull(),await o.findByText("The results match the applied filters.",{},{timeout:3e3}),await r.click(p()),await r.type(p(),"part"),await r.keyboard("{Enter}"),await r.keyboard("hng"),await t.findByRole("option",{name:/HNG-1001/})}},Nn=["Default","Empty","Overflow","Focused","Disabled","Shortcut","BackspaceRemoves","EditingInPlace","TranslatedLabels","ExAddAFilter","ExFilterBarWithApply"];var Qe,Je,Ze;fe.parameters={...fe.parameters,docs:{...(Qe=fe.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
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
}`,...(Ze=(Je=fe.parameters)==null?void 0:Je.docs)==null?void 0:Ze.source}}};var et,tt,nt;we.parameters={...we.parameters,docs:{...(et=we.parameters)==null?void 0:et.docs,source:{originalSource:`{
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
}`,...(nt=(tt=we.parameters)==null?void 0:tt.docs)==null?void 0:nt.source}}};var at,ot,it;ve.parameters={...ve.parameters,docs:{...(at=ve.parameters)==null?void 0:at.docs,source:{originalSource:`{
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
}`,...(it=(ot=ve.parameters)==null?void 0:ot.docs)==null?void 0:it.source}}};var st,rt,lt;ge.parameters={...ge.parameters,docs:{...(st=ge.parameters)==null?void 0:st.docs,source:{originalSource:`{
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
}`,...(lt=(rt=ge.parameters)==null?void 0:rt.docs)==null?void 0:lt.source}}};var ct,ut,pt;be.parameters={...be.parameters,docs:{...(ct=be.parameters)==null?void 0:ct.docs,source:{originalSource:`{
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
}`,...(pt=(ut=be.parameters)==null?void 0:ut.docs)==null?void 0:pt.source}}};var dt,mt,yt;ke.parameters={...ke.parameters,docs:{...(dt=ke.parameters)==null?void 0:dt.docs,source:{originalSource:`{
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
}`,...(yt=(mt=ke.parameters)==null?void 0:mt.docs)==null?void 0:yt.source}}};var ht,ft,wt;xe.parameters={...xe.parameters,docs:{...(ht=xe.parameters)==null?void 0:ht.docs,source:{originalSource:`{
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
}`,...(wt=(ft=xe.parameters)==null?void 0:ft.docs)==null?void 0:wt.source}}};var vt,gt,bt;Ee.parameters={...Ee.parameters,docs:{...(vt=Ee.parameters)==null?void 0:vt.docs,source:{originalSource:`{
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
}`,...(bt=(gt=Ee.parameters)==null?void 0:gt.docs)==null?void 0:bt.source}}};var kt,xt,Et;Be.parameters={...Be.parameters,docs:{...(kt=Be.parameters)==null?void 0:kt.docs,source:{originalSource:`{
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
}`,...(Et=(xt=Be.parameters)==null?void 0:xt.docs)==null?void 0:Et.source}}};var Bt,Tt,Ft;Te.parameters={...Te.parameters,docs:{...(Bt=Te.parameters)==null?void 0:Bt.docs,source:{originalSource:`{
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
}`,...(Ft=(Tt=Te.parameters)==null?void 0:Tt.docs)==null?void 0:Ft.source}}};var Rt,At,St;Fe.parameters={...Fe.parameters,docs:{...(Rt=Fe.parameters)==null?void 0:Rt.docs,source:{originalSource:`{
  name: 'Ex: Filter bar with Apply',
  render: () => <StagedFilterBarDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    // While a combobox menu is open, Floating UI hides the rest of the page
    // from screen readers. So queries in the field allow hidden elements.
    // Menu groups have names too, so a token is found among the tokens only.
    const tokens = () => Array.from(canvasElement.querySelectorAll<HTMLElement>('[data-ds-component="FilterToken"]'));
    const token = (name: RegExp) => {
      const found = tokens().find(node => name.test(node.getAttribute('aria-label') ?? ''));
      if (!found) throw new Error(\`No filter token named \${name}\`);
      return found;
    };
    // While a menu is open, the token parts are hidden from screen readers
    // and have no accessible name, so a part is found by its text.
    const part = (name: RegExp, text: string) => {
      const found = Array.from(token(name).querySelectorAll('button')).find(node => node.textContent === text);
      if (!found) throw new Error(\`No part "\${text}" in \${name}\`);
      return found;
    };
    const applyButton = () => canvas.queryByRole('button', {
      name: /^Apply/,
      hidden: true
    });
    // The input remounts when it moves into a token, so find it each time.
    const input = () => canvas.getByRole('combobox', {
      name: 'Filter or search',
      hidden: true
    });
    const applied = () => canvas.getByTestId('applied');
    // A token behind "+N more" is inert, so role queries skip it. Its
    // accessible name still says what the draft holds.
    const hasToken = (sentence: string) => tokens().some(node => node.getAttribute('aria-label') === sentence);

    // A pick-many value menu checks the picked values. A new pick waits for
    // Apply, and the token reads "is any of" once it has two or more.
    await userEvent.click(part(/^Stage/, 'Open, In progress'));
    await waitFor(() => expect(token(/^Stage/)).toHaveAttribute('data-state', 'editing'));
    await userEvent.click(await body.findByRole('option', {
      name: /^Waiting on customer/
    }));
    // Backspace takes back the last value picked.
    await userEvent.keyboard('{Backspace}');
    await waitFor(() => expect(hasToken('Stage is any of Open, In progress')).toBe(true));
    await userEvent.click(await body.findByRole('option', {
      name: /^Closed/
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
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(hasToken('Stage is any of Open, In progress, Closed')).toBe(true));

    // Picking a field that has a token opens that token. It never adds a
    // second one.
    const openEnteredOn = async () => {
      await userEvent.click(input());
      await userEvent.type(input(), 'entered');
      await userEvent.keyboard('{Enter}');
      await waitFor(() => expect(token(/^Entered On/)).toHaveAttribute('data-state', 'editing'));
    };
    await openEnteredOn();
    expect(tokens().filter(node => node.getAttribute('aria-label')?.startsWith('Entered On'))).toHaveLength(1);

    // A range switched to one date keeps its start date.
    await userEvent.click(part(/^Entered On/, 'is between'));
    await userEvent.click(await body.findByRole('option', {
      name: /^is on or after/
    }));
    await waitFor(() => expect(hasToken('Entered On is on or after Sep 1, 2026')).toBe(true));

    // A typed date with no year is in this year.
    await openEnteredOn();
    await userEvent.keyboard('9/15');
    await body.findByRole('option', {
      name: /^Sep 15, 2026/
    });
    await userEvent.keyboard('{Enter}');
    await waitFor(() => expect(hasToken('Entered On is on or after Sep 15, 2026')).toBe(true));

    // A pick-one field reads "is", picks once and closes.
    await userEvent.click(input());
    await userEvent.type(input(), 'prio');
    await userEvent.keyboard('{Enter}');
    await body.findByRole('option', {
      name: /^High/
    });
    await userEvent.keyboard('{Enter}');
    await waitFor(() => expect(hasToken('Priority is High')).toBe(true));
    expect(applyButton()).toHaveTextContent('Apply (3)');

    // Apply makes the draft the applied set.
    await userEvent.click(applyButton()!);
    await waitFor(() => expect(applyButton()).toBeNull());
    expect(applied()).toHaveTextContent('Priority is High');

    // Backspace twice removes the last filter. A removal applies at once
    // and does not wait for Apply.
    await userEvent.click(input());
    await userEvent.keyboard('{Escape}{Backspace}{Backspace}');
    await waitFor(() => expect(applied()).not.toHaveTextContent('Priority'));
    expect(applyButton()).toBeNull();

    // Esc with no menu open throws the pending changes away. Undo brings
    // them back.
    await userEvent.click(part(/^Stage/, 'Stage'));
    await userEvent.click(await body.findByRole('option', {
      name: /^Waiting on customer/
    }));
    await userEvent.keyboard('{Enter}');
    await waitFor(() => expect(applyButton()).toHaveTextContent('Apply (1)'));
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(applyButton()).toBeNull());
    await userEvent.click(await canvas.findByRole('button', {
      name: 'Undo',
      hidden: true
    }));
    await waitFor(() => expect(applyButton()).toHaveTextContent('Apply (1)'));

    // Tab turns typed text into a search.
    await userEvent.click(input());
    await userEvent.type(input(), 'hinge');
    await userEvent.keyboard('{Tab}');
    await waitFor(() => expect(hasToken('Search contains “hinge”')).toBe(true));

    // A lookup lists nothing until the person types. Picked parts and typed
    // text mix in one token: "Part is KIT-6001 or contains “water damage”".
    await userEvent.click(input());
    await userEvent.type(input(), 'part');
    await userEvent.keyboard('{Enter}');
    await body.findByText('Type a part number or text');
    await userEvent.keyboard('kit-6001');
    await userEvent.click(await body.findByRole('option', {
      name: /^KIT-6001/
    }));
    await userEvent.keyboard('water damage');
    await userEvent.click(await body.findByRole('option', {
      name: /^contains “water damage”/
    }));
    await userEvent.keyboard('{Enter}');
    await userEvent.keyboard('{Enter}');
    await waitFor(() => expect(applied()).toHaveTextContent('Part is KIT-6001 or contains “water damage”'));

    // Unchecking every value of an applied filter removes it, like ×. The
    // removal applies at once, so no Apply button waits for it.
    await userEvent.click(part(/^Stage/, 'Stage'));
    for (const value of ['Open', 'In progress', 'Waiting on customer', 'Closed']) {
      await userEvent.click(await body.findByRole('option', {
        name: new RegExp(\`^\${value}\`)
      }));
    }
    await userEvent.keyboard('{Enter}');
    await waitFor(() => expect(applied()).not.toHaveTextContent('Stage'));
    expect(tokens().some(node => node.getAttribute('aria-label')?.startsWith('Stage'))).toBe(false);
    expect(applyButton()).toBeNull();

    // The results finish loading before the snapshot, so it never catches
    // "Updating the results…".
    await canvas.findByText('The results match the applied filters.', {}, {
      timeout: 3000
    });

    // Leave a lookup menu open for the visual snapshot.
    await userEvent.click(input());
    await userEvent.type(input(), 'part');
    await userEvent.keyboard('{Enter}');
    await userEvent.keyboard('hng');
    await body.findByRole('option', {
      name: /HNG-1001/
    });
  }
}`,...(St=(At=Fe.parameters)==null?void 0:At.docs)==null?void 0:St.source}}};export{xe as BackspaceRemoves,fe as Default,be as Disabled,Ee as EditingInPlace,we as Empty,Te as ExAddAFilter,Fe as ExFilterBarWithApply,ge as Focused,ve as Overflow,ke as Shortcut,Be as TranslatedLabels,Nn as __namedExportsOrder,Mn as default};
