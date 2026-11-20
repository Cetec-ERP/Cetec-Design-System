import{j as e,B}from"./iframe-CjXzxEP4.js";import{L as r}from"./LocaleProvider-Vy_6-Dbp.js";import"./useLocale-BGrEy-l0.js";import{C as P}from"./Calendar-BcAYFB8i.js";import{C as Z}from"./Chip-DriJXWCn.js";import"./ChipGroup-CWh3hayJ.js";import{C as ee}from"./CodeBlock-Tee9KuzI.js";import"./SegmentedTime-CuTflPD5.js";import{c as ne}from"./TimeRangeInput-DfPW-tB0.js";import"./TimeRangeMenu-CLGc3Znl.js";import"./TimeRangePicker-C1z0WZs6.js";import{K as ae}from"./KeyFact-D6MqYZvO.js";import{a as oe}from"./SubMenu-COALkseg.js";import{P as v,a as h,b,c as g,d as x,e as y}from"./PopoverArrow-DfoYMnoa.js";import{S as te,a as T}from"./Select-HbFoDMC9.js";import{S as re,a as se}from"./SplitButton-XTIXF9v2.js";import"./preload-helper-DhUE6qkK.js";import"./Button-Dq6iR1xG.js";import"./Spinner-CsxUhPZl.js";import"./FieldContext-Df6te-PI.js";import"./dateTimeUtils-Ci5JiRSc.js";import"./IconButton-UgQqvNss.js";import"./useControllableState-BAhdHf54.js";import"./dsPart-nnoJM9m6.js";import"./Divider-B2AAFEY6.js";import"./ListItem-HOR-Dge_.js";import"./HighlightText-TtUjmJPA.js";import"./Checkbox-NhuAxbqA.js";import"./Toggle-C1vLCnQG.js";import"./ListItemGroup-BG5nB3mM.js";import"./Link-ArvccQRI.js";import"./TextInput-DWu6velv.js";import"./menu-t38b-biT.js";import"./FloatingLayerContext-Dnpy9ddJ.js";const{expect:o,userEvent:f,waitFor:le,within:t}=__STORYBOOK_MODULE_TEST__,ce={selectPlaceholder:"Seleccionar...",chooseDate:"Elegir fecha",previousMonth:"Mes anterior",nextMonth:"Mes siguiente",today:"hoy",selected:"seleccionado",date:"Fecha",time:"Hora",month:"Mes",day:"Día",year:"Año",hour:"Hora",minute:"Minuto",monthPlaceholder:"MM",dayPlaceholder:"DD",yearPlaceholder:"AAAA",clearDateTime:"Borrar fecha y hora"},$e={title:"Components/LocaleProvider",component:r,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Provides a locale and translated built-in labels to every design-system component below it. The design system does not translate text: the app passes its own translations through `labels`. A label left out keeps its English default. A label prop on a component overrides the provider. Text direction comes from `<html dir>`, not from this provider."}}},args:{locale:"es-ES",labels:ce,children:null}},s={render:n=>e.jsx(r,{...n,children:e.jsxs(B,{display:"grid",gap:"16",w:"xs",children:[e.jsxs(te,{children:[e.jsx(T,{value:"open",label:"Abierto"}),e.jsx(T,{value:"closed",label:"Cerrado"})]}),e.jsx(ne,{}),e.jsx(P,{})]})}),play:async({canvasElement:n})=>{const a=t(n);await o(a.getByRole("button",{name:"Mes anterior"})).toBeInTheDocument(),await o(a.getByRole("group",{name:"Elegir fecha"})).toBeInTheDocument(),await o(a.getByText("Seleccionar...")).toBeInTheDocument(),await o(a.getByRole("spinbutton",{name:"Año"})).toBeInTheDocument()}},l={name:"Prop Overrides Provider",render:n=>e.jsx(r,{...n,children:e.jsx(P,{label:"Fecha de factura"})}),play:async({canvasElement:n})=>{const a=t(n);await o(a.getByRole("group",{name:"Fecha de factura"})).toBeInTheDocument(),await o(a.getByRole("button",{name:"Mes anterior"})).toBeInTheDocument()}},c={name:"Code Block Labels",render:()=>e.jsx(r,{labels:{copyCode:"Copiar código",showAllLines:n=>`Mostrar las ${n} líneas`},children:e.jsx(B,{w:"xs",children:e.jsx(ee,{code:`uno
dos
tres
cuatro
cinco`,maxLines:3})})}),parameters:{controls:{disable:!0}},play:async({canvasElement:n})=>{const a=t(n);await o(a.getByRole("button",{name:"Copiar código"})).toBeInTheDocument(),await o(a.getByRole("button",{name:"Mostrar las 5 líneas"})).toBeInTheDocument()}},i={name:"Key Fact Labels",render:()=>e.jsx(r,{locale:"fr-FR",labels:{keyFactLabel:n=>`${n} :`},children:e.jsx(ae,{label:"Responsable",value:"Dana Ortiz"})}),parameters:{controls:{disable:!0}},play:async({canvasElement:n})=>{const a=t(n);await o(a.getByText("Responsable :")).toBeInTheDocument()}},p={name:"Split Button Labels",render:()=>e.jsx(r,{labels:{moreActions:"Más acciones"},children:e.jsxs(re,{children:["Mover al siguiente",e.jsx(se,{children:e.jsx(oe,{label:"Elegir ubicación…"})})]})}),parameters:{controls:{disable:!0}},play:async({canvasElement:n})=>{const a=t(n);await o(a.getByRole("button",{name:"Más acciones"})).toHaveAttribute("aria-haspopup","menu")}},m={name:"Undefined Label Keeps Default",render:()=>e.jsx(r,{labels:{removeItem:void 0},children:e.jsx(Z,{dismissable:!0,onDismiss:()=>{},children:"Widget"})}),parameters:{controls:{disable:!0}},play:async({canvasElement:n})=>{const a=t(n);await o(a.getByRole("button",{name:"Remove Widget"})).toBeInTheDocument()}},d={name:"English Defaults Without a Provider",render:()=>e.jsx(P,{}),parameters:{controls:{disable:!0}},play:async({canvasElement:n})=>{const a=t(n);await o(a.getByRole("button",{name:"Previous month"})).toBeInTheDocument()}},u={tags:["!snapshot"],render:()=>e.jsxs(B,{display:"flex",gap:"16",children:[e.jsxs(r,{labels:{closePopover:"Cerrar nota"},children:[e.jsxs(v,{children:[e.jsx(h,{children:"Translated label"}),e.jsx(b,{children:e.jsxs(g,{children:[e.jsx(x,{children:"Translated note"}),e.jsx(y,{})]})})]}),e.jsxs(v,{children:[e.jsx(h,{children:"Explicit label"}),e.jsx(b,{children:e.jsxs(g,{children:[e.jsx(x,{children:"Custom note"}),e.jsx(y,{altText:"Dismiss this note"})]})})]})]}),e.jsxs(v,{children:[e.jsx(h,{children:"Default label"}),e.jsx(b,{children:e.jsxs(g,{children:[e.jsx(x,{children:"Default note"}),e.jsx(y,{})]})})]})]}),play:async({canvasElement:n})=>{const a=t(n),J=t(n.ownerDocument.body);for(const[Q,V,X]of[["Translated label","Translated note","Cerrar nota"],["Explicit label","Custom note","Dismiss this note"],["Default label","Default note","Close"]]){await f.click(a.getByRole("button",{name:Q}));const D=await J.findByRole("dialog",{name:V});await f.click(t(D).getByRole("button",{name:X})),await le(()=>o(D).not.toBeInTheDocument())}}},Ne=["Default","PropOverridesProvider","CodeBlockLabels","KeyFactLabels","SplitButtonLabels","UndefinedLabelKeepsDefault","EnglishDefaults","PopoverCloseLabels"];var w,C,L;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(L=(C=s.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var j,E,R;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(R=(E=l.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var S,I,M;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(M=(I=c.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var F,A,O;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Key Fact Labels',
  render: () => <LocaleProvider locale="fr-FR" labels={{
    keyFactLabel: label => \`\${label} :\`
  }}>
      <KeyFact label="Responsable" value="Dana Ortiz" />
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

    // French puts a space before the colon. The component must not add its own.
    await expect(canvas.getByText('Responsable :')).toBeInTheDocument();
  }
}`,...(O=(A=i.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};var k,K,H;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Split Button Labels',
  render: () => <LocaleProvider labels={{
    moreActions: 'Más acciones'
  }}>
      <SplitButton>
        Mover al siguiente
        <SplitButtonMenu>
          <MenuItem label="Elegir ubicación…" />
        </SplitButtonMenu>
      </SplitButton>
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
      name: 'Más acciones'
    })).toHaveAttribute('aria-haspopup', 'menu');
  }
}`,...(H=(K=p.parameters)==null?void 0:K.docs)==null?void 0:H.source}}};var _,W,U;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(U=(W=m.parameters)==null?void 0:W.docs)==null?void 0:U.source}}};var $,N,z;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(z=(N=d.parameters)==null?void 0:N.docs)==null?void 0:z.source}}};var Y,q,G;u.parameters={...u.parameters,docs:{...(Y=u.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  // Behavior-only coverage opens and closes each panel; no stable open snapshot.
  tags: ['!snapshot'],
  render: () => <Box display="flex" gap="16">
      <LocaleProvider labels={{
      closePopover: 'Cerrar nota'
    }}>
        <Popover>
          <PopoverTrigger>Translated label</PopoverTrigger>
          <PopoverContent>
            <PopoverHeader>
              <PopoverTitle>Translated note</PopoverTitle>
              <PopoverClose />
            </PopoverHeader>
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger>Explicit label</PopoverTrigger>
          <PopoverContent>
            <PopoverHeader>
              <PopoverTitle>Custom note</PopoverTitle>
              <PopoverClose altText="Dismiss this note" />
            </PopoverHeader>
          </PopoverContent>
        </Popover>
      </LocaleProvider>
      <Popover>
        <PopoverTrigger>Default label</PopoverTrigger>
        <PopoverContent>
          <PopoverHeader>
            <PopoverTitle>Default note</PopoverTitle>
            <PopoverClose />
          </PopoverHeader>
        </PopoverContent>
      </Popover>
    </Box>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    for (const [triggerName, title, closeLabel] of [['Translated label', 'Translated note', 'Cerrar nota'], ['Explicit label', 'Custom note', 'Dismiss this note'], ['Default label', 'Default note', 'Close']]) {
      await userEvent.click(canvas.getByRole('button', {
        name: triggerName
      }));
      const dialog = await body.findByRole('dialog', {
        name: title
      });
      await userEvent.click(within(dialog).getByRole('button', {
        name: closeLabel
      }));
      await waitFor(() => expect(dialog).not.toBeInTheDocument());
    }
  }
}`,...(G=(q=u.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};export{c as CodeBlockLabels,s as Default,d as EnglishDefaults,i as KeyFactLabels,u as PopoverCloseLabels,l as PropOverridesProvider,p as SplitButtonLabels,m as UndefinedLabelKeepsDefault,Ne as __namedExportsOrder,$e as default};
