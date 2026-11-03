import{j as e,B as b}from"./iframe-BXVrq_Ea.js";import{L as r}from"./LocaleProvider-DhKh72dK.js";import"./useLocale-XGbrqa8G.js";import{C as y}from"./Calendar-B2z7NkNC.js";import{C as Y}from"./Chip-B1tggtTi.js";import"./ChipGroup-ktQNZGs5.js";import{C as q}from"./CodeBlock-jw2gRHNN.js";import"./SegmentedTime-eDXiA73Y.js";import{c as z}from"./TimeRangeInput-CV3pVKjB.js";import"./TimeRangeMenu-4zXdZezz.js";import"./TimeRangePicker-Cx_PCUs-.js";import{P as m,a as u,b as v,c as h,d as g,e as x}from"./PopoverArrow-DyZxs-oE.js";import{S as G,a as B}from"./Select-rnITnC8k.js";import"./preload-helper-_lYshGXE.js";import"./Button-C0jJCtrg.js";import"./Spinner-CZSxQYph.js";import"./FieldContext-Yaeonwr4.js";import"./dateTimeUtils-Ci5JiRSc.js";import"./IconButton-DeR11fbw.js";import"./useControllableState--v1P_lYi.js";import"./dsPart-nnoJM9m6.js";import"./SubMenu-BvYqgDHD.js";import"./HighlightText-DVB4GgIB.js";import"./menu-B1i95S8b.js";import"./FloatingLayerContext-BZjIYmBb.js";import"./ListItemGroup-CXg8FDnk.js";import"./Divider-1_CKNAdd.js";import"./Checkbox-CauTRvHk.js";import"./Toggle-CxrTKIVf.js";import"./ListItem-BvDDGBmP.js";const{expect:a,userEvent:D,waitFor:J,within:t}=__STORYBOOK_MODULE_TEST__,Q={selectPlaceholder:"Seleccionar...",chooseDate:"Elegir fecha",previousMonth:"Mes anterior",nextMonth:"Mes siguiente",today:"hoy",selected:"seleccionado",date:"Fecha",time:"Hora",month:"Mes",day:"Día",year:"Año",hour:"Hora",minute:"Minuto",monthPlaceholder:"MM",dayPlaceholder:"DD",yearPlaceholder:"AAAA",clearDateTime:"Borrar fecha y hora"},je={title:"Components/LocaleProvider",component:r,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Provides a locale and translated built-in labels to every design-system component below it. The design system does not translate text: the app passes its own translations through `labels`. A label left out keeps its English default. A label prop on a component overrides the provider. Text direction comes from `<html dir>`, not from this provider."}}},args:{locale:"es-ES",labels:Q,children:null}},s={render:n=>e.jsx(r,{...n,children:e.jsxs(b,{display:"grid",gap:"16",w:"xs",children:[e.jsxs(G,{children:[e.jsx(B,{value:"open",label:"Abierto"}),e.jsx(B,{value:"closed",label:"Cerrado"})]}),e.jsx(z,{}),e.jsx(y,{})]})}),play:async({canvasElement:n})=>{const o=t(n);await a(o.getByRole("button",{name:"Mes anterior"})).toBeInTheDocument(),await a(o.getByRole("group",{name:"Elegir fecha"})).toBeInTheDocument(),await a(o.getByText("Seleccionar...")).toBeInTheDocument(),await a(o.getByRole("spinbutton",{name:"Año"})).toBeInTheDocument()}},l={name:"Prop Overrides Provider",render:n=>e.jsx(r,{...n,children:e.jsx(y,{label:"Fecha de factura"})}),play:async({canvasElement:n})=>{const o=t(n);await a(o.getByRole("group",{name:"Fecha de factura"})).toBeInTheDocument(),await a(o.getByRole("button",{name:"Mes anterior"})).toBeInTheDocument()}},i={name:"Code Block Labels",render:()=>e.jsx(r,{labels:{copyCode:"Copiar código",showAllLines:n=>`Mostrar las ${n} líneas`},children:e.jsx(b,{w:"xs",children:e.jsx(q,{code:`uno
dos
tres
cuatro
cinco`,maxLines:3})})}),parameters:{controls:{disable:!0}},play:async({canvasElement:n})=>{const o=t(n);await a(o.getByRole("button",{name:"Copiar código"})).toBeInTheDocument(),await a(o.getByRole("button",{name:"Mostrar las 5 líneas"})).toBeInTheDocument()}},c={name:"Undefined Label Keeps Default",render:()=>e.jsx(r,{labels:{removeItem:void 0},children:e.jsx(Y,{dismissable:!0,onDismiss:()=>{},children:"Widget"})}),parameters:{controls:{disable:!0}},play:async({canvasElement:n})=>{const o=t(n);await a(o.getByRole("button",{name:"Remove Widget"})).toBeInTheDocument()}},p={name:"English Defaults Without a Provider",render:()=>e.jsx(y,{}),parameters:{controls:{disable:!0}},play:async({canvasElement:n})=>{const o=t(n);await a(o.getByRole("button",{name:"Previous month"})).toBeInTheDocument()}},d={tags:["!snapshot"],render:()=>e.jsxs(b,{display:"flex",gap:"16",children:[e.jsxs(r,{labels:{closePopover:"Cerrar nota"},children:[e.jsxs(m,{children:[e.jsx(u,{children:"Translated label"}),e.jsx(v,{children:e.jsxs(h,{children:[e.jsx(g,{children:"Translated note"}),e.jsx(x,{})]})})]}),e.jsxs(m,{children:[e.jsx(u,{children:"Explicit label"}),e.jsx(v,{children:e.jsxs(h,{children:[e.jsx(g,{children:"Custom note"}),e.jsx(x,{altText:"Dismiss this note"})]})})]})]}),e.jsxs(m,{children:[e.jsx(u,{children:"Default label"}),e.jsx(v,{children:e.jsxs(h,{children:[e.jsx(g,{children:"Default note"}),e.jsx(x,{})]})})]})]}),play:async({canvasElement:n})=>{const o=t(n),K=t(n.ownerDocument.body);for(const[U,N,$]of[["Translated label","Translated note","Cerrar nota"],["Explicit label","Custom note","Dismiss this note"],["Default label","Default note","Close"]]){await D.click(o.getByRole("button",{name:U}));const P=await K.findByRole("dialog",{name:N});await D.click(t(P).getByRole("button",{name:$})),await J(()=>a(P).not.toBeInTheDocument())}}},Ee=["Default","PropOverridesProvider","CodeBlockLabels","UndefinedLabelKeepsDefault","EnglishDefaults","PopoverCloseLabels"];var T,f,w;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(w=(f=s.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var C,j,E;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(E=(j=l.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};var L,R,I;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(I=(R=i.parameters)==null?void 0:R.docs)==null?void 0:I.source}}};var S,M,A;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(A=(M=c.parameters)==null?void 0:M.docs)==null?void 0:A.source}}};var O,k,F;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(F=(k=p.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};var H,_,W;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(W=(_=d.parameters)==null?void 0:_.docs)==null?void 0:W.source}}};export{i as CodeBlockLabels,s as Default,p as EnglishDefaults,d as PopoverCloseLabels,l as PropOverridesProvider,c as UndefinedLabelKeepsDefault,Ee as __namedExportsOrder,je as default};
