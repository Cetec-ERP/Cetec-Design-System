import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as Q}from"./index-BKyFwriW.js";import{w as X,e as y}from"./index-L8OlCEhE.js";import{m as ee,a as te,b as ne,e as se,g as oe,s as re,B as l,c as ie,d as ae,V as a}from"./dsComponent-BG2jnRr7.js";import{B as i}from"./Button-Cr4bC5CG.js";import{T as f}from"./Text-IAtRPmZy.js";import{I as le}from"./Icon-CrwLKW7B.js";import"./IconConfig-BuieZFlx.js";import{I as ce}from"./IconButton-DXX-zVMP.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Spinner-PLunUSsK.js";import"./FieldContext-D6URyQos.js";import"./Tooltip-bxPM6yCH.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";const Y={tone:"info"},de=[],me=[["root","alert__root"],["icon","alert__icon"],["content","alert__content"],["title","alert__title"],["message","alert__message"],["actions","alert__actions"],["dismiss","alert__dismiss"]],ue=me.map(([n,s])=>[n,se(s,Y,oe(de,n))]),he=ee((n={})=>Object.fromEntries(ue.map(([s,o])=>[s,o.recipeFn(n)]))),A=["tone"],ge=n=>({...Y,...te(n)}),pe=Object.assign(he,{__recipe__:!1,__name__:"alert",raw:n=>n,classNameMap:{},variantKeys:A,variantMap:{tone:["info","success","warning","danger","neutral"]},splitVariantProps(n){return ne(n,A)},getVariantProps:ge}),fe={info:"info",success:"success",warning:"warning",danger:"error",neutral:"info"},we={info:"icon.info",success:"icon.success",warning:"icon.warning",danger:"icon.danger",neutral:"icon.subtle"},t=n=>{const{tone:s="info",title:o,children:H,primaryAction:w,secondaryAction:b,dismissible:L=!1,onDismiss:Z,dismissLabel:K="Dismiss",...M}=n,[U,$]=re(M),r=pe({tone:s}),G=fe[s],J=!!(w??b);return e.jsxs(l,{...ae("Alert"),role:s==="danger"?"alert":"status",className:ie(r.root,U),...$,children:[e.jsx(l,{className:r.icon,children:e.jsx(le,{name:G,size:"20",fill:we[s],"aria-hidden":"true"})}),e.jsxs(l,{className:r.content,children:[o&&e.jsx(f,{as:"div",textStyle:"body.md",fontWeight:"bold",lineHeight:"tight",color:"text.bold",className:r.title,children:o}),e.jsx(f,{textStyle:"body.sm",lineHeight:"tight",color:"text",className:r.message,children:H}),J&&e.jsxs(l,{className:r.actions,children:[w,b]})]}),L&&e.jsx(ce,{variant:"ghost",size:"sm",iconName:"x",altText:K,onClick:Z,className:r.dismiss})]})};t.__docgenInfo={description:'Announces a state or outcome inline, in the flow of the section it concerns.\n\nUse `Alert` for blocking feedback the user must read before continuing and\nfor section-level awareness. Use `PageBanner` for a system condition that\naffects the whole page, `Toast` for transient non-blocking feedback, and\n`InlineNote` for guidance attached to a single form field.\n\nRenders a `div` with `role="alert"` when `tone` is `danger` so assistive\ntechnology interrupts, and `role="status"` otherwise so it announces\npolitely. `tone="neutral"` uses the info icon.\n\n@example\n```tsx\n<Alert tone="danger" title="Could not save" dismissible onDismiss={clear}>\n  The server rejected the request.\n</Alert>\n```',methods:[],displayName:"Alert",props:{tone:{required:!1,tsType:{name:"union",raw:"'info' | 'success' | 'warning' | 'danger' | 'neutral'",elements:[{name:"literal",value:"'info'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'neutral'"}]},description:'@default "info"'},title:{required:!1,tsType:{name:"string"},description:"Optional bold title rendered above the message. It does not create a document heading."},children:{required:!0,tsType:{name:"ReactNode"},description:"The alert message."},primaryAction:{required:!1,tsType:{name:"ReactNode"},description:"Leading action, normally a `Button`."},secondaryAction:{required:!1,tsType:{name:"ReactNode"},description:"Trailing action, normally a lower-emphasis `Button`. Render only alongside `primaryAction`."},dismissLabel:{required:!1,tsType:{name:"string"},description:'Accessible label for the close control. @default "Dismiss"'}}};const be='\nFour components cover notification, chosen on three axes: **category** (why the\nmessage exists), **placement** (where it belongs), and **tone** (what kind of\nstate it reports).\n\n| Category | Placement | Tone | Dismiss |\n| --- | --- | --- | --- |\n| System | `PageBanner` | danger / warning / info | No — until resolved |\n| Feedback, blocking | `Alert` | danger | Yes |\n| Feedback, non-blocking | `Toast` | success / danger | Auto |\n| Awareness, section | `Alert` | info / warning / neutral | Optional |\n| Awareness, field | `InlineNote` | info / warning / danger | No |\n\n`Alert` is the inline banner: it sits in the flow of the section it concerns.\n\n**Actions.** `Alert`, `PageBanner`, and `Toast` share one action API: the\nexplicit `primaryAction` and `secondaryAction` props, each taking a\n`Button`. Zero, one, or two actions are supported; there is no third slot.\n`InlineNote` takes no actions.\n\n**Tone icons.** Every tone renders its tone icon. `tone="neutral"` borrows\nthe info icon: it marks the message as informational without claiming a state.\n\n**Accessibility.** All four components use `role="alert"` (assertive) when\n`tone` is `danger` and `role="status"` (polite) otherwise.\n',Ee={title:"Components/Alert",component:t,tags:["autodocs"],parameters:{docs:{description:{component:be}}},argTypes:{tone:{control:"select",options:["info","success","warning","danger","neutral"],description:"Semantic tone."},title:{control:"text"},dismissible:{control:"boolean"}},args:{tone:"info",title:"Heads up",children:"Your subscription renews on the first of next month."}},c={},d={name:"Every tone",render:()=>e.jsxs(a,{alignItems:"stretch",gap:"12",children:[e.jsx(t,{tone:"info",title:"Info",children:"A scheduled export finished and is ready to download."}),e.jsx(t,{tone:"success",title:"Success",children:"Your changes were published to production."}),e.jsx(t,{tone:"warning",title:"Warning",children:"Two line items are missing a unit cost."}),e.jsx(t,{tone:"danger",title:"Danger",children:"The purchase order could not be submitted."}),e.jsx(t,{tone:"neutral",title:"Neutral",children:"Neutral uses the info icon on a neutral surface."})]})},m={name:"Title omitted",render:()=>e.jsxs(a,{alignItems:"stretch",gap:"12",children:[e.jsx(t,{tone:"info",title:"With a title",children:"The title is optional and is hidden entirely when absent."}),e.jsx(t,{tone:"info",children:"Without a title, the message carries the whole alert."})]})},u={name:"Zero, one, and two actions",render:()=>e.jsxs(a,{alignItems:"stretch",gap:"12",children:[e.jsx(t,{tone:"warning",title:"No actions",children:"Nothing to do here; the message stands on its own."}),e.jsx(t,{tone:"warning",title:"One action",primaryAction:e.jsx(i,{size:"sm",children:"Review items"}),children:"Two line items are missing a unit cost."}),e.jsx(t,{tone:"danger",title:"Two actions",primaryAction:e.jsx(i,{size:"sm",variant:"danger",children:"Retry"}),secondaryAction:e.jsx(i,{size:"sm",variant:"ghost",children:"View log"}),children:"The purchase order could not be submitted."})]})},h={name:"Dismissible and non-dismissible",render:function(){const[s,o]=Q.useState(!0);return e.jsxs(a,{alignItems:"stretch",gap:"12",children:[e.jsx(t,{tone:"info",title:"Not dismissible",children:"Awareness messages can stay until the underlying state changes."}),s?e.jsx(t,{tone:"info",title:"Dismissible",dismissible:!0,onDismiss:()=>o(!1),children:"The alert does not remove itself; `onDismiss` does."}):e.jsx(i,{size:"sm",variant:"ghost",onClick:()=>o(!0),children:"Bring the alert back"})]})}},g={name:"Ex: blocking feedback on a form",render:()=>e.jsxs(a,{alignItems:"stretch",gap:"12",maxW:"lg",children:[e.jsx(t,{tone:"danger",title:"Could not save this work order",primaryAction:e.jsx(i,{size:"sm",variant:"danger",children:"Try again"}),secondaryAction:e.jsx(i,{size:"sm",variant:"ghost",children:"Contact support"}),children:"The server rejected the request because the work order was edited by someone else while this form was open."}),e.jsx(f,{textStyle:"body.sm",children:"Form fields would follow here."})]})},p={name:"Test: role by tone",render:()=>e.jsxs(a,{alignItems:"stretch",gap:"12",children:[e.jsx(t,{tone:"danger",title:"Assertive",children:"Danger alerts interrupt."}),e.jsx(t,{tone:"info",title:"Polite",children:"Every other tone announces politely."})]}),play:async({canvasElement:n})=>{const s=X(n);await y(s.getByRole("alert")).toBeInTheDocument(),await y(s.getByRole("status")).toBeInTheDocument()}};var x,T,v;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(v=(T=c.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var j,k,S;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Every tone',
  render: () => <VStack alignItems="stretch" gap="12">
      <Alert tone="info" title="Info">
        A scheduled export finished and is ready to download.
      </Alert>
      <Alert tone="success" title="Success">
        Your changes were published to production.
      </Alert>
      <Alert tone="warning" title="Warning">
        Two line items are missing a unit cost.
      </Alert>
      <Alert tone="danger" title="Danger">
        The purchase order could not be submitted.
      </Alert>
      <Alert tone="neutral" title="Neutral">
        Neutral uses the info icon on a neutral surface.
      </Alert>
    </VStack>
}`,...(S=(k=d.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var B,N,I;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Title omitted',
  render: () => <VStack alignItems="stretch" gap="12">
      <Alert tone="info" title="With a title">
        The title is optional and is hidden entirely when absent.
      </Alert>
      <Alert tone="info">
        Without a title, the message carries the whole alert.
      </Alert>
    </VStack>
}`,...(I=(N=m.parameters)==null?void 0:N.docs)==null?void 0:I.source}}};var D,V,_;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Zero, one, and two actions',
  render: () => <VStack alignItems="stretch" gap="12">
      <Alert tone="warning" title="No actions">
        Nothing to do here; the message stands on its own.
      </Alert>
      <Alert tone="warning" title="One action" primaryAction={<Button size="sm">Review items</Button>}>
        Two line items are missing a unit cost.
      </Alert>
      <Alert tone="danger" title="Two actions" primaryAction={<Button size="sm" variant="danger">
            Retry
          </Button>} secondaryAction={<Button size="sm" variant="ghost">
            View log
          </Button>}>
        The purchase order could not be submitted.
      </Alert>
    </VStack>
}`,...(_=(V=u.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var R,E,z;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Dismissible and non-dismissible',
  render: function DismissibleStory() {
    const [visible, setVisible] = useState(true);
    return <VStack alignItems="stretch" gap="12">
        <Alert tone="info" title="Not dismissible">
          Awareness messages can stay until the underlying state changes.
        </Alert>
        {visible ? <Alert tone="info" title="Dismissible" dismissible onDismiss={() => setVisible(false)}>
            The alert does not remove itself; \`onDismiss\` does.
          </Alert> : <Button size="sm" variant="ghost" onClick={() => setVisible(true)}>
            Bring the alert back
          </Button>}
      </VStack>;
  }
}`,...(z=(E=h.parameters)==null?void 0:E.docs)==null?void 0:z.source}}};var C,F,P;g.parameters={...g.parameters,docs:{...(C=g.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Ex: blocking feedback on a form',
  render: () => <VStack alignItems="stretch" gap="12" maxW="lg">
      <Alert tone="danger" title="Could not save this work order" primaryAction={<Button size="sm" variant="danger">
            Try again
          </Button>} secondaryAction={<Button size="sm" variant="ghost">
            Contact support
          </Button>}>
        The server rejected the request because the work order was edited by
        someone else while this form was open.
      </Alert>
      <Text textStyle="body.sm">Form fields would follow here.</Text>
    </VStack>
}`,...(P=(F=g.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var W,q,O;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Test: role by tone',
  render: () => <VStack alignItems="stretch" gap="12">
      <Alert tone="danger" title="Assertive">
        Danger alerts interrupt.
      </Alert>
      <Alert tone="info" title="Polite">
        Every other tone announces politely.
      </Alert>
    </VStack>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('alert')).toBeInTheDocument();
    await expect(canvas.getByRole('status')).toBeInTheDocument();
  }
}`,...(O=(q=p.parameters)==null?void 0:q.docs)==null?void 0:O.source}}};const ze=["Default","Tones","WithoutTitle","Actions","Dismissible","ExFormSubmissionFailed","RoleByTone"];export{u as Actions,c as Default,h as Dismissible,g as ExFormSubmissionFailed,p as RoleByTone,d as Tones,m as WithoutTitle,ze as __namedExportsOrder,Ee as default};
