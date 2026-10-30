import{m as Mt,e as Dt,f as $t,g as Nt,h as qt,s as Vt,r as y,Z as jt,j as m,B as ne,c as Ke,d as Pt,a as Kt,V as ue,T as Ie,H as _e}from"./iframe-DHbnlgy0.js";import{L as _t}from"./LocaleProvider-CRcb4CGB.js";import{u as Wt}from"./useLocale-DAUAj4Kn.js";import{B as le}from"./Button-_LtwbxuN.js";import{u as Ct,F as Ht}from"./FilterMenu-BranhZa0.js";import{F as Ut}from"./FilterToken-pPM2e__K.js";import{I as zt}from"./IconButton-Ey7Us0Iu.js";import{K as Gt}from"./Kbd-C5M_Idtv.js";import{u as Yt}from"./useOverflowItems-p7iP37pn.js";import"./preload-helper-DCXCruOF.js";import"./Spinner-Bl__mCXj.js";import"./FieldContext-BlD0TYsJ.js";import"./ListItem-DWkzNTqT.js";import"./HighlightText-QFWc0cbp.js";import"./Checkbox-C3_h2Qv8.js";import"./Divider-QdF3k_Rp.js";import"./Toggle-D1Oye6nr.js";import"./ListItemGroup-ChTKN-Co.js";import"./FloatingLayerContext-Byz5ywHT.js";const Ot={},Jt=[],Xt=[["root","filterField__root"],["icon","filterField__icon"],["values","filterField__values"],["sizer","filterField__sizer"],["token","filterField__token"],["input","filterField__input"],["more","filterField__more"],["shortcut","filterField__shortcut"],["clear","filterField__clear"]],Qt=Xt.map(([a,o])=>[a,Nt(o,Ot,qt(Jt,a))]),Zt=Mt((a={})=>Object.fromEntries(Qt.map(([o,t])=>[o,t.recipeFn(a)]))),We=[],en=a=>({...Ot,...Dt(a)}),tn=Object.assign(Zt,{__recipe__:!1,__name__:"filterField",raw:a=>a,classNameMap:{},variantKeys:We,variantMap:{},splitVariantProps(a){return $t(a,We)},getVariantProps:en}),nn=96,an=a=>a instanceof HTMLElement&&!!a.closest('input, textarea, select, [contenteditable=""], [contenteditable="true"]'),ae=a=>{const{tokens:o,inputValue:t,onInputChange:l,inputProps:n,inputRef:v,placeholder:u,editingKey:d=null,onMoreClick:E,moreOpen:g,onClearAll:S,clearLabel:B,shortcut:k,disabled:w,...N}=a,[G,V]=Vt(N),R=tn(),{labels:p}=Wt(),[M,C]=y.useState(null),[oe,j]=y.useState(!1),ie=y.useRef(null),_=y.useRef(null),P=y.useRef(null),U=y.useRef(null),se=y.useRef(new Map),Q=y.useRef(!1),pe=y.useCallback(e=>{if(e){U.current=e,Q.current&&(Q.current=!1,e.focus());return}U.current&&U.current===U.current.ownerDocument.activeElement&&(Q.current=!0)},[]),me=jt([pe,v]),z=y.useCallback(()=>{var e;return(e=U.current)==null?void 0:e.focus()},[]),he=o.filter(e=>e.onRemove&&e.state!=="removing"),b=he[he.length-1],Z=M!==null&&(b==null?void 0:b.key)===M?M:null,H=o.map(e=>e.key),q=y.useCallback(e=>se.current.get(e)??null,[]),{visible:D,overflow:x}=Yt({items:H,containerRef:_,getItemElement:q,activeItem:d??Z,reserve:nn,reserveRef:P}),ee=x.filter(e=>H.includes(e)),K=o.filter(e=>ee.includes(e.key)),W=new Set(D);y.useEffect(()=>{if(!k||w)return;const e=i=>{i.key!==k||i.metaKey||i.ctrlKey||i.altKey||i.defaultPrevented||an(i.target)||(i.preventDefault(),z())};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[k,w,z]);const re=e=>{var i,c;if((i=n==null?void 0:n.onKeyDown)==null||i.call(n,e),!e.defaultPrevented){if(e.key!=="Backspace"){C(null);return}t!==""||d!==null||!b||(e.preventDefault(),Z===b.key?(C(null),(c=b.onRemove)==null||c.call(b)):C(b.key))}},te=e=>e&&((...i)=>{z(),e(...i)}),ye=e=>m.jsx("input",{type:"text",autoComplete:"off",spellCheck:!1,"aria-label":p.filterOrSearch,"aria-keyshortcuts":k,...n,ref:me,className:Ke(R.input,n==null?void 0:n.className),"data-inline":e||void 0,size:e?Math.max(t.length,1):void 0,value:t,placeholder:e?void 0:u,disabled:w,onChange:i=>{C(null),l(i.target.value)},onKeyDown:re}),Se=d!==null&&W.has(d),Y=!!S&&!w&&(o.length>0||t!=="");return m.jsxs(ne,{...Pt("FilterField"),ref:ie,className:Ke(R.root,G),"data-disabled":w||void 0,"data-has-clear":Y||void 0,onFocusCapture:()=>j(!0),onBlurCapture:e=>{var i;(i=ie.current)!=null&&i.contains(e.relatedTarget)||(j(!1),C(null))},onMouseDown:e=>{w||e.target!==e.currentTarget||(e.preventDefault(),z())},...V,children:[m.jsx(Kt,{name:"search",size:"20",fill:w?"icon.disabled":"icon.subtle",className:R.icon,"aria-hidden":!0}),m.jsxs(ne,{className:R.values,onMouseDown:e=>{w||e.target!==e.currentTarget||(e.preventDefault(),z())},children:[m.jsx(ne,{ref:_,className:R.sizer,"aria-hidden":!0}),o.map(({key:e,...i})=>{const c=!W.has(e),T=e===d&&!c;return m.jsx(ne,{as:"span",ref:f=>{f?se.current.set(e,f):se.current.delete(e)},className:R.token,"data-overflowed":c||void 0,inert:c||void 0,children:m.jsx(Ut,{...i,state:e===Z?"armed":i.state,disabled:w,retainFocus:!0,editor:T?ye(!0):void 0,onFieldClick:te(i.onFieldClick),onOperatorClick:te(i.onOperatorClick),onValueClick:te(i.onValueClick),onRemove:te(i.onRemove)})},e)}),K.length>0&&m.jsx(le,{ref:P,size:"sm",variant:"hollow",iconAfter:"caret-down",className:R.more,disabled:w,"aria-expanded":E?!!g:void 0,"data-open":g||void 0,"data-pending":K.some(e=>e.state==="pending"||e.state==="removing")||void 0,onMouseDown:e=>e.preventDefault(),onClick:e=>{z(),E==null||E(ee,e.currentTarget)},children:p.moreFilters(K.length)}),!Se&&ye(!1)]}),k&&!oe&&!w&&m.jsx(Gt,{keys:[k],className:R.shortcut}),Y&&m.jsx(zt,{variant:"ghost",size:"sm",iconName:"x",altText:B??p.clearFilters,className:R.clear,onMouseDown:e=>e.preventDefault(),onClick:()=>{C(null),z(),S==null||S()}})]})};ae.__docgenInfo={description:`The filter bar's field: the applied filters as tokens, followed by one
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
  /**
   * A second operator and value after the first. The operator part opens the
   * operator menu (\`onOperatorClick\`), and the value part opens the value
   * menu (\`onValueClick\`), as the first ones do.
   */
  joined?: FilterTokenJoined;
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
   * place, usually a text input. Every value stays before it, with no \`+N\`
   * count, so the person sees the whole list they are editing.
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
an operator that takes no value, such as "is empty".`},{key:"joined",value:{name:"signature",type:"object",raw:`{
  /** Operator text, including the joining word, such as "or contains". */
  operator: string;
  /** Value text, such as "“water”". */
  value: string;
}`,signature:{properties:[{key:"operator",value:{name:"string",required:!0},description:'Operator text, including the joining word, such as "or contains".'},{key:"value",value:{name:"string",required:!0},description:'Value text, such as "“water”".'}]},required:!1},description:"A second operator and value after the first. The operator part opens the\noperator menu (`onOperatorClick`), and the value part opens the value\nmenu (`onValueClick`), as the first ones do."},{key:"state",value:{name:"union",raw:`| 'applied'
| 'editing'
| 'pending'
| 'removing'
| 'armed'`,elements:[{name:"literal",value:"'applied'"},{name:"literal",value:"'editing'"},{name:"literal",value:"'pending'"},{name:"literal",value:"'removing'"},{name:"literal",value:"'armed'"}],required:!1},description:'@default "applied"'},{key:"tone",value:{name:"union",raw:"'default' | 'exclude'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'exclude'"}],required:!1},description:'@default "default"'},{key:"operatorLocked",value:{name:"boolean",required:!1},description:`Renders the operator as text, not as a button. Use it when the field
supports only one operator.`},{key:"editor",value:{name:"ReactNode",required:!1},description:"Content that replaces the value button while the token is edited in\nplace, usually a text input. Every value stays before it, with no `+N`\ncount, so the person sees the whole list they are editing."},{key:"disabled",value:{name:"boolean",required:!1},description:"Disables every part of the token, the `editor` included."},{key:"retainFocus",value:{name:"boolean",required:!1},description:`Keeps focus where it is when a part is clicked with a pointer. A filter
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
  /**
   * A second operator and value after the first. The operator part opens the
   * operator menu (\`onOperatorClick\`), and the value part opens the value
   * menu (\`onValueClick\`), as the first ones do.
   */
  joined?: FilterTokenJoined;
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
   * place, usually a text input. Every value stays before it, with no \`+N\`
   * count, so the person sees the whole list they are editing.
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
an operator that takes no value, such as "is empty".`},{key:"joined",value:{name:"signature",type:"object",raw:`{
  /** Operator text, including the joining word, such as "or contains". */
  operator: string;
  /** Value text, such as "“water”". */
  value: string;
}`,signature:{properties:[{key:"operator",value:{name:"string",required:!0},description:'Operator text, including the joining word, such as "or contains".'},{key:"value",value:{name:"string",required:!0},description:'Value text, such as "“water”".'}]},required:!1},description:"A second operator and value after the first. The operator part opens the\noperator menu (`onOperatorClick`), and the value part opens the value\nmenu (`onValueClick`), as the first ones do."},{key:"state",value:{name:"union",raw:`| 'applied'
| 'editing'
| 'pending'
| 'removing'
| 'armed'`,elements:[{name:"literal",value:"'applied'"},{name:"literal",value:"'editing'"},{name:"literal",value:"'pending'"},{name:"literal",value:"'removing'"},{name:"literal",value:"'armed'"}],required:!1},description:'@default "applied"'},{key:"tone",value:{name:"union",raw:"'default' | 'exclude'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'exclude'"}],required:!1},description:'@default "default"'},{key:"operatorLocked",value:{name:"boolean",required:!1},description:`Renders the operator as text, not as a button. Use it when the field
supports only one operator.`},{key:"editor",value:{name:"ReactNode",required:!1},description:"Content that replaces the value button while the token is edited in\nplace, usually a text input. Every value stays before it, with no `+N`\ncount, so the person sees the whole list they are editing."},{key:"disabled",value:{name:"boolean",required:!1},description:"Disables every part of the token, the `editor` included."},{key:"retainFocus",value:{name:"boolean",required:!1},description:`Keeps focus where it is when a part is clicked with a pointer. A filter
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
the field does not have focus.`},disabled:{required:!1,tsType:{name:"boolean"},description:"Disables the input, the tokens and the buttons."}}};const{expect:s,fn:Ce,userEvent:r,waitFor:h,within:$}=__STORYBOOK_MODULE_TEST__,je=[{id:"resolution",field:"Resolution",operator:"is",value:"All open",locked:!0},{id:"stage",field:"Stage",operator:"is any of",value:["Open","In progress"]},{id:"entered",field:"Entered On",operator:"is on or after",value:"Sep 1, 2026"}],Lt=[...je,{id:"assigned",field:"Assigned To",operator:"is any of",value:["Brent Barton","David Atkins"],state:"pending"},{id:"type",field:"Case Type",operator:"is",value:"Warranty"},{id:"customer",field:"Customer",operator:"is",value:"Acme Corp"}],de=({initial:a=je,width:o="full",shortcut:t="/",...l})=>{const[n,v]=y.useState(a),[u,d]=y.useState(""),E=g=>v(S=>S.filter(B=>B.id!==g));return m.jsxs(ue,{alignItems:"start",gap:"12",children:[m.jsx(ae,{w:o,tokens:n.map(g=>({key:g.id,field:g.field,operator:g.operator,value:g.value,state:g.state,operatorLocked:g.locked,onRemove:()=>E(g.id)})),inputValue:u,onInputChange:d,placeholder:"Filter or search…",shortcut:t,onClearAll:()=>{v([]),d("")},...l}),m.jsx(le,{size:"sm",variant:"ghost",onClick:()=>v(a),children:"Reset"})]})},$n={title:"Components/FilterField",component:ae,parameters:{layout:"padded"},args:{tokens:[],inputValue:"",onInputChange:Ce(),onClearAll:Ce(),onMoreClick:Ce(),shortcut:"/"},render:a=>m.jsx(de,{shortcut:a.shortcut,disabled:a.disabled,onMoreClick:a.onMoreClick})},ve={play:async({canvasElement:a})=>{const o=$(a),t=o.getByRole("textbox",{name:"Filter or search"});s(o.getByRole("group",{name:"Stage is any of Open, In progress"})).toBeVisible(),s(t).toHaveAttribute("aria-keyshortcuts","/"),await r.click(t),await r.type(t,"acme"),s(t).toHaveValue("acme"),await r.click(o.getByRole("button",{name:"Clear all filters"})),await h(()=>s(o.queryAllByRole("group")).toHaveLength(0)),s(t).toHaveValue(""),s(t).toHaveFocus(),await r.click(o.getByRole("button",{name:"Reset"})),await h(()=>s(o.getAllByRole("group")).toHaveLength(3))}},fe={render:a=>m.jsx(de,{initial:[],shortcut:a.shortcut}),play:async({canvasElement:a})=>{const o=$(a);s(o.queryByRole("button",{name:"Clear all filters"})).not.toBeInTheDocument(),s(o.getByText("/")).toBeVisible(),s(o.getByRole("textbox",{name:"Filter or search"})).toHaveAttribute("placeholder","Filter or search…")}},on=a=>a.mock.calls[0],we={render:a=>m.jsx(de,{initial:Lt,width:"2xl",onMoreClick:a.onMoreClick}),play:async({args:a,canvasElement:o})=>{const t=$(o),l=await t.findByRole("button",{name:/^\+\d more$/});s(l).toHaveAttribute("data-pending"),s(t.getByRole("group",{name:"Resolution is All open"})).toBeVisible(),s(t.queryByRole("group",{name:"Customer is Acme Corp"})).not.toBeInTheDocument(),await r.click(l),s(a.onMoreClick).toHaveBeenCalledOnce();const[n,v]=on(a.onMoreClick);s(n).toContain("customer"),s(n).not.toContain("resolution"),s(v).toBe(l),t.getByRole("textbox",{name:"Filter or search"}).blur(),await h(()=>s(t.getByText("/")).toBeVisible())}},ge={play:async({canvasElement:a})=>{const o=$(a),t=o.getByRole("textbox",{name:"Filter or search"});s(o.getByText("/")).toBeVisible(),await r.click(t),await h(()=>s(t).toHaveFocus()),s(o.queryByText("/")).not.toBeInTheDocument(),await r.type(t,"acme"),t.blur(),await h(()=>s(o.getByText("/")).toBeVisible()),await r.clear(t),t.blur()}},be={args:{disabled:!0},play:async({canvasElement:a})=>{const o=$(a);s(o.getByRole("textbox",{name:"Filter or search"})).toBeDisabled(),s(o.getByRole("button",{name:/^Remove filter: Stage/})).toBeDisabled(),s(o.queryByRole("button",{name:"Clear all filters"})).not.toBeInTheDocument(),s(o.queryByText("/")).not.toBeInTheDocument()}},ke={render:a=>m.jsxs(ue,{alignItems:"start",gap:"12",children:[m.jsx(ne,{as:"input","aria-label":"Notes",w:"xs",h:"32",px:"8",borderWidth:"1",borderStyle:"solid",borderColor:"border",borderRadius:"4",bg:"surface",color:"text"}),m.jsx(de,{shortcut:a.shortcut})]}),play:async({canvasElement:a})=>{const o=$(a),t=o.getByRole("textbox",{name:"Filter or search"}),l=o.getByRole("textbox",{name:"Notes"});await r.type(l,"a/b"),s(l).toHaveValue("a/b"),s(t).not.toHaveFocus(),l.blur(),await r.keyboard("/"),await h(()=>s(t).toHaveFocus()),s(t).toHaveValue(""),t.blur(),await h(()=>s(o.getByText("/")).toBeVisible())}},xe={name:"Backspace removes",play:async({canvasElement:a})=>{const o=$(a),t=o.getByRole("textbox",{name:"Filter or search"}),l=()=>o.queryByRole("group",{name:"Entered On is on or after Sep 1, 2026"});await r.click(t),await r.type(t,"a{Backspace}"),s(l()).toHaveAttribute("data-state","applied"),await r.keyboard("{Backspace}"),await h(()=>s(l()).toHaveAttribute("data-state","armed")),await r.keyboard("{ArrowLeft}"),await h(()=>s(l()).toHaveAttribute("data-state","applied")),await r.keyboard("{Backspace}{Backspace}"),await h(()=>s(l()).not.toBeInTheDocument()),s(t).toHaveFocus(),await r.click(o.getByRole("button",{name:"Reset"})),await h(()=>s(l()).toBeVisible())}},sn=()=>{const[a,o]=y.useState(null),[t,l]=y.useState("");return m.jsxs(ue,{alignItems:"start",gap:"12",children:[m.jsx(ae,{w:"full",tokens:je.map(n=>({key:n.id,field:n.field,operator:n.operator,value:n.value,state:n.id===a?"editing":"applied",operatorLocked:n.locked,onValueClick:()=>o(n.id)})),inputValue:t,onInputChange:l,inputProps:{onKeyDown:n=>{n.key==="Escape"&&o(null)}},placeholder:"Filter or search…",editingKey:a,shortcut:"/"}),m.jsx(Ie,{textStyle:"body.sm",color:"text.subtlest",children:"Click a value to edit it in place. Esc ends the edit."})]})},Ee={render:()=>m.jsx(sn,{}),play:async({canvasElement:a})=>{const o=$(a),t=()=>o.getByRole("group",{name:"Stage is any of Open, In progress"});await r.click(o.getByRole("button",{name:"Open, In progress"})),await h(()=>s(t()).toHaveAttribute("data-state","editing"));const l=$(t()).getByRole("textbox",{name:"Filter or search"});await h(()=>s(l).toHaveFocus()),await r.type(l,"Wai"),s(l).toHaveValue("Wai"),await r.keyboard("{Escape}"),await h(()=>s(t()).toHaveAttribute("data-state","applied"));const n=o.getByRole("textbox",{name:"Filter or search"});s($(t()).queryByRole("textbox")).not.toBeInTheDocument(),await h(()=>s(n).toHaveFocus()),await r.clear(n),await r.click(o.getByRole("button",{name:"Open, In progress"})),await h(()=>s(t()).toHaveAttribute("data-state","editing"))}},Be={render:()=>m.jsx(_t,{labels:{filterOrSearch:"Filtrar o buscar",clearFilters:"Quitar todos los filtros",moreFilters:a=>`+${a} más`},children:m.jsx(de,{initial:Lt,width:"2xl"})}),play:async({canvasElement:a})=>{const o=$(a);s(o.getByRole("textbox",{name:"Filtrar o buscar"})).toBeVisible(),s(o.getByRole("button",{name:"Quitar todos los filtros"})).toBeVisible(),s(await o.findByRole("button",{name:/^\+\d más$/})).toBeVisible()}},Ue={Stage:["Open","In progress","Waiting on customer","Closed"],"Case Type":["Warranty","Repair","Question"],Priority:["High","Medium","Low"]},rn=()=>{const[a,o]=y.useState([]),[t,l]=y.useState(""),[n,v]=y.useState({type:"closed"}),[u,d]=y.useState(null),[E,g]=y.useState(null),S=a.find(p=>p.id===u),B=S&&Array.isArray(S.value)?S.value:[],k=t.trim().toLowerCase(),w=[];if(n.type==="fields"){w.push({type:"group",label:"Fields"});for(const p of Object.keys(Ue))p.toLowerCase().includes(k)&&w.push({type:"item",key:p,label:p,detail:"list"})}else if(n.type==="values"&&S){w.push({type:"group",label:`${S.field} is any of`});for(const p of Ue[S.field]??[])p.toLowerCase().includes(k)&&w.push({type:"item",key:p,label:p,checked:B.includes(p)})}k&&!w.some(p=>p.type==="item")&&w.push({type:"empty",label:`No match for “${t}”`});const N=()=>{o(p=>p.filter(M=>M.id!==u||M.value.length>0)),d(null),v({type:"closed"}),l("")},G=p=>{d(p),v({type:"values"}),l("")},V=p=>{if(n.type==="fields"){const M=`${p}-${a.length}`;o(C=>[...C,{id:M,field:p,operator:"is any of",value:[]}]),G(M);return}o(M=>M.map(C=>C.id===u?{...C,value:B.includes(p)?B.filter(oe=>oe!==p):[...B,p]}:C)),l("")},R=Ct({rows:w,open:n.type!=="closed",onSelect:V,onClose:N,spaceSelects:n.type==="values"&&t===""});return m.jsxs(ue,{alignItems:"start",gap:"12",minH:"sm",children:[m.jsx(ae,{w:"full",tokens:a.map(p=>({key:p.id,field:p.field,operator:p.operator,value:p.value,state:p.id===u?"editing":"applied",onValueClick:()=>G(p.id),onRemove:()=>{p.id===u&&N(),o(M=>M.filter(C=>C.id!==p.id))}})),inputValue:t,onInputChange:p=>{l(p),R.setActiveKey(null),n.type==="closed"&&v({type:"fields"})},inputRef:g,inputProps:{...R.inputProps,onFocus:()=>{n.type==="closed"&&v({type:"fields"})},onKeyDown:p=>{if(p.key==="Enter"&&n.type==="values"&&!t){p.preventDefault(),N();return}R.inputProps.onKeyDown(p)}},placeholder:"Filter or search…",editingKey:u,shortcut:"/",onClearAll:()=>{o([]),N()}}),m.jsx(Ht,{...R.menuProps,anchor:E,"aria-label":n.type==="values"?"Values":"Fields",query:t,footer:n.type==="values"?"Space toggles · Enter done · Esc done":"Type a field · Enter picks"})]})},Te={name:"Ex: Add a filter",render:()=>m.jsx(rn,{}),play:async({canvasElement:a})=>{const o=$(a),t=$(a.ownerDocument.body),l=()=>o.getByRole("combobox",{name:"Filter or search"});await r.click(l()),await r.type(l(),"sta"),await t.findByRole("option",{name:/^Stage/}),await r.keyboard("{Enter}");const n=()=>o.getByRole("group",{name:/^Stage/,hidden:!0});await h(()=>s(n()).toHaveAttribute("data-state","editing")),await h(()=>s($(n()).getByRole("combobox",{hidden:!0})).toHaveFocus()),await t.findByRole("option",{name:/^Open/}),await r.keyboard(" {ArrowDown} "),await h(()=>s(n()).toHaveAccessibleName("Stage is any of Open, In progress")),await r.keyboard("{Enter}"),await h(()=>s(n()).toHaveAttribute("data-state","applied")),await h(()=>s(l()).toHaveFocus()),await r.type(l(),"p"),await t.findByRole("option",{name:/^Priority/})}},ln=[{name:"Acme Corp",description:"Austin, TX"},{name:"Apex Machining",description:"Dallas, TX"},{name:"Bluebird Labs",description:"Denver, CO"},{name:"Cobalt Motors",description:"Detroit, MI"},{name:"Delta Fabrication",description:"Tulsa, OK"},{name:"Evergreen Plastics",description:"Portland, OR"},{name:"Granite Controls",description:"Austin, TX"},{name:"Harbor Instruments",description:"Seattle, WA"},{name:"Ironwood Tooling",description:"Akron, OH"},{name:"Juniper Medical",description:"Boise, ID"}],cn=[{name:"HNG-1001",description:"Hinge, 110°, full overlay"},{name:"HNG-1002",description:"Hinge, 110°, half overlay"},{name:"HNG-1010",description:"Hinge, soft close, clip-on"},{name:"PLT-2001",description:"Mounting plate, steel"},{name:"SLD-3018",description:"Drawer slide, full extension, 18 in"},{name:"SLD-3021",description:"Drawer slide, full extension, 21 in"},{name:"LEV-4001",description:"Cabinet leveler, adjustable"},{name:"SCR-5005",description:"Screw, euro, 5 x 13 mm"},{name:"KIT-6001",description:"Install kit, base cabinet"},{name:"KIT-6002",description:"Install kit, water damage repair"}],J={Resolution:{kind:"one",ops:["in"],groups:[{value:"@open",label:"All open"},{value:"@closed",label:"All closed"}],options:["Fixed","Duplicate","Will not fix"]},Stage:{kind:"many",ops:["in"],options:["Open","In progress","Waiting on customer","Closed"]},Priority:{kind:"one",ops:["in"],options:["High","Medium","Low"]},Customer:{kind:"lookup",ops:["in"],records:ln,prompt:"Type a customer name"},Part:{kind:"lookup",ops:["in"],records:cn,multiple:!0,prompt:"Type a part number or text"},Intercompany:{kind:"one",ops:["in"],options:["Yes","No"]},"Entered On":{kind:"date",ops:["between","onOrAfter","onOrBefore"]},"Cust PO":{kind:"text",ops:["contains"]},Search:{kind:"text",ops:["contains"]}},un=Object.keys(J).filter(a=>a!=="Search"),dn={many:"pick many",one:"pick one",lookup:"search",date:"date",text:"text"},Me={between:"is between",onOrAfter:"is on or after",onOrBefore:"is on or before",contains:"contains"},He=8,Fe="2026-10-20",ze=Number(Fe.slice(0,4)),pn=[{label:"Start of this month",value:"2026-10-01"},{label:"Start of last month",value:"2026-09-01"},{label:"Start of the year",value:"2026-01-01"}],mn=[{label:"Last 7 days",values:["2026-10-14",Fe]},{label:"Last 30 days",values:["2026-09-21",Fe]},{label:"This month",values:["2026-10-01",Fe]},{label:"Last month",values:["2026-09-01","2026-09-30"]},{label:"Last quarter",values:["2026-07-01","2026-09-30"]}],ce=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],De=a=>a.split("-").map(Number),X=a=>{const[o,t,l]=De(a);return`${ce[(t??1)-1]} ${l}, ${o}`},$e=(a,o)=>{const[t,l,n]=De(a),[v,u,d]=De(o);return t!==v?`${X(a)} – ${X(o)}`:l===u?`${ce[(l??1)-1]} ${n} – ${d}, ${v}`:`${ce[(l??1)-1]} ${n} – ${ce[(u??1)-1]} ${d}, ${v}`},Oe=(a,o,t)=>o<1||o>12||t<1||t>31?null:`${a}-${String(o).padStart(2,"0")}-${String(t).padStart(2,"0")}`,Ne=a=>{const o=a.trim().toLowerCase();let t=o.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);if(t)return Oe(Number(t[1]),Number(t[2]),Number(t[3]));if(t=o.match(/^(\d{1,2})\/(\d{1,2})(?:\/(\d{4}))?$/),t)return Oe(t[3]?Number(t[3]):ze,Number(t[1]),Number(t[2]));if(t=o.match(/^([a-z]{3})[a-z]*\.? (\d{1,2})(?:,? (\d{4}))?$/),t){const l=ce.findIndex(n=>n.toLowerCase()===(t==null?void 0:t[1]));if(l>=0)return Oe(t[3]?Number(t[3]):ze,l+1,Number(t[2]))}return null},hn=a=>{const o=a.trim().split(/\s+(?:-|to)\s+|\s*–\s*/i);if(o.length!==2)return null;const t=Ne(o[0]??""),l=Ne(o[1]??"");return!t||!l?null:t<=l?[t,l]:[l,t]},Pe="*",Ae=a=>a.startsWith(Pe),qe=a=>`“${Ae(a)?a.slice(Pe.length):a}”`,yn=(a,o)=>{var t,l,n;return((n=(l=(t=J[a])==null?void 0:t.groups)==null?void 0:l.find(v=>v.value===o))==null?void 0:n.label)??o},vn=a=>a==="between"?2:1,Le=a=>a.values.length>=vn(a.op),Ve=a=>{const o=J[a.field];if(a.op==="between"){const[d,E]=a.values;return{operator:Me.between,value:d&&E?$e(d,E):d?`${X(d)} –`:""}}if(a.op!=="in"){const d=a.values[0];return{operator:Me[a.op],value:d?(o==null?void 0:o.kind)==="date"?X(d):qe(d):""}}const t=a.values.filter(d=>!Ae(d)),l=a.values.filter(Ae).map(qe).join(" or "),n=t.length>1?"is any of":"is",v=t.map(d=>yn(a.field,d)),u=(o==null?void 0:o.kind)==="many"||o!=null&&o.multiple?v:v[0]??"";return l?t.length===0?{operator:"contains",value:l}:{operator:n,value:u,joined:{operator:"or contains",value:l}}:{operator:n,value:u}},Ge=a=>{const o=Ve(a),t=Array.isArray(o.value)?o.value.join(", "):o.value,l=o.joined?` ${o.joined.operator} ${o.joined.value}`:"";return`${a.field} ${o.operator} ${t}${l}`},It=(a,o)=>a.field===o.field&&a.op===o.op&&a.values.join(`
`)===o.values.join(`
`),Ye=(a,o)=>a.filter(t=>{const l=o.find(n=>n.id===t.id);return!l||!It(l,t)}).length,Je=[{id:"resolution",field:"Resolution",op:"in",values:["@open"]},{id:"stage",field:"Stage",op:"in",values:["Open","In progress"]},{id:"entered",field:"Entered On",op:"between",values:["2026-09-01","2026-09-30"]}],fn=()=>{const[a,o]=y.useState(Je),[t,l]=y.useState(Je),[n,v]=y.useState(null),[u,d]=y.useState({type:"closed"}),[E,g]=y.useState(""),[S,B]=y.useState(null),[k,w]=y.useState(null),[N,G]=y.useState(!1),[V,R]=y.useState(null),p=y.useRef(null),M=y.useRef(0),C=y.useRef(!1);y.useEffect(()=>{if(!N)return;const e=window.setTimeout(()=>G(!1),800);return()=>window.clearTimeout(e)},[N]),y.useEffect(()=>{if(!V)return;const e=window.setTimeout(()=>R(null),6e3);return()=>window.clearTimeout(e)},[V]);const oe=e=>{const i=a.find(c=>c.id===e.id);return!i||!It(i,e)},j=Ye(t,a),ie=[...t.map(e=>(n==null?void 0:n.id)===e.id?{filter:n,state:"editing"}:{filter:e,state:oe(e)?"pending":"applied"}),...n&&!t.some(e=>e.id===n.id)?[{filter:n,state:"editing"}]:[]],_=()=>{u.type==="values"&&(C.current=!0,requestAnimationFrame(()=>{C.current=!1})),v(null),d({type:"closed"}),g(""),w(null),W.setActiveKey(null)},P=(e=n)=>{e&&!Le(e)&&a.some(i=>i.id===e.id)?pe(e.id):e&&l(i=>Le(e)?i.some(c=>c.id===e.id)?i.map(c=>c.id===e.id?e:c):[...i,e]:i.filter(c=>c.id!==e.id)),_()},U=(e,i,c)=>{n&&n.id!==e.id&&P(n),v({...e,values:[...e.values]}),d({type:i,id:e.id}),g(""),w(c),W.setActiveKey(null)},se=e=>{const i=t.find(T=>T.field===e);if(i){U(i,"values",null);return}const c={id:`new-${M.current++}`,field:e,op:J[e].ops[0],values:[]};v(c),d({type:"values",id:c.id}),g(""),W.setActiveKey(null)},Q=e=>{l(i=>{const c=i.find(T=>T.field==="Search");return c?i.map(T=>T.id===c.id?{...T,values:[e]}:T):[...i,{id:`new-${M.current++}`,field:"Search",op:"contains",values:[e]}]}),_()},pe=e=>{(n==null?void 0:n.id)===e&&_(),l(i=>i.filter(c=>c.id!==e)),o(i=>i.filter(c=>c.id!==e)),G(!0)},me=()=>{o(t),R(null),G(!0),_()},z=()=>{R(t),l(a),_()},he=()=>{V&&l(V),R(null)};y.useEffect(()=>{if(u.type==="closed")return;const e=i=>{var T;const c=i.target;(T=p.current)!=null&&T.contains(c)||c.closest("[data-filter-bar-menu]")||P()};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)});const b=[],Z=new Map,H=(e,i)=>{b.push({type:"item",...e}),Z.set(e.key,i)},q=E.trim(),D=q.toLowerCase(),x=n?J[n.field]:void 0,ee=u.type==="values"&&((x==null?void 0:x.kind)==="many"||(x==null?void 0:x.kind)==="lookup"&&!!x.multiple);let K="Enter picks · Esc cancels";if(u.type==="root"){const e=new Set(t.map(c=>c.field)),i=un.filter(c=>c.toLowerCase().includes(D)).sort((c,T)=>Number(e.has(c))-Number(e.has(T)));i.length>0&&b.push({type:"group",label:"Fields"});for(const c of i)H({key:`field:${c}`,label:c,detail:dn[J[c].kind]},()=>se(c));D?(b.push({type:"group",label:"Search"}),H({key:"search",label:`Search contains “${q}”`,detail:"Tab"},()=>Q(q)),K="Enter picks · Tab searches the text"):K=j>0?"Type a field or text · Enter applies":"Type a field or text · Enter picks"}if(u.type==="op"&&n&&x){b.push({type:"group",label:`${n.field} operator`});for(const e of x.ops)e!=="in"&&H({key:`op:${e}`,label:Me[e],selected:e===n.op,detail:e===n.op?"current":void 0},()=>{const i=e==="between"?n.values.slice(0,2):n.values.slice(0,1),c={...n,op:e,values:i};Le(c)?P(c):(v(c),d({type:"values",id:c.id}),w(null))})}if(u.type==="values"&&n&&x){const e=Ve(n);b.push({type:"group",label:`${n.field} ${e.operator}`});const i=f=>{v({...n,values:n.values.includes(f)?n.values.filter(I=>I!==f):[...n.values,f]}),g("")},c=f=>P({...n,values:[f]}),T=f=>n.values.includes(f)?{selected:!0,detail:"current"}:{selected:!1};if(x.kind==="many"){for(const f of x.options??[])f.toLowerCase().includes(D)&&H({key:f,label:f,checked:n.values.includes(f)},()=>i(f));K="Space toggles · Enter done · Esc cancels"}else if(x.kind==="one"){const f=(x.groups??[]).filter(F=>F.label.toLowerCase().includes(D)),I=(x.options??[]).filter(F=>F.toLowerCase().includes(D));for(const F of f)H({key:F.value,label:F.label,...T(F.value)},()=>c(F.value));f.length>0&&I.length>0&&b.push({type:"group",label:`Each ${n.field.toLowerCase()}`});for(const F of I)H({key:F,label:F,...T(F)},()=>c(F))}else if(x.kind==="lookup"){const f=x.records??[],I=O=>{var A;return(A=f.find(L=>L.name===O))==null?void 0:A.description},F=x.multiple?i:c;if(D){const O=f.filter(A=>A.name.toLowerCase().includes(D)||A.description.toLowerCase().includes(D));for(const A of O.slice(0,He))H({key:A.name,label:A.name,description:A.description,...x.multiple?{checked:n.values.includes(A.name)}:T(A.name)},()=>F(A.name));if(O.length>He&&b.push({type:"empty",label:`${O.length-He} more · keep typing to narrow`}),x.multiple){const A=`${Pe}${q}`;b.push({type:"group",label:"Or match the text"}),H({key:`text:${q}`,label:`contains “${q}”`,checked:n.values.includes(A)},()=>i(A))}}else{for(const O of n.values)H({key:`picked:${O}`,label:Ae(O)?`contains ${qe(O)}`:O,description:I(O),...x.multiple?{checked:!0}:T(O)},()=>F(O));n.values.length===0&&b.push({type:"empty",label:x.prompt??"Type to find"})}K=x.multiple?"Type to find · Space toggles · Enter done · Esc cancels":"Type to find · Enter picks · Esc cancels"}else if(x.kind==="date"){const f=n.op==="between",I=f&&n.values.length===1?n.values[0]:void 0,F=L=>{if(!f)return c(L);if(!I){v({...n,values:[L]}),g(""),W.setActiveKey(null);return}P({...n,values:I<=L?[I,L]:[L,I]})};f&&I&&(b[b.length-1]={type:"group",label:`${n.field} is between ${X(I)} and …`});const O=f&&!I&&D?hn(q):null;O&&H({key:"typed-range",label:$e(...O),detail:"typed"},()=>P({...n,values:O}));const A=D&&!O?Ne(q):null;if(A&&H({key:"typed",label:X(A),detail:f?I?"end date":"start date":"typed"},()=>F(A)),f&&!I&&!D){for(const L of mn)H({key:`range:${L.label}`,label:L.label,detail:$e(...L.values)},()=>P({...n,values:L.values}));b.push({type:"group",label:"Or pick a start date"})}if(!D)for(const L of pn)H({key:L.value,label:L.label,detail:X(L.value),selected:!f&&n.values[0]===L.value},()=>F(L.value));K=f?I?"Type or pick the end date · Esc cancels":"Type a range, such as 10/1 - 10/15 · Esc cancels":"Type a date, such as 10/15 · Esc cancels"}else D?H({key:"typed",label:`“${q}”`},()=>c(q)):b.push({type:"empty",label:"Type the text to match"}),K="Enter adds the text · Esc cancels";D&&!b.some(f=>f.type==="item")&&b.push({type:"empty",label:`No ${n.field.toLowerCase()} matches “${q}”`})}if(u.type==="more"){const e=ie.filter(i=>u.keys.includes(i.filter.id));b.push({type:"group",label:`${e.length} more filters`});for(const{filter:i,state:c}of e)H({key:i.id,label:Ge(i),detail:c==="pending"?c:void 0},()=>U(i,"values",null));K="Pick a filter to edit it"}const W=Ct({rows:b,open:u.type!=="closed",onSelect:e=>{var i;return(i=Z.get(e))==null?void 0:i()},onClose:_,spaceSelects:ee&&E===""}),re=()=>{u.type==="closed"&&d({type:"root"})},te=e=>{const i=E.trim()==="",c=u.type==="closed"||u.type==="root";if(e.key==="Enter"&&i&&c&&j>0){e.preventDefault(),me();return}if(e.key==="Enter"&&i&&ee){e.preventDefault(),P();return}if(e.key==="Backspace"&&E===""&&ee&&n&&n.values.length>0){e.preventDefault(),v({...n,values:n.values.slice(0,-1)});return}if(e.key==="Tab"&&u.type==="root"&&!i){e.preventDefault(),Q(E.trim());return}if(e.key==="Escape"&&u.type==="closed"&&j>0){e.preventDefault(),z();return}if(e.key==="ArrowDown"&&u.type==="closed"){e.preventDefault(),re();return}W.inputProps.onKeyDown(e)},ye=ie.map(({filter:e,state:i})=>{const c=J[e.field],T=Ve(e);return{key:e.id,field:e.field,operator:T.operator,value:T.value,joined:T.joined,state:i,operatorLocked:c.ops.length===1,onValueClick:()=>U(e,"values",null),onOperatorClick:f=>U(e,"op",f.currentTarget),onRemove:()=>pe(e.id)}}),Se=u.type==="op"||u.type==="more"?k:S,Y=V?Ye(V,a):0;return m.jsxs(ue,{alignItems:"stretch",gap:"12",w:"full",minH:"md",children:[m.jsxs(_e,{gap:"8",alignItems:"start",children:[m.jsx(ne,{ref:p,flex:"1",minW:"0",children:m.jsx(ae,{w:"full",tokens:ye,inputValue:E,onInputChange:e=>{g(e),W.setActiveKey(null),(u.type==="closed"||u.type==="more")&&d({type:"root"})},inputRef:B,inputProps:{...W.inputProps,onFocus:()=>{C.current||re()},onMouseDown:re,onKeyDown:te},placeholder:"Filter or search…",editingKey:u.type==="values"?(n==null?void 0:n.id)??null:null,onMoreClick:(e,i)=>{if(u.type==="more")return _();P(),d({type:"more",keys:e}),w(i)},moreOpen:u.type==="more",shortcut:"/",onClearAll:()=>{l([]),o([]),G(!0),_()}})}),j>0&&m.jsxs(m.Fragment,{children:[m.jsx(le,{variant:"ghost",onClick:z,children:"Discard"}),m.jsx(le,{variant:"primary",disabled:N,onClick:me,children:`Apply (${j})`})]})]}),m.jsxs(_e,{gap:"8",children:[m.jsx(Ie,{textStyle:"body.sm",color:"text.subtle",children:N?"Updating the results…":j>0?`These results do not include ${j} pending ${j===1?"change":"changes"}. Press Enter or Apply to update them. Press Esc or Discard to undo.`:V&&Y>0?`Discarded ${Y} ${Y===1?"change":"changes"}.`:"The results match the applied filters."}),!N&&j===0&&V&&Y>0&&m.jsx(le,{size:"sm",variant:"ghost",onClick:he,children:"Undo"})]}),m.jsx(Ie,{textStyle:"body.sm",color:"text.subtlest","data-testid":"applied",children:`Applied: ${a.map(Ge).join(" · ")||"none"}`}),m.jsx(Ht,{...W.menuProps,anchor:Se,"aria-label":u.type==="values"?`${(n==null?void 0:n.field)??""} values`:u.type==="op"?"Operators":u.type==="more"?"More filters":"Fields",query:u.type==="op"||u.type==="more"?void 0:E,footer:K,"data-filter-bar-menu":!0})]})},Re={name:"Ex: Filter bar with Apply",render:()=>m.jsx(fn,{}),play:async({canvasElement:a})=>{const o=$(a),t=$(a.ownerDocument.body),l=()=>Array.from(a.querySelectorAll('[data-ds-component="FilterToken"]')),n=B=>{const k=l().find(w=>B.test(w.getAttribute("aria-label")??""));if(!k)throw new Error(`No filter token named ${B}`);return k},v=(B,k)=>{const w=Array.from(n(B).querySelectorAll("button")).find(N=>N.textContent===k);if(!w)throw new Error(`No part "${k}" in ${B}`);return w},u=()=>o.queryByRole("button",{name:/^Apply/,hidden:!0}),d=()=>o.getByRole("combobox",{name:"Filter or search",hidden:!0}),E=()=>o.getByTestId("applied"),g=B=>l().some(k=>k.getAttribute("aria-label")===B);await r.click(v(/^Stage/,"Open, In progress")),await h(()=>s(n(/^Stage/)).toHaveAttribute("data-state","editing")),await r.click(await t.findByRole("option",{name:/^Waiting on customer/})),await r.keyboard("{Backspace}"),await h(()=>s(g("Stage is any of Open, In progress")).toBe(!0)),await r.click(await t.findByRole("option",{name:/^Closed/})),await r.keyboard("{Enter}"),await h(()=>s(n(/^Stage/)).toHaveAttribute("data-state","pending")),s(u()).toHaveTextContent("Apply (1)"),await r.click(v(/^Stage/,"Stage")),await t.findByRole("option",{name:/^Open/}),await r.keyboard(" "),await r.keyboard("{Escape}"),await h(()=>s(g("Stage is any of Open, In progress, Closed")).toBe(!0));const S=async()=>{await r.click(d()),await r.type(d(),"entered"),await r.keyboard("{Enter}"),await h(()=>s(n(/^Entered On/)).toHaveAttribute("data-state","editing"))};await S(),s(l().filter(B=>{var k;return(k=B.getAttribute("aria-label"))==null?void 0:k.startsWith("Entered On")})).toHaveLength(1),await r.click(v(/^Entered On/,"is between")),await r.click(await t.findByRole("option",{name:/^is on or after/})),await h(()=>s(g("Entered On is on or after Sep 1, 2026")).toBe(!0)),await S(),await r.keyboard("9/15"),await t.findByRole("option",{name:/^Sep 15, 2026/}),await r.keyboard("{Enter}"),await h(()=>s(g("Entered On is on or after Sep 15, 2026")).toBe(!0)),await r.click(d()),await r.type(d(),"prio"),await r.keyboard("{Enter}"),await t.findByRole("option",{name:/^High/}),await r.keyboard("{Enter}"),await h(()=>s(g("Priority is High")).toBe(!0)),s(u()).toHaveTextContent("Apply (3)"),await r.click(u()),await h(()=>s(u()).toBeNull()),s(E()).toHaveTextContent("Priority is High"),await r.click(d()),await r.keyboard("{Escape}{Backspace}{Backspace}"),await h(()=>s(E()).not.toHaveTextContent("Priority")),s(u()).toBeNull(),await r.click(v(/^Stage/,"Stage")),await r.click(await t.findByRole("option",{name:/^Waiting on customer/})),await r.keyboard("{Enter}"),await h(()=>s(u()).toHaveTextContent("Apply (1)")),await r.keyboard("{Escape}"),await h(()=>s(u()).toBeNull()),await r.click(await o.findByRole("button",{name:"Undo",hidden:!0})),await h(()=>s(u()).toHaveTextContent("Apply (1)")),await r.click(d()),await r.type(d(),"hinge"),await r.keyboard("{Tab}"),await h(()=>s(g("Search contains “hinge”")).toBe(!0)),await r.click(d()),await r.type(d(),"part"),await r.keyboard("{Enter}"),await t.findByText("Type a part number or text"),await r.keyboard("kit-6001"),await r.click(await t.findByRole("option",{name:/^KIT-6001/})),await r.keyboard("water damage"),await r.click(await t.findByRole("option",{name:/^contains “water damage”/})),await r.keyboard("{Enter}"),await r.keyboard("{Enter}"),await h(()=>s(E()).toHaveTextContent("Part is KIT-6001 or contains “water damage”")),await r.click(v(/^Stage/,"Stage"));for(const B of["Open","In progress","Waiting on customer","Closed"])await r.click(await t.findByRole("option",{name:new RegExp(`^${B}`)}));await r.keyboard("{Enter}"),await h(()=>s(E()).not.toHaveTextContent("Stage")),s(l().some(B=>{var k;return(k=B.getAttribute("aria-label"))==null?void 0:k.startsWith("Stage")})).toBe(!1),s(u()).toBeNull(),await o.findByText("The results match the applied filters.",{},{timeout:3e3}),await r.click(d()),await r.type(d(),"part"),await r.keyboard("{Enter}"),await r.keyboard("hng"),await t.findByRole("option",{name:/HNG-1001/})}},Nn=["Default","Empty","Overflow","Focused","Disabled","Shortcut","BackspaceRemoves","EditingInPlace","TranslatedLabels","ExAddAFilter","ExFilterBarWithApply"];var Xe,Qe,Ze;ve.parameters={...ve.parameters,docs:{...(Xe=ve.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
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
}`,...(Ze=(Qe=ve.parameters)==null?void 0:Qe.docs)==null?void 0:Ze.source}}};var et,tt,nt;fe.parameters={...fe.parameters,docs:{...(et=fe.parameters)==null?void 0:et.docs,source:{originalSource:`{
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
}`,...(nt=(tt=fe.parameters)==null?void 0:tt.docs)==null?void 0:nt.source}}};var at,ot,it;we.parameters={...we.parameters,docs:{...(at=we.parameters)==null?void 0:at.docs,source:{originalSource:`{
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
}`,...(it=(ot=we.parameters)==null?void 0:ot.docs)==null?void 0:it.source}}};var st,rt,lt;ge.parameters={...ge.parameters,docs:{...(st=ge.parameters)==null?void 0:st.docs,source:{originalSource:`{
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
}`,...(lt=(rt=ge.parameters)==null?void 0:rt.docs)==null?void 0:lt.source}}};var ct,ut,dt;be.parameters={...be.parameters,docs:{...(ct=be.parameters)==null?void 0:ct.docs,source:{originalSource:`{
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
}`,...(dt=(ut=be.parameters)==null?void 0:ut.docs)==null?void 0:dt.source}}};var pt,mt,ht;ke.parameters={...ke.parameters,docs:{...(pt=ke.parameters)==null?void 0:pt.docs,source:{originalSource:`{
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
}`,...(ht=(mt=ke.parameters)==null?void 0:mt.docs)==null?void 0:ht.source}}};var yt,vt,ft;xe.parameters={...xe.parameters,docs:{...(yt=xe.parameters)==null?void 0:yt.docs,source:{originalSource:`{
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
}`,...(ft=(vt=xe.parameters)==null?void 0:vt.docs)==null?void 0:ft.source}}};var wt,gt,bt;Ee.parameters={...Ee.parameters,docs:{...(wt=Ee.parameters)==null?void 0:wt.docs,source:{originalSource:`{
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
}`,...(Et=(xt=Be.parameters)==null?void 0:xt.docs)==null?void 0:Et.source}}};var Bt,Tt,Rt;Te.parameters={...Te.parameters,docs:{...(Bt=Te.parameters)==null?void 0:Bt.docs,source:{originalSource:`{
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
}`,...(Rt=(Tt=Te.parameters)==null?void 0:Tt.docs)==null?void 0:Rt.source}}};var Ft,At,St;Re.parameters={...Re.parameters,docs:{...(Ft=Re.parameters)==null?void 0:Ft.docs,source:{originalSource:`{
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
}`,...(St=(At=Re.parameters)==null?void 0:At.docs)==null?void 0:St.source}}};export{xe as BackspaceRemoves,ve as Default,be as Disabled,Ee as EditingInPlace,fe as Empty,Te as ExAddAFilter,Re as ExFilterBarWithApply,ge as Focused,we as Overflow,ke as Shortcut,Be as TranslatedLabels,Nn as __namedExportsOrder,$n as default};
