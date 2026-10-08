import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{w as c,e as o}from"./index-DPYJpPba.js";import"./index-BKyFwriW.js";import{L as l}from"./LocaleProvider-DihxmyRu.js";import"./useLocale-A-vaza79.js";import{B as P}from"./dsComponent-BG2jnRr7.js";import{C as m}from"./Calendar-DPsH7ktf.js";import{C as T}from"./Chip-Ban3TMXz.js";import"./ChipGroup-4ZxXZw0G.js";import"./SegmentedTime-Cm5HjRx2.js";import{c as I}from"./TimeRangeInput-CnwhiyDK.js";import"./TimeRangeMenu-DuaDvnFj.js";import"./TimeRangePicker-CMQWxRvw.js";import{S as E,a as p}from"./Select-BAHP0vFE.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Button-Cr4bC5CG.js";import"./Icon-CrwLKW7B.js";import"./IconConfig-BuieZFlx.js";import"./Spinner-PLunUSsK.js";import"./FieldContext-D6URyQos.js";import"./dateTimeUtils-Ci5JiRSc.js";import"./IconButton-DXX-zVMP.js";import"./Tooltip-bxPM6yCH.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";import"./Text-IAtRPmZy.js";import"./useControllableState-ByGfjEIG.js";import"./SubMenu-BTwf7b9m.js";import"./HighlightText-DKF3xkQK.js";import"./menu-DMiDM6i6.js";import"./FloatingLayerContext-BryH8O9I.js";import"./ListItemGroup-C6Yw6dSd.js";import"./Divider-Dbp7vcYx.js";import"./Checkbox-BKc0omfg.js";import"./Toggle-mlz1wkXL.js";import"./ListItem-BTQR-hRu.js";import"./dsPart-nnoJM9m6.js";const R={selectPlaceholder:"Seleccionar...",chooseDate:"Elegir fecha",previousMonth:"Mes anterior",nextMonth:"Mes siguiente",today:"hoy",selected:"seleccionado",date:"Fecha",time:"Hora",month:"Mes",day:"Día",year:"Año",hour:"Hora",minute:"Minuto",monthPlaceholder:"MM",dayPlaceholder:"DD",yearPlaceholder:"AAAA",clearDateTime:"Borrar fecha y hora"},de={title:"Components/LocaleProvider",component:l,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Provides a locale and translated built-in labels to every design-system component below it. The design system does not translate text: the app passes its own translations through `labels`. A label left out keeps its English default. A label prop on a component overrides the provider. Text direction comes from `<html dir>`, not from this provider."}}},args:{locale:"es-ES",labels:R,children:null}},n={render:a=>e.jsx(l,{...a,children:e.jsxs(P,{display:"grid",gap:"16",w:"xs",children:[e.jsxs(E,{children:[e.jsx(p,{value:"open",label:"Abierto"}),e.jsx(p,{value:"closed",label:"Cerrado"})]}),e.jsx(I,{}),e.jsx(m,{})]})}),play:async({canvasElement:a})=>{const t=c(a);await o(t.getByRole("button",{name:"Mes anterior"})).toBeInTheDocument(),await o(t.getByRole("group",{name:"Elegir fecha"})).toBeInTheDocument(),await o(t.getByText("Seleccionar...")).toBeInTheDocument(),await o(t.getByRole("spinbutton",{name:"Año"})).toBeInTheDocument()}},r={name:"Prop Overrides Provider",render:a=>e.jsx(l,{...a,children:e.jsx(m,{label:"Fecha de factura"})}),play:async({canvasElement:a})=>{const t=c(a);await o(t.getByRole("group",{name:"Fecha de factura"})).toBeInTheDocument(),await o(t.getByRole("button",{name:"Mes anterior"})).toBeInTheDocument()}},s={name:"Undefined Label Keeps Default",render:()=>e.jsx(l,{labels:{removeItem:void 0},children:e.jsx(T,{dismissable:!0,onDismiss:()=>{},children:"Widget"})}),parameters:{controls:{disable:!0}},play:async({canvasElement:a})=>{const t=c(a);await o(t.getByRole("button",{name:"Remove Widget"})).toBeInTheDocument()}},i={name:"English Defaults Without a Provider",render:()=>e.jsx(m,{}),parameters:{controls:{disable:!0}},play:async({canvasElement:a})=>{const t=c(a);await o(t.getByRole("button",{name:"Previous month"})).toBeInTheDocument()}};var d,u,h;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(u=n.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var v,g,y;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(y=(g=r.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var b,B,f;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(f=(B=s.parameters)==null?void 0:B.docs)==null?void 0:f.source}}};var x,D,w;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(w=(D=i.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};const ue=["Default","PropOverridesProvider","UndefinedLabelKeepsDefault","EnglishDefaults"];export{n as Default,i as EnglishDefaults,r as PropOverridesProvider,s as UndefinedLabelKeepsDefault,ue as __namedExportsOrder,de as default};
