import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as I}from"./index-BKyFwriW.js";import{H as Q,V as L}from"./Box-gSGxV3Q2.js";import{B as X}from"./BreakpointIndicator-BcguCW3U.js";import{C as i}from"./Card-DilgLGlc.js";import{T as Y}from"./Text-CNeMCqi2.js";import{L as o,a as s}from"./ListItem-TfFtcx6U.js";import{L as c}from"./ListItemGroup-CTdKVUsI.js";import"./HighlightText-ggFvwAiY.js";import"./_commonjsHelpers-CqkleIqs.js";import"./mq.hook-xG5a6_yz.js";import"./breakpoints-DU_5_Zhy.js";import"./index-DQmpdOPX.js";import"./Tag-D9sRmxJz.js";import"./Icon-D9m5LQ6b.js";import"./Checkbox-cfFvNIJi.js";import"./FieldContext-D6URyQos.js";import"./Divider-CrwX0lEb.js";import"./Toggle-BXG_ebc-.js";const n=[{id:"acct",label:"Account settings",desc:"Manage profile and access"},{id:"notify",label:"Notifications",desc:"Email, SMS, and push alerts"},{id:"audit",label:"Audit history",desc:"Track critical account events"},{id:"integrations",label:"Integrations",desc:"Connect external tools"}],Z=[{id:"10482",orderNumber:"WO-2201",customer:"Northwind Traders"},{id:"10517",orderNumber:"WO-2202",customer:"Contoso Manufacturing"},{id:"10688",orderNumber:"WO-2203",customer:"Fabrikam Industrial"}],ee=["first","second"].flatMap(t=>n.map(a=>({...a,instanceId:`${t}-${a.id}`}))),Ae={title:"Components/List",component:o,args:{children:null},parameters:{layout:"centered"},tags:["autodocs"]},te=()=>{var l;const[t,a]=I.useState(((l=n[1])==null?void 0:l.id)??"");return e.jsx(i,{variant:"flat",minW:"2xs",children:e.jsx(o,{role:"listbox","aria-label":"Settings list",children:n.map(r=>e.jsx(s,{selected:t===r.id,onClick:()=>a(r.id),label:r.label,description:r.desc},r.id))})})},re=()=>{const[t,a]=I.useState(["notify","audit"]),l=r=>{a(d=>d.includes(r)?d.filter(j=>j!==r):[...d,r])};return e.jsx(i,{variant:"flat",minW:"2xs",children:e.jsx(o,{role:"listbox","aria-label":"Notification filters",children:n.map(r=>e.jsx(s,{variant:"checkbox",selected:t.includes(r.id),onClick:()=>l(r.id),label:r.label,description:r.desc},r.id))})})},se=()=>{const[t,a]=I.useState(["notify","audit"]),l=r=>{a(d=>d.includes(r)?d.filter(j=>j!==r):[...d,r])};return e.jsx(i,{variant:"flat",minW:"2xs",children:e.jsx(o,{role:"listbox","aria-label":"Toggle list",children:n.map(r=>e.jsx(s,{variant:"toggle",selected:t.includes(r.id),onClick:()=>l(r.id),label:r.label,description:r.desc},r.id))})})},ae=()=>e.jsx(i,{variant:"flat",minW:"2xs",children:e.jsx(o,{role:"listbox","aria-label":"Search results",query:"acc",highlightMatches:!0,children:n.map((a,l)=>e.jsx(s,{selected:l===0,iconAfter:"arrow-right",label:a.label,description:a.desc},a.id))})}),ie=()=>e.jsx(i,{variant:"flat",minW:"lg",maxW:"2xl",children:e.jsx(o,{role:"listbox","aria-label":"Floating search results",density:"comfortable",query:"acc",highlightMatches:!0,children:ee.map((a,l)=>e.jsx(s,{selected:l===0,iconAfter:"arrow-right",label:a.label,description:a.desc},a.instanceId))})}),m={args:{},render:()=>e.jsx(te,{}),parameters:{controls:{disable:!0}}},p={args:{},render:()=>e.jsxs(Q,{gap:"12",alignItems:"start",children:[e.jsx(i,{variant:"flat",minW:"2xs",children:e.jsxs(o,{density:"compact",children:[e.jsx(c,{label:"Account Settings",divider:!0,children:n.slice(0,3).map(t=>e.jsx(s,{label:t.label,description:t.desc},`compact-${t.id}`))}),e.jsxs(c,{label:"User Settings",children:[e.jsx(s,{iconAfter:"user",label:"Profile"}),e.jsx(s,{iconAfter:"arrow-square-out",label:"Logout"})]})]})}),e.jsx(i,{variant:"flat",minW:"2xs",children:e.jsxs(o,{density:"comfortable",children:[e.jsx(c,{label:"Account Settings",divider:!0,children:n.slice(0,3).map(t=>e.jsx(s,{label:t.label,description:t.desc},`compact-${t.id}`))}),e.jsxs(c,{label:"User Settings",children:[e.jsx(s,{iconAfter:"user",label:"Profile"}),e.jsx(s,{iconAfter:"arrow-square-out",label:"Logout"})]})]})}),e.jsx(i,{variant:"flat",minW:"2xs",children:e.jsxs(o,{density:"spacious",children:[e.jsx(c,{label:"Account Settings",divider:!0,children:n.slice(0,3).map(t=>e.jsx(s,{label:t.label,description:t.desc},`compact-${t.id}`))}),e.jsxs(c,{label:"User Settings",children:[e.jsx(s,{iconAfter:"user",label:"Profile"}),e.jsx(s,{iconAfter:"arrow-square-out",label:"Logout"})]})]})})]}),parameters:{controls:{disable:!0}}},u={args:{},render:()=>e.jsxs(Q,{alignItems:"start",gap:"16",children:[e.jsx(re,{}),e.jsx(se,{})]}),parameters:{controls:{disable:!0}}},b={args:{},render:()=>e.jsx(ae,{}),parameters:{controls:{disable:!0}}},x={args:{},render:()=>e.jsx(i,{variant:"flat",minW:"2xs",children:e.jsx(o,{role:"listbox","aria-label":"Navigation links",children:n.map(t=>e.jsx(s,{href:`#${t.id}`,iconAfter:"arrow-square-out",label:t.label,description:t.desc},`link-${t.id}`))})}),parameters:{controls:{disable:!0}}},g={args:{},render:()=>e.jsxs(L,{children:[e.jsx(i,{variant:"flat",minW:"2xs",children:e.jsxs(o,{density:{base:"spacious",xs:"comfortable",sm:"compact"},children:[e.jsx(c,{label:"Account Settings",divider:!0,children:n.slice(0,3).map(t=>e.jsx(s,{label:t.label,description:t.desc},`item-${t.id}`))}),e.jsxs(c,{label:"User Settings",children:[e.jsx(s,{iconAfter:"user",label:"Profile"}),e.jsx(s,{iconAfter:"arrow-square-out",label:"Logout"})]})]})}),e.jsxs(Y,{textAlign:"center",textStyle:"mono.sm",_after:{display:"inline",content:{base:'"spacious"',xs:'"comfortable"',sm:'"compact"'},color:"text.bold",fontWeight:"bold"},children:["Size:"," "]}),e.jsx(X,{})]}),parameters:{controls:{disable:!0}}},f={args:{},render:()=>e.jsxs(L,{children:[e.jsx(i,{variant:"flat",minW:"2xs",children:e.jsxs(L,{alignItems:"stretch",gap:"0",children:[e.jsx(c,{label:"Account Settings",divider:!0,density:{base:"spacious",xs:"comfortable",sm:"compact"},children:n.slice(0,2).map(t=>e.jsx(s,{label:t.label,description:t.desc},`standalone-group-${t.id}`))}),e.jsx(s,{density:{base:"spacious",xs:"comfortable",sm:"compact"},iconAfter:"arrow-square-out",label:"Logout",description:"Close the current session"})]})}),e.jsxs(Y,{textAlign:"center",textStyle:"mono.sm",_after:{display:"inline",content:{base:'"spacious"',xs:'"comfortable"',sm:'"compact"'},color:"text.bold",fontWeight:"bold"},children:["Size:"," "]}),e.jsx(X,{})]}),parameters:{controls:{disable:!0}}},h={name:"Ex: Floating search bar",args:{},render:()=>e.jsx(ie,{}),parameters:{controls:{disable:!0}}},S={name:"Row identity",args:{},render:()=>e.jsx(i,{variant:"flat",minW:"2xs",children:e.jsx(o,{role:"listbox","aria-label":"Work orders",children:Z.map(t=>e.jsx(s,{rowId:t.id,label:t.orderNumber,description:t.customer},t.id))})}),parameters:{controls:{disable:!0}}};var y,k,A;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {},
  render: () => <SingleSelectExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(A=(k=m.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var C,W,v;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(v=(W=p.parameters)==null?void 0:W.docs)==null?void 0:v.source}}};var w,G,E;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(E=(G=u.parameters)==null?void 0:G.docs)==null?void 0:E.source}}};var q,$,B;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {},
  render: () => <HighlightingExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(B=($=b.parameters)==null?void 0:$.docs)==null?void 0:B.source}}};var H,T,N;x.parameters={...x.parameters,docs:{...(H=x.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(N=(T=x.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};var F,M,P;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(P=(M=g.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var U,V,_;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(_=(V=f.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var R,z,D;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Ex: Floating search bar',
  args: {},
  render: () => <FloatingSearchBarExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(D=(z=h.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var O,J,K;S.parameters={...S.parameters,docs:{...(O=S.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Row identity',
  args: {},
  render: () => <Card variant="flat" minW="2xs">
      <List role="listbox" aria-label="Work orders">
        {records.map(record => <ListItem key={record.id} rowId={record.id} label={record.orderNumber} description={record.customer} />)}
      </List>
    </Card>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(K=(J=S.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const Ce=["Default","Density","SelectionControls","Highlighting","WithHrefs","ConditionalBreakpoints","ConditionalBreakpointsStandalone","ExFloatingSearchBar","RowIdentity"];export{g as ConditionalBreakpoints,f as ConditionalBreakpointsStandalone,m as Default,p as Density,h as ExFloatingSearchBar,b as Highlighting,S as RowIdentity,u as SelectionControls,x as WithHrefs,Ce as __namedExportsOrder,Ae as default};
