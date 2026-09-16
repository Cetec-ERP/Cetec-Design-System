import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r}from"./index-BKyFwriW.js";import{w as Y,e as C,u as Le,a as ee}from"./index-L8OlCEhE.js";import{m as Ge,a as Ue,b as Qe,e as Ye,g as Je,s as ae,B as y,c as ne,d as Xe}from"./dsComponent-D6ec2IT1.js";import{B as Fe}from"./Button-CxuwUgmn.js";import{I as Ze}from"./Icon-12cJPaFt.js";import"./IconConfig-D3dlgfBK.js";import{T as d}from"./Text-B_2f_EK_.js";import{B as le}from"./Badge-BvX3YtqQ.js";import{T as et}from"./Tooltip-B2qdbzWM.js";import{I as tt}from"./IconButton-Ejppkgu9.js";import{M as at,a as nt}from"./SubMenu-CoIqOaF-.js";import{u as st}from"./useControllableState-ByGfjEIG.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Spinner-DHR4yZCu.js";import"./FieldContext-D6URyQos.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";import"./HighlightText-C2YgeQru.js";import"./menu-Dss0HtpH.js";import"./FloatingLayerContext-BryH8O9I.js";import"./ListItemGroup-D2CslpwH.js";import"./Divider-CFbTUo5C.js";import"./Checkbox-BJA-hWE7.js";import"./Toggle-CiPJs3Y-.js";const qe={},rt=[],lt=[["root","tabs__root"],["strip","tabs__strip"],["list","tabs__list"],["tab","tabs__tab"],["badge","tabs__badge"],["overflow","tabs__overflow"],["menu","tabs__menu"],["panel","tabs__panel"]],ot=lt.map(([t,a])=>[t,Ye(a,qe,Je(rt,t))]),it=Ge((t={})=>Object.fromEntries(ot.map(([a,l])=>[a,l.recipeFn(t)]))),oe=["overflowed"],ct=t=>({...qe,...Ue(t)}),De=Object.assign(it,{__recipe__:!1,__name__:"tabs",raw:t=>t,classNameMap:{},variantKeys:oe,variantMap:{overflowed:["true"]},splitVariantProps(t){return Qe(t,oe)},getVariantProps:ct}),dt=32,Z=(t,a)=>t.length===a.length&&t.every((l,c)=>l===a[c]),ut=({items:t,containerRef:a,getItemElement:l,activeItem:c=null,reserve:h=dt,enabled:u=!0})=>{const[j,g]=r.useState(()=>[...t]),[T,k]=r.useState([]),f=r.useRef(null),P=r.useCallback(()=>{const x=a.current;if(!u||!x){g(o=>Z(o,t)?o:[...t]),k(o=>o.length===0?o:[]);return}const p=globalThis.getComputedStyle(x),m=Number.parseFloat(p.paddingLeft||"0")+Number.parseFloat(p.paddingRight||"0"),B=Number.parseFloat(p.columnGap||"0")||0,O=x.clientWidth-m,M=t.map(o=>{var n;return((n=l(o))==null?void 0:n.offsetWidth)??Number.POSITIVE_INFINITY}),w=c===null?-1:t.indexOf(c),W=w===-1?0:w,_=t.map((o,n)=>n).sort((o,n)=>{const s=Math.abs(o-W)-Math.abs(n-W);return s===0?o-n:s}),R=(o,n)=>{const s=new Set;let v=0;o!==null&&(s.add(o),v+=M[o]??0);for(const E of _){if(s.has(E))continue;const H=(M[E]??0)+(s.size>0?B:0);if(v+H>n)break;v+=H,s.add(E)}return s};let V=R(null,O);if(V.size<t.length){const o=O-h-B;V=R(null,o),w!==-1&&!V.has(w)&&(V=R(w,o))}const S=[],I=[];t.forEach((o,n)=>{V.has(n)?S.push(o):I.push(o)}),g(o=>Z(o,S)?o:S),k(o=>Z(o,I)?o:I)},[c,a,u,l,t,h]);return r.useLayoutEffect(()=>{const x=a.current,p=()=>{f.current!==null&&globalThis.cancelAnimationFrame(f.current),f.current=globalThis.requestAnimationFrame(()=>{f.current=null,P()})};if(P(),!u||!x)return()=>{f.current!==null&&(globalThis.cancelAnimationFrame(f.current),f.current=null)};const m=typeof ResizeObserver>"u"?null:new ResizeObserver(p);m==null||m.observe(x);for(const B of t){const O=l(B);O&&(m==null||m.observe(O))}return globalThis.addEventListener("resize",p),()=>{m==null||m.disconnect(),globalThis.removeEventListener("resize",p),f.current!==null&&(globalThis.cancelAnimationFrame(f.current),f.current=null)}},[a,u,l,t,P]),{visible:j,overflow:T,hasOverflow:T.length>0,measure:P}},ze=r.createContext(null),bt=r.createContext(!0),ht=ze.Provider,pt=bt.Provider,Ke=()=>{const t=r.useContext(ze);if(!t)throw new Error("Tabs compound components must be used within <Tabs />");return t},J={tab:"Tab",panel:"TabPanel"},se="__tabsComponentType",$e=t=>{if(!t||typeof t!="object"||!("type"in t))return null;const a=t.type;return(a==null?void 0:a[se])??null},mt=De({overflowed:!0}).tab,i=t=>{const{value:a,children:l,label:c,badge:h,badgeTooltip:u,disabled:j=!1,...g}=t,{classes:T,getPanelId:k,getTabId:f,onTabKeyDown:P,overflowValues:x,registerTabElement:p,selectTab:m,selectedValue:B}=Ke(),O=B===a,M=x.includes(a),[w,W]=ae(g),_=r.useCallback(I=>{p(a,I)},[p,a]),R=M?mt:T.tab,S=typeof h=="number"&&h!==0?e.jsx(y,{className:T.badge,children:u?e.jsx(et,{text:u,children:e.jsx(le,{count:h,variant:"subtle"})}):e.jsx(le,{count:h,variant:"subtle"})}):null;return e.jsxs(y,{as:"button",type:"button",ref:_,id:f(a),role:"tab","aria-selected":O,"aria-controls":k(a),"aria-hidden":M||void 0,disabled:j,tabIndex:O&&!M?0:-1,className:ne(R,w),onClick:I=>{j||m(I,a,"clicked-on-tab")},onKeyDown:P,...W,children:[l,S]})};i[se]=J.tab;i.__docgenInfo={description:'Selects one panel inside a {@link Tabs} strip.\n\nRenders a `button` with `role="tab"`. Only the selected tab is in the tab\norder; Arrow, Home, and End move between the others. A tab that does not fit\nthe strip stays mounted but hidden so it can still be measured, and it is\noffered in the overflow menu instead. The menu row is plain text, so give\n`label` when `children` are not plain text.\n\n@example\n```tsx\n<Tab value="materials" badge={3} badgeTooltip="2 Open Part Request">\n  Materials\n</Tab>\n```',methods:[],displayName:"Tab",props:{value:{required:!0,tsType:{name:"string"},description:"Identifies the tab and the `TabPanel` it controls. Must be unique within a `Tabs`."},children:{required:!1,tsType:{name:"ReactNode"},description:"Visible label rendered in the strip. Plain text is also reused as the overflow-menu row's text unless `label` overrides it."},label:{required:!1,tsType:{name:"string"},description:"Plain-text name for this tab's overflow-menu row, which cannot render\nmarkup. Set it when `children` contain more than text — an icon, a nested\nelement — because flattening those to a string reads badly. It never\nchanges what the strip renders: `children` still render there as-is.\nWithout it the menu row falls back to the flattened `children`, then to\n`value`."},badge:{required:!1,tsType:{name:"number"},description:"Count shown in a trailing {@link Badge}. A zero or omitted count renders no badge."},badgeTooltip:{required:!1,tsType:{name:"string"},description:"Tooltip text describing what the badge counts. Requires `badge`."},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents selection and skips the tab during arrow-key navigation."}}};const b=t=>{const{value:a,children:l,...c}=t,{classes:h,getPanelId:u,getTabId:j,selectedValue:g,unmountInactive:T}=Ke(),k=g===a,[f,P]=ae(c);if(T&&!k)return null;const p=typeof l=="function"?l({isActive:k}):l;return e.jsx(pt,{value:k,children:e.jsx(y,{id:u(a),role:"tabpanel","aria-labelledby":j(a),tabIndex:k?0:-1,display:k?"block":"none",className:ne(h.panel,f),...P,children:p})})};b[se]=J.panel;b.__docgenInfo={description:'Renders the content for one {@link Tab}.\n\nThe panel stays mounted when another tab is selected and is hidden with\n`display: none`, which preserves scroll position and local state; set\n`unmountInactive` on `Tabs` to render only the selected panel instead. A\nfunction child receives `{ isActive }`, and descendants can call\n`useTabPanelActive()` for the same signal, so hidden panels can pause polling\nor animation.\n\n@example\n```tsx\n<TabPanel value="materials">\n  {({ isActive }) => <MaterialsGrid paused={!isActive} />}\n</TabPanel>\n```',methods:[],displayName:"TabPanel",props:{value:{required:!0,tsType:{name:"string"},description:"`value` of the {@link Tab} this panel belongs to."},children:{required:!1,tsType:{name:"union",raw:"ReactNode | ((props: TabPanelRenderProps) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:"Panel content. A function child receives `{ isActive }` so expensive work\ncan pause while the panel is mounted but hidden."}}};const vt=32,te=t=>t==null||typeof t=="boolean"?"":typeof t=="string"||typeof t=="number"?String(t):Array.isArray(t)?t.map(a=>te(a)).join(""):r.isValidElement(t)?te(t.props.children):"",ft=({children:t,value:a,defaultValue:l,onChange:c,listRef:h})=>{var o;const u=r.useMemo(()=>{const n=[];return r.Children.forEach(t,s=>{if(!r.isValidElement(s)||$e(s)!==J.tab)return;const v=s.props;typeof v.value=="string"&&n.push({value:v.value,label:v.label||te(v.children)||v.value,disabled:!!v.disabled})}),n},[t]),j=r.useMemo(()=>u.map(n=>n.value),[u]),g=((o=u.find(n=>!n.disabled))==null?void 0:o.value)??"",[T,k,f]=st({value:a,defaultValue:l??g}),P=u.find(n=>n.value===T),x=!!(P&&!P.disabled),p=x?T:g,m=r.useRef(null);r.useEffect(()=>{if(!f||x||g===""){m.current=null;return}const n=`${T}\0${g}`;m.current!==n&&(m.current=n,c==null||c(null,g,"fallback-after-removal"))},[g,f,x,c,T]);const B=r.useRef(new Map),O=r.useCallback((n,s)=>{s?B.current.set(n,s):B.current.delete(n)},[]),M=r.useCallback(n=>B.current.get(n)??null,[]),{overflow:w,hasOverflow:W}=ut({items:j,containerRef:h,getItemElement:M,activeItem:p||null,reserve:vt}),_=r.useCallback((n,s,v)=>{s!==T&&(k(s),c==null||c(n,s,v))},[c,k,T]),R=r.useRef(null),V=r.useCallback(n=>{R.current=n},[]);r.useEffect(()=>{const n=R.current;if(n===null)return;const s=B.current.get(n);!s||w.includes(n)||(R.current=null,s.focus())},[w,p]);const S=r.useCallback(n=>{const s=u.filter(X=>!X.disabled).map(X=>X.value);if(s.length===0)return;const v=Math.max(0,s.indexOf(p));let E;switch(n.key){case"ArrowRight":E=(v+1)%s.length;break;case"ArrowLeft":E=(v-1+s.length)%s.length;break;case"Home":E=0;break;case"End":E=s.length-1;break;default:return}n.preventDefault();const H=s[E];if(H===void 0)return;_(n,H,"clicked-on-tab");const re=B.current.get(H);re&&!w.includes(H)?re.focus():R.current=H},[w,_,p,u]),I=r.useMemo(()=>w.map(n=>u.find(s=>s.value===n)).filter(n=>!!n),[w,u]);return{hasOverflow:W,focusTab:V,onTabKeyDown:S,overflowTabs:I,overflowValues:w,registerTabElement:O,selectTab:_,selectedValue:p,tabs:u}},A=t=>{const{children:a,value:l,defaultValue:c,onChange:h,unmountInactive:u=!1,"aria-label":j,"aria-labelledby":g,...T}=t,[k,f]=ae(T),P=r.useRef(null),x=r.useId(),[p,m]=r.useState(!1),{focusTab:B,hasOverflow:O,onTabKeyDown:M,overflowTabs:w,overflowValues:W,registerTabElement:_,selectTab:R,selectedValue:V}=ft({children:a,value:l,defaultValue:c,onChange:h,listRef:P}),S=r.useMemo(()=>De(),[]),[I,o]=r.useMemo(()=>{const s=[],v=[];return r.Children.forEach(a,E=>{$e(E)===J.tab?s.push(E):v.push(E)}),[s,v]},[a]),n=r.useMemo(()=>({classes:S,getPanelId:s=>`${x}-panel-${s}`,getTabId:s=>`${x}-tab-${s}`,onTabKeyDown:M,overflowValues:W,registerTabElement:_,selectTab:R,selectedValue:V,unmountInactive:u}),[x,S,M,W,_,R,V,u]);return e.jsx(ht,{value:n,children:e.jsxs(y,{...Xe("Tabs"),className:ne(S.root,k),...f,children:[e.jsxs(y,{className:S.strip,children:[e.jsx(y,{ref:P,role:"tablist","aria-label":j,"aria-labelledby":g,"aria-orientation":"horizontal",className:S.list,children:I}),O&&e.jsx(y,{className:S.overflow,children:e.jsx(at,{open:p,onOpenChange:m,placement:"bottom-end",className:S.menu,trigger:e.jsx(tt,{variant:"ghost",size:"md",iconName:p?"caret-up":"caret-down",altText:"More tabs","aria-haspopup":"menu"}),children:w.map(s=>e.jsx(nt,{label:s.label,disabled:s.disabled,selected:s.value===V,onClick:v=>{B(s.value),R(v,s.value,"selected-from-overflow"),m(!1)}},s.value))})})]}),o]})})};A.__docgenInfo={description:'Groups related content into a single view with one panel visible at a time.\n\nCompose it from `Tab` and `TabPanel` children; the first enabled `Tab` is\nselected by default. Selection is uncontrolled with `defaultValue` or\ncontrolled with `value` plus `onChange`. Tabs that do not fit the available width move into\nan overflow menu at the end of the strip, and the selected tab always stays\nvisible. Every panel stays mounted and hidden unless `unmountInactive` is\nset, so read `useTabPanelActive()` to pause work in a hidden panel.\n\nThe strip renders a `tablist` with roving tabindex and Arrow, Home, and End\nnavigation. Supply `aria-label` or `aria-labelledby` so it is announced.\n\n@example\n```tsx\n<Tabs defaultValue="work" aria-label="Order sections">\n  <Tab value="work">Work</Tab>\n  <Tab value="materials" badge={3}>Materials</Tab>\n  <TabPanel value="work">Work content</TabPanel>\n  <TabPanel value="materials">Materials content</TabPanel>\n</Tabs>\n```',methods:[],displayName:"Tabs",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"`Tab` and `TabPanel` children. Tab order in the strip follows source order."},value:{required:!1,tsType:{name:"string"},description:"Controlled selected tab `value`. Pair with `onChange`; omit it to use `defaultValue`."},defaultValue:{required:!1,tsType:{name:"string"},description:"Initially selected tab `value` when `value` is not provided. It is used\nonly on first render.\n@default the first `Tab` child's `value`"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  event: TabsChangeEvent,
  value: string,
  reason: TabsChangeReason,
) => void`,signature:{arguments:[{type:{name:"union",raw:`| ReactMouseEvent<HTMLElement>
| ReactKeyboardEvent<HTMLElement>
| null`,elements:[{name:"ReactMouseEvent",elements:[{name:"HTMLElement"}],raw:"ReactMouseEvent<HTMLElement>"},{name:"ReactKeyboardEvent",elements:[{name:"HTMLElement"}],raw:"ReactKeyboardEvent<HTMLElement>"},{name:"null"}]},name:"event"},{type:{name:"string"},name:"value"},{type:{name:"union",raw:`| 'clicked-on-tab'
| 'selected-from-overflow'
| 'fallback-after-removal'`,elements:[{name:"literal",value:"'clicked-on-tab'"},{name:"literal",value:"'selected-from-overflow'"},{name:"literal",value:"'fallback-after-removal'"}]},name:"reason"}],return:{name:"void"}}},description:"Runs when user interaction selects a different tab."},unmountInactive:{required:!1,tsType:{name:"boolean"},description:"Renders only the selected `TabPanel`. By default every panel stays mounted\nand inactive panels are hidden with `display: none`, which preserves their\nscroll position and local state.\n@default false"},"aria-label":{required:!1,tsType:{name:"string"},description:"Accessible name for the tab strip. Provide this or `aria-labelledby` so the\n`tablist` is announced."},"aria-labelledby":{required:!1,tsType:{name:"string"},description:"Id of an element that labels the tab strip."}}};const Kt={title:"Components/Tabs",component:A,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:["Tabs keep every `TabPanel` mounted by default and hide the inactive","ones with `display: none`. That preserves scroll position, form","drafts, and grid state when a user moves between tabs, at the cost","of keeping hidden work alive. Hidden panels receive an `isActive`","signal — as a render-prop argument or through `useTabPanelActive()`","— so polling, timers, and animation can pause themselves. Set","`unmountInactive` when a panel is expensive enough that discarding","its state is the better trade."].join(" ")}}},args:{"aria-label":"Example sections",children:null}},N={render:t=>e.jsxs(A,{...t,defaultValue:"overview",children:[e.jsx(i,{value:"overview",children:"Overview"}),e.jsx(i,{value:"activity",children:"Activity"}),e.jsx(i,{value:"settings",children:"Settings"}),e.jsx(b,{value:"overview",children:e.jsx(d,{py:"16",children:"Summary of the current record."})}),e.jsx(b,{value:"activity",children:e.jsx(d,{py:"16",children:"Recent activity for the current record."})}),e.jsx(b,{value:"settings",children:e.jsx(d,{py:"16",children:"Settings for the current record."})})]})},L={name:"Badges",parameters:{controls:{disable:!0}},render:t=>e.jsxs(A,{...t,defaultValue:"work",children:[e.jsx(i,{value:"work",children:"Work"}),e.jsx(i,{value:"materials",badge:3,badgeTooltip:"2 Open Part Request, 1 Short Part(s)",children:"Materials"}),e.jsx(i,{value:"status",badge:12,children:"Status"}),e.jsx(i,{value:"documents",badge:0,children:"Documents"}),e.jsx(b,{value:"work",children:e.jsx(d,{py:"16",children:"A badge without a tooltip is a bare count."})}),e.jsx(b,{value:"materials",children:e.jsx(d,{py:"16",children:"Hover or focus the Materials badge to read what the count means."})}),e.jsx(b,{value:"status",children:e.jsx(d,{py:"16",children:"Status content."})}),e.jsx(b,{value:"documents",children:e.jsx(d,{py:"16",children:"A zero count renders no badge at all."})})]})},ie=["Work","Info","Materials","Status","Documents","History","Labor","Quality","Shipping","Invoicing","Costing","Notes"],F={name:"Overflow",parameters:{controls:{disable:!0}},render:t=>e.jsxs(y,{resize:"horizontal",overflow:"auto",width:"lg",maxWidth:"full",minWidth:"240",borderWidth:"1",borderStyle:"dashed",borderColor:"border",p:"16",children:[e.jsx(d,{pb:"12",color:"text.subtlest",children:"Drag the bottom-right corner. Tabs nearest the selected one keep their place; the rest move into the overflow menu."}),e.jsxs(A,{...t,defaultValue:"work",children:[ie.map(a=>e.jsx(i,{value:a.toLowerCase(),children:a},a)),ie.map(a=>e.jsx(b,{value:a.toLowerCase(),children:e.jsxs(d,{py:"16",children:[a," content."]})},a))]})]})},ce=[{value:"work",label:"Work",icon:"wrench-2"},{value:"materials",label:"Materials",icon:"cube-focus"},{value:"schedule",label:"Schedule",icon:"calendar-view-week"},{value:"shipping",label:"Shipping",icon:"truck-trailer"},{value:"quality",label:"Quality",icon:"list-checks"},{value:"history",label:"History",icon:"clock-countdown"},{value:"notes",label:"Notes",icon:"note-stack"}],q={name:"Label Override for Overflow",parameters:{controls:{disable:!0}},render:t=>e.jsxs(y,{width:"md",maxWidth:"full",children:[e.jsx(d,{pb:"12",color:"text.subtlest",children:"These tabs render an icon beside their text, so flattening `children` would produce a poor menu row. Each one passes `label`, and the overflow menu uses that text. The strip still renders `children` as-is."}),e.jsxs(A,{...t,defaultValue:"work",children:[ce.map(a=>e.jsxs(i,{value:a.value,label:a.label,children:[e.jsx(Ze,{name:a.icon,"aria-hidden":!0}),a.label]},a.value)),ce.map(a=>e.jsx(b,{value:a.value,children:e.jsxs(d,{py:"16",children:[a.label," content."]})},a.value))]})]})},D={name:"Unmount Inactive Panels",parameters:{controls:{disable:!0}},render:t=>e.jsxs(A,{...t,defaultValue:"first",unmountInactive:!0,children:[e.jsx(i,{value:"first",children:"First"}),e.jsx(i,{value:"second",children:"Second"}),e.jsx(b,{value:"first",children:e.jsx(d,{py:"16",children:"Only this panel exists in the DOM while it is selected."})}),e.jsx(b,{value:"second",children:e.jsx(d,{py:"16",children:"Switching tabs unmounts the other panel and discards its state."})})]})},Tt=()=>{const[t,a]=r.useState(!0),[l,c]=r.useState("none yet");return e.jsxs(y,{children:[e.jsx(y,{pb:"12",children:e.jsx(Fe,{variant:"hollow",size:"sm",onClick:()=>a(h=>!h),children:t?"Remove Schedule tab":"Add Schedule tab"})}),e.jsxs(A,{"aria-label":"Work order sections",defaultValue:"work",onChange:(h,u,j)=>c(`${u} (${j})`),children:[e.jsx(i,{value:"work",children:"Work"}),e.jsx(i,{value:"info",children:"Info"}),e.jsx(i,{value:"materials",badge:3,badgeTooltip:"2 Open Part Request, 1 Short Part(s)",children:"Materials"}),e.jsx(i,{value:"status",badge:5,badgeTooltip:"5 Operations Behind",children:"Status"}),t?e.jsx(i,{value:"schedule",children:"Schedule"}):null,e.jsx(i,{value:"documents",children:"Documents"}),e.jsx(i,{value:"history",children:"History"}),e.jsx(b,{value:"work",children:e.jsx(d,{py:"16",children:"Work instructions and operations."})}),e.jsx(b,{value:"info",children:e.jsx(d,{py:"16",children:"Order header and customer details."})}),e.jsx(b,{value:"materials",children:e.jsx(d,{py:"16",children:"Bill of materials and part requests."})}),e.jsx(b,{value:"status",children:e.jsx(d,{py:"16",children:"Operation status roll-up."})}),e.jsx(b,{value:"schedule",children:({isActive:h})=>e.jsxs(d,{py:"16",children:["Schedule board. Live refresh is ",h?"running":"paused",". Select this tab, remove it with the button above, and the strip falls back to the first remaining tab."]})}),e.jsx(b,{value:"documents",children:e.jsx(d,{py:"16",children:"Attached drawings and travelers."})}),e.jsx(b,{value:"history",children:e.jsx(d,{py:"16",children:"Audit trail."})})]}),e.jsxs(d,{pt:"16",color:"text.subtlest",children:["Last change: ",l]})]})},z={name:"Ex: Work View",parameters:{controls:{disable:!0}},render:()=>e.jsx(Tt,{})},gt=()=>{const[t,a]=r.useState(!0),[l,c]=r.useState("schedule");return e.jsxs(y,{children:[e.jsx(Fe,{variant:"hollow",size:"sm",onClick:()=>a(h=>!h),children:t?"Remove Schedule tab":"Add Schedule tab"}),e.jsxs(d,{py:"8","data-testid":"controlled-value",children:["Parent value: ",l]}),e.jsxs(A,{"aria-label":"Controlled sections",value:l,onChange:(h,u)=>c(u),children:[e.jsx(i,{value:"work",children:"Work"}),t?e.jsx(i,{value:"schedule",children:"Schedule"}):null,e.jsx(i,{value:"history",children:"History"}),e.jsx(b,{value:"work",children:"Work content."}),e.jsx(b,{value:"schedule",children:"Schedule content."}),e.jsx(b,{value:"history",children:"History content."})]})]})},K={name:"Test: controlled value follows a removed tab",parameters:{controls:{disable:!0}},render:()=>e.jsx(gt,{}),play:async({canvasElement:t})=>{const a=Y(t);await C(a.getByRole("tab",{name:"Schedule"})).toHaveAttribute("aria-selected","true"),await Le.click(a.getByRole("button",{name:"Remove Schedule tab"})),await ee(async()=>{await C(a.getByTestId("controlled-value")).toHaveTextContent("Parent value: work"),await C(a.getByRole("tab",{name:"Work"})).toHaveAttribute("aria-selected","true")})}},$={name:"Test: disabled first tab is not the default",parameters:{controls:{disable:!0}},render:t=>e.jsxs(y,{children:[e.jsx(d,{pb:"12",color:"text.subtlest",children:"No `defaultValue` is given and the first tab is disabled. The strip selects the first enabled tab so the keyboard can still enter it."}),e.jsxs(A,{...t,children:[e.jsx(i,{value:"archived",disabled:!0,children:"Archived"}),e.jsx(i,{value:"open",children:"Open"}),e.jsx(i,{value:"closed",children:"Closed"}),e.jsx(b,{value:"archived",children:e.jsx(d,{py:"16",children:"Archived content."})}),e.jsx(b,{value:"open",children:e.jsx(d,{py:"16",children:"Open content."})}),e.jsx(b,{value:"closed",children:e.jsx(d,{py:"16",children:"Closed content."})})]})]}),play:async({canvasElement:t})=>{const a=Y(t),l=a.getByRole("tab",{name:"Open"});await C(l).toHaveAttribute("aria-selected","true"),await C(l).toHaveAttribute("tabindex","0"),await C(a.getByRole("tab",{name:"Archived"})).toHaveAttribute("aria-selected","false"),await Le.tab(),await C(l).toHaveFocus()}},G={name:"Test: badge does not change tab height",parameters:{controls:{disable:!0}},render:t=>e.jsxs(y,{display:"flex",flexDirection:"column",gap:"16",children:[e.jsx(d,{color:"text.subtlest",children:"Both strips are 40px tall. The 20px badge sits inside the 22px line box and never grows the tab. Matches Figma `_TabsTab`."}),e.jsxs(A,{...t,"aria-label":"Without badges",defaultValue:"work",children:[e.jsx(i,{value:"work",children:"Work"}),e.jsx(i,{value:"materials",children:"Materials"})]}),e.jsxs(A,{...t,"aria-label":"With badges",defaultValue:"work",children:[e.jsx(i,{value:"work",badge:3,children:"Work"}),e.jsx(i,{value:"materials",badge:12,badgeTooltip:"12 Short Part(s)",children:"Materials"})]})]}),play:async({canvasElement:t})=>{const a=Y(t),[l,c]=a.getAllByRole("tablist");await C(c==null?void 0:c.offsetHeight).toBe(l==null?void 0:l.offsetHeight);for(const h of a.getAllByRole("tab"))await C(h.offsetHeight).toBe(40)}},U=["Work","Info","Materials","Status"],Q={name:"Test: toggle space is reserved only once tabs overflow",parameters:{controls:{disable:!0}},render:t=>e.jsxs(y,{children:[e.jsx(d,{pb:"12",color:"text.subtlest",children:"The wrapper is sized to the strip plus 16px, which is less than the 32px toggle reserve. Every tab fits, so no toggle renders. Shrinking it below the strip makes the toggle appear."}),e.jsx(y,{"data-fit-wrapper":!0,borderWidth:"1",borderStyle:"dashed",borderColor:"border",children:e.jsxs(A,{...t,defaultValue:"work",children:[U.map(a=>e.jsx(i,{value:a.toLowerCase(),children:a},a)),U.map(a=>e.jsx(b,{value:a.toLowerCase(),children:e.jsxs(d,{py:"16",children:[a," content."]})},a))]})})]}),play:async({canvasElement:t})=>{const a=Y(t),l=t.querySelector("[data-fit-wrapper]"),c=a.getByRole("tablist"),h=a.getAllByRole("tab");if(!l)throw new Error("wrapper not found");const u=Number.parseFloat(getComputedStyle(c).columnGap)||0,j=h.reduce((g,T)=>g+T.getBoundingClientRect().width,0)+u*(h.length-1);l.style.width=`${String(Math.ceil(j)+16)}px`,await ee(async()=>{await C(a.getAllByRole("tab")).toHaveLength(U.length),await C(a.queryByRole("button",{name:"More tabs"})).not.toBeInTheDocument()}),l.style.width=`${String(Math.floor(j)-8)}px`,await ee(async()=>{await C(a.getByRole("button",{name:"More tabs"})).toBeInTheDocument(),await C(a.getAllByRole("tab").length).toBeLessThan(U.length)})}};var de,ue,be;N.parameters={...N.parameters,docs:{...(de=N.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(be=(ue=N.parameters)==null?void 0:ue.docs)==null?void 0:be.source}}};var he,pe,me;L.parameters={...L.parameters,docs:{...(he=L.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(me=(pe=L.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var ve,fe,Te;F.parameters={...F.parameters,docs:{...(ve=F.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(Te=(fe=F.parameters)==null?void 0:fe.docs)==null?void 0:Te.source}}};var ge,xe,we;q.parameters={...q.parameters,docs:{...(ge=q.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(we=(xe=q.parameters)==null?void 0:xe.docs)==null?void 0:we.source}}};var ye,je,ke;D.parameters={...D.parameters,docs:{...(ye=D.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(ke=(je=D.parameters)==null?void 0:je.docs)==null?void 0:ke.source}}};var Se,Pe,Be;z.parameters={...z.parameters,docs:{...(Se=z.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  name: 'Ex: Work View',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <WorkView />
}`,...(Be=(Pe=z.parameters)==null?void 0:Pe.docs)==null?void 0:Be.source}}};var Re,Ee,Ce;K.parameters={...K.parameters,docs:{...(Re=K.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(Ce=(Ee=K.parameters)==null?void 0:Ee.docs)==null?void 0:Ce.source}}};var Ae,Oe,Ve;$.parameters={...$.parameters,docs:{...(Ae=$.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...(Ve=(Oe=$.parameters)==null?void 0:Oe.docs)==null?void 0:Ve.source}}};var Me,Ie,_e;G.parameters={...G.parameters,docs:{...(Me=G.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
}`,...(_e=(Ie=G.parameters)==null?void 0:Ie.docs)==null?void 0:_e.source}}};var We,He,Ne;Q.parameters={...Q.parameters,docs:{...(We=Q.parameters)==null?void 0:We.docs,source:{originalSource:`{
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
}`,...(Ne=(He=Q.parameters)==null?void 0:He.docs)==null?void 0:Ne.source}}};const $t=["Default","WithBadges","Overflow","LabelOverride","UnmountInactive","ExWorkView","ControlledFallback","DisabledFirstTab","BadgeKeepsHeight","ToggleReserveOnlyOnOverflow"];export{G as BadgeKeepsHeight,K as ControlledFallback,N as Default,$ as DisabledFirstTab,z as ExWorkView,q as LabelOverride,F as Overflow,Q as ToggleReserveOnlyOnOverflow,D as UnmountInactive,L as WithBadges,$t as __namedExportsOrder,Kt as default};
