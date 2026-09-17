import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./index-BKyFwriW.js";import{w as m,u as l,e as o}from"./index-L8OlCEhE.js";import{B as u}from"./dsComponent-BG2jnRr7.js";import{B as yt}from"./Button-Cr4bC5CG.js";import{F as ht}from"./FormField-DdJop6CC.js";import{A as c,O as N}from"./Option-CIgC0JwZ.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Icon-CrwLKW7B.js";import"./IconConfig-BuieZFlx.js";import"./Spinner-PLunUSsK.js";import"./FieldContext-D6URyQos.js";import"./Label-Duobk4D3.js";import"./Text-IAtRPmZy.js";import"./Tooltip-bxPM6yCH.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";import"./dsPart-nnoJM9m6.js";import"./ListItem-BTQR-hRu.js";import"./HighlightText-DKF3xkQK.js";import"./Checkbox-BKc0omfg.js";import"./Divider-Dbp7vcYx.js";import"./Toggle-mlz1wkXL.js";import"./Chip-BLenVk2H.js";import"./FloatingLayerContext-BryH8O9I.js";const gt=[{value:"react",label:"React",description:"UI library"},{value:"typescript",label:"TypeScript",description:"Type safety"},{value:"storybook",label:"Storybook",description:"Component workshop"},{value:"panda",label:"Panda CSS",description:"Design system styles"},{value:"floating-ui",label:"Floating UI",description:"Popup engine"},{value:"vite",label:"Vite",description:"Build tooling"}],y=[...gt,{value:"vitest",label:"Vitest",description:"Unit testing"},{value:"playwright",label:"Playwright",description:"Browser testing"},{value:"eslint",label:"ESLint",description:"Code analysis"},{value:"prettier",label:"Prettier",description:"Code formatting"},{value:"react-router",label:"React Router",description:"Routing"},{value:"tanstack-query",label:"TanStack Query",description:"Data"}],i=(n=gt)=>n.map(e=>t.jsx(N,{value:e.value,label:e.label,description:e.description},e.value)),h=(n,e)=>(a,r)=>{n(a),e(r==="create-option")},Nt={title:"Components/Autocomplete",component:c,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Use Autocomplete when people benefit from filtering a set of options as they type. Matching uses case-insensitive substrings within each option label or description. Focusing the field opens its suggestions and activates the first available option. Use Select for a short fixed list and TextInput for unrestricted text."}}},args:{"aria-label":"Technology",placeholder:"Choose a technology…"},argTypes:{multiple:{control:"boolean"},limitTags:{control:"number"},allowCustomValue:{control:"boolean"},isCustomValue:{control:"boolean"},disabled:{control:"boolean"},error:{control:"boolean"},invalid:{control:"boolean"},valid:{control:"boolean"}}},g={render:function(e){const[a,r]=d.useState(null);return t.jsx(u,{w:"xs",children:t.jsx(c,{...e,multiple:!1,value:a,defaultValue:void 0,onValueChange:r,onChange:void 0,name:"technology",children:i()})})}},w={render:()=>t.jsx(u,{w:"xs",children:t.jsx(c,{name:"technology-filter","aria-label":"Filter technologies",children:i()})}),play:async({canvasElement:n})=>{const e=m(n),a=m(document.body),r=e.getByRole("combobox");await l.type(r,"typ"),await o(a.getByRole("option",{name:/typescript type safety/i})).toBeInTheDocument(),await o(a.queryByRole("option",{name:/storybook/i})).not.toBeInTheDocument(),await l.clear(r),await l.type(r,"workshop");const s=a.getByRole("option",{name:/storybook component workshop/i});await o(m(s).getByText("workshop",{selector:"mark"})).toBeInTheDocument()},parameters:{controls:{disable:!0}}},v={render:n=>t.jsx(u,{w:"xs",children:t.jsx(c,{...n,multiple:!1,value:void 0,defaultValue:"react",onValueChange:void 0,onChange:void 0,name:"technology",children:i()})}),play:async({canvasElement:n})=>{const e=m(n),a=e.getByRole("combobox",{name:"Technology"});await o(a).toHaveValue(""),await o(e.getByRole("button",{name:"Remove React"})).toBeInTheDocument(),await l.click(a),await l.keyboard("P"),await o(a).toHaveValue("P"),await o(e.queryByRole("button",{name:"Remove React"})).not.toBeInTheDocument()}},x={render:function(){const[e,a]=d.useState(["react","typescript","storybook"]);return t.jsx(u,{w:"sm",children:t.jsx(c,{multiple:!0,value:e,onValueChange:a,name:"stack","aria-label":"Project stack",placeholder:"Add technology…",children:i()})})},play:async({canvasElement:n})=>{const e=m(n),a=m(document.body),r=e.getByRole("combobox"),s=e.getByRole("button",{name:"Remove React"});await l.click(r),await o(a.queryByRole("checkbox")).not.toBeInTheDocument(),await l.click(s),await o(e.queryByRole("button",{name:"Remove React"})).not.toBeInTheDocument(),await o(r).toHaveFocus()},parameters:{controls:{disable:!0}}},B={render:()=>t.jsx(u,{w:"224",children:t.jsx(c,{multiple:!0,defaultValue:["storybook","floating-ui","typescript"],name:"narrow-stack","aria-label":"Narrow project stack",placeholder:"Add…",children:i()})}),parameters:{controls:{disable:!0}}},C={render:()=>t.jsx(u,{w:"sm",children:t.jsx(c,{multiple:!0,limitTags:2,defaultValue:["react","typescript","storybook","panda","floating-ui"],name:"limited-stack","aria-label":"Limited project stack",children:i()})}),play:async({canvasElement:n})=>{const e=m(n);await o(e.getByText("+3")).toBeInTheDocument(),await l.click(e.getByRole("combobox")),await o(e.queryByText("+3")).not.toBeInTheDocument(),await o(e.getByRole("button",{name:"Remove Floating UI"})).toBeInTheDocument()},parameters:{controls:{disable:!0}}},R={render:()=>t.jsx(u,{display:"grid",gap:"12",w:"sm",children:["sm","md","lg","xl"].map(n=>t.jsx(c,{size:n,defaultValue:"react",name:`technology-${n}`,"aria-label":`${n} autocomplete`,children:i()},n))}),parameters:{controls:{disable:!0}}},f={render:()=>t.jsxs(u,{display:"grid",gap:"12",w:"sm",children:[t.jsx(c,{name:"default","aria-label":"Default",children:i()}),t.jsx(c,{name:"valid","aria-label":"Valid",valid:!0,children:i()}),t.jsx(c,{name:"invalid","aria-label":"Invalid",invalid:!0,children:i()}),t.jsx(c,{name:"error","aria-label":"Error",error:!0,children:i()})]}),parameters:{controls:{disable:!0}}},V={render:()=>t.jsx(u,{w:"sm",children:t.jsx(c,{multiple:!0,disabled:!0,defaultValue:["react","typescript"],name:"disabled-stack","aria-label":"Disabled technologies",children:i()})}),play:async({canvasElement:n})=>{const e=m(n);await o(e.getByRole("combobox")).toBeDisabled(),await o(e.getByRole("button",{name:"Remove React"})).toBeDisabled()},parameters:{controls:{disable:!0}}},A={render:()=>t.jsx(u,{w:"sm",children:t.jsxs(c,{name:"framework","aria-label":"Framework",children:[t.jsx(N,{value:"react",label:"React"}),t.jsx(N,{value:"legacy",label:"Legacy framework",disabled:!0}),t.jsx(N,{value:"storybook",label:"Storybook"})]})}),parameters:{controls:{disable:!0}}},k={render:function(){const[e,a]=d.useState(null),[r,s]=d.useState(!1);return t.jsx(u,{w:"sm",children:t.jsx(c,{allowCustomValue:!0,value:e,isCustomValue:r,onValueChange:h(a,s),getCreateOptionLabel:p=>`Search for “${p}”`,name:"custom-technology","aria-label":"Technology",placeholder:"Search or choose…",children:i()})})},play:async({canvasElement:n})=>{const e=m(n),a=e.getByRole("combobox"),r=m(document.body);await l.type(a,"Script");let s=r.getAllByRole("option");await o(s[0]).toHaveAccessibleName(/search for “script”/i),await o(s[1]).toHaveAccessibleName(/typescript type safety/i),await l.keyboard("{Enter}");const p=e.getByRole("button",{name:"Remove Script"});await o(p).toBeInTheDocument(),await o(p.parentElement).toHaveAttribute("data-new","true"),await l.click(p),await l.click(a),await l.clear(a),await l.type(a,"React"),s=r.getAllByRole("option"),await o(s[0]).toHaveAccessibleName(/search for “react”/i),await o(r.getByRole("option",{name:/react ui library/i})).toBeInTheDocument(),await l.keyboard("{ArrowDown}"),await l.keyboard("{Enter}");const b=e.getByRole("button",{name:"Remove React"});await o(b).toBeInTheDocument(),await o(b.parentElement).not.toHaveAttribute("data-new")},parameters:{controls:{disable:!0}}},T={render:function(){const[e,a]=d.useState("ABC"),[r,s]=d.useState(!0);return t.jsx(u,{w:"sm",children:t.jsx(c,{allowCustomValue:!0,value:e,isCustomValue:r,onValueChange:h(a,s),getCreateOptionLabel:p=>`Search for “${p}”`,name:"controlled-custom","aria-label":"Part search",children:i()})})},play:async({canvasElement:n})=>{const a=m(n).getByRole("button",{name:"Remove ABC"});await o(a.parentElement).toHaveAttribute("data-new","true")},parameters:{controls:{disable:!0}}},E={render:function(){const[e,a]=d.useState("react"),[r,s]=d.useState(!0);return t.jsx(u,{w:"sm",children:t.jsx(c,{allowCustomValue:!0,value:e,isCustomValue:r,onValueChange:h(a,s),getCreateOptionLabel:p=>`Search for “${p}”`,name:"hydrated-custom-match","aria-label":"Part search with catalog collision",children:i()})})},play:async({canvasElement:n})=>{const a=m(n).getByRole("button",{name:"Remove react"});await o(a.parentElement).toHaveAttribute("data-new","true")},parameters:{controls:{disable:!0}}},S={render:function(){const[e,a]=d.useState(null),[r,s]=d.useState(!1);return t.jsxs(u,{w:"sm",display:"flex",flexDirection:"column",gap:"12",children:[t.jsx(c,{allowCustomValue:!0,value:e,isCustomValue:r,onValueChange:h(a,s),getCreateOptionLabel:p=>`Search for “${p}”`,name:"blur-commit","aria-label":"Vendor search",children:i()}),t.jsx(yt,{type:"button",children:"Next field"})]})},play:async({canvasElement:n})=>{const e=m(n),a=e.getByRole("combobox"),r=m(document.body);await l.type(a,"Acme"),await l.tab();const s=e.getByRole("button",{name:"Remove Acme"});await o(s).toBeInTheDocument(),await o(s.parentElement).toHaveAttribute("data-new","true"),await l.click(s),await l.click(a),await l.type(a,"React"),await o(r.getByRole("option",{name:/search for “react”/i})).toBeInTheDocument(),await l.keyboard("{ArrowDown}"),await l.tab();const p=e.getByRole("button",{name:"Remove React"});await o(p.parentElement).toHaveAttribute("data-new","true"),await l.click(p),await l.click(a),await l.type(a,"abc"),await l.keyboard("{Escape}"),await o(a).toHaveValue(""),await l.tab(),await o(e.queryByRole("button",{name:"Remove abc"})).not.toBeInTheDocument()},parameters:{controls:{disable:!0}}},O={render:()=>t.jsx(u,{w:"sm",children:t.jsx(c,{defaultOpen:!0,name:"scrollable","aria-label":"Scrollable technologies",children:i(y)})}),parameters:{controls:{disable:!0}}},I={render:()=>t.jsx(u,{w:"sm",children:t.jsx(c,{loading:!0,defaultOpen:!0,name:"loading","aria-label":"Loading technologies"})}),parameters:{controls:{disable:!0}}},j={render:function(){const[e,a]=d.useState(()=>y.slice(0,8)),[r,s]=d.useState(!1),p=e.length<y.length,b=()=>{r||!p||(s(!0),window.setTimeout(()=>{a(U=>y.slice(0,U.length+4)),s(!1)},200))};return t.jsx(u,{w:"sm",children:t.jsx(c,{defaultOpen:!0,name:"infinite","aria-label":"Technology with more results",hasMore:p,loadingMore:r,onLoadMore:b,children:i(e)})})},parameters:{controls:{disable:!0}}},D={render:()=>t.jsx(u,{w:"sm",children:t.jsx(c,{defaultInputValue:"angular",defaultOpen:!0,name:"empty","aria-label":"Technology with no matches",children:i()})}),parameters:{controls:{disable:!0}}},H={render:function(){const[e,a]=d.useState("");return t.jsxs(u,{display:"grid",gap:"8",w:"sm",children:[t.jsx(c,{inputValue:e,onInputValueChange:a,name:"controlled-input","aria-label":"Controlled query",children:i()}),t.jsx(u,{color:"text.subtle",children:`Query: ${e||"empty"}`})]})},parameters:{controls:{disable:!0}}},F={render:function(){const[e,a]=d.useState(!1),[r,s]=d.useState(0),p=b=>{a(b),s(U=>U+1)};return t.jsxs(u,{display:"grid",gap:"8",w:"sm",children:[t.jsx(yt,{onClick:()=>a(b=>!b),children:"Toggle suggestions"}),t.jsx(c,{open:e,onOpenChange:p,name:"controlled-open","aria-label":"Controlled suggestions",children:i()}),t.jsx(u,{color:"text.subtle",children:`Open changes: ${r}`})]})},play:async({canvasElement:n})=>{const e=m(n),a=e.getByRole("combobox");await l.click(a),await o(e.getByText("Open changes: 1")).toBeInTheDocument(),await l.keyboard("{Escape}"),await o(e.getByText("Open changes: 2")).toBeInTheDocument(),await o(a).toHaveAttribute("aria-expanded","false")},parameters:{controls:{disable:!0}}},L={name:"Ex: With FormField",render:()=>t.jsx(u,{w:"sm",children:t.jsx(ht,{label:"Primary technology",labelFor:"primary-technology",helpText:"Choose the technology this project depends on most.",children:t.jsx(c,{id:"primary-technology",name:"primaryTechnology",children:i()})})}),parameters:{controls:{disable:!0}}},M={name:"Ex: Custom Search Filter",render:function(){const[e,a]=d.useState(null),[r,s]=d.useState(!1);return t.jsx(u,{w:"md",children:t.jsx(ht,{label:"Technology",labelFor:"project-stack",helpText:"Type to search. Enter or blur keeps a contains search; arrow to a catalog row and Enter for an exact pick. Custom values are single-select only.",children:t.jsx(c,{id:"project-stack",name:"projectStack",allowCustomValue:!0,value:e,isCustomValue:r,onValueChange:h(a,s),getCreateOptionLabel:p=>`Search for “${p}”`,placeholder:"Search or choose…",children:i(y)})})})},parameters:{controls:{disable:!0}}},q={name:"Ex: Keyboard Selection",render:()=>t.jsx(u,{w:"sm",children:t.jsx(c,{name:"keyboard","aria-label":"Keyboard selection",children:i()})}),play:async({canvasElement:n})=>{const e=m(n),a=e.getByRole("combobox");await l.click(a),await o(a).toHaveAttribute("aria-expanded","true"),await o(a).toHaveAttribute("aria-activedescendant"),await l.keyboard("{Enter}"),await o(a).toHaveValue(""),await o(e.getByRole("button",{name:"Remove React"})).toBeInTheDocument()},parameters:{controls:{disable:!0}}},P={name:"Ex: Keyboard Token Editing",render:()=>t.jsx(u,{w:"sm",children:t.jsx(c,{multiple:!0,defaultValue:["react","typescript"],name:"token-editing","aria-label":"Token editing",children:i()})}),play:async({canvasElement:n})=>{const e=m(n),a=e.getByRole("combobox"),r=e.getByRole("button",{name:"Remove TypeScript"});await l.click(a),await l.keyboard("{Backspace}"),await o(r).toHaveFocus(),await o(r).toBeInTheDocument(),await l.keyboard("{Backspace}"),await o(e.queryByRole("button",{name:"Remove TypeScript"})).not.toBeInTheDocument()},parameters:{controls:{disable:!0}}},$={name:"Ex: Test Id Reaches The Listbox",render:()=>t.jsx(u,{w:"sm","data-testid":"filters",children:t.jsx(c,{"data-testid":"technology","aria-label":"Technology",children:i()})}),play:async({canvasElement:n})=>{const e=m(n),a=m(n.ownerDocument.body),r=e.getByTestId("technology"),s=e.getByRole("combobox");await o(r).not.toBe(s),await o(r).toContainElement(s),await o(s).not.toHaveAttribute("data-testid"),await o(s).toHaveAttribute("data-ds-part","trigger"),await o(r).not.toHaveAttribute("data-ds-part"),await l.click(s);const p=await a.findByRole("listbox");await o(r.contains(p)).toBe(!1);const b=p.closest("[data-ds-chain]");await o(b).toHaveAttribute("data-ds-chain","filters>technology"),await o(b==null?void 0:b.getAttribute("data-ds-chain")).not.toContain("trigger")},parameters:{controls:{disable:!0}}},K={name:"Test: data-ds-component",render:()=>t.jsxs(u,{display:"flex",flexDirection:"column",gap:"8",w:"sm",children:[t.jsx(c,{"data-testid":"ds-default","aria-label":"Default technology",children:i()}),t.jsx(c,{"data-testid":"ds-override","data-ds-component":"TechnologyPicker","aria-label":"Overridden technology",children:i()})]}),play:async({canvasElement:n})=>{const e=m(n),a=m(n.ownerDocument.body),r=e.getByTestId("ds-default");await o(r).toHaveAttribute("data-ds-component","Autocomplete");const s=e.getByRole("combobox",{name:"Default technology"});await o(s).toHaveAttribute("data-ds-part","trigger"),await o(s).not.toHaveAttribute("data-ds-component");const p=e.getByTestId("ds-override");await o(p).toHaveAttribute("data-ds-component","TechnologyPicker"),await o(e.getByRole("combobox",{name:"Overridden technology"})).not.toHaveAttribute("data-ds-component"),await l.click(s);const b=await a.findByRole("listbox");await o(b).not.toHaveAttribute("data-ds-component","Autocomplete"),await o(b).not.toHaveAttribute("data-ds-component","TechnologyPicker")},parameters:{controls:{disable:!0}}};var z,W,Q;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: function DefaultRender(args) {
    const [value, setValue] = useState<string | null>(null);
    return <Box w="xs">
        <Autocomplete {...args} multiple={false} value={value} defaultValue={undefined} onValueChange={setValue} onChange={undefined} name="technology">
          {renderOptions()}
        </Autocomplete>
      </Box>;
  }
}`,...(Q=(W=g.parameters)==null?void 0:W.docs)==null?void 0:Q.source}}};var _,G,J;w.parameters={...w.parameters,docs:{...(_=w.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(J=(G=w.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var X,Y,Z;v.parameters={...v.parameters,docs:{...(X=v.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Z=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,te,ae;x.parameters={...x.parameters,docs:{...(ee=x.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ae=(te=x.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var oe,ne,re;B.parameters={...B.parameters,docs:{...(oe=B.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(re=(ne=B.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var se,le,ce;C.parameters={...C.parameters,docs:{...(se=C.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ce=(le=C.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var ie,ue,pe;R.parameters={...R.parameters,docs:{...(ie=R.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(pe=(ue=R.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var me,de,be;f.parameters={...f.parameters,docs:{...(me=f.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(be=(de=f.parameters)==null?void 0:de.docs)==null?void 0:be.source}}};var ye,he,ge;V.parameters={...V.parameters,docs:{...(ye=V.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(ge=(he=V.parameters)==null?void 0:he.docs)==null?void 0:ge.source}}};var we,ve,xe;A.parameters={...A.parameters,docs:{...(we=A.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(xe=(ve=A.parameters)==null?void 0:ve.docs)==null?void 0:xe.source}}};var Be,Ce,Re;k.parameters={...k.parameters,docs:{...(Be=k.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  render: function AllowCustomValueRender() {
    const [value, setValue] = useState<string | null>(null);
    const [isCustomValue, setIsCustomValue] = useState(false);
    return <Box w="sm">
        <Autocomplete allowCustomValue value={value} isCustomValue={isCustomValue} onValueChange={handleCustomValueChange(setValue, setIsCustomValue)} getCreateOptionLabel={query => \`Search for “\${query}”\`} name="custom-technology" aria-label="Technology" placeholder="Search or choose…">
          {renderOptions()}
        </Autocomplete>
      </Box>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('combobox');
    const body = within(document.body);
    await userEvent.type(input, 'Script');
    let options = body.getAllByRole('option');
    await expect(options[0]).toHaveAccessibleName(/search for “script”/i);
    await expect(options[1]).toHaveAccessibleName(/typescript type safety/i);
    await userEvent.keyboard('{Enter}');
    const removeScript = canvas.getByRole('button', {
      name: 'Remove Script'
    });
    await expect(removeScript).toBeInTheDocument();
    await expect(removeScript.parentElement).toHaveAttribute('data-new', 'true');
    await userEvent.click(removeScript);
    await userEvent.click(input);
    await userEvent.clear(input);
    await userEvent.type(input, 'React');
    options = body.getAllByRole('option');
    await expect(options[0]).toHaveAccessibleName(/search for “react”/i);
    await expect(body.getByRole('option', {
      name: /react ui library/i
    })).toBeInTheDocument();
    await userEvent.keyboard('{ArrowDown}');
    await userEvent.keyboard('{Enter}');
    const removeReact = canvas.getByRole('button', {
      name: 'Remove React'
    });
    await expect(removeReact).toBeInTheDocument();
    await expect(removeReact.parentElement).not.toHaveAttribute('data-new');
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Re=(Ce=k.parameters)==null?void 0:Ce.docs)==null?void 0:Re.source}}};var fe,Ve,Ae;T.parameters={...T.parameters,docs:{...(fe=T.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: function ControlledCustomValueChipRender() {
    const [value, setValue] = useState<string | null>('ABC');
    const [isCustomValue, setIsCustomValue] = useState(true);
    return <Box w="sm">
        <Autocomplete allowCustomValue value={value} isCustomValue={isCustomValue} onValueChange={handleCustomValueChange(setValue, setIsCustomValue)} getCreateOptionLabel={query => \`Search for “\${query}”\`} name="controlled-custom" aria-label="Part search">
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
}`,...(Ae=(Ve=T.parameters)==null?void 0:Ve.docs)==null?void 0:Ae.source}}};var ke,Te,Ee;E.parameters={...E.parameters,docs:{...(ke=E.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  render: function HydratedCustomValueMatchingOptionRender() {
    const [value, setValue] = useState<string | null>('react');
    const [isCustomValue, setIsCustomValue] = useState(true);
    return <Box w="sm">
        <Autocomplete allowCustomValue value={value} isCustomValue={isCustomValue} onValueChange={handleCustomValueChange(setValue, setIsCustomValue)} getCreateOptionLabel={query => \`Search for “\${query}”\`} name="hydrated-custom-match" aria-label="Part search with catalog collision">
          {renderOptions()}
        </Autocomplete>
      </Box>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const removeChip = canvas.getByRole('button', {
      name: 'Remove react'
    });
    await expect(removeChip.parentElement).toHaveAttribute('data-new', 'true');
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Ee=(Te=E.parameters)==null?void 0:Te.docs)==null?void 0:Ee.source}}};var Se,Oe,Ie;S.parameters={...S.parameters,docs:{...(Se=S.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  render: function CommitCustomValueOnBlurRender() {
    const [value, setValue] = useState<string | null>(null);
    const [isCustomValue, setIsCustomValue] = useState(false);
    return <Box w="sm" display="flex" flexDirection="column" gap="12">
        <Autocomplete allowCustomValue value={value} isCustomValue={isCustomValue} onValueChange={handleCustomValueChange(setValue, setIsCustomValue)} getCreateOptionLabel={query => \`Search for “\${query}”\`} name="blur-commit" aria-label="Vendor search">
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
    const body = within(document.body);
    await userEvent.type(input, 'Acme');
    await userEvent.tab();
    const removeChip = canvas.getByRole('button', {
      name: 'Remove Acme'
    });
    await expect(removeChip).toBeInTheDocument();
    await expect(removeChip.parentElement).toHaveAttribute('data-new', 'true');
    await userEvent.click(removeChip);
    await userEvent.click(input);
    await userEvent.type(input, 'React');
    await expect(body.getByRole('option', {
      name: /search for “react”/i
    })).toBeInTheDocument();
    await userEvent.keyboard('{ArrowDown}');
    await userEvent.tab();
    const removeCustomReact = canvas.getByRole('button', {
      name: 'Remove React'
    });
    await expect(removeCustomReact.parentElement).toHaveAttribute('data-new', 'true');
    await userEvent.click(removeCustomReact);
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
}`,...(Ie=(Oe=S.parameters)==null?void 0:Oe.docs)==null?void 0:Ie.source}}};var je,De,He;O.parameters={...O.parameters,docs:{...(je=O.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
}`,...(He=(De=O.parameters)==null?void 0:De.docs)==null?void 0:He.source}}};var Fe,Le,Me;I.parameters={...I.parameters,docs:{...(Fe=I.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  render: () => <Box w="sm">
      <Autocomplete loading defaultOpen name="loading" aria-label="Loading technologies" />
    </Box>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Me=(Le=I.parameters)==null?void 0:Le.docs)==null?void 0:Me.source}}};var qe,Pe,$e;j.parameters={...j.parameters,docs:{...(qe=j.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...($e=(Pe=j.parameters)==null?void 0:Pe.docs)==null?void 0:$e.source}}};var Ke,Ne,Ue;D.parameters={...D.parameters,docs:{...(Ke=D.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
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
}`,...(Ue=(Ne=D.parameters)==null?void 0:Ne.docs)==null?void 0:Ue.source}}};var ze,We,Qe;H.parameters={...H.parameters,docs:{...(ze=H.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
}`,...(Qe=(We=H.parameters)==null?void 0:We.docs)==null?void 0:Qe.source}}};var _e,Ge,Je;F.parameters={...F.parameters,docs:{...(_e=F.parameters)==null?void 0:_e.docs,source:{originalSource:`{
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
}`,...(Je=(Ge=F.parameters)==null?void 0:Ge.docs)==null?void 0:Je.source}}};var Xe,Ye,Ze;L.parameters={...L.parameters,docs:{...(Xe=L.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
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
}`,...(Ze=(Ye=L.parameters)==null?void 0:Ye.docs)==null?void 0:Ze.source}}};var et,tt,at;M.parameters={...M.parameters,docs:{...(et=M.parameters)==null?void 0:et.docs,source:{originalSource:`{
  name: 'Ex: Custom Search Filter',
  render: function TechnologyAssignmentExampleRender() {
    const [value, setValue] = useState<string | null>(null);
    const [isCustomValue, setIsCustomValue] = useState(false);
    return <Box w="md">
        <FormField label="Technology" labelFor="project-stack" helpText="Type to search. Enter or blur keeps a contains search; arrow to a catalog row and Enter for an exact pick. Custom values are single-select only.">
          <Autocomplete id="project-stack" name="projectStack" allowCustomValue value={value} isCustomValue={isCustomValue} onValueChange={handleCustomValueChange(setValue, setIsCustomValue)} getCreateOptionLabel={query => \`Search for “\${query}”\`} placeholder="Search or choose…">
            {renderOptions(extendedOptions)}
          </Autocomplete>
        </FormField>
      </Box>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(at=(tt=M.parameters)==null?void 0:tt.docs)==null?void 0:at.source}}};var ot,nt,rt;q.parameters={...q.parameters,docs:{...(ot=q.parameters)==null?void 0:ot.docs,source:{originalSource:`{
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
}`,...(rt=(nt=q.parameters)==null?void 0:nt.docs)==null?void 0:rt.source}}};var st,lt,ct;P.parameters={...P.parameters,docs:{...(st=P.parameters)==null?void 0:st.docs,source:{originalSource:`{
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
}`,...(ct=(lt=P.parameters)==null?void 0:lt.docs)==null?void 0:ct.source}}};var it,ut,pt;$.parameters={...$.parameters,docs:{...(it=$.parameters)==null?void 0:it.docs,source:{originalSource:`{
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
}`,...(pt=(ut=$.parameters)==null?void 0:ut.docs)==null?void 0:pt.source}}};var mt,dt,bt;K.parameters={...K.parameters,docs:{...(mt=K.parameters)==null?void 0:mt.docs,source:{originalSource:`{
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
}`,...(bt=(dt=K.parameters)==null?void 0:dt.docs)==null?void 0:bt.source}}};const Ut=["Default","Filtering","Selected","Multiple","MultipleLongValues","LimitTags","Sizes","ValidationStates","Disabled","DisabledOptions","AllowCustomValue","ControlledCustomValueChip","HydratedCustomValueMatchingOption","CommitCustomValueOnBlur","ScrollableListbox","Loading","InfiniteLoading","EmptyResults","ControlledInput","ControlledOpen","WithFormField","TechnologyAssignmentExample","KeyboardSelection","KeyboardTokenEditing","TestIdReachesPortaledListbox","DsComponentAttribute"];export{k as AllowCustomValue,S as CommitCustomValueOnBlur,T as ControlledCustomValueChip,H as ControlledInput,F as ControlledOpen,g as Default,V as Disabled,A as DisabledOptions,K as DsComponentAttribute,D as EmptyResults,w as Filtering,E as HydratedCustomValueMatchingOption,j as InfiniteLoading,q as KeyboardSelection,P as KeyboardTokenEditing,C as LimitTags,I as Loading,x as Multiple,B as MultipleLongValues,O as ScrollableListbox,v as Selected,R as Sizes,M as TechnologyAssignmentExample,$ as TestIdReachesPortaledListbox,f as ValidationStates,L as WithFormField,Ut as __namedExportsOrder,Nt as default};
