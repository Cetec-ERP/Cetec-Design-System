import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as y}from"./index-BKyFwriW.js";import{w as se,e as ae}from"./index-DPYJpPba.js";import{H as ee,V as I}from"./dsComponent-Chqat_43.js";import{B as te}from"./BreakpointIndicator-NEr5mmUu.js";import{C as i}from"./Card-wmdhm21A.js";import{T as re}from"./Text-d1FwRHEe.js";import{L as o,a as s}from"./ListItem-ibDez8pV.js";import{L as c}from"./ListItemGroup-Dzqk3bWw.js";import"./HighlightText-Cwu-DE_2.js";import"./_commonjsHelpers-CqkleIqs.js";import"./mq.hook-xG5a6_yz.js";import"./breakpoints-DU_5_Zhy.js";import"./index-DQmpdOPX.js";import"./Tag-DkFXnnus.js";import"./Icon-8ZK6Q4Mp.js";import"./Tooltip-Dq2_w23H.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";import"./Checkbox-edG__xm_.js";import"./FieldContext-D6URyQos.js";import"./Divider-CDS0Pv-n.js";import"./Toggle-D98SoxpI.js";const n=[{id:"acct",label:"Account settings",desc:"Manage profile and access"},{id:"notify",label:"Notifications",desc:"Email, SMS, and push alerts"},{id:"audit",label:"Audit history",desc:"Track critical account events"},{id:"integrations",label:"Integrations",desc:"Connect external tools"}],ie=[{id:"10482",orderNumber:"WO-2201",customer:"Northwind Traders"},{id:"10517",orderNumber:"WO-2202",customer:"Contoso Manufacturing"},{id:"10688",orderNumber:"WO-2203",customer:"Fabrikam Industrial"}],oe=["first","second"].flatMap(t=>n.map(a=>({...a,instanceId:`${t}-${a.id}`}))),He={title:"Components/List",component:o,args:{children:null},parameters:{layout:"centered"},tags:["autodocs"]},m={name:"Test: data-ds-component",render:()=>e.jsx(s,{variant:"divider"}),play:async({canvasElement:t})=>{const a=se(t);ae(a.getByRole("separator").parentElement).toHaveAttribute("data-ds-component","ListItem")},parameters:{controls:{disable:!0}}},ne=()=>{var l;const[t,a]=y.useState(((l=n[1])==null?void 0:l.id)??"");return e.jsx(i,{variant:"flat",minW:"2xs",children:e.jsx(o,{role:"listbox","aria-label":"Settings list",children:n.map(r=>e.jsx(s,{selected:t===r.id,onClick:()=>a(r.id),label:r.label,description:r.desc},r.id))})})},le=()=>{const[t,a]=y.useState(["notify","audit"]),l=r=>{a(d=>d.includes(r)?d.filter(L=>L!==r):[...d,r])};return e.jsx(i,{variant:"flat",minW:"2xs",children:e.jsx(o,{role:"listbox","aria-label":"Notification filters",children:n.map(r=>e.jsx(s,{variant:"checkbox",selected:t.includes(r.id),onClick:()=>l(r.id),label:r.label,description:r.desc},r.id))})})},ce=()=>{const[t,a]=y.useState(["notify","audit"]),l=r=>{a(d=>d.includes(r)?d.filter(L=>L!==r):[...d,r])};return e.jsx(i,{variant:"flat",minW:"2xs",children:e.jsx(o,{role:"listbox","aria-label":"Toggle list",children:n.map(r=>e.jsx(s,{variant:"toggle",selected:t.includes(r.id),onClick:()=>l(r.id),label:r.label,description:r.desc},r.id))})})},de=()=>e.jsx(i,{variant:"flat",minW:"2xs",children:e.jsx(o,{role:"listbox","aria-label":"Search results",query:"acc",highlightMatches:!0,children:n.map((a,l)=>e.jsx(s,{selected:l===0,iconAfter:"arrow-right",label:a.label,description:a.desc},a.id))})}),me=()=>e.jsx(i,{variant:"flat",minW:"lg",maxW:"2xl",children:e.jsx(o,{role:"listbox","aria-label":"Floating search results",density:"comfortable",query:"acc",highlightMatches:!0,children:oe.map((a,l)=>e.jsx(s,{selected:l===0,iconAfter:"arrow-right",label:a.label,description:a.desc},a.instanceId))})}),p={args:{},render:()=>e.jsx(ne,{}),parameters:{controls:{disable:!0}}},u={args:{},render:()=>e.jsxs(ee,{gap:"12",alignItems:"start",children:[e.jsx(i,{variant:"flat",minW:"2xs",children:e.jsxs(o,{density:"compact",children:[e.jsx(c,{label:"Account Settings",divider:!0,children:n.slice(0,3).map(t=>e.jsx(s,{label:t.label,description:t.desc},`compact-${t.id}`))}),e.jsxs(c,{label:"User Settings",children:[e.jsx(s,{iconAfter:"user",label:"Profile"}),e.jsx(s,{iconAfter:"arrow-square-out",label:"Logout"})]})]})}),e.jsx(i,{variant:"flat",minW:"2xs",children:e.jsxs(o,{density:"comfortable",children:[e.jsx(c,{label:"Account Settings",divider:!0,children:n.slice(0,3).map(t=>e.jsx(s,{label:t.label,description:t.desc},`compact-${t.id}`))}),e.jsxs(c,{label:"User Settings",children:[e.jsx(s,{iconAfter:"user",label:"Profile"}),e.jsx(s,{iconAfter:"arrow-square-out",label:"Logout"})]})]})}),e.jsx(i,{variant:"flat",minW:"2xs",children:e.jsxs(o,{density:"spacious",children:[e.jsx(c,{label:"Account Settings",divider:!0,children:n.slice(0,3).map(t=>e.jsx(s,{label:t.label,description:t.desc},`compact-${t.id}`))}),e.jsxs(c,{label:"User Settings",children:[e.jsx(s,{iconAfter:"user",label:"Profile"}),e.jsx(s,{iconAfter:"arrow-square-out",label:"Logout"})]})]})})]}),parameters:{controls:{disable:!0}}},b={args:{},render:()=>e.jsxs(ee,{alignItems:"start",gap:"16",children:[e.jsx(le,{}),e.jsx(ce,{})]}),parameters:{controls:{disable:!0}}},x={args:{},render:()=>e.jsx(de,{}),parameters:{controls:{disable:!0}}},g={args:{},render:()=>e.jsx(i,{variant:"flat",minW:"2xs",children:e.jsx(o,{role:"listbox","aria-label":"Navigation links",children:n.map(t=>e.jsx(s,{href:`#${t.id}`,iconAfter:"arrow-square-out",label:t.label,description:t.desc},`link-${t.id}`))})}),parameters:{controls:{disable:!0}}},f={args:{},render:()=>e.jsxs(I,{children:[e.jsx(i,{variant:"flat",minW:"2xs",children:e.jsxs(o,{density:{base:"spacious",xs:"comfortable",sm:"compact"},children:[e.jsx(c,{label:"Account Settings",divider:!0,children:n.slice(0,3).map(t=>e.jsx(s,{label:t.label,description:t.desc},`item-${t.id}`))}),e.jsxs(c,{label:"User Settings",children:[e.jsx(s,{iconAfter:"user",label:"Profile"}),e.jsx(s,{iconAfter:"arrow-square-out",label:"Logout"})]})]})}),e.jsxs(re,{textAlign:"center",textStyle:"mono.sm",_after:{display:"inline",content:{base:'"spacious"',xs:'"comfortable"',sm:'"compact"'},color:"text.bold",fontWeight:"bold"},children:["Size:"," "]}),e.jsx(te,{})]}),parameters:{controls:{disable:!0}}},h={args:{},render:()=>e.jsxs(I,{children:[e.jsx(i,{variant:"flat",minW:"2xs",children:e.jsxs(I,{alignItems:"stretch",gap:"0",children:[e.jsx(c,{label:"Account Settings",divider:!0,density:{base:"spacious",xs:"comfortable",sm:"compact"},children:n.slice(0,2).map(t=>e.jsx(s,{label:t.label,description:t.desc},`standalone-group-${t.id}`))}),e.jsx(s,{density:{base:"spacious",xs:"comfortable",sm:"compact"},iconAfter:"arrow-square-out",label:"Logout",description:"Close the current session"})]})}),e.jsxs(re,{textAlign:"center",textStyle:"mono.sm",_after:{display:"inline",content:{base:'"spacious"',xs:'"comfortable"',sm:'"compact"'},color:"text.bold",fontWeight:"bold"},children:["Size:"," "]}),e.jsx(te,{})]}),parameters:{controls:{disable:!0}}},S={name:"Ex: Floating search bar",args:{},render:()=>e.jsx(me,{}),parameters:{controls:{disable:!0}}},j={name:"Row identity",args:{},render:()=>e.jsx(i,{variant:"flat",minW:"2xs",children:e.jsx(o,{role:"listbox","aria-label":"Work orders",children:ie.map(t=>e.jsx(s,{rowId:t.id,label:t.orderNumber,description:t.customer},t.id))})}),parameters:{controls:{disable:!0}}};var A,v,k;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(k=(v=m.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var C,W,w;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {},
  render: () => <SingleSelectExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(w=(W=p.parameters)==null?void 0:W.docs)==null?void 0:w.source}}};var E,G,q;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(q=(G=u.parameters)==null?void 0:G.docs)==null?void 0:q.source}}};var $,B,H;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(H=(B=b.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var T,N,F;x.parameters={...x.parameters,docs:{...(T=x.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {},
  render: () => <HighlightingExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(F=(N=x.parameters)==null?void 0:N.docs)==null?void 0:F.source}}};var M,P,U;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(U=(P=g.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};var V,R,D;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(D=(R=f.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var _,z,O;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(O=(z=h.parameters)==null?void 0:z.docs)==null?void 0:O.source}}};var J,K,Q;S.parameters={...S.parameters,docs:{...(J=S.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'Ex: Floating search bar',
  args: {},
  render: () => <FloatingSearchBarExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Q=(K=S.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,Z;j.parameters={...j.parameters,docs:{...(X=j.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Z=(Y=j.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const Te=["DsComponentAttribute","Default","Density","SelectionControls","Highlighting","WithHrefs","ConditionalBreakpoints","ConditionalBreakpointsStandalone","ExFloatingSearchBar","RowIdentity"];export{f as ConditionalBreakpoints,h as ConditionalBreakpointsStandalone,p as Default,u as Density,m as DsComponentAttribute,S as ExFloatingSearchBar,x as Highlighting,j as RowIdentity,b as SelectionControls,g as WithHrefs,Te as __namedExportsOrder,He as default};
