import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./index-BKyFwriW.js";import{w as k,e as r,u as j,a as z}from"./index-B_RCCgW0.js";import{m as mt,a as ht,b as wt,e as ft,g as yt,s as Oe,B as g,c as Ve,d as rt}from"./dsComponent-BG2jnRr7.js";import{B as Z}from"./Button-Cr4bC5CG.js";import{I as gt}from"./Icon-CrwLKW7B.js";import"./IconConfig-BuieZFlx.js";import{T as p}from"./Text-D7o8GTmv.js";import{u as Tt,c as xt,E as kt,m as jt,o as Bt,d as Rt,e as St,h as Pt,k as At,F as Et,D as Ht,G as Ct,H as Mt,t as Ot}from"./Tooltip-BalB055p.js";import{g as Vt,s as ot,M as It,a as Wt}from"./SubMenu-Ckw0iahm.js";import{B as Ft}from"./Badge-DBgIjuLw.js";import{I as lt}from"./IconButton-DJZTBtBz.js";import{u as Lt}from"./useControllableState-ByGfjEIG.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Spinner-PLunUSsK.js";import"./FieldContext-D6URyQos.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";import"./HighlightText-DKF3xkQK.js";import"./menu-BvaagRwT.js";import"./FloatingLayerContext-BryH8O9I.js";import"./ListItemGroup-MMaap-1i.js";import"./Divider-Dbp7vcYx.js";import"./Checkbox-BKc0omfg.js";import"./Toggle-mlz1wkXL.js";const it={hasOverflow:!1},qt=[],Dt=[["root","tabs__root"],["strip","tabs__strip"],["list","tabs__list"],["tab","tabs__tab"],["badge","tabs__badge"],["overflow","tabs__overflow"],["menu","tabs__menu"],["panel","tabs__panel"]],Nt=Dt.map(([t,a])=>[t,ft(a,it,yt(qt,t))]),_t=mt((t={})=>Object.fromEntries(Nt.map(([a,n])=>[a,n.recipeFn(t)]))),Le=["hasOverflow","overflowed"],zt=t=>({...it,...ht(t)}),ct=Object.assign(_t,{__recipe__:!1,__name__:"tabs",raw:t=>t,classNameMap:{},variantKeys:Le,variantMap:{hasOverflow:["false","true"],overflowed:["true"]},splitVariantProps(t){return wt(t,Le)},getVariantProps:zt}),$t=32,re=(t,a)=>t.length===a.length&&t.every((n,s)=>n===a[s]),Kt=(t,a,n)=>{for(const s of a)n.has(s)||t==null||t.unobserve(s);for(const s of n)a.has(s)||t==null||t.observe(s);return n},Ut=({items:t,containerRef:a,getItemElement:n,activeItem:s=null,reserve:c=$t,reserveRef:d,enabled:h=!0})=>{const[y,x]=o.useState(()=>[...t]),[f,V]=o.useState([]),[S,I]=o.useState(null),R=o.useRef(null),E=o.useRef(t),P=o.useRef(s),D=o.useRef(S),W=o.useRef(null),K=o.useRef(c),N=o.useRef(null),H=o.useRef(h),F=o.useRef(null),A=o.useRef(new Set),C=o.useRef(null),L=o.useCallback(()=>{var We;const u=a.current,v=E.current;if(!H.current||!u){x(w=>re(w,v)?w:[...v]),V(w=>w.length===0?w:[]);return}const b=globalThis.getComputedStyle(u),m=Number.parseFloat(b.paddingLeft||"0")+Number.parseFloat(b.paddingRight||"0"),B=Number.parseFloat(b.columnGap||"0")||0,U=u.clientWidth-m,$=v.map(w=>{var O;return((O=n(w))==null?void 0:O.offsetWidth)??Number.POSITIVE_INFINITY}),Q=D.current,M=P.current,J=Q??M,te=J===null?-1:v.indexOf(J),ne=te===-1?0:te,se=[...new Set([Q,M].filter(w=>w!==null).map(w=>v.indexOf(w)).filter(w=>w!==-1))],He=v.map((w,O)=>O).sort((w,O)=>{const _=Math.abs(w-ne)-Math.abs(O-ne);return _===0?w-O:_}),ee=(w,O)=>{const _=new Set;let Ce=0;for(const X of w)Ce+=($[X]??0)+(_.size>0?B:0),_.add(X);for(const X of He){if(_.has(X))continue;const Fe=($[X]??0)+(_.size>0?B:0);if(Ce+Fe>O)break;Ce+=Fe,_.add(X)}return _};let Y=ee([],U);if(Y.size<v.length){const w=((We=N.current)==null?void 0:We.offsetWidth)??K.current,O=U-w;Y=ee([],O),se.some(_=>!Y.has(_))&&(Y=ee(se,O))}const ae=[],q=[];v.forEach((w,O)=>{Y.has(O)?ae.push(w):q.push(w)}),x(w=>re(w,ae)?w:ae),V(w=>re(w,q)?w:q)},[a,n]),G=o.useCallback((u,v)=>{if(E.current.includes(u)){if(!f.includes(u)){v==null||v();return}C.current={key:u,onVisible:v},W.current=P.current,I(u)}},[f]);return o.useLayoutEffect(()=>{const u=()=>{R.current!==null&&globalThis.cancelAnimationFrame(R.current),R.current=globalThis.requestAnimationFrame(()=>{R.current=null,L()})},v=typeof ResizeObserver>"u"?null:new ResizeObserver(u);return F.current=v,globalThis.addEventListener("resize",u),()=>{v==null||v.disconnect(),F.current=null,A.current.clear(),globalThis.removeEventListener("resize",u),R.current!==null&&(globalThis.cancelAnimationFrame(R.current),R.current=null)}},[L]),o.useLayoutEffect(()=>{re(E.current,t)||(E.current=[...t]),P.current=s,D.current=S,K.current=c,N.current=(d==null?void 0:d.current)??null,H.current=h;const u=new Set,v=a.current;if(h&&v){u.add(v),N.current&&u.add(N.current);for(const b of E.current){const m=n(b);m&&u.add(m)}}A.current=Kt(F.current,A.current,u),L()},[s,a,h,S,n,t,L,c,d]),o.useLayoutEffect(()=>{var v;const u=C.current;if(u){if(!E.current.includes(u.key)){C.current=null,I(null);return}f.includes(u.key)||(C.current=null,(v=u.onVisible)==null||v.call(u))}},[f]),o.useLayoutEffect(()=>{if(S===null)return;const u=!t.includes(S);if(!u&&s===W.current)return;const v=C.current;v&&(u||v.key!==s)&&(C.current=null),W.current=null,I(null)},[s,S,t]),{visible:y,overflow:f,hasOverflow:f.length>0,measure:L,ensureVisible:G}},dt=o.createContext(null),Gt=o.createContext(!0),Qt=dt.Provider,Yt=Gt.Provider,ut=()=>{const t=o.useContext(dt);if(!t)throw new Error("Tabs compound components must be used within <Tabs />");return t},Ee={tab:"Tab",panel:"TabPanel"},Ie="__tabsComponentType",bt=t=>Vt(t,Ie),pt=t=>{const a=[],n=(s,c)=>{o.Children.toArray(s).forEach(d=>{if(o.isValidElement(d)&&d.type===o.Fragment){n(d.props.children,`${c}${String(d.key)}/`);return}a.push(c!==""&&o.isValidElement(d)?o.cloneElement(d,{key:`${c}${String(d.key)}`}):d)})};return n(t,""),a},Jt=ct({overflowed:!0}).tab,qe=Ct({size:"md",hasTitle:!1}),l=t=>{const{value:a,children:n,label:s,badge:c,badgeTooltip:d,disabled:h=!1,onClick:y,onKeyDown:x,ref:f,...V}=t,{classes:S,getPanelId:I,getTabId:R,onTabKeyDown:E,overflowValues:P,registerTabElement:D,selectTab:W,selectedValue:K}=ut(),N=K===a,H=P.includes(a),[F,A]=Oe(V),C=o.useCallback(q=>{D(a,q)},[D,a]),L=H?Jt:S.tab,G=typeof c=="number"&&c!==0,u=G&&!!d&&!H,[v,b]=o.useState(!1),m=o.useRef(null),B=u&&v,{refs:U,elements:$,floatingStyles:Q,context:M}=Tt({open:B,onOpenChange:b,placement:"bottom",middleware:xt({offset:8,extras:[kt({element:m})]})}),J=jt(M,{enabled:u,move:!1}),te=Bt(M,{enabled:u}),ne=Rt(M,{enabled:u}),se=St(M,{enabled:u,role:"tooltip"}),{getReferenceProps:He,getFloatingProps:ee}=Pt([J,te,ne,se]),Y=At([C,U.setReference,f]),ae=G?e.jsx(g,{ref:U.setPositionReference,className:S.badge,children:e.jsx(Ft,{count:c,variant:"subtle"})}):null;return e.jsxs(e.Fragment,{children:[e.jsxs(g,{as:"button",type:"button",ref:Y,role:"tab","aria-selected":N,"aria-controls":I(a),"aria-hidden":H||void 0,disabled:h,tabIndex:N&&!H?0:-1,className:Ve(L,F),...He({...A,onClick:q=>{y==null||y(q),!(h||q.defaultPrevented)&&W(q,a,"clicked-on-tab")},onKeyDown:q=>{x==null||x(q),q.defaultPrevented||E(q)}}),id:R(a),children:[n,ae]}),B?e.jsx(Et,{children:e.jsx(Ht,{reference:$.domReference,children:e.jsxs(g,{...rt("Tooltip"),ref:U.setFloating,style:Q,className:qe.tooltipContent,...ee(),children:[e.jsx(g,{className:qe.text,children:d}),e.jsx(Mt,{ref:m,context:M,fill:Ot.var("colors.bg.neutral.inverse")})]})})}):null]})};ot(l,Ie,Ee.tab);l.__docgenInfo={description:'Selects one panel inside a {@link Tabs} strip.\n\nRenders a `button` with `role="tab"`. Only the selected tab is in the tab\norder; Arrow, Home, and End move between the others. A tab that does not fit\nthe strip stays mounted but hidden so it can still be measured, and it is\noffered in the overflow menu instead. The menu row is plain text, so give\n`label` when `children` are not plain text.\n\n`badgeTooltip` opens on hover and on keyboard focus of the tab itself, points\nat the badge, and is linked to the tab with `aria-describedby` while open.\n\n@example\n```tsx\n<Tab value="materials" badge={3} badgeTooltip="2 Open Part Request">\n  Materials\n</Tab>\n```',methods:[],displayName:"Tab",props:{value:{required:!0,tsType:{name:"string"},description:"Identifies the tab and the `TabPanel` it controls. Must be unique within a `Tabs`."},children:{required:!1,tsType:{name:"ReactNode"},description:"Visible label rendered in the strip. Plain text is also reused as the overflow-menu row's text unless `label` overrides it."},label:{required:!1,tsType:{name:"string"},description:"Plain-text name for this tab's overflow-menu row, which cannot render\nmarkup. Set it when `children` contain more than text — an icon, a nested\nelement — because flattening those to a string reads badly. It never\nchanges what the strip renders: `children` still render there as-is.\nWithout it the menu row falls back to the flattened `children`, then to\n`value`."},badge:{required:!1,tsType:{name:"number"},description:"Count shown in a trailing {@link Badge}. A zero or omitted count renders no badge."},badgeTooltip:{required:!1,tsType:{name:"string"},description:"Tooltip text describing what the badge counts. Requires `badge`."},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents selection and skips the tab during arrow-key navigation."}}};const i=t=>{const{value:a,children:n,...s}=t,{classes:c,getPanelId:d,getTabId:h,selectedValue:y,unmountInactive:x}=ut(),f=y===a,[V,S]=Oe(s);if(x&&!f)return null;const R=typeof n=="function"?n({isActive:f}):n;return e.jsx(Yt,{value:f,children:e.jsx(g,{role:"tabpanel","aria-labelledby":h(a),tabIndex:f?0:-1,display:f?"block":"none",_hidden:{display:"none"},className:Ve(c.panel,V),...S,id:d(a),hidden:!f,children:R})})};ot(i,Ie,Ee.panel);i.__docgenInfo={description:'Renders the content for one {@link Tab}.\n\nThe panel stays mounted when another tab is selected and is hidden with\n`display: none`, which preserves scroll position and local state; set\n`unmountInactive` on `Tabs` to render only the selected panel instead. A\nfunction child receives `{ isActive }`, and descendants can call\n`useTabPanelActive()` for the same signal, so hidden panels can pause polling\nor animation.\n\n@example\n```tsx\n<TabPanel value="materials">\n  {({ isActive }) => <MaterialsGrid paused={!isActive} />}\n</TabPanel>\n```',methods:[],displayName:"TabPanel",props:{value:{required:!0,tsType:{name:"string"},description:"`value` of the {@link Tab} this panel belongs to."},children:{required:!1,tsType:{name:"union",raw:"ReactNode | ((props: TabPanelRenderProps) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:"Panel content. A function child receives `{ isActive }` so expensive work\ncan pause while the panel is mounted but hidden."}}};const Me=t=>t==null||typeof t=="boolean"?"":typeof t=="string"||typeof t=="number"?String(t):Array.isArray(t)?t.map(a=>Me(a)).join(""):o.isValidElement(t)?Me(t.props.children):"",Xt=({children:t,value:a,defaultValue:n,onChange:s,listRef:c,overflowRef:d})=>{var v;const h=o.useMemo(()=>{const b=[];return pt(t).forEach(m=>{if(!o.isValidElement(m)||bt(m)!==Ee.tab)return;const B=m.props;typeof B.value=="string"&&b.push({value:B.value,label:B.label||Me(B.children)||B.value,disabled:!!B.disabled,badge:B.badge,badgeTooltip:B.badgeTooltip})}),b},[t]),y=o.useMemo(()=>h.map(b=>b.value),[h]),x=(v=h.find(b=>!b.disabled))==null?void 0:v.value,[f,V,S]=Lt({value:a,defaultValue:n??x??""}),I=o.useRef(f),R=h.find(b=>b.value===f),E=!!(R&&!R.disabled),P=E?f:x,D=o.useRef(null);o.useEffect(()=>{if(E){D.current=null;return}const b=JSON.stringify([f,x??null]);D.current!==b&&(D.current=b,S||V(x??""),x!==void 0&&(I.current=x,s==null||s(null,x,"fallback-after-removal")))},[x,S,E,s,V,f]);const W=o.useRef(new Map),K=o.useCallback((b,m)=>{m?W.current.set(b,m):W.current.delete(b)},[]),N=o.useCallback(b=>W.current.get(b)??null,[]),{ensureVisible:H,overflow:F,hasOverflow:A}=Ut({items:y,containerRef:c,getItemElement:N,activeItem:P??null,reserveRef:d}),C=o.useCallback((b,m,B)=>{m===f&&I.current===f||(I.current=m,V(m),s==null||s(b,m,B))},[s,V,f]),L=o.useCallback(b=>{H(b,()=>{var m;(m=W.current.get(b))==null||m.focus()})},[H]),G=o.useCallback(b=>{const m=h.filter(M=>!M.disabled).map(M=>M.value);if(m.length===0)return;let B=P;for(const[M,J]of W.current)if(J===b.currentTarget){B=M;break}const U=B===void 0?0:Math.max(0,m.indexOf(B));let $;switch(b.key){case"ArrowRight":$=(U+1)%m.length;break;case"ArrowLeft":$=(U-1+m.length)%m.length;break;case"Home":$=0;break;case"End":$=m.length-1;break;default:return}b.preventDefault();const Q=m[$];Q!==void 0&&(C(b,Q,"clicked-on-tab"),L(Q))},[L,C,P,h]),u=o.useMemo(()=>F.map(b=>h.find(m=>m.value===b)).filter(b=>!!b),[F,h]);return{hasOverflow:A,focusTab:L,onTabKeyDown:G,overflowTabs:u,overflowValues:F,registerTabElement:K,selectTab:C,selectedValue:P,tabs:h}},Zt=({className:t,focusTab:a,tabs:n,selectTab:s,selectedValue:c})=>{const[d,h]=o.useState(!1);return e.jsx(It,{open:d,onOpenChange:h,placement:"bottom-end",className:t,trigger:e.jsx(lt,{variant:"ghost",size:"md",iconName:d?"caret-up":"caret-down",altText:"More tabs","aria-haspopup":"menu"}),children:n.map(y=>{const x=typeof y.badge=="number"&&y.badge!==0;return e.jsx(Wt,{label:x?`${y.label} (${String(y.badge)})`:y.label,description:x?y.badgeTooltip:void 0,disabled:y.disabled,selected:y.value===c,role:"menuitemradio","aria-checked":y.value===c,onClick:f=>{s(f,y.value,"selected-from-overflow"),a(y.value),h(!1)}},y.value)})})},T=t=>{const{children:a,value:n,defaultValue:s,onChange:c,unmountInactive:d=!1,"aria-label":h,"aria-labelledby":y,...x}=t,[f,V]=Oe(x),S=o.useRef(null),I=o.useRef(null),R=o.useId(),{focusTab:E,hasOverflow:P,onTabKeyDown:D,overflowTabs:W,overflowValues:K,registerTabElement:N,selectTab:H,selectedValue:F}=Xt({children:a,value:n,defaultValue:s,onChange:c,listRef:S,overflowRef:I}),A=o.useMemo(()=>ct({hasOverflow:P}),[P]),[C,L]=o.useMemo(()=>{const u=[],v=[];return pt(a).forEach(b=>{bt(b)===Ee.tab?u.push(b):v.push(b)}),[u,v]},[a]),G=o.useMemo(()=>({classes:A,getPanelId:u=>`${R}-panel-${encodeURIComponent(u)}`,getTabId:u=>`${R}-tab-${encodeURIComponent(u)}`,onTabKeyDown:D,overflowValues:K,registerTabElement:N,selectTab:H,selectedValue:F,unmountInactive:d}),[R,A,D,K,N,H,F,d]);return e.jsx(Qt,{value:G,children:e.jsxs(g,{...rt("Tabs"),className:Ve(A.root,f),...V,children:[e.jsxs(g,{className:A.strip,children:[e.jsx(g,{ref:S,role:"tablist","aria-label":h,"aria-labelledby":y,"aria-orientation":"horizontal",className:A.list,children:C}),e.jsx(g,{ref:I,className:A.overflow,"aria-hidden":!P||void 0,children:P?e.jsx(Zt,{className:A.menu,focusTab:E,tabs:W,selectTab:H,selectedValue:F}):e.jsx(lt,{variant:"ghost",size:"md",iconName:"caret-down",altText:"More tabs",disabled:!0,tabIndex:-1})})]}),L]})})};T.__docgenInfo={description:'Groups related content into a single view with one panel visible at a time.\n\nCompose it from `Tab` and `TabPanel` children; the first enabled `Tab` is\nselected by default. Selection is uncontrolled with `defaultValue` or\ncontrolled with `value` plus `onChange`. Tabs that do not fit the available width move into\nan overflow menu at the end of the strip, and the selected tab always stays\nvisible. Every panel stays mounted and hidden unless `unmountInactive` is\nset, so read `useTabPanelActive()` to pause work in a hidden panel.\n\nThe strip renders a `tablist` with roving tabindex and Arrow, Home, and End\nnavigation. Supply `aria-label` or `aria-labelledby` so it is announced.\n\n@example\n```tsx\n<Tabs defaultValue="work" aria-label="Order sections">\n  <Tab value="work">Work</Tab>\n  <Tab value="materials" badge={3}>Materials</Tab>\n  <TabPanel value="work">Work content</TabPanel>\n  <TabPanel value="materials">Materials content</TabPanel>\n</Tabs>\n```',methods:[],displayName:"Tabs",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"`Tab` and `TabPanel` children. Tab order in the strip follows source order."},value:{required:!1,tsType:{name:"string"},description:"Controlled selected tab `value`. Pair with `onChange`; omit it to use `defaultValue`."},defaultValue:{required:!1,tsType:{name:"string"},description:"Initially selected tab `value` when `value` is not provided. It is used\nonly on first render.\n@default the first `Tab` child's `value`"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  event: TabsChangeEvent,
  value: string,
  reason: TabsChangeReason,
) => void`,signature:{arguments:[{type:{name:"union",raw:`| ReactMouseEvent<HTMLElement>
| ReactKeyboardEvent<HTMLElement>
| null`,elements:[{name:"ReactMouseEvent",elements:[{name:"HTMLElement"}],raw:"ReactMouseEvent<HTMLElement>"},{name:"ReactKeyboardEvent",elements:[{name:"HTMLElement"}],raw:"ReactKeyboardEvent<HTMLElement>"},{name:"null"}]},name:"event"},{type:{name:"string"},name:"value"},{type:{name:"union",raw:`| 'clicked-on-tab'
| 'selected-from-overflow'
| 'fallback-after-removal'`,elements:[{name:"literal",value:"'clicked-on-tab'"},{name:"literal",value:"'selected-from-overflow'"},{name:"literal",value:"'fallback-after-removal'"}]},name:"reason"}],return:{name:"void"}}},description:"Runs when user interaction selects a different tab."},unmountInactive:{required:!1,tsType:{name:"boolean"},description:"Renders only the selected `TabPanel`. By default every panel stays mounted\nand inactive panels are hidden with `display: none`, which preserves their\nscroll position and local state.\n@default false"},"aria-label":{required:!1,tsType:{name:"string"},description:"Accessible name for the tab strip. Provide this or `aria-labelledby` so the\n`tablist` is announced."},"aria-labelledby":{required:!1,tsType:{name:"string"},description:"Id of an element that labels the tab strip."}}};const Cn={title:"Components/Tabs",component:T,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:["Tabs keep every `TabPanel` mounted by default and hide the inactive","ones with `display: none`. That preserves scroll position, form","drafts, and grid state when a user moves between tabs, at the cost","of keeping hidden work alive. Hidden panels receive an `isActive`","signal — as a render-prop argument or through `useTabPanelActive()`","— so polling, timers, and animation can pause themselves. Set","`unmountInactive` when a panel is expensive enough that discarding","its state is the better trade."].join(" ")}}},args:{"aria-label":"Example sections",children:null}},oe={render:t=>e.jsxs(T,{...t,defaultValue:"overview",children:[e.jsx(l,{value:"overview",children:"Overview"}),e.jsx(l,{value:"activity",children:"Activity"}),e.jsx(l,{value:"settings",children:"Settings"}),e.jsx(i,{value:"overview",children:e.jsx(p,{py:"16",children:"Summary of the current record."})}),e.jsx(i,{value:"activity",children:e.jsx(p,{py:"16",children:"Recent activity for the current record."})}),e.jsx(i,{value:"settings",children:e.jsx(p,{py:"16",children:"Settings for the current record."})})]})},le={name:"Badges",parameters:{controls:{disable:!0}},render:t=>e.jsxs(T,{...t,defaultValue:"work",children:[e.jsx(l,{value:"work",children:"Work"}),e.jsx(l,{value:"materials",badge:3,badgeTooltip:"2 Open Part Request, 1 Short Part(s)",children:"Materials"}),e.jsx(l,{value:"status",badge:12,children:"Status"}),e.jsx(l,{value:"documents",badge:0,children:"Documents"}),e.jsx(i,{value:"work",children:e.jsx(p,{py:"16",children:"A badge without a tooltip is a bare count."})}),e.jsx(i,{value:"materials",children:e.jsx(p,{py:"16",children:"Hover or focus the Materials tab to read what the count means."})}),e.jsx(i,{value:"status",children:e.jsx(p,{py:"16",children:"Status content."})}),e.jsx(i,{value:"documents",children:e.jsx(p,{py:"16",children:"A zero count renders no badge at all."})})]})},De=["Work","Info","Materials","Status","Documents","History","Labor","Quality","Shipping","Invoicing","Costing","Notes"],ie={name:"Overflow",parameters:{controls:{disable:!0}},render:t=>e.jsxs(g,{resize:"horizontal",overflow:"auto",width:"lg",maxWidth:"full",minWidth:"240",borderWidth:"1",borderStyle:"dashed",borderColor:"border",p:"16",children:[e.jsx(p,{pb:"12",color:"text.subtlest",children:"Drag the bottom-right corner. Tabs nearest the selected one keep their place; the rest move into the overflow menu."}),e.jsxs(T,{...t,defaultValue:"work",children:[De.map(a=>e.jsx(l,{value:a.toLowerCase(),children:a},a)),De.map(a=>e.jsx(i,{value:a.toLowerCase(),children:e.jsxs(p,{py:"16",children:[a," content."]})},a))]})]})},Ne=[{value:"work",label:"Work",icon:"wrench-2"},{value:"materials",label:"Materials",icon:"cube-focus"},{value:"schedule",label:"Schedule",icon:"calendar-view-week"},{value:"shipping",label:"Shipping",icon:"truck-trailer"},{value:"quality",label:"Quality",icon:"list-checks"},{value:"history",label:"History",icon:"clock-countdown"},{value:"notes",label:"Notes",icon:"note-stack"}],ce={name:"Label Override for Overflow",parameters:{controls:{disable:!0}},render:t=>e.jsxs(g,{width:"md",maxWidth:"full",children:[e.jsx(p,{pb:"12",color:"text.subtlest",children:"These tabs render an icon beside their text, so flattening `children` would produce a poor menu row. Each one passes `label`, and the overflow menu uses that text. The strip still renders `children` as-is."}),e.jsxs(T,{...t,defaultValue:"work",children:[Ne.map(a=>e.jsxs(l,{value:a.value,label:a.label,children:[e.jsx(gt,{name:a.icon,"aria-hidden":!0}),a.label]},a.value)),Ne.map(a=>e.jsx(i,{value:a.value,children:e.jsxs(p,{py:"16",children:[a.label," content."]})},a.value))]})]})},de={name:"Unmount Inactive Panels",parameters:{controls:{disable:!0}},render:t=>e.jsxs(T,{...t,defaultValue:"first",unmountInactive:!0,children:[e.jsx(l,{value:"first",children:"First"}),e.jsx(l,{value:"second",children:"Second"}),e.jsx(i,{value:"first",children:e.jsx(p,{py:"16",children:"Only this panel exists in the DOM while it is selected."})}),e.jsx(i,{value:"second",children:e.jsx(p,{py:"16",children:"Switching tabs unmounts the other panel and discards its state."})})]})},en=()=>{const[t,a]=o.useState(!0),[n,s]=o.useState("none yet");return e.jsxs(g,{children:[e.jsx(g,{pb:"12",children:e.jsx(Z,{variant:"hollow",size:"sm",onClick:()=>a(c=>!c),children:t?"Remove Schedule tab":"Add Schedule tab"})}),e.jsxs(T,{"aria-label":"Work order sections",defaultValue:"work",onChange:(c,d,h)=>s(`${d} (${h})`),children:[e.jsx(l,{value:"work",children:"Work"}),e.jsx(l,{value:"info",children:"Info"}),e.jsx(l,{value:"materials",badge:3,badgeTooltip:"2 Open Part Request, 1 Short Part(s)",children:"Materials"}),e.jsx(l,{value:"status",badge:5,badgeTooltip:"5 Operations Behind",children:"Status"}),t?e.jsx(l,{value:"schedule",children:"Schedule"}):null,e.jsx(l,{value:"documents",children:"Documents"}),e.jsx(l,{value:"history",children:"History"}),e.jsx(i,{value:"work",children:e.jsx(p,{py:"16",children:"Work instructions and operations."})}),e.jsx(i,{value:"info",children:e.jsx(p,{py:"16",children:"Order header and customer details."})}),e.jsx(i,{value:"materials",children:e.jsx(p,{py:"16",children:"Bill of materials and part requests."})}),e.jsx(i,{value:"status",children:e.jsx(p,{py:"16",children:"Operation status roll-up."})}),e.jsx(i,{value:"schedule",children:({isActive:c})=>e.jsxs(p,{py:"16",children:["Schedule board. Live refresh is ",c?"running":"paused",". Select this tab, remove it with the button above, and the strip falls back to the first remaining tab."]})}),e.jsx(i,{value:"documents",children:e.jsx(p,{py:"16",children:"Attached drawings and travelers."})}),e.jsx(i,{value:"history",children:e.jsx(p,{py:"16",children:"Audit trail."})})]}),e.jsxs(p,{pt:"16",color:"text.subtlest",children:["Last change: ",n]})]})},ue={name:"Ex: Work View",parameters:{controls:{disable:!0}},render:()=>e.jsx(en,{})},an=()=>{const[t,a]=o.useState(!0),[n,s]=o.useState("schedule");return e.jsxs(g,{children:[e.jsx(Z,{variant:"hollow",size:"sm",onClick:()=>a(c=>!c),children:t?"Remove Schedule tab":"Add Schedule tab"}),e.jsxs(p,{py:"8","data-testid":"controlled-value",children:["Parent value: ",n]}),e.jsxs(T,{"aria-label":"Controlled sections",value:n,onChange:(c,d)=>s(d),children:[e.jsx(l,{value:"work",children:"Work"}),t?e.jsx(l,{value:"schedule",children:"Schedule"}):null,e.jsx(l,{value:"history",children:"History"}),e.jsx(i,{value:"work",children:"Work content."}),e.jsx(i,{value:"schedule",children:"Schedule content."}),e.jsx(i,{value:"history",children:"History content."})]})]})},be={name:"Test: controlled value follows a removed tab",parameters:{controls:{disable:!0}},render:()=>e.jsx(an,{}),play:async({canvasElement:t})=>{const a=k(t);await r(a.getByRole("tab",{name:"Schedule"})).toHaveAttribute("aria-selected","true"),await j.click(a.getByRole("button",{name:"Remove Schedule tab"})),await z(async()=>{await r(a.getByTestId("controlled-value")).toHaveTextContent("Parent value: work"),await r(a.getByRole("tab",{name:"Work"})).toHaveAttribute("aria-selected","true")})}},tn=()=>{const[t,a]=o.useState(!0);return e.jsxs(g,{children:[e.jsx(Z,{variant:"hollow",size:"sm",onClick:()=>a(n=>!n),children:t?"Remove Schedule tab":"Add Schedule tab"}),e.jsxs(T,{"aria-label":"Uncontrolled sections",defaultValue:"schedule",children:[e.jsx(l,{value:"work",children:"Work"}),t?e.jsx(l,{value:"schedule",children:"Schedule"}):null,e.jsx(l,{value:"history",children:"History"}),e.jsx(i,{value:"work",children:"Work content."}),e.jsx(i,{value:"schedule",children:"Schedule content."}),e.jsx(i,{value:"history",children:"History content."})]})]})},pe={name:"Test: removed uncontrolled value does not return",parameters:{controls:{disable:!0}},render:()=>e.jsx(tn,{}),play:async({canvasElement:t})=>{const a=k(t);await j.click(a.getByRole("button",{name:"Remove Schedule tab"})),await r(a.getByRole("tab",{name:"Work"})).toHaveAttribute("aria-selected","true"),await j.click(a.getByRole("button",{name:"Add Schedule tab"})),await r(a.getByRole("tab",{name:"Work"})).toHaveAttribute("aria-selected","true"),await r(a.getByRole("tab",{name:"Schedule"})).toHaveAttribute("aria-selected","false")}},ve={name:"Test: overflow keeps badge details and selection semantics",parameters:{controls:{disable:!0}},render:t=>e.jsx(g,{"data-overflow-metadata-wrapper":!0,children:e.jsxs(T,{...t,defaultValue:"work",children:[e.jsx(l,{value:"work",children:"Work"}),e.jsx(l,{value:"materials",badge:3,badgeTooltip:"2 Open Part Requests, 1 Short Part",children:"Materials"}),e.jsx(l,{value:"documents",children:"Documents"}),e.jsx(l,{value:"history",children:"History"}),e.jsx(i,{value:"work",children:"Work content."}),e.jsx(i,{value:"materials",children:"Materials content."}),e.jsx(i,{value:"documents",children:"Documents content."}),e.jsx(i,{value:"history",children:"History content."})]})}),play:async({canvasElement:t})=>{const a=k(t),n=k(t.ownerDocument.body),s=t.querySelector("[data-overflow-metadata-wrapper]");if(!s)throw new Error("overflow metadata wrapper not found");s.style.width="180px";const c=await a.findByRole("button",{name:"More tabs"});await j.click(c);const d=await n.findByRole("menuitemradio",{name:/Materials \(3\)/});await r(d).toHaveAttribute("aria-checked","false"),await r(d).toHaveTextContent("2 Open Part Requests, 1 Short Part")}},nn=()=>{const[t,a]=o.useState(0),[n,s]=o.useState("none");return e.jsxs(g,{children:[e.jsxs(p,{pb:"8","data-testid":"consumer-events",children:["Clicks: ",t,"; last key: ",n]}),e.jsxs(T,{"aria-label":"Handler composition",defaultValue:"first",children:[e.jsx(l,{value:"first",onClick:()=>a(c=>c+1),children:"First"}),e.jsx(l,{value:"second",onKeyDown:c=>s(c.key),children:"Second"}),e.jsx(i,{value:"first",children:"First content."}),e.jsx(i,{value:"second",children:"Second content."})]})]})},me={name:"Test: consumer handlers preserve tab interactions",parameters:{controls:{disable:!0}},render:()=>e.jsx(nn,{}),play:async({canvasElement:t})=>{const a=k(t),n=a.getByRole("tab",{name:"First"}),s=a.getByRole("tab",{name:"Second"}),c=a.getByTestId("consumer-events");await j.click(s),await r(s).toHaveAttribute("aria-selected","true"),await j.keyboard("{ArrowLeft}"),await r(n).toHaveAttribute("aria-selected","true"),await r(c).toHaveTextContent("last key: ArrowLeft"),await j.click(n),await r(c).toHaveTextContent("Clicks: 1")}},he={name:"Test: disabled first tab is not the default",parameters:{controls:{disable:!0}},render:t=>e.jsxs(g,{children:[e.jsx(p,{pb:"12",color:"text.subtlest",children:"No `defaultValue` is given and the first tab is disabled. The strip selects the first enabled tab so the keyboard can still enter it."}),e.jsxs(T,{...t,children:[e.jsx(l,{value:"archived",disabled:!0,children:"Archived"}),e.jsx(l,{value:"open",children:"Open"}),e.jsx(l,{value:"closed",children:"Closed"}),e.jsx(i,{value:"archived",children:e.jsx(p,{py:"16",children:"Archived content."})}),e.jsx(i,{value:"open",children:e.jsx(p,{py:"16",children:"Open content."})}),e.jsx(i,{value:"closed",children:e.jsx(p,{py:"16",children:"Closed content."})})]})]}),play:async({canvasElement:t})=>{const a=k(t),n=a.getByRole("tab",{name:"Open"});await r(n).toHaveAttribute("aria-selected","true"),await r(n).toHaveAttribute("tabindex","0"),await r(a.getByRole("tab",{name:"Archived"})).toHaveAttribute("aria-selected","false"),await j.tab(),await r(n).toHaveFocus()}},we={name:"Test: badge does not change tab height",parameters:{controls:{disable:!0}},render:t=>e.jsxs(g,{display:"flex",flexDirection:"column",gap:"16",children:[e.jsx(p,{color:"text.subtlest",children:"Both strips are 40px tall. The 20px badge sits inside the 22px line box and never grows the tab. Matches Figma `_TabsTab`."}),e.jsxs(T,{...t,"aria-label":"Without badges",defaultValue:"work",children:[e.jsx(l,{value:"work",children:"Work"}),e.jsx(l,{value:"materials",children:"Materials"})]}),e.jsxs(T,{...t,"aria-label":"With badges",defaultValue:"work",children:[e.jsx(l,{value:"work",badge:3,children:"Work"}),e.jsx(l,{value:"materials",badge:12,badgeTooltip:"12 Short Part(s)",children:"Materials"})]})]}),play:async({canvasElement:t})=>{const a=k(t),[n,s]=a.getAllByRole("tablist");await r(s==null?void 0:s.offsetHeight).toBe(n==null?void 0:n.offsetHeight);for(const c of a.getAllByRole("tab"))await r(c.offsetHeight).toBe(40)}},fe=["Work","Info","Materials","Status"],ye={name:"Test: toggle space is reserved only once tabs overflow",parameters:{controls:{disable:!0}},render:t=>e.jsxs(g,{children:[e.jsx(p,{pb:"12",color:"text.subtlest",children:"The wrapper is sized just above the strip width. Every tab fits, so no toggle renders. Shrinking it below the strip makes the measured toggle appear."}),e.jsx(g,{"data-fit-wrapper":!0,borderWidth:"1",borderStyle:"dashed",borderColor:"border",children:e.jsxs(T,{...t,defaultValue:"work",children:[fe.map(a=>e.jsx(l,{value:a.toLowerCase(),children:a},a)),fe.map(a=>e.jsx(i,{value:a.toLowerCase(),children:e.jsxs(p,{py:"16",children:[a," content."]})},a))]})})]}),play:async({canvasElement:t})=>{const a=k(t),n=t.querySelector("[data-fit-wrapper]"),s=a.getByRole("tablist"),c=a.getAllByRole("tab");if(!n)throw new Error("wrapper not found");const d=Number.parseFloat(getComputedStyle(s).columnGap)||0,h=c.reduce((y,x)=>y+x.getBoundingClientRect().width,0)+d*(c.length-1);n.style.width=`${String(Math.ceil(h)+16)}px`,await z(async()=>{await r(a.getAllByRole("tab")).toHaveLength(fe.length),await r(a.queryByRole("button",{name:"More tabs"})).not.toBeInTheDocument()}),n.style.width=`${String(Math.floor(h)-8)}px`,await z(async()=>{await r(a.getByRole("button",{name:"More tabs"})).toBeInTheDocument(),await r(a.getAllByRole("tab").length).toBeLessThan(fe.length)})}},ge={name:"Test: tabs grouped in fragments join the strip",parameters:{controls:{disable:!0}},render:t=>e.jsxs(T,{...t,"aria-label":"Fragment children",defaultValue:"work",children:[e.jsxs(e.Fragment,{children:[e.jsx(l,{value:"work",children:"Work"}),e.jsx(e.Fragment,{children:e.jsx(l,{value:"materials",children:"Materials"})})]}),e.jsxs(e.Fragment,{children:[e.jsx(i,{value:"work",children:"Work content."}),e.jsx(i,{value:"materials",children:"Materials content."})]})]}),play:async({canvasElement:t})=>{const a=k(t),n=a.getByRole("tablist"),s=a.getByRole("tab",{name:"Materials"});await r(k(n).getAllByRole("tab")).toHaveLength(2),await j.click(s),await r(s).toHaveAttribute("aria-selected","true"),await r(a.getByText("Materials content.")).toBeVisible()}},sn=()=>{const t=o.useRef(null),[a,n]=o.useState("none");return e.jsxs(g,{children:[e.jsx(Z,{variant:"standard",mb:"8",onClick:()=>{var s;return n(((s=t.current)==null?void 0:s.tagName)??"none")},children:"Read ref"}),e.jsxs(p,{pb:"8","data-testid":"consumer-ref",children:["Ref: ",a]}),e.jsxs(T,{"aria-label":"Consumer ref",defaultValue:"first",children:[e.jsx(l,{value:"first",children:"First"}),e.jsx(l,{value:"second",ref:t,children:"Second"}),e.jsx(i,{value:"first",children:"First content."}),e.jsx(i,{value:"second",children:"Second content."})]})]})},Te={name:"Test: consumer ref keeps tab registration",parameters:{controls:{disable:!0}},render:()=>e.jsx(sn,{}),play:async({canvasElement:t})=>{const a=k(t),n=a.getByRole("tab",{name:"First"}),s=a.getByRole("tab",{name:"Second"});await j.click(a.getByRole("button",{name:"Read ref"})),await r(a.getByTestId("consumer-ref")).toHaveTextContent("Ref: BUTTON"),await j.click(n),await j.keyboard("{ArrowRight}"),await r(s).toHaveAttribute("aria-selected","true"),await r(s).toHaveFocus()}},xe={name:"Test: badge tooltip opens on tab keyboard focus",parameters:{controls:{disable:!0}},render:t=>e.jsxs(T,{...t,"aria-label":"Badge tooltip",defaultValue:"materials",children:[e.jsx(l,{value:"materials",badge:3,badgeTooltip:"2 Open Part Requests",children:"Materials"}),e.jsx(l,{value:"status",children:"Status"}),e.jsx(i,{value:"materials",children:"Materials content."}),e.jsx(i,{value:"status",children:"Status content."})]}),play:async({canvasElement:t})=>{const a=k(t),n=k(t.ownerDocument.body),s=a.getByRole("tab",{name:/Materials/});await j.tab(),await r(s).toHaveFocus();const c=await n.findByRole("tooltip");await r(c).toHaveTextContent("2 Open Part Requests"),await r(s).toHaveAttribute("aria-describedby",c.id)}},vt=()=>{const[t,a]=o.useState("alpha"),[n,s]=o.useState([]);return e.jsxs(g,{children:[e.jsxs(p,{pb:"8","data-testid":"deferred-value",children:["Parent value: ",t]}),e.jsxs(p,{pb:"8","data-testid":"deferred-requests",children:["Requests: ",n.join(", ")]}),e.jsx(g,{"data-deferred-wrapper":!0,children:e.jsxs(T,{"aria-label":"Deferred selection",value:t,onChange:(c,d)=>{s(h=>[...h,d]),globalThis.setTimeout(()=>a(d),300)},children:[e.jsx(l,{value:"alpha",children:"Alpha section"}),e.jsx(l,{value:"bravo",children:"Bravo section"}),e.jsx(l,{value:"charlie",children:"Charlie section"}),e.jsx(i,{value:"alpha",children:"Alpha content."}),e.jsx(i,{value:"bravo",children:"Bravo content."}),e.jsx(i,{value:"charlie",children:"Charlie content."})]})})]})},ke={name:"Test: deferred controlled selection keeps the focused tab visible",parameters:{controls:{disable:!0}},render:()=>e.jsx(vt,{}),play:async({canvasElement:t})=>{const a=k(t),n=t.querySelector("[data-deferred-wrapper]");if(!n)throw new Error("deferred wrapper not found");const s=a.getByRole("tab",{name:"Alpha section"});n.style.width=`${String(Math.ceil(s.getBoundingClientRect().width)+48)}px`,await z(async()=>{await r(a.getAllByRole("tab")).toHaveLength(1)}),await j.click(s),await j.keyboard("{ArrowRight}");const c=await a.findByRole("tab",{name:"Bravo section"});await r(c).toHaveFocus(),await r(a.getByTestId("deferred-value")).toHaveTextContent("Parent value: alpha"),await z(async()=>{await r(a.getByTestId("deferred-value")).toHaveTextContent("Parent value: bravo")}),await r(c).toHaveAttribute("aria-selected","true"),await r(c).toHaveFocus(),n.style.width="",await z(async()=>{await r(a.getAllByRole("tab")).toHaveLength(3)}),await j.keyboard("{ArrowLeft}"),await z(async()=>{await r(a.getByTestId("deferred-value")).toHaveTextContent("Parent value: alpha")}),await j.keyboard("{ArrowRight}{ArrowRight}");const d=a.getByRole("tab",{name:"Charlie section"});await r(d).toHaveFocus(),await z(async()=>{await r(a.getByTestId("deferred-value")).toHaveTextContent("Parent value: charlie")}),await j.keyboard("{ArrowLeft}{ArrowLeft}"),await r(a.getByRole("tab",{name:"Alpha section"})).toHaveFocus(),await z(async()=>{await r(a.getByTestId("deferred-value")).toHaveTextContent("Parent value: alpha")})}},je={name:"Test: a deferred return to the committed tab still reaches the parent",parameters:{controls:{disable:!0}},render:()=>e.jsx(vt,{}),play:async({canvasElement:t})=>{const a=k(t),n=a.getByRole("tab",{name:"Alpha section"});await j.click(n),await j.keyboard("{ArrowRight}{ArrowLeft}"),await r(n).toHaveFocus(),await r(a.getByTestId("deferred-requests")).toHaveTextContent("Requests: bravo, alpha"),await new Promise(s=>globalThis.setTimeout(s,500)),await r(a.getByTestId("deferred-value")).toHaveTextContent("Parent value: alpha"),await r(n).toHaveAttribute("aria-selected","true"),await r(n).toHaveFocus()}},rn=()=>{const[t,a]=o.useState("missing");return e.jsxs(g,{children:[e.jsxs(p,{pb:"8","data-testid":"empty-fallback-value",children:['Parent value: "',t,'"']}),e.jsxs(T,{"aria-label":"Empty fallback",value:t,onChange:(n,s)=>a(s),children:[e.jsx(l,{value:"",children:"Overview"}),e.jsx(l,{value:"details",children:"Details"}),e.jsx(i,{value:"",children:"Overview content."}),e.jsx(i,{value:"details",children:"Details content."})]}),e.jsx(g,{"data-empty-wrapper":!0,pt:"16",children:e.jsxs(T,{"aria-label":"Empty selected",defaultValue:"",children:[e.jsx(l,{value:"work",children:"Work section"}),e.jsx(l,{value:"materials",children:"Materials section"}),e.jsx(l,{value:"",children:"Summary section"}),e.jsx(i,{value:"work",children:"Work content."}),e.jsx(i,{value:"materials",children:"Materials content."}),e.jsx(i,{value:"",children:"Summary content."})]})})]})},Be={name:"Test: an empty-string tab value is a real selection",parameters:{controls:{disable:!0}},render:()=>e.jsx(rn,{}),play:async({canvasElement:t})=>{const a=k(t);await z(async()=>{await r(a.getByTestId("empty-fallback-value")).toHaveTextContent('Parent value: ""')}),await r(a.getByRole("tab",{name:"Overview"})).toHaveAttribute("aria-selected","true");const n=t.querySelector("[data-empty-wrapper]");if(!n)throw new Error("empty wrapper not found");const s=a.getByRole("tab",{name:"Summary section"});n.style.width=`${String(Math.ceil(s.getBoundingClientRect().width)+48)}px`;const c=a.getByRole("tablist",{name:"Empty selected"});await z(async()=>{await r(k(c).getAllByRole("tab")).toHaveLength(1)});const d=k(c).getByRole("tab",{name:"Summary section"});await r(d).toHaveAttribute("aria-selected","true"),await r(d).toHaveAttribute("tabindex","0")}},Re={name:"Test: with no enabled tabs, an empty-string tab is not selected",parameters:{controls:{disable:!0}},render:t=>e.jsxs(T,{...t,"aria-label":"No enabled tabs",children:[e.jsx(l,{value:"",disabled:!0,children:"Overview"}),e.jsx(l,{value:"details",disabled:!0,children:"Details"}),e.jsx(i,{value:"",children:e.jsx(p,{py:"16",children:"Overview content."})}),e.jsx(i,{value:"details",children:e.jsx(p,{py:"16",children:"Details content."})})]}),play:async({canvasElement:t})=>{const a=k(t);for(const n of a.getAllByRole("tab"))await r(n).toHaveAttribute("aria-selected","false");await r(a.getByText("Overview content.")).not.toBeVisible(),await r(a.getByText("Details content.")).not.toBeVisible()}},Se={name:"Test: a responsive panel display never reveals an inactive panel",parameters:{controls:{disable:!0}},render:t=>e.jsxs(T,{...t,"aria-label":"Responsive panels",defaultValue:"work",children:[e.jsx(l,{value:"work",children:"Work"}),e.jsx(l,{value:"materials",children:"Materials"}),e.jsxs(i,{value:"work",display:{xs:"flex"},gap:"8",py:"16",children:[e.jsx(p,{children:"Work content."}),e.jsx(Z,{children:"Start work"})]}),e.jsxs(i,{value:"materials",display:{xs:"flex"},gap:"8",py:"16",children:[e.jsx(p,{children:"Materials content."}),e.jsx(Z,{children:"Issue materials"})]})]}),play:async({canvasElement:t})=>{const a=k(t);await r(a.getByText("Work content.")).toBeVisible(),await r(a.getByText("Materials content.")).not.toBeVisible(),await r(a.queryByRole("button",{name:"Issue materials"})).toBeNull(),await j.click(a.getByRole("tab",{name:"Materials"})),await r(a.getByText("Materials content.")).toBeVisible(),await r(a.getByText("Work content.")).not.toBeVisible()}},Pe={name:"Test: tab values with spaces still link tab and panel",parameters:{controls:{disable:!0}},render:t=>e.jsxs(T,{...t,"aria-label":"Order sections",defaultValue:"work orders",children:[e.jsx(l,{value:"work orders",children:"Work orders"}),e.jsx(l,{value:"sales orders",children:"Sales orders"}),e.jsx(i,{value:"work orders",children:e.jsx(p,{py:"16",children:"Open work orders."})}),e.jsx(i,{value:"sales orders",children:e.jsx(p,{py:"16",children:"Open sales orders."})})]}),play:async({canvasElement:t})=>{const a=k(t),n=a.getByRole("tab",{name:"Work orders"}),s=a.getByRole("tabpanel",{name:"Work orders"});await r(s.id).not.toMatch(/\s/),await r(n.id).not.toMatch(/\s/),await r(n).toHaveAttribute("aria-controls",s.id),await r(s).toHaveAttribute("aria-labelledby",n.id)}},_e=t=>({id:t}),Ae={name:"Test: a consumer id never breaks the tab and panel links",parameters:{controls:{disable:!0}},render:t=>e.jsxs(T,{...t,"aria-label":"Consumer ids",defaultValue:"work",children:[e.jsx(l,{value:"work",..._e("work-tab"),children:"Work"}),e.jsx(l,{value:"materials",children:"Materials"}),e.jsx(i,{value:"work",..._e("work-panel"),children:e.jsx(p,{py:"16",children:"Work content."})}),e.jsx(i,{value:"materials",children:e.jsx(p,{py:"16",children:"Materials content."})})]}),play:async({canvasElement:t})=>{const a=k(t),n=a.getByRole("tab",{name:"Work"}),s=a.getByRole("tabpanel",{name:"Work"});await r(n.id).not.toBe("work-tab"),await r(s.id).not.toBe("work-panel"),await r(n).toHaveAttribute("aria-controls",s.id),await r(s).toHaveAttribute("aria-labelledby",n.id)}};var ze,$e,Ke;oe.parameters={...oe.parameters,docs:{...(ze=oe.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
}`,...(Ke=($e=oe.parameters)==null?void 0:$e.docs)==null?void 0:Ke.source}}};var Ue,Ge,Qe;le.parameters={...le.parameters,docs:{...(Ue=le.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
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
}`,...(Qe=(Ge=le.parameters)==null?void 0:Ge.docs)==null?void 0:Qe.source}}};var Ye,Je,Xe;ie.parameters={...ie.parameters,docs:{...(Ye=ie.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
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
}`,...(Xe=(Je=ie.parameters)==null?void 0:Je.docs)==null?void 0:Xe.source}}};var Ze,ea,aa;ce.parameters={...ce.parameters,docs:{...(Ze=ce.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
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
}`,...(aa=(ea=ce.parameters)==null?void 0:ea.docs)==null?void 0:aa.source}}};var ta,na,sa;de.parameters={...de.parameters,docs:{...(ta=de.parameters)==null?void 0:ta.docs,source:{originalSource:`{
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
}`,...(sa=(na=de.parameters)==null?void 0:na.docs)==null?void 0:sa.source}}};var ra,oa,la;ue.parameters={...ue.parameters,docs:{...(ra=ue.parameters)==null?void 0:ra.docs,source:{originalSource:`{
  name: 'Ex: Work View',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <WorkView />
}`,...(la=(oa=ue.parameters)==null?void 0:oa.docs)==null?void 0:la.source}}};var ia,ca,da;be.parameters={...be.parameters,docs:{...(ia=be.parameters)==null?void 0:ia.docs,source:{originalSource:`{
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
}`,...(da=(ca=be.parameters)==null?void 0:ca.docs)==null?void 0:da.source}}};var ua,ba,pa;pe.parameters={...pe.parameters,docs:{...(ua=pe.parameters)==null?void 0:ua.docs,source:{originalSource:`{
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
}`,...(pa=(ba=pe.parameters)==null?void 0:ba.docs)==null?void 0:pa.source}}};var va,ma,ha;ve.parameters={...ve.parameters,docs:{...(va=ve.parameters)==null?void 0:va.docs,source:{originalSource:`{
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
}`,...(ha=(ma=ve.parameters)==null?void 0:ma.docs)==null?void 0:ha.source}}};var wa,fa,ya;me.parameters={...me.parameters,docs:{...(wa=me.parameters)==null?void 0:wa.docs,source:{originalSource:`{
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
}`,...(ya=(fa=me.parameters)==null?void 0:fa.docs)==null?void 0:ya.source}}};var ga,Ta,xa;he.parameters={...he.parameters,docs:{...(ga=he.parameters)==null?void 0:ga.docs,source:{originalSource:`{
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
}`,...(xa=(Ta=he.parameters)==null?void 0:Ta.docs)==null?void 0:xa.source}}};var ka,ja,Ba;we.parameters={...we.parameters,docs:{...(ka=we.parameters)==null?void 0:ka.docs,source:{originalSource:`{
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
}`,...(Ba=(ja=we.parameters)==null?void 0:ja.docs)==null?void 0:Ba.source}}};var Ra,Sa,Pa;ye.parameters={...ye.parameters,docs:{...(Ra=ye.parameters)==null?void 0:Ra.docs,source:{originalSource:`{
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
}`,...(Pa=(Sa=ye.parameters)==null?void 0:Sa.docs)==null?void 0:Pa.source}}};var Aa,Ea,Ha;ge.parameters={...ge.parameters,docs:{...(Aa=ge.parameters)==null?void 0:Aa.docs,source:{originalSource:`{
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
}`,...(Ha=(Ea=ge.parameters)==null?void 0:Ea.docs)==null?void 0:Ha.source}}};var Ca,Ma,Oa;Te.parameters={...Te.parameters,docs:{...(Ca=Te.parameters)==null?void 0:Ca.docs,source:{originalSource:`{
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
}`,...(Oa=(Ma=Te.parameters)==null?void 0:Ma.docs)==null?void 0:Oa.source}}};var Va,Ia,Wa;xe.parameters={...xe.parameters,docs:{...(Va=xe.parameters)==null?void 0:Va.docs,source:{originalSource:`{
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
}`,...(Wa=(Ia=xe.parameters)==null?void 0:Ia.docs)==null?void 0:Wa.source}}};var Fa,La,qa;ke.parameters={...ke.parameters,docs:{...(Fa=ke.parameters)==null?void 0:Fa.docs,source:{originalSource:`{
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
}`,...(qa=(La=ke.parameters)==null?void 0:La.docs)==null?void 0:qa.source}}};var Da,Na,_a;je.parameters={...je.parameters,docs:{...(Da=je.parameters)==null?void 0:Da.docs,source:{originalSource:`{
  name: 'Test: a deferred return to the committed tab still reaches the parent',
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
    const alpha = canvas.getByRole('tab', {
      name: 'Alpha section'
    });
    await userEvent.click(alpha);
    // Right then Left before the parent commits Bravo.
    await userEvent.keyboard('{ArrowRight}{ArrowLeft}');
    await expect(alpha).toHaveFocus();
    await expect(canvas.getByTestId('deferred-requests')).toHaveTextContent('Requests: bravo, alpha');

    // Both commits land in order, so the parent ends on the focused tab.
    await new Promise(resolve => globalThis.setTimeout(resolve, 500));
    await expect(canvas.getByTestId('deferred-value')).toHaveTextContent('Parent value: alpha');
    await expect(alpha).toHaveAttribute('aria-selected', 'true');
    await expect(alpha).toHaveFocus();
  }
}`,...(_a=(Na=je.parameters)==null?void 0:Na.docs)==null?void 0:_a.source}}};var za,$a,Ka;Be.parameters={...Be.parameters,docs:{...(za=Be.parameters)==null?void 0:za.docs,source:{originalSource:`{
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
}`,...(Ka=($a=Be.parameters)==null?void 0:$a.docs)==null?void 0:Ka.source}}};var Ua,Ga,Qa;Re.parameters={...Re.parameters,docs:{...(Ua=Re.parameters)==null?void 0:Ua.docs,source:{originalSource:`{
  name: 'Test: with no enabled tabs, an empty-string tab is not selected',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: args => <Tabs {...args} aria-label="No enabled tabs">
      <Tab value="" disabled>
        Overview
      </Tab>
      <Tab value="details" disabled>
        Details
      </Tab>
      <TabPanel value="">
        <Text py="16">Overview content.</Text>
      </TabPanel>
      <TabPanel value="details">
        <Text py="16">Details content.</Text>
      </TabPanel>
    </Tabs>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    for (const tab of canvas.getAllByRole('tab')) {
      await expect(tab).toHaveAttribute('aria-selected', 'false');
    }
    await expect(canvas.getByText('Overview content.')).not.toBeVisible();
    await expect(canvas.getByText('Details content.')).not.toBeVisible();
  }
}`,...(Qa=(Ga=Re.parameters)==null?void 0:Ga.docs)==null?void 0:Qa.source}}};var Ya,Ja,Xa;Se.parameters={...Se.parameters,docs:{...(Ya=Se.parameters)==null?void 0:Ya.docs,source:{originalSource:`{
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
}`,...(Xa=(Ja=Se.parameters)==null?void 0:Ja.docs)==null?void 0:Xa.source}}};var Za,et,at;Pe.parameters={...Pe.parameters,docs:{...(Za=Pe.parameters)==null?void 0:Za.docs,source:{originalSource:`{
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
}`,...(at=(et=Pe.parameters)==null?void 0:et.docs)==null?void 0:at.source}}};var tt,nt,st;Ae.parameters={...Ae.parameters,docs:{...(tt=Ae.parameters)==null?void 0:tt.docs,source:{originalSource:`{
  name: 'Test: a consumer id never breaks the tab and panel links',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: args => <Tabs {...args} aria-label="Consumer ids" defaultValue="work">
      <Tab value="work" {...consumerId('work-tab')}>
        Work
      </Tab>
      <Tab value="materials">Materials</Tab>
      <TabPanel value="work" {...consumerId('work-panel')}>
        <Text py="16">Work content.</Text>
      </TabPanel>
      <TabPanel value="materials">
        <Text py="16">Materials content.</Text>
      </TabPanel>
    </Tabs>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const tab = canvas.getByRole('tab', {
      name: 'Work'
    });
    const panel = canvas.getByRole('tabpanel', {
      name: 'Work'
    });
    await expect(tab.id).not.toBe('work-tab');
    await expect(panel.id).not.toBe('work-panel');
    await expect(tab).toHaveAttribute('aria-controls', panel.id);
    await expect(panel).toHaveAttribute('aria-labelledby', tab.id);
  }
}`,...(st=(nt=Ae.parameters)==null?void 0:nt.docs)==null?void 0:st.source}}};const Mn=["Default","WithBadges","Overflow","LabelOverride","UnmountInactive","ExWorkView","ControlledFallback","UncontrolledFallback","OverflowMetadata","ComposedTabHandlers","DisabledFirstTab","BadgeKeepsHeight","ToggleReserveOnlyOnOverflow","FragmentChildren","ConsumerRef","BadgeTooltipOnFocus","DeferredControlledOverflow","DeferredControlledReversal","EmptyStringValue","NoEnabledTabs","ResponsivePanelDisplay","ValuesWithSpaces","ConsumerIdsIgnored"];export{we as BadgeKeepsHeight,xe as BadgeTooltipOnFocus,me as ComposedTabHandlers,Ae as ConsumerIdsIgnored,Te as ConsumerRef,be as ControlledFallback,oe as Default,ke as DeferredControlledOverflow,je as DeferredControlledReversal,he as DisabledFirstTab,Be as EmptyStringValue,ue as ExWorkView,ge as FragmentChildren,ce as LabelOverride,Re as NoEnabledTabs,ie as Overflow,ve as OverflowMetadata,Se as ResponsivePanelDisplay,ye as ToggleReserveOnlyOnOverflow,pe as UncontrolledFallback,de as UnmountInactive,Pe as ValuesWithSpaces,le as WithBadges,Mn as __namedExportsOrder,Cn as default};
