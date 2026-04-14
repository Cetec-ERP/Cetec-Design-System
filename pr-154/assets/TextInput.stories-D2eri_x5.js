import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./index-BKyFwriW.js";import{G as f,V as l,H as K,W as Q}from"./Box-7d6-wXl0.js";import{B as X}from"./BreakpointIndicator-U3vrIdY_.js";import{F as a}from"./FormField-Cxjfyk8r.js";import{T as o}from"./Text-Cm9k3dA6.js";import{T as r}from"./TextInput-DhhujvPk.js";import"./_commonjsHelpers-CqkleIqs.js";import"./mq.hook-BU-2oBAn.js";import"./radii-Ir2x-kmI.js";import"./index-DOpYXeGo.js";import"./colors-CLHggMRt.js";import"./Tag-TEsd4yEi.js";import"./Icon-CdfbFGjj.js";import"./IconConfig-D6qOrJtl.js";import"./Label-Ch2Pf9WZ.js";import"./Tooltip-CjeZ2inR.js";import"./floating-AgLCAi8_.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";const be={title:"Components/TextInput",component:r,args:{name:"text-input"},parameters:{layout:"centered",docs:{description:{component:`TextInput component for single-line text entry.

Features:
- Four sizes (sm, md, lg, xl)
- Optional leading/trailing icons
- Error and disabled states
- Auto-sizing via \`fieldSizing: content\`
- Explicit input type support (text, email, password, search, etc.)
- Pairs with FormField for labels, help text, and error messages`}}},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg","xl"],description:"Input size",table:{defaultValue:{summary:"md"}}},error:{control:"boolean",description:"Error state — sets aria-invalid and error styling"},disabled:{control:"boolean",description:"Disabled state"},autoSize:{control:"boolean",description:"Auto-size width to content",table:{defaultValue:{summary:"false"}}},iconBefore:{control:"select",options:[void 0,"search","user","mail","lock"],description:"Icon name to display before input"},iconAfter:{control:"select",options:[void 0,"check","x","eye","chevron-down"],description:"Icon name to display after input"},type:{control:"select",options:["text","number","email","password","search","tel","url","date","time","datetime-local","month","week"],description:"HTML input type",table:{defaultValue:{summary:"text"}}},placeholder:{control:"text",description:"Placeholder text"},name:{control:"text",description:"Input name attribute"}}},s={render:()=>e.jsxs(f,{columns:3,justifyItems:"center",gap:"20",maxW:"3xl",children:[e.jsx(r,{name:"sm",placeholder:"sm no icon",size:"sm"}),e.jsx(r,{name:"sm",placeholder:"sm iconBefore",size:"sm",iconBefore:"at"}),e.jsx(r,{name:"sm",placeholder:"sm iconAfter",size:"sm",iconAfter:"check"}),e.jsx(r,{name:"md",placeholder:"md no icon",size:"md"}),e.jsx(r,{name:"md",placeholder:"md iconBefore",size:"md",iconBefore:"at"}),e.jsx(r,{name:"md",placeholder:"md iconAfter",size:"md",iconAfter:"check"}),e.jsx(r,{name:"lg",placeholder:"lg no icon",size:"lg"}),e.jsx(r,{name:"lg",placeholder:"lg iconBefore",size:"lg",iconBefore:"at"}),e.jsx(r,{name:"lg",placeholder:"lg iconAfter",size:"lg",iconAfter:"check"}),e.jsx(r,{name:"xl",placeholder:"xl no icon",size:"xl"}),e.jsx(r,{name:"xl",placeholder:"xl iconBefore",size:"xl",iconBefore:"at"}),e.jsx(r,{name:"xl",placeholder:"xl iconAfter",size:"xl",iconAfter:"check"})]}),parameters:{controls:{disable:!0}}},i={render:()=>e.jsxs(f,{w:"full",h:"full",position:"relative",placeContent:"center",alignItems:"center",gap:"16",children:[e.jsx(r,{name:"Conditional Sizes",size:{base:"xl",xs:"lg",sm:"md",md:"sm"},placeholder:"Conditional Sizes",iconBefore:"arrows-left-right"}),e.jsxs(o,{textAlign:"center",textStyle:"mono.sm",_after:{display:"inline",content:{base:'"xl"',xs:'"lg"',sm:'"md"',md:'"sm"'},color:"text.bold",fontWeight:"bold"},children:["Size:"," "]}),e.jsx(X,{position:"fixed",bottom:"16",right:"16"})]}),parameters:{controls:{disable:!0}}},m={render:()=>e.jsxs(f,{gridTemplateColumns:"auto 1fr",columnGap:"12",rowGap:"32",alignItems:"center",children:[e.jsx(o,{textStyle:"mono.md",mr:"16",children:"default"}),e.jsx(r,{name:"default",placeholder:"Default"}),e.jsx(o,{textStyle:"mono.md",mr:"16",children:"disabled"}),e.jsx(r,{name:"disabled",placeholder:"Disabled",disabled:!0}),e.jsx(o,{textStyle:"mono.md",mr:"16",children:"error"}),e.jsx(r,{name:"error",placeholder:"Error",error:!0})]}),parameters:{controls:{disable:!0}}},c={render:()=>e.jsxs(f,{gridTemplateColumns:"auto 1fr",columnGap:"12",rowGap:"32",alignItems:"center",children:[e.jsx(o,{textStyle:"mono.md",mr:"16",children:"iconBefore"}),e.jsxs(l,{gap:"8",alignItems:"flex-start",children:[e.jsx(r,{name:"search",iconBefore:"search",placeholder:"Search..."}),e.jsx(r,{name:"user",iconBefore:"user",placeholder:"Username"}),e.jsx(r,{name:"email",iconBefore:"envelope",placeholder:"Email",type:"email"}),e.jsx(r,{name:"password",iconBefore:"lock",placeholder:"Password",type:"password"})]}),e.jsx(o,{textStyle:"mono.md",mr:"16",children:"iconAfter"}),e.jsxs(l,{gap:"8",alignItems:"flex-start",children:[e.jsx(r,{name:"valid",iconAfter:"check",placeholder:"Validated"}),e.jsxs(K,{children:[e.jsx(r,{name:"clear",iconAfter:"at",placeholder:"Username"}),"cetecerp.com"]})]})]}),parameters:{controls:{disable:!0}}},d={render:()=>e.jsx(l,{gap:"12",alignItems:"flex-start",children:["sm","md","lg","xl"].map(n=>e.jsx(r,{size:n,name:n,iconBefore:"search",placeholder:`Size: ${n}`},n))}),parameters:{controls:{disable:!0}}},p={render:()=>e.jsxs(l,{gap:"12",alignItems:"flex-start",maxW:"3xl",children:[e.jsx(r,{name:"auto-sm",size:"sm",autoSize:!0,placeholder:"Auto size sm"}),e.jsx(r,{name:"auto-md",size:"md",autoSize:!0,placeholder:"Auto size md"}),e.jsx(r,{name:"auto-lg",size:"lg",autoSize:!0,placeholder:"Auto size lg"})]}),parameters:{controls:{disable:!0}}},u={name:"Ex: With FormField",render:()=>e.jsxs(l,{gap:"24",alignItems:"stretch",w:"xs",children:[e.jsx(a,{label:"Full Name",labelFor:"fullName",required:!0,children:e.jsx(r,{name:"fullName",id:"fullName",iconBefore:"user",placeholder:"John Doe"})}),e.jsx(a,{label:"Email",labelFor:"email",helpText:"We'll never share your email.",tooltipText:"For real. We won't share it with anyone",children:e.jsx(r,{name:"email",id:"email",iconBefore:"envelope",placeholder:"john@example.com",type:"email"})}),e.jsx(a,{label:"Username",labelFor:"username",error:!0,errorText:"Username is already taken.",children:e.jsx(r,{name:"username",id:"username",defaultValue:"johndoe",error:!0})}),e.jsx(a,{label:"Company",labelFor:"company",disabled:!0,children:e.jsx(r,{name:"company",id:"company",placeholder:"Cetec ERP",disabled:!0})})]}),parameters:{controls:{disable:!0}}},x={name:"Ex: Inline FormField",render:()=>e.jsxs(l,{gap:"16",alignItems:"stretch",w:"md",children:[e.jsx(a,{layout:"inline",labelFor:"fullName",label:"Full Name",required:!0,children:e.jsx(r,{name:"fullName",id:"fullName",iconBefore:"user",placeholder:"John Doe"})}),e.jsx(a,{layout:"inline",label:"Email",labelFor:"email2",helpText:"We'll never share your email.",tooltipText:"For real. We won't share it with anyone",children:e.jsx(r,{name:"email2",id:"email2",iconBefore:"envelope",placeholder:"john@example.com",type:"email"})}),e.jsx(a,{layout:"inline",label:"Username",labelFor:"username",error:!0,errorText:"Username is already taken.",children:e.jsx(r,{name:"username",id:"username",defaultValue:"johndoe"})}),e.jsx(a,{layout:"inline",label:"Company",labelFor:"company2",disabled:!0,children:e.jsx(r,{name:"company",id:"company2",placeholder:"Cetec ERP",disabled:!0})})]}),parameters:{controls:{disable:!0}}},h={name:"Ex: Search Input",render:()=>e.jsxs(Q,{gap:"12",alignItems:"center",w:"xs",children:[e.jsx(r,{name:"search-sm",size:"sm",iconBefore:"search",placeholder:"Search..."}),e.jsx(r,{name:"search-md",size:"md",iconBefore:"search",placeholder:"Search..."}),e.jsx(r,{name:"search-lg",size:"lg",iconBefore:"search",placeholder:"Search..."}),e.jsx(r,{name:"search-xl",size:"xl",iconBefore:"search",placeholder:"Search..."})]}),parameters:{controls:{disable:!0}}},t={args:{name:"demo",size:"md",type:"text",placeholder:"Type something...",error:!1,disabled:!1,autoSize:!1}};var g,b,I;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Grid columns={3} justifyItems="center" gap="20" maxW="3xl">
      <TextInput name="sm" placeholder="sm no icon" size="sm" />
      <TextInput name="sm" placeholder="sm iconBefore" size="sm" iconBefore="at" />
      <TextInput name="sm" placeholder="sm iconAfter" size="sm" iconAfter="check" />

      <TextInput name="md" placeholder="md no icon" size="md" />
      <TextInput name="md" placeholder="md iconBefore" size="md" iconBefore="at" />
      <TextInput name="md" placeholder="md iconAfter" size="md" iconAfter="check" />

      <TextInput name="lg" placeholder="lg no icon" size="lg" />
      <TextInput name="lg" placeholder="lg iconBefore" size="lg" iconBefore="at" />
      <TextInput name="lg" placeholder="lg iconAfter" size="lg" iconAfter="check" />

      <TextInput name="xl" placeholder="xl no icon" size="xl" />
      <TextInput name="xl" placeholder="xl iconBefore" size="xl" iconBefore="at" />
      <TextInput name="xl" placeholder="xl iconAfter" size="xl" iconAfter="check" />
    </Grid>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(I=(b=s.parameters)==null?void 0:b.docs)==null?void 0:I.source}}};var y,z,F;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Grid w="full" h="full" position="relative" placeContent="center" alignItems="center" gap="16">
      <TextInput name="Conditional Sizes" size={{
      base: 'xl',
      xs: 'lg',
      sm: 'md',
      md: 'sm'
    }} placeholder="Conditional Sizes" iconBefore="arrows-left-right" />
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
      <BreakpointIndicator position="fixed" bottom="16" right="16" />
    </Grid>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(F=(z=i.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var S,j,T;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(T=(j=m.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};var B,k,A;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(A=(k=c.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var w,W,E;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <VStack gap="12" alignItems="flex-start">
      {(['sm', 'md', 'lg', 'xl'] as const).map(size => <TextInput key={size} size={size} name={size} iconBefore="search" placeholder={\`Size: \${size}\`} />)}
    </VStack>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(E=(W=d.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};var V,v,C;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(C=(v=p.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var G,N,U;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(U=(N=u.parameters)==null?void 0:N.docs)==null?void 0:U.source}}};var D,P,H;x.parameters={...x.parameters,docs:{...(D=x.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(H=(P=x.parameters)==null?void 0:P.docs)==null?void 0:H.source}}};var R,q,J;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(J=(q=h.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var _,O,$,L,M;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    name: 'demo',
    size: 'md',
    type: 'text',
    placeholder: 'Type something...',
    error: false,
    disabled: false,
    autoSize: false
  }
}`,...($=(O=t.parameters)==null?void 0:O.docs)==null?void 0:$.source},description:{story:"Interactive playground to test all props",...(M=(L=t.parameters)==null?void 0:L.docs)==null?void 0:M.description}}};const Ie=["Sizes","ConditionalBreakpoints","States","WithIcons","IconSizes","AutoSize","WithFormField","InlineFormField","SearchInput","Interactive"];export{p as AutoSize,i as ConditionalBreakpoints,d as IconSizes,x as InlineFormField,t as Interactive,h as SearchInput,s as Sizes,m as States,u as WithFormField,c as WithIcons,Ie as __namedExportsOrder,be as default};
