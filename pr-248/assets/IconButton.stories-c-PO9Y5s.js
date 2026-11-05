import{j as e,W as l}from"./iframe-C1CYHGUC.js";import{I as a}from"./IconButton-cp8-aoWx.js";import"./preload-helper-D8YtVqxL.js";import"./Spinner-fChgDlWh.js";import"./FieldContext-CQgqkVQc.js";const{expect:n,fn:W,userEvent:m,within:O}=__STORYBOOK_MODULE_TEST__,K={title:"Components/IconButton",component:a,tags:["autodocs"],parameters:{layout:"centered"},args:{iconName:"edit",altText:"Edit item",onClick:W()}},r={},o={render:()=>e.jsxs(l,{gap:"14",children:[e.jsx(a,{iconName:"edit",altText:"Edit",variant:"standard"}),e.jsx(a,{iconName:"download",altText:"Download",variant:"primary"}),e.jsx(a,{iconName:"printer",altText:"Print",variant:"hollow"}),e.jsx(a,{iconName:"info",altText:"Info",variant:"ghost"}),e.jsx(a,{iconName:"send",altText:"Send",variant:"cta"}),e.jsx(a,{iconName:"trash",altText:"Delete",variant:"danger"}),e.jsx(a,{iconName:"alarm",altText:"Alarms",variant:"selected"}),e.jsx(a,{iconName:"barcode",altText:"Barcode",variant:"selectedBold"})]}),parameters:{controls:{disable:!0}}},s={render:()=>e.jsxs(l,{gap:"14",alignItems:"center",children:[e.jsx(a,{iconName:"calendar",altText:"Calendar",size:"sm"}),e.jsx(a,{iconName:"calendar",altText:"Calendar",size:"md"}),e.jsx(a,{iconName:"calendar",altText:"Calendar",size:"lg"}),e.jsx(a,{iconName:"calendar",altText:"Calendar",size:"xl"})]}),parameters:{controls:{disable:!0}}},i={name:"Ex: Loading and Disabled",render:()=>e.jsxs(l,{gap:"14",children:[e.jsx(a,{iconName:"cloud-synced",altText:"Syncing",loading:!0}),e.jsx(a,{iconName:"trash",altText:"Delete",variant:"danger",disabled:!0})]}),parameters:{controls:{disable:!0}}},d={name:"Ex: Disabled With Reason",render:()=>e.jsxs(l,{gap:"14",children:[e.jsx(a,{iconName:"edit",altText:"Edit order",disabledReason:"Closed orders can't be edited."}),e.jsx(a,{iconName:"trash",altText:"Delete order",variant:"danger",disabledReason:"Orders with shipments can't be deleted."})]}),parameters:{controls:{disable:!0}}},c={name:"Test: disabledReason",args:{iconName:"trash",altText:"Delete order",disabledReason:"Orders with shipments can't be deleted."},play:async({args:f,canvasElement:S})=>{const t=O(S).getByRole("button",{name:"Delete order"});await n(t).toHaveAttribute("aria-disabled","true"),await n(t).not.toHaveAttribute("disabled"),await n(t).toHaveAccessibleDescription("Orders with shipments can't be deleted."),t.focus(),await m.keyboard("{Enter}"),await m.keyboard(" "),await n(f.onClick).not.toHaveBeenCalled()}},P=["Default","Variants","Sizes","ExLoadingAndDisabled","ExDisabledWithReason","DisabledReasonBehavior"];var p,x,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(u=(x=r.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};var b,g,T;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(T=(g=o.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};var v,h,N;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(N=(h=s.parameters)==null?void 0:h.docs)==null?void 0:N.source}}};var B,D,w;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(w=(D=i.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var E,I,j;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(j=(I=d.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};var y,R,C;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
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

    // The recipe turns off pointer events. Keyboard activation is blocked too.
    button.focus();
    await userEvent.keyboard('{Enter}');
    await userEvent.keyboard(' ');
    await expect(args.onClick).not.toHaveBeenCalled();
  }
}`,...(C=(R=c.parameters)==null?void 0:R.docs)==null?void 0:C.source}}};export{r as Default,c as DisabledReasonBehavior,d as ExDisabledWithReason,i as ExLoadingAndDisabled,s as Sizes,o as Variants,P as __namedExportsOrder,K as default};
