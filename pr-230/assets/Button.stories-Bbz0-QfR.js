import{j as e,W as a,G as x,a as j,V as Ie,T as r,H as s}from"./iframe-DZjfHOlA.js";import{A as Ce}from"./Avatar-CkcT4RGW.js";import{B as y}from"./Badge-BeI6MICe.js";import{B as ke}from"./BreakpointIndicator-vjLItZ0h.js";import{D as We}from"./Divider-DjfUucoR.js";import{I as o}from"./IconButton-BTcEr8Y4.js";import{K as Le}from"./Kbd-BUx4dIOw.js";import{S as De}from"./Spinner-C55NuBax.js";import{B as n}from"./Button-Cy6v52eP.js";import"./preload-helper-BWCT3BfN.js";import"./mq.hook-C26xjvuC.js";import"./breakpoints-DU_5_Zhy.js";import"./Tag-CDXHFI1V.js";import"./FieldContext-UIV0oueV.js";const{expect:A,fn:Ge,within:Ee}=__STORYBOOK_MODULE_TEST__,Xe={title:"Components/Button",component:n,parameters:{layout:"centered",docs:{description:{component:`Button component with comprehensive variant support.

Features:
- Multiple visual variants (standard, primary, hollow, ghost, cta, danger)
- Four sizes (sm, md, lg, xl)
- Slot support via \`before\` and \`after\`, with icon aliases for shorthand
- Loading and disabled states
- Auto-renders as anchor when href is provided`}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["standard","primary","hollow","ghost","cta","danger","selected","selectedBold"],description:"Visual style variants",table:{defaultValue:{summary:"standard"}}},size:{control:"select",options:["sm","md","lg","xl"],description:"Button size",table:{defaultValue:{summary:"md"}}},disabled:{control:"boolean",description:"Disabled state - non-interactive"},loading:{control:"boolean",description:"Loading state - shows spinner and disables interaction"},iconBefore:{control:"select",options:[void 0,"plus","check","arrow-left","edit","search"],description:"Legacy shorthand icon name for before slot"},iconAfter:{control:"select",options:[void 0,"arrow-right","chevron-down","arrow-square-out"],description:"Legacy shorthand icon name for after slot"},before:{control:!1,description:"Preferred slot for content before button text"},after:{control:!1,description:"Preferred slot for content after button text"},href:{control:"text",description:"When provided, button renders as anchor element"},children:{control:"text",description:"Button content"}},args:{children:"Button",onClick:Ge()}},g={render:()=>e.jsx(a,{gap:"12",alignItems:"center",children:["standard","primary","hollow","ghost","cta","danger","selected","selectedBold"].map(t=>e.jsx(n,{variant:t,children:t},t))}),parameters:{controls:{disable:!0}}},h={render:()=>e.jsxs(x,{columns:3,justifyItems:"center",gap:"20",children:[e.jsx(n,{size:"sm",children:"Small"}),e.jsx(n,{size:"sm",iconBefore:"arrow-left",children:"Small"}),e.jsx(n,{size:"sm",iconAfter:"arrow-square-out",children:"Small"}),e.jsx(n,{size:"md",children:"Medium"}),e.jsx(n,{size:"md",iconBefore:"arrow-left",children:"Medium"}),e.jsx(n,{size:"md",iconAfter:"arrow-square-out",children:"Medium"}),e.jsx(n,{size:"lg",children:"Large"}),e.jsx(n,{size:"lg",iconBefore:"arrow-left",children:"Large"}),e.jsx(n,{size:"lg",iconAfter:"arrow-square-out",children:"Large"}),e.jsx(n,{size:"xl",children:"Extra Large"}),e.jsx(n,{size:"xl",iconBefore:"arrow-left",children:"Extra Large"}),e.jsx(n,{size:"xl",iconAfter:"arrow-square-out",children:"Extra Large"})]}),parameters:{controls:{disable:!0}}},B={render:()=>e.jsxs(x,{w:"full",h:"full",position:"relative",placeContent:"center",alignItems:"center",justifyItems:"center",gap:"16",children:[e.jsx(n,{size:{base:"xl",xs:"lg",sm:"md",md:"sm"},variant:{base:"primary",xs:"standard",sm:"hollow",md:"danger"},iconBefore:"arrows-left-right",children:"Button"}),e.jsx(n,{size:{base:"xl",xs:"lg",sm:"md",md:"sm"},before:e.jsx(y,{count:5}),children:"Button"}),e.jsx(n,{size:{base:"xl",xs:"lg",sm:"md",md:"sm"},before:e.jsx(Ce,{name:"John Doe",src:"https://i.pravatar.cc/150?img=1"}),children:"Button"}),e.jsx(n,{size:{base:"xl",xs:"lg",sm:"md",md:"sm"},before:e.jsx(De,{}),children:"Button"}),e.jsx(n,{variant:"ghost",size:{base:"xl",xs:"lg",sm:"md",md:"sm"},before:e.jsx(j,{name:"circle-check",fill:"icon.success"}),children:"Button"}),e.jsxs(Ie,{gap:"4",children:[e.jsxs(r,{textAlign:"center",textStyle:"mono.sm",_after:{display:"inline",content:{base:'"xl"',xs:'"lg"',sm:'"md"',md:'"sm"'},color:"text.bold",fontWeight:"bold"},children:["Size:"," "]}),e.jsxs(r,{textAlign:"center",textStyle:"mono.sm",_after:{display:"inline",content:{base:'"primary"',xs:'"standard"',sm:'"hollow"',md:'"danger"'},color:"text.bold",fontWeight:"bold"},children:["Variant:"," "]})]}),e.jsx(ke,{})]}),parameters:{controls:{disable:!0}}},f={render:()=>e.jsxs(x,{gridTemplateColumns:"auto 1fr",columnGap:"12",rowGap:"32",alignItems:"center",children:[e.jsx(r,{textStyle:"mono.md",mr:"16",children:"Disabled"}),e.jsx(a,{gap:"12",alignItems:"center",children:["standard","primary","hollow","ghost","cta","danger","selected","selectedBold"].map(t=>e.jsx(n,{variant:t,disabled:!0,children:t},t))}),e.jsx(r,{textStyle:"mono.md",mr:"16",children:"Loading"}),e.jsx(a,{gap:"12",alignItems:"center",children:["standard","primary","hollow","ghost","cta","danger","selected","selectedBold"].map(t=>e.jsx(n,{variant:t,loading:!0,children:t},t))})]}),parameters:{controls:{disable:!0}}},v={render:()=>e.jsxs(x,{gridTemplateColumns:"auto 1fr",columnGap:"12",rowGap:"32",alignItems:"center",children:[e.jsx(r,{textStyle:"heading.sm",gridColumn:"1 / -1",children:"Button"}),e.jsx(r,{textStyle:"mono.md",mr:"16",children:"iconBefore"}),e.jsxs(a,{gap:"12",children:[e.jsx(n,{iconBefore:"plus",children:"Add"}),e.jsx(n,{iconBefore:"timer",variant:"primary",children:"Start Timer"}),e.jsx(n,{iconBefore:"calendar",variant:"selectedBold",children:"2026-01-12"}),e.jsx(n,{iconBefore:"info",variant:"ghost",children:"Learn More"}),e.jsx(n,{iconBefore:"trash",variant:"danger",children:"Delete"})]}),e.jsx(r,{textStyle:"mono.md",mr:"16",children:"iconAfter"}),e.jsxs(a,{gap:"12",children:[e.jsx(n,{iconAfter:"send",variant:"cta",children:"Send Invoice"}),e.jsx(n,{iconAfter:"arrow-square-out",children:"Logout"}),e.jsx(n,{iconAfter:"download",variant:"primary",children:"Download"}),e.jsx(n,{iconAfter:"scale",variant:"hollow",children:"Weigh"}),e.jsx(n,{iconAfter:"screwdriver",variant:"selected",children:"Tools"})]}),e.jsx(We,{gridColumn:"1 / -1"}),e.jsx(r,{textStyle:"heading.sm",mr:"16",children:"IconButton"}),e.jsxs(a,{gap:"56",children:[e.jsx(o,{iconName:"download",altText:"Download"}),e.jsx(o,{iconName:"printer",variant:"hollow",altText:"Print"}),e.jsx(o,{iconName:"cloud-synced",variant:"ghost",altText:"Last sync: 3 hours ago"}),e.jsx(o,{iconName:"edit",variant:"primary",altText:"Edit"}),e.jsx(o,{iconName:"send",variant:"cta",altText:"Send"}),e.jsx(o,{iconName:"trash",variant:"danger",altText:"This cannot be undone"})]})]}),parameters:{controls:{disable:!0}}},w={render:()=>e.jsxs(x,{gridTemplateColumns:"auto 1fr",columnGap:"12",rowGap:"32",alignItems:"center",children:[e.jsx(r,{textStyle:"mono.md",mr:"16",children:"before / after"}),e.jsxs(a,{gap:"12",children:[e.jsx(n,{before:e.jsx(j,{name:"plus"}),variant:"primary",children:"New Record"}),e.jsx(n,{after:e.jsx(y,{count:3,variant:"success"}),variant:"hollow",children:"Pending"}),e.jsx(n,{before:e.jsx(y,{count:12,variant:"warning"}),after:e.jsx(j,{name:"arrow-right"}),children:"Review"}),e.jsx(n,{before:e.jsx(j,{name:"search"}),after:e.jsx(Le,{keys:["⌘","K"]}),children:"Search"})]}),e.jsx(r,{textStyle:"mono.md",mr:"16",children:"aliases"}),e.jsxs(a,{gap:"12",children:[e.jsx(n,{iconBefore:"plus",children:"Alias Before"}),e.jsx(n,{iconAfter:"arrow-right",children:"Alias After"})]})]}),parameters:{controls:{disable:!0}}},i={args:{href:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",children:"Special Link",iconAfter:"arrow-square-out"}},c={name:"Ex: Action Group",render:()=>e.jsxs(s,{gap:"8",children:[e.jsx(n,{variant:"hollow",children:"Cancel"}),e.jsx(n,{variant:"primary",children:"Confirm"})]}),parameters:{controls:{disable:!0}}},l={name:"Ex: Form Actions",render:()=>e.jsxs(s,{gap:"8",justifyContent:"flex-end",children:[e.jsx(n,{variant:"hollow",children:"Reset"}),e.jsx(n,{variant:"hollow",children:"Save Draft"}),e.jsx(n,{variant:"primary",iconAfter:"arrow-right",children:"Submit"})]}),parameters:{controls:{disable:!0}}},d={name:"Ex: Pagination",render:()=>e.jsxs(s,{gap:"8",justifyContent:"space-between",width:"280",children:[e.jsx(n,{variant:"hollow",iconBefore:"arrow-left",children:"Back"}),e.jsx(n,{variant:"primary",iconAfter:"arrow-right",children:"Next"})]}),parameters:{controls:{disable:!0}}},m={name:"Ex: CRUD Actions",render:()=>e.jsxs(s,{gap:"8",flexWrap:"wrap",children:[e.jsx(n,{variant:"primary",size:"sm",iconBefore:"plus",children:"Create"}),e.jsx(n,{variant:"hollow",size:"sm",iconBefore:"edit",children:"Edit"}),e.jsx(n,{variant:"ghost",size:"sm",iconBefore:"trash",children:"Delete"})]}),parameters:{controls:{disable:!0}}},u={name:"Ex: Form Submitting",render:()=>e.jsxs(s,{gap:"8",children:[e.jsx(n,{variant:"hollow",disabled:!0,children:"Cancel"}),e.jsx(n,{variant:"primary",loading:!0,children:"Saving..."})]}),parameters:{controls:{disable:!0}}},b={name:"Test: data-ds-component",render:()=>e.jsxs(s,{gap:"8",children:[e.jsx(n,{children:"Default"}),e.jsx(n,{"data-ds-component":"CustomButton",children:"Overridden"})]}),play:async({canvasElement:t})=>{const S=Ee(t);A(S.getByRole("button",{name:"Default"})).toHaveAttribute("data-ds-component","Button"),A(S.getByRole("button",{name:"Overridden"})).toHaveAttribute("data-ds-component","CustomButton")},parameters:{controls:{disable:!0}}},p={args:{variant:"standard",size:"md",children:"Click Me",disabled:!1,loading:!1}},Ye=["Variants","Sizes","ConditionalBreakpoints","InteractionStates","WithIcon","WithSlots","AsLink","ActionGroup","FormActions","Pagination","CrudActions","FormSubmitting","DsComponentAttribute","Interactive"];var T,z,I;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Wrap gap="12" alignItems="center">
      {(['standard', 'primary', 'hollow', 'ghost', 'cta', 'danger', 'selected', 'selectedBold'] as const).map(variant => <Button key={variant} variant={variant}>
          {variant}
        </Button>)}
    </Wrap>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(I=(z=g.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};var C,k,W;h.parameters={...h.parameters,docs:{...(C=h.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <Grid columns={3} justifyItems="center" gap="20">
      <Button size="sm">Small</Button>
      <Button size="sm" iconBefore="arrow-left">
        Small
      </Button>
      <Button size="sm" iconAfter="arrow-square-out">
        Small
      </Button>
      <Button size="md">Medium</Button>
      <Button size="md" iconBefore="arrow-left">
        Medium
      </Button>
      <Button size="md" iconAfter="arrow-square-out">
        Medium
      </Button>
      <Button size="lg">Large</Button>
      <Button size="lg" iconBefore="arrow-left">
        Large
      </Button>
      <Button size="lg" iconAfter="arrow-square-out">
        Large
      </Button>
      <Button size="xl">Extra Large</Button>
      <Button size="xl" iconBefore="arrow-left">
        Extra Large
      </Button>
      <Button size="xl" iconAfter="arrow-square-out">
        Extra Large
      </Button>
    </Grid>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(W=(k=h.parameters)==null?void 0:k.docs)==null?void 0:W.source}}};var L,D,G;B.parameters={...B.parameters,docs:{...(L=B.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <Grid w="full" h="full" position="relative" placeContent="center" alignItems="center" justifyItems="center" gap="16">
      <Button size={{
      base: 'xl',
      xs: 'lg',
      sm: 'md',
      md: 'sm'
    }} variant={{
      base: 'primary',
      xs: 'standard',
      sm: 'hollow',
      md: 'danger'
    }} iconBefore="arrows-left-right">
        Button
      </Button>
      <Button size={{
      base: 'xl',
      xs: 'lg',
      sm: 'md',
      md: 'sm'
    }} before={<Badge count={5} />}>
        Button
      </Button>
      <Button size={{
      base: 'xl',
      xs: 'lg',
      sm: 'md',
      md: 'sm'
    }} before={<Avatar name="John Doe" src="https://i.pravatar.cc/150?img=1" />}>
        Button
      </Button>
      <Button size={{
      base: 'xl',
      xs: 'lg',
      sm: 'md',
      md: 'sm'
    }} before={<Spinner />}>
        Button
      </Button>
      <Button variant="ghost" size={{
      base: 'xl',
      xs: 'lg',
      sm: 'md',
      md: 'sm'
    }} before={<Icon name="circle-check" fill="icon.success" />}>
        Button
      </Button>
      <VStack gap="4">
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
        <Text textAlign="center" textStyle="mono.sm" _after={{
        display: 'inline',
        content: {
          base: '"primary"',
          xs: '"standard"',
          sm: '"hollow"',
          md: '"danger"'
        },
        color: 'text.bold',
        fontWeight: 'bold'
      }}>
          Variant:{' '}
        </Text>
      </VStack>
      <BreakpointIndicator />
    </Grid>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(G=(D=B.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};var E,H,N;f.parameters={...f.parameters,docs:{...(E=f.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <Grid gridTemplateColumns="auto 1fr" columnGap="12" rowGap="32" alignItems="center">
      <Text textStyle="mono.md" mr="16">
        Disabled
      </Text>
      <Wrap gap="12" alignItems="center">
        {(['standard', 'primary', 'hollow', 'ghost', 'cta', 'danger', 'selected', 'selectedBold'] as const).map(variant => <Button key={variant} variant={variant} disabled>
            {variant}
          </Button>)}
      </Wrap>
      <Text textStyle="mono.md" mr="16">
        Loading
      </Text>
      <Wrap gap="12" alignItems="center">
        {(['standard', 'primary', 'hollow', 'ghost', 'cta', 'danger', 'selected', 'selectedBold'] as const).map(variant => <Button key={variant} variant={variant} loading>
            {variant}
          </Button>)}
      </Wrap>
    </Grid>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(N=(H=f.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var R,q,F;v.parameters={...v.parameters,docs:{...(R=v.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <Grid gridTemplateColumns="auto 1fr" columnGap="12" rowGap="32" alignItems="center">
      <Text textStyle="heading.sm" gridColumn="1 / -1">
        Button
      </Text>
      <Text textStyle="mono.md" mr="16">
        iconBefore
      </Text>
      <Wrap gap="12">
        <Button iconBefore="plus">Add</Button>
        <Button iconBefore="timer" variant="primary">
          Start Timer
        </Button>
        <Button iconBefore="calendar" variant="selectedBold">
          2026-01-12
        </Button>
        <Button iconBefore="info" variant="ghost">
          Learn More
        </Button>
        <Button iconBefore="trash" variant="danger">
          Delete
        </Button>
      </Wrap>
      <Text textStyle="mono.md" mr="16">
        iconAfter
      </Text>
      <Wrap gap="12">
        <Button iconAfter="send" variant="cta">
          Send Invoice
        </Button>
        <Button iconAfter="arrow-square-out">Logout</Button>
        <Button iconAfter="download" variant="primary">
          Download
        </Button>
        <Button iconAfter="scale" variant="hollow">
          Weigh
        </Button>
        <Button iconAfter="screwdriver" variant="selected">
          Tools
        </Button>
      </Wrap>

      <Divider gridColumn="1 / -1" />

      <Text textStyle="heading.sm" mr="16">
        IconButton
      </Text>
      <Wrap gap="56">
        <IconButton iconName="download" altText="Download" />
        <IconButton iconName="printer" variant="hollow" altText="Print" />
        <IconButton iconName="cloud-synced" variant="ghost" altText="Last sync: 3 hours ago" />
        <IconButton iconName="edit" variant="primary" altText="Edit" />
        <IconButton iconName="send" variant="cta" altText="Send" />
        <IconButton iconName="trash" variant="danger" altText="This cannot be undone" />
      </Wrap>
    </Grid>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(F=(q=v.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var M,P,_;w.parameters={...w.parameters,docs:{...(M=w.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <Grid gridTemplateColumns="auto 1fr" columnGap="12" rowGap="32" alignItems="center">
      <Text textStyle="mono.md" mr="16">
        before / after
      </Text>
      <Wrap gap="12">
        <Button before={<Icon name="plus" />} variant="primary">
          New Record
        </Button>
        <Button after={<Badge count={3} variant="success" />} variant="hollow">
          Pending
        </Button>
        <Button before={<Badge count={12} variant="warning" />} after={<Icon name="arrow-right" />}>
          Review
        </Button>
        <Button before={<Icon name="search" />} after={<Kbd keys={['⌘', 'K']} />}>
          Search
        </Button>
      </Wrap>
      <Text textStyle="mono.md" mr="16">
        aliases
      </Text>
      <Wrap gap="12">
        <Button iconBefore="plus">Alias Before</Button>
        <Button iconAfter="arrow-right">Alias After</Button>
      </Wrap>
    </Grid>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(_=(P=w.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var V,O,U,K,Q;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    href: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    children: 'Special Link',
    iconAfter: 'arrow-square-out'
  }
}`,...(U=(O=i.parameters)==null?void 0:O.docs)==null?void 0:U.source},description:{story:"Button with href automatically renders as anchor element",...(Q=(K=i.parameters)==null?void 0:K.docs)==null?void 0:Q.description}}};var J,X,Y,Z,$;c.parameters={...c.parameters,docs:{...(J=c.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'Ex: Action Group',
  render: () => <HStack gap="8">
      <Button variant="hollow">Cancel</Button>
      <Button variant="primary">Confirm</Button>
    </HStack>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Y=(X=c.parameters)==null?void 0:X.docs)==null?void 0:Y.source},description:{story:"Use case: Primary action button group (e.g., form submission)",...($=(Z=c.parameters)==null?void 0:Z.docs)==null?void 0:$.description}}};var ee,ne,te,re,ae;l.parameters={...l.parameters,docs:{...(ee=l.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: 'Ex: Form Actions',
  render: () => <HStack gap="8" justifyContent="flex-end">
      <Button variant="hollow">Reset</Button>
      <Button variant="hollow">Save Draft</Button>
      <Button variant="primary" iconAfter="arrow-right">
        Submit
      </Button>
    </HStack>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(te=(ne=l.parameters)==null?void 0:ne.docs)==null?void 0:te.source},description:{story:"Use case: Form actions with multiple options",...(ae=(re=l.parameters)==null?void 0:re.docs)==null?void 0:ae.description}}};var oe,se,ie,ce,le;d.parameters={...d.parameters,docs:{...(oe=d.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: 'Ex: Pagination',
  render: () => <HStack gap="8" justifyContent="space-between" width="280">
      <Button variant="hollow" iconBefore="arrow-left">
        Back
      </Button>
      <Button variant="primary" iconAfter="arrow-right">
        Next
      </Button>
    </HStack>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ie=(se=d.parameters)==null?void 0:se.docs)==null?void 0:ie.source},description:{story:"Use case: Pagination buttons",...(le=(ce=d.parameters)==null?void 0:ce.docs)==null?void 0:le.description}}};var de,me,ue,pe,xe;m.parameters={...m.parameters,docs:{...(de=m.parameters)==null?void 0:de.docs,source:{originalSource:`{
  name: 'Ex: CRUD Actions',
  render: () => <HStack gap="8" flexWrap="wrap">
      <Button variant="primary" size="sm" iconBefore="plus">
        Create
      </Button>
      <Button variant="hollow" size="sm" iconBefore="edit">
        Edit
      </Button>
      <Button variant="ghost" size="sm" iconBefore="trash">
        Delete
      </Button>
    </HStack>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ue=(me=m.parameters)==null?void 0:me.docs)==null?void 0:ue.source},description:{story:"Use case: CRUD operation buttons",...(xe=(pe=m.parameters)==null?void 0:pe.docs)==null?void 0:xe.description}}};var ge,he,Be,fe,ve;u.parameters={...u.parameters,docs:{...(ge=u.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  name: 'Ex: Form Submitting',
  render: () => <HStack gap="8">
      <Button variant="hollow" disabled>
        Cancel
      </Button>
      <Button variant="primary" loading>
        Saving...
      </Button>
    </HStack>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Be=(he=u.parameters)==null?void 0:he.docs)==null?void 0:Be.source},description:{story:"Use case: Form submitting state",...(ve=(fe=u.parameters)==null?void 0:fe.docs)==null?void 0:ve.description}}};var we,be,je;b.parameters={...b.parameters,docs:{...(we=b.parameters)==null?void 0:we.docs,source:{originalSource:`{
  name: 'Test: data-ds-component',
  render: () => <HStack gap="8">
      <Button>Default</Button>
      <Button data-ds-component="CustomButton">Overridden</Button>
    </HStack>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Emitted automatically on the root element, without an author opting in.
    expect(canvas.getByRole('button', {
      name: 'Default'
    })).toHaveAttribute('data-ds-component', 'Button');

    // An explicitly passed value arrives through rest props and wins.
    expect(canvas.getByRole('button', {
      name: 'Overridden'
    })).toHaveAttribute('data-ds-component', 'CustomButton');
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(je=(be=b.parameters)==null?void 0:be.docs)==null?void 0:je.source}}};var ye,Se,Ae,Te,ze;p.parameters={...p.parameters,docs:{...(ye=p.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    variant: 'standard',
    size: 'md',
    children: 'Click Me',
    disabled: false,
    loading: false
  }
}`,...(Ae=(Se=p.parameters)==null?void 0:Se.docs)==null?void 0:Ae.source},description:{story:"Interactive playground to test all props",...(ze=(Te=p.parameters)==null?void 0:Te.docs)==null?void 0:ze.description}}};export{c as ActionGroup,i as AsLink,B as ConditionalBreakpoints,m as CrudActions,b as DsComponentAttribute,l as FormActions,u as FormSubmitting,f as InteractionStates,p as Interactive,d as Pagination,h as Sizes,g as Variants,v as WithIcon,w as WithSlots,Ye as __namedExportsOrder,Xe as default};
