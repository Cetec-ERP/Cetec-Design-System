import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r}from"./index-BKyFwriW.js";import{w as I,e as h,u as V,a as ye}from"./index-L8OlCEhE.js";import{m as Vt,a as It,b as Ft,e as Wt,g as Lt,s as je,B as x,c as Re,d as St}from"./dsComponent-BG2jnRr7.js";import{B as fe}from"./Button-Cr4bC5CG.js";import{I as Nt}from"./Icon-CrwLKW7B.js";import"./IconConfig-BuieZFlx.js";import{T as m}from"./Text-CblSIDGb.js";import{u as _t,c as qt,C as Dt,k as zt,m as $t,b as Kt,d as Ut,g as Gt,o as Qt,F as Yt,D as Jt,E as Xt,G as Zt,t as ea}from"./Tooltip-DzKvNlPD.js";import{g as ta,s as Bt,M as aa,a as na}from"./SubMenu-C_LMetsH.js";import{B as sa}from"./Badge-DBgIjuLw.js";import{I as Pt}from"./IconButton-Dx9Rzbb-.js";import{u as ra}from"./useControllableState-ByGfjEIG.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Spinner-PLunUSsK.js";import"./FieldContext-D6URyQos.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";import"./HighlightText-DKF3xkQK.js";import"./menu-DMiDM6i6.js";import"./FloatingLayerContext-BryH8O9I.js";import"./ListItemGroup-BSVX0L8d.js";import"./Divider-Dbp7vcYx.js";import"./Checkbox-BKc0omfg.js";import"./Toggle-mlz1wkXL.js";const Et={hasOverflow:!1},oa=[],la=[["root","tabs__root"],["strip","tabs__strip"],["list","tabs__list"],["tab","tabs__tab"],["badge","tabs__badge"],["overflow","tabs__overflow"],["menu","tabs__menu"],["panel","tabs__panel"]],ia=la.map(([t,a])=>[t,Wt(a,Et,Lt(oa,t))]),ca=Vt((t={})=>Object.fromEntries(ia.map(([a,n])=>[a,n.recipeFn(t)]))),Pe=["hasOverflow","overflowed"],da=t=>({...Et,...It(t)}),Ct=Object.assign(ca,{__recipe__:!1,__name__:"tabs",raw:t=>t,classNameMap:{},variantKeys:Pe,variantMap:{hasOverflow:["false","true"],overflowed:["true"]},splitVariantProps(t){return Ft(t,Pe)},getVariantProps:da}),ua=32,Z=(t,a)=>t.length===a.length&&t.every((n,s)=>n===a[s]),ba=(t,a,n)=>{for(const s of a)n.has(s)||t==null||t.unobserve(s);for(const s of n)a.has(s)||t==null||t.observe(s);return n},pa=({items:t,containerRef:a,getItemElement:n,activeItem:s=null,reserve:l=ua,reserveRef:u,enabled:v=!0})=>{const[g,T]=r.useState(()=>[...t]),[w,A]=r.useState([]),[C,F]=r.useState(null),y=r.useRef(null),E=r.useRef(t),H=r.useRef(s),M=r.useRef(C),D=r.useRef(l),W=r.useRef(null),L=r.useRef(v),B=r.useRef(null),N=r.useRef(new Set),j=r.useRef(null),O=r.useCallback(()=>{var X;const p=a.current,d=E.current;if(!L.current||!p){T(f=>Z(f,d)?f:[...d]),A(f=>f.length===0?f:[]);return}const c=globalThis.getComputedStyle(p),b=Number.parseFloat(c.paddingLeft||"0")+Number.parseFloat(c.paddingRight||"0"),R=Number.parseFloat(c.columnGap||"0")||0,_=p.clientWidth-b,q=d.map(f=>{var P;return((P=n(f))==null?void 0:P.offsetWidth)??Number.POSITIVE_INFINITY}),z=M.current??H.current,U=z===null?-1:d.indexOf(z),$=U===-1?0:U,we=d.map((f,P)=>P).sort((f,P)=>{const S=Math.abs(f-$)-Math.abs(P-$);return S===0?f-P:S}),Q=(f,P)=>{const S=new Set;let Te=0;f!==null&&(S.add(f),Te+=q[f]??0);for(const xe of we){if(S.has(xe))continue;const Be=(q[xe]??0)+(S.size>0?R:0);if(Te+Be>P)break;Te+=Be,S.add(xe)}return S};let G=Q(null,_);if(G.size<d.length){const f=((X=W.current)==null?void 0:X.offsetWidth)??D.current,P=_-f;G=Q(null,P),U!==-1&&!G.has(U)&&(G=Q(U,P))}const Y=[],J=[];d.forEach((f,P)=>{G.has(P)?Y.push(f):J.push(f)}),T(f=>Z(f,Y)?f:Y),A(f=>Z(f,J)?f:J)},[a,n]),K=r.useCallback((p,d)=>{if(E.current.includes(p)){if(!w.includes(p)){d==null||d();return}j.current={key:p,onVisible:d},F(p)}},[w]);return r.useLayoutEffect(()=>{const p=()=>{y.current!==null&&globalThis.cancelAnimationFrame(y.current),y.current=globalThis.requestAnimationFrame(()=>{y.current=null,O()})},d=typeof ResizeObserver>"u"?null:new ResizeObserver(p);return B.current=d,globalThis.addEventListener("resize",p),()=>{d==null||d.disconnect(),B.current=null,N.current.clear(),globalThis.removeEventListener("resize",p),y.current!==null&&(globalThis.cancelAnimationFrame(y.current),y.current=null)}},[O]),r.useLayoutEffect(()=>{Z(E.current,t)||(E.current=[...t]),H.current=s,M.current=C,D.current=l,W.current=(u==null?void 0:u.current)??null,L.current=v;const p=new Set,d=a.current;if(v&&d){p.add(d),W.current&&p.add(W.current);for(const c of E.current){const b=n(c);b&&p.add(b)}}N.current=ba(B.current,N.current,p),O()},[s,a,v,C,n,t,O,l,u]),r.useLayoutEffect(()=>{var d;const p=j.current;if(p){if(!E.current.includes(p.key)){j.current=null,F(null);return}w.includes(p.key)||(j.current=null,(d=p.onVisible)==null||d.call(p),F(null))}},[w]),{visible:g,overflow:w,hasOverflow:w.length>0,measure:O,ensureVisible:K}},At=r.createContext(null),ma=r.createContext(!0),ha=At.Provider,va=ma.Provider,Ht=()=>{const t=r.useContext(At);if(!t)throw new Error("Tabs compound components must be used within <Tabs />");return t},ge={tab:"Tab",panel:"TabPanel"},Se="__tabsComponentType",Mt=t=>ta(t,Se),Ot=t=>{const a=[],n=(s,l)=>{r.Children.toArray(s).forEach(u=>{if(r.isValidElement(u)&&u.type===r.Fragment){n(u.props.children,`${l}${String(u.key)}/`);return}a.push(l!==""&&r.isValidElement(u)?r.cloneElement(u,{key:`${l}${String(u.key)}`}):u)})};return n(t,""),a},fa=Ct({overflowed:!0}).tab,Ee=Xt({size:"md",hasTitle:!1}),o=t=>{const{value:a,children:n,label:s,badge:l,badgeTooltip:u,disabled:v=!1,onClick:g,onKeyDown:T,ref:w,...A}=t,{classes:C,getPanelId:F,getTabId:y,onTabKeyDown:E,overflowValues:H,registerTabElement:M,selectTab:D,selectedValue:W}=Ht(),L=W===a,B=H.includes(a),[N,j]=je(A),O=r.useCallback(S=>{M(a,S)},[M,a]),K=B?fa:C.tab,p=typeof l=="number"&&l!==0,d=p&&!!u&&!B,[c,b]=r.useState(!1),R=r.useRef(null),_=d&&c,{refs:q,elements:z,floatingStyles:U,context:$}=_t({open:_,onOpenChange:b,placement:"bottom",middleware:qt({offset:8,extras:[Dt({element:R})]})}),we=zt($,{enabled:d,move:!1}),Q=$t($,{enabled:d}),G=Kt($,{enabled:d}),Y=Ut($,{enabled:d,role:"tooltip"}),{getReferenceProps:J,getFloatingProps:X}=Gt([we,Q,G,Y]),f=Qt([O,q.setReference,w]),P=p?e.jsx(x,{ref:q.setPositionReference,className:C.badge,children:e.jsx(sa,{count:l,variant:"subtle"})}):null;return e.jsxs(e.Fragment,{children:[e.jsxs(x,{as:"button",type:"button",ref:f,id:y(a),role:"tab","aria-selected":L,"aria-controls":F(a),"aria-hidden":B||void 0,disabled:v,tabIndex:L&&!B?0:-1,className:Re(K,N),...J({...j,onClick:S=>{g==null||g(S),!(v||S.defaultPrevented)&&D(S,a,"clicked-on-tab")},onKeyDown:S=>{T==null||T(S),S.defaultPrevented||E(S)}}),children:[n,P]}),_?e.jsx(Yt,{children:e.jsx(Jt,{reference:z.domReference,children:e.jsxs(x,{...St("Tooltip"),ref:q.setFloating,style:U,className:Ee.tooltipContent,...X(),children:[e.jsx(x,{className:Ee.text,children:u}),e.jsx(Zt,{ref:R,context:$,fill:ea.var("colors.bg.neutral.inverse")})]})})}):null]})};Bt(o,Se,ge.tab);o.__docgenInfo={description:'Selects one panel inside a {@link Tabs} strip.\n\nRenders a `button` with `role="tab"`. Only the selected tab is in the tab\norder; Arrow, Home, and End move between the others. A tab that does not fit\nthe strip stays mounted but hidden so it can still be measured, and it is\noffered in the overflow menu instead. The menu row is plain text, so give\n`label` when `children` are not plain text.\n\n`badgeTooltip` opens on hover and on keyboard focus of the tab itself, points\nat the badge, and is linked to the tab with `aria-describedby` while open.\n\n@example\n```tsx\n<Tab value="materials" badge={3} badgeTooltip="2 Open Part Request">\n  Materials\n</Tab>\n```',methods:[],displayName:"Tab",props:{value:{required:!0,tsType:{name:"string"},description:"Identifies the tab and the `TabPanel` it controls. Must be unique within a `Tabs`."},children:{required:!1,tsType:{name:"ReactNode"},description:"Visible label rendered in the strip. Plain text is also reused as the overflow-menu row's text unless `label` overrides it."},label:{required:!1,tsType:{name:"string"},description:"Plain-text name for this tab's overflow-menu row, which cannot render\nmarkup. Set it when `children` contain more than text — an icon, a nested\nelement — because flattening those to a string reads badly. It never\nchanges what the strip renders: `children` still render there as-is.\nWithout it the menu row falls back to the flattened `children`, then to\n`value`."},badge:{required:!1,tsType:{name:"number"},description:"Count shown in a trailing {@link Badge}. A zero or omitted count renders no badge."},badgeTooltip:{required:!1,tsType:{name:"string"},description:"Tooltip text describing what the badge counts. Requires `badge`."},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents selection and skips the tab during arrow-key navigation."}}};const i=t=>{const{value:a,children:n,...s}=t,{classes:l,getPanelId:u,getTabId:v,selectedValue:g,unmountInactive:T}=Ht(),w=g===a,[A,C]=je(s);if(T&&!w)return null;const y=typeof n=="function"?n({isActive:w}):n;return e.jsx(va,{value:w,children:e.jsx(x,{id:u(a),role:"tabpanel","aria-labelledby":v(a),tabIndex:w?0:-1,display:w?"block":"none",className:Re(l.panel,A),...C,children:y})})};Bt(i,Se,ge.panel);i.__docgenInfo={description:'Renders the content for one {@link Tab}.\n\nThe panel stays mounted when another tab is selected and is hidden with\n`display: none`, which preserves scroll position and local state; set\n`unmountInactive` on `Tabs` to render only the selected panel instead. A\nfunction child receives `{ isActive }`, and descendants can call\n`useTabPanelActive()` for the same signal, so hidden panels can pause polling\nor animation.\n\n@example\n```tsx\n<TabPanel value="materials">\n  {({ isActive }) => <MaterialsGrid paused={!isActive} />}\n</TabPanel>\n```',methods:[],displayName:"TabPanel",props:{value:{required:!0,tsType:{name:"string"},description:"`value` of the {@link Tab} this panel belongs to."},children:{required:!1,tsType:{name:"union",raw:"ReactNode | ((props: TabPanelRenderProps) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:"Panel content. A function child receives `{ isActive }` so expensive work\ncan pause while the panel is mounted but hidden."}}};const ke=t=>t==null||typeof t=="boolean"?"":typeof t=="string"||typeof t=="number"?String(t):Array.isArray(t)?t.map(a=>ke(a)).join(""):r.isValidElement(t)?ke(t.props.children):"",ga=({children:t,value:a,defaultValue:n,onChange:s,listRef:l,overflowRef:u})=>{var d;const v=r.useMemo(()=>{const c=[];return Ot(t).forEach(b=>{if(!r.isValidElement(b)||Mt(b)!==ge.tab)return;const R=b.props;typeof R.value=="string"&&c.push({value:R.value,label:R.label||ke(R.children)||R.value,disabled:!!R.disabled,badge:R.badge,badgeTooltip:R.badgeTooltip})}),c},[t]),g=r.useMemo(()=>v.map(c=>c.value),[v]),T=((d=v.find(c=>!c.disabled))==null?void 0:d.value)??"",[w,A,C]=ra({value:a,defaultValue:n??T}),F=v.find(c=>c.value===w),y=!!(F&&!F.disabled),E=y?w:T,H=r.useRef(null);r.useEffect(()=>{if(y){H.current=null;return}const c=`${w}\0${T}`;H.current!==c&&(H.current=c,C||A(T),T!==""&&(s==null||s(null,T,"fallback-after-removal")))},[T,C,y,s,A,w]);const M=r.useRef(new Map),D=r.useCallback((c,b)=>{b?M.current.set(c,b):M.current.delete(c)},[]),W=r.useCallback(c=>M.current.get(c)??null,[]),{ensureVisible:L,overflow:B,hasOverflow:N}=pa({items:g,containerRef:l,getItemElement:W,activeItem:E||null,reserveRef:u}),j=r.useCallback((c,b,R)=>{b!==w&&(A(b),s==null||s(c,b,R))},[s,A,w]),O=r.useCallback(c=>{L(c,()=>{var b;(b=M.current.get(c))==null||b.focus()})},[L]),K=r.useCallback(c=>{const b=v.filter(z=>!z.disabled).map(z=>z.value);if(b.length===0)return;const R=Math.max(0,b.indexOf(E));let _;switch(c.key){case"ArrowRight":_=(R+1)%b.length;break;case"ArrowLeft":_=(R-1+b.length)%b.length;break;case"Home":_=0;break;case"End":_=b.length-1;break;default:return}c.preventDefault();const q=b[_];q!==void 0&&(j(c,q,"clicked-on-tab"),O(q))},[O,j,E,v]),p=r.useMemo(()=>B.map(c=>v.find(b=>b.value===c)).filter(c=>!!c),[B,v]);return{hasOverflow:N,focusTab:O,onTabKeyDown:K,overflowTabs:p,overflowValues:B,registerTabElement:D,selectTab:j,selectedValue:E,tabs:v}},wa=({className:t,focusTab:a,tabs:n,selectTab:s,selectedValue:l})=>{const[u,v]=r.useState(!1);return e.jsx(aa,{open:u,onOpenChange:v,placement:"bottom-end",className:t,trigger:e.jsx(Pt,{variant:"ghost",size:"md",iconName:u?"caret-up":"caret-down",altText:"More tabs","aria-haspopup":"menu"}),children:n.map(g=>{const T=typeof g.badge=="number"&&g.badge!==0;return e.jsx(na,{label:T?`${g.label} (${String(g.badge)})`:g.label,description:T?g.badgeTooltip:void 0,disabled:g.disabled,selected:g.value===l,role:"menuitemradio","aria-checked":g.value===l,onClick:w=>{s(w,g.value,"selected-from-overflow"),a(g.value),v(!1)}},g.value)})})},k=t=>{const{children:a,value:n,defaultValue:s,onChange:l,unmountInactive:u=!1,"aria-label":v,"aria-labelledby":g,...T}=t,[w,A]=je(T),C=r.useRef(null),F=r.useRef(null),y=r.useId(),{focusTab:E,hasOverflow:H,onTabKeyDown:M,overflowTabs:D,overflowValues:W,registerTabElement:L,selectTab:B,selectedValue:N}=ga({children:a,value:n,defaultValue:s,onChange:l,listRef:C,overflowRef:F}),j=r.useMemo(()=>Ct({hasOverflow:H}),[H]),[O,K]=r.useMemo(()=>{const d=[],c=[];return Ot(a).forEach(b=>{Mt(b)===ge.tab?d.push(b):c.push(b)}),[d,c]},[a]),p=r.useMemo(()=>({classes:j,getPanelId:d=>`${y}-panel-${d}`,getTabId:d=>`${y}-tab-${d}`,onTabKeyDown:M,overflowValues:W,registerTabElement:L,selectTab:B,selectedValue:N,unmountInactive:u}),[y,j,M,W,L,B,N,u]);return e.jsx(ha,{value:p,children:e.jsxs(x,{...St("Tabs"),className:Re(j.root,w),...A,children:[e.jsxs(x,{className:j.strip,children:[e.jsx(x,{ref:C,role:"tablist","aria-label":v,"aria-labelledby":g,"aria-orientation":"horizontal",className:j.list,children:O}),e.jsx(x,{ref:F,className:j.overflow,"aria-hidden":!H||void 0,children:H?e.jsx(wa,{className:j.menu,focusTab:E,tabs:D,selectTab:B,selectedValue:N}):e.jsx(Pt,{variant:"ghost",size:"md",iconName:"caret-down",altText:"More tabs",disabled:!0,tabIndex:-1})})]}),K]})})};k.__docgenInfo={description:'Groups related content into a single view with one panel visible at a time.\n\nCompose it from `Tab` and `TabPanel` children; the first enabled `Tab` is\nselected by default. Selection is uncontrolled with `defaultValue` or\ncontrolled with `value` plus `onChange`. Tabs that do not fit the available width move into\nan overflow menu at the end of the strip, and the selected tab always stays\nvisible. Every panel stays mounted and hidden unless `unmountInactive` is\nset, so read `useTabPanelActive()` to pause work in a hidden panel.\n\nThe strip renders a `tablist` with roving tabindex and Arrow, Home, and End\nnavigation. Supply `aria-label` or `aria-labelledby` so it is announced.\n\n@example\n```tsx\n<Tabs defaultValue="work" aria-label="Order sections">\n  <Tab value="work">Work</Tab>\n  <Tab value="materials" badge={3}>Materials</Tab>\n  <TabPanel value="work">Work content</TabPanel>\n  <TabPanel value="materials">Materials content</TabPanel>\n</Tabs>\n```',methods:[],displayName:"Tabs",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"`Tab` and `TabPanel` children. Tab order in the strip follows source order."},value:{required:!1,tsType:{name:"string"},description:"Controlled selected tab `value`. Pair with `onChange`; omit it to use `defaultValue`."},defaultValue:{required:!1,tsType:{name:"string"},description:"Initially selected tab `value` when `value` is not provided. It is used\nonly on first render.\n@default the first `Tab` child's `value`"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  event: TabsChangeEvent,
  value: string,
  reason: TabsChangeReason,
) => void`,signature:{arguments:[{type:{name:"union",raw:`| ReactMouseEvent<HTMLElement>
| ReactKeyboardEvent<HTMLElement>
| null`,elements:[{name:"ReactMouseEvent",elements:[{name:"HTMLElement"}],raw:"ReactMouseEvent<HTMLElement>"},{name:"ReactKeyboardEvent",elements:[{name:"HTMLElement"}],raw:"ReactKeyboardEvent<HTMLElement>"},{name:"null"}]},name:"event"},{type:{name:"string"},name:"value"},{type:{name:"union",raw:`| 'clicked-on-tab'
| 'selected-from-overflow'
| 'fallback-after-removal'`,elements:[{name:"literal",value:"'clicked-on-tab'"},{name:"literal",value:"'selected-from-overflow'"},{name:"literal",value:"'fallback-after-removal'"}]},name:"reason"}],return:{name:"void"}}},description:"Runs when user interaction selects a different tab."},unmountInactive:{required:!1,tsType:{name:"boolean"},description:"Renders only the selected `TabPanel`. By default every panel stays mounted\nand inactive panels are hidden with `display: none`, which preserves their\nscroll position and local state.\n@default false"},"aria-label":{required:!1,tsType:{name:"string"},description:"Accessible name for the tab strip. Provide this or `aria-labelledby` so the\n`tablist` is announced."},"aria-labelledby":{required:!1,tsType:{name:"string"},description:"Id of an element that labels the tab strip."}}};const Ya={title:"Components/Tabs",component:k,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:["Tabs keep every `TabPanel` mounted by default and hide the inactive","ones with `display: none`. That preserves scroll position, form","drafts, and grid state when a user moves between tabs, at the cost","of keeping hidden work alive. Hidden panels receive an `isActive`","signal — as a render-prop argument or through `useTabPanelActive()`","— so polling, timers, and animation can pause themselves. Set","`unmountInactive` when a panel is expensive enough that discarding","its state is the better trade."].join(" ")}}},args:{"aria-label":"Example sections",children:null}},ee={render:t=>e.jsxs(k,{...t,defaultValue:"overview",children:[e.jsx(o,{value:"overview",children:"Overview"}),e.jsx(o,{value:"activity",children:"Activity"}),e.jsx(o,{value:"settings",children:"Settings"}),e.jsx(i,{value:"overview",children:e.jsx(m,{py:"16",children:"Summary of the current record."})}),e.jsx(i,{value:"activity",children:e.jsx(m,{py:"16",children:"Recent activity for the current record."})}),e.jsx(i,{value:"settings",children:e.jsx(m,{py:"16",children:"Settings for the current record."})})]})},te={name:"Badges",parameters:{controls:{disable:!0}},render:t=>e.jsxs(k,{...t,defaultValue:"work",children:[e.jsx(o,{value:"work",children:"Work"}),e.jsx(o,{value:"materials",badge:3,badgeTooltip:"2 Open Part Request, 1 Short Part(s)",children:"Materials"}),e.jsx(o,{value:"status",badge:12,children:"Status"}),e.jsx(o,{value:"documents",badge:0,children:"Documents"}),e.jsx(i,{value:"work",children:e.jsx(m,{py:"16",children:"A badge without a tooltip is a bare count."})}),e.jsx(i,{value:"materials",children:e.jsx(m,{py:"16",children:"Hover or focus the Materials tab to read what the count means."})}),e.jsx(i,{value:"status",children:e.jsx(m,{py:"16",children:"Status content."})}),e.jsx(i,{value:"documents",children:e.jsx(m,{py:"16",children:"A zero count renders no badge at all."})})]})},Ce=["Work","Info","Materials","Status","Documents","History","Labor","Quality","Shipping","Invoicing","Costing","Notes"],ae={name:"Overflow",parameters:{controls:{disable:!0}},render:t=>e.jsxs(x,{resize:"horizontal",overflow:"auto",width:"lg",maxWidth:"full",minWidth:"240",borderWidth:"1",borderStyle:"dashed",borderColor:"border",p:"16",children:[e.jsx(m,{pb:"12",color:"text.subtlest",children:"Drag the bottom-right corner. Tabs nearest the selected one keep their place; the rest move into the overflow menu."}),e.jsxs(k,{...t,defaultValue:"work",children:[Ce.map(a=>e.jsx(o,{value:a.toLowerCase(),children:a},a)),Ce.map(a=>e.jsx(i,{value:a.toLowerCase(),children:e.jsxs(m,{py:"16",children:[a," content."]})},a))]})]})},Ae=[{value:"work",label:"Work",icon:"wrench-2"},{value:"materials",label:"Materials",icon:"cube-focus"},{value:"schedule",label:"Schedule",icon:"calendar-view-week"},{value:"shipping",label:"Shipping",icon:"truck-trailer"},{value:"quality",label:"Quality",icon:"list-checks"},{value:"history",label:"History",icon:"clock-countdown"},{value:"notes",label:"Notes",icon:"note-stack"}],ne={name:"Label Override for Overflow",parameters:{controls:{disable:!0}},render:t=>e.jsxs(x,{width:"md",maxWidth:"full",children:[e.jsx(m,{pb:"12",color:"text.subtlest",children:"These tabs render an icon beside their text, so flattening `children` would produce a poor menu row. Each one passes `label`, and the overflow menu uses that text. The strip still renders `children` as-is."}),e.jsxs(k,{...t,defaultValue:"work",children:[Ae.map(a=>e.jsxs(o,{value:a.value,label:a.label,children:[e.jsx(Nt,{name:a.icon,"aria-hidden":!0}),a.label]},a.value)),Ae.map(a=>e.jsx(i,{value:a.value,children:e.jsxs(m,{py:"16",children:[a.label," content."]})},a.value))]})]})},se={name:"Unmount Inactive Panels",parameters:{controls:{disable:!0}},render:t=>e.jsxs(k,{...t,defaultValue:"first",unmountInactive:!0,children:[e.jsx(o,{value:"first",children:"First"}),e.jsx(o,{value:"second",children:"Second"}),e.jsx(i,{value:"first",children:e.jsx(m,{py:"16",children:"Only this panel exists in the DOM while it is selected."})}),e.jsx(i,{value:"second",children:e.jsx(m,{py:"16",children:"Switching tabs unmounts the other panel and discards its state."})})]})},Ta=()=>{const[t,a]=r.useState(!0),[n,s]=r.useState("none yet");return e.jsxs(x,{children:[e.jsx(x,{pb:"12",children:e.jsx(fe,{variant:"hollow",size:"sm",onClick:()=>a(l=>!l),children:t?"Remove Schedule tab":"Add Schedule tab"})}),e.jsxs(k,{"aria-label":"Work order sections",defaultValue:"work",onChange:(l,u,v)=>s(`${u} (${v})`),children:[e.jsx(o,{value:"work",children:"Work"}),e.jsx(o,{value:"info",children:"Info"}),e.jsx(o,{value:"materials",badge:3,badgeTooltip:"2 Open Part Request, 1 Short Part(s)",children:"Materials"}),e.jsx(o,{value:"status",badge:5,badgeTooltip:"5 Operations Behind",children:"Status"}),t?e.jsx(o,{value:"schedule",children:"Schedule"}):null,e.jsx(o,{value:"documents",children:"Documents"}),e.jsx(o,{value:"history",children:"History"}),e.jsx(i,{value:"work",children:e.jsx(m,{py:"16",children:"Work instructions and operations."})}),e.jsx(i,{value:"info",children:e.jsx(m,{py:"16",children:"Order header and customer details."})}),e.jsx(i,{value:"materials",children:e.jsx(m,{py:"16",children:"Bill of materials and part requests."})}),e.jsx(i,{value:"status",children:e.jsx(m,{py:"16",children:"Operation status roll-up."})}),e.jsx(i,{value:"schedule",children:({isActive:l})=>e.jsxs(m,{py:"16",children:["Schedule board. Live refresh is ",l?"running":"paused",". Select this tab, remove it with the button above, and the strip falls back to the first remaining tab."]})}),e.jsx(i,{value:"documents",children:e.jsx(m,{py:"16",children:"Attached drawings and travelers."})}),e.jsx(i,{value:"history",children:e.jsx(m,{py:"16",children:"Audit trail."})})]}),e.jsxs(m,{pt:"16",color:"text.subtlest",children:["Last change: ",n]})]})},re={name:"Ex: Work View",parameters:{controls:{disable:!0}},render:()=>e.jsx(Ta,{})},xa=()=>{const[t,a]=r.useState(!0),[n,s]=r.useState("schedule");return e.jsxs(x,{children:[e.jsx(fe,{variant:"hollow",size:"sm",onClick:()=>a(l=>!l),children:t?"Remove Schedule tab":"Add Schedule tab"}),e.jsxs(m,{py:"8","data-testid":"controlled-value",children:["Parent value: ",n]}),e.jsxs(k,{"aria-label":"Controlled sections",value:n,onChange:(l,u)=>s(u),children:[e.jsx(o,{value:"work",children:"Work"}),t?e.jsx(o,{value:"schedule",children:"Schedule"}):null,e.jsx(o,{value:"history",children:"History"}),e.jsx(i,{value:"work",children:"Work content."}),e.jsx(i,{value:"schedule",children:"Schedule content."}),e.jsx(i,{value:"history",children:"History content."})]})]})},oe={name:"Test: controlled value follows a removed tab",parameters:{controls:{disable:!0}},render:()=>e.jsx(xa,{}),play:async({canvasElement:t})=>{const a=I(t);await h(a.getByRole("tab",{name:"Schedule"})).toHaveAttribute("aria-selected","true"),await V.click(a.getByRole("button",{name:"Remove Schedule tab"})),await ye(async()=>{await h(a.getByTestId("controlled-value")).toHaveTextContent("Parent value: work"),await h(a.getByRole("tab",{name:"Work"})).toHaveAttribute("aria-selected","true")})}},ya=()=>{const[t,a]=r.useState(!0);return e.jsxs(x,{children:[e.jsx(fe,{variant:"hollow",size:"sm",onClick:()=>a(n=>!n),children:t?"Remove Schedule tab":"Add Schedule tab"}),e.jsxs(k,{"aria-label":"Uncontrolled sections",defaultValue:"schedule",children:[e.jsx(o,{value:"work",children:"Work"}),t?e.jsx(o,{value:"schedule",children:"Schedule"}):null,e.jsx(o,{value:"history",children:"History"}),e.jsx(i,{value:"work",children:"Work content."}),e.jsx(i,{value:"schedule",children:"Schedule content."}),e.jsx(i,{value:"history",children:"History content."})]})]})},le={name:"Test: removed uncontrolled value does not return",parameters:{controls:{disable:!0}},render:()=>e.jsx(ya,{}),play:async({canvasElement:t})=>{const a=I(t);await V.click(a.getByRole("button",{name:"Remove Schedule tab"})),await h(a.getByRole("tab",{name:"Work"})).toHaveAttribute("aria-selected","true"),await V.click(a.getByRole("button",{name:"Add Schedule tab"})),await h(a.getByRole("tab",{name:"Work"})).toHaveAttribute("aria-selected","true"),await h(a.getByRole("tab",{name:"Schedule"})).toHaveAttribute("aria-selected","false")}},ie={name:"Test: overflow keeps badge details and selection semantics",parameters:{controls:{disable:!0}},render:t=>e.jsx(x,{"data-overflow-metadata-wrapper":!0,children:e.jsxs(k,{...t,defaultValue:"work",children:[e.jsx(o,{value:"work",children:"Work"}),e.jsx(o,{value:"materials",badge:3,badgeTooltip:"2 Open Part Requests, 1 Short Part",children:"Materials"}),e.jsx(o,{value:"documents",children:"Documents"}),e.jsx(o,{value:"history",children:"History"}),e.jsx(i,{value:"work",children:"Work content."}),e.jsx(i,{value:"materials",children:"Materials content."}),e.jsx(i,{value:"documents",children:"Documents content."}),e.jsx(i,{value:"history",children:"History content."})]})}),play:async({canvasElement:t})=>{const a=I(t),n=I(t.ownerDocument.body),s=t.querySelector("[data-overflow-metadata-wrapper]");if(!s)throw new Error("overflow metadata wrapper not found");s.style.width="180px";const l=await a.findByRole("button",{name:"More tabs"});await V.click(l);const u=await n.findByRole("menuitemradio",{name:/Materials \(3\)/});await h(u).toHaveAttribute("aria-checked","false"),await h(u).toHaveTextContent("2 Open Part Requests, 1 Short Part")}},ka=()=>{const[t,a]=r.useState(0),[n,s]=r.useState("none");return e.jsxs(x,{children:[e.jsxs(m,{pb:"8","data-testid":"consumer-events",children:["Clicks: ",t,"; last key: ",n]}),e.jsxs(k,{"aria-label":"Handler composition",defaultValue:"first",children:[e.jsx(o,{value:"first",onClick:()=>a(l=>l+1),children:"First"}),e.jsx(o,{value:"second",onKeyDown:l=>s(l.key),children:"Second"}),e.jsx(i,{value:"first",children:"First content."}),e.jsx(i,{value:"second",children:"Second content."})]})]})},ce={name:"Test: consumer handlers preserve tab interactions",parameters:{controls:{disable:!0}},render:()=>e.jsx(ka,{}),play:async({canvasElement:t})=>{const a=I(t),n=a.getByRole("tab",{name:"First"}),s=a.getByRole("tab",{name:"Second"}),l=a.getByTestId("consumer-events");await V.click(s),await h(s).toHaveAttribute("aria-selected","true"),await V.keyboard("{ArrowLeft}"),await h(n).toHaveAttribute("aria-selected","true"),await h(l).toHaveTextContent("last key: ArrowLeft"),await V.click(n),await h(l).toHaveTextContent("Clicks: 1")}},de={name:"Test: disabled first tab is not the default",parameters:{controls:{disable:!0}},render:t=>e.jsxs(x,{children:[e.jsx(m,{pb:"12",color:"text.subtlest",children:"No `defaultValue` is given and the first tab is disabled. The strip selects the first enabled tab so the keyboard can still enter it."}),e.jsxs(k,{...t,children:[e.jsx(o,{value:"archived",disabled:!0,children:"Archived"}),e.jsx(o,{value:"open",children:"Open"}),e.jsx(o,{value:"closed",children:"Closed"}),e.jsx(i,{value:"archived",children:e.jsx(m,{py:"16",children:"Archived content."})}),e.jsx(i,{value:"open",children:e.jsx(m,{py:"16",children:"Open content."})}),e.jsx(i,{value:"closed",children:e.jsx(m,{py:"16",children:"Closed content."})})]})]}),play:async({canvasElement:t})=>{const a=I(t),n=a.getByRole("tab",{name:"Open"});await h(n).toHaveAttribute("aria-selected","true"),await h(n).toHaveAttribute("tabindex","0"),await h(a.getByRole("tab",{name:"Archived"})).toHaveAttribute("aria-selected","false"),await V.tab(),await h(n).toHaveFocus()}},ue={name:"Test: badge does not change tab height",parameters:{controls:{disable:!0}},render:t=>e.jsxs(x,{display:"flex",flexDirection:"column",gap:"16",children:[e.jsx(m,{color:"text.subtlest",children:"Both strips are 40px tall. The 20px badge sits inside the 22px line box and never grows the tab. Matches Figma `_TabsTab`."}),e.jsxs(k,{...t,"aria-label":"Without badges",defaultValue:"work",children:[e.jsx(o,{value:"work",children:"Work"}),e.jsx(o,{value:"materials",children:"Materials"})]}),e.jsxs(k,{...t,"aria-label":"With badges",defaultValue:"work",children:[e.jsx(o,{value:"work",badge:3,children:"Work"}),e.jsx(o,{value:"materials",badge:12,badgeTooltip:"12 Short Part(s)",children:"Materials"})]})]}),play:async({canvasElement:t})=>{const a=I(t),[n,s]=a.getAllByRole("tablist");await h(s==null?void 0:s.offsetHeight).toBe(n==null?void 0:n.offsetHeight);for(const l of a.getAllByRole("tab"))await h(l.offsetHeight).toBe(40)}},be=["Work","Info","Materials","Status"],pe={name:"Test: toggle space is reserved only once tabs overflow",parameters:{controls:{disable:!0}},render:t=>e.jsxs(x,{children:[e.jsx(m,{pb:"12",color:"text.subtlest",children:"The wrapper is sized just above the strip width. Every tab fits, so no toggle renders. Shrinking it below the strip makes the measured toggle appear."}),e.jsx(x,{"data-fit-wrapper":!0,borderWidth:"1",borderStyle:"dashed",borderColor:"border",children:e.jsxs(k,{...t,defaultValue:"work",children:[be.map(a=>e.jsx(o,{value:a.toLowerCase(),children:a},a)),be.map(a=>e.jsx(i,{value:a.toLowerCase(),children:e.jsxs(m,{py:"16",children:[a," content."]})},a))]})})]}),play:async({canvasElement:t})=>{const a=I(t),n=t.querySelector("[data-fit-wrapper]"),s=a.getByRole("tablist"),l=a.getAllByRole("tab");if(!n)throw new Error("wrapper not found");const u=Number.parseFloat(getComputedStyle(s).columnGap)||0,v=l.reduce((g,T)=>g+T.getBoundingClientRect().width,0)+u*(l.length-1);n.style.width=`${String(Math.ceil(v)+16)}px`,await ye(async()=>{await h(a.getAllByRole("tab")).toHaveLength(be.length),await h(a.queryByRole("button",{name:"More tabs"})).not.toBeInTheDocument()}),n.style.width=`${String(Math.floor(v)-8)}px`,await ye(async()=>{await h(a.getByRole("button",{name:"More tabs"})).toBeInTheDocument(),await h(a.getAllByRole("tab").length).toBeLessThan(be.length)})}},me={name:"Test: tabs grouped in fragments join the strip",parameters:{controls:{disable:!0}},render:t=>e.jsxs(k,{...t,"aria-label":"Fragment children",defaultValue:"work",children:[e.jsxs(e.Fragment,{children:[e.jsx(o,{value:"work",children:"Work"}),e.jsx(e.Fragment,{children:e.jsx(o,{value:"materials",children:"Materials"})})]}),e.jsxs(e.Fragment,{children:[e.jsx(i,{value:"work",children:"Work content."}),e.jsx(i,{value:"materials",children:"Materials content."})]})]}),play:async({canvasElement:t})=>{const a=I(t),n=a.getByRole("tablist"),s=a.getByRole("tab",{name:"Materials"});await h(I(n).getAllByRole("tab")).toHaveLength(2),await V.click(s),await h(s).toHaveAttribute("aria-selected","true"),await h(a.getByText("Materials content.")).toBeVisible()}},ja=()=>{const t=r.useRef(null),[a,n]=r.useState("none");return e.jsxs(x,{children:[e.jsx(fe,{variant:"standard",mb:"8",onClick:()=>{var s;return n(((s=t.current)==null?void 0:s.tagName)??"none")},children:"Read ref"}),e.jsxs(m,{pb:"8","data-testid":"consumer-ref",children:["Ref: ",a]}),e.jsxs(k,{"aria-label":"Consumer ref",defaultValue:"first",children:[e.jsx(o,{value:"first",children:"First"}),e.jsx(o,{value:"second",ref:t,children:"Second"}),e.jsx(i,{value:"first",children:"First content."}),e.jsx(i,{value:"second",children:"Second content."})]})]})},he={name:"Test: consumer ref keeps tab registration",parameters:{controls:{disable:!0}},render:()=>e.jsx(ja,{}),play:async({canvasElement:t})=>{const a=I(t),n=a.getByRole("tab",{name:"First"}),s=a.getByRole("tab",{name:"Second"});await V.click(a.getByRole("button",{name:"Read ref"})),await h(a.getByTestId("consumer-ref")).toHaveTextContent("Ref: BUTTON"),await V.click(n),await V.keyboard("{ArrowRight}"),await h(s).toHaveAttribute("aria-selected","true"),await h(s).toHaveFocus()}},ve={name:"Test: badge tooltip opens on tab keyboard focus",parameters:{controls:{disable:!0}},render:t=>e.jsxs(k,{...t,"aria-label":"Badge tooltip",defaultValue:"materials",children:[e.jsx(o,{value:"materials",badge:3,badgeTooltip:"2 Open Part Requests",children:"Materials"}),e.jsx(o,{value:"status",children:"Status"}),e.jsx(i,{value:"materials",children:"Materials content."}),e.jsx(i,{value:"status",children:"Status content."})]}),play:async({canvasElement:t})=>{const a=I(t),n=I(t.ownerDocument.body),s=a.getByRole("tab",{name:/Materials/});await V.tab(),await h(s).toHaveFocus();const l=await n.findByRole("tooltip");await h(l).toHaveTextContent("2 Open Part Requests"),await h(s).toHaveAttribute("aria-describedby",l.id)}};var He,Me,Oe;ee.parameters={...ee.parameters,docs:{...(He=ee.parameters)==null?void 0:He.docs,source:{originalSource:`{
  render: args => <Tabs {...args} defaultValue="overview">
      <Tab value="overview">Overview</Tab>
      <Tab value="activity">Activity</Tab>
      <Tab value="settings">Settings</Tab>
      <TabPanel value="overview">
        <Text py="16">Summary of the current record.</Text>
      </TabPanel>
      <TabPanel value="activity">
        <Text py="16">Recent activity for the current record.</Text>
      </TabPanel>
      <TabPanel value="settings">
        <Text py="16">Settings for the current record.</Text>
      </TabPanel>
    </Tabs>
}`,...(Oe=(Me=ee.parameters)==null?void 0:Me.docs)==null?void 0:Oe.source}}};var Ve,Ie,Fe;te.parameters={...te.parameters,docs:{...(Ve=te.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  name: 'Badges',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: args => <Tabs {...args} defaultValue="work">
      <Tab value="work">Work</Tab>
      <Tab value="materials" badge={3} badgeTooltip="2 Open Part Request, 1 Short Part(s)">
        Materials
      </Tab>
      <Tab value="status" badge={12}>
        Status
      </Tab>
      <Tab value="documents" badge={0}>
        Documents
      </Tab>
      <TabPanel value="work">
        <Text py="16">A badge without a tooltip is a bare count.</Text>
      </TabPanel>
      <TabPanel value="materials">
        <Text py="16">
          Hover or focus the Materials tab to read what the count means.
        </Text>
      </TabPanel>
      <TabPanel value="status">
        <Text py="16">Status content.</Text>
      </TabPanel>
      <TabPanel value="documents">
        <Text py="16">A zero count renders no badge at all.</Text>
      </TabPanel>
    </Tabs>
}`,...(Fe=(Ie=te.parameters)==null?void 0:Ie.docs)==null?void 0:Fe.source}}};var We,Le,Ne;ae.parameters={...ae.parameters,docs:{...(We=ae.parameters)==null?void 0:We.docs,source:{originalSource:`{
  name: 'Overflow',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: args => <Box resize="horizontal" overflow="auto" width="lg" maxWidth="full" minWidth="240" borderWidth="1" borderStyle="dashed" borderColor="border" p="16">
      <Text pb="12" color="text.subtlest">
        Drag the bottom-right corner. Tabs nearest the selected one keep their
        place; the rest move into the overflow menu.
      </Text>
      <Tabs {...args} defaultValue="work">
        {overflowTabs.map(label => <Tab key={label} value={label.toLowerCase()}>
            {label}
          </Tab>)}
        {overflowTabs.map(label => <TabPanel key={label} value={label.toLowerCase()}>
            <Text py="16">{label} content.</Text>
          </TabPanel>)}
      </Tabs>
    </Box>
}`,...(Ne=(Le=ae.parameters)==null?void 0:Le.docs)==null?void 0:Ne.source}}};var _e,qe,De;ne.parameters={...ne.parameters,docs:{...(_e=ne.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  name: 'Label Override for Overflow',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: args => <Box width="md" maxWidth="full">
      <Text pb="12" color="text.subtlest">
        These tabs render an icon beside their text, so flattening \`children\`
        would produce a poor menu row. Each one passes \`label\`, and the overflow
        menu uses that text. The strip still renders \`children\` as-is.
      </Text>
      <Tabs {...args} defaultValue="work">
        {iconTabs.map(tab => <Tab key={tab.value} value={tab.value} label={tab.label}>
            <Icon name={tab.icon} aria-hidden />
            {tab.label}
          </Tab>)}
        {iconTabs.map(tab => <TabPanel key={tab.value} value={tab.value}>
            <Text py="16">{tab.label} content.</Text>
          </TabPanel>)}
      </Tabs>
    </Box>
}`,...(De=(qe=ne.parameters)==null?void 0:qe.docs)==null?void 0:De.source}}};var ze,$e,Ke;se.parameters={...se.parameters,docs:{...(ze=se.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  name: 'Unmount Inactive Panels',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: args => <Tabs {...args} defaultValue="first" unmountInactive>
      <Tab value="first">First</Tab>
      <Tab value="second">Second</Tab>
      <TabPanel value="first">
        <Text py="16">
          Only this panel exists in the DOM while it is selected.
        </Text>
      </TabPanel>
      <TabPanel value="second">
        <Text py="16">
          Switching tabs unmounts the other panel and discards its state.
        </Text>
      </TabPanel>
    </Tabs>
}`,...(Ke=($e=se.parameters)==null?void 0:$e.docs)==null?void 0:Ke.source}}};var Ue,Ge,Qe;re.parameters={...re.parameters,docs:{...(Ue=re.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  name: 'Ex: Work View',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <WorkView />
}`,...(Qe=(Ge=re.parameters)==null?void 0:Ge.docs)==null?void 0:Qe.source}}};var Ye,Je,Xe;oe.parameters={...oe.parameters,docs:{...(Ye=oe.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  name: 'Test: controlled value follows a removed tab',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <ControlledConditionalTabs />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('tab', {
      name: 'Schedule'
    })).toHaveAttribute('aria-selected', 'true');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Remove Schedule tab'
    }));
    await waitFor(async () => {
      await expect(canvas.getByTestId('controlled-value')).toHaveTextContent('Parent value: work');
      await expect(canvas.getByRole('tab', {
        name: 'Work'
      })).toHaveAttribute('aria-selected', 'true');
    });
  }
}`,...(Xe=(Je=oe.parameters)==null?void 0:Je.docs)==null?void 0:Xe.source}}};var Ze,et,tt;le.parameters={...le.parameters,docs:{...(Ze=le.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
  name: 'Test: removed uncontrolled value does not return',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <UncontrolledConditionalTabs />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Remove Schedule tab'
    }));
    await expect(canvas.getByRole('tab', {
      name: 'Work'
    })).toHaveAttribute('aria-selected', 'true');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Add Schedule tab'
    }));
    await expect(canvas.getByRole('tab', {
      name: 'Work'
    })).toHaveAttribute('aria-selected', 'true');
    await expect(canvas.getByRole('tab', {
      name: 'Schedule'
    })).toHaveAttribute('aria-selected', 'false');
  }
}`,...(tt=(et=le.parameters)==null?void 0:et.docs)==null?void 0:tt.source}}};var at,nt,st;ie.parameters={...ie.parameters,docs:{...(at=ie.parameters)==null?void 0:at.docs,source:{originalSource:`{
  name: 'Test: overflow keeps badge details and selection semantics',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: args => <Box data-overflow-metadata-wrapper>
      <Tabs {...args} defaultValue="work">
        <Tab value="work">Work</Tab>
        <Tab value="materials" badge={3} badgeTooltip="2 Open Part Requests, 1 Short Part">
          Materials
        </Tab>
        <Tab value="documents">Documents</Tab>
        <Tab value="history">History</Tab>
        <TabPanel value="work">Work content.</TabPanel>
        <TabPanel value="materials">Materials content.</TabPanel>
        <TabPanel value="documents">Documents content.</TabPanel>
        <TabPanel value="history">History content.</TabPanel>
      </Tabs>
    </Box>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    const wrapper = canvasElement.querySelector<HTMLElement>('[data-overflow-metadata-wrapper]');
    if (!wrapper) throw new Error('overflow metadata wrapper not found');
    wrapper.style.width = '180px';
    const trigger = await canvas.findByRole('button', {
      name: 'More tabs'
    });
    await userEvent.click(trigger);
    const materials = await body.findByRole('menuitemradio', {
      name: /Materials \\(3\\)/
    });
    await expect(materials).toHaveAttribute('aria-checked', 'false');
    await expect(materials).toHaveTextContent('2 Open Part Requests, 1 Short Part');
  }
}`,...(st=(nt=ie.parameters)==null?void 0:nt.docs)==null?void 0:st.source}}};var rt,ot,lt;ce.parameters={...ce.parameters,docs:{...(rt=ce.parameters)==null?void 0:rt.docs,source:{originalSource:`{
  name: 'Test: consumer handlers preserve tab interactions',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <ComposedTabHandlersExample />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const first = canvas.getByRole('tab', {
      name: 'First'
    });
    const second = canvas.getByRole('tab', {
      name: 'Second'
    });
    const consumerEvents = canvas.getByTestId('consumer-events');
    await userEvent.click(second);
    await expect(second).toHaveAttribute('aria-selected', 'true');
    await userEvent.keyboard('{ArrowLeft}');
    await expect(first).toHaveAttribute('aria-selected', 'true');
    await expect(consumerEvents).toHaveTextContent('last key: ArrowLeft');
    await userEvent.click(first);
    await expect(consumerEvents).toHaveTextContent('Clicks: 1');
  }
}`,...(lt=(ot=ce.parameters)==null?void 0:ot.docs)==null?void 0:lt.source}}};var it,ct,dt;de.parameters={...de.parameters,docs:{...(it=de.parameters)==null?void 0:it.docs,source:{originalSource:`{
  name: 'Test: disabled first tab is not the default',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: args => <Box>
      <Text pb="12" color="text.subtlest">
        No \`defaultValue\` is given and the first tab is disabled. The strip
        selects the first enabled tab so the keyboard can still enter it.
      </Text>
      <Tabs {...args}>
        <Tab value="archived" disabled>
          Archived
        </Tab>
        <Tab value="open">Open</Tab>
        <Tab value="closed">Closed</Tab>
        <TabPanel value="archived">
          <Text py="16">Archived content.</Text>
        </TabPanel>
        <TabPanel value="open">
          <Text py="16">Open content.</Text>
        </TabPanel>
        <TabPanel value="closed">
          <Text py="16">Closed content.</Text>
        </TabPanel>
      </Tabs>
    </Box>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const open = canvas.getByRole('tab', {
      name: 'Open'
    });
    await expect(open).toHaveAttribute('aria-selected', 'true');
    await expect(open).toHaveAttribute('tabindex', '0');
    await expect(canvas.getByRole('tab', {
      name: 'Archived'
    })).toHaveAttribute('aria-selected', 'false');

    // Tab from the page body lands on the strip's only focusable tab.
    await userEvent.tab();
    await expect(open).toHaveFocus();
  }
}`,...(dt=(ct=de.parameters)==null?void 0:ct.docs)==null?void 0:dt.source}}};var ut,bt,pt;ue.parameters={...ue.parameters,docs:{...(ut=ue.parameters)==null?void 0:ut.docs,source:{originalSource:`{
  name: 'Test: badge does not change tab height',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: args => <Box display="flex" flexDirection="column" gap="16">
      <Text color="text.subtlest">
        Both strips are 40px tall. The 20px badge sits inside the 22px line box
        and never grows the tab. Matches Figma \`_TabsTab\`.
      </Text>
      <Tabs {...args} aria-label="Without badges" defaultValue="work">
        <Tab value="work">Work</Tab>
        <Tab value="materials">Materials</Tab>
      </Tabs>
      <Tabs {...args} aria-label="With badges" defaultValue="work">
        <Tab value="work" badge={3}>
          Work
        </Tab>
        <Tab value="materials" badge={12} badgeTooltip="12 Short Part(s)">
          Materials
        </Tab>
      </Tabs>
    </Box>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const [plain, badged] = canvas.getAllByRole('tablist');
    await expect(badged?.offsetHeight).toBe(plain?.offsetHeight);
    for (const tab of canvas.getAllByRole('tab')) {
      await expect(tab.offsetHeight).toBe(40);
    }
  }
}`,...(pt=(bt=ue.parameters)==null?void 0:bt.docs)==null?void 0:pt.source}}};var mt,ht,vt;pe.parameters={...pe.parameters,docs:{...(mt=pe.parameters)==null?void 0:mt.docs,source:{originalSource:`{
  name: 'Test: toggle space is reserved only once tabs overflow',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: args => <Box>
      <Text pb="12" color="text.subtlest">
        The wrapper is sized just above the strip width. Every tab fits, so no
        toggle renders. Shrinking it below the strip makes the measured toggle
        appear.
      </Text>
      <Box data-fit-wrapper borderWidth="1" borderStyle="dashed" borderColor="border">
        <Tabs {...args} defaultValue="work">
          {fitTabs.map(label => <Tab key={label} value={label.toLowerCase()}>
              {label}
            </Tab>)}
          {fitTabs.map(label => <TabPanel key={label} value={label.toLowerCase()}>
              <Text py="16">{label} content.</Text>
            </TabPanel>)}
        </Tabs>
      </Box>
    </Box>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const wrapper = canvasElement.querySelector<HTMLElement>('[data-fit-wrapper]');
    const list = canvas.getByRole('tablist');
    const tabs = canvas.getAllByRole('tab');
    if (!wrapper) throw new Error('wrapper not found');
    const gap = Number.parseFloat(getComputedStyle(list).columnGap) || 0;
    const needed = tabs.reduce((sum, tab) => sum + tab.getBoundingClientRect().width, 0) + gap * (tabs.length - 1);

    // Room for every tab, without reserving a toggle that is not rendered.
    wrapper.style.width = \`\${String(Math.ceil(needed) + 16)}px\`;
    await waitFor(async () => {
      await expect(canvas.getAllByRole('tab')).toHaveLength(fitTabs.length);
      await expect(canvas.queryByRole('button', {
        name: 'More tabs'
      })).not.toBeInTheDocument();
    });

    // Now genuinely too narrow: the toggle renders and at least one tab hides.
    wrapper.style.width = \`\${String(Math.floor(needed) - 8)}px\`;
    await waitFor(async () => {
      await expect(canvas.getByRole('button', {
        name: 'More tabs'
      })).toBeInTheDocument();
      await expect(canvas.getAllByRole('tab').length).toBeLessThan(fitTabs.length);
    });
  }
}`,...(vt=(ht=pe.parameters)==null?void 0:ht.docs)==null?void 0:vt.source}}};var ft,gt,wt;me.parameters={...me.parameters,docs:{...(ft=me.parameters)==null?void 0:ft.docs,source:{originalSource:`{
  name: 'Test: tabs grouped in fragments join the strip',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: args => <Tabs {...args} aria-label="Fragment children" defaultValue="work">
      <>
        <Tab value="work">Work</Tab>
        <>
          <Tab value="materials">Materials</Tab>
        </>
      </>
      <>
        <TabPanel value="work">Work content.</TabPanel>
        <TabPanel value="materials">Materials content.</TabPanel>
      </>
    </Tabs>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const list = canvas.getByRole('tablist');
    const materials = canvas.getByRole('tab', {
      name: 'Materials'
    });
    await expect(within(list).getAllByRole('tab')).toHaveLength(2);
    await userEvent.click(materials);
    await expect(materials).toHaveAttribute('aria-selected', 'true');
    await expect(canvas.getByText('Materials content.')).toBeVisible();
  }
}`,...(wt=(gt=me.parameters)==null?void 0:gt.docs)==null?void 0:wt.source}}};var Tt,xt,yt;he.parameters={...he.parameters,docs:{...(Tt=he.parameters)==null?void 0:Tt.docs,source:{originalSource:`{
  name: 'Test: consumer ref keeps tab registration',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <ConsumerRefExample />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const first = canvas.getByRole('tab', {
      name: 'First'
    });
    const second = canvas.getByRole('tab', {
      name: 'Second'
    });
    await userEvent.click(canvas.getByRole('button', {
      name: 'Read ref'
    }));
    await expect(canvas.getByTestId('consumer-ref')).toHaveTextContent('Ref: BUTTON');

    // Keyboard focus reaches the ref'd tab only if it is still registered.
    await userEvent.click(first);
    await userEvent.keyboard('{ArrowRight}');
    await expect(second).toHaveAttribute('aria-selected', 'true');
    await expect(second).toHaveFocus();
  }
}`,...(yt=(xt=he.parameters)==null?void 0:xt.docs)==null?void 0:yt.source}}};var kt,jt,Rt;ve.parameters={...ve.parameters,docs:{...(kt=ve.parameters)==null?void 0:kt.docs,source:{originalSource:`{
  name: 'Test: badge tooltip opens on tab keyboard focus',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: args => <Tabs {...args} aria-label="Badge tooltip" defaultValue="materials">
      <Tab value="materials" badge={3} badgeTooltip="2 Open Part Requests">
        Materials
      </Tab>
      <Tab value="status">Status</Tab>
      <TabPanel value="materials">Materials content.</TabPanel>
      <TabPanel value="status">Status content.</TabPanel>
    </Tabs>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    const materials = canvas.getByRole('tab', {
      name: /Materials/
    });
    await userEvent.tab();
    await expect(materials).toHaveFocus();
    const tooltip = await body.findByRole('tooltip');
    await expect(tooltip).toHaveTextContent('2 Open Part Requests');
    await expect(materials).toHaveAttribute('aria-describedby', tooltip.id);
  }
}`,...(Rt=(jt=ve.parameters)==null?void 0:jt.docs)==null?void 0:Rt.source}}};const Ja=["Default","WithBadges","Overflow","LabelOverride","UnmountInactive","ExWorkView","ControlledFallback","UncontrolledFallback","OverflowMetadata","ComposedTabHandlers","DisabledFirstTab","BadgeKeepsHeight","ToggleReserveOnlyOnOverflow","FragmentChildren","ConsumerRef","BadgeTooltipOnFocus"];export{ue as BadgeKeepsHeight,ve as BadgeTooltipOnFocus,ce as ComposedTabHandlers,he as ConsumerRef,oe as ControlledFallback,ee as Default,de as DisabledFirstTab,re as ExWorkView,me as FragmentChildren,ne as LabelOverride,ae as Overflow,ie as OverflowMetadata,pe as ToggleReserveOnlyOnOverflow,le as UncontrolledFallback,se as UnmountInactive,te as WithBadges,Ja as __namedExportsOrder,Ya as default};
