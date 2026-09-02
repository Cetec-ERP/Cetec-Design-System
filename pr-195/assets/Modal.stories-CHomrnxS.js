import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as u}from"./index-BKyFwriW.js";import{V as M}from"./dsComponent-BYUIyF_R.js";import{B as s}from"./Button-Bf2hC955.js";import{F as l}from"./FormField-CfYzh6f2.js";import{T as i}from"./TextInput-DUmAT36A.js";import{M as m}from"./Modal-DrzXvm5p.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Icon-Dq9uSEeo.js";import"./IconConfig-CikP2Rer.js";import"./Spinner-B6GigztE.js";import"./FieldContext-D6URyQos.js";import"./Label-BPlheTIq.js";import"./Text-DTL6959x.js";import"./Tooltip--hlfaos6.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";import"./IconButton-BcWUHMy5.js";import"./ModalHeader-BPdfisZi.js";import"./FloatingLayerContext-BryH8O9I.js";import"./mq.hook-xG5a6_yz.js";import"./breakpoints-DU_5_Zhy.js";import"./index-DQmpdOPX.js";import"./Heading-CUAyQAEq.js";const ne={title:"Components/Modal",component:m,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Pre-built form modal with TanStack Form wiring and default footer actions. Use `ModalWrapper` when you need full compositional control."}}}},c={name:"Default",render:function(){const[o,n]=u.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(s,{onClick:()=>n(!0),children:"Create process"}),e.jsx(m,{open:o,onOpenChange:n,title:"Create Process",submitLabel:"Create",size:"sm",defaultValues:{name:""},onSubmit:async({close:a})=>{a()},children:a=>e.jsx(a.Field,{name:"name",children:t=>e.jsx(l,{label:"Process Name",labelFor:"processName",children:e.jsx(i,{id:"processName",name:"processName",value:t.state.value,onChange:r=>t.handleChange(r.target.value),autoFocus:!0})})})})]})}},p={name:"Validation Errors",render:function(){const[o,n]=u.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(s,{onClick:()=>n(!0),children:"Edit profile"}),e.jsx(m,{open:o,onOpenChange:n,title:"Edit Profile",submitLabel:"Save",size:"sm",defaultValues:{name:"",email:""},onSubmit:async({close:a})=>{a()},children:a=>e.jsxs(M,{gap:"12",alignItems:"stretch",children:[e.jsx(a.Field,{name:"name",validators:{onChange:({value:t})=>t.trim()?void 0:"Name is required"},children:t=>e.jsx(l,{label:"Full Name",labelFor:"profile-name",required:!0,invalid:!t.state.meta.isValid,errorText:t.state.meta.errors.join(", "),children:e.jsx(i,{id:"profile-name",name:"name",value:t.state.value,onChange:r=>t.handleChange(r.target.value)})})}),e.jsx(a.Field,{name:"email",validators:{onChange:({value:t})=>t.includes("@")?void 0:"Enter a valid email"},children:t=>e.jsx(l,{label:"Email",labelFor:"profile-email",required:!0,invalid:!t.state.meta.isValid,errorText:t.state.meta.errors.join(", "),children:e.jsx(i,{id:"profile-email",name:"email",type:"email",value:t.state.value,onChange:r=>t.handleChange(r.target.value)})})})]})})]})}},f={name:"Async Submit",render:function(){const[o,n]=u.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(s,{onClick:()=>n(!0),children:"Create project"}),e.jsx(m,{open:o,onOpenChange:n,title:"Create Project",submitLabel:"Create",size:"sm",defaultValues:{name:""},onSubmit:async({close:a})=>{await new Promise(t=>setTimeout(t,1500)),a()},children:a=>e.jsx(a.Field,{name:"name",children:t=>e.jsx(l,{label:"Project Name",labelFor:"projectName",children:e.jsx(i,{id:"projectName",name:"projectName",value:t.state.value,onChange:r=>t.handleChange(r.target.value)})})})})]})}},h={name:"Custom Footer",parameters:{docs:{description:{story:"Use the `footer` prop for non-standard action layouts. Submit wiring is consumer-owned; prefer `ModalWrapper` when the footer must call `form.handleSubmit()`."}}},render:function(){const[o,n]=u.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(s,{onClick:()=>n(!0),children:"Batch close"}),e.jsx(m,{open:o,onOpenChange:n,title:"Close Selected Quotes",defaultValues:{resolution:""},onSubmit:async({close:a})=>{a()},footer:e.jsxs(e.Fragment,{children:[e.jsx(s,{type:"button",variant:"ghost",onClick:()=>n(!1),children:"Cancel"}),e.jsx(s,{type:"button",variant:"primary",onClick:()=>n(!1),children:"Close Lines"})]}),children:()=>e.jsx(l,{label:"Resolution",labelFor:"resolution",children:e.jsx(i,{id:"resolution",name:"resolution"})})})]})}},C={name:"Ex: Create Process",render:function(){const[o,n]=u.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(s,{onClick:()=>n(!0),children:"Create New Process"}),e.jsx(m,{open:o,onOpenChange:n,title:"Create New Process",submitLabel:"Create",size:"sm",defaultValues:{name:""},onSubmit:async({value:a,close:t})=>{await new Promise(r=>setTimeout(r,800)),window.alert(`Created process: ${a.name}`),t()},children:a=>e.jsx(a.Field,{name:"name",validators:{onChange:({value:t})=>t.trim()?void 0:"Process name is required"},children:t=>e.jsx(l,{label:"Process Name",labelFor:"processName",required:!0,invalid:!t.state.meta.isValid,errorText:t.state.meta.errors.join(", "),children:e.jsx(i,{id:"processName",name:"processName",value:t.state.value,onChange:r=>t.handleChange(r.target.value),autoFocus:!0})})})})]})}};var v,F,g;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Default',
  render: function DefaultRender() {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>Create process</Button>
        <Modal open={open} onOpenChange={setOpen} title="Create Process" submitLabel="Create" size="sm" defaultValues={{
        name: ''
      }} onSubmit={async ({
        close
      }) => {
        close();
      }}>
          {form => <form.Field name="name">
              {field => <FormField label="Process Name" labelFor="processName">
                  <TextInput id="processName" name="processName" value={field.state.value} onChange={(event: ChangeEvent<HTMLInputElement>) => field.handleChange(event.target.value)} autoFocus />
                </FormField>}
            </form.Field>}
        </Modal>
      </>;
  }
}`,...(g=(F=c.parameters)==null?void 0:F.docs)==null?void 0:g.source}}};var b,x,j;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Validation Errors',
  render: function ValidationErrorsRender() {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>Edit profile</Button>
        <Modal open={open} onOpenChange={setOpen} title="Edit Profile" submitLabel="Save" size="sm" defaultValues={{
        name: '',
        email: ''
      }} onSubmit={async ({
        close
      }) => {
        close();
      }}>
          {form => <VStack gap="12" alignItems="stretch">
              <form.Field name="name" validators={{
            onChange: ({
              value
            }) => !value.trim() ? 'Name is required' : undefined
          }}>
                {field => <FormField label="Full Name" labelFor="profile-name" required invalid={!field.state.meta.isValid} errorText={field.state.meta.errors.join(', ')}>
                    <TextInput id="profile-name" name="name" value={field.state.value} onChange={(event: ChangeEvent<HTMLInputElement>) => field.handleChange(event.target.value)} />
                  </FormField>}
              </form.Field>
              <form.Field name="email" validators={{
            onChange: ({
              value
            }) => !value.includes('@') ? 'Enter a valid email' : undefined
          }}>
                {field => <FormField label="Email" labelFor="profile-email" required invalid={!field.state.meta.isValid} errorText={field.state.meta.errors.join(', ')}>
                    <TextInput id="profile-email" name="email" type="email" value={field.state.value} onChange={(event: ChangeEvent<HTMLInputElement>) => field.handleChange(event.target.value)} />
                  </FormField>}
              </form.Field>
            </VStack>}
        </Modal>
      </>;
  }
}`,...(j=(x=p.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var S,E,O;f.parameters={...f.parameters,docs:{...(S=f.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Async Submit',
  render: function AsyncSubmitRender() {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>Create project</Button>
        <Modal open={open} onOpenChange={setOpen} title="Create Project" submitLabel="Create" size="sm" defaultValues={{
        name: ''
      }} onSubmit={async ({
        close
      }) => {
        await new Promise(resolve => setTimeout(resolve, 1500));
        close();
      }}>
          {form => <form.Field name="name">
              {field => <FormField label="Project Name" labelFor="projectName">
                  <TextInput id="projectName" name="projectName" value={field.state.value} onChange={(event: ChangeEvent<HTMLInputElement>) => field.handleChange(event.target.value)} />
                </FormField>}
            </form.Field>}
        </Modal>
      </>;
  }
}`,...(O=(E=f.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var N,y,P;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Custom Footer',
  parameters: {
    docs: {
      description: {
        story: 'Use the \`footer\` prop for non-standard action layouts. Submit wiring is consumer-owned; prefer \`ModalWrapper\` when the footer must call \`form.handleSubmit()\`.'
      }
    }
  },
  render: function CustomFooterRender() {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>Batch close</Button>
        <Modal open={open} onOpenChange={setOpen} title="Close Selected Quotes" defaultValues={{
        resolution: ''
      }} onSubmit={async ({
        close
      }) => {
        close();
      }} footer={<>
              <Button type="button" variant="ghost" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button type="button" variant="primary" onClick={() => setOpen(false)}>
                Close Lines
              </Button>
            </>}>
          {() => <FormField label="Resolution" labelFor="resolution">
              <TextInput id="resolution" name="resolution" />
            </FormField>}
        </Modal>
      </>;
  }
}`,...(P=(y=h.parameters)==null?void 0:y.docs)==null?void 0:P.source}}};var V,w,T;C.parameters={...C.parameters,docs:{...(V=C.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Ex: Create Process',
  render: function ExCreateProcessRender() {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>Create New Process</Button>
        <Modal open={open} onOpenChange={setOpen} title="Create New Process" submitLabel="Create" size="sm" defaultValues={{
        name: ''
      }} onSubmit={async ({
        value,
        close
      }) => {
        await new Promise(resolve => setTimeout(resolve, 800));
        window.alert(\`Created process: \${value.name}\`);
        close();
      }}>
          {form => <form.Field name="name" validators={{
          onChange: ({
            value
          }) => !value.trim() ? 'Process name is required' : undefined
        }}>
              {field => <FormField label="Process Name" labelFor="processName" required invalid={!field.state.meta.isValid} errorText={field.state.meta.errors.join(', ')}>
                  <TextInput id="processName" name="processName" value={field.state.value} onChange={(event: ChangeEvent<HTMLInputElement>) => field.handleChange(event.target.value)} autoFocus />
                </FormField>}
            </form.Field>}
        </Modal>
      </>;
  }
}`,...(T=(w=C.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};const re=["Default","ValidationErrors","AsyncSubmit","CustomFooter","ExCreateProcess"];export{f as AsyncSubmit,h as CustomFooter,c as Default,C as ExCreateProcess,p as ValidationErrors,re as __namedExportsOrder,ne as default};
