import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{T as r}from"./Text-B9OVYQZt.js";import"./Box-DSw7gtY6.js";import"./index-2yJIXLcc.js";const y={title:"Components/Text",component:r,parameters:{layout:"padded",controls:{disable:!0,disableSaveFromUI:!0}},argTypes:{fontSize:{control:"select",options:["body-lg","body-md","body-sm","body-xs","header-lg","header-md","header-sm","header-xs","display-lg","display-md","display-sm","display-xs"],description:"Text size",table:{defaultValue:{summary:"body-md"}}},fontFamily:{control:"select",options:["mono","serif","body"],description:"Font family",table:{defaultValue:{summary:"body"}}},lineHeight:{control:"select",options:["lg","md","sm","xs"],description:"Line Height",table:{defaultValue:{summary:"md"}}},color:{control:"select",options:["slate-90","blue-50","gold-50",""],description:"Font Color",table:{defaultValue:{summary:"slate-90"}}},as:{control:"text",description:"Render as element"},children:{control:"text",description:"ReactNode"}}},o={args:{children:"Text Component"}},t={render:s=>e.jsxs(e.Fragment,{children:[e.jsx(r,{...s,font:"mono",color:"slate.90",children:"Slate-90"}),e.jsx(r,{...s,color:"gold.50",children:"Gold-50"}),e.jsx(r,{...s,color:"blue.50",children:"Blue-50"})]})};var l,a,n;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: 'Text Component'
  }
}`,...(n=(a=o.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var d,c,i;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: (args: TextProps) => <>
      <Text {...args} font="mono" color="slate.90">
        Slate-90
      </Text>
      <Text {...args} color="gold.50">
        Gold-50
      </Text>
      <Text {...args} color="blue.50">
        Blue-50
      </Text>
    </>
}`,...(i=(c=t.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};const g=["Default","AllColors"];export{t as AllColors,o as Default,g as __namedExportsOrder,y as default};
