import{m as He,e as Fe,f as Me,g as Ve,h as Oe,s as Ee,r as i,j as e,B as N,c as Ie,d as Pe,a as Qe,T as D,a6 as We,a7 as Ke,V as b,H as Ue}from"./iframe-CXsJ8nBA.js";import{B as d}from"./Button-CZE1N6w8.js";import{I as Ye}from"./IconButton-Bkoqj9RS.js";import{u as Ze}from"./useLocale-viKyk6pi.js";import"./preload-helper-CNOPt5Zm.js";import"./Spinner-D-dkI8vG.js";import"./FieldContext-B4fdc69l.js";const Ne={tone:"neutral"},$e=[],Ge=[["viewport","toast__viewport"],["root","toast__root"],["icon","toast__icon"],["content","toast__content"],["message","toast__message"],["actions","toast__actions"],["dismiss","toast__dismiss"]],Xe=Ge.map(([t,a])=>[t,Ve(a,Ne,Oe($e,t))]),Je=He((t={})=>Object.fromEntries(Xe.map(([a,s])=>[a,s.recipeFn(t)]))),X=["tone"],et=t=>({...Ne,...Fe(t)}),_e=Object.assign(Je,{__recipe__:!1,__name__:"toast",raw:t=>t,classNameMap:{},variantKeys:X,variantMap:{tone:["info","success","warning","danger","neutral"]},splitVariantProps(t){return Me(t,X)},getVariantProps:et}),tt={info:"info",success:"success",warning:"warning",danger:"error",neutral:"info"},st={info:"icon.info",success:"icon.success",warning:"icon.warning",danger:"icon.danger",neutral:"icon.subtle"},l=t=>{const{labels:a}=Ze(),{tone:s="neutral",children:m,primaryAction:T,secondaryAction:S,dismissible:g=!0,onDismiss:c,duration:p=null,dismissLabel:q=a.dismiss,state:C="open",onMouseEnter:f,onMouseLeave:E,onFocus:y,onBlur:I,...w}=t,[Y,r]=Ee(w),n=_e({tone:s}),[o,R]=i.useState(!1),[Z,B]=i.useState(!1),x=o||Z,A=i.useRef(p??0),v=i.useRef(c);i.useEffect(()=>{v.current=c},[c]),i.useEffect(()=>{A.current=p??0},[p]),i.useEffect(()=>{if(p===null||x||C==="closing")return;const h=Date.now(),$=setTimeout(()=>{var G;A.current=0,(G=v.current)==null||G.call(v)},A.current);return()=>{clearTimeout($),A.current=Math.max(0,A.current-(Date.now()-h))}},[p,x,C]);const L=tt[s],ze=!!(T??S);return e.jsxs(N,{...Pe("Toast"),role:s==="danger"?"alert":"status","aria-atomic":"true","data-state":C,"data-paused":x?"true":void 0,className:Ie(n.root,Y),...r,onMouseEnter:h=>{R(!0),f==null||f(h)},onMouseLeave:h=>{R(!1),E==null||E(h)},onFocus:h=>{B(!0),y==null||y(h)},onBlur:h=>{const $=h.relatedTarget;h.currentTarget.contains($)||B(!1),I==null||I(h)},children:[e.jsx(N,{className:n.icon,children:e.jsx(Qe,{name:L,size:"20",fill:st[s],"aria-hidden":"true"})}),e.jsxs(N,{className:n.content,children:[e.jsx(D,{textStyle:"body.sm",lineHeight:"tight",color:"text",className:n.message,children:m}),ze&&e.jsxs(N,{className:n.actions,children:[T,S]})]}),g&&e.jsx(Ye,{variant:"ghost",size:"sm",iconName:"x",altText:q,onClick:c,className:n.dismiss})]})};l.__docgenInfo={description:'Confirms a non-blocking outcome in a transient, floating message.\n\nApplications normally queue toasts imperatively with `useToast` rather than\nrendering this component, which is the presentation for one entry in a\n`ToastProvider` stack. Render it directly only to place a toast outside that\nstack. Use `Alert` when the message must stay until it is read.\n\nRenders a `div` with `role="alert"` when `tone` is `danger` and\n`role="status"` otherwise. `tone="neutral"` uses the info icon.\n\n@example\n```tsx\n<Toast tone="success" duration={5000} onDismiss={remove}>Saved</Toast>\n```',methods:[],displayName:"Toast",props:{tone:{required:!1,tsType:{name:"AlertTone"},description:'@default "neutral"'},children:{required:!0,tsType:{name:"ReactNode"},description:"The toast message."},primaryAction:{required:!1,tsType:{name:"ReactNode"},description:"Leading action, normally a `Button`."},secondaryAction:{required:!1,tsType:{name:"ReactNode"},description:"Trailing action, normally a lower-emphasis `Button`. Render only alongside `primaryAction`."},duration:{required:!1,tsType:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}]},description:"Milliseconds before the toast calls `onDismiss` by itself. The countdown\npauses while the toast is hovered or contains focus and resumes from the\nremaining time. Pass `null`, or omit it, for a toast that never times out.\n`ToastProvider` supplies this value and always passes `null` for\n`tone: 'danger'`."},dismissLabel:{required:!1,tsType:{name:"string"},description:'Accessible label for the close control. @default "Dismiss"'},state:{required:!1,tsType:{name:"union",raw:"'open' | 'closing'",elements:[{name:"literal",value:"'open'"},{name:"literal",value:"'closing'"}]},description:`Animation phase. \`closing\` plays the exit animation; the owner removes the
toast once it finishes.

@default "open"`}}};const qe=i.createContext(null),nt=qe.Provider,at=()=>{const t=i.useContext(qe);if(!t)throw new Error("useToast must be called inside a <ToastProvider>.");return t},Le=t=>{const{toasts:a,onDismiss:s,...m}=t,[T,S]=Ee(m),g=_e();return a.length===0?null:e.jsx(We,{children:e.jsx(Ke,{children:e.jsx(N,{...Pe("ToastViewport"),className:Ie(g.viewport,T),...S,children:a.map(c=>e.jsx(l,{tone:c.tone,duration:c.duration,dismissible:c.dismissible??!0,dismissLabel:c.dismissLabel,primaryAction:c.primaryAction,secondaryAction:c.secondaryAction,state:c.closing?"closing":"open",onDismiss:()=>s(c.id),children:c.message},c.id))})})})};Le.__docgenInfo={description:`Renders the fixed bottom-right toast stack in a portal.

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
  /** Accessible label for the close control. @default "Dismiss" */
  dismissLabel?: string;
  /** Runs once the toast leaves the stack, whether it timed out or was closed. */
  onDismiss?: () => void;
}`,signature:{properties:[{key:"tone",value:{name:"AlertTone",required:!1},description:'Semantic tone. `danger` is never auto-dismissed, whatever `duration` says.\n\n@default "neutral"'},{key:"duration",value:{name:"number",required:!1},description:`Milliseconds the toast stays on screen before it dismisses itself. The
countdown pauses while the toast is hovered or holds focus. Ignored for
\`tone: 'danger'\`, which the provider always pins open.

@default 5000`},{key:"primaryAction",value:{name:"ReactNode",required:!1},description:"Leading action, normally a `Button`."},{key:"secondaryAction",value:{name:"ReactNode",required:!1},description:"Trailing action, normally a lower-emphasis `Button`."},{key:"dismissible",value:{name:"boolean",required:!1},description:`Shows the close control.

@default true`},{key:"dismissLabel",value:{name:"string",required:!1},description:'Accessible label for the close control. @default "Dismiss"'},{key:"onDismiss",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1},description:"Runs once the toast leaves the stack, whether it timed out or was closed."}]}},{name:"union",raw:"'duration' | 'tone'",elements:[{name:"literal",value:"'duration'"},{name:"literal",value:"'tone'"}]}],raw:"Omit<ToastOptions, 'duration' | 'tone'>"},{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0},description:"Identifier returned by the queueing call and accepted by `toast.dismiss`."},{key:"tone",value:{name:"AlertTone",required:!0},description:"Resolved tone."},{key:"message",value:{name:"ReactNode",required:!0},description:"Message content."},{key:"duration",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0},description:"Resolved lifetime in milliseconds, or `null` when the toast never times out."},{key:"closing",value:{name:"boolean",required:!0},description:"True once the exit animation has started and the toast is leaving."}]}}]}],raw:"ToastRecord[]"},description:"Toasts to render, oldest first. The last entry sits nearest the corner."},onDismiss:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:"Called with a toast's id when that toast asks to be removed."}}};const ot=5e3,it=3,rt=150,_=t=>{const{children:a,duration:s=ot,limit:m=it}=t,[T,S]=i.useState([]),g=i.useRef([]),c=i.useRef(0),p=i.useRef(new Map),q=i.useRef(s),C=i.useRef(m);q.current=s,C.current=m,i.useEffect(()=>{const r=p.current;return()=>{r.forEach(n=>clearTimeout(n)),r.clear()}},[]);const f=i.useCallback(r=>{g.current=r,S(r)},[]),E=i.useCallback(r=>{const n=p.current.get(r);n&&(clearTimeout(n),p.current.delete(r))},[]),y=i.useCallback(r=>{const n=g.current.find(o=>o.id===r);!n||n.closing||(f(g.current.map(o=>o.id===r?{...o,closing:!0}:o)),p.current.set(r,setTimeout(()=>{var o;p.current.delete(r),f(g.current.filter(R=>R.id!==r)),(o=n.onDismiss)==null||o.call(n)},rt)))},[f]),I=i.useCallback(()=>{g.current.forEach(r=>{y(r.id)})},[y]),w=i.useCallback((r,n={})=>{c.current+=1;const o=`toast-${String(c.current)}`,R=n.tone??"neutral",Z={...n,id:o,tone:R,message:r,duration:R==="danger"?null:n.duration??q.current,closing:!1},B=[...g.current,Z],x=B.length-Math.max(1,C.current),A=x>0?B.slice(0,x):[];return A.forEach(v=>E(v.id)),f(x>0?B.slice(x):B),A.forEach(v=>{var L;return(L=v.onDismiss)==null?void 0:L.call(v)}),o},[E,f]),Y=i.useMemo(()=>Object.assign((n,o)=>w(n,o),{info:(n,o)=>w(n,{...o,tone:"info"}),success:(n,o)=>w(n,{...o,tone:"success"}),warning:(n,o)=>w(n,{...o,tone:"warning"}),danger:(n,o)=>w(n,{...o,tone:"danger"}),neutral:(n,o)=>w(n,{...o,tone:"neutral"}),dismiss:y,dismissAll:I}),[y,I,w]);return e.jsxs(nt,{value:Y,children:[a,e.jsx(Le,{toasts:T,onDismiss:y})]})};_.__docgenInfo={description:`Hosts the toast stack and provides the imperative API that \`useToast\`
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

@default 3`}}};const U=()=>at(),{expect:u,fn:ct,userEvent:k,within:j}=__STORYBOOK_MODULE_TEST__,lt='\n`Toast` is the transient, non-blocking placement: it confirms an outcome and\ngets out of the way. Applications almost never render it directly — they mount\n`ToastProvider` once and queue toasts imperatively with `useToast`.\n\n| Category | Placement | Tone | Dismiss |\n| --- | --- | --- | --- |\n| System | `PageBanner` | danger / warning / info | No — until resolved |\n| Feedback, blocking | `Alert` | danger | Yes |\n| Feedback, non-blocking | `Toast` | success / danger | Auto |\n| Awareness, section | `Alert` | info / warning / neutral | Optional |\n| Awareness, field | `InlineNote` | info / warning / danger | No |\n\n```tsx\n<ToastProvider>\n  <App />\n</ToastProvider>\n\nconst toast = useToast();\ntoast.success(\'Saved\');\nconst id = toast.danger(\'Could not save\', {\n  primaryAction: <Button size="sm" onClick={retry}>Retry</Button>,\n});\ntoast.dismiss(id);\n```\n\n**Stack.** Fixed bottom-right, 24px inset, 12px gap, newest nearest the corner,\ncapped at three. A fourth arriving pushes the oldest out.\n\n**Timing.** Five seconds by default. The countdown pauses on hover and on\nkeyboard focus and resumes from the time remaining. `tone="danger"` never\nauto-dismisses — the provider pins it open, so no call site has to remember.\n\n**Actions.** Same API as `Alert` and `PageBanner`: `primaryAction` and\n`secondaryAction`, each a `Button`, both optional.\n\n**Accessibility.** `role="alert"` when `tone` is `danger`,\n`role="status"` otherwise. `tone="neutral"` uses the info icon. The slide-in\nanimation is suppressed under `prefers-reduced-motion`.\n',xt={title:"Components/Toast",component:l,tags:["autodocs"],parameters:{docs:{description:{component:lt}}},argTypes:{tone:{control:"select",options:["info","success","warning","danger","neutral"]},dismissible:{control:"boolean"}},args:{tone:"success",dismissible:!0,onDismiss:ct(),children:"Work order 10482 was saved."}},P={render:t=>e.jsx(b,{alignItems:"start",gap:"12",children:e.jsx(l,{...t})})},z={name:"Every tone",render:()=>e.jsxs(b,{alignItems:"start",gap:"12",children:[e.jsx(l,{tone:"info",dismissible:!1,children:"A scheduled export is ready to download."}),e.jsx(l,{tone:"success",dismissible:!1,children:"Work order 10482 was saved."}),e.jsx(l,{tone:"warning",dismissible:!1,children:"Two line items are missing a unit cost."}),e.jsx(l,{tone:"danger",dismissible:!1,children:"Could not save work order 10482."}),e.jsx(l,{tone:"neutral",dismissible:!1,children:"Neutral uses the info icon on a neutral surface."})]})},H={name:"Zero, one, and two actions",render:()=>e.jsxs(b,{alignItems:"start",gap:"12",children:[e.jsx(l,{tone:"success",dismissible:!1,children:"No actions."}),e.jsx(l,{tone:"success",dismissible:!1,primaryAction:e.jsx(d,{size:"sm",children:"Undo"}),children:"One action."}),e.jsx(l,{tone:"danger",dismissible:!1,primaryAction:e.jsx(d,{size:"sm",variant:"danger",children:"Retry"}),secondaryAction:e.jsx(d,{size:"sm",variant:"ghost",children:"View log"}),children:"Two actions."})]})},F={name:"Dismissible and non-dismissible",render:()=>e.jsxs(b,{alignItems:"start",gap:"12",children:[e.jsx(l,{tone:"info",dismissible:!0,onDismiss:()=>{},children:"Dismissible: the close control calls `onDismiss`."}),e.jsx(l,{tone:"info",dismissible:!1,children:"Not dismissible: this toast can only time out."})]})},dt=()=>{const t=U();return e.jsxs(b,{alignItems:"start",gap:"12",children:[e.jsx(D,{textStyle:"body.sm",children:"Each button queues a real toast into the bottom-right stack."}),e.jsxs(Ue,{gap:"8",flexWrap:"wrap",children:[e.jsx(d,{size:"sm",onClick:()=>t.info("Export is ready."),children:"info"}),e.jsx(d,{size:"sm",onClick:()=>t.success("Work order 10482 was saved."),children:"success"}),e.jsx(d,{size:"sm",onClick:()=>t.warning("Two line items are missing a cost."),children:"warning"}),e.jsx(d,{size:"sm",variant:"danger",onClick:()=>t.danger("Could not save work order 10482.",{primaryAction:e.jsx(d,{size:"sm",children:"Retry"})}),children:"danger"}),e.jsx(d,{size:"sm",onClick:()=>t.neutral("Nothing to report."),children:"neutral"}),e.jsx(d,{size:"sm",variant:"ghost",onClick:()=>t.dismissAll(),children:"dismissAll"})]})]})},M={name:"Ex: live imperative stack",render:()=>e.jsx(_,{children:e.jsx(dt,{})})},ut=()=>{const t=U();return e.jsxs(b,{alignItems:"start",gap:"12",children:[e.jsx(D,{textStyle:"body.sm",children:"The stack holds three. A fourth pushes the oldest out."}),e.jsx(d,{size:"sm",onClick:()=>{t.info("First",{duration:6e4}),t.info("Second",{duration:6e4}),t.info("Third",{duration:6e4}),t.info("Fourth",{duration:6e4})},children:"Queue four toasts"})]})},V={name:"Test: stack caps at three",render:()=>e.jsx(_,{children:e.jsx(ut,{})}),play:async({canvasElement:t})=>{const a=j(t);await k.click(a.getByRole("button",{name:"Queue four toasts"}));const s=j(t.ownerDocument.body),m=await s.findAllByRole("status");await u(m).toHaveLength(3),await u(s.queryByText("First")).not.toBeInTheDocument(),await u(s.getByText("Fourth")).toBeInTheDocument()}},mt=()=>{const t=U();return e.jsxs(b,{alignItems:"start",gap:"12",children:[e.jsx(D,{textStyle:"body.sm",children:"The provider pins danger toasts open even when the call site asks for a short duration."}),e.jsx(d,{size:"sm",variant:"danger",onClick:()=>t.danger("Could not save. This will not time out.",{duration:100}),children:"Queue a danger toast with duration 100"})]})},O={name:"Test: danger never auto-dismisses",render:()=>e.jsx(_,{children:e.jsx(mt,{})}),play:async({canvasElement:t})=>{const a=j(t),s=j(t.ownerDocument.body);await k.click(a.getByRole("button",{name:"Queue a danger toast with duration 100"})),await u(await s.findByRole("alert")).toBeInTheDocument(),await new Promise(m=>setTimeout(m,600)),await u(s.getByRole("alert")).toBeInTheDocument()}},pt=()=>{const[t,a]=i.useState(0);return e.jsxs(b,{alignItems:"start",gap:"12",children:[e.jsx(D,{textStyle:"body.sm",children:"A consumer `onMouseEnter` runs alongside the pause logic, not instead of it. Hover the toast: the count rises and `data-paused` is set."}),e.jsx(l,{tone:"info",dismissible:!1,duration:6e4,onMouseEnter:()=>a(s=>s+1),children:"Hover me."}),e.jsx(D,{textStyle:"body.sm","data-testid":"enter-count",children:t})]})},Q={name:"Test: consumer hover handler keeps the pause",render:()=>e.jsx(pt,{}),play:async({canvasElement:t})=>{const a=j(t),s=a.getByRole("status");await k.hover(s),await u(s).toHaveAttribute("data-paused","true"),await u(a.getByTestId("enter-count")).toHaveTextContent("1"),await k.unhover(s),await u(s).not.toHaveAttribute("data-paused")}},W={name:"Test: focus and hover within keep the timer paused",render:()=>e.jsx(l,{tone:"info",dismissible:!1,duration:6e4,primaryAction:e.jsx(d,{size:"sm",children:"First action"}),secondaryAction:e.jsx(d,{size:"sm",children:"Second action"}),children:"Move focus between both actions."}),play:async({canvasElement:t})=>{const a=j(t),s=a.getByRole("status"),m=a.getByRole("button",{name:"First action"}),T=a.getByRole("button",{name:"Second action"});m.focus(),await u(s).toHaveAttribute("data-paused","true"),await k.hover(s),await k.unhover(s),await u(s).toHaveAttribute("data-paused","true"),await k.tab(),await u(T).toHaveFocus(),await u(s).toHaveAttribute("data-paused","true")}},ht=()=>{const t=U();return e.jsxs(b,{alignItems:"start",gap:"12",children:[e.jsx(D,{textStyle:"body.sm",children:"`dismissLabel` given to `useToast` reaches the close control."}),e.jsx(d,{size:"sm",onClick:()=>t.success("Guardado.",{dismissLabel:"Cerrar",duration:6e4}),children:"Queue a Spanish toast"})]})},K={name:"Test: provider forwards dismissLabel",render:()=>e.jsx(_,{children:e.jsx(ht,{})}),play:async({canvasElement:t})=>{const a=j(t),s=j(t.ownerDocument.body);await k.click(a.getByRole("button",{name:"Queue a Spanish toast"})),await u(await s.findByRole("button",{name:"Cerrar"})).toBeInTheDocument()}},At=["Default","Tones","Actions","Dismissible","ExLiveStack","StackCap","DangerNeverAutoDismisses","ConsumerHandlersKeepPause","FocusWithinKeepsPause","LocalizedDismissLabel"];var J,ee,te,se,ne;P.parameters={...P.parameters,docs:{...(J=P.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: args => <VStack alignItems="start" gap="12">
      <Toast {...args} />
    </VStack>
}`,...(te=(ee=P.parameters)==null?void 0:ee.docs)==null?void 0:te.source},description:{story:"Renders the presentation in place, outside the provider stack.",...(ne=(se=P.parameters)==null?void 0:se.docs)==null?void 0:ne.description}}};var ae,oe,ie;z.parameters={...z.parameters,docs:{...(ae=z.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: 'Every tone',
  render: () => <VStack alignItems="start" gap="12">
      <Toast tone="info" dismissible={false}>
        A scheduled export is ready to download.
      </Toast>
      <Toast tone="success" dismissible={false}>
        Work order 10482 was saved.
      </Toast>
      <Toast tone="warning" dismissible={false}>
        Two line items are missing a unit cost.
      </Toast>
      <Toast tone="danger" dismissible={false}>
        Could not save work order 10482.
      </Toast>
      <Toast tone="neutral" dismissible={false}>
        Neutral uses the info icon on a neutral surface.
      </Toast>
    </VStack>
}`,...(ie=(oe=z.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var re,ce,le;H.parameters={...H.parameters,docs:{...(re=H.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: 'Zero, one, and two actions',
  render: () => <VStack alignItems="start" gap="12">
      <Toast tone="success" dismissible={false}>
        No actions.
      </Toast>
      <Toast tone="success" dismissible={false} primaryAction={<Button size="sm">Undo</Button>}>
        One action.
      </Toast>
      <Toast tone="danger" dismissible={false} primaryAction={<Button size="sm" variant="danger">
            Retry
          </Button>} secondaryAction={<Button size="sm" variant="ghost">
            View log
          </Button>}>
        Two actions.
      </Toast>
    </VStack>
}`,...(le=(ce=H.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};var de,ue,me;F.parameters={...F.parameters,docs:{...(de=F.parameters)==null?void 0:de.docs,source:{originalSource:`{
  name: 'Dismissible and non-dismissible',
  render: () => <VStack alignItems="start" gap="12">
      <Toast tone="info" dismissible onDismiss={() => undefined}>
        Dismissible: the close control calls \`onDismiss\`.
      </Toast>
      <Toast tone="info" dismissible={false}>
        Not dismissible: this toast can only time out.
      </Toast>
    </VStack>
}`,...(me=(ue=F.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var pe,he,ge;M.parameters={...M.parameters,docs:{...(pe=M.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  name: 'Ex: live imperative stack',
  render: () => <ToastProvider>
      <LiveControls />
    </ToastProvider>
}`,...(ge=(he=M.parameters)==null?void 0:he.docs)==null?void 0:ge.source}}};var ve,fe,ye;V.parameters={...V.parameters,docs:{...(ve=V.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(ye=(fe=V.parameters)==null?void 0:fe.docs)==null?void 0:ye.source}}};var we,be,Te;O.parameters={...O.parameters,docs:{...(we=O.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(Te=(be=O.parameters)==null?void 0:be.docs)==null?void 0:Te.source}}};var xe,Ae,ke;Q.parameters={...Q.parameters,docs:{...(xe=Q.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  name: 'Test: consumer hover handler keeps the pause',
  render: () => <HoverCounter />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const toast = canvas.getByRole('status');
    await userEvent.hover(toast);
    await expect(toast).toHaveAttribute('data-paused', 'true');
    await expect(canvas.getByTestId('enter-count')).toHaveTextContent('1');
    await userEvent.unhover(toast);
    await expect(toast).not.toHaveAttribute('data-paused');
  }
}`,...(ke=(Ae=Q.parameters)==null?void 0:Ae.docs)==null?void 0:ke.source}}};var je,Re,Be;W.parameters={...W.parameters,docs:{...(je=W.parameters)==null?void 0:je.docs,source:{originalSource:`{
  name: 'Test: focus and hover within keep the timer paused',
  render: () => <Toast tone="info" dismissible={false} duration={60000} primaryAction={<Button size="sm">First action</Button>} secondaryAction={<Button size="sm">Second action</Button>}>
      Move focus between both actions.
    </Toast>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const toast = canvas.getByRole('status');
    const first = canvas.getByRole('button', {
      name: 'First action'
    });
    const second = canvas.getByRole('button', {
      name: 'Second action'
    });
    first.focus();
    await expect(toast).toHaveAttribute('data-paused', 'true');
    await userEvent.hover(toast);
    await userEvent.unhover(toast);
    await expect(toast).toHaveAttribute('data-paused', 'true');
    await userEvent.tab();
    await expect(second).toHaveFocus();
    await expect(toast).toHaveAttribute('data-paused', 'true');
  }
}`,...(Be=(Re=W.parameters)==null?void 0:Re.docs)==null?void 0:Be.source}}};var De,Se,Ce;K.parameters={...K.parameters,docs:{...(De=K.parameters)==null?void 0:De.docs,source:{originalSource:`{
  name: 'Test: provider forwards dismissLabel',
  render: () => <ToastProvider>
      <LocalizedControls />
    </ToastProvider>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Queue a Spanish toast'
    }));
    await expect(await body.findByRole('button', {
      name: 'Cerrar'
    })).toBeInTheDocument();
  }
}`,...(Ce=(Se=K.parameters)==null?void 0:Se.docs)==null?void 0:Ce.source}}};export{H as Actions,Q as ConsumerHandlersKeepPause,O as DangerNeverAutoDismisses,P as Default,F as Dismissible,M as ExLiveStack,W as FocusWithinKeepsPause,K as LocalizedDismissLabel,V as StackCap,z as Tones,At as __namedExportsOrder,xt as default};
