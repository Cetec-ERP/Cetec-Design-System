import{m as ze,e as He,f as Fe,g as Me,h as Ve,s as Ee,r,j as e,B as N,c as Ie,d as Pe,a as Oe,T as B,a6 as Qe,a7 as We,V as w,H as Ke}from"./iframe-Dq6zsNJe.js";import{B as d}from"./Button-v3YnOzFq.js";import{I as Ue}from"./IconButton-BrXmK8P0.js";import"./preload-helper-Bzp4i-S8.js";import"./Spinner-3ddqMDIX.js";import"./FieldContext-NB5ushz7.js";const Ne={tone:"neutral"},Ye=[],Ze=[["viewport","toast__viewport"],["root","toast__root"],["icon","toast__icon"],["content","toast__content"],["message","toast__message"],["actions","toast__actions"],["dismiss","toast__dismiss"]],$e=Ze.map(([t,n])=>[t,Me(n,Ne,Ve(Ye,t))]),Ge=ze((t={})=>Object.fromEntries($e.map(([n,s])=>[n,s.recipeFn(t)]))),X=["tone"],Xe=t=>({...Ne,...He(t)}),_e=Object.assign(Ge,{__recipe__:!1,__name__:"toast",raw:t=>t,classNameMap:{},variantKeys:X,variantMap:{tone:["info","success","warning","danger","neutral"]},splitVariantProps(t){return Fe(t,X)},getVariantProps:Xe}),Je={info:"info",success:"success",warning:"warning",danger:"error",neutral:"info"},et={info:"icon.info",success:"icon.success",warning:"icon.warning",danger:"icon.danger",neutral:"icon.subtle"},l=t=>{const{tone:n="neutral",children:s,primaryAction:u,secondaryAction:b,dismissible:I=!0,onDismiss:m,duration:c=null,dismissLabel:k="Dismiss",state:D="open",onMouseEnter:S,onMouseLeave:v,onFocus:C,onBlur:f,...q}=t,[y,Z]=Ee(q),o=_e({tone:n}),[a,i]=r.useState(!1),[E,L]=r.useState(!1),T=a||E,g=r.useRef(c??0),j=r.useRef(m);r.useEffect(()=>{j.current=m},[m]),r.useEffect(()=>{g.current=c??0},[c]),r.useEffect(()=>{if(c===null||T||D==="closing")return;const h=Date.now(),$=setTimeout(()=>{var G;g.current=0,(G=j.current)==null||G.call(j)},g.current);return()=>{clearTimeout($),g.current=Math.max(0,g.current-(Date.now()-h))}},[c,T,D]);const R=Je[n],z=!!(u??b);return e.jsxs(N,{...Pe("Toast"),role:n==="danger"?"alert":"status","aria-atomic":"true","data-state":D,"data-paused":T?"true":void 0,className:Ie(o.root,y),...Z,onMouseEnter:h=>{i(!0),S==null||S(h)},onMouseLeave:h=>{i(!1),v==null||v(h)},onFocus:h=>{L(!0),C==null||C(h)},onBlur:h=>{const $=h.relatedTarget;h.currentTarget.contains($)||L(!1),f==null||f(h)},children:[e.jsx(N,{className:o.icon,children:e.jsx(Oe,{name:R,size:"20",fill:et[n],"aria-hidden":"true"})}),e.jsxs(N,{className:o.content,children:[e.jsx(B,{textStyle:"body.sm",lineHeight:"tight",color:"text",className:o.message,children:s}),z&&e.jsxs(N,{className:o.actions,children:[u,b]})]}),I&&e.jsx(Ue,{variant:"ghost",size:"sm",iconName:"x",altText:k,onClick:m,className:o.dismiss})]})};l.__docgenInfo={description:'Confirms a non-blocking outcome in a transient, floating message.\n\nApplications normally queue toasts imperatively with `useToast` rather than\nrendering this component, which is the presentation for one entry in a\n`ToastProvider` stack. Render it directly only to place a toast outside that\nstack. Use `Alert` when the message must stay until it is read.\n\nRenders a `div` with `role="alert"` when `tone` is `danger` and\n`role="status"` otherwise. `tone="neutral"` uses the info icon.\n\n@example\n```tsx\n<Toast tone="success" duration={5000} onDismiss={remove}>Saved</Toast>\n```',methods:[],displayName:"Toast",props:{tone:{required:!1,tsType:{name:"AlertTone"},description:'@default "neutral"'},children:{required:!0,tsType:{name:"ReactNode"},description:"The toast message."},primaryAction:{required:!1,tsType:{name:"ReactNode"},description:"Leading action, normally a `Button`."},secondaryAction:{required:!1,tsType:{name:"ReactNode"},description:"Trailing action, normally a lower-emphasis `Button`. Render only alongside `primaryAction`."},duration:{required:!1,tsType:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}]},description:"Milliseconds before the toast calls `onDismiss` by itself. The countdown\npauses while the toast is hovered or contains focus and resumes from the\nremaining time. Pass `null`, or omit it, for a toast that never times out.\n`ToastProvider` supplies this value and always passes `null` for\n`tone: 'danger'`."},dismissLabel:{required:!1,tsType:{name:"string"},description:'Accessible label for the close control. @default "Dismiss"'},state:{required:!1,tsType:{name:"union",raw:"'open' | 'closing'",elements:[{name:"literal",value:"'open'"},{name:"literal",value:"'closing'"}]},description:`Animation phase. \`closing\` plays the exit animation; the owner removes the
toast once it finishes.

@default "open"`}}};const qe=r.createContext(null),tt=qe.Provider,st=()=>{const t=r.useContext(qe);if(!t)throw new Error("useToast must be called inside a <ToastProvider>.");return t},Le=t=>{const{toasts:n,onDismiss:s,...u}=t,[b,I]=Ee(u),m=_e();return n.length===0?null:e.jsx(Qe,{children:e.jsx(We,{children:e.jsx(N,{...Pe("ToastViewport"),className:Ie(m.viewport,b),...I,children:n.map(c=>e.jsx(l,{tone:c.tone,duration:c.duration,dismissible:c.dismissible??!0,dismissLabel:c.dismissLabel,primaryAction:c.primaryAction,secondaryAction:c.secondaryAction,state:c.closing?"closing":"open",onDismiss:()=>s(c.id),children:c.message},c.id))})})})};Le.__docgenInfo={description:`Renders the fixed bottom-right toast stack in a portal.

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
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0},description:"Identifier returned by the queueing call and accepted by `toast.dismiss`."},{key:"tone",value:{name:"AlertTone",required:!0},description:"Resolved tone."},{key:"message",value:{name:"ReactNode",required:!0},description:"Message content."},{key:"duration",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0},description:"Resolved lifetime in milliseconds, or `null` when the toast never times out."},{key:"closing",value:{name:"boolean",required:!0},description:"True once the exit animation has started and the toast is leaving."}]}}]}],raw:"ToastRecord[]"},description:"Toasts to render, oldest first. The last entry sits nearest the corner."},onDismiss:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:"Called with a toast's id when that toast asks to be removed."}}};const nt=5e3,at=3,ot=150,_=t=>{const{children:n,duration:s=nt,limit:u=at}=t,[b,I]=r.useState([]),m=r.useRef([]),c=r.useRef(0),k=r.useRef(new Map),D=r.useRef(s),S=r.useRef(u);D.current=s,S.current=u,r.useEffect(()=>{const o=k.current;return()=>{o.forEach(a=>clearTimeout(a)),o.clear()}},[]);const v=r.useCallback(o=>{m.current=o,I(o)},[]),C=r.useCallback(o=>{const a=k.current.get(o);a&&(clearTimeout(a),k.current.delete(o))},[]),f=r.useCallback(o=>{const a=m.current.find(i=>i.id===o);!a||a.closing||(v(m.current.map(i=>i.id===o?{...i,closing:!0}:i)),k.current.set(o,setTimeout(()=>{var i;k.current.delete(o),v(m.current.filter(E=>E.id!==o)),(i=a.onDismiss)==null||i.call(a)},ot)))},[v]),q=r.useCallback(()=>{m.current.forEach(o=>{f(o.id)})},[f]),y=r.useCallback((o,a={})=>{c.current+=1;const i=`toast-${String(c.current)}`,E=a.tone??"neutral",L={...a,id:i,tone:E,message:o,duration:E==="danger"?null:a.duration??D.current,closing:!1},T=[...m.current,L],g=T.length-Math.max(1,S.current),j=g>0?T.slice(0,g):[];return j.forEach(R=>C(R.id)),v(g>0?T.slice(g):T),j.forEach(R=>{var z;return(z=R.onDismiss)==null?void 0:z.call(R)}),i},[C,v]),Z=r.useMemo(()=>Object.assign((a,i)=>y(a,i),{info:(a,i)=>y(a,{...i,tone:"info"}),success:(a,i)=>y(a,{...i,tone:"success"}),warning:(a,i)=>y(a,{...i,tone:"warning"}),danger:(a,i)=>y(a,{...i,tone:"danger"}),neutral:(a,i)=>y(a,{...i,tone:"neutral"}),dismiss:f,dismissAll:q}),[f,q,y]);return e.jsxs(tt,{value:Z,children:[n,e.jsx(Le,{toasts:b,onDismiss:f})]})};_.__docgenInfo={description:`Hosts the toast stack and provides the imperative API that \`useToast\`
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

@default 3`}}};const Y=()=>st(),{expect:p,fn:it,userEvent:x,within:A}=__STORYBOOK_MODULE_TEST__,rt='\n`Toast` is the transient, non-blocking placement: it confirms an outcome and\ngets out of the way. Applications almost never render it directly — they mount\n`ToastProvider` once and queue toasts imperatively with `useToast`.\n\n| Category | Placement | Tone | Dismiss |\n| --- | --- | --- | --- |\n| System | `PageBanner` | danger / warning / info | No — until resolved |\n| Feedback, blocking | `Alert` | danger | Yes |\n| Feedback, non-blocking | `Toast` | success / danger | Auto |\n| Awareness, section | `Alert` | info / warning / neutral | Optional |\n| Awareness, field | `InlineNote` | info / warning / danger | No |\n\n```tsx\n<ToastProvider>\n  <App />\n</ToastProvider>\n\nconst toast = useToast();\ntoast.success(\'Saved\');\nconst id = toast.danger(\'Could not save\', {\n  primaryAction: <Button size="sm" onClick={retry}>Retry</Button>,\n});\ntoast.dismiss(id);\n```\n\n**Stack.** Fixed bottom-right, 24px inset, 12px gap, newest nearest the corner,\ncapped at three. A fourth arriving pushes the oldest out.\n\n**Timing.** Five seconds by default. The countdown pauses on hover and on\nkeyboard focus and resumes from the time remaining. `tone="danger"` never\nauto-dismisses — the provider pins it open, so no call site has to remember.\n\n**Actions.** Same API as `Alert` and `PageBanner`: `primaryAction` and\n`secondaryAction`, each a `Button`, both optional.\n\n**Accessibility.** `role="alert"` when `tone` is `danger`,\n`role="status"` otherwise. `tone="neutral"` uses the info icon. The slide-in\nanimation is suppressed under `prefers-reduced-motion`.\n',wt={title:"Components/Toast",component:l,tags:["autodocs"],parameters:{docs:{description:{component:rt}}},argTypes:{tone:{control:"select",options:["info","success","warning","danger","neutral"]},dismissible:{control:"boolean"}},args:{tone:"success",dismissible:!0,onDismiss:it(),children:"Work order 10482 was saved."}},P={render:t=>e.jsx(w,{alignItems:"start",gap:"12",children:e.jsx(l,{...t})})},H={name:"Every tone",render:()=>e.jsxs(w,{alignItems:"start",gap:"12",children:[e.jsx(l,{tone:"info",dismissible:!1,children:"A scheduled export is ready to download."}),e.jsx(l,{tone:"success",dismissible:!1,children:"Work order 10482 was saved."}),e.jsx(l,{tone:"warning",dismissible:!1,children:"Two line items are missing a unit cost."}),e.jsx(l,{tone:"danger",dismissible:!1,children:"Could not save work order 10482."}),e.jsx(l,{tone:"neutral",dismissible:!1,children:"Neutral uses the info icon on a neutral surface."})]})},F={name:"Zero, one, and two actions",render:()=>e.jsxs(w,{alignItems:"start",gap:"12",children:[e.jsx(l,{tone:"success",dismissible:!1,children:"No actions."}),e.jsx(l,{tone:"success",dismissible:!1,primaryAction:e.jsx(d,{size:"sm",children:"Undo"}),children:"One action."}),e.jsx(l,{tone:"danger",dismissible:!1,primaryAction:e.jsx(d,{size:"sm",variant:"danger",children:"Retry"}),secondaryAction:e.jsx(d,{size:"sm",variant:"ghost",children:"View log"}),children:"Two actions."})]})},M={name:"Dismissible and non-dismissible",render:()=>e.jsxs(w,{alignItems:"start",gap:"12",children:[e.jsx(l,{tone:"info",dismissible:!0,onDismiss:()=>{},children:"Dismissible: the close control calls `onDismiss`."}),e.jsx(l,{tone:"info",dismissible:!1,children:"Not dismissible: this toast can only time out."})]})},ct=()=>{const t=Y();return e.jsxs(w,{alignItems:"start",gap:"12",children:[e.jsx(B,{textStyle:"body.sm",children:"Each button queues a real toast into the bottom-right stack."}),e.jsxs(Ke,{gap:"8",flexWrap:"wrap",children:[e.jsx(d,{size:"sm",onClick:()=>t.info("Export is ready."),children:"info"}),e.jsx(d,{size:"sm",onClick:()=>t.success("Work order 10482 was saved."),children:"success"}),e.jsx(d,{size:"sm",onClick:()=>t.warning("Two line items are missing a cost."),children:"warning"}),e.jsx(d,{size:"sm",variant:"danger",onClick:()=>t.danger("Could not save work order 10482.",{primaryAction:e.jsx(d,{size:"sm",children:"Retry"})}),children:"danger"}),e.jsx(d,{size:"sm",onClick:()=>t.neutral("Nothing to report."),children:"neutral"}),e.jsx(d,{size:"sm",variant:"ghost",onClick:()=>t.dismissAll(),children:"dismissAll"})]})]})},V={name:"Ex: live imperative stack",render:()=>e.jsx(_,{children:e.jsx(ct,{})})},lt=()=>{const t=Y();return e.jsxs(w,{alignItems:"start",gap:"12",children:[e.jsx(B,{textStyle:"body.sm",children:"The stack holds three. A fourth pushes the oldest out."}),e.jsx(d,{size:"sm",onClick:()=>{t.info("First",{duration:6e4}),t.info("Second",{duration:6e4}),t.info("Third",{duration:6e4}),t.info("Fourth",{duration:6e4})},children:"Queue four toasts"})]})},O={name:"Test: stack caps at three",render:()=>e.jsx(_,{children:e.jsx(lt,{})}),play:async({canvasElement:t})=>{const n=A(t);await x.click(n.getByRole("button",{name:"Queue four toasts"}));const s=A(t.ownerDocument.body),u=await s.findAllByRole("status");await p(u).toHaveLength(3),await p(s.queryByText("First")).not.toBeInTheDocument(),await p(s.getByText("Fourth")).toBeInTheDocument()}},dt=()=>{const t=Y();return e.jsxs(w,{alignItems:"start",gap:"12",children:[e.jsx(B,{textStyle:"body.sm",children:"The provider pins danger toasts open even when the call site asks for a short duration."}),e.jsx(d,{size:"sm",variant:"danger",onClick:()=>t.danger("Could not save. This will not time out.",{duration:100}),children:"Queue a danger toast with duration 100"})]})},Q={name:"Test: danger never auto-dismisses",render:()=>e.jsx(_,{children:e.jsx(dt,{})}),play:async({canvasElement:t})=>{const n=A(t),s=A(t.ownerDocument.body);await x.click(n.getByRole("button",{name:"Queue a danger toast with duration 100"})),await p(await s.findByRole("alert")).toBeInTheDocument(),await new Promise(u=>setTimeout(u,600)),await p(s.getByRole("alert")).toBeInTheDocument()}},ut=()=>{const[t,n]=r.useState(0);return e.jsxs(w,{alignItems:"start",gap:"12",children:[e.jsx(B,{textStyle:"body.sm",children:"A consumer `onMouseEnter` runs alongside the pause logic, not instead of it. Hover the toast: the count rises and `data-paused` is set."}),e.jsx(l,{tone:"info",dismissible:!1,duration:6e4,onMouseEnter:()=>n(s=>s+1),children:"Hover me."}),e.jsx(B,{textStyle:"body.sm","data-testid":"enter-count",children:t})]})},W={name:"Test: consumer hover handler keeps the pause",render:()=>e.jsx(ut,{}),play:async({canvasElement:t})=>{const n=A(t),s=n.getByRole("status");await x.hover(s),await p(s).toHaveAttribute("data-paused","true"),await p(n.getByTestId("enter-count")).toHaveTextContent("1"),await x.unhover(s),await p(s).not.toHaveAttribute("data-paused")}},K={name:"Test: focus and hover within keep the timer paused",render:()=>e.jsx(l,{tone:"info",dismissible:!1,duration:6e4,primaryAction:e.jsx(d,{size:"sm",children:"First action"}),secondaryAction:e.jsx(d,{size:"sm",children:"Second action"}),children:"Move focus between both actions."}),play:async({canvasElement:t})=>{const n=A(t),s=n.getByRole("status"),u=n.getByRole("button",{name:"First action"}),b=n.getByRole("button",{name:"Second action"});u.focus(),await p(s).toHaveAttribute("data-paused","true"),await x.hover(s),await x.unhover(s),await p(s).toHaveAttribute("data-paused","true"),await x.tab(),await p(b).toHaveFocus(),await p(s).toHaveAttribute("data-paused","true")}},mt=()=>{const t=Y();return e.jsxs(w,{alignItems:"start",gap:"12",children:[e.jsx(B,{textStyle:"body.sm",children:"`dismissLabel` given to `useToast` reaches the close control."}),e.jsx(d,{size:"sm",onClick:()=>t.success("Guardado.",{dismissLabel:"Cerrar",duration:6e4}),children:"Queue a Spanish toast"})]})},U={name:"Test: provider forwards dismissLabel",render:()=>e.jsx(_,{children:e.jsx(mt,{})}),play:async({canvasElement:t})=>{const n=A(t),s=A(t.ownerDocument.body);await x.click(n.getByRole("button",{name:"Queue a Spanish toast"})),await p(await s.findByRole("button",{name:"Cerrar"})).toBeInTheDocument()}},bt=["Default","Tones","Actions","Dismissible","ExLiveStack","StackCap","DangerNeverAutoDismisses","ConsumerHandlersKeepPause","FocusWithinKeepsPause","LocalizedDismissLabel"];var J,ee,te,se,ne;P.parameters={...P.parameters,docs:{...(J=P.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: args => <VStack alignItems="start" gap="12">
      <Toast {...args} />
    </VStack>
}`,...(te=(ee=P.parameters)==null?void 0:ee.docs)==null?void 0:te.source},description:{story:"Renders the presentation in place, outside the provider stack.",...(ne=(se=P.parameters)==null?void 0:se.docs)==null?void 0:ne.description}}};var ae,oe,ie;H.parameters={...H.parameters,docs:{...(ae=H.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(ie=(oe=H.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var re,ce,le;F.parameters={...F.parameters,docs:{...(re=F.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(le=(ce=F.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};var de,ue,me;M.parameters={...M.parameters,docs:{...(de=M.parameters)==null?void 0:de.docs,source:{originalSource:`{
  name: 'Dismissible and non-dismissible',
  render: () => <VStack alignItems="start" gap="12">
      <Toast tone="info" dismissible onDismiss={() => undefined}>
        Dismissible: the close control calls \`onDismiss\`.
      </Toast>
      <Toast tone="info" dismissible={false}>
        Not dismissible: this toast can only time out.
      </Toast>
    </VStack>
}`,...(me=(ue=M.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var pe,he,ge;V.parameters={...V.parameters,docs:{...(pe=V.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  name: 'Ex: live imperative stack',
  render: () => <ToastProvider>
      <LiveControls />
    </ToastProvider>
}`,...(ge=(he=V.parameters)==null?void 0:he.docs)==null?void 0:ge.source}}};var ve,fe,ye;O.parameters={...O.parameters,docs:{...(ve=O.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(ye=(fe=O.parameters)==null?void 0:fe.docs)==null?void 0:ye.source}}};var we,be,Te;Q.parameters={...Q.parameters,docs:{...(we=Q.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(Te=(be=Q.parameters)==null?void 0:be.docs)==null?void 0:Te.source}}};var xe,Ae,ke;W.parameters={...W.parameters,docs:{...(xe=W.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(ke=(Ae=W.parameters)==null?void 0:Ae.docs)==null?void 0:ke.source}}};var je,Re,Be;K.parameters={...K.parameters,docs:{...(je=K.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
}`,...(Be=(Re=K.parameters)==null?void 0:Re.docs)==null?void 0:Be.source}}};var De,Se,Ce;U.parameters={...U.parameters,docs:{...(De=U.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
}`,...(Ce=(Se=U.parameters)==null?void 0:Se.docs)==null?void 0:Ce.source}}};export{F as Actions,W as ConsumerHandlersKeepPause,Q as DangerNeverAutoDismisses,P as Default,M as Dismissible,V as ExLiveStack,K as FocusWithinKeepsPause,U as LocalizedDismissLabel,O as StackCap,H as Tones,bt as __namedExportsOrder,wt as default};
