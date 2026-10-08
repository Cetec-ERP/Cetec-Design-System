import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as x}from"./index-BKyFwriW.js";import{w as u,u as p,e as a}from"./index-B_RCCgW0.js";import{B as i}from"./dsComponent-BG2jnRr7.js";import{B as D}from"./Button-Cr4bC5CG.js";import{F as Ie}from"./FormField-BtA_7OJ2.js";import{T as g}from"./Text-BPLBRPQ6.js";import{S as s,a as t}from"./Select-B3E-jLGE.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Icon-CrwLKW7B.js";import"./IconConfig-BuieZFlx.js";import"./Spinner-PLunUSsK.js";import"./FieldContext-D6URyQos.js";import"./Label-DM3dqKkX.js";import"./Tooltip-BEwLM_hx.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";import"./menu-BvaagRwT.js";import"./FloatingLayerContext-BryH8O9I.js";import"./dsPart-nnoJM9m6.js";import"./Chip-BOSXG9DY.js";import"./ListItem-CIvDFo3p.js";import"./HighlightText-DKF3xkQK.js";import"./Checkbox-BKc0omfg.js";import"./Divider-Dbp7vcYx.js";import"./Toggle-mlz1wkXL.js";const lt={title:"Components/Select",component:s,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Custom listbox-style select for controlled and uncontrolled single and multi-select flows. Use with `FormField` for labels, help text, and error messaging."}}},args:{placeholder:"Choose an option..."},argTypes:{value:{control:"text",description:"Controlled selected value for single-select usage"},placeholder:{control:"text",description:"Display text when no value is selected"},disabled:{control:"boolean",description:"Disabled state"},error:{control:"boolean",description:"Error state styling"},multiple:{control:"boolean",description:"Allow multiple selected values"},size:{control:"select",options:["sm","md","lg","xl"]},density:{control:"select",options:["compact","comfortable","spacious"]},autoSize:{control:"boolean",description:"Allow the trigger content to grow vertically instead of staying on one scrollable line"}}},v={render:function(o){return e.jsx(i,{w:"xs",children:e.jsxs(s,{...o,children:[e.jsx(t,{value:"starter",label:"Starter"}),e.jsx(t,{value:"growth",label:"Growth"}),e.jsx(t,{value:"enterprise",label:"Enterprise"})]})})}},S={name:"Uncontrolled",render:()=>e.jsx(i,{w:"xs",children:e.jsxs(s,{defaultValue:"growth",placeholder:"Choose an option...",children:[e.jsx(t,{value:"starter",label:"Starter"}),e.jsx(t,{value:"growth",label:"Growth"}),e.jsx(t,{value:"enterprise",label:"Enterprise"})]})}),parameters:{controls:{disable:!0}}},w={render:()=>e.jsxs(i,{display:"grid",gap:"12",w:"xs",children:[e.jsxs(s,{placeholder:"Default",children:[e.jsx(t,{value:"starter",label:"Starter"}),e.jsx(t,{value:"growth",label:"Growth"})]}),e.jsxs(s,{value:"growth",placeholder:"With value",children:[e.jsx(t,{value:"starter",label:"Starter"}),e.jsx(t,{value:"growth",label:"Growth"})]}),e.jsxs(s,{error:!0,placeholder:"Error state",children:[e.jsx(t,{value:"starter",label:"Starter"}),e.jsx(t,{value:"growth",label:"Growth"})]}),e.jsxs(s,{disabled:!0,value:"starter",placeholder:"Disabled",children:[e.jsx(t,{value:"starter",label:"Starter"}),e.jsx(t,{value:"growth",label:"Growth"})]})]}),parameters:{controls:{disable:!0}}},y={render:()=>e.jsxs(i,{display:"grid",gap:"12",w:"xs",children:[e.jsxs(s,{size:"sm",placeholder:"Small",children:[e.jsx(t,{value:"a",label:"Alpha"}),e.jsx(t,{value:"b",label:"Beta"})]}),e.jsxs(s,{size:"md",placeholder:"Medium",children:[e.jsx(t,{value:"a",label:"Alpha"}),e.jsx(t,{value:"b",label:"Beta"})]}),e.jsxs(s,{size:"lg",placeholder:"Large",children:[e.jsx(t,{value:"a",label:"Alpha"}),e.jsx(t,{value:"b",label:"Beta"})]}),e.jsxs(s,{size:"xl",placeholder:"Extra large",children:[e.jsx(t,{value:"a",label:"Alpha"}),e.jsx(t,{value:"b",label:"Beta"})]})]}),parameters:{controls:{disable:!0}}},B={render:()=>e.jsx(i,{w:"xs",children:e.jsxs(s,{placeholder:"Choose a support channel...",children:[e.jsx(t,{value:"email",label:"Email",description:"Best for non-urgent requests",iconLeft:"envelope"}),e.jsx(t,{value:"phone",label:"Phone",description:"Best for urgent issues",iconLeft:"at"}),e.jsx(t,{value:"chat",label:"Live chat",description:"During business hours",iconLeft:"message"})]})}),parameters:{controls:{disable:!0}}},f={render:function(){const[o,n]=x.useState(["react","typescript"]);return e.jsxs(i,{display:"grid",gap:"12",maxW:"xs",children:[e.jsxs(s,{multiple:!0,value:o,onChange:l=>{n(Array.isArray(l)?l:null)},placeholder:"Choose tags...",children:[e.jsx(t,{value:"react",label:"React"}),e.jsx(t,{value:"typescript",label:"TypeScript"}),e.jsx(t,{value:"storybook",label:"Storybook"}),e.jsx(t,{value:"panda",label:"Panda CSS"})]}),e.jsxs(g,{size:"14",color:"text.subtle",children:["Selected: ",(o==null?void 0:o.join(", "))||"none"]})]})},parameters:{controls:{disable:!0}}},H=Array.from({length:40},(r,o)=>`${o+1} - Option ${o+1}`),O={name:"Ex: Long Option List",render:()=>e.jsxs(i,{display:"flex",flexDirection:"column",gap:"8",maxW:"xs",children:[e.jsx(s,{"data-testid":"long-multiple",multiple:!0,placeholder:"Choose options...",children:H.map((r,o)=>e.jsx(t,{value:String(o+1),label:r},r))}),e.jsx(s,{"data-testid":"long-selected-near-end",defaultValue:"35",children:H.map((r,o)=>e.jsx(t,{value:String(o+1),label:r},r))})]}),play:async({canvasElement:r})=>{const o=u(r),n=u(r.ownerDocument.body);await p.click(o.getByTestId("long-multiple"));const l=await n.findByRole("listbox"),c=r.ownerDocument.documentElement.clientHeight,m=l.getBoundingClientRect();a(m.top).toBeGreaterThanOrEqual(0),a(m.bottom).toBeLessThanOrEqual(c),a(getComputedStyle(l).overflowY).toBe("auto"),a(l.scrollHeight).toBeGreaterThan(l.clientHeight),await p.keyboard("{Escape}"),await p.click(o.getByTestId("long-selected-near-end"));const d=await n.findByRole("listbox"),b=u(d).getByRole("option",{selected:!0}),V=d.getBoundingClientRect(),L=b.getBoundingClientRect();a(L.top).toBeGreaterThanOrEqual(V.top),a(L.bottom).toBeLessThanOrEqual(V.bottom)},parameters:{controls:{disable:!0}}},j={name:"Ex: Auto Size",render:function(){const[o,n]=x.useState("long"),[l,c]=x.useState(["react","typescript","storybook","text"]),[m,d]=x.useState(["react","typescript","storybook","text"]);return e.jsxs(i,{display:"grid",gap:"24",w:"full",maxW:"2xl",children:[e.jsxs(i,{display:"grid",gap:"12",gridTemplateColumns:"repeat(2, 1fr)",children:[e.jsxs(i,{display:"grid",gap:"8",children:[e.jsx(g,{size:"14",color:"text.subtle",children:'autoSize="false"'}),e.jsx(i,{maxW:"xs",children:e.jsxs(s,{multiple:!0,value:l,onChange:b=>c(Array.isArray(b)?b:null),placeholder:"Choose tags...",children:[e.jsx(t,{value:"react",label:"React"}),e.jsx(t,{value:"typescript",label:"TypeScript"}),e.jsx(t,{value:"storybook",label:"Storybook"}),e.jsx(t,{value:"text",label:"Text"})]})})]}),e.jsxs(i,{display:"grid",gap:"8",children:[e.jsx(g,{size:"14",color:"text.subtle",children:'autoSize="true"'}),e.jsx(i,{maxW:"xs",children:e.jsxs(s,{multiple:!0,autoSize:!0,value:m,onChange:b=>d(Array.isArray(b)?b:null),placeholder:"Choose tags...",children:[e.jsx(t,{value:"react",label:"React"}),e.jsx(t,{value:"typescript",label:"TypeScript"}),e.jsx(t,{value:"storybook",label:"Storybook"}),e.jsx(t,{value:"text",label:"Text"})]})})]})]}),e.jsxs(i,{display:"grid",gap:"12",gridTemplateColumns:"repeat(2, 1fr)",children:[e.jsxs(i,{display:"grid",gap:"8",children:[e.jsx(g,{size:"14",color:"text.subtle",children:"Single select default"}),e.jsx(i,{maxW:"xs",children:e.jsxs(s,{value:o,onChange:n,children:[e.jsx(t,{value:"long",label:"Enim qui laboris sunt qui laborum veniam minim dolor veniam"}),e.jsx(t,{value:"short",label:"Short label"})]})})]}),e.jsxs(i,{display:"grid",gap:"8",children:[e.jsx(g,{size:"14",color:"text.subtle",children:"Single select autoSize"}),e.jsx(i,{maxW:"xs",children:e.jsxs(s,{autoSize:!0,value:o,onChange:n,children:[e.jsx(t,{value:"long",label:"Enim qui laboris sunt qui laborum veniam minim dolor veniam"}),e.jsx(t,{value:"short",label:"Short label"})]})})]})]})]})},parameters:{controls:{disable:!0}}},E={name:"Ex: In FormField",render:function(){const[o,n]=x.useState(null);return e.jsx(i,{w:"sm",children:e.jsx(Ie,{label:"Team size",labelFor:"team-size",helpText:"Choose the option that best fits your current headcount.",error:!o,errorText:"Select a team size.",children:e.jsxs(s,{id:"team-size",name:"teamSize",value:o,onChange:n,placeholder:"Select team size...",children:[e.jsx(t,{value:"1-10",label:"1–10 people"}),e.jsx(t,{value:"11-50",label:"11–50 people"}),e.jsx(t,{value:"51-200",label:"51–200 people"}),e.jsx(t,{value:"201-plus",label:"201+ people"})]})})})},parameters:{controls:{disable:!0}}},C={name:"Ex: Controlled",render:function(){const[o,n]=x.useState("growth");return e.jsxs(i,{display:"grid",gap:"12",w:"xs",children:[e.jsxs(s,{value:o,onChange:n,placeholder:"Choose a plan...",children:[e.jsx(t,{value:"starter",label:"Starter"}),e.jsx(t,{value:"growth",label:"Growth"}),e.jsx(t,{value:"enterprise",label:"Enterprise"})]}),e.jsxs(g,{size:"14",color:"text.subtle",children:["Selected: ",o||"none"]})]})},parameters:{controls:{disable:!0}}},T={name:"A11y: Keyboard Interaction",render:function(){const[o,n]=x.useState(null);return e.jsx(i,{w:"xs",children:e.jsxs(s,{value:o,onChange:n,placeholder:"Choose an option...",children:[e.jsx(t,{value:"starter",label:"Starter"}),e.jsx(t,{value:"growth",label:"Growth"}),e.jsx(t,{value:"enterprise",label:"Enterprise"})]})})},play:async({canvasElement:r})=>{const o=u(r),n=u(r.ownerDocument.body),l=o.getByRole("combobox",{name:/choose an option/i});l.focus(),a(l).toHaveFocus(),await p.keyboard("{ArrowDown}");const c=n.getByRole("listbox");a(c).toBeVisible(),await p.keyboard("{ArrowDown}{Enter}"),a(o.getByRole("combobox",{name:/growth/i})).toBeVisible()},parameters:{controls:{disable:!0}}},R={name:"Ex: Test Id Reaches The Listbox",render:()=>e.jsx(i,{w:"xs","data-testid":"filters",children:e.jsxs(s,{"data-testid":"status",placeholder:"Choose an option...",children:[e.jsx(t,{value:"starter",label:"Starter"}),e.jsx(t,{value:"growth",label:"Growth"}),e.jsx(t,{value:"enterprise",label:"Enterprise"})]})}),play:async({canvasElement:r})=>{const o=u(r),n=u(r.ownerDocument.body),l=o.getByTestId("status");a(l).toBe(o.getByRole("combobox")),a(l).toHaveAttribute("data-ds-part","trigger");const c=l.closest('[data-ds-component="Select"]');a(c).not.toBe(l),a(c).not.toHaveAttribute("data-testid"),l.focus(),await p.keyboard("{ArrowDown}");const m=await n.findByRole("listbox");a(c==null?void 0:c.contains(m)).toBe(!1);const d=m.closest("[data-ds-portal-root]");a(d).not.toBeNull(),a(d).toHaveAttribute("data-ds-chain","filters>status"),a(d==null?void 0:d.getAttribute("data-ds-chain")).not.toContain("trigger")},parameters:{controls:{disable:!0}}},A={name:"Test: data-ds-component",render:()=>e.jsxs(i,{display:"flex",flexDirection:"column",gap:"8",w:"xs",children:[e.jsxs(s,{"data-testid":"ds-default",placeholder:"Choose an option...",children:[e.jsx(t,{value:"starter",label:"Starter"}),e.jsx(t,{value:"growth",label:"Growth"})]}),e.jsxs(s,{"data-testid":"ds-override","data-ds-component":"StatusSelect",placeholder:"Choose an option...",children:[e.jsx(t,{value:"starter",label:"Starter"}),e.jsx(t,{value:"growth",label:"Growth"})]})]}),play:async({canvasElement:r})=>{const o=u(r),n=u(r.ownerDocument.body),l=o.getByTestId("ds-default");a(l).toHaveAttribute("data-ds-part","trigger");const c=l.closest("[data-ds-component]");a(c).toHaveAttribute("data-ds-component","Select"),a(l).not.toHaveAttribute("data-ds-component");const m=o.getByTestId("ds-override");a(m.closest("[data-ds-component]")).toHaveAttribute("data-ds-component","StatusSelect"),a(m).not.toHaveAttribute("data-ds-component"),l.focus(),await p.keyboard("{ArrowDown}");const d=await n.findByRole("listbox");a(d).not.toHaveAttribute("data-ds-component","Select"),a(d).not.toHaveAttribute("data-ds-component","StatusSelect")},parameters:{controls:{disable:!0}}},h=r=>{var o;return(o=r.querySelector("svg[name]"))==null?void 0:o.getAttribute("name")},k={name:"Test: Clear icon follows hover and keyboard",render:()=>e.jsx(i,{w:"xs",children:e.jsxs(s,{defaultValue:"starter",placeholder:"Choose an option...",children:[e.jsx(t,{value:"starter",label:"Starter"}),e.jsx(t,{value:"growth",label:"Growth"}),e.jsx(t,{value:"enterprise",label:"Enterprise"})]})}),play:async({canvasElement:r})=>{const o=u(r),n=u(r.ownerDocument.body),l=o.getByRole("combobox");await p.click(l);const c=await n.findByRole("option",{name:/starter/i}),m=n.getByRole("option",{name:/growth/i});a(h(c)).toBe("check"),await p.hover(c),a(h(c)).toBe("x"),await p.hover(m),a(h(c)).toBe("check"),await p.hover(c),await p.unhover(c),a(h(c)).toBe("check"),await p.keyboard("{ArrowDown}"),a(h(c)).toBe("x"),await p.keyboard("{ArrowDown}"),a(h(c)).toBe("check"),await p.keyboard("s"),a(h(c)).toBe("x"),await p.keyboard("{Escape}"),l.focus(),await p.keyboard("{ArrowDown}");const d=await n.findByRole("option",{name:/starter/i});a(h(d)).toBe("x")},parameters:{controls:{disable:!0}}},I={name:"Test: Clear icon replaces a custom option icon",render:()=>e.jsx(i,{w:"xs",children:e.jsxs(s,{defaultValue:"email",placeholder:"Choose an option...",children:[e.jsx(t,{value:"email",label:"Email",iconLeft:"envelope"}),e.jsx(t,{value:"phone",label:"Phone",iconLeft:"at"})]})}),play:async({canvasElement:r})=>{const o=u(r),n=u(r.ownerDocument.body);await p.click(o.getByRole("combobox"));const l=await n.findByRole("option",{name:/email/i});a(h(l)).toBe("envelope"),await p.hover(l),a(h(l)).toBe("x"),await p.hover(n.getByRole("option",{name:/phone/i})),a(h(l)).toBe("envelope")},parameters:{controls:{disable:!0}}},z={name:"Test: Clear icon resets when open is controlled",render:function(){const[o,n]=x.useState(!1);return e.jsxs(i,{display:"grid",gap:"12",w:"xs",children:[e.jsxs(i,{display:"flex",gap:"8",children:[e.jsx(D,{onClick:()=>n(!0),children:"Open"}),e.jsx(D,{onClick:()=>n(!1),children:"Close"})]}),e.jsxs(s,{open:o,defaultValue:"growth",placeholder:"Choose an option...",children:[e.jsx(t,{value:"starter",label:"Starter"}),e.jsx(t,{value:"growth",label:"Growth"}),e.jsx(t,{value:"enterprise",label:"Enterprise"})]})]})},play:async({canvasElement:r})=>{const o=u(r),n=u(r.ownerDocument.body);await p.click(o.getByRole("button",{name:"Open"}));const l=await n.findByRole("option",{name:/growth/i});a(h(l)).toBe("check"),await p.hover(l),a(h(l)).toBe("x"),await p.click(o.getByRole("button",{name:"Close"})),await p.click(o.getByRole("button",{name:"Open"}));const c=await n.findByRole("option",{name:/growth/i});a(h(c)).toBe("check")},parameters:{controls:{disable:!0}}};var G,F,N;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: function DefaultRender(args) {
    return <Box w="xs">
        <Select {...args}>
          <SelectOption value="starter" label="Starter" />
          <SelectOption value="growth" label="Growth" />
          <SelectOption value="enterprise" label="Enterprise" />
        </Select>
      </Box>;
  }
}`,...(N=(F=v.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};var W,q,M;S.parameters={...S.parameters,docs:{...(W=S.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(M=(q=S.parameters)==null?void 0:q.docs)==null?void 0:M.source}}};var P,_,K;w.parameters={...w.parameters,docs:{...(P=w.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(K=(_=w.parameters)==null?void 0:_.docs)==null?void 0:K.source}}};var U,Y,$;y.parameters={...y.parameters,docs:{...(U=y.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...($=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};var J,Q,X;B.parameters={...B.parameters,docs:{...(J=B.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(X=(Q=B.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,te;f.parameters={...f.parameters,docs:{...(Z=f.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(te=(ee=f.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var oe,ae,re;O.parameters={...O.parameters,docs:{...(oe=O.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(re=(ae=O.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var le,ne,se;j.parameters={...j.parameters,docs:{...(le=j.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(se=(ne=j.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var ie,ce,pe;E.parameters={...E.parameters,docs:{...(ie=E.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(pe=(ce=E.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var de,ue,he;C.parameters={...C.parameters,docs:{...(de=C.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(he=(ue=C.parameters)==null?void 0:ue.docs)==null?void 0:he.source}}};var me,xe,be;T.parameters={...T.parameters,docs:{...(me=T.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(be=(xe=T.parameters)==null?void 0:xe.docs)==null?void 0:be.source}}};var ge,ve,Se;R.parameters={...R.parameters,docs:{...(ge=R.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(Se=(ve=R.parameters)==null?void 0:ve.docs)==null?void 0:Se.source}}};var we,ye,Be;A.parameters={...A.parameters,docs:{...(we=A.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(Be=(ye=A.parameters)==null?void 0:ye.docs)==null?void 0:Be.source}}};var fe,Oe,je;k.parameters={...k.parameters,docs:{...(fe=k.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  name: 'Test: Clear icon follows hover and keyboard',
  render: () => <Box w="xs">
      <Select defaultValue="starter" placeholder="Choose an option...">
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
    const trigger = canvas.getByRole('combobox');

    // Opened with the pointer, the selected row is active but untouched.
    await userEvent.click(trigger);
    const starter = await screen.findByRole('option', {
      name: /starter/i
    });
    const growth = screen.getByRole('option', {
      name: /growth/i
    });
    expect(getOptionIconName(starter)).toBe('check');

    // Hovering the selected row offers the clear icon; moving to another row
    // takes it back.
    await userEvent.hover(starter);
    expect(getOptionIconName(starter)).toBe('x');
    await userEvent.hover(growth);
    expect(getOptionIconName(starter)).toBe('check');

    // Once the pointer leaves the options, focus moves to the listbox rather
    // than an option. Arrowing from there must still be treated as navigation.
    await userEvent.hover(starter);
    await userEvent.unhover(starter);
    expect(getOptionIconName(starter)).toBe('check');
    await userEvent.keyboard('{ArrowDown}');
    expect(getOptionIconName(starter)).toBe('x');

    // Arrowing away restores the check.
    await userEvent.keyboard('{ArrowDown}');
    expect(getOptionIconName(starter)).toBe('check');

    // Typeahead is keyboard navigation too.
    await userEvent.keyboard('s');
    expect(getOptionIconName(starter)).toBe('x');

    // Opened with the keyboard, the selected row starts with the clear icon.
    await userEvent.keyboard('{Escape}');
    trigger.focus();
    await userEvent.keyboard('{ArrowDown}');
    const reopened = await screen.findByRole('option', {
      name: /starter/i
    });
    expect(getOptionIconName(reopened)).toBe('x');
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(je=(Oe=k.parameters)==null?void 0:Oe.docs)==null?void 0:je.source}}};var Ee,Ce,Te;I.parameters={...I.parameters,docs:{...(Ee=I.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  name: 'Test: Clear icon replaces a custom option icon',
  render: () => <Box w="xs">
      <Select defaultValue="email" placeholder="Choose an option...">
        <SelectOption value="email" label="Email" iconLeft="envelope" />
        <SelectOption value="phone" label="Phone" iconLeft="at" />
      </Select>
    </Box>,
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const canvas = within(canvasElement);
    const screen = within(canvasElement.ownerDocument.body);
    await userEvent.click(canvas.getByRole('combobox'));
    const email = await screen.findByRole('option', {
      name: /email/i
    });
    expect(getOptionIconName(email)).toBe('envelope');
    await userEvent.hover(email);
    expect(getOptionIconName(email)).toBe('x');
    await userEvent.hover(screen.getByRole('option', {
      name: /phone/i
    }));
    expect(getOptionIconName(email)).toBe('envelope');
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Te=(Ce=I.parameters)==null?void 0:Ce.docs)==null?void 0:Te.source}}};var Re,Ae,ke;z.parameters={...z.parameters,docs:{...(Re=z.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  name: 'Test: Clear icon resets when open is controlled',
  render: function TestClearIconResetsOnControlledOpenRender() {
    const [open, setOpen] = useState(false);
    return <Box display="grid" gap="12" w="xs">
        {/* Above the Select so the open list never covers them. The Select
            has no \`onOpenChange\`, so only these buttons open or close it. */}
        <Box display="flex" gap="8">
          <Button onClick={() => setOpen(true)}>Open</Button>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </Box>

        <Select open={open} defaultValue="growth" placeholder="Choose an option...">
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

    // The parent opens and closes the Select directly, so none of this goes
    // through the Select's own open handling.
    await userEvent.click(canvas.getByRole('button', {
      name: 'Open'
    }));
    const growth = await screen.findByRole('option', {
      name: /growth/i
    });
    expect(getOptionIconName(growth)).toBe('check');
    await userEvent.hover(growth);
    expect(getOptionIconName(growth)).toBe('x');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Close'
    }));
    await userEvent.click(canvas.getByRole('button', {
      name: 'Open'
    }));

    // Reopened without any fresh interaction with the list.
    const reopened = await screen.findByRole('option', {
      name: /growth/i
    });
    expect(getOptionIconName(reopened)).toBe('check');
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ke=(Ae=z.parameters)==null?void 0:Ae.docs)==null?void 0:ke.source}}};const nt=["Default","Uncontrolled","States","Sizes","WithDescriptionsAndIcons","Multiple","ExLongOptionList","ExAutoSize","InFormField","ExControlled","A11yKeyboardInteraction","TestIdReachesPortaledListbox","DsComponentAttribute","TestClearIconOnNavigation","TestClearIconOverridesCustomIcon","TestClearIconResetsOnControlledOpen"];export{T as A11yKeyboardInteraction,v as Default,A as DsComponentAttribute,j as ExAutoSize,C as ExControlled,O as ExLongOptionList,E as InFormField,f as Multiple,y as Sizes,w as States,k as TestClearIconOnNavigation,I as TestClearIconOverridesCustomIcon,z as TestClearIconResetsOnControlledOpen,R as TestIdReachesPortaledListbox,S as Uncontrolled,B as WithDescriptionsAndIcons,nt as __namedExportsOrder,lt as default};
