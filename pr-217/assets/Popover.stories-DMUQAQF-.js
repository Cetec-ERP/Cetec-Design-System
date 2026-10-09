import{m as an,e as cn,f as ln,g as dn,h as pn,r as i,Y as mn,Z as un,ae as hn,af as gn,ag as fn,a0 as vn,a1 as yn,a2 as xn,a5 as wn,j as e,av as Pn,ac as oe,B as p,s as C,c as v,aa as le,d as bn,aw as Tn,a6 as Rn,a7 as Bn,a8 as Cn,a as jn,T as Q}from"./iframe-CBV8VWL6.js";import{B as Y}from"./Button-D8InNUjf.js";import{L as kn}from"./Link-DRvwvFa9.js";import{M as En,a as Nn,b as _n}from"./ModalWrapper-CzAY7ii7.js";import{I as An}from"./IconButton-D2kH0oqt.js";import{u as Fn}from"./FloatingLayerContext-BVCcQ74R.js";import"./preload-helper-C7uIy2vd.js";import"./Spinner-CvVqlUCj.js";import"./FieldContext-CTOECjAu.js";import"./mq.hook-CTf3VRgk.js";import"./breakpoints-DU_5_Zhy.js";import"./Heading-HvBbfBnB.js";const Ge={size:"md",interaction:"rich",layer:"elevated"},In=[],Hn=[["content","popover__content"],["header","popover__header"],["title","popover__title"],["titleIcon","popover__titleIcon"],["description","popover__description"],["body","popover__body"],["media","popover__media"],["footer","popover__footer"],["close","popover__close"],["trigger","popover__trigger"]],qn=Hn.map(([n,o])=>[n,dn(o,Ge,pn(In,n))]),Sn=an((n={})=>Object.fromEntries(qn.map(([o,t])=>[o,t.recipeFn(n)]))),de=["interaction","layer","size","tone"],zn=n=>({...Ge,...cn(n)}),j=Object.assign(Sn,{__recipe__:!1,__name__:"popover",raw:n=>n,classNameMap:{},variantKeys:de,variantMap:{interaction:["definition","rich"],layer:["elevated","modalFloating"],size:["sm","md","lg"],tone:["note","tip","warning","important","caution"]},splitVariantProps(n){return ln(n,de)},getVariantProps:zn}),Je=i.createContext(null),H=()=>{const n=i.useContext(Je);if(!n)throw new Error("Popover components must be used within a <Popover> root");return n},R=n=>{const{children:o,interaction:t="rich",open:r,defaultOpen:s=!1,onOpenChange:a,placement:c="bottom",offset:l=8,showArrow:g=!0,size:u="md",tone:y}=n,[h,B]=i.useState(s),x=r!==void 0,w=x?r:h,_=i.useCallback(f=>{x||B(f),a==null||a(f)},[x,a]),L=i.useRef(null),[U,Z]=i.useState(),[K,$]=i.useState(),[F,X]=i.useState(!1),I=t==="definition",{refs:m,elements:ee,floatingStyles:te,context:A}=mn({open:w,onOpenChange:_,placement:c,middleware:un({offset:l,extras:[Pn({element:L})]})}),en=hn(A,{enabled:I,move:!1,delay:{open:200,close:150},handleClose:gn({requireIntent:!1})}),nn=fn(A,{enabled:I}),on=vn(A,{enabled:!I}),tn=yn(A),rn=xn(A,{role:I?"tooltip":"dialog"}),{domReference:ne}=ee,{setReference:re}=m;i.useEffect(()=>{!F&&ne&&re(ne)},[F,ne,re]);const{getReferenceProps:se,getFloatingProps:ae}=wn([en,nn,on,tn,rn]),ie=i.useCallback(f=>{m.setReference(f)},[m]),ce=i.useCallback(f=>{m.setFloating(f)},[m]),sn=i.useMemo(()=>({open:w,setOpen:_,interaction:t,placement:c,offset:l,showArrow:g,size:u,tone:y,floatingContext:A,refs:{setReference:m.setReference,setFloating:m.setFloating,setPositionReference:m.setPositionReference},floatingStyles:te,domReference:ee.domReference,getReferenceProps:f=>se(f),getFloatingProps:f=>ae(f),arrowRef:L,titleId:U,setTitleId:Z,descriptionId:K,setDescriptionId:$,hasAnchor:F,setHasAnchor:X,setReferenceRef:ie,setFloatingRef:ce}),[w,_,t,c,l,g,u,y,A,m.setReference,m.setFloating,m.setPositionReference,te,ee.domReference,se,ae,U,K,F,ie,ce]);return e.jsx(Je.Provider,{value:sn,children:o})};R.__docgenInfo={description:`Anchors multipurpose floating content for handbook notes, definitions, and
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
@default true`},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Content panel size. Wider than Tooltip (`240`).\n@default 'md'"},tone:{required:!1,tsType:{name:"union",raw:"'note' | 'tip' | 'warning' | 'important' | 'caution'",elements:[{name:"literal",value:"'note'"},{name:"literal",value:"'tip'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'important'"},{name:"literal",value:"'caution'"}]},description:'Visual tone for handbook-style notes. Affects surface and border only —\nnever maps to `role="alert"`.'}}};const Qe=n=>{const{children:o,...t}=n,{refs:r,setHasAnchor:s}=H();i.useEffect(()=>(s(!0),()=>s(!1)),[s]);const a=i.Children.toArray(o),c=a.length===1?a[0]:null,l=i.isValidElement(c)?c.props.ref:void 0,g=oe([l,r.setPositionReference]);if(i.isValidElement(c)){const u=c;return i.cloneElement(u,{...t,ref:g})}return e.jsx(p,{as:"span",display:"inline",ref:r.setPositionReference,...t,children:o})};Qe.__docgenInfo={description:`Optionally separates positioning from the interactive trigger.

When mounted, Floating UI positions the content relative to this element
while \`PopoverTrigger\` still receives hover/focus/click interactions.

@example
\`\`\`tsx
<PopoverAnchor>
  <Box display="inline-block">…</Box>
</PopoverAnchor>
\`\`\``,methods:[],displayName:"PopoverAnchor",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Element used for positioning while Trigger retains interaction props.\nA single React element receives the position ref via `cloneElement`."}}};const k=n=>{const{children:o,...t}=n,[r,s]=C(t),{size:a}=H(),c=j({size:a});return e.jsx(p,{className:v(c.body,r),...s,children:o})};k.__docgenInfo={description:`Renders the main content region of a {@link PopoverContent}.

@example
\`\`\`tsx
<PopoverBody>
  Cycle time includes queue and wait, not only active work.
</PopoverBody>
\`\`\``,methods:[],displayName:"PopoverBody",props:{children:{required:!0,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:"Body content. Strings render as text; nodes may include links and controls."}}};const Ye=n=>{const{altText:o="Close",onClick:t,...r}=n,[s,a]=C(r),{setOpen:c}=H(),l=j();return e.jsx(An,{variant:"ghost",size:"sm",iconName:"x",altText:o,"aria-label":o,className:v(l.close,s),onClick:g=>{t==null||t(g),c(!1)},...a})};Ye.__docgenInfo={description:`Optional control that closes the parent {@link Popover}.

Escape and outside press already dismiss the panel; use this when a visible
close affordance is needed (typically in rich notes).

@example
\`\`\`tsx
<PopoverHeader>
  <PopoverTitle>Tip</PopoverTitle>
  <PopoverClose />
</PopoverHeader>
\`\`\``,methods:[],displayName:"PopoverClose",props:{altText:{required:!1,tsType:{name:"string"},description:'Accessible label for the close control. @default "Close"'},onClick:{required:!1,tsType:{name:"intersection['onClick']",raw:"IconButtonProps['onClick']"},description:"Called after the popover requests close."}}};const E=n=>{const{children:o,ref:t,...r}=n,[s,a]=C(r),{open:c,interaction:l,showArrow:g,size:u,tone:y,floatingContext:h,floatingStyles:B,domReference:x,getFloatingProps:w,setFloatingRef:_,arrowRef:L,titleId:U,descriptionId:Z}=H(),K=Fn(),$=oe([t,_]),F=j({size:u,tone:y,layer:K}),X=l==="rich";if(!c)return null;const I=le.var("colors.surface.overlay"),m=e.jsxs(p,{...bn("PopoverContent"),ref:$,className:v(F.content,s),"aria-labelledby":U,"aria-describedby":Z,...w(a),style:B,children:[o,g&&e.jsx(Tn,{ref:L,context:h,fill:I,stroke:le.var("colors.border"),strokeWidth:1})]});return e.jsx(Rn,{children:e.jsx(Bn,{reference:x,children:X?e.jsx(Cn,{context:h,modal:!0,returnFocus:!0,children:m}):m})})};E.__docgenInfo={description:`Renders the portalled popover panel with dismiss behavior and optional focus
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
\`\`\``,methods:[],displayName:"PopoverContent",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Popover panel content composed from Header, Body, Footer, and related parts."}}};const Ze=n=>{const{children:o,...t}=n,[r,s]=C(t),a=j();return e.jsx(p,{className:v(a.footer,r),...s,children:o})};Ze.__docgenInfo={description:`Renders the optional footer/actions region of a {@link PopoverContent}.

@example
\`\`\`tsx
<PopoverFooter>
  <Button size="sm">Got it</Button>
</PopoverFooter>
\`\`\``,methods:[],displayName:"PopoverFooter",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Footer content, typically actions such as `Button` or `Link`."}}};const q=n=>{const{children:o,...t}=n,[r,s]=C(t),a=j();return e.jsx(p,{className:v(a.header,r),...s,children:o})};q.__docgenInfo={description:`Renders the optional header region of a parent {@link PopoverContent}.

@example
\`\`\`tsx
<PopoverHeader>
  <PopoverTitle>Warning</PopoverTitle>
  <PopoverClose />
</PopoverHeader>
\`\`\``,methods:[],displayName:"PopoverHeader",props:{children:{required:!1,tsType:{name:"ReactNode"},description:"Header content, typically `PopoverTitle` and optional `PopoverClose`."}}};const $e=n=>{const{children:o,...t}=n,[r,s]=C(t),a=j();return e.jsx(p,{className:v(a.media,r),...s,children:o})};$e.__docgenInfo={description:`Renders an optional media region inside {@link PopoverContent}.

Place images or other illustrative content here. Keep interactive controls
in Body or Footer so media stays presentational.

@example
\`\`\`tsx
<PopoverMedia>
  <img src="/diagram.png" alt="Cycle time diagram" />
</PopoverMedia>
\`\`\``,methods:[],displayName:"PopoverMedia",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Media content such as an image or illustration."}}};const Dn={note:"note",tip:"info",warning:"warning",important:"flag",caution:"warning"},On={note:"icon.subtle",tip:"icon.info",warning:"icon.warning",important:"icon.danger",caution:"icon.warning"},S=n=>{const{children:o,showToneIcon:t=!0,id:r,...s}=n,[a,c]=C(s),{tone:l,size:g,setTitleId:u}=H(),y=i.useId(),h=r??y,B=j({size:g,tone:l});return i.useEffect(()=>(u(h),()=>u(void 0)),[u,h]),e.jsxs(p,{as:"div",id:h,className:v(B.title,a),...c,children:[t&&l&&e.jsx(p,{className:B.titleIcon,"aria-hidden":"true",children:e.jsx(jn,{name:Dn[l],size:"16",fill:On[l]})}),o]})};S.__docgenInfo={description:"Renders the popover title and wires it to `aria-labelledby` on the panel.\n\nWhen the parent sets a `tone`, an optional leading icon matches that tone.\nTone remains visual only and does not change live-region roles.\n\n@example\n```tsx\n<PopoverTitle>Warning</PopoverTitle>\n```",methods:[],displayName:"PopoverTitle",props:{children:{required:!0,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:"Title content. Strings render as text; nodes render as-is."},showToneIcon:{required:!1,tsType:{name:"boolean"},description:"Shows the tone icon when the parent Popover has a `tone`.\n@default true"}}};const N=n=>{const{children:o,ref:t,...r}=n,[s,a]=C(r),{interaction:c,getReferenceProps:l,setReferenceRef:g}=H(),u=j({interaction:c}),y=i.Children.toArray(o),h=y.length===1?y[0]:null,B=i.isValidElement(h)?h.props.ref:void 0,x=oe([B,t,g]);if(i.isValidElement(h)){const w=h,_=l({...a,...w.props});return i.cloneElement(w,{..._,ref:x,className:v(w.props.className,s)||void 0})}return c==="rich"?e.jsx(p,{as:"button",type:"button",ref:x,className:v(u.trigger,s),...l(a),children:o}):e.jsx(p,{as:"span",ref:x,tabIndex:0,className:v(u.trigger,s),...l(a),children:o})};N.__docgenInfo={description:"Marks the control that opens a parent {@link Popover}.\n\nPass plain text for an inline dashed-underline phrase: it renders a\n`button` in `rich` mode and a focusable `span` in `definition` mode. Pass a\nsingle element (such as `Button`) to use it as the trigger as-is; it must be\nfocusable, and for `rich` it should be a button so screen readers announce\nit as one.\n\n@example\n```tsx\n<PopoverTrigger>cycle time</PopoverTrigger>\n```",methods:[],displayName:"PopoverTrigger",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Trigger content. A single React element receives refs and interaction\nprops via `cloneElement` and keeps its own styles. Otherwise content is\nwrapped in an inline `button` (`rich`) or focusable `span` (`definition`)."}}};const{expect:d,userEvent:P,waitFor:b,within:T}=__STORYBOOK_MODULE_TEST__,no={title:"Components/Popover",component:R,parameters:{layout:"centered"},args:{children:null,interaction:"rich",size:"md",showArrow:!0,placement:"bottom"},argTypes:{interaction:{control:"select",options:["definition","rich"]},size:{control:"select",options:["sm","md","lg"]},tone:{control:"select",options:["note","tip","warning","important","caution"]},placement:{control:"select",options:["top","top-start","top-end","bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end"]},showArrow:{control:"boolean"}}},z={name:"Ex: Definition note",args:{interaction:"definition",tone:"warning",size:"md",showArrow:!0,placement:"bottom"},render:({children:n,...o})=>e.jsx(p,{maxW:"prose",p:"32",children:e.jsxs(Q,{children:["Operators should track"," ",e.jsxs(R,{...o,children:[e.jsx(N,{children:"cycle time"}),e.jsxs(E,{children:[e.jsx(q,{children:e.jsx(S,{children:"Warning"})}),e.jsx(k,{children:"Cycle time includes queue and wait, not only active work. Do not treat machine run time as the full cycle when estimating delivery commitments."})]})]})," ","before promising a ship date."]})})},Xe=n=>e.jsx(p,{maxW:"prose",p:"32",children:e.jsxs(Q,{children:["See the"," ",e.jsxs(R,{...n,children:[e.jsx(N,{children:"setup checklist"}),e.jsxs(E,{children:[e.jsxs(q,{children:[e.jsx(S,{children:"Tip"}),e.jsx(Ye,{})]}),e.jsx($e,{children:e.jsx(p,{as:"img",src:"https://placehold.co/320x120/png?text=Setup+diagram",alt:"Setup diagram placeholder",w:"full",display:"block"})}),e.jsx(k,{children:"Confirm tooling, material, and traveler notes before the first piece. Open the full checklist when onboarding a new operator."}),e.jsxs(Ze,{children:[e.jsx(kn,{href:"https://example.com/handbook/setup",external:!0,children:"Open handbook"}),e.jsx(Y,{size:"sm",children:"Got it"})]})]})]})," ","before starting the job."]})}),D={name:"Ex: Rich note",args:{interaction:"rich",tone:"tip",size:"md",showArrow:!0,placement:"bottom"},render:({children:n,...o})=>e.jsx(Xe,{...o})},G={render:()=>e.jsx(p,{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:"80",p:"32",pe:"[22rem]",children:["note","tip","warning","important","caution"].map(n=>e.jsxs(R,{interaction:"definition",tone:n,placement:"right",defaultOpen:!0,children:[e.jsx(N,{children:e.jsx(Y,{size:"sm",children:n})}),e.jsxs(E,{children:[e.jsx(q,{children:e.jsx(S,{children:n.charAt(0).toUpperCase()+n.slice(1)})}),e.jsx(k,{children:'Visual tone only — this never maps to role="alert".'})]})]},n))})},J={render:()=>e.jsx(p,{display:"flex",gap:"48",alignItems:"flex-start",p:"32",children:["sm","md","lg"].map(n=>e.jsxs(R,{interaction:"definition",tone:"note",size:n,defaultOpen:!0,children:[e.jsx(N,{children:e.jsx(Y,{size:"sm",children:n})}),e.jsxs(E,{children:[e.jsx(q,{children:e.jsxs(S,{children:["Size ",n]})}),e.jsx(k,{children:"Popover panels are wider than Tooltip (max 240) so handbook notes can carry multi-line guidance."})]})]},n))})},O={tags:["!dev","!autodocs"],render:()=>e.jsx(Xe,{tone:"tip"}),play:async({canvasElement:n})=>{const o=T(n),t=T(n.ownerDocument.body),r=o.getByRole("button",{name:"setup checklist"});d(r).toHaveAttribute("aria-haspopup","dialog"),d(r).toHaveAttribute("aria-expanded","false"),await P.click(r);const s=await t.findByRole("dialog",{name:"Tip"});d(r).toHaveAttribute("aria-expanded","true"),d(r).toHaveAttribute("aria-controls",s.id),await b(()=>d(s).toContainElement(document.activeElement));for(let a=0;a<5;a+=1)await P.tab(),await b(()=>d(s).toContainElement(document.activeElement));T(s).getByRole("button",{name:"Got it"}).focus(),await P.keyboard("{Escape}"),await b(()=>d(t.queryByRole("dialog",{name:"Tip"})).toBeNull()),await b(()=>d(r).toHaveFocus()),await P.click(r),await t.findByRole("dialog",{name:"Tip"}),await P.click(n.ownerDocument.body),await b(()=>d(t.queryByRole("dialog",{name:"Tip"})).toBeNull())}},M={tags:["!dev","!autodocs"],render:()=>e.jsxs(Q,{children:["Track"," ",e.jsxs(R,{interaction:"definition",children:[e.jsx(N,{children:"cycle time"}),e.jsx(E,{children:e.jsx(k,{children:"Queue and wait time, not only active work."})})]})," ","daily."]}),play:async({canvasElement:n})=>{const o=T(n),t=T(n.ownerDocument.body),r=o.getByText("cycle time");await P.tab(),d(r).toHaveFocus();const s=await t.findByRole("tooltip");d(r).toHaveAttribute("aria-describedby",s.id),d(r).toHaveFocus(),await P.keyboard("{Escape}"),await b(()=>d(t.queryByRole("tooltip")).toBeNull())}},Mn=()=>{const[n,o]=i.useState(!0);return e.jsxs(En,{open:n,onOpenChange:o,"aria-label":"Job notes",children:[e.jsx(Nn,{title:"Job notes"}),e.jsx(_n,{children:e.jsxs(Q,{children:["Review the"," ",e.jsxs(R,{children:[e.jsx(N,{children:"setup checklist"}),e.jsxs(E,{children:[e.jsx(q,{children:e.jsx(S,{children:"Tip"})}),e.jsx(k,{children:"Confirm tooling before the first piece."})]})]})," ","first."]})})]})},W={tags:["!dev","!autodocs"],render:()=>e.jsx(Mn,{}),play:async({canvasElement:n})=>{const o=T(n.ownerDocument.body),t=await o.findByRole("dialog",{name:"Job notes"});await P.click(T(t).getByRole("button",{name:"setup checklist"}));const r=await o.findByRole("dialog",{name:"Tip"});await b(()=>{const s=r.getBoundingClientRect(),a=n.ownerDocument.elementFromPoint(s.left+s.width/2,s.top+s.height/2);d(r).toContainElement(a)})}},Wn=()=>{const[n,o]=i.useState(!0),t=i.useRef(null);return e.jsxs(p,{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:"48",children:[e.jsx(Y,{size:"sm",onClick:()=>o(!1),children:"Remove anchor"}),e.jsxs(R,{interaction:"definition",open:!0,onOpenChange:()=>{},children:[e.jsx(N,{children:"trigger"}),n&&e.jsx(Qe,{children:e.jsx(p,{p:"8",mt:"96",borderWidth:"1",borderColor:"border",children:"anchor"})}),e.jsx(E,{ref:t,"data-testid":"anchor-content",children:e.jsx(k,{children:"Positioned content"})})]})]})},V={tags:["!dev","!autodocs"],render:()=>e.jsx(Wn,{}),play:async({canvasElement:n})=>{const o=T(n),r=await T(n.ownerDocument.body).findByTestId("anchor-content"),s=8,a=c=>Math.abs(r.getBoundingClientRect().top-(c.getBoundingClientRect().bottom+s))<2;await b(()=>d(a(o.getByText("anchor"))).toBe(!0)),await P.click(o.getByRole("button",{name:"Remove anchor"})),d(o.queryByText("anchor")).toBeNull(),await b(()=>d(a(o.getByText("trigger"))).toBe(!0))}},oo=["DefinitionNote","RichNote","Tones","Sizes","A11yRichKeyboard","A11yDefinitionFocus","A11yInsideModal","A11yAnchorUnmount"];var pe,me,ue,he,ge;z.parameters={...z.parameters,docs:{...(pe=z.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  name: 'Ex: Definition note',
  args: {
    interaction: 'definition',
    tone: 'warning',
    size: 'md',
    showArrow: true,
    placement: 'bottom'
  },
  render: ({
    children: _children,
    ...args
  }) => <Box maxW="prose" p="32">
      <Text>
        Operators should track{' '}
        <Popover {...args}>
          <PopoverTrigger>cycle time</PopoverTrigger>
          <PopoverContent>
            <PopoverHeader>
              <PopoverTitle>Warning</PopoverTitle>
            </PopoverHeader>
            <PopoverBody>
              Cycle time includes queue and wait, not only active work. Do not
              treat machine run time as the full cycle when estimating delivery
              commitments.
            </PopoverBody>
          </PopoverContent>
        </Popover>{' '}
        before promising a ship date.
      </Text>
    </Box>
}`,...(ue=(me=z.parameters)==null?void 0:me.docs)==null?void 0:ue.source},description:{story:"Handbook definition note — hover or focus the dashed phrase.",...(ge=(he=z.parameters)==null?void 0:he.docs)==null?void 0:ge.description}}};var fe,ve,ye,xe,we;D.parameters={...D.parameters,docs:{...(fe=D.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  name: 'Ex: Rich note',
  args: {
    interaction: 'rich',
    tone: 'tip',
    size: 'md',
    showArrow: true,
    placement: 'bottom'
  },
  render: ({
    children: _children,
    ...args
  }) => <RichNoteExample {...args} />
}`,...(ye=(ve=D.parameters)==null?void 0:ve.docs)==null?void 0:ye.source},description:{story:"Handbook rich note — click the dashed phrase; focus is trapped.",...(we=(xe=D.parameters)==null?void 0:xe.docs)==null?void 0:we.description}}};var Pe,be,Te;G.parameters={...G.parameters,docs:{...(Pe=G.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  render: () => <Box display="flex" flexDirection="column" alignItems="flex-start" gap="80" p="32" pe="[22rem]">
      {(['note', 'tip', 'warning', 'important', 'caution'] as const).map(tone => <Popover key={tone} interaction="definition" tone={tone} placement="right" defaultOpen>
            <PopoverTrigger>
              <Button size="sm">{tone}</Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverHeader>
                <PopoverTitle>
                  {tone.charAt(0).toUpperCase() + tone.slice(1)}
                </PopoverTitle>
              </PopoverHeader>
              <PopoverBody>
                Visual tone only — this never maps to role=&quot;alert&quot;.
              </PopoverBody>
            </PopoverContent>
          </Popover>)}
    </Box>
}`,...(Te=(be=G.parameters)==null?void 0:be.docs)==null?void 0:Te.source}}};var Re,Be,Ce;J.parameters={...J.parameters,docs:{...(Re=J.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  render: () => <Box display="flex" gap="48" alignItems="flex-start" p="32">
      {(['sm', 'md', 'lg'] as const).map(size => <Popover key={size} interaction="definition" tone="note" size={size} defaultOpen>
          <PopoverTrigger>
            <Button size="sm">{size}</Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverHeader>
              <PopoverTitle>Size {size}</PopoverTitle>
            </PopoverHeader>
            <PopoverBody>
              Popover panels are wider than Tooltip (max 240) so handbook notes
              can carry multi-line guidance.
            </PopoverBody>
          </PopoverContent>
        </Popover>)}
    </Box>
}`,...(Ce=(Be=J.parameters)==null?void 0:Be.docs)==null?void 0:Ce.source}}};var je,ke,Ee,Ne,_e;O.parameters={...O.parameters,docs:{...(je=O.parameters)==null?void 0:je.docs,source:{originalSource:`{
  // Test-only: hidden from the sidebar and docs; open by URL or a test runner.
  tags: ['!dev', '!autodocs'],
  render: () => <RichNoteExample tone="tip" />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    const trigger = canvas.getByRole('button', {
      name: 'setup checklist'
    });
    expect(trigger).toHaveAttribute('aria-haspopup', 'dialog');
    expect(trigger).toHaveAttribute('aria-expanded', 'false');
    await userEvent.click(trigger);
    const dialog = await body.findByRole('dialog', {
      name: 'Tip'
    });
    expect(trigger).toHaveAttribute('aria-expanded', 'true');
    expect(trigger).toHaveAttribute('aria-controls', dialog.id);
    await waitFor(() => expect(dialog).toContainElement(document.activeElement as HTMLElement));

    // Tab cycles through close, link, and button without leaving the panel.
    for (let i = 0; i < 5; i += 1) {
      await userEvent.tab();
      // Past the last control, focus lands on a Floating UI focus guard just
      // outside the panel, which sends it back to the first control a moment
      // later. Wait for it to settle.
      await waitFor(() => expect(dialog).toContainElement(document.activeElement as HTMLElement));
    }

    // The close button's tooltip takes the first Escape; start from a button
    // without one so a single Escape reaches the popover.
    within(dialog).getByRole('button', {
      name: 'Got it'
    }).focus();
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body.queryByRole('dialog', {
      name: 'Tip'
    })).toBeNull());
    await waitFor(() => expect(trigger).toHaveFocus());

    // Outside press closes.
    await userEvent.click(trigger);
    await body.findByRole('dialog', {
      name: 'Tip'
    });
    await userEvent.click(canvasElement.ownerDocument.body);
    await waitFor(() => expect(body.queryByRole('dialog', {
      name: 'Tip'
    })).toBeNull());
  }
}`,...(Ee=(ke=O.parameters)==null?void 0:ke.docs)==null?void 0:Ee.source},description:{story:`Rich mode: opens on click, traps Tab, closes on Escape with focus restored
to the trigger, and closes on outside press.`,...(_e=(Ne=O.parameters)==null?void 0:Ne.docs)==null?void 0:_e.description}}};var Ae,Fe,Ie,He,qe;M.parameters={...M.parameters,docs:{...(Ae=M.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  // Test-only: hidden from the sidebar and docs; open by URL or a test runner.
  tags: ['!dev', '!autodocs'],
  render: () => <Text>
      Track{' '}
      <Popover interaction="definition">
        <PopoverTrigger>cycle time</PopoverTrigger>
        <PopoverContent>
          <PopoverBody>Queue and wait time, not only active work.</PopoverBody>
        </PopoverContent>
      </Popover>{' '}
      daily.
    </Text>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    const trigger = canvas.getByText('cycle time');
    await userEvent.tab();
    expect(trigger).toHaveFocus();
    const tooltip = await body.findByRole('tooltip');
    expect(trigger).toHaveAttribute('aria-describedby', tooltip.id);
    // No focus trap: focus stays on the trigger.
    expect(trigger).toHaveFocus();
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body.queryByRole('tooltip')).toBeNull());
  }
}`,...(Ie=(Fe=M.parameters)==null?void 0:Fe.docs)==null?void 0:Ie.source},description:{story:"Definition mode: opens on keyboard focus, describes the trigger, closes on Escape.",...(qe=(He=M.parameters)==null?void 0:He.docs)==null?void 0:qe.description}}};var Se,ze,De,Oe,Me;W.parameters={...W.parameters,docs:{...(Se=W.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  // Test-only: hidden from the sidebar and docs; open by URL or a test runner.
  tags: ['!dev', '!autodocs'],
  render: () => <PopoverInModal />,
  play: async ({
    canvasElement
  }) => {
    const body = within(canvasElement.ownerDocument.body);
    const modal = await body.findByRole('dialog', {
      name: 'Job notes'
    });
    await userEvent.click(within(modal).getByRole('button', {
      name: 'setup checklist'
    }));
    const popover = await body.findByRole('dialog', {
      name: 'Tip'
    });
    await waitFor(() => {
      const rect = popover.getBoundingClientRect();
      const topmost = canvasElement.ownerDocument.elementFromPoint(rect.left + rect.width / 2, rect.top + rect.height / 2);
      expect(popover).toContainElement(topmost as HTMLElement);
    });
  }
}`,...(De=(ze=W.parameters)==null?void 0:ze.docs)==null?void 0:De.source},description:{story:"Content opened inside a modal paints above the modal and its scrim.",...(Me=(Oe=W.parameters)==null?void 0:Oe.docs)==null?void 0:Me.description}}};var We,Ve,Le,Ue,Ke;V.parameters={...V.parameters,docs:{...(We=V.parameters)==null?void 0:We.docs,source:{originalSource:`{
  // Test-only: hidden from the sidebar and docs; open by URL or a test runner.
  tags: ['!dev', '!autodocs'],
  render: () => <AnchorToggle />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    const content = await body.findByTestId('anchor-content');
    const offset = 8;
    const isBelow = (reference: Element) => Math.abs(content.getBoundingClientRect().top - (reference.getBoundingClientRect().bottom + offset)) < 2;
    await waitFor(() => expect(isBelow(canvas.getByText('anchor'))).toBe(true));
    await userEvent.click(canvas.getByRole('button', {
      name: 'Remove anchor'
    }));
    expect(canvas.queryByText('anchor')).toBeNull();
    await waitFor(() => expect(isBelow(canvas.getByText('trigger'))).toBe(true));
  }
}`,...(Le=(Ve=V.parameters)==null?void 0:Ve.docs)==null?void 0:Le.source},description:{story:`Content follows the anchor while it is mounted and returns to the trigger
when it unmounts. A consumer ref on content does not break positioning.`,...(Ke=(Ue=V.parameters)==null?void 0:Ue.docs)==null?void 0:Ke.description}}};export{V as A11yAnchorUnmount,M as A11yDefinitionFocus,W as A11yInsideModal,O as A11yRichKeyboard,z as DefinitionNote,D as RichNote,J as Sizes,G as Tones,oo as __namedExportsOrder,no as default};
