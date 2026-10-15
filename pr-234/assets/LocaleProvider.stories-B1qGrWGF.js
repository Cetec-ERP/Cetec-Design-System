import{j as e,B as w}from"./iframe-DXu0nSdR.js";import{L as c}from"./LocaleProvider-BSqNSoyK.js";import"./useLocale-CO49e_FJ.js";import{C as m}from"./Calendar-D2P8xrAR.js";import{C as P}from"./Chip-EZJqcIJc.js";import"./ChipGroup-CIpq17JC.js";import"./SegmentedTime-DvpcTGTg.js";import{c as E}from"./TimeRangeInput-D93bkUpe.js";import"./TimeRangeMenu-DjwoHTyg.js";import"./TimeRangePicker-BbTCPcAW.js";import{S as I,a as p}from"./Select-BzHHOE4M.js";import"./preload-helper-C22nMbeH.js";import"./Button-SNWLL-ci.js";import"./Spinner-BAl7OL5W.js";import"./FieldContext-Cx4JBWqi.js";import"./dateTimeUtils-Ci5JiRSc.js";import"./IconButton-BhVx7R_S.js";import"./useControllableState-C0oVkuFV.js";import"./SubMenu-CbSp5fHd.js";import"./HighlightText-CGlQ4tqc.js";import"./menu-CkS1vG1P.js";import"./FloatingLayerContext-DQ2LDhMc.js";import"./ListItemGroup-U-PlryZi.js";import"./Divider-zPPIWuBh.js";import"./Checkbox-D-ZNNnZ0.js";import"./Toggle-BN6FKI4T.js";import"./ListItem-DWS4PJjc.js";import"./dsPart-nnoJM9m6.js";const{expect:t,within:l}=__STORYBOOK_MODULE_TEST__,R={selectPlaceholder:"Seleccionar...",chooseDate:"Elegir fecha",previousMonth:"Mes anterior",nextMonth:"Mes siguiente",today:"hoy",selected:"seleccionado",date:"Fecha",time:"Hora",month:"Mes",day:"Día",year:"Año",hour:"Hora",minute:"Minuto",monthPlaceholder:"MM",dayPlaceholder:"DD",yearPlaceholder:"AAAA",clearDateTime:"Borrar fecha y hora"},te={title:"Components/LocaleProvider",component:c,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Provides a locale and translated built-in labels to every design-system component below it. The design system does not translate text: the app passes its own translations through `labels`. A label left out keeps its English default. A label prop on a component overrides the provider. Text direction comes from `<html dir>`, not from this provider."}}},args:{locale:"es-ES",labels:R,children:null}},o={render:a=>e.jsx(c,{...a,children:e.jsxs(w,{display:"grid",gap:"16",w:"xs",children:[e.jsxs(I,{children:[e.jsx(p,{value:"open",label:"Abierto"}),e.jsx(p,{value:"closed",label:"Cerrado"})]}),e.jsx(E,{}),e.jsx(m,{})]})}),play:async({canvasElement:a})=>{const n=l(a);await t(n.getByRole("button",{name:"Mes anterior"})).toBeInTheDocument(),await t(n.getByRole("group",{name:"Elegir fecha"})).toBeInTheDocument(),await t(n.getByText("Seleccionar...")).toBeInTheDocument(),await t(n.getByRole("spinbutton",{name:"Año"})).toBeInTheDocument()}},r={name:"Prop Overrides Provider",render:a=>e.jsx(c,{...a,children:e.jsx(m,{label:"Fecha de factura"})}),play:async({canvasElement:a})=>{const n=l(a);await t(n.getByRole("group",{name:"Fecha de factura"})).toBeInTheDocument(),await t(n.getByRole("button",{name:"Mes anterior"})).toBeInTheDocument()}},s={name:"Undefined Label Keeps Default",render:()=>e.jsx(c,{labels:{removeItem:void 0},children:e.jsx(P,{dismissable:!0,onDismiss:()=>{},children:"Widget"})}),parameters:{controls:{disable:!0}},play:async({canvasElement:a})=>{const n=l(a);await t(n.getByRole("button",{name:"Remove Widget"})).toBeInTheDocument()}},i={name:"English Defaults Without a Provider",render:()=>e.jsx(m,{}),parameters:{controls:{disable:!0}},play:async({canvasElement:a})=>{const n=l(a);await t(n.getByRole("button",{name:"Previous month"})).toBeInTheDocument()}},oe=["Default","PropOverridesProvider","UndefinedLabelKeepsDefault","EnglishDefaults"];var d,u,h;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <LocaleProvider {...args}>
      <Box display="grid" gap="16" w="xs">
        <Select>
          <SelectOption value="open" label="Abierto" />
          <SelectOption value="closed" label="Cerrado" />
        </Select>
        <DateTimeInput />
        <Calendar />
      </Box>
    </LocaleProvider>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('button', {
      name: 'Mes anterior'
    })).toBeInTheDocument();
    await expect(canvas.getByRole('group', {
      name: 'Elegir fecha'
    })).toBeInTheDocument();
    await expect(canvas.getByText('Seleccionar...')).toBeInTheDocument();
    await expect(canvas.getByRole('spinbutton', {
      name: 'Año'
    })).toBeInTheDocument();
  }
}`,...(h=(u=o.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var v,g,y;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Prop Overrides Provider',
  render: args => <LocaleProvider {...args}>
      <Calendar label="Fecha de factura" />
    </LocaleProvider>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('group', {
      name: 'Fecha de factura'
    })).toBeInTheDocument();
    await expect(canvas.getByRole('button', {
      name: 'Mes anterior'
    })).toBeInTheDocument();
  }
}`,...(y=(g=r.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var b,B,x;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Undefined Label Keeps Default',
  render: () => <LocaleProvider labels={{
    removeItem: undefined
  }}>
      <Chip dismissable onDismiss={() => {}}>
        Widget
      </Chip>
    </LocaleProvider>,
  parameters: {
    controls: {
      disable: true
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('button', {
      name: 'Remove Widget'
    })).toBeInTheDocument();
  }
}`,...(x=(B=s.parameters)==null?void 0:B.docs)==null?void 0:x.source}}};var D,f,T;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'English Defaults Without a Provider',
  render: () => <Calendar />,
  parameters: {
    controls: {
      disable: true
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('button', {
      name: 'Previous month'
    })).toBeInTheDocument();
  }
}`,...(T=(f=i.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};export{o as Default,i as EnglishDefaults,r as PropOverridesProvider,s as UndefinedLabelKeepsDefault,oe as __namedExportsOrder,te as default};
