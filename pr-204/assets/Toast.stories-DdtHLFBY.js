import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{w as z,u as ge,e as B}from"./index-DPYJpPba.js";import{r as a}from"./index-BKyFwriW.js";import{m as ke,c as Ae,s as je,a as Re,g as De,b as ve,B as D,d as fe,e as we,V as y,H as Be}from"./dsComponent-COP_u32W.js";import{B as p}from"./Button-9qTdRXCj.js";import{T as F}from"./Text-Bb_CaJVi.js";import{I as Se}from"./Icon-DykL05lh.js";import"./IconConfig-qRFEvzON.js";import{I as Ie}from"./IconButton-DtO38NMA.js";import{F as Ce,D as Ne}from"./Tooltip-BI37R98K.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Spinner-CUl5P6MP.js";import"./FieldContext-D6URyQos.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";const ye={tone:"neutral"},Pe=[],qe=[["viewport","toast__viewport"],["root","toast__root"],["icon","toast__icon"],["content","toast__content"],["message","toast__message"],["actions","toast__actions"],["dismiss","toast__dismiss"]],_e=qe.map(([t,i])=>[t,Re(i,ye,De(Pe,t))]),Ee=ke((t={})=>Object.fromEntries(_e.map(([i,c])=>[i,c.recipeFn(t)]))),W=["tone"],Ve=t=>({...ye,...Ae(t)}),Te=Object.assign(Ee,{__recipe__:!1,__name__:"toast",raw:t=>t,classNameMap:{},variantKeys:W,variantMap:{tone:["info","success","warning","danger","neutral"]},splitVariantProps(t){return je(t,W)},getVariantProps:Ve}),ze={info:"info",success:"success",warning:"warning",danger:"error",neutral:null},Fe={info:"icon.info",success:"icon.success",warning:"icon.warning",danger:"icon.danger",neutral:"icon.subtle"},l=t=>{const{tone:i="neutral",children:c,primaryAction:h,secondaryAction:T,dismissible:A=!0,onDismiss:d,duration:r=null,dismissLabel:g="Dismiss",state:b="open",...S}=t,[v,I]=ve(S),u=Te({tone:i}),[x,m]=a.useState(!1),f=a.useRef(r??0),o=a.useRef(d);o.current=d,a.useEffect(()=>{f.current=r??0},[r]),a.useEffect(()=>{if(r===null||x||b==="closing")return;const k=Date.now(),L=setTimeout(()=>{var w;f.current=0,(w=o.current)==null||w.call(o)},f.current);return()=>{clearTimeout(L),f.current=Math.max(0,f.current-(Date.now()-k))}},[r,x,b]);const n=ze[i],s=!!(h??T);return e.jsxs(D,{...we("Toast"),role:i==="danger"?"alert":"status","aria-atomic":"true","data-state":b,"data-paused":x?"true":void 0,className:fe(u.root,v),onMouseEnter:()=>m(!0),onMouseLeave:()=>m(!1),onFocus:()=>m(!0),onBlur:()=>m(!1),...I,children:[n&&e.jsx(D,{className:u.icon,children:e.jsx(Se,{name:n,size:"20",fill:Fe[i],"aria-hidden":"true"})}),e.jsxs(D,{className:u.content,children:[e.jsx(F,{textStyle:"body.sm",color:"text",className:u.message,children:c}),s&&e.jsxs(D,{className:u.actions,children:[h,T]})]}),A&&e.jsx(Ie,{variant:"ghost",size:"sm",iconName:"x",altText:g,onClick:d,className:u.dismiss})]})};l.__docgenInfo={description:'Confirms a non-blocking outcome in a transient, floating message.\n\nApplications normally queue toasts imperatively with `useToast` rather than\nrendering this component, which is the presentation for one entry in a\n`ToastProvider` stack. Render it directly only to place a toast outside that\nstack. Use `Alert` when the message must stay until it is read.\n\nRenders a `div` with `role="alert"` when `tone` is `danger` and\n`role="status"` otherwise. `tone="neutral"` renders no icon.\n\n@example\n```tsx\n<Toast tone="success" duration={5000} onDismiss={remove}>Saved</Toast>\n```',methods:[],displayName:"Toast",props:{tone:{required:!1,tsType:{name:"union",raw:"'info' | 'success' | 'warning' | 'danger' | 'neutral'",elements:[{name:"literal",value:"'info'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'neutral'"}]},description:'@default "neutral"'},children:{required:!0,tsType:{name:"ReactNode"},description:"The toast message."},primaryAction:{required:!1,tsType:{name:"ReactNode"},description:"Leading action, normally a `Button`."},secondaryAction:{required:!1,tsType:{name:"ReactNode"},description:"Trailing action, normally a lower-emphasis `Button`. Render only alongside `primaryAction`."},dismissible:{required:!1,tsType:{name:"boolean"},description:"Shows the close control, which calls `onDismiss`.\n\n@default true"},onDismiss:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Runs when the close control is activated or `duration` elapses."},duration:{required:!1,tsType:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}]},description:"Milliseconds before the toast calls `onDismiss` by itself. The countdown\npauses while the toast is hovered or contains focus and resumes from the\nremaining time. Pass `null`, or omit it, for a toast that never times out.\n`ToastProvider` supplies this value and always passes `null` for\n`tone: 'danger'`."},dismissLabel:{required:!1,tsType:{name:"string"},description:'Accessible label for the close control. @default "Dismiss"'},state:{required:!1,tsType:{name:"union",raw:"'open' | 'closing'",elements:[{name:"literal",value:"'open'"},{name:"literal",value:"'closing'"}]},description:`Animation phase. \`closing\` plays the exit animation; the owner removes the
toast once it finishes.

@default "open"`}}};const be=a.createContext(null),Me=be.Provider,Le=()=>{const t=a.useContext(be);if(!t)throw new Error("useToast must be called inside a <ToastProvider>.");return t},xe=t=>{const{toasts:i,onDismiss:c,...h}=t,[T,A]=ve(h),d=Te();return i.length===0?null:e.jsx(Ce,{children:e.jsx(Ne,{children:e.jsx(D,{...we("ToastViewport"),className:fe(d.viewport,T),...A,children:i.map(r=>e.jsx(l,{tone:r.tone,duration:r.duration,dismissible:r.dismissible??!0,primaryAction:r.primaryAction,secondaryAction:r.secondaryAction,state:r.closing?"closing":"open",onDismiss:()=>c(r.id),children:r.message},r.id))})})})};xe.__docgenInfo={description:`Renders the fixed bottom-right toast stack in a portal.

\`ToastProvider\` renders this internally; applications do not place it
themselves. The viewport is click-through, so only the toasts inside it
receive pointer events.`,methods:[],displayName:"ToastViewport",props:{toasts:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`Omit<ToastOptions, 'duration' | 'tone'> & {
  /** Identifier returned by the queueing call and accepted by \`toast.dismiss\`. */
  id: string;
  /** Resolved tone. */
  tone: AlertTone;
  /** Message content. */
  message: ReactNode;
  /** Resolved lifetime in milliseconds, or \`null\` when the toast never times out. */
  duration: number | null;
  /** True once the exit animation has started and the toast is leaving. */
  closing: boolean;
}`,elements:[{name:"Omit",elements:[{name:"signature",type:"object",raw:`{
  /**
   * Semantic tone. \`danger\` is never auto-dismissed, whatever \`duration\` says.
   *
   * @default "neutral"
   */
  tone?: AlertTone;
  /**
   * Milliseconds the toast stays on screen before it dismisses itself. The
   * countdown pauses while the toast is hovered or holds focus. Ignored for
   * \`tone: 'danger'\`, which the provider always pins open.
   *
   * @default 5000
   */
  duration?: number;
  /** Leading action, normally a \`Button\`. */
  primaryAction?: ReactNode;
  /** Trailing action, normally a lower-emphasis \`Button\`. */
  secondaryAction?: ReactNode;
  /**
   * Shows the close control.
   *
   * @default true
   */
  dismissible?: boolean;
  /** Runs once the toast leaves the stack, whether it timed out or was closed. */
  onDismiss?: () => void;
}`,signature:{properties:[{key:"tone",value:{name:"union",raw:"'info' | 'success' | 'warning' | 'danger' | 'neutral'",elements:[{name:"literal",value:"'info'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'neutral'"}],required:!0},description:'Semantic tone. `danger` is never auto-dismissed, whatever `duration` says.\n\n@default "neutral"'},{key:"duration",value:{name:"number",required:!1},description:`Milliseconds the toast stays on screen before it dismisses itself. The
countdown pauses while the toast is hovered or holds focus. Ignored for
\`tone: 'danger'\`, which the provider always pins open.

@default 5000`},{key:"primaryAction",value:{name:"ReactNode",required:!1},description:"Leading action, normally a `Button`."},{key:"secondaryAction",value:{name:"ReactNode",required:!1},description:"Trailing action, normally a lower-emphasis `Button`."},{key:"dismissible",value:{name:"boolean",required:!1},description:`Shows the close control.

@default true`},{key:"onDismiss",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1},description:"Runs once the toast leaves the stack, whether it timed out or was closed."}]}},{name:"union",raw:"'duration' | 'tone'",elements:[{name:"literal",value:"'duration'"},{name:"literal",value:"'tone'"}]}],raw:"Omit<ToastOptions, 'duration' | 'tone'>"},{name:"signature",type:"object",raw:`{
  /** Identifier returned by the queueing call and accepted by \`toast.dismiss\`. */
  id: string;
  /** Resolved tone. */
  tone: AlertTone;
  /** Message content. */
  message: ReactNode;
  /** Resolved lifetime in milliseconds, or \`null\` when the toast never times out. */
  duration: number | null;
  /** True once the exit animation has started and the toast is leaving. */
  closing: boolean;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0},description:"Identifier returned by the queueing call and accepted by `toast.dismiss`."},{key:"tone",value:{name:"union",raw:"'info' | 'success' | 'warning' | 'danger' | 'neutral'",elements:[{name:"literal",value:"'info'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'neutral'"}],required:!0},description:"Resolved tone."},{key:"message",value:{name:"ReactNode",required:!0},description:"Message content."},{key:"duration",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0},description:"Resolved lifetime in milliseconds, or `null` when the toast never times out."},{key:"closing",value:{name:"boolean",required:!0},description:"True once the exit animation has started and the toast is leaving."}]}}]}],raw:"ToastRecord[]"},description:"Toasts to render, oldest first. The last entry sits nearest the corner."},onDismiss:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:"Called with a toast's id when that toast asks to be removed."}}};const Oe=5e3,Qe=3,Ue=150,M=t=>{const{children:i,duration:c=Oe,limit:h=Qe}=t,[T,A]=a.useState([]),d=a.useRef([]),r=a.useRef(0),g=a.useRef(new Map),b=a.useRef(c),S=a.useRef(h);b.current=c,S.current=h,a.useEffect(()=>{const o=g.current;return()=>{o.forEach(n=>clearTimeout(n)),o.clear()}},[]);const v=a.useCallback(o=>{d.current=o,A(o)},[]),I=a.useCallback(o=>{const n=g.current.get(o);n&&(clearTimeout(n),g.current.delete(o))},[]),u=a.useCallback(o=>{const n=d.current.find(s=>s.id===o);!n||n.closing||(v(d.current.map(s=>s.id===o?{...s,closing:!0}:s)),g.current.set(o,setTimeout(()=>{var s;g.current.delete(o),v(d.current.filter(k=>k.id!==o)),(s=n.onDismiss)==null||s.call(n)},Ue)))},[v]),x=a.useCallback(()=>{d.current.forEach(o=>{u(o.id)})},[u]),m=a.useCallback((o,n={})=>{r.current+=1;const s=`toast-${String(r.current)}`,k=n.tone??"neutral",L={...n,id:s,tone:k,message:o,duration:k==="danger"?null:n.duration??b.current,closing:!1},w=[...d.current,L],C=w.length-Math.max(1,S.current),Q=C>0?w.slice(0,C):[];return Q.forEach(j=>I(j.id)),v(C>0?w.slice(C):w),Q.forEach(j=>{var U;return(U=j.onDismiss)==null?void 0:U.call(j)}),s},[I,v]),f=a.useMemo(()=>Object.assign((n,s)=>m(n,s),{info:(n,s)=>m(n,{...s,tone:"info"}),success:(n,s)=>m(n,{...s,tone:"success"}),warning:(n,s)=>m(n,{...s,tone:"warning"}),danger:(n,s)=>m(n,{...s,tone:"danger"}),neutral:(n,s)=>m(n,{...s,tone:"neutral"}),dismiss:u,dismissAll:x}),[u,x,m]);return e.jsxs(Me,{value:f,children:[i,e.jsx(xe,{toasts:T,onDismiss:u})]})};M.__docgenInfo={description:`Hosts the toast stack and provides the imperative API that \`useToast\`
returns.

Mount it once near the root of the application, around everything that may
raise a toast. It renders a fixed bottom-right viewport through a portal, so
it needs no layout position of its own.

The provider — not the calling code — enforces the two rules that keep the
stack predictable: a \`danger\` toast never auto-dismisses, and no more than
\`limit\` toasts are on screen at once.

@example
\`\`\`tsx
<ToastProvider>
  <App />
</ToastProvider>
\`\`\``,methods:[],displayName:"ToastProvider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Application subtree that may queue toasts with `useToast`."},duration:{required:!1,tsType:{name:"number"},description:"Default lifetime in milliseconds for toasts that do not set `duration`.\n`danger` toasts ignore it and never time out.\n\n@default 5000"},limit:{required:!1,tsType:{name:"number"},description:`Largest number of toasts shown at once. Queueing beyond this removes the
oldest toast immediately.

@default 3`}}};const O=()=>Le(),We='\n`Toast` is the transient, non-blocking placement: it confirms an outcome and\ngets out of the way. Applications almost never render it directly — they mount\n`ToastProvider` once and queue toasts imperatively with `useToast`.\n\n| Category | Placement | Tone | Dismiss |\n| --- | --- | --- | --- |\n| System | `PageBanner` | danger / warning / info | No — until resolved |\n| Feedback, blocking | `Alert` | danger | Yes |\n| Feedback, non-blocking | `Toast` | success / danger | Auto |\n| Awareness, section | `Alert` | info / warning / neutral | Optional |\n| Awareness, field | `InlineNote` | info / warning / danger | No |\n\n```tsx\n<ToastProvider>\n  <App />\n</ToastProvider>\n\nconst toast = useToast();\ntoast.success(\'Saved\');\nconst id = toast.danger(\'Could not save\', {\n  primaryAction: <Button size="sm" onClick={retry}>Retry</Button>,\n});\ntoast.dismiss(id);\n```\n\n**Stack.** Fixed bottom-right, 24px inset, 12px gap, newest nearest the corner,\ncapped at three. A fourth arriving pushes the oldest out.\n\n**Timing.** Five seconds by default. The countdown pauses on hover and on\nkeyboard focus and resumes from the time remaining. `tone="danger"` never\nauto-dismisses — the provider pins it open, so no call site has to remember.\n\n**Actions.** Same API as `Alert` and `PageBanner`: `primaryAction` and\n`secondaryAction`, each a `Button`, both optional.\n\n**Accessibility.** `role="alert"` when `tone` is `danger`,\n`role="status"` otherwise. `tone="neutral"` renders no icon. The slide-in\nanimation is suppressed under `prefers-reduced-motion`.\n',dt={title:"Components/Toast",component:l,tags:["autodocs"],parameters:{docs:{description:{component:We}}},argTypes:{tone:{control:"select",options:["info","success","warning","danger","neutral"]},dismissible:{control:"boolean"}},args:{tone:"success",dismissible:!0,children:"Work order 10482 was saved."}},R={render:t=>e.jsx(y,{alignItems:"start",gap:"12",children:e.jsx(l,{...t})})},N={name:"Every tone",render:()=>e.jsxs(y,{alignItems:"start",gap:"12",children:[e.jsx(l,{tone:"info",children:"A scheduled export is ready to download."}),e.jsx(l,{tone:"success",children:"Work order 10482 was saved."}),e.jsx(l,{tone:"warning",children:"Two line items are missing a unit cost."}),e.jsx(l,{tone:"danger",children:"Could not save work order 10482."}),e.jsx(l,{tone:"neutral",children:"Neutral renders no icon, by design."})]})},P={name:"Zero, one, and two actions",render:()=>e.jsxs(y,{alignItems:"start",gap:"12",children:[e.jsx(l,{tone:"success",children:"No actions."}),e.jsx(l,{tone:"success",primaryAction:e.jsx(p,{size:"sm",children:"Undo"}),children:"One action."}),e.jsx(l,{tone:"danger",primaryAction:e.jsx(p,{size:"sm",variant:"danger",children:"Retry"}),secondaryAction:e.jsx(p,{size:"sm",variant:"ghost",children:"View log"}),children:"Two actions."})]})},q={name:"Dismissible and non-dismissible",render:()=>e.jsxs(y,{alignItems:"start",gap:"12",children:[e.jsx(l,{tone:"info",dismissible:!0,children:"Dismissible: the close control calls `onDismiss`."}),e.jsx(l,{tone:"info",dismissible:!1,children:"Not dismissible: this toast can only time out."})]})},He=()=>{const t=O();return e.jsxs(y,{alignItems:"start",gap:"12",children:[e.jsx(F,{textStyle:"body.sm",children:"Each button queues a real toast into the bottom-right stack."}),e.jsxs(Be,{gap:"8",flexWrap:"wrap",children:[e.jsx(p,{size:"sm",onClick:()=>t.info("Export is ready."),children:"info"}),e.jsx(p,{size:"sm",onClick:()=>t.success("Work order 10482 was saved."),children:"success"}),e.jsx(p,{size:"sm",onClick:()=>t.warning("Two line items are missing a cost."),children:"warning"}),e.jsx(p,{size:"sm",variant:"danger",onClick:()=>t.danger("Could not save work order 10482.",{primaryAction:e.jsx(p,{size:"sm",children:"Retry"})}),children:"danger"}),e.jsx(p,{size:"sm",onClick:()=>t.neutral("Nothing to report."),children:"neutral"}),e.jsx(p,{size:"sm",variant:"ghost",onClick:()=>t.dismissAll(),children:"dismissAll"})]})]})},_={name:"Ex: live imperative stack",render:()=>e.jsx(M,{children:e.jsx(He,{})})},Ke=()=>{const t=O();return e.jsxs(y,{alignItems:"start",gap:"12",children:[e.jsx(F,{textStyle:"body.sm",children:"The stack holds three. A fourth pushes the oldest out."}),e.jsx(p,{size:"sm",onClick:()=>{t.info("First",{duration:6e4}),t.info("Second",{duration:6e4}),t.info("Third",{duration:6e4}),t.info("Fourth",{duration:6e4})},children:"Queue four toasts"})]})},E={name:"Test: stack caps at three",render:()=>e.jsx(M,{children:e.jsx(Ke,{})}),play:async({canvasElement:t})=>{const i=z(t);await ge.click(i.getByRole("button",{name:"Queue four toasts"}));const c=z(t.ownerDocument.body),h=await c.findAllByRole("status");await B(h).toHaveLength(3),await B(c.queryByText("First")).not.toBeInTheDocument(),await B(c.getByText("Fourth")).toBeInTheDocument()}},Ze=()=>{const t=O();return e.jsxs(y,{alignItems:"start",gap:"12",children:[e.jsx(F,{textStyle:"body.sm",children:"The provider pins danger toasts open even when the call site asks for a short duration."}),e.jsx(p,{size:"sm",variant:"danger",onClick:()=>t.danger("Could not save. This will not time out.",{duration:100}),children:"Queue a danger toast with duration 100"})]})},V={name:"Test: danger never auto-dismisses",render:()=>e.jsx(M,{children:e.jsx(Ze,{})}),play:async({canvasElement:t})=>{const i=z(t),c=z(t.ownerDocument.body);await ge.click(i.getByRole("button",{name:"Queue a danger toast with duration 100"})),await B(await c.findByRole("alert")).toBeInTheDocument(),await new Promise(h=>setTimeout(h,600)),await B(c.getByRole("alert")).toBeInTheDocument()}};var H,K,Z,$,X;R.parameters={...R.parameters,docs:{...(H=R.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: args => <VStack alignItems="start" gap="12">
      <Toast {...args} />
    </VStack>
}`,...(Z=(K=R.parameters)==null?void 0:K.docs)==null?void 0:Z.source},description:{story:"Renders the presentation in place, outside the provider stack.",...(X=($=R.parameters)==null?void 0:$.docs)==null?void 0:X.description}}};var Y,G,J;N.parameters={...N.parameters,docs:{...(Y=N.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'Every tone',
  render: () => <VStack alignItems="start" gap="12">
      <Toast tone="info">A scheduled export is ready to download.</Toast>
      <Toast tone="success">Work order 10482 was saved.</Toast>
      <Toast tone="warning">Two line items are missing a unit cost.</Toast>
      <Toast tone="danger">Could not save work order 10482.</Toast>
      <Toast tone="neutral">Neutral renders no icon, by design.</Toast>
    </VStack>
}`,...(J=(G=N.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var ee,te,ne;P.parameters={...P.parameters,docs:{...(ee=P.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: 'Zero, one, and two actions',
  render: () => <VStack alignItems="start" gap="12">
      <Toast tone="success">No actions.</Toast>
      <Toast tone="success" primaryAction={<Button size="sm">Undo</Button>}>
        One action.
      </Toast>
      <Toast tone="danger" primaryAction={<Button size="sm" variant="danger">
            Retry
          </Button>} secondaryAction={<Button size="sm" variant="ghost">
            View log
          </Button>}>
        Two actions.
      </Toast>
    </VStack>
}`,...(ne=(te=P.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var se,oe,ae;q.parameters={...q.parameters,docs:{...(se=q.parameters)==null?void 0:se.docs,source:{originalSource:`{
  name: 'Dismissible and non-dismissible',
  render: () => <VStack alignItems="start" gap="12">
      <Toast tone="info" dismissible>
        Dismissible: the close control calls \`onDismiss\`.
      </Toast>
      <Toast tone="info" dismissible={false}>
        Not dismissible: this toast can only time out.
      </Toast>
    </VStack>
}`,...(ae=(oe=q.parameters)==null?void 0:oe.docs)==null?void 0:ae.source}}};var re,ie,ce;_.parameters={..._.parameters,docs:{...(re=_.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: 'Ex: live imperative stack',
  render: () => <ToastProvider>
      <LiveControls />
    </ToastProvider>
}`,...(ce=(ie=_.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var le,de,ue;E.parameters={...E.parameters,docs:{...(le=E.parameters)==null?void 0:le.docs,source:{originalSource:`{
  name: 'Test: stack caps at three',
  render: () => <ToastProvider>
      <StackCapControls />
    </ToastProvider>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Queue four toasts'
    }));
    const body = within(canvasElement.ownerDocument.body);
    const toasts = await body.findAllByRole('status');
    await expect(toasts).toHaveLength(3);
    await expect(body.queryByText('First')).not.toBeInTheDocument();
    await expect(body.getByText('Fourth')).toBeInTheDocument();
  }
}`,...(ue=(de=E.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var me,pe,he;V.parameters={...V.parameters,docs:{...(me=V.parameters)==null?void 0:me.docs,source:{originalSource:`{
  name: 'Test: danger never auto-dismisses',
  render: () => <ToastProvider>
      <DangerPersistenceControls />
    </ToastProvider>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Queue a danger toast with duration 100'
    }));
    await expect(await body.findByRole('alert')).toBeInTheDocument();

    // Well past the requested 100ms lifetime the provider refused to honour.
    await new Promise(resolve => setTimeout(resolve, 600));
    await expect(body.getByRole('alert')).toBeInTheDocument();
  }
}`,...(he=(pe=V.parameters)==null?void 0:pe.docs)==null?void 0:he.source}}};const ut=["Default","Tones","Actions","Dismissible","ExLiveStack","StackCap","DangerNeverAutoDismisses"];export{P as Actions,V as DangerNeverAutoDismisses,R as Default,q as Dismissible,_ as ExLiveStack,E as StackCap,N as Tones,ut as __namedExportsOrder,dt as default};
