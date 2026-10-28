import{m as j,e as E,f as C,g as P,h as T,r as k,s as D,Z as N,$ as K,a0 as L,j as o,a1 as A,a2 as V,a3 as $,B as x,c as O,d as B,a as U}from"./iframe-dpBk5fLH.js";import{L as H,a as G}from"./ListItem-EwVbeHyo.js";import{L as Z}from"./ListItemGroup-CzN-diIS.js";import"./HighlightText-Cq4Yh34-.js";import{u as z}from"./FloatingLayerContext-6lsDgKw-.js";const R={layer:"elevated"},J=[],Q=[["root","filterMenu__root"],["listbox","filterMenu__listbox"],["checkbox","filterMenu__checkbox"],["before","filterMenu__before"],["empty","filterMenu__empty"],["footer","filterMenu__footer"]],W=Q.map(([t,n])=>[t,P(n,R,T(J,t))]),X=j((t={})=>Object.fromEntries(W.map(([n,a])=>[n,a.recipeFn(t)]))),I=["layer"],Y=t=>({...R,...E(t)}),ee=Object.assign(X,{__recipe__:!1,__name__:"filterMenu",raw:t=>t,classNameMap:{},variantKeys:I,variantMap:{layer:["elevated","modalFloating"]},splitVariantProps(t){return C(t,I)},getVariantProps:Y}),F=(t,n)=>`${t}-option-${encodeURIComponent(n)}`,te=t=>t.type==="item"&&!t.disabled,ce=t=>{var c;const{rows:n,open:a,onSelect:p,onClose:h,spaceSelects:w=!1,id:u}=t,f=k.useId(),b=u??`filter-menu-${f.replace(/:/g,"")}`,[y,m]=k.useState(null),l=n.filter(te),i=l.some(r=>r.key===y)?y:((c=l[0])==null?void 0:c.key)??null,g=r=>{if(l.length===0)return;const S=(l.findIndex(q=>q.key===i)+r+l.length)%l.length;m(l[S].key)},M=r=>{if(a&&!(r.nativeEvent.isComposing||r.keyCode===229))switch(r.key){case"ArrowDown":r.preventDefault(),g(1);break;case"ArrowUp":r.preventDefault(),g(-1);break;case"Enter":if(i===null)return;r.preventDefault(),p(i);break;case" ":if(!w||i===null)return;r.preventDefault(),p(i);break;case"Escape":r.preventDefault(),h();break}};return{activeKey:i,setActiveKey:m,inputProps:{role:"combobox","aria-expanded":a,"aria-controls":a?b:void 0,"aria-autocomplete":"list","aria-activedescendant":a&&i!==null?F(b,i):void 0,onKeyDown:M},menuProps:{id:b,open:a,rows:n,activeKey:i,onActiveKeyChange:m,onSelect:p}}},ne=t=>{const n=[{rows:[]}];for(const a of t)a.type==="group"?n.push({label:a.label,rows:[]}):n[n.length-1].rows.push(a);return n.filter(a=>a.label!==void 0||a.rows.length>0)},ae=t=>{const{open:n,anchor:a,rows:p,id:h,"aria-label":w,activeKey:u,onActiveKeyChange:f,onSelect:b,query:y,footer:m,...l}=t,[i,g]=D(l),M=z(),c=ee({layer:M}),r=k.useRef(null),d=N({open:n,onOpenChange:()=>{},middleware:K({extras:[L()]})});if(k.useLayoutEffect(()=>{d.refs.setReference(a)},[a,d.refs]),k.useEffect(()=>{var s,v;if(!n||u==null)return;const e=(s=r.current)==null?void 0:s.querySelector(`#${CSS.escape(F(h,u))}`);(v=e==null?void 0:e.scrollIntoView)==null||v.call(e,{block:"nearest"})},[n,u,h]),!n||!a)return null;const S=e=>{const s=e.checked!==void 0&&o.jsx(U,{name:e.checked?"checkbox-checked":"checkbox",fill:e.checked?"icon":"icon.subtlest",className:c.checkbox,"aria-hidden":!0});return s?e.before===void 0?s:o.jsxs(x,{as:"span",className:c.before,children:[s,e.before]}):e.before},q=e=>o.jsx(G,{id:F(h,e.key),label:e.label,description:e.description,before:S(e),after:e.detail,selected:e.checked??e.selected??!1,disabled:e.disabled,tabIndex:-1,bg:e.key===u?"bg.neutral.hovered":void 0,"data-active":e.key===u||void 0,onMouseDown:s=>s.preventDefault(),onMouseMove:()=>{!e.disabled&&e.key!==u&&(f==null||f(e.key))},onClick:()=>{e.disabled||b(e.key)}},e.key),_=e=>e.map((s,v)=>s.type==="item"?q(s):o.jsx(x,{role:"status",className:c.empty,children:s.label},`empty-${v}`));return o.jsx(A,{children:o.jsx(V,{reference:d.elements.domReference,children:o.jsx($,{context:d.context,modal:!1,initialFocus:-1,returnFocus:!1,children:o.jsxs(x,{...B("FilterMenu"),ref:d.refs.setFloating,style:d.floatingStyles,className:O(c.root,i),onMouseDown:e=>e.preventDefault(),...g,children:[o.jsx(H,{ref:r,id:h,role:"listbox","aria-label":w,"aria-multiselectable":p.some(e=>e.type==="item"&&e.checked!==void 0)||void 0,density:"compact",query:y,highlightMatches:!!y,className:c.listbox,children:ne(p).map((e,s)=>e.label===void 0?_(e.rows):o.jsx(Z,{label:e.label,role:"group","aria-label":e.label,children:_(e.rows)},`${e.label}-${s}`))}),m&&o.jsx(x,{className:c.footer,children:m})]})})})})};ae.__docgenInfo={description:`The popup list of a filter field: grouped rows, checkboxes for multi-pick
lists, end-of-row detail, an empty line and a hint footer.

Focus stays in the owner's input, as in a combobox, so the menu never
takes focus. Pair it with {@link useFilterMenu}, which adds the input's
ARIA attributes and the arrow, Enter, Space and Esc keys. Use \`Menu\` for
an action menu that takes focus, and \`Autocomplete\` for a form field.

Renders a \`listbox\` in a portal, positioned under \`anchor\`.

@example
\`\`\`tsx
const menu = useFilterMenu({ rows, open, onSelect: pick, onClose: close });
<input ref={setInput} {...menu.inputProps} aria-label="Filter" />
<FilterMenu {...menu.menuProps} anchor={input} aria-label="Fields" />
\`\`\``,methods:[],displayName:"FilterMenu",props:{open:{required:!0,tsType:{name:"boolean"},description:"Shows the menu. The owner of the input decides when it opens and closes."},anchor:{required:!0,tsType:{name:"union",raw:"Element | null",elements:[{name:"Element"},{name:"null"}]},description:"Element the menu opens under, such as the filter input or a token.\nThe menu does not render while this is `null`."},rows:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:`| { type: 'group'; label: string }
| FilterMenuItemRow
| { type: 'empty'; label: string }`,elements:[{name:"signature",type:"object",raw:"{ type: 'group'; label: string }",signature:{properties:[{key:"type",value:{name:"literal",value:"'group'",required:!0}},{key:"label",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  type: 'item';
  /** Stable key, unique in the menu. Passed to \`onSelect\`. */
  key: string;
  /** Visible row text. Matches of the menu's \`query\` are highlighted. */
  label: string;
  /**
   * Content before the label, such as an avatar or a status dot. It comes
   * after the checkbox when the row has one.
   */
  before?: ReactNode;
  /** Second line of text under the label, such as a customer name. */
  description?: string;
  /**
   * Short text at the end of the row, such as "current", a count or a date
   * range. It does not wrap.
   */
  detail?: string;
  /**
   * Shows a checkbox for a multi-pick list. \`true\` checks it. Leave it
   * undefined for a single-pick row, which shows no checkbox.
   */
  checked?: boolean;
  /** Marks the current value of a single-pick list. Sets \`aria-selected\`. */
  selected?: boolean;
  /** Skips the row in keyboard moves and ignores clicks. */
  disabled?: boolean;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:"'item'",required:!0}},{key:"key",value:{name:"string",required:!0},description:"Stable key, unique in the menu. Passed to `onSelect`."},{key:"label",value:{name:"string",required:!0},description:"Visible row text. Matches of the menu's `query` are highlighted."},{key:"before",value:{name:"ReactNode",required:!1},description:`Content before the label, such as an avatar or a status dot. It comes
after the checkbox when the row has one.`},{key:"description",value:{name:"string",required:!1},description:"Second line of text under the label, such as a customer name."},{key:"detail",value:{name:"string",required:!1},description:`Short text at the end of the row, such as "current", a count or a date
range. It does not wrap.`},{key:"checked",value:{name:"boolean",required:!1},description:"Shows a checkbox for a multi-pick list. `true` checks it. Leave it\nundefined for a single-pick row, which shows no checkbox."},{key:"selected",value:{name:"boolean",required:!1},description:"Marks the current value of a single-pick list. Sets `aria-selected`."},{key:"disabled",value:{name:"boolean",required:!1},description:"Skips the row in keyboard moves and ignores clicks."}]}},{name:"signature",type:"object",raw:"{ type: 'empty'; label: string }",signature:{properties:[{key:"type",value:{name:"literal",value:"'empty'",required:!0}},{key:"label",value:{name:"string",required:!0}}]}}]}],raw:"FilterMenuRow[]"},description:"Rows to show, in order."},id:{required:!0,tsType:{name:"string"},description:"Listbox id. The input points to it with `aria-controls`."},"aria-label":{required:!0,tsType:{name:"string"},description:'Accessible name of the listbox, such as "Fields" or "Stage values".'},activeKey:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"Key of the highlighted row. Enter in the input picks this row."},onActiveKeyChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(key: string) => void",signature:{arguments:[{type:{name:"string"},name:"key"}],return:{name:"void"}}},description:"Runs when the pointer moves over a pickable row."},onSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(key: string) => void",signature:{arguments:[{type:{name:"string"},name:"key"}],return:{name:"void"}}},description:"Runs when a pickable row is clicked. Focus stays where it was."},query:{required:!1,tsType:{name:"string"},description:"Typed text. Matches in row labels and descriptions are highlighted."},footer:{required:!1,tsType:{name:"ReactNode"},description:'Hint line under the list, such as "Enter picks · Esc cancels".'}}};export{ae as F,ce as u};
