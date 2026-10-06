import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as b}from"./index-BKyFwriW.js";import{w as p,u as m,e as r}from"./index-L8OlCEhE.js";import{B as n}from"./dsComponent-BG2jnRr7.js";import{F as Se}from"./FormField-BxgtcHGz.js";import{T as h}from"./Text-tIn1sg48.js";import{S as l,a as t}from"./Select-DZA9xYsv.js";import"./_commonjsHelpers-CqkleIqs.js";import"./FieldContext-D6URyQos.js";import"./Icon-CrwLKW7B.js";import"./Label-DM3dqKkX.js";import"./Tooltip-GoULuPEB.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";import"./menu-BvaagRwT.js";import"./FloatingLayerContext-BryH8O9I.js";import"./dsPart-nnoJM9m6.js";import"./Chip-D-xP8nwV.js";import"./IconConfig-BuieZFlx.js";import"./Spinner-PLunUSsK.js";import"./ListItem-dzEYpn6u.js";import"./HighlightText-DKF3xkQK.js";import"./Checkbox-BKc0omfg.js";import"./Divider-Dbp7vcYx.js";import"./Toggle-mlz1wkXL.js";const _e={title:"Components/Select",component:l,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Custom listbox-style select for controlled and uncontrolled single and multi-select flows. Use with `FormField` for labels, help text, and error messaging."}}},args:{placeholder:"Choose an option..."},argTypes:{value:{control:"text",description:"Controlled selected value for single-select usage"},placeholder:{control:"text",description:"Display text when no value is selected"},disabled:{control:"boolean",description:"Disabled state"},error:{control:"boolean",description:"Error state styling"},multiple:{control:"boolean",description:"Allow multiple selected values"},size:{control:"select",options:["sm","md","lg","xl"]},density:{control:"select",options:["compact","comfortable","spacious"]},autoSize:{control:"boolean",description:"Allow the trigger content to grow vertically instead of staying on one scrollable line"}}},g={render:function(a){return e.jsx(n,{w:"xs",children:e.jsxs(l,{...a,children:[e.jsx(t,{value:"starter",label:"Starter"}),e.jsx(t,{value:"growth",label:"Growth"}),e.jsx(t,{value:"enterprise",label:"Enterprise"})]})})}},S={name:"Uncontrolled",render:()=>e.jsx(n,{w:"xs",children:e.jsxs(l,{defaultValue:"growth",placeholder:"Choose an option...",children:[e.jsx(t,{value:"starter",label:"Starter"}),e.jsx(t,{value:"growth",label:"Growth"}),e.jsx(t,{value:"enterprise",label:"Enterprise"})]})}),parameters:{controls:{disable:!0}}},v={render:()=>e.jsxs(n,{display:"grid",gap:"12",w:"xs",children:[e.jsxs(l,{placeholder:"Default",children:[e.jsx(t,{value:"starter",label:"Starter"}),e.jsx(t,{value:"growth",label:"Growth"})]}),e.jsxs(l,{value:"growth",placeholder:"With value",children:[e.jsx(t,{value:"starter",label:"Starter"}),e.jsx(t,{value:"growth",label:"Growth"})]}),e.jsxs(l,{error:!0,placeholder:"Error state",children:[e.jsx(t,{value:"starter",label:"Starter"}),e.jsx(t,{value:"growth",label:"Growth"})]}),e.jsxs(l,{disabled:!0,value:"starter",placeholder:"Disabled",children:[e.jsx(t,{value:"starter",label:"Starter"}),e.jsx(t,{value:"growth",label:"Growth"})]})]}),parameters:{controls:{disable:!0}}},y={render:()=>e.jsxs(n,{display:"grid",gap:"12",w:"xs",children:[e.jsxs(l,{size:"sm",placeholder:"Small",children:[e.jsx(t,{value:"a",label:"Alpha"}),e.jsx(t,{value:"b",label:"Beta"})]}),e.jsxs(l,{size:"md",placeholder:"Medium",children:[e.jsx(t,{value:"a",label:"Alpha"}),e.jsx(t,{value:"b",label:"Beta"})]}),e.jsxs(l,{size:"lg",placeholder:"Large",children:[e.jsx(t,{value:"a",label:"Alpha"}),e.jsx(t,{value:"b",label:"Beta"})]}),e.jsxs(l,{size:"xl",placeholder:"Extra large",children:[e.jsx(t,{value:"a",label:"Alpha"}),e.jsx(t,{value:"b",label:"Beta"})]})]}),parameters:{controls:{disable:!0}}},w={render:()=>e.jsx(n,{w:"xs",children:e.jsxs(l,{placeholder:"Choose a support channel...",children:[e.jsx(t,{value:"email",label:"Email",description:"Best for non-urgent requests",iconLeft:"envelope"}),e.jsx(t,{value:"phone",label:"Phone",description:"Best for urgent issues",iconLeft:"at"}),e.jsx(t,{value:"chat",label:"Live chat",description:"During business hours",iconLeft:"message"})]})}),parameters:{controls:{disable:!0}}},B={render:function(){const[a,i]=b.useState(["react","typescript"]);return e.jsxs(n,{display:"grid",gap:"12",maxW:"xs",children:[e.jsxs(l,{multiple:!0,value:a,onChange:s=>{i(Array.isArray(s)?s:null)},placeholder:"Choose tags...",children:[e.jsx(t,{value:"react",label:"React"}),e.jsx(t,{value:"typescript",label:"TypeScript"}),e.jsx(t,{value:"storybook",label:"Storybook"}),e.jsx(t,{value:"panda",label:"Panda CSS"})]}),e.jsxs(h,{size:"14",color:"text.subtle",children:["Selected: ",(a==null?void 0:a.join(", "))||"none"]})]})},parameters:{controls:{disable:!0}}},V=Array.from({length:40},(o,a)=>`${a+1} - Option ${a+1}`),j={name:"Ex: Long Option List",render:()=>e.jsxs(n,{display:"flex",flexDirection:"column",gap:"8",maxW:"xs",children:[e.jsx(l,{"data-testid":"long-multiple",multiple:!0,placeholder:"Choose options...",children:V.map((o,a)=>e.jsx(t,{value:String(a+1),label:o},o))}),e.jsx(l,{"data-testid":"long-selected-near-end",defaultValue:"35",children:V.map((o,a)=>e.jsx(t,{value:String(a+1),label:o},o))})]}),play:async({canvasElement:o})=>{const a=p(o),i=p(o.ownerDocument.body);await m.click(a.getByTestId("long-multiple"));const s=await i.findByRole("listbox"),c=o.ownerDocument.documentElement.clientHeight,u=s.getBoundingClientRect();r(u.top).toBeGreaterThanOrEqual(0),r(u.bottom).toBeLessThanOrEqual(c),r(getComputedStyle(s).overflowY).toBe("auto"),r(s.scrollHeight).toBeGreaterThan(s.clientHeight),await m.keyboard("{Escape}"),await m.click(a.getByTestId("long-selected-near-end"));const d=await i.findByRole("listbox"),x=p(d).getByRole("option",{selected:!0}),R=d.getBoundingClientRect(),z=x.getBoundingClientRect();r(z.top).toBeGreaterThanOrEqual(R.top),r(z.bottom).toBeLessThanOrEqual(R.bottom)},parameters:{controls:{disable:!0}}},f={name:"Ex: Auto Size",render:function(){const[a,i]=b.useState("long"),[s,c]=b.useState(["react","typescript","storybook","text"]),[u,d]=b.useState(["react","typescript","storybook","text"]);return e.jsxs(n,{display:"grid",gap:"24",w:"full",maxW:"2xl",children:[e.jsxs(n,{display:"grid",gap:"12",gridTemplateColumns:"repeat(2, 1fr)",children:[e.jsxs(n,{display:"grid",gap:"8",children:[e.jsx(h,{size:"14",color:"text.subtle",children:'autoSize="false"'}),e.jsx(n,{maxW:"xs",children:e.jsxs(l,{multiple:!0,value:s,onChange:x=>c(Array.isArray(x)?x:null),placeholder:"Choose tags...",children:[e.jsx(t,{value:"react",label:"React"}),e.jsx(t,{value:"typescript",label:"TypeScript"}),e.jsx(t,{value:"storybook",label:"Storybook"}),e.jsx(t,{value:"text",label:"Text"})]})})]}),e.jsxs(n,{display:"grid",gap:"8",children:[e.jsx(h,{size:"14",color:"text.subtle",children:'autoSize="true"'}),e.jsx(n,{maxW:"xs",children:e.jsxs(l,{multiple:!0,autoSize:!0,value:u,onChange:x=>d(Array.isArray(x)?x:null),placeholder:"Choose tags...",children:[e.jsx(t,{value:"react",label:"React"}),e.jsx(t,{value:"typescript",label:"TypeScript"}),e.jsx(t,{value:"storybook",label:"Storybook"}),e.jsx(t,{value:"text",label:"Text"})]})})]})]}),e.jsxs(n,{display:"grid",gap:"12",gridTemplateColumns:"repeat(2, 1fr)",children:[e.jsxs(n,{display:"grid",gap:"8",children:[e.jsx(h,{size:"14",color:"text.subtle",children:"Single select default"}),e.jsx(n,{maxW:"xs",children:e.jsxs(l,{value:a,onChange:i,children:[e.jsx(t,{value:"long",label:"Enim qui laboris sunt qui laborum veniam minim dolor veniam"}),e.jsx(t,{value:"short",label:"Short label"})]})})]}),e.jsxs(n,{display:"grid",gap:"8",children:[e.jsx(h,{size:"14",color:"text.subtle",children:"Single select autoSize"}),e.jsx(n,{maxW:"xs",children:e.jsxs(l,{autoSize:!0,value:a,onChange:i,children:[e.jsx(t,{value:"long",label:"Enim qui laboris sunt qui laborum veniam minim dolor veniam"}),e.jsx(t,{value:"short",label:"Short label"})]})})]})]})]})},parameters:{controls:{disable:!0}}},O={name:"Ex: In FormField",render:function(){const[a,i]=b.useState(null);return e.jsx(n,{w:"sm",children:e.jsx(Se,{label:"Team size",labelFor:"team-size",helpText:"Choose the option that best fits your current headcount.",error:!a,errorText:"Select a team size.",children:e.jsxs(l,{id:"team-size",name:"teamSize",value:a,onChange:i,placeholder:"Select team size...",children:[e.jsx(t,{value:"1-10",label:"1–10 people"}),e.jsx(t,{value:"11-50",label:"11–50 people"}),e.jsx(t,{value:"51-200",label:"51–200 people"}),e.jsx(t,{value:"201-plus",label:"201+ people"})]})})})},parameters:{controls:{disable:!0}}},E={name:"Ex: Controlled",render:function(){const[a,i]=b.useState("growth");return e.jsxs(n,{display:"grid",gap:"12",w:"xs",children:[e.jsxs(l,{value:a,onChange:i,placeholder:"Choose a plan...",children:[e.jsx(t,{value:"starter",label:"Starter"}),e.jsx(t,{value:"growth",label:"Growth"}),e.jsx(t,{value:"enterprise",label:"Enterprise"})]}),e.jsxs(h,{size:"14",color:"text.subtle",children:["Selected: ",a||"none"]})]})},parameters:{controls:{disable:!0}}},T={name:"A11y: Keyboard Interaction",render:function(){const[a,i]=b.useState(null);return e.jsx(n,{w:"xs",children:e.jsxs(l,{value:a,onChange:i,placeholder:"Choose an option...",children:[e.jsx(t,{value:"starter",label:"Starter"}),e.jsx(t,{value:"growth",label:"Growth"}),e.jsx(t,{value:"enterprise",label:"Enterprise"})]})})},play:async({canvasElement:o})=>{const a=p(o),i=p(o.ownerDocument.body),s=a.getByRole("combobox",{name:/choose an option/i});s.focus(),r(s).toHaveFocus(),await m.keyboard("{ArrowDown}");const c=i.getByRole("listbox");r(c).toBeVisible(),await m.keyboard("{ArrowDown}{Enter}"),r(a.getByRole("combobox",{name:/growth/i})).toBeVisible()},parameters:{controls:{disable:!0}}},A={name:"Ex: Test Id Reaches The Listbox",render:()=>e.jsx(n,{w:"xs","data-testid":"filters",children:e.jsxs(l,{"data-testid":"status",placeholder:"Choose an option...",children:[e.jsx(t,{value:"starter",label:"Starter"}),e.jsx(t,{value:"growth",label:"Growth"}),e.jsx(t,{value:"enterprise",label:"Enterprise"})]})}),play:async({canvasElement:o})=>{const a=p(o),i=p(o.ownerDocument.body),s=a.getByTestId("status");r(s).toBe(a.getByRole("combobox")),r(s).toHaveAttribute("data-ds-part","trigger");const c=s.closest('[data-ds-component="Select"]');r(c).not.toBe(s),r(c).not.toHaveAttribute("data-testid"),s.focus(),await m.keyboard("{ArrowDown}");const u=await i.findByRole("listbox");r(c==null?void 0:c.contains(u)).toBe(!1);const d=u.closest("[data-ds-portal-root]");r(d).not.toBeNull(),r(d).toHaveAttribute("data-ds-chain","filters>status"),r(d==null?void 0:d.getAttribute("data-ds-chain")).not.toContain("trigger")},parameters:{controls:{disable:!0}}},C={name:"Test: data-ds-component",render:()=>e.jsxs(n,{display:"flex",flexDirection:"column",gap:"8",w:"xs",children:[e.jsxs(l,{"data-testid":"ds-default",placeholder:"Choose an option...",children:[e.jsx(t,{value:"starter",label:"Starter"}),e.jsx(t,{value:"growth",label:"Growth"})]}),e.jsxs(l,{"data-testid":"ds-override","data-ds-component":"StatusSelect",placeholder:"Choose an option...",children:[e.jsx(t,{value:"starter",label:"Starter"}),e.jsx(t,{value:"growth",label:"Growth"})]})]}),play:async({canvasElement:o})=>{const a=p(o),i=p(o.ownerDocument.body),s=a.getByTestId("ds-default");r(s).toHaveAttribute("data-ds-part","trigger");const c=s.closest("[data-ds-component]");r(c).toHaveAttribute("data-ds-component","Select"),r(s).not.toHaveAttribute("data-ds-component");const u=a.getByTestId("ds-override");r(u.closest("[data-ds-component]")).toHaveAttribute("data-ds-component","StatusSelect"),r(u).not.toHaveAttribute("data-ds-component"),s.focus(),await m.keyboard("{ArrowDown}");const d=await i.findByRole("listbox");r(d).not.toHaveAttribute("data-ds-component","Select"),r(d).not.toHaveAttribute("data-ds-component","StatusSelect")},parameters:{controls:{disable:!0}}};var L,D,H;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: function DefaultRender(args) {
    return <Box w="xs">
        <Select {...args}>
          <SelectOption value="starter" label="Starter" />
          <SelectOption value="growth" label="Growth" />
          <SelectOption value="enterprise" label="Enterprise" />
        </Select>
      </Box>;
  }
}`,...(H=(D=g.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};var k,I,G;S.parameters={...S.parameters,docs:{...(k=S.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(G=(I=S.parameters)==null?void 0:I.docs)==null?void 0:G.source}}};var F,W,q;v.parameters={...v.parameters,docs:{...(F=v.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(q=(W=v.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var M,P,_;y.parameters={...y.parameters,docs:{...(M=y.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(_=(P=y.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var N,K,U;w.parameters={...w.parameters,docs:{...(N=w.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(U=(K=w.parameters)==null?void 0:K.docs)==null?void 0:U.source}}};var Y,$,J;B.parameters={...B.parameters,docs:{...(Y=B.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(J=($=B.parameters)==null?void 0:$.docs)==null?void 0:J.source}}};var Q,X,Z;j.parameters={...j.parameters,docs:{...(Q=j.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'Ex: Long Option List',
  render: () => <Box display="flex" flexDirection="column" gap="8" maxW="xs">
      <Select data-testid="long-multiple" multiple placeholder="Choose options...">
        {LONG_OPTION_LABELS.map((label, index) => <SelectOption key={label} value={String(index + 1)} label={label} />)}
      </Select>
      <Select data-testid="long-selected-near-end" defaultValue="35">
        {LONG_OPTION_LABELS.map((label, index) => <SelectOption key={label} value={String(index + 1)} label={label} />)}
      </Select>
    </Box>,
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const canvas = within(canvasElement);
    const screen = within(canvasElement.ownerDocument.body);
    await userEvent.click(canvas.getByTestId('long-multiple'));
    const listbox = await screen.findByRole('listbox');

    // The listbox is capped to the space beside the trigger and scrolls,
    // rather than running past the viewport edge.
    const viewportHeight = canvasElement.ownerDocument.documentElement.clientHeight;
    const rect = listbox.getBoundingClientRect();
    expect(rect.top).toBeGreaterThanOrEqual(0);
    expect(rect.bottom).toBeLessThanOrEqual(viewportHeight);
    expect(getComputedStyle(listbox).overflowY).toBe('auto');
    expect(listbox.scrollHeight).toBeGreaterThan(listbox.clientHeight);
    await userEvent.keyboard('{Escape}');

    // A selected option past the fold is scrolled into view on open.
    await userEvent.click(canvas.getByTestId('long-selected-near-end'));
    const selectedListbox = await screen.findByRole('listbox');
    const selectedOption = within(selectedListbox).getByRole('option', {
      selected: true
    });
    const listboxRect = selectedListbox.getBoundingClientRect();
    const optionRect = selectedOption.getBoundingClientRect();
    expect(optionRect.top).toBeGreaterThanOrEqual(listboxRect.top);
    expect(optionRect.bottom).toBeLessThanOrEqual(listboxRect.bottom);
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Z=(X=j.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,te,ae;f.parameters={...f.parameters,docs:{...(ee=f.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ae=(te=f.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var oe,le,re;O.parameters={...O.parameters,docs:{...(oe=O.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(re=(le=O.parameters)==null?void 0:le.docs)==null?void 0:re.source}}};var se,ne,ie;E.parameters={...E.parameters,docs:{...(se=E.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ie=(ne=E.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};var ce,de,ue;T.parameters={...T.parameters,docs:{...(ce=T.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(ue=(de=T.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var pe,xe,be;A.parameters={...A.parameters,docs:{...(pe=A.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(be=(xe=A.parameters)==null?void 0:xe.docs)==null?void 0:be.source}}};var me,he,ge;C.parameters={...C.parameters,docs:{...(me=C.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(ge=(he=C.parameters)==null?void 0:he.docs)==null?void 0:ge.source}}};const Ne=["Default","Uncontrolled","States","Sizes","WithDescriptionsAndIcons","Multiple","ExLongOptionList","ExAutoSize","InFormField","ExControlled","A11yKeyboardInteraction","TestIdReachesPortaledListbox","DsComponentAttribute"];export{T as A11yKeyboardInteraction,g as Default,C as DsComponentAttribute,f as ExAutoSize,E as ExControlled,j as ExLongOptionList,O as InFormField,B as Multiple,y as Sizes,v as States,A as TestIdReachesPortaledListbox,S as Uncontrolled,w as WithDescriptionsAndIcons,Ne as __namedExportsOrder,_e as default};
