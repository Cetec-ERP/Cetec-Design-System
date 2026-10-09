import{j as e,G as p,T as o,V as a,H as xe,a as s,W as he}from"./iframe-CXsJ8nBA.js";import{B as fe}from"./Badge-BPYqbHKD.js";import{B as be}from"./BreakpointIndicator-BwQvunHU.js";import{B as ge}from"./Button-CZE1N6w8.js";import{F as r}from"./FormField-C8rcDu8o.js";import{I as d}from"./IconButton-Bkoqj9RS.js";import{K as Ie}from"./Kbd-D6lDlxnI.js";import{S as Te}from"./Spinner-D-dkI8vG.js";import{T as n}from"./TextInput-BueRVBeI.js";import"./preload-helper-CNOPt5Zm.js";import"./mq.hook-DrwCf88W.js";import"./breakpoints-DU_5_Zhy.js";import"./Tag-DyFS-3Qz.js";import"./FieldContext-B4fdc69l.js";import"./Label-BFoBrT1R.js";const{expect:l,within:ue}=__STORYBOOK_MODULE_TEST__,Ge={title:"Components/TextInput",component:n,args:{name:"text-input"},parameters:{layout:"centered",docs:{description:{component:`TextInput component for single-line text entry.

Features:
- Four sizes (sm, md, lg, xl)
- Optional \`before\` / \`after\` slots, with icon aliases for shorthand
- Error and disabled states
- Auto-sizing via \`fieldSizing: content\`
- Explicit input type support (text, email, password, search, etc.)
- Pairs with FormField for labels, help text, and error messages`}}},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg","xl"],description:"Input size",table:{defaultValue:{summary:"md"}}},error:{control:"boolean",description:"Error state — sets aria-invalid and error styling"},disabled:{control:"boolean",description:"Disabled state"},autoSize:{control:"boolean",description:"Auto-size width to content",table:{defaultValue:{summary:"false"}}},iconBefore:{control:"select",options:[void 0,"search","user","mail","lock"],description:"Legacy shorthand icon name for before slot"},iconAfter:{control:"select",options:[void 0,"check","x","eye","chevron-down"],description:"Legacy shorthand icon name for after slot"},before:{control:!1,description:"Preferred slot for content before the input"},after:{control:!1,description:"Preferred slot for content after the input"},type:{control:"select",options:["text","number","email","password","search","tel","url","date","time","datetime-local","month","week"],description:"HTML input type",table:{defaultValue:{summary:"text"}}},placeholder:{control:"text",description:"Placeholder text"},name:{control:"text",description:"Input name attribute"}}},u={render:()=>e.jsxs(p,{columns:3,justifyItems:"center",gap:"20",maxW:"3xl",children:[e.jsx(n,{name:"sm",placeholder:"sm no icon",size:"sm"}),e.jsx(n,{name:"sm",placeholder:"sm iconBefore",size:"sm",iconBefore:"at"}),e.jsx(n,{name:"sm",placeholder:"sm iconAfter",size:"sm",iconAfter:"check"}),e.jsx(n,{name:"md",placeholder:"md no icon",size:"md"}),e.jsx(n,{name:"md",placeholder:"md iconBefore",size:"md",iconBefore:"at"}),e.jsx(n,{name:"md",placeholder:"md iconAfter",size:"md",iconAfter:"check"}),e.jsx(n,{name:"lg",placeholder:"lg no icon",size:"lg"}),e.jsx(n,{name:"lg",placeholder:"lg iconBefore",size:"lg",iconBefore:"at"}),e.jsx(n,{name:"lg",placeholder:"lg iconAfter",size:"lg",iconAfter:"check"}),e.jsx(n,{name:"xl",placeholder:"xl no icon",size:"xl"}),e.jsx(n,{name:"xl",placeholder:"xl iconBefore",size:"xl",iconBefore:"at"}),e.jsx(n,{name:"xl",placeholder:"xl iconAfter",size:"xl",iconAfter:"check"})]}),parameters:{controls:{disable:!0}}},x={render:()=>e.jsxs(p,{w:"full",h:"full",position:"relative",placeContent:"center",alignItems:"center",justifyItems:"center",gap:"16",children:[e.jsx(n,{name:"Conditional Sizes",size:{base:"xl",xs:"lg",sm:"md",md:"sm"},placeholder:"Conditional Sizes",iconBefore:"arrows-left-right"}),e.jsx(n,{name:"slot-button",size:{base:"xl",xs:"lg",sm:"md",md:"sm"},after:e.jsx(d,{iconName:"eye",altText:"eye"}),placeholder:"Enter password"}),e.jsx(n,{name:"slot-button",size:{base:"xl",xs:"lg",sm:"md",md:"sm"},after:e.jsx(d,{variant:"ghost",iconName:"eye",altText:"eye"}),placeholder:"Enter password"}),e.jsx(n,{name:"slot-button",size:{base:"xl",xs:"lg",sm:"md",md:"sm"},after:e.jsx(d,{variant:"hollow",iconName:"eye",altText:"eye"}),placeholder:"Enter password"}),e.jsx(n,{name:"slot-button",size:{base:"xl",xs:"lg",sm:"md",md:"sm"},after:e.jsx(d,{variant:"primary",iconName:"eye",altText:"eye"}),placeholder:"Enter password"}),e.jsx(n,{name:"slot-button",size:{base:"xl",xs:"lg",sm:"md",md:"sm"},before:e.jsx(Te,{}),after:e.jsx(ge,{children:"Submit"}),placeholder:"Enter username",defaultValue:"tom",disabled:!0}),e.jsxs(o,{textAlign:"center",textStyle:"mono.sm",_after:{display:"inline",content:{base:'"xl"',xs:'"lg"',sm:'"md"',md:'"sm"'},color:"text.bold",fontWeight:"bold"},children:["Size:"," "]}),e.jsx(be,{})]}),parameters:{controls:{disable:!0}}},h={render:()=>e.jsxs(p,{gridTemplateColumns:"auto 1fr",columnGap:"12",rowGap:"32",alignItems:"center",children:[e.jsx(o,{textStyle:"mono.md",mr:"16",children:"default"}),e.jsx(n,{name:"default",placeholder:"Default"}),e.jsx(o,{textStyle:"mono.md",mr:"16",children:"disabled"}),e.jsx(n,{name:"disabled",placeholder:"Disabled",disabled:!0}),e.jsx(o,{textStyle:"mono.md",mr:"16",children:"error"}),e.jsx(n,{name:"error",placeholder:"Error",error:!0})]}),parameters:{controls:{disable:!0}}},f={render:()=>e.jsxs(p,{gridTemplateColumns:"auto 1fr",columnGap:"12",rowGap:"32",alignItems:"center",children:[e.jsx(o,{textStyle:"mono.md",mr:"16",children:"iconBefore"}),e.jsxs(a,{gap:"8",alignItems:"flex-start",children:[e.jsx(n,{name:"search",iconBefore:"search",placeholder:"Search..."}),e.jsx(n,{name:"user",iconBefore:"user",placeholder:"Username"}),e.jsx(n,{name:"email",iconBefore:"envelope",placeholder:"Email",type:"email"}),e.jsx(n,{name:"password",iconBefore:"lock",placeholder:"Password",type:"password"})]}),e.jsx(o,{textStyle:"mono.md",mr:"16",children:"iconAfter"}),e.jsxs(a,{gap:"8",alignItems:"flex-start",children:[e.jsx(n,{name:"valid",iconAfter:"check",placeholder:"Validated"}),e.jsxs(xe,{children:[e.jsx(n,{name:"clear",iconAfter:"at",placeholder:"Username"}),"cetecerp.com"]})]})]}),parameters:{controls:{disable:!0}}},b={render:()=>e.jsxs(p,{gridTemplateColumns:"auto 1fr",columnGap:"12",rowGap:"32",alignItems:"center",children:[e.jsx(o,{textStyle:"mono.md",mr:"16",children:"before / after"}),e.jsxs(a,{gap:"8",alignItems:"flex-start",children:[e.jsx(n,{name:"slot-search",before:e.jsx(s,{name:"search"}),after:e.jsx(Ie,{keys:["⌘","K"]}),placeholder:"Search"}),e.jsx(n,{name:"slot-email",before:e.jsx(s,{name:"at"}),placeholder:"Email"}),e.jsx(n,{name:"slot-check",after:e.jsx(s,{name:"check"}),placeholder:"Validated"}),e.jsx(n,{name:"slot-badge",after:e.jsx(fe,{count:2,variant:"warning"}),placeholder:"Needs review"}),e.jsx(n,{name:"slot-button",after:e.jsx(d,{variant:"ghost",iconName:"eye",altText:"eye"}),placeholder:"Enter password"})]}),e.jsx(o,{textStyle:"mono.md",mr:"16",children:"aliases"}),e.jsxs(a,{gap:"8",alignItems:"flex-start",children:[e.jsx(n,{name:"alias-before",iconBefore:"search",placeholder:"Search"}),e.jsx(n,{name:"alias-after",iconAfter:"check",placeholder:"Done"})]})]}),parameters:{controls:{disable:!0}}},g={render:()=>e.jsx(a,{gap:"12",alignItems:"flex-start",children:["sm","md","lg","xl"].map(t=>e.jsx(n,{size:t,name:t,iconBefore:"search",placeholder:`Size: ${t}`},t))}),parameters:{controls:{disable:!0}}},I={render:()=>e.jsxs(a,{gap:"12",alignItems:"flex-start",maxW:"3xl",children:[e.jsx(n,{name:"auto-sm",size:"sm",autoSize:!0,placeholder:"Auto size sm"}),e.jsx(n,{name:"auto-md",size:"md",autoSize:!0,placeholder:"Auto size md"}),e.jsx(n,{name:"auto-lg",size:"lg",autoSize:!0,placeholder:"Auto size lg"})]}),parameters:{controls:{disable:!0}}},T={name:"Ex: With FormField",render:()=>e.jsxs(a,{gap:"24",alignItems:"stretch",w:"xs",children:[e.jsx(r,{label:"Full Name",labelFor:"fullName",required:!0,children:e.jsx(n,{name:"fullName",id:"fullName",before:e.jsx(s,{name:"user"}),placeholder:"John Doe"})}),e.jsx(r,{label:"Email",labelFor:"email",helpText:"We'll never share your email.",tooltipText:"For real. We won't share it with anyone",children:e.jsx(n,{name:"email",id:"email",before:e.jsx(s,{name:"envelope"}),placeholder:"john@example.com",type:"email"})}),e.jsx(r,{label:"Username",labelFor:"username",error:!0,errorText:"Username is already taken.",children:e.jsx(n,{name:"username",id:"username",defaultValue:"johndoe",error:!0})}),e.jsx(r,{label:"Company",labelFor:"company",disabled:!0,children:e.jsx(n,{name:"company",id:"company",placeholder:"Cetec ERP",disabled:!0})})]}),parameters:{controls:{disable:!0}}},y={name:"Ex: Inline FormField",render:()=>e.jsxs(a,{gap:"16",alignItems:"stretch",w:"md",children:[e.jsx(r,{layout:"inline",labelFor:"fullName",label:"Full Name",required:!0,children:e.jsx(n,{name:"fullName",id:"fullName",before:e.jsx(s,{name:"user"}),placeholder:"John Doe"})}),e.jsx(r,{layout:"inline",label:"Email",labelFor:"email2",helpText:"We'll never share your email.",tooltipText:"For real. We won't share it with anyone",children:e.jsx(n,{name:"email2",id:"email2",before:e.jsx(s,{name:"envelope"}),placeholder:"john@example.com",type:"email"})}),e.jsx(r,{layout:"inline",label:"Username",labelFor:"username",error:!0,errorText:"Username is already taken.",children:e.jsx(n,{name:"username",id:"username",defaultValue:"johndoe"})}),e.jsx(r,{layout:"inline",label:"Company",labelFor:"company2",disabled:!0,children:e.jsx(n,{name:"company",id:"company2",placeholder:"Cetec ERP",disabled:!0})})]}),parameters:{controls:{disable:!0}}},j={name:"Ex: Search Input",render:()=>e.jsxs(he,{gap:"12",alignItems:"center",w:"xs",children:[e.jsx(n,{name:"search-sm",size:"sm",iconBefore:"search",placeholder:"Search..."}),e.jsx(n,{name:"search-md",size:"md",iconBefore:"search",placeholder:"Search..."}),e.jsx(n,{name:"search-lg",size:"lg",iconBefore:"search",placeholder:"Search..."}),e.jsx(n,{name:"search-xl",size:"xl",iconBefore:"search",placeholder:"Search..."})]}),parameters:{controls:{disable:!0}}},S={name:"Test: data-ds-component",render:()=>e.jsxs(a,{alignItems:"start",gap:"8",children:[e.jsx(n,{name:"ds-default","aria-label":"Default input"}),e.jsx(n,{name:"ds-override","aria-label":"Overridden input","data-ds-component":"SearchField"})]}),play:async({canvasElement:t})=>{const F=ue(t),i=F.getByLabelText("Default input");l(i).not.toHaveAttribute("data-ds-component"),l(i.parentElement).toHaveAttribute("data-ds-component","TextInput");const m=F.getByLabelText("Overridden input");l(m).not.toHaveAttribute("data-ds-component"),l(m.parentElement).toHaveAttribute("data-ds-component","SearchField")},parameters:{controls:{disable:!0}}},z={name:"Test: consumer className",render:()=>e.jsx(a,{alignItems:"start",gap:"8",children:e.jsx(n,{name:"class-name","aria-label":"Class name input",className:"consumer-class",iconBefore:"search"})}),play:async({canvasElement:t})=>{const i=ue(t).getByLabelText("Class name input"),m=i.parentElement;if(!(m instanceof HTMLElement))throw new Error("TextInput should render a container around the input.");l(m).toHaveClass("consumer-class"),l(i).not.toHaveClass("consumer-class")},parameters:{controls:{disable:!0}}},c={args:{name:"demo",size:"md",type:"text",placeholder:"Type something...",error:!1,disabled:!1,autoSize:!1}},He=["Sizes","ConditionalBreakpoints","States","WithIcons","WithSlots","IconSizes","AutoSize","WithFormField","InlineFormField","SearchInput","DsComponentAttribute","ConsumerClassName","Interactive"];var v,B,w;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(L=(U=b.parameters)==null?void 0:U.docs)==null?void 0:L.source}}};var O,P,_;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <VStack gap="12" alignItems="flex-start">
      {(['sm', 'md', 'lg', 'xl'] as const).map(size => <TextInput key={size} size={size} name={size} iconBefore="search" placeholder={\`Size: \${size}\`} />)}
    </VStack>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(_=(P=g.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var K,R,q;I.parameters={...I.parameters,docs:{...(K=I.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(q=(R=I.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var J,M,$;T.parameters={...T.parameters,docs:{...(J=T.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...($=(M=T.parameters)==null?void 0:M.docs)==null?void 0:$.source}}};var Y,Q,X;y.parameters={...y.parameters,docs:{...(Y=y.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(X=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,ne;j.parameters={...j.parameters,docs:{...(Z=j.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ne=(ee=j.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var ae,te,re;S.parameters={...S.parameters,docs:{...(ae=S.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(re=(te=S.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var oe,se,le;z.parameters={...z.parameters,docs:{...(oe=z.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(le=(se=z.parameters)==null?void 0:se.docs)==null?void 0:le.source}}};var ie,me,ce,de,pe;c.parameters={...c.parameters,docs:{...(ie=c.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    name: 'demo',
    size: 'md',
    type: 'text',
    placeholder: 'Type something...',
    error: false,
    disabled: false,
    autoSize: false
  }
}`,...(ce=(me=c.parameters)==null?void 0:me.docs)==null?void 0:ce.source},description:{story:"Interactive playground to test all props",...(pe=(de=c.parameters)==null?void 0:de.docs)==null?void 0:pe.description}}};export{I as AutoSize,x as ConditionalBreakpoints,z as ConsumerClassName,S as DsComponentAttribute,g as IconSizes,y as InlineFormField,c as Interactive,j as SearchInput,u as Sizes,h as States,T as WithFormField,f as WithIcons,b as WithSlots,He as __namedExportsOrder,Ge as default};
