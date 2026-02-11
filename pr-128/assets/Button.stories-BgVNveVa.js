import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{f as Ct}from"./index-FPNDRHs_.js";import{S as zt,B as e}from"./Button-BhPgvrKk.js";import{T as s}from"./Text-BTJ27ppk.js";import{m as kt,b as Nt,d as Wt,e as Dt,g as Lt,s as Et,B as Gt,a as Ft,G as S,W as a,H as h}from"./Box-NF9jEJaL.js";import"./index-BCtMShv3.js";import{I as _t}from"./Icon-C8UQyDTw.js";import{D as Pt}from"./Divider-DfpIz_Ka.js";import{T as o}from"./Tooltip-BzWwswqF.js";const yt={variant:"standard",size:"md"},qt=[],Ht=[["container","icon-button__container"],["icon","icon-button__icon"]],Vt=Ht.map(([r,i])=>[r,Dt(i,yt,Lt(qt,r))]),Mt=kt((r={})=>Object.fromEntries(Vt.map(([i,w])=>[i,w.recipeFn(r)]))),I=["variant","size"],Ut=r=>({...yt,...Nt(r)}),Rt=Object.assign(Mt,{__recipe__:!1,__name__:"iconButton",raw:r=>r,classNameMap:{},variantKeys:I,variantMap:{variant:["standard","primary","hollow","ghost","cta","danger"],size:["md","xl","lg","sm"]},splitVariantProps(r){return Wt(r,I)},getVariantProps:Ut}),n=r=>{const{iconName:i,variant:w,size:wt,href:x,loading:b,disabled:bt,type:jt="button",...St}=r,T=Rt({variant:w,size:wt}),[Tt,It]=Et(St),j=b||bt;return t.jsx(Gt,{as:x?"a":"button",disabled:j,"aria-disabled":j,"aria-label":"icon-button",className:`${Ft(T.container,Tt)} group`,...x?{href:x}:{type:jt},...It,...j&&x&&{onClick:At=>At.preventDefault()},children:t.jsxs(t.Fragment,{children:[t.jsx(_t,{name:i,className:T.icon,opacity:b?0:1}),b&&t.jsx(S,{position:"absolute",top:"0",left:"0",right:"0",bottom:"0",placeItems:"center",children:t.jsx(zt,{size:"sm"})})]})})};n.__docgenInfo={description:"",methods:[],displayName:"IconButton",props:{iconName:{required:!0,tsType:{name:"IconNamesList"},description:""},href:{required:!1,tsType:{name:"string"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},type:{required:!1,tsType:{name:"union",raw:"'submit' | 'reset' | 'button'",elements:[{name:"literal",value:"'submit'"},{name:"literal",value:"'reset'"},{name:"literal",value:"'button'"}]},description:""}}};const ee={title:"Components/Button",component:e,parameters:{layout:"centered",docs:{description:{component:`Button component with comprehensive variant support.

Features:
- Multiple visual variants (standard, primary, hollow, ghost, cta, danger)
- Four sizes (sm, md, lg, xl)
- Icon support via string names (iconBefore, iconAfter, iconName)
- Loading and disabled states
- Auto-renders as anchor when href is provided`}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["standard","primary","hollow","ghost","cta","danger"],description:"Visual style variants",table:{defaultValue:{summary:"standard"}}},size:{control:"select",options:["sm","md","lg","xl"],description:"Button size",table:{defaultValue:{summary:"md"}}},disabled:{control:"boolean",description:"Disabled state - non-interactive"},loading:{control:"boolean",description:"Loading state - shows spinner and disables interaction"},iconBefore:{control:"select",options:[void 0,"plus","check","arrow-left","edit","search"],description:"Icon name to display before text"},iconAfter:{control:"select",options:[void 0,"arrow-right","chevron-down","arrow-square-out"],description:"Icon name to display after text"},href:{control:"text",description:"When provided, button renders as anchor element"},children:{control:"text",description:"Button content"}},args:{onClick:Ct()}},B={render:()=>t.jsx(a,{gap:"12",alignItems:"center",children:["standard","primary","hollow","ghost","cta","danger"].map(r=>t.jsx(e,{variant:r,children:r},r))}),parameters:{controls:{disable:!0}}},f={render:()=>t.jsxs(a,{gap:"12",alignItems:"center",children:[t.jsx(e,{size:"sm",children:"Small"}),t.jsx(e,{size:"md",children:"Medium"}),t.jsx(e,{size:"lg",children:"Large"}),t.jsx(e,{size:"xl",children:"Extra Large"})]}),parameters:{controls:{disable:!0}}},v={render:()=>t.jsxs(S,{gridTemplateColumns:"auto 1fr",columnGap:"12",rowGap:"32",alignItems:"center",children:[t.jsx(s,{textStyle:"mono.md",mr:"16",children:"Disabled"}),t.jsx(a,{gap:"12",alignItems:"center",children:["standard","primary","hollow","ghost","cta","danger"].map(r=>t.jsx(e,{variant:r,disabled:!0,children:r},r))}),t.jsx(s,{textStyle:"mono.md",mr:"16",children:"Loading"}),t.jsx(a,{gap:"12",alignItems:"center",children:["standard","primary","hollow","ghost","cta","danger"].map(r=>t.jsx(e,{variant:r,loading:!0,children:r},r))})]}),parameters:{controls:{disable:!0}}},y={render:()=>t.jsxs(S,{gridTemplateColumns:"auto 1fr",columnGap:"12",rowGap:"32",alignItems:"center",children:[t.jsx(s,{textStyle:"heading.sm",gridColumn:"1 / -1",children:"Button"}),t.jsx(s,{textStyle:"mono.md",mr:"16",children:"iconBefore"}),t.jsxs(a,{gap:"12",children:[t.jsx(e,{iconBefore:"plus",children:"Add"}),t.jsx(e,{iconBefore:"timer",variant:"primary",children:"Start Timer"}),t.jsx(e,{iconBefore:"calendar",variant:"hollow",children:"2026-01-12"}),t.jsx(e,{iconBefore:"info",variant:"ghost",children:"Learn More"}),t.jsx(e,{iconBefore:"trash",variant:"danger",children:"Delete"})]}),t.jsx(s,{textStyle:"mono.md",mr:"16",children:"iconAfter"}),t.jsxs(a,{gap:"12",children:[t.jsx(e,{iconAfter:"send",variant:"cta",children:"Send Invoice"}),t.jsx(e,{iconAfter:"arrow-square-out",children:"Logout"}),t.jsx(e,{iconAfter:"download",variant:"primary",children:"Download"}),t.jsx(e,{iconAfter:"arrow-square-out",children:"Logout"})]}),t.jsx(Pt,{gridColumn:"1 / -1"}),t.jsx(s,{textStyle:"heading.sm",mr:"16",children:"IconButton"}),t.jsxs(a,{gap:"56",children:[t.jsx(o,{text:"Download",children:t.jsx(n,{iconName:"download"})}),t.jsx(o,{text:"Print",children:t.jsx(n,{iconName:"printer",variant:"hollow"})}),t.jsx(o,{text:"Last sync: 3 hours ago",children:t.jsx(n,{iconName:"cloud-synced",variant:"ghost"})}),t.jsx(o,{text:"Edit",children:t.jsx(n,{iconName:"edit",variant:"primary"})}),t.jsx(o,{text:"Send",children:t.jsx(n,{iconName:"send",variant:"cta"})}),t.jsx(o,{text:"This cannot be undone",children:t.jsx(n,{iconName:"trash",variant:"danger"})})]})]}),parameters:{controls:{disable:!0}}},c={args:{href:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",children:"Special Link",iconAfter:"arrow-square-out"}},d={name:"Ex: Action Group",render:()=>t.jsxs(h,{gap:"8",children:[t.jsx(e,{variant:"hollow",children:"Cancel"}),t.jsx(e,{variant:"primary",children:"Confirm"})]}),parameters:{controls:{disable:!0}}},l={name:"Ex: Form Actions",render:()=>t.jsxs(h,{gap:"8",justifyContent:"flex-end",children:[t.jsx(e,{variant:"hollow",children:"Reset"}),t.jsx(e,{variant:"hollow",children:"Save Draft"}),t.jsx(e,{variant:"primary",iconAfter:"arrow-right",children:"Submit"})]}),parameters:{controls:{disable:!0}}},m={name:"Ex: Pagination",render:()=>t.jsxs(h,{gap:"8",justifyContent:"space-between",width:"280",children:[t.jsx(e,{variant:"hollow",iconBefore:"arrow-left",children:"Back"}),t.jsx(e,{variant:"primary",iconAfter:"arrow-right",children:"Next"})]}),parameters:{controls:{disable:!0}}},p={name:"Ex: CRUD Actions",render:()=>t.jsxs(h,{gap:"8",flexWrap:"wrap",children:[t.jsx(e,{variant:"primary",size:"sm",iconBefore:"plus",children:"Create"}),t.jsx(e,{variant:"hollow",size:"sm",iconBefore:"edit",children:"Edit"}),t.jsx(e,{variant:"ghost",size:"sm",iconBefore:"trash",children:"Delete"})]}),parameters:{controls:{disable:!0}}},u={name:"Ex: Form Submitting",render:()=>t.jsxs(h,{gap:"8",children:[t.jsx(e,{variant:"hollow",disabled:!0,children:"Cancel"}),t.jsx(e,{variant:"primary",loading:!0,children:"Saving..."})]}),parameters:{controls:{disable:!0}}},g={args:{variant:"standard",size:"md",children:"Click Me",disabled:!1,loading:!1}};var A,C,z;B.parameters={...B.parameters,docs:{...(A=B.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(z=(C=B.parameters)==null?void 0:C.docs)==null?void 0:z.source}}};var k,N,W;f.parameters={...f.parameters,docs:{...(k=f.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(W=(N=f.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};var D,L,E;v.parameters={...v.parameters,docs:{...(D=v.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(E=(L=v.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};var G,F,_;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(_=(F=y.parameters)==null?void 0:F.docs)==null?void 0:_.source}}};var P,q,H,V,M;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    href: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    children: 'Special Link',
    iconAfter: 'arrow-square-out'
  }
}`,...(H=(q=c.parameters)==null?void 0:q.docs)==null?void 0:H.source},description:{story:"Button with href automatically renders as anchor element",...(M=(V=c.parameters)==null?void 0:V.docs)==null?void 0:M.description}}};var U,R,Q,O,K;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(Q=(R=d.parameters)==null?void 0:R.docs)==null?void 0:Q.source},description:{story:"Use case: Primary action button group (e.g., form submission)",...(K=(O=d.parameters)==null?void 0:O.docs)==null?void 0:K.description}}};var X,$,J,Y,Z;l.parameters={...l.parameters,docs:{...(X=l.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(J=($=l.parameters)==null?void 0:$.docs)==null?void 0:J.source},description:{story:"Use case: Form actions with multiple options",...(Z=(Y=l.parameters)==null?void 0:Y.docs)==null?void 0:Z.description}}};var tt,et,rt,nt,at;m.parameters={...m.parameters,docs:{...(tt=m.parameters)==null?void 0:tt.docs,source:{originalSource:`{
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
}`,...(rt=(et=m.parameters)==null?void 0:et.docs)==null?void 0:rt.source},description:{story:"Use case: Pagination buttons",...(at=(nt=m.parameters)==null?void 0:nt.docs)==null?void 0:at.description}}};var ot,st,it,ct,dt;p.parameters={...p.parameters,docs:{...(ot=p.parameters)==null?void 0:ot.docs,source:{originalSource:`{
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
}`,...(it=(st=p.parameters)==null?void 0:st.docs)==null?void 0:it.source},description:{story:"Use case: CRUD operation buttons",...(dt=(ct=p.parameters)==null?void 0:ct.docs)==null?void 0:dt.description}}};var lt,mt,pt,ut,gt;u.parameters={...u.parameters,docs:{...(lt=u.parameters)==null?void 0:lt.docs,source:{originalSource:`{
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
}`,...(pt=(mt=u.parameters)==null?void 0:mt.docs)==null?void 0:pt.source},description:{story:"Use case: Form submitting state",...(gt=(ut=u.parameters)==null?void 0:ut.docs)==null?void 0:gt.description}}};var ht,xt,Bt,ft,vt;g.parameters={...g.parameters,docs:{...(ht=g.parameters)==null?void 0:ht.docs,source:{originalSource:`{
  args: {
    variant: 'standard',
    size: 'md',
    children: 'Click Me',
    disabled: false,
    loading: false
  }
}`,...(Bt=(xt=g.parameters)==null?void 0:xt.docs)==null?void 0:Bt.source},description:{story:"Interactive playground to test all props",...(vt=(ft=g.parameters)==null?void 0:ft.docs)==null?void 0:vt.description}}};const re=["Variants","Sizes","InteractionStates","WithIcon","AsLink","ActionGroup","FormActions","Pagination","CrudActions","FormSubmitting","Interactive"];export{d as ActionGroup,c as AsLink,p as CrudActions,l as FormActions,u as FormSubmitting,v as InteractionStates,g as Interactive,m as Pagination,f as Sizes,B as Variants,y as WithIcon,re as __namedExportsOrder,ee as default};
