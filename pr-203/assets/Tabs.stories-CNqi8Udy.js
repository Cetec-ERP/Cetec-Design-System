import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./index-BKyFwriW.js";import{m as je,c as ke,s as Pe,a as Se,g as Ee,b as K,B as I,d as $,e as Oe}from"./dsComponent-BYUIyF_R.js";import{B as ve}from"./Button-Bf2hC955.js";import{I as fe}from"./Icon-Dq9uSEeo.js";import"./IconConfig-CikP2Rer.js";import{T as u}from"./Text-5drP39ES.js";import{B as G}from"./Badge-CePMooOl.js";import{T as Ve}from"./Tooltip-BvgCFTJi.js";import{M as Ce,a as Re}from"./SubMenu-CTaoXsTz.js";import{u as Ie}from"./useControllableState-ByGfjEIG.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Spinner-B6GigztE.js";import"./FieldContext-D6URyQos.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";import"./HighlightText-BP-sbDRA.js";import"./menu-DQAy75Rb.js";import"./FloatingLayerContext-BryH8O9I.js";import"./ListItemGroup-CDi38M9R.js";import"./Divider-DhAaijX4.js";import"./Checkbox-XnGrI6IT.js";import"./Toggle-C_NcmSvJ.js";const Te={},_e=[],Me=[["root","tabs__root"],["list","tabs__list"],["tab","tabs__tab"],["badge","tabs__badge"],["overflow","tabs__overflow"],["menu","tabs__menu"],["panel","tabs__panel"]],Ae=Me.map(([t,a])=>[t,Se(a,Te,Ee(_e,t))]),Ne=je((t={})=>Object.fromEntries(Ae.map(([a,b])=>[a,b.recipeFn(t)]))),Q=["overflowed"],We=t=>({...Te,...ke(t)}),xe=Object.assign(Ne,{__recipe__:!1,__name__:"tabs",raw:t=>t,classNameMap:{},variantKeys:Q,variantMap:{overflowed:["true"]},splitVariantProps(t){return Pe(t,Q)},getVariantProps:We}),Le=32,H=(t,a)=>t.length===a.length&&t.every((b,g)=>b===a[g]),qe=({items:t,containerRef:a,getItemElement:b,activeItem:g=null,reserve:T=Le,enabled:i=!0})=>{const[P,E]=l.useState(()=>[...t]),[O,y]=l.useState([]),m=l.useRef(null),v=l.useCallback(()=>{const f=a.current;if(!i||!f){E(s=>H(s,t)?s:[...t]),y(s=>s.length===0?s:[]);return}const w=globalThis.getComputedStyle(f),x=Number.parseFloat(w.paddingLeft||"0")+Number.parseFloat(w.paddingRight||"0"),j=f.clientWidth-x-T,S=t.map(s=>{var c;return((c=b(s))==null?void 0:c.offsetWidth)??Number.POSITIVE_INFINITY}),k=g===null?-1:t.indexOf(g),C=k===-1?0:k,_=t.map((s,c)=>c).sort((s,c)=>{const d=Math.abs(s-C)-Math.abs(c-C);return d===0?s-c:d}),R=s=>{const c=new Set;let d=0;s!==null&&(c.add(s),d+=S[s]??0);for(const V of _){if(c.has(V))continue;const A=S[V]??0;if(d+A>j)break;d+=A,c.add(V)}return c};let r=R(null);k!==-1&&!r.has(k)&&(r=R(k));const n=[],o=[];t.forEach((s,c)=>{r.has(c)?n.push(s):o.push(s)}),E(s=>H(s,n)?s:n),y(s=>H(s,o)?s:o)},[g,a,i,b,t,T]);return l.useLayoutEffect(()=>{const f=a.current,w=()=>{m.current!==null&&globalThis.cancelAnimationFrame(m.current),m.current=globalThis.requestAnimationFrame(()=>{m.current=null,v()})};if(v(),!i||!f)return()=>{m.current!==null&&(globalThis.cancelAnimationFrame(m.current),m.current=null)};const x=typeof ResizeObserver>"u"?null:new ResizeObserver(w);x==null||x.observe(f);for(const j of t){const S=b(j);S&&(x==null||x.observe(S))}return globalThis.addEventListener("resize",w),()=>{x==null||x.disconnect(),globalThis.removeEventListener("resize",w),m.current!==null&&(globalThis.cancelAnimationFrame(m.current),m.current=null)}},[a,i,b,t,v]),{visible:P,overflow:O,hasOverflow:O.length>0,measure:v}},ge=l.createContext(null),Be=l.createContext(!0),De=ge.Provider,Fe=Be.Provider,we=()=>{const t=l.useContext(ge);if(!t)throw new Error("Tabs compound components must be used within <Tabs />");return t},F={tab:"Tab",panel:"TabPanel"},U="__tabsComponentType",ye=t=>{if(!t||typeof t!="object"||!("type"in t))return null;const a=t.type;return(a==null?void 0:a[U])??null},He=xe({overflowed:!0}).tab,h=t=>{const{value:a,children:b,label:g,badge:T,badgeTooltip:i,disabled:P=!1,...E}=t,{classes:O,getPanelId:y,getTabId:m,onTabKeyDown:v,overflowValues:f,registerTabElement:w,selectTab:x,selectedValue:j}=we(),S=j===a,k=f.includes(a),[C,_]=K(E),R=l.useCallback(s=>{w(a,s)},[w,a]),r=k?He:O.tab,o=typeof T=="number"&&T!==0?e.jsx(I,{className:O.badge,children:i?e.jsx(Ve,{text:i,children:e.jsx(G,{count:T})}):e.jsx(G,{count:T})}):null;return e.jsxs(I,{as:"button",type:"button",ref:R,id:m(a),role:"tab","aria-selected":S,"aria-controls":y(a),"aria-hidden":k||void 0,disabled:P,tabIndex:S&&!k?0:-1,className:$(r,C),onClick:s=>{P||x(s,a,"clicked-on-tab")},onKeyDown:v,..._,children:[b,o]})};h[U]=F.tab;h.__docgenInfo={description:'Selects one panel inside a {@link Tabs} strip.\n\nRenders a `button` with `role="tab"`. Only the selected tab is in the tab\norder; Arrow, Home, and End move between the others. A tab that does not fit\nthe strip stays mounted but hidden so it can still be measured, and it is\noffered in the overflow menu instead. The menu row is plain text, so give\n`label` when `children` are not plain text.\n\n@example\n```tsx\n<Tab value="materials" badge={3} badgeTooltip="2 Open Part Request">\n  Materials\n</Tab>\n```',methods:[],displayName:"Tab",props:{value:{required:!0,tsType:{name:"string"},description:"Identifies the tab and the `TabPanel` it controls. Must be unique within a `Tabs`."},children:{required:!1,tsType:{name:"ReactNode"},description:"Visible label rendered in the strip. Plain text is also reused as the overflow-menu row's text unless `label` overrides it."},label:{required:!1,tsType:{name:"string"},description:"Plain-text name for this tab's overflow-menu row, which cannot render\nmarkup. Set it when `children` contain more than text — an icon, a nested\nelement — because flattening those to a string reads badly. It never\nchanges what the strip renders: `children` still render there as-is.\nWithout it the menu row falls back to the flattened `children`, then to\n`value`."},badge:{required:!1,tsType:{name:"number"},description:"Count shown in a trailing {@link Badge}. A zero or omitted count renders no badge."},badgeTooltip:{required:!1,tsType:{name:"string"},description:"Tooltip text describing what the badge counts. Requires `badge`."},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents selection and skips the tab during arrow-key navigation."}}};const p=t=>{const{value:a,children:b,...g}=t,{classes:T,getPanelId:i,getTabId:P,selectedValue:E,unmountInactive:O}=we(),y=E===a,[m,v]=K(g);if(O&&!y)return null;const w=typeof b=="function"?b({isActive:y}):b;return e.jsx(Fe,{value:y,children:e.jsx(I,{id:i(a),role:"tabpanel","aria-labelledby":P(a),tabIndex:y?0:-1,display:y?"block":"none",className:$(T.panel,m),...v,children:w})})};p[U]=F.panel;p.__docgenInfo={description:'Renders the content for one {@link Tab}.\n\nThe panel stays mounted when another tab is selected and is hidden with\n`display: none`, which preserves scroll position and local state; set\n`unmountInactive` on `Tabs` to render only the selected panel instead. A\nfunction child receives `{ isActive }`, and descendants can call\n`useTabPanelActive()` for the same signal, so hidden panels can pause polling\nor animation.\n\n@example\n```tsx\n<TabPanel value="materials">\n  {({ isActive }) => <MaterialsGrid paused={!isActive} />}\n</TabPanel>\n```',methods:[],displayName:"TabPanel",props:{value:{required:!0,tsType:{name:"string"},description:"`value` of the {@link Tab} this panel belongs to."},children:{required:!1,tsType:{name:"union",raw:"ReactNode | ((props: TabPanelRenderProps) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:"Panel content. A function child receives `{ isActive }` so expensive work\ncan pause while the panel is mounted but hidden."}}};const ze=32,z=t=>t==null||typeof t=="boolean"?"":typeof t=="string"||typeof t=="number"?String(t):Array.isArray(t)?t.map(a=>z(a)).join(""):l.isValidElement(t)?z(t.props.children):"",Ke=({children:t,value:a,defaultValue:b,onChange:g,listRef:T})=>{const i=l.useMemo(()=>{const r=[];return l.Children.forEach(t,n=>{if(!l.isValidElement(n)||ye(n)!==F.tab)return;const o=n.props;typeof o.value=="string"&&r.push({value:o.value,label:o.label||z(o.children)||o.value,disabled:!!o.disabled})}),r},[t]),P=l.useRef([]),E=l.useMemo(()=>{const r=i.map(o=>o.value),n=P.current;return n.length===r.length&&n.every((o,s)=>o===r[s])?n:(P.current=r,r)},[i]),O=E[0]??"",[y,m]=Ie({value:a,defaultValue:b??O}),v=E.includes(y)?y:O,f=l.useRef(new Map),w=l.useCallback((r,n)=>{n?f.current.set(r,n):f.current.delete(r)},[]),x=l.useCallback(r=>f.current.get(r)??null,[]),{overflow:j,hasOverflow:S}=qe({items:E,containerRef:T,getItemElement:x,activeItem:v||null,reserve:ze}),k=l.useCallback((r,n,o)=>{n!==v&&(m(n),g==null||g(r,n,o))},[g,v,m]),C=l.useRef(null);l.useEffect(()=>{const r=C.current;if(r===null)return;const n=f.current.get(r);!n||j.includes(r)||(C.current=null,n.focus())},[j,v]);const _=l.useCallback(r=>{const n=i.filter(V=>!V.disabled).map(V=>V.value);if(n.length===0)return;const o=Math.max(0,n.indexOf(v));let s;switch(r.key){case"ArrowRight":s=(o+1)%n.length;break;case"ArrowLeft":s=(o-1+n.length)%n.length;break;case"Home":s=0;break;case"End":s=n.length-1;break;default:return}r.preventDefault();const c=n[s];if(c===void 0)return;k(r,c,"clicked-on-tab");const d=f.current.get(c);d&&!j.includes(c)?d.focus():C.current=c},[j,k,v,i]),R=l.useMemo(()=>j.map(r=>i.find(n=>n.value===r)).filter(r=>!!r),[j,i]);return{hasOverflow:S,onTabKeyDown:_,overflowTabs:R,overflowValues:j,registerTabElement:w,selectTab:k,selectedValue:v,tabs:i}},M=t=>{const{children:a,value:b,defaultValue:g,onChange:T,unmountInactive:i=!1,"aria-label":P,"aria-labelledby":E,...O}=t,[y,m]=K(O),v=l.useRef(null),f=l.useId(),[w,x]=l.useState(!1),{hasOverflow:j,onTabKeyDown:S,overflowTabs:k,overflowValues:C,registerTabElement:_,selectTab:R,selectedValue:r}=Ke({children:a,value:b,defaultValue:g,onChange:T,listRef:v}),n=l.useMemo(()=>xe(),[]),[o,s]=l.useMemo(()=>{const d=[],V=[];return l.Children.forEach(a,A=>{ye(A)===F.tab?d.push(A):V.push(A)}),[d,V]},[a]),c=l.useMemo(()=>({classes:n,getPanelId:d=>`${f}-panel-${d}`,getTabId:d=>`${f}-tab-${d}`,onTabKeyDown:S,overflowValues:C,registerTabElement:_,selectTab:R,selectedValue:r,unmountInactive:i}),[f,n,S,C,_,R,r,i]);return e.jsx(De,{value:c,children:e.jsxs(I,{...Oe("Tabs"),className:$(n.root,y),...m,children:[e.jsxs(I,{ref:v,role:"tablist","aria-label":P,"aria-labelledby":E,"aria-orientation":"horizontal",className:n.list,children:[o,j&&e.jsx(I,{className:n.overflow,children:e.jsx(Ce,{open:w,onOpenChange:x,placement:"bottom-end",className:n.menu,trigger:e.jsx(ve,{variant:"ghost",size:"sm","aria-label":"More tabs","aria-haspopup":"menu",children:e.jsx(fe,{name:w?"caret-up":"caret-down","aria-hidden":!0})}),children:k.map(d=>e.jsx(Re,{label:d.label,disabled:d.disabled,selected:d.value===r,onClick:V=>{R(V,d.value,"selected-from-overflow"),x(!1)}},d.value))})})]}),s]})})};M.__docgenInfo={description:'Groups related content into a single view with one panel visible at a time.\n\nCompose it from `Tab` and `TabPanel` children; the first `Tab` is selected by\ndefault. Selection is uncontrolled with `defaultValue` or controlled with\n`value` plus `onChange`. Tabs that do not fit the available width move into\nan overflow menu at the end of the strip, and the selected tab always stays\nvisible. Every panel stays mounted and hidden unless `unmountInactive` is\nset, so read `useTabPanelActive()` to pause work in a hidden panel.\n\nThe strip renders a `tablist` with roving tabindex and Arrow, Home, and End\nnavigation. Supply `aria-label` or `aria-labelledby` so it is announced.\n\n@example\n```tsx\n<Tabs defaultValue="work" aria-label="Order sections">\n  <Tab value="work">Work</Tab>\n  <Tab value="materials" badge={3}>Materials</Tab>\n  <TabPanel value="work">Work content</TabPanel>\n  <TabPanel value="materials">Materials content</TabPanel>\n</Tabs>\n```',methods:[],displayName:"Tabs",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"`Tab` and `TabPanel` children. Tab order in the strip follows source order."},value:{required:!1,tsType:{name:"string"},description:"Controlled selected tab `value`. Pair with `onChange`; omit it to use `defaultValue`."},defaultValue:{required:!1,tsType:{name:"string"},description:"Initially selected tab `value` when `value` is not provided. It is used\nonly on first render.\n@default the first `Tab` child's `value`"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  event: TabsChangeEvent,
  value: string,
  reason: TabsChangeReason,
) => void`,signature:{arguments:[{type:{name:"union",raw:`| ReactMouseEvent<HTMLElement>
| ReactKeyboardEvent<HTMLElement>`,elements:[{name:"ReactMouseEvent",elements:[{name:"HTMLElement"}],raw:"ReactMouseEvent<HTMLElement>"},{name:"ReactKeyboardEvent",elements:[{name:"HTMLElement"}],raw:"ReactKeyboardEvent<HTMLElement>"}]},name:"event"},{type:{name:"string"},name:"value"},{type:{name:"union",raw:"'clicked-on-tab' | 'selected-from-overflow'",elements:[{name:"literal",value:"'clicked-on-tab'"},{name:"literal",value:"'selected-from-overflow'"}]},name:"reason"}],return:{name:"void"}}},description:"Runs when user interaction selects a different tab."},unmountInactive:{required:!1,tsType:{name:"boolean"},description:"Renders only the selected `TabPanel`. By default every panel stays mounted\nand inactive panels are hidden with `display: none`, which preserves their\nscroll position and local state.\n@default false"},"aria-label":{required:!1,tsType:{name:"string"},description:"Accessible name for the tab strip. Provide this or `aria-labelledby` so the\n`tablist` is announced."},"aria-labelledby":{required:!1,tsType:{name:"string"},description:"Id of an element that labels the tab strip."}}};const vt={title:"Components/Tabs",component:M,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:["Tabs keep every `TabPanel` mounted by default and hide the inactive","ones with `display: none`. That preserves scroll position, form","drafts, and grid state when a user moves between tabs, at the cost","of keeping hidden work alive. Hidden panels receive an `isActive`","signal — as a render-prop argument or through `useTabPanelActive()`","— so polling, timers, and animation can pause themselves. Set","`unmountInactive` when a panel is expensive enough that discarding","its state is the better trade."].join(" ")}}},args:{"aria-label":"Example sections",children:null}},N={render:t=>e.jsxs(M,{...t,defaultValue:"overview",children:[e.jsx(h,{value:"overview",children:"Overview"}),e.jsx(h,{value:"activity",children:"Activity"}),e.jsx(h,{value:"settings",children:"Settings"}),e.jsx(p,{value:"overview",children:e.jsx(u,{py:"16",children:"Summary of the current record."})}),e.jsx(p,{value:"activity",children:e.jsx(u,{py:"16",children:"Recent activity for the current record."})}),e.jsx(p,{value:"settings",children:e.jsx(u,{py:"16",children:"Settings for the current record."})})]})},W={name:"Badges",parameters:{controls:{disable:!0}},render:t=>e.jsxs(M,{...t,defaultValue:"work",children:[e.jsx(h,{value:"work",children:"Work"}),e.jsx(h,{value:"materials",badge:3,badgeTooltip:"2 Open Part Request, 1 Short Part(s)",children:"Materials"}),e.jsx(h,{value:"status",badge:12,children:"Status"}),e.jsx(h,{value:"documents",badge:0,children:"Documents"}),e.jsx(p,{value:"work",children:e.jsx(u,{py:"16",children:"A badge without a tooltip is a bare count."})}),e.jsx(p,{value:"materials",children:e.jsx(u,{py:"16",children:"Hover or focus the Materials badge to read what the count means."})}),e.jsx(p,{value:"status",children:e.jsx(u,{py:"16",children:"Status content."})}),e.jsx(p,{value:"documents",children:e.jsx(u,{py:"16",children:"A zero count renders no badge at all."})})]})},Y=["Work","Info","Materials","Status","Documents","History","Labor","Quality","Shipping","Invoicing","Costing","Notes"],L={name:"Overflow",parameters:{controls:{disable:!0}},render:t=>e.jsxs(I,{resize:"horizontal",overflow:"auto",width:"lg",maxWidth:"full",minWidth:"240",borderWidth:"1",borderStyle:"dashed",borderColor:"border",p:"16",children:[e.jsx(u,{pb:"12",color:"text.subtlest",children:"Drag the bottom-right corner. Tabs nearest the selected one keep their place; the rest move into the overflow menu."}),e.jsxs(M,{...t,defaultValue:"work",children:[Y.map(a=>e.jsx(h,{value:a.toLowerCase(),children:a},a)),Y.map(a=>e.jsx(p,{value:a.toLowerCase(),children:e.jsxs(u,{py:"16",children:[a," content."]})},a))]})]})},J=[{value:"work",label:"Work",icon:"wrench-2"},{value:"materials",label:"Materials",icon:"cube-focus"},{value:"schedule",label:"Schedule",icon:"calendar-view-week"},{value:"shipping",label:"Shipping",icon:"truck-trailer"},{value:"quality",label:"Quality",icon:"list-checks"},{value:"history",label:"History",icon:"clock-countdown"},{value:"notes",label:"Notes",icon:"note-stack"}],q={name:"Label Override for Overflow",parameters:{controls:{disable:!0}},render:t=>e.jsxs(I,{width:"md",maxWidth:"full",children:[e.jsx(u,{pb:"12",color:"text.subtlest",children:"These tabs render an icon beside their text, so flattening `children` would produce a poor menu row. Each one passes `label`, and the overflow menu uses that text. The strip still renders `children` as-is."}),e.jsxs(M,{...t,defaultValue:"work",children:[J.map(a=>e.jsxs(h,{value:a.value,label:a.label,children:[e.jsx(fe,{name:a.icon,"aria-hidden":!0}),a.label]},a.value)),J.map(a=>e.jsx(p,{value:a.value,children:e.jsxs(u,{py:"16",children:[a.label," content."]})},a.value))]})]})},B={name:"Unmount Inactive Panels",parameters:{controls:{disable:!0}},render:t=>e.jsxs(M,{...t,defaultValue:"first",unmountInactive:!0,children:[e.jsx(h,{value:"first",children:"First"}),e.jsx(h,{value:"second",children:"Second"}),e.jsx(p,{value:"first",children:e.jsx(u,{py:"16",children:"Only this panel exists in the DOM while it is selected."})}),e.jsx(p,{value:"second",children:e.jsx(u,{py:"16",children:"Switching tabs unmounts the other panel and discards its state."})})]})},$e=()=>{const[t,a]=l.useState(!0),[b,g]=l.useState("none yet");return e.jsxs(I,{children:[e.jsx(I,{pb:"12",children:e.jsx(ve,{variant:"hollow",size:"sm",onClick:()=>a(T=>!T),children:t?"Remove Schedule tab":"Add Schedule tab"})}),e.jsxs(M,{"aria-label":"Work order sections",defaultValue:"work",onChange:(T,i,P)=>g(`${i} (${P})`),children:[e.jsx(h,{value:"work",children:"Work"}),e.jsx(h,{value:"info",children:"Info"}),e.jsx(h,{value:"materials",badge:3,badgeTooltip:"2 Open Part Request, 1 Short Part(s)",children:"Materials"}),e.jsx(h,{value:"status",badge:5,badgeTooltip:"5 Operations Behind",children:"Status"}),t?e.jsx(h,{value:"schedule",children:"Schedule"}):null,e.jsx(h,{value:"documents",children:"Documents"}),e.jsx(h,{value:"history",children:"History"}),e.jsx(p,{value:"work",children:e.jsx(u,{py:"16",children:"Work instructions and operations."})}),e.jsx(p,{value:"info",children:e.jsx(u,{py:"16",children:"Order header and customer details."})}),e.jsx(p,{value:"materials",children:e.jsx(u,{py:"16",children:"Bill of materials and part requests."})}),e.jsx(p,{value:"status",children:e.jsx(u,{py:"16",children:"Operation status roll-up."})}),e.jsx(p,{value:"schedule",children:({isActive:T})=>e.jsxs(u,{py:"16",children:["Schedule board. Live refresh is ",T?"running":"paused",". Select this tab, remove it with the button above, and the strip falls back to the first remaining tab."]})}),e.jsx(p,{value:"documents",children:e.jsx(u,{py:"16",children:"Attached drawings and travelers."})}),e.jsx(p,{value:"history",children:e.jsx(u,{py:"16",children:"Audit trail."})})]}),e.jsxs(u,{pt:"16",color:"text.subtlest",children:["Last change: ",b]})]})},D={name:"Ex: Work View",parameters:{controls:{disable:!0}},render:()=>e.jsx($e,{})};var X,Z,ee;N.parameters={...N.parameters,docs:{...(X=N.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(ee=(Z=N.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ae,ne;W.parameters={...W.parameters,docs:{...(te=W.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ne=(ae=W.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var se,re,le;L.parameters={...L.parameters,docs:{...(se=L.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(le=(re=L.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};var oe,ie,ce;q.parameters={...q.parameters,docs:{...(oe=q.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ce=(ie=q.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var de,ue,be;B.parameters={...B.parameters,docs:{...(de=B.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(be=(ue=B.parameters)==null?void 0:ue.docs)==null?void 0:be.source}}};var he,pe,me;D.parameters={...D.parameters,docs:{...(he=D.parameters)==null?void 0:he.docs,source:{originalSource:`{
  name: 'Ex: Work View',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <WorkView />
}`,...(me=(pe=D.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};const ft=["Default","WithBadges","Overflow","LabelOverride","UnmountInactive","ExWorkView"];export{N as Default,D as ExWorkView,q as LabelOverride,L as Overflow,B as UnmountInactive,W as WithBadges,ft as __namedExportsOrder,vt as default};
