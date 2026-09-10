import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./index-BKyFwriW.js";import{m as fe,c as Te,s as ge,a as xe,g as we,b as z,B as I,d as K,e as ye}from"./dsComponent-BYUIyF_R.js";import{B as ue}from"./Button-Bf2hC955.js";import{T as v}from"./Text-5drP39ES.js";import{B as U}from"./Badge-CePMooOl.js";import{T as je}from"./Tooltip-BvgCFTJi.js";import{I as Pe}from"./Icon-Dq9uSEeo.js";import"./IconConfig-CikP2Rer.js";import{M as ke,a as Se}from"./SubMenu-CTaoXsTz.js";import{u as Ee}from"./useControllableState-ByGfjEIG.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Spinner-B6GigztE.js";import"./FieldContext-D6URyQos.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";import"./HighlightText-BP-sbDRA.js";import"./menu-DQAy75Rb.js";import"./FloatingLayerContext-BryH8O9I.js";import"./ListItemGroup-CDi38M9R.js";import"./Divider-DhAaijX4.js";import"./Checkbox-XnGrI6IT.js";import"./Toggle-C_NcmSvJ.js";const be={},Ve=[],Ce=[["root","tabs__root"],["list","tabs__list"],["tab","tabs__tab"],["badge","tabs__badge"],["overflow","tabs__overflow"],["menu","tabs__menu"],["panel","tabs__panel"]],Oe=Ce.map(([t,a])=>[t,xe(a,be,we(Ve,t))]),Re=fe((t={})=>Object.fromEntries(Oe.map(([a,b])=>[a,b.recipeFn(t)]))),G=["overflowed"],Ie=t=>({...be,...Te(t)}),pe=Object.assign(Re,{__recipe__:!1,__name__:"tabs",raw:t=>t,classNameMap:{},variantKeys:G,variantMap:{overflowed:["true"]},splitVariantProps(t){return ge(t,G)},getVariantProps:Ie}),_e=32,F=(t,a)=>t.length===a.length&&t.every((b,u)=>b===a[u]),Me=({items:t,containerRef:a,getItemElement:b,activeItem:u=null,reserve:x=_e,enabled:i=!0})=>{const[E,k]=o.useState(()=>[...t]),[C,y]=o.useState([]),h=o.useRef(null),m=o.useCallback(()=>{const p=a.current;if(!i||!p){k(r=>F(r,t)?r:[...t]),y(r=>r.length===0?r:[]);return}const j=globalThis.getComputedStyle(p),g=Number.parseFloat(j.paddingLeft||"0")+Number.parseFloat(j.paddingRight||"0"),w=p.clientWidth-g-x,P=t.map(r=>{var c;return((c=b(r))==null?void 0:c.offsetWidth)??Number.POSITIVE_INFINITY}),S=u===null?-1:t.indexOf(u),O=S===-1?0:S,_=t.map((r,c)=>c).sort((r,c)=>{const d=Math.abs(r-O)-Math.abs(c-O);return d===0?r-c:d}),R=r=>{const c=new Set;let d=0;r!==null&&(c.add(r),d+=P[r]??0);for(const V of _){if(c.has(V))continue;const A=P[V]??0;if(d+A>w)break;d+=A,c.add(V)}return c};let s=R(null);S!==-1&&!s.has(S)&&(s=R(S));const n=[],l=[];t.forEach((r,c)=>{s.has(c)?n.push(r):l.push(r)}),k(r=>F(r,n)?r:n),y(r=>F(r,l)?r:l)},[u,a,i,b,t,x]);return o.useLayoutEffect(()=>{const p=a.current,j=()=>{h.current!==null&&globalThis.cancelAnimationFrame(h.current),h.current=globalThis.requestAnimationFrame(()=>{h.current=null,m()})};if(m(),!i||!p)return()=>{h.current!==null&&(globalThis.cancelAnimationFrame(h.current),h.current=null)};const g=typeof ResizeObserver>"u"?null:new ResizeObserver(j);g==null||g.observe(p);for(const w of t){const P=b(w);P&&(g==null||g.observe(P))}return globalThis.addEventListener("resize",j),()=>{g==null||g.disconnect(),globalThis.removeEventListener("resize",j),h.current!==null&&(globalThis.cancelAnimationFrame(h.current),h.current=null)}},[a,i,b,t,m]),{visible:E,overflow:C,hasOverflow:C.length>0,measure:m}},he=o.createContext(null),Ae=o.createContext(!0),Ne=he.Provider,We=Ae.Provider,me=()=>{const t=o.useContext(he);if(!t)throw new Error("Tabs compound components must be used within <Tabs />");return t},D={tab:"Tab",panel:"TabPanel"},$="__tabsComponentType",ve=t=>{if(!t||typeof t!="object"||!("type"in t))return null;const a=t.type;return(a==null?void 0:a[$])??null},Le=pe({overflowed:!0}).tab,f=t=>{const{value:a,children:b,badge:u,badgeTooltip:x,disabled:i=!1,...E}=t,{classes:k,getPanelId:C,getTabId:y,onTabKeyDown:h,overflowValues:m,registerTabElement:p,selectTab:j,selectedValue:g}=me(),w=g===a,P=m.includes(a),[S,O]=z(E),_=o.useCallback(l=>{p(a,l)},[p,a]),R=P?Le:k.tab,n=typeof u=="number"&&u!==0?e.jsx(I,{className:k.badge,children:x?e.jsx(je,{text:x,children:e.jsx(U,{count:u})}):e.jsx(U,{count:u})}):null;return e.jsxs(I,{as:"button",type:"button",ref:_,id:y(a),role:"tab","aria-selected":w,"aria-controls":C(a),"aria-hidden":P||void 0,disabled:i,tabIndex:w&&!P?0:-1,className:K(R,S),onClick:l=>{i||j(l,a,"clicked-on-tab")},onKeyDown:h,...O,children:[b,n]})};f[$]=D.tab;f.__docgenInfo={description:`Selects one panel inside a {@link Tabs} strip.

Renders a \`button\` with \`role="tab"\`. Only the selected tab is in the tab
order; Arrow, Home, and End move between the others. A tab that does not fit
the strip stays mounted but hidden so it can still be measured, and it is
offered in the overflow menu instead.

@example
\`\`\`tsx
<Tab value="materials" badge={3} badgeTooltip="2 Open Part Request">
  Materials
</Tab>
\`\`\``,methods:[],displayName:"Tab",props:{value:{required:!0,tsType:{name:"string"},description:"Identifies the tab and the `TabPanel` it controls. Must be unique within a `Tabs`."},children:{required:!1,tsType:{name:"ReactNode"},description:"Visible label. Plain text is reused as the overflow-menu label."},badge:{required:!1,tsType:{name:"number"},description:"Count shown in a trailing {@link Badge}. A zero or omitted count renders no badge."},badgeTooltip:{required:!1,tsType:{name:"string"},description:"Tooltip text describing what the badge counts. Requires `badge`."},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents selection and skips the tab during arrow-key navigation."}}};const T=t=>{const{value:a,children:b,...u}=t,{classes:x,getPanelId:i,getTabId:E,selectedValue:k,unmountInactive:C}=me(),y=k===a,[h,m]=z(u);if(C&&!y)return null;const j=typeof b=="function"?b({isActive:y}):b;return e.jsx(We,{value:y,children:e.jsx(I,{id:i(a),role:"tabpanel","aria-labelledby":E(a),tabIndex:y?0:-1,display:y?"block":"none",className:K(x.panel,h),...m,children:j})})};T[$]=D.panel;T.__docgenInfo={description:'Renders the content for one {@link Tab}.\n\nThe panel stays mounted when another tab is selected and is hidden with\n`display: none`, which preserves scroll position and local state; set\n`unmountInactive` on `Tabs` to render only the selected panel instead. A\nfunction child receives `{ isActive }`, and descendants can call\n`useTabPanelActive()` for the same signal, so hidden panels can pause polling\nor animation.\n\n@example\n```tsx\n<TabPanel value="materials">\n  {({ isActive }) => <MaterialsGrid paused={!isActive} />}\n</TabPanel>\n```',methods:[],displayName:"TabPanel",props:{value:{required:!0,tsType:{name:"string"},description:"`value` of the {@link Tab} this panel belongs to."},children:{required:!1,tsType:{name:"union",raw:"ReactNode | ((props: TabPanelRenderProps) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:"Panel content. A function child receives `{ isActive }` so expensive work\ncan pause while the panel is mounted but hidden."}}};const qe=32,H=t=>t==null||typeof t=="boolean"?"":typeof t=="string"||typeof t=="number"?String(t):Array.isArray(t)?t.map(a=>H(a)).join(""):o.isValidElement(t)?H(t.props.children):"",Be=({children:t,value:a,defaultValue:b,onChange:u,listRef:x})=>{const i=o.useMemo(()=>{const s=[];return o.Children.forEach(t,n=>{if(!o.isValidElement(n)||ve(n)!==D.tab)return;const l=n.props;typeof l.value=="string"&&s.push({value:l.value,label:H(l.children)||l.value,disabled:!!l.disabled})}),s},[t]),E=o.useRef([]),k=o.useMemo(()=>{const s=i.map(l=>l.value),n=E.current;return n.length===s.length&&n.every((l,r)=>l===s[r])?n:(E.current=s,s)},[i]),C=k[0]??"",[y,h]=Ee({value:a,defaultValue:b??C}),m=k.includes(y)?y:C,p=o.useRef(new Map),j=o.useCallback((s,n)=>{n?p.current.set(s,n):p.current.delete(s)},[]),g=o.useCallback(s=>p.current.get(s)??null,[]),{overflow:w,hasOverflow:P}=Me({items:k,containerRef:x,getItemElement:g,activeItem:m||null,reserve:qe}),S=o.useCallback((s,n,l)=>{n!==m&&(h(n),u==null||u(s,n,l))},[u,m,h]),O=o.useRef(null);o.useEffect(()=>{const s=O.current;if(s===null)return;const n=p.current.get(s);!n||w.includes(s)||(O.current=null,n.focus())},[w,m]);const _=o.useCallback(s=>{const n=i.filter(V=>!V.disabled).map(V=>V.value);if(n.length===0)return;const l=Math.max(0,n.indexOf(m));let r;switch(s.key){case"ArrowRight":r=(l+1)%n.length;break;case"ArrowLeft":r=(l-1+n.length)%n.length;break;case"Home":r=0;break;case"End":r=n.length-1;break;default:return}s.preventDefault();const c=n[r];if(c===void 0)return;S(s,c,"clicked-on-tab");const d=p.current.get(c);d&&!w.includes(c)?d.focus():O.current=c},[w,S,m,i]),R=o.useMemo(()=>w.map(s=>i.find(n=>n.value===s)).filter(s=>!!s),[w,i]);return{hasOverflow:P,onTabKeyDown:_,overflowTabs:R,overflowValues:w,registerTabElement:j,selectTab:S,selectedValue:m,tabs:i}},M=t=>{const{children:a,value:b,defaultValue:u,onChange:x,unmountInactive:i=!1,"aria-label":E,"aria-labelledby":k,...C}=t,[y,h]=z(C),m=o.useRef(null),p=o.useId(),[j,g]=o.useState(!1),{hasOverflow:w,onTabKeyDown:P,overflowTabs:S,overflowValues:O,registerTabElement:_,selectTab:R,selectedValue:s}=Be({children:a,value:b,defaultValue:u,onChange:x,listRef:m}),n=o.useMemo(()=>pe(),[]),[l,r]=o.useMemo(()=>{const d=[],V=[];return o.Children.forEach(a,A=>{ve(A)===D.tab?d.push(A):V.push(A)}),[d,V]},[a]),c=o.useMemo(()=>({classes:n,getPanelId:d=>`${p}-panel-${d}`,getTabId:d=>`${p}-tab-${d}`,onTabKeyDown:P,overflowValues:O,registerTabElement:_,selectTab:R,selectedValue:s,unmountInactive:i}),[p,n,P,O,_,R,s,i]);return e.jsx(Ne,{value:c,children:e.jsxs(I,{...ye("Tabs"),className:K(n.root,y),...h,children:[e.jsxs(I,{ref:m,role:"tablist","aria-label":E,"aria-labelledby":k,"aria-orientation":"horizontal",className:n.list,children:[l,w&&e.jsx(I,{className:n.overflow,children:e.jsx(ke,{open:j,onOpenChange:g,placement:"bottom-end",className:n.menu,trigger:e.jsx(ue,{variant:"ghost",size:"sm","aria-label":"More tabs","aria-haspopup":"menu",children:e.jsx(Pe,{name:j?"caret-up":"caret-down","aria-hidden":!0})}),children:S.map(d=>e.jsx(Se,{label:d.label,disabled:d.disabled,selected:d.value===s,onClick:V=>{R(V,d.value,"selected-from-overflow"),g(!1)}},d.value))})})]}),r]})})};M.__docgenInfo={description:'Groups related content into a single view with one panel visible at a time.\n\nCompose it from `Tab` and `TabPanel` children; the first `Tab` is selected by\ndefault. Selection is uncontrolled with `defaultValue` or controlled with\n`value` plus `onChange`. Tabs that do not fit the available width move into\nan overflow menu at the end of the strip, and the selected tab always stays\nvisible. Every panel stays mounted and hidden unless `unmountInactive` is\nset, so read `useTabPanelActive()` to pause work in a hidden panel.\n\nThe strip renders a `tablist` with roving tabindex and Arrow, Home, and End\nnavigation. Supply `aria-label` or `aria-labelledby` so it is announced.\n\n@example\n```tsx\n<Tabs defaultValue="work" aria-label="Order sections">\n  <Tab value="work">Work</Tab>\n  <Tab value="materials" badge={3}>Materials</Tab>\n  <TabPanel value="work">Work content</TabPanel>\n  <TabPanel value="materials">Materials content</TabPanel>\n</Tabs>\n```',methods:[],displayName:"Tabs",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"`Tab` and `TabPanel` children. Tab order in the strip follows source order."},value:{required:!1,tsType:{name:"string"},description:"Controlled selected tab `value`. Pair with `onChange`; omit it to use `defaultValue`."},defaultValue:{required:!1,tsType:{name:"string"},description:"Initially selected tab `value` when `value` is not provided. It is used\nonly on first render.\n@default the first `Tab` child's `value`"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  event: TabsChangeEvent,
  value: string,
  reason: TabsChangeReason,
) => void`,signature:{arguments:[{type:{name:"union",raw:`| ReactMouseEvent<HTMLElement>
| ReactKeyboardEvent<HTMLElement>`,elements:[{name:"ReactMouseEvent",elements:[{name:"HTMLElement"}],raw:"ReactMouseEvent<HTMLElement>"},{name:"ReactKeyboardEvent",elements:[{name:"HTMLElement"}],raw:"ReactKeyboardEvent<HTMLElement>"}]},name:"event"},{type:{name:"string"},name:"value"},{type:{name:"union",raw:"'clicked-on-tab' | 'selected-from-overflow'",elements:[{name:"literal",value:"'clicked-on-tab'"},{name:"literal",value:"'selected-from-overflow'"}]},name:"reason"}],return:{name:"void"}}},description:"Runs when user interaction selects a different tab."},unmountInactive:{required:!1,tsType:{name:"boolean"},description:"Renders only the selected `TabPanel`. By default every panel stays mounted\nand inactive panels are hidden with `display: none`, which preserves their\nscroll position and local state.\n@default false"},"aria-label":{required:!1,tsType:{name:"string"},description:"Accessible name for the tab strip. Provide this or `aria-labelledby` so the\n`tablist` is announced."},"aria-labelledby":{required:!1,tsType:{name:"string"},description:"Id of an element that labels the tab strip."}}};const ut={title:"Components/Tabs",component:M,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:["Tabs keep every `TabPanel` mounted by default and hide the inactive","ones with `display: none`. That preserves scroll position, form","drafts, and grid state when a user moves between tabs, at the cost","of keeping hidden work alive. Hidden panels receive an `isActive`","signal — as a render-prop argument or through `useTabPanelActive()`","— so polling, timers, and animation can pause themselves. Set","`unmountInactive` when a panel is expensive enough that discarding","its state is the better trade."].join(" ")}}},args:{"aria-label":"Example sections",children:null}},N={render:t=>e.jsxs(M,{...t,defaultValue:"overview",children:[e.jsx(f,{value:"overview",children:"Overview"}),e.jsx(f,{value:"activity",children:"Activity"}),e.jsx(f,{value:"settings",children:"Settings"}),e.jsx(T,{value:"overview",children:e.jsx(v,{py:"16",children:"Summary of the current record."})}),e.jsx(T,{value:"activity",children:e.jsx(v,{py:"16",children:"Recent activity for the current record."})}),e.jsx(T,{value:"settings",children:e.jsx(v,{py:"16",children:"Settings for the current record."})})]})},W={name:"Badges",parameters:{controls:{disable:!0}},render:t=>e.jsxs(M,{...t,defaultValue:"work",children:[e.jsx(f,{value:"work",children:"Work"}),e.jsx(f,{value:"materials",badge:3,badgeTooltip:"2 Open Part Request, 1 Short Part(s)",children:"Materials"}),e.jsx(f,{value:"status",badge:12,children:"Status"}),e.jsx(f,{value:"documents",badge:0,children:"Documents"}),e.jsx(T,{value:"work",children:e.jsx(v,{py:"16",children:"A badge without a tooltip is a bare count."})}),e.jsx(T,{value:"materials",children:e.jsx(v,{py:"16",children:"Hover or focus the Materials badge to read what the count means."})}),e.jsx(T,{value:"status",children:e.jsx(v,{py:"16",children:"Status content."})}),e.jsx(T,{value:"documents",children:e.jsx(v,{py:"16",children:"A zero count renders no badge at all."})})]})},Y=["Work","Info","Materials","Status","Documents","History","Labor","Quality","Shipping","Invoicing","Costing","Notes"],L={name:"Overflow",parameters:{controls:{disable:!0}},render:t=>e.jsxs(I,{resize:"horizontal",overflow:"auto",width:"lg",maxWidth:"full",minWidth:"240",borderWidth:"1",borderStyle:"dashed",borderColor:"border",p:"16",children:[e.jsx(v,{pb:"12",color:"text.subtlest",children:"Drag the bottom-right corner. Tabs nearest the selected one keep their place; the rest move into the overflow menu."}),e.jsxs(M,{...t,defaultValue:"work",children:[Y.map(a=>e.jsx(f,{value:a.toLowerCase(),children:a},a)),Y.map(a=>e.jsx(T,{value:a.toLowerCase(),children:e.jsxs(v,{py:"16",children:[a," content."]})},a))]})]})},q={name:"Unmount Inactive Panels",parameters:{controls:{disable:!0}},render:t=>e.jsxs(M,{...t,defaultValue:"first",unmountInactive:!0,children:[e.jsx(f,{value:"first",children:"First"}),e.jsx(f,{value:"second",children:"Second"}),e.jsx(T,{value:"first",children:e.jsx(v,{py:"16",children:"Only this panel exists in the DOM while it is selected."})}),e.jsx(T,{value:"second",children:e.jsx(v,{py:"16",children:"Switching tabs unmounts the other panel and discards its state."})})]})},De=()=>{const[t,a]=o.useState(!0),[b,u]=o.useState("none yet");return e.jsxs(I,{children:[e.jsx(I,{pb:"12",children:e.jsx(ue,{variant:"hollow",size:"sm",onClick:()=>a(x=>!x),children:t?"Remove Schedule tab":"Add Schedule tab"})}),e.jsxs(M,{"aria-label":"Work order sections",defaultValue:"work",onChange:(x,i,E)=>u(`${i} (${E})`),children:[e.jsx(f,{value:"work",children:"Work"}),e.jsx(f,{value:"info",children:"Info"}),e.jsx(f,{value:"materials",badge:3,badgeTooltip:"2 Open Part Request, 1 Short Part(s)",children:"Materials"}),e.jsx(f,{value:"status",badge:5,badgeTooltip:"5 Operations Behind",children:"Status"}),t?e.jsx(f,{value:"schedule",children:"Schedule"}):null,e.jsx(f,{value:"documents",children:"Documents"}),e.jsx(f,{value:"history",children:"History"}),e.jsx(T,{value:"work",children:e.jsx(v,{py:"16",children:"Work instructions and operations."})}),e.jsx(T,{value:"info",children:e.jsx(v,{py:"16",children:"Order header and customer details."})}),e.jsx(T,{value:"materials",children:e.jsx(v,{py:"16",children:"Bill of materials and part requests."})}),e.jsx(T,{value:"status",children:e.jsx(v,{py:"16",children:"Operation status roll-up."})}),e.jsx(T,{value:"schedule",children:({isActive:x})=>e.jsxs(v,{py:"16",children:["Schedule board. Live refresh is ",x?"running":"paused",". Select this tab, remove it with the button above, and the strip falls back to the first remaining tab."]})}),e.jsx(T,{value:"documents",children:e.jsx(v,{py:"16",children:"Attached drawings and travelers."})}),e.jsx(T,{value:"history",children:e.jsx(v,{py:"16",children:"Audit trail."})})]}),e.jsxs(v,{pt:"16",color:"text.subtlest",children:["Last change: ",b]})]})},B={name:"Ex: Work View",parameters:{controls:{disable:!0}},render:()=>e.jsx(De,{})};var Q,J,X;N.parameters={...N.parameters,docs:{...(Q=N.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(X=(J=N.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};var Z,ee,te;W.parameters={...W.parameters,docs:{...(Z=W.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(te=(ee=W.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ae,ne,se;L.parameters={...L.parameters,docs:{...(ae=L.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(se=(ne=L.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var re,oe,le;q.parameters={...q.parameters,docs:{...(re=q.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(le=(oe=q.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var ie,ce,de;B.parameters={...B.parameters,docs:{...(ie=B.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  name: 'Ex: Work View',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <WorkView />
}`,...(de=(ce=B.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};const bt=["Default","WithBadges","Overflow","UnmountInactive","ExWorkView"];export{N as Default,B as ExWorkView,L as Overflow,q as UnmountInactive,W as WithBadges,bt as __namedExportsOrder,ut as default};
