import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r}from"./index-BKyFwriW.js";import{w as B,e as l,u as R,a as z}from"./index-L8OlCEhE.js";import{m as at,a as tt,b as nt,e as st,g as rt,s as Ae,B as g,c as He,d as Ka}from"./dsComponent-BG2jnRr7.js";import{B as Z}from"./Button-Cr4bC5CG.js";import{I as ot}from"./Icon-CrwLKW7B.js";import"./IconConfig-BuieZFlx.js";import{T as p}from"./Text-dQWLZAwY.js";import{u as lt,c as it,E as ct,l as dt,n as ut,d as bt,e as pt,h as ht,p as vt,F as mt,D as wt,G as ft,H as yt,t as gt}from"./Tooltip-DCoBypPu.js";import{g as xt,s as Ua,M as Tt,a as kt}from"./SubMenu-wFp9o2W1.js";import{B as jt}from"./Badge-DBgIjuLw.js";import{I as Ga}from"./IconButton-CL4C6EpL.js";import{u as Rt}from"./useControllableState-ByGfjEIG.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Spinner-PLunUSsK.js";import"./FieldContext-D6URyQos.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";import"./HighlightText-DKF3xkQK.js";import"./menu-BvaagRwT.js";import"./FloatingLayerContext-BryH8O9I.js";import"./ListItemGroup-CHWl7sxl.js";import"./Divider-Dbp7vcYx.js";import"./Checkbox-BKc0omfg.js";import"./Toggle-mlz1wkXL.js";const Qa={hasOverflow:!1},Bt=[],St=[["root","tabs__root"],["strip","tabs__strip"],["list","tabs__list"],["tab","tabs__tab"],["badge","tabs__badge"],["overflow","tabs__overflow"],["menu","tabs__menu"],["panel","tabs__panel"]],Pt=St.map(([t,a])=>[t,st(a,Qa,rt(Bt,t))]),Et=at((t={})=>Object.fromEntries(Pt.map(([a,s])=>[a,s.recipeFn(t)]))),Ie=["hasOverflow","overflowed"],Ct=t=>({...Qa,...tt(t)}),Ya=Object.assign(Et,{__recipe__:!1,__name__:"tabs",raw:t=>t,classNameMap:{},variantKeys:Ie,variantMap:{hasOverflow:["false","true"],overflowed:["true"]},splitVariantProps(t){return nt(t,Ie)},getVariantProps:Ct}),At=32,re=(t,a)=>t.length===a.length&&t.every((s,n)=>s===a[n]),Ht=(t,a,s)=>{for(const n of a)s.has(n)||t==null||t.unobserve(n);for(const n of s)a.has(n)||t==null||t.observe(n);return s},Mt=({items:t,containerRef:a,getItemElement:s,activeItem:n=null,reserve:c=At,reserveRef:b,enabled:w=!0})=>{const[f,x]=r.useState(()=>[...t]),[y,O]=r.useState([]),[S,L]=r.useState(null),k=r.useRef(null),N=r.useRef(t),P=r.useRef(n),q=r.useRef(S),V=r.useRef(null),K=r.useRef(c),_=r.useRef(null),C=r.useRef(w),I=r.useRef(null),E=r.useRef(new Set),A=r.useRef(null),F=r.useCallback(()=>{var Oe;const d=a.current,h=N.current;if(!C.current||!d){x(m=>re(m,h)?m:[...h]),O(m=>m.length===0?m:[]);return}const u=globalThis.getComputedStyle(d),v=Number.parseFloat(u.paddingLeft||"0")+Number.parseFloat(u.paddingRight||"0"),j=Number.parseFloat(u.columnGap||"0")||0,U=d.clientWidth-v,$=h.map(m=>{var M;return((M=s(m))==null?void 0:M.offsetWidth)??Number.POSITIVE_INFINITY}),Q=q.current,H=P.current,J=Q??H,te=J===null?-1:h.indexOf(J),ne=te===-1?0:te,se=[...new Set([Q,H].filter(m=>m!==null).map(m=>h.indexOf(m)).filter(m=>m!==-1))],Pe=h.map((m,M)=>M).sort((m,M)=>{const D=Math.abs(m-ne)-Math.abs(M-ne);return D===0?m-M:D}),ee=(m,M)=>{const D=new Set;let Ee=0;for(const X of m)Ee+=($[X]??0)+(D.size>0?j:0),D.add(X);for(const X of Pe){if(D.has(X))continue;const Ve=($[X]??0)+(D.size>0?j:0);if(Ee+Ve>M)break;Ee+=Ve,D.add(X)}return D};let Y=ee([],U);if(Y.size<h.length){const m=((Oe=_.current)==null?void 0:Oe.offsetWidth)??K.current,M=U-m;Y=ee([],M),se.some(D=>!Y.has(D))&&(Y=ee(se,M))}const ae=[],W=[];h.forEach((m,M)=>{Y.has(M)?ae.push(m):W.push(m)}),x(m=>re(m,ae)?m:ae),O(m=>re(m,W)?m:W)},[a,s]),G=r.useCallback((d,h)=>{if(N.current.includes(d)){if(!y.includes(d)){h==null||h();return}A.current={key:d,onVisible:h},V.current=P.current,L(d)}},[y]);return r.useLayoutEffect(()=>{const d=()=>{k.current!==null&&globalThis.cancelAnimationFrame(k.current),k.current=globalThis.requestAnimationFrame(()=>{k.current=null,F()})},h=typeof ResizeObserver>"u"?null:new ResizeObserver(d);return I.current=h,globalThis.addEventListener("resize",d),()=>{h==null||h.disconnect(),I.current=null,E.current.clear(),globalThis.removeEventListener("resize",d),k.current!==null&&(globalThis.cancelAnimationFrame(k.current),k.current=null)}},[F]),r.useLayoutEffect(()=>{re(N.current,t)||(N.current=[...t]),P.current=n,q.current=S,K.current=c,_.current=(b==null?void 0:b.current)??null,C.current=w;const d=new Set,h=a.current;if(w&&h){d.add(h),_.current&&d.add(_.current);for(const u of N.current){const v=s(u);v&&d.add(v)}}E.current=Ht(I.current,E.current,d),F()},[n,a,w,S,s,t,F,c,b]),r.useLayoutEffect(()=>{var h;const d=A.current;if(d){if(!N.current.includes(d.key)){A.current=null,L(null);return}y.includes(d.key)||(A.current=null,(h=d.onVisible)==null||h.call(d))}},[y]),r.useLayoutEffect(()=>{if(S===null)return;const d=!t.includes(S);if(!d&&n===V.current)return;const h=A.current;h&&(d||h.key!==n)&&(A.current=null),V.current=null,L(null)},[n,S,t]),{visible:f,overflow:y,hasOverflow:y.length>0,measure:F,ensureVisible:G}},Ja=r.createContext(null),Ot=r.createContext(!0),Vt=Ja.Provider,It=Ot.Provider,Xa=()=>{const t=r.useContext(Ja);if(!t)throw new Error("Tabs compound components must be used within <Tabs />");return t},Se={tab:"Tab",panel:"TabPanel"},Me="__tabsComponentType",Za=t=>xt(t,Me),et=t=>{const a=[],s=(n,c)=>{r.Children.toArray(n).forEach(b=>{if(r.isValidElement(b)&&b.type===r.Fragment){s(b.props.children,`${c}${String(b.key)}/`);return}a.push(c!==""&&r.isValidElement(b)?r.cloneElement(b,{key:`${c}${String(b.key)}`}):b)})};return s(t,""),a},Ft=Ya({overflowed:!0}).tab,Fe=ft({size:"md",hasTitle:!1}),o=t=>{const{value:a,children:s,label:n,badge:c,badgeTooltip:b,disabled:w=!1,onClick:f,onKeyDown:x,ref:y,...O}=t,{classes:S,getPanelId:L,getTabId:k,onTabKeyDown:N,overflowValues:P,registerTabElement:q,selectTab:V,selectedValue:K}=Xa(),_=K===a,C=P.includes(a),[I,E]=Ae(O),A=r.useCallback(W=>{q(a,W)},[q,a]),F=C?Ft:S.tab,G=typeof c=="number"&&c!==0,d=G&&!!b&&!C,[h,u]=r.useState(!1),v=r.useRef(null),j=d&&h,{refs:U,elements:$,floatingStyles:Q,context:H}=lt({open:j,onOpenChange:u,placement:"bottom",middleware:it({offset:8,extras:[ct({element:v})]})}),J=dt(H,{enabled:d,move:!1}),te=ut(H,{enabled:d}),ne=bt(H,{enabled:d}),se=pt(H,{enabled:d,role:"tooltip"}),{getReferenceProps:Pe,getFloatingProps:ee}=ht([J,te,ne,se]),Y=vt([A,U.setReference,y]),ae=G?e.jsx(g,{ref:U.setPositionReference,className:S.badge,children:e.jsx(jt,{count:c,variant:"subtle"})}):null;return e.jsxs(e.Fragment,{children:[e.jsxs(g,{as:"button",type:"button",ref:Y,id:k(a),role:"tab","aria-selected":_,"aria-controls":L(a),"aria-hidden":C||void 0,disabled:w,tabIndex:_&&!C?0:-1,className:He(F,I),...Pe({...E,onClick:W=>{f==null||f(W),!(w||W.defaultPrevented)&&V(W,a,"clicked-on-tab")},onKeyDown:W=>{x==null||x(W),W.defaultPrevented||N(W)}}),children:[s,ae]}),j?e.jsx(mt,{children:e.jsx(wt,{reference:$.domReference,children:e.jsxs(g,{...Ka("Tooltip"),ref:U.setFloating,style:Q,className:Fe.tooltipContent,...ee(),children:[e.jsx(g,{className:Fe.text,children:b}),e.jsx(yt,{ref:v,context:H,fill:gt.var("colors.bg.neutral.inverse")})]})})}):null]})};Ua(o,Me,Se.tab);o.__docgenInfo={description:'Selects one panel inside a {@link Tabs} strip.\n\nRenders a `button` with `role="tab"`. Only the selected tab is in the tab\norder; Arrow, Home, and End move between the others. A tab that does not fit\nthe strip stays mounted but hidden so it can still be measured, and it is\noffered in the overflow menu instead. The menu row is plain text, so give\n`label` when `children` are not plain text.\n\n`badgeTooltip` opens on hover and on keyboard focus of the tab itself, points\nat the badge, and is linked to the tab with `aria-describedby` while open.\n\n@example\n```tsx\n<Tab value="materials" badge={3} badgeTooltip="2 Open Part Request">\n  Materials\n</Tab>\n```',methods:[],displayName:"Tab",props:{value:{required:!0,tsType:{name:"string"},description:"Identifies the tab and the `TabPanel` it controls. Must be unique within a `Tabs`."},children:{required:!1,tsType:{name:"ReactNode"},description:"Visible label rendered in the strip. Plain text is also reused as the overflow-menu row's text unless `label` overrides it."},label:{required:!1,tsType:{name:"string"},description:"Plain-text name for this tab's overflow-menu row, which cannot render\nmarkup. Set it when `children` contain more than text — an icon, a nested\nelement — because flattening those to a string reads badly. It never\nchanges what the strip renders: `children` still render there as-is.\nWithout it the menu row falls back to the flattened `children`, then to\n`value`."},badge:{required:!1,tsType:{name:"number"},description:"Count shown in a trailing {@link Badge}. A zero or omitted count renders no badge."},badgeTooltip:{required:!1,tsType:{name:"string"},description:"Tooltip text describing what the badge counts. Requires `badge`."},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents selection and skips the tab during arrow-key navigation."}}};const i=t=>{const{value:a,children:s,...n}=t,{classes:c,getPanelId:b,getTabId:w,selectedValue:f,unmountInactive:x}=Xa(),y=f===a,[O,S]=Ae(n);if(x&&!y)return null;const k=typeof s=="function"?s({isActive:y}):s;return e.jsx(It,{value:y,children:e.jsx(g,{id:b(a),role:"tabpanel","aria-labelledby":w(a),tabIndex:y?0:-1,display:y?"block":"none",_hidden:{display:"none"},className:He(c.panel,O),...S,hidden:!y,children:k})})};Ua(i,Me,Se.panel);i.__docgenInfo={description:'Renders the content for one {@link Tab}.\n\nThe panel stays mounted when another tab is selected and is hidden with\n`display: none`, which preserves scroll position and local state; set\n`unmountInactive` on `Tabs` to render only the selected panel instead. A\nfunction child receives `{ isActive }`, and descendants can call\n`useTabPanelActive()` for the same signal, so hidden panels can pause polling\nor animation.\n\n@example\n```tsx\n<TabPanel value="materials">\n  {({ isActive }) => <MaterialsGrid paused={!isActive} />}\n</TabPanel>\n```',methods:[],displayName:"TabPanel",props:{value:{required:!0,tsType:{name:"string"},description:"`value` of the {@link Tab} this panel belongs to."},children:{required:!1,tsType:{name:"union",raw:"ReactNode | ((props: TabPanelRenderProps) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:"Panel content. A function child receives `{ isActive }` so expensive work\ncan pause while the panel is mounted but hidden."}}};const Ce=t=>t==null||typeof t=="boolean"?"":typeof t=="string"||typeof t=="number"?String(t):Array.isArray(t)?t.map(a=>Ce(a)).join(""):r.isValidElement(t)?Ce(t.props.children):"",Wt=({children:t,value:a,defaultValue:s,onChange:n,listRef:c,overflowRef:b})=>{var h;const w=r.useMemo(()=>{const u=[];return et(t).forEach(v=>{if(!r.isValidElement(v)||Za(v)!==Se.tab)return;const j=v.props;typeof j.value=="string"&&u.push({value:j.value,label:j.label||Ce(j.children)||j.value,disabled:!!j.disabled,badge:j.badge,badgeTooltip:j.badgeTooltip})}),u},[t]),f=r.useMemo(()=>w.map(u=>u.value),[w]),x=(h=w.find(u=>!u.disabled))==null?void 0:h.value,[y,O,S]=Rt({value:a,defaultValue:s??x??""}),L=w.find(u=>u.value===y),k=!!(L&&!L.disabled),N=k||x!==void 0,P=k?y:x??"",q=r.useRef(null);r.useEffect(()=>{if(k){q.current=null;return}const u=JSON.stringify([y,x??null]);q.current!==u&&(q.current=u,S||O(x??""),x!==void 0&&(n==null||n(null,x,"fallback-after-removal")))},[x,S,k,n,O,y]);const V=r.useRef(new Map),K=r.useCallback((u,v)=>{v?V.current.set(u,v):V.current.delete(u)},[]),_=r.useCallback(u=>V.current.get(u)??null,[]),{ensureVisible:C,overflow:I,hasOverflow:E}=Mt({items:f,containerRef:c,getItemElement:_,activeItem:N?P:null,reserveRef:b}),A=r.useCallback((u,v,j)=>{v!==y&&(O(v),n==null||n(u,v,j))},[n,O,y]),F=r.useCallback(u=>{C(u,()=>{var v;(v=V.current.get(u))==null||v.focus()})},[C]),G=r.useCallback(u=>{const v=w.filter(H=>!H.disabled).map(H=>H.value);if(v.length===0)return;let j=P;for(const[H,J]of V.current)if(J===u.currentTarget){j=H;break}const U=Math.max(0,v.indexOf(j));let $;switch(u.key){case"ArrowRight":$=(U+1)%v.length;break;case"ArrowLeft":$=(U-1+v.length)%v.length;break;case"Home":$=0;break;case"End":$=v.length-1;break;default:return}u.preventDefault();const Q=v[$];Q!==void 0&&(A(u,Q,"clicked-on-tab"),F(Q))},[F,A,P,w]),d=r.useMemo(()=>I.map(u=>w.find(v=>v.value===u)).filter(u=>!!u),[I,w]);return{hasOverflow:E,focusTab:F,onTabKeyDown:G,overflowTabs:d,overflowValues:I,registerTabElement:K,selectTab:A,selectedValue:P,tabs:w}},Lt=({className:t,focusTab:a,tabs:s,selectTab:n,selectedValue:c})=>{const[b,w]=r.useState(!1);return e.jsx(Tt,{open:b,onOpenChange:w,placement:"bottom-end",className:t,trigger:e.jsx(Ga,{variant:"ghost",size:"md",iconName:b?"caret-up":"caret-down",altText:"More tabs","aria-haspopup":"menu"}),children:s.map(f=>{const x=typeof f.badge=="number"&&f.badge!==0;return e.jsx(kt,{label:x?`${f.label} (${String(f.badge)})`:f.label,description:x?f.badgeTooltip:void 0,disabled:f.disabled,selected:f.value===c,role:"menuitemradio","aria-checked":f.value===c,onClick:y=>{n(y,f.value,"selected-from-overflow"),a(f.value),w(!1)}},f.value)})})},T=t=>{const{children:a,value:s,defaultValue:n,onChange:c,unmountInactive:b=!1,"aria-label":w,"aria-labelledby":f,...x}=t,[y,O]=Ae(x),S=r.useRef(null),L=r.useRef(null),k=r.useId(),{focusTab:N,hasOverflow:P,onTabKeyDown:q,overflowTabs:V,overflowValues:K,registerTabElement:_,selectTab:C,selectedValue:I}=Wt({children:a,value:s,defaultValue:n,onChange:c,listRef:S,overflowRef:L}),E=r.useMemo(()=>Ya({hasOverflow:P}),[P]),[A,F]=r.useMemo(()=>{const d=[],h=[];return et(a).forEach(u=>{Za(u)===Se.tab?d.push(u):h.push(u)}),[d,h]},[a]),G=r.useMemo(()=>({classes:E,getPanelId:d=>`${k}-panel-${encodeURIComponent(d)}`,getTabId:d=>`${k}-tab-${encodeURIComponent(d)}`,onTabKeyDown:q,overflowValues:K,registerTabElement:_,selectTab:C,selectedValue:I,unmountInactive:b}),[k,E,q,K,_,C,I,b]);return e.jsx(Vt,{value:G,children:e.jsxs(g,{...Ka("Tabs"),className:He(E.root,y),...O,children:[e.jsxs(g,{className:E.strip,children:[e.jsx(g,{ref:S,role:"tablist","aria-label":w,"aria-labelledby":f,"aria-orientation":"horizontal",className:E.list,children:A}),e.jsx(g,{ref:L,className:E.overflow,"aria-hidden":!P||void 0,children:P?e.jsx(Lt,{className:E.menu,focusTab:N,tabs:V,selectTab:C,selectedValue:I}):e.jsx(Ga,{variant:"ghost",size:"md",iconName:"caret-down",altText:"More tabs",disabled:!0,tabIndex:-1})})]}),F]})})};T.__docgenInfo={description:'Groups related content into a single view with one panel visible at a time.\n\nCompose it from `Tab` and `TabPanel` children; the first enabled `Tab` is\nselected by default. Selection is uncontrolled with `defaultValue` or\ncontrolled with `value` plus `onChange`. Tabs that do not fit the available width move into\nan overflow menu at the end of the strip, and the selected tab always stays\nvisible. Every panel stays mounted and hidden unless `unmountInactive` is\nset, so read `useTabPanelActive()` to pause work in a hidden panel.\n\nThe strip renders a `tablist` with roving tabindex and Arrow, Home, and End\nnavigation. Supply `aria-label` or `aria-labelledby` so it is announced.\n\n@example\n```tsx\n<Tabs defaultValue="work" aria-label="Order sections">\n  <Tab value="work">Work</Tab>\n  <Tab value="materials" badge={3}>Materials</Tab>\n  <TabPanel value="work">Work content</TabPanel>\n  <TabPanel value="materials">Materials content</TabPanel>\n</Tabs>\n```',methods:[],displayName:"Tabs",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"`Tab` and `TabPanel` children. Tab order in the strip follows source order."},value:{required:!1,tsType:{name:"string"},description:"Controlled selected tab `value`. Pair with `onChange`; omit it to use `defaultValue`."},defaultValue:{required:!1,tsType:{name:"string"},description:"Initially selected tab `value` when `value` is not provided. It is used\nonly on first render.\n@default the first `Tab` child's `value`"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  event: TabsChangeEvent,
  value: string,
  reason: TabsChangeReason,
) => void`,signature:{arguments:[{type:{name:"union",raw:`| ReactMouseEvent<HTMLElement>
| ReactKeyboardEvent<HTMLElement>
| null`,elements:[{name:"ReactMouseEvent",elements:[{name:"HTMLElement"}],raw:"ReactMouseEvent<HTMLElement>"},{name:"ReactKeyboardEvent",elements:[{name:"HTMLElement"}],raw:"ReactKeyboardEvent<HTMLElement>"},{name:"null"}]},name:"event"},{type:{name:"string"},name:"value"},{type:{name:"union",raw:`| 'clicked-on-tab'
| 'selected-from-overflow'
| 'fallback-after-removal'`,elements:[{name:"literal",value:"'clicked-on-tab'"},{name:"literal",value:"'selected-from-overflow'"},{name:"literal",value:"'fallback-after-removal'"}]},name:"reason"}],return:{name:"void"}}},description:"Runs when user interaction selects a different tab."},unmountInactive:{required:!1,tsType:{name:"boolean"},description:"Renders only the selected `TabPanel`. By default every panel stays mounted\nand inactive panels are hidden with `display: none`, which preserves their\nscroll position and local state.\n@default false"},"aria-label":{required:!1,tsType:{name:"string"},description:"Accessible name for the tab strip. Provide this or `aria-labelledby` so the\n`tablist` is announced."},"aria-labelledby":{required:!1,tsType:{name:"string"},description:"Id of an element that labels the tab strip."}}};const yn={title:"Components/Tabs",component:T,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:["Tabs keep every `TabPanel` mounted by default and hide the inactive","ones with `display: none`. That preserves scroll position, form","drafts, and grid state when a user moves between tabs, at the cost","of keeping hidden work alive. Hidden panels receive an `isActive`","signal — as a render-prop argument or through `useTabPanelActive()`","— so polling, timers, and animation can pause themselves. Set","`unmountInactive` when a panel is expensive enough that discarding","its state is the better trade."].join(" ")}}},args:{"aria-label":"Example sections",children:null}},oe={render:t=>e.jsxs(T,{...t,defaultValue:"overview",children:[e.jsx(o,{value:"overview",children:"Overview"}),e.jsx(o,{value:"activity",children:"Activity"}),e.jsx(o,{value:"settings",children:"Settings"}),e.jsx(i,{value:"overview",children:e.jsx(p,{py:"16",children:"Summary of the current record."})}),e.jsx(i,{value:"activity",children:e.jsx(p,{py:"16",children:"Recent activity for the current record."})}),e.jsx(i,{value:"settings",children:e.jsx(p,{py:"16",children:"Settings for the current record."})})]})},le={name:"Badges",parameters:{controls:{disable:!0}},render:t=>e.jsxs(T,{...t,defaultValue:"work",children:[e.jsx(o,{value:"work",children:"Work"}),e.jsx(o,{value:"materials",badge:3,badgeTooltip:"2 Open Part Request, 1 Short Part(s)",children:"Materials"}),e.jsx(o,{value:"status",badge:12,children:"Status"}),e.jsx(o,{value:"documents",badge:0,children:"Documents"}),e.jsx(i,{value:"work",children:e.jsx(p,{py:"16",children:"A badge without a tooltip is a bare count."})}),e.jsx(i,{value:"materials",children:e.jsx(p,{py:"16",children:"Hover or focus the Materials tab to read what the count means."})}),e.jsx(i,{value:"status",children:e.jsx(p,{py:"16",children:"Status content."})}),e.jsx(i,{value:"documents",children:e.jsx(p,{py:"16",children:"A zero count renders no badge at all."})})]})},We=["Work","Info","Materials","Status","Documents","History","Labor","Quality","Shipping","Invoicing","Costing","Notes"],ie={name:"Overflow",parameters:{controls:{disable:!0}},render:t=>e.jsxs(g,{resize:"horizontal",overflow:"auto",width:"lg",maxWidth:"full",minWidth:"240",borderWidth:"1",borderStyle:"dashed",borderColor:"border",p:"16",children:[e.jsx(p,{pb:"12",color:"text.subtlest",children:"Drag the bottom-right corner. Tabs nearest the selected one keep their place; the rest move into the overflow menu."}),e.jsxs(T,{...t,defaultValue:"work",children:[We.map(a=>e.jsx(o,{value:a.toLowerCase(),children:a},a)),We.map(a=>e.jsx(i,{value:a.toLowerCase(),children:e.jsxs(p,{py:"16",children:[a," content."]})},a))]})]})},Le=[{value:"work",label:"Work",icon:"wrench-2"},{value:"materials",label:"Materials",icon:"cube-focus"},{value:"schedule",label:"Schedule",icon:"calendar-view-week"},{value:"shipping",label:"Shipping",icon:"truck-trailer"},{value:"quality",label:"Quality",icon:"list-checks"},{value:"history",label:"History",icon:"clock-countdown"},{value:"notes",label:"Notes",icon:"note-stack"}],ce={name:"Label Override for Overflow",parameters:{controls:{disable:!0}},render:t=>e.jsxs(g,{width:"md",maxWidth:"full",children:[e.jsx(p,{pb:"12",color:"text.subtlest",children:"These tabs render an icon beside their text, so flattening `children` would produce a poor menu row. Each one passes `label`, and the overflow menu uses that text. The strip still renders `children` as-is."}),e.jsxs(T,{...t,defaultValue:"work",children:[Le.map(a=>e.jsxs(o,{value:a.value,label:a.label,children:[e.jsx(ot,{name:a.icon,"aria-hidden":!0}),a.label]},a.value)),Le.map(a=>e.jsx(i,{value:a.value,children:e.jsxs(p,{py:"16",children:[a.label," content."]})},a.value))]})]})},de={name:"Unmount Inactive Panels",parameters:{controls:{disable:!0}},render:t=>e.jsxs(T,{...t,defaultValue:"first",unmountInactive:!0,children:[e.jsx(o,{value:"first",children:"First"}),e.jsx(o,{value:"second",children:"Second"}),e.jsx(i,{value:"first",children:e.jsx(p,{py:"16",children:"Only this panel exists in the DOM while it is selected."})}),e.jsx(i,{value:"second",children:e.jsx(p,{py:"16",children:"Switching tabs unmounts the other panel and discards its state."})})]})},Nt=()=>{const[t,a]=r.useState(!0),[s,n]=r.useState("none yet");return e.jsxs(g,{children:[e.jsx(g,{pb:"12",children:e.jsx(Z,{variant:"hollow",size:"sm",onClick:()=>a(c=>!c),children:t?"Remove Schedule tab":"Add Schedule tab"})}),e.jsxs(T,{"aria-label":"Work order sections",defaultValue:"work",onChange:(c,b,w)=>n(`${b} (${w})`),children:[e.jsx(o,{value:"work",children:"Work"}),e.jsx(o,{value:"info",children:"Info"}),e.jsx(o,{value:"materials",badge:3,badgeTooltip:"2 Open Part Request, 1 Short Part(s)",children:"Materials"}),e.jsx(o,{value:"status",badge:5,badgeTooltip:"5 Operations Behind",children:"Status"}),t?e.jsx(o,{value:"schedule",children:"Schedule"}):null,e.jsx(o,{value:"documents",children:"Documents"}),e.jsx(o,{value:"history",children:"History"}),e.jsx(i,{value:"work",children:e.jsx(p,{py:"16",children:"Work instructions and operations."})}),e.jsx(i,{value:"info",children:e.jsx(p,{py:"16",children:"Order header and customer details."})}),e.jsx(i,{value:"materials",children:e.jsx(p,{py:"16",children:"Bill of materials and part requests."})}),e.jsx(i,{value:"status",children:e.jsx(p,{py:"16",children:"Operation status roll-up."})}),e.jsx(i,{value:"schedule",children:({isActive:c})=>e.jsxs(p,{py:"16",children:["Schedule board. Live refresh is ",c?"running":"paused",". Select this tab, remove it with the button above, and the strip falls back to the first remaining tab."]})}),e.jsx(i,{value:"documents",children:e.jsx(p,{py:"16",children:"Attached drawings and travelers."})}),e.jsx(i,{value:"history",children:e.jsx(p,{py:"16",children:"Audit trail."})})]}),e.jsxs(p,{pt:"16",color:"text.subtlest",children:["Last change: ",s]})]})},ue={name:"Ex: Work View",parameters:{controls:{disable:!0}},render:()=>e.jsx(Nt,{})},qt=()=>{const[t,a]=r.useState(!0),[s,n]=r.useState("schedule");return e.jsxs(g,{children:[e.jsx(Z,{variant:"hollow",size:"sm",onClick:()=>a(c=>!c),children:t?"Remove Schedule tab":"Add Schedule tab"}),e.jsxs(p,{py:"8","data-testid":"controlled-value",children:["Parent value: ",s]}),e.jsxs(T,{"aria-label":"Controlled sections",value:s,onChange:(c,b)=>n(b),children:[e.jsx(o,{value:"work",children:"Work"}),t?e.jsx(o,{value:"schedule",children:"Schedule"}):null,e.jsx(o,{value:"history",children:"History"}),e.jsx(i,{value:"work",children:"Work content."}),e.jsx(i,{value:"schedule",children:"Schedule content."}),e.jsx(i,{value:"history",children:"History content."})]})]})},be={name:"Test: controlled value follows a removed tab",parameters:{controls:{disable:!0}},render:()=>e.jsx(qt,{}),play:async({canvasElement:t})=>{const a=B(t);await l(a.getByRole("tab",{name:"Schedule"})).toHaveAttribute("aria-selected","true"),await R.click(a.getByRole("button",{name:"Remove Schedule tab"})),await z(async()=>{await l(a.getByTestId("controlled-value")).toHaveTextContent("Parent value: work"),await l(a.getByRole("tab",{name:"Work"})).toHaveAttribute("aria-selected","true")})}},_t=()=>{const[t,a]=r.useState(!0);return e.jsxs(g,{children:[e.jsx(Z,{variant:"hollow",size:"sm",onClick:()=>a(s=>!s),children:t?"Remove Schedule tab":"Add Schedule tab"}),e.jsxs(T,{"aria-label":"Uncontrolled sections",defaultValue:"schedule",children:[e.jsx(o,{value:"work",children:"Work"}),t?e.jsx(o,{value:"schedule",children:"Schedule"}):null,e.jsx(o,{value:"history",children:"History"}),e.jsx(i,{value:"work",children:"Work content."}),e.jsx(i,{value:"schedule",children:"Schedule content."}),e.jsx(i,{value:"history",children:"History content."})]})]})},pe={name:"Test: removed uncontrolled value does not return",parameters:{controls:{disable:!0}},render:()=>e.jsx(_t,{}),play:async({canvasElement:t})=>{const a=B(t);await R.click(a.getByRole("button",{name:"Remove Schedule tab"})),await l(a.getByRole("tab",{name:"Work"})).toHaveAttribute("aria-selected","true"),await R.click(a.getByRole("button",{name:"Add Schedule tab"})),await l(a.getByRole("tab",{name:"Work"})).toHaveAttribute("aria-selected","true"),await l(a.getByRole("tab",{name:"Schedule"})).toHaveAttribute("aria-selected","false")}},he={name:"Test: overflow keeps badge details and selection semantics",parameters:{controls:{disable:!0}},render:t=>e.jsx(g,{"data-overflow-metadata-wrapper":!0,children:e.jsxs(T,{...t,defaultValue:"work",children:[e.jsx(o,{value:"work",children:"Work"}),e.jsx(o,{value:"materials",badge:3,badgeTooltip:"2 Open Part Requests, 1 Short Part",children:"Materials"}),e.jsx(o,{value:"documents",children:"Documents"}),e.jsx(o,{value:"history",children:"History"}),e.jsx(i,{value:"work",children:"Work content."}),e.jsx(i,{value:"materials",children:"Materials content."}),e.jsx(i,{value:"documents",children:"Documents content."}),e.jsx(i,{value:"history",children:"History content."})]})}),play:async({canvasElement:t})=>{const a=B(t),s=B(t.ownerDocument.body),n=t.querySelector("[data-overflow-metadata-wrapper]");if(!n)throw new Error("overflow metadata wrapper not found");n.style.width="180px";const c=await a.findByRole("button",{name:"More tabs"});await R.click(c);const b=await s.findByRole("menuitemradio",{name:/Materials \(3\)/});await l(b).toHaveAttribute("aria-checked","false"),await l(b).toHaveTextContent("2 Open Part Requests, 1 Short Part")}},Dt=()=>{const[t,a]=r.useState(0),[s,n]=r.useState("none");return e.jsxs(g,{children:[e.jsxs(p,{pb:"8","data-testid":"consumer-events",children:["Clicks: ",t,"; last key: ",s]}),e.jsxs(T,{"aria-label":"Handler composition",defaultValue:"first",children:[e.jsx(o,{value:"first",onClick:()=>a(c=>c+1),children:"First"}),e.jsx(o,{value:"second",onKeyDown:c=>n(c.key),children:"Second"}),e.jsx(i,{value:"first",children:"First content."}),e.jsx(i,{value:"second",children:"Second content."})]})]})},ve={name:"Test: consumer handlers preserve tab interactions",parameters:{controls:{disable:!0}},render:()=>e.jsx(Dt,{}),play:async({canvasElement:t})=>{const a=B(t),s=a.getByRole("tab",{name:"First"}),n=a.getByRole("tab",{name:"Second"}),c=a.getByTestId("consumer-events");await R.click(n),await l(n).toHaveAttribute("aria-selected","true"),await R.keyboard("{ArrowLeft}"),await l(s).toHaveAttribute("aria-selected","true"),await l(c).toHaveTextContent("last key: ArrowLeft"),await R.click(s),await l(c).toHaveTextContent("Clicks: 1")}},me={name:"Test: disabled first tab is not the default",parameters:{controls:{disable:!0}},render:t=>e.jsxs(g,{children:[e.jsx(p,{pb:"12",color:"text.subtlest",children:"No `defaultValue` is given and the first tab is disabled. The strip selects the first enabled tab so the keyboard can still enter it."}),e.jsxs(T,{...t,children:[e.jsx(o,{value:"archived",disabled:!0,children:"Archived"}),e.jsx(o,{value:"open",children:"Open"}),e.jsx(o,{value:"closed",children:"Closed"}),e.jsx(i,{value:"archived",children:e.jsx(p,{py:"16",children:"Archived content."})}),e.jsx(i,{value:"open",children:e.jsx(p,{py:"16",children:"Open content."})}),e.jsx(i,{value:"closed",children:e.jsx(p,{py:"16",children:"Closed content."})})]})]}),play:async({canvasElement:t})=>{const a=B(t),s=a.getByRole("tab",{name:"Open"});await l(s).toHaveAttribute("aria-selected","true"),await l(s).toHaveAttribute("tabindex","0"),await l(a.getByRole("tab",{name:"Archived"})).toHaveAttribute("aria-selected","false"),await R.tab(),await l(s).toHaveFocus()}},we={name:"Test: badge does not change tab height",parameters:{controls:{disable:!0}},render:t=>e.jsxs(g,{display:"flex",flexDirection:"column",gap:"16",children:[e.jsx(p,{color:"text.subtlest",children:"Both strips are 40px tall. The 20px badge sits inside the 22px line box and never grows the tab. Matches Figma `_TabsTab`."}),e.jsxs(T,{...t,"aria-label":"Without badges",defaultValue:"work",children:[e.jsx(o,{value:"work",children:"Work"}),e.jsx(o,{value:"materials",children:"Materials"})]}),e.jsxs(T,{...t,"aria-label":"With badges",defaultValue:"work",children:[e.jsx(o,{value:"work",badge:3,children:"Work"}),e.jsx(o,{value:"materials",badge:12,badgeTooltip:"12 Short Part(s)",children:"Materials"})]})]}),play:async({canvasElement:t})=>{const a=B(t),[s,n]=a.getAllByRole("tablist");await l(n==null?void 0:n.offsetHeight).toBe(s==null?void 0:s.offsetHeight);for(const c of a.getAllByRole("tab"))await l(c.offsetHeight).toBe(40)}},fe=["Work","Info","Materials","Status"],ye={name:"Test: toggle space is reserved only once tabs overflow",parameters:{controls:{disable:!0}},render:t=>e.jsxs(g,{children:[e.jsx(p,{pb:"12",color:"text.subtlest",children:"The wrapper is sized just above the strip width. Every tab fits, so no toggle renders. Shrinking it below the strip makes the measured toggle appear."}),e.jsx(g,{"data-fit-wrapper":!0,borderWidth:"1",borderStyle:"dashed",borderColor:"border",children:e.jsxs(T,{...t,defaultValue:"work",children:[fe.map(a=>e.jsx(o,{value:a.toLowerCase(),children:a},a)),fe.map(a=>e.jsx(i,{value:a.toLowerCase(),children:e.jsxs(p,{py:"16",children:[a," content."]})},a))]})})]}),play:async({canvasElement:t})=>{const a=B(t),s=t.querySelector("[data-fit-wrapper]"),n=a.getByRole("tablist"),c=a.getAllByRole("tab");if(!s)throw new Error("wrapper not found");const b=Number.parseFloat(getComputedStyle(n).columnGap)||0,w=c.reduce((f,x)=>f+x.getBoundingClientRect().width,0)+b*(c.length-1);s.style.width=`${String(Math.ceil(w)+16)}px`,await z(async()=>{await l(a.getAllByRole("tab")).toHaveLength(fe.length),await l(a.queryByRole("button",{name:"More tabs"})).not.toBeInTheDocument()}),s.style.width=`${String(Math.floor(w)-8)}px`,await z(async()=>{await l(a.getByRole("button",{name:"More tabs"})).toBeInTheDocument(),await l(a.getAllByRole("tab").length).toBeLessThan(fe.length)})}},ge={name:"Test: tabs grouped in fragments join the strip",parameters:{controls:{disable:!0}},render:t=>e.jsxs(T,{...t,"aria-label":"Fragment children",defaultValue:"work",children:[e.jsxs(e.Fragment,{children:[e.jsx(o,{value:"work",children:"Work"}),e.jsx(e.Fragment,{children:e.jsx(o,{value:"materials",children:"Materials"})})]}),e.jsxs(e.Fragment,{children:[e.jsx(i,{value:"work",children:"Work content."}),e.jsx(i,{value:"materials",children:"Materials content."})]})]}),play:async({canvasElement:t})=>{const a=B(t),s=a.getByRole("tablist"),n=a.getByRole("tab",{name:"Materials"});await l(B(s).getAllByRole("tab")).toHaveLength(2),await R.click(n),await l(n).toHaveAttribute("aria-selected","true"),await l(a.getByText("Materials content.")).toBeVisible()}},zt=()=>{const t=r.useRef(null),[a,s]=r.useState("none");return e.jsxs(g,{children:[e.jsx(Z,{variant:"standard",mb:"8",onClick:()=>{var n;return s(((n=t.current)==null?void 0:n.tagName)??"none")},children:"Read ref"}),e.jsxs(p,{pb:"8","data-testid":"consumer-ref",children:["Ref: ",a]}),e.jsxs(T,{"aria-label":"Consumer ref",defaultValue:"first",children:[e.jsx(o,{value:"first",children:"First"}),e.jsx(o,{value:"second",ref:t,children:"Second"}),e.jsx(i,{value:"first",children:"First content."}),e.jsx(i,{value:"second",children:"Second content."})]})]})},xe={name:"Test: consumer ref keeps tab registration",parameters:{controls:{disable:!0}},render:()=>e.jsx(zt,{}),play:async({canvasElement:t})=>{const a=B(t),s=a.getByRole("tab",{name:"First"}),n=a.getByRole("tab",{name:"Second"});await R.click(a.getByRole("button",{name:"Read ref"})),await l(a.getByTestId("consumer-ref")).toHaveTextContent("Ref: BUTTON"),await R.click(s),await R.keyboard("{ArrowRight}"),await l(n).toHaveAttribute("aria-selected","true"),await l(n).toHaveFocus()}},Te={name:"Test: badge tooltip opens on tab keyboard focus",parameters:{controls:{disable:!0}},render:t=>e.jsxs(T,{...t,"aria-label":"Badge tooltip",defaultValue:"materials",children:[e.jsx(o,{value:"materials",badge:3,badgeTooltip:"2 Open Part Requests",children:"Materials"}),e.jsx(o,{value:"status",children:"Status"}),e.jsx(i,{value:"materials",children:"Materials content."}),e.jsx(i,{value:"status",children:"Status content."})]}),play:async({canvasElement:t})=>{const a=B(t),s=B(t.ownerDocument.body),n=a.getByRole("tab",{name:/Materials/});await R.tab(),await l(n).toHaveFocus();const c=await s.findByRole("tooltip");await l(c).toHaveTextContent("2 Open Part Requests"),await l(n).toHaveAttribute("aria-describedby",c.id)}},$t=()=>{const[t,a]=r.useState("alpha");return e.jsxs(g,{children:[e.jsxs(p,{pb:"8","data-testid":"deferred-value",children:["Parent value: ",t]}),e.jsx(g,{"data-deferred-wrapper":!0,children:e.jsxs(T,{"aria-label":"Deferred selection",value:t,onChange:(s,n)=>{globalThis.setTimeout(()=>a(n),300)},children:[e.jsx(o,{value:"alpha",children:"Alpha section"}),e.jsx(o,{value:"bravo",children:"Bravo section"}),e.jsx(o,{value:"charlie",children:"Charlie section"}),e.jsx(i,{value:"alpha",children:"Alpha content."}),e.jsx(i,{value:"bravo",children:"Bravo content."}),e.jsx(i,{value:"charlie",children:"Charlie content."})]})})]})},ke={name:"Test: deferred controlled selection keeps the focused tab visible",parameters:{controls:{disable:!0}},render:()=>e.jsx($t,{}),play:async({canvasElement:t})=>{const a=B(t),s=t.querySelector("[data-deferred-wrapper]");if(!s)throw new Error("deferred wrapper not found");const n=a.getByRole("tab",{name:"Alpha section"});s.style.width=`${String(Math.ceil(n.getBoundingClientRect().width)+48)}px`,await z(async()=>{await l(a.getAllByRole("tab")).toHaveLength(1)}),await R.click(n),await R.keyboard("{ArrowRight}");const c=await a.findByRole("tab",{name:"Bravo section"});await l(c).toHaveFocus(),await l(a.getByTestId("deferred-value")).toHaveTextContent("Parent value: alpha"),await z(async()=>{await l(a.getByTestId("deferred-value")).toHaveTextContent("Parent value: bravo")}),await l(c).toHaveAttribute("aria-selected","true"),await l(c).toHaveFocus(),s.style.width="",await z(async()=>{await l(a.getAllByRole("tab")).toHaveLength(3)}),await R.keyboard("{ArrowLeft}"),await z(async()=>{await l(a.getByTestId("deferred-value")).toHaveTextContent("Parent value: alpha")}),await R.keyboard("{ArrowRight}{ArrowRight}");const b=a.getByRole("tab",{name:"Charlie section"});await l(b).toHaveFocus(),await z(async()=>{await l(a.getByTestId("deferred-value")).toHaveTextContent("Parent value: charlie")}),await R.keyboard("{ArrowLeft}{ArrowLeft}"),await l(a.getByRole("tab",{name:"Alpha section"})).toHaveFocus(),await z(async()=>{await l(a.getByTestId("deferred-value")).toHaveTextContent("Parent value: alpha")})}},Kt=()=>{const[t,a]=r.useState("missing");return e.jsxs(g,{children:[e.jsxs(p,{pb:"8","data-testid":"empty-fallback-value",children:['Parent value: "',t,'"']}),e.jsxs(T,{"aria-label":"Empty fallback",value:t,onChange:(s,n)=>a(n),children:[e.jsx(o,{value:"",children:"Overview"}),e.jsx(o,{value:"details",children:"Details"}),e.jsx(i,{value:"",children:"Overview content."}),e.jsx(i,{value:"details",children:"Details content."})]}),e.jsx(g,{"data-empty-wrapper":!0,pt:"16",children:e.jsxs(T,{"aria-label":"Empty selected",defaultValue:"",children:[e.jsx(o,{value:"work",children:"Work section"}),e.jsx(o,{value:"materials",children:"Materials section"}),e.jsx(o,{value:"",children:"Summary section"}),e.jsx(i,{value:"work",children:"Work content."}),e.jsx(i,{value:"materials",children:"Materials content."}),e.jsx(i,{value:"",children:"Summary content."})]})})]})},je={name:"Test: an empty-string tab value is a real selection",parameters:{controls:{disable:!0}},render:()=>e.jsx(Kt,{}),play:async({canvasElement:t})=>{const a=B(t);await z(async()=>{await l(a.getByTestId("empty-fallback-value")).toHaveTextContent('Parent value: ""')}),await l(a.getByRole("tab",{name:"Overview"})).toHaveAttribute("aria-selected","true");const s=t.querySelector("[data-empty-wrapper]");if(!s)throw new Error("empty wrapper not found");const n=a.getByRole("tab",{name:"Summary section"});s.style.width=`${String(Math.ceil(n.getBoundingClientRect().width)+48)}px`;const c=a.getByRole("tablist",{name:"Empty selected"});await z(async()=>{await l(B(c).getAllByRole("tab")).toHaveLength(1)});const b=B(c).getByRole("tab",{name:"Summary section"});await l(b).toHaveAttribute("aria-selected","true"),await l(b).toHaveAttribute("tabindex","0")}},Re={name:"Test: a responsive panel display never reveals an inactive panel",parameters:{controls:{disable:!0}},render:t=>e.jsxs(T,{...t,"aria-label":"Responsive panels",defaultValue:"work",children:[e.jsx(o,{value:"work",children:"Work"}),e.jsx(o,{value:"materials",children:"Materials"}),e.jsxs(i,{value:"work",display:{xs:"flex"},gap:"8",py:"16",children:[e.jsx(p,{children:"Work content."}),e.jsx(Z,{children:"Start work"})]}),e.jsxs(i,{value:"materials",display:{xs:"flex"},gap:"8",py:"16",children:[e.jsx(p,{children:"Materials content."}),e.jsx(Z,{children:"Issue materials"})]})]}),play:async({canvasElement:t})=>{const a=B(t);await l(a.getByText("Work content.")).toBeVisible(),await l(a.getByText("Materials content.")).not.toBeVisible(),await l(a.queryByRole("button",{name:"Issue materials"})).toBeNull(),await R.click(a.getByRole("tab",{name:"Materials"})),await l(a.getByText("Materials content.")).toBeVisible(),await l(a.getByText("Work content.")).not.toBeVisible()}},Be={name:"Test: tab values with spaces still link tab and panel",parameters:{controls:{disable:!0}},render:t=>e.jsxs(T,{...t,"aria-label":"Order sections",defaultValue:"work orders",children:[e.jsx(o,{value:"work orders",children:"Work orders"}),e.jsx(o,{value:"sales orders",children:"Sales orders"}),e.jsx(i,{value:"work orders",children:e.jsx(p,{py:"16",children:"Open work orders."})}),e.jsx(i,{value:"sales orders",children:e.jsx(p,{py:"16",children:"Open sales orders."})})]}),play:async({canvasElement:t})=>{const a=B(t),s=a.getByRole("tab",{name:"Work orders"}),n=a.getByRole("tabpanel",{name:"Work orders"});await l(n.id).not.toMatch(/\s/),await l(s.id).not.toMatch(/\s/),await l(s).toHaveAttribute("aria-controls",n.id),await l(n).toHaveAttribute("aria-labelledby",s.id)}};var Ne,qe,_e;oe.parameters={...oe.parameters,docs:{...(Ne=oe.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
}`,...(_e=(qe=oe.parameters)==null?void 0:qe.docs)==null?void 0:_e.source}}};var De,ze,$e;le.parameters={...le.parameters,docs:{...(De=le.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
}`,...($e=(ze=le.parameters)==null?void 0:ze.docs)==null?void 0:$e.source}}};var Ke,Ue,Ge;ie.parameters={...ie.parameters,docs:{...(Ke=ie.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
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
}`,...(Ge=(Ue=ie.parameters)==null?void 0:Ue.docs)==null?void 0:Ge.source}}};var Qe,Ye,Je;ce.parameters={...ce.parameters,docs:{...(Qe=ce.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
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
}`,...(Je=(Ye=ce.parameters)==null?void 0:Ye.docs)==null?void 0:Je.source}}};var Xe,Ze,ea;de.parameters={...de.parameters,docs:{...(Xe=de.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
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
}`,...(ea=(Ze=de.parameters)==null?void 0:Ze.docs)==null?void 0:ea.source}}};var aa,ta,na;ue.parameters={...ue.parameters,docs:{...(aa=ue.parameters)==null?void 0:aa.docs,source:{originalSource:`{
  name: 'Ex: Work View',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <WorkView />
}`,...(na=(ta=ue.parameters)==null?void 0:ta.docs)==null?void 0:na.source}}};var sa,ra,oa;be.parameters={...be.parameters,docs:{...(sa=be.parameters)==null?void 0:sa.docs,source:{originalSource:`{
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
}`,...(oa=(ra=be.parameters)==null?void 0:ra.docs)==null?void 0:oa.source}}};var la,ia,ca;pe.parameters={...pe.parameters,docs:{...(la=pe.parameters)==null?void 0:la.docs,source:{originalSource:`{
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
}`,...(ca=(ia=pe.parameters)==null?void 0:ia.docs)==null?void 0:ca.source}}};var da,ua,ba;he.parameters={...he.parameters,docs:{...(da=he.parameters)==null?void 0:da.docs,source:{originalSource:`{
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
}`,...(ba=(ua=he.parameters)==null?void 0:ua.docs)==null?void 0:ba.source}}};var pa,ha,va;ve.parameters={...ve.parameters,docs:{...(pa=ve.parameters)==null?void 0:pa.docs,source:{originalSource:`{
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
}`,...(va=(ha=ve.parameters)==null?void 0:ha.docs)==null?void 0:va.source}}};var ma,wa,fa;me.parameters={...me.parameters,docs:{...(ma=me.parameters)==null?void 0:ma.docs,source:{originalSource:`{
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
}`,...(fa=(wa=me.parameters)==null?void 0:wa.docs)==null?void 0:fa.source}}};var ya,ga,xa;we.parameters={...we.parameters,docs:{...(ya=we.parameters)==null?void 0:ya.docs,source:{originalSource:`{
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
}`,...(xa=(ga=we.parameters)==null?void 0:ga.docs)==null?void 0:xa.source}}};var Ta,ka,ja;ye.parameters={...ye.parameters,docs:{...(Ta=ye.parameters)==null?void 0:Ta.docs,source:{originalSource:`{
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
}`,...(ja=(ka=ye.parameters)==null?void 0:ka.docs)==null?void 0:ja.source}}};var Ra,Ba,Sa;ge.parameters={...ge.parameters,docs:{...(Ra=ge.parameters)==null?void 0:Ra.docs,source:{originalSource:`{
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
}`,...(Sa=(Ba=ge.parameters)==null?void 0:Ba.docs)==null?void 0:Sa.source}}};var Pa,Ea,Ca;xe.parameters={...xe.parameters,docs:{...(Pa=xe.parameters)==null?void 0:Pa.docs,source:{originalSource:`{
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
}`,...(Ca=(Ea=xe.parameters)==null?void 0:Ea.docs)==null?void 0:Ca.source}}};var Aa,Ha,Ma;Te.parameters={...Te.parameters,docs:{...(Aa=Te.parameters)==null?void 0:Aa.docs,source:{originalSource:`{
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
}`,...(Ma=(Ha=Te.parameters)==null?void 0:Ha.docs)==null?void 0:Ma.source}}};var Oa,Va,Ia;ke.parameters={...ke.parameters,docs:{...(Oa=ke.parameters)==null?void 0:Oa.docs,source:{originalSource:`{
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

    // Repeated keys walk from the focused tab, not the committed value.
    wrapper.style.width = '';
    await waitFor(async () => {
      await expect(canvas.getAllByRole('tab')).toHaveLength(3);
    });
    await userEvent.keyboard('{ArrowLeft}');
    await waitFor(async () => {
      await expect(canvas.getByTestId('deferred-value')).toHaveTextContent('Parent value: alpha');
    });

    // Both presses land before the parent commits: Alpha → Bravo → Charlie.
    await userEvent.keyboard('{ArrowRight}{ArrowRight}');
    const charlie = canvas.getByRole('tab', {
      name: 'Charlie section'
    });
    await expect(charlie).toHaveFocus();
    await waitFor(async () => {
      await expect(canvas.getByTestId('deferred-value')).toHaveTextContent('Parent value: charlie');
    });

    // And back again: Charlie → Bravo → Alpha.
    await userEvent.keyboard('{ArrowLeft}{ArrowLeft}');
    await expect(canvas.getByRole('tab', {
      name: 'Alpha section'
    })).toHaveFocus();
    await waitFor(async () => {
      await expect(canvas.getByTestId('deferred-value')).toHaveTextContent('Parent value: alpha');
    });
  }
}`,...(Ia=(Va=ke.parameters)==null?void 0:Va.docs)==null?void 0:Ia.source}}};var Fa,Wa,La;je.parameters={...je.parameters,docs:{...(Fa=je.parameters)==null?void 0:Fa.docs,source:{originalSource:`{
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
}`,...(La=(Wa=je.parameters)==null?void 0:Wa.docs)==null?void 0:La.source}}};var Na,qa,_a;Re.parameters={...Re.parameters,docs:{...(Na=Re.parameters)==null?void 0:Na.docs,source:{originalSource:`{
  name: 'Test: a responsive panel display never reveals an inactive panel',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: args => <Tabs {...args} aria-label="Responsive panels" defaultValue="work">
      <Tab value="work">Work</Tab>
      <Tab value="materials">Materials</Tab>
      <TabPanel value="work" display={{
      xs: 'flex'
    }} gap="8" py="16">
        <Text>Work content.</Text>
        <Button>Start work</Button>
      </TabPanel>
      <TabPanel value="materials" display={{
      xs: 'flex'
    }} gap="8" py="16">
        <Text>Materials content.</Text>
        <Button>Issue materials</Button>
      </TabPanel>
    </Tabs>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Work content.')).toBeVisible();
    await expect(canvas.getByText('Materials content.')).not.toBeVisible();
    await expect(canvas.queryByRole('button', {
      name: 'Issue materials'
    })).toBeNull();
    await userEvent.click(canvas.getByRole('tab', {
      name: 'Materials'
    }));
    await expect(canvas.getByText('Materials content.')).toBeVisible();
    await expect(canvas.getByText('Work content.')).not.toBeVisible();
  }
}`,...(_a=(qa=Re.parameters)==null?void 0:qa.docs)==null?void 0:_a.source}}};var Da,za,$a;Be.parameters={...Be.parameters,docs:{...(Da=Be.parameters)==null?void 0:Da.docs,source:{originalSource:`{
  name: 'Test: tab values with spaces still link tab and panel',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: args => <Tabs {...args} aria-label="Order sections" defaultValue="work orders">
      <Tab value="work orders">Work orders</Tab>
      <Tab value="sales orders">Sales orders</Tab>
      <TabPanel value="work orders">
        <Text py="16">Open work orders.</Text>
      </TabPanel>
      <TabPanel value="sales orders">
        <Text py="16">Open sales orders.</Text>
      </TabPanel>
    </Tabs>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const tab = canvas.getByRole('tab', {
      name: 'Work orders'
    });
    const panel = canvas.getByRole('tabpanel', {
      name: 'Work orders'
    });
    await expect(panel.id).not.toMatch(/\\s/);
    await expect(tab.id).not.toMatch(/\\s/);
    await expect(tab).toHaveAttribute('aria-controls', panel.id);
    await expect(panel).toHaveAttribute('aria-labelledby', tab.id);
  }
}`,...($a=(za=Be.parameters)==null?void 0:za.docs)==null?void 0:$a.source}}};const gn=["Default","WithBadges","Overflow","LabelOverride","UnmountInactive","ExWorkView","ControlledFallback","UncontrolledFallback","OverflowMetadata","ComposedTabHandlers","DisabledFirstTab","BadgeKeepsHeight","ToggleReserveOnlyOnOverflow","FragmentChildren","ConsumerRef","BadgeTooltipOnFocus","DeferredControlledOverflow","EmptyStringValue","ResponsivePanelDisplay","ValuesWithSpaces"];export{we as BadgeKeepsHeight,Te as BadgeTooltipOnFocus,ve as ComposedTabHandlers,xe as ConsumerRef,be as ControlledFallback,oe as Default,ke as DeferredControlledOverflow,me as DisabledFirstTab,je as EmptyStringValue,ue as ExWorkView,ge as FragmentChildren,ce as LabelOverride,ie as Overflow,he as OverflowMetadata,Re as ResponsivePanelDisplay,ye as ToggleReserveOnlyOnOverflow,pe as UncontrolledFallback,de as UnmountInactive,Be as ValuesWithSpaces,le as WithBadges,gn as __namedExportsOrder,yn as default};
