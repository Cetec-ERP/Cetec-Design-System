import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./index-BKyFwriW.js";import{B as W}from"./Box-DKmSdfHE.js";import{C as d}from"./CheckboxInput-DpOEKrFw.js";import{T as u}from"./TextInput-C_vJmpV7.js";import{F as n}from"./FormField-W0SY6Xza.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Checkbox-C_pvbuEu.js";import"./Icon-D93YU_Y7.js";import"./Label-DxRmGjyW.js";import"./Text-BrVA7iWX.js";import"./Tooltip-i6aXU8k8.js";import"./floating-ui.react-B-Gez0OS.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";const A={title:"Components/FormField",component:n,tags:["autodocs"],parameters:{layout:"centered"},args:{label:"Company Name",labelFor:"company-name",children:null}},o={render:function(){const[e,a]=c.useState("");return r.jsx(n,{label:"Company Name",labelFor:"company-name",helpText:"Use your legal business name for billing.",children:r.jsx(u,{id:"company-name",name:"company-name",value:e,onChange:t=>a(t.target.value),placeholder:"Acme Manufacturing"})})}},i={render:function(){const[e,a]=c.useState("");return r.jsx(n,{layout:"inline",label:"Order Number",labelFor:"order-number",helpText:"Used for matching external invoices.",maxW:"xl",children:r.jsx(u,{id:"order-number",name:"order-number",value:e,onChange:t=>a(t.target.value),placeholder:"SO-28417"})})},parameters:{controls:{disable:!0}}},s={name:"Ex: Validation Error",render:function(){const[e,a]=c.useState(""),t=e.length>0&&!e.includes("@");return r.jsx(n,{label:"Notification Email",labelFor:"notification-email",required:!0,error:t,errorText:"Enter a valid email address.",children:r.jsx(u,{id:"notification-email",name:"notification-email",value:e,onChange:S=>a(S.target.value),placeholder:"team@company.com",type:"email"})})},parameters:{controls:{disable:!0}}},l={name:"Ex: Label + Input Wrapper Composition",render:function(){const[e,a]=c.useState({invoices:!0,alerts:!1});return r.jsx(W,{maxW:"lg",children:r.jsxs(n,{label:"Email Preferences",labelFor:"invoices",helpText:"Choose which events should trigger notifications.",children:[r.jsx(d,{id:"invoices",name:"invoices",checked:e.invoices,onChange:t=>a({...e,invoices:t.target.checked}),children:"Invoice sent notifications"}),r.jsx(d,{id:"alerts",name:"alerts",checked:e.alerts,onChange:t=>a({...e,alerts:t.target.checked}),children:"Critical system alerts"})]})})},parameters:{controls:{disable:!0}}};var p,h,g;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: function DefaultRender() {
    const [value, setValue] = useState('');
    return <FormField label="Company Name" labelFor="company-name" helpText="Use your legal business name for billing.">
        <TextInput id="company-name" name="company-name" value={value} onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} placeholder="Acme Manufacturing" />
      </FormField>;
  }
}`,...(g=(h=o.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var x,b,f;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(f=(b=i.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var v,E,F;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(F=(E=s.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var C,y,I;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(I=(y=l.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};const P=["Default","InlineLayout","ExFieldWithError","ExWithInputWrappers"];export{o as Default,s as ExFieldWithError,l as ExWithInputWrappers,i as InlineLayout,P as __namedExportsOrder,A as default};
