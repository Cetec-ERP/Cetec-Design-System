import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./index-BKyFwriW.js";import{w as b,e as s,u as O}from"./index-DPYJpPba.js";import{B as o}from"./dsComponent-D6ec2IT1.js";import{F as de}from"./FormField-CsL7K0a7.js";import{T as x}from"./Text-DV_MEMni.js";import{S as l,a as t}from"./Select-DwBgzqcc.js";import"./_commonjsHelpers-CqkleIqs.js";import"./FieldContext-D6URyQos.js";import"./Icon-12cJPaFt.js";import"./Label-q4frODx4.js";import"./Tooltip-bRuinN4J.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";import"./FloatingLayerContext-RRbgTwoi.js";import"./dsPart-nnoJM9m6.js";import"./Chip-ChewNFrR.js";import"./IconConfig-D3dlgfBK.js";import"./Spinner-DHR4yZCu.js";import"./ListItem-CkY03Vy8.js";import"./HighlightText-C2YgeQru.js";import"./Checkbox-BJA-hWE7.js";import"./Divider-CFbTUo5C.js";import"./Toggle-CiPJs3Y-.js";const He={title:"Components/Select",component:l,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Custom listbox-style select for controlled and uncontrolled single and multi-select flows. Use with `FormField` for labels, help text, and error messaging."}}},args:{placeholder:"Choose an option..."},argTypes:{value:{control:"text",description:"Controlled selected value for single-select usage"},placeholder:{control:"text",description:"Display text when no value is selected"},disabled:{control:"boolean",description:"Disabled state"},error:{control:"boolean",description:"Error state styling"},multiple:{control:"boolean",description:"Allow multiple selected values"},size:{control:"select",options:["sm","md","lg","xl"]},density:{control:"select",options:["compact","comfortable","spacious"]},autoSize:{control:"boolean",description:"Allow the trigger content to grow vertically instead of staying on one scrollable line"}}},h={render:function(a){return e.jsx(o,{w:"xs",children:e.jsxs(l,{...a,children:[e.jsx(t,{value:"starter",label:"Starter"}),e.jsx(t,{value:"growth",label:"Growth"}),e.jsx(t,{value:"enterprise",label:"Enterprise"})]})})}},g={name:"Uncontrolled",render:()=>e.jsx(o,{w:"xs",children:e.jsxs(l,{defaultValue:"growth",placeholder:"Choose an option...",children:[e.jsx(t,{value:"starter",label:"Starter"}),e.jsx(t,{value:"growth",label:"Growth"}),e.jsx(t,{value:"enterprise",label:"Enterprise"})]})}),parameters:{controls:{disable:!0}}},S={render:()=>e.jsxs(o,{display:"grid",gap:"12",w:"xs",children:[e.jsxs(l,{placeholder:"Default",children:[e.jsx(t,{value:"starter",label:"Starter"}),e.jsx(t,{value:"growth",label:"Growth"})]}),e.jsxs(l,{value:"growth",placeholder:"With value",children:[e.jsx(t,{value:"starter",label:"Starter"}),e.jsx(t,{value:"growth",label:"Growth"})]}),e.jsxs(l,{error:!0,placeholder:"Error state",children:[e.jsx(t,{value:"starter",label:"Starter"}),e.jsx(t,{value:"growth",label:"Growth"})]}),e.jsxs(l,{disabled:!0,value:"starter",placeholder:"Disabled",children:[e.jsx(t,{value:"starter",label:"Starter"}),e.jsx(t,{value:"growth",label:"Growth"})]})]}),parameters:{controls:{disable:!0}}},v={render:()=>e.jsxs(o,{display:"grid",gap:"12",w:"xs",children:[e.jsxs(l,{size:"sm",placeholder:"Small",children:[e.jsx(t,{value:"a",label:"Alpha"}),e.jsx(t,{value:"b",label:"Beta"})]}),e.jsxs(l,{size:"md",placeholder:"Medium",children:[e.jsx(t,{value:"a",label:"Alpha"}),e.jsx(t,{value:"b",label:"Beta"})]}),e.jsxs(l,{size:"lg",placeholder:"Large",children:[e.jsx(t,{value:"a",label:"Alpha"}),e.jsx(t,{value:"b",label:"Beta"})]}),e.jsxs(l,{size:"xl",placeholder:"Extra large",children:[e.jsx(t,{value:"a",label:"Alpha"}),e.jsx(t,{value:"b",label:"Beta"})]})]}),parameters:{controls:{disable:!0}}},y={render:()=>e.jsx(o,{w:"xs",children:e.jsxs(l,{placeholder:"Choose a support channel...",children:[e.jsx(t,{value:"email",label:"Email",description:"Best for non-urgent requests",iconLeft:"envelope"}),e.jsx(t,{value:"phone",label:"Phone",description:"Best for urgent issues",iconLeft:"at"}),e.jsx(t,{value:"chat",label:"Live chat",description:"During business hours",iconLeft:"message"})]})}),parameters:{controls:{disable:!0}}},w={render:function(){const[a,n]=p.useState(["react","typescript"]);return e.jsxs(o,{display:"grid",gap:"12",maxW:"xs",children:[e.jsxs(l,{multiple:!0,value:a,onChange:r=>{n(Array.isArray(r)?r:null)},placeholder:"Choose tags...",children:[e.jsx(t,{value:"react",label:"React"}),e.jsx(t,{value:"typescript",label:"TypeScript"}),e.jsx(t,{value:"storybook",label:"Storybook"}),e.jsx(t,{value:"panda",label:"Panda CSS"})]}),e.jsxs(x,{size:"14",color:"text.subtle",children:["Selected: ",(a==null?void 0:a.join(", "))||"none"]})]})},parameters:{controls:{disable:!0}}},j={name:"Ex: Auto Size",render:function(){const[a,n]=p.useState("long"),[r,c]=p.useState(["react","typescript","storybook","text"]),[d,u]=p.useState(["react","typescript","storybook","text"]);return e.jsxs(o,{display:"grid",gap:"24",w:"full",maxW:"2xl",children:[e.jsxs(o,{display:"grid",gap:"12",gridTemplateColumns:"repeat(2, 1fr)",children:[e.jsxs(o,{display:"grid",gap:"8",children:[e.jsx(x,{size:"14",color:"text.subtle",children:'autoSize="false"'}),e.jsx(o,{maxW:"xs",children:e.jsxs(l,{multiple:!0,value:r,onChange:m=>c(Array.isArray(m)?m:null),placeholder:"Choose tags...",children:[e.jsx(t,{value:"react",label:"React"}),e.jsx(t,{value:"typescript",label:"TypeScript"}),e.jsx(t,{value:"storybook",label:"Storybook"}),e.jsx(t,{value:"text",label:"Text"})]})})]}),e.jsxs(o,{display:"grid",gap:"8",children:[e.jsx(x,{size:"14",color:"text.subtle",children:'autoSize="true"'}),e.jsx(o,{maxW:"xs",children:e.jsxs(l,{multiple:!0,autoSize:!0,value:d,onChange:m=>u(Array.isArray(m)?m:null),placeholder:"Choose tags...",children:[e.jsx(t,{value:"react",label:"React"}),e.jsx(t,{value:"typescript",label:"TypeScript"}),e.jsx(t,{value:"storybook",label:"Storybook"}),e.jsx(t,{value:"text",label:"Text"})]})})]})]}),e.jsxs(o,{display:"grid",gap:"12",gridTemplateColumns:"repeat(2, 1fr)",children:[e.jsxs(o,{display:"grid",gap:"8",children:[e.jsx(x,{size:"14",color:"text.subtle",children:"Single select default"}),e.jsx(o,{maxW:"xs",children:e.jsxs(l,{value:a,onChange:n,children:[e.jsx(t,{value:"long",label:"Enim qui laboris sunt qui laborum veniam minim dolor veniam"}),e.jsx(t,{value:"short",label:"Short label"})]})})]}),e.jsxs(o,{display:"grid",gap:"8",children:[e.jsx(x,{size:"14",color:"text.subtle",children:"Single select autoSize"}),e.jsx(o,{maxW:"xs",children:e.jsxs(l,{autoSize:!0,value:a,onChange:n,children:[e.jsx(t,{value:"long",label:"Enim qui laboris sunt qui laborum veniam minim dolor veniam"}),e.jsx(t,{value:"short",label:"Short label"})]})})]})]})]})},parameters:{controls:{disable:!0}}},B={name:"Ex: In FormField",render:function(){const[a,n]=p.useState(null);return e.jsx(o,{w:"sm",children:e.jsx(de,{label:"Team size",labelFor:"team-size",helpText:"Choose the option that best fits your current headcount.",error:!a,errorText:"Select a team size.",children:e.jsxs(l,{id:"team-size",name:"teamSize",value:a,onChange:n,placeholder:"Select team size...",children:[e.jsx(t,{value:"1-10",label:"1–10 people"}),e.jsx(t,{value:"11-50",label:"11–50 people"}),e.jsx(t,{value:"51-200",label:"51–200 people"}),e.jsx(t,{value:"201-plus",label:"201+ people"})]})})})},parameters:{controls:{disable:!0}}},f={name:"Ex: Controlled",render:function(){const[a,n]=p.useState("growth");return e.jsxs(o,{display:"grid",gap:"12",w:"xs",children:[e.jsxs(l,{value:a,onChange:n,placeholder:"Choose a plan...",children:[e.jsx(t,{value:"starter",label:"Starter"}),e.jsx(t,{value:"growth",label:"Growth"}),e.jsx(t,{value:"enterprise",label:"Enterprise"})]}),e.jsxs(x,{size:"14",color:"text.subtle",children:["Selected: ",a||"none"]})]})},parameters:{controls:{disable:!0}}},A={name:"A11y: Keyboard Interaction",render:function(){const[a,n]=p.useState(null);return e.jsx(o,{w:"xs",children:e.jsxs(l,{value:a,onChange:n,placeholder:"Choose an option...",children:[e.jsx(t,{value:"starter",label:"Starter"}),e.jsx(t,{value:"growth",label:"Growth"}),e.jsx(t,{value:"enterprise",label:"Enterprise"})]})})},play:async({canvasElement:i})=>{const a=b(i),n=b(i.ownerDocument.body),r=a.getByRole("combobox",{name:/choose an option/i});r.focus(),s(r).toHaveFocus(),await O.keyboard("{ArrowDown}");const c=n.getByRole("listbox");s(c).toBeVisible(),await O.keyboard("{ArrowDown}{Enter}"),s(a.getByRole("combobox",{name:/growth/i})).toBeVisible()},parameters:{controls:{disable:!0}}},T={name:"Ex: Test Id Reaches The Listbox",render:()=>e.jsx(o,{w:"xs","data-testid":"filters",children:e.jsxs(l,{"data-testid":"status",placeholder:"Choose an option...",children:[e.jsx(t,{value:"starter",label:"Starter"}),e.jsx(t,{value:"growth",label:"Growth"}),e.jsx(t,{value:"enterprise",label:"Enterprise"})]})}),play:async({canvasElement:i})=>{const a=b(i),n=b(i.ownerDocument.body),r=a.getByTestId("status");s(r).toBe(a.getByRole("combobox")),s(r).toHaveAttribute("data-ds-part","trigger");const c=r.closest('[data-ds-component="Select"]');s(c).not.toBe(r),s(c).not.toHaveAttribute("data-testid"),r.focus(),await O.keyboard("{ArrowDown}");const d=await n.findByRole("listbox");s(c==null?void 0:c.contains(d)).toBe(!1);const u=d.closest("[data-ds-portal-root]");s(u).not.toBeNull(),s(u).toHaveAttribute("data-ds-chain","filters>status"),s(u==null?void 0:u.getAttribute("data-ds-chain")).not.toContain("trigger")},parameters:{controls:{disable:!0}}},E={name:"Test: data-ds-component",render:()=>e.jsxs(o,{display:"flex",flexDirection:"column",gap:"8",w:"xs",children:[e.jsxs(l,{"data-testid":"ds-default",placeholder:"Choose an option...",children:[e.jsx(t,{value:"starter",label:"Starter"}),e.jsx(t,{value:"growth",label:"Growth"})]}),e.jsxs(l,{"data-testid":"ds-override","data-ds-component":"StatusSelect",placeholder:"Choose an option...",children:[e.jsx(t,{value:"starter",label:"Starter"}),e.jsx(t,{value:"growth",label:"Growth"})]})]}),play:async({canvasElement:i})=>{const a=b(i),n=b(i.ownerDocument.body),r=a.getByTestId("ds-default");s(r).toHaveAttribute("data-ds-part","trigger");const c=r.closest("[data-ds-component]");s(c).toHaveAttribute("data-ds-component","Select"),s(r).not.toHaveAttribute("data-ds-component");const d=a.getByTestId("ds-override");s(d.closest("[data-ds-component]")).toHaveAttribute("data-ds-component","StatusSelect"),s(d).not.toHaveAttribute("data-ds-component"),r.focus(),await O.keyboard("{ArrowDown}");const u=await n.findByRole("listbox");s(u).not.toHaveAttribute("data-ds-component","Select"),s(u).not.toHaveAttribute("data-ds-component","StatusSelect")},parameters:{controls:{disable:!0}}};var C,z,V;h.parameters={...h.parameters,docs:{...(C=h.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: function DefaultRender(args) {
    return <Box w="xs">
        <Select {...args}>
          <SelectOption value="starter" label="Starter" />
          <SelectOption value="growth" label="Growth" />
          <SelectOption value="enterprise" label="Enterprise" />
        </Select>
      </Box>;
  }
}`,...(V=(z=h.parameters)==null?void 0:z.docs)==null?void 0:V.source}}};var R,D,k;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Uncontrolled',
  render: () => <Box w="xs">
      <Select defaultValue="growth" placeholder="Choose an option...">
        <SelectOption value="starter" label="Starter" />
        <SelectOption value="growth" label="Growth" />
        <SelectOption value="enterprise" label="Enterprise" />
      </Select>
    </Box>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(k=(D=g.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};var F,H,I;S.parameters={...S.parameters,docs:{...(F=S.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <Box display="grid" gap="12" w="xs">
      <Select placeholder="Default">
        <SelectOption value="starter" label="Starter" />
        <SelectOption value="growth" label="Growth" />
      </Select>

      <Select value="growth" placeholder="With value">
        <SelectOption value="starter" label="Starter" />
        <SelectOption value="growth" label="Growth" />
      </Select>

      <Select error placeholder="Error state">
        <SelectOption value="starter" label="Starter" />
        <SelectOption value="growth" label="Growth" />
      </Select>

      <Select disabled value="starter" placeholder="Disabled">
        <SelectOption value="starter" label="Starter" />
        <SelectOption value="growth" label="Growth" />
      </Select>
    </Box>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(I=(H=S.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};var G,W,L;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <Box display="grid" gap="12" w="xs">
      <Select size="sm" placeholder="Small">
        <SelectOption value="a" label="Alpha" />
        <SelectOption value="b" label="Beta" />
      </Select>
      <Select size="md" placeholder="Medium">
        <SelectOption value="a" label="Alpha" />
        <SelectOption value="b" label="Beta" />
      </Select>
      <Select size="lg" placeholder="Large">
        <SelectOption value="a" label="Alpha" />
        <SelectOption value="b" label="Beta" />
      </Select>
      <Select size="xl" placeholder="Extra large">
        <SelectOption value="a" label="Alpha" />
        <SelectOption value="b" label="Beta" />
      </Select>
    </Box>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(L=(W=v.parameters)==null?void 0:W.docs)==null?void 0:L.source}}};var M,q,K;y.parameters={...y.parameters,docs:{...(M=y.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <Box w="xs">
      <Select placeholder="Choose a support channel...">
        <SelectOption value="email" label="Email" description="Best for non-urgent requests" iconLeft="envelope" />
        <SelectOption value="phone" label="Phone" description="Best for urgent issues" iconLeft="at" />
        <SelectOption value="chat" label="Live chat" description="During business hours" iconLeft="message" />
      </Select>
    </Box>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(K=(q=y.parameters)==null?void 0:q.docs)==null?void 0:K.source}}};var P,U,N;w.parameters={...w.parameters,docs:{...(P=w.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: function MultipleRender() {
    const [value, setValue] = useState<string[] | null>(['react', 'typescript']);
    return <Box display="grid" gap="12" maxW="xs">
        <Select multiple value={value} onChange={(nextValue: string | string[] | null) => {
        setValue(Array.isArray(nextValue) ? nextValue : null);
      }} placeholder="Choose tags...">
          <SelectOption value="react" label="React" />
          <SelectOption value="typescript" label="TypeScript" />
          <SelectOption value="storybook" label="Storybook" />
          <SelectOption value="panda" label="Panda CSS" />
        </Select>

        <Text size="14" color="text.subtle">
          Selected: {value?.join(', ') || 'none'}
        </Text>
      </Box>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(N=(U=w.parameters)==null?void 0:U.docs)==null?void 0:N.source}}};var _,J,Q;j.parameters={...j.parameters,docs:{...(_=j.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Ex: Auto Size',
  render: function ExAutoSizeRender() {
    const [singleValue, setSingleValue] = useState<string | string[] | null>('long');
    const [multiScrollValue, setMultiScrollValue] = useState<string[] | null>(['react', 'typescript', 'storybook', 'text']);
    const [multiWrapValue, setMultiWrapValue] = useState<string[] | null>(['react', 'typescript', 'storybook', 'text']);
    return <Box display="grid" gap="24" w="full" maxW="2xl">
        <Box display="grid" gap="12" gridTemplateColumns="repeat(2, 1fr)">
          <Box display="grid" gap="8">
            <Text size="14" color="text.subtle">
              autoSize=&#34;false&#34;
            </Text>
            <Box maxW="xs">
              <Select multiple value={multiScrollValue} onChange={nextValue => setMultiScrollValue(Array.isArray(nextValue) ? nextValue : null)} placeholder="Choose tags...">
                <SelectOption value="react" label="React" />
                <SelectOption value="typescript" label="TypeScript" />
                <SelectOption value="storybook" label="Storybook" />
                <SelectOption value="text" label="Text" />
              </Select>
            </Box>
          </Box>

          <Box display="grid" gap="8">
            <Text size="14" color="text.subtle">
              autoSize=&#34;true&#34;
            </Text>
            <Box maxW="xs">
              <Select multiple autoSize value={multiWrapValue} onChange={nextValue => setMultiWrapValue(Array.isArray(nextValue) ? nextValue : null)} placeholder="Choose tags...">
                <SelectOption value="react" label="React" />
                <SelectOption value="typescript" label="TypeScript" />
                <SelectOption value="storybook" label="Storybook" />
                <SelectOption value="text" label="Text" />
              </Select>
            </Box>
          </Box>
        </Box>

        <Box display="grid" gap="12" gridTemplateColumns="repeat(2, 1fr)">
          <Box display="grid" gap="8">
            <Text size="14" color="text.subtle">
              Single select default
            </Text>
            <Box maxW="xs">
              <Select value={singleValue} onChange={setSingleValue}>
                <SelectOption value="long" label="Enim qui laboris sunt qui laborum veniam minim dolor veniam" />
                <SelectOption value="short" label="Short label" />
              </Select>
            </Box>
          </Box>

          <Box display="grid" gap="8">
            <Text size="14" color="text.subtle">
              Single select autoSize
            </Text>
            <Box maxW="xs">
              <Select autoSize value={singleValue} onChange={setSingleValue}>
                <SelectOption value="long" label="Enim qui laboris sunt qui laborum veniam minim dolor veniam" />
                <SelectOption value="short" label="Short label" />
              </Select>
            </Box>
          </Box>
        </Box>
      </Box>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Q=(J=j.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Y,Z;B.parameters={...B.parameters,docs:{...(X=B.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: 'Ex: In FormField',
  render: function InFormFieldRender() {
    const [value, setValue] = useState<string | string[] | null>(null);
    return <Box w="sm">
        <FormField label="Team size" labelFor="team-size" helpText="Choose the option that best fits your current headcount." error={!value} errorText="Select a team size.">
          <Select id="team-size" name="teamSize" value={value} onChange={setValue} placeholder="Select team size...">
            <SelectOption value="1-10" label="1–10 people" />
            <SelectOption value="11-50" label="11–50 people" />
            <SelectOption value="51-200" label="51–200 people" />
            <SelectOption value="201-plus" label="201+ people" />
          </Select>
        </FormField>
      </Box>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Z=(Y=B.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,te;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'Ex: Controlled',
  render: function ExControlledRender() {
    const [value, setValue] = useState<string | string[] | null>('growth');
    return <Box display="grid" gap="12" w="xs">
        <Select value={value} onChange={setValue} placeholder="Choose a plan...">
          <SelectOption value="starter" label="Starter" />
          <SelectOption value="growth" label="Growth" />
          <SelectOption value="enterprise" label="Enterprise" />
        </Select>

        <Text size="14" color="text.subtle">
          Selected: {value || 'none'}
        </Text>
      </Box>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(te=(ee=f.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ae,le,oe;A.parameters={...A.parameters,docs:{...(ae=A.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: 'A11y: Keyboard Interaction',
  render: function A11yKeyboardInteractionRender() {
    const [value, setValue] = useState<string | string[] | null>(null);
    return <Box w="xs">
        <Select value={value} onChange={setValue} placeholder="Choose an option...">
          <SelectOption value="starter" label="Starter" />
          <SelectOption value="growth" label="Growth" />
          <SelectOption value="enterprise" label="Enterprise" />
        </Select>
      </Box>;
  },
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const canvas = within(canvasElement);
    const screen = within(canvasElement.ownerDocument.body);
    const trigger = canvas.getByRole('combobox', {
      name: /choose an option/i
    });
    trigger.focus();
    expect(trigger).toHaveFocus();
    await userEvent.keyboard('{ArrowDown}');
    const listbox = screen.getByRole('listbox');
    expect(listbox).toBeVisible();
    await userEvent.keyboard('{ArrowDown}{Enter}');
    expect(canvas.getByRole('combobox', {
      name: /growth/i
    })).toBeVisible();
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(oe=(le=A.parameters)==null?void 0:le.docs)==null?void 0:oe.source}}};var re,se,ne;T.parameters={...T.parameters,docs:{...(re=T.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: 'Ex: Test Id Reaches The Listbox',
  render: () => <Box w="xs" data-testid="filters">
      <Select data-testid="status" placeholder="Choose an option...">
        <SelectOption value="starter" label="Starter" />
        <SelectOption value="growth" label="Growth" />
        <SelectOption value="enterprise" label="Enterprise" />
      </Select>
    </Box>,
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const canvas = within(canvasElement);
    const screen = within(canvasElement.ownerDocument.body);

    // The test id stays on the combobox trigger — the element a test drives,
    // and the element an existing selector already points at.
    const trigger = canvas.getByTestId('status');
    expect(trigger).toBe(canvas.getByRole('combobox'));

    // \`data-ds-part\` names the trigger for the collector. It is not a test
    // handle and it never contributes a chain node.
    expect(trigger).toHaveAttribute('data-ds-part', 'trigger');

    // The scope is opened above the root instead, because only the root
    // encloses the portal's position in the React tree.
    const root = trigger.closest('[data-ds-component="Select"]');
    expect(root).not.toBe(trigger);
    expect(root).not.toHaveAttribute('data-testid');
    trigger.focus();
    await userEvent.keyboard('{ArrowDown}');
    const listbox = await screen.findByRole('listbox');

    // The listbox is portaled out of the root, so only the chain connects them.
    expect(root?.contains(listbox)).toBe(false);

    // Found by the unconditional marker, not by the chain value — the chain is
    // absent whenever nothing upstream is tagged, and the boundary still needs
    // to be findable then.
    const portalRoot = listbox.closest('[data-ds-portal-root]');
    expect(portalRoot).not.toBeNull();

    // The trigger's own \`Box\` opens a second scope with the same id; the
    // repeat is collapsed, so the chain reads \`filters>status\`, not
    // \`filters>status>status\`.
    expect(portalRoot).toHaveAttribute('data-ds-chain', 'filters>status');
    expect(portalRoot?.getAttribute('data-ds-chain')).not.toContain('trigger');
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ne=(se=T.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var ie,ce,ue;E.parameters={...E.parameters,docs:{...(ie=E.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  name: 'Test: data-ds-component',
  render: () => <Box display="flex" flexDirection="column" gap="8" w="xs">
      <Select data-testid="ds-default" placeholder="Choose an option...">
        <SelectOption value="starter" label="Starter" />
        <SelectOption value="growth" label="Growth" />
      </Select>
      <Select data-testid="ds-override" data-ds-component="StatusSelect" placeholder="Choose an option...">
        <SelectOption value="starter" label="Starter" />
        <SelectOption value="growth" label="Growth" />
      </Select>
    </Box>,
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const canvas = within(canvasElement);
    const screen = within(canvasElement.ownerDocument.body);

    // Select forwards its rest props to the combobox trigger, so the test id
    // lands there and the root is reached from it.
    const trigger = canvas.getByTestId('ds-default');
    expect(trigger).toHaveAttribute('data-ds-part', 'trigger');

    // Emitted automatically on the root, without an author opting in, and it
    // must not leak onto the trigger along with the rest props.
    const root = trigger.closest('[data-ds-component]');
    expect(root).toHaveAttribute('data-ds-component', 'Select');
    expect(trigger).not.toHaveAttribute('data-ds-component');

    // An explicitly passed value wins, still on the root and not the trigger.
    const overriddenTrigger = canvas.getByTestId('ds-override');
    expect(overriddenTrigger.closest('[data-ds-component]')).toHaveAttribute('data-ds-component', 'StatusSelect');
    expect(overriddenTrigger).not.toHaveAttribute('data-ds-component');

    // The portaled listbox is \`List\`, so it never reports as the Select.
    trigger.focus();
    await userEvent.keyboard('{ArrowDown}');
    const listbox = await screen.findByRole('listbox');
    expect(listbox).not.toHaveAttribute('data-ds-component', 'Select');
    expect(listbox).not.toHaveAttribute('data-ds-component', 'StatusSelect');
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ue=(ce=E.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};const Ie=["Default","Uncontrolled","States","Sizes","WithDescriptionsAndIcons","Multiple","ExAutoSize","InFormField","ExControlled","A11yKeyboardInteraction","TestIdReachesPortaledListbox","DsComponentAttribute"];export{A as A11yKeyboardInteraction,h as Default,E as DsComponentAttribute,j as ExAutoSize,f as ExControlled,B as InFormField,w as Multiple,v as Sizes,S as States,T as TestIdReachesPortaledListbox,g as Uncontrolled,y as WithDescriptionsAndIcons,Ie as __namedExportsOrder,He as default};
