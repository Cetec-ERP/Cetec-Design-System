import{m as nt,e as at,f as ot,g as st,h as it,s as rt,r as d,Y as lt,j as l,B as M,c as pe,d as ut,a as ct,V as z,T as dt}from"./iframe-DlU8NcMB.js";import{L as pt}from"./LocaleProvider-bDqstYYq.js";import{u as mt}from"./useLocale-ClJ0JiqR.js";import{B as We}from"./Button-tQZ1rXr4.js";import{u as ht,F as vt}from"./FilterMenu-CnCnufU7.js";import{F as yt}from"./FilterToken-843h0p8U.js";import{I as ft}from"./IconButton-Ce9V6J_s.js";import{K as gt}from"./Kbd-C6CVh7Lr.js";import{u as wt}from"./useOverflowItems-DBtw0i51.js";import"./preload-helper-CZThFx-p.js";import"./Spinner-CvYcMq16.js";import"./FieldContext-DOjuQGo0.js";import"./ListItem-DokeszCc.js";import"./HighlightText-DJ5luWXf.js";import"./Checkbox-ds1Dgk6Y.js";import"./Divider-D1L1WCCE.js";import"./Toggle-b24RY4uE.js";import"./ListItemGroup-DfdOz13L.js";import"./FloatingLayerContext-B2wJXQO5.js";const ze={},bt=[],kt=[["root","filterField__root"],["icon","filterField__icon"],["values","filterField__values"],["sizer","filterField__sizer"],["token","filterField__token"],["input","filterField__input"],["more","filterField__more"],["shortcut","filterField__shortcut"],["clear","filterField__clear"]],xt=kt.map(([t,e])=>[t,st(e,ze,it(bt,t))]),Bt=nt((t={})=>Object.fromEntries(xt.map(([e,a])=>[e,a.recipeFn(t)]))),me=[],Ft=t=>({...ze,...at(t)}),Et=Object.assign(Bt,{__recipe__:!1,__name__:"filterField",raw:t=>t,classNameMap:{},variantKeys:me,variantMap:{},splitVariantProps(t){return ot(t,me)},getVariantProps:Ft}),Rt=96,Tt=t=>t instanceof HTMLElement&&!!t.closest('input, textarea, select, [contenteditable=""], [contenteditable="true"]'),S=t=>{const{tokens:e,inputValue:a,onInputChange:r,inputProps:s,inputRef:b,placeholder:x,editingKey:k=null,onMoreClick:E,moreOpen:h,onClearAll:g,clearLabel:R,shortcut:B,disabled:m,...A}=t,[I,U]=rt(A),v=Et(),{labels:i}=mt(),[w,y]=d.useState(null),[Q,te]=d.useState(!1),ne=d.useRef(null),ae=d.useRef(null),oe=d.useRef(null),H=d.useRef(null),Y=d.useRef(new Map),G=d.useRef(!1),Qe=d.useCallback(n=>{if(n){H.current=n,G.current&&(G.current=!1,n.focus());return}H.current&&H.current===H.current.ownerDocument.activeElement&&(G.current=!0)},[]),Ye=lt([Qe,b]),T=d.useCallback(()=>{var n;return(n=H.current)==null?void 0:n.focus()},[]),se=e.filter(n=>n.onRemove&&n.state!=="removing"),F=se[se.length-1],J=w!==null&&(F==null?void 0:F.key)===w?w:null,ie=e.map(n=>n.key),Ge=d.useCallback(n=>Y.current.get(n)??null,[]),{visible:Je,overflow:Xe}=wt({items:ie,containerRef:ae,getItemElement:Ge,activeItem:k??J,reserve:Rt,reserveRef:oe}),re=Xe.filter(n=>ie.includes(n)),X=e.filter(n=>re.includes(n.key)),le=new Set(Je);d.useEffect(()=>{if(!B||m)return;const n=c=>{c.key!==B||c.metaKey||c.ctrlKey||c.altKey||c.defaultPrevented||Tt(c.target)||(c.preventDefault(),T())};return document.addEventListener("keydown",n),()=>document.removeEventListener("keydown",n)},[B,m,T]);const Ze=n=>{var c,C;if((c=s==null?void 0:s.onKeyDown)==null||c.call(s,n),!n.defaultPrevented){if(n.key!=="Backspace"){y(null);return}a!==""||k!==null||!F||(n.preventDefault(),J===F.key?(y(null),(C=F.onRemove)==null||C.call(F)):y(F.key))}},V=n=>n&&((...c)=>{T(),n(...c)}),ue=n=>l.jsx("input",{type:"text",autoComplete:"off",spellCheck:!1,"aria-label":i.filterOrSearch,"aria-keyshortcuts":B,...s,ref:Ye,className:pe(v.input,s==null?void 0:s.className),"data-inline":n||void 0,size:n?Math.max(a.length,1):void 0,value:a,placeholder:n?void 0:x,disabled:m,onChange:c=>{y(null),r(c.target.value)},onKeyDown:Ze}),et=k!==null&&le.has(k),ce=!!g&&!m&&(e.length>0||a!=="");return l.jsxs(M,{...ut("FilterField"),ref:ne,className:pe(v.root,I),"data-disabled":m||void 0,"data-has-clear":ce||void 0,onFocusCapture:()=>te(!0),onBlurCapture:n=>{var c;(c=ne.current)!=null&&c.contains(n.relatedTarget)||(te(!1),y(null))},onMouseDown:n=>{m||n.target!==n.currentTarget||(n.preventDefault(),T())},...U,children:[l.jsx(ct,{name:"search",size:"20",fill:m?"icon.disabled":"icon.subtle",className:v.icon,"aria-hidden":!0}),l.jsxs(M,{className:v.values,onMouseDown:n=>{m||n.target!==n.currentTarget||(n.preventDefault(),T())},children:[l.jsx(M,{ref:ae,className:v.sizer,"aria-hidden":!0}),e.map(({key:n,...c})=>{const C=!le.has(n),tt=n===k&&!C;return l.jsx(M,{as:"span",ref:de=>{de?Y.current.set(n,de):Y.current.delete(n)},className:v.token,"data-overflowed":C||void 0,inert:C||void 0,children:l.jsx(yt,{...c,state:n===J?"armed":c.state,disabled:m,retainFocus:!0,editor:tt?ue(!0):void 0,onFieldClick:V(c.onFieldClick),onOperatorClick:V(c.onOperatorClick),onValueClick:V(c.onValueClick),onRemove:V(c.onRemove)})},n)}),X.length>0&&l.jsx(We,{ref:oe,size:"sm",variant:"hollow",iconAfter:"caret-down",className:v.more,disabled:m,"aria-expanded":E?!!h:void 0,"data-open":h||void 0,"data-pending":X.some(n=>n.state==="pending"||n.state==="removing")||void 0,onMouseDown:n=>n.preventDefault(),onClick:n=>{T(),E==null||E(re,n.currentTarget)},children:i.moreFilters(X.length)}),!et&&ue(!1)]}),B&&!Q&&!m&&l.jsx(gt,{keys:[B],className:v.shortcut}),ce&&l.jsx(ft,{variant:"ghost",size:"sm",iconName:"x",altText:R??i.clearFilters,className:v.clear,onMouseDown:n=>n.preventDefault(),onClick:()=>{y(null),T(),g==null||g()}})]})};S.__docgenInfo={description:`The filter bar's field: the applied filters as tokens, followed by one
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
}`,elements:[{name:"intersection",raw:`Omit<
  BoxProps,
  keyof FilterTokenOwnProps | 'children'
> &
  FilterTokenOwnProps`,elements:[{name:"Omit",elements:[{name:"BoxProps"},{name:"union",raw:"keyof FilterTokenOwnProps | 'children'",elements:[{name:"signature",type:"object",raw:`{
  /** Name of the filtered field, such as "Stage". */
  field: string;
  /** Operator text, such as "is", "is any of" or "is between". */
  operator: string;
  /**
   * The filter value. A string shows as is, such as "Sep 1 – Sep 30". A list
   * shows its first two items, then \`+N\` for the rest, and a tooltip lists
   * every item. A value cut off by the width limit also shows the tooltip,
   * so the full text can be read on hover or focus. An empty
   * string or list shows "…" for a filter that has no value yet. Omit it for
   * an operator that takes no value, such as "is empty".
   */
  value?: string | string[];
  /** @default "applied" */
  state?: FilterTokenState;
  /** @default "default" */
  tone?: FilterTokenTone;
  /**
   * Renders the operator as text, not as a button. Use it when the field
   * supports only one operator.
   */
  operatorLocked?: boolean;
  /**
   * Content that replaces the value button while the token is edited in
   * place, usually a text input. The value text stays before it.
   */
  editor?: ReactNode;
  /** Disables every part of the token, the \`editor\` included. */
  disabled?: boolean;
  /**
   * Keeps focus where it is when a part is clicked with a pointer. A filter
   * field sets this so focus stays in its input, as in a combobox.
   */
  retainFocus?: boolean;
  /**
   * Runs when the field part is clicked. Falls back to \`onValueClick\` when
   * absent, because the field and the value both open the value menu.
   */
  onFieldClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  /** Runs when the operator part is clicked. Not called when \`operatorLocked\` is true. */
  onOperatorClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  /** Runs when the value part is clicked. */
  onValueClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  /**
   * Runs when the remove button is clicked. The button is not shown when this
   * is absent or when \`state\` is \`removing\`.
   */
  onRemove?: () => void;
  /**
   * Accessible name for the remove button.
   * @default \`labels.removeFilter\` (English: \`Remove filter: \${field} \${operator} \${values}\`), with every value
   */
  removeLabel?: string;
}`,signature:{properties:[{key:"field",value:{name:"string",required:!0},description:'Name of the filtered field, such as "Stage".'},{key:"operator",value:{name:"string",required:!0},description:'Operator text, such as "is", "is any of" or "is between".'},{key:"value",value:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}],required:!1},description:`The filter value. A string shows as is, such as "Sep 1 – Sep 30". A list
shows its first two items, then \`+N\` for the rest, and a tooltip lists
every item. A value cut off by the width limit also shows the tooltip,
so the full text can be read on hover or focus. An empty
string or list shows "…" for a filter that has no value yet. Omit it for
an operator that takes no value, such as "is empty".`},{key:"state",value:{name:"union",raw:`| 'applied'
| 'editing'
| 'pending'
| 'removing'
| 'armed'`,elements:[{name:"literal",value:"'applied'"},{name:"literal",value:"'editing'"},{name:"literal",value:"'pending'"},{name:"literal",value:"'removing'"},{name:"literal",value:"'armed'"}],required:!1},description:'@default "applied"'},{key:"tone",value:{name:"union",raw:"'default' | 'exclude'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'exclude'"}],required:!1},description:'@default "default"'},{key:"operatorLocked",value:{name:"boolean",required:!1},description:`Renders the operator as text, not as a button. Use it when the field
supports only one operator.`},{key:"editor",value:{name:"ReactNode",required:!1},description:`Content that replaces the value button while the token is edited in
place, usually a text input. The value text stays before it.`},{key:"disabled",value:{name:"boolean",required:!1},description:"Disables every part of the token, the `editor` included."},{key:"retainFocus",value:{name:"boolean",required:!1},description:`Keeps focus where it is when a part is clicked with a pointer. A filter
field sets this so focus stays in its input, as in a combobox.`},{key:"onFieldClick",value:{name:"signature",type:"function",raw:"(event: MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"MouseEvent",elements:[{name:"HTMLButtonElement"}],raw:"MouseEvent<HTMLButtonElement>"},name:"event"}],return:{name:"void"}},required:!1},description:"Runs when the field part is clicked. Falls back to `onValueClick` when\nabsent, because the field and the value both open the value menu."},{key:"onOperatorClick",value:{name:"signature",type:"function",raw:"(event: MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"MouseEvent",elements:[{name:"HTMLButtonElement"}],raw:"MouseEvent<HTMLButtonElement>"},name:"event"}],return:{name:"void"}},required:!1},description:"Runs when the operator part is clicked. Not called when `operatorLocked` is true."},{key:"onValueClick",value:{name:"signature",type:"function",raw:"(event: MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"MouseEvent",elements:[{name:"HTMLButtonElement"}],raw:"MouseEvent<HTMLButtonElement>"},name:"event"}],return:{name:"void"}},required:!1},description:"Runs when the value part is clicked."},{key:"onRemove",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1},description:"Runs when the remove button is clicked. The button is not shown when this\nis absent or when `state` is `removing`."},{key:"removeLabel",value:{name:"string",required:!1},description:"Accessible name for the remove button.\n@default `labels.removeFilter` (English: `Remove filter: ${field} ${operator} ${values}`), with every value"}]}},{name:"literal",value:"'children'"}]}],raw:`Omit<
  BoxProps,
  keyof FilterTokenOwnProps | 'children'
>`},{name:"signature",type:"object",raw:`{
  /** Name of the filtered field, such as "Stage". */
  field: string;
  /** Operator text, such as "is", "is any of" or "is between". */
  operator: string;
  /**
   * The filter value. A string shows as is, such as "Sep 1 – Sep 30". A list
   * shows its first two items, then \`+N\` for the rest, and a tooltip lists
   * every item. A value cut off by the width limit also shows the tooltip,
   * so the full text can be read on hover or focus. An empty
   * string or list shows "…" for a filter that has no value yet. Omit it for
   * an operator that takes no value, such as "is empty".
   */
  value?: string | string[];
  /** @default "applied" */
  state?: FilterTokenState;
  /** @default "default" */
  tone?: FilterTokenTone;
  /**
   * Renders the operator as text, not as a button. Use it when the field
   * supports only one operator.
   */
  operatorLocked?: boolean;
  /**
   * Content that replaces the value button while the token is edited in
   * place, usually a text input. The value text stays before it.
   */
  editor?: ReactNode;
  /** Disables every part of the token, the \`editor\` included. */
  disabled?: boolean;
  /**
   * Keeps focus where it is when a part is clicked with a pointer. A filter
   * field sets this so focus stays in its input, as in a combobox.
   */
  retainFocus?: boolean;
  /**
   * Runs when the field part is clicked. Falls back to \`onValueClick\` when
   * absent, because the field and the value both open the value menu.
   */
  onFieldClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  /** Runs when the operator part is clicked. Not called when \`operatorLocked\` is true. */
  onOperatorClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  /** Runs when the value part is clicked. */
  onValueClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  /**
   * Runs when the remove button is clicked. The button is not shown when this
   * is absent or when \`state\` is \`removing\`.
   */
  onRemove?: () => void;
  /**
   * Accessible name for the remove button.
   * @default \`labels.removeFilter\` (English: \`Remove filter: \${field} \${operator} \${values}\`), with every value
   */
  removeLabel?: string;
}`,signature:{properties:[{key:"field",value:{name:"string",required:!0},description:'Name of the filtered field, such as "Stage".'},{key:"operator",value:{name:"string",required:!0},description:'Operator text, such as "is", "is any of" or "is between".'},{key:"value",value:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}],required:!1},description:`The filter value. A string shows as is, such as "Sep 1 – Sep 30". A list
shows its first two items, then \`+N\` for the rest, and a tooltip lists
every item. A value cut off by the width limit also shows the tooltip,
so the full text can be read on hover or focus. An empty
string or list shows "…" for a filter that has no value yet. Omit it for
an operator that takes no value, such as "is empty".`},{key:"state",value:{name:"union",raw:`| 'applied'
| 'editing'
| 'pending'
| 'removing'
| 'armed'`,elements:[{name:"literal",value:"'applied'"},{name:"literal",value:"'editing'"},{name:"literal",value:"'pending'"},{name:"literal",value:"'removing'"},{name:"literal",value:"'armed'"}],required:!1},description:'@default "applied"'},{key:"tone",value:{name:"union",raw:"'default' | 'exclude'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'exclude'"}],required:!1},description:'@default "default"'},{key:"operatorLocked",value:{name:"boolean",required:!1},description:`Renders the operator as text, not as a button. Use it when the field
supports only one operator.`},{key:"editor",value:{name:"ReactNode",required:!1},description:`Content that replaces the value button while the token is edited in
place, usually a text input. The value text stays before it.`},{key:"disabled",value:{name:"boolean",required:!1},description:"Disables every part of the token, the `editor` included."},{key:"retainFocus",value:{name:"boolean",required:!1},description:`Keeps focus where it is when a part is clicked with a pointer. A filter
field sets this so focus stays in its input, as in a combobox.`},{key:"onFieldClick",value:{name:"signature",type:"function",raw:"(event: MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"MouseEvent",elements:[{name:"HTMLButtonElement"}],raw:"MouseEvent<HTMLButtonElement>"},name:"event"}],return:{name:"void"}},required:!1},description:"Runs when the field part is clicked. Falls back to `onValueClick` when\nabsent, because the field and the value both open the value menu."},{key:"onOperatorClick",value:{name:"signature",type:"function",raw:"(event: MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"MouseEvent",elements:[{name:"HTMLButtonElement"}],raw:"MouseEvent<HTMLButtonElement>"},name:"event"}],return:{name:"void"}},required:!1},description:"Runs when the operator part is clicked. Not called when `operatorLocked` is true."},{key:"onValueClick",value:{name:"signature",type:"function",raw:"(event: MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"MouseEvent",elements:[{name:"HTMLButtonElement"}],raw:"MouseEvent<HTMLButtonElement>"},name:"event"}],return:{name:"void"}},required:!1},description:"Runs when the value part is clicked."},{key:"onRemove",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1},description:"Runs when the remove button is clicked. The button is not shown when this\nis absent or when `state` is `removing`."},{key:"removeLabel",value:{name:"string",required:!1},description:"Accessible name for the remove button.\n@default `labels.removeFilter` (English: `Remove filter: ${field} ${operator} ${values}`), with every value"}]}}]},{name:"signature",type:"object",raw:`{
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
the field does not have focus.`},disabled:{required:!1,tsType:{name:"boolean"},description:"Disables the input, the tokens and the buttons."}}};const{expect:o,fn:Z,userEvent:u,waitFor:p,within:f}=__STORYBOOK_MODULE_TEST__,ee=[{id:"resolution",field:"Resolution",operator:"is",value:"All open",locked:!0},{id:"stage",field:"Stage",operator:"is any of",value:["Open","In progress"]},{id:"entered",field:"Entered On",operator:"is on or after",value:"Sep 1, 2026"}],Ue=[...ee,{id:"assigned",field:"Assigned To",operator:"is any of",value:["Brent Barton","David Atkins"],state:"pending"},{id:"type",field:"Case Type",operator:"is",value:"Warranty"},{id:"customer",field:"Customer",operator:"is",value:"Acme Corp"}],L=({initial:t=ee,width:e="full",shortcut:a="/",...r})=>{const[s,b]=d.useState(t),[x,k]=d.useState(""),E=h=>b(g=>g.filter(R=>R.id!==h));return l.jsxs(z,{alignItems:"start",gap:"12",children:[l.jsx(S,{w:e,tokens:s.map(h=>({key:h.id,field:h.field,operator:h.operator,value:h.value,state:h.state,operatorLocked:h.locked,onRemove:()=>E(h.id)})),inputValue:x,onInputChange:k,placeholder:"Filter or search…",shortcut:a,onClearAll:()=>{b([]),k("")},...r}),l.jsx(We,{size:"sm",variant:"ghost",onClick:()=>b(t),children:"Reset"})]})},Gt={title:"Components/FilterField",component:S,parameters:{layout:"padded"},args:{tokens:[],inputValue:"",onInputChange:Z(),onClearAll:Z(),onMoreClick:Z(),shortcut:"/"},render:t=>l.jsx(L,{shortcut:t.shortcut,disabled:t.disabled,onMoreClick:t.onMoreClick})},q={play:async({canvasElement:t})=>{const e=f(t),a=e.getByRole("textbox",{name:"Filter or search"});o(e.getByRole("group",{name:"Stage is any of Open, In progress"})).toBeVisible(),o(a).toHaveAttribute("aria-keyshortcuts","/"),await u.click(a),await u.type(a,"acme"),o(a).toHaveValue("acme"),await u.click(e.getByRole("button",{name:"Clear all filters"})),await p(()=>o(e.queryAllByRole("group")).toHaveLength(0)),o(a).toHaveValue(""),o(a).toHaveFocus(),await u.click(e.getByRole("button",{name:"Reset"})),await p(()=>o(e.getAllByRole("group")).toHaveLength(3))}},D={render:t=>l.jsx(L,{initial:[],shortcut:t.shortcut}),play:async({canvasElement:t})=>{const e=f(t);o(e.queryByRole("button",{name:"Clear all filters"})).not.toBeInTheDocument(),o(e.getByText("/")).toBeVisible(),o(e.getByRole("textbox",{name:"Filter or search"})).toHaveAttribute("placeholder","Filter or search…")}},At=t=>t.mock.calls[0],O={render:t=>l.jsx(L,{initial:Ue,width:"2xl",onMoreClick:t.onMoreClick}),play:async({args:t,canvasElement:e})=>{const a=f(e),r=await a.findByRole("button",{name:/^\+\d more$/});o(r).toHaveAttribute("data-pending"),o(a.getByRole("group",{name:"Resolution is All open"})).toBeVisible(),o(a.queryByRole("group",{name:"Customer is Acme Corp"})).not.toBeInTheDocument(),await u.click(r),o(t.onMoreClick).toHaveBeenCalledOnce();const[s,b]=At(t.onMoreClick);o(s).toContain("customer"),o(s).not.toContain("resolution"),o(b).toBe(r),a.getByRole("textbox",{name:"Filter or search"}).blur(),await p(()=>o(a.getByText("/")).toBeVisible())}},N={play:async({canvasElement:t})=>{const e=f(t),a=e.getByRole("textbox",{name:"Filter or search"});o(e.getByText("/")).toBeVisible(),await u.click(a),await p(()=>o(a).toHaveFocus()),o(e.queryByText("/")).not.toBeInTheDocument(),await u.type(a,"acme"),a.blur(),await p(()=>o(e.getByText("/")).toBeVisible()),await u.clear(a),a.blur()}},_={args:{disabled:!0},play:async({canvasElement:t})=>{const e=f(t);o(e.getByRole("textbox",{name:"Filter or search"})).toBeDisabled(),o(e.getByRole("button",{name:/^Remove filter: Stage/})).toBeDisabled(),o(e.queryByRole("button",{name:"Clear all filters"})).not.toBeInTheDocument(),o(e.queryByText("/")).not.toBeInTheDocument()}},j={render:t=>l.jsxs(z,{alignItems:"start",gap:"12",children:[l.jsx(M,{as:"input","aria-label":"Notes",w:"xs",h:"32",px:"8",borderWidth:"1",borderStyle:"solid",borderColor:"border",borderRadius:"4",bg:"surface",color:"text"}),l.jsx(L,{shortcut:t.shortcut})]}),play:async({canvasElement:t})=>{const e=f(t),a=e.getByRole("textbox",{name:"Filter or search"}),r=e.getByRole("textbox",{name:"Notes"});await u.type(r,"a/b"),o(r).toHaveValue("a/b"),o(a).not.toHaveFocus(),r.blur(),await u.keyboard("/"),await p(()=>o(a).toHaveFocus()),o(a).toHaveValue(""),a.blur(),await p(()=>o(e.getByText("/")).toBeVisible())}},K={name:"Backspace removes",play:async({canvasElement:t})=>{const e=f(t),a=e.getByRole("textbox",{name:"Filter or search"}),r=()=>e.queryByRole("group",{name:"Entered On is on or after Sep 1, 2026"});await u.click(a),await u.type(a,"a{Backspace}"),o(r()).toHaveAttribute("data-state","applied"),await u.keyboard("{Backspace}"),await p(()=>o(r()).toHaveAttribute("data-state","armed")),await u.keyboard("{ArrowLeft}"),await p(()=>o(r()).toHaveAttribute("data-state","applied")),await u.keyboard("{Backspace}{Backspace}"),await p(()=>o(r()).not.toBeInTheDocument()),o(a).toHaveFocus(),await u.click(e.getByRole("button",{name:"Reset"})),await p(()=>o(r()).toBeVisible())}},Ct=()=>{const[t,e]=d.useState(null),[a,r]=d.useState("");return l.jsxs(z,{alignItems:"start",gap:"12",children:[l.jsx(S,{w:"full",tokens:ee.map(s=>({key:s.id,field:s.field,operator:s.operator,value:s.value,state:s.id===t?"editing":"applied",operatorLocked:s.locked,onValueClick:()=>e(s.id)})),inputValue:a,onInputChange:r,inputProps:{onKeyDown:s=>{s.key==="Escape"&&e(null)}},placeholder:"Filter or search…",editingKey:t,shortcut:"/"}),l.jsx(dt,{textStyle:"body.sm",color:"text.subtlest",children:"Click a value to edit it in place. Esc ends the edit."})]})},P={render:()=>l.jsx(Ct,{}),play:async({canvasElement:t})=>{const e=f(t),a=()=>e.getByRole("group",{name:"Stage is any of Open, In progress"});await u.click(e.getByRole("button",{name:"Open, In progress"})),await p(()=>o(a()).toHaveAttribute("data-state","editing"));const r=f(a()).getByRole("textbox",{name:"Filter or search"});await p(()=>o(r).toHaveFocus()),await u.type(r,"Wai"),o(r).toHaveValue("Wai"),await u.keyboard("{Escape}"),await p(()=>o(a()).toHaveAttribute("data-state","applied"));const s=e.getByRole("textbox",{name:"Filter or search"});o(f(a()).queryByRole("textbox")).not.toBeInTheDocument(),await p(()=>o(s).toHaveFocus()),await u.clear(s),await u.click(e.getByRole("button",{name:"Open, In progress"})),await p(()=>o(a()).toHaveAttribute("data-state","editing"))}},$={render:()=>l.jsx(pt,{labels:{filterOrSearch:"Filtrar o buscar",clearFilters:"Quitar todos los filtros",moreFilters:t=>`+${t} más`},children:l.jsx(L,{initial:Ue,width:"2xl"})}),play:async({canvasElement:t})=>{const e=f(t);o(e.getByRole("textbox",{name:"Filtrar o buscar"})).toBeVisible(),o(e.getByRole("button",{name:"Quitar todos los filtros"})).toBeVisible(),o(await e.findByRole("button",{name:/^\+\d más$/})).toBeVisible()}},he={Stage:["Open","In progress","Waiting on customer","Closed"],"Case Type":["Warranty","Repair","Question"],Priority:["High","Medium","Low"]},Ht=()=>{const[t,e]=d.useState([]),[a,r]=d.useState(""),[s,b]=d.useState({type:"closed"}),[x,k]=d.useState(null),[E,h]=d.useState(null),g=t.find(i=>i.id===x),R=g&&Array.isArray(g.value)?g.value:[],B=a.trim().toLowerCase(),m=[];if(s.type==="fields"){m.push({type:"group",label:"Fields"});for(const i of Object.keys(he))i.toLowerCase().includes(B)&&m.push({type:"item",key:i,label:i,detail:"list"})}else if(s.type==="values"&&g){m.push({type:"group",label:`${g.field} is any of`});for(const i of he[g.field]??[])i.toLowerCase().includes(B)&&m.push({type:"item",key:i,label:i,checked:R.includes(i)})}B&&!m.some(i=>i.type==="item")&&m.push({type:"empty",label:`No match for “${a}”`});const A=()=>{e(i=>i.filter(w=>w.id!==x||w.value.length>0)),k(null),b({type:"closed"}),r("")},I=i=>{k(i),b({type:"values"}),r("")},U=i=>{if(s.type==="fields"){const w=`${i}-${t.length}`;e(y=>[...y,{id:w,field:i,operator:"is any of",value:[]}]),I(w);return}e(w=>w.map(y=>y.id===x?{...y,value:R.includes(i)?R.filter(Q=>Q!==i):[...R,i]}:y)),r("")},v=ht({rows:m,open:s.type!=="closed",onSelect:U,onClose:A,spaceSelects:s.type==="values"&&a===""});return l.jsxs(z,{alignItems:"start",gap:"12",minH:"sm",children:[l.jsx(S,{w:"full",tokens:t.map(i=>({key:i.id,field:i.field,operator:i.operator,value:i.value,state:i.id===x?"editing":"applied",onValueClick:()=>I(i.id),onRemove:()=>{i.id===x&&A(),e(w=>w.filter(y=>y.id!==i.id))}})),inputValue:a,onInputChange:i=>{r(i),v.setActiveKey(null),s.type==="closed"&&b({type:"fields"})},inputRef:h,inputProps:{...v.inputProps,onFocus:()=>{s.type==="closed"&&b({type:"fields"})},onKeyDown:i=>{if(i.key==="Enter"&&s.type==="values"&&!a){i.preventDefault(),A();return}v.inputProps.onKeyDown(i)}},placeholder:"Filter or search…",editingKey:x,shortcut:"/",onClearAll:()=>{e([]),A()}}),l.jsx(vt,{...v.menuProps,anchor:E,"aria-label":s.type==="values"?"Values":"Fields",query:a,footer:s.type==="values"?"Space toggles · Enter done · Esc done":"Type a field · Enter picks"})]})},W={name:"Ex: Add a filter",render:()=>l.jsx(Ht,{}),play:async({canvasElement:t})=>{const e=f(t),a=f(t.ownerDocument.body),r=()=>e.getByRole("combobox",{name:"Filter or search"});await u.click(r()),await u.type(r(),"sta"),await a.findByRole("option",{name:/^Stage/}),await u.keyboard("{Enter}");const s=()=>e.getByRole("group",{name:/^Stage/,hidden:!0});await p(()=>o(s()).toHaveAttribute("data-state","editing")),await p(()=>o(f(s()).getByRole("combobox",{hidden:!0})).toHaveFocus()),await a.findByRole("option",{name:/^Open/}),await u.keyboard(" {ArrowDown} "),await p(()=>o(s()).toHaveAccessibleName("Stage is any of Open, In progress")),await u.keyboard("{Enter}"),await p(()=>o(s()).toHaveAttribute("data-state","applied")),await p(()=>o(r()).toHaveFocus()),await u.type(r(),"p"),await a.findByRole("option",{name:/^Priority/})}},Jt=["Default","Empty","Overflow","Focused","Disabled","Shortcut","BackspaceRemoves","EditingInPlace","TranslatedLabels","ExAddAFilter"];var ve,ye,fe;q.parameters={...q.parameters,docs:{...(ve=q.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(fe=(ye=q.parameters)==null?void 0:ye.docs)==null?void 0:fe.source}}};var ge,we,be;D.parameters={...D.parameters,docs:{...(ge=D.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(be=(we=D.parameters)==null?void 0:we.docs)==null?void 0:be.source}}};var ke,xe,Be;O.parameters={...O.parameters,docs:{...(ke=O.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(Be=(xe=O.parameters)==null?void 0:xe.docs)==null?void 0:Be.source}}};var Fe,Ee,Re;N.parameters={...N.parameters,docs:{...(Fe=N.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(Re=(Ee=N.parameters)==null?void 0:Ee.docs)==null?void 0:Re.source}}};var Te,Ae,Ce;_.parameters={..._.parameters,docs:{...(Te=_.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(Ce=(Ae=_.parameters)==null?void 0:Ae.docs)==null?void 0:Ce.source}}};var He,Me,Se;j.parameters={...j.parameters,docs:{...(He=j.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
}`,...(Se=(Me=j.parameters)==null?void 0:Me.docs)==null?void 0:Se.source}}};var Le,Ie,Ve;K.parameters={...K.parameters,docs:{...(Le=K.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(Ve=(Ie=K.parameters)==null?void 0:Ie.docs)==null?void 0:Ve.source}}};var qe,De,Oe;P.parameters={...P.parameters,docs:{...(qe=P.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...(Oe=(De=P.parameters)==null?void 0:De.docs)==null?void 0:Oe.source}}};var Ne,_e,je;$.parameters={...$.parameters,docs:{...(Ne=$.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
}`,...(je=(_e=$.parameters)==null?void 0:_e.docs)==null?void 0:je.source}}};var Ke,Pe,$e;W.parameters={...W.parameters,docs:{...(Ke=W.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
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
}`,...($e=(Pe=W.parameters)==null?void 0:Pe.docs)==null?void 0:$e.source}}};export{K as BackspaceRemoves,q as Default,_ as Disabled,P as EditingInPlace,D as Empty,W as ExAddAFilter,N as Focused,O as Overflow,j as Shortcut,$ as TranslatedLabels,Jt as __namedExportsOrder,Gt as default};
