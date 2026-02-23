import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{f as ut}from"./index-FPNDRHs_.js";import{B as e}from"./Button-BVq08bnu.js";import{T as s}from"./Text-DeSZ72bP.js";import{I as a}from"./IconButton-Dw3P7sci.js";import{D as ht}from"./Divider-0-CNNm0O.js";import{T as o}from"./Tooltip-DCmDIkBx.js";import"./index-BCtMShv3.js";import{W as n,G as pt,H as h}from"./Box-Do4kfhe3.js";import"./Spinner-gDUrdfRc.js";import"./Icon-e7_Gs79q.js";const At={title:"Components/Button",component:e,parameters:{layout:"centered",docs:{description:{component:`Button component with comprehensive variant support.

Features:
- Multiple visual variants (standard, primary, hollow, ghost, cta, danger)
- Four sizes (sm, md, lg, xl)
- Icon support via string names (iconBefore, iconAfter, iconName)
- Loading and disabled states
- Auto-renders as anchor when href is provided`}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["standard","primary","hollow","ghost","cta","danger"],description:"Visual style variants",table:{defaultValue:{summary:"standard"}}},size:{control:"select",options:["sm","md","lg","xl"],description:"Button size",table:{defaultValue:{summary:"md"}}},disabled:{control:"boolean",description:"Disabled state - non-interactive"},loading:{control:"boolean",description:"Loading state - shows spinner and disables interaction"},iconBefore:{control:"select",options:[void 0,"plus","check","arrow-left","edit","search"],description:"Icon name to display before text"},iconAfter:{control:"select",options:[void 0,"arrow-right","chevron-down","arrow-square-out"],description:"Icon name to display after text"},href:{control:"text",description:"When provided, button renders as anchor element"},children:{control:"text",description:"Button content"}},args:{onClick:ut()}},g={render:()=>t.jsx(n,{gap:"12",alignItems:"center",children:["standard","primary","hollow","ghost","cta","danger"].map(r=>t.jsx(e,{variant:r,children:r},r))}),parameters:{controls:{disable:!0}}},x={render:()=>t.jsxs(n,{gap:"12",alignItems:"center",children:[t.jsx(e,{size:"sm",children:"Small"}),t.jsx(e,{size:"md",children:"Medium"}),t.jsx(e,{size:"lg",children:"Large"}),t.jsx(e,{size:"xl",children:"Extra Large"})]}),parameters:{controls:{disable:!0}}},B={render:()=>t.jsxs(pt,{gridTemplateColumns:"auto 1fr",columnGap:"12",rowGap:"32",alignItems:"center",children:[t.jsx(s,{textStyle:"mono.md",mr:"16",children:"Disabled"}),t.jsx(n,{gap:"12",alignItems:"center",children:["standard","primary","hollow","ghost","cta","danger"].map(r=>t.jsx(e,{variant:r,disabled:!0,children:r},r))}),t.jsx(s,{textStyle:"mono.md",mr:"16",children:"Loading"}),t.jsx(n,{gap:"12",alignItems:"center",children:["standard","primary","hollow","ghost","cta","danger"].map(r=>t.jsx(e,{variant:r,loading:!0,children:r},r))})]}),parameters:{controls:{disable:!0}}},f={render:()=>t.jsxs(pt,{gridTemplateColumns:"auto 1fr",columnGap:"12",rowGap:"32",alignItems:"center",children:[t.jsx(s,{textStyle:"heading.sm",gridColumn:"1 / -1",children:"Button"}),t.jsx(s,{textStyle:"mono.md",mr:"16",children:"iconBefore"}),t.jsxs(n,{gap:"12",children:[t.jsx(e,{iconBefore:"plus",children:"Add"}),t.jsx(e,{iconBefore:"timer",variant:"primary",children:"Start Timer"}),t.jsx(e,{iconBefore:"calendar",variant:"hollow",children:"2026-01-12"}),t.jsx(e,{iconBefore:"info",variant:"ghost",children:"Learn More"}),t.jsx(e,{iconBefore:"trash",variant:"danger",children:"Delete"})]}),t.jsx(s,{textStyle:"mono.md",mr:"16",children:"iconAfter"}),t.jsxs(n,{gap:"12",children:[t.jsx(e,{iconAfter:"send",variant:"cta",children:"Send Invoice"}),t.jsx(e,{iconAfter:"arrow-square-out",children:"Logout"}),t.jsx(e,{iconAfter:"download",variant:"primary",children:"Download"}),t.jsx(e,{iconAfter:"arrow-square-out",children:"Logout"})]}),t.jsx(ht,{gridColumn:"1 / -1"}),t.jsx(s,{textStyle:"heading.sm",mr:"16",children:"IconButton"}),t.jsxs(n,{gap:"56",children:[t.jsx(o,{text:"Download",children:t.jsx(a,{iconName:"download"})}),t.jsx(o,{text:"Print",children:t.jsx(a,{iconName:"printer",variant:"hollow"})}),t.jsx(o,{text:"Last sync: 3 hours ago",children:t.jsx(a,{iconName:"cloud-synced",variant:"ghost"})}),t.jsx(o,{text:"Edit",children:t.jsx(a,{iconName:"edit",variant:"primary"})}),t.jsx(o,{text:"Send",children:t.jsx(a,{iconName:"send",variant:"cta"})}),t.jsx(o,{text:"This cannot be undone",children:t.jsx(a,{iconName:"trash",variant:"danger"})})]})]}),parameters:{controls:{disable:!0}}},i={args:{href:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",children:"Special Link",iconAfter:"arrow-square-out"}},c={name:"Ex: Action Group",render:()=>t.jsxs(h,{gap:"8",children:[t.jsx(e,{variant:"hollow",children:"Cancel"}),t.jsx(e,{variant:"primary",children:"Confirm"})]}),parameters:{controls:{disable:!0}}},d={name:"Ex: Form Actions",render:()=>t.jsxs(h,{gap:"8",justifyContent:"flex-end",children:[t.jsx(e,{variant:"hollow",children:"Reset"}),t.jsx(e,{variant:"hollow",children:"Save Draft"}),t.jsx(e,{variant:"primary",iconAfter:"arrow-right",children:"Submit"})]}),parameters:{controls:{disable:!0}}},l={name:"Ex: Pagination",render:()=>t.jsxs(h,{gap:"8",justifyContent:"space-between",width:"280",children:[t.jsx(e,{variant:"hollow",iconBefore:"arrow-left",children:"Back"}),t.jsx(e,{variant:"primary",iconAfter:"arrow-right",children:"Next"})]}),parameters:{controls:{disable:!0}}},m={name:"Ex: CRUD Actions",render:()=>t.jsxs(h,{gap:"8",flexWrap:"wrap",children:[t.jsx(e,{variant:"primary",size:"sm",iconBefore:"plus",children:"Create"}),t.jsx(e,{variant:"hollow",size:"sm",iconBefore:"edit",children:"Edit"}),t.jsx(e,{variant:"ghost",size:"sm",iconBefore:"trash",children:"Delete"})]}),parameters:{controls:{disable:!0}}},p={name:"Ex: Form Submitting",render:()=>t.jsxs(h,{gap:"8",children:[t.jsx(e,{variant:"hollow",disabled:!0,children:"Cancel"}),t.jsx(e,{variant:"primary",loading:!0,children:"Saving..."})]}),parameters:{controls:{disable:!0}}},u={args:{variant:"standard",size:"md",children:"Click Me",disabled:!1,loading:!1}};var v,w,j;g.parameters={...g.parameters,docs:{...(v=g.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <Wrap gap="12" alignItems="center">
      {(['standard', 'primary', 'hollow', 'ghost', 'cta', 'danger'] as const).map(variant => <Button key={variant} variant={variant}>
          {variant}
        </Button>)}
    </Wrap>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(j=(w=g.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var y,S,b;x.parameters={...x.parameters,docs:{...(y=x.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(b=(S=x.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var T,A,I;B.parameters={...B.parameters,docs:{...(T=B.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Grid gridTemplateColumns="auto 1fr" columnGap="12" rowGap="32" alignItems="center">
      <Text textStyle="mono.md" mr="16">
        Disabled
      </Text>
      <Wrap gap="12" alignItems="center">
        {(['standard', 'primary', 'hollow', 'ghost', 'cta', 'danger'] as const).map(variant => <Button key={variant} variant={variant} disabled>
            {variant}
          </Button>)}
      </Wrap>
      <Text textStyle="mono.md" mr="16">
        Loading
      </Text>
      <Wrap gap="12" alignItems="center">
        {(['standard', 'primary', 'hollow', 'ghost', 'cta', 'danger'] as const).map(variant => <Button key={variant} variant={variant} loading>
            {variant}
          </Button>)}
      </Wrap>
    </Grid>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(I=(A=B.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var C,k,W;f.parameters={...f.parameters,docs:{...(C=f.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
        <Button iconBefore="calendar" variant="hollow">
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
        <Button iconAfter="arrow-square-out">Logout</Button>
      </Wrap>

      <Divider gridColumn="1 / -1" />

      <Text textStyle="heading.sm" mr="16">
        IconButton
      </Text>
      <Wrap gap="56">
        <Tooltip text="Download">
          <IconButton iconName="download" />
        </Tooltip>
        <Tooltip text="Print">
          <IconButton iconName="printer" variant="hollow" />
        </Tooltip>
        <Tooltip text="Last sync: 3 hours ago">
          <IconButton iconName="cloud-synced" variant="ghost" />
        </Tooltip>
        <Tooltip text="Edit">
          <IconButton iconName="edit" variant="primary" />
        </Tooltip>
        <Tooltip text="Send">
          <IconButton iconName="send" variant="cta" />
        </Tooltip>
        <Tooltip text="This cannot be undone">
          <IconButton iconName="trash" variant="danger" />
        </Tooltip>
      </Wrap>
    </Grid>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(W=(k=f.parameters)==null?void 0:k.docs)==null?void 0:W.source}}};var z,L,D,E,G;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    href: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    children: 'Special Link',
    iconAfter: 'arrow-square-out'
  }
}`,...(D=(L=i.parameters)==null?void 0:L.docs)==null?void 0:D.source},description:{story:"Button with href automatically renders as anchor element",...(G=(E=i.parameters)==null?void 0:E.docs)==null?void 0:G.description}}};var N,F,H,P,U;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(H=(F=c.parameters)==null?void 0:F.docs)==null?void 0:H.source},description:{story:"Use case: Primary action button group (e.g., form submission)",...(U=(P=c.parameters)==null?void 0:P.docs)==null?void 0:U.description}}};var q,M,R,V,Q;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(R=(M=d.parameters)==null?void 0:M.docs)==null?void 0:R.source},description:{story:"Use case: Form actions with multiple options",...(Q=(V=d.parameters)==null?void 0:V.docs)==null?void 0:Q.description}}};var X,_,O,J,K;l.parameters={...l.parameters,docs:{...(X=l.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(O=(_=l.parameters)==null?void 0:_.docs)==null?void 0:O.source},description:{story:"Use case: Pagination buttons",...(K=(J=l.parameters)==null?void 0:J.docs)==null?void 0:K.description}}};var Y,Z,$,tt,et;m.parameters={...m.parameters,docs:{...(Y=m.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...($=(Z=m.parameters)==null?void 0:Z.docs)==null?void 0:$.source},description:{story:"Use case: CRUD operation buttons",...(et=(tt=m.parameters)==null?void 0:tt.docs)==null?void 0:et.description}}};var rt,nt,at,ot,st;p.parameters={...p.parameters,docs:{...(rt=p.parameters)==null?void 0:rt.docs,source:{originalSource:`{
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
}`,...(at=(nt=p.parameters)==null?void 0:nt.docs)==null?void 0:at.source},description:{story:"Use case: Form submitting state",...(st=(ot=p.parameters)==null?void 0:ot.docs)==null?void 0:st.description}}};var it,ct,dt,lt,mt;u.parameters={...u.parameters,docs:{...(it=u.parameters)==null?void 0:it.docs,source:{originalSource:`{
  args: {
    variant: 'standard',
    size: 'md',
    children: 'Click Me',
    disabled: false,
    loading: false
  }
}`,...(dt=(ct=u.parameters)==null?void 0:ct.docs)==null?void 0:dt.source},description:{story:"Interactive playground to test all props",...(mt=(lt=u.parameters)==null?void 0:lt.docs)==null?void 0:mt.description}}};const It=["Variants","Sizes","InteractionStates","WithIcon","AsLink","ActionGroup","FormActions","Pagination","CrudActions","FormSubmitting","Interactive"];export{c as ActionGroup,i as AsLink,m as CrudActions,d as FormActions,p as FormSubmitting,B as InteractionStates,u as Interactive,l as Pagination,x as Sizes,g as Variants,f as WithIcon,It as __namedExportsOrder,At as default};
