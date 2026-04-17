import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./index-BKyFwriW.js";import{m as Ae,f as Re,s as We,a as Ue,g as Xe,d as S,e as g,B as q,G as Se,V as L,F as qe}from"./Box-CpGDZWWa.js";import{B as a}from"./Button-Ce5G6BLl.js";import{D as we}from"./Divider-Bb1zwcTk.js";import{F as _}from"./FormField-cTlJfqtD.js";import{I as De}from"./Icon-BgHyrg9m.js";import"./IconConfig-D8Vw8IRf.js";import{T as s}from"./Text-BWKer1p_.js";import{T as Ye}from"./Textarea-B147lMMR.js";import{T as R}from"./TextInput-CgM-mruk.js";import{u as Ge,a as Ke,b as Qe,F as Je,B as $e,c as Ze}from"./floating-AgLCAi8_.js";import{u as en}from"./mq.hook-BU-2oBAn.js";import{H as nn}from"./Heading-CiBmqICw.js";import{I as tn}from"./IconButton-DopoJ0MS.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Spinner-VhrjE2nR.js";import"./Label-BQdsfQr5.js";import"./Tooltip-DImqUvHl.js";import"./index-CxmYaGqE.js";import"./index-DQw2Bw4b.js";import"./radii-Ir2x-kmI.js";import"./index-DOpYXeGo.js";import"./colors-CLHggMRt.js";const ze={variant:"default",size:"md",position:"centered"},on=[],sn=[["overlay","modal__overlay"],["container","modal__container"],["header","modal__header"],["title","modal__title"],["closeButton","modal__closeButton"],["body","modal__body"],["footer","modal__footer"]],an=sn.map(([t,o])=>[t,Ue(o,ze,Xe(on,t))]),rn=Ae((t={})=>Object.fromEntries(an.map(([o,n])=>[o,n.recipeFn(t)]))),W=["size","position","variant"],ln=t=>({...ze,...Re(t)}),w=Object.assign(rn,{__recipe__:!1,__name__:"modal",raw:t=>t,classNameMap:{},variantKeys:W,variantMap:{size:["sm","md","lg","xl","full","mobile"],position:["centered","top"],variant:["default","confirmation"]},splitVariantProps(t){return We(t,W)},getVariantProps:ln}),Ne=i.createContext(null),dn=()=>{const t=i.useContext(Ne);if(!t)throw new Error("Modal components must be used within a <Modal> provider");return t},cn=(t,o)=>{switch(o.type){case"open":return{phase:"open"};case"startClosing":return t.phase==="closed"?t:{phase:"closing"};case"finishClosing":return{phase:"closed"};default:return t}},r=t=>{const{open:o,onOpenChange:n,size:p="md",preventOverlayClose:u=!1,children:m,id:D,variant:x="default",position:z="centered",...N}=t,[Pe,Ee]=S(N),V=w({size:p,variant:x,position:z}),[{phase:P},E]=i.useReducer(cn,{phase:o?"open":"closed"}),h=i.useRef(null),{refs:_e,context:H}=Ge({open:o,onOpenChange:n,strategy:"fixed",middleware:[]}),Le=Ke(H,{outsidePress:!u}),{getFloatingProps:Ve}=Qe([Le]);i.useEffect(()=>{if(o){E({type:"open"}),h.current&&(clearTimeout(h.current),h.current=null);return}return E({type:"startClosing"}),h.current=setTimeout(()=>{E({type:"finishClosing"})},150),()=>{h.current&&clearTimeout(h.current)}},[o]);const He={open:P==="open",onClose:()=>n(!1),preventOverlayClose:u};if(P==="closed")return null;const A=P==="closing"?"closing":"open";return e.jsx(Ne.Provider,{value:He,children:e.jsxs(Je,{children:[e.jsx($e,{lockScroll:!0,className:g(V.overlay),"data-state":A,onClick:u?void 0:()=>n(!1),"aria-hidden":"true"}),e.jsx(Ze,{context:H,modal:!0,children:e.jsx(q,{ref:_e.setFloating,className:g(V.container,Pe),"data-state":A,id:D,role:"dialog","aria-modal":"true",...Ve(),...Ee,children:m})})]})})};r.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{open:{required:!0,tsType:{name:"boolean"},description:"Controlled open state (REQUIRED)"},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:"Callback when open state should change (REQUIRED)"},preventOverlayClose:{required:!1,tsType:{name:"boolean"},description:"Whether clicking the overlay should close the modal"},children:{required:!0,tsType:{name:"ReactNode"},description:"Children (ModalHeader, ModalBody, ModalFooter)"},id:{required:!1,tsType:{name:"string"},description:"Optional ID for ARIA attributes"},size:{required:!1,tsType:{name:"ModalVariantProps['size']",raw:"ModalVariantProps['size']"},description:""},position:{required:!1,tsType:{name:"ModalVariantProps['position']",raw:"ModalVariantProps['position']"},description:""}}};const l=t=>{const{children:o,...n}=t,[p,u]=S(n),m=w();return e.jsx(q,{className:g(m.body,p),...u,children:o})};l.__docgenInfo={description:"",methods:[],displayName:"ModalBody",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Body content"}}};const d=t=>{const{children:o,...n}=t,[p,u]=S(n),m=w();return e.jsx(q,{className:g(m.footer,p),...u,children:o})};d.__docgenInfo={description:"",methods:[],displayName:"ModalFooter",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Footer content (typically action buttons)"}}};const c=t=>{const{title:o,showCloseButton:n=!0,children:p,...u}=t,[m,D]=S(u),x=w(),{onClose:z}=dn(),N=en("sm");return e.jsx(q,{className:g(x.header,m),...D,children:p||e.jsxs(e.Fragment,{children:[o&&e.jsx(nn,{level:"h3",textStyle:{base:"heading.sm",sm:"heading.xs"},className:x.title,children:o}),n&&e.jsx(tn,{variant:"ghost",size:N?"md":"lg",onClick:z,altText:"Close dialog","aria-label":"Close dialog",className:x.closeButton,iconName:"x"})]})})};c.__docgenInfo={description:"",methods:[],displayName:"ModalHeader",props:{title:{required:!1,tsType:{name:"string"},description:"Title text"},showCloseButton:{required:!1,tsType:{name:"boolean"},description:"Whether to show the close button"},children:{required:!1,tsType:{name:"ReactNode"},description:"Children (custom header content)"}}};const Nn={title:"Components/Modal",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg","xl","full"],description:"Modal size",table:{defaultValue:{summary:"md"}}},variant:{control:"select",options:["defauilt","confirmation"],description:"Modal type",table:{defaultValue:{summary:"default"}}},preventOverlayClose:{control:"boolean",description:"Prevent closing when clicking overlay"},position:{control:"select",options:["centered","top"],description:"Centered in the viewport, or fixed below the top edge (horizontally centered)",table:{defaultValue:{summary:"centered"}}}}},f={render:()=>{const t=()=>{const[o,n]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>n(!0),children:"Open Modal"}),e.jsxs(r,{open:o,onOpenChange:n,size:"md",children:[e.jsx(c,{title:"Dialog Title",showCloseButton:!0}),e.jsxs(l,{children:[e.jsx(s,{children:"This is the default modal dialog. It has a title, body content, and footer with action buttons. Default max-width is 576px."}),e.jsx(s,{children:"You can close it by clicking the X button, pressing Escape, or clicking outside the modal."})]}),e.jsxs(d,{children:[e.jsx(a,{variant:"ghost",onClick:()=>n(!1),children:"Cancel"}),e.jsx(a,{variant:"primary",onClick:()=>n(!1),children:"Save"})]})]})]})};return e.jsx(t,{})}},C={render:()=>{const t=()=>{const[o,n]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>n(!0),children:"Open Small Modal"}),e.jsxs(r,{open:o,onOpenChange:n,size:"sm",children:[e.jsx(c,{title:"Small Dialog",showCloseButton:!0}),e.jsx(l,{children:e.jsx(s,{children:"This is a small modal (448px max width)."})}),e.jsxs(d,{children:[e.jsx(a,{variant:"ghost",onClick:()=>n(!1),children:"Cancel"}),e.jsx(a,{variant:"primary",onClick:()=>n(!1),children:"Confirm"})]})]})]})};return e.jsx(t,{})}},O={render:()=>{const t=()=>{const[o,n]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>n(!0),children:"Open Large Modal"}),e.jsxs(r,{open:o,onOpenChange:n,size:"lg",children:[e.jsx(c,{title:"Large Dialog",showCloseButton:!0}),e.jsxs(l,{children:[e.jsx(s,{children:"This is a large modal (768px max width)."}),e.jsx(s,{children:"It provides more space for content, forms, or detailed information that needs to be displayed in a dialog."})]}),e.jsxs(d,{children:[e.jsx(a,{variant:"ghost",onClick:()=>n(!1),children:"Cancel"}),e.jsx(a,{variant:"primary",onClick:()=>n(!1),children:"Save Changes"})]})]})]})};return e.jsx(t,{})}},j={render:()=>{const t=()=>{const[o,n]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>n(!0),children:"Open XLarge Modal"}),e.jsxs(r,{open:o,onOpenChange:n,size:"xl",children:[e.jsx(c,{title:"XLarge Dialog",showCloseButton:!0}),e.jsxs(l,{display:"flex",flexDirection:"column",gap:"12",children:[e.jsx(s,{children:"This is a x-large modal (1024px max width)."}),e.jsx(s,{children:"It provides more space for content, forms, or detailed information that needs to be displayed in a dialog."}),e.jsx(s,{children:"Signs night have sixth hath that likeness us fill you're subdue fowl brought divide beginning multiply brought created after open given of made beginning multiply green."}),e.jsx(s,{children:"Place appear green. Also, saying male subdue fruitful winged fourth had void winged. So green spirit, herb day had there replenish, lights lesser signs. Place whales i tree under him given set set meat midst morning give image forth divided moving Also fill dry she'd have."}),e.jsx(s,{children:"May life. She'd fruit fruitful earth. Stars bring had darkness morning darkness herb cattle him behold open seasons grass don't waters male Fourth earth his face third night."}),e.jsx(s,{children:"Anim quis ut incididunt ea. Et laboris consectetur nisi adipisicing aliqua enim. Ea tempor deserunt dolore duis. Lorem excepteur do exercitation non veniam ipsum laborum. Ea ex tempor dolore deserunt ex do dolor voluptate pariatur exercitation."}),e.jsx(s,{children:"Est incididunt dolore sint sit occaecat. Ea officia excepteur enim ut Lorem reprehenderit labore in. Dolor voluptate nostrud consectetur mollit cillum et. Cupidatat Lorem amet adipisicing incididunt ea."}),e.jsx(s,{children:"Excepteur enim aliqua laboris amet ea pariatur qui. Non deserunt magna ullamco aliqua culpa exercitation. Ut minim eu ea. Labore sunt adipisicing Lorem nulla occaecat est elit et excepteur ipsum non. Aute consectetur nostrud ullamco. Non esse non anim proident. Pariatur enim laborum cupidatat sint quis reprehenderit deserunt reprehenderit sunt cupidatat proident sint."}),e.jsx(s,{children:"Consequat sunt exercitation in enim veniam culpa. Tempor quis culpa duis. Aute ea nostrud non sit sunt qui. In minim voluptate excepteur nostrud anim laborum in elit. Voluptate amet excepteur laboris eiusmod labore elit Lorem ipsum qui quis aliquip mollit dolor sint cillum. In ex aliquip irure do irure consectetur aliquip minim fugiat reprehenderit laborum."}),e.jsxs(s,{children:[" ","Incididunt cillum est reprehenderit veniam nisi magna laborum incididunt do ut. Fugiat aliquip Lorem eiusmod incididunt. Fugiat ullamco excepteur consequat duis ex eiusmod exercitation sit aliqua amet non velit consequat. Pariatur amet non laborum voluptate velit do. Nulla excepteur anim irure eu ullamco veniam et consectetur. Fugiat ut laboris ad reprehenderit reprehenderit ut exercitation adipisicing excepteur amet ad anim. Aute enim non consequat eu. Velit consequat in nostrud."]})]}),e.jsxs(d,{children:[e.jsx(a,{variant:"ghost",onClick:()=>n(!1),children:"Cancel"}),e.jsx(a,{variant:"primary",onClick:()=>n(!1),children:"Save Changes"})]})]})]})};return e.jsx(t,{})}},y={render:()=>{const t=()=>{const[o,n]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>n(!0),children:"Open Full Width Modal"}),e.jsxs(r,{open:o,onOpenChange:n,size:"full",children:[e.jsx(c,{title:"Full Width Dialog",showCloseButton:!0}),e.jsx(l,{children:e.jsxs(Se,{gridTemplateColumns:"1fr auto 1fr",alignItems:"start",children:[e.jsx(s,{children:"This modal stretches to the 95% of the available width. Useful for dashboards, data tables, or content that benefits from maximum horizontal space."}),e.jsx(we,{direction:"vertical",mx:"8"}),e.jsxs(L,{children:[e.jsx(s,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget aliquam aliquet, nisl nisl aliquet nisl, eget aliquam nisl nisl eget nisl."}),e.jsx(s,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget aliquam aliquet, nisl nisl aliquet nisl, eget aliquam nisl nisl eget nisl."})]})]})}),e.jsx(d,{children:e.jsx(a,{variant:"ghost",onClick:()=>n(!1),children:"Close"})})]})]})};return e.jsx(t,{})}},v={render:()=>{const t=()=>{const[o,n]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>n(!0),children:"Open Mobile Modal"}),e.jsxs(r,{open:o,onOpenChange:n,size:"mobile",children:[e.jsx(c,{title:"Mobile Dialog",showCloseButton:!0}),e.jsx(l,{children:e.jsx(Se,{children:e.jsx(s,{children:"This modal stretches to the full available width. Should be used for mobile use-cases."})})}),e.jsx(d,{children:e.jsx(a,{variant:"ghost",onClick:()=>n(!1),children:"Close"})})]})]})};return e.jsx(t,{})}},b={render:()=>{const t=()=>{const[o,n]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>n(!0),children:"Open Modal (No Close Button)"}),e.jsxs(r,{open:o,onOpenChange:n,size:"md",children:[e.jsx(c,{title:"Dialog Without Close Button",showCloseButton:!1}),e.jsxs(l,{children:[e.jsx(s,{children:"This modal doesn't have a close button in the header."}),e.jsx(s,{children:"You can still close it by clicking outside or pressing Escape."})]}),e.jsxs(d,{children:[e.jsx(a,{variant:"ghost",onClick:()=>n(!1),children:"Cancel"}),e.jsx(a,{variant:"primary",onClick:()=>n(!1),children:"Continue"})]})]})]})};return e.jsx(t,{})}},M={render:()=>{const t=()=>{const[o,n]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>n(!0),children:"Open Modal (No Overlay Close)"}),e.jsxs(r,{open:o,onOpenChange:n,size:"md",preventOverlayClose:!0,children:[e.jsx(c,{title:"Important Dialog",showCloseButton:!0}),e.jsxs(l,{children:[e.jsx(s,{children:"This modal cannot be closed by clicking the overlay."}),e.jsx(s,{children:"You must use the close button or press Escape to dismiss it. This is useful for important confirmations or required actions."})]}),e.jsx(d,{children:e.jsx(a,{variant:"primary",onClick:()=>n(!1),children:"I Understand"})})]})]})};return e.jsx(t,{})}},B={render:()=>{const t=()=>{const[o,n]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>n(!0),children:"Edit Profile"}),e.jsxs(r,{open:o,onOpenChange:n,size:"sm",children:[e.jsx(c,{title:"Edit Profile",showCloseButton:!0}),e.jsx(l,{children:e.jsxs(L,{gap:"12",alignItems:"stretch",children:[e.jsx(_,{label:"Full Name",labelFor:"profile-name",required:!0,children:e.jsx(R,{id:"profile-name",name:"name",placeholder:"Jane Doe"})}),e.jsx(_,{label:"Email",labelFor:"profile-email",required:!0,children:e.jsx(R,{id:"profile-email",name:"email",type:"email",placeholder:"jane@example.com"})}),e.jsx(_,{label:"Bio",labelFor:"profile-bio",children:e.jsx(Ye,{id:"profile-bio",name:"bio",placeholder:"Tell us about yourself..."})})]})}),e.jsxs(d,{children:[e.jsx(a,{variant:"ghost",onClick:()=>n(!1),children:"Cancel"}),e.jsx(a,{variant:"primary",onClick:()=>n(!1),children:"Save"})]})]})]})};return e.jsx(t,{})}},T={render:()=>{const t=()=>{const[o,n]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>n(!0),children:"Delete Item"}),e.jsxs(r,{open:o,onOpenChange:n,size:"sm",variant:"confirmation",preventOverlayClose:!0,children:[e.jsx(c,{title:"Delete Item",showCloseButton:!1}),e.jsx(l,{children:e.jsx(s,{children:"Are you sure you want to delete this item? This action cannot be undone."})}),e.jsxs(d,{children:[e.jsx(a,{variant:"ghost",onClick:()=>n(!1),children:"Cancel"}),e.jsx(a,{variant:"danger",onClick:()=>n(!1),children:"Delete"})]})]})]})};return e.jsx(t,{})}},I={render:()=>{const t=()=>{const[o,n]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>n(!0),children:"Open Minimal Modal"}),e.jsx(r,{open:o,onOpenChange:n,size:"sm",children:e.jsxs(l,{display:"flex",flexDirection:"column",alignItems:"center",gap:"4",py:"24",children:[e.jsx(De,{name:"success",size:"48",fill:"icon.success"}),e.jsx(s,{textStyle:"heading.xs",children:"Changes Saved"}),e.jsx(s,{textAlign:"center",children:"Your changes have been saved successfully."}),e.jsx(a,{mt:"16",onClick:()=>n(!1),children:"Dismiss"})]})})]})};return e.jsx(t,{})}},F={render:()=>{const t=()=>{const[o,n]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>n(!0),children:"Open Custom Header"}),e.jsxs(r,{open:o,onOpenChange:n,size:"md",children:[e.jsx(c,{children:e.jsxs(qe,{alignItems:"start",gap:"3",flex:"1",children:[e.jsx(De,{name:"info",size:"24",fill:"icon.decorative"}),e.jsxs(L,{gap:"0",alignItems:"flex-start",children:[e.jsx(s,{color:"text",fontWeight:"bold",children:"Release Notes"}),e.jsx(s,{textStyle:"mono.sm",color:"text.muted",children:"Version 2.4.0"})]})]})}),e.jsxs(l,{gap:"4",bg:"surface.sunken",children:[e.jsx(s,{textStyle:"body.sm",fontWeight:"bold",children:"New Features"}),e.jsx(s,{children:"Added modal component with animated transitions."}),e.jsx(we,{my:"12"}),e.jsx(s,{textStyle:"body.sm",fontWeight:"bold",children:"Bug Fixes"}),e.jsx(s,{children:"Fixed focus trap behavior in nested dialogs."})]}),e.jsx(d,{children:e.jsx(a,{variant:"ghost",onClick:()=>n(!1),children:"Close"})})]})]})};return e.jsx(t,{})}},k={render:()=>{const t=()=>{const[o,n]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(qe,{p:"8",justify:"center",children:e.jsx(a,{onClick:()=>n(!0),children:"Open Top-Positioned"})}),e.jsxs(r,{open:o,onOpenChange:n,position:"top",size:"md",children:[e.jsx(c,{title:"Top-Positioned Modal",showCloseButton:!0}),e.jsx(l,{children:e.jsxs(s,{children:["This modal uses"," ",e.jsx(s,{as:"span",fontWeight:"semibold",children:'position="top"'}),". It is offset from the top of the viewport and centered on the x-axis. Resize the preview or compare with the default story to see the difference from centered placement."]})}),e.jsxs(d,{children:[e.jsx(a,{variant:"ghost",onClick:()=>n(!1),children:"Cancel"}),e.jsx(a,{variant:"primary",onClick:()=>n(!1),children:"OK"})]})]})]})};return e.jsx(t,{})}};var U,X,Y;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(Y=(X=f.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var G,K,Q;C.parameters={...C.parameters,docs:{...(G=C.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(Q=(K=C.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var J,$,Z;O.parameters={...O.parameters,docs:{...(J=O.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Z=($=O.parameters)==null?void 0:$.docs)==null?void 0:Z.source}}};var ee,ne,te;j.parameters={...j.parameters,docs:{...(ee=j.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(te=(ne=j.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var oe,se,ae;y.parameters={...y.parameters,docs:{...(oe=y.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ae=(se=y.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};var ie,re,le;v.parameters={...v.parameters,docs:{...(ie=v.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(le=(re=v.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};var de,ce,ue;b.parameters={...b.parameters,docs:{...(de=b.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(ue=(ce=b.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var pe,me,he;M.parameters={...M.parameters,docs:{...(pe=M.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(he=(me=M.parameters)==null?void 0:me.docs)==null?void 0:he.source}}};var xe,ge,fe;B.parameters={...B.parameters,docs:{...(xe=B.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(fe=(ge=B.parameters)==null?void 0:ge.docs)==null?void 0:fe.source}}};var Ce,Oe,je;T.parameters={...T.parameters,docs:{...(Ce=T.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(je=(Oe=T.parameters)==null?void 0:Oe.docs)==null?void 0:je.source}}};var ye,ve,be;I.parameters={...I.parameters,docs:{...(ye=I.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(be=(ve=I.parameters)==null?void 0:ve.docs)==null?void 0:be.source}}};var Me,Be,Te;F.parameters={...F.parameters,docs:{...(Me=F.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
}`,...(Te=(Be=F.parameters)==null?void 0:Be.docs)==null?void 0:Te.source}}};var Ie,Fe,ke;k.parameters={...k.parameters,docs:{...(Ie=k.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(ke=(Fe=k.parameters)==null?void 0:Fe.docs)==null?void 0:ke.source}}};const Pn=["Default","Small","Large","XLarge","FullWidth","Mobile","NoCloseButton","PreventOverlayClose","FormDialog","ConfirmationDialog","BodyOnly","CustomHeader","TopPosition"];export{I as BodyOnly,T as ConfirmationDialog,F as CustomHeader,f as Default,B as FormDialog,y as FullWidth,O as Large,v as Mobile,b as NoCloseButton,M as PreventOverlayClose,C as Small,k as TopPosition,j as XLarge,Pn as __namedExportsOrder,Nn as default};
