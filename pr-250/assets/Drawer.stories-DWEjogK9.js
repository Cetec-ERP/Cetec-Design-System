import{j as e,H as Ke,F as Pe,r as p,B as b,T as y,V as L}from"./iframe-B2I9n4DR.js";import{B as m}from"./Button-vPcDTUX5.js";import{F as I}from"./FormField-TrXaKpQt.js";import{H as _}from"./Heading-CRzBG-CH.js";import{I as H}from"./IconButton-B_XBMZuC.js";import{M as Je,a as Qe,b as Xe}from"./ModalWrapper-BX79ZvBm.js";import{M as et}from"./ModalFooter-BjlkrEg3.js";import{S as tt,a as A}from"./Select-LhLuCW04.js";import{T as nt}from"./TextInput-CLPwUwcE.js";import{D as h,a as f,b as x,c as Ue,u as at}from"./DrawerHeader-BEDRPUN9.js";import"./preload-helper-DJUwLRF1.js";import"./Spinner-CIREaMqW.js";import"./FieldContext-C99g47s0.js";import"./Label-BBrOiETN.js";import"./useLocale-CXEWsqc-.js";import"./mq.hook-B_Ccw-4m.js";import"./breakpoints-DU_5_Zhy.js";import"./FloatingLayerContext-Bbqzmb5t.js";import"./menu-Dy32r0k7.js";import"./dsPart-nnoJM9m6.js";import"./Chip-NqSvrL0I.js";import"./ListItem-BCR5tqg0.js";import"./HighlightText-DWemaKP2.js";import"./Checkbox-CJZGOq1W.js";import"./Divider-B4yOChHc.js";import"./Toggle-BZF5TdGn.js";const{expect:r,userEvent:i,waitFor:d,within:c}=__STORYBOOK_MODULE_TEST__,Nt={title:"Components/Drawer",component:h,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{modal:{control:"boolean",description:"Scrim, focus trap, scroll lock and outside-press close. Set false for a panel beside a list.",table:{defaultValue:{summary:"true"}}},side:{control:"select",options:["right","left"],table:{defaultValue:{summary:"right"}}},size:{control:"select",options:["sm","md","lg","xl","full"],table:{defaultValue:{summary:"md"}}},preventOutsideClose:{control:"boolean",description:"Modal only: an outside press does not close the drawer"}},args:{open:!1,onOpenChange:()=>{},children:null}},w=a=>{const{label:n="Open drawer",...t}=a,[o,s]=p.useState(!1),l=p.useId();return e.jsxs(b,{p:"24",children:[e.jsx(m,{onClick:()=>s(!0),children:n}),e.jsxs(h,{...t,open:o,onOpenChange:s,"aria-labelledby":l,children:[e.jsx(f,{title:"Filters",titleId:l}),e.jsxs(x,{children:[e.jsx(I,{label:"Customer",labelFor:"drawer-customer",children:e.jsx(nt,{id:"drawer-customer",name:"customer",placeholder:"Any customer"})}),e.jsx(I,{label:"Stage",labelFor:"drawer-stage",children:e.jsxs(tt,{id:"drawer-stage",name:"stage",placeholder:"Any stage",children:[e.jsx(A,{value:"new",label:"New"}),e.jsx(A,{value:"assigned",label:"Assigned"}),e.jsx(A,{value:"resolved",label:"Resolved"})]})})]}),e.jsxs(Ue,{children:[e.jsx(m,{variant:"ghost",onClick:()=>s(!1),children:"Cancel"}),e.jsx(m,{variant:"primary",onClick:()=>s(!1),children:"Apply"})]})]})]})},D={render:a=>e.jsx(w,{modal:a.modal,side:a.side,size:a.size,preventOutsideClose:a.preventOutsideClose})},C={tags:["!dev","!autodocs"],render:()=>e.jsx(w,{}),play:async({canvasElement:a})=>{const n=c(a),t=c(a.ownerDocument.body),o=n.getByRole("button",{name:"Open drawer"});o.focus(),await i.keyboard("{Enter}");const s=await t.findByRole("dialog",{name:"Filters"});r(s).toHaveAttribute("aria-modal","true"),await d(()=>r(s).toHaveFocus()),r(t.queryByRole("tooltip")).toBeNull(),await i.keyboard("{Escape}"),await d(()=>r(t.queryByRole("dialog",{name:"Filters"})).toBeNull()),await d(()=>r(o).toHaveFocus()),await i.click(o);const l=await t.findByRole("dialog",{name:"Filters"});await d(()=>r(l).toContainElement(document.activeElement));for(let u=0;u<8;u+=1)await i.tab(),await d(()=>r(l).toContainElement(document.activeElement));await i.click(t.getByRole("button",{name:"Cancel"})),await d(()=>r(t.queryByRole("dialog",{name:"Filters"})).toBeNull())}},F={render:()=>e.jsxs(Ke,{gap:"12",children:[e.jsx(w,{side:"left",label:"Open left"}),e.jsx(w,{side:"right",label:"Open right"})]})},S={render:()=>e.jsxs(Pe,{gap:"12",flexWrap:"wrap",children:[e.jsx(w,{size:"sm",label:"Small"}),e.jsx(w,{size:"md",label:"Medium"}),e.jsx(w,{size:"lg",label:"Large"}),e.jsx(w,{size:"xl",label:"Extra large"}),e.jsx(w,{size:"full",label:"Full width"})]})},O={render:()=>e.jsx(w,{preventOutsideClose:!0})},ot=()=>{const[a,n]=p.useState(!1),[t,o]=p.useState(0),s=p.useId(),l=u=>{u||o(g=>g+1),n(u)};return e.jsxs(b,{p:"24",children:[e.jsx(m,{onClick:()=>n(!0),children:"Open drawer"}),e.jsx(y,{children:`Close requests: ${t}`}),e.jsxs(h,{open:a,onOpenChange:l,"aria-labelledby":s,children:[e.jsx(f,{title:"Close requests",titleId:s}),e.jsx(x,{children:e.jsx(y,{children:"Click the scrim or the close button."})})]})]})},v={tags:["!dev","!autodocs"],render:()=>e.jsx(ot,{}),play:async({canvasElement:a})=>{var B;const n=c(a),t=c(a.ownerDocument.body),o=n.getByRole("button",{name:"Open drawer"});await i.click(o);const l=(B=(await t.findByRole("dialog",{name:"Close requests"})).parentElement)==null?void 0:B.querySelector('[class*="drawer__overlay"]');r(l).toBeTruthy(),await i.click(l),l!=null&&l.isConnected&&await i.click(l),await d(()=>r(t.queryByRole("dialog",{name:"Close requests"})).toBeNull()),r(n.getByText("Close requests: 1")).toBeVisible(),await i.click(o);const u=await t.findByRole("dialog",{name:"Close requests"}),g=c(u).getByRole("button",{name:"Close drawer"});await i.click(g),g.isConnected&&await i.click(g),await d(()=>r(t.queryByRole("dialog",{name:"Close requests"})).toBeNull()),r(n.getByText("Close requests: 2")).toBeVisible()}},z=Array.from({length:30},(a,n)=>n+1),T={render:()=>{const a=()=>{const[n,t]=p.useState(!1);return e.jsxs(b,{p:"24",children:[e.jsx(m,{onClick:()=>t(!0),children:"Open long drawer"}),e.jsxs(h,{open:n,onOpenChange:t,"aria-label":"Release notes",children:[e.jsx(f,{title:"Release notes"}),e.jsx(x,{children:z.map(o=>e.jsxs(y,{children:["Note ",o,". The header and footer stay fixed while this body scrolls."]},o))}),e.jsx(Ue,{children:e.jsx(m,{onClick:()=>t(!1),children:"Done"})})]})]})};return e.jsx(a,{})}},q={render:()=>{const a=()=>{const[n,t]=p.useState(!1);return e.jsxs(b,{p:"24",children:[e.jsx(m,{onClick:()=>t(!0),children:"Open two-region drawer"}),e.jsxs(h,{open:n,onOpenChange:t,size:"xl","aria-label":"Case detail",children:[e.jsx(f,{title:"Case detail"}),e.jsx(x,{scrollable:!1,p:"0",gap:"0",children:e.jsxs(Pe,{flex:"1",minH:"0",children:[e.jsx(L,{flex:"1",minW:"0",overflowY:"auto",alignItems:"stretch",gap:"12",p:"20",children:z.map(o=>e.jsxs(y,{children:["Thread message ",o]},o))}),e.jsx(L,{w:"xs",flexShrink:"0",overflowY:"auto",alignItems:"stretch",gap:"12",p:"20",borderLeft:"default",bg:"surface.sunken",children:z.map(o=>e.jsxs(y,{children:["Rail item ",o]},o))})]})})]})]})};return e.jsx(a,{})}},We=()=>{const a=()=>{const[n,t]=p.useState(!1),[o,s]=p.useState(!1);return e.jsxs(b,{p:"24",children:[e.jsx(m,{onClick:()=>t(!0),children:"Open drawer"}),e.jsxs(h,{open:n,onOpenChange:t,"aria-label":"Case actions",children:[e.jsx(f,{title:"Case actions"}),e.jsx(x,{children:e.jsx(m,{variant:"danger",onClick:()=>s(!0),children:"Delete case"})})]}),e.jsxs(Je,{open:o,onOpenChange:s,size:"sm","aria-label":"Delete case",children:[e.jsx(Qe,{title:"Delete case?"}),e.jsx(Xe,{children:e.jsx(y,{children:"This cannot be undone."})}),e.jsxs(et,{children:[e.jsx(m,{variant:"ghost",onClick:()=>s(!1),children:"Cancel"}),e.jsx(m,{variant:"danger",onClick:()=>s(!1),children:"Delete"})]})]})]})};return e.jsx(a,{})},N={render:We},R={tags:["!dev","!autodocs"],render:We,play:async({canvasElement:a})=>{const n=c(a),t=c(a.ownerDocument.body);await i.click(n.getByRole("button",{name:"Open drawer"})),await i.click(await t.findByRole("button",{name:"Delete case"}));const o=await t.findByRole("dialog",{name:"Delete case"}),s=t.getByRole("dialog",{name:"Case actions",hidden:!0}),l=o.getBoundingClientRect(),u=s.getBoundingClientRect(),g=Math.max(l.left,u.left),B=Math.min(l.right,u.right),$e=g<B?(g+B)/2:l.left+l.width/2,Ge=l.top+l.height/2,Ze=a.ownerDocument.elementFromPoint($e,Ge);r(o).toContainElement(Ze),await i.click(c(o).getByRole("button",{name:"Cancel"})),await d(()=>r(t.queryByRole("dialog",{name:"Delete case"})).toBeNull()),r(t.getByRole("dialog",{name:"Case actions"})).toBeVisible()}},st=a=>{let n=a;for(;n;){const{zIndex:t}=getComputedStyle(n);if(t!=="auto")return Number(t);n=n.parentElement}return 0},k={tags:["!dev","!autodocs"],render:()=>e.jsx(w,{}),play:async({canvasElement:a})=>{const n=c(a),t=c(a.ownerDocument.body);await i.click(n.getByRole("button",{name:"Open drawer"}));const o=await t.findByRole("dialog",{name:"Filters"});await i.click(c(o).getByRole("combobox",{name:"Stage"}));const s=await t.findByRole("listbox");r(st(s)).toBeGreaterThan(Number(getComputedStyle(o).zIndex)),await i.keyboard("{Escape}"),await d(()=>r(t.queryByRole("listbox")).toBeNull()),r(t.getByRole("dialog",{name:"Filters"})).toBeVisible()}},V=[{id:42101,title:"Invoice totals do not match the PDF"},{id:42102,title:"Cannot receive a partial purchase order"},{id:42103,title:"Label printer skips every other label"},{id:42104,title:"Work order status stuck on Released"},{id:42105,title:"Customer portal login loops"}],rt=a=>{const{index:n,total:t,onMove:o}=a,{onClose:s}=at();return e.jsxs(f,{children:[e.jsxs(y,{mr:"auto",children:["Case ",n+1," of ",t]}),e.jsxs(Ke,{gap:"4",children:[e.jsx(H,{variant:"ghost",iconName:"arrow-left",altText:"Previous case","aria-label":"Previous case",disabled:n===0,onClick:()=>o(-1)}),e.jsx(H,{variant:"ghost",iconName:"arrow-right",altText:"Next case","aria-label":"Next case",disabled:n===t-1,onClick:()=>o(1)}),e.jsx(H,{variant:"ghost",iconName:"x",altText:"Close drawer","aria-label":"Close drawer",onClick:s})]})]})},Ye=()=>{const a=()=>{const[n,t]=p.useState(null),o=n===null?null:V[n];return e.jsxs(b,{p:"24",children:[e.jsx(_,{level:"h2",mb:"12",children:"Cases"}),e.jsx(L,{alignItems:"stretch",gap:"4",maxW:"xl",children:V.map((s,l)=>e.jsxs(m,{variant:l===n?"primary":"ghost",onClick:()=>t(l),children:[s.id," · ",s.title]},s.id))}),e.jsx(h,{open:n!==null,onOpenChange:s=>{s||t(null)},modal:!1,size:"lg","aria-label":"Case detail",children:o&&n!==null&&e.jsxs(e.Fragment,{children:[e.jsx(rt,{index:n,total:V.length,onMove:s=>t(n+s)}),e.jsxs(x,{children:[e.jsx(_,{level:"h3",children:o.title}),e.jsxs(y,{children:["Case ",o.id]})]})]})})]})};return e.jsx(a,{})},M={name:"Ex: Case list (non-modal)",render:Ye},j={tags:["!dev","!autodocs"],render:Ye,play:async({canvasElement:a})=>{const n=c(a),t=c(a.ownerDocument.body),o=n.getByRole("button",{name:/42101/});await i.click(o);const s=await t.findByRole("dialog",{name:"Case detail"});r(s).not.toHaveAttribute("aria-modal"),r(c(s).getByText("Case 1 of 5")).toBeVisible(),await d(()=>r(s).toHaveFocus()),await i.click(n.getByRole("button",{name:/42103/})),await d(()=>r(c(s).getByText("Case 3 of 5")).toBeVisible()),r(t.getByRole("dialog",{name:"Case detail"})).toBe(s),r(s).toHaveAttribute("data-state","open"),n.getByRole("button",{name:/42103/}).focus(),await i.keyboard("{Escape}"),r(t.getByRole("dialog",{name:"Case detail"})).toBeVisible(),await i.click(c(s).getByRole("button",{name:"Next case"})),await d(()=>r(c(s).getByText("Case 4 of 5")).toBeVisible()),await i.keyboard("{Escape}"),await d(()=>r(t.queryByRole("tooltip")).toBeNull()),r(t.getByRole("dialog",{name:"Case detail"})).toBeVisible(),await i.keyboard("{Escape}"),await d(()=>r(t.queryByRole("dialog",{name:"Case detail"})).toBeNull())}},lt=()=>{const[a,n]=p.useState(!1),[t,o]=p.useState(0),[s,l]=p.useState("none");return e.jsxs(b,{p:"24",children:[e.jsx(m,{onClick:()=>n(!0),children:"Open drawer"}),e.jsx(y,{children:`Consumer key downs: ${t}`}),e.jsx(y,{children:`Consumer ref: ${s}`}),e.jsx(h,{open:a,onOpenChange:n,modal:!1,"aria-label":"Consumer handlers",ref:u=>{u&&l(u.getAttribute("role")??"unknown")},onKeyDown:()=>o(u=>u+1),children:e.jsx(x,{children:e.jsx(y,{children:"Press Escape to close."})})})]})},E={tags:["!dev","!autodocs"],render:()=>e.jsx(lt,{}),play:async({canvasElement:a})=>{const n=c(a),t=c(a.ownerDocument.body);await i.click(n.getByRole("button",{name:"Open drawer"}));const o=await t.findByRole("dialog",{name:"Consumer handlers"});r(n.getByText("Consumer ref: dialog")).toBeVisible(),await d(()=>r(o).toHaveFocus()),await i.keyboard("{Escape}"),r(n.getByText("Consumer key downs: 1")).toBeVisible(),await d(()=>r(t.queryByRole("dialog",{name:"Consumer handlers"})).toBeNull())}},Mt=["Default","A11yModalKeyboard","Sides","Sizes","PreventOutsideClose","A11ySingleCloseRequest","LongContent","SeparateScrollRegions","ModalFromDrawer","A11yModalFromDrawerStacking","A11ySelectInsideDrawer","ExCaseList","A11yNonModalCaseList","A11yConsumerRefAndKeyDown"];var K,P,U;D.parameters={...D.parameters,docs:{...(K=D.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: args => <FiltersDrawer modal={args.modal} side={args.side} size={args.size} preventOutsideClose={args.preventOutsideClose} />
}`,...(U=(P=D.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};var W,Y,$,G,Z;C.parameters={...C.parameters,docs:{...(W=C.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...($=(Y=C.parameters)==null?void 0:Y.docs)==null?void 0:$.source},description:{story:"Modal keyboard and focus behavior. Kept out of `Default` so the demo does not animate on load.",...(Z=(G=C.parameters)==null?void 0:G.docs)==null?void 0:Z.description}}};var J,Q,X;F.parameters={...F.parameters,docs:{...(J=F.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <HStack gap="12">
      <FiltersDrawer side="left" label="Open left" />
      <FiltersDrawer side="right" label="Open right" />
    </HStack>
}`,...(X=(Q=F.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var ee,te,ne;S.parameters={...S.parameters,docs:{...(ee=S.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <Flex gap="12" flexWrap="wrap">
      <FiltersDrawer size="sm" label="Small" />
      <FiltersDrawer size="md" label="Medium" />
      <FiltersDrawer size="lg" label="Large" />
      <FiltersDrawer size="xl" label="Extra large" />
      <FiltersDrawer size="full" label="Full width" />
    </Flex>
}`,...(ne=(te=S.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var ae,oe,se;O.parameters={...O.parameters,docs:{...(ae=O.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => <FiltersDrawer preventOutsideClose />
}`,...(se=(oe=O.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var re,le,ie,ce,de;v.parameters={...v.parameters,docs:{...(re=v.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(ie=(le=v.parameters)==null?void 0:le.docs)==null?void 0:ie.source},description:{story:"One scrim click or close-button click calls `onOpenChange(false)` once. The\npanel and scrim stay mounted for the exit animation, so a repeat press\nduring it must not request close again.",...(de=(ce=v.parameters)==null?void 0:ce.docs)==null?void 0:de.description}}};var ue,me,pe;T.parameters={...T.parameters,docs:{...(ue=T.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(pe=(me=T.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var we,ye,ge;q.parameters={...q.parameters,docs:{...(we=q.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(ge=(ye=q.parameters)==null?void 0:ye.docs)==null?void 0:ge.source}}};var he,be,xe;N.parameters={...N.parameters,docs:{...(he=N.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: renderModalFromDrawer
}`,...(xe=(be=N.parameters)==null?void 0:be.docs)==null?void 0:xe.source}}};var fe,Be,Ce,ve,Re;R.parameters={...R.parameters,docs:{...(fe=R.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(Ce=(Be=R.parameters)==null?void 0:Be.docs)==null?void 0:Ce.source},description:{story:"A modal opened from a drawer paints above it.",...(Re=(ve=R.parameters)==null?void 0:ve.docs)==null?void 0:Re.description}}};var ke,je,Ee,De,Fe;k.parameters={...k.parameters,docs:{...(ke=k.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(Ee=(je=k.parameters)==null?void 0:je.docs)==null?void 0:Ee.source},description:{story:"A select inside a drawer opens above it, and Escape closes the select first.",...(Fe=(De=k.parameters)==null?void 0:De.docs)==null?void 0:Fe.description}}};var Se,Oe,Te;M.parameters={...M.parameters,docs:{...(Se=M.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  name: 'Ex: Case list (non-modal)',
  render: renderCaseList
}`,...(Te=(Oe=M.parameters)==null?void 0:Oe.docs)==null?void 0:Te.source}}};var qe,Ne,Me,He,Ae;j.parameters={...j.parameters,docs:{...(qe=j.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...(Me=(Ne=j.parameters)==null?void 0:Ne.docs)==null?void 0:Me.source},description:{story:"Non-modal behavior on the case list. Kept out of the example so it does not animate on load.",...(Ae=(He=j.parameters)==null?void 0:He.docs)==null?void 0:Ae.description}}};var Ve,Le,ze,Ie,_e;E.parameters={...E.parameters,docs:{...(Ve=E.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
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
}`,...(ze=(Le=E.parameters)==null?void 0:Le.docs)==null?void 0:ze.source},description:{story:"A consumer `ref` and `onKeyDown` add to the drawer's own wiring instead of\nreplacing it: the panel still takes initial focus and Escape still closes a\nnon-modal drawer.",...(_e=(Ie=E.parameters)==null?void 0:Ie.docs)==null?void 0:_e.description}}};export{E as A11yConsumerRefAndKeyDown,R as A11yModalFromDrawerStacking,C as A11yModalKeyboard,j as A11yNonModalCaseList,k as A11ySelectInsideDrawer,v as A11ySingleCloseRequest,D as Default,M as ExCaseList,T as LongContent,N as ModalFromDrawer,O as PreventOutsideClose,q as SeparateScrollRegions,F as Sides,S as Sizes,Mt as __namedExportsOrder,Nt as default};
