import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./index-BKyFwriW.js";import{G as L,B as N}from"./Box-C4uJrM56.js";import{B as O}from"./BreakpointIndicator-ILWfePWI.js";import{B as A}from"./Button-C6nGqtwc.js";import{C as x}from"./CheckboxInput-DLXWfkmA.js";import{I as w}from"./Icon-DVkTIUY6.js";import"./IconConfig-CwDT3tlP.js";import{T as D}from"./Text-MsVbvEyI.js";import{T as U}from"./Textarea-CClEkGHe.js";import{T as o}from"./TextInput-QyG3MNJU.js";import{F as n}from"./FormField-WSmb8132.js";import"./_commonjsHelpers-CqkleIqs.js";import"./mq.hook-CkQV1P4e.js";import"./radii-qsSgFAtK.js";import"./index-DOpYXeGo.js";import"./colors-CFNk7ZMQ.js";import"./Tag-BRfUOjSh.js";import"./Spinner-DQMshQyu.js";import"./FieldContext-D6URyQos.js";import"./Checkbox-D03hsQ_a.js";import"./Label-Md2wWTZa.js";import"./IconButton-DeC0lKpS.js";import"./Tooltip-BX0JCKkT.js";import"./floating-CMrvfkt4.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";const xe={title:"Components/FormField",component:n,tags:["autodocs"],parameters:{layout:"centered"},args:{label:"Company Name",labelFor:"company-name",children:null}},s={render:function(){const[r,a]=p.useState("");return e.jsx(n,{label:"Company Name",labelFor:"company-name",helpText:"Use your legal business name for billing.",children:e.jsx(o,{id:"company-name",name:"company-name",value:r,onChange:t=>a(t.target.value),placeholder:"Acme Manufacturing"})})}},l={render:function(){const[r,a]=p.useState("");return e.jsx(n,{layout:"inline",label:"Order Number",labelFor:"order-number",helpText:"Used for matching external invoices.",maxW:"xl",children:e.jsx(o,{id:"order-number",name:"order-number",value:r,onChange:t=>a(t.target.value),placeholder:"SO-28417"})})},parameters:{controls:{disable:!0}}},m={render:()=>e.jsxs(L,{w:"full",h:"full",position:"relative",placeContent:"center",alignItems:"center",justifyItems:"center",gap:"16",children:[e.jsxs(n,{label:"Order Number",labelFor:"order-number",helpText:"Used for matching external invoices.",size:{base:"xl",xs:"lg",sm:"md",md:"sm"},maxW:"md",children:[e.jsx(o,{name:"pizza",placeholder:"Fave pizza",before:e.jsx(w,{name:"question-mark"})}),e.jsx(U,{name:"description",placeholder:"Describe how pizza makes you feel..."}),e.jsx(A,{iconAfter:"send",children:"Button, yo"})]}),e.jsxs(D,{textAlign:"center",textStyle:"mono.sm",_after:{display:"inline",content:{base:'"xl"',xs:'"lg"',sm:'"md"',md:'"sm"'},color:"text.bold",fontWeight:"bold"},children:["Size:"," "]}),e.jsx(O,{})]}),parameters:{controls:{disable:!0}}},c={name:"Ex: Validation Error",render:function(){const[r,a]=p.useState(""),t=r.length>0&&!r.includes("@");return e.jsx(n,{label:"Notification Email",labelFor:"notification-email",required:!0,error:t,errorText:"Enter a valid email address.",children:e.jsx(o,{id:"notification-email",name:"notification-email",value:r,onChange:R=>a(R.target.value),placeholder:"team@company.com",type:"email"})})},parameters:{controls:{disable:!0}}},d={name:"Ex: Validation Success",render:function(){return e.jsx(n,{label:"Enter your domain",labelFor:"domain",success:!0,successText:"This domain is available",w:"xs",size:"lg",children:e.jsx(o,{id:"domain",name:"domain",placeholder:"name.com",defaultValue:"shauns-pizza-company.com",before:e.jsx(w,{name:"check",fill:"icon.success"})})})},parameters:{controls:{disable:!0}}},u={name:"Ex: Label + Input Wrapper Composition",render:function(){const[r,a]=p.useState({invoices:!0,alerts:!1});return e.jsx(N,{maxW:"lg",children:e.jsxs(n,{label:"Email Preferences",labelFor:"invoices",helpText:"Choose which events should trigger notifications.",children:[e.jsx(x,{id:"invoices",name:"invoices",checked:r.invoices,onChange:t=>a({...r,invoices:t.target.checked}),children:"Invoice sent notifications"}),e.jsx(x,{id:"alerts",name:"alerts",checked:r.alerts,onChange:t=>a({...r,alerts:t.target.checked}),children:"Critical system alerts"})]})})},parameters:{controls:{disable:!0}}};var h,b,g;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: function DefaultRender() {
    const [value, setValue] = useState('');
    return <FormField label="Company Name" labelFor="company-name" helpText="Use your legal business name for billing.">
        <TextInput id="company-name" name="company-name" value={value} onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} placeholder="Acme Manufacturing" />
      </FormField>;
  }
}`,...(g=(b=s.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var f,F,v;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(v=(F=l.parameters)==null?void 0:F.docs)==null?void 0:v.source}}};var E,y,I;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <Grid w="full" h="full" position="relative" placeContent="center" alignItems="center" justifyItems="center" gap="16">
      <FormField label="Order Number" labelFor="order-number" helpText="Used for matching external invoices." size={{
      base: 'xl',
      xs: 'lg',
      sm: 'md',
      md: 'sm'
    }} maxW="md">
        <TextInput name="pizza" placeholder="Fave pizza" before={<Icon name="question-mark" />} />
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
}`,...(I=(y=m.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};var C,T,S;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(S=(T=c.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var W,j,k;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Ex: Validation Success',
  render: function ExFieldWithSuccessRender() {
    return <FormField label="Enter your domain" labelFor="domain" success={true} successText="This domain is available" w="xs" size="lg">
        <TextInput id="domain" name="domain" placeholder="name.com" defaultValue="shauns-pizza-company.com" before={<Icon name="check" fill="icon.success" />} />
      </FormField>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(k=(j=d.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var z,B,V;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(V=(B=u.parameters)==null?void 0:B.docs)==null?void 0:V.source}}};const he=["Default","InlineLayout","ConditionalBreakpoints","ExFieldWithError","ExFieldWithSuccess","ExWithInputWrappers"];export{m as ConditionalBreakpoints,s as Default,c as ExFieldWithError,d as ExFieldWithSuccess,u as ExWithInputWrappers,l as InlineLayout,he as __namedExportsOrder,xe as default};
