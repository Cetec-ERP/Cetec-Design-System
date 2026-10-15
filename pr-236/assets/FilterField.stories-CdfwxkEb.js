import{m as nt,e as at,f as ot,g as st,h as rt,s as it,r as d,Y as lt,j as l,B as I,c as pe,d as ct,a as ut,V as z,T as dt}from"./iframe-Cp37vy7q.js";import{L as pt}from"./LocaleProvider-UQkFA0Ly.js";import{u as mt}from"./useLocale-Cm9MxLfc.js";import{B as We}from"./Button--8LQjx1f.js";import{u as yt,F as ht}from"./FilterMenu-CJpUeoW1.js";import{F as vt}from"./FilterToken-SFeKyfxS.js";import{I as gt}from"./IconButton-4ngqRhYK.js";import{K as ft}from"./Kbd-DB7HCQmw.js";import{u as bt}from"./useOverflowItems-JAWnJSJH.js";import"./preload-helper-COnIJuB2.js";import"./Spinner-DsTCp9Q9.js";import"./FieldContext-Cykm4_pQ.js";import"./ListItem-Dm2j33sK.js";import"./HighlightText-BImBfsr2.js";import"./Checkbox-CKvXu5cc.js";import"./Divider-BwTHQQtG.js";import"./Toggle-kAn2e-vd.js";import"./ListItemGroup-MgQu79w6.js";import"./FloatingLayerContext-Brao90-J.js";const ze={},wt=[],xt=[["root","filterField__root"],["icon","filterField__icon"],["values","filterField__values"],["sizer","filterField__sizer"],["token","filterField__token"],["input","filterField__input"],["more","filterField__more"],["shortcut","filterField__shortcut"],["clear","filterField__clear"]],kt=xt.map(([t,e])=>[t,st(e,ze,rt(wt,t))]),Bt=nt((t={})=>Object.fromEntries(kt.map(([e,a])=>[e,a.recipeFn(t)]))),me=[],Ft=t=>({...ze,...at(t)}),Rt=Object.assign(Bt,{__recipe__:!1,__name__:"filterField",raw:t=>t,classNameMap:{},variantKeys:me,variantMap:{},splitVariantProps(t){return ot(t,me)},getVariantProps:Ft}),Et=96,Tt=t=>t instanceof HTMLElement&&!!t.closest('input, textarea, select, [contenteditable=""], [contenteditable="true"]'),S=t=>{const{tokens:e,inputValue:a,onInputChange:i,inputProps:s,inputRef:w,placeholder:k,editingKey:x=null,onMoreClick:R,moreOpen:y,onClearAll:f,clearLabel:E,shortcut:B,disabled:m,...C}=t,[V,Q]=it(C),h=Rt(),{labels:r}=mt(),[b,v]=d.useState(null),[Y,te]=d.useState(!1),ne=d.useRef(null),ae=d.useRef(null),oe=d.useRef(null),H=d.useRef(null),U=d.useRef(new Map),G=d.useRef(!1),Ye=d.useCallback(n=>{if(n){H.current=n,G.current&&(G.current=!1,n.focus());return}H.current&&H.current===H.current.ownerDocument.activeElement&&(G.current=!0)},[]),Ue=lt([Ye,w]),T=d.useCallback(()=>{var n;return(n=H.current)==null?void 0:n.focus()},[]),se=e.filter(n=>n.onRemove&&n.state!=="removing"),F=se[se.length-1],J=b!==null&&(F==null?void 0:F.key)===b?b:null,re=e.map(n=>n.key),Ge=d.useCallback(n=>U.current.get(n)??null,[]),{visible:Je,overflow:Xe}=bt({items:re,containerRef:ae,getItemElement:Ge,activeItem:x??J,reserve:Et,reserveRef:oe}),ie=Xe.filter(n=>re.includes(n)),X=e.filter(n=>ie.includes(n.key)),le=new Set(Je);d.useEffect(()=>{if(!B||m)return;const n=u=>{u.key!==B||u.metaKey||u.ctrlKey||u.altKey||u.defaultPrevented||Tt(u.target)||(u.preventDefault(),T())};return document.addEventListener("keydown",n),()=>document.removeEventListener("keydown",n)},[B,m,T]);const Ze=n=>{var u,A;if((u=s==null?void 0:s.onKeyDown)==null||u.call(s,n),!n.defaultPrevented){if(n.key!=="Backspace"){v(null);return}a!==""||x!==null||!F||(n.preventDefault(),J===F.key?(v(null),(A=F.onRemove)==null||A.call(F)):v(F.key))}},L=n=>n&&((...u)=>{T(),n(...u)}),ce=n=>l.jsx("input",{type:"text",autoComplete:"off",spellCheck:!1,"aria-label":r.filterOrSearch,"aria-keyshortcuts":B,...s,ref:Ue,className:pe(h.input,s==null?void 0:s.className),"data-inline":n||void 0,size:n?Math.max(a.length,1):void 0,value:a,placeholder:n?void 0:k,disabled:m,onChange:u=>{v(null),i(u.target.value)},onKeyDown:Ze}),et=x!==null&&le.has(x),ue=!!f&&!m&&(e.length>0||a!=="");return l.jsxs(I,{...ct("FilterField"),ref:ne,className:pe(h.root,V),"data-disabled":m||void 0,"data-has-clear":ue||void 0,onFocusCapture:()=>te(!0),onBlurCapture:n=>{var u;(u=ne.current)!=null&&u.contains(n.relatedTarget)||(te(!1),v(null))},onMouseDown:n=>{m||n.target!==n.currentTarget||(n.preventDefault(),T())},...Q,children:[l.jsx(ut,{name:"search",size:"20",fill:m?"icon.disabled":"icon.subtle",className:h.icon,"aria-hidden":!0}),l.jsxs(I,{className:h.values,onMouseDown:n=>{m||n.target!==n.currentTarget||(n.preventDefault(),T())},children:[l.jsx(I,{ref:ae,className:h.sizer,"aria-hidden":!0}),e.map(({key:n,...u})=>{const A=!le.has(n),tt=n===x&&!A;return l.jsx(I,{as:"span",ref:de=>{de?U.current.set(n,de):U.current.delete(n)},className:h.token,"data-overflowed":A||void 0,inert:A||void 0,children:l.jsx(vt,{...u,state:n===J?"armed":u.state,disabled:m,retainFocus:!0,editor:tt?ce(!0):void 0,onFieldClick:L(u.onFieldClick),onOperatorClick:L(u.onOperatorClick),onValueClick:L(u.onValueClick),onRemove:L(u.onRemove)})},n)}),X.length>0&&l.jsx(We,{ref:oe,size:"sm",variant:"hollow",iconAfter:"caret-down",className:h.more,disabled:m,"aria-expanded":R?!!y:void 0,"data-open":y||void 0,"data-pending":X.some(n=>n.state==="pending"||n.state==="removing")||void 0,onMouseDown:n=>n.preventDefault(),onClick:n=>{T(),R==null||R(ie,n.currentTarget)},children:r.moreFilters(X.length)}),!et&&ce(!1)]}),B&&!Y&&!m&&l.jsx(ft,{keys:[B],className:h.shortcut}),ue&&l.jsx(gt,{variant:"ghost",size:"sm",iconName:"x",altText:E??r.clearFilters,className:h.clear,onMouseDown:n=>n.preventDefault(),onClick:()=>{v(null),T(),f==null||f()}})]})};S.__docgenInfo={description:`The filter bar's field: the applied filters as tokens, followed by one
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
the field does not have focus.`},disabled:{required:!1,tsType:{name:"boolean"},description:"Disables the input, the tokens and the buttons."}}};const{expect:o,fn:Z,userEvent:c,waitFor:p,within:g}=__STORYBOOK_MODULE_TEST__,ee=[{id:"resolution",field:"Resolution",operator:"is",value:"All open",locked:!0},{id:"stage",field:"Stage",operator:"is any of",value:["Open","In progress"]},{id:"entered",field:"Entered On",operator:"is on or after",value:"Sep 1, 2026"}],Qe=[...ee,{id:"assigned",field:"Assigned To",operator:"is any of",value:["Brent Barton","David Atkins"],state:"pending"},{id:"type",field:"Case Type",operator:"is",value:"Warranty"},{id:"customer",field:"Customer",operator:"is",value:"Acme Corp"}],D=({initial:t=ee,width:e="full",shortcut:a="/",...i})=>{const[s,w]=d.useState(t),[k,x]=d.useState(""),R=y=>w(f=>f.filter(E=>E.id!==y));return l.jsxs(z,{alignItems:"start",gap:"12",children:[l.jsx(S,{w:e,tokens:s.map(y=>({key:y.id,field:y.field,operator:y.operator,value:y.value,state:y.state,operatorLocked:y.locked,onRemove:()=>R(y.id)})),inputValue:k,onInputChange:x,placeholder:"Filter or search…",shortcut:a,onClearAll:()=>{w([]),x("")},...i}),l.jsx(We,{size:"sm",variant:"ghost",onClick:()=>w(t),children:"Reset"})]})},Gt={title:"Components/FilterField",component:S,parameters:{layout:"padded"},args:{tokens:[],inputValue:"",onInputChange:Z(),onClearAll:Z(),onMoreClick:Z(),shortcut:"/"},render:t=>l.jsx(D,{shortcut:t.shortcut,disabled:t.disabled,onMoreClick:t.onMoreClick})},M={play:async({canvasElement:t})=>{const e=g(t),a=e.getByRole("textbox",{name:"Filter or search"});o(e.getByRole("group",{name:"Stage is any of Open, In progress"})).toBeVisible(),o(a).toHaveAttribute("aria-keyshortcuts","/"),await c.click(a),await c.type(a,"acme"),o(a).toHaveValue("acme"),await c.click(e.getByRole("button",{name:"Clear all filters"})),await p(()=>o(e.queryAllByRole("group")).toHaveLength(0)),o(a).toHaveValue(""),o(a).toHaveFocus(),await c.click(e.getByRole("button",{name:"Reset"})),await p(()=>o(e.getAllByRole("group")).toHaveLength(3))}},_={render:t=>l.jsx(D,{initial:[],shortcut:t.shortcut}),play:async({canvasElement:t})=>{const e=g(t);o(e.queryByRole("button",{name:"Clear all filters"})).not.toBeInTheDocument(),o(e.getByText("/")).toBeVisible(),o(e.getByRole("textbox",{name:"Filter or search"})).toHaveAttribute("placeholder","Filter or search…")}},Ct=t=>t.mock.calls[0],O={render:t=>l.jsx(D,{initial:Qe,width:"2xl",onMoreClick:t.onMoreClick}),play:async({args:t,canvasElement:e})=>{const a=g(e),i=await a.findByRole("button",{name:/^\+\d more$/});o(i).toHaveAttribute("data-pending"),o(a.getByRole("group",{name:"Resolution is All open"})).toBeVisible(),o(a.queryByRole("group",{name:"Customer is Acme Corp"})).not.toBeInTheDocument(),await c.click(i),o(t.onMoreClick).toHaveBeenCalledOnce();const[s,w]=Ct(t.onMoreClick);o(s).toContain("customer"),o(s).not.toContain("resolution"),o(w).toBe(i),a.getByRole("textbox",{name:"Filter or search"}).blur(),await p(()=>o(a.getByText("/")).toBeVisible())}},q={play:async({canvasElement:t})=>{const e=g(t),a=e.getByRole("textbox",{name:"Filter or search"});o(e.getByText("/")).toBeVisible(),await c.click(a),await p(()=>o(a).toHaveFocus()),o(e.queryByText("/")).not.toBeInTheDocument(),await c.type(a,"acme"),a.blur(),await p(()=>o(e.getByText("/")).toBeVisible()),await c.clear(a),a.blur()}},j={args:{disabled:!0},play:async({canvasElement:t})=>{const e=g(t);o(e.getByRole("textbox",{name:"Filter or search"})).toBeDisabled(),o(e.getByRole("button",{name:/^Remove filter: Stage/})).toBeDisabled(),o(e.queryByRole("button",{name:"Clear all filters"})).not.toBeInTheDocument(),o(e.queryByText("/")).not.toBeInTheDocument()}},K={render:t=>l.jsxs(z,{alignItems:"start",gap:"12",children:[l.jsx(I,{as:"input","aria-label":"Notes",w:"xs",h:"32",px:"8",borderWidth:"1",borderStyle:"solid",borderColor:"border",borderRadius:"4",bg:"surface",color:"text"}),l.jsx(D,{shortcut:t.shortcut})]}),play:async({canvasElement:t})=>{const e=g(t),a=e.getByRole("textbox",{name:"Filter or search"}),i=e.getByRole("textbox",{name:"Notes"});await c.type(i,"a/b"),o(i).toHaveValue("a/b"),o(a).not.toHaveFocus(),i.blur(),await c.keyboard("/"),await p(()=>o(a).toHaveFocus()),o(a).toHaveValue(""),a.blur(),await p(()=>o(e.getByText("/")).toBeVisible())}},N={name:"Backspace removes",play:async({canvasElement:t})=>{const e=g(t),a=e.getByRole("textbox",{name:"Filter or search"}),i=()=>e.queryByRole("group",{name:"Entered On is on or after Sep 1, 2026"});await c.click(a),await c.type(a,"a{Backspace}"),o(i()).toHaveAttribute("data-state","applied"),await c.keyboard("{Backspace}"),await p(()=>o(i()).toHaveAttribute("data-state","armed")),await c.keyboard("{ArrowLeft}"),await p(()=>o(i()).toHaveAttribute("data-state","applied")),await c.keyboard("{Backspace}{Backspace}"),await p(()=>o(i()).not.toBeInTheDocument()),o(a).toHaveFocus(),await c.click(e.getByRole("button",{name:"Reset"})),await p(()=>o(i()).toBeVisible())}},At=()=>{const[t,e]=d.useState(null),[a,i]=d.useState("");return l.jsxs(z,{alignItems:"start",gap:"12",children:[l.jsx(S,{w:"full",tokens:ee.map(s=>({key:s.id,field:s.field,operator:s.operator,value:s.value,state:s.id===t?"editing":"applied",operatorLocked:s.locked,onValueClick:()=>e(s.id)})),inputValue:a,onInputChange:i,inputProps:{onKeyDown:s=>{s.key==="Escape"&&e(null)}},placeholder:"Filter or search…",editingKey:t,shortcut:"/"}),l.jsx(dt,{textStyle:"body.sm",color:"text.subtlest",children:"Click a value to edit it in place. Esc ends the edit."})]})},P={render:()=>l.jsx(At,{}),play:async({canvasElement:t})=>{const e=g(t),a=()=>e.getByRole("group",{name:"Stage is any of Open, In progress"});await c.click(e.getByRole("button",{name:"Open, In progress"})),await p(()=>o(a()).toHaveAttribute("data-state","editing"));const i=g(a()).getByRole("textbox",{name:"Filter or search"});await p(()=>o(i).toHaveFocus()),await c.type(i,"Wai"),o(i).toHaveValue("Wai"),await c.keyboard("{Escape}"),await p(()=>o(a()).toHaveAttribute("data-state","applied"));const s=e.getByRole("textbox",{name:"Filter or search"});o(g(a()).queryByRole("textbox")).not.toBeInTheDocument(),await p(()=>o(s).toHaveFocus()),await c.clear(s),await c.click(e.getByRole("button",{name:"Open, In progress"})),await p(()=>o(a()).toHaveAttribute("data-state","editing"))}},$={render:()=>l.jsx(pt,{labels:{filterOrSearch:"Filtrar o buscar",clearFilters:"Quitar todos los filtros",moreFilters:t=>`+${t} más`},children:l.jsx(D,{initial:Qe,width:"2xl"})}),play:async({canvasElement:t})=>{const e=g(t);o(e.getByRole("textbox",{name:"Filtrar o buscar"})).toBeVisible(),o(e.getByRole("button",{name:"Quitar todos los filtros"})).toBeVisible(),o(await e.findByRole("button",{name:/^\+\d más$/})).toBeVisible()}},ye={Stage:["Open","In progress","Waiting on customer","Closed"],"Case Type":["Warranty","Repair","Question"],Priority:["High","Medium","Low"]},Ht=()=>{const[t,e]=d.useState([]),[a,i]=d.useState(""),[s,w]=d.useState({type:"closed"}),[k,x]=d.useState(null),[R,y]=d.useState(null),f=t.find(r=>r.id===k),E=f&&Array.isArray(f.value)?f.value:[],B=a.trim().toLowerCase(),m=[];if(s.type==="fields"){m.push({type:"group",label:"Fields"});for(const r of Object.keys(ye))r.toLowerCase().includes(B)&&m.push({type:"item",key:r,label:r,detail:"list"})}else if(s.type==="values"&&f){m.push({type:"group",label:`${f.field} is any of`});for(const r of ye[f.field]??[])r.toLowerCase().includes(B)&&m.push({type:"item",key:r,label:r,checked:E.includes(r)})}B&&!m.some(r=>r.type==="item")&&m.push({type:"empty",label:`No match for “${a}”`});const C=()=>{e(r=>r.filter(b=>b.id!==k||b.value.length>0)),x(null),w({type:"closed"}),i("")},V=r=>{x(r),w({type:"values"}),i("")},Q=r=>{if(s.type==="fields"){const b=`${r}-${t.length}`;e(v=>[...v,{id:b,field:r,operator:"is any of",value:[]}]),V(b);return}e(b=>b.map(v=>v.id===k?{...v,value:E.includes(r)?E.filter(Y=>Y!==r):[...E,r]}:v)),i("")},h=yt({rows:m,open:s.type!=="closed",onSelect:Q,onClose:C,spaceSelects:s.type==="values"&&a===""});return l.jsxs(z,{alignItems:"start",gap:"12",minH:"sm",children:[l.jsx(S,{w:"full",tokens:t.map(r=>({key:r.id,field:r.field,operator:r.operator,value:r.value,state:r.id===k?"editing":"applied",onValueClick:()=>V(r.id),onRemove:()=>{r.id===k&&C(),e(b=>b.filter(v=>v.id!==r.id))}})),inputValue:a,onInputChange:r=>{i(r),h.setActiveKey(null),s.type==="closed"&&w({type:"fields"})},inputRef:y,inputProps:{...h.inputProps,onFocus:()=>{s.type==="closed"&&w({type:"fields"})},onKeyDown:r=>{if(r.key==="Enter"&&s.type==="values"&&!a){r.preventDefault(),C();return}h.inputProps.onKeyDown(r)}},placeholder:"Filter or search…",editingKey:k,shortcut:"/",onClearAll:()=>{e([]),C()}}),l.jsx(ht,{...h.menuProps,anchor:R,"aria-label":s.type==="values"?"Values":"Fields",query:a,footer:s.type==="values"?"Space toggles · Enter done · Esc done":"Type a field · Enter picks"})]})},W={name:"Ex: Add a filter",render:()=>l.jsx(Ht,{}),play:async({canvasElement:t})=>{const e=g(t),a=g(t.ownerDocument.body),i=()=>e.getByRole("combobox",{name:"Filter or search"});await c.click(i()),await c.type(i(),"sta"),await a.findByRole("option",{name:/^Stage/}),await c.keyboard("{Enter}");const s=()=>e.getByRole("group",{name:/^Stage/,hidden:!0});await p(()=>o(s()).toHaveAttribute("data-state","editing")),await p(()=>o(g(s()).getByRole("combobox",{hidden:!0})).toHaveFocus()),await a.findByRole("option",{name:/^Open/}),await c.keyboard(" {ArrowDown} "),await p(()=>o(s()).toHaveAccessibleName("Stage is any of Open, In progress")),await c.keyboard("{Enter}"),await p(()=>o(s()).toHaveAttribute("data-state","applied")),await p(()=>o(i()).toHaveFocus()),await c.type(i(),"p"),await a.findByRole("option",{name:/^Priority/})}},Jt=["Default","Empty","Overflow","Focused","Disabled","Shortcut","BackspaceRemoves","EditingInPlace","TranslatedLabels","ExAddAFilter"];var he,ve,ge;M.parameters={...M.parameters,docs:{...(he=M.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(ge=(ve=M.parameters)==null?void 0:ve.docs)==null?void 0:ge.source}}};var fe,be,we;_.parameters={..._.parameters,docs:{...(fe=_.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(we=(be=_.parameters)==null?void 0:be.docs)==null?void 0:we.source}}};var xe,ke,Be;O.parameters={...O.parameters,docs:{...(xe=O.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(Be=(ke=O.parameters)==null?void 0:ke.docs)==null?void 0:Be.source}}};var Fe,Re,Ee;q.parameters={...q.parameters,docs:{...(Fe=q.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(Ee=(Re=q.parameters)==null?void 0:Re.docs)==null?void 0:Ee.source}}};var Te,Ce,Ae;j.parameters={...j.parameters,docs:{...(Te=j.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(Ae=(Ce=j.parameters)==null?void 0:Ce.docs)==null?void 0:Ae.source}}};var He,Ie,Se;K.parameters={...K.parameters,docs:{...(He=K.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
}`,...(Se=(Ie=K.parameters)==null?void 0:Ie.docs)==null?void 0:Se.source}}};var De,Ve,Le;N.parameters={...N.parameters,docs:{...(De=N.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
}`,...(Le=(Ve=N.parameters)==null?void 0:Ve.docs)==null?void 0:Le.source}}};var Me,_e,Oe;P.parameters={...P.parameters,docs:{...(Me=P.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
}`,...(Oe=(_e=P.parameters)==null?void 0:_e.docs)==null?void 0:Oe.source}}};var qe,je,Ke;$.parameters={...$.parameters,docs:{...(qe=$.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...(Ke=(je=$.parameters)==null?void 0:je.docs)==null?void 0:Ke.source}}};var Ne,Pe,$e;W.parameters={...W.parameters,docs:{...(Ne=W.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
}`,...($e=(Pe=W.parameters)==null?void 0:Pe.docs)==null?void 0:$e.source}}};export{N as BackspaceRemoves,M as Default,j as Disabled,P as EditingInPlace,_ as Empty,W as ExAddAFilter,q as Focused,O as Overflow,K as Shortcut,$ as TranslatedLabels,Jt as __namedExportsOrder,Gt as default};
