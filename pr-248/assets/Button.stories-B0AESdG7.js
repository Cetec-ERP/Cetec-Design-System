import{j as e,W as i,G as w,a as z,V as Xe,T as o,H as m,r as Ze}from"./iframe-CMFrGL-w.js";import{s as $e}from"./avatars-BdtzB-ZU.js";import{A as et}from"./Avatar-B3SNDcCi.js";import{B as I}from"./Badge-Dvag6Z2o.js";import{B as tt}from"./BreakpointIndicator-BwKiSe5x.js";import{D as nt}from"./Divider-BtPzuDO6.js";import{I as d}from"./IconButton-CEZm7JJz.js";import{K as at}from"./Kbd-DAmoOaFA.js";import{S as rt}from"./Spinner-CODAGd6X.js";import{B as t}from"./Button-DfO0RAZB.js";import"./preload-helper-D8YtVqxL.js";import"./mq.hook-DgYMdKiz.js";import"./breakpoints-DU_5_Zhy.js";import"./Tag-BFJOlI0-.js";import"./FieldContext-DRkn5wtm.js";const{expect:a,fn:Ke,userEvent:l,waitFor:D,within:u}=__STORYBOOK_MODULE_TEST__,vt={title:"Components/Button",component:t,parameters:{layout:"centered",docs:{description:{component:`Button component with comprehensive variant support.

Features:
- Multiple visual variants (standard, primary, hollow, ghost, cta, danger)
- Four sizes (sm, md, lg, xl)
- Slot support via \`before\` and \`after\`, with icon aliases for shorthand
- Loading and disabled states
- Auto-renders as anchor when href is provided`}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["standard","primary","hollow","ghost","cta","danger","selected","selectedBold"],description:"Visual style variants",table:{defaultValue:{summary:"standard"}}},size:{control:"select",options:["sm","md","lg","xl"],description:"Button size",table:{defaultValue:{summary:"md"}}},disabled:{control:"boolean",description:"Disabled state - non-interactive"},loading:{control:"boolean",description:"Loading state - shows spinner and disables interaction"},iconBefore:{control:"select",options:[void 0,"plus","check","arrow-left","edit","search"],description:"Legacy shorthand icon name for before slot"},iconAfter:{control:"select",options:[void 0,"arrow-right","chevron-down","arrow-square-out"],description:"Legacy shorthand icon name for after slot"},before:{control:!1,description:"Preferred slot for content before button text"},after:{control:!1,description:"Preferred slot for content after button text"},href:{control:"text",description:"When provided, button renders as anchor element"},children:{control:"text",description:"Button content"}},args:{children:"Button",onClick:Ke()}},y={render:()=>e.jsx(i,{gap:"12",alignItems:"center",children:["standard","primary","hollow","ghost","cta","danger","selected","selectedBold"].map(n=>e.jsx(t,{variant:n,children:n},n))}),parameters:{controls:{disable:!0}}},j={render:()=>e.jsxs(w,{columns:3,justifyItems:"center",gap:"20",children:[e.jsx(t,{size:"sm",children:"Small"}),e.jsx(t,{size:"sm",iconBefore:"arrow-left",children:"Small"}),e.jsx(t,{size:"sm",iconAfter:"arrow-square-out",children:"Small"}),e.jsx(t,{size:"md",children:"Medium"}),e.jsx(t,{size:"md",iconBefore:"arrow-left",children:"Medium"}),e.jsx(t,{size:"md",iconAfter:"arrow-square-out",children:"Medium"}),e.jsx(t,{size:"lg",children:"Large"}),e.jsx(t,{size:"lg",iconBefore:"arrow-left",children:"Large"}),e.jsx(t,{size:"lg",iconAfter:"arrow-square-out",children:"Large"}),e.jsx(t,{size:"xl",children:"Extra Large"}),e.jsx(t,{size:"xl",iconBefore:"arrow-left",children:"Extra Large"}),e.jsx(t,{size:"xl",iconAfter:"arrow-square-out",children:"Extra Large"})]}),parameters:{controls:{disable:!0}}},S={render:()=>e.jsxs(w,{w:"full",h:"full",position:"relative",placeContent:"center",alignItems:"center",justifyItems:"center",gap:"16",children:[e.jsx(t,{size:{base:"xl",xs:"lg",sm:"md",md:"sm"},variant:{base:"primary",xs:"standard",sm:"hollow",md:"danger"},iconBefore:"arrows-left-right",children:"Button"}),e.jsx(t,{size:{base:"xl",xs:"lg",sm:"md",md:"sm"},before:e.jsx(I,{count:5}),children:"Button"}),e.jsx(t,{size:{base:"xl",xs:"lg",sm:"md",md:"sm"},before:e.jsx(et,{name:"John Doe",src:$e.user1}),children:"Button"}),e.jsx(t,{size:{base:"xl",xs:"lg",sm:"md",md:"sm"},before:e.jsx(rt,{}),children:"Button"}),e.jsx(t,{variant:"ghost",size:{base:"xl",xs:"lg",sm:"md",md:"sm"},before:e.jsx(z,{name:"circle-check",fill:"icon.success"}),children:"Button"}),e.jsxs(Xe,{gap:"4",children:[e.jsxs(o,{textAlign:"center",textStyle:"mono.sm",_after:{display:"inline",content:{base:'"xl"',xs:'"lg"',sm:'"md"',md:'"sm"'},color:"text.bold",fontWeight:"bold"},children:["Size:"," "]}),e.jsxs(o,{textAlign:"center",textStyle:"mono.sm",_after:{display:"inline",content:{base:'"primary"',xs:'"standard"',sm:'"hollow"',md:'"danger"'},color:"text.bold",fontWeight:"bold"},children:["Variant:"," "]})]}),e.jsx(tt,{})]}),parameters:{controls:{disable:!0}}},A={render:()=>e.jsxs(w,{gridTemplateColumns:"auto 1fr",columnGap:"12",rowGap:"32",alignItems:"center",children:[e.jsx(o,{textStyle:"mono.md",mr:"16",children:"Disabled"}),e.jsx(i,{gap:"12",alignItems:"center",children:["standard","primary","hollow","ghost","cta","danger","selected","selectedBold"].map(n=>e.jsx(t,{variant:n,disabled:!0,children:n},n))}),e.jsx(o,{textStyle:"mono.md",mr:"16",children:"Loading"}),e.jsx(i,{gap:"12",alignItems:"center",children:["standard","primary","hollow","ghost","cta","danger","selected","selectedBold"].map(n=>e.jsx(t,{variant:n,loading:!0,children:n},n))})]}),parameters:{controls:{disable:!0}}},C={render:()=>e.jsxs(w,{gridTemplateColumns:"auto 1fr",columnGap:"12",rowGap:"32",alignItems:"center",children:[e.jsx(o,{textStyle:"heading.sm",gridColumn:"1 / -1",children:"Button"}),e.jsx(o,{textStyle:"mono.md",mr:"16",children:"iconBefore"}),e.jsxs(i,{gap:"12",children:[e.jsx(t,{iconBefore:"plus",children:"Add"}),e.jsx(t,{iconBefore:"timer",variant:"primary",children:"Start Timer"}),e.jsx(t,{iconBefore:"calendar",variant:"selectedBold",children:"2026-01-12"}),e.jsx(t,{iconBefore:"info",variant:"ghost",children:"Learn More"}),e.jsx(t,{iconBefore:"trash",variant:"danger",children:"Delete"})]}),e.jsx(o,{textStyle:"mono.md",mr:"16",children:"iconAfter"}),e.jsxs(i,{gap:"12",children:[e.jsx(t,{iconAfter:"send",variant:"cta",children:"Send Invoice"}),e.jsx(t,{iconAfter:"arrow-square-out",children:"Logout"}),e.jsx(t,{iconAfter:"download",variant:"primary",children:"Download"}),e.jsx(t,{iconAfter:"scale",variant:"hollow",children:"Weigh"}),e.jsx(t,{iconAfter:"screwdriver",variant:"selected",children:"Tools"})]}),e.jsx(nt,{gridColumn:"1 / -1"}),e.jsx(o,{textStyle:"heading.sm",mr:"16",children:"IconButton"}),e.jsxs(i,{gap:"56",children:[e.jsx(d,{iconName:"download",altText:"Download"}),e.jsx(d,{iconName:"printer",variant:"hollow",altText:"Print"}),e.jsx(d,{iconName:"cloud-synced",variant:"ghost",altText:"Last sync: 3 hours ago"}),e.jsx(d,{iconName:"edit",variant:"primary",altText:"Edit"}),e.jsx(d,{iconName:"send",variant:"cta",altText:"Send"}),e.jsx(d,{iconName:"trash",variant:"danger",altText:"This cannot be undone"})]})]}),parameters:{controls:{disable:!0}}},T={render:()=>e.jsxs(w,{gridTemplateColumns:"auto 1fr",columnGap:"12",rowGap:"32",alignItems:"center",children:[e.jsx(o,{textStyle:"mono.md",mr:"16",children:"before / after"}),e.jsxs(i,{gap:"12",children:[e.jsx(t,{before:e.jsx(z,{name:"plus"}),variant:"primary",children:"New Record"}),e.jsx(t,{after:e.jsx(I,{count:3,variant:"success"}),variant:"hollow",children:"Pending"}),e.jsx(t,{before:e.jsx(I,{count:12,variant:"warning"}),after:e.jsx(z,{name:"arrow-right"}),children:"Review"}),e.jsx(t,{before:e.jsx(z,{name:"search"}),after:e.jsx(at,{keys:["⌘","K"]}),children:"Search"})]}),e.jsx(o,{textStyle:"mono.md",mr:"16",children:"aliases"}),e.jsxs(i,{gap:"12",children:[e.jsx(t,{iconBefore:"plus",children:"Alias Before"}),e.jsx(t,{iconAfter:"arrow-right",children:"Alias After"})]})]}),parameters:{controls:{disable:!0}}},p={args:{href:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",children:"Special Link",iconAfter:"arrow-square-out"}},h={name:"Ex: Action Group",render:()=>e.jsxs(m,{gap:"8",children:[e.jsx(t,{variant:"hollow",children:"Cancel"}),e.jsx(t,{variant:"primary",children:"Confirm"})]}),parameters:{controls:{disable:!0}}},g={name:"Ex: Form Actions",render:()=>e.jsxs(m,{gap:"8",justifyContent:"flex-end",children:[e.jsx(t,{variant:"hollow",children:"Reset"}),e.jsx(t,{variant:"hollow",children:"Save Draft"}),e.jsx(t,{variant:"primary",iconAfter:"arrow-right",children:"Submit"})]}),parameters:{controls:{disable:!0}}},x={name:"Ex: Pagination",render:()=>e.jsxs(m,{gap:"8",justifyContent:"space-between",width:"280",children:[e.jsx(t,{variant:"hollow",iconBefore:"arrow-left",children:"Back"}),e.jsx(t,{variant:"primary",iconAfter:"arrow-right",children:"Next"})]}),parameters:{controls:{disable:!0}}},B={name:"Ex: CRUD Actions",render:()=>e.jsxs(m,{gap:"8",flexWrap:"wrap",children:[e.jsx(t,{variant:"primary",size:"sm",iconBefore:"plus",children:"Create"}),e.jsx(t,{variant:"hollow",size:"sm",iconBefore:"edit",children:"Edit"}),e.jsx(t,{variant:"ghost",size:"sm",iconBefore:"trash",children:"Delete"})]}),parameters:{controls:{disable:!0}}},b={name:"Ex: Form Submitting",render:()=>e.jsxs(m,{gap:"8",children:[e.jsx(t,{variant:"hollow",disabled:!0,children:"Cancel"}),e.jsx(t,{variant:"primary",loading:!0,children:"Saving..."})]}),parameters:{controls:{disable:!0}}},f={name:"Ex: Disabled With Reason",render:()=>e.jsxs(m,{gap:"8",children:[e.jsx(t,{variant:"primary",disabledReason:"Closed orders can't be edited. Reopen the order first.",children:"Edit order"}),e.jsx(t,{disabledReason:"You need the Purchasing role to approve.",children:"Approve"}),e.jsx(d,{iconName:"trash",altText:"Delete order",variant:"danger",disabledReason:"Orders with shipments can't be deleted."})]}),parameters:{controls:{disable:!0}}},k={name:"Test: disabledReason",args:{children:"Edit order",disabledReason:"Closed orders can't be edited.",onClick:Ke()},play:async({args:n,canvasElement:s})=>{const r=u(s).getByRole("button",{name:"Edit order"});await a(r).toHaveAttribute("aria-disabled","true"),await a(r).not.toHaveAttribute("disabled"),await a(r).toHaveAccessibleDescription("Closed orders can't be edited."),r.focus(),await l.keyboard("{Enter}"),await l.keyboard(" "),await a(n.onClick).not.toHaveBeenCalled(),r.blur(),await l.tab(),await a(r).toHaveFocus();const Qe=await u(document.body).findByRole("tooltip");await a(Qe).toHaveTextContent("Closed orders can't be edited."),r.blur(),await D(()=>a(u(document.body).queryByRole("tooltip")).toBeNull());const Ye=getComputedStyle(r).backgroundColor;await l.hover(r),await a(await u(document.body).findByRole("tooltip")).toHaveTextContent("Closed orders can't be edited."),r.setAttribute("data-hover","true"),await new Promise(Je=>setTimeout(Je,300)),await a(getComputedStyle(r).backgroundColor).toBe(Ye),r.removeAttribute("data-hover"),await l.click(r),await a(n.onClick).not.toHaveBeenCalled(),await l.unhover(r),r.blur(),await D(()=>a(u(document.body).queryByRole("tooltip")).toBeNull())}},R={name:"Test: focus stays when a reason appears",tags:["!snapshot"],render:function(){const[s,c]=Ze.useState();return e.jsx(t,{disabledReason:s,onClick:()=>c("This case is already closed."),children:"Close case"})},play:async({canvasElement:n})=>{const s=u(n),c=s.getByRole("button",{name:"Close case"});await l.click(c),await D(()=>a(c).toHaveAttribute("aria-disabled","true")),await a(s.getByRole("button",{name:"Close case"})).toBe(c),await a(c).toHaveFocus()}},E={name:"Test: data-ds-component",render:()=>e.jsxs(m,{gap:"8",children:[e.jsx(t,{children:"Default"}),e.jsx(t,{"data-ds-component":"CustomButton",children:"Overridden"})]}),play:async({canvasElement:n})=>{const s=u(n);a(s.getByRole("button",{name:"Default"})).toHaveAttribute("data-ds-component","Button"),a(s.getByRole("button",{name:"Overridden"})).toHaveAttribute("data-ds-component","CustomButton")},parameters:{controls:{disable:!0}}},v={args:{variant:"standard",size:"md",children:"Click Me",disabled:!1,loading:!1}},wt=["Variants","Sizes","ConditionalBreakpoints","InteractionStates","WithIcon","WithSlots","AsLink","ActionGroup","FormActions","Pagination","CrudActions","FormSubmitting","DisabledWithReason","DisabledReasonBehavior","DisabledReasonKeepsFocus","DsComponentAttribute","Interactive"];var H,W,L;y.parameters={...y.parameters,docs:{...(H=y.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(L=(W=y.parameters)==null?void 0:W.docs)==null?void 0:L.source}}};var G,F,N;j.parameters={...j.parameters,docs:{...(G=j.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(N=(F=j.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};var q,P,M;S.parameters={...S.parameters,docs:{...(q=S.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(M=(P=S.parameters)==null?void 0:P.docs)==null?void 0:M.source}}};var _,O,V;A.parameters={...A.parameters,docs:{...(_=A.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(V=(O=A.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};var U,K,Q;C.parameters={...C.parameters,docs:{...(U=C.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(Q=(K=C.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var Y,J,X;T.parameters={...T.parameters,docs:{...(Y=T.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(X=(J=T.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};var Z,$,ee,te,ne;p.parameters={...p.parameters,docs:{...(Z=p.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    href: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    children: 'Special Link',
    iconAfter: 'arrow-square-out'
  }
}`,...(ee=($=p.parameters)==null?void 0:$.docs)==null?void 0:ee.source},description:{story:"Button with href automatically renders as anchor element",...(ne=(te=p.parameters)==null?void 0:te.docs)==null?void 0:ne.description}}};var ae,re,oe,se,ie;h.parameters={...h.parameters,docs:{...(ae=h.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(oe=(re=h.parameters)==null?void 0:re.docs)==null?void 0:oe.source},description:{story:"Use case: Primary action button group (e.g., form submission)",...(ie=(se=h.parameters)==null?void 0:se.docs)==null?void 0:ie.description}}};var ce,de,le,ue,me;g.parameters={...g.parameters,docs:{...(ce=g.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(le=(de=g.parameters)==null?void 0:de.docs)==null?void 0:le.source},description:{story:"Use case: Form actions with multiple options",...(me=(ue=g.parameters)==null?void 0:ue.docs)==null?void 0:me.description}}};var pe,he,ge,xe,Be;x.parameters={...x.parameters,docs:{...(pe=x.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(ge=(he=x.parameters)==null?void 0:he.docs)==null?void 0:ge.source},description:{story:"Use case: Pagination buttons",...(Be=(xe=x.parameters)==null?void 0:xe.docs)==null?void 0:Be.description}}};var be,fe,ve,we,ye;B.parameters={...B.parameters,docs:{...(be=B.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(ve=(fe=B.parameters)==null?void 0:fe.docs)==null?void 0:ve.source},description:{story:"Use case: CRUD operation buttons",...(ye=(we=B.parameters)==null?void 0:we.docs)==null?void 0:ye.description}}};var je,Se,Ae,Ce,Te;b.parameters={...b.parameters,docs:{...(je=b.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
}`,...(Ae=(Se=b.parameters)==null?void 0:Se.docs)==null?void 0:Ae.source},description:{story:"Use case: Form submitting state",...(Te=(Ce=b.parameters)==null?void 0:Ce.docs)==null?void 0:Te.description}}};var ke,Re,Ee,ze,Ie;f.parameters={...f.parameters,docs:{...(ke=f.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(Ee=(Re=f.parameters)==null?void 0:Re.docs)==null?void 0:Ee.source},description:{story:`Use case: an action the user can't take right now, with the reason. The
button stays focusable, so keyboard and screen-reader users get the reason.`,...(Ie=(ze=f.parameters)==null?void 0:ze.docs)==null?void 0:Ie.description}}};var De,He,We;k.parameters={...k.parameters,docs:{...(De=k.parameters)==null?void 0:De.docs,source:{originalSource:`{
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

    // Clicks and keyboard activation do nothing.
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

    // Hover shows the reason without a hover style, and a click does nothing.
    const restingBg = getComputedStyle(button).backgroundColor;
    await userEvent.hover(button);
    await expect(await within(document.body).findByRole('tooltip')).toHaveTextContent("Closed orders can't be edited.");
    // Simulated hover does not set :hover, so use the hover data attribute.
    button.setAttribute('data-hover', 'true');
    await new Promise(resolve => setTimeout(resolve, 300));
    await expect(getComputedStyle(button).backgroundColor).toBe(restingBg);
    button.removeAttribute('data-hover');
    await userEvent.click(button);
    await expect(args.onClick).not.toHaveBeenCalled();
    await userEvent.unhover(button);
    button.blur();
    await waitFor(() => expect(within(document.body).queryByRole('tooltip')).toBeNull());
  }
}`,...(We=(He=k.parameters)==null?void 0:He.docs)==null?void 0:We.source}}};var Le,Ge,Fe;R.parameters={...R.parameters,docs:{...(Le=R.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  name: 'Test: focus stays when a reason appears',
  // Behavior test only. It ends in the same state as "Test: disabledReason".
  tags: ['!snapshot'],
  render: function Render() {
    const [reason, setReason] = useState<string>();
    return <Button disabledReason={reason} onClick={() => setReason('This case is already closed.')}>
        Close case
      </Button>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', {
      name: 'Close case'
    });
    await userEvent.click(button);
    await waitFor(() => expect(button).toHaveAttribute('aria-disabled', 'true'));
    await expect(canvas.getByRole('button', {
      name: 'Close case'
    })).toBe(button);
    await expect(button).toHaveFocus();
  }
}`,...(Fe=(Ge=R.parameters)==null?void 0:Ge.docs)==null?void 0:Fe.source}}};var Ne,qe,Pe;E.parameters={...E.parameters,docs:{...(Ne=E.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
}`,...(Pe=(qe=E.parameters)==null?void 0:qe.docs)==null?void 0:Pe.source}}};var Me,_e,Oe,Ve,Ue;v.parameters={...v.parameters,docs:{...(Me=v.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  args: {
    variant: 'standard',
    size: 'md',
    children: 'Click Me',
    disabled: false,
    loading: false
  }
}`,...(Oe=(_e=v.parameters)==null?void 0:_e.docs)==null?void 0:Oe.source},description:{story:"Interactive playground to test all props",...(Ue=(Ve=v.parameters)==null?void 0:Ve.docs)==null?void 0:Ue.description}}};export{h as ActionGroup,p as AsLink,S as ConditionalBreakpoints,B as CrudActions,k as DisabledReasonBehavior,R as DisabledReasonKeepsFocus,f as DisabledWithReason,E as DsComponentAttribute,g as FormActions,b as FormSubmitting,A as InteractionStates,v as Interactive,x as Pagination,j as Sizes,y as Variants,C as WithIcon,T as WithSlots,wt as __namedExportsOrder,vt as default};
