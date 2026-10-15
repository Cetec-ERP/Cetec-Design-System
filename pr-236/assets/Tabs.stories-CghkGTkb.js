import{m as gt,e as xt,f as Tt,g as ft,h as kt,r as c,s as Re,Z as Bt,$ as jt,ad as Rt,ae as Ht,af as At,a5 as St,a6 as Ct,a9 as Pt,Y as Et,j as e,B as m,c as He,a1 as Mt,a2 as Ot,ag as Vt,d as st,ah as It,ab as Ft,T as u,a as Wt}from"./iframe-Cp37vy7q.js";import{B as z}from"./Button--8LQjx1f.js";import{g as qt,s as ot,M as Lt,a as Dt}from"./SubMenu-DzWNXwh6.js";import{B as _t}from"./Badge-DD1b_hI3.js";import{I as lt}from"./IconButton-4ngqRhYK.js";import{u as Nt}from"./useOverflowItems-JAWnJSJH.js";import{u as $t}from"./useControllableState-DBGfSfcU.js";import"./preload-helper-COnIJuB2.js";import"./Spinner-DsTCp9Q9.js";import"./FieldContext-Cykm4_pQ.js";import"./HighlightText-BImBfsr2.js";import"./menu-BY0afsKJ.js";import"./useLocale-Cm9MxLfc.js";import"./FloatingLayerContext-Brao90-J.js";import"./ListItemGroup-MgQu79w6.js";import"./Divider-BwTHQQtG.js";import"./Checkbox-CKvXu5cc.js";import"./Toggle-kAn2e-vd.js";const it={hasOverflow:!1},zt=[],Kt=[["root","tabs__root"],["strip","tabs__strip"],["list","tabs__list"],["tab","tabs__tab"],["badge","tabs__badge"],["overflow","tabs__overflow"],["menu","tabs__menu"],["panel","tabs__panel"]],Ut=Kt.map(([t,a])=>[t,ft(a,it,kt(zt,t))]),Gt=gt((t={})=>Object.fromEntries(Ut.map(([a,r])=>[a,r.recipeFn(t)]))),Ce=["hasOverflow","overflowed"],Yt=t=>({...it,...xt(t)}),ct=Object.assign(Gt,{__recipe__:!1,__name__:"tabs",raw:t=>t,classNameMap:{},variantKeys:Ce,variantMap:{hasOverflow:["false","true"],overflowed:["true"]},splitVariantProps(t){return Tt(t,Ce)},getVariantProps:Yt}),dt=c.createContext(null),Qt=c.createContext(!0),Jt=dt.Provider,Zt=Qt.Provider,ut=()=>{const t=c.useContext(dt);if(!t)throw new Error("Tabs compound components must be used within <Tabs />");return t},ke={tab:"Tab",panel:"TabPanel"},Ae="__tabsComponentType",bt=t=>qt(t,Ae),pt=t=>{const a=[],r=(s,i)=>{c.Children.toArray(s).forEach(d=>{if(c.isValidElement(d)&&d.type===c.Fragment){r(d.props.children,`${i}${String(d.key)}/`);return}a.push(i!==""&&c.isValidElement(d)?c.cloneElement(d,{key:`${i}${String(d.key)}`}):d)})};return r(t,""),a},Xt=ct({overflowed:!0}).tab,Pe=Vt({size:"md",hasTitle:!1}),o=t=>{const{value:a,children:r,label:s,badge:i,badgeTooltip:d,disabled:p=!1,onClick:y,onKeyDown:T,ref:g,...S}=t,{classes:C,getPanelId:E,getTabId:j,onTabKeyDown:I,overflowValues:M,registerTabElement:O,selectTab:F,selectedValue:W}=ut(),H=W===a,P=M.includes(a),[L,R]=Re(S),D=c.useCallback(V=>{O(a,V)},[O,a]),U=P?Xt:C.tab,q=typeof i=="number"&&i!==0,k=q&&!!d&&!P,[K,_]=c.useState(!1),G=c.useRef(null),b=k&&K,{refs:v,elements:f,floatingStyles:N,context:A}=Bt({open:b,onOpenChange:_,placement:"bottom",middleware:jt({offset:8,extras:[Rt({element:G})]})}),Y=Ht(A,{enabled:k,move:!1}),$=At(A,{enabled:k}),Be=St(A,{enabled:k}),vt=Ct(A,{enabled:k,role:"tooltip"}),{getReferenceProps:ht,getFloatingProps:mt}=Pt([Y,$,Be,vt]),wt=Et([D,v.setReference,g]),yt=q?e.jsx(m,{ref:v.setPositionReference,className:C.badge,children:e.jsx(_t,{count:i,variant:"subtle"})}):null;return e.jsxs(e.Fragment,{children:[e.jsxs(m,{as:"button",type:"button",ref:wt,role:"tab","aria-selected":H,"aria-controls":E(a),"aria-hidden":P||void 0,disabled:p,tabIndex:H&&!P?0:-1,className:He(U,L),...ht({...R,onClick:V=>{y==null||y(V),!(p||V.defaultPrevented)&&F(V,a,"clicked-on-tab")},onKeyDown:V=>{T==null||T(V),V.defaultPrevented||I(V)}}),id:j(a),children:[r,yt]}),b?e.jsx(Mt,{children:e.jsx(Ot,{reference:f.domReference,children:e.jsxs(m,{...st("Tooltip"),ref:v.setFloating,style:N,className:Pe.tooltipContent,...mt(),children:[e.jsx(m,{className:Pe.text,children:d}),e.jsx(It,{ref:G,context:A,fill:Ft.var("colors.bg.neutral.inverse")})]})})}):null]})};ot(o,Ae,ke.tab);o.__docgenInfo={description:'Selects one panel inside a {@link Tabs} strip.\n\nRenders a `button` with `role="tab"`. Only the selected tab is in the tab\norder; Arrow, Home, and End move between the others. A tab that does not fit\nthe strip stays mounted but hidden so it can still be measured, and it is\noffered in the overflow menu instead. The menu row is plain text, so give\n`label` when `children` are not plain text.\n\n`badgeTooltip` opens on hover and on keyboard focus of the tab itself, points\nat the badge, and is linked to the tab with `aria-describedby` while open.\n\n@example\n```tsx\n<Tab value="materials" badge={3} badgeTooltip="2 Open Part Request">\n  Materials\n</Tab>\n```',methods:[],displayName:"Tab",props:{value:{required:!0,tsType:{name:"string"},description:"Identifies the tab and the `TabPanel` it controls. Must be unique within a `Tabs`."},children:{required:!1,tsType:{name:"ReactNode"},description:"Visible label rendered in the strip. Plain text is also reused as the overflow-menu row's text unless `label` overrides it."},label:{required:!1,tsType:{name:"string"},description:"Plain-text name for this tab's overflow-menu row, which cannot render\nmarkup. Set it when `children` contain more than text — an icon, a nested\nelement — because flattening those to a string reads badly. It never\nchanges what the strip renders: `children` still render there as-is.\nWithout it the menu row falls back to the flattened `children`, then to\n`value`."},badge:{required:!1,tsType:{name:"number"},description:"Count shown in a trailing {@link Badge}. A zero or omitted count renders no badge."},badgeTooltip:{required:!1,tsType:{name:"string"},description:"Tooltip text describing what the badge counts. Requires `badge`."},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents selection and skips the tab during arrow-key navigation."}}};const l=t=>{const{value:a,children:r,...s}=t,{classes:i,getPanelId:d,getTabId:p,selectedValue:y,unmountInactive:T}=ut(),g=y===a,[S,C]=Re(s);if(T&&!g)return null;const j=typeof r=="function"?r({isActive:g}):r;return e.jsx(Zt,{value:g,children:e.jsx(m,{role:"tabpanel","aria-labelledby":p(a),tabIndex:g?0:-1,display:g?"block":"none",_hidden:{display:"none"},className:He(i.panel,S),...C,id:d(a),hidden:!g,children:j})})};ot(l,Ae,ke.panel);l.__docgenInfo={description:'Renders the content for one {@link Tab}.\n\nThe panel stays mounted when another tab is selected and is hidden with\n`display: none`, which preserves scroll position and local state; set\n`unmountInactive` on `Tabs` to render only the selected panel instead. A\nfunction child receives `{ isActive }`, and descendants can call\n`useTabPanelActive()` for the same signal, so hidden panels can pause polling\nor animation.\n\n@example\n```tsx\n<TabPanel value="materials">\n  {({ isActive }) => <MaterialsGrid paused={!isActive} />}\n</TabPanel>\n```',methods:[],displayName:"TabPanel",props:{value:{required:!0,tsType:{name:"string"},description:"`value` of the {@link Tab} this panel belongs to."},children:{required:!1,tsType:{name:"union",raw:"ReactNode | ((props: TabPanelRenderProps) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:"Panel content. A function child receives `{ isActive }` so expensive work\ncan pause while the panel is mounted but hidden."}}};const je=t=>t==null||typeof t=="boolean"?"":typeof t=="string"||typeof t=="number"?String(t):Array.isArray(t)?t.map(a=>je(a)).join(""):c.isValidElement(t)?je(t.props.children):"",en=({children:t,value:a,defaultValue:r,onChange:s,listRef:i,overflowRef:d})=>{var G;const p=c.useMemo(()=>{const b=[];return pt(t).forEach(v=>{if(!c.isValidElement(v)||bt(v)!==ke.tab)return;const f=v.props;typeof f.value=="string"&&b.push({value:f.value,label:f.label||je(f.children)||f.value,disabled:!!f.disabled,badge:f.badge,badgeTooltip:f.badgeTooltip})}),b},[t]),y=c.useMemo(()=>p.map(b=>b.value),[p]),T=(G=p.find(b=>!b.disabled))==null?void 0:G.value,[g,S,C]=$t({value:a,defaultValue:r??T??""}),E=c.useRef(g),j=c.useRef([]),I=c.useCallback(b=>{E.current=b,j.current=[...j.current.filter(v=>v!==b),b]},[]);c.useEffect(()=>{const b=j.current,v=b.indexOf(g);if(v===-1){j.current=[],E.current=g;return}j.current=b.slice(v+1)},[g]);const M=p.find(b=>b.value===g),O=!!(M&&!M.disabled),F=O?g:T,W=c.useRef(null);c.useEffect(()=>{if(O){W.current=null;return}const b=JSON.stringify([g,T??null]);W.current!==b&&(W.current=b,C||S(T??""),T!==void 0&&(I(T),s==null||s(null,T,"fallback-after-removal")))},[T,C,O,s,I,S,g]);const H=c.useRef(new Map),P=c.useCallback((b,v)=>{v?H.current.set(b,v):H.current.delete(b)},[]),L=c.useCallback(b=>H.current.get(b)??null,[]),{ensureVisible:R,overflow:D,hasOverflow:U}=Nt({items:y,containerRef:i,getItemElement:L,activeItem:F??null,reserveRef:d}),q=c.useCallback((b,v,f)=>{v===g&&E.current===g||(I(v),S(v),s==null||s(b,v,f))},[s,I,S,g]),k=c.useCallback((b,v)=>{R(b,()=>{const f=()=>{var N;return(N=H.current.get(b))==null?void 0:N.focus()};v!=null&&v.afterMenuClose?queueMicrotask(f):f()})},[R]),K=c.useCallback(b=>{const v=p.filter($=>!$.disabled).map($=>$.value);if(v.length===0)return;let f=F;for(const[$,Be]of H.current)if(Be===b.currentTarget){f=$;break}const N=f===void 0?0:Math.max(0,v.indexOf(f));let A;switch(b.key){case"ArrowRight":A=(N+1)%v.length;break;case"ArrowLeft":A=(N-1+v.length)%v.length;break;case"Home":A=0;break;case"End":A=v.length-1;break;default:return}b.preventDefault();const Y=v[A];Y!==void 0&&(q(b,Y,"clicked-on-tab"),k(Y))},[k,q,F,p]),_=c.useMemo(()=>D.map(b=>p.find(v=>v.value===b)).filter(b=>!!b),[D,p]);return{hasOverflow:U,focusTab:k,onTabKeyDown:K,overflowTabs:_,overflowValues:D,registerTabElement:P,selectTab:q,selectedValue:F,tabs:p}},an=({className:t,focusTab:a,tabs:r,selectTab:s,selectedValue:i})=>{const[d,p]=c.useState(!1);return e.jsx(Lt,{open:d,onOpenChange:p,placement:"bottom-end",className:t,trigger:e.jsx(lt,{variant:"ghost",size:"md",iconName:d?"caret-up":"caret-down",altText:"More tabs","aria-haspopup":"menu"}),children:r.map(y=>{const T=typeof y.badge=="number"&&y.badge!==0;return e.jsx(Dt,{label:T?`${y.label} (${String(y.badge)})`:y.label,description:T?y.badgeTooltip:void 0,disabled:y.disabled,selected:y.value===i,role:"menuitemradio","aria-checked":y.value===i,onClick:g=>{s(g,y.value,"selected-from-overflow"),p(!1),a(y.value,{afterMenuClose:!0})}},y.value)})})},w=t=>{const{children:a,value:r,defaultValue:s,onChange:i,unmountInactive:d=!1,"aria-label":p,"aria-labelledby":y,...T}=t,[g,S]=Re(T),C=c.useRef(null),E=c.useRef(null),j=c.useId(),{focusTab:I,hasOverflow:M,onTabKeyDown:O,overflowTabs:F,overflowValues:W,registerTabElement:H,selectTab:P,selectedValue:L}=en({children:a,value:r,defaultValue:s,onChange:i,listRef:C,overflowRef:E}),R=c.useMemo(()=>ct({hasOverflow:M}),[M]),[D,U]=c.useMemo(()=>{const k=[],K=[];return pt(a).forEach(_=>{bt(_)===ke.tab?k.push(_):K.push(_)}),[k,K]},[a]),q=c.useMemo(()=>({classes:R,getPanelId:k=>`${j}-panel-${encodeURIComponent(k)}`,getTabId:k=>`${j}-tab-${encodeURIComponent(k)}`,onTabKeyDown:O,overflowValues:W,registerTabElement:H,selectTab:P,selectedValue:L,unmountInactive:d}),[j,R,O,W,H,P,L,d]);return e.jsx(Jt,{value:q,children:e.jsxs(m,{...st("Tabs"),className:He(R.root,g),...S,children:[e.jsxs(m,{className:R.strip,children:[e.jsx(m,{ref:C,role:"tablist","aria-label":p,"aria-labelledby":y,"aria-orientation":"horizontal",className:R.list,children:D}),e.jsx(m,{ref:E,className:R.overflow,"aria-hidden":!M||void 0,children:M?e.jsx(an,{className:R.menu,focusTab:I,tabs:F,selectTab:P,selectedValue:L}):e.jsx(lt,{variant:"ghost",size:"md",iconName:"caret-down",altText:"More tabs",disabled:!0,tabIndex:-1})})]}),U]})})};w.__docgenInfo={description:'Groups related content into a single view with one panel visible at a time.\n\nCompose it from `Tab` and `TabPanel` children; the first enabled `Tab` is\nselected by default. Selection is uncontrolled with `defaultValue` or\ncontrolled with `value` plus `onChange`. Tabs that do not fit the available width move into\nan overflow menu at the end of the strip, and the selected tab always stays\nvisible. Every panel stays mounted and hidden unless `unmountInactive` is\nset, so read `useTabPanelActive()` to pause work in a hidden panel.\n\nThe strip renders a `tablist` with roving tabindex and Arrow, Home, and End\nnavigation. Supply `aria-label` or `aria-labelledby` so it is announced.\n\n@example\n```tsx\n<Tabs defaultValue="work" aria-label="Order sections">\n  <Tab value="work">Work</Tab>\n  <Tab value="materials" badge={3}>Materials</Tab>\n  <TabPanel value="work">Work content</TabPanel>\n  <TabPanel value="materials">Materials content</TabPanel>\n</Tabs>\n```',methods:[],displayName:"Tabs",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"`Tab` and `TabPanel` children. Tab order in the strip follows source order."},value:{required:!1,tsType:{name:"string"},description:"Controlled selected tab `value`. Pair with `onChange`; omit it to use `defaultValue`."},defaultValue:{required:!1,tsType:{name:"string"},description:"Initially selected tab `value` when `value` is not provided. It is used\nonly on first render.\n@default the first `Tab` child's `value`"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  event: TabsChangeEvent,
  value: string,
  reason: TabsChangeReason,
) => void`,signature:{arguments:[{type:{name:"union",raw:`| ReactMouseEvent<HTMLElement>
| ReactKeyboardEvent<HTMLElement>
| null`,elements:[{name:"ReactMouseEvent",elements:[{name:"HTMLElement"}],raw:"ReactMouseEvent<HTMLElement>"},{name:"ReactKeyboardEvent",elements:[{name:"HTMLElement"}],raw:"ReactKeyboardEvent<HTMLElement>"},{name:"null"}]},name:"event"},{type:{name:"string"},name:"value"},{type:{name:"union",raw:`| 'clicked-on-tab'
| 'selected-from-overflow'
| 'fallback-after-removal'`,elements:[{name:"literal",value:"'clicked-on-tab'"},{name:"literal",value:"'selected-from-overflow'"},{name:"literal",value:"'fallback-after-removal'"}]},name:"reason"}],return:{name:"void"}}},description:"Runs when user interaction selects a different tab."},unmountInactive:{required:!1,tsType:{name:"boolean"},description:"Renders only the selected `TabPanel`. By default every panel stays mounted\nand inactive panels are hidden with `display: none`, which preserves their\nscroll position and local state.\n@default false"},"aria-label":{required:!1,tsType:{name:"string"},description:"Accessible name for the tab strip. Provide this or `aria-labelledby` so the\n`tablist` is announced."},"aria-labelledby":{required:!1,tsType:{name:"string"},description:"Id of an element that labels the tab strip."}}};const{expect:n,userEvent:h,waitFor:B,within:x}=__STORYBOOK_MODULE_TEST__,An={title:"Components/Tabs",component:w,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:["Tabs keep every `TabPanel` mounted by default and hide the inactive","ones with `display: none`. That preserves scroll position, form","drafts, and grid state when a user moves between tabs, at the cost","of keeping hidden work alive. Hidden panels receive an `isActive`","signal — as a render-prop argument or through `useTabPanelActive()`","— so polling, timers, and animation can pause themselves. Set","`unmountInactive` when a panel is expensive enough that discarding","its state is the better trade."].join(" ")}}},args:{"aria-label":"Example sections",children:null}},Q={render:t=>e.jsxs(w,{...t,defaultValue:"overview",children:[e.jsx(o,{value:"overview",children:"Overview"}),e.jsx(o,{value:"activity",children:"Activity"}),e.jsx(o,{value:"settings",children:"Settings"}),e.jsx(l,{value:"overview",children:e.jsx(u,{py:"16",children:"Summary of the current record."})}),e.jsx(l,{value:"activity",children:e.jsx(u,{py:"16",children:"Recent activity for the current record."})}),e.jsx(l,{value:"settings",children:e.jsx(u,{py:"16",children:"Settings for the current record."})})]})},J={name:"Badges",parameters:{controls:{disable:!0}},render:t=>e.jsxs(w,{...t,defaultValue:"work",children:[e.jsx(o,{value:"work",children:"Work"}),e.jsx(o,{value:"materials",badge:3,badgeTooltip:"2 Open Part Request, 1 Short Part(s)",children:"Materials"}),e.jsx(o,{value:"status",badge:12,children:"Status"}),e.jsx(o,{value:"documents",badge:0,children:"Documents"}),e.jsx(l,{value:"work",children:e.jsx(u,{py:"16",children:"A badge without a tooltip is a bare count."})}),e.jsx(l,{value:"materials",children:e.jsx(u,{py:"16",children:"Hover or focus the Materials tab to read what the count means."})}),e.jsx(l,{value:"status",children:e.jsx(u,{py:"16",children:"Status content."})}),e.jsx(l,{value:"documents",children:e.jsx(u,{py:"16",children:"A zero count renders no badge at all."})})]})},Ee=["Work","Info","Materials","Status","Documents","History","Labor","Quality","Shipping","Invoicing","Costing","Notes"],Z={name:"Overflow",parameters:{controls:{disable:!0}},render:t=>e.jsxs(m,{resize:"horizontal",overflow:"auto",width:"lg",maxWidth:"full",minWidth:"240",borderWidth:"1",borderStyle:"dashed",borderColor:"border",p:"16",children:[e.jsx(u,{pb:"12",color:"text.subtlest",children:"Drag the bottom-right corner. Tabs nearest the selected one keep their place; the rest move into the overflow menu."}),e.jsxs(w,{...t,defaultValue:"work",children:[Ee.map(a=>e.jsx(o,{value:a.toLowerCase(),children:a},a)),Ee.map(a=>e.jsx(l,{value:a.toLowerCase(),children:e.jsxs(u,{py:"16",children:[a," content."]})},a))]})]})},Me=[{value:"work",label:"Work",icon:"wrench-2"},{value:"materials",label:"Materials",icon:"cube-focus"},{value:"schedule",label:"Schedule",icon:"calendar-view-week"},{value:"shipping",label:"Shipping",icon:"truck-trailer"},{value:"quality",label:"Quality",icon:"list-checks"},{value:"history",label:"History",icon:"clock-countdown"},{value:"notes",label:"Notes",icon:"note-stack"}],X={name:"Label Override for Overflow",parameters:{controls:{disable:!0}},render:t=>e.jsxs(m,{width:"md",maxWidth:"full",children:[e.jsx(u,{pb:"12",color:"text.subtlest",children:"These tabs render an icon beside their text, so flattening `children` would produce a poor menu row. Each one passes `label`, and the overflow menu uses that text. The strip still renders `children` as-is."}),e.jsxs(w,{...t,defaultValue:"work",children:[Me.map(a=>e.jsxs(o,{value:a.value,label:a.label,children:[e.jsx(Wt,{name:a.icon,"aria-hidden":!0}),a.label]},a.value)),Me.map(a=>e.jsx(l,{value:a.value,children:e.jsxs(u,{py:"16",children:[a.label," content."]})},a.value))]})]})},ee={name:"Unmount Inactive Panels",parameters:{controls:{disable:!0}},render:t=>e.jsxs(w,{...t,defaultValue:"first",unmountInactive:!0,children:[e.jsx(o,{value:"first",children:"First"}),e.jsx(o,{value:"second",children:"Second"}),e.jsx(l,{value:"first",children:e.jsx(u,{py:"16",children:"Only this panel exists in the DOM while it is selected."})}),e.jsx(l,{value:"second",children:e.jsx(u,{py:"16",children:"Switching tabs unmounts the other panel and discards its state."})})]})},tn=()=>{const[t,a]=c.useState(!0),[r,s]=c.useState("none yet");return e.jsxs(m,{children:[e.jsx(m,{pb:"12",children:e.jsx(z,{variant:"hollow",size:"sm",onClick:()=>a(i=>!i),children:t?"Remove Schedule tab":"Add Schedule tab"})}),e.jsxs(w,{"aria-label":"Work order sections",defaultValue:"work",onChange:(i,d,p)=>s(`${d} (${p})`),children:[e.jsx(o,{value:"work",children:"Work"}),e.jsx(o,{value:"info",children:"Info"}),e.jsx(o,{value:"materials",badge:3,badgeTooltip:"2 Open Part Request, 1 Short Part(s)",children:"Materials"}),e.jsx(o,{value:"status",badge:5,badgeTooltip:"5 Operations Behind",children:"Status"}),t?e.jsx(o,{value:"schedule",children:"Schedule"}):null,e.jsx(o,{value:"documents",children:"Documents"}),e.jsx(o,{value:"history",children:"History"}),e.jsx(l,{value:"work",children:e.jsx(u,{py:"16",children:"Work instructions and operations."})}),e.jsx(l,{value:"info",children:e.jsx(u,{py:"16",children:"Order header and customer details."})}),e.jsx(l,{value:"materials",children:e.jsx(u,{py:"16",children:"Bill of materials and part requests."})}),e.jsx(l,{value:"status",children:e.jsx(u,{py:"16",children:"Operation status roll-up."})}),e.jsx(l,{value:"schedule",children:({isActive:i})=>e.jsxs(u,{py:"16",children:["Schedule board. Live refresh is ",i?"running":"paused",". Select this tab, remove it with the button above, and the strip falls back to the first remaining tab."]})}),e.jsx(l,{value:"documents",children:e.jsx(u,{py:"16",children:"Attached drawings and travelers."})}),e.jsx(l,{value:"history",children:e.jsx(u,{py:"16",children:"Audit trail."})})]}),e.jsxs(u,{pt:"16",color:"text.subtlest",children:["Last change: ",r]})]})},ae={name:"Ex: Work View",parameters:{controls:{disable:!0}},render:()=>e.jsx(tn,{})},nn=()=>{const[t,a]=c.useState(!0),[r,s]=c.useState("schedule");return e.jsxs(m,{children:[e.jsx(z,{variant:"hollow",size:"sm",onClick:()=>a(i=>!i),children:t?"Remove Schedule tab":"Add Schedule tab"}),e.jsxs(u,{py:"8","data-testid":"controlled-value",children:["Parent value: ",r]}),e.jsxs(w,{"aria-label":"Controlled sections",value:r,onChange:(i,d)=>s(d),children:[e.jsx(o,{value:"work",children:"Work"}),t?e.jsx(o,{value:"schedule",children:"Schedule"}):null,e.jsx(o,{value:"history",children:"History"}),e.jsx(l,{value:"work",children:"Work content."}),e.jsx(l,{value:"schedule",children:"Schedule content."}),e.jsx(l,{value:"history",children:"History content."})]})]})},te={name:"Test: controlled value follows a removed tab",parameters:{controls:{disable:!0}},render:()=>e.jsx(nn,{}),play:async({canvasElement:t})=>{const a=x(t);await n(a.getByRole("tab",{name:"Schedule"})).toHaveAttribute("aria-selected","true"),await h.click(a.getByRole("button",{name:"Remove Schedule tab"})),await B(async()=>{await n(a.getByTestId("controlled-value")).toHaveTextContent("Parent value: work"),await n(a.getByRole("tab",{name:"Work"})).toHaveAttribute("aria-selected","true")})}},rn=()=>{const[t,a]=c.useState(!0);return e.jsxs(m,{children:[e.jsx(z,{variant:"hollow",size:"sm",onClick:()=>a(r=>!r),children:t?"Remove Schedule tab":"Add Schedule tab"}),e.jsxs(w,{"aria-label":"Uncontrolled sections",defaultValue:"schedule",children:[e.jsx(o,{value:"work",children:"Work"}),t?e.jsx(o,{value:"schedule",children:"Schedule"}):null,e.jsx(o,{value:"history",children:"History"}),e.jsx(l,{value:"work",children:"Work content."}),e.jsx(l,{value:"schedule",children:"Schedule content."}),e.jsx(l,{value:"history",children:"History content."})]})]})},ne={name:"Test: removed uncontrolled value does not return",parameters:{controls:{disable:!0}},render:()=>e.jsx(rn,{}),play:async({canvasElement:t})=>{const a=x(t);await h.click(a.getByRole("button",{name:"Remove Schedule tab"})),await n(a.getByRole("tab",{name:"Work"})).toHaveAttribute("aria-selected","true"),await h.click(a.getByRole("button",{name:"Add Schedule tab"})),await n(a.getByRole("tab",{name:"Work"})).toHaveAttribute("aria-selected","true"),await n(a.getByRole("tab",{name:"Schedule"})).toHaveAttribute("aria-selected","false")}},re={name:"Test: overflow keeps badge details and selection semantics",parameters:{controls:{disable:!0}},render:t=>e.jsx(m,{"data-overflow-metadata-wrapper":!0,children:e.jsxs(w,{...t,defaultValue:"work",children:[e.jsx(o,{value:"work",children:"Work"}),e.jsx(o,{value:"materials",badge:3,badgeTooltip:"2 Open Part Requests, 1 Short Part",children:"Materials"}),e.jsx(o,{value:"documents",children:"Documents"}),e.jsx(o,{value:"history",children:"History"}),e.jsx(l,{value:"work",children:"Work content."}),e.jsx(l,{value:"materials",children:"Materials content."}),e.jsx(l,{value:"documents",children:"Documents content."}),e.jsx(l,{value:"history",children:"History content."})]})}),play:async({canvasElement:t})=>{const a=x(t),r=x(t.ownerDocument.body),s=t.querySelector("[data-overflow-metadata-wrapper]");if(!s)throw new Error("overflow metadata wrapper not found");s.style.width="180px";const i=await a.findByRole("button",{name:"More tabs"});await h.click(i);const d=await r.findByRole("menuitemradio",{name:/Materials \(3\)/});await n(d).toHaveAttribute("aria-checked","false"),await n(d).toHaveTextContent("2 Open Part Requests, 1 Short Part")}},sn=()=>{const[t,a]=c.useState(0),[r,s]=c.useState("none");return e.jsxs(m,{children:[e.jsxs(u,{pb:"8","data-testid":"consumer-events",children:["Clicks: ",t,"; last key: ",r]}),e.jsxs(w,{"aria-label":"Handler composition",defaultValue:"first",children:[e.jsx(o,{value:"first",onClick:()=>a(i=>i+1),children:"First"}),e.jsx(o,{value:"second",onKeyDown:i=>s(i.key),children:"Second"}),e.jsx(l,{value:"first",children:"First content."}),e.jsx(l,{value:"second",children:"Second content."})]})]})},se={name:"Test: consumer handlers preserve tab interactions",parameters:{controls:{disable:!0}},render:()=>e.jsx(sn,{}),play:async({canvasElement:t})=>{const a=x(t),r=a.getByRole("tab",{name:"First"}),s=a.getByRole("tab",{name:"Second"}),i=a.getByTestId("consumer-events");await h.click(s),await n(s).toHaveAttribute("aria-selected","true"),await h.keyboard("{ArrowLeft}"),await n(r).toHaveAttribute("aria-selected","true"),await n(i).toHaveTextContent("last key: ArrowLeft"),await h.click(r),await n(i).toHaveTextContent("Clicks: 1")}},oe={name:"Test: disabled first tab is not the default",parameters:{controls:{disable:!0}},render:t=>e.jsxs(m,{children:[e.jsx(u,{pb:"12",color:"text.subtlest",children:"No `defaultValue` is given and the first tab is disabled. The strip selects the first enabled tab so the keyboard can still enter it."}),e.jsxs(w,{...t,children:[e.jsx(o,{value:"archived",disabled:!0,children:"Archived"}),e.jsx(o,{value:"open",children:"Open"}),e.jsx(o,{value:"closed",children:"Closed"}),e.jsx(l,{value:"archived",children:e.jsx(u,{py:"16",children:"Archived content."})}),e.jsx(l,{value:"open",children:e.jsx(u,{py:"16",children:"Open content."})}),e.jsx(l,{value:"closed",children:e.jsx(u,{py:"16",children:"Closed content."})})]})]}),play:async({canvasElement:t})=>{const a=x(t),r=a.getByRole("tab",{name:"Open"});await n(r).toHaveAttribute("aria-selected","true"),await n(r).toHaveAttribute("tabindex","0"),await n(a.getByRole("tab",{name:"Archived"})).toHaveAttribute("aria-selected","false"),await h.tab(),await n(r).toHaveFocus()}},le={name:"Test: badge does not change tab height",parameters:{controls:{disable:!0}},render:t=>e.jsxs(m,{display:"flex",flexDirection:"column",gap:"16",children:[e.jsx(u,{color:"text.subtlest",children:"Both strips are 40px tall. The 20px badge sits inside the 22px line box and never grows the tab. Matches Figma `_TabsTab`."}),e.jsxs(w,{...t,"aria-label":"Without badges",defaultValue:"work",children:[e.jsx(o,{value:"work",children:"Work"}),e.jsx(o,{value:"materials",children:"Materials"})]}),e.jsxs(w,{...t,"aria-label":"With badges",defaultValue:"work",children:[e.jsx(o,{value:"work",badge:3,children:"Work"}),e.jsx(o,{value:"materials",badge:12,badgeTooltip:"12 Short Part(s)",children:"Materials"})]})]}),play:async({canvasElement:t})=>{const a=x(t),[r,s]=a.getAllByRole("tablist");await n(s==null?void 0:s.offsetHeight).toBe(r==null?void 0:r.offsetHeight);for(const i of a.getAllByRole("tab"))await n(i.offsetHeight).toBe(40)}},ie=["Work","Info","Materials","Status"],ce={name:"Test: toggle space is reserved only once tabs overflow",parameters:{controls:{disable:!0}},render:t=>e.jsxs(m,{children:[e.jsx(u,{pb:"12",color:"text.subtlest",children:"The wrapper is sized just above the strip width. Every tab fits, so no toggle renders. Shrinking it below the strip makes the measured toggle appear."}),e.jsx(m,{"data-fit-wrapper":!0,borderWidth:"1",borderStyle:"dashed",borderColor:"border",children:e.jsxs(w,{...t,defaultValue:"work",children:[ie.map(a=>e.jsx(o,{value:a.toLowerCase(),children:a},a)),ie.map(a=>e.jsx(l,{value:a.toLowerCase(),children:e.jsxs(u,{py:"16",children:[a," content."]})},a))]})})]}),play:async({canvasElement:t})=>{const a=x(t),r=t.querySelector("[data-fit-wrapper]"),s=a.getByRole("tablist"),i=a.getAllByRole("tab");if(!r)throw new Error("wrapper not found");const d=Number.parseFloat(getComputedStyle(s).columnGap)||0,p=i.reduce((y,T)=>y+T.getBoundingClientRect().width,0)+d*(i.length-1);r.style.width=`${String(Math.ceil(p)+16)}px`,await B(async()=>{await n(a.getAllByRole("tab")).toHaveLength(ie.length),await n(a.queryByRole("button",{name:"More tabs"})).not.toBeInTheDocument()}),r.style.width=`${String(Math.floor(p)-8)}px`,await B(async()=>{await n(a.getByRole("button",{name:"More tabs"})).toBeInTheDocument(),await n(a.getAllByRole("tab").length).toBeLessThan(ie.length)})}},de={name:"Test: tabs grouped in fragments join the strip",parameters:{controls:{disable:!0}},render:t=>e.jsxs(w,{...t,"aria-label":"Fragment children",defaultValue:"work",children:[e.jsxs(e.Fragment,{children:[e.jsx(o,{value:"work",children:"Work"}),e.jsx(e.Fragment,{children:e.jsx(o,{value:"materials",children:"Materials"})})]}),e.jsxs(e.Fragment,{children:[e.jsx(l,{value:"work",children:"Work content."}),e.jsx(l,{value:"materials",children:"Materials content."})]})]}),play:async({canvasElement:t})=>{const a=x(t),r=a.getByRole("tablist"),s=a.getByRole("tab",{name:"Materials"});await n(x(r).getAllByRole("tab")).toHaveLength(2),await h.click(s),await n(s).toHaveAttribute("aria-selected","true"),await n(a.getByText("Materials content.")).toBeVisible()}},on=()=>{const t=c.useRef(null),[a,r]=c.useState("none");return e.jsxs(m,{children:[e.jsx(z,{variant:"standard",mb:"8",onClick:()=>{var s;return r(((s=t.current)==null?void 0:s.tagName)??"none")},children:"Read ref"}),e.jsxs(u,{pb:"8","data-testid":"consumer-ref",children:["Ref: ",a]}),e.jsxs(w,{"aria-label":"Consumer ref",defaultValue:"first",children:[e.jsx(o,{value:"first",children:"First"}),e.jsx(o,{value:"second",ref:t,children:"Second"}),e.jsx(l,{value:"first",children:"First content."}),e.jsx(l,{value:"second",children:"Second content."})]})]})},ue={name:"Test: consumer ref keeps tab registration",parameters:{controls:{disable:!0}},render:()=>e.jsx(on,{}),play:async({canvasElement:t})=>{const a=x(t),r=a.getByRole("tab",{name:"First"}),s=a.getByRole("tab",{name:"Second"});await h.click(a.getByRole("button",{name:"Read ref"})),await n(a.getByTestId("consumer-ref")).toHaveTextContent("Ref: BUTTON"),await h.click(r),await h.keyboard("{ArrowRight}"),await n(s).toHaveAttribute("aria-selected","true"),await n(s).toHaveFocus()}},be={name:"Test: badge tooltip opens on tab keyboard focus",parameters:{controls:{disable:!0}},render:t=>e.jsxs(w,{...t,"aria-label":"Badge tooltip",defaultValue:"materials",children:[e.jsx(o,{value:"materials",badge:3,badgeTooltip:"2 Open Part Requests",children:"Materials"}),e.jsx(o,{value:"status",children:"Status"}),e.jsx(l,{value:"materials",children:"Materials content."}),e.jsx(l,{value:"status",children:"Status content."})]}),play:async({canvasElement:t})=>{const a=x(t),r=x(t.ownerDocument.body),s=a.getByRole("tab",{name:/Materials/});await h.tab(),await n(s).toHaveFocus();const i=await r.findByRole("tooltip");await n(i).toHaveTextContent("2 Open Part Requests"),await n(s).toHaveAttribute("aria-describedby",i.id)}},Se=()=>{const[t,a]=c.useState("alpha"),[r,s]=c.useState([]);return e.jsxs(m,{children:[e.jsxs(u,{pb:"8","data-testid":"deferred-value",children:["Parent value: ",t]}),e.jsxs(u,{pb:"8","data-testid":"deferred-requests",children:["Requests: ",r.join(", ")]}),e.jsx(m,{"data-deferred-wrapper":!0,children:e.jsxs(w,{"aria-label":"Deferred selection",value:t,onChange:(i,d)=>{s(p=>[...p,d]),globalThis.setTimeout(()=>a(d),300)},children:[e.jsx(o,{value:"alpha",children:"Alpha section"}),e.jsx(o,{value:"bravo",children:"Bravo section"}),e.jsx(o,{value:"charlie",children:"Charlie section"}),e.jsx(l,{value:"alpha",children:"Alpha content."}),e.jsx(l,{value:"bravo",children:"Bravo content."}),e.jsx(l,{value:"charlie",children:"Charlie content."})]})})]})},pe={name:"Test: deferred controlled selection keeps the focused tab visible",parameters:{controls:{disable:!0}},render:()=>e.jsx(Se,{}),play:async({canvasElement:t})=>{const a=x(t),r=t.querySelector("[data-deferred-wrapper]");if(!r)throw new Error("deferred wrapper not found");const s=a.getByRole("tab",{name:"Alpha section"});r.style.width=`${String(Math.ceil(s.getBoundingClientRect().width)+48)}px`,await B(async()=>{await n(a.getAllByRole("tab")).toHaveLength(1)}),await h.click(s),await h.keyboard("{ArrowRight}");const i=await a.findByRole("tab",{name:"Bravo section"});await n(i).toHaveFocus(),await n(a.getByTestId("deferred-value")).toHaveTextContent("Parent value: alpha"),await B(async()=>{await n(a.getByTestId("deferred-value")).toHaveTextContent("Parent value: bravo")}),await n(i).toHaveAttribute("aria-selected","true"),await n(i).toHaveFocus(),r.style.width="",await B(async()=>{await n(a.getAllByRole("tab")).toHaveLength(3)}),await h.keyboard("{ArrowLeft}"),await B(async()=>{await n(a.getByTestId("deferred-value")).toHaveTextContent("Parent value: alpha")}),await h.keyboard("{ArrowRight}{ArrowRight}");const d=a.getByRole("tab",{name:"Charlie section"});await n(d).toHaveFocus(),await B(async()=>{await n(a.getByTestId("deferred-value")).toHaveTextContent("Parent value: charlie")}),await h.keyboard("{ArrowLeft}{ArrowLeft}"),await n(a.getByRole("tab",{name:"Alpha section"})).toHaveFocus(),await B(async()=>{await n(a.getByTestId("deferred-value")).toHaveTextContent("Parent value: alpha")})}},ve={name:"Test: a deferred return to the committed tab still reaches the parent",parameters:{controls:{disable:!0}},render:()=>e.jsx(Se,{}),play:async({canvasElement:t})=>{const a=x(t),r=a.getByRole("tab",{name:"Alpha section"});await h.click(r),await h.keyboard("{ArrowRight}{ArrowLeft}"),await n(r).toHaveFocus(),await n(a.getByTestId("deferred-requests")).toHaveTextContent("Requests: bravo, alpha"),await new Promise(s=>globalThis.setTimeout(s,500)),await n(a.getByTestId("deferred-value")).toHaveTextContent("Parent value: alpha"),await n(r).toHaveAttribute("aria-selected","true"),await n(r).toHaveFocus()}},he={name:"Test: rapid keys in a narrow deferred strip keep focus through intermediate commits",parameters:{controls:{disable:!0}},render:()=>e.jsx(Se,{}),play:async({canvasElement:t})=>{const a=x(t),r=t.querySelector("[data-deferred-wrapper]");if(!r)throw new Error("deferred wrapper not found");const s=a.getByTestId("deferred-value"),i=async T=>{await B(async()=>{await n(s).toHaveTextContent(`Parent value: ${T}`)}),await new Promise(g=>globalThis.setTimeout(g,100))},d=a.getByRole("tab",{name:"Alpha section"});r.style.width=`${String(Math.ceil(d.getBoundingClientRect().width)+48)}px`,await B(async()=>{await n(a.getAllByRole("tab")).toHaveLength(1)}),await h.click(d),await h.keyboard("{ArrowRight}{ArrowRight}");const p=await a.findByRole("tab",{name:"Charlie section"});await n(p).toHaveFocus(),await B(async()=>{await n(s).toHaveTextContent("Parent value: bravo")}),await n(p).toBeVisible(),await n(p).toHaveFocus(),await i("charlie"),await n(p).toHaveAttribute("aria-selected","true"),await n(p).toHaveFocus(),await h.keyboard("{ArrowLeft}{ArrowLeft}"),await i("alpha");const y=a.getByRole("tab",{name:"Alpha section"});await n(y).toHaveAttribute("aria-selected","true"),await n(y).toHaveFocus(),await h.keyboard("{ArrowRight}{ArrowLeft}"),await i("alpha"),await n(a.getByTestId("deferred-requests")).toHaveTextContent(/bravo, alpha$/),await n(a.getByRole("tab",{name:"Alpha section"})).toHaveFocus()}},ln=()=>{const[t,a]=c.useState("missing");return e.jsxs(m,{children:[e.jsxs(u,{pb:"8","data-testid":"empty-fallback-value",children:['Parent value: "',t,'"']}),e.jsxs(w,{"aria-label":"Empty fallback",value:t,onChange:(r,s)=>a(s),children:[e.jsx(o,{value:"",children:"Overview"}),e.jsx(o,{value:"details",children:"Details"}),e.jsx(l,{value:"",children:"Overview content."}),e.jsx(l,{value:"details",children:"Details content."})]}),e.jsx(m,{"data-empty-wrapper":!0,pt:"16",children:e.jsxs(w,{"aria-label":"Empty selected",defaultValue:"",children:[e.jsx(o,{value:"work",children:"Work section"}),e.jsx(o,{value:"materials",children:"Materials section"}),e.jsx(o,{value:"",children:"Summary section"}),e.jsx(l,{value:"work",children:"Work content."}),e.jsx(l,{value:"materials",children:"Materials content."}),e.jsx(l,{value:"",children:"Summary content."})]})})]})},me={name:"Test: an empty-string tab value is a real selection",parameters:{controls:{disable:!0}},render:()=>e.jsx(ln,{}),play:async({canvasElement:t})=>{const a=x(t);await B(async()=>{await n(a.getByTestId("empty-fallback-value")).toHaveTextContent('Parent value: ""')}),await n(a.getByRole("tab",{name:"Overview"})).toHaveAttribute("aria-selected","true");const r=t.querySelector("[data-empty-wrapper]");if(!r)throw new Error("empty wrapper not found");const s=a.getByRole("tab",{name:"Summary section"});r.style.width=`${String(Math.ceil(s.getBoundingClientRect().width)+48)}px`;const i=a.getByRole("tablist",{name:"Empty selected"});await B(async()=>{await n(x(i).getAllByRole("tab")).toHaveLength(1)});const d=x(i).getByRole("tab",{name:"Summary section"});await n(d).toHaveAttribute("aria-selected","true"),await n(d).toHaveAttribute("tabindex","0")}},we={name:"Test: with no enabled tabs, an empty-string tab is not selected",parameters:{controls:{disable:!0}},render:t=>e.jsxs(w,{...t,"aria-label":"No enabled tabs",children:[e.jsx(o,{value:"",disabled:!0,children:"Overview"}),e.jsx(o,{value:"details",disabled:!0,children:"Details"}),e.jsx(l,{value:"",children:e.jsx(u,{py:"16",children:"Overview content."})}),e.jsx(l,{value:"details",children:e.jsx(u,{py:"16",children:"Details content."})})]}),play:async({canvasElement:t})=>{const a=x(t);for(const r of a.getAllByRole("tab"))await n(r).toHaveAttribute("aria-selected","false");await n(a.getByText("Overview content.")).not.toBeVisible(),await n(a.getByText("Details content.")).not.toBeVisible()}},ye={name:"Test: a responsive panel display never reveals an inactive panel",parameters:{controls:{disable:!0}},render:t=>e.jsxs(w,{...t,"aria-label":"Responsive panels",defaultValue:"work",children:[e.jsx(o,{value:"work",children:"Work"}),e.jsx(o,{value:"materials",children:"Materials"}),e.jsxs(l,{value:"work",display:{xs:"flex"},gap:"8",py:"16",children:[e.jsx(u,{children:"Work content."}),e.jsx(z,{children:"Start work"})]}),e.jsxs(l,{value:"materials",display:{xs:"flex"},gap:"8",py:"16",children:[e.jsx(u,{children:"Materials content."}),e.jsx(z,{children:"Issue materials"})]})]}),play:async({canvasElement:t})=>{const a=x(t);await n(a.getByText("Work content.")).toBeVisible(),await n(a.getByText("Materials content.")).not.toBeVisible(),await n(a.queryByRole("button",{name:"Issue materials"})).toBeNull(),await h.click(a.getByRole("tab",{name:"Materials"})),await n(a.getByText("Materials content.")).toBeVisible(),await n(a.getByText("Work content.")).not.toBeVisible()}},ge={name:"Test: tab values with spaces still link tab and panel",parameters:{controls:{disable:!0}},render:t=>e.jsxs(w,{...t,"aria-label":"Order sections",defaultValue:"work orders",children:[e.jsx(o,{value:"work orders",children:"Work orders"}),e.jsx(o,{value:"sales orders",children:"Sales orders"}),e.jsx(l,{value:"work orders",children:e.jsx(u,{py:"16",children:"Open work orders."})}),e.jsx(l,{value:"sales orders",children:e.jsx(u,{py:"16",children:"Open sales orders."})})]}),play:async({canvasElement:t})=>{const a=x(t),r=a.getByRole("tab",{name:"Work orders"}),s=a.getByRole("tabpanel",{name:"Work orders"});await n(s.id).not.toMatch(/\s/),await n(r.id).not.toMatch(/\s/),await n(r).toHaveAttribute("aria-controls",s.id),await n(s).toHaveAttribute("aria-labelledby",r.id)}},Oe=t=>({id:t}),xe={name:"Test: a consumer id never breaks the tab and panel links",parameters:{controls:{disable:!0}},render:t=>e.jsxs(w,{...t,"aria-label":"Consumer ids",defaultValue:"work",children:[e.jsx(o,{value:"work",...Oe("work-tab"),children:"Work"}),e.jsx(o,{value:"materials",children:"Materials"}),e.jsx(l,{value:"work",...Oe("work-panel"),children:e.jsx(u,{py:"16",children:"Work content."})}),e.jsx(l,{value:"materials",children:e.jsx(u,{py:"16",children:"Materials content."})})]}),play:async({canvasElement:t})=>{const a=x(t),r=a.getByRole("tab",{name:"Work"}),s=a.getByRole("tabpanel",{name:"Work"});await n(r.id).not.toBe("work-tab"),await n(s.id).not.toBe("work-panel"),await n(r).toHaveAttribute("aria-controls",s.id),await n(s).toHaveAttribute("aria-labelledby",r.id)}},Te={name:"Test: choosing a hidden tab from the menu focuses that tab",parameters:{controls:{disable:!0}},render:t=>e.jsx(m,{"data-overflow-focus-wrapper":!0,children:e.jsxs(w,{...t,"aria-label":"Overflow focus",defaultValue:"work",children:[e.jsx(o,{value:"work",children:"Work"}),e.jsx(o,{value:"materials",children:"Materials"}),e.jsx(o,{value:"documents",children:"Documents"}),e.jsx(o,{value:"history",children:"History"}),e.jsx(l,{value:"work",children:"Work content."}),e.jsx(l,{value:"materials",children:"Materials content."}),e.jsx(l,{value:"documents",children:"Documents content."}),e.jsx(l,{value:"history",children:"History content."})]})}),play:async({canvasElement:t})=>{const a=x(t),r=x(t.ownerDocument.body),s=t.querySelector("[data-overflow-focus-wrapper]");if(!s)throw new Error("overflow focus wrapper not found");s.style.width="180px",await B(async()=>{await n(a.queryByRole("tab",{name:"History"})).toBeNull()});const i=await a.findByRole("button",{name:"More tabs"});await h.click(i),await h.click(await r.findByRole("menuitemradio",{name:"History"}));const d=await a.findByRole("tab",{name:"History"});await n(d).toHaveAttribute("aria-selected","true"),await new Promise(p=>globalThis.requestAnimationFrame(p)),await n(d).toHaveFocus()}},cn=()=>{const[t,a]=c.useState("alpha"),[r,s]=c.useState([]);return e.jsxs(m,{children:[e.jsx(z,{variant:"hollow",size:"sm",onClick:()=>a("bravo"),children:"Select Bravo from outside"}),e.jsxs(u,{py:"8","data-testid":"external-requests",children:["Requests: ",r.length>0?r.join(", "):"none"]}),e.jsxs(w,{"aria-label":"External selection",value:t,onChange:(i,d)=>{s(p=>[...p,d]),a(d)},children:[e.jsx(o,{value:"alpha",children:"Alpha section"}),e.jsx(o,{value:"bravo",children:"Bravo section"}),e.jsx(l,{value:"alpha",children:"Alpha content."}),e.jsx(l,{value:"bravo",children:"Bravo content."})]})]})},fe={name:"Test: clicking a tab the parent already selected sends no change",parameters:{controls:{disable:!0}},render:()=>e.jsx(cn,{}),play:async({canvasElement:t})=>{const a=x(t),r=a.getByTestId("external-requests");await h.click(a.getByRole("button",{name:"Select Bravo from outside"}));const s=a.getByRole("tab",{name:"Bravo section"});await n(s).toHaveAttribute("aria-selected","true"),await h.click(s),await n(r).toHaveTextContent("Requests: none"),await h.click(a.getByRole("tab",{name:"Alpha section"})),await n(r).toHaveTextContent("Requests: alpha")}},Sn=["Default","WithBadges","Overflow","LabelOverride","UnmountInactive","ExWorkView","ControlledFallback","UncontrolledFallback","OverflowMetadata","ComposedTabHandlers","DisabledFirstTab","BadgeKeepsHeight","ToggleReserveOnlyOnOverflow","FragmentChildren","ConsumerRef","BadgeTooltipOnFocus","DeferredControlledOverflow","DeferredControlledReversal","DeferredControlledNarrowStrip","EmptyStringValue","NoEnabledTabs","ResponsivePanelDisplay","ValuesWithSpaces","ConsumerIdsIgnored","OverflowMenuFocus","ExternalValueChange"];var Ve,Ie,Fe;Q.parameters={...Q.parameters,docs:{...(Ve=Q.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
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
}`,...(Fe=(Ie=Q.parameters)==null?void 0:Ie.docs)==null?void 0:Fe.source}}};var We,qe,Le;J.parameters={...J.parameters,docs:{...(We=J.parameters)==null?void 0:We.docs,source:{originalSource:`{
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
}`,...(Le=(qe=J.parameters)==null?void 0:qe.docs)==null?void 0:Le.source}}};var De,_e,Ne;Z.parameters={...Z.parameters,docs:{...(De=Z.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
}`,...(Ne=(_e=Z.parameters)==null?void 0:_e.docs)==null?void 0:Ne.source}}};var $e,ze,Ke;X.parameters={...X.parameters,docs:{...($e=X.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
}`,...(Ke=(ze=X.parameters)==null?void 0:ze.docs)==null?void 0:Ke.source}}};var Ue,Ge,Ye;ee.parameters={...ee.parameters,docs:{...(Ue=ee.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
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
}`,...(Ye=(Ge=ee.parameters)==null?void 0:Ge.docs)==null?void 0:Ye.source}}};var Qe,Je,Ze;ae.parameters={...ae.parameters,docs:{...(Qe=ae.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
  name: 'Ex: Work View',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <WorkView />
}`,...(Ze=(Je=ae.parameters)==null?void 0:Je.docs)==null?void 0:Ze.source}}};var Xe,ea,aa;te.parameters={...te.parameters,docs:{...(Xe=te.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
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
}`,...(aa=(ea=te.parameters)==null?void 0:ea.docs)==null?void 0:aa.source}}};var ta,na,ra;ne.parameters={...ne.parameters,docs:{...(ta=ne.parameters)==null?void 0:ta.docs,source:{originalSource:`{
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
}`,...(ra=(na=ne.parameters)==null?void 0:na.docs)==null?void 0:ra.source}}};var sa,oa,la;re.parameters={...re.parameters,docs:{...(sa=re.parameters)==null?void 0:sa.docs,source:{originalSource:`{
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
}`,...(la=(oa=re.parameters)==null?void 0:oa.docs)==null?void 0:la.source}}};var ia,ca,da;se.parameters={...se.parameters,docs:{...(ia=se.parameters)==null?void 0:ia.docs,source:{originalSource:`{
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
}`,...(da=(ca=se.parameters)==null?void 0:ca.docs)==null?void 0:da.source}}};var ua,ba,pa;oe.parameters={...oe.parameters,docs:{...(ua=oe.parameters)==null?void 0:ua.docs,source:{originalSource:`{
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
}`,...(pa=(ba=oe.parameters)==null?void 0:ba.docs)==null?void 0:pa.source}}};var va,ha,ma;le.parameters={...le.parameters,docs:{...(va=le.parameters)==null?void 0:va.docs,source:{originalSource:`{
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
}`,...(ma=(ha=le.parameters)==null?void 0:ha.docs)==null?void 0:ma.source}}};var wa,ya,ga;ce.parameters={...ce.parameters,docs:{...(wa=ce.parameters)==null?void 0:wa.docs,source:{originalSource:`{
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
}`,...(ga=(ya=ce.parameters)==null?void 0:ya.docs)==null?void 0:ga.source}}};var xa,Ta,fa;de.parameters={...de.parameters,docs:{...(xa=de.parameters)==null?void 0:xa.docs,source:{originalSource:`{
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
}`,...(fa=(Ta=de.parameters)==null?void 0:Ta.docs)==null?void 0:fa.source}}};var ka,Ba,ja;ue.parameters={...ue.parameters,docs:{...(ka=ue.parameters)==null?void 0:ka.docs,source:{originalSource:`{
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
}`,...(ja=(Ba=ue.parameters)==null?void 0:Ba.docs)==null?void 0:ja.source}}};var Ra,Ha,Aa;be.parameters={...be.parameters,docs:{...(Ra=be.parameters)==null?void 0:Ra.docs,source:{originalSource:`{
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
}`,...(Aa=(Ha=be.parameters)==null?void 0:Ha.docs)==null?void 0:Aa.source}}};var Sa,Ca,Pa;pe.parameters={...pe.parameters,docs:{...(Sa=pe.parameters)==null?void 0:Sa.docs,source:{originalSource:`{
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
}`,...(Pa=(Ca=pe.parameters)==null?void 0:Ca.docs)==null?void 0:Pa.source}}};var Ea,Ma,Oa;ve.parameters={...ve.parameters,docs:{...(Ea=ve.parameters)==null?void 0:Ea.docs,source:{originalSource:`{
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
}`,...(Oa=(Ma=ve.parameters)==null?void 0:Ma.docs)==null?void 0:Oa.source}}};var Va,Ia,Fa;he.parameters={...he.parameters,docs:{...(Va=he.parameters)==null?void 0:Va.docs,source:{originalSource:`{
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
}`,...(Fa=(Ia=he.parameters)==null?void 0:Ia.docs)==null?void 0:Fa.source}}};var Wa,qa,La;me.parameters={...me.parameters,docs:{...(Wa=me.parameters)==null?void 0:Wa.docs,source:{originalSource:`{
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
}`,...(La=(qa=me.parameters)==null?void 0:qa.docs)==null?void 0:La.source}}};var Da,_a,Na;we.parameters={...we.parameters,docs:{...(Da=we.parameters)==null?void 0:Da.docs,source:{originalSource:`{
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
}`,...(Na=(_a=we.parameters)==null?void 0:_a.docs)==null?void 0:Na.source}}};var $a,za,Ka;ye.parameters={...ye.parameters,docs:{...($a=ye.parameters)==null?void 0:$a.docs,source:{originalSource:`{
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
}`,...(Ka=(za=ye.parameters)==null?void 0:za.docs)==null?void 0:Ka.source}}};var Ua,Ga,Ya;ge.parameters={...ge.parameters,docs:{...(Ua=ge.parameters)==null?void 0:Ua.docs,source:{originalSource:`{
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
}`,...(Ya=(Ga=ge.parameters)==null?void 0:Ga.docs)==null?void 0:Ya.source}}};var Qa,Ja,Za;xe.parameters={...xe.parameters,docs:{...(Qa=xe.parameters)==null?void 0:Qa.docs,source:{originalSource:`{
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
}`,...(Za=(Ja=xe.parameters)==null?void 0:Ja.docs)==null?void 0:Za.source}}};var Xa,et,at;Te.parameters={...Te.parameters,docs:{...(Xa=Te.parameters)==null?void 0:Xa.docs,source:{originalSource:`{
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
}`,...(at=(et=Te.parameters)==null?void 0:et.docs)==null?void 0:at.source}}};var tt,nt,rt;fe.parameters={...fe.parameters,docs:{...(tt=fe.parameters)==null?void 0:tt.docs,source:{originalSource:`{
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
}`,...(rt=(nt=fe.parameters)==null?void 0:nt.docs)==null?void 0:rt.source}}};export{le as BadgeKeepsHeight,be as BadgeTooltipOnFocus,se as ComposedTabHandlers,xe as ConsumerIdsIgnored,ue as ConsumerRef,te as ControlledFallback,Q as Default,he as DeferredControlledNarrowStrip,pe as DeferredControlledOverflow,ve as DeferredControlledReversal,oe as DisabledFirstTab,me as EmptyStringValue,ae as ExWorkView,fe as ExternalValueChange,de as FragmentChildren,X as LabelOverride,we as NoEnabledTabs,Z as Overflow,Te as OverflowMenuFocus,re as OverflowMetadata,ye as ResponsivePanelDisplay,ce as ToggleReserveOnlyOnOverflow,ne as UncontrolledFallback,ee as UnmountInactive,ge as ValuesWithSpaces,J as WithBadges,Sn as __namedExportsOrder,An as default};
