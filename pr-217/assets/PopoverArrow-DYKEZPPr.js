import{m as ee,e as oe,f as ne,g as te,h as re,r as a,$ as se,a0 as ae,ae as ie,ak as le,af as ce,a5 as pe,a6 as de,a7 as me,aa as ue,j as l,ad as fe,s as x,Z as O,c as v,B as g,t as A,d as he,ah as L,a2 as ve,a3 as ge,a4 as Pe,a as ye}from"./iframe-BvJoXhmf.js";import{u as we}from"./FloatingLayerContext-DFN9Msr1.js";import{u as xe}from"./useLocale-DutHUdMj.js";import{I as be}from"./IconButton-CuDsG0dm.js";const U={size:"md",interaction:"rich",layer:"elevated"},Te=[],Ce=[["content","popover__content"],["header","popover__header"],["title","popover__title"],["titleIcon","popover__titleIcon"],["description","popover__description"],["body","popover__body"],["media","popover__media"],["footer","popover__footer"],["close","popover__close"],["trigger","popover__trigger"]],Re=Ce.map(([e,o])=>[e,te(o,U,re(Te,e))]),_e=ee((e={})=>Object.fromEntries(Re.map(([o,n])=>[o,n.recipeFn(e)]))),K=["interaction","layer","size","tone"],Ne=e=>({...U,...oe(e)}),b=Object.assign(_e,{__recipe__:!1,__name__:"popover",raw:e=>e,classNameMap:{},variantKeys:K,variantMap:{interaction:["definition","rich"],layer:["elevated","modalFloating"],size:["sm","md","lg"],tone:["note","tip","warning","important","caution"]},splitVariantProps(e){return ne(e,K)},getVariantProps:Ne}),G=a.createContext(null),R=()=>{const e=a.useContext(G);if(!e)throw new Error("Popover components must be used within a <Popover> root");return e},ke=e=>{const{children:o,interaction:n="rich",open:r,defaultOpen:s=!1,onOpenChange:t,placement:c="bottom",offset:i=8,showArrow:u=!0,size:p="md",tone:f}=e,[m,w]=a.useState(s),P=r!==void 0,y=P?r:m,T=a.useCallback(h=>{P||w(h),t==null||t(h)},[P,t]),k=a.useRef(null),[I,q]=a.useState(),[F,B]=a.useState(),[_,j]=a.useState(!1),N=n==="definition",{refs:d,elements:E,floatingStyles:S,context:C}=se({open:y,onOpenChange:T,placement:c,middleware:ae({offset:i,flipOptions:{fallbackAxisSideDirection:"end"},extras:[fe({element:k})]})}),$=ie(C,{enabled:N,move:!1,delay:{open:200,close:150},handleClose:le({requireIntent:!1})}),Z=ce(C,{enabled:N}),J=pe(C,{enabled:!N}),Q=de(C),X=me(C,{role:N?"tooltip":"dialog"}),{domReference:H}=E,{setReference:z}=d;a.useEffect(()=>{!_&&H&&z(H)},[_,H,z]);const{getReferenceProps:M,getFloatingProps:V}=ue([$,Z,J,Q,X]),W=a.useCallback(h=>{d.setReference(h)},[d]),D=a.useCallback(h=>{d.setFloating(h)},[d]),Y=a.useMemo(()=>({open:y,setOpen:T,interaction:n,placement:c,offset:i,showArrow:u,size:p,tone:f,floatingContext:C,refs:{setReference:d.setReference,setFloating:d.setFloating,setPositionReference:d.setPositionReference},floatingStyles:S,domReference:E.domReference,getReferenceProps:h=>M(h),getFloatingProps:h=>V(h),arrowRef:k,titleId:I,setTitleId:q,descriptionId:F,setDescriptionId:B,hasAnchor:_,setHasAnchor:j,setReferenceRef:W,setFloatingRef:D}),[y,T,n,c,i,u,p,f,C,d.setReference,d.setFloating,d.setPositionReference,S,E.domReference,M,V,I,F,_,W,D]);return l.jsx(G.Provider,{value:Y,children:o})};ke.__docgenInfo={description:`Anchors multipurpose floating content for handbook notes, definitions, and
rich callouts.

Compose with \`PopoverTrigger\`, optional \`PopoverAnchor\`, and
\`PopoverContent\` (plus Header/Title/Description/Body/Media/Footer/Close).
Use \`interaction="definition"\` for hover/focus plain notes without a focus
trap (content must be non-interactive), and \`interaction="rich"\` for
click-to-open interactive content with focus trapping.

@example
\`\`\`tsx
<Popover interaction="definition" tone="warning">
  <PopoverTrigger>cycle time</PopoverTrigger>
  <PopoverContent>
    <PopoverHeader>
      <PopoverTitle>Warning</PopoverTitle>
    </PopoverHeader>
    <PopoverBody>
      Cycle time includes queue and wait, not only active work.
    </PopoverBody>
  </PopoverContent>
</Popover>
\`\`\``,methods:[],displayName:"Popover",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Compound parts such as Trigger and Content."},interaction:{required:!1,tsType:{name:"union",raw:"'definition' | 'rich'",elements:[{name:"literal",value:"'definition'"},{name:"literal",value:"'rich'"}]},description:"How the popover opens and manages focus.\n- `definition`: hover + focus, no focus trap (handbook definitions).\n  Keyboard users cannot move focus into the content, so it must be\n  non-interactive: no links, buttons, or `PopoverClose`.\n- `rich`: click open, focus trap + restore focus (interactive content)\n@default 'rich'"},open:{required:!1,tsType:{name:"boolean"},description:"Controlled open state."},defaultOpen:{required:!1,tsType:{name:"boolean"},description:`Initial open state when uncontrolled.
@default false`},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:"Called when open state should change."},placement:{required:!1,tsType:{name:"Placement"},description:`Preferred placement relative to the reference. The overlay can flip when it does not fit.
@default 'bottom'`},offset:{required:!1,tsType:{name:"number"},description:`Gap between reference and content, in pixels.
@default 8`},showArrow:{required:!1,tsType:{name:"boolean"},description:`Shows the arrow pointing at the reference.
@default true`},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Content panel size. Wider than Tooltip (`240`).\n@default 'md'"},tone:{required:!1,tsType:{name:"union",raw:"'note' | 'tip' | 'warning' | 'important' | 'caution'",elements:[{name:"literal",value:"'note'"},{name:"literal",value:"'tip'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'important'"},{name:"literal",value:"'caution'"}]},description:'Visual tone for handbook-style notes. Affects surface and border only —\nnever maps to `role="alert"`.'}}};const Ie=e=>{const{children:o,ref:n,...r}=e,[s,t]=x(r),{interaction:c,getReferenceProps:i,setReferenceRef:u}=R(),p=b({interaction:c}),f=a.Children.toArray(o),m=f.length===1?f[0]:null,w=a.isValidElement(m)?m.props.ref:void 0,P=O([w,n,u]);if(a.isValidElement(m)){const y=m,T=i({...t,...y.props});return a.cloneElement(y,{...T,ref:P,className:v(y.props.className,s)||void 0})}return c==="rich"?l.jsx(g,{as:"button",type:"button",ref:P,className:v(p.trigger,s),...i(t),children:o}):l.jsx(g,{as:"span",ref:P,tabIndex:0,className:v(p.trigger,s),...i(t),children:o})};Ie.__docgenInfo={description:"Marks the control that opens a parent {@link Popover}.\n\nPass plain text for an inline dashed-underline phrase: it renders a\n`button` in `rich` mode and a focusable `span` in `definition` mode. Pass a\nsingle element (such as `Button`) to use it as the trigger as-is; it must be\nfocusable, and for `rich` it should be a button so screen readers announce\nit as one.\n\n@example\n```tsx\n<PopoverTrigger>cycle time</PopoverTrigger>\n```",methods:[],displayName:"PopoverTrigger",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Trigger content. A single React element receives refs and interaction\nprops via `cloneElement` and keeps its own styles. Otherwise content is\nwrapped in an inline `button` (`rich`) or focusable `span` (`definition`)."}}};const Fe=e=>{const{children:o,ref:n,...r}=e,{refs:s,setHasAnchor:t}=R();a.useEffect(()=>(t(!0),()=>t(!1)),[t]);const c=a.Children.toArray(o),i=c.length===1?c[0]:null,u=a.isValidElement(i)?i.props.ref:void 0,p=O([n,u,s.setPositionReference]);if(a.isValidElement(i)){const f=i;return a.cloneElement(f,{...r,ref:p})}return l.jsx(g,{as:"span",display:"inline",...r,ref:p,children:o})};Fe.__docgenInfo={description:`Optionally separates positioning from the interactive trigger.

When mounted, Floating UI positions the content relative to this element
while \`PopoverTrigger\` still receives hover/focus/click interactions.

@example
\`\`\`tsx
<PopoverAnchor>
  <Box display="inline-block">…</Box>
</PopoverAnchor>
\`\`\``,methods:[],displayName:"PopoverAnchor",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Element used for positioning while Trigger retains interaction props.\nA single React element receives the position ref via `cloneElement`."}}};const Ae=e=>{const{children:o,ref:n,...r}=e,[s,t]=x(r),{open:c,interaction:i,showArrow:u,size:p,tone:f,floatingContext:m,floatingStyles:w,domReference:P,getFloatingProps:y,setFloatingRef:T,arrowRef:k,titleId:I,descriptionId:q}=R(),F=we(),B=O([n,T]),_=b({size:p,tone:f,layer:F}),j=i==="rich";if(!c)return null;const N=A.var("colors.surface.overlay"),d=l.jsxs(g,{...he("PopoverContent"),ref:B,className:v(_.content,s),"aria-labelledby":I,"aria-describedby":q,...y(t),style:w,children:[o,u&&l.jsx(L,{ref:k,context:m,fill:N,stroke:A.var("colors.border"),strokeWidth:1})]});return l.jsx(ve,{children:l.jsx(ge,{reference:P,children:j?l.jsx(Pe,{context:m,modal:!0,returnFocus:!0,children:d}):d})})};Ae.__docgenInfo={description:`Renders the portalled popover panel with dismiss behavior and optional focus
trapping.

For \`interaction="rich"\`, focus is trapped inside the panel and restored to
the trigger on close. For \`interaction="definition"\`, there is no focus trap
and keyboard users cannot reach the content, so keep it non-interactive.
Escape and outside press dismiss the panel. Tone is visual only and never
sets \`role="alert"\`.

@example
\`\`\`tsx
<PopoverContent>
  <PopoverHeader><PopoverTitle>Tip</PopoverTitle></PopoverHeader>
  <PopoverBody>Save often while editing.</PopoverBody>
</PopoverContent>
\`\`\``,methods:[],displayName:"PopoverContent",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Popover panel content composed from Header, Body, Footer, and related parts."}}};const qe=e=>{const{labels:o}=xe(),{altText:n=o.closePopover,onClick:r,...s}=e,[t,c]=x(s),{setOpen:i}=R(),u=b();return l.jsx(be,{variant:"ghost",size:"sm",iconName:"x",altText:n,"aria-label":n,className:v(u.close,t),onClick:p=>{r==null||r(p),i(!1)},...c})};qe.__docgenInfo={description:`Optional control that closes the parent {@link Popover}.

Escape and outside press already dismiss the panel; use this when a visible
close affordance is needed (typically in rich notes).

@example
\`\`\`tsx
<PopoverHeader>
  <PopoverTitle>Tip</PopoverTitle>
  <PopoverClose />
</PopoverHeader>
\`\`\``,methods:[],displayName:"PopoverClose",props:{altText:{required:!1,tsType:{name:"string"},description:'Accessible label for the close control. @default "Close"'},onClick:{required:!1,tsType:{name:"intersection['onClick']",raw:"IconButtonProps['onClick']"},description:"Called after the popover requests close."}}};const Be=e=>{const{children:o,...n}=e,[r,s]=x(n),t=b();return l.jsx(g,{className:v(t.header,r),...s,children:o})};Be.__docgenInfo={description:`Renders the optional header region of a parent {@link PopoverContent}.

@example
\`\`\`tsx
<PopoverHeader>
  <PopoverTitle>Warning</PopoverTitle>
  <PopoverClose />
</PopoverHeader>
\`\`\``,methods:[],displayName:"PopoverHeader",props:{children:{required:!1,tsType:{name:"ReactNode"},description:"Header content, typically `PopoverTitle` and optional `PopoverClose`."}}};const je={note:"note",tip:"info",warning:"warning",important:"flag",caution:"warning"},Ee={note:"icon.subtle",tip:"icon.info",warning:"icon.warning",important:"icon.danger",caution:"icon.warning"},He=e=>{const{children:o,showToneIcon:n=!0,id:r,...s}=e,[t,c]=x(s),{tone:i,size:u,setTitleId:p}=R(),f=a.useId(),m=r??f,w=b({size:u,tone:i});return a.useEffect(()=>(p(m),()=>p(void 0)),[p,m]),l.jsxs(g,{as:"div",id:m,className:v(w.title,t),...c,children:[n&&i&&l.jsx(g,{className:w.titleIcon,"aria-hidden":"true",children:l.jsx(ye,{name:je[i],size:"16",fill:Ee[i]})}),o]})};He.__docgenInfo={description:"Renders the popover title and wires it to `aria-labelledby` on the panel.\n\nWhen the parent sets a `tone`, an optional leading icon matches that tone.\nTone remains visual only and does not change live-region roles.\n\n@example\n```tsx\n<PopoverTitle>Warning</PopoverTitle>\n```",methods:[],displayName:"PopoverTitle",props:{children:{required:!0,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:"Title content. Strings render as text; nodes render as-is."},showToneIcon:{required:!1,tsType:{name:"boolean"},description:"Shows the tone icon when the parent Popover has a `tone`.\n@default true"}}};const Oe=e=>{const{children:o,...n}=e,[r,s]=x(n),{size:t}=R(),c=b({size:t});return l.jsx(g,{className:v(c.body,r),...s,children:o})};Oe.__docgenInfo={description:`Renders the main content region of a {@link PopoverContent}.

@example
\`\`\`tsx
<PopoverBody>
  Cycle time includes queue and wait, not only active work.
</PopoverBody>
\`\`\``,methods:[],displayName:"PopoverBody",props:{children:{required:!0,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:"Body content. Strings render as text; nodes may include links and controls."}}};const Se=e=>{const{children:o,...n}=e,[r,s]=x(n),t=b();return l.jsx(g,{className:v(t.media,r),...s,children:o})};Se.__docgenInfo={description:`Renders an optional media region inside {@link PopoverContent}.

Place images or other illustrative content here. Keep interactive controls
in Body or Footer so media stays presentational.

@example
\`\`\`tsx
<PopoverMedia>
  <img src="/diagram.png" alt="Cycle time diagram" />
</PopoverMedia>
\`\`\``,methods:[],displayName:"PopoverMedia",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Media content such as an image or illustration."}}};const ze=e=>{const{children:o,...n}=e,[r,s]=x(n),t=b();return l.jsx(g,{className:v(t.footer,r),...s,children:o})};ze.__docgenInfo={description:`Renders the optional footer/actions region of a {@link PopoverContent}.

@example
\`\`\`tsx
<PopoverFooter>
  <Button size="sm">Got it</Button>
</PopoverFooter>
\`\`\``,methods:[],displayName:"PopoverFooter",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Footer content, typically actions such as `Button` or `Link`."}}};const Me=e=>{const{fill:o,stroke:n}=e,{floatingContext:r,arrowRef:s}=R();return l.jsx(L,{ref:s,context:r,fill:o??A.var("colors.surface.overlay"),stroke:n??A.var("colors.border"),strokeWidth:1})};Me.__docgenInfo={description:`Optional explicit arrow. Content already renders an arrow when
\`showArrow\` is true on the root; use this only when customizing fill/stroke
and setting \`showArrow={false}\` on the root.

@example
\`\`\`tsx
<Popover showArrow={false}>
  <PopoverContent>
    <PopoverBody>…</PopoverBody>
    <PopoverArrow />
  </PopoverContent>
</Popover>
\`\`\``,methods:[],displayName:"PopoverArrow",props:{fill:{required:!1,tsType:{name:"string"},description:"Override fill color token variable."},stroke:{required:!1,tsType:{name:"string"},description:"Override stroke color token variable."}}};export{ke as P,Ie as a,Ae as b,Be as c,He as d,qe as e,Oe as f,Me as g,Se as h,ze as i,Fe as j,b as p};
