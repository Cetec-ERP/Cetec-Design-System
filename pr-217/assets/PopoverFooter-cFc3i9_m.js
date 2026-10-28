import{m as X,e as ee,f as oe,g as ne,h as te,r as s,Z as re,$ as se,ae,ak as ie,af as ce,a4 as le,a5 as pe,a6 as de,a9 as me,j as l,ad as ue,s as w,Y as H,c as v,B as g,ab as D,d as fe,ah as he,a1 as ve,a2 as ge,a3 as Pe,a as ye}from"./iframe-DLrLYIhK.js";import{u as xe}from"./FloatingLayerContext-D6RLZ3MJ.js";import{u as we}from"./useLocale-DmFnKSwc.js";import{I as be}from"./IconButton-B_5IpihP.js";const L={size:"md",interaction:"rich",layer:"elevated"},Te=[],Re=[["content","popover__content"],["header","popover__header"],["title","popover__title"],["titleIcon","popover__titleIcon"],["description","popover__description"],["body","popover__body"],["media","popover__media"],["footer","popover__footer"],["close","popover__close"],["trigger","popover__trigger"]],Ce=Re.map(([e,o])=>[e,ne(o,L,te(Te,e))]),_e=X((e={})=>Object.fromEntries(Ce.map(([o,t])=>[o,t.recipeFn(e)]))),K=["interaction","layer","size","tone"],Ne=e=>({...L,...ee(e)}),b=Object.assign(_e,{__recipe__:!1,__name__:"popover",raw:e=>e,classNameMap:{},variantKeys:K,variantMap:{interaction:["definition","rich"],layer:["elevated","modalFloating"],size:["sm","md","lg"],tone:["note","tip","warning","important","caution"]},splitVariantProps(e){return oe(e,K)},getVariantProps:Ne}),U=s.createContext(null),N=()=>{const e=s.useContext(U);if(!e)throw new Error("Popover components must be used within a <Popover> root");return e},Ie=e=>{const{children:o,interaction:t="rich",open:r,defaultOpen:a=!1,onOpenChange:n,placement:c="bottom",offset:i=8,showArrow:u=!0,size:p="md",tone:f}=e,[m,x]=s.useState(a),P=r!==void 0,y=P?r:m,T=s.useCallback(h=>{P||x(h),n==null||n(h)},[P,n]),I=s.useRef(null),[k,q]=s.useState(),[F,B]=s.useState(),[C,j]=s.useState(!1),_=t==="definition",{refs:d,elements:A,floatingStyles:S,context:R}=re({open:y,onOpenChange:T,placement:c,middleware:se({offset:i,extras:[ue({element:I})]})}),G=ae(R,{enabled:_,move:!1,delay:{open:200,close:150},handleClose:ie({requireIntent:!1})}),$=ce(R,{enabled:_}),Y=le(R,{enabled:!_}),Z=pe(R),J=de(R,{role:_?"tooltip":"dialog"}),{domReference:E}=A,{setReference:M}=d;s.useEffect(()=>{!C&&E&&M(E)},[C,E,M]);const{getReferenceProps:O,getFloatingProps:z}=me([G,$,Y,Z,J]),V=s.useCallback(h=>{d.setReference(h)},[d]),W=s.useCallback(h=>{d.setFloating(h)},[d]),Q=s.useMemo(()=>({open:y,setOpen:T,interaction:t,placement:c,offset:i,showArrow:u,size:p,tone:f,floatingContext:R,refs:{setReference:d.setReference,setFloating:d.setFloating,setPositionReference:d.setPositionReference},floatingStyles:S,domReference:A.domReference,getReferenceProps:h=>O(h),getFloatingProps:h=>z(h),arrowRef:I,titleId:k,setTitleId:q,descriptionId:F,setDescriptionId:B,hasAnchor:C,setHasAnchor:j,setReferenceRef:V,setFloatingRef:W}),[y,T,t,c,i,u,p,f,R,d.setReference,d.setFloating,d.setPositionReference,S,A.domReference,O,z,k,F,C,V,W]);return l.jsx(U.Provider,{value:Q,children:o})};Ie.__docgenInfo={description:`Anchors multipurpose floating content for handbook notes, definitions, and
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
@default true`},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Content panel size. Wider than Tooltip (`240`).\n@default 'md'"},tone:{required:!1,tsType:{name:"union",raw:"'note' | 'tip' | 'warning' | 'important' | 'caution'",elements:[{name:"literal",value:"'note'"},{name:"literal",value:"'tip'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'important'"},{name:"literal",value:"'caution'"}]},description:'Visual tone for handbook-style notes. Affects surface and border only —\nnever maps to `role="alert"`.'}}};const ke=e=>{const{children:o,ref:t,...r}=e,[a,n]=w(r),{interaction:c,getReferenceProps:i,setReferenceRef:u}=N(),p=b({interaction:c}),f=s.Children.toArray(o),m=f.length===1?f[0]:null,x=s.isValidElement(m)?m.props.ref:void 0,P=H([x,t,u]);if(s.isValidElement(m)){const y=m,T=i({...n,...y.props});return s.cloneElement(y,{...T,ref:P,className:v(y.props.className,a)||void 0})}return c==="rich"?l.jsx(g,{as:"button",type:"button",ref:P,className:v(p.trigger,a),...i(n),children:o}):l.jsx(g,{as:"span",ref:P,tabIndex:0,className:v(p.trigger,a),...i(n),children:o})};ke.__docgenInfo={description:"Marks the control that opens a parent {@link Popover}.\n\nPass plain text for an inline dashed-underline phrase: it renders a\n`button` in `rich` mode and a focusable `span` in `definition` mode. Pass a\nsingle element (such as `Button`) to use it as the trigger as-is; it must be\nfocusable, and for `rich` it should be a button so screen readers announce\nit as one.\n\n@example\n```tsx\n<PopoverTrigger>cycle time</PopoverTrigger>\n```",methods:[],displayName:"PopoverTrigger",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Trigger content. A single React element receives refs and interaction\nprops via `cloneElement` and keeps its own styles. Otherwise content is\nwrapped in an inline `button` (`rich`) or focusable `span` (`definition`)."}}};const Fe=e=>{const{children:o,ref:t,...r}=e,{refs:a,setHasAnchor:n}=N();s.useEffect(()=>(n(!0),()=>n(!1)),[n]);const c=s.Children.toArray(o),i=c.length===1?c[0]:null,u=s.isValidElement(i)?i.props.ref:void 0,p=H([t,u,a.setPositionReference]);if(s.isValidElement(i)){const f=i;return s.cloneElement(f,{...r,ref:p})}return l.jsx(g,{as:"span",display:"inline",...r,ref:p,children:o})};Fe.__docgenInfo={description:`Optionally separates positioning from the interactive trigger.

When mounted, Floating UI positions the content relative to this element
while \`PopoverTrigger\` still receives hover/focus/click interactions.

@example
\`\`\`tsx
<PopoverAnchor>
  <Box display="inline-block">…</Box>
</PopoverAnchor>
\`\`\``,methods:[],displayName:"PopoverAnchor",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Element used for positioning while Trigger retains interaction props.\nA single React element receives the position ref via `cloneElement`."}}};const qe=e=>{const{children:o,ref:t,...r}=e,[a,n]=w(r),{open:c,interaction:i,showArrow:u,size:p,tone:f,floatingContext:m,floatingStyles:x,domReference:P,getFloatingProps:y,setFloatingRef:T,arrowRef:I,titleId:k,descriptionId:q}=N(),F=xe(),B=H([t,T]),C=b({size:p,tone:f,layer:F}),j=i==="rich";if(!c)return null;const _=D.var("colors.surface.overlay"),d=l.jsxs(g,{...fe("PopoverContent"),ref:B,className:v(C.content,a),"aria-labelledby":k,"aria-describedby":q,...y(n),style:x,children:[o,u&&l.jsx(he,{ref:I,context:m,fill:_,stroke:D.var("colors.border"),strokeWidth:1})]});return l.jsx(ve,{children:l.jsx(ge,{reference:P,children:j?l.jsx(Pe,{context:m,modal:!0,returnFocus:!0,children:d}):d})})};qe.__docgenInfo={description:`Renders the portalled popover panel with dismiss behavior and optional focus
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
\`\`\``,methods:[],displayName:"PopoverContent",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Popover panel content composed from Header, Body, Footer, and related parts."}}};const Be=e=>{const{labels:o}=we(),{altText:t=o.closePopover,onClick:r,...a}=e,[n,c]=w(a),{setOpen:i}=N(),u=b();return l.jsx(be,{variant:"ghost",size:"sm",iconName:"x",altText:t,"aria-label":t,className:v(u.close,n),onClick:p=>{r==null||r(p),i(!1)},...c})};Be.__docgenInfo={description:`Optional control that closes the parent {@link Popover}.

Escape and outside press already dismiss the panel; use this when a visible
close affordance is needed (typically in rich notes).

@example
\`\`\`tsx
<PopoverHeader>
  <PopoverTitle>Tip</PopoverTitle>
  <PopoverClose />
</PopoverHeader>
\`\`\``,methods:[],displayName:"PopoverClose",props:{altText:{required:!1,tsType:{name:"string"},description:'Accessible label for the close control. @default "Close"'},onClick:{required:!1,tsType:{name:"intersection['onClick']",raw:"IconButtonProps['onClick']"},description:"Called after the popover requests close."}}};const je=e=>{const{children:o,...t}=e,[r,a]=w(t),n=b();return l.jsx(g,{className:v(n.header,r),...a,children:o})};je.__docgenInfo={description:`Renders the optional header region of a parent {@link PopoverContent}.

@example
\`\`\`tsx
<PopoverHeader>
  <PopoverTitle>Warning</PopoverTitle>
  <PopoverClose />
</PopoverHeader>
\`\`\``,methods:[],displayName:"PopoverHeader",props:{children:{required:!1,tsType:{name:"ReactNode"},description:"Header content, typically `PopoverTitle` and optional `PopoverClose`."}}};const Ae={note:"note",tip:"info",warning:"warning",important:"flag",caution:"warning"},Ee={note:"icon.subtle",tip:"icon.info",warning:"icon.warning",important:"icon.danger",caution:"icon.warning"},He=e=>{const{children:o,showToneIcon:t=!0,id:r,...a}=e,[n,c]=w(a),{tone:i,size:u,setTitleId:p}=N(),f=s.useId(),m=r??f,x=b({size:u,tone:i});return s.useEffect(()=>(p(m),()=>p(void 0)),[p,m]),l.jsxs(g,{as:"div",id:m,className:v(x.title,n),...c,children:[t&&i&&l.jsx(g,{className:x.titleIcon,"aria-hidden":"true",children:l.jsx(ye,{name:Ae[i],size:"16",fill:Ee[i]})}),o]})};He.__docgenInfo={description:"Renders the popover title and wires it to `aria-labelledby` on the panel.\n\nWhen the parent sets a `tone`, an optional leading icon matches that tone.\nTone remains visual only and does not change live-region roles.\n\n@example\n```tsx\n<PopoverTitle>Warning</PopoverTitle>\n```",methods:[],displayName:"PopoverTitle",props:{children:{required:!0,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:"Title content. Strings render as text; nodes render as-is."},showToneIcon:{required:!1,tsType:{name:"boolean"},description:"Shows the tone icon when the parent Popover has a `tone`.\n@default true"}}};const Se=e=>{const{children:o,...t}=e,[r,a]=w(t),{size:n}=N(),c=b({size:n});return l.jsx(g,{className:v(c.body,r),...a,children:o})};Se.__docgenInfo={description:`Renders the main content region of a {@link PopoverContent}.

@example
\`\`\`tsx
<PopoverBody>
  Cycle time includes queue and wait, not only active work.
</PopoverBody>
\`\`\``,methods:[],displayName:"PopoverBody",props:{children:{required:!0,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:"Body content. Strings render as text; nodes may include links and controls."}}};const Me=e=>{const{children:o,...t}=e,[r,a]=w(t),n=b();return l.jsx(g,{className:v(n.media,r),...a,children:o})};Me.__docgenInfo={description:`Renders an optional media region inside {@link PopoverContent}.

Place images or other illustrative content here. Keep interactive controls
in Body or Footer so media stays presentational.

@example
\`\`\`tsx
<PopoverMedia>
  <img src="/diagram.png" alt="Cycle time diagram" />
</PopoverMedia>
\`\`\``,methods:[],displayName:"PopoverMedia",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Media content such as an image or illustration."}}};const Oe=e=>{const{children:o,...t}=e,[r,a]=w(t),n=b();return l.jsx(g,{className:v(n.footer,r),...a,children:o})};Oe.__docgenInfo={description:`Renders the optional footer/actions region of a {@link PopoverContent}.

@example
\`\`\`tsx
<PopoverFooter>
  <Button size="sm">Got it</Button>
</PopoverFooter>
\`\`\``,methods:[],displayName:"PopoverFooter",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Footer content, typically actions such as `Button` or `Link`."}}};export{Ie as P,ke as a,qe as b,je as c,He as d,Be as e,Se as f,Me as g,Oe as h,Fe as i};
