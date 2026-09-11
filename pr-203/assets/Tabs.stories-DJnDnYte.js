import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./index-BKyFwriW.js";import{w as J,e as M,u as Ne,a as ae}from"./index-L8OlCEhE.js";import{m as He,c as qe,s as Fe,a as De,g as ze,b as X,B as R,d as Z,e as Ke}from"./dsComponent-BYUIyF_R.js";import{B as $e}from"./Button-Bf2hC955.js";import{I as Ge}from"./Icon-Dq9uSEeo.js";import"./IconConfig-CikP2Rer.js";import{T as c}from"./Text-5drP39ES.js";import{B as ne}from"./Badge-CePMooOl.js";import{T as Ue}from"./Tooltip-BvgCFTJi.js";import{I as Qe}from"./IconButton-Bev7DMA1.js";import{M as Ye,a as Je}from"./SubMenu-CTaoXsTz.js";import{u as Xe}from"./useControllableState-ByGfjEIG.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Spinner-B6GigztE.js";import"./FieldContext-D6URyQos.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";import"./HighlightText-BP-sbDRA.js";import"./menu-DQAy75Rb.js";import"./FloatingLayerContext-BryH8O9I.js";import"./ListItemGroup-CDi38M9R.js";import"./Divider-DhAaijX4.js";import"./Checkbox-XnGrI6IT.js";import"./Toggle-C_NcmSvJ.js";const Me={},Ze=[],et=[["root","tabs__root"],["list","tabs__list"],["tab","tabs__tab"],["badge","tabs__badge"],["overflow","tabs__overflow"],["menu","tabs__menu"],["panel","tabs__panel"]],tt=et.map(([t,a])=>[t,De(a,Me,ze(Ze,t))]),at=He((t={})=>Object.fromEntries(tt.map(([a,l])=>[a,l.recipeFn(t)]))),se=["overflowed"],nt=t=>({...Me,...qe(t)}),Ie=Object.assign(at,{__recipe__:!1,__name__:"tabs",raw:t=>t,classNameMap:{},variantKeys:se,variantMap:{overflowed:["true"]},splitVariantProps(t){return Fe(t,se)},getVariantProps:nt}),st=32,Q=(t,a)=>t.length===a.length&&t.every((l,h)=>l===a[h]),rt=({items:t,containerRef:a,getItemElement:l,activeItem:h=null,reserve:m=st,enabled:u=!0})=>{const[w,P]=o.useState(()=>[...t]),[S,k]=o.useState([]),v=o.useRef(null),f=o.useCallback(()=>{const T=a.current;if(!u||!T){P(s=>Q(s,t)?s:[...t]),k(s=>s.length===0?s:[]);return}const x=globalThis.getComputedStyle(T),g=Number.parseFloat(x.paddingLeft||"0")+Number.parseFloat(x.paddingRight||"0"),y=Number.parseFloat(x.columnGap||"0")||0,E=T.clientWidth-g,O=t.map(s=>{var i;return((i=l(s))==null?void 0:i.offsetWidth)??Number.POSITIVE_INFINITY}),B=h===null?-1:t.indexOf(h),I=B===-1?0:B,_=t.map((s,i)=>i).sort((s,i)=>{const j=Math.abs(s-I)-Math.abs(i-I);return j===0?s-i:j}),A=(s,i)=>{const j=new Set;let V=0;s!==null&&(j.add(s),V+=O[s]??0);for(const U of _){if(j.has(U))continue;const te=(O[U]??0)+(j.size>0?y:0);if(V+te>i)break;V+=te,j.add(U)}return j};let n=A(null,E);if(n.size<t.length){const s=E-m-y;n=A(null,s),B!==-1&&!n.has(B)&&(n=A(B,s))}const r=[],b=[];t.forEach((s,i)=>{n.has(i)?r.push(s):b.push(s)}),P(s=>Q(s,r)?s:r),k(s=>Q(s,b)?s:b)},[h,a,u,l,t,m]);return o.useLayoutEffect(()=>{const T=a.current,x=()=>{v.current!==null&&globalThis.cancelAnimationFrame(v.current),v.current=globalThis.requestAnimationFrame(()=>{v.current=null,f()})};if(f(),!u||!T)return()=>{v.current!==null&&(globalThis.cancelAnimationFrame(v.current),v.current=null)};const g=typeof ResizeObserver>"u"?null:new ResizeObserver(x);g==null||g.observe(T);for(const y of t){const E=l(y);E&&(g==null||g.observe(E))}return globalThis.addEventListener("resize",x),()=>{g==null||g.disconnect(),globalThis.removeEventListener("resize",x),v.current!==null&&(globalThis.cancelAnimationFrame(v.current),v.current=null)}},[a,u,l,t,f]),{visible:w,overflow:S,hasOverflow:S.length>0,measure:f}},_e=o.createContext(null),lt=o.createContext(!0),ot=_e.Provider,it=lt.Provider,We=()=>{const t=o.useContext(_e);if(!t)throw new Error("Tabs compound components must be used within <Tabs />");return t},G={tab:"Tab",panel:"TabPanel"},ee="__tabsComponentType",Le=t=>{if(!t||typeof t!="object"||!("type"in t))return null;const a=t.type;return(a==null?void 0:a[ee])??null},ct=Ie({overflowed:!0}).tab,d=t=>{const{value:a,children:l,label:h,badge:m,badgeTooltip:u,disabled:w=!1,...P}=t,{classes:S,getPanelId:k,getTabId:v,onTabKeyDown:f,overflowValues:T,registerTabElement:x,selectTab:g,selectedValue:y}=We(),E=y===a,O=T.includes(a),[B,I]=X(P),_=o.useCallback(b=>{x(a,b)},[x,a]),A=O?ct:S.tab,r=typeof m=="number"&&m!==0?e.jsx(R,{className:S.badge,children:u?e.jsx(Ue,{text:u,children:e.jsx(ne,{count:m,variant:"subtle"})}):e.jsx(ne,{count:m,variant:"subtle"})}):null;return e.jsxs(R,{as:"button",type:"button",ref:_,id:v(a),role:"tab","aria-selected":E,"aria-controls":k(a),"aria-hidden":O||void 0,disabled:w,tabIndex:E&&!O?0:-1,className:Z(A,B),onClick:b=>{w||g(b,a,"clicked-on-tab")},onKeyDown:f,...I,children:[l,r]})};d[ee]=G.tab;d.__docgenInfo={description:'Selects one panel inside a {@link Tabs} strip.\n\nRenders a `button` with `role="tab"`. Only the selected tab is in the tab\norder; Arrow, Home, and End move between the others. A tab that does not fit\nthe strip stays mounted but hidden so it can still be measured, and it is\noffered in the overflow menu instead. The menu row is plain text, so give\n`label` when `children` are not plain text.\n\n@example\n```tsx\n<Tab value="materials" badge={3} badgeTooltip="2 Open Part Request">\n  Materials\n</Tab>\n```',methods:[],displayName:"Tab",props:{value:{required:!0,tsType:{name:"string"},description:"Identifies the tab and the `TabPanel` it controls. Must be unique within a `Tabs`."},children:{required:!1,tsType:{name:"ReactNode"},description:"Visible label rendered in the strip. Plain text is also reused as the overflow-menu row's text unless `label` overrides it."},label:{required:!1,tsType:{name:"string"},description:"Plain-text name for this tab's overflow-menu row, which cannot render\nmarkup. Set it when `children` contain more than text — an icon, a nested\nelement — because flattening those to a string reads badly. It never\nchanges what the strip renders: `children` still render there as-is.\nWithout it the menu row falls back to the flattened `children`, then to\n`value`."},badge:{required:!1,tsType:{name:"number"},description:"Count shown in a trailing {@link Badge}. A zero or omitted count renders no badge."},badgeTooltip:{required:!1,tsType:{name:"string"},description:"Tooltip text describing what the badge counts. Requires `badge`."},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents selection and skips the tab during arrow-key navigation."}}};const p=t=>{const{value:a,children:l,...h}=t,{classes:m,getPanelId:u,getTabId:w,selectedValue:P,unmountInactive:S}=We(),k=P===a,[v,f]=X(h);if(S&&!k)return null;const x=typeof l=="function"?l({isActive:k}):l;return e.jsx(it,{value:k,children:e.jsx(R,{id:u(a),role:"tabpanel","aria-labelledby":w(a),tabIndex:k?0:-1,display:k?"block":"none",className:Z(m.panel,v),...f,children:x})})};p[ee]=G.panel;p.__docgenInfo={description:'Renders the content for one {@link Tab}.\n\nThe panel stays mounted when another tab is selected and is hidden with\n`display: none`, which preserves scroll position and local state; set\n`unmountInactive` on `Tabs` to render only the selected panel instead. A\nfunction child receives `{ isActive }`, and descendants can call\n`useTabPanelActive()` for the same signal, so hidden panels can pause polling\nor animation.\n\n@example\n```tsx\n<TabPanel value="materials">\n  {({ isActive }) => <MaterialsGrid paused={!isActive} />}\n</TabPanel>\n```',methods:[],displayName:"TabPanel",props:{value:{required:!0,tsType:{name:"string"},description:"`value` of the {@link Tab} this panel belongs to."},children:{required:!1,tsType:{name:"union",raw:"ReactNode | ((props: TabPanelRenderProps) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:"Panel content. A function child receives `{ isActive }` so expensive work\ncan pause while the panel is mounted but hidden."}}};const dt=32,Y=t=>t==null||typeof t=="boolean"?"":typeof t=="string"||typeof t=="number"?String(t):Array.isArray(t)?t.map(a=>Y(a)).join(""):o.isValidElement(t)?Y(t.props.children):"",ut=({children:t,value:a,defaultValue:l,onChange:h,listRef:m})=>{var A;const u=o.useMemo(()=>{const n=[];return o.Children.forEach(t,r=>{if(!o.isValidElement(r)||Le(r)!==G.tab)return;const b=r.props;typeof b.value=="string"&&n.push({value:b.value,label:b.label||Y(b.children)||b.value,disabled:!!b.disabled})}),n},[t]),w=o.useRef([]),P=o.useMemo(()=>{const n=u.map(b=>b.value),r=w.current;return r.length===n.length&&r.every((b,s)=>b===n[s])?r:(w.current=n,n)},[u]),S=((A=u.find(n=>!n.disabled))==null?void 0:A.value)??P[0]??"",[k,v]=Xe({value:a,defaultValue:l??S}),f=P.includes(k)?k:S,T=o.useRef(new Map),x=o.useCallback((n,r)=>{r?T.current.set(n,r):T.current.delete(n)},[]),g=o.useCallback(n=>T.current.get(n)??null,[]),{overflow:y,hasOverflow:E}=rt({items:P,containerRef:m,getItemElement:g,activeItem:f||null,reserve:dt}),O=o.useCallback((n,r,b)=>{r!==f&&(v(r),h==null||h(n,r,b))},[h,f,v]),B=o.useRef(null);o.useEffect(()=>{const n=B.current;if(n===null)return;const r=T.current.get(n);!r||y.includes(n)||(B.current=null,r.focus())},[y,f]);const I=o.useCallback(n=>{const r=u.filter(V=>!V.disabled).map(V=>V.value);if(r.length===0)return;const b=Math.max(0,r.indexOf(f));let s;switch(n.key){case"ArrowRight":s=(b+1)%r.length;break;case"ArrowLeft":s=(b-1+r.length)%r.length;break;case"Home":s=0;break;case"End":s=r.length-1;break;default:return}n.preventDefault();const i=r[s];if(i===void 0)return;O(n,i,"clicked-on-tab");const j=T.current.get(i);j&&!y.includes(i)?j.focus():B.current=i},[y,O,f,u]),_=o.useMemo(()=>y.map(n=>u.find(r=>r.value===n)).filter(n=>!!n),[y,u]);return{hasOverflow:E,onTabKeyDown:I,overflowTabs:_,overflowValues:y,registerTabElement:x,selectTab:O,selectedValue:f,tabs:u}},C=t=>{const{children:a,value:l,defaultValue:h,onChange:m,unmountInactive:u=!1,"aria-label":w,"aria-labelledby":P,...S}=t,[k,v]=X(S),f=o.useRef(null),T=o.useId(),[x,g]=o.useState(!1),{hasOverflow:y,onTabKeyDown:E,overflowTabs:O,overflowValues:B,registerTabElement:I,selectTab:_,selectedValue:A}=ut({children:a,value:l,defaultValue:h,onChange:m,listRef:f}),n=o.useMemo(()=>Ie(),[]),[r,b]=o.useMemo(()=>{const i=[],j=[];return o.Children.forEach(a,V=>{Le(V)===G.tab?i.push(V):j.push(V)}),[i,j]},[a]),s=o.useMemo(()=>({classes:n,getPanelId:i=>`${T}-panel-${i}`,getTabId:i=>`${T}-tab-${i}`,onTabKeyDown:E,overflowValues:B,registerTabElement:I,selectTab:_,selectedValue:A,unmountInactive:u}),[T,n,E,B,I,_,A,u]);return e.jsx(ot,{value:s,children:e.jsxs(R,{...Ke("Tabs"),className:Z(n.root,k),...v,children:[e.jsxs(R,{ref:f,role:"tablist","aria-label":w,"aria-labelledby":P,"aria-orientation":"horizontal",className:n.list,children:[r,y&&e.jsx(R,{className:n.overflow,children:e.jsx(Ye,{open:x,onOpenChange:g,placement:"bottom-end",className:n.menu,trigger:e.jsx(Qe,{variant:"ghost",size:"md",iconName:x?"caret-up":"caret-down",altText:"More tabs","aria-haspopup":"menu"}),children:O.map(i=>e.jsx(Je,{label:i.label,disabled:i.disabled,selected:i.value===A,onClick:j=>{_(j,i.value,"selected-from-overflow"),g(!1)}},i.value))})})]}),b]})})};C.__docgenInfo={description:'Groups related content into a single view with one panel visible at a time.\n\nCompose it from `Tab` and `TabPanel` children; the first enabled `Tab` is\nselected by default. Selection is uncontrolled with `defaultValue` or\ncontrolled with `value` plus `onChange`. Tabs that do not fit the available width move into\nan overflow menu at the end of the strip, and the selected tab always stays\nvisible. Every panel stays mounted and hidden unless `unmountInactive` is\nset, so read `useTabPanelActive()` to pause work in a hidden panel.\n\nThe strip renders a `tablist` with roving tabindex and Arrow, Home, and End\nnavigation. Supply `aria-label` or `aria-labelledby` so it is announced.\n\n@example\n```tsx\n<Tabs defaultValue="work" aria-label="Order sections">\n  <Tab value="work">Work</Tab>\n  <Tab value="materials" badge={3}>Materials</Tab>\n  <TabPanel value="work">Work content</TabPanel>\n  <TabPanel value="materials">Materials content</TabPanel>\n</Tabs>\n```',methods:[],displayName:"Tabs",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"`Tab` and `TabPanel` children. Tab order in the strip follows source order."},value:{required:!1,tsType:{name:"string"},description:"Controlled selected tab `value`. Pair with `onChange`; omit it to use `defaultValue`."},defaultValue:{required:!1,tsType:{name:"string"},description:"Initially selected tab `value` when `value` is not provided. It is used\nonly on first render.\n@default the first `Tab` child's `value`"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  event: TabsChangeEvent,
  value: string,
  reason: TabsChangeReason,
) => void`,signature:{arguments:[{type:{name:"union",raw:`| ReactMouseEvent<HTMLElement>
| ReactKeyboardEvent<HTMLElement>`,elements:[{name:"ReactMouseEvent",elements:[{name:"HTMLElement"}],raw:"ReactMouseEvent<HTMLElement>"},{name:"ReactKeyboardEvent",elements:[{name:"HTMLElement"}],raw:"ReactKeyboardEvent<HTMLElement>"}]},name:"event"},{type:{name:"string"},name:"value"},{type:{name:"union",raw:"'clicked-on-tab' | 'selected-from-overflow'",elements:[{name:"literal",value:"'clicked-on-tab'"},{name:"literal",value:"'selected-from-overflow'"}]},name:"reason"}],return:{name:"void"}}},description:"Runs when user interaction selects a different tab."},unmountInactive:{required:!1,tsType:{name:"boolean"},description:"Renders only the selected `TabPanel`. By default every panel stays mounted\nand inactive panels are hidden with `display: none`, which preserves their\nscroll position and local state.\n@default false"},"aria-label":{required:!1,tsType:{name:"string"},description:"Accessible name for the tab strip. Provide this or `aria-labelledby` so the\n`tablist` is announced."},"aria-labelledby":{required:!1,tsType:{name:"string"},description:"Id of an element that labels the tab strip."}}};const Lt={title:"Components/Tabs",component:C,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:["Tabs keep every `TabPanel` mounted by default and hide the inactive","ones with `display: none`. That preserves scroll position, form","drafts, and grid state when a user moves between tabs, at the cost","of keeping hidden work alive. Hidden panels receive an `isActive`","signal — as a render-prop argument or through `useTabPanelActive()`","— so polling, timers, and animation can pause themselves. Set","`unmountInactive` when a panel is expensive enough that discarding","its state is the better trade."].join(" ")}}},args:{"aria-label":"Example sections",children:null}},W={render:t=>e.jsxs(C,{...t,defaultValue:"overview",children:[e.jsx(d,{value:"overview",children:"Overview"}),e.jsx(d,{value:"activity",children:"Activity"}),e.jsx(d,{value:"settings",children:"Settings"}),e.jsx(p,{value:"overview",children:e.jsx(c,{py:"16",children:"Summary of the current record."})}),e.jsx(p,{value:"activity",children:e.jsx(c,{py:"16",children:"Recent activity for the current record."})}),e.jsx(p,{value:"settings",children:e.jsx(c,{py:"16",children:"Settings for the current record."})})]})},L={name:"Badges",parameters:{controls:{disable:!0}},render:t=>e.jsxs(C,{...t,defaultValue:"work",children:[e.jsx(d,{value:"work",children:"Work"}),e.jsx(d,{value:"materials",badge:3,badgeTooltip:"2 Open Part Request, 1 Short Part(s)",children:"Materials"}),e.jsx(d,{value:"status",badge:12,children:"Status"}),e.jsx(d,{value:"documents",badge:0,children:"Documents"}),e.jsx(p,{value:"work",children:e.jsx(c,{py:"16",children:"A badge without a tooltip is a bare count."})}),e.jsx(p,{value:"materials",children:e.jsx(c,{py:"16",children:"Hover or focus the Materials badge to read what the count means."})}),e.jsx(p,{value:"status",children:e.jsx(c,{py:"16",children:"Status content."})}),e.jsx(p,{value:"documents",children:e.jsx(c,{py:"16",children:"A zero count renders no badge at all."})})]})},re=["Work","Info","Materials","Status","Documents","History","Labor","Quality","Shipping","Invoicing","Costing","Notes"],N={name:"Overflow",parameters:{controls:{disable:!0}},render:t=>e.jsxs(R,{resize:"horizontal",overflow:"auto",width:"lg",maxWidth:"full",minWidth:"240",borderWidth:"1",borderStyle:"dashed",borderColor:"border",p:"16",children:[e.jsx(c,{pb:"12",color:"text.subtlest",children:"Drag the bottom-right corner. Tabs nearest the selected one keep their place; the rest move into the overflow menu."}),e.jsxs(C,{...t,defaultValue:"work",children:[re.map(a=>e.jsx(d,{value:a.toLowerCase(),children:a},a)),re.map(a=>e.jsx(p,{value:a.toLowerCase(),children:e.jsxs(c,{py:"16",children:[a," content."]})},a))]})]})},le=[{value:"work",label:"Work",icon:"wrench-2"},{value:"materials",label:"Materials",icon:"cube-focus"},{value:"schedule",label:"Schedule",icon:"calendar-view-week"},{value:"shipping",label:"Shipping",icon:"truck-trailer"},{value:"quality",label:"Quality",icon:"list-checks"},{value:"history",label:"History",icon:"clock-countdown"},{value:"notes",label:"Notes",icon:"note-stack"}],H={name:"Label Override for Overflow",parameters:{controls:{disable:!0}},render:t=>e.jsxs(R,{width:"md",maxWidth:"full",children:[e.jsx(c,{pb:"12",color:"text.subtlest",children:"These tabs render an icon beside their text, so flattening `children` would produce a poor menu row. Each one passes `label`, and the overflow menu uses that text. The strip still renders `children` as-is."}),e.jsxs(C,{...t,defaultValue:"work",children:[le.map(a=>e.jsxs(d,{value:a.value,label:a.label,children:[e.jsx(Ge,{name:a.icon,"aria-hidden":!0}),a.label]},a.value)),le.map(a=>e.jsx(p,{value:a.value,children:e.jsxs(c,{py:"16",children:[a.label," content."]})},a.value))]})]})},q={name:"Unmount Inactive Panels",parameters:{controls:{disable:!0}},render:t=>e.jsxs(C,{...t,defaultValue:"first",unmountInactive:!0,children:[e.jsx(d,{value:"first",children:"First"}),e.jsx(d,{value:"second",children:"Second"}),e.jsx(p,{value:"first",children:e.jsx(c,{py:"16",children:"Only this panel exists in the DOM while it is selected."})}),e.jsx(p,{value:"second",children:e.jsx(c,{py:"16",children:"Switching tabs unmounts the other panel and discards its state."})})]})},bt=()=>{const[t,a]=o.useState(!0),[l,h]=o.useState("none yet");return e.jsxs(R,{children:[e.jsx(R,{pb:"12",children:e.jsx($e,{variant:"hollow",size:"sm",onClick:()=>a(m=>!m),children:t?"Remove Schedule tab":"Add Schedule tab"})}),e.jsxs(C,{"aria-label":"Work order sections",defaultValue:"work",onChange:(m,u,w)=>h(`${u} (${w})`),children:[e.jsx(d,{value:"work",children:"Work"}),e.jsx(d,{value:"info",children:"Info"}),e.jsx(d,{value:"materials",badge:3,badgeTooltip:"2 Open Part Request, 1 Short Part(s)",children:"Materials"}),e.jsx(d,{value:"status",badge:5,badgeTooltip:"5 Operations Behind",children:"Status"}),t?e.jsx(d,{value:"schedule",children:"Schedule"}):null,e.jsx(d,{value:"documents",children:"Documents"}),e.jsx(d,{value:"history",children:"History"}),e.jsx(p,{value:"work",children:e.jsx(c,{py:"16",children:"Work instructions and operations."})}),e.jsx(p,{value:"info",children:e.jsx(c,{py:"16",children:"Order header and customer details."})}),e.jsx(p,{value:"materials",children:e.jsx(c,{py:"16",children:"Bill of materials and part requests."})}),e.jsx(p,{value:"status",children:e.jsx(c,{py:"16",children:"Operation status roll-up."})}),e.jsx(p,{value:"schedule",children:({isActive:m})=>e.jsxs(c,{py:"16",children:["Schedule board. Live refresh is ",m?"running":"paused",". Select this tab, remove it with the button above, and the strip falls back to the first remaining tab."]})}),e.jsx(p,{value:"documents",children:e.jsx(c,{py:"16",children:"Attached drawings and travelers."})}),e.jsx(p,{value:"history",children:e.jsx(c,{py:"16",children:"Audit trail."})})]}),e.jsxs(c,{pt:"16",color:"text.subtlest",children:["Last change: ",l]})]})},F={name:"Ex: Work View",parameters:{controls:{disable:!0}},render:()=>e.jsx(bt,{})},D={name:"Test: disabled first tab is not the default",parameters:{controls:{disable:!0}},render:t=>e.jsxs(R,{children:[e.jsx(c,{pb:"12",color:"text.subtlest",children:"No `defaultValue` is given and the first tab is disabled. The strip selects the first enabled tab so the keyboard can still enter it."}),e.jsxs(C,{...t,children:[e.jsx(d,{value:"archived",disabled:!0,children:"Archived"}),e.jsx(d,{value:"open",children:"Open"}),e.jsx(d,{value:"closed",children:"Closed"}),e.jsx(p,{value:"archived",children:e.jsx(c,{py:"16",children:"Archived content."})}),e.jsx(p,{value:"open",children:e.jsx(c,{py:"16",children:"Open content."})}),e.jsx(p,{value:"closed",children:e.jsx(c,{py:"16",children:"Closed content."})})]})]}),play:async({canvasElement:t})=>{const a=J(t),l=a.getByRole("tab",{name:"Open"});await M(l).toHaveAttribute("aria-selected","true"),await M(l).toHaveAttribute("tabindex","0"),await M(a.getByRole("tab",{name:"Archived"})).toHaveAttribute("aria-selected","false"),await Ne.tab(),await M(l).toHaveFocus()}},z={name:"Test: badge does not change tab height",parameters:{controls:{disable:!0}},render:t=>e.jsxs(R,{display:"flex",flexDirection:"column",gap:"16",children:[e.jsx(c,{color:"text.subtlest",children:"Both strips are 40px tall. The 20px badge sits inside the 22px line box and never grows the tab. Matches Figma `_TabsTab`."}),e.jsxs(C,{...t,"aria-label":"Without badges",defaultValue:"work",children:[e.jsx(d,{value:"work",children:"Work"}),e.jsx(d,{value:"materials",children:"Materials"})]}),e.jsxs(C,{...t,"aria-label":"With badges",defaultValue:"work",children:[e.jsx(d,{value:"work",badge:3,children:"Work"}),e.jsx(d,{value:"materials",badge:12,badgeTooltip:"12 Short Part(s)",children:"Materials"})]})]}),play:async({canvasElement:t})=>{const a=J(t),[l,h]=a.getAllByRole("tablist");await M(h==null?void 0:h.offsetHeight).toBe(l==null?void 0:l.offsetHeight);for(const m of a.getAllByRole("tab"))await M(m.offsetHeight).toBe(40)}},K=["Work","Info","Materials","Status"],$={name:"Test: toggle space is reserved only once tabs overflow",parameters:{controls:{disable:!0}},render:t=>e.jsxs(R,{children:[e.jsx(c,{pb:"12",color:"text.subtlest",children:"The wrapper is sized to the strip plus 16px, which is less than the 32px toggle reserve. Every tab fits, so no toggle renders. Shrinking it below the strip makes the toggle appear."}),e.jsx(R,{"data-fit-wrapper":!0,borderWidth:"1",borderStyle:"dashed",borderColor:"border",children:e.jsxs(C,{...t,defaultValue:"work",children:[K.map(a=>e.jsx(d,{value:a.toLowerCase(),children:a},a)),K.map(a=>e.jsx(p,{value:a.toLowerCase(),children:e.jsxs(c,{py:"16",children:[a," content."]})},a))]})})]}),play:async({canvasElement:t})=>{const a=J(t),l=t.querySelector("[data-fit-wrapper]"),h=a.getByRole("tablist"),m=a.getAllByRole("tab");if(!l)throw new Error("wrapper not found");const u=Number.parseFloat(getComputedStyle(h).columnGap)||0,w=m.reduce((P,S)=>P+S.getBoundingClientRect().width,0)+u*(m.length-1);l.style.width=`${String(Math.ceil(w)+16)}px`,await ae(async()=>{await M(a.getAllByRole("tab")).toHaveLength(K.length),await M(a.queryByRole("button",{name:"More tabs"})).not.toBeInTheDocument()}),l.style.width=`${String(Math.floor(w)-8)}px`,await ae(async()=>{await M(a.getByRole("button",{name:"More tabs"})).toBeInTheDocument(),await M(a.getAllByRole("tab").length).toBeLessThan(K.length)})}};var oe,ie,ce;W.parameters={...W.parameters,docs:{...(oe=W.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ce=(ie=W.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var de,ue,be;L.parameters={...L.parameters,docs:{...(de=L.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(be=(ue=L.parameters)==null?void 0:ue.docs)==null?void 0:be.source}}};var pe,he,me;N.parameters={...N.parameters,docs:{...(pe=N.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(me=(he=N.parameters)==null?void 0:he.docs)==null?void 0:me.source}}};var ve,fe,Te;H.parameters={...H.parameters,docs:{...(ve=H.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(Te=(fe=H.parameters)==null?void 0:fe.docs)==null?void 0:Te.source}}};var ge,xe,we;q.parameters={...q.parameters,docs:{...(ge=q.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(we=(xe=q.parameters)==null?void 0:xe.docs)==null?void 0:we.source}}};var ye,je,ke;F.parameters={...F.parameters,docs:{...(ye=F.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  name: 'Ex: Work View',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <WorkView />
}`,...(ke=(je=F.parameters)==null?void 0:je.docs)==null?void 0:ke.source}}};var Pe,Se,Be;D.parameters={...D.parameters,docs:{...(Pe=D.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
}`,...(Be=(Se=D.parameters)==null?void 0:Se.docs)==null?void 0:Be.source}}};var Re,Ee,Oe;z.parameters={...z.parameters,docs:{...(Re=z.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(Oe=(Ee=z.parameters)==null?void 0:Ee.docs)==null?void 0:Oe.source}}};var Ae,Ce,Ve;$.parameters={...$.parameters,docs:{...(Ae=$.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  name: 'Test: toggle space is reserved only once tabs overflow',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: args => <Box>
      <Text pb="12" color="text.subtlest">
        The wrapper is sized to the strip plus 16px, which is less than the 32px
        toggle reserve. Every tab fits, so no toggle renders. Shrinking it below
        the strip makes the toggle appear.
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

    // Room for every tab, but not for the 32px toggle on top of them.
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
}`,...(Ve=(Ce=$.parameters)==null?void 0:Ce.docs)==null?void 0:Ve.source}}};const Nt=["Default","WithBadges","Overflow","LabelOverride","UnmountInactive","ExWorkView","DisabledFirstTab","BadgeKeepsHeight","ToggleReserveOnlyOnOverflow"];export{z as BadgeKeepsHeight,W as Default,D as DisabledFirstTab,F as ExWorkView,H as LabelOverride,N as Overflow,$ as ToggleReserveOnlyOnOverflow,q as UnmountInactive,L as WithBadges,Nt as __namedExportsOrder,Lt as default};
