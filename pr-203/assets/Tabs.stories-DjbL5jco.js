import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./index-BKyFwriW.js";import{w as N,e as y,u as L,a as ae}from"./index-L8OlCEhE.js";import{m as Je,a as Xe,b as Ze,e as et,g as tt,s as se,B as j,c as re,d as at}from"./dsComponent-BG2jnRr7.js";import{B as Ke}from"./Button-Cr4bC5CG.js";import{I as nt}from"./Icon-CrwLKW7B.js";import"./IconConfig-BuieZFlx.js";import{T as u}from"./Text-IAtRPmZy.js";import{B as ie}from"./Badge-DBgIjuLw.js";import{T as st}from"./Tooltip-bxPM6yCH.js";import{I as rt}from"./IconButton-DXX-zVMP.js";import{M as lt,a as ot}from"./SubMenu-CDsavkZP.js";import{u as it}from"./useControllableState-ByGfjEIG.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Spinner-PLunUSsK.js";import"./FieldContext-D6URyQos.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";import"./HighlightText-DKF3xkQK.js";import"./menu-DMiDM6i6.js";import"./FloatingLayerContext-BryH8O9I.js";import"./ListItemGroup-C6Yw6dSd.js";import"./Divider-Dbp7vcYx.js";import"./Checkbox-BKc0omfg.js";import"./Toggle-mlz1wkXL.js";const $e={},ct=[],dt=[["root","tabs__root"],["strip","tabs__strip"],["list","tabs__list"],["tab","tabs__tab"],["badge","tabs__badge"],["overflow","tabs__overflow"],["menu","tabs__menu"],["panel","tabs__panel"]],ut=dt.map(([t,a])=>[t,et(a,$e,tt(ct,t))]),bt=Je((t={})=>Object.fromEntries(ut.map(([a,r])=>[a,r.recipeFn(t)]))),ce=["overflowed"],pt=t=>({...$e,...Xe(t)}),Ge=Object.assign(bt,{__recipe__:!1,__name__:"tabs",raw:t=>t,classNameMap:{},variantKeys:ce,variantMap:{overflowed:["true"]},splitVariantProps(t){return Ze(t,ce)},getVariantProps:pt}),ht=32,te=(t,a)=>t.length===a.length&&t.every((r,o)=>r===a[o]),mt=({items:t,containerRef:a,getItemElement:r,activeItem:o=null,reserve:c=ht,enabled:p=!0})=>{const[k,T]=l.useState(()=>[...t]),[g,S]=l.useState([]),h=l.useRef(null),E=l.useCallback(()=>{const w=a.current;if(!p||!w){T(i=>te(i,t)?i:[...t]),S(i=>i.length===0?i:[]);return}const m=globalThis.getComputedStyle(w),v=Number.parseFloat(m.paddingLeft||"0")+Number.parseFloat(m.paddingRight||"0"),P=Number.parseFloat(m.columnGap||"0")||0,V=w.clientWidth-v,I=t.map(i=>{var n;return((n=r(i))==null?void 0:n.offsetWidth)??Number.POSITIVE_INFINITY}),x=o===null?-1:t.indexOf(o),H=x===-1?0:x,M=t.map((i,n)=>n).sort((i,n)=>{const s=Math.abs(i-H)-Math.abs(n-H);return s===0?i-n:s}),R=(i,n)=>{const s=new Set;let f=0;i!==null&&(s.add(i),f+=I[i]??0);for(const O of M){if(s.has(O))continue;const W=(I[O]??0)+(s.size>0?P:0);if(f+W>n)break;f+=W,s.add(O)}return s};let A=R(null,V);if(A.size<t.length){const i=V-c-P;A=R(null,i),x!==-1&&!A.has(x)&&(A=R(x,i))}const B=[],_=[];t.forEach((i,n)=>{A.has(n)?B.push(i):_.push(i)}),T(i=>te(i,B)?i:B),S(i=>te(i,_)?i:_)},[o,a,p,r,t,c]);return l.useLayoutEffect(()=>{const w=a.current,m=()=>{h.current!==null&&globalThis.cancelAnimationFrame(h.current),h.current=globalThis.requestAnimationFrame(()=>{h.current=null,E()})};if(E(),!p||!w)return()=>{h.current!==null&&(globalThis.cancelAnimationFrame(h.current),h.current=null)};const v=typeof ResizeObserver>"u"?null:new ResizeObserver(m);v==null||v.observe(w);for(const P of t){const V=r(P);V&&(v==null||v.observe(V))}return globalThis.addEventListener("resize",m),()=>{v==null||v.disconnect(),globalThis.removeEventListener("resize",m),h.current!==null&&(globalThis.cancelAnimationFrame(h.current),h.current=null)}},[a,p,r,t,E]),{visible:k,overflow:g,hasOverflow:g.length>0,measure:E}},Ue=l.createContext(null),vt=l.createContext(!0),ft=Ue.Provider,Tt=vt.Provider,Qe=()=>{const t=l.useContext(Ue);if(!t)throw new Error("Tabs compound components must be used within <Tabs />");return t},Z={tab:"Tab",panel:"TabPanel"},le="__tabsComponentType",Ye=t=>{if(!t||typeof t!="object"||!("type"in t))return null;const a=t.type;return(a==null?void 0:a[le])??null},gt=Ge({overflowed:!0}).tab,d=t=>{const{value:a,children:r,label:o,badge:c,badgeTooltip:p,disabled:k=!1,onClick:T,onKeyDown:g,...S}=t,{classes:h,getPanelId:E,getTabId:w,onTabKeyDown:m,overflowValues:v,registerTabElement:P,selectTab:V,selectedValue:I}=Qe(),x=I===a,H=v.includes(a),[M,R]=se(S),A=l.useCallback(n=>{P(a,n)},[P,a]),B=H?gt:h.tab,i=typeof c=="number"&&c!==0?e.jsx(j,{className:h.badge,children:p?e.jsx(st,{text:p,children:e.jsx(ie,{count:c,variant:"subtle"})}):e.jsx(ie,{count:c,variant:"subtle"})}):null;return e.jsxs(j,{as:"button",type:"button",ref:A,id:w(a),role:"tab","aria-selected":x,"aria-controls":E(a),"aria-hidden":H||void 0,disabled:k,tabIndex:x&&!H?0:-1,className:re(B,M),onClick:n=>{T==null||T(n),!(k||n.defaultPrevented)&&V(n,a,"clicked-on-tab")},onKeyDown:n=>{g==null||g(n),n.defaultPrevented||m(n)},...R,children:[r,i]})};d[le]=Z.tab;d.__docgenInfo={description:'Selects one panel inside a {@link Tabs} strip.\n\nRenders a `button` with `role="tab"`. Only the selected tab is in the tab\norder; Arrow, Home, and End move between the others. A tab that does not fit\nthe strip stays mounted but hidden so it can still be measured, and it is\noffered in the overflow menu instead. The menu row is plain text, so give\n`label` when `children` are not plain text.\n\n@example\n```tsx\n<Tab value="materials" badge={3} badgeTooltip="2 Open Part Request">\n  Materials\n</Tab>\n```',methods:[],displayName:"Tab",props:{value:{required:!0,tsType:{name:"string"},description:"Identifies the tab and the `TabPanel` it controls. Must be unique within a `Tabs`."},children:{required:!1,tsType:{name:"ReactNode"},description:"Visible label rendered in the strip. Plain text is also reused as the overflow-menu row's text unless `label` overrides it."},label:{required:!1,tsType:{name:"string"},description:"Plain-text name for this tab's overflow-menu row, which cannot render\nmarkup. Set it when `children` contain more than text — an icon, a nested\nelement — because flattening those to a string reads badly. It never\nchanges what the strip renders: `children` still render there as-is.\nWithout it the menu row falls back to the flattened `children`, then to\n`value`."},badge:{required:!1,tsType:{name:"number"},description:"Count shown in a trailing {@link Badge}. A zero or omitted count renders no badge."},badgeTooltip:{required:!1,tsType:{name:"string"},description:"Tooltip text describing what the badge counts. Requires `badge`."},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents selection and skips the tab during arrow-key navigation."}}};const b=t=>{const{value:a,children:r,...o}=t,{classes:c,getPanelId:p,getTabId:k,selectedValue:T,unmountInactive:g}=Qe(),S=T===a,[h,E]=se(o);if(g&&!S)return null;const m=typeof r=="function"?r({isActive:S}):r;return e.jsx(Tt,{value:S,children:e.jsx(j,{id:p(a),role:"tabpanel","aria-labelledby":k(a),tabIndex:S?0:-1,display:S?"block":"none",className:re(c.panel,h),...E,children:m})})};b[le]=Z.panel;b.__docgenInfo={description:'Renders the content for one {@link Tab}.\n\nThe panel stays mounted when another tab is selected and is hidden with\n`display: none`, which preserves scroll position and local state; set\n`unmountInactive` on `Tabs` to render only the selected panel instead. A\nfunction child receives `{ isActive }`, and descendants can call\n`useTabPanelActive()` for the same signal, so hidden panels can pause polling\nor animation.\n\n@example\n```tsx\n<TabPanel value="materials">\n  {({ isActive }) => <MaterialsGrid paused={!isActive} />}\n</TabPanel>\n```',methods:[],displayName:"TabPanel",props:{value:{required:!0,tsType:{name:"string"},description:"`value` of the {@link Tab} this panel belongs to."},children:{required:!1,tsType:{name:"union",raw:"ReactNode | ((props: TabPanelRenderProps) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:"Panel content. A function child receives `{ isActive }` so expensive work\ncan pause while the panel is mounted but hidden."}}};const xt=32,ne=t=>t==null||typeof t=="boolean"?"":typeof t=="string"||typeof t=="number"?String(t):Array.isArray(t)?t.map(a=>ne(a)).join(""):l.isValidElement(t)?ne(t.props.children):"",wt=({children:t,value:a,defaultValue:r,onChange:o,listRef:c})=>{var i;const p=l.useMemo(()=>{const n=[];return l.Children.forEach(t,s=>{if(!l.isValidElement(s)||Ye(s)!==Z.tab)return;const f=s.props;typeof f.value=="string"&&n.push({value:f.value,label:f.label||ne(f.children)||f.value,disabled:!!f.disabled})}),n},[t]),k=l.useMemo(()=>p.map(n=>n.value),[p]),T=((i=p.find(n=>!n.disabled))==null?void 0:i.value)??"",[g,S,h]=it({value:a,defaultValue:r??T}),E=p.find(n=>n.value===g),w=!!(E&&!E.disabled),m=w?g:T,v=l.useRef(null);l.useEffect(()=>{if(!h||w||T===""){v.current=null;return}const n=`${g}\0${T}`;v.current!==n&&(v.current=n,o==null||o(null,T,"fallback-after-removal"))},[T,h,w,o,g]);const P=l.useRef(new Map),V=l.useCallback((n,s)=>{s?P.current.set(n,s):P.current.delete(n)},[]),I=l.useCallback(n=>P.current.get(n)??null,[]),{overflow:x,hasOverflow:H}=mt({items:k,containerRef:c,getItemElement:I,activeItem:m||null,reserve:xt}),M=l.useCallback((n,s,f)=>{s!==g&&(S(s),o==null||o(n,s,f))},[o,S,g]),R=l.useRef(null),A=l.useCallback(n=>{R.current=n},[]);l.useEffect(()=>{const n=R.current;if(n===null)return;const s=P.current.get(n);!s||x.includes(n)||(R.current=null,s.focus())},[x,m]);const B=l.useCallback(n=>{const s=p.filter(ee=>!ee.disabled).map(ee=>ee.value);if(s.length===0)return;const f=Math.max(0,s.indexOf(m));let O;switch(n.key){case"ArrowRight":O=(f+1)%s.length;break;case"ArrowLeft":O=(f-1+s.length)%s.length;break;case"Home":O=0;break;case"End":O=s.length-1;break;default:return}n.preventDefault();const W=s[O];if(W===void 0)return;M(n,W,"clicked-on-tab");const oe=P.current.get(W);oe&&!x.includes(W)?oe.focus():R.current=W},[x,M,m,p]),_=l.useMemo(()=>x.map(n=>p.find(s=>s.value===n)).filter(n=>!!n),[x,p]);return{hasOverflow:H,focusTab:A,onTabKeyDown:B,overflowTabs:_,overflowValues:x,registerTabElement:V,selectTab:M,selectedValue:m,tabs:p}},C=t=>{const{children:a,value:r,defaultValue:o,onChange:c,unmountInactive:p=!1,"aria-label":k,"aria-labelledby":T,...g}=t,[S,h]=se(g),E=l.useRef(null),w=l.useId(),[m,v]=l.useState(!1),{focusTab:P,hasOverflow:V,onTabKeyDown:I,overflowTabs:x,overflowValues:H,registerTabElement:M,selectTab:R,selectedValue:A}=wt({children:a,value:r,defaultValue:o,onChange:c,listRef:E}),B=l.useMemo(()=>Ge(),[]),[_,i]=l.useMemo(()=>{const s=[],f=[];return l.Children.forEach(a,O=>{Ye(O)===Z.tab?s.push(O):f.push(O)}),[s,f]},[a]),n=l.useMemo(()=>({classes:B,getPanelId:s=>`${w}-panel-${s}`,getTabId:s=>`${w}-tab-${s}`,onTabKeyDown:I,overflowValues:H,registerTabElement:M,selectTab:R,selectedValue:A,unmountInactive:p}),[w,B,I,H,M,R,A,p]);return e.jsx(ft,{value:n,children:e.jsxs(j,{...at("Tabs"),className:re(B.root,S),...h,children:[e.jsxs(j,{className:B.strip,children:[e.jsx(j,{ref:E,role:"tablist","aria-label":k,"aria-labelledby":T,"aria-orientation":"horizontal",className:B.list,children:_}),V&&e.jsx(j,{className:B.overflow,children:e.jsx(lt,{open:m,onOpenChange:v,placement:"bottom-end",className:B.menu,trigger:e.jsx(rt,{variant:"ghost",size:"md",iconName:m?"caret-up":"caret-down",altText:"More tabs","aria-haspopup":"menu"}),children:x.map(s=>e.jsx(ot,{label:s.label,disabled:s.disabled,selected:s.value===A,onClick:f=>{P(s.value),R(f,s.value,"selected-from-overflow"),v(!1)}},s.value))})})]}),i]})})};C.__docgenInfo={description:'Groups related content into a single view with one panel visible at a time.\n\nCompose it from `Tab` and `TabPanel` children; the first enabled `Tab` is\nselected by default. Selection is uncontrolled with `defaultValue` or\ncontrolled with `value` plus `onChange`. Tabs that do not fit the available width move into\nan overflow menu at the end of the strip, and the selected tab always stays\nvisible. Every panel stays mounted and hidden unless `unmountInactive` is\nset, so read `useTabPanelActive()` to pause work in a hidden panel.\n\nThe strip renders a `tablist` with roving tabindex and Arrow, Home, and End\nnavigation. Supply `aria-label` or `aria-labelledby` so it is announced.\n\n@example\n```tsx\n<Tabs defaultValue="work" aria-label="Order sections">\n  <Tab value="work">Work</Tab>\n  <Tab value="materials" badge={3}>Materials</Tab>\n  <TabPanel value="work">Work content</TabPanel>\n  <TabPanel value="materials">Materials content</TabPanel>\n</Tabs>\n```',methods:[],displayName:"Tabs",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"`Tab` and `TabPanel` children. Tab order in the strip follows source order."},value:{required:!1,tsType:{name:"string"},description:"Controlled selected tab `value`. Pair with `onChange`; omit it to use `defaultValue`."},defaultValue:{required:!1,tsType:{name:"string"},description:"Initially selected tab `value` when `value` is not provided. It is used\nonly on first render.\n@default the first `Tab` child's `value`"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  event: TabsChangeEvent,
  value: string,
  reason: TabsChangeReason,
) => void`,signature:{arguments:[{type:{name:"union",raw:`| ReactMouseEvent<HTMLElement>
| ReactKeyboardEvent<HTMLElement>
| null`,elements:[{name:"ReactMouseEvent",elements:[{name:"HTMLElement"}],raw:"ReactMouseEvent<HTMLElement>"},{name:"ReactKeyboardEvent",elements:[{name:"HTMLElement"}],raw:"ReactKeyboardEvent<HTMLElement>"},{name:"null"}]},name:"event"},{type:{name:"string"},name:"value"},{type:{name:"union",raw:`| 'clicked-on-tab'
| 'selected-from-overflow'
| 'fallback-after-removal'`,elements:[{name:"literal",value:"'clicked-on-tab'"},{name:"literal",value:"'selected-from-overflow'"},{name:"literal",value:"'fallback-after-removal'"}]},name:"reason"}],return:{name:"void"}}},description:"Runs when user interaction selects a different tab."},unmountInactive:{required:!1,tsType:{name:"boolean"},description:"Renders only the selected `TabPanel`. By default every panel stays mounted\nand inactive panels are hidden with `display: none`, which preserves their\nscroll position and local state.\n@default false"},"aria-label":{required:!1,tsType:{name:"string"},description:"Accessible name for the tab strip. Provide this or `aria-labelledby` so the\n`tablist` is announced."},"aria-labelledby":{required:!1,tsType:{name:"string"},description:"Id of an element that labels the tab strip."}}};const Yt={title:"Components/Tabs",component:C,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:["Tabs keep every `TabPanel` mounted by default and hide the inactive","ones with `display: none`. That preserves scroll position, form","drafts, and grid state when a user moves between tabs, at the cost","of keeping hidden work alive. Hidden panels receive an `isActive`","signal — as a render-prop argument or through `useTabPanelActive()`","— so polling, timers, and animation can pause themselves. Set","`unmountInactive` when a panel is expensive enough that discarding","its state is the better trade."].join(" ")}}},args:{"aria-label":"Example sections",children:null}},F={render:t=>e.jsxs(C,{...t,defaultValue:"overview",children:[e.jsx(d,{value:"overview",children:"Overview"}),e.jsx(d,{value:"activity",children:"Activity"}),e.jsx(d,{value:"settings",children:"Settings"}),e.jsx(b,{value:"overview",children:e.jsx(u,{py:"16",children:"Summary of the current record."})}),e.jsx(b,{value:"activity",children:e.jsx(u,{py:"16",children:"Recent activity for the current record."})}),e.jsx(b,{value:"settings",children:e.jsx(u,{py:"16",children:"Settings for the current record."})})]})},q={name:"Badges",parameters:{controls:{disable:!0}},render:t=>e.jsxs(C,{...t,defaultValue:"work",children:[e.jsx(d,{value:"work",children:"Work"}),e.jsx(d,{value:"materials",badge:3,badgeTooltip:"2 Open Part Request, 1 Short Part(s)",children:"Materials"}),e.jsx(d,{value:"status",badge:12,children:"Status"}),e.jsx(d,{value:"documents",badge:0,children:"Documents"}),e.jsx(b,{value:"work",children:e.jsx(u,{py:"16",children:"A badge without a tooltip is a bare count."})}),e.jsx(b,{value:"materials",children:e.jsx(u,{py:"16",children:"Hover or focus the Materials badge to read what the count means."})}),e.jsx(b,{value:"status",children:e.jsx(u,{py:"16",children:"Status content."})}),e.jsx(b,{value:"documents",children:e.jsx(u,{py:"16",children:"A zero count renders no badge at all."})})]})},de=["Work","Info","Materials","Status","Documents","History","Labor","Quality","Shipping","Invoicing","Costing","Notes"],D={name:"Overflow",parameters:{controls:{disable:!0}},render:t=>e.jsxs(j,{resize:"horizontal",overflow:"auto",width:"lg",maxWidth:"full",minWidth:"240",borderWidth:"1",borderStyle:"dashed",borderColor:"border",p:"16",children:[e.jsx(u,{pb:"12",color:"text.subtlest",children:"Drag the bottom-right corner. Tabs nearest the selected one keep their place; the rest move into the overflow menu."}),e.jsxs(C,{...t,defaultValue:"work",children:[de.map(a=>e.jsx(d,{value:a.toLowerCase(),children:a},a)),de.map(a=>e.jsx(b,{value:a.toLowerCase(),children:e.jsxs(u,{py:"16",children:[a," content."]})},a))]})]})},ue=[{value:"work",label:"Work",icon:"wrench-2"},{value:"materials",label:"Materials",icon:"cube-focus"},{value:"schedule",label:"Schedule",icon:"calendar-view-week"},{value:"shipping",label:"Shipping",icon:"truck-trailer"},{value:"quality",label:"Quality",icon:"list-checks"},{value:"history",label:"History",icon:"clock-countdown"},{value:"notes",label:"Notes",icon:"note-stack"}],z={name:"Label Override for Overflow",parameters:{controls:{disable:!0}},render:t=>e.jsxs(j,{width:"md",maxWidth:"full",children:[e.jsx(u,{pb:"12",color:"text.subtlest",children:"These tabs render an icon beside their text, so flattening `children` would produce a poor menu row. Each one passes `label`, and the overflow menu uses that text. The strip still renders `children` as-is."}),e.jsxs(C,{...t,defaultValue:"work",children:[ue.map(a=>e.jsxs(d,{value:a.value,label:a.label,children:[e.jsx(nt,{name:a.icon,"aria-hidden":!0}),a.label]},a.value)),ue.map(a=>e.jsx(b,{value:a.value,children:e.jsxs(u,{py:"16",children:[a.label," content."]})},a.value))]})]})},K={name:"Unmount Inactive Panels",parameters:{controls:{disable:!0}},render:t=>e.jsxs(C,{...t,defaultValue:"first",unmountInactive:!0,children:[e.jsx(d,{value:"first",children:"First"}),e.jsx(d,{value:"second",children:"Second"}),e.jsx(b,{value:"first",children:e.jsx(u,{py:"16",children:"Only this panel exists in the DOM while it is selected."})}),e.jsx(b,{value:"second",children:e.jsx(u,{py:"16",children:"Switching tabs unmounts the other panel and discards its state."})})]})},yt=()=>{const[t,a]=l.useState(!0),[r,o]=l.useState("none yet");return e.jsxs(j,{children:[e.jsx(j,{pb:"12",children:e.jsx(Ke,{variant:"hollow",size:"sm",onClick:()=>a(c=>!c),children:t?"Remove Schedule tab":"Add Schedule tab"})}),e.jsxs(C,{"aria-label":"Work order sections",defaultValue:"work",onChange:(c,p,k)=>o(`${p} (${k})`),children:[e.jsx(d,{value:"work",children:"Work"}),e.jsx(d,{value:"info",children:"Info"}),e.jsx(d,{value:"materials",badge:3,badgeTooltip:"2 Open Part Request, 1 Short Part(s)",children:"Materials"}),e.jsx(d,{value:"status",badge:5,badgeTooltip:"5 Operations Behind",children:"Status"}),t?e.jsx(d,{value:"schedule",children:"Schedule"}):null,e.jsx(d,{value:"documents",children:"Documents"}),e.jsx(d,{value:"history",children:"History"}),e.jsx(b,{value:"work",children:e.jsx(u,{py:"16",children:"Work instructions and operations."})}),e.jsx(b,{value:"info",children:e.jsx(u,{py:"16",children:"Order header and customer details."})}),e.jsx(b,{value:"materials",children:e.jsx(u,{py:"16",children:"Bill of materials and part requests."})}),e.jsx(b,{value:"status",children:e.jsx(u,{py:"16",children:"Operation status roll-up."})}),e.jsx(b,{value:"schedule",children:({isActive:c})=>e.jsxs(u,{py:"16",children:["Schedule board. Live refresh is ",c?"running":"paused",". Select this tab, remove it with the button above, and the strip falls back to the first remaining tab."]})}),e.jsx(b,{value:"documents",children:e.jsx(u,{py:"16",children:"Attached drawings and travelers."})}),e.jsx(b,{value:"history",children:e.jsx(u,{py:"16",children:"Audit trail."})})]}),e.jsxs(u,{pt:"16",color:"text.subtlest",children:["Last change: ",r]})]})},$={name:"Ex: Work View",parameters:{controls:{disable:!0}},render:()=>e.jsx(yt,{})},jt=()=>{const[t,a]=l.useState(!0),[r,o]=l.useState("schedule");return e.jsxs(j,{children:[e.jsx(Ke,{variant:"hollow",size:"sm",onClick:()=>a(c=>!c),children:t?"Remove Schedule tab":"Add Schedule tab"}),e.jsxs(u,{py:"8","data-testid":"controlled-value",children:["Parent value: ",r]}),e.jsxs(C,{"aria-label":"Controlled sections",value:r,onChange:(c,p)=>o(p),children:[e.jsx(d,{value:"work",children:"Work"}),t?e.jsx(d,{value:"schedule",children:"Schedule"}):null,e.jsx(d,{value:"history",children:"History"}),e.jsx(b,{value:"work",children:"Work content."}),e.jsx(b,{value:"schedule",children:"Schedule content."}),e.jsx(b,{value:"history",children:"History content."})]})]})},G={name:"Test: controlled value follows a removed tab",parameters:{controls:{disable:!0}},render:()=>e.jsx(jt,{}),play:async({canvasElement:t})=>{const a=N(t);await y(a.getByRole("tab",{name:"Schedule"})).toHaveAttribute("aria-selected","true"),await L.click(a.getByRole("button",{name:"Remove Schedule tab"})),await ae(async()=>{await y(a.getByTestId("controlled-value")).toHaveTextContent("Parent value: work"),await y(a.getByRole("tab",{name:"Work"})).toHaveAttribute("aria-selected","true")})}},kt=()=>{const[t,a]=l.useState(0),[r,o]=l.useState("none");return e.jsxs(j,{children:[e.jsxs(u,{pb:"8","data-testid":"consumer-events",children:["Clicks: ",t,"; last key: ",r]}),e.jsxs(C,{"aria-label":"Handler composition",defaultValue:"first",children:[e.jsx(d,{value:"first",onClick:()=>a(c=>c+1),children:"First"}),e.jsx(d,{value:"second",onKeyDown:c=>o(c.key),children:"Second"}),e.jsx(b,{value:"first",children:"First content."}),e.jsx(b,{value:"second",children:"Second content."})]})]})},U={name:"Test: consumer handlers preserve tab interactions",parameters:{controls:{disable:!0}},render:()=>e.jsx(kt,{}),play:async({canvasElement:t})=>{const a=N(t),r=a.getByRole("tab",{name:"First"}),o=a.getByRole("tab",{name:"Second"}),c=a.getByTestId("consumer-events");await L.click(o),await y(o).toHaveAttribute("aria-selected","true"),await L.keyboard("{ArrowLeft}"),await y(r).toHaveAttribute("aria-selected","true"),await y(c).toHaveTextContent("last key: ArrowLeft"),await L.click(r),await y(c).toHaveTextContent("Clicks: 1")}},Q={name:"Test: disabled first tab is not the default",parameters:{controls:{disable:!0}},render:t=>e.jsxs(j,{children:[e.jsx(u,{pb:"12",color:"text.subtlest",children:"No `defaultValue` is given and the first tab is disabled. The strip selects the first enabled tab so the keyboard can still enter it."}),e.jsxs(C,{...t,children:[e.jsx(d,{value:"archived",disabled:!0,children:"Archived"}),e.jsx(d,{value:"open",children:"Open"}),e.jsx(d,{value:"closed",children:"Closed"}),e.jsx(b,{value:"archived",children:e.jsx(u,{py:"16",children:"Archived content."})}),e.jsx(b,{value:"open",children:e.jsx(u,{py:"16",children:"Open content."})}),e.jsx(b,{value:"closed",children:e.jsx(u,{py:"16",children:"Closed content."})})]})]}),play:async({canvasElement:t})=>{const a=N(t),r=a.getByRole("tab",{name:"Open"});await y(r).toHaveAttribute("aria-selected","true"),await y(r).toHaveAttribute("tabindex","0"),await y(a.getByRole("tab",{name:"Archived"})).toHaveAttribute("aria-selected","false"),await L.tab(),await y(r).toHaveFocus()}},Y={name:"Test: badge does not change tab height",parameters:{controls:{disable:!0}},render:t=>e.jsxs(j,{display:"flex",flexDirection:"column",gap:"16",children:[e.jsx(u,{color:"text.subtlest",children:"Both strips are 40px tall. The 20px badge sits inside the 22px line box and never grows the tab. Matches Figma `_TabsTab`."}),e.jsxs(C,{...t,"aria-label":"Without badges",defaultValue:"work",children:[e.jsx(d,{value:"work",children:"Work"}),e.jsx(d,{value:"materials",children:"Materials"})]}),e.jsxs(C,{...t,"aria-label":"With badges",defaultValue:"work",children:[e.jsx(d,{value:"work",badge:3,children:"Work"}),e.jsx(d,{value:"materials",badge:12,badgeTooltip:"12 Short Part(s)",children:"Materials"})]})]}),play:async({canvasElement:t})=>{const a=N(t),[r,o]=a.getAllByRole("tablist");await y(o==null?void 0:o.offsetHeight).toBe(r==null?void 0:r.offsetHeight);for(const c of a.getAllByRole("tab"))await y(c.offsetHeight).toBe(40)}},J=["Work","Info","Materials","Status"],X={name:"Test: toggle space is reserved only once tabs overflow",parameters:{controls:{disable:!0}},render:t=>e.jsxs(j,{children:[e.jsx(u,{pb:"12",color:"text.subtlest",children:"The wrapper is sized to the strip plus 16px, which is less than the 32px toggle reserve. Every tab fits, so no toggle renders. Shrinking it below the strip makes the toggle appear."}),e.jsx(j,{"data-fit-wrapper":!0,borderWidth:"1",borderStyle:"dashed",borderColor:"border",children:e.jsxs(C,{...t,defaultValue:"work",children:[J.map(a=>e.jsx(d,{value:a.toLowerCase(),children:a},a)),J.map(a=>e.jsx(b,{value:a.toLowerCase(),children:e.jsxs(u,{py:"16",children:[a," content."]})},a))]})})]}),play:async({canvasElement:t})=>{const a=N(t),r=t.querySelector("[data-fit-wrapper]"),o=a.getByRole("tablist"),c=a.getAllByRole("tab");if(!r)throw new Error("wrapper not found");const p=Number.parseFloat(getComputedStyle(o).columnGap)||0,k=c.reduce((T,g)=>T+g.getBoundingClientRect().width,0)+p*(c.length-1);r.style.width=`${String(Math.ceil(k)+16)}px`,await ae(async()=>{await y(a.getAllByRole("tab")).toHaveLength(J.length),await y(a.queryByRole("button",{name:"More tabs"})).not.toBeInTheDocument()}),r.style.width=`${String(Math.floor(k)-8)}px`,await ae(async()=>{await y(a.getByRole("button",{name:"More tabs"})).toBeInTheDocument(),await y(a.getAllByRole("tab").length).toBeLessThan(J.length)})}};var be,pe,he;F.parameters={...F.parameters,docs:{...(be=F.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(he=(pe=F.parameters)==null?void 0:pe.docs)==null?void 0:he.source}}};var me,ve,fe;q.parameters={...q.parameters,docs:{...(me=q.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(fe=(ve=q.parameters)==null?void 0:ve.docs)==null?void 0:fe.source}}};var Te,ge,xe;D.parameters={...D.parameters,docs:{...(Te=D.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(xe=(ge=D.parameters)==null?void 0:ge.docs)==null?void 0:xe.source}}};var we,ye,je;z.parameters={...z.parameters,docs:{...(we=z.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(je=(ye=z.parameters)==null?void 0:ye.docs)==null?void 0:je.source}}};var ke,Se,Pe;K.parameters={...K.parameters,docs:{...(ke=K.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(Pe=(Se=K.parameters)==null?void 0:Se.docs)==null?void 0:Pe.source}}};var Be,Ee,Re;$.parameters={...$.parameters,docs:{...(Be=$.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  name: 'Ex: Work View',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <WorkView />
}`,...(Re=(Ee=$.parameters)==null?void 0:Ee.docs)==null?void 0:Re.source}}};var Ce,Ae,Oe;G.parameters={...G.parameters,docs:{...(Ce=G.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(Oe=(Ae=G.parameters)==null?void 0:Ae.docs)==null?void 0:Oe.source}}};var Ve,He,Me;U.parameters={...U.parameters,docs:{...(Ve=U.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
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
}`,...(Me=(He=U.parameters)==null?void 0:He.docs)==null?void 0:Me.source}}};var Ie,_e,We;Q.parameters={...Q.parameters,docs:{...(Ie=Q.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(We=(_e=Q.parameters)==null?void 0:_e.docs)==null?void 0:We.source}}};var Le,Ne,Fe;Y.parameters={...Y.parameters,docs:{...(Le=Y.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(Fe=(Ne=Y.parameters)==null?void 0:Ne.docs)==null?void 0:Fe.source}}};var qe,De,ze;X.parameters={...X.parameters,docs:{...(qe=X.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...(ze=(De=X.parameters)==null?void 0:De.docs)==null?void 0:ze.source}}};const Jt=["Default","WithBadges","Overflow","LabelOverride","UnmountInactive","ExWorkView","ControlledFallback","ComposedTabHandlers","DisabledFirstTab","BadgeKeepsHeight","ToggleReserveOnlyOnOverflow"];export{Y as BadgeKeepsHeight,U as ComposedTabHandlers,G as ControlledFallback,F as Default,Q as DisabledFirstTab,$ as ExWorkView,z as LabelOverride,D as Overflow,X as ToggleReserveOnlyOnOverflow,K as UnmountInactive,q as WithBadges,Jt as __namedExportsOrder,Yt as default};
