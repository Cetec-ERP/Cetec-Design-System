import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./index-BKyFwriW.js";import{w as d,u as i,e as l,a as p}from"./index-L8OlCEhE.js";import{m as ht,a as gt,b as yt,e as bt,g as ft,s as L,B as b,c as P,d as xt,H as tt,F as at,V as Z}from"./dsComponent-BG2jnRr7.js";import{B as h}from"./Button-Cr4bC5CG.js";import{F as oe}from"./FormField-DdJop6CC.js";import{H as $}from"./Heading-f-AW4uIG.js";import{I as z}from"./IconButton-DXX-zVMP.js";import{M as Ct,a as Bt,b as vt,c as Rt}from"./ModalWrapper-DozFD-YS.js";import{S as kt,a as Y}from"./Select-D_bB_5KB.js";import{T as f}from"./Text-IAtRPmZy.js";import{T as Dt}from"./TextInput-B3gJX84x.js";import{u as jt,b as Ft,g as Et,F as Ot,D as Tt,i as St,h as qt}from"./Tooltip-bxPM6yCH.js";import{F as Nt}from"./FloatingLayerContext-BryH8O9I.js";import{u as Mt}from"./mq.hook-D1974m8s.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Icon-CrwLKW7B.js";import"./IconConfig-BuieZFlx.js";import"./Spinner-PLunUSsK.js";import"./FieldContext-D6URyQos.js";import"./Label-Duobk4D3.js";import"./menu-DMiDM6i6.js";import"./dsPart-nnoJM9m6.js";import"./Chip-BLenVk2H.js";import"./ListItem-BTQR-hRu.js";import"./HighlightText-DKF3xkQK.js";import"./Checkbox-BKc0omfg.js";import"./Divider-Dbp7vcYx.js";import"./Toggle-mlz1wkXL.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";import"./breakpoints-DU_5_Zhy.js";const nt={side:"right",size:"md",scrollable:!0},It=[],Ht=[["overlay","drawer__overlay"],["container","drawer__container"],["header","drawer__header"],["title","drawer__title"],["closeButton","drawer__closeButton"],["body","drawer__body"],["footer","drawer__footer"]],_t=Ht.map(([a,n])=>[a,bt(n,nt,ft(It,a))]),Vt=ht((a={})=>Object.fromEntries(_t.map(([n,t])=>[n,t.recipeFn(a)]))),se=["side","size","scrollable"],zt=a=>({...nt,...gt(a)}),A=Object.assign(Vt,{__recipe__:!1,__name__:"drawer",raw:a=>a,classNameMap:{},variantKeys:se,variantMap:{side:["right","left"],size:["sm","md","lg","xl","full"],scrollable:["true","false"]},splitVariantProps(a){return yt(a,se)},getVariantProps:zt}),ot=c.createContext(null),st=()=>{const a=c.useContext(ot);if(!a)throw new Error("Drawer components must be used within a <Drawer>");return a},Lt=200,Pt=(a,n)=>{switch(n.type){case"open":return"open";case"startClosing":return a==="closed"?a:"closing";case"finishClosing":return"closed";default:return a}},At=()=>typeof window<"u"&&typeof window.matchMedia=="function"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,x=a=>{const{open:n,onOpenChange:t,modal:o=!0,side:s="right",size:r="md",preventOutsideClose:u=!1,initialFocus:m,returnFocus:g=!0,children:v,id:R,...W}=a,[it,ct]=L(W),X=A({side:s,size:r}),[k,T]=c.useReducer(Pt,n?"open":"closed"),K=c.useRef(null),{refs:ee,context:te}=jt({open:n,onOpenChange:t,strategy:"fixed",middleware:[]}),dt=Ft(te,{escapeKey:o,outsidePress:o&&!u}),{getFloatingProps:ut}=Et([dt]);c.useEffect(()=>{if(n){T({type:"open"});return}T({type:"startClosing"});const w=setTimeout(()=>T({type:"finishClosing"}),At()?0:Lt);return()=>clearTimeout(w)},[n]);const pt=c.useCallback(w=>{K.current=w,ee.setFloating(w)},[ee]),U=c.useCallback(()=>{n&&t(!1)},[n,t]),mt=w=>{var ne;o||w.key!=="Escape"||w.defaultPrevented||(ne=K.current)!=null&&ne.contains(w.target)&&(w.stopPropagation(),U())},wt=c.useMemo(()=>({open:k==="open",onClose:U,modal:o}),[o,U,k]);if(k==="closed")return null;const ae=k==="closing"?"closing":"open";return e.jsx(Nt.Provider,{value:"modalFloating",children:e.jsx(ot.Provider,{value:wt,children:e.jsx(Ot,{children:e.jsxs(Tt,{children:[o&&e.jsx(St,{lockScroll:!0,className:X.overlay,"data-state":ae,"aria-hidden":"true"}),e.jsx(qt,{context:te,modal:o,initialFocus:m??(o?0:K),returnFocus:g,closeOnFocusOut:!1,children:e.jsx(b,{...xt("Drawer"),ref:pt,className:P(X.container,it),"data-state":ae,"data-side":s,id:R,role:"dialog","aria-modal":o?"true":void 0,...ut({onKeyDown:mt,onAnimationEnd:w=>{k==="closing"&&w.target===w.currentTarget&&T({type:"finishClosing"})}}),...ct,children:v})})]})})})})};x.__docgenInfo={description:`Renders a controlled panel that slides in from the edge of the screen.

By default the drawer is modal: it adds a scrim, traps focus, locks page
scroll, and closes on Escape or an outside press. Set \`modal={false}\` for a
detail panel that sits beside a list the user keeps working in. Changing the
drawer's children while it stays open swaps the content without replaying
the entry motion.

Supply an accessible name through \`aria-label\` or \`aria-labelledby\`; a
visible \`DrawerHeader\` title alone is not linked automatically.

@example
\`\`\`tsx
<Drawer open={open} onOpenChange={setOpen} aria-labelledby={titleId}>
  <DrawerHeader title="Filters" titleId={titleId} />
  <DrawerBody>…</DrawerBody>
  <DrawerFooter><Button onClick={apply}>Apply</Button></DrawerFooter>
</Drawer>
\`\`\`

@example
\`\`\`tsx
// Non-modal: the list behind stays clickable; a row click swaps the case.
<Drawer open={caseId !== null} onOpenChange={() => setCaseId(null)} modal={false} size="xl" aria-label="Case detail">
  <CaseDetail caseId={caseId} />
</Drawer>
\`\`\``,methods:[],displayName:"Drawer",props:{open:{required:!0,tsType:{name:"boolean"},description:"Controlled drawer state. Render state changes by updating this value after `onOpenChange`."},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:"Called when Escape, the close button, or (modal only) an outside press requests closing."},modal:{required:!1,tsType:{name:"boolean"},description:`When \`true\`, the drawer covers the page with a scrim, traps focus, locks
page scroll, and closes on an outside press.

When \`false\`, the page behind stays visible and usable: there is no scrim,
focus moves into the drawer on open but Tab can leave it, the page can
scroll, and an outside press does not close it. Escape closes the drawer
only while focus is inside it. Use this for a detail panel beside a list,
where a click on another row changes the drawer's content.
@default true`},side:{required:!1,tsType:{name:"DrawerVariantProps['side']",raw:"DrawerVariantProps['side']"},description:`Screen edge the drawer attaches to.
@default 'right'`},size:{required:!1,tsType:{name:"DrawerVariantProps['size']",raw:"DrawerVariantProps['size']"},description:"Drawer width: `sm` 448px, `md` 576px, `lg` 768px, `xl` 1024px, `full` the\nwhole viewport. Every size is full width below the `xs` breakpoint.\n@default 'md'"},preventOutsideClose:{required:!1,tsType:{name:"boolean"},description:`Prevents an outside press from requesting close. Modal drawers only;
Escape still requests close.
@default false`},initialFocus:{required:!1,tsType:{name:"union",raw:"number | RefObject<HTMLElement | null>",elements:[{name:"number"},{name:"RefObject",elements:[{name:"union",raw:"HTMLElement | null",elements:[{name:"HTMLElement"},{name:"null"}]}],raw:"RefObject<HTMLElement | null>"}]},description:`Element to focus when the drawer opens. Forwarded to Floating UI's
\`FloatingFocusManager\`. A number selects by tabbable index; a ref targets
a specific element. Defaults to the first tabbable element for a modal
drawer, and to the drawer panel itself for a non-modal drawer, so opening
it from a list does not show the close button's tooltip.`},returnFocus:{required:!1,tsType:{name:"union",raw:"boolean | RefObject<HTMLElement | null>",elements:[{name:"boolean"},{name:"RefObject",elements:[{name:"union",raw:"HTMLElement | null",elements:[{name:"HTMLElement"},{name:"null"}]}],raw:"RefObject<HTMLElement | null>"}]},description:`Returns focus to the previously focused element when the drawer closes, or
to a specific element when given a ref.
@default true`},children:{required:!0,tsType:{name:"ReactNode"},description:"Drawer content, typically composed from `DrawerHeader`, `DrawerBody`, and `DrawerFooter`."},id:{required:!1,tsType:{name:"string"},description:"Identifier applied to the drawer element. Provide accessible naming with `aria-label` or `aria-labelledby`."}}};const C=a=>{const{children:n,scrollable:t=!0,...o}=a,[s,r]=L(o),u=A({scrollable:t});return e.jsx(b,{className:P(u.body,s),...r,children:n})};C.__docgenInfo={description:"Renders the main content region of a {@link Drawer}. It fills the height\nbetween the header and the footer.\n\n@example\n```tsx\n<DrawerBody>Changes are saved automatically.</DrawerBody>\n```",methods:[],displayName:"DrawerBody",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Content displayed in the drawer's body region."},scrollable:{required:!1,tsType:{name:"boolean"},description:"When `true`, the body scrolls as one region. Set `false` when the content\nmanages its own scroll regions, such as a thread and a side rail that\nscroll separately.\n@default true"}}};const J=a=>{const{children:n,...t}=a,[o,s]=L(t),r=A();return e.jsx(b,{className:P(r.footer,o),...s,children:n})};J.__docgenInfo={description:"Renders the action region of a {@link Drawer}. It stays fixed at the bottom\nwhile the body scrolls.\n\n@example\n```tsx\n<DrawerFooter><Button>Apply</Button></DrawerFooter>\n```",methods:[],displayName:"DrawerFooter",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Content displayed in the footer, typically action buttons."}}};const B=a=>{const{title:n,titleId:t,showCloseButton:o=!0,children:s,...r}=a,[u,m]=L(r),g=A(),{onClose:v}=st(),R=Mt("sm");return e.jsx(b,{className:P(g.header,u),...m,children:s||e.jsxs(e.Fragment,{children:[n&&e.jsx($,{id:t,level:"h3",textStyle:{base:"heading.sm",sm:"heading.xs"},className:g.title,children:n}),o&&e.jsx(z,{variant:"ghost",size:R?"md":"lg",onClick:v,altText:"Close drawer","aria-label":"Close drawer",className:g.closeButton,iconName:"x"})]})})};B.__docgenInfo={description:'Renders the header region of a parent {@link Drawer}. It stays fixed while\nthe body scrolls.\n\nUse `title` for the standard heading, or provide `children` for custom\ncontent such as previous and next controls. It must be rendered inside\n`Drawer` because it uses drawer context to close the drawer.\n\n@example\n```tsx\n<DrawerHeader title="Filters" titleId={titleId} />\n```',methods:[],displayName:"DrawerHeader",props:{title:{required:!1,tsType:{name:"string"},description:"Text rendered as the default level-three heading when `children` is omitted."},titleId:{required:!1,tsType:{name:"string"},description:"Identifier applied to the title heading for `aria-labelledby` on the drawer.\nPass the same value to the parent drawer's `aria-labelledby`."},showCloseButton:{required:!1,tsType:{name:"boolean"},description:"Shows the built-in button that calls the parent drawer's `onOpenChange(false)`.\n@default true"},children:{required:!1,tsType:{name:"ReactNode"},description:"Custom header content. When supplied, it replaces both `title` and the\nbuilt-in close button; use `useDrawerContext().onClose` for a custom close\ncontrol."}}};const ka={title:"Components/Drawer",component:x,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{modal:{control:"boolean",description:"Scrim, focus trap, scroll lock and outside-press close. Set false for a panel beside a list.",table:{defaultValue:{summary:"true"}}},side:{control:"select",options:["right","left"],table:{defaultValue:{summary:"right"}}},size:{control:"select",options:["sm","md","lg","xl","full"],table:{defaultValue:{summary:"md"}}},preventOutsideClose:{control:"boolean",description:"Modal only: an outside press does not close the drawer"}},args:{open:!1,onOpenChange:()=>{},children:null}},y=a=>{const{label:n="Open drawer",...t}=a,[o,s]=c.useState(!1),r=c.useId();return e.jsxs(b,{p:"24",children:[e.jsx(h,{onClick:()=>s(!0),children:n}),e.jsxs(x,{...t,open:o,onOpenChange:s,"aria-labelledby":r,children:[e.jsx(B,{title:"Filters",titleId:r}),e.jsxs(C,{children:[e.jsx(oe,{label:"Customer",labelFor:"drawer-customer",children:e.jsx(Dt,{id:"drawer-customer",name:"customer",placeholder:"Any customer"})}),e.jsx(oe,{label:"Stage",labelFor:"drawer-stage",children:e.jsxs(kt,{id:"drawer-stage",name:"stage",placeholder:"Any stage",children:[e.jsx(Y,{value:"new",label:"New"}),e.jsx(Y,{value:"assigned",label:"Assigned"}),e.jsx(Y,{value:"resolved",label:"Resolved"})]})})]}),e.jsxs(J,{children:[e.jsx(h,{variant:"ghost",onClick:()=>s(!1),children:"Cancel"}),e.jsx(h,{variant:"primary",onClick:()=>s(!1),children:"Apply"})]})]})]})},S={render:a=>e.jsx(y,{modal:a.modal,side:a.side,size:a.size,preventOutsideClose:a.preventOutsideClose})},D={tags:["!dev","!autodocs"],render:()=>e.jsx(y,{}),play:async({canvasElement:a})=>{const n=d(a),t=d(a.ownerDocument.body),o=n.getByRole("button",{name:"Open drawer"});await i.click(o);const s=await t.findByRole("dialog",{name:"Filters"});l(s).toHaveAttribute("aria-modal","true"),await p(()=>l(s).toContainElement(document.activeElement)),await i.click(d(s).getByRole("textbox")),await i.keyboard("{Escape}"),await p(()=>l(t.queryByRole("dialog",{name:"Filters"})).toBeNull()),await p(()=>l(o).toHaveFocus()),await i.click(o);const r=await t.findByRole("dialog",{name:"Filters"});await p(()=>l(r).toContainElement(document.activeElement));for(let u=0;u<8;u+=1)await i.tab(),await p(()=>l(r).toContainElement(document.activeElement));await i.click(t.getByRole("button",{name:"Cancel"})),await p(()=>l(t.queryByRole("dialog",{name:"Filters"})).toBeNull())}},q={render:()=>e.jsxs(tt,{gap:"12",children:[e.jsx(y,{side:"left",label:"Open left"}),e.jsx(y,{side:"right",label:"Open right"})]})},N={render:()=>e.jsxs(at,{gap:"12",flexWrap:"wrap",children:[e.jsx(y,{size:"sm",label:"Small"}),e.jsx(y,{size:"md",label:"Medium"}),e.jsx(y,{size:"lg",label:"Large"}),e.jsx(y,{size:"xl",label:"Extra large"}),e.jsx(y,{size:"full",label:"Full width"})]})},M={render:()=>e.jsx(y,{preventOutsideClose:!0})},Wt=()=>{const[a,n]=c.useState(!1),[t,o]=c.useState(0),s=c.useId(),r=u=>{u||o(m=>m+1),n(u)};return e.jsxs(b,{p:"24",children:[e.jsx(h,{onClick:()=>n(!0),children:"Open drawer"}),e.jsx(f,{children:`Close requests: ${t}`}),e.jsxs(x,{open:a,onOpenChange:r,"aria-labelledby":s,children:[e.jsx(B,{title:"Close requests",titleId:s}),e.jsx(C,{children:e.jsx(f,{children:"Click the scrim or the close button."})})]})]})},j={tags:["!dev","!autodocs"],render:()=>e.jsx(Wt,{}),play:async({canvasElement:a})=>{var g;const n=d(a),t=d(a.ownerDocument.body),o=n.getByRole("button",{name:"Open drawer"});await i.click(o);const r=(g=(await t.findByRole("dialog",{name:"Close requests"})).parentElement)==null?void 0:g.querySelector('[class*="drawer__overlay"]');l(r).toBeTruthy(),await i.click(r),r!=null&&r.isConnected&&await i.click(r),await p(()=>l(t.queryByRole("dialog",{name:"Close requests"})).toBeNull()),l(n.getByText("Close requests: 1")).toBeVisible(),await i.click(o);const u=await t.findByRole("dialog",{name:"Close requests"}),m=d(u).getByRole("button",{name:"Close drawer"});await i.click(m),m.isConnected&&await i.click(m),await p(()=>l(t.queryByRole("dialog",{name:"Close requests"})).toBeNull()),l(n.getByText("Close requests: 2")).toBeVisible()}},Q=Array.from({length:30},(a,n)=>n+1),I={render:()=>{const a=()=>{const[n,t]=c.useState(!1);return e.jsxs(b,{p:"24",children:[e.jsx(h,{onClick:()=>t(!0),children:"Open long drawer"}),e.jsxs(x,{open:n,onOpenChange:t,"aria-label":"Release notes",children:[e.jsx(B,{title:"Release notes"}),e.jsx(C,{children:Q.map(o=>e.jsxs(f,{children:["Note ",o,". The header and footer stay fixed while this body scrolls."]},o))}),e.jsx(J,{children:e.jsx(h,{onClick:()=>t(!1),children:"Done"})})]})]})};return e.jsx(a,{})}},H={render:()=>{const a=()=>{const[n,t]=c.useState(!1);return e.jsxs(b,{p:"24",children:[e.jsx(h,{onClick:()=>t(!0),children:"Open two-region drawer"}),e.jsxs(x,{open:n,onOpenChange:t,size:"xl","aria-label":"Case detail",children:[e.jsx(B,{title:"Case detail"}),e.jsx(C,{scrollable:!1,p:"0",gap:"0",children:e.jsxs(at,{flex:"1",minH:"0",children:[e.jsx(Z,{flex:"1",minW:"0",overflowY:"auto",alignItems:"stretch",gap:"12",p:"20",children:Q.map(o=>e.jsxs(f,{children:["Thread message ",o]},o))}),e.jsx(Z,{w:"xs",flexShrink:"0",overflowY:"auto",alignItems:"stretch",gap:"12",p:"20",borderLeft:"default",bg:"surface.sunken",children:Q.map(o=>e.jsxs(f,{children:["Rail item ",o]},o))})]})})]})]})};return e.jsx(a,{})}},rt=()=>{const a=()=>{const[n,t]=c.useState(!1),[o,s]=c.useState(!1);return e.jsxs(b,{p:"24",children:[e.jsx(h,{onClick:()=>t(!0),children:"Open drawer"}),e.jsxs(x,{open:n,onOpenChange:t,"aria-label":"Case actions",children:[e.jsx(B,{title:"Case actions"}),e.jsx(C,{children:e.jsx(h,{variant:"danger",onClick:()=>s(!0),children:"Delete case"})})]}),e.jsxs(Ct,{open:o,onOpenChange:s,size:"sm","aria-label":"Delete case",children:[e.jsx(Bt,{title:"Delete case?"}),e.jsx(vt,{children:e.jsx(f,{children:"This cannot be undone."})}),e.jsxs(Rt,{children:[e.jsx(h,{variant:"ghost",onClick:()=>s(!1),children:"Cancel"}),e.jsx(h,{variant:"danger",onClick:()=>s(!1),children:"Delete"})]})]})]})};return e.jsx(a,{})},_={render:rt},F={tags:["!dev","!autodocs"],render:rt,play:async({canvasElement:a})=>{const n=d(a),t=d(a.ownerDocument.body);await i.click(n.getByRole("button",{name:"Open drawer"})),await i.click(await t.findByRole("button",{name:"Delete case"}));const o=await t.findByRole("dialog",{name:"Delete case"}),s=t.getByRole("dialog",{name:"Case actions",hidden:!0}),r=o.getBoundingClientRect(),u=s.getBoundingClientRect(),m=Math.max(r.left,u.left),g=Math.min(r.right,u.right),v=m<g?(m+g)/2:r.left+r.width/2,R=r.top+r.height/2,W=a.ownerDocument.elementFromPoint(v,R);l(o).toContainElement(W),await i.click(d(o).getByRole("button",{name:"Cancel"})),await p(()=>l(t.queryByRole("dialog",{name:"Delete case"})).toBeNull()),l(t.getByRole("dialog",{name:"Case actions"})).toBeVisible()}},Kt=a=>{let n=a;for(;n;){const{zIndex:t}=getComputedStyle(n);if(t!=="auto")return Number(t);n=n.parentElement}return 0},E={tags:["!dev","!autodocs"],render:()=>e.jsx(y,{}),play:async({canvasElement:a})=>{const n=d(a),t=d(a.ownerDocument.body);await i.click(n.getByRole("button",{name:"Open drawer"}));const o=await t.findByRole("dialog",{name:"Filters"});await i.click(d(o).getByRole("combobox",{name:"Stage"}));const s=await t.findByRole("listbox");l(Kt(s)).toBeGreaterThan(Number(getComputedStyle(o).zIndex)),await i.keyboard("{Escape}"),await p(()=>l(t.queryByRole("listbox")).toBeNull()),l(t.getByRole("dialog",{name:"Filters"})).toBeVisible()}},G=[{id:42101,title:"Invoice totals do not match the PDF"},{id:42102,title:"Cannot receive a partial purchase order"},{id:42103,title:"Label printer skips every other label"},{id:42104,title:"Work order status stuck on Released"},{id:42105,title:"Customer portal login loops"}],Ut=a=>{const{index:n,total:t,onMove:o}=a,{onClose:s}=st();return e.jsxs(B,{children:[e.jsxs(f,{mr:"auto",children:["Case ",n+1," of ",t]}),e.jsxs(tt,{gap:"4",children:[e.jsx(z,{variant:"ghost",iconName:"arrow-left",altText:"Previous case","aria-label":"Previous case",disabled:n===0,onClick:()=>o(-1)}),e.jsx(z,{variant:"ghost",iconName:"arrow-right",altText:"Next case","aria-label":"Next case",disabled:n===t-1,onClick:()=>o(1)}),e.jsx(z,{variant:"ghost",iconName:"x",altText:"Close drawer","aria-label":"Close drawer",onClick:s})]})]})},lt=()=>{const a=()=>{const[n,t]=c.useState(null),o=n===null?null:G[n];return e.jsxs(b,{p:"24",children:[e.jsx($,{level:"h2",mb:"12",children:"Cases"}),e.jsx(Z,{alignItems:"stretch",gap:"4",maxW:"xl",children:G.map((s,r)=>e.jsxs(h,{variant:r===n?"primary":"ghost",onClick:()=>t(r),children:[s.id," · ",s.title]},s.id))}),e.jsx(x,{open:n!==null,onOpenChange:s=>{s||t(null)},modal:!1,size:"lg","aria-label":"Case detail",children:o&&n!==null&&e.jsxs(e.Fragment,{children:[e.jsx(Ut,{index:n,total:G.length,onMove:s=>t(n+s)}),e.jsxs(C,{children:[e.jsx($,{level:"h3",children:o.title}),e.jsxs(f,{children:["Case ",o.id]})]})]})})]})};return e.jsx(a,{})},V={name:"Ex: Case list (non-modal)",render:lt},O={tags:["!dev","!autodocs"],render:lt,play:async({canvasElement:a})=>{const n=d(a),t=d(a.ownerDocument.body),o=n.getByRole("button",{name:/42101/});await i.click(o);const s=await t.findByRole("dialog",{name:"Case detail"});l(s).not.toHaveAttribute("aria-modal"),l(d(s).getByText("Case 1 of 5")).toBeVisible(),await p(()=>l(s).toHaveFocus()),await i.click(n.getByRole("button",{name:/42103/})),await p(()=>l(d(s).getByText("Case 3 of 5")).toBeVisible()),l(t.getByRole("dialog",{name:"Case detail"})).toBe(s),l(s).toHaveAttribute("data-state","open"),n.getByRole("button",{name:/42103/}).focus(),await i.keyboard("{Escape}"),l(t.getByRole("dialog",{name:"Case detail"})).toBeVisible(),await i.click(d(s).getByRole("button",{name:"Next case"})),await p(()=>l(d(s).getByText("Case 4 of 5")).toBeVisible()),await i.keyboard("{Escape}"),await p(()=>l(t.queryByRole("tooltip")).toBeNull()),l(t.getByRole("dialog",{name:"Case detail"})).toBeVisible(),await i.keyboard("{Escape}"),await p(()=>l(t.queryByRole("dialog",{name:"Case detail"})).toBeNull())}};var re,le,ie;S.parameters={...S.parameters,docs:{...(re=S.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: args => <FiltersDrawer modal={args.modal} side={args.side} size={args.size} preventOutsideClose={args.preventOutsideClose} />
}`,...(ie=(le=S.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var ce,de,ue,pe,me;D.parameters={...D.parameters,docs:{...(ce=D.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  // Test-only: hidden from the sidebar and docs; open by URL or a test runner.
  tags: ['!dev', '!autodocs'],
  render: () => <FiltersDrawer />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    const trigger = canvas.getByRole('button', {
      name: 'Open drawer'
    });

    // Escape closes and focus returns to the trigger.
    await userEvent.click(trigger);
    const drawer = await body.findByRole('dialog', {
      name: 'Filters'
    });
    expect(drawer).toHaveAttribute('aria-modal', 'true');
    await waitFor(() => expect(drawer).toContainElement(document.activeElement as HTMLElement));
    // Focus starts on the close button, whose tooltip takes the first Escape.
    // Move into a field so a single Escape reaches the drawer.
    await userEvent.click(within(drawer).getByRole('textbox'));
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body.queryByRole('dialog', {
      name: 'Filters'
    })).toBeNull());
    await waitFor(() => expect(trigger).toHaveFocus());

    // Tab stays inside a modal drawer.
    await userEvent.click(trigger);
    const reopened = await body.findByRole('dialog', {
      name: 'Filters'
    });
    // Focus moves in a tick after the drawer mounts; tab only once it has.
    await waitFor(() => expect(reopened).toContainElement(document.activeElement as HTMLElement));
    for (let i = 0; i < 8; i += 1) {
      await userEvent.tab();
      // Past the last control, focus lands on a Floating UI focus guard just
      // outside the panel, which sends it back to the first control a moment
      // later. Wait for it to settle.
      await waitFor(() => expect(reopened).toContainElement(document.activeElement as HTMLElement));
    }
    await userEvent.click(body.getByRole('button', {
      name: 'Cancel'
    }));
    await waitFor(() => expect(body.queryByRole('dialog', {
      name: 'Filters'
    })).toBeNull());
  }
}`,...(ue=(de=D.parameters)==null?void 0:de.docs)==null?void 0:ue.source},description:{story:"Modal keyboard and focus behavior. Kept out of `Default` so the demo does not animate on load.",...(me=(pe=D.parameters)==null?void 0:pe.docs)==null?void 0:me.description}}};var we,he,ge;q.parameters={...q.parameters,docs:{...(we=q.parameters)==null?void 0:we.docs,source:{originalSource:`{
  render: () => <HStack gap="12">
      <FiltersDrawer side="left" label="Open left" />
      <FiltersDrawer side="right" label="Open right" />
    </HStack>
}`,...(ge=(he=q.parameters)==null?void 0:he.docs)==null?void 0:ge.source}}};var ye,be,fe;N.parameters={...N.parameters,docs:{...(ye=N.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  render: () => <Flex gap="12" flexWrap="wrap">
      <FiltersDrawer size="sm" label="Small" />
      <FiltersDrawer size="md" label="Medium" />
      <FiltersDrawer size="lg" label="Large" />
      <FiltersDrawer size="xl" label="Extra large" />
      <FiltersDrawer size="full" label="Full width" />
    </Flex>
}`,...(fe=(be=N.parameters)==null?void 0:be.docs)==null?void 0:fe.source}}};var xe,Ce,Be;M.parameters={...M.parameters,docs:{...(xe=M.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: () => <FiltersDrawer preventOutsideClose />
}`,...(Be=(Ce=M.parameters)==null?void 0:Ce.docs)==null?void 0:Be.source}}};var ve,Re,ke,De,je;j.parameters={...j.parameters,docs:{...(ve=j.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  // Test-only: hidden from the sidebar and docs; open by URL or a test runner.
  tags: ['!dev', '!autodocs'],
  render: () => <CloseRequestCounter />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    const trigger = canvas.getByRole('button', {
      name: 'Open drawer'
    });

    // Scrim: pointerdown and click arrive from one press.
    await userEvent.click(trigger);
    const drawer = await body.findByRole('dialog', {
      name: 'Close requests'
    });
    const scrim = drawer.parentElement?.querySelector<HTMLElement>('[class*="drawer__overlay"]');
    expect(scrim).toBeTruthy();
    await userEvent.click(scrim as HTMLElement);
    // A second press while the scrim is still fading out.
    if (scrim?.isConnected) {
      await userEvent.click(scrim);
    }
    await waitFor(() => expect(body.queryByRole('dialog', {
      name: 'Close requests'
    })).toBeNull());
    expect(canvas.getByText('Close requests: 1')).toBeVisible();

    // Close button: a second click lands during the exit animation.
    await userEvent.click(trigger);
    const reopened = await body.findByRole('dialog', {
      name: 'Close requests'
    });
    const closeButton = within(reopened).getByRole('button', {
      name: 'Close drawer'
    });
    await userEvent.click(closeButton);
    if (closeButton.isConnected) {
      await userEvent.click(closeButton);
    }
    await waitFor(() => expect(body.queryByRole('dialog', {
      name: 'Close requests'
    })).toBeNull());
    expect(canvas.getByText('Close requests: 2')).toBeVisible();
  }
}`,...(ke=(Re=j.parameters)==null?void 0:Re.docs)==null?void 0:ke.source},description:{story:"One scrim click or close-button click calls `onOpenChange(false)` once. The\npanel and scrim stay mounted for the exit animation, so a repeat press\nduring it must not request close again.",...(je=(De=j.parameters)==null?void 0:De.docs)==null?void 0:je.description}}};var Fe,Ee,Oe;I.parameters={...I.parameters,docs:{...(Fe=I.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  render: () => {
    const Component = () => {
      const [open, setOpen] = useState(false);
      return <Box p="24">
          <Button onClick={() => setOpen(true)}>Open long drawer</Button>
          <Drawer open={open} onOpenChange={setOpen} aria-label="Release notes">
            <DrawerHeader title="Release notes" />
            <DrawerBody>
              {paragraphs.map(n => <Text key={n}>
                  Note {n}. The header and footer stay fixed while this body
                  scrolls.
                </Text>)}
            </DrawerBody>
            <DrawerFooter>
              <Button onClick={() => setOpen(false)}>Done</Button>
            </DrawerFooter>
          </Drawer>
        </Box>;
    };
    return <Component />;
  }
}`,...(Oe=(Ee=I.parameters)==null?void 0:Ee.docs)==null?void 0:Oe.source}}};var Te,Se,qe;H.parameters={...H.parameters,docs:{...(Te=H.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  render: () => {
    const Component = () => {
      const [open, setOpen] = useState(false);
      return <Box p="24">
          <Button onClick={() => setOpen(true)}>Open two-region drawer</Button>
          <Drawer open={open} onOpenChange={setOpen} size="xl" aria-label="Case detail">
            <DrawerHeader title="Case detail" />
            <DrawerBody scrollable={false} p="0" gap="0">
              <Flex flex="1" minH="0">
                <VStack flex="1" minW="0" overflowY="auto" alignItems="stretch" gap="12" p="20">
                  {paragraphs.map(n => <Text key={n}>Thread message {n}</Text>)}
                </VStack>
                <VStack w="xs" flexShrink="0" overflowY="auto" alignItems="stretch" gap="12" p="20" borderLeft="default" bg="surface.sunken">
                  {paragraphs.map(n => <Text key={n}>Rail item {n}</Text>)}
                </VStack>
              </Flex>
            </DrawerBody>
          </Drawer>
        </Box>;
    };
    return <Component />;
  }
}`,...(qe=(Se=H.parameters)==null?void 0:Se.docs)==null?void 0:qe.source}}};var Ne,Me,Ie;_.parameters={..._.parameters,docs:{...(Ne=_.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  render: renderModalFromDrawer
}`,...(Ie=(Me=_.parameters)==null?void 0:Me.docs)==null?void 0:Ie.source}}};var He,_e,Ve,ze,Le;F.parameters={...F.parameters,docs:{...(He=F.parameters)==null?void 0:He.docs,source:{originalSource:`{
  // Test-only: hidden from the sidebar and docs; open by URL or a test runner.
  tags: ['!dev', '!autodocs'],
  render: renderModalFromDrawer,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Open drawer'
    }));
    await userEvent.click(await body.findByRole('button', {
      name: 'Delete case'
    }));
    const modal = await body.findByRole('dialog', {
      name: 'Delete case'
    });
    // The modal hides everything behind it from assistive tech, the drawer too.
    const drawer = body.getByRole('dialog', {
      name: 'Case actions',
      hidden: true
    });

    // The modal paints above the drawer. Check what is actually on top where
    // the two overlap, not DOM order: z-index decides before DOM order does.
    const m = modal.getBoundingClientRect();
    const d = drawer.getBoundingClientRect();
    const left = Math.max(m.left, d.left);
    const right = Math.min(m.right, d.right);
    const x = left < right ? (left + right) / 2 : m.left + m.width / 2;
    const y = m.top + m.height / 2;
    const topmost = canvasElement.ownerDocument.elementFromPoint(x, y);
    expect(modal).toContainElement(topmost as HTMLElement);
    await userEvent.click(within(modal).getByRole('button', {
      name: 'Cancel'
    }));
    await waitFor(() => expect(body.queryByRole('dialog', {
      name: 'Delete case'
    })).toBeNull());
    expect(body.getByRole('dialog', {
      name: 'Case actions'
    })).toBeVisible();
  }
}`,...(Ve=(_e=F.parameters)==null?void 0:_e.docs)==null?void 0:Ve.source},description:{story:"A modal opened from a drawer paints above it.",...(Le=(ze=F.parameters)==null?void 0:ze.docs)==null?void 0:Le.description}}};var Pe,Ae,We,Ke,Ue;E.parameters={...E.parameters,docs:{...(Pe=E.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  // Test-only: hidden from the sidebar and docs; open by URL or a test runner.
  tags: ['!dev', '!autodocs'],
  render: () => <FiltersDrawer />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Open drawer'
    }));
    const drawer = await body.findByRole('dialog', {
      name: 'Filters'
    });
    await userEvent.click(within(drawer).getByRole('combobox', {
      name: 'Stage'
    }));
    const listbox = await body.findByRole('listbox');
    expect(stackingZIndex(listbox)).toBeGreaterThan(Number(getComputedStyle(drawer).zIndex));

    // Escape closes the listbox first; the drawer stays open.
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body.queryByRole('listbox')).toBeNull());
    expect(body.getByRole('dialog', {
      name: 'Filters'
    })).toBeVisible();
  }
}`,...(We=(Ae=E.parameters)==null?void 0:Ae.docs)==null?void 0:We.source},description:{story:"A select inside a drawer opens above it, and Escape closes the select first.",...(Ue=(Ke=E.parameters)==null?void 0:Ke.docs)==null?void 0:Ue.description}}};var Ye,Ge,Ze;V.parameters={...V.parameters,docs:{...(Ye=V.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  name: 'Ex: Case list (non-modal)',
  render: renderCaseList
}`,...(Ze=(Ge=V.parameters)==null?void 0:Ge.docs)==null?void 0:Ze.source}}};var $e,Qe,Je,Xe,et;O.parameters={...O.parameters,docs:{...($e=O.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  // Test-only: hidden from the sidebar and docs; open by URL or a test runner.
  tags: ['!dev', '!autodocs'],
  render: renderCaseList,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    const firstRow = canvas.getByRole('button', {
      name: /42101/
    });
    await userEvent.click(firstRow);
    const drawer = await body.findByRole('dialog', {
      name: 'Case detail'
    });
    expect(drawer).not.toHaveAttribute('aria-modal');
    expect(within(drawer).getByText('Case 1 of 5')).toBeVisible();
    // A non-modal drawer focuses its own panel, not the close button.
    await waitFor(() => expect(drawer).toHaveFocus());

    // No scrim: a click on another row swaps the case and keeps the drawer open.
    await userEvent.click(canvas.getByRole('button', {
      name: /42103/
    }));
    await waitFor(() => expect(within(drawer).getByText('Case 3 of 5')).toBeVisible());
    expect(body.getByRole('dialog', {
      name: 'Case detail'
    })).toBe(drawer);
    expect(drawer).toHaveAttribute('data-state', 'open');

    // Escape with focus outside the drawer does nothing.
    canvas.getByRole('button', {
      name: /42103/
    }).focus();
    await userEvent.keyboard('{Escape}');
    expect(body.getByRole('dialog', {
      name: 'Case detail'
    })).toBeVisible();

    // Next inside the drawer, then Escape with focus inside closes it.
    await userEvent.click(within(drawer).getByRole('button', {
      name: 'Next case'
    }));
    await waitFor(() => expect(within(drawer).getByText('Case 4 of 5')).toBeVisible());
    // The focused Next button shows a tooltip; the first Escape closes only
    // the tooltip, the second closes the drawer.
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body.queryByRole('tooltip')).toBeNull());
    expect(body.getByRole('dialog', {
      name: 'Case detail'
    })).toBeVisible();
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body.queryByRole('dialog', {
      name: 'Case detail'
    })).toBeNull());
  }
}`,...(Je=(Qe=O.parameters)==null?void 0:Qe.docs)==null?void 0:Je.source},description:{story:"Non-modal behavior on the case list. Kept out of the example so it does not animate on load.",...(et=(Xe=O.parameters)==null?void 0:Xe.docs)==null?void 0:et.description}}};const Da=["Default","A11yModalKeyboard","Sides","Sizes","PreventOutsideClose","A11ySingleCloseRequest","LongContent","SeparateScrollRegions","ModalFromDrawer","A11yModalFromDrawerStacking","A11ySelectInsideDrawer","ExCaseList","A11yNonModalCaseList"];export{F as A11yModalFromDrawerStacking,D as A11yModalKeyboard,O as A11yNonModalCaseList,E as A11ySelectInsideDrawer,j as A11ySingleCloseRequest,S as Default,V as ExCaseList,I as LongContent,_ as ModalFromDrawer,M as PreventOutsideClose,H as SeparateScrollRegions,q as Sides,N as Sizes,Da as __namedExportsOrder,ka as default};
