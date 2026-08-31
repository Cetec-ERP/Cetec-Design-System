import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{w as ue,e as l}from"./index-DPYJpPba.js";import"./index-BKyFwriW.js";import{G as p,V as t,H as xe,W as he}from"./dsComponent-D6ec2IT1.js";import{B as fe}from"./Badge-BvX3YtqQ.js";import{B as be}from"./BreakpointIndicator-IVWRJRlj.js";import{B as ge}from"./Button-CxuwUgmn.js";import{F as n}from"./FormField-CVV-GmFr.js";import{I as s}from"./Icon-12cJPaFt.js";import"./IconConfig-D3dlgfBK.js";import{I as d}from"./IconButton-AywSTlWb.js";import{K as Ie}from"./Kbd-RT-LVDIl.js";import{S as ye}from"./Spinner-DHR4yZCu.js";import{T as o}from"./Text-_zcnQP4z.js";import{T as a}from"./TextInput-JHfZaWuz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./mq.hook-xG5a6_yz.js";import"./breakpoints-DU_5_Zhy.js";import"./index-DQmpdOPX.js";import"./Tag-D5-JEa-_.js";import"./FieldContext-D6URyQos.js";import"./Label-D6_yS6yi.js";import"./Tooltip-Bb2HIdOM.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";const Je={title:"Components/TextInput",component:a,args:{name:"text-input"},parameters:{layout:"centered",docs:{description:{component:`TextInput component for single-line text entry.

Features:
- Four sizes (sm, md, lg, xl)
- Optional \`before\` / \`after\` slots, with icon aliases for shorthand
- Error and disabled states
- Auto-sizing via \`fieldSizing: content\`
- Explicit input type support (text, email, password, search, etc.)
- Pairs with FormField for labels, help text, and error messages`}}},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg","xl"],description:"Input size",table:{defaultValue:{summary:"md"}}},error:{control:"boolean",description:"Error state — sets aria-invalid and error styling"},disabled:{control:"boolean",description:"Disabled state"},autoSize:{control:"boolean",description:"Auto-size width to content",table:{defaultValue:{summary:"false"}}},iconBefore:{control:"select",options:[void 0,"search","user","mail","lock"],description:"Legacy shorthand icon name for before slot"},iconAfter:{control:"select",options:[void 0,"check","x","eye","chevron-down"],description:"Legacy shorthand icon name for after slot"},before:{control:!1,description:"Preferred slot for content before the input"},after:{control:!1,description:"Preferred slot for content after the input"},type:{control:"select",options:["text","number","email","password","search","tel","url","date","time","datetime-local","month","week"],description:"HTML input type",table:{defaultValue:{summary:"text"}}},placeholder:{control:"text",description:"Placeholder text"},name:{control:"text",description:"Input name attribute"}}},u={render:()=>e.jsxs(p,{columns:3,justifyItems:"center",gap:"20",maxW:"3xl",children:[e.jsx(a,{name:"sm",placeholder:"sm no icon",size:"sm"}),e.jsx(a,{name:"sm",placeholder:"sm iconBefore",size:"sm",iconBefore:"at"}),e.jsx(a,{name:"sm",placeholder:"sm iconAfter",size:"sm",iconAfter:"check"}),e.jsx(a,{name:"md",placeholder:"md no icon",size:"md"}),e.jsx(a,{name:"md",placeholder:"md iconBefore",size:"md",iconBefore:"at"}),e.jsx(a,{name:"md",placeholder:"md iconAfter",size:"md",iconAfter:"check"}),e.jsx(a,{name:"lg",placeholder:"lg no icon",size:"lg"}),e.jsx(a,{name:"lg",placeholder:"lg iconBefore",size:"lg",iconBefore:"at"}),e.jsx(a,{name:"lg",placeholder:"lg iconAfter",size:"lg",iconAfter:"check"}),e.jsx(a,{name:"xl",placeholder:"xl no icon",size:"xl"}),e.jsx(a,{name:"xl",placeholder:"xl iconBefore",size:"xl",iconBefore:"at"}),e.jsx(a,{name:"xl",placeholder:"xl iconAfter",size:"xl",iconAfter:"check"})]}),parameters:{controls:{disable:!0}}},x={render:()=>e.jsxs(p,{w:"full",h:"full",position:"relative",placeContent:"center",alignItems:"center",justifyItems:"center",gap:"16",children:[e.jsx(a,{name:"Conditional Sizes",size:{base:"xl",xs:"lg",sm:"md",md:"sm"},placeholder:"Conditional Sizes",iconBefore:"arrows-left-right"}),e.jsx(a,{name:"slot-button",size:{base:"xl",xs:"lg",sm:"md",md:"sm"},after:e.jsx(d,{iconName:"eye",altText:"eye"}),placeholder:"Enter password"}),e.jsx(a,{name:"slot-button",size:{base:"xl",xs:"lg",sm:"md",md:"sm"},after:e.jsx(d,{variant:"ghost",iconName:"eye",altText:"eye"}),placeholder:"Enter password"}),e.jsx(a,{name:"slot-button",size:{base:"xl",xs:"lg",sm:"md",md:"sm"},after:e.jsx(d,{variant:"hollow",iconName:"eye",altText:"eye"}),placeholder:"Enter password"}),e.jsx(a,{name:"slot-button",size:{base:"xl",xs:"lg",sm:"md",md:"sm"},after:e.jsx(d,{variant:"primary",iconName:"eye",altText:"eye"}),placeholder:"Enter password"}),e.jsx(a,{name:"slot-button",size:{base:"xl",xs:"lg",sm:"md",md:"sm"},before:e.jsx(ye,{}),after:e.jsx(ge,{children:"Submit"}),placeholder:"Enter username",defaultValue:"tom",disabled:!0}),e.jsxs(o,{textAlign:"center",textStyle:"mono.sm",_after:{display:"inline",content:{base:'"xl"',xs:'"lg"',sm:'"md"',md:'"sm"'},color:"text.bold",fontWeight:"bold"},children:["Size:"," "]}),e.jsx(be,{})]}),parameters:{controls:{disable:!0}}},h={render:()=>e.jsxs(p,{gridTemplateColumns:"auto 1fr",columnGap:"12",rowGap:"32",alignItems:"center",children:[e.jsx(o,{textStyle:"mono.md",mr:"16",children:"default"}),e.jsx(a,{name:"default",placeholder:"Default"}),e.jsx(o,{textStyle:"mono.md",mr:"16",children:"disabled"}),e.jsx(a,{name:"disabled",placeholder:"Disabled",disabled:!0}),e.jsx(o,{textStyle:"mono.md",mr:"16",children:"error"}),e.jsx(a,{name:"error",placeholder:"Error",error:!0})]}),parameters:{controls:{disable:!0}}},f={render:()=>e.jsxs(p,{gridTemplateColumns:"auto 1fr",columnGap:"12",rowGap:"32",alignItems:"center",children:[e.jsx(o,{textStyle:"mono.md",mr:"16",children:"iconBefore"}),e.jsxs(t,{gap:"8",alignItems:"flex-start",children:[e.jsx(a,{name:"search",iconBefore:"search",placeholder:"Search..."}),e.jsx(a,{name:"user",iconBefore:"user",placeholder:"Username"}),e.jsx(a,{name:"email",iconBefore:"envelope",placeholder:"Email",type:"email"}),e.jsx(a,{name:"password",iconBefore:"lock",placeholder:"Password",type:"password"})]}),e.jsx(o,{textStyle:"mono.md",mr:"16",children:"iconAfter"}),e.jsxs(t,{gap:"8",alignItems:"flex-start",children:[e.jsx(a,{name:"valid",iconAfter:"check",placeholder:"Validated"}),e.jsxs(xe,{children:[e.jsx(a,{name:"clear",iconAfter:"at",placeholder:"Username"}),"cetecerp.com"]})]})]}),parameters:{controls:{disable:!0}}},b={render:()=>e.jsxs(p,{gridTemplateColumns:"auto 1fr",columnGap:"12",rowGap:"32",alignItems:"center",children:[e.jsx(o,{textStyle:"mono.md",mr:"16",children:"before / after"}),e.jsxs(t,{gap:"8",alignItems:"flex-start",children:[e.jsx(a,{name:"slot-search",before:e.jsx(s,{name:"search"}),after:e.jsx(Ie,{keys:["⌘","K"]}),placeholder:"Search"}),e.jsx(a,{name:"slot-email",before:e.jsx(s,{name:"at"}),placeholder:"Email"}),e.jsx(a,{name:"slot-check",after:e.jsx(s,{name:"check"}),placeholder:"Validated"}),e.jsx(a,{name:"slot-badge",after:e.jsx(fe,{count:2,variant:"warning"}),placeholder:"Needs review"}),e.jsx(a,{name:"slot-button",after:e.jsx(d,{variant:"ghost",iconName:"eye",altText:"eye"}),placeholder:"Enter password"})]}),e.jsx(o,{textStyle:"mono.md",mr:"16",children:"aliases"}),e.jsxs(t,{gap:"8",alignItems:"flex-start",children:[e.jsx(a,{name:"alias-before",iconBefore:"search",placeholder:"Search"}),e.jsx(a,{name:"alias-after",iconAfter:"check",placeholder:"Done"})]})]}),parameters:{controls:{disable:!0}}},g={render:()=>e.jsx(t,{gap:"12",alignItems:"flex-start",children:["sm","md","lg","xl"].map(r=>e.jsx(a,{size:r,name:r,iconBefore:"search",placeholder:`Size: ${r}`},r))}),parameters:{controls:{disable:!0}}},I={render:()=>e.jsxs(t,{gap:"12",alignItems:"flex-start",maxW:"3xl",children:[e.jsx(a,{name:"auto-sm",size:"sm",autoSize:!0,placeholder:"Auto size sm"}),e.jsx(a,{name:"auto-md",size:"md",autoSize:!0,placeholder:"Auto size md"}),e.jsx(a,{name:"auto-lg",size:"lg",autoSize:!0,placeholder:"Auto size lg"})]}),parameters:{controls:{disable:!0}}},y={name:"Ex: With FormField",render:()=>e.jsxs(t,{gap:"24",alignItems:"stretch",w:"xs",children:[e.jsx(n,{label:"Full Name",labelFor:"fullName",required:!0,children:e.jsx(a,{name:"fullName",id:"fullName",before:e.jsx(s,{name:"user"}),placeholder:"John Doe"})}),e.jsx(n,{label:"Email",labelFor:"email",helpText:"We'll never share your email.",tooltipText:"For real. We won't share it with anyone",children:e.jsx(a,{name:"email",id:"email",before:e.jsx(s,{name:"envelope"}),placeholder:"john@example.com",type:"email"})}),e.jsx(n,{label:"Username",labelFor:"username",error:!0,errorText:"Username is already taken.",children:e.jsx(a,{name:"username",id:"username",defaultValue:"johndoe",error:!0})}),e.jsx(n,{label:"Company",labelFor:"company",disabled:!0,children:e.jsx(a,{name:"company",id:"company",placeholder:"Cetec ERP",disabled:!0})})]}),parameters:{controls:{disable:!0}}},T={name:"Ex: Inline FormField",render:()=>e.jsxs(t,{gap:"16",alignItems:"stretch",w:"md",children:[e.jsx(n,{layout:"inline",labelFor:"fullName",label:"Full Name",required:!0,children:e.jsx(a,{name:"fullName",id:"fullName",before:e.jsx(s,{name:"user"}),placeholder:"John Doe"})}),e.jsx(n,{layout:"inline",label:"Email",labelFor:"email2",helpText:"We'll never share your email.",tooltipText:"For real. We won't share it with anyone",children:e.jsx(a,{name:"email2",id:"email2",before:e.jsx(s,{name:"envelope"}),placeholder:"john@example.com",type:"email"})}),e.jsx(n,{layout:"inline",label:"Username",labelFor:"username",error:!0,errorText:"Username is already taken.",children:e.jsx(a,{name:"username",id:"username",defaultValue:"johndoe"})}),e.jsx(n,{layout:"inline",label:"Company",labelFor:"company2",disabled:!0,children:e.jsx(a,{name:"company",id:"company2",placeholder:"Cetec ERP",disabled:!0})})]}),parameters:{controls:{disable:!0}}},j={name:"Ex: Search Input",render:()=>e.jsxs(he,{gap:"12",alignItems:"center",w:"xs",children:[e.jsx(a,{name:"search-sm",size:"sm",iconBefore:"search",placeholder:"Search..."}),e.jsx(a,{name:"search-md",size:"md",iconBefore:"search",placeholder:"Search..."}),e.jsx(a,{name:"search-lg",size:"lg",iconBefore:"search",placeholder:"Search..."}),e.jsx(a,{name:"search-xl",size:"xl",iconBefore:"search",placeholder:"Search..."})]}),parameters:{controls:{disable:!0}}},S={name:"Test: data-ds-component",render:()=>e.jsxs(t,{alignItems:"start",gap:"8",children:[e.jsx(a,{name:"ds-default","aria-label":"Default input"}),e.jsx(a,{name:"ds-override","aria-label":"Overridden input","data-ds-component":"SearchField"})]}),play:async({canvasElement:r})=>{const F=ue(r),m=F.getByLabelText("Default input");l(m).not.toHaveAttribute("data-ds-component"),l(m.parentElement).toHaveAttribute("data-ds-component","TextInput");const i=F.getByLabelText("Overridden input");l(i).not.toHaveAttribute("data-ds-component"),l(i.parentElement).toHaveAttribute("data-ds-component","SearchField")},parameters:{controls:{disable:!0}}},z={name:"Test: consumer className",render:()=>e.jsx(t,{alignItems:"start",gap:"8",children:e.jsx(a,{name:"class-name","aria-label":"Class name input",className:"consumer-class",iconBefore:"search"})}),play:async({canvasElement:r})=>{const m=ue(r).getByLabelText("Class name input"),i=m.parentElement;if(!(i instanceof HTMLElement))throw new Error("TextInput should render a container around the input.");l(i).toHaveClass("consumer-class"),l(m).not.toHaveClass("consumer-class")},parameters:{controls:{disable:!0}}},c={args:{name:"demo",size:"md",type:"text",placeholder:"Type something...",error:!1,disabled:!1,autoSize:!1}};var v,B,w;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(w=(B=u.parameters)==null?void 0:B.docs)==null?void 0:w.source}}};var k,E,A;x.parameters={...x.parameters,docs:{...(k=x.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(A=(E=x.parameters)==null?void 0:E.docs)==null?void 0:A.source}}};var C,N,V;h.parameters={...h.parameters,docs:{...(C=h.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(V=(N=h.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var W,G,H;f.parameters={...f.parameters,docs:{...(W=f.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(H=(G=f.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var D,U,L;b.parameters={...b.parameters,docs:{...(D=b.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(L=(U=b.parameters)==null?void 0:U.docs)==null?void 0:L.source}}};var P,O,K;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <VStack gap="12" alignItems="flex-start">
      {(['sm', 'md', 'lg', 'xl'] as const).map(size => <TextInput key={size} size={size} name={size} iconBefore="search" placeholder={\`Size: \${size}\`} />)}
    </VStack>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(K=(O=g.parameters)==null?void 0:O.docs)==null?void 0:K.source}}};var R,q,J;I.parameters={...I.parameters,docs:{...(R=I.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(J=(q=I.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var _,M,$;y.parameters={...y.parameters,docs:{...(_=y.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...($=(M=y.parameters)==null?void 0:M.docs)==null?void 0:$.source}}};var Q,X,Y;T.parameters={...T.parameters,docs:{...(Q=T.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Y=(X=T.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ae;j.parameters={...j.parameters,docs:{...(Z=j.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ae=(ee=j.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,re,ne;S.parameters={...S.parameters,docs:{...(te=S.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ne=(re=S.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var oe,se,le;z.parameters={...z.parameters,docs:{...(oe=z.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: 'Test: consumer className',
  render: () => <VStack alignItems="start" gap="8">
      <TextInput name="class-name" aria-label="Class name input" className="consumer-class" iconBefore="search" />
    </VStack>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText('Class name input');
    const container = input.parentElement;
    if (!(container instanceof HTMLElement)) {
      throw new Error('TextInput should render a container around the input.');
    }

    // A consumer className styles the component root once.
    expect(container).toHaveClass('consumer-class');

    // The native input keeps only its recipe class, so a single className
    // prop cannot style two elements at once.
    expect(input).not.toHaveClass('consumer-class');
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(le=(se=z.parameters)==null?void 0:se.docs)==null?void 0:le.source}}};var me,ie,ce,de,pe;c.parameters={...c.parameters,docs:{...(me=c.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    name: 'demo',
    size: 'md',
    type: 'text',
    placeholder: 'Type something...',
    error: false,
    disabled: false,
    autoSize: false
  }
}`,...(ce=(ie=c.parameters)==null?void 0:ie.docs)==null?void 0:ce.source},description:{story:"Interactive playground to test all props",...(pe=(de=c.parameters)==null?void 0:de.docs)==null?void 0:pe.description}}};const _e=["Sizes","ConditionalBreakpoints","States","WithIcons","WithSlots","IconSizes","AutoSize","WithFormField","InlineFormField","SearchInput","DsComponentAttribute","ConsumerClassName","Interactive"];export{I as AutoSize,x as ConditionalBreakpoints,z as ConsumerClassName,S as DsComponentAttribute,g as IconSizes,T as InlineFormField,c as Interactive,j as SearchInput,u as Sizes,h as States,y as WithFormField,f as WithIcons,b as WithSlots,_e as __namedExportsOrder,Je as default};
