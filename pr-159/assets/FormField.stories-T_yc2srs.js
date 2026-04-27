import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./index-BKyFwriW.js";import{G as z,B}from"./Box-DON8OdPK.js";import{B as w}from"./BreakpointIndicator-IW1tL_SP.js";import{B as L}from"./Button-CLSGe6Ev.js";import{C as u}from"./CheckboxInput-D5eP0CVx.js";import{T as N}from"./Text-BxMUKbtC.js";import{T as R}from"./Textarea-C3aPEYR3.js";import{T as d}from"./TextInput-DwrISJ2E.js";import{F as n}from"./FormField-DkspSzIw.js";import"./_commonjsHelpers-CqkleIqs.js";import"./mq.hook-BU-2oBAn.js";import"./radii-Ir2x-kmI.js";import"./index-DOpYXeGo.js";import"./colors-CLHggMRt.js";import"./Tag-CdyncLWL.js";import"./Icon-BjyDhYXA.js";import"./IconConfig-CigF0iOf.js";import"./Spinner-VZexnvVV.js";import"./Checkbox-DpKt20O5.js";import"./Label-DWL0qqiH.js";import"./Tooltip-CbjHgvJ3.js";import"./floating-KWRh7SVq.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";const se={title:"Components/FormField",component:n,tags:["autodocs"],parameters:{layout:"centered"},args:{label:"Company Name",labelFor:"company-name",children:null}},o={render:function(){const[r,a]=c.useState("");return e.jsx(n,{label:"Company Name",labelFor:"company-name",helpText:"Use your legal business name for billing.",children:e.jsx(d,{id:"company-name",name:"company-name",value:r,onChange:t=>a(t.target.value),placeholder:"Acme Manufacturing"})})}},i={render:function(){const[r,a]=c.useState("");return e.jsx(n,{layout:"inline",label:"Order Number",labelFor:"order-number",helpText:"Used for matching external invoices.",maxW:"xl",children:e.jsx(d,{id:"order-number",name:"order-number",value:r,onChange:t=>a(t.target.value),placeholder:"SO-28417"})})},parameters:{controls:{disable:!0}}},s={render:()=>e.jsxs(z,{w:"full",h:"full",position:"relative",placeContent:"center",alignItems:"center",justifyItems:"center",gap:"16",children:[e.jsxs(n,{label:"Order Number",labelFor:"order-number",helpText:"Used for matching external invoices.",size:{base:"xl",xs:"lg",sm:"md",md:"sm"},children:[e.jsx(d,{name:"pizza",placeholder:"Fave pizza",maxW:"md"}),e.jsx(R,{name:"description",placeholder:"Describe how pizza makes you feel..."}),e.jsx(L,{iconAfter:"send",children:"Button, yo"})]}),e.jsxs(N,{textAlign:"center",textStyle:"mono.sm",_after:{display:"inline",content:{base:'"xl"',xs:'"lg"',sm:'"md"',md:'"sm"'},color:"text.bold",fontWeight:"bold"},children:["Size:"," "]}),e.jsx(w,{})]}),parameters:{controls:{disable:!0}}},l={name:"Ex: Validation Error",render:function(){const[r,a]=c.useState(""),t=r.length>0&&!r.includes("@");return e.jsx(n,{label:"Notification Email",labelFor:"notification-email",required:!0,error:t,errorText:"Enter a valid email address.",children:e.jsx(d,{id:"notification-email",name:"notification-email",value:r,onChange:k=>a(k.target.value),placeholder:"team@company.com",type:"email"})})},parameters:{controls:{disable:!0}}},m={name:"Ex: Label + Input Wrapper Composition",render:function(){const[r,a]=c.useState({invoices:!0,alerts:!1});return e.jsx(B,{maxW:"lg",children:e.jsxs(n,{label:"Email Preferences",labelFor:"invoices",helpText:"Choose which events should trigger notifications.",children:[e.jsx(u,{id:"invoices",name:"invoices",checked:r.invoices,onChange:t=>a({...r,invoices:t.target.checked}),children:"Invoice sent notifications"}),e.jsx(u,{id:"alerts",name:"alerts",checked:r.alerts,onChange:t=>a({...r,alerts:t.target.checked}),children:"Critical system alerts"})]})})},parameters:{controls:{disable:!0}}};var x,h,g;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: function DefaultRender() {
    const [value, setValue] = useState('');
    return <FormField label="Company Name" labelFor="company-name" helpText="Use your legal business name for billing.">
        <TextInput id="company-name" name="company-name" value={value} onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} placeholder="Acme Manufacturing" />
      </FormField>;
  }
}`,...(g=(h=o.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var b,f,v;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: function InlineLayoutRender() {
    const [value, setValue] = useState('');
    return <FormField layout="inline" label="Order Number" labelFor="order-number" helpText="Used for matching external invoices." maxW="xl">
        <TextInput id="order-number" name="order-number" value={value} onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} placeholder="SO-28417" />
      </FormField>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(v=(f=i.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var F,E,y;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <Grid w="full" h="full" position="relative" placeContent="center" alignItems="center" justifyItems="center" gap="16">
      <FormField label="Order Number" labelFor="order-number" helpText="Used for matching external invoices." size={{
      base: 'xl',
      xs: 'lg',
      sm: 'md',
      md: 'sm'
    }}
    // gap="12"
    >
        <TextInput name="pizza" placeholder="Fave pizza" maxW="md" />
        <Textarea name="description" placeholder="Describe how pizza makes you feel..." />
        <Button iconAfter="send">Button, yo</Button>
      </FormField>
      <Text textAlign="center" textStyle="mono.sm" _after={{
      display: 'inline',
      content: {
        base: '"xl"',
        xs: '"lg"',
        sm: '"md"',
        md: '"sm"'
      },
      color: 'text.bold',
      fontWeight: 'bold'
    }}>
        Size:{' '}
      </Text>
      <BreakpointIndicator />
    </Grid>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(y=(E=s.parameters)==null?void 0:E.docs)==null?void 0:y.source}}};var C,I,T;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Ex: Validation Error',
  render: function ExFieldWithErrorRender() {
    const [email, setEmail] = useState('');
    const showError = email.length > 0 && !email.includes('@');
    return <FormField label="Notification Email" labelFor="notification-email" required error={showError} errorText="Enter a valid email address.">
        <TextInput id="notification-email" name="notification-email" value={email} onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} placeholder="team@company.com" type="email" />
      </FormField>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(T=(I=l.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var S,W,j;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Ex: Label + Input Wrapper Composition',
  render: function ExWithInputWrappersRender() {
    const [settings, setSettings] = useState({
      invoices: true,
      alerts: false
    });
    return <Box maxW="lg">
        <FormField label="Email Preferences" labelFor="invoices" helpText="Choose which events should trigger notifications.">
          <CheckboxInput id="invoices" name="invoices" checked={settings.invoices} onChange={e => setSettings({
          ...settings,
          invoices: e.target.checked
        })}>
            Invoice sent notifications
          </CheckboxInput>
          <CheckboxInput id="alerts" name="alerts" checked={settings.alerts} onChange={e => setSettings({
          ...settings,
          alerts: e.target.checked
        })}>
            Critical system alerts
          </CheckboxInput>
        </FormField>
      </Box>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(j=(W=m.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};const le=["Default","InlineLayout","ConditionalBreakpoints","ExFieldWithError","ExWithInputWrappers"];export{s as ConditionalBreakpoints,o as Default,l as ExFieldWithError,m as ExWithInputWrappers,i as InlineLayout,le as __namedExportsOrder,se as default};
