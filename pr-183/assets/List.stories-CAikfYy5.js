import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as I}from"./index-BKyFwriW.js";import{w as Z,e as ee}from"./index-DPYJpPba.js";import{H as Q,V as L}from"./dsComponent-BZ80dv4C.js";import{B as X}from"./BreakpointIndicator-C4jh-xwi.js";import{C as n}from"./Card-CI5J8vNY.js";import{T as Y}from"./Text-BnqT0XMf.js";import{L as o,a as r}from"./ListItem-BoV_dBGk.js";import{L as c}from"./ListItemGroup-CEM3aI4s.js";import"./HighlightText-BZrC_CJE.js";import"./_commonjsHelpers-CqkleIqs.js";import"./mq.hook-xG5a6_yz.js";import"./breakpoints-DU_5_Zhy.js";import"./index-DQmpdOPX.js";import"./Tag-BkgL5d85.js";import"./Icon-CPS1ygZT.js";import"./Checkbox-BKgxmDIf.js";import"./FieldContext-D6URyQos.js";import"./Divider-Ccg9DqVP.js";import"./Toggle-O_SZ-6vY.js";const i=[{id:"acct",label:"Account settings",desc:"Manage profile and access"},{id:"notify",label:"Notifications",desc:"Email, SMS, and push alerts"},{id:"audit",label:"Audit history",desc:"Track critical account events"},{id:"integrations",label:"Integrations",desc:"Connect external tools"}],te=["first","second"].flatMap(t=>i.map(a=>({...a,instanceId:`${t}-${a.id}`}))),Ce={title:"Components/List",component:o,args:{children:null},parameters:{layout:"centered"},tags:["autodocs"]},m={name:"Test: data-ds-component",render:()=>e.jsx(r,{variant:"divider"}),play:async({canvasElement:t})=>{const a=Z(t);ee(a.getByRole("separator").parentElement).toHaveAttribute("data-ds-component","ListItem")},parameters:{controls:{disable:!0}}},se=()=>{var l;const[t,a]=I.useState(((l=i[1])==null?void 0:l.id)??"");return e.jsx(n,{variant:"flat",minW:"2xs",children:e.jsx(o,{role:"listbox","aria-label":"Settings list",children:i.map(s=>e.jsx(r,{selected:t===s.id,onClick:()=>a(s.id),label:s.label,description:s.desc},s.id))})})},re=()=>{const[t,a]=I.useState(["notify","audit"]),l=s=>{a(d=>d.includes(s)?d.filter(j=>j!==s):[...d,s])};return e.jsx(n,{variant:"flat",minW:"2xs",children:e.jsx(o,{role:"listbox","aria-label":"Notification filters",children:i.map(s=>e.jsx(r,{variant:"checkbox",selected:t.includes(s.id),onClick:()=>l(s.id),label:s.label,description:s.desc},s.id))})})},ae=()=>{const[t,a]=I.useState(["notify","audit"]),l=s=>{a(d=>d.includes(s)?d.filter(j=>j!==s):[...d,s])};return e.jsx(n,{variant:"flat",minW:"2xs",children:e.jsx(o,{role:"listbox","aria-label":"Toggle list",children:i.map(s=>e.jsx(r,{variant:"toggle",selected:t.includes(s.id),onClick:()=>l(s.id),label:s.label,description:s.desc},s.id))})})},ie=()=>e.jsx(n,{variant:"flat",minW:"2xs",children:e.jsx(o,{role:"listbox","aria-label":"Search results",query:"acc",highlightMatches:!0,children:i.map((a,l)=>e.jsx(r,{selected:l===0,iconAfter:"arrow-right",label:a.label,description:a.desc},a.id))})}),ne=()=>e.jsx(n,{variant:"flat",minW:"lg",maxW:"2xl",children:e.jsx(o,{role:"listbox","aria-label":"Floating search results",density:"comfortable",query:"acc",highlightMatches:!0,children:te.map((a,l)=>e.jsx(r,{selected:l===0,iconAfter:"arrow-right",label:a.label,description:a.desc},a.instanceId))})}),p={args:{},render:()=>e.jsx(se,{}),parameters:{controls:{disable:!0}}},u={args:{},render:()=>e.jsxs(Q,{gap:"12",alignItems:"start",children:[e.jsx(n,{variant:"flat",minW:"2xs",children:e.jsxs(o,{density:"compact",children:[e.jsx(c,{label:"Account Settings",divider:!0,children:i.slice(0,3).map(t=>e.jsx(r,{label:t.label,description:t.desc},`compact-${t.id}`))}),e.jsxs(c,{label:"User Settings",children:[e.jsx(r,{iconAfter:"user",label:"Profile"}),e.jsx(r,{iconAfter:"arrow-square-out",label:"Logout"})]})]})}),e.jsx(n,{variant:"flat",minW:"2xs",children:e.jsxs(o,{density:"comfortable",children:[e.jsx(c,{label:"Account Settings",divider:!0,children:i.slice(0,3).map(t=>e.jsx(r,{label:t.label,description:t.desc},`compact-${t.id}`))}),e.jsxs(c,{label:"User Settings",children:[e.jsx(r,{iconAfter:"user",label:"Profile"}),e.jsx(r,{iconAfter:"arrow-square-out",label:"Logout"})]})]})}),e.jsx(n,{variant:"flat",minW:"2xs",children:e.jsxs(o,{density:"spacious",children:[e.jsx(c,{label:"Account Settings",divider:!0,children:i.slice(0,3).map(t=>e.jsx(r,{label:t.label,description:t.desc},`compact-${t.id}`))}),e.jsxs(c,{label:"User Settings",children:[e.jsx(r,{iconAfter:"user",label:"Profile"}),e.jsx(r,{iconAfter:"arrow-square-out",label:"Logout"})]})]})})]}),parameters:{controls:{disable:!0}}},b={args:{},render:()=>e.jsxs(Q,{alignItems:"start",gap:"16",children:[e.jsx(re,{}),e.jsx(ae,{})]}),parameters:{controls:{disable:!0}}},x={args:{},render:()=>e.jsx(ie,{}),parameters:{controls:{disable:!0}}},g={args:{},render:()=>e.jsx(n,{variant:"flat",minW:"2xs",children:e.jsx(o,{role:"listbox","aria-label":"Navigation links",children:i.map(t=>e.jsx(r,{href:`#${t.id}`,iconAfter:"arrow-square-out",label:t.label,description:t.desc},`link-${t.id}`))})}),parameters:{controls:{disable:!0}}},f={args:{},render:()=>e.jsxs(L,{children:[e.jsx(n,{variant:"flat",minW:"2xs",children:e.jsxs(o,{density:{base:"spacious",xs:"comfortable",sm:"compact"},children:[e.jsx(c,{label:"Account Settings",divider:!0,children:i.slice(0,3).map(t=>e.jsx(r,{label:t.label,description:t.desc},`item-${t.id}`))}),e.jsxs(c,{label:"User Settings",children:[e.jsx(r,{iconAfter:"user",label:"Profile"}),e.jsx(r,{iconAfter:"arrow-square-out",label:"Logout"})]})]})}),e.jsxs(Y,{textAlign:"center",textStyle:"mono.sm",_after:{display:"inline",content:{base:'"spacious"',xs:'"comfortable"',sm:'"compact"'},color:"text.bold",fontWeight:"bold"},children:["Size:"," "]}),e.jsx(X,{})]}),parameters:{controls:{disable:!0}}},h={args:{},render:()=>e.jsxs(L,{children:[e.jsx(n,{variant:"flat",minW:"2xs",children:e.jsxs(L,{alignItems:"stretch",gap:"0",children:[e.jsx(c,{label:"Account Settings",divider:!0,density:{base:"spacious",xs:"comfortable",sm:"compact"},children:i.slice(0,2).map(t=>e.jsx(r,{label:t.label,description:t.desc},`standalone-group-${t.id}`))}),e.jsx(r,{density:{base:"spacious",xs:"comfortable",sm:"compact"},iconAfter:"arrow-square-out",label:"Logout",description:"Close the current session"})]})}),e.jsxs(Y,{textAlign:"center",textStyle:"mono.sm",_after:{display:"inline",content:{base:'"spacious"',xs:'"comfortable"',sm:'"compact"'},color:"text.bold",fontWeight:"bold"},children:["Size:"," "]}),e.jsx(X,{})]}),parameters:{controls:{disable:!0}}},S={name:"Ex: Floating search bar",args:{},render:()=>e.jsx(ne,{}),parameters:{controls:{disable:!0}}};var y,A,v;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Test: data-ds-component',
  render: () => <ListItem variant="divider" />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('separator').parentElement).toHaveAttribute('data-ds-component', 'ListItem');
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(v=(A=m.parameters)==null?void 0:A.docs)==null?void 0:v.source}}};var k,C,W;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {},
  render: () => <SingleSelectExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(W=(C=p.parameters)==null?void 0:C.docs)==null?void 0:W.source}}};var E,G,w;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(w=(G=u.parameters)==null?void 0:G.docs)==null?void 0:w.source}}};var q,$,B;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(B=($=b.parameters)==null?void 0:$.docs)==null?void 0:B.source}}};var H,T,P;x.parameters={...x.parameters,docs:{...(H=x.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {},
  render: () => <HighlightingExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(P=(T=x.parameters)==null?void 0:T.docs)==null?void 0:P.source}}};var U,V,F;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(F=(V=g.parameters)==null?void 0:V.docs)==null?void 0:F.source}}};var M,D,_;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(_=(D=f.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};var z,N,R;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(R=(N=h.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var O,J,K;S.parameters={...S.parameters,docs:{...(O=S.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Ex: Floating search bar',
  args: {},
  render: () => <FloatingSearchBarExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(K=(J=S.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const We=["DsComponentAttribute","Default","Density","SelectionControls","Highlighting","WithHrefs","ConditionalBreakpoints","ConditionalBreakpointsStandalone","ExFloatingSearchBar"];export{f as ConditionalBreakpoints,h as ConditionalBreakpointsStandalone,p as Default,u as Density,m as DsComponentAttribute,S as ExFloatingSearchBar,x as Highlighting,b as SelectionControls,g as WithHrefs,We as __namedExportsOrder,Ce as default};
