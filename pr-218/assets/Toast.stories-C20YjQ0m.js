import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./index-BKyFwriW.js";import{f as He,w as j,u as A,e as u}from"./index-DPYJpPba.js";import{m as Fe,a as Ve,b as Me,e as Oe,g as Qe,s as Ie,B as N,c as Ee,d as Pe,V as b,H as We}from"./dsComponent-BG2jnRr7.js";import{B as d}from"./Button-Cr4bC5CG.js";import{T as D}from"./Text-IAtRPmZy.js";import{I as Ke}from"./Icon-CrwLKW7B.js";import"./IconConfig-BuieZFlx.js";import{I as Ue}from"./IconButton-DXX-zVMP.js";import{u as Ze}from"./useLocale-BTKG7dEv.js";import{F as $e,D as Ge}from"./Tooltip-bxPM6yCH.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Spinner-PLunUSsK.js";import"./FieldContext-D6URyQos.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";const Ne={tone:"neutral"},Xe=[],Ye=[["viewport","toast__viewport"],["root","toast__root"],["icon","toast__icon"],["content","toast__content"],["message","toast__message"],["actions","toast__actions"],["dismiss","toast__dismiss"]],Je=Ye.map(([t,a])=>[t,Oe(a,Ne,Qe(Xe,t))]),et=Fe((t={})=>Object.fromEntries(Je.map(([a,s])=>[a,s.recipeFn(t)]))),Y=["tone"],tt=t=>({...Ne,...Ve(t)}),qe=Object.assign(et,{__recipe__:!1,__name__:"toast",raw:t=>t,classNameMap:{},variantKeys:Y,variantMap:{tone:["info","success","warning","danger","neutral"]},splitVariantProps(t){return Me(t,Y)},getVariantProps:tt}),st={info:"info",success:"success",warning:"warning",danger:"error",neutral:"info"},nt={info:"icon.info",success:"icon.success",warning:"icon.warning",danger:"icon.danger",neutral:"icon.subtle"},l=t=>{const{labels:a}=Ze(),{tone:s="neutral",children:m,primaryAction:T,secondaryAction:S,dismissible:g=!0,onDismiss:c,duration:p=null,dismissLabel:_=a.dismiss,state:C="open",onMouseEnter:f,onMouseLeave:I,onFocus:w,onBlur:E,...y}=t,[Z,r]=Ie(y),n=qe({tone:s}),[o,R]=i.useState(!1),[$,B]=i.useState(!1),x=o||$,k=i.useRef(p??0),v=i.useRef(c);i.useEffect(()=>{v.current=c},[c]),i.useEffect(()=>{k.current=p??0},[p]),i.useEffect(()=>{if(p===null||x||C==="closing")return;const h=Date.now(),G=setTimeout(()=>{var X;k.current=0,(X=v.current)==null||X.call(v)},k.current);return()=>{clearTimeout(G),k.current=Math.max(0,k.current-(Date.now()-h))}},[p,x,C]);const L=st[s],ze=!!(T??S);return e.jsxs(N,{...Pe("Toast"),role:s==="danger"?"alert":"status","aria-atomic":"true","data-state":C,"data-paused":x?"true":void 0,className:Ee(n.root,Z),...r,onMouseEnter:h=>{R(!0),f==null||f(h)},onMouseLeave:h=>{R(!1),I==null||I(h)},onFocus:h=>{B(!0),w==null||w(h)},onBlur:h=>{const G=h.relatedTarget;h.currentTarget.contains(G)||B(!1),E==null||E(h)},children:[e.jsx(N,{className:n.icon,children:e.jsx(Ke,{name:L,size:"20",fill:nt[s],"aria-hidden":"true"})}),e.jsxs(N,{className:n.content,children:[e.jsx(D,{textStyle:"body.sm",lineHeight:"tight",color:"text",className:n.message,children:m}),ze&&e.jsxs(N,{className:n.actions,children:[T,S]})]}),g&&e.jsx(Ue,{variant:"ghost",size:"sm",iconName:"x",altText:_,onClick:c,className:n.dismiss})]})};l.__docgenInfo={description:'Confirms a non-blocking outcome in a transient, floating message.\n\nApplications normally queue toasts imperatively with `useToast` rather than\nrendering this component, which is the presentation for one entry in a\n`ToastProvider` stack. Render it directly only to place a toast outside that\nstack. Use `Alert` when the message must stay until it is read.\n\nRenders a `div` with `role="alert"` when `tone` is `danger` and\n`role="status"` otherwise. `tone="neutral"` uses the info icon.\n\n@example\n```tsx\n<Toast tone="success" duration={5000} onDismiss={remove}>Saved</Toast>\n```',methods:[],displayName:"Toast",props:{tone:{required:!1,tsType:{name:"union",raw:"'info' | 'success' | 'warning' | 'danger' | 'neutral'",elements:[{name:"literal",value:"'info'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'neutral'"}]},description:'@default "neutral"'},children:{required:!0,tsType:{name:"ReactNode"},description:"The toast message."},primaryAction:{required:!1,tsType:{name:"ReactNode"},description:"Leading action, normally a `Button`."},secondaryAction:{required:!1,tsType:{name:"ReactNode"},description:"Trailing action, normally a lower-emphasis `Button`. Render only alongside `primaryAction`."},duration:{required:!1,tsType:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}]},description:"Milliseconds before the toast calls `onDismiss` by itself. The countdown\npauses while the toast is hovered or contains focus and resumes from the\nremaining time. Pass `null`, or omit it, for a toast that never times out.\n`ToastProvider` supplies this value and always passes `null` for\n`tone: 'danger'`."},dismissLabel:{required:!1,tsType:{name:"string"},description:'Accessible label for the close control. @default "Dismiss"'},state:{required:!1,tsType:{name:"union",raw:"'open' | 'closing'",elements:[{name:"literal",value:"'open'"},{name:"literal",value:"'closing'"}]},description:`Animation phase. \`closing\` plays the exit animation; the owner removes the
toast once it finishes.

@default "open"`}}};const _e=i.createContext(null),at=_e.Provider,ot=()=>{const t=i.useContext(_e);if(!t)throw new Error("useToast must be called inside a <ToastProvider>.");return t},Le=t=>{const{toasts:a,onDismiss:s,...m}=t,[T,S]=Ie(m),g=qe();return a.length===0?null:e.jsx($e,{children:e.jsx(Ge,{children:e.jsx(N,{...Pe("ToastViewport"),className:Ee(g.viewport,T),...S,children:a.map(c=>e.jsx(l,{tone:c.tone,duration:c.duration,dismissible:c.dismissible??!0,dismissLabel:c.dismissLabel,primaryAction:c.primaryAction,secondaryAction:c.secondaryAction,state:c.closing?"closing":"open",onDismiss:()=>s(c.id),children:c.message},c.id))})})})};Le.__docgenInfo={description:`Renders the fixed bottom-right toast stack in a portal.

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
}`,signature:{properties:[{key:"tone",value:{name:"union",raw:"'info' | 'success' | 'warning' | 'danger' | 'neutral'",elements:[{name:"literal",value:"'info'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'neutral'"}],required:!0},description:'Semantic tone. `danger` is never auto-dismissed, whatever `duration` says.\n\n@default "neutral"'},{key:"duration",value:{name:"number",required:!1},description:`Milliseconds the toast stays on screen before it dismisses itself. The
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
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0},description:"Identifier returned by the queueing call and accepted by `toast.dismiss`."},{key:"tone",value:{name:"union",raw:"'info' | 'success' | 'warning' | 'danger' | 'neutral'",elements:[{name:"literal",value:"'info'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'neutral'"}],required:!0},description:"Resolved tone."},{key:"message",value:{name:"ReactNode",required:!0},description:"Message content."},{key:"duration",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0},description:"Resolved lifetime in milliseconds, or `null` when the toast never times out."},{key:"closing",value:{name:"boolean",required:!0},description:"True once the exit animation has started and the toast is leaving."}]}}]}],raw:"ToastRecord[]"},description:"Toasts to render, oldest first. The last entry sits nearest the corner."},onDismiss:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:"Called with a toast's id when that toast asks to be removed."}}};const it=5e3,rt=3,ct=150,q=t=>{const{children:a,duration:s=it,limit:m=rt}=t,[T,S]=i.useState([]),g=i.useRef([]),c=i.useRef(0),p=i.useRef(new Map),_=i.useRef(s),C=i.useRef(m);_.current=s,C.current=m,i.useEffect(()=>{const r=p.current;return()=>{r.forEach(n=>clearTimeout(n)),r.clear()}},[]);const f=i.useCallback(r=>{g.current=r,S(r)},[]),I=i.useCallback(r=>{const n=p.current.get(r);n&&(clearTimeout(n),p.current.delete(r))},[]),w=i.useCallback(r=>{const n=g.current.find(o=>o.id===r);!n||n.closing||(f(g.current.map(o=>o.id===r?{...o,closing:!0}:o)),p.current.set(r,setTimeout(()=>{var o;p.current.delete(r),f(g.current.filter(R=>R.id!==r)),(o=n.onDismiss)==null||o.call(n)},ct)))},[f]),E=i.useCallback(()=>{g.current.forEach(r=>{w(r.id)})},[w]),y=i.useCallback((r,n={})=>{c.current+=1;const o=`toast-${String(c.current)}`,R=n.tone??"neutral",$={...n,id:o,tone:R,message:r,duration:R==="danger"?null:n.duration??_.current,closing:!1},B=[...g.current,$],x=B.length-Math.max(1,C.current),k=x>0?B.slice(0,x):[];return k.forEach(v=>I(v.id)),f(x>0?B.slice(x):B),k.forEach(v=>{var L;return(L=v.onDismiss)==null?void 0:L.call(v)}),o},[I,f]),Z=i.useMemo(()=>Object.assign((n,o)=>y(n,o),{info:(n,o)=>y(n,{...o,tone:"info"}),success:(n,o)=>y(n,{...o,tone:"success"}),warning:(n,o)=>y(n,{...o,tone:"warning"}),danger:(n,o)=>y(n,{...o,tone:"danger"}),neutral:(n,o)=>y(n,{...o,tone:"neutral"}),dismiss:w,dismissAll:E}),[w,E,y]);return e.jsxs(at,{value:Z,children:[a,e.jsx(Le,{toasts:T,onDismiss:w})]})};q.__docgenInfo={description:`Hosts the toast stack and provides the imperative API that \`useToast\`
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

@default 3`}}};const U=()=>ot(),lt='\n`Toast` is the transient, non-blocking placement: it confirms an outcome and\ngets out of the way. Applications almost never render it directly — they mount\n`ToastProvider` once and queue toasts imperatively with `useToast`.\n\n| Category | Placement | Tone | Dismiss |\n| --- | --- | --- | --- |\n| System | `PageBanner` | danger / warning / info | No — until resolved |\n| Feedback, blocking | `Alert` | danger | Yes |\n| Feedback, non-blocking | `Toast` | success / danger | Auto |\n| Awareness, section | `Alert` | info / warning / neutral | Optional |\n| Awareness, field | `InlineNote` | info / warning / danger | No |\n\n```tsx\n<ToastProvider>\n  <App />\n</ToastProvider>\n\nconst toast = useToast();\ntoast.success(\'Saved\');\nconst id = toast.danger(\'Could not save\', {\n  primaryAction: <Button size="sm" onClick={retry}>Retry</Button>,\n});\ntoast.dismiss(id);\n```\n\n**Stack.** Fixed bottom-right, 24px inset, 12px gap, newest nearest the corner,\ncapped at three. A fourth arriving pushes the oldest out.\n\n**Timing.** Five seconds by default. The countdown pauses on hover and on\nkeyboard focus and resumes from the time remaining. `tone="danger"` never\nauto-dismisses — the provider pins it open, so no call site has to remember.\n\n**Actions.** Same API as `Alert` and `PageBanner`: `primaryAction` and\n`secondaryAction`, each a `Button`, both optional.\n\n**Accessibility.** `role="alert"` when `tone` is `danger`,\n`role="status"` otherwise. `tone="neutral"` uses the info icon. The slide-in\nanimation is suppressed under `prefers-reduced-motion`.\n',It={title:"Components/Toast",component:l,tags:["autodocs"],parameters:{docs:{description:{component:lt}}},argTypes:{tone:{control:"select",options:["info","success","warning","danger","neutral"]},dismissible:{control:"boolean"}},args:{tone:"success",dismissible:!0,onDismiss:He(),children:"Work order 10482 was saved."}},P={render:t=>e.jsx(b,{alignItems:"start",gap:"12",children:e.jsx(l,{...t})})},z={name:"Every tone",render:()=>e.jsxs(b,{alignItems:"start",gap:"12",children:[e.jsx(l,{tone:"info",dismissible:!1,children:"A scheduled export is ready to download."}),e.jsx(l,{tone:"success",dismissible:!1,children:"Work order 10482 was saved."}),e.jsx(l,{tone:"warning",dismissible:!1,children:"Two line items are missing a unit cost."}),e.jsx(l,{tone:"danger",dismissible:!1,children:"Could not save work order 10482."}),e.jsx(l,{tone:"neutral",dismissible:!1,children:"Neutral uses the info icon on a neutral surface."})]})},H={name:"Zero, one, and two actions",render:()=>e.jsxs(b,{alignItems:"start",gap:"12",children:[e.jsx(l,{tone:"success",dismissible:!1,children:"No actions."}),e.jsx(l,{tone:"success",dismissible:!1,primaryAction:e.jsx(d,{size:"sm",children:"Undo"}),children:"One action."}),e.jsx(l,{tone:"danger",dismissible:!1,primaryAction:e.jsx(d,{size:"sm",variant:"danger",children:"Retry"}),secondaryAction:e.jsx(d,{size:"sm",variant:"ghost",children:"View log"}),children:"Two actions."})]})},F={name:"Dismissible and non-dismissible",render:()=>e.jsxs(b,{alignItems:"start",gap:"12",children:[e.jsx(l,{tone:"info",dismissible:!0,onDismiss:()=>{},children:"Dismissible: the close control calls `onDismiss`."}),e.jsx(l,{tone:"info",dismissible:!1,children:"Not dismissible: this toast can only time out."})]})},dt=()=>{const t=U();return e.jsxs(b,{alignItems:"start",gap:"12",children:[e.jsx(D,{textStyle:"body.sm",children:"Each button queues a real toast into the bottom-right stack."}),e.jsxs(We,{gap:"8",flexWrap:"wrap",children:[e.jsx(d,{size:"sm",onClick:()=>t.info("Export is ready."),children:"info"}),e.jsx(d,{size:"sm",onClick:()=>t.success("Work order 10482 was saved."),children:"success"}),e.jsx(d,{size:"sm",onClick:()=>t.warning("Two line items are missing a cost."),children:"warning"}),e.jsx(d,{size:"sm",variant:"danger",onClick:()=>t.danger("Could not save work order 10482.",{primaryAction:e.jsx(d,{size:"sm",children:"Retry"})}),children:"danger"}),e.jsx(d,{size:"sm",onClick:()=>t.neutral("Nothing to report."),children:"neutral"}),e.jsx(d,{size:"sm",variant:"ghost",onClick:()=>t.dismissAll(),children:"dismissAll"})]})]})},V={name:"Ex: live imperative stack",render:()=>e.jsx(q,{children:e.jsx(dt,{})})},ut=()=>{const t=U();return e.jsxs(b,{alignItems:"start",gap:"12",children:[e.jsx(D,{textStyle:"body.sm",children:"The stack holds three. A fourth pushes the oldest out."}),e.jsx(d,{size:"sm",onClick:()=>{t.info("First",{duration:6e4}),t.info("Second",{duration:6e4}),t.info("Third",{duration:6e4}),t.info("Fourth",{duration:6e4})},children:"Queue four toasts"})]})},M={name:"Test: stack caps at three",render:()=>e.jsx(q,{children:e.jsx(ut,{})}),play:async({canvasElement:t})=>{const a=j(t);await A.click(a.getByRole("button",{name:"Queue four toasts"}));const s=j(t.ownerDocument.body),m=await s.findAllByRole("status");await u(m).toHaveLength(3),await u(s.queryByText("First")).not.toBeInTheDocument(),await u(s.getByText("Fourth")).toBeInTheDocument()}},mt=()=>{const t=U();return e.jsxs(b,{alignItems:"start",gap:"12",children:[e.jsx(D,{textStyle:"body.sm",children:"The provider pins danger toasts open even when the call site asks for a short duration."}),e.jsx(d,{size:"sm",variant:"danger",onClick:()=>t.danger("Could not save. This will not time out.",{duration:100}),children:"Queue a danger toast with duration 100"})]})},O={name:"Test: danger never auto-dismisses",render:()=>e.jsx(q,{children:e.jsx(mt,{})}),play:async({canvasElement:t})=>{const a=j(t),s=j(t.ownerDocument.body);await A.click(a.getByRole("button",{name:"Queue a danger toast with duration 100"})),await u(await s.findByRole("alert")).toBeInTheDocument(),await new Promise(m=>setTimeout(m,600)),await u(s.getByRole("alert")).toBeInTheDocument()}},pt=()=>{const[t,a]=i.useState(0);return e.jsxs(b,{alignItems:"start",gap:"12",children:[e.jsx(D,{textStyle:"body.sm",children:"A consumer `onMouseEnter` runs alongside the pause logic, not instead of it. Hover the toast: the count rises and `data-paused` is set."}),e.jsx(l,{tone:"info",dismissible:!1,duration:6e4,onMouseEnter:()=>a(s=>s+1),children:"Hover me."}),e.jsx(D,{textStyle:"body.sm","data-testid":"enter-count",children:t})]})},Q={name:"Test: consumer hover handler keeps the pause",render:()=>e.jsx(pt,{}),play:async({canvasElement:t})=>{const a=j(t),s=a.getByRole("status");await A.hover(s),await u(s).toHaveAttribute("data-paused","true"),await u(a.getByTestId("enter-count")).toHaveTextContent("1"),await A.unhover(s),await u(s).not.toHaveAttribute("data-paused")}},W={name:"Test: focus and hover within keep the timer paused",render:()=>e.jsx(l,{tone:"info",dismissible:!1,duration:6e4,primaryAction:e.jsx(d,{size:"sm",children:"First action"}),secondaryAction:e.jsx(d,{size:"sm",children:"Second action"}),children:"Move focus between both actions."}),play:async({canvasElement:t})=>{const a=j(t),s=a.getByRole("status"),m=a.getByRole("button",{name:"First action"}),T=a.getByRole("button",{name:"Second action"});m.focus(),await u(s).toHaveAttribute("data-paused","true"),await A.hover(s),await A.unhover(s),await u(s).toHaveAttribute("data-paused","true"),await A.tab(),await u(T).toHaveFocus(),await u(s).toHaveAttribute("data-paused","true")}},ht=()=>{const t=U();return e.jsxs(b,{alignItems:"start",gap:"12",children:[e.jsx(D,{textStyle:"body.sm",children:"`dismissLabel` given to `useToast` reaches the close control."}),e.jsx(d,{size:"sm",onClick:()=>t.success("Guardado.",{dismissLabel:"Cerrar",duration:6e4}),children:"Queue a Spanish toast"})]})},K={name:"Test: provider forwards dismissLabel",render:()=>e.jsx(q,{children:e.jsx(ht,{})}),play:async({canvasElement:t})=>{const a=j(t),s=j(t.ownerDocument.body);await A.click(a.getByRole("button",{name:"Queue a Spanish toast"})),await u(await s.findByRole("button",{name:"Cerrar"})).toBeInTheDocument()}};var J,ee,te,se,ne;P.parameters={...P.parameters,docs:{...(J=P.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(me=(ue=F.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var pe,he,ge;V.parameters={...V.parameters,docs:{...(pe=V.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  name: 'Ex: live imperative stack',
  render: () => <ToastProvider>
      <LiveControls />
    </ToastProvider>
}`,...(ge=(he=V.parameters)==null?void 0:he.docs)==null?void 0:ge.source}}};var ve,fe,we;M.parameters={...M.parameters,docs:{...(ve=M.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(we=(fe=M.parameters)==null?void 0:fe.docs)==null?void 0:we.source}}};var ye,be,Te;O.parameters={...O.parameters,docs:{...(ye=O.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(Te=(be=O.parameters)==null?void 0:be.docs)==null?void 0:Te.source}}};var xe,ke,Ae;Q.parameters={...Q.parameters,docs:{...(xe=Q.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(Ae=(ke=Q.parameters)==null?void 0:ke.docs)==null?void 0:Ae.source}}};var je,Re,Be;W.parameters={...W.parameters,docs:{...(je=W.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
}`,...(Ce=(Se=K.parameters)==null?void 0:Se.docs)==null?void 0:Ce.source}}};const Et=["Default","Tones","Actions","Dismissible","ExLiveStack","StackCap","DangerNeverAutoDismisses","ConsumerHandlersKeepPause","FocusWithinKeepsPause","LocalizedDismissLabel"];export{H as Actions,Q as ConsumerHandlersKeepPause,O as DangerNeverAutoDismisses,P as Default,F as Dismissible,V as ExLiveStack,W as FocusWithinKeepsPause,K as LocalizedDismissLabel,M as StackCap,z as Tones,Et as __namedExportsOrder,It as default};
