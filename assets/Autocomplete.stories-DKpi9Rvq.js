import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as y}from"./index-BKyFwriW.js";import{w as d,u as p,e as a}from"./index-DPYJpPba.js";import{B as c}from"./dsComponent-D6ec2IT1.js";import{B as et}from"./Button-CxuwUgmn.js";import{F as Ye}from"./FormField-CVV-GmFr.js";import{A as r,O as M}from"./Option-BN_tqe72.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Icon-12cJPaFt.js";import"./IconConfig-D3dlgfBK.js";import"./Spinner-DHR4yZCu.js";import"./FieldContext-D6URyQos.js";import"./Label-D6_yS6yi.js";import"./Text-_zcnQP4z.js";import"./Tooltip-Bb2HIdOM.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";import"./dsPart-nnoJM9m6.js";import"./FloatingLayerContext-RRbgTwoi.js";import"./ListItem-CfaVCWIa.js";import"./HighlightText-C2YgeQru.js";import"./Checkbox-BJA-hWE7.js";import"./Divider-CFbTUo5C.js";import"./Toggle-CiPJs3Y-.js";import"./Chip-ChewNFrR.js";const Ze=[{value:"react",label:"React",description:"UI library"},{value:"typescript",label:"TypeScript",description:"Type safety"},{value:"storybook",label:"Storybook",description:"Component workshop"},{value:"panda",label:"Panda CSS",description:"Design system styles"},{value:"floating-ui",label:"Floating UI",description:"Popup engine"},{value:"vite",label:"Vite",description:"Build tooling"}],L=[...Ze,{value:"vitest",label:"Vitest",description:"Unit testing"},{value:"playwright",label:"Playwright",description:"Browser testing"},{value:"eslint",label:"ESLint",description:"Code analysis"},{value:"prettier",label:"Prettier",description:"Code formatting"},{value:"react-router",label:"React Router",description:"Routing"},{value:"tanstack-query",label:"TanStack Query",description:"Data"}],i=(o=Ze)=>o.map(t=>e.jsx(M,{value:t.value,label:t.label,description:t.description},t.value)),At={title:"Components/Autocomplete",component:r,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Use Autocomplete when people benefit from filtering a set of options as they type. Matching uses case-insensitive substrings within each option label or description. Focusing the field opens its suggestions and activates the first available option. Use Select for a short fixed list and TextInput for unrestricted text."}}},args:{"aria-label":"Technology",placeholder:"Choose a technology…"},argTypes:{multiple:{control:"boolean"},limitTags:{control:"number"},allowCustomValue:{control:"boolean"},disabled:{control:"boolean"},error:{control:"boolean"},invalid:{control:"boolean"},valid:{control:"boolean"}}},b={render:function(t){const[n,s]=y.useState(null);return e.jsx(c,{w:"xs",children:e.jsx(r,{...t,multiple:!1,value:n,defaultValue:void 0,onValueChange:s,onChange:void 0,name:"technology",children:i()})})}},h={render:()=>e.jsx(c,{w:"xs",children:e.jsx(r,{name:"technology-filter","aria-label":"Filter technologies",children:i()})}),play:async({canvasElement:o})=>{const t=d(o),n=d(document.body),s=t.getByRole("combobox");await p.type(s,"typ"),await a(n.getByRole("option",{name:/typescript type safety/i})).toBeInTheDocument(),await a(n.queryByRole("option",{name:/storybook/i})).not.toBeInTheDocument(),await p.clear(s),await p.type(s,"workshop");const l=n.getByRole("option",{name:/storybook component workshop/i});await a(d(l).getByText("workshop",{selector:"mark"})).toBeInTheDocument()},parameters:{controls:{disable:!0}}},g={render:o=>e.jsx(c,{w:"xs",children:e.jsx(r,{...o,multiple:!1,value:void 0,defaultValue:"react",onValueChange:void 0,onChange:void 0,name:"technology",children:i()})}),play:async({canvasElement:o})=>{const t=d(o),n=t.getByRole("combobox",{name:"Technology"});await a(n).toHaveValue(""),await a(t.getByRole("button",{name:"Remove React"})).toBeInTheDocument(),await p.click(n),await p.keyboard("P"),await a(n).toHaveValue("P"),await a(t.queryByRole("button",{name:"Remove React"})).not.toBeInTheDocument()}},x={render:function(){const[t,n]=y.useState(["react","typescript","storybook"]);return e.jsx(c,{w:"sm",children:e.jsx(r,{multiple:!0,value:t,onValueChange:n,name:"stack","aria-label":"Project stack",placeholder:"Add technology…",children:i()})})},play:async({canvasElement:o})=>{const t=d(o),n=d(document.body),s=t.getByRole("combobox"),l=t.getByRole("button",{name:"Remove React"});await p.click(s),await a(n.queryByRole("checkbox")).not.toBeInTheDocument(),await p.click(l),await a(t.queryByRole("button",{name:"Remove React"})).not.toBeInTheDocument(),await a(s).toHaveFocus()},parameters:{controls:{disable:!0}}},w={render:()=>e.jsx(c,{w:"224",children:e.jsx(r,{multiple:!0,defaultValue:["storybook","floating-ui","typescript"],name:"narrow-stack","aria-label":"Narrow project stack",placeholder:"Add…",children:i()})}),parameters:{controls:{disable:!0}}},v={render:()=>e.jsx(c,{w:"sm",children:e.jsx(r,{multiple:!0,limitTags:2,defaultValue:["react","typescript","storybook","panda","floating-ui"],name:"limited-stack","aria-label":"Limited project stack",children:i()})}),play:async({canvasElement:o})=>{const t=d(o);await a(t.getByText("+3")).toBeInTheDocument(),await p.click(t.getByRole("combobox")),await a(t.queryByText("+3")).not.toBeInTheDocument(),await a(t.getByRole("button",{name:"Remove Floating UI"})).toBeInTheDocument()},parameters:{controls:{disable:!0}}},B={render:()=>e.jsx(c,{display:"grid",gap:"12",w:"sm",children:["sm","md","lg","xl"].map(o=>e.jsx(r,{size:o,defaultValue:"react",name:`technology-${o}`,"aria-label":`${o} autocomplete`,children:i()},o))}),parameters:{controls:{disable:!0}}},f={render:()=>e.jsxs(c,{display:"grid",gap:"12",w:"sm",children:[e.jsx(r,{name:"default","aria-label":"Default",children:i()}),e.jsx(r,{name:"valid","aria-label":"Valid",valid:!0,children:i()}),e.jsx(r,{name:"invalid","aria-label":"Invalid",invalid:!0,children:i()}),e.jsx(r,{name:"error","aria-label":"Error",error:!0,children:i()})]}),parameters:{controls:{disable:!0}}},R={render:()=>e.jsx(c,{w:"sm",children:e.jsx(r,{multiple:!0,disabled:!0,defaultValue:["react","typescript"],name:"disabled-stack","aria-label":"Disabled technologies",children:i()})}),play:async({canvasElement:o})=>{const t=d(o);await a(t.getByRole("combobox")).toBeDisabled(),await a(t.getByRole("button",{name:"Remove React"})).toBeDisabled()},parameters:{controls:{disable:!0}}},T={render:()=>e.jsx(c,{w:"sm",children:e.jsxs(r,{name:"framework","aria-label":"Framework",children:[e.jsx(M,{value:"react",label:"React"}),e.jsx(M,{value:"legacy",label:"Legacy framework",disabled:!0}),e.jsx(M,{value:"storybook",label:"Storybook"})]})}),parameters:{controls:{disable:!0}}},k={render:()=>e.jsx(c,{w:"sm",children:e.jsx(r,{multiple:!0,allowCustomValue:!0,defaultValue:["react"],name:"custom-stack","aria-label":"Technologies",placeholder:"Add a technology…",children:i()})}),play:async({canvasElement:o})=>{const t=d(o),n=t.getByRole("combobox");await p.type(n,"Script");const s=d(document.body),l=s.getAllByRole("option");await a(l[0]).toHaveAccessibleName(/add “script”/i),await a(l[1]).toHaveAccessibleName(/typescript type safety/i),await p.keyboard("{Enter}");const m=t.getByRole("button",{name:"Remove Script"});await a(m).toBeInTheDocument(),await a(m.parentElement).toHaveAttribute("data-new","true"),await p.type(n,"React"),await a(s.queryByRole("option",{name:/add “react”/i})).not.toBeInTheDocument()},parameters:{controls:{disable:!0}}},A={render:()=>e.jsx(c,{w:"sm",children:e.jsx(r,{loading:!0,defaultOpen:!0,name:"loading","aria-label":"Loading technologies"})}),parameters:{controls:{disable:!0}}},O={render:function(){const[t,n]=y.useState(()=>L.slice(0,8)),[s,l]=y.useState(!1),m=t.length<L.length,u=()=>{s||!m||(l(!0),window.setTimeout(()=>{n(P=>L.slice(0,P.length+4)),l(!1)},200))};return e.jsx(c,{w:"sm",children:e.jsx(r,{defaultOpen:!0,name:"infinite","aria-label":"Technology with more results",hasMore:m,loadingMore:s,onLoadMore:u,children:i(t)})})},parameters:{controls:{disable:!0}}},E={render:()=>e.jsx(c,{w:"sm",children:e.jsx(r,{defaultInputValue:"angular",defaultOpen:!0,name:"empty","aria-label":"Technology with no matches",children:i()})}),parameters:{controls:{disable:!0}}},j={render:function(){const[t,n]=y.useState("");return e.jsxs(c,{display:"grid",gap:"8",w:"sm",children:[e.jsx(r,{inputValue:t,onInputValueChange:n,name:"controlled-input","aria-label":"Controlled query",children:i()}),e.jsx(c,{color:"text.subtle",children:`Query: ${t||"empty"}`})]})},parameters:{controls:{disable:!0}}},S={render:function(){const[t,n]=y.useState(!1),[s,l]=y.useState(0),m=u=>{n(u),l(P=>P+1)};return e.jsxs(c,{display:"grid",gap:"8",w:"sm",children:[e.jsx(et,{onClick:()=>n(u=>!u),children:"Toggle suggestions"}),e.jsx(r,{open:t,onOpenChange:m,name:"controlled-open","aria-label":"Controlled suggestions",children:i()}),e.jsx(c,{color:"text.subtle",children:`Open changes: ${s}`})]})},play:async({canvasElement:o})=>{const t=d(o),n=t.getByRole("combobox");await p.click(n),await a(t.getByText("Open changes: 1")).toBeInTheDocument(),await p.keyboard("{Escape}"),await a(t.getByText("Open changes: 2")).toBeInTheDocument(),await a(n).toHaveAttribute("aria-expanded","false")},parameters:{controls:{disable:!0}}},I={name:"Ex: With FormField",render:()=>e.jsx(c,{w:"sm",children:e.jsx(Ye,{label:"Primary technology",labelFor:"primary-technology",helpText:"Choose the technology this project depends on most.",children:e.jsx(r,{id:"primary-technology",name:"primaryTechnology",children:i()})})}),parameters:{controls:{disable:!0}}},C={name:"Ex: Technology Assignment",render:()=>e.jsx(c,{w:"md",children:e.jsx(Ye,{label:"Project stack",labelFor:"project-stack",helpText:"Search the supported catalog or create a project-specific value.",children:e.jsx(r,{id:"project-stack",name:"projectStack",multiple:!0,allowCustomValue:!0,defaultValue:["react","typescript"],placeholder:"Add technology…",children:i(L)})})}),parameters:{controls:{disable:!0}}},D={name:"Ex: Keyboard Selection",render:()=>e.jsx(c,{w:"sm",children:e.jsx(r,{name:"keyboard","aria-label":"Keyboard selection",children:i()})}),play:async({canvasElement:o})=>{const t=d(o),n=t.getByRole("combobox");await p.click(n),await a(n).toHaveAttribute("aria-expanded","true"),await a(n).toHaveAttribute("aria-activedescendant"),await p.keyboard("{Enter}"),await a(n).toHaveValue(""),await a(t.getByRole("button",{name:"Remove React"})).toBeInTheDocument()},parameters:{controls:{disable:!0}}},V={name:"Ex: Keyboard Token Editing",render:()=>e.jsx(c,{w:"sm",children:e.jsx(r,{multiple:!0,defaultValue:["react","typescript"],name:"token-editing","aria-label":"Token editing",children:i()})}),play:async({canvasElement:o})=>{const t=d(o),n=t.getByRole("combobox"),s=t.getByRole("button",{name:"Remove TypeScript"});await p.click(n),await p.keyboard("{Backspace}"),await a(s).toHaveFocus(),await a(s).toBeInTheDocument(),await p.keyboard("{Backspace}"),await a(t.queryByRole("button",{name:"Remove TypeScript"})).not.toBeInTheDocument()},parameters:{controls:{disable:!0}}},H={name:"Ex: Test Id Reaches The Listbox",render:()=>e.jsx(c,{w:"sm","data-testid":"filters",children:e.jsx(r,{"data-testid":"technology","aria-label":"Technology",children:i()})}),play:async({canvasElement:o})=>{const t=d(o),n=d(o.ownerDocument.body),s=t.getByTestId("technology"),l=t.getByRole("combobox");await a(s).not.toBe(l),await a(s).toContainElement(l),await a(l).not.toHaveAttribute("data-testid"),await a(l).toHaveAttribute("data-ds-part","trigger"),await a(s).not.toHaveAttribute("data-ds-part"),await p.click(l);const m=await n.findByRole("listbox");await a(s.contains(m)).toBe(!1);const u=m.closest("[data-ds-chain]");await a(u).toHaveAttribute("data-ds-chain","filters>technology"),await a(u==null?void 0:u.getAttribute("data-ds-chain")).not.toContain("trigger")},parameters:{controls:{disable:!0}}},F={name:"Test: data-ds-component",render:()=>e.jsxs(c,{display:"flex",flexDirection:"column",gap:"8",w:"sm",children:[e.jsx(r,{"data-testid":"ds-default","aria-label":"Default technology",children:i()}),e.jsx(r,{"data-testid":"ds-override","data-ds-component":"TechnologyPicker","aria-label":"Overridden technology",children:i()})]}),play:async({canvasElement:o})=>{const t=d(o),n=d(o.ownerDocument.body),s=t.getByTestId("ds-default");await a(s).toHaveAttribute("data-ds-component","Autocomplete");const l=t.getByRole("combobox",{name:"Default technology"});await a(l).toHaveAttribute("data-ds-part","trigger"),await a(l).not.toHaveAttribute("data-ds-component");const m=t.getByTestId("ds-override");await a(m).toHaveAttribute("data-ds-component","TechnologyPicker"),await a(t.getByRole("combobox",{name:"Overridden technology"})).not.toHaveAttribute("data-ds-component"),await p.click(l);const u=await n.findByRole("listbox");await a(u).not.toHaveAttribute("data-ds-component","Autocomplete"),await a(u).not.toHaveAttribute("data-ds-component","TechnologyPicker")},parameters:{controls:{disable:!0}}};var q,K,$;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: function DefaultRender(args) {
    const [value, setValue] = useState<string | null>(null);
    return <Box w="xs">
        <Autocomplete {...args} multiple={false} value={value} defaultValue={undefined} onValueChange={setValue} onChange={undefined} name="technology">
          {renderOptions()}
        </Autocomplete>
      </Box>;
  }
}`,...($=(K=b.parameters)==null?void 0:K.docs)==null?void 0:$.source}}};var U,N,z;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(z=(N=h.parameters)==null?void 0:N.docs)==null?void 0:z.source}}};var W,Q,_;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(_=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:_.source}}};var G,J,X;x.parameters={...x.parameters,docs:{...(G=x.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(X=(J=x.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};var Y,Z,ee;w.parameters={...w.parameters,docs:{...(Y=w.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(ee=(Z=w.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ae,oe;v.parameters={...v.parameters,docs:{...(te=v.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(oe=(ae=v.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var ne,re,se;B.parameters={...B.parameters,docs:{...(ne=B.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(se=(re=B.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var ie,ce,le;f.parameters={...f.parameters,docs:{...(ie=f.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(le=(ce=f.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};var pe,de,ue;R.parameters={...R.parameters,docs:{...(pe=R.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(ue=(de=R.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var me,ye,be;T.parameters={...T.parameters,docs:{...(me=T.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(be=(ye=T.parameters)==null?void 0:ye.docs)==null?void 0:be.source}}};var he,ge,xe;k.parameters={...k.parameters,docs:{...(he=k.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(xe=(ge=k.parameters)==null?void 0:ge.docs)==null?void 0:xe.source}}};var we,ve,Be;A.parameters={...A.parameters,docs:{...(we=A.parameters)==null?void 0:we.docs,source:{originalSource:`{
  render: () => <Box w="sm">
      <Autocomplete loading defaultOpen name="loading" aria-label="Loading technologies" />
    </Box>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Be=(ve=A.parameters)==null?void 0:ve.docs)==null?void 0:Be.source}}};var fe,Re,Te;O.parameters={...O.parameters,docs:{...(fe=O.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(Te=(Re=O.parameters)==null?void 0:Re.docs)==null?void 0:Te.source}}};var ke,Ae,Oe;E.parameters={...E.parameters,docs:{...(ke=E.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(Oe=(Ae=E.parameters)==null?void 0:Ae.docs)==null?void 0:Oe.source}}};var Ee,je,Se;j.parameters={...j.parameters,docs:{...(Ee=j.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(Se=(je=j.parameters)==null?void 0:je.docs)==null?void 0:Se.source}}};var Ie,Ce,De;S.parameters={...S.parameters,docs:{...(Ie=S.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(De=(Ce=S.parameters)==null?void 0:Ce.docs)==null?void 0:De.source}}};var Ve,He,Fe;I.parameters={...I.parameters,docs:{...(Ve=I.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
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
}`,...(Fe=(He=I.parameters)==null?void 0:He.docs)==null?void 0:Fe.source}}};var Me,Le,Pe;C.parameters={...C.parameters,docs:{...(Me=C.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
}`,...(Pe=(Le=C.parameters)==null?void 0:Le.docs)==null?void 0:Pe.source}}};var qe,Ke,$e;D.parameters={...D.parameters,docs:{...(qe=D.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...($e=(Ke=D.parameters)==null?void 0:Ke.docs)==null?void 0:$e.source}}};var Ue,Ne,ze;V.parameters={...V.parameters,docs:{...(Ue=V.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
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
}`,...(ze=(Ne=V.parameters)==null?void 0:Ne.docs)==null?void 0:ze.source}}};var We,Qe,_e;H.parameters={...H.parameters,docs:{...(We=H.parameters)==null?void 0:We.docs,source:{originalSource:`{
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
}`,...(_e=(Qe=H.parameters)==null?void 0:Qe.docs)==null?void 0:_e.source}}};var Ge,Je,Xe;F.parameters={...F.parameters,docs:{...(Ge=F.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
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
}`,...(Xe=(Je=F.parameters)==null?void 0:Je.docs)==null?void 0:Xe.source}}};const Ot=["Default","Filtering","Selected","Multiple","MultipleLongValues","LimitTags","Sizes","ValidationStates","Disabled","DisabledOptions","AllowCustomValue","Loading","InfiniteLoading","EmptyResults","ControlledInput","ControlledOpen","WithFormField","TechnologyAssignmentExample","KeyboardSelection","KeyboardTokenEditing","TestIdReachesPortaledListbox","DsComponentAttribute"];export{k as AllowCustomValue,j as ControlledInput,S as ControlledOpen,b as Default,R as Disabled,T as DisabledOptions,F as DsComponentAttribute,E as EmptyResults,h as Filtering,O as InfiniteLoading,D as KeyboardSelection,V as KeyboardTokenEditing,v as LimitTags,A as Loading,x as Multiple,w as MultipleLongValues,g as Selected,B as Sizes,C as TechnologyAssignmentExample,H as TestIdReachesPortaledListbox,f as ValidationStates,I as WithFormField,Ot as __namedExportsOrder,At as default};
