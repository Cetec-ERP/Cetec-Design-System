import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./index-BKyFwriW.js";import{V as o,G as $,H as O,W as _}from"./Box-B-dS-qo0.js";import{F as l}from"./FormField-CuT4YOA_.js";import{T as n}from"./Text-BlqN2xhk.js";import{T as r}from"./TextInput-koRHcdcv.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Icon-Dq3Qi2uA.js";import"./Label-C4IxB5qt.js";import"./Tooltip-DAdXVz-o.js";import"./floating-ui.react-BYVwYRsa.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";const ne={title:"Components/TextInput",component:r,args:{name:"text-input"},parameters:{layout:"centered",docs:{description:{component:`TextInput component for single-line text entry.

Features:
- Four sizes (sm, md, lg, xl)
- Optional leading/trailing icons
- Error and disabled states
- Auto-sizing via \`fieldSizing: content\`
- Explicit input type support (text, email, password, search, etc.)
- Pairs with FormField for labels, help text, and error messages`}}},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg","xl"],description:"Input size",table:{defaultValue:{summary:"md"}}},error:{control:"boolean",description:"Error state — sets aria-invalid and error styling"},disabled:{control:"boolean",description:"Disabled state"},autoSize:{control:"boolean",description:"Auto-size width to content",table:{defaultValue:{summary:"false"}}},iconBefore:{control:"select",options:[void 0,"search","user","mail","lock"],description:"Icon name to display before input"},iconAfter:{control:"select",options:[void 0,"check","x","eye","chevron-down"],description:"Icon name to display after input"},type:{control:"select",options:["text","number","email","password","search","tel","url","date","time","datetime-local","month","week"],description:"HTML input type",table:{defaultValue:{summary:"text"}}},placeholder:{control:"text",description:"Placeholder text"},name:{control:"text",description:"Input name attribute"}}},s={render:()=>e.jsx(o,{gap:"12",alignItems:"flex-start",children:["sm","md","lg","xl"].map(a=>e.jsx(r,{size:a,name:a,placeholder:`Size: ${a}`},a))}),parameters:{controls:{disable:!0}}},i={render:()=>e.jsxs($,{gridTemplateColumns:"auto 1fr",columnGap:"12",rowGap:"32",alignItems:"center",children:[e.jsx(n,{textStyle:"mono.md",mr:"16",children:"default"}),e.jsx(r,{name:"default",placeholder:"Default"}),e.jsx(n,{textStyle:"mono.md",mr:"16",children:"disabled"}),e.jsx(r,{name:"disabled",placeholder:"Disabled",disabled:!0}),e.jsx(n,{textStyle:"mono.md",mr:"16",children:"error"}),e.jsx(r,{name:"error",placeholder:"Error",error:!0})]}),parameters:{controls:{disable:!0}}},m={render:()=>e.jsxs($,{gridTemplateColumns:"auto 1fr",columnGap:"12",rowGap:"32",alignItems:"center",children:[e.jsx(n,{textStyle:"mono.md",mr:"16",children:"iconBefore"}),e.jsxs(o,{gap:"8",alignItems:"flex-start",children:[e.jsx(r,{name:"search",iconBefore:"search",placeholder:"Search..."}),e.jsx(r,{name:"user",iconBefore:"user",placeholder:"Username"}),e.jsx(r,{name:"email",iconBefore:"envelope",placeholder:"Email",type:"email"}),e.jsx(r,{name:"password",iconBefore:"lock",placeholder:"Password",type:"password"})]}),e.jsx(n,{textStyle:"mono.md",mr:"16",children:"iconAfter"}),e.jsxs(o,{gap:"8",alignItems:"flex-start",children:[e.jsx(r,{name:"valid",iconAfter:"check",placeholder:"Validated"}),e.jsxs(O,{children:[e.jsx(r,{name:"clear",iconAfter:"at",placeholder:"Username"}),"cetecerp.com"]})]})]}),parameters:{controls:{disable:!0}}},c={render:()=>e.jsx(o,{gap:"12",alignItems:"flex-start",children:["sm","md","lg","xl"].map(a=>e.jsx(r,{size:a,name:a,iconBefore:"search",placeholder:`Size: ${a}`},a))}),parameters:{controls:{disable:!0}}},d={render:()=>e.jsxs(o,{gap:"12",alignItems:"flex-start",maxW:"3xl",children:[e.jsx(r,{name:"auto-sm",size:"sm",autoSize:!0,placeholder:"Auto size sm"}),e.jsx(r,{name:"auto-md",size:"md",autoSize:!0,placeholder:"Auto size md"}),e.jsx(r,{name:"auto-lg",size:"lg",autoSize:!0,placeholder:"Auto size lg"})]}),parameters:{controls:{disable:!0}}},p={name:"Ex: With FormField",render:()=>e.jsxs(o,{gap:"24",alignItems:"stretch",w:"xs",children:[e.jsx(l,{label:"Full Name",labelFor:"fullName",required:!0,children:e.jsx(r,{name:"fullName",id:"fullName",iconBefore:"user",placeholder:"John Doe"})}),e.jsx(l,{label:"Email",labelFor:"email",helpText:"We'll never share your email.",tooltipText:"For real. We won't share it with anyone",children:e.jsx(r,{name:"email",id:"email",iconBefore:"envelope",placeholder:"john@example.com",type:"email"})}),e.jsx(l,{label:"Username",labelFor:"username",error:!0,errorText:"Username is already taken.",children:e.jsx(r,{name:"username",id:"username",defaultValue:"johndoe",error:!0})}),e.jsx(l,{label:"Company",labelFor:"company",disabled:!0,children:e.jsx(r,{name:"company",id:"company",placeholder:"Cetec ERP",disabled:!0})})]}),parameters:{controls:{disable:!0}}},u={name:"Ex: Inline FormField",render:()=>e.jsxs(o,{gap:"16",alignItems:"stretch",w:"md",children:[e.jsx(l,{layout:"inline",labelFor:"fullName",label:"Full Name",required:!0,children:e.jsx(r,{name:"fullName",id:"fullName",iconBefore:"user",placeholder:"John Doe"})}),e.jsx(l,{layout:"inline",label:"Email",labelFor:"email2",helpText:"We'll never share your email.",tooltipText:"For real. We won't share it with anyone",children:e.jsx(r,{name:"email2",id:"email2",iconBefore:"envelope",placeholder:"john@example.com",type:"email"})}),e.jsx(l,{layout:"inline",label:"Username",labelFor:"username",error:!0,errorText:"Username is already taken.",children:e.jsx(r,{name:"username",id:"username",defaultValue:"johndoe"})}),e.jsx(l,{layout:"inline",label:"Company",labelFor:"company2",disabled:!0,children:e.jsx(r,{name:"company",id:"company2",placeholder:"Cetec ERP",disabled:!0})})]}),parameters:{controls:{disable:!0}}},x={name:"Ex: Search Input",render:()=>e.jsxs(_,{gap:"12",alignItems:"center",w:"xs",children:[e.jsx(r,{name:"search-sm",size:"sm",iconBefore:"search",placeholder:"Search..."}),e.jsx(r,{name:"search-md",size:"md",iconBefore:"search",placeholder:"Search..."}),e.jsx(r,{name:"search-lg",size:"lg",iconBefore:"search",placeholder:"Search..."}),e.jsx(r,{name:"search-xl",size:"xl",iconBefore:"search",placeholder:"Search..."})]}),parameters:{controls:{disable:!0}}},t={args:{name:"demo",size:"md",type:"text",placeholder:"Type something...",error:!1,disabled:!1,autoSize:!1}};var h,f,g;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <VStack gap="12" alignItems="flex-start">
      {(['sm', 'md', 'lg', 'xl'] as const).map(size => <TextInput key={size} size={size} name={size} placeholder={\`Size: \${size}\`} />)}
    </VStack>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(g=(f=s.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var b,F,y;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <Grid gridTemplateColumns="auto 1fr" columnGap="12" rowGap="32" alignItems="center">
      <Text textStyle="mono.md" mr="16">
        default
      </Text>
      <TextInput name="default" placeholder="Default" />
      <Text textStyle="mono.md" mr="16">
        disabled
      </Text>
      <TextInput name="disabled" placeholder="Disabled" disabled />
      <Text textStyle="mono.md" mr="16">
        error
      </Text>
      <TextInput name="error" placeholder="Error" error />
    </Grid>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(y=(F=i.parameters)==null?void 0:F.docs)==null?void 0:y.source}}};var S,I,T;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <Grid gridTemplateColumns="auto 1fr" columnGap="12" rowGap="32" alignItems="center">
      <Text textStyle="mono.md" mr="16">
        iconBefore
      </Text>
      <VStack gap="8" alignItems="flex-start">
        <TextInput name="search" iconBefore="search" placeholder="Search..." />
        <TextInput name="user" iconBefore="user" placeholder="Username" />
        <TextInput name="email" iconBefore="envelope" placeholder="Email" type="email" />
        <TextInput name="password" iconBefore="lock" placeholder="Password" type="password" />
      </VStack>
      <Text textStyle="mono.md" mr="16">
        iconAfter
      </Text>
      <VStack gap="8" alignItems="flex-start">
        <TextInput name="valid" iconAfter="check" placeholder="Validated" />
        <HStack>
          <TextInput name="clear" iconAfter="at" placeholder="Username" />
          cetecerp.com
        </HStack>
      </VStack>
    </Grid>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(T=(I=m.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var j,z,k;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <VStack gap="12" alignItems="flex-start">
      {(['sm', 'md', 'lg', 'xl'] as const).map(size => <TextInput key={size} size={size} name={size} iconBefore="search" placeholder={\`Size: \${size}\`} />)}
    </VStack>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(k=(z=c.parameters)==null?void 0:z.docs)==null?void 0:k.source}}};var w,B,V;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <VStack gap="12" alignItems="flex-start" maxW="3xl">
      <TextInput name="auto-sm" size="sm" autoSize placeholder="Auto size sm" />
      <TextInput name="auto-md" size="md" autoSize placeholder="Auto size md" />
      <TextInput name="auto-lg" size="lg" autoSize placeholder="Auto size lg" />
    </VStack>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(V=(B=d.parameters)==null?void 0:B.docs)==null?void 0:V.source}}};var E,v,W;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Ex: With FormField',
  render: () => <VStack gap="24" alignItems="stretch" w="xs">
      <FormField label="Full Name" labelFor="fullName" required>
        <TextInput name="fullName" id="fullName" iconBefore="user" placeholder="John Doe" />
      </FormField>
      <FormField label="Email" labelFor="email" helpText="We'll never share your email." tooltipText="For real. We won't share it with anyone">
        <TextInput name="email" id="email" iconBefore="envelope" placeholder="john@example.com" type="email" />
      </FormField>
      <FormField label="Username" labelFor="username" error errorText="Username is already taken.">
        <TextInput name="username" id="username" defaultValue="johndoe" error />
      </FormField>
      <FormField label="Company" labelFor="company" disabled>
        <TextInput name="company" id="company" placeholder="Cetec ERP" disabled />
      </FormField>
    </VStack>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(W=(v=p.parameters)==null?void 0:v.docs)==null?void 0:W.source}}};var A,N,G;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Ex: Inline FormField',
  render: () => <VStack gap="16" alignItems="stretch" w="md">
      <FormField layout="inline" labelFor="fullName" label="Full Name" required>
        <TextInput name="fullName" id="fullName" iconBefore="user" placeholder="John Doe" />
      </FormField>
      <FormField layout="inline" label="Email" labelFor="email2" helpText="We'll never share your email." tooltipText="For real. We won't share it with anyone">
        <TextInput name="email2" id="email2" iconBefore="envelope" placeholder="john@example.com" type="email" />
      </FormField>
      <FormField layout="inline" label="Username" labelFor="username" error errorText="Username is already taken.">
        <TextInput name="username" id="username" defaultValue="johndoe" />
      </FormField>
      <FormField layout="inline" label="Company" labelFor="company2" disabled>
        <TextInput name="company" id="company2" placeholder="Cetec ERP" disabled />
      </FormField>
    </VStack>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(G=(N=u.parameters)==null?void 0:N.docs)==null?void 0:G.source}}};var C,U,D;x.parameters={...x.parameters,docs:{...(C=x.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Ex: Search Input',
  render: () => <Wrap gap="12" alignItems="center" w="xs">
      <TextInput name="search-sm" size="sm" iconBefore="search" placeholder="Search..." />
      <TextInput name="search-md" size="md" iconBefore="search" placeholder="Search..." />
      <TextInput name="search-lg" size="lg" iconBefore="search" placeholder="Search..." />
      <TextInput name="search-xl" size="xl" iconBefore="search" placeholder="Search..." />
    </Wrap>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(D=(U=x.parameters)==null?void 0:U.docs)==null?void 0:D.source}}};var P,H,R,q,J;t.parameters={...t.parameters,docs:{...(P=t.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    name: 'demo',
    size: 'md',
    type: 'text',
    placeholder: 'Type something...',
    error: false,
    disabled: false,
    autoSize: false
  }
}`,...(R=(H=t.parameters)==null?void 0:H.docs)==null?void 0:R.source},description:{story:"Interactive playground to test all props",...(J=(q=t.parameters)==null?void 0:q.docs)==null?void 0:J.description}}};const se=["Sizes","States","WithIcons","IconSizes","AutoSize","WithFormField","InlineFormField","SearchInput","Interactive"];export{d as AutoSize,c as IconSizes,u as InlineFormField,t as Interactive,x as SearchInput,s as Sizes,i as States,p as WithFormField,m as WithIcons,se as __namedExportsOrder,ne as default};
