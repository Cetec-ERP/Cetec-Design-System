import{m as kt,e as Dt,f as jt,g as Et,h as Ft,r as d,s as z,Y as Ot,a1 as Tt,a5 as St,ac as qt,j as e,a6 as Nt,a7 as Mt,ab as Ht,a8 as It,B as f,c as P,d as _t,H as ct,F as dt,T as b,V as J}from"./iframe-CXsJ8nBA.js";import{B as w}from"./Button-CZE1N6w8.js";import{F as le}from"./FormField-C8rcDu8o.js";import{H as X}from"./Heading-Cmh0hoMt.js";import{I as L}from"./IconButton-Bkoqj9RS.js";import{M as Vt,a as At,b as Lt,c as zt}from"./ModalWrapper-TLy0HbTg.js";import{S as Pt,a as Z}from"./Select-D-YmJTUP.js";import{T as Kt}from"./TextInput-BueRVBeI.js";import{F as Wt}from"./FloatingLayerContext-n9iBeA6Q.js";import{u as Ut}from"./mq.hook-DrwCf88W.js";import"./preload-helper-CNOPt5Zm.js";import"./Spinner-D-dkI8vG.js";import"./FieldContext-B4fdc69l.js";import"./Label-BFoBrT1R.js";import"./useLocale-viKyk6pi.js";import"./menu-Ctd7Hfpd.js";import"./dsPart-nnoJM9m6.js";import"./Chip-CqBeaXl0.js";import"./ListItem-MlS_-HYv.js";import"./HighlightText-OSrl6fS9.js";import"./Checkbox-B8P2AyWW.js";import"./Divider-B--pdb2s.js";import"./Toggle-MAnIBtMS.js";import"./breakpoints-DU_5_Zhy.js";const ut={side:"right",size:"md",scrollable:!0},Yt=[],$t=[["overlay","drawer__overlay"],["container","drawer__container"],["header","drawer__header"],["title","drawer__title"],["closeButton","drawer__closeButton"],["body","drawer__body"],["footer","drawer__footer"]],Gt=$t.map(([a,t])=>[a,Et(t,ut,Ft(Yt,a))]),Zt=kt((a={})=>Object.fromEntries(Gt.map(([t,n])=>[t,n.recipeFn(a)]))),ie=["side","size","scrollable"],Qt=a=>({...ut,...Dt(a)}),K=Object.assign(Zt,{__recipe__:!1,__name__:"drawer",raw:a=>a,classNameMap:{},variantKeys:ie,variantMap:{side:["right","left"],size:["sm","md","lg","xl","full"],scrollable:["true","false"]},splitVariantProps(a){return jt(a,ie)},getVariantProps:Qt}),pt=d.createContext(null),mt=()=>{const a=d.useContext(pt);if(!a)throw new Error("Drawer components must be used within a <Drawer>");return a},Jt=200,Xt=(a,t)=>{switch(t.type){case"open":return"open";case"startClosing":return a==="closed"?a:"closing";case"finishClosing":return"closed";default:return a}},en=()=>typeof window<"u"&&typeof window.matchMedia=="function"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,x=a=>{const{open:t,onOpenChange:n,modal:s=!0,side:o="right",size:r="md",preventOutsideClose:c=!1,initialFocus:h,returnFocus:y=!0,children:v,id:R,ref:W,onKeyDown:U,onAnimationEnd:Y,...yt}=a,[gt,bt]=z(yt),ne=K({side:o,size:r}),[k,S]=d.useReducer(Xt,t?"open":"closed"),$=d.useRef(null),{refs:ae,context:se}=Ot({open:t,onOpenChange:n,strategy:"fixed",middleware:[]}),ft=Tt(se,{escapeKey:s,outsidePress:s&&!c}),{getFloatingProps:xt}=St([ft]);d.useEffect(()=>{if(t){S({type:"open"});return}S({type:"startClosing"});const m=setTimeout(()=>S({type:"finishClosing"}),en()?0:Jt);return()=>clearTimeout(m)},[t]);const Ct=d.useCallback(m=>{$.current=m,ae.setFloating(m)},[ae]),Bt=qt([Ct,W]),G=d.useCallback(()=>{t&&n(!1)},[t,n]),vt=m=>{var re;U==null||U(m),!(s||m.key!=="Escape"||m.defaultPrevented)&&(m.nativeEvent.isComposing||(re=$.current)!=null&&re.contains(m.target)&&(m.stopPropagation(),G()))},Rt=d.useMemo(()=>({open:k==="open",onClose:G,modal:s}),[s,G,k]);if(k==="closed")return null;const oe=k==="closing"?"closing":"open";return e.jsx(Wt.Provider,{value:"modalFloating",children:e.jsx(pt.Provider,{value:Rt,children:e.jsx(Nt,{children:e.jsxs(Mt,{children:[s&&e.jsx(Ht,{lockScroll:!0,className:ne.overlay,"data-state":oe,"aria-hidden":"true"}),e.jsx(It,{context:se,modal:s,initialFocus:h??(s?0:$),returnFocus:y,closeOnFocusOut:!1,children:e.jsx(f,{..._t("Drawer"),ref:Bt,className:P(ne.container,gt),"data-state":oe,"data-side":o,id:R,role:"dialog","aria-modal":s?"true":void 0,...xt({...bt,onKeyDown:vt,onAnimationEnd:m=>{Y==null||Y(m),k==="closing"&&m.target===m.currentTarget&&S({type:"finishClosing"})}}),children:v})})]})})})})};x.__docgenInfo={description:`Renders a controlled panel that slides in from the edge of the screen.

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
@default true`},children:{required:!0,tsType:{name:"ReactNode"},description:"Drawer content, typically composed from `DrawerHeader`, `DrawerBody`, and `DrawerFooter`."},id:{required:!1,tsType:{name:"string"},description:"Identifier applied to the drawer element. Provide accessible naming with `aria-label` or `aria-labelledby`."}}};const C=a=>{const{children:t,scrollable:n=!0,...s}=a,[o,r]=z(s),c=K({scrollable:n});return e.jsx(f,{className:P(c.body,o),...r,children:t})};C.__docgenInfo={description:"Renders the main content region of a {@link Drawer}. It fills the height\nbetween the header and the footer.\n\n@example\n```tsx\n<DrawerBody>Changes are saved automatically.</DrawerBody>\n```",methods:[],displayName:"DrawerBody",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Content displayed in the drawer's body region."},scrollable:{required:!1,tsType:{name:"boolean"},description:"When `true`, the body scrolls as one region. Set `false` when the content\nmanages its own scroll regions, such as a thread and a side rail that\nscroll separately.\n@default true"}}};const te=a=>{const{children:t,...n}=a,[s,o]=z(n),r=K();return e.jsx(f,{className:P(r.footer,s),...o,children:t})};te.__docgenInfo={description:"Renders the action region of a {@link Drawer}. It stays fixed at the bottom\nwhile the body scrolls.\n\n@example\n```tsx\n<DrawerFooter><Button>Apply</Button></DrawerFooter>\n```",methods:[],displayName:"DrawerFooter",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Content displayed in the footer, typically action buttons."}}};const B=a=>{const{title:t,titleId:n,showCloseButton:s=!0,children:o,...r}=a,[c,h]=z(r),y=K(),{onClose:v}=mt(),R=Ut("sm");return e.jsx(f,{className:P(y.header,c),...h,children:o||e.jsxs(e.Fragment,{children:[t&&e.jsx(X,{id:n,level:"h3",textStyle:{base:"heading.sm",sm:"heading.xs"},className:y.title,children:t}),s&&e.jsx(L,{variant:"ghost",size:R?"md":"lg",onClick:v,altText:"Close drawer","aria-label":"Close drawer",className:y.closeButton,iconName:"x"})]})})};B.__docgenInfo={description:'Renders the header region of a parent {@link Drawer}. It stays fixed while\nthe body scrolls.\n\nUse `title` for the standard heading, or provide `children` for custom\ncontent such as previous and next controls. It must be rendered inside\n`Drawer` because it uses drawer context to close the drawer.\n\n@example\n```tsx\n<DrawerHeader title="Filters" titleId={titleId} />\n```',methods:[],displayName:"DrawerHeader",props:{title:{required:!1,tsType:{name:"string"},description:"Text rendered as the default level-three heading when `children` is omitted."},titleId:{required:!1,tsType:{name:"string"},description:"Identifier applied to the title heading for `aria-labelledby` on the drawer.\nPass the same value to the parent drawer's `aria-labelledby`."},showCloseButton:{required:!1,tsType:{name:"boolean"},description:"Shows the built-in button that calls the parent drawer's `onOpenChange(false)`.\n@default true"},children:{required:!1,tsType:{name:"ReactNode"},description:"Custom header content. When supplied, it replaces both `title` and the\nbuilt-in close button; use `useDrawerContext().onClose` for a custom close\ncontrol."}}};const{expect:l,userEvent:i,waitFor:p,within:u}=__STORYBOOK_MODULE_TEST__,On={title:"Components/Drawer",component:x,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{modal:{control:"boolean",description:"Scrim, focus trap, scroll lock and outside-press close. Set false for a panel beside a list.",table:{defaultValue:{summary:"true"}}},side:{control:"select",options:["right","left"],table:{defaultValue:{summary:"right"}}},size:{control:"select",options:["sm","md","lg","xl","full"],table:{defaultValue:{summary:"md"}}},preventOutsideClose:{control:"boolean",description:"Modal only: an outside press does not close the drawer"}},args:{open:!1,onOpenChange:()=>{},children:null}},g=a=>{const{label:t="Open drawer",...n}=a,[s,o]=d.useState(!1),r=d.useId();return e.jsxs(f,{p:"24",children:[e.jsx(w,{onClick:()=>o(!0),children:t}),e.jsxs(x,{...n,open:s,onOpenChange:o,"aria-labelledby":r,children:[e.jsx(B,{title:"Filters",titleId:r}),e.jsxs(C,{children:[e.jsx(le,{label:"Customer",labelFor:"drawer-customer",children:e.jsx(Kt,{id:"drawer-customer",name:"customer",placeholder:"Any customer"})}),e.jsx(le,{label:"Stage",labelFor:"drawer-stage",children:e.jsxs(Pt,{id:"drawer-stage",name:"stage",placeholder:"Any stage",children:[e.jsx(Z,{value:"new",label:"New"}),e.jsx(Z,{value:"assigned",label:"Assigned"}),e.jsx(Z,{value:"resolved",label:"Resolved"})]})})]}),e.jsxs(te,{children:[e.jsx(w,{variant:"ghost",onClick:()=>o(!1),children:"Cancel"}),e.jsx(w,{variant:"primary",onClick:()=>o(!1),children:"Apply"})]})]})]})},q={render:a=>e.jsx(g,{modal:a.modal,side:a.side,size:a.size,preventOutsideClose:a.preventOutsideClose})},D={tags:["!dev","!autodocs"],render:()=>e.jsx(g,{}),play:async({canvasElement:a})=>{const t=u(a),n=u(a.ownerDocument.body),s=t.getByRole("button",{name:"Open drawer"});await i.click(s);const o=await n.findByRole("dialog",{name:"Filters"});l(o).toHaveAttribute("aria-modal","true"),await p(()=>l(o).toContainElement(document.activeElement)),await i.click(u(o).getByRole("textbox")),await i.keyboard("{Escape}"),await p(()=>l(n.queryByRole("dialog",{name:"Filters"})).toBeNull()),await p(()=>l(s).toHaveFocus()),await i.click(s);const r=await n.findByRole("dialog",{name:"Filters"});await p(()=>l(r).toContainElement(document.activeElement));for(let c=0;c<8;c+=1)await i.tab(),await p(()=>l(r).toContainElement(document.activeElement));await i.click(n.getByRole("button",{name:"Cancel"})),await p(()=>l(n.queryByRole("dialog",{name:"Filters"})).toBeNull())}},N={render:()=>e.jsxs(ct,{gap:"12",children:[e.jsx(g,{side:"left",label:"Open left"}),e.jsx(g,{side:"right",label:"Open right"})]})},M={render:()=>e.jsxs(dt,{gap:"12",flexWrap:"wrap",children:[e.jsx(g,{size:"sm",label:"Small"}),e.jsx(g,{size:"md",label:"Medium"}),e.jsx(g,{size:"lg",label:"Large"}),e.jsx(g,{size:"xl",label:"Extra large"}),e.jsx(g,{size:"full",label:"Full width"})]})},H={render:()=>e.jsx(g,{preventOutsideClose:!0})},tn=()=>{const[a,t]=d.useState(!1),[n,s]=d.useState(0),o=d.useId(),r=c=>{c||s(h=>h+1),t(c)};return e.jsxs(f,{p:"24",children:[e.jsx(w,{onClick:()=>t(!0),children:"Open drawer"}),e.jsx(b,{children:`Close requests: ${n}`}),e.jsxs(x,{open:a,onOpenChange:r,"aria-labelledby":o,children:[e.jsx(B,{title:"Close requests",titleId:o}),e.jsx(C,{children:e.jsx(b,{children:"Click the scrim or the close button."})})]})]})},j={tags:["!dev","!autodocs"],render:()=>e.jsx(tn,{}),play:async({canvasElement:a})=>{var y;const t=u(a),n=u(a.ownerDocument.body),s=t.getByRole("button",{name:"Open drawer"});await i.click(s);const r=(y=(await n.findByRole("dialog",{name:"Close requests"})).parentElement)==null?void 0:y.querySelector('[class*="drawer__overlay"]');l(r).toBeTruthy(),await i.click(r),r!=null&&r.isConnected&&await i.click(r),await p(()=>l(n.queryByRole("dialog",{name:"Close requests"})).toBeNull()),l(t.getByText("Close requests: 1")).toBeVisible(),await i.click(s);const c=await n.findByRole("dialog",{name:"Close requests"}),h=u(c).getByRole("button",{name:"Close drawer"});await i.click(h),h.isConnected&&await i.click(h),await p(()=>l(n.queryByRole("dialog",{name:"Close requests"})).toBeNull()),l(t.getByText("Close requests: 2")).toBeVisible()}},ee=Array.from({length:30},(a,t)=>t+1),I={render:()=>{const a=()=>{const[t,n]=d.useState(!1);return e.jsxs(f,{p:"24",children:[e.jsx(w,{onClick:()=>n(!0),children:"Open long drawer"}),e.jsxs(x,{open:t,onOpenChange:n,"aria-label":"Release notes",children:[e.jsx(B,{title:"Release notes"}),e.jsx(C,{children:ee.map(s=>e.jsxs(b,{children:["Note ",s,". The header and footer stay fixed while this body scrolls."]},s))}),e.jsx(te,{children:e.jsx(w,{onClick:()=>n(!1),children:"Done"})})]})]})};return e.jsx(a,{})}},_={render:()=>{const a=()=>{const[t,n]=d.useState(!1);return e.jsxs(f,{p:"24",children:[e.jsx(w,{onClick:()=>n(!0),children:"Open two-region drawer"}),e.jsxs(x,{open:t,onOpenChange:n,size:"xl","aria-label":"Case detail",children:[e.jsx(B,{title:"Case detail"}),e.jsx(C,{scrollable:!1,p:"0",gap:"0",children:e.jsxs(dt,{flex:"1",minH:"0",children:[e.jsx(J,{flex:"1",minW:"0",overflowY:"auto",alignItems:"stretch",gap:"12",p:"20",children:ee.map(s=>e.jsxs(b,{children:["Thread message ",s]},s))}),e.jsx(J,{w:"xs",flexShrink:"0",overflowY:"auto",alignItems:"stretch",gap:"12",p:"20",borderLeft:"default",bg:"surface.sunken",children:ee.map(s=>e.jsxs(b,{children:["Rail item ",s]},s))})]})})]})]})};return e.jsx(a,{})}},wt=()=>{const a=()=>{const[t,n]=d.useState(!1),[s,o]=d.useState(!1);return e.jsxs(f,{p:"24",children:[e.jsx(w,{onClick:()=>n(!0),children:"Open drawer"}),e.jsxs(x,{open:t,onOpenChange:n,"aria-label":"Case actions",children:[e.jsx(B,{title:"Case actions"}),e.jsx(C,{children:e.jsx(w,{variant:"danger",onClick:()=>o(!0),children:"Delete case"})})]}),e.jsxs(Vt,{open:s,onOpenChange:o,size:"sm","aria-label":"Delete case",children:[e.jsx(At,{title:"Delete case?"}),e.jsx(Lt,{children:e.jsx(b,{children:"This cannot be undone."})}),e.jsxs(zt,{children:[e.jsx(w,{variant:"ghost",onClick:()=>o(!1),children:"Cancel"}),e.jsx(w,{variant:"danger",onClick:()=>o(!1),children:"Delete"})]})]})]})};return e.jsx(a,{})},V={render:wt},E={tags:["!dev","!autodocs"],render:wt,play:async({canvasElement:a})=>{const t=u(a),n=u(a.ownerDocument.body);await i.click(t.getByRole("button",{name:"Open drawer"})),await i.click(await n.findByRole("button",{name:"Delete case"}));const s=await n.findByRole("dialog",{name:"Delete case"}),o=n.getByRole("dialog",{name:"Case actions",hidden:!0}),r=s.getBoundingClientRect(),c=o.getBoundingClientRect(),h=Math.max(r.left,c.left),y=Math.min(r.right,c.right),v=h<y?(h+y)/2:r.left+r.width/2,R=r.top+r.height/2,W=a.ownerDocument.elementFromPoint(v,R);l(s).toContainElement(W),await i.click(u(s).getByRole("button",{name:"Cancel"})),await p(()=>l(n.queryByRole("dialog",{name:"Delete case"})).toBeNull()),l(n.getByRole("dialog",{name:"Case actions"})).toBeVisible()}},nn=a=>{let t=a;for(;t;){const{zIndex:n}=getComputedStyle(t);if(n!=="auto")return Number(n);t=t.parentElement}return 0},F={tags:["!dev","!autodocs"],render:()=>e.jsx(g,{}),play:async({canvasElement:a})=>{const t=u(a),n=u(a.ownerDocument.body);await i.click(t.getByRole("button",{name:"Open drawer"}));const s=await n.findByRole("dialog",{name:"Filters"});await i.click(u(s).getByRole("combobox",{name:"Stage"}));const o=await n.findByRole("listbox");l(nn(o)).toBeGreaterThan(Number(getComputedStyle(s).zIndex)),await i.keyboard("{Escape}"),await p(()=>l(n.queryByRole("listbox")).toBeNull()),l(n.getByRole("dialog",{name:"Filters"})).toBeVisible()}},Q=[{id:42101,title:"Invoice totals do not match the PDF"},{id:42102,title:"Cannot receive a partial purchase order"},{id:42103,title:"Label printer skips every other label"},{id:42104,title:"Work order status stuck on Released"},{id:42105,title:"Customer portal login loops"}],an=a=>{const{index:t,total:n,onMove:s}=a,{onClose:o}=mt();return e.jsxs(B,{children:[e.jsxs(b,{mr:"auto",children:["Case ",t+1," of ",n]}),e.jsxs(ct,{gap:"4",children:[e.jsx(L,{variant:"ghost",iconName:"arrow-left",altText:"Previous case","aria-label":"Previous case",disabled:t===0,onClick:()=>s(-1)}),e.jsx(L,{variant:"ghost",iconName:"arrow-right",altText:"Next case","aria-label":"Next case",disabled:t===n-1,onClick:()=>s(1)}),e.jsx(L,{variant:"ghost",iconName:"x",altText:"Close drawer","aria-label":"Close drawer",onClick:o})]})]})},ht=()=>{const a=()=>{const[t,n]=d.useState(null),s=t===null?null:Q[t];return e.jsxs(f,{p:"24",children:[e.jsx(X,{level:"h2",mb:"12",children:"Cases"}),e.jsx(J,{alignItems:"stretch",gap:"4",maxW:"xl",children:Q.map((o,r)=>e.jsxs(w,{variant:r===t?"primary":"ghost",onClick:()=>n(r),children:[o.id," · ",o.title]},o.id))}),e.jsx(x,{open:t!==null,onOpenChange:o=>{o||n(null)},modal:!1,size:"lg","aria-label":"Case detail",children:s&&t!==null&&e.jsxs(e.Fragment,{children:[e.jsx(an,{index:t,total:Q.length,onMove:o=>n(t+o)}),e.jsxs(C,{children:[e.jsx(X,{level:"h3",children:s.title}),e.jsxs(b,{children:["Case ",s.id]})]})]})})]})};return e.jsx(a,{})},A={name:"Ex: Case list (non-modal)",render:ht},O={tags:["!dev","!autodocs"],render:ht,play:async({canvasElement:a})=>{const t=u(a),n=u(a.ownerDocument.body),s=t.getByRole("button",{name:/42101/});await i.click(s);const o=await n.findByRole("dialog",{name:"Case detail"});l(o).not.toHaveAttribute("aria-modal"),l(u(o).getByText("Case 1 of 5")).toBeVisible(),await p(()=>l(o).toHaveFocus()),await i.click(t.getByRole("button",{name:/42103/})),await p(()=>l(u(o).getByText("Case 3 of 5")).toBeVisible()),l(n.getByRole("dialog",{name:"Case detail"})).toBe(o),l(o).toHaveAttribute("data-state","open"),t.getByRole("button",{name:/42103/}).focus(),await i.keyboard("{Escape}"),l(n.getByRole("dialog",{name:"Case detail"})).toBeVisible(),await i.click(u(o).getByRole("button",{name:"Next case"})),await p(()=>l(u(o).getByText("Case 4 of 5")).toBeVisible()),await i.keyboard("{Escape}"),await p(()=>l(n.queryByRole("tooltip")).toBeNull()),l(n.getByRole("dialog",{name:"Case detail"})).toBeVisible(),await i.keyboard("{Escape}"),await p(()=>l(n.queryByRole("dialog",{name:"Case detail"})).toBeNull())}},sn=()=>{const[a,t]=d.useState(!1),[n,s]=d.useState(0),[o,r]=d.useState("none");return e.jsxs(f,{p:"24",children:[e.jsx(w,{onClick:()=>t(!0),children:"Open drawer"}),e.jsx(b,{children:`Consumer key downs: ${n}`}),e.jsx(b,{children:`Consumer ref: ${o}`}),e.jsx(x,{open:a,onOpenChange:t,modal:!1,"aria-label":"Consumer handlers",ref:c=>{c&&r(c.getAttribute("role")??"unknown")},onKeyDown:()=>s(c=>c+1),children:e.jsx(C,{children:e.jsx(b,{children:"Press Escape to close."})})})]})},T={tags:["!dev","!autodocs"],render:()=>e.jsx(sn,{}),play:async({canvasElement:a})=>{const t=u(a),n=u(a.ownerDocument.body);await i.click(t.getByRole("button",{name:"Open drawer"}));const s=await n.findByRole("dialog",{name:"Consumer handlers"});l(t.getByText("Consumer ref: dialog")).toBeVisible(),await p(()=>l(s).toHaveFocus()),await i.keyboard("{Escape}"),l(t.getByText("Consumer key downs: 1")).toBeVisible(),await p(()=>l(n.queryByRole("dialog",{name:"Consumer handlers"})).toBeNull())}},Tn=["Default","A11yModalKeyboard","Sides","Sizes","PreventOutsideClose","A11ySingleCloseRequest","LongContent","SeparateScrollRegions","ModalFromDrawer","A11yModalFromDrawerStacking","A11ySelectInsideDrawer","ExCaseList","A11yNonModalCaseList","A11yConsumerRefAndKeyDown"];var ce,de,ue;q.parameters={...q.parameters,docs:{...(ce=q.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(ke=(Re=H.parameters)==null?void 0:Re.docs)==null?void 0:ke.source}}};var De,je,Ee,Fe,Oe;j.parameters={...j.parameters,docs:{...(De=j.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
}`,...(Ee=(je=j.parameters)==null?void 0:je.docs)==null?void 0:Ee.source},description:{story:"One scrim click or close-button click calls `onOpenChange(false)` once. The\npanel and scrim stay mounted for the exit animation, so a repeat press\nduring it must not request close again.",...(Oe=(Fe=j.parameters)==null?void 0:Fe.docs)==null?void 0:Oe.description}}};var Te,Se,qe;I.parameters={...I.parameters,docs:{...(Te=I.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(qe=(Se=I.parameters)==null?void 0:Se.docs)==null?void 0:qe.source}}};var Ne,Me,He;_.parameters={..._.parameters,docs:{...(Ne=_.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
}`,...(He=(Me=_.parameters)==null?void 0:Me.docs)==null?void 0:He.source}}};var Ie,_e,Ve;V.parameters={...V.parameters,docs:{...(Ie=V.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  render: renderModalFromDrawer
}`,...(Ve=(_e=V.parameters)==null?void 0:_e.docs)==null?void 0:Ve.source}}};var Ae,Le,ze,Pe,Ke;E.parameters={...E.parameters,docs:{...(Ae=E.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...(ze=(Le=E.parameters)==null?void 0:Le.docs)==null?void 0:ze.source},description:{story:"A modal opened from a drawer paints above it.",...(Ke=(Pe=E.parameters)==null?void 0:Pe.docs)==null?void 0:Ke.description}}};var We,Ue,Ye,$e,Ge;F.parameters={...F.parameters,docs:{...(We=F.parameters)==null?void 0:We.docs,source:{originalSource:`{
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
}`,...(Je=(Qe=A.parameters)==null?void 0:Qe.docs)==null?void 0:Je.source}}};var Xe,et,tt,nt,at;O.parameters={...O.parameters,docs:{...(Xe=O.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
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
}`,...(tt=(et=O.parameters)==null?void 0:et.docs)==null?void 0:tt.source},description:{story:"Non-modal behavior on the case list. Kept out of the example so it does not animate on load.",...(at=(nt=O.parameters)==null?void 0:nt.docs)==null?void 0:at.description}}};var st,ot,rt,lt,it;T.parameters={...T.parameters,docs:{...(st=T.parameters)==null?void 0:st.docs,source:{originalSource:`{
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
}`,...(rt=(ot=T.parameters)==null?void 0:ot.docs)==null?void 0:rt.source},description:{story:"A consumer `ref` and `onKeyDown` add to the drawer's own wiring instead of\nreplacing it: the panel still takes initial focus and Escape still closes a\nnon-modal drawer.",...(it=(lt=T.parameters)==null?void 0:lt.docs)==null?void 0:it.description}}};export{T as A11yConsumerRefAndKeyDown,E as A11yModalFromDrawerStacking,D as A11yModalKeyboard,O as A11yNonModalCaseList,F as A11ySelectInsideDrawer,j as A11ySingleCloseRequest,q as Default,A as ExCaseList,I as LongContent,V as ModalFromDrawer,H as PreventOutsideClose,_ as SeparateScrollRegions,N as Sides,M as Sizes,Tn as __namedExportsOrder,On as default};
