import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as b}from"./index-BKyFwriW.js";import{w as p,u as l,e as a}from"./index-DPYJpPba.js";import{B as i}from"./dsComponent-D6ec2IT1.js";import{B as ut}from"./Button-CxuwUgmn.js";import{F as pt}from"./FormField-D_zd-ohb.js";import{A as s,O as $}from"./Option-Ct7VvIp_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Icon-12cJPaFt.js";import"./IconConfig-D3dlgfBK.js";import"./Spinner-DHR4yZCu.js";import"./FieldContext-D6URyQos.js";import"./Label-q4frODx4.js";import"./Text-B_2f_EK_.js";import"./Tooltip-B2qdbzWM.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";import"./dsPart-nnoJM9m6.js";import"./ListItem-B5XT26dw.js";import"./HighlightText-C2YgeQru.js";import"./Checkbox-BJA-hWE7.js";import"./Divider-CFbTUo5C.js";import"./Toggle-CiPJs3Y-.js";import"./Chip-ChewNFrR.js";import"./FloatingLayerContext-BryH8O9I.js";const dt=[{value:"react",label:"React",description:"UI library"},{value:"typescript",label:"TypeScript",description:"Type safety"},{value:"storybook",label:"Storybook",description:"Component workshop"},{value:"panda",label:"Panda CSS",description:"Design system styles"},{value:"floating-ui",label:"Floating UI",description:"Popup engine"},{value:"vite",label:"Vite",description:"Build tooling"}],y=[...dt,{value:"vitest",label:"Vitest",description:"Unit testing"},{value:"playwright",label:"Playwright",description:"Browser testing"},{value:"eslint",label:"ESLint",description:"Code analysis"},{value:"prettier",label:"Prettier",description:"Code formatting"},{value:"react-router",label:"React Router",description:"Routing"},{value:"tanstack-query",label:"TanStack Query",description:"Data"}],c=(n=dt)=>n.map(e=>t.jsx($,{value:e.value,label:e.label,description:e.description},e.value)),Mt={title:"Components/Autocomplete",component:s,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Use Autocomplete when people benefit from filtering a set of options as they type. Matching uses case-insensitive substrings within each option label or description. Focusing the field opens its suggestions and activates the first available option. Use Select for a short fixed list and TextInput for unrestricted text."}}},args:{"aria-label":"Technology",placeholder:"Choose a technology…"},argTypes:{multiple:{control:"boolean"},limitTags:{control:"number"},allowCustomValue:{control:"boolean"},disabled:{control:"boolean"},error:{control:"boolean"},invalid:{control:"boolean"},valid:{control:"boolean"}}},h={render:function(e){const[o,r]=b.useState(null);return t.jsx(i,{w:"xs",children:t.jsx(s,{...e,multiple:!1,value:o,defaultValue:void 0,onValueChange:r,onChange:void 0,name:"technology",children:c()})})}},g={render:()=>t.jsx(i,{w:"xs",children:t.jsx(s,{name:"technology-filter","aria-label":"Filter technologies",children:c()})}),play:async({canvasElement:n})=>{const e=p(n),o=p(document.body),r=e.getByRole("combobox");await l.type(r,"typ"),await a(o.getByRole("option",{name:/typescript type safety/i})).toBeInTheDocument(),await a(o.queryByRole("option",{name:/storybook/i})).not.toBeInTheDocument(),await l.clear(r),await l.type(r,"workshop");const u=o.getByRole("option",{name:/storybook component workshop/i});await a(p(u).getByText("workshop",{selector:"mark"})).toBeInTheDocument()},parameters:{controls:{disable:!0}}},x={render:n=>t.jsx(i,{w:"xs",children:t.jsx(s,{...n,multiple:!1,value:void 0,defaultValue:"react",onValueChange:void 0,onChange:void 0,name:"technology",children:c()})}),play:async({canvasElement:n})=>{const e=p(n),o=e.getByRole("combobox",{name:"Technology"});await a(o).toHaveValue(""),await a(e.getByRole("button",{name:"Remove React"})).toBeInTheDocument(),await l.click(o),await l.keyboard("P"),await a(o).toHaveValue("P"),await a(e.queryByRole("button",{name:"Remove React"})).not.toBeInTheDocument()}},v={render:function(){const[e,o]=b.useState(["react","typescript","storybook"]);return t.jsx(i,{w:"sm",children:t.jsx(s,{multiple:!0,value:e,onValueChange:o,name:"stack","aria-label":"Project stack",placeholder:"Add technology…",children:c()})})},play:async({canvasElement:n})=>{const e=p(n),o=p(document.body),r=e.getByRole("combobox"),u=e.getByRole("button",{name:"Remove React"});await l.click(r),await a(o.queryByRole("checkbox")).not.toBeInTheDocument(),await l.click(u),await a(e.queryByRole("button",{name:"Remove React"})).not.toBeInTheDocument(),await a(r).toHaveFocus()},parameters:{controls:{disable:!0}}},w={render:()=>t.jsx(i,{w:"224",children:t.jsx(s,{multiple:!0,defaultValue:["storybook","floating-ui","typescript"],name:"narrow-stack","aria-label":"Narrow project stack",placeholder:"Add…",children:c()})}),parameters:{controls:{disable:!0}}},B={render:()=>t.jsx(i,{w:"sm",children:t.jsx(s,{multiple:!0,limitTags:2,defaultValue:["react","typescript","storybook","panda","floating-ui"],name:"limited-stack","aria-label":"Limited project stack",children:c()})}),play:async({canvasElement:n})=>{const e=p(n);await a(e.getByText("+3")).toBeInTheDocument(),await l.click(e.getByRole("combobox")),await a(e.queryByText("+3")).not.toBeInTheDocument(),await a(e.getByRole("button",{name:"Remove Floating UI"})).toBeInTheDocument()},parameters:{controls:{disable:!0}}},f={render:()=>t.jsx(i,{display:"grid",gap:"12",w:"sm",children:["sm","md","lg","xl"].map(n=>t.jsx(s,{size:n,defaultValue:"react",name:`technology-${n}`,"aria-label":`${n} autocomplete`,children:c()},n))}),parameters:{controls:{disable:!0}}},R={render:()=>t.jsxs(i,{display:"grid",gap:"12",w:"sm",children:[t.jsx(s,{name:"default","aria-label":"Default",children:c()}),t.jsx(s,{name:"valid","aria-label":"Valid",valid:!0,children:c()}),t.jsx(s,{name:"invalid","aria-label":"Invalid",invalid:!0,children:c()}),t.jsx(s,{name:"error","aria-label":"Error",error:!0,children:c()})]}),parameters:{controls:{disable:!0}}},A={render:()=>t.jsx(i,{w:"sm",children:t.jsx(s,{multiple:!0,disabled:!0,defaultValue:["react","typescript"],name:"disabled-stack","aria-label":"Disabled technologies",children:c()})}),play:async({canvasElement:n})=>{const e=p(n);await a(e.getByRole("combobox")).toBeDisabled(),await a(e.getByRole("button",{name:"Remove React"})).toBeDisabled()},parameters:{controls:{disable:!0}}},T={render:()=>t.jsx(i,{w:"sm",children:t.jsxs(s,{name:"framework","aria-label":"Framework",children:[t.jsx($,{value:"react",label:"React"}),t.jsx($,{value:"legacy",label:"Legacy framework",disabled:!0}),t.jsx($,{value:"storybook",label:"Storybook"})]})}),parameters:{controls:{disable:!0}}},k={render:()=>t.jsx(i,{w:"sm",children:t.jsx(s,{multiple:!0,allowCustomValue:!0,defaultValue:["react"],name:"custom-stack","aria-label":"Technologies",placeholder:"Add a technology…",children:c()})}),play:async({canvasElement:n})=>{const e=p(n),o=e.getByRole("combobox");await l.type(o,"Script");const r=p(document.body),u=r.getAllByRole("option");await a(u[0]).toHaveAccessibleName(/add “script”/i),await a(u[1]).toHaveAccessibleName(/typescript type safety/i),await l.keyboard("{Enter}");const m=e.getByRole("button",{name:"Remove Script"});await a(m).toBeInTheDocument(),await a(m.parentElement).toHaveAttribute("data-new","true"),await l.type(o,"React"),await a(r.queryByRole("option",{name:/add “react”/i})).not.toBeInTheDocument()},parameters:{controls:{disable:!0}}},C={render:function(){const[e,o]=b.useState("ABC");return t.jsx(i,{w:"sm",children:t.jsx(s,{allowCustomValue:!0,value:e,onValueChange:o,getCreateOptionLabel:r=>`Search for “${r}”`,name:"controlled-custom","aria-label":"Part search",children:c()})})},play:async({canvasElement:n})=>{const o=p(n).getByRole("button",{name:"Remove ABC"});await a(o.parentElement).toHaveAttribute("data-new","true")},parameters:{controls:{disable:!0}}},E={render:function(){const[e,o]=b.useState(null);return t.jsxs(i,{w:"sm",display:"flex",flexDirection:"column",gap:"12",children:[t.jsx(s,{allowCustomValue:!0,value:e,onValueChange:o,getCreateOptionLabel:r=>`Search for “${r}”`,name:"blur-commit","aria-label":"Vendor search",children:c()}),t.jsx(ut,{type:"button",children:"Next field"})]})},play:async({canvasElement:n})=>{const e=p(n),o=e.getByRole("combobox");await l.type(o,"Acme"),await l.tab();const r=e.getByRole("button",{name:"Remove Acme"});await a(r).toBeInTheDocument(),await a(r.parentElement).toHaveAttribute("data-new","true"),await l.click(r),await l.click(o),await l.type(o,"abc"),await l.keyboard("{Escape}"),await a(o).toHaveValue(""),await l.tab(),await a(e.queryByRole("button",{name:"Remove abc"})).not.toBeInTheDocument()},parameters:{controls:{disable:!0}}},O={render:()=>t.jsx(i,{w:"sm",children:t.jsx(s,{defaultOpen:!0,name:"scrollable","aria-label":"Scrollable technologies",children:c(y)})}),parameters:{controls:{disable:!0}}},S={render:()=>t.jsx(i,{w:"sm",children:t.jsx(s,{loading:!0,defaultOpen:!0,name:"loading","aria-label":"Loading technologies"})}),parameters:{controls:{disable:!0}}},V={render:function(){const[e,o]=b.useState(()=>y.slice(0,8)),[r,u]=b.useState(!1),m=e.length<y.length,d=()=>{r||!m||(u(!0),window.setTimeout(()=>{o(K=>y.slice(0,K.length+4)),u(!1)},200))};return t.jsx(i,{w:"sm",children:t.jsx(s,{defaultOpen:!0,name:"infinite","aria-label":"Technology with more results",hasMore:m,loadingMore:r,onLoadMore:d,children:c(e)})})},parameters:{controls:{disable:!0}}},j={render:()=>t.jsx(i,{w:"sm",children:t.jsx(s,{defaultInputValue:"angular",defaultOpen:!0,name:"empty","aria-label":"Technology with no matches",children:c()})}),parameters:{controls:{disable:!0}}},I={render:function(){const[e,o]=b.useState("");return t.jsxs(i,{display:"grid",gap:"8",w:"sm",children:[t.jsx(s,{inputValue:e,onInputValueChange:o,name:"controlled-input","aria-label":"Controlled query",children:c()}),t.jsx(i,{color:"text.subtle",children:`Query: ${e||"empty"}`})]})},parameters:{controls:{disable:!0}}},D={render:function(){const[e,o]=b.useState(!1),[r,u]=b.useState(0),m=d=>{o(d),u(K=>K+1)};return t.jsxs(i,{display:"grid",gap:"8",w:"sm",children:[t.jsx(ut,{onClick:()=>o(d=>!d),children:"Toggle suggestions"}),t.jsx(s,{open:e,onOpenChange:m,name:"controlled-open","aria-label":"Controlled suggestions",children:c()}),t.jsx(i,{color:"text.subtle",children:`Open changes: ${r}`})]})},play:async({canvasElement:n})=>{const e=p(n),o=e.getByRole("combobox");await l.click(o),await a(e.getByText("Open changes: 1")).toBeInTheDocument(),await l.keyboard("{Escape}"),await a(e.getByText("Open changes: 2")).toBeInTheDocument(),await a(o).toHaveAttribute("aria-expanded","false")},parameters:{controls:{disable:!0}}},H={name:"Ex: With FormField",render:()=>t.jsx(i,{w:"sm",children:t.jsx(pt,{label:"Primary technology",labelFor:"primary-technology",helpText:"Choose the technology this project depends on most.",children:t.jsx(s,{id:"primary-technology",name:"primaryTechnology",children:c()})})}),parameters:{controls:{disable:!0}}},F={name:"Ex: Technology Assignment",render:()=>t.jsx(i,{w:"md",children:t.jsx(pt,{label:"Project stack",labelFor:"project-stack",helpText:"Search the supported catalog or create a project-specific value.",children:t.jsx(s,{id:"project-stack",name:"projectStack",multiple:!0,allowCustomValue:!0,defaultValue:["react","typescript"],placeholder:"Add technology…",children:c(y)})})}),parameters:{controls:{disable:!0}}},L={name:"Ex: Keyboard Selection",render:()=>t.jsx(i,{w:"sm",children:t.jsx(s,{name:"keyboard","aria-label":"Keyboard selection",children:c()})}),play:async({canvasElement:n})=>{const e=p(n),o=e.getByRole("combobox");await l.click(o),await a(o).toHaveAttribute("aria-expanded","true"),await a(o).toHaveAttribute("aria-activedescendant"),await l.keyboard("{Enter}"),await a(o).toHaveValue(""),await a(e.getByRole("button",{name:"Remove React"})).toBeInTheDocument()},parameters:{controls:{disable:!0}}},M={name:"Ex: Keyboard Token Editing",render:()=>t.jsx(i,{w:"sm",children:t.jsx(s,{multiple:!0,defaultValue:["react","typescript"],name:"token-editing","aria-label":"Token editing",children:c()})}),play:async({canvasElement:n})=>{const e=p(n),o=e.getByRole("combobox"),r=e.getByRole("button",{name:"Remove TypeScript"});await l.click(o),await l.keyboard("{Backspace}"),await a(r).toHaveFocus(),await a(r).toBeInTheDocument(),await l.keyboard("{Backspace}"),await a(e.queryByRole("button",{name:"Remove TypeScript"})).not.toBeInTheDocument()},parameters:{controls:{disable:!0}}},q={name:"Ex: Test Id Reaches The Listbox",render:()=>t.jsx(i,{w:"sm","data-testid":"filters",children:t.jsx(s,{"data-testid":"technology","aria-label":"Technology",children:c()})}),play:async({canvasElement:n})=>{const e=p(n),o=p(n.ownerDocument.body),r=e.getByTestId("technology"),u=e.getByRole("combobox");await a(r).not.toBe(u),await a(r).toContainElement(u),await a(u).not.toHaveAttribute("data-testid"),await a(u).toHaveAttribute("data-ds-part","trigger"),await a(r).not.toHaveAttribute("data-ds-part"),await l.click(u);const m=await o.findByRole("listbox");await a(r.contains(m)).toBe(!1);const d=m.closest("[data-ds-chain]");await a(d).toHaveAttribute("data-ds-chain","filters>technology"),await a(d==null?void 0:d.getAttribute("data-ds-chain")).not.toContain("trigger")},parameters:{controls:{disable:!0}}},P={name:"Test: data-ds-component",render:()=>t.jsxs(i,{display:"flex",flexDirection:"column",gap:"8",w:"sm",children:[t.jsx(s,{"data-testid":"ds-default","aria-label":"Default technology",children:c()}),t.jsx(s,{"data-testid":"ds-override","data-ds-component":"TechnologyPicker","aria-label":"Overridden technology",children:c()})]}),play:async({canvasElement:n})=>{const e=p(n),o=p(n.ownerDocument.body),r=e.getByTestId("ds-default");await a(r).toHaveAttribute("data-ds-component","Autocomplete");const u=e.getByRole("combobox",{name:"Default technology"});await a(u).toHaveAttribute("data-ds-part","trigger"),await a(u).not.toHaveAttribute("data-ds-component");const m=e.getByTestId("ds-override");await a(m).toHaveAttribute("data-ds-component","TechnologyPicker"),await a(e.getByRole("combobox",{name:"Overridden technology"})).not.toHaveAttribute("data-ds-component"),await l.click(u);const d=await o.findByRole("listbox");await a(d).not.toHaveAttribute("data-ds-component","Autocomplete"),await a(d).not.toHaveAttribute("data-ds-component","TechnologyPicker")},parameters:{controls:{disable:!0}}};var N,U,z;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: function DefaultRender(args) {
    const [value, setValue] = useState<string | null>(null);
    return <Box w="xs">
        <Autocomplete {...args} multiple={false} value={value} defaultValue={undefined} onValueChange={setValue} onChange={undefined} name="technology">
          {renderOptions()}
        </Autocomplete>
      </Box>;
  }
}`,...(z=(U=h.parameters)==null?void 0:U.docs)==null?void 0:z.source}}};var W,Q,_;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <Box w="xs">
      <Autocomplete name="technology-filter" aria-label="Filter technologies">
        {renderOptions()}
      </Autocomplete>
    </Box>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    const input = canvas.getByRole('combobox');
    await userEvent.type(input, 'typ');
    await expect(body.getByRole('option', {
      name: /typescript type safety/i
    })).toBeInTheDocument();
    await expect(body.queryByRole('option', {
      name: /storybook/i
    })).not.toBeInTheDocument();
    await userEvent.clear(input);
    await userEvent.type(input, 'workshop');
    const descriptionMatch = body.getByRole('option', {
      name: /storybook component workshop/i
    });
    await expect(within(descriptionMatch).getByText('workshop', {
      selector: 'mark'
    })).toBeInTheDocument();
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(_=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:_.source}}};var G,J,X;x.parameters={...x.parameters,docs:{...(G=x.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: args => <Box w="xs">
      <Autocomplete {...args} multiple={false} value={undefined} defaultValue="react" onValueChange={undefined} onChange={undefined} name="technology">
        {renderOptions()}
      </Autocomplete>
    </Box>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('combobox', {
      name: 'Technology'
    });
    await expect(input).toHaveValue('');
    await expect(canvas.getByRole('button', {
      name: 'Remove React'
    })).toBeInTheDocument();
    await userEvent.click(input);
    await userEvent.keyboard('P');
    await expect(input).toHaveValue('P');
    await expect(canvas.queryByRole('button', {
      name: 'Remove React'
    })).not.toBeInTheDocument();
  }
}`,...(X=(J=x.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};var Y,Z,ee;v.parameters={...v.parameters,docs:{...(Y=v.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: function MultipleRender() {
    const [value, setValue] = useState<string[]>(['react', 'typescript', 'storybook']);
    return <Box w="sm">
        <Autocomplete multiple value={value} onValueChange={setValue} name="stack" aria-label="Project stack" placeholder="Add technology…">
          {renderOptions()}
        </Autocomplete>
      </Box>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    const input = canvas.getByRole('combobox');
    const removeReact = canvas.getByRole('button', {
      name: 'Remove React'
    });
    await userEvent.click(input);
    await expect(body.queryByRole('checkbox')).not.toBeInTheDocument();
    await userEvent.click(removeReact);
    await expect(canvas.queryByRole('button', {
      name: 'Remove React'
    })).not.toBeInTheDocument();
    await expect(input).toHaveFocus();
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ee=(Z=v.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ae,oe;w.parameters={...w.parameters,docs:{...(te=w.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => <Box w="224">
      <Autocomplete multiple defaultValue={['storybook', 'floating-ui', 'typescript']} name="narrow-stack" aria-label="Narrow project stack" placeholder="Add…">
        {renderOptions()}
      </Autocomplete>
    </Box>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(oe=(ae=w.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var ne,re,se;B.parameters={...B.parameters,docs:{...(ne=B.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => <Box w="sm">
      <Autocomplete multiple limitTags={2} defaultValue={['react', 'typescript', 'storybook', 'panda', 'floating-ui']} name="limited-stack" aria-label="Limited project stack">
        {renderOptions()}
      </Autocomplete>
    </Box>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('+3')).toBeInTheDocument();
    await userEvent.click(canvas.getByRole('combobox'));
    await expect(canvas.queryByText('+3')).not.toBeInTheDocument();
    await expect(canvas.getByRole('button', {
      name: 'Remove Floating UI'
    })).toBeInTheDocument();
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(se=(re=B.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var le,ce,ie;f.parameters={...f.parameters,docs:{...(le=f.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => <Box display="grid" gap="12" w="sm">
      {(['sm', 'md', 'lg', 'xl'] as const).map(size => <Autocomplete key={size} size={size} defaultValue="react" name={\`technology-\${size}\`} aria-label={\`\${size} autocomplete\`}>
          {renderOptions()}
        </Autocomplete>)}
    </Box>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ie=(ce=f.parameters)==null?void 0:ce.docs)==null?void 0:ie.source}}};var ue,pe,de;R.parameters={...R.parameters,docs:{...(ue=R.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => <Box display="grid" gap="12" w="sm">
      <Autocomplete name="default" aria-label="Default">
        {renderOptions()}
      </Autocomplete>
      <Autocomplete name="valid" aria-label="Valid" valid>
        {renderOptions()}
      </Autocomplete>
      <Autocomplete name="invalid" aria-label="Invalid" invalid>
        {renderOptions()}
      </Autocomplete>
      <Autocomplete name="error" aria-label="Error" error>
        {renderOptions()}
      </Autocomplete>
    </Box>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(de=(pe=R.parameters)==null?void 0:pe.docs)==null?void 0:de.source}}};var me,be,ye;A.parameters={...A.parameters,docs:{...(me=A.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => <Box w="sm">
      <Autocomplete multiple disabled defaultValue={['react', 'typescript']} name="disabled-stack" aria-label="Disabled technologies">
        {renderOptions()}
      </Autocomplete>
    </Box>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('combobox')).toBeDisabled();
    await expect(canvas.getByRole('button', {
      name: 'Remove React'
    })).toBeDisabled();
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ye=(be=A.parameters)==null?void 0:be.docs)==null?void 0:ye.source}}};var he,ge,xe;T.parameters={...T.parameters,docs:{...(he=T.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: () => <Box w="sm">
      <Autocomplete name="framework" aria-label="Framework">
        <Option value="react" label="React" />
        <Option value="legacy" label="Legacy framework" disabled />
        <Option value="storybook" label="Storybook" />
      </Autocomplete>
    </Box>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(xe=(ge=T.parameters)==null?void 0:ge.docs)==null?void 0:xe.source}}};var ve,we,Be;k.parameters={...k.parameters,docs:{...(ve=k.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  render: () => <Box w="sm">
      <Autocomplete multiple allowCustomValue defaultValue={['react']} name="custom-stack" aria-label="Technologies" placeholder="Add a technology…">
        {renderOptions()}
      </Autocomplete>
    </Box>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('combobox');
    await userEvent.type(input, 'Script');
    const body = within(document.body);
    const options = body.getAllByRole('option');
    await expect(options[0]).toHaveAccessibleName(/add “script”/i);
    await expect(options[1]).toHaveAccessibleName(/typescript type safety/i);
    await userEvent.keyboard('{Enter}');
    const removeScript = canvas.getByRole('button', {
      name: 'Remove Script'
    });
    await expect(removeScript).toBeInTheDocument();
    await expect(removeScript.parentElement).toHaveAttribute('data-new', 'true');
    await userEvent.type(input, 'React');
    await expect(body.queryByRole('option', {
      name: /add “react”/i
    })).not.toBeInTheDocument();
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Be=(we=k.parameters)==null?void 0:we.docs)==null?void 0:Be.source}}};var fe,Re,Ae;C.parameters={...C.parameters,docs:{...(fe=C.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: function ControlledCustomValueChipRender() {
    const [value, setValue] = useState<string | null>('ABC');
    return <Box w="sm">
        <Autocomplete allowCustomValue value={value} onValueChange={setValue} getCreateOptionLabel={query => \`Search for “\${query}”\`} name="controlled-custom" aria-label="Part search">
          {renderOptions()}
        </Autocomplete>
      </Box>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const removeChip = canvas.getByRole('button', {
      name: 'Remove ABC'
    });
    await expect(removeChip.parentElement).toHaveAttribute('data-new', 'true');
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Ae=(Re=C.parameters)==null?void 0:Re.docs)==null?void 0:Ae.source}}};var Te,ke,Ce;E.parameters={...E.parameters,docs:{...(Te=E.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  render: function CommitCustomValueOnBlurRender() {
    const [value, setValue] = useState<string | null>(null);
    return <Box w="sm" display="flex" flexDirection="column" gap="12">
        <Autocomplete allowCustomValue value={value} onValueChange={setValue} getCreateOptionLabel={query => \`Search for “\${query}”\`} name="blur-commit" aria-label="Vendor search">
          {renderOptions()}
        </Autocomplete>
        <Button type="button">Next field</Button>
      </Box>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('combobox');
    await userEvent.type(input, 'Acme');
    await userEvent.tab();
    const removeChip = canvas.getByRole('button', {
      name: 'Remove Acme'
    });
    await expect(removeChip).toBeInTheDocument();
    await expect(removeChip.parentElement).toHaveAttribute('data-new', 'true');
    await userEvent.click(removeChip);
    await userEvent.click(input);
    await userEvent.type(input, 'abc');
    await userEvent.keyboard('{Escape}');
    await expect(input).toHaveValue('');
    await userEvent.tab();
    await expect(canvas.queryByRole('button', {
      name: 'Remove abc'
    })).not.toBeInTheDocument();
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Ce=(ke=E.parameters)==null?void 0:ke.docs)==null?void 0:Ce.source}}};var Ee,Oe,Se;O.parameters={...O.parameters,docs:{...(Ee=O.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  render: () => <Box w="sm">
      <Autocomplete defaultOpen name="scrollable" aria-label="Scrollable technologies">
        {renderOptions(extendedOptions)}
      </Autocomplete>
    </Box>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Se=(Oe=O.parameters)==null?void 0:Oe.docs)==null?void 0:Se.source}}};var Ve,je,Ie;S.parameters={...S.parameters,docs:{...(Ve=S.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  render: () => <Box w="sm">
      <Autocomplete loading defaultOpen name="loading" aria-label="Loading technologies" />
    </Box>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Ie=(je=S.parameters)==null?void 0:je.docs)==null?void 0:Ie.source}}};var De,He,Fe;V.parameters={...V.parameters,docs:{...(De=V.parameters)==null?void 0:De.docs,source:{originalSource:`{
  render: function InfiniteLoadingRender() {
    const [options, setOptions] = useState(() => extendedOptions.slice(0, 8));
    const [loadingMore, setLoadingMore] = useState(false);
    const hasMore = options.length < extendedOptions.length;
    const loadMore = () => {
      if (loadingMore || !hasMore) {
        return;
      }
      setLoadingMore(true);
      window.setTimeout(() => {
        setOptions(currentOptions => extendedOptions.slice(0, currentOptions.length + 4));
        setLoadingMore(false);
      }, 200);
    };
    return <Box w="sm">
        <Autocomplete defaultOpen name="infinite" aria-label="Technology with more results" hasMore={hasMore} loadingMore={loadingMore} onLoadMore={loadMore}>
          {renderOptions(options)}
        </Autocomplete>
      </Box>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Fe=(He=V.parameters)==null?void 0:He.docs)==null?void 0:Fe.source}}};var Le,Me,qe;j.parameters={...j.parameters,docs:{...(Le=j.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  render: () => <Box w="sm">
      <Autocomplete defaultInputValue="angular" defaultOpen name="empty" aria-label="Technology with no matches">
        {renderOptions()}
      </Autocomplete>
    </Box>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(qe=(Me=j.parameters)==null?void 0:Me.docs)==null?void 0:qe.source}}};var Pe,$e,Ke;I.parameters={...I.parameters,docs:{...(Pe=I.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  render: function ControlledInputRender() {
    const [inputValue, setInputValue] = useState('');
    return <Box display="grid" gap="8" w="sm">
        <Autocomplete inputValue={inputValue} onInputValueChange={setInputValue} name="controlled-input" aria-label="Controlled query">
          {renderOptions()}
        </Autocomplete>
        <Box color="text.subtle">{\`Query: \${inputValue || 'empty'}\`}</Box>
      </Box>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Ke=($e=I.parameters)==null?void 0:$e.docs)==null?void 0:Ke.source}}};var Ne,Ue,ze;D.parameters={...D.parameters,docs:{...(Ne=D.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  render: function ControlledOpenRender() {
    const [open, setOpen] = useState(false);
    const [openChangeCount, setOpenChangeCount] = useState(0);
    const handleOpenChange = (nextOpen: boolean) => {
      setOpen(nextOpen);
      setOpenChangeCount(currentCount => currentCount + 1);
    };
    return <Box display="grid" gap="8" w="sm">
        <Button onClick={() => setOpen(currentOpen => !currentOpen)}>
          Toggle suggestions
        </Button>
        <Autocomplete open={open} onOpenChange={handleOpenChange} name="controlled-open" aria-label="Controlled suggestions">
          {renderOptions()}
        </Autocomplete>
        <Box color="text.subtle">{\`Open changes: \${openChangeCount}\`}</Box>
      </Box>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('combobox');
    await userEvent.click(input);
    await expect(canvas.getByText('Open changes: 1')).toBeInTheDocument();
    await userEvent.keyboard('{Escape}');
    await expect(canvas.getByText('Open changes: 2')).toBeInTheDocument();
    await expect(input).toHaveAttribute('aria-expanded', 'false');
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ze=(Ue=D.parameters)==null?void 0:Ue.docs)==null?void 0:ze.source}}};var We,Qe,_e;H.parameters={...H.parameters,docs:{...(We=H.parameters)==null?void 0:We.docs,source:{originalSource:`{
  name: 'Ex: With FormField',
  render: () => <Box w="sm">
      <FormField label="Primary technology" labelFor="primary-technology" helpText="Choose the technology this project depends on most.">
        <Autocomplete id="primary-technology" name="primaryTechnology">
          {renderOptions()}
        </Autocomplete>
      </FormField>
    </Box>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(_e=(Qe=H.parameters)==null?void 0:Qe.docs)==null?void 0:_e.source}}};var Ge,Je,Xe;F.parameters={...F.parameters,docs:{...(Ge=F.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  name: 'Ex: Technology Assignment',
  render: () => <Box w="md">
      <FormField label="Project stack" labelFor="project-stack" helpText="Search the supported catalog or create a project-specific value.">
        <Autocomplete id="project-stack" name="projectStack" multiple allowCustomValue defaultValue={['react', 'typescript']} placeholder="Add technology…">
          {renderOptions(extendedOptions)}
        </Autocomplete>
      </FormField>
    </Box>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Xe=(Je=F.parameters)==null?void 0:Je.docs)==null?void 0:Xe.source}}};var Ye,Ze,et;L.parameters={...L.parameters,docs:{...(Ye=L.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  name: 'Ex: Keyboard Selection',
  render: () => <Box w="sm">
      <Autocomplete name="keyboard" aria-label="Keyboard selection">
        {renderOptions()}
      </Autocomplete>
    </Box>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('combobox');
    await userEvent.click(input);
    await expect(input).toHaveAttribute('aria-expanded', 'true');
    await expect(input).toHaveAttribute('aria-activedescendant');
    await userEvent.keyboard('{Enter}');
    await expect(input).toHaveValue('');
    await expect(canvas.getByRole('button', {
      name: 'Remove React'
    })).toBeInTheDocument();
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(et=(Ze=L.parameters)==null?void 0:Ze.docs)==null?void 0:et.source}}};var tt,at,ot;M.parameters={...M.parameters,docs:{...(tt=M.parameters)==null?void 0:tt.docs,source:{originalSource:`{
  name: 'Ex: Keyboard Token Editing',
  render: () => <Box w="sm">
      <Autocomplete multiple defaultValue={['react', 'typescript']} name="token-editing" aria-label="Token editing">
        {renderOptions()}
      </Autocomplete>
    </Box>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('combobox');
    const removeTypeScript = canvas.getByRole('button', {
      name: 'Remove TypeScript'
    });
    await userEvent.click(input);
    await userEvent.keyboard('{Backspace}');
    await expect(removeTypeScript).toHaveFocus();
    await expect(removeTypeScript).toBeInTheDocument();
    await userEvent.keyboard('{Backspace}');
    await expect(canvas.queryByRole('button', {
      name: 'Remove TypeScript'
    })).not.toBeInTheDocument();
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ot=(at=M.parameters)==null?void 0:at.docs)==null?void 0:ot.source}}};var nt,rt,st;q.parameters={...q.parameters,docs:{...(nt=q.parameters)==null?void 0:nt.docs,source:{originalSource:`{
  name: 'Ex: Test Id Reaches The Listbox',
  render: () => <Box w="sm" data-testid="filters">
      <Autocomplete data-testid="technology" aria-label="Technology">
        {renderOptions()}
      </Autocomplete>
    </Box>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const screen = within(canvasElement.ownerDocument.body);

    // The test id is written on the root, not on the combobox input, so the
    // chain scope it opens encloses the portal the input only sits beside.
    const root = canvas.getByTestId('technology');
    const input = canvas.getByRole('combobox');
    await expect(root).not.toBe(input);
    await expect(root).toContainElement(input);
    await expect(input).not.toHaveAttribute('data-testid');

    // The input keeps a stable query handle through \`data-ds-part\`, which the
    // component emits on its own. It marks the trigger only, never the root.
    await expect(input).toHaveAttribute('data-ds-part', 'trigger');
    await expect(root).not.toHaveAttribute('data-ds-part');
    await userEvent.click(input);
    const listbox = await screen.findByRole('listbox');

    // The listbox is portaled out of the root, so only the chain connects them.
    await expect(root.contains(listbox)).toBe(false);
    const chainRoot = listbox.closest('[data-ds-chain]');

    // The chain is built from \`data-testid\` alone, so the trigger's
    // \`data-ds-part\` contributes no node to it.
    await expect(chainRoot).toHaveAttribute('data-ds-chain', 'filters>technology');
    await expect(chainRoot?.getAttribute('data-ds-chain')).not.toContain('trigger');
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(st=(rt=q.parameters)==null?void 0:rt.docs)==null?void 0:st.source}}};var lt,ct,it;P.parameters={...P.parameters,docs:{...(lt=P.parameters)==null?void 0:lt.docs,source:{originalSource:`{
  name: 'Test: data-ds-component',
  render: () => <Box display="flex" flexDirection="column" gap="8" w="sm">
      <Autocomplete data-testid="ds-default" aria-label="Default technology">
        {renderOptions()}
      </Autocomplete>
      <Autocomplete data-testid="ds-override" data-ds-component="TechnologyPicker" aria-label="Overridden technology">
        {renderOptions()}
      </Autocomplete>
    </Box>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const screen = within(canvasElement.ownerDocument.body);

    // Emitted automatically on the root, without an author opting in.
    const root = canvas.getByTestId('ds-default');
    await expect(root).toHaveAttribute('data-ds-component', 'Autocomplete');

    // The combobox input is an inner part of the root, so it stays unmarked.
    const input = canvas.getByRole('combobox', {
      name: 'Default technology'
    });
    await expect(input).toHaveAttribute('data-ds-part', 'trigger');
    await expect(input).not.toHaveAttribute('data-ds-component');

    // An explicitly passed value wins, still on the root and not the input.
    const overriddenRoot = canvas.getByTestId('ds-override');
    await expect(overriddenRoot).toHaveAttribute('data-ds-component', 'TechnologyPicker');
    await expect(canvas.getByRole('combobox', {
      name: 'Overridden technology'
    })).not.toHaveAttribute('data-ds-component');

    // The portaled listbox is not the Autocomplete root either.
    await userEvent.click(input);
    const listbox = await screen.findByRole('listbox');
    await expect(listbox).not.toHaveAttribute('data-ds-component', 'Autocomplete');
    await expect(listbox).not.toHaveAttribute('data-ds-component', 'TechnologyPicker');
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(it=(ct=P.parameters)==null?void 0:ct.docs)==null?void 0:it.source}}};const qt=["Default","Filtering","Selected","Multiple","MultipleLongValues","LimitTags","Sizes","ValidationStates","Disabled","DisabledOptions","AllowCustomValue","ControlledCustomValueChip","CommitCustomValueOnBlur","ScrollableListbox","Loading","InfiniteLoading","EmptyResults","ControlledInput","ControlledOpen","WithFormField","TechnologyAssignmentExample","KeyboardSelection","KeyboardTokenEditing","TestIdReachesPortaledListbox","DsComponentAttribute"];export{k as AllowCustomValue,E as CommitCustomValueOnBlur,C as ControlledCustomValueChip,I as ControlledInput,D as ControlledOpen,h as Default,A as Disabled,T as DisabledOptions,P as DsComponentAttribute,j as EmptyResults,g as Filtering,V as InfiniteLoading,L as KeyboardSelection,M as KeyboardTokenEditing,B as LimitTags,S as Loading,v as Multiple,w as MultipleLongValues,O as ScrollableListbox,x as Selected,f as Sizes,F as TechnologyAssignmentExample,q as TestIdReachesPortaledListbox,R as ValidationStates,H as WithFormField,qt as __namedExportsOrder,Mt as default};
