import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./index-BKyFwriW.js";import{m as ze,c as Ee,s as _e,a as Le,g as Pe,b as k,d as g,B as S,G as Me,V as _,F as Ve}from"./Box-7HecziK7.js";import{B as a}from"./Button-dQDHk8vC.js";import{D as Te}from"./Divider-yN9n0DVv.js";import{F as E}from"./FormField-DnrtL1gy.js";import{I as Ie}from"./Icon-Bj4A0bIZ.js";import{T as s}from"./Text-DorGSoIa.js";import{T as Ae}from"./Textarea-CGZ2TY41.js";import{T as A}from"./TextInput-8L852tVm.js";import{u as He,a as Re,b as We,F as Ue,A as Xe,c as Ye}from"./floating-ui.react-B-Gez0OS.js";import{H as Ge}from"./Heading-CvLa88Hx.js";import{I as Je}from"./IconButton-49-3fxYK.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Spinner-8UulBtMs.js";import"./Label-4WIfKQ-f.js";import"./Tooltip-COlECLKP.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";const Fe={size:"md"},Ke=[],Qe=[["overlay","modal__overlay"],["container","modal__container"],["header","modal__header"],["title","modal__title"],["closeButton","modal__closeButton"],["body","modal__body"],["footer","modal__footer"]],$e=Qe.map(([t,o])=>[t,Le(o,Fe,Pe(Ke,t))]),Ze=ze((t={})=>Object.fromEntries($e.map(([o,n])=>[o,n.recipeFn(t)]))),H=["size"],en=t=>({...Fe,...Ee(t)}),q=Object.assign(Ze,{__recipe__:!1,__name__:"modal",raw:t=>t,classNameMap:{},variantKeys:H,variantMap:{size:["sm","md","lg","xl","full","mobile"]},splitVariantProps(t){return _e(t,H)},getVariantProps:en}),ke=i.createContext(null),nn=()=>{const t=i.useContext(ke);if(!t)throw new Error("Modal components must be used within a <Modal> provider");return t},tn=(t,o)=>{switch(o.type){case"open":return{phase:"open"};case"startClosing":return t.phase==="closed"?t:{phase:"closing"};case"finishClosing":return{phase:"closed"};default:return t}},r=t=>{const{open:o,onOpenChange:n,size:p="md",preventOverlayClose:u=!1,children:m,id:w,...x}=t,[D,Se]=k(x),L=q({size:p}),[{phase:N},z]=i.useReducer(tn,{phase:o?"open":"closed"}),h=i.useRef(null),{refs:qe,context:P}=He({open:o,onOpenChange:n}),we=Re(P,{outsidePress:!u}),{getFloatingProps:De}=We([we]);i.useEffect(()=>{if(o){z({type:"open"}),h.current&&(clearTimeout(h.current),h.current=null);return}return z({type:"startClosing"}),h.current=setTimeout(()=>{z({type:"finishClosing"})},150),()=>{h.current&&clearTimeout(h.current)}},[o]);const Ne={open:N==="open",onClose:()=>n(!1),preventOverlayClose:u};if(N==="closed")return null;const V=N==="closing"?"closing":"open";return e.jsx(ke.Provider,{value:Ne,children:e.jsxs(Ue,{children:[e.jsx(Xe,{lockScroll:!0,className:g(L.overlay),"data-state":V,onClick:u?void 0:()=>n(!1),"aria-hidden":"true"}),e.jsx(Ye,{context:P,modal:!0,children:e.jsx(S,{ref:qe.setFloating,className:g(L.container,D),"data-state":V,id:w,role:"dialog","aria-modal":"true",...De(),...Se,children:m})})]})})};r.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{open:{required:!0,tsType:{name:"boolean"},description:"Controlled open state (REQUIRED)"},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:"Callback when open state should change (REQUIRED)"},preventOverlayClose:{required:!1,tsType:{name:"boolean"},description:"Whether clicking the overlay should close the modal"},children:{required:!0,tsType:{name:"ReactNode"},description:"Children (ModalHeader, ModalBody, ModalFooter)"},id:{required:!1,tsType:{name:"string"},description:"Optional ID for ARIA attributes"}}};const l=t=>{const{children:o,...n}=t,[p,u]=k(n),m=q();return e.jsx(S,{className:g(m.body,p),...u,children:o})};l.__docgenInfo={description:"",methods:[],displayName:"ModalBody",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Body content"}}};const d=t=>{const{children:o,...n}=t,[p,u]=k(n),m=q();return e.jsx(S,{className:g(m.footer,p),...u,children:o})};d.__docgenInfo={description:"",methods:[],displayName:"ModalFooter",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Footer content (typically action buttons)"}}};const c=t=>{const{title:o,showCloseButton:n=!0,children:p,...u}=t,[m,w]=k(u),x=q(),{onClose:D}=nn();return e.jsx(S,{className:g(x.header,m),...w,children:p||e.jsxs(e.Fragment,{children:[o&&e.jsx(Ge,{level:"h3",textStyle:"heading.xs",className:x.title,children:o}),n&&e.jsx(Je,{variant:"ghost",onClick:D,altText:"Close dialog","aria-label":"Close dialog",className:x.closeButton,iconName:"x"})]})})};c.__docgenInfo={description:"",methods:[],displayName:"ModalHeader",props:{title:{required:!1,tsType:{name:"string"},description:"Title text"},showCloseButton:{required:!1,tsType:{name:"boolean"},description:"Whether to show the close button"},children:{required:!1,tsType:{name:"ReactNode"},description:"Children (custom header content)"}}};const vn={title:"Components/Modal",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg","xl","full"],description:"Modal size",table:{defaultValue:{summary:"md"}}},preventOverlayClose:{control:"boolean",description:"Prevent closing when clicking overlay"}}},f={render:()=>{const t=()=>{const[o,n]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>n(!0),children:"Open Modal"}),e.jsxs(r,{open:o,onOpenChange:n,size:"md",children:[e.jsx(c,{title:"Dialog Title",showCloseButton:!0}),e.jsxs(l,{children:[e.jsx(s,{children:"This is the default modal dialog. It has a title, body content, and footer with action buttons. Default max-width is 576px."}),e.jsx(s,{children:"You can close it by clicking the X button, pressing Escape, or clicking outside the modal."})]}),e.jsxs(d,{children:[e.jsx(a,{variant:"ghost",onClick:()=>n(!1),children:"Cancel"}),e.jsx(a,{variant:"primary",onClick:()=>n(!1),children:"Save"})]})]})]})};return e.jsx(t,{})}},C={render:()=>{const t=()=>{const[o,n]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>n(!0),children:"Open Small Modal"}),e.jsxs(r,{open:o,onOpenChange:n,size:"sm",children:[e.jsx(c,{title:"Small Dialog",showCloseButton:!0}),e.jsx(l,{children:e.jsx(s,{children:"This is a small modal (448px max width)."})}),e.jsxs(d,{children:[e.jsx(a,{variant:"ghost",onClick:()=>n(!1),children:"Cancel"}),e.jsx(a,{variant:"primary",onClick:()=>n(!1),children:"Confirm"})]})]})]})};return e.jsx(t,{})}},O={render:()=>{const t=()=>{const[o,n]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>n(!0),children:"Open Large Modal"}),e.jsxs(r,{open:o,onOpenChange:n,size:"lg",children:[e.jsx(c,{title:"Large Dialog",showCloseButton:!0}),e.jsxs(l,{children:[e.jsx(s,{children:"This is a large modal (768px max width)."}),e.jsx(s,{children:"It provides more space for content, forms, or detailed information that needs to be displayed in a dialog."})]}),e.jsxs(d,{children:[e.jsx(a,{variant:"ghost",onClick:()=>n(!1),children:"Cancel"}),e.jsx(a,{variant:"primary",onClick:()=>n(!1),children:"Save Changes"})]})]})]})};return e.jsx(t,{})}},j={render:()=>{const t=()=>{const[o,n]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>n(!0),children:"Open XLarge Modal"}),e.jsxs(r,{open:o,onOpenChange:n,size:"xl",children:[e.jsx(c,{title:"XLarge Dialog",showCloseButton:!0}),e.jsxs(l,{display:"flex",flexDirection:"column",gap:"12",children:[e.jsx(s,{children:"This is a x-large modal (1024px max width)."}),e.jsx(s,{children:"It provides more space for content, forms, or detailed information that needs to be displayed in a dialog."}),e.jsx(s,{children:"Signs night have sixth hath that likeness us fill you're subdue fowl brought divide beginning multiply brought created after open given of made beginning multiply green."}),e.jsx(s,{children:"Place appear green. Also, saying male subdue fruitful winged fourth had void winged. So green spirit, herb day had there replenish, lights lesser signs. Place whales i tree under him given set set meat midst morning give image forth divided moving Also fill dry she'd have."}),e.jsx(s,{children:"May life. She'd fruit fruitful earth. Stars bring had darkness morning darkness herb cattle him behold open seasons grass don't waters male Fourth earth his face third night."}),e.jsx(s,{children:"Anim quis ut incididunt ea. Et laboris consectetur nisi adipisicing aliqua enim. Ea tempor deserunt dolore duis. Lorem excepteur do exercitation non veniam ipsum laborum. Ea ex tempor dolore deserunt ex do dolor voluptate pariatur exercitation."}),e.jsx(s,{children:"Est incididunt dolore sint sit occaecat. Ea officia excepteur enim ut Lorem reprehenderit labore in. Dolor voluptate nostrud consectetur mollit cillum et. Cupidatat Lorem amet adipisicing incididunt ea."}),e.jsx(s,{children:"Excepteur enim aliqua laboris amet ea pariatur qui. Non deserunt magna ullamco aliqua culpa exercitation. Ut minim eu ea. Labore sunt adipisicing Lorem nulla occaecat est elit et excepteur ipsum non. Aute consectetur nostrud ullamco. Non esse non anim proident. Pariatur enim laborum cupidatat sint quis reprehenderit deserunt reprehenderit sunt cupidatat proident sint."}),e.jsx(s,{children:"Consequat sunt exercitation in enim veniam culpa. Tempor quis culpa duis. Aute ea nostrud non sit sunt qui. In minim voluptate excepteur nostrud anim laborum in elit. Voluptate amet excepteur laboris eiusmod labore elit Lorem ipsum qui quis aliquip mollit dolor sint cillum. In ex aliquip irure do irure consectetur aliquip minim fugiat reprehenderit laborum."}),e.jsxs(s,{children:[" ","Incididunt cillum est reprehenderit veniam nisi magna laborum incididunt do ut. Fugiat aliquip Lorem eiusmod incididunt. Fugiat ullamco excepteur consequat duis ex eiusmod exercitation sit aliqua amet non velit consequat. Pariatur amet non laborum voluptate velit do. Nulla excepteur anim irure eu ullamco veniam et consectetur. Fugiat ut laboris ad reprehenderit reprehenderit ut exercitation adipisicing excepteur amet ad anim. Aute enim non consequat eu. Velit consequat in nostrud."]})]}),e.jsxs(d,{children:[e.jsx(a,{variant:"ghost",onClick:()=>n(!1),children:"Cancel"}),e.jsx(a,{variant:"primary",onClick:()=>n(!1),children:"Save Changes"})]})]})]})};return e.jsx(t,{})}},y={render:()=>{const t=()=>{const[o,n]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>n(!0),children:"Open Full Width Modal"}),e.jsxs(r,{open:o,onOpenChange:n,size:"full",children:[e.jsx(c,{title:"Full Width Dialog",showCloseButton:!0}),e.jsx(l,{children:e.jsxs(Me,{gridTemplateColumns:"1fr auto 1fr",alignItems:"start",children:[e.jsx(s,{children:"This modal stretches to the 95% of the available width. Useful for dashboards, data tables, or content that benefits from maximum horizontal space."}),e.jsx(Te,{direction:"vertical",mx:"8"}),e.jsxs(_,{children:[e.jsx(s,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget aliquam aliquet, nisl nisl aliquet nisl, eget aliquam nisl nisl eget nisl."}),e.jsx(s,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget aliquam aliquet, nisl nisl aliquet nisl, eget aliquam nisl nisl eget nisl."})]})]})}),e.jsx(d,{children:e.jsx(a,{variant:"ghost",onClick:()=>n(!1),children:"Close"})})]})]})};return e.jsx(t,{})}},b={render:()=>{const t=()=>{const[o,n]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>n(!0),children:"Open Mobile Modal"}),e.jsxs(r,{open:o,onOpenChange:n,size:"mobile",children:[e.jsx(c,{title:"Mobile Dialog",showCloseButton:!0}),e.jsx(l,{children:e.jsx(Me,{children:e.jsx(s,{children:"This modal stretches to the full available width. Should be used for mobile use-cases."})})}),e.jsx(d,{children:e.jsx(a,{variant:"ghost",onClick:()=>n(!1),children:"Close"})})]})]})};return e.jsx(t,{})}},v={render:()=>{const t=()=>{const[o,n]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>n(!0),children:"Open Modal (No Close Button)"}),e.jsxs(r,{open:o,onOpenChange:n,size:"md",children:[e.jsx(c,{title:"Dialog Without Close Button",showCloseButton:!1}),e.jsxs(l,{children:[e.jsx(s,{children:"This modal doesn't have a close button in the header."}),e.jsx(s,{children:"You can still close it by clicking outside or pressing Escape."})]}),e.jsxs(d,{children:[e.jsx(a,{variant:"ghost",onClick:()=>n(!1),children:"Cancel"}),e.jsx(a,{variant:"primary",onClick:()=>n(!1),children:"Continue"})]})]})]})};return e.jsx(t,{})}},B={render:()=>{const t=()=>{const[o,n]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>n(!0),children:"Open Modal (No Overlay Close)"}),e.jsxs(r,{open:o,onOpenChange:n,size:"md",preventOverlayClose:!0,children:[e.jsx(c,{title:"Important Dialog",showCloseButton:!0}),e.jsxs(l,{children:[e.jsx(s,{children:"This modal cannot be closed by clicking the overlay."}),e.jsx(s,{children:"You must use the close button or press Escape to dismiss it. This is useful for important confirmations or required actions."})]}),e.jsx(d,{children:e.jsx(a,{variant:"primary",onClick:()=>n(!1),children:"I Understand"})})]})]})};return e.jsx(t,{})}},M={render:()=>{const t=()=>{const[o,n]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>n(!0),children:"Edit Profile"}),e.jsxs(r,{open:o,onOpenChange:n,size:"sm",children:[e.jsx(c,{title:"Edit Profile",showCloseButton:!0}),e.jsx(l,{children:e.jsxs(_,{gap:"12",alignItems:"stretch",children:[e.jsx(E,{label:"Full Name",labelFor:"profile-name",required:!0,children:e.jsx(A,{id:"profile-name",name:"name",placeholder:"Jane Doe"})}),e.jsx(E,{label:"Email",labelFor:"profile-email",required:!0,children:e.jsx(A,{id:"profile-email",name:"email",type:"email",placeholder:"jane@example.com"})}),e.jsx(E,{label:"Bio",labelFor:"profile-bio",children:e.jsx(Ae,{id:"profile-bio",name:"bio",placeholder:"Tell us about yourself..."})})]})}),e.jsxs(d,{children:[e.jsx(a,{variant:"ghost",onClick:()=>n(!1),children:"Cancel"}),e.jsx(a,{variant:"primary",onClick:()=>n(!1),children:"Save"})]})]})]})};return e.jsx(t,{})}},T={render:()=>{const t=()=>{const[o,n]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>n(!0),children:"Delete Item"}),e.jsxs(r,{open:o,onOpenChange:n,size:"sm",preventOverlayClose:!0,children:[e.jsx(c,{title:"Delete Item",showCloseButton:!1}),e.jsx(l,{children:e.jsx(s,{children:"Are you sure you want to delete this item? This action cannot be undone."})}),e.jsxs(d,{children:[e.jsx(a,{variant:"ghost",onClick:()=>n(!1),children:"Cancel"}),e.jsx(a,{variant:"danger",onClick:()=>n(!1),children:"Delete"})]})]})]})};return e.jsx(t,{})}},I={render:()=>{const t=()=>{const[o,n]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>n(!0),children:"Open Minimal Modal"}),e.jsx(r,{open:o,onOpenChange:n,size:"sm",children:e.jsxs(l,{display:"flex",flexDirection:"column",alignItems:"center",gap:"4",py:"24",children:[e.jsx(Ie,{name:"success",size:"48",fill:"icon.success"}),e.jsx(s,{textStyle:"heading.xs",children:"Changes Saved"}),e.jsx(s,{textAlign:"center",children:"Your changes have been saved successfully."}),e.jsx(a,{mt:"16",onClick:()=>n(!1),children:"Dismiss"})]})})]})};return e.jsx(t,{})}},F={render:()=>{const t=()=>{const[o,n]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>n(!0),children:"Open Custom Header"}),e.jsxs(r,{open:o,onOpenChange:n,size:"md",children:[e.jsx(c,{children:e.jsxs(Ve,{alignItems:"start",gap:"3",flex:"1",children:[e.jsx(Ie,{name:"info",size:"24",fill:"icon.decorative"}),e.jsxs(_,{gap:"0",alignItems:"flex-start",children:[e.jsx(s,{color:"text",fontWeight:"bold",children:"Release Notes"}),e.jsx(s,{textStyle:"mono.sm",color:"text.muted",children:"Version 2.4.0"})]})]})}),e.jsxs(l,{gap:"4",bg:"surface.sunken",children:[e.jsx(s,{textStyle:"body.sm",fontWeight:"bold",children:"New Features"}),e.jsx(s,{children:"Added modal component with animated transitions."}),e.jsx(Te,{my:"12"}),e.jsx(s,{textStyle:"body.sm",fontWeight:"bold",children:"Bug Fixes"}),e.jsx(s,{children:"Fixed focus trap behavior in nested dialogs."})]}),e.jsx(d,{children:e.jsx(a,{variant:"ghost",onClick:()=>n(!1),children:"Close"})})]})]})};return e.jsx(t,{})}};var R,W,U;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(U=(W=f.parameters)==null?void 0:W.docs)==null?void 0:U.source}}};var X,Y,G;C.parameters={...C.parameters,docs:{...(X=C.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(G=(Y=C.parameters)==null?void 0:Y.docs)==null?void 0:G.source}}};var J,K,Q;O.parameters={...O.parameters,docs:{...(J=O.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Q=(K=O.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var $,Z,ee;j.parameters={...j.parameters,docs:{...($=j.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(ee=(Z=j.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ne,te,oe;y.parameters={...y.parameters,docs:{...(ne=y.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(oe=(te=y.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var se,ae,ie;b.parameters={...b.parameters,docs:{...(se=b.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => {
    const Component = () => {
      const [isOpen, setIsOpen] = useState(false);
      return <>
          <Button onClick={() => setIsOpen(true)}>Open Mobile Modal</Button>
          <Modal open={isOpen} onOpenChange={setIsOpen} size="mobile">
            <ModalHeader title="Mobile Dialog" showCloseButton />
            <ModalBody>
              <Grid>
                <Text>
                  This modal stretches to the full available width. Should be
                  used for mobile use-cases.
                </Text>
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
}`,...(ie=(ae=b.parameters)==null?void 0:ae.docs)==null?void 0:ie.source}}};var re,le,de;v.parameters={...v.parameters,docs:{...(re=v.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(de=(le=v.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var ce,ue,pe;B.parameters={...B.parameters,docs:{...(ce=B.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(pe=(ue=B.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var me,he,xe;M.parameters={...M.parameters,docs:{...(me=M.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(xe=(he=M.parameters)==null?void 0:he.docs)==null?void 0:xe.source}}};var ge,fe,Ce;T.parameters={...T.parameters,docs:{...(ge=T.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: () => {
    const Component = () => {
      const [isOpen, setIsOpen] = useState(false);
      return <>
          <Button onClick={() => setIsOpen(true)}>Delete Item</Button>
          <Modal open={isOpen} onOpenChange={setIsOpen} size="sm" preventOverlayClose>
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
}`,...(Ce=(fe=T.parameters)==null?void 0:fe.docs)==null?void 0:Ce.source}}};var Oe,je,ye;I.parameters={...I.parameters,docs:{...(Oe=I.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
}`,...(ye=(je=I.parameters)==null?void 0:je.docs)==null?void 0:ye.source}}};var be,ve,Be;F.parameters={...F.parameters,docs:{...(be=F.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(Be=(ve=F.parameters)==null?void 0:ve.docs)==null?void 0:Be.source}}};const Bn=["Default","Small","Large","XLarge","FullWidth","Mobile","NoCloseButton","PreventOverlayClose","FormDialog","ConfirmationDialog","BodyOnly","CustomHeader"];export{I as BodyOnly,T as ConfirmationDialog,F as CustomHeader,f as Default,M as FormDialog,y as FullWidth,O as Large,b as Mobile,v as NoCloseButton,B as PreventOverlayClose,C as Small,j as XLarge,Bn as __namedExportsOrder,vn as default};
