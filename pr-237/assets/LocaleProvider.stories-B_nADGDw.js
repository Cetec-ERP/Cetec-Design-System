import{j as n,B as L}from"./iframe-CaBYKAUb.js";import{L as t}from"./LocaleProvider-DxPBaG4M.js";import"./useLocale-DsMEYg5b.js";import{C as d}from"./Calendar-Co5Ij5EU.js";import{C as I}from"./Chip-C8BJe_TS.js";import"./ChipGroup-mBxc84Gz.js";import{C as R}from"./CodeBlock-D_VwMdUY.js";import"./SegmentedTime-D1dZXhdy.js";import{c as S}from"./TimeRangeInput-CbwxJs7s.js";import"./TimeRangeMenu--Ur5xNoi.js";import"./TimeRangePicker-ClfoNTYp.js";import{S as j,a as p}from"./Select-Cf7Zr8rC.js";import"./preload-helper-DFx2riH-.js";import"./Button-CE3MkHoz.js";import"./Spinner-DVZlBped.js";import"./FieldContext-Cs-nEssu.js";import"./dateTimeUtils-Ci5JiRSc.js";import"./IconButton-BsutFiZQ.js";import"./useControllableState-DCFxOVCE.js";import"./dsPart-nnoJM9m6.js";import"./SubMenu-G13r7QE9.js";import"./HighlightText-BUxh3Ay7.js";import"./menu-BFytD1XU.js";import"./FloatingLayerContext-0cRqTc2v.js";import"./ListItemGroup-Ddx5pgxh.js";import"./Divider-CWK7nGUw.js";import"./Checkbox-xlru5WcP.js";import"./Toggle-C6QDJ1_7.js";import"./ListItem-BajeflrT.js";const{expect:o,within:r}=__STORYBOOK_MODULE_TEST__,M={selectPlaceholder:"Seleccionar...",chooseDate:"Elegir fecha",previousMonth:"Mes anterior",nextMonth:"Mes siguiente",today:"hoy",selected:"seleccionado",date:"Fecha",time:"Hora",month:"Mes",day:"Día",year:"Año",hour:"Hora",minute:"Minuto",monthPlaceholder:"MM",dayPlaceholder:"DD",yearPlaceholder:"AAAA",clearDateTime:"Borrar fecha y hora"},le={title:"Components/LocaleProvider",component:t,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Provides a locale and translated built-in labels to every design-system component below it. The design system does not translate text: the app passes its own translations through `labels`. A label left out keeps its English default. A label prop on a component overrides the provider. Text direction comes from `<html dir>`, not from this provider."}}},args:{locale:"es-ES",labels:M,children:null}},s={render:e=>n.jsx(t,{...e,children:n.jsxs(L,{display:"grid",gap:"16",w:"xs",children:[n.jsxs(j,{children:[n.jsx(p,{value:"open",label:"Abierto"}),n.jsx(p,{value:"closed",label:"Cerrado"})]}),n.jsx(S,{}),n.jsx(d,{})]})}),play:async({canvasElement:e})=>{const a=r(e);await o(a.getByRole("button",{name:"Mes anterior"})).toBeInTheDocument(),await o(a.getByRole("group",{name:"Elegir fecha"})).toBeInTheDocument(),await o(a.getByText("Seleccionar...")).toBeInTheDocument(),await o(a.getByRole("spinbutton",{name:"Año"})).toBeInTheDocument()}},c={name:"Prop Overrides Provider",render:e=>n.jsx(t,{...e,children:n.jsx(d,{label:"Fecha de factura"})}),play:async({canvasElement:e})=>{const a=r(e);await o(a.getByRole("group",{name:"Fecha de factura"})).toBeInTheDocument(),await o(a.getByRole("button",{name:"Mes anterior"})).toBeInTheDocument()}},i={name:"Code Block Labels",render:()=>n.jsx(t,{labels:{copyCode:"Copiar código",showAllLines:e=>`Mostrar las ${e} líneas`},children:n.jsx(L,{w:"xs",children:n.jsx(R,{code:`uno
dos
tres
cuatro
cinco`,maxLines:3})})}),parameters:{controls:{disable:!0}},play:async({canvasElement:e})=>{const a=r(e);await o(a.getByRole("button",{name:"Copiar código"})).toBeInTheDocument(),await o(a.getByRole("button",{name:"Mostrar las 5 líneas"})).toBeInTheDocument()}},l={name:"Undefined Label Keeps Default",render:()=>n.jsx(t,{labels:{removeItem:void 0},children:n.jsx(I,{dismissable:!0,onDismiss:()=>{},children:"Widget"})}),parameters:{controls:{disable:!0}},play:async({canvasElement:e})=>{const a=r(e);await o(a.getByRole("button",{name:"Remove Widget"})).toBeInTheDocument()}},m={name:"English Defaults Without a Provider",render:()=>n.jsx(d,{}),parameters:{controls:{disable:!0}},play:async({canvasElement:e})=>{const a=r(e);await o(a.getByRole("button",{name:"Previous month"})).toBeInTheDocument()}},me=["Default","PropOverridesProvider","CodeBlockLabels","UndefinedLabelKeepsDefault","EnglishDefaults"];var u,h,v;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(v=(h=s.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var g,y,B;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(B=(y=c.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};var x,b,D;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Code Block Labels',
  render: () => <LocaleProvider labels={{
    copyCode: 'Copiar código',
    showAllLines: count => \`Mostrar las \${count} líneas\`
  }}>
      <Box w="xs">
        <CodeBlock code={'uno\\ndos\\ntres\\ncuatro\\ncinco'} maxLines={3} />
      </Box>
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
      name: 'Copiar código'
    })).toBeInTheDocument();
    await expect(canvas.getByRole('button', {
      name: 'Mostrar las 5 líneas'
    })).toBeInTheDocument();
  }
}`,...(D=(b=i.parameters)==null?void 0:b.docs)==null?void 0:D.source}}};var f,w,T;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(T=(w=l.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var P,C,E;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(E=(C=m.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};export{i as CodeBlockLabels,s as Default,m as EnglishDefaults,c as PropOverridesProvider,l as UndefinedLabelKeepsDefault,me as __namedExportsOrder,le as default};
