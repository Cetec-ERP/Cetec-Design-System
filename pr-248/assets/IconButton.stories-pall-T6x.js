import{j as e,W as u}from"./iframe-B6tPLa_9.js";import{I as a}from"./IconButton-DEk__nrC.js";import"./preload-helper-D8YtVqxL.js";import"./Spinner-CbuZdhOF.js";import"./FieldContext-Ab3N6kDM.js";const{expect:t,fn:L,userEvent:p,within:x}=__STORYBOOK_MODULE_TEST__,U={title:"Components/IconButton",component:a,tags:["autodocs"],parameters:{layout:"centered"},args:{iconName:"edit",altText:"Edit item",onClick:L()}},r={},s={render:()=>e.jsxs(u,{gap:"14",children:[e.jsx(a,{iconName:"edit",altText:"Edit",variant:"standard"}),e.jsx(a,{iconName:"download",altText:"Download",variant:"primary"}),e.jsx(a,{iconName:"printer",altText:"Print",variant:"hollow"}),e.jsx(a,{iconName:"info",altText:"Info",variant:"ghost"}),e.jsx(a,{iconName:"send",altText:"Send",variant:"cta"}),e.jsx(a,{iconName:"trash",altText:"Delete",variant:"danger"}),e.jsx(a,{iconName:"alarm",altText:"Alarms",variant:"selected"}),e.jsx(a,{iconName:"barcode",altText:"Barcode",variant:"selectedBold"})]}),parameters:{controls:{disable:!0}}},i={render:()=>e.jsxs(u,{gap:"14",alignItems:"center",children:[e.jsx(a,{iconName:"calendar",altText:"Calendar",size:"sm"}),e.jsx(a,{iconName:"calendar",altText:"Calendar",size:"md"}),e.jsx(a,{iconName:"calendar",altText:"Calendar",size:"lg"}),e.jsx(a,{iconName:"calendar",altText:"Calendar",size:"xl"})]}),parameters:{controls:{disable:!0}}},d={name:"Ex: Loading and Disabled",render:()=>e.jsxs(u,{gap:"14",children:[e.jsx(a,{iconName:"cloud-synced",altText:"Syncing",loading:!0}),e.jsx(a,{iconName:"trash",altText:"Delete",variant:"danger",disabled:!0})]}),parameters:{controls:{disable:!0}}},c={name:"Ex: Disabled With Reason",render:()=>e.jsxs(u,{gap:"14",children:[e.jsx(a,{iconName:"edit",altText:"Edit order",disabledReason:"Closed orders can't be edited."}),e.jsx(a,{iconName:"trash",altText:"Delete order",variant:"danger",disabledReason:"Orders with shipments can't be deleted."})]}),parameters:{controls:{disable:!0}}},l={name:"Test: disabledReason",args:{iconName:"trash",altText:"Delete order",disabledReason:"Orders with shipments can't be deleted."},play:async({args:b,canvasElement:h})=>{const n=x(h).getByRole("button",{name:"Delete order"});await t(n).toHaveAttribute("aria-disabled","true"),await t(n).not.toHaveAttribute("disabled"),await t(n).toHaveAccessibleDescription("Orders with shipments can't be deleted."),n.focus(),await p.keyboard("{Enter}"),await p.keyboard(" "),await t(b.onClick).not.toHaveBeenCalled(),n.blur(),await p.tab(),await t(n).toHaveFocus();const v=await x(document.body).findByRole("tooltip");await t(v).toHaveTextContent("Delete order"),await t(v).toHaveTextContent("Orders with shipments can't be deleted.")}},m={name:"Test: disabled link has no href",tags:["!snapshot"],args:{iconName:"edit",altText:"Edit order",href:"https://example.com/orders/1042/edit",disabledReason:"Closed orders can't be edited."},play:async({canvasElement:b})=>{const o=x(b).getByRole("link",{name:"Edit order"});await t(o).not.toHaveAttribute("href"),await t(o).toHaveAttribute("aria-disabled","true"),await p.tab(),await t(o).toHaveFocus()}},Y=["Default","Variants","Sizes","ExLoadingAndDisabled","ExDisabledWithReason","DisabledReasonBehavior","DisabledReasonLink"];var w,g,T;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:"{}",...(T=(g=r.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};var N,B,E;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(E=(B=s.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var y,D,R;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(R=(D=i.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var I,C,f;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(f=(C=d.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};var j,k,H;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(H=(k=c.parameters)==null?void 0:k.docs)==null?void 0:H.source}}};var S,A,W;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
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

    // Clicks and keyboard activation do nothing.
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
}`,...(W=(A=l.parameters)==null?void 0:A.docs)==null?void 0:W.source}}};var O,z,_;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(_=(z=m.parameters)==null?void 0:z.docs)==null?void 0:_.source}}};export{r as Default,l as DisabledReasonBehavior,m as DisabledReasonLink,c as ExDisabledWithReason,d as ExLoadingAndDisabled,i as Sizes,s as Variants,Y as __namedExportsOrder,U as default};
