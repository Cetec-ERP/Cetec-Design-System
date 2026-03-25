import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as h}from"./index-BKyFwriW.js";import{H as w}from"./Box-B-dS-qo0.js";import{C as o}from"./Card-DQHmbzpq.js";import{L as l,a as d,b as s}from"./ListItem-Ca71c-X8.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Divider-kYvIQ_cX.js";import"./Text-BlqN2xhk.js";import"./Checkbox-p0A9qo44.js";import"./Icon-CMDYjoHI.js";import"./IconConfig-DO2Dck3c.js";import"./Toggle-104SzZt3.js";const n=[{id:"acct",label:"Account settings",desc:"Manage profile and access"},{id:"notify",label:"Notifications",desc:"Email, SMS, and push alerts"},{id:"audit",label:"Audit history",desc:"Track critical account events"},{id:"integrations",label:"Integrations",desc:"Connect external tools"}],X={title:"Components/List",component:l,args:{children:null},parameters:{layout:"centered"},tags:["autodocs"]},$=()=>{var i;const[r,a]=h.useState(((i=n[1])==null?void 0:i.id)??"");return e.jsx(o,{variant:"flat",minW:"2xs",children:e.jsx(l,{role:"listbox","aria-label":"Settings list",children:n.map(t=>e.jsx(s,{selected:r===t.id,onClick:()=>a(t.id),label:t.label,description:t.desc},t.id))})})},F=()=>{const[r,a]=h.useState(["notify","audit"]),i=t=>{a(c=>c.includes(t)?c.filter(b=>b!==t):[...c,t])};return e.jsx(o,{variant:"flat",minW:"2xs",children:e.jsx(l,{role:"listbox","aria-label":"Notification filters",children:n.map(t=>e.jsx(s,{variant:"checkbox",selected:r.includes(t.id),onClick:()=>i(t.id),label:t.label,description:t.desc},t.id))})})},M=()=>{const[r,a]=h.useState(["notify","audit"]),i=t=>{a(c=>c.includes(t)?c.filter(b=>b!==t):[...c,t])};return e.jsx(o,{variant:"flat",minW:"2xs",children:e.jsx(l,{role:"listbox","aria-label":"Toggle list",children:n.map(t=>e.jsx(s,{variant:"toggle",selected:r.includes(t.id),onClick:()=>i(t.id),label:t.label,description:t.desc},t.id))})})},P=()=>e.jsx(o,{variant:"flat",minW:"2xs",children:e.jsx(l,{role:"listbox","aria-label":"Search results",query:"acc",highlightMatches:!0,children:n.map((a,i)=>e.jsx(s,{selected:i===0,iconAfter:"arrow-right",label:a.label,description:a.desc},a.id))})}),U=()=>e.jsx(o,{variant:"flat",minW:"lg",maxW:"2xl",children:e.jsx(l,{role:"listbox","aria-label":"Floating search results",density:"comfortable",query:"acc",highlightMatches:!0,children:n.concat(n).map((a,i)=>e.jsx(s,{selected:i===0,iconAfter:"arrow-right",label:a.label,description:a.desc},`${a.id}-${i}`))})}),m={args:{},render:()=>e.jsx($,{}),parameters:{controls:{disable:!0}}},u={args:{},render:()=>e.jsxs(w,{gap:"12",alignItems:"start",children:[e.jsx(o,{variant:"flat",minW:"2xs",children:e.jsxs(l,{density:"compact",children:[e.jsx(d,{label:"Account Settings",divider:!0,children:n.slice(0,3).map(r=>e.jsx(s,{label:r.label,description:r.desc},`compact-${r.id}`))}),e.jsxs(d,{label:"User Settings",children:[e.jsx(s,{iconAfter:"user",label:"Profile"}),e.jsx(s,{iconAfter:"arrow-square-out",label:"Logout"})]})]})}),e.jsx(o,{variant:"flat",minW:"2xs",children:e.jsxs(l,{density:"comfortable",children:[e.jsx(d,{label:"Account Settings",divider:!0,children:n.slice(0,3).map(r=>e.jsx(s,{label:r.label,description:r.desc},`compact-${r.id}`))}),e.jsxs(d,{label:"User Settings",children:[e.jsx(s,{iconAfter:"user",label:"Profile"}),e.jsx(s,{iconAfter:"arrow-square-out",label:"Logout"})]})]})}),e.jsx(o,{variant:"flat",minW:"2xs",children:e.jsxs(l,{density:"spacious",children:[e.jsx(d,{label:"Account Settings",divider:!0,children:n.slice(0,3).map(r=>e.jsx(s,{label:r.label,description:r.desc},`compact-${r.id}`))}),e.jsxs(d,{label:"User Settings",children:[e.jsx(s,{iconAfter:"user",label:"Profile"}),e.jsx(s,{iconAfter:"arrow-square-out",label:"Logout"})]})]})})]}),parameters:{controls:{disable:!0}}},p={args:{},render:()=>e.jsxs(w,{alignItems:"start",gap:"16",children:[e.jsx(F,{}),e.jsx(M,{})]}),parameters:{controls:{disable:!0}}},g={args:{},render:()=>e.jsx(P,{}),parameters:{controls:{disable:!0}}},x={name:"Ex: Floating search bar",args:{},render:()=>e.jsx(U,{}),parameters:{controls:{disable:!0}}};var f,S,j;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {},
  render: () => <SingleSelectExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(j=(S=m.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var L,I,A;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {},
  render: () => <HStack gap="12" alignItems="start">
      <Card variant="flat" minW="2xs">
        <List density="compact">
          <ListItemGroup label="Account Settings" divider>
            {items.slice(0, 3).map(item => <ListItem key={\`compact-\${item.id}\`} label={item.label} description={item.desc} />)}
          </ListItemGroup>
          <ListItemGroup label="User Settings">
            <ListItem iconAfter="user" label="Profile" />
            <ListItem iconAfter="arrow-square-out" label="Logout" />
          </ListItemGroup>
        </List>
      </Card>
      <Card variant="flat" minW="2xs">
        <List density="comfortable">
          <ListItemGroup label="Account Settings" divider>
            {items.slice(0, 3).map(item => <ListItem key={\`compact-\${item.id}\`} label={item.label} description={item.desc} />)}
          </ListItemGroup>
          <ListItemGroup label="User Settings">
            <ListItem iconAfter="user" label="Profile" />
            <ListItem iconAfter="arrow-square-out" label="Logout" />
          </ListItemGroup>
        </List>
      </Card>
      <Card variant="flat" minW="2xs">
        <List density="spacious">
          <ListItemGroup label="Account Settings" divider>
            {items.slice(0, 3).map(item => <ListItem key={\`compact-\${item.id}\`} label={item.label} description={item.desc} />)}
          </ListItemGroup>
          <ListItemGroup label="User Settings">
            <ListItem iconAfter="user" label="Profile" />
            <ListItem iconAfter="arrow-square-out" label="Logout" />
          </ListItemGroup>
        </List>
      </Card>
    </HStack>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(A=(I=u.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};var y,E,C;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {},
  render: () => <HStack alignItems="start" gap="16">
      <MultiSelectCheckboxExample />
      <ToggleSelectionExample />
    </HStack>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(C=(E=p.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};var v,k,G;g.parameters={...g.parameters,docs:{...(v=g.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {},
  render: () => <HighlightingExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(G=(k=g.parameters)==null?void 0:k.docs)==null?void 0:G.source}}};var W,q,H;x.parameters={...x.parameters,docs:{...(W=x.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Ex: Floating search bar',
  args: {},
  render: () => <FloatingSearchBarExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(H=(q=x.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};const Y=["Default","Density","SelectionControls","Highlighting","ExFloatingSearchBar"];export{m as Default,u as Density,x as ExFloatingSearchBar,g as Highlighting,p as SelectionControls,Y as __namedExportsOrder,X as default};
