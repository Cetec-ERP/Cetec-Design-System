import{j as e,H as ee,V as I,T as te,r as y}from"./iframe-CBV8VWL6.js";import{B as re}from"./BreakpointIndicator-CTa4UR0p.js";import{C as n}from"./Card-DFP60goW.js";import{L as i,a as s}from"./ListItem-D0FZeA_L.js";import{L as c}from"./ListItemGroup-B9ONFkDx.js";import"./HighlightText-q-Fit29w.js";import"./preload-helper-C7uIy2vd.js";import"./mq.hook-CTf3VRgk.js";import"./breakpoints-DU_5_Zhy.js";import"./Tag-CcAEnSuq.js";import"./Checkbox-ko2sCy0N.js";import"./FieldContext-CTOECjAu.js";import"./Divider-C3CTz_Aq.js";import"./Toggle-9TzWQ1-o.js";const{expect:se,within:ae}=__STORYBOOK_MODULE_TEST__,o=[{id:"acct",label:"Account settings",desc:"Manage profile and access"},{id:"notify",label:"Notifications",desc:"Email, SMS, and push alerts"},{id:"audit",label:"Audit history",desc:"Track critical account events"},{id:"integrations",label:"Integrations",desc:"Connect external tools"}],ne=[{id:"10482",orderNumber:"WO-2201",customer:"Northwind Traders"},{id:"10517",orderNumber:"WO-2202",customer:"Contoso Manufacturing"},{id:"10688",orderNumber:"WO-2203",customer:"Fabrikam Industrial"}],ie=["first","second"].flatMap(t=>o.map(a=>({...a,instanceId:`${t}-${a.id}`}))),ke={title:"Components/List",component:i,args:{children:null},parameters:{layout:"centered"},tags:["autodocs"]},m={name:"Test: data-ds-component",render:()=>e.jsx(s,{variant:"divider"}),play:async({canvasElement:t})=>{const a=ae(t);se(a.getByRole("separator").parentElement).toHaveAttribute("data-ds-component","ListItem")},parameters:{controls:{disable:!0}}},oe=()=>{var l;const[t,a]=y.useState(((l=o[1])==null?void 0:l.id)??"");return e.jsx(n,{variant:"flat",minW:"2xs",children:e.jsx(i,{role:"listbox","aria-label":"Settings list",children:o.map(r=>e.jsx(s,{selected:t===r.id,onClick:()=>a(r.id),label:r.label,description:r.desc},r.id))})})},le=()=>{const[t,a]=y.useState(["notify","audit"]),l=r=>{a(d=>d.includes(r)?d.filter(L=>L!==r):[...d,r])};return e.jsx(n,{variant:"flat",minW:"2xs",children:e.jsx(i,{role:"listbox","aria-label":"Notification filters",children:o.map(r=>e.jsx(s,{variant:"checkbox",selected:t.includes(r.id),onClick:()=>l(r.id),label:r.label,description:r.desc},r.id))})})},ce=()=>{const[t,a]=y.useState(["notify","audit"]),l=r=>{a(d=>d.includes(r)?d.filter(L=>L!==r):[...d,r])};return e.jsx(n,{variant:"flat",minW:"2xs",children:e.jsx(i,{role:"listbox","aria-label":"Toggle list",children:o.map(r=>e.jsx(s,{variant:"toggle",selected:t.includes(r.id),onClick:()=>l(r.id),label:r.label,description:r.desc},r.id))})})},de=()=>e.jsx(n,{variant:"flat",minW:"2xs",children:e.jsx(i,{role:"listbox","aria-label":"Search results",query:"acc",highlightMatches:!0,children:o.map((a,l)=>e.jsx(s,{selected:l===0,iconAfter:"arrow-right",label:a.label,description:a.desc},a.id))})}),me=()=>e.jsx(n,{variant:"flat",minW:"lg",maxW:"2xl",children:e.jsx(i,{role:"listbox","aria-label":"Floating search results",density:"comfortable",query:"acc",highlightMatches:!0,children:ie.map((a,l)=>e.jsx(s,{selected:l===0,iconAfter:"arrow-right",label:a.label,description:a.desc},a.instanceId))})}),p={args:{},render:()=>e.jsx(oe,{}),parameters:{controls:{disable:!0}}},u={args:{},render:()=>e.jsxs(ee,{gap:"12",alignItems:"start",children:[e.jsx(n,{variant:"flat",minW:"2xs",children:e.jsxs(i,{density:"compact",children:[e.jsx(c,{label:"Account Settings",divider:!0,children:o.slice(0,3).map(t=>e.jsx(s,{label:t.label,description:t.desc},`compact-${t.id}`))}),e.jsxs(c,{label:"User Settings",children:[e.jsx(s,{iconAfter:"user",label:"Profile"}),e.jsx(s,{iconAfter:"arrow-square-out",label:"Logout"})]})]})}),e.jsx(n,{variant:"flat",minW:"2xs",children:e.jsxs(i,{density:"comfortable",children:[e.jsx(c,{label:"Account Settings",divider:!0,children:o.slice(0,3).map(t=>e.jsx(s,{label:t.label,description:t.desc},`compact-${t.id}`))}),e.jsxs(c,{label:"User Settings",children:[e.jsx(s,{iconAfter:"user",label:"Profile"}),e.jsx(s,{iconAfter:"arrow-square-out",label:"Logout"})]})]})}),e.jsx(n,{variant:"flat",minW:"2xs",children:e.jsxs(i,{density:"spacious",children:[e.jsx(c,{label:"Account Settings",divider:!0,children:o.slice(0,3).map(t=>e.jsx(s,{label:t.label,description:t.desc},`compact-${t.id}`))}),e.jsxs(c,{label:"User Settings",children:[e.jsx(s,{iconAfter:"user",label:"Profile"}),e.jsx(s,{iconAfter:"arrow-square-out",label:"Logout"})]})]})})]}),parameters:{controls:{disable:!0}}},b={args:{},render:()=>e.jsxs(ee,{alignItems:"start",gap:"16",children:[e.jsx(le,{}),e.jsx(ce,{})]}),parameters:{controls:{disable:!0}}},x={args:{},render:()=>e.jsx(de,{}),parameters:{controls:{disable:!0}}},g={args:{},render:()=>e.jsx(n,{variant:"flat",minW:"2xs",children:e.jsx(i,{role:"listbox","aria-label":"Navigation links",children:o.map(t=>e.jsx(s,{href:`#${t.id}`,iconAfter:"arrow-square-out",label:t.label,description:t.desc},`link-${t.id}`))})}),parameters:{controls:{disable:!0}}},f={args:{},render:()=>e.jsxs(I,{children:[e.jsx(n,{variant:"flat",minW:"2xs",children:e.jsxs(i,{density:{base:"spacious",xs:"comfortable",sm:"compact"},children:[e.jsx(c,{label:"Account Settings",divider:!0,children:o.slice(0,3).map(t=>e.jsx(s,{label:t.label,description:t.desc},`item-${t.id}`))}),e.jsxs(c,{label:"User Settings",children:[e.jsx(s,{iconAfter:"user",label:"Profile"}),e.jsx(s,{iconAfter:"arrow-square-out",label:"Logout"})]})]})}),e.jsxs(te,{textAlign:"center",textStyle:"mono.sm",_after:{display:"inline",content:{base:'"spacious"',xs:'"comfortable"',sm:'"compact"'},color:"text.bold",fontWeight:"bold"},children:["Size:"," "]}),e.jsx(re,{})]}),parameters:{controls:{disable:!0}}},h={args:{},render:()=>e.jsxs(I,{children:[e.jsx(n,{variant:"flat",minW:"2xs",children:e.jsxs(I,{alignItems:"stretch",gap:"0",children:[e.jsx(c,{label:"Account Settings",divider:!0,density:{base:"spacious",xs:"comfortable",sm:"compact"},children:o.slice(0,2).map(t=>e.jsx(s,{label:t.label,description:t.desc},`standalone-group-${t.id}`))}),e.jsx(s,{density:{base:"spacious",xs:"comfortable",sm:"compact"},iconAfter:"arrow-square-out",label:"Logout",description:"Close the current session"})]})}),e.jsxs(te,{textAlign:"center",textStyle:"mono.sm",_after:{display:"inline",content:{base:'"spacious"',xs:'"comfortable"',sm:'"compact"'},color:"text.bold",fontWeight:"bold"},children:["Size:"," "]}),e.jsx(re,{})]}),parameters:{controls:{disable:!0}}},S={name:"Ex: Floating search bar",args:{},render:()=>e.jsx(me,{}),parameters:{controls:{disable:!0}}},j={name:"Row identity",args:{},render:()=>e.jsx(n,{variant:"flat",minW:"2xs",children:e.jsx(i,{role:"listbox","aria-label":"Work orders",children:ne.map(t=>e.jsx(s,{rowId:t.id,label:t.orderNumber,description:t.customer},t.id))})}),parameters:{controls:{disable:!0}}},Ce=["DsComponentAttribute","Default","Density","SelectionControls","Highlighting","WithHrefs","ConditionalBreakpoints","ConditionalBreakpointsStandalone","ExFloatingSearchBar","RowIdentity"];var A,v,k;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(k=(v=m.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var C,W,E;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {},
  render: () => <SingleSelectExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(E=(W=p.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};var w,G,q;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(q=(G=u.parameters)==null?void 0:G.docs)==null?void 0:q.source}}};var T,$,B;b.parameters={...b.parameters,docs:{...(T=b.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(B=($=b.parameters)==null?void 0:$.docs)==null?void 0:B.source}}};var H,_,N;x.parameters={...x.parameters,docs:{...(H=x.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {},
  render: () => <HighlightingExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(N=(_=x.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};var M,U,F;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(F=(U=g.parameters)==null?void 0:U.docs)==null?void 0:F.source}}};var O,P,R;f.parameters={...f.parameters,docs:{...(O=f.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(R=(P=f.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var V,D,z;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(z=(D=h.parameters)==null?void 0:D.docs)==null?void 0:z.source}}};var K,Y,J;S.parameters={...S.parameters,docs:{...(K=S.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'Ex: Floating search bar',
  args: {},
  render: () => <FloatingSearchBarExample />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(J=(Y=S.parameters)==null?void 0:Y.docs)==null?void 0:J.source}}};var Q,X,Z;j.parameters={...j.parameters,docs:{...(Q=j.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Z=(X=j.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};export{f as ConditionalBreakpoints,h as ConditionalBreakpointsStandalone,p as Default,u as Density,m as DsComponentAttribute,S as ExFloatingSearchBar,x as Highlighting,j as RowIdentity,b as SelectionControls,g as WithHrefs,Ce as __namedExportsOrder,ke as default};
