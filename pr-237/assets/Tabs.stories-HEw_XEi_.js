import{m as Ht,e as Ct,f as Et,g as Pt,h as Mt,r as o,s as We,Y as Ot,Z as Ft,at as Vt,af as It,ah as Wt,a1 as qt,a2 as Lt,a5 as Dt,ac as Nt,j as e,B as x,c as qe,a6 as _t,a7 as $t,au as zt,d as yt,av as Kt,aa as Ut,T as b,a as Gt}from"./iframe-DT0IBZRc.js";import{B as X}from"./Button-4k4HclR3.js";import{g as Yt,s as gt,M as Qt,a as Jt}from"./SubMenu-CuMHtjNQ.js";import{B as Zt}from"./Badge-CZ7Cbf1P.js";import{u as xt}from"./useLocale-xMFG9LtK.js";import{I as Tt}from"./IconButton-YBJ8ZGhK.js";import{u as Xt}from"./useControllableState-Da-eoJ61.js";import"./preload-helper-DFx2riH-.js";import"./Spinner-B8SNs5b_.js";import"./FieldContext-C0EBQqcW.js";import"./HighlightText-C9p-oonP.js";import"./menu-C9Y3_Ih7.js";import"./FloatingLayerContext-Dv-TXJEj.js";import"./ListItemGroup-CK0nH1if.js";import"./Divider-DVTaHHIF.js";import"./Checkbox-krFCTg7s.js";import"./Toggle-Dc4SleH6.js";const kt={hasOverflow:!1},en=[],an=[["root","tabs__root"],["strip","tabs__strip"],["list","tabs__list"],["tab","tabs__tab"],["badge","tabs__badge"],["overflow","tabs__overflow"],["menu","tabs__menu"],["panel","tabs__panel"]],tn=an.map(([t,a])=>[t,Pt(a,kt,Mt(en,t))]),nn=Ht((t={})=>Object.fromEntries(tn.map(([a,n])=>[a,n.recipeFn(t)]))),$e=["hasOverflow","overflowed"],rn=t=>({...kt,...Ct(t)}),Bt=Object.assign(nn,{__recipe__:!1,__name__:"tabs",raw:t=>t,classNameMap:{},variantKeys:$e,variantMap:{hasOverflow:["false","true"],overflowed:["true"]},splitVariantProps(t){return Et(t,$e)},getVariantProps:rn}),sn=32,se=(t,a)=>t.length===a.length&&t.every((n,r)=>n===a[r]),on=(t,a,n)=>{for(const r of a)n.has(r)||t==null||t.unobserve(r);for(const r of n)a.has(r)||t==null||t.observe(r);return n},ln=({items:t,containerRef:a,getItemElement:n,activeItem:r=null,reserve:c=sn,reserveRef:d,enabled:p=!0})=>{const[S,m]=o.useState(()=>[...t]),[w,P]=o.useState([]),[C,O]=o.useState(null),j=o.useRef(null),A=o.useRef(t),K=o.useRef(r),F=o.useRef(C),E=o.useRef([]),U=o.useRef(r),V=o.useRef(c),I=o.useRef(null),G=o.useRef(p),$=o.useRef(null),H=o.useRef(new Set),D=o.useRef(null),W=o.useCallback(()=>{var Ne;const v=a.current,f=A.current;if(!G.current||!v){m(y=>se(y,f)?y:[...f]),P(y=>y.length===0?y:[]);return}const R=globalThis.getComputedStyle(v),u=Number.parseFloat(R.paddingLeft||"0")+Number.parseFloat(R.paddingRight||"0"),h=Number.parseFloat(R.columnGap||"0")||0,B=v.clientWidth-u,Y=f.map(y=>{var L;return((L=n(y))==null?void 0:L.offsetWidth)??Number.POSITIVE_INFINITY}),q=F.current,J=K.current,Q=q??J,ee=Q===null?-1:f.indexOf(Q),ne=ee===-1?0:ee,re=[...new Set([q,J].filter(y=>y!==null).map(y=>f.indexOf(y)).filter(y=>y!==-1))],Oe=f.map((y,L)=>L).sort((y,L)=>{const z=Math.abs(y-ne)-Math.abs(L-ne);return z===0?y-L:z}),te=(y,L)=>{const z=new Set;let Ve=0;for(const ae of y)Ve+=(Y[ae]??0)+(z.size>0?h:0),z.add(ae);for(const ae of Oe){if(z.has(ae))continue;const _e=(Y[ae]??0)+(z.size>0?h:0);if(Ve+_e>L)break;Ve+=_e,z.add(ae)}return z};let Z=te([],B);if(Z.size<f.length){const y=((Ne=I.current)==null?void 0:Ne.offsetWidth)??V.current,L=B-y;Z=te([],L),re.some(z=>!Z.has(z))&&(Z=te(re,L))}const _=[],Fe=[];f.forEach((y,L)=>{Z.has(L)?_.push(y):Fe.push(y)}),m(y=>se(y,_)?y:_),P(y=>se(y,Fe)?y:Fe)},[a,n]),N=o.useCallback((v,f)=>{if(!A.current.includes(v))return;const R=E.current;if((R.length>0||v!==K.current)&&(E.current=[...R.filter(h=>h!==v),v],O(v)),!w.includes(v)){D.current=null,f==null||f();return}D.current={key:v,onVisible:f},O(v)},[w]);return o.useLayoutEffect(()=>{const v=()=>{j.current!==null&&globalThis.cancelAnimationFrame(j.current),j.current=globalThis.requestAnimationFrame(()=>{j.current=null,W()})},f=typeof ResizeObserver>"u"?null:new ResizeObserver(v);return $.current=f,globalThis.addEventListener("resize",v),()=>{f==null||f.disconnect(),$.current=null,H.current.clear(),globalThis.removeEventListener("resize",v),j.current!==null&&(globalThis.cancelAnimationFrame(j.current),j.current=null)}},[W]),o.useLayoutEffect(()=>{se(A.current,t)||(A.current=[...t]),K.current=r,F.current=C,V.current=c,I.current=(d==null?void 0:d.current)??null,G.current=p;const v=new Set,f=a.current;if(p&&f){v.add(f),I.current&&v.add(I.current);for(const R of A.current){const u=n(R);u&&v.add(u)}}H.current=on($.current,H.current,v),W()},[r,a,p,C,n,t,W,c,d]),o.useLayoutEffect(()=>{var f;const v=D.current;if(v){if(!A.current.includes(v.key)){D.current=null,O(null);return}w.includes(v.key)||(D.current=null,(f=v.onVisible)==null||f.call(v))}},[w]),o.useLayoutEffect(()=>{if(U.current!==r){U.current=r;const R=E.current,u=r===null?-1:R.indexOf(r);E.current=u===-1?[]:R.slice(u+1)}if(C===null)return;const v=!t.includes(C);if(!v&&E.current.length>0)return;const f=D.current;f&&(v||f.key!==r)&&(D.current=null),E.current=[],O(null)},[r,C,t]),{visible:S,overflow:w,hasOverflow:w.length>0,measure:W,ensureVisible:N}},Rt=o.createContext(null),cn=o.createContext(!0),dn=Rt.Provider,un=cn.Provider,jt=()=>{const t=o.useContext(Rt);if(!t)throw new Error("Tabs compound components must be used within <Tabs />");return t},Me={tab:"Tab",panel:"TabPanel"},Le="__tabsComponentType",St=t=>Yt(t,Le),At=t=>{const a=[],n=(r,c)=>{o.Children.toArray(r).forEach(d=>{if(o.isValidElement(d)&&d.type===o.Fragment){n(d.props.children,`${c}${String(d.key)}/`);return}a.push(c!==""&&o.isValidElement(d)?o.cloneElement(d,{key:`${c}${String(d.key)}`}):d)})};return n(t,""),a},bn=Bt({overflowed:!0}).tab,ze=zt({size:"md",hasTitle:!1}),l=t=>{const{value:a,children:n,label:r,badge:c,badgeTooltip:d,disabled:p=!1,onClick:S,onKeyDown:m,ref:w,...P}=t,{classes:C,getPanelId:O,getTabId:j,onTabKeyDown:A,overflowValues:K,registerTabElement:F,selectTab:E,selectedValue:U}=jt(),V=U===a,I=K.includes(a),[G,$]=We(P),H=o.useCallback(_=>{F(a,_)},[F,a]),D=I?bn:C.tab,W=typeof c=="number"&&c!==0,N=W&&!!d&&!I,[v,f]=o.useState(!1),R=o.useRef(null),u=N&&v,{refs:h,elements:B,floatingStyles:Y,context:q}=Ot({open:u,onOpenChange:f,placement:"bottom",middleware:Ft({offset:8,extras:[Vt({element:R})]})}),J=It(q,{enabled:N,move:!1}),Q=Wt(q,{enabled:N}),ee=qt(q,{enabled:N}),ne=Lt(q,{enabled:N,role:"tooltip"}),{getReferenceProps:re,getFloatingProps:Oe}=Dt([J,Q,ee,ne]),te=Nt([H,h.setReference,w]),Z=W?e.jsx(x,{ref:h.setPositionReference,className:C.badge,children:e.jsx(Zt,{count:c,variant:"subtle"})}):null;return e.jsxs(e.Fragment,{children:[e.jsxs(x,{as:"button",type:"button",ref:te,role:"tab","aria-selected":V,"aria-controls":O(a),"aria-hidden":I||void 0,disabled:p,tabIndex:V&&!I?0:-1,className:qe(D,G),...re({...$,onClick:_=>{S==null||S(_),!(p||_.defaultPrevented)&&E(_,a,"clicked-on-tab")},onKeyDown:_=>{m==null||m(_),_.defaultPrevented||A(_)}}),id:j(a),children:[n,Z]}),u?e.jsx(_t,{children:e.jsx($t,{reference:B.domReference,children:e.jsxs(x,{...yt("Tooltip"),ref:h.setFloating,style:Y,className:ze.tooltipContent,...Oe(),children:[e.jsx(x,{className:ze.text,children:d}),e.jsx(Kt,{ref:R,context:q,fill:Ut.var("colors.bg.neutral.inverse")})]})})}):null]})};gt(l,Le,Me.tab);l.__docgenInfo={description:'Selects one panel inside a {@link Tabs} strip.\n\nRenders a `button` with `role="tab"`. Only the selected tab is in the tab\norder; Arrow, Home, and End move between the others. A tab that does not fit\nthe strip stays mounted but hidden so it can still be measured, and it is\noffered in the overflow menu instead. The menu row is plain text, so give\n`label` when `children` are not plain text.\n\n`badgeTooltip` opens on hover and on keyboard focus of the tab itself, points\nat the badge, and is linked to the tab with `aria-describedby` while open.\n\n@example\n```tsx\n<Tab value="materials" badge={3} badgeTooltip="2 Open Part Request">\n  Materials\n</Tab>\n```',methods:[],displayName:"Tab",props:{value:{required:!0,tsType:{name:"string"},description:"Identifies the tab and the `TabPanel` it controls. Must be unique within a `Tabs`."},children:{required:!1,tsType:{name:"ReactNode"},description:"Visible label rendered in the strip. Plain text is also reused as the overflow-menu row's text unless `label` overrides it."},label:{required:!1,tsType:{name:"string"},description:"Plain-text name for this tab's overflow-menu row, which cannot render\nmarkup. Set it when `children` contain more than text — an icon, a nested\nelement — because flattening those to a string reads badly. It never\nchanges what the strip renders: `children` still render there as-is.\nWithout it the menu row falls back to the flattened `children`, then to\n`value`."},badge:{required:!1,tsType:{name:"number"},description:"Count shown in a trailing {@link Badge}. A zero or omitted count renders no badge."},badgeTooltip:{required:!1,tsType:{name:"string"},description:"Tooltip text describing what the badge counts. Requires `badge`."},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents selection and skips the tab during arrow-key navigation."}}};const i=t=>{const{value:a,children:n,...r}=t,{classes:c,getPanelId:d,getTabId:p,selectedValue:S,unmountInactive:m}=jt(),w=S===a,[P,C]=We(r);if(m&&!w)return null;const j=typeof n=="function"?n({isActive:w}):n;return e.jsx(un,{value:w,children:e.jsx(x,{role:"tabpanel","aria-labelledby":p(a),tabIndex:w?0:-1,display:w?"block":"none",_hidden:{display:"none"},className:qe(c.panel,P),...C,id:d(a),hidden:!w,children:j})})};gt(i,Le,Me.panel);i.__docgenInfo={description:'Renders the content for one {@link Tab}.\n\nThe panel stays mounted when another tab is selected and is hidden with\n`display: none`, which preserves scroll position and local state; set\n`unmountInactive` on `Tabs` to render only the selected panel instead. A\nfunction child receives `{ isActive }`, and descendants can call\n`useTabPanelActive()` for the same signal, so hidden panels can pause polling\nor animation.\n\n@example\n```tsx\n<TabPanel value="materials">\n  {({ isActive }) => <MaterialsGrid paused={!isActive} />}\n</TabPanel>\n```',methods:[],displayName:"TabPanel",props:{value:{required:!0,tsType:{name:"string"},description:"`value` of the {@link Tab} this panel belongs to."},children:{required:!1,tsType:{name:"union",raw:"ReactNode | ((props: TabPanelRenderProps) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:"Panel content. A function child receives `{ isActive }` so expensive work\ncan pause while the panel is mounted but hidden."}}};const Ie=t=>t==null||typeof t=="boolean"?"":typeof t=="string"||typeof t=="number"?String(t):Array.isArray(t)?t.map(a=>Ie(a)).join(""):o.isValidElement(t)?Ie(t.props.children):"",pn=({children:t,value:a,defaultValue:n,onChange:r,listRef:c,overflowRef:d})=>{var R;const p=o.useMemo(()=>{const u=[];return At(t).forEach(h=>{if(!o.isValidElement(h)||St(h)!==Me.tab)return;const B=h.props;typeof B.value=="string"&&u.push({value:B.value,label:B.label||Ie(B.children)||B.value,disabled:!!B.disabled,badge:B.badge,badgeTooltip:B.badgeTooltip})}),u},[t]),S=o.useMemo(()=>p.map(u=>u.value),[p]),m=(R=p.find(u=>!u.disabled))==null?void 0:R.value,[w,P,C]=Xt({value:a,defaultValue:n??m??""}),O=o.useRef(w),j=o.useRef([]),A=o.useCallback(u=>{O.current=u,j.current=[...j.current.filter(h=>h!==u),u]},[]);o.useEffect(()=>{const u=j.current,h=u.indexOf(w);if(h===-1){j.current=[],O.current=w;return}j.current=u.slice(h+1)},[w]);const K=p.find(u=>u.value===w),F=!!(K&&!K.disabled),E=F?w:m,U=o.useRef(null);o.useEffect(()=>{if(F){U.current=null;return}const u=JSON.stringify([w,m??null]);U.current!==u&&(U.current=u,C||P(m??""),m!==void 0&&(A(m),r==null||r(null,m,"fallback-after-removal")))},[m,C,F,r,A,P,w]);const V=o.useRef(new Map),I=o.useCallback((u,h)=>{h?V.current.set(u,h):V.current.delete(u)},[]),G=o.useCallback(u=>V.current.get(u)??null,[]),{ensureVisible:$,overflow:H,hasOverflow:D}=ln({items:S,containerRef:c,getItemElement:G,activeItem:E??null,reserveRef:d}),W=o.useCallback((u,h,B)=>{h===w&&O.current===w||(A(h),P(h),r==null||r(u,h,B))},[r,A,P,w]),N=o.useCallback((u,h)=>{$(u,()=>{const B=()=>{var Y;return(Y=V.current.get(u))==null?void 0:Y.focus()};h!=null&&h.afterMenuClose?queueMicrotask(B):B()})},[$]),v=o.useCallback(u=>{const h=p.filter(Q=>!Q.disabled).map(Q=>Q.value);if(h.length===0)return;let B=E;for(const[Q,ee]of V.current)if(ee===u.currentTarget){B=Q;break}const Y=B===void 0?0:Math.max(0,h.indexOf(B));let q;switch(u.key){case"ArrowRight":q=(Y+1)%h.length;break;case"ArrowLeft":q=(Y-1+h.length)%h.length;break;case"Home":q=0;break;case"End":q=h.length-1;break;default:return}u.preventDefault();const J=h[q];J!==void 0&&(W(u,J,"clicked-on-tab"),N(J))},[N,W,E,p]),f=o.useMemo(()=>H.map(u=>p.find(h=>h.value===u)).filter(u=>!!u),[H,p]);return{hasOverflow:D,focusTab:N,onTabKeyDown:v,overflowTabs:f,overflowValues:H,registerTabElement:I,selectTab:W,selectedValue:E,tabs:p}},vn=({className:t,focusTab:a,tabs:n,selectTab:r,selectedValue:c})=>{const[d,p]=o.useState(!1),{labels:S}=xt();return e.jsx(Qt,{open:d,onOpenChange:p,placement:"bottom-end",className:t,trigger:e.jsx(Tt,{variant:"ghost",size:"md",iconName:d?"caret-up":"caret-down",altText:S.moreTabs,"aria-haspopup":"menu"}),children:n.map(m=>{const w=typeof m.badge=="number"&&m.badge!==0;return e.jsx(Jt,{label:w?`${m.label} (${String(m.badge)})`:m.label,description:w?m.badgeTooltip:void 0,disabled:m.disabled,selected:m.value===c,role:"menuitemradio","aria-checked":m.value===c,onClick:P=>{r(P,m.value,"selected-from-overflow"),p(!1),a(m.value,{afterMenuClose:!0})}},m.value)})})},T=t=>{const{labels:a}=xt(),{children:n,value:r,defaultValue:c,onChange:d,unmountInactive:p=!1,"aria-label":S,"aria-labelledby":m,...w}=t,[P,C]=We(w),O=o.useRef(null),j=o.useRef(null),A=o.useId(),{focusTab:K,hasOverflow:F,onTabKeyDown:E,overflowTabs:U,overflowValues:V,registerTabElement:I,selectTab:G,selectedValue:$}=pn({children:n,value:r,defaultValue:c,onChange:d,listRef:O,overflowRef:j}),H=o.useMemo(()=>Bt({hasOverflow:F}),[F]),[D,W]=o.useMemo(()=>{const v=[],f=[];return At(n).forEach(R=>{St(R)===Me.tab?v.push(R):f.push(R)}),[v,f]},[n]),N=o.useMemo(()=>({classes:H,getPanelId:v=>`${A}-panel-${encodeURIComponent(v)}`,getTabId:v=>`${A}-tab-${encodeURIComponent(v)}`,onTabKeyDown:E,overflowValues:V,registerTabElement:I,selectTab:G,selectedValue:$,unmountInactive:p}),[A,H,E,V,I,G,$,p]);return e.jsx(dn,{value:N,children:e.jsxs(x,{...yt("Tabs"),className:qe(H.root,P),...C,children:[e.jsxs(x,{className:H.strip,children:[e.jsx(x,{ref:O,role:"tablist","aria-label":S,"aria-labelledby":m,"aria-orientation":"horizontal",className:H.list,children:D}),e.jsx(x,{ref:j,className:H.overflow,"aria-hidden":!F||void 0,children:F?e.jsx(vn,{className:H.menu,focusTab:K,tabs:U,selectTab:G,selectedValue:$}):e.jsx(Tt,{variant:"ghost",size:"md",iconName:"caret-down",altText:a.moreTabs,disabled:!0,tabIndex:-1})})]}),W]})})};T.__docgenInfo={description:'Groups related content into a single view with one panel visible at a time.\n\nCompose it from `Tab` and `TabPanel` children; the first enabled `Tab` is\nselected by default. Selection is uncontrolled with `defaultValue` or\ncontrolled with `value` plus `onChange`. Tabs that do not fit the available width move into\nan overflow menu at the end of the strip, and the selected tab always stays\nvisible. Every panel stays mounted and hidden unless `unmountInactive` is\nset, so read `useTabPanelActive()` to pause work in a hidden panel.\n\nThe strip renders a `tablist` with roving tabindex and Arrow, Home, and End\nnavigation. Supply `aria-label` or `aria-labelledby` so it is announced.\n\n@example\n```tsx\n<Tabs defaultValue="work" aria-label="Order sections">\n  <Tab value="work">Work</Tab>\n  <Tab value="materials" badge={3}>Materials</Tab>\n  <TabPanel value="work">Work content</TabPanel>\n  <TabPanel value="materials">Materials content</TabPanel>\n</Tabs>\n```',methods:[],displayName:"Tabs",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"`Tab` and `TabPanel` children. Tab order in the strip follows source order."},value:{required:!1,tsType:{name:"string"},description:"Controlled selected tab `value`. Pair with `onChange`; omit it to use `defaultValue`."},defaultValue:{required:!1,tsType:{name:"string"},description:"Initially selected tab `value` when `value` is not provided. It is used\nonly on first render.\n@default the first `Tab` child's `value`"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  event: TabsChangeEvent,
  value: string,
  reason: TabsChangeReason,
) => void`,signature:{arguments:[{type:{name:"union",raw:`| ReactMouseEvent<HTMLElement>
| ReactKeyboardEvent<HTMLElement>
| null`,elements:[{name:"ReactMouseEvent",elements:[{name:"HTMLElement"}],raw:"ReactMouseEvent<HTMLElement>"},{name:"ReactKeyboardEvent",elements:[{name:"HTMLElement"}],raw:"ReactKeyboardEvent<HTMLElement>"},{name:"null"}]},name:"event"},{type:{name:"string"},name:"value"},{type:{name:"union",raw:`| 'clicked-on-tab'
| 'selected-from-overflow'
| 'fallback-after-removal'`,elements:[{name:"literal",value:"'clicked-on-tab'"},{name:"literal",value:"'selected-from-overflow'"},{name:"literal",value:"'fallback-after-removal'"}]},name:"reason"}],return:{name:"void"}}},description:"Runs when user interaction selects a different tab."},unmountInactive:{required:!1,tsType:{name:"boolean"},description:"Renders only the selected `TabPanel`. By default every panel stays mounted\nand inactive panels are hidden with `display: none`, which preserves their\nscroll position and local state.\n@default false"},"aria-label":{required:!1,tsType:{name:"string"},description:"Accessible name for the tab strip. Provide this or `aria-labelledby` so the\n`tablist` is announced."},"aria-labelledby":{required:!1,tsType:{name:"string"},description:"Id of an element that labels the tab strip."}}};const{expect:s,userEvent:g,waitFor:M,within:k}=__STORYBOOK_MODULE_TEST__,qn={title:"Components/Tabs",component:T,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:["Tabs keep every `TabPanel` mounted by default and hide the inactive","ones with `display: none`. That preserves scroll position, form","drafts, and grid state when a user moves between tabs, at the cost","of keeping hidden work alive. Hidden panels receive an `isActive`","signal — as a render-prop argument or through `useTabPanelActive()`","— so polling, timers, and animation can pause themselves. Set","`unmountInactive` when a panel is expensive enough that discarding","its state is the better trade."].join(" ")}}},args:{"aria-label":"Example sections",children:null}},oe={render:t=>e.jsxs(T,{...t,defaultValue:"overview",children:[e.jsx(l,{value:"overview",children:"Overview"}),e.jsx(l,{value:"activity",children:"Activity"}),e.jsx(l,{value:"settings",children:"Settings"}),e.jsx(i,{value:"overview",children:e.jsx(b,{py:"16",children:"Summary of the current record."})}),e.jsx(i,{value:"activity",children:e.jsx(b,{py:"16",children:"Recent activity for the current record."})}),e.jsx(i,{value:"settings",children:e.jsx(b,{py:"16",children:"Settings for the current record."})})]})},le={name:"Badges",parameters:{controls:{disable:!0}},render:t=>e.jsxs(T,{...t,defaultValue:"work",children:[e.jsx(l,{value:"work",children:"Work"}),e.jsx(l,{value:"materials",badge:3,badgeTooltip:"2 Open Part Request, 1 Short Part(s)",children:"Materials"}),e.jsx(l,{value:"status",badge:12,children:"Status"}),e.jsx(l,{value:"documents",badge:0,children:"Documents"}),e.jsx(i,{value:"work",children:e.jsx(b,{py:"16",children:"A badge without a tooltip is a bare count."})}),e.jsx(i,{value:"materials",children:e.jsx(b,{py:"16",children:"Hover or focus the Materials tab to read what the count means."})}),e.jsx(i,{value:"status",children:e.jsx(b,{py:"16",children:"Status content."})}),e.jsx(i,{value:"documents",children:e.jsx(b,{py:"16",children:"A zero count renders no badge at all."})})]})},Ke=["Work","Info","Materials","Status","Documents","History","Labor","Quality","Shipping","Invoicing","Costing","Notes"],ie={name:"Overflow",parameters:{controls:{disable:!0}},render:t=>e.jsxs(x,{resize:"horizontal",overflow:"auto",width:"lg",maxWidth:"full",minWidth:"240",borderWidth:"1",borderStyle:"dashed",borderColor:"border",p:"16",children:[e.jsx(b,{pb:"12",color:"text.subtlest",children:"Drag the bottom-right corner. Tabs nearest the selected one keep their place; the rest move into the overflow menu."}),e.jsxs(T,{...t,defaultValue:"work",children:[Ke.map(a=>e.jsx(l,{value:a.toLowerCase(),children:a},a)),Ke.map(a=>e.jsx(i,{value:a.toLowerCase(),children:e.jsxs(b,{py:"16",children:[a," content."]})},a))]})]})},Ue=[{value:"work",label:"Work",icon:"wrench-2"},{value:"materials",label:"Materials",icon:"cube-focus"},{value:"schedule",label:"Schedule",icon:"calendar-view-week"},{value:"shipping",label:"Shipping",icon:"truck-trailer"},{value:"quality",label:"Quality",icon:"list-checks"},{value:"history",label:"History",icon:"clock-countdown"},{value:"notes",label:"Notes",icon:"note-stack"}],ce={name:"Label Override for Overflow",parameters:{controls:{disable:!0}},render:t=>e.jsxs(x,{width:"md",maxWidth:"full",children:[e.jsx(b,{pb:"12",color:"text.subtlest",children:"These tabs render an icon beside their text, so flattening `children` would produce a poor menu row. Each one passes `label`, and the overflow menu uses that text. The strip still renders `children` as-is."}),e.jsxs(T,{...t,defaultValue:"work",children:[Ue.map(a=>e.jsxs(l,{value:a.value,label:a.label,children:[e.jsx(Gt,{name:a.icon,"aria-hidden":!0}),a.label]},a.value)),Ue.map(a=>e.jsx(i,{value:a.value,children:e.jsxs(b,{py:"16",children:[a.label," content."]})},a.value))]})]})},de={name:"Unmount Inactive Panels",parameters:{controls:{disable:!0}},render:t=>e.jsxs(T,{...t,defaultValue:"first",unmountInactive:!0,children:[e.jsx(l,{value:"first",children:"First"}),e.jsx(l,{value:"second",children:"Second"}),e.jsx(i,{value:"first",children:e.jsx(b,{py:"16",children:"Only this panel exists in the DOM while it is selected."})}),e.jsx(i,{value:"second",children:e.jsx(b,{py:"16",children:"Switching tabs unmounts the other panel and discards its state."})})]})},hn=()=>{const[t,a]=o.useState(!0),[n,r]=o.useState("none yet");return e.jsxs(x,{children:[e.jsx(x,{pb:"12",children:e.jsx(X,{variant:"hollow",size:"sm",onClick:()=>a(c=>!c),children:t?"Remove Schedule tab":"Add Schedule tab"})}),e.jsxs(T,{"aria-label":"Work order sections",defaultValue:"work",onChange:(c,d,p)=>r(`${d} (${p})`),children:[e.jsx(l,{value:"work",children:"Work"}),e.jsx(l,{value:"info",children:"Info"}),e.jsx(l,{value:"materials",badge:3,badgeTooltip:"2 Open Part Request, 1 Short Part(s)",children:"Materials"}),e.jsx(l,{value:"status",badge:5,badgeTooltip:"5 Operations Behind",children:"Status"}),t?e.jsx(l,{value:"schedule",children:"Schedule"}):null,e.jsx(l,{value:"documents",children:"Documents"}),e.jsx(l,{value:"history",children:"History"}),e.jsx(i,{value:"work",children:e.jsx(b,{py:"16",children:"Work instructions and operations."})}),e.jsx(i,{value:"info",children:e.jsx(b,{py:"16",children:"Order header and customer details."})}),e.jsx(i,{value:"materials",children:e.jsx(b,{py:"16",children:"Bill of materials and part requests."})}),e.jsx(i,{value:"status",children:e.jsx(b,{py:"16",children:"Operation status roll-up."})}),e.jsx(i,{value:"schedule",children:({isActive:c})=>e.jsxs(b,{py:"16",children:["Schedule board. Live refresh is ",c?"running":"paused",". Select this tab, remove it with the button above, and the strip falls back to the first remaining tab."]})}),e.jsx(i,{value:"documents",children:e.jsx(b,{py:"16",children:"Attached drawings and travelers."})}),e.jsx(i,{value:"history",children:e.jsx(b,{py:"16",children:"Audit trail."})})]}),e.jsxs(b,{pt:"16",color:"text.subtlest",children:["Last change: ",n]})]})},ue={name:"Ex: Work View",parameters:{controls:{disable:!0}},render:()=>e.jsx(hn,{})},mn=()=>{const[t,a]=o.useState(!0),[n,r]=o.useState("schedule");return e.jsxs(x,{children:[e.jsx(X,{variant:"hollow",size:"sm",onClick:()=>a(c=>!c),children:t?"Remove Schedule tab":"Add Schedule tab"}),e.jsxs(b,{py:"8","data-testid":"controlled-value",children:["Parent value: ",n]}),e.jsxs(T,{"aria-label":"Controlled sections",value:n,onChange:(c,d)=>r(d),children:[e.jsx(l,{value:"work",children:"Work"}),t?e.jsx(l,{value:"schedule",children:"Schedule"}):null,e.jsx(l,{value:"history",children:"History"}),e.jsx(i,{value:"work",children:"Work content."}),e.jsx(i,{value:"schedule",children:"Schedule content."}),e.jsx(i,{value:"history",children:"History content."})]})]})},be={name:"Test: controlled value follows a removed tab",parameters:{controls:{disable:!0}},render:()=>e.jsx(mn,{}),play:async({canvasElement:t})=>{const a=k(t);await s(a.getByRole("tab",{name:"Schedule"})).toHaveAttribute("aria-selected","true"),await g.click(a.getByRole("button",{name:"Remove Schedule tab"})),await M(async()=>{await s(a.getByTestId("controlled-value")).toHaveTextContent("Parent value: work"),await s(a.getByRole("tab",{name:"Work"})).toHaveAttribute("aria-selected","true")})}},wn=()=>{const[t,a]=o.useState(!0);return e.jsxs(x,{children:[e.jsx(X,{variant:"hollow",size:"sm",onClick:()=>a(n=>!n),children:t?"Remove Schedule tab":"Add Schedule tab"}),e.jsxs(T,{"aria-label":"Uncontrolled sections",defaultValue:"schedule",children:[e.jsx(l,{value:"work",children:"Work"}),t?e.jsx(l,{value:"schedule",children:"Schedule"}):null,e.jsx(l,{value:"history",children:"History"}),e.jsx(i,{value:"work",children:"Work content."}),e.jsx(i,{value:"schedule",children:"Schedule content."}),e.jsx(i,{value:"history",children:"History content."})]})]})},pe={name:"Test: removed uncontrolled value does not return",parameters:{controls:{disable:!0}},render:()=>e.jsx(wn,{}),play:async({canvasElement:t})=>{const a=k(t);await g.click(a.getByRole("button",{name:"Remove Schedule tab"})),await s(a.getByRole("tab",{name:"Work"})).toHaveAttribute("aria-selected","true"),await g.click(a.getByRole("button",{name:"Add Schedule tab"})),await s(a.getByRole("tab",{name:"Work"})).toHaveAttribute("aria-selected","true"),await s(a.getByRole("tab",{name:"Schedule"})).toHaveAttribute("aria-selected","false")}},ve={name:"Test: overflow keeps badge details and selection semantics",parameters:{controls:{disable:!0}},render:t=>e.jsx(x,{"data-overflow-metadata-wrapper":!0,children:e.jsxs(T,{...t,defaultValue:"work",children:[e.jsx(l,{value:"work",children:"Work"}),e.jsx(l,{value:"materials",badge:3,badgeTooltip:"2 Open Part Requests, 1 Short Part",children:"Materials"}),e.jsx(l,{value:"documents",children:"Documents"}),e.jsx(l,{value:"history",children:"History"}),e.jsx(i,{value:"work",children:"Work content."}),e.jsx(i,{value:"materials",children:"Materials content."}),e.jsx(i,{value:"documents",children:"Documents content."}),e.jsx(i,{value:"history",children:"History content."})]})}),play:async({canvasElement:t})=>{const a=k(t),n=k(t.ownerDocument.body),r=t.querySelector("[data-overflow-metadata-wrapper]");if(!r)throw new Error("overflow metadata wrapper not found");r.style.width="180px";const c=await a.findByRole("button",{name:"More tabs"});await g.click(c);const d=await n.findByRole("menuitemradio",{name:/Materials \(3\)/});await s(d).toHaveAttribute("aria-checked","false"),await s(d).toHaveTextContent("2 Open Part Requests, 1 Short Part")}},fn=()=>{const[t,a]=o.useState(0),[n,r]=o.useState("none");return e.jsxs(x,{children:[e.jsxs(b,{pb:"8","data-testid":"consumer-events",children:["Clicks: ",t,"; last key: ",n]}),e.jsxs(T,{"aria-label":"Handler composition",defaultValue:"first",children:[e.jsx(l,{value:"first",onClick:()=>a(c=>c+1),children:"First"}),e.jsx(l,{value:"second",onKeyDown:c=>r(c.key),children:"Second"}),e.jsx(i,{value:"first",children:"First content."}),e.jsx(i,{value:"second",children:"Second content."})]})]})},he={name:"Test: consumer handlers preserve tab interactions",parameters:{controls:{disable:!0}},render:()=>e.jsx(fn,{}),play:async({canvasElement:t})=>{const a=k(t),n=a.getByRole("tab",{name:"First"}),r=a.getByRole("tab",{name:"Second"}),c=a.getByTestId("consumer-events");await g.click(r),await s(r).toHaveAttribute("aria-selected","true"),await g.keyboard("{ArrowLeft}"),await s(n).toHaveAttribute("aria-selected","true"),await s(c).toHaveTextContent("last key: ArrowLeft"),await g.click(n),await s(c).toHaveTextContent("Clicks: 1")}},me={name:"Test: disabled first tab is not the default",parameters:{controls:{disable:!0}},render:t=>e.jsxs(x,{children:[e.jsx(b,{pb:"12",color:"text.subtlest",children:"No `defaultValue` is given and the first tab is disabled. The strip selects the first enabled tab so the keyboard can still enter it."}),e.jsxs(T,{...t,children:[e.jsx(l,{value:"archived",disabled:!0,children:"Archived"}),e.jsx(l,{value:"open",children:"Open"}),e.jsx(l,{value:"closed",children:"Closed"}),e.jsx(i,{value:"archived",children:e.jsx(b,{py:"16",children:"Archived content."})}),e.jsx(i,{value:"open",children:e.jsx(b,{py:"16",children:"Open content."})}),e.jsx(i,{value:"closed",children:e.jsx(b,{py:"16",children:"Closed content."})})]})]}),play:async({canvasElement:t})=>{const a=k(t),n=a.getByRole("tab",{name:"Open"});await s(n).toHaveAttribute("aria-selected","true"),await s(n).toHaveAttribute("tabindex","0"),await s(a.getByRole("tab",{name:"Archived"})).toHaveAttribute("aria-selected","false"),await g.tab(),await s(n).toHaveFocus()}},we={name:"Test: badge does not change tab height",parameters:{controls:{disable:!0}},render:t=>e.jsxs(x,{display:"flex",flexDirection:"column",gap:"16",children:[e.jsx(b,{color:"text.subtlest",children:"Both strips are 40px tall. The 20px badge sits inside the 22px line box and never grows the tab. Matches Figma `_TabsTab`."}),e.jsxs(T,{...t,"aria-label":"Without badges",defaultValue:"work",children:[e.jsx(l,{value:"work",children:"Work"}),e.jsx(l,{value:"materials",children:"Materials"})]}),e.jsxs(T,{...t,"aria-label":"With badges",defaultValue:"work",children:[e.jsx(l,{value:"work",badge:3,children:"Work"}),e.jsx(l,{value:"materials",badge:12,badgeTooltip:"12 Short Part(s)",children:"Materials"})]})]}),play:async({canvasElement:t})=>{const a=k(t),[n,r]=a.getAllByRole("tablist");await s(r==null?void 0:r.offsetHeight).toBe(n==null?void 0:n.offsetHeight);for(const c of a.getAllByRole("tab"))await s(c.offsetHeight).toBe(40)}},fe=["Work","Info","Materials","Status"],ye={name:"Test: toggle space is reserved only once tabs overflow",parameters:{controls:{disable:!0}},render:t=>e.jsxs(x,{children:[e.jsx(b,{pb:"12",color:"text.subtlest",children:"The wrapper is sized just above the strip width. Every tab fits, so no toggle renders. Shrinking it below the strip makes the measured toggle appear."}),e.jsx(x,{"data-fit-wrapper":!0,borderWidth:"1",borderStyle:"dashed",borderColor:"border",children:e.jsxs(T,{...t,defaultValue:"work",children:[fe.map(a=>e.jsx(l,{value:a.toLowerCase(),children:a},a)),fe.map(a=>e.jsx(i,{value:a.toLowerCase(),children:e.jsxs(b,{py:"16",children:[a," content."]})},a))]})})]}),play:async({canvasElement:t})=>{const a=k(t),n=t.querySelector("[data-fit-wrapper]"),r=a.getByRole("tablist"),c=a.getAllByRole("tab");if(!n)throw new Error("wrapper not found");const d=Number.parseFloat(getComputedStyle(r).columnGap)||0,p=c.reduce((S,m)=>S+m.getBoundingClientRect().width,0)+d*(c.length-1);n.style.width=`${String(Math.ceil(p)+16)}px`,await M(async()=>{await s(a.getAllByRole("tab")).toHaveLength(fe.length),await s(a.queryByRole("button",{name:"More tabs"})).not.toBeInTheDocument()}),n.style.width=`${String(Math.floor(p)-8)}px`,await M(async()=>{await s(a.getByRole("button",{name:"More tabs"})).toBeInTheDocument(),await s(a.getAllByRole("tab").length).toBeLessThan(fe.length)})}},ge={name:"Test: tabs grouped in fragments join the strip",parameters:{controls:{disable:!0}},render:t=>e.jsxs(T,{...t,"aria-label":"Fragment children",defaultValue:"work",children:[e.jsxs(e.Fragment,{children:[e.jsx(l,{value:"work",children:"Work"}),e.jsx(e.Fragment,{children:e.jsx(l,{value:"materials",children:"Materials"})})]}),e.jsxs(e.Fragment,{children:[e.jsx(i,{value:"work",children:"Work content."}),e.jsx(i,{value:"materials",children:"Materials content."})]})]}),play:async({canvasElement:t})=>{const a=k(t),n=a.getByRole("tablist"),r=a.getByRole("tab",{name:"Materials"});await s(k(n).getAllByRole("tab")).toHaveLength(2),await g.click(r),await s(r).toHaveAttribute("aria-selected","true"),await s(a.getByText("Materials content.")).toBeVisible()}},yn=()=>{const t=o.useRef(null),[a,n]=o.useState("none");return e.jsxs(x,{children:[e.jsx(X,{variant:"standard",mb:"8",onClick:()=>{var r;return n(((r=t.current)==null?void 0:r.tagName)??"none")},children:"Read ref"}),e.jsxs(b,{pb:"8","data-testid":"consumer-ref",children:["Ref: ",a]}),e.jsxs(T,{"aria-label":"Consumer ref",defaultValue:"first",children:[e.jsx(l,{value:"first",children:"First"}),e.jsx(l,{value:"second",ref:t,children:"Second"}),e.jsx(i,{value:"first",children:"First content."}),e.jsx(i,{value:"second",children:"Second content."})]})]})},xe={name:"Test: consumer ref keeps tab registration",parameters:{controls:{disable:!0}},render:()=>e.jsx(yn,{}),play:async({canvasElement:t})=>{const a=k(t),n=a.getByRole("tab",{name:"First"}),r=a.getByRole("tab",{name:"Second"});await g.click(a.getByRole("button",{name:"Read ref"})),await s(a.getByTestId("consumer-ref")).toHaveTextContent("Ref: BUTTON"),await g.click(n),await g.keyboard("{ArrowRight}"),await s(r).toHaveAttribute("aria-selected","true"),await s(r).toHaveFocus()}},Te={name:"Test: badge tooltip opens on tab keyboard focus",parameters:{controls:{disable:!0}},render:t=>e.jsxs(T,{...t,"aria-label":"Badge tooltip",defaultValue:"materials",children:[e.jsx(l,{value:"materials",badge:3,badgeTooltip:"2 Open Part Requests",children:"Materials"}),e.jsx(l,{value:"status",children:"Status"}),e.jsx(i,{value:"materials",children:"Materials content."}),e.jsx(i,{value:"status",children:"Status content."})]}),play:async({canvasElement:t})=>{const a=k(t),n=k(t.ownerDocument.body),r=a.getByRole("tab",{name:/Materials/});await g.tab(),await s(r).toHaveFocus();const c=await n.findByRole("tooltip");await s(c).toHaveTextContent("2 Open Part Requests"),await s(r).toHaveAttribute("aria-describedby",c.id)}},De=()=>{const[t,a]=o.useState("alpha"),[n,r]=o.useState([]);return e.jsxs(x,{children:[e.jsxs(b,{pb:"8","data-testid":"deferred-value",children:["Parent value: ",t]}),e.jsxs(b,{pb:"8","data-testid":"deferred-requests",children:["Requests: ",n.join(", ")]}),e.jsx(x,{"data-deferred-wrapper":!0,children:e.jsxs(T,{"aria-label":"Deferred selection",value:t,onChange:(c,d)=>{r(p=>[...p,d]),globalThis.setTimeout(()=>a(d),300)},children:[e.jsx(l,{value:"alpha",children:"Alpha section"}),e.jsx(l,{value:"bravo",children:"Bravo section"}),e.jsx(l,{value:"charlie",children:"Charlie section"}),e.jsx(i,{value:"alpha",children:"Alpha content."}),e.jsx(i,{value:"bravo",children:"Bravo content."}),e.jsx(i,{value:"charlie",children:"Charlie content."})]})})]})},ke={name:"Test: deferred controlled selection keeps the focused tab visible",parameters:{controls:{disable:!0}},render:()=>e.jsx(De,{}),play:async({canvasElement:t})=>{const a=k(t),n=t.querySelector("[data-deferred-wrapper]");if(!n)throw new Error("deferred wrapper not found");const r=a.getByRole("tab",{name:"Alpha section"});n.style.width=`${String(Math.ceil(r.getBoundingClientRect().width)+48)}px`,await M(async()=>{await s(a.getAllByRole("tab")).toHaveLength(1)}),await g.click(r),await g.keyboard("{ArrowRight}");const c=await a.findByRole("tab",{name:"Bravo section"});await s(c).toHaveFocus(),await s(a.getByTestId("deferred-value")).toHaveTextContent("Parent value: alpha"),await M(async()=>{await s(a.getByTestId("deferred-value")).toHaveTextContent("Parent value: bravo")}),await s(c).toHaveAttribute("aria-selected","true"),await s(c).toHaveFocus(),n.style.width="",await M(async()=>{await s(a.getAllByRole("tab")).toHaveLength(3)}),await g.keyboard("{ArrowLeft}"),await M(async()=>{await s(a.getByTestId("deferred-value")).toHaveTextContent("Parent value: alpha")}),await g.keyboard("{ArrowRight}{ArrowRight}");const d=a.getByRole("tab",{name:"Charlie section"});await s(d).toHaveFocus(),await M(async()=>{await s(a.getByTestId("deferred-value")).toHaveTextContent("Parent value: charlie")}),await g.keyboard("{ArrowLeft}{ArrowLeft}"),await s(a.getByRole("tab",{name:"Alpha section"})).toHaveFocus(),await M(async()=>{await s(a.getByTestId("deferred-value")).toHaveTextContent("Parent value: alpha")})}},Be={name:"Test: a deferred return to the committed tab still reaches the parent",parameters:{controls:{disable:!0}},render:()=>e.jsx(De,{}),play:async({canvasElement:t})=>{const a=k(t),n=a.getByRole("tab",{name:"Alpha section"});await g.click(n),await g.keyboard("{ArrowRight}{ArrowLeft}"),await s(n).toHaveFocus(),await s(a.getByTestId("deferred-requests")).toHaveTextContent("Requests: bravo, alpha"),await new Promise(r=>globalThis.setTimeout(r,500)),await s(a.getByTestId("deferred-value")).toHaveTextContent("Parent value: alpha"),await s(n).toHaveAttribute("aria-selected","true"),await s(n).toHaveFocus()}},Re={name:"Test: rapid keys in a narrow deferred strip keep focus through intermediate commits",parameters:{controls:{disable:!0}},render:()=>e.jsx(De,{}),play:async({canvasElement:t})=>{const a=k(t),n=t.querySelector("[data-deferred-wrapper]");if(!n)throw new Error("deferred wrapper not found");const r=a.getByTestId("deferred-value"),c=async m=>{await M(async()=>{await s(r).toHaveTextContent(`Parent value: ${m}`)}),await new Promise(w=>globalThis.setTimeout(w,100))},d=a.getByRole("tab",{name:"Alpha section"});n.style.width=`${String(Math.ceil(d.getBoundingClientRect().width)+48)}px`,await M(async()=>{await s(a.getAllByRole("tab")).toHaveLength(1)}),await g.click(d),await g.keyboard("{ArrowRight}{ArrowRight}");const p=await a.findByRole("tab",{name:"Charlie section"});await s(p).toHaveFocus(),await M(async()=>{await s(r).toHaveTextContent("Parent value: bravo")}),await s(p).toBeVisible(),await s(p).toHaveFocus(),await c("charlie"),await s(p).toHaveAttribute("aria-selected","true"),await s(p).toHaveFocus(),await g.keyboard("{ArrowLeft}{ArrowLeft}"),await c("alpha");const S=a.getByRole("tab",{name:"Alpha section"});await s(S).toHaveAttribute("aria-selected","true"),await s(S).toHaveFocus(),await g.keyboard("{ArrowRight}{ArrowLeft}"),await c("alpha"),await s(a.getByTestId("deferred-requests")).toHaveTextContent(/bravo, alpha$/),await s(a.getByRole("tab",{name:"Alpha section"})).toHaveFocus()}},gn=()=>{const[t,a]=o.useState("missing");return e.jsxs(x,{children:[e.jsxs(b,{pb:"8","data-testid":"empty-fallback-value",children:['Parent value: "',t,'"']}),e.jsxs(T,{"aria-label":"Empty fallback",value:t,onChange:(n,r)=>a(r),children:[e.jsx(l,{value:"",children:"Overview"}),e.jsx(l,{value:"details",children:"Details"}),e.jsx(i,{value:"",children:"Overview content."}),e.jsx(i,{value:"details",children:"Details content."})]}),e.jsx(x,{"data-empty-wrapper":!0,pt:"16",children:e.jsxs(T,{"aria-label":"Empty selected",defaultValue:"",children:[e.jsx(l,{value:"work",children:"Work section"}),e.jsx(l,{value:"materials",children:"Materials section"}),e.jsx(l,{value:"",children:"Summary section"}),e.jsx(i,{value:"work",children:"Work content."}),e.jsx(i,{value:"materials",children:"Materials content."}),e.jsx(i,{value:"",children:"Summary content."})]})})]})},je={name:"Test: an empty-string tab value is a real selection",parameters:{controls:{disable:!0}},render:()=>e.jsx(gn,{}),play:async({canvasElement:t})=>{const a=k(t);await M(async()=>{await s(a.getByTestId("empty-fallback-value")).toHaveTextContent('Parent value: ""')}),await s(a.getByRole("tab",{name:"Overview"})).toHaveAttribute("aria-selected","true");const n=t.querySelector("[data-empty-wrapper]");if(!n)throw new Error("empty wrapper not found");const r=a.getByRole("tab",{name:"Summary section"});n.style.width=`${String(Math.ceil(r.getBoundingClientRect().width)+48)}px`;const c=a.getByRole("tablist",{name:"Empty selected"});await M(async()=>{await s(k(c).getAllByRole("tab")).toHaveLength(1)});const d=k(c).getByRole("tab",{name:"Summary section"});await s(d).toHaveAttribute("aria-selected","true"),await s(d).toHaveAttribute("tabindex","0")}},Se={name:"Test: with no enabled tabs, an empty-string tab is not selected",parameters:{controls:{disable:!0}},render:t=>e.jsxs(T,{...t,"aria-label":"No enabled tabs",children:[e.jsx(l,{value:"",disabled:!0,children:"Overview"}),e.jsx(l,{value:"details",disabled:!0,children:"Details"}),e.jsx(i,{value:"",children:e.jsx(b,{py:"16",children:"Overview content."})}),e.jsx(i,{value:"details",children:e.jsx(b,{py:"16",children:"Details content."})})]}),play:async({canvasElement:t})=>{const a=k(t);for(const n of a.getAllByRole("tab"))await s(n).toHaveAttribute("aria-selected","false");await s(a.getByText("Overview content.")).not.toBeVisible(),await s(a.getByText("Details content.")).not.toBeVisible()}},Ae={name:"Test: a responsive panel display never reveals an inactive panel",parameters:{controls:{disable:!0}},render:t=>e.jsxs(T,{...t,"aria-label":"Responsive panels",defaultValue:"work",children:[e.jsx(l,{value:"work",children:"Work"}),e.jsx(l,{value:"materials",children:"Materials"}),e.jsxs(i,{value:"work",display:{xs:"flex"},gap:"8",py:"16",children:[e.jsx(b,{children:"Work content."}),e.jsx(X,{children:"Start work"})]}),e.jsxs(i,{value:"materials",display:{xs:"flex"},gap:"8",py:"16",children:[e.jsx(b,{children:"Materials content."}),e.jsx(X,{children:"Issue materials"})]})]}),play:async({canvasElement:t})=>{const a=k(t);await s(a.getByText("Work content.")).toBeVisible(),await s(a.getByText("Materials content.")).not.toBeVisible(),await s(a.queryByRole("button",{name:"Issue materials"})).toBeNull(),await g.click(a.getByRole("tab",{name:"Materials"})),await s(a.getByText("Materials content.")).toBeVisible(),await s(a.getByText("Work content.")).not.toBeVisible()}},He={name:"Test: tab values with spaces still link tab and panel",parameters:{controls:{disable:!0}},render:t=>e.jsxs(T,{...t,"aria-label":"Order sections",defaultValue:"work orders",children:[e.jsx(l,{value:"work orders",children:"Work orders"}),e.jsx(l,{value:"sales orders",children:"Sales orders"}),e.jsx(i,{value:"work orders",children:e.jsx(b,{py:"16",children:"Open work orders."})}),e.jsx(i,{value:"sales orders",children:e.jsx(b,{py:"16",children:"Open sales orders."})})]}),play:async({canvasElement:t})=>{const a=k(t),n=a.getByRole("tab",{name:"Work orders"}),r=a.getByRole("tabpanel",{name:"Work orders"});await s(r.id).not.toMatch(/\s/),await s(n.id).not.toMatch(/\s/),await s(n).toHaveAttribute("aria-controls",r.id),await s(r).toHaveAttribute("aria-labelledby",n.id)}},Ge=t=>({id:t}),Ce={name:"Test: a consumer id never breaks the tab and panel links",parameters:{controls:{disable:!0}},render:t=>e.jsxs(T,{...t,"aria-label":"Consumer ids",defaultValue:"work",children:[e.jsx(l,{value:"work",...Ge("work-tab"),children:"Work"}),e.jsx(l,{value:"materials",children:"Materials"}),e.jsx(i,{value:"work",...Ge("work-panel"),children:e.jsx(b,{py:"16",children:"Work content."})}),e.jsx(i,{value:"materials",children:e.jsx(b,{py:"16",children:"Materials content."})})]}),play:async({canvasElement:t})=>{const a=k(t),n=a.getByRole("tab",{name:"Work"}),r=a.getByRole("tabpanel",{name:"Work"});await s(n.id).not.toBe("work-tab"),await s(r.id).not.toBe("work-panel"),await s(n).toHaveAttribute("aria-controls",r.id),await s(r).toHaveAttribute("aria-labelledby",n.id)}},Ee={name:"Test: choosing a hidden tab from the menu focuses that tab",parameters:{controls:{disable:!0}},render:t=>e.jsx(x,{"data-overflow-focus-wrapper":!0,children:e.jsxs(T,{...t,"aria-label":"Overflow focus",defaultValue:"work",children:[e.jsx(l,{value:"work",children:"Work"}),e.jsx(l,{value:"materials",children:"Materials"}),e.jsx(l,{value:"documents",children:"Documents"}),e.jsx(l,{value:"history",children:"History"}),e.jsx(i,{value:"work",children:"Work content."}),e.jsx(i,{value:"materials",children:"Materials content."}),e.jsx(i,{value:"documents",children:"Documents content."}),e.jsx(i,{value:"history",children:"History content."})]})}),play:async({canvasElement:t})=>{const a=k(t),n=k(t.ownerDocument.body),r=t.querySelector("[data-overflow-focus-wrapper]");if(!r)throw new Error("overflow focus wrapper not found");r.style.width="180px",await M(async()=>{await s(a.queryByRole("tab",{name:"History"})).toBeNull()});const c=await a.findByRole("button",{name:"More tabs"});await g.click(c),await g.click(await n.findByRole("menuitemradio",{name:"History"}));const d=await a.findByRole("tab",{name:"History"});await s(d).toHaveAttribute("aria-selected","true"),await new Promise(p=>globalThis.requestAnimationFrame(p)),await s(d).toHaveFocus()}},xn=()=>{const[t,a]=o.useState("alpha"),[n,r]=o.useState([]);return e.jsxs(x,{children:[e.jsx(X,{variant:"hollow",size:"sm",onClick:()=>a("bravo"),children:"Select Bravo from outside"}),e.jsxs(b,{py:"8","data-testid":"external-requests",children:["Requests: ",n.length>0?n.join(", "):"none"]}),e.jsxs(T,{"aria-label":"External selection",value:t,onChange:(c,d)=>{r(p=>[...p,d]),a(d)},children:[e.jsx(l,{value:"alpha",children:"Alpha section"}),e.jsx(l,{value:"bravo",children:"Bravo section"}),e.jsx(i,{value:"alpha",children:"Alpha content."}),e.jsx(i,{value:"bravo",children:"Bravo content."})]})]})},Pe={name:"Test: clicking a tab the parent already selected sends no change",parameters:{controls:{disable:!0}},render:()=>e.jsx(xn,{}),play:async({canvasElement:t})=>{const a=k(t),n=a.getByTestId("external-requests");await g.click(a.getByRole("button",{name:"Select Bravo from outside"}));const r=a.getByRole("tab",{name:"Bravo section"});await s(r).toHaveAttribute("aria-selected","true"),await g.click(r),await s(n).toHaveTextContent("Requests: none"),await g.click(a.getByRole("tab",{name:"Alpha section"})),await s(n).toHaveTextContent("Requests: alpha")}},Ln=["Default","WithBadges","Overflow","LabelOverride","UnmountInactive","ExWorkView","ControlledFallback","UncontrolledFallback","OverflowMetadata","ComposedTabHandlers","DisabledFirstTab","BadgeKeepsHeight","ToggleReserveOnlyOnOverflow","FragmentChildren","ConsumerRef","BadgeTooltipOnFocus","DeferredControlledOverflow","DeferredControlledReversal","DeferredControlledNarrowStrip","EmptyStringValue","NoEnabledTabs","ResponsivePanelDisplay","ValuesWithSpaces","ConsumerIdsIgnored","OverflowMenuFocus","ExternalValueChange"];var Ye,Qe,Je;oe.parameters={...oe.parameters,docs:{...(Ye=oe.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
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
}`,...(Je=(Qe=oe.parameters)==null?void 0:Qe.docs)==null?void 0:Je.source}}};var Ze,Xe,ea;le.parameters={...le.parameters,docs:{...(Ze=le.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
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
}`,...(ea=(Xe=le.parameters)==null?void 0:Xe.docs)==null?void 0:ea.source}}};var aa,ta,na;ie.parameters={...ie.parameters,docs:{...(aa=ie.parameters)==null?void 0:aa.docs,source:{originalSource:`{
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
}`,...(na=(ta=ie.parameters)==null?void 0:ta.docs)==null?void 0:na.source}}};var ra,sa,oa;ce.parameters={...ce.parameters,docs:{...(ra=ce.parameters)==null?void 0:ra.docs,source:{originalSource:`{
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
}`,...(oa=(sa=ce.parameters)==null?void 0:sa.docs)==null?void 0:oa.source}}};var la,ia,ca;de.parameters={...de.parameters,docs:{...(la=de.parameters)==null?void 0:la.docs,source:{originalSource:`{
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
}`,...(ca=(ia=de.parameters)==null?void 0:ia.docs)==null?void 0:ca.source}}};var da,ua,ba;ue.parameters={...ue.parameters,docs:{...(da=ue.parameters)==null?void 0:da.docs,source:{originalSource:`{
  name: 'Ex: Work View',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <WorkView />
}`,...(ba=(ua=ue.parameters)==null?void 0:ua.docs)==null?void 0:ba.source}}};var pa,va,ha;be.parameters={...be.parameters,docs:{...(pa=be.parameters)==null?void 0:pa.docs,source:{originalSource:`{
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
}`,...(ha=(va=be.parameters)==null?void 0:va.docs)==null?void 0:ha.source}}};var ma,wa,fa;pe.parameters={...pe.parameters,docs:{...(ma=pe.parameters)==null?void 0:ma.docs,source:{originalSource:`{
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
}`,...(fa=(wa=pe.parameters)==null?void 0:wa.docs)==null?void 0:fa.source}}};var ya,ga,xa;ve.parameters={...ve.parameters,docs:{...(ya=ve.parameters)==null?void 0:ya.docs,source:{originalSource:`{
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
}`,...(xa=(ga=ve.parameters)==null?void 0:ga.docs)==null?void 0:xa.source}}};var Ta,ka,Ba;he.parameters={...he.parameters,docs:{...(Ta=he.parameters)==null?void 0:Ta.docs,source:{originalSource:`{
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
}`,...(Ba=(ka=he.parameters)==null?void 0:ka.docs)==null?void 0:Ba.source}}};var Ra,ja,Sa;me.parameters={...me.parameters,docs:{...(Ra=me.parameters)==null?void 0:Ra.docs,source:{originalSource:`{
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
}`,...(Sa=(ja=me.parameters)==null?void 0:ja.docs)==null?void 0:Sa.source}}};var Aa,Ha,Ca;we.parameters={...we.parameters,docs:{...(Aa=we.parameters)==null?void 0:Aa.docs,source:{originalSource:`{
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
}`,...(Ca=(Ha=we.parameters)==null?void 0:Ha.docs)==null?void 0:Ca.source}}};var Ea,Pa,Ma;ye.parameters={...ye.parameters,docs:{...(Ea=ye.parameters)==null?void 0:Ea.docs,source:{originalSource:`{
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
}`,...(Ma=(Pa=ye.parameters)==null?void 0:Pa.docs)==null?void 0:Ma.source}}};var Oa,Fa,Va;ge.parameters={...ge.parameters,docs:{...(Oa=ge.parameters)==null?void 0:Oa.docs,source:{originalSource:`{
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
}`,...(Va=(Fa=ge.parameters)==null?void 0:Fa.docs)==null?void 0:Va.source}}};var Ia,Wa,qa;xe.parameters={...xe.parameters,docs:{...(Ia=xe.parameters)==null?void 0:Ia.docs,source:{originalSource:`{
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
}`,...(qa=(Wa=xe.parameters)==null?void 0:Wa.docs)==null?void 0:qa.source}}};var La,Da,Na;Te.parameters={...Te.parameters,docs:{...(La=Te.parameters)==null?void 0:La.docs,source:{originalSource:`{
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
}`,...(Na=(Da=Te.parameters)==null?void 0:Da.docs)==null?void 0:Na.source}}};var _a,$a,za;ke.parameters={...ke.parameters,docs:{...(_a=ke.parameters)==null?void 0:_a.docs,source:{originalSource:`{
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
}`,...(za=($a=ke.parameters)==null?void 0:$a.docs)==null?void 0:za.source}}};var Ka,Ua,Ga;Be.parameters={...Be.parameters,docs:{...(Ka=Be.parameters)==null?void 0:Ka.docs,source:{originalSource:`{
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
}`,...(Ga=(Ua=Be.parameters)==null?void 0:Ua.docs)==null?void 0:Ga.source}}};var Ya,Qa,Ja;Re.parameters={...Re.parameters,docs:{...(Ya=Re.parameters)==null?void 0:Ya.docs,source:{originalSource:`{
  name: 'Test: rapid keys in a narrow deferred strip keep focus through intermediate commits',
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
    const value = canvas.getByTestId('deferred-value');
    const settle = async (expected: string) => {
      await waitFor(async () => {
        await expect(value).toHaveTextContent(\`Parent value: \${expected}\`);
      });
      // Let the last commit's layout and focus work finish.
      await new Promise(resolve => globalThis.setTimeout(resolve, 100));
    };
    const alpha = canvas.getByRole('tab', {
      name: 'Alpha section'
    });
    // Room for the selected tab and the toggle only. The strip stays this
    // narrow for the whole test, so every requested tab starts overflowed.
    wrapper.style.width = \`\${String(Math.ceil(alpha.getBoundingClientRect().width) + 48)}px\`;
    await waitFor(async () => {
      await expect(canvas.getAllByRole('tab')).toHaveLength(1);
    });
    await userEvent.click(alpha);

    // Both presses land before the parent commits: Alpha → Bravo → Charlie.
    // The Bravo commit arrives while Charlie still holds focus.
    await userEvent.keyboard('{ArrowRight}{ArrowRight}');
    const charlie = await canvas.findByRole('tab', {
      name: 'Charlie section'
    });
    await expect(charlie).toHaveFocus();
    await waitFor(async () => {
      await expect(value).toHaveTextContent('Parent value: bravo');
    });
    await expect(charlie).toBeVisible();
    await expect(charlie).toHaveFocus();
    await settle('charlie');
    await expect(charlie).toHaveAttribute('aria-selected', 'true');
    await expect(charlie).toHaveFocus();

    // And back: Charlie → Bravo → Alpha, with the Bravo commit in between.
    await userEvent.keyboard('{ArrowLeft}{ArrowLeft}');
    await settle('alpha');
    const alphaAgain = canvas.getByRole('tab', {
      name: 'Alpha section'
    });
    await expect(alphaAgain).toHaveAttribute('aria-selected', 'true');
    await expect(alphaAgain).toHaveFocus();

    // A return to the committed tab: Right then Left before Bravo commits.
    await userEvent.keyboard('{ArrowRight}{ArrowLeft}');
    await settle('alpha');
    await expect(canvas.getByTestId('deferred-requests')).toHaveTextContent(/bravo, alpha$/);
    await expect(canvas.getByRole('tab', {
      name: 'Alpha section'
    })).toHaveFocus();
  }
}`,...(Ja=(Qa=Re.parameters)==null?void 0:Qa.docs)==null?void 0:Ja.source}}};var Za,Xa,et;je.parameters={...je.parameters,docs:{...(Za=je.parameters)==null?void 0:Za.docs,source:{originalSource:`{
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
}`,...(et=(Xa=je.parameters)==null?void 0:Xa.docs)==null?void 0:et.source}}};var at,tt,nt;Se.parameters={...Se.parameters,docs:{...(at=Se.parameters)==null?void 0:at.docs,source:{originalSource:`{
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
}`,...(nt=(tt=Se.parameters)==null?void 0:tt.docs)==null?void 0:nt.source}}};var rt,st,ot;Ae.parameters={...Ae.parameters,docs:{...(rt=Ae.parameters)==null?void 0:rt.docs,source:{originalSource:`{
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
}`,...(ot=(st=Ae.parameters)==null?void 0:st.docs)==null?void 0:ot.source}}};var lt,it,ct;He.parameters={...He.parameters,docs:{...(lt=He.parameters)==null?void 0:lt.docs,source:{originalSource:`{
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
}`,...(ct=(it=He.parameters)==null?void 0:it.docs)==null?void 0:ct.source}}};var dt,ut,bt;Ce.parameters={...Ce.parameters,docs:{...(dt=Ce.parameters)==null?void 0:dt.docs,source:{originalSource:`{
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
}`,...(bt=(ut=Ce.parameters)==null?void 0:ut.docs)==null?void 0:bt.source}}};var pt,vt,ht;Ee.parameters={...Ee.parameters,docs:{...(pt=Ee.parameters)==null?void 0:pt.docs,source:{originalSource:`{
  name: 'Test: choosing a hidden tab from the menu focuses that tab',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: args => <Box data-overflow-focus-wrapper>
      <Tabs {...args} aria-label="Overflow focus" defaultValue="work">
        <Tab value="work">Work</Tab>
        <Tab value="materials">Materials</Tab>
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
    const wrapper = canvasElement.querySelector<HTMLElement>('[data-overflow-focus-wrapper]');
    if (!wrapper) throw new Error('overflow focus wrapper not found');
    wrapper.style.width = '180px';
    await waitFor(async () => {
      await expect(canvas.queryByRole('tab', {
        name: 'History'
      })).toBeNull();
    });
    const trigger = await canvas.findByRole('button', {
      name: 'More tabs'
    });
    await userEvent.click(trigger);
    await userEvent.click(await body.findByRole('menuitemradio', {
      name: 'History'
    }));
    const history = await canvas.findByRole('tab', {
      name: 'History'
    });
    await expect(history).toHaveAttribute('aria-selected', 'true');

    // Closing the menu queues a focus return to its trigger. Wait a frame so
    // that queued work has run, then check that focus stayed on the tab.
    await new Promise(resolve => globalThis.requestAnimationFrame(resolve));
    await expect(history).toHaveFocus();
  }
}`,...(ht=(vt=Ee.parameters)==null?void 0:vt.docs)==null?void 0:ht.source}}};var mt,wt,ft;Pe.parameters={...Pe.parameters,docs:{...(mt=Pe.parameters)==null?void 0:mt.docs,source:{originalSource:`{
  name: 'Test: clicking a tab the parent already selected sends no change',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <ExternallyControlledTabs />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const requests = canvas.getByTestId('external-requests');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Select Bravo from outside'
    }));
    const bravo = canvas.getByRole('tab', {
      name: 'Bravo section'
    });
    await expect(bravo).toHaveAttribute('aria-selected', 'true');
    await userEvent.click(bravo);
    await expect(requests).toHaveTextContent('Requests: none');
    await userEvent.click(canvas.getByRole('tab', {
      name: 'Alpha section'
    }));
    await expect(requests).toHaveTextContent('Requests: alpha');
  }
}`,...(ft=(wt=Pe.parameters)==null?void 0:wt.docs)==null?void 0:ft.source}}};export{we as BadgeKeepsHeight,Te as BadgeTooltipOnFocus,he as ComposedTabHandlers,Ce as ConsumerIdsIgnored,xe as ConsumerRef,be as ControlledFallback,oe as Default,Re as DeferredControlledNarrowStrip,ke as DeferredControlledOverflow,Be as DeferredControlledReversal,me as DisabledFirstTab,je as EmptyStringValue,ue as ExWorkView,Pe as ExternalValueChange,ge as FragmentChildren,ce as LabelOverride,Se as NoEnabledTabs,ie as Overflow,Ee as OverflowMenuFocus,ve as OverflowMetadata,Ae as ResponsivePanelDisplay,ye as ToggleReserveOnlyOnOverflow,pe as UncontrolledFallback,de as UnmountInactive,He as ValuesWithSpaces,le as WithBadges,Ln as __namedExportsOrder,qn as default};
