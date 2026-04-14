import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as j}from"./index-BKyFwriW.js";import{H as _,V as S}from"./Box-7d6-wXl0.js";import{B as z}from"./BreakpointIndicator-U3vrIdY_.js";import{C as n}from"./Card-gKcZ_NAN.js";import{T as D}from"./Text-Cm9k3dA6.js";import{L as l,a as c,b as r}from"./ListItem-BTC6cosb.js";import"./_commonjsHelpers-CqkleIqs.js";import"./mq.hook-BU-2oBAn.js";import"./radii-Ir2x-kmI.js";import"./index-DOpYXeGo.js";import"./colors-CLHggMRt.js";import"./Tag-TEsd4yEi.js";import"./Icon-CdfbFGjj.js";import"./IconConfig-D6qOrJtl.js";import"./Divider-C28TM1sX.js";import"./Checkbox-C_UCDWiX.js";import"./Toggle-RQoit5R0.js";const i=[{id:"acct",label:"Account settings",desc:"Manage profile and access"},{id:"notify",label:"Notifications",desc:"Email, SMS, and push alerts"},{id:"audit",label:"Audit history",desc:"Track critical account events"},{id:"integrations",label:"Integrations",desc:"Connect external tools"}],be={title:"Components/List",component:l,args:{children:null},parameters:{layout:"centered"},tags:["autodocs"]},N=()=>{var o;const[t,a]=j.useState(((o=i[1])==null?void 0:o.id)??"");return e.jsx(n,{variant:"flat",minW:"2xs",children:e.jsx(l,{role:"listbox","aria-label":"Settings list",children:i.map(s=>e.jsx(r,{selected:t===s.id,onClick:()=>a(s.id),label:s.label,description:s.desc},s.id))})})},O=()=>{const[t,a]=j.useState(["notify","audit"]),o=s=>{a(d=>d.includes(s)?d.filter(h=>h!==s):[...d,s])};return e.jsx(n,{variant:"flat",minW:"2xs",children:e.jsx(l,{role:"listbox","aria-label":"Notification filters",children:i.map(s=>e.jsx(r,{variant:"checkbox",selected:t.includes(s.id),onClick:()=>o(s.id),label:s.label,description:s.desc},s.id))})})},R=()=>{const[t,a]=j.useState(["notify","audit"]),o=s=>{a(d=>d.includes(s)?d.filter(h=>h!==s):[...d,s])};return e.jsx(n,{variant:"flat",minW:"2xs",children:e.jsx(l,{role:"listbox","aria-label":"Toggle list",children:i.map(s=>e.jsx(r,{variant:"toggle",selected:t.includes(s.id),onClick:()=>o(s.id),label:s.label,description:s.desc},s.id))})})},J=()=>e.jsx(n,{variant:"flat",minW:"2xs",children:e.jsx(l,{role:"listbox","aria-label":"Search results",query:"acc",highlightMatches:!0,children:i.map((a,o)=>e.jsx(r,{selected:o===0,iconAfter:"arrow-right",label:a.label,description:a.desc},a.id))})}),K=()=>e.jsx(n,{variant:"flat",minW:"lg",maxW:"2xl",children:e.jsx(l,{role:"listbox","aria-label":"Floating search results",density:"comfortable",query:"acc",highlightMatches:!0,children:i.concat(i).map((a,o)=>e.jsx(r,{selected:o===0,iconAfter:"arrow-right",label:a.label,description:a.desc},`${a.id}-${o}`))})}),m={args:{},render:()=>e.jsx(N,{}),parameters:{controls:{disable:!0}}},p={args:{},render:()=>e.jsxs(_,{gap:"12",alignItems:"start",children:[e.jsx(n,{variant:"flat",minW:"2xs",children:e.jsxs(l,{density:"compact",children:[e.jsx(c,{label:"Account Settings",divider:!0,children:i.slice(0,3).map(t=>e.jsx(r,{label:t.label,description:t.desc},`compact-${t.id}`))}),e.jsxs(c,{label:"User Settings",children:[e.jsx(r,{iconAfter:"user",label:"Profile"}),e.jsx(r,{iconAfter:"arrow-square-out",label:"Logout"})]})]})}),e.jsx(n,{variant:"flat",minW:"2xs",children:e.jsxs(l,{density:"comfortable",children:[e.jsx(c,{label:"Account Settings",divider:!0,children:i.slice(0,3).map(t=>e.jsx(r,{label:t.label,description:t.desc},`compact-${t.id}`))}),e.jsxs(c,{label:"User Settings",children:[e.jsx(r,{iconAfter:"user",label:"Profile"}),e.jsx(r,{iconAfter:"arrow-square-out",label:"Logout"})]})]})}),e.jsx(n,{variant:"flat",minW:"2xs",children:e.jsxs(l,{density:"spacious",children:[e.jsx(c,{label:"Account Settings",divider:!0,children:i.slice(0,3).map(t=>e.jsx(r,{label:t.label,description:t.desc},`compact-${t.id}`))}),e.jsxs(c,{label:"User Settings",children:[e.jsx(r,{iconAfter:"user",label:"Profile"}),e.jsx(r,{iconAfter:"arrow-square-out",label:"Logout"})]})]})})]}),parameters:{controls:{disable:!0}}},u={args:{},render:()=>e.jsxs(_,{alignItems:"start",gap:"16",children:[e.jsx(O,{}),e.jsx(R,{})]}),parameters:{controls:{disable:!0}}},b={args:{},render:()=>e.jsx(J,{}),parameters:{controls:{disable:!0}}},x={args:{},render:()=>e.jsxs(S,{children:[e.jsx(n,{variant:"flat",minW:"2xs",children:e.jsxs(l,{density:{base:"spacious",xs:"comfortable",sm:"compact"},children:[e.jsx(c,{label:"Account Settings",divider:!0,children:i.slice(0,3).map(t=>e.jsx(r,{label:t.label,description:t.desc},`item-${t.id}`))}),e.jsxs(c,{label:"User Settings",children:[e.jsx(r,{iconAfter:"user",label:"Profile"}),e.jsx(r,{iconAfter:"arrow-square-out",label:"Logout"})]})]})}),e.jsxs(D,{textAlign:"center",textStyle:"mono.sm",_after:{display:"inline",content:{base:'"spacious"',xs:'"comfortable"',sm:'"compact"'},color:"text.bold",fontWeight:"bold"},children:["Size:"," "]}),e.jsx(z,{position:"fixed",bottom:"16",right:"16"})]}),parameters:{controls:{disable:!0}}},g={args:{},render:()=>e.jsxs(S,{children:[e.jsx(n,{variant:"flat",minW:"2xs",children:e.jsxs(S,{alignItems:"stretch",gap:"0",children:[e.jsx(c,{label:"Account Settings",divider:!0,density:{base:"spacious",xs:"comfortable",sm:"compact"},children:i.slice(0,2).map(t=>e.jsx(r,{label:t.label,description:t.desc},`standalone-group-${t.id}`))}),e.jsx(r,{density:{base:"spacious",xs:"comfortable",sm:"compact"},iconAfter:"arrow-square-out",label:"Logout",description:"Close the current session"})]})}),e.jsxs(D,{textAlign:"center",textStyle:"mono.sm",_after:{display:"inline",content:{base:'"spacious"',xs:'"comfortable"',sm:'"compact"'},color:"text.bold",fontWeight:"bold"},children:["Size:"," "]}),e.jsx(z,{position:"fixed",bottom:"16",right:"16"})]}),parameters:{controls:{disable:!0}}},f={name:"Ex: Floating search bar",args:{},render:()=>e.jsx(K,{}),parameters:{controls:{disable:!0}}};var L,I,y;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {},
  render: () => <SingleSelectExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(y=(I=m.parameters)==null?void 0:I.docs)==null?void 0:y.source}}};var A,k,C;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(C=(k=p.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var v,W,G;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(G=(W=u.parameters)==null?void 0:W.docs)==null?void 0:G.source}}};var E,q,w;b.parameters={...b.parameters,docs:{...(E=b.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {},
  render: () => <HighlightingExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(w=(q=b.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};var B,$,H;x.parameters={...x.parameters,docs:{...(B=x.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {},
  render: () => <VStack>
      <Card variant="flat" minW="2xs">
        <List density={{
        base: 'spacious',
        xs: 'comfortable',
        sm: 'compact'
      }}>
          <ListItemGroup label="Account Settings" divider>
            {items.slice(0, 3).map(item => <ListItem key={\`item-\${item.id}\`} label={item.label} description={item.desc} />)}
          </ListItemGroup>
          <ListItemGroup label="User Settings">
            <ListItem iconAfter="user" label="Profile" />
            <ListItem iconAfter="arrow-square-out" label="Logout" />
          </ListItemGroup>
        </List>
      </Card>
      <Text textAlign="center" textStyle="mono.sm" _after={{
      display: 'inline',
      content: {
        base: '"spacious"',
        xs: '"comfortable"',
        sm: '"compact"'
      },
      color: 'text.bold',
      fontWeight: 'bold'
    }}>
        Size:{' '}
      </Text>
      <BreakpointIndicator position="fixed" bottom="16" right="16" />
    </VStack>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(H=($=x.parameters)==null?void 0:$.docs)==null?void 0:H.source}}};var T,P,U;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {},
  render: () => <VStack>
      <Card variant="flat" minW="2xs">
        <VStack alignItems="stretch" gap="0">
          <ListItemGroup label="Account Settings" divider density={{
          base: 'spacious',
          xs: 'comfortable',
          sm: 'compact'
        }}>
            {items.slice(0, 2).map(item => <ListItem key={\`standalone-group-\${item.id}\`} label={item.label} description={item.desc} />)}
          </ListItemGroup>
          <ListItem density={{
          base: 'spacious',
          xs: 'comfortable',
          sm: 'compact'
        }} iconAfter="arrow-square-out" label="Logout" description="Close the current session" />
        </VStack>
      </Card>
      <Text textAlign="center" textStyle="mono.sm" _after={{
      display: 'inline',
      content: {
        base: '"spacious"',
        xs: '"comfortable"',
        sm: '"compact"'
      },
      color: 'text.bold',
      fontWeight: 'bold'
    }}>
        Size:{' '}
      </Text>
      <BreakpointIndicator position="fixed" bottom="16" right="16" />
    </VStack>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(U=(P=g.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};var V,F,M;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Ex: Floating search bar',
  args: {},
  render: () => <FloatingSearchBarExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(M=(F=f.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};const xe=["Default","Density","SelectionControls","Highlighting","ConditionalBreakpoints","ConditionalBreakpointsStandalone","ExFloatingSearchBar"];export{x as ConditionalBreakpoints,g as ConditionalBreakpointsStandalone,m as Default,p as Density,f as ExFloatingSearchBar,b as Highlighting,u as SelectionControls,xe as __namedExportsOrder,be as default};
