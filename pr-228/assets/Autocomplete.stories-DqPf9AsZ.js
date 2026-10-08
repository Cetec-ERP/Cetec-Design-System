import{j as t,r as d,B as u}from"./iframe-ClDBFN2j.js";import{B as ht}from"./Button-DRwoyNLe.js";import{F as gt}from"./FormField-C-up5Qyd.js";import{A as c,O as N}from"./Option-BppMZoRq.js";import"./preload-helper-BJIPxT3X.js";import"./Spinner-CG9lNFGF.js";import"./FieldContext-E_9W_pfR.js";import"./Label-BdMP6elW.js";import"./dsPart-nnoJM9m6.js";import"./ListItem-DLsdOgiX.js";import"./HighlightText-CxfsFQFn.js";import"./Checkbox-DjU8c9bS.js";import"./Divider-DF3vqq8F.js";import"./Toggle-D1OAVIHI.js";import"./Chip-BlUHd7e3.js";import"./FloatingLayerContext-Dscy4Rhx.js";const{expect:a,userEvent:l,waitFor:_,within:m}=__STORYBOOK_MODULE_TEST__,wt=[{value:"react",label:"React",description:"UI library"},{value:"typescript",label:"TypeScript",description:"Type safety"},{value:"storybook",label:"Storybook",description:"Component workshop"},{value:"panda",label:"Panda CSS",description:"Design system styles"},{value:"floating-ui",label:"Floating UI",description:"Popup engine"},{value:"vite",label:"Vite",description:"Build tooling"}],y=[...wt,{value:"vitest",label:"Vitest",description:"Unit testing"},{value:"playwright",label:"Playwright",description:"Browser testing"},{value:"eslint",label:"ESLint",description:"Code analysis"},{value:"prettier",label:"Prettier",description:"Code formatting"},{value:"react-router",label:"React Router",description:"Routing"},{value:"tanstack-query",label:"TanStack Query",description:"Data"}],i=(o=wt)=>o.map(e=>t.jsx(N,{value:e.value,label:e.label,description:e.description},e.value)),h=(o,e)=>(n,r)=>{o(n),e(r==="create-option")},Ht={title:"Components/Autocomplete",component:c,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Use Autocomplete when people benefit from filtering a set of options as they type. Matching uses case-insensitive substrings within each option label or description. Focusing the field opens its suggestions and activates the first available option. Use Select for a short fixed list and TextInput for unrestricted text."}}},args:{"aria-label":"Technology",placeholder:"Choose a technology…"},argTypes:{multiple:{control:"boolean"},limitTags:{control:"number"},allowCustomValue:{control:"boolean"},isCustomValue:{control:"boolean"},disabled:{control:"boolean"},error:{control:"boolean"},invalid:{control:"boolean"},valid:{control:"boolean"}}},g={render:function(e){const[n,r]=d.useState(null);return t.jsx(u,{w:"xs",children:t.jsx(c,{...e,multiple:!1,value:n,defaultValue:void 0,onValueChange:r,onChange:void 0,name:"technology",children:i()})})}},w={render:()=>t.jsx(u,{w:"xs",children:t.jsx(c,{name:"technology-filter","aria-label":"Filter technologies",children:i()})}),play:async({canvasElement:o})=>{const e=m(o),n=m(document.body),r=e.getByRole("combobox");await l.type(r,"typ"),await a(n.getByRole("option",{name:/typescript type safety/i})).toBeInTheDocument(),await a(n.queryByRole("option",{name:/storybook/i})).not.toBeInTheDocument(),await l.clear(r),await l.type(r,"workshop");const s=await n.findByRole("option",{name:/storybook component\s*workshop/i});await a(m(s).getByText("workshop",{selector:"mark"})).toBeInTheDocument()},parameters:{controls:{disable:!0}}},v={render:o=>t.jsx(u,{w:"xs",children:t.jsx(c,{...o,multiple:!1,value:void 0,defaultValue:"react",onValueChange:void 0,onChange:void 0,name:"technology",children:i()})}),play:async({canvasElement:o})=>{const e=m(o),n=e.getByRole("combobox",{name:"Technology"});await a(n).toHaveValue(""),await a(e.getByRole("button",{name:"Remove React"})).toBeInTheDocument(),await l.click(n),await l.keyboard("P"),await a(n).toHaveValue("P"),await a(e.queryByRole("button",{name:"Remove React"})).not.toBeInTheDocument()}},x={render:function(){const[e,n]=d.useState(["react","typescript","storybook"]);return t.jsx(u,{w:"sm",children:t.jsx(c,{multiple:!0,value:e,onValueChange:n,name:"stack","aria-label":"Project stack",placeholder:"Add technology…",children:i()})})},play:async({canvasElement:o})=>{const e=m(o),n=m(document.body),r=e.getByRole("combobox"),s=e.getByRole("button",{name:"Remove React"});await l.click(r),await a(n.queryByRole("checkbox")).not.toBeInTheDocument(),await l.click(s),await a(e.queryByRole("button",{name:"Remove React"})).not.toBeInTheDocument(),await _(()=>a(r).toHaveFocus())},parameters:{controls:{disable:!0}}},B={render:()=>t.jsx(u,{w:"224",children:t.jsx(c,{multiple:!0,defaultValue:["storybook","floating-ui","typescript"],name:"narrow-stack","aria-label":"Narrow project stack",placeholder:"Add…",children:i()})}),parameters:{controls:{disable:!0}}},C={render:()=>t.jsx(u,{w:"sm",children:t.jsx(c,{multiple:!0,limitTags:2,defaultValue:["react","typescript","storybook","panda","floating-ui"],name:"limited-stack","aria-label":"Limited project stack",children:i()})}),play:async({canvasElement:o})=>{const e=m(o);await a(e.getByText("+3")).toBeInTheDocument(),await l.click(e.getByRole("combobox")),await a(e.queryByText("+3")).not.toBeInTheDocument(),await a(e.getByRole("button",{name:"Remove Floating UI"})).toBeInTheDocument()},parameters:{controls:{disable:!0}}},R={render:()=>t.jsx(u,{display:"grid",gap:"12",w:"sm",children:["sm","md","lg","xl"].map(o=>t.jsx(c,{size:o,defaultValue:"react",name:`technology-${o}`,"aria-label":`${o} autocomplete`,children:i()},o))}),parameters:{controls:{disable:!0}}},f={render:()=>t.jsxs(u,{display:"grid",gap:"12",w:"sm",children:[t.jsx(c,{name:"default","aria-label":"Default",children:i()}),t.jsx(c,{name:"valid","aria-label":"Valid",valid:!0,children:i()}),t.jsx(c,{name:"invalid","aria-label":"Invalid",invalid:!0,children:i()}),t.jsx(c,{name:"error","aria-label":"Error",error:!0,children:i()})]}),parameters:{controls:{disable:!0}}},V={render:()=>t.jsx(u,{w:"sm",children:t.jsx(c,{multiple:!0,disabled:!0,defaultValue:["react","typescript"],name:"disabled-stack","aria-label":"Disabled technologies",children:i()})}),play:async({canvasElement:o})=>{const e=m(o);await a(e.getByRole("combobox")).toBeDisabled(),await a(e.getByRole("button",{name:"Remove React"})).toBeDisabled()},parameters:{controls:{disable:!0}}},A={render:()=>t.jsx(u,{w:"sm",children:t.jsxs(c,{name:"framework","aria-label":"Framework",children:[t.jsx(N,{value:"react",label:"React"}),t.jsx(N,{value:"legacy",label:"Legacy framework",disabled:!0}),t.jsx(N,{value:"storybook",label:"Storybook"})]})}),parameters:{controls:{disable:!0}}},k={render:function(){const[e,n]=d.useState(null),[r,s]=d.useState(!1);return t.jsx(u,{w:"sm",children:t.jsx(c,{allowCustomValue:!0,value:e,isCustomValue:r,onValueChange:h(n,s),getCreateOptionLabel:p=>`Search for “${p}”`,name:"custom-technology","aria-label":"Technology",placeholder:"Search or choose…",children:i()})})},play:async({canvasElement:o})=>{const e=m(o),n=e.getByRole("combobox"),r=m(document.body);await l.type(n,"Script");let s=r.getAllByRole("option");await a(s[0]).toHaveAccessibleName(/search for “script”/i),await a(s[1]).toHaveAccessibleName(/typescript type safety/i),await l.keyboard("{Enter}");const p=e.getByRole("button",{name:"Remove Script"});await a(p).toBeInTheDocument(),await a(p.parentElement).toHaveAttribute("data-new","true"),await l.click(p),await l.click(n),await l.clear(n),await l.type(n,"React"),s=r.getAllByRole("option"),await a(s[0]).toHaveAccessibleName(/search for “react”/i),await a(r.getByRole("option",{name:/react ui library/i})).toBeInTheDocument(),await l.keyboard("{ArrowDown}"),await l.keyboard("{Enter}");const b=e.getByRole("button",{name:"Remove React"});await a(b).toBeInTheDocument(),await a(b.parentElement).not.toHaveAttribute("data-new")},parameters:{controls:{disable:!0}}},T={render:function(){const[e,n]=d.useState("ABC"),[r,s]=d.useState(!0);return t.jsx(u,{w:"sm",children:t.jsx(c,{allowCustomValue:!0,value:e,isCustomValue:r,onValueChange:h(n,s),getCreateOptionLabel:p=>`Search for “${p}”`,name:"controlled-custom","aria-label":"Part search",children:i()})})},play:async({canvasElement:o})=>{const n=m(o).getByRole("button",{name:"Remove ABC"});await a(n.parentElement).toHaveAttribute("data-new","true")},parameters:{controls:{disable:!0}}},E={render:function(){const[e,n]=d.useState("react"),[r,s]=d.useState(!0);return t.jsx(u,{w:"sm",children:t.jsx(c,{allowCustomValue:!0,value:e,isCustomValue:r,onValueChange:h(n,s),getCreateOptionLabel:p=>`Search for “${p}”`,name:"hydrated-custom-match","aria-label":"Part search with catalog collision",children:i()})})},play:async({canvasElement:o})=>{const n=m(o).getByRole("button",{name:"Remove react"});await a(n.parentElement).toHaveAttribute("data-new","true")},parameters:{controls:{disable:!0}}},S={render:function(){const[e,n]=d.useState(null),[r,s]=d.useState(!1);return t.jsxs(u,{w:"sm",display:"flex",flexDirection:"column",gap:"12",children:[t.jsx(c,{allowCustomValue:!0,value:e,isCustomValue:r,onValueChange:h(n,s),getCreateOptionLabel:p=>`Search for “${p}”`,name:"blur-commit","aria-label":"Vendor search",children:i()}),t.jsx(ht,{type:"button",children:"Next field"})]})},play:async({canvasElement:o})=>{const e=m(o),n=e.getByRole("combobox"),r=m(document.body);await l.type(n,"Acme"),await l.tab();const s=e.getByRole("button",{name:"Remove Acme"});await a(s).toBeInTheDocument(),await a(s.parentElement).toHaveAttribute("data-new","true"),await l.click(s),await l.click(n),await l.type(n,"React"),await a(r.getByRole("option",{name:/search for “react”/i})).toBeInTheDocument(),await l.keyboard("{ArrowDown}"),await l.tab();const p=e.getByRole("button",{name:"Remove React"});await a(p.parentElement).toHaveAttribute("data-new","true"),await l.click(p),await l.click(n),await l.type(n,"abc"),await l.keyboard("{Escape}"),await a(n).toHaveValue(""),await l.tab(),await a(e.queryByRole("button",{name:"Remove abc"})).not.toBeInTheDocument()},parameters:{controls:{disable:!0}}},O={render:()=>t.jsx(u,{w:"sm",children:t.jsx(c,{defaultOpen:!0,name:"scrollable","aria-label":"Scrollable technologies",children:i(y)})}),parameters:{controls:{disable:!0}}},I={render:()=>t.jsx(u,{w:"sm",children:t.jsx(c,{loading:!0,defaultOpen:!0,name:"loading","aria-label":"Loading technologies"})}),parameters:{controls:{disable:!0}}},D={render:function(){const[e,n]=d.useState(()=>y.slice(0,8)),[r,s]=d.useState(!1),p=e.length<y.length,b=()=>{r||!p||(s(!0),window.setTimeout(()=>{n(U=>y.slice(0,U.length+4)),s(!1)},200))};return t.jsx(u,{w:"sm",children:t.jsx(c,{defaultOpen:!0,name:"infinite","aria-label":"Technology with more results",hasMore:p,loadingMore:r,onLoadMore:b,children:i(e)})})},parameters:{controls:{disable:!0}}},j={render:()=>t.jsx(u,{w:"sm",children:t.jsx(c,{defaultInputValue:"angular",defaultOpen:!0,name:"empty","aria-label":"Technology with no matches",children:i()})}),parameters:{controls:{disable:!0}}},H={render:function(){const[e,n]=d.useState("");return t.jsxs(u,{display:"grid",gap:"8",w:"sm",children:[t.jsx(c,{inputValue:e,onInputValueChange:n,name:"controlled-input","aria-label":"Controlled query",children:i()}),t.jsx(u,{color:"text.subtle",children:`Query: ${e||"empty"}`})]})},parameters:{controls:{disable:!0}}},F={render:function(){const[e,n]=d.useState(!1),[r,s]=d.useState(0),p=b=>{n(b),s(U=>U+1)};return t.jsxs(u,{display:"grid",gap:"8",w:"sm",children:[t.jsx(ht,{onClick:()=>n(b=>!b),children:"Toggle suggestions"}),t.jsx(c,{open:e,onOpenChange:p,name:"controlled-open","aria-label":"Controlled suggestions",children:i()}),t.jsx(u,{color:"text.subtle",children:`Open changes: ${r}`})]})},play:async({canvasElement:o})=>{const e=m(o),n=e.getByRole("combobox");await l.click(n),await a(e.getByText("Open changes: 1")).toBeInTheDocument(),await l.keyboard("{Escape}"),await a(e.getByText("Open changes: 2")).toBeInTheDocument(),await a(n).toHaveAttribute("aria-expanded","false")},parameters:{controls:{disable:!0}}},L={name:"Ex: With FormField",render:()=>t.jsx(u,{w:"sm",children:t.jsx(gt,{label:"Primary technology",labelFor:"primary-technology",helpText:"Choose the technology this project depends on most.",children:t.jsx(c,{id:"primary-technology",name:"primaryTechnology",children:i()})})}),parameters:{controls:{disable:!0}}},M={name:"Ex: Custom Search Filter",render:function(){const[e,n]=d.useState(null),[r,s]=d.useState(!1);return t.jsx(u,{w:"md",children:t.jsx(gt,{label:"Technology",labelFor:"project-stack",helpText:"Type to search. Enter or blur keeps a contains search; arrow to a catalog row and Enter for an exact pick. Custom values are single-select only.",children:t.jsx(c,{id:"project-stack",name:"projectStack",allowCustomValue:!0,value:e,isCustomValue:r,onValueChange:h(n,s),getCreateOptionLabel:p=>`Search for “${p}”`,placeholder:"Search or choose…",children:i(y)})})})},parameters:{controls:{disable:!0}}},q={name:"Ex: Keyboard Selection",render:()=>t.jsx(u,{w:"sm",children:t.jsx(c,{name:"keyboard","aria-label":"Keyboard selection",children:i()})}),play:async({canvasElement:o})=>{const e=m(o),n=e.getByRole("combobox");await l.click(n),await a(n).toHaveAttribute("aria-expanded","true"),await a(n).toHaveAttribute("aria-activedescendant"),await l.keyboard("{Enter}"),await a(n).toHaveValue(""),await a(e.getByRole("button",{name:"Remove React"})).toBeInTheDocument()},parameters:{controls:{disable:!0}}},P={name:"Ex: Keyboard Token Editing",render:()=>t.jsx(u,{w:"sm",children:t.jsx(c,{multiple:!0,defaultValue:["react","typescript"],name:"token-editing","aria-label":"Token editing",children:i()})}),play:async({canvasElement:o})=>{const e=m(o),n=e.getByRole("combobox"),r=e.getByRole("button",{name:"Remove TypeScript"});await l.click(n),await l.keyboard("{Backspace}"),await _(()=>a(r).toHaveFocus()),await a(r).toBeInTheDocument(),await l.keyboard("{Backspace}"),await a(e.queryByRole("button",{name:"Remove TypeScript"})).not.toBeInTheDocument(),await _(()=>a(e.getByRole("button",{name:"Remove React"})).toHaveFocus()),await m(document.body).findByRole("listbox")},parameters:{controls:{disable:!0}}},$={name:"Ex: Test Id Reaches The Listbox",render:()=>t.jsx(u,{w:"sm","data-testid":"filters",children:t.jsx(c,{"data-testid":"technology","aria-label":"Technology",children:i()})}),play:async({canvasElement:o})=>{const e=m(o),n=m(o.ownerDocument.body),r=e.getByTestId("technology"),s=e.getByRole("combobox");await a(r).not.toBe(s),await a(r).toContainElement(s),await a(s).not.toHaveAttribute("data-testid"),await a(s).toHaveAttribute("data-ds-part","trigger"),await a(r).not.toHaveAttribute("data-ds-part"),await l.click(s);const p=await n.findByRole("listbox");await a(r.contains(p)).toBe(!1);const b=p.closest("[data-ds-chain]");await a(b).toHaveAttribute("data-ds-chain","filters>technology"),await a(b==null?void 0:b.getAttribute("data-ds-chain")).not.toContain("trigger")},parameters:{controls:{disable:!0}}},K={name:"Test: data-ds-component",render:()=>t.jsxs(u,{display:"flex",flexDirection:"column",gap:"8",w:"sm",children:[t.jsx(c,{"data-testid":"ds-default","aria-label":"Default technology",children:i()}),t.jsx(c,{"data-testid":"ds-override","data-ds-component":"TechnologyPicker","aria-label":"Overridden technology",children:i()})]}),play:async({canvasElement:o})=>{const e=m(o),n=m(o.ownerDocument.body),r=e.getByTestId("ds-default");await a(r).toHaveAttribute("data-ds-component","Autocomplete");const s=e.getByRole("combobox",{name:"Default technology"});await a(s).toHaveAttribute("data-ds-part","trigger"),await a(s).not.toHaveAttribute("data-ds-component");const p=e.getByTestId("ds-override");await a(p).toHaveAttribute("data-ds-component","TechnologyPicker"),await a(e.getByRole("combobox",{name:"Overridden technology"})).not.toHaveAttribute("data-ds-component"),await l.click(s);const b=await n.findByRole("listbox");await a(b).not.toHaveAttribute("data-ds-component","Autocomplete"),await a(b).not.toHaveAttribute("data-ds-component","TechnologyPicker")},parameters:{controls:{disable:!0}}},Ft=["Default","Filtering","Selected","Multiple","MultipleLongValues","LimitTags","Sizes","ValidationStates","Disabled","DisabledOptions","AllowCustomValue","ControlledCustomValueChip","HydratedCustomValueMatchingOption","CommitCustomValueOnBlur","ScrollableListbox","Loading","InfiniteLoading","EmptyResults","ControlledInput","ControlledOpen","WithFormField","TechnologyAssignmentExample","KeyboardSelection","KeyboardTokenEditing","TestIdReachesPortaledListbox","DsComponentAttribute"];var z,W,Q;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: function DefaultRender(args) {
    const [value, setValue] = useState<string | null>(null);
    return <Box w="xs">
        <Autocomplete {...args} multiple={false} value={value} defaultValue={undefined} onValueChange={setValue} onChange={undefined} name="technology">
          {renderOptions()}
        </Autocomplete>
      </Box>;
  }
}`,...(Q=(W=g.parameters)==null?void 0:W.docs)==null?void 0:Q.source}}};var Y,G,J;w.parameters={...w.parameters,docs:{...(Y=w.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
    // Testing Library computes this name without the space before the <mark>
    // highlight ("Storybook Componentworkshop"); browsers keep it.
    const descriptionMatch = await body.findByRole('option', {
      name: /storybook component\\s*workshop/i
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
}`,...(J=(G=w.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var X,Z,ee;v.parameters={...v.parameters,docs:{...(X=v.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(ee=(Z=v.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ne,ae;x.parameters={...x.parameters,docs:{...(te=x.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
    // Focus returns to the input after the removal commits.
    await waitFor(() => expect(input).toHaveFocus());
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ae=(ne=x.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var oe,re,se;B.parameters={...B.parameters,docs:{...(oe=B.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(se=(re=B.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var le,ce,ie;C.parameters={...C.parameters,docs:{...(le=C.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(ie=(ce=C.parameters)==null?void 0:ce.docs)==null?void 0:ie.source}}};var ue,pe,me;R.parameters={...R.parameters,docs:{...(ue=R.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(me=(pe=R.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var de,be,ye;f.parameters={...f.parameters,docs:{...(de=f.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(ye=(be=f.parameters)==null?void 0:be.docs)==null?void 0:ye.source}}};var he,ge,we;V.parameters={...V.parameters,docs:{...(he=V.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(we=(ge=V.parameters)==null?void 0:ge.docs)==null?void 0:we.source}}};var ve,xe,Be;A.parameters={...A.parameters,docs:{...(ve=A.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(Be=(xe=A.parameters)==null?void 0:xe.docs)==null?void 0:Be.source}}};var Ce,Re,fe;k.parameters={...k.parameters,docs:{...(Ce=k.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(fe=(Re=k.parameters)==null?void 0:Re.docs)==null?void 0:fe.source}}};var Ve,Ae,ke;T.parameters={...T.parameters,docs:{...(Ve=T.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
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
}`,...(ke=(Ae=T.parameters)==null?void 0:Ae.docs)==null?void 0:ke.source}}};var Te,Ee,Se;E.parameters={...E.parameters,docs:{...(Te=E.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(Se=(Ee=E.parameters)==null?void 0:Ee.docs)==null?void 0:Se.source}}};var Oe,Ie,De;S.parameters={...S.parameters,docs:{...(Oe=S.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
}`,...(De=(Ie=S.parameters)==null?void 0:Ie.docs)==null?void 0:De.source}}};var je,He,Fe;O.parameters={...O.parameters,docs:{...(je=O.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
}`,...(Fe=(He=O.parameters)==null?void 0:He.docs)==null?void 0:Fe.source}}};var Le,Me,qe;I.parameters={...I.parameters,docs:{...(Le=I.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  render: () => <Box w="sm">
      <Autocomplete loading defaultOpen name="loading" aria-label="Loading technologies" />
    </Box>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(qe=(Me=I.parameters)==null?void 0:Me.docs)==null?void 0:qe.source}}};var Pe,$e,Ke;D.parameters={...D.parameters,docs:{...(Pe=D.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
}`,...(Ke=($e=D.parameters)==null?void 0:$e.docs)==null?void 0:Ke.source}}};var Ne,Ue,_e;j.parameters={...j.parameters,docs:{...(Ne=j.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
}`,...(_e=(Ue=j.parameters)==null?void 0:Ue.docs)==null?void 0:_e.source}}};var ze,We,Qe;H.parameters={...H.parameters,docs:{...(ze=H.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
}`,...(Qe=(We=H.parameters)==null?void 0:We.docs)==null?void 0:Qe.source}}};var Ye,Ge,Je;F.parameters={...F.parameters,docs:{...(Ye=F.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
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
}`,...(Je=(Ge=F.parameters)==null?void 0:Ge.docs)==null?void 0:Je.source}}};var Xe,Ze,et;L.parameters={...L.parameters,docs:{...(Xe=L.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
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
}`,...(et=(Ze=L.parameters)==null?void 0:Ze.docs)==null?void 0:et.source}}};var tt,nt,at;M.parameters={...M.parameters,docs:{...(tt=M.parameters)==null?void 0:tt.docs,source:{originalSource:`{
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
}`,...(at=(nt=M.parameters)==null?void 0:nt.docs)==null?void 0:at.source}}};var ot,rt,st;q.parameters={...q.parameters,docs:{...(ot=q.parameters)==null?void 0:ot.docs,source:{originalSource:`{
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
}`,...(st=(rt=q.parameters)==null?void 0:rt.docs)==null?void 0:st.source}}};var lt,ct,it;P.parameters={...P.parameters,docs:{...(lt=P.parameters)==null?void 0:lt.docs,source:{originalSource:`{
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
    await waitFor(() => expect(removeTypeScript).toHaveFocus());
    await expect(removeTypeScript).toBeInTheDocument();
    await userEvent.keyboard('{Backspace}');
    await expect(canvas.queryByRole('button', {
      name: 'Remove TypeScript'
    })).not.toBeInTheDocument();
    // Focus moves to the previous token; the listbox stays open. Wait for
    // both so the story always ends in the same state.
    await waitFor(() => expect(canvas.getByRole('button', {
      name: 'Remove React'
    })).toHaveFocus());
    await within(document.body).findByRole('listbox');
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(it=(ct=P.parameters)==null?void 0:ct.docs)==null?void 0:it.source}}};var ut,pt,mt;$.parameters={...$.parameters,docs:{...(ut=$.parameters)==null?void 0:ut.docs,source:{originalSource:`{
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
}`,...(mt=(pt=$.parameters)==null?void 0:pt.docs)==null?void 0:mt.source}}};var dt,bt,yt;K.parameters={...K.parameters,docs:{...(dt=K.parameters)==null?void 0:dt.docs,source:{originalSource:`{
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
}`,...(yt=(bt=K.parameters)==null?void 0:bt.docs)==null?void 0:yt.source}}};export{k as AllowCustomValue,S as CommitCustomValueOnBlur,T as ControlledCustomValueChip,H as ControlledInput,F as ControlledOpen,g as Default,V as Disabled,A as DisabledOptions,K as DsComponentAttribute,j as EmptyResults,w as Filtering,E as HydratedCustomValueMatchingOption,D as InfiniteLoading,q as KeyboardSelection,P as KeyboardTokenEditing,C as LimitTags,I as Loading,x as Multiple,B as MultipleLongValues,O as ScrollableListbox,v as Selected,R as Sizes,M as TechnologyAssignmentExample,$ as TestIdReachesPortaledListbox,f as ValidationStates,L as WithFormField,Ft as __namedExportsOrder,Ht as default};
