import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r}from"./index-BKyFwriW.js";import{w as S,e as d,u as P,a as Y}from"./index-L8OlCEhE.js";import{m as Ut,a as Gt,b as Qt,e as Yt,g as Jt,s as Pe,B as g,c as Ce,d as Wt}from"./dsComponent-BG2jnRr7.js";import{B as ke}from"./Button-Cr4bC5CG.js";import{I as Xt}from"./Icon-CrwLKW7B.js";import"./IconConfig-BuieZFlx.js";import{T as m}from"./Text-CblSIDGb.js";import{u as Zt,c as ea,C as ta,k as aa,m as na,b as sa,d as ra,g as oa,o as la,F as ia,D as ca,E as da,G as ua,t as ba}from"./Tooltip-DzKvNlPD.js";import{g as pa,s as Lt,M as ma,a as ha}from"./SubMenu-Bp5CZIgt.js";import{B as va}from"./Badge-DBgIjuLw.js";import{I as Nt}from"./IconButton-Dx9Rzbb-.js";import{u as fa}from"./useControllableState-ByGfjEIG.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Spinner-PLunUSsK.js";import"./FieldContext-D6URyQos.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";import"./HighlightText-DKF3xkQK.js";import"./menu-BvaagRwT.js";import"./FloatingLayerContext-BryH8O9I.js";import"./ListItemGroup-BSVX0L8d.js";import"./Divider-Dbp7vcYx.js";import"./Checkbox-BKc0omfg.js";import"./Toggle-mlz1wkXL.js";const _t={hasOverflow:!1},wa=[],ga=[["root","tabs__root"],["strip","tabs__strip"],["list","tabs__list"],["tab","tabs__tab"],["badge","tabs__badge"],["overflow","tabs__overflow"],["menu","tabs__menu"],["panel","tabs__panel"]],ya=ga.map(([a,t])=>[a,Yt(t,_t,Jt(wa,a))]),Ta=Ut((a={})=>Object.fromEntries(ya.map(([t,s])=>[t,s.recipeFn(a)]))),Oe=["hasOverflow","overflowed"],xa=a=>({..._t,...Gt(a)}),qt=Object.assign(Ta,{__recipe__:!1,__name__:"tabs",raw:a=>a,classNameMap:{},variantKeys:Oe,variantMap:{hasOverflow:["false","true"],overflowed:["true"]},splitVariantProps(a){return Qt(a,Oe)},getVariantProps:xa}),ja=32,se=(a,t)=>a.length===t.length&&a.every((s,n)=>s===t[n]),ka=(a,t,s)=>{for(const n of t)s.has(n)||a==null||a.unobserve(n);for(const n of s)t.has(n)||a==null||a.observe(n);return s},Ra=({items:a,containerRef:t,getItemElement:s,activeItem:n=null,reserve:l=ja,reserveRef:b,enabled:f=!0})=>{const[w,T]=r.useState(()=>[...a]),[y,M]=r.useState([]),[R,I]=r.useState(null),j=r.useRef(null),W=r.useRef(a),B=r.useRef(n),L=r.useRef(R),N=r.useRef(null),z=r.useRef(l),_=r.useRef(null),C=r.useRef(f),O=r.useRef(null),E=r.useRef(new Set),H=r.useRef(null),V=r.useCallback(()=>{var Ae;const c=t.current,p=W.current;if(!C.current||!c){T(v=>se(v,p)?v:[...p]),M(v=>v.length===0?v:[]);return}const u=globalThis.getComputedStyle(c),h=Number.parseFloat(u.paddingLeft||"0")+Number.parseFloat(u.paddingRight||"0"),k=Number.parseFloat(u.columnGap||"0")||0,q=c.clientWidth-h,K=p.map(v=>{var A;return((A=s(v))==null?void 0:A.offsetWidth)??Number.POSITIVE_INFINITY}),U=L.current,G=B.current,ee=U??G,te=ee===null?-1:p.indexOf(ee),ae=te===-1?0:te,ne=[...new Set([U,G].filter(v=>v!==null).map(v=>p.indexOf(v)).filter(v=>v!==-1))],Se=p.map((v,A)=>A).sort((v,A)=>{const D=Math.abs(v-ae)-Math.abs(A-ae);return D===0?v-A:D}),X=(v,A)=>{const D=new Set;let Be=0;for(const J of v)Be+=(K[J]??0)+(D.size>0?k:0),D.add(J);for(const J of Se){if(D.has(J))continue;const Me=(K[J]??0)+(D.size>0?k:0);if(Be+Me>A)break;Be+=Me,D.add(J)}return D};let Q=X([],q);if(Q.size<p.length){const v=((Ae=_.current)==null?void 0:Ae.offsetWidth)??z.current,A=q-v;Q=X([],A),ne.some(D=>!Q.has(D))&&(Q=X(ne,A))}const Z=[],F=[];p.forEach((v,A)=>{Q.has(A)?Z.push(v):F.push(v)}),T(v=>se(v,Z)?v:Z),M(v=>se(v,F)?v:F)},[t,s]),$=r.useCallback((c,p)=>{if(W.current.includes(c)){if(!y.includes(c)){p==null||p();return}H.current={key:c,onVisible:p},N.current=B.current,I(c)}},[y]);return r.useLayoutEffect(()=>{const c=()=>{j.current!==null&&globalThis.cancelAnimationFrame(j.current),j.current=globalThis.requestAnimationFrame(()=>{j.current=null,V()})},p=typeof ResizeObserver>"u"?null:new ResizeObserver(c);return O.current=p,globalThis.addEventListener("resize",c),()=>{p==null||p.disconnect(),O.current=null,E.current.clear(),globalThis.removeEventListener("resize",c),j.current!==null&&(globalThis.cancelAnimationFrame(j.current),j.current=null)}},[V]),r.useLayoutEffect(()=>{se(W.current,a)||(W.current=[...a]),B.current=n,L.current=R,z.current=l,_.current=(b==null?void 0:b.current)??null,C.current=f;const c=new Set,p=t.current;if(f&&p){c.add(p),_.current&&c.add(_.current);for(const u of W.current){const h=s(u);h&&c.add(h)}}E.current=ka(O.current,E.current,c),V()},[n,t,f,R,s,a,V,l,b]),r.useLayoutEffect(()=>{var p;const c=H.current;if(c){if(!W.current.includes(c.key)){H.current=null,I(null);return}y.includes(c.key)||(H.current=null,(p=c.onVisible)==null||p.call(c))}},[y]),r.useLayoutEffect(()=>{if(R===null)return;const c=!a.includes(R);if(!c&&n===N.current)return;const p=H.current;p&&(c||p.key!==n)&&(H.current=null),N.current=null,I(null)},[n,R,a]),{visible:w,overflow:y,hasOverflow:y.length>0,measure:V,ensureVisible:$}},Dt=r.createContext(null),Sa=r.createContext(!0),Ba=Dt.Provider,Ea=Sa.Provider,zt=()=>{const a=r.useContext(Dt);if(!a)throw new Error("Tabs compound components must be used within <Tabs />");return a},Re={tab:"Tab",panel:"TabPanel"},He="__tabsComponentType",$t=a=>pa(a,He),Kt=a=>{const t=[],s=(n,l)=>{r.Children.toArray(n).forEach(b=>{if(r.isValidElement(b)&&b.type===r.Fragment){s(b.props.children,`${l}${String(b.key)}/`);return}t.push(l!==""&&r.isValidElement(b)?r.cloneElement(b,{key:`${l}${String(b.key)}`}):b)})};return s(a,""),t},Pa=qt({overflowed:!0}).tab,Ve=da({size:"md",hasTitle:!1}),o=a=>{const{value:t,children:s,label:n,badge:l,badgeTooltip:b,disabled:f=!1,onClick:w,onKeyDown:T,ref:y,...M}=a,{classes:R,getPanelId:I,getTabId:j,onTabKeyDown:W,overflowValues:B,registerTabElement:L,selectTab:N,selectedValue:z}=zt(),_=z===t,C=B.includes(t),[O,E]=Pe(M),H=r.useCallback(F=>{L(t,F)},[L,t]),V=C?Pa:R.tab,$=typeof l=="number"&&l!==0,c=$&&!!b&&!C,[p,u]=r.useState(!1),h=r.useRef(null),k=c&&p,{refs:q,elements:K,floatingStyles:U,context:G}=Zt({open:k,onOpenChange:u,placement:"bottom",middleware:ea({offset:8,extras:[ta({element:h})]})}),ee=aa(G,{enabled:c,move:!1}),te=na(G,{enabled:c}),ae=sa(G,{enabled:c}),ne=ra(G,{enabled:c,role:"tooltip"}),{getReferenceProps:Se,getFloatingProps:X}=oa([ee,te,ae,ne]),Q=la([H,q.setReference,y]),Z=$?e.jsx(g,{ref:q.setPositionReference,className:R.badge,children:e.jsx(va,{count:l,variant:"subtle"})}):null;return e.jsxs(e.Fragment,{children:[e.jsxs(g,{as:"button",type:"button",ref:Q,id:j(t),role:"tab","aria-selected":_,"aria-controls":I(t),"aria-hidden":C||void 0,disabled:f,tabIndex:_&&!C?0:-1,className:Ce(V,O),...Se({...E,onClick:F=>{w==null||w(F),!(f||F.defaultPrevented)&&N(F,t,"clicked-on-tab")},onKeyDown:F=>{T==null||T(F),F.defaultPrevented||W(F)}}),children:[s,Z]}),k?e.jsx(ia,{children:e.jsx(ca,{reference:K.domReference,children:e.jsxs(g,{...Wt("Tooltip"),ref:q.setFloating,style:U,className:Ve.tooltipContent,...X(),children:[e.jsx(g,{className:Ve.text,children:b}),e.jsx(ua,{ref:h,context:G,fill:ba.var("colors.bg.neutral.inverse")})]})})}):null]})};Lt(o,He,Re.tab);o.__docgenInfo={description:'Selects one panel inside a {@link Tabs} strip.\n\nRenders a `button` with `role="tab"`. Only the selected tab is in the tab\norder; Arrow, Home, and End move between the others. A tab that does not fit\nthe strip stays mounted but hidden so it can still be measured, and it is\noffered in the overflow menu instead. The menu row is plain text, so give\n`label` when `children` are not plain text.\n\n`badgeTooltip` opens on hover and on keyboard focus of the tab itself, points\nat the badge, and is linked to the tab with `aria-describedby` while open.\n\n@example\n```tsx\n<Tab value="materials" badge={3} badgeTooltip="2 Open Part Request">\n  Materials\n</Tab>\n```',methods:[],displayName:"Tab",props:{value:{required:!0,tsType:{name:"string"},description:"Identifies the tab and the `TabPanel` it controls. Must be unique within a `Tabs`."},children:{required:!1,tsType:{name:"ReactNode"},description:"Visible label rendered in the strip. Plain text is also reused as the overflow-menu row's text unless `label` overrides it."},label:{required:!1,tsType:{name:"string"},description:"Plain-text name for this tab's overflow-menu row, which cannot render\nmarkup. Set it when `children` contain more than text — an icon, a nested\nelement — because flattening those to a string reads badly. It never\nchanges what the strip renders: `children` still render there as-is.\nWithout it the menu row falls back to the flattened `children`, then to\n`value`."},badge:{required:!1,tsType:{name:"number"},description:"Count shown in a trailing {@link Badge}. A zero or omitted count renders no badge."},badgeTooltip:{required:!1,tsType:{name:"string"},description:"Tooltip text describing what the badge counts. Requires `badge`."},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents selection and skips the tab during arrow-key navigation."}}};const i=a=>{const{value:t,children:s,...n}=a,{classes:l,getPanelId:b,getTabId:f,selectedValue:w,unmountInactive:T}=zt(),y=w===t,[M,R]=Pe(n);if(T&&!y)return null;const j=typeof s=="function"?s({isActive:y}):s;return e.jsx(Ea,{value:y,children:e.jsx(g,{id:b(t),role:"tabpanel","aria-labelledby":f(t),tabIndex:y?0:-1,display:y?"block":"none",className:Ce(l.panel,M),...R,children:j})})};Lt(i,He,Re.panel);i.__docgenInfo={description:'Renders the content for one {@link Tab}.\n\nThe panel stays mounted when another tab is selected and is hidden with\n`display: none`, which preserves scroll position and local state; set\n`unmountInactive` on `Tabs` to render only the selected panel instead. A\nfunction child receives `{ isActive }`, and descendants can call\n`useTabPanelActive()` for the same signal, so hidden panels can pause polling\nor animation.\n\n@example\n```tsx\n<TabPanel value="materials">\n  {({ isActive }) => <MaterialsGrid paused={!isActive} />}\n</TabPanel>\n```',methods:[],displayName:"TabPanel",props:{value:{required:!0,tsType:{name:"string"},description:"`value` of the {@link Tab} this panel belongs to."},children:{required:!1,tsType:{name:"union",raw:"ReactNode | ((props: TabPanelRenderProps) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:"Panel content. A function child receives `{ isActive }` so expensive work\ncan pause while the panel is mounted but hidden."}}};const Ee=a=>a==null||typeof a=="boolean"?"":typeof a=="string"||typeof a=="number"?String(a):Array.isArray(a)?a.map(t=>Ee(t)).join(""):r.isValidElement(a)?Ee(a.props.children):"",Ca=({children:a,value:t,defaultValue:s,onChange:n,listRef:l,overflowRef:b})=>{var p;const f=r.useMemo(()=>{const u=[];return Kt(a).forEach(h=>{if(!r.isValidElement(h)||$t(h)!==Re.tab)return;const k=h.props;typeof k.value=="string"&&u.push({value:k.value,label:k.label||Ee(k.children)||k.value,disabled:!!k.disabled,badge:k.badge,badgeTooltip:k.badgeTooltip})}),u},[a]),w=r.useMemo(()=>f.map(u=>u.value),[f]),T=(p=f.find(u=>!u.disabled))==null?void 0:p.value,[y,M,R]=fa({value:t,defaultValue:s??T??""}),I=f.find(u=>u.value===y),j=!!(I&&!I.disabled),W=j||T!==void 0,B=j?y:T??"",L=r.useRef(null);r.useEffect(()=>{if(j){L.current=null;return}const u=JSON.stringify([y,T??null]);L.current!==u&&(L.current=u,R||M(T??""),T!==void 0&&(n==null||n(null,T,"fallback-after-removal")))},[T,R,j,n,M,y]);const N=r.useRef(new Map),z=r.useCallback((u,h)=>{h?N.current.set(u,h):N.current.delete(u)},[]),_=r.useCallback(u=>N.current.get(u)??null,[]),{ensureVisible:C,overflow:O,hasOverflow:E}=Ra({items:w,containerRef:l,getItemElement:_,activeItem:W?B:null,reserveRef:b}),H=r.useCallback((u,h,k)=>{h!==y&&(M(h),n==null||n(u,h,k))},[n,M,y]),V=r.useCallback(u=>{C(u,()=>{var h;(h=N.current.get(u))==null||h.focus()})},[C]),$=r.useCallback(u=>{const h=f.filter(U=>!U.disabled).map(U=>U.value);if(h.length===0)return;const k=Math.max(0,h.indexOf(B));let q;switch(u.key){case"ArrowRight":q=(k+1)%h.length;break;case"ArrowLeft":q=(k-1+h.length)%h.length;break;case"Home":q=0;break;case"End":q=h.length-1;break;default:return}u.preventDefault();const K=h[q];K!==void 0&&(H(u,K,"clicked-on-tab"),V(K))},[V,H,B,f]),c=r.useMemo(()=>O.map(u=>f.find(h=>h.value===u)).filter(u=>!!u),[O,f]);return{hasOverflow:E,focusTab:V,onTabKeyDown:$,overflowTabs:c,overflowValues:O,registerTabElement:z,selectTab:H,selectedValue:B,tabs:f}},Ha=({className:a,focusTab:t,tabs:s,selectTab:n,selectedValue:l})=>{const[b,f]=r.useState(!1);return e.jsx(ma,{open:b,onOpenChange:f,placement:"bottom-end",className:a,trigger:e.jsx(Nt,{variant:"ghost",size:"md",iconName:b?"caret-up":"caret-down",altText:"More tabs","aria-haspopup":"menu"}),children:s.map(w=>{const T=typeof w.badge=="number"&&w.badge!==0;return e.jsx(ha,{label:T?`${w.label} (${String(w.badge)})`:w.label,description:T?w.badgeTooltip:void 0,disabled:w.disabled,selected:w.value===l,role:"menuitemradio","aria-checked":w.value===l,onClick:y=>{n(y,w.value,"selected-from-overflow"),t(w.value),f(!1)}},w.value)})})},x=a=>{const{children:t,value:s,defaultValue:n,onChange:l,unmountInactive:b=!1,"aria-label":f,"aria-labelledby":w,...T}=a,[y,M]=Pe(T),R=r.useRef(null),I=r.useRef(null),j=r.useId(),{focusTab:W,hasOverflow:B,onTabKeyDown:L,overflowTabs:N,overflowValues:z,registerTabElement:_,selectTab:C,selectedValue:O}=Ca({children:t,value:s,defaultValue:n,onChange:l,listRef:R,overflowRef:I}),E=r.useMemo(()=>qt({hasOverflow:B}),[B]),[H,V]=r.useMemo(()=>{const c=[],p=[];return Kt(t).forEach(u=>{$t(u)===Re.tab?c.push(u):p.push(u)}),[c,p]},[t]),$=r.useMemo(()=>({classes:E,getPanelId:c=>`${j}-panel-${c}`,getTabId:c=>`${j}-tab-${c}`,onTabKeyDown:L,overflowValues:z,registerTabElement:_,selectTab:C,selectedValue:O,unmountInactive:b}),[j,E,L,z,_,C,O,b]);return e.jsx(Ba,{value:$,children:e.jsxs(g,{...Wt("Tabs"),className:Ce(E.root,y),...M,children:[e.jsxs(g,{className:E.strip,children:[e.jsx(g,{ref:R,role:"tablist","aria-label":f,"aria-labelledby":w,"aria-orientation":"horizontal",className:E.list,children:H}),e.jsx(g,{ref:I,className:E.overflow,"aria-hidden":!B||void 0,children:B?e.jsx(Ha,{className:E.menu,focusTab:W,tabs:N,selectTab:C,selectedValue:O}):e.jsx(Nt,{variant:"ghost",size:"md",iconName:"caret-down",altText:"More tabs",disabled:!0,tabIndex:-1})})]}),V]})})};x.__docgenInfo={description:'Groups related content into a single view with one panel visible at a time.\n\nCompose it from `Tab` and `TabPanel` children; the first enabled `Tab` is\nselected by default. Selection is uncontrolled with `defaultValue` or\ncontrolled with `value` plus `onChange`. Tabs that do not fit the available width move into\nan overflow menu at the end of the strip, and the selected tab always stays\nvisible. Every panel stays mounted and hidden unless `unmountInactive` is\nset, so read `useTabPanelActive()` to pause work in a hidden panel.\n\nThe strip renders a `tablist` with roving tabindex and Arrow, Home, and End\nnavigation. Supply `aria-label` or `aria-labelledby` so it is announced.\n\n@example\n```tsx\n<Tabs defaultValue="work" aria-label="Order sections">\n  <Tab value="work">Work</Tab>\n  <Tab value="materials" badge={3}>Materials</Tab>\n  <TabPanel value="work">Work content</TabPanel>\n  <TabPanel value="materials">Materials content</TabPanel>\n</Tabs>\n```',methods:[],displayName:"Tabs",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"`Tab` and `TabPanel` children. Tab order in the strip follows source order."},value:{required:!1,tsType:{name:"string"},description:"Controlled selected tab `value`. Pair with `onChange`; omit it to use `defaultValue`."},defaultValue:{required:!1,tsType:{name:"string"},description:"Initially selected tab `value` when `value` is not provided. It is used\nonly on first render.\n@default the first `Tab` child's `value`"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  event: TabsChangeEvent,
  value: string,
  reason: TabsChangeReason,
) => void`,signature:{arguments:[{type:{name:"union",raw:`| ReactMouseEvent<HTMLElement>
| ReactKeyboardEvent<HTMLElement>
| null`,elements:[{name:"ReactMouseEvent",elements:[{name:"HTMLElement"}],raw:"ReactMouseEvent<HTMLElement>"},{name:"ReactKeyboardEvent",elements:[{name:"HTMLElement"}],raw:"ReactKeyboardEvent<HTMLElement>"},{name:"null"}]},name:"event"},{type:{name:"string"},name:"value"},{type:{name:"union",raw:`| 'clicked-on-tab'
| 'selected-from-overflow'
| 'fallback-after-removal'`,elements:[{name:"literal",value:"'clicked-on-tab'"},{name:"literal",value:"'selected-from-overflow'"},{name:"literal",value:"'fallback-after-removal'"}]},name:"reason"}],return:{name:"void"}}},description:"Runs when user interaction selects a different tab."},unmountInactive:{required:!1,tsType:{name:"boolean"},description:"Renders only the selected `TabPanel`. By default every panel stays mounted\nand inactive panels are hidden with `display: none`, which preserves their\nscroll position and local state.\n@default false"},"aria-label":{required:!1,tsType:{name:"string"},description:"Accessible name for the tab strip. Provide this or `aria-labelledby` so the\n`tablist` is announced."},"aria-labelledby":{required:!1,tsType:{name:"string"},description:"Id of an element that labels the tab strip."}}};const un={title:"Components/Tabs",component:x,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:["Tabs keep every `TabPanel` mounted by default and hide the inactive","ones with `display: none`. That preserves scroll position, form","drafts, and grid state when a user moves between tabs, at the cost","of keeping hidden work alive. Hidden panels receive an `isActive`","signal — as a render-prop argument or through `useTabPanelActive()`","— so polling, timers, and animation can pause themselves. Set","`unmountInactive` when a panel is expensive enough that discarding","its state is the better trade."].join(" ")}}},args:{"aria-label":"Example sections",children:null}},re={render:a=>e.jsxs(x,{...a,defaultValue:"overview",children:[e.jsx(o,{value:"overview",children:"Overview"}),e.jsx(o,{value:"activity",children:"Activity"}),e.jsx(o,{value:"settings",children:"Settings"}),e.jsx(i,{value:"overview",children:e.jsx(m,{py:"16",children:"Summary of the current record."})}),e.jsx(i,{value:"activity",children:e.jsx(m,{py:"16",children:"Recent activity for the current record."})}),e.jsx(i,{value:"settings",children:e.jsx(m,{py:"16",children:"Settings for the current record."})})]})},oe={name:"Badges",parameters:{controls:{disable:!0}},render:a=>e.jsxs(x,{...a,defaultValue:"work",children:[e.jsx(o,{value:"work",children:"Work"}),e.jsx(o,{value:"materials",badge:3,badgeTooltip:"2 Open Part Request, 1 Short Part(s)",children:"Materials"}),e.jsx(o,{value:"status",badge:12,children:"Status"}),e.jsx(o,{value:"documents",badge:0,children:"Documents"}),e.jsx(i,{value:"work",children:e.jsx(m,{py:"16",children:"A badge without a tooltip is a bare count."})}),e.jsx(i,{value:"materials",children:e.jsx(m,{py:"16",children:"Hover or focus the Materials tab to read what the count means."})}),e.jsx(i,{value:"status",children:e.jsx(m,{py:"16",children:"Status content."})}),e.jsx(i,{value:"documents",children:e.jsx(m,{py:"16",children:"A zero count renders no badge at all."})})]})},Fe=["Work","Info","Materials","Status","Documents","History","Labor","Quality","Shipping","Invoicing","Costing","Notes"],le={name:"Overflow",parameters:{controls:{disable:!0}},render:a=>e.jsxs(g,{resize:"horizontal",overflow:"auto",width:"lg",maxWidth:"full",minWidth:"240",borderWidth:"1",borderStyle:"dashed",borderColor:"border",p:"16",children:[e.jsx(m,{pb:"12",color:"text.subtlest",children:"Drag the bottom-right corner. Tabs nearest the selected one keep their place; the rest move into the overflow menu."}),e.jsxs(x,{...a,defaultValue:"work",children:[Fe.map(t=>e.jsx(o,{value:t.toLowerCase(),children:t},t)),Fe.map(t=>e.jsx(i,{value:t.toLowerCase(),children:e.jsxs(m,{py:"16",children:[t," content."]})},t))]})]})},Ie=[{value:"work",label:"Work",icon:"wrench-2"},{value:"materials",label:"Materials",icon:"cube-focus"},{value:"schedule",label:"Schedule",icon:"calendar-view-week"},{value:"shipping",label:"Shipping",icon:"truck-trailer"},{value:"quality",label:"Quality",icon:"list-checks"},{value:"history",label:"History",icon:"clock-countdown"},{value:"notes",label:"Notes",icon:"note-stack"}],ie={name:"Label Override for Overflow",parameters:{controls:{disable:!0}},render:a=>e.jsxs(g,{width:"md",maxWidth:"full",children:[e.jsx(m,{pb:"12",color:"text.subtlest",children:"These tabs render an icon beside their text, so flattening `children` would produce a poor menu row. Each one passes `label`, and the overflow menu uses that text. The strip still renders `children` as-is."}),e.jsxs(x,{...a,defaultValue:"work",children:[Ie.map(t=>e.jsxs(o,{value:t.value,label:t.label,children:[e.jsx(Xt,{name:t.icon,"aria-hidden":!0}),t.label]},t.value)),Ie.map(t=>e.jsx(i,{value:t.value,children:e.jsxs(m,{py:"16",children:[t.label," content."]})},t.value))]})]})},ce={name:"Unmount Inactive Panels",parameters:{controls:{disable:!0}},render:a=>e.jsxs(x,{...a,defaultValue:"first",unmountInactive:!0,children:[e.jsx(o,{value:"first",children:"First"}),e.jsx(o,{value:"second",children:"Second"}),e.jsx(i,{value:"first",children:e.jsx(m,{py:"16",children:"Only this panel exists in the DOM while it is selected."})}),e.jsx(i,{value:"second",children:e.jsx(m,{py:"16",children:"Switching tabs unmounts the other panel and discards its state."})})]})},Aa=()=>{const[a,t]=r.useState(!0),[s,n]=r.useState("none yet");return e.jsxs(g,{children:[e.jsx(g,{pb:"12",children:e.jsx(ke,{variant:"hollow",size:"sm",onClick:()=>t(l=>!l),children:a?"Remove Schedule tab":"Add Schedule tab"})}),e.jsxs(x,{"aria-label":"Work order sections",defaultValue:"work",onChange:(l,b,f)=>n(`${b} (${f})`),children:[e.jsx(o,{value:"work",children:"Work"}),e.jsx(o,{value:"info",children:"Info"}),e.jsx(o,{value:"materials",badge:3,badgeTooltip:"2 Open Part Request, 1 Short Part(s)",children:"Materials"}),e.jsx(o,{value:"status",badge:5,badgeTooltip:"5 Operations Behind",children:"Status"}),a?e.jsx(o,{value:"schedule",children:"Schedule"}):null,e.jsx(o,{value:"documents",children:"Documents"}),e.jsx(o,{value:"history",children:"History"}),e.jsx(i,{value:"work",children:e.jsx(m,{py:"16",children:"Work instructions and operations."})}),e.jsx(i,{value:"info",children:e.jsx(m,{py:"16",children:"Order header and customer details."})}),e.jsx(i,{value:"materials",children:e.jsx(m,{py:"16",children:"Bill of materials and part requests."})}),e.jsx(i,{value:"status",children:e.jsx(m,{py:"16",children:"Operation status roll-up."})}),e.jsx(i,{value:"schedule",children:({isActive:l})=>e.jsxs(m,{py:"16",children:["Schedule board. Live refresh is ",l?"running":"paused",". Select this tab, remove it with the button above, and the strip falls back to the first remaining tab."]})}),e.jsx(i,{value:"documents",children:e.jsx(m,{py:"16",children:"Attached drawings and travelers."})}),e.jsx(i,{value:"history",children:e.jsx(m,{py:"16",children:"Audit trail."})})]}),e.jsxs(m,{pt:"16",color:"text.subtlest",children:["Last change: ",s]})]})},de={name:"Ex: Work View",parameters:{controls:{disable:!0}},render:()=>e.jsx(Aa,{})},Ma=()=>{const[a,t]=r.useState(!0),[s,n]=r.useState("schedule");return e.jsxs(g,{children:[e.jsx(ke,{variant:"hollow",size:"sm",onClick:()=>t(l=>!l),children:a?"Remove Schedule tab":"Add Schedule tab"}),e.jsxs(m,{py:"8","data-testid":"controlled-value",children:["Parent value: ",s]}),e.jsxs(x,{"aria-label":"Controlled sections",value:s,onChange:(l,b)=>n(b),children:[e.jsx(o,{value:"work",children:"Work"}),a?e.jsx(o,{value:"schedule",children:"Schedule"}):null,e.jsx(o,{value:"history",children:"History"}),e.jsx(i,{value:"work",children:"Work content."}),e.jsx(i,{value:"schedule",children:"Schedule content."}),e.jsx(i,{value:"history",children:"History content."})]})]})},ue={name:"Test: controlled value follows a removed tab",parameters:{controls:{disable:!0}},render:()=>e.jsx(Ma,{}),play:async({canvasElement:a})=>{const t=S(a);await d(t.getByRole("tab",{name:"Schedule"})).toHaveAttribute("aria-selected","true"),await P.click(t.getByRole("button",{name:"Remove Schedule tab"})),await Y(async()=>{await d(t.getByTestId("controlled-value")).toHaveTextContent("Parent value: work"),await d(t.getByRole("tab",{name:"Work"})).toHaveAttribute("aria-selected","true")})}},Oa=()=>{const[a,t]=r.useState(!0);return e.jsxs(g,{children:[e.jsx(ke,{variant:"hollow",size:"sm",onClick:()=>t(s=>!s),children:a?"Remove Schedule tab":"Add Schedule tab"}),e.jsxs(x,{"aria-label":"Uncontrolled sections",defaultValue:"schedule",children:[e.jsx(o,{value:"work",children:"Work"}),a?e.jsx(o,{value:"schedule",children:"Schedule"}):null,e.jsx(o,{value:"history",children:"History"}),e.jsx(i,{value:"work",children:"Work content."}),e.jsx(i,{value:"schedule",children:"Schedule content."}),e.jsx(i,{value:"history",children:"History content."})]})]})},be={name:"Test: removed uncontrolled value does not return",parameters:{controls:{disable:!0}},render:()=>e.jsx(Oa,{}),play:async({canvasElement:a})=>{const t=S(a);await P.click(t.getByRole("button",{name:"Remove Schedule tab"})),await d(t.getByRole("tab",{name:"Work"})).toHaveAttribute("aria-selected","true"),await P.click(t.getByRole("button",{name:"Add Schedule tab"})),await d(t.getByRole("tab",{name:"Work"})).toHaveAttribute("aria-selected","true"),await d(t.getByRole("tab",{name:"Schedule"})).toHaveAttribute("aria-selected","false")}},pe={name:"Test: overflow keeps badge details and selection semantics",parameters:{controls:{disable:!0}},render:a=>e.jsx(g,{"data-overflow-metadata-wrapper":!0,children:e.jsxs(x,{...a,defaultValue:"work",children:[e.jsx(o,{value:"work",children:"Work"}),e.jsx(o,{value:"materials",badge:3,badgeTooltip:"2 Open Part Requests, 1 Short Part",children:"Materials"}),e.jsx(o,{value:"documents",children:"Documents"}),e.jsx(o,{value:"history",children:"History"}),e.jsx(i,{value:"work",children:"Work content."}),e.jsx(i,{value:"materials",children:"Materials content."}),e.jsx(i,{value:"documents",children:"Documents content."}),e.jsx(i,{value:"history",children:"History content."})]})}),play:async({canvasElement:a})=>{const t=S(a),s=S(a.ownerDocument.body),n=a.querySelector("[data-overflow-metadata-wrapper]");if(!n)throw new Error("overflow metadata wrapper not found");n.style.width="180px";const l=await t.findByRole("button",{name:"More tabs"});await P.click(l);const b=await s.findByRole("menuitemradio",{name:/Materials \(3\)/});await d(b).toHaveAttribute("aria-checked","false"),await d(b).toHaveTextContent("2 Open Part Requests, 1 Short Part")}},Va=()=>{const[a,t]=r.useState(0),[s,n]=r.useState("none");return e.jsxs(g,{children:[e.jsxs(m,{pb:"8","data-testid":"consumer-events",children:["Clicks: ",a,"; last key: ",s]}),e.jsxs(x,{"aria-label":"Handler composition",defaultValue:"first",children:[e.jsx(o,{value:"first",onClick:()=>t(l=>l+1),children:"First"}),e.jsx(o,{value:"second",onKeyDown:l=>n(l.key),children:"Second"}),e.jsx(i,{value:"first",children:"First content."}),e.jsx(i,{value:"second",children:"Second content."})]})]})},me={name:"Test: consumer handlers preserve tab interactions",parameters:{controls:{disable:!0}},render:()=>e.jsx(Va,{}),play:async({canvasElement:a})=>{const t=S(a),s=t.getByRole("tab",{name:"First"}),n=t.getByRole("tab",{name:"Second"}),l=t.getByTestId("consumer-events");await P.click(n),await d(n).toHaveAttribute("aria-selected","true"),await P.keyboard("{ArrowLeft}"),await d(s).toHaveAttribute("aria-selected","true"),await d(l).toHaveTextContent("last key: ArrowLeft"),await P.click(s),await d(l).toHaveTextContent("Clicks: 1")}},he={name:"Test: disabled first tab is not the default",parameters:{controls:{disable:!0}},render:a=>e.jsxs(g,{children:[e.jsx(m,{pb:"12",color:"text.subtlest",children:"No `defaultValue` is given and the first tab is disabled. The strip selects the first enabled tab so the keyboard can still enter it."}),e.jsxs(x,{...a,children:[e.jsx(o,{value:"archived",disabled:!0,children:"Archived"}),e.jsx(o,{value:"open",children:"Open"}),e.jsx(o,{value:"closed",children:"Closed"}),e.jsx(i,{value:"archived",children:e.jsx(m,{py:"16",children:"Archived content."})}),e.jsx(i,{value:"open",children:e.jsx(m,{py:"16",children:"Open content."})}),e.jsx(i,{value:"closed",children:e.jsx(m,{py:"16",children:"Closed content."})})]})]}),play:async({canvasElement:a})=>{const t=S(a),s=t.getByRole("tab",{name:"Open"});await d(s).toHaveAttribute("aria-selected","true"),await d(s).toHaveAttribute("tabindex","0"),await d(t.getByRole("tab",{name:"Archived"})).toHaveAttribute("aria-selected","false"),await P.tab(),await d(s).toHaveFocus()}},ve={name:"Test: badge does not change tab height",parameters:{controls:{disable:!0}},render:a=>e.jsxs(g,{display:"flex",flexDirection:"column",gap:"16",children:[e.jsx(m,{color:"text.subtlest",children:"Both strips are 40px tall. The 20px badge sits inside the 22px line box and never grows the tab. Matches Figma `_TabsTab`."}),e.jsxs(x,{...a,"aria-label":"Without badges",defaultValue:"work",children:[e.jsx(o,{value:"work",children:"Work"}),e.jsx(o,{value:"materials",children:"Materials"})]}),e.jsxs(x,{...a,"aria-label":"With badges",defaultValue:"work",children:[e.jsx(o,{value:"work",badge:3,children:"Work"}),e.jsx(o,{value:"materials",badge:12,badgeTooltip:"12 Short Part(s)",children:"Materials"})]})]}),play:async({canvasElement:a})=>{const t=S(a),[s,n]=t.getAllByRole("tablist");await d(n==null?void 0:n.offsetHeight).toBe(s==null?void 0:s.offsetHeight);for(const l of t.getAllByRole("tab"))await d(l.offsetHeight).toBe(40)}},fe=["Work","Info","Materials","Status"],we={name:"Test: toggle space is reserved only once tabs overflow",parameters:{controls:{disable:!0}},render:a=>e.jsxs(g,{children:[e.jsx(m,{pb:"12",color:"text.subtlest",children:"The wrapper is sized just above the strip width. Every tab fits, so no toggle renders. Shrinking it below the strip makes the measured toggle appear."}),e.jsx(g,{"data-fit-wrapper":!0,borderWidth:"1",borderStyle:"dashed",borderColor:"border",children:e.jsxs(x,{...a,defaultValue:"work",children:[fe.map(t=>e.jsx(o,{value:t.toLowerCase(),children:t},t)),fe.map(t=>e.jsx(i,{value:t.toLowerCase(),children:e.jsxs(m,{py:"16",children:[t," content."]})},t))]})})]}),play:async({canvasElement:a})=>{const t=S(a),s=a.querySelector("[data-fit-wrapper]"),n=t.getByRole("tablist"),l=t.getAllByRole("tab");if(!s)throw new Error("wrapper not found");const b=Number.parseFloat(getComputedStyle(n).columnGap)||0,f=l.reduce((w,T)=>w+T.getBoundingClientRect().width,0)+b*(l.length-1);s.style.width=`${String(Math.ceil(f)+16)}px`,await Y(async()=>{await d(t.getAllByRole("tab")).toHaveLength(fe.length),await d(t.queryByRole("button",{name:"More tabs"})).not.toBeInTheDocument()}),s.style.width=`${String(Math.floor(f)-8)}px`,await Y(async()=>{await d(t.getByRole("button",{name:"More tabs"})).toBeInTheDocument(),await d(t.getAllByRole("tab").length).toBeLessThan(fe.length)})}},ge={name:"Test: tabs grouped in fragments join the strip",parameters:{controls:{disable:!0}},render:a=>e.jsxs(x,{...a,"aria-label":"Fragment children",defaultValue:"work",children:[e.jsxs(e.Fragment,{children:[e.jsx(o,{value:"work",children:"Work"}),e.jsx(e.Fragment,{children:e.jsx(o,{value:"materials",children:"Materials"})})]}),e.jsxs(e.Fragment,{children:[e.jsx(i,{value:"work",children:"Work content."}),e.jsx(i,{value:"materials",children:"Materials content."})]})]}),play:async({canvasElement:a})=>{const t=S(a),s=t.getByRole("tablist"),n=t.getByRole("tab",{name:"Materials"});await d(S(s).getAllByRole("tab")).toHaveLength(2),await P.click(n),await d(n).toHaveAttribute("aria-selected","true"),await d(t.getByText("Materials content.")).toBeVisible()}},Fa=()=>{const a=r.useRef(null),[t,s]=r.useState("none");return e.jsxs(g,{children:[e.jsx(ke,{variant:"standard",mb:"8",onClick:()=>{var n;return s(((n=a.current)==null?void 0:n.tagName)??"none")},children:"Read ref"}),e.jsxs(m,{pb:"8","data-testid":"consumer-ref",children:["Ref: ",t]}),e.jsxs(x,{"aria-label":"Consumer ref",defaultValue:"first",children:[e.jsx(o,{value:"first",children:"First"}),e.jsx(o,{value:"second",ref:a,children:"Second"}),e.jsx(i,{value:"first",children:"First content."}),e.jsx(i,{value:"second",children:"Second content."})]})]})},ye={name:"Test: consumer ref keeps tab registration",parameters:{controls:{disable:!0}},render:()=>e.jsx(Fa,{}),play:async({canvasElement:a})=>{const t=S(a),s=t.getByRole("tab",{name:"First"}),n=t.getByRole("tab",{name:"Second"});await P.click(t.getByRole("button",{name:"Read ref"})),await d(t.getByTestId("consumer-ref")).toHaveTextContent("Ref: BUTTON"),await P.click(s),await P.keyboard("{ArrowRight}"),await d(n).toHaveAttribute("aria-selected","true"),await d(n).toHaveFocus()}},Te={name:"Test: badge tooltip opens on tab keyboard focus",parameters:{controls:{disable:!0}},render:a=>e.jsxs(x,{...a,"aria-label":"Badge tooltip",defaultValue:"materials",children:[e.jsx(o,{value:"materials",badge:3,badgeTooltip:"2 Open Part Requests",children:"Materials"}),e.jsx(o,{value:"status",children:"Status"}),e.jsx(i,{value:"materials",children:"Materials content."}),e.jsx(i,{value:"status",children:"Status content."})]}),play:async({canvasElement:a})=>{const t=S(a),s=S(a.ownerDocument.body),n=t.getByRole("tab",{name:/Materials/});await P.tab(),await d(n).toHaveFocus();const l=await s.findByRole("tooltip");await d(l).toHaveTextContent("2 Open Part Requests"),await d(n).toHaveAttribute("aria-describedby",l.id)}},Ia=()=>{const[a,t]=r.useState("alpha");return e.jsxs(g,{children:[e.jsxs(m,{pb:"8","data-testid":"deferred-value",children:["Parent value: ",a]}),e.jsx(g,{"data-deferred-wrapper":!0,children:e.jsxs(x,{"aria-label":"Deferred selection",value:a,onChange:(s,n)=>{globalThis.setTimeout(()=>t(n),300)},children:[e.jsx(o,{value:"alpha",children:"Alpha section"}),e.jsx(o,{value:"bravo",children:"Bravo section"}),e.jsx(o,{value:"charlie",children:"Charlie section"}),e.jsx(i,{value:"alpha",children:"Alpha content."}),e.jsx(i,{value:"bravo",children:"Bravo content."}),e.jsx(i,{value:"charlie",children:"Charlie content."})]})})]})},xe={name:"Test: deferred controlled selection keeps the focused tab visible",parameters:{controls:{disable:!0}},render:()=>e.jsx(Ia,{}),play:async({canvasElement:a})=>{const t=S(a),s=a.querySelector("[data-deferred-wrapper]");if(!s)throw new Error("deferred wrapper not found");const n=t.getByRole("tab",{name:"Alpha section"});s.style.width=`${String(Math.ceil(n.getBoundingClientRect().width)+48)}px`,await Y(async()=>{await d(t.getAllByRole("tab")).toHaveLength(1)}),await P.click(n),await P.keyboard("{ArrowRight}");const l=await t.findByRole("tab",{name:"Bravo section"});await d(l).toHaveFocus(),await d(t.getByTestId("deferred-value")).toHaveTextContent("Parent value: alpha"),await Y(async()=>{await d(t.getByTestId("deferred-value")).toHaveTextContent("Parent value: bravo")}),await d(l).toHaveAttribute("aria-selected","true"),await d(l).toHaveFocus()}},Wa=()=>{const[a,t]=r.useState("missing");return e.jsxs(g,{children:[e.jsxs(m,{pb:"8","data-testid":"empty-fallback-value",children:['Parent value: "',a,'"']}),e.jsxs(x,{"aria-label":"Empty fallback",value:a,onChange:(s,n)=>t(n),children:[e.jsx(o,{value:"",children:"Overview"}),e.jsx(o,{value:"details",children:"Details"}),e.jsx(i,{value:"",children:"Overview content."}),e.jsx(i,{value:"details",children:"Details content."})]}),e.jsx(g,{"data-empty-wrapper":!0,pt:"16",children:e.jsxs(x,{"aria-label":"Empty selected",defaultValue:"",children:[e.jsx(o,{value:"work",children:"Work section"}),e.jsx(o,{value:"materials",children:"Materials section"}),e.jsx(o,{value:"",children:"Summary section"}),e.jsx(i,{value:"work",children:"Work content."}),e.jsx(i,{value:"materials",children:"Materials content."}),e.jsx(i,{value:"",children:"Summary content."})]})})]})},je={name:"Test: an empty-string tab value is a real selection",parameters:{controls:{disable:!0}},render:()=>e.jsx(Wa,{}),play:async({canvasElement:a})=>{const t=S(a);await Y(async()=>{await d(t.getByTestId("empty-fallback-value")).toHaveTextContent('Parent value: ""')}),await d(t.getByRole("tab",{name:"Overview"})).toHaveAttribute("aria-selected","true");const s=a.querySelector("[data-empty-wrapper]");if(!s)throw new Error("empty wrapper not found");const n=t.getByRole("tab",{name:"Summary section"});s.style.width=`${String(Math.ceil(n.getBoundingClientRect().width)+48)}px`;const l=t.getByRole("tablist",{name:"Empty selected"});await Y(async()=>{await d(S(l).getAllByRole("tab")).toHaveLength(1)});const b=S(l).getByRole("tab",{name:"Summary section"});await d(b).toHaveAttribute("aria-selected","true"),await d(b).toHaveAttribute("tabindex","0")}};var We,Le,Ne;re.parameters={...re.parameters,docs:{...(We=re.parameters)==null?void 0:We.docs,source:{originalSource:`{
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
}`,...(Ne=(Le=re.parameters)==null?void 0:Le.docs)==null?void 0:Ne.source}}};var _e,qe,De;oe.parameters={...oe.parameters,docs:{...(_e=oe.parameters)==null?void 0:_e.docs,source:{originalSource:`{
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
}`,...(De=(qe=oe.parameters)==null?void 0:qe.docs)==null?void 0:De.source}}};var ze,$e,Ke;le.parameters={...le.parameters,docs:{...(ze=le.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
}`,...(Ke=($e=le.parameters)==null?void 0:$e.docs)==null?void 0:Ke.source}}};var Ue,Ge,Qe;ie.parameters={...ie.parameters,docs:{...(Ue=ie.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
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
}`,...(Qe=(Ge=ie.parameters)==null?void 0:Ge.docs)==null?void 0:Qe.source}}};var Ye,Je,Xe;ce.parameters={...ce.parameters,docs:{...(Ye=ce.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
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
}`,...(Xe=(Je=ce.parameters)==null?void 0:Je.docs)==null?void 0:Xe.source}}};var Ze,et,tt;de.parameters={...de.parameters,docs:{...(Ze=de.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
  name: 'Ex: Work View',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <WorkView />
}`,...(tt=(et=de.parameters)==null?void 0:et.docs)==null?void 0:tt.source}}};var at,nt,st;ue.parameters={...ue.parameters,docs:{...(at=ue.parameters)==null?void 0:at.docs,source:{originalSource:`{
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
}`,...(st=(nt=ue.parameters)==null?void 0:nt.docs)==null?void 0:st.source}}};var rt,ot,lt;be.parameters={...be.parameters,docs:{...(rt=be.parameters)==null?void 0:rt.docs,source:{originalSource:`{
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
}`,...(lt=(ot=be.parameters)==null?void 0:ot.docs)==null?void 0:lt.source}}};var it,ct,dt;pe.parameters={...pe.parameters,docs:{...(it=pe.parameters)==null?void 0:it.docs,source:{originalSource:`{
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
}`,...(dt=(ct=pe.parameters)==null?void 0:ct.docs)==null?void 0:dt.source}}};var ut,bt,pt;me.parameters={...me.parameters,docs:{...(ut=me.parameters)==null?void 0:ut.docs,source:{originalSource:`{
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
}`,...(pt=(bt=me.parameters)==null?void 0:bt.docs)==null?void 0:pt.source}}};var mt,ht,vt;he.parameters={...he.parameters,docs:{...(mt=he.parameters)==null?void 0:mt.docs,source:{originalSource:`{
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
}`,...(vt=(ht=he.parameters)==null?void 0:ht.docs)==null?void 0:vt.source}}};var ft,wt,gt;ve.parameters={...ve.parameters,docs:{...(ft=ve.parameters)==null?void 0:ft.docs,source:{originalSource:`{
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
}`,...(gt=(wt=ve.parameters)==null?void 0:wt.docs)==null?void 0:gt.source}}};var yt,Tt,xt;we.parameters={...we.parameters,docs:{...(yt=we.parameters)==null?void 0:yt.docs,source:{originalSource:`{
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
}`,...(xt=(Tt=we.parameters)==null?void 0:Tt.docs)==null?void 0:xt.source}}};var jt,kt,Rt;ge.parameters={...ge.parameters,docs:{...(jt=ge.parameters)==null?void 0:jt.docs,source:{originalSource:`{
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
}`,...(Rt=(kt=ge.parameters)==null?void 0:kt.docs)==null?void 0:Rt.source}}};var St,Bt,Et;ye.parameters={...ye.parameters,docs:{...(St=ye.parameters)==null?void 0:St.docs,source:{originalSource:`{
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
}`,...(Et=(Bt=ye.parameters)==null?void 0:Bt.docs)==null?void 0:Et.source}}};var Pt,Ct,Ht;Te.parameters={...Te.parameters,docs:{...(Pt=Te.parameters)==null?void 0:Pt.docs,source:{originalSource:`{
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
}`,...(Ht=(Ct=Te.parameters)==null?void 0:Ct.docs)==null?void 0:Ht.source}}};var At,Mt,Ot;xe.parameters={...xe.parameters,docs:{...(At=xe.parameters)==null?void 0:At.docs,source:{originalSource:`{
  name: 'Test: deferred controlled selection keeps the focused tab visible',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <DeferredControlledTabs />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const wrapper = canvasElement.querySelector<HTMLElement>('[data-deferred-wrapper]');
    if (!wrapper) throw new Error('deferred wrapper not found');
    const alpha = canvas.getByRole('tab', {
      name: 'Alpha section'
    });
    // Room for the selected tab and the toggle only.
    wrapper.style.width = \`\${String(Math.ceil(alpha.getBoundingClientRect().width) + 48)}px\`;
    await waitFor(async () => {
      await expect(canvas.getAllByRole('tab')).toHaveLength(1);
    });
    await userEvent.click(alpha);
    await userEvent.keyboard('{ArrowRight}');

    // Before the parent commits, the requested tab stays visible and focused.
    const bravo = await canvas.findByRole('tab', {
      name: 'Bravo section'
    });
    await expect(bravo).toHaveFocus();
    await expect(canvas.getByTestId('deferred-value')).toHaveTextContent('Parent value: alpha');
    await waitFor(async () => {
      await expect(canvas.getByTestId('deferred-value')).toHaveTextContent('Parent value: bravo');
    });
    await expect(bravo).toHaveAttribute('aria-selected', 'true');
    await expect(bravo).toHaveFocus();
  }
}`,...(Ot=(Mt=xe.parameters)==null?void 0:Mt.docs)==null?void 0:Ot.source}}};var Vt,Ft,It;je.parameters={...je.parameters,docs:{...(Vt=je.parameters)==null?void 0:Vt.docs,source:{originalSource:`{
  name: 'Test: an empty-string tab value is a real selection',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <EmptyStringValueTabs />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Fallback notifies the parent even when the first tab's value is ''.
    await waitFor(async () => {
      await expect(canvas.getByTestId('empty-fallback-value')).toHaveTextContent('Parent value: ""');
    });
    await expect(canvas.getByRole('tab', {
      name: 'Overview'
    })).toHaveAttribute('aria-selected', 'true');

    // A selected '' tab stays visible in a narrow strip and keeps the tab stop.
    const wrapper = canvasElement.querySelector<HTMLElement>('[data-empty-wrapper]');
    if (!wrapper) throw new Error('empty wrapper not found');
    const summary = canvas.getByRole('tab', {
      name: 'Summary section'
    });
    wrapper.style.width = \`\${String(Math.ceil(summary.getBoundingClientRect().width) + 48)}px\`;
    const list = canvas.getByRole('tablist', {
      name: 'Empty selected'
    });
    await waitFor(async () => {
      await expect(within(list).getAllByRole('tab')).toHaveLength(1);
    });
    const visible = within(list).getByRole('tab', {
      name: 'Summary section'
    });
    await expect(visible).toHaveAttribute('aria-selected', 'true');
    await expect(visible).toHaveAttribute('tabindex', '0');
  }
}`,...(It=(Ft=je.parameters)==null?void 0:Ft.docs)==null?void 0:It.source}}};const bn=["Default","WithBadges","Overflow","LabelOverride","UnmountInactive","ExWorkView","ControlledFallback","UncontrolledFallback","OverflowMetadata","ComposedTabHandlers","DisabledFirstTab","BadgeKeepsHeight","ToggleReserveOnlyOnOverflow","FragmentChildren","ConsumerRef","BadgeTooltipOnFocus","DeferredControlledOverflow","EmptyStringValue"];export{ve as BadgeKeepsHeight,Te as BadgeTooltipOnFocus,me as ComposedTabHandlers,ye as ConsumerRef,ue as ControlledFallback,re as Default,xe as DeferredControlledOverflow,he as DisabledFirstTab,je as EmptyStringValue,de as ExWorkView,ge as FragmentChildren,ie as LabelOverride,le as Overflow,pe as OverflowMetadata,we as ToggleReserveOnlyOnOverflow,be as UncontrolledFallback,ce as UnmountInactive,oe as WithBadges,bn as __namedExportsOrder,un as default};
