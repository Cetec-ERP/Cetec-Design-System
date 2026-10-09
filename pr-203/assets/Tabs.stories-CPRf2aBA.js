import{m as kt,e as jt,f as Bt,g as Rt,h as St,r as o,s as Ie,Y as Ht,Z as Pt,at as Et,af as At,ah as Ct,a1 as Mt,a2 as Ot,a5 as Vt,ac as It,j as e,B as y,c as We,a6 as Wt,a7 as Ft,au as qt,d as pt,av as Lt,aa as Dt,T as p,a as Nt}from"./iframe-nhb4G3Qu.js";import{B as X}from"./Button-DIM324kO.js";import{g as _t,s as vt,M as zt,a as $t}from"./SubMenu-xFEBhtzz.js";import{B as Kt}from"./Badge-BCYtj30K.js";import{I as ht}from"./IconButton-Dc_3-8-7.js";import{u as Ut}from"./useControllableState-ioltA7IG.js";import"./preload-helper-B1x5OZGs.js";import"./Spinner-zGm8CfFv.js";import"./FieldContext-URgsCieK.js";import"./HighlightText-B-el_Wxy.js";import"./menu-DaOv5Tsx.js";import"./FloatingLayerContext-CiVcAQu5.js";import"./ListItemGroup-BHqdtKzs.js";import"./Divider-CtjAvTER.js";import"./Checkbox-l9SnSueV.js";import"./Toggle-CRZROzRr.js";const mt={hasOverflow:!1},Gt=[],Yt=[["root","tabs__root"],["strip","tabs__strip"],["list","tabs__list"],["tab","tabs__tab"],["badge","tabs__badge"],["overflow","tabs__overflow"],["menu","tabs__menu"],["panel","tabs__panel"]],Qt=Yt.map(([t,a])=>[t,Rt(a,mt,St(Gt,t))]),Jt=kt((t={})=>Object.fromEntries(Qt.map(([a,n])=>[a,n.recipeFn(t)]))),De=["hasOverflow","overflowed"],Zt=t=>({...mt,...jt(t)}),wt=Object.assign(Jt,{__recipe__:!1,__name__:"tabs",raw:t=>t,classNameMap:{},variantKeys:De,variantMap:{hasOverflow:["false","true"],overflowed:["true"]},splitVariantProps(t){return Bt(t,De)},getVariantProps:Zt}),Xt=32,re=(t,a)=>t.length===a.length&&t.every((n,s)=>n===a[s]),en=(t,a,n)=>{for(const s of a)n.has(s)||t==null||t.unobserve(s);for(const s of n)a.has(s)||t==null||t.observe(s);return n},an=({items:t,containerRef:a,getItemElement:n,activeItem:s=null,reserve:c=Xt,reserveRef:d,enabled:h=!0})=>{const[T,j]=o.useState(()=>[...t]),[w,O]=o.useState([]),[S,V]=o.useState(null),R=o.useRef(null),E=o.useRef(t),I=o.useRef(s),L=o.useRef(S),D=o.useRef(null),_=o.useRef(c),H=o.useRef(null),W=o.useRef(h),z=o.useRef(null),P=o.useRef(new Set),A=o.useRef(null),$=o.useCallback(()=>{var qe;const u=a.current,m=E.current;if(!W.current||!u){j(f=>re(f,m)?f:[...m]),O(f=>f.length===0?f:[]);return}const F=globalThis.getComputedStyle(u),G=Number.parseFloat(F.paddingLeft||"0")+Number.parseFloat(F.paddingRight||"0"),b=Number.parseFloat(F.columnGap||"0")||0,v=u.clientWidth-G,B=m.map(f=>{var M;return((M=n(f))==null?void 0:M.offsetWidth)??Number.POSITIVE_INFINITY}),Y=L.current,C=I.current,J=Y??C,Q=J===null?-1:m.indexOf(J),ee=Q===-1?0:Q,se=[...new Set([Y,C].filter(f=>f!==null).map(f=>m.indexOf(f)).filter(f=>f!==-1))],Me=m.map((f,M)=>M).sort((f,M)=>{const K=Math.abs(f-ee)-Math.abs(M-ee);return K===0?f-M:K}),te=(f,M)=>{const K=new Set;let Oe=0;for(const ae of f)Oe+=(B[ae]??0)+(K.size>0?b:0),K.add(ae);for(const ae of Me){if(K.has(ae))continue;const Le=(B[ae]??0)+(K.size>0?b:0);if(Oe+Le>M)break;Oe+=Le,K.add(ae)}return K};let Z=te([],v);if(Z.size<m.length){const f=((qe=H.current)==null?void 0:qe.offsetWidth)??_.current,M=v-f;Z=te([],M),se.some(K=>!Z.has(K))&&(Z=te(se,M))}const ne=[],q=[];m.forEach((f,M)=>{Z.has(M)?ne.push(f):q.push(f)}),j(f=>re(f,ne)?f:ne),O(f=>re(f,q)?f:q)},[a,n]),U=o.useCallback((u,m)=>{if(E.current.includes(u)){if(!w.includes(u)){m==null||m();return}A.current={key:u,onVisible:m},D.current=I.current,V(u)}},[w]);return o.useLayoutEffect(()=>{const u=()=>{R.current!==null&&globalThis.cancelAnimationFrame(R.current),R.current=globalThis.requestAnimationFrame(()=>{R.current=null,$()})},m=typeof ResizeObserver>"u"?null:new ResizeObserver(u);return z.current=m,globalThis.addEventListener("resize",u),()=>{m==null||m.disconnect(),z.current=null,P.current.clear(),globalThis.removeEventListener("resize",u),R.current!==null&&(globalThis.cancelAnimationFrame(R.current),R.current=null)}},[$]),o.useLayoutEffect(()=>{re(E.current,t)||(E.current=[...t]),I.current=s,L.current=S,_.current=c,H.current=(d==null?void 0:d.current)??null,W.current=h;const u=new Set,m=a.current;if(h&&m){u.add(m),H.current&&u.add(H.current);for(const F of E.current){const G=n(F);G&&u.add(G)}}P.current=en(z.current,P.current,u),$()},[s,a,h,S,n,t,$,c,d]),o.useLayoutEffect(()=>{var m;const u=A.current;if(u){if(!E.current.includes(u.key)){A.current=null,V(null);return}w.includes(u.key)||(A.current=null,(m=u.onVisible)==null||m.call(u))}},[w]),o.useLayoutEffect(()=>{if(S===null)return;const u=!t.includes(S);if(!u&&s===D.current)return;const m=A.current;m&&(u||m.key!==s)&&(A.current=null),D.current=null,V(null)},[s,S,t]),{visible:T,overflow:w,hasOverflow:w.length>0,measure:$,ensureVisible:U}},ft=o.createContext(null),tn=o.createContext(!0),nn=ft.Provider,sn=tn.Provider,yt=()=>{const t=o.useContext(ft);if(!t)throw new Error("Tabs compound components must be used within <Tabs />");return t},Ce={tab:"Tab",panel:"TabPanel"},Fe="__tabsComponentType",gt=t=>_t(t,Fe),Tt=t=>{const a=[],n=(s,c)=>{o.Children.toArray(s).forEach(d=>{if(o.isValidElement(d)&&d.type===o.Fragment){n(d.props.children,`${c}${String(d.key)}/`);return}a.push(c!==""&&o.isValidElement(d)?o.cloneElement(d,{key:`${c}${String(d.key)}`}):d)})};return n(t,""),a},rn=wt({overflowed:!0}).tab,Ne=qt({size:"md",hasTitle:!1}),l=t=>{const{value:a,children:n,label:s,badge:c,badgeTooltip:d,disabled:h=!1,onClick:T,onKeyDown:j,ref:w,...O}=t,{classes:S,getPanelId:V,getTabId:R,onTabKeyDown:E,overflowValues:I,registerTabElement:L,selectTab:D,selectedValue:_}=yt(),H=_===a,W=I.includes(a),[z,P]=Ie(O),A=o.useCallback(q=>{L(a,q)},[L,a]),$=W?rn:S.tab,U=typeof c=="number"&&c!==0,u=U&&!!d&&!W,[m,F]=o.useState(!1),G=o.useRef(null),b=u&&m,{refs:v,elements:B,floatingStyles:Y,context:C}=Ht({open:b,onOpenChange:F,placement:"bottom",middleware:Pt({offset:8,extras:[Et({element:G})]})}),J=At(C,{enabled:u,move:!1}),Q=Ct(C,{enabled:u}),ee=Mt(C,{enabled:u}),se=Ot(C,{enabled:u,role:"tooltip"}),{getReferenceProps:Me,getFloatingProps:te}=Vt([J,Q,ee,se]),Z=It([A,v.setReference,w]),ne=U?e.jsx(y,{ref:v.setPositionReference,className:S.badge,children:e.jsx(Kt,{count:c,variant:"subtle"})}):null;return e.jsxs(e.Fragment,{children:[e.jsxs(y,{as:"button",type:"button",ref:Z,role:"tab","aria-selected":H,"aria-controls":V(a),"aria-hidden":W||void 0,disabled:h,tabIndex:H&&!W?0:-1,className:We($,z),...Me({...P,onClick:q=>{T==null||T(q),!(h||q.defaultPrevented)&&D(q,a,"clicked-on-tab")},onKeyDown:q=>{j==null||j(q),q.defaultPrevented||E(q)}}),id:R(a),children:[n,ne]}),b?e.jsx(Wt,{children:e.jsx(Ft,{reference:B.domReference,children:e.jsxs(y,{...pt("Tooltip"),ref:v.setFloating,style:Y,className:Ne.tooltipContent,...te(),children:[e.jsx(y,{className:Ne.text,children:d}),e.jsx(Lt,{ref:G,context:C,fill:Dt.var("colors.bg.neutral.inverse")})]})})}):null]})};vt(l,Fe,Ce.tab);l.__docgenInfo={description:'Selects one panel inside a {@link Tabs} strip.\n\nRenders a `button` with `role="tab"`. Only the selected tab is in the tab\norder; Arrow, Home, and End move between the others. A tab that does not fit\nthe strip stays mounted but hidden so it can still be measured, and it is\noffered in the overflow menu instead. The menu row is plain text, so give\n`label` when `children` are not plain text.\n\n`badgeTooltip` opens on hover and on keyboard focus of the tab itself, points\nat the badge, and is linked to the tab with `aria-describedby` while open.\n\n@example\n```tsx\n<Tab value="materials" badge={3} badgeTooltip="2 Open Part Request">\n  Materials\n</Tab>\n```',methods:[],displayName:"Tab",props:{value:{required:!0,tsType:{name:"string"},description:"Identifies the tab and the `TabPanel` it controls. Must be unique within a `Tabs`."},children:{required:!1,tsType:{name:"ReactNode"},description:"Visible label rendered in the strip. Plain text is also reused as the overflow-menu row's text unless `label` overrides it."},label:{required:!1,tsType:{name:"string"},description:"Plain-text name for this tab's overflow-menu row, which cannot render\nmarkup. Set it when `children` contain more than text — an icon, a nested\nelement — because flattening those to a string reads badly. It never\nchanges what the strip renders: `children` still render there as-is.\nWithout it the menu row falls back to the flattened `children`, then to\n`value`."},badge:{required:!1,tsType:{name:"number"},description:"Count shown in a trailing {@link Badge}. A zero or omitted count renders no badge."},badgeTooltip:{required:!1,tsType:{name:"string"},description:"Tooltip text describing what the badge counts. Requires `badge`."},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents selection and skips the tab during arrow-key navigation."}}};const i=t=>{const{value:a,children:n,...s}=t,{classes:c,getPanelId:d,getTabId:h,selectedValue:T,unmountInactive:j}=yt(),w=T===a,[O,S]=Ie(s);if(j&&!w)return null;const R=typeof n=="function"?n({isActive:w}):n;return e.jsx(sn,{value:w,children:e.jsx(y,{role:"tabpanel","aria-labelledby":h(a),tabIndex:w?0:-1,display:w?"block":"none",_hidden:{display:"none"},className:We(c.panel,O),...S,id:d(a),hidden:!w,children:R})})};vt(i,Fe,Ce.panel);i.__docgenInfo={description:'Renders the content for one {@link Tab}.\n\nThe panel stays mounted when another tab is selected and is hidden with\n`display: none`, which preserves scroll position and local state; set\n`unmountInactive` on `Tabs` to render only the selected panel instead. A\nfunction child receives `{ isActive }`, and descendants can call\n`useTabPanelActive()` for the same signal, so hidden panels can pause polling\nor animation.\n\n@example\n```tsx\n<TabPanel value="materials">\n  {({ isActive }) => <MaterialsGrid paused={!isActive} />}\n</TabPanel>\n```',methods:[],displayName:"TabPanel",props:{value:{required:!0,tsType:{name:"string"},description:"`value` of the {@link Tab} this panel belongs to."},children:{required:!1,tsType:{name:"union",raw:"ReactNode | ((props: TabPanelRenderProps) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:"Panel content. A function child receives `{ isActive }` so expensive work\ncan pause while the panel is mounted but hidden."}}};const Ve=t=>t==null||typeof t=="boolean"?"":typeof t=="string"||typeof t=="number"?String(t):Array.isArray(t)?t.map(a=>Ve(a)).join(""):o.isValidElement(t)?Ve(t.props.children):"",on=({children:t,value:a,defaultValue:n,onChange:s,listRef:c,overflowRef:d})=>{var G;const h=o.useMemo(()=>{const b=[];return Tt(t).forEach(v=>{if(!o.isValidElement(v)||gt(v)!==Ce.tab)return;const B=v.props;typeof B.value=="string"&&b.push({value:B.value,label:B.label||Ve(B.children)||B.value,disabled:!!B.disabled,badge:B.badge,badgeTooltip:B.badgeTooltip})}),b},[t]),T=o.useMemo(()=>h.map(b=>b.value),[h]),j=(G=h.find(b=>!b.disabled))==null?void 0:G.value,[w,O,S]=Ut({value:a,defaultValue:n??j??""}),V=o.useRef(w),R=o.useRef([]),E=o.useCallback(b=>{V.current=b,R.current=[...R.current.filter(v=>v!==b),b]},[]);o.useEffect(()=>{const b=R.current,v=b.indexOf(w);if(v===-1){R.current=[],V.current=w;return}R.current=b.slice(v+1)},[w]);const I=h.find(b=>b.value===w),L=!!(I&&!I.disabled),D=L?w:j,_=o.useRef(null);o.useEffect(()=>{if(L){_.current=null;return}const b=JSON.stringify([w,j??null]);_.current!==b&&(_.current=b,S||O(j??""),j!==void 0&&(E(j),s==null||s(null,j,"fallback-after-removal")))},[j,S,L,s,E,O,w]);const H=o.useRef(new Map),W=o.useCallback((b,v)=>{v?H.current.set(b,v):H.current.delete(b)},[]),z=o.useCallback(b=>H.current.get(b)??null,[]),{ensureVisible:P,overflow:A,hasOverflow:$}=an({items:T,containerRef:c,getItemElement:z,activeItem:D??null,reserveRef:d}),U=o.useCallback((b,v,B)=>{v===w&&V.current===w||(E(v),O(v),s==null||s(b,v,B))},[s,E,O,w]),u=o.useCallback((b,v)=>{P(b,()=>{const B=()=>{var Y;return(Y=H.current.get(b))==null?void 0:Y.focus()};v!=null&&v.afterMenuClose?queueMicrotask(B):B()})},[P]),m=o.useCallback(b=>{const v=h.filter(Q=>!Q.disabled).map(Q=>Q.value);if(v.length===0)return;let B=D;for(const[Q,ee]of H.current)if(ee===b.currentTarget){B=Q;break}const Y=B===void 0?0:Math.max(0,v.indexOf(B));let C;switch(b.key){case"ArrowRight":C=(Y+1)%v.length;break;case"ArrowLeft":C=(Y-1+v.length)%v.length;break;case"Home":C=0;break;case"End":C=v.length-1;break;default:return}b.preventDefault();const J=v[C];J!==void 0&&(U(b,J,"clicked-on-tab"),u(J))},[u,U,D,h]),F=o.useMemo(()=>A.map(b=>h.find(v=>v.value===b)).filter(b=>!!b),[A,h]);return{hasOverflow:$,focusTab:u,onTabKeyDown:m,overflowTabs:F,overflowValues:A,registerTabElement:W,selectTab:U,selectedValue:D,tabs:h}},ln=({className:t,focusTab:a,tabs:n,selectTab:s,selectedValue:c})=>{const[d,h]=o.useState(!1);return e.jsx(zt,{open:d,onOpenChange:h,placement:"bottom-end",className:t,trigger:e.jsx(ht,{variant:"ghost",size:"md",iconName:d?"caret-up":"caret-down",altText:"More tabs","aria-haspopup":"menu"}),children:n.map(T=>{const j=typeof T.badge=="number"&&T.badge!==0;return e.jsx($t,{label:j?`${T.label} (${String(T.badge)})`:T.label,description:j?T.badgeTooltip:void 0,disabled:T.disabled,selected:T.value===c,role:"menuitemradio","aria-checked":T.value===c,onClick:w=>{s(w,T.value,"selected-from-overflow"),h(!1),a(T.value,{afterMenuClose:!0})}},T.value)})})},g=t=>{const{children:a,value:n,defaultValue:s,onChange:c,unmountInactive:d=!1,"aria-label":h,"aria-labelledby":T,...j}=t,[w,O]=Ie(j),S=o.useRef(null),V=o.useRef(null),R=o.useId(),{focusTab:E,hasOverflow:I,onTabKeyDown:L,overflowTabs:D,overflowValues:_,registerTabElement:H,selectTab:W,selectedValue:z}=on({children:a,value:n,defaultValue:s,onChange:c,listRef:S,overflowRef:V}),P=o.useMemo(()=>wt({hasOverflow:I}),[I]),[A,$]=o.useMemo(()=>{const u=[],m=[];return Tt(a).forEach(F=>{gt(F)===Ce.tab?u.push(F):m.push(F)}),[u,m]},[a]),U=o.useMemo(()=>({classes:P,getPanelId:u=>`${R}-panel-${encodeURIComponent(u)}`,getTabId:u=>`${R}-tab-${encodeURIComponent(u)}`,onTabKeyDown:L,overflowValues:_,registerTabElement:H,selectTab:W,selectedValue:z,unmountInactive:d}),[R,P,L,_,H,W,z,d]);return e.jsx(nn,{value:U,children:e.jsxs(y,{...pt("Tabs"),className:We(P.root,w),...O,children:[e.jsxs(y,{className:P.strip,children:[e.jsx(y,{ref:S,role:"tablist","aria-label":h,"aria-labelledby":T,"aria-orientation":"horizontal",className:P.list,children:A}),e.jsx(y,{ref:V,className:P.overflow,"aria-hidden":!I||void 0,children:I?e.jsx(ln,{className:P.menu,focusTab:E,tabs:D,selectTab:W,selectedValue:z}):e.jsx(ht,{variant:"ghost",size:"md",iconName:"caret-down",altText:"More tabs",disabled:!0,tabIndex:-1})})]}),$]})})};g.__docgenInfo={description:'Groups related content into a single view with one panel visible at a time.\n\nCompose it from `Tab` and `TabPanel` children; the first enabled `Tab` is\nselected by default. Selection is uncontrolled with `defaultValue` or\ncontrolled with `value` plus `onChange`. Tabs that do not fit the available width move into\nan overflow menu at the end of the strip, and the selected tab always stays\nvisible. Every panel stays mounted and hidden unless `unmountInactive` is\nset, so read `useTabPanelActive()` to pause work in a hidden panel.\n\nThe strip renders a `tablist` with roving tabindex and Arrow, Home, and End\nnavigation. Supply `aria-label` or `aria-labelledby` so it is announced.\n\n@example\n```tsx\n<Tabs defaultValue="work" aria-label="Order sections">\n  <Tab value="work">Work</Tab>\n  <Tab value="materials" badge={3}>Materials</Tab>\n  <TabPanel value="work">Work content</TabPanel>\n  <TabPanel value="materials">Materials content</TabPanel>\n</Tabs>\n```',methods:[],displayName:"Tabs",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"`Tab` and `TabPanel` children. Tab order in the strip follows source order."},value:{required:!1,tsType:{name:"string"},description:"Controlled selected tab `value`. Pair with `onChange`; omit it to use `defaultValue`."},defaultValue:{required:!1,tsType:{name:"string"},description:"Initially selected tab `value` when `value` is not provided. It is used\nonly on first render.\n@default the first `Tab` child's `value`"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  event: TabsChangeEvent,
  value: string,
  reason: TabsChangeReason,
) => void`,signature:{arguments:[{type:{name:"union",raw:`| ReactMouseEvent<HTMLElement>
| ReactKeyboardEvent<HTMLElement>
| null`,elements:[{name:"ReactMouseEvent",elements:[{name:"HTMLElement"}],raw:"ReactMouseEvent<HTMLElement>"},{name:"ReactKeyboardEvent",elements:[{name:"HTMLElement"}],raw:"ReactKeyboardEvent<HTMLElement>"},{name:"null"}]},name:"event"},{type:{name:"string"},name:"value"},{type:{name:"union",raw:`| 'clicked-on-tab'
| 'selected-from-overflow'
| 'fallback-after-removal'`,elements:[{name:"literal",value:"'clicked-on-tab'"},{name:"literal",value:"'selected-from-overflow'"},{name:"literal",value:"'fallback-after-removal'"}]},name:"reason"}],return:{name:"void"}}},description:"Runs when user interaction selects a different tab."},unmountInactive:{required:!1,tsType:{name:"boolean"},description:"Renders only the selected `TabPanel`. By default every panel stays mounted\nand inactive panels are hidden with `display: none`, which preserves their\nscroll position and local state.\n@default false"},"aria-label":{required:!1,tsType:{name:"string"},description:"Accessible name for the tab strip. Provide this or `aria-labelledby` so the\n`tablist` is announced."},"aria-labelledby":{required:!1,tsType:{name:"string"},description:"Id of an element that labels the tab strip."}}};const{expect:r,userEvent:x,waitFor:N,within:k}=__STORYBOOK_MODULE_TEST__,Cn={title:"Components/Tabs",component:g,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:["Tabs keep every `TabPanel` mounted by default and hide the inactive","ones with `display: none`. That preserves scroll position, form","drafts, and grid state when a user moves between tabs, at the cost","of keeping hidden work alive. Hidden panels receive an `isActive`","signal — as a render-prop argument or through `useTabPanelActive()`","— so polling, timers, and animation can pause themselves. Set","`unmountInactive` when a panel is expensive enough that discarding","its state is the better trade."].join(" ")}}},args:{"aria-label":"Example sections",children:null}},oe={render:t=>e.jsxs(g,{...t,defaultValue:"overview",children:[e.jsx(l,{value:"overview",children:"Overview"}),e.jsx(l,{value:"activity",children:"Activity"}),e.jsx(l,{value:"settings",children:"Settings"}),e.jsx(i,{value:"overview",children:e.jsx(p,{py:"16",children:"Summary of the current record."})}),e.jsx(i,{value:"activity",children:e.jsx(p,{py:"16",children:"Recent activity for the current record."})}),e.jsx(i,{value:"settings",children:e.jsx(p,{py:"16",children:"Settings for the current record."})})]})},le={name:"Badges",parameters:{controls:{disable:!0}},render:t=>e.jsxs(g,{...t,defaultValue:"work",children:[e.jsx(l,{value:"work",children:"Work"}),e.jsx(l,{value:"materials",badge:3,badgeTooltip:"2 Open Part Request, 1 Short Part(s)",children:"Materials"}),e.jsx(l,{value:"status",badge:12,children:"Status"}),e.jsx(l,{value:"documents",badge:0,children:"Documents"}),e.jsx(i,{value:"work",children:e.jsx(p,{py:"16",children:"A badge without a tooltip is a bare count."})}),e.jsx(i,{value:"materials",children:e.jsx(p,{py:"16",children:"Hover or focus the Materials tab to read what the count means."})}),e.jsx(i,{value:"status",children:e.jsx(p,{py:"16",children:"Status content."})}),e.jsx(i,{value:"documents",children:e.jsx(p,{py:"16",children:"A zero count renders no badge at all."})})]})},_e=["Work","Info","Materials","Status","Documents","History","Labor","Quality","Shipping","Invoicing","Costing","Notes"],ie={name:"Overflow",parameters:{controls:{disable:!0}},render:t=>e.jsxs(y,{resize:"horizontal",overflow:"auto",width:"lg",maxWidth:"full",minWidth:"240",borderWidth:"1",borderStyle:"dashed",borderColor:"border",p:"16",children:[e.jsx(p,{pb:"12",color:"text.subtlest",children:"Drag the bottom-right corner. Tabs nearest the selected one keep their place; the rest move into the overflow menu."}),e.jsxs(g,{...t,defaultValue:"work",children:[_e.map(a=>e.jsx(l,{value:a.toLowerCase(),children:a},a)),_e.map(a=>e.jsx(i,{value:a.toLowerCase(),children:e.jsxs(p,{py:"16",children:[a," content."]})},a))]})]})},ze=[{value:"work",label:"Work",icon:"wrench-2"},{value:"materials",label:"Materials",icon:"cube-focus"},{value:"schedule",label:"Schedule",icon:"calendar-view-week"},{value:"shipping",label:"Shipping",icon:"truck-trailer"},{value:"quality",label:"Quality",icon:"list-checks"},{value:"history",label:"History",icon:"clock-countdown"},{value:"notes",label:"Notes",icon:"note-stack"}],ce={name:"Label Override for Overflow",parameters:{controls:{disable:!0}},render:t=>e.jsxs(y,{width:"md",maxWidth:"full",children:[e.jsx(p,{pb:"12",color:"text.subtlest",children:"These tabs render an icon beside their text, so flattening `children` would produce a poor menu row. Each one passes `label`, and the overflow menu uses that text. The strip still renders `children` as-is."}),e.jsxs(g,{...t,defaultValue:"work",children:[ze.map(a=>e.jsxs(l,{value:a.value,label:a.label,children:[e.jsx(Nt,{name:a.icon,"aria-hidden":!0}),a.label]},a.value)),ze.map(a=>e.jsx(i,{value:a.value,children:e.jsxs(p,{py:"16",children:[a.label," content."]})},a.value))]})]})},de={name:"Unmount Inactive Panels",parameters:{controls:{disable:!0}},render:t=>e.jsxs(g,{...t,defaultValue:"first",unmountInactive:!0,children:[e.jsx(l,{value:"first",children:"First"}),e.jsx(l,{value:"second",children:"Second"}),e.jsx(i,{value:"first",children:e.jsx(p,{py:"16",children:"Only this panel exists in the DOM while it is selected."})}),e.jsx(i,{value:"second",children:e.jsx(p,{py:"16",children:"Switching tabs unmounts the other panel and discards its state."})})]})},cn=()=>{const[t,a]=o.useState(!0),[n,s]=o.useState("none yet");return e.jsxs(y,{children:[e.jsx(y,{pb:"12",children:e.jsx(X,{variant:"hollow",size:"sm",onClick:()=>a(c=>!c),children:t?"Remove Schedule tab":"Add Schedule tab"})}),e.jsxs(g,{"aria-label":"Work order sections",defaultValue:"work",onChange:(c,d,h)=>s(`${d} (${h})`),children:[e.jsx(l,{value:"work",children:"Work"}),e.jsx(l,{value:"info",children:"Info"}),e.jsx(l,{value:"materials",badge:3,badgeTooltip:"2 Open Part Request, 1 Short Part(s)",children:"Materials"}),e.jsx(l,{value:"status",badge:5,badgeTooltip:"5 Operations Behind",children:"Status"}),t?e.jsx(l,{value:"schedule",children:"Schedule"}):null,e.jsx(l,{value:"documents",children:"Documents"}),e.jsx(l,{value:"history",children:"History"}),e.jsx(i,{value:"work",children:e.jsx(p,{py:"16",children:"Work instructions and operations."})}),e.jsx(i,{value:"info",children:e.jsx(p,{py:"16",children:"Order header and customer details."})}),e.jsx(i,{value:"materials",children:e.jsx(p,{py:"16",children:"Bill of materials and part requests."})}),e.jsx(i,{value:"status",children:e.jsx(p,{py:"16",children:"Operation status roll-up."})}),e.jsx(i,{value:"schedule",children:({isActive:c})=>e.jsxs(p,{py:"16",children:["Schedule board. Live refresh is ",c?"running":"paused",". Select this tab, remove it with the button above, and the strip falls back to the first remaining tab."]})}),e.jsx(i,{value:"documents",children:e.jsx(p,{py:"16",children:"Attached drawings and travelers."})}),e.jsx(i,{value:"history",children:e.jsx(p,{py:"16",children:"Audit trail."})})]}),e.jsxs(p,{pt:"16",color:"text.subtlest",children:["Last change: ",n]})]})},ue={name:"Ex: Work View",parameters:{controls:{disable:!0}},render:()=>e.jsx(cn,{})},dn=()=>{const[t,a]=o.useState(!0),[n,s]=o.useState("schedule");return e.jsxs(y,{children:[e.jsx(X,{variant:"hollow",size:"sm",onClick:()=>a(c=>!c),children:t?"Remove Schedule tab":"Add Schedule tab"}),e.jsxs(p,{py:"8","data-testid":"controlled-value",children:["Parent value: ",n]}),e.jsxs(g,{"aria-label":"Controlled sections",value:n,onChange:(c,d)=>s(d),children:[e.jsx(l,{value:"work",children:"Work"}),t?e.jsx(l,{value:"schedule",children:"Schedule"}):null,e.jsx(l,{value:"history",children:"History"}),e.jsx(i,{value:"work",children:"Work content."}),e.jsx(i,{value:"schedule",children:"Schedule content."}),e.jsx(i,{value:"history",children:"History content."})]})]})},be={name:"Test: controlled value follows a removed tab",parameters:{controls:{disable:!0}},render:()=>e.jsx(dn,{}),play:async({canvasElement:t})=>{const a=k(t);await r(a.getByRole("tab",{name:"Schedule"})).toHaveAttribute("aria-selected","true"),await x.click(a.getByRole("button",{name:"Remove Schedule tab"})),await N(async()=>{await r(a.getByTestId("controlled-value")).toHaveTextContent("Parent value: work"),await r(a.getByRole("tab",{name:"Work"})).toHaveAttribute("aria-selected","true")})}},un=()=>{const[t,a]=o.useState(!0);return e.jsxs(y,{children:[e.jsx(X,{variant:"hollow",size:"sm",onClick:()=>a(n=>!n),children:t?"Remove Schedule tab":"Add Schedule tab"}),e.jsxs(g,{"aria-label":"Uncontrolled sections",defaultValue:"schedule",children:[e.jsx(l,{value:"work",children:"Work"}),t?e.jsx(l,{value:"schedule",children:"Schedule"}):null,e.jsx(l,{value:"history",children:"History"}),e.jsx(i,{value:"work",children:"Work content."}),e.jsx(i,{value:"schedule",children:"Schedule content."}),e.jsx(i,{value:"history",children:"History content."})]})]})},pe={name:"Test: removed uncontrolled value does not return",parameters:{controls:{disable:!0}},render:()=>e.jsx(un,{}),play:async({canvasElement:t})=>{const a=k(t);await x.click(a.getByRole("button",{name:"Remove Schedule tab"})),await r(a.getByRole("tab",{name:"Work"})).toHaveAttribute("aria-selected","true"),await x.click(a.getByRole("button",{name:"Add Schedule tab"})),await r(a.getByRole("tab",{name:"Work"})).toHaveAttribute("aria-selected","true"),await r(a.getByRole("tab",{name:"Schedule"})).toHaveAttribute("aria-selected","false")}},ve={name:"Test: overflow keeps badge details and selection semantics",parameters:{controls:{disable:!0}},render:t=>e.jsx(y,{"data-overflow-metadata-wrapper":!0,children:e.jsxs(g,{...t,defaultValue:"work",children:[e.jsx(l,{value:"work",children:"Work"}),e.jsx(l,{value:"materials",badge:3,badgeTooltip:"2 Open Part Requests, 1 Short Part",children:"Materials"}),e.jsx(l,{value:"documents",children:"Documents"}),e.jsx(l,{value:"history",children:"History"}),e.jsx(i,{value:"work",children:"Work content."}),e.jsx(i,{value:"materials",children:"Materials content."}),e.jsx(i,{value:"documents",children:"Documents content."}),e.jsx(i,{value:"history",children:"History content."})]})}),play:async({canvasElement:t})=>{const a=k(t),n=k(t.ownerDocument.body),s=t.querySelector("[data-overflow-metadata-wrapper]");if(!s)throw new Error("overflow metadata wrapper not found");s.style.width="180px";const c=await a.findByRole("button",{name:"More tabs"});await x.click(c);const d=await n.findByRole("menuitemradio",{name:/Materials \(3\)/});await r(d).toHaveAttribute("aria-checked","false"),await r(d).toHaveTextContent("2 Open Part Requests, 1 Short Part")}},bn=()=>{const[t,a]=o.useState(0),[n,s]=o.useState("none");return e.jsxs(y,{children:[e.jsxs(p,{pb:"8","data-testid":"consumer-events",children:["Clicks: ",t,"; last key: ",n]}),e.jsxs(g,{"aria-label":"Handler composition",defaultValue:"first",children:[e.jsx(l,{value:"first",onClick:()=>a(c=>c+1),children:"First"}),e.jsx(l,{value:"second",onKeyDown:c=>s(c.key),children:"Second"}),e.jsx(i,{value:"first",children:"First content."}),e.jsx(i,{value:"second",children:"Second content."})]})]})},he={name:"Test: consumer handlers preserve tab interactions",parameters:{controls:{disable:!0}},render:()=>e.jsx(bn,{}),play:async({canvasElement:t})=>{const a=k(t),n=a.getByRole("tab",{name:"First"}),s=a.getByRole("tab",{name:"Second"}),c=a.getByTestId("consumer-events");await x.click(s),await r(s).toHaveAttribute("aria-selected","true"),await x.keyboard("{ArrowLeft}"),await r(n).toHaveAttribute("aria-selected","true"),await r(c).toHaveTextContent("last key: ArrowLeft"),await x.click(n),await r(c).toHaveTextContent("Clicks: 1")}},me={name:"Test: disabled first tab is not the default",parameters:{controls:{disable:!0}},render:t=>e.jsxs(y,{children:[e.jsx(p,{pb:"12",color:"text.subtlest",children:"No `defaultValue` is given and the first tab is disabled. The strip selects the first enabled tab so the keyboard can still enter it."}),e.jsxs(g,{...t,children:[e.jsx(l,{value:"archived",disabled:!0,children:"Archived"}),e.jsx(l,{value:"open",children:"Open"}),e.jsx(l,{value:"closed",children:"Closed"}),e.jsx(i,{value:"archived",children:e.jsx(p,{py:"16",children:"Archived content."})}),e.jsx(i,{value:"open",children:e.jsx(p,{py:"16",children:"Open content."})}),e.jsx(i,{value:"closed",children:e.jsx(p,{py:"16",children:"Closed content."})})]})]}),play:async({canvasElement:t})=>{const a=k(t),n=a.getByRole("tab",{name:"Open"});await r(n).toHaveAttribute("aria-selected","true"),await r(n).toHaveAttribute("tabindex","0"),await r(a.getByRole("tab",{name:"Archived"})).toHaveAttribute("aria-selected","false"),await x.tab(),await r(n).toHaveFocus()}},we={name:"Test: badge does not change tab height",parameters:{controls:{disable:!0}},render:t=>e.jsxs(y,{display:"flex",flexDirection:"column",gap:"16",children:[e.jsx(p,{color:"text.subtlest",children:"Both strips are 40px tall. The 20px badge sits inside the 22px line box and never grows the tab. Matches Figma `_TabsTab`."}),e.jsxs(g,{...t,"aria-label":"Without badges",defaultValue:"work",children:[e.jsx(l,{value:"work",children:"Work"}),e.jsx(l,{value:"materials",children:"Materials"})]}),e.jsxs(g,{...t,"aria-label":"With badges",defaultValue:"work",children:[e.jsx(l,{value:"work",badge:3,children:"Work"}),e.jsx(l,{value:"materials",badge:12,badgeTooltip:"12 Short Part(s)",children:"Materials"})]})]}),play:async({canvasElement:t})=>{const a=k(t),[n,s]=a.getAllByRole("tablist");await r(s==null?void 0:s.offsetHeight).toBe(n==null?void 0:n.offsetHeight);for(const c of a.getAllByRole("tab"))await r(c.offsetHeight).toBe(40)}},fe=["Work","Info","Materials","Status"],ye={name:"Test: toggle space is reserved only once tabs overflow",parameters:{controls:{disable:!0}},render:t=>e.jsxs(y,{children:[e.jsx(p,{pb:"12",color:"text.subtlest",children:"The wrapper is sized just above the strip width. Every tab fits, so no toggle renders. Shrinking it below the strip makes the measured toggle appear."}),e.jsx(y,{"data-fit-wrapper":!0,borderWidth:"1",borderStyle:"dashed",borderColor:"border",children:e.jsxs(g,{...t,defaultValue:"work",children:[fe.map(a=>e.jsx(l,{value:a.toLowerCase(),children:a},a)),fe.map(a=>e.jsx(i,{value:a.toLowerCase(),children:e.jsxs(p,{py:"16",children:[a," content."]})},a))]})})]}),play:async({canvasElement:t})=>{const a=k(t),n=t.querySelector("[data-fit-wrapper]"),s=a.getByRole("tablist"),c=a.getAllByRole("tab");if(!n)throw new Error("wrapper not found");const d=Number.parseFloat(getComputedStyle(s).columnGap)||0,h=c.reduce((T,j)=>T+j.getBoundingClientRect().width,0)+d*(c.length-1);n.style.width=`${String(Math.ceil(h)+16)}px`,await N(async()=>{await r(a.getAllByRole("tab")).toHaveLength(fe.length),await r(a.queryByRole("button",{name:"More tabs"})).not.toBeInTheDocument()}),n.style.width=`${String(Math.floor(h)-8)}px`,await N(async()=>{await r(a.getByRole("button",{name:"More tabs"})).toBeInTheDocument(),await r(a.getAllByRole("tab").length).toBeLessThan(fe.length)})}},ge={name:"Test: tabs grouped in fragments join the strip",parameters:{controls:{disable:!0}},render:t=>e.jsxs(g,{...t,"aria-label":"Fragment children",defaultValue:"work",children:[e.jsxs(e.Fragment,{children:[e.jsx(l,{value:"work",children:"Work"}),e.jsx(e.Fragment,{children:e.jsx(l,{value:"materials",children:"Materials"})})]}),e.jsxs(e.Fragment,{children:[e.jsx(i,{value:"work",children:"Work content."}),e.jsx(i,{value:"materials",children:"Materials content."})]})]}),play:async({canvasElement:t})=>{const a=k(t),n=a.getByRole("tablist"),s=a.getByRole("tab",{name:"Materials"});await r(k(n).getAllByRole("tab")).toHaveLength(2),await x.click(s),await r(s).toHaveAttribute("aria-selected","true"),await r(a.getByText("Materials content.")).toBeVisible()}},pn=()=>{const t=o.useRef(null),[a,n]=o.useState("none");return e.jsxs(y,{children:[e.jsx(X,{variant:"standard",mb:"8",onClick:()=>{var s;return n(((s=t.current)==null?void 0:s.tagName)??"none")},children:"Read ref"}),e.jsxs(p,{pb:"8","data-testid":"consumer-ref",children:["Ref: ",a]}),e.jsxs(g,{"aria-label":"Consumer ref",defaultValue:"first",children:[e.jsx(l,{value:"first",children:"First"}),e.jsx(l,{value:"second",ref:t,children:"Second"}),e.jsx(i,{value:"first",children:"First content."}),e.jsx(i,{value:"second",children:"Second content."})]})]})},Te={name:"Test: consumer ref keeps tab registration",parameters:{controls:{disable:!0}},render:()=>e.jsx(pn,{}),play:async({canvasElement:t})=>{const a=k(t),n=a.getByRole("tab",{name:"First"}),s=a.getByRole("tab",{name:"Second"});await x.click(a.getByRole("button",{name:"Read ref"})),await r(a.getByTestId("consumer-ref")).toHaveTextContent("Ref: BUTTON"),await x.click(n),await x.keyboard("{ArrowRight}"),await r(s).toHaveAttribute("aria-selected","true"),await r(s).toHaveFocus()}},xe={name:"Test: badge tooltip opens on tab keyboard focus",parameters:{controls:{disable:!0}},render:t=>e.jsxs(g,{...t,"aria-label":"Badge tooltip",defaultValue:"materials",children:[e.jsx(l,{value:"materials",badge:3,badgeTooltip:"2 Open Part Requests",children:"Materials"}),e.jsx(l,{value:"status",children:"Status"}),e.jsx(i,{value:"materials",children:"Materials content."}),e.jsx(i,{value:"status",children:"Status content."})]}),play:async({canvasElement:t})=>{const a=k(t),n=k(t.ownerDocument.body),s=a.getByRole("tab",{name:/Materials/});await x.tab(),await r(s).toHaveFocus();const c=await n.findByRole("tooltip");await r(c).toHaveTextContent("2 Open Part Requests"),await r(s).toHaveAttribute("aria-describedby",c.id)}},xt=()=>{const[t,a]=o.useState("alpha"),[n,s]=o.useState([]);return e.jsxs(y,{children:[e.jsxs(p,{pb:"8","data-testid":"deferred-value",children:["Parent value: ",t]}),e.jsxs(p,{pb:"8","data-testid":"deferred-requests",children:["Requests: ",n.join(", ")]}),e.jsx(y,{"data-deferred-wrapper":!0,children:e.jsxs(g,{"aria-label":"Deferred selection",value:t,onChange:(c,d)=>{s(h=>[...h,d]),globalThis.setTimeout(()=>a(d),300)},children:[e.jsx(l,{value:"alpha",children:"Alpha section"}),e.jsx(l,{value:"bravo",children:"Bravo section"}),e.jsx(l,{value:"charlie",children:"Charlie section"}),e.jsx(i,{value:"alpha",children:"Alpha content."}),e.jsx(i,{value:"bravo",children:"Bravo content."}),e.jsx(i,{value:"charlie",children:"Charlie content."})]})})]})},ke={name:"Test: deferred controlled selection keeps the focused tab visible",parameters:{controls:{disable:!0}},render:()=>e.jsx(xt,{}),play:async({canvasElement:t})=>{const a=k(t),n=t.querySelector("[data-deferred-wrapper]");if(!n)throw new Error("deferred wrapper not found");const s=a.getByRole("tab",{name:"Alpha section"});n.style.width=`${String(Math.ceil(s.getBoundingClientRect().width)+48)}px`,await N(async()=>{await r(a.getAllByRole("tab")).toHaveLength(1)}),await x.click(s),await x.keyboard("{ArrowRight}");const c=await a.findByRole("tab",{name:"Bravo section"});await r(c).toHaveFocus(),await r(a.getByTestId("deferred-value")).toHaveTextContent("Parent value: alpha"),await N(async()=>{await r(a.getByTestId("deferred-value")).toHaveTextContent("Parent value: bravo")}),await r(c).toHaveAttribute("aria-selected","true"),await r(c).toHaveFocus(),n.style.width="",await N(async()=>{await r(a.getAllByRole("tab")).toHaveLength(3)}),await x.keyboard("{ArrowLeft}"),await N(async()=>{await r(a.getByTestId("deferred-value")).toHaveTextContent("Parent value: alpha")}),await x.keyboard("{ArrowRight}{ArrowRight}");const d=a.getByRole("tab",{name:"Charlie section"});await r(d).toHaveFocus(),await N(async()=>{await r(a.getByTestId("deferred-value")).toHaveTextContent("Parent value: charlie")}),await x.keyboard("{ArrowLeft}{ArrowLeft}"),await r(a.getByRole("tab",{name:"Alpha section"})).toHaveFocus(),await N(async()=>{await r(a.getByTestId("deferred-value")).toHaveTextContent("Parent value: alpha")})}},je={name:"Test: a deferred return to the committed tab still reaches the parent",parameters:{controls:{disable:!0}},render:()=>e.jsx(xt,{}),play:async({canvasElement:t})=>{const a=k(t),n=a.getByRole("tab",{name:"Alpha section"});await x.click(n),await x.keyboard("{ArrowRight}{ArrowLeft}"),await r(n).toHaveFocus(),await r(a.getByTestId("deferred-requests")).toHaveTextContent("Requests: bravo, alpha"),await new Promise(s=>globalThis.setTimeout(s,500)),await r(a.getByTestId("deferred-value")).toHaveTextContent("Parent value: alpha"),await r(n).toHaveAttribute("aria-selected","true"),await r(n).toHaveFocus()}},vn=()=>{const[t,a]=o.useState("missing");return e.jsxs(y,{children:[e.jsxs(p,{pb:"8","data-testid":"empty-fallback-value",children:['Parent value: "',t,'"']}),e.jsxs(g,{"aria-label":"Empty fallback",value:t,onChange:(n,s)=>a(s),children:[e.jsx(l,{value:"",children:"Overview"}),e.jsx(l,{value:"details",children:"Details"}),e.jsx(i,{value:"",children:"Overview content."}),e.jsx(i,{value:"details",children:"Details content."})]}),e.jsx(y,{"data-empty-wrapper":!0,pt:"16",children:e.jsxs(g,{"aria-label":"Empty selected",defaultValue:"",children:[e.jsx(l,{value:"work",children:"Work section"}),e.jsx(l,{value:"materials",children:"Materials section"}),e.jsx(l,{value:"",children:"Summary section"}),e.jsx(i,{value:"work",children:"Work content."}),e.jsx(i,{value:"materials",children:"Materials content."}),e.jsx(i,{value:"",children:"Summary content."})]})})]})},Be={name:"Test: an empty-string tab value is a real selection",parameters:{controls:{disable:!0}},render:()=>e.jsx(vn,{}),play:async({canvasElement:t})=>{const a=k(t);await N(async()=>{await r(a.getByTestId("empty-fallback-value")).toHaveTextContent('Parent value: ""')}),await r(a.getByRole("tab",{name:"Overview"})).toHaveAttribute("aria-selected","true");const n=t.querySelector("[data-empty-wrapper]");if(!n)throw new Error("empty wrapper not found");const s=a.getByRole("tab",{name:"Summary section"});n.style.width=`${String(Math.ceil(s.getBoundingClientRect().width)+48)}px`;const c=a.getByRole("tablist",{name:"Empty selected"});await N(async()=>{await r(k(c).getAllByRole("tab")).toHaveLength(1)});const d=k(c).getByRole("tab",{name:"Summary section"});await r(d).toHaveAttribute("aria-selected","true"),await r(d).toHaveAttribute("tabindex","0")}},Re={name:"Test: with no enabled tabs, an empty-string tab is not selected",parameters:{controls:{disable:!0}},render:t=>e.jsxs(g,{...t,"aria-label":"No enabled tabs",children:[e.jsx(l,{value:"",disabled:!0,children:"Overview"}),e.jsx(l,{value:"details",disabled:!0,children:"Details"}),e.jsx(i,{value:"",children:e.jsx(p,{py:"16",children:"Overview content."})}),e.jsx(i,{value:"details",children:e.jsx(p,{py:"16",children:"Details content."})})]}),play:async({canvasElement:t})=>{const a=k(t);for(const n of a.getAllByRole("tab"))await r(n).toHaveAttribute("aria-selected","false");await r(a.getByText("Overview content.")).not.toBeVisible(),await r(a.getByText("Details content.")).not.toBeVisible()}},Se={name:"Test: a responsive panel display never reveals an inactive panel",parameters:{controls:{disable:!0}},render:t=>e.jsxs(g,{...t,"aria-label":"Responsive panels",defaultValue:"work",children:[e.jsx(l,{value:"work",children:"Work"}),e.jsx(l,{value:"materials",children:"Materials"}),e.jsxs(i,{value:"work",display:{xs:"flex"},gap:"8",py:"16",children:[e.jsx(p,{children:"Work content."}),e.jsx(X,{children:"Start work"})]}),e.jsxs(i,{value:"materials",display:{xs:"flex"},gap:"8",py:"16",children:[e.jsx(p,{children:"Materials content."}),e.jsx(X,{children:"Issue materials"})]})]}),play:async({canvasElement:t})=>{const a=k(t);await r(a.getByText("Work content.")).toBeVisible(),await r(a.getByText("Materials content.")).not.toBeVisible(),await r(a.queryByRole("button",{name:"Issue materials"})).toBeNull(),await x.click(a.getByRole("tab",{name:"Materials"})),await r(a.getByText("Materials content.")).toBeVisible(),await r(a.getByText("Work content.")).not.toBeVisible()}},He={name:"Test: tab values with spaces still link tab and panel",parameters:{controls:{disable:!0}},render:t=>e.jsxs(g,{...t,"aria-label":"Order sections",defaultValue:"work orders",children:[e.jsx(l,{value:"work orders",children:"Work orders"}),e.jsx(l,{value:"sales orders",children:"Sales orders"}),e.jsx(i,{value:"work orders",children:e.jsx(p,{py:"16",children:"Open work orders."})}),e.jsx(i,{value:"sales orders",children:e.jsx(p,{py:"16",children:"Open sales orders."})})]}),play:async({canvasElement:t})=>{const a=k(t),n=a.getByRole("tab",{name:"Work orders"}),s=a.getByRole("tabpanel",{name:"Work orders"});await r(s.id).not.toMatch(/\s/),await r(n.id).not.toMatch(/\s/),await r(n).toHaveAttribute("aria-controls",s.id),await r(s).toHaveAttribute("aria-labelledby",n.id)}},$e=t=>({id:t}),Pe={name:"Test: a consumer id never breaks the tab and panel links",parameters:{controls:{disable:!0}},render:t=>e.jsxs(g,{...t,"aria-label":"Consumer ids",defaultValue:"work",children:[e.jsx(l,{value:"work",...$e("work-tab"),children:"Work"}),e.jsx(l,{value:"materials",children:"Materials"}),e.jsx(i,{value:"work",...$e("work-panel"),children:e.jsx(p,{py:"16",children:"Work content."})}),e.jsx(i,{value:"materials",children:e.jsx(p,{py:"16",children:"Materials content."})})]}),play:async({canvasElement:t})=>{const a=k(t),n=a.getByRole("tab",{name:"Work"}),s=a.getByRole("tabpanel",{name:"Work"});await r(n.id).not.toBe("work-tab"),await r(s.id).not.toBe("work-panel"),await r(n).toHaveAttribute("aria-controls",s.id),await r(s).toHaveAttribute("aria-labelledby",n.id)}},Ee={name:"Test: choosing a hidden tab from the menu focuses that tab",parameters:{controls:{disable:!0}},render:t=>e.jsx(y,{"data-overflow-focus-wrapper":!0,children:e.jsxs(g,{...t,"aria-label":"Overflow focus",defaultValue:"work",children:[e.jsx(l,{value:"work",children:"Work"}),e.jsx(l,{value:"materials",children:"Materials"}),e.jsx(l,{value:"documents",children:"Documents"}),e.jsx(l,{value:"history",children:"History"}),e.jsx(i,{value:"work",children:"Work content."}),e.jsx(i,{value:"materials",children:"Materials content."}),e.jsx(i,{value:"documents",children:"Documents content."}),e.jsx(i,{value:"history",children:"History content."})]})}),play:async({canvasElement:t})=>{const a=k(t),n=k(t.ownerDocument.body),s=t.querySelector("[data-overflow-focus-wrapper]");if(!s)throw new Error("overflow focus wrapper not found");s.style.width="180px",await N(async()=>{await r(a.queryByRole("tab",{name:"History"})).toBeNull()});const c=await a.findByRole("button",{name:"More tabs"});await x.click(c),await x.click(await n.findByRole("menuitemradio",{name:"History"}));const d=await a.findByRole("tab",{name:"History"});await r(d).toHaveAttribute("aria-selected","true"),await new Promise(h=>globalThis.requestAnimationFrame(h)),await r(d).toHaveFocus()}},hn=()=>{const[t,a]=o.useState("alpha"),[n,s]=o.useState([]);return e.jsxs(y,{children:[e.jsx(X,{variant:"hollow",size:"sm",onClick:()=>a("bravo"),children:"Select Bravo from outside"}),e.jsxs(p,{py:"8","data-testid":"external-requests",children:["Requests: ",n.length>0?n.join(", "):"none"]}),e.jsxs(g,{"aria-label":"External selection",value:t,onChange:(c,d)=>{s(h=>[...h,d]),a(d)},children:[e.jsx(l,{value:"alpha",children:"Alpha section"}),e.jsx(l,{value:"bravo",children:"Bravo section"}),e.jsx(i,{value:"alpha",children:"Alpha content."}),e.jsx(i,{value:"bravo",children:"Bravo content."})]})]})},Ae={name:"Test: clicking a tab the parent already selected sends no change",parameters:{controls:{disable:!0}},render:()=>e.jsx(hn,{}),play:async({canvasElement:t})=>{const a=k(t),n=a.getByTestId("external-requests");await x.click(a.getByRole("button",{name:"Select Bravo from outside"}));const s=a.getByRole("tab",{name:"Bravo section"});await r(s).toHaveAttribute("aria-selected","true"),await x.click(s),await r(n).toHaveTextContent("Requests: none"),await x.click(a.getByRole("tab",{name:"Alpha section"})),await r(n).toHaveTextContent("Requests: alpha")}},Mn=["Default","WithBadges","Overflow","LabelOverride","UnmountInactive","ExWorkView","ControlledFallback","UncontrolledFallback","OverflowMetadata","ComposedTabHandlers","DisabledFirstTab","BadgeKeepsHeight","ToggleReserveOnlyOnOverflow","FragmentChildren","ConsumerRef","BadgeTooltipOnFocus","DeferredControlledOverflow","DeferredControlledReversal","EmptyStringValue","NoEnabledTabs","ResponsivePanelDisplay","ValuesWithSpaces","ConsumerIdsIgnored","OverflowMenuFocus","ExternalValueChange"];var Ke,Ue,Ge;oe.parameters={...oe.parameters,docs:{...(Ke=oe.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
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
}`,...(Ge=(Ue=oe.parameters)==null?void 0:Ue.docs)==null?void 0:Ge.source}}};var Ye,Qe,Je;le.parameters={...le.parameters,docs:{...(Ye=le.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
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
}`,...(Je=(Qe=le.parameters)==null?void 0:Qe.docs)==null?void 0:Je.source}}};var Ze,Xe,ea;ie.parameters={...ie.parameters,docs:{...(Ze=ie.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
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
}`,...(ea=(Xe=ie.parameters)==null?void 0:Xe.docs)==null?void 0:ea.source}}};var aa,ta,na;ce.parameters={...ce.parameters,docs:{...(aa=ce.parameters)==null?void 0:aa.docs,source:{originalSource:`{
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
}`,...(na=(ta=ce.parameters)==null?void 0:ta.docs)==null?void 0:na.source}}};var sa,ra,oa;de.parameters={...de.parameters,docs:{...(sa=de.parameters)==null?void 0:sa.docs,source:{originalSource:`{
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
}`,...(oa=(ra=de.parameters)==null?void 0:ra.docs)==null?void 0:oa.source}}};var la,ia,ca;ue.parameters={...ue.parameters,docs:{...(la=ue.parameters)==null?void 0:la.docs,source:{originalSource:`{
  name: 'Ex: Work View',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <WorkView />
}`,...(ca=(ia=ue.parameters)==null?void 0:ia.docs)==null?void 0:ca.source}}};var da,ua,ba;be.parameters={...be.parameters,docs:{...(da=be.parameters)==null?void 0:da.docs,source:{originalSource:`{
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
}`,...(ba=(ua=be.parameters)==null?void 0:ua.docs)==null?void 0:ba.source}}};var pa,va,ha;pe.parameters={...pe.parameters,docs:{...(pa=pe.parameters)==null?void 0:pa.docs,source:{originalSource:`{
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
}`,...(ha=(va=pe.parameters)==null?void 0:va.docs)==null?void 0:ha.source}}};var ma,wa,fa;ve.parameters={...ve.parameters,docs:{...(ma=ve.parameters)==null?void 0:ma.docs,source:{originalSource:`{
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
}`,...(fa=(wa=ve.parameters)==null?void 0:wa.docs)==null?void 0:fa.source}}};var ya,ga,Ta;he.parameters={...he.parameters,docs:{...(ya=he.parameters)==null?void 0:ya.docs,source:{originalSource:`{
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
}`,...(Ta=(ga=he.parameters)==null?void 0:ga.docs)==null?void 0:Ta.source}}};var xa,ka,ja;me.parameters={...me.parameters,docs:{...(xa=me.parameters)==null?void 0:xa.docs,source:{originalSource:`{
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
}`,...(ja=(ka=me.parameters)==null?void 0:ka.docs)==null?void 0:ja.source}}};var Ba,Ra,Sa;we.parameters={...we.parameters,docs:{...(Ba=we.parameters)==null?void 0:Ba.docs,source:{originalSource:`{
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
}`,...(Sa=(Ra=we.parameters)==null?void 0:Ra.docs)==null?void 0:Sa.source}}};var Ha,Pa,Ea;ye.parameters={...ye.parameters,docs:{...(Ha=ye.parameters)==null?void 0:Ha.docs,source:{originalSource:`{
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
}`,...(Ea=(Pa=ye.parameters)==null?void 0:Pa.docs)==null?void 0:Ea.source}}};var Aa,Ca,Ma;ge.parameters={...ge.parameters,docs:{...(Aa=ge.parameters)==null?void 0:Aa.docs,source:{originalSource:`{
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
}`,...(Ma=(Ca=ge.parameters)==null?void 0:Ca.docs)==null?void 0:Ma.source}}};var Oa,Va,Ia;Te.parameters={...Te.parameters,docs:{...(Oa=Te.parameters)==null?void 0:Oa.docs,source:{originalSource:`{
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
}`,...(Ia=(Va=Te.parameters)==null?void 0:Va.docs)==null?void 0:Ia.source}}};var Wa,Fa,qa;xe.parameters={...xe.parameters,docs:{...(Wa=xe.parameters)==null?void 0:Wa.docs,source:{originalSource:`{
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
}`,...(qa=(Fa=xe.parameters)==null?void 0:Fa.docs)==null?void 0:qa.source}}};var La,Da,Na;ke.parameters={...ke.parameters,docs:{...(La=ke.parameters)==null?void 0:La.docs,source:{originalSource:`{
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
}`,...(Na=(Da=ke.parameters)==null?void 0:Da.docs)==null?void 0:Na.source}}};var _a,za,$a;je.parameters={...je.parameters,docs:{...(_a=je.parameters)==null?void 0:_a.docs,source:{originalSource:`{
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
}`,...($a=(za=je.parameters)==null?void 0:za.docs)==null?void 0:$a.source}}};var Ka,Ua,Ga;Be.parameters={...Be.parameters,docs:{...(Ka=Be.parameters)==null?void 0:Ka.docs,source:{originalSource:`{
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
}`,...(Ga=(Ua=Be.parameters)==null?void 0:Ua.docs)==null?void 0:Ga.source}}};var Ya,Qa,Ja;Re.parameters={...Re.parameters,docs:{...(Ya=Re.parameters)==null?void 0:Ya.docs,source:{originalSource:`{
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
}`,...(Ja=(Qa=Re.parameters)==null?void 0:Qa.docs)==null?void 0:Ja.source}}};var Za,Xa,et;Se.parameters={...Se.parameters,docs:{...(Za=Se.parameters)==null?void 0:Za.docs,source:{originalSource:`{
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
}`,...(et=(Xa=Se.parameters)==null?void 0:Xa.docs)==null?void 0:et.source}}};var at,tt,nt;He.parameters={...He.parameters,docs:{...(at=He.parameters)==null?void 0:at.docs,source:{originalSource:`{
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
}`,...(nt=(tt=He.parameters)==null?void 0:tt.docs)==null?void 0:nt.source}}};var st,rt,ot;Pe.parameters={...Pe.parameters,docs:{...(st=Pe.parameters)==null?void 0:st.docs,source:{originalSource:`{
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
}`,...(ot=(rt=Pe.parameters)==null?void 0:rt.docs)==null?void 0:ot.source}}};var lt,it,ct;Ee.parameters={...Ee.parameters,docs:{...(lt=Ee.parameters)==null?void 0:lt.docs,source:{originalSource:`{
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
}`,...(ct=(it=Ee.parameters)==null?void 0:it.docs)==null?void 0:ct.source}}};var dt,ut,bt;Ae.parameters={...Ae.parameters,docs:{...(dt=Ae.parameters)==null?void 0:dt.docs,source:{originalSource:`{
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
}`,...(bt=(ut=Ae.parameters)==null?void 0:ut.docs)==null?void 0:bt.source}}};export{we as BadgeKeepsHeight,xe as BadgeTooltipOnFocus,he as ComposedTabHandlers,Pe as ConsumerIdsIgnored,Te as ConsumerRef,be as ControlledFallback,oe as Default,ke as DeferredControlledOverflow,je as DeferredControlledReversal,me as DisabledFirstTab,Be as EmptyStringValue,ue as ExWorkView,Ae as ExternalValueChange,ge as FragmentChildren,ce as LabelOverride,Re as NoEnabledTabs,ie as Overflow,Ee as OverflowMenuFocus,ve as OverflowMetadata,Se as ResponsivePanelDisplay,ye as ToggleReserveOnlyOnOverflow,pe as UncontrolledFallback,de as UnmountInactive,He as ValuesWithSpaces,le as WithBadges,Mn as __namedExportsOrder,Cn as default};
