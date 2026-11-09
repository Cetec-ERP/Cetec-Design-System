import{j as e,B as y}from"./iframe-duoCdPtj.js";import{L as r}from"./LocaleProvider-DJKryiej.js";import"./useLocale-kncI8Spz.js";import{C as P}from"./Calendar-DC8rwqeF.js";import{C as J}from"./Chip-CLrdydvz.js";import"./ChipGroup-YXudJZTE.js";import{C as Q}from"./CodeBlock-FNrbAkHJ.js";import"./SegmentedTime-1_sJIF7p.js";import{c as V}from"./TimeRangeInput-K8oC-VFN.js";import"./TimeRangeMenu-BcRG80ci.js";import"./TimeRangePicker-DhMxoepE.js";import{K as X}from"./KeyFact-BPj9ZD5X.js";import{P as u,a as v,b as h,c as b,d as g,e as x}from"./PopoverArrow-CVfjv2Aa.js";import{S as Z,a as D}from"./Select-BW-wP-L0.js";import"./preload-helper-uKahAciQ.js";import"./Button-CRQAArIC.js";import"./Spinner-BNZKunBB.js";import"./FieldContext-CPDmo6YI.js";import"./dateTimeUtils-Ci5JiRSc.js";import"./IconButton-DVPKynxx.js";import"./useControllableState-BYU3-bgi.js";import"./dsPart-nnoJM9m6.js";import"./SubMenu-DW9gHCNs.js";import"./HighlightText-CImOK50u.js";import"./menu-jXeBEjTD.js";import"./FloatingLayerContext-bR3k0hoH.js";import"./ListItemGroup-juYuo-wu.js";import"./Divider-BBdvcNAi.js";import"./Checkbox-COo8eBXn.js";import"./Toggle-CpV65TdL.js";import"./ListItem-CAhdFTGM.js";import"./Link-DVds7JY2.js";import"./TextInput-eiUgIAEc.js";const{expect:o,userEvent:T,waitFor:ee,within:t}=__STORYBOOK_MODULE_TEST__,ne={selectPlaceholder:"Seleccionar...",chooseDate:"Elegir fecha",previousMonth:"Mes anterior",nextMonth:"Mes siguiente",today:"hoy",selected:"seleccionado",date:"Fecha",time:"Hora",month:"Mes",day:"Día",year:"Año",hour:"Hora",minute:"Minuto",monthPlaceholder:"MM",dayPlaceholder:"DD",yearPlaceholder:"AAAA",clearDateTime:"Borrar fecha y hora"},Oe={title:"Components/LocaleProvider",component:r,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Provides a locale and translated built-in labels to every design-system component below it. The design system does not translate text: the app passes its own translations through `labels`. A label left out keeps its English default. A label prop on a component overrides the provider. Text direction comes from `<html dir>`, not from this provider."}}},args:{locale:"es-ES",labels:ne,children:null}},s={render:n=>e.jsx(r,{...n,children:e.jsxs(y,{display:"grid",gap:"16",w:"xs",children:[e.jsxs(Z,{children:[e.jsx(D,{value:"open",label:"Abierto"}),e.jsx(D,{value:"closed",label:"Cerrado"})]}),e.jsx(V,{}),e.jsx(P,{})]})}),play:async({canvasElement:n})=>{const a=t(n);await o(a.getByRole("button",{name:"Mes anterior"})).toBeInTheDocument(),await o(a.getByRole("group",{name:"Elegir fecha"})).toBeInTheDocument(),await o(a.getByText("Seleccionar...")).toBeInTheDocument(),await o(a.getByRole("spinbutton",{name:"Año"})).toBeInTheDocument()}},l={name:"Prop Overrides Provider",render:n=>e.jsx(r,{...n,children:e.jsx(P,{label:"Fecha de factura"})}),play:async({canvasElement:n})=>{const a=t(n);await o(a.getByRole("group",{name:"Fecha de factura"})).toBeInTheDocument(),await o(a.getByRole("button",{name:"Mes anterior"})).toBeInTheDocument()}},c={name:"Code Block Labels",render:()=>e.jsx(r,{labels:{copyCode:"Copiar código",showAllLines:n=>`Mostrar las ${n} líneas`},children:e.jsx(y,{w:"xs",children:e.jsx(Q,{code:`uno
dos
tres
cuatro
cinco`,maxLines:3})})}),parameters:{controls:{disable:!0}},play:async({canvasElement:n})=>{const a=t(n);await o(a.getByRole("button",{name:"Copiar código"})).toBeInTheDocument(),await o(a.getByRole("button",{name:"Mostrar las 5 líneas"})).toBeInTheDocument()}},i={name:"Key Fact Labels",render:()=>e.jsx(r,{locale:"fr-FR",labels:{keyFactLabel:n=>`${n} :`},children:e.jsx(X,{label:"Responsable",value:"Dana Ortiz"})}),parameters:{controls:{disable:!0}},play:async({canvasElement:n})=>{const a=t(n);await o(a.getByText("Responsable :")).toBeInTheDocument()}},p={name:"Undefined Label Keeps Default",render:()=>e.jsx(r,{labels:{removeItem:void 0},children:e.jsx(J,{dismissable:!0,onDismiss:()=>{},children:"Widget"})}),parameters:{controls:{disable:!0}},play:async({canvasElement:n})=>{const a=t(n);await o(a.getByRole("button",{name:"Remove Widget"})).toBeInTheDocument()}},d={name:"English Defaults Without a Provider",render:()=>e.jsx(P,{}),parameters:{controls:{disable:!0}},play:async({canvasElement:n})=>{const a=t(n);await o(a.getByRole("button",{name:"Previous month"})).toBeInTheDocument()}},m={tags:["!snapshot"],render:()=>e.jsxs(y,{display:"flex",gap:"16",children:[e.jsxs(r,{labels:{closePopover:"Cerrar nota"},children:[e.jsxs(u,{children:[e.jsx(v,{children:"Translated label"}),e.jsx(h,{children:e.jsxs(b,{children:[e.jsx(g,{children:"Translated note"}),e.jsx(x,{})]})})]}),e.jsxs(u,{children:[e.jsx(v,{children:"Explicit label"}),e.jsx(h,{children:e.jsxs(b,{children:[e.jsx(g,{children:"Custom note"}),e.jsx(x,{altText:"Dismiss this note"})]})})]})]}),e.jsxs(u,{children:[e.jsx(v,{children:"Default label"}),e.jsx(h,{children:e.jsxs(b,{children:[e.jsx(g,{children:"Default note"}),e.jsx(x,{})]})})]})]}),play:async({canvasElement:n})=>{const a=t(n),z=t(n.ownerDocument.body);for(const[Y,q,G]of[["Translated label","Translated note","Cerrar nota"],["Explicit label","Custom note","Dismiss this note"],["Default label","Default note","Close"]]){await T.click(a.getByRole("button",{name:Y}));const B=await z.findByRole("dialog",{name:q});await T.click(t(B).getByRole("button",{name:G})),await ee(()=>o(B).not.toBeInTheDocument())}}},ke=["Default","PropOverridesProvider","CodeBlockLabels","KeyFactLabels","UndefinedLabelKeepsDefault","EnglishDefaults","PopoverCloseLabels"];var f,w,C;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(C=(w=s.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var L,j,E;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(E=(j=l.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};var R,I,F;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(F=(I=c.parameters)==null?void 0:I.docs)==null?void 0:F.source}}};var S,M,O;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(O=(M=i.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var k,A,K;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(K=(A=p.parameters)==null?void 0:A.docs)==null?void 0:K.source}}};var H,_,W;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(W=(_=d.parameters)==null?void 0:_.docs)==null?void 0:W.source}}};var U,$,N;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(N=($=m.parameters)==null?void 0:$.docs)==null?void 0:N.source}}};export{c as CodeBlockLabels,s as Default,d as EnglishDefaults,i as KeyFactLabels,m as PopoverCloseLabels,l as PropOverridesProvider,p as UndefinedLabelKeepsDefault,ke as __namedExportsOrder,Oe as default};
