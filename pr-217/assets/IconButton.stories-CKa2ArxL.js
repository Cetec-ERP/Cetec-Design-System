import{j as a,W as s}from"./iframe-CBV8VWL6.js";import{I as e}from"./IconButton-D2kH0oqt.js";import"./preload-helper-C7uIy2vd.js";import"./Spinner-CvVqlUCj.js";import"./FieldContext-CTOECjAu.js";const{fn:I}=__STORYBOOK_MODULE_TEST__,h={title:"Components/IconButton",component:e,tags:["autodocs"],parameters:{layout:"centered"},args:{iconName:"edit",altText:"Edit item",onClick:I()}},n={},t={render:()=>a.jsxs(s,{gap:"14",children:[a.jsx(e,{iconName:"edit",altText:"Edit",variant:"standard"}),a.jsx(e,{iconName:"download",altText:"Download",variant:"primary"}),a.jsx(e,{iconName:"printer",altText:"Print",variant:"hollow"}),a.jsx(e,{iconName:"info",altText:"Info",variant:"ghost"}),a.jsx(e,{iconName:"send",altText:"Send",variant:"cta"}),a.jsx(e,{iconName:"trash",altText:"Delete",variant:"danger"}),a.jsx(e,{iconName:"alarm",altText:"Alarms",variant:"selected"}),a.jsx(e,{iconName:"barcode",altText:"Barcode",variant:"selectedBold"})]}),parameters:{controls:{disable:!0}}},r={render:()=>a.jsxs(s,{gap:"14",alignItems:"center",children:[a.jsx(e,{iconName:"calendar",altText:"Calendar",size:"sm"}),a.jsx(e,{iconName:"calendar",altText:"Calendar",size:"md"}),a.jsx(e,{iconName:"calendar",altText:"Calendar",size:"lg"}),a.jsx(e,{iconName:"calendar",altText:"Calendar",size:"xl"})]}),parameters:{controls:{disable:!0}}},o={name:"Ex: Loading and Disabled",render:()=>a.jsxs(s,{gap:"14",children:[a.jsx(e,{iconName:"cloud-synced",altText:"Syncing",loading:!0}),a.jsx(e,{iconName:"trash",altText:"Delete",variant:"danger",disabled:!0})]}),parameters:{controls:{disable:!0}}},E=["Default","Variants","Sizes","ExLoadingAndDisabled"];var c,i,l;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(l=(i=n.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var d,m,x;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(x=(m=t.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var p,u,T;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(T=(u=r.parameters)==null?void 0:u.docs)==null?void 0:T.source}}};var g,N,B;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(B=(N=o.parameters)==null?void 0:N.docs)==null?void 0:B.source}}};export{n as Default,o as ExLoadingAndDisabled,r as Sizes,t as Variants,E as __namedExportsOrder,h as default};
