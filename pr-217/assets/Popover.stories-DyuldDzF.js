import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{m as _e,a as Ie,b as Ne,e as Be,g as Fe,s as y,B as p,c as x,d as ze}from"./dsComponent-BG2jnRr7.js";import{B as L}from"./Button-Cr4bC5CG.js";import{L as qe}from"./Link-DAhp9Zm4.js";import{T as D}from"./Text-K8GoOPOH.js";import{r as a}from"./index-BKyFwriW.js";import{u as Se,c as He,k as Oe,l as Ae,m as Ee,a as Me,b as We,d as De,g as Ve,C as Ue,t as Z,E as Le,F as Ge,D as Ke,h as $e,o as Je}from"./Tooltip-Bu-QPps_.js";import{I as Qe}from"./IconButton-Cz1pWaSi.js";import{I as Xe}from"./Icon-CrwLKW7B.js";import"./IconConfig-BuieZFlx.js";import"./Spinner-PLunUSsK.js";import"./FieldContext-D6URyQos.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";const ge={size:"md"},Ye=[],Ze=[["content","popover__content"],["header","popover__header"],["title","popover__title"],["titleIcon","popover__titleIcon"],["description","popover__description"],["body","popover__body"],["media","popover__media"],["footer","popover__footer"],["close","popover__close"],["trigger","popover__trigger"]],eo=Ze.map(([o,n])=>[o,Be(n,ge,Fe(Ye,o))]),oo=_e((o={})=>Object.fromEntries(eo.map(([n,r])=>[n,r.recipeFn(o)]))),ee=["size","tone"],no=o=>({...ge,...Ie(o)}),T=Object.assign(oo,{__recipe__:!1,__name__:"popover",raw:o=>o,classNameMap:{},variantKeys:ee,variantMap:{size:["sm","md","lg"],tone:["note","tip","warning","important","caution"]},splitVariantProps(o){return Ne(o,ee)},getVariantProps:no}),Pe=a.createContext(null),N=()=>{const o=a.useContext(Pe);if(!o)throw new Error("Popover components must be used within a <Popover> root");return o},k=o=>{const{children:n,interaction:r="rich",open:s,defaultOpen:i=!1,onOpenChange:t,placement:l="bottom",offset:c=8,showArrow:d=!0,size:m="md",tone:u}=o,[v,h]=a.useState(i),w=s!==void 0,b=w?s:v,P=a.useCallback(g=>{w||h(g),t==null||t(g)},[w,t]),j=a.useRef(null),H=a.useId(),[O,V]=a.useState(),[A,U]=a.useState(),[R,Te]=a.useState(!1),E=r==="definition",{refs:f,elements:K,floatingStyles:$,context:C}=Se({open:b,onOpenChange:P,placement:l,middleware:He({offset:c,extras:[Ue({element:j})]})}),we=Oe(C,{enabled:E,move:!1,delay:{open:200,close:150},handleClose:Ae({requireIntent:!1})}),be=Ee(C,{enabled:E}),Ce=Me(C,{enabled:!E}),je=We(C),ke=De(C,{role:E?"tooltip":"dialog"}),{getReferenceProps:J,getFloatingProps:Q}=Ve([we,be,Ce,je,ke]),X=a.useCallback(g=>{f.setReference(g)},[f]),Y=a.useCallback(g=>{f.setFloating(g)},[f]),Re=a.useMemo(()=>({open:b,setOpen:P,interaction:r,placement:l,offset:c,showArrow:d,size:m,tone:u,floatingContext:C,refs:{setReference:f.setReference,setFloating:f.setFloating,setPositionReference:f.setPositionReference},floatingStyles:$,domReference:K.domReference,getReferenceProps:g=>J(g),getFloatingProps:g=>Q(g),arrowRef:j,contentId:H,titleId:O,setTitleId:V,descriptionId:A,setDescriptionId:U,hasAnchor:R,setHasAnchor:Te,setReferenceRef:X,setFloatingRef:Y}),[b,P,r,l,c,d,m,u,C,f.setReference,f.setFloating,f.setPositionReference,$,K.domReference,J,Q,H,O,A,R,X,Y]);return e.jsx(Pe.Provider,{value:Re,children:n})};k.__docgenInfo={description:`Anchors multipurpose floating content for handbook notes, definitions, and
rich callouts.

Compose with \`PopoverTrigger\`, optional \`PopoverAnchor\`, and
\`PopoverContent\` (plus Header/Title/Description/Body/Media/Footer/Close).
Use \`interaction="definition"\` for hover/focus plain notes without a focus
trap, and \`interaction="rich"\` for click-to-open interactive content with
focus trapping.

@example
\`\`\`tsx
<Popover interaction="definition" tone="warning">
  <PopoverTrigger>
    <Text dashedUnderline tabIndex={0}>cycle time</Text>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverHeader>
      <PopoverTitle>Warning</PopoverTitle>
    </PopoverHeader>
    <PopoverBody>
      Cycle time includes queue and wait, not only active work.
    </PopoverBody>
  </PopoverContent>
</Popover>
\`\`\``,methods:[],displayName:"Popover",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Compound parts such as Trigger and Content."},interaction:{required:!1,tsType:{name:"union",raw:"'definition' | 'rich'",elements:[{name:"literal",value:"'definition'"},{name:"literal",value:"'rich'"}]},description:"How the popover opens and manages focus.\n- `definition`: hover + focus, no focus trap (handbook definitions)\n- `rich`: click open, focus trap + restore focus (interactive content)\n@default 'rich'"},open:{required:!1,tsType:{name:"boolean"},description:"Controlled open state."},defaultOpen:{required:!1,tsType:{name:"boolean"},description:`Initial open state when uncontrolled.
@default false`},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:"Called when open state should change."},placement:{required:!1,tsType:{name:"Placement"},description:`Preferred placement relative to the reference. The overlay can flip when it does not fit.
@default 'bottom'`},offset:{required:!1,tsType:{name:"number"},description:`Gap between reference and content, in pixels.
@default 8`},showArrow:{required:!1,tsType:{name:"boolean"},description:`Shows the arrow pointing at the reference.
@default true`},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Content panel size. Wider than Tooltip (`240`).\n@default 'md'"},tone:{required:!1,tsType:{name:"union",raw:"'note' | 'tip' | 'warning' | 'important' | 'caution'",elements:[{name:"literal",value:"'note'"},{name:"literal",value:"'tip'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'important'"},{name:"literal",value:"'caution'"}]},description:'Visual tone for handbook-style notes. Affects surface and border only —\nnever maps to `role="alert"`.'}}};const B=o=>{const{children:n,...r}=o,[s,i]=y(r),{size:t}=N(),l=T({size:t});return e.jsx(p,{className:x(l.body,s),...i,children:n})};B.__docgenInfo={description:`Renders the main content region of a {@link PopoverContent}.

@example
\`\`\`tsx
<PopoverBody>
  Cycle time includes queue and wait, not only active work.
</PopoverBody>
\`\`\``,methods:[],displayName:"PopoverBody",props:{children:{required:!0,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:"Body content. Strings render as text; nodes may include links and controls."}}};const G=o=>{const{altText:n="Close",className:r,onClick:s,...i}=o,[,t]=y(i),{setOpen:l}=N(),c=T();return e.jsx(Qe,{variant:"ghost",size:"sm",iconName:"x",altText:n,"aria-label":n,className:x(c.close,r),onClick:d=>{s==null||s(d),l(!1)},...t})};G.__docgenInfo={description:`Optional control that closes the parent {@link Popover}.

Escape and outside press already dismiss the panel; use this when a visible
close affordance is needed (typically in rich notes).

@example
\`\`\`tsx
<PopoverHeader>
  <PopoverTitle>Tip</PopoverTitle>
  <PopoverClose />
</PopoverHeader>
\`\`\``,methods:[],displayName:"PopoverClose",props:{altText:{required:!1,tsType:{name:"string"},description:'Accessible label for the close control. @default "Close"'},onClick:{required:!1,tsType:{name:"intersection['onClick']",raw:"IconButtonProps['onClick']"},description:"Called after the popover requests close."}}};const F=o=>{const{children:n,...r}=o,[s,i]=y(r),{open:t,interaction:l,showArrow:c,size:d,tone:m,floatingContext:u,floatingStyles:v,domReference:h,getFloatingProps:w,setFloatingRef:b,arrowRef:P,contentId:j,titleId:H,descriptionId:O}=N(),V=T({size:d,tone:m}),A=l==="rich";if(!t)return null;const U=Z.var("colors.surface.overlay"),R=e.jsxs(p,{...ze("PopoverContent"),ref:b,id:j,style:v,className:x(V.content,s),"aria-labelledby":H,"aria-describedby":O,...w(),...i,children:[n,c&&e.jsx(Le,{ref:P,context:u,fill:U,stroke:Z.var("colors.border"),strokeWidth:1})]});return e.jsx(Ge,{children:e.jsx(Ke,{reference:h,children:A?e.jsx($e,{context:u,modal:!0,returnFocus:!0,children:R}):R})})};F.__docgenInfo={description:`Renders the portalled popover panel with dismiss behavior and optional focus
trapping.

For \`interaction="rich"\`, focus is trapped inside the panel and restored to
the trigger on close. For \`interaction="definition"\`, there is no focus trap.
Escape and outside press dismiss the panel. Tone is visual only and never
sets \`role="alert"\`.

@example
\`\`\`tsx
<PopoverContent>
  <PopoverHeader><PopoverTitle>Tip</PopoverTitle></PopoverHeader>
  <PopoverBody>Save often while editing.</PopoverBody>
</PopoverContent>
\`\`\``,methods:[],displayName:"PopoverContent",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Popover panel content composed from Header, Body, Footer, and related parts."}}};const xe=o=>{const{children:n,...r}=o,[s,i]=y(r),t=T();return e.jsx(p,{className:x(t.footer,s),...i,children:n})};xe.__docgenInfo={description:`Renders the optional footer/actions region of a {@link PopoverContent}.

@example
\`\`\`tsx
<PopoverFooter>
  <Button size="sm">Got it</Button>
</PopoverFooter>
\`\`\``,methods:[],displayName:"PopoverFooter",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Footer content, typically actions such as `Button` or `Link`."}}};const z=o=>{const{children:n,...r}=o,[s,i]=y(r),t=T();return e.jsx(p,{className:x(t.header,s),...i,children:n})};z.__docgenInfo={description:`Renders the optional header region of a parent {@link PopoverContent}.

@example
\`\`\`tsx
<PopoverHeader>
  <PopoverTitle>Warning</PopoverTitle>
  <PopoverClose />
</PopoverHeader>
\`\`\``,methods:[],displayName:"PopoverHeader",props:{children:{required:!1,tsType:{name:"ReactNode"},description:"Header content, typically `PopoverTitle` and optional `PopoverClose`."}}};const ye=o=>{const{children:n,...r}=o,[s,i]=y(r),t=T();return e.jsx(p,{className:x(t.media,s),...i,children:n})};ye.__docgenInfo={description:`Renders an optional media region inside {@link PopoverContent}.

Place images or other illustrative content here. Keep interactive controls
in Body or Footer so media stays presentational.

@example
\`\`\`tsx
<PopoverMedia>
  <img src="/diagram.png" alt="Cycle time diagram" />
</PopoverMedia>
\`\`\``,methods:[],displayName:"PopoverMedia",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Media content such as an image or illustration."}}};const to={note:"note",tip:"info",warning:"warning",important:"flag",caution:"warning"},ro={note:"icon.subtle",tip:"icon.info",warning:"icon.warning",important:"icon.danger",caution:"icon.warning"},q=o=>{const{children:n,showToneIcon:r=!0,id:s,...i}=o,[t,l]=y(i),{tone:c,size:d,setTitleId:m}=N(),u=a.useId(),v=s??u,h=T({size:d,tone:c});return a.useEffect(()=>(m(v),()=>m(void 0)),[m,v]),e.jsxs(p,{as:"div",id:v,className:x(h.title,t),...l,children:[r&&c&&e.jsx(p,{className:h.titleIcon,"aria-hidden":"true",children:e.jsx(Xe,{name:to[c],size:"16",fill:ro[c]})}),n]})};q.__docgenInfo={description:"Renders the popover title and wires it to `aria-labelledby` on the panel.\n\nWhen the parent sets a `tone`, an optional leading icon matches that tone.\nTone remains visual only and does not change live-region roles.\n\n@example\n```tsx\n<PopoverTitle>Warning</PopoverTitle>\n```",methods:[],displayName:"PopoverTitle",props:{children:{required:!0,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:"Title content. Strings render as text; nodes render as-is."},showToneIcon:{required:!1,tsType:{name:"boolean"},description:"Shows the tone icon when the parent Popover has a `tone`.\n@default true"}}};const S=o=>{const{children:n,...r}=o,[s,i]=y(r),{open:t,interaction:l,contentId:c,getReferenceProps:d,setReferenceRef:m}=N(),u=T(),v=a.Children.toArray(n),h=v.length===1?v[0]:null,w=a.isValidElement(h)?h.props.ref:void 0,b=Je([w,m]);if(a.isValidElement(h)){const P=h,j=d({...i,...P.props});return a.cloneElement(P,{...j,ref:b,"aria-expanded":l==="rich"?t?"true":"false":void 0,"aria-controls":t?c:void 0,"aria-haspopup":l==="rich"?"dialog":void 0,className:x(u.trigger,P.props.className,s)})}return e.jsx(p,{as:"span",ref:m,display:"inline",width:"fit",className:x(u.trigger,s),"aria-expanded":l==="rich"?t?"true":"false":void 0,"aria-controls":t?c:void 0,"aria-haspopup":l==="rich"?"dialog":void 0,tabIndex:l==="definition"?0:void 0,...d(),...i,children:n})};S.__docgenInfo={description:'Marks the control that opens a parent {@link Popover}.\n\nFor `interaction="definition"`, prefer a dashed-underline phrase (for\nexample `Text` with `dashedUnderline`) so keyboard users can focus it. For\n`interaction="rich"`, prefer a button or other interactive control.\n\n@example\n```tsx\n<PopoverTrigger>\n  <Text dashedUnderline tabIndex={0}>cycle time</Text>\n</PopoverTrigger>\n```',methods:[],displayName:"PopoverTrigger",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Trigger content. A single React element receives refs and interaction\nprops via `cloneElement`. Otherwise content is wrapped in an inline span."}}};const To={title:"Components/Popover",component:k,parameters:{layout:"centered"},args:{children:null,interaction:"rich",size:"md",showArrow:!0,placement:"bottom"},argTypes:{interaction:{control:"select",options:["definition","rich"]},size:{control:"select",options:["sm","md","lg"]},tone:{control:"select",options:["note","tip","warning","important","caution"]},placement:{control:"select",options:["top","top-start","top-end","bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end"]},showArrow:{control:"boolean"}}},_={name:"Ex: Definition note",args:{interaction:"definition",tone:"warning",size:"md",showArrow:!0,placement:"bottom"},render:({children:o,...n})=>e.jsx(p,{maxW:"prose",p:"32",children:e.jsxs(D,{children:["Operators should track"," ",e.jsxs(k,{...n,children:[e.jsx(S,{children:e.jsx(D,{as:"span",dashedUnderline:!0,tabIndex:0,children:"cycle time"})}),e.jsxs(F,{children:[e.jsx(z,{children:e.jsx(q,{children:"Warning"})}),e.jsx(B,{children:"Cycle time includes queue and wait, not only active work. Do not treat machine run time as the full cycle when estimating delivery commitments."})]})]})," ","before promising a ship date."]})})},I={name:"Ex: Rich note",args:{interaction:"rich",tone:"tip",size:"md",showArrow:!0,placement:"bottom"},render:({children:o,...n})=>e.jsx(p,{maxW:"prose",p:"32",children:e.jsxs(D,{children:["See the"," ",e.jsxs(k,{...n,children:[e.jsx(S,{children:e.jsx(D,{as:"span",dashedUnderline:!0,tabIndex:0,children:"setup checklist"})}),e.jsxs(F,{children:[e.jsxs(z,{children:[e.jsx(q,{children:"Tip"}),e.jsx(G,{})]}),e.jsx(ye,{children:e.jsx(p,{as:"img",src:"https://placehold.co/320x120/png?text=Setup+diagram",alt:"Setup diagram placeholder",w:"full",display:"block"})}),e.jsx(B,{children:"Confirm tooling, material, and traveler notes before the first piece. Open the full checklist when onboarding a new operator."}),e.jsxs(xe,{children:[e.jsx(qe,{href:"https://example.com/handbook/setup",external:!0,children:"Open handbook"}),e.jsx(L,{size:"sm",children:"Got it"})]})]})]})," ","before starting the job."]})})},M={render:()=>e.jsx(p,{display:"flex",gap:"24",flexWrap:"wrap",p:"32",children:["note","tip","warning","important","caution"].map(o=>e.jsxs(k,{interaction:"rich",tone:o,defaultOpen:!0,children:[e.jsx(S,{children:e.jsx(L,{size:"sm",children:o})}),e.jsxs(F,{children:[e.jsxs(z,{children:[e.jsx(q,{children:o.charAt(0).toUpperCase()+o.slice(1)}),e.jsx(G,{})]}),e.jsx(B,{children:'Visual tone only — this never maps to role="alert".'})]})]},o))})},W={render:()=>e.jsx(p,{display:"flex",gap:"48",alignItems:"flex-start",p:"32",children:["sm","md","lg"].map(o=>e.jsxs(k,{interaction:"rich",tone:"note",size:o,defaultOpen:!0,children:[e.jsx(S,{children:e.jsx(L,{size:"sm",children:o})}),e.jsxs(F,{children:[e.jsx(z,{children:e.jsxs(q,{children:["Size ",o]})}),e.jsx(B,{children:"Popover panels are wider than Tooltip (max 240) so handbook notes can carry multi-line guidance."})]})]},o))})};var oe,ne,te,re,se;_.parameters={..._.parameters,docs:{...(oe=_.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
          <PopoverTrigger>
            <Text as="span" dashedUnderline tabIndex={0}>
              cycle time
            </Text>
          </PopoverTrigger>
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
}`,...(te=(ne=_.parameters)==null?void 0:ne.docs)==null?void 0:te.source},description:{story:"Handbook definition note — hover or focus the dashed phrase.",...(se=(re=_.parameters)==null?void 0:re.docs)==null?void 0:se.description}}};var ie,ae,le,ce,pe;I.parameters={...I.parameters,docs:{...(ie=I.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
  }) => <Box maxW="prose" p="32">
      <Text>
        See the{' '}
        <Popover {...args}>
          <PopoverTrigger>
            <Text as="span" dashedUnderline tabIndex={0}>
              setup checklist
            </Text>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverHeader>
              <PopoverTitle>Tip</PopoverTitle>
              <PopoverClose />
            </PopoverHeader>
            <PopoverMedia>
              <Box as="img" src="https://placehold.co/320x120/png?text=Setup+diagram" alt="Setup diagram placeholder" w="full" display="block" />
            </PopoverMedia>
            <PopoverBody>
              Confirm tooling, material, and traveler notes before the first
              piece. Open the full checklist when onboarding a new operator.
            </PopoverBody>
            <PopoverFooter>
              <Link href="https://example.com/handbook/setup" external>
                Open handbook
              </Link>
              <Button size="sm">Got it</Button>
            </PopoverFooter>
          </PopoverContent>
        </Popover>{' '}
        before starting the job.
      </Text>
    </Box>
}`,...(le=(ae=I.parameters)==null?void 0:ae.docs)==null?void 0:le.source},description:{story:"Handbook rich note — click the dashed phrase; focus is trapped.",...(pe=(ce=I.parameters)==null?void 0:ce.docs)==null?void 0:pe.description}}};var de,me,he;M.parameters={...M.parameters,docs:{...(de=M.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => <Box display="flex" gap="24" flexWrap="wrap" p="32">
      {(['note', 'tip', 'warning', 'important', 'caution'] as const).map(tone => <Popover key={tone} interaction="rich" tone={tone} defaultOpen>
            <PopoverTrigger>
              <Button size="sm">{tone}</Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverHeader>
                <PopoverTitle>
                  {tone.charAt(0).toUpperCase() + tone.slice(1)}
                </PopoverTitle>
                <PopoverClose />
              </PopoverHeader>
              <PopoverBody>
                Visual tone only — this never maps to role=&quot;alert&quot;.
              </PopoverBody>
            </PopoverContent>
          </Popover>)}
    </Box>
}`,...(he=(me=M.parameters)==null?void 0:me.docs)==null?void 0:he.source}}};var ue,ve,fe;W.parameters={...W.parameters,docs:{...(ue=W.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => <Box display="flex" gap="48" alignItems="flex-start" p="32">
      {(['sm', 'md', 'lg'] as const).map(size => <Popover key={size} interaction="rich" tone="note" size={size} defaultOpen>
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
}`,...(fe=(ve=W.parameters)==null?void 0:ve.docs)==null?void 0:fe.source}}};const wo=["DefinitionNote","RichNote","Tones","Sizes"];export{_ as DefinitionNote,I as RichNote,W as Sizes,M as Tones,wo as __namedExportsOrder,To as default};
