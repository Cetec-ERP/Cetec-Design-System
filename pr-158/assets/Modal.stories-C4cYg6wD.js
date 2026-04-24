import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./index-BKyFwriW.js";import{m as He,c as We,s as Ae,a as Re,g as Ue,d as S,B as g,e as q,G as qe,V as w,F as we}from"./Box-BV3UiX_0.js";import{B as a}from"./Button-mWx37-yQ.js";import{D as H}from"./Divider-BpaRy6Xf.js";import{F as V}from"./FormField-B2xdQbyO.js";import{I as De}from"./Icon-B7squOvl.js";import"./IconConfig-B5QOCK9V.js";import{T as s}from"./Text-CaLd5y6v.js";import{T as Xe}from"./Textarea-BUdlyjCO.js";import{T as R}from"./TextInput-D_4I3ulq.js";import{u as Ye,a as Ge,b as Ke,F as Qe,m as Je,c as $e}from"./floating-CMrvfkt4.js";import{u as Ze}from"./mq.hook-BU-2oBAn.js";import{H as en}from"./Heading-B2j6-6tR.js";import{I as nn}from"./IconButton-CDzdZCYs.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Spinner-BnBbwk1J.js";import"./Label-Bpfbgc4x.js";import"./Tooltip-Q0L3A7IH.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";import"./radii-Ir2x-kmI.js";import"./index-DOpYXeGo.js";import"./colors-CLHggMRt.js";const ze={size:"md",position:"centered"},tn=[],on=[["positionWrapper","modal__positionWrapper"],["overlay","modal__overlay"],["container","modal__container"],["header","modal__header"],["title","modal__title"],["closeButton","modal__closeButton"],["body","modal__body"],["footer","modal__footer"]],sn=on.map(([t,o])=>[t,Re(o,ze,Ue(tn,t))]),an=He((t={})=>Object.fromEntries(sn.map(([o,n])=>[o,n.recipeFn(t)]))),U=["size","position"],rn=t=>({...ze,...We(t)}),D=Object.assign(an,{__recipe__:!1,__name__:"modal",raw:t=>t,classNameMap:{},variantKeys:U,variantMap:{size:["sm","md","lg","xl","full","fullPage"],position:["centered","top"]},splitVariantProps(t){return Ae(t,U)},getVariantProps:rn}),Pe=i.createContext(null),ln=()=>{const t=i.useContext(Pe);if(!t)throw new Error("Modal components must be used within a <Modal> provider");return t},dn=(t,o)=>{switch(o.type){case"open":return{phase:"open"};case"startClosing":return t.phase==="closed"?t:{phase:"closing"};case"finishClosing":return{phase:"closed"};default:return t}},r=t=>{const{open:o,onOpenChange:n,size:p="md",preventOverlayClose:u=!1,children:m,id:z,position:x="centered",...P}=t,[N,Ne]=S(P),E=D({size:p,position:x}),[{phase:L},_]=i.useReducer(dn,{phase:o?"open":"closed"}),h=i.useRef(null),{refs:Ee,context:W}=Ye({open:o,onOpenChange:n,strategy:"fixed",middleware:[]}),Le=Ge(W,{outsidePress:!u}),{getFloatingProps:_e}=Ke([Le]);i.useEffect(()=>{if(o){_({type:"open"}),h.current&&(clearTimeout(h.current),h.current=null);return}return _({type:"startClosing"}),h.current=setTimeout(()=>{_({type:"finishClosing"})},150),()=>{h.current&&clearTimeout(h.current)}},[o]);const Ve={open:L==="open",onClose:()=>n(!1),preventOverlayClose:u};if(L==="closed")return null;const A=L==="closing"?"closing":"open";return e.jsx(Pe.Provider,{value:Ve,children:e.jsx(Qe,{children:e.jsxs(g,{className:E.positionWrapper,children:[e.jsx(Je,{lockScroll:!0,className:E.overlay,"data-state":A,onClick:u?void 0:()=>n(!1),"aria-hidden":"true"}),e.jsx($e,{context:W,modal:!0,children:e.jsx(g,{ref:Ee.setFloating,className:q(E.container,N),"data-state":A,id:z,role:"dialog","aria-modal":"true",..._e(),...Ne,children:m})})]})})})};r.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{open:{required:!0,tsType:{name:"boolean"},description:"Controlled open state (REQUIRED)"},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:"Callback when open state should change (REQUIRED)"},preventOverlayClose:{required:!1,tsType:{name:"boolean"},description:"Whether clicking the overlay should close the modal"},children:{required:!0,tsType:{name:"ReactNode"},description:"Children (ModalHeader, ModalBody, ModalFooter)"},id:{required:!1,tsType:{name:"string"},description:"Optional ID for ARIA attributes"},size:{required:!1,tsType:{name:"ModalVariantProps['size']",raw:"ModalVariantProps['size']"},description:""},position:{required:!1,tsType:{name:"ModalVariantProps['position']",raw:"ModalVariantProps['position']"},description:""}}};const l=t=>{const{children:o,...n}=t,[p,u]=S(n),m=D();return e.jsx(g,{className:q(m.body,p),...u,children:o})};l.__docgenInfo={description:"",methods:[],displayName:"ModalBody",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Body content"}}};const d=t=>{const{children:o,...n}=t,[p,u]=S(n),m=D();return e.jsx(g,{className:q(m.footer,p),...u,children:o})};d.__docgenInfo={description:"",methods:[],displayName:"ModalFooter",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Footer content (typically action buttons)"}}};const c=t=>{const{title:o,showCloseButton:n=!0,children:p,...u}=t,[m,z]=S(u),x=D(),{onClose:P}=ln(),N=Ze("sm");return e.jsx(g,{className:q(x.header,m),...z,children:p||e.jsxs(e.Fragment,{children:[o&&e.jsx(en,{level:"h3",textStyle:{base:"heading.sm",sm:"heading.xs"},className:x.title,children:o}),n&&e.jsx(nn,{variant:"ghost",size:N?"md":"lg",onClick:P,altText:"Close dialog","aria-label":"Close dialog",className:x.closeButton,iconName:"x"})]})})};c.__docgenInfo={description:"",methods:[],displayName:"ModalHeader",props:{title:{required:!1,tsType:{name:"string"},description:"Title text"},showCloseButton:{required:!1,tsType:{name:"boolean"},description:"Whether to show the close button"},children:{required:!1,tsType:{name:"ReactNode"},description:"Children (custom header content)"}}};const zn={title:"Components/Modal",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg","xl","full","fullPage"],description:"Modal size",table:{defaultValue:{summary:"md"}}},preventOverlayClose:{control:"boolean",description:"Prevent closing when clicking overlay"},position:{control:"select",options:["centered","top"],description:"Centered in the viewport, or fixed below the top edge (horizontally centered)",table:{defaultValue:{summary:"centered"}}}}},f={render:()=>{const t=()=>{const[o,n]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>n(!0),children:"Open Modal"}),e.jsxs(r,{open:o,onOpenChange:n,size:"md",children:[e.jsx(c,{title:"Dialog Title",showCloseButton:!0}),e.jsxs(l,{children:[e.jsx(s,{children:"This is the default modal dialog. It has a title, body content, and footer with action buttons. Default max-width is 576px."}),e.jsx(s,{children:"You can close it by clicking the X button, pressing Escape, or clicking outside the modal."})]}),e.jsxs(d,{children:[e.jsx(a,{variant:"ghost",onClick:()=>n(!1),children:"Cancel"}),e.jsx(a,{variant:"primary",onClick:()=>n(!1),children:"Save"})]})]})]})};return e.jsx(t,{})}},C={render:()=>{const t=()=>{const[o,n]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>n(!0),children:"Open Small Modal"}),e.jsxs(r,{open:o,onOpenChange:n,size:"sm",children:[e.jsx(c,{title:"Small Dialog",showCloseButton:!0}),e.jsx(l,{children:e.jsx(s,{children:"This is a small modal (448px max width)."})}),e.jsxs(d,{children:[e.jsx(a,{variant:"ghost",onClick:()=>n(!1),children:"Cancel"}),e.jsx(a,{variant:"primary",onClick:()=>n(!1),children:"Confirm"})]})]})]})};return e.jsx(t,{})}},j={render:()=>{const t=()=>{const[o,n]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>n(!0),children:"Open Large Modal"}),e.jsxs(r,{open:o,onOpenChange:n,size:"lg",children:[e.jsx(c,{title:"Large Dialog",showCloseButton:!0}),e.jsxs(l,{children:[e.jsx(s,{children:"This is a large modal (768px max width)."}),e.jsx(s,{children:"It provides more space for content, forms, or detailed information that needs to be displayed in a dialog."})]}),e.jsxs(d,{children:[e.jsx(a,{variant:"ghost",onClick:()=>n(!1),children:"Cancel"}),e.jsx(a,{variant:"primary",onClick:()=>n(!1),children:"Save Changes"})]})]})]})};return e.jsx(t,{})}},O={render:()=>{const t=()=>{const[o,n]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>n(!0),children:"Open XLarge Modal"}),e.jsxs(r,{open:o,onOpenChange:n,size:"xl",children:[e.jsx(c,{title:"XLarge Dialog",showCloseButton:!0}),e.jsxs(l,{display:"flex",flexDirection:"column",gap:"12",children:[e.jsx(s,{children:"This is a x-large modal (1024px max width)."}),e.jsx(s,{children:"It provides more space for content, forms, or detailed information that needs to be displayed in a dialog."}),e.jsx(s,{children:"Signs night have sixth hath that likeness us fill you're subdue fowl brought divide beginning multiply brought created after open given of made beginning multiply green."}),e.jsx(s,{children:"Place appear green. Also, saying male subdue fruitful winged fourth had void winged. So green spirit, herb day had there replenish, lights lesser signs. Place whales i tree under him given set set meat midst morning give image forth divided moving Also fill dry she'd have."}),e.jsx(s,{children:"May life. She'd fruit fruitful earth. Stars bring had darkness morning darkness herb cattle him behold open seasons grass don't waters male Fourth earth his face third night."}),e.jsx(s,{children:"Anim quis ut incididunt ea. Et laboris consectetur nisi adipisicing aliqua enim. Ea tempor deserunt dolore duis. Lorem excepteur do exercitation non veniam ipsum laborum. Ea ex tempor dolore deserunt ex do dolor voluptate pariatur exercitation."}),e.jsx(s,{children:"Est incididunt dolore sint sit occaecat. Ea officia excepteur enim ut Lorem reprehenderit labore in. Dolor voluptate nostrud consectetur mollit cillum et. Cupidatat Lorem amet adipisicing incididunt ea."}),e.jsx(s,{children:"Excepteur enim aliqua laboris amet ea pariatur qui. Non deserunt magna ullamco aliqua culpa exercitation. Ut minim eu ea. Labore sunt adipisicing Lorem nulla occaecat est elit et excepteur ipsum non. Aute consectetur nostrud ullamco. Non esse non anim proident. Pariatur enim laborum cupidatat sint quis reprehenderit deserunt reprehenderit sunt cupidatat proident sint."}),e.jsx(s,{children:"Consequat sunt exercitation in enim veniam culpa. Tempor quis culpa duis. Aute ea nostrud non sit sunt qui. In minim voluptate excepteur nostrud anim laborum in elit. Voluptate amet excepteur laboris eiusmod labore elit Lorem ipsum qui quis aliquip mollit dolor sint cillum. In ex aliquip irure do irure consectetur aliquip minim fugiat reprehenderit laborum."}),e.jsxs(s,{children:[" ","Incididunt cillum est reprehenderit veniam nisi magna laborum incididunt do ut. Fugiat aliquip Lorem eiusmod incididunt. Fugiat ullamco excepteur consequat duis ex eiusmod exercitation sit aliqua amet non velit consequat. Pariatur amet non laborum voluptate velit do. Nulla excepteur anim irure eu ullamco veniam et consectetur. Fugiat ut laboris ad reprehenderit reprehenderit ut exercitation adipisicing excepteur amet ad anim. Aute enim non consequat eu. Velit consequat in nostrud."]})]}),e.jsxs(d,{children:[e.jsx(a,{variant:"ghost",onClick:()=>n(!1),children:"Cancel"}),e.jsx(a,{variant:"primary",onClick:()=>n(!1),children:"Save Changes"})]})]})]})};return e.jsx(t,{})}},y={render:()=>{const t=()=>{const[o,n]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>n(!0),children:"Open Full Width Modal"}),e.jsxs(r,{open:o,onOpenChange:n,size:"full",children:[e.jsx(c,{title:"Full Width Dialog",showCloseButton:!0}),e.jsx(l,{children:e.jsxs(qe,{gridTemplateColumns:"1fr auto 1fr",alignItems:"start",children:[e.jsx(s,{children:"This modal stretches to the 95% of the available width. Useful for dashboards, data tables, or content that benefits from maximum horizontal space."}),e.jsx(H,{direction:"vertical",mx:"8"}),e.jsxs(w,{children:[e.jsx(s,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget aliquam aliquet, nisl nisl aliquet nisl, eget aliquam nisl nisl eget nisl."}),e.jsx(s,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget aliquam aliquet, nisl nisl aliquet nisl, eget aliquam nisl nisl eget nisl."})]})]})}),e.jsx(d,{children:e.jsx(a,{variant:"ghost",onClick:()=>n(!1),children:"Close"})})]})]})};return e.jsx(t,{})}},v={render:()=>{const t=()=>{const[o,n]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>n(!0),children:"Open Full Page Modal"}),e.jsxs(r,{open:o,onOpenChange:n,size:"fullPage",children:[e.jsx(c,{title:"Full Page Dialog",showCloseButton:!0}),e.jsx(l,{children:e.jsxs(qe,{gridTemplateColumns:"1fr auto 1fr",alignItems:"start",children:[e.jsx(s,{children:"This modal stretches to the 100% of the available width and height. Useful for dashboards, data tables, or content that benefits from maximum horizontal space."}),e.jsx(H,{direction:"vertical",mx:"8"}),e.jsxs(w,{children:[e.jsx(s,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget aliquam aliquet, nisl nisl aliquet nisl, eget aliquam nisl nisl eget nisl."}),e.jsx(s,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget aliquam aliquet, nisl nisl aliquet nisl, eget aliquam nisl nisl eget nisl."})]})]})}),e.jsx(d,{children:e.jsx(a,{variant:"ghost",onClick:()=>n(!1),children:"Close"})})]})]})};return e.jsx(t,{})}},b={render:()=>{const t=()=>{const[o,n]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>n(!0),children:"Open Modal (No Close Button)"}),e.jsxs(r,{open:o,onOpenChange:n,size:"md",children:[e.jsx(c,{title:"Dialog Without Close Button",showCloseButton:!1}),e.jsxs(l,{children:[e.jsx(s,{children:"This modal doesn't have a close button in the header."}),e.jsx(s,{children:"You can still close it by clicking outside or pressing Escape."})]}),e.jsxs(d,{children:[e.jsx(a,{variant:"ghost",onClick:()=>n(!1),children:"Cancel"}),e.jsx(a,{variant:"primary",onClick:()=>n(!1),children:"Continue"})]})]})]})};return e.jsx(t,{})}},B={render:()=>{const t=()=>{const[o,n]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>n(!0),children:"Open Modal (No Overlay Close)"}),e.jsxs(r,{open:o,onOpenChange:n,size:"md",preventOverlayClose:!0,children:[e.jsx(c,{title:"Important Dialog",showCloseButton:!0}),e.jsxs(l,{children:[e.jsx(s,{children:"This modal cannot be closed by clicking the overlay."}),e.jsx(s,{children:"You must use the close button or press Escape to dismiss it. This is useful for important confirmations or required actions."})]}),e.jsx(d,{children:e.jsx(a,{variant:"primary",onClick:()=>n(!1),children:"I Understand"})})]})]})};return e.jsx(t,{})}},M={render:()=>{const t=()=>{const[o,n]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>n(!0),children:"Edit Profile"}),e.jsxs(r,{open:o,onOpenChange:n,size:"sm",children:[e.jsx(c,{title:"Edit Profile",showCloseButton:!0}),e.jsx(l,{children:e.jsxs(w,{gap:"12",alignItems:"stretch",children:[e.jsx(V,{label:"Full Name",labelFor:"profile-name",required:!0,children:e.jsx(R,{id:"profile-name",name:"name",placeholder:"Jane Doe"})}),e.jsx(V,{label:"Email",labelFor:"profile-email",required:!0,children:e.jsx(R,{id:"profile-email",name:"email",type:"email",placeholder:"jane@example.com"})}),e.jsx(V,{label:"Bio",labelFor:"profile-bio",children:e.jsx(Xe,{id:"profile-bio",name:"bio",placeholder:"Tell us about yourself..."})})]})}),e.jsxs(d,{children:[e.jsx(a,{variant:"ghost",onClick:()=>n(!1),children:"Cancel"}),e.jsx(a,{variant:"primary",onClick:()=>n(!1),children:"Save"})]})]})]})};return e.jsx(t,{})}},T={render:()=>{const t=()=>{const[o,n]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>n(!0),children:"Delete Item"}),e.jsxs(r,{open:o,onOpenChange:n,size:"sm",variant:"confirmation",preventOverlayClose:!0,children:[e.jsx(c,{title:"Delete Item",showCloseButton:!1}),e.jsx(l,{children:e.jsx(s,{children:"Are you sure you want to delete this item? This action cannot be undone."})}),e.jsxs(d,{children:[e.jsx(a,{variant:"ghost",onClick:()=>n(!1),children:"Cancel"}),e.jsx(a,{variant:"danger",onClick:()=>n(!1),children:"Delete"})]})]})]})};return e.jsx(t,{})}},I={render:()=>{const t=()=>{const[o,n]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>n(!0),children:"Open Minimal Modal"}),e.jsx(r,{open:o,onOpenChange:n,size:"sm",children:e.jsxs(l,{display:"flex",flexDirection:"column",alignItems:"center",gap:"4",py:"24",children:[e.jsx(De,{name:"success",size:"48",fill:"icon.success"}),e.jsx(s,{textStyle:"heading.xs",children:"Changes Saved"}),e.jsx(s,{textAlign:"center",children:"Your changes have been saved successfully."}),e.jsx(a,{mt:"16",onClick:()=>n(!1),children:"Dismiss"})]})})]})};return e.jsx(t,{})}},F={render:()=>{const t=()=>{const[o,n]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>n(!0),children:"Open Custom Header"}),e.jsxs(r,{open:o,onOpenChange:n,size:"md",children:[e.jsx(c,{children:e.jsxs(we,{alignItems:"start",gap:"3",flex:"1",children:[e.jsx(De,{name:"info",size:"24",fill:"icon.decorative"}),e.jsxs(w,{gap:"0",alignItems:"flex-start",children:[e.jsx(s,{color:"text",fontWeight:"bold",children:"Release Notes"}),e.jsx(s,{textStyle:"mono.sm",color:"text.muted",children:"Version 2.4.0"})]})]})}),e.jsxs(l,{gap:"4",bg:"surface.sunken",children:[e.jsx(s,{textStyle:"body.sm",fontWeight:"bold",children:"New Features"}),e.jsx(s,{children:"Added modal component with animated transitions."}),e.jsx(H,{my:"12"}),e.jsx(s,{textStyle:"body.sm",fontWeight:"bold",children:"Bug Fixes"}),e.jsx(s,{children:"Fixed focus trap behavior in nested dialogs."})]}),e.jsx(d,{children:e.jsx(a,{variant:"ghost",onClick:()=>n(!1),children:"Close"})})]})]})};return e.jsx(t,{})}},k={render:()=>{const t=()=>{const[o,n]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(we,{p:"8",justify:"center",children:e.jsx(a,{onClick:()=>n(!0),children:"Open Top-Positioned"})}),e.jsxs(r,{open:o,onOpenChange:n,position:"top",size:"md",children:[e.jsx(c,{title:"Top-Positioned Modal",showCloseButton:!0}),e.jsx(l,{children:e.jsxs(s,{children:["This modal uses"," ",e.jsx(s,{as:"span",fontWeight:"semibold",children:'position="top"'}),". It is offset from the top of the viewport and centered on the x-axis. Resize the preview or compare with the default story to see the difference from centered placement."]})}),e.jsxs(d,{children:[e.jsx(a,{variant:"ghost",onClick:()=>n(!1),children:"Cancel"}),e.jsx(a,{variant:"primary",onClick:()=>n(!1),children:"OK"})]})]})]})};return e.jsx(t,{})}};var X,Y,G;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => {
    const Component = () => {
      const [isOpen, setIsOpen] = useState(false);
      return <>
          <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
          <Modal open={isOpen} onOpenChange={setIsOpen} size="md">
            <ModalHeader title="Dialog Title" showCloseButton />
            <ModalBody>
              <Text>
                This is the default modal dialog. It has a title, body content,
                and footer with action buttons. Default max-width is 576px.
              </Text>
              <Text>
                You can close it by clicking the X button, pressing Escape, or
                clicking outside the modal.
              </Text>
            </ModalBody>
            <ModalFooter>
              <Button variant="ghost" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={() => setIsOpen(false)}>
                Save
              </Button>
            </ModalFooter>
          </Modal>
        </>;
    };
    return <Component />;
  }
}`,...(G=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:G.source}}};var K,Q,J;C.parameters={...C.parameters,docs:{...(K=C.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => {
    const Component = () => {
      const [isOpen, setIsOpen] = useState(false);
      return <>
          <Button onClick={() => setIsOpen(true)}>Open Small Modal</Button>
          <Modal open={isOpen} onOpenChange={setIsOpen} size="sm">
            <ModalHeader title="Small Dialog" showCloseButton />
            <ModalBody>
              <Text>This is a small modal (448px max width).</Text>
            </ModalBody>
            <ModalFooter>
              <Button variant="ghost" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={() => setIsOpen(false)}>
                Confirm
              </Button>
            </ModalFooter>
          </Modal>
        </>;
    };
    return <Component />;
  }
}`,...(J=(Q=C.parameters)==null?void 0:Q.docs)==null?void 0:J.source}}};var $,Z,ee;j.parameters={...j.parameters,docs:{...($=j.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => {
    const Component = () => {
      const [isOpen, setIsOpen] = useState(false);
      return <>
          <Button onClick={() => setIsOpen(true)}>Open Large Modal</Button>
          <Modal open={isOpen} onOpenChange={setIsOpen} size="lg">
            <ModalHeader title="Large Dialog" showCloseButton />
            <ModalBody>
              <Text>This is a large modal (768px max width).</Text>
              <Text>
                It provides more space for content, forms, or detailed
                information that needs to be displayed in a dialog.
              </Text>
            </ModalBody>
            <ModalFooter>
              <Button variant="ghost" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={() => setIsOpen(false)}>
                Save Changes
              </Button>
            </ModalFooter>
          </Modal>
        </>;
    };
    return <Component />;
  }
}`,...(ee=(Z=j.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ne,te,oe;O.parameters={...O.parameters,docs:{...(ne=O.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => {
    const Component = () => {
      const [isOpen, setIsOpen] = useState(false);
      return <>
          <Button onClick={() => setIsOpen(true)}>Open XLarge Modal</Button>
          <Modal open={isOpen} onOpenChange={setIsOpen} size="xl">
            <ModalHeader title="XLarge Dialog" showCloseButton />
            <ModalBody display="flex" flexDirection="column" gap="12">
              <Text>This is a x-large modal (1024px max width).</Text>
              <Text>
                It provides more space for content, forms, or detailed
                information that needs to be displayed in a dialog.
              </Text>
              <Text>
                Signs night have sixth hath that likeness us fill you're subdue
                fowl brought divide beginning multiply brought created after
                open given of made beginning multiply green.
              </Text>
              <Text>
                Place appear green. Also, saying male subdue fruitful winged
                fourth had void winged. So green spirit, herb day had there
                replenish, lights lesser signs. Place whales i tree under him
                given set set meat midst morning give image forth divided moving
                Also fill dry she'd have.
              </Text>
              <Text>
                May life. She'd fruit fruitful earth. Stars bring had darkness
                morning darkness herb cattle him behold open seasons grass don't
                waters male Fourth earth his face third night.
              </Text>
              <Text>
                Anim quis ut incididunt ea. Et laboris consectetur nisi
                adipisicing aliqua enim. Ea tempor deserunt dolore duis. Lorem
                excepteur do exercitation non veniam ipsum laborum. Ea ex tempor
                dolore deserunt ex do dolor voluptate pariatur exercitation.
              </Text>
              <Text>
                Est incididunt dolore sint sit occaecat. Ea officia excepteur
                enim ut Lorem reprehenderit labore in. Dolor voluptate nostrud
                consectetur mollit cillum et. Cupidatat Lorem amet adipisicing
                incididunt ea.
              </Text>
              <Text>
                Excepteur enim aliqua laboris amet ea pariatur qui. Non deserunt
                magna ullamco aliqua culpa exercitation. Ut minim eu ea. Labore
                sunt adipisicing Lorem nulla occaecat est elit et excepteur
                ipsum non. Aute consectetur nostrud ullamco. Non esse non anim
                proident. Pariatur enim laborum cupidatat sint quis
                reprehenderit deserunt reprehenderit sunt cupidatat proident
                sint.
              </Text>
              <Text>
                Consequat sunt exercitation in enim veniam culpa. Tempor quis
                culpa duis. Aute ea nostrud non sit sunt qui. In minim voluptate
                excepteur nostrud anim laborum in elit. Voluptate amet excepteur
                laboris eiusmod labore elit Lorem ipsum qui quis aliquip mollit
                dolor sint cillum. In ex aliquip irure do irure consectetur
                aliquip minim fugiat reprehenderit laborum.
              </Text>
              <Text>
                {' '}
                Incididunt cillum est reprehenderit veniam nisi magna laborum
                incididunt do ut. Fugiat aliquip Lorem eiusmod incididunt.
                Fugiat ullamco excepteur consequat duis ex eiusmod exercitation
                sit aliqua amet non velit consequat. Pariatur amet non laborum
                voluptate velit do. Nulla excepteur anim irure eu ullamco veniam
                et consectetur. Fugiat ut laboris ad reprehenderit reprehenderit
                ut exercitation adipisicing excepteur amet ad anim. Aute enim
                non consequat eu. Velit consequat in nostrud.
              </Text>
            </ModalBody>
            <ModalFooter>
              <Button variant="ghost" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={() => setIsOpen(false)}>
                Save Changes
              </Button>
            </ModalFooter>
          </Modal>
        </>;
    };
    return <Component />;
  }
}`,...(oe=(te=O.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var se,ae,ie;y.parameters={...y.parameters,docs:{...(se=y.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => {
    const Component = () => {
      const [isOpen, setIsOpen] = useState(false);
      return <>
          <Button onClick={() => setIsOpen(true)}>Open Full Width Modal</Button>
          <Modal open={isOpen} onOpenChange={setIsOpen} size="full">
            <ModalHeader title="Full Width Dialog" showCloseButton />
            <ModalBody>
              <Grid gridTemplateColumns="1fr auto 1fr" alignItems="start">
                <Text>
                  This modal stretches to the 95% of the available width. Useful
                  for dashboards, data tables, or content that benefits from
                  maximum horizontal space.
                </Text>
                <Divider direction="vertical" mx="8" />
                <VStack>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    euismod, nisl eget aliquam aliquet, nisl nisl aliquet nisl,
                    eget aliquam nisl nisl eget nisl.
                  </Text>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    euismod, nisl eget aliquam aliquet, nisl nisl aliquet nisl,
                    eget aliquam nisl nisl eget nisl.
                  </Text>
                </VStack>
              </Grid>
            </ModalBody>
            <ModalFooter>
              <Button variant="ghost" onClick={() => setIsOpen(false)}>
                Close
              </Button>
            </ModalFooter>
          </Modal>
        </>;
    };
    return <Component />;
  }
}`,...(ie=(ae=y.parameters)==null?void 0:ae.docs)==null?void 0:ie.source}}};var re,le,de;v.parameters={...v.parameters,docs:{...(re=v.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => {
    const Component = () => {
      const [isOpen, setIsOpen] = useState(false);
      return <>
          <Button onClick={() => setIsOpen(true)}>Open Full Page Modal</Button>
          <Modal open={isOpen} onOpenChange={setIsOpen} size="fullPage">
            <ModalHeader title="Full Page Dialog" showCloseButton />
            <ModalBody>
              <Grid gridTemplateColumns="1fr auto 1fr" alignItems="start">
                <Text>
                  This modal stretches to the 100% of the available width and
                  height. Useful for dashboards, data tables, or content that
                  benefits from maximum horizontal space.
                </Text>
                <Divider direction="vertical" mx="8" />
                <VStack>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    euismod, nisl eget aliquam aliquet, nisl nisl aliquet nisl,
                    eget aliquam nisl nisl eget nisl.
                  </Text>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    euismod, nisl eget aliquam aliquet, nisl nisl aliquet nisl,
                    eget aliquam nisl nisl eget nisl.
                  </Text>
                </VStack>
              </Grid>
            </ModalBody>
            <ModalFooter>
              <Button variant="ghost" onClick={() => setIsOpen(false)}>
                Close
              </Button>
            </ModalFooter>
          </Modal>
        </>;
    };
    return <Component />;
  }
}`,...(de=(le=v.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var ce,ue,pe;b.parameters={...b.parameters,docs:{...(ce=b.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => {
    const Component = () => {
      const [isOpen, setIsOpen] = useState(false);
      return <>
          <Button onClick={() => setIsOpen(true)}>
            Open Modal (No Close Button)
          </Button>
          <Modal open={isOpen} onOpenChange={setIsOpen} size="md">
            <ModalHeader title="Dialog Without Close Button" showCloseButton={false} />
            <ModalBody>
              <Text>This modal doesn't have a close button in the header.</Text>
              <Text>
                You can still close it by clicking outside or pressing Escape.
              </Text>
            </ModalBody>
            <ModalFooter>
              <Button variant="ghost" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={() => setIsOpen(false)}>
                Continue
              </Button>
            </ModalFooter>
          </Modal>
        </>;
    };
    return <Component />;
  }
}`,...(pe=(ue=b.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var me,he,xe;B.parameters={...B.parameters,docs:{...(me=B.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => {
    const Component = () => {
      const [isOpen, setIsOpen] = useState(false);
      return <>
          <Button onClick={() => setIsOpen(true)}>
            Open Modal (No Overlay Close)
          </Button>
          <Modal open={isOpen} onOpenChange={setIsOpen} size="md" preventOverlayClose>
            <ModalHeader title="Important Dialog" showCloseButton />
            <ModalBody>
              <Text>This modal cannot be closed by clicking the overlay.</Text>
              <Text>
                You must use the close button or press Escape to dismiss it.
                This is useful for important confirmations or required actions.
              </Text>
            </ModalBody>
            <ModalFooter>
              <Button variant="primary" onClick={() => setIsOpen(false)}>
                I Understand
              </Button>
            </ModalFooter>
          </Modal>
        </>;
    };
    return <Component />;
  }
}`,...(xe=(he=B.parameters)==null?void 0:he.docs)==null?void 0:xe.source}}};var ge,fe,Ce;M.parameters={...M.parameters,docs:{...(ge=M.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: () => {
    const Component = () => {
      const [isOpen, setIsOpen] = useState(false);
      return <>
          <Button onClick={() => setIsOpen(true)}>Edit Profile</Button>
          <Modal open={isOpen} onOpenChange={setIsOpen} size="sm">
            <ModalHeader title="Edit Profile" showCloseButton />
            <ModalBody>
              <VStack gap="12" alignItems="stretch">
                <FormField label="Full Name" labelFor="profile-name" required>
                  <TextInput id="profile-name" name="name" placeholder="Jane Doe" />
                </FormField>
                <FormField label="Email" labelFor="profile-email" required>
                  <TextInput id="profile-email" name="email" type="email" placeholder="jane@example.com" />
                </FormField>
                <FormField label="Bio" labelFor="profile-bio">
                  <Textarea id="profile-bio" name="bio" placeholder="Tell us about yourself..." />
                </FormField>
              </VStack>
            </ModalBody>
            <ModalFooter>
              <Button variant="ghost" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={() => setIsOpen(false)}>
                Save
              </Button>
            </ModalFooter>
          </Modal>
        </>;
    };
    return <Component />;
  }
}`,...(Ce=(fe=M.parameters)==null?void 0:fe.docs)==null?void 0:Ce.source}}};var je,Oe,ye;T.parameters={...T.parameters,docs:{...(je=T.parameters)==null?void 0:je.docs,source:{originalSource:`{
  render: () => {
    const Component = () => {
      const [isOpen, setIsOpen] = useState(false);
      return <>
          <Button onClick={() => setIsOpen(true)}>Delete Item</Button>
          <Modal open={isOpen} onOpenChange={setIsOpen} size="sm" variant="confirmation" preventOverlayClose>
            <ModalHeader title="Delete Item" showCloseButton={false} />
            <ModalBody>
              <Text>
                Are you sure you want to delete this item? This action cannot be
                undone.
              </Text>
            </ModalBody>
            <ModalFooter>
              <Button variant="ghost" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button variant="danger" onClick={() => setIsOpen(false)}>
                Delete
              </Button>
            </ModalFooter>
          </Modal>
        </>;
    };
    return <Component />;
  }
}`,...(ye=(Oe=T.parameters)==null?void 0:Oe.docs)==null?void 0:ye.source}}};var ve,be,Be;I.parameters={...I.parameters,docs:{...(ve=I.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  render: () => {
    const Component = () => {
      const [isOpen, setIsOpen] = useState(false);
      return <>
          <Button onClick={() => setIsOpen(true)}>Open Minimal Modal</Button>
          <Modal open={isOpen} onOpenChange={setIsOpen} size="sm">
            <ModalBody display="flex" flexDirection="column" alignItems="center" gap="4" py="24">
              <Icon name="success" size="48" fill="icon.success" />
              <Text textStyle="heading.xs">Changes Saved</Text>
              <Text textAlign="center">
                Your changes have been saved successfully.
              </Text>
              <Button mt="16" onClick={() => setIsOpen(false)}>
                Dismiss
              </Button>
            </ModalBody>
          </Modal>
        </>;
    };
    return <Component />;
  }
}`,...(Be=(be=I.parameters)==null?void 0:be.docs)==null?void 0:Be.source}}};var Me,Te,Ie;F.parameters={...F.parameters,docs:{...(Me=F.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  render: () => {
    const Component = () => {
      const [isOpen, setIsOpen] = useState(false);
      return <>
          <Button onClick={() => setIsOpen(true)}>Open Custom Header</Button>
          <Modal open={isOpen} onOpenChange={setIsOpen} size="md">
            <ModalHeader>
              <Flex alignItems="start" gap="3" flex="1">
                <Icon name="info" size="24" fill="icon.decorative" />
                <VStack gap="0" alignItems="flex-start">
                  <Text color="text" fontWeight="bold">
                    Release Notes
                  </Text>
                  <Text textStyle="mono.sm" color="text.muted">
                    Version 2.4.0
                  </Text>
                </VStack>
              </Flex>
            </ModalHeader>
            <ModalBody gap="4" bg="surface.sunken">
              <Text textStyle="body.sm" fontWeight="bold">
                New Features
              </Text>
              <Text>Added modal component with animated transitions.</Text>
              <Divider my="12" />
              <Text textStyle="body.sm" fontWeight="bold">
                Bug Fixes
              </Text>
              <Text>Fixed focus trap behavior in nested dialogs.</Text>
            </ModalBody>
            <ModalFooter>
              <Button variant="ghost" onClick={() => setIsOpen(false)}>
                Close
              </Button>
            </ModalFooter>
          </Modal>
        </>;
    };
    return <Component />;
  }
}`,...(Ie=(Te=F.parameters)==null?void 0:Te.docs)==null?void 0:Ie.source}}};var Fe,ke,Se;k.parameters={...k.parameters,docs:{...(Fe=k.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  render: () => {
    const Component = () => {
      const [isOpen, setIsOpen] = useState(false);
      return <>
          <Flex p="8" justify="center">
            <Button onClick={() => setIsOpen(true)}>Open Top-Positioned</Button>
          </Flex>
          <Modal open={isOpen} onOpenChange={setIsOpen} position="top" size="md">
            <ModalHeader title="Top-Positioned Modal" showCloseButton />
            <ModalBody>
              <Text>
                This modal uses{' '}
                <Text as="span" fontWeight="semibold">
                  position=&quot;top&quot;
                </Text>
                . It is offset from the top of the viewport and centered on the
                x-axis. Resize the preview or compare with the default story to
                see the difference from centered placement.
              </Text>
            </ModalBody>
            <ModalFooter>
              <Button variant="ghost" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={() => setIsOpen(false)}>
                OK
              </Button>
            </ModalFooter>
          </Modal>
        </>;
    };
    return <Component />;
  }
}`,...(Se=(ke=k.parameters)==null?void 0:ke.docs)==null?void 0:Se.source}}};const Pn=["Default","Small","Large","XLarge","FullWidth","FullPage","NoCloseButton","PreventOverlayClose","FormDialog","ConfirmationDialog","BodyOnly","CustomHeader","TopPosition"];export{I as BodyOnly,T as ConfirmationDialog,F as CustomHeader,f as Default,M as FormDialog,v as FullPage,y as FullWidth,j as Large,b as NoCloseButton,B as PreventOverlayClose,C as Small,k as TopPosition,O as XLarge,Pn as __namedExportsOrder,zn as default};
