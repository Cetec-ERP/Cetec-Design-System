import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{f as Ie,w as Ce,e as A}from"./index-DPYJpPba.js";import"./index-BKyFwriW.js";import{W as o,G as x,V as ke,H as s}from"./dsComponent-BOaIIHJG.js";import{A as We}from"./Avatar-BTz-7I9u.js";import{B as y}from"./Badge-Di8ndFUP.js";import{B as Ge}from"./BreakpointIndicator-bfPpXDXl.js";import{D as Le}from"./Divider-D4vg9lhL.js";import{I as j}from"./Icon-BuCMhDjk.js";import"./IconConfig-BiZAaWNE.js";import{I as a}from"./IconButton-CplOGN9E.js";import{K as De}from"./Kbd-DE_2kOz_.js";import{S as Ee}from"./Spinner-DN0O-sa5.js";import{T as n}from"./Text-Do3oYkTU.js";import{B as t}from"./Button-Bmx3caeT.js";import"./_commonjsHelpers-CqkleIqs.js";import"./mq.hook-xG5a6_yz.js";import"./breakpoints-DU_5_Zhy.js";import"./index-DQmpdOPX.js";import"./Tag-Uvb-5QsK.js";import"./Tooltip-4cqSbA9J.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";import"./FieldContext-D6URyQos.js";const st={title:"Components/Button",component:t,parameters:{layout:"centered",docs:{description:{component:`Button component with comprehensive variant support.

Features:
- Multiple visual variants (standard, primary, hollow, ghost, cta, danger)
- Four sizes (sm, md, lg, xl)
- Slot support via \`before\` and \`after\`, with icon aliases for shorthand
- Loading and disabled states
- Auto-renders as anchor when href is provided`}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["standard","primary","hollow","ghost","cta","danger","selected","selectedBold"],description:"Visual style variants",table:{defaultValue:{summary:"standard"}}},size:{control:"select",options:["sm","md","lg","xl"],description:"Button size",table:{defaultValue:{summary:"md"}}},disabled:{control:"boolean",description:"Disabled state - non-interactive"},loading:{control:"boolean",description:"Loading state - shows spinner and disables interaction"},iconBefore:{control:"select",options:[void 0,"plus","check","arrow-left","edit","search"],description:"Legacy shorthand icon name for before slot"},iconAfter:{control:"select",options:[void 0,"arrow-right","chevron-down","arrow-square-out"],description:"Legacy shorthand icon name for after slot"},before:{control:!1,description:"Preferred slot for content before button text"},after:{control:!1,description:"Preferred slot for content after button text"},href:{control:"text",description:"When provided, button renders as anchor element"},children:{control:"text",description:"Button content"}},args:{children:"Button",onClick:Ie()}},g={render:()=>e.jsx(o,{gap:"12",alignItems:"center",children:["standard","primary","hollow","ghost","cta","danger","selected","selectedBold"].map(r=>e.jsx(t,{variant:r,children:r},r))}),parameters:{controls:{disable:!0}}},h={render:()=>e.jsxs(x,{columns:3,justifyItems:"center",gap:"20",children:[e.jsx(t,{size:"sm",children:"Small"}),e.jsx(t,{size:"sm",iconBefore:"arrow-left",children:"Small"}),e.jsx(t,{size:"sm",iconAfter:"arrow-square-out",children:"Small"}),e.jsx(t,{size:"md",children:"Medium"}),e.jsx(t,{size:"md",iconBefore:"arrow-left",children:"Medium"}),e.jsx(t,{size:"md",iconAfter:"arrow-square-out",children:"Medium"}),e.jsx(t,{size:"lg",children:"Large"}),e.jsx(t,{size:"lg",iconBefore:"arrow-left",children:"Large"}),e.jsx(t,{size:"lg",iconAfter:"arrow-square-out",children:"Large"}),e.jsx(t,{size:"xl",children:"Extra Large"}),e.jsx(t,{size:"xl",iconBefore:"arrow-left",children:"Extra Large"}),e.jsx(t,{size:"xl",iconAfter:"arrow-square-out",children:"Extra Large"})]}),parameters:{controls:{disable:!0}}},B={render:()=>e.jsxs(x,{w:"full",h:"full",position:"relative",placeContent:"center",alignItems:"center",justifyItems:"center",gap:"16",children:[e.jsx(t,{size:{base:"xl",xs:"lg",sm:"md",md:"sm"},variant:{base:"primary",xs:"standard",sm:"hollow",md:"danger"},iconBefore:"arrows-left-right",children:"Button"}),e.jsx(t,{size:{base:"xl",xs:"lg",sm:"md",md:"sm"},before:e.jsx(y,{count:5}),children:"Button"}),e.jsx(t,{size:{base:"xl",xs:"lg",sm:"md",md:"sm"},before:e.jsx(We,{name:"John Doe",src:"https://i.pravatar.cc/150?img=1"}),children:"Button"}),e.jsx(t,{size:{base:"xl",xs:"lg",sm:"md",md:"sm"},before:e.jsx(Ee,{}),children:"Button"}),e.jsx(t,{variant:"ghost",size:{base:"xl",xs:"lg",sm:"md",md:"sm"},before:e.jsx(j,{name:"circle-check",fill:"icon.success"}),children:"Button"}),e.jsxs(ke,{gap:"4",children:[e.jsxs(n,{textAlign:"center",textStyle:"mono.sm",_after:{display:"inline",content:{base:'"xl"',xs:'"lg"',sm:'"md"',md:'"sm"'},color:"text.bold",fontWeight:"bold"},children:["Size:"," "]}),e.jsxs(n,{textAlign:"center",textStyle:"mono.sm",_after:{display:"inline",content:{base:'"primary"',xs:'"standard"',sm:'"hollow"',md:'"danger"'},color:"text.bold",fontWeight:"bold"},children:["Variant:"," "]})]}),e.jsx(Ge,{})]}),parameters:{controls:{disable:!0}}},f={render:()=>e.jsxs(x,{gridTemplateColumns:"auto 1fr",columnGap:"12",rowGap:"32",alignItems:"center",children:[e.jsx(n,{textStyle:"mono.md",mr:"16",children:"Disabled"}),e.jsx(o,{gap:"12",alignItems:"center",children:["standard","primary","hollow","ghost","cta","danger","selected","selectedBold"].map(r=>e.jsx(t,{variant:r,disabled:!0,children:r},r))}),e.jsx(n,{textStyle:"mono.md",mr:"16",children:"Loading"}),e.jsx(o,{gap:"12",alignItems:"center",children:["standard","primary","hollow","ghost","cta","danger","selected","selectedBold"].map(r=>e.jsx(t,{variant:r,loading:!0,children:r},r))})]}),parameters:{controls:{disable:!0}}},v={render:()=>e.jsxs(x,{gridTemplateColumns:"auto 1fr",columnGap:"12",rowGap:"32",alignItems:"center",children:[e.jsx(n,{textStyle:"heading.sm",gridColumn:"1 / -1",children:"Button"}),e.jsx(n,{textStyle:"mono.md",mr:"16",children:"iconBefore"}),e.jsxs(o,{gap:"12",children:[e.jsx(t,{iconBefore:"plus",children:"Add"}),e.jsx(t,{iconBefore:"timer",variant:"primary",children:"Start Timer"}),e.jsx(t,{iconBefore:"calendar",variant:"selectedBold",children:"2026-01-12"}),e.jsx(t,{iconBefore:"info",variant:"ghost",children:"Learn More"}),e.jsx(t,{iconBefore:"trash",variant:"danger",children:"Delete"})]}),e.jsx(n,{textStyle:"mono.md",mr:"16",children:"iconAfter"}),e.jsxs(o,{gap:"12",children:[e.jsx(t,{iconAfter:"send",variant:"cta",children:"Send Invoice"}),e.jsx(t,{iconAfter:"arrow-square-out",children:"Logout"}),e.jsx(t,{iconAfter:"download",variant:"primary",children:"Download"}),e.jsx(t,{iconAfter:"scale",variant:"hollow",children:"Weigh"}),e.jsx(t,{iconAfter:"screwdriver",variant:"selected",children:"Tools"})]}),e.jsx(Le,{gridColumn:"1 / -1"}),e.jsx(n,{textStyle:"heading.sm",mr:"16",children:"IconButton"}),e.jsxs(o,{gap:"56",children:[e.jsx(a,{iconName:"download",altText:"Download"}),e.jsx(a,{iconName:"printer",variant:"hollow",altText:"Print"}),e.jsx(a,{iconName:"cloud-synced",variant:"ghost",altText:"Last sync: 3 hours ago"}),e.jsx(a,{iconName:"edit",variant:"primary",altText:"Edit"}),e.jsx(a,{iconName:"send",variant:"cta",altText:"Send"}),e.jsx(a,{iconName:"trash",variant:"danger",altText:"This cannot be undone"})]})]}),parameters:{controls:{disable:!0}}},w={render:()=>e.jsxs(x,{gridTemplateColumns:"auto 1fr",columnGap:"12",rowGap:"32",alignItems:"center",children:[e.jsx(n,{textStyle:"mono.md",mr:"16",children:"before / after"}),e.jsxs(o,{gap:"12",children:[e.jsx(t,{before:e.jsx(j,{name:"plus"}),variant:"primary",children:"New Record"}),e.jsx(t,{after:e.jsx(y,{count:3,variant:"success"}),variant:"hollow",children:"Pending"}),e.jsx(t,{before:e.jsx(y,{count:12,variant:"warning"}),after:e.jsx(j,{name:"arrow-right"}),children:"Review"}),e.jsx(t,{before:e.jsx(j,{name:"search"}),after:e.jsx(De,{keys:["⌘","K"]}),children:"Search"})]}),e.jsx(n,{textStyle:"mono.md",mr:"16",children:"aliases"}),e.jsxs(o,{gap:"12",children:[e.jsx(t,{iconBefore:"plus",children:"Alias Before"}),e.jsx(t,{iconAfter:"arrow-right",children:"Alias After"})]})]}),parameters:{controls:{disable:!0}}},i={args:{href:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",children:"Special Link",iconAfter:"arrow-square-out"}},c={name:"Ex: Action Group",render:()=>e.jsxs(s,{gap:"8",children:[e.jsx(t,{variant:"hollow",children:"Cancel"}),e.jsx(t,{variant:"primary",children:"Confirm"})]}),parameters:{controls:{disable:!0}}},l={name:"Ex: Form Actions",render:()=>e.jsxs(s,{gap:"8",justifyContent:"flex-end",children:[e.jsx(t,{variant:"hollow",children:"Reset"}),e.jsx(t,{variant:"hollow",children:"Save Draft"}),e.jsx(t,{variant:"primary",iconAfter:"arrow-right",children:"Submit"})]}),parameters:{controls:{disable:!0}}},d={name:"Ex: Pagination",render:()=>e.jsxs(s,{gap:"8",justifyContent:"space-between",width:"280",children:[e.jsx(t,{variant:"hollow",iconBefore:"arrow-left",children:"Back"}),e.jsx(t,{variant:"primary",iconAfter:"arrow-right",children:"Next"})]}),parameters:{controls:{disable:!0}}},m={name:"Ex: CRUD Actions",render:()=>e.jsxs(s,{gap:"8",flexWrap:"wrap",children:[e.jsx(t,{variant:"primary",size:"sm",iconBefore:"plus",children:"Create"}),e.jsx(t,{variant:"hollow",size:"sm",iconBefore:"edit",children:"Edit"}),e.jsx(t,{variant:"ghost",size:"sm",iconBefore:"trash",children:"Delete"})]}),parameters:{controls:{disable:!0}}},u={name:"Ex: Form Submitting",render:()=>e.jsxs(s,{gap:"8",children:[e.jsx(t,{variant:"hollow",disabled:!0,children:"Cancel"}),e.jsx(t,{variant:"primary",loading:!0,children:"Saving..."})]}),parameters:{controls:{disable:!0}}},b={name:"Test: data-ds-component",render:()=>e.jsxs(s,{gap:"8",children:[e.jsx(t,{children:"Default"}),e.jsx(t,{"data-ds-component":"CustomButton",children:"Overridden"})]}),play:async({canvasElement:r})=>{const S=Ce(r);A(S.getByRole("button",{name:"Default"})).toHaveAttribute("data-ds-component","Button"),A(S.getByRole("button",{name:"Overridden"})).toHaveAttribute("data-ds-component","CustomButton")},parameters:{controls:{disable:!0}}},p={args:{variant:"standard",size:"md",children:"Click Me",disabled:!1,loading:!1}};var z,T,I;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(I=(T=g.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var C,k,W;h.parameters={...h.parameters,docs:{...(C=h.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(W=(k=h.parameters)==null?void 0:k.docs)==null?void 0:W.source}}};var G,L,D;B.parameters={...B.parameters,docs:{...(G=B.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(D=(L=B.parameters)==null?void 0:L.docs)==null?void 0:D.source}}};var E,H,N;f.parameters={...f.parameters,docs:{...(E=f.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(F=(q=v.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var P,M,V;w.parameters={...w.parameters,docs:{...(P=w.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(V=(M=w.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};var U,_,K,O,Q;i.parameters={...i.parameters,docs:{...(U=i.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    href: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    children: 'Special Link',
    iconAfter: 'arrow-square-out'
  }
}`,...(K=(_=i.parameters)==null?void 0:_.docs)==null?void 0:K.source},description:{story:"Button with href automatically renders as anchor element",...(Q=(O=i.parameters)==null?void 0:O.docs)==null?void 0:Q.description}}};var J,X,Y,Z,$;c.parameters={...c.parameters,docs:{...(J=c.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Y=(X=c.parameters)==null?void 0:X.docs)==null?void 0:Y.source},description:{story:"Use case: Primary action button group (e.g., form submission)",...($=(Z=c.parameters)==null?void 0:Z.docs)==null?void 0:$.description}}};var ee,te,re,ne,oe;l.parameters={...l.parameters,docs:{...(ee=l.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(re=(te=l.parameters)==null?void 0:te.docs)==null?void 0:re.source},description:{story:"Use case: Form actions with multiple options",...(oe=(ne=l.parameters)==null?void 0:ne.docs)==null?void 0:oe.description}}};var ae,se,ie,ce,le;d.parameters={...d.parameters,docs:{...(ae=d.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(je=(be=b.parameters)==null?void 0:be.docs)==null?void 0:je.source}}};var ye,Se,Ae,ze,Te;p.parameters={...p.parameters,docs:{...(ye=p.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    variant: 'standard',
    size: 'md',
    children: 'Click Me',
    disabled: false,
    loading: false
  }
}`,...(Ae=(Se=p.parameters)==null?void 0:Se.docs)==null?void 0:Ae.source},description:{story:"Interactive playground to test all props",...(Te=(ze=p.parameters)==null?void 0:ze.docs)==null?void 0:Te.description}}};const it=["Variants","Sizes","ConditionalBreakpoints","InteractionStates","WithIcon","WithSlots","AsLink","ActionGroup","FormActions","Pagination","CrudActions","FormSubmitting","DsComponentAttribute","Interactive"];export{c as ActionGroup,i as AsLink,B as ConditionalBreakpoints,m as CrudActions,b as DsComponentAttribute,l as FormActions,u as FormSubmitting,f as InteractionStates,p as Interactive,d as Pagination,h as Sizes,g as Variants,v as WithIcon,w as WithSlots,it as __namedExportsOrder,st as default};
