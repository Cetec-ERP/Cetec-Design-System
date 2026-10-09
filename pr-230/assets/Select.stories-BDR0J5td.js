import{j as e,B as c,a as H,r as b,T as x}from"./iframe-DZjfHOlA.js";import{A as Je}from"./Avatar-CkcT4RGW.js";import{B as M}from"./Button-Cy6v52eP.js";import{F as Xe}from"./FormField-DE5p8ODV.js";import{S as s,a as t}from"./Select-4F5_z2bI.js";import"./preload-helper-BWCT3BfN.js";import"./Spinner-C55NuBax.js";import"./FieldContext-UIV0oueV.js";import"./Label-DcNeA34V.js";import"./menu-CRvwsY4u.js";import"./FloatingLayerContext-Bt3CuMRH.js";import"./dsPart-nnoJM9m6.js";import"./Chip-B_GoBNAb.js";import"./ListItem-WInI1y0E.js";import"./HighlightText-eP4BPY5y.js";import"./Checkbox-BSSHh8iM.js";import"./Divider-DjfUucoR.js";import"./Toggle-DI_DQhLe.js";const{expect:l,userEvent:u,within:d}=__STORYBOOK_MODULE_TEST__,xt={title:"Components/Select",component:s,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Custom listbox-style select for controlled and uncontrolled single and multi-select flows. Use with `FormField` for labels, help text, and error messaging."}}},args:{placeholder:"Choose an option..."},argTypes:{value:{control:"text",description:"Controlled selected value for single-select usage"},placeholder:{control:"text",description:"Display text when no value is selected"},disabled:{control:"boolean",description:"Disabled state"},error:{control:"boolean",description:"Error state styling"},multiple:{control:"boolean",description:"Allow multiple selected values"},size:{control:"select",options:["sm","md","lg","xl"]},density:{control:"select",options:["compact","comfortable","spacious"]},autoSize:{control:"boolean",description:"Allow the trigger content to grow vertically instead of staying on one scrollable line"}}},v={render:function(a){return e.jsx(c,{w:"xs",children:e.jsxs(s,{...a,children:[e.jsx(t,{value:"starter",label:"Starter"}),e.jsx(t,{value:"growth",label:"Growth"}),e.jsx(t,{value:"enterprise",label:"Enterprise"})]})})}},S={name:"Uncontrolled",render:()=>e.jsx(c,{w:"xs",children:e.jsxs(s,{defaultValue:"growth",placeholder:"Choose an option...",children:[e.jsx(t,{value:"starter",label:"Starter"}),e.jsx(t,{value:"growth",label:"Growth"}),e.jsx(t,{value:"enterprise",label:"Enterprise"})]})}),parameters:{controls:{disable:!0}}},w={render:()=>e.jsxs(c,{display:"grid",gap:"12",w:"xs",children:[e.jsxs(s,{placeholder:"Default",children:[e.jsx(t,{value:"starter",label:"Starter"}),e.jsx(t,{value:"growth",label:"Growth"})]}),e.jsxs(s,{value:"growth",placeholder:"With value",children:[e.jsx(t,{value:"starter",label:"Starter"}),e.jsx(t,{value:"growth",label:"Growth"})]}),e.jsxs(s,{error:!0,placeholder:"Error state",children:[e.jsx(t,{value:"starter",label:"Starter"}),e.jsx(t,{value:"growth",label:"Growth"})]}),e.jsxs(s,{disabled:!0,value:"starter",placeholder:"Disabled",children:[e.jsx(t,{value:"starter",label:"Starter"}),e.jsx(t,{value:"growth",label:"Growth"})]})]}),parameters:{controls:{disable:!0}}},y={render:()=>e.jsxs(c,{display:"grid",gap:"12",w:"xs",children:[e.jsxs(s,{size:"sm",placeholder:"Small",children:[e.jsx(t,{value:"a",label:"Alpha"}),e.jsx(t,{value:"b",label:"Beta"})]}),e.jsxs(s,{size:"md",placeholder:"Medium",children:[e.jsx(t,{value:"a",label:"Alpha"}),e.jsx(t,{value:"b",label:"Beta"})]}),e.jsxs(s,{size:"lg",placeholder:"Large",children:[e.jsx(t,{value:"a",label:"Alpha"}),e.jsx(t,{value:"b",label:"Beta"})]}),e.jsxs(s,{size:"xl",placeholder:"Extra large",children:[e.jsx(t,{value:"a",label:"Alpha"}),e.jsx(t,{value:"b",label:"Beta"})]})]}),parameters:{controls:{disable:!0}}},f={render:()=>e.jsx(c,{w:"xs",children:e.jsxs(s,{placeholder:"Choose a support channel...",children:[e.jsx(t,{value:"email",label:"Email",description:"Best for non-urgent requests",iconLeft:"envelope"}),e.jsx(t,{value:"phone",label:"Phone",description:"Best for urgent issues",iconLeft:"at"}),e.jsx(t,{value:"chat",label:"Live chat",description:"During business hours",iconLeft:"message"})]})}),parameters:{controls:{disable:!0}}},N=[{value:"new",label:"New",fill:"icon.danger"},{value:"in-progress",label:"In progress",fill:"icon.info"},{value:"waiting",label:"Waiting on customer",fill:"icon.warning"},{value:"resolved",label:"Resolved",fill:"icon.success"}],Qe=[{value:"unassigned",label:"Unassigned",initials:"?"},{value:"avery",label:"Avery Jones",initials:"AJ"},{value:"sam",label:"Sam Patel",initials:"SP"},{value:"riley",label:"Riley Chen",initials:"RC"}],B={name:"Before slot",render:()=>e.jsxs(c,{display:"grid",gap:"12",w:"xs",children:[e.jsx(s,{defaultValue:"waiting",clearable:!1,"aria-label":"Status",children:N.map(n=>e.jsx(t,{value:n.value,label:n.label,before:e.jsx(H,{name:"clock",size:"20",fill:n.fill})},n.value))}),e.jsx(s,{defaultValue:"avery",clearable:!1,"aria-label":"Assignee",children:Qe.map(n=>e.jsx(t,{value:n.value,label:n.label,before:e.jsx(Je,{size:"sm",fallback:n.initials})},n.value))})]}),parameters:{controls:{disable:!0},docs:{description:{story:"Give each `SelectOption` a `before` to show an avatar or a colored icon. The trigger shows the selected option's `before`. Pass `before` on the `Select` itself to show something else. `clearable={false}` keeps a value that must never be empty."}}}},O={name:"Ex: Assignee and status on a support case",render:function(){const[a,r]=b.useState("unassigned"),[o,i]=b.useState("new");return e.jsxs(c,{display:"grid",gap:"12",children:[e.jsxs(c,{display:"flex",gap:"8",children:[e.jsx(s,{w:"200",size:"sm",clearable:!1,"aria-label":"Assignee",value:a,onChange:p=>{typeof p=="string"&&r(p)},children:Qe.map(p=>e.jsx(t,{value:p.value,label:p.label,before:e.jsx(Je,{size:"sm",fallback:p.initials})},p.value))}),e.jsx(s,{w:"200",size:"sm",clearable:!1,"aria-label":"Status",value:o,onChange:p=>{typeof p=="string"&&i(p)},children:N.map(p=>e.jsx(t,{value:p.value,label:p.label,before:e.jsx(H,{name:"clock",size:"20",fill:p.fill})},p.value))})]}),e.jsxs(x,{size:"14",color:"text.subtle",children:["Assignee: ",a,". Status: ",o,"."]})]})},parameters:{controls:{disable:!0}}},j={render:function(){const[a,r]=b.useState(["react","typescript"]);return e.jsxs(c,{display:"grid",gap:"12",maxW:"xs",children:[e.jsxs(s,{multiple:!0,value:a,onChange:o=>{r(Array.isArray(o)?o:null)},placeholder:"Choose tags...",children:[e.jsx(t,{value:"react",label:"React"}),e.jsx(t,{value:"typescript",label:"TypeScript"}),e.jsx(t,{value:"storybook",label:"Storybook"}),e.jsx(t,{value:"panda",label:"Panda CSS"})]}),e.jsxs(x,{size:"14",color:"text.subtle",children:["Selected: ",(a==null?void 0:a.join(", "))||"none"]})]})},parameters:{controls:{disable:!0}}},P=Array.from({length:40},(n,a)=>`${a+1} - Option ${a+1}`),E={name:"Ex: Long Option List",render:()=>e.jsxs(c,{display:"flex",flexDirection:"column",gap:"8",maxW:"xs",children:[e.jsx(s,{"data-testid":"long-multiple",multiple:!0,placeholder:"Choose options...",children:P.map((n,a)=>e.jsx(t,{value:String(a+1),label:n},n))}),e.jsx(s,{"data-testid":"long-selected-near-end",defaultValue:"35",children:P.map((n,a)=>e.jsx(t,{value:String(a+1),label:n},n))})]}),play:async({canvasElement:n})=>{const a=d(n),r=d(n.ownerDocument.body);await u.click(a.getByTestId("long-multiple"));const o=await r.findByRole("listbox"),i=n.ownerDocument.documentElement.clientHeight,p=o.getBoundingClientRect();l(p.top).toBeGreaterThanOrEqual(0),l(p.bottom).toBeLessThanOrEqual(i),l(getComputedStyle(o).overflowY).toBe("auto"),l(o.scrollHeight).toBeGreaterThan(o.clientHeight),await u.keyboard("{Escape}"),await u.click(a.getByTestId("long-selected-near-end"));const h=await r.findByRole("listbox"),g=d(h).getByRole("option",{selected:!0}),W=h.getBoundingClientRect(),F=g.getBoundingClientRect();l(F.top).toBeGreaterThanOrEqual(W.top),l(F.bottom).toBeLessThanOrEqual(W.bottom)},parameters:{controls:{disable:!0}}},T={name:"Ex: Auto Size",render:function(){const[a,r]=b.useState("long"),[o,i]=b.useState(["react","typescript","storybook","text"]),[p,h]=b.useState(["react","typescript","storybook","text"]);return e.jsxs(c,{display:"grid",gap:"24",w:"full",maxW:"2xl",children:[e.jsxs(c,{display:"grid",gap:"12",gridTemplateColumns:"repeat(2, 1fr)",children:[e.jsxs(c,{display:"grid",gap:"8",children:[e.jsx(x,{size:"14",color:"text.subtle",children:'autoSize="false"'}),e.jsx(c,{maxW:"xs",children:e.jsxs(s,{multiple:!0,value:o,onChange:g=>i(Array.isArray(g)?g:null),placeholder:"Choose tags...",children:[e.jsx(t,{value:"react",label:"React"}),e.jsx(t,{value:"typescript",label:"TypeScript"}),e.jsx(t,{value:"storybook",label:"Storybook"}),e.jsx(t,{value:"text",label:"Text"})]})})]}),e.jsxs(c,{display:"grid",gap:"8",children:[e.jsx(x,{size:"14",color:"text.subtle",children:'autoSize="true"'}),e.jsx(c,{maxW:"xs",children:e.jsxs(s,{multiple:!0,autoSize:!0,value:p,onChange:g=>h(Array.isArray(g)?g:null),placeholder:"Choose tags...",children:[e.jsx(t,{value:"react",label:"React"}),e.jsx(t,{value:"typescript",label:"TypeScript"}),e.jsx(t,{value:"storybook",label:"Storybook"}),e.jsx(t,{value:"text",label:"Text"})]})})]})]}),e.jsxs(c,{display:"grid",gap:"12",gridTemplateColumns:"repeat(2, 1fr)",children:[e.jsxs(c,{display:"grid",gap:"8",children:[e.jsx(x,{size:"14",color:"text.subtle",children:"Single select default"}),e.jsx(c,{maxW:"xs",children:e.jsxs(s,{value:a,onChange:r,children:[e.jsx(t,{value:"long",label:"Enim qui laboris sunt qui laborum veniam minim dolor veniam"}),e.jsx(t,{value:"short",label:"Short label"})]})})]}),e.jsxs(c,{display:"grid",gap:"8",children:[e.jsx(x,{size:"14",color:"text.subtle",children:"Single select autoSize"}),e.jsx(c,{maxW:"xs",children:e.jsxs(s,{autoSize:!0,value:a,onChange:r,children:[e.jsx(t,{value:"long",label:"Enim qui laboris sunt qui laborum veniam minim dolor veniam"}),e.jsx(t,{value:"short",label:"Short label"})]})})]})]})]})},parameters:{controls:{disable:!0}}},C={name:"Ex: In FormField",render:function(){const[a,r]=b.useState(null);return e.jsx(c,{w:"sm",children:e.jsx(Xe,{label:"Team size",labelFor:"team-size",helpText:"Choose the option that best fits your current headcount.",error:!a,errorText:"Select a team size.",children:e.jsxs(s,{id:"team-size",name:"teamSize",value:a,onChange:r,placeholder:"Select team size...",children:[e.jsx(t,{value:"1-10",label:"1–10 people"}),e.jsx(t,{value:"11-50",label:"11–50 people"}),e.jsx(t,{value:"51-200",label:"51–200 people"}),e.jsx(t,{value:"201-plus",label:"201+ people"})]})})})},parameters:{controls:{disable:!0}}},k={name:"Ex: Controlled",render:function(){const[a,r]=b.useState("growth");return e.jsxs(c,{display:"grid",gap:"12",w:"xs",children:[e.jsxs(s,{value:a,onChange:r,placeholder:"Choose a plan...",children:[e.jsx(t,{value:"starter",label:"Starter"}),e.jsx(t,{value:"growth",label:"Growth"}),e.jsx(t,{value:"enterprise",label:"Enterprise"})]}),e.jsxs(x,{size:"14",color:"text.subtle",children:["Selected: ",a||"none"]})]})},parameters:{controls:{disable:!0}}},A={name:"A11y: Keyboard Interaction",render:function(){const[a,r]=b.useState(null);return e.jsx(c,{w:"xs",children:e.jsxs(s,{value:a,onChange:r,placeholder:"Choose an option...",children:[e.jsx(t,{value:"starter",label:"Starter"}),e.jsx(t,{value:"growth",label:"Growth"}),e.jsx(t,{value:"enterprise",label:"Enterprise"})]})})},play:async({canvasElement:n})=>{const a=d(n),r=d(n.ownerDocument.body),o=a.getByRole("combobox",{name:/choose an option/i});o.focus(),l(o).toHaveFocus(),await u.keyboard("{ArrowDown}");const i=r.getByRole("listbox");l(i).toBeVisible(),await u.keyboard("{ArrowDown}{Enter}"),l(a.getByRole("combobox",{name:/growth/i})).toBeVisible()},parameters:{controls:{disable:!0}}},R={name:"Ex: Test Id Reaches The Listbox",render:()=>e.jsx(c,{w:"xs","data-testid":"filters",children:e.jsxs(s,{"data-testid":"status",placeholder:"Choose an option...",children:[e.jsx(t,{value:"starter",label:"Starter"}),e.jsx(t,{value:"growth",label:"Growth"}),e.jsx(t,{value:"enterprise",label:"Enterprise"})]})}),play:async({canvasElement:n})=>{const a=d(n),r=d(n.ownerDocument.body),o=a.getByTestId("status");l(o).toBe(a.getByRole("combobox")),l(o).toHaveAttribute("data-ds-part","trigger");const i=o.closest('[data-ds-component="Select"]');l(i).not.toBe(o),l(i).not.toHaveAttribute("data-testid"),o.focus(),await u.keyboard("{ArrowDown}");const p=await r.findByRole("listbox");l(i==null?void 0:i.contains(p)).toBe(!1);const h=p.closest("[data-ds-portal-root]");l(h).not.toBeNull(),l(h).toHaveAttribute("data-ds-chain","filters>status"),l(h==null?void 0:h.getAttribute("data-ds-chain")).not.toContain("trigger")},parameters:{controls:{disable:!0}}},I={name:"Test: data-ds-component",render:()=>e.jsxs(c,{display:"flex",flexDirection:"column",gap:"8",w:"xs",children:[e.jsxs(s,{"data-testid":"ds-default",placeholder:"Choose an option...",children:[e.jsx(t,{value:"starter",label:"Starter"}),e.jsx(t,{value:"growth",label:"Growth"})]}),e.jsxs(s,{"data-testid":"ds-override","data-ds-component":"StatusSelect",placeholder:"Choose an option...",children:[e.jsx(t,{value:"starter",label:"Starter"}),e.jsx(t,{value:"growth",label:"Growth"})]})]}),play:async({canvasElement:n})=>{const a=d(n),r=d(n.ownerDocument.body),o=a.getByTestId("ds-default");l(o).toHaveAttribute("data-ds-part","trigger");const i=o.closest("[data-ds-component]");l(i).toHaveAttribute("data-ds-component","Select"),l(o).not.toHaveAttribute("data-ds-component");const p=a.getByTestId("ds-override");l(p.closest("[data-ds-component]")).toHaveAttribute("data-ds-component","StatusSelect"),l(p).not.toHaveAttribute("data-ds-component"),o.focus(),await u.keyboard("{ArrowDown}");const h=await r.findByRole("listbox");l(h).not.toHaveAttribute("data-ds-component","Select"),l(h).not.toHaveAttribute("data-ds-component","StatusSelect")},parameters:{controls:{disable:!0}}},m=n=>{var a;return(a=n.querySelector("svg[name]"))==null?void 0:a.getAttribute("name")},z={name:"Test: Clear icon follows hover and keyboard",render:()=>e.jsx(c,{w:"xs",children:e.jsxs(s,{defaultValue:"starter",placeholder:"Choose an option...",children:[e.jsx(t,{value:"starter",label:"Starter"}),e.jsx(t,{value:"growth",label:"Growth"}),e.jsx(t,{value:"enterprise",label:"Enterprise"})]})}),play:async({canvasElement:n})=>{const a=d(n),r=d(n.ownerDocument.body),o=a.getByRole("combobox");await u.click(o);const i=await r.findByRole("option",{name:/starter/i}),p=r.getByRole("option",{name:/growth/i});l(m(i)).toBe("check"),await u.hover(i),l(m(i)).toBe("x"),await u.hover(p),l(m(i)).toBe("check"),await u.hover(i),await u.unhover(i),l(m(i)).toBe("check"),await u.keyboard("{ArrowDown}"),l(m(i)).toBe("x"),await u.keyboard("{ArrowDown}"),l(m(i)).toBe("check"),await u.keyboard("s"),l(m(i)).toBe("x"),await u.keyboard("{Escape}"),o.focus(),await u.keyboard("{ArrowDown}");const h=await r.findByRole("option",{name:/starter/i});l(m(h)).toBe("x")},parameters:{controls:{disable:!0}}},V={name:"Test: Clear icon replaces a custom option icon",render:()=>e.jsx(c,{w:"xs",children:e.jsxs(s,{defaultValue:"email",placeholder:"Choose an option...",children:[e.jsx(t,{value:"email",label:"Email",iconLeft:"envelope"}),e.jsx(t,{value:"phone",label:"Phone",iconLeft:"at"})]})}),play:async({canvasElement:n})=>{const a=d(n),r=d(n.ownerDocument.body);await u.click(a.getByRole("combobox"));const o=await r.findByRole("option",{name:/email/i});l(m(o)).toBe("envelope"),await u.hover(o),l(m(o)).toBe("x"),await u.hover(r.getByRole("option",{name:/phone/i})),l(m(o)).toBe("envelope")},parameters:{controls:{disable:!0}}},D={name:"Test: Clear icon resets when open is controlled",render:function(){const[a,r]=b.useState(!1);return e.jsxs(c,{display:"grid",gap:"12",w:"xs",children:[e.jsxs(c,{display:"flex",gap:"8",children:[e.jsx(M,{onClick:()=>r(!0),children:"Open"}),e.jsx(M,{onClick:()=>r(!1),children:"Close"})]}),e.jsxs(s,{open:a,defaultValue:"growth",placeholder:"Choose an option...",children:[e.jsx(t,{value:"starter",label:"Starter"}),e.jsx(t,{value:"growth",label:"Growth"}),e.jsx(t,{value:"enterprise",label:"Enterprise"})]})]})},play:async({canvasElement:n})=>{const a=d(n),r=d(n.ownerDocument.body);await u.click(a.getByRole("button",{name:"Open"}));const o=await r.findByRole("option",{name:/growth/i});l(m(o)).toBe("check"),await u.hover(o),l(m(o)).toBe("x"),await u.click(a.getByRole("button",{name:"Close"})),await u.click(a.getByRole("button",{name:"Open"}));const i=await r.findByRole("option",{name:/growth/i});l(m(i)).toBe("check")},parameters:{controls:{disable:!0}}},L={name:"Test: clearable={false} keeps the value",tags:["!dev","!autodocs"],render:()=>e.jsx(c,{w:"xs",children:e.jsxs(s,{defaultValue:"growth",clearable:!1,children:[e.jsx(t,{value:"starter",label:"Starter"}),e.jsx(t,{value:"growth",label:"Growth"})]})}),play:async({canvasElement:n})=>{const a=d(n),r=d(n.ownerDocument.body),o=a.getByRole("combobox");await u.click(o);const i=await r.findByRole("option",{name:/growth/i});await u.hover(i),l(m(i)).toBe("check"),await u.click(i),l(o).toHaveTextContent("Growth"),o.focus(),await u.keyboard("{Backspace}"),l(o).toHaveTextContent("Growth")},parameters:{controls:{disable:!0}}},G={name:"Test: Trigger shows the selected option before",tags:["!dev","!autodocs"],render:()=>e.jsx(c,{w:"xs",children:e.jsx(s,{defaultValue:"new",clearable:!1,"aria-label":"Status",children:N.map(n=>e.jsx(t,{value:n.value,label:n.label,before:e.jsx(H,{name:"clock",size:"20",fill:n.fill,"data-testid":`status-icon-${n.value}`})},n.value))})}),play:async({canvasElement:n})=>{const a=d(n),r=d(n.ownerDocument.body),o=a.getByRole("combobox");l(d(o).getByTestId("status-icon-new")).toBeInTheDocument(),await u.click(o),await u.click(await r.findByRole("option",{name:/resolved/i})),l(d(o).getByTestId("status-icon-resolved")).toBeInTheDocument(),l(d(o).queryByTestId("status-icon-new")).toBeNull()},parameters:{controls:{disable:!0}}},vt=["Default","Uncontrolled","States","Sizes","WithDescriptionsAndIcons","WithBefore","ExCaseWorkflowControls","Multiple","ExLongOptionList","ExAutoSize","InFormField","ExControlled","A11yKeyboardInteraction","TestIdReachesPortaledListbox","DsComponentAttribute","TestClearIconOnNavigation","TestClearIconOverridesCustomIcon","TestClearIconResetsOnControlledOpen","TestNotClearable","TestBeforeFollowsSelection"];var _,q,U;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: function DefaultRender(args) {
    return <Box w="xs">
        <Select {...args}>
          <SelectOption value="starter" label="Starter" />
          <SelectOption value="growth" label="Growth" />
          <SelectOption value="enterprise" label="Enterprise" />
        </Select>
      </Box>;
  }
}`,...(U=(q=v.parameters)==null?void 0:q.docs)==null?void 0:U.source}}};var K,$,Y;S.parameters={...S.parameters,docs:{...(K=S.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(Y=($=S.parameters)==null?void 0:$.docs)==null?void 0:Y.source}}};var J,Q,X;w.parameters={...w.parameters,docs:{...(J=w.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(X=(Q=w.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,te;y.parameters={...y.parameters,docs:{...(Z=y.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(te=(ee=y.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,ae,oe;f.parameters={...f.parameters,docs:{...(ne=f.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(oe=(ae=f.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var le,re,se;B.parameters={...B.parameters,docs:{...(le=B.parameters)==null?void 0:le.docs,source:{originalSource:`{
  name: 'Before slot',
  render: () => <Box display="grid" gap="12" w="xs">
      <Select defaultValue="waiting" clearable={false} aria-label="Status">
        {STATUS_OPTIONS.map(option => <SelectOption key={option.value} value={option.value} label={option.label} before={<Icon name="clock" size="20" fill={option.fill} />} />)}
      </Select>

      <Select defaultValue="avery" clearable={false} aria-label="Assignee">
        {ASSIGNEE_OPTIONS.map(option => <SelectOption key={option.value} value={option.value} label={option.label} before={<Avatar size="sm" fallback={option.initials} />} />)}
      </Select>
    </Box>,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Give each \`SelectOption\` a \`before\` to show an avatar or a colored icon. The trigger shows the selected option's \`before\`. Pass \`before\` on the \`Select\` itself to show something else. \`clearable={false}\` keeps a value that must never be empty."
      }
    }
  }
}`,...(se=(re=B.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var ie,ce,ue;O.parameters={...O.parameters,docs:{...(ie=O.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  name: 'Ex: Assignee and status on a support case',
  render: function ExCaseWorkflowControlsRender() {
    const [assignee, setAssignee] = useState<string>('unassigned');
    const [status, setStatus] = useState<string>('new');
    return <Box display="grid" gap="12">
        <Box display="flex" gap="8">
          <Select w="200" size="sm" clearable={false} aria-label="Assignee" value={assignee} onChange={(nextValue: string | string[] | null) => {
          if (typeof nextValue === 'string') setAssignee(nextValue);
        }}>
            {ASSIGNEE_OPTIONS.map(option => <SelectOption key={option.value} value={option.value} label={option.label} before={<Avatar size="sm" fallback={option.initials} />} />)}
          </Select>
          <Select w="200" size="sm" clearable={false} aria-label="Status" value={status} onChange={(nextValue: string | string[] | null) => {
          if (typeof nextValue === 'string') setStatus(nextValue);
        }}>
            {STATUS_OPTIONS.map(option => <SelectOption key={option.value} value={option.value} label={option.label} before={<Icon name="clock" size="20" fill={option.fill} />} />)}
          </Select>
        </Box>
        <Text size="14" color="text.subtle">
          Assignee: {assignee}. Status: {status}.
        </Text>
      </Box>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ue=(ce=O.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var pe,de,he;j.parameters={...j.parameters,docs:{...(pe=j.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(he=(de=j.parameters)==null?void 0:de.docs)==null?void 0:he.source}}};var me,be,ge;E.parameters={...E.parameters,docs:{...(me=E.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(ge=(be=E.parameters)==null?void 0:be.docs)==null?void 0:ge.source}}};var xe,ve,Se;T.parameters={...T.parameters,docs:{...(xe=T.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(Se=(ve=T.parameters)==null?void 0:ve.docs)==null?void 0:Se.source}}};var we,ye,fe;C.parameters={...C.parameters,docs:{...(we=C.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(fe=(ye=C.parameters)==null?void 0:ye.docs)==null?void 0:fe.source}}};var Be,Oe,je;k.parameters={...k.parameters,docs:{...(Be=k.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(je=(Oe=k.parameters)==null?void 0:Oe.docs)==null?void 0:je.source}}};var Ee,Te,Ce;A.parameters={...A.parameters,docs:{...(Ee=A.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(Ce=(Te=A.parameters)==null?void 0:Te.docs)==null?void 0:Ce.source}}};var ke,Ae,Re;R.parameters={...R.parameters,docs:{...(ke=R.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(Re=(Ae=R.parameters)==null?void 0:Ae.docs)==null?void 0:Re.source}}};var Ie,ze,Ve;I.parameters={...I.parameters,docs:{...(Ie=I.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(Ve=(ze=I.parameters)==null?void 0:ze.docs)==null?void 0:Ve.source}}};var De,Le,Ge;z.parameters={...z.parameters,docs:{...(De=z.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
}`,...(Ge=(Le=z.parameters)==null?void 0:Le.docs)==null?void 0:Ge.source}}};var He,Ne,We;V.parameters={...V.parameters,docs:{...(He=V.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
}`,...(We=(Ne=V.parameters)==null?void 0:Ne.docs)==null?void 0:We.source}}};var Fe,Me,Pe;D.parameters={...D.parameters,docs:{...(Fe=D.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(Pe=(Me=D.parameters)==null?void 0:Me.docs)==null?void 0:Pe.source}}};var _e,qe,Ue;L.parameters={...L.parameters,docs:{...(_e=L.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  name: 'Test: clearable={false} keeps the value',
  tags: ['!dev', '!autodocs'],
  render: () => <Box w="xs">
      <Select defaultValue="growth" clearable={false}>
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
    const trigger = canvas.getByRole('combobox');

    // Hovering the selected row shows the check, not the clear icon.
    await userEvent.click(trigger);
    const growth = await screen.findByRole('option', {
      name: /growth/i
    });
    await userEvent.hover(growth);
    expect(getOptionIconName(growth)).toBe('check');

    // Choosing it again closes the list and keeps the value.
    await userEvent.click(growth);
    expect(trigger).toHaveTextContent('Growth');

    // Backspace does not clear it either.
    trigger.focus();
    await userEvent.keyboard('{Backspace}');
    expect(trigger).toHaveTextContent('Growth');
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Ue=(qe=L.parameters)==null?void 0:qe.docs)==null?void 0:Ue.source}}};var Ke,$e,Ye;G.parameters={...G.parameters,docs:{...(Ke=G.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  name: 'Test: Trigger shows the selected option before',
  tags: ['!dev', '!autodocs'],
  render: () => <Box w="xs">
      <Select defaultValue="new" clearable={false} aria-label="Status">
        {STATUS_OPTIONS.map(option => <SelectOption key={option.value} value={option.value} label={option.label} before={<Icon name="clock" size="20" fill={option.fill} data-testid={\`status-icon-\${option.value}\`} />} />)}
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
    expect(within(trigger).getByTestId('status-icon-new')).toBeInTheDocument();
    await userEvent.click(trigger);
    await userEvent.click(await screen.findByRole('option', {
      name: /resolved/i
    }));
    expect(within(trigger).getByTestId('status-icon-resolved')).toBeInTheDocument();
    expect(within(trigger).queryByTestId('status-icon-new')).toBeNull();
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Ye=($e=G.parameters)==null?void 0:$e.docs)==null?void 0:Ye.source}}};export{A as A11yKeyboardInteraction,v as Default,I as DsComponentAttribute,T as ExAutoSize,O as ExCaseWorkflowControls,k as ExControlled,E as ExLongOptionList,C as InFormField,j as Multiple,y as Sizes,w as States,G as TestBeforeFollowsSelection,z as TestClearIconOnNavigation,V as TestClearIconOverridesCustomIcon,D as TestClearIconResetsOnControlledOpen,R as TestIdReachesPortaledListbox,L as TestNotClearable,S as Uncontrolled,B as WithBefore,f as WithDescriptionsAndIcons,vt as __namedExportsOrder,xt as default};
