import{m as Et,e as Ot,f as Tt,g as St,h as qt,r as c,s as W,$ as Nt,a6 as Mt,aa as Ht,Z as It,j as e,a2 as _t,a3 as Vt,ac as Lt,a4 as At,B as f,c as U,d as Pt,H as ut,F as pt,T as b,V as J}from"./iframe-DlpMYU-E.js";import{B as w}from"./Button-CztOnNsj.js";import{F as ce}from"./FormField-CREv33Oh.js";import{H as X}from"./Heading-BQHUteoa.js";import{I as K}from"./IconButton-DBaNHB-2.js";import{M as zt,a as Kt,b as Wt}from"./ModalWrapper-Dhx4ISva.js";import{M as Ut}from"./ModalFooter-CQbOcGvd.js";import{S as Yt,a as G}from"./Select-Cvlnx0IF.js";import{T as $t}from"./TextInput-CNfUY_jx.js";import{F as Zt}from"./FloatingLayerContext-C_XohSwU.js";import{u as Gt}from"./useLocale-C2nWY4Sm.js";import{u as Qt}from"./mq.hook-CLGQ4okZ.js";import"./preload-helper-CN24LjFf.js";import"./Spinner-DeNnywBe.js";import"./FieldContext-CH6IhQGq.js";import"./Label-B5gEu8NL.js";import"./menu-CaVtvND3.js";import"./dsPart-nnoJM9m6.js";import"./Chip-C0Ssvo2g.js";import"./ListItem-mz0X94CC.js";import"./HighlightText-mCcyks2F.js";import"./Checkbox-BI_YLyr3.js";import"./Divider-CxobS0Zb.js";import"./Toggle-CbEQwkQZ.js";import"./breakpoints-DU_5_Zhy.js";const mt={side:"right",size:"md",scrollable:!0},Jt=[],Xt=[["overlay","drawer__overlay"],["container","drawer__container"],["header","drawer__header"],["title","drawer__title"],["closeButton","drawer__closeButton"],["body","drawer__body"],["footer","drawer__footer"]],en=Xt.map(([a,t])=>[a,St(t,mt,qt(Jt,a))]),tn=Et((a={})=>Object.fromEntries(en.map(([t,n])=>[t,n.recipeFn(a)]))),de=["side","size","scrollable"],nn=a=>({...mt,...Ot(a)}),Y=Object.assign(tn,{__recipe__:!1,__name__:"drawer",raw:a=>a,classNameMap:{},variantKeys:de,variantMap:{side:["right","left"],size:["sm","md","lg","xl","full"],scrollable:["true","false"]},splitVariantProps(a){return Tt(a,de)},getVariantProps:nn}),wt=c.createContext(null),ht=()=>{const a=c.useContext(wt);if(!a)throw new Error("Drawer components must be used within a <Drawer>");return a},an=200,on=(a,t)=>{switch(t.type){case"open":return"open";case"startClosing":return a==="closed"?a:"closing";case"finishClosing":return"closed";default:return a}},sn=()=>typeof window<"u"&&typeof window.matchMedia=="function"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,x=a=>{const{open:t,onOpenChange:n,modal:o=!0,side:s="right",size:r="md",preventOutsideClose:d=!1,initialFocus:h,returnFocus:y=!0,children:D,id:v,ref:R,onKeyDown:j,onAnimationEnd:k,...bt}=a,[ft,xt]=W(bt),ne=Y({side:s,size:r}),[F,M]=c.useReducer(on,t?"open":"closed"),$=c.useRef(null),{refs:ae,context:oe}=Nt({open:t,onOpenChange:n,strategy:"fixed",middleware:[]}),Ct=Mt(oe,{escapeKey:o,outsidePress:o&&!d}),{getFloatingProps:Bt}=Ht([Ct]);c.useEffect(()=>{if(t){M({type:"open"});return}M({type:"startClosing"});const u=setTimeout(()=>M({type:"finishClosing"}),sn()?0:an);return()=>clearTimeout(u)},[t]);const vt=c.useCallback(u=>{$.current=u,ae.setFloating(u)},[ae]),Rt=It([vt,R]),Z=c.useCallback(()=>{t&&n(!1)},[t,n]),kt=u=>{var ie;j==null||j(u),!(o||u.key!=="Escape"||u.defaultPrevented)&&(u.nativeEvent.isComposing||(ie=$.current)!=null&&ie.contains(u.target)&&(u.stopPropagation(),Z()))},[Dt,se]=c.useState(0),re=c.useCallback(()=>(se(u=>u+1),()=>se(u=>u-1)),[]),jt=c.useMemo(()=>({open:F==="open",onClose:Z,modal:o,registerHeaderCloseButton:re}),[o,Z,F,re]),Ft=!o||Dt>0;if(F==="closed")return null;const le=F==="closing"?"closing":"open";return e.jsx(Zt.Provider,{value:"modalFloating",children:e.jsx(wt.Provider,{value:jt,children:e.jsx(_t,{children:e.jsxs(Vt,{children:[o&&e.jsx(Lt,{lockScroll:!0,className:ne.overlay,"data-state":le,"aria-hidden":"true"}),e.jsx(At,{context:oe,modal:o,initialFocus:h??(Ft?$:0),returnFocus:y,closeOnFocusOut:!1,children:e.jsx(f,{...Pt("Drawer"),ref:Rt,className:U(ne.container,ft),"data-state":le,"data-side":s,id:v,role:"dialog","aria-modal":o?"true":void 0,...Bt({...xt,onKeyDown:kt,onAnimationEnd:u=>{k==null||k(u),F==="closing"&&u.target===u.currentTarget&&M({type:"finishClosing"})}}),children:D})})]})})})})};x.__docgenInfo={description:`Renders a controlled panel that slides in from the edge of the screen.

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
a specific element. Defaults to the drawer panel itself when the drawer
is non-modal or a \`DrawerHeader\` close button is shown, so opening it does
not show the close button's tooltip. Otherwise defaults to the first
tabbable element.`},returnFocus:{required:!1,tsType:{name:"union",raw:"boolean | RefObject<HTMLElement | null>",elements:[{name:"boolean"},{name:"RefObject",elements:[{name:"union",raw:"HTMLElement | null",elements:[{name:"HTMLElement"},{name:"null"}]}],raw:"RefObject<HTMLElement | null>"}]},description:`Returns focus to the previously focused element when the drawer closes, or
to a specific element when given a ref.
@default true`},children:{required:!0,tsType:{name:"ReactNode"},description:"Drawer content, typically composed from `DrawerHeader`, `DrawerBody`, and `DrawerFooter`."},id:{required:!1,tsType:{name:"string"},description:"Identifier applied to the drawer element. Provide accessible naming with `aria-label` or `aria-labelledby`."}}};const C=a=>{const{children:t,scrollable:n=!0,...o}=a,[s,r]=W(o),d=Y({scrollable:n});return e.jsx(f,{className:U(d.body,s),...r,children:t})};C.__docgenInfo={description:"Renders the main content region of a {@link Drawer}. It fills the height\nbetween the header and the footer.\n\n@example\n```tsx\n<DrawerBody>Changes are saved automatically.</DrawerBody>\n```",methods:[],displayName:"DrawerBody",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Content displayed in the drawer's body region."},scrollable:{required:!1,tsType:{name:"boolean"},description:"When `true`, the body scrolls as one region. Set `false` when the content\nmanages its own scroll regions, such as a thread and a side rail that\nscroll separately.\n@default true"}}};const te=a=>{const{children:t,...n}=a,[o,s]=W(n),r=Y();return e.jsx(f,{className:U(r.footer,o),...s,children:t})};te.__docgenInfo={description:"Renders the action region of a {@link Drawer}. It stays fixed at the bottom\nwhile the body scrolls.\n\n@example\n```tsx\n<DrawerFooter><Button>Apply</Button></DrawerFooter>\n```",methods:[],displayName:"DrawerFooter",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Content displayed in the footer, typically action buttons."}}};const B=a=>{const{title:t,titleId:n,showCloseButton:o=!0,children:s,...r}=a,[d,h]=W(r),y=Y(),{onClose:D,registerHeaderCloseButton:v}=ht(),R=!s&&o;c.useLayoutEffect(()=>R?v():void 0,[R,v]);const j=Qt("sm"),{labels:k}=Gt();return e.jsx(f,{className:U(y.header,d),...h,children:s||e.jsxs(e.Fragment,{children:[t&&e.jsx(X,{id:n,level:"h3",textStyle:{base:"heading.sm",sm:"heading.xs"},className:y.title,children:t}),o&&e.jsx(K,{variant:"ghost",size:j?"md":"lg",onClick:D,altText:k.closeDrawer,"aria-label":k.closeDrawer,className:y.closeButton,iconName:"x"})]})})};B.__docgenInfo={description:'Renders the header region of a parent {@link Drawer}. It stays fixed while\nthe body scrolls.\n\nUse `title` for the standard heading, or provide `children` for custom\ncontent such as previous and next controls. It must be rendered inside\n`Drawer` because it uses drawer context to close the drawer.\n\n@example\n```tsx\n<DrawerHeader title="Filters" titleId={titleId} />\n```',methods:[],displayName:"DrawerHeader",props:{title:{required:!1,tsType:{name:"string"},description:"Text rendered as the default level-three heading when `children` is omitted."},titleId:{required:!1,tsType:{name:"string"},description:"Identifier applied to the title heading for `aria-labelledby` on the drawer.\nPass the same value to the parent drawer's `aria-labelledby`."},showCloseButton:{required:!1,tsType:{name:"boolean"},description:"Shows the built-in button that calls the parent drawer's `onOpenChange(false)`.\n@default true"},children:{required:!1,tsType:{name:"ReactNode"},description:"Custom header content. When supplied, it replaces both `title` and the\nbuilt-in close button; use `useDrawerContext().onClose` for a custom close\ncontrol."}}};const{expect:l,userEvent:i,waitFor:m,within:p}=__STORYBOOK_MODULE_TEST__,Hn={title:"Components/Drawer",component:x,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{modal:{control:"boolean",description:"Scrim, focus trap, scroll lock and outside-press close. Set false for a panel beside a list.",table:{defaultValue:{summary:"true"}}},side:{control:"select",options:["right","left"],table:{defaultValue:{summary:"right"}}},size:{control:"select",options:["sm","md","lg","xl","full"],table:{defaultValue:{summary:"md"}}},preventOutsideClose:{control:"boolean",description:"Modal only: an outside press does not close the drawer"}},args:{open:!1,onOpenChange:()=>{},children:null}},g=a=>{const{label:t="Open drawer",...n}=a,[o,s]=c.useState(!1),r=c.useId();return e.jsxs(f,{p:"24",children:[e.jsx(w,{onClick:()=>s(!0),children:t}),e.jsxs(x,{...n,open:o,onOpenChange:s,"aria-labelledby":r,children:[e.jsx(B,{title:"Filters",titleId:r}),e.jsxs(C,{children:[e.jsx(ce,{label:"Customer",labelFor:"drawer-customer",children:e.jsx($t,{id:"drawer-customer",name:"customer",placeholder:"Any customer"})}),e.jsx(ce,{label:"Stage",labelFor:"drawer-stage",children:e.jsxs(Yt,{id:"drawer-stage",name:"stage",placeholder:"Any stage",children:[e.jsx(G,{value:"new",label:"New"}),e.jsx(G,{value:"assigned",label:"Assigned"}),e.jsx(G,{value:"resolved",label:"Resolved"})]})})]}),e.jsxs(te,{children:[e.jsx(w,{variant:"ghost",onClick:()=>s(!1),children:"Cancel"}),e.jsx(w,{variant:"primary",onClick:()=>s(!1),children:"Apply"})]})]})]})},H={render:a=>e.jsx(g,{modal:a.modal,side:a.side,size:a.size,preventOutsideClose:a.preventOutsideClose})},E={tags:["!dev","!autodocs"],render:()=>e.jsx(g,{}),play:async({canvasElement:a})=>{const t=p(a),n=p(a.ownerDocument.body),o=t.getByRole("button",{name:"Open drawer"});o.focus(),await i.keyboard("{Enter}");const s=await n.findByRole("dialog",{name:"Filters"});l(s).toHaveAttribute("aria-modal","true"),await m(()=>l(s).toHaveFocus()),l(n.queryByRole("tooltip")).toBeNull(),await i.keyboard("{Escape}"),await m(()=>l(n.queryByRole("dialog",{name:"Filters"})).toBeNull()),await m(()=>l(o).toHaveFocus()),await i.click(o);const r=await n.findByRole("dialog",{name:"Filters"});await m(()=>l(r).toContainElement(document.activeElement));for(let d=0;d<8;d+=1)await i.tab(),await m(()=>l(r).toContainElement(document.activeElement));await i.click(n.getByRole("button",{name:"Cancel"})),await m(()=>l(n.queryByRole("dialog",{name:"Filters"})).toBeNull())}},I={render:()=>e.jsxs(ut,{gap:"12",children:[e.jsx(g,{side:"left",label:"Open left"}),e.jsx(g,{side:"right",label:"Open right"})]})},_={render:()=>e.jsxs(pt,{gap:"12",flexWrap:"wrap",children:[e.jsx(g,{size:"sm",label:"Small"}),e.jsx(g,{size:"md",label:"Medium"}),e.jsx(g,{size:"lg",label:"Large"}),e.jsx(g,{size:"xl",label:"Extra large"}),e.jsx(g,{size:"full",label:"Full width"})]})},V={render:()=>e.jsx(g,{preventOutsideClose:!0})},rn=()=>{const[a,t]=c.useState(!1),[n,o]=c.useState(0),s=c.useId(),r=d=>{d||o(h=>h+1),t(d)};return e.jsxs(f,{p:"24",children:[e.jsx(w,{onClick:()=>t(!0),children:"Open drawer"}),e.jsx(b,{children:`Close requests: ${n}`}),e.jsxs(x,{open:a,onOpenChange:r,"aria-labelledby":s,children:[e.jsx(B,{title:"Close requests",titleId:s}),e.jsx(C,{children:e.jsx(b,{children:"Click the scrim or the close button."})})]})]})},O={tags:["!dev","!autodocs"],render:()=>e.jsx(rn,{}),play:async({canvasElement:a})=>{var y;const t=p(a),n=p(a.ownerDocument.body),o=t.getByRole("button",{name:"Open drawer"});await i.click(o);const r=(y=(await n.findByRole("dialog",{name:"Close requests"})).parentElement)==null?void 0:y.querySelector('[class*="drawer__overlay"]');l(r).toBeTruthy(),await i.click(r),r!=null&&r.isConnected&&await i.click(r),await m(()=>l(n.queryByRole("dialog",{name:"Close requests"})).toBeNull()),l(t.getByText("Close requests: 1")).toBeVisible(),await i.click(o);const d=await n.findByRole("dialog",{name:"Close requests"}),h=p(d).getByRole("button",{name:"Close drawer"});await i.click(h),h.isConnected&&await i.click(h),await m(()=>l(n.queryByRole("dialog",{name:"Close requests"})).toBeNull()),l(t.getByText("Close requests: 2")).toBeVisible()}},ee=Array.from({length:30},(a,t)=>t+1),L={render:()=>{const a=()=>{const[t,n]=c.useState(!1);return e.jsxs(f,{p:"24",children:[e.jsx(w,{onClick:()=>n(!0),children:"Open long drawer"}),e.jsxs(x,{open:t,onOpenChange:n,"aria-label":"Release notes",children:[e.jsx(B,{title:"Release notes"}),e.jsx(C,{children:ee.map(o=>e.jsxs(b,{children:["Note ",o,". The header and footer stay fixed while this body scrolls."]},o))}),e.jsx(te,{children:e.jsx(w,{onClick:()=>n(!1),children:"Done"})})]})]})};return e.jsx(a,{})}},A={render:()=>{const a=()=>{const[t,n]=c.useState(!1);return e.jsxs(f,{p:"24",children:[e.jsx(w,{onClick:()=>n(!0),children:"Open two-region drawer"}),e.jsxs(x,{open:t,onOpenChange:n,size:"xl","aria-label":"Case detail",children:[e.jsx(B,{title:"Case detail"}),e.jsx(C,{scrollable:!1,p:"0",gap:"0",children:e.jsxs(pt,{flex:"1",minH:"0",children:[e.jsx(J,{flex:"1",minW:"0",overflowY:"auto",alignItems:"stretch",gap:"12",p:"20",children:ee.map(o=>e.jsxs(b,{children:["Thread message ",o]},o))}),e.jsx(J,{w:"xs",flexShrink:"0",overflowY:"auto",alignItems:"stretch",gap:"12",p:"20",borderLeft:"default",bg:"surface.sunken",children:ee.map(o=>e.jsxs(b,{children:["Rail item ",o]},o))})]})})]})]})};return e.jsx(a,{})}},yt=()=>{const a=()=>{const[t,n]=c.useState(!1),[o,s]=c.useState(!1);return e.jsxs(f,{p:"24",children:[e.jsx(w,{onClick:()=>n(!0),children:"Open drawer"}),e.jsxs(x,{open:t,onOpenChange:n,"aria-label":"Case actions",children:[e.jsx(B,{title:"Case actions"}),e.jsx(C,{children:e.jsx(w,{variant:"danger",onClick:()=>s(!0),children:"Delete case"})})]}),e.jsxs(zt,{open:o,onOpenChange:s,size:"sm","aria-label":"Delete case",children:[e.jsx(Kt,{title:"Delete case?"}),e.jsx(Wt,{children:e.jsx(b,{children:"This cannot be undone."})}),e.jsxs(Ut,{children:[e.jsx(w,{variant:"ghost",onClick:()=>s(!1),children:"Cancel"}),e.jsx(w,{variant:"danger",onClick:()=>s(!1),children:"Delete"})]})]})]})};return e.jsx(a,{})},P={render:yt},T={tags:["!dev","!autodocs"],render:yt,play:async({canvasElement:a})=>{const t=p(a),n=p(a.ownerDocument.body);await i.click(t.getByRole("button",{name:"Open drawer"})),await i.click(await n.findByRole("button",{name:"Delete case"}));const o=await n.findByRole("dialog",{name:"Delete case"}),s=n.getByRole("dialog",{name:"Case actions",hidden:!0}),r=o.getBoundingClientRect(),d=s.getBoundingClientRect(),h=Math.max(r.left,d.left),y=Math.min(r.right,d.right),D=h<y?(h+y)/2:r.left+r.width/2,v=r.top+r.height/2,R=a.ownerDocument.elementFromPoint(D,v);l(o).toContainElement(R),await i.click(p(o).getByRole("button",{name:"Cancel"})),await m(()=>l(n.queryByRole("dialog",{name:"Delete case"})).toBeNull()),l(n.getByRole("dialog",{name:"Case actions"})).toBeVisible()}},ln=a=>{let t=a;for(;t;){const{zIndex:n}=getComputedStyle(t);if(n!=="auto")return Number(n);t=t.parentElement}return 0},S={tags:["!dev","!autodocs"],render:()=>e.jsx(g,{}),play:async({canvasElement:a})=>{const t=p(a),n=p(a.ownerDocument.body);await i.click(t.getByRole("button",{name:"Open drawer"}));const o=await n.findByRole("dialog",{name:"Filters"});await i.click(p(o).getByRole("combobox",{name:"Stage"}));const s=await n.findByRole("listbox");l(ln(s)).toBeGreaterThan(Number(getComputedStyle(o).zIndex)),await i.keyboard("{Escape}"),await m(()=>l(n.queryByRole("listbox")).toBeNull()),l(n.getByRole("dialog",{name:"Filters"})).toBeVisible()}},Q=[{id:42101,title:"Invoice totals do not match the PDF"},{id:42102,title:"Cannot receive a partial purchase order"},{id:42103,title:"Label printer skips every other label"},{id:42104,title:"Work order status stuck on Released"},{id:42105,title:"Customer portal login loops"}],cn=a=>{const{index:t,total:n,onMove:o}=a,{onClose:s}=ht();return e.jsxs(B,{children:[e.jsxs(b,{mr:"auto",children:["Case ",t+1," of ",n]}),e.jsxs(ut,{gap:"4",children:[e.jsx(K,{variant:"ghost",iconName:"arrow-left",altText:"Previous case","aria-label":"Previous case",disabled:t===0,onClick:()=>o(-1)}),e.jsx(K,{variant:"ghost",iconName:"arrow-right",altText:"Next case","aria-label":"Next case",disabled:t===n-1,onClick:()=>o(1)}),e.jsx(K,{variant:"ghost",iconName:"x",altText:"Close drawer","aria-label":"Close drawer",onClick:s})]})]})},gt=()=>{const a=()=>{const[t,n]=c.useState(null),o=t===null?null:Q[t];return e.jsxs(f,{p:"24",children:[e.jsx(X,{level:"h2",mb:"12",children:"Cases"}),e.jsx(J,{alignItems:"stretch",gap:"4",maxW:"xl",children:Q.map((s,r)=>e.jsxs(w,{variant:r===t?"primary":"ghost",onClick:()=>n(r),children:[s.id," · ",s.title]},s.id))}),e.jsx(x,{open:t!==null,onOpenChange:s=>{s||n(null)},modal:!1,size:"lg","aria-label":"Case detail",children:o&&t!==null&&e.jsxs(e.Fragment,{children:[e.jsx(cn,{index:t,total:Q.length,onMove:s=>n(t+s)}),e.jsxs(C,{children:[e.jsx(X,{level:"h3",children:o.title}),e.jsxs(b,{children:["Case ",o.id]})]})]})})]})};return e.jsx(a,{})},z={name:"Ex: Case list (non-modal)",render:gt},q={tags:["!dev","!autodocs"],render:gt,play:async({canvasElement:a})=>{const t=p(a),n=p(a.ownerDocument.body),o=t.getByRole("button",{name:/42101/});await i.click(o);const s=await n.findByRole("dialog",{name:"Case detail"});l(s).not.toHaveAttribute("aria-modal"),l(p(s).getByText("Case 1 of 5")).toBeVisible(),await m(()=>l(s).toHaveFocus()),await i.click(t.getByRole("button",{name:/42103/})),await m(()=>l(p(s).getByText("Case 3 of 5")).toBeVisible()),l(n.getByRole("dialog",{name:"Case detail"})).toBe(s),l(s).toHaveAttribute("data-state","open"),t.getByRole("button",{name:/42103/}).focus(),await i.keyboard("{Escape}"),l(n.getByRole("dialog",{name:"Case detail"})).toBeVisible(),await i.click(p(s).getByRole("button",{name:"Next case"})),await m(()=>l(p(s).getByText("Case 4 of 5")).toBeVisible()),await i.keyboard("{Escape}"),await m(()=>l(n.queryByRole("tooltip")).toBeNull()),l(n.getByRole("dialog",{name:"Case detail"})).toBeVisible(),await i.keyboard("{Escape}"),await m(()=>l(n.queryByRole("dialog",{name:"Case detail"})).toBeNull())}},dn=()=>{const[a,t]=c.useState(!1),[n,o]=c.useState(0),[s,r]=c.useState("none");return e.jsxs(f,{p:"24",children:[e.jsx(w,{onClick:()=>t(!0),children:"Open drawer"}),e.jsx(b,{children:`Consumer key downs: ${n}`}),e.jsx(b,{children:`Consumer ref: ${s}`}),e.jsx(x,{open:a,onOpenChange:t,modal:!1,"aria-label":"Consumer handlers",ref:d=>{d&&r(d.getAttribute("role")??"unknown")},onKeyDown:()=>o(d=>d+1),children:e.jsx(C,{children:e.jsx(b,{children:"Press Escape to close."})})})]})},N={tags:["!dev","!autodocs"],render:()=>e.jsx(dn,{}),play:async({canvasElement:a})=>{const t=p(a),n=p(a.ownerDocument.body);await i.click(t.getByRole("button",{name:"Open drawer"}));const o=await n.findByRole("dialog",{name:"Consumer handlers"});l(t.getByText("Consumer ref: dialog")).toBeVisible(),await m(()=>l(o).toHaveFocus()),await i.keyboard("{Escape}"),l(t.getByText("Consumer key downs: 1")).toBeVisible(),await m(()=>l(n.queryByRole("dialog",{name:"Consumer handlers"})).toBeNull())}},In=["Default","A11yModalKeyboard","Sides","Sizes","PreventOutsideClose","A11ySingleCloseRequest","LongContent","SeparateScrollRegions","ModalFromDrawer","A11yModalFromDrawerStacking","A11ySelectInsideDrawer","ExCaseList","A11yNonModalCaseList","A11yConsumerRefAndKeyDown"];var ue,pe,me;H.parameters={...H.parameters,docs:{...(ue=H.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: args => <FiltersDrawer modal={args.modal} side={args.side} size={args.size} preventOutsideClose={args.preventOutsideClose} />
}`,...(me=(pe=H.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var we,he,ye,ge,be;E.parameters={...E.parameters,docs:{...(we=E.parameters)==null?void 0:we.docs,source:{originalSource:`{
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

    // Open by keyboard: the close button's tooltip opens on keyboard focus.
    // The panel takes focus instead, so no tooltip opens and one Escape closes
    // the drawer. Focus returns to the trigger.
    trigger.focus();
    await userEvent.keyboard('{Enter}');
    const drawer = await body.findByRole('dialog', {
      name: 'Filters'
    });
    expect(drawer).toHaveAttribute('aria-modal', 'true');
    await waitFor(() => expect(drawer).toHaveFocus());
    expect(body.queryByRole('tooltip')).toBeNull();
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
}`,...(ye=(he=E.parameters)==null?void 0:he.docs)==null?void 0:ye.source},description:{story:"Modal keyboard and focus behavior. Kept out of `Default` so the demo does not animate on load.",...(be=(ge=E.parameters)==null?void 0:ge.docs)==null?void 0:be.description}}};var fe,xe,Ce;I.parameters={...I.parameters,docs:{...(fe=I.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: () => <HStack gap="12">
      <FiltersDrawer side="left" label="Open left" />
      <FiltersDrawer side="right" label="Open right" />
    </HStack>
}`,...(Ce=(xe=I.parameters)==null?void 0:xe.docs)==null?void 0:Ce.source}}};var Be,ve,Re;_.parameters={..._.parameters,docs:{...(Be=_.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  render: () => <Flex gap="12" flexWrap="wrap">
      <FiltersDrawer size="sm" label="Small" />
      <FiltersDrawer size="md" label="Medium" />
      <FiltersDrawer size="lg" label="Large" />
      <FiltersDrawer size="xl" label="Extra large" />
      <FiltersDrawer size="full" label="Full width" />
    </Flex>
}`,...(Re=(ve=_.parameters)==null?void 0:ve.docs)==null?void 0:Re.source}}};var ke,De,je;V.parameters={...V.parameters,docs:{...(ke=V.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  render: () => <FiltersDrawer preventOutsideClose />
}`,...(je=(De=V.parameters)==null?void 0:De.docs)==null?void 0:je.source}}};var Fe,Ee,Oe,Te,Se;O.parameters={...O.parameters,docs:{...(Fe=O.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(Oe=(Ee=O.parameters)==null?void 0:Ee.docs)==null?void 0:Oe.source},description:{story:"One scrim click or close-button click calls `onOpenChange(false)` once. The\npanel and scrim stay mounted for the exit animation, so a repeat press\nduring it must not request close again.",...(Se=(Te=O.parameters)==null?void 0:Te.docs)==null?void 0:Se.description}}};var qe,Ne,Me;L.parameters={...L.parameters,docs:{...(qe=L.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...(Me=(Ne=L.parameters)==null?void 0:Ne.docs)==null?void 0:Me.source}}};var He,Ie,_e;A.parameters={...A.parameters,docs:{...(He=A.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
}`,...(_e=(Ie=A.parameters)==null?void 0:Ie.docs)==null?void 0:_e.source}}};var Ve,Le,Ae;P.parameters={...P.parameters,docs:{...(Ve=P.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  render: renderModalFromDrawer
}`,...(Ae=(Le=P.parameters)==null?void 0:Le.docs)==null?void 0:Ae.source}}};var Pe,ze,Ke,We,Ue;T.parameters={...T.parameters,docs:{...(Pe=T.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
}`,...(Ke=(ze=T.parameters)==null?void 0:ze.docs)==null?void 0:Ke.source},description:{story:"A modal opened from a drawer paints above it.",...(Ue=(We=T.parameters)==null?void 0:We.docs)==null?void 0:Ue.description}}};var Ye,$e,Ze,Ge,Qe;S.parameters={...S.parameters,docs:{...(Ye=S.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
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
}`,...(Ze=($e=S.parameters)==null?void 0:$e.docs)==null?void 0:Ze.source},description:{story:"A select inside a drawer opens above it, and Escape closes the select first.",...(Qe=(Ge=S.parameters)==null?void 0:Ge.docs)==null?void 0:Qe.description}}};var Je,Xe,et;z.parameters={...z.parameters,docs:{...(Je=z.parameters)==null?void 0:Je.docs,source:{originalSource:`{
  name: 'Ex: Case list (non-modal)',
  render: renderCaseList
}`,...(et=(Xe=z.parameters)==null?void 0:Xe.docs)==null?void 0:et.source}}};var tt,nt,at,ot,st;q.parameters={...q.parameters,docs:{...(tt=q.parameters)==null?void 0:tt.docs,source:{originalSource:`{
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
}`,...(at=(nt=q.parameters)==null?void 0:nt.docs)==null?void 0:at.source},description:{story:"Non-modal behavior on the case list. Kept out of the example so it does not animate on load.",...(st=(ot=q.parameters)==null?void 0:ot.docs)==null?void 0:st.description}}};var rt,lt,it,ct,dt;N.parameters={...N.parameters,docs:{...(rt=N.parameters)==null?void 0:rt.docs,source:{originalSource:`{
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
}`,...(it=(lt=N.parameters)==null?void 0:lt.docs)==null?void 0:it.source},description:{story:"A consumer `ref` and `onKeyDown` add to the drawer's own wiring instead of\nreplacing it: the panel still takes initial focus and Escape still closes a\nnon-modal drawer.",...(dt=(ct=N.parameters)==null?void 0:ct.docs)==null?void 0:dt.description}}};export{N as A11yConsumerRefAndKeyDown,T as A11yModalFromDrawerStacking,E as A11yModalKeyboard,q as A11yNonModalCaseList,S as A11ySelectInsideDrawer,O as A11ySingleCloseRequest,H as Default,z as ExCaseList,L as LongContent,P as ModalFromDrawer,V as PreventOutsideClose,A as SeparateScrollRegions,I as Sides,_ as Sizes,In as __namedExportsOrder,Hn as default};
