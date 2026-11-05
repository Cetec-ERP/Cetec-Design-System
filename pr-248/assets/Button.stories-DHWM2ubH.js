import{j as e,W as o,G as B,a as C,V as _e,T as r,H as c}from"./iframe-C1CYHGUC.js";import{s as Oe}from"./avatars-BdtzB-ZU.js";import{A as Ve}from"./Avatar-Ca8lvUX2.js";import{B as I}from"./Badge-B2t7aaBR.js";import{B as Ue}from"./BreakpointIndicator-CacZ8AyM.js";import{D as Ke}from"./Divider-CUBbHY8j.js";import{I as i}from"./IconButton-cp8-aoWx.js";import{K as Qe}from"./Kbd-CMrs9Lic.js";import{S as Ye}from"./Spinner-fChgDlWh.js";import{B as t}from"./Button-BBghux6D.js";import"./preload-helper-D8YtVqxL.js";import"./mq.hook-CoT2CKU6.js";import"./breakpoints-DU_5_Zhy.js";import"./Tag-ZDjf2o3i.js";import"./FieldContext-CQgqkVQc.js";const{expect:a,fn:Pe,userEvent:z,waitFor:Je,within:k}=__STORYBOOK_MODULE_TEST__,pt={title:"Components/Button",component:t,parameters:{layout:"centered",docs:{description:{component:`Button component with comprehensive variant support.

Features:
- Multiple visual variants (standard, primary, hollow, ghost, cta, danger)
- Four sizes (sm, md, lg, xl)
- Slot support via \`before\` and \`after\`, with icon aliases for shorthand
- Loading and disabled states
- Auto-renders as anchor when href is provided`}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["standard","primary","hollow","ghost","cta","danger","selected","selectedBold"],description:"Visual style variants",table:{defaultValue:{summary:"standard"}}},size:{control:"select",options:["sm","md","lg","xl"],description:"Button size",table:{defaultValue:{summary:"md"}}},disabled:{control:"boolean",description:"Disabled state - non-interactive"},loading:{control:"boolean",description:"Loading state - shows spinner and disables interaction"},iconBefore:{control:"select",options:[void 0,"plus","check","arrow-left","edit","search"],description:"Legacy shorthand icon name for before slot"},iconAfter:{control:"select",options:[void 0,"arrow-right","chevron-down","arrow-square-out"],description:"Legacy shorthand icon name for after slot"},before:{control:!1,description:"Preferred slot for content before button text"},after:{control:!1,description:"Preferred slot for content after button text"},href:{control:"text",description:"When provided, button renders as anchor element"},children:{control:"text",description:"Button content"}},args:{children:"Button",onClick:Pe()}},b={render:()=>e.jsx(o,{gap:"12",alignItems:"center",children:["standard","primary","hollow","ghost","cta","danger","selected","selectedBold"].map(n=>e.jsx(t,{variant:n,children:n},n))}),parameters:{controls:{disable:!0}}},v={render:()=>e.jsxs(B,{columns:3,justifyItems:"center",gap:"20",children:[e.jsx(t,{size:"sm",children:"Small"}),e.jsx(t,{size:"sm",iconBefore:"arrow-left",children:"Small"}),e.jsx(t,{size:"sm",iconAfter:"arrow-square-out",children:"Small"}),e.jsx(t,{size:"md",children:"Medium"}),e.jsx(t,{size:"md",iconBefore:"arrow-left",children:"Medium"}),e.jsx(t,{size:"md",iconAfter:"arrow-square-out",children:"Medium"}),e.jsx(t,{size:"lg",children:"Large"}),e.jsx(t,{size:"lg",iconBefore:"arrow-left",children:"Large"}),e.jsx(t,{size:"lg",iconAfter:"arrow-square-out",children:"Large"}),e.jsx(t,{size:"xl",children:"Extra Large"}),e.jsx(t,{size:"xl",iconBefore:"arrow-left",children:"Extra Large"}),e.jsx(t,{size:"xl",iconAfter:"arrow-square-out",children:"Extra Large"})]}),parameters:{controls:{disable:!0}}},w={render:()=>e.jsxs(B,{w:"full",h:"full",position:"relative",placeContent:"center",alignItems:"center",justifyItems:"center",gap:"16",children:[e.jsx(t,{size:{base:"xl",xs:"lg",sm:"md",md:"sm"},variant:{base:"primary",xs:"standard",sm:"hollow",md:"danger"},iconBefore:"arrows-left-right",children:"Button"}),e.jsx(t,{size:{base:"xl",xs:"lg",sm:"md",md:"sm"},before:e.jsx(I,{count:5}),children:"Button"}),e.jsx(t,{size:{base:"xl",xs:"lg",sm:"md",md:"sm"},before:e.jsx(Ve,{name:"John Doe",src:Oe.user1}),children:"Button"}),e.jsx(t,{size:{base:"xl",xs:"lg",sm:"md",md:"sm"},before:e.jsx(Ye,{}),children:"Button"}),e.jsx(t,{variant:"ghost",size:{base:"xl",xs:"lg",sm:"md",md:"sm"},before:e.jsx(C,{name:"circle-check",fill:"icon.success"}),children:"Button"}),e.jsxs(_e,{gap:"4",children:[e.jsxs(r,{textAlign:"center",textStyle:"mono.sm",_after:{display:"inline",content:{base:'"xl"',xs:'"lg"',sm:'"md"',md:'"sm"'},color:"text.bold",fontWeight:"bold"},children:["Size:"," "]}),e.jsxs(r,{textAlign:"center",textStyle:"mono.sm",_after:{display:"inline",content:{base:'"primary"',xs:'"standard"',sm:'"hollow"',md:'"danger"'},color:"text.bold",fontWeight:"bold"},children:["Variant:"," "]})]}),e.jsx(Ue,{})]}),parameters:{controls:{disable:!0}}},y={render:()=>e.jsxs(B,{gridTemplateColumns:"auto 1fr",columnGap:"12",rowGap:"32",alignItems:"center",children:[e.jsx(r,{textStyle:"mono.md",mr:"16",children:"Disabled"}),e.jsx(o,{gap:"12",alignItems:"center",children:["standard","primary","hollow","ghost","cta","danger","selected","selectedBold"].map(n=>e.jsx(t,{variant:n,disabled:!0,children:n},n))}),e.jsx(r,{textStyle:"mono.md",mr:"16",children:"Loading"}),e.jsx(o,{gap:"12",alignItems:"center",children:["standard","primary","hollow","ghost","cta","danger","selected","selectedBold"].map(n=>e.jsx(t,{variant:n,loading:!0,children:n},n))})]}),parameters:{controls:{disable:!0}}},j={render:()=>e.jsxs(B,{gridTemplateColumns:"auto 1fr",columnGap:"12",rowGap:"32",alignItems:"center",children:[e.jsx(r,{textStyle:"heading.sm",gridColumn:"1 / -1",children:"Button"}),e.jsx(r,{textStyle:"mono.md",mr:"16",children:"iconBefore"}),e.jsxs(o,{gap:"12",children:[e.jsx(t,{iconBefore:"plus",children:"Add"}),e.jsx(t,{iconBefore:"timer",variant:"primary",children:"Start Timer"}),e.jsx(t,{iconBefore:"calendar",variant:"selectedBold",children:"2026-01-12"}),e.jsx(t,{iconBefore:"info",variant:"ghost",children:"Learn More"}),e.jsx(t,{iconBefore:"trash",variant:"danger",children:"Delete"})]}),e.jsx(r,{textStyle:"mono.md",mr:"16",children:"iconAfter"}),e.jsxs(o,{gap:"12",children:[e.jsx(t,{iconAfter:"send",variant:"cta",children:"Send Invoice"}),e.jsx(t,{iconAfter:"arrow-square-out",children:"Logout"}),e.jsx(t,{iconAfter:"download",variant:"primary",children:"Download"}),e.jsx(t,{iconAfter:"scale",variant:"hollow",children:"Weigh"}),e.jsx(t,{iconAfter:"screwdriver",variant:"selected",children:"Tools"})]}),e.jsx(Ke,{gridColumn:"1 / -1"}),e.jsx(r,{textStyle:"heading.sm",mr:"16",children:"IconButton"}),e.jsxs(o,{gap:"56",children:[e.jsx(i,{iconName:"download",altText:"Download"}),e.jsx(i,{iconName:"printer",variant:"hollow",altText:"Print"}),e.jsx(i,{iconName:"cloud-synced",variant:"ghost",altText:"Last sync: 3 hours ago"}),e.jsx(i,{iconName:"edit",variant:"primary",altText:"Edit"}),e.jsx(i,{iconName:"send",variant:"cta",altText:"Send"}),e.jsx(i,{iconName:"trash",variant:"danger",altText:"This cannot be undone"})]})]}),parameters:{controls:{disable:!0}}},S={render:()=>e.jsxs(B,{gridTemplateColumns:"auto 1fr",columnGap:"12",rowGap:"32",alignItems:"center",children:[e.jsx(r,{textStyle:"mono.md",mr:"16",children:"before / after"}),e.jsxs(o,{gap:"12",children:[e.jsx(t,{before:e.jsx(C,{name:"plus"}),variant:"primary",children:"New Record"}),e.jsx(t,{after:e.jsx(I,{count:3,variant:"success"}),variant:"hollow",children:"Pending"}),e.jsx(t,{before:e.jsx(I,{count:12,variant:"warning"}),after:e.jsx(C,{name:"arrow-right"}),children:"Review"}),e.jsx(t,{before:e.jsx(C,{name:"search"}),after:e.jsx(Qe,{keys:["⌘","K"]}),children:"Search"})]}),e.jsx(r,{textStyle:"mono.md",mr:"16",children:"aliases"}),e.jsxs(o,{gap:"12",children:[e.jsx(t,{iconBefore:"plus",children:"Alias Before"}),e.jsx(t,{iconAfter:"arrow-right",children:"Alias After"})]})]}),parameters:{controls:{disable:!0}}},d={args:{href:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",children:"Special Link",iconAfter:"arrow-square-out"}},l={name:"Ex: Action Group",render:()=>e.jsxs(c,{gap:"8",children:[e.jsx(t,{variant:"hollow",children:"Cancel"}),e.jsx(t,{variant:"primary",children:"Confirm"})]}),parameters:{controls:{disable:!0}}},m={name:"Ex: Form Actions",render:()=>e.jsxs(c,{gap:"8",justifyContent:"flex-end",children:[e.jsx(t,{variant:"hollow",children:"Reset"}),e.jsx(t,{variant:"hollow",children:"Save Draft"}),e.jsx(t,{variant:"primary",iconAfter:"arrow-right",children:"Submit"})]}),parameters:{controls:{disable:!0}}},u={name:"Ex: Pagination",render:()=>e.jsxs(c,{gap:"8",justifyContent:"space-between",width:"280",children:[e.jsx(t,{variant:"hollow",iconBefore:"arrow-left",children:"Back"}),e.jsx(t,{variant:"primary",iconAfter:"arrow-right",children:"Next"})]}),parameters:{controls:{disable:!0}}},p={name:"Ex: CRUD Actions",render:()=>e.jsxs(c,{gap:"8",flexWrap:"wrap",children:[e.jsx(t,{variant:"primary",size:"sm",iconBefore:"plus",children:"Create"}),e.jsx(t,{variant:"hollow",size:"sm",iconBefore:"edit",children:"Edit"}),e.jsx(t,{variant:"ghost",size:"sm",iconBefore:"trash",children:"Delete"})]}),parameters:{controls:{disable:!0}}},h={name:"Ex: Form Submitting",render:()=>e.jsxs(c,{gap:"8",children:[e.jsx(t,{variant:"hollow",disabled:!0,children:"Cancel"}),e.jsx(t,{variant:"primary",loading:!0,children:"Saving..."})]}),parameters:{controls:{disable:!0}}},x={name:"Ex: Disabled With Reason",render:()=>e.jsxs(c,{gap:"8",children:[e.jsx(t,{variant:"primary",disabledReason:"Closed orders can't be edited. Reopen the order first.",children:"Edit order"}),e.jsx(t,{disabledReason:"You need the Purchasing role to approve.",children:"Approve"}),e.jsx(i,{iconName:"trash",altText:"Delete order",variant:"danger",disabledReason:"Orders with shipments can't be deleted."})]}),parameters:{controls:{disable:!0}}},A={name:"Test: disabledReason",args:{children:"Edit order",disabledReason:"Closed orders can't be edited.",onClick:Pe()},play:async({args:n,canvasElement:f})=>{const s=k(f).getByRole("button",{name:"Edit order"});await a(s).toHaveAttribute("aria-disabled","true"),await a(s).not.toHaveAttribute("disabled"),await a(s).toHaveAccessibleDescription("Closed orders can't be edited."),s.focus(),await z.keyboard("{Enter}"),await z.keyboard(" "),await a(n.onClick).not.toHaveBeenCalled(),s.blur(),await z.tab(),await a(s).toHaveFocus();const Me=await k(document.body).findByRole("tooltip");await a(Me).toHaveTextContent("Closed orders can't be edited."),s.blur(),await Je(()=>a(k(document.body).queryByRole("tooltip")).toBeNull())}},T={name:"Test: data-ds-component",render:()=>e.jsxs(c,{gap:"8",children:[e.jsx(t,{children:"Default"}),e.jsx(t,{"data-ds-component":"CustomButton",children:"Overridden"})]}),play:async({canvasElement:n})=>{const f=k(n);a(f.getByRole("button",{name:"Default"})).toHaveAttribute("data-ds-component","Button"),a(f.getByRole("button",{name:"Overridden"})).toHaveAttribute("data-ds-component","CustomButton")},parameters:{controls:{disable:!0}}},g={args:{variant:"standard",size:"md",children:"Click Me",disabled:!1,loading:!1}},ht=["Variants","Sizes","ConditionalBreakpoints","InteractionStates","WithIcon","WithSlots","AsLink","ActionGroup","FormActions","Pagination","CrudActions","FormSubmitting","DisabledWithReason","DisabledReasonBehavior","DsComponentAttribute","Interactive"];var E,D,R;b.parameters={...b.parameters,docs:{...(E=b.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(R=(D=b.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var W,H,L;v.parameters={...v.parameters,docs:{...(W=v.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(L=(H=v.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var G,N,F;w.parameters={...w.parameters,docs:{...(G=w.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
    }} before={<Avatar name="John Doe" src={sampleAvatars.user1} />}>
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
}`,...(F=(N=w.parameters)==null?void 0:N.docs)==null?void 0:F.source}}};var q,P,M;y.parameters={...y.parameters,docs:{...(q=y.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(M=(P=y.parameters)==null?void 0:P.docs)==null?void 0:M.source}}};var _,O,V;j.parameters={...j.parameters,docs:{...(_=j.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(V=(O=j.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};var U,K,Q;S.parameters={...S.parameters,docs:{...(U=S.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(Q=(K=S.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var Y,J,X,Z,$;d.parameters={...d.parameters,docs:{...(Y=d.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    href: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    children: 'Special Link',
    iconAfter: 'arrow-square-out'
  }
}`,...(X=(J=d.parameters)==null?void 0:J.docs)==null?void 0:X.source},description:{story:"Button with href automatically renders as anchor element",...($=(Z=d.parameters)==null?void 0:Z.docs)==null?void 0:$.description}}};var ee,te,ne,re,ae;l.parameters={...l.parameters,docs:{...(ee=l.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ne=(te=l.parameters)==null?void 0:te.docs)==null?void 0:ne.source},description:{story:"Use case: Primary action button group (e.g., form submission)",...(ae=(re=l.parameters)==null?void 0:re.docs)==null?void 0:ae.description}}};var oe,se,ie,ce,de;m.parameters={...m.parameters,docs:{...(oe=m.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ie=(se=m.parameters)==null?void 0:se.docs)==null?void 0:ie.source},description:{story:"Use case: Form actions with multiple options",...(de=(ce=m.parameters)==null?void 0:ce.docs)==null?void 0:de.description}}};var le,me,ue,pe,he;u.parameters={...u.parameters,docs:{...(le=u.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(ue=(me=u.parameters)==null?void 0:me.docs)==null?void 0:ue.source},description:{story:"Use case: Pagination buttons",...(he=(pe=u.parameters)==null?void 0:pe.docs)==null?void 0:he.description}}};var xe,ge,Be,fe,be;p.parameters={...p.parameters,docs:{...(xe=p.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(Be=(ge=p.parameters)==null?void 0:ge.docs)==null?void 0:Be.source},description:{story:"Use case: CRUD operation buttons",...(be=(fe=p.parameters)==null?void 0:fe.docs)==null?void 0:be.description}}};var ve,we,ye,je,Se;h.parameters={...h.parameters,docs:{...(ve=h.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(ye=(we=h.parameters)==null?void 0:we.docs)==null?void 0:ye.source},description:{story:"Use case: Form submitting state",...(Se=(je=h.parameters)==null?void 0:je.docs)==null?void 0:Se.description}}};var Ae,Te,Ce,ke,ze;x.parameters={...x.parameters,docs:{...(Ae=x.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  name: 'Ex: Disabled With Reason',
  render: () => <HStack gap="8">
      <Button variant="primary" disabledReason="Closed orders can't be edited. Reopen the order first.">
        Edit order
      </Button>
      <Button disabledReason="You need the Purchasing role to approve.">
        Approve
      </Button>
      <IconButton iconName="trash" altText="Delete order" variant="danger" disabledReason="Orders with shipments can't be deleted." />
    </HStack>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Ce=(Te=x.parameters)==null?void 0:Te.docs)==null?void 0:Ce.source},description:{story:`Use case: an action the user can't take right now, with the reason. The
button stays focusable, so keyboard and screen-reader users get the reason.`,...(ze=(ke=x.parameters)==null?void 0:ke.docs)==null?void 0:ze.description}}};var Ie,Ee,De;A.parameters={...A.parameters,docs:{...(Ie=A.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  name: 'Test: disabledReason',
  args: {
    children: 'Edit order',
    disabledReason: "Closed orders can't be edited.",
    onClick: fn()
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', {
      name: 'Edit order'
    });

    // Disabled for assistive tech and styling, but still in the tab order.
    await expect(button).toHaveAttribute('aria-disabled', 'true');
    await expect(button).not.toHaveAttribute('disabled');
    await expect(button).toHaveAccessibleDescription("Closed orders can't be edited.");

    // The recipe turns off pointer events. Keyboard activation is blocked too.
    button.focus();
    await userEvent.keyboard('{Enter}');
    await userEvent.keyboard(' ');
    await expect(args.onClick).not.toHaveBeenCalled();

    // Keyboard focus shows the reason.
    button.blur();
    await userEvent.tab();
    await expect(button).toHaveFocus();
    const tooltip = await within(document.body).findByRole('tooltip');
    await expect(tooltip).toHaveTextContent("Closed orders can't be edited.");
    button.blur();
    await waitFor(() => expect(within(document.body).queryByRole('tooltip')).toBeNull());
  }
}`,...(De=(Ee=A.parameters)==null?void 0:Ee.docs)==null?void 0:De.source}}};var Re,We,He;T.parameters={...T.parameters,docs:{...(Re=T.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(He=(We=T.parameters)==null?void 0:We.docs)==null?void 0:He.source}}};var Le,Ge,Ne,Fe,qe;g.parameters={...g.parameters,docs:{...(Le=g.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  args: {
    variant: 'standard',
    size: 'md',
    children: 'Click Me',
    disabled: false,
    loading: false
  }
}`,...(Ne=(Ge=g.parameters)==null?void 0:Ge.docs)==null?void 0:Ne.source},description:{story:"Interactive playground to test all props",...(qe=(Fe=g.parameters)==null?void 0:Fe.docs)==null?void 0:qe.description}}};export{l as ActionGroup,d as AsLink,w as ConditionalBreakpoints,p as CrudActions,A as DisabledReasonBehavior,x as DisabledWithReason,T as DsComponentAttribute,m as FormActions,h as FormSubmitting,y as InteractionStates,g as Interactive,u as Pagination,v as Sizes,b as Variants,j as WithIcon,S as WithSlots,ht as __namedExportsOrder,pt as default};
