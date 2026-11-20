import{j as e,W as v,B as U}from"./iframe-Dnjkp1ni.js";import{M as V,a as y}from"./SubMenu-CCm6EsgN.js";import{I as n}from"./IconButton-DpjoKS1Y.js";import"./preload-helper-CPI0EWmb.js";import"./HighlightText-D3wLTxnf.js";import"./menu-CcVv7kfd.js";import"./useLocale-Dovh_ny_.js";import"./FloatingLayerContext-JkZ78mKC.js";import"./ListItemGroup-BZ_57xG7.js";import"./Divider-CR5nwV9j.js";import"./Checkbox-M9EIn5Pw.js";import"./FieldContext-BFW9VqL4.js";import"./Toggle-BNzozZfq.js";import"./Spinner-Du2Mvwj6.js";const{expect:a,fn:G,userEvent:o,waitFor:g,within:i}=__STORYBOOK_MODULE_TEST__,le={title:"Components/IconButton",component:n,tags:["autodocs"],parameters:{layout:"centered"},args:{iconName:"edit",altText:"Edit item",onClick:G()}},c={},m={render:()=>e.jsxs(v,{gap:"14",children:[e.jsx(n,{iconName:"edit",altText:"Edit",variant:"standard"}),e.jsx(n,{iconName:"download",altText:"Download",variant:"primary"}),e.jsx(n,{iconName:"printer",altText:"Print",variant:"hollow"}),e.jsx(n,{iconName:"info",altText:"Info",variant:"ghost"}),e.jsx(n,{iconName:"send",altText:"Send",variant:"cta"}),e.jsx(n,{iconName:"trash",altText:"Delete",variant:"danger"}),e.jsx(n,{iconName:"alarm",altText:"Alarms",variant:"selected"}),e.jsx(n,{iconName:"barcode",altText:"Barcode",variant:"selectedBold"})]}),parameters:{controls:{disable:!0}}},u={render:()=>e.jsxs(v,{gap:"14",alignItems:"center",children:[e.jsx(n,{iconName:"calendar",altText:"Calendar",size:"sm"}),e.jsx(n,{iconName:"calendar",altText:"Calendar",size:"md"}),e.jsx(n,{iconName:"calendar",altText:"Calendar",size:"lg"}),e.jsx(n,{iconName:"calendar",altText:"Calendar",size:"xl"})]}),parameters:{controls:{disable:!0}}},p={name:"Ex: Loading and Disabled",render:()=>e.jsxs(v,{gap:"14",children:[e.jsx(n,{iconName:"cloud-synced",altText:"Syncing",loading:!0}),e.jsx(n,{iconName:"trash",altText:"Delete",variant:"danger",disabled:!0})]}),parameters:{controls:{disable:!0}}},b={name:"Ex: Disabled With Reason",render:()=>e.jsxs(v,{gap:"14",children:[e.jsx(n,{iconName:"edit",altText:"Edit order",disabledReason:"Closed orders can't be edited."}),e.jsx(n,{iconName:"trash",altText:"Delete order",variant:"danger",disabledReason:"Orders with shipments can't be deleted."})]}),parameters:{controls:{disable:!0}}},w={name:"Test: disabledReason",args:{iconName:"trash",altText:"Delete order",disabledReason:"Orders with shipments can't be deleted."},play:async({args:s,canvasElement:l})=>{const t=i(l).getByRole("button",{name:"Delete order"});await a(t).toHaveAttribute("aria-disabled","true"),await a(t).not.toHaveAttribute("disabled"),await a(t).toHaveAccessibleDescription("Orders with shipments can't be deleted."),await a(getComputedStyle(t).pointerEvents).toBe("auto"),await a(getComputedStyle(t).cursor).toBe("not-allowed"),await o.hover(t),await a(await i(document.body).findByRole("tooltip")).toHaveTextContent("Orders with shipments can't be deleted."),await o.click(t),await a(s.onClick).not.toHaveBeenCalled(),await o.unhover(t),t.blur(),await g(()=>a(i(document.body).queryByRole("tooltip")).toBeNull()),t.focus(),await o.keyboard("{Enter}"),await o.keyboard(" "),await a(s.onClick).not.toHaveBeenCalled(),t.blur(),await o.tab(),await a(t).toHaveFocus();const d=await i(document.body).findByRole("tooltip");await a(d).toHaveTextContent("Delete order"),await a(d).toHaveTextContent("Orders with shipments can't be deleted.")}},h={name:"Test: disabled link has no href",tags:["!snapshot"],args:{iconName:"edit",altText:"Edit order",href:"https://example.com/orders/1042/edit",disabledReason:"Closed orders can't be edited."},play:async({canvasElement:s})=>{const r=i(s).getByRole("link",{name:"Edit order"});await a(r).not.toHaveAttribute("href"),await a(r).toHaveAttribute("aria-disabled","true"),await o.tab(),await a(r).toHaveFocus()}},x={name:"Test: no tooltip while its menu is open",tags:["!dev","!autodocs","!snapshot"],render:()=>e.jsx(U,{pb:"96",children:e.jsxs(V,{placement:"bottom-end",trigger:e.jsx(n,{iconName:"caret-down",altText:"More actions","aria-haspopup":"menu"}),children:[e.jsx(y,{label:"Choose location…"}),e.jsx(y,{label:"Partial move…"})]})}),play:async({canvasElement:s})=>{const l=i(s),r=i(s.ownerDocument.body),t=l.getByRole("button",{name:"More actions"});await o.hover(t),await a(await r.findByRole("tooltip")).toHaveTextContent("More actions"),await o.click(t),await r.findByRole("menu"),await a(t).toHaveAttribute("aria-expanded","true"),await o.unhover(t),await o.hover(t),await new Promise(d=>setTimeout(d,500)),await a(r.queryByRole("tooltip")).toBeNull(),await o.keyboard("{Escape}"),await g(()=>a(r.queryByRole("menu")).toBeNull()),await o.unhover(t),t.blur(),await g(()=>a(r.queryByRole("tooltip")).toBeNull())}},de=["Default","Variants","Sizes","ExLoadingAndDisabled","ExDisabledWithReason","DisabledReasonBehavior","DisabledReasonLink","MenuTriggerTooltip"];var B,T,N;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:"{}",...(N=(T=c.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};var E,R,C;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <Wrap gap="14">
      <IconButton iconName="edit" altText="Edit" variant="standard" />
      <IconButton iconName="download" altText="Download" variant="primary" />
      <IconButton iconName="printer" altText="Print" variant="hollow" />
      <IconButton iconName="info" altText="Info" variant="ghost" />
      <IconButton iconName="send" altText="Send" variant="cta" />
      <IconButton iconName="trash" altText="Delete" variant="danger" />
      <IconButton iconName="alarm" altText="Alarms" variant="selected" />
      <IconButton iconName="barcode" altText="Barcode" variant="selectedBold" />
    </Wrap>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(C=(R=m.parameters)==null?void 0:R.docs)==null?void 0:C.source}}};var f,D,k;u.parameters={...u.parameters,docs:{...(f=u.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <Wrap gap="14" alignItems="center">
      <IconButton iconName="calendar" altText="Calendar" size="sm" />
      <IconButton iconName="calendar" altText="Calendar" size="md" />
      <IconButton iconName="calendar" altText="Calendar" size="lg" />
      <IconButton iconName="calendar" altText="Calendar" size="xl" />
    </Wrap>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(k=(D=u.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};var H,I,j;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Ex: Loading and Disabled',
  render: () => <Wrap gap="14">
      <IconButton iconName="cloud-synced" altText="Syncing" loading />
      <IconButton iconName="trash" altText="Delete" variant="danger" disabled />
    </Wrap>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(j=(I=p.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};var S,A,M;b.parameters={...b.parameters,docs:{...(S=b.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Ex: Disabled With Reason',
  render: () => <Wrap gap="14">
      <IconButton iconName="edit" altText="Edit order" disabledReason="Closed orders can't be edited." />
      <IconButton iconName="trash" altText="Delete order" variant="danger" disabledReason="Orders with shipments can't be deleted." />
    </Wrap>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(M=(A=b.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};var O,W,z;w.parameters={...w.parameters,docs:{...(O=w.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Test: disabledReason',
  args: {
    iconName: 'trash',
    altText: 'Delete order',
    disabledReason: "Orders with shipments can't be deleted."
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    // altText stays the accessible name; the reason is the description.
    const button = canvas.getByRole('button', {
      name: 'Delete order'
    });
    await expect(button).toHaveAttribute('aria-disabled', 'true');
    await expect(button).not.toHaveAttribute('disabled');
    await expect(button).toHaveAccessibleDescription("Orders with shipments can't be deleted.");

    // The button takes pointer events, as Button does, so it shows the
    // not-allowed cursor and a pointer reaches it. Hover shows the reason,
    // and a click does nothing.
    await expect(getComputedStyle(button).pointerEvents).toBe('auto');
    await expect(getComputedStyle(button).cursor).toBe('not-allowed');
    await userEvent.hover(button);
    await expect(await within(document.body).findByRole('tooltip')).toHaveTextContent("Orders with shipments can't be deleted.");
    await userEvent.click(button);
    await expect(args.onClick).not.toHaveBeenCalled();
    await userEvent.unhover(button);
    button.blur();
    await waitFor(() => expect(within(document.body).queryByRole('tooltip')).toBeNull());

    // Keyboard activation does nothing.
    button.focus();
    await userEvent.keyboard('{Enter}');
    await userEvent.keyboard(' ');
    await expect(args.onClick).not.toHaveBeenCalled();

    // Keyboard focus shows the label as the title, with the reason below.
    button.blur();
    await userEvent.tab();
    await expect(button).toHaveFocus();
    const tooltip = await within(document.body).findByRole('tooltip');
    await expect(tooltip).toHaveTextContent('Delete order');
    await expect(tooltip).toHaveTextContent("Orders with shipments can't be deleted.");
  }
}`,...(z=(W=w.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var q,F,L;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'Test: disabled link has no href',
  // Behavior test only. It looks the same as "Test: disabledReason".
  tags: ['!snapshot'],
  args: {
    iconName: 'edit',
    altText: 'Edit order',
    href: 'https://example.com/orders/1042/edit',
    disabledReason: "Closed orders can't be edited."
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    // No live href, so the context menu can't open it in a new tab.
    const link = canvas.getByRole('link', {
      name: 'Edit order'
    });
    await expect(link).not.toHaveAttribute('href');
    await expect(link).toHaveAttribute('aria-disabled', 'true');
    await userEvent.tab();
    await expect(link).toHaveFocus();
  }
}`,...(L=(F=h.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var _,P,K;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Test: no tooltip while its menu is open',
  // Test-only: hidden from the sidebar and docs; open by URL or a test runner.
  // Behavior test only. The menu is closed at the end, so it looks the same
  // as Default.
  tags: ['!dev', '!autodocs', '!snapshot'],
  render: () => <Box pb="96">
      <Menu placement="bottom-end" trigger={<IconButton iconName="caret-down" altText="More actions" aria-haspopup="menu" />}>
        <MenuItem label="Choose location…" />
        <MenuItem label="Partial move…" />
      </Menu>
    </Box>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    const trigger = canvas.getByRole('button', {
      name: 'More actions'
    });

    // Hover shows the label.
    await userEvent.hover(trigger);
    await expect(await body.findByRole('tooltip')).toHaveTextContent('More actions');

    // While the menu is open, the label stays hidden, even when the pointer
    // comes back onto the trigger, so it does not cover the menu. (Browsers
    // differ on whether the click itself closes it.)
    await userEvent.click(trigger);
    await body.findByRole('menu');
    await expect(trigger).toHaveAttribute('aria-expanded', 'true');
    await userEvent.unhover(trigger);
    await userEvent.hover(trigger);
    // Give a tooltip time to open, so its absence means something.
    await new Promise(resolve => setTimeout(resolve, 500));
    await expect(body.queryByRole('tooltip')).toBeNull();
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body.queryByRole('menu')).toBeNull());
    await userEvent.unhover(trigger);
    trigger.blur();
    await waitFor(() => expect(body.queryByRole('tooltip')).toBeNull());
  }
}`,...(K=(P=x.parameters)==null?void 0:P.docs)==null?void 0:K.source}}};export{c as Default,w as DisabledReasonBehavior,h as DisabledReasonLink,b as ExDisabledWithReason,p as ExLoadingAndDisabled,x as MenuTriggerTooltip,u as Sizes,m as Variants,de as __namedExportsOrder,le as default};
