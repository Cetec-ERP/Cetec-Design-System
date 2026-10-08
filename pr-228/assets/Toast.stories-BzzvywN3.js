import{m as ze,e as He,f as Me,g as Ve,h as Oe,s as Ie,r,j as e,B as N,c as Pe,d as Ne,a as Qe,T as B,a6 as We,a7 as Ke,V as w,H as Ue}from"./iframe-ClDBFN2j.js";import{B as d}from"./Button-DRwoyNLe.js";import{I as Ye}from"./IconButton-efWWZlVK.js";import"./preload-helper-BJIPxT3X.js";import"./Spinner-CG9lNFGF.js";import"./FieldContext-E_9W_pfR.js";const _e={tone:"neutral"},Ze=[],$e=[["viewport","toast__viewport"],["root","toast__root"],["icon","toast__icon"],["content","toast__content"],["message","toast__message"],["actions","toast__actions"],["dismiss","toast__dismiss"]],Ge=$e.map(([t,n])=>[t,Ve(n,_e,Oe(Ze,t))]),Xe=ze((t={})=>Object.fromEntries(Ge.map(([n,s])=>[n,s.recipeFn(t)]))),J=["tone"],Je=t=>({..._e,...He(t)}),qe=Object.assign(Xe,{__recipe__:!1,__name__:"toast",raw:t=>t,classNameMap:{},variantKeys:J,variantMap:{tone:["info","success","warning","danger","neutral"]},splitVariantProps(t){return Me(t,J)},getVariantProps:Je}),et={info:"info",success:"success",warning:"warning",danger:"error",neutral:"info"},tt={info:"icon.info",success:"icon.success",warning:"icon.warning",danger:"icon.danger",neutral:"icon.subtle"},l=t=>{const{tone:n="neutral",children:s,primaryAction:u,secondaryAction:b,dismissible:I=!0,onDismiss:m,duration:c=null,dismissLabel:k="Dismiss",state:D="open",onMouseEnter:S,onMouseLeave:v,onFocus:C,onBlur:f,...q}=t,[y,Z]=Ie(q),o=qe({tone:n}),[a,i]=r.useState(!1),[E,L]=r.useState(!1),T=a||E,g=r.useRef(c??0),j=r.useRef(m);r.useEffect(()=>{j.current=m},[m]),r.useEffect(()=>{g.current=c??0},[c]),r.useEffect(()=>{if(c===null||T||D==="closing")return;const h=Date.now(),$=setTimeout(()=>{var X;g.current=0,(X=j.current)==null||X.call(j)},g.current);return()=>{clearTimeout($),g.current=Math.max(0,g.current-(Date.now()-h))}},[c,T,D]);const R=et[n],F=!!(u??b);return e.jsxs(N,{...Ne("Toast"),role:n==="danger"?"alert":"status","aria-atomic":"true","data-state":D,"data-paused":T?"true":void 0,className:Pe(o.root,y),...Z,onMouseEnter:h=>{i(!0),S==null||S(h)},onMouseLeave:h=>{i(!1),v==null||v(h)},onFocus:h=>{L(!0),C==null||C(h)},onBlur:h=>{const $=h.relatedTarget;h.currentTarget.contains($)||L(!1),f==null||f(h)},children:[e.jsx(N,{className:o.icon,children:e.jsx(Qe,{name:R,size:"20",fill:tt[n],"aria-hidden":"true"})}),e.jsxs(N,{className:o.content,children:[e.jsx(B,{textStyle:"body.sm",lineHeight:"tight",color:"text",className:o.message,children:s}),F&&e.jsxs(N,{className:o.actions,children:[u,b]})]}),I&&e.jsx(Ye,{variant:"ghost",size:"sm",iconName:"x",altText:k,onClick:m,className:o.dismiss})]})};l.__docgenInfo={description:'Confirms a non-blocking outcome in a transient, floating message.\n\nApplications normally queue toasts imperatively with `useToast` rather than\nrendering this component, which is the presentation for one entry in a\n`ToastProvider` stack. Render it directly only to place a toast outside that\nstack. Use `Alert` when the message must stay until it is read.\n\nRenders a `div` with `role="alert"` when `tone` is `danger` and\n`role="status"` otherwise. `tone="neutral"` uses the info icon.\n\n@example\n```tsx\n<Toast tone="success" duration={5000} onDismiss={remove}>Saved</Toast>\n```',methods:[],displayName:"Toast",props:{tone:{required:!1,tsType:{name:"AlertTone"},description:'@default "neutral"'},children:{required:!0,tsType:{name:"ReactNode"},description:"The toast message."},primaryAction:{required:!1,tsType:{name:"ReactNode"},description:"Leading action, normally a `Button`."},secondaryAction:{required:!1,tsType:{name:"ReactNode"},description:"Trailing action, normally a lower-emphasis `Button`. Render only alongside `primaryAction`."},duration:{required:!1,tsType:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}]},description:"Milliseconds before the toast calls `onDismiss` by itself. The countdown\npauses while the toast is hovered or contains focus and resumes from the\nremaining time. Pass `null`, or omit it, for a toast that never times out.\n`ToastProvider` supplies this value and always passes `null` for\n`tone: 'danger'`."},dismissLabel:{required:!1,tsType:{name:"string"},description:'Accessible label for the close control. @default "Dismiss"'},state:{required:!1,tsType:{name:"union",raw:"'open' | 'closing'",elements:[{name:"literal",value:"'open'"},{name:"literal",value:"'closing'"}]},description:`Animation phase. \`closing\` plays the exit animation; the owner removes the
toast once it finishes.

@default "open"`}}};const Le=r.createContext(null),st=Le.Provider,nt=()=>{const t=r.useContext(Le);if(!t)throw new Error("useToast must be called inside a <ToastProvider>.");return t},Fe=t=>{const{toasts:n,onDismiss:s,...u}=t,[b,I]=Ie(u),m=qe();return n.length===0?null:e.jsx(We,{children:e.jsx(Ke,{children:e.jsx(N,{...Ne("ToastViewport"),className:Pe(m.viewport,b),...I,children:n.map(c=>e.jsx(l,{tone:c.tone,duration:c.duration,dismissible:c.dismissible??!0,dismissLabel:c.dismissLabel,primaryAction:c.primaryAction,secondaryAction:c.secondaryAction,state:c.closing?"closing":"open",onDismiss:()=>s(c.id),children:c.message},c.id))})})})};Fe.__docgenInfo={description:`Renders the fixed bottom-right toast stack in a portal.

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
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0},description:"Identifier returned by the queueing call and accepted by `toast.dismiss`."},{key:"tone",value:{name:"AlertTone",required:!0},description:"Resolved tone."},{key:"message",value:{name:"ReactNode",required:!0},description:"Message content."},{key:"duration",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0},description:"Resolved lifetime in milliseconds, or `null` when the toast never times out."},{key:"closing",value:{name:"boolean",required:!0},description:"True once the exit animation has started and the toast is leaving."}]}}]}],raw:"ToastRecord[]"},description:"Toasts to render, oldest first. The last entry sits nearest the corner."},onDismiss:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:"Called with a toast's id when that toast asks to be removed."}}};const at=5e3,ot=3,it=150,_=t=>{const{children:n,duration:s=at,limit:u=ot}=t,[b,I]=r.useState([]),m=r.useRef([]),c=r.useRef(0),k=r.useRef(new Map),D=r.useRef(s),S=r.useRef(u);D.current=s,S.current=u,r.useEffect(()=>{const o=k.current;return()=>{o.forEach(a=>clearTimeout(a)),o.clear()}},[]);const v=r.useCallback(o=>{m.current=o,I(o)},[]),C=r.useCallback(o=>{const a=k.current.get(o);a&&(clearTimeout(a),k.current.delete(o))},[]),f=r.useCallback(o=>{const a=m.current.find(i=>i.id===o);!a||a.closing||(v(m.current.map(i=>i.id===o?{...i,closing:!0}:i)),k.current.set(o,setTimeout(()=>{var i;k.current.delete(o),v(m.current.filter(E=>E.id!==o)),(i=a.onDismiss)==null||i.call(a)},it)))},[v]),q=r.useCallback(()=>{m.current.forEach(o=>{f(o.id)})},[f]),y=r.useCallback((o,a={})=>{c.current+=1;const i=`toast-${String(c.current)}`,E=a.tone??"neutral",L={...a,id:i,tone:E,message:o,duration:E==="danger"?null:a.duration??D.current,closing:!1},T=[...m.current,L],g=T.length-Math.max(1,S.current),j=g>0?T.slice(0,g):[];return j.forEach(R=>C(R.id)),v(g>0?T.slice(g):T),j.forEach(R=>{var F;return(F=R.onDismiss)==null?void 0:F.call(R)}),i},[C,v]),Z=r.useMemo(()=>Object.assign((a,i)=>y(a,i),{info:(a,i)=>y(a,{...i,tone:"info"}),success:(a,i)=>y(a,{...i,tone:"success"}),warning:(a,i)=>y(a,{...i,tone:"warning"}),danger:(a,i)=>y(a,{...i,tone:"danger"}),neutral:(a,i)=>y(a,{...i,tone:"neutral"}),dismiss:f,dismissAll:q}),[f,q,y]);return e.jsxs(st,{value:Z,children:[n,e.jsx(Fe,{toasts:b,onDismiss:f})]})};_.__docgenInfo={description:`Hosts the toast stack and provides the imperative API that \`useToast\`
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

@default 3`}}};const Y=()=>nt(),{expect:p,fn:rt,userEvent:x,waitFor:G,within:A}=__STORYBOOK_MODULE_TEST__,ct='\n`Toast` is the transient, non-blocking placement: it confirms an outcome and\ngets out of the way. Applications almost never render it directly — they mount\n`ToastProvider` once and queue toasts imperatively with `useToast`.\n\n| Category | Placement | Tone | Dismiss |\n| --- | --- | --- | --- |\n| System | `PageBanner` | danger / warning / info | No — until resolved |\n| Feedback, blocking | `Alert` | danger | Yes |\n| Feedback, non-blocking | `Toast` | success / danger | Auto |\n| Awareness, section | `Alert` | info / warning / neutral | Optional |\n| Awareness, field | `InlineNote` | info / warning / danger | No |\n\n```tsx\n<ToastProvider>\n  <App />\n</ToastProvider>\n\nconst toast = useToast();\ntoast.success(\'Saved\');\nconst id = toast.danger(\'Could not save\', {\n  primaryAction: <Button size="sm" onClick={retry}>Retry</Button>,\n});\ntoast.dismiss(id);\n```\n\n**Stack.** Fixed bottom-right, 24px inset, 12px gap, newest nearest the corner,\ncapped at three. A fourth arriving pushes the oldest out.\n\n**Timing.** Five seconds by default. The countdown pauses on hover and on\nkeyboard focus and resumes from the time remaining. `tone="danger"` never\nauto-dismisses — the provider pins it open, so no call site has to remember.\n\n**Actions.** Same API as `Alert` and `PageBanner`: `primaryAction` and\n`secondaryAction`, each a `Button`, both optional.\n\n**Accessibility.** `role="alert"` when `tone` is `danger`,\n`role="status"` otherwise. `tone="neutral"` uses the info icon. The slide-in\nanimation is suppressed under `prefers-reduced-motion`.\n',bt={title:"Components/Toast",component:l,tags:["autodocs"],parameters:{docs:{description:{component:ct}}},argTypes:{tone:{control:"select",options:["info","success","warning","danger","neutral"]},dismissible:{control:"boolean"}},args:{tone:"success",dismissible:!0,onDismiss:rt(),children:"Work order 10482 was saved."}},P={render:t=>e.jsx(w,{alignItems:"start",gap:"12",children:e.jsx(l,{...t})})},z={name:"Every tone",render:()=>e.jsxs(w,{alignItems:"start",gap:"12",children:[e.jsx(l,{tone:"info",dismissible:!1,children:"A scheduled export is ready to download."}),e.jsx(l,{tone:"success",dismissible:!1,children:"Work order 10482 was saved."}),e.jsx(l,{tone:"warning",dismissible:!1,children:"Two line items are missing a unit cost."}),e.jsx(l,{tone:"danger",dismissible:!1,children:"Could not save work order 10482."}),e.jsx(l,{tone:"neutral",dismissible:!1,children:"Neutral uses the info icon on a neutral surface."})]})},H={name:"Zero, one, and two actions",render:()=>e.jsxs(w,{alignItems:"start",gap:"12",children:[e.jsx(l,{tone:"success",dismissible:!1,children:"No actions."}),e.jsx(l,{tone:"success",dismissible:!1,primaryAction:e.jsx(d,{size:"sm",children:"Undo"}),children:"One action."}),e.jsx(l,{tone:"danger",dismissible:!1,primaryAction:e.jsx(d,{size:"sm",variant:"danger",children:"Retry"}),secondaryAction:e.jsx(d,{size:"sm",variant:"ghost",children:"View log"}),children:"Two actions."})]})},M={name:"Dismissible and non-dismissible",render:()=>e.jsxs(w,{alignItems:"start",gap:"12",children:[e.jsx(l,{tone:"info",dismissible:!0,onDismiss:()=>{},children:"Dismissible: the close control calls `onDismiss`."}),e.jsx(l,{tone:"info",dismissible:!1,children:"Not dismissible: this toast can only time out."})]})},lt=()=>{const t=Y();return e.jsxs(w,{alignItems:"start",gap:"12",children:[e.jsx(B,{textStyle:"body.sm",children:"Each button queues a real toast into the bottom-right stack."}),e.jsxs(Ue,{gap:"8",flexWrap:"wrap",children:[e.jsx(d,{size:"sm",onClick:()=>t.info("Export is ready."),children:"info"}),e.jsx(d,{size:"sm",onClick:()=>t.success("Work order 10482 was saved."),children:"success"}),e.jsx(d,{size:"sm",onClick:()=>t.warning("Two line items are missing a cost."),children:"warning"}),e.jsx(d,{size:"sm",variant:"danger",onClick:()=>t.danger("Could not save work order 10482.",{primaryAction:e.jsx(d,{size:"sm",children:"Retry"})}),children:"danger"}),e.jsx(d,{size:"sm",onClick:()=>t.neutral("Nothing to report."),children:"neutral"}),e.jsx(d,{size:"sm",variant:"ghost",onClick:()=>t.dismissAll(),children:"dismissAll"})]})]})},V={name:"Ex: live imperative stack",render:()=>e.jsx(_,{children:e.jsx(lt,{})})},dt=()=>{const t=Y();return e.jsxs(w,{alignItems:"start",gap:"12",children:[e.jsx(B,{textStyle:"body.sm",children:"The stack holds three. A fourth pushes the oldest out."}),e.jsx(d,{size:"sm",onClick:()=>{t.info("First",{duration:6e4}),t.info("Second",{duration:6e4}),t.info("Third",{duration:6e4}),t.info("Fourth",{duration:6e4})},children:"Queue four toasts"})]})},O={name:"Test: stack caps at three",render:()=>e.jsx(_,{children:e.jsx(dt,{})}),play:async({canvasElement:t})=>{const n=A(t);await x.click(n.getByRole("button",{name:"Queue four toasts"}));const s=A(t.ownerDocument.body),u=await s.findAllByRole("status");await p(u).toHaveLength(3),await p(s.queryByText("First")).not.toBeInTheDocument(),await p(s.getByText("Fourth")).toBeInTheDocument()}},ut=()=>{const t=Y();return e.jsxs(w,{alignItems:"start",gap:"12",children:[e.jsx(B,{textStyle:"body.sm",children:"The provider pins danger toasts open even when the call site asks for a short duration."}),e.jsx(d,{size:"sm",variant:"danger",onClick:()=>t.danger("Could not save. This will not time out.",{duration:100}),children:"Queue a danger toast with duration 100"})]})},Q={name:"Test: danger never auto-dismisses",render:()=>e.jsx(_,{children:e.jsx(ut,{})}),play:async({canvasElement:t})=>{const n=A(t),s=A(t.ownerDocument.body);await x.click(n.getByRole("button",{name:"Queue a danger toast with duration 100"})),await p(await s.findByRole("alert")).toBeInTheDocument(),await new Promise(u=>setTimeout(u,600)),await p(s.getByRole("alert")).toBeInTheDocument()}},mt=()=>{const[t,n]=r.useState(0);return e.jsxs(w,{alignItems:"start",gap:"12",children:[e.jsx(B,{textStyle:"body.sm",children:"A consumer `onMouseEnter` runs alongside the pause logic, not instead of it. Hover the toast: the count rises and `data-paused` is set."}),e.jsx(l,{tone:"info",dismissible:!1,duration:6e4,onMouseEnter:()=>n(s=>s+1),children:"Hover me."}),e.jsx(B,{textStyle:"body.sm","data-testid":"enter-count",children:t})]})},W={name:"Test: consumer hover handler keeps the pause",render:()=>e.jsx(mt,{}),play:async({canvasElement:t})=>{const n=A(t),s=n.getByRole("status");await x.hover(s),await p(s).toHaveAttribute("data-paused","true"),await p(n.getByTestId("enter-count")).toHaveTextContent("1"),await x.unhover(s),await p(s).not.toHaveAttribute("data-paused")}},K={name:"Test: focus and hover within keep the timer paused",render:()=>e.jsx(l,{tone:"info",dismissible:!1,duration:6e4,primaryAction:e.jsx(d,{size:"sm",children:"First action"}),secondaryAction:e.jsx(d,{size:"sm",children:"Second action"}),children:"Move focus between both actions."}),play:async({canvasElement:t})=>{const n=A(t),s=n.getByRole("status"),u=n.getByRole("button",{name:"First action"}),b=n.getByRole("button",{name:"Second action"});u.focus(),await G(()=>p(s).toHaveAttribute("data-paused","true")),await x.hover(s),await x.unhover(s),await G(()=>p(s).toHaveAttribute("data-paused","true")),await x.tab(),await p(b).toHaveFocus(),await G(()=>p(s).toHaveAttribute("data-paused","true"))}},pt=()=>{const t=Y();return e.jsxs(w,{alignItems:"start",gap:"12",children:[e.jsx(B,{textStyle:"body.sm",children:"`dismissLabel` given to `useToast` reaches the close control."}),e.jsx(d,{size:"sm",onClick:()=>t.success("Guardado.",{dismissLabel:"Cerrar",duration:6e4}),children:"Queue a Spanish toast"})]})},U={name:"Test: provider forwards dismissLabel",render:()=>e.jsx(_,{children:e.jsx(pt,{})}),play:async({canvasElement:t})=>{const n=A(t),s=A(t.ownerDocument.body);await x.click(n.getByRole("button",{name:"Queue a Spanish toast"})),await p(await s.findByRole("button",{name:"Cerrar"})).toBeInTheDocument()}},Tt=["Default","Tones","Actions","Dismissible","ExLiveStack","StackCap","DangerNeverAutoDismisses","ConsumerHandlersKeepPause","FocusWithinKeepsPause","LocalizedDismissLabel"];var ee,te,se,ne,ae;P.parameters={...P.parameters,docs:{...(ee=P.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: args => <VStack alignItems="start" gap="12">
      <Toast {...args} />
    </VStack>
}`,...(se=(te=P.parameters)==null?void 0:te.docs)==null?void 0:se.source},description:{story:"Renders the presentation in place, outside the provider stack.",...(ae=(ne=P.parameters)==null?void 0:ne.docs)==null?void 0:ae.description}}};var oe,ie,re;z.parameters={...z.parameters,docs:{...(oe=z.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(re=(ie=z.parameters)==null?void 0:ie.docs)==null?void 0:re.source}}};var ce,le,de;H.parameters={...H.parameters,docs:{...(ce=H.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(de=(le=H.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var ue,me,pe;M.parameters={...M.parameters,docs:{...(ue=M.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  name: 'Dismissible and non-dismissible',
  render: () => <VStack alignItems="start" gap="12">
      <Toast tone="info" dismissible onDismiss={() => undefined}>
        Dismissible: the close control calls \`onDismiss\`.
      </Toast>
      <Toast tone="info" dismissible={false}>
        Not dismissible: this toast can only time out.
      </Toast>
    </VStack>
}`,...(pe=(me=M.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var he,ge,ve;V.parameters={...V.parameters,docs:{...(he=V.parameters)==null?void 0:he.docs,source:{originalSource:`{
  name: 'Ex: live imperative stack',
  render: () => <ToastProvider>
      <LiveControls />
    </ToastProvider>
}`,...(ve=(ge=V.parameters)==null?void 0:ge.docs)==null?void 0:ve.source}}};var fe,ye,we;O.parameters={...O.parameters,docs:{...(fe=O.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(we=(ye=O.parameters)==null?void 0:ye.docs)==null?void 0:we.source}}};var be,Te,xe;Q.parameters={...Q.parameters,docs:{...(be=Q.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(xe=(Te=Q.parameters)==null?void 0:Te.docs)==null?void 0:xe.source}}};var Ae,ke,je;W.parameters={...W.parameters,docs:{...(Ae=W.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...(je=(ke=W.parameters)==null?void 0:ke.docs)==null?void 0:je.source}}};var Re,Be,De;K.parameters={...K.parameters,docs:{...(Re=K.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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

    // The pause state commits after the focus event, so wait for it.
    first.focus();
    await waitFor(() => expect(toast).toHaveAttribute('data-paused', 'true'));
    await userEvent.hover(toast);
    await userEvent.unhover(toast);
    await waitFor(() => expect(toast).toHaveAttribute('data-paused', 'true'));
    await userEvent.tab();
    await expect(second).toHaveFocus();
    await waitFor(() => expect(toast).toHaveAttribute('data-paused', 'true'));
  }
}`,...(De=(Be=K.parameters)==null?void 0:Be.docs)==null?void 0:De.source}}};var Se,Ce,Ee;U.parameters={...U.parameters,docs:{...(Se=U.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(Ee=(Ce=U.parameters)==null?void 0:Ce.docs)==null?void 0:Ee.source}}};export{H as Actions,W as ConsumerHandlersKeepPause,Q as DangerNeverAutoDismisses,P as Default,M as Dismissible,V as ExLiveStack,K as FocusWithinKeepsPause,U as LocalizedDismissLabel,O as StackCap,z as Tones,Tt as __namedExportsOrder,bt as default};
