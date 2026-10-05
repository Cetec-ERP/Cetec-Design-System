import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{w as i,e as o}from"./index-DPYJpPba.js";import"./index-BKyFwriW.js";import{L as c}from"./LocaleProvider-BECdcpJQ.js";import"./useLocale-BTKG7dEv.js";import{B as D}from"./dsComponent-BG2jnRr7.js";import{C as l}from"./Calendar-CX4Y6IfE.js";import"./SegmentedTime-C2vGQqZe.js";import{c as b}from"./TimeRangeInput-hznVCYea.js";import"./TimeRangeMenu-DS73RINn.js";import"./TimeRangePicker-CN8RIFan.js";import{S as f,a as m}from"./Select-CTzgVK25.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Button-Cr4bC5CG.js";import"./Icon-CrwLKW7B.js";import"./IconConfig-BuieZFlx.js";import"./Spinner-PLunUSsK.js";import"./FieldContext-D6URyQos.js";import"./dateTimeUtils-Ci5JiRSc.js";import"./IconButton-DXX-zVMP.js";import"./Tooltip-bxPM6yCH.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";import"./Text-IAtRPmZy.js";import"./useControllableState-ByGfjEIG.js";import"./SubMenu-GU3WEsjk.js";import"./HighlightText-DKF3xkQK.js";import"./menu-DMiDM6i6.js";import"./FloatingLayerContext-BryH8O9I.js";import"./ListItemGroup-C6Yw6dSd.js";import"./Divider-Dbp7vcYx.js";import"./Checkbox-BKc0omfg.js";import"./Toggle-mlz1wkXL.js";import"./ListItem-BTQR-hRu.js";import"./dsPart-nnoJM9m6.js";import"./Chip-Q9f-sCEy.js";const w={selectPlaceholder:"Seleccionar...",chooseDate:"Elegir fecha",previousMonth:"Mes anterior",nextMonth:"Mes siguiente",today:"hoy",selected:"seleccionado",date:"Fecha",time:"Hora",month:"Mes",day:"Día",year:"Año",hour:"Hora",minute:"Minuto",monthPlaceholder:"MM",dayPlaceholder:"DD",yearPlaceholder:"AAAA",clearDateTime:"Borrar fecha y hora"},se={title:"Components/LocaleProvider",component:c,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Provides a locale and translated built-in labels to every design-system component below it. The design system does not translate text: the app passes its own translations through `labels`. A label left out keeps its English default. A label prop on a component overrides the provider. Text direction comes from `<html dir>`, not from this provider."}}},args:{locale:"es-ES",labels:w,children:null}},r={render:a=>e.jsx(c,{...a,children:e.jsxs(D,{display:"grid",gap:"16",w:"xs",children:[e.jsxs(f,{children:[e.jsx(m,{value:"open",label:"Abierto"}),e.jsx(m,{value:"closed",label:"Cerrado"})]}),e.jsx(b,{}),e.jsx(l,{})]})}),play:async({canvasElement:a})=>{const t=i(a);await o(t.getByRole("button",{name:"Mes anterior"})).toBeInTheDocument(),await o(t.getByRole("group",{name:"Elegir fecha"})).toBeInTheDocument(),await o(t.getByText("Seleccionar...")).toBeInTheDocument(),await o(t.getByRole("spinbutton",{name:"Año"})).toBeInTheDocument()}},n={name:"Prop Overrides Provider",render:a=>e.jsx(c,{...a,children:e.jsx(l,{label:"Fecha de factura"})}),play:async({canvasElement:a})=>{const t=i(a);await o(t.getByRole("group",{name:"Fecha de factura"})).toBeInTheDocument(),await o(t.getByRole("button",{name:"Mes anterior"})).toBeInTheDocument()}},s={name:"English Defaults Without a Provider",render:()=>e.jsx(l,{}),parameters:{controls:{disable:!0}},play:async({canvasElement:a})=>{const t=i(a);await o(t.getByRole("button",{name:"Previous month"})).toBeInTheDocument()}};var p,d,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(d=r.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var h,v,g;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(g=(v=n.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var y,B,x;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(x=(B=s.parameters)==null?void 0:B.docs)==null?void 0:x.source}}};const ie=["Default","PropOverridesProvider","EnglishDefaults"];export{r as Default,s as EnglishDefaults,n as PropOverridesProvider,ie as __namedExportsOrder,se as default};
