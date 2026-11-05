import{j as e,H as Ke,F as Pe,r as p,B as x,T as y,V as L}from"./iframe-CWph_MJ2.js";import{B as u}from"./Button-CfA6dpvJ.js";import{F as I}from"./FormField-CmXP6uga.js";import{H as _}from"./Heading-Bhen2tw7.js";import{I as H}from"./IconButton-DjpE2A0B.js";import{M as Je,a as Qe,b as Xe}from"./ModalWrapper-UsxfMXIe.js";import{M as et}from"./ModalFooter-CjkJa94B.js";import{S as tt,a as A}from"./Select-Dvt8P65r.js";import{T as nt}from"./TextInput-BMPs3Xoq.js";import{D as h,a as f,b,c as Ue,u as at}from"./DrawerHeader-B1caSJ2g.js";import"./preload-helper-DJUwLRF1.js";import"./Spinner-B1YGWPIm.js";import"./FieldContext-C54CA36G.js";import"./Label-B0SADbdD.js";import"./useLocale-C_zeSZPl.js";import"./mq.hook-Cib7Mm9t.js";import"./breakpoints-DU_5_Zhy.js";import"./FloatingLayerContext-QPZlt-J6.js";import"./menu-DBjV3mQl.js";import"./dsPart-nnoJM9m6.js";import"./Chip-C1BQgYZ0.js";import"./ListItem-rJaSJcq4.js";import"./HighlightText-D71nzUf6.js";import"./Checkbox-Crkf8WOy.js";import"./Divider-B36izIet.js";import"./Toggle-DlWD0XUh.js";const{expect:r,userEvent:l,waitFor:d,within:c}=__STORYBOOK_MODULE_TEST__,Mt={title:"Components/Drawer",component:h,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{modal:{control:"boolean",description:"Scrim, focus trap, scroll lock and outside-press close. Set false for a panel beside a list.",table:{defaultValue:{summary:"true"}}},side:{control:"select",options:["right","left"],table:{defaultValue:{summary:"right"}}},size:{control:"select",options:["sm","md","lg","xl","full"],table:{defaultValue:{summary:"md"}}},preventOutsideClose:{control:"boolean",description:"Modal only: an outside press does not close the drawer"}},args:{open:!1,onOpenChange:()=>{},children:null}},w=a=>{const{label:n="Open drawer",...t}=a,[s,o]=p.useState(!1),i=p.useId();return e.jsxs(x,{p:"24",children:[e.jsx(u,{onClick:()=>o(!0),children:n}),e.jsxs(h,{...t,open:s,onOpenChange:o,"aria-labelledby":i,children:[e.jsx(f,{title:"Filters",titleId:i}),e.jsxs(b,{children:[e.jsx(I,{label:"Customer",labelFor:"drawer-customer",children:e.jsx(nt,{id:"drawer-customer",name:"customer",placeholder:"Any customer"})}),e.jsx(I,{label:"Stage",labelFor:"drawer-stage",children:e.jsxs(tt,{id:"drawer-stage",name:"stage",placeholder:"Any stage",children:[e.jsx(A,{value:"new",label:"New"}),e.jsx(A,{value:"assigned",label:"Assigned"}),e.jsx(A,{value:"resolved",label:"Resolved"})]})})]}),e.jsxs(Ue,{children:[e.jsx(u,{variant:"ghost",onClick:()=>o(!1),children:"Cancel"}),e.jsx(u,{variant:"primary",onClick:()=>o(!1),children:"Apply"})]})]})]})},D={render:a=>e.jsx(w,{modal:a.modal,side:a.side,size:a.size,preventOutsideClose:a.preventOutsideClose})},C={tags:["!dev","!autodocs"],render:()=>e.jsx(w,{}),play:async({canvasElement:a})=>{const n=c(a),t=c(a.ownerDocument.body),s=n.getByRole("button",{name:"Open drawer"});await l.click(s);const o=await t.findByRole("dialog",{name:"Filters"});r(o).toHaveAttribute("aria-modal","true"),await d(()=>r(o).toContainElement(document.activeElement)),await l.click(c(o).getByRole("textbox")),await l.keyboard("{Escape}"),await d(()=>r(t.queryByRole("dialog",{name:"Filters"})).toBeNull()),await d(()=>r(s).toHaveFocus()),await l.click(s);const i=await t.findByRole("dialog",{name:"Filters"});await d(()=>r(i).toContainElement(document.activeElement));for(let m=0;m<8;m+=1)await l.tab(),await d(()=>r(i).toContainElement(document.activeElement));await l.click(t.getByRole("button",{name:"Cancel"})),await d(()=>r(t.queryByRole("dialog",{name:"Filters"})).toBeNull())}},F={render:()=>e.jsxs(Ke,{gap:"12",children:[e.jsx(w,{side:"left",label:"Open left"}),e.jsx(w,{side:"right",label:"Open right"})]})},S={render:()=>e.jsxs(Pe,{gap:"12",flexWrap:"wrap",children:[e.jsx(w,{size:"sm",label:"Small"}),e.jsx(w,{size:"md",label:"Medium"}),e.jsx(w,{size:"lg",label:"Large"}),e.jsx(w,{size:"xl",label:"Extra large"}),e.jsx(w,{size:"full",label:"Full width"})]})},O={render:()=>e.jsx(w,{preventOutsideClose:!0})},ot=()=>{const[a,n]=p.useState(!1),[t,s]=p.useState(0),o=p.useId(),i=m=>{m||s(g=>g+1),n(m)};return e.jsxs(x,{p:"24",children:[e.jsx(u,{onClick:()=>n(!0),children:"Open drawer"}),e.jsx(y,{children:`Close requests: ${t}`}),e.jsxs(h,{open:a,onOpenChange:i,"aria-labelledby":o,children:[e.jsx(f,{title:"Close requests",titleId:o}),e.jsx(b,{children:e.jsx(y,{children:"Click the scrim or the close button."})})]})]})},v={tags:["!dev","!autodocs"],render:()=>e.jsx(ot,{}),play:async({canvasElement:a})=>{var B;const n=c(a),t=c(a.ownerDocument.body),s=n.getByRole("button",{name:"Open drawer"});await l.click(s);const i=(B=(await t.findByRole("dialog",{name:"Close requests"})).parentElement)==null?void 0:B.querySelector('[class*="drawer__overlay"]');r(i).toBeTruthy(),await l.click(i),i!=null&&i.isConnected&&await l.click(i),await d(()=>r(t.queryByRole("dialog",{name:"Close requests"})).toBeNull()),r(n.getByText("Close requests: 1")).toBeVisible(),await l.click(s);const m=await t.findByRole("dialog",{name:"Close requests"}),g=c(m).getByRole("button",{name:"Close drawer"});await l.click(g),g.isConnected&&await l.click(g),await d(()=>r(t.queryByRole("dialog",{name:"Close requests"})).toBeNull()),r(n.getByText("Close requests: 2")).toBeVisible()}},z=Array.from({length:30},(a,n)=>n+1),T={render:()=>{const a=()=>{const[n,t]=p.useState(!1);return e.jsxs(x,{p:"24",children:[e.jsx(u,{onClick:()=>t(!0),children:"Open long drawer"}),e.jsxs(h,{open:n,onOpenChange:t,"aria-label":"Release notes",children:[e.jsx(f,{title:"Release notes"}),e.jsx(b,{children:z.map(s=>e.jsxs(y,{children:["Note ",s,". The header and footer stay fixed while this body scrolls."]},s))}),e.jsx(Ue,{children:e.jsx(u,{onClick:()=>t(!1),children:"Done"})})]})]})};return e.jsx(a,{})}},q={render:()=>{const a=()=>{const[n,t]=p.useState(!1);return e.jsxs(x,{p:"24",children:[e.jsx(u,{onClick:()=>t(!0),children:"Open two-region drawer"}),e.jsxs(h,{open:n,onOpenChange:t,size:"xl","aria-label":"Case detail",children:[e.jsx(f,{title:"Case detail"}),e.jsx(b,{scrollable:!1,p:"0",gap:"0",children:e.jsxs(Pe,{flex:"1",minH:"0",children:[e.jsx(L,{flex:"1",minW:"0",overflowY:"auto",alignItems:"stretch",gap:"12",p:"20",children:z.map(s=>e.jsxs(y,{children:["Thread message ",s]},s))}),e.jsx(L,{w:"xs",flexShrink:"0",overflowY:"auto",alignItems:"stretch",gap:"12",p:"20",borderLeft:"default",bg:"surface.sunken",children:z.map(s=>e.jsxs(y,{children:["Rail item ",s]},s))})]})})]})]})};return e.jsx(a,{})}},We=()=>{const a=()=>{const[n,t]=p.useState(!1),[s,o]=p.useState(!1);return e.jsxs(x,{p:"24",children:[e.jsx(u,{onClick:()=>t(!0),children:"Open drawer"}),e.jsxs(h,{open:n,onOpenChange:t,"aria-label":"Case actions",children:[e.jsx(f,{title:"Case actions"}),e.jsx(b,{children:e.jsx(u,{variant:"danger",onClick:()=>o(!0),children:"Delete case"})})]}),e.jsxs(Je,{open:s,onOpenChange:o,size:"sm","aria-label":"Delete case",children:[e.jsx(Qe,{title:"Delete case?"}),e.jsx(Xe,{children:e.jsx(y,{children:"This cannot be undone."})}),e.jsxs(et,{children:[e.jsx(u,{variant:"ghost",onClick:()=>o(!1),children:"Cancel"}),e.jsx(u,{variant:"danger",onClick:()=>o(!1),children:"Delete"})]})]})]})};return e.jsx(a,{})},M={render:We},R={tags:["!dev","!autodocs"],render:We,play:async({canvasElement:a})=>{const n=c(a),t=c(a.ownerDocument.body);await l.click(n.getByRole("button",{name:"Open drawer"})),await l.click(await t.findByRole("button",{name:"Delete case"}));const s=await t.findByRole("dialog",{name:"Delete case"}),o=t.getByRole("dialog",{name:"Case actions",hidden:!0}),i=s.getBoundingClientRect(),m=o.getBoundingClientRect(),g=Math.max(i.left,m.left),B=Math.min(i.right,m.right),$e=g<B?(g+B)/2:i.left+i.width/2,Ge=i.top+i.height/2,Ze=a.ownerDocument.elementFromPoint($e,Ge);r(s).toContainElement(Ze),await l.click(c(s).getByRole("button",{name:"Cancel"})),await d(()=>r(t.queryByRole("dialog",{name:"Delete case"})).toBeNull()),r(t.getByRole("dialog",{name:"Case actions"})).toBeVisible()}},st=a=>{let n=a;for(;n;){const{zIndex:t}=getComputedStyle(n);if(t!=="auto")return Number(t);n=n.parentElement}return 0},k={tags:["!dev","!autodocs"],render:()=>e.jsx(w,{}),play:async({canvasElement:a})=>{const n=c(a),t=c(a.ownerDocument.body);await l.click(n.getByRole("button",{name:"Open drawer"}));const s=await t.findByRole("dialog",{name:"Filters"});await l.click(c(s).getByRole("combobox",{name:"Stage"}));const o=await t.findByRole("listbox");r(st(o)).toBeGreaterThan(Number(getComputedStyle(s).zIndex)),await l.keyboard("{Escape}"),await d(()=>r(t.queryByRole("listbox")).toBeNull()),r(t.getByRole("dialog",{name:"Filters"})).toBeVisible()}},V=[{id:42101,title:"Invoice totals do not match the PDF"},{id:42102,title:"Cannot receive a partial purchase order"},{id:42103,title:"Label printer skips every other label"},{id:42104,title:"Work order status stuck on Released"},{id:42105,title:"Customer portal login loops"}],rt=a=>{const{index:n,total:t,onMove:s}=a,{onClose:o}=at();return e.jsxs(f,{children:[e.jsxs(y,{mr:"auto",children:["Case ",n+1," of ",t]}),e.jsxs(Ke,{gap:"4",children:[e.jsx(H,{variant:"ghost",iconName:"arrow-left",altText:"Previous case","aria-label":"Previous case",disabled:n===0,onClick:()=>s(-1)}),e.jsx(H,{variant:"ghost",iconName:"arrow-right",altText:"Next case","aria-label":"Next case",disabled:n===t-1,onClick:()=>s(1)}),e.jsx(H,{variant:"ghost",iconName:"x",altText:"Close drawer","aria-label":"Close drawer",onClick:o})]})]})},Ye=()=>{const a=()=>{const[n,t]=p.useState(null),s=n===null?null:V[n];return e.jsxs(x,{p:"24",children:[e.jsx(_,{level:"h2",mb:"12",children:"Cases"}),e.jsx(L,{alignItems:"stretch",gap:"4",maxW:"xl",children:V.map((o,i)=>e.jsxs(u,{variant:i===n?"primary":"ghost",onClick:()=>t(i),children:[o.id," · ",o.title]},o.id))}),e.jsx(h,{open:n!==null,onOpenChange:o=>{o||t(null)},modal:!1,size:"lg","aria-label":"Case detail",children:s&&n!==null&&e.jsxs(e.Fragment,{children:[e.jsx(rt,{index:n,total:V.length,onMove:o=>t(n+o)}),e.jsxs(b,{children:[e.jsx(_,{level:"h3",children:s.title}),e.jsxs(y,{children:["Case ",s.id]})]})]})})]})};return e.jsx(a,{})},N={name:"Ex: Case list (non-modal)",render:Ye},j={tags:["!dev","!autodocs"],render:Ye,play:async({canvasElement:a})=>{const n=c(a),t=c(a.ownerDocument.body),s=n.getByRole("button",{name:/42101/});await l.click(s);const o=await t.findByRole("dialog",{name:"Case detail"});r(o).not.toHaveAttribute("aria-modal"),r(c(o).getByText("Case 1 of 5")).toBeVisible(),await d(()=>r(o).toHaveFocus()),await l.click(n.getByRole("button",{name:/42103/})),await d(()=>r(c(o).getByText("Case 3 of 5")).toBeVisible()),r(t.getByRole("dialog",{name:"Case detail"})).toBe(o),r(o).toHaveAttribute("data-state","open"),n.getByRole("button",{name:/42103/}).focus(),await l.keyboard("{Escape}"),r(t.getByRole("dialog",{name:"Case detail"})).toBeVisible(),await l.click(c(o).getByRole("button",{name:"Next case"})),await d(()=>r(c(o).getByText("Case 4 of 5")).toBeVisible()),await l.keyboard("{Escape}"),await d(()=>r(t.queryByRole("tooltip")).toBeNull()),r(t.getByRole("dialog",{name:"Case detail"})).toBeVisible(),await l.keyboard("{Escape}"),await d(()=>r(t.queryByRole("dialog",{name:"Case detail"})).toBeNull())}},it=()=>{const[a,n]=p.useState(!1),[t,s]=p.useState(0),[o,i]=p.useState("none");return e.jsxs(x,{p:"24",children:[e.jsx(u,{onClick:()=>n(!0),children:"Open drawer"}),e.jsx(y,{children:`Consumer key downs: ${t}`}),e.jsx(y,{children:`Consumer ref: ${o}`}),e.jsx(h,{open:a,onOpenChange:n,modal:!1,"aria-label":"Consumer handlers",ref:m=>{m&&i(m.getAttribute("role")??"unknown")},onKeyDown:()=>s(m=>m+1),children:e.jsx(b,{children:e.jsx(y,{children:"Press Escape to close."})})})]})},E={tags:["!dev","!autodocs"],render:()=>e.jsx(it,{}),play:async({canvasElement:a})=>{const n=c(a),t=c(a.ownerDocument.body);await l.click(n.getByRole("button",{name:"Open drawer"}));const s=await t.findByRole("dialog",{name:"Consumer handlers"});r(n.getByText("Consumer ref: dialog")).toBeVisible(),await d(()=>r(s).toHaveFocus()),await l.keyboard("{Escape}"),r(n.getByText("Consumer key downs: 1")).toBeVisible(),await d(()=>r(t.queryByRole("dialog",{name:"Consumer handlers"})).toBeNull())}},Nt=["Default","A11yModalKeyboard","Sides","Sizes","PreventOutsideClose","A11ySingleCloseRequest","LongContent","SeparateScrollRegions","ModalFromDrawer","A11yModalFromDrawerStacking","A11ySelectInsideDrawer","ExCaseList","A11yNonModalCaseList","A11yConsumerRefAndKeyDown"];var K,P,U;D.parameters={...D.parameters,docs:{...(K=D.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(se=(oe=O.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var re,ie,le,ce,de;v.parameters={...v.parameters,docs:{...(re=v.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(le=(ie=v.parameters)==null?void 0:ie.docs)==null?void 0:le.source},description:{story:"One scrim click or close-button click calls `onOpenChange(false)` once. The\npanel and scrim stay mounted for the exit animation, so a repeat press\nduring it must not request close again.",...(de=(ce=v.parameters)==null?void 0:ce.docs)==null?void 0:de.description}}};var me,ue,pe;T.parameters={...T.parameters,docs:{...(me=T.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(pe=(ue=T.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var we,ye,ge;q.parameters={...q.parameters,docs:{...(we=q.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(ge=(ye=q.parameters)==null?void 0:ye.docs)==null?void 0:ge.source}}};var he,xe,be;M.parameters={...M.parameters,docs:{...(he=M.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: renderModalFromDrawer
}`,...(be=(xe=M.parameters)==null?void 0:xe.docs)==null?void 0:be.source}}};var fe,Be,Ce,ve,Re;R.parameters={...R.parameters,docs:{...(fe=R.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(Ee=(je=k.parameters)==null?void 0:je.docs)==null?void 0:Ee.source},description:{story:"A select inside a drawer opens above it, and Escape closes the select first.",...(Fe=(De=k.parameters)==null?void 0:De.docs)==null?void 0:Fe.description}}};var Se,Oe,Te;N.parameters={...N.parameters,docs:{...(Se=N.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  name: 'Ex: Case list (non-modal)',
  render: renderCaseList
}`,...(Te=(Oe=N.parameters)==null?void 0:Oe.docs)==null?void 0:Te.source}}};var qe,Me,Ne,He,Ae;j.parameters={...j.parameters,docs:{...(qe=j.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...(Ne=(Me=j.parameters)==null?void 0:Me.docs)==null?void 0:Ne.source},description:{story:"Non-modal behavior on the case list. Kept out of the example so it does not animate on load.",...(Ae=(He=j.parameters)==null?void 0:He.docs)==null?void 0:Ae.description}}};var Ve,Le,ze,Ie,_e;E.parameters={...E.parameters,docs:{...(Ve=E.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
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
}`,...(ze=(Le=E.parameters)==null?void 0:Le.docs)==null?void 0:ze.source},description:{story:"A consumer `ref` and `onKeyDown` add to the drawer's own wiring instead of\nreplacing it: the panel still takes initial focus and Escape still closes a\nnon-modal drawer.",...(_e=(Ie=E.parameters)==null?void 0:Ie.docs)==null?void 0:_e.description}}};export{E as A11yConsumerRefAndKeyDown,R as A11yModalFromDrawerStacking,C as A11yModalKeyboard,j as A11yNonModalCaseList,k as A11ySelectInsideDrawer,v as A11ySingleCloseRequest,D as Default,N as ExCaseList,T as LongContent,M as ModalFromDrawer,O as PreventOutsideClose,q as SeparateScrollRegions,F as Sides,S as Sizes,Nt as __namedExportsOrder,Mt as default};
