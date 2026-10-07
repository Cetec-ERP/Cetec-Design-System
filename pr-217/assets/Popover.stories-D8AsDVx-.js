import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as a}from"./index-BKyFwriW.js";import{w as T,e as d,u as P,a as b}from"./index-B_RCCgW0.js";import{m as io,a as ao,b as co,e as lo,g as po,B as p,s as C,c as v,d as mo}from"./dsComponent-BG2jnRr7.js";import{B as Q}from"./Button-Cr4bC5CG.js";import{L as uo}from"./Link-BeoDHhHt.js";import{M as ho,a as go,b as fo}from"./ModalWrapper-CKMxm4Ys.js";import{T as $}from"./Text-Dx5pfw7S.js";import{u as vo,c as yo,m as xo,s as wo,n as Po,b as bo,d as To,e as Ro,h as Bo,E as Co,k as te,t as le,G as jo,F as ko,D as Eo,i as No}from"./Tooltip-D4uS1XIq.js";import{I as Fo}from"./IconButton-C0XKtnhO.js";import{u as Ao}from"./FloatingLayerContext-BryH8O9I.js";import{I as _o}from"./Icon-CrwLKW7B.js";import"./IconConfig-BuieZFlx.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Spinner-PLunUSsK.js";import"./FieldContext-D6URyQos.js";import"./mq.hook-D1974m8s.js";import"./breakpoints-DU_5_Zhy.js";import"./Heading-BfrB7fsj.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";const Ke={size:"md",interaction:"rich",layer:"elevated"},Io=[],Ho=[["content","popover__content"],["header","popover__header"],["title","popover__title"],["titleIcon","popover__titleIcon"],["description","popover__description"],["body","popover__body"],["media","popover__media"],["footer","popover__footer"],["close","popover__close"],["trigger","popover__trigger"]],qo=Ho.map(([o,t])=>[o,lo(t,Ke,po(Io,o))]),So=io((o={})=>Object.fromEntries(qo.map(([t,n])=>[t,n.recipeFn(o)]))),de=["interaction","layer","size","tone"],zo=o=>({...Ke,...ao(o)}),j=Object.assign(So,{__recipe__:!1,__name__:"popover",raw:o=>o,classNameMap:{},variantKeys:de,variantMap:{interaction:["definition","rich"],layer:["elevated","modalFloating"],size:["sm","md","lg"],tone:["note","tip","warning","important","caution"]},splitVariantProps(o){return co(o,de)},getVariantProps:zo}),Je=a.createContext(null),H=()=>{const o=a.useContext(Je);if(!o)throw new Error("Popover components must be used within a <Popover> root");return o},R=o=>{const{children:t,interaction:n="rich",open:r,defaultOpen:s=!1,onOpenChange:i,placement:c="bottom",offset:l=8,showArrow:g=!0,size:u="md",tone:y}=o,[h,B]=a.useState(s),x=r!==void 0,w=x?r:h,F=a.useCallback(f=>{x||B(f),i==null||i(f)},[x,i]),L=a.useRef(null),[U,X]=a.useState(),[G,Y]=a.useState(),[_,Z]=a.useState(!1),I=n==="definition",{refs:m,elements:ee,floatingStyles:ne,context:A}=vo({open:w,onOpenChange:F,placement:c,middleware:yo({offset:l,extras:[Co({element:L})]})}),eo=xo(A,{enabled:I,move:!1,delay:{open:200,close:150},handleClose:wo({requireIntent:!1})}),oo=Po(A,{enabled:I}),to=bo(A,{enabled:!I}),no=To(A),ro=Ro(A,{role:I?"tooltip":"dialog"}),{domReference:oe}=ee,{setReference:re}=m;a.useEffect(()=>{!_&&oe&&re(oe)},[_,oe,re]);const{getReferenceProps:se,getFloatingProps:ie}=Bo([eo,oo,to,no,ro]),ae=a.useCallback(f=>{m.setReference(f)},[m]),ce=a.useCallback(f=>{m.setFloating(f)},[m]),so=a.useMemo(()=>({open:w,setOpen:F,interaction:n,placement:c,offset:l,showArrow:g,size:u,tone:y,floatingContext:A,refs:{setReference:m.setReference,setFloating:m.setFloating,setPositionReference:m.setPositionReference},floatingStyles:ne,domReference:ee.domReference,getReferenceProps:f=>se(f),getFloatingProps:f=>ie(f),arrowRef:L,titleId:U,setTitleId:X,descriptionId:G,setDescriptionId:Y,hasAnchor:_,setHasAnchor:Z,setReferenceRef:ae,setFloatingRef:ce}),[w,F,n,c,l,g,u,y,A,m.setReference,m.setFloating,m.setPositionReference,ne,ee.domReference,se,ie,U,G,_,ae,ce]);return e.jsx(Je.Provider,{value:so,children:t})};R.__docgenInfo={description:`Anchors multipurpose floating content for handbook notes, definitions, and
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
@default true`},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Content panel size. Wider than Tooltip (`240`).\n@default 'md'"},tone:{required:!1,tsType:{name:"union",raw:"'note' | 'tip' | 'warning' | 'important' | 'caution'",elements:[{name:"literal",value:"'note'"},{name:"literal",value:"'tip'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'important'"},{name:"literal",value:"'caution'"}]},description:'Visual tone for handbook-style notes. Affects surface and border only —\nnever maps to `role="alert"`.'}}};const Qe=o=>{const{children:t,...n}=o,{refs:r,setHasAnchor:s}=H();a.useEffect(()=>(s(!0),()=>s(!1)),[s]);const i=a.Children.toArray(t),c=i.length===1?i[0]:null,l=a.isValidElement(c)?c.props.ref:void 0,g=te([l,r.setPositionReference]);if(a.isValidElement(c)){const u=c;return a.cloneElement(u,{...n,ref:g})}return e.jsx(p,{as:"span",display:"inline",ref:r.setPositionReference,...n,children:t})};Qe.__docgenInfo={description:`Optionally separates positioning from the interactive trigger.

When mounted, Floating UI positions the content relative to this element
while \`PopoverTrigger\` still receives hover/focus/click interactions.

@example
\`\`\`tsx
<PopoverAnchor>
  <Box display="inline-block">…</Box>
</PopoverAnchor>
\`\`\``,methods:[],displayName:"PopoverAnchor",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Element used for positioning while Trigger retains interaction props.\nA single React element receives the position ref via `cloneElement`."}}};const k=o=>{const{children:t,...n}=o,[r,s]=C(n),{size:i}=H(),c=j({size:i});return e.jsx(p,{className:v(c.body,r),...s,children:t})};k.__docgenInfo={description:`Renders the main content region of a {@link PopoverContent}.

@example
\`\`\`tsx
<PopoverBody>
  Cycle time includes queue and wait, not only active work.
</PopoverBody>
\`\`\``,methods:[],displayName:"PopoverBody",props:{children:{required:!0,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:"Body content. Strings render as text; nodes may include links and controls."}}};const $e=o=>{const{altText:t="Close",onClick:n,...r}=o,[s,i]=C(r),{setOpen:c}=H(),l=j();return e.jsx(Fo,{variant:"ghost",size:"sm",iconName:"x",altText:t,"aria-label":t,className:v(l.close,s),onClick:g=>{n==null||n(g),c(!1)},...i})};$e.__docgenInfo={description:`Optional control that closes the parent {@link Popover}.

Escape and outside press already dismiss the panel; use this when a visible
close affordance is needed (typically in rich notes).

@example
\`\`\`tsx
<PopoverHeader>
  <PopoverTitle>Tip</PopoverTitle>
  <PopoverClose />
</PopoverHeader>
\`\`\``,methods:[],displayName:"PopoverClose",props:{altText:{required:!1,tsType:{name:"string"},description:'Accessible label for the close control. @default "Close"'},onClick:{required:!1,tsType:{name:"intersection['onClick']",raw:"IconButtonProps['onClick']"},description:"Called after the popover requests close."}}};const E=o=>{const{children:t,ref:n,...r}=o,[s,i]=C(r),{open:c,interaction:l,showArrow:g,size:u,tone:y,floatingContext:h,floatingStyles:B,domReference:x,getFloatingProps:w,setFloatingRef:F,arrowRef:L,titleId:U,descriptionId:X}=H(),G=Ao(),Y=te([n,F]),_=j({size:u,tone:y,layer:G}),Z=l==="rich";if(!c)return null;const I=le.var("colors.surface.overlay"),m=e.jsxs(p,{...mo("PopoverContent"),ref:Y,className:v(_.content,s),"aria-labelledby":U,"aria-describedby":X,...w(i),style:B,children:[t,g&&e.jsx(jo,{ref:L,context:h,fill:I,stroke:le.var("colors.border"),strokeWidth:1})]});return e.jsx(ko,{children:e.jsx(Eo,{reference:x,children:Z?e.jsx(No,{context:h,modal:!0,returnFocus:!0,children:m}):m})})};E.__docgenInfo={description:`Renders the portalled popover panel with dismiss behavior and optional focus
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
\`\`\``,methods:[],displayName:"PopoverContent",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Popover panel content composed from Header, Body, Footer, and related parts."}}};const Xe=o=>{const{children:t,...n}=o,[r,s]=C(n),i=j();return e.jsx(p,{className:v(i.footer,r),...s,children:t})};Xe.__docgenInfo={description:`Renders the optional footer/actions region of a {@link PopoverContent}.

@example
\`\`\`tsx
<PopoverFooter>
  <Button size="sm">Got it</Button>
</PopoverFooter>
\`\`\``,methods:[],displayName:"PopoverFooter",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Footer content, typically actions such as `Button` or `Link`."}}};const q=o=>{const{children:t,...n}=o,[r,s]=C(n),i=j();return e.jsx(p,{className:v(i.header,r),...s,children:t})};q.__docgenInfo={description:`Renders the optional header region of a parent {@link PopoverContent}.

@example
\`\`\`tsx
<PopoverHeader>
  <PopoverTitle>Warning</PopoverTitle>
  <PopoverClose />
</PopoverHeader>
\`\`\``,methods:[],displayName:"PopoverHeader",props:{children:{required:!1,tsType:{name:"ReactNode"},description:"Header content, typically `PopoverTitle` and optional `PopoverClose`."}}};const Ye=o=>{const{children:t,...n}=o,[r,s]=C(n),i=j();return e.jsx(p,{className:v(i.media,r),...s,children:t})};Ye.__docgenInfo={description:`Renders an optional media region inside {@link PopoverContent}.

Place images or other illustrative content here. Keep interactive controls
in Body or Footer so media stays presentational.

@example
\`\`\`tsx
<PopoverMedia>
  <img src="/diagram.png" alt="Cycle time diagram" />
</PopoverMedia>
\`\`\``,methods:[],displayName:"PopoverMedia",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Media content such as an image or illustration."}}};const Do={note:"note",tip:"info",warning:"warning",important:"flag",caution:"warning"},Mo={note:"icon.subtle",tip:"icon.info",warning:"icon.warning",important:"icon.danger",caution:"icon.warning"},S=o=>{const{children:t,showToneIcon:n=!0,id:r,...s}=o,[i,c]=C(s),{tone:l,size:g,setTitleId:u}=H(),y=a.useId(),h=r??y,B=j({size:g,tone:l});return a.useEffect(()=>(u(h),()=>u(void 0)),[u,h]),e.jsxs(p,{as:"div",id:h,className:v(B.title,i),...c,children:[n&&l&&e.jsx(p,{className:B.titleIcon,"aria-hidden":"true",children:e.jsx(_o,{name:Do[l],size:"16",fill:Mo[l]})}),t]})};S.__docgenInfo={description:"Renders the popover title and wires it to `aria-labelledby` on the panel.\n\nWhen the parent sets a `tone`, an optional leading icon matches that tone.\nTone remains visual only and does not change live-region roles.\n\n@example\n```tsx\n<PopoverTitle>Warning</PopoverTitle>\n```",methods:[],displayName:"PopoverTitle",props:{children:{required:!0,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:"Title content. Strings render as text; nodes render as-is."},showToneIcon:{required:!1,tsType:{name:"boolean"},description:"Shows the tone icon when the parent Popover has a `tone`.\n@default true"}}};const N=o=>{const{children:t,ref:n,...r}=o,[s,i]=C(r),{interaction:c,getReferenceProps:l,setReferenceRef:g}=H(),u=j({interaction:c}),y=a.Children.toArray(t),h=y.length===1?y[0]:null,B=a.isValidElement(h)?h.props.ref:void 0,x=te([B,n,g]);if(a.isValidElement(h)){const w=h,F=l({...i,...w.props});return a.cloneElement(w,{...F,ref:x,className:v(w.props.className,s)||void 0})}return c==="rich"?e.jsx(p,{as:"button",type:"button",ref:x,className:v(u.trigger,s),...l(i),children:t}):e.jsx(p,{as:"span",ref:x,tabIndex:0,className:v(u.trigger,s),...l(i),children:t})};N.__docgenInfo={description:"Marks the control that opens a parent {@link Popover}.\n\nPass plain text for an inline dashed-underline phrase: it renders a\n`button` in `rich` mode and a focusable `span` in `definition` mode. Pass a\nsingle element (such as `Button`) to use it as the trigger as-is; it must be\nfocusable, and for `rich` it should be a button so screen readers announce\nit as one.\n\n@example\n```tsx\n<PopoverTrigger>cycle time</PopoverTrigger>\n```",methods:[],displayName:"PopoverTrigger",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Trigger content. A single React element receives refs and interaction\nprops via `cloneElement` and keeps its own styles. Otherwise content is\nwrapped in an inline `button` (`rich`) or focusable `span` (`definition`)."}}};const dt={title:"Components/Popover",component:R,parameters:{layout:"centered"},args:{children:null,interaction:"rich",size:"md",showArrow:!0,placement:"bottom"},argTypes:{interaction:{control:"select",options:["definition","rich"]},size:{control:"select",options:["sm","md","lg"]},tone:{control:"select",options:["note","tip","warning","important","caution"]},placement:{control:"select",options:["top","top-start","top-end","bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end"]},showArrow:{control:"boolean"}}},z={name:"Ex: Definition note",args:{interaction:"definition",tone:"warning",size:"md",showArrow:!0,placement:"bottom"},render:({children:o,...t})=>e.jsx(p,{maxW:"prose",p:"32",children:e.jsxs($,{children:["Operators should track"," ",e.jsxs(R,{...t,children:[e.jsx(N,{children:"cycle time"}),e.jsxs(E,{children:[e.jsx(q,{children:e.jsx(S,{children:"Warning"})}),e.jsx(k,{children:"Cycle time includes queue and wait, not only active work. Do not treat machine run time as the full cycle when estimating delivery commitments."})]})]})," ","before promising a ship date."]})})},Ze=o=>e.jsx(p,{maxW:"prose",p:"32",children:e.jsxs($,{children:["See the"," ",e.jsxs(R,{...o,children:[e.jsx(N,{children:"setup checklist"}),e.jsxs(E,{children:[e.jsxs(q,{children:[e.jsx(S,{children:"Tip"}),e.jsx($e,{})]}),e.jsx(Ye,{children:e.jsx(p,{as:"img",src:"https://placehold.co/320x120/png?text=Setup+diagram",alt:"Setup diagram placeholder",w:"full",display:"block"})}),e.jsx(k,{children:"Confirm tooling, material, and traveler notes before the first piece. Open the full checklist when onboarding a new operator."}),e.jsxs(Xe,{children:[e.jsx(uo,{href:"https://example.com/handbook/setup",external:!0,children:"Open handbook"}),e.jsx(Q,{size:"sm",children:"Got it"})]})]})]})," ","before starting the job."]})}),D={name:"Ex: Rich note",args:{interaction:"rich",tone:"tip",size:"md",showArrow:!0,placement:"bottom"},render:({children:o,...t})=>e.jsx(Ze,{...t})},K={render:()=>e.jsx(p,{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:"80",p:"32",pe:"[22rem]",children:["note","tip","warning","important","caution"].map(o=>e.jsxs(R,{interaction:"definition",tone:o,placement:"right",defaultOpen:!0,children:[e.jsx(N,{children:e.jsx(Q,{size:"sm",children:o})}),e.jsxs(E,{children:[e.jsx(q,{children:e.jsx(S,{children:o.charAt(0).toUpperCase()+o.slice(1)})}),e.jsx(k,{children:'Visual tone only — this never maps to role="alert".'})]})]},o))})},J={render:()=>e.jsx(p,{display:"flex",gap:"48",alignItems:"flex-start",p:"32",children:["sm","md","lg"].map(o=>e.jsxs(R,{interaction:"definition",tone:"note",size:o,defaultOpen:!0,children:[e.jsx(N,{children:e.jsx(Q,{size:"sm",children:o})}),e.jsxs(E,{children:[e.jsx(q,{children:e.jsxs(S,{children:["Size ",o]})}),e.jsx(k,{children:"Popover panels are wider than Tooltip (max 240) so handbook notes can carry multi-line guidance."})]})]},o))})},M={tags:["!dev","!autodocs"],render:()=>e.jsx(Ze,{tone:"tip"}),play:async({canvasElement:o})=>{const t=T(o),n=T(o.ownerDocument.body),r=t.getByRole("button",{name:"setup checklist"});d(r).toHaveAttribute("aria-haspopup","dialog"),d(r).toHaveAttribute("aria-expanded","false"),await P.click(r);const s=await n.findByRole("dialog",{name:"Tip"});d(r).toHaveAttribute("aria-expanded","true"),d(r).toHaveAttribute("aria-controls",s.id),await b(()=>d(s).toContainElement(document.activeElement));for(let i=0;i<5;i+=1)await P.tab(),await b(()=>d(s).toContainElement(document.activeElement));T(s).getByRole("button",{name:"Got it"}).focus(),await P.keyboard("{Escape}"),await b(()=>d(n.queryByRole("dialog",{name:"Tip"})).toBeNull()),await b(()=>d(r).toHaveFocus()),await P.click(r),await n.findByRole("dialog",{name:"Tip"}),await P.click(o.ownerDocument.body),await b(()=>d(n.queryByRole("dialog",{name:"Tip"})).toBeNull())}},O={tags:["!dev","!autodocs"],render:()=>e.jsxs($,{children:["Track"," ",e.jsxs(R,{interaction:"definition",children:[e.jsx(N,{children:"cycle time"}),e.jsx(E,{children:e.jsx(k,{children:"Queue and wait time, not only active work."})})]})," ","daily."]}),play:async({canvasElement:o})=>{const t=T(o),n=T(o.ownerDocument.body),r=t.getByText("cycle time");await P.tab(),d(r).toHaveFocus();const s=await n.findByRole("tooltip");d(r).toHaveAttribute("aria-describedby",s.id),d(r).toHaveFocus(),await P.keyboard("{Escape}"),await b(()=>d(n.queryByRole("tooltip")).toBeNull())}},Oo=()=>{const[o,t]=a.useState(!0);return e.jsxs(ho,{open:o,onOpenChange:t,"aria-label":"Job notes",children:[e.jsx(go,{title:"Job notes"}),e.jsx(fo,{children:e.jsxs($,{children:["Review the"," ",e.jsxs(R,{children:[e.jsx(N,{children:"setup checklist"}),e.jsxs(E,{children:[e.jsx(q,{children:e.jsx(S,{children:"Tip"})}),e.jsx(k,{children:"Confirm tooling before the first piece."})]})]})," ","first."]})})]})},W={tags:["!dev","!autodocs"],render:()=>e.jsx(Oo,{}),play:async({canvasElement:o})=>{const t=T(o.ownerDocument.body),n=await t.findByRole("dialog",{name:"Job notes"});await P.click(T(n).getByRole("button",{name:"setup checklist"}));const r=await t.findByRole("dialog",{name:"Tip"});await b(()=>{const s=r.getBoundingClientRect(),i=o.ownerDocument.elementFromPoint(s.left+s.width/2,s.top+s.height/2);d(r).toContainElement(i)})}},Wo=()=>{const[o,t]=a.useState(!0),n=a.useRef(null);return e.jsxs(p,{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:"48",children:[e.jsx(Q,{size:"sm",onClick:()=>t(!1),children:"Remove anchor"}),e.jsxs(R,{interaction:"definition",open:!0,onOpenChange:()=>{},children:[e.jsx(N,{children:"trigger"}),o&&e.jsx(Qe,{children:e.jsx(p,{p:"8",mt:"96",borderWidth:"1",borderColor:"border",children:"anchor"})}),e.jsx(E,{ref:n,"data-testid":"anchor-content",children:e.jsx(k,{children:"Positioned content"})})]})]})},V={tags:["!dev","!autodocs"],render:()=>e.jsx(Wo,{}),play:async({canvasElement:o})=>{const t=T(o),r=await T(o.ownerDocument.body).findByTestId("anchor-content"),s=8,i=c=>Math.abs(r.getBoundingClientRect().top-(c.getBoundingClientRect().bottom+s))<2;await b(()=>d(i(t.getByText("anchor"))).toBe(!0)),await P.click(t.getByRole("button",{name:"Remove anchor"})),d(t.queryByText("anchor")).toBeNull(),await b(()=>d(i(t.getByText("trigger"))).toBe(!0))}};var pe,me,ue,he,ge;z.parameters={...z.parameters,docs:{...(pe=z.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(ye=(ve=D.parameters)==null?void 0:ve.docs)==null?void 0:ye.source},description:{story:"Handbook rich note — click the dashed phrase; focus is trapped.",...(we=(xe=D.parameters)==null?void 0:xe.docs)==null?void 0:we.description}}};var Pe,be,Te;K.parameters={...K.parameters,docs:{...(Pe=K.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
}`,...(Te=(be=K.parameters)==null?void 0:be.docs)==null?void 0:Te.source}}};var Re,Be,Ce;J.parameters={...J.parameters,docs:{...(Re=J.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(Ce=(Be=J.parameters)==null?void 0:Be.docs)==null?void 0:Ce.source}}};var je,ke,Ee,Ne,Fe;M.parameters={...M.parameters,docs:{...(je=M.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
}`,...(Ee=(ke=M.parameters)==null?void 0:ke.docs)==null?void 0:Ee.source},description:{story:`Rich mode: opens on click, traps Tab, closes on Escape with focus restored
to the trigger, and closes on outside press.`,...(Fe=(Ne=M.parameters)==null?void 0:Ne.docs)==null?void 0:Fe.description}}};var Ae,_e,Ie,He,qe;O.parameters={...O.parameters,docs:{...(Ae=O.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...(Ie=(_e=O.parameters)==null?void 0:_e.docs)==null?void 0:Ie.source},description:{story:"Definition mode: opens on keyboard focus, describes the trigger, closes on Escape.",...(qe=(He=O.parameters)==null?void 0:He.docs)==null?void 0:qe.description}}};var Se,ze,De,Me,Oe;W.parameters={...W.parameters,docs:{...(Se=W.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(De=(ze=W.parameters)==null?void 0:ze.docs)==null?void 0:De.source},description:{story:"Content opened inside a modal paints above the modal and its scrim.",...(Oe=(Me=W.parameters)==null?void 0:Me.docs)==null?void 0:Oe.description}}};var We,Ve,Le,Ue,Ge;V.parameters={...V.parameters,docs:{...(We=V.parameters)==null?void 0:We.docs,source:{originalSource:`{
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
when it unmounts. A consumer ref on content does not break positioning.`,...(Ge=(Ue=V.parameters)==null?void 0:Ue.docs)==null?void 0:Ge.description}}};const pt=["DefinitionNote","RichNote","Tones","Sizes","A11yRichKeyboard","A11yDefinitionFocus","A11yInsideModal","A11yAnchorUnmount"];export{V as A11yAnchorUnmount,O as A11yDefinitionFocus,W as A11yInsideModal,M as A11yRichKeyboard,z as DefinitionNote,D as RichNote,J as Sizes,K as Tones,pt as __namedExportsOrder,dt as default};
