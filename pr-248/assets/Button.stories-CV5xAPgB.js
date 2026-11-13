import{j as e,W as l,G as f,a as z,V as et,T as c,H as m,r as tt}from"./iframe-B6tPLa_9.js";import{s as nt}from"./avatars-BdtzB-ZU.js";import{A as at}from"./Avatar-dAEOki5l.js";import{B as I}from"./Badge-BbkZOT4b.js";import{B as ot}from"./BreakpointIndicator-DUvym2Es.js";import{D as rt}from"./Divider-tmpxsree.js";import{I as u}from"./IconButton-DEk__nrC.js";import{K as st}from"./Kbd-D0SlCRK7.js";import{S as it}from"./Spinner-CbuZdhOF.js";import{B as t}from"./Button-tb94KQ29.js";import"./preload-helper-D8YtVqxL.js";import"./mq.hook-DFsPspXl.js";import"./breakpoints-DU_5_Zhy.js";import"./Tag-BqlpQhoU.js";import"./FieldContext-Ab3N6kDM.js";const{expect:n,fn:Xe,userEvent:d,waitFor:D,within:s}=__STORYBOOK_MODULE_TEST__,jt={title:"Components/Button",component:t,parameters:{layout:"centered",docs:{description:{component:`Button component with comprehensive variant support.

Features:
- Multiple visual variants (standard, primary, hollow, ghost, cta, danger)
- Four sizes (sm, md, lg, xl)
- Slot support via \`before\` and \`after\`, with icon aliases for shorthand
- Loading and disabled states
- Auto-renders as anchor when href is provided`}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["standard","primary","hollow","ghost","cta","danger","selected","selectedBold"],description:"Visual style variants",table:{defaultValue:{summary:"standard"}}},size:{control:"select",options:["sm","md","lg","xl"],description:"Button size",table:{defaultValue:{summary:"md"}}},disabled:{control:"boolean",description:"Disabled state - non-interactive"},loading:{control:"boolean",description:"Loading state - shows spinner and disables interaction"},iconBefore:{control:"select",options:[void 0,"plus","check","arrow-left","edit","search"],description:"Legacy shorthand icon name for before slot"},iconAfter:{control:"select",options:[void 0,"arrow-right","chevron-down","arrow-square-out"],description:"Legacy shorthand icon name for after slot"},before:{control:!1,description:"Preferred slot for content before button text"},after:{control:!1,description:"Preferred slot for content after button text"},href:{control:"text",description:"When provided, button renders as anchor element"},children:{control:"text",description:"Button content"}},args:{children:"Button",onClick:Xe()}},y={render:()=>e.jsx(l,{gap:"12",alignItems:"center",children:["standard","primary","hollow","ghost","cta","danger","selected","selectedBold"].map(a=>e.jsx(t,{variant:a,children:a},a))}),parameters:{controls:{disable:!0}}},j={render:()=>e.jsxs(f,{columns:3,justifyItems:"center",gap:"20",children:[e.jsx(t,{size:"sm",children:"Small"}),e.jsx(t,{size:"sm",iconBefore:"arrow-left",children:"Small"}),e.jsx(t,{size:"sm",iconAfter:"arrow-square-out",children:"Small"}),e.jsx(t,{size:"md",children:"Medium"}),e.jsx(t,{size:"md",iconBefore:"arrow-left",children:"Medium"}),e.jsx(t,{size:"md",iconAfter:"arrow-square-out",children:"Medium"}),e.jsx(t,{size:"lg",children:"Large"}),e.jsx(t,{size:"lg",iconBefore:"arrow-left",children:"Large"}),e.jsx(t,{size:"lg",iconAfter:"arrow-square-out",children:"Large"}),e.jsx(t,{size:"xl",children:"Extra Large"}),e.jsx(t,{size:"xl",iconBefore:"arrow-left",children:"Extra Large"}),e.jsx(t,{size:"xl",iconAfter:"arrow-square-out",children:"Extra Large"})]}),parameters:{controls:{disable:!0}}},S={render:()=>e.jsxs(f,{w:"full",h:"full",position:"relative",placeContent:"center",alignItems:"center",justifyItems:"center",gap:"16",children:[e.jsx(t,{size:{base:"xl",xs:"lg",sm:"md",md:"sm"},variant:{base:"primary",xs:"standard",sm:"hollow",md:"danger"},iconBefore:"arrows-left-right",children:"Button"}),e.jsx(t,{size:{base:"xl",xs:"lg",sm:"md",md:"sm"},before:e.jsx(I,{count:5}),children:"Button"}),e.jsx(t,{size:{base:"xl",xs:"lg",sm:"md",md:"sm"},before:e.jsx(at,{name:"John Doe",src:nt.user1}),children:"Button"}),e.jsx(t,{size:{base:"xl",xs:"lg",sm:"md",md:"sm"},before:e.jsx(it,{}),children:"Button"}),e.jsx(t,{variant:"ghost",size:{base:"xl",xs:"lg",sm:"md",md:"sm"},before:e.jsx(z,{name:"circle-check",fill:"icon.success"}),children:"Button"}),e.jsxs(et,{gap:"4",children:[e.jsxs(c,{textAlign:"center",textStyle:"mono.sm",_after:{display:"inline",content:{base:'"xl"',xs:'"lg"',sm:'"md"',md:'"sm"'},color:"text.bold",fontWeight:"bold"},children:["Size:"," "]}),e.jsxs(c,{textAlign:"center",textStyle:"mono.sm",_after:{display:"inline",content:{base:'"primary"',xs:'"standard"',sm:'"hollow"',md:'"danger"'},color:"text.bold",fontWeight:"bold"},children:["Variant:"," "]})]}),e.jsx(ot,{})]}),parameters:{controls:{disable:!0}}},A={render:()=>e.jsxs(f,{gridTemplateColumns:"auto 1fr",columnGap:"12",rowGap:"32",alignItems:"center",children:[e.jsx(c,{textStyle:"mono.md",mr:"16",children:"Disabled"}),e.jsx(l,{gap:"12",alignItems:"center",children:["standard","primary","hollow","ghost","cta","danger","selected","selectedBold"].map(a=>e.jsx(t,{variant:a,disabled:!0,children:a},a))}),e.jsx(c,{textStyle:"mono.md",mr:"16",children:"Loading"}),e.jsx(l,{gap:"12",alignItems:"center",children:["standard","primary","hollow","ghost","cta","danger","selected","selectedBold"].map(a=>e.jsx(t,{variant:a,loading:!0,children:a},a))})]}),parameters:{controls:{disable:!0}}},C={render:()=>e.jsxs(f,{gridTemplateColumns:"auto 1fr",columnGap:"12",rowGap:"32",alignItems:"center",children:[e.jsx(c,{textStyle:"heading.sm",gridColumn:"1 / -1",children:"Button"}),e.jsx(c,{textStyle:"mono.md",mr:"16",children:"iconBefore"}),e.jsxs(l,{gap:"12",children:[e.jsx(t,{iconBefore:"plus",children:"Add"}),e.jsx(t,{iconBefore:"timer",variant:"primary",children:"Start Timer"}),e.jsx(t,{iconBefore:"calendar",variant:"selectedBold",children:"2026-01-12"}),e.jsx(t,{iconBefore:"info",variant:"ghost",children:"Learn More"}),e.jsx(t,{iconBefore:"trash",variant:"danger",children:"Delete"})]}),e.jsx(c,{textStyle:"mono.md",mr:"16",children:"iconAfter"}),e.jsxs(l,{gap:"12",children:[e.jsx(t,{iconAfter:"send",variant:"cta",children:"Send Invoice"}),e.jsx(t,{iconAfter:"arrow-square-out",children:"Logout"}),e.jsx(t,{iconAfter:"download",variant:"primary",children:"Download"}),e.jsx(t,{iconAfter:"scale",variant:"hollow",children:"Weigh"}),e.jsx(t,{iconAfter:"screwdriver",variant:"selected",children:"Tools"})]}),e.jsx(rt,{gridColumn:"1 / -1"}),e.jsx(c,{textStyle:"heading.sm",mr:"16",children:"IconButton"}),e.jsxs(l,{gap:"56",children:[e.jsx(u,{iconName:"download",altText:"Download"}),e.jsx(u,{iconName:"printer",variant:"hollow",altText:"Print"}),e.jsx(u,{iconName:"cloud-synced",variant:"ghost",altText:"Last sync: 3 hours ago"}),e.jsx(u,{iconName:"edit",variant:"primary",altText:"Edit"}),e.jsx(u,{iconName:"send",variant:"cta",altText:"Send"}),e.jsx(u,{iconName:"trash",variant:"danger",altText:"This cannot be undone"})]})]}),parameters:{controls:{disable:!0}}},k={render:()=>e.jsxs(f,{gridTemplateColumns:"auto 1fr",columnGap:"12",rowGap:"32",alignItems:"center",children:[e.jsx(c,{textStyle:"mono.md",mr:"16",children:"before / after"}),e.jsxs(l,{gap:"12",children:[e.jsx(t,{before:e.jsx(z,{name:"plus"}),variant:"primary",children:"New Record"}),e.jsx(t,{after:e.jsx(I,{count:3,variant:"success"}),variant:"hollow",children:"Pending"}),e.jsx(t,{before:e.jsx(I,{count:12,variant:"warning"}),after:e.jsx(z,{name:"arrow-right"}),children:"Review"}),e.jsx(t,{before:e.jsx(z,{name:"search"}),after:e.jsx(st,{keys:["⌘","K"]}),children:"Search"})]}),e.jsx(c,{textStyle:"mono.md",mr:"16",children:"aliases"}),e.jsxs(l,{gap:"12",children:[e.jsx(t,{iconBefore:"plus",children:"Alias Before"}),e.jsx(t,{iconAfter:"arrow-right",children:"Alias After"})]})]}),parameters:{controls:{disable:!0}}},p={args:{href:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",children:"Special Link",iconAfter:"arrow-square-out"}},h={name:"Ex: Action Group",render:()=>e.jsxs(m,{gap:"8",children:[e.jsx(t,{variant:"hollow",children:"Cancel"}),e.jsx(t,{variant:"primary",children:"Confirm"})]}),parameters:{controls:{disable:!0}}},x={name:"Ex: Form Actions",render:()=>e.jsxs(m,{gap:"8",justifyContent:"flex-end",children:[e.jsx(t,{variant:"hollow",children:"Reset"}),e.jsx(t,{variant:"hollow",children:"Save Draft"}),e.jsx(t,{variant:"primary",iconAfter:"arrow-right",children:"Submit"})]}),parameters:{controls:{disable:!0}}},g={name:"Ex: Pagination",render:()=>e.jsxs(m,{gap:"8",justifyContent:"space-between",width:"280",children:[e.jsx(t,{variant:"hollow",iconBefore:"arrow-left",children:"Back"}),e.jsx(t,{variant:"primary",iconAfter:"arrow-right",children:"Next"})]}),parameters:{controls:{disable:!0}}},b={name:"Ex: CRUD Actions",render:()=>e.jsxs(m,{gap:"8",flexWrap:"wrap",children:[e.jsx(t,{variant:"primary",size:"sm",iconBefore:"plus",children:"Create"}),e.jsx(t,{variant:"hollow",size:"sm",iconBefore:"edit",children:"Edit"}),e.jsx(t,{variant:"ghost",size:"sm",iconBefore:"trash",children:"Delete"})]}),parameters:{controls:{disable:!0}}},B={name:"Ex: Form Submitting",render:()=>e.jsxs(m,{gap:"8",children:[e.jsx(t,{variant:"hollow",disabled:!0,children:"Cancel"}),e.jsx(t,{variant:"primary",loading:!0,children:"Saving..."})]}),parameters:{controls:{disable:!0}}},v={name:"Ex: Disabled With Reason",render:()=>e.jsxs(m,{gap:"8",children:[e.jsx(t,{variant:"primary",disabledReason:"Closed orders can't be edited. Reopen the order first.",children:"Edit order"}),e.jsx(t,{disabledReason:"You need the Purchasing role to approve.",children:"Approve"}),e.jsx(u,{iconName:"trash",altText:"Delete order",variant:"danger",disabledReason:"Orders with shipments can't be deleted."})]}),parameters:{controls:{disable:!0}}},T={name:"Test: disabledReason",args:{children:"Edit order",disabledReason:"Closed orders can't be edited.",onClick:Xe()},play:async({args:a,canvasElement:i})=>{const o=s(i).getByRole("button",{name:"Edit order"});await n(o).toHaveAttribute("aria-disabled","true"),await n(o).not.toHaveAttribute("disabled"),await n(o).toHaveAccessibleDescription("Closed orders can't be edited."),o.focus(),await d.keyboard("{Enter}"),await d.keyboard(" "),await n(a.onClick).not.toHaveBeenCalled(),o.blur(),await d.tab(),await n(o).toHaveFocus();const Ze=await s(document.body).findByRole("tooltip");await n(Ze).toHaveTextContent("Closed orders can't be edited."),await n(o).toHaveAccessibleDescription("Closed orders can't be edited."),o.blur(),await D(()=>n(s(document.body).queryByRole("tooltip")).toBeNull());const $e=getComputedStyle(o).backgroundColor;await d.hover(o),await n(await s(document.body).findByRole("tooltip")).toHaveTextContent("Closed orders can't be edited."),o.style.transition="none",o.setAttribute("data-hover","true");try{await n(getComputedStyle(o).backgroundColor).toBe($e)}finally{o.removeAttribute("data-hover"),o.style.transition=""}await d.click(o),await n(a.onClick).not.toHaveBeenCalled(),await d.unhover(o),o.blur(),await D(()=>n(s(document.body).queryByRole("tooltip")).toBeNull())}},R={name:"Test: disabled link has no href",tags:["!snapshot"],args:{href:"https://example.com/orders/1042",children:"View order",disabledReason:"You need the Sales role to view orders."},play:async({canvasElement:a})=>{const r=s(a).getByRole("link",{name:"View order"});await n(r).not.toHaveAttribute("href"),await n(r).toHaveAttribute("aria-disabled","true"),await n(r).toHaveAccessibleDescription("You need the Sales role to view orders."),await d.tab(),await n(r).toHaveFocus(),await n(await s(document.body).findByRole("tooltip")).toHaveTextContent("You need the Sales role to view orders."),r.blur(),await D(()=>n(s(document.body).queryByRole("tooltip")).toBeNull())}},H={name:"Test: focus stays when a reason appears",tags:["!snapshot"],render:function(){const[i,r]=tt.useState();return e.jsx(t,{disabledReason:i,onClick:()=>r("This case is already closed."),children:"Close case"})},play:async({canvasElement:a})=>{const i=s(a),r=i.getByRole("button",{name:"Close case"});await d.click(r),await D(()=>n(r).toHaveAttribute("aria-disabled","true")),await n(i.getByRole("button",{name:"Close case"})).toBe(r),await n(r).toHaveFocus(),await n(await s(document.body).findByRole("tooltip")).toHaveTextContent("This case is already closed.")}},E={name:"Test: data-ds-component",render:()=>e.jsxs(m,{gap:"8",children:[e.jsx(t,{children:"Default"}),e.jsx(t,{"data-ds-component":"CustomButton",children:"Overridden"})]}),play:async({canvasElement:a})=>{const i=s(a);n(i.getByRole("button",{name:"Default"})).toHaveAttribute("data-ds-component","Button"),n(i.getByRole("button",{name:"Overridden"})).toHaveAttribute("data-ds-component","CustomButton")},parameters:{controls:{disable:!0}}},w={args:{variant:"standard",size:"md",children:"Click Me",disabled:!1,loading:!1}},St=["Variants","Sizes","ConditionalBreakpoints","InteractionStates","WithIcon","WithSlots","AsLink","ActionGroup","FormActions","Pagination","CrudActions","FormSubmitting","DisabledWithReason","DisabledReasonBehavior","DisabledReasonLink","DisabledReasonKeepsFocus","DsComponentAttribute","Interactive"];var W,L,G;y.parameters={...y.parameters,docs:{...(W=y.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(G=(L=y.parameters)==null?void 0:L.docs)==null?void 0:G.source}}};var F,N,q;j.parameters={...j.parameters,docs:{...(F=j.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(q=(N=j.parameters)==null?void 0:N.docs)==null?void 0:q.source}}};var V,P,M;S.parameters={...S.parameters,docs:{...(V=S.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(M=(P=S.parameters)==null?void 0:P.docs)==null?void 0:M.source}}};var O,_,U;A.parameters={...A.parameters,docs:{...(O=A.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(U=(_=A.parameters)==null?void 0:_.docs)==null?void 0:U.source}}};var K,Y,Q;C.parameters={...C.parameters,docs:{...(K=C.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(Q=(Y=C.parameters)==null?void 0:Y.docs)==null?void 0:Q.source}}};var J,X,Z;k.parameters={...k.parameters,docs:{...(J=k.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Z=(X=k.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var $,ee,te,ne,ae;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    href: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    children: 'Special Link',
    iconAfter: 'arrow-square-out'
  }
}`,...(te=(ee=p.parameters)==null?void 0:ee.docs)==null?void 0:te.source},description:{story:"Button with href automatically renders as anchor element",...(ae=(ne=p.parameters)==null?void 0:ne.docs)==null?void 0:ae.description}}};var oe,re,se,ie,ce;h.parameters={...h.parameters,docs:{...(oe=h.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(se=(re=h.parameters)==null?void 0:re.docs)==null?void 0:se.source},description:{story:"Use case: Primary action button group (e.g., form submission)",...(ce=(ie=h.parameters)==null?void 0:ie.docs)==null?void 0:ce.description}}};var de,le,ue,me,pe;x.parameters={...x.parameters,docs:{...(de=x.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(ue=(le=x.parameters)==null?void 0:le.docs)==null?void 0:ue.source},description:{story:"Use case: Form actions with multiple options",...(pe=(me=x.parameters)==null?void 0:me.docs)==null?void 0:pe.description}}};var he,xe,ge,be,Be;g.parameters={...g.parameters,docs:{...(he=g.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(ge=(xe=g.parameters)==null?void 0:xe.docs)==null?void 0:ge.source},description:{story:"Use case: Pagination buttons",...(Be=(be=g.parameters)==null?void 0:be.docs)==null?void 0:Be.description}}};var ve,we,fe,ye,je;b.parameters={...b.parameters,docs:{...(ve=b.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(fe=(we=b.parameters)==null?void 0:we.docs)==null?void 0:fe.source},description:{story:"Use case: CRUD operation buttons",...(je=(ye=b.parameters)==null?void 0:ye.docs)==null?void 0:je.description}}};var Se,Ae,Ce,ke,Te;B.parameters={...B.parameters,docs:{...(Se=B.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(Ce=(Ae=B.parameters)==null?void 0:Ae.docs)==null?void 0:Ce.source},description:{story:"Use case: Form submitting state",...(Te=(ke=B.parameters)==null?void 0:ke.docs)==null?void 0:Te.description}}};var Re,He,Ee,ze,De;v.parameters={...v.parameters,docs:{...(Re=v.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(Ee=(He=v.parameters)==null?void 0:He.docs)==null?void 0:Ee.source},description:{story:`Use case: an action the user can't take right now, with the reason. The
button stays focusable, so keyboard and screen-reader users get the reason.`,...(De=(ze=v.parameters)==null?void 0:ze.docs)==null?void 0:De.description}}};var Ie,We,Le;T.parameters={...T.parameters,docs:{...(Ie=T.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
    // The open tooltip does not add the reason a second time.
    await expect(button).toHaveAccessibleDescription("Closed orders can't be edited.");
    button.blur();
    await waitFor(() => expect(within(document.body).queryByRole('tooltip')).toBeNull());

    // Hover shows the reason without a hover style, and a click does nothing.
    const restingBg = getComputedStyle(button).backgroundColor;
    await userEvent.hover(button);
    await expect(await within(document.body).findByRole('tooltip')).toHaveTextContent("Closed orders can't be edited.");
    // Simulated hover does not set :hover, so use the hover data attribute.
    // With no transition, the computed color is final right away.
    button.style.transition = 'none';
    button.setAttribute('data-hover', 'true');
    try {
      await expect(getComputedStyle(button).backgroundColor).toBe(restingBg);
    } finally {
      button.removeAttribute('data-hover');
      button.style.transition = '';
    }
    await userEvent.click(button);
    await expect(args.onClick).not.toHaveBeenCalled();
    await userEvent.unhover(button);
    button.blur();
    await waitFor(() => expect(within(document.body).queryByRole('tooltip')).toBeNull());
  }
}`,...(Le=(We=T.parameters)==null?void 0:We.docs)==null?void 0:Le.source}}};var Ge,Fe,Ne;R.parameters={...R.parameters,docs:{...(Ge=R.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  name: 'Test: disabled link has no href',
  // Behavior test only. It looks the same as "Test: disabledReason".
  tags: ['!snapshot'],
  args: {
    href: 'https://example.com/orders/1042',
    children: 'View order',
    disabledReason: 'You need the Sales role to view orders.'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    // No live href, so middle-click and "Open in new tab" can't navigate.
    const link = canvas.getByRole('link', {
      name: 'View order'
    });
    await expect(link).not.toHaveAttribute('href');
    await expect(link).toHaveAttribute('aria-disabled', 'true');
    await expect(link).toHaveAccessibleDescription('You need the Sales role to view orders.');
    await userEvent.tab();
    await expect(link).toHaveFocus();
    await expect(await within(document.body).findByRole('tooltip')).toHaveTextContent('You need the Sales role to view orders.');
    link.blur();
    await waitFor(() => expect(within(document.body).queryByRole('tooltip')).toBeNull());
  }
}`,...(Ne=(Fe=R.parameters)==null?void 0:Fe.docs)==null?void 0:Ne.source}}};var qe,Ve,Pe;H.parameters={...H.parameters,docs:{...(qe=H.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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

    // The button kept focus, so the reason shows without leaving and returning.
    await expect(await within(document.body).findByRole('tooltip')).toHaveTextContent('This case is already closed.');
  }
}`,...(Pe=(Ve=H.parameters)==null?void 0:Ve.docs)==null?void 0:Pe.source}}};var Me,Oe,_e;E.parameters={...E.parameters,docs:{...(Me=E.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
}`,...(_e=(Oe=E.parameters)==null?void 0:Oe.docs)==null?void 0:_e.source}}};var Ue,Ke,Ye,Qe,Je;w.parameters={...w.parameters,docs:{...(Ue=w.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  args: {
    variant: 'standard',
    size: 'md',
    children: 'Click Me',
    disabled: false,
    loading: false
  }
}`,...(Ye=(Ke=w.parameters)==null?void 0:Ke.docs)==null?void 0:Ye.source},description:{story:"Interactive playground to test all props",...(Je=(Qe=w.parameters)==null?void 0:Qe.docs)==null?void 0:Je.description}}};export{h as ActionGroup,p as AsLink,S as ConditionalBreakpoints,b as CrudActions,T as DisabledReasonBehavior,H as DisabledReasonKeepsFocus,R as DisabledReasonLink,v as DisabledWithReason,E as DsComponentAttribute,x as FormActions,B as FormSubmitting,A as InteractionStates,w as Interactive,g as Pagination,j as Sizes,y as Variants,C as WithIcon,k as WithSlots,St as __namedExportsOrder,jt as default};
