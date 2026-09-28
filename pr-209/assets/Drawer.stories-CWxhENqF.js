import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./index-BKyFwriW.js";import{w as c,u as i,e as s,a as p}from"./index-L8OlCEhE.js";import{m as dt,a as ct,b as pt,e as mt,g as ut,s as q,B as g,c as L,d as wt,H as Ze,F as Qe,V as G}from"./dsComponent-BG2jnRr7.js";import{B as h}from"./Button-Cr4bC5CG.js";import{F as ne}from"./FormField-DdJop6CC.js";import{H as Z}from"./Heading-f-AW4uIG.js";import{I as P}from"./IconButton-DXX-zVMP.js";import{M as ht,a as gt,b as yt,c as bt}from"./ModalWrapper-DozFD-YS.js";import{S as ft,a as U}from"./Select-D_bB_5KB.js";import{T as x}from"./Text-IAtRPmZy.js";import{T as xt}from"./TextInput-B3gJX84x.js";import{u as Ct,b as vt,g as Bt,F as Dt,D as Rt,i as Ft,h as jt}from"./Tooltip-bxPM6yCH.js";import{F as kt}from"./FloatingLayerContext-BryH8O9I.js";import{u as Et}from"./mq.hook-D1974m8s.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Icon-CrwLKW7B.js";import"./IconConfig-BuieZFlx.js";import"./Spinner-PLunUSsK.js";import"./FieldContext-D6URyQos.js";import"./Label-Duobk4D3.js";import"./menu-DMiDM6i6.js";import"./dsPart-nnoJM9m6.js";import"./Chip-BLenVk2H.js";import"./ListItem-BTQR-hRu.js";import"./HighlightText-DKF3xkQK.js";import"./Checkbox-BKc0omfg.js";import"./Divider-Dbp7vcYx.js";import"./Toggle-mlz1wkXL.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";import"./breakpoints-DU_5_Zhy.js";const $e={side:"right",size:"md",scrollable:!0},Ot=[],Tt=[["overlay","drawer__overlay"],["container","drawer__container"],["header","drawer__header"],["title","drawer__title"],["closeButton","drawer__closeButton"],["body","drawer__body"],["footer","drawer__footer"]],St=Tt.map(([t,n])=>[t,mt(n,$e,ut(Ot,t))]),Nt=dt((t={})=>Object.fromEntries(St.map(([n,a])=>[n,a.recipeFn(t)]))),re=["side","size","scrollable"],Mt=t=>({...$e,...ct(t)}),A=Object.assign(Nt,{__recipe__:!1,__name__:"drawer",raw:t=>t,classNameMap:{},variantKeys:re,variantMap:{side:["right","left"],size:["sm","md","lg","xl","full"],scrollable:["true","false"]},splitVariantProps(t){return pt(t,re)},getVariantProps:Mt}),Je=d.createContext(null),Xe=()=>{const t=d.useContext(Je);if(!t)throw new Error("Drawer components must be used within a <Drawer>");return t},It=200,Ht=(t,n)=>{switch(n.type){case"open":return"open";case"startClosing":return t==="closed"?t:"closing";case"finishClosing":return"closed";default:return t}},zt=()=>typeof window<"u"&&typeof window.matchMedia=="function"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,b=t=>{const{open:n,onOpenChange:a,modal:r=!0,side:o="right",size:l="md",preventOutsideClose:m=!1,initialFocus:f,returnFocus:y=!0,children:B,id:D,...W}=t,[at,nt]=q(W),J=A({side:o,size:l}),[R,O]=d.useReducer(Ht,n?"open":"closed"),K=d.useRef(null),{refs:X,context:ee}=Ct({open:n,onOpenChange:a,strategy:"fixed",middleware:[]}),rt=vt(ee,{escapeKey:r,outsidePress:r&&!m}),{getFloatingProps:ot}=Bt([rt]);d.useEffect(()=>{if(n){O({type:"open"});return}O({type:"startClosing"});const u=setTimeout(()=>O({type:"finishClosing"}),zt()?0:It);return()=>clearTimeout(u)},[n]);const st=d.useCallback(u=>{K.current=u,X.setFloating(u)},[X]),T=d.useCallback(()=>a(!1),[a]),lt=u=>{var ae;r||u.key!=="Escape"||u.defaultPrevented||(ae=K.current)!=null&&ae.contains(u.target)&&(u.stopPropagation(),T())},it=d.useMemo(()=>({open:R==="open",onClose:T,modal:r}),[r,T,R]);if(R==="closed")return null;const te=R==="closing"?"closing":"open";return e.jsx(kt.Provider,{value:"modalFloating",children:e.jsx(Je.Provider,{value:it,children:e.jsx(Dt,{children:e.jsxs(Rt,{children:[r&&e.jsx(Ft,{lockScroll:!0,className:J.overlay,"data-state":te,onClick:m?void 0:T,"aria-hidden":"true"}),e.jsx(jt,{context:ee,modal:r,initialFocus:f??(r?0:K),returnFocus:y,closeOnFocusOut:!1,children:e.jsx(g,{...wt("Drawer"),ref:st,className:L(J.container,at),"data-state":te,"data-side":o,id:D,role:"dialog","aria-modal":r?"true":void 0,...ot({onKeyDown:lt,onAnimationEnd:u=>{R==="closing"&&u.target===u.currentTarget&&O({type:"finishClosing"})}}),...nt,children:B})})]})})})})};b.__docgenInfo={description:`Renders a controlled panel that slides in from the edge of the screen.

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
@default true`},children:{required:!0,tsType:{name:"ReactNode"},description:"Drawer content, typically composed from `DrawerHeader`, `DrawerBody`, and `DrawerFooter`."},id:{required:!1,tsType:{name:"string"},description:"Identifier applied to the drawer element. Provide accessible naming with `aria-label` or `aria-labelledby`."}}};const C=t=>{const{children:n,scrollable:a=!0,...r}=t,[o,l]=q(r),m=A({scrollable:a});return e.jsx(g,{className:L(m.body,o),...l,children:n})};C.__docgenInfo={description:"Renders the main content region of a {@link Drawer}. It fills the height\nbetween the header and the footer.\n\n@example\n```tsx\n<DrawerBody>Changes are saved automatically.</DrawerBody>\n```",methods:[],displayName:"DrawerBody",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Content displayed in the drawer's body region."},scrollable:{required:!1,tsType:{name:"boolean"},description:"When `true`, the body scrolls as one region. Set `false` when the content\nmanages its own scroll regions, such as a thread and a side rail that\nscroll separately.\n@default true"}}};const $=t=>{const{children:n,...a}=t,[r,o]=q(a),l=A();return e.jsx(g,{className:L(l.footer,r),...o,children:n})};$.__docgenInfo={description:"Renders the action region of a {@link Drawer}. It stays fixed at the bottom\nwhile the body scrolls.\n\n@example\n```tsx\n<DrawerFooter><Button>Apply</Button></DrawerFooter>\n```",methods:[],displayName:"DrawerFooter",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Content displayed in the footer, typically action buttons."}}};const v=t=>{const{title:n,titleId:a,showCloseButton:r=!0,children:o,...l}=t,[m,f]=q(l),y=A(),{onClose:B}=Xe(),D=Et("sm");return e.jsx(g,{className:L(y.header,m),...f,children:o||e.jsxs(e.Fragment,{children:[n&&e.jsx(Z,{id:a,level:"h3",textStyle:{base:"heading.sm",sm:"heading.xs"},className:y.title,children:n}),r&&e.jsx(P,{variant:"ghost",size:D?"md":"lg",onClick:B,altText:"Close drawer","aria-label":"Close drawer",className:y.closeButton,iconName:"x"})]})})};v.__docgenInfo={description:'Renders the header region of a parent {@link Drawer}. It stays fixed while\nthe body scrolls.\n\nUse `title` for the standard heading, or provide `children` for custom\ncontent such as previous and next controls. It must be rendered inside\n`Drawer` because it uses drawer context to close the drawer.\n\n@example\n```tsx\n<DrawerHeader title="Filters" titleId={titleId} />\n```',methods:[],displayName:"DrawerHeader",props:{title:{required:!1,tsType:{name:"string"},description:"Text rendered as the default level-three heading when `children` is omitted."},titleId:{required:!1,tsType:{name:"string"},description:"Identifier applied to the title heading for `aria-labelledby` on the drawer.\nPass the same value to the parent drawer's `aria-labelledby`."},showCloseButton:{required:!1,tsType:{name:"boolean"},description:"Shows the built-in button that calls the parent drawer's `onOpenChange(false)`.\n@default true"},children:{required:!1,tsType:{name:"ReactNode"},description:"Custom header content. When supplied, it replaces both `title` and the\nbuilt-in close button; use `useDrawerContext().onClose` for a custom close\ncontrol."}}};const ba={title:"Components/Drawer",component:b,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{modal:{control:"boolean",description:"Scrim, focus trap, scroll lock and outside-press close. Set false for a panel beside a list.",table:{defaultValue:{summary:"true"}}},side:{control:"select",options:["right","left"],table:{defaultValue:{summary:"right"}}},size:{control:"select",options:["sm","md","lg","xl","full"],table:{defaultValue:{summary:"md"}}},preventOutsideClose:{control:"boolean",description:"Modal only: an outside press does not close the drawer"}},args:{open:!1,onOpenChange:()=>{},children:null}},w=t=>{const{label:n="Open drawer",...a}=t,[r,o]=d.useState(!1),l=d.useId();return e.jsxs(g,{p:"24",children:[e.jsx(h,{onClick:()=>o(!0),children:n}),e.jsxs(b,{...a,open:r,onOpenChange:o,"aria-labelledby":l,children:[e.jsx(v,{title:"Filters",titleId:l}),e.jsxs(C,{children:[e.jsx(ne,{label:"Customer",labelFor:"drawer-customer",children:e.jsx(xt,{id:"drawer-customer",name:"customer",placeholder:"Any customer"})}),e.jsx(ne,{label:"Stage",labelFor:"drawer-stage",children:e.jsxs(ft,{id:"drawer-stage",name:"stage",placeholder:"Any stage",children:[e.jsx(U,{value:"new",label:"New"}),e.jsx(U,{value:"assigned",label:"Assigned"}),e.jsx(U,{value:"resolved",label:"Resolved"})]})})]}),e.jsxs($,{children:[e.jsx(h,{variant:"ghost",onClick:()=>o(!1),children:"Cancel"}),e.jsx(h,{variant:"primary",onClick:()=>o(!1),children:"Apply"})]})]})]})},S={render:t=>e.jsx(w,{modal:t.modal,side:t.side,size:t.size,preventOutsideClose:t.preventOutsideClose})},F={tags:["!dev","!autodocs"],render:()=>e.jsx(w,{}),play:async({canvasElement:t})=>{const n=c(t),a=c(t.ownerDocument.body),r=n.getByRole("button",{name:"Open drawer"});await i.click(r);const o=await a.findByRole("dialog",{name:"Filters"});s(o).toHaveAttribute("aria-modal","true"),await p(()=>s(o).toContainElement(document.activeElement)),await i.click(c(o).getByRole("textbox")),await i.keyboard("{Escape}"),await p(()=>s(a.queryByRole("dialog",{name:"Filters"})).toBeNull()),await p(()=>s(r).toHaveFocus()),await i.click(r);const l=await a.findByRole("dialog",{name:"Filters"});await p(()=>s(l).toContainElement(document.activeElement));for(let m=0;m<8;m+=1)await i.tab(),await p(()=>s(l).toContainElement(document.activeElement));await i.click(a.getByRole("button",{name:"Cancel"})),await p(()=>s(a.queryByRole("dialog",{name:"Filters"})).toBeNull())}},N={render:()=>e.jsxs(Ze,{gap:"12",children:[e.jsx(w,{side:"left",label:"Open left"}),e.jsx(w,{side:"right",label:"Open right"})]})},M={render:()=>e.jsxs(Qe,{gap:"12",flexWrap:"wrap",children:[e.jsx(w,{size:"sm",label:"Small"}),e.jsx(w,{size:"md",label:"Medium"}),e.jsx(w,{size:"lg",label:"Large"}),e.jsx(w,{size:"xl",label:"Extra large"}),e.jsx(w,{size:"full",label:"Full width"})]})},I={render:()=>e.jsx(w,{preventOutsideClose:!0})},Q=Array.from({length:30},(t,n)=>n+1),H={render:()=>{const t=()=>{const[n,a]=d.useState(!1);return e.jsxs(g,{p:"24",children:[e.jsx(h,{onClick:()=>a(!0),children:"Open long drawer"}),e.jsxs(b,{open:n,onOpenChange:a,"aria-label":"Release notes",children:[e.jsx(v,{title:"Release notes"}),e.jsx(C,{children:Q.map(r=>e.jsxs(x,{children:["Note ",r,". The header and footer stay fixed while this body scrolls."]},r))}),e.jsx($,{children:e.jsx(h,{onClick:()=>a(!1),children:"Done"})})]})]})};return e.jsx(t,{})}},z={render:()=>{const t=()=>{const[n,a]=d.useState(!1);return e.jsxs(g,{p:"24",children:[e.jsx(h,{onClick:()=>a(!0),children:"Open two-region drawer"}),e.jsxs(b,{open:n,onOpenChange:a,size:"xl","aria-label":"Case detail",children:[e.jsx(v,{title:"Case detail"}),e.jsx(C,{scrollable:!1,p:"0",gap:"0",children:e.jsxs(Qe,{flex:"1",minH:"0",children:[e.jsx(G,{flex:"1",minW:"0",overflowY:"auto",alignItems:"stretch",gap:"12",p:"20",children:Q.map(r=>e.jsxs(x,{children:["Thread message ",r]},r))}),e.jsx(G,{w:"xs",flexShrink:"0",overflowY:"auto",alignItems:"stretch",gap:"12",p:"20",borderLeft:"default",bg:"surface.sunken",children:Q.map(r=>e.jsxs(x,{children:["Rail item ",r]},r))})]})})]})]})};return e.jsx(t,{})}},et=()=>{const t=()=>{const[n,a]=d.useState(!1),[r,o]=d.useState(!1);return e.jsxs(g,{p:"24",children:[e.jsx(h,{onClick:()=>a(!0),children:"Open drawer"}),e.jsxs(b,{open:n,onOpenChange:a,"aria-label":"Case actions",children:[e.jsx(v,{title:"Case actions"}),e.jsx(C,{children:e.jsx(h,{variant:"danger",onClick:()=>o(!0),children:"Delete case"})})]}),e.jsxs(ht,{open:r,onOpenChange:o,size:"sm","aria-label":"Delete case",children:[e.jsx(gt,{title:"Delete case?"}),e.jsx(yt,{children:e.jsx(x,{children:"This cannot be undone."})}),e.jsxs(bt,{children:[e.jsx(h,{variant:"ghost",onClick:()=>o(!1),children:"Cancel"}),e.jsx(h,{variant:"danger",onClick:()=>o(!1),children:"Delete"})]})]})]})};return e.jsx(t,{})},_={render:et},j={tags:["!dev","!autodocs"],render:et,play:async({canvasElement:t})=>{const n=c(t),a=c(t.ownerDocument.body);await i.click(n.getByRole("button",{name:"Open drawer"})),await i.click(await a.findByRole("button",{name:"Delete case"}));const r=await a.findByRole("dialog",{name:"Delete case"}),o=a.getByRole("dialog",{name:"Case actions",hidden:!0}),l=r.getBoundingClientRect(),m=o.getBoundingClientRect(),f=Math.max(l.left,m.left),y=Math.min(l.right,m.right),B=f<y?(f+y)/2:l.left+l.width/2,D=l.top+l.height/2,W=t.ownerDocument.elementFromPoint(B,D);s(r).toContainElement(W),await i.click(c(r).getByRole("button",{name:"Cancel"})),await p(()=>s(a.queryByRole("dialog",{name:"Delete case"})).toBeNull()),s(a.getByRole("dialog",{name:"Case actions"})).toBeVisible()}},_t=t=>{let n=t;for(;n;){const{zIndex:a}=getComputedStyle(n);if(a!=="auto")return Number(a);n=n.parentElement}return 0},k={tags:["!dev","!autodocs"],render:()=>e.jsx(w,{}),play:async({canvasElement:t})=>{const n=c(t),a=c(t.ownerDocument.body);await i.click(n.getByRole("button",{name:"Open drawer"}));const r=await a.findByRole("dialog",{name:"Filters"});await i.click(c(r).getByRole("combobox",{name:"Stage"}));const o=await a.findByRole("listbox");s(_t(o)).toBeGreaterThan(Number(getComputedStyle(r).zIndex)),await i.keyboard("{Escape}"),await p(()=>s(a.queryByRole("listbox")).toBeNull()),s(a.getByRole("dialog",{name:"Filters"})).toBeVisible()}},Y=[{id:42101,title:"Invoice totals do not match the PDF"},{id:42102,title:"Cannot receive a partial purchase order"},{id:42103,title:"Label printer skips every other label"},{id:42104,title:"Work order status stuck on Released"},{id:42105,title:"Customer portal login loops"}],Vt=t=>{const{index:n,total:a,onMove:r}=t,{onClose:o}=Xe();return e.jsxs(v,{children:[e.jsxs(x,{mr:"auto",children:["Case ",n+1," of ",a]}),e.jsxs(Ze,{gap:"4",children:[e.jsx(P,{variant:"ghost",iconName:"arrow-left",altText:"Previous case","aria-label":"Previous case",disabled:n===0,onClick:()=>r(-1)}),e.jsx(P,{variant:"ghost",iconName:"arrow-right",altText:"Next case","aria-label":"Next case",disabled:n===a-1,onClick:()=>r(1)}),e.jsx(P,{variant:"ghost",iconName:"x",altText:"Close drawer","aria-label":"Close drawer",onClick:o})]})]})},tt=()=>{const t=()=>{const[n,a]=d.useState(null),r=n===null?null:Y[n];return e.jsxs(g,{p:"24",children:[e.jsx(Z,{level:"h2",mb:"12",children:"Cases"}),e.jsx(G,{alignItems:"stretch",gap:"4",maxW:"xl",children:Y.map((o,l)=>e.jsxs(h,{variant:l===n?"primary":"ghost",onClick:()=>a(l),children:[o.id," · ",o.title]},o.id))}),e.jsx(b,{open:n!==null,onOpenChange:o=>{o||a(null)},modal:!1,size:"lg","aria-label":"Case detail",children:r&&n!==null&&e.jsxs(e.Fragment,{children:[e.jsx(Vt,{index:n,total:Y.length,onMove:o=>a(n+o)}),e.jsxs(C,{children:[e.jsx(Z,{level:"h3",children:r.title}),e.jsxs(x,{children:["Case ",r.id]})]})]})})]})};return e.jsx(t,{})},V={name:"Ex: Case list (non-modal)",render:tt},E={tags:["!dev","!autodocs"],render:tt,play:async({canvasElement:t})=>{const n=c(t),a=c(t.ownerDocument.body),r=n.getByRole("button",{name:/42101/});await i.click(r);const o=await a.findByRole("dialog",{name:"Case detail"});s(o).not.toHaveAttribute("aria-modal"),s(c(o).getByText("Case 1 of 5")).toBeVisible(),await p(()=>s(o).toHaveFocus()),await i.click(n.getByRole("button",{name:/42103/})),await p(()=>s(c(o).getByText("Case 3 of 5")).toBeVisible()),s(a.getByRole("dialog",{name:"Case detail"})).toBe(o),s(o).toHaveAttribute("data-state","open"),n.getByRole("button",{name:/42103/}).focus(),await i.keyboard("{Escape}"),s(a.getByRole("dialog",{name:"Case detail"})).toBeVisible(),await i.click(c(o).getByRole("button",{name:"Next case"})),await p(()=>s(c(o).getByText("Case 4 of 5")).toBeVisible()),await i.keyboard("{Escape}"),await p(()=>s(a.queryByRole("tooltip")).toBeNull()),s(a.getByRole("dialog",{name:"Case detail"})).toBeVisible(),await i.keyboard("{Escape}"),await p(()=>s(a.queryByRole("dialog",{name:"Case detail"})).toBeNull())}};var oe,se,le;S.parameters={...S.parameters,docs:{...(oe=S.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: args => <FiltersDrawer modal={args.modal} side={args.side} size={args.size} preventOutsideClose={args.preventOutsideClose} />
}`,...(le=(se=S.parameters)==null?void 0:se.docs)==null?void 0:le.source}}};var ie,de,ce,pe,me;F.parameters={...F.parameters,docs:{...(ie=F.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(ce=(de=F.parameters)==null?void 0:de.docs)==null?void 0:ce.source},description:{story:"Modal keyboard and focus behavior. Kept out of `Default` so the demo does not animate on load.",...(me=(pe=F.parameters)==null?void 0:pe.docs)==null?void 0:me.description}}};var ue,we,he;N.parameters={...N.parameters,docs:{...(ue=N.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => <HStack gap="12">
      <FiltersDrawer side="left" label="Open left" />
      <FiltersDrawer side="right" label="Open right" />
    </HStack>
}`,...(he=(we=N.parameters)==null?void 0:we.docs)==null?void 0:he.source}}};var ge,ye,be;M.parameters={...M.parameters,docs:{...(ge=M.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: () => <Flex gap="12" flexWrap="wrap">
      <FiltersDrawer size="sm" label="Small" />
      <FiltersDrawer size="md" label="Medium" />
      <FiltersDrawer size="lg" label="Large" />
      <FiltersDrawer size="xl" label="Extra large" />
      <FiltersDrawer size="full" label="Full width" />
    </Flex>
}`,...(be=(ye=M.parameters)==null?void 0:ye.docs)==null?void 0:be.source}}};var fe,xe,Ce;I.parameters={...I.parameters,docs:{...(fe=I.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: () => <FiltersDrawer preventOutsideClose />
}`,...(Ce=(xe=I.parameters)==null?void 0:xe.docs)==null?void 0:Ce.source}}};var ve,Be,De;H.parameters={...H.parameters,docs:{...(ve=H.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(De=(Be=H.parameters)==null?void 0:Be.docs)==null?void 0:De.source}}};var Re,Fe,je;z.parameters={...z.parameters,docs:{...(Re=z.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(je=(Fe=z.parameters)==null?void 0:Fe.docs)==null?void 0:je.source}}};var ke,Ee,Oe;_.parameters={..._.parameters,docs:{...(ke=_.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  render: renderModalFromDrawer
}`,...(Oe=(Ee=_.parameters)==null?void 0:Ee.docs)==null?void 0:Oe.source}}};var Te,Se,Ne,Me,Ie;j.parameters={...j.parameters,docs:{...(Te=j.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(Ne=(Se=j.parameters)==null?void 0:Se.docs)==null?void 0:Ne.source},description:{story:"A modal opened from a drawer paints above it.",...(Ie=(Me=j.parameters)==null?void 0:Me.docs)==null?void 0:Ie.description}}};var He,ze,_e,Ve,Pe;k.parameters={...k.parameters,docs:{...(He=k.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
}`,...(_e=(ze=k.parameters)==null?void 0:ze.docs)==null?void 0:_e.source},description:{story:"A select inside a drawer opens above it, and Escape closes the select first.",...(Pe=(Ve=k.parameters)==null?void 0:Ve.docs)==null?void 0:Pe.description}}};var qe,Le,Ae;V.parameters={...V.parameters,docs:{...(qe=V.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  name: 'Ex: Case list (non-modal)',
  render: renderCaseList
}`,...(Ae=(Le=V.parameters)==null?void 0:Le.docs)==null?void 0:Ae.source}}};var We,Ke,Ue,Ye,Ge;E.parameters={...E.parameters,docs:{...(We=E.parameters)==null?void 0:We.docs,source:{originalSource:`{
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
}`,...(Ue=(Ke=E.parameters)==null?void 0:Ke.docs)==null?void 0:Ue.source},description:{story:"Non-modal behavior on the case list. Kept out of the example so it does not animate on load.",...(Ge=(Ye=E.parameters)==null?void 0:Ye.docs)==null?void 0:Ge.description}}};const fa=["Default","A11yModalKeyboard","Sides","Sizes","PreventOutsideClose","LongContent","SeparateScrollRegions","ModalFromDrawer","A11yModalFromDrawerStacking","A11ySelectInsideDrawer","ExCaseList","A11yNonModalCaseList"];export{j as A11yModalFromDrawerStacking,F as A11yModalKeyboard,E as A11yNonModalCaseList,k as A11ySelectInsideDrawer,S as Default,V as ExCaseList,H as LongContent,_ as ModalFromDrawer,I as PreventOutsideClose,z as SeparateScrollRegions,N as Sides,M as Sizes,fa as __namedExportsOrder,ba as default};
