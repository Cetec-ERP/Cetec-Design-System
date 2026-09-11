import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./index-BKyFwriW.js";import{w as x,u as q,e as w}from"./index-DPYJpPba.js";import{m as Ie,c as Ne,s as Pe,a as Ee,g as qe,b as Ae,B as E,d as je,e as Re,V as y,H as _e}from"./dsComponent-COP_u32W.js";import{B as d}from"./Button-9qTdRXCj.js";import{T as k}from"./Text-Bb_CaJVi.js";import{I as Le}from"./Icon-DykL05lh.js";import"./IconConfig-qRFEvzON.js";import{I as ze}from"./IconButton-DtO38NMA.js";import{F as Ve,D as He}from"./Tooltip-BI37R98K.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Spinner-CUl5P6MP.js";import"./FieldContext-D6URyQos.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";const De={tone:"neutral"},Me=[],Fe=[["viewport","toast__viewport"],["root","toast__root"],["icon","toast__icon"],["content","toast__content"],["message","toast__message"],["actions","toast__actions"],["dismiss","toast__dismiss"]],Oe=Fe.map(([t,o])=>[t,Ee(o,De,qe(Me,t))]),Qe=Ie((t={})=>Object.fromEntries(Oe.map(([o,r])=>[o,r.recipeFn(t)]))),Z=["tone"],Ue=t=>({...De,...Ne(t)}),Be=Object.assign(Qe,{__recipe__:!1,__name__:"toast",raw:t=>t,classNameMap:{},variantKeys:Z,variantMap:{tone:["info","success","warning","danger","neutral"]},splitVariantProps(t){return Pe(t,Z)},getVariantProps:Ue}),We={info:"info",success:"success",warning:"warning",danger:"error",neutral:"info"},Ke={info:"icon.info",success:"icon.success",warning:"icon.warning",danger:"icon.danger",neutral:"icon.subtle"},l=t=>{const{tone:o="neutral",children:r,primaryAction:p,secondaryAction:A,dismissible:I=!0,onDismiss:u,duration:c=null,dismissLabel:T="Dismiss",state:j="open",onMouseEnter:R,onMouseLeave:g,onFocus:D,onBlur:v,...L}=t,[f,K]=Ae(L),a=Be({tone:o}),[s,n]=i.useState(!1),h=i.useRef(c??0),B=i.useRef(u);B.current=u,i.useEffect(()=>{h.current=c??0},[c]),i.useEffect(()=>{if(c===null||s||j==="closing")return;const m=Date.now(),b=setTimeout(()=>{var N;h.current=0,(N=B.current)==null||N.call(B)},h.current);return()=>{clearTimeout(b),h.current=Math.max(0,h.current-(Date.now()-m))}},[c,s,j]);const C=We[o],S=!!(p??A);return e.jsxs(E,{...Re("Toast"),role:o==="danger"?"alert":"status","aria-atomic":"true","data-state":j,"data-paused":s?"true":void 0,className:je(a.root,f),...K,onMouseEnter:m=>{n(!0),R==null||R(m)},onMouseLeave:m=>{n(!1),g==null||g(m)},onFocus:m=>{n(!0),D==null||D(m)},onBlur:m=>{n(!1),v==null||v(m)},children:[e.jsx(E,{className:a.icon,children:e.jsx(Le,{name:C,size:"20",fill:Ke[o],"aria-hidden":"true"})}),e.jsxs(E,{className:a.content,children:[e.jsx(k,{textStyle:"body.sm",lineHeight:"tight",color:"text",className:a.message,children:r}),S&&e.jsxs(E,{className:a.actions,children:[p,A]})]}),I&&e.jsx(ze,{variant:"ghost",size:"sm",iconName:"x",altText:T,onClick:u,className:a.dismiss})]})};l.__docgenInfo={description:'Confirms a non-blocking outcome in a transient, floating message.\n\nApplications normally queue toasts imperatively with `useToast` rather than\nrendering this component, which is the presentation for one entry in a\n`ToastProvider` stack. Render it directly only to place a toast outside that\nstack. Use `Alert` when the message must stay until it is read.\n\nRenders a `div` with `role="alert"` when `tone` is `danger` and\n`role="status"` otherwise. `tone="neutral"` uses the info icon.\n\n@example\n```tsx\n<Toast tone="success" duration={5000} onDismiss={remove}>Saved</Toast>\n```',methods:[],displayName:"Toast",props:{tone:{required:!1,tsType:{name:"union",raw:"'info' | 'success' | 'warning' | 'danger' | 'neutral'",elements:[{name:"literal",value:"'info'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'neutral'"}]},description:'@default "neutral"'},children:{required:!0,tsType:{name:"ReactNode"},description:"The toast message."},primaryAction:{required:!1,tsType:{name:"ReactNode"},description:"Leading action, normally a `Button`."},secondaryAction:{required:!1,tsType:{name:"ReactNode"},description:"Trailing action, normally a lower-emphasis `Button`. Render only alongside `primaryAction`."},dismissible:{required:!1,tsType:{name:"boolean"},description:"Shows the close control, which calls `onDismiss`.\n\n@default true"},onDismiss:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Runs when the close control is activated or `duration` elapses."},duration:{required:!1,tsType:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}]},description:"Milliseconds before the toast calls `onDismiss` by itself. The countdown\npauses while the toast is hovered or contains focus and resumes from the\nremaining time. Pass `null`, or omit it, for a toast that never times out.\n`ToastProvider` supplies this value and always passes `null` for\n`tone: 'danger'`."},dismissLabel:{required:!1,tsType:{name:"string"},description:'Accessible label for the close control. @default "Dismiss"'},state:{required:!1,tsType:{name:"union",raw:"'open' | 'closing'",elements:[{name:"literal",value:"'open'"},{name:"literal",value:"'closing'"}]},description:`Animation phase. \`closing\` plays the exit animation; the owner removes the
toast once it finishes.

@default "open"`}}};const Ce=i.createContext(null),Ze=Ce.Provider,$e=()=>{const t=i.useContext(Ce);if(!t)throw new Error("useToast must be called inside a <ToastProvider>.");return t},Se=t=>{const{toasts:o,onDismiss:r,...p}=t,[A,I]=Ae(p),u=Be();return o.length===0?null:e.jsx(Ve,{children:e.jsx(He,{children:e.jsx(E,{...Re("ToastViewport"),className:je(u.viewport,A),...I,children:o.map(c=>e.jsx(l,{tone:c.tone,duration:c.duration,dismissible:c.dismissible??!0,dismissLabel:c.dismissLabel,primaryAction:c.primaryAction,secondaryAction:c.secondaryAction,state:c.closing?"closing":"open",onDismiss:()=>r(c.id),children:c.message},c.id))})})})};Se.__docgenInfo={description:`Renders the fixed bottom-right toast stack in a portal.

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
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0},description:"Identifier returned by the queueing call and accepted by `toast.dismiss`."},{key:"tone",value:{name:"union",raw:"'info' | 'success' | 'warning' | 'danger' | 'neutral'",elements:[{name:"literal",value:"'info'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'neutral'"}],required:!0},description:"Resolved tone."},{key:"message",value:{name:"ReactNode",required:!0},description:"Message content."},{key:"duration",value:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}],required:!0},description:"Resolved lifetime in milliseconds, or `null` when the toast never times out."},{key:"closing",value:{name:"boolean",required:!0},description:"True once the exit animation has started and the toast is leaving."}]}}]}],raw:"ToastRecord[]"},description:"Toasts to render, oldest first. The last entry sits nearest the corner."},onDismiss:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:"Called with a toast's id when that toast asks to be removed."}}};const Ge=5e3,Xe=3,Ye=150,_=t=>{const{children:o,duration:r=Ge,limit:p=Xe}=t,[A,I]=i.useState([]),u=i.useRef([]),c=i.useRef(0),T=i.useRef(new Map),j=i.useRef(r),R=i.useRef(p);j.current=r,R.current=p,i.useEffect(()=>{const a=T.current;return()=>{a.forEach(s=>clearTimeout(s)),a.clear()}},[]);const g=i.useCallback(a=>{u.current=a,I(a)},[]),D=i.useCallback(a=>{const s=T.current.get(a);s&&(clearTimeout(s),T.current.delete(a))},[]),v=i.useCallback(a=>{const s=u.current.find(n=>n.id===a);!s||s.closing||(g(u.current.map(n=>n.id===a?{...n,closing:!0}:n)),T.current.set(a,setTimeout(()=>{var n;T.current.delete(a),g(u.current.filter(h=>h.id!==a)),(n=s.onDismiss)==null||n.call(s)},Ye)))},[g]),L=i.useCallback(()=>{u.current.forEach(a=>{v(a.id)})},[v]),f=i.useCallback((a,s={})=>{c.current+=1;const n=`toast-${String(c.current)}`,h=s.tone??"neutral",B={...s,id:n,tone:h,message:a,duration:h==="danger"?null:s.duration??j.current,closing:!1},C=[...u.current,B],S=C.length-Math.max(1,R.current),m=S>0?C.slice(0,S):[];return m.forEach(b=>D(b.id)),g(S>0?C.slice(S):C),m.forEach(b=>{var N;return(N=b.onDismiss)==null?void 0:N.call(b)}),n},[D,g]),K=i.useMemo(()=>Object.assign((s,n)=>f(s,n),{info:(s,n)=>f(s,{...n,tone:"info"}),success:(s,n)=>f(s,{...n,tone:"success"}),warning:(s,n)=>f(s,{...n,tone:"warning"}),danger:(s,n)=>f(s,{...n,tone:"danger"}),neutral:(s,n)=>f(s,{...n,tone:"neutral"}),dismiss:v,dismissAll:L}),[v,L,f]);return e.jsxs(Ze,{value:K,children:[o,e.jsx(Se,{toasts:A,onDismiss:v})]})};_.__docgenInfo={description:`Hosts the toast stack and provides the imperative API that \`useToast\`
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

@default 3`}}};const W=()=>$e(),Je='\n`Toast` is the transient, non-blocking placement: it confirms an outcome and\ngets out of the way. Applications almost never render it directly — they mount\n`ToastProvider` once and queue toasts imperatively with `useToast`.\n\n| Category | Placement | Tone | Dismiss |\n| --- | --- | --- | --- |\n| System | `PageBanner` | danger / warning / info | No — until resolved |\n| Feedback, blocking | `Alert` | danger | Yes |\n| Feedback, non-blocking | `Toast` | success / danger | Auto |\n| Awareness, section | `Alert` | info / warning / neutral | Optional |\n| Awareness, field | `InlineNote` | info / warning / danger | No |\n\n```tsx\n<ToastProvider>\n  <App />\n</ToastProvider>\n\nconst toast = useToast();\ntoast.success(\'Saved\');\nconst id = toast.danger(\'Could not save\', {\n  primaryAction: <Button size="sm" onClick={retry}>Retry</Button>,\n});\ntoast.dismiss(id);\n```\n\n**Stack.** Fixed bottom-right, 24px inset, 12px gap, newest nearest the corner,\ncapped at three. A fourth arriving pushes the oldest out.\n\n**Timing.** Five seconds by default. The countdown pauses on hover and on\nkeyboard focus and resumes from the time remaining. `tone="danger"` never\nauto-dismisses — the provider pins it open, so no call site has to remember.\n\n**Actions.** Same API as `Alert` and `PageBanner`: `primaryAction` and\n`secondaryAction`, each a `Button`, both optional.\n\n**Accessibility.** `role="alert"` when `tone` is `danger`,\n`role="status"` otherwise. `tone="neutral"` uses the info icon. The slide-in\nanimation is suppressed under `prefers-reduced-motion`.\n',Tt={title:"Components/Toast",component:l,tags:["autodocs"],parameters:{docs:{description:{component:Je}}},argTypes:{tone:{control:"select",options:["info","success","warning","danger","neutral"]},dismissible:{control:"boolean"}},args:{tone:"success",dismissible:!0,children:"Work order 10482 was saved."}},P={render:t=>e.jsx(y,{alignItems:"start",gap:"12",children:e.jsx(l,{...t})})},z={name:"Every tone",render:()=>e.jsxs(y,{alignItems:"start",gap:"12",children:[e.jsx(l,{tone:"info",children:"A scheduled export is ready to download."}),e.jsx(l,{tone:"success",children:"Work order 10482 was saved."}),e.jsx(l,{tone:"warning",children:"Two line items are missing a unit cost."}),e.jsx(l,{tone:"danger",children:"Could not save work order 10482."}),e.jsx(l,{tone:"neutral",children:"Neutral uses the info icon on a neutral surface."})]})},V={name:"Zero, one, and two actions",render:()=>e.jsxs(y,{alignItems:"start",gap:"12",children:[e.jsx(l,{tone:"success",children:"No actions."}),e.jsx(l,{tone:"success",primaryAction:e.jsx(d,{size:"sm",children:"Undo"}),children:"One action."}),e.jsx(l,{tone:"danger",primaryAction:e.jsx(d,{size:"sm",variant:"danger",children:"Retry"}),secondaryAction:e.jsx(d,{size:"sm",variant:"ghost",children:"View log"}),children:"Two actions."})]})},H={name:"Dismissible and non-dismissible",render:()=>e.jsxs(y,{alignItems:"start",gap:"12",children:[e.jsx(l,{tone:"info",dismissible:!0,children:"Dismissible: the close control calls `onDismiss`."}),e.jsx(l,{tone:"info",dismissible:!1,children:"Not dismissible: this toast can only time out."})]})},et=()=>{const t=W();return e.jsxs(y,{alignItems:"start",gap:"12",children:[e.jsx(k,{textStyle:"body.sm",children:"Each button queues a real toast into the bottom-right stack."}),e.jsxs(_e,{gap:"8",flexWrap:"wrap",children:[e.jsx(d,{size:"sm",onClick:()=>t.info("Export is ready."),children:"info"}),e.jsx(d,{size:"sm",onClick:()=>t.success("Work order 10482 was saved."),children:"success"}),e.jsx(d,{size:"sm",onClick:()=>t.warning("Two line items are missing a cost."),children:"warning"}),e.jsx(d,{size:"sm",variant:"danger",onClick:()=>t.danger("Could not save work order 10482.",{primaryAction:e.jsx(d,{size:"sm",children:"Retry"})}),children:"danger"}),e.jsx(d,{size:"sm",onClick:()=>t.neutral("Nothing to report."),children:"neutral"}),e.jsx(d,{size:"sm",variant:"ghost",onClick:()=>t.dismissAll(),children:"dismissAll"})]})]})},M={name:"Ex: live imperative stack",render:()=>e.jsx(_,{children:e.jsx(et,{})})},tt=()=>{const t=W();return e.jsxs(y,{alignItems:"start",gap:"12",children:[e.jsx(k,{textStyle:"body.sm",children:"The stack holds three. A fourth pushes the oldest out."}),e.jsx(d,{size:"sm",onClick:()=>{t.info("First",{duration:6e4}),t.info("Second",{duration:6e4}),t.info("Third",{duration:6e4}),t.info("Fourth",{duration:6e4})},children:"Queue four toasts"})]})},F={name:"Test: stack caps at three",render:()=>e.jsx(_,{children:e.jsx(tt,{})}),play:async({canvasElement:t})=>{const o=x(t);await q.click(o.getByRole("button",{name:"Queue four toasts"}));const r=x(t.ownerDocument.body),p=await r.findAllByRole("status");await w(p).toHaveLength(3),await w(r.queryByText("First")).not.toBeInTheDocument(),await w(r.getByText("Fourth")).toBeInTheDocument()}},st=()=>{const t=W();return e.jsxs(y,{alignItems:"start",gap:"12",children:[e.jsx(k,{textStyle:"body.sm",children:"The provider pins danger toasts open even when the call site asks for a short duration."}),e.jsx(d,{size:"sm",variant:"danger",onClick:()=>t.danger("Could not save. This will not time out.",{duration:100}),children:"Queue a danger toast with duration 100"})]})},O={name:"Test: danger never auto-dismisses",render:()=>e.jsx(_,{children:e.jsx(st,{})}),play:async({canvasElement:t})=>{const o=x(t),r=x(t.ownerDocument.body);await q.click(o.getByRole("button",{name:"Queue a danger toast with duration 100"})),await w(await r.findByRole("alert")).toBeInTheDocument(),await new Promise(p=>setTimeout(p,600)),await w(r.getByRole("alert")).toBeInTheDocument()}},nt=()=>{const[t,o]=i.useState(0);return e.jsxs(y,{alignItems:"start",gap:"12",children:[e.jsx(k,{textStyle:"body.sm",children:"A consumer `onMouseEnter` runs alongside the pause logic, not instead of it. Hover the toast: the count rises and `data-paused` is set."}),e.jsx(l,{tone:"info",duration:6e4,onMouseEnter:()=>o(r=>r+1),children:"Hover me."}),e.jsx(k,{textStyle:"body.sm","data-testid":"enter-count",children:t})]})},Q={name:"Test: consumer hover handler keeps the pause",render:()=>e.jsx(nt,{}),play:async({canvasElement:t})=>{const o=x(t),r=o.getByRole("status");await q.hover(r),await w(r).toHaveAttribute("data-paused","true"),await w(o.getByTestId("enter-count")).toHaveTextContent("1"),await q.unhover(r),await w(r).not.toHaveAttribute("data-paused")}},at=()=>{const t=W();return e.jsxs(y,{alignItems:"start",gap:"12",children:[e.jsx(k,{textStyle:"body.sm",children:"`dismissLabel` given to `useToast` reaches the close control."}),e.jsx(d,{size:"sm",onClick:()=>t.success("Guardado.",{dismissLabel:"Cerrar",duration:6e4}),children:"Queue a Spanish toast"})]})},U={name:"Test: provider forwards dismissLabel",render:()=>e.jsx(_,{children:e.jsx(at,{})}),play:async({canvasElement:t})=>{const o=x(t),r=x(t.ownerDocument.body);await q.click(o.getByRole("button",{name:"Queue a Spanish toast"})),await w(await r.findByRole("button",{name:"Cerrar"})).toBeInTheDocument()}};var $,G,X,Y,J;P.parameters={...P.parameters,docs:{...($=P.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: args => <VStack alignItems="start" gap="12">
      <Toast {...args} />
    </VStack>
}`,...(X=(G=P.parameters)==null?void 0:G.docs)==null?void 0:X.source},description:{story:"Renders the presentation in place, outside the provider stack.",...(J=(Y=P.parameters)==null?void 0:Y.docs)==null?void 0:J.description}}};var ee,te,se;z.parameters={...z.parameters,docs:{...(ee=z.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: 'Every tone',
  render: () => <VStack alignItems="start" gap="12">
      <Toast tone="info">A scheduled export is ready to download.</Toast>
      <Toast tone="success">Work order 10482 was saved.</Toast>
      <Toast tone="warning">Two line items are missing a unit cost.</Toast>
      <Toast tone="danger">Could not save work order 10482.</Toast>
      <Toast tone="neutral">
        Neutral uses the info icon on a neutral surface.
      </Toast>
    </VStack>
}`,...(se=(te=z.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var ne,ae,oe;V.parameters={...V.parameters,docs:{...(ne=V.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(oe=(ae=V.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var re,ie,ce;H.parameters={...H.parameters,docs:{...(re=H.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: 'Dismissible and non-dismissible',
  render: () => <VStack alignItems="start" gap="12">
      <Toast tone="info" dismissible>
        Dismissible: the close control calls \`onDismiss\`.
      </Toast>
      <Toast tone="info" dismissible={false}>
        Not dismissible: this toast can only time out.
      </Toast>
    </VStack>
}`,...(ce=(ie=H.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var le,de,ue;M.parameters={...M.parameters,docs:{...(le=M.parameters)==null?void 0:le.docs,source:{originalSource:`{
  name: 'Ex: live imperative stack',
  render: () => <ToastProvider>
      <LiveControls />
    </ToastProvider>
}`,...(ue=(de=M.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var me,pe,he;F.parameters={...F.parameters,docs:{...(me=F.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(he=(pe=F.parameters)==null?void 0:pe.docs)==null?void 0:he.source}}};var ge,ve,fe;O.parameters={...O.parameters,docs:{...(ge=O.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(fe=(ve=O.parameters)==null?void 0:ve.docs)==null?void 0:fe.source}}};var we,ye,Te;Q.parameters={...Q.parameters,docs:{...(we=Q.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(Te=(ye=Q.parameters)==null?void 0:ye.docs)==null?void 0:Te.source}}};var be,xe,ke;U.parameters={...U.parameters,docs:{...(be=U.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(ke=(xe=U.parameters)==null?void 0:xe.docs)==null?void 0:ke.source}}};const bt=["Default","Tones","Actions","Dismissible","ExLiveStack","StackCap","DangerNeverAutoDismisses","ConsumerHandlersKeepPause","LocalizedDismissLabel"];export{V as Actions,Q as ConsumerHandlersKeepPause,O as DangerNeverAutoDismisses,P as Default,H as Dismissible,M as ExLiveStack,U as LocalizedDismissLabel,F as StackCap,z as Tones,bt as __namedExportsOrder,Tt as default};
