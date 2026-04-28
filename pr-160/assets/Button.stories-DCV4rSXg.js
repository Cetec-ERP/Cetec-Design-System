import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{f as he}from"./index-DPYJpPba.js";import"./index-BKyFwriW.js";import{W as a,G as w,V as Be,H as p}from"./Box-DON8OdPK.js";import{B as fe}from"./BreakpointIndicator-IW1tL_SP.js";import{D as we}from"./Divider-Bl0MrEIB.js";import{I as o}from"./IconButton-BK1WKGzX.js";import{T as n}from"./Text-BxMUKbtC.js";import{B as t}from"./Button-bJZgY1X2.js";import"./_commonjsHelpers-CqkleIqs.js";import"./mq.hook-BU-2oBAn.js";import"./radii-Ir2x-kmI.js";import"./index-DOpYXeGo.js";import"./colors-CLHggMRt.js";import"./Tag-CdyncLWL.js";import"./Icon-BjyDhYXA.js";import"./IconConfig-CigF0iOf.js";import"./Spinner-VZexnvVV.js";import"./Tooltip-CbjHgvJ3.js";import"./floating-KWRh7SVq.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";import"./FieldContext-D6URyQos.js";const Ue={title:"Components/Button",component:t,parameters:{layout:"centered",docs:{description:{component:`Button component with comprehensive variant support.

Features:
- Multiple visual variants (standard, primary, hollow, ghost, cta, danger)
- Four sizes (sm, md, lg, xl)
- Icon support via string names (iconBefore, iconAfter, iconName)
- Loading and disabled states
- Auto-renders as anchor when href is provided`}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["standard","primary","hollow","ghost","cta","danger","selected","selectedBold"],description:"Visual style variants",table:{defaultValue:{summary:"standard"}}},size:{control:"select",options:["sm","md","lg","xl"],description:"Button size",table:{defaultValue:{summary:"md"}}},disabled:{control:"boolean",description:"Disabled state - non-interactive"},loading:{control:"boolean",description:"Loading state - shows spinner and disables interaction"},iconBefore:{control:"select",options:[void 0,"plus","check","arrow-left","edit","search"],description:"Icon name to display before text"},iconAfter:{control:"select",options:[void 0,"arrow-right","chevron-down","arrow-square-out"],description:"Icon name to display after text"},href:{control:"text",description:"When provided, button renders as anchor element"},children:{control:"text",description:"Button content"}},args:{children:"Button",onClick:he()}},g={render:()=>e.jsx(a,{gap:"12",alignItems:"center",children:["standard","primary","hollow","ghost","cta","danger","selected","selectedBold"].map(r=>e.jsx(t,{variant:r,children:r},r))}),parameters:{controls:{disable:!0}}},x={render:()=>e.jsxs(w,{columns:3,justifyItems:"center",gap:"20",children:[e.jsx(t,{size:"sm",children:"Small"}),e.jsx(t,{size:"sm",iconBefore:"arrow-left",children:"Small"}),e.jsx(t,{size:"sm",iconAfter:"arrow-square-out",children:"Small"}),e.jsx(t,{size:"md",children:"Medium"}),e.jsx(t,{size:"md",iconBefore:"arrow-left",children:"Medium"}),e.jsx(t,{size:"md",iconAfter:"arrow-square-out",children:"Medium"}),e.jsx(t,{size:"lg",children:"Large"}),e.jsx(t,{size:"lg",iconBefore:"arrow-left",children:"Large"}),e.jsx(t,{size:"lg",iconAfter:"arrow-square-out",children:"Large"}),e.jsx(t,{size:"xl",children:"Extra Large"}),e.jsx(t,{size:"xl",iconBefore:"arrow-left",children:"Extra Large"}),e.jsx(t,{size:"xl",iconAfter:"arrow-square-out",children:"Extra Large"})]}),parameters:{controls:{disable:!0}}},h={render:()=>e.jsxs(w,{w:"full",h:"full",position:"relative",placeContent:"center",alignItems:"center",justifyItems:"center",gap:"16",children:[e.jsx(t,{size:{base:"xl",xs:"lg",sm:"md",md:"sm"},variant:{base:"primary",xs:"standard",sm:"hollow",md:"danger"},iconBefore:"arrows-left-right",children:"Conditional Button Sizes"}),e.jsxs(Be,{gap:"4",children:[e.jsxs(n,{textAlign:"center",textStyle:"mono.sm",_after:{display:"inline",content:{base:'"xl"',xs:'"lg"',sm:'"md"',md:'"sm"'},color:"text.bold",fontWeight:"bold"},children:["Size:"," "]}),e.jsxs(n,{textAlign:"center",textStyle:"mono.sm",_after:{display:"inline",content:{base:'"primary"',xs:'"standard"',sm:'"hollow"',md:'"danger"'},color:"text.bold",fontWeight:"bold"},children:["Variant:"," "]})]}),e.jsx(fe,{})]}),parameters:{controls:{disable:!0}}},B={render:()=>e.jsxs(w,{gridTemplateColumns:"auto 1fr",columnGap:"12",rowGap:"32",alignItems:"center",children:[e.jsx(n,{textStyle:"mono.md",mr:"16",children:"Disabled"}),e.jsx(a,{gap:"12",alignItems:"center",children:["standard","primary","hollow","ghost","cta","danger","selected","selectedBold"].map(r=>e.jsx(t,{variant:r,disabled:!0,children:r},r))}),e.jsx(n,{textStyle:"mono.md",mr:"16",children:"Loading"}),e.jsx(a,{gap:"12",alignItems:"center",children:["standard","primary","hollow","ghost","cta","danger","selected","selectedBold"].map(r=>e.jsx(t,{variant:r,loading:!0,children:r},r))})]}),parameters:{controls:{disable:!0}}},f={render:()=>e.jsxs(w,{gridTemplateColumns:"auto 1fr",columnGap:"12",rowGap:"32",alignItems:"center",children:[e.jsx(n,{textStyle:"heading.sm",gridColumn:"1 / -1",children:"Button"}),e.jsx(n,{textStyle:"mono.md",mr:"16",children:"iconBefore"}),e.jsxs(a,{gap:"12",children:[e.jsx(t,{iconBefore:"plus",children:"Add"}),e.jsx(t,{iconBefore:"timer",variant:"primary",children:"Start Timer"}),e.jsx(t,{iconBefore:"calendar",variant:"selectedBold",children:"2026-01-12"}),e.jsx(t,{iconBefore:"info",variant:"ghost",children:"Learn More"}),e.jsx(t,{iconBefore:"trash",variant:"danger",children:"Delete"})]}),e.jsx(n,{textStyle:"mono.md",mr:"16",children:"iconAfter"}),e.jsxs(a,{gap:"12",children:[e.jsx(t,{iconAfter:"send",variant:"cta",children:"Send Invoice"}),e.jsx(t,{iconAfter:"arrow-square-out",children:"Logout"}),e.jsx(t,{iconAfter:"download",variant:"primary",children:"Download"}),e.jsx(t,{iconAfter:"scale",variant:"hollow",children:"Weigh"}),e.jsx(t,{iconAfter:"screwdriver",variant:"selected",children:"Tools"})]}),e.jsx(we,{gridColumn:"1 / -1"}),e.jsx(n,{textStyle:"heading.sm",mr:"16",children:"IconButton"}),e.jsxs(a,{gap:"56",children:[e.jsx(o,{iconName:"download",altText:"Download"}),e.jsx(o,{iconName:"printer",variant:"hollow",altText:"Print"}),e.jsx(o,{iconName:"cloud-synced",variant:"ghost",altText:"Last sync: 3 hours ago"}),e.jsx(o,{iconName:"edit",variant:"primary",altText:"Edit"}),e.jsx(o,{iconName:"send",variant:"cta",altText:"Send"}),e.jsx(o,{iconName:"trash",variant:"danger",altText:"This cannot be undone"})]})]}),parameters:{controls:{disable:!0}}},s={args:{href:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",children:"Special Link",iconAfter:"arrow-square-out"}},i={name:"Ex: Action Group",render:()=>e.jsxs(p,{gap:"8",children:[e.jsx(t,{variant:"hollow",children:"Cancel"}),e.jsx(t,{variant:"primary",children:"Confirm"})]}),parameters:{controls:{disable:!0}}},c={name:"Ex: Form Actions",render:()=>e.jsxs(p,{gap:"8",justifyContent:"flex-end",children:[e.jsx(t,{variant:"hollow",children:"Reset"}),e.jsx(t,{variant:"hollow",children:"Save Draft"}),e.jsx(t,{variant:"primary",iconAfter:"arrow-right",children:"Submit"})]}),parameters:{controls:{disable:!0}}},l={name:"Ex: Pagination",render:()=>e.jsxs(p,{gap:"8",justifyContent:"space-between",width:"280",children:[e.jsx(t,{variant:"hollow",iconBefore:"arrow-left",children:"Back"}),e.jsx(t,{variant:"primary",iconAfter:"arrow-right",children:"Next"})]}),parameters:{controls:{disable:!0}}},d={name:"Ex: CRUD Actions",render:()=>e.jsxs(p,{gap:"8",flexWrap:"wrap",children:[e.jsx(t,{variant:"primary",size:"sm",iconBefore:"plus",children:"Create"}),e.jsx(t,{variant:"hollow",size:"sm",iconBefore:"edit",children:"Edit"}),e.jsx(t,{variant:"ghost",size:"sm",iconBefore:"trash",children:"Delete"})]}),parameters:{controls:{disable:!0}}},m={name:"Ex: Form Submitting",render:()=>e.jsxs(p,{gap:"8",children:[e.jsx(t,{variant:"hollow",disabled:!0,children:"Cancel"}),e.jsx(t,{variant:"primary",loading:!0,children:"Saving..."})]}),parameters:{controls:{disable:!0}}},u={args:{variant:"standard",size:"md",children:"Click Me",disabled:!1,loading:!1}};var v,y,j;g.parameters={...g.parameters,docs:{...(v=g.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(j=(y=g.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var S,b,A;x.parameters={...x.parameters,docs:{...(S=x.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(A=(b=x.parameters)==null?void 0:b.docs)==null?void 0:A.source}}};var z,T,I;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
        Conditional Button Sizes
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
}`,...(I=(T=h.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var C,k,W;B.parameters={...B.parameters,docs:{...(C=B.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(W=(k=B.parameters)==null?void 0:k.docs)==null?void 0:W.source}}};var L,E,G;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(G=(E=f.parameters)==null?void 0:E.docs)==null?void 0:G.source}}};var D,N,q,F,H;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    href: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    children: 'Special Link',
    iconAfter: 'arrow-square-out'
  }
}`,...(q=(N=s.parameters)==null?void 0:N.docs)==null?void 0:q.source},description:{story:"Button with href automatically renders as anchor element",...(H=(F=s.parameters)==null?void 0:F.docs)==null?void 0:H.description}}};var M,V,P,U,R;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(P=(V=i.parameters)==null?void 0:V.docs)==null?void 0:P.source},description:{story:"Use case: Primary action button group (e.g., form submission)",...(R=(U=i.parameters)==null?void 0:U.docs)==null?void 0:R.description}}};var _,Q,X,O,J;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(X=(Q=c.parameters)==null?void 0:Q.docs)==null?void 0:X.source},description:{story:"Use case: Form actions with multiple options",...(J=(O=c.parameters)==null?void 0:O.docs)==null?void 0:J.description}}};var K,Y,Z,$,ee;l.parameters={...l.parameters,docs:{...(K=l.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(Z=(Y=l.parameters)==null?void 0:Y.docs)==null?void 0:Z.source},description:{story:"Use case: Pagination buttons",...(ee=($=l.parameters)==null?void 0:$.docs)==null?void 0:ee.description}}};var te,re,ne,oe,ae;d.parameters={...d.parameters,docs:{...(te=d.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ne=(re=d.parameters)==null?void 0:re.docs)==null?void 0:ne.source},description:{story:"Use case: CRUD operation buttons",...(ae=(oe=d.parameters)==null?void 0:oe.docs)==null?void 0:ae.description}}};var se,ie,ce,le,de;m.parameters={...m.parameters,docs:{...(se=m.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ce=(ie=m.parameters)==null?void 0:ie.docs)==null?void 0:ce.source},description:{story:"Use case: Form submitting state",...(de=(le=m.parameters)==null?void 0:le.docs)==null?void 0:de.description}}};var me,ue,pe,ge,xe;u.parameters={...u.parameters,docs:{...(me=u.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    variant: 'standard',
    size: 'md',
    children: 'Click Me',
    disabled: false,
    loading: false
  }
}`,...(pe=(ue=u.parameters)==null?void 0:ue.docs)==null?void 0:pe.source},description:{story:"Interactive playground to test all props",...(xe=(ge=u.parameters)==null?void 0:ge.docs)==null?void 0:xe.description}}};const Re=["Variants","Sizes","ConditionalBreakpoints","InteractionStates","WithIcon","AsLink","ActionGroup","FormActions","Pagination","CrudActions","FormSubmitting","Interactive"];export{i as ActionGroup,s as AsLink,h as ConditionalBreakpoints,d as CrudActions,c as FormActions,m as FormSubmitting,B as InteractionStates,u as Interactive,l as Pagination,x as Sizes,g as Variants,f as WithIcon,Re as __namedExportsOrder,Ue as default};
