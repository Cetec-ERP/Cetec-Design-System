import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{f as pe}from"./index-DPYJpPba.js";import"./index-BKyFwriW.js";import{W as n,G as me,H as u}from"./Box-B-dS-qo0.js";import{D as ue}from"./Divider-kYvIQ_cX.js";import{I as a}from"./IconButton-D6YuI41J.js";import{T as o}from"./Text-BlqN2xhk.js";import{B as t}from"./Button-BCsxkfC4.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Icon-Dq3Qi2uA.js";import"./Spinner-B5Ee-ZZJ.js";import"./Tooltip-DAdXVz-o.js";import"./floating-ui.react-BYVwYRsa.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";const We={title:"Components/Button",component:t,parameters:{layout:"centered",docs:{description:{component:`Button component with comprehensive variant support.

Features:
- Multiple visual variants (standard, primary, hollow, ghost, cta, danger)
- Four sizes (sm, md, lg, xl)
- Icon support via string names (iconBefore, iconAfter, iconName)
- Loading and disabled states
- Auto-renders as anchor when href is provided`}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["standard","primary","hollow","ghost","cta","danger","selected","selectedBold"],description:"Visual style variants",table:{defaultValue:{summary:"standard"}}},size:{control:"select",options:["sm","md","lg","xl"],description:"Button size",table:{defaultValue:{summary:"md"}}},disabled:{control:"boolean",description:"Disabled state - non-interactive"},loading:{control:"boolean",description:"Loading state - shows spinner and disables interaction"},iconBefore:{control:"select",options:[void 0,"plus","check","arrow-left","edit","search"],description:"Icon name to display before text"},iconAfter:{control:"select",options:[void 0,"arrow-right","chevron-down","arrow-square-out"],description:"Icon name to display after text"},href:{control:"text",description:"When provided, button renders as anchor element"},children:{control:"text",description:"Button content"}},args:{children:"Button",onClick:pe()}},g={render:()=>e.jsx(n,{gap:"12",alignItems:"center",children:["standard","primary","hollow","ghost","cta","danger","selected","selectedBold"].map(r=>e.jsx(t,{variant:r,children:r},r))}),parameters:{controls:{disable:!0}}},h={render:()=>e.jsxs(n,{gap:"12",alignItems:"center",children:[e.jsx(t,{size:"sm",children:"Small"}),e.jsx(t,{size:"md",children:"Medium"}),e.jsx(t,{size:"lg",children:"Large"}),e.jsx(t,{size:"xl",children:"Extra Large"})]}),parameters:{controls:{disable:!0}}},x={render:()=>e.jsxs(me,{gridTemplateColumns:"auto 1fr",columnGap:"12",rowGap:"32",alignItems:"center",children:[e.jsx(o,{textStyle:"mono.md",mr:"16",children:"Disabled"}),e.jsx(n,{gap:"12",alignItems:"center",children:["standard","primary","hollow","ghost","cta","danger","selected","selectedBold"].map(r=>e.jsx(t,{variant:r,disabled:!0,children:r},r))}),e.jsx(o,{textStyle:"mono.md",mr:"16",children:"Loading"}),e.jsx(n,{gap:"12",alignItems:"center",children:["standard","primary","hollow","ghost","cta","danger","selected","selectedBold"].map(r=>e.jsx(t,{variant:r,loading:!0,children:r},r))})]}),parameters:{controls:{disable:!0}}},B={render:()=>e.jsxs(me,{gridTemplateColumns:"auto 1fr",columnGap:"12",rowGap:"32",alignItems:"center",children:[e.jsx(o,{textStyle:"heading.sm",gridColumn:"1 / -1",children:"Button"}),e.jsx(o,{textStyle:"mono.md",mr:"16",children:"iconBefore"}),e.jsxs(n,{gap:"12",children:[e.jsx(t,{iconBefore:"plus",children:"Add"}),e.jsx(t,{iconBefore:"timer",variant:"primary",children:"Start Timer"}),e.jsx(t,{iconBefore:"calendar",variant:"selectedBold",children:"2026-01-12"}),e.jsx(t,{iconBefore:"info",variant:"ghost",children:"Learn More"}),e.jsx(t,{iconBefore:"trash",variant:"danger",children:"Delete"})]}),e.jsx(o,{textStyle:"mono.md",mr:"16",children:"iconAfter"}),e.jsxs(n,{gap:"12",children:[e.jsx(t,{iconAfter:"send",variant:"cta",children:"Send Invoice"}),e.jsx(t,{iconAfter:"arrow-square-out",children:"Logout"}),e.jsx(t,{iconAfter:"download",variant:"primary",children:"Download"}),e.jsx(t,{iconAfter:"scale",variant:"hollow",children:"Weigh"}),e.jsx(t,{iconAfter:"screwdriver",variant:"selected",children:"Tools"})]}),e.jsx(ue,{gridColumn:"1 / -1"}),e.jsx(o,{textStyle:"heading.sm",mr:"16",children:"IconButton"}),e.jsxs(n,{gap:"56",children:[e.jsx(a,{iconName:"download",altText:"Download"}),e.jsx(a,{iconName:"printer",variant:"hollow",altText:"Print"}),e.jsx(a,{iconName:"cloud-synced",variant:"ghost",altText:"Last sync: 3 hours ago"}),e.jsx(a,{iconName:"edit",variant:"primary",altText:"Edit"}),e.jsx(a,{iconName:"send",variant:"cta",altText:"Send"}),e.jsx(a,{iconName:"trash",variant:"danger",altText:"This cannot be undone"})]})]}),parameters:{controls:{disable:!0}}},s={args:{href:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",children:"Special Link",iconAfter:"arrow-square-out"}},i={name:"Ex: Action Group",render:()=>e.jsxs(u,{gap:"8",children:[e.jsx(t,{variant:"hollow",children:"Cancel"}),e.jsx(t,{variant:"primary",children:"Confirm"})]}),parameters:{controls:{disable:!0}}},c={name:"Ex: Form Actions",render:()=>e.jsxs(u,{gap:"8",justifyContent:"flex-end",children:[e.jsx(t,{variant:"hollow",children:"Reset"}),e.jsx(t,{variant:"hollow",children:"Save Draft"}),e.jsx(t,{variant:"primary",iconAfter:"arrow-right",children:"Submit"})]}),parameters:{controls:{disable:!0}}},d={name:"Ex: Pagination",render:()=>e.jsxs(u,{gap:"8",justifyContent:"space-between",width:"280",children:[e.jsx(t,{variant:"hollow",iconBefore:"arrow-left",children:"Back"}),e.jsx(t,{variant:"primary",iconAfter:"arrow-right",children:"Next"})]}),parameters:{controls:{disable:!0}}},l={name:"Ex: CRUD Actions",render:()=>e.jsxs(u,{gap:"8",flexWrap:"wrap",children:[e.jsx(t,{variant:"primary",size:"sm",iconBefore:"plus",children:"Create"}),e.jsx(t,{variant:"hollow",size:"sm",iconBefore:"edit",children:"Edit"}),e.jsx(t,{variant:"ghost",size:"sm",iconBefore:"trash",children:"Delete"})]}),parameters:{controls:{disable:!0}}},m={name:"Ex: Form Submitting",render:()=>e.jsxs(u,{gap:"8",children:[e.jsx(t,{variant:"hollow",disabled:!0,children:"Cancel"}),e.jsx(t,{variant:"primary",loading:!0,children:"Saving..."})]}),parameters:{controls:{disable:!0}}},p={args:{variant:"standard",size:"md",children:"Click Me",disabled:!1,loading:!1}};var v,f,w;g.parameters={...g.parameters,docs:{...(v=g.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(w=(f=g.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var y,j,S;h.parameters={...h.parameters,docs:{...(y=h.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Wrap gap="12" alignItems="center">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">Extra Large</Button>
    </Wrap>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(S=(j=h.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var b,A,T;x.parameters={...x.parameters,docs:{...(b=x.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(T=(A=x.parameters)==null?void 0:A.docs)==null?void 0:T.source}}};var I,C,W;B.parameters={...B.parameters,docs:{...(I=B.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(W=(C=B.parameters)==null?void 0:C.docs)==null?void 0:W.source}}};var k,z,D,E,G;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    href: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    children: 'Special Link',
    iconAfter: 'arrow-square-out'
  }
}`,...(D=(z=s.parameters)==null?void 0:z.docs)==null?void 0:D.source},description:{story:"Button with href automatically renders as anchor element",...(G=(E=s.parameters)==null?void 0:E.docs)==null?void 0:G.description}}};var L,N,F,H,P;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(F=(N=i.parameters)==null?void 0:N.docs)==null?void 0:F.source},description:{story:"Use case: Primary action button group (e.g., form submission)",...(P=(H=i.parameters)==null?void 0:H.docs)==null?void 0:P.description}}};var U,M,R,q,V;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(R=(M=c.parameters)==null?void 0:M.docs)==null?void 0:R.source},description:{story:"Use case: Form actions with multiple options",...(V=(q=c.parameters)==null?void 0:q.docs)==null?void 0:V.description}}};var Q,X,_,O,J;d.parameters={...d.parameters,docs:{...(Q=d.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(_=(X=d.parameters)==null?void 0:X.docs)==null?void 0:_.source},description:{story:"Use case: Pagination buttons",...(J=(O=d.parameters)==null?void 0:O.docs)==null?void 0:J.description}}};var K,Y,Z,$,ee;l.parameters={...l.parameters,docs:{...(K=l.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(Z=(Y=l.parameters)==null?void 0:Y.docs)==null?void 0:Z.source},description:{story:"Use case: CRUD operation buttons",...(ee=($=l.parameters)==null?void 0:$.docs)==null?void 0:ee.description}}};var te,re,ne,ae,oe;m.parameters={...m.parameters,docs:{...(te=m.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ne=(re=m.parameters)==null?void 0:re.docs)==null?void 0:ne.source},description:{story:"Use case: Form submitting state",...(oe=(ae=m.parameters)==null?void 0:ae.docs)==null?void 0:oe.description}}};var se,ie,ce,de,le;p.parameters={...p.parameters,docs:{...(se=p.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    variant: 'standard',
    size: 'md',
    children: 'Click Me',
    disabled: false,
    loading: false
  }
}`,...(ce=(ie=p.parameters)==null?void 0:ie.docs)==null?void 0:ce.source},description:{story:"Interactive playground to test all props",...(le=(de=p.parameters)==null?void 0:de.docs)==null?void 0:le.description}}};const ke=["Variants","Sizes","InteractionStates","WithIcon","AsLink","ActionGroup","FormActions","Pagination","CrudActions","FormSubmitting","Interactive"];export{i as ActionGroup,s as AsLink,l as CrudActions,c as FormActions,m as FormSubmitting,x as InteractionStates,p as Interactive,d as Pagination,h as Sizes,g as Variants,B as WithIcon,ke as __namedExportsOrder,We as default};
