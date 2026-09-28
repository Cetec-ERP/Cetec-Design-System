import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as n}from"./index-BKyFwriW.js";import{w as F,e as g,u as q,a as me}from"./index-L8OlCEhE.js";import{m as xt,a as yt,b as kt,e as jt,g as St,s as fe,B as y,c as Te,d as Rt}from"./dsComponent-BG2jnRr7.js";import{B as we}from"./Button-Cr4bC5CG.js";import{I as Pt}from"./Icon-CrwLKW7B.js";import"./IconConfig-BuieZFlx.js";import{T as p}from"./Text-IAtRPmZy.js";import{g as Bt,s as pt,M as Et,a as Ct}from"./SubMenu-DuINAr8p.js";import{B as je}from"./Badge-DBgIjuLw.js";import{T as At}from"./Tooltip-bxPM6yCH.js";import{I as ht}from"./IconButton-DXX-zVMP.js";import{u as Ht}from"./useControllableState-ByGfjEIG.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Spinner-PLunUSsK.js";import"./FieldContext-D6URyQos.js";import"./HighlightText-DKF3xkQK.js";import"./menu-DMiDM6i6.js";import"./FloatingLayerContext-BryH8O9I.js";import"./ListItemGroup-C6Yw6dSd.js";import"./Divider-Dbp7vcYx.js";import"./Checkbox-BKc0omfg.js";import"./Toggle-mlz1wkXL.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";const mt={hasOverflow:!1},Mt=[],Ot=[["root","tabs__root"],["strip","tabs__strip"],["list","tabs__list"],["tab","tabs__tab"],["badge","tabs__badge"],["overflow","tabs__overflow"],["menu","tabs__menu"],["panel","tabs__panel"]],It=Ot.map(([t,a])=>[t,jt(a,mt,St(Mt,t))]),Vt=xt((t={})=>Object.fromEntries(It.map(([a,s])=>[a,s.recipeFn(t)]))),Se=["hasOverflow","overflowed"],Wt=t=>({...mt,...yt(t)}),vt=Object.assign(Vt,{__recipe__:!1,__name__:"tabs",raw:t=>t,classNameMap:{},variantKeys:Se,variantMap:{hasOverflow:["false","true"],overflowed:["true"]},splitVariantProps(t){return kt(t,Se)},getVariantProps:Wt}),_t=32,G=(t,a)=>t.length===a.length&&t.every((s,r)=>s===a[r]),Lt=(t,a,s)=>{for(const r of a)s.has(r)||t==null||t.unobserve(r);for(const r of s)a.has(r)||t==null||t.observe(r);return s},Nt=({items:t,containerRef:a,getItemElement:s,activeItem:r=null,reserve:i=_t,reserveRef:m,enabled:h=!0})=>{const[v,w]=n.useState(()=>[...t]),[T,P]=n.useState([]),[C,M]=n.useState(null),x=n.useRef(null),S=n.useRef(t),B=n.useRef(r),O=n.useRef(C),_=n.useRef(i),I=n.useRef(null),V=n.useRef(h),A=n.useRef(null),W=n.useRef(new Set),k=n.useRef(null),H=n.useCallback(()=>{var ye;const b=a.current,o=S.current;if(!V.current||!b){w(f=>G(f,o)?f:[...o]),P(f=>f.length===0?f:[]);return}const c=globalThis.getComputedStyle(b),u=Number.parseFloat(c.paddingLeft||"0")+Number.parseFloat(c.paddingRight||"0"),R=Number.parseFloat(c.columnGap||"0")||0,L=b.clientWidth-u,z=o.map(f=>{var E;return((E=s(f))==null?void 0:E.offsetWidth)??Number.POSITIVE_INFINITY}),K=O.current??B.current,$=K===null?-1:o.indexOf(K),xe=$===-1?0:$,gt=o.map((f,E)=>E).sort((f,E)=>{const N=Math.abs(f-xe)-Math.abs(E-xe);return N===0?f-E:N}),de=(f,E)=>{const N=new Set;let pe=0;f!==null&&(N.add(f),pe+=z[f]??0);for(const he of gt){if(N.has(he))continue;const ke=(z[he]??0)+(N.size>0?R:0);if(pe+ke>E)break;pe+=ke,N.add(he)}return N};let U=de(null,L);if(U.size<o.length){const f=((ye=I.current)==null?void 0:ye.offsetWidth)??_.current,E=L-f;U=de(null,E),$!==-1&&!U.has($)&&(U=de($,E))}const ue=[],be=[];o.forEach((f,E)=>{U.has(E)?ue.push(f):be.push(f)}),w(f=>G(f,ue)?f:ue),P(f=>G(f,be)?f:be)},[a,s]),D=n.useCallback((b,o)=>{if(S.current.includes(b)){if(!T.includes(b)){o==null||o();return}k.current={key:b,onVisible:o},M(b)}},[T]);return n.useLayoutEffect(()=>{const b=()=>{x.current!==null&&globalThis.cancelAnimationFrame(x.current),x.current=globalThis.requestAnimationFrame(()=>{x.current=null,H()})},o=typeof ResizeObserver>"u"?null:new ResizeObserver(b);return A.current=o,globalThis.addEventListener("resize",b),()=>{o==null||o.disconnect(),A.current=null,W.current.clear(),globalThis.removeEventListener("resize",b),x.current!==null&&(globalThis.cancelAnimationFrame(x.current),x.current=null)}},[H]),n.useLayoutEffect(()=>{G(S.current,t)||(S.current=[...t]),B.current=r,O.current=C,_.current=i,I.current=(m==null?void 0:m.current)??null,V.current=h;const b=new Set,o=a.current;if(h&&o){b.add(o),I.current&&b.add(I.current);for(const c of S.current){const u=s(c);u&&b.add(u)}}W.current=Lt(A.current,W.current,b),H()},[r,a,h,C,s,t,H,i,m]),n.useLayoutEffect(()=>{var o;const b=k.current;if(b){if(!S.current.includes(b.key)){k.current=null,M(null);return}T.includes(b.key)||(k.current=null,(o=b.onVisible)==null||o.call(b),M(null))}},[T]),{visible:v,overflow:T,hasOverflow:T.length>0,measure:H,ensureVisible:D}},ft=n.createContext(null),qt=n.createContext(!0),Ft=ft.Provider,Dt=qt.Provider,Tt=()=>{const t=n.useContext(ft);if(!t)throw new Error("Tabs compound components must be used within <Tabs />");return t},ce={tab:"Tab",panel:"TabPanel"},ge="__tabsComponentType",wt=t=>Bt(t,ge),zt=vt({overflowed:!0}).tab,l=t=>{const{value:a,children:s,label:r,badge:i,badgeTooltip:m,disabled:h=!1,onClick:v,onKeyDown:w,...T}=t,{classes:P,getPanelId:C,getTabId:M,onTabKeyDown:x,overflowValues:S,registerTabElement:B,selectTab:O,selectedValue:_}=Tt(),I=_===a,V=S.includes(a),[A,W]=fe(T),k=n.useCallback(o=>{B(a,o)},[B,a]),H=V?zt:P.tab,b=typeof i=="number"&&i!==0?e.jsx(y,{className:P.badge,children:m?e.jsx(At,{text:m,children:e.jsx(je,{count:i,variant:"subtle"})}):e.jsx(je,{count:i,variant:"subtle"})}):null;return e.jsxs(y,{as:"button",type:"button",ref:k,id:M(a),role:"tab","aria-selected":I,"aria-controls":C(a),"aria-hidden":V||void 0,disabled:h,tabIndex:I&&!V?0:-1,className:Te(H,A),onClick:o=>{v==null||v(o),!(h||o.defaultPrevented)&&O(o,a,"clicked-on-tab")},onKeyDown:o=>{w==null||w(o),o.defaultPrevented||x(o)},...W,children:[s,b]})};pt(l,ge,ce.tab);l.__docgenInfo={description:'Selects one panel inside a {@link Tabs} strip.\n\nRenders a `button` with `role="tab"`. Only the selected tab is in the tab\norder; Arrow, Home, and End move between the others. A tab that does not fit\nthe strip stays mounted but hidden so it can still be measured, and it is\noffered in the overflow menu instead. The menu row is plain text, so give\n`label` when `children` are not plain text.\n\n@example\n```tsx\n<Tab value="materials" badge={3} badgeTooltip="2 Open Part Request">\n  Materials\n</Tab>\n```',methods:[],displayName:"Tab",props:{value:{required:!0,tsType:{name:"string"},description:"Identifies the tab and the `TabPanel` it controls. Must be unique within a `Tabs`."},children:{required:!1,tsType:{name:"ReactNode"},description:"Visible label rendered in the strip. Plain text is also reused as the overflow-menu row's text unless `label` overrides it."},label:{required:!1,tsType:{name:"string"},description:"Plain-text name for this tab's overflow-menu row, which cannot render\nmarkup. Set it when `children` contain more than text — an icon, a nested\nelement — because flattening those to a string reads badly. It never\nchanges what the strip renders: `children` still render there as-is.\nWithout it the menu row falls back to the flattened `children`, then to\n`value`."},badge:{required:!1,tsType:{name:"number"},description:"Count shown in a trailing {@link Badge}. A zero or omitted count renders no badge."},badgeTooltip:{required:!1,tsType:{name:"string"},description:"Tooltip text describing what the badge counts. Requires `badge`."},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents selection and skips the tab during arrow-key navigation."}}};const d=t=>{const{value:a,children:s,...r}=t,{classes:i,getPanelId:m,getTabId:h,selectedValue:v,unmountInactive:w}=Tt(),T=v===a,[P,C]=fe(r);if(w&&!T)return null;const x=typeof s=="function"?s({isActive:T}):s;return e.jsx(Dt,{value:T,children:e.jsx(y,{id:m(a),role:"tabpanel","aria-labelledby":h(a),tabIndex:T?0:-1,display:T?"block":"none",className:Te(i.panel,P),...C,children:x})})};pt(d,ge,ce.panel);d.__docgenInfo={description:'Renders the content for one {@link Tab}.\n\nThe panel stays mounted when another tab is selected and is hidden with\n`display: none`, which preserves scroll position and local state; set\n`unmountInactive` on `Tabs` to render only the selected panel instead. A\nfunction child receives `{ isActive }`, and descendants can call\n`useTabPanelActive()` for the same signal, so hidden panels can pause polling\nor animation.\n\n@example\n```tsx\n<TabPanel value="materials">\n  {({ isActive }) => <MaterialsGrid paused={!isActive} />}\n</TabPanel>\n```',methods:[],displayName:"TabPanel",props:{value:{required:!0,tsType:{name:"string"},description:"`value` of the {@link Tab} this panel belongs to."},children:{required:!1,tsType:{name:"union",raw:"ReactNode | ((props: TabPanelRenderProps) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:"Panel content. A function child receives `{ isActive }` so expensive work\ncan pause while the panel is mounted but hidden."}}};const ve=t=>t==null||typeof t=="boolean"?"":typeof t=="string"||typeof t=="number"?String(t):Array.isArray(t)?t.map(a=>ve(a)).join(""):n.isValidElement(t)?ve(t.props.children):"",Kt=({children:t,value:a,defaultValue:s,onChange:r,listRef:i,overflowRef:m})=>{var o;const h=n.useMemo(()=>{const c=[];return n.Children.forEach(t,u=>{if(!n.isValidElement(u)||wt(u)!==ce.tab)return;const R=u.props;typeof R.value=="string"&&c.push({value:R.value,label:R.label||ve(R.children)||R.value,disabled:!!R.disabled,badge:R.badge,badgeTooltip:R.badgeTooltip})}),c},[t]),v=n.useMemo(()=>h.map(c=>c.value),[h]),w=((o=h.find(c=>!c.disabled))==null?void 0:o.value)??"",[T,P,C]=Ht({value:a,defaultValue:s??w}),M=h.find(c=>c.value===T),x=!!(M&&!M.disabled),S=x?T:w,B=n.useRef(null);n.useEffect(()=>{if(x){B.current=null;return}const c=`${T}\0${w}`;B.current!==c&&(B.current=c,C||P(w),w!==""&&(r==null||r(null,w,"fallback-after-removal")))},[w,C,x,r,P,T]);const O=n.useRef(new Map),_=n.useCallback((c,u)=>{u?O.current.set(c,u):O.current.delete(c)},[]),I=n.useCallback(c=>O.current.get(c)??null,[]),{ensureVisible:V,overflow:A,hasOverflow:W}=Nt({items:v,containerRef:i,getItemElement:I,activeItem:S||null,reserveRef:m}),k=n.useCallback((c,u,R)=>{u!==T&&(P(u),r==null||r(c,u,R))},[r,P,T]),H=n.useCallback(c=>{V(c,()=>{var u;(u=O.current.get(c))==null||u.focus()})},[V]),D=n.useCallback(c=>{const u=h.filter(K=>!K.disabled).map(K=>K.value);if(u.length===0)return;const R=Math.max(0,u.indexOf(S));let L;switch(c.key){case"ArrowRight":L=(R+1)%u.length;break;case"ArrowLeft":L=(R-1+u.length)%u.length;break;case"Home":L=0;break;case"End":L=u.length-1;break;default:return}c.preventDefault();const z=u[L];z!==void 0&&(k(c,z,"clicked-on-tab"),H(z))},[H,k,S,h]),b=n.useMemo(()=>A.map(c=>h.find(u=>u.value===c)).filter(c=>!!c),[A,h]);return{hasOverflow:W,focusTab:H,onTabKeyDown:D,overflowTabs:b,overflowValues:A,registerTabElement:_,selectTab:k,selectedValue:S,tabs:h}},$t=({className:t,focusTab:a,tabs:s,selectTab:r,selectedValue:i})=>{const[m,h]=n.useState(!1);return e.jsx(Et,{open:m,onOpenChange:h,placement:"bottom-end",className:t,trigger:e.jsx(ht,{variant:"ghost",size:"md",iconName:m?"caret-up":"caret-down",altText:"More tabs","aria-haspopup":"menu"}),children:s.map(v=>{const w=typeof v.badge=="number"&&v.badge!==0;return e.jsx(Ct,{label:w?`${v.label} (${String(v.badge)})`:v.label,description:w?v.badgeTooltip:void 0,disabled:v.disabled,selected:v.value===i,role:"menuitemradio","aria-checked":v.value===i,onClick:T=>{r(T,v.value,"selected-from-overflow"),a(v.value),h(!1)}},v.value)})})},j=t=>{const{children:a,value:s,defaultValue:r,onChange:i,unmountInactive:m=!1,"aria-label":h,"aria-labelledby":v,...w}=t,[T,P]=fe(w),C=n.useRef(null),M=n.useRef(null),x=n.useId(),{focusTab:S,hasOverflow:B,onTabKeyDown:O,overflowTabs:_,overflowValues:I,registerTabElement:V,selectTab:A,selectedValue:W}=Kt({children:a,value:s,defaultValue:r,onChange:i,listRef:C,overflowRef:M}),k=n.useMemo(()=>vt({hasOverflow:B}),[B]),[H,D]=n.useMemo(()=>{const o=[],c=[];return n.Children.forEach(a,u=>{wt(u)===ce.tab?o.push(u):c.push(u)}),[o,c]},[a]),b=n.useMemo(()=>({classes:k,getPanelId:o=>`${x}-panel-${o}`,getTabId:o=>`${x}-tab-${o}`,onTabKeyDown:O,overflowValues:I,registerTabElement:V,selectTab:A,selectedValue:W,unmountInactive:m}),[x,k,O,I,V,A,W,m]);return e.jsx(Ft,{value:b,children:e.jsxs(y,{...Rt("Tabs"),className:Te(k.root,T),...P,children:[e.jsxs(y,{className:k.strip,children:[e.jsx(y,{ref:C,role:"tablist","aria-label":h,"aria-labelledby":v,"aria-orientation":"horizontal",className:k.list,children:H}),e.jsx(y,{ref:M,className:k.overflow,"aria-hidden":!B||void 0,children:B?e.jsx($t,{className:k.menu,focusTab:S,tabs:_,selectTab:A,selectedValue:W}):e.jsx(ht,{variant:"ghost",size:"md",iconName:"caret-down",altText:"More tabs",disabled:!0,tabIndex:-1})})]}),D]})})};j.__docgenInfo={description:'Groups related content into a single view with one panel visible at a time.\n\nCompose it from `Tab` and `TabPanel` children; the first enabled `Tab` is\nselected by default. Selection is uncontrolled with `defaultValue` or\ncontrolled with `value` plus `onChange`. Tabs that do not fit the available width move into\nan overflow menu at the end of the strip, and the selected tab always stays\nvisible. Every panel stays mounted and hidden unless `unmountInactive` is\nset, so read `useTabPanelActive()` to pause work in a hidden panel.\n\nThe strip renders a `tablist` with roving tabindex and Arrow, Home, and End\nnavigation. Supply `aria-label` or `aria-labelledby` so it is announced.\n\n@example\n```tsx\n<Tabs defaultValue="work" aria-label="Order sections">\n  <Tab value="work">Work</Tab>\n  <Tab value="materials" badge={3}>Materials</Tab>\n  <TabPanel value="work">Work content</TabPanel>\n  <TabPanel value="materials">Materials content</TabPanel>\n</Tabs>\n```',methods:[],displayName:"Tabs",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"`Tab` and `TabPanel` children. Tab order in the strip follows source order."},value:{required:!1,tsType:{name:"string"},description:"Controlled selected tab `value`. Pair with `onChange`; omit it to use `defaultValue`."},defaultValue:{required:!1,tsType:{name:"string"},description:"Initially selected tab `value` when `value` is not provided. It is used\nonly on first render.\n@default the first `Tab` child's `value`"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  event: TabsChangeEvent,
  value: string,
  reason: TabsChangeReason,
) => void`,signature:{arguments:[{type:{name:"union",raw:`| ReactMouseEvent<HTMLElement>
| ReactKeyboardEvent<HTMLElement>
| null`,elements:[{name:"ReactMouseEvent",elements:[{name:"HTMLElement"}],raw:"ReactMouseEvent<HTMLElement>"},{name:"ReactKeyboardEvent",elements:[{name:"HTMLElement"}],raw:"ReactKeyboardEvent<HTMLElement>"},{name:"null"}]},name:"event"},{type:{name:"string"},name:"value"},{type:{name:"union",raw:`| 'clicked-on-tab'
| 'selected-from-overflow'
| 'fallback-after-removal'`,elements:[{name:"literal",value:"'clicked-on-tab'"},{name:"literal",value:"'selected-from-overflow'"},{name:"literal",value:"'fallback-after-removal'"}]},name:"reason"}],return:{name:"void"}}},description:"Runs when user interaction selects a different tab."},unmountInactive:{required:!1,tsType:{name:"boolean"},description:"Renders only the selected `TabPanel`. By default every panel stays mounted\nand inactive panels are hidden with `display: none`, which preserves their\nscroll position and local state.\n@default false"},"aria-label":{required:!1,tsType:{name:"string"},description:"Accessible name for the tab strip. Provide this or `aria-labelledby` so the\n`tablist` is announced."},"aria-labelledby":{required:!1,tsType:{name:"string"},description:"Id of an element that labels the tab strip."}}};const ya={title:"Components/Tabs",component:j,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:["Tabs keep every `TabPanel` mounted by default and hide the inactive","ones with `display: none`. That preserves scroll position, form","drafts, and grid state when a user moves between tabs, at the cost","of keeping hidden work alive. Hidden panels receive an `isActive`","signal — as a render-prop argument or through `useTabPanelActive()`","— so polling, timers, and animation can pause themselves. Set","`unmountInactive` when a panel is expensive enough that discarding","its state is the better trade."].join(" ")}}},args:{"aria-label":"Example sections",children:null}},Q={render:t=>e.jsxs(j,{...t,defaultValue:"overview",children:[e.jsx(l,{value:"overview",children:"Overview"}),e.jsx(l,{value:"activity",children:"Activity"}),e.jsx(l,{value:"settings",children:"Settings"}),e.jsx(d,{value:"overview",children:e.jsx(p,{py:"16",children:"Summary of the current record."})}),e.jsx(d,{value:"activity",children:e.jsx(p,{py:"16",children:"Recent activity for the current record."})}),e.jsx(d,{value:"settings",children:e.jsx(p,{py:"16",children:"Settings for the current record."})})]})},Y={name:"Badges",parameters:{controls:{disable:!0}},render:t=>e.jsxs(j,{...t,defaultValue:"work",children:[e.jsx(l,{value:"work",children:"Work"}),e.jsx(l,{value:"materials",badge:3,badgeTooltip:"2 Open Part Request, 1 Short Part(s)",children:"Materials"}),e.jsx(l,{value:"status",badge:12,children:"Status"}),e.jsx(l,{value:"documents",badge:0,children:"Documents"}),e.jsx(d,{value:"work",children:e.jsx(p,{py:"16",children:"A badge without a tooltip is a bare count."})}),e.jsx(d,{value:"materials",children:e.jsx(p,{py:"16",children:"Hover or focus the Materials badge to read what the count means."})}),e.jsx(d,{value:"status",children:e.jsx(p,{py:"16",children:"Status content."})}),e.jsx(d,{value:"documents",children:e.jsx(p,{py:"16",children:"A zero count renders no badge at all."})})]})},Re=["Work","Info","Materials","Status","Documents","History","Labor","Quality","Shipping","Invoicing","Costing","Notes"],J={name:"Overflow",parameters:{controls:{disable:!0}},render:t=>e.jsxs(y,{resize:"horizontal",overflow:"auto",width:"lg",maxWidth:"full",minWidth:"240",borderWidth:"1",borderStyle:"dashed",borderColor:"border",p:"16",children:[e.jsx(p,{pb:"12",color:"text.subtlest",children:"Drag the bottom-right corner. Tabs nearest the selected one keep their place; the rest move into the overflow menu."}),e.jsxs(j,{...t,defaultValue:"work",children:[Re.map(a=>e.jsx(l,{value:a.toLowerCase(),children:a},a)),Re.map(a=>e.jsx(d,{value:a.toLowerCase(),children:e.jsxs(p,{py:"16",children:[a," content."]})},a))]})]})},Pe=[{value:"work",label:"Work",icon:"wrench-2"},{value:"materials",label:"Materials",icon:"cube-focus"},{value:"schedule",label:"Schedule",icon:"calendar-view-week"},{value:"shipping",label:"Shipping",icon:"truck-trailer"},{value:"quality",label:"Quality",icon:"list-checks"},{value:"history",label:"History",icon:"clock-countdown"},{value:"notes",label:"Notes",icon:"note-stack"}],X={name:"Label Override for Overflow",parameters:{controls:{disable:!0}},render:t=>e.jsxs(y,{width:"md",maxWidth:"full",children:[e.jsx(p,{pb:"12",color:"text.subtlest",children:"These tabs render an icon beside their text, so flattening `children` would produce a poor menu row. Each one passes `label`, and the overflow menu uses that text. The strip still renders `children` as-is."}),e.jsxs(j,{...t,defaultValue:"work",children:[Pe.map(a=>e.jsxs(l,{value:a.value,label:a.label,children:[e.jsx(Pt,{name:a.icon,"aria-hidden":!0}),a.label]},a.value)),Pe.map(a=>e.jsx(d,{value:a.value,children:e.jsxs(p,{py:"16",children:[a.label," content."]})},a.value))]})]})},Z={name:"Unmount Inactive Panels",parameters:{controls:{disable:!0}},render:t=>e.jsxs(j,{...t,defaultValue:"first",unmountInactive:!0,children:[e.jsx(l,{value:"first",children:"First"}),e.jsx(l,{value:"second",children:"Second"}),e.jsx(d,{value:"first",children:e.jsx(p,{py:"16",children:"Only this panel exists in the DOM while it is selected."})}),e.jsx(d,{value:"second",children:e.jsx(p,{py:"16",children:"Switching tabs unmounts the other panel and discards its state."})})]})},Ut=()=>{const[t,a]=n.useState(!0),[s,r]=n.useState("none yet");return e.jsxs(y,{children:[e.jsx(y,{pb:"12",children:e.jsx(we,{variant:"hollow",size:"sm",onClick:()=>a(i=>!i),children:t?"Remove Schedule tab":"Add Schedule tab"})}),e.jsxs(j,{"aria-label":"Work order sections",defaultValue:"work",onChange:(i,m,h)=>r(`${m} (${h})`),children:[e.jsx(l,{value:"work",children:"Work"}),e.jsx(l,{value:"info",children:"Info"}),e.jsx(l,{value:"materials",badge:3,badgeTooltip:"2 Open Part Request, 1 Short Part(s)",children:"Materials"}),e.jsx(l,{value:"status",badge:5,badgeTooltip:"5 Operations Behind",children:"Status"}),t?e.jsx(l,{value:"schedule",children:"Schedule"}):null,e.jsx(l,{value:"documents",children:"Documents"}),e.jsx(l,{value:"history",children:"History"}),e.jsx(d,{value:"work",children:e.jsx(p,{py:"16",children:"Work instructions and operations."})}),e.jsx(d,{value:"info",children:e.jsx(p,{py:"16",children:"Order header and customer details."})}),e.jsx(d,{value:"materials",children:e.jsx(p,{py:"16",children:"Bill of materials and part requests."})}),e.jsx(d,{value:"status",children:e.jsx(p,{py:"16",children:"Operation status roll-up."})}),e.jsx(d,{value:"schedule",children:({isActive:i})=>e.jsxs(p,{py:"16",children:["Schedule board. Live refresh is ",i?"running":"paused",". Select this tab, remove it with the button above, and the strip falls back to the first remaining tab."]})}),e.jsx(d,{value:"documents",children:e.jsx(p,{py:"16",children:"Attached drawings and travelers."})}),e.jsx(d,{value:"history",children:e.jsx(p,{py:"16",children:"Audit trail."})})]}),e.jsxs(p,{pt:"16",color:"text.subtlest",children:["Last change: ",s]})]})},ee={name:"Ex: Work View",parameters:{controls:{disable:!0}},render:()=>e.jsx(Ut,{})},Gt=()=>{const[t,a]=n.useState(!0),[s,r]=n.useState("schedule");return e.jsxs(y,{children:[e.jsx(we,{variant:"hollow",size:"sm",onClick:()=>a(i=>!i),children:t?"Remove Schedule tab":"Add Schedule tab"}),e.jsxs(p,{py:"8","data-testid":"controlled-value",children:["Parent value: ",s]}),e.jsxs(j,{"aria-label":"Controlled sections",value:s,onChange:(i,m)=>r(m),children:[e.jsx(l,{value:"work",children:"Work"}),t?e.jsx(l,{value:"schedule",children:"Schedule"}):null,e.jsx(l,{value:"history",children:"History"}),e.jsx(d,{value:"work",children:"Work content."}),e.jsx(d,{value:"schedule",children:"Schedule content."}),e.jsx(d,{value:"history",children:"History content."})]})]})},te={name:"Test: controlled value follows a removed tab",parameters:{controls:{disable:!0}},render:()=>e.jsx(Gt,{}),play:async({canvasElement:t})=>{const a=F(t);await g(a.getByRole("tab",{name:"Schedule"})).toHaveAttribute("aria-selected","true"),await q.click(a.getByRole("button",{name:"Remove Schedule tab"})),await me(async()=>{await g(a.getByTestId("controlled-value")).toHaveTextContent("Parent value: work"),await g(a.getByRole("tab",{name:"Work"})).toHaveAttribute("aria-selected","true")})}},Qt=()=>{const[t,a]=n.useState(!0);return e.jsxs(y,{children:[e.jsx(we,{variant:"hollow",size:"sm",onClick:()=>a(s=>!s),children:t?"Remove Schedule tab":"Add Schedule tab"}),e.jsxs(j,{"aria-label":"Uncontrolled sections",defaultValue:"schedule",children:[e.jsx(l,{value:"work",children:"Work"}),t?e.jsx(l,{value:"schedule",children:"Schedule"}):null,e.jsx(l,{value:"history",children:"History"}),e.jsx(d,{value:"work",children:"Work content."}),e.jsx(d,{value:"schedule",children:"Schedule content."}),e.jsx(d,{value:"history",children:"History content."})]})]})},ae={name:"Test: removed uncontrolled value does not return",parameters:{controls:{disable:!0}},render:()=>e.jsx(Qt,{}),play:async({canvasElement:t})=>{const a=F(t);await q.click(a.getByRole("button",{name:"Remove Schedule tab"})),await g(a.getByRole("tab",{name:"Work"})).toHaveAttribute("aria-selected","true"),await q.click(a.getByRole("button",{name:"Add Schedule tab"})),await g(a.getByRole("tab",{name:"Work"})).toHaveAttribute("aria-selected","true"),await g(a.getByRole("tab",{name:"Schedule"})).toHaveAttribute("aria-selected","false")}},ne={name:"Test: overflow keeps badge details and selection semantics",parameters:{controls:{disable:!0}},render:t=>e.jsx(y,{"data-overflow-metadata-wrapper":!0,children:e.jsxs(j,{...t,defaultValue:"work",children:[e.jsx(l,{value:"work",children:"Work"}),e.jsx(l,{value:"materials",badge:3,badgeTooltip:"2 Open Part Requests, 1 Short Part",children:"Materials"}),e.jsx(l,{value:"documents",children:"Documents"}),e.jsx(l,{value:"history",children:"History"}),e.jsx(d,{value:"work",children:"Work content."}),e.jsx(d,{value:"materials",children:"Materials content."}),e.jsx(d,{value:"documents",children:"Documents content."}),e.jsx(d,{value:"history",children:"History content."})]})}),play:async({canvasElement:t})=>{const a=F(t),s=F(t.ownerDocument.body),r=t.querySelector("[data-overflow-metadata-wrapper]");if(!r)throw new Error("overflow metadata wrapper not found");r.style.width="180px";const i=await a.findByRole("button",{name:"More tabs"});await q.click(i);const m=await s.findByRole("menuitemradio",{name:/Materials \(3\)/});await g(m).toHaveAttribute("aria-checked","false"),await g(m).toHaveTextContent("2 Open Part Requests, 1 Short Part")}},Yt=()=>{const[t,a]=n.useState(0),[s,r]=n.useState("none");return e.jsxs(y,{children:[e.jsxs(p,{pb:"8","data-testid":"consumer-events",children:["Clicks: ",t,"; last key: ",s]}),e.jsxs(j,{"aria-label":"Handler composition",defaultValue:"first",children:[e.jsx(l,{value:"first",onClick:()=>a(i=>i+1),children:"First"}),e.jsx(l,{value:"second",onKeyDown:i=>r(i.key),children:"Second"}),e.jsx(d,{value:"first",children:"First content."}),e.jsx(d,{value:"second",children:"Second content."})]})]})},se={name:"Test: consumer handlers preserve tab interactions",parameters:{controls:{disable:!0}},render:()=>e.jsx(Yt,{}),play:async({canvasElement:t})=>{const a=F(t),s=a.getByRole("tab",{name:"First"}),r=a.getByRole("tab",{name:"Second"}),i=a.getByTestId("consumer-events");await q.click(r),await g(r).toHaveAttribute("aria-selected","true"),await q.keyboard("{ArrowLeft}"),await g(s).toHaveAttribute("aria-selected","true"),await g(i).toHaveTextContent("last key: ArrowLeft"),await q.click(s),await g(i).toHaveTextContent("Clicks: 1")}},re={name:"Test: disabled first tab is not the default",parameters:{controls:{disable:!0}},render:t=>e.jsxs(y,{children:[e.jsx(p,{pb:"12",color:"text.subtlest",children:"No `defaultValue` is given and the first tab is disabled. The strip selects the first enabled tab so the keyboard can still enter it."}),e.jsxs(j,{...t,children:[e.jsx(l,{value:"archived",disabled:!0,children:"Archived"}),e.jsx(l,{value:"open",children:"Open"}),e.jsx(l,{value:"closed",children:"Closed"}),e.jsx(d,{value:"archived",children:e.jsx(p,{py:"16",children:"Archived content."})}),e.jsx(d,{value:"open",children:e.jsx(p,{py:"16",children:"Open content."})}),e.jsx(d,{value:"closed",children:e.jsx(p,{py:"16",children:"Closed content."})})]})]}),play:async({canvasElement:t})=>{const a=F(t),s=a.getByRole("tab",{name:"Open"});await g(s).toHaveAttribute("aria-selected","true"),await g(s).toHaveAttribute("tabindex","0"),await g(a.getByRole("tab",{name:"Archived"})).toHaveAttribute("aria-selected","false"),await q.tab(),await g(s).toHaveFocus()}},oe={name:"Test: badge does not change tab height",parameters:{controls:{disable:!0}},render:t=>e.jsxs(y,{display:"flex",flexDirection:"column",gap:"16",children:[e.jsx(p,{color:"text.subtlest",children:"Both strips are 40px tall. The 20px badge sits inside the 22px line box and never grows the tab. Matches Figma `_TabsTab`."}),e.jsxs(j,{...t,"aria-label":"Without badges",defaultValue:"work",children:[e.jsx(l,{value:"work",children:"Work"}),e.jsx(l,{value:"materials",children:"Materials"})]}),e.jsxs(j,{...t,"aria-label":"With badges",defaultValue:"work",children:[e.jsx(l,{value:"work",badge:3,children:"Work"}),e.jsx(l,{value:"materials",badge:12,badgeTooltip:"12 Short Part(s)",children:"Materials"})]})]}),play:async({canvasElement:t})=>{const a=F(t),[s,r]=a.getAllByRole("tablist");await g(r==null?void 0:r.offsetHeight).toBe(s==null?void 0:s.offsetHeight);for(const i of a.getAllByRole("tab"))await g(i.offsetHeight).toBe(40)}},le=["Work","Info","Materials","Status"],ie={name:"Test: toggle space is reserved only once tabs overflow",parameters:{controls:{disable:!0}},render:t=>e.jsxs(y,{children:[e.jsx(p,{pb:"12",color:"text.subtlest",children:"The wrapper is sized just above the strip width. Every tab fits, so no toggle renders. Shrinking it below the strip makes the measured toggle appear."}),e.jsx(y,{"data-fit-wrapper":!0,borderWidth:"1",borderStyle:"dashed",borderColor:"border",children:e.jsxs(j,{...t,defaultValue:"work",children:[le.map(a=>e.jsx(l,{value:a.toLowerCase(),children:a},a)),le.map(a=>e.jsx(d,{value:a.toLowerCase(),children:e.jsxs(p,{py:"16",children:[a," content."]})},a))]})})]}),play:async({canvasElement:t})=>{const a=F(t),s=t.querySelector("[data-fit-wrapper]"),r=a.getByRole("tablist"),i=a.getAllByRole("tab");if(!s)throw new Error("wrapper not found");const m=Number.parseFloat(getComputedStyle(r).columnGap)||0,h=i.reduce((v,w)=>v+w.getBoundingClientRect().width,0)+m*(i.length-1);s.style.width=`${String(Math.ceil(h)+16)}px`,await me(async()=>{await g(a.getAllByRole("tab")).toHaveLength(le.length),await g(a.queryByRole("button",{name:"More tabs"})).not.toBeInTheDocument()}),s.style.width=`${String(Math.floor(h)-8)}px`,await me(async()=>{await g(a.getByRole("button",{name:"More tabs"})).toBeInTheDocument(),await g(a.getAllByRole("tab").length).toBeLessThan(le.length)})}};var Be,Ee,Ce;Q.parameters={...Q.parameters,docs:{...(Be=Q.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(Ce=(Ee=Q.parameters)==null?void 0:Ee.docs)==null?void 0:Ce.source}}};var Ae,He,Me;Y.parameters={...Y.parameters,docs:{...(Ae=Y.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
          Hover or focus the Materials badge to read what the count means.
        </Text>
      </TabPanel>
      <TabPanel value="status">
        <Text py="16">Status content.</Text>
      </TabPanel>
      <TabPanel value="documents">
        <Text py="16">A zero count renders no badge at all.</Text>
      </TabPanel>
    </Tabs>
}`,...(Me=(He=Y.parameters)==null?void 0:He.docs)==null?void 0:Me.source}}};var Oe,Ie,Ve;J.parameters={...J.parameters,docs:{...(Oe=J.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
}`,...(Ve=(Ie=J.parameters)==null?void 0:Ie.docs)==null?void 0:Ve.source}}};var We,_e,Le;X.parameters={...X.parameters,docs:{...(We=X.parameters)==null?void 0:We.docs,source:{originalSource:`{
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
}`,...(Le=(_e=X.parameters)==null?void 0:_e.docs)==null?void 0:Le.source}}};var Ne,qe,Fe;Z.parameters={...Z.parameters,docs:{...(Ne=Z.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
}`,...(Fe=(qe=Z.parameters)==null?void 0:qe.docs)==null?void 0:Fe.source}}};var De,ze,Ke;ee.parameters={...ee.parameters,docs:{...(De=ee.parameters)==null?void 0:De.docs,source:{originalSource:`{
  name: 'Ex: Work View',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <WorkView />
}`,...(Ke=(ze=ee.parameters)==null?void 0:ze.docs)==null?void 0:Ke.source}}};var $e,Ue,Ge;te.parameters={...te.parameters,docs:{...($e=te.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
}`,...(Ge=(Ue=te.parameters)==null?void 0:Ue.docs)==null?void 0:Ge.source}}};var Qe,Ye,Je;ae.parameters={...ae.parameters,docs:{...(Qe=ae.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
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
}`,...(Je=(Ye=ae.parameters)==null?void 0:Ye.docs)==null?void 0:Je.source}}};var Xe,Ze,et;ne.parameters={...ne.parameters,docs:{...(Xe=ne.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
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
}`,...(et=(Ze=ne.parameters)==null?void 0:Ze.docs)==null?void 0:et.source}}};var tt,at,nt;se.parameters={...se.parameters,docs:{...(tt=se.parameters)==null?void 0:tt.docs,source:{originalSource:`{
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
}`,...(nt=(at=se.parameters)==null?void 0:at.docs)==null?void 0:nt.source}}};var st,rt,ot;re.parameters={...re.parameters,docs:{...(st=re.parameters)==null?void 0:st.docs,source:{originalSource:`{
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
}`,...(ot=(rt=re.parameters)==null?void 0:rt.docs)==null?void 0:ot.source}}};var lt,it,ct;oe.parameters={...oe.parameters,docs:{...(lt=oe.parameters)==null?void 0:lt.docs,source:{originalSource:`{
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
}`,...(ct=(it=oe.parameters)==null?void 0:it.docs)==null?void 0:ct.source}}};var dt,ut,bt;ie.parameters={...ie.parameters,docs:{...(dt=ie.parameters)==null?void 0:dt.docs,source:{originalSource:`{
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
}`,...(bt=(ut=ie.parameters)==null?void 0:ut.docs)==null?void 0:bt.source}}};const ka=["Default","WithBadges","Overflow","LabelOverride","UnmountInactive","ExWorkView","ControlledFallback","UncontrolledFallback","OverflowMetadata","ComposedTabHandlers","DisabledFirstTab","BadgeKeepsHeight","ToggleReserveOnlyOnOverflow"];export{oe as BadgeKeepsHeight,se as ComposedTabHandlers,te as ControlledFallback,Q as Default,re as DisabledFirstTab,ee as ExWorkView,X as LabelOverride,J as Overflow,ne as OverflowMetadata,ie as ToggleReserveOnlyOnOverflow,ae as UncontrolledFallback,Z as UnmountInactive,Y as WithBadges,ka as __namedExportsOrder,ya as default};
