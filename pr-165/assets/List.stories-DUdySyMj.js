import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as L}from"./index-BKyFwriW.js";import{H as O,V as j}from"./Box-DON8OdPK.js";import{B as R}from"./BreakpointIndicator-IW1tL_SP.js";import{C as n}from"./Card-Djc-wNfS.js";import{T as J}from"./Text-BxMUKbtC.js";import{L as l,a as c,b as r}from"./ListItem-CVw5G2ZY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./mq.hook-BU-2oBAn.js";import"./radii-Ir2x-kmI.js";import"./index-DOpYXeGo.js";import"./colors-CLHggMRt.js";import"./Tag-CdyncLWL.js";import"./Icon-BjyDhYXA.js";import"./IconConfig-CigF0iOf.js";import"./Divider-Bl0MrEIB.js";import"./Checkbox-DpKt20O5.js";import"./Toggle-DOkY3kzg.js";const i=[{id:"acct",label:"Account settings",desc:"Manage profile and access"},{id:"notify",label:"Notifications",desc:"Email, SMS, and push alerts"},{id:"audit",label:"Audit history",desc:"Track critical account events"},{id:"integrations",label:"Integrations",desc:"Connect external tools"}],he={title:"Components/List",component:l,args:{children:null},parameters:{layout:"centered"},tags:["autodocs"]},K=()=>{var o;const[t,a]=L.useState(((o=i[1])==null?void 0:o.id)??"");return e.jsx(n,{variant:"flat",minW:"2xs",children:e.jsx(l,{role:"listbox","aria-label":"Settings list",children:i.map(s=>e.jsx(r,{selected:t===s.id,onClick:()=>a(s.id),label:s.label,description:s.desc},s.id))})})},Q=()=>{const[t,a]=L.useState(["notify","audit"]),o=s=>{a(d=>d.includes(s)?d.filter(S=>S!==s):[...d,s])};return e.jsx(n,{variant:"flat",minW:"2xs",children:e.jsx(l,{role:"listbox","aria-label":"Notification filters",children:i.map(s=>e.jsx(r,{variant:"checkbox",selected:t.includes(s.id),onClick:()=>o(s.id),label:s.label,description:s.desc},s.id))})})},X=()=>{const[t,a]=L.useState(["notify","audit"]),o=s=>{a(d=>d.includes(s)?d.filter(S=>S!==s):[...d,s])};return e.jsx(n,{variant:"flat",minW:"2xs",children:e.jsx(l,{role:"listbox","aria-label":"Toggle list",children:i.map(s=>e.jsx(r,{variant:"toggle",selected:t.includes(s.id),onClick:()=>o(s.id),label:s.label,description:s.desc},s.id))})})},Y=()=>e.jsx(n,{variant:"flat",minW:"2xs",children:e.jsx(l,{role:"listbox","aria-label":"Search results",query:"acc",highlightMatches:!0,children:i.map((a,o)=>e.jsx(r,{selected:o===0,iconAfter:"arrow-right",label:a.label,description:a.desc},a.id))})}),Z=()=>e.jsx(n,{variant:"flat",minW:"lg",maxW:"2xl",children:e.jsx(l,{role:"listbox","aria-label":"Floating search results",density:"comfortable",query:"acc",highlightMatches:!0,children:i.concat(i).map((a,o)=>e.jsx(r,{selected:o===0,iconAfter:"arrow-right",label:a.label,description:a.desc},`${a.id}-${o}`))})}),m={args:{},render:()=>e.jsx(K,{}),parameters:{controls:{disable:!0}}},p={args:{},render:()=>e.jsxs(O,{gap:"12",alignItems:"start",children:[e.jsx(n,{variant:"flat",minW:"2xs",children:e.jsxs(l,{density:"compact",children:[e.jsx(c,{label:"Account Settings",divider:!0,children:i.slice(0,3).map(t=>e.jsx(r,{label:t.label,description:t.desc},`compact-${t.id}`))}),e.jsxs(c,{label:"User Settings",children:[e.jsx(r,{iconAfter:"user",label:"Profile"}),e.jsx(r,{iconAfter:"arrow-square-out",label:"Logout"})]})]})}),e.jsx(n,{variant:"flat",minW:"2xs",children:e.jsxs(l,{density:"comfortable",children:[e.jsx(c,{label:"Account Settings",divider:!0,children:i.slice(0,3).map(t=>e.jsx(r,{label:t.label,description:t.desc},`compact-${t.id}`))}),e.jsxs(c,{label:"User Settings",children:[e.jsx(r,{iconAfter:"user",label:"Profile"}),e.jsx(r,{iconAfter:"arrow-square-out",label:"Logout"})]})]})}),e.jsx(n,{variant:"flat",minW:"2xs",children:e.jsxs(l,{density:"spacious",children:[e.jsx(c,{label:"Account Settings",divider:!0,children:i.slice(0,3).map(t=>e.jsx(r,{label:t.label,description:t.desc},`compact-${t.id}`))}),e.jsxs(c,{label:"User Settings",children:[e.jsx(r,{iconAfter:"user",label:"Profile"}),e.jsx(r,{iconAfter:"arrow-square-out",label:"Logout"})]})]})})]}),parameters:{controls:{disable:!0}}},u={args:{},render:()=>e.jsxs(O,{alignItems:"start",gap:"16",children:[e.jsx(Q,{}),e.jsx(X,{})]}),parameters:{controls:{disable:!0}}},b={args:{},render:()=>e.jsx(Y,{}),parameters:{controls:{disable:!0}}},x={args:{},render:()=>e.jsx(n,{variant:"flat",minW:"2xs",children:e.jsx(l,{role:"listbox","aria-label":"Navigation links",children:i.map(t=>e.jsx(r,{href:`#${t.id}`,iconAfter:"arrow-square-out",label:t.label,description:t.desc},`link-${t.id}`))})}),parameters:{controls:{disable:!0}}},g={args:{},render:()=>e.jsxs(j,{children:[e.jsx(n,{variant:"flat",minW:"2xs",children:e.jsxs(l,{density:{base:"spacious",xs:"comfortable",sm:"compact"},children:[e.jsx(c,{label:"Account Settings",divider:!0,children:i.slice(0,3).map(t=>e.jsx(r,{label:t.label,description:t.desc},`item-${t.id}`))}),e.jsxs(c,{label:"User Settings",children:[e.jsx(r,{iconAfter:"user",label:"Profile"}),e.jsx(r,{iconAfter:"arrow-square-out",label:"Logout"})]})]})}),e.jsxs(J,{textAlign:"center",textStyle:"mono.sm",_after:{display:"inline",content:{base:'"spacious"',xs:'"comfortable"',sm:'"compact"'},color:"text.bold",fontWeight:"bold"},children:["Size:"," "]}),e.jsx(R,{})]}),parameters:{controls:{disable:!0}}},f={args:{},render:()=>e.jsxs(j,{children:[e.jsx(n,{variant:"flat",minW:"2xs",children:e.jsxs(j,{alignItems:"stretch",gap:"0",children:[e.jsx(c,{label:"Account Settings",divider:!0,density:{base:"spacious",xs:"comfortable",sm:"compact"},children:i.slice(0,2).map(t=>e.jsx(r,{label:t.label,description:t.desc},`standalone-group-${t.id}`))}),e.jsx(r,{density:{base:"spacious",xs:"comfortable",sm:"compact"},iconAfter:"arrow-square-out",label:"Logout",description:"Close the current session"})]})}),e.jsxs(J,{textAlign:"center",textStyle:"mono.sm",_after:{display:"inline",content:{base:'"spacious"',xs:'"comfortable"',sm:'"compact"'},color:"text.bold",fontWeight:"bold"},children:["Size:"," "]}),e.jsx(R,{})]}),parameters:{controls:{disable:!0}}},h={name:"Ex: Floating search bar",args:{},render:()=>e.jsx(Z,{}),parameters:{controls:{disable:!0}}};var I,y,A;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {},
  render: () => <SingleSelectExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(A=(y=m.parameters)==null?void 0:y.docs)==null?void 0:A.source}}};var k,C,v;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(v=(C=p.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var W,G,E;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(E=(G=u.parameters)==null?void 0:G.docs)==null?void 0:E.source}}};var q,$,w;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {},
  render: () => <HighlightingExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(w=($=b.parameters)==null?void 0:$.docs)==null?void 0:w.source}}};var B,H,T;x.parameters={...x.parameters,docs:{...(B=x.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {},
  render: () => <Card variant="flat" minW="2xs">
      <List role="listbox" aria-label="Navigation links">
        {items.map(item => <ListItem key={\`link-\${item.id}\`} href={\`#\${item.id}\`} iconAfter="arrow-square-out" label={item.label} description={item.desc} />)}
      </List>
    </Card>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(T=(H=x.parameters)==null?void 0:H.docs)==null?void 0:T.source}}};var P,U,V;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
      <BreakpointIndicator />
    </VStack>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(V=(U=g.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var F,M,_;f.parameters={...f.parameters,docs:{...(F=f.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
      <BreakpointIndicator />
    </VStack>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(_=(M=f.parameters)==null?void 0:M.docs)==null?void 0:_.source}}};var z,D,N;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Ex: Floating search bar',
  args: {},
  render: () => <FloatingSearchBarExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(N=(D=h.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};const Se=["Default","Density","SelectionControls","Highlighting","WithHrefs","ConditionalBreakpoints","ConditionalBreakpointsStandalone","ExFloatingSearchBar"];export{g as ConditionalBreakpoints,f as ConditionalBreakpointsStandalone,m as Default,p as Density,h as ExFloatingSearchBar,b as Highlighting,u as SelectionControls,x as WithHrefs,Se as __namedExportsOrder,he as default};
