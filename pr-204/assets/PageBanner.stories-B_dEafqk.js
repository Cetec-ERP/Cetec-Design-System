import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{w as G,e as w}from"./index-DPYJpPba.js";import"./index-BKyFwriW.js";import{m as H,c as J,s as Q,a as W,g as X,b as ee,B as r,d as ne,e as ae,V as o}from"./dsComponent-COP_u32W.js";import{B as h}from"./Button-9qTdRXCj.js";import{T as q}from"./Text-Bb_CaJVi.js";import{I as se}from"./Icon-DykL05lh.js";import"./IconConfig-qRFEvzON.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Spinner-CUl5P6MP.js";import"./FieldContext-D6URyQos.js";import"./Tooltip-BI37R98K.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";const U={tone:"info"},te=[],re=[["root","pageBanner__root"],["icon","pageBanner__icon"],["content","pageBanner__content"],["message","pageBanner__message"],["actions","pageBanner__actions"]],oe=re.map(([a,s])=>[a,W(s,U,X(te,a))]),ie=H((a={})=>Object.fromEntries(oe.map(([s,i])=>[s,i.recipeFn(a)]))),x=["tone"],ce=a=>({...U,...J(a)}),le=Object.assign(ie,{__recipe__:!1,__name__:"pageBanner",raw:a=>a,classNameMap:{},variantKeys:x,variantMap:{tone:["info","success","warning","danger","neutral"]},splitVariantProps(a){return Q(a,x)},getVariantProps:ce}),de={info:"info",success:"success",warning:"warning",danger:"error",neutral:null},me={info:"icon.info",success:"icon.success",warning:"icon.warning",danger:"icon.danger",neutral:"icon.subtle"},n=a=>{const{tone:s="info",emphasis:i="subtle",children:F,primaryAction:u,secondaryAction:b,...K}=a,[M,Z]=ee(K),t=le({tone:s}),B=i==="bold",y=de[s],L=B?"icon.inverse":me[s],Y=B?"text.inverse":"text",$=!!(u??b);return e.jsxs(r,{...ae("PageBanner"),role:s==="danger"?"alert":"status","data-emphasis":i,className:ne(t.root,M),...Z,children:[y&&e.jsx(r,{className:t.icon,children:e.jsx(se,{name:y,size:"20",fill:L,"aria-hidden":"true"})}),e.jsx(r,{className:t.content,children:e.jsx(q,{textStyle:"body.sm",color:Y,className:t.message,children:F})}),$&&e.jsxs(r,{className:t.actions,children:[u,b]})]})};n.__docgenInfo={description:'States a system condition that affects the entire page, spanning its full\nwidth.\n\nA page banner has no dismiss control by design: it describes a condition\nthat persists until it is resolved, so removing it is the application\'s\ndecision, not the reader\'s. Use `Alert` for a message scoped to one section.\n\nRenders a `div` with `role="alert"` when `tone` is `danger` and\n`role="status"` otherwise. `tone="neutral"` renders no icon.\n\n@example\n```tsx\n<PageBanner tone="warning" emphasis="bold">\n  Scheduled maintenance begins at 22:00 UTC.\n</PageBanner>\n```',methods:[],displayName:"PageBanner",props:{tone:{required:!1,tsType:{name:"union",raw:"'info' | 'success' | 'warning' | 'danger' | 'neutral'",elements:[{name:"literal",value:"'info'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'neutral'"}]},description:'@default "info"'},emphasis:{required:!1,tsType:{name:"union",raw:"'subtle' | 'bold'",elements:[{name:"literal",value:"'subtle'"},{name:"literal",value:"'bold'"}]},description:'Visual weight. `subtle` tints the page edge; `bold` fills the banner with\nthe tone color and inverts text and icon for maximum contrast.\n\n@default "subtle"'},children:{required:!0,tsType:{name:"ReactNode"},description:"The banner message."},primaryAction:{required:!1,tsType:{name:"ReactNode"},description:"Leading action, normally a `Button`."},secondaryAction:{required:!1,tsType:{name:"ReactNode"},description:"Trailing action, normally a lower-emphasis `Button`. Render only alongside `primaryAction`."}}};const ge='\n`PageBanner` is the page-width placement in the notification set. It reports a\n**system** condition — degraded service, a read-only window, a required\nmigration — and therefore has **no dismiss control**: the banner goes away when\nthe condition is resolved, not when the reader is tired of it.\n\n| Category | Placement | Tone | Dismiss |\n| --- | --- | --- | --- |\n| System | `PageBanner` | danger / warning / info | No — until resolved |\n| Feedback, blocking | `Alert` | danger | Yes |\n| Feedback, non-blocking | `Toast` | success / danger | Auto |\n| Awareness, section | `Alert` | info / warning / neutral | Optional |\n| Awareness, field | `InlineNote` | info / warning / danger | No |\n\n**Emphasis.** `subtle` tints the page edge and is the default. `bold` fills\nthe banner with the tone color and inverts text and icon; reserve it for a\ncondition that must not be scrolled past.\n\n**Actions.** Same API as `Alert` and `Toast`: `primaryAction` and\n`secondaryAction`, each a `Button`, both optional.\n\n**Accessibility.** `role="alert"` when `tone` is `danger`,\n`role="status"` otherwise. `tone="neutral"` renders no icon.\n',Se={title:"Components/PageBanner",component:n,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:ge}}},argTypes:{tone:{control:"select",options:["info","success","warning","danger","neutral"]},emphasis:{control:"inline-radio",options:["subtle","bold"]}},args:{tone:"info",emphasis:"subtle",children:"Scheduled maintenance begins tonight at 22:00 UTC."}},c={},l={name:"Every tone, subtle",render:()=>e.jsxs(o,{alignItems:"stretch",gap:"0",children:[e.jsx(n,{tone:"info",children:"A new release is available."}),e.jsx(n,{tone:"success",children:"All services are operating normally."}),e.jsx(n,{tone:"warning",children:"Scheduled maintenance begins tonight at 22:00 UTC."}),e.jsx(n,{tone:"danger",children:"Order sync is failing. New orders are not reaching the warehouse."}),e.jsx(n,{tone:"neutral",children:"This environment is a sandbox. Neutral renders no icon."})]})},d={name:"Every tone, bold",render:()=>e.jsxs(o,{alignItems:"stretch",gap:"0",children:[e.jsx(n,{tone:"info",emphasis:"bold",children:"A new release is available."}),e.jsx(n,{tone:"success",emphasis:"bold",children:"All services are operating normally."}),e.jsx(n,{tone:"warning",emphasis:"bold",children:"Scheduled maintenance begins tonight at 22:00 UTC."}),e.jsx(n,{tone:"danger",emphasis:"bold",children:"Order sync is failing. New orders are not reaching the warehouse."}),e.jsx(n,{tone:"neutral",emphasis:"bold",children:"This environment is a sandbox. Neutral renders no icon."})]})},m={name:"Zero, one, and two actions",render:()=>e.jsxs(o,{alignItems:"stretch",gap:"0",children:[e.jsx(n,{tone:"warning",children:"No actions: the message stands alone."}),e.jsx(n,{tone:"warning",primaryAction:e.jsx(h,{size:"sm",children:"View schedule"}),children:"One action."}),e.jsx(n,{tone:"danger",emphasis:"bold",primaryAction:e.jsx(h,{size:"sm",variant:"primary",children:"Open status page"}),secondaryAction:e.jsx(h,{size:"sm",variant:"ghost",children:"Dismiss for this session"}),children:"Two actions. A banner has no built-in dismiss, so anything of that kind is an explicit, application-owned action."})]})},g={name:"Ex: degraded service above the app shell",render:()=>e.jsxs(o,{alignItems:"stretch",gap:"0",children:[e.jsx(n,{tone:"danger",emphasis:"bold",primaryAction:e.jsx(h,{size:"sm",variant:"primary",children:"Open status page"}),children:"Order sync has been failing since 14:20. New orders are queued and will send automatically once the connection recovers."}),e.jsx(r,{p:"24",children:e.jsx(q,{textStyle:"body.md",children:"Application content sits below the banner."})})]})},p={name:"Test: role by tone",render:()=>e.jsxs(o,{alignItems:"stretch",gap:"0",children:[e.jsx(n,{tone:"danger",children:"Danger banners interrupt."}),e.jsx(n,{tone:"info",children:"Every other tone announces politely."})]}),play:async({canvasElement:a})=>{const s=G(a);await w(s.getByRole("alert")).toBeInTheDocument(),await w(s.getByRole("status")).toBeInTheDocument()}};var f,v,P;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(P=(v=c.parameters)==null?void 0:v.docs)==null?void 0:P.source}}};var A,T,j;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Every tone, subtle',
  render: () => <VStack alignItems="stretch" gap="0">
      <PageBanner tone="info">A new release is available.</PageBanner>
      <PageBanner tone="success">
        All services are operating normally.
      </PageBanner>
      <PageBanner tone="warning">
        Scheduled maintenance begins tonight at 22:00 UTC.
      </PageBanner>
      <PageBanner tone="danger">
        Order sync is failing. New orders are not reaching the warehouse.
      </PageBanner>
      <PageBanner tone="neutral">
        This environment is a sandbox. Neutral renders no icon.
      </PageBanner>
    </VStack>
}`,...(j=(T=l.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var S,N,I;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Every tone, bold',
  render: () => <VStack alignItems="stretch" gap="0">
      <PageBanner tone="info" emphasis="bold">
        A new release is available.
      </PageBanner>
      <PageBanner tone="success" emphasis="bold">
        All services are operating normally.
      </PageBanner>
      <PageBanner tone="warning" emphasis="bold">
        Scheduled maintenance begins tonight at 22:00 UTC.
      </PageBanner>
      <PageBanner tone="danger" emphasis="bold">
        Order sync is failing. New orders are not reaching the warehouse.
      </PageBanner>
      <PageBanner tone="neutral" emphasis="bold">
        This environment is a sandbox. Neutral renders no icon.
      </PageBanner>
    </VStack>
}`,...(I=(N=d.parameters)==null?void 0:N.docs)==null?void 0:I.source}}};var _,V,k;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Zero, one, and two actions',
  render: () => <VStack alignItems="stretch" gap="0">
      <PageBanner tone="warning">
        No actions: the message stands alone.
      </PageBanner>
      <PageBanner tone="warning" primaryAction={<Button size="sm">View schedule</Button>}>
        One action.
      </PageBanner>
      <PageBanner tone="danger" emphasis="bold" primaryAction={<Button size="sm" variant="primary">
            Open status page
          </Button>} secondaryAction={<Button size="sm" variant="ghost">
            Dismiss for this session
          </Button>}>
        Two actions. A banner has no built-in dismiss, so anything of that kind
        is an explicit, application-owned action.
      </PageBanner>
    </VStack>
}`,...(k=(V=m.parameters)==null?void 0:V.docs)==null?void 0:k.source}}};var E,O,C;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Ex: degraded service above the app shell',
  render: () => <VStack alignItems="stretch" gap="0">
      <PageBanner tone="danger" emphasis="bold" primaryAction={<Button size="sm" variant="primary">
            Open status page
          </Button>}>
        Order sync has been failing since 14:20. New orders are queued and will
        send automatically once the connection recovers.
      </PageBanner>
      <Box p="24">
        <Text textStyle="body.md">
          Application content sits below the banner.
        </Text>
      </Box>
    </VStack>
}`,...(C=(O=g.parameters)==null?void 0:O.docs)==null?void 0:C.source}}};var D,R,z;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Test: role by tone',
  render: () => <VStack alignItems="stretch" gap="0">
      <PageBanner tone="danger">Danger banners interrupt.</PageBanner>
      <PageBanner tone="info">Every other tone announces politely.</PageBanner>
    </VStack>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('alert')).toBeInTheDocument();
    await expect(canvas.getByRole('status')).toBeInTheDocument();
  }
}`,...(z=(R=p.parameters)==null?void 0:R.docs)==null?void 0:z.source}}};const Ne=["Default","SubtleTones","BoldTones","Actions","ExDegradedService","RoleByTone"];export{m as Actions,d as BoldTones,c as Default,g as ExDegradedService,p as RoleByTone,l as SubtleTones,Ne as __namedExportsOrder,Se as default};
