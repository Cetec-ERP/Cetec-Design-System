import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as x}from"./index-BKyFwriW.js";import{w as d,e as r,u as O}from"./index-DPYJpPba.js";import{B as o}from"./dsComponent-C9MKQHyf.js";import{F as de}from"./FormField-BYHnECPg.js";import{T as b}from"./Text-D8Iybk0G.js";import{S as l,a as t}from"./Select-vfg7N9DL.js";import"./_commonjsHelpers-CqkleIqs.js";import"./FieldContext-D6URyQos.js";import"./Icon-DRevkkti.js";import"./Label-DImDCiy5.js";import"./Tooltip-DHDdNQNG.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";import"./menu-DCBTLCj4.js";import"./dsPart-nnoJM9m6.js";import"./Chip-CSUTKv0i.js";import"./IconConfig-DjU6B6kV.js";import"./Spinner-j81TjN3d.js";import"./ListItem-D0FKyYIB.js";import"./HighlightText-D8H0OTpl.js";import"./Checkbox-7JccJzRS.js";import"./Divider-D10oyTgB.js";import"./Toggle-0AJPoSF3.js";const Fe={title:"Components/Select",component:l,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Custom listbox-style select for controlled and uncontrolled single and multi-select flows. Use with `FormField` for labels, help text, and error messaging."}}},args:{placeholder:"Choose an option..."},argTypes:{value:{control:"text",description:"Controlled selected value for single-select usage"},placeholder:{control:"text",description:"Display text when no value is selected"},disabled:{control:"boolean",description:"Disabled state"},error:{control:"boolean",description:"Error state styling"},multiple:{control:"boolean",description:"Allow multiple selected values"},size:{control:"select",options:["sm","md","lg","xl"]},density:{control:"select",options:["compact","comfortable","spacious"]},autoSize:{control:"boolean",description:"Allow the trigger content to grow vertically instead of staying on one scrollable line"}}},h={render:function(a){return e.jsx(o,{w:"xs",children:e.jsxs(l,{...a,children:[e.jsx(t,{value:"starter",label:"Starter"}),e.jsx(t,{value:"growth",label:"Growth"}),e.jsx(t,{value:"enterprise",label:"Enterprise"})]})})}},g={name:"Uncontrolled",render:()=>e.jsx(o,{w:"xs",children:e.jsxs(l,{defaultValue:"growth",placeholder:"Choose an option...",children:[e.jsx(t,{value:"starter",label:"Starter"}),e.jsx(t,{value:"growth",label:"Growth"}),e.jsx(t,{value:"enterprise",label:"Enterprise"})]})}),parameters:{controls:{disable:!0}}},S={render:()=>e.jsxs(o,{display:"grid",gap:"12",w:"xs",children:[e.jsxs(l,{placeholder:"Default",children:[e.jsx(t,{value:"starter",label:"Starter"}),e.jsx(t,{value:"growth",label:"Growth"})]}),e.jsxs(l,{value:"growth",placeholder:"With value",children:[e.jsx(t,{value:"starter",label:"Starter"}),e.jsx(t,{value:"growth",label:"Growth"})]}),e.jsxs(l,{error:!0,placeholder:"Error state",children:[e.jsx(t,{value:"starter",label:"Starter"}),e.jsx(t,{value:"growth",label:"Growth"})]}),e.jsxs(l,{disabled:!0,value:"starter",placeholder:"Disabled",children:[e.jsx(t,{value:"starter",label:"Starter"}),e.jsx(t,{value:"growth",label:"Growth"})]})]}),parameters:{controls:{disable:!0}}},v={render:()=>e.jsxs(o,{display:"grid",gap:"12",w:"xs",children:[e.jsxs(l,{size:"sm",placeholder:"Small",children:[e.jsx(t,{value:"a",label:"Alpha"}),e.jsx(t,{value:"b",label:"Beta"})]}),e.jsxs(l,{size:"md",placeholder:"Medium",children:[e.jsx(t,{value:"a",label:"Alpha"}),e.jsx(t,{value:"b",label:"Beta"})]}),e.jsxs(l,{size:"lg",placeholder:"Large",children:[e.jsx(t,{value:"a",label:"Alpha"}),e.jsx(t,{value:"b",label:"Beta"})]}),e.jsxs(l,{size:"xl",placeholder:"Extra large",children:[e.jsx(t,{value:"a",label:"Alpha"}),e.jsx(t,{value:"b",label:"Beta"})]})]}),parameters:{controls:{disable:!0}}},y={render:()=>e.jsx(o,{w:"xs",children:e.jsxs(l,{placeholder:"Choose a support channel...",children:[e.jsx(t,{value:"email",label:"Email",description:"Best for non-urgent requests",iconLeft:"envelope"}),e.jsx(t,{value:"phone",label:"Phone",description:"Best for urgent issues",iconLeft:"at"}),e.jsx(t,{value:"chat",label:"Live chat",description:"During business hours",iconLeft:"message"})]})}),parameters:{controls:{disable:!0}}},w={render:function(){const[a,s]=x.useState(["react","typescript"]);return e.jsxs(o,{display:"grid",gap:"12",maxW:"xs",children:[e.jsxs(l,{multiple:!0,value:a,onChange:n=>{s(Array.isArray(n)?n:null)},placeholder:"Choose tags...",children:[e.jsx(t,{value:"react",label:"React"}),e.jsx(t,{value:"typescript",label:"TypeScript"}),e.jsx(t,{value:"storybook",label:"Storybook"}),e.jsx(t,{value:"panda",label:"Panda CSS"})]}),e.jsxs(b,{size:"14",color:"text.subtle",children:["Selected: ",(a==null?void 0:a.join(", "))||"none"]})]})},parameters:{controls:{disable:!0}}},j={name:"Ex: Auto Size",render:function(){const[a,s]=x.useState("long"),[n,c]=x.useState(["react","typescript","storybook","text"]),[p,u]=x.useState(["react","typescript","storybook","text"]);return e.jsxs(o,{display:"grid",gap:"24",w:"full",maxW:"2xl",children:[e.jsxs(o,{display:"grid",gap:"12",gridTemplateColumns:"repeat(2, 1fr)",children:[e.jsxs(o,{display:"grid",gap:"8",children:[e.jsx(b,{size:"14",color:"text.subtle",children:'autoSize="false"'}),e.jsx(o,{maxW:"xs",children:e.jsxs(l,{multiple:!0,value:n,onChange:m=>c(Array.isArray(m)?m:null),placeholder:"Choose tags...",children:[e.jsx(t,{value:"react",label:"React"}),e.jsx(t,{value:"typescript",label:"TypeScript"}),e.jsx(t,{value:"storybook",label:"Storybook"}),e.jsx(t,{value:"text",label:"Text"})]})})]}),e.jsxs(o,{display:"grid",gap:"8",children:[e.jsx(b,{size:"14",color:"text.subtle",children:'autoSize="true"'}),e.jsx(o,{maxW:"xs",children:e.jsxs(l,{multiple:!0,autoSize:!0,value:p,onChange:m=>u(Array.isArray(m)?m:null),placeholder:"Choose tags...",children:[e.jsx(t,{value:"react",label:"React"}),e.jsx(t,{value:"typescript",label:"TypeScript"}),e.jsx(t,{value:"storybook",label:"Storybook"}),e.jsx(t,{value:"text",label:"Text"})]})})]})]}),e.jsxs(o,{display:"grid",gap:"12",gridTemplateColumns:"repeat(2, 1fr)",children:[e.jsxs(o,{display:"grid",gap:"8",children:[e.jsx(b,{size:"14",color:"text.subtle",children:"Single select default"}),e.jsx(o,{maxW:"xs",children:e.jsxs(l,{value:a,onChange:s,children:[e.jsx(t,{value:"long",label:"Enim qui laboris sunt qui laborum veniam minim dolor veniam"}),e.jsx(t,{value:"short",label:"Short label"})]})})]}),e.jsxs(o,{display:"grid",gap:"8",children:[e.jsx(b,{size:"14",color:"text.subtle",children:"Single select autoSize"}),e.jsx(o,{maxW:"xs",children:e.jsxs(l,{autoSize:!0,value:a,onChange:s,children:[e.jsx(t,{value:"long",label:"Enim qui laboris sunt qui laborum veniam minim dolor veniam"}),e.jsx(t,{value:"short",label:"Short label"})]})})]})]})]})},parameters:{controls:{disable:!0}}},B={name:"Ex: In FormField",render:function(){const[a,s]=x.useState(null);return e.jsx(o,{w:"sm",children:e.jsx(de,{label:"Team size",labelFor:"team-size",helpText:"Choose the option that best fits your current headcount.",error:!a,errorText:"Select a team size.",children:e.jsxs(l,{id:"team-size",name:"teamSize",value:a,onChange:s,placeholder:"Select team size...",children:[e.jsx(t,{value:"1-10",label:"1–10 people"}),e.jsx(t,{value:"11-50",label:"11–50 people"}),e.jsx(t,{value:"51-200",label:"51–200 people"}),e.jsx(t,{value:"201-plus",label:"201+ people"})]})})})},parameters:{controls:{disable:!0}}},f={name:"Ex: Controlled",render:function(){const[a,s]=x.useState("growth");return e.jsxs(o,{display:"grid",gap:"12",w:"xs",children:[e.jsxs(l,{value:a,onChange:s,placeholder:"Choose a plan...",children:[e.jsx(t,{value:"starter",label:"Starter"}),e.jsx(t,{value:"growth",label:"Growth"}),e.jsx(t,{value:"enterprise",label:"Enterprise"})]}),e.jsxs(b,{size:"14",color:"text.subtle",children:["Selected: ",a||"none"]})]})},parameters:{controls:{disable:!0}}},A={name:"A11y: Keyboard Interaction",render:function(){const[a,s]=x.useState(null);return e.jsx(o,{w:"xs",children:e.jsxs(l,{value:a,onChange:s,placeholder:"Choose an option...",children:[e.jsx(t,{value:"starter",label:"Starter"}),e.jsx(t,{value:"growth",label:"Growth"}),e.jsx(t,{value:"enterprise",label:"Enterprise"})]})})},play:async({canvasElement:i})=>{const a=d(i),s=d(i.ownerDocument.body),n=a.getByRole("combobox",{name:/choose an option/i});n.focus(),r(n).toHaveFocus(),await O.keyboard("{ArrowDown}");const c=s.getByRole("listbox");r(c).toBeVisible(),await O.keyboard("{ArrowDown}{Enter}"),r(a.getByRole("combobox",{name:/growth/i})).toBeVisible()},parameters:{controls:{disable:!0}}},E={name:"Ex: Test Id Reaches The Listbox",render:()=>e.jsx(o,{w:"xs","data-testid":"filters",children:e.jsxs(l,{"data-testid":"status",placeholder:"Choose an option...",children:[e.jsx(t,{value:"starter",label:"Starter"}),e.jsx(t,{value:"growth",label:"Growth"}),e.jsx(t,{value:"enterprise",label:"Enterprise"})]})}),play:async({canvasElement:i})=>{const a=d(i),s=d(i.ownerDocument.body),n=a.getByTestId("status"),c=a.getByRole("combobox");r(n).not.toBe(c),r(n).toContainElement(c),r(c).not.toHaveAttribute("data-testid"),r(c).toHaveAttribute("data-ds-part","trigger"),r(n).not.toHaveAttribute("data-ds-part"),c.focus(),await O.keyboard("{ArrowDown}");const p=await s.findByRole("listbox");r(n.contains(p)).toBe(!1);const u=p.closest("[data-ds-chain]");r(u).toHaveAttribute("data-ds-chain","filters>status"),r(u==null?void 0:u.getAttribute("data-ds-chain")).not.toContain("trigger")},parameters:{controls:{disable:!0}}},C={name:"Test: data-ds-component",render:()=>e.jsxs(o,{display:"flex",flexDirection:"column",gap:"8",w:"xs",children:[e.jsxs(l,{"data-testid":"ds-default",placeholder:"Choose an option...",children:[e.jsx(t,{value:"starter",label:"Starter"}),e.jsx(t,{value:"growth",label:"Growth"})]}),e.jsxs(l,{"data-testid":"ds-override","data-ds-component":"StatusSelect",placeholder:"Choose an option...",children:[e.jsx(t,{value:"starter",label:"Starter"}),e.jsx(t,{value:"growth",label:"Growth"})]})]}),play:async({canvasElement:i})=>{const a=d(i),s=d(i.ownerDocument.body),n=a.getByTestId("ds-default");r(n).toHaveAttribute("data-ds-component","Select");const c=d(n).getByRole("combobox");r(c).toHaveAttribute("data-ds-part","trigger"),r(c).not.toHaveAttribute("data-ds-component");const p=a.getByTestId("ds-override");r(p).toHaveAttribute("data-ds-component","StatusSelect"),r(d(p).getByRole("combobox")).not.toHaveAttribute("data-ds-component"),c.focus(),await O.keyboard("{ArrowDown}");const u=await s.findByRole("listbox");r(u).not.toHaveAttribute("data-ds-component","Select"),r(u).not.toHaveAttribute("data-ds-component","StatusSelect")},parameters:{controls:{disable:!0}}};var T,z,R;h.parameters={...h.parameters,docs:{...(T=h.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: function DefaultRender(args) {
    return <Box w="xs">
        <Select {...args}>
          <SelectOption value="starter" label="Starter" />
          <SelectOption value="growth" label="Growth" />
          <SelectOption value="enterprise" label="Enterprise" />
        </Select>
      </Box>;
  }
}`,...(R=(z=h.parameters)==null?void 0:z.docs)==null?void 0:R.source}}};var V,D,k;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(k=(D=g.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};var H,F,I;S.parameters={...S.parameters,docs:{...(H=S.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(I=(F=S.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var G,W,L;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(K=(q=y.parameters)==null?void 0:q.docs)==null?void 0:K.source}}};var P,U,_;w.parameters={...w.parameters,docs:{...(P=w.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(_=(U=w.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};var J,N,Q;j.parameters={...j.parameters,docs:{...(J=j.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Q=(N=j.parameters)==null?void 0:N.docs)==null?void 0:Q.source}}};var X,Y,Z;B.parameters={...B.parameters,docs:{...(X=B.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(oe=(le=A.parameters)==null?void 0:le.docs)==null?void 0:oe.source}}};var re,se,ne;E.parameters={...E.parameters,docs:{...(re=E.parameters)==null?void 0:re.docs,source:{originalSource:`{
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

    // The test id is written on the root, not on the combobox trigger, so the
    // chain scope it opens encloses the portal the trigger only sits beside.
    const root = canvas.getByTestId('status');
    const trigger = canvas.getByRole('combobox');
    expect(root).not.toBe(trigger);
    expect(root).toContainElement(trigger);
    expect(trigger).not.toHaveAttribute('data-testid');

    // The trigger keeps a stable query handle through \`data-ds-part\`, which the
    // component emits on its own. It marks the trigger only, never the root.
    expect(trigger).toHaveAttribute('data-ds-part', 'trigger');
    expect(root).not.toHaveAttribute('data-ds-part');
    trigger.focus();
    await userEvent.keyboard('{ArrowDown}');
    const listbox = await screen.findByRole('listbox');

    // The listbox is portaled out of the root, so only the chain connects them.
    expect(root.contains(listbox)).toBe(false);
    const chainRoot = listbox.closest('[data-ds-chain]');

    // The chain is built from \`data-testid\` alone, so the trigger's
    // \`data-ds-part\` contributes no node to it.
    expect(chainRoot).toHaveAttribute('data-ds-chain', 'filters>status');
    expect(chainRoot?.getAttribute('data-ds-chain')).not.toContain('trigger');
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ne=(se=E.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var ie,ce,ue;C.parameters={...C.parameters,docs:{...(ie=C.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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

    // Emitted automatically on the root, without an author opting in.
    const root = canvas.getByTestId('ds-default');
    expect(root).toHaveAttribute('data-ds-component', 'Select');

    // Select forwards its rest props to the combobox trigger, so the attribute
    // is pulled out of them and must not leak onto the trigger.
    const trigger = within(root).getByRole('combobox');
    expect(trigger).toHaveAttribute('data-ds-part', 'trigger');
    expect(trigger).not.toHaveAttribute('data-ds-component');

    // An explicitly passed value wins, still on the root and not the trigger.
    const overriddenRoot = canvas.getByTestId('ds-override');
    expect(overriddenRoot).toHaveAttribute('data-ds-component', 'StatusSelect');
    expect(within(overriddenRoot).getByRole('combobox')).not.toHaveAttribute('data-ds-component');

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
}`,...(ue=(ce=C.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};const Ie=["Default","Uncontrolled","States","Sizes","WithDescriptionsAndIcons","Multiple","ExAutoSize","InFormField","ExControlled","A11yKeyboardInteraction","TestIdReachesPortaledListbox","DsComponentAttribute"];export{A as A11yKeyboardInteraction,h as Default,C as DsComponentAttribute,j as ExAutoSize,f as ExControlled,B as InFormField,w as Multiple,v as Sizes,S as States,E as TestIdReachesPortaledListbox,g as Uncontrolled,y as WithDescriptionsAndIcons,Ie as __namedExportsOrder,Fe as default};
