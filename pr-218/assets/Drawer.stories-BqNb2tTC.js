import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./index-BKyFwriW.js";import{w as u,u as i,e as l,a as p}from"./index-B_RCCgW0.js";import{m as kt,a as Dt,b as jt,e as Et,g as Ft,s as L,B as f,c as P,d as Tt,H as ct,F as dt,V as J}from"./dsComponent-BG2jnRr7.js";import{B as w}from"./Button-Cr4bC5CG.js";import{F as le}from"./FormField-BtA_7OJ2.js";import{H as X}from"./Heading-CdoR-3Mh.js";import{I as z}from"./IconButton-Cv0iFqCV.js";import{M as Ot,a as St,b as qt,c as Nt}from"./ModalWrapper-BZFIaZQZ.js";import{S as Mt,a as Z}from"./Select-BgsdHs3J.js";import{T as b}from"./Text-BPLBRPQ6.js";import{T as Ht}from"./TextInput-D9mOIsYv.js";import{u as It,d as Vt,h as _t,k as At,F as zt,D as Lt,j as Pt,i as Kt}from"./Tooltip-BEwLM_hx.js";import{F as Wt}from"./FloatingLayerContext-BryH8O9I.js";import{u as Ut}from"./mq.hook-D1974m8s.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Icon-CrwLKW7B.js";import"./IconConfig-BuieZFlx.js";import"./Spinner-PLunUSsK.js";import"./FieldContext-D6URyQos.js";import"./Label-DM3dqKkX.js";import"./useLocale-BTKG7dEv.js";import"./menu-BvaagRwT.js";import"./dsPart-nnoJM9m6.js";import"./Chip-Bjvowq7p.js";import"./ListItem-CIvDFo3p.js";import"./HighlightText-DKF3xkQK.js";import"./Checkbox-BKc0omfg.js";import"./Divider-Dbp7vcYx.js";import"./Toggle-mlz1wkXL.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";import"./breakpoints-DU_5_Zhy.js";const ut={side:"right",size:"md",scrollable:!0},Yt=[],$t=[["overlay","drawer__overlay"],["container","drawer__container"],["header","drawer__header"],["title","drawer__title"],["closeButton","drawer__closeButton"],["body","drawer__body"],["footer","drawer__footer"]],Gt=$t.map(([n,t])=>[n,Et(t,ut,Ft(Yt,n))]),Zt=kt((n={})=>Object.fromEntries(Gt.map(([t,a])=>[t,a.recipeFn(n)]))),ie=["side","size","scrollable"],Qt=n=>({...ut,...Dt(n)}),K=Object.assign(Zt,{__recipe__:!1,__name__:"drawer",raw:n=>n,classNameMap:{},variantKeys:ie,variantMap:{side:["right","left"],size:["sm","md","lg","xl","full"],scrollable:["true","false"]},splitVariantProps(n){return jt(n,ie)},getVariantProps:Qt}),pt=d.createContext(null),mt=()=>{const n=d.useContext(pt);if(!n)throw new Error("Drawer components must be used within a <Drawer>");return n},Jt=200,Xt=(n,t)=>{switch(t.type){case"open":return"open";case"startClosing":return n==="closed"?n:"closing";case"finishClosing":return"closed";default:return n}},ea=()=>typeof window<"u"&&typeof window.matchMedia=="function"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,x=n=>{const{open:t,onOpenChange:a,modal:o=!0,side:s="right",size:r="md",preventOutsideClose:c=!1,initialFocus:h,returnFocus:y=!0,children:v,id:R,ref:W,onKeyDown:U,onAnimationEnd:Y,...yt}=n,[gt,bt]=L(yt),ae=K({side:s,size:r}),[k,S]=d.useReducer(Xt,t?"open":"closed"),$=d.useRef(null),{refs:ne,context:oe}=It({open:t,onOpenChange:a,strategy:"fixed",middleware:[]}),ft=Vt(oe,{escapeKey:o,outsidePress:o&&!c}),{getFloatingProps:xt}=_t([ft]);d.useEffect(()=>{if(t){S({type:"open"});return}S({type:"startClosing"});const m=setTimeout(()=>S({type:"finishClosing"}),ea()?0:Jt);return()=>clearTimeout(m)},[t]);const Ct=d.useCallback(m=>{$.current=m,ne.setFloating(m)},[ne]),Bt=At([Ct,W]),G=d.useCallback(()=>{t&&a(!1)},[t,a]),vt=m=>{var re;U==null||U(m),!(o||m.key!=="Escape"||m.defaultPrevented)&&(m.nativeEvent.isComposing||(re=$.current)!=null&&re.contains(m.target)&&(m.stopPropagation(),G()))},Rt=d.useMemo(()=>({open:k==="open",onClose:G,modal:o}),[o,G,k]);if(k==="closed")return null;const se=k==="closing"?"closing":"open";return e.jsx(Wt.Provider,{value:"modalFloating",children:e.jsx(pt.Provider,{value:Rt,children:e.jsx(zt,{children:e.jsxs(Lt,{children:[o&&e.jsx(Pt,{lockScroll:!0,className:ae.overlay,"data-state":se,"aria-hidden":"true"}),e.jsx(Kt,{context:oe,modal:o,initialFocus:h??(o?0:$),returnFocus:y,closeOnFocusOut:!1,children:e.jsx(f,{...Tt("Drawer"),ref:Bt,className:P(ae.container,gt),"data-state":se,"data-side":s,id:R,role:"dialog","aria-modal":o?"true":void 0,...xt({...bt,onKeyDown:vt,onAnimationEnd:m=>{Y==null||Y(m),k==="closing"&&m.target===m.currentTarget&&S({type:"finishClosing"})}}),children:v})})]})})})})};x.__docgenInfo={description:`Renders a controlled panel that slides in from the edge of the screen.

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
@default true`},children:{required:!0,tsType:{name:"ReactNode"},description:"Drawer content, typically composed from `DrawerHeader`, `DrawerBody`, and `DrawerFooter`."},id:{required:!1,tsType:{name:"string"},description:"Identifier applied to the drawer element. Provide accessible naming with `aria-label` or `aria-labelledby`."}}};const C=n=>{const{children:t,scrollable:a=!0,...o}=n,[s,r]=L(o),c=K({scrollable:a});return e.jsx(f,{className:P(c.body,s),...r,children:t})};C.__docgenInfo={description:"Renders the main content region of a {@link Drawer}. It fills the height\nbetween the header and the footer.\n\n@example\n```tsx\n<DrawerBody>Changes are saved automatically.</DrawerBody>\n```",methods:[],displayName:"DrawerBody",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Content displayed in the drawer's body region."},scrollable:{required:!1,tsType:{name:"boolean"},description:"When `true`, the body scrolls as one region. Set `false` when the content\nmanages its own scroll regions, such as a thread and a side rail that\nscroll separately.\n@default true"}}};const te=n=>{const{children:t,...a}=n,[o,s]=L(a),r=K();return e.jsx(f,{className:P(r.footer,o),...s,children:t})};te.__docgenInfo={description:"Renders the action region of a {@link Drawer}. It stays fixed at the bottom\nwhile the body scrolls.\n\n@example\n```tsx\n<DrawerFooter><Button>Apply</Button></DrawerFooter>\n```",methods:[],displayName:"DrawerFooter",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Content displayed in the footer, typically action buttons."}}};const B=n=>{const{title:t,titleId:a,showCloseButton:o=!0,children:s,...r}=n,[c,h]=L(r),y=K(),{onClose:v}=mt(),R=Ut("sm");return e.jsx(f,{className:P(y.header,c),...h,children:s||e.jsxs(e.Fragment,{children:[t&&e.jsx(X,{id:a,level:"h3",textStyle:{base:"heading.sm",sm:"heading.xs"},className:y.title,children:t}),o&&e.jsx(z,{variant:"ghost",size:R?"md":"lg",onClick:v,altText:"Close drawer","aria-label":"Close drawer",className:y.closeButton,iconName:"x"})]})})};B.__docgenInfo={description:'Renders the header region of a parent {@link Drawer}. It stays fixed while\nthe body scrolls.\n\nUse `title` for the standard heading, or provide `children` for custom\ncontent such as previous and next controls. It must be rendered inside\n`Drawer` because it uses drawer context to close the drawer.\n\n@example\n```tsx\n<DrawerHeader title="Filters" titleId={titleId} />\n```',methods:[],displayName:"DrawerHeader",props:{title:{required:!1,tsType:{name:"string"},description:"Text rendered as the default level-three heading when `children` is omitted."},titleId:{required:!1,tsType:{name:"string"},description:"Identifier applied to the title heading for `aria-labelledby` on the drawer.\nPass the same value to the parent drawer's `aria-labelledby`."},showCloseButton:{required:!1,tsType:{name:"boolean"},description:"Shows the built-in button that calls the parent drawer's `onOpenChange(false)`.\n@default true"},children:{required:!1,tsType:{name:"ReactNode"},description:"Custom header content. When supplied, it replaces both `title` and the\nbuilt-in close button; use `useDrawerContext().onClose` for a custom close\ncontrol."}}};const Va={title:"Components/Drawer",component:x,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{modal:{control:"boolean",description:"Scrim, focus trap, scroll lock and outside-press close. Set false for a panel beside a list.",table:{defaultValue:{summary:"true"}}},side:{control:"select",options:["right","left"],table:{defaultValue:{summary:"right"}}},size:{control:"select",options:["sm","md","lg","xl","full"],table:{defaultValue:{summary:"md"}}},preventOutsideClose:{control:"boolean",description:"Modal only: an outside press does not close the drawer"}},args:{open:!1,onOpenChange:()=>{},children:null}},g=n=>{const{label:t="Open drawer",...a}=n,[o,s]=d.useState(!1),r=d.useId();return e.jsxs(f,{p:"24",children:[e.jsx(w,{onClick:()=>s(!0),children:t}),e.jsxs(x,{...a,open:o,onOpenChange:s,"aria-labelledby":r,children:[e.jsx(B,{title:"Filters",titleId:r}),e.jsxs(C,{children:[e.jsx(le,{label:"Customer",labelFor:"drawer-customer",children:e.jsx(Ht,{id:"drawer-customer",name:"customer",placeholder:"Any customer"})}),e.jsx(le,{label:"Stage",labelFor:"drawer-stage",children:e.jsxs(Mt,{id:"drawer-stage",name:"stage",placeholder:"Any stage",children:[e.jsx(Z,{value:"new",label:"New"}),e.jsx(Z,{value:"assigned",label:"Assigned"}),e.jsx(Z,{value:"resolved",label:"Resolved"})]})})]}),e.jsxs(te,{children:[e.jsx(w,{variant:"ghost",onClick:()=>s(!1),children:"Cancel"}),e.jsx(w,{variant:"primary",onClick:()=>s(!1),children:"Apply"})]})]})]})},q={render:n=>e.jsx(g,{modal:n.modal,side:n.side,size:n.size,preventOutsideClose:n.preventOutsideClose})},D={tags:["!dev","!autodocs"],render:()=>e.jsx(g,{}),play:async({canvasElement:n})=>{const t=u(n),a=u(n.ownerDocument.body),o=t.getByRole("button",{name:"Open drawer"});await i.click(o);const s=await a.findByRole("dialog",{name:"Filters"});l(s).toHaveAttribute("aria-modal","true"),await p(()=>l(s).toContainElement(document.activeElement)),await i.click(u(s).getByRole("textbox")),await i.keyboard("{Escape}"),await p(()=>l(a.queryByRole("dialog",{name:"Filters"})).toBeNull()),await p(()=>l(o).toHaveFocus()),await i.click(o);const r=await a.findByRole("dialog",{name:"Filters"});await p(()=>l(r).toContainElement(document.activeElement));for(let c=0;c<8;c+=1)await i.tab(),await p(()=>l(r).toContainElement(document.activeElement));await i.click(a.getByRole("button",{name:"Cancel"})),await p(()=>l(a.queryByRole("dialog",{name:"Filters"})).toBeNull())}},N={render:()=>e.jsxs(ct,{gap:"12",children:[e.jsx(g,{side:"left",label:"Open left"}),e.jsx(g,{side:"right",label:"Open right"})]})},M={render:()=>e.jsxs(dt,{gap:"12",flexWrap:"wrap",children:[e.jsx(g,{size:"sm",label:"Small"}),e.jsx(g,{size:"md",label:"Medium"}),e.jsx(g,{size:"lg",label:"Large"}),e.jsx(g,{size:"xl",label:"Extra large"}),e.jsx(g,{size:"full",label:"Full width"})]})},H={render:()=>e.jsx(g,{preventOutsideClose:!0})},ta=()=>{const[n,t]=d.useState(!1),[a,o]=d.useState(0),s=d.useId(),r=c=>{c||o(h=>h+1),t(c)};return e.jsxs(f,{p:"24",children:[e.jsx(w,{onClick:()=>t(!0),children:"Open drawer"}),e.jsx(b,{children:`Close requests: ${a}`}),e.jsxs(x,{open:n,onOpenChange:r,"aria-labelledby":s,children:[e.jsx(B,{title:"Close requests",titleId:s}),e.jsx(C,{children:e.jsx(b,{children:"Click the scrim or the close button."})})]})]})},j={tags:["!dev","!autodocs"],render:()=>e.jsx(ta,{}),play:async({canvasElement:n})=>{var y;const t=u(n),a=u(n.ownerDocument.body),o=t.getByRole("button",{name:"Open drawer"});await i.click(o);const r=(y=(await a.findByRole("dialog",{name:"Close requests"})).parentElement)==null?void 0:y.querySelector('[class*="drawer__overlay"]');l(r).toBeTruthy(),await i.click(r),r!=null&&r.isConnected&&await i.click(r),await p(()=>l(a.queryByRole("dialog",{name:"Close requests"})).toBeNull()),l(t.getByText("Close requests: 1")).toBeVisible(),await i.click(o);const c=await a.findByRole("dialog",{name:"Close requests"}),h=u(c).getByRole("button",{name:"Close drawer"});await i.click(h),h.isConnected&&await i.click(h),await p(()=>l(a.queryByRole("dialog",{name:"Close requests"})).toBeNull()),l(t.getByText("Close requests: 2")).toBeVisible()}},ee=Array.from({length:30},(n,t)=>t+1),I={render:()=>{const n=()=>{const[t,a]=d.useState(!1);return e.jsxs(f,{p:"24",children:[e.jsx(w,{onClick:()=>a(!0),children:"Open long drawer"}),e.jsxs(x,{open:t,onOpenChange:a,"aria-label":"Release notes",children:[e.jsx(B,{title:"Release notes"}),e.jsx(C,{children:ee.map(o=>e.jsxs(b,{children:["Note ",o,". The header and footer stay fixed while this body scrolls."]},o))}),e.jsx(te,{children:e.jsx(w,{onClick:()=>a(!1),children:"Done"})})]})]})};return e.jsx(n,{})}},V={render:()=>{const n=()=>{const[t,a]=d.useState(!1);return e.jsxs(f,{p:"24",children:[e.jsx(w,{onClick:()=>a(!0),children:"Open two-region drawer"}),e.jsxs(x,{open:t,onOpenChange:a,size:"xl","aria-label":"Case detail",children:[e.jsx(B,{title:"Case detail"}),e.jsx(C,{scrollable:!1,p:"0",gap:"0",children:e.jsxs(dt,{flex:"1",minH:"0",children:[e.jsx(J,{flex:"1",minW:"0",overflowY:"auto",alignItems:"stretch",gap:"12",p:"20",children:ee.map(o=>e.jsxs(b,{children:["Thread message ",o]},o))}),e.jsx(J,{w:"xs",flexShrink:"0",overflowY:"auto",alignItems:"stretch",gap:"12",p:"20",borderLeft:"default",bg:"surface.sunken",children:ee.map(o=>e.jsxs(b,{children:["Rail item ",o]},o))})]})})]})]})};return e.jsx(n,{})}},wt=()=>{const n=()=>{const[t,a]=d.useState(!1),[o,s]=d.useState(!1);return e.jsxs(f,{p:"24",children:[e.jsx(w,{onClick:()=>a(!0),children:"Open drawer"}),e.jsxs(x,{open:t,onOpenChange:a,"aria-label":"Case actions",children:[e.jsx(B,{title:"Case actions"}),e.jsx(C,{children:e.jsx(w,{variant:"danger",onClick:()=>s(!0),children:"Delete case"})})]}),e.jsxs(Ot,{open:o,onOpenChange:s,size:"sm","aria-label":"Delete case",children:[e.jsx(St,{title:"Delete case?"}),e.jsx(qt,{children:e.jsx(b,{children:"This cannot be undone."})}),e.jsxs(Nt,{children:[e.jsx(w,{variant:"ghost",onClick:()=>s(!1),children:"Cancel"}),e.jsx(w,{variant:"danger",onClick:()=>s(!1),children:"Delete"})]})]})]})};return e.jsx(n,{})},_={render:wt},E={tags:["!dev","!autodocs"],render:wt,play:async({canvasElement:n})=>{const t=u(n),a=u(n.ownerDocument.body);await i.click(t.getByRole("button",{name:"Open drawer"})),await i.click(await a.findByRole("button",{name:"Delete case"}));const o=await a.findByRole("dialog",{name:"Delete case"}),s=a.getByRole("dialog",{name:"Case actions",hidden:!0}),r=o.getBoundingClientRect(),c=s.getBoundingClientRect(),h=Math.max(r.left,c.left),y=Math.min(r.right,c.right),v=h<y?(h+y)/2:r.left+r.width/2,R=r.top+r.height/2,W=n.ownerDocument.elementFromPoint(v,R);l(o).toContainElement(W),await i.click(u(o).getByRole("button",{name:"Cancel"})),await p(()=>l(a.queryByRole("dialog",{name:"Delete case"})).toBeNull()),l(a.getByRole("dialog",{name:"Case actions"})).toBeVisible()}},aa=n=>{let t=n;for(;t;){const{zIndex:a}=getComputedStyle(t);if(a!=="auto")return Number(a);t=t.parentElement}return 0},F={tags:["!dev","!autodocs"],render:()=>e.jsx(g,{}),play:async({canvasElement:n})=>{const t=u(n),a=u(n.ownerDocument.body);await i.click(t.getByRole("button",{name:"Open drawer"}));const o=await a.findByRole("dialog",{name:"Filters"});await i.click(u(o).getByRole("combobox",{name:"Stage"}));const s=await a.findByRole("listbox");l(aa(s)).toBeGreaterThan(Number(getComputedStyle(o).zIndex)),await i.keyboard("{Escape}"),await p(()=>l(a.queryByRole("listbox")).toBeNull()),l(a.getByRole("dialog",{name:"Filters"})).toBeVisible()}},Q=[{id:42101,title:"Invoice totals do not match the PDF"},{id:42102,title:"Cannot receive a partial purchase order"},{id:42103,title:"Label printer skips every other label"},{id:42104,title:"Work order status stuck on Released"},{id:42105,title:"Customer portal login loops"}],na=n=>{const{index:t,total:a,onMove:o}=n,{onClose:s}=mt();return e.jsxs(B,{children:[e.jsxs(b,{mr:"auto",children:["Case ",t+1," of ",a]}),e.jsxs(ct,{gap:"4",children:[e.jsx(z,{variant:"ghost",iconName:"arrow-left",altText:"Previous case","aria-label":"Previous case",disabled:t===0,onClick:()=>o(-1)}),e.jsx(z,{variant:"ghost",iconName:"arrow-right",altText:"Next case","aria-label":"Next case",disabled:t===a-1,onClick:()=>o(1)}),e.jsx(z,{variant:"ghost",iconName:"x",altText:"Close drawer","aria-label":"Close drawer",onClick:s})]})]})},ht=()=>{const n=()=>{const[t,a]=d.useState(null),o=t===null?null:Q[t];return e.jsxs(f,{p:"24",children:[e.jsx(X,{level:"h2",mb:"12",children:"Cases"}),e.jsx(J,{alignItems:"stretch",gap:"4",maxW:"xl",children:Q.map((s,r)=>e.jsxs(w,{variant:r===t?"primary":"ghost",onClick:()=>a(r),children:[s.id," · ",s.title]},s.id))}),e.jsx(x,{open:t!==null,onOpenChange:s=>{s||a(null)},modal:!1,size:"lg","aria-label":"Case detail",children:o&&t!==null&&e.jsxs(e.Fragment,{children:[e.jsx(na,{index:t,total:Q.length,onMove:s=>a(t+s)}),e.jsxs(C,{children:[e.jsx(X,{level:"h3",children:o.title}),e.jsxs(b,{children:["Case ",o.id]})]})]})})]})};return e.jsx(n,{})},A={name:"Ex: Case list (non-modal)",render:ht},T={tags:["!dev","!autodocs"],render:ht,play:async({canvasElement:n})=>{const t=u(n),a=u(n.ownerDocument.body),o=t.getByRole("button",{name:/42101/});await i.click(o);const s=await a.findByRole("dialog",{name:"Case detail"});l(s).not.toHaveAttribute("aria-modal"),l(u(s).getByText("Case 1 of 5")).toBeVisible(),await p(()=>l(s).toHaveFocus()),await i.click(t.getByRole("button",{name:/42103/})),await p(()=>l(u(s).getByText("Case 3 of 5")).toBeVisible()),l(a.getByRole("dialog",{name:"Case detail"})).toBe(s),l(s).toHaveAttribute("data-state","open"),t.getByRole("button",{name:/42103/}).focus(),await i.keyboard("{Escape}"),l(a.getByRole("dialog",{name:"Case detail"})).toBeVisible(),await i.click(u(s).getByRole("button",{name:"Next case"})),await p(()=>l(u(s).getByText("Case 4 of 5")).toBeVisible()),await i.keyboard("{Escape}"),await p(()=>l(a.queryByRole("tooltip")).toBeNull()),l(a.getByRole("dialog",{name:"Case detail"})).toBeVisible(),await i.keyboard("{Escape}"),await p(()=>l(a.queryByRole("dialog",{name:"Case detail"})).toBeNull())}},oa=()=>{const[n,t]=d.useState(!1),[a,o]=d.useState(0),[s,r]=d.useState("none");return e.jsxs(f,{p:"24",children:[e.jsx(w,{onClick:()=>t(!0),children:"Open drawer"}),e.jsx(b,{children:`Consumer key downs: ${a}`}),e.jsx(b,{children:`Consumer ref: ${s}`}),e.jsx(x,{open:n,onOpenChange:t,modal:!1,"aria-label":"Consumer handlers",ref:c=>{c&&r(c.getAttribute("role")??"unknown")},onKeyDown:()=>o(c=>c+1),children:e.jsx(C,{children:e.jsx(b,{children:"Press Escape to close."})})})]})},O={tags:["!dev","!autodocs"],render:()=>e.jsx(oa,{}),play:async({canvasElement:n})=>{const t=u(n),a=u(n.ownerDocument.body);await i.click(t.getByRole("button",{name:"Open drawer"}));const o=await a.findByRole("dialog",{name:"Consumer handlers"});l(t.getByText("Consumer ref: dialog")).toBeVisible(),await p(()=>l(o).toHaveFocus()),await i.keyboard("{Escape}"),l(t.getByText("Consumer key downs: 1")).toBeVisible(),await p(()=>l(a.queryByRole("dialog",{name:"Consumer handlers"})).toBeNull())}};var ce,de,ue;q.parameters={...q.parameters,docs:{...(ce=q.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: args => <FiltersDrawer modal={args.modal} side={args.side} size={args.size} preventOutsideClose={args.preventOutsideClose} />
}`,...(ue=(de=q.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var pe,me,we,he,ye;D.parameters={...D.parameters,docs:{...(pe=D.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(we=(me=D.parameters)==null?void 0:me.docs)==null?void 0:we.source},description:{story:"Modal keyboard and focus behavior. Kept out of `Default` so the demo does not animate on load.",...(ye=(he=D.parameters)==null?void 0:he.docs)==null?void 0:ye.description}}};var ge,be,fe;N.parameters={...N.parameters,docs:{...(ge=N.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: () => <HStack gap="12">
      <FiltersDrawer side="left" label="Open left" />
      <FiltersDrawer side="right" label="Open right" />
    </HStack>
}`,...(fe=(be=N.parameters)==null?void 0:be.docs)==null?void 0:fe.source}}};var xe,Ce,Be;M.parameters={...M.parameters,docs:{...(xe=M.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: () => <Flex gap="12" flexWrap="wrap">
      <FiltersDrawer size="sm" label="Small" />
      <FiltersDrawer size="md" label="Medium" />
      <FiltersDrawer size="lg" label="Large" />
      <FiltersDrawer size="xl" label="Extra large" />
      <FiltersDrawer size="full" label="Full width" />
    </Flex>
}`,...(Be=(Ce=M.parameters)==null?void 0:Ce.docs)==null?void 0:Be.source}}};var ve,Re,ke;H.parameters={...H.parameters,docs:{...(ve=H.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  render: () => <FiltersDrawer preventOutsideClose />
}`,...(ke=(Re=H.parameters)==null?void 0:Re.docs)==null?void 0:ke.source}}};var De,je,Ee,Fe,Te;j.parameters={...j.parameters,docs:{...(De=j.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
}`,...(Ee=(je=j.parameters)==null?void 0:je.docs)==null?void 0:Ee.source},description:{story:"One scrim click or close-button click calls `onOpenChange(false)` once. The\npanel and scrim stay mounted for the exit animation, so a repeat press\nduring it must not request close again.",...(Te=(Fe=j.parameters)==null?void 0:Fe.docs)==null?void 0:Te.description}}};var Oe,Se,qe;I.parameters={...I.parameters,docs:{...(Oe=I.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
}`,...(qe=(Se=I.parameters)==null?void 0:Se.docs)==null?void 0:qe.source}}};var Ne,Me,He;V.parameters={...V.parameters,docs:{...(Ne=V.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
}`,...(He=(Me=V.parameters)==null?void 0:Me.docs)==null?void 0:He.source}}};var Ie,Ve,_e;_.parameters={..._.parameters,docs:{...(Ie=_.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  render: renderModalFromDrawer
}`,...(_e=(Ve=_.parameters)==null?void 0:Ve.docs)==null?void 0:_e.source}}};var Ae,ze,Le,Pe,Ke;E.parameters={...E.parameters,docs:{...(Ae=E.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...(Le=(ze=E.parameters)==null?void 0:ze.docs)==null?void 0:Le.source},description:{story:"A modal opened from a drawer paints above it.",...(Ke=(Pe=E.parameters)==null?void 0:Pe.docs)==null?void 0:Ke.description}}};var We,Ue,Ye,$e,Ge;F.parameters={...F.parameters,docs:{...(We=F.parameters)==null?void 0:We.docs,source:{originalSource:`{
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
}`,...(Ye=(Ue=F.parameters)==null?void 0:Ue.docs)==null?void 0:Ye.source},description:{story:"A select inside a drawer opens above it, and Escape closes the select first.",...(Ge=($e=F.parameters)==null?void 0:$e.docs)==null?void 0:Ge.description}}};var Ze,Qe,Je;A.parameters={...A.parameters,docs:{...(Ze=A.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
  name: 'Ex: Case list (non-modal)',
  render: renderCaseList
}`,...(Je=(Qe=A.parameters)==null?void 0:Qe.docs)==null?void 0:Je.source}}};var Xe,et,tt,at,nt;T.parameters={...T.parameters,docs:{...(Xe=T.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
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
}`,...(tt=(et=T.parameters)==null?void 0:et.docs)==null?void 0:tt.source},description:{story:"Non-modal behavior on the case list. Kept out of the example so it does not animate on load.",...(nt=(at=T.parameters)==null?void 0:at.docs)==null?void 0:nt.description}}};var ot,st,rt,lt,it;O.parameters={...O.parameters,docs:{...(ot=O.parameters)==null?void 0:ot.docs,source:{originalSource:`{
  // Test-only: hidden from the sidebar and docs; open by URL or a test runner.
  tags: ['!dev', '!autodocs'],
  render: () => <ConsumerHandlersDrawer />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Open drawer'
    }));
    const drawer = await body.findByRole('dialog', {
      name: 'Consumer handlers'
    });
    expect(canvas.getByText('Consumer ref: dialog')).toBeVisible();
    // Initial focus needs the internal panel ref.
    await waitFor(() => expect(drawer).toHaveFocus());
    await userEvent.keyboard('{Escape}');
    expect(canvas.getByText('Consumer key downs: 1')).toBeVisible();
    await waitFor(() => expect(body.queryByRole('dialog', {
      name: 'Consumer handlers'
    })).toBeNull());
  }
}`,...(rt=(st=O.parameters)==null?void 0:st.docs)==null?void 0:rt.source},description:{story:"A consumer `ref` and `onKeyDown` add to the drawer's own wiring instead of\nreplacing it: the panel still takes initial focus and Escape still closes a\nnon-modal drawer.",...(it=(lt=O.parameters)==null?void 0:lt.docs)==null?void 0:it.description}}};const _a=["Default","A11yModalKeyboard","Sides","Sizes","PreventOutsideClose","A11ySingleCloseRequest","LongContent","SeparateScrollRegions","ModalFromDrawer","A11yModalFromDrawerStacking","A11ySelectInsideDrawer","ExCaseList","A11yNonModalCaseList","A11yConsumerRefAndKeyDown"];export{O as A11yConsumerRefAndKeyDown,E as A11yModalFromDrawerStacking,D as A11yModalKeyboard,T as A11yNonModalCaseList,F as A11ySelectInsideDrawer,j as A11ySingleCloseRequest,q as Default,A as ExCaseList,I as LongContent,_ as ModalFromDrawer,H as PreventOutsideClose,V as SeparateScrollRegions,N as Sides,M as Sizes,_a as __namedExportsOrder,Va as default};
