import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{w as me,e as c}from"./index-DPYJpPba.js";import"./index-BKyFwriW.js";import{G as m,V as t,H as ce,W as de}from"./dsComponent-BI5u6_Sr.js";import{B as pe}from"./Badge-obm7xuOB.js";import{B as ue}from"./BreakpointIndicator-DR2TSkyu.js";import{B as xe}from"./Button-BrpNE6z-.js";import{F as r}from"./FormField-CMcsFCH5.js";import{I as n}from"./Icon-BUNAM-n4.js";import"./IconConfig-BcPY009W.js";import{I as i}from"./IconButton-m3onlR29.js";import{K as he}from"./Kbd-C3E0PSV-.js";import{S as fe}from"./Spinner-D7h7I7L2.js";import{T as o}from"./Text-BPA4Owys.js";import{T as a}from"./TextInput-zDBCFhpR.js";import"./_commonjsHelpers-CqkleIqs.js";import"./mq.hook-xG5a6_yz.js";import"./breakpoints-DU_5_Zhy.js";import"./index-DQmpdOPX.js";import"./Tag-Dz_5O93B.js";import"./FieldContext-D6URyQos.js";import"./Label-BdiUb_YI.js";import"./Tooltip-Cjin3CQC.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";const Oe={title:"Components/TextInput",component:a,args:{name:"text-input"},parameters:{layout:"centered",docs:{description:{component:`TextInput component for single-line text entry.

Features:
- Four sizes (sm, md, lg, xl)
- Optional \`before\` / \`after\` slots, with icon aliases for shorthand
- Error and disabled states
- Auto-sizing via \`fieldSizing: content\`
- Explicit input type support (text, email, password, search, etc.)
- Pairs with FormField for labels, help text, and error messages`}}},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg","xl"],description:"Input size",table:{defaultValue:{summary:"md"}}},error:{control:"boolean",description:"Error state — sets aria-invalid and error styling"},disabled:{control:"boolean",description:"Disabled state"},autoSize:{control:"boolean",description:"Auto-size width to content",table:{defaultValue:{summary:"false"}}},iconBefore:{control:"select",options:[void 0,"search","user","mail","lock"],description:"Legacy shorthand icon name for before slot"},iconAfter:{control:"select",options:[void 0,"check","x","eye","chevron-down"],description:"Legacy shorthand icon name for after slot"},before:{control:!1,description:"Preferred slot for content before the input"},after:{control:!1,description:"Preferred slot for content after the input"},type:{control:"select",options:["text","number","email","password","search","tel","url","date","time","datetime-local","month","week"],description:"HTML input type",table:{defaultValue:{summary:"text"}}},placeholder:{control:"text",description:"Placeholder text"},name:{control:"text",description:"Input name attribute"}}},d={render:()=>e.jsxs(m,{columns:3,justifyItems:"center",gap:"20",maxW:"3xl",children:[e.jsx(a,{name:"sm",placeholder:"sm no icon",size:"sm"}),e.jsx(a,{name:"sm",placeholder:"sm iconBefore",size:"sm",iconBefore:"at"}),e.jsx(a,{name:"sm",placeholder:"sm iconAfter",size:"sm",iconAfter:"check"}),e.jsx(a,{name:"md",placeholder:"md no icon",size:"md"}),e.jsx(a,{name:"md",placeholder:"md iconBefore",size:"md",iconBefore:"at"}),e.jsx(a,{name:"md",placeholder:"md iconAfter",size:"md",iconAfter:"check"}),e.jsx(a,{name:"lg",placeholder:"lg no icon",size:"lg"}),e.jsx(a,{name:"lg",placeholder:"lg iconBefore",size:"lg",iconBefore:"at"}),e.jsx(a,{name:"lg",placeholder:"lg iconAfter",size:"lg",iconAfter:"check"}),e.jsx(a,{name:"xl",placeholder:"xl no icon",size:"xl"}),e.jsx(a,{name:"xl",placeholder:"xl iconBefore",size:"xl",iconBefore:"at"}),e.jsx(a,{name:"xl",placeholder:"xl iconAfter",size:"xl",iconAfter:"check"})]}),parameters:{controls:{disable:!0}}},p={render:()=>e.jsxs(m,{w:"full",h:"full",position:"relative",placeContent:"center",alignItems:"center",justifyItems:"center",gap:"16",children:[e.jsx(a,{name:"Conditional Sizes",size:{base:"xl",xs:"lg",sm:"md",md:"sm"},placeholder:"Conditional Sizes",iconBefore:"arrows-left-right"}),e.jsx(a,{name:"slot-button",size:{base:"xl",xs:"lg",sm:"md",md:"sm"},after:e.jsx(i,{iconName:"eye",altText:"eye"}),placeholder:"Enter password"}),e.jsx(a,{name:"slot-button",size:{base:"xl",xs:"lg",sm:"md",md:"sm"},after:e.jsx(i,{variant:"ghost",iconName:"eye",altText:"eye"}),placeholder:"Enter password"}),e.jsx(a,{name:"slot-button",size:{base:"xl",xs:"lg",sm:"md",md:"sm"},after:e.jsx(i,{variant:"hollow",iconName:"eye",altText:"eye"}),placeholder:"Enter password"}),e.jsx(a,{name:"slot-button",size:{base:"xl",xs:"lg",sm:"md",md:"sm"},after:e.jsx(i,{variant:"primary",iconName:"eye",altText:"eye"}),placeholder:"Enter password"}),e.jsx(a,{name:"slot-button",size:{base:"xl",xs:"lg",sm:"md",md:"sm"},before:e.jsx(fe,{}),after:e.jsx(xe,{children:"Submit"}),placeholder:"Enter username",defaultValue:"tom",disabled:!0}),e.jsxs(o,{textAlign:"center",textStyle:"mono.sm",_after:{display:"inline",content:{base:'"xl"',xs:'"lg"',sm:'"md"',md:'"sm"'},color:"text.bold",fontWeight:"bold"},children:["Size:"," "]}),e.jsx(ue,{})]}),parameters:{controls:{disable:!0}}},u={render:()=>e.jsxs(m,{gridTemplateColumns:"auto 1fr",columnGap:"12",rowGap:"32",alignItems:"center",children:[e.jsx(o,{textStyle:"mono.md",mr:"16",children:"default"}),e.jsx(a,{name:"default",placeholder:"Default"}),e.jsx(o,{textStyle:"mono.md",mr:"16",children:"disabled"}),e.jsx(a,{name:"disabled",placeholder:"Disabled",disabled:!0}),e.jsx(o,{textStyle:"mono.md",mr:"16",children:"error"}),e.jsx(a,{name:"error",placeholder:"Error",error:!0})]}),parameters:{controls:{disable:!0}}},x={render:()=>e.jsxs(m,{gridTemplateColumns:"auto 1fr",columnGap:"12",rowGap:"32",alignItems:"center",children:[e.jsx(o,{textStyle:"mono.md",mr:"16",children:"iconBefore"}),e.jsxs(t,{gap:"8",alignItems:"flex-start",children:[e.jsx(a,{name:"search",iconBefore:"search",placeholder:"Search..."}),e.jsx(a,{name:"user",iconBefore:"user",placeholder:"Username"}),e.jsx(a,{name:"email",iconBefore:"envelope",placeholder:"Email",type:"email"}),e.jsx(a,{name:"password",iconBefore:"lock",placeholder:"Password",type:"password"})]}),e.jsx(o,{textStyle:"mono.md",mr:"16",children:"iconAfter"}),e.jsxs(t,{gap:"8",alignItems:"flex-start",children:[e.jsx(a,{name:"valid",iconAfter:"check",placeholder:"Validated"}),e.jsxs(ce,{children:[e.jsx(a,{name:"clear",iconAfter:"at",placeholder:"Username"}),"cetecerp.com"]})]})]}),parameters:{controls:{disable:!0}}},h={render:()=>e.jsxs(m,{gridTemplateColumns:"auto 1fr",columnGap:"12",rowGap:"32",alignItems:"center",children:[e.jsx(o,{textStyle:"mono.md",mr:"16",children:"before / after"}),e.jsxs(t,{gap:"8",alignItems:"flex-start",children:[e.jsx(a,{name:"slot-search",before:e.jsx(n,{name:"search"}),after:e.jsx(he,{keys:["⌘","K"]}),placeholder:"Search"}),e.jsx(a,{name:"slot-email",before:e.jsx(n,{name:"at"}),placeholder:"Email"}),e.jsx(a,{name:"slot-check",after:e.jsx(n,{name:"check"}),placeholder:"Validated"}),e.jsx(a,{name:"slot-badge",after:e.jsx(pe,{count:2,variant:"warning"}),placeholder:"Needs review"}),e.jsx(a,{name:"slot-button",after:e.jsx(i,{variant:"ghost",iconName:"eye",altText:"eye"}),placeholder:"Enter password"})]}),e.jsx(o,{textStyle:"mono.md",mr:"16",children:"aliases"}),e.jsxs(t,{gap:"8",alignItems:"flex-start",children:[e.jsx(a,{name:"alias-before",iconBefore:"search",placeholder:"Search"}),e.jsx(a,{name:"alias-after",iconAfter:"check",placeholder:"Done"})]})]}),parameters:{controls:{disable:!0}}},f={render:()=>e.jsx(t,{gap:"12",alignItems:"flex-start",children:["sm","md","lg","xl"].map(l=>e.jsx(a,{size:l,name:l,iconBefore:"search",placeholder:`Size: ${l}`},l))}),parameters:{controls:{disable:!0}}},b={render:()=>e.jsxs(t,{gap:"12",alignItems:"flex-start",maxW:"3xl",children:[e.jsx(a,{name:"auto-sm",size:"sm",autoSize:!0,placeholder:"Auto size sm"}),e.jsx(a,{name:"auto-md",size:"md",autoSize:!0,placeholder:"Auto size md"}),e.jsx(a,{name:"auto-lg",size:"lg",autoSize:!0,placeholder:"Auto size lg"})]}),parameters:{controls:{disable:!0}}},g={name:"Ex: With FormField",render:()=>e.jsxs(t,{gap:"24",alignItems:"stretch",w:"xs",children:[e.jsx(r,{label:"Full Name",labelFor:"fullName",required:!0,children:e.jsx(a,{name:"fullName",id:"fullName",before:e.jsx(n,{name:"user"}),placeholder:"John Doe"})}),e.jsx(r,{label:"Email",labelFor:"email",helpText:"We'll never share your email.",tooltipText:"For real. We won't share it with anyone",children:e.jsx(a,{name:"email",id:"email",before:e.jsx(n,{name:"envelope"}),placeholder:"john@example.com",type:"email"})}),e.jsx(r,{label:"Username",labelFor:"username",error:!0,errorText:"Username is already taken.",children:e.jsx(a,{name:"username",id:"username",defaultValue:"johndoe",error:!0})}),e.jsx(r,{label:"Company",labelFor:"company",disabled:!0,children:e.jsx(a,{name:"company",id:"company",placeholder:"Cetec ERP",disabled:!0})})]}),parameters:{controls:{disable:!0}}},I={name:"Ex: Inline FormField",render:()=>e.jsxs(t,{gap:"16",alignItems:"stretch",w:"md",children:[e.jsx(r,{layout:"inline",labelFor:"fullName",label:"Full Name",required:!0,children:e.jsx(a,{name:"fullName",id:"fullName",before:e.jsx(n,{name:"user"}),placeholder:"John Doe"})}),e.jsx(r,{layout:"inline",label:"Email",labelFor:"email2",helpText:"We'll never share your email.",tooltipText:"For real. We won't share it with anyone",children:e.jsx(a,{name:"email2",id:"email2",before:e.jsx(n,{name:"envelope"}),placeholder:"john@example.com",type:"email"})}),e.jsx(r,{layout:"inline",label:"Username",labelFor:"username",error:!0,errorText:"Username is already taken.",children:e.jsx(a,{name:"username",id:"username",defaultValue:"johndoe"})}),e.jsx(r,{layout:"inline",label:"Company",labelFor:"company2",disabled:!0,children:e.jsx(a,{name:"company",id:"company2",placeholder:"Cetec ERP",disabled:!0})})]}),parameters:{controls:{disable:!0}}},y={name:"Ex: Search Input",render:()=>e.jsxs(de,{gap:"12",alignItems:"center",w:"xs",children:[e.jsx(a,{name:"search-sm",size:"sm",iconBefore:"search",placeholder:"Search..."}),e.jsx(a,{name:"search-md",size:"md",iconBefore:"search",placeholder:"Search..."}),e.jsx(a,{name:"search-lg",size:"lg",iconBefore:"search",placeholder:"Search..."}),e.jsx(a,{name:"search-xl",size:"xl",iconBefore:"search",placeholder:"Search..."})]}),parameters:{controls:{disable:!0}}},j={name:"Test: data-ds-component",render:()=>e.jsxs(t,{alignItems:"start",gap:"8",children:[e.jsx(a,{name:"ds-default","aria-label":"Default input"}),e.jsx(a,{name:"ds-override","aria-label":"Overridden input","data-ds-component":"SearchField"})]}),play:async({canvasElement:l})=>{const T=me(l),S=T.getByLabelText("Default input");c(S).not.toHaveAttribute("data-ds-component"),c(S.parentElement).toHaveAttribute("data-ds-component","TextInput");const z=T.getByLabelText("Overridden input");c(z).not.toHaveAttribute("data-ds-component"),c(z.parentElement).toHaveAttribute("data-ds-component","SearchField")},parameters:{controls:{disable:!0}}},s={args:{name:"demo",size:"md",type:"text",placeholder:"Type something...",error:!1,disabled:!1,autoSize:!1}};var F,B,v;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(v=(B=d.parameters)==null?void 0:B.docs)==null?void 0:v.source}}};var w,k,A;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <Grid w="full" h="full" position="relative" placeContent="center" alignItems="center" justifyItems="center" gap="16">
      <TextInput name="Conditional Sizes" size={{
      base: 'xl',
      xs: 'lg',
      sm: 'md',
      md: 'sm'
    }} placeholder="Conditional Sizes" iconBefore="arrows-left-right" />
      <TextInput name="slot-button" size={{
      base: 'xl',
      xs: 'lg',
      sm: 'md',
      md: 'sm'
    }} after={<IconButton iconName="eye" altText="eye" />} placeholder="Enter password" />
      <TextInput name="slot-button" size={{
      base: 'xl',
      xs: 'lg',
      sm: 'md',
      md: 'sm'
    }} after={<IconButton variant="ghost" iconName="eye" altText="eye" />} placeholder="Enter password" />
      <TextInput name="slot-button" size={{
      base: 'xl',
      xs: 'lg',
      sm: 'md',
      md: 'sm'
    }} after={<IconButton variant="hollow" iconName="eye" altText="eye" />} placeholder="Enter password" />
      <TextInput name="slot-button" size={{
      base: 'xl',
      xs: 'lg',
      sm: 'md',
      md: 'sm'
    }} after={<IconButton variant="primary" iconName="eye" altText="eye" />} placeholder="Enter password" />
      <TextInput name="slot-button" size={{
      base: 'xl',
      xs: 'lg',
      sm: 'md',
      md: 'sm'
    }} before={<Spinner />} after={<Button>Submit</Button>} placeholder="Enter username" defaultValue="tom" disabled />
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
}`,...(A=(k=p.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var E,V,N;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(N=(V=u.parameters)==null?void 0:V.docs)==null?void 0:N.source}}};var W,C,G;x.parameters={...x.parameters,docs:{...(W=x.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(G=(C=x.parameters)==null?void 0:C.docs)==null?void 0:G.source}}};var D,H,U;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <Grid gridTemplateColumns="auto 1fr" columnGap="12" rowGap="32" alignItems="center">
      <Text textStyle="mono.md" mr="16">
        before / after
      </Text>
      <VStack gap="8" alignItems="flex-start">
        <TextInput name="slot-search" before={<Icon name="search" />} after={<Kbd keys={['⌘', 'K']} />} placeholder="Search" />
        <TextInput name="slot-email" before={<Icon name="at" />} placeholder="Email" />
        <TextInput name="slot-check" after={<Icon name="check" />} placeholder="Validated" />
        <TextInput name="slot-badge" after={<Badge count={2} variant="warning" />} placeholder="Needs review" />
        <TextInput name="slot-button" after={<IconButton variant="ghost" iconName="eye" altText="eye" />} placeholder="Enter password" />
      </VStack>
      <Text textStyle="mono.md" mr="16">
        aliases
      </Text>
      <VStack gap="8" alignItems="flex-start">
        <TextInput name="alias-before" iconBefore="search" placeholder="Search" />
        <TextInput name="alias-after" iconAfter="check" placeholder="Done" />
      </VStack>
    </Grid>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(U=(H=h.parameters)==null?void 0:H.docs)==null?void 0:U.source}}};var P,L,O;f.parameters={...f.parameters,docs:{...(P=f.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <VStack gap="12" alignItems="flex-start">
      {(['sm', 'md', 'lg', 'xl'] as const).map(size => <TextInput key={size} size={size} name={size} iconBefore="search" placeholder={\`Size: \${size}\`} />)}
    </VStack>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(O=(L=f.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var K,R,q;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(q=(R=b.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var J,_,$;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'Ex: With FormField',
  render: () => <VStack gap="24" alignItems="stretch" w="xs">
      <FormField label="Full Name" labelFor="fullName" required>
        <TextInput name="fullName" id="fullName" before={<Icon name="user" />} placeholder="John Doe" />
      </FormField>
      <FormField label="Email" labelFor="email" helpText="We'll never share your email." tooltipText="For real. We won't share it with anyone">
        <TextInput name="email" id="email" before={<Icon name="envelope" />} placeholder="john@example.com" type="email" />
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
}`,...($=(_=g.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var M,Q,X;I.parameters={...I.parameters,docs:{...(M=I.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Ex: Inline FormField',
  render: () => <VStack gap="16" alignItems="stretch" w="md">
      <FormField layout="inline" labelFor="fullName" label="Full Name" required>
        <TextInput name="fullName" id="fullName" before={<Icon name="user" />} placeholder="John Doe" />
      </FormField>
      <FormField layout="inline" label="Email" labelFor="email2" helpText="We'll never share your email." tooltipText="For real. We won't share it with anyone">
        <TextInput name="email2" id="email2" before={<Icon name="envelope" />} placeholder="john@example.com" type="email" />
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
}`,...(X=(Q=I.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;y.parameters={...y.parameters,docs:{...(Y=y.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(ee=(Z=y.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,te,re;j.parameters={...j.parameters,docs:{...(ae=j.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: 'Test: data-ds-component',
  render: () => <VStack alignItems="start" gap="8">
      <TextInput name="ds-default" aria-label="Default input" />
      <TextInput name="ds-override" aria-label="Overridden input" data-ds-component="SearchField" />
    </VStack>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // TextInput forwards rest props to the native input, so the attribute is
    // applied to the container root and must not leak onto the input.
    const defaultInput = canvas.getByLabelText('Default input');
    expect(defaultInput).not.toHaveAttribute('data-ds-component');
    expect(defaultInput.parentElement).toHaveAttribute('data-ds-component', 'TextInput');

    // An explicit value lands on the root, not on the native input.
    const overriddenInput = canvas.getByLabelText('Overridden input');
    expect(overriddenInput).not.toHaveAttribute('data-ds-component');
    expect(overriddenInput.parentElement).toHaveAttribute('data-ds-component', 'SearchField');
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(re=(te=j.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var oe,ne,le,se,ie;s.parameters={...s.parameters,docs:{...(oe=s.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    name: 'demo',
    size: 'md',
    type: 'text',
    placeholder: 'Type something...',
    error: false,
    disabled: false,
    autoSize: false
  }
}`,...(le=(ne=s.parameters)==null?void 0:ne.docs)==null?void 0:le.source},description:{story:"Interactive playground to test all props",...(ie=(se=s.parameters)==null?void 0:se.docs)==null?void 0:ie.description}}};const Ke=["Sizes","ConditionalBreakpoints","States","WithIcons","WithSlots","IconSizes","AutoSize","WithFormField","InlineFormField","SearchInput","DsComponentAttribute","Interactive"];export{b as AutoSize,p as ConditionalBreakpoints,j as DsComponentAttribute,f as IconSizes,I as InlineFormField,s as Interactive,y as SearchInput,d as Sizes,u as States,g as WithFormField,x as WithIcons,h as WithSlots,Ke as __namedExportsOrder,Oe as default};
