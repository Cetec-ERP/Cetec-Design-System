import{m as At,e as Ht,f as Ct,g as Et,h as Pt,r as o,s as We,Y as Mt,Z as Ot,at as Ft,af as Vt,ah as It,a1 as Wt,a2 as qt,a5 as Lt,ac as Dt,j as e,B as x,c as qe,a6 as Nt,a7 as _t,au as $t,d as yt,av as zt,aa as Kt,T as b,a as Ut}from"./iframe-DJxTTWol.js";import{B as X}from"./Button-Bx1S-kNk.js";import{g as Gt,s as gt,M as Yt,a as Qt}from"./SubMenu-CWM_ue-Z.js";import{B as Jt}from"./Badge-DOxzKJIo.js";import{I as xt}from"./IconButton-B4S1HZRX.js";import{u as Zt}from"./useControllableState-ROICCtQK.js";import"./preload-helper-B1x5OZGs.js";import"./Spinner-CWv0HoJQ.js";import"./FieldContext-DEMzQPqI.js";import"./HighlightText-Ep71fbPv.js";import"./menu-C4kMR813.js";import"./FloatingLayerContext-B7b05NP8.js";import"./ListItemGroup-BfofQhLC.js";import"./Divider-B9ldHfjM.js";import"./Checkbox-BtpNawSg.js";import"./Toggle-Dk-rhjBg.js";const Tt={hasOverflow:!1},Xt=[],en=[["root","tabs__root"],["strip","tabs__strip"],["list","tabs__list"],["tab","tabs__tab"],["badge","tabs__badge"],["overflow","tabs__overflow"],["menu","tabs__menu"],["panel","tabs__panel"]],an=en.map(([t,a])=>[t,Et(a,Tt,Pt(Xt,t))]),tn=At((t={})=>Object.fromEntries(an.map(([a,n])=>[a,n.recipeFn(t)]))),$e=["hasOverflow","overflowed"],nn=t=>({...Tt,...Ht(t)}),kt=Object.assign(tn,{__recipe__:!1,__name__:"tabs",raw:t=>t,classNameMap:{},variantKeys:$e,variantMap:{hasOverflow:["false","true"],overflowed:["true"]},splitVariantProps(t){return Ct(t,$e)},getVariantProps:nn}),rn=32,se=(t,a)=>t.length===a.length&&t.every((n,r)=>n===a[r]),sn=(t,a,n)=>{for(const r of a)n.has(r)||t==null||t.unobserve(r);for(const r of n)a.has(r)||t==null||t.observe(r);return n},on=({items:t,containerRef:a,getItemElement:n,activeItem:r=null,reserve:c=rn,reserveRef:d,enabled:p=!0})=>{const[g,k]=o.useState(()=>[...t]),[w,L]=o.useState([]),[A,F]=o.useState(null),j=o.useRef(null),E=o.useRef(t),D=o.useRef(r),$=o.useRef(A),P=o.useRef([]),z=o.useRef(r),V=o.useRef(c),M=o.useRef(null),G=o.useRef(p),C=o.useRef(null),K=o.useRef(new Set),N=o.useRef(null),I=o.useCallback(()=>{var Ne;const h=a.current,m=E.current;if(!G.current||!h){k(f=>se(f,m)?f:[...m]),L(f=>f.length===0?f:[]);return}const H=globalThis.getComputedStyle(h),u=Number.parseFloat(H.paddingLeft||"0")+Number.parseFloat(H.paddingRight||"0"),v=Number.parseFloat(H.columnGap||"0")||0,R=h.clientWidth-u,Y=m.map(f=>{var q;return((q=n(f))==null?void 0:q.offsetWidth)??Number.POSITIVE_INFINITY}),W=$.current,J=D.current,Q=W??J,ee=Q===null?-1:m.indexOf(Q),ne=ee===-1?0:ee,re=[...new Set([W,J].filter(f=>f!==null).map(f=>m.indexOf(f)).filter(f=>f!==-1))],Oe=m.map((f,q)=>q).sort((f,q)=>{const U=Math.abs(f-ne)-Math.abs(q-ne);return U===0?f-q:U}),te=(f,q)=>{const U=new Set;let Ve=0;for(const ae of f)Ve+=(Y[ae]??0)+(U.size>0?v:0),U.add(ae);for(const ae of Oe){if(U.has(ae))continue;const _e=(Y[ae]??0)+(U.size>0?v:0);if(Ve+_e>q)break;Ve+=_e,U.add(ae)}return U};let Z=te([],R);if(Z.size<m.length){const f=((Ne=M.current)==null?void 0:Ne.offsetWidth)??V.current,q=R-f;Z=te([],q),re.some(U=>!Z.has(U))&&(Z=te(re,q))}const _=[],Fe=[];m.forEach((f,q)=>{Z.has(q)?_.push(f):Fe.push(f)}),k(f=>se(f,_)?f:_),L(f=>se(f,Fe)?f:Fe)},[a,n]),S=o.useCallback((h,m)=>{if(!E.current.includes(h))return;const H=P.current;if((H.length>0||h!==D.current)&&(P.current=[...H.filter(v=>v!==h),h],F(h)),!w.includes(h)){N.current=null,m==null||m();return}N.current={key:h,onVisible:m},F(h)},[w]);return o.useLayoutEffect(()=>{const h=()=>{j.current!==null&&globalThis.cancelAnimationFrame(j.current),j.current=globalThis.requestAnimationFrame(()=>{j.current=null,I()})},m=typeof ResizeObserver>"u"?null:new ResizeObserver(h);return C.current=m,globalThis.addEventListener("resize",h),()=>{m==null||m.disconnect(),C.current=null,K.current.clear(),globalThis.removeEventListener("resize",h),j.current!==null&&(globalThis.cancelAnimationFrame(j.current),j.current=null)}},[I]),o.useLayoutEffect(()=>{se(E.current,t)||(E.current=[...t]),D.current=r,$.current=A,V.current=c,M.current=(d==null?void 0:d.current)??null,G.current=p;const h=new Set,m=a.current;if(p&&m){h.add(m),M.current&&h.add(M.current);for(const H of E.current){const u=n(H);u&&h.add(u)}}K.current=sn(C.current,K.current,h),I()},[r,a,p,A,n,t,I,c,d]),o.useLayoutEffect(()=>{var m;const h=N.current;if(h){if(!E.current.includes(h.key)){N.current=null,F(null);return}w.includes(h.key)||(N.current=null,(m=h.onVisible)==null||m.call(h))}},[w]),o.useLayoutEffect(()=>{if(z.current!==r){z.current=r;const H=P.current,u=r===null?-1:H.indexOf(r);P.current=u===-1?[]:H.slice(u+1)}if(A===null)return;const h=!t.includes(A);if(!h&&P.current.length>0)return;const m=N.current;m&&(h||m.key!==r)&&(N.current=null),P.current=[],F(null)},[r,A,t]),{visible:g,overflow:w,hasOverflow:w.length>0,measure:I,ensureVisible:S}},Bt=o.createContext(null),ln=o.createContext(!0),cn=Bt.Provider,dn=ln.Provider,Rt=()=>{const t=o.useContext(Bt);if(!t)throw new Error("Tabs compound components must be used within <Tabs />");return t},Me={tab:"Tab",panel:"TabPanel"},Le="__tabsComponentType",jt=t=>Gt(t,Le),St=t=>{const a=[],n=(r,c)=>{o.Children.toArray(r).forEach(d=>{if(o.isValidElement(d)&&d.type===o.Fragment){n(d.props.children,`${c}${String(d.key)}/`);return}a.push(c!==""&&o.isValidElement(d)?o.cloneElement(d,{key:`${c}${String(d.key)}`}):d)})};return n(t,""),a},un=kt({overflowed:!0}).tab,ze=$t({size:"md",hasTitle:!1}),l=t=>{const{value:a,children:n,label:r,badge:c,badgeTooltip:d,disabled:p=!1,onClick:g,onKeyDown:k,ref:w,...L}=t,{classes:A,getPanelId:F,getTabId:j,onTabKeyDown:E,overflowValues:D,registerTabElement:$,selectTab:P,selectedValue:z}=Rt(),V=z===a,M=D.includes(a),[G,C]=We(L),K=o.useCallback(_=>{$(a,_)},[$,a]),N=M?un:A.tab,I=typeof c=="number"&&c!==0,S=I&&!!d&&!M,[h,m]=o.useState(!1),H=o.useRef(null),u=S&&h,{refs:v,elements:R,floatingStyles:Y,context:W}=Mt({open:u,onOpenChange:m,placement:"bottom",middleware:Ot({offset:8,extras:[Ft({element:H})]})}),J=Vt(W,{enabled:S,move:!1}),Q=It(W,{enabled:S}),ee=Wt(W,{enabled:S}),ne=qt(W,{enabled:S,role:"tooltip"}),{getReferenceProps:re,getFloatingProps:Oe}=Lt([J,Q,ee,ne]),te=Dt([K,v.setReference,w]),Z=I?e.jsx(x,{ref:v.setPositionReference,className:A.badge,children:e.jsx(Jt,{count:c,variant:"subtle"})}):null;return e.jsxs(e.Fragment,{children:[e.jsxs(x,{as:"button",type:"button",ref:te,role:"tab","aria-selected":V,"aria-controls":F(a),"aria-hidden":M||void 0,disabled:p,tabIndex:V&&!M?0:-1,className:qe(N,G),...re({...C,onClick:_=>{g==null||g(_),!(p||_.defaultPrevented)&&P(_,a,"clicked-on-tab")},onKeyDown:_=>{k==null||k(_),_.defaultPrevented||E(_)}}),id:j(a),children:[n,Z]}),u?e.jsx(Nt,{children:e.jsx(_t,{reference:R.domReference,children:e.jsxs(x,{...yt("Tooltip"),ref:v.setFloating,style:Y,className:ze.tooltipContent,...Oe(),children:[e.jsx(x,{className:ze.text,children:d}),e.jsx(zt,{ref:H,context:W,fill:Kt.var("colors.bg.neutral.inverse")})]})})}):null]})};gt(l,Le,Me.tab);l.__docgenInfo={description:'Selects one panel inside a {@link Tabs} strip.\n\nRenders a `button` with `role="tab"`. Only the selected tab is in the tab\norder; Arrow, Home, and End move between the others. A tab that does not fit\nthe strip stays mounted but hidden so it can still be measured, and it is\noffered in the overflow menu instead. The menu row is plain text, so give\n`label` when `children` are not plain text.\n\n`badgeTooltip` opens on hover and on keyboard focus of the tab itself, points\nat the badge, and is linked to the tab with `aria-describedby` while open.\n\n@example\n```tsx\n<Tab value="materials" badge={3} badgeTooltip="2 Open Part Request">\n  Materials\n</Tab>\n```',methods:[],displayName:"Tab",props:{value:{required:!0,tsType:{name:"string"},description:"Identifies the tab and the `TabPanel` it controls. Must be unique within a `Tabs`."},children:{required:!1,tsType:{name:"ReactNode"},description:"Visible label rendered in the strip. Plain text is also reused as the overflow-menu row's text unless `label` overrides it."},label:{required:!1,tsType:{name:"string"},description:"Plain-text name for this tab's overflow-menu row, which cannot render\nmarkup. Set it when `children` contain more than text — an icon, a nested\nelement — because flattening those to a string reads badly. It never\nchanges what the strip renders: `children` still render there as-is.\nWithout it the menu row falls back to the flattened `children`, then to\n`value`."},badge:{required:!1,tsType:{name:"number"},description:"Count shown in a trailing {@link Badge}. A zero or omitted count renders no badge."},badgeTooltip:{required:!1,tsType:{name:"string"},description:"Tooltip text describing what the badge counts. Requires `badge`."},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents selection and skips the tab during arrow-key navigation."}}};const i=t=>{const{value:a,children:n,...r}=t,{classes:c,getPanelId:d,getTabId:p,selectedValue:g,unmountInactive:k}=Rt(),w=g===a,[L,A]=We(r);if(k&&!w)return null;const j=typeof n=="function"?n({isActive:w}):n;return e.jsx(dn,{value:w,children:e.jsx(x,{role:"tabpanel","aria-labelledby":p(a),tabIndex:w?0:-1,display:w?"block":"none",_hidden:{display:"none"},className:qe(c.panel,L),...A,id:d(a),hidden:!w,children:j})})};gt(i,Le,Me.panel);i.__docgenInfo={description:'Renders the content for one {@link Tab}.\n\nThe panel stays mounted when another tab is selected and is hidden with\n`display: none`, which preserves scroll position and local state; set\n`unmountInactive` on `Tabs` to render only the selected panel instead. A\nfunction child receives `{ isActive }`, and descendants can call\n`useTabPanelActive()` for the same signal, so hidden panels can pause polling\nor animation.\n\n@example\n```tsx\n<TabPanel value="materials">\n  {({ isActive }) => <MaterialsGrid paused={!isActive} />}\n</TabPanel>\n```',methods:[],displayName:"TabPanel",props:{value:{required:!0,tsType:{name:"string"},description:"`value` of the {@link Tab} this panel belongs to."},children:{required:!1,tsType:{name:"union",raw:"ReactNode | ((props: TabPanelRenderProps) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:"Panel content. A function child receives `{ isActive }` so expensive work\ncan pause while the panel is mounted but hidden."}}};const Ie=t=>t==null||typeof t=="boolean"?"":typeof t=="string"||typeof t=="number"?String(t):Array.isArray(t)?t.map(a=>Ie(a)).join(""):o.isValidElement(t)?Ie(t.props.children):"",bn=({children:t,value:a,defaultValue:n,onChange:r,listRef:c,overflowRef:d})=>{var H;const p=o.useMemo(()=>{const u=[];return St(t).forEach(v=>{if(!o.isValidElement(v)||jt(v)!==Me.tab)return;const R=v.props;typeof R.value=="string"&&u.push({value:R.value,label:R.label||Ie(R.children)||R.value,disabled:!!R.disabled,badge:R.badge,badgeTooltip:R.badgeTooltip})}),u},[t]),g=o.useMemo(()=>p.map(u=>u.value),[p]),k=(H=p.find(u=>!u.disabled))==null?void 0:H.value,[w,L,A]=Zt({value:a,defaultValue:n??k??""}),F=o.useRef(w),j=o.useRef([]),E=o.useCallback(u=>{F.current=u,j.current=[...j.current.filter(v=>v!==u),u]},[]);o.useEffect(()=>{const u=j.current,v=u.indexOf(w);if(v===-1){j.current=[],F.current=w;return}j.current=u.slice(v+1)},[w]);const D=p.find(u=>u.value===w),$=!!(D&&!D.disabled),P=$?w:k,z=o.useRef(null);o.useEffect(()=>{if($){z.current=null;return}const u=JSON.stringify([w,k??null]);z.current!==u&&(z.current=u,A||L(k??""),k!==void 0&&(E(k),r==null||r(null,k,"fallback-after-removal")))},[k,A,$,r,E,L,w]);const V=o.useRef(new Map),M=o.useCallback((u,v)=>{v?V.current.set(u,v):V.current.delete(u)},[]),G=o.useCallback(u=>V.current.get(u)??null,[]),{ensureVisible:C,overflow:K,hasOverflow:N}=on({items:g,containerRef:c,getItemElement:G,activeItem:P??null,reserveRef:d}),I=o.useCallback((u,v,R)=>{v===w&&F.current===w||(E(v),L(v),r==null||r(u,v,R))},[r,E,L,w]),S=o.useCallback((u,v)=>{C(u,()=>{const R=()=>{var Y;return(Y=V.current.get(u))==null?void 0:Y.focus()};v!=null&&v.afterMenuClose?queueMicrotask(R):R()})},[C]),h=o.useCallback(u=>{const v=p.filter(Q=>!Q.disabled).map(Q=>Q.value);if(v.length===0)return;let R=P;for(const[Q,ee]of V.current)if(ee===u.currentTarget){R=Q;break}const Y=R===void 0?0:Math.max(0,v.indexOf(R));let W;switch(u.key){case"ArrowRight":W=(Y+1)%v.length;break;case"ArrowLeft":W=(Y-1+v.length)%v.length;break;case"Home":W=0;break;case"End":W=v.length-1;break;default:return}u.preventDefault();const J=v[W];J!==void 0&&(I(u,J,"clicked-on-tab"),S(J))},[S,I,P,p]),m=o.useMemo(()=>K.map(u=>p.find(v=>v.value===u)).filter(u=>!!u),[K,p]);return{hasOverflow:N,focusTab:S,onTabKeyDown:h,overflowTabs:m,overflowValues:K,registerTabElement:M,selectTab:I,selectedValue:P,tabs:p}},pn=({className:t,focusTab:a,tabs:n,selectTab:r,selectedValue:c})=>{const[d,p]=o.useState(!1);return e.jsx(Yt,{open:d,onOpenChange:p,placement:"bottom-end",className:t,trigger:e.jsx(xt,{variant:"ghost",size:"md",iconName:d?"caret-up":"caret-down",altText:"More tabs","aria-haspopup":"menu"}),children:n.map(g=>{const k=typeof g.badge=="number"&&g.badge!==0;return e.jsx(Qt,{label:k?`${g.label} (${String(g.badge)})`:g.label,description:k?g.badgeTooltip:void 0,disabled:g.disabled,selected:g.value===c,role:"menuitemradio","aria-checked":g.value===c,onClick:w=>{r(w,g.value,"selected-from-overflow"),p(!1),a(g.value,{afterMenuClose:!0})}},g.value)})})},T=t=>{const{children:a,value:n,defaultValue:r,onChange:c,unmountInactive:d=!1,"aria-label":p,"aria-labelledby":g,...k}=t,[w,L]=We(k),A=o.useRef(null),F=o.useRef(null),j=o.useId(),{focusTab:E,hasOverflow:D,onTabKeyDown:$,overflowTabs:P,overflowValues:z,registerTabElement:V,selectTab:M,selectedValue:G}=bn({children:a,value:n,defaultValue:r,onChange:c,listRef:A,overflowRef:F}),C=o.useMemo(()=>kt({hasOverflow:D}),[D]),[K,N]=o.useMemo(()=>{const S=[],h=[];return St(a).forEach(m=>{jt(m)===Me.tab?S.push(m):h.push(m)}),[S,h]},[a]),I=o.useMemo(()=>({classes:C,getPanelId:S=>`${j}-panel-${encodeURIComponent(S)}`,getTabId:S=>`${j}-tab-${encodeURIComponent(S)}`,onTabKeyDown:$,overflowValues:z,registerTabElement:V,selectTab:M,selectedValue:G,unmountInactive:d}),[j,C,$,z,V,M,G,d]);return e.jsx(cn,{value:I,children:e.jsxs(x,{...yt("Tabs"),className:qe(C.root,w),...L,children:[e.jsxs(x,{className:C.strip,children:[e.jsx(x,{ref:A,role:"tablist","aria-label":p,"aria-labelledby":g,"aria-orientation":"horizontal",className:C.list,children:K}),e.jsx(x,{ref:F,className:C.overflow,"aria-hidden":!D||void 0,children:D?e.jsx(pn,{className:C.menu,focusTab:E,tabs:P,selectTab:M,selectedValue:G}):e.jsx(xt,{variant:"ghost",size:"md",iconName:"caret-down",altText:"More tabs",disabled:!0,tabIndex:-1})})]}),N]})})};T.__docgenInfo={description:'Groups related content into a single view with one panel visible at a time.\n\nCompose it from `Tab` and `TabPanel` children; the first enabled `Tab` is\nselected by default. Selection is uncontrolled with `defaultValue` or\ncontrolled with `value` plus `onChange`. Tabs that do not fit the available width move into\nan overflow menu at the end of the strip, and the selected tab always stays\nvisible. Every panel stays mounted and hidden unless `unmountInactive` is\nset, so read `useTabPanelActive()` to pause work in a hidden panel.\n\nThe strip renders a `tablist` with roving tabindex and Arrow, Home, and End\nnavigation. Supply `aria-label` or `aria-labelledby` so it is announced.\n\n@example\n```tsx\n<Tabs defaultValue="work" aria-label="Order sections">\n  <Tab value="work">Work</Tab>\n  <Tab value="materials" badge={3}>Materials</Tab>\n  <TabPanel value="work">Work content</TabPanel>\n  <TabPanel value="materials">Materials content</TabPanel>\n</Tabs>\n```',methods:[],displayName:"Tabs",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"`Tab` and `TabPanel` children. Tab order in the strip follows source order."},value:{required:!1,tsType:{name:"string"},description:"Controlled selected tab `value`. Pair with `onChange`; omit it to use `defaultValue`."},defaultValue:{required:!1,tsType:{name:"string"},description:"Initially selected tab `value` when `value` is not provided. It is used\nonly on first render.\n@default the first `Tab` child's `value`"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  event: TabsChangeEvent,
  value: string,
  reason: TabsChangeReason,
) => void`,signature:{arguments:[{type:{name:"union",raw:`| ReactMouseEvent<HTMLElement>
| ReactKeyboardEvent<HTMLElement>
| null`,elements:[{name:"ReactMouseEvent",elements:[{name:"HTMLElement"}],raw:"ReactMouseEvent<HTMLElement>"},{name:"ReactKeyboardEvent",elements:[{name:"HTMLElement"}],raw:"ReactKeyboardEvent<HTMLElement>"},{name:"null"}]},name:"event"},{type:{name:"string"},name:"value"},{type:{name:"union",raw:`| 'clicked-on-tab'
| 'selected-from-overflow'
| 'fallback-after-removal'`,elements:[{name:"literal",value:"'clicked-on-tab'"},{name:"literal",value:"'selected-from-overflow'"},{name:"literal",value:"'fallback-after-removal'"}]},name:"reason"}],return:{name:"void"}}},description:"Runs when user interaction selects a different tab."},unmountInactive:{required:!1,tsType:{name:"boolean"},description:"Renders only the selected `TabPanel`. By default every panel stays mounted\nand inactive panels are hidden with `display: none`, which preserves their\nscroll position and local state.\n@default false"},"aria-label":{required:!1,tsType:{name:"string"},description:"Accessible name for the tab strip. Provide this or `aria-labelledby` so the\n`tablist` is announced."},"aria-labelledby":{required:!1,tsType:{name:"string"},description:"Id of an element that labels the tab strip."}}};const{expect:s,userEvent:y,waitFor:O,within:B}=__STORYBOOK_MODULE_TEST__,In={title:"Components/Tabs",component:T,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:["Tabs keep every `TabPanel` mounted by default and hide the inactive","ones with `display: none`. That preserves scroll position, form","drafts, and grid state when a user moves between tabs, at the cost","of keeping hidden work alive. Hidden panels receive an `isActive`","signal — as a render-prop argument or through `useTabPanelActive()`","— so polling, timers, and animation can pause themselves. Set","`unmountInactive` when a panel is expensive enough that discarding","its state is the better trade."].join(" ")}}},args:{"aria-label":"Example sections",children:null}},oe={render:t=>e.jsxs(T,{...t,defaultValue:"overview",children:[e.jsx(l,{value:"overview",children:"Overview"}),e.jsx(l,{value:"activity",children:"Activity"}),e.jsx(l,{value:"settings",children:"Settings"}),e.jsx(i,{value:"overview",children:e.jsx(b,{py:"16",children:"Summary of the current record."})}),e.jsx(i,{value:"activity",children:e.jsx(b,{py:"16",children:"Recent activity for the current record."})}),e.jsx(i,{value:"settings",children:e.jsx(b,{py:"16",children:"Settings for the current record."})})]})},le={name:"Badges",parameters:{controls:{disable:!0}},render:t=>e.jsxs(T,{...t,defaultValue:"work",children:[e.jsx(l,{value:"work",children:"Work"}),e.jsx(l,{value:"materials",badge:3,badgeTooltip:"2 Open Part Request, 1 Short Part(s)",children:"Materials"}),e.jsx(l,{value:"status",badge:12,children:"Status"}),e.jsx(l,{value:"documents",badge:0,children:"Documents"}),e.jsx(i,{value:"work",children:e.jsx(b,{py:"16",children:"A badge without a tooltip is a bare count."})}),e.jsx(i,{value:"materials",children:e.jsx(b,{py:"16",children:"Hover or focus the Materials tab to read what the count means."})}),e.jsx(i,{value:"status",children:e.jsx(b,{py:"16",children:"Status content."})}),e.jsx(i,{value:"documents",children:e.jsx(b,{py:"16",children:"A zero count renders no badge at all."})})]})},Ke=["Work","Info","Materials","Status","Documents","History","Labor","Quality","Shipping","Invoicing","Costing","Notes"],ie={name:"Overflow",parameters:{controls:{disable:!0}},render:t=>e.jsxs(x,{resize:"horizontal",overflow:"auto",width:"lg",maxWidth:"full",minWidth:"240",borderWidth:"1",borderStyle:"dashed",borderColor:"border",p:"16",children:[e.jsx(b,{pb:"12",color:"text.subtlest",children:"Drag the bottom-right corner. Tabs nearest the selected one keep their place; the rest move into the overflow menu."}),e.jsxs(T,{...t,defaultValue:"work",children:[Ke.map(a=>e.jsx(l,{value:a.toLowerCase(),children:a},a)),Ke.map(a=>e.jsx(i,{value:a.toLowerCase(),children:e.jsxs(b,{py:"16",children:[a," content."]})},a))]})]})},Ue=[{value:"work",label:"Work",icon:"wrench-2"},{value:"materials",label:"Materials",icon:"cube-focus"},{value:"schedule",label:"Schedule",icon:"calendar-view-week"},{value:"shipping",label:"Shipping",icon:"truck-trailer"},{value:"quality",label:"Quality",icon:"list-checks"},{value:"history",label:"History",icon:"clock-countdown"},{value:"notes",label:"Notes",icon:"note-stack"}],ce={name:"Label Override for Overflow",parameters:{controls:{disable:!0}},render:t=>e.jsxs(x,{width:"md",maxWidth:"full",children:[e.jsx(b,{pb:"12",color:"text.subtlest",children:"These tabs render an icon beside their text, so flattening `children` would produce a poor menu row. Each one passes `label`, and the overflow menu uses that text. The strip still renders `children` as-is."}),e.jsxs(T,{...t,defaultValue:"work",children:[Ue.map(a=>e.jsxs(l,{value:a.value,label:a.label,children:[e.jsx(Ut,{name:a.icon,"aria-hidden":!0}),a.label]},a.value)),Ue.map(a=>e.jsx(i,{value:a.value,children:e.jsxs(b,{py:"16",children:[a.label," content."]})},a.value))]})]})},de={name:"Unmount Inactive Panels",parameters:{controls:{disable:!0}},render:t=>e.jsxs(T,{...t,defaultValue:"first",unmountInactive:!0,children:[e.jsx(l,{value:"first",children:"First"}),e.jsx(l,{value:"second",children:"Second"}),e.jsx(i,{value:"first",children:e.jsx(b,{py:"16",children:"Only this panel exists in the DOM while it is selected."})}),e.jsx(i,{value:"second",children:e.jsx(b,{py:"16",children:"Switching tabs unmounts the other panel and discards its state."})})]})},vn=()=>{const[t,a]=o.useState(!0),[n,r]=o.useState("none yet");return e.jsxs(x,{children:[e.jsx(x,{pb:"12",children:e.jsx(X,{variant:"hollow",size:"sm",onClick:()=>a(c=>!c),children:t?"Remove Schedule tab":"Add Schedule tab"})}),e.jsxs(T,{"aria-label":"Work order sections",defaultValue:"work",onChange:(c,d,p)=>r(`${d} (${p})`),children:[e.jsx(l,{value:"work",children:"Work"}),e.jsx(l,{value:"info",children:"Info"}),e.jsx(l,{value:"materials",badge:3,badgeTooltip:"2 Open Part Request, 1 Short Part(s)",children:"Materials"}),e.jsx(l,{value:"status",badge:5,badgeTooltip:"5 Operations Behind",children:"Status"}),t?e.jsx(l,{value:"schedule",children:"Schedule"}):null,e.jsx(l,{value:"documents",children:"Documents"}),e.jsx(l,{value:"history",children:"History"}),e.jsx(i,{value:"work",children:e.jsx(b,{py:"16",children:"Work instructions and operations."})}),e.jsx(i,{value:"info",children:e.jsx(b,{py:"16",children:"Order header and customer details."})}),e.jsx(i,{value:"materials",children:e.jsx(b,{py:"16",children:"Bill of materials and part requests."})}),e.jsx(i,{value:"status",children:e.jsx(b,{py:"16",children:"Operation status roll-up."})}),e.jsx(i,{value:"schedule",children:({isActive:c})=>e.jsxs(b,{py:"16",children:["Schedule board. Live refresh is ",c?"running":"paused",". Select this tab, remove it with the button above, and the strip falls back to the first remaining tab."]})}),e.jsx(i,{value:"documents",children:e.jsx(b,{py:"16",children:"Attached drawings and travelers."})}),e.jsx(i,{value:"history",children:e.jsx(b,{py:"16",children:"Audit trail."})})]}),e.jsxs(b,{pt:"16",color:"text.subtlest",children:["Last change: ",n]})]})},ue={name:"Ex: Work View",parameters:{controls:{disable:!0}},render:()=>e.jsx(vn,{})},hn=()=>{const[t,a]=o.useState(!0),[n,r]=o.useState("schedule");return e.jsxs(x,{children:[e.jsx(X,{variant:"hollow",size:"sm",onClick:()=>a(c=>!c),children:t?"Remove Schedule tab":"Add Schedule tab"}),e.jsxs(b,{py:"8","data-testid":"controlled-value",children:["Parent value: ",n]}),e.jsxs(T,{"aria-label":"Controlled sections",value:n,onChange:(c,d)=>r(d),children:[e.jsx(l,{value:"work",children:"Work"}),t?e.jsx(l,{value:"schedule",children:"Schedule"}):null,e.jsx(l,{value:"history",children:"History"}),e.jsx(i,{value:"work",children:"Work content."}),e.jsx(i,{value:"schedule",children:"Schedule content."}),e.jsx(i,{value:"history",children:"History content."})]})]})},be={name:"Test: controlled value follows a removed tab",parameters:{controls:{disable:!0}},render:()=>e.jsx(hn,{}),play:async({canvasElement:t})=>{const a=B(t);await s(a.getByRole("tab",{name:"Schedule"})).toHaveAttribute("aria-selected","true"),await y.click(a.getByRole("button",{name:"Remove Schedule tab"})),await O(async()=>{await s(a.getByTestId("controlled-value")).toHaveTextContent("Parent value: work"),await s(a.getByRole("tab",{name:"Work"})).toHaveAttribute("aria-selected","true")})}},mn=()=>{const[t,a]=o.useState(!0);return e.jsxs(x,{children:[e.jsx(X,{variant:"hollow",size:"sm",onClick:()=>a(n=>!n),children:t?"Remove Schedule tab":"Add Schedule tab"}),e.jsxs(T,{"aria-label":"Uncontrolled sections",defaultValue:"schedule",children:[e.jsx(l,{value:"work",children:"Work"}),t?e.jsx(l,{value:"schedule",children:"Schedule"}):null,e.jsx(l,{value:"history",children:"History"}),e.jsx(i,{value:"work",children:"Work content."}),e.jsx(i,{value:"schedule",children:"Schedule content."}),e.jsx(i,{value:"history",children:"History content."})]})]})},pe={name:"Test: removed uncontrolled value does not return",parameters:{controls:{disable:!0}},render:()=>e.jsx(mn,{}),play:async({canvasElement:t})=>{const a=B(t);await y.click(a.getByRole("button",{name:"Remove Schedule tab"})),await s(a.getByRole("tab",{name:"Work"})).toHaveAttribute("aria-selected","true"),await y.click(a.getByRole("button",{name:"Add Schedule tab"})),await s(a.getByRole("tab",{name:"Work"})).toHaveAttribute("aria-selected","true"),await s(a.getByRole("tab",{name:"Schedule"})).toHaveAttribute("aria-selected","false")}},ve={name:"Test: overflow keeps badge details and selection semantics",parameters:{controls:{disable:!0}},render:t=>e.jsx(x,{"data-overflow-metadata-wrapper":!0,children:e.jsxs(T,{...t,defaultValue:"work",children:[e.jsx(l,{value:"work",children:"Work"}),e.jsx(l,{value:"materials",badge:3,badgeTooltip:"2 Open Part Requests, 1 Short Part",children:"Materials"}),e.jsx(l,{value:"documents",children:"Documents"}),e.jsx(l,{value:"history",children:"History"}),e.jsx(i,{value:"work",children:"Work content."}),e.jsx(i,{value:"materials",children:"Materials content."}),e.jsx(i,{value:"documents",children:"Documents content."}),e.jsx(i,{value:"history",children:"History content."})]})}),play:async({canvasElement:t})=>{const a=B(t),n=B(t.ownerDocument.body),r=t.querySelector("[data-overflow-metadata-wrapper]");if(!r)throw new Error("overflow metadata wrapper not found");r.style.width="180px";const c=await a.findByRole("button",{name:"More tabs"});await y.click(c);const d=await n.findByRole("menuitemradio",{name:/Materials \(3\)/});await s(d).toHaveAttribute("aria-checked","false"),await s(d).toHaveTextContent("2 Open Part Requests, 1 Short Part")}},wn=()=>{const[t,a]=o.useState(0),[n,r]=o.useState("none");return e.jsxs(x,{children:[e.jsxs(b,{pb:"8","data-testid":"consumer-events",children:["Clicks: ",t,"; last key: ",n]}),e.jsxs(T,{"aria-label":"Handler composition",defaultValue:"first",children:[e.jsx(l,{value:"first",onClick:()=>a(c=>c+1),children:"First"}),e.jsx(l,{value:"second",onKeyDown:c=>r(c.key),children:"Second"}),e.jsx(i,{value:"first",children:"First content."}),e.jsx(i,{value:"second",children:"Second content."})]})]})},he={name:"Test: consumer handlers preserve tab interactions",parameters:{controls:{disable:!0}},render:()=>e.jsx(wn,{}),play:async({canvasElement:t})=>{const a=B(t),n=a.getByRole("tab",{name:"First"}),r=a.getByRole("tab",{name:"Second"}),c=a.getByTestId("consumer-events");await y.click(r),await s(r).toHaveAttribute("aria-selected","true"),await y.keyboard("{ArrowLeft}"),await s(n).toHaveAttribute("aria-selected","true"),await s(c).toHaveTextContent("last key: ArrowLeft"),await y.click(n),await s(c).toHaveTextContent("Clicks: 1")}},me={name:"Test: disabled first tab is not the default",parameters:{controls:{disable:!0}},render:t=>e.jsxs(x,{children:[e.jsx(b,{pb:"12",color:"text.subtlest",children:"No `defaultValue` is given and the first tab is disabled. The strip selects the first enabled tab so the keyboard can still enter it."}),e.jsxs(T,{...t,children:[e.jsx(l,{value:"archived",disabled:!0,children:"Archived"}),e.jsx(l,{value:"open",children:"Open"}),e.jsx(l,{value:"closed",children:"Closed"}),e.jsx(i,{value:"archived",children:e.jsx(b,{py:"16",children:"Archived content."})}),e.jsx(i,{value:"open",children:e.jsx(b,{py:"16",children:"Open content."})}),e.jsx(i,{value:"closed",children:e.jsx(b,{py:"16",children:"Closed content."})})]})]}),play:async({canvasElement:t})=>{const a=B(t),n=a.getByRole("tab",{name:"Open"});await s(n).toHaveAttribute("aria-selected","true"),await s(n).toHaveAttribute("tabindex","0"),await s(a.getByRole("tab",{name:"Archived"})).toHaveAttribute("aria-selected","false"),await y.tab(),await s(n).toHaveFocus()}},we={name:"Test: badge does not change tab height",parameters:{controls:{disable:!0}},render:t=>e.jsxs(x,{display:"flex",flexDirection:"column",gap:"16",children:[e.jsx(b,{color:"text.subtlest",children:"Both strips are 40px tall. The 20px badge sits inside the 22px line box and never grows the tab. Matches Figma `_TabsTab`."}),e.jsxs(T,{...t,"aria-label":"Without badges",defaultValue:"work",children:[e.jsx(l,{value:"work",children:"Work"}),e.jsx(l,{value:"materials",children:"Materials"})]}),e.jsxs(T,{...t,"aria-label":"With badges",defaultValue:"work",children:[e.jsx(l,{value:"work",badge:3,children:"Work"}),e.jsx(l,{value:"materials",badge:12,badgeTooltip:"12 Short Part(s)",children:"Materials"})]})]}),play:async({canvasElement:t})=>{const a=B(t),[n,r]=a.getAllByRole("tablist");await s(r==null?void 0:r.offsetHeight).toBe(n==null?void 0:n.offsetHeight);for(const c of a.getAllByRole("tab"))await s(c.offsetHeight).toBe(40)}},fe=["Work","Info","Materials","Status"],ye={name:"Test: toggle space is reserved only once tabs overflow",parameters:{controls:{disable:!0}},render:t=>e.jsxs(x,{children:[e.jsx(b,{pb:"12",color:"text.subtlest",children:"The wrapper is sized just above the strip width. Every tab fits, so no toggle renders. Shrinking it below the strip makes the measured toggle appear."}),e.jsx(x,{"data-fit-wrapper":!0,borderWidth:"1",borderStyle:"dashed",borderColor:"border",children:e.jsxs(T,{...t,defaultValue:"work",children:[fe.map(a=>e.jsx(l,{value:a.toLowerCase(),children:a},a)),fe.map(a=>e.jsx(i,{value:a.toLowerCase(),children:e.jsxs(b,{py:"16",children:[a," content."]})},a))]})})]}),play:async({canvasElement:t})=>{const a=B(t),n=t.querySelector("[data-fit-wrapper]"),r=a.getByRole("tablist"),c=a.getAllByRole("tab");if(!n)throw new Error("wrapper not found");const d=Number.parseFloat(getComputedStyle(r).columnGap)||0,p=c.reduce((g,k)=>g+k.getBoundingClientRect().width,0)+d*(c.length-1);n.style.width=`${String(Math.ceil(p)+16)}px`,await O(async()=>{await s(a.getAllByRole("tab")).toHaveLength(fe.length),await s(a.queryByRole("button",{name:"More tabs"})).not.toBeInTheDocument()}),n.style.width=`${String(Math.floor(p)-8)}px`,await O(async()=>{await s(a.getByRole("button",{name:"More tabs"})).toBeInTheDocument(),await s(a.getAllByRole("tab").length).toBeLessThan(fe.length)})}},ge={name:"Test: tabs grouped in fragments join the strip",parameters:{controls:{disable:!0}},render:t=>e.jsxs(T,{...t,"aria-label":"Fragment children",defaultValue:"work",children:[e.jsxs(e.Fragment,{children:[e.jsx(l,{value:"work",children:"Work"}),e.jsx(e.Fragment,{children:e.jsx(l,{value:"materials",children:"Materials"})})]}),e.jsxs(e.Fragment,{children:[e.jsx(i,{value:"work",children:"Work content."}),e.jsx(i,{value:"materials",children:"Materials content."})]})]}),play:async({canvasElement:t})=>{const a=B(t),n=a.getByRole("tablist"),r=a.getByRole("tab",{name:"Materials"});await s(B(n).getAllByRole("tab")).toHaveLength(2),await y.click(r),await s(r).toHaveAttribute("aria-selected","true"),await s(a.getByText("Materials content.")).toBeVisible()}},fn=()=>{const t=o.useRef(null),[a,n]=o.useState("none");return e.jsxs(x,{children:[e.jsx(X,{variant:"standard",mb:"8",onClick:()=>{var r;return n(((r=t.current)==null?void 0:r.tagName)??"none")},children:"Read ref"}),e.jsxs(b,{pb:"8","data-testid":"consumer-ref",children:["Ref: ",a]}),e.jsxs(T,{"aria-label":"Consumer ref",defaultValue:"first",children:[e.jsx(l,{value:"first",children:"First"}),e.jsx(l,{value:"second",ref:t,children:"Second"}),e.jsx(i,{value:"first",children:"First content."}),e.jsx(i,{value:"second",children:"Second content."})]})]})},xe={name:"Test: consumer ref keeps tab registration",parameters:{controls:{disable:!0}},render:()=>e.jsx(fn,{}),play:async({canvasElement:t})=>{const a=B(t),n=a.getByRole("tab",{name:"First"}),r=a.getByRole("tab",{name:"Second"});await y.click(a.getByRole("button",{name:"Read ref"})),await s(a.getByTestId("consumer-ref")).toHaveTextContent("Ref: BUTTON"),await y.click(n),await y.keyboard("{ArrowRight}"),await s(r).toHaveAttribute("aria-selected","true"),await s(r).toHaveFocus()}},Te={name:"Test: badge tooltip opens on tab keyboard focus",parameters:{controls:{disable:!0}},render:t=>e.jsxs(T,{...t,"aria-label":"Badge tooltip",defaultValue:"materials",children:[e.jsx(l,{value:"materials",badge:3,badgeTooltip:"2 Open Part Requests",children:"Materials"}),e.jsx(l,{value:"status",children:"Status"}),e.jsx(i,{value:"materials",children:"Materials content."}),e.jsx(i,{value:"status",children:"Status content."})]}),play:async({canvasElement:t})=>{const a=B(t),n=B(t.ownerDocument.body),r=a.getByRole("tab",{name:/Materials/});await y.tab(),await s(r).toHaveFocus();const c=await n.findByRole("tooltip");await s(c).toHaveTextContent("2 Open Part Requests"),await s(r).toHaveAttribute("aria-describedby",c.id)}},De=()=>{const[t,a]=o.useState("alpha"),[n,r]=o.useState([]);return e.jsxs(x,{children:[e.jsxs(b,{pb:"8","data-testid":"deferred-value",children:["Parent value: ",t]}),e.jsxs(b,{pb:"8","data-testid":"deferred-requests",children:["Requests: ",n.join(", ")]}),e.jsx(x,{"data-deferred-wrapper":!0,children:e.jsxs(T,{"aria-label":"Deferred selection",value:t,onChange:(c,d)=>{r(p=>[...p,d]),globalThis.setTimeout(()=>a(d),300)},children:[e.jsx(l,{value:"alpha",children:"Alpha section"}),e.jsx(l,{value:"bravo",children:"Bravo section"}),e.jsx(l,{value:"charlie",children:"Charlie section"}),e.jsx(i,{value:"alpha",children:"Alpha content."}),e.jsx(i,{value:"bravo",children:"Bravo content."}),e.jsx(i,{value:"charlie",children:"Charlie content."})]})})]})},ke={name:"Test: deferred controlled selection keeps the focused tab visible",parameters:{controls:{disable:!0}},render:()=>e.jsx(De,{}),play:async({canvasElement:t})=>{const a=B(t),n=t.querySelector("[data-deferred-wrapper]");if(!n)throw new Error("deferred wrapper not found");const r=a.getByRole("tab",{name:"Alpha section"});n.style.width=`${String(Math.ceil(r.getBoundingClientRect().width)+48)}px`,await O(async()=>{await s(a.getAllByRole("tab")).toHaveLength(1)}),await y.click(r),await y.keyboard("{ArrowRight}");const c=await a.findByRole("tab",{name:"Bravo section"});await s(c).toHaveFocus(),await s(a.getByTestId("deferred-value")).toHaveTextContent("Parent value: alpha"),await O(async()=>{await s(a.getByTestId("deferred-value")).toHaveTextContent("Parent value: bravo")}),await s(c).toHaveAttribute("aria-selected","true"),await s(c).toHaveFocus(),n.style.width="",await O(async()=>{await s(a.getAllByRole("tab")).toHaveLength(3)}),await y.keyboard("{ArrowLeft}"),await O(async()=>{await s(a.getByTestId("deferred-value")).toHaveTextContent("Parent value: alpha")}),await y.keyboard("{ArrowRight}{ArrowRight}");const d=a.getByRole("tab",{name:"Charlie section"});await s(d).toHaveFocus(),await O(async()=>{await s(a.getByTestId("deferred-value")).toHaveTextContent("Parent value: charlie")}),await y.keyboard("{ArrowLeft}{ArrowLeft}"),await s(a.getByRole("tab",{name:"Alpha section"})).toHaveFocus(),await O(async()=>{await s(a.getByTestId("deferred-value")).toHaveTextContent("Parent value: alpha")})}},Be={name:"Test: a deferred return to the committed tab still reaches the parent",parameters:{controls:{disable:!0}},render:()=>e.jsx(De,{}),play:async({canvasElement:t})=>{const a=B(t),n=a.getByRole("tab",{name:"Alpha section"});await y.click(n),await y.keyboard("{ArrowRight}{ArrowLeft}"),await s(n).toHaveFocus(),await s(a.getByTestId("deferred-requests")).toHaveTextContent("Requests: bravo, alpha"),await new Promise(r=>globalThis.setTimeout(r,500)),await s(a.getByTestId("deferred-value")).toHaveTextContent("Parent value: alpha"),await s(n).toHaveAttribute("aria-selected","true"),await s(n).toHaveFocus()}},Re={name:"Test: rapid keys in a narrow deferred strip keep focus through intermediate commits",parameters:{controls:{disable:!0}},render:()=>e.jsx(De,{}),play:async({canvasElement:t})=>{const a=B(t),n=t.querySelector("[data-deferred-wrapper]");if(!n)throw new Error("deferred wrapper not found");const r=a.getByTestId("deferred-value"),c=async k=>{await O(async()=>{await s(r).toHaveTextContent(`Parent value: ${k}`)}),await new Promise(w=>globalThis.setTimeout(w,100))},d=a.getByRole("tab",{name:"Alpha section"});n.style.width=`${String(Math.ceil(d.getBoundingClientRect().width)+48)}px`,await O(async()=>{await s(a.getAllByRole("tab")).toHaveLength(1)}),await y.click(d),await y.keyboard("{ArrowRight}{ArrowRight}");const p=await a.findByRole("tab",{name:"Charlie section"});await s(p).toHaveFocus(),await O(async()=>{await s(r).toHaveTextContent("Parent value: bravo")}),await s(p).toBeVisible(),await s(p).toHaveFocus(),await c("charlie"),await s(p).toHaveAttribute("aria-selected","true"),await s(p).toHaveFocus(),await y.keyboard("{ArrowLeft}{ArrowLeft}"),await c("alpha");const g=a.getByRole("tab",{name:"Alpha section"});await s(g).toHaveAttribute("aria-selected","true"),await s(g).toHaveFocus(),await y.keyboard("{ArrowRight}{ArrowLeft}"),await c("alpha"),await s(a.getByTestId("deferred-requests")).toHaveTextContent(/bravo, alpha$/),await s(a.getByRole("tab",{name:"Alpha section"})).toHaveFocus()}},yn=()=>{const[t,a]=o.useState("missing");return e.jsxs(x,{children:[e.jsxs(b,{pb:"8","data-testid":"empty-fallback-value",children:['Parent value: "',t,'"']}),e.jsxs(T,{"aria-label":"Empty fallback",value:t,onChange:(n,r)=>a(r),children:[e.jsx(l,{value:"",children:"Overview"}),e.jsx(l,{value:"details",children:"Details"}),e.jsx(i,{value:"",children:"Overview content."}),e.jsx(i,{value:"details",children:"Details content."})]}),e.jsx(x,{"data-empty-wrapper":!0,pt:"16",children:e.jsxs(T,{"aria-label":"Empty selected",defaultValue:"",children:[e.jsx(l,{value:"work",children:"Work section"}),e.jsx(l,{value:"materials",children:"Materials section"}),e.jsx(l,{value:"",children:"Summary section"}),e.jsx(i,{value:"work",children:"Work content."}),e.jsx(i,{value:"materials",children:"Materials content."}),e.jsx(i,{value:"",children:"Summary content."})]})})]})},je={name:"Test: an empty-string tab value is a real selection",parameters:{controls:{disable:!0}},render:()=>e.jsx(yn,{}),play:async({canvasElement:t})=>{const a=B(t);await O(async()=>{await s(a.getByTestId("empty-fallback-value")).toHaveTextContent('Parent value: ""')}),await s(a.getByRole("tab",{name:"Overview"})).toHaveAttribute("aria-selected","true");const n=t.querySelector("[data-empty-wrapper]");if(!n)throw new Error("empty wrapper not found");const r=a.getByRole("tab",{name:"Summary section"});n.style.width=`${String(Math.ceil(r.getBoundingClientRect().width)+48)}px`;const c=a.getByRole("tablist",{name:"Empty selected"});await O(async()=>{await s(B(c).getAllByRole("tab")).toHaveLength(1)});const d=B(c).getByRole("tab",{name:"Summary section"});await s(d).toHaveAttribute("aria-selected","true"),await s(d).toHaveAttribute("tabindex","0")}},Se={name:"Test: with no enabled tabs, an empty-string tab is not selected",parameters:{controls:{disable:!0}},render:t=>e.jsxs(T,{...t,"aria-label":"No enabled tabs",children:[e.jsx(l,{value:"",disabled:!0,children:"Overview"}),e.jsx(l,{value:"details",disabled:!0,children:"Details"}),e.jsx(i,{value:"",children:e.jsx(b,{py:"16",children:"Overview content."})}),e.jsx(i,{value:"details",children:e.jsx(b,{py:"16",children:"Details content."})})]}),play:async({canvasElement:t})=>{const a=B(t);for(const n of a.getAllByRole("tab"))await s(n).toHaveAttribute("aria-selected","false");await s(a.getByText("Overview content.")).not.toBeVisible(),await s(a.getByText("Details content.")).not.toBeVisible()}},Ae={name:"Test: a responsive panel display never reveals an inactive panel",parameters:{controls:{disable:!0}},render:t=>e.jsxs(T,{...t,"aria-label":"Responsive panels",defaultValue:"work",children:[e.jsx(l,{value:"work",children:"Work"}),e.jsx(l,{value:"materials",children:"Materials"}),e.jsxs(i,{value:"work",display:{xs:"flex"},gap:"8",py:"16",children:[e.jsx(b,{children:"Work content."}),e.jsx(X,{children:"Start work"})]}),e.jsxs(i,{value:"materials",display:{xs:"flex"},gap:"8",py:"16",children:[e.jsx(b,{children:"Materials content."}),e.jsx(X,{children:"Issue materials"})]})]}),play:async({canvasElement:t})=>{const a=B(t);await s(a.getByText("Work content.")).toBeVisible(),await s(a.getByText("Materials content.")).not.toBeVisible(),await s(a.queryByRole("button",{name:"Issue materials"})).toBeNull(),await y.click(a.getByRole("tab",{name:"Materials"})),await s(a.getByText("Materials content.")).toBeVisible(),await s(a.getByText("Work content.")).not.toBeVisible()}},He={name:"Test: tab values with spaces still link tab and panel",parameters:{controls:{disable:!0}},render:t=>e.jsxs(T,{...t,"aria-label":"Order sections",defaultValue:"work orders",children:[e.jsx(l,{value:"work orders",children:"Work orders"}),e.jsx(l,{value:"sales orders",children:"Sales orders"}),e.jsx(i,{value:"work orders",children:e.jsx(b,{py:"16",children:"Open work orders."})}),e.jsx(i,{value:"sales orders",children:e.jsx(b,{py:"16",children:"Open sales orders."})})]}),play:async({canvasElement:t})=>{const a=B(t),n=a.getByRole("tab",{name:"Work orders"}),r=a.getByRole("tabpanel",{name:"Work orders"});await s(r.id).not.toMatch(/\s/),await s(n.id).not.toMatch(/\s/),await s(n).toHaveAttribute("aria-controls",r.id),await s(r).toHaveAttribute("aria-labelledby",n.id)}},Ge=t=>({id:t}),Ce={name:"Test: a consumer id never breaks the tab and panel links",parameters:{controls:{disable:!0}},render:t=>e.jsxs(T,{...t,"aria-label":"Consumer ids",defaultValue:"work",children:[e.jsx(l,{value:"work",...Ge("work-tab"),children:"Work"}),e.jsx(l,{value:"materials",children:"Materials"}),e.jsx(i,{value:"work",...Ge("work-panel"),children:e.jsx(b,{py:"16",children:"Work content."})}),e.jsx(i,{value:"materials",children:e.jsx(b,{py:"16",children:"Materials content."})})]}),play:async({canvasElement:t})=>{const a=B(t),n=a.getByRole("tab",{name:"Work"}),r=a.getByRole("tabpanel",{name:"Work"});await s(n.id).not.toBe("work-tab"),await s(r.id).not.toBe("work-panel"),await s(n).toHaveAttribute("aria-controls",r.id),await s(r).toHaveAttribute("aria-labelledby",n.id)}},Ee={name:"Test: choosing a hidden tab from the menu focuses that tab",parameters:{controls:{disable:!0}},render:t=>e.jsx(x,{"data-overflow-focus-wrapper":!0,children:e.jsxs(T,{...t,"aria-label":"Overflow focus",defaultValue:"work",children:[e.jsx(l,{value:"work",children:"Work"}),e.jsx(l,{value:"materials",children:"Materials"}),e.jsx(l,{value:"documents",children:"Documents"}),e.jsx(l,{value:"history",children:"History"}),e.jsx(i,{value:"work",children:"Work content."}),e.jsx(i,{value:"materials",children:"Materials content."}),e.jsx(i,{value:"documents",children:"Documents content."}),e.jsx(i,{value:"history",children:"History content."})]})}),play:async({canvasElement:t})=>{const a=B(t),n=B(t.ownerDocument.body),r=t.querySelector("[data-overflow-focus-wrapper]");if(!r)throw new Error("overflow focus wrapper not found");r.style.width="180px",await O(async()=>{await s(a.queryByRole("tab",{name:"History"})).toBeNull()});const c=await a.findByRole("button",{name:"More tabs"});await y.click(c),await y.click(await n.findByRole("menuitemradio",{name:"History"}));const d=await a.findByRole("tab",{name:"History"});await s(d).toHaveAttribute("aria-selected","true"),await new Promise(p=>globalThis.requestAnimationFrame(p)),await s(d).toHaveFocus()}},gn=()=>{const[t,a]=o.useState("alpha"),[n,r]=o.useState([]);return e.jsxs(x,{children:[e.jsx(X,{variant:"hollow",size:"sm",onClick:()=>a("bravo"),children:"Select Bravo from outside"}),e.jsxs(b,{py:"8","data-testid":"external-requests",children:["Requests: ",n.length>0?n.join(", "):"none"]}),e.jsxs(T,{"aria-label":"External selection",value:t,onChange:(c,d)=>{r(p=>[...p,d]),a(d)},children:[e.jsx(l,{value:"alpha",children:"Alpha section"}),e.jsx(l,{value:"bravo",children:"Bravo section"}),e.jsx(i,{value:"alpha",children:"Alpha content."}),e.jsx(i,{value:"bravo",children:"Bravo content."})]})]})},Pe={name:"Test: clicking a tab the parent already selected sends no change",parameters:{controls:{disable:!0}},render:()=>e.jsx(gn,{}),play:async({canvasElement:t})=>{const a=B(t),n=a.getByTestId("external-requests");await y.click(a.getByRole("button",{name:"Select Bravo from outside"}));const r=a.getByRole("tab",{name:"Bravo section"});await s(r).toHaveAttribute("aria-selected","true"),await y.click(r),await s(n).toHaveTextContent("Requests: none"),await y.click(a.getByRole("tab",{name:"Alpha section"})),await s(n).toHaveTextContent("Requests: alpha")}},Wn=["Default","WithBadges","Overflow","LabelOverride","UnmountInactive","ExWorkView","ControlledFallback","UncontrolledFallback","OverflowMetadata","ComposedTabHandlers","DisabledFirstTab","BadgeKeepsHeight","ToggleReserveOnlyOnOverflow","FragmentChildren","ConsumerRef","BadgeTooltipOnFocus","DeferredControlledOverflow","DeferredControlledReversal","DeferredControlledNarrowStrip","EmptyStringValue","NoEnabledTabs","ResponsivePanelDisplay","ValuesWithSpaces","ConsumerIdsIgnored","OverflowMenuFocus","ExternalValueChange"];var Ye,Qe,Je;oe.parameters={...oe.parameters,docs:{...(Ye=oe.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
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
}`,...(ft=(wt=Pe.parameters)==null?void 0:wt.docs)==null?void 0:ft.source}}};export{we as BadgeKeepsHeight,Te as BadgeTooltipOnFocus,he as ComposedTabHandlers,Ce as ConsumerIdsIgnored,xe as ConsumerRef,be as ControlledFallback,oe as Default,Re as DeferredControlledNarrowStrip,ke as DeferredControlledOverflow,Be as DeferredControlledReversal,me as DisabledFirstTab,je as EmptyStringValue,ue as ExWorkView,Pe as ExternalValueChange,ge as FragmentChildren,ce as LabelOverride,Se as NoEnabledTabs,ie as Overflow,Ee as OverflowMenuFocus,ve as OverflowMetadata,Ae as ResponsivePanelDisplay,ye as ToggleReserveOnlyOnOverflow,pe as UncontrolledFallback,de as UnmountInactive,He as ValuesWithSpaces,le as WithBadges,Wn as __namedExportsOrder,In as default};
