import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{w as G,e as y}from"./index-DPYJpPba.js";import"./index-BKyFwriW.js";import{m as H,c as J,s as Q,a as W,g as X,b as ee,B as r,d as ne,e as ae,V as o}from"./dsComponent-COP_u32W.js";import{B as h}from"./Button-9qTdRXCj.js";import{T as z}from"./Text-Bb_CaJVi.js";import{I as se}from"./Icon-DykL05lh.js";import"./IconConfig-qRFEvzON.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Spinner-CUl5P6MP.js";import"./FieldContext-D6URyQos.js";import"./Tooltip-BI37R98K.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";const q={tone:"info"},te=[],re=[["root","pageBanner__root"],["icon","pageBanner__icon"],["content","pageBanner__content"],["message","pageBanner__message"],["actions","pageBanner__actions"]],oe=re.map(([a,s])=>[a,W(s,q,X(te,a))]),ie=H((a={})=>Object.fromEntries(oe.map(([s,i])=>[s,i.recipeFn(a)]))),w=["tone"],ce=a=>({...q,...J(a)}),le=Object.assign(ie,{__recipe__:!1,__name__:"pageBanner",raw:a=>a,classNameMap:{},variantKeys:w,variantMap:{tone:["info","success","warning","danger","neutral"]},splitVariantProps(a){return Q(a,w)},getVariantProps:ce}),de={info:"info",success:"success",warning:"warning",danger:"error",neutral:"info"},me={info:"icon.info",success:"icon.success",warning:"icon.warning",danger:"icon.danger",neutral:"icon.subtle"},n=a=>{const{tone:s="info",emphasis:i="subtle",children:U,primaryAction:u,secondaryAction:b,...F}=a,[K,M]=ee(F),t=le({tone:s}),B=i==="bold",Z=de[s],L=B?"icon.inverse":me[s],Y=B?"text.inverse":"text",$=!!(u??b);return e.jsxs(r,{...ae("PageBanner"),role:s==="danger"?"alert":"status","data-emphasis":i,className:ne(t.root,K),...M,children:[e.jsx(r,{className:t.icon,children:e.jsx(se,{name:Z,size:"20",fill:L,"aria-hidden":"true"})}),e.jsx(r,{className:t.content,children:e.jsx(z,{textStyle:"body.sm",color:Y,className:t.message,children:U})}),$&&e.jsxs(r,{className:t.actions,children:[u,b]})]})};n.__docgenInfo={description:'States a system condition that affects the entire page, spanning its full\nwidth.\n\nA page banner has no dismiss control by design: it describes a condition\nthat persists until it is resolved, so removing it is the application\'s\ndecision, not the reader\'s. Use `Alert` for a message scoped to one section.\n\nRenders a `div` with `role="alert"` when `tone` is `danger` and\n`role="status"` otherwise. `tone="neutral"` uses the info icon.\n\n@example\n```tsx\n<PageBanner tone="warning" emphasis="bold">\n  Scheduled maintenance begins at 22:00 UTC.\n</PageBanner>\n```',methods:[],displayName:"PageBanner",props:{tone:{required:!1,tsType:{name:"union",raw:"'info' | 'success' | 'warning' | 'danger' | 'neutral'",elements:[{name:"literal",value:"'info'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'neutral'"}]},description:'@default "info"'},emphasis:{required:!1,tsType:{name:"union",raw:"'subtle' | 'bold'",elements:[{name:"literal",value:"'subtle'"},{name:"literal",value:"'bold'"}]},description:'Visual weight. `subtle` tints the page edge; `bold` fills the banner with\nthe tone color and inverts text and icon for maximum contrast.\n\n@default "subtle"'},children:{required:!0,tsType:{name:"ReactNode"},description:"The banner message."},primaryAction:{required:!1,tsType:{name:"ReactNode"},description:"Leading action, normally a `Button`."},secondaryAction:{required:!1,tsType:{name:"ReactNode"},description:"Trailing action, normally a lower-emphasis `Button`. Render only alongside `primaryAction`."}}};const ge='\n`PageBanner` is the page-width placement in the notification set. It reports a\n**system** condition — degraded service, a read-only window, a required\nmigration — and therefore has **no dismiss control**: the banner goes away when\nthe condition is resolved, not when the reader is tired of it.\n\n| Category | Placement | Tone | Dismiss |\n| --- | --- | --- | --- |\n| System | `PageBanner` | danger / warning / info | No — until resolved |\n| Feedback, blocking | `Alert` | danger | Yes |\n| Feedback, non-blocking | `Toast` | success / danger | Auto |\n| Awareness, section | `Alert` | info / warning / neutral | Optional |\n| Awareness, field | `InlineNote` | info / warning / danger | No |\n\n**Emphasis.** `subtle` tints the page edge and is the default. `bold` fills\nthe banner with the tone color and inverts text and icon; reserve it for a\ncondition that must not be scrolled past.\n\n**Actions.** Same API as `Alert` and `Toast`: `primaryAction` and\n`secondaryAction`, each a `Button`, both optional.\n\n**Accessibility.** `role="alert"` when `tone` is `danger`,\n`role="status"` otherwise. `tone="neutral"` uses the info icon.\n',Se={title:"Components/PageBanner",component:n,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:ge}}},argTypes:{tone:{control:"select",options:["info","success","warning","danger","neutral"]},emphasis:{control:"inline-radio",options:["subtle","bold"]}},args:{tone:"info",emphasis:"subtle",children:"Scheduled maintenance begins tonight at 22:00 UTC."}},c={},l={name:"Every tone, subtle",render:()=>e.jsxs(o,{alignItems:"stretch",gap:"0",children:[e.jsx(n,{tone:"info",children:"A new release is available."}),e.jsx(n,{tone:"success",children:"All services are operating normally."}),e.jsx(n,{tone:"warning",children:"Scheduled maintenance begins tonight at 22:00 UTC."}),e.jsx(n,{tone:"danger",children:"Order sync is failing. New orders are not reaching the warehouse."}),e.jsx(n,{tone:"neutral",children:"This environment is a sandbox. Neutral uses the info icon."})]})},d={name:"Every tone, bold",render:()=>e.jsxs(o,{alignItems:"stretch",gap:"0",children:[e.jsx(n,{tone:"info",emphasis:"bold",children:"A new release is available."}),e.jsx(n,{tone:"success",emphasis:"bold",children:"All services are operating normally."}),e.jsx(n,{tone:"warning",emphasis:"bold",children:"Scheduled maintenance begins tonight at 22:00 UTC."}),e.jsx(n,{tone:"danger",emphasis:"bold",children:"Order sync is failing. New orders are not reaching the warehouse."}),e.jsx(n,{tone:"neutral",emphasis:"bold",children:"This environment is a sandbox. Neutral uses the info icon."})]})},m={name:"Zero, one, and two actions",render:()=>e.jsxs(o,{alignItems:"stretch",gap:"0",children:[e.jsx(n,{tone:"warning",children:"No actions: the message stands alone."}),e.jsx(n,{tone:"warning",primaryAction:e.jsx(h,{size:"sm",children:"View schedule"}),children:"One action."}),e.jsx(n,{tone:"danger",emphasis:"bold",primaryAction:e.jsx(h,{size:"sm",variant:"primary",children:"Open status page"}),secondaryAction:e.jsx(h,{size:"sm",variant:"ghost",children:"Dismiss for this session"}),children:"Two actions. A banner has no built-in dismiss, so anything of that kind is an explicit, application-owned action."})]})},g={name:"Ex: degraded service above the app shell",render:()=>e.jsxs(o,{alignItems:"stretch",gap:"0",children:[e.jsx(n,{tone:"danger",emphasis:"bold",primaryAction:e.jsx(h,{size:"sm",variant:"primary",children:"Open status page"}),children:"Order sync has been failing since 14:20. New orders are queued and will send automatically once the connection recovers."}),e.jsx(r,{p:"24",children:e.jsx(z,{textStyle:"body.md",children:"Application content sits below the banner."})})]})},p={name:"Test: role by tone",render:()=>e.jsxs(o,{alignItems:"stretch",gap:"0",children:[e.jsx(n,{tone:"danger",children:"Danger banners interrupt."}),e.jsx(n,{tone:"info",children:"Every other tone announces politely."})]}),play:async({canvasElement:a})=>{const s=G(a);await y(s.getByRole("alert")).toBeInTheDocument(),await y(s.getByRole("status")).toBeInTheDocument()}};var f,x,v;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(v=(x=c.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var P,A,T;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
        This environment is a sandbox. Neutral uses the info icon.
      </PageBanner>
    </VStack>
}`,...(T=(A=l.parameters)==null?void 0:A.docs)==null?void 0:T.source}}};var j,S,N;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
        This environment is a sandbox. Neutral uses the info icon.
      </PageBanner>
    </VStack>
}`,...(N=(S=d.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};var I,_,V;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(V=(_=m.parameters)==null?void 0:_.docs)==null?void 0:V.source}}};var k,E,O;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(O=(E=g.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var C,D,R;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(R=(D=p.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};const Ne=["Default","SubtleTones","BoldTones","Actions","ExDegradedService","RoleByTone"];export{m as Actions,d as BoldTones,c as Default,g as ExDegradedService,p as RoleByTone,l as SubtleTones,Ne as __namedExportsOrder,Se as default};
